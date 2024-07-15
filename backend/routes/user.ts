import { Hono } from "hono";
import { sign } from "hono/jwt";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signInput } from "@shadow02/blog-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      msg: "Wrong Inputs",
    });
  }
  const response = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (response) {
    return c.json({ msg: "user already exist!" });
  } else {
    try {
      const User = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name,
        },
      });
      const payload = {
        id: User.id,
      };
      const token = await sign(payload, c.env.JWT_SECRET);
      // c.res.headers.append('authorization','Bearer '+ token)
      return c.json({
        msg: "User created successfully!",
        token: "Bearer " + token,
      });
    } catch (error: any) {
      c.status(403);
      return c.text(error);
    }
  }
});

userRouter.post("/signin", async (c: any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Wrong Inputs",
    });
  }
  try {
    const User = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (User) {
      const payload = {
        id: User.id,
      };
      const token = await sign(payload, c.env.JWT_SECRET);

      return c.json({
        msg: "user logined successfully!",
        token: "Bearer " + token,
      });
    } else {
      return c.json({ msg: "User doesn't exists" });
    }
  } catch (error: any) {
    return c.text(error);
  }
});
userRouter.get("/userdeatils", async (c: any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const headers: any = c.req.header("authorization") || "";
  const token = headers.split(" ")[1];
  const payload: any = await verify(token, c.env.JWT_SECRET);
  const userid = payload.id;
  const userdeatils = await prisma.user.findUnique({
    where: {
      id: userid,
    },
    select: {
      name: true,
      email: true,
    },
  });
  return c.json(userdeatils);
});
