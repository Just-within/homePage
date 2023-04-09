import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    color: #f7ee02;
    & p {
        font-size: 16px;
        color: #fcf9b3;
    }
`;

const ButtonContainer = styled.div`
    text-align: center;
    color: #fcf9b3;
`;

const StyleImageContainer = styled.div`
    &:hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition: all 0.25s ease;
    }
    & img {
        border-radius: 8px;
    }
`;

export default function Managerment() {
    return (
        <section id="team" className="page-section">
            <div className="container">
                <HeaderContainer className="heading text-center">
                    <h2>Contacts</h2>
                    <p>Join our community of experts and enthusiasts from all walks of life, bringing together diverse perspectives and skills for a dynamic learning experience.</p>
                </HeaderContainer>
                <div className="team-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <StyleImageContainer className="member-img">
                                    <Link href="mailto:meditationwithmaggie@gmail.com">
                                        <img className="img-responsive" src="img/Maggie.png" alt="" />
                                    </Link>
                                </StyleImageContainer>
                                <ButtonContainer>
                                    <h4>Maggie</h4>
                                    <div>meditationwithmaggie@gmail.com</div>
                                </ButtonContainer>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <StyleImageContainer className="member-img">
                                    <Link href="mailto:chanandpega@gmail.com">
                                        <img className="img-responsive" src="img/Pegasus.jpg" alt="" />
                                    </Link>
                                </StyleImageContainer>
                                <ButtonContainer>
                                    <h4>Pegasus Chen</h4>
                                    <div>chanandpega@gmail.com</div>
                                </ButtonContainer>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <StyleImageContainer className="member-img">
                                    <Link href="mailto:seawang060@gmail.com">
                                        <img className="img-responsive" src="img/Odina.jpg" alt="" />
                                    </Link>
                                </StyleImageContainer>
                                <ButtonContainer>
                                    <h4>Odina Wang</h4>
                                    <div>seawang060@gmail.com</div>
                                </ButtonContainer>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <StyleImageContainer className="member-img">
                                    <Link href="mailto:sheu.winnie@gmail.com">
                                        <img className="img-responsive" src="img/Winnie.png" alt="" />
                                    </Link>
                                </StyleImageContainer>
                                <ButtonContainer>
                                    <h4>Winnie</h4>
                                    <div>sheu.winnie@gmail.com</div>
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}