import React from 'react';
import {
  PadStyled,
  Name
} from './PadStyled';

const Pad = ({ name, visible }) => (
  <PadStyled visible={visible}>
    <Name>{name}</Name>
  </PadStyled>
)

export default Pad;