import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(255,255,255);


`;

Container.Img = styled.img`
  width: 100px;
  user-select: none;
  /* display: block; */
`;
Container.Many=styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-end;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  & > ul{
    gap: 20px;
    padding-top: 20px;
    margin-right: 100px;
    text-decoration: none;
    list-style: none;


  }
  `
