import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addSnap } from '../store/snapsSlice';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    const id = uuidv4();
    const newSnap = {
      id,
      title: '새로운 스냅',
      content: '',
      summary: '',
      time: Date.now(),
    };
    dispatch(addSnap(newSnap));
    navigate(`/snaps/${id}`);
  };
  const snaps = useSelector((state) => state.snaps);

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
      <ul className='mt-4'>
        {snaps.map((snap) => (
          <li key={snap.id}>
            <NavLink
              to={`/snaps/${snap.id}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }
            >
              {snap.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
