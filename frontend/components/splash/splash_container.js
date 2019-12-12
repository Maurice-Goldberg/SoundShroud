import {connect} from 'react-redux';
import Splash from './splash';

const mapStateToProps = ({session}) => {
  return {
    currentUserId: session.currentUserId
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);