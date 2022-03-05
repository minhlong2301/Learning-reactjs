import React from 'react'
import './TodoItem.css'
import { TiDeleteOutline } from 'react-icons/ti'
import { TiTickOutline } from 'react-icons/ti'
import { RiEdit2Line } from 'react-icons/ri'
import { db } from '../../firebase_config'

export default function TodoItem(props) {

  const { item, id, progress, value } = props

  const handleLineThrough = () => {
    db.collection('todolist').doc(id).update({
      progress: !progress
    })
  }

  const handleDeleteItem = () => {
    db.collection('todolist').doc(id).delete({
      id: id
    })
  }

  const handleUpdateItem = () => {
    db.collection('todolist').doc(id).update({
      
    })
  }

  return (
    <div className='items'>
      <div className='item-todo'>
        <label className={`${progress ? 'line-through' : ''}`}>{item}</label>
        
        <div>
        <TiDeleteOutline
        onClick={handleDeleteItem}
        style={{fontSize: '21px'}}
        />
        <RiEdit2Line 
        onClick={handleUpdateItem}
        style={{fontSize : '21px'}}
        />

        <TiTickOutline
        onClick={handleLineThrough}
        style={{fontSize: '21px'}}
        />
        </div>
      </div>
      
    </div>
  )
}
