import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home/Home.tsx"
import RouterProducts from "../Pages/Product/RouterProducts/RouterProducts.tsx"
import Login from "../Pages/Login/Login.tsx"
import OnlineSupport from "../Components/OnlineSupport/OnlineSupport.tsx"

function App() {

  return (
    <div dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/*" element={<RouterProducts />}/>
          <Route path="/login/" element={<Login />}/>
        </Routes>
        </BrowserRouter>
        <OnlineSupport/>
    </div>
  )
}

export default App
