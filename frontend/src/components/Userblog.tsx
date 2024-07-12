import { useMyblogs } from "../hooks"
import { BlogCard } from "./blogcard"
import { PostDate } from "./blogdate"
import { MyBlogSkelton } from "./skeleton"

export const Myblog = ()=>{
      
    const {loading,Myblogs}= useMyblogs()

    if(loading){
        return <div>
            <div className="flex justify-center">
                <div>
                    <MyBlogSkelton></MyBlogSkelton>
                    <MyBlogSkelton></MyBlogSkelton>
                    <MyBlogSkelton></MyBlogSkelton>
                    <MyBlogSkelton></MyBlogSkelton>
                    <MyBlogSkelton></MyBlogSkelton>
                    <MyBlogSkelton></MyBlogSkelton>
                </div>
                    </div>
            </div>
    }
    
   return <div>  
   <div className="flex justify-center">
           <div >
               {Myblogs.map((Myblog)=>{
                    return <BlogCard
                    id={Myblog.id}
                    authorname={Myblog.author.name}
                    title={Myblog.title}
                    content={Myblog.content}
                    publishedDate={PostDate(Myblog.date)}
                    ></BlogCard>
               })}     
           </div>
   </div>
</div>   
}