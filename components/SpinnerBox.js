import styles from './SpinnerBox.module.css'

const SpinnerBox = () => {
  return <div className={`${styles.spin} fixed z-10 block w-32 h-32 bg-slate-600`}></div>
}

export default SpinnerBox