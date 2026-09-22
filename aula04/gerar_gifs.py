from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
out=Path("gifs_processos");out.mkdir(exist_ok=True)
F="/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
font=ImageFont.truetype(F,22); small=ImageFont.truetype(F,17)
bg=(12,18,24); bar=(22,27,34); white=(220,230,239); green=(74,246,38); cyan=(34,211,238); orange=(255,189,46); coral=(255,107,107); gray=(154,164,173)
def frame(lines,title,marks=[]):
 im=Image.new("RGB",(900,430),bg);d=ImageDraw.Draw(im);d.rectangle((0,0,900,46),fill=bar);d.text((18,12),"● ● ●",font=small,fill=coral);d.text((110,13),title,font=small,fill=gray)
 y=72
 for text,col in lines:d.text((32,y),text,font=font,fill=col);y+=42
 for x,y,w,h,col in marks:d.rectangle((x,y,x+w,y+h),outline=col,width=3)
 return im
frames=[]
for n,cpu,mem in [(1,"7.8","2.1"),(2,"23.4","3.8"),(3,"46.1","6.2"),(4,"11.2","2.5")]:
 lines=[("top - 10:30:0%d  up 2:10" % n,white),("Tasks: 132 total, 1 running",gray),("PID   USER   %CPU  %MEM  COMMAND",cyan),("681   aluno  %4s  %4s  python simulacao.py"%(cpu,mem),white),("412   aluno   0.2   1.1  bash",gray),("201   root    0.0   0.6  systemd",gray),("LEITURA: CPU e memória mudam com o workload.",cyan)]
 frames.append(frame(lines,"top · monitoramento em tempo real",[(24,185,850,42,orange)]))
frames[0].save(out/"top_monitoramento.gif",save_all=True,append_images=frames[1:],duration=900,loop=0)
frames=[]
for k in range(4):
 lines=[("systemd  (PID 1)",white),("└── bash  (PID 412)",green if k>0 else gray),("    └── python  (PID 681)",cyan if k>1 else gray),("        └── ps  (PID 702)",orange if k>2 else gray),("LEITURA: PPID liga cada processo ao seu pai.",cyan)]
 frames.append(frame(lines,"árvore de processos"))
frames[0].save(out/"arvore_processos.gif",save_all=True,append_images=frames[1:],duration=800,loop=0)
frames=[]
for k in range(4):
 lines=[("Administrador",white),("      │",gray),("      ├── kill 681  →  SIGTERM",orange if k>0 else gray),("      │                 │",gray),("      │                 └── processo libera recursos",green if k>1 else gray),("      └── kill -9 681 → SIGKILL (último recurso)",coral if k>2 else gray)]
 frames.append(frame(lines,"encerramento controlado"))
frames[0].save(out/"sinais_processos.gif",save_all=True,append_images=frames[1:],duration=850,loop=0)
