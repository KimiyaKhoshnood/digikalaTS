import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Components/Header/Header"

function App() {

  return (
    <div dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
