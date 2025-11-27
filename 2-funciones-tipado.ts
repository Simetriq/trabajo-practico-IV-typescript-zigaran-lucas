function updateStock(currentStock: number, quantityChange: number): number {
    return currentStock + quantityChange;
}

console.log("Updated stock (10 + 5):", updateStock(10, 5));
console.log("Updated stock (20 + (-3)):", updateStock(20, -3));
console.log("Updated stock (0 + 100):", updateStock(0, 100));