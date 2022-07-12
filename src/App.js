import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Backdrop from "./components/Backdrop/Backdrop";
import Modal from "./components/Modal/Modal";
import Provider  from "./context/context";

function App() {
  return (
    <Provider>
      <div className="App">
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
