import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>()

app.post('/api/v1/user/signup',async (c)=> {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
    const body = await c.req.json()
  try {
    await prisma.user.create({
    data:{
      email: body.email,
      password: body.password,
      name: body.name
    }
    
  })
  return c.text("User created successfully!")
  } catch (error:any) {
    return c.text(error)
  }
  


   return c.text("Signup route")
})
app.post('/api/v1/user/signin', (c:any)=> {
  return c.text("Signin route")
})

app.post('/api/v1/blog' ,(c)=>{
  return c.text("blog posted")
})
app.put('/api/v1/blog' ,(c)=>{
  return c.text("edit blog")
})
app.get('/api/v1/blog/:id' ,(c)=>{
  return c.text("blog with userid: something")
})
app.get('/api/v1/blog/bulk/all' ,(c)=>{
  return c.text("all blogs presented")
})

export default app



