const m="px",f="style",k="filter",I="forEach",J="innerHTML",y="stroke",H=document,R=H.body,j=t=>H.createElement(t),P=t=>R.appendChild(t),E=(t=1)=>Math.random()*t,w=setTimeout,Q=(t,e)=>{t.addEventListener("pointerdown",n=>{n.cancelBubble=!0,e()})},p="#666",it="#fff",lt="#0000",C=100,u=(t,e=4,n="none",s=p)=>t.split("*").map(o=>`<path d="M${atob(o).split("").map(c=>c.charCodeAt(0)).map(c=>c<20?"MmLlHhVvCcSsQqTtAaZz".charAt(c):c-148).join(" ")}" ${y}=${s} ${y}-width=${e} fill=${n} ${y}-linecap=round ${y}-linejoin=round />`).join(""),O=(t,e,n)=>`<svg viewBox="0 0 ${e} ${n}">${t}</svg>`,rt=O(u("zb8LkJ2KmHuRcYgIn7aWw5jEC6WZrp0JkpqQn46kiImJp5OglpWen62eq5SzgrN+CtTGzb8S",0,"#ec6")+u("zqoJlpidqoapAYSeCZOblaabqQunjaeICsXEvsE=*xdkJmZmUnZGWAZWsCZWajpuPlA==*x/MJlZuPm4+U*wcIJm5Wcj5yPn5+nqauwEZmZlJSVlJkJjKptsFyf*r9EJkpiPno+fAbSGCZmTs5GcpQjI6LfpseIJkZGTjpaM*r98R4eGUlJSKjwmPko+nlqQLnY6ejADItRGVlZSUlJWUCZSUlJOUkwuUlZSVEgGbmAmTlI+VkZcAmsEImr2pw6bICY6VgZODjguaiJuICqrCpsgBtoUHlQGSkweVAZeKkpUBpLeXkQF/nAmZmJSdkZYBnYyboA==",2)+u("xp8JkoeOh4ySjYqHioebCKasnrSjvQuioqefCsW7xrAJlpOYkJiLlpmYl5iVC5GMi4sS*psgJk5WJn5KjC5+Ln4kJkpSNk4uQEg==*0dIRlZWUlZSVk5WVlJSUk5US",2,p),80,120),F="JjI+DmIyemJaenaCmjpGEjnePloyVg5B9l4SSf4WKkY+Pi42LC5CXjaIInayWwabKCY6ggLuPvpaUmZSckJadoJuikhHr65SUlLSWCNj33vfh8gmVl5aYmZifkqJ+oW2Ygo90hnAS",mt=O(u(`5as${F}`,0,"#998")+u(`4Ko${F}*o7wJkpeLmYmTAaqKi5iclwGcl52VALa/A5yXALG+A5OYAZKPk5g=`),C,C),N="JlJmIn3afiZR4knKPiZt8noOQjIiZh6WSoI2rjLaLopOyl7KdEw",ut=O(u(`8ac${N}==`,0,"#9bc")+u(`76U${N}GFkpiYAZSQkJg=`),C,40);let A;const g=([t,...e],n=C,s=.3)=>{if(!t)return;A||=new AudioContext;let o=A.createOscillator(),c=A.createGain(),l=c.gain;o.connect(c),c.connect(A.destination),o.frequency.setValueAtTime(t,A.currentTime),l.value=s,l.linearRampToValueAtTime(0,A.currentTime+n/1e3),o.start(),w(()=>{l.value=0,o.disconnect(),c.disconnect(),g(e)},n)},d=600,U=d,pt=20,dt=-1,At=.003,St=.01,Ct=.04,ft=.2;let Y,K,V,_=0,Z=1,q=0,z=-1,h=!1,v=0,b=1,S=6,G=[],i=[],r=[];const D=t=>{t.border="solid 2px"+p},X=t=>{t.userSelect="none"},x=(t,e)=>{t[J]=e},W=(t,e,n,s=0,o=0)=>{t.position="absolute",t.top=o+m,t.left=s+m,t.width=e+m,t.height=n+m},Tt=t=>{const e=j("button"),n=e[f],s=o=>n.background=o?p:it;return W(n,d,60,0,610),X(n),D(n),n.color=p,n.fontSize=24+m,s(),Q(e,()=>{t(),s(!0),w(s,C)}),P(e)},tt=(t=24,e=0,n="")=>{const s=j("div"),o=s[f];return W(o,d,t,0,e),X(o),o.textAlign=n,o.fontSize=t+m,o.color=p,P(s)},$=(t,e,n=0,s=0)=>{const o=j("i"),c=o[f];W(c,t,e);const l={e:P(o),x:n,y:s,v:0,a:dt,w:t,h:e};return G.push(l),l},a=$(80,C);a.e[J]=rt;const et=t=>{G[k](e=>!t.includes(e))[I](e=>R.removeChild(e.e)),G=t},nt=t=>{t.v+=t.a,t.y+=t.v*Z,t.y<=0&&(t.v=t.y=0),t.x+=(t.m??0)*Z,t.e[f].transform=`translate(${t.x}px, ${U-t.y-t.h}px)`},kt=()=>{a.y||(a.v=25,g([392]))},Et=()=>{const e=$(50,50,d-50,E(300));E()<ft&&(e.a=0),e.e[J]=mt,e.m=-4-v*Ct,i.push(e)},Jt=t=>{t.y||(t.v=E(60),t.a=-t.v/20)},gt=()=>{if(!h||!S)return;const t=$(40,10,50,a.y+40);t.e[J]=ut,t.m=5,t.a=0,r.push(t),S--,L(),S||w(()=>{S=6,L()},2e3),g([784])},M=t=>t[k](e=>e.x>0&&e.x<d),B=(t,e,n,s)=>Math.abs((t-n)*2+e-s)<e+s,ot=(t,e)=>B(t.x,t.w,e.x,e.w)&&B(t.y,t.h,e.y,e.h),ht=(t,e)=>{let n=[];e[I](o=>{const c=t[k](l=>ot(l,o));c.length&&(n=[...n,...c,o])});const s=o=>!n.includes(o);return[t[k](s),e[k](s)]},st=t=>{Z=t?(t-_)/17:1,q+=Z;const e=~~(q/pt),n=e!==z;if(z=e,h){b+=At,n&&E()<b&&(Et(),b=0),i[I](c=>E()<St&&Jt(c)),a.x*=.9,[a,...i,...r][I](nt),i=M(i),r=M(r);const s=i.length;[i,r]=ht(i,r);const o=s-i.length;o&&(v+=o,L(),g([523])),i.some(c=>ot(c,a))&&ct(!0),et([a,...i,...r])}_=t,requestAnimationFrame(st)},L=()=>{K[J]=`\u{1F431}${v} / `+("\u{1F41F}".repeat(S)||"RELOADING")},yt=()=>{i=[],r=[],et([a]),v=0,S=6,h=!0,L(),x(V,""),x(Y,"JUMP")},ct=t=>{h=!1,x(Y,"GO!"),x(V,t?"GAMEOVER":"Neko Mezashi 4KB"),a.x=(d-a.w)/2,a.y=U/2,nt(a),t&&g([523,466,440,392,349])},T=R[f];D(T);T.fontFamily="arial";T.width=d+m;T.height=U+m;T.position="relative";T.touchAction="none";Q(R,gt);Y=Tt(()=>(h?kt:yt)());K=tt();const at=K[f];at.color=lt;at.textShadow="0 0 0 "+p;V=tt(36,310,"center");ct();st(0);
