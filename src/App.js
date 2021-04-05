import './App.css';
import Todo from './components/Todo'


function App() {
  const arr = ['React1', 'React2', 'React3']
  return (
    <div className="App">
      <h1>
        My Todos
      </h1>
      {arr.length && arr.map((item, index) => (
        <Todo text={item} key={index} />
      ))}

    </div>
  );
}

export default App;
