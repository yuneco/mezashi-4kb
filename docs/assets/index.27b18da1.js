const r="px",A="style",S="filter",h="forEach",O="innerHTML",E="stroke",X=document,y=X.body,P=t=>X.createElement(t),w=t=>y.appendChild(t),T=(t=1)=>Math.random()*t,Y=setTimeout,tt=(t,e)=>{t.onpointerdown=n=>{n.cancelBubble=!0,e()}},u="#666",it="#fff",lt="#0000",C=100,m=(t,e=4,n="none",o=u)=>t.split("*").map(s=>`<path d="M${atob(s).split("").map(a=>a.charCodeAt(0)).map(a=>a<20?"MmLlHhVvCcSsQqTtAaZz"[a]:a-148).join(" ")}" ${E}=${o} ${E}-width=${e} fill=${n} ${E}-linecap=round ${E}-linejoin=round />`).join(""),U=(t,e,n)=>`<svg viewBox="0 0 ${e} ${n}">${t}</svg>`,rt=U(m("zb8LkJ2KmHuRcYgIn7aWw5jEC6WZrp0JkpqQn46kiImJp5OglpWen62eq5SzgrN+CtTGzb8S",0,"#ec6")+m("zqoJlpidqoapAYSeCZOblaabqQunjaeICsXEvsE*xdkJmZmUnZGWAZWsCZWajpuPlA*x/MJlZuPm4+U*wcIJm5Wcj5yPn5+nqauwEZmZlJSVlJkJjKptsFyf*r9EJkpiPno+fAbSGCZmTs5GcpQjI6LfpseIJkZGTjpaM*r98R4eGUlJSKjwmPko+nlqQLnY6ejADItRGVlZSUlJWUCZSUlJOUkwuUlZSVEgGbmAmTlI+VkZcAmsEImr2pw6bICY6VgZODjguaiJuICqrCpsgBtoUHlQGSkweVAZeKkpUBpLeXkQF/nAmZmJSdkZYBnYyboA",2)+m("xp8JkoeOh4ySjYqHioebCKasnrSjvQuioqefCsW7xrAJlpOYkJiLlpmYl5iVC5GMi4sS*psgJk5WJn5KjC5+Ln4kJkpSNk4uQEg*0dIRlZWUlZSVk5WVlJSUk5US",2,u),80,120),_="JjI+DmIyemJaenaCmjpGEjnePloyVg5B9l4SSf4WKkY+Pi42LC5CXjaIInayWwabKCY6ggLuPvpaUmZSckJadoJuikhHr65SUlLSWCNj33vfh8gmVl5aYmZifkqJ+oW2Ygo90hnAS",mt=U(m(`5as${_}`,0,"#998")+m(`4Ko${_}*o7wJkpeLmYmTAaqKi5iclwGcl52VALa/A5yXALG+A5OYAZKPk5g`),C,C),q="JlJmIn3afiZR4knKPiZt8noOQjIiZh6WSoI2rjLaLopOyl7KdEw",ut=U(m(`8ac${q}`,0,"#9bc")+m(`76U${q}GFkpiYAZSQkJg`),C,40),f=new AudioContext,$=f.createGain(),z=$.gain;$.connect(f.destination);const k=([t,...e])=>{if(!t)return;const n=f.createOscillator();n.connect($),n.frequency.setValueAtTime(t,f.currentTime),z.value=.3,z.linearRampToValueAtTime(0,f.currentTime+.09),n.start(),Y(()=>{n.stop(),k(e)},C)},p=600,L=p,pt=20,dt=-1,At=.003,Ct=.01,St=.04,ft=.2;let K,v,V,N=0,I=1,G=0,B=-1,g=!1,R=0,b=1,d=6,j=[],i=[],l=[],c;const et=t=>{t.border="solid 2px"+u},Z=(t,e)=>{t[O]=e},W=(t,e,n,o=0,s=0)=>{t.position="absolute",t.top=s+r,t.left=o+r,t.width=e+r,t.height=n+r},Tt=t=>{const e=P("button"),n=e[A],o=s=>n.background=s?u:it;return W(n,p,60,0,L+10),et(n),n.color=u,n.fontSize=24+r,o(),tt(e,()=>{t(),k([392]),o(!0),Y(o,C)}),w(e)},H=(t=24,e=0,n="")=>{const o=P("div"),s=o[A];return W(s,p,t,0,e),s.textAlign=n,s.fontSize=t+r,s.color=u,w(o)},F=(t,e,n,o=0,s=0)=>{const a=P("i"),J=a[A];W(J,e,n),J.transformOrigin="bottom";const M={e:w(a),x:o,y:s,v:0,a:dt,w:e,h:n};return a[O]=t,j.push(M),M},nt=t=>{j[S](e=>!t.includes(e))[h](e=>y.removeChild(e.e)),j=t},ot=t=>{t.v+=t.a,t.y+=t.v*I,t.y<=0&&(t.v=t.y=0),t.x+=(t.m??0)*I,t.e[A].transform=`translate(${t.x}px, ${L-t.y-t.h}px) scaleY(${Math.sin(G/7)/20+1})`},kt=()=>{c.y||(c.v=25)},gt=()=>{const e=F(mt,50,50,p-50,T(300));T()<ft&&(e.a=0),e.m=-4-R*St,i.push(e)},Jt=t=>{t.y||(t.v=T(60),t.a=-t.v/20)},Et=()=>{if(!g||!d)return;const t=F(ut,40,10,50,c.y+40);t.m=5,t.a=0,l.push(t),d--,x(),d||Y(()=>{d=6,x()},2e3),k([784])},x=()=>{v[O]=`\u{1F431}${R} / `+("\u{1F41F}".repeat(d)||"RELOADING")},Q=t=>t[S](e=>e.x>0&&e.x<p),D=(t,e,n,o)=>Math.abs((t-n)*2+e-o)<e+o,st=(t,e)=>D(t.x,t.w,e.x,e.w)&&D(t.y,t.h,e.y,e.h),ht=(t,e)=>{let n=[];e[h](s=>{const a=t[S](J=>st(J,s));a.length&&(n=[...n,...a,s])});const o=s=>!n.includes(s);return[t[S](o),e[S](o)]},at=t=>{I=t?(t-N)/17:1,G+=I;const e=~~(G/pt),n=e!==B;if(B=e,g){b+=At,n&&T()<b&&(gt(),b=0),i[h](a=>T()<Ct&&Jt(a)),c.x*=.9,[c,...i,...l][h](ot),i=Q(i),l=Q(l);const o=i.length;[i,l]=ht(i,l);const s=o-i.length;s&&(R+=s,x(),k([523])),i.some(a=>st(a,c))&&ct(!0),nt([c,...i,...l])}N=t,requestAnimationFrame(at)},yt=()=>{i=[],l=[],nt([c]),R=0,d=6,g=!0,x(),Z(V,""),Z(K,"JUMP")},ct=t=>{g=!1,Z(K,"GO!"),Z(V,t?"GAMEOVER":"Neko Mezashi 4KB"),c.x=(p-c.w)/2,c.y=L/2,ot(c),t&&k([523,466,440,392,349])},It=()=>{const t=y[A];t.userSelect="none",et(t),t.fontFamily="arial",t.width=p+r,t.height=L+r,t.position="relative",t.touchAction="none",tt(y,Et),K=Tt(()=>(g?kt:yt)()),v=H();const e=v[A];e.color=lt,e.textShadow="0 0 0 "+u,V=H(36,310,"center"),c=F(rt,80,C)};It();ct();at(0);
