import { useContext } from 'react'
import { ModeContext } from '@/store/mode-context'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import styles from './Mode.module.css'

const Mode = () => {
  const { isDarkMode, toggle } = useContext(ModeContext)
  return (<div className={`${styles.mode} fixed z-30 cursor-pointer`} onClick={toggle}>
    {!isDarkMode && <BsSunFill />}
    {isDarkMode && <FaMoon className='text-white' />}
  </div>)
}

export default Mode