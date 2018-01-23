import {connect} from 'react-redux';
//import Link from '../components/Link';
import {setVisibility} from "../actions";
const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onClick()
       }}
    >
      {children}
    </a>
  )
};


const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps');
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('mapDispatchToProps');
  return {
    onClick: () => {
      dispatch(setVisibility(ownProps.filter))
    }
  }
};
console.log('link:', Link);
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
