import './App.css';
import Authentication from './Components/Authentication/Authentication';
import {Route, Routes} from "react-router-dom"
import Chats from './Components/Chat';

function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Authentication/>} />
<Route path='/chat' element={<Chats/>} />
</Routes>
{/* <Authentication/> */}
    </div>
  );
}

export default App;
