import styled from 'styled-components';

export const Box = styled.div`
  background-color: #d2cfcf;
  padding: 50px;

  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box2 = styled.div`
  background-color: #fff;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  height: 100%;
`;

export const Pic = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100%;
  background-color: #877d7d;
`;

export const Descr = styled.div``;

export const Tag = styled.p`
  color: grey;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin: 0;
  padding-top: 15px;
`;

export const Loc = styled.p`
  color: grey;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 40px;
`;
export const Name = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin: 0;
  padding-top: 40px;
`;

export const List = styled.ul`
  background-color: #e2dada;
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  border: 1px solid grey;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
