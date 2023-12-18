import React from "react";
import "./Testimonial.css";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/Navigation';

const data = [
  {
    img: "./images/avatar1.jpg",

    clientName: "Sophia Brown",
    review:
      " Working with QASIM has been a fantastic experience. Their work ethic is exemplary, and they consistently deliver high-quality code. What truly sets them apart is their attention to detail. They meticulously ensure that every aspect of the frontend is polished and pixel-perfect. I highly recommend QASIM for any frontend development project. Really appreciative services.",
  },
  {
    img: "./images/avatar2.jpg",

    clientName: "Oliver Martinez",
    review:
      "QASIM is a creative problem solver and an innovative thinker. They have an uncanny ability to come up with unique and  solutions to complex frontend challenges. Their work not only meets our requirements but also adds a touch of creativity.  I'm continually impressed with their ability to push the boundaries of frontend development.",
  },
  {
    img: "./images/avatar3.jpg",

    clientName: "Ethan Anderson",
    review:
      "One of the standout qualities of QASIM's is their strong communication skills and collaborative approach. They actively engage with our design and backend teams to ensure seamless integration and a cohesive user experience. Their ability to work as part of a team.and their commitment to meeting deadlines make them a valuable asset to any project. Really appreciative services.",
  },
  {
    img: "./images/avatar4.jpg",
    clientName: "Emma Davis",
    review:
      "QASIM excels in ensuring that our projects are responsive and compatible with various browsers. They meticulously test and optimize frontend code to provide a flawless user experience across different devices and platforms. Their dedication to delivering a website or application that works seamlessly for all users is truly commendable. Really appreciative services.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ img, clientName, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={img} /> 
                
              </div>
              <h5 className="client__name">{clientName}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
