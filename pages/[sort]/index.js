import { useRouter } from "next/router"
import Head from "next/head"
import Bars from "@/components/Bars"

const Sort = ({ arr }) => {
  const router = useRouter()
  const { sort } = router.query
  const heading = sort.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return (<>
    <Head>
      <title>{heading}</title>
    </Head>
    <div className='flex flex-col justify-center items-center h-screen'>
      <Bars arr={arr} />
      <h1 className='display-6 m-3'>{heading}</h1>
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