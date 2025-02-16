import React, {useState} from "react";

import './TodoInput.css'

function TodoInput({task, onSave, isEditing, onCancel}){

    const[inputValue, setInputValue] = useState(task || '');

    function handleSave(){
        if(inputValue.trim()){
            onSave(inputValue)
            setInputValue('')
        }
    }


return(

    <>
        <input 
        placeholder="write your solution"
        value={inputValue}
        onChange={((e) => setInputValue(e.target.value))}
        type="text"
        className="input-text" />
        <button onClick={handleSave} className="button-text-Add-Save">{isEditing ? 'Save' : 'Add'}</button>
        {isEditing && <button onClick={onCancel} className="button-text-Cancel">Cancel</button>}
    </>
)


}
export default TodoInput;