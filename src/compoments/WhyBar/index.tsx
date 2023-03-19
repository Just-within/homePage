import styled from 'styled-components';
import { Button } from '../common.style';

const Cotainer = styled.div`
    padding: 25px 0 30px 0;
`;

const CustomizeRow = styled.div`
    padding: 0 15px;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export default function WhyBar() {
    return (
        <Cotainer className='container'>
            <CustomizeRow className='row'>
                <div className="col-md-9 col-xs-12">
                    <h2>Introduction to Group</h2>
                    <p>Journey within to realize everything you ever wanted is just within.</p>
                </div>
                <div className="col-md-3 col-xs-12">
                    <ButtonContainer >
                        <Button className="btn btn-apply" href="/">Contact Us</Button>
                    </ButtonContainer>
                </div>
            </CustomizeRow>
        </Cotainer>
    );
}