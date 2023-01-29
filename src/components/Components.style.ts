import styled from "styled-components";

export const Input = styled.input`
  height: 45px;
  border: none;
  width: 88%;
  font-size: 16px;
  outline: none;
`;
export const Bar = styled.div`
  margin: 40px auto;
  width: 68%;
  border-radius: 30px;
  border: 1px solid #dcdcdc;

  &:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }
`;

export const MovieImg = styled.img`
  &:hover {
    box-shadow: 0px 0px 10px 10px #000000;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 55px;
  text-align: center;
`;
export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
