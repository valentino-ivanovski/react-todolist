import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoCard } from './components/TodoCard'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <div>
      <Header/>
      <Tabs/>
      <TodoList/>
      <TodoInput/>
    </div>
  )

}

export default App
