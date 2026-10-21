'use strict';

/* Generatore Ethereum offline: BIP-39, BIP-32/BIP-44, secp256k1 e Keccak-256. */

// Lista inglese ufficiale BIP-39: l'indice di ogni parola è parte dello standard.
const WORDS = ["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"];
const MASK = (1n << 64n) - 1n;

// Costanti pubbliche usate dai 24 round di Keccak-f[1600].
const RC = [
  0x0000000000000001n,0x0000000000008082n,0x800000000000808an,0x8000000080008000n,
  0x000000000000808bn,0x0000000080000001n,0x8000000080008081n,0x8000000000008009n,
  0x000000000000008an,0x0000000000000088n,0x0000000080008009n,0x000000008000000an,
  0x000000008000808bn,0x800000000000008bn,0x8000000000008089n,0x8000000000008003n,
  0x8000000000008002n,0x8000000000000080n,0x000000000000800an,0x800000008000000an,
  0x8000000080008081n,0x8000000000008080n,0x0000000080000001n,0x8000000080008008n
];
const ROT = [0,1,62,28,27,36,44,6,55,20,3,10,43,25,39,41,45,15,21,8,18,2,61,56,14];

// Keccak usa parole da 64 bit e una rotazione ciclica.
function rol(x,n){if(!n)return x;const b=BigInt(n);return ((x<<b)|(x>>(64n-b)))&MASK;}

// Keccak-256, NON SHA3-256: Ethereum usa il padding Keccak originale.
function keccak256(bytes){
  const rate=136, padded=Array.from(bytes);
  if(padded.length % rate === rate - 1) {
    padded.push(0x81);
  } else {
    padded.push(0x01);
    while(padded.length % rate !== rate - 1) padded.push(0);
    padded.push(0x80);
  }
  const s=Array(25).fill(0n);
  for(let off=0;off<padded.length;off+=rate){
    for(let i=0;i<rate;i++)s[Math.floor(i/8)]^=BigInt(padded[off+i])<<BigInt((i%8)*8);
    for(const rc of RC){
      const c=Array(5);
      for(let x=0;x<5;x++)c[x]=s[x]^s[x+5]^s[x+10]^s[x+15]^s[x+20];
      const d=Array(5);
      for(let x=0;x<5;x++)d[x]=c[(x+4)%5]^rol(c[(x+1)%5],1);
      for(let x=0;x<5;x++)for(let y=0;y<5;y++)s[x+5*y]^=d[x];
      const b=Array(25).fill(0n);
      for(let x=0;x<5;x++)for(let y=0;y<5;y++)b[y+5*((2*x+3*y)%5)]=rol(s[x+5*y],ROT[x+5*y]);
      for(let x=0;x<5;x++)for(let y=0;y<5;y++)s[x+5*y]=b[x+5*y]^((~b[(x+1)%5+5*y])&b[(x+2)%5+5*y]);
      s[0]^=rc;
    }
  }
  const out=[];
  for(let i=0;i<32;i++)out.push(Number((s[Math.floor(i/8)]>>BigInt((i%8)*8))&255n));
  return out;
}

// Parametri pubblici standard della curva secp256k1.
const P=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn;
const N=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n;
const GX=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n;
const GY=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n;

function mod(a,m=P){const r=a%m;return r<0n?r+m:r;}
function pow(a,n,m=P){let r=1n;a=mod(a,m);while(n){if(n&1n)r=r*a%m;a=a*a%m;n>>=1n;}return r;}
function inv(a){return pow(a,P-2n,P);}

// Somma di due punti della curva; null rappresenta il punto all'infinito.
function pointAdd(A,B){
  if(!A)return B;if(!B)return A;
  const [x1,y1]=A,[x2,y2]=B;
  if(x1===x2&&mod(y1+y2)===0n)return null;
  const slope=x1===x2?mod(3n*x1*x1*inv(2n*y1)):mod((y2-y1)*inv(x2-x1));
  const x3=mod(slope*slope-x1-x2);
  return [x3,mod(slope*(x1-x3)-y1)];
}

// Moltiplicazione scalare k*G tramite double-and-add.
function pointMultiply(k){
  let R=null,Q=[GX,GY];
  while(k>0n){if(k&1n)R=pointAdd(R,Q);Q=pointAdd(Q,Q);k>>=1n;}
  return R;
}
function hex(bytes){return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');}
function bytes32(n){return Array.from({length:32},(_,i)=>Number((n>>BigInt((31-i)*8))&255n));}
function bytesToBigInt(bytes){return BigInt('0x'+hex(bytes));}
function concatBytes(...arrays){return arrays.flat();}

// 1) Crea 128 bit di entropia con il generatore crittografico del browser.
// 2) BIP-39 aggiunge i primi 4 bit di SHA-256: 132 bit / 11 = 12 indici.
async function makeMnemonic(){
  const entropy=new Uint8Array(16); // 16 byte = 128 bit, per una frase da 12 parole.
  crypto.getRandomValues(entropy);
  const digest=new Uint8Array(await crypto.subtle.digest('SHA-256',entropy));
  let bits=Array.from(entropy,b=>b.toString(2).padStart(8,'0')).join('');
  bits+=digest[0].toString(2).padStart(8,'0').slice(0,4); // checksum BIP-39 di 4 bit
  const result=[];
  for(let i=0;i<bits.length;i+=11){
    const index=parseInt(bits.slice(i,i+11),2); // 11 bit selezionano 1 delle 2048 parole
    result.push(WORDS[index]);
  }
  return result.join(' ');
}

// PBKDF2 previsto da BIP-39: la frase diventa un seed binario di 512 bit.
// La passphrase è vuota in questa versione; salt = "mnemonic".
async function mnemonicToSeed(mnemonic){
  const enc=new TextEncoder();
  const key=await crypto.subtle.importKey('raw',enc.encode(mnemonic.normalize('NFKD')),'PBKDF2',false,['deriveBits']);
  const salt=enc.encode('mnemonic'.normalize('NFKD'));
  return new Uint8Array(await crypto.subtle.deriveBits(
    {name:'PBKDF2',salt,iterations:2048,hash:'SHA-512'},key,512
  ));
}

// HMAC-SHA-512, usato da BIP-32. È fornito dal browser, non da un server.
async function hmac512(keyBytes,dataBytes){
  const key=await crypto.subtle.importKey('raw',new Uint8Array(keyBytes),{name:'HMAC',hash:'SHA-512'},false,['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC',key,new Uint8Array(dataBytes)));
}
function ser32(i){return [(i>>>24)&255,(i>>>16)&255,(i>>>8)&255,i&255];}
function ser256(k){return bytes32(k);}

// Chiave pubblica compressa SEC1: prefisso 02/03 + coordinata X.
// BIP-32 la richiede per derivare i figli non hardened.
function compressedPublicKey(k){
  const [x,y]=pointMultiply(k);
  return [Number(y&1n)?3:2,...bytes32(x)];
}

// Deriva un figlio privato BIP-32 dal numero indice e dal chain code.
async function deriveChild(parentKey,chainCode,index){
  const hardened=index>=0x80000000;
  const data=hardened
    ? concatBytes([0],ser256(parentKey),ser32(index))
    : concatBytes(compressedPublicKey(parentKey),ser32(index));
  const I=await hmac512(chainCode,data);
  const left=bytesToBigInt(I.slice(0,32));
  if(left>=N)throw new Error('Indice BIP-32 non valido; rigenerare il wallet.');
  const child=(left+parentKey)%N;
  if(child===0n)throw new Error('Chiave figlia non valida; rigenerare il wallet.');
  return {key:child,chainCode:I.slice(32)};
}

// 3) BIP-32: seed -> chiave master -> percorso BIP-44 Ethereum.
// m/44'/60'/0'/0/0: Ethereum, account 0, indirizzo esterno 0.
async function deriveEthereumPrivateKey(seed){
  let I=await hmac512(new TextEncoder().encode('Bitcoin seed'),seed);
  let key=bytesToBigInt(I.slice(0,32)), chainCode=I.slice(32);
  if(key===0n||key>=N)throw new Error('Chiave master non valida; rigenerare il wallet.');
  const path=[0x8000002c,0x8000003c,0x80000000,0,0];
  for(const index of path){
    const child=await deriveChild(key,chainCode,index);
    key=child.key;chainCode=child.chainCode;
  }
  return key;
}

// 4) Indirizzo Ethereum = ultimi 20 byte di Keccak-256 della chiave pubblica
// non compressa, senza il byte iniziale 04.
function privateKeyToAddress(privateKey){
  const [x,y]=pointMultiply(privateKey);
  const publicKey=[...bytes32(x),...bytes32(y)];
  const address = hex(keccak256(publicKey).slice(12));
  const addressHash = hex(keccak256(Array.from(address, char => char.charCodeAt(0))));
  const checksumAddress = Array.from(address, (char, index) =>
    parseInt(addressHash[index], 16) >= 8 ? char.toUpperCase() : char
  ).join('');
  return '0x' + checksumAddress;
}

async function generateWallet(){
  if(!globalThis.crypto?.getRandomValues||!globalThis.crypto?.subtle) {
    throw new Error('Web Crypto is unavailable. Open this page in a modern browser over HTTPS or localhost.');
  }
  const mnemonic=await makeMnemonic();
  const seed=await mnemonicToSeed(mnemonic);
  try {
    const privateKey=await deriveEthereumPrivateKey(seed);
    const address=privateKeyToAddress(privateKey);

    // Display results locally; this tool does not save or transmit wallet keys.
    document.getElementById('mnemonic').textContent=mnemonic;
    document.getElementById('address').textContent=address;
    document.getElementById('private').textContent='0x'+privateKey.toString(16).padStart(64,'0');
    document.getElementById('results').style.display='block';
  } finally {
    // Best-effort cleanup only; JavaScript cannot guarantee that all copies are erased.
    seed.fill(0);
  }
}


// Copia il contenuto del campo scelto negli appunti.
async function copyValue(id, button) {
  const value = document.getElementById(id).textContent;
  const originalText = button.textContent;

  try {
    // Metodo moderno: disponibile nei browser e contesti che consentono Clipboard API.
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
    } else {
      // Fallback per i casi in cui il file HTML è aperto direttamente dal computer.
      const temporary = document.createElement('textarea');
      temporary.value = value;
      temporary.setAttribute('readonly', '');
      temporary.style.position = 'fixed';
      temporary.style.opacity = '0';
      document.body.appendChild(temporary);
      temporary.select();
      const copied = document.execCommand('copy');
      temporary.remove();
      if (!copied) throw new Error('Copy failed');
    }

    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = originalText; }, 1200);
  } catch (error) {
    button.textContent = 'Copy failed';
    setTimeout(() => { button.textContent = originalText; }, 1600);
  }
}

// Collega ogni pulsante di copia al campo indicato nel suo attributo data-copy.
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', () => copyValue(button.dataset.copy, button));
});

document.getElementById('generate').addEventListener('click',async()=>{
  const button=document.getElementById('generate');
  const status=document.getElementById('status');
  button.disabled=true;
  status.textContent='';
  status.classList.remove('error');
  try {
    await generateWallet();
  } catch(error) {
    document.getElementById('results').style.display='none';
    status.textContent = error instanceof Error
      ? error.message
      : 'Wallet generation failed. Please try again.';
    status.classList.add('error');
  } finally {
    button.disabled=false;
  }
});

document.querySelectorAll("[data-current-year]").forEach(function(link){link.textContent="@ "+new Date().getFullYear()+" Giuseppe Coiro";});
