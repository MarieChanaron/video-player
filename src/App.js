import React from 'react';
import './styles.css';
import { Video } from './components/Video';
import { Menu } from './components/Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.changeVideo = this.changeVideo.bind(this);
  }

  changeVideo(value) {
    this.setState(
      {src: VIDEOS[value]}
    );
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu onChange={this.changeVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default App;
