import './stylesheets/songpage.css';
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { FaVolumeOff } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import {useState} from "react";

const SongPage=()=>{
    const [isPlayed, songIsPlayed] = useState(false);

    function changeIcon(){
        songIsPlayed(!isPlayed);
    }

    return (
        <>
            <div className={'song-page-container'}>
                <div className={'song-container'}>
                    <div className={'song'}>
                        <div className={'song-image'}></div>
                        <div className={'song-title'}></div>
                        <div className={'song-slider'}>
                            <Slider className={'song-slider-icon'}></Slider>
                        </div>
                        <div className={'song-controls'}>

                            <div className={'previous-song'}>
                                <IoPlayBack></IoPlayBack>
                            </div>
                            <div className={'play'} onClick={changeIcon}>
                                {isPlayed ? <FaPlay></FaPlay> : <FaPause></FaPause>}
                                {/*<FaPlay id={'play-btn'} onClick={changeIcon}></FaPlay>*/}
                            </div>
                            <div className={'next-song'}>
                                <IoPlayForward></IoPlayForward>
                            </div>
                        </div>
                        <div className={'volume'}>
                            <FaVolumeOff className={'vol-icon'}></FaVolumeOff>
                            <Slider className={'vol-slider-icon'}></Slider>
                            <FaVolumeUp className={'vol-icon'}></FaVolumeUp>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SongPage;