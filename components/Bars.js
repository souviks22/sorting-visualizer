const Bars = ({ arr }) => {
  return (<div className='flex items-end h-3/5 m-3'>
    {arr.map(n =>
      <div
        key={Math.random()} className='block w-7 bg-red-300 m-px'
        style={{ height: `${n}%` }}>
      </div>
    )}
  </div>)
}

export default Bars