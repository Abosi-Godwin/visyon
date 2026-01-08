const Hero = () => {
    return (
        <section className="bg-visyon-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[600px] py-12 lg:py-0">
                    {/* Text Content */}
                    <div className="z-10 text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-4xl md:text-6xl font-serif text-visyon-dark leading-tight mb-6">
                            Whatever You See <br className="hidden md:block" />
                            Can Inspire You
                        </h1>
                        <p className="text-visyon-gray max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                        Premium eye care tailored to your lifestyle. We combine clinical excellence with a passion for style to help you see the world clearly and beautifully.
                        </p>
                        <button className="bg-visyon-gold text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Image Content */}
                    <div
                        className="relative order-1 lg:order-2 h-[300px] pb-10
                    lg:h-full flex justify-end "
                    >
                        <img
                            src="/hero1.jpg"
                            alt="Eye Specialist"
                            className="w-full h-full object-cover md:w-auto lg:object-right scale-125 lg:scale-110 origin-bottom lg:origin-right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
