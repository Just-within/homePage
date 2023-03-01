import styled from 'styled-components';

const Cotainer = styled.div`
    padding: 25px 0 30px 0;
    display: flex;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    
`;

const Button = styled.a`
    background-color: #FFDF00;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    & i {
        margin-right: 10px;
    }
`;

export default function WhyBar() {
    return (
        <Cotainer className='container'>
            <div className="col-md-9">
                <h2>Why B-School?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum orci eget nulla mattis, quis viverra
                    tellus porta. Donec vitae neque ut velit eleifend commodo. Maecenas turpis odio, placerat eu lorem ut,
                    suscipit commodo augue. </p>
            </div>
            <ButtonContainer className="col-md-3">
                <Button className="btn btn-apply" href="#"><i className="fa fa-play-circle"></i>Apply Now</Button>
            </ButtonContainer>
        </Cotainer>
    );
}