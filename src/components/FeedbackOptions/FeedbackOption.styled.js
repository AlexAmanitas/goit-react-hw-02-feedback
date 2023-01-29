import styled from 'styled-components';

export const FeedbackButtons = styled.div``;

export const FeedbackBtn = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  color: #ff6c00;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #ff6c00;
    color: #eee;
  }
`;
