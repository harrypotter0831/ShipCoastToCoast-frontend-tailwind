import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import locationIcon from "../../assets/Icons/location.svg";
import dashLineImage from "../../assets/Icons/input-dash-line.svg";
import carShippingImage from '../../assets/car.svg';
import rvImage from '../../assets/rv.svg';
import clipboardImage from '../../assets/clipboard.svg';

const Home = () => {
    const [step, setStep] = useState(1);

    const submitHandle = () => {

    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }

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
                    <div className="flex flex-col w-full lg:w-1/2 bg-home-gradient p-6 md:p-12">
                        <p className="font-extrabold text-[#045e73] text-lg mb-4">GET YOUR QUOTES: STEP {'3'} OF 3</p>
                        <div className="w-full flex">
                            <span className={`rounded-full block h-[9px] ${step === 1 ? "bg-[#ffffff] w-[120px]" : "bg-[#d9d9d9] w-[30px]"} mr-4`}></span>
                            <span className={`rounded-full block h-[9px] ${step === 2 ? "bg-[#ffffff] w-[120px]" : "bg-[#d9d9d9] w-[30px]"} mr-4`}></span>
                            <span className={`rounded-full block h-[9px] ${step === 3 ? "bg-[#ffffff] w-[120px]" : "bg-[#d9d9d9] w-[30px]"}`}></span>
                        </div>

                        {
                            step === 1 ? (
                                <>
                                    <h1 className="text-white text-[calc(1.475rem_+_2.7vw)] font-light leading-tight md:mb-8 md:mr-8">
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
                                                <div className="flex flex-col md:flex-row items-center w-full 2xl:w-[70%]">
                                                    <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Ciry, State" />
                                                    <p className="font-bold text-lg text-white mx-3 my-2">OR</p>
                                                    <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Zip Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-start mt-2">
                                                <img className="w-[20px] mr-2" src={locationIcon} alt="point" />
                                                <h4 className="font-bold text-xl text-white">Dropoff Location</h4>
                                            </div>
                                            <div className="flex px-[9px] items-start mt-2">
                                                <img className="mr-[calc(10px_+_.5rem)]" src={dashLineImage} alt='dash-line' />
                                                <div className="flex flex-col md:flex-row items-center w-full 2xl:w-[70%]">
                                                    <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Ciry, State" />
                                                    <p className="font-bold text-lg text-white mx-3 my-2">OR</p>
                                                    <input className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Zip Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-start mt-2">
                                                <img className="w-[20px] mr-2" src={locationIcon} alt="point" />
                                                <h4 className="font-bold text-xl text-white">When</h4>
                                            </div>
                                            <div className="flex px-[9px] items-start mt-2">
                                                <div className="flex items-center ml-[20px] w-full 2xl:w-[70%]">
                                                    <input className="w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" type='date' placeholder="mm/dd/yyyy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : step === 2 ? (
                                <>
                                    <h1 className="text-white text-[calc(1.475rem_+_2.7vw)] font-light leading-tight md:mb-8 md:mr-8">
                                        What kind of vehicle are you shipping?
                                    </h1>

                                    <div className="flex flex-col">
                                        <p className="text-xl font-bold text-white mb-4">Vehicle Details</p>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col w-full md:w-[80%]">
                                                <select className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input appearance-none bg-select-icon bg-no-repeat bg-[length:16px_12px] bg-right-75 mb-4">
                                                    <option className="p-2" value={'Make'}>Make</option>
                                                    <option className="p-2" value={'Acura'}>Acura</option>
                                                    <option className="p-2" value={'Audi'}>Audi</option>
                                                </select>
                                                <select className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input appearance-none bg-select-icon bg-no-repeat bg-[length:16px_12px] bg-right-75 mb-4">
                                                    <option className="p-2" value={'Make'}>Make</option>
                                                    <option className="p-2" value={'Acura'}>Acura</option>
                                                    <option className="p-2" value={'Audi'}>Audi</option>
                                                </select>
                                                <select className="min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input appearance-none bg-select-icon bg-no-repeat bg-[length:16px_12px] bg-right-75 mb-4">
                                                    <option className="p-2" value={'Make'}>Make</option>
                                                    <option className="p-2" value={'Acura'}>Acura</option>
                                                    <option className="p-2" value={'Audi'}>Audi</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col my-6">
                                            <p className="text-xl font-bold text-white mb-4">Is your vehicle running?</p>
                                            <div className="flex">
                                                <div className="flex items-center mr-8">
                                                    <input id="yes" name='vehicle' value={'true'} className="w-[40px] h-[40px] focus:border-[#86b7fe] focus:shadow-input border border-solid border-transparent appearance-none bg-white checked:bg-[#045e73] checked:border-[#045e73]" type='radio' />
                                                    <label className="text-white text-2xl pl-2" for='yes'>Yes</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="no" name='vehicle' value={'false'} className="w-[40px] h-[40px] focus:border-[#86b7fe] focus:shadow-input border border-solid border-transparent appearance-none bg-white checked:bg-[#045e73] checked:border-[#045e73]" type='radio' />
                                                    <label className="text-white text-2xl pl-2" for='no'>No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-white text-[calc(1.475rem_+_2.7vw)] font-light leading-tight md:mb-8 md:mr-8">
                                        What's the best way to reach you?
                                    </h1>

                                    <div className="flex flex-col">
                                        <p className="text-xl font-bold text-white mb-4">Vehicle Details</p>
                                        <div className="flex flex-col w-full md:w-[90%]">
                                            <div className="mb-4 flex justify-between">
                                                <input className="min-w-[100px] w-[calc(50%_-_0.5rem)] bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Full Name" />
                                                <input className="min-w-[100px] w-[calc(50%_-_0.5rem)] bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Phone Number" />
                                            </div>
                                            <input className="mb-4 min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Email Address" />
                                            <input className="mb-4 min-w-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Confirm Email Address" />
                                            <textarea className="mb-4 min-w-[100px] h-[100px] w-full bg-white text-[#212529] p-3 border border-solid border-[#ced4da] transition-colors focus:border-[#86b7fe] focus:shadow-input" placeholder="Comments"></textarea>
                                        </div>

                                        <div className="flex flex-col my-6">
                                            <div className="flex">
                                                <div className="flex items-center mr-8">
                                                    <input id="interseting" name='vehicle' value={'true'} className="w-[40px] h-[40px] focus:border-[#86b7fe] focus:shadow-input border border-solid border-transparent appearance-none bg-white checked:bg-[#045e73] checked:border-[#045e73]" type='checkbox' />
                                                    <label className="text-white text-xl font-bold pl-2" for='interseting'>I am also interested in household moving.</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ReCAPTCHA
                                        sitekey="Your client site key"
                                        onChange={onChange}
                                    />
                                </>
                            )
                        }

                        <div className="flex justify-between mt-8 2xl:w-[75%]">
                            <button className="rounded-full text-white text-xl font-semibold w-[calc(50%_-_20px)] px-4 py-3 bg-[#6c757d] transition-all hover:bg-[#5c636a] disabled:bg-[#6c757d] disabled:cursor-default" disabled={step === 1 ? true : false} onClick={() => setStep(step - 1)} >Back</button>
                            {
                                step !== 3 && <button className="rounded-full text-white text-xl font-semibold w-[calc(50%_-_20px)] px-4 py-3 bg-primary transition-all hover:bg-[#045162]" onClick={() => setStep(step + 1)}>Continue</button>
                            }
                            {
                                step === 3 && <button className="rounded-full text-white text-xl font-semibold w-[calc(50%_-_20px)] px-4 py-3 bg-primary transition-all hover:bg-[#045162]" onClick={() => submitHandle()}>Submit</button>
                            }
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
        </div >
    )
}

export default Home;