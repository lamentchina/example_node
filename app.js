"use strict"
var koa = require('koa')
  , path = require('path')
  , render = require('./lib/render')
  , ejs = require('koa-ejs')
  , router = require('koa-route')
  , logger = require('koa-logger')
  , app = koa();
this.port = 9501;
app.use(logger());

// module.exports = function(app){
//   // ejs 配置
//   ejs(app, {
//     root: path.join(__dirname, 'view/frame'),
//     layout: 'body',
//     viewExt: 'html',
//     cache: false,
//     open: '<ejs>',
//     close: '</ejs>'
//     /*debug: true,
//     filters: filters*/
//   });
// };

ejs.open = '<ejs>';
ejs.close = '</ejs>';

// app.use(router(app));
// app.get('/idx/:id', function *(next){
//   var _id = this.params.id;
// });
app.use(router.get('/idx/:id', idx));

function* idx() {
  this.body =
    yield render('body');
};
console.log(ejs)

// app.use(function *() {
  // var users = [{name: 'Dead Horse'}, {name: 'Jack'}, {name: 'Tom'}];
  // yield this.render('content', {
  //   users: users
  // });
// });

app.use(function*() {
//   console.log(this.ip);
//   // this.body =  'hellow koa';
//   this.body = yield render('body');
    yield this.render('body', {

    })
//
});

// app.use(function *() {
//   var users = [{name: 'Dead Horse'}, {name: 'Jack'}, {name: 'Tom'}];
//   yield this.render('content', {
//     users: users
//   });
// });

// app.port = 9501;
app.listen(this.port);

console.log('listening on port: ' + this.port);
