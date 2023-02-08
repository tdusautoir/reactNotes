import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

export const Link = styled(_Link)`
    display: block;
    padding: 12px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    background-color: ${({ theme }) => theme.asideBackgroundColor};

    &:hover {
        filter: brightness(1.4);
    }
`;
