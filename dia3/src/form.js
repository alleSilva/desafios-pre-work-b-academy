const input = document.querySelector('[data-js="input"]')
input.value = ''

console.log(input)

input.addEventListener('input', (event) => {
   const prepositions = ['de', 'do', 'da', 'dos', 'das']

  const str = event.target.value.toLowerCase()
  const arr = str.split(' ')

  const newArr = arr.map((item) => {
    const prepositions = ['de', 'do', 'da', 'dos', 'das']
    if (prepositions.includes(item)) {
      return item
    } else {
      const newItem = item[0] && item[0].toUpperCase() + item.slice(1)
      return newItem
    }
  })

  input.value = newArr.join(" ")
})
