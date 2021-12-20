import { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchAllStudentsThunk,deleteStudentThunk} from '../../store/thunks';
import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
    componentDidMount() {
      this.props.fetchAllStudents();
    }
    render(){
        return(
            <div>
                <AllStudentsView 
                  students={this.props.allStudents}
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  };
};

AllStudentsContainer.propTypes = {
  allStudents: propTypes.array.isRequired,
  fetchAllStudents: propTypes.func.isRequired,
};


export default withRouter(connect(mapState, mapDispatch)(AllStudentsContainer));
