import React from 'react';
import Image from '../assets/photo.jpg'
import './Block1.css'

const Block1 = () => {
    return (
        <div>
            <h1>Резюмe</h1>
            <div className='biography'>
                <img width={200} src={Image} alt="" />
                <div className='text'>
                    <h2>Биография</h2>
                    <p>Меня зовут Абай. Родился 12 августа 2004 года в городе Анкара. В настоящее время проживаю в Кыргызстане г.Бишкек. Выпустился в 2022 году в 95-й школе.</p><p> Также закончил музыкальную школу.</p></div>
            </div>
        </div>
    );
};

export default Block1;