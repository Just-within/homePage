import Slider from "react-slick";
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
        <Slider fade autoplay dots infinite autoplaySpeed={3000} speed={500} slidesToScroll={1} slidesToShow={1} cssEase="linear">
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg4.jpg" alt="" />
                        <Text>Journey within to realize everything you ever wanted is just within.</Text>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg5.jpg" alt="" />
                        <Text>Journey within to realize everything you ever wanted is just within.</Text>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg6.jpg" alt="" />
                        <Text>Journey within to realize everything you ever wanted is just within.</Text>
                    </div>
                </ItemContainer>
            </div>
        </Slider>
    );
}