import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ImageShape, { ImageShapeEnum } from '../Image';
import { programItems } from '@/constant';

const ProgramContainer = styled.section`
    background-color: #eee;
`;

const Title = styled.h2`
    color: #000;
`;

const SubTitle = styled.div`
    color: gray;
    display: flex; justify-content: center;
    margin: 15px 0 30px 0;
    & > div {
        max-width: 768px;
    }
`;

const ProgramContent = styled.div`
    padding: 30px 0;
    border-top: 1px dashed #c2c2d6;
`;

const Header = styled.h4`
    color: #444;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
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
    const [modalContent, setModalContent] = useState<{ heading: string; extendContent: ReactNode } | undefined>(undefined)
    const renderContent = (item: any, index: number) => {
        const shape = 'shape' + String(index % 3 + 1) as ImageShapeEnum;
        return (
            <ProgramContent key={item.heading} className="row">
                <div className='col-md-4 col-sm-12' style={{ textAlign: 'center' }}><ImageShape imageUrl={item.imgSrc} shape={shape} /></div>
                <div className='col-md-8 col-sm-12'>
                    <Header>{item.heading}</Header>
                    <div>{item.content}{item.extendContent ? <span style={{ color: 'blue', marginLeft: 4, cursor: 'pointer', fontSize: 16 }} onClick={() => setModalContent({
                        heading: item.heading,
                        extendContent: item.extendContent,
                    })}>read more...</span> : ''}</div>

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
                        <div>Embark on a journey of self-discovery with our diverse range of meditation courses, catering to different styles such as mindfulness, transcendental, and loving-kindness.</div>
                    </SubTitle>
                </div>
                {programItems.map((item, index) => renderContent(item, index))}
            </div>
            <Modal
                isOpen={Boolean(modalContent)}
                onRequestClose={() => setModalContent(undefined)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: 16,
                        border: 0,
                        paddingBottom: 35,
                    },
                }}
                contentLabel="Program Modal"
            >
                <div style={{ position: 'relative' }}>
                    <div style={{ color: '#000', maxWidth: '75vw', fontSize: 24, fontWeight: 500, marginBottom: 10 }}>{modalContent?.heading}</div>
                    <div onClick={() => setModalContent(undefined)} style={{ position: 'absolute', right: 8, top: 8, width: 20, height: 20 }}>{CloseIconSvg}</div>
                </div>
                <div style={{ color: '#000', fontSize: 16 }}>{modalContent?.extendContent}</div>
            </Modal>
        </ProgramContainer>
    );
}