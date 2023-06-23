import { Outlet } from 'react-router-dom';
import Category from '../components/Category';
import Input from '../components/Input';

const Root = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Category />
      <div className="md:w-[60%] overflow-scroll bg-slate-200">
        <Outlet />
      </div>
      <Input />
    </div>
  );
};

export default Root;
