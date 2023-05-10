//Q: Write a JavaScript function to add specified minutes to a Date object.?


let add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(add_minutes(new Date(2014,10,2), 30).toString());
