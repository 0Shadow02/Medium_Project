import { Appbar } from "./appbar";

export const BlogSkelton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="border-b border-slate-200 p-4 pb-4 w-screen max-w-screen-md ">
        <div className="flex">
          <div className="h-4 bg-gray-200 rounded-full  w-4 mb-4"></div>
          <div className="h-4 bg-gray-200   mb-2.5"></div>
          <div className="h-4 bg-gray-200 ml-2 w-24 mb-2.5"></div>
          <div className=" pl-2 font-thin text-slate-500 text-sm justify-center flex  flex-col"></div>
        </div>
        <div className=" text-xl font-bold pt-2">
          <div className="h-6 bg-gray-200   mb-2.5"></div>
        </div>
        <div className=" text-md font-thin">
          <div className="h-3 bg-gray-200   mb-2.5"></div>
          <div className="h-3 bg-gray-200   mb-2.5 w-10/12"></div>
        </div>
        <div className="  text-sm font-thin pt-4">
          <div className="h-3 bg-gray-200  mb-2.5 w-16"></div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const FullBlogSkeleton = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-between  ">
        <div className="grid grid-cols-12 px-10 w-full pt-200  pt-12 ">
          <div className="col-start-1 col-span-7  ml-10 ">
            <div className=" text-3xl font-extrabold">
              <div className="h-12 bg-gray-200 mb-2.5"></div>
            </div>
            <div className="text-slate-500 pt-2">
              <div className="h-3 bg-gray-200  mb-2.5 w-40"></div>
            </div>
            <div className="pt-4">
              <div className="h-5 bg-gray-200 mb-2.5 "></div>
              <div className="h-5 bg-gray-200 mb-2.5 w-11/12"></div>
              <div className="h-5 bg-gray-200 mb-2.5"></div>
              <div className="h-5 bg-gray-200 mb-2.5 w-10/12"></div>
              <div className="h-5 bg-gray-200 mb-2.5 w-11/12"></div>
              <div className="h-5 bg-gray-200 mb-2.5 "></div>
              <div className="h-5 bg-gray-200 mb-2.5 mt-8"></div>
              <div className="h-5 bg-gray-200 mb-2.5 w-11/12"></div>
              <div className="h-5 bg-gray-200 mb-2.5"></div>
              <div className="h-5 bg-gray-200 mb-2.5 w-10/12"></div>
              <div className="h-5 bg-gray-200 mb-2.5 w-11/12"></div>
              <div className="h-5 bg-gray-200 mb-2.5 "></div>
            </div>
          </div>
          <div className="col-start-9 col-span-4 hidden md:block mr-10  ">
            <div className="pb-4">
              <div className="h-2 w-20 bg-gray-200   mb-2.5"></div>
            </div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center ">
                <div className="h-7 bg-gray-200 rounded-full  w-7 mb-4"></div>
              </div>
              <div>
                <div>
                  <div className="h-6 bg-gray-200   mb-2.5 w-44 "></div>
                </div>
                <div className="text-slate-500">
                  <div className="h-4 bg-gray-200  mb-2.5 w-80"></div>
                  <div className="h-4 bg-gray-200  mb-2.5 w-64 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyBlogSkelton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="border-b border-slate-200 p-4 pb-4 w-screen max-w-screen-md ">
        <div className="flex">
          <div className="h-4 bg-gray-200 rounded-full  w-4 mb-4"></div>
          <div className="h-4 bg-gray-200   mb-2.5"></div>
          <div className="h-4 bg-gray-200 ml-2 w-24 mb-2.5"></div>
          <div className=" pl-2 font-thin text-slate-500 text-sm justify-center flex  flex-col"></div>
        </div>
        <div className=" text-xl font-bold pt-2">
          <div className="h-6 bg-gray-200   mb-2.5"></div>
        </div>
        <div className=" text-md font-thin">
          <div className="h-3 bg-gray-200   mb-2.5"></div>
          <div className="h-3 bg-gray-200   mb-2.5 w-10/12"></div>
        </div>
        <div className="  text-sm font-thin pt-4">
          <div className="h-3 bg-gray-200  mb-2.5 w-16"></div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
