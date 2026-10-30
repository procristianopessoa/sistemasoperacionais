"""Reproduz apenas o GIF existente de tamanho de bloco. Requer Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).parent / "gifs-gerados"
OUT.mkdir(parents=True, exist_ok=True)
W, H = 1200, 675
BG, INK, TEAL, CYAN, GREEN, YELLOW, RED, LINE = (
    "#FAFBFC", "#1C2430", "#0E7490", "#22D3EE", "#27C93F", "#FFBD2E", "#FF6B6B", "#DDE5EA"
)

def font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()

F_TITLE, F_SUB, F_BODY, F_SMALL = font(39, True), font(18, True), font(21), font(15, True)

def base(title, subtitle):
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    for x in range(0, W, 56):
        d.line((x, 0, x, H), fill="#EEF3F5", width=1)
    for y in range(0, H, 56):
        d.line((0, y, W, y), fill="#EEF3F5", width=1)
    d.text((44, 28), title, fill=INK, font=F_TITLE)
    d.text((46, 79), subtitle.upper(), fill=TEAL, font=F_SUB)
    d.line((42, 112, W-42, 112), fill=LINE, width=2)
    return im, d

def write_gif(name, frames, duration=160):
    frames[0].save(OUT/name, save_all=True, append_images=frames[1:], duration=duration, loop=0, optimize=False)

def block_size():
    frames=[]
    for step in range(16):
        im,d=base("Tamanho de bloco: espaço, metadados e padrão de I/O", "O formato define unidades; o workload decide a escolha")
        for x in range(70,550,52):
            for y in range(185,440,52):
                d.rectangle((x,y,x+44,y+44),outline="#AFC2CF",width=2,fill="#FFFFFF")
        for x in range(670,1120,104):
            for y in range(185,440,104):
                d.rectangle((x,y,x+96,y+96),outline="#AFC2CF",width=2,fill="#FFFFFF")
        d.text((70,142),"BLOCOS MENORES",fill=TEAL,font=F_SUB)
        d.text((670,142),"BLOCOS MAIORES",fill=TEAL,font=F_SUB)
        # tiny document uses 3 smaller or wastes large
        fill_count=min(9,step+1)
        for i in range(min(fill_count,9)):
            x=70+(i%3)*52; y=185+(i//3)*52
            d.rectangle((x+5,y+5,x+39,y+39),fill=CYAN)
        d.rectangle((675,190,761,276),fill=CYAN)
        if step>5: d.rectangle((775,190,861,276),fill="#FFF2C4")
        d.text((70,470),"muitos arquivos pequenos: menos desperdício",fill=INK,font=F_SMALL)
        d.text((670,470),"arquivos grandes: menos blocos e metadados",fill=INK,font=F_SMALL)
        if step>9:
            d.rounded_rectangle((255,525,944,600),14,fill="#EAF7FA",outline="#B7E0E8")
            d.text((281,549),"Banco de dados: alinhar páginas, I/O, SSD, cache e recuperação; medir antes de concluir.",fill=INK,font=F_SMALL)
        frames.append(im)
    write_gif("03-tamanho-de-bloco.gif",frames)

if __name__ == "__main__":
    block_size()
    print("GIF criado em", OUT / "03-tamanho-de-bloco.gif")
