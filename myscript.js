const posts =[];
function createPost1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'Post1'});
            resolve();
        }, 0);
    })
}

function createPost2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'Post2'});
            resolve();
        }, 0);
    })
}

function createPost3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'Post3'});
            resolve();
        }, 0);
    })
}

function createPost4(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'Post4'});
            resolve();
        }, 0);
    })
}

function upadateLastUserActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const date = new Date();
            resolve(date.getTime());
        }, 1000);
    })
}

function printPost(){
    posts.forEach(element => {
        console.log(element.title);
    });
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length > 0){
                const post = posts.pop();
                resolve(post);
            }
            else{
                reject('Error');
            }
        }, 1000);
    })
}
upadateLastUserActivityTime()
.then(time => {
    console.log('time before post1 created: ' + time);
})
.then(createPost1)
.then(printPost)
.then(upadateLastUserActivityTime)
.then(time => {
    console.log('time after post1 created: ' + time);
})
.then(createPost2)
.then(printPost)
.then(upadateLastUserActivityTime)
.then(time => {
    console.log('time after post2 created: ' + time);
})
.then(createPost3)
.then(printPost)
.then(upadateLastUserActivityTime)
.then(time => {
    console.log('time after post3 created: ' + time);
})
.then(createPost4)
.then(printPost)
.then(upadateLastUserActivityTime)
.then(time => {
    console.log('time after post4 created: ' + time);
})
