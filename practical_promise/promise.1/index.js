// 1. Create a sample promise that:
// Resolves to current time
// Prints received time in console when resolved (in then())




// const p1 = new Promise((resolve, reject) => {

//     resolve(new Date)
// })
//     .then((result) => {
//         const day = result.getDay();
//         const month = result.getMonth();
//         const year = result.getFullYear();
//         const fulldate = `${day} ${month} ${year}`
//         return fulldate;
//     }).then((res) => console.log(res))



// 2. Create a console app that:
// Creates 100 promises;
// Each promise has its own ID (0..99);
// Each promise is resolved after a random time interval (up to 500ms);
// After being resolved, each promise will log its id in the console.






// for (let id = 0; id < 100; id++) {


//     const p = new Promise((resolve, reject) => {

//         const delay = Number.parseInt(Math.random() * 500)

//         setTimeout(() => {
//             resolve(`This is Promise ${id} executed after ${delay}ms`)
//         }, delay)

//     })

//     p.then((result) => {

//         console.log(result);
//     })
// }


// 4. Modify the app so it prints a message that all promises are completed
// const allPromises = [];
// for (let id = 0; id < 100; id++) {


//     const myPromise = new Promise((resolve, reject) => {

//         const delay = Number.parseInt(Math.random() * 500)

//         setTimeout(() => {
//             resolve(`This is Promise ${id} executed after ${delay}ms`)
//         }, delay)

//     })
//         .then((id) => {
//             console.log(id);
//         })
//     allPromises.push(myPromise)
// }

Promise
    .all(allPromises)
    .then(() => {
        console.log("All promises are finished");
    })