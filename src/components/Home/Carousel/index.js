import React, { Component } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import YouTube from 'react-youtube';
import './carousel.scss';

const opts1 = {
  width: '640',
  height: '500',
  playerVars: {
    modestbranding: 1,
    autohide: 1,
    showinfo: 0,
  },
};


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
    this.getVideoLink();

    const getVideo = () => {
      const table = [];
      for (let index = 0; index < 1; index += 1) {
        table.push(
          <div
            className="video-container-carousel"
            key={this.videoLinks[index].link}
          >
            <YouTube
              id="desktop"
              videoId={this.videoLinks[index].link}
              opts={opts1}
            />
          </div>,
        );
      }
      return (
        table
      );
    };
    const number = 9000;
    return (
      <div className="hey">
        <ReactCarousel
          useKeyboardArrows
          interval={number}
          infiniteLoop
          autoPlay
          showThumbs={false}
          className="carousel1"
        >
          {getVideo()}
        </ReactCarousel>
      </div>
    );
  }
}

Carousel.propTypes = {
  articles: PropTypes.object.isRequired,
};

export default Carousel;
