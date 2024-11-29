export const add = (numbers) => {
    if (numbers === "") return 0;
    if (!numbers.includes(",")) return parseInt(numbers, 10);

    const nums = numbers.split(",").map((n) => parseInt(n, 10));
    return nums.reduce((sum, num) => sum + num, 0);
};

