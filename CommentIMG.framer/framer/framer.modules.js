require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"slider":[function(require,module,exports){
var wrapSlider,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Events.SliderValueChange = "sliderValueChange";

exports.Slider = (function(superClass) {
  extend(Slider, superClass);

  function Slider(options) {
    if (options == null) {
      options = {};
    }
    this._updateValue = bind(this._updateValue, this);
    this._knobDidMove = bind(this._knobDidMove, this);
    this._updateFrame = bind(this._updateFrame, this);
    this._updateKnob = bind(this._updateKnob, this);
    this._updateFill = bind(this._updateFill, this);
    this._touchEnd = bind(this._touchEnd, this);
    this._touchStart = bind(this._touchStart, this);
    Slider.__super__.constructor.call(this, options);
  }

  Slider._knob = void 0;

  Slider._fill = void 0;

  Slider._background = void 0;

  Slider.prototype._touchStart = function(event) {
    var scaleX, scaleY, touchX, touchY;
    event.preventDefault();
    if (this._background.width > this._background.height) {
      touchX = Events.touchEvent(event).clientX - Screen.canvasFrame.x;
      scaleX = this.canvasScaleX();
      this.value = this.valueForPoint(touchX / scaleX - this.screenFrame.x);
    } else {
      touchY = Events.touchEvent(event).clientY - Screen.canvasFrame.y;
      scaleY = this.canvasScaleY();
      this.value = this.valueForPoint(touchY / scaleY - this.screenFrame.y);
    }
    this._knob.draggable._touchStart(event);
    return this._updateValue();
  };

  Slider.prototype._touchEnd = function(event) {
    return this._updateValue();
  };

  Slider.prototype._updateFill = function() {
    if (this._background.width > this._background.height) {
      return this._fill.width = this._knob.midX;
    } else {
      return this._fill.height = this._knob.midY;
    }
  };

  Slider.prototype._updateKnob = function() {
    if (this._background.width > this._background.height) {
      this._knob.midX = this._fill.width;
      return this._knob.centerY();
    } else {
      this._knob.midY = this._fill.height;
      return this._knob.centerX();
    }
  };

  Slider.prototype._updateFrame = function() {
    this._knob.draggable.constraints = {
      x: -knob.width / 2,
      y: -knob.height / 2,
      width: this._background.width + this._knob.width,
      height: this._background.height + this._knob.height
    };
    if (this.constrained) {
      this._knob.draggable.constraints = {
        x: 0,
        y: 0,
        width: this._background.width,
        height: this._background.height
      };
    }
    if (this._background.width > this._background.height) {
      this._fill.height = this._background.height;
      this._knob.midX = this.pointForValue(this.value);
      this._knob.centerY();
    } else {
      this._fill.width = this._background.width;
      this._knob.midY = this.pointForValue(this.value);
      this._knob.centerX();
    }
    if (this._background.width > this._background.height) {
      this._knob.draggable.speedY = 0;
      return this._knob.draggable.speedX = 1;
    } else {
      this._knob.draggable.speedX = 0;
      return this._knob.draggable.speedY = 1;
    }
  };

  Slider.prototype.addBackgroundLayer = function(layer) {
    this._background = layer;
    this._background.parent = this;
    this._background.name = "background";
    this._background.x = this._background.y = 0;
    return this._background;
  };

  Slider.prototype.addFillLayer = function(layer) {
    this._fill = layer;
    this._fill.parent = this;
    this._fill.name = "fill";
    this._fill.x = this._fill.y = 0;
    this._fill.width = this.width / 2;
    return this._fill;
  };

  Slider.prototype.addKnobLayer = function(layer) {
    this._knob = layer;
    this._knob.parent = this;
    this._knob.name = "knob";
    this._knob.draggable.enabled = true;
    this._knob.draggable.overdrag = false;
    this._knob.draggable.momentum = true;
    this._knob.draggable.momentumOptions = {
      friction: 5,
      tolerance: 0.25
    };
    this._knob.draggable.bounce = false;
    this._knob.x = Align.center();
    this._knob.y = Align.center();
    return this._knob;
  };

  Slider.define("constrained", Slider.simpleProperty("constrained", false));

  Slider.define("min", {
    get: function() {
      return this._min || 0;
    },
    set: function(value) {
      if (_.isFinite(value)) {
        this._min = value;
      }
      return this.emit("change:min", this._min);
    }
  });

  Slider.define("max", {
    get: function() {
      return this._max || 1;
    },
    set: function(value) {
      if (_.isFinite(value)) {
        this._max = value;
      }
      return this.emit("change:max", this._max);
    }
  });

  Slider.define("value", {
    get: function() {
      return this._value;
    },
    set: function(value) {
      if (!_.isFinite(value)) {
        return;
      }
      this._value = Utils.clamp(value, this.min, this.max);
      if (this._background.width > this._background.height) {
        this._knob.midX = this.pointForValue(value);
      } else {
        this._knob.midY = this.pointForValue(value);
      }
      this._updateFill();
      return this._updateValue();
    }
  });

  Slider.prototype._knobDidMove = function() {
    if (this._background.width > this._background.height) {
      return this.value = this.valueForPoint(this._knob.midX);
    } else {
      return this.value = this.valueForPoint(this._knob.midY);
    }
  };

  Slider.prototype._updateValue = function() {
    if (this._lastUpdatedValue === this.value) {
      return;
    }
    this._lastUpdatedValue = this.value;
    this.emit("change:value", this.value);
    return this.emit(Events.SliderValueChange, this.value);
  };

  Slider.prototype.pointForValue = function(value) {
    if (this._background.width > this._background.height) {
      if (this.constrained) {
        return Utils.modulate(value, [this.min, this.max], [0 + (this._knob.width / 2), this._background.width - (this._knob.width / 2)], true);
      } else {
        return Utils.modulate(value, [this.min, this.max], [0, this._background.width], true);
      }
    } else {
      if (this.constrained) {
        return Utils.modulate(value, [this.min, this.max], [0 + (this._knob.height / 2), this._background.height - (this._knob.height / 2)], true);
      } else {
        return Utils.modulate(value, [this.min, this.max], [0, this._background.height], true);
      }
    }
  };

  Slider.prototype.valueForPoint = function(value) {
    if (this._background.width > this._background.height) {
      if (this.constrained) {
        return Utils.modulate(value, [0 + (this._knob.width / 2), this._background.width - (this._knob.width / 2)], [this.min, this.max], true);
      } else {
        return Utils.modulate(value, [0, this._background.width], [this.min, this.max], true);
      }
    } else {
      if (this.constrained) {
        return Utils.modulate(value, [0 + (this._knob.height / 2), this._background.height - (this._knob.height / 2)], [this.min, this.max], true);
      } else {
        return Utils.modulate(value, [0, this._background.height], [this.min, this.max], true);
      }
    }
  };

  Slider.prototype.animateToValue = function(value, animationOptions) {
    if (animationOptions == null) {
      animationOptions = {
        curve: "spring(300, 25, 0)"
      };
    }
    if (this._background.width > this._background.height) {
      animationOptions.properties = {
        x: this.pointForValue(value) - (this._knob.width / 2)
      };
    } else {
      animationOptions.properties = {
        y: this.pointForValue(value) - (this._knob.height / 2)
      };
    }
    return this._knob.animate(animationOptions);
  };

  Slider.wrap = function(background, fill, knob, options) {
    return wrapSlider(new this(options), background, fill, knob, options);
  };

  Slider.prototype.onValueChange = function(cb) {
    return this.on(Events.SliderValueChange, cb);
  };

  return Slider;

})(Layer);

wrapSlider = function(instance, background, fill, knob) {
  var slider;
  if (!(background instanceof Layer)) {
    throw new Error("AudioLayer expects a background layer.");
  }
  if (!(fill instanceof Layer)) {
    throw new Error("AudioLayer expects a fill layer.");
  }
  if (!(knob instanceof Layer)) {
    throw new Error("AudioLayer expects a knob layer.");
  }
  slider = instance;
  slider.clip = false;
  slider.backgroundColor = "transparent";
  slider.frame = background.frame;
  slider.parent = background.parent;
  slider.index = background.index;
  slider.addBackgroundLayer(background);
  slider.addFillLayer(fill);
  slider.addKnobLayer(knob);
  slider._updateFrame();
  slider._updateKnob();
  slider._updateFill();
  slider._knobDidMove();
  background.onTapStart(function() {
    return slider._touchStart(event);
  });
  slider.on("change:frame", function() {
    return slider._updateFrame();
  });
  knob.on("change:size", function() {
    return slider._updateKnob();
  });
  knob.on("change:frame", function() {
    slider._updateFill();
    return slider._knobDidMove();
  });
  slider.on("change:max", function() {
    slider._updateFrame();
    slider._updateKnob();
    slider._updateFill();
    return slider._knobDidMove();
  });
  return slider;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlZXN1cmUvRG9jdW1lbnRzL0dpdEh1Yi9YL0NvbW1lbnRJTUcuZnJhbWVyL21vZHVsZXMvc2xpZGVyLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlZXN1cmUvRG9jdW1lbnRzL0dpdEh1Yi9YL0NvbW1lbnRJTUcuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEZyYW1lciBTbGlkZXIgTW9kdWxlXG4jIEJ5IEJlbmphbWluIGRlbiBCb2VyXG4jIEZvbGxvdyBtZSBAYmVuamFtaW5uYXRoYW5cbiMgRm9sbG93IEZyYW1lciBAZnJhbWVyXG5cbkV2ZW50cy5TbGlkZXJWYWx1ZUNoYW5nZSAgPSBcInNsaWRlclZhbHVlQ2hhbmdlXCJcblxuY2xhc3MgZXhwb3J0cy5TbGlkZXIgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblx0XHRzdXBlciBvcHRpb25zXG5cblx0QF9rbm9iID0gdW5kZWZpbmVkXG5cdEBfZmlsbCA9IHVuZGVmaW5lZFxuXHRAX2JhY2tncm91bmQgPSB1bmRlZmluZWRcblxuXHRfdG91Y2hTdGFydDogKGV2ZW50KSA9PlxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdHRvdWNoWCA9IEV2ZW50cy50b3VjaEV2ZW50KGV2ZW50KS5jbGllbnRYIC0gU2NyZWVuLmNhbnZhc0ZyYW1lLnhcblx0XHRcdHNjYWxlWCA9IEBjYW52YXNTY2FsZVgoKVxuXHRcdFx0QHZhbHVlID0gQHZhbHVlRm9yUG9pbnQodG91Y2hYIC8gc2NhbGVYIC0gQHNjcmVlbkZyYW1lLngpXG5cdFx0ZWxzZVxuXHRcdFx0dG91Y2hZID0gRXZlbnRzLnRvdWNoRXZlbnQoZXZlbnQpLmNsaWVudFkgLSBTY3JlZW4uY2FudmFzRnJhbWUueVxuXHRcdFx0c2NhbGVZID0gQGNhbnZhc1NjYWxlWSgpXG5cdFx0XHRAdmFsdWUgPSBAdmFsdWVGb3JQb2ludCh0b3VjaFkgLyBzY2FsZVkgLSBAc2NyZWVuRnJhbWUueSlcblxuXHRcdEBfa25vYi5kcmFnZ2FibGUuX3RvdWNoU3RhcnQoZXZlbnQpXG5cdFx0QF91cGRhdGVWYWx1ZSgpXG5cblx0X3RvdWNoRW5kOiAoZXZlbnQpID0+XG5cdFx0QF91cGRhdGVWYWx1ZSgpXG5cblx0X3VwZGF0ZUZpbGw6ID0+XG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0QF9maWxsLndpZHRoID0gQF9rbm9iLm1pZFhcblx0XHRlbHNlXG5cdFx0XHRAX2ZpbGwuaGVpZ2h0ID0gQF9rbm9iLm1pZFlcblxuXHRfdXBkYXRlS25vYjogPT5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRAX2tub2IubWlkWCA9IEBfZmlsbC53aWR0aFxuXHRcdFx0QF9rbm9iLmNlbnRlclkoKVxuXHRcdGVsc2Vcblx0XHRcdEBfa25vYi5taWRZID0gQF9maWxsLmhlaWdodFxuXHRcdFx0QF9rbm9iLmNlbnRlclgoKVxuXG5cdF91cGRhdGVGcmFtZTogPT5cblx0XHRAX2tub2IuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHRcdHg6IC1rbm9iLndpZHRoIC8gMlxuXHRcdFx0eTogLWtub2IuaGVpZ2h0IC8gMlxuXHRcdFx0d2lkdGg6IEBfYmFja2dyb3VuZC53aWR0aCArIEBfa25vYi53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAX2JhY2tncm91bmQuaGVpZ2h0ICsgQF9rbm9iLmhlaWdodFxuXG5cdFx0aWYgQGNvbnN0cmFpbmVkXG5cdFx0XHRAX2tub2IuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0eDogMFxuXHRcdFx0XHR5OiAwXG5cdFx0XHRcdHdpZHRoOiBAX2JhY2tncm91bmQud2lkdGhcblx0XHRcdFx0aGVpZ2h0OiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRAX2ZpbGwuaGVpZ2h0ID0gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0QF9rbm9iLm1pZFggPSBAcG9pbnRGb3JWYWx1ZShAdmFsdWUpXG5cdFx0XHRAX2tub2IuY2VudGVyWSgpXG5cdFx0ZWxzZVxuXHRcdFx0QF9maWxsLndpZHRoID0gQF9iYWNrZ3JvdW5kLndpZHRoXG5cdFx0XHRAX2tub2IubWlkWSA9IEBwb2ludEZvclZhbHVlKEB2YWx1ZSlcblx0XHRcdEBfa25vYi5jZW50ZXJYKClcblxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdEBfa25vYi5kcmFnZ2FibGUuc3BlZWRZID0gMFxuXHRcdFx0QF9rbm9iLmRyYWdnYWJsZS5zcGVlZFggPSAxXG5cdFx0ZWxzZVxuXHRcdFx0QF9rbm9iLmRyYWdnYWJsZS5zcGVlZFggPSAwXG5cdFx0XHRAX2tub2IuZHJhZ2dhYmxlLnNwZWVkWSA9IDFcblxuXHRhZGRCYWNrZ3JvdW5kTGF5ZXI6IChsYXllcikgLT5cblx0XHRAX2JhY2tncm91bmQgPSBsYXllclxuXHRcdEBfYmFja2dyb3VuZC5wYXJlbnQgPSBAXG5cdFx0QF9iYWNrZ3JvdW5kLm5hbWUgPSBcImJhY2tncm91bmRcIlxuXHRcdEBfYmFja2dyb3VuZC54ID0gQF9iYWNrZ3JvdW5kLnkgPSAwXG5cdFx0cmV0dXJuIEBfYmFja2dyb3VuZFxuXG5cdGFkZEZpbGxMYXllcjogKGxheWVyKSAtPlxuXHRcdEBfZmlsbCA9IGxheWVyXG5cdFx0QF9maWxsLnBhcmVudCA9IEBcblx0XHRAX2ZpbGwubmFtZSA9IFwiZmlsbFwiXG5cdFx0QF9maWxsLnggPSBAX2ZpbGwueSA9IDBcblx0XHRAX2ZpbGwud2lkdGggPSBAd2lkdGggLyAyXG5cdFx0cmV0dXJuIEBfZmlsbFxuXG5cdGFkZEtub2JMYXllcjogKGxheWVyKSAtPlxuXHRcdEBfa25vYiA9IGxheWVyXG5cdFx0QF9rbm9iLnBhcmVudCA9IEBcblx0XHRAX2tub2IubmFtZSA9IFwia25vYlwiXG5cdFx0QF9rbm9iLmRyYWdnYWJsZS5lbmFibGVkID0gdHJ1ZVxuXHRcdEBfa25vYi5kcmFnZ2FibGUub3ZlcmRyYWcgPSBmYWxzZVxuXHRcdEBfa25vYi5kcmFnZ2FibGUubW9tZW50dW0gPSB0cnVlXG5cdFx0QF9rbm9iLmRyYWdnYWJsZS5tb21lbnR1bU9wdGlvbnMgPSB7ZnJpY3Rpb246IDUsIHRvbGVyYW5jZTogMC4yNX1cblx0XHRAX2tub2IuZHJhZ2dhYmxlLmJvdW5jZSA9IGZhbHNlXG5cdFx0QF9rbm9iLnggPSBBbGlnbi5jZW50ZXIoKVxuXHRcdEBfa25vYi55ID0gQWxpZ24uY2VudGVyKClcblxuXHRcdHJldHVybiBAX2tub2JcblxuXHRAZGVmaW5lIFwiY29uc3RyYWluZWRcIiwgQHNpbXBsZVByb3BlcnR5KFwiY29uc3RyYWluZWRcIiwgZmFsc2UpXG5cblx0QGRlZmluZSBcIm1pblwiLFxuXHRcdGdldDogLT4gQF9taW4gb3IgMFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9taW4gPSB2YWx1ZSBpZiBfLmlzRmluaXRlKHZhbHVlKVxuXHRcdFx0QGVtaXQoXCJjaGFuZ2U6bWluXCIsIEBfbWluKVxuXG5cdEBkZWZpbmUgXCJtYXhcIixcblx0XHRnZXQ6IC0+IEBfbWF4IG9yIDFcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBfbWF4ID0gdmFsdWUgaWYgXy5pc0Zpbml0ZSh2YWx1ZSlcblx0XHRcdEBlbWl0KFwiY2hhbmdlOm1heFwiLCBAX21heClcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+IHJldHVybiBAX3ZhbHVlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRyZXR1cm4gdW5sZXNzIF8uaXNGaW5pdGUodmFsdWUpXG5cblx0XHRcdEBfdmFsdWUgPSBVdGlscy5jbGFtcCh2YWx1ZSwgQG1pbiwgQG1heClcblxuXHRcdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0XHRAX2tub2IubWlkWCA9IEBwb2ludEZvclZhbHVlKHZhbHVlKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAX2tub2IubWlkWSA9IEBwb2ludEZvclZhbHVlKHZhbHVlKVxuXG5cdFx0XHRAX3VwZGF0ZUZpbGwoKVxuXHRcdFx0QF91cGRhdGVWYWx1ZSgpXG5cblx0X2tub2JEaWRNb3ZlOiA9PlxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdEB2YWx1ZSA9IEB2YWx1ZUZvclBvaW50KEBfa25vYi5taWRYKVxuXHRcdGVsc2Vcblx0XHRcdEB2YWx1ZSA9IEB2YWx1ZUZvclBvaW50KEBfa25vYi5taWRZKVxuXG5cdF91cGRhdGVWYWx1ZTogPT5cblx0XHRyZXR1cm4gaWYgQF9sYXN0VXBkYXRlZFZhbHVlIGlzIEB2YWx1ZVxuXG5cdFx0QF9sYXN0VXBkYXRlZFZhbHVlID0gQHZhbHVlXG5cdFx0QGVtaXQoXCJjaGFuZ2U6dmFsdWVcIiwgQHZhbHVlKVxuXHRcdEBlbWl0KEV2ZW50cy5TbGlkZXJWYWx1ZUNoYW5nZSwgQHZhbHVlKVxuXG5cdHBvaW50Rm9yVmFsdWU6ICh2YWx1ZSkgLT5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRpZiBAY29uc3RyYWluZWRcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbQG1pbiwgQG1heF0sIFswICsgKEBfa25vYi53aWR0aCAvIDIpLCBAX2JhY2tncm91bmQud2lkdGggLSAoQF9rbm9iLndpZHRoIC8gMildLCB0cnVlKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFtAbWluLCBAbWF4XSwgWzAsIEBfYmFja2dyb3VuZC53aWR0aF0sIHRydWUpXG5cdFx0ZWxzZVxuXHRcdFx0aWYgQGNvbnN0cmFpbmVkXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgW0BtaW4sIEBtYXhdLCBbMCArIChAX2tub2IuaGVpZ2h0IC8gMiksIEBfYmFja2dyb3VuZC5oZWlnaHQgLSAoQF9rbm9iLmhlaWdodCAvIDIpXSwgdHJ1ZSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbQG1pbiwgQG1heF0sIFswLCBAX2JhY2tncm91bmQuaGVpZ2h0XSwgdHJ1ZSlcblxuXHR2YWx1ZUZvclBvaW50OiAodmFsdWUpIC0+XG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0aWYgQGNvbnN0cmFpbmVkXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgWzAgKyAoQF9rbm9iLndpZHRoIC8gMiksIEBfYmFja2dyb3VuZC53aWR0aCAtIChAX2tub2Iud2lkdGggLyAyKV0sIFtAbWluLCBAbWF4XSwgdHJ1ZSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbMCwgQF9iYWNrZ3JvdW5kLndpZHRoXSwgW0BtaW4sIEBtYXhdLCB0cnVlKVxuXHRcdGVsc2Vcblx0XHRcdGlmIEBjb25zdHJhaW5lZFxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFswICsgKEBfa25vYi5oZWlnaHQgLyAyKSwgQF9iYWNrZ3JvdW5kLmhlaWdodCAtIChAX2tub2IuaGVpZ2h0IC8gMildLCBbQG1pbiwgQG1heF0sIHRydWUpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgWzAsIEBfYmFja2dyb3VuZC5oZWlnaHRdLCBbQG1pbiwgQG1heF0sIHRydWUpXG5cblx0YW5pbWF0ZVRvVmFsdWU6ICh2YWx1ZSwgYW5pbWF0aW9uT3B0aW9ucz17Y3VydmU6XCJzcHJpbmcoMzAwLCAyNSwgMClcIn0pIC0+XG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0YW5pbWF0aW9uT3B0aW9ucy5wcm9wZXJ0aWVzID0ge3g6IEBwb2ludEZvclZhbHVlKHZhbHVlKSAtIChAX2tub2Iud2lkdGgvMil9XG5cdFx0ZWxzZVxuXHRcdFx0YW5pbWF0aW9uT3B0aW9ucy5wcm9wZXJ0aWVzID0ge3k6IEBwb2ludEZvclZhbHVlKHZhbHVlKSAtIChAX2tub2IuaGVpZ2h0LzIpfVxuXG5cdFx0QF9rbm9iLmFuaW1hdGUoYW5pbWF0aW9uT3B0aW9ucylcblxuXHQjIE5ldyBDb25zdHJ1Y3RvclxuXHRAd3JhcCA9IChiYWNrZ3JvdW5kLCBmaWxsLCBrbm9iLCBvcHRpb25zKSAtPlxuXHRcdHJldHVybiB3cmFwU2xpZGVyKG5ldyBAKG9wdGlvbnMpLCBiYWNrZ3JvdW5kLCBmaWxsLCBrbm9iLCBvcHRpb25zKVxuXG5cdG9uVmFsdWVDaGFuZ2U6IChjYikgLT4gQG9uKEV2ZW50cy5TbGlkZXJWYWx1ZUNoYW5nZSwgY2IpXG5cbndyYXBTbGlkZXIgPSAoaW5zdGFuY2UsIGJhY2tncm91bmQsIGZpbGwsIGtub2IpIC0+XG5cblx0aWYgbm90IChiYWNrZ3JvdW5kIGluc3RhbmNlb2YgTGF5ZXIpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQXVkaW9MYXllciBleHBlY3RzIGEgYmFja2dyb3VuZCBsYXllci5cIilcblxuXHRpZiBub3QgKGZpbGwgaW5zdGFuY2VvZiBMYXllcilcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBdWRpb0xheWVyIGV4cGVjdHMgYSBmaWxsIGxheWVyLlwiKVxuXG5cdGlmIG5vdCAoa25vYiBpbnN0YW5jZW9mIExheWVyKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkF1ZGlvTGF5ZXIgZXhwZWN0cyBhIGtub2IgbGF5ZXIuXCIpXG5cblx0c2xpZGVyID0gaW5zdGFuY2VcblxuXHRzbGlkZXIuY2xpcCA9IGZhbHNlXG5cdHNsaWRlci5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0c2xpZGVyLmZyYW1lID0gYmFja2dyb3VuZC5mcmFtZVxuXHRzbGlkZXIucGFyZW50ID0gYmFja2dyb3VuZC5wYXJlbnRcblx0c2xpZGVyLmluZGV4ID0gYmFja2dyb3VuZC5pbmRleFxuXG5cdHNsaWRlci5hZGRCYWNrZ3JvdW5kTGF5ZXIoYmFja2dyb3VuZClcblx0c2xpZGVyLmFkZEZpbGxMYXllcihmaWxsKVxuXHRzbGlkZXIuYWRkS25vYkxheWVyKGtub2IpXG5cblx0c2xpZGVyLl91cGRhdGVGcmFtZSgpXG5cdHNsaWRlci5fdXBkYXRlS25vYigpXG5cdHNsaWRlci5fdXBkYXRlRmlsbCgpXG5cdHNsaWRlci5fa25vYkRpZE1vdmUoKVxuXG5cdGJhY2tncm91bmQub25UYXBTdGFydCAtPlxuXHRcdHNsaWRlci5fdG91Y2hTdGFydChldmVudClcblxuXHRzbGlkZXIub24gXCJjaGFuZ2U6ZnJhbWVcIiwgLT5cblx0XHRzbGlkZXIuX3VwZGF0ZUZyYW1lKClcblxuXHRrbm9iLm9uIFwiY2hhbmdlOnNpemVcIiwgLT5cblx0XHRzbGlkZXIuX3VwZGF0ZUtub2IoKVxuXG5cdGtub2Iub24gXCJjaGFuZ2U6ZnJhbWVcIiwgLT5cblx0XHRzbGlkZXIuX3VwZGF0ZUZpbGwoKVxuXHRcdHNsaWRlci5fa25vYkRpZE1vdmUoKVxuXG5cdHNsaWRlci5vbiBcImNoYW5nZTptYXhcIiwgLT5cblx0XHRzbGlkZXIuX3VwZGF0ZUZyYW1lKClcblx0XHRzbGlkZXIuX3VwZGF0ZUtub2IoKVxuXHRcdHNsaWRlci5fdXBkYXRlRmlsbCgpXG5cdFx0c2xpZGVyLl9rbm9iRGlkTW92ZSgpXG5cblx0cmV0dXJuIHNsaWRlciIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRElBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7Ozs7QURKbEIsSUFBQSxVQUFBO0VBQUE7Ozs7QUFBQSxNQUFN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
