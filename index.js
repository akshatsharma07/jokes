const getJokes= async () => {
    try{
        console.log('akshat')
        const resp = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await resp.json();
        console.log('data', data)
        const myJoke = document.querySelector("#myJoke");
        myJoke.innerHTML = data.value;
    }catch(error){} 
};

window.addEventListener("load",()=> {
    getJokes();
});