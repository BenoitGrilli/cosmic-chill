import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function MyCarousel() {
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1500}
    keyBoardControl={true}
    transitionDuration={6000}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px scale-90"
    >

      <div class="p-8 hover:scale-105 duration-300">
        <img src="/images/images-carrousel/83.png"></img>
        <Button/>
      </div>
      <div class="p-8 hover:scale-105 duration-300">
        <img src="/images/images-carrousel/84.png"></img>
        <Button/>
      </div>
      <div class="p-8 hover:scale-105 duration-300">
        <img src="/images/images-carrousel/85.png"></img>
        <Button/>
      </div>
      <div class="p-8 hover:scale-105 duration-300">
        <img src="/images/images-carrousel/86.png"></img>
        <Button/>
      </div>
      <div class="p-8 hover:scale-105 duration-300">
        <img src="/images/images-carrousel/87.png"></img>
        <Button/>
      </div>
      <div class="p-8 hover:scale-105 duration-300">
        <img src="/images/images-carrousel/88.png"></img>
        <Button/>
      </div>
      <div class="p-8 hover:scale-105 duration-300">
        <img src="/images/images-carrousel/89.png"></img>
        <Button/>
      </div>
    </Carousel>
  );
}
