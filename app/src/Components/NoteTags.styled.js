import styled from "styled-components";

export const Tags = styled.div`
    display: flex;
    margin: 20px;
    gap: 10px;
    position: absolute;
    bottom: 0;

    p {
        margin: 0;
        padding: 8px 10px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.asideBackgroundColor };
        border: 1px solid ${({ theme }) => theme.borderColor};
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.asideBackgroundColor };
        border: 1px solid ${({ theme }) => theme.borderColor};
        border-radius: 5px;
        gap: 10px;
        padding: 0 12px;

        svg {
            font-weight: 600;
            font-size: 16px;
        }

        select {
            background-color: transparent;
            border: none;
            height: 100%;

            &:focus-visible {
                outline: none;
            }
        }
    }
`;
