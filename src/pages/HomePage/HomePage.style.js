import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f3f4f6;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #1a202c;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.05em;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
