import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Todo from './views/Todo';

function App() {
  let [name, setName] = useState('Minh Nguyen');//trả về [a,b]
  //hàm useState này sẽ trả về 1 array: 
  //gồm name = a:giá trị của biến
  //setName=b: một function xử lý khi biến này thay đổi
  //cách gọi  const[a,b] được gọi là destructuring (giản lược cú pháp)
  const [address, setAddress] = useState('Calgary');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Coding' },
    { id: 'todo2', title: 'Chatting' }
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('enter something please!');
      return;
    }
    //đv hook sẽ ko có chức năng Merge State
    //nghĩa là Class: nến setState([todo]) thì phần tử todo mới này sẽ được thêm vào cuối todos
    //tuy nhiên ở Hook: thì phần tử todo mới này sẽ ghi đè, và làm mất 2 phần tử ở todos
    let id = Math.floor(Math.random() * 1000)
    let newTodo = { id: id, title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello world with React with {name}</h3>
        <Todo
          childTodos={todos}
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
        </button>
      </header>
    </div>
  );
}

export default App;
