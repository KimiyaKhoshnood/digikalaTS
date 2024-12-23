import { Route, Routes } from "react-router-dom"
import Product from "../Product/Product"

const RouterProducts = () => {
  return (
    <Routes>
        <Route path="/" element={<Product/>}/>
        {/* <Route path="/:title" element={<Product/>}/> */}
    </Routes>
  )
}

export default RouterProducts;