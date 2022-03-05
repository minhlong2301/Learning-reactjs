import React from 'react'
import TodoItem from '../Todoitem/TodoItem'

export default function TodoList(props) {

  const { valueItem, value } = props
  
  return (
    <div>
        {valueItem.map((item) => {
          return <TodoItem  key={item.id} id={item.id} progress={item.progress} item={item.item} value={value}  />
        })}
    </div>
  )
}
