import {connect} from 'react-redux';
import UserShow from './user_show';
import {currentUser, findAllTracksByUser } from '../../reducers/selectors';
import {fetchUser} from '../../actions/user_actions';
import {fetchTracks} from '../../actions/track_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let userId = ownProps.match.params.userId;
    let user = state.entities.users[userId];
    return {
        userId: userId,
        user: user,
        trackPlaying: state.ui.trackPlaying,
        userTracks: findAllTracksByUser(state, user),
        currentUser: currentUser(state),
        audioPlayer: ownProps.audioPlayer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchTracks: () => dispatch(fetchTracks())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));