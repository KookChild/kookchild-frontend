import React from 'react';
import styled from 'styled-components';

// SendButton.js
import Swal from 'sweetalert2'; // SweetAlert2 라이브러리 import
import './css/SendButton.css';
import axios from 'axios';


const SendButtonContainer = styled.div`
  position: relative;
  bottom: 0;
  right: 0;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #f9c515;
  width: auto; /* 자동으로 너비를 설정하여 버튼 크기를 텍스트에 맞게 만듭니다 */
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  padding: 5px 10px; /* 좌우 여백을 조절하여 텍스트와 버튼의 크기를 맞춥니다 */
  font-size: 14px;
  cursor: pointer;
`;

const AccountDetailInfoButton = ({disabled, setDisabled, childId}) => {
  const getAccountDetailButtonClick = () => {
    // TODO : 송금하기 이동 ajax 연결
      setDisabled(true);
      // API 요청 보내기
  
      Swal.fire({
        title: '<span style="font-size: 20px;">송금을\n 진행하시겠습니까?</span>',
        text: '',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#D9D9D9',
        confirmButtonText: '예',
        cancelButtonText: '아니오',
        reverseButtons: true,
        customClass: {
          // 모달에 사용할 클래스 추가
          container: 'custom-swal-container',
        },
      
      }).then((result) => { //Swal.fire then 호출
        if(result.isConfirmed){
          axios
          .post('/management/send', {
            "childId": childId, // 원하는 childId와 parentId 값을 설정
          })
          .then((response) => { // axios then 호출
            if(response.data){
              // SweetAlert2 모달 창 표시
              console.log('확인 완료');
              Swal.fire({
                title: '<span style="font-size: 20px;">우리아이에게\n 송금이 완료되었습니다.</span>',
                text: '찾아주셔서 감사합니다',
                icon: 'success',
                customClass: {
                  // 성공 알림 모달에 사용할 클래스 추가
                  container: 'custom-swal-container',
                },
                timer: 2000, // 6초 후에 모달 창을 자동으로 닫도록 설정 (밀리초 단위)
              });
            
            setDisabled(false);
          }})
          .catch((error) => {
            console.error('API 요청 실패:', error);
            // 실패한 경우 에러 처리
            // 에러 메시지를 사용하여 사용자에게 알림을 표시할 수 있습니다.
          })
          .finally(() => {
            setDisabled(false);
          });
        }else{
          Swal.fire('송금이 취소되었습니다.', '', 'info');
          setDisabled(false);
        }
      });
    }
    console.log("송금하기");


  return (
    <SendButtonContainer>
      <Button onClick={getAccountDetailButtonClick}  disabled={disabled}>송금하기</Button>
    </SendButtonContainer>
  );
};

export default AccountDetailInfoButton;
