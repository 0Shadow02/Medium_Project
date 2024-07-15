import { RecoilRoot } from "recoil";
import { Auth } from "../components/auth";
import { Quote } from "../components/Quote";

const Signup = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <RecoilRoot>
          <div>
            <Auth type="signup" />
          </div>
        </RecoilRoot>
        <div className=" hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signup;
