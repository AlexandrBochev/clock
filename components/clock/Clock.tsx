import { useEffect, useState } from 'react'
import styles from "./Clock.module.scss";

const Clock = () => {

  const [hoursClass, setHoursClass] = useState({})
  const [minutesClass, setMinutesClass] = useState({})
  const [secondsClass, setSecondsClass] = useState({})

  useEffect(() => {

    setInterval(() => {
      const day = new Date()

      const hours = day.getHours() * 30
      const minutes = day.getMinutes() * 6
      const seconds = day.getSeconds() * 6

      setHoursClass({transform: `rotateZ(${hours + (minutes / 12)}deg)`})
      setMinutesClass({transform: `rotateZ(${minutes}deg)`})
      setSecondsClass({transform: `rotateZ(${seconds}deg)`})
    }, 0)
  }, [])

  return (
    <>
    <div className={styles.container}>
      <div className={styles.clock}>
        <div className={styles.hour}>
          <div style={hoursClass} className={styles.hours}></div>
        </div>
        <div className={styles.minute}>
          <div style={minutesClass} className={styles.minutes}></div>
        </div>
        <div className={styles.second}>
          <div style={secondsClass} className={styles.seconds}></div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Clock