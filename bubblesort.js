function bubbleSort(arr) {

  if (!arr.length) {
    return []
  }

  for (let i = 0; i < arr.length; i++) {
    let first = arr[i]
    let next = arr[i + 1]

    if (first > next) {
      console.log(arr)
      arr[i] = next
      arr[i + 1] = first
      return bubbleSort(arr)
    }

  }
  return arr
}
