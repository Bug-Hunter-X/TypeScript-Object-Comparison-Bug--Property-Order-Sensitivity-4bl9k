# TypeScript Object Comparison Bug: Property Order Sensitivity

This repository demonstrates a bug in a TypeScript function designed to compare two objects for equality. The function incorrectly returns `false` if the objects have the same properties but in a different order, because it relies on `Object.keys`, which does not guarantee order.

## Bug Description

The provided `compareObjects` function compares two objects for equality. However, it fails when objects have identical properties but different property orders.  This is because `Object.keys` iterates over object properties in an order that is not guaranteed to be consistent across different JavaScript engines or even across different executions of the same code.

## Solution

The solution involves using a method that ensures consistent property order comparison. The improved function iterates over the properties of one object and checks if they exist and have the same value in the second object, irrespective of their order.

## How to reproduce

1. Clone the repository.
2. Open the `bug.ts` file, which contains the faulty object comparison function.  Observe that comparing two objects with the same properties in a different order will return `false`.
3. Compare the results from running the buggy and fixed functions. You'll see that the solution in `bugSolution.ts` addresses the issue.