import styled from 'styled-components';

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const NavButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    
    button {
        padding: 0;
        margin: 0;
        width: 35px;
        height: 35px;
        color: ${({ theme }) => theme.mainTextColor };
        background: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        svg {
            width: 18px;
            height: 18px;
        }

        &:hover {
            background-color: ${({ theme }) => theme.hoverColor};
        }
    }
`;

export const SearchInput = styled.input`
    border: none;
    background-color: ${({ theme }) => theme.hoverColor};
    width: 100%;
    border-radius: 100px;
    padding: 8px 15px;
    color: ${({ theme }) => theme.mainTextColor };

    &:focus-visible {
        outline: none;
        border: 1px solid ${({ theme }) => theme.borderColor};
    }
`;