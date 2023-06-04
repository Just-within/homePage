import styled from 'styled-components';

const Content = styled.span`
    font-size: 16px;
    padding-left: 24px;
    color: #8B4513;
    text-shadow: 1.5px 1.5px 1px rgba(40, 25, 21, 0.1);
`;

const ScrollingContent = styled.div`
    overflow: auto;
    max-height: 80vh;
    & > .subtitle {
        font-size: 16px;
        color: #281915;
        margin: 8px 0;
        font-weight: 900;
        text-decoration: underline;
    }
`;


export const programItems = [{
    heading: '3-WEEK CLASSES INTRODUCTION TO CHAN MEDITATION',
    content: (
        <Content>
            Experience Chan Meditation is a one-time introduction that introduces the practice of Chan Meditation. Participants will learn the fundamental philosophy, postures, and breathing techniques used in the practice, and experience a guided meditation session led by an experienced teacher. The program is suitable for anyone interested in exploring meditation and mindfulness, regardless of experience level. By the end of the program, participants will have a basic understanding of Chan Meditation and the opportunity to connect with others who share their interests. 
This 3 week's Session is designed to establish a strong foundation for your spiritual journey. At the heart of this program is the understanding that spiritual practice is not a religion, but a way of cultivating inner peace and well-being. It can be complementary to any religious or spiritual belief system and can help individuals deepen their understanding of themselves and the world around them.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            Experience Chan Meditation is a one-time introduction that introduces the practice of Chan Meditation. Participants will learn the fundamental philosophy, postures, and breathing techniques used in the practice, and experience a guided meditation session led by an experienced teacher. The program is suitable for anyone interested in exploring meditation and mindfulness, regardless of experience level. By the end of the program, participants will have a basic understanding of Chan Meditation and the opportunity to connect with others who share their interests. 
This 3 week's Session is designed to establish a strong foundation for your spiritual journey. At the heart of this program is the understanding that spiritual practice is not a religion, but a way of cultivating inner peace and well-being. It can be complementary to any religious or spiritual belief system and can help individuals deepen their understanding of themselves and the world around them.
            <div className='subtitle'>Requirements & Detail</div>
            Classes total hours is 1.5hr x 3 and no prerequisites.<br />
            <div className='subtitle'>Rules</div>
            If you are interested in taking a three-class introduction, yet none of the time slots are convenient for you, it is possible to inquire to schedule an Introduction class at the time of your desire. With 5 people who have not taken the class before and are interested, we will try our best to schedule a time fit for you.
        </ScrollingContent>
    ),
    imgSrc: 'img/program-1.jpeg',
},
{
    heading: 'Q&A',
    content: (
        <Content>
            This program provides an opportunity for participants to ask questions about their meditation practice and receive guidance and support from experienced teachers. The Q&amp;A sessions are held online, allowing for easy access and flexibility.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            The Weekly Online Q&amp;A program is an invaluable resource for participants who are seeking guidance and support in their meditation practice. Led by experienced teachers, the program provides a safe and supportive space for participants to ask questions, share their experiences, and receive personalized feedback and guidance.<br />
            <br />
            The program is designed to be flexible and accessible, with Q&amp;A sessions held online each week. This means that participants can join from anywhere in the world and at a time that is convenient for them. Whether you are a beginner or an experienced meditator, the Q&amp;A sessions offer a unique opportunity to deepen your understanding of meditation and to receive personalized support on your journey.<br />
            <br />
            During the Q&amp;A sessions, participants will have the opportunity to ask questions about their meditation practice, as well as explore topics related to mindfulness, concentration, and compassion. They will also have the opportunity to connect with other like-minded individuals who share their commitment to meditation and personal growth.<br />
            <br />
            The teachers leading the Q&amp;A sessions are highly experienced and knowledgeable in the practice of Chan meditation. They will offer practical advice and guidance, as well as share their own insights and experiences to help participants deepen their understanding of meditation and cultivate greater awareness and inner peace.<br />
            <br />
            Overall, the Weekly Online Q&amp;A program is an essential component of any meditation practice, providing ongoing guidance, support, and inspiration to help participants stay on track and achieve their goals.<br />
            <div className='subtitle'>Requirements & Detail</div>
            No prerequisites but recommend completing Intro to Chan meditation. Q&A Sessions are provided online and offline. Depending on your location. 
            <div className='subtitle'>Rules</div>
            After completing a round of Introductions, teachers can announce brother Miao Ming’s Q&A session and/or schedule online Q&A sessions with our meditation Teachers.
        </ScrollingContent>
    ),
    imgSrc: 'img/program-2.jpeg',
},
{
    heading: '8-WEEK INTRODUCTION TO CHAN SESSION',
    content: (
        <Content>
            This 8-week Session is designed to establish a strong foundation for your spiritual journey. At the heart of this program is the understanding that spiritual practice is not a religion, but a way of cultivating inner peace and well-being. It can be complementary to any religious or spiritual belief system and can help individuals deepen their understanding of themselves and the world around them.
            Throughout the 8 weeks, we will explore the teachings of Chan and provide instruction on basic meditation techniques including belly breathing, sitting postures, mudras, and chakras. We will also explore the relationship between meditation practice and everyday life, helping you to integrate your practice into your daily routine.
            Our experienced teachers will guide you through the program, offering personalized support and guidance to help you deepen your practice and achieve your spiritual goals. Join us for this transformative 8-week class and start your journey towards greater self-awareness and inner peace.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            This 8-week Session is designed to establish a strong foundation for your spiritual journey. At the heart of this program is the understanding that spiritual practice is not a religion, but a way of cultivating inner peace and well-being. It can be complementary to any religious or spiritual belief system and can help individuals deepen their understanding of themselves and the world around them.
            Throughout the 8 weeks, we will explore the teachings of Chan and provide instruction on basic meditation techniques including belly breathing, sitting postures, mudras, and chakras. We will also explore the relationship between meditation practice and everyday life, helping you to integrate your practice into your daily routine.
            Our experienced teachers will guide you through the program, offering personalized support and guidance to help you deepen your practice and achieve your spiritual goals. Join us for this transformative 8-week class and start your journey towards greater self-awareness and inner peace.
            <div className='subtitle'>Requirements & Detail</div>
            N/A
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-3.jpg',
},
{
    heading: 'ONE-TO-ONE',
    content: (
        <Content>The One-to-One Discussion program, available by reservation, provides an opportunity for participants to have a private consultation with an experienced meditation teacher. This program is designed to address specific questions or concerns related to meditation practice, and to provide personalized guidance and support.</Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            to have a private consultation with an experienced meditation teacher. This program is designed to address specific questions or concerns related to meditation practice, and to provide personalized guidance and support.<br />
            <br />
            During these private sessions, participants will have the opportunity to discuss their individual meditation practice in detail, set personalized goals, and to receive expert guidance and advice from an experienced teacher. These sessions are tailored to meet the individual needs of each participant, and are designed to help them deepen their practice and overcome any obstacles or challenges they may be facing.<br />
            <br />
            The One-to-One Discussion program is suitable for practitioners of all levels, from beginners to advanced practitioners. It is an excellent opportunity to receive personalized guidance and support from an experienced teacher, and to deepen your understanding and practice of meditation.<br />
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: Completing Introduction to Chan meditation class & participating in a weekly practice session. <br />
            Time: Normal time slots are 1 hour long. <br />
            Frequency: once a month <br />
            We recommend you book a time with a meditation teacher you are familiar with or at the same time with the same teacher, as monthly discussion topics, can be better planned and quality interaction.
            <div className='subtitle'>Rules</div>
            Disclaimer: These one-on-one sessions are designed to deepen each individual’s Chan practice, not used to substitute psychotherapy or any professional treatment sessions. Teachers are also volunteers who willingly share their time to assist newer practitioners to deepen their practice. Please use this resource with care.
        </ScrollingContent>
    ),
    imgSrc: 'img/program-8.jpg',
},
{
    heading: 'WEEKLY CHAN PRACTICE',
    content: (
        <Content>
            Weekly practice sessions for participants to deepen their meditation practice in a supportive group environment. Work together to overcome leg pain. Practitioners can ideally choose a time that corresponds to the pace of the 8-week session program. The sittings include periods of silent meditation, and guided meditations.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            Weekly practice sessions for participants to deepen their meditation practice in a supportive group environment. Work together to overcome leg pain. Practitioners can ideally choose a time that corresponds to the pace of the 8-week session program. The sittings include periods of silent meditation, and guided meditations.
            <div className='subtitle'>Requirements & Detail</div>
            N/A
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-4.jpg',
},
{
    heading: 'INTRODUCTION TO CHAN MASTER & CHAN CULTURE',
    content: (
        <Content>
            Those that have witnessed in meditation, might be curious about the origins of Heart Chan teachings in general. This class provides an in-depth introduction to Our Chan Master.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            Those that have witnessed in meditation, might be curious about the origins of Heart Chan teachings in general. This class provides an in-depth introduction to Our Chan Master
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: after completing the 8-week introduction to Chan session. The teacher will ask participants and give recommendations to join. 
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-9.jpg',
},
{
    heading: 'TOPIC DISCUSSIONS',
    content: (
        <Content>
            This program offers a series of topic discussions focused on themes related to Chan practice such as the nature of mind, the heart, and the integration of practice into daily life. These discussions are facilitated by experienced teachers and are open to all levels of practitioners.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            The Chan Meditation program offers a series of engaging and thought-provoking topic discussions that are focused on key themes related to the practice of Chan meditation. These discussions are facilitated by experienced teachers who offer unique insights and perspectives on the topics at hand, providing participants with a deeper understanding of the principles and techniques of Chan practice.<br />
            <br />
            The topics covered in these discussions are diverse and cover a broad range of themes related to meditation and mindfulness. Some of the key themes include the nature of the mind, emotions, the power of thoughts, the heart, the purpose of life, and the role of religions in our lives. These discussions offer a unique opportunity for participants to explore these topics in depth and gain a deeper understanding of their own inner workings and the world around them.<br />
            <br />
            The program also places a strong emphasis on the integration of meditation practice into daily life, offering practical guidance and advice on how to bring mindfulness and meditation into everyday activities. The topics related to the integration of practice in daily life include self-reflection, purity, karma, peace, and gratitude. By learning to cultivate these qualities, participants will be better equipped to lead a more mindful and compassionate life, both on and off the meditation cushion.<br />
            <br />
            The program is open to practitioners of all levels, from beginners to advanced practitioners. Participants will have the opportunity to engage in meaningful discussions, ask questions, and connect with other like-minded individuals who share their passion for meditation and personal growth. Overall, this program offers a unique and enriching experience that will deepen your understanding of Chan practice and help you to live a more fulfilling and meaningful life.<br />
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: Completing Introduction to Chan meditation class & participates in a weekly practice session. 
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-7.jpg',
},
{
    heading: 'TEACHER TRAINING',
    content: (
        <Content>
            Train to become a skilled meditation instructor through our Teacher Training course, focusing on cultivating expertise in guiding chan meditation practices.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            Train to become a skilled meditation instructor through our Teacher Training course, focusing on cultivating expertise in guiding chan meditation practices.
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: Completing Introduction to Chan meditation class & participates in a weekly practice session. 
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-13.jpg',
},
{
    heading: 'PROFICIENCY CLASS',
    content: (
        <Content>
            Deepen your meditation proficiency with this course, focusing on cultivating concentration, tranquility, and insight. Enhance your practice, experience inner stillness, and achieve greater levels of meditative mastery.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            Deepen your meditation proficiency with this course, focusing on cultivating concentration, tranquility, and insight. Enhance your practice, experience inner stillness, and achieve greater levels of meditative mastery.
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: Completing Introduction to Chan meditation class & participates in a weekly practice session. 
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-12.jpg',
},
{
    heading: 'SCHEDULED RETREAT',
    content: (
        <Content>
            Taiwan, USA, Online.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            Taiwan, USA, Online 
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: Completing Introduction to Chan meditation class & participates in a weekly practice session. 
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-11.jpg',
},
{
    heading: 'HEART IMPRINT CHAN',
    content: (
        <Content>
            For those who are serious about meditation practice, have witnessed its benefits, and resonate strongly with the practice, we provide
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            For those who are serious about meditation practice, have witnessed its benefits, and resonate strongly with the practice, we provide
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: after completing the 8-week introduction to Chan session and completing Meditation group leader Training . The teacher will ask participants and give recommendations to join. 
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-14.jpg',
},
{
    heading: 'ORIGINS OF CHAN HISTORY OF CHAN LINEAGE',
    content: (
        <Content>
            This program offers a comprehensive overview of the history and passing of Chan.  Participants will learn about the origins of the tradition, the major figures and lineages, and how Chan practice has been practiced throughout history. The difficulties and challenges the lineage faced and how this practice has withstood the test of time.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            This program offers a comprehensive overview of the history and passing of Chan.  Participants will learn about the origins of the tradition, the major figures and lineages, and how Chan practice has been practiced throughout history. The difficulties and challenges the lineage faced and how this practice has withstood the test of time.
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: after completing the 8-week introduction to Chan session and completing Heart Chan teacher training. The teacher will ask participants and give recommendations to join.
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-6.jpg',
},
{
    heading: "STUDY OF CHAN MASTER'S TEACHING",
    content: (
        <Content>
            This program provides an opportunity for participants to explore the rich literature of Chan Teachings. The program is led by experienced teachers and includes group discussions and guided meditations. This will be a book-based inquiry session. Through thoughtful inquiry and reflection, they will gain a deeper understanding of the principles and practices of Chan and learn how to apply.
        </Content>
    ),
    extendContent: (
        <ScrollingContent>
            <div className='subtitle'>Description</div>
            This program provides an opportunity for participants to explore the rich literature of Chan Teachings. The program is led by experienced teachers and includes group discussions and guided meditations. This will be a book-based inquiry session. Through thoughtful inquiry and reflection, they will gain a deeper understanding of the principles and practices of Chan and learn how to apply.
            <div className='subtitle'>Requirements & Detail</div>
            Prerequisites: after completing the 8-week introduction to Chan session. The teacher will ask participants and give recommendations to join.
            <div className='subtitle'>Rules</div>
            N/A
        </ScrollingContent>
    ),
    imgSrc: 'img/program-5.jpg',
},
];