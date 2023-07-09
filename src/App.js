import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

function App() {
  let [name, setName] = useState('Minh Nguyen')//trả về [a,b]
  //hàm useState này sẽ trả về 1 array: 
  //gồm name = a:giá trị của biến
  //setName=b: một function xử lý khi biến này thay đổi
  //cách gọi  const[a,b] được gọi là destructuring (giản lược cú pháp)
  let [address, setAddress] = useState('Calgary')
  const handleEventClick = (event) => {
    setName(address)
    console.log(">>>you've just click", name)
    console.log('---input content: ', address)
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
        <input
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
