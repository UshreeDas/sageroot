import react from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ourpartnerstext from "./Ourpartnerstext";
import './partners.css';

function Partners() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="partners-container">
            <Ourpartnerstext />
            <div className="partners-data">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="partners-card">
                                <div className="partners-img">
                                    <center>
                                        <img src={d.image} alt="/"  />
                                    </center>
                                </div>
                                <div className="partners-info">
                                    <h5 className="partners-name">{d.name} </h5>
                                    <span className="partners-post">{d.post} </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
        </div>
    )
}

const data = [
    {
        name: "Arghya biswas",
        post: "Operational manager UK",
        image: "./partners/ARGHYA BISWAS.jpeg",
    },
        
    {
        name: "Manoj Kumar",
        post: "Operational manager London",
        image: "./Manoj Kumar.jpg",
    },
    
]


export default Partners;