import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Todo from './views/Todo';
import { uuid } from 'uuidv4'

import Covid from './views/Covid';

import { CountDown, NewCowntDown } from './views/Countdown';

function App() {
  let [name, setName] = useState('Minh Nguyen');//trả về [a,b]
  //hàm useState này sẽ trả về 1 array: 
  //gồm name = a:giá trị của biến
  //setName=b: một function xử lý khi biến này thay đổi
  //cách gọi  const[a,b] được gọi là destructuring (giản lược cú pháp)
  const [address, setAddress] = useState('Calgary');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Coding', username: 'Minh' },
    { id: 'todo2', title: 'Playing game', username: 'Van' },
    { id: 'todo3', title: 'Chatting', username: 'Minh' },
    { id: 'todo4', title: 'Reconsizing', username: 'Van' },

  ]);

  useEffect(() => {
    // console.log('>>>run use effect')
  }, [address]);
  useEffect(() => {
    // console.log('>>>run use todo')
  }, [todos]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('enter something please!');
      return;
    }
    //đv hook sẽ ko có chức năng Merge State
    //nghĩa là Class: nến setState([todo]) thì phần tử todo mới này sẽ được thêm vào cuối todos
    //tuy nhiên ở Hook: thì phần tử todo mới này sẽ ghi đè, và làm mất 2 phần tử ở todos
    // let id = Math.floor(Math.random() * 1000)
    let id = uuid()
    let newTodo = { id: id, title: address, username: 'New' }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let tempTodo = todos;
    tempTodo = tempTodo.filter(item => item.id !== id)
    setTodos(tempTodo)
  }

  const onTimeUp = () => {
    alert('Time up')
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CountDown onTimeUp={onTimeUp} />
        <span>------------------</span>
        <NewCowntDown onTimeUp={onTimeUp} />

        <h3>Tracking Covid 19 from Italy</h3>

        <Covid />

        {/* <Todo
          childTodos={todos}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          childTodos={todos.filter(item => item.username === 'Minh')}
          deleteDataTodo={deleteDataTodo}
        />
        < input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button
          type="button"
          onClick={(event) => handleEventClick(event)}
        >
          Click Me
        </button> */}
      </header>
    </div>
  );
}

export default App;
