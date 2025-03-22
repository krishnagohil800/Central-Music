import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoBg from "./images/piano_video.mp4";
import musicFile from "./images/piano_background_music.mp3";
import img2 from "./images/Trust.jpeg";
import img3 from "./images/secure.png";
import img4 from "./images/offer.jpg";
import img5 from "./images/Best.png";
import img6 from "./images/Learn.png";
import img7 from "./images/Brand1.png";
import img8 from "./images/Brand2.png";
import img9 from "./images/Brand3.png";
import img10 from "./images/Brand4.png";
import img11 from "./images/Brand5.png";
import img12 from "./images/Brand6.png";
import img13 from "./images/Brand7.png";

const Home = () => {
    const sectionRef = useRef(null);
    const audioRef = useRef(new Audio(musicFile));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    audioRef.current.play().catch((err) => console.log("Audio play error:", err));
                    setIsPlaying(true);
                } else {
                    audioRef.current.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Hero Section with Background Video */}
            <div ref={sectionRef} className="relative h-[45vw] w-full overflow-hidden mt-16">
                <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                    <source src={videoBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 text-white bg-black bg-opacity-50">
                    <h1 className="text-5xl font-bold">
                        Everything a musician <br />
                        <span className="text-orange-600">might need is right</span> <br />
                        here with us.
                    </h1>
                    <Link to="/accessories">
                        <button className="mt-6 mx-24 bg-orange-600 px-20 py-2 text-lg rounded-lg hover:bg-orange-700 transition-all">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gradient-to-b from-amber-100 to-amber-300 py-12 text-center">
                <h2 className="text-4xl text-orange-600 font-bold uppercase">Services We Offer</h2>
                <div className="flex flex-wrap justify-center gap-16 mt-10">
                    {[{ img: img2, text: "100% Trusted & Secure Platform" },
                      { img: img3, text: "100% Secure Payments" },
                      { img: img4, text: "Best Offer & Deals" },
                      { img: img5, text: "Best Quality Products" },
                      { img: img6, text: "Best Resources for Music Learning" }]
                      .map(({ img, text }, index) => (
                        <div key={index} className="text-center">
                            <img src={img} alt={text} className="h-36 w-36 rounded-full border-4 border-orange-500 shadow-lg transition-transform transform hover:scale-110 duration-300 mx-auto" />
                            <p className="text-xl text-gray-800 font-semibold mt-3">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brands Section */}
            <div className="bg-gradient-to-b from-amber-300 via-amber-600 to-amber-700 py-12 text-center">
                <h2 className="text-4xl text-orange-600 font-bold uppercase bg-white py-3 px-8 rounded-lg shadow-lg inline-block">Top Brands</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 mt-10">
                    {[img7, img8, img9, img10, img11, img12, img13].map((brand, index) => (
                        <div key={index} className="bg-white shadow-xl rounded-xl p-6 flex justify-center items-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
                            <img src={brand} alt="Brand Logo" className="w-32 h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
