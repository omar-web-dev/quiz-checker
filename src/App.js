import './App.css';
import Header from './Componets/Header';
import Navber from './Componets/Navber';
import ErorrPage from './Layout/ErorrPage';


function App() {
  return (
    <div className='pb-[500px]'>
      <Navber/>
      <Header/>
      <ErorrPage/>
    </div>
  );
}

export default App;
