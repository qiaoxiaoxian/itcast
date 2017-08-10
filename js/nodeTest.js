var koa=require('koa');
var app=koa();
app.use(function *(){
    this.body='hello word';
});

app.listen(3001);