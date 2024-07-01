import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import { auth } from './lib/firebase'
import {useStore} from './store'
function App() {


  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' Component={Home}></Route>
         <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
