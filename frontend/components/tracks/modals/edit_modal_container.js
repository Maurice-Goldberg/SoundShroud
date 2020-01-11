import EditModal from './edit_modal';
import {closeModal} from '../../../actions/modal_actions';
import {updateTrack} from '../../../actions/track_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        track: ownProps.track,
        currentUserId: ownProps.currentUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateTrack: (formData, id) => dispatch(updateTrack(formData, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
