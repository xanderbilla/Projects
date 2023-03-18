import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './Navbar.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                        <a href="https://xanderbilla.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.imgur.com/G6sWWqH.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="buttons">
                        <a href="https://xanderbilla.com" target="_blank" rel="noopener noreferrer">
                            <div className="button">
                                Home
                            </div>
                        </a>
                        {/* <a className='not-allowed' href="https://xanderbilla.com" target="_blank" rel="noopener noreferrer">
                            <div className="button">
                                Admin
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </div>
                        </a> */}
                        <a href="https://github.com/xanderbilla" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon/>
                        </a>
                        <a href="https://www.linkedin.com/in/vikas-singh-212278165/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar