export default function NavBar(){
    return (
         <nav className="navbar sm:navbar-expand bg-1 fg-2 navstyle fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Framework</a>
                <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" aria-hidden="true"></span>
                </button>
                <dialog className="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                    <div className="drawer-header">
                        <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                    </div>

                    <div className="drawer-body ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Desktop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Laptop 12</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Laptop 13</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Laptop 16</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link">Shop all</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto" style={{ borderRight: '1px solid #808181' }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">For Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <i className="bi bi-person-circle" aria-hidden="true"></i>
                            </li>
                            <li className="nav-item">
                                <i className="bi bi-bag-check" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </dialog>
            </div>
        </nav>
    )
}