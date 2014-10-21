"use strict"
var koala = require('koala');
var app = koala();
app.use(function *(){
  this.body =  'hellow koa';
});
app.listen(9501);
