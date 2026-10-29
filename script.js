(function(){
var P=[
["Skeleton Desktop System","Store management and cashier system: sales, purchase and return invoices, stocktaking, barcode and receipt printing, shifts, multi-store, permissions and reports. Arabic RTL interface.",["Java","JavaFX","SQL Server"],"Ready-made system","#6a2cff","#00d4ff",[],"skeleton-desktop"],
["Skeleton Mobile App","Companion app for store owners to monitor sales, inventory, profit, expenses and reports across branches. Pairs with the desktop system by QR code and exports PDF reports.",["Flutter","Bloc/Cubit","Dio"],"Mobile","#00d4ff","#3a2cff",[],"skeleton-mobile"],
["Lady Driver","Women-only ride-hailing app with verified female drivers, live trip tracking and real-time requests. 10,000+ downloads on Google Play.",["Flutter","Firebase","Google Maps"],"Live on stores","#ff2c9a","#6a2cff",[["Google Play","https://play.google.com/store/apps/details?id=com.ladydriver.eg"],["App Store","https://apps.apple.com/eg/app/lady-driver/id6799881793"]],"lady-driver"],
["Sallahli","Home services app where AI analyzes the problem, estimates the cost and connects users with suitable technicians in real time.",["Flutter","AI","WebSocket"],"AI","#ff8a2c","#ff2c9a",[["GitHub","https://github.com/abdelrhamanadel4-Flutter/salla7ly_01"]],"sallahli"],
["LingoSign","AI-powered app that translates sign language to text in real time, with video calling for the deaf and hard-of-hearing community.",["Flutter","Firebase","ZegoCloud"],"AI","#00e0a4","#00d4ff",[["GitHub","https://github.com/nhahub/NHA-226"]],"lingosign"],
["EveTick","Event booking system with organizer and attendee apps: seat selection, QR e-tickets, online payments, Arabic and English.",["Flutter","Paymob","Google Maps"],"Mobile","#6a2cff","#ff2c9a",[["GitHub","https://github.com/abdoelsayed294/EveTick"]],"evetick"],
["Plus90","Location-based platform that shows nearby discounts and time-limited deals from local businesses. Full UI designed in Figma.",["Flutter","Firebase","Geolocation"],"Mobile + Design","#ff2c9a","#ff8a2c",[["GitHub","https://github.com/abdelrhamanadel4-Flutter/plus90_application"],["Figma","https://www.figma.com/design/EKtJyJ4Ss6Y6yfwB99dRSx/3rd?node-id=0-1&p=f&t=Yq63X1LfRHlwawhw-0"]],"plus90"],
["Evently","App to discover, create and manage events, with Firebase backend and multi-language support.",["Flutter","Firebase","Localization"],"Mobile","#3a2cff","#00d4ff",[["GitHub","https://github.com/abdelrhamanadel4-Flutter/EventlyApp"]],"evently"],
["Movies App","Collaborative app for browsing, searching and exploring movies with a polished, modern interface.",["Flutter","REST API"],"Mobile","#ff8a2c","#6a2cff",[["GitHub","https://github.com/Moomen0/movies_app"]],"movies-app"],
["News App","News reader that pulls the latest headlines from multiple sources in a clean interface.",["Flutter","REST API","HTTP"],"Mobile","#00d4ff","#00e0a4",[["GitHub","https://github.com/abdelrhamanadel4-Flutter/NewsApp"]],"news-app"],
["Islamil","Islamic app with religious content and features in a friendly, easy interface.",["Flutter","Dart"],"Mobile","#00e0a4","#6a2cff",[["GitHub","https://github.com/abdelrhamanadel4-Flutter/islamilproject"]],"islamil"]
];
function X(s){return typeof IMG2!=='undefined'&&IMG2[s]?IMG2[s]:s}
var DI={evetick:'assets/design/evetick.jpg',docnow:'assets/design/docnow.jpg',lingosign:'assets/design/lingosign.jpg'};
Object.keys(DI).forEach(function(k){DI[k]=X(DI[k])});
var pj=document.getElementById('pj');
P.forEach(function(p,i){
 var c=document.createElement('div');c.className='card rv';
 c.innerHTML='<div class="art" style="--c1:'+p[4]+';--c2:'+p[5]+'"><u>'+p[3]+'</u><img alt="'+p[0]+'" loading="lazy" src="'+X('assets/projects/'+p[7]+'.jpg')+'"><em>0'+(i+1)+'</em></div><div class="cb"><h3>'+p[0]+'</h3><p>'+p[1]+'</p><div class="chips">'+p[2].map(function(t){return'<span>'+t+'</span>'}).join('')+'</div><div class="lk">'+p[6].map(function(l){return'<a href="'+l[1]+'" target="_blank" rel="noopener">'+l[0]+' ↗</a>'}).join('')+'</div></div>';
 pj.appendChild(c);
 var im=c.querySelector('img');im.onerror=function(){im.remove()};
 c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+x*8+'deg) rotateX('+-y*8+'deg) translateY(-6px)'});
 c.addEventListener('mouseleave',function(){c.style.transform=''});
});
var D=[
["EveTick – Design Case Study","Complete UI/UX design for a dual-platform event booking system: competitor research, user flows and high-fidelity prototypes for the organizer and attendee apps.",["Figma","Prototyping","User Flows","Competitor Research"],"evetick","evetick"],
["DocNow – Clinic Booking","A mobile app that makes booking clinic appointments in Egypt fast and transparent. User research, personas, information architecture, wireframes, a style guide and usability testing.",["Figma","User Research","Design System","Usability Testing"],"docnow","docnow"],
["LingoSign – Sign Language App","A mobile app that helps deaf and mute people communicate freely. User survey, user flow, onboarding, translation and friends screens, and a Figma style guide.",["Figma","User Survey","User Flow","Design System"],"lingosign","lingosign"]
];
var dz=document.getElementById('dz');
D.forEach(function(p){var c=document.createElement('div');c.className='card rv';
 c.innerHTML='<div class="art" style="--c1:#6a2cff;--c2:#00d4ff"><u>Design</u><img alt="'+p[0]+'" src="'+DI[p[4]]+'"></div><div class="cb"><h3>'+p[0]+'</h3><p>'+p[1]+'</p><div class="chips">'+p[2].map(function(t){return'<span>'+t+'</span>'}).join('')+'</div><div class="lk"><button class="btn sm" data-k="'+p[3]+'">Case study</button><a href="'+CS[p[3]].prototypeLink+'" target="_blank" rel="noopener">Figma ↗</a></div></div>';
 dz.appendChild(c);
 c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+x*8+'deg) rotateX('+-y*8+'deg) translateY(-6px)'});
 c.addEventListener('mouseleave',function(){c.style.transform=''});
 c.querySelector('button').onclick=function(){openCS(p[3])};
});
function E(s){return String(s==null?'':s).replace(/[&<>"]/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]})}
function IM(s,c){return s?'<img'+(c?' class="'+c+'"':'')+' loading="lazy" alt="" src="'+X(s)+'">':''}
function FG(f){return'<figure class="fg">'+IM(f.src)+(f.caption?'<figcaption>'+E(f.caption)+'</figcaption>':'')+'</figure>'}
function openCS(k){var d=CS[k],h='<h2>'+E(d.title)+'</h2><p>'+E(d.subtitle)+'</p><div class="chips">'+(d.tools||[]).map(function(t){return'<span>'+E(t)+'</span>'}).join('')+'</div><a class="btn" href="'+d.prototypeLink+'" target="_blank" rel="noopener">'+E(d.prototypeLabel||'View prototype')+' ↗</a>'+IM(d.heroImage,'hero');
 h+='<div class="ov">'+(d.overview||[]).map(function(o){return'<div><h4>'+E(o.title)+'</h4><p>'+E(o.description)+'</p></div>'}).join('')+'</div>';
 if(d.gallery&&d.gallery.length)h+='<h3>Key Screens</h3>'+d.gallery.map(function(g){return'<div class="gl">'+IM(g.image)+'<p>'+E(g.caption)+'</p></div>'}).join('');
 (d.screenGroups||[]).forEach(function(g){h+='<h3>'+E(g.title)+'</h3><p class="pp">'+E(g.description)+'</p><div class="row">'+g.screens.map(function(s){return'<figure>'+IM(s.src)+'<figcaption>'+E(s.caption)+'</figcaption></figure>'}).join('')+'</div>'});
 (d.process||[]).forEach(function(p){h+='<h3>'+E(p.title)+'</h3><p class="pp">'+E(p.description)+'</p>'+(p.points?'<ul>'+p.points.map(function(x){return'<li>'+E(x)+'</li>'}).join('')+'</ul>':'')+(p.image?FG({src:p.image}):'')+(p.figures||[]).map(FG).join('')});
 if(d.colors&&d.colors.length)h+='<h3>Colors</h3><div class="sw">'+d.colors.map(function(c){return'<span><i style="background:'+E(c.hex)+'"></i>'+E(c.name)+' '+E(c.hex)+'</span>'}).join('')+'</div>';
 (d.typography||[]).forEach(function(t){h+='<h3>Typography</h3><p class="pp"><b>'+E(t.font||t.name)+'</b>. '+E(t.usage)+'</p>'});
 if(d.takeaways&&d.takeaways.length)h+='<h3>Key Takeaways</h3><div class="tk">'+d.takeaways.map(function(t){return'<div><h4>'+E(t.title)+'</h4><p>'+E(t.description)+'</p></div>'}).join('')+'</div>';
 var o=document.getElementById('cs');document.getElementById('csb').innerHTML=h;o.hidden=false;o.scrollTop=0;document.body.style.overflow='hidden'}
function closeCS(){document.getElementById('cs').hidden=true;document.body.style.overflow=''}
document.getElementById('csx').onclick=closeCS;addEventListener('keydown',function(e){if(e.key==='Escape')closeCS()});
var words=['Flutter','POS Systems','Web Apps','UI/UX','Firebase','Mobile Apps','Cloud','Dashboards'],h='';
for(var k=0;k<2;k++)words.forEach(function(w){h+=w+'<b>✦</b>'});
document.getElementById('mq').innerHTML=h+h;
var ht=document.getElementById('ht'),d=0;
function split(n){Array.from(n.childNodes).forEach(function(x){if(x.nodeType===3){var f=document.createDocumentFragment();x.textContent.split(' ').forEach(function(w,j,a){if(!w)return;var s=document.createElement('span');s.className='word';s.textContent=w;s.style.animationDelay=(d++*.12)+'s';f.appendChild(s);if(j<a.length-1)f.appendChild(document.createTextNode(' '))});x.replaceWith(f)}else if(x.nodeType===1&&x.tagName!=='BR'){split(x)}})}
split(ht);
document.querySelectorAll('#ht .grad span').forEach(function(s){s.classList.add('grad')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');e.target.querySelectorAll('[data-n]').forEach(count);io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%3)*.08+'s';io.observe(el)});
function count(el){var n=+el.dataset.n,s=el.dataset.s||'+',t=0;(function f(){t+=Math.max(1,n/40);if(t>=n){el.textContent=n+s;return}el.textContent=Math.floor(t);requestAnimationFrame(f)})()}
var bigs=document.querySelectorAll('.big');
addEventListener('scroll',function(){var vh=innerHeight;bigs.forEach(function(b){var r=b.getBoundingClientRect();b.style.transform='translateX('+((r.top-vh/2)*(+b.dataset.p)*1.2)+'px)'})},{passive:true});
var cf=document.getElementById('cf');
cf.addEventListener('submit',function(e){e.preventDefault();
 var m=document.getElementById('fmsg'),b=document.getElementById('fsend'),ok=true;
 cf.querySelectorAll('[required]').forEach(function(f){var v=f.value.trim(),bad=!v||(f.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));f.classList.toggle('invalid',bad);if(bad)ok=false});
 if(!ok){m.className='fmsg err';m.textContent='Please fill in your name, a valid email and a message.';return}
 b.disabled=true;b.textContent='Sending...';m.className='fmsg';m.textContent='';
 var fd=new FormData(cf);
 fetch('https://formsubmit.co/ajax/warsha.software@gmail.com',{method:'POST',headers:{'Accept':'application/json'},body:fd})
 .then(function(r){return r.json()}).then(function(j){
  if(j.success===true||j.success==='true'){cf.reset();m.className='fmsg ok';m.textContent='Thank you! Your message was sent. We will reply by email soon.'}
  else throw new Error(j.message||'failed')})
 .catch(function(){m.className='fmsg err';m.innerHTML='Could not send right now. Please email us at <a href="mailto:warsha.software@gmail.com">warsha.software@gmail.com</a>.'})
 .finally(function(){b.disabled=false;b.textContent='Send message'})});
cf.addEventListener('input',function(e){e.target.classList.remove('invalid')});
var g=document.getElementById('glow');
addEventListener('pointermove',function(e){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
})();
