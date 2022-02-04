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
        <div className='filters-h'>Filters</div>

        <div className="input">
            <select name="brand" id="brand" value={brandValue}
                onChange={(e) => {
                    setbrandValue(e.target.value);

                }}
            >
                <option value="">Products</option>
                {select.map((option) => (
                    // console.log(option.brand_name)
                    <option value={option.brand_name}>{option.brand_name}</option>
                ))}
            </select>
            <select name="state" id="state" value={stateValue}
                onChange={(e) => {
                    setstateValue(e.target.value);
                }}>
                    <option value="">State</option>
                {select.map((option) => (
                    // console.log(option.brand_name)
                    <option value={option.address.state}>{option.address.state}</option>
                ))}
            </select>
            <select name="city" id="city" value={cityValue}
                onChange={(e) => {
                    setcityValue(e.target.value);
                }}>
                    <option value="">City</option>
                {select.map((option) => (
                    // console.log(option.brand_name)
                    <option value={option.address.city}>{option.address.city}</option>
                ))}
            </select>
        </div>


    </div>;
}
