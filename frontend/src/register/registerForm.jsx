import React from 'react';
import IconButton from '../template/iconButton';

export default ({handleAdd, handleChange, name, handleSearch, handleClearSearch}) => (
  <div role="form" className="todoForm">
    <div className="col-xs-12 col-sm-9 col-md-10">
  
      <input 
        type="text"
        id="name"
        className="form-control"
        placeholder='Adicione uma pessoa'
        value={name} 
        onChange={(e)=> handleChange(e.target.value)}
      />
    </div>

    <div className="col-xs-12 col-sm-3 col-md-2">
     <IconButton color='primary' onClick={handleAdd} icon='plus' ></IconButton>
     <IconButton color='info' icon='search' onClick={(e) => handleSearch(e)} ></IconButton>
     <IconButton icon='remove' onClick={handleClearSearch}></IconButton>
    </div>

  </div>
)