import { Navigate, Route, Routes } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Dong Chen - SEC 02</h1>
        <div className="p-3">
          <TOC />
          <h1>Labs</h1>
          <Routes>
            <Route path="/" element={<Navigate to="Lab1" />} />
            <Route path="Lab1" element={<Lab1 />} />
            <Route path="Lab2" element={<Lab2 />} />
            <Route path="Lab3/*" element={<Lab3 />} />
            <Route path="Lab4/*" element={<Lab4 />} />
            <Route path="Lab5/*" element={<Lab5 />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
