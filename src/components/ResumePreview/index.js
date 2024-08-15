import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.background};
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const IframeContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 800px;
  border: none;
  border-radius: 16px;
`;

function Resume() {
    return (
      <Container id="resume">
        <Title>Resume</Title>
        <IframeContainer>
          <StyledIframe
            src="https://yellow-dominica-8.tiiny.site"
            allowFullScreen
            title="Resume PDF"
          />
        </IframeContainer>
      </Container>
    );
  }
export default Resume;
