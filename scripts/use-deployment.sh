#!/bin/bash

# Check if exactly one argument is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <1|2|3>"
    exit 1
fi

# Check if the argument is either 1 or 2
if [ "$1" -ne 1 ] && [ "$1" -ne 2 ] && [ "$1" -ne 3 ]; then
    echo "Error: Argument must be 1, 2, or 3"
    exit 1
fi

# Determine the target file based on the argument
TARGET_FILE="canister_ids-$1.json"

# Check if the target file exists
if [ ! -f "$TARGET_FILE" ]; then
    echo "Error: $TARGET_FILE does not exist"
    exit 1
fi

# Remove the existing symbolic link if it exists
if [ -L "canister_ids.json" ]; then
    rm canister_ids.json
fi

# Create a new symbolic link
ln -s "$TARGET_FILE" canister_ids.json

echo "Linked canister_ids.json to $TARGET_FILE"