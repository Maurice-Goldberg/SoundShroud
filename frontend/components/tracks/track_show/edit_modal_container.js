import EditModal from './edit_modal';
import {closeModal} from '../../../actions/modal_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
