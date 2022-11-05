import styled from 'styled-components';

export const Section = styled.section`
  margin: 2rem 0;
`;

export const Card = styled.div`
  min-height: 16rem;
  border-radius: 32px;
  overflow: hidden;
  position: relative;

  p {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
  }

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
