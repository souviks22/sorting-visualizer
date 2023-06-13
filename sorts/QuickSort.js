import Trigger from "@/components/Trigger"

const QuickSort = ({ arr, changeCurrentArray }) => {

  const sortHandler = () => {

    const shuffle = (arr) => {
      setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
          const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i
          const temp = arr[i]
          arr[i] = arr[randomIndex]
          arr[randomIndex] = temp
          changeCurrentArray(arr)
        }
      }, 300)
    }

    const partition = (arr, lo, hi) => {
      let i = lo + 1, j = hi
      while (true) {
        while (i < hi && arr[i] < arr[lo]) i++
        while (j > lo && arr[j] > arr[lo]) j--
        if (i >= j) break
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        changeCurrentArray(arr)
      }
      const temp = arr[j]
      arr[j] = arr[lo]
      arr[lo] = temp
      changeCurrentArray(arr)
      return j
    }

    const sort = (arr, lo, hi) => {
      setTimeout(() => {
        if (lo >= hi) return
        const p = partition(arr, lo, hi)
        sort(arr, lo, p - 1)
        sort(arr, p + 1, hi)
      }, 300)
    }

    shuffle(arr)
    sort(arr, 0, arr.length - 1)
  }

  return <Trigger onSort={sortHandler} />
}

export default QuickSort