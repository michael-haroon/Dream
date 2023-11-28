import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className = 'navbar'>
            <div className = 'left'>
                <Link to = "/" style = {{textDecoration:'none'}}>
                    <span>BearSocial</span>
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? ( 
                    <WbSunnyOutlinedIcon onClick={toggle} /> )
                    : (
                    <DarkModeOutlinedIcon onClick={toggle}/>)}
                <GridViewOutlinedIcon />
                <div className = 'search'>
                    <SearchOutlinedIcon />
                    <input type="text" placeholder = 'Search for friends, posts or videos'/>
                </div>
            </div>
            <div className = 'right'>
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">  
                    <img src= "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt= ""
                    />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar