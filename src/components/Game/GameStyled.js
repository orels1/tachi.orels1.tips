import styled, { keyframes } from 'styled-components';
import { timingFunctions } from 'polished';

const show = keyframes`
  from {
    top: 30px;
    opacity: 0;
  }

  to {
    top: 0px;
    opacity: 1;
  }
`;

export const Body = styled.div`
  position: absolute;
  bottom: -70px;
  background: #25272D;
  width: 100%;
  height: 70px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  display: flex;
  flex-direction: column;
  transition: bottom 300ms ${timingFunctions('easeOutQuad')}
`;

export const Header = styled.div`
  background-image: ${props => props.background && `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #353740;
  height: 300px;
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  transition: background-position 300ms ${timingFunctions('easeOutQuad')};
`;

export const GameStyled = styled.div`
  position: relative;
  display: flex;
  top: 30px;
  opacity: 0;
  flex-direction: column;
  height: 300px;
  border-radius: 7px;
  background: #353740;
  overflow: hidden;
  cursor: pointer;

  &:hover ${Body} {
    bottom: 0px;
  }

  &:hover ${Header} {
    background-position: center -70px;
  }

  animation: ${show} 300ms ${timingFunctions('easeOutQuad')} ${ props => `${props.order * 50 }ms`} 1;
  animation-fill-mode: forwards;
`;

export const Title = styled.div`
  margin: 10px 15px 7px 15px;
  width: 80%;
  height: 18px;
  color: #626675;
  text-align: left;
  border-radius: 4px;
  background: ${props => props.stub && '#626675'};
`;

export const Info = styled.div`
  margin: 7px 15px 10px 15px;
  width: 30%;
  height: 14px;
  background: #626675;
  border-radius: 4px;
`;

export const Selection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(255,255,255,.2);
  opacity: ${ props => props.selected ? 1 : 0};
  transition: opacity 300ms ease;
`;
