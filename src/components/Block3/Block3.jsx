import React from 'react';
import Image from '../assets/photo_2023-10-19_14-36-34.jpg'
import './Block3.css'

const Block3 = () => {
    return (
        <div>
            <div className='makers'>
            <img width={200} src={Image} alt="" />
                <div className='text'>
                    <h2>Курсы</h2>
                    <p>заведение: Makers BootCamp</p>
                    <p>дата окончания: 14 декабря 2023 год</p>
                    <p>период обучения: 4 месяца</p>
                    <p>специальность: JavaScript разработчик</p>
                    </div>
        </div>
        </div>
    );
};

export default Block3;