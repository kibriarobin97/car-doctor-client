
import slider1 from "../../../assets/images/banner/1.jpg"
import slider2 from "../../../assets/images/banner/2.jpg"
import slider3 from "../../../assets/images/banner/3.jpg"
import slider4 from "../../../assets/images/banner/4.jpg"
import slider5 from "../../../assets/images/banner/5.jpg"
import slider6 from "../../../assets/images/banner/6.jpg"

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative md:h-[450px] w-full">
                <img src={slider1} className="w-full object-cover bg-bottom" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative md:h-[450px] w-full">
                <img src={slider2} className="w-full object-cover bg-bottom" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative md:h-[450px] w-full">
                <img src={slider3} className="w-full object-cover bg-bottom" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative md:h-[450px] w-full">
                <img src={slider4} className="w-full object-cover bg-bottom" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative md:h-[450px] w-full">
                <img src={slider5} className="w-full object-cover bg-bottom" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative md:h-[450px] w-full">
                <img src={slider6} className="w-full object-cover bg-bottom" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;