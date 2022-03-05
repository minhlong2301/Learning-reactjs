import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './component/TodoList/TodoList'
import  { DiApple }  from 'react-icons/di'
import Input from '@material-ui/core/Input'
import  Button  from '@material-ui/core/Button'
import  { db } from './firebase_config'

function App() {

  const [ value, setValue ] = useState('')
  const [ valueItem, setValueItem ] = useState([])
  

  const handleValueChange = (event) => {
    setValue(event.target.value)
    
  }

  useEffect(() => {
    getItem()
    
  }, [])

  const addItem = (event) => {
    event.preventDefault();
    db.collection('todolist').add({
      item: value,
      inprogress: false,
    })
    setValue('')
  }

  const getItem = () => {
    db.collection('todolist').onSnapshot((querysnapshot) => {
      setValueItem(querysnapshot.docs.map((items) => {
        return {
            item: items.data().item,
            id: items.id,
            progress: items.data().progress
        }
      }))
    })
  }

  return (
    <div className='container-todo-list'>
      <div className='form'>
        <h1>Todo List <DiApple  /></h1>
        
        <div>
          <Input
          value={value}
          onChange={handleValueChange}
          />
          <Button  
          type='submit'
          variant='contained' 
          size='medium' 
          color='primary' 
          onClick={addItem}
          >
          Add</Button>
        </div>
        
        <TodoList valueItem={valueItem} value={value} />
      </div>
    </div>
  )
}

export default App;
