#!/bin/bash
# Copyright 2022 The Mars Authors.
# SPDX-License-Identifier: Apache-2.0.

SCRIPT_PATH="$(cd "$(dirname "$0")" >/dev/null 2>&1 && pwd)"
cd "$SCRIPT_PATH/../.." || exit

echo "Build(RELEASE) start..."
cargo build --bin=ethetl --bin=ethetl-stream --release
echo "All done..."
