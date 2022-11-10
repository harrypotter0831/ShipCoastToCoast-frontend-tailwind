import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import locationIcon from "../../assets/Icons/location.svg";
import dashLineImage from "../../assets/Icons/input-dash-line.svg";
import carShippingImage from '../../assets/car.svg';
import rvImage from '../../assets/rv.svg';
import clipboardImage from '../../assets/clipboard.svg';

const Home = () => {
    return (
        <div className="hoem-container flex flex-col w-full">
            <Header />

            <div className="w-full flex flex-col">
                <div className="flex flex-wrap">
                    <div className="flex justify-center flex-col bg-home-image bg-cover py-10 px-[calc(10%)] w-full lg:w-1/2">
                        <h1 className="text-white text-[calc(1.525rem_+_3.3vw)] leading-tight">
                            Instantly Get
                            <br className="hidden lg:block" />
                            10 Free Auto
                            <br className="hidden lg:block" />
                            Transport
                            <br className="hidden lg:block" />
                            Quotes
                        </h1>
                        <p className="text-white text-[calc(1.275rem_+_.3vw)] leading-normal">Our network of reliable auto shipping companies are fully licensed, bonded, and insured to protect your investment and give you peace of mind when you ship your car.
                        </p>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 bg-home-gradient p-12">
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
                                <div className="flex px-[9px] items-start mt-2">
                                    <img className="mr-[calc(10px_+_.5rem)]" src={dashLineImage} alt='dash-line' />
                                    <div className="flex items-center w-full">
                                        <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Ciry, State" />
                                        <p className="font-bold text-lg text-white mx-3">OR</p>
                                        <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <img className="w-[20px] mr-2" src={locationIcon} alt="point" />
                                    <h4 className="font-bold text-xl text-white">Dropoff Location</h4>
                                </div>
                                <div className="flex px-[9px] items-start mt-2">
                                    <img className="mr-[calc(10px_+_.5rem)]" src={dashLineImage} alt='dash-line' />
                                    <div className="flex items-center w-full">
                                        <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Ciry, State" />
                                        <p className="font-bold text-lg text-white mx-3">OR</p>
                                        <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <img className="w-[20px] mr-2" src={locationIcon} alt="point" />
                                    <h4 className="font-bold text-xl text-white">When</h4>
                                </div>
                                <div className="flex px-[9px] items-start mt-2">
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

                <div className="flex flex-col items-center py-12">
                    <h1 className="text-primary text-[4rem] font-bold py-4">Our Services</h1>

                    <div className="flex flex-wrap w-full justify-center items-stretch">
                        <div className="bg-[#f8f8f8] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[400px] mx-[20px] shadow">
                            <div className="bg-white flex justify-around items-center aspect-[7/3]">
                                <img className="w-[130px]" src={carShippingImage} alt='car shipping' />
                            </div>
                            <h2 className="text-[calc(1.325rem_+_.9vw)] font-medium bg-[#f0f0f0] text-primary p-5 text-center">Car Shipping</h2>
                            <div className="flex flex-col items-center px-2 py-4 h-">
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Auto Transport</Link>
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Classic Car Shipping</Link>
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Enclosed Auto Transport</Link>
                            </div>
                        </div>

                        <div className="bg-[#f8f8f8] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[400px] mx-[20px] shadow mt-8 md:mt-0">
                            <div className="bg-white flex justify-around items-center aspect-[7/3]">
                                <img className="w-[127px]" src={rvImage} alt='specialty shipping' />
                            </div>
                            <h2 className="text-[calc(1.325rem_+_.9vw)] font-medium bg-[#f0f0f0] text-primary p-5 text-center">Specialty Shipping</h2>
                            <div className="flex flex-col items-center px-2 py-4">
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Rv Transport</Link>
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Boat Transport</Link>
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Motorcycle / ATV Shipping</Link>
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Inoperable Vehicle Transport</Link>
                            </div>
                        </div>

                        <div className="bg-[#f8f8f8] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[400px] mx-[20px] shadow mt-8 lg:mt-0">
                            <div className="bg-white flex justify-around items-center aspect-[7/3]">
                                <img className="w-[64px]" src={clipboardImage} alt='car shipping' />
                            </div>
                            <h2 className="text-[calc(1.325rem_+_.9vw)] font-medium bg-[#f0f0f0] text-primary p-5 text-center">Auto Transport Tips</h2>
                            <div className="flex flex-col items-center px-2 py-4">
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>FAQ's</Link>
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Car Shipping Checklist</Link>
                                <Link className="text-lg text-[#707070] hover:underline" to={'/'}>Transport Insurance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;