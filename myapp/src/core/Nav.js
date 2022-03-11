import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAutheticated } from '../auth/helper';
import { loadListCount } from "./helper/WishlistHelper";





// const currentTab = (history, path) => {
//     if (history.location.pathname === path) {
//         return { color: "#2ecc72" };
//     } else {
//         return { color: "#000" }
//     }
// }

// const MenuItems = [
//     {
//       title: 'Marketing',
//       path: '/marketing',
//       cName: 'dropdown-link'
//     },
//     {
//       title: 'Consulting',
//       path: '/consulting',
//       cName: 'dropdown-link'
//     },
//     {
//       title: 'Design',
//       path: '/design',
//       cName: 'dropdown-link'
//     },
//     {
//       title: 'Development',
//       path: '/development',
//       cName: 'dropdown-link'
//     }
//   ];

const Dropdown = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            {isAutheticated() && isAutheticated().user.role === 1 && (
                <ul onClick={handleClick}
                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    <li className="dropdown-link">
                        <Link to="/admin/dashboard" >
                            <div className="whislist">
                                Admin Dashboard
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown-link">
                        <div className="whislist" onClick={() => {
                            signout();
                        }}>

                            Signout
                        </div>
                    </li>
                </ul>
            )
            }

            {isAutheticated() && isAutheticated().user.role === 0 && (
                <ul onClick={handleClick}
                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    <li className="dropdown-link">
                        <Link to="/user/dashboard" >
                            <div className="whislist">
                                User Dashboard
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown-link">
                        <div className="whislist" onClick={() => {
                            signout();
                        }}>

                            Signout
                        </div>
                    </li>
                </ul>
            )}

            {!isAutheticated() && (
                <ul onClick={handleClick}
                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    <li className="dropdown-link">
                        <Link to="/Signin" >
                            <div className="whislist">
                                Login
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown-link">
                        <Link to="/Signup"  >
                            <div className="whislist">
                                SignUp
                            </div>
                        </Link>
                    </li>
                </ul>
            )}

            {/* {
                isAutheticated() && (
                    <ul onClick={handleClick}
                        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                        <li className="dropdown-link">
                            <div className="whislist" onClick={() => {
                            }}>

                                Signout
                            </div>
                        </li>

                    </ul>



                )
            } */}



            {/* {isAutheticated() && (
                <ul
                    onClick={handleClick}
                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
                >
                    <li className="dropdown-link">Dashboard</li>
                    <li className="dropdown-link">Dashboard</li>
                </ul>
            )} */}
        </>
    )
}



const Nav = ({ history }) => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const [Count, setCount] = useState("")

    useEffect(() => {
        setCount(loadListCount());
    }, []);

    return (


        <div className="navbar">

            {/* logo  */}
            <div className="nav-div">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img className="nav-logo" src='https://www.investcorp.com/wp-content/uploads/2019/11/42_Bewakoof_Logo_Black.png' alt='img' />
                </Link>
            </div>

            {/* <div class="carts-div">
                <div className="whislist"><i class="far fa-heart"></i></div>
                <div className="whislist"><i class="fas fa-shopping-cart"></i></div>
            </div> */}

            <div className='menu-icon ' >
                <div className="d-flex">

                    <div className="whislist"><Link to='/wishlist' ><i class="far fa-heart nav-icons"></i></Link></div>
                    <div className="whislist"><Link to='/Cart'><i class="fas fa-shopping-cart nav-icons"></i></Link></div>
                    <i className={click ? 'fas fa-times ' : 'fas fa-bars'} text-white onClick={handleClick} />
                </div>
            </div>
            {/* <Link to="/" >
                <div className="nav-log">
                    <img src='https://images.bewakoof.com/web/bewakoof-primary-logo-white-bg-2x-1635745564.png' alt='img' />
                </div>
            </Link> */}

            {/* desktop menus   */}
            {/* <div className="Menu-div">
                    <ul className="menu-list">
                        <li className="menu-item">Mens</li>
                        <li className="menu-item">Womens</li>
                        <li className="menu-item">Mobile Covers</li>
                    </ul>
                </div> */}

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/Products" className='nav-links' onClick={closeMobileMenu}>
                        Mens
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link
                        to='/Products'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Womens
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/contact-us'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Mobile Covers
                    </Link>
                </li>


                <li className='nav-item desktop-nav'>
                    <Link to="/wishlist" className='nav-links'
                        onClick={closeMobileMenu}>
                        <div className="whislist"><i class="far fa-heart"></i>{Count}</div>
                    </Link>

                </li>
                <li className='nav-item desktop-nav'>
                    <Link to="/cart" className='nav-links'
                        onClick={closeMobileMenu}>
                        <div className="whislist"><i class="fas fa-shopping-cart"></i></div>
                    </Link>
                </li>

                <div class="mob-nav">

                    {isAutheticated() && isAutheticated().user.role === 1 && (
                        <ul>
                            <h2>My Profile</h2>
                            <li className='nav-item mob-nav'>
                                <Link to='/admin/dashboard' className="">
                                    My Account
                                </Link>
                            </li>
                            <li className='nav-item mob-nav ' onClick={() => {
                                signout();
                            }
                            }>
                                SignOut
                            </li>
                        </ul>

                    )}

                    {!isAutheticated() && (


                        <li className='nav-item mob-nav'>
                            <Link to='/signin' className="nav-links">
                                Login / Sign Up
                            </Link>
                        </li>


                    )}

                    {isAutheticated() && isAutheticated().user.role === 0 && (
                        <ul>
                            <h2>My Profile</h2>
                            <li className='nav-item mob-nav'>
                                <Link to='/user/dashboard' className="">
                                    My Account
                                </Link>
                            </li>
                            <li className='nav-item mob-nav ' onClick={() => {
                                signout();
                            }
                            }>
                                SignOut
                            </li>
                        </ul>
                    )}
                </div>

                <li
                    className='nav-item desktop-nav'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link
                        to='/admin/dashboard'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        <i class="fas fa-user"></i>
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
            </ul>


            <div className="login-div">

                {/* if user not sign in   */}
                {/* {!isAutheticated() && (
                        <Fragment>

                            <Link to="/Signup" >
                                <div className="whislist">
                                    <i class="fas fa-user"></i>
                                    
                                </div>
                            </Link>
                            
                        </Fragment>
                    )} */}

                {/* if user signIn   */}
                {/* {isAutheticated() && (
                        <div className="whislist" onClick={() => {
                            signout(() => {
                                history.push("/");
                            });
                        }}>

                            Signout
                        </div>


                    )} */}
                {/* 
                    {isAutheticated() && isAutheticated().user.role === 1 && (
                        <Link to="/admin/dashboard" style={currentTab(history, "/admin/dashboard")}>
                            <div className="whislist">
                                Admin Dashboard
                            </div>
                        </Link>
                    )}

                    {isAutheticated() && isAutheticated().user.role === 0 && (
                        <Link to="/user/dashboard" style={currentTab(history, "/user/dashboard")}>
                            <div className="whislist">
                                User Dashboard
                            </div>
                        </Link>
                    )} */}

                {/* <Link to="/wishlist" >
                        <div className="whislist"><i class="far fa-heart"></i>{Count}</div>
                    </Link>
                    <Link to="/cart" >
                        <div className="whislist"><i class="fas fa-shopping-cart"></i></div>
                    </Link> */}
            </div>

        </div>
    )
}


export default withRouter(Nav);
