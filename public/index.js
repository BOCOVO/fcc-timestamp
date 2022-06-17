(() => {
    // getting elements
    const submit = document.getElementById("submit")
    const unix = document.getElementById("unix")
    const utc = document.getElementById("utc")
    const inputValue = document.getElementById("input-value")

    /* Callbacks */

    const showError = () => {
        alert("Please give valide value.")
    }

    const sendRequest = async (value) => {
        try {
            const request = await fetch(`${location.origin}/api/${value}`)
            if (request.ok) {
                const result = await request.json()
                updateResult(result)
            } else {
                throw new Error()
            }
        } catch (err) {
            showError()
        }
    }

    const handleClick = () => {
        // how loading state 
        submit.innerHTML = "..."
        const value = inputValue.value
        if (!value) {
            showError()
        } else {
            sendRequest(Number(value) || value).then(()=>{
                // change text
                submit.innerHTML = "Ok"
            })
        }
    }

    const updateResult = (result) => {
        unix.innerText = result.unix
        utc.innerText = result.utc
    }

    // register events
    submit.addEventListener("click", handleClick)
})()