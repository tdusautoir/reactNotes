import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

export const Link = styled(_Link)`
    display: block;
    padding: 12px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    background-color: ${({ theme }) => theme.asideBackgroundColor};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
        filter: brightness(1.4);
    }

    p {
        padding: 0;
        font-size: 12px;
        opacity: 0.8;
        margin: 6px 0 0 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;
