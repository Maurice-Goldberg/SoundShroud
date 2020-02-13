import {connect} from 'react-redux';
import UserShow from './user_show';
import {currentUser, findAllTracksByUser } from '../../reducers/selectors';
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import {fetchTracks} from '../../actions/track_actions';
import {withRouter} from 'react-router-dom';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let userId = ownProps.match.params.userId;
    let user = state.entities.users[userId];
    let userTracks = findAllTracksByUser(state, user);
    if(userTracks) {
        return {
            userId: userId,
            user: user,
            trackPlaying: state.ui.trackPlaying,
            userTracks: userTracks.reverse(),
            currentUser: currentUser(state),
            audioPlayer: ownProps.audioPlayer,
            modal: state.ui.modal
        }
    } else {
        return {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchTracks: () => dispatch(fetchTracks()),
        openEditModal: () => dispatch(openModal("Edit")),
        openDeleteModal: () => dispatch(openModal("Delete")),
        openProfilePictureModal: () => dispatch(openModal("Profile Picture")),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));