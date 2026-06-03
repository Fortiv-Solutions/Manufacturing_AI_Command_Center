import subprocess

try:
    diff_summary = subprocess.check_output(['git', 'diff', '--numstat', 'src/routes/m.$moduleId.$subId.tsx']).decode('utf-8')
    print("Diff summary:")
    print(diff_summary)
except Exception as e:
    print("Error:", e)
