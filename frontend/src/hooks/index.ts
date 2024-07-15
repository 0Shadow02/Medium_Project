// If you do not want to use Recoil you can use these custom hooks
//  It is prefered to use Recoil for caching the data

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BACKEND_URL } from "../config";

// export interface Blog {
//   title: string;
//   content: string;
//   author: { name: string };
//   id: string;
//   date: string;
// }

// export const useBlog = ({ id }: { id: string }) => {
//   const [loading, setloading] = useState(true);
//   const [blog, setblog] = useState<Blog>();
//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
//         headers: {
//           Authorization: window.localStorage.getItem("token"),
//         },
//       })
//       .then((response) => {
//         setblog(response.data);
//         setloading(false);
//       });
//   }, [id]);

//   return {
//     loading,
//     blog,
//   };
// };

// export const useBlogs = () => {
//   const [loading, setloading] = useState(true);
//   const [blogs, setblogs] = useState<Blog[]>([]);
//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/v1/blog/bulk/`, {
//         headers: {
//           Authorization: window.localStorage.getItem("token"),
//         },
//       })
//       .then((response) => {
//         setblogs(response.data);
//         setloading(false);
//       });
//   }, []);

//   return {
//     loading,
//     blogs,
//   };
// };
// export const useMyblogs = () => {
//   const [loading, setloading] = useState(true);
//   const [Myblogs, setMyblogs] = useState<Blog[]>([]);
//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/v1/blog/posts/`, {
//         headers: {
//           Authorization: window.localStorage.getItem("token"),
//         },
//       })
//       .then((response) => {
//         setMyblogs(response.data);
//         setloading(false);
//       });
//   }, []);
//   return {
//     loading,
//     Myblogs,
//   };
// };
