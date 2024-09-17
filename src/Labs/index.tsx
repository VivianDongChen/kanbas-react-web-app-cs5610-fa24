import { Route, Routes } from "react-router"
import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import Lab3 from "./Lab3"
import TOC from "./TOC"

export default function Labs(){
  return (
    <div>
      <h1>Dong Chen</h1>
      <TOC />
      <h1>Labs</h1>
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
      
      <h2>Lab 3</h2>
    </div>
  )
}