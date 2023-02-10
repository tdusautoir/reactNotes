import { Navigation, SearchInput, NavButtons }from './SideNav.styled';
import { AiFillHome } from "react-icons/ai";
import { BsFillSunFill } from 'react-icons/bs';

const NoteLink = ({ onSearch, onNavigate, onToggleTheme }) => {
    return (
        <Navigation>
            <SearchInput type="search" onChange={(e) => onSearch(e.target.value)}/>
            <NavButtons>
                <button onClick={() => onNavigate('/')}><AiFillHome/></button>
                <button onClick={() => { onToggleTheme(); console.log('test') }}><BsFillSunFill/></button>
            </NavButtons>
        </Navigation>
    )
};

export default NoteLink;