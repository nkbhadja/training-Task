// const measurkelvin = function () {
//     const measurment = {
//         type: 'temp',
//         unit: 'celsius',
//         value: Number(prompt('Degree celsius:'),)
//     };
//     console.log(measurment);
//     const kelvin = measurment.value + 273;
//     return kelvin;
// };

// console.log(measurkelvin());

//challenge 1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printforcat = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}°c in ${i + 1}days...`;
    }
    console.log('...' + str);
}
printforcat(data1);