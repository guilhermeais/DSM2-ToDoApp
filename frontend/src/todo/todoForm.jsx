import React from 'react';
import IconButton from '../template/iconButton';

export default ({handleAdd, handleChange, description}) => (
  <div role="form" className="todoForm">
    <div className="col-xs-12 col-sm-9 col-md-10">
      {description}
      <input 
        type="text"
        id="description"
        className="form-control"
        placeholder='Adicione uma tarefa'
        value={description} 
        onChange={(e)=> handleChange(e.target.value)}
      />
    </div>

    <div className="col-xs-12 col-sm-3 col-md-2">
     <IconButton color='primary' onClick={handleAdd} icon='plus' ></IconButton>
    </div>

  </div>
)