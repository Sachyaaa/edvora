import { useState, useEffect } from "react";

import React from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(()=>{
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data)
            setData(data)
        })
    },[url])
    return data;
};