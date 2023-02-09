import styled from 'styled-components';
import { BiLoaderAlt} from "react-icons/bi";

const SIDE_WIDTH = 240;

export const Side = styled.aside`
    position: fixed;
    width: ${SIDE_WIDTH}px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.asideBackgroundColor};
    border-right: 1px solid #454545;
`;
 
export const Main = styled.main`
    height: 100vh;
    margin-left: ${SIDE_WIDTH}px;
`;

export const NoteList = styled.ul`
    margin: unset;
    padding: unset;
    list-style: none;
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