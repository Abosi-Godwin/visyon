import { FaUserDoctor, FaSackDollar, FaToolbox } from "react-icons/fa6";
import { MdBiotech } from "react-icons/md";
//const icons = []
const WhyChooseUs = () => {
    const stats = [
        { label: "Satisfied Customers", value: 92 },
        { label: "Expert Staff", value: 77 },
        { label: "Quick Procedure", value: 87 }
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Header Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <span className="text-visyon-gold font-bold text-xs tracking-widest uppercase">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl font-serif text-visyon-dark mt-2 mb-6">
                            Eye Care Solution Since 2007
                        </h2>
                        <img
                            src="/old doctor(2).jpg"
                            alt="Expert"
                            className="w-full h-80 object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-between pt-8 lg:pt-20">
                        <p className="text-visyon-gray mb-10 leading-loose">
                            With nearly two decades of clinical experience,
                            we’ve refined the art of the eye exam. We use
                            high-resolution imaging and a patient-first approach
                            to ensure your comfort at every step.
                        </p>
                        {/* 2x2 Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Experienced Doctor",
                                    icon: FaUserDoctor,
                                    desc: "Board-certified optometrists with a focus on patient education."
                                },
                                {
                                    title: "High Quality Frame",
                                    icon: FaToolbox,
                                    desc: "A curated collection of designer and independent labels."
                                },
                                {
                                    title: "Affordable Price",
                                    icon: FaSackDollar,
                                    desc: "Transparent pricing with flexible insurance coordination."
                                },
                                {
                                    title: "Latest Technology",
                                    icon: MdBiotech,
                                    desc: "State-of-the-art diagnostic equipment for  100% accuracy."
                                }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="bg-visyon-light p-3 text-2xl">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-visyon-dark">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-visyon-gray mt-1">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Stats & Image Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-visyon-dark uppercase text-xs tracking-tighter">
                                        {stat.label}
                                    </span>
                                    <span className="text-visyon-gray text-xs">
                                        {stat.value}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-100 h-1.5">
                                    <div
                                        className="bg-visyon-gold h-full transition-all duration-1000"
                                        style={{ width: `${stat.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="grid grid-cols-2 gap-4 pt-4 text-center">
                            <div className="bg-visyon-light py-8">
                                <span className="block text-5xl font-serif text-visyon-gold mb-2">
                                    17
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-visyon-dark">
                                    Years of Experience
                                </span>
                            </div>
                            <div className="bg-visyon-light py-8">
                                <span className="block text-5xl font-serif text-visyon-gold mb-2">
                                    500+
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-visyon-dark">
                                    Unique Clients
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[500px]">
                        <img
                            src="/eyecare.jpg"
                            alt="Product variety"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
