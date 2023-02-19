import styled from 'styled-components';

export const Sect = styled.section`
  display: flex;
  align-items: center;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
  justify-content: center;
  margin-right: 10px;
`;

export const Pic = styled.img`
  background-color: #696666;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
`;
