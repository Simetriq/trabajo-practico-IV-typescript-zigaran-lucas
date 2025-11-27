function updateStock(currentStock: number, quantityChange: number): number {
    return currentStock + quantityChange;
}

console.log("Updated stock:", updateStock(10, 5));