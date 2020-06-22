import React from 'react';
import nemune from './images/nemune.jpg';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import './about-dr.styles.scss';

export const About=()=>(
    <div className='aboutcontainer'>
        <h1>دکتر محمدرضا ابراهیم پور</h1>
        <h3>
            جراح و دندانپزشک
        </h3>
        <h3>فارغ التحصیل دانشگاه تهران
        دارای تجربه ی 10 ساله در زمینه ی پروتز دندان، ترمیم، جرمگیری و جراحی
        </h3>
        <img src={nemune} alt = 'نمونه کار'/>
        <h1>DR.MOHAMMAD REZA EBRAHIMPOUR</h1>
        <h3>
          DENTIST AND ORAL SURGEON
        </h3>
        <h3>Graduate of Tehran University with 10 years of experience in the field of dental prosthesis, restoration, scaling and surgery
        </h3>
        <div className='imgcontainer'>
        <img src = {pic1} />
        <img src ={pic2} />
        </div>
    </div>
);