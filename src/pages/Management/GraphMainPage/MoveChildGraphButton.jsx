import React from 'react';
import styled from 'styled-components';

const SendButtonContainer = styled.p`
  position: relative;
  bottom: 0;
  right: 0;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #f9c515;
  width: 100%; /* 좌우로 크게 설정 */
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  padding: 10px; /* 좌우 여백을 크게 조절하여 텍스트와 버튼의 크기를 맞춥니다 */
  font-size: 20px; /* 텍스트 크기를 크게 설정 */
  cursor: pointer;
`;

const MoveChildGraphButton = () => {
  const getChildGraphButtonClick = () => {
    //TODO : 우리 아이 계좌 소비 통계 페이지로 이동 ajax 연결
    console.log("우리 아이 계좌 소비 통계 페이지 버튼 입력됨");
  };

  return (
    <SendButtonContainer>
      <Button onClick={getChildGraphButtonClick}>우리 아이 소비 통계 보러 가기</Button>
    </SendButtonContainer>
  );
};

export default MoveChildGraphButton;
