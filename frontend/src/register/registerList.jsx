import React from 'react';
import IconButton from '../template/iconButton';

export default ({list, handleRemove, handleSetEditing, handleChange, handleCancelEdit, handleSavePerson}) => {
  function getList(){
    const _list = list || []

    return _list.map(person => (
      <tr key={person._id}>
        <td >
          {person.editing ? <input type='text' className='form-control form-control-sm' value={person.name} onChange={(e) => handleChange(e.target.value, person)} /> : person.name}
        </td>
        

        <td className='text-center'>{person.createdAt}</td>
    

        <td className='text-right'>
          {person.editing ? <IconButton color='success' icon='check' onClick={() => handleSavePerson(person)}></IconButton> 
          : <IconButton color='warning' icon='edit' onClick={() => handleSetEditing(person)}></IconButton>}
         
      
        {person.editing&&<IconButton color='danger' icon='ban' onClick={() => handleCancelEdit(person)}></IconButton>}

        {!person.editing&&<IconButton color='danger' icon='trash-o' onClick={() => handleRemove(person)}  ></IconButton>}
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
            Nome
          </th>

          <th className='text-center'>
            Data de Criação
          </th>

          
          <th className='text-right'>
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