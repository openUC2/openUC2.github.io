#!/bin/bash
repo_root="$(dirname "$(realpath "$BASH_SOURCE")")"

variant="$1"

echo "Preprocessing for variant $variant..."
case "$variant" in
full)
  exit 0
  ;;
minimal)
  rm -rf \
    "$repo_root/docs/archive" \
    "$repo_root/docs/workshops" \
    "$repo_root/docs/03_INVESTIGATOR" \
    "$repo_root/docs/usage/disc/xiao-microscope" \
    "$repo_root/docs/usage/disc/qbox"
  ;;
esac

shopt -s globstar
sed -i "/{\/\*.* build:exclude=$variant .*\*\/}/d" "$repo_root"/docs/**/*.mdx
