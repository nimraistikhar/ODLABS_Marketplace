import React from 'react'
import QRcode from './Images/QR1.png'
import Car from './Images/car.png'
import Spray from './Images/spray.png'
import VideoPlaceHolder from './Images/Videoplaceholder.png'
import './tryme.css'
import './mainpage.css'
import Header from './header'
import Footer from './footer'

const Tryme = () => {
    return (
        <>
            <Header />
            <div className='container baseContainer mainPage'>
                <div className='tryAsset'>
                    <div className='qrAsset'>
                        <div className='qrSet qrRight'>
                            <div className='qrImg'>
                                <img src={QRcode} alt='QR code' />
                            </div>
                            <div className='qrImg'>
                                <img src={Car} alt='Car' />
                            </div>
                        </div>
                        <div className='qrSet'>
                            <div className='qrImg'>
                                <img src={QRcode} alt='QR code' />
                            </div>
                            <div className='qrImg'>
                                <img src={Spray} alt='Spray' />
                            </div>
                        </div>
                    </div>
                    <div className='VideoPlaceHolder'>
                        <img src={VideoPlaceHolder} alt='VideoPlaceHolder' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tryme