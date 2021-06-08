import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";

type AddItemFormPropsType =  {
addItem : (title:string) => void
}

const AddItemForm = (props:AddItemFormPropsType) => {
    const [title, setTitle] = useState('')
    const [error,setError] = useState<boolean>(false)


    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const onClickAddItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
            setTitle('')
            setError(false)
        }
        else{setError(true)}
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddItem()
        }
    }

    const errorMessage = error?<div className='error-message'>Title is requared</div> :null

    return (
        <div>
            <TextField
               error={!!error}
               helperText={error}
               variant={"outlined"}
               label={"Type value"}
                value={title}
                onChange={onChangeTitle}
                onKeyPress={onKeyPressAddItem} />

            <IconButton onClick={onClickAddItem}><ControlPoint /></IconButton>
            {errorMessage}
        </div>
    );
}

export default AddItemForm