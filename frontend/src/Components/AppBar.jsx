import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { ReactComponent as LogoutIcon } from '../Assets/logout.svg';

export default function AppBar() {
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };
  useEffect(() =>{
    const storeName = localStorage.getItem("firstName")
    if(storeName){
        setFirstName(storeName);
    }
  },[])

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    navigate("/");
  };

  return (
    <div className="shadow h-14 flex justify-between items-center">
      <div className="ml-4">
        myWallet
      </div>
      <div className="flex items-center">
        <div className="flex flex-col justify-center mr-4">
            {firstName}
        </div>
        <button 
          className="rounded-full h-12 w-12 bg-gray-200 flex justify-center items-center mr-4" 
          onClick={handlePopoverToggle}
        >
          <div className="text-black text-xl">{firstName[0]}</div> 
        </button>
        {showPopover && (
          <div className="absolute right-0 mt-14 mr-4 bg-white p-2 rounded shadow">
            <button onClick={handleLogout} className="flex items-center">
              <LogoutIcon className="h-5 w-5 text-red-500 mr-1" />
              <span className="text-red-500">Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}