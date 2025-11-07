#!/usr/bin/env python3

import re
import os
import subprocess

# Get list of files containing YouTube iframes
result = subprocess.run([
    'grep', '-r', '<iframe.*youtube\\.com', '/Users/bene/Documents/UC2-DOCS', 
    '--include=*.md', '--include=*.mdx', '-l'
], capture_output=True, text=True)

files = result.stdout.strip().split('\n')

# Regex pattern to match YouTube iframe elements
iframe_pattern = re.compile(
    r'<iframe\s+[^>]*src="https://www\.youtube\.com/embed/[^"]*"[^>]*></iframe>',
    re.IGNORECASE | re.DOTALL
)

def convert_iframe_to_responsive(match):
    # Extract src and title from the original iframe
    iframe_content = match.group(0)
    
    # Extract src
    src_match = re.search(r'src="([^"]*)"', iframe_content)
    src = src_match.group(1) if src_match else ""
    
    # Extract title
    title_match = re.search(r'title="([^"]*)"', iframe_content)
    title = title_match.group(1) if title_match else "YouTube video player"
    
    # Create responsive iframe
    responsive_iframe = f'''<div style={{{{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}}}>
  <iframe 
    style={{{{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}}}
    src="{src}" 
    title="{title}" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  />
</div>'''
    
    return responsive_iframe

# Process each file
for file_path in files:
    if file_path and os.path.exists(file_path):
        print(f"Processing: {file_path}")
        
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace iframes
        new_content = iframe_pattern.sub(convert_iframe_to_responsive, content)
        
        # Write back if changes were made
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  - Updated {file_path}")
        else:
            print(f"  - No changes needed in {file_path}")

print("Done!")
