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

const infoStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '30px',
    marginBottom: '20px',
    paddingTop: '10px',
    width: '100vw',
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#000',
    textAlign: 'center',
}

export default function CustomizeCarousel() {
    return (
        <Carousel style={{ position: 'relative' }}>
            <div>
                <ItemContainer>
                    <div>
                        <StyledImg src="img/slides/1.jpg" alt="" />
                        <div style={infoStyle}>
                            <strong>Online Education</strong>
                            <p>The best educational template</p>
                        </div>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <StyledImg src="img/slides/2.jpg" alt="" />
                    <div style={infoStyle}>
                        <strong>School Education</strong>
                        <p>Get all courses with on-line content</p>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer>
                    <StyledImg src="img/slides/3.jpg" alt="" />
                    <div style={infoStyle}>
                        <strong>Collage Education</strong>
                        <p>The best educational template</p>
                    </div>
                </ItemContainer>
            </div>
        </Carousel>
    );
}