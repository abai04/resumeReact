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
                    <h2>Личная информация</h2>
                    <p>имя: Абай</p>
                    <p>фамилия: Эсенгазиев</p>
                    <p>дата рождения: 12.08.2004</p>
                    <p>пол:  мужской</p>
                    <p>гражданство: кыргзызское</p>
                    <p>образование: среднее</p></div>
            </div>
        </div>
    );
};

export default Block1;