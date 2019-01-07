import App from "../App"
// import NavBar from "./components/navbar";
// import Counters from "./components/counters";
import { connect } from "react-redux";
import { resetCounter, incrementCounter, deleteCounter,
  onDelete,
  onEdit
 } from "../actions";
import { bindActionCreators } from "redux";
function mapStateToProps(state) {
    return {
      counters: state.counters,
      books: state.books
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        resetCounter: resetCounter,
        incrementCounter: incrementCounter,
        deleteCounter: deleteCounter,
        onDelete: onDelete,
        onEdit: onEdit
      },
      dispatch
    );
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);