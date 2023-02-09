import { Link }from './NoteLink.styled';

const NoteLink = ({title, id, content }) => {
    return <Link to={`/notes/${id}`}>
        {title}<p>{content}</p>
    </Link>
};

export default NoteLink;