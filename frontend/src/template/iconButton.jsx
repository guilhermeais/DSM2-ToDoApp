import React from 'react';
import If from './if';

export default ({hide, color, onClick, icon}) => (
  <If icon={!hide}>
    <button 
    className={`btn btn-${color}`} 
    onClick={onClick} >
      <i className={`fa fa-${icon}`} ></i>
    </button>
  </If>
)