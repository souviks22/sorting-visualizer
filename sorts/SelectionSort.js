import Trigger from "@/components/Trigger"

const SelectionSort = ({ arr, changeCurrentArray, initialArray }) => {

  const sortHandler = () => {
    for (let i = 0; i < arr.length; i++) {
      let min = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j
      }
      const temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
      changeCurrentArray(arr)
    }
  }

  return <Trigger onSort={sortHandler} />
}

export default SelectionSort