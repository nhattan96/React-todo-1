function Modal(props) {

    const onYes = () => {
        props.onYes()
    }

    const onNo = () => {
        props.onNo()
    }
    
    return (
        <div className="modal">
            <p>Are you sure</p>
            <button className="btn btn--alt" onClick={onYes}>Yes</button>
            <button className="btn" onClick={onNo}>No</button>
        </div>
    )
}

export default Modal