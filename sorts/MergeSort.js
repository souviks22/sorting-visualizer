import Trigger from "@/components/Trigger"

const MergeSort = ({ arr, changeCurrentArray }) => {

  const sortHandler = () => {

    const merge = (arr, aux, lo, mid, hi, changeCurrentArray) => {
      for (let i = lo; i <= hi; i++) aux[i] = arr[i]
      let i = lo, j = mid + 1
      for (let k = lo; k <= hi; k++) {
        if (i > mid) arr[k] = aux[j++]
        else if (j > hi) arr[k] = aux[i++]
        else if (aux[j] < aux[i]) arr[k] = aux[j++]
        else arr[k] = aux[i++]
        changeCurrentArray(arr)
      }
    }

    const sort = (arr, aux, lo, hi, changeCurrentArray) => {
      if (lo >= hi) return
      const mid = Math.floor((lo + hi) / 2)
      sort(arr, aux, lo, mid, changeCurrentArray)
      sort(arr, aux, mid + 1, hi, changeCurrentArray)
      merge(arr, aux, lo, mid, hi, changeCurrentArray)
    }

    const aux = new Array(arr.length)
    sort(arr, aux, 0, arr.length - 1, changeCurrentArray)
  }

  return <Trigger onSort={sortHandler} />
}

export default MergeSort