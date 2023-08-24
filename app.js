
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

/**
 * Image genration
 */

async function ImageGenerator(){
    const response=await fetch("https://api.openai.com/v1/images/generations",{
        method:"POST",
        headers:{
            Authorization:`Bearer ${API_key}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            prompt:"A hamburger singing in the rain",
            n:2,
            size:"1024x1024"
        })


    })
    const data=await response.json()
    console.log(data)
}

// https://api.openai.com/v1/images/variations
// https://api.openai.com/v1/images/edits

ImageGenerator()

// https://oaidalleapiprodscus.blob.core.windows.net/private/org-GgQtMTXsZmo0xoAhZn9gilmG/user-ejtqoPmYGPwaVcOEanof5H8A/img-u9v8zL6N1cjfh8CUFov7d1X1.png?st=2023-08-24T09%3A36%3A34Z&se=2023-08-24T11%3A36%3A34Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-23T19%3A00%3A11Z&ske=2023-08-24T19%3A00%3A11Z&sks=b&skv=2021-08-06&sig=HFRiOM41E5b0KLB9CDHrgFG1xmMXXNuyhZgfeWnfUPQ%3D

// https://oaidalleapiprodscus.blob.core.windows.net/private/org-GgQtMTXsZmo0xoAhZn9gilmG/user-ejtqoPmYGPwaVcOEanof5H8A/img-8hNUJFz8AB2VxWICBzFyZVMK.png?st=2023-08-24T09%3A36%3A35Z&se=2023-08-24T11%3A36%3A35Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-23T19%3A00%3A11Z&ske=2023-08-24T19%3A00%3A11Z&sks=b&skv=2021-08-06&sig=oLzb5gkYX8vt88Cat869HlXyEyDGcSHxzMGCnZJTfLk%3D