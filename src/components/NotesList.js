import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handlingAddNote,
	handlingDeleteNote,
}) => {
	return (
		<div className='notesGird'>
			{notes.map((notes) => (
				<Note
					id={notes.id}
					
					text={notes.text}
					date={notes.date}
					handlingDeleteNote={handlingDeleteNote}
				/>
			))}
			<AddNote handlingAddNote={handlingAddNote} />
		</div>
	);
};

export default NotesList;
