import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addSnap } from '../store/snapsSlice';

const Empty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    const id = uuidv4();
    const newSnap = {
      id,
      title: '새로운 스냅',
      content: '',
      time: Date.now(),
      summary: '',
    };
    dispatch(addSnap(newSnap));
    navigate(`/snaps/${id}`);
  };
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-gray-900'>
      <div className='text-5xl mb-6'>
        <span>📢</span>
      </div>
      <p className='text-xl mb-4'>Snap을 추가해보세요.</p>
      <button
        className='bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded'
        onClick={handleClick}
      >
        Snap 추가
      </button>
    </div>
  );
};

export default Empty;
