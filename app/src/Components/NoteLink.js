import { Link }from './NoteLink.styled';

const NoteLink = ({title, id, content, active, pinned, onSelect }) => {
    return <Link className={active && pinned ? "active pinned" : pinned ? 'pinned' : active ? 'active' : ''} to={`/notes/${id}`} onClick={() => { onSelect(id) }}>
        {title}<p>{content}</p>
    </Link>
};

export default NoteLink;