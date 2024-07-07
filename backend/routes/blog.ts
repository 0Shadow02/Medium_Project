import { Hono } from "hono"
import {verify} from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
 export const blogRouter = new Hono<{
	Bindings: {
	DATABASE_URL: string
    JWT_SECRET : string
    
	}
  Variables : {
      userId: string
    }
 }>()

  blogRouter.use('/*',async (c,next)=>{
     const headers:any = c.req.header("authorization") || ""
     const token = headers.split(" ")[1] 
      try {
        const payload:any = await verify(token, c.env.JWT_SECRET)
        c.set('userId',payload.id)
          } 
     catch (error) {
         return c.json("unathorized access")
          }
   
    await next()
 
})

  blogRouter.post('/' ,async(c)=>{
     const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
     const userid = c.get('userId')
     const body = await c.req.json()
     try {
        await prisma.post.create({
            data:{
                title : body.title,
                content :body.content,
                authorid : userid,
            }
         })
         return c.text('created!')
     } catch (error:any) {
        c.status(403)
        return c.json(error)
     }
     
   })
  blogRouter.put('/' ,async(c)=>{
     const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
     const blogid = c.req.header('blogid')
     const updatedata = await c.req.json()
     try {
        await prisma.post.update({
            where: {id:blogid},
            data :{
                title: updatedata.title,
                content: updatedata.content
            }
        })
        return c.text('updated!')
     } catch (error:any) {
        c.status(403)
        return c.json(error)
     }
     
  })
  blogRouter.put('/publish' ,async(c)=>{
     const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
     const blogid = c.req.header('blogid')
     try {
        await prisma.post.update({
            where: {id:blogid},
            data :{
                published:true
            }
        })
        return c.text('published!')
     } catch (error:any) {
        c.status(403)
        return c.json(error)
     }
     
  })

  blogRouter.get('/:id' ,async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())

     const userid = c.req.param('id')
     console.log(userid)
     try {
        const blog = await prisma.post.findMany({
            where : {
                authorid : userid
            }
        })
        return c.json(blog)
     } catch (error:any) {
        return c.text(error)
     }
     
  })


  blogRouter.get('/bulk/all' ,async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())

     const allposts = await prisma.post.findMany()

     return c.json(allposts)
  })