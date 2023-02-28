import Head from 'next/head'
import { Inter } from 'next/font/google'
import CustomizeCarousel from '@/compoments/Carousel';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Peaceful Meditation Group</title>
        <meta name="Peaceful Meditation Group" content="Peaceful Meditation Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="wrapper">
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
        <section id="featured">
          <CustomizeCarousel />
        </section>
        <section className="callaction">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="aligncenter"><h1 className="aligncenter">Our Featured Courses</h1><span className="clear spacer_responsive_hide_mobile " style={{ height: 13, display: 'block' }}></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.</div>
              </div>
            </div>
          </div>
        </section>
        <section id="content">


          <div className="container">
            <div className="row">
              <div className="skill-home"> <div className="skill-home-solid clearfix">
                <div className="col-md-3 text-center">
                  <span className="icons c1"><i className="fa fa-trophy"></i></span> <div className="box-area">
                    <h3>Web Development</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident</p></div>
                </div>
                <div className="col-md-3 text-center">
                  <span className="icons c2"><i className="fa fa-picture-o"></i></span> <div className="box-area">
                    <h3>UI Design</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident</p></div>
                </div>
                <div className="col-md-3 text-center">
                  <span className="icons c3"><i className="fa fa-desktop"></i></span> <div className="box-area">
                    <h3>Interaction</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident</p></div>
                </div>
                <div className="col-md-3 text-center">
                  <span className="icons c4"><i className="fa fa-globe"></i></span> <div className="box-area">
                    <h3>User Experiance</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident</p>
                  </div></div>
              </div></div>
            </div>


          </div>
        </section>
        <div className="testimonial-area">
          <div className="testimonial-solid">
            <div className="container">
              <div className="testi-icon-area">
                <div className="quote">
                  <i className="fa fa-microphone"></i>
                </div>
              </div>
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="">
                    <a href="#"></a>
                  </li>
                  <li data-target="#carousel-example-generic" data-slide-to="1" className="">
                    <a href="#"></a>
                  </li>
                  <li data-target="#carousel-example-generic" data-slide-to="2" className="active">
                    <a href="#"></a>
                  </li>
                  <li data-target="#carousel-example-generic" data-slide-to="3" className="">
                    <a href="#"></a>
                  </li>
                </ol>
                <div className="carousel-inner">
                  <div className="item">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Mark John -</b>
                    </p>
                  </div>
                  <div className="item">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Jaison Warner -</b>
                    </p>
                  </div>
                  <div className="item active">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Tony Antonio -</b>
                    </p>
                  </div>
                  <div className="item">
                    <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                    <p>
                      <b>- Leena Doe -</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="courses">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="aligncenter"><h1 className="aligncenter">Courses We Offer</h1><span className="clear spacer_responsive_hide_mobile " style={{ height: 13, display: 'block' }}></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
              <div className="col-md-4">
                <div className="textbox">
                  <h3>Heading Course</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                </div> </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Our Contact</h5>
                  <address>
                    <strong>Abovecompany Inc</strong><br />
                    JC Main Road, Near Silnile tower<br />
                    Pin-21542 NewYork US.</address>
                  <p>
                    <i className="icon-phone"></i> (123) 456-789 - 1255-12584 <br />
                    <i className="icon-envelope-alt"></i> email@domainname.com
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Quick Links</h5>
                  <ul className="link-list">
                    <li><a href="#">Latest Events</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Latest posts</h5>
                  <ul className="link-list">
                    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                    <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                    <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget">
                  <h5 className="widgetheading">Recent News</h5>
                  <ul className="link-list">
                    <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                    <li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
                    <li><a href="#">Natus error sit voluptatem accusantium doloremque</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="sub-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="copyright">
                    <p>
                      <span>&copy; Above Site All right reserved. Template By </span><a href="http://webthemez.com" target="_blank">WebThemez</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="social-network">
                    <li><a href="#" data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" data-placement="top" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#" data-placement="top" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  )
}
