const Category = () => {
  return (
    <div className="hidden lg:flex bg-slate-300 h-[100vh] w-[30%] md:w-[20%] lg:w-[15%] p-5">
      <ul className="w-full space-y-2 text-white">
        <li className="bg-slate-400 p-2 rounded">Check Resume</li>
        <li className="bg-slate-400 p-2 rounded">Generate a cv</li>
        <li className="bg-slate-400 p-2 rounded flex justify-between">
          AIChecker{' '}
          <span className="badge badge-sm badge-warning font-bold">Plus+</span>
        </li>
      </ul>
    </div>
  );
};

export default Category;
