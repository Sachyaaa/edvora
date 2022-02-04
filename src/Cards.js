import React from 'react';

export default function Cards(props) {
  return <div className='cards'>
      {props.data.map((data)=>(
          <div className="card" >
              <div className="card-top" key={data.image}>
               
                  <img src={data.image} alt="" width={100}/>
                  <div>
                      <h3>{data.product_name}</h3>
                      <span className="brand">{data.brand_name}</span>
                      <span className="price">$ {data.price}</span>
                  </div>
                  <div><span className="location">
                      {data.address.city}, {data.address.state}</span></div>
              </div>
          </div>
      ))}
  </div>;
}
