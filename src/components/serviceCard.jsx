const ServiceCard = ({ image, title, description }) => (
    <div className="flex flex-col group cursor-pointer">
        <div className="overflow-hidden mb-6">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
        </div>
        <h3 className="text-2xl font-serif text-visyon-dark mb-3 group-hover:text-visyon-gold transition">
            {title}
        </h3>
        <p className="text-visyon-gray text-sm mb-4 leading-relaxed line-clamp-3">
            {description}
        </p>
        <a
            href="#"
            className="text-visyon-gold font-bold text-xs uppercase tracking-widest border-b border-transparent hover:border-visyon-gold inline-block w-max transition-all"
        >
            Read More
        </a>
    </div>
);

const ServicesSection = () => {
    const services = [
        {
            title: "Visual Acuity Test",
            image: "/acuity-test.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        },
        {
            title: "Eye Check Up",
            image: "/eye-check.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        },
        {
            title: "Lasik Eye Surgery",
            image: "/lasik.jpg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-24 border-t border-gray-100">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-visyon-gold font-bold text-xs tracking-[0.2em] uppercase">
                    Our Service
                </span>
                <h2 className="text-4xl font-serif text-visyon-dark mt-2 mb-4">
                    What Can We Do
                </h2>
                <p className="text-visyon-gray">
                    Maecenas magna lacus, dignissim sed erat et, malesuada
                    hendrerit dolor. Nulla facilisi.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <ServiceCard key={i} {...s} />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
