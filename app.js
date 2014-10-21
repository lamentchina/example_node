"use strict"
var koa = require('koa')
  , router = require('koa-router')
  , app = koa();

app.use(router(app));

app.get('/idx/:id', function *(next){
  console.log('idx->id')
  this.body = 'idx:id';
})

app.use(function *(){
  this.body =  'hellow koa';
});
// app.port = 9501;
app.listen(9501);
