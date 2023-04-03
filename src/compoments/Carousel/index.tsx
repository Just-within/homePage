import Slider from "react-slick";
import styled from 'styled-components';

const ItemContainer = styled.div`
    color: #fff;
    text-align: center;
    background-color: #364d79;
    @media screen and (min-width: 565px) {
        font-size: 30px;
        font-weight: 600;
    }
    @media screen and (min-width: 510px) and (max-width: 565px) {
        font-size: 24px;
        font-weight: 500;
    }
    @media screen and (min-width: 383px) and (max-width: 509px) {
        font-size: 18px;
        font-weight: 500;
    }
    @media screen and (max-width: 382px) {
        font-size: 14px;
        font-weight: 500;
    }
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
    padding: 0 20px;
`;

export default function CustomizeCarousel() {
    return (
        <Slider fade autoplay infinite autoplaySpeed={3000} speed={500} cssEase="linear">
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
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg7.jpg" alt="" />
                        <Text>Journey within to realize everything you ever wanted is just within.</Text>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg8.jpg" alt="" />
                        <Text>Journey within to realize everything you ever wanted is just within.</Text>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/banner-bg9.jpg" alt="" />
                        <Text>Journey within to realize everything you ever wanted is just within.</Text>
                    </div>
                </ItemContainer>
            </div>
        </Slider>
    );
}