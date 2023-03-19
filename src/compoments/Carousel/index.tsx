import { Carousel } from 'antd';
import styled from 'styled-components';

const ItemContainer = styled.h3`
    color: #fff;
    text-align: center;
    background-color: #364d79;
`;

const StyledImg = styled.img`
    width: 100vw;
    height: auto;
    object-fit: contain;
`;

const Text = styled.div`
    width: 100vw;
    position: absolute;
    text-align: center;
    bottom: 75px;
`;

export default function CustomizeCarousel() {
    return (
        <Carousel effect="fade" autoplay style={{ position: 'relative' }}>
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg.jpg" alt="" />
                        <Text>Journey within to realize everything you ever wanted is just within.</Text>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <StyledImg src="img/banner-bg2.jpg" alt="" />
                    <Text>Journey within to realize everything you ever wanted is just within.</Text>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <StyledImg src="img/banner-bg4.jpg" alt="" />
                    <Text>Journey within to realize everything you ever wanted is just within.</Text>
                </ItemContainer>
            </div>
        </Carousel>
    );
}