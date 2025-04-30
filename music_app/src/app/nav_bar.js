import './stylesheets/nav_bar.css';
import {Link, Outlet} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import { BiSolidHomeHeart } from "react-icons/bi";

const Navbar = () =>{
    return (
        <div>
            <div className='navBar'>
                <div className={'logo'}>
                    logo
                </div>
                <div className={'search'}>
                    <BiSolidHomeHeart className={'home'}></BiSolidHomeHeart>
                    <FiSearch className={'search-icon'}></FiSearch>
                    <input type={'text'} placeholder={'search'}/>
                </div>
                <div className={'links'}>
                    <ul >
                        <li>
                            <Link to='/login' className='nav_bar_text active'>Login</Link>
                        </li>
                    </ul><Outlet/>
                </div>

            </div>
        </div>
    );
};

export default Navbar;