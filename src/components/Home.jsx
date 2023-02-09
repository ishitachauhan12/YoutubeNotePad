import React, { createContext, useContext, useState } from "react";
import NavBar from "./NavBar";
import TextEditor from "./TextEditor";
import VideoPlayer from "./VideoPlayer";
import VideoPlayerContext from "../contexts/VideoPlayerContext";

const Home = () => {
  const [videoPause, setVideoPause] = useState(false);
  return (
    <>
      <NavBar />
      <div
        style={{ width: "100%", height: "auto", margin: "1%", display: "flex" }}
      >
        <VideoPlayerContext.Provider value={{ videoPause, setVideoPause }}>
          <TextEditor />
          <VideoPlayer />
        </VideoPlayerContext.Provider>
      </div>
    </>
  );
};

export default Home;
