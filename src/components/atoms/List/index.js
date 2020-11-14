import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme.js';

const styles = css`
  margin: 0;
  padding: 0 1em;
  line-height: 1rem;

  li {
    counter-increment: counter;
    line-height: 1rem;
    padding-left: 3em;
    list-style: none;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 23px;
    position: relative;
    min-height: 42px;
    display: flex;
    align-items: center;
  }

  li::before {
    content: counter(counter);
    right: 100%; 
    margin-right: calc(36px * -1);
    position: absolute;
    border-radius: 50%;
    padding: 0;
    height: 36px;
    width: 36px;
    line-height: 36px;
    background-color:${theme.color.primaryLighter};
    color: ${theme.color.primary};
    text-align: center;
    font-weight: bold;
  }
`


const List = ({ ...props }) => {
    return React.createElement(styled.ol`${styles}`, props)
}

export default List
