import { Avatar } from "./blogcard"

export const Appbar=()=>{
    
    return <div className="border-b flex justify-between py-4 px-10">
        <div>
            Medium
        </div>
        <div>
            <Avatar name="Shadow" size={"big"}></Avatar>
        </div>
  </div>
}