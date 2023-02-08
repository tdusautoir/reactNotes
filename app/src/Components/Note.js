import { Form, Title, Content } from './Note.styled';

const Note = () => {

    return (
        <Form>
            <Title placeholder='Type your title here...' type="text" />
            <Content placeholder='Type your content here...'></Content>
            <button>Enregister</button>
        </Form>
    )
}

export default Note;