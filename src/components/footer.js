import React, { useState } from 'react'
import './mainpage.css';
import FooterLogo from './Images/footerLogo.svg'
import Header from './header';

const Footer = () => {

    return (
        <>
            {/* ***************     Footer     ***************** */}

            <div className='footerContiner'>
                <div className='footerLogo'>
                    <img src={FooterLogo} alt='Footer Logo' />
                </div>
                <div className='policyList'>
                    <ul>
                        <li>TERMS & CONDITIONS</li>
                        <li>PRIVACY</li>
                        <li>LICENSE</li>
                        <li>NFT PURCHASE AGREEMENT</li>
                    </ul>
                </div>
                <div className='socialLinks'>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-discord"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>
                </div>
            </div>

        </>
    )
}

export default Footer