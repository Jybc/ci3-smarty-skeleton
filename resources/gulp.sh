#!/usr/bin/env bash
# 当前目录
CURRENT_DIR=$(cd $(dirname $0); pwd)
MODELES_PACKETE= "/*/*/node_modules/"
# node_modules 这个完整包固定存储在这个位置，适用于linux centos6.10环境
rsync -av $MODELES_PACKETE $CURRENT_DIR/node_modules
gulp
echo "gulp successed"
