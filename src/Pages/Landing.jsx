import React, { Component } from 'react'
import logo from '../images/brand.png';
import {
    Link
} from "react-router-dom";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="w-full h-full flex justify-center align-middle">
                <div className="block lg:w-1/4 md:w-1/2">
                    <img className="lg:h-1/4 md:h-1/5 page-title" src={logo} />
                    <div className="flex w-full justify-center">
                        <Link className="pr-8 pl-8 pt-2 pb-2 bg-blue-300 text-white filter drop-shadow-md animate-bounce focus:animate-pulse rounded-md" to="/Home">DIP YOUR TOE IN</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;

