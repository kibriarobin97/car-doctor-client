
import slider1 from "../../../assets/images/banner/1.jpg"
import slider2 from "../../../assets/images/banner/2.jpg"
import slider3 from "../../../assets/images/banner/3.jpg"
import slider4 from "../../../assets/images/banner/4.jpg"
import slider5 from "../../../assets/images/banner/5.jpg"
import slider6 from "../../../assets/images/banner/6.jpg"

const Slider = () => {
    return (
        <div className="relative">
            <div className="carousel w-full h-[580px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={slider1} className="w-full object-cover bg-bottom rounded-lg" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full object-cover bg-bottom rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full object-cover bg-bottom rounded-lg" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider4} className="w-full object-cover bg-bottom rounded-lg" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={slider5} className="w-full object-cover bg-bottom rounded-lg" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={slider6} className="w-full object-cover bg-bottom rounded-lg" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div className="absolute flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] min-h-full rounded-lg">
                <div className=" text-white w-1/2 pl-8 space-y-3">
                    <h2 className="text-4xl font-bold">Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-3">
                        <button className="btn btn-primary font-bold">Discover More</button>
                        <button className="btn btn-outline text-white font-bold">Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;