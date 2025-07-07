#!/bin/bash
# Process images from assets/img_uncompressed to assets/img

find assets/img_uncompressed -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read img; do
  # Get relative path from assets/img_uncompressed
  rel_path="${img#assets/img_uncompressed/}"
  output_path="assets/img/$rel_path"

  # Create the full directory structure if it doesn't exist
  mkdir -p "$(dirname "$output_path")"

  # Only process if output doesn't exist
  if [ ! -f "$output_path" ]; then
    echo "Found: $img"
    echo "Will create: $output_path"
    # Resize to max web size with quality 100
    magick "$img" -resize 1400x1400 -quality 100 "$output_path"
    echo "Processed: $img → $output_path"
    echo "---"
  fi
done
