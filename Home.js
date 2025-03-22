
// import React, { useRef, useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import videoBg from "./images/piano_video.mp4";
// import img1 from './images/Background.jpg'
// import img2 from './images/Trust.jpeg'
// import img3 from './images/secure.png'
// import img4 from './images/offer.jpg'
// import img5 from './images/Best.png'
// import img6 from './images/Learn.png'
// import img7 from './images/Brand1.png'
// import img8 from './images/Brand2.png'
// import img9 from './images/Brand3.png'
// import img10 from './images/Brand4.png'
// import img11 from './images/Brand5.png'
// import img12 from './images/Brand6.png'
// import img13 from './images/Brand7.png'

// import musicFile from "./images/piano_background_music.mp3"; // Replace with actual music file

// const Home = () => {
//     const sectionRef = useRef(null);
//     const audioRef = useRef(new Audio(musicFile));
//     const [isPlaying, setIsPlaying] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     // Play music when section is in view
//                     audioRef.current.play().catch((err) => console.log("Audio play error:", err));
//                     setIsPlaying(true);
//                 } else {
//                     // Pause music when section is out of view
//                     audioRef.current.pause();
//                     setIsPlaying(false);
//                 }
//             },
//             { threshold: 0.5 } // Play music when 50% of the section is visible
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, []);




//     return(
//         <>
//         <div ref={sectionRef} className="relative">
//             {/* Background Image */}
//             <div className="lg:w-full lg:h-[45vw] absolute top-0 left-0">
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="lg:w-full lg:h-[45vw] object-cover"
//                 >
//                     <source src={videoBg} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>

//             {/* Text Content */}
//             <div className='my-20 pl-7 absolute top-0 left-0 w-full bg-opacity-80 p-7'>
//                 <p className='lg:text-[#fff] lg:text-4xl lg:mt-[4vw] lg:ml-[3vw] lg:text-left lg:w-[28vw]'>
//                     <p>Everything a musician</p>
//                     <p className='text-[#c2410c]'>might need is right</p>
//                     <p>here with us.</p>
//                 </p>

//                 {/* Shop Now Button */}
//                 <div>
//                     <Link to="/accessories">
//                         <button className='lg:bg-[#c2410c] lg:rounded-2xl lg:text-[#fff] lg:w-[9vw] lg:h-[3vw] lg:pb-[0.5vw] lg:text-lg lg:mt-[2vw] lg:ml-[3vw] hover:grayscale-0 transition-all duration-300'>
//                             Shop Now
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
        

//         <div className="lg:bg-gradient-to-b from-amber-100 to-amber-300 lg:py-12">
//     <div className="lg:text-center">
//         <div className="lg:bg-white lg:mt-[3vw] lg:text-4xl lg:text-[#c2410c] lg:font-bold lg:uppercase lg:tracking-wide lg:px-8 lg:py-3 lg:rounded-lg lg:shadow-lg lg:inline-block">
//             <p>Services We Offer</p>
//         </div>
//     </div>

//     <div className="lg:flex lg:justify-center lg:gap-16 lg:mt-10">
//         <div className="lg:text-center">
//             <img src={img2} alt="/cdn/Trust.jpeg" className="lg:ml-[4vw] lg:mt-[4vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300" />
//             <p className="lg:ml-[1vw] lg:mt-[1vw] lg:text-xl lg:text-gray-800 lg:font-semibold">100% Trusted & Secure Platform</p>
//         </div>
//         <div className="lg:text-center">
//             <img src={img3} alt="/cdn/secure.png" className="lg:ml-[15vw] lg:mt-[4vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
//             <p className="lg:text-xl lg:ml-[14vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">100% Secure Payments</p>
//         </div>
//         <div className="text-center">
//             <img src={img4} alt="/cdn/offer.jpg" className="lg:ml-[21vw] lg:mr-[7vw] lg:mt-[4vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
//             <p className="lg:text-xl lg:ml-[15vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">Provide Best Offer & Deals</p>
//         </div>
//     </div>

//     <div className="lg:flex lg:justify-center lg:gap-16 lg:mt-10">
//         <div className="lg:text-center">
//             <img src={img5} alt="/cdn/Best.jpg" className="lg:ml-[16vw] lg:mt-[2vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
//             <p className="lg:text-xl lg:ml-[13vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">Provide Best Quality Product</p>
//         </div>
//         <div className="lg:text-center">
//             <img src={img6} alt="/cdn/Learn.png" className="lg:ml-[15vw] lg:mt-[2vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] slg:hadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
//             <p className="lg:text-xl lg:ml-[9vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">Provide Best Resources for Music Learning</p>
//         </div>
//     </div>
// </div>


//         <div className="lg:bg-gradient-to-b from-amber-300 via-amber-600 to-amber-700 py-12">
//     {/* Title */}
//     <p className="lg:bg-white lg:mt-[2vw] lg:ml-[37vw] lg:text-4xl lg:text-[#c2410c] lg:text-center lg:font-bold lg:uppercase lg:tracking-wide lg:px-8 lg:py-3 lg:rounded-lg lg:shadow-lg lg:inline-block">
//         Top Brands
//     </p>

//     {/* Brand Grid */}
//     <div className="lg:container lg:mx-auto lg:px-4 lg:py-12">
//         <div className="lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
//             <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
//                 <img src={img7} alt="fender" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
//             </div>
//             <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
//                 <img src={img8} alt="gibson" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
//             </div>
//             <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
//                 <img src={img9} alt="roland" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
//             </div>
//             <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
//                 <img src={img10} alt="yamaha" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
//             </div>
//             <div className="lg:bg-white lg:shadow-xl lg:rounded-xl  lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
//                 <img src={img11} alt="taylor" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
//             </div>
//             <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
//                 <img src={img12} alt="gretsch" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
//             </div>
//             <div className="lg:bg-white lg:shadow-xl lg:rounded-xl  lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
//                 <img src={img13} alt="epiphore" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
//             </div>
//         </div>
//     </div>
// </div>



    

//     </>
//     )

    
// }
// export default Home;


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
