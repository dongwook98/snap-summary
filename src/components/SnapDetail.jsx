import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteSnap, updateSnap } from '../store/snapsSlice';

const SnapDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const snap = useSelector((state) =>
    state.snaps.find((snap) => snap.id === params.id)
  );
  const dispatch = useDispatch();
  const handleChangeTitle = (event) => {
    dispatch(
      updateSnap({
        ...snap,
        title: event.target.value,
      })
    );
  };

  const handleChangeContent = (event) => {
    dispatch(
      updateSnap({
        ...snap,
        content: event.target.value,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteSnap(params.id));
    navigate('/');
  };

  return (
    <div className='bg-gray-900 p-6'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <time className='block text-sm text-gray-400'>{snap.time}</time>
          <input
            type='text'
            value={snap.title}
            onChange={handleChangeTitle}
            className='bg-transparent text-2xl font-bold focus-within:outline-blue-500'
          />
        </div>
        <div>
          <button
            className='bg-red-600 hover:bg-red-500 py-2 px-4 rounded'
            onClick={handleDelete}
          >
            삭제
          </button>
        </div>
      </div>
      <section className='flex'>
        <div className='flex-1 p-4 rounded mr-4 bg-gray-800'>
          <h2 className='text-lg font-semibold mb-2'>메모</h2>
          <textarea
            className='bg-gray-700 w-full h-64 p-2 rounded resize-none focus:(ring-2 ring-blue-500)'
            value={snap.content}
            onChange={handleChangeContent}
          ></textarea>
          <button className='mt-4 bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded'>
            요약
          </button>
        </div>
        <div className='flex-1 p-4 rounded bg-gray-800'>
          <h3 className='text-lg font-semibold mb-2'>요약 결과</h3>
          <div className='text-gray-300 h-64 bg-gray-700 p-2 rounded'>
            요약 내용
          </div>
        </div>
      </section>
    </div>
  );
};

export default SnapDetail;
