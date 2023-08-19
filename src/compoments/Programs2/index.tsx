import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import ImageShape, { ImageShapeEnum } from '../Image';
import { programItems } from '@/constant';
import CustomizeModal from '../Modal';

const ProgramContainer = styled.section`
    background-color: #E2E9DD;
`;

const Title = styled.h2`
    color: #281915;
`;

const SubTitle = styled.div`
    color: #8B4513;
    display: flex; justify-content: center;
    margin: 15px 0 30px 0;
    font-size: 16px;
    & > div {
        max-width: 768px;
    }
`;

const ProgramContent = styled.div`
    padding: 30px 0;
    border-top: 1px dashed #CD853F;
    color: #8B4513;
`;

const Header = styled.h4`
    color: #281915;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
    text-shadow: 1.5px 1.5px 1px rgba(40, 25, 21, 0.1);
`;

const ReadMore = styled.span`
    color: #281915;
    margin-left: 4px;
    cursor: pointer;
    font-size: 16px;
`;

const CloseIconSvg = (
    <svg
        viewBox="0 0 12 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11"
            x2="11" y2="1"
            stroke="black"
            stroke-width="2" />
        <line x1="1" y1="1"
            x2="11" y2="11"
            stroke="black"
            stroke-width="2" />
    </svg>
);

export default function Programs2() {
    const [modalContent, setModalContent] = useState<{ heading: string; extendContent: ReactNode } | undefined>(undefined);
    const handleModalClose = () => {
        setModalContent(undefined);
    }
    const renderContent = (item: any, index: number) => {
        const shape = 'shape' + String(index % 3 + 1) as ImageShapeEnum;
        return (
            <ProgramContent key={item.heading} className="row">
                <div className='col-md-4 col-sm-12' style={{ textAlign: 'center' }}><ImageShape imageUrl={item.imgSrc} shape={shape} /></div>
                <div className='col-md-8 col-sm-12'>
                    <Header>{item.heading}</Header>
                    <div>
                        {item.content}
                        {item.extendContent ? (
                        <ReadMore onClick={() => setModalContent({
                            heading: item.heading,
                            extendContent: item.extendContent,
                        })}>
                            Read more...
                        </ReadMore>
                        ) : ''}
                    </div>
                </div>
            </ProgramContent>
        );
    }
    return (
        <ProgramContainer id="work2" className="page-section page">
            <div className='container' >
                <div className="heading text-center">
                    <Title>Programs</Title>
                    <SubTitle>
                        <div>Embark on a journey of self-discovery with our diverse range of meditation courses, complementing your practice of mindfulness, transcendental, and loving-kindness, deepen the practice.</div>
                    </SubTitle>
                </div>
                {programItems.map((item, index) => renderContent(item, index))}
            </div>
            <CustomizeModal
                isOpen={Boolean(modalContent)}
                onClose={handleModalClose}
                heading={modalContent?.heading}
                extendContent={modalContent?.extendContent}
            />
        </ProgramContainer>
    );
}