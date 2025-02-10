import {Outlet} from 'react-router-dom';
import TopBar from './TopBar';
import NavigationBar from './NavigationBar';

const RootLayout = () => {
  return (
    <div>
      {<TopBar/>}
      {<NavigationBar/>}
      <Outlet/>
    </div>
  )
}

export default RootLayout
