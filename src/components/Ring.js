import PropTypes from 'prop-types'
import styles from './Ring.module.scss'

export default function Ring({
  size = 40,
  color = 'black',
  lineWeight = 5,
  duration = 2,
}) {
  return (
    <svg
      className={styles.container}
      viewBox="25 25 50 50"
      style={{
        '--uib-size': size + 'px',
        '--uib-color': color,
        '--uib-duration': duration + 's',
      }}
    >
      <circle cx="50" cy="50" r="20" strokeWidth={lineWeight} />
    </svg>
  )
}

Ring.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  lineWeight: PropTypes.number,
  duration: PropTypes.number,
}
