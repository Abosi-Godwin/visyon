import { useState } from "react";
import { FaBars,FaXmark } from "react-icons/fa6";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold tracking-tighter text-visyon-dark">
                            👁️ VISYON
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {["Home", "About Us", "Pages", "Contact Us"].map(
                            link => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-sm font-medium hover:text-visyon-gold transition"
                                >
                                    {link}
                                </a>
                            )
                        )}
                        <button className="bg-[#D1C4B3] px-6 py-2 text-sm font-semibold rounded-sm hover:bg-visyon-gold transition">
                            Make Appointment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-visyon-dark text-xl"
                        >
                            {isOpen ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t px-4 py-4 space-y-2">
                    {["Home", "About Us", "Pages", "Contact Us"].map(link => (
                        <a
                            key={link}
                            href="#"
                            className="block py-2 text-base font-medium"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
export default Navbar;
