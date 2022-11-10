import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

const Header = () => {
    return (
        <div className="flex justify-around">
            <div className="flex container">
                <div className="flex">
                    <Link to={'/'}>
                        <div className="w-[300px] mr-2">
                            <img className="w-full" src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <Link to={'/'}></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;