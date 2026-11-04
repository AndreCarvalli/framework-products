export default function NavBar(){
    return (
        <div>
            <nav className="navbar sm:navbar-expand bg-1 fg-2 sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" aria-hidden="true"></span>
                    </button>
                    <dialog className="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                        <div className="drawer-header">
                            <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                        </div>
                        <div className="drawer-body ms-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </dialog>
                </div>
            </nav>
        </div>
    )
}