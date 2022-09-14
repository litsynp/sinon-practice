import Koa from 'koa'
import Router from 'koa-router'

const PORT = 4000
const app = new Koa()
const router = new Router()

router.get('/health-check', (ctx: Koa.Context) => {
  ctx.body = 200
})

app.use(router.routes())

app.listen(PORT, () => {
  console.log('Server running on port 4000')
})
