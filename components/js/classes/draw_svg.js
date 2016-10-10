var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.Spellbook.Classes.DrawSvg = (function(superClass) {
  extend(DrawSvg, superClass);

  DrawSvg._defaults = {
    $element: $('.js-drawSvg'),
    prefix: 'path'
  };

  function DrawSvg() {
    this.draw = bind(this.draw, this);
    DrawSvg.__super__.constructor.apply(this, arguments);
    this._currentFrame = 0;
    this._handle = 0;
    this._lengths = [];
    this._paths = [];
    this._progress = 0;
    this._totalFrames = 60;
    this._setStorage();
  }

  DrawSvg.prototype.draw = function() {
    this._progress = this._currentFrame / this._totalFrames;
    if (this._progress > 1) {
      return window.cancelAnimationFrame(this._handle);
    } else {
      this._currentFrame++;
      this._setStroke();
      return this._handle = window.requestAnimationFrame(this.draw);
    }
  };

  DrawSvg.prototype._setStorage = function() {
    var i, index, length, numberOfPaths, ref, results;
    numberOfPaths = this._settings.$element.find('path[id]').length;
    results = [];
    for (index = i = 0, ref = numberOfPaths; 0 <= ref ? i < ref : i > ref; index = 0 <= ref ? ++i : --i) {
      this._paths[index] = document.getElementById(this._settings.prefix + "-" + index);
      length = this._paths[index].getTotalLength();
      this._lengths[index] = length;
      this._paths[index].style.strokeDasharray = length + " " + length;
      results.push(this._paths[index].style.strokeDashoffset = length);
    }
    return results;
  };

  DrawSvg.prototype._setStroke = function() {
    var i, index, ref, results;
    results = [];
    for (index = i = 0, ref = this._paths.length; 0 <= ref ? i < ref : i > ref; index = 0 <= ref ? ++i : --i) {
      results.push(this._paths[index].style.strokeDashoffset = Math.floor(this._lengths[index] * (1 - this._progress)));
    }
    return results;
  };

  return DrawSvg;

})(Spellbook.Classes.Base);
