"use strict"
var koa = require('koa')
  , render = require('./lib/render')
  , router = require('koa-route')
  , logger = require('koa-logger')
  , app = koa();
this.port = 9501;
app.use(logger());

// app.use(router(app));
// app.get('/idx/:id', function *(next){
//   var _id = this.params.id;
// });
app.use(router.get('/idx/:id', idx));

function *idx() {
  this.body = yield render('body');
};

app.use(function *(){
  // this.body =  'hellow koa';
  this.body = yield render('footer')
});
// app.port = 9501;
app.listen(this.port);

console.log('listening on port: '+ this.port);
