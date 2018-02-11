import React from 'react';
import {
  PadStyled,
  Name,
  Short
} from './PadStyled';

const Pad = ({ name, short, visible }) => (
  <PadStyled visible={visible}>
    <Name>{name}</Name>
    <Short>{short}</Short>
  </PadStyled>
)

export default Pad;