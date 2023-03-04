import styled from 'styled-components';

const HeaderContainer = styled.div`
    margin: 30px 0;
`;

const Item = styled.div`
    &:hover {
        & ul {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }
`;

export default function Fee() {
    return (
        <section id="plans" className="page-section">
            <div className="container">
                <HeaderContainer className="heading text-center">
                    <h2>Fees</h2>
                    <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
                </HeaderContainer>
                <div className="row flat">
                    <Item className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <ul className="plan plan1">
                            <li className="plan-name">Basic </li>
                            <li className="plan-price"> <strong>$29</strong> / month </li>
                            <li> <strong>5GB</strong> Storage </li>
                            <li> <strong>1GB</strong> RAM </li>
                            <li> <strong>400GB</strong> Bandwidth </li>
                            <li> <strong>10</strong> Email Address </li>
                            <li> <strong>Forum</strong> Support </li>
                            <li className="plan-action"> <a href="#" className="btn btn-danger btn-lg">Signup</a> </li>
                        </ul>
                    </Item>
                    <Item className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <ul className="plan plan2">
                            <li className="plan-name">Standard </li>
                            <li className="plan-price"> <strong>$39</strong> / month </li>
                            <li> <strong>5GB</strong> Storage </li>
                            <li> <strong>1GB</strong> RAM </li>
                            <li> <strong>400GB</strong> Bandwidth </li>
                            <li> <strong>10</strong> Email Address </li>
                            <li> <strong>Forum</strong> Support </li>
                            <li className="plan-action"> <a href="#" className="btn btn-danger btn-lg">Signup</a> </li>
                        </ul>
                    </Item>
                    <Item className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <ul className="plan plan3">
                            <li className="plan-name">Advanced </li>
                            <li className="plan-price"> <strong>$199</strong> / month </li>
                            <li> <strong>50GB</strong> Storage </li>
                            <li> <strong>8GB</strong> RAM </li>
                            <li> <strong>1024GB</strong> Bandwidth </li>
                            <li> <strong>Unlimited</strong> Email Address </li>
                            <li> <strong>Forum</strong> Support </li>
                            <li className="plan-action"> <a href="#" className="btn btn-danger btn-lg">Signup</a> </li>
                        </ul>
                    </Item>
                    <Item className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <ul className="plan plan4">
                            <li className="plan-name">Mighty </li>
                            <li className="plan-price"> <strong>$999</strong> / month </li>
                            <li> <strong>50GB</strong> Storage </li>
                            <li> <strong>8GB</strong> RAM </li>
                            <li> <strong>1024GB</strong> Bandwidth </li>
                            <li> <strong>Unlimited</strong> Email Address </li>
                            <li> <strong>Forum</strong> Support </li>
                            <li className="plan-action"> <a href="#" className="btn btn-danger btn-lg">Signup</a> </li>
                        </ul>
                    </Item>
                </div>
            </div>
        </section>
    );
}