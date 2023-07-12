// import PropTypes from "prop-types"

export default function RollTracker({ rollTracker, localTracker }) {

  return (
    <div className="tracker">
      <span>🔄: {rollTracker}</span>
      <span>|</span>
      <span>⭐: {localTracker}</span>
    </div>
  )
}

RollTracker.propTypes 