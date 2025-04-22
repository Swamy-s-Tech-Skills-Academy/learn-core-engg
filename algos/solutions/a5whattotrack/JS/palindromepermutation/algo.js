// palindromepermutation/algo.js

function permutePalindrome(st) {
    let frequencies = {};

    for (let i = 0; i < st.length; i++) {
        if (st[i] in frequencies) {
            frequencies[st[i]] += 1;
        } else {
            frequencies[st[i]] = 1;
        }
    }
    
    let count = 0;
    let keys = Object.keys(frequencies);

    keys.forEach(ch => {
        if (frequencies[ch] % 2) {
            count += 1;   
        } 
    });

    if (count <= 1) {
        return true;
    } else {
        return false;
    }
}

module.exports = { permutePalindrome };