import { Image } from 'antd';
import { useState } from 'react';

const ImageUrlList = [
    '/img/work/1.jpg',
    '/img/work/2.jpg',
    '/img/work/3.jpg',
    '/img/work/4.jpg',
    '/img/work/5.jpg',
    '/img/work/6.jpg',
    '/img/work/7.jpg',
    '/img/work/8.jpg',
];

const StyleMap: React.CSSProperties[] = [
    { position: 'absolute', left: 0, top: 0 },
    { position: 'absolute', left: 292, top: 0 },
    { position: 'absolute', left: 585, top: 0 },
    { position: 'absolute', left: 877, top: 0 },
    { position: 'absolute', left: 0, top: 219 },
    { position: 'absolute', left: 292, top: 219 },
    { position: 'absolute', left: 585, top: 219 },
    { position: 'absolute', left: 877, top: 219 },
]

export default function Events() {
    const [state, setState] = useState(0);
    function handleClick(e: any, value: number) {
        e.preventDefault();
        setState(value)
    }
    return (
        <section id="work" className="page-section page">
            <div className="container text-center">
                <div className="heading">
                    <h2>Events</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, alias enim placeat earum quos ab.</p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="portfolio">
                            <ul className="filters list-inline">
                                <li> <a className={state === 0 ? "active" : ''} href="/" onClick={e => handleClick(e, 0)}>All</a> </li>
                                <li> <a className={state === 4 ? "active" : ''} href="/" onClick={e => handleClick(e, 4)}>Events</a> </li>
                                <li> <a className={state === 2 ? "active" : ''} href="/" onClick={e => handleClick(e, 2)}>Games</a> </li>
                                <li> <a className={state === 3 ? "active" : ''} href="/" onClick={e => handleClick(e, 3)}>Science fair</a> </li>
                            </ul>
                            <ul
                                className="items list-unstyled clearfix animated fadeInRight showing"
                                data-animation="fadeInRight"
                                style={{ position: 'relative', height: 438 }}
                            >
                                {ImageUrlList.filter((i, index) => !state || (index % state === 0)).map(((i, idx) => (
                                    <li key={idx} className="item branding" style={StyleMap[idx]}>
                                        <figure className="effect-bubba">
                                            <Image src={i} alt="img02" />
                                        </figure>
                                    </li>
                                )))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}