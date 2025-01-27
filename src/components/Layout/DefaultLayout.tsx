import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
const DefaultLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout
