import logo from "./logo.svg";
import "./App.css";
import Demo from "./components/Demo";
import TodoList from "./components/todo/TodoList";
import Navbar from "./components/todo/Navbar";
import Todos from "./components/todo/Todos";

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      {/* <Todo /> */}
      <Navbar title="My Todos List" searchBar={true} />
      {/* <Todo /> */}
      <div className="exp">
        {" "}
        <div className="onee">
          <Todos value="Movies" />
        </div>
        <div className="twoo">
          <Todos value="Director" />
        </div>
      </div>
    </div>
  );
}

export default App;
