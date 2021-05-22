const getStringArray = (array) => {
    let stringArray = [];
    array.map((item) => {
        stringArray.push(item["item"]);
    })
    return stringArray;
}

exports.getStringArray = getStringArray;