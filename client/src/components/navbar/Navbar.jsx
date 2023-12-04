import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import dream from "../../assets/Dream.jpeg";

const NavBar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
    const handleClick = async (e) => {
        console.log(e);
        e.preventDefault();
        try {
          navigate("/profile:u")//finish by pulling user data and profile from somewhere
        } catch (err) {
          setErr(err.response.data);
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
                <div className="user" onClick={handleClick}>  
                    <img src= {dream}
                    alt= ""
                    />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar