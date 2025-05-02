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
                    <a href={'/'}><BiSolidHomeHeart className={'home-icon'}></BiSolidHomeHeart></a>
                    <div className={'searching'}>
                        <FiSearch className={'search-icon'}></FiSearch>
                        <input className={'search-bar'} type={'text'} placeholder={'search'}/>
                    </div>

                </div>
                <div className={'links'}>
                    <ul>
                        <li>
                            <Link to='/login' className='nav_bar_text active'>Login</Link>
                        </li>
                    </ul><Outlet/>
                </div>
            </div>
        </div>
    )
};

export default Navbar;