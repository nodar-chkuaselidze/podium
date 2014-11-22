'use strict';

var EventEmitter = require('events').EventEmitter,
    _ = require('lodash'),
    util = require('util');

function SomeClass(obj) {
  EventEmitter.call(this);

  var self = this;
  this._props = {};

  for (var key in obj) {
    self.set(key, obj[key]);
  }
};

util.inherits(SomeClass, EventEmitter);

SomeClass.prototype.set = function (key, val) {
  var self = this;

  Object.defineProperty(self, key, {
    enumerable : true,
    configurable : true,
    get : function () {
      return self._props[key];
    },
    set : function (value) {
        self._props[key] = val;
        self.emit('change:' + key, val);
        self.emit('change', self._props);
    }
  });
};

module.exports = SomeClass;
