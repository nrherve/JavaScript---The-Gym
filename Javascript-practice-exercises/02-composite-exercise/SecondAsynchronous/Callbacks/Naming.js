function formatName(firstName, lastName, callback) {
    let name = callback(firstName, lastName);
    console.log(name);
}
function firstFormat(first, second){
    return `${first} ${second}`;
}
function secondFormat(first, second){
    return `${second}, ${first}`;
}
function thirdFormat(first, second){
    return `${first[0]}. ${second}`;
}
formatName("Herve", "Ngenzi", firstFormat);
formatName("Herve", "Ngenzi", secondFormat);
formatName("Herve", "Ngenzi", thirdFormat);