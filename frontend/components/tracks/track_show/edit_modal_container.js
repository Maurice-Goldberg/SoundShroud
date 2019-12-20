import EditModal from './edit_modal';
import {closeModal} from '../../../actions/modal_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        track: ownProps.track,
        currentUserId: ownProps.currentUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
