import { Navigate, Route, Routes } from "react-router-dom"
import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import TOC from "./TOC"
import Lab3 from "./Lab3"

export default function Labs(){
  return (
    <div>
      <h1>Dong Chen - SEC 02</h1>
      <TOC />
      <h1>Labs</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  )
}