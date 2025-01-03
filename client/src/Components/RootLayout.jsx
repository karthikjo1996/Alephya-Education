import {Outlet} from 'react-router-dom';
import TopBar from './TopBar';


const RootLayout = () => {
  return (
    <div>
        {<TopBar/>}
        <Outlet/>
    </div>
  )
}

export default RootLayout
