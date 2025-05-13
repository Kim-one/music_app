import './stylesheets/playlist.css';
import SongPage from "./song_page";

const Playlist = ()=>{
    return (
        <>
            <div className={'playlist-container'}>
                {/*<h1>Playlist Works</h1>*/}
                <div className={'display-playlist'}></div>
                <div className={'displaySongs'}>
                    <SongPage></SongPage>
                </div>
            </div>
        </>
    );
}

export default Playlist;