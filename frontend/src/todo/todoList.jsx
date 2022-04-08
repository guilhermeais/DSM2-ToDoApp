import React from 'react';
import IconButton from '../template/iconButton';

export default ({list, handleRemove, handleMarkAsDone, handleMarkAsPending}) => {
  function getList(){
    const _list = list || []

    return _list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'marked' : ''}>
          {todo.description} 
        </td>
        
        <td></td>

        <td>
          <IconButton color="success" icon="check" onClick={() => handleMarkAsDone(todo)} hide={todo.done} ></IconButton>

          <IconButton color="warning" icon="undo" onClick={() => handleMarkAsPending(todo)} hide={!todo.done} ></IconButton>

          <IconButton color="danger" icon="trash-o" onClick={() => handleRemove(todo)} hide={!todo.done} ></IconButton>
        </td>
      </tr>
    )
    )
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            Descrição
          </th>

          <th></th>
          
          <th>
            Ações
          </th>
        </tr>
      </thead>

      <tbody>
        {getList()}
      </tbody>
    </table>
  )

}