import styles from './Bars.module.css'

const Bars = ({ arr, sortedRange, isDarkMode }) => {
  const [start, end] = sortedRange
  const isDiscrete = end == -1 && start != -1
  const discrete = isDiscrete ? start : new Set()
  return (<div className='flex items-end h-3/5 m-3'>
    {arr.map((n, i) =>
      <div
        key={i}
        className={`${styles.bar} block ${((!isDiscrete && i <= end) || (isDiscrete && discrete.has(i))) ? isDarkMode ? 'bg-sky-800' : 'bg-lime-500' : isDarkMode ? 'bg-slate-200' : 'bg-red-300'} m-px`}
        style={{ height: `${n}%` }}>
      </div>
    )}
  </div>)
}

export default Bars