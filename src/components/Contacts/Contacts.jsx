import React from 'react';
import './Contacts.css'
import Image from '../assets/contact.png'

const Contacts = () => {
    return (
        <div>
            <div className='contacts'>
            <img width={200} src={Image} alt="" />
                <div className='text'>
                    <h2>Контакты</h2>
                    <p>тел. 0556120804</p>
                    <p>abaiesen04@gmail.com</p>
                    </div>
        </div>
        </div>
    );
};

export default Contacts;