import { Carousel } from 'antd';
import styled from 'styled-components';

const ItemContainer = styled.h3`
    color: #fff;
    text-align: center;
    background-color: #364d79;
`;

export default function CustomizeCarousel() {
    return (
        <Carousel style={{ position: 'relative' }}>
            <div>
                <ItemContainer>
                    <div>
                        <img src="img/slides/1.jpg" alt="" style={{ width: '100vw', height: 'auto', objectFit: 'contain' }} />
                        <div style={{ position: 'absolute', bottom: 30, marginBottom: 20, paddingTop: 10, width: '100vw', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                            <strong>Online Education</strong>
                            <p>The best educational template</p>
                        </div>
                    </div>
                </ItemContainer>
            </div>
            <div>
                <ItemContainer><img src="img/slides/2.jpg" alt="" style={{ width: '100vw', height: 'auto', objectFit: 'contain' }} /></ItemContainer>
            </div>
            <div>
                <ItemContainer><img src="img/slides/3.jpg" alt="" style={{ width: '100vw', height: 'auto', objectFit: 'contain' }} /></ItemContainer>
            </div>
        </Carousel>
    );
}