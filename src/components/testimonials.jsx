import { useState, useEffect } from "react";
import { loader } from "../utils/fetchReviewImgs";

const TestimonialCard = ({ name, role, text, stars, avatar }) => (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-50 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-visyon-light">
            <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
            />
        </div>
        <h4 className="font-bold text-visyon-dark">{name}</h4>
        <span className="text-xs text-visyon-gold font-bold uppercase tracking-widest mb-4">
            {role}
        </span>
        <div className="flex space-x-1 mb-6">
            {[...Array(stars)].map((_, i) => (
                <span key={i} className="text-visyon-gold text-sm">
                    ★
                </span>
            ))}
        </div>
        <p className="text-visyon-gray italic text-sm leading-relaxed tracking-wide">
            "{text}"
        </p>
    </div>
);

const TestimonialSection = () => {
    const [userImgs, setImgs] = useState([]);

    const reviews = [
        {
            name: "Jake Miller",
            role: "Freelancer",
            stars: 5,
            avatar: userImgs[0],
            text: "I've never had an eye exam that felt this thorough. They helped me find frames that actually fit my face shape!"
        },
        {
            name: "Randy Wong",
            role: "Doctor",
            stars: 5,
            avatar: userImgs[1],
            text: "The clinical staff is top-notch. As a doctor myself, I appreciate their attention to detail and modern equipment."
        },
        {
            name: "Raymond Marge",
            role: "Veteran",
            stars: 5,
            avatar: userImgs[2],
            text: "Excellent service and a great selection of high-end frames. The Lasik consultation was incredibly informative."
        }
    ];

    useEffect(() => {
        const fetchImgs = async () => {
            const imgs = await loader();
            setImgs(imgs);
        };
        fetchImgs();
    }, []);

    return (
        <section className="bg-visyon-light py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-visyon-gold font-bold text-xs tracking-widest uppercase">
                        Client Testimonial
                    </span>
                    <h2 className="text-4xl font-serif text-visyon-dark mt-2">
                        What Our Client Says
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <TestimonialCard key={i} {...r} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
