import {connect} from 'react-redux';
import ProfilePictureModal from './profile_picture_modal';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePictureModal);