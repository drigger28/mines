import React from "react";
import "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Product() {
    return (
        <div className="App" >
            <div className="corouselDiv">
                <Carousel
                    autoPlay
                    infiniteLoop
                    transitionTime={1000}
                    interval={5000}
                    showArrows={true}
                    showIndicators={true}
                    showStatus={false}
                    swipeable={false}
                >

                    <img src={require("../assets/slide_1.jpg")}
                        width="800"
                        height="1100" />
                    <img src={require("../assets/slide_2.jpg")}
                        width="800"
                        height="1100" />
                    <img src={require("../assets/slide_3.jpg")}
                        width="800"
                        height="1100" />

                </Carousel>
                <Carousel
                    className="corousel"
                    autoPlay
                    infiniteLoop
                    transitionTime={1000}
                    interval={5000}
                    showArrows={true}
                    showIndicators={true}
                    showStatus={false}
                    swipeable={false}
                >
                    <img src={require("../assets/slide_4.jpg")}
                        width="800"
                        height="1100" />
                    <img src={require("../assets/slide_5.jpg")}
                        width="800"
                        height="1100" />
                    <img src={require("../assets/slide_7.jpg")}
                        width="800"
                        height="1100" />

                </Carousel>
                <Carousel
                    className="corousel"
                    autoPlay
                    infiniteLoop
                    transitionTime={1000}
                    interval={5000}
                    showArrows={true}
                    showIndicators={true}
                    showStatus={false}
                    swipeable={false}
                >
                    <img src={require("../assets/slide_6.jpg")}
                        width="800"
                        height="1100" />

                </Carousel>


            </div>
        </div>
    );

};

export default Product;
