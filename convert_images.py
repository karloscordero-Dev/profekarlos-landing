import os
import subprocess
import glob

source_dir = "/Users/carloscorderolizana/Downloads"
dest_dir = "src/assets/testimonials"

os.makedirs(dest_dir, exist_ok=True)

# Map of expected IDs to search patterns
# We look for "testimonio i.*"
for i in range(1, 12):
    pattern = os.path.join(source_dir, f"testimonio {i}.*")
    files = glob.glob(pattern)
    
    if not files:
        # Try case insensitive search if glob didn't catch it on mac (glob is usually case sensitive depending on OS, mac is usually case insensitive but let's be safe)
        # We can just list dir and find matches manually if glob fails
        all_files = os.listdir(source_dir)
        target_name_lower = f"testimonio {i}."
        files = [os.path.join(source_dir, f) for f in all_files if f.lower().startswith(target_name_lower)]

    if files:
        source_file = files[0] # Take the first match
        dest_file = os.path.join(dest_dir, f"testimonio-{i}.png")
        
        print(f"Converting {source_file} to {dest_file}...")
        try:
            subprocess.run(["sips", "-s", "format", "png", source_file, "--out", dest_file], check=True)
        except subprocess.CalledProcessError as e:
            print(f"Error converting {source_file}: {e}")
    else:
        print(f"Warning: Could not find ANY file for testimonio {i}")
