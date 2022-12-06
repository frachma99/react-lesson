import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Search from "./Search";
import Search2 from "./Components/Search/Search";
import Todo from "./Components/Todo/Todo";
import TodoContent from "./Components/Todo/TodoContent";
import Counter from "./Components/Counter/Counter";

import "./App.css";
import Votes from "./Votes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="search2" element={<Search2 />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<Todo />} />
            <Route path="todo/:id" element={<TodoContent />} />
            <Route path="votes" element={<Votes />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
