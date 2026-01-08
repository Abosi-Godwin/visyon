import { FaClock } from "react-icons/fa6";

const BookingSection = () => {
    const hours = [
        { day: "Monday - Friday", time: "08.00 AM - 04.00 PM" },
        { day: "Saturday", time: "10.00 AM - 19.00 PM" },
        { day: "Sunday & Holidays", time: "Closed", closed: true }
    ];

    return (
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image Wrapper */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/old doctor(1).jpg"
                    alt="Client with glasses"
                    className="w-full h-full object-cover grayscale-[30%]"
                />
                {/* Subtle overlay for text readability on mobile */}
                <div className="absolute inset-0 bg-black/10 lg:bg-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-16 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side Content */}
                    <div className="bg-white/90 backdrop-blur-sm lg:bg-transparent p-8 lg:p-0 rounded-sm">
                        <span className="text-visyon-gold font-bold text-xs tracking-widest uppercase">
                            Book Appointment
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-visyon-dark mt-2 mb-6">
                            Plan Your Visit Now
                        </h2>
                        <p className="text-visyon-gray mb-8 max-w-md leading-relaxed">
                            Your vision shouldn't wait. Schedule a comprehensive
                            exam today and experience the difference of
                            personalized eye care in a modern, relaxing
                            environment.
                        </p>
                        <button className="bg-visyon-gold text-white px-10 py-4 font-semibold hover:bg-[#8e7555] transition shadow-lg">
                            Book Now
                        </button>
                    </div>
 
                    <div className="mt-12 lg:mt-0 lg:ml-auto w-full max-w-md bg-white shadow-2xl overflow-hidden">
                        <div className="p-8 lg:p-12">
                            <div className="flex items-center space-x-3 mb-8">
                                <span className="text-2xl text-visyon-gold">
                                    <FaClock />
                                </span>
                                <h3 className="text-2xl font-serif text-visyon-dark">
                                    Opening Hours
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {hours.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0"
                                    >
                                        <span className="text-sm font-semibold text-visyon-dark uppercase tracking-tighter">
                                            {item.day}
                                        </span>
                                        <span
                                            className={`text-sm ${
                                                item.closed
                                                    ? "text-red-500 font-bold"
                                                    : "text-visyon-gray"
                                            }`}
                                        >
                                            {item.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
