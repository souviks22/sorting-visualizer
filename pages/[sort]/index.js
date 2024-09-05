import Head from "next/head"
import Bars from "@/components/Bars"

import { useState, useContext } from 'react'
import { useRouter } from "next/router"
import { ModeContext } from '@/store/mode-context'

import SelectionSort from "@/sorts/SelectionSort"
import InsertionSort from "@/sorts/InsertionSort"
import MergeSort from "@/sorts/MergeSort"
import QuickSort from "@/sorts/QuickSort"

const algorithms = {
  'selection-sort': SelectionSort, 'insertion-sort': InsertionSort, 'merge-sort': MergeSort, 'quick-sort': QuickSort
}

const Sort = ({ arr }) => {
  const { sort } = useRouter().query
  const CurrentSort = algorithms[sort]
  const heading = sort.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const [currentArray, setCurrentArray] = useState(arr)
  const changeArray = async (changedArray) => {
    setCurrentArray([...changedArray])
  }
  const { isDarkMode } = useContext(ModeContext)
  const [range, setRange] = useState([-1, -1])
  const changeSortedRange = (lo, hi) => setRange([lo, hi])

  return (<>
    <Head>
      <title>{heading}</title>
    </Head>
    <div className={`h-screen flex flex-col justify-center items-center ${isDarkMode && 'dark'}`}>
      <Bars arr={currentArray} sortedRange={range} isDarkMode={isDarkMode} />
      <h1 className='display-6 m-3'>{heading}</h1>
      <CurrentSort arr={arr} changeCurrentArray={changeArray} changeSortedRange={changeSortedRange} />
    </div>
  </>)
}

export function getStaticPaths() {
  const parameters = ['selection-sort', 'insertion-sort', 'merge-sort', 'quick-sort']
  return {
    paths: parameters.map(algo => ({ params: { sort: algo } })),
    fallback: false
  }
}

export function getStaticProps() {
  const arr = Array.from({ length: 100 }, () => Math.ceil(Math.random() * 100))
  return {
    props: { arr },
    revalidate: 24 * 60 * 60
  }
}

export default Sort