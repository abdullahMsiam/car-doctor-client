import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex items-center bg-slate-700 bg-opacity-50 p-3 space-y-10 w-full h-full">
                        <div className='w-1/2'>
                            <h2 className="text-6xl font-bold text-white" > Are vai koto kisu</h2>
                            <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos cum laboriosam quibusdam aut animi fugit quisquam exercitationem obcaecati ullam.</p>
                            <button className="btn btn-success">Success</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle bg-red-400 mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-red-400 mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-red-400 mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-red-400 mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;