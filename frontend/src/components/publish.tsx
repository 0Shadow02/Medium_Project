import { useState } from "react";
import axios from "axios";
import { Appbar } from "./appbar";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { PublishAlert } from "./alertmessage";
import { MyEditor } from "../Editor";
import { useRecoilRefresher_UNSTABLE } from "recoil";
import { BlogsAtom, MyblogAtom } from "../store/Atoms";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const refreshBlogsInfo = useRecoilRefresher_UNSTABLE(BlogsAtom([]));
  const refreshMyBlogInfo = useRecoilRefresher_UNSTABLE(MyblogAtom([]));

  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full relative">
        <div className="max-w-screen-lg w-full pt-8">
          {isLoading && (
            <div className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <ReactLoading
                type={"balls"}
                color={"#707070"}
                height={100}
                width={100}
              />
            </div>
          )}
          <div className={`${isLoading ? "opacity-50" : ""}`}>
            <input
              onClick={() => {
                setAlert(false);
              }}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
              placeholder="title"
            />
            <div>
              <MyEditor
                value={content}
                onBlur={(newcontent) => setContent(newcontent)}
                onChange={(e: any) => setContent(e.target.value)}
              />
            </div>
            <div className="mt-5 mb-4">
              <button
                onClick={async () => {
                  setLoading(true);
                  const timer = setTimeout(() => {
                    setLoading(false);
                    clearTimeout(timer);
                  }, 2000);
                  if (title === "" || content === "") {
                    setAlert(true);
                  } else {
                    const response = await axios.post(
                      `${BACKEND_URL}/api/v1/blog`,
                      {
                        title: title,
                        content: content,
                      },
                      {
                        headers: {
                          Authorization: window.localStorage.getItem("token"),
                        },
                      }
                    );
                    refreshBlogsInfo();
                    refreshMyBlogInfo();
                    navigate(`/blog/${response.data.id}`);
                  }
                }}
                type="submit"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Publish post
              </button>
            </div>
            {alert && <PublishAlert />}
          </div>
        </div>
      </div>
    </div>
  );
};
