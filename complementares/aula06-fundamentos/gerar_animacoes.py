from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).parent / "gifs"
OUT.mkdir(parents=True, exist_ok=True)
W, H = 1200, 675
BG, INK, TEAL, CYAN, GREEN, YELLOW, RED, LINE = (
    "#FAFBFC", "#1C2430", "#0E7490", "#22D3EE", "#27C93F", "#FFBD2E", "#FF6B6B", "#DDE5EA"
)

def font(size, bold=False):
    candidates = [
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

def box(d, xy, title, lines, accent=TEAL):
    x1, y1, x2, y2 = xy
    d.rounded_rectangle(xy, radius=16, fill="#FFFFFF", outline="#B9C9D5", width=2)
    d.rectangle((x1, y1, x1+7, y2), fill=accent)
    d.text((x1+24, y1+19), title, fill=INK, font=F_BODY)
    for i, line in enumerate(lines):
        d.text((x1+24, y1+62+i*29), line, fill="#596B7D", font=F_SMALL)

def arrow(d, x1, y1, x2, y2, color=TEAL, width=5):
    d.line((x1,y1,x2,y2), fill=color, width=width)
    d.polygon([(x2,y2),(x2-15,y2-9),(x2-15,y2+9)], fill=color)

def write_gif(name, frames, duration=160):
    frames[0].save(OUT/name, save_all=True, append_images=frames[1:], duration=duration, loop=0, optimize=False)

def bulk_vs_packages():
    frames=[]
    for step in range(14):
        im,d=base("Dados: uma carga ou milhares de pacotes?", "Granularidade muda custo, rastreabilidade e acesso")
        box(d,(48,158,390,486),"Carga contínua",["um fluxo grande","poucos cabeçalhos","bom para leitura sequencial"],TEAL)
        box(d,(812,158,1152,486),"Pacotes individuais",["muitos itens","metadados repetidos","acesso seletivo"],YELLOW)
        # tank
        d.rounded_rectangle((100,340,338,435),25,fill="#DDF8FC",outline=TEAL,width=3)
        d.rectangle((105,375,333,430),fill=CYAN)
        d.text((164,385),"VOLUME",fill=INK,font=F_SMALL)
        # packages gradually appear
        n=min(step,10)
        for i in range(n):
            x=850+(i%2)*130; y=260+(i//2)*44
            d.rounded_rectangle((x,y,x+98,y+32),5,fill="#FFF6DC",outline=YELLOW,width=2)
            d.text((x+12,y+8),"item",fill=INK,font=F_SMALL)
        if step>=4: arrow(d,408,329,766,329,TEAL if step<9 else YELLOW)
        msg = "Uma decisão não é melhor em todos os casos." if step<9 else "Mais unidades: mais escolha, mais metadados e mais operações."
        d.text((84,548),msg,fill=INK,font=F_BODY)
        d.text((84,587),"Não confunda “RAW” com “menor”: RAW pode ser maior por não usar compressão.",fill=RED,font=F_SMALL)
        frames.append(im)
    write_gif("01-carga-ou-pacotes.gif",frames)

def transport_and_mount():
    frames=[]
    for step in range(15):
        im,d=base("O dispositivo chegou. Onde ele entra na árvore?", "Reconhecer hardware não é o mesmo que abrir arquivos")
        box(d,(54,168,330,430),"Dispositivo",["USB / SSD externo","blocos de armazenamento","partição + formato"],TEAL)
        box(d,(435,168,760,430),"Sistema operacional",["driver reconhece","lê a partição","identifica o formato"],CYAN)
        box(d,(865,168,1145,430),"Ponto de montagem",["Windows: E:","Linux: /media/usb","arquivos ficam visíveis"],GREEN)
        if step>1: arrow(d,337,302,423,302)
        if step>5: arrow(d,768,302,852,302)
        if step>9:
            d.rounded_rectangle((908,455,1105,505),8,fill="#10212B")
            d.text((925,469),"/media/pendrive",fill="#D8E9F2",font=F_SMALL)
        status = ["conectado", "reconhecido", "formato compatível?", "montado e acessível"][min(3,step//4)]
        d.text((60,548),"Estado: "+status,fill=TEAL,font=F_BODY)
        d.text((60,587),"Montar = associar o sistema de arquivos a um local da árvore.",fill=INK,font=F_SMALL)
        frames.append(im)
    write_gif("02-dispositivo-e-montagem.gif",frames)

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

def decision_matrix():
    frames=[]
    rows=[
        ("Câmera / firmware","FAT32","máxima compatibilidade; limite de 4 GiB",YELLOW),
        ("SSD externo 12 GiB","exFAT","troca moderna entre Windows e macOS",TEAL),
        ("Windows + SQL Server","NTFS / ReFS","suporte, recuperação e I/O do ambiente",CYAN),
        ("Linux + SGBD","ext4 / XFS","ponto de partida; valide com benchmark",GREEN),
        ("Mac interno","APFS","integração com macOS e SSD",TEAL),
    ]
    for step in range(16):
        im,d=base("A melhor escolha depende do trabalho", "Compatibilidade, integridade e desempenho não são uma única métrica")
        d.text((62,145),"CENÁRIO",fill=TEAL,font=F_SMALL); d.text((405,145),"ESCOLHA INICIAL",fill=TEAL,font=F_SMALL); d.text((675,145),"JUSTIFICATIVA",fill=TEAL,font=F_SMALL)
        for i,(a,b,c,col) in enumerate(rows):
            y=175+i*74
            visible = i <= step//3
            fill="#FFFFFF" if not visible else "#F6FBFC"
            d.rounded_rectangle((52,y,1148,y+56),8,fill=fill,outline=LINE)
            if visible:
                d.rectangle((52,y,60,y+56),fill=col)
                d.text((77,y+17),a,fill=INK,font=F_SMALL)
                d.text((405,y+17),b,fill=INK,font=F_SMALL)
                d.text((675,y+17),c,fill="#526477",font=F_SMALL)
        if step>12:
            d.text((62,585),"A resposta profissional termina em: “vamos medir este workload, neste hardware e neste SGBD”.",fill=RED,font=F_SMALL)
        frames.append(im)
    write_gif("04-decisao-por-cenario.gif",frames)

def journal_recovery():
    frames=[]
    for step in range(16):
        im,d=base("Gravar não é apenas colocar bytes no disco", "Journal reduz inconsistência; backup recupera a história")
        box(d,(54,190,300,420),"Aplicação",["altera um arquivo","ou confirma uma transação"],TEAL)
        box(d,(470,190,725,420),"Journal",["intenção registrada","operação confirmada"],YELLOW)
        box(d,(895,190,1145,420),"Volume",["metadados e dados","estado consolidado"],GREEN)
        if step>1: arrow(d,307,303,458,303)
        if step>5: arrow(d,732,303,882,303)
        if step>8:
            d.rounded_rectangle((510,455,685,510),9,fill="#FFF0F0",outline=RED,width=2)
            d.text((533,474),"queda de energia",fill=RED,font=F_SMALL)
        msg="Uma transação começa." if step<5 else "O journal registra a mudança antes da consolidação."
        if step>10: msg="Na recuperação: completar ou desfazer uma operação incompleta."
        d.text((65,560),msg,fill=INK,font=F_BODY)
        d.text((65,603),"Journal não substitui backup contra exclusão, ransomware ou erro humano.",fill=RED,font=F_SMALL)
        frames.append(im)
    write_gif("05-journal-e-recuperacao.gif",frames)

if __name__ == "__main__":
    bulk_vs_packages()
    transport_and_mount()
    block_size()
    decision_matrix()
    journal_recovery()
    print("Animações da Aula 06 geradas em", OUT)
