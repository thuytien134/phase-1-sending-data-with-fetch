// Add your code here
function submitData(name, email) {
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
        .then(res => res.json())
        .then(obj => {
            console.log(obj)
        document.querySelector('body').innerHTML = `
        <p>${obj.id}</p>`})
        .catch(error => {
            alert('Unauthorized Access')
            document.body.innerHTML = `
            <p>${error}.message</p>`})

}

submitData()













