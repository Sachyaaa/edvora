import React from 'react';
import Cards from './Cards';

export default function Products(props) {
  return <div className='product-side'>
     {props.data && props.data.length>0 && <Cards data={props.data} />}
  </div>;
}
