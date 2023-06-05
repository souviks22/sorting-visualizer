import { AiOutlineArrowRight } from 'react-icons/ai'
import styles from './Tile.module.css'

const Tile = ({ name, description }) => {
  return (<div className={`${styles.tile} w-1/5 text-lg p-3`}>
    <section className='flex py-2'>
      <h2>{name}</h2>
      <AiOutlineArrowRight className={`${styles.arrow} mx-3`} />
    </section >
    <section className='text-sm'>{description}</section>
  </div >)
}

export default Tile