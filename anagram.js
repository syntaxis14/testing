// let arrData = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
// let hasil = matching(arrData)
// console.log(hasil); 

function matching(params) {
    let anagram = [];
    for (let i = 0; i < arrData.length; i++) {
        let word = arrData[i];
        let addedGroup = false;
        for (let j = 0; j < anagram.length; j++) {
            let group = anagram[j];

            if (word.split("").sort().join("") === group[0].split("").sort().join("")) {
                group.push(word);
                addedGroup = true;
                break;
            }
        }
        if (!addedGroup) {
            anagram.push([word]);
        }
    }
    return anagram;
}
