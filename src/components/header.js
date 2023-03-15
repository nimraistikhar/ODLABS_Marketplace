import React from 'react'
import './mainpage.css';
import OD_Logo from './Images/OD.png'
import { Link } from 'react-router-dom';
import Mint from './mint';
import Reward from './reward';
import Tryme from './tryme';

const Header = () => {

    return (
        <>
            {/* ***************     Logo bar     ***************** */}
            <div className='navContainer'>
                <div className='navbar baseContainer'>
                    <div className='spaceAdjuster'>&nbsp; &nbsp; &nbsp;</div>
                    <div className='navbar_Logo'>
                        <img src={OD_Logo} alt='Logo' />
                    </div>
                    <span className='navbar_item'>CONNECT WALLET</span>
                </div>
            </div>


            {/* ***************     Nav Bar     ***************** */}
            <div className=''>
                <div className='baseContainer'>
                    <ul className='pageList'>
                        <li><Link to="/mint">MINT</Link></li>
                        <li><Link to="/reward">REWARDS</Link></li>
                        <li><Link to="/tryme">TRY ME</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header