import styles from './Bars.module.css'

const Bars = ({ arr, isDarkMode }) => {
  return (<div className='flex items-end h-3/5 m-3'>
    {arr.map(n =>
      <div
        key={Math.random()} className={`${styles.bar} block bg-red-300 m-px text-center text-white ${isDarkMode && 'bg-slate-200'}`}
        style={{ height: `${n}%` }}>
      </div>
    )}
  </div>)
}

export default Bars