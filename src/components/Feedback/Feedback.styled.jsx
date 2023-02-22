
import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 18px;
`

export const FeedbackBtn = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 12px;
    background-color: green;
    text-transform: capitalize;
    font-size: 25px;
  &:hover {
    background-color: blue;
    color: #eee;
  }
`;