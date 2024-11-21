import { useLocation } from "react-router";
export default function TOC() {
const { pathname } = useLocation();
return (
<ul className="nav nav-pills">
<li className="nav-item">
<a id="wd-a" href="#/Labs" className="nav-link">
Labs
</a>
</li>
<li className="nav-item">
<a id="wd-a1" href="#/Labs/Lab1"
className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
Lab 1
</a>
</li>
<li className="nav-item">
<a id="wd-a2" href="#/Labs/Lab2"
className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
Lab 2
</a>
</li>
<li className="nav-item">
<a id="wd-a3" href="#/Labs/Lab3"
className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
Lab 3
</a>
</li>
<li className="nav-item">
<a id="wd-a4" href="#/Labs/Lab4"
className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
Lab 4
</a>
</li>
<li className="nav-item">
<a id="wd-a5" href="#/Labs/Lab5"
className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
Lab 5
</a>
</li>
<li className="nav-item">
<a id="wd-k" href="#/Kanbas" className="nav-link">
Kanbas
</a>
</li>
<li className="nav-item">
<a id="wd-github-web" href="https://github.com/VivianDongChen/kanbas-react-web-app-cs5610-fa24.git" className="nav-link">
My GitHub - Web
</a>
</li>

<li className="nav-item">
<a id="wd-github-server" href="https://github.com/VivianDongChen/kanbas-node-server-app-cs5610-fa24" className="nav-link">
My GitHub - Server
</a>
</li>

<li className="nav-item">
<a id="wd-render" href="https://dashboard.render.com/web/srv-csv9dcbtq21c73eln11g/events" className="nav-link">
My Render
</a>
</li>

</ul>
);
}