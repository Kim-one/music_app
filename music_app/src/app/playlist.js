import './stylesheets/playlist.css';
import SongPage from "./song_page";
import {RiPlayListLine} from "react-icons/ri";
import DisplayPlaylistNames from "./display_playlist_names";
import PlaylistSongs from "./playlist_songs";
import {useState} from "react";

const Playlist = () => {
    const [isPlaylistName, isPlaylistSongs] = useState(true);

    const toggleSongs = ()=> {
        isPlaylistSongs(prev => !prev);
    };

    return (
        <>
            <div className={'playlist-container'}>
                <div className={'display-playlist'}>
                    <div className={'playlist'}>
                        <RiPlayListLine className={'playlist-icon'}></RiPlayListLine>
                    </div>
                    <div className={'list-of-playlist'}>
                    {/*    write code to display a list of playlist created by the user*/}
                        { isPlaylistName ? <DisplayPlaylistNames toggleSongs={toggleSongs}/>: <PlaylistSongs toggleSongs={toggleSongs}/> }
                    </div>
                </div>
                <div className={'displaySongs'}>
                    <SongPage></SongPage>
                </div>
            </div>
        </>
    );
};

export default Playlist;