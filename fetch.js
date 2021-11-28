fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    console.log('then',res)
    return res.json()
  })
  .catch((error) => {
    console.log('catch',error)
  })
  .then((json) => {
    console.log(json)

    for (const user of json) {
      console.log(`user name： ${user.name}`)
    }
  })

const fetcher = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonData = await res.json()
  console.log('fetcher:', jsonData)
}
fetcher()
