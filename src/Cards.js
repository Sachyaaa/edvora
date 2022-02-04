import React from 'react';
import Card from './Card';

export default function Cards(props) {
    return <div className='cards'>
        {props.data.map((data) => (
            <Card data={data}/>
        ))}
    </div>;
}
