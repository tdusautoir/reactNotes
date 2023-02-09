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
`;

export const DeleteButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
    background-color: ${({ theme }) => theme.asideBackgroundColor };
    color: inherit;
    border-radius: 25px;
    border: 1px solid #454545;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
    }
`;
