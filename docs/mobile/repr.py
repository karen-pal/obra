from PIL import Image, ImageEnhance
import numpy as np

# Función para mapear los píxeles a caracteres ASCII
def pixel_to_ascii(pixel_value):
    ascii_chars = "@%#*+=-:. "  # Caracteres de más oscuro a más claro
    return ascii_chars[int(pixel_value * (len(ascii_chars) - 1) / 255)]

# Función para convertir la imagen a ASCII
def image_to_ascii(image_path, width=150, height=150):
    # Cargar imagen
    img = Image.open(image_path)
    
    # Aumentar el contraste
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(2.0)  # Puedes ajustar el valor de contraste según sea necesario

    # Convertir a blanco y negro
    img = img.convert("L")  # Convertir a escala de grises

    # Redimensionar la imagen
    img = img.resize((width, height))

    # Convertir los píxeles a ASCII
    ascii_image = ""
    pixels = np.array(img)

    for y in range(height):
        for x in range(width):
            ascii_image += pixel_to_ascii(pixels[y, x])
        ascii_image += "\n"

    return ascii_image

# Ruta de la imagen PNG
image_path = 'ruta_a_tu_imagen.png'

# Convertir y mostrar la imagen en ASCII
ascii_art = image_to_ascii(image_path)
print(ascii_art)

