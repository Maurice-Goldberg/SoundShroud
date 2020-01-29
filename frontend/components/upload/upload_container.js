import {connect} from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_actions';
import Upload from './upload';
import {uploadTrack} from '../../actions/track_actions';
import {currentUser} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    currentUserId: state.session.currentUserId,
    currentUser: currentUser(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadTrack: (formData) => dispatch(uploadTrack(formData)),
    openUploadModal: () => dispatch(openModal('Upload')),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);