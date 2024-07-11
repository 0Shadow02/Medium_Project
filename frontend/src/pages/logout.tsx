
import { useSetRecoilState } from "recoil"
import { UserDataAtom } from "../store/Atoms"

export const Logout = ()=>{
    const setuserdata = useSetRecoilState(UserDataAtom)
   async function onClickhandler(){
        setuserdata(null)
     window.localStorage.removeItem("token")
      window.location.href = '/signin'
    }
    return <div className=" w-full h-9 flex justify-center " > 
            <button onClick={onClickhandler} className=" rounded-sm w-full text-white  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm    flex justify-start hover:shadow-lg shadow-md transition-all duration-300"
                > 
                <div className="flex justify-evenly ml-4">
                <div className="font-semibold text-md flex flex-col justify-center mt-1 text-gray-600 mr-1" >Signout </div>
                <div className=" text-gray-800"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg>
                </div>
                </div>
                 </button>              
                
            
    </div>
}

