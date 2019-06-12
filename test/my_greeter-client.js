'use strict';

var assert = require('assert');
var MyGreeter = require('../src/MyGreeter.js');

describe('MyGreeter.Client', function () {

    describe('Constructor', function () {

        it('should be instantiated', function() {
            var greeter = new MyGreeter.Client();

            assert.ok(greeter instanceof MyGreeter.Client);
        });
    });

    describe('getGreeting 12am', function () {

        it('should return Good morning', function() {
            var greeter = new MyGreeter.Client();

            assert.equal(greeter.getGreeting(0), 'Good morning');
        });
    });

    describe('getGreeting 12pm', function () {

        it('should return Good afternoon', function() {
            var greeter = new MyGreeter.Client();

            assert.equal(greeter.getGreeting(12), 'Good afternoon');
        });
    });

    describe('getGreeting 6pm', function () {

        it('should return Good evening', function() {
            var greeter = new MyGreeter.Client();

            assert.equal(greeter.getGreeting(18), 'Good evening');
        });
    });
});