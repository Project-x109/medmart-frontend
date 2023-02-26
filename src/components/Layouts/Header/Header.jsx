import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from './Searchbar';
import logo from '../../../assets/images/logo.png';
import PrimaryDropDownMenu from './PrimaryDropDownMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import InventoryIcon from '@mui/icons-material/Inventory';
import Groups3Icon from '@mui/icons-material/Groups';

const Header = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const { cartItems } = useSelector(state => state.cart);

  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);

  return (

    <header className="bg-primary-orange fixed top-0 py-2.5 w-full z-10">

      <div className="w-full sm:w-8/11 px-1 sm:px-4 m-auto flex justify-between items-center relative">
        <div className="h-10 flex items-center flex-1">
          <Link className="h-12 mr-1 sm:mr-5" to="/">
            <img draggable="false" className="h-full w-full object-contain" src={logo} alt="Medmart Logo" />
          </Link>
          <Searchbar />
        </div>
        <Link to="/tenders">
        <span className="moreDropDown hidden sm:flex px-3 items-center text-xl text-white font-black gap-1 cursor-pointer">
          Bidding
        <span><ReceiptIcon /></span>
        </span>
        </Link>
        <Link to="/importers">
        <span className="moreDropDown hidden text-xl sm:flex px-3 items-center text-white font-medium gap-1 cursor-pointer">
          Importers
          <span><ImportExportIcon /></span>
          </span>   
          </Link>
        <span className="moreDropDown text-xl hidden sm:flex px-3 items-center text-white font-medium gap-2 cursor-pointer">
          Products
            <span><InventoryIcon sx={{ fontSize: "16px" }} /> </span>
          </span>
          <Link to="/chat">
          <span className="moreDropDown text-xl hidden sm:flex px-3 items-center text-white font-medium gap-2 cursor-pointer">
          clique
            <span><Groups3Icon sx={{ fontSize: "22px" }} /> </span>
          </span>
          </Link>
        <div className="flex items-center text-xl  px-3  justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
          <Link to="/cart" className="flex items-center text-white font-medium gap-2 relative">
            <span><ShoppingCartIcon /></span>
            {cartItems.length > 0 &&
              <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                {cartItems.length}
              </div>
            }
            My Folder
          </Link>
        </div>
        {isAuthenticated === false ?
            <Link to="/login" className="px-3 text-xl sm:px-9 py-0.5 text-white  font-medium rounded-sm cursor-pointer">Login</Link>
            :
            (
              <span className="userDropDown flex items-center text-white font-medium gap-1 cursor-pointer" onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}>{user.name && user.name.split(" ", 1)}
                <span>{togglePrimaryDropDown ? <ExpandLessIcon sx={{ fontSize: "16px" }} /> : <ExpandMoreIcon sx={{ fontSize: "16px" }} />}</span>
              </span>
            )
          }

          {togglePrimaryDropDown && <PrimaryDropDownMenu setTogglePrimaryDropDown={setTogglePrimaryDropDown} user={user} />}

        {/* <!-- right navs --> */}

      </div>
      {/* <!-- navbar container --> */}
    </header>
  )
};

export default Header;
