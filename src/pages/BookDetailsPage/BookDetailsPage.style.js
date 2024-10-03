import styled from 'styled-components';

export const BookDetailsWrapper = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  background: linear-gradient(135deg, #1a2a6c 0%, #2a4085 50%, #3b5998 100%);
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
`;

export const BookContent = styled.div`
  padding: 3rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    z-index: -1;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: -1px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

export const InfoItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  color: #a0d2eb;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const InfoValue = styled.span`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Description = styled.p`
  margin-top: 2rem;
  line-height: 1.8;
  color: #e6f3ff;
  font-size: 1.1rem;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

export const Button = styled.button`
  background-color: #4fc3f7;
  color: #1a2a6c;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #81d4fa;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
