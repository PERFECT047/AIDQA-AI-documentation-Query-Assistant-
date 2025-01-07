import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chats from './pages/Chats'
import { RecoilRoot } from "recoil";

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>

        <Routes>
          <Route path="/" element={<Chats/>} />
        </Routes>

      </RecoilRoot>      
    </ BrowserRouter>
  )
}

export default App
