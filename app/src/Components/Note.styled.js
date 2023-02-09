import styled from 'styled-components';

const INPUT_PADDING = 16;

export const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Title = styled.input`
    background: transparent;
    border: none;
    font-size: 26px;
    font-weight: 500;
    color: inherit;
    padding: ${INPUT_PADDING}px ${INPUT_PADDING}px 8px ${INPUT_PADDING}px;

    &:focus-visible {
        outline: none;
    }

    /* &::placeholder {
        color: ${({ theme }) => theme.placeholderColor};
    } */
`;

export const Content = styled.textarea`
    flex: 1;
    background: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    padding: ${INPUT_PADDING}px;
    font-size: 18px;

    &:focus-visible {
        outline: none;
    }

    /* &::placeholder {
        color: ${({ theme }) => theme.placeholderColor};
    } */
`;
