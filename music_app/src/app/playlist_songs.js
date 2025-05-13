import { IoClose } from "react-icons/io5";
const PlaylistSongs=({toggleSongs})=>{

    return(
        <>
            <p><IoClose onClick={toggleSongs}/> song on playlist 1</p>
        </>
    );
};

export default PlaylistSongs;