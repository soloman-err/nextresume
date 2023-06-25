const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="flex flex-col gap-2 p-4 w-80 h-full bg-base-200 text-base-content">
        <li className="btn btn-neutral p-2 rounded">Check Resume</li>
        <li className="btn btn-neutral p-2 rounded">Generate a cv</li>
        <li className="btn btn-neutral p-2 rounded flex justify-between">
          AIChecker{' '}
          <span className="badge badge-sm badge-warning font-bold">Plus+</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
