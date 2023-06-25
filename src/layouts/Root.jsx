import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Sidebar from '../components/shared/Sidebar'

const Root = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <div className="p-5 mt-14">
          <Outlet />
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Root
