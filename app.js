const serve = require('koa-static')
const path = require('path');
const views = require('koa-views')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()

// app.use(serve(__dirname+'/index.html'))
app.use(bodyParser())
app.use(views(path.join(__dirname, '/views'), { extension: 'html' }));

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

router.post('/log', (ctx, next) => {
  
  console.log('log body:', ctx.request.body.lg[0].logData)
  ctx.body = 'log'
})

app.use(router.routes())
app.use(router.allowedMethods())

// render

app.use(async function(ctx) {
  await ctx.render('index');
});

app.listen(3000, () => {
  console.log('server listening')
})