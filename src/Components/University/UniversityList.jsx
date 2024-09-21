import React from "react";
import './universityList.css';
import CardComponent from "./CardComponent";

const UniversityNames = [
    {
        'id': 1,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/Anglia%20Ruskin%20University/Anglia_Ruskin_University_image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/Anglia%20Ruskin%20University/Anglia_Ruskin_University_image_logo.png?raw=true",
        'countryName': 'Anglia Ruskin University'
    },
    {
        'id': 2,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/UCL/UCL.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/UCL/UCL%20LOGO.png?raw=true",
        'countryName': 'University College London'
    },
    {
        'id': 3,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/University%20of%20Bedfordshire/az-university-of-bedfordshire-luton-campus-1.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/University%20of%20Bedfordshire/Bedforshire%20logo.png?raw=true",
        'countryName': 'University of Bedfordshire'
    },{
        'id': 4,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/Anglia%20Ruskin%20University/Anglia_Ruskin_University_image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/Anglia%20Ruskin%20University/Anglia_Ruskin_University_image_logo.png?raw=true",
        'countryName': 'Anglia Ruskin University'
    },
    {
        'id': 5,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/UCL/UCL.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/UCL/UCL%20LOGO.png?raw=true",
        'countryName': 'University College London'
    },
    {
        'id': 6,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/University%20of%20Bedfordshire/az-university-of-bedfordshire-luton-campus-1.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/e18666dd5171dd6bb4a16c7d92f8bee77c13bca0/university%20logo%20&%20picture/University%20of%20Bedfordshire/Bedforshire%20logo.png?raw=true",
        'countryName': 'University of Bedfordshire'
    },
    {
        'id': 7,
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Greenwich/gre.jpg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Greenwich/uni%20logo.png?raw=true",
        'countryName': 'University of Greenwich'},
    {
        'id': 8,
        'countryName': 'University of Suffolk',
        'image': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Suffolk/UoS%20image.jpeg?raw=true",
        'flag': "https://github.com/DMMPrice/sageroot-images/blob/master/university%20logo%20&%20picture/University%20of%20Suffolk/University_of_Suffolk_Logo.png?raw=true"
    }
]

function UniversityList() {
    return (
        <div className="university-list-main">
            {UniversityNames.slice(0, 3).map((university) => (
                <CardComponent
                    key={university.id}
                    imageUrl={university.image}
                    flagUrl={university.flag}
                    collegeName={university.countryName}
                />))}
        </div>
    );

}

export default UniversityList;