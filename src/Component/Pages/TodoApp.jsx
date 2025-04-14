import Reac from 'react'
import TodoHead from './TodoHead'
import TodoForm from './TodoForm'


const TodoApp = () => {

  return (
    <>
    
      <section>
          <div className='container'>
            <div className='weather-container'>
                <TodoHead/>
                <TodoForm />

               
             </div>
          </div>
      </section>
    </>
  )
}

export default TodoApp