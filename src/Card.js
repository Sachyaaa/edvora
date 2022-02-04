import React from 'react';

export default function Card(props) {
  return <div className="card" >
  <div className="card-top" key={props.data.image}>

      <img src={props.data.image} alt="" width={100} />
      <div className='details'>
          <h3>{props.data.product_name}</h3>
          <span className="brand">{props.data.brand_name}</span>
          <p className="price">$ {props.data.price}</p>
      </div>
  </div>
  <div className='loc-time'>
      <div className="location">
      <p>{props.data.address.city},</p>
      <p>{props.data.address.state}</p></div>
  </div>
  <div className='desc'>
      {props.data.discription}
  </div>
</div>;
}
