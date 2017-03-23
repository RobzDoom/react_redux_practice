/**
 * Created by jorgecruz on 3/20/17.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main'

function mapStateToProps(state){
    return {
        post: state.post,
        comments: state.comments
    }
}

function mapDispachToProps(dispatch){
   return bindActionCreators(actionCreators, 
   dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;