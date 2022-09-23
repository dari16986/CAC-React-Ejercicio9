import React, { Component } from "react";
import logo from '../../assets/img/netflix.png';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <img scr={logo} width={30} alt="logo"></img>
            </div>
        )
    }
}