import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1.1rem;
  border: 2px solid #3b5998;
  border-radius: 30px;
  outline: none;
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.1);
  color: #3b5998;

  &::placeholder {
    color: #1a2a6c;
  }

  &:focus {
    border-color: #4fc3f7;
    box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.3);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0d2eb;
`;
