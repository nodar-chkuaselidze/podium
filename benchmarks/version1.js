'use strict';

var EventEmitter = require('events').EventEmitter,
    _ = require('lodash'),
    util = require('util');

function SomeClass(obj) {
  this._obj = obj;

  EventEmitter.call(this);
};

util.inherits(SomeClass, EventEmitter);

SomeClass.prototype.set = function (obj) {
  var key, val;
  for (key in obj) {
    val = obj[key];
    this.emit('change:' + key, val);
  }

  this._obj = _.extend(this._obj, obj);
  this.emit('change', this._obj);
};

SomeClass.prototype.get = function (key) {
  return this._obj[key];
};

module.exports = SomeClass;
