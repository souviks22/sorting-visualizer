import { useContext } from 'react'
import { ModeContext } from '@/store/mode-context'
import Head from 'next/head'
import Tile from '@/components/Tile'

const Home = ({ algos }) => {
  const { isDarkMode } = useContext(ModeContext)
  return (<>
    <Head>
      <title>Sorting Visualization</title>
    </Head>
    <div className={`home h-screen flex flex-col ${isDarkMode && 'bg-neutral-900 text-white'}`}>
      <h1 className='display-1 text-center p-5 m-3 z-20 cursor-default'>Sorting Visualization</h1>
      <div className='tiles flex justify-around p-20'>
        {algos.map(algo => <Tile key={algo.name} {...algo} href={`/${algo.name.toLowerCase().split(' ').join('-')}`} />)}
      </div>
    </div>
  </>)
}

export async function getStaticProps() {
  const response = await fetch('https://sortingvisualization-e537e-default-rtdb.firebaseio.com/algorithms.json')
  const algos = await response.json()
  return {
    props: { algos }
  }
}

export default Home