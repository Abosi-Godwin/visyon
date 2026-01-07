const AboutSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 
                <div className="relative h-[400px] md:h-[500px]">
                  
                    <div className="absolute top-0 left-0 w-4/5 h-[80%] overflow-hidden rounded-sm shadow-xl">
                        <img
                            src="/eyecaredoc.jpg"
                            alt="Optometrist"
                            className="w-full h-full object-cover"
                        />
                    </div>

                   
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-8 border-white rounded-sm shadow-2xl overflow-hidden">
                        <img
                            src="/eyecarelens.jpg"
                            alt="Holding Glasses"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-6">
                    <span className="text-visyon-gold font-bold text-sm tracking-widest uppercase">
                        About Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-visyon-dark">
                        Style Yourself With The Best Lens
                    </h2>
                    <p className="text-visyon-gray leading-relaxed">
                        Etiam interdum consequat risus, a pellentesque quam
                        eleifend finibus. Nunc sed mi metus. Maecenas consequat,
                        tortor et eleifend iaculis, nisi orci interdum libero.
                    </p>
                    <button className="bg-visyon-gold text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition shadow-md">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
