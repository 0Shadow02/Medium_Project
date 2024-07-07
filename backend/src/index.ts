import { Hono } from 'hono'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Variables } from 'hono/types'
const secret = 'mySecretKey'
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET : string
    
	}
  Variables : {
      userId: string
    }
}>()

app.use('/api/v1/blog/*',async (c,next)=>{
     const headers:any = c.req.header("authorization") || ""
     const token = headers.split(" ")[1] 
     try {
      const payload:any = await verify(token, c.env.JWT_SECRET)
      c.set('userId',payload.id)
     } catch (error) {
      return c.json("unathorized access")
     }
    
     await next()
  
})


app.post('/api/v1/user/signup',async (c)=> {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  
    const body = await c.req.json()
    const response = await prisma.user.findUnique({
      where:{
        email: body.email,
      }
    })
    if (response) {
      return c.text("user already exist!")
    } else {
        try {
    const User= await prisma.user.create({
    data:{
      email: body.email,
      password: body.password,
      name: body.name
    }
    
    })
  const payload = {
    id : User.id
  }
  const token = await sign(payload,c.env.JWT_SECRET)
  // c.res.headers.append('authorization','Bearer '+ token)
  return c.json({msg:"User created successfully!" , token:"Bearer "+ token})
  } catch (error:any) {
    return c.text(error)
  }
    }

   
})
app.post('/api/v1/user/signin',async (c:any)=> {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  const body = await c.req.json()
  try {
    const User = await prisma.user.findUnique({
      where:{
        email: body.email,
      }
    })
    if (User) {
      const payload = {
        id : User.id
      }
      const token = await sign(payload,c.env.JWT_SECRET)
      
      return c.json({msg:"user logined successfully!",token:"Bearer "+ token})
    } else {
      return c.text(
        "User doesn't exist!"
      )
    }

  } catch (error:any) {
    return c.text(error)
  }

  
})


app.post('/api/v1/blog' ,async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
 const userid = c.get('userId')
 const response:any =await prisma.user.findUnique(
  {
    where:{
      id: userid
    }
  }
 )
 return c.json(response)
 
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



