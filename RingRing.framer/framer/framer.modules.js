require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LottieLayer":[function(require,module,exports){

/*
LottieLayer
-
Implementation of Hernan Torrisi & AirBnb "Lottie-Web" for Framer.
by @72mena
 */
var insertScript,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

insertScript = function(localScript, webScript, name) {
  var e, head, lib, script;
  if (name == null) {
    name = 'JavaScript Library';
  }
  try {
    lib = Utils.domLoadDataSync(localScript);
    console.log("%c" + name + " Successfully Included Locally", "background: #DDFFE3; color: #007814");
  } catch (error) {
    e = error;
    try {
      lib = Utils.domLoadDataSync(webScript);
      console.log("%c" + name + " Successfully Included from Web", "background: #DDFFE3; color: #007814");
    } catch (error) {
      e = error;
      throw Error("Sorry, I couldn't load " + name);
    }
  }
  script = document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML = lib;
  head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
  return script;
};

insertScript("modules/lottie.min.js", "https://raw.githubusercontent.com/airbnb/lottie-web/master/build/player/lottie.min.js", "lottie-web");

exports.LottieLayer = (function(superClass) {
  extend(LottieLayer, superClass);

  LottieLayer.define("speed", {
    get: function() {
      return this._properties["speed"];
    },
    set: function(value) {
      this._properties["speed"] = value;
      if (this.built) {
        this.setSpeed(value);
      }
      return this.emit("change:speed");
    }
  });

  LottieLayer.define("direction", {
    get: function() {
      return this._properties["direction"];
    },
    set: function(value) {
      this._properties["direction"] = value;
      if (this.built) {
        this.setDirection(value);
      }
      return this.emit("change:direction");
    }
  });

  LottieLayer.define("path", {
    get: function() {
      return this._properties["path"];
    },
    set: function(value) {
      this._properties["path"] = value;
      if (this.built) {
        this.setSettings();
      }
      return this.emit("change:path");
    }
  });

  function LottieLayer(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    if ((base = this.options).backgroundColor == null) {
      base.backgroundColor = null;
    }
    if ((base1 = this.options).path == null) {
      base1.path = null;
    }
    if ((base2 = this.options).autoplay == null) {
      base2.autoplay = true;
    }
    if ((base3 = this.options).loop == null) {
      base3.loop = true;
    }
    if ((base4 = this.options).speed == null) {
      base4.speed = 1;
    }
    if ((base5 = this.options).direction == null) {
      base5.direction = 1;
    }
    if ((base6 = this.options).renderer == null) {
      base6.renderer = "svg";
    }
    LottieLayer.__super__.constructor.call(this, this.options);
    if (this.options.path === null) {
      print("From LottieLayer: Setting a path to your json file is required.");
    }
    if (this.name === "") {
      print("From LottieLayer: The 'name' attribute is required.");
    }
    this.autoplay = this.options.autoplay;
    this.loop = this.options.loop;
    this.renderer = this.options.renderer;
    this.built = false;
    this._animationLayer = null;
    this.build();
  }

  LottieLayer.prototype.build = function() {
    this.html = '<div id=' + ("" + this.name) + '></div>';
    this.setSettings();
    return this.built = true;
  };

  LottieLayer.prototype.setSettings = function() {
    var _container, lottieSettings;
    _container = document.getElementById(this.name);
    _container.innerHTML = "";
    lottieSettings = {
      container: _container,
      path: this.path,
      renderer: this.renderer,
      autoplay: this.autoplay,
      loop: this.loop
    };
    this._animationLayer = lottie.loadAnimation(lottieSettings);
    this.setSpeed();
    return this.setDirection();
  };

  LottieLayer.prototype.play = function() {
    return this._animationLayer.play();
  };

  LottieLayer.prototype.stop = function() {
    return this._animationLayer.stop();
  };

  LottieLayer.prototype.pause = function() {
    return this._animationLayer.pause();
  };

  LottieLayer.prototype.goToAndPlay = function(value, isFrame) {
    if (isFrame == null) {
      isFrame = true;
    }
    return this._animationLayer.goToAndPlay(value, isFrame);
  };

  LottieLayer.prototype.goToAndStop = function(value, isFrame) {
    if (isFrame == null) {
      isFrame = true;
    }
    return this._animationLayer.goToAndStop(value, isFrame);
  };

  LottieLayer.prototype.playSegments = function(segments, forceFlag) {
    if (forceFlag == null) {
      forceFlag = true;
    }
    return this._animationLayer.playSegments(segments, forceFlag);
  };

  LottieLayer.prototype.setSpeed = function(speed) {
    if (speed == null) {
      speed = this.speed;
    }
    return this._animationLayer.setSpeed(speed);
  };

  LottieLayer.prototype.setDirection = function(direction) {
    if (direction == null) {
      direction = this.direction;
    }
    return this._animationLayer.setDirection(direction);
  };

  LottieLayer.prototype.onComplete = function(callback) {
    if (this.loop) {
      return this._animationLayer.addEventListener("loopComplete", callback);
    } else {
      return this._animationLayer.addEventListener("complete", callback);
    }
  };

  return LottieLayer;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlZXN1cmUvRG9jdW1lbnRzL0dpdEh1Yi9YL1JpbmdSaW5nLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2xlZXN1cmUvRG9jdW1lbnRzL0dpdEh1Yi9YL1JpbmdSaW5nLmZyYW1lci9tb2R1bGVzL0xvdHRpZUxheWVyLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMjI1xuTG90dGllTGF5ZXJcbi1cbkltcGxlbWVudGF0aW9uIG9mIEhlcm5hbiBUb3JyaXNpICYgQWlyQm5iIFwiTG90dGllLVdlYlwiIGZvciBGcmFtZXIuXG5ieSBANzJtZW5hXG4jIyNcblxuIyBJTkNMVURFIExJQlJBUlkg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5pbnNlcnRTY3JpcHQgPSAobG9jYWxTY3JpcHQsIHdlYlNjcmlwdCwgbmFtZSA9ICdKYXZhU2NyaXB0IExpYnJhcnknKSAtPlxuXHR0cnlcblx0XHRsaWIgPSBVdGlscy5kb21Mb2FkRGF0YVN5bmMgbG9jYWxTY3JpcHRcblx0XHRjb25zb2xlLmxvZyBcIiVjI3tuYW1lfSBTdWNjZXNzZnVsbHkgSW5jbHVkZWQgTG9jYWxseVwiLCBcImJhY2tncm91bmQ6ICNEREZGRTM7IGNvbG9yOiAjMDA3ODE0XCJcblx0Y2F0Y2ggZVxuXHRcdHRyeVxuXHRcdFx0bGliID0gVXRpbHMuZG9tTG9hZERhdGFTeW5jIHdlYlNjcmlwdFxuXHRcdFx0Y29uc29sZS5sb2cgXCIlYyN7bmFtZX0gU3VjY2Vzc2Z1bGx5IEluY2x1ZGVkIGZyb20gV2ViXCIsIFwiYmFja2dyb3VuZDogI0RERkZFMzsgY29sb3I6ICMwMDc4MTRcIlxuXHRcdGNhdGNoIGVcblx0XHRcdHRocm93IEVycm9yKFwiU29ycnksIEkgY291bGRuJ3QgbG9hZCAje25hbWV9XCIpXG5cblxuXHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwic2NyaXB0XCJcblx0c2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiXG5cdHNjcmlwdC5pbm5lckhUTUwgPSBsaWJcblxuXHRoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdXG5cdGhlYWQuYXBwZW5kQ2hpbGQgc2NyaXB0XG5cblx0c2NyaXB0XG5cbmluc2VydFNjcmlwdChcIm1vZHVsZXMvbG90dGllLm1pbi5qc1wiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9haXJibmIvbG90dGllLXdlYi9tYXN0ZXIvYnVpbGQvcGxheWVyL2xvdHRpZS5taW4uanNcIiwgXCJsb3R0aWUtd2ViXCIpXG5cblxuIyBMT1RUSUUgTEFZRVIg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5jbGFzcyBleHBvcnRzLkxvdHRpZUxheWVyIGV4dGVuZHMgTGF5ZXJcblxuXHRAZGVmaW5lIFwic3BlZWRcIixcblx0XHRnZXQ6IC0+IEBfcHJvcGVydGllc1tcInNwZWVkXCJdXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX3Byb3BlcnRpZXNbXCJzcGVlZFwiXSA9IHZhbHVlXG5cdFx0XHRAc2V0U3BlZWQodmFsdWUpIGlmIEBidWlsdFxuXHRcdFx0QGVtaXQgXCJjaGFuZ2U6c3BlZWRcIlxuXG5cdEBkZWZpbmUgXCJkaXJlY3Rpb25cIixcblx0XHRnZXQ6IC0+IEBfcHJvcGVydGllc1tcImRpcmVjdGlvblwiXVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9wcm9wZXJ0aWVzW1wiZGlyZWN0aW9uXCJdID0gdmFsdWVcblx0XHRcdEBzZXREaXJlY3Rpb24odmFsdWUpIGlmIEBidWlsdFxuXHRcdFx0QGVtaXQgXCJjaGFuZ2U6ZGlyZWN0aW9uXCJcblxuXHRAZGVmaW5lIFwicGF0aFwiLFxuXHRcdGdldDogLT4gQF9wcm9wZXJ0aWVzW1wicGF0aFwiXVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9wcm9wZXJ0aWVzW1wicGF0aFwiXSA9IHZhbHVlXG5cdFx0XHRAc2V0U2V0dGluZ3MoKSBpZiBAYnVpbHRcblx0XHRcdEBlbWl0IFwiY2hhbmdlOnBhdGhcIlxuXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQjIERlZmF1bHRzXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IG51bGxcblx0XHRAb3B0aW9ucy5wYXRoID89IG51bGxcblx0XHRAb3B0aW9ucy5hdXRvcGxheSA/PSB0cnVlXG5cdFx0QG9wdGlvbnMubG9vcCA/PSB0cnVlXG5cdFx0QG9wdGlvbnMuc3BlZWQgPz0gMVxuXHRcdEBvcHRpb25zLmRpcmVjdGlvbiA/PSAxXG5cdFx0QG9wdGlvbnMucmVuZGVyZXIgPz0gXCJzdmdcIlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdGlmIEBvcHRpb25zLnBhdGggaXMgbnVsbFxuXHRcdFx0cHJpbnQgXCJGcm9tIExvdHRpZUxheWVyOiBTZXR0aW5nIGEgcGF0aCB0byB5b3VyIGpzb24gZmlsZSBpcyByZXF1aXJlZC5cIlxuXHRcdGlmIEBuYW1lIGlzIFwiXCJcblx0XHRcdHByaW50IFwiRnJvbSBMb3R0aWVMYXllcjogVGhlICduYW1lJyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQuXCJcblxuXHRcdCNTaG9ydGN1dHNcblx0XHRAYXV0b3BsYXkgPSBAb3B0aW9ucy5hdXRvcGxheVxuXHRcdEBsb29wID0gQG9wdGlvbnMubG9vcFxuXHRcdEByZW5kZXJlciA9IEBvcHRpb25zLnJlbmRlcmVyXG5cblx0XHQjVmFyc1xuXHRcdEBidWlsdCA9IGZhbHNlXG5cdFx0QF9hbmltYXRpb25MYXllciA9IG51bGxcblxuXHRcdCNSdW5cblx0XHRAYnVpbGQoKVxuXG5cdGJ1aWxkOiAoKSAtPlxuXHRcdEBodG1sID0gJzxkaXYgaWQ9JytcIiN7QG5hbWV9XCIrJz48L2Rpdj4nXG5cdFx0QHNldFNldHRpbmdzKClcblx0XHRAYnVpbHQgPSB0cnVlXG5cblx0c2V0U2V0dGluZ3M6ICgpIC0+XG5cdFx0X2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEBuYW1lKVxuXHRcdF9jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuXG5cdFx0bG90dGllU2V0dGluZ3MgPVxuXHRcdFx0Y29udGFpbmVyOiBfY29udGFpbmVyLFxuXHRcdFx0cGF0aDogQHBhdGgsXG5cdFx0XHRyZW5kZXJlcjogQHJlbmRlcmVyLFxuXHRcdFx0YXV0b3BsYXk6IEBhdXRvcGxheSxcblx0XHRcdGxvb3A6IEBsb29wXG5cblx0XHRAX2FuaW1hdGlvbkxheWVyID0gbG90dGllLmxvYWRBbmltYXRpb24obG90dGllU2V0dGluZ3MpO1xuXHRcdEBzZXRTcGVlZCgpXG5cdFx0QHNldERpcmVjdGlvbigpXG5cblx0cGxheTogKCkgLT5cblx0XHRAX2FuaW1hdGlvbkxheWVyLnBsYXkoKVxuXHRzdG9wOiAoKSAtPlxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIuc3RvcCgpXG5cdHBhdXNlOiAoKSAtPlxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIucGF1c2UoKVxuXHRnb1RvQW5kUGxheTogKHZhbHVlLCBpc0ZyYW1lKSAtPlxuXHRcdGlzRnJhbWUgPz0gdHJ1ZVxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIuZ29Ub0FuZFBsYXkodmFsdWUsIGlzRnJhbWUpXG5cdGdvVG9BbmRTdG9wOiAodmFsdWUsIGlzRnJhbWUpIC0+XG5cdFx0aXNGcmFtZSA/PSB0cnVlXG5cdFx0QF9hbmltYXRpb25MYXllci5nb1RvQW5kU3RvcCh2YWx1ZSwgaXNGcmFtZSlcblx0cGxheVNlZ21lbnRzOiAoc2VnbWVudHMsIGZvcmNlRmxhZykgLT5cblx0XHRmb3JjZUZsYWcgPz0gdHJ1ZVxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIucGxheVNlZ21lbnRzKHNlZ21lbnRzLCBmb3JjZUZsYWcpXG5cdHNldFNwZWVkOiAoc3BlZWQpIC0+XG5cdFx0c3BlZWQgPz0gQHNwZWVkXG5cdFx0QF9hbmltYXRpb25MYXllci5zZXRTcGVlZChzcGVlZClcblx0c2V0RGlyZWN0aW9uOiAoZGlyZWN0aW9uKSAtPlxuXHRcdGRpcmVjdGlvbiA/PSBAZGlyZWN0aW9uXG5cdFx0QF9hbmltYXRpb25MYXllci5zZXREaXJlY3Rpb24oZGlyZWN0aW9uKVxuXHRvbkNvbXBsZXRlOiAoY2FsbGJhY2spIC0+XG5cdFx0aWYgQGxvb3Bcblx0XHRcdEBfYW5pbWF0aW9uTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciBcImxvb3BDb21wbGV0ZVwiLCBjYWxsYmFja1xuXHRcdGVsc2Vcblx0XHRcdEBfYW5pbWF0aW9uTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciBcImNvbXBsZXRlXCIsIGNhbGxiYWNrXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTs7QURBQTs7Ozs7O0FBQUEsSUFBQSxZQUFBO0VBQUE7OztBQVFBLFlBQUEsR0FBZSxTQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLElBQXpCO0FBQ2QsTUFBQTs7SUFEdUMsT0FBTzs7QUFDOUM7SUFDQyxHQUFBLEdBQU0sS0FBSyxDQUFDLGVBQU4sQ0FBc0IsV0FBdEI7SUFDTixPQUFPLENBQUMsR0FBUixDQUFZLElBQUEsR0FBSyxJQUFMLEdBQVUsZ0NBQXRCLEVBQXVELHFDQUF2RCxFQUZEO0dBQUEsYUFBQTtJQUdNO0FBQ0w7TUFDQyxHQUFBLEdBQU0sS0FBSyxDQUFDLGVBQU4sQ0FBc0IsU0FBdEI7TUFDTixPQUFPLENBQUMsR0FBUixDQUFZLElBQUEsR0FBSyxJQUFMLEdBQVUsaUNBQXRCLEVBQXdELHFDQUF4RCxFQUZEO0tBQUEsYUFBQTtNQUdNO0FBQ0wsWUFBTSxLQUFBLENBQU0seUJBQUEsR0FBMEIsSUFBaEMsRUFKUDtLQUpEOztFQVdBLE1BQUEsR0FBUyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QjtFQUNULE1BQU0sQ0FBQyxJQUFQLEdBQWM7RUFDZCxNQUFNLENBQUMsU0FBUCxHQUFtQjtFQUVuQixJQUFBLEdBQU8sUUFBUSxDQUFDLG9CQUFULENBQThCLE1BQTlCLENBQXNDLENBQUEsQ0FBQTtF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
