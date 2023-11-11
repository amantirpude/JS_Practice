console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

//Without Async Await

// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('tickets');
//     }, 3000);
// })

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('Wife: I have tickets');
//     console.log('Husband: lets go in');
//     console.log('Wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// })

// const getButter = getPopcorn.then((t) => {
//     console.log('Husband: I got some popcorn');
//     console.log('Husband: now lets go in');
//     console.log('Wife : I want butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} Butter`))
// })

// getButter.then((t) => {
//     console.log(t);
// })

//With Async Await

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('coldrinks'))
    let ticket = await promiseWifeBringingTicks;

    let [popcorn, butter, coldrinks] = await Promise.all([getPopcorn, addButter, getColdDrinks]);

    console.log(`${popcorn}, ${butter}, ${coldrinks}`);

    
    // console.log(`Wife: I have ${ticket}`);
    // console.log('Husband: lets go in');
    // console.log('Wife: no i am hungry');

    // let popcorn = await getPopcorn;

    // console.log(`Husband: I got some ${popcorn}`);
    // console.log('Husband: now lets go in');
    // console.log('Wife : I want butter on my popcorn');

    // let butter = await addButter;

    // console.log(`Husband: i got some ${butter} on popcorn`);
    // console.log('Husband: anything else madam');
    // console.log(`Wife: ya i forget about the cold drinks`);
    
    // let coldrinks = await getColdDrinks;
    // console.log(`Husband: i got ${coldrinks} also`);
    // console.log('Husband: now can we go');
    // console.log(`Wife: now lets go we are getting late`);
    // console.log(`Husband: thank you for the remainder`);

    return ticket;
}

preMovie().then((m) => console.log(`Person3: shows ${m}`));
console.log('Person4: shows ticket');
console.log('Person5: shows ticket');

const posts = [];
const allPost = async() => {
    const createPost1 = new Promise((resolve, reject) => {
        resolve(posts.push('Post1'))
    })
    const createPost2 = new Promise((resolve, reject) => {
        resolve(posts.push('Post2'))
    })
    const createPost3 = new Promise((resolve, reject) => {  
        resolve(posts.push('Post3'))
    })
    const createPost4 = new Promise((resolve, reject) => {      
        resolve(posts.push('Post4'))
    })

    const printPost = new Promise((resolve, reject) => {
        resolve(posts);
    })

    const deletePost = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts.pop());
        }, 3000);
    })

    let print = await printPost;
    return print;
}

allPost().then((m) => {
    m.forEach(element => {
        console.log(element);
    });
});