import { connect } from 'react-redux'
import { search } from '../actions'
import SearchCard from '../components/SearchCard'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearchClick: (name) => search(dispatch, name),
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCard)

export default SearchContainer
