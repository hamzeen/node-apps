import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchContainer from '../containers/SearchContainer';
import ResultCard from './ResultCard';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`
  },
  loader: {
    marginLeft: '50%',
    marginTop: '120px'
  },
  resultDivMove: {
    margin: '0 auto',
    marginTop: '20px'
  },
  resultDiv: {
    transition: 'margin 700ms',
    margin: '0 auto',
    marginTop: '150px'
  },
  animater: {
    marginTop: '20px'
  },
  animaterTop: {
    marginTop: '20px'
  },
  defaultText: {
    color: '#555555',
    width: '100%',
    textAlign: 'center',
    marginTop: '70px',
  },
});

const GistView = (props) => {
  const { classes, gists, loading, fetchForks } = props;

  const gistsResultCards = gists.map((gist) => {
    console.log("GIST:::", gist);

    return <ResultCard
      key={gist.id}
      id={gist.id}
      gistname={gist.name}
      owner={gist.owner}
      username={gist.username}
      fileTypes={gist.fileTypes}
      fetchForks={fetchForks}
      forks={gist.forks}
      loading={gist.loading} />;
  }, this)

  return (
    <div className={classes.container}>
      <div style={{ gridColumnEnd: 'span 2' }}></div>
      <div
        className={!loading && gists.length === 0 ? classes.resultDiv : classes.resultDivMove}
        style={{ gridColumnEnd: 'span 8' }}>
        <SearchContainer />
        {loading ? <CircularProgress className={classes.loader} /> :
          gists.length > 0
            ? <div style={{ width: '550px' }}> {gistsResultCards}</div>
            : <div className={classes.defaultText}>
              {'Please type a username and click search'}</div>
        }
      </div>
      <div style={{ gridColumnEnd: 'span 2' }}></div>
    </div>
  )
}

GistView.propTypes = {
  onClick: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default withStyles(styles)(GistView);
