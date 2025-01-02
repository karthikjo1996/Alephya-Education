import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import OurSchools from './pages/OurSchools';
import RootLayout from './Components/RootLayout';

const router = createBrowserRouter([
  {
    path:"/",element:<RootLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/ourschools",element:<OurSchools/>},
      {path:"/academics",element:<Academics/>},
      {path:"/admission",element:<Admission/>},
      {path:"/careers",element:<Careers/>},
      {path:"/contact",element:<Contact/>},
      {path:"/sign-in",element:<SignIn/>},
      {path:"/sign-up",element:<SignUp/>},
    ],
  },
])


const App = () => {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
