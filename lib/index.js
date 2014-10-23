/*!
 * koa-ejs - example/app.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var koa = require('koa');
var render = require('..');
var path = require('path');
var wait = require('co-wait');

var app = koa();

var locals = {
  version: '0.0.1',
  now: function () {
    return new Date();
  },
  ip: function *() {
    yield wait(100);
    return this.ip;
  },
};

var filters = {
  format: function (time) {
    return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
  }
};

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true,
  locals: locals,
  filters: filters
});

app.use(function *() {
  var users = [{name: 'Dead Horse'}, {name: 'Jack'}, {name: 'Tom'}];
  yield this.render('content', {
    users: users
  });
});

if (process.env.NODE_ENV === 'test') {
  module.exports = app.callback();
} else {
  app.listen(7001);
  console.log('open http://localhost:7001')
}
