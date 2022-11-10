import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="">
            <div className="flex bg-[#045e73] pt-12 px-10">
                <div className="w-full flex flex-col sm:w-1/2 md:w-1/3 px-8 m-8">
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Get A Quote</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Contact Us</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>1st Time Shipping</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Car Shipping Checklist</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Auto Transport Resources</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>FAQ</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>About Us</Link>
                </div>

                <div className="w-full flex flex-col sm:w-1/2 md:w-1/3 px-8 m-8">
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Advertise With Us</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Auto Movers</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Auto Transport</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Car Movers</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Car Shipping</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Car Transport</Link>
                </div>

                <div className="w-full flex flex-col sm:w-1/2 md:w-1/3 px-8 m-8">
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Vehicle Shipping</Link>
                    <Link className="hover:underline text-lg text-white p-1" to={'/'}>Privacy Statement</Link>
                    <Link className="text-white p-1 pt-12 text-lg font-bold italic" to={'/'}>Part Of <span className="text-[#8dc63f]">Carriersoft</span></Link>
                </div>
            </div>

            <div className="bg-[#023d4b] p-4 flex justify-around">
                <div className="w-[80%] text-white text-lg text-center md:text-left">© 2022 All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer;