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

export default function CustomizeCarousel() {
    return (
        <Carousel effect="fade" autoplay style={{ position: 'relative' }}>
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg.jpg" alt="" />
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <StyledImg src="img/banner-bg2.jpg" alt="" />
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <StyledImg src="img/banner-bg3.jpg" alt="" />
                </ItemContainer>
            </div>
        </Carousel>
    );
}