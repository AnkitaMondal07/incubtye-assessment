export const add = (numbers) => {
    if (numbers === "") return 0;

    let delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterPart = parts[0].slice(2);
        if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
            delimiters = delimiterPart
                .match(/\[([^\]]+)\]/g) // Extract delimiters within brackets
                .map((d) => d.slice(1, -1)); // Remove brackets
        } else {
            delimiters.push(delimiterPart);
        }
        numbers = parts.slice(1).join("\n");
    }

    const regex = new RegExp(
        delimiters
            .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape special regex characters
            .join("|") // Join delimiters with "or" operator
    );

    const nums = numbers.split(regex).map((n) => parseInt(n, 10));

    const negatives = nums.filter((n) => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return nums.filter((n) => n <= 1000).reduce((sum, num) => sum + num, 0);
};
