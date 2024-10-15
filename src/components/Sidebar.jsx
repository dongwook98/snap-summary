import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const id = 1;
    navigate(`/snaps/${id}`);
  };

  return (
    <div className='w-[230px] p-4'>
      <h1 className='text-2xl font-bold mb-4'>Snap Summary</h1>
      <button
        className='bg-gray-400 hover:bg-slate-600 w-full py-2 px-4 rounded'
        onClick={handleClick}
      >
        Snap 추가
      </button>
      <div className='mt-4'>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 font-semibold'
              : 'text-gray-300 hover:text-white'
          }
        >
          홈
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
