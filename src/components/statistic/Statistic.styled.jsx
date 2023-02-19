import styled from 'styled-components';

export const Stat = styled.section`
  background-color: #f6ebeb;
  width: auto;
  height: 100%;
  padding: 40px;
`;

export const Conteiner = styled.div`
  background-color: #fff;
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  border: 1px solid white;
  padding: 20px;
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  padding-bottom: 5px;
`;

export const Perc = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
