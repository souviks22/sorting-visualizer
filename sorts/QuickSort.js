import Trigger from "@/components/Trigger"

const QuickSort = ({ arr, changeCurrentArray }) => {

  const sortHandler = () => {

    const partition = (arr, lo, hi, changeCurrentArray) => {
      let i = lo + 1, j = hi
      while (true) {
        while (arr[i] < arr[lo] && i <= hi) i++
        while (arr[j] > arr[lo] && j >= lo) j--
        if (i >= j) break
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        changeCurrentArray(arr)
      }
      let temp = arr[j]
      arr[j] = arr[lo]
      arr[lo] = temp
      changeCurrentArray(arr)
      return j
    }

    const sort = (arr, lo, hi, changeCurrentArray) => {
      if (lo >= hi) return
      const p = partition(arr, lo, hi, changeCurrentArray)
      sort(arr, lo, p, changeCurrentArray)
      sort(arr, p + 1, hi, changeCurrentArray)
    }

    sort(arr, 0, arr.length - 1, changeCurrentArray)
  }

  return <Trigger onSort={sortHandler} />
}

export default QuickSort