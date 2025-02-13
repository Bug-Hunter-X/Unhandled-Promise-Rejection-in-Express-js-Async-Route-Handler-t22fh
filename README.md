# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Express.js applications involving unhandled promise rejections within asynchronous route handlers.  Improper error handling in asynchronous operations can lead to server crashes without informative error messages.

The `bug.js` file showcases the problematic code. The `bugSolution.js` demonstrates the corrected version with proper error handling.

## Problem

The `someAsyncOperation` function simulates an asynchronous operation (e.g., database query, file I/O) that might throw an error.  If the operation fails, the error isn't caught properly, resulting in an unhandled promise rejection.

## Solution

The solution involves a more robust approach to error handling: either using try...catch within async functions or properly handling the rejection using `.catch()` within the `.then()` chain.