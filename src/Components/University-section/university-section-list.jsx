import React from "react";
import './university-section.css';

const universityList = [
    {
        'id': 1,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/Anglia%20Ruskin%20University/Anglia_Ruskin_University_image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/Anglia%20Ruskin%20University/Anglia_Ruskin_University_image_logo.png?raw=true",
        'universityName': 'Anglia Ruskin University',
        'countryName': 'UK'
    },
    {
        'id': 2,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/UCL/UCL.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/UCL/UCL%20LOGO.png?raw=true",
        'universityName': 'University College London',
        'countryName': 'UK'
    },
    {
        'id': 3,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/University%20of%20Bedfordshire/az-university-of-bedfordshire-luton-campus-1.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/University%20of%20Bedfordshire/Bedforshire%20logo.png?raw=true",
        'universityName': 'University of Bedfordshire',
        'countryName': 'UK'
    },
    {
        'id': 4,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Greenwich/gre.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Greenwich/uni%20logo.png?raw=true",
        'universityName': 'University of Greenwich',
        'countryName': 'UK'
    },
    {
        'id': 5,
        'universityName': 'University of Suffolk',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Suffolk/UoS%20image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Suffolk/University_of_Suffolk_Logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 6,
        'universityName': 'University of Ulster',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Ulster/university_of_ulster_image.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Ulster/university_of_ulster_icon.png?raw=true",
        'countryName': 'UK',
    },
    {
        'id': 7,
        'universityName': 'Aberystwyth university',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/aberystwyth%20university/aberystwyth_university_image.jpg?raw=true",
        'flag': "https://raw.githubusercontent.com/DMMPrice/sageroot-images/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20%26%20picture/aberystwyth%20university/aberystwyth_university_logo.svg",
        'countryName': 'UK'
    },
    {
        'id': 8,
        'universityName': 'Alliance Manchester Business School',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/alliance%20manchester%20business%20school/alliance_manchester_business_school_image.jpeg?raw=true",
        "flag": "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/alliance%20manchester%20business%20school/alliance_manchester_business_school%20_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 9,
        'universityName': 'Amity University London',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/amity%20university%20(IN)%20london/amity_university(IN)_london%20image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/amity%20university%20(IN)%20london/amity_university_(IN)_london_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 10,
        'universityName': 'Architectural Association School of Architecture',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/architectural%20association%20school%20of%20architecture/architectural_association_school_of_architecture_image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/architectural%20association%20school%20of%20architecture/architectural_association_school_of_architecture_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 11,
        'universityName': 'Arts University Bournemouth',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/arts%20university%20bournemouth/arts_university_bournemouth_image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/arts%20university%20bournemouth/arts_university%20bournemouth_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 12,
        'universityName': 'Aston University',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/aston%20university/aston_university_images.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/aston%20university/aston_university_logo.png?raw=true",
        'countryName': 'UK'
    },
    {
        'id': 13,
        'universityName': 'Bath Spa University',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/bath%20spa%20university/bath_spa%20university_image.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/bath%20spa%20university/bath_spa%20university_logo.png?raw=true",
        'countryName': 'UK'
    }
];

function UniversityList({selectedCountry}) {
    const filteredUniversities = selectedCountry === "All"
        ? universityList
        : universityList.filter(university => university.countryName === selectedCountry);

    return (
        <div className="university-list-main">
            {filteredUniversities.map(university => (
                <div key={university.id} className="university-card">
                    <img src={university.image} alt={university.universityName} className="university-image"/>
                    <img src={university.flag} alt={`${university.universityName} flag`} className="university-flag"/>
                    <h3>{university.universityName}</h3>
                </div>
            ))}
        </div>
    );
}

export default UniversityList;