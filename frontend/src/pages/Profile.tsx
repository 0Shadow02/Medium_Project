import { useRecoilValue } from "recoil";
import { Appbar } from "../components/appbar";
import { Avatar } from "../components/blogcard";
import { UserDataAtom } from "../store/Atoms";
import { Myblog } from "../components/Userblog";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const userdata = useRecoilValue(UserDataAtom);
  const navigate = useNavigate();
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center mt-2">
        <div>
          <div className=" flex justify-center mb-2 ">
            <Avatar name={userdata.name} size="large"></Avatar>{" "}
          </div>
          <div className="flex justify-center text-4xl font-semibold ">
            {userdata.name}
          </div>
          <div className=" text-gray-500 my-2 flex justify-center">
            {userdata.email}
          </div>
          <div className="flex justify-center">
            {" "}
            <button
              onClick={() => navigate("/editname")}
              className="text-gray bg-gray-200 hover:bg-gray-300 focus:ring-4  font-medium rounded-3xl text-md px-5 py-3 me-2 mb-2 focus:outline-none "
            >
              Edit Name
            </button>
          </div>
          <div className="flex justify-center">
            <div className="text-md font-semibold border-b-4 my-8 pb-1 mb-4 border-black  w-8">
              Post
            </div>
          </div>
          <div className="mt-10">
            <Myblog></Myblog>
          </div>
        </div>
      </div>
    </div>
  );
};
