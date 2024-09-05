import Trigger from "@/components/Trigger"

const QuickSort = ({ arr, changeCurrentArray, changeSortedRange }) => {
  const discrete = new Set()
  const sortHandler = () => {
    const shuffle = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i
        const temp = arr[i]
        arr[i] = arr[randomIndex]
        arr[randomIndex] = temp
        changeCurrentArray(arr)
      }
      changeSortedRange(0, arr.length - 1)
    }
    const partition = (arr, lo, hi) => {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          let i = lo + 1, j = hi
          while (true) {
            while (i < hi && arr[i] <= arr[lo]) i++
            while (j > lo && arr[j] >= arr[lo]) j--
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
          resolve(j)
        }, 300)
      })
    }

    const sort = async (arr, lo, hi) => {
      if (lo >= hi) {
        discrete.add(lo)
        discrete.add(hi)
        return
      }
      const p = await partition(arr, lo, hi)
      discrete.add(p)
      changeSortedRange(discrete, -1)
      sort(arr, lo, p - 1)
      sort(arr, p + 1, hi)
    }
    shuffle(arr)
    sort(arr, 0, arr.length - 1)
  }

  return <Trigger onSort={sortHandler} />
}

export default QuickSort