import z from "zod"

export const signInput = z.object({
    email: z.string().email(),
    password:z.string().min(8).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
      name:z.string().optional()
})


export const createBlogInput = z.object({
    title:   z.string().max(100),
    content: z.string(),
})

export const updateBlogInput = z.object({
    title:   z.string().max(100),
    content: z.string(),
    id:      z.string()
})


export type SignInput = z.infer<typeof signInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>