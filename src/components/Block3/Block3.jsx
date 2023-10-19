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
                    <p>После увольнения записался на курсы Makers Bootcamp, где я обучаюсь до сих пор. После окончания курсов надеюсь найти работу в сфере IT и стать front-end разработчиком.</p>
                    </div>
        </div>
        </div>
    );
};

export default Block3;