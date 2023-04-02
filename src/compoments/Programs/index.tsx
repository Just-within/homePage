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

const Header = styled.div`
    color: #444;
    font-size: 16px;
    font-weight: 500;
`;

const Content = styled.p`
    padding-left: 24px;
    color: #696969;
`;

const ScrollingContent = styled.div`
    overflow: auto;
    max-height: 80vh;
`;

const items = [{
    heading: 'Experience Chan Meditation',
    content: (
        <Content>
            Experience Chan Meditation is a one-time introduction that provides an introduction to the practice of Chan Meditation. Participants will learn the fundamental philosophy, postures, and breathing techniques used in the practice, and experience a guided meditation session led by an experienced teacher. The program is suitable for anyone interested in exploring meditation and mindfulness, regardless of experience level. By the end of the program, participants will have a basic understanding of Chan Meditation and the opportunity to connect with others who share their interest.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            Experience Chan Meditation offers a one-time introduction to Chan Meditation, a practice that originated in India, but was passed to China over a thousand years ago. This program is designed to provide participants with a taste of Chan Meditation and to help them understand some of the basic principles and techniques of this practice.<br />
            <br />
            During the program, participants will learn about the fundamental philosophy of Chan Meditation, as well as the fundamental postures and breathing techniques used in the practice. They will also have the opportunity to experience a guided meditation session led by an experienced meditation teacher.<br />
            <br />
            The program is suitable for anyone who is interested in exploring meditation and mindfulness, regardless of their level of experience. Whether you are a beginner or an experienced practitioner, this program will offer you a unique opportunity to deepen your understanding of the practice and to experience the benefits of Chan Meditation.<br />
            <br />
            By the end of the program, participants will have a basic understanding of Chan Meditation. They will also have the opportunity to ask questions and connect with other like-minded individuals who share their interest in meditation and mindfulness.<br />
        </ScrollingContent>
    ),
},
{
    heading: 'Weekly Online Q&A',
    content: (
        <Content>
            This program provides an opportunity for participants to ask questions about their meditation practice and receive guidance and support from experienced teachers. The Q&amp;A sessions are held online, allowing for easy access and flexibility.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            The Weekly Online Q&amp;A program is an invaluable resource for participants who are seeking guidance and support in their meditation practice. Led by experienced teachers, the program provides a safe and supportive space for participants to ask questions, share their experiences, and receive personalized feedback and guidance.<br />
            <br />
            The program is designed to be flexible and accessible, with Q&amp;A sessions held online each week. This means that participants can join from anywhere in the world and at a time that is convenient for them. Whether you are a beginner or an experienced meditator, the Q&amp;A sessions offer a unique opportunity to deepen your understanding of meditation and to receive personalized support on your journey.<br />
            <br />
            During the Q&amp;A sessions, participants will have the opportunity to ask questions about their meditation practice, as well as explore topics related to mindfulness, concentration, and compassion. They will also have the opportunity to connect with other like-minded individuals who share their commitment to meditation and personal growth.<br />
            <br />
            The teachers leading the Q&amp;A sessions are highly experienced and knowledgeable in the practice of Chan meditation. They will offer practical advice and guidance, as well as share their own insights and experiences to help participants deepen their understanding of meditation and cultivate greater awareness and inner peace.<br />
            <br />
            Overall, the Weekly Online Q&amp;A program is an essential component of any meditation practice, providing ongoing guidance, support, and inspiration to help participants stay on track and achieve their goals.<br />
        </ScrollingContent>
    ),
},
{
    heading: 'Topic Discussions',
    content: (
        <Content>
            This program offers a series of topic discussions focused on themes related to Chan practice such as the nature of mind, the heart, and the integration of practice into daily life. These discussions are facilitated by experienced teachers and are open to all levels of practitioners.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            The Chan Meditation program offers a series of engaging and thought-provoking topic discussions that are focused on key themes related to the practice of Chan meditation. These discussions are facilitated by experienced teachers who offer unique insights and perspectives on the topics at hand, providing participants with a deeper understanding of the principles and techniques of Chan practice.<br />
            <br />
            The topics covered in these discussions are diverse and cover a broad range of themes related to meditation and mindfulness. Some of the key themes include the nature of the mind, emotions, the power of thoughts, the heart, the purpose of life, and the role of religions in our lives. These discussions offer a unique opportunity for participants to explore these topics in depth and gain a deeper understanding of their own inner workings and the world around them.<br />
            <br />
            The program also places a strong emphasis on the integration of meditation practice into daily life, offering practical guidance and advice on how to bring mindfulness and meditation into everyday activities. The topics related to the integration of practice in daily life include self-reflection, purity, karma, peace, and gratitude. By learning to cultivate these qualities, participants will be better equipped to lead a more mindful and compassionate life, both on and off the meditation cushion.<br />
            <br />
            The program is open to practitioners of all levels, from beginners to advanced practitioners. Participants will have the opportunity to engage in meaningful discussions, ask questions, and connect with other like-minded individuals who share their passion for meditation and personal growth. Overall, this program offers a unique and enriching experience that will deepen your understanding of Chan practice and help you to live a more fulfilling and meaningful life.<br />
        </ScrollingContent>
    ),
},
{
    heading: "Study of Chan Master's Teaching",
    content: (
        <Content>
            This program provides an opportunity for participants to explore the rich literature of Chan Teachings. The program is led by experienced teachers and includes group discussions and guided meditations. This will be a book based inquiry sessions. Through thoughtful inquiry and reflection, they will gain a deeper understanding of the principles and practices of Chan and learn how to apply these teachings to their daily lives.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            The Study of Chan Master's Teaching program is a focused and contemplative exploration of Chan Teachings. Through guided discussions, group study sessions, and individual reflection, participants will gain a deeper understanding of the Chan and their relevance to modern life.<br />
            <br />
            Led by experienced teachers, this program includes group discussions and book-based inquiry sessions, as well as guided meditations that allow participants to deepen their understanding of the teachings and integrate them into their daily lives.<br />
            <br />
            This program is suitable for both experienced practitioners and those new to the study of Chan. It offers a supportive and engaging environment for participants to explore the teachings of prominent Chan masters, connect with other like-minded individuals, and deepen their understanding of this ancient and profound tradition.<br />
        </ScrollingContent>
    ),
},
{
    heading: '8 Week Session',
    content: (
        <Content>This program is an fast-paced, in-depth exploration of Chan meditation practice over an 8-week period. Participants will receive guided meditation instruction.</Content>
    ),
    extendContent: (
        <ScrollingContent>
            This 8 week Session is designed to establish a strong foundation for your spiritual journey. At the heart of this program is the understanding that spiritual practice is not a religion, but a way of cultivating inner peace and well-being. It can be complementary to any religious or spiritual belief system, and can help individuals deepen their understanding of themselves and the world around them.<br />
            <br />
            Throughout the 8 weeks, we will explore the teachings of Chan and provide instruction on basic meditation techniques including belly breathing, sitting postures, mudras, and chakras. We will also explore the relationship between meditation practice and everyday life, helping you to integrate your practice into your daily routine.<br />
            <br />
            Our experienced teachers will guide you through the program, offering personalized support and guidance to help you deepen your practice and achieve your spiritual goals. Join us for this transformative 8-week class and start your journey towards greater self-awareness and inner peace.<br />
        </ScrollingContent>
    ),
},
{
    heading: 'Weekly Practice Sittings',
    content: (
        <Content>
            This program offers weekly practice sittings for participants to deepen their meditation practice in a supportive group environment. Work together to overcome leg pain. The practice session will correspond to the pace of the 8 week session program. Sync of intent together will resonate to help each other. The sittings include periods of silent meditation, guided meditations.
        </Content>
    ),
},
{
    heading: 'History of Chan Lineage',
    content: (
        <Content>
            This program offers a comprehensive overview of the history and passing of Chan. Participants will learn about the origins of the tradition, the major figures and lineages, and how Chan practice has been practiced through history. The difficulties and challenges the linage faced and how this practice has withstood the test of time.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            This program provides a thorough exploration of the historical and cultural context surrounding Chan , offering participants a comprehensive overview of its origins, prominent figures and lineages, and the evolution of Chan practice over time. Participants will also learn about the challenges and obstacles that the tradition has faced and how it has adapted and persevered in the face of adversity. This program is designed to provide participants with a deeper understanding of the rich history and cultural significance of Chan and help bring reflection to your own practice.
        </ScrollingContent>
    ),
},
{
    heading: 'One-to-One Discussion Program',
    content: (
        <Content>The One-to-One Discussion program, available by reservation, provides an opportunity for participants to have a private consultation with an experienced meditation teacher. This program is designed to address specific questions or concerns related to meditation practice, and to provide personalized guidance and support.</Content>
    ),
    extendContent: (
        <ScrollingContent>
            to have a private consultation with an experienced meditation teacher. This program is designed to address specific questions or concerns related to meditation practice, and to provide personalized guidance and support.<br />
            <br />
            During these private sessions, participants will have the opportunity to discuss their individual meditation practice in detail, set personalized goals, and to receive expert guidance and advice from an experienced teacher. These sessions are tailored to meet the individual needs of each participant, and are designed to help them deepen their practice and overcome any obstacles or challenges they may be facing.<br />
            <br />
            The One-to-One Discussion program is suitable for practitioners of all levels, from beginners to advanced practitioners. It is an excellent opportunity to receive personalized guidance and support from an experienced teacher, and to deepen your understanding and practice of meditation.<br />
        </ScrollingContent>
    ),
},
];

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
                </div>
                <Accordion allowZeroExpanded>
                    {items.map((item) => (
                        <AccordionItem key={item.heading}>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{ display: 'flex', alignItems: 'center' }}>
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