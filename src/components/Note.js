

const Note = ({ id, text, date, handlingDeleteNote }) => {
	return (
		<div className='note'>
			
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<button
					onClick={() => handlingDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				>Delete</button>
			</div>
		</div>
	);
};

export default Note;
