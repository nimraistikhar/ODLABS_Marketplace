import React from 'react'
import './mint.css'
import './mainpage.css'
import SCANQRCODE from './Images/SCANQRCODE.png'
import ARIcon from './Images/ARicon.png'
import Header from './header'
import Footer from './footer'

const Mint = () => {
    return (
        <>
            <Header />
            <div>
                <div className='container baseContainer mainPage'>
                    <div className='mintContent'>
                        <div className='mintProperties'>
                            <h1 className=''>Properties</h1>
                            <p>Composition</p>
                            <div className='listView'>
                                <ul>
                                    <li className='textStyle'>Cerebellum</li>
                                    <li className='textStyle'>Brain  stem</li>
                                    <li className='textStyle'>Temporal Lobe</li>
                                    <li className='textStyle'>Occipital Lobe</li>
                                    <li className='textStyle'>Parietal Lobe</li>
                                    <li className='textStyle'>Frontal Lobe</li>
                                    <li className='textStyle'>Pineal Lobe</li>
                                    <li className='textStyle'>Broca</li>
                                    <li className='textStyle'>Teeth</li>
                                    <li className='textStyle'>Cerebellum</li>
                                    <li className='textStyle'>Brain  stem</li>
                                    <li className='textStyle'>Temporal Lobe</li>
                                    <li className='textStyle'>Occipital Lobe</li>
                                    <li className='textStyle'>Parietal Lobe</li>
                                    <li className='textStyle'>Frontal Lobe</li>
                                    <li className='textStyle'>Pineal Lobe</li>
                                    <li className='textStyle'>Broca</li>
                                    <li className='textStyle'>Teeth</li>
                                </ul>
                                <ul>
                                    <li>: Mint</li>
                                    <li>: Blue</li>
                                    <li>: Orange</li>
                                    <li>: Dark Blue</li>
                                    <li>: Yellow</li>
                                    <li>: Red</li>
                                    <li>: Green</li>
                                    <li>: Red</li>
                                    <li>: White</li>
                                    <li>: Mint</li>
                                    <li>: Blue</li>
                                    <li>: Orange</li>
                                    <li>: Dark Blue</li>
                                    <li>: Yellow</li>
                                    <li>: Red</li>
                                    <li>: Green</li>
                                    <li>: Red</li>
                                    <li>: White</li>
                                </ul>
                            </div>
                        </div>
                        <div className='SCANQRCODE-content'>
                            <div className='SCANQRCODE'>
                                <img src={SCANQRCODE} alt='SCANQRCODE' />
                            </div>
                        </div>
                        <div className='LULU-description'>
                            <div className='LULU-description-heading'>
                                <h2>LULU</h2>
                                <h3>1 of 10,000</h3>
                            </div>
                            <div className='LULU-description-paragraph'>
                                <span>LULU Master</span>
                                <p>The first on chain  "Mixed Reality" collectible. A new world of possibility awaits you through the magic of Mixed Reality, LULU will be your companion and show you this new world.</p>
                                <p>A journey await you</p>
                            </div>
                            <div className='LULU-description-button'>
                                <a>MINT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Mint