import avatar from '../../../assets/default-avatar.svg'
import React from "react";
export function Person({ name, nickName = 'shake n bake', images }) {

const img = images?.[0]?.small?.url || avatar;

  return <div>
    <img src={img} alt={name} style={{width : '50px'}} />
    <h3>{name}</h3>
    <p>Nickname : {nickName}</p>
  </div>;
}


// 
 // const img = images && images[0] && images[0].small && images[0].small.url; // optional chaining 
 //const img = images?.[0]?.small?.url || avatar; // shorter optional chaining