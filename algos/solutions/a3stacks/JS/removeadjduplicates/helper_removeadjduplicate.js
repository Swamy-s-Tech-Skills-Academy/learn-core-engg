// removeadjduplicates/helper_removeadjduplicate.js

function showRemoveAdjacentDuplicatesDemo(removeDuplicates) {
    const inputs = [
        "g",
        "ggaabcdeb",
        "abbddaccaaabcd",
        "aannkwwwkkkwna",
        "abbabccblkklu"
    ];

    inputs.forEach((input, index) => {
        const result = removeDuplicates(input);
        console.log(`${index + 1}.\tRemove duplicates from string: '${input}'`);
        console.log(`\tString after removing duplicates: '${result}'`);
        console.log('-'.repeat(100));
    });
}

module.exports = {
    showRemoveAdjacentDuplicatesDemo
};
