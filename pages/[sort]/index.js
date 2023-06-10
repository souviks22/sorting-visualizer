import { useState, useContext } from 'react'
import { ModeContext } from '@/store/mode-context'
import { useRouter } from "next/router"
import Head from "next/head"
import Bars from "@/components/Bars"
import useSelectionSort from '@/hooks/useSelectionSort'
import useInsertionSort from '@/hooks/useInsertionSort'
import useMergeSort from '@/hooks/useMergeSort'
import useQuickSort from '@/hooks/useQuickSort'

const Sort = ({ arr }) => {
  const { isDarkMode } = useContext(ModeContext)
  const { sort } = useRouter().query
  const heading = sort.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  const [currentArray, setCurrentArray] = useState(arr)
  const simulateSorting = () => {
    switch (sort) {
      case 'selection-sort':
        useSelectionSort(currentArray, setCurrentArray)
        break
      case 'insertion-sort':
        useInsertionSort(currentArray, setCurrentArray)
        break
      case 'merge-sort':
        useMergeSort(currentArray, setCurrentArray)
        break
      case 'quick-sort':
        useQuickSort(currentArray, setCurrentArray)
        break
    }
  }

  return (<>
    <Head>
      <title>{heading}</title>
    </Head>
    <div className={`h-screen flex flex-col justify-center items-center ${isDarkMode && 'bg-neutral-900 text-white'}`}>
      <Bars arr={currentArray} isDarkMode={isDarkMode} />
      <h1 className='display-6 m-3'>{heading}</h1>
      <button className='btn btn-success' onClick={simulateSorting}>Start</button>
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
  const arr = Array.from({ length: 20 }, () => Math.ceil(Math.random() * 100))
  return {
    props: { arr },
    revalidate: 24 * 60 * 60
  }
}

export default Sort