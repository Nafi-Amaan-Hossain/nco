import React from "react";
import Swipe from "react-easy-swipe";
import {continents} from "./data.js";

class Carousel extends React.Component {
    state = {
      currentSlide: 0,
      paused: false,
    };


  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === continents.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide, paused: this.state.paused });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  };
  

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === continents.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide, paused: this.state.paused });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? continents.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide, paused: this.state.paused });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index, paused: this.state.paused });
  };

  render() {
    return (
      <div className="mt-8 w-full bg-gray-600">
        <div className="max-h-96 flex overflow-hidden relative fixed">
          <div
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          >
          <span class="material-icons" style={{fontSize:'48px'}}>
            navigate_before
          </span>
          </div>

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {continents.reverse().map((slide, index) => {
              return (
                <img
                  src={`/images${slide.link}.jpg`}
                  alt={`${slide.name}`}
                  key={slide.name}
                  className={
                    index === this.state.currentSlide
                      ? "block w-full h-auto lg:px-64 object-contain animate-fade-in"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {continents.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-purple-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <div
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer">
            <span class="material-icons" style={{fontSize:'48px'}}>
            navigate_next
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
