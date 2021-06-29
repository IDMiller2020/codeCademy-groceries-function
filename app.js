// Write function below
function groceries(arr) {
  const num = arr.length
  let list = ''
  if (num === 1) {
    list += arr[0].item
  } else if (num < 3) {
    list += arr[0].item + " and " + arr[1].item
  } else {
    for (let i = 0; i < num - 2; i++) {
      list += arr[i].item + ", "
    }
    list += arr[num - 2].item + " and " + arr[num - 1].item
  }
  return list
}

console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]))
console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]))
console.log(groceries([{ item: 'Cheese Balls' }]))
console.log(groceries([{ item: 'Lettuce' }, { item: 'Onions' }, { item: 'Tomatoes' }]))