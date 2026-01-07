import ServiceBar from "../components/services";
import AboutSection from "../components/about";
import ServicesSection from "../components/serviceCard";
import WhyChooseUs from "../components/chooseUs";
import BookingSection from "../components/bookings";
import TestimonialSection from "../components/testimonials";
import ContactSection from "../components/contact";
import BlogSection from "../components/blogs";

const Main = () => {
    return (
        <>
            <ServiceBar />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUs />
            <BookingSection />
            <TestimonialSection />
            <ContactSection />
            <BlogSection />
        </>
    );
};

export default Main;
