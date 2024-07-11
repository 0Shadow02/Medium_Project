import { FC } from "react";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
 
export function AlertColors() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert color="red">An error alert for showing message.</Alert>
    </div>
  );
}

export const PrivateRoute: FC<PropsWithChildren<{}>> = ({ children }) => {
    const token = window.localStorage.getItem('token');

    return token ? <>{children}</> :<div> 
        <AlertColors/>
         <Navigate to={'/signin'}></Navigate>;
    </div>
}
