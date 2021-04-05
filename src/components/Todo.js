import { useState } from 'react'

import Model from './Model'
import Backdrop from './Backdrop'

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const deleteFunction = () => {
        setModalIsOpen(previous => true)
    }

    const onCancel = (params) => {
        setModalIsOpen(previous => false)
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="action">
                <button className="btn" onClick={() => deleteFunction()}>
                    Click me!
                </button>
            </div>
            { modalIsOpen && <Model onYes={onCancel} onNo={onCancel} />}
            { modalIsOpen && <Backdrop onCancel={params => onCancel(params)} />}
        </div>
    )
}

export default Todo