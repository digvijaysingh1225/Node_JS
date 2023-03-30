// scope of these function is private

//Parameter
const add = (a, b) => {
    return a+b;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}

//If there is only one function
// module.exports = add;

// For multiple
module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;

module.exports = { add, sub, mul};