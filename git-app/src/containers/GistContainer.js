import { connect } from 'react-redux'
import { fetchForks } from '../actions'
import GistView from '../components/GistView'

const mapStateToProps = (state, ownProps) => {
  return {
    gists: state.gistSearch.gists || [],
    loading: state.gistSearch.loading || false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchForks: (id) => fetchForks(dispatch, ownProps, id),
  }
}

const GistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GistView)

export default GistContainer
