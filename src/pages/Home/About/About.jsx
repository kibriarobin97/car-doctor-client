import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-16 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 p-4">
                    <h3 className="text-2xl text-primary font-bold mb-3">About Us</h3>
                    <h1 className="text-4xl font-bold mb-3">We are qualified & of experience in this field</h1>
                    <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-primary font-semibold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;