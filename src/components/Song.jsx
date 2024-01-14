import { useState } from "react";

export const Song = ({fn, song})=>{
    console.log(song);
    const [playerFlag, setPlayerFlag] = useState(false);

    const showPlayer = ()=>{
        fn(true, song);
    }
    return(<div className="row">
        <div className="col-4">
            <img src = {song.artworkUrl100}/>
        </div>
        <div className="col-4">
        {song.artistName} {song.trackname}
        </div>
        <div className="col-4">
            <button onClick={showPlayer} className="btn btn-primary">Play Song</button>
        </div>
        
        </div>)
}