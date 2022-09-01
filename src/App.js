import { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';


const App = () => {
	const [notes, setNotes] = useState([
		
	]);

	const [searchText, setSearchText] = useState('');

	

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react_notes_app')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react_notes_app',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			// title:title,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className=''>
			<div className='container'>
				<h1>Add Notes Here</h1>
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handlingAddNote={addNote}
					handlingDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
