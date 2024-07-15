import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { BACKEND_URL } from "../config";

export const UserDataAtom = atom({
  key: "userdata",
  default: selector({
    key: "selctordata",
    get: async () => {
      const response = await axios.get(
        `${BACKEND_URL}/api/v1/user/userdeatils`,
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    },
  }),
});

export const BlogAtom = atomFamily({
  key: "blogdata",
  default: selectorFamily({
    key: "blogdataSelector",
    get: (id) => async () => {
      const response = await axios.get(
        `${BACKEND_URL}/api/v1/blog/${String(id)}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      return response.data;
    },
  }),
});
export const BlogsAtom = atomFamily({
  key: "blogsdata",
  default: selectorFamily({
    key: "blogsdataSelector",
    get: () => async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk/`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  }),
});
export const MyblogAtom = atomFamily({
  key: "Myblogsdata",
  default: selectorFamily({
    key: "MyblogsdataSelector",
    get: () => async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/posts/`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  }),
});
