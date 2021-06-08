import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import {TextField} from "@material-ui/core";

type EditableSpanPropsType = {
    title: string
    changeTitle : (title:string) => void
}

const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode,setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState(props.title)
    const onEditMode = () =>{
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(title)
    }
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
        ? <TextField value={title} onChange={onChangeTitle} autoFocus onBlur={offEditMode} />
        : <span onDoubleClick={onEditMode}>{props.title}</span>
    );
}

export default EditableSpan