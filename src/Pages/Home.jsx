import React, { Component } from 'react';
import SocialMedia from '../Components/SocialMedia.jsx'
import Popup from '../Components/Popup.jsx'
import simpleLogo from '../images/brand_simple.png';
import logo from '../images/brand_Alt.png'
import pool1 from '../images/IMG_9713.jpg';
import pool2 from '../images/IMG_9727.jpg';
import pool3 from '../images/Jaron_Allen, Martile_005.jpg';
import pool4 from '../images/MikePool1.jpg';
import pool5 from '../images/MikePool2.jpg';
import pool6 from '../images/MikePool3.jpg';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pools: [pool1, pool2, pool4, pool5, pool6] 
        };
    }

    
    render() {
        return (
            <div className="bg-white">
                <header>
                    <nav className="p-6">
                        <div className="flex justify-between items-center">
                            {/* <h1 className="pr-4 mr-2 border-r-2 border-blue-200 text-2xl font-bold text-blue-500">Florida Pool Consultants</h1> */}
                            <img className="pr-4 mr-2 border-r-2 border-blue-200" src={logo} width="156" height="64"/>
                            <div className="flex justify-end pr-1/4 flex-grow">
                                <div className="flex space-x-6">
                                    <a className="text-blue-500 text-md underline" href="https://locator.fluidrausa.com/en?dealerType=builder&search=34120&radius=10" target="_blank">Fluidra</a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="container mx-auto h-96 rounded-md flex items-center background-image py-14 mt-12">
                        <div className="ml-20 xs:mx-auto text-blue-50 text-center bg-opacity-75 px-8 py-4 bg-black rounded-md">
                            <h1 className="text-5xl font-bold mb-4">
                                Discuss your dream pool<br />
                                today!
                            </h1>
                            <p className="text-lg inline-block sm:block text-gray-100">Schedule a meeting</p>
                            {/* Open the contact box to fill out the form */}
                            <Popup buttonText="Get in touch!"></Popup>
                        </div>
                    </div>
                    
                </header>
                <main className="py-16 container mx-auto px-6 md:px-0">
                    <section>
                        <hr className="w-2/5 my-6 border-2 rounded-sm sm:mx-0 mx-auto" />
                        <h1 className="text-3xl font-bold text-blue-600 mb-10">Pools from around you!</h1>
                        <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
                            {
                                this.state.pools.map((pool) => (
                                        <div>
                                            <div className="bg-blue-300 h-64">
                                                <img className="pool-around-you" src={pool} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-blue-500 mt-2"></h3>
                                        </div>
                                ))
                            }
                            {/* <div>
                                <div className="bg-blue-300 h-64">
                                    <img className="pool-around-you" src={pool1}/>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-500 mt-2"></h3>
                            </div>
                            <div>
                                <div className="bg-blue-300 h-64">
                                    <img className="pool-around-you" src={pool2}/>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-500 mt-2"></h3>
                            </div>
                            <div>
                                <div className="bg-blue-300 h-64">
                                    <img className="pool-around-you" src={pool3}/>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-500 mt-2"></h3>
                            </div> */}
                        </div>
                        <hr className="w-2/5 my-14 border-2 rounded-sm sm:mx-0 mx-auto" />
                    </section>
                    <section>
                        <h1 className="inline-block text-blue-600 font-bold text-3xl">
                            Reviews from your neighbors!
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                            <div>
                                <h3 className="text-lg font-semibold text-blue-500 mt-2">Maxine Byrne</h3>
                                <p className="text text-blue-400">I overwhelmingly and confidently recommend Florida Pool Consultants and owner Jerry Pecar for new pool construction.You will not be disappointed.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-500 mt-2">Harley The Dog</h3>
                                <p className="text text-blue-400">Great experience! The whole process was very easy!</p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="mb-6 px-6 md:px-0 bg">
                    <div className="mx-auto space-x-6 flex w-full justify-between">
                        <div className="p-6 flex w-auto items-center justify-end">
                            <img height="40" width="50" src={simpleLogo}/>
                            <p className="invisible">The very best pool builder in Southwest Florida</p>
                            <p className="invisible">© Sharetribe 2017.</p>
                        </div>
                        <div>
                            <SocialMedia></SocialMedia>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home;