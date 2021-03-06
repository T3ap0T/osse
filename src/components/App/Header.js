import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../App/logo.svg';
import lantern from '../App/lantern.svg'
import github from '../App/github.svg'

class Header extends React.Component {

    render() {
        return (
            <div className="App-header">
                <div className="logo-wrapper">
                    <Link to="/"><img src={logo} className="App-logo App-header-item" alt="logo" /></Link>
                    <img src={lantern} className="App-logo-lantern" alt="lantern" />
                </div>
                
                <a href="/">OSRS:SE</a>
                <a href="https://github.com/treygrr/osse"><img src={github} className="App-logo-github" alt="github" /></a>
            </div>
        );
    }

}

export default Header;