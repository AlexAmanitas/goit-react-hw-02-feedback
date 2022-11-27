import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  border-radius: 5px;
  border: none;
  background-color: #ddd;
  color: #333;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #4b98f5;
    color: #eee;
  }
`;
