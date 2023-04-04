import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ImageShape, { ImageShapeEnum } from '../Image';
import { programItems } from '@/constant';

const Header = styled.div`
    color: #444;
    font-size: 24px;
    font-weight: 500;
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
            <div key={item.heading} className="row" style={{ padding: '30px 0', borderTop: '1px dashed #c2c2d6' }}>
                <div className='col-md-4 col-sm-12' style={{ textAlign: 'center' }}><ImageShape imageUrl={item.imgSrc} shape={shape} /></div>
                <div className='col-md-8 col-sm-12'>
                    <Header>{item.heading}</Header>
                    <div>{item.content}{item.extendContent ? <span style={{ color: 'blue', marginLeft: 4, cursor: 'pointer' }} onClick={() => setModalContent({
                        heading: item.heading,
                        extendContent: item.extendContent,
                    })}>read more...</span> : ''}</div>

                </div>
            </div>
        );
    }
    return (
        <section id="work2" className="page-section page" style={{ backgroundColor: '#eee' }}>
            <div className='container' >
                <div className="heading text-center">
                    <h2 style={{ color: '#000' }}>Programs</h2>
                    <div style={{ color: 'gray', display: 'flex', justifyContent: 'center', margin: '15px 0 30px 0' }}>
                        <div style={{ maxWidth: 768 }}>Embark on a journey of self-discovery with our diverse range of meditation courses, catering to different styles such as mindfulness, transcendental, and loving-kindness.</div>
                    </div>
                </div>
                {programItems.map((item, index) => renderContent(item, index))}
            </div>
            <Modal
                isOpen={Boolean(modalContent)}
                onRequestClose={() => setModalContent(undefined)}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
                contentLabel="Example Modal"
            >
                <div style={{ position: 'relative' }}>
                    <h2 style={{ color: '#000', maxWidth: '75vw' }}>{modalContent?.heading}</h2>
                    <div onClick={() => setModalContent(undefined)} style={{ position: 'absolute', right: 8, top: 8, width: 20, height: 20 }}>{CloseIconSvg}</div>
                </div>
                <div style={{ color: '#000' }}>{modalContent?.extendContent}</div>
            </Modal>
        </section>
    );
}