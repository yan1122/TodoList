import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

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
            <input
                className={error ? 'error' : ''}
                value={title}
                onChange={onChangeTitle}
                onKeyPress={onKeyPressAddItem} />
            <button onClick={onClickAddItem}>+</button>
            {errorMessage}
        </div>
    );
}

export default AddItemForm