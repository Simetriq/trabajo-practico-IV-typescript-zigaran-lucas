type orderStatus = "pending" | "shipped" | "delivered";

enum LogLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

function logMessage(level: LogLevel, message: string): void {
    console.log(`[${level}] ${message}`);
}

let status: orderStatus = "pending";
console.log("Order Status:", status);

logMessage(LogLevel.Info, "Order has been placed.");
logMessage(LogLevel.Warning, "Stock is low.");
logMessage(LogLevel.Error, "Payment failed.");