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
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHCAYAAAAvZezQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxODYxMkJGRjQ0N0UxMUU0QkVGNkMzMjcxMDFBODcwQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxODYxMkMwMDQ0N0UxMUU0QkVGNkMzMjcxMDFBODcwQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4NjEyQkZENDQ3RTExRTRCRUY2QzMyNzEwMUE4NzBCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE4NjEyQkZFNDQ3RTExRTRCRUY2QzMyNzEwMUE4NzBCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QwolQgAAADRJREFUeNpiKisr+w8EDDDMxAAE5eXl/xmggAnGgAnCBWCCKAKdnZ2MTMgcuBYYBwQAAgwAcd4XZw9WneMAAAAASUVORK5CYII=') 0px 12px no-repeat;
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
                color: black;
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
                    <h2>Goal of Group</h2>
                    <p>To make Chan meditation accessible to the international community. Transcend you life.</p>
                </Header>
                <OurQuality className="row feature design">
                    <div className="col-md-8">
                        <UpperCase>Find inner peace</UpperCase>
                        <p>Welcome to our meditation group, a community that has been founded on the principles of mindfulness, compassion, and inner peace. What began as a small local group has now grown to a national level and is starting to expand internationally. We are committed to providing a supportive space for people from all walks of life to come together and practice meditation, regardless of their level of experience.</p>
                        <p>Our group is dedicated to promoting the benefits of meditation, including stress reduction, improved mental clarity, and emotional stability. Through regular meditation practice, we believe that individuals can develop greater self-awareness and cultivate a sense of inner peace that can positively impact all aspects of their lives.</p>
                        <p>As our community continues to grow, we are excited to welcome new members from all around the world. We believe that by sharing our practice and building connections across borders, we can contribute to a more peaceful and compassionate world.</p>
                        <p>Whether you are new to meditation or a seasoned practitioner, we invite you to join us and become a part of our growing community. Together, we can support each other on our journey towards greater self-discovery, inner peace, and wellbeing.</p>
                        {/* <Button href="#" className="btn">Contact Us</Button> */}
                    </div>
                    <div style={{ top: 28 }} className="col-md-4">
                        <img src="img/about-img-1.jpg" alt="" width="100%" />
                    </div>
                </OurQuality>
                <div className="row dataTxt">
                    {/* <div className="col-md-4 col-sm-6">
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
                    </div> */}
                    <UpperCase style={{ marginLeft: 30 }}>Programs</UpperCase>
                    <div className="col-md-6 col-sm-6">
                        <ul className="listArrow">
                            <li>Experience Chan meditation</li>
                            <li>8 week session</li>
                            <li>Weekly online Q&A</li>
                            <li>Topic discussions</li>
                            {/* <li>Weekly Practice Sittings</li>
                            <li>Sutra Study</li>
                            <li>History of Chan Linage</li>
                            <li>One to One Discussion, on reservation</li> */}
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <ul className="listArrow">
                            {/* <li>Experience Chan meditation</li>
                            <li>8 week session</li>
                            <li>Weekly online Q&A</li>
                            <li>Topic discussions</li> */}
                            <li>Weekly Practice Sittings</li>
                            <li>Sutra Study</li>
                            <li>History of Chan Linage</li>
                            <li>One to One Discussion, on reservation</li>
                        </ul>
                    </div>
                    {/* <div className="col-md-6 col-sm-6">
                        <UpperCase></UpperCase>
                        <ul className="list3" style={{ marginTop: 20 }}>
                            <li>Experience Chan meditation</li>
                            <li>8 week session</li>
                            <li>Weekly online Q&A</li>
                            <li>Topic discussions</li>
                            <li>Weekly Practice Sittings</li>
                            <li>Sutra Study</li>
                            <li>History of Chan Linage</li>
                            <li>One to One Discussion, on reservation</li>
                        </ul>
                    </div> */}
                </div>
            </Container>
        </section>
    );
}