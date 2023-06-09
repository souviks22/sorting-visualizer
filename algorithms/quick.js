function partition(arr, lo, hi) {

  let i = lo + 1, j = hi

  while (true) {

    while (arr[i] < arr[lo] && i <= hi) i++
    while (arr[j] > arr[lo] && j >= lo) j--

    if (i >= j) break
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

  }

  let temp = arr[j]
  arr[j] = arr[lo]
  arr[lo] = temp

  return j
}

function sort(arr, lo, hi) {

  if (lo >= hi) return
  const p = partition(arr, lo, hi)

  sort(arr, lo, p)
  sort(arr, p + 1, hi)
}

function quickSort(arr) {
  sort(arr, 0, arr.length - 1)
}

export default quickSort