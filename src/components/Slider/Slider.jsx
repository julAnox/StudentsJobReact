import React, { useState, useEffect, useRef, useCallback } from "react";
import Slider1img from "../../assets/slider1.png";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      img: Slider1img,
      title: "Tailoring the future of fashion",
      description:
        "Learn how the London College of Fashion is empowering creators to push creative boundaries with 3D photography, digital avatars, and more next-gen tech from Microsoft.",
      buttonText: "Explore the tools",
    },
    {
      id: 2,
      img: Slider1img,
      title: "Celebrating the Black and African American community",
      description:
        "Explore powerful stories of innovation and inspiration from employees, this month and year-round.",
      buttonText: "Check out their stories",
    },
  ];

  const startSlider = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
  }, [slides.length]);

  const pauseSlider = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startSlider();
    } else {
      pauseSlider();
    }
    return () => pauseSlider();
  }, [isPlaying, startSlider, pauseSlider]);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
    setIsPlaying(false);
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.img} alt={slide.title} />
            <div className="text-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <span
          className="material-symbols-outlined control-icon"
          onClick={handlePrevSlide}
        >
          chevron_left
        </span>
        <span
          className="material-symbols-outlined control-icon"
          onClick={togglePlayPause}
        >
          {isPlaying ? "pause" : "play_arrow"}
        </span>
        <span
          className="material-symbols-outlined control-icon"
          onClick={handleNextSlide}
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};

export default Slider;
