import {useState} from 'react'
function InputTask({ placeholder, onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="task-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default InputTask;