import axios from "axios";
import { atom, selector } from "recoil";
import { BACKEND_URL } from "../config";

 export const UserDataAtom = atom({
    key :"userdata",
    default:selector({
        key:"selctordata",
        get: async()=>{
            const response = await axios.get(`${BACKEND_URL}/api/v1/user/userdeatils`,{
                headers:{
                    Authorization:window.localStorage.getItem("token")
                }
            })
            return response.data
            }
    })
        
 })
