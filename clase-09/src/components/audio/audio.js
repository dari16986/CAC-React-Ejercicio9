import React, { Component } from "react";
import audio from '../../assets/audio/src_efecto-de-sonido-golpe.mp3';

export default class Audio extends Component {
    render() {
        return (
            <div>
                <h2>Audio</h2>
                <audio controls>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}



