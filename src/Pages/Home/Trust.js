import React from 'react';
import {FcSupport, FcComboChart, FcCurrencyExchange,FcConferenceCall} from 'react-icons/fc'

const Trust = () => {
    return (
        <div className='md:max-w-4xl mx-auto my-16  font-bold'>
            <h1 className='text-2xl md:text-4xl uppercase text-center mb-6'>Start to now we work with trust</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center'>
                <div>
                <FcSupport className='h-20 w-20 ml-6'/>
                <p>After sell service</p>
                </div>
                <div>
                    <FcComboChart className='h-20 w-20 ml-6'/>
                    <p>Sustainable Growth</p>
                </div>
                <div>
                    <FcCurrencyExchange className='h-20 w-20 ml-6'/>
                    <p>Global revenue</p>
                </div>
                <div>
                    <FcConferenceCall className='h-20 w-20 ml-6'/>
                    <p>Happy clients</p>
                </div>
            </div>
        </div>
    );
};

export default Trust;