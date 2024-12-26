import React, { useState } from "react";
import "./style.css";

// Import images from the local folder within src
import KenshinImage from './kenshin.png';
import RoyImage from './Roy.png';
import JiraiyaImage from './Jiraiya.png';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "You can die anytime, but living takes true courage.",
            author: "Kenshin Himura, Rurouni Kenshin",
            img: KenshinImage
        },
        {
            quote: `The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.`,
            author: "Roy Mustang, Full Metal Alchemist",
            img: RoyImage
        },
        {
            quote: "Knowing what it feels like to be in pain, is exactly why we try to be kind to others.",
            author: "Jiraiya, Naruto",
            img: JiraiyaImage
        },
    ];

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    return (
        <div
            className="testimonials"
            style={{ backgroundImage: `url(${testimonials[currentIndex].img})`, backgroundSize: 'cover' }}
        >
            <div className="testimonials-content">
                <div className="testimonials-quotes">
                    {testimonials[currentIndex].quote}
                </div>
                <div className="testimonials-author">
                    - {testimonials[currentIndex].author}
                </div>
                <div className="testimonials-nav">
                    <button onClick={handlePrevClick}>Prev</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}
