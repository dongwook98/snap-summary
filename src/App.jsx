import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='flex h-screen text-white bg-gray-800'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
