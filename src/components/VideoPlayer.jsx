import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import VideoPlayerContext from "../contexts/VideoPlayerContext";

const VideoPlayer = () => {
  const [play, setPlay] = useState(true);
  const playerSetting = useContext(VideoPlayerContext);
  const videoPause = playerSetting.videoPause;
  const setVideoPause = playerSetting.setVideoPause;

  useEffect(() => {
    if (videoPause === true) pauseVideo();
  }, [videoPause]);

  const pauseVideo = () => {
    setPlay(!play);
  };

  const handlePlay = () => {
    setPlay(true);
    setVideoPause(false);
  };

  const [url, setUrl] = useState("");
  const [surl, setSurl] = useState("");
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const saveUrl = (e) => {
    e.preventDefault();
    setSurl(url);
  };

  return (
    <div style={{ marginLeft: "1%", width: "50%", color: "white" }}>
      <div style={{ width: "100%" }}>
        <Form
          style={{ width: "100%", display: "flex", alignItems: "flex-start" }}
        >
          <Form.Group
            style={{ width: "60%" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="text"
              placeholder="Enter URL"
              onChange={handleUrl}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{
              height: "10%",
              marginLeft: "2%",
              backgroundColor: "#A6A6A6",
              color: "black",
            }}
            onClick={saveUrl}
          >
            Play
          </Button>
        </Form>
      </div>
      <Container>
        <div className="ratio ratio-16x9">
          <ReactPlayer
            url={surl}
            playing={play}
            controls={true}
            onPlay={handlePlay}
          />
        </div>
      </Container>
    </div>
  );
};

export default VideoPlayer;
