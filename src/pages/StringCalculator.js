export const add = (numbers) => {
    if (numbers === "") return 0;

    let delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiters.push(parts[0][2]); // Extract delimiter
        numbers = parts.slice(1).join("\n");
    }

    const regex = new RegExp(`[${delimiters.join("")}]`);
    const nums = numbers.split(regex).map((n) => parseInt(n, 10));
    return nums.reduce((sum, num) => sum + num, 0);
};



