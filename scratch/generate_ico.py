import base64

# Base64 of a 16x16 transparent favicon.ico
ico_base64 = (
    "AAABAAEAEBAAAAEAIABoQgAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAA"
    "AAAAAAAAAP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD///8A///8AP///wD/"
    "//8A///8AP///wD///8A///8AP///wD///8A///8AP///wA="
)

with open("public/favicon.ico", "wb") as f:
    f.write(base64.b64decode(ico_base64))
print("Successfully generated public/favicon.ico")
