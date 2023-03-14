import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AuthorForm from "./components/AuthorForm";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/"/>
            <Route element={<AuthorForm/>} path="/authors/new"/>
            <Route element={<EditAuthor/>} path="/authors/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
