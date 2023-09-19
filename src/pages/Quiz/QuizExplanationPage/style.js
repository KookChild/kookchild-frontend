import styled, { keyframes } from 'styled-components';
import { PRIMARY, BROWN } from '@utility/COLORS';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;  // 이 부분 추가
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
flex-direction: column;
img{
  margin-left: 20px;
}
`;

export const Spinner = styled.div`
  margin: auto;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid ${PRIMARY};
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  width: 300px;
  margin-top: 20px;
  font-size: 1.2em;
  text-align: center;
`;


export const ContentContainer = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding-bottom: 15px;
`;

export const AreaTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    position: relative;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    min-height: 100px;
`;


export const StyledTitle = styled.h1`
    font-size: 21px;
    margin-top: 10px;
    text-align: center;
`;

export const StyledLevel = styled.div`
  font-size: 11px;
  border: 1px solid ${BROWN};
  color: ${BROWN};
  border-radius: 5px;
  width: 55px;
  text-align: center;
`

export const AreaContainer = styled.div`
`;

export const StyledChoiceButton = styled.button`
    display: block;
    width: 80%;
    margin: 15px auto;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.isCorrect ? PRIMARY : '#f1f1f1'};
    color: ${props => props.isCorrect ? '#fff' : '#000'};
    font-size: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${props => props.isDisabled ? 'gray' : PRIMARY};
    border-radius: 6px;
    border: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const AreaFooterContainer = styled.div`
    position: absolute;
    width: 350px;
    padding-bottom : 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // position: fixed;
    bottom: 0px;
    margin-top: 50px;
    z-index: 1;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const DescriptionBox = styled.div`
  padding: 20px;
  position: relative;
  margin-top: 30px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: ${slideUp} 1s forwards;
`;

export const Description = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    background: white;
`;