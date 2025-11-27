type orderStatus = "pending" | "shipped" | "delivered";

enum LogLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

function logMessage(level: LogLevel, message: string): void {
    console.log(`[${level}] ${message}`);
}

let orderStatus: orderStatus = "pending";