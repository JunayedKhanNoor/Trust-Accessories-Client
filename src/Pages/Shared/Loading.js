import React from 'react';
import spinner from '../../assets/E0jz.gif'

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <img className='max-w-xs max-h-28 rounded-t-full' src={spinner} alt="" />
        </div>
    );
};

export default Loading;