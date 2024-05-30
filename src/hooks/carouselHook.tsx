const CarouselHook = () => {
  const variants = {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return {
    variants,
  };
};

export default CarouselHook;
