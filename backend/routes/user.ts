import { Hono } from "hono"
import {sign} from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
export const userRouter = new Hono<{
	Bindings: {
	DATABASE_URL: string
    JWT_SECRET : string
    
	}
  Variables : {
      userId: string
    }
}>()


  userRouter.post('/signup',async (c)=> {
     const prisma = new PrismaClient({
       datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
    
      const body = await c.req.json()
      const response = await prisma.user.findUnique(
        {
        where:{email: body.email, }
        })
    
      if (response) {
        return c.text("user already exist!")
      } 
      else {

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
        } 
    
        catch (error:any) {
            return c.text(error)
        }
      }
  
     
  })

  userRouter.post('/signin',async (c:any)=> {
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

     const body = await c.req.json()
     try {
         const User = await prisma.user.findUnique({
           where:{ email: body.email,}
         })
         if (User) {
            const payload = {
              id : User.id
            }
            const token = await sign(payload,c.env.JWT_SECRET)
         
            return c.json({msg:"user logined successfully!",token:"Bearer "+ token})

         } 
         else {
            return c.text(
               "User doesn't exist!"
            )
         }
  
     }
     catch (error:any) {
       return c.text(error)
     }
  
    
  })