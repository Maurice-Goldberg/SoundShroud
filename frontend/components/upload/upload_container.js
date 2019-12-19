import {connect} from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_actions';
import Upload from './upload';

const mapStateToProps = ({ui}) => {
  return {
    modal: ui.modal
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