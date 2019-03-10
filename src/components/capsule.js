import React from 'react';
const Capsule =({value})=>{
  if(value>75){
    return <span className="badge badge-pill badge-info high">{value} %</span>;
  }else if (value<75 && value>50){
      return <span className="badge badge-pill badge-info medium">{value} %</span>;
  }else{
      return <span className="badge badge-pill badge-info low">{value} %</span>;
  }
};
export default Capsule;
