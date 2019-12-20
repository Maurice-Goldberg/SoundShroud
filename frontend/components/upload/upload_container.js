import {connect} from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_actions';
import Upload from './upload';
import {uploadTrack} from '../../actions/track_actions';

const mapStateToProps = ({ui, session}, ownProps) => {
  return {
    modal: ui.modal,
    currentUserId: session.currentUserId,
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