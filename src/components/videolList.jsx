import React, { Component } from "react";
import VideoItem from "./videoItem";
import "bootstrap/dist/css/bootstrap.css";
import "../style/main.css";

// const API_KEY = "AIzaSyBr3GzNXwL3Ps31sGUNPYU1WQAw02Rldr0";

class VideoList extends Component {
  state = {
    items: [
      {
        name: "Billie Eilish - everything i wanted",
        channel: "Billie Eilish",
        views: "96M",
      },
      {
        name: "FINNEAS - I Lost A Friend",
        channel: "FINNEAS",
        views: "9.7M",
      },
      {
        name: "FINNEAS - I Lost A Friend",
        channel: "FINNEAS",
        views: "9.7M",
      },
    ],
  };
  render() {
    return this.state.items.map((item) => (
      <div className="VideoList">
        <VideoItem name={item.name} channel={item.channel} views={item.views} />
      </div>
    ));
  }
}

export default VideoList;
