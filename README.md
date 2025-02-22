# Incorrect Usage of $inc Operator in MongoDB Update Query

This example demonstrates an error that can occur when using the `$inc` operator in MongoDB update queries. The `$inc` operator is used to increment a numerical field by a specified value.  However, if a non-numerical value (like a string) is provided to `$inc`, it leads to an error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator.  The update query attempts to increment the `counter` field by the string value '1' instead of the numerical value 1.

## Solution
The solution is to provide a numerical value to the `$inc` operator for correct increment behavior.  The string value should be replaced with an integer.
