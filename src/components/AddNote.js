import { useState } from 'react';

const AddNote = ({ handlingAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [titletext, settitl]=useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handlingAddNote(noteText);
			setNoteText('');
		}
		handlingAddNote(titletext);
		settitl('')
	};

	return (
		<div className='notess new'>
			<textarea
				rows='1'
				cols='10'
				placeholder='Title...'
				value={titletext}
				onChange={handleChange}
			></textarea>
		
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
