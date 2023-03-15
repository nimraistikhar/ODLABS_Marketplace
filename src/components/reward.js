import React from 'react'
import Footer from './footer'
import Header from './header'
import './rewards.css'

const Reward = () => {
    return (
        <>
            <Header />
            <div className='container mainPage'>
                <div className='rewardWallet'>
                    <div className='scorArea'>
                        <div className='scoreTitle'>
                            <span className='scoreTitle-heading1'>Leader Board</span>
                            <span className='scoreTitle-heading2'>score</span>
                        </div>
                        <div className='figureBox'>
                            <div className='leaderBoard'>
                                <p>0xd3472733734y39483842436</p>
                                <p>0xd3472733734y39483842436</p>
                                <p>0xd3472733734y39483842436</p>
                                <p>0xd3472733734y39483842436</p>
                                <p>0xd3472733734y39483842436</p>
                                <p>0xd3472733734y39483842436</p>
                                <p>0xd3472733734y39483842436</p>
                                <p>0xd3472733734y39483842436</p>
                            </div>
                            <div className='score'>
                                <p>18</p>
                                <p>17</p>
                                <p>13</p>
                            </div>
                        </div>
                    </div>
                    <div className='walletContainer'>
                        <div className='walletContent'>
                            <div className='walletAdress'>
                                <h3 className='walletHeading'>Your Wallet</h3>
                                <p className='walletNumber'>0xd3472733734y39483842436</p>
                                <p className='walletScore'>SCORE - 18</p>
                                <div className='walletButton'>
                                    <a className='walletButton1'>4.3 ETH</a>
                                    <a className='walletButton2'>CLAIM REWARD</a>
                                </div>
                            </div>
                            <div className='walletConnection'>
                                <p>Wallet</p>
                                <div className='walletConnectionButton'>
                                    <a>Disconnect</a>
                                    <a>Reconnect</a>
                                </div>
                            </div>
                        </div>
                        <div className='leaderSection'>
                            <h3>Leader Rewards</h3>
                            <p>REWARDS EARNED</p>
                            <ul>
                                <li>.0333 ETH</li>
                                <li>.0333 ETH</li>
                                <li>.0333 ETH</li>
                                <li>.0333 ETH</li>
                            </ul>
                            <div className='leaderButton'>
                                <p>.0999 ETH Available</p>
                                <a>CLAIM REWARD</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reward