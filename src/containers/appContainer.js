import App from "../App"
// import NavBar from "./components/navbar";
// import Counters from "./components/counters";
import {
  connect
} from "react-redux";
import {
  onDelete,
  getListOfBooks,
  onAddOrEditSubmit,
  onFilter
} from "../actions";
import {
  bindActionCreators
} from "redux";

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      onDelete: onDelete,
      onGetListOfBooks: getListOfBooks,
      onAddOrEditSubmit: onAddOrEditSubmit,
      onFilter: onFilter
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);