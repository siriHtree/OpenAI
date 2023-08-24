

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

/**
 * Chat completion
 */
async function fetchDataChat(){
    const response=await fetch("https://api.openai.com/v1/chat/completions",{
        method:"POST",
        headers:{
            Authorization: `Bearer ${API_key}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[
                {
                    role:"user",
                    content:"Hello!"
                },
                {
                    role:"user",
                    content:"How are you?"
                }
            ]
        })
    })
    const data=await response.json();
    console.log(data)
}
