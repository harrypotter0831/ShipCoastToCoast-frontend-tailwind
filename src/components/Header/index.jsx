import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import logoSm from "../../assets/Logo--sm.svg";
import logoXs from "../../assets/Logo--xs.svg";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className="flex justify-around">
            <div className={`max-w-[1320px] w-full flex xl:items-center justify-between flex-col xl:flex-row px-4 py-1 overflow-hidden transition-all xl:h-auto ${menuToggle ? 'h-[calc(70px_+_0.5rem)]' : 'h-[calc(70px_+_248px_+_0.5rem)]'}`}>
                <div className="flex flex-col xl:flex-row">
                    <div className="flex w-full xl:w-auto justify-between items-center mr-4 h-[70px]">
                        <Link to={'/'}>
                            <div className="w-[70px] sm:w-[250px] md:w-[300px]">
                                <img className="hidden md:block w-full" src={logo} alt="logo" />
                                <img className="hidden sm:block md:hidden w-full" src={logoSm} alt="logo" />
                                <img className="block sm:hidden w-full" src={logoXs} alt="logo" />
                            </div>
                        </Link>
                        <button className="xl:hidden cursor-pointer border border-solid border-[rgba(0,0,0,.1)] px-2 py-1.5">
                            <div className="w-[30px] h-[30px] bg-menu-btn bg-[100%_100%]" onClick={() => setMenuToggle(!menuToggle)}></div>
                        </button>
                    </div>
                    <div className="flex xl:items-center flex-col xl:flex-row py-2">
                        <Link className="transition-all text-lg py-2 mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Car Shipping Services</Link>
                        <Link className="transition-all text-lg py-2 mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Specialty shipping</Link>
                        <Link className="transition-all text-lg py-2 mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Auto transport tips</Link>
                        <Link className="transition-all text-lg py-2 mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Company info</Link>
                    </div>
                </div>
                <div className="flex pb-4">
                    <a className="text-[#27aae1] text-4xl" href={'tel:tel:886-396-1467'}>886-396-1467</a>
                </div>
            </div>
        </div>
    )
}

export default Header;