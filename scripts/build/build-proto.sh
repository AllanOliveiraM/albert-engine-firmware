#!/bin/bash

PROTO_SOURCE="src/proto/albert.proto"
FORMAT_PROTO_SOURCE="src/proto/*.ts"

protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_out="." \
    --ts_proto_opt=nestJs=true $PROTO_SOURCE

echo "Proto Build Finished!"
echo "Formatting output..."

yarn prettier --config ./.prettierrc $FORMAT_PROTO_SOURCE
