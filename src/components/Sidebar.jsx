const Sidebar = () => {
  return (
    <div className='w-[230px] p-4'>
      <h1 className='text-2xl font-bold mb-4'>Snap Summary</h1>
      <button className='bg-gray-400 hover:bg-slate-600 w-full py-2 px-4 rounded'>
        Summary 추가
      </button>
      <div className='mt-4'>
        <a href='/'>홈</a>
      </div>
    </div>
  );
};

export default Sidebar;
