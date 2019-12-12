import {connect} from 'react-redux';
import App from './app';

const mapStateToProps = ({session}) => {
  return {
    currentUserId: session.currentUserId
  };
};

export default connect(mapStateToProps, null)(App);