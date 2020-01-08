import React from 'react';

const NewMessage = () => {
    let newMessageElement = React.createRef();
    let addText = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div>
            <textarea ref={newMessageElement}></textarea>
            <div>
                <button onClick={addText}>new Message</button>
            </div>
        </div>
    )
}

export default NewMessage;