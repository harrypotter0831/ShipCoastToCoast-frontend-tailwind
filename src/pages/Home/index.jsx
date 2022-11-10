import React from "react";
import Header from "../../components/Header";

import locationIcon from "../../assets/Icons/location.svg";
import dashLineImage from "../../assets/Icons/input-dash-line.svg";

const Home = () => {
    return (
        <div className="hoem-container flex flex-col w-full">
            <Header />
            <div className="w-full flex flex-col">
                <div className="flex">
                    <div className="flex justify-center flex-col bg-home-image bg-cover py-10 px-[calc(10%)] w-1/2">
                        <h1 className="text-white text-[calc(1.525rem_+_3.3vw)] leading-tight">
                            Instantly Get
                            <br className="hidden md:block" />
                            10 Free Auto
                            <br className="hidden md:block" />
                            Transport
                            <br className="hidden md:block" />
                            Quotes
                        </h1>
                        <p className="text-white text-[calc(1.275rem_+_.3vw)] leading-normal">Our network of reliable auto shipping companies are fully licensed, bonded, and insured to protect your investment and give you peace of mind when you ship your car.
                        </p>
                    </div>
                    <div className="flex flex-col w-1/2 bg-home-gradient p-12">
                        <p className="font-extrabold text-[#045e73] text-lg mb-4">GET YOUR QUOTES: STEP {'3'} OF 3</p>
                        <div className="w-full flex">
                            <span className="rounded-full bg-[#d9d9d9] block h-[9px] w-[30px] mr-4"></span>
                            <span className="rounded-full bg-[#ffffff] block h-[9px] w-[120px] mr-4"></span>
                            <span className="rounded-full bg-[#d9d9d9] block h-[9px] w-[30px]"></span>
                        </div>
                        <h1 className="text-white text-6xl font-light leading-tight md:mb-8 md:mr-8">
                            Tell us where you're going?
                        </h1>

                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <img className="w-[20px] mr-2" src={locationIcon} alt="point" />
                                    <h4 className="font-bold text-xl text-white">Pickup Location</h4>
                                </div>
                                <div className="flex px-[10px] items-start mt-2">
                                    <img className="mr-[calc(10px_+_.5rem)]" src={dashLineImage} alt='dash-line' />
                                    <div className="flex items-center">
                                        <input className="bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Ciry, State" />
                                        <p className="font-bold text-lg text-white mx-3">OR</p>
                                        <input className="bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <img className="w-[20px] mr-2" src={locationIcon} alt="point" />
                                    <h4 className="font-bold text-xl text-white">Dropoff Location</h4>
                                </div>
                                <div className="flex px-[10px] items-start mt-2">
                                    <img className="mr-[calc(10px_+_.5rem)]" src={dashLineImage} alt='dash-line' />
                                    <div className="flex items-center">
                                        <input className="bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Ciry, State" />
                                        <p className="font-bold text-lg text-white mx-3">OR</p>
                                        <input className="bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <img className="w-[20px] mr-2" src={locationIcon} alt="point" />
                                    <h4 className="font-bold text-xl text-white">When</h4>
                                </div>
                                <div className="flex px-[10px] items-start mt-2">
                                    <div className="flex items-center w-5/6 ml-[20px]">
                                        <input className="w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" type='date' placeholder="mm/dd/yyyy" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <button className="rounded-full text-white text-xl font-semibold w-[calc(50%_-_20px)] px-4 py-3 bg-primary transition-all hover:bg-[#045162] disabled:bg-[#6c757d] disabled:cursor-default" disabled>Back</button>
                            <button className="rounded-full text-white text-xl font-semibold w-[calc(50%_-_20px)] px-4 py-3 bg-primary transition-all hover:bg-[#045162]">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;