import React, { Component } from "react";
import logo from '../../assets/img/netflix.png';
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={ logo } width={ 60 } alt="logo"></img>
            </div>
        );
    }
}