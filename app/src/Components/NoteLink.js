import { Link }from './NoteLink.styled';

const NoteLink = ({title, id }) => {
    return <Link to={`/notes/${id}`}>{title}</Link>
};

export default NoteLink;