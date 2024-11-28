import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ourpartnerstext from "./Ourpartnerstext";
import './partners.css';
import { Email, Phone } from '@mui/icons-material';

function Partners() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
                               
                                <div className="partners-information">
                                <div className="partners-img">
                                 
                                        <img src={d.image} alt="/"  />
                               
                                </div>
                                <div className="partners-line">
                                <div className="partners-info">
                                    <h5 className="partners-name">{d.name} </h5>
                                    <span className="partners-post">{d.post} </span>
                                </div>
                             
                                <div className="partners-address"> 
                                  <span className="partners-phone">Phone: {d.Phone}</span> 
                                  <span className="partners-email">Email: {d.Email}</span> 
                                  <span className="partners-address1">Address: {d.address}</span>
                                     </div>
                                     </div>
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
        address: "70A Donald drive Romford RM6 5DU",
        Phone: "lorem ipsum",
        Email: "lorem ipsum",
       
    },
        
    {
        name: "Manoj Kumar",
        post: "Operational manager Germany",
        image: "./Manoj Kumar.jpg",
        address: "Stolper Str 4B Hamburg 22145",
        Phone: "01732055157",
        Email: "Kumarmanojk881@gmail.com",  
    },
    
]


export default Partners;