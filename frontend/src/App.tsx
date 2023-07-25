import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import NotFound from './components/NotFound'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { GuestRoot, PrivateRoot } from './AuthRoot'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<GuestRoot children={<SignIn />} />} />
        <Route path="/signup" element={<GuestRoot children={<SignUp />} />} />
        <Route path="/" element={<PrivateRoot children={<Main />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
