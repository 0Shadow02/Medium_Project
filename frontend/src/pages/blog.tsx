import { useNavigate, useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/skeleton";





 export  const Blog = ()=>{
    
    const navigate = useNavigate()
    if(!window.localStorage.getItem("token")){
        navigate("/signin")
    }
    else {
    const {id} = useParams();
    const {loading,blog}= useBlog({id:id||""})
    if(loading){
        return <div className="">
                    <FullBlogSkeleton></FullBlogSkeleton>
                </div>
    }
    return <div>
         
       <FullBlog blog={blog}></FullBlog>
              
    </div>
}
 }