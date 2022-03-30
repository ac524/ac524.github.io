function Navbar({ view, setView }) {
  return (
    <nav className="navbar navbar-dark bg-primary text-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Anthony Brown</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-3">
          <li className="nav-item">
            <a onClick={() => setView('bio')} className="nav-link active" aria-current="page" href="#bio">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => setView('portfolio')} className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
