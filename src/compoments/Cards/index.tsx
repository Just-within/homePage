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

// const StyledCard = styled(Card)`
//     margin-bottom: 20px;
//     width: 240px;
//     border-radius: 0;
//     &:before {
//         content: "";
//         width: 60px;
//         height: 60px;
//         background: yellow;
//         float: right;
//         position: absolute;
//         z-index: -1;
//         top: -5px;
//         right: -5px;
//     }
//     &:after {
//         content: "";
//         width: 60px;
//         height: 60px;
//         background: yellow;
//         float: right;
//         position: absolute;
//         z-index: -1;
//         bottom: -5px;
//         left: -5px;
//     }
// `;

// const StyledCardMeta = styled(Card.Meta)`
//     text-align: center;
// `;

export default function Cards() {
    return (
        <OuterContainer id="content">
            <Container className="container">
                <div className='row'>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div
                        >
                            {/* <div title="Courses" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." /> */}
                        </div>
                    </CardContainer>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div
                        >
                            {/* <div title="Knowledge" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." /> */}
                        </div>
                    </CardContainer>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div
                        >
                            {/* <div title="Events" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." /> */}
                        </div>
                    </CardContainer>
                    <CardContainer className='col-xs-12 col-sm-6 col-lg-3'>
                        <div
                        >
                            {/* <StyledCardMeta title="Latest News" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." /> */}
                        </div>
                    </CardContainer>
                </div>
            </Container>
        </OuterContainer>
    );
}