import { useState } from 'react';

const ImageUrlList = [
    'img/work/1.jpg',
    'img/work/2.jpg',
    'img/work/3.jpg',
    'img/work/4.jpg',
    'img/work/5.jpg',
    'img/work/6.jpg',
    'img/work/7.jpg',
    'img/work/8.jpg',
];

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
                            <div className='row'>
                                {ImageUrlList.filter((i, index) => !state || (index % state === 0)).map(((i) => (
                                    <img key={i} src={i} width={240} />
                                )))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}