import "./navBar.scss"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import dream from "../../assets/Dream.jpeg";

const NavBar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSignOut = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
      };

    return (
        <div className = 'navbar'>
            <div className = 'left'>
                <Link to = "/" style = {{textDecoration:'none'}}>
                    <span>Dreamer's Journal</span>
                </Link>
                {darkMode ? ( 
                    <WbSunnyOutlinedIcon onClick={toggle} /> )
                    : (
                    <DarkModeOutlinedIcon onClick={toggle}/>)}
            </div>
            <div className = 'right'>
                <div className="user" onClick={() => setShowDropdown(!showDropdown)}>  
                    <img src= {dream}
                    alt= ""
                    />
                    <span>{currentUser.name}</span>
                </div>
                {showDropdown && (
                    <div className="dropdown">
                        <div className="dropdown-item" onClick={handleSignOut}>
                            <LogoutIcon />
                            <span>Sign Out</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar