import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Search from "./Search";
import Todo from "./Todo";

import "./App.css";
import Counter from "./Counter";
import TodoApp from "./TodoApp";
import Votes from "./Votes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Search />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todoapp" element={<TodoApp />} />
            <Route path="todoapp/todo/:id" element={<Todo />} />
            <Route path="votes" element={<Votes />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
