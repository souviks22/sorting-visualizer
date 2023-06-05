import Tile from '@/components/Tile'
import SpinnerBox from '@/components/SpinnerBox'

const Home = ({ algos }) => {
  return (<div className='flex flex-col'>
    <h1 className='display-1 text-center p-5 m-3 z-20'>Sorting Visualization</h1>
    <div className='tiles flex justify-around p-20'>
      {algos.map(algo => <Tile key={algo.name} {...algo} />)}
    </div>
    <SpinnerBox />
  </div>)
}

export async function getStaticProps() {
  const response = await fetch('https://sortingvisualization-e537e-default-rtdb.firebaseio.com/algorithms.json')
  const algos = await response.json()
  return {
    props: { algos }
  }
}

export default Home