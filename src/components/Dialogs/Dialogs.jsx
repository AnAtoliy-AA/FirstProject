import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Messages/Message";
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {
            let messagesElements =
                props.state.messages.map((messages) => <Message message={messages.message}/>);
            let dialogsElements =
                props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <NewMessage />
                </div>

            </div>

        )
    }

export default Dialogs;