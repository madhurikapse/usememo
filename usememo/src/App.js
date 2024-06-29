
import './App.css';
import Usememo from "./Usememo"
import UseMemoComponent from './useMemoComponent';
import UseCallbackComponent from "./UseCallbackComponent"
function App() {
  return (
    <div className='app'>
    <Usememo/>
    <UseMemoComponent/>
    <UseCallbackComponent/>
    </div>
  );
}

export default App;
