function merge(arr, aux, lo, mid, hi) {

  for (let i = lo; i <= hi; i++) aux[i] = arr[i]
  let i = lo, j = mid + 1

  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = aux[j++]
    else if (j > hi) arr[k] = aux[i++]
    else if (aux[j] < aux[i]) arr[k] = aux[j++]
    else arr[k] = aux[i++]
  }

}

function sort(arr, aux, lo, hi) {

  if (lo >= hi) return
  const mid = Math.floor((lo + hi) / 2)

  sort(arr, aux, lo, mid)
  sort(arr, aux, mid + 1, hi)
  merge(arr, aux, lo, mid, hi)
}

function mergeSort(arr) {
  const aux = [...arr]
  sort(arr, aux, 0, arr.length - 1)
}

export default mergeSort