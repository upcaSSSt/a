from PIL import Image, ImageDraw, ImageFont
import string
import random 

# lambda function - used to pick a random loaction in image
getit = lambda : (random.randrange(5, 85),random.randrange(5, 55))

# pick a random colors for points
colors = ["black","red","blue","green",(64, 107, 76),(0, 87, 128),(0, 3, 82)]

# fill_color = [120,145,130,89,58,50,75,86,98,176]
# pick a random colors for lines
fill_color = [(64, 107, 76),(0, 87, 128),(0, 3, 82),(191, 0, 255),(72, 189, 0),(189, 107, 0),(189, 41, 0)]

# create a img object
img = Image.new('RGB', (90, 60), color="white")
draw = ImageDraw.Draw(img)

# get the random string
captcha_str = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
# get the text color
text_colors = random.choice(colors)
draw.text((20,20), captcha_str, fill=text_colors, f=ImageFont.load_default())

# draw some random lines
for i in range(5,random.randrange(6, 10)):
    draw.line((getit(), getit()), fill=random.choice(fill_color), width=random.randrange(1,3))

# draw some random points
for i in range(10,random.randrange(11, 20)):
    draw.point((getit(), getit(), getit(), getit(), getit(), getit(), getit(), getit(), getit(), getit()), fill=random.choice(colors))

img.save("captcha.png")
"""
img_main = Image.new("RGB", (200, 200))
font = ImageFont.load_default()

# Text to be rotated...
rotate_text = u'This text should be rotated.'

# Image for text to be rotated
img_txt = Image.new('L', font.getsize(rotate_text))
draw_txt = ImageDraw.Draw(img_txt)
draw_txt.text((0,0), rotate_text, font=font, fill=255)
t = img_value_axis.rotate(90, expand=1)
"""
