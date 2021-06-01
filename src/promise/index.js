const somthingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somthingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

const somthingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true');
            }, 2000)
        } else {
            const error = new Error('whooop!');
            reject(error);
        }
    });
}

somthingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

Promise.all([somthingWillHappen(), somthingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})