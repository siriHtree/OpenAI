
const API_key="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"
async function fetchData(){
    const response=await fetch("https://api.openai.com/v1/completions",{
        method:"POST",
        headers:{
            Authorization: `Bearer ${API_key}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            model:"text-davinci-003",
            prompt:"hello, how are you today?",
            max_tokens:7,
        })
    })
    const data=await response.json();
    console.log(data)
}

async function fetchDataChat(){
    const response=await fetch("https://api.openai.com/v1/completions",{
        method:"POST",
        headers:{
            Authorization: `Bearer ${API_key}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            model:"text-davinci-003",
            prompt:"hello, how are you today?",
            max_tokens:7,
        })
    })
    const data=await response.json();
    console.log(data)
}
