import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/main.css";

class VideoItem extends Component {
  render() {
    const { name, channel, views } = this.props;
    return (
      <div className="VideoItem">
        <img className="VideoItemImg" src="https://picsum.photos/250/150" />
        <div className="VideoInfo">
          <div className="VideoItemTitle">{name}</div>
          <div
            className="VideoItemChannel"
            style={{ position: "relative", bottom: "30px", right: "0px" }}
          >
            {channel}
          </div>
          <div className="VideoItemViews">{views} Views</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
