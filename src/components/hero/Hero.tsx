import { motion } from "framer-motion";
import "./Hero.scss";
import { NavLink } from "react-router-dom";
import HeroHook from "../../hooks/heroHook";

const title = "Welcome to FastBite";

const Hero = () => {
  const text = title.split("");
  const { variantsTitle, variantsP, variantsBtn } = HeroHook();

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
        <motion.h1 className="hero__title">
          {text.map((item, i) => (
            <motion.span
              key={i}
              variants={variantsTitle}
              initial="hidden"
              whileInView="reveal"
              custom={i}
              viewport={{ once: true }}
            >
              {item}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          variants={variantsP}
          initial="start"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Delicious Fast Food, Delivered Fast
        </motion.p>
        <motion.button
          className="hero__button"
          variants={variantsBtn}
          whileHover="animate"
        >
          <NavLink
            className="hero__button"
            to="menu"
            onClick={() => window.scrollTo(0, 0)}
          >
            Order Now
          </NavLink>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
