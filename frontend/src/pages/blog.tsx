import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/skeleton";
import { useRecoilValueLoadable } from "recoil";
import { BlogAtom } from "../store/Atoms";
import { Error404b } from "../components/alertmessage";

export const Blog = () => {
  const { id } = useParams();
  const blog = useRecoilValueLoadable(BlogAtom(id));
  if (blog.state === "loading") {
    return (
      <div className="">
        <FullBlogSkeleton></FullBlogSkeleton>
      </div>
    );
  } else if (blog.state === "hasValue") {
    return (
      <div>
        <FullBlog blog={blog.contents}></FullBlog>
      </div>
    );
  } else {
    return <Error404b />;
  }
};
