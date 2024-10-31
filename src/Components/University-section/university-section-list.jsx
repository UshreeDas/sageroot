import React, {useState} from "react";
import './university-section.css';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const universityList = [
    {
        'id': 1,
        'image': "./university logo & picture/Anglia Ruskin University/Anglia_Ruskin_University_image.jpeg",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/Anglia%20Ruskin%20University/Anglia_Ruskin_University_image_logo.png?raw=true",
        'universityName': 'Anglia Ruskin University',
        'countryName': 'UK'
    },
    {
        'id': 2,
        'image': "./university logo & picture/UCL/UCL.jpg",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/UCL/UCL%20LOGO.png?raw=true",
        'universityName': 'University College London',
        'countryName': 'UK'
    },
    {
        'id': 3,
        'image': "./university logo & picture/University of Bedfordshire/az-university-of-bedfordshire-luton-campus-1.jpg",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/University%20of%20Bedfordshire/Bedforshire%20logo.png?raw=true",
        'universityName': 'University of Bedfordshire',
        'countryName': 'UK'
    },
    {
        'id': 4,
        'image': "./university logo & picture/University%20of%20Greenwich/gre.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Greenwich/uni%20logo.png?raw=true",
        'universityName': 'University of Greenwich',
        'countryName': 'UK'
    },
    {
        'id': 5,
        'universityName': 'University of Suffolk',
        'image': "./university%20logo%20&%20picture/University%20of%20Suffolk/UoS%20image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Suffolk/University_of_Suffolk_Logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 6,
        'universityName': 'University of Ulster',
        'image': "./university%20logo%20&%20picture/University%20of%20Ulster/university_of_ulster_image.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Ulster/university_of_ulster_icon.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 7,
        'universityName': 'Aberystwyth university',
        'image': "./university%20logo%20&%20picture/aberystwyth%20university/aberystwyth_university_image.jpg?raw=true",
        'flag': "https://raw.githubusercontent.com/DMMPrice/sageroot-images/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20%26%20picture/aberystwyth%20university/aberystwyth_university_logo.svg",
        'countryName': 'UK'
    },
    {
        'id': 8,
        'universityName': 'Alliance Manchester Business School',
        'image': "./university%20logo%20&%20picture/alliance%20manchester%20business%20school/alliance_manchester_business_school_image.jpeg?raw=true",
        "flag": "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/alliance%20manchester%20business%20school/alliance_manchester_business_school%20_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 9,
        'universityName': 'Amity University London',
        'image': "./university%20logo%20&%20picture/amity%20university%20(IN)%20london/amity_university(IN)_london%20image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/amity%20university%20(IN)%20london/amity_university_(IN)_london_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 10,
        'universityName': 'A A School of Architecture',
        'image': "./university%20logo%20&%20picture/architectural%20association%20school%20of%20architecture/architectural_association_school_of_architecture_image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/architectural%20association%20school%20of%20architecture/architectural_association_school_of_architecture_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 11,
        'universityName': 'Arts University Bournemouth',
        'image': "./university%20logo%20&%20picture/arts%20university%20bournemouth/arts_university_bournemouth_image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/arts%20university%20bournemouth/arts_university%20bournemouth_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 12,
        'universityName': 'Aston University',
        'image': "./university%20logo%20&%20picture/aston%20university/aston_university_images.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/aston%20university/aston_university_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 13,
        'universityName': 'Bath Spa University',
        'image': "./university%20logo%20&%20picture/bath%20spa%20university/bath_spa%20university_image.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/bath%20spa%20university/bath_spa%20university_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 14,
        'universityName': 'Bermingham City University',
        'image': "./university logo & picture/bermingham city universitry/bermingham_city__universitry_image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 15,
        'universityName': 'Birkbeck University of London',
        'image': "./university logo & picture/birkbeck university of london/birkbeck_university_of_london_image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 16,
        'universityName': 'Bournemouth University',
        'image': "./university logo & picture/bournemouth university/bournemouth_university_image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 17,
        'universityName': 'BPP University',
        'image': "./university logo & picture/bpp university/bpp_university_image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 18,
        'universityName': 'Brunel University London',
        'image': "./university logo & picture/brunel university london/brunel_university_london_image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 19,
        'universityName': 'Buckinghamshire New University',
        'image': "./university logo & picture/bucks new university/buckinghamshire_new_university_image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 20,
        'universityName': 'Canterbury Christ Church University',
        'image': "./university logo & picture/canterbury christ church university/canterbury_christ_church_university_image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 21,
        'universityName': 'Cardiff Metropolitan University',
        'image': "./university logo & picture/cardiff metropolitan university/cadiff_universiry_logo.jpg",
        'countryName': 'UK'
    },
    {
        'id': 22,
        'universityName': 'Cardiff University',
        'image': "./university logo & picture/cardiff university/cardiff_university_image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 23,
        'universityName': 'City, University of London',
        'image': "./university logo & picture/city university london/city university london image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 24,
        'universityName': 'Coventry University',
        'image': "./university logo & picture/conventry university/conventry university image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 25,
        'universityName': 'De Montfort University',
        'image': "./university logo & picture/de montfort university/de montfort university image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 26,
        'universityName': 'Durham University',
        'image': "./university logo & picture/durham university/durham university image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 27,
        'universityName': 'CASS Business School',
        'image': "./university logo & picture/cass business school/cass_business_school_image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 28,
        'universityName': 'Goldsmiths, University of London',
        'image': "./university logo & picture/goldsmiths university of london/goldsmiths university of london image.png",
        'countryName': 'UK'
    },
    {
        'id': 29,
        'universityName': 'Imperial College London',
        'image': "./university logo & picture/imperial college/imperial college image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 30,
        'universityName': 'Keele University',
        'image': "./university logo & picture/keele university/keele university image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 31,
        'universityName': "King's College London",
        'image': "./university logo & picture/king's college london image/king's college london image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 32,
        'universityName': 'Kingston University',
        'image': "./university logo & picture/kingston university london/kingston university london image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 34,
        'universityName': 'Leisester College',
        'image': "./university logo & picture/leisester college (HND) P60-3 years/leisester college (HND) P60-3 years image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 35,
        'universityName': 'Leeds Trinity University',
        'image': "./university logo & picture/leeds trinity university/leeds trinity university image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 36,
        'universityName': 'Liverpool Hope University',
        'image': "./university logo & picture/liverpool hope university/liverpool hope university image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 37,
        'universityName': 'Liverpool John Moores University',
        'image': "./university logo & picture/liverpool john moores university/liverpool john moores university image.png",
        'countryName': 'UK'
    },
    {
        'id': 38,
        'universityName': 'London Business School',
        'image': "./university logo & picture/london business school/london business school img.jpg",
        'countryName': 'UK'
    },
    {
        'id': 40,
        'universityName': 'London School of Economics and Political Science',
        'image': "./university logo & picture/london scoholl of economics/london scoholl of economics img.jpg",
        'countryName': 'UK'
    },
    {
        'id': 41,
        'universityName': 'London South Bank University',
        'image': "./university logo & picture/london south bank university/london south bank university img.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 44,
        'universityName': 'Middlesex University',
        'image': "./university logo & picture/middlesex university/middlesex university img.jpg",
        'countryName': 'UK'
    },
    {
        'id': 39,
        'universityName': 'Queen Mary University of London',
        'image': "./university logo & picture/queen mary university of london/queen mary university of london img.jpg",
        'countryName': 'UK'
    },
    {
        'id': 42,
        'universityName': 'Richmond University',
        'image': "./university logo & picture/richmond university/richmond-campus.jpg",
        'countryName': 'UK'
    },
    {
        'id': 43,
        'universityName': 'Sheffield University',
        'image': "./university logo & picture/sheffield university/sheffield university.jpg",
        'countryName': 'UK'
    },
    {
        'id': 45,
        'universityName': 'SOAS University of London',
        'image': "./university logo & picture/soas university of london/soas university of london.jpg",
        'countryName': 'UK'
    },
    {
        'id': 46,
        'universityName': 'Solent University Southampton',
        'image': "./university logo & picture/solent university southampton/solent university southampton image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 47,
        'universityName': 'University Of Law',
        'image': "./university logo & picture/the university of law/the university of law image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 48,
        'universityName': 'University College Birmingham',
        'image': "./university logo & picture/university college birmingham/university college birmingham IMG.jpg",
        'countryName': 'UK'
    },
    {
        'id': 49,
        'universityName': 'University of Aberdeen',
        'image': "./university logo & picture/university of aberdeen/university of aberdeen image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 40,
        'universityName': 'University of Bangor',
        'image': "./university logo & picture/university of bangor/university of bangor image.png",
        'countryName': 'UK'
    },
    {
        'id': 50,
        'universityName': 'University of Bath',
        'image': "./university logo & picture/university of bath/university of bath image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 51,
        'universityName': 'University of Birmingham',
        'image': "./university logo & picture/university of bermingham/university of bermingham.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 52,
        'universityName': 'University of Bolton',
        'image': "./university logo & picture/University of Bolton/UoB image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 53,
        'universityName': 'University of Bradfordshire',
        'image': "./university logo & picture/University of Bedfordshire/az-university-of-bedfordshire-luton-campus-1.jpg",
        'countryName': 'UK'
    },
    {
        'id': 54,
        'universityName': 'University of Brighton',
        'image': "./university logo & picture/university of brighton/university of brighton image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 55,
        'universityName': 'University of Bristol',
        'image': "./university logo & picture/university of bristol/university of bristol image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 56,
        'universityName': 'University Of Bath School Of Management',
        'image': "./university logo & picture/university of bath school of management/university of bath school of management image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 57,
        'universityName': 'University of Cambridge',
        'image': "./university logo & picture/university of cambridge/university of cambridge image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 58,
        'universityName': 'University of Chester',
        'image': "./university logo & picture/university of chester/university of chester image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 59,
        'universityName': 'University of Cumbria',
        'image': "./university logo & picture/university of cumbria/university of cumbria image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 60,
        'universityName': 'University of Derby',
        'image': "./university logo & picture/university of derby/university of derby image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 62,
        'universityName': 'University of East Anglia',
        'image': "./university logo & picture/university of east anglia/university of east anglia image.png",
        'countryName': 'UK'
    },
    {
        'id': 63,
        'universityName': 'University of East London',
        'image': "./university logo & picture/university of east london/university of east london image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 64,
        'universityName': 'University of Edinburgh',
        'image': "./university logo & picture/university of edinburgh/university of edinburgh image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 65,
        'universityName': 'University of Essex',
        'image': "./university logo & picture/university of essex/university of essex image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 66,
        'universityName': 'University of Exeter',
        'image': "./university logo & picture/university of exeter/imag1.jpg",
        'countryName': 'UK'
    },
    {
        'id': 67,
        'universityName': 'University of Glasgow',
        'image': "./university logo & picture/university of glasgow/university of glasgow image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 68,
        'universityName': 'University of Greenwich',
        'image': "./university logo & picture/university of greenwich/gre.jpg",
        'countryName': 'UK'
    },
    {
        'id': 69,
        'universityName': 'University of Hull',
        'image': "./university logo & picture/university of hull/university of hull image.png",
        'countryName': 'UK'
    },
    {
        'id': 70,
        'universityName': 'University of Kent',
        'image': "./university logo & picture/university of kent/university of kent image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 71,
        'universityName': 'University of Liverpool',
        'image': "./university logo & picture/university of liverpool/university of liverpool image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 72,
        'universityName': 'University of Manchester',
        'image': "./university logo & picture/university of manchester/university of manchester.jpg",
        'countryName': 'UK'
    },
    {
        'id': 73,
        'universityName': 'University of Middlesex',
        'image': "./university logo & picture/university of middlesex/university of middlesex image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 74,
        'universityName': 'University of Oxford',
        'image': "./university logo & picture/university of oxford/university of oxford img.jpg",
        'countryName': 'UK'
    },
    {
        'id': 76,
        'universityName': 'University of Reading',
        'image': "./university logo & picture/university of reading/university of reading img.jpg",
        'countryName': 'UK'
    },
    {
        'id': 77,
        'universityName': 'University of Roehampton',
        'image': "./university logo & picture/university of roehampton/university of roehampton image 1.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 78,
        'universityName': 'University of St Andrews',
        'image': "./university logo & picture/university of st andrews/university of st andrews.jpg",
        'countryName': 'UK'
    },
    {
        'id': 79,
        'universityName': 'University of Sunderland',
        'image': "./university logo & picture/university of sunderland/university of sunderland image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 80,
        'universityName': 'University of Surrey',
        'image': "./university logo & picture/university of surrey/university of surrey.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 81,
        'universityName': 'University of Sussex',
        'image': "./university logo & picture/university of sussex/university of sussex img.jpg",
        'countryName': 'UK'
    },
    {
        'id': 82,
        'universityName': 'University of Trinity St david',
        'image': "./university logo & picture/university of trinity st david/university of trinity st david image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 83,
        'universityName': 'University of Ulster',
        'image': "./university logo & picture/University of Ulster/university_of_ulster_image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 84,
        'universityName': 'University of West London',
        'image': "./university logo & picture/university OF WEST LONDON/university OF WEST LONDON IMG.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 85,
        'universityName': 'University of West Scotland',
        'image': "./university logo & picture/university of west scotland/university of west scotland image.jpeg",
        'countryName': 'UK'
    },
    {
        'id': 86,
        'universityName': 'University of Westminster',
        'image': "./university logo & picture/university of westminster/university of westminster image.png",
        'countryName': 'UK'
    },
    {
        'id': 87,
        'universityName': 'University of Wolverhampton',
        'image': "./university logo & picture/university of wolverhampton/university of wolverhampton image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 88,
        'universityName': 'University of York',
        'image': "./university logo & picture/university of york/university of york image.jpg",
        'countryName': 'UK'
    },
    {
        'id': 89,
        'universityName': 'University of Yrk Gloucestershire',
        'image': "./university logo & picture/university of york gloucestershire/university of york gloucestershire image.jpg",
        'countryName': 'UK'
    }
];

function UniversityList({selectedCountry}) {
    const [visibleCount, setVisibleCount] = useState(3);

    const filteredUniversities = selectedCountry === "All"
        ? universityList
        : universityList.filter(university => university.countryName === selectedCountry);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <div className="university-list-container">
            <div className="university-list-main">
                {filteredUniversities.slice(0, visibleCount).map(university => (
                    <Card key={university.id} sx={{width: 320}}>
                        <div>
                            <Typography level="title-lg" textAlign="center">{university.universityName}</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{position: 'absolute', top: '0.875rem', right: '0.5rem'}}
                            >
                            </IconButton>
                        </div>
                        <AspectRatio minHeight="120px" maxHeight="200px">
                            <img
                                src={university.image}
                                srcSet={university.image}
                                loading="lazy"
                                alt={university.universityName}
                            />
                        </AspectRatio>
                    </Card>
                ))}
            </div>
            {visibleCount < filteredUniversities.length && (
                <button onClick={handleViewMore} className="view-more-btn">View More</button>
            )}
        </div>
    );
}

export default UniversityList;