import {connect} from 'react-redux';
import ProfilePictureModal from './profile_picture_modal';
import {closeModal} from '../../actions/modal_actions';
import {updateUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: ownProps.user,
        possiblePhotoUrl: ownProps.possiblePhotoUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateUser: (formData, id) => dispatch(updateUser(formData, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePictureModal);