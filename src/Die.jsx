import { nanoid } from "nanoid"
import PropTypes from 'prop-types';
export function Die({ value, isHeld, holdDice }) {

  let spans = []

  for (let i = 0; i < value; i++) {
    spans.push(<span key={nanoid()} className="dot"></span>)
  }

  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
    gridTemplateColumns: spans.length > 1 ? "repeat(auto-fill, minmax(20px, 1fr))" : "auto"
  }
  return (
    <div
      className="die-face"
      style={styles}
      onClick={holdDice}
    >
      {spans}
    </div>
  )
}

Die.propTypes = {
  value: PropTypes.number,
  isHeld: PropTypes.bool,
  holdDice: PropTypes.func,
}