var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.Spellbook.DrawSvg = (function() {
  DrawSvg.prototype._settings = {};

  DrawSvg.prototype._paths = [];

  DrawSvg.prototype._lengths = [];

  DrawSvg.prototype._currentFrame = 0;

  DrawSvg.prototype._totalFrames = 60;

  DrawSvg.prototype._handle = 0;

  DrawSvg.prototype._progress = 0;

  function DrawSvg(options) {
    this.options = options;
    this.draw = __bind(this.draw, this);
    this.init();
  }

  DrawSvg.prototype.init = function() {
    this._settings = $.extend({
      $element: $('.js-drawSvg'),
      prefix: 'path'
    }, this.options);
    return this._setStorage();
  };

  DrawSvg.prototype._setStorage = function() {
    var index, length, numberOfPaths, _i, _results;
    numberOfPaths = this._settings.$element.find('path').length;
    _results = [];
    for (index = _i = 0; 0 <= numberOfPaths ? _i < numberOfPaths : _i > numberOfPaths; index = 0 <= numberOfPaths ? ++_i : --_i) {
      this._paths[index] = document.getElementById("" + this._settings.prefix + "-" + index);
      length = this._paths[index].getTotalLength();
      this._lengths[index] = length;
      this._paths[index].style.strokeDasharray = "" + length + " " + length;
      _results.push(this._paths[index].style.strokeDashoffset = length);
    }
    return _results;
  };

  DrawSvg.prototype._setStroke = function() {
    var index, _i, _ref, _results;
    _results = [];
    for (index = _i = 0, _ref = this._paths.length; 0 <= _ref ? _i < _ref : _i > _ref; index = 0 <= _ref ? ++_i : --_i) {
      _results.push(this._paths[index].style.strokeDashoffset = Math.floor(this._lengths[index] * (1 - this._progress)));
    }
    return _results;
  };

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

  return DrawSvg;

})();
