import Trigger from "@/components/Trigger"

const InsertionSort = ({ arr, changeCurrentArray }) => {

  const sortHandler = () => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          const temp = arr[j]
          arr[j] = arr[j - 1]
          arr[j - 1] = temp
          changeCurrentArray(arr)
        }
        else break
      }
    }
  }

  return <Trigger onSort={sortHandler} />
}

export default InsertionSort