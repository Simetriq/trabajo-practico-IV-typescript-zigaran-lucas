var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Warning"] = "Warning";
    LogLevel["Error"] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(level, message) {
    console.log("[".concat(level, "] ").concat(message));
}
var currentStatus = "pending";
console.log("Order Status:", currentStatus);
logMessage(LogLevel.Info, "Order has been placed.");
logMessage(LogLevel.Warning, "Stock is low.");
logMessage(LogLevel.Error, "Payment failed.");
