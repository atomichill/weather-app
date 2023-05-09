import './modal.scss'
import {useDispatch} from 'react-redux'
import { closeModal } from '../../slice/slice'

function Modal () {
    const dispatch = useDispatch();
    
    
    return (
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <h1 className="modal_title"> Warning!</h1>
                </div>
                <div className="modal_body">
                    This is beta version of the app. coding is in progress
                </div>
                <div className="modal_footer">
                    <button className="button" onClick={() => dispatch(closeModal())}> cancel </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;