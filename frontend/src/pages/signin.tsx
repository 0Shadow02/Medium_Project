import { RecoilRoot } from "recoil";
import { Auth } from "../components/auth";
import { Quote } from "../components/Quote";

export const Signin = () => {
  return (
    <div>
      <div className=" grid grid-cols-2  ">
        <div>
          <RecoilRoot>
            <Auth type="signin" />
          </RecoilRoot>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
