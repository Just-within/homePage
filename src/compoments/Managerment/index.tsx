import styled from 'styled-components';
import { Button } from '../common.style';

const ButtonContainer = styled.div`
    text-align: center;
`;

export default function Managerment() {
    return (
        <section id="team" className="page-section">
            <div className="container">
                <div className="heading text-center">
                    <h2>Contacts</h2>
                    <p>Member of our group.</p>
                </div>
                <div className="team-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <div className="member-img">
                                    <img className="img-responsive" src="img/Maggie.png" alt="" />
                                </div>
                                {/* <div className="team-title"> */}
                                <ButtonContainer>
                                    <h4>Maggie</h4>
                                    <Button className="btn btn-apply" href="mailto:abc@example.com">Email</Button>
                                </ButtonContainer>

                                {/* <span className="pos">DEAN</span> */}
                                {/* </div> */}
                                {/* <div className="team-socials"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i
                                    className="fa fa-google-plus"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i
                                        className="fa fa-dribbble"></i></a> <a href="#"><i className="fa fa-github"></i></a> </div> */}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <div className="member-img">
                                    <img className="img-responsive" src="img/Pegasus.jpg" alt="" />
                                </div>
                                <ButtonContainer>
                                    <h4>Pegasus Chen</h4>
                                    <Button className="btn btn-apply" href="mailto:chanandpega@gmail.com">Email</Button>
                                </ButtonContainer>

                                {/* <span className="pos">Director</span> */}
                                {/* <div className="team-socials"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i
                                    className="fa fa-google-plus"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i
                                        className="fa fa-dribbble"></i></a> <a href="#"><i className="fa fa-github"></i></a> </div> */}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <div className="member-img">
                                    <img className="img-responsive" src="img/Odina.jpg" alt="" />
                                </div>
                                <ButtonContainer>
                                    <h4>Odina Wang</h4>
                                    <Button className="btn btn-apply" href="mailto:seawang060@gmail.com">Email</Button>
                                </ButtonContainer>

                                {/* <span className="pos">HOD</span> */}
                                {/* <div className="team-socials"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i
                                    className="fa fa-google-plus"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i
                                        className="fa fa-dribbble"></i></a> <a href="#"><i className="fa fa-github"></i></a> </div> */}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="team-member pDark">
                                <div className="member-img">
                                    <img className="img-responsive" src="img/Winnie.png" alt="" />

                                </div>
                                <ButtonContainer>
                                    <h4>Winnie</h4>
                                    <Button className="btn btn-apply" href="mailto:chanandpega@gmail.com">Email</Button>
                                </ButtonContainer>

                                {/* <span className="pos">Finance</span> */}
                                {/* <div className="team-socials"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i
                                    className="fa fa-google-plus"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i
                                        className="fa fa-dribbble"></i></a> <a href="#"><i className="fa fa-github"></i></a> </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}