from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).parent / "gifs"
OUT.mkdir(parents=True, exist_ok=True)
W, H = 920, 430
BG = "#0f172a"; PANEL = "#17233b"; PANEL2 = "#1e293b"; LINE = "#334155"
TEXT = "#f8fafc"; MUTED = "#a8b5c7"; CYAN = "#22d3ee"; GREEN = "#4ade80"; ORANGE = "#fb923c"; RED = "#fb7185"; BLUE = "#60a5fa"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

def font(size, bold=False): return ImageFont.truetype(BOLD if bold else FONT, size)
def canvas(title, subtitle):
    im = Image.new("RGB", (W,H), BG); d = ImageDraw.Draw(im)
    d.rectangle((0,0,W,80), fill="#0c1424"); d.text((34,20), title, fill=TEXT, font=font(25, True)); d.text((35,51), subtitle, fill=CYAN, font=font(12, True))
    return im, d
def box(d, xy, label, color=PANEL, border=LINE, size=16, fill=TEXT):
    d.rounded_rectangle(xy, radius=12, fill=color, outline=border, width=2)
    x1,y1,x2,y2=xy; bb=d.textbbox((0,0), label, font=font(size, True)); d.text(((x1+x2-(bb[2]-bb[0]))/2,(y1+y2-(bb[3]-bb[1]))/2-2),label,fill=fill,font=font(size,True))
def arrow(d, a, b, color=CYAN, width=4):
    d.line((*a,*b), fill=color, width=width)
    x,y=b; d.polygon([(x,y),(x-11,y-7),(x-11,y+7)], fill=color)
def save(name, frames, duration=700):
    frames[0].save(OUT/name, save_all=True, append_images=frames[1:], duration=duration, loop=0, disposal=2)

def persistence():
    frames=[]
    for step in range(5):
        im,d=canvas("Persistência: por que arquivos existem?", "RAM É VOLÁTIL · ARMAZENAMENTO É PERSISTENTE")
        box(d,(65,135,360,290),"PROCESSO",PANEL2, size=23); d.text((107,235),"dados em execução",fill=MUTED,font=font(15))
        box(d,(560,135,850,290),"DISCO / SSD",PANEL2, size=23); d.text((618,235),"dados persistentes",fill=MUTED,font=font(15))
        if step>=1: arrow(d,(365,210),(550,210),GREEN); d.text((390,174),"salvar",fill=GREEN,font=font(15,True))
        if step>=2: box(d,(613,193,797,252),"relatorio.txt",GREEN, GREEN, 16, "#092516")
        if step>=3:
            d.line((65,135,360,290),fill=RED,width=7); d.line((360,135,65,290),fill=RED,width=7); d.text((126,312),"processo terminou",fill=RED,font=font(16,True))
        if step>=4: d.text((540,330),"o arquivo permanece disponível",fill=GREEN,font=font(18,True))
        frames.append(im)
    save("01-persistencia.gif",frames)

def path_resolution():
    parts=[("/",120),("home",260),("aluno",420),("projeto",585),("notas.txt",740)]
    frames=[]
    for step in range(6):
        im,d=canvas("Resolução de caminho", "O SISTEMA CONSULTA UM DIRETÓRIO DE CADA VEZ")
        d.text((55,115),"/home/aluno/projeto/notas.txt",fill=TEXT,font=font(25,True))
        for i,(label,x) in enumerate(parts):
            active=i < step
            box(d,(x-55,205,x+55,275),label, GREEN if active else PANEL2, GREEN if active else LINE, 15, "#092516" if active else TEXT)
            if i and step>i: arrow(d,(parts[i-1][1]+58,240),(x-58,240),GREEN)
        if step==0: d.text((55,325),"O caminho ainda é apenas uma sequência de nomes.",fill=MUTED,font=font(18))
        elif step<6: d.text((55,325),f"Diretório {parts[step-1][0]!r} encontrado: seguir para o próximo componente.",fill=GREEN,font=font(18))
        else: d.text((55,325),"Arquivo localizado: agora o sistema pode consultar seus metadados.",fill=GREEN,font=font(18,True))
        frames.append(im)
    save("02-resolucao-caminho.gif",frames)

def inode_blocks():
    frames=[]
    for step in range(5):
        im,d=canvas("Diretório, inode e blocos", "O NOME APONTA PARA METADADOS; METADADOS APONTAM PARA DADOS")
        d.rounded_rectangle((55,145,260,275),radius=12,fill=PANEL2,outline=LINE,width=2); d.text((84,165),"DIRETÓRIO",fill=TEXT,font=font(18,True)); d.text((84,205),"notas.txt",fill=TEXT,font=font(17,True)); d.text((84,236),"inode: 18432",fill=CYAN,font=font(15))
        d.rounded_rectangle((365,125,580,295),radius=12,fill=PANEL2,outline=LINE,width=2); d.text((393,145),"INODE",fill=TEXT,font=font(18,True)); d.text((393,183),"tamanho: 28 B",fill=MUTED,font=font(14)); d.text((393,210),"dono: aluno",fill=MUTED,font=font(14)); d.text((393,237),"permissões: rw-r--r--",fill=MUTED,font=font(14)); d.text((393,264),"blocos: 41, 42",fill=CYAN,font=font(14,True))
        d.rounded_rectangle((690,145,865,275),radius=12,fill=PANEL2,outline=LINE,width=2); d.text((725,165),"BLOCOS",fill=TEXT,font=font(18,True)); d.text((725,213),"conteúdo",fill=TEXT,font=font(17,True))
        if step>=1: arrow(d,(265,210),(355,210),GREEN)
        if step>=2: arrow(d,(585,210),(680,210),GREEN)
        if step>=3: d.text((55,345),"O diretório guarda a associação entre nome e inode.",fill=GREEN,font=font(17,True))
        if step>=4: d.text((55,375),"O inode descreve o arquivo e aponta para onde os dados estão.",fill=CYAN,font=font(17,True))
        frames.append(im)
    save("03-inode-blocos.gif",frames)

def redirect():
    frames=[]
    for step in range(5):
        im,d=canvas("Redirecionamento no shell", "'>' SUBSTITUI · '>>' ACRESCENTA")
        box(d,(55,130,470,315),"TERMINAL", "#0c1424", size=18)
        command = "echo 'nova linha' > notas.txt" if step < 3 else "echo 'nova linha' >> notas.txt"
        d.text((82,170),"$ " + command,fill=CYAN,font=font(16,True))
        box(d,(565,130,860,315),"notas.txt",PANEL2,size=18)
        lines = ["linha 1", "linha 2", "linha 3"] if step in (0,3) else ["nova linha"] if step==1 else ["linha 1","linha 2","linha 3","nova linha"]
        for i,line in enumerate(lines): d.text((600,175+i*29),line,fill=TEXT,font=font(16))
        if step==0: d.text((60,350),"Estado inicial: três linhas.",fill=MUTED,font=font(17))
        elif step==1: d.text((60,350),"Com '>': o arquivo é truncado e recebe somente a nova saída.",fill=ORANGE,font=font(17,True))
        elif step==2: d.text((60,350),"Use '>' somente quando substituir for a intenção explícita.",fill=MUTED,font=font(17))
        elif step==3: d.text((60,350),"Com '>>': o shell preserva o conteúdo anterior.",fill=GREEN,font=font(17,True))
        else: d.text((60,350),"A nova linha foi anexada ao fim do arquivo.",fill=GREEN,font=font(17,True))
        frames.append(im)
    save("04-redirecionamento.gif",frames)

def operations():
    items=[("cp", "original + cópia", GREEN), ("mv", "novo nome/caminho", BLUE), ("rmdir", "somente vazio", ORANGE), ("rm -f", "sem pergunta/erro", RED)]
    frames=[]
    for step in range(4):
        im,d=canvas("Operações: resultados diferentes", "COMANDOS PARECIDOS MEXEM EM ESTRUTURAS DIFERENTES")
        for i,(cmd,result,color) in enumerate(items):
            y=115+i*70; selected=i==step
            box(d,(70,y,260,y+48),cmd,color if selected else PANEL2,color if selected else LINE,17,"#092516" if selected else TEXT)
            d.text((300,y+12),result,fill=color if selected else MUTED,font=font(18,selected))
        explanations=["cp cria outra referência de conteúdo: o original permanece.","mv altera o nome ou a posição lógica do mesmo arquivo.","rmdir falha se o diretório ainda possuir conteúdo.","rm -f reduz mensagens e confirmações; não é um atalho seguro."]
        d.rounded_rectangle((70,370,850,410),radius=10,fill="#0c1424",outline=LINE)
        d.text((92,381),explanations[step],fill=TEXT,font=font(15))
        frames.append(im)
    save("05-operacoes.gif",frames)

def space_mount():
    frames=[]
    for step in range(4):
        im,d=canvas("Espaço e montagem", "df OBSERVA O SISTEMA DE ARQUIVOS · du OBSERVA DIRETÓRIOS")
        box(d,(65,125,415,300),"df -h .",PANEL2,size=18); d.text((100,180),"Filesystem   Size  Used  Avail",fill=MUTED,font=font(14)); d.text((100,210),"/dev/sda1     90G   42G    48G",fill=TEXT,font=font(15,True)); d.text((100,255),"capacidade do volume montado",fill=CYAN,font=font(14))
        box(d,(505,125,855,300),"du -sh projeto",PANEL2,size=18); d.text((540,190),"18M    projeto",fill=TEXT,font=font(18,True)); d.text((540,245),"ocupação daquela árvore",fill=GREEN,font=font(14))
        if step>=1: arrow(d,(415,215),(495,215),CYAN)
        if step>=2: d.text((70,345),"Montar conecta um volume a um ponto da árvore, como /mnt/dados.",fill=GREEN,font=font(17,True))
        if step>=3: d.text((70,377),"A árvore parece única para o usuário, mesmo usando vários sistemas de arquivos.",fill=CYAN,font=font(16,True))
        frames.append(im)
    save("06-espaco-montagem.gif",frames)

if __name__ == "__main__":
    persistence(); path_resolution(); inode_blocks(); redirect(); operations(); space_mount()
    print(f"GIFs gerados em {OUT}")
