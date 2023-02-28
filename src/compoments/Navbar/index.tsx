export default function Navbar() {
    return (
        <header>
            <div className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html"><img src="img/logo.png" alt="logo" /></a>
                    </div>
                    <div className="navbar-collapse collapse ">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}