import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./blogcard";
import { Logout } from "../pages/logout";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { UserDataAtom } from "../store/Atoms";

export const Appbar = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between   py-2 px-10">
      <Link
        to={"/dashboard"}
        className="flex flex-col justify-center cursor-pointer"
      >
        <div className=" text-3xl">ＰΛＧΞ</div>
      </Link>
      <div className="flex">
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 focus:outline-none  hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2"
          >
            New
          </button>
        </Link>

        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const navigate = useNavigate();
  const userdata = useRecoilValue(UserDataAtom);
  const [nhidden, setnhidden] = useState(!true);
  return (
    <div className="flex justify-center ">
      <div>
        <button
          onClick={() => setnhidden((prevState) => !prevState)}
          type="button"
          className="flex text-sm bg-gray-800 rounded-full  "
          aria-expanded="false"
          data-dropdown-toggle="dropdown-user"
        >
          <Avatar name={userdata.name} size="big"></Avatar>
        </button>
      </div>
      {nhidden && (
        <div className="flex items-center ">
          <div className=" absolute transform -translate-x-40 translate-y-2/3 z-10  my-4 text-base list-none bg-slate-100 divide-y divide-gray-100 rounded shadow-lg  shadow-gray-200 min-w-44">
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-gray-900 " role="none">
                {userdata.name}
              </p>
              <p
                className="text-sm font-medium text-gray-900 truncate pb-2 border-b border-gray-300 "
                role="none"
              >
                {userdata.email}
              </p>
            </div>
            <ul className="pt-1 " role="none">
              <li>
                <button
                  onClick={() => {
                    navigate("/profile");
                  }}
                  className="flex justify-start w-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200 "
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                  className="flex justify-start w-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200 "
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/settings");
                  }}
                  className="flex justify-start w-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200 "
                >
                  Settings
                </button>
              </li>

              <li className="blocks   hover:bg-slate-200 ">
                <Logout></Logout>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
