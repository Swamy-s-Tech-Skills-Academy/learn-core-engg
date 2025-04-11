// findduplicate/helper_findduplicate.js

function showFindDuplicateDemo(findDuplicate) {
    console.log("========== Find Duplicate Demo ==========");

    const testCases = [
        [1, 3, 2, 3, 5, 4],
        [2, 4, 5, 4, 1, 3],
        [1, 6, 3, 5, 1, 2, 7, 4],
        [1, 2, 2, 4, 3],
        [3, 1, 3, 5, 6, 4, 2]
    ];

    testCases.forEach((nums, index) => {
        console.log(`${index + 1}.\tnums =`, nums);
        console.log(`\tDuplicate number =`, findDuplicate(nums));
        console.log("-".repeat(100));
    });
}

module.exports = { showFindDuplicateDemo };
