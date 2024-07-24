import '../css/Navbar.css';
import { useState } from 'react';
import { PackageOpen } from 'lucide-react';
import LoginForm from './LoginForm';

import Popup from 'reactjs-popup';

const Navbar = () => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginOpen(true);
    };

    const handleLoginClose = () => {
        setIsLoginOpen(false);
    };



    return (
        <>
            <div className="nav-body">
                <div className="nav-container">
                    <div className='nav-contents'>
                        <div class="hms-logo">
                            <PackageOpen strokeWidth={1.5} style={{ height: '5vh', width: '5vw', color: '#1769ed' }} />
                        </div>
                        <div className='hms-title'>
                            <span>DvaraL</span>
                        </div>
                        <div className='nav-items'>
                            <li className='nav-list'>Content</li>
                            <li className='nav-list'>Content</li>
                            <li className='nav-list'>Content</li>
                            <li className='nav-list'>Content</li>
                            <li className='nav-list'>Content</li>

                        </div>
                        <div className='user-btn'>
                            {/* <button  onClick={handleLoginClick} className='login-btn'>Log In</button> */}
                            <Popup trigger = {<button className='login-btn'> Sign In </button>} modal nested overlayStyle={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }} >
                                {
                                    close => (
                                        <div className='modal'>
                                            <div className='content'>
                                            {/* <div>
                                                <button onClick=
                                                    {() => close()}>
                                                    Close modal
                                                </button>
                                            </div> */}
                                                <LoginForm/>
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;