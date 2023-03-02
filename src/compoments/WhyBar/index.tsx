import styled from 'styled-components';
import { Button } from '../common.style';

const Cotainer = styled.div`
    padding: 25px 0 30px 0;
    display: flex;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
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