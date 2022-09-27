import React, { Component } from "react";
import video from '../../assets/video/background_video.mp4';

export default class Video extends Component {
    render() {
        return (
            <div>
                <h2>Video</h2>
                <video width="auto" height="auto" controls autoplay="true" muted loop>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}



