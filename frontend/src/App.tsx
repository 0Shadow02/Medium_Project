import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import Signup from './pages/signup'
import { Signin } from './pages/signin'
import { Blog } from './pages/blog'
import { Blogs } from './pages/blogs'
import { Publish } from './components/publish'
import {PrivateRoute} from './Privateroute'
import { RecoilRoot } from 'recoil'
function App() {

  return (
    <><RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/> } />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blog/:id" element={
             <PrivateRoute>
              <Blog/>
             </PrivateRoute>
            
            } />
          <Route path="/blogs" element={
             <PrivateRoute>
              
              <Blogs/>
              
             </PrivateRoute>
            
            } />
          <Route path="/publish" element={
             <PrivateRoute>
              <Publish/>
             </PrivateRoute>
            
            } />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
  
    </>
    )
}

export default App