import React, { useState } from 'react';

export default function Dropdown(props) {
    
    const select = props.data.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj.brand_name)
            .indexOf(obj.brand_name) == pos;
    })
    
    const [brandValue, setbrandValue] = useState("");
    const [stateValue, setstateValue] = useState("");
    const [cityValue, setcityValue] = useState("");

    return <div className='dropdown'>
        <select name="brand" id="brand" value={brandValue}
            onChange={(e) => {
                setbrandValue(e.target.value);
            }}>
            {select.map((option) => (
                // console.log(option.brand_name)
                <option value={option.brand_name}>{option.brand_name}</option>
            ))}
        </select>
        <select name="state" id="state" value={cityValue}
            onChange={(e) => {
                setstateValue(e.target.value);
            }}>
            {select.map((option) => (
                // console.log(option.brand_name)
                <option value={option.address.state}>{option.address.state}</option>
            ))}
        </select>
        <select name="city" id="city" value={cityValue}
            onChange={(e) => {
                setcityValue(e.target.value);
            }}>
            {select.map((option) => (
                // console.log(option.brand_name)
                <option value={option.address.city}>{option.address.city}</option>
            ))}
        </select>
        <p>{brandValue}</p>
        <p>{stateValue}</p>
        <p>{cityValue}</p>

    </div>;
}
