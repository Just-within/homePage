export default function Navbar2() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="navbar-header">
                        <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></button>
                        <a href="#" className="navbar-brand scroll-top logo  animated bounceInLeft"><b><i><img src="img/logo.png" /></i></b></a> </div>
                    <div id="main-nav" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav" id="mainNav">
                            <li className="active" id="firstLink"><a href="#home" className="scroll-link">Home</a></li>
                            <li><a href="#Features" className="scroll-link">Features</a></li>
                            <li><a href="#aboutUs" className="scroll-link">About Us</a></li>
                            <li><a href="#work" className="scroll-link">Events</a></li>
                            <li><a href="#plans" className="scroll-link">Fees</a></li>
                            <li><a href="#team" className="scroll-link">Management</a></li>
                            <li><a href="#contactUs" className="scroll-link">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}