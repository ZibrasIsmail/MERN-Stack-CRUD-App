import './App.css';
import AddPost from './Components/AddPost';
import EditPost from './Components/EditPost';
import PostList from './Components/PostList';
import {BrowserRouter, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'black', color:'white', padding:'10px'}}> MERN Stack CRUD App </h1>

      <BrowserRouter>
      
      <Route path='/' component={PostList} exact />
      <Route path='/addpost' component={AddPost} exact />
      <Route path='/editpost/:postid' component={EditPost} exact />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
