import logo from './logo.svg';
import './App.css';
import AddDetails from './Components/AddDetails';
import SearchUser from './Components/SearchUser';
import DeleteUser from './Components/DeleteUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUsers from './Components/ViewUsers';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddDetails/>}/>
          <Route path='/search' element={<SearchUser/>}/>
          <Route path='/delete' element={<DeleteUser/>}/>
          <Route path='/viewUsers' element={<ViewUsers/>}/>
          
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
