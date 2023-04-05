import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { programItems } from '@/constant';

const Header = styled.div`
    color: #444;
    font-size: 16px;
    font-weight: 500;
`;

const CloseIconSvg = <svg viewBox="0 0 12 12" version="1.1"
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

export default function Programs() {
    const [modalContent, setModalContent] = useState<{ heading: string; extendContent: ReactNode } | undefined>(undefined)
    return (
        <section id="work2" className="page-section page" style={{ backgroundColor: '#eee' }}>
            <div className='container' >
                <div className="heading text-center">
                    <h2 style={{ color: '#000' }}>Programs</h2>
                    <p style={{ color: 'gray' }}>Embark on a journey of self-discovery with our diverse range of meditation courses, catering to different styles such as mindfulness, transcendental, and loving-kindness.</p>
                </div>
                <Accordion allowZeroExpanded style={{ border: 0 }}>
                    {programItems.map((item) => (
                        <AccordionItem key={item.heading}>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
                                    <Header>{item.heading}</Header>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {item.content} {item.extendContent ? <span style={{ color: 'blue', marginLeft: 24 }} onClick={() => setModalContent({
                                    heading: item.heading,
                                    extendContent: item.extendContent,
                                })}>read more...</span> : ''}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
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
                        borderRadius: 16,
                    },
                }}
                contentLabel="Program Modal"
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