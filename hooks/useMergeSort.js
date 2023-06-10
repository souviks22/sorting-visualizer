const merge = (arr, aux, lo, mid, hi, setCurrentArray) => {

  for (let i = lo; i <= hi; i++) aux[i] = arr[i]
  let i = lo, j = mid + 1

  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = aux[j++]
    else if (j > hi) arr[k] = aux[i++]
    else if (aux[j] < aux[i]) arr[k] = aux[j++]
    else arr[k] = aux[i++]
    setCurrentArray(arr)
  }

}

const sort = (arr, aux, lo, hi, setCurrentArray) => {

  if (lo >= hi) return
  const mid = Math.floor((lo + hi) / 2)

  sort(arr, aux, lo, mid, setCurrentArray)
  sort(arr, aux, mid + 1, hi, setCurrentArray)
  merge(arr, aux, lo, mid, hi, setCurrentArray)
}

const useMergeSort = (arr, setCurrentArray) => {
  const aux = new Array(arr.length)
  sort(arr, aux, 0, arr.length - 1, setCurrentArray)
}

export default useMergeSort