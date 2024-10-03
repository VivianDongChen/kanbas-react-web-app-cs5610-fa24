export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="javascript:void(0)">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="javascript:void(0)">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
