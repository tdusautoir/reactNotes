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
    color: inherit;
    border: none;
    cursor: pointer;
    background: transparent;
    padding: 0;

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const Buttons = styled.div`
    height: 50px;
    margin: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 25px;
    border: 1px solid #454545;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.asideBackgroundColor };

    button:first-child {
        border-right: 1px solid #454545;
    }
`;

