import { Link } from 'react-router-dom';
import React from 'react';
import img2 from '../Components/images/Trust.jpeg'
import img1 from '../Components/images/Background.jpg'
import img3 from '../Components/images/secure.png'
import img4 from '../Components/images/offer.jpg'
import img5 from '../Components/images/Best.png'
import img6 from '../Components/images/Learn.png'
import img7 from '../Components/images/Brand1.png'
import img8 from '../Components/images/Brand2.png'
import img9 from '../Components/images/Brand3.png'
import img10 from '../Components/images/Brand4.png'
import img11 from '../Components/images/Brand5.png'
import img12 from '../Components/images/Brand6.png'
import img13 from '../Components/images/Brand7.png'



function Home(){
    return(
        <>
        <div className="lg:w-full lg:h-[45vw]">
            <img src={img1} alt="/cdn/Background.jpg" className="lg:blur-sm lg:w-full lg:h-[45vw] lg:object-cover"/>
        </div>
        <div className='my-20 pl-7 absolute top-0 left-0 w-full bg-opacity-80 p-7'>
            <p className='lg:text-[#fff] lg:text-4xl lg:mt-[4vw] lg:ml-[3vw] lg:text-left lg:w-[28vw]'>
            <p>Everything a musician</p> <p className='text-[#c2410c]'>might need is right</p> <p>here with us.</p></p>
            <div>
            <Link to="/accessories">
                <button className='lg:bg-[#c2410c] lg:rounded-2xl lg:text-[#fff] lg:w-[9vw] lg:h-[3vw] lg:pb-[0.5vw] lg:text-lg lg:mt-[2vw] lg:ml-[3vw] hover:grayscale-0 transition-all duration-300'>
                    Shop Now
                </button>
            </Link>
        </div>
        </div>
        

        <div className="lg:bg-gradient-to-b from-amber-100 to-amber-300 lg:py-12">
    <div className="lg:text-center">
        <div className="lg:bg-white lg:mt-[3vw] lg:text-4xl lg:text-[#c2410c] lg:font-bold lg:uppercase lg:tracking-wide lg:px-8 lg:py-3 lg:rounded-lg lg:shadow-lg lg:inline-block">
            <p>Services We Offer</p>
        </div>
    </div>

    <div className="lg:flex lg:justify-center lg:gap-16 lg:mt-10">
        <div className="lg:text-center">
            <img src={img2} alt="/cdn/Trust.jpeg" className="lg:ml-[4vw] lg:mt-[4vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300" />
            <p className="lg:ml-[1vw] lg:mt-[1vw] lg:text-xl lg:text-gray-800 lg:font-semibold">100% Trusted & Secure Platform</p>
        </div>
        <div className="lg:text-center">
            <img src={img3} alt="/cdn/secure.png" className="lg:ml-[15vw] lg:mt-[4vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
            <p className="lg:text-xl lg:ml-[14vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">100% Secure Payments</p>
        </div>
        <div className="text-center">
            <img src={img4} alt="/cdn/offer.jpg" className="lg:ml-[21vw] lg:mr-[7vw] lg:mt-[4vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
            <p className="lg:text-xl lg:ml-[15vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">Provide Best Offer & Deals</p>
        </div>
    </div>

    <div className="lg:flex lg:justify-center lg:gap-16 lg:mt-10">
        <div className="lg:text-center">
            <img src={img5} alt="/cdn/Best.jpg" className="lg:ml-[16vw] lg:mt-[2vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] lg:shadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
            <p className="lg:text-xl lg:ml-[13vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">Provide Best Quality Product</p>
        </div>
        <div className="lg:text-center">
            <img src={img6} alt="/cdn/Learn.png" className="lg:ml-[15vw] lg:mt-[2vw] lg:border-4 lg:border-orange-500 lg:rounded-full lg:h-[13vw] lg:w-[13vw] slg:hadow-lg lg:transition-transform lg:transform hover:scale-110 lg:duration-300"/>
            <p className="lg:text-xl lg:ml-[9vw] lg:mt-[1vw] lg:text-gray-800 lg:font-semibold">Provide Best Resources for Music Learning</p>
        </div>
    </div>
</div>


        <div className="lg:bg-gradient-to-b from-amber-300 via-amber-600 to-amber-700 py-12">
    {/* Title */}
    <p className="lg:bg-white lg:mt-[2vw] lg:ml-[37vw] lg:text-4xl lg:text-[#c2410c] lg:text-center lg:font-bold lg:uppercase lg:tracking-wide lg:px-8 lg:py-3 lg:rounded-lg lg:shadow-lg lg:inline-block">
        Top Brands
    </p>

    {/* Brand Grid */}
    <div className="lg:container lg:mx-auto lg:px-4 lg:py-12">
        <div className="lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
                <img src={img7} alt="fender" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
            </div>
            <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
                <img src={img8} alt="gibson" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
            </div>
            <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
                <img src={img9} alt="roland" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
            </div>
            <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
                <img src={img10} alt="yamaha" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
            </div>
            <div className="lg:bg-white lg:shadow-xl lg:rounded-xl  lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
                <img src={img11} alt="taylor" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
            </div>
            <div className="lg:bg-white lg:shadow-xl lg:rounded-xl lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
                <img src={img12} alt="gretsch" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
            </div>
            <div className="lg:bg-white lg:shadow-xl lg:rounded-xl  lg:p-6 lg:flex lg:justify-center lg:items-center lg:transition-transform lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:duration-300">
                <img src={img13} alt="epiphore" className="lg:w-32 lg:h-20 lg:object-contain lg:grayscale lg:hover:grayscale-0 lg:transition-all lg:duration-300"/>
            </div>
        </div>
    </div>
</div>



    

    </>
    )

    
}
export default Home;
