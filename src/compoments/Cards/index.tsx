import styled from 'styled-components';

const OuterContainer = styled.section`
    margin-top: 20px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Icon = styled.i`
    text-align: center;
    padding: 30px 0 20px 0;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default function Cards() {
    return (
        <OuterContainer id="content">
            <Container className="container">
                <div className='row'>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div></div>
                    </CardContainer>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div></div>
                    </CardContainer>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div></div>
                    </CardContainer>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div></div>
                    </CardContainer>
                </div>
            </Container>
        </OuterContainer>
    );
}