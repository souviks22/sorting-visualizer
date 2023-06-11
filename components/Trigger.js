import { useState } from "react"
import Link from "next/link"

const Trigger = ({ onSort }) => {
  const [isTriggered, setIsTriggered] = useState(false)

  const sortHandler = () => {
    setIsTriggered(true)
    onSort()
  }

  return (<>
    {!isTriggered
      ?
      <button className='btn btn-success' onClick={sortHandler}>Start</button>
      :
      <button className='btn btn-primary'><Link href='/'>All Sorts</Link></button>
    }
  </>)
}

export default Trigger