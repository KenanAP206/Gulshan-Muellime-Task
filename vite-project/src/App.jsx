import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoot from './Pages/User/UserRoot';
import AdminRoot from './Pages/Admin/AdminRoot'
import Dashboard from './Pages/Admin/Dashboard'
import Students from './Pages/Admin/Students'
import Staff from './Pages/Admin/Staff'
import Fees from './Pages/Admin/Fees'
import Announcement from './Pages/Admin/Announcement'
import Home from './Pages/User/Home'
import NotFound from './Pages/User/Not Found'
import UserLogin from './Pages/User/UserLogin'
import UserRegister from './Pages/User/UserRegister'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserRoot />}>
          <Route index element={<Home />} />
          <Route path='login' element={<UserLogin />} />
          <Route path='register' element={<UserRegister />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
          <Route path='/admin/*' element={<AdminRoot />}>
          <Route index element={<Dashboard />} />
          <Route path='students' element={<Students />} />
          <Route path='staff' element={<Staff />} />
          <Route path='fees' element={<Fees />} />
          <Route path='announcement' element={<Announcement />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;