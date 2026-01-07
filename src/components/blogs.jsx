const BlogCard = ({ date, month, title, image }) => (
    <div className="flex flex-col group cursor-pointer">
        <div className="relative mb-6 overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Date Badge */}
            <div className="absolute bottom-0 left-0 bg-visyon-gold text-white p-3 text-center min-w-[60px]">
                <span className="block text-xl font-bold leading-none">
                    {date}
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-tighter">
                    {month}
                </span>
            </div>
        </div>
        <h3 className="text-xl font-serif text-visyon-dark mb-3 hover:text-visyon-gold transition">
            {title}
        </h3>
        <p className="text-visyon-gray text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
            efficitur felis...
        </p>
        <a
            href="#"
            className="text-visyon-gold font-bold text-[10px] uppercase tracking-widest hover:underline"
        >
            Read More
        </a>
    </div>
);

const BlogSection = () => {
    const blogs = [
        {
            date: "13",
            month: "Jul",
            title: "Never Miss The Best Things",
            image: "/okay(4).jpg"
        },
        {
            date: "13",
            month: "Jul",
            title: "Your Face Is Your Art",
            image: "/okay(5).jpg"
        },
        {
            date: "13",
            month: "Jul",
            title: "Style Is What You Wear",
            image: "/okay(6).jpg"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-24 border-t border-gray-100">
            <div className="text-center mb-16">
                <span className="text-visyon-gold font-bold text-xs tracking-widest uppercase">
                    Our Blog
                </span>
                <h2 className="text-4xl font-serif text-visyon-dark mt-2">
                    Story Around Us
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {blogs.map((blog, i) => (
                    <BlogCard key={i} {...blog} />
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
