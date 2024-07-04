#!/bin/bash

# Check if at least one argument is provided
if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <some bash command>"
    exit 1
fi

# Construct the command to execute
command_to_execute="$@"

# Loop over the deployments
for i in 1 2 3; do
    # Link file.json to the appropriate file
    ./scripts/use-deployment.sh "$i"
    
    # Check if the linking was successful
    if [ $? -ne 0 ]; then
        echo "Failed to link file.json to file-$i.json"
        exit 1
    fi

    # Execute the given command
    eval "$command_to_execute"
    
    # Check if the command was successful
    if [ $? -ne 0 ]; then
        echo "Command failed on deployment $i"
        exit 1
    fi
done