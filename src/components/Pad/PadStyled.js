import styled from 'styled-components';
import { timingFunctions } from 'polished';

export const PadStyled = styled.div`
  position: absolute;
  bottom: ${ props => props.visible ? '0' : '-50vh' };
  background: #25272D;
  width: 100%;
  height: 50vh;
  z-index: 20;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  flex-direction: column;
  transition: bottom 300ms ${timingFunctions('easeOutQuad')};
  box-sizing: border-box;
  padding: 20px 40px;
  box-shadow: -16px 0 56px rgba(0,0,0,0.4);
`;

export const Name = styled.div`
  font-size: 3em;
  color: #fff;
  font-weight: 600;
  text-align: left;
`;

export const Short = styled.div`
  font-size: 1em;
  color: rgba(255,255,255,.6);
  text-align: left;
  line-height: 1.5em;
`;