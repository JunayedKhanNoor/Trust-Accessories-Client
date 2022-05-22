import React from 'react';
import spinner from '../../assets/E0jz.gif'

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='max-w-xs max-h-28 rounded-t-full' src={spinner} alt="" />
        </div>
    );
};

export default Loading;