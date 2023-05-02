// const API_KEY ="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"
// async function fetchData() {
//   const response = await fetch("https://api.openai.com/v1/completions", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
    
//   body: JSON.stringify({
//     model: "text-davinci-003",
//     prompt: "hello, how are you today?",
//     max_tokens: 7
//     })
// })
//     const data = await response.json()
//     console.log(data)
    
// }
// fetchData()

const API_KEY ="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"
async function fetchData() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    
  body: JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Say this is a test!"}],
    "temperature": 0.7
  })
})
    const data = await response.json()
    console.log(data)
    
}
fetchData()
