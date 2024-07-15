import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import {
  AlertMessage,
  AlertPassword,
  PasswordReq,
  SignupMessage,
} from "./alertmessage";
import ReactLoading from "react-loading";
import { SignInput } from "@shadow02/blog-common";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignInput>({
    name: "",
    email: "",
    password: "",
  });
  const [success, setsuccess] = useState(false);
  const [PasswordClick, setPasswordClick] = useState(false);
  const [LoggedInstate, setLoggedInState] = useState(false);
  const [Passwordval, setPasswordval] = useState(false);

  function OnClickhandler() {
    setPasswordClick(true);
  }
  async function sendRequest() {
    try {
      setLoggedInState(true);
      const timer = setTimeout(() => {
        setLoggedInState(false);
        clearTimeout(timer);
      }, 2500);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      if (
        response.data.msg ===
        `${type === "signup" ? "user already exist!" : "User doesn't exists"}`
      ) {
        setsuccess(true);
        setPasswordClick(false);
      } else {
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
      }
    } catch (error: any) {
      if (
        (error.response.msg = "Wrong Inputs" && error.response.status === 411)
      ) {
        setPasswordval(true);
      }
      return error;
    }
  }
  return (
    <div className=" h-screen flex justify-center flex-col">
      {LoggedInstate && (
        <div className="flex justify-center absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {" "}
          <ReactLoading
            type={"spinningBubbles"}
            color={"#707070"}
            height={100}
            width={100}
          ></ReactLoading>
        </div>
      )}
      <div className="flex justify-center ">
        <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <div className="text-3xl font-bold mt-4 px-8 mb-4">
            Create an account
          </div>
          <div className="text-slate-500 text-center">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              className="pl-2 underline"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {" "}
              {type === "signup" ? "Login" : "Signup"}
            </Link>
          </div>
          <div className="mt-1">
            {type === "signup" ? (
              <LabeledInput
                label="Name"
                placeholder="Shadow..."
                onChange={(e) => {
                  setPostInputs((c) => ({ ...c, name: e.target.value }));
                }}
              />
            ) : null}
            <LabeledInput
              label="Username"
              placeholder="shadow@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, email: e.target.value }));
              }}
            />
            <LabeledInput
              label="Password"
              type={"password"}
              placeholder="Pass@123"
              onclick={OnClickhandler}
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, password: e.target.value }));
              }}
            />
          </div>

          <button
            onClick={sendRequest}
            type="button"
            className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 mt-6"
          >
            {type === "signup" ? "Sign up" : "Sign in "}
          </button>
          {Passwordval && <PasswordReq />}
          {PasswordClick && <AlertPassword />}
          {success && (type == "signup" ? <SignupMessage /> : <AlertMessage />)}
        </div>
      </div>
    </div>
  );
};

interface LabeledInpuType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onclick?: (e: React.MouseEvent<HTMLElement>) => void;
}
function LabeledInput({
  label,
  placeholder,
  onChange,
  type,
  onclick,
}: LabeledInpuType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-4 ">
        {label}
      </label>
      <input
        onChange={onChange}
        onClick={onclick}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
