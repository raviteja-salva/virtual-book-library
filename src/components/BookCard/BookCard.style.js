import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Card = styled(motion(Link))`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  color: #1a202c;
  font-weight: 700;
  line-height: 1.2;
`;

export const Author = styled.p`
  font-style: italic;
  margin-bottom: 0.75rem;
  color: #4a5568;
  font-size: 1.1rem;
`;

export const Genre = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2d3748;
`;

export const StarContainer = styled.div`
  display: inline-flex;
  margin-right: 0.5rem;
`;

export const Star = styled.span`
  color: ${props => props.filled ? '#fbbf24' : '#e2e8f0'};
  font-size: 1.4rem;
`;
