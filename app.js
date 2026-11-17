const M='media/';
const DECKS={
 s1:{id:'s1',num:1,free:true,title:'Bear Door · Sentence 1',
  zh:'一对夫妻怕熊破坏院子里的围栏，安装了一个熊门。',
  py:'yí duì fūqī pà xióng pòhuài yuànzi lǐ de wéilán, ānzhuāng le yí gè xióng mén.',
  en:'A couple were afraid a bear would damage the fence in their yard, so they installed a bear door.',
  full:'bd1_x_full.mp3', cover:['bd1_xiongmen','bd1_yidui','bd1_weilan'],
  notes:36,cards:78,
  inside:[['words',14],['phrases',7],['writing',5],['listening',9],['piano',1]],
  file:'files/BearDoor_S1_free_sample.apkg',size:'2.6 MB', write:'熊', card:5,
  words:[['一对','yí duì','a pair; a couple','bd1_yidui','bd1_yidui_fixpjdfw'],['夫妻','fūqī','married couple','bd1_fuqi','bd1_fuqi_fixpjdfw'],['怕','pà','to be afraid','bd1_pa','bd1_pa_fixpjdfw'],['熊','xióng','bear','bd1_xiong','bd1_xiong_fixpjdfw'],['破坏','pòhuài','to damage','bd1_pohuai','bd1_pohuai_fixpjdfw'],['院子','yuànzi','yard','bd1_yuanzi','bd1_yuanzi_fixpjdfw'],['里','lǐ','in; inside','bd1_li','bd1_li_fixpjdfw'],['的','de','possessive ’s','bd1_de','bd1_de_fixpjdfw'],['围栏','wéilán','fence','bd1_weilan','bd1_weilan_fixpjdfw'],['安装','ānzhuāng','to install','bd1_anzhuang','bd1_anzhuang_fixpjdfw'],['了','le','(done)','gen_le_mw2od6bm','gen_le_mw2od6bm_fixpjdfw_fixr9xm7'],['一个','yí gè','one; a','bd1_yige','bd1_yige_fixpjdfw'],['门','mén','door; gate','bd1_men_v10','bd1_men_fixpjdfw'],['熊门','xióng mén','bear door','bd1_xiongmen','bd1_xiongmen_fixpjdfw']],
  piano:[0,1,2,3,4,5,6,7,8,9,10,11,13], punct:{8:'，'}},
 s2:{id:'s2',num:2,free:false,title:'Bear Door · Sentence 2',
  zh:'原本担心没有用，没想到这只熊非常的聪明。',
  py:'yuánběn dānxīn méiyǒu yòng, méi xiǎngdào zhè zhī xióng fēicháng de cōngmíng.',
  en:'At first, they were worried it would not work, but they did not expect the bear to be very smart.',
  full:'bd2_x_full.mp3', cover:['bd2_congming','bd2_yuanben','bd2_feichang'],
  notes:26,cards:53,
  inside:[['words',9],['phrases',6],['writing',3],['listening',7],['piano',1]],
  write:'用', card:7,
  words:[['原本','yuánběn','originally; at first','bd2_yuanben','bd2_yuanben_fixu68ma'],['担心','dānxīn','to worry','bd2_danxin','bd2_danxin'],['没有','méiyǒu','not have','bd2_meiyou','bd2_meiyou_fixu68ma'],['用','yòng','to use; use','bd2_yong','bd2_yong_fixu68ma'],['没想到','méi xiǎngdào','didn’t expect','bd2_meixiangdao','bd2_meixiangdao_fixu68ma'],['这','zhè','this','bd2_zhe','bd2_zhe_fixu68ma'],['只','zhī','(measure word for animals)','bd2_zhi','bd2_zhi_fixu68ma'],['熊','xióng','bear','bd1_xiong','bd1_xiong_fixpjdfw'],['非常','fēicháng','very','bd2_feichang','bd2_feichang_fixu68ma'],['的','de','(particle)','bd1_de','bd1_de_fixpjdfw'],['聪明','cōngmíng','smart; clever','bd2_congming','bd2_congming_fixu68ma']],
  piano:[0,1,2,3,4,5,6,7,8,9,10], punct:{3:'，'}}
};
const T={
en:{draftbar:'Draft prototype · Черновик: оплата пока не подключена',
 heroT:'Learn Chinese one real sentence at a time',heroS:'Anki decks built from a short story told by Li Pei Ru. Pictures, native audio, writing and tone practice in every deck.',
 c_audio:'🎧 Native audio',c_pic:'🖼 Pictures',c_tone:'🎤 Tone listener',c_write:'✍ Writing',c_piano:'🎹 Piano tiles',
 decks:'Decks',story:'Story: Bear Door',sentence:'Sentence',free:'Free',tbd:'Price: TBD',tbdEx:'example 4.99 €',level:'Beginner',
 cardsN:n=>n+' cards',wordsN:n=>n+' words',soon:'Coming soon',soonT:'Bear Door · Sentence 3',
 back:'All decks',hear:'Play sentence',features:'What makes it work',
 f_audio:'Native voice',f_audioS:'Phrases and sentences by Li Pei Ru',f_pic:'A picture per word',f_picS:'Remember by image',f_tone:'Tone listener',f_toneS:'Say it, see your tones vs native',f_write:'Writing',f_writeS:'Trace each character',f_piano:'Piano tiles',f_pianoS:'Tap the sentence word by word',
 tryIt:'Try it',t_piano:'🎹 Piano',t_card:'🖼 Word card',t_write:'✍ Writing',
 h_piano:'Tap a tile: it flips and plays the word.',h_card:'Look at the picture, say the word, then tap to check.',h_write:'Trace the character. It opens only when you switch on and press Show.',
 tapCheck:'Tap to check',next:'Next word',playAll:'▶ Play all',
 reveal:'Show answer',show:'Show',again:'Again',
 wordsT:'Words in this deck',wordsH:'Tap a word to hear it.',inside:'What’s inside',
 i_words:'Word cards',i_phrases:'Phrase and sentence cards',i_writing:'Writing cards',i_listening:'Listening cards',i_piano:'Piano sentence card',total:'Total',
 how:'How it works',how1:'Get the deck file (.apkg).',how2:'Open it in Anki (iPhone, Android, Mac, Windows).',how3:'Study 10 to 15 minutes a day. Anki shows each card at the right time.',
 faq:'Questions',q1:'Do I need an account?',a1:'No. You just get the file.',q2:'Which app do I need?',a2:'Anki: AnkiMobile on iPhone, AnkiDroid on Android, Anki on computer.',q3:'Is it a subscription?',a3:'No. Pay once, keep the deck.',
 getFree:'Download free',buy:'Get deck',
 sh_freeT:'Free deck',sh_free1:'Install Anki if you do not have it yet.',sh_free2:'Download the deck below.',sh_free3:'Open the file. Anki adds the deck.',dl:'⬇ Download .apkg',
 sh_payT:'How you will get it',mockPay:'Черновик: оплата пока не подключена',payCard:'💳 Card',payApple:' Apple Pay',payTg:'✈ Telegram',
 sh_pay1:'Pay once. No account, no subscription.',sh_pay2:'Download starts right away, and a link comes to your email.',sh_pay3:'Open the file in Anki and start.',ok:'Got it',
 foot:'Draft for review. Prices and payment are placeholders.'},
ru:{draftbar:'Черновик прототипа · оплата пока не подключена',
 heroT:'Китайский по одной настоящей фразе',heroS:'Колоды Anki по короткой истории, которую рассказывает Li Pei Ru. Картинки, живой голос, прописи и тренировка тонов в каждой колоде.',
 c_audio:'🎧 Живой голос',c_pic:'🖼 Картинки',c_tone:'🎤 Тоны',c_write:'✍ Прописи',c_piano:'🎹 Пианино',
 decks:'Колоды',story:'История: Bear Door',sentence:'Фраза',free:'Бесплатно',tbd:'Цена: TBD',tbdEx:'например 4,99 €',level:'Начальный',
 cardsN:n=>n+' карточек',wordsN:n=>n+' слов',soon:'Скоро',soonT:'Bear Door · Фраза 3',
 back:'Все колоды',hear:'Слушать фразу',features:'Что внутри работает',
 f_audio:'Живой голос',f_audioS:'Фразы и предложения читает Li Pei Ru',f_pic:'Картинка к слову',f_picS:'Запоминаешь образом',f_tone:'Проверка тонов',f_toneS:'Говоришь и видишь свои тоны рядом с носителем',f_write:'Прописи',f_writeS:'Обводишь каждый иероглиф',f_piano:'Пианино',f_pianoS:'Фраза по словам, нажатием',
 tryIt:'Попробуй',t_piano:'🎹 Пианино',t_card:'🖼 Карточка',t_write:'✍ Прописи',
 h_piano:'Нажми плитку: она перевернётся и скажет слово.',h_card:'Посмотри на картинку, назови слово и нажми, чтобы проверить.',h_write:'Обведи иероглиф. Он откроется только тумблером и кнопкой «Показать».',
 tapCheck:'Проверить',next:'Следующее слово',playAll:'▶ Всё подряд',
 reveal:'Показать ответ',show:'Показать',again:'Ещё раз',
 wordsT:'Слова в колоде',wordsH:'Нажми на слово, чтобы услышать.',inside:'Что в колоде',
 i_words:'Карточки слов',i_phrases:'Словосочетания и фразы',i_writing:'Прописи',i_listening:'На слух',i_piano:'Фраза-пианино',total:'Всего',
 how:'Как это работает',how1:'Получаешь файл колоды (.apkg).',how2:'Открываешь в Anki (iPhone, Android, Mac, Windows).',how3:'Занимаешься 10–15 минут в день. Anki сам покажет карточку вовремя.',
 faq:'Вопросы',q1:'Нужна регистрация?',a1:'Нет. Ты просто получаешь файл.',q2:'Какое приложение нужно?',a2:'Anki: AnkiMobile на iPhone, AnkiDroid на Android, Anki на компьютере.',q3:'Это подписка?',a3:'Нет. Платишь один раз, колода остаётся у тебя.',
 getFree:'Скачать бесплатно',buy:'Получить колоду',
 sh_freeT:'Бесплатная колода',sh_free1:'Установи Anki, если его ещё нет.',sh_free2:'Скачай колоду кнопкой ниже.',sh_free3:'Открой файл, и Anki добавит колоду.',dl:'⬇ Скачать .apkg',
 sh_payT:'Как ты её получишь',mockPay:'Черновик: оплата пока не подключена',payCard:'💳 Карта',payApple:' Apple Pay',payTg:'✈ Telegram',
 sh_pay1:'Платишь один раз. Без регистрации и подписки.',sh_pay2:'Скачивание начнётся сразу, ссылка придёт и на почту.',sh_pay3:'Открываешь файл в Anki и начинаешь.',ok:'Понятно',
 foot:'Черновик для просмотра. Цены и оплата пока условные.'}};
let L=localStorage.getItem('lang')||'en';
const t=(k,...a)=>{const v=T[L][k];return typeof v==='function'?v(...a):v};
const $=s=>document.querySelector(s);
const player=$('#player');let playingBtn=null;
function play(file,btn){player.src=M+file+(file.endsWith('.mp3')?'':'.mp3');player.currentTime=0;player.play().catch(()=>{});
 if(playingBtn)playingBtn.classList.remove('on');playingBtn=btn||null;if(btn)btn.classList.add('on');}
player.onended=()=>{if(playingBtn)playingBtn.classList.remove('on');playingBtn=null};
const cover=d=>`<div class="cover">${d.cover.map(c=>`<img src="${M}${c}.jpg" alt="">`).join('')}<span class="badge ${d.free?'free':''}">${d.free?t('free'):t('sentence')+' '+d.num}</span></div>`;
const priceHtml=d=>d.free?`<div class="price free">${t('free')}</div>`:`<div class="price">${t('tbd')}<small>${t('tbdEx')}</small></div>`;
function catalog(){
 return `<section class="hero"><h1>${t('heroT')}</h1><p>${t('heroS')}</p>
 <div class="chips">${['c_audio','c_pic','c_tone','c_write','c_piano'].map(k=>`<span class="chip">${t(k)}</span>`).join('')}</div></section>
 <h2>${t('story')}</h2><div class="grid">${Object.values(DECKS).map(d=>`
 <a class="card" href="#/deck/${d.id}">${cover(d)}<div class="cb"><div class="k">${t('sentence')} ${d.num} · ${t('level')}</div><h3>${d.title}</h3>
 <div class="zh">${d.zh}</div><div class="meta"><span>${t('wordsN',d.words.length)}</span><span>${t('cardsN',d.cards)}</span><span>🎧 ✍ 🎹</span></div>
 <div class="row">${priceHtml(d)}<span class="btn ${d.free?'':'ghost'}">${d.free?t('getFree'):t('buy')}</span></div></div></a>`).join('')}
 <div class="card soon"><div class="cover">🐻</div><div class="cb"><div class="k">${t('soon')}</div><h3>${t('soonT')}</h3></div></div></div>
 <p class="foot">${t('foot')}</p>`;
}
function deck(d){
 const ins=d.inside.map(([k,n])=>`<li><span>${t('i_'+k)}</span><b>${n}</b></li>`).join('')+`<li><span><b>${t('total')}</b></span><b>${t('cardsN',d.cards)}</b></li>`;
 return `<a class="back" href="#/">← ${t('back')}</a>
 <div class="dhero">${cover(d)}</div>
 <div class="dh"><div class="k" style="color:var(--mute);font-size:14px">${t('story')} · ${t('level')}</div><h1>${d.title}</h1></div>
 <div class="sent"><button class="play" id="pfull" aria-label="${t('hear')}">▶</button><div><div class="zh">${d.zh}</div><div class="py">${d.py}</div><div class="en">${d.en}</div></div></div>
 <h2>${t('tryIt')}</h2>
 <div class="tabs"><button class="tab on" data-tab="piano">${t('t_piano')}</button><button class="tab" data-tab="card">${t('t_card')}</button><button class="tab" data-tab="write">${t('t_write')}</button></div>
 <div class="demo" id="demo"></div>
 <h2>${t('features')}</h2><div class="feat">${[['🎧','audio'],['🖼','pic'],['🎤','tone'],['✍','write'],['🎹','piano']].map(([i,k])=>`<div class="f"><div class="i">${i}</div><b>${t('f_'+k)}</b><span>${t('f_'+k+'S')}</span></div>`).join('')}</div>
 <h2>${t('wordsT')}</h2><p class="hint">${t('wordsH')}</p>
 <div class="words">${d.words.map((w,i)=>`<button class="w" data-a="${w[4]}"><img src="${M}${w[3]}.jpg" alt="" loading="lazy"><div class="h">${w[0]}</div><div class="p">${w[1]}</div><div class="e">${w[2]}</div></button>`).join('')}</div>
 <h2>${t('inside')}</h2><ul class="inside">${ins}</ul>
 <h2>${t('how')}</h2><ol class="steps"><li>${t('how1')}</li><li>${t('how2')}</li><li>${t('how3')}</li></ol>
 <h2>${t('faq')}</h2><div class="faq">${[1,2,3].map(i=>`<details><summary>${t('q'+i)}</summary><p>${t('a'+i)}</p></details>`).join('')}</div>
 <p class="foot">${t('foot')}</p>
 <div class="buybar"><div class="in">${priceHtml(d)}<button class="btn" id="cta">${d.free?t('getFree'):t('buy')}</button></div></div>`;
}
let writer=null;
function demo(d,tab){
 document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.dataset.tab===tab));
 const el=$('#demo');writer=null;
 if(tab==='piano'){
  el.innerHTML=`<p class="hint">${t('h_piano')}</p><div class="piano">${d.piano.map(i=>{const w=d.words[i];return `<button type="button" class="tile" data-a="${w[4]}"><img src="${M}${w[3]}.jpg" alt=""><div class="b"><div class="h">${w[0]}</div><div class="p">${w[1]}</div></div></button>`}).join('')}</div>
  <div class="ctrl" style="margin-top:14px"><button class="btn ghost" id="pall">${t('playAll')}</button></div>`;
  let last=0;
  el.querySelectorAll('.tile').forEach(b=>b.onclick=e=>{e.preventDefault();const n=Date.now();if(n-last<350)return;last=n;b.classList.toggle('flip');play(b.dataset.a,b);});
  $('#pall').onclick=()=>play(d.full,$('#pall'));
 } else if(tab==='card'){
  let i=0;const draw=()=>{const w=d.words[i];el.innerHTML=`<p class="hint">${t('h_card')}</p><div class="wcard"><img src="${M}${w[3]}.jpg" alt=""><div id="ans" hidden><div class="big">${w[0]}</div><div style="color:var(--mute)">${w[1]}</div><div>${w[2]}</div></div>
   <div class="ctrl"><button class="btn" id="chk">${t('tapCheck')}</button><button class="btn ghost" id="nx">${t('next')} →</button></div></div>`;
   $('#chk').onclick=()=>{$('#ans').hidden=false;play(w[4]);};$('#nx').onclick=()=>{i=(i+1)%d.words.length;draw();};};
  draw();
 } else {
  el.innerHTML=`<p class="hint">${t('h_write')}</p><div class="wcard"><div class="wbox" id="wbox"></div>
  <div class="ctrl"><label class="btn ghost" style="gap:10px"><input type="checkbox" id="tg" style="width:22px;height:22px"> ${t('reveal')}</label><button class="btn" id="shw" disabled>${t('show')}</button><button class="btn ghost" id="agn">${t('again')}</button></div></div>`;
  const sz=Math.min(300,Math.floor(window.innerWidth*0.8));
  const mk=()=>{$('#wbox').innerHTML='';if(!window.HanziWriter){$('#wbox').textContent='…';return}
   writer=HanziWriter.create('wbox',d.write,{width:sz,height:sz,padding:16,showCharacter:false,showOutline:true,outlineColor:'#d3dff3',strokeColor:'#14213d',drawingColor:'#1a6dff',highlightOnComplete:false,showHintAfterMisses:false,drawingWidth:22});
   writer.quiz();};
  mk();$('#tg').onchange=e=>{$('#shw').disabled=!e.target.checked};
  $('#shw').onclick=()=>{if(writer){writer.cancelQuiz();writer.showCharacter();}const w=d.words.find(x=>x[0]===d.write);if(w)play(w[4]);};
  $('#agn').onclick=()=>{$('#tg').checked=false;$('#shw').disabled=true;mk();};
 }
}
function sheet(html){$('#sheet-body').innerHTML=html;$('#sheet').hidden=false;document.body.style.overflow='hidden';}
function closeSheet(){$('#sheet').hidden=true;document.body.style.overflow='';}
document.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeSheet();});
function cta(d){
 if(d.free) sheet(`<h3>${t('sh_freeT')}: ${d.title}</h3><ol class="steps" style="margin-top:14px"><li>${t('sh_free1')} <a href="https://apps.ankiweb.net" target="_blank" rel="noopener">apps.ankiweb.net</a></li><li>${t('sh_free2')}</li><li>${t('sh_free3')}</li></ol>
  <a class="btn wide" href="${d.file}" download>${t('dl')} · ${d.size}</a>`);
 else sheet(`<h3>${t('sh_payT')}</h3><div style="color:var(--mute)">${d.title} · ${t('tbd')}</div><div class="mock">⚠ ${t('mockPay')}</div>
  <div class="pay"><button disabled>${t('payCard')}</button><button disabled>${t('payApple')}</button><button disabled>${t('payTg')}</button></div>
  <ol class="steps"><li>${t('sh_pay1')}</li><li>${t('sh_pay2')}</li><li>${t('sh_pay3')}</li></ol><button class="btn wide" data-close>${t('ok')}</button>`);
}
function render(){
 document.documentElement.lang=L;$('#lang').textContent=L==='en'?'RU':'EN';
 document.querySelectorAll('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));
 const m=location.hash.match(/deck\/(\w+)/);const d=m&&DECKS[m[1]];
 const app=$('#app');
 if(d){app.innerHTML=deck(d);demo(d,'piano');
  document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>demo(d,b.dataset.tab));
  $('#pfull').onclick=()=>play(d.full,$('#pfull'));
  document.querySelectorAll('.w').forEach(b=>b.onclick=()=>{document.querySelectorAll('.w.on').forEach(x=>x.classList.remove('on'));b.classList.add('on');play(b.dataset.a,b)});
  $('#cta').onclick=()=>cta(d);
 } else app.innerHTML=catalog();
}
$('#lang').onclick=()=>{L=L==='en'?'ru':'en';localStorage.setItem('lang',L);render();};
window.addEventListener('hashchange',()=>{closeSheet();player.pause();render();scrollTo(0,0)});
render();
