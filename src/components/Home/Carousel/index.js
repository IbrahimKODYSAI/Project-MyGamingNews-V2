import React, { Component } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import YouTube from 'react-youtube';
import './carousel.scss';

class Carousel extends Component {
  state ={}

  videoLinks =[]

  getVideoLink() {
    this.videoLinks = [];
    const { articles } = this.props;
    const carouselList = articles.newsOfTheWeek;

    carouselList.forEach((article) => {
      if (article.videoId !== '') {
        this.videoLinks.push({
          link: article.videoId,
          title: article.title,
        });
      }
    });
  }

  render() {
    const opts1 = {
      width: '640',
      height: '500',
      playerVars: {
        modestbranding: 1,
        autohide: 1,
        showinfo: 0,
      },
    };
    this.getVideoLink();
    return (
      <div className="hey">
        <ReactCarousel
          useKeyboardArrows
          interval="9000"
          infiniteLoop
          autoPlay
          showThumbs={false}
          className="carousel1"
        >
          {/* <video src="assets/video/lol.mp4" /> */}
          {this.videoLinks.map(video => (
            <div
              className="video-container-carousel"
              key={video.link}
            >
              <YouTube
                id="desktop"
                videoId={video.link}
                opts={opts1}
              />
              {/* <YouTube
                id="screen"
                videoId={video.link}
                opts={opts2}
              /> */}
              {/* <p className="legend">{video.title}</p> */}
            </div>
          ))}
        </ReactCarousel>
      </div>
    );
  }
}

Carousel.propTypes = {
  articles: PropTypes.object.isRequired,
};

export default Carousel;
