import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 justify-between">
      <div className="flex flex-col justify-start">
        <Link to={'/'}>
          <h2 className="uppercase text-3xl">Alphabetor</h2>
        </Link>
        <span className="">Your alphabetic assistant</span>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
