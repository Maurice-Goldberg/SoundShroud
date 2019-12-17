import {connect} from 'react-redux';
import Discover from './discover';


const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);