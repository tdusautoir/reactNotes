import styled from 'styled-components';
import { BiLoaderAlt} from "react-icons/bi";

const SIDE_WIDTH = 280;

export const Side = styled.aside`
    position: fixed;
    width: ${SIDE_WIDTH}px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.asideBackgroundColor};
    border-right: 1px solid #454545;
    padding: 12px;
    overflow-y: auto;
`;
 
export const Main = styled.main`
    height: 100vh;
    margin-left: ${SIDE_WIDTH}px;
`;

export const NoteList = styled.ul`
    margin: unset;
    padding: unset;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const SideTitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0.8;
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 2px;
    border-bottom: 1px solid #454545;
    margin: 20px 10px 10px 10px;
`;

export const Loading = styled(BiLoaderAlt)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    animation: loading 2s linear infinite;

    @keyframes loading {
        from{
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to{
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;

export const SearchInput = styled.input`
    border: 1px solid #454545;
    width: 100%;
    border-radius: 100px;
    padding: 8px 15px;
    background: transparent;
    color: inherit;
    filter: brightness(1.6);

    &:focus-visible {
        outline: none;
        filter: brightness(2);
    }
`;