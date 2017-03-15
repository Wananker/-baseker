import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as AppActions from '../actions/app'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    console.log('mapStateToProps state ↓');
    console.log(state);
    return {
        alertVisible: state.app.alertVisible
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(App)
