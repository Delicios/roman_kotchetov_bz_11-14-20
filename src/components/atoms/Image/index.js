import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
`;

const Image = ({ ...props }) => <Wrapper {...props} />;

export default Image;