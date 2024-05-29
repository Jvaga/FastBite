import React from "react";
import "./Hero.scss";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="assets/hero/delivery.png"
        alt="FastBite"
        className="hero__image-delivery"
      />
      <img
        src="assets/hero/hamburger.png"
        alt="FastBite"
        className="hero__image-hamburger"
      />
      <img
        src="assets/hero/pizza.png"
        alt="FastBite"
        className="hero__image-pizza"
      />
      <div className="hero__content">
        <h1 className="hero__title">Welcome to FastBite</h1>
        <p className="hero__subtitle">Delicious Fast Food, Delivered Fast</p>
        <NavLink
          className="hero__button"
          to="menu"
          onClick={() => window.scrollTo(0, 0)}
        >
          Order Now
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
