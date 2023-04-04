export default function Navbar2() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="navbar-header">
                        <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand scroll-top logo  animated bounceInLeft">
                            <b>
                                Justwithin
                            </b>
                        </a>
                    </div>
                    <div id="main-nav" className="collapse navbar-collapse in">
                        <ul className="nav navbar-nav" id="mainNav">
                            <li id="firstLink"><a href="#home" className="scroll-link">Home</a></li>
                            <li><a href="#aboutUs" className="scroll-link">Goal of Group</a></li>
                            <li><a href="#work2" className="scroll-link">Programs</a></li>
                            <li><a href="#team" className="scroll-link">Contracts</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}