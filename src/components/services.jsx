import {
    FaGlasses,
    FaEye,
    FaHeartCircleCheck,
    FaShield
} from "react-icons/fa6";
import { GiEyeShield } from "react-icons/gi";

const ServiceBar = () => {
    const services = [
        {
            title: "Prescription Glasses",
            desc: "Comprehensive exams using state-of-the-art technology for a precise look at your optical health.",
            icon: FaGlasses
        },
        {
            title: "Contact Lens",
            desc: "Experience comfort and clarity with our wide range of daily and monthly contact lens options.",
            icon: FaEye
        },
        {
            title: "Eye Care",
            desc: "Advanced medical screenings to ensure your eyes stay healthy and vibrant for years to come.",
            icon: GiEyeShield
        },
        {
            title: "Vision Check",
            desc: "Comprehensive exams using  state-of-the-art technology for a precise look at your optical health.",
            icon: FaHeartCircleCheck
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition">
                                <span className="text-4xl">
                                    <Icon />
                                </span>
                            </div>
                            <h3 className="text-visyon-dark font-semibold text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-visyon-gray text-sm px-4">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceBar;
