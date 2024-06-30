
import './App.css';
//import Usememo from "./Usememo"
//import UseMemoComponent from './useMemoComponent';
//import UseCallbackComponent from "./UseCallbackComponent"
import Usref  from './UseRefComponent';
import Useref2 from './Useref2';
import Usref3 from './Usref3';
import Welcome from './Welcome';
import Userefform from "./Userefform"
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='Usref' element={<Usref/>}></Route>
        <Route path='Userefform' element={<Userefform/>}></Route>
        <Route path='Usref3' element={<Usref3/>}></Route>
        <Route path='Useref2' element={<Useref2/>}></Route>
        <Route path='Welcome' element={<Welcome/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
