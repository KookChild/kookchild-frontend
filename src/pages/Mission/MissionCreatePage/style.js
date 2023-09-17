import styled from 'styled-components'
import { YELLOW, PRIMARY, GRAY, BROWN } from '@utility/COLORS'

export const AreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const ChildInfoContainer = styled.div`
  width: 342px;
  display: flex;
  align-items: center;
  justify-content: center; // 자녀 정보가 중앙에 나타나도록 수정
  flex-wrap: wrap;
`;

export const ChildContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px; // 양쪽에 간격을 줌으로써 중앙에 나타나도록 조정

  h2 {
    margin: 8px 0;
  }

  input[type="checkbox"] {
    margin-top: 4px;
  }
`;


export const ChildImage = styled.img`
  width: 70px;
  height: 70px;
`;

export const MissionDetail = styled.div`
margin-bottom:30px;
img {
      width: 86px;
      height: 86px;
  }
`
export const StyledInput = styled.input`
    font-family: Arial;
    width: calc(100% - 10px);
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    box-sizing: border-box;
    margin-top: 4px;
    background: transparent;
    outline: none;

    &:focus {
        border-bottom: 2px solid ${YELLOW};
    }
`;

export const AreaFooterContainer = styled.div`
    width: 350px;
    padding-bottom : 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0px;
    margin-top: 50px;
    z-index: 1;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const EditButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${YELLOW};
    border-radius: 6px;
    border: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: ${PRIMARY};
    }
    &:disabled {
        cursor: not-allowed;
        background-color: ${GRAY};
    }
`;

export const MissionInfoContainer = styled.div`
    width: 342px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 25px;
    max-height: 550px;
    overflow-y: auto;
`;

export const RecommendButton = styled.button`
    color: white;
    background: ${BROWN};
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    align-self: flex-end;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-right: 20px;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
