import React from "react";

const AboutHero = () => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-16">
      
      {/* Content */}
      <div className="w-full px-6 md:px-12">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Empowering Better Health at Home
        </h1>

        {/* Mission */}
        <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          To make quality healthcare products accessible, affordable, and reliable for every household.
          We are committed to helping individuals and families take control of their health with ease,
          confidence, and care—right from the comfort of home.
        </p>

        {/* Vision */}
        <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
        <p className="text-gray-600 mb-10 leading-relaxed">
          To become a trusted name in home healthcare by simplifying the way people care for themselves
          and their loved ones—empowering healthier lives through innovation, compassion, and convenience.
        </p>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800">120+</h2>
            <p className="text-gray-500 text-sm mt-1">Years of Experience</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800">100M</h2>
            <p className="text-gray-500 text-sm mt-1">Orders Delivered Safely</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800">100K+</h2>
            <p className="text-gray-500 text-sm mt-1">Verified 5-Star Reviews</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800">99%</h2>
            <p className="text-gray-500 text-sm mt-1">Customer Satisfaction Rate</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
