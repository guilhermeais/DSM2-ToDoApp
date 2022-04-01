import React from 'react';

export default ({icon, children}) => {
  if(icon){
    return children
  }else {
    return false
  }
}