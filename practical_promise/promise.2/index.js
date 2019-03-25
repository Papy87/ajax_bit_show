
const promisesArray = [];


for (let i = 0; i < 10; i++) {
    const p = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json()
        }).then(result => result.message

        )


    promisesArray.push(p);
}




Promise.all(promisesArray).then((result) => {
    result.forEach((element) => {
        $("body").append($(`<img src=${element}>`).attr("width", "300px"));
    })
})
