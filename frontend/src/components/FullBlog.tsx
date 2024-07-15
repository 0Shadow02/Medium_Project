import { Blog } from "../hooks"
import { Appbar } from "./appbar"
import { Avatar } from "./blogcard";
import { PostDate } from "./blogdate";

export const FullBlog=({ blog }:{blog:Blog})=>{

    return <div>
        <Appbar ></Appbar>
        <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full  pt-200 max-w-screen-xl pt-12">
        <div className=" col-span-8 ">
            <div className=" text-3xl font-extrabold">
                  {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                Posted on {PostDate(blog.date)}
            </div>
            <div className="pt-4" dangerouslySetInnerHTML={{__html:blog.content}}>
               {/* {blog.content} */}
            </div>
        </div>
        <div className="col-span-4 hidden md:block">
            <div className="pb-4">
             Author
            </div>
             <div className="flex w-full">
                <div className="pr-4 flex flex-col justify-center ">
            <Avatar name={blog.author.name} size="small"></Avatar>
                </div>
            <div>
                <div className="text-xl font-bold">
                     {blog.author.name} 
                </div>
                <div className="text-slate-500">
                    Random catch phrase about the author's ability to grab the users attention
                </div>
                </div>
            </div>
             
        </div>
        
        </div>
    </div>
    </div>
}