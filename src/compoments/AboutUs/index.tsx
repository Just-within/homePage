import styled from 'styled-components';
import { Button } from '../common.style';

const Container = styled.section`
    margin-top: 20px;
    & p, & li {
        color: #a6a6a6;
    }
    & li {
        list-style: none;
        line-height: 30px;
    }

    & .listArrow li {
        background: url('/img/links-arrow.png') 0px 12px no-repeat;
        padding-left:15px;
    }

    & ul.list3 {
        counter-reset: li;
        list-style: none outside none;
        margin-bottom: 4em;
        padding: 0;
        & li {
            position: relative;
            padding: 4px 0 5px 37px;
            &:after {
                content: counter(li, decimal-leading-zero);
                counter-increment: li;
                position: absolute;
                left: 0px;
                top: 50%;
                margin-top: -13px;
                font-weight: 700;
                border-radius: 100%;
                color: #fff;
                width: 26px;
                height: 26px;
                background-color:#FEDE00;
                text-align: center;
                line-height: 26px;
            }
        }
    }
`;

const Header = styled.div`
    margin: 30px 0;
    text-align: center;
`;

const UpperCase = styled.h3`
    text-transform: uppercase;
`

const OurQuality = styled.div`
    margin: 30px 0;
`;

export default function AboutUs() {
    return (
        <section id="aboutUs">
            <Container className="container">
                <Header>
                    <h2>About Us</h2>
                    <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
                </Header>
                <OurQuality className="row feature design">
                    <div className="col-md-8">
                        <UpperCase>Our Design tells about quality</UpperCase>
                        <p>Lorem ipsum dolor sit amet, ea eum labitur scsstie percipitoleat fabulas complectitur deterruisset at pro.
                            Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie
                            percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci
                            iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt.
                            Nec et jority have suffered alteration. </p>
                        <p>Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie
                            percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci
                            iudicabit constituto at mea. No soleat fabulas prodesset vel, ut quo solum dicunt.
                            Nec et amet vidisse mentitumsstie percipitoleat fabulas. </p>
                        <Button href="#" className="btn">Request Quote</Button>
                    </div>
                    <div style={{ top: 28 }} className="col-md-4">
                        <img src="img/about-img.jpg" alt="" width="100%" />
                    </div>
                </OurQuality>
                <div className="row dataTxt">
                    <div className="col-md-4 col-sm-6">
                        <UpperCase>Our Education</UpperCase>
                        <p>Lorem ipsum dolor consectetursit amet, consectetur adipiscing elit consectetur euismod </p>
                        <p>Lorem ipsum dolor sit amet, ea eum labitur scsstie percipitoleat fabulas complectitur deterruisset at pro.
                            Odio quaeque reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie
                            percipit an. Falli volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci
                            iudicabit constituto at mea.</p>
                        <br />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <UpperCase>Courses</UpperCase>
                        <p>Lorem ipsum dolor consectetursit amet, consectetur adipiscing elit consectetur euismod </p>
                        <ul className="listArrow">
                            <li>Lorem ipsum dolor consectetursit amet, consectet</li>
                            <li>Has molestie percipit an. Falli volumus efficiantur</li>
                            <li>Falli volumus efficiantur sed id, ad vel noster</li>
                            <li>Lorem ipsum dolor consectetursit amet, consectetur</li>
                            <li>Ius ut etiam vivendo, graeci iudicabit constitutoa</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <UpperCase>Latest News</UpperCase>
                        <p>Lorem ipsum dolor consectetursit amet, consectetur adipiscing elit consectetur euismod </p>
                        <ul className="list3">
                            <li>Lorem ipsum dolor consectetursit</li>
                            <li>Has molestie percipit an Falli</li>
                            <li>Falli volumus efficiantur sed id</li>
                            <li>Lorem ipsum dolor consectetu</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}