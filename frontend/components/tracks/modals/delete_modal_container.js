import {connect} from 'react-redux';
import {deleteTrack} from '../../../actions/track_actions';
import {closeModal} from '../../../actions/modal_actions';
import DeleteModal from './delete_modal';

const mapStateToProps = (state, ownProps) => {
    return {
        track: ownProps.track,
        artist: ownProps.artist,
        currentUserId: ownProps.currentUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTrack: (id) => dispatch(deleteTrack(id)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);