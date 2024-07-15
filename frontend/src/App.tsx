import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import { Signin } from "./pages/signin";
import { Blog } from "./pages/blog";
import { Blogs } from "./pages/blogs";
import { Publish } from "./components/publish";
import { LogedInRoute, PrivateRoute } from "./Privateroute";
import { RecoilRoot } from "recoil";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Editname } from "./pages/ProfileEditor";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route
              path="/signup"
              element={
                <LogedInRoute>
                  <Signup />
                </LogedInRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <LogedInRoute>
                  <Signin />
                </LogedInRoute>
              }
            />
            <Route
              path="/"
              element={
                <LogedInRoute>
                  <Signin />
                </LogedInRoute>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <PrivateRoute>
                  <Blog />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <RecoilRoot>
                    <Blogs />
                  </RecoilRoot>
                </PrivateRoute>
              }
            />
            <Route
              path="/publish"
              element={
                <PrivateRoute>
                  <Publish />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/editname"
              element={
                <PrivateRoute>
                  <Editname />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
