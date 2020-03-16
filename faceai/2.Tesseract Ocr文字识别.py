from PIL import Image
import pytesseract

path = "img/4.jpg"

text = pytesseract.image_to_string(Image.open(path), lang='chi_sim')
print(text)

