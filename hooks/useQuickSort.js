const partition = (arr, lo, hi, setCurrentArray) => {

  let i = lo + 1, j = hi

  while (true) {

    while (arr[i] < arr[lo] && i <= hi) i++
    while (arr[j] > arr[lo] && j >= lo) j--

    if (i >= j) break
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    setCurrentArray(arr)
  }

  let temp = arr[j]
  arr[j] = arr[lo]
  arr[lo] = temp
  setCurrentArray(arr)

  return j
}

const sort = (arr, lo, hi, setCurrentArray) => {

  if (lo >= hi) return
  const p = partition(arr, lo, hi, setCurrentArray)

  sort(arr, lo, p, setCurrentArray)
  sort(arr, p + 1, hi, setCurrentArray)
}

const useQuickSort = (arr, setCurrentArray) => {
  sort(arr, 0, arr.length - 1, setCurrentArray)
}

export default useQuickSort