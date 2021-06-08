module.exports = () => {
  const data = {
    products: []
  }

  for(let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      price: 20,
      title: `Item ${i + 1}`
    })
  }

  return data
}