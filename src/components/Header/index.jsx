import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

const Header = () => {
    return (
        <div className="flex justify-around">
            <div className="w-full flex items-center justify-between px-4 py-6">
                <div className="flex">
                    <Link className="mr-4" to={'/'}>
                        <div className="w-[300px]">
                            <img className="w-full" src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <Link className="transition-all text-lg mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Car Shipping Services</Link>
                        <Link className="transition-all text-lg mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Specialty shipping</Link>
                        <Link className="transition-all text-lg mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Auto transport tips</Link>
                        <Link className="transition-all text-lg mr-4 text-[rgba(0,0,0,.55)] hover:text-[rgba(0,0,0,.7)] font-semibold" to={'/'}>Company info</Link>
                    </div>
                </div>
                <div className="flex">
                    <a className="text-[#27aae1] text-4xl" href={'tel:tel:886-396-1467'}>886-396-1467</a>
                </div>
            </div>
        </div>
    )
}

export default Header;