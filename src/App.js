import './App.css';
import ListTasks from './components/ListTasks';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <AddTask />
       <ListTasks />
    </div>
  );
}

export default App;
