import {connect} from 'react-redux';
import {closeModal} from '../../../actions/modal_actions';
import Dropdown from './dropdown';

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(Dropdown);

