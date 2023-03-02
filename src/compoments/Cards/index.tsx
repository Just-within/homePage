import styled from 'styled-components';
import { Card } from 'antd';

const OuterContainer = styled.section`
    margin-top: 20px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
`;

const Icon = styled.i`
    text-align: center;
    padding: 30px 0 20px 0;
`;

const StyledCard = styled(Card)`
    &:before {
        content: "";
        width: 60px;
        height: 60px;
        background: yellow;
        float: right;
        position: absolute;
        z-index: -1;
        top: -5px;
        right: -5px;
    }
    &:after {
        content: "";
        width: 60px;
        height: 60px;
        background: yellow;
        float: right;
        position: absolute;
        z-index: -1;
        bottom: -5px;
        left: -5px;
    }
`;

const StyledCardMeta = styled(Card.Meta)`
    text-align: center;
`;

export default function Cards() {
    return (
        <OuterContainer id="content">
            <Container className="container">
                <StyledCard
                    hoverable
                    style={{ width: 240, borderRadius: 0 }}
                    cover={<Icon><img src="img/5.png" alt="" /></Icon>}
                >
                    <StyledCardMeta title="Courses" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." />
                </StyledCard>

                <StyledCard
                    hoverable
                    style={{ width: 240, borderRadius: 0, marginLeft: 16 }}
                    cover={<Icon><img src="img/1.png" alt="" /></Icon>}
                >
                    <StyledCardMeta title="Knowledge" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." />
                </StyledCard>
                <StyledCard
                    hoverable
                    style={{ width: 240, borderRadius: 0, marginLeft: 16 }}
                    cover={<Icon><img src="img/2.png" alt="" /></Icon>}
                >
                    <StyledCardMeta title="Events" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." />
                </StyledCard>
                <StyledCard
                    hoverable
                    style={{ width: 240, borderRadius: 0, marginLeft: 16 }}
                    cover={<Icon><img src="img/3.png" alt="" /></Icon>}
                >
                    <StyledCardMeta title="Latest News" description="Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue." />
                </StyledCard>
            </Container>
        </OuterContainer>
    );
}