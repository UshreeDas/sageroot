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