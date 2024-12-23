import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from './Pages/Signin';
import SendMoney from './Pages/Sendmoney';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path = '/' element= {<Signin />}/> 
          <Route path = '/dashboard' element= {<Dashboard />}/> 
          <Route path = "/send" element={<SendMoney />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
