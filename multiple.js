function lcs(a, b) {
    let m = 0, x = 0, dp = [];
    for (let i = 0; i < a.length; i++) {
        dp[i] = [];
        for (let j = 0; j < b.length; j++) {
            dp[i][j] = a[i] == b[j] ? (dp[i - 1]?.[j - 1] || 0) + 1 : 0;
            if (dp[i][j] > m) m = dp[x = i][j];
        }
    }
    return a.slice(x - m + 1, x + 1);
}

function lcsMultiple(...strings) {
    // Start with the first string
    let result = strings[0];

    // Compare the current result with each of the other strings
    for (let i = 1; i < strings.length; i++) {
        result = lcs(result, strings[i]);

        // If at any point the result becomes empty, no common substring exists
        if (result === '') {
            break;
        }
    }

    return result;
}

// Taking arguments from the command line
let [, , ...strings] = process.argv;

// Ensure there are at least two strings to compare
if (strings.length < 2) {
    console.log("Please provide at least two strings to compare.");
} else {
    console.log(lcsMultiple(...strings));
}