import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
`;

const Image = ({ image, ...props }) => {
    const svg = require(`!raw-loader!./images/${image}.svg`)
    return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

export default Image;