import { useRecoilValueLoadable } from "recoil";
import { Appbar } from "../components/appbar";
import { BlogCard } from "../components/blogcard";
import { PostDate } from "../components/blogdate";
import { BlogSkelton } from "../components/skeleton";
import { BlogsAtom } from "../store/Atoms";
import { Error404 } from "../components/alertmessage";

interface blog {
  id: string;
  author: {
    name: string;
  };
  title: string;
  content: string;
  publishedDate: (e: Date) => Date;
  date: Date;
}
export const Blogs = () => {
  const blogs = useRecoilValueLoadable(BlogsAtom([]));

  if (blogs.state === "loading") {
    return (
      <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
          <div>
            <BlogSkelton />
            <BlogSkelton />
            <BlogSkelton />
            <BlogSkelton />
            <BlogSkelton />
          </div>
        </div>
      </div>
    );
  } else if (blogs.state === "hasValue") {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            {blogs.contents.map((blog: blog) => {
              return (
                <BlogCard
                  id={blog.id}
                  authorname={blog.author.name}
                  title={blog.title}
                  content={blog.content}
                  publishedDate={PostDate(blog.date)}
                ></BlogCard>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (blogs.state === "hasError") {
    return <Error404></Error404>;
  }
};
