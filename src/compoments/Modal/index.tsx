import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

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

const Header = styled.div`
  position: relative;
  & > .heading {
    color: #281915;
    max-width: 75vw;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  & > .close-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  color: #8B4513;
  font-size: 16px;
`;

export default function CustomizeModal({
  isOpen,
  onClose,
  heading,
  extendContent,
}: {
  isOpen: boolean;
  onClose: () => void;
  heading?: ReactNode;
  extendContent?: ReactNode;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
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
              backgroundColor: '#E2E9DD',
          },
      }}
      contentLabel="Program Modal"
  >
      <Header>
          <div className='heading'>{heading}</div>
          <div className='close-icon' onClick={onClose}>{CloseIconSvg}</div>
      </Header>
      <Content>{extendContent}</Content>
  </Modal>
  );
}