import { useRecoilValueLoadable } from "recoil";
import { BlogCard } from "./blogcard";
import { PostDate } from "./blogdate";
import { MyBlogSkelton } from "./skeleton";
import { MyblogAtom } from "../store/Atoms";

interface Myblog {
  id: string;
  author: {
    name: string;
  };
  title: string;
  content: string;
  publishedDate: (e: Date) => Date;
  date: Date;
}

export const Myblog = () => {
  const Myblogs = useRecoilValueLoadable(MyblogAtom([]));

  if (Myblogs.state === "loading") {
    return (
      <div>
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
    );
  }

  return (
    <div>
      <div className="flex justify-center">
        <div>
          {Myblogs.contents.map((Myblog: Myblog) => {
            return (
              <BlogCard
                id={Myblog.id}
                authorname={Myblog.author.name}
                title={Myblog.title}
                content={Myblog.content}
                publishedDate={PostDate(Myblog.date)}
              ></BlogCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
