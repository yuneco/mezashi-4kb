const r="px",d="style",S="filter",y="forEach",j="innerHTML",E="stroke",D=document,R=D.body,O=t=>D.createElement(t),P=t=>R.appendChild(t),k=(t=1)=>Math.random()*t,w=setTimeout,X=(t,e)=>{t.onpointerdown=n=>{n.cancelBubble=!0,e()}},u="#666",at="#fff",it="#0000",C=100,m=(t,e=4,n="none",o=u)=>t.split("*").map(s=>`<path d="M${atob(s).split("").map(c=>c.charCodeAt(0)).map(c=>c<20?"MmLlHhVvCcSsQqTtAaZz"[c]:c-148).join(" ")}" ${E}=${o} ${E}-width=${e} fill=${n} ${E}-linecap=round ${E}-linejoin=round />`).join(""),Y=(t,e,n)=>`<svg viewBox="0 0 ${e} ${n}">${t}</svg>`,lt=Y(m("zb8LkJ2KmHuRcYgIn7aWw5jEC6WZrp0JkpqQn46kiImJp5OglpWen62eq5SzgrN+CtTGzb8S",0,"#ec6")+m("zqoJlpidqoapAYSeCZOblaabqQunjaeICsXEvsE*xdkJmZmUnZGWAZWsCZWajpuPlA*x/MJlZuPm4+U*wcIJm5Wcj5yPn5+nqauwEZmZlJSVlJkJjKptsFyf*r9EJkpiPno+fAbSGCZmTs5GcpQjI6LfpseIJkZGTjpaM*r98R4eGUlJSKjwmPko+nlqQLnY6ejADItRGVlZSUlJWUCZSUlJOUkwuUlZSVEgGbmAmTlI+VkZcAmsEImr2pw6bICY6VgZODjguaiJuICqrCpsgBtoUHlQGSkweVAZeKkpUBpLeXkQF/nAmZmJSdkZYBnYyboA",2)+m("xp8JkoeOh4ySjYqHioebCKasnrSjvQuioqefCsW7xrAJlpOYkJiLlpmYl5iVC5GMi4sS*psgJk5WJn5KjC5+Ln4kJkpSNk4uQEg*0dIRlZWUlZSVk5WVlJSUk5US",2,u),80,120),M="JjI+DmIyemJaenaCmjpGEjnePloyVg5B9l4SSf4WKkY+Pi42LC5CXjaIInayWwabKCY6ggLuPvpaUmZSckJadoJuikhHr65SUlLSWCNj33vfh8gmVl5aYmZifkqJ+oW2Ygo90hnAS",rt=Y(m(`5as${M}`,0,"#998")+m(`4Ko${M}*o7wJkpeLmYmTAaqKi5iclwGcl52VALa/A5yXALG+A5OYAZKPk5g`),C,C),_="JlJmIn3afiZR4knKPiZt8noOQjIiZh6WSoI2rjLaLopOyl7KdEw",mt=Y(m(`8ac${_}`,0,"#9bc")+m(`76U${_}GFkpiYAZSQkJg`),C,40),f=new AudioContext,U=f.createGain(),q=U.gain;U.connect(f.destination);const T=([t,...e])=>{if(!t)return;const n=f.createOscillator();n.connect(U),n.frequency.setValueAtTime(t,f.currentTime),q.value=.3,q.linearRampToValueAtTime(0,f.currentTime+.09),n.start(),w(()=>{n.stop(),T(e)},C)},p=600,x=p,ut=20,pt=-1,At=.003,dt=.01,Ct=.04,St=.2;let $,b,K,z=0,h=1,v=0,N=-1,g=!1,I=0,L=1,A=6,G=[],i=[],l=[],a;const tt=t=>{t.border="solid 2px"+u},Z=(t,e)=>{t[j]=e},V=(t,e,n,o=0,s=0)=>{t.position="absolute",t.top=s+r,t.left=o+r,t.width=e+r,t.height=n+r},ft=t=>{const e=O("button"),n=e[d],o=s=>n.background=s?u:at;return V(n,p,60,0,x+10),tt(n),n.color=u,n.fontSize=24+r,o(),X(e,()=>{t(),T([392]),o(!0),w(o,C)}),P(e)},B=(t=24,e=0,n="")=>{const o=O("div"),s=o[d];return V(s,p,t,0,e),s.textAlign=n,s.fontSize=t+r,s.color=u,P(o)},W=(t,e,n,o=0,s=0)=>{const c=O("i"),J=c[d];V(J,e,n),J.transformOrigin="bottom";const F={e:P(c),x:o,y:s,v:0,a:pt,w:e,h:n};return c[j]=t,G.push(F),F},et=t=>{G[S](e=>!t.includes(e))[y](e=>e.e.remove()),G=t},nt=t=>{t.v+=t.a,t.y+=t.v*h,t.y<=0&&(t.v=t.y=0),t.x+=(t.m??0)*h,t.e[d].transform=`translate(${t.x}px, ${x-t.y-t.h}px) scaleY(${Math.sin(v/7)/20+1})`},kt=()=>{a.y||(a.v=25)},Tt=()=>{const e=W(rt,50,50,p-50,k(300));k()<St&&(e.a=0),e.m=-4-I*Ct,i.push(e)},gt=t=>{t.y||(t.v=k(60),t.a=-t.v/20)},Jt=()=>{if(!g||!A)return;const t=W(mt,40,10,50,a.y+40);t.m=5,t.a=0,l.push(t),A--,A||w(()=>{A=6},2e3),T([784])},H=t=>t[S](e=>e.x>0&&e.x<p),Q=(t,e,n,o)=>Math.abs((t-n)*2+e-o)<e+o,ot=(t,e)=>Q(t.x,t.w,e.x,e.w)&&Q(t.y,t.h,e.y,e.h),Et=(t,e)=>{let n=[];e[y](s=>{const c=t[S](J=>ot(J,s));c.length&&(n=[...n,...c,s])});const o=s=>!n.includes(s);return[t[S](o),e[S](o)]},st=t=>{h=(t-z)/17,v+=h;const e=~~(v/ut),n=e!==N;if(N=e,g){L+=At,n&&k()<L&&(Tt(),L=0),i[y](c=>k()<dt&&gt(c)),a.x*=.9,[a,...i,...l][y](nt),i=H(i),l=H(l);const o=i.length;[i,l]=Et(i,l);const s=o-i.length;s&&(I+=s,T([523])),i.some(c=>ot(c,a))&&ct(!0),et([a,...i,...l])}b[j]=`\u{1F431}${I} / `+("\u{1F41F}".repeat(A)||"RELOADING"),z=t,requestAnimationFrame(st)},yt=()=>{i=[],l=[],et([a]),I=0,A=6,g=!0,Z(K,""),Z($,"JUMP")},ct=t=>{g=!1,Z($,"GO!"),Z(K,t?"GAMEOVER":"Neko Mezashi 4KB"),a.x=(p-a.w)/2,a.y=x/2,nt(a),t&&T([523,466,440,392,349])},ht=()=>{const t=R[d];t.userSelect="none",tt(t),t.fontFamily="arial",t.width=p+r,t.height=x+r,t.position="relative",t.touchAction="none",X(R,Jt),$=ft(()=>(g?kt:yt)()),b=B();const e=b[d];e.color=it,e.textShadow="0 0 0 "+u,K=B(36,310,"center"),a=W(lt,80,C)};ht();ct();st(0);