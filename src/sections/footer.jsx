import {
    FaFacebook,
    FaSquareTwitter,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa6";

const socials = [FaFacebook, FaSquareTwitter, FaInstagram, FaLinkedin];

const Footer = () => {
    return (
        <footer className="bg-visyon-light pt-20 pb-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <span className="text-2xl font-bold tracking-tighter text-visyon-dark">
                            👁️ VISYON
                        </span>
                        <p className="text-visyon-gray text-sm leading-relaxed">
                            Proin vitae arcu elementum, condimentum elit in.
                            Aenean eu magna a orci ullamcorper.
                        </p>
                    </div>

                    {/* About Column */}
                    <div>
                        <h4 className="font-bold text-visyon-dark mb-6">
                            About Us
                        </h4>
                        <ul className="space-y-4 text-sm text-visyon-gray">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-visyon-gold transition"
                                >
                                    Optometrist
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-visyon-gold transition"
                                >
                                    Gallery
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Service Column */}
                    <div>
                        <h4 className="font-bold text-visyon-dark mb-6">
                            Service
                        </h4>
                        <ul className="space-y-4 text-sm text-visyon-gray">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-visyon-gold transition"
                                >
                                    Learning
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-visyon-gold transition"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-visyon-gold transition"
                                >
                                    Prescription
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h4 className="font-bold text-visyon-dark mb-6">
                            Find Us
                        </h4>
                        <div className="flex space-x-4">
                            {socials.map(social => {
                                const Icon = social;

                                return (
                                    <div
                                        key={social}
                                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-visyon-gray hover:bg-visyon-gold hover:text-white transition cursor-pointer uppercase text-[10px] font-bold"
                                    >
                                        <h1 className="text-xl">
                                            <Icon />
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-xs text-visyon-gray uppercase tracking-widest">
                        Copyright © 2026 Visyon | Powered by Visyon
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
