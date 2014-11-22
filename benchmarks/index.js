'use strict';

var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    Version1 = require('./version1'),
    Version2 = require('./version2');

var v1, v2;
suite.add('version#1', function () {
  v1 = new Version1({
    hello : 'name',
    utracheno : 'other'
  });
}).add('version#2', function () {
  v2 = new Version2({
    hello : 'name',
    utracheno : 'other'
  });
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ', this.filter('fastest').pluck('name'));
})
.run();

suite = new Benchmark.Suite;
suite
.add('version1#setters', function () {
  v1.set({
    hello : 'xurma',
    axali : 'mtverasasruti'
  });
})
.add('version2#setters', function () {
  v2.hello = 'xurma';
  v2.set('axali', 'mtverasasruti');
})
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ', this.filter('fastest').pluck('name'));
})
.run();

//Pure setters
suite = new Benchmark.Suite;
suite
.add('version1#pureSetter', function () {
  v1.set({
    'hello' : 'still world',
    'axali' : 'kargad davickebuli dzveli'
  });
})
.add('version2#pureSetter', function () {
  v2.hello = 'still world';
  v2.axali = 'kargad davickebuli dzveli';
})
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ', this.filter('fastest').pluck('name'));
})
.run();

//Pure getters
suite = new Benchmark.Suite;
suite
.add('version1#getters', function () {
  var xa = {
    ss : v1.get('hello'),
    sr : v1.get('axali')
  };
})
.add('version2#getters', function () {
  var xa = {
    ss : v2.hello,
    sr : v2.axali
  };
})
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ', this.filter('fastest').pluck('name'));
})
.run();
