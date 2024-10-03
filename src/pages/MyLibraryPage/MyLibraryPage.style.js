import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const PageContainer = styled(motion.div)`
  padding: 3rem;
  background: linear-gradient(135deg, #f6f8fc 0%, #e9ecf5 100%);
  min-height: 100vh;
`;

export const ContentWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
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

export const EmptyMessage = styled(motion.p)`
  font-size: 1.4rem;
  color: #4a5568;
  text-align: center;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;
