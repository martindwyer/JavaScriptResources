setTimeout(()=> {
    console.log("2 seconds are up");
}, 2000);

const names = ['Martin','Rose','Kyle','Casey'];

const shortNames = names.filter((name) => {
    return name.length <= 4;
});

const geocode = (adress,callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data);
    }, 2000);
    
}

geocode('Philadelphia', (data)=> {
    console.log(data);
});

