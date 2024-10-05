import React, { useContext } from "react";
import SideBar from "./components/sideBar";
import Player from "./components/player";
import Display from "./components/display";
import { PlayerContext } from "./context/playerContext";

export default function App() {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      {songsData.length !== 0 ? (
        <>
          {" "}
          <div className="h-[90%] flex">
            <SideBar />
            <Display />
          </div>
          <Player />
        </>
      ) : null}

      <audio ref={audioRef} src={track?track.file:''} preload="auto"></audio>
    </div>
  );
}
