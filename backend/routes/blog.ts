import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput } from "@shadow02/blog-common";
import { updateBlogInput } from "@shadow02/blog-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const headers: any = c.req.header("authorization") || "";
  const token = headers.split(" ")[1];
  try {
    const payload: any = await verify(token, c.env.JWT_SECRET);
    c.set("userId", payload.id);
  } catch (error) {
    return c.json("unathorized access");
  }

  await next();
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const userid = c.get("userId");
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Wrong Inputs",
    });
  }

  try {
    const response = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorid: userid,
        date: new Date(),
        published: true,
      },
    });
    return c.json(response);
  } catch (error: any) {
    c.status(403);
    return c.json(error);
  }
});
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogid = c.req.header("blogid");
  const updatedata = await c.req.json();
  const { success } = updateBlogInput.safeParse(updatedata);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Wrong Inputs",
    });
  }
  try {
    await prisma.post.update({
      where: { id: blogid },
      data: {
        title: updatedata.title,
        content: updatedata.content,
      },
    });
    return c.text("updated!");
  } catch (error: any) {
    c.status(403);
    return c.json(error);
  }
});
blogRouter.put("/publish", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogid = c.req.header("blogid");
  try {
    await prisma.post.update({
      where: { id: blogid },
      data: {
        published: true,
      },
    });
    return c.text("published!");
  } catch (error: any) {
    c.status(403);
    return c.json(error);
  }
});

blogRouter.get("/:id", async (c) => {
  const postid = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: postid,
      },
      select: {
        title: true,
        content: true,
        id: true,
        date: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json(blog);
  } catch (error: any) {
    return c.text(error);
  }
});

blogRouter.get("/bulk/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const allposts = await prisma.post.findMany({
    orderBy: {
      date: "desc",
    },
    select: {
      title: true,
      content: true,
      id: true,
      date: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return c.json(allposts);
});
blogRouter.use("/post/*", async (c, next) => {
  const headers: any = c.req.header("authorization") || "";
  const token = headers.split(" ")[1];
  try {
    const payload: any = await verify(token, c.env.JWT_SECRET);
    c.set("userId", payload.id);
  } catch (error) {
    return c.json("unathorized access");
  }

  await next();
});

blogRouter.get("/posts/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userid = c.get("userId");
  const allposts = await prisma.post.findMany({
    where: {
      authorid: userid,
    },
    select: {
      title: true,
      content: true,
      id: true,
      date: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return c.json(allposts);
});
