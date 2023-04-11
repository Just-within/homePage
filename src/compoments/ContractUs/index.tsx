import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const IframeContainer = styled.div`
    width: 530px;
    max-width: 530px;
`;

const StyledIframe = styled.iframe`
    min-width: 100%;
    max-width: 100%;
    height: 1486px;
    border: none;
    @media screen and (min-width: 565px) {
        height: 1486px;
    }
    @media screen and (min-width: 510px) and (max-width: 565px) {
        height: 1508px;
    }
    @media screen and (min-width: 383px) and (max-width: 509px) {
        height: 1582px;
    }
    @media screen and (max-width: 382px) {
        height: 1604px;
    }
`;

export default function ContractUs() {
    return (
        <section id="contactUs" className="contact-parlex">
            <Container className="container">
                <IframeContainer>
                    <StyledIframe
                        id="JotFormIFrame-230631047148046"
                        title="Contract Us"
                        onLoad={() => {
                            window.parent.scrollTo(0, 0)
                        }}
                        allowFullScreen
                        allow="geolocation; microphone; camera"
                        src="https://form.jotform.com/230631047148046"
                        frameBorder="0"
                        scrolling="no"
                    />
                </IframeContainer>
            </Container>
        </section>
    );
}