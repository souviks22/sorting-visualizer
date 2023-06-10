const useInsertionSort = (arr, setCurrentArray) => {

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j > 0; j--) {

      if (arr[j] < arr[j - 1]) {
        const temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
        setCurrentArray(arr)
      }

      else break
    }
  }
}

export default useInsertionSort