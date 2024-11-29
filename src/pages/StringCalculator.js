export const add = (numbers) => {
    if (numbers === "") return 0;

    const delimiters = [",", "\n"];
    const regex = new RegExp(`[${delimiters.join("")}]`);
    const nums = numbers.split(regex).map((n) => parseInt(n, 10));
    return nums.reduce((sum, num) => sum + num, 0);
};


