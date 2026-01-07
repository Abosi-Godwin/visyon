import { FaPhone, FaMessage, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
    const info = [
        { label: "Phone Number", val: "777 564 7886", icon: FaPhone },
        { label: "Email Address", val: "email@support.com", icon: FaEnvelope },
        { label: "Whatsapp Number", val: "082 543 761 7293", icon: FaMessage },
        {
            label: "Our Location",
            val: "Jl. Gadang no 313 Malang",
            icon: FaLocationDot
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                    <h2 className="text-4xl font-serif text-visyon-dark mb-4">
                        Get In Touch With Us
                    </h2>
                    <p className="text-visyon-gray mb-8">
                        Proin ac dolor eget nisl auctor volutpat. Donec a
                        ullamcorper ligula.
                    </p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border border-gray-200 p-4 focus:outline-visyon-gold transition"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-200 p-4 focus:outline-visyon-gold transition"
                        />
                        <textarea
                            placeholder="Comment"
                            rows="5"
                            className="w-full border border-gray-200 p-4 focus:outline-visyon-gold transition"
                        ></textarea>
                        <button className="bg-visyon-gold text-white px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-visyon-dark transition">
                            Send Now
                        </button>
                    </form>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                    {info.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white p-10 flex flex-col items-center text-center"
                            >
                                <span className="text-3xl text-visyon-gold mb-4">
                                    <Icon/>
                                </span>
                                <h4 className="font-bold text-visyon-dark mb-2">
                                    {item.label}
                                </h4>
                                <p className="text-sm text-visyon-gray">
                                    {item.val}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
