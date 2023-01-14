import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Carousel = () => {
  const carouselSlide = useRef();
  const carouselImages = document.querySelectorAll('.carousel-slide img');

  //Buttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  //Counter
  let counter = 1;
  const size = carouselImages[0].clientWidth;

  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

  //Button Listeners
  nextBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - 2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });

  return (
    <div className="carousel-container">
        <div className="carousel-slide">
            <StaticImage src="../images/carousel6.jpg" id="lastClone" alt="carousel6" placeholder="blurred" ref={carouselSlide} />
            <StaticImage src="../images/carousel1.jpg" alt="carousel1" placeholder="blurred"/>
            <StaticImage src="../images/carousel2.jpg" alt="carousel2" placeholder="blurred"/>
            <StaticImage src="../images/carousel3.jpg" alt="carousel3" placeholder="blurred"/>
            <StaticImage src="../images/carousel4.jpg" alt="carousel4" placeholder="blurred"/>
            <StaticImage src="../images/carousel5.jpg" alt="carousel5" placeholder="blurred"/>
            <StaticImage src="../images/carousel6.jpg" alt="carousel6" placeholder="blurred"/>
            <StaticImage src="../images/carousel1.jpg" id="firstClone" alt="carousel1" placeholder="blurred"/>
        </div>

        <button id="prevBtn">Prev</button>
        <button id="nextBtn">Next</button>

    </div>
  )
}

export default Carousel;