
const DisplayPlaylistNames=({toggleSongs})=>{
    return(
        <>
            <div className={'playlist-name'}>
                <p onClick={toggleSongs}>Song1</p>
            </div>
        </>
    )
};

export default DisplayPlaylistNames;