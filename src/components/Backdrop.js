function Backdrop (props) { 
    return (
        <div className="backdrop" onClick={() => props.onCancel('Hello')}>

        </div>
    )
}

export default Backdrop