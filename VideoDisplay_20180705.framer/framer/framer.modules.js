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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlZXN1cmUvRG9jdW1lbnRzL0dpdEh1Yi9YL1ZpZGVvRGlzcGxheV8yMDE4MDcwNS5mcmFtZXIvbW9kdWxlcy9zbGlkZXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvbGVlc3VyZS9Eb2N1bWVudHMvR2l0SHViL1gvVmlkZW9EaXNwbGF5XzIwMTgwNzA1LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBGcmFtZXIgU2xpZGVyIE1vZHVsZVxuIyBCeSBCZW5qYW1pbiBkZW4gQm9lclxuIyBGb2xsb3cgbWUgQGJlbmphbWlubmF0aGFuXG4jIEZvbGxvdyBGcmFtZXIgQGZyYW1lclxuXG5FdmVudHMuU2xpZGVyVmFsdWVDaGFuZ2UgID0gXCJzbGlkZXJWYWx1ZUNoYW5nZVwiXG5cbmNsYXNzIGV4cG9ydHMuU2xpZGVyIGV4dGVuZHMgTGF5ZXJcblxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdEBfa25vYiA9IHVuZGVmaW5lZFxuXHRAX2ZpbGwgPSB1bmRlZmluZWRcblx0QF9iYWNrZ3JvdW5kID0gdW5kZWZpbmVkXG5cblx0X3RvdWNoU3RhcnQ6IChldmVudCkgPT5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHR0b3VjaFggPSBFdmVudHMudG91Y2hFdmVudChldmVudCkuY2xpZW50WCAtIFNjcmVlbi5jYW52YXNGcmFtZS54XG5cdFx0XHRzY2FsZVggPSBAY2FudmFzU2NhbGVYKClcblx0XHRcdEB2YWx1ZSA9IEB2YWx1ZUZvclBvaW50KHRvdWNoWCAvIHNjYWxlWCAtIEBzY3JlZW5GcmFtZS54KVxuXHRcdGVsc2Vcblx0XHRcdHRvdWNoWSA9IEV2ZW50cy50b3VjaEV2ZW50KGV2ZW50KS5jbGllbnRZIC0gU2NyZWVuLmNhbnZhc0ZyYW1lLnlcblx0XHRcdHNjYWxlWSA9IEBjYW52YXNTY2FsZVkoKVxuXHRcdFx0QHZhbHVlID0gQHZhbHVlRm9yUG9pbnQodG91Y2hZIC8gc2NhbGVZIC0gQHNjcmVlbkZyYW1lLnkpXG5cblx0XHRAX2tub2IuZHJhZ2dhYmxlLl90b3VjaFN0YXJ0KGV2ZW50KVxuXHRcdEBfdXBkYXRlVmFsdWUoKVxuXG5cdF90b3VjaEVuZDogKGV2ZW50KSA9PlxuXHRcdEBfdXBkYXRlVmFsdWUoKVxuXG5cdF91cGRhdGVGaWxsOiA9PlxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdEBfZmlsbC53aWR0aCA9IEBfa25vYi5taWRYXG5cdFx0ZWxzZVxuXHRcdFx0QF9maWxsLmhlaWdodCA9IEBfa25vYi5taWRZXG5cblx0X3VwZGF0ZUtub2I6ID0+XG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0QF9rbm9iLm1pZFggPSBAX2ZpbGwud2lkdGhcblx0XHRcdEBfa25vYi5jZW50ZXJZKClcblx0XHRlbHNlXG5cdFx0XHRAX2tub2IubWlkWSA9IEBfZmlsbC5oZWlnaHRcblx0XHRcdEBfa25vYi5jZW50ZXJYKClcblxuXHRfdXBkYXRlRnJhbWU6ID0+XG5cdFx0QF9rbm9iLmRyYWdnYWJsZS5jb25zdHJhaW50cyA9XG5cdFx0XHR4OiAta25vYi53aWR0aCAvIDJcblx0XHRcdHk6IC1rbm9iLmhlaWdodCAvIDJcblx0XHRcdHdpZHRoOiBAX2JhY2tncm91bmQud2lkdGggKyBAX2tub2Iud2lkdGhcblx0XHRcdGhlaWdodDogQF9iYWNrZ3JvdW5kLmhlaWdodCArIEBfa25vYi5oZWlnaHRcblxuXHRcdGlmIEBjb25zdHJhaW5lZFxuXHRcdFx0QF9rbm9iLmRyYWdnYWJsZS5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHg6IDBcblx0XHRcdFx0eTogMFxuXHRcdFx0XHR3aWR0aDogQF9iYWNrZ3JvdW5kLndpZHRoXG5cdFx0XHRcdGhlaWdodDogQF9iYWNrZ3JvdW5kLmhlaWdodFxuXG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0QF9maWxsLmhlaWdodCA9IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdEBfa25vYi5taWRYID0gQHBvaW50Rm9yVmFsdWUoQHZhbHVlKVxuXHRcdFx0QF9rbm9iLmNlbnRlclkoKVxuXHRcdGVsc2Vcblx0XHRcdEBfZmlsbC53aWR0aCA9IEBfYmFja2dyb3VuZC53aWR0aFxuXHRcdFx0QF9rbm9iLm1pZFkgPSBAcG9pbnRGb3JWYWx1ZShAdmFsdWUpXG5cdFx0XHRAX2tub2IuY2VudGVyWCgpXG5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRAX2tub2IuZHJhZ2dhYmxlLnNwZWVkWSA9IDBcblx0XHRcdEBfa25vYi5kcmFnZ2FibGUuc3BlZWRYID0gMVxuXHRcdGVsc2Vcblx0XHRcdEBfa25vYi5kcmFnZ2FibGUuc3BlZWRYID0gMFxuXHRcdFx0QF9rbm9iLmRyYWdnYWJsZS5zcGVlZFkgPSAxXG5cblx0YWRkQmFja2dyb3VuZExheWVyOiAobGF5ZXIpIC0+XG5cdFx0QF9iYWNrZ3JvdW5kID0gbGF5ZXJcblx0XHRAX2JhY2tncm91bmQucGFyZW50ID0gQFxuXHRcdEBfYmFja2dyb3VuZC5uYW1lID0gXCJiYWNrZ3JvdW5kXCJcblx0XHRAX2JhY2tncm91bmQueCA9IEBfYmFja2dyb3VuZC55ID0gMFxuXHRcdHJldHVybiBAX2JhY2tncm91bmRcblxuXHRhZGRGaWxsTGF5ZXI6IChsYXllcikgLT5cblx0XHRAX2ZpbGwgPSBsYXllclxuXHRcdEBfZmlsbC5wYXJlbnQgPSBAXG5cdFx0QF9maWxsLm5hbWUgPSBcImZpbGxcIlxuXHRcdEBfZmlsbC54ID0gQF9maWxsLnkgPSAwXG5cdFx0QF9maWxsLndpZHRoID0gQHdpZHRoIC8gMlxuXHRcdHJldHVybiBAX2ZpbGxcblxuXHRhZGRLbm9iTGF5ZXI6IChsYXllcikgLT5cblx0XHRAX2tub2IgPSBsYXllclxuXHRcdEBfa25vYi5wYXJlbnQgPSBAXG5cdFx0QF9rbm9iLm5hbWUgPSBcImtub2JcIlxuXHRcdEBfa25vYi5kcmFnZ2FibGUuZW5hYmxlZCA9IHRydWVcblx0XHRAX2tub2IuZHJhZ2dhYmxlLm92ZXJkcmFnID0gZmFsc2Vcblx0XHRAX2tub2IuZHJhZ2dhYmxlLm1vbWVudHVtID0gdHJ1ZVxuXHRcdEBfa25vYi5kcmFnZ2FibGUubW9tZW50dW1PcHRpb25zID0ge2ZyaWN0aW9uOiA1LCB0b2xlcmFuY2U6IDAuMjV9XG5cdFx0QF9rbm9iLmRyYWdnYWJsZS5ib3VuY2UgPSBmYWxzZVxuXHRcdEBfa25vYi54ID0gQWxpZ24uY2VudGVyKClcblx0XHRAX2tub2IueSA9IEFsaWduLmNlbnRlcigpXG5cblx0XHRyZXR1cm4gQF9rbm9iXG5cblx0QGRlZmluZSBcImNvbnN0cmFpbmVkXCIsIEBzaW1wbGVQcm9wZXJ0eShcImNvbnN0cmFpbmVkXCIsIGZhbHNlKVxuXG5cdEBkZWZpbmUgXCJtaW5cIixcblx0XHRnZXQ6IC0+IEBfbWluIG9yIDBcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBfbWluID0gdmFsdWUgaWYgXy5pc0Zpbml0ZSh2YWx1ZSlcblx0XHRcdEBlbWl0KFwiY2hhbmdlOm1pblwiLCBAX21pbilcblxuXHRAZGVmaW5lIFwibWF4XCIsXG5cdFx0Z2V0OiAtPiBAX21heCBvciAxXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX21heCA9IHZhbHVlIGlmIF8uaXNGaW5pdGUodmFsdWUpXG5cdFx0XHRAZW1pdChcImNoYW5nZTptYXhcIiwgQF9tYXgpXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPiByZXR1cm4gQF92YWx1ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0cmV0dXJuIHVubGVzcyBfLmlzRmluaXRlKHZhbHVlKVxuXG5cdFx0XHRAX3ZhbHVlID0gVXRpbHMuY2xhbXAodmFsdWUsIEBtaW4sIEBtYXgpXG5cblx0XHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdFx0QF9rbm9iLm1pZFggPSBAcG9pbnRGb3JWYWx1ZSh2YWx1ZSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0QF9rbm9iLm1pZFkgPSBAcG9pbnRGb3JWYWx1ZSh2YWx1ZSlcblxuXHRcdFx0QF91cGRhdGVGaWxsKClcblx0XHRcdEBfdXBkYXRlVmFsdWUoKVxuXG5cdF9rbm9iRGlkTW92ZTogPT5cblx0XHRpZiBAX2JhY2tncm91bmQud2lkdGggPiBAX2JhY2tncm91bmQuaGVpZ2h0XG5cdFx0XHRAdmFsdWUgPSBAdmFsdWVGb3JQb2ludChAX2tub2IubWlkWClcblx0XHRlbHNlXG5cdFx0XHRAdmFsdWUgPSBAdmFsdWVGb3JQb2ludChAX2tub2IubWlkWSlcblxuXHRfdXBkYXRlVmFsdWU6ID0+XG5cdFx0cmV0dXJuIGlmIEBfbGFzdFVwZGF0ZWRWYWx1ZSBpcyBAdmFsdWVcblxuXHRcdEBfbGFzdFVwZGF0ZWRWYWx1ZSA9IEB2YWx1ZVxuXHRcdEBlbWl0KFwiY2hhbmdlOnZhbHVlXCIsIEB2YWx1ZSlcblx0XHRAZW1pdChFdmVudHMuU2xpZGVyVmFsdWVDaGFuZ2UsIEB2YWx1ZSlcblxuXHRwb2ludEZvclZhbHVlOiAodmFsdWUpIC0+XG5cdFx0aWYgQF9iYWNrZ3JvdW5kLndpZHRoID4gQF9iYWNrZ3JvdW5kLmhlaWdodFxuXHRcdFx0aWYgQGNvbnN0cmFpbmVkXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgW0BtaW4sIEBtYXhdLCBbMCArIChAX2tub2Iud2lkdGggLyAyKSwgQF9iYWNrZ3JvdW5kLndpZHRoIC0gKEBfa25vYi53aWR0aCAvIDIpXSwgdHJ1ZSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbQG1pbiwgQG1heF0sIFswLCBAX2JhY2tncm91bmQud2lkdGhdLCB0cnVlKVxuXHRcdGVsc2Vcblx0XHRcdGlmIEBjb25zdHJhaW5lZFxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFtAbWluLCBAbWF4XSwgWzAgKyAoQF9rbm9iLmhlaWdodCAvIDIpLCBAX2JhY2tncm91bmQuaGVpZ2h0IC0gKEBfa25vYi5oZWlnaHQgLyAyKV0sIHRydWUpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgW0BtaW4sIEBtYXhdLCBbMCwgQF9iYWNrZ3JvdW5kLmhlaWdodF0sIHRydWUpXG5cblx0dmFsdWVGb3JQb2ludDogKHZhbHVlKSAtPlxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdGlmIEBjb25zdHJhaW5lZFxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFswICsgKEBfa25vYi53aWR0aCAvIDIpLCBAX2JhY2tncm91bmQud2lkdGggLSAoQF9rbm9iLndpZHRoIC8gMildLCBbQG1pbiwgQG1heF0sIHRydWUpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJldHVybiBVdGlscy5tb2R1bGF0ZSh2YWx1ZSwgWzAsIEBfYmFja2dyb3VuZC53aWR0aF0sIFtAbWluLCBAbWF4XSwgdHJ1ZSlcblx0XHRlbHNlXG5cdFx0XHRpZiBAY29uc3RyYWluZWRcblx0XHRcdFx0cmV0dXJuIFV0aWxzLm1vZHVsYXRlKHZhbHVlLCBbMCArIChAX2tub2IuaGVpZ2h0IC8gMiksIEBfYmFja2dyb3VuZC5oZWlnaHQgLSAoQF9rbm9iLmhlaWdodCAvIDIpXSwgW0BtaW4sIEBtYXhdLCB0cnVlKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gVXRpbHMubW9kdWxhdGUodmFsdWUsIFswLCBAX2JhY2tncm91bmQuaGVpZ2h0XSwgW0BtaW4sIEBtYXhdLCB0cnVlKVxuXG5cdGFuaW1hdGVUb1ZhbHVlOiAodmFsdWUsIGFuaW1hdGlvbk9wdGlvbnM9e2N1cnZlOlwic3ByaW5nKDMwMCwgMjUsIDApXCJ9KSAtPlxuXHRcdGlmIEBfYmFja2dyb3VuZC53aWR0aCA+IEBfYmFja2dyb3VuZC5oZWlnaHRcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnMucHJvcGVydGllcyA9IHt4OiBAcG9pbnRGb3JWYWx1ZSh2YWx1ZSkgLSAoQF9rbm9iLndpZHRoLzIpfVxuXHRcdGVsc2Vcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnMucHJvcGVydGllcyA9IHt5OiBAcG9pbnRGb3JWYWx1ZSh2YWx1ZSkgLSAoQF9rbm9iLmhlaWdodC8yKX1cblxuXHRcdEBfa25vYi5hbmltYXRlKGFuaW1hdGlvbk9wdGlvbnMpXG5cblx0IyBOZXcgQ29uc3RydWN0b3Jcblx0QHdyYXAgPSAoYmFja2dyb3VuZCwgZmlsbCwga25vYiwgb3B0aW9ucykgLT5cblx0XHRyZXR1cm4gd3JhcFNsaWRlcihuZXcgQChvcHRpb25zKSwgYmFja2dyb3VuZCwgZmlsbCwga25vYiwgb3B0aW9ucylcblxuXHRvblZhbHVlQ2hhbmdlOiAoY2IpIC0+IEBvbihFdmVudHMuU2xpZGVyVmFsdWVDaGFuZ2UsIGNiKVxuXG53cmFwU2xpZGVyID0gKGluc3RhbmNlLCBiYWNrZ3JvdW5kLCBmaWxsLCBrbm9iKSAtPlxuXG5cdGlmIG5vdCAoYmFja2dyb3VuZCBpbnN0YW5jZW9mIExheWVyKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkF1ZGlvTGF5ZXIgZXhwZWN0cyBhIGJhY2tncm91bmQgbGF5ZXIuXCIpXG5cblx0aWYgbm90IChmaWxsIGluc3RhbmNlb2YgTGF5ZXIpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQXVkaW9MYXllciBleHBlY3RzIGEgZmlsbCBsYXllci5cIilcblxuXHRpZiBub3QgKGtub2IgaW5zdGFuY2VvZiBMYXllcilcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBdWRpb0xheWVyIGV4cGVjdHMgYSBrbm9iIGxheWVyLlwiKVxuXG5cdHNsaWRlciA9IGluc3RhbmNlXG5cblx0c2xpZGVyLmNsaXAgPSBmYWxzZVxuXHRzbGlkZXIuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdHNsaWRlci5mcmFtZSA9IGJhY2tncm91bmQuZnJhbWVcblx0c2xpZGVyLnBhcmVudCA9IGJhY2tncm91bmQucGFyZW50XG5cdHNsaWRlci5pbmRleCA9IGJhY2tncm91bmQuaW5kZXhcblxuXHRzbGlkZXIuYWRkQmFja2dyb3VuZExheWVyKGJhY2tncm91bmQpXG5cdHNsaWRlci5hZGRGaWxsTGF5ZXIoZmlsbClcblx0c2xpZGVyLmFkZEtub2JMYXllcihrbm9iKVxuXG5cdHNsaWRlci5fdXBkYXRlRnJhbWUoKVxuXHRzbGlkZXIuX3VwZGF0ZUtub2IoKVxuXHRzbGlkZXIuX3VwZGF0ZUZpbGwoKVxuXHRzbGlkZXIuX2tub2JEaWRNb3ZlKClcblxuXHRiYWNrZ3JvdW5kLm9uVGFwU3RhcnQgLT5cblx0XHRzbGlkZXIuX3RvdWNoU3RhcnQoZXZlbnQpXG5cblx0c2xpZGVyLm9uIFwiY2hhbmdlOmZyYW1lXCIsIC0+XG5cdFx0c2xpZGVyLl91cGRhdGVGcmFtZSgpXG5cblx0a25vYi5vbiBcImNoYW5nZTpzaXplXCIsIC0+XG5cdFx0c2xpZGVyLl91cGRhdGVLbm9iKClcblxuXHRrbm9iLm9uIFwiY2hhbmdlOmZyYW1lXCIsIC0+XG5cdFx0c2xpZGVyLl91cGRhdGVGaWxsKClcblx0XHRzbGlkZXIuX2tub2JEaWRNb3ZlKClcblxuXHRzbGlkZXIub24gXCJjaGFuZ2U6bWF4XCIsIC0+XG5cdFx0c2xpZGVyLl91cGRhdGVGcmFtZSgpXG5cdFx0c2xpZGVyLl91cGRhdGVLbm9iKClcblx0XHRzbGlkZXIuX3VwZGF0ZUZpbGwoKVxuXHRcdHNsaWRlci5fa25vYkRpZE1vdmUoKVxuXG5cdHJldHVybiBzbGlkZXIiLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURJQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQOzs7O0FESmxCLElBQUEs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
