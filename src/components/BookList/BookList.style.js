import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const ListContainer = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #f6f8fc 0%, #e9ecf5 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  perspective: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2.5rem;
  }
`;

export const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NoBooks = styled(motion.div)`
  text-align: center;
  font-size: 1.4rem;
  color: #4a5568;
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;