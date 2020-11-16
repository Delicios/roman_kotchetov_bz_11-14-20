import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../theme';

const Badge = styled.div`
    border-radius: 50%;
    padding: 0;
    font-size: 18px;
    height: 36px;
    width: 36px;
    line-height: 36px;
    background-color: ${theme.color.primaryLighter};
    color: ${theme.color.primary};
    text-align: center;
    font-weight: bold;
`;

Badge.propTypes = {
    palette: PropTypes.string,
}

Badge.defaultProps = {
    palette: 'primary',
}

export default Badge