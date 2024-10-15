import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Empty from './Empty';
import { useState } from 'react';

const SnapList = () => {
  const snaps = useSelector((state) => state.snaps);
  const [sortOrder, setSortOrder] = useState('latest');
  const sortedSnaps = [...snaps].sort((a, b) => {
    if (sortOrder === 'latest') {
      return new Date(b.time) - new Date(a.time);
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return (
    <div className='max-w-[1030px] m-auto rounded-lg bg-gray-900 p-4'>
      <div className='flex justify-end space-x-4 mb-4'>
        <button
          onClick={() => setSortOrder('latest')}
          className={`bg-gray-800 py-2 px-4 rounded-full ${
            sortOrder === 'latest' ? 'text-white' : 'text-gray-400'
          }`}
        >
          최근
        </button>
        <button
          onClick={() => setSortOrder('name')}
          className={`bg-gray-800 py-2 px-4 rounded-full ${
            sortOrder === 'latest' ? 'text-white' : 'text-gray-400'
          }`}
        >
          이름 순
        </button>
      </div>
      {snaps.length ? (
        <ul>
          {sortedSnaps.map((snap) => (
            <li key={snap.id}>
              <Link
                to={`/snaps/${snap.id}`}
                className='flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-2 hover:bg-gray-700'
              >
                <div>
                  <h3 className='text-lg font-semibold'>{snap.title}</h3>
                  <p className='text-sm text-gray-400'>
                    {snap.content.slice(0, 100)}
                  </p>
                </div>
                <div>
                  <time className='text-sm text-gray-400'>
                    {format(snap.time, 'yyyy년 MM월 dd일 HH:mm')}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default SnapList;
