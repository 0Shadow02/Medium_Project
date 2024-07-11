
import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/blogcard"
import { PostDate } from "../components/blogdate";
import { BlogSkelton } from "../components/skeleton";
import { useBlogs } from "../hooks"
export const Blogs = ()=>{
    const {loading,blogs}= useBlogs();

    if(loading){
        return <div>
            <Appbar></Appbar>
            <div className="flex justify-center">
                <div>
                    <BlogSkelton/>
                    <BlogSkelton/>
                    <BlogSkelton/>
                    <BlogSkelton/>
                    <BlogSkelton/>
                </div>
                    </div>
            </div>
    }
    
   return <div>  
   <Appbar/>
   <div className="flex justify-center">
           <div >
               {blogs.map((blog)=>{
                    return <BlogCard
                    id={blog.id}
                    authorname={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={PostDate(blog.date)}
                    ></BlogCard>
               })}
                       
                       
           </div>
   </div>
</div>   
} 