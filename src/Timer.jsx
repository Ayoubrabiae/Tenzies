import React from 'react';
import PropTypes from 'prop-types';
export function Timer({ tenzies }) {

  const [count, setCount] = React.useState(() => 0)
  const [min, setMin] = React.useState(() => 0)

  React.useEffect(() => {
    const counter = setInterval(() => setCount(preCount => preCount + 1), 1000)
    if (tenzies) {
      if (localStorage.getItem("min")) {
        const storageMin = localStorage.getItem("min")
        const storageSec = localStorage.getItem("sec")
        storageMin > min && localStorage.setItem("min", min)
        storageSec > count && localStorage.setItem("sec", count)
      } else {
        localStorage.setItem("sec", count)
        localStorage.setItem("min", min)
      }
      clearInterval(counter)
    }
    return () => clearInterval(counter)
  }, [tenzies])

  const time = () => {
    let sec = 0
    if (count == 60) {
      setMin(preMin => preMin + 1)
      setCount(0)
    } else {
      sec = count
    }

    return <>
      <span>{min}</span><span>:</span><span>{sec}</span>
    </>
  }

  const bestTime = () => {
    return localStorage.getItem("min") && <>
      <span>
        {localStorage.getItem("min")}
      </span>
      <span>:</span>
      <span>
        {localStorage.getItem("sec")}
      </span>
    </>
  }

  return (
    <div className="timer">
      <div className="current">⏱: {time()}</div>
      <span>|</span>
      {<div className="best">⭐: {bestTime()}</div>}
    </div>
  )
}

Timer.propTypes = {
  tenzies: PropTypes.bool
}
