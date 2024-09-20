import './App.css';
import {BrowserRouter,Route,Navigate,Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Writeblog } from './Pages/BlogCreate';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { Navbar } from './Pages/Navbar';
import { BlogPosts } from './Pages/BlogPosts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar/>}>
            <Route path="/" element={<Navigate to="/home" replace/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/writeblog" element={<Writeblog/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/posts" element={<BlogPosts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
