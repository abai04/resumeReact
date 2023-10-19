import React from 'react';
import Image from '../assets/3561639.png'
import './Block2.css'
const Block2 = () => {
    return (
        <div className='job-exp'>
            <img width={200} src={Image} alt="" />
                <div className='text'>
                    <h2>Образование</h2>
                    <p>учебное заведение: КГУСТА</p>
                    <p>форма обучения: заочная</p>
                    <p>факультет: институт новых информационных технологий (ИНИТ)</p>
                    <p>специальность: информационная безопасность</p>
                    </div>
        </div>
    );
};

export default Block2;