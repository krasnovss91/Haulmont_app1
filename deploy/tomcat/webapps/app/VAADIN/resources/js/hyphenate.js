/*
 *  Hyphenator 4.3.0 - client side hyphenation for webbrowsers
 *  Copyright (C) 2014  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 *  Project and Source hosted on http://code.google.com/p/hyphenator/
 * 
 *  This JavaScript code is free software: you can redistribute
 *  it and/or modify it under the terms of the GNU Lesser
 *  General Public License (GNU LGPL) as published by the Free Software
 *  Foundation, either version 3 of the License, or (at your option)
 *  any later version.  The code is distributed WITHOUT ANY WARRANTY;
 *  without even the implied warranty of MERCHANTABILITY or FITNESS
 *  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 *  As additional permission under GNU GPL version 3 section 7, you
 *  may distribute non-source (e.g., minimized or compacted) forms of
 *  that code without the copy of the GNU GPL normally required by
 *  section 4, provided you include this license notice and a URL
 *  through which recipients can access the Corresponding Source.
 *
 * 
 *  Hyphenator.js contains code from Bram Steins hypher.js-Project:
 *  https://github.com/bramstein/Hypher
 *  
 *  Code from this project is marked in the source and belongs 
 *  to the following license:
 *  
 *  Copyright (c) 2011, Bram Stein
 *  All rights reserved.
 *  
 *  Redistribution and use in source and binary forms, with or without 
 *  modification, are permitted provided that the following conditions 
 *  are met:
 *   
 *   1. Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer. 
 *   2. Redistributions in binary form must reproduce the above copyright 
 *      notice, this list of conditions and the following disclaimer in the 
 *      documentation and/or other materials provided with the distribution. 
 *   3. The name of the author may not be used to endorse or promote products 
 *      derived from this software without specific prior written permission. 
 *  
 *  THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED 
 *  WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
 *  MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO 
 *  EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, 
 *  BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 *  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY 
 *  OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING 
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
 *  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var Hyphenator=(function(window){
'use strict';
var contextWindow=window,
supportedLangs=(function(){
var r={},
o=function(code,file,script,prompt){
r[code]={'file':file,'script':script,'prompt':prompt};
};
o('be','be.js',1,'Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:');
o('ca','ca.js',0,'');
o('cs','cs.js',0,'Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:');
o('da','da.js',0,'Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:');
o('bn','bn.js',4,'');
o('de','de.js',0,'Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:');
o('el','el-monoton.js',6,'');
o('el-monoton','el-monoton.js',6,'');
o('el-polyton','el-polyton.js',6,'');
o('en','en-us.js',0,'The language of this website could not be determined automatically. Please indicate the main language:');
o('en-gb','en-gb.js',0,'The language of this website could not be determined automatically. Please indicate the main language:');
o('en-us','en-us.js',0,'The language of this website could not be determined automatically. Please indicate the main language:');
o('eo','eo.js',0,'La lingvo de ĉi tiu retpaĝo ne rekoneblas aŭtomate. Bonvolu indiki ĝian ĉeflingvon:');
o('es','es.js',0,'El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:');
o('et','et.js',0,'Veebilehe keele tuvastamine ebaõnnestus, palun valige kasutatud keel:');
o('fi','fi.js',0,'Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:');
o('fr','fr.js',0,'La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:');
o('grc','grc.js',6,'');
o('gu','gu.js',7,'');
o('hi','hi.js',5,'');
o('hu','hu.js',0,'A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:');
o('hy','hy.js',3,'Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝');
o('it','it.js',0,'Lingua del sito sconosciuta. Indicare una lingua, per favore:');
o('kn','kn.js',8,'ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:');
o('la','la.js',0,'');
o('lt','lt.js',0,'Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:');
o('lv','lv.js',0,'Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:');
o('ml','ml.js',10,'ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:');
o('nb','nb-no.js',0,'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:');
o('no','nb-no.js',0,'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:');
o('nb-no','nb-no.js',0,'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:');
o('nl','nl.js',0,'De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:');
o('or','or.js',11,'');
o('pa','pa.js',13,'');
o('pl','pl.js',0,'Języka tej strony nie można ustalić automatycznie. Proszę wskazać język:');
o('pt','pt.js',0,'A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:');
o('ru','ru.js',1,'Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:');
o('sk','sk.js',0,'');
o('sl','sl.js',0,'Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:');
o('sr-cyrl','sr-cyrl.js',1,'Језик овог сајта није детектован аутоматски. Молим вас наведите језик:');
o('sr-latn','sr-latn.js',0,'Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:');
o('sv','sv.js',0,'Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:');
o('ta','ta.js',14,'');
o('te','te.js',15,'');
o('tr','tr.js',0,'Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:');
o('uk','uk.js',1,'Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:');
o('ro','ro.js',0,'Limba acestui sit nu a putut fi determinată automat. Alege limba principală:');
return r;
}()),
basePath=(function(){
var s=contextWindow.document.getElementsByTagName('script'),i=0,p,src,t=s[i],r='';
while(!!t){
if(!!t.src){
src=t.src;
p=src.indexOf('Hyphenator.js');
if(p!==-1){
r=src.substring(0,p);
}
}
i+=1;
t=s[i];
}
return!!r?r:'//hyphenator.googlecode.com/svn/trunk/';
}()),
isLocal=(function(){
var re=false;
if(window.location.href.indexOf(basePath)!==-1){
re=true;
}
return re;
}()),
documentLoaded=false,
persistentConfig=false,
doFrames=false,
dontHyphenate={'video':true,'audio':true,'script':true,'code':true,'pre':true,'img':true,'br':true,'samp':true,'kbd':true,'var':true,'abbr':true,'acronym':true,'sub':true,'sup':true,'button':true,'option':true,'label':true,'textarea':true,'input':true,'math':true,'svg':true,'style':true},
enableCache=true,
storageType='local',
storage,
enableReducedPatternSet=false,
enableRemoteLoading=true,
displayToggleBox=false,
onError=function(e){
window.alert("Hyphenator.js says:\n\nAn Error occurred:\n"+e.message);
},
onWarning=function(e){
window.console.log(e.message);
},
createElem=function(tagname,context){
context=context||contextWindow;
var el;
if(window.document.createElementNS){
el=context.document.createElementNS('http://www.w3.org/1999/xhtml',tagname);
}else if(window.document.createElement){
el=context.document.createElement(tagname);
}
return el;
},
css3=false,
css3_h9n,
css3_gethsupport=function(){
var s,
createLangSupportChecker=function(prefix){
var testStrings=[
'aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz',
'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
'أبتثجحخدذرزسشصضطظعغفقكلمنهوي',
'աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ',
'ঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ',
'ँंःअआइईउऊऋऌएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽािीुूृॄेैोौ्॒॑ॠॡॢॣ',
'αβγδεζηθικλμνξοπρσςτυφχψω',
'બહઅઆઇઈઉઊઋૠએઐઓઔાિીુૂૃૄૢૣેૈોૌકખગઘઙચછજઝઞટઠડઢણતથદધનપફસભમયરલળવશષ',
'ಂಃಅಆಇಈಉಊಋಌಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖೞೠೡ',
'ກຂຄງຈຊຍດຕຖທນບປຜຝພຟມຢຣລວສຫອຮະັາິີຶືຸູົຼເແໂໃໄ່້໊໋ໜໝ',
'ംഃഅആഇഈഉഊഋഌഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹാിീുൂൃെേൈൊോൌ്ൗൠൡൺൻർൽൾൿ',
'ଁଂଃଅଆଇଈଉଊଋଌଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହାିୀୁୂୃେୈୋୌ୍ୗୠୡ',
'أبتثجحخدذرزسشصضطظعغفقكلمنهوي',
'ਁਂਃਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹਾਿੀੁੂੇੈੋੌ੍ੰੱ',
'ஃஅஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஷஸஹாிீுூெேைொோௌ்ௗ',
'ఁంఃఅఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహాిీుూృౄెేైొోౌ్ౕౖౠౡ'
],
f=function(lang){
var shadow,
computedHeight,
bdy,
r=false;
if(this.supportedBrowserLangs.hasOwnProperty(lang)){
r=this.supportedBrowserLangs[lang];
}else if(supportedLangs.hasOwnProperty(lang)){
bdy=window.document.getElementsByTagName('body')[0];
shadow=createElem('div',window);
shadow.id='Hyphenator_LanguageChecker';
shadow.style.width='5em';
shadow.style[prefix]='auto';
shadow.style.hyphens='auto';
shadow.style.fontSize='12px';
shadow.style.lineHeight='12px';
shadow.style.visibility='hidden';
shadow.lang=lang;
shadow.style['-webkit-locale']="'"+lang+"'";
shadow.innerHTML=testStrings[supportedLangs[lang].script];
bdy.appendChild(shadow);
computedHeight=shadow.offsetHeight;
bdy.removeChild(shadow);
r=(computedHeight>12)?true:false;
this.supportedBrowserLangs[lang]=r;
}else{
r=false;
}
return r;
};
return f;
},
r={
support:false,
supportedBrowserLangs:{},
property:'',
checkLangSupport:{}
};
if(window.getComputedStyle){
s=window.getComputedStyle(window.document.getElementsByTagName('body')[0],null);
}else{
css3_h9n=r;
return;
}
if(s.hyphens!==undefined){
r.support=true;
r.property='hyphens';
r.checkLangSupport=createLangSupportChecker('hyphens');
}else if(s['-webkit-hyphens']!==undefined){
r.support=true;
r.property='-webkit-hyphens';
r.checkLangSupport=createLangSupportChecker('-webkit-hyphens');
}else if(s.MozHyphens!==undefined){
r.support=true;
r.property='-moz-hyphens';
r.checkLangSupport=createLangSupportChecker('MozHyphens');
}else if(s['-ms-hyphens']!==undefined){
r.support=true;
r.property='-ms-hyphens';
r.checkLangSupport=createLangSupportChecker('-ms-hyphens');
}
css3_h9n=r;
},
hyphenateClass='hyphenate',
urlHyphenateClass='urlhyphenate',
classPrefix='Hyphenator'+Math.round(Math.random()*1000),
hideClass=classPrefix+'hide',
hideClassRegExp=new RegExp("\\s?\\b"+hideClass+"\\b","g"),
unhideClass=classPrefix+'unhide',
unhideClassRegExp=new RegExp("\\s?\\b"+unhideClass+"\\b","g"),
css3hyphenateClass=classPrefix+'css3hyphenate',
css3hyphenateClassHandle,
dontHyphenateClass='donthyphenate',
min=6,
orphanControl=1,
isBookmarklet=(function(){
var loc=null,
re=false,
scripts=contextWindow.document.getElementsByTagName('script'),
i=0,
l=scripts.length;
while(!re&&i<l){
loc=scripts[i].getAttribute('src');
if(!!loc&&loc.indexOf('Hyphenator.js?bm=true')!==-1){
re=true;
}
i+=1;
}
return re;
}()),
mainLanguage=null,
defaultLanguage='',
elements=(function(){
var Element=function(element){
this.element=element;
this.hyphenated=false;
this.treated=false;
},
ElementCollection=function(){
this.count=0;
this.hyCount=0;
this.list={};
};
ElementCollection.prototype={
add:function(el,lang){
var elo=new Element(el);
if(!this.list.hasOwnProperty(lang)){
this.list[lang]=[];
}
this.list[lang].push(elo);
this.count+=1;
return elo;
},
remove:function(el){
var lang,i,e,l;
for(lang in this.list){
if(this.list.hasOwnProperty(lang)){
for(i=0;i<this.list[lang].length;i+=1){
if(this.list[lang][i].element===el){
e=i;
l=lang;
break;
}
}
}
}
this.list[l].splice(e,1);
this.count-=1;
this.hyCount-=1;
},
each:function(fn){
var k;
for(k in this.list){
if(this.list.hasOwnProperty(k)){
if(fn.length===2){
fn(k,this.list[k]);
}else{
fn(this.list[k]);
}
}
}
}
};
return new ElementCollection();
}()),
exceptions={},
docLanguages={},
url='(\\w*:\/\/)?((\\w*:)?(\\w*)@)?((([\\d]{1,3}\\.){3}([\\d]{1,3}))|((www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.([a-z]{2,4})))(:\\d*)?(\/[\\w#!:\\.?\\+=&%@!\\-]*)*',
mail='[\\w-\\.]+@[\\w\\.]+',
urlOrMailRE=new RegExp('('+url+')|('+mail+')','i'),
zeroWidthSpace=(function(){
var zws,ua=window.navigator.userAgent.toLowerCase();
zws=String.fromCharCode(8203);
if(ua.indexOf('msie 6')!==-1){
zws='';
}
if(ua.indexOf('opera')!==-1&&ua.indexOf('version/10.00')!==-1){
zws='';
}
return zws;
}()),
onBeforeWordHyphenation=function(word){
return word;
},
onAfterWordHyphenation=function(word){
return word;
},
onHyphenationDone=function(context){
return context;
},
selectorFunction=false,
mySelectorFunction=function(hyphenateClass){
var tmp,el=[],i,l;
if(window.document.getElementsByClassName){
el=contextWindow.document.getElementsByClassName(hyphenateClass);
}else if(window.document.querySelectorAll){
el=contextWindow.document.querySelectorAll('.'+hyphenateClass);
}else{
tmp=contextWindow.document.getElementsByTagName('*');
l=tmp.length;
for(i=0;i<l;i+=1){
if(tmp[i].className.indexOf(hyphenateClass)!==-1&&tmp[i].className.indexOf(dontHyphenateClass)===-1){
el.push(tmp[i]);
}
}
}
return el;
},
selectElements=function(){
var elems;
if(selectorFunction){
elems=selectorFunction();
}else{
elems=mySelectorFunction(hyphenateClass);
}
return elems;
},
intermediateState='hidden',
unhide='wait',
CSSEditors=[],
CSSEdit=function(w){
w=w||window;
var doc=w.document,
sheet=(function(){
var i,
l=doc.styleSheets.length,
s,
element,
r=false;
for(i=0;i<l;i+=1){
s=doc.styleSheets[i];
try{
if(!!s.cssRules){
r=s;
break;
}
}catch(ignore){}
}
r=false;
if(r===false){
element=doc.createElement('style');
element.type='text/css';
doc.getElementsByTagName('head')[0].appendChild(element);
r=doc.styleSheets[doc.styleSheets.length-1];
}
return r;
}()),
changes=[],
findRule=function(sel){
var s,rule,sheets=w.document.styleSheets,rules,i,j,r=false;
for(i=0;i<sheets.length;i+=1){
s=sheets[i];
try{
if(!!s.cssRules){
rules=s.cssRules;
}else if(!!s.rules){
rules=s.rules;
}
}catch(ignore){}
if(!!rules&&!!rules.length){
for(j=0;j<rules.length;j+=1){
rule=rules[j];
if(rule.selectorText===sel){
r={
index:j,
rule:rule
};
}
}
}
}
return r;
},
addRule=function(sel,rulesStr){
var i,r;
if(!!sheet.insertRule){
if(!!sheet.cssRules){
i=sheet.cssRules.length;
}else{
i=0;
}
r=sheet.insertRule(sel+'{'+rulesStr+'}',i);
}else if(!!sheet.addRule){
if(!!sheet.rules){
i=sheet.rules.length;
}else{
i=0;
}
sheet.addRule(sel,rulesStr,i);
r=i;
}
return r;
},
removeRule=function(sheet,index){
if(sheet.deleteRule){
sheet.deleteRule(index);
}else{
sheet.removeRule(index);
}
};
return{
setRule:function(sel,rulesString){
var i,existingRule,cssText;
existingRule=findRule(sel);
if(!!existingRule){
if(!!existingRule.rule.cssText){
cssText=existingRule.rule.cssText;
}else{
cssText=existingRule.rule.style.cssText.toLowerCase();
}
if(cssText==='.'+hyphenateClass+' { visibility: hidden; }'){
changes.push({sheet:existingRule.rule.parentStyleSheet,index:existingRule.index});
}else if(cssText.indexOf('visibility: hidden')!==-1){
i=addRule(sel,rulesString);
changes.push({sheet:sheet,index:i});
existingRule.rule.style.visibility='';
}else{
i=addRule(sel,rulesString);
changes.push({sheet:sheet,index:i});
}
}else{
i=addRule(sel,rulesString);
changes.push({sheet:sheet,index:i});
}
},
clearChanges:function(){
var change=changes.pop();
while(!!change){
removeRule(change.sheet,change.index);
change=changes.pop();
}
}
};
},
hyphen=String.fromCharCode(173),
urlhyphen=zeroWidthSpace,
hyphenateURL=function(url){
var tmp=url.replace(/([:\/\.\?#&\-_,;!@]+)/gi,'$&'+urlhyphen),
parts=tmp.split(urlhyphen),
i;
for(i=0;i<parts.length;i+=1){
if(parts[i].length>(2*min)){
parts[i]=parts[i].replace(/(\w{3})(\w)/gi,"$1"+urlhyphen+"$2");
}
}
if(parts[parts.length-1]===""){
parts.pop();
}
return parts.join(urlhyphen);
},
safeCopy=true,
hyphRunFor={},
runWhenLoaded=function(w,f){
var toplevel,
add=window.document.addEventListener?'addEventListener':'attachEvent',
rem=window.document.addEventListener?'removeEventListener':'detachEvent',
pre=window.document.addEventListener?'':'on',
init=function(context){
if(hyphRunFor[context.location.href]){
onWarning(new Error("Warning: multiple execution of Hyphenator.run() – This may slow down the script!"));
}
contextWindow=context||window;
f();
hyphRunFor[contextWindow.location.href]=true;
},
doScrollCheck=function(){
try{
w.document.documentElement.doScroll("left");
}catch(error){
window.setTimeout(doScrollCheck,1);
return;
}
if(!hyphRunFor[w.location.href]){
documentLoaded=true;
init(w);
}
},
doOnEvent=function(e){
var i,fl,haveAccess;
if(!!e&&e.type==='readystatechange'&&w.document.readyState!=='interactive'&&w.document.readyState!=='complete'){
return;
}
w.document[rem](pre+'DOMContentLoaded',doOnEvent,false);
w.document[rem](pre+'readystatechange',doOnEvent,false);
fl=w.frames.length;
if(fl===0||!doFrames){
w[rem](pre+'load',doOnEvent,false);
documentLoaded=true;
init(w);
}else if(doFrames&&fl>0){
if(!!e&&e.type==='load'){
w[rem](pre+'load',doOnEvent,false);
for(i=0;i<fl;i+=1){
haveAccess=undefined;
try{
haveAccess=window.frames[i].document.toString();
}catch(err){
haveAccess=undefined;
}
if(!!haveAccess){
runWhenLoaded(w.frames[i],f);
}
}
init(w);
}
}
};
if(documentLoaded||w.document.readyState==='complete'){
documentLoaded=true;
doOnEvent({type:'load'});
}else{
w.document[add](pre+'DOMContentLoaded',doOnEvent,false);
w.document[add](pre+'readystatechange',doOnEvent,false);
w[add](pre+'load',doOnEvent,false);
toplevel=false;
try{
toplevel=!window.frameElement;
}catch(ignore){}
if(toplevel&&w.document.documentElement.doScroll){
doScrollCheck();
}
}
},
getLang=function(el,fallback){
try{
return!!el.getAttribute('lang')?el.getAttribute('lang').toLowerCase():
!!el.getAttribute('xml:lang')?el.getAttribute('xml:lang').toLowerCase():
el.tagName.toLowerCase()!=='html'?getLang(el.parentNode,fallback):
fallback?mainLanguage:
null;
}catch(ignore){}
},
autoSetMainLanguage=function(w){
w=w||contextWindow;
var el=w.document.getElementsByTagName('html')[0],
m=w.document.getElementsByTagName('meta'),
i,
getLangFromUser=function(){
var ml,
text='',
dH=300,
dW=450,
dX=Math.floor((w.outerWidth-dW)/2)+window.screenX,
dY=Math.floor((w.outerHeight-dH)/2)+window.screenY,
ul='',
languageHint;
if(!!window.showModalDialog&&(w.location.href.indexOf(basePath)!==-1)){
ml=window.showModalDialog(basePath+'modalLangDialog.html',supportedLangs,"dialogWidth: "+dW+"px; dialogHeight: "+dH+"px; dialogtop: "+dY+"; dialogleft: "+dX+"; center: on; resizable: off; scroll: off;");
}else{
languageHint=(function(){
var k,r='';
for(k in supportedLangs){
if(supportedLangs.hasOwnProperty(k)){
r+=k+', ';
}
}
r=r.substring(0,r.length-2);
return r;
}());
ul=window.navigator.language||window.navigator.userLanguage;
ul=ul.substring(0,2);
if(!!supportedLangs[ul]&&supportedLangs[ul].prompt!==''){
text=supportedLangs[ul].prompt;
}else{
text=supportedLangs.en.prompt;
}
text+=' (ISO 639-1)\n\n'+languageHint;
ml=window.prompt(window.unescape(text),ul).toLowerCase();
}
return ml;
};
mainLanguage=getLang(el,false);
if(!mainLanguage){
for(i=0;i<m.length;i+=1){
if(!!m[i].getAttribute('http-equiv')&&(m[i].getAttribute('http-equiv').toLowerCase()==='content-language')){
mainLanguage=m[i].getAttribute('content').toLowerCase();
}
if(!!m[i].getAttribute('name')&&(m[i].getAttribute('name').toLowerCase()==='dc.language')){
mainLanguage=m[i].getAttribute('content').toLowerCase();
}
if(!!m[i].getAttribute('name')&&(m[i].getAttribute('name').toLowerCase()==='language')){
mainLanguage=m[i].getAttribute('content').toLowerCase();
}
}
}
if(!mainLanguage&&doFrames&&(!!contextWindow.frameElement)){
autoSetMainLanguage(window.parent);
}
if(!mainLanguage&&defaultLanguage!==''){
mainLanguage=defaultLanguage;
}
if(!mainLanguage){
mainLanguage=getLangFromUser();
}
//el.lang=mainLanguage;
},
gatherDocumentInfos=function(){
var elToProcess,urlhyphenEls,tmp,i=0,
process=function(el,pLang,isChild){
isChild=isChild||false;
var n,j=0,hyphenate=true,eLang,
useCSS3=function(){
css3hyphenateClassHandle=new CSSEdit(contextWindow);
css3hyphenateClassHandle.setRule('.'+css3hyphenateClass,css3_h9n.property+': auto;');
css3hyphenateClassHandle.setRule('.'+dontHyphenateClass,css3_h9n.property+': manual;');
if((eLang!==pLang)&&css3_h9n.property.indexOf('webkit')!==-1){
css3hyphenateClassHandle.setRule('.'+css3hyphenateClass,'-webkit-locale : '+eLang+';');
}
el.className=el.className+' '+css3hyphenateClass;
},
useHyphenator=function(){
if(isBookmarklet&&eLang!==mainLanguage){
return;
}
if(supportedLangs.hasOwnProperty(eLang)){
docLanguages[eLang]=true;
}else{
if(supportedLangs.hasOwnProperty(eLang.split('-')[0])){
eLang=eLang.split('-')[0];
docLanguages[eLang]=true;
}else if(!isBookmarklet){
hyphenate=false;
onError(new Error('Language "'+eLang+'" is not yet supported.'));
}
}
if(hyphenate){
if(intermediateState==='hidden'){
el.className=el.className+' '+hideClass;
}
elements.add(el,eLang);
}
};
if(el.lang&&typeof(el.lang)==='string'){
eLang=el.lang.toLowerCase();
}else if(!!pLang&&pLang!==''){
eLang=pLang.toLowerCase();
}else{
eLang=getLang(el,true);
}
if(!isChild){
if(css3&&css3_h9n.support&&!!css3_h9n.checkLangSupport(eLang)){
useCSS3();
}else{
useHyphenator();
}
}else{
if(eLang!==pLang){
if(css3&&css3_h9n.support&&!!css3_h9n.checkLangSupport(eLang)){
useCSS3();
}else{
useHyphenator();
}
}else{
if(!css3||!css3_h9n.support||!css3_h9n.checkLangSupport(eLang)){
useHyphenator();
}
}
}
n=el.childNodes[j];
while(!!n){
if(n.nodeType===1&&!dontHyphenate[n.nodeName.toLowerCase()]&&
n.className.indexOf(dontHyphenateClass)===-1&&
n.className.indexOf(urlHyphenateClass)===-1&&!elToProcess[n]){
process(n,eLang,true);
}
j+=1;
n=el.childNodes[j];
}
},
processUrlStyled=function(el){
var n,j=0;
n=el.childNodes[j];
while(!!n){
if(n.nodeType===1&&!dontHyphenate[n.nodeName.toLowerCase()]&&
n.className.indexOf(dontHyphenateClass)===-1&&
n.className.indexOf(hyphenateClass)===-1&&!urlhyphenEls[n]){
processUrlStyled(n);
}else if(n.nodeType===3){
n.data=hyphenateURL(n.data);
}
j+=1;
n=el.childNodes[j];
}
};
if(css3){
css3_gethsupport();
}
if(isBookmarklet){
elToProcess=contextWindow.document.getElementsByTagName('body')[0];
process(elToProcess,mainLanguage,false);
}else{
if(!css3&&intermediateState==='hidden'){
CSSEditors.push(new CSSEdit(contextWindow));
CSSEditors[CSSEditors.length-1].setRule('.'+hyphenateClass,'visibility: hidden;');
CSSEditors[CSSEditors.length-1].setRule('.'+hideClass,'visibility: hidden;');
CSSEditors[CSSEditors.length-1].setRule('.'+unhideClass,'visibility: visible;');
}
elToProcess=selectElements();
tmp=elToProcess[i];
while(!!tmp){
process(tmp,'',false);
i+=1;
tmp=elToProcess[i];
}
urlhyphenEls=mySelectorFunction(urlHyphenateClass);
i=0;
tmp=urlhyphenEls[i];
while(!!tmp){
processUrlStyled(tmp);
i+=1;
tmp=urlhyphenEls[i];
}
}
if(elements.count===0){
for(i=0;i<CSSEditors.length;i+=1){
CSSEditors[i].clearChanges();
}
onHyphenationDone(contextWindow.location.href);
}
},
convertPatterns=function(lo){
var size,
tree={},
convert=function(psize,patterns){
var i=0,
t=tree,
cc=0,
points=[],
ppos=0,
lastwasp=false,
len=0;
while(i<patterns.length){
if(len<psize){
cc=patterns.charCodeAt(i);
if(cc>=49&&cc<=57){
points[ppos]=cc-48;
ppos+=1;
lastwasp=true;
}else{
if(!t[cc]){
t[cc]={};
}
t=t[cc];
if(!lastwasp){
points[ppos]=0;
ppos+=1;
}
lastwasp=false;
}
len+=1;
i+=1;
}
if(len===psize){
if(!lastwasp){
points[ppos]=0;
}
t.tpoints=points;
t=tree;
points=[];
ppos=0;
lastwasp=false;
len=0;
}
}
};
for(size in lo.patterns){
if(lo.patterns.hasOwnProperty(size)){
convert(parseInt(size,10),lo.patterns[size]);
}
}
lo.patterns=tree;
},
recreatePattern=function(pattern,nodePoints){
var r=[],c=pattern.split(''),i;
for(i=0;i<nodePoints.length;i+=1){
if(nodePoints[i]!==0){
r.push(nodePoints[i]);
}
if(c[i]){
r.push(c[i]);
}
}
return r.join('');
},
convertExceptionsToObject=function(exc){
var w=exc.split(', '),
r={},
i,
l,
key;
for(i=0,l=w.length;i<l;i+=1){
key=w[i].replace(/-/g,'');
if(!r.hasOwnProperty(key)){
r[key]=w[i];
}
}
return r;
},
loadPatterns=function(lang){
var location,xhr,head,script;
if(supportedLangs.hasOwnProperty(lang)&&!Hyphenator.languages[lang]){
location=basePath+'patterns/'+supportedLangs[lang].file;
}else{
return;
}
if(isLocal&&!isBookmarklet){
xhr=null;
try{
xhr=new window.XMLHttpRequest();
}catch(e){
try{
xhr=new window.ActiveXObject("Microsoft.XMLHTTP");
}catch(e2){
try{
xhr=new window.ActiveXObject("Msxml2.XMLHTTP");
}catch(e3){
xhr=null;
}
}
}
if(xhr){
xhr.open('HEAD',location,true);
xhr.setRequestHeader('Cache-Control','no-cache');
xhr.onreadystatechange=function(){
if(xhr.readyState===4){
if(xhr.status===404){
onError(new Error('Could not load\n'+location));
delete docLanguages[lang];
return;
}
}
};
xhr.send(null);
}
}
if(createElem){
head=window.document.getElementsByTagName('head').item(0);
script=createElem('script',window);
script.src=location;
script.type='text/javascript';
script.charset='utf8';
head.appendChild(script);
}
},
prepareLanguagesObj=function(lang){
var lo=Hyphenator.languages[lang],wrd;
if(!lo.prepared){
if(enableCache){
lo.cache={};
}
if(enableReducedPatternSet){
lo.redPatSet={};
}
if(lo.hasOwnProperty('exceptions')){
Hyphenator.addExceptions(lang,lo.exceptions);
delete lo.exceptions;
}
if(exceptions.hasOwnProperty('global')){
if(exceptions.hasOwnProperty(lang)){
exceptions[lang]+=', '+exceptions.global;
}else{
exceptions[lang]=exceptions.global;
}
}
if(exceptions.hasOwnProperty(lang)){
lo.exceptions=convertExceptionsToObject(exceptions[lang]);
delete exceptions[lang];
}else{
lo.exceptions={};
}
convertPatterns(lo);
wrd='[\\w'+lo.specialChars+'@'+String.fromCharCode(173)+String.fromCharCode(8204)+'-]{'+min+',}';
lo.genRegExp=new RegExp('('+url+')|('+mail+')|('+wrd+')','gi');
lo.prepared=true;
}
if(!!storage){
storage.setItem(lang,window.JSON.stringify(lo));
}
},
prepare=function(callback){
var lang,interval,tmp1,tmp2,
languagesLoaded=function(){
var finishedLoading=true,l;
for(l in docLanguages){
if(docLanguages.hasOwnProperty(l)){
finishedLoading=false;
if(!!Hyphenator.languages[l]){
delete docLanguages[l];
prepareLanguagesObj(l);
callback(l);
}
}
}
return finishedLoading;
};
if(!enableRemoteLoading){
for(lang in Hyphenator.languages){
if(Hyphenator.languages.hasOwnProperty(lang)){
prepareLanguagesObj(lang);
}
}
callback('*');
return;
}
for(lang in docLanguages){
if(docLanguages.hasOwnProperty(lang)){
if(!!storage&&storage.test(lang)){
Hyphenator.languages[lang]=window.JSON.parse(storage.getItem(lang));
if(exceptions.hasOwnProperty('global')){
tmp1=convertExceptionsToObject(exceptions.global);
for(tmp2 in tmp1){
if(tmp1.hasOwnProperty(tmp2)){
Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];
}
}
}
if(exceptions.hasOwnProperty(lang)){
tmp1=convertExceptionsToObject(exceptions[lang]);
for(tmp2 in tmp1){
if(tmp1.hasOwnProperty(tmp2)){
Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];
}
}
delete exceptions[lang];
}
tmp1='[\\w'+Hyphenator.languages[lang].specialChars+'@'+String.fromCharCode(173)+String.fromCharCode(8204)+'-]{'+min+',}';
Hyphenator.languages[lang].genRegExp=new RegExp('('+url+')|('+mail+')|('+tmp1+')','gi');
delete docLanguages[lang];
callback(lang);
}else{
loadPatterns(lang);
}
}
}
if(!languagesLoaded()){
interval=window.setInterval(function(){
var loadingDone=languagesLoaded();
if(loadingDone){
window.clearInterval(interval);
}
},100);
}
},
toggleBox=function(){
var bdy,myTextNode,
text=(Hyphenator.doHyphenation?'Hy-phen-a-tion':'Hyphenation'),
myBox=contextWindow.document.getElementById('HyphenatorToggleBox');
if(!!myBox){
myBox.firstChild.data=text;
}else{
bdy=contextWindow.document.getElementsByTagName('body')[0];
myBox=createElem('div',contextWindow);
myBox.setAttribute('id','HyphenatorToggleBox');
myBox.setAttribute('class',dontHyphenateClass);
myTextNode=contextWindow.document.createTextNode(text);
myBox.appendChild(myTextNode);
myBox.onclick=Hyphenator.toggleHyphenation;
myBox.style.position='absolute';
myBox.style.top='0px';
myBox.style.right='0px';
myBox.style.margin='0';
myBox.style.backgroundColor='#AAAAAA';
myBox.style.color='#FFFFFF';
myBox.style.font='6pt Arial';
myBox.style.letterSpacing='0.2em';
myBox.style.padding='3px';
myBox.style.cursor='pointer';
myBox.style.WebkitBorderBottomLeftRadius='4px';
myBox.style.MozBorderRadiusBottomleft='4px';
myBox.style.borderBottomLeftRadius='4px';
bdy.appendChild(myBox);
}
},
hyphenateWord=function(lo,lang,word){
var parts,
i,
pattern,
ww,
wwlen,
wwhp=[],
pstart,
plen,
trie=lo.patterns,
node,
nodePoints,
hp,
wordLength=word.length,
hw='',
doCharSubst=function(w){
var subst,r;
for(subst in lo.charSubstitution){
if(lo.charSubstitution.hasOwnProperty(subst)){
r=w.replace(new RegExp(subst,'g'),lo.charSubstitution[subst]);
}
}
return r;
};
word=onBeforeWordHyphenation(word,lang);
if(word===''){
hw='';
}else if(enableCache&&lo.cache.hasOwnProperty(word)){
hw=lo.cache[word];
}else if(word.indexOf(hyphen)!==-1){
hw=word;
}else if(lo.exceptions.hasOwnProperty(word)){
hw=lo.exceptions[word].replace(/-/g,hyphen);
}else if(word.indexOf('-')!==-1){
parts=word.split('-');
for(i=0;i<parts.length;i+=1){
parts[i]=hyphenateWord(lo,lang,parts[i]);
}
hw=parts.join('-');
}else{
ww=word.toLowerCase();
if(!!lo.charSubstitution){
ww=doCharSubst(ww);
}
if(word.indexOf("'")!==-1){
ww=ww.replace("'","’");
}
ww='_'+ww+'_';
wwlen=ww.length;
for(hp=0;hp<wwlen+1;hp+=1){
wwhp[hp]=0;
}
for(pstart=0;pstart<wwlen;pstart+=1){
node=trie;
pattern='';
for(plen=pstart;plen<wwlen;plen+=1){
node=node[ww.charCodeAt(plen)];
if(node){
if(enableReducedPatternSet){
pattern+=ww.charAt(plen);
}
nodePoints=node.tpoints;
if(nodePoints){
if(enableReducedPatternSet){
if(!lo.redPatSet){
lo.redPatSet={};
}
lo.redPatSet[pattern]=recreatePattern(pattern,nodePoints);
}
for(hp=0;hp<nodePoints.length;hp+=1){
wwhp[pstart+hp]=Math.max(wwhp[pstart+hp],nodePoints[hp]);
}
}
}else{
break;
}
}
}
for(hp=0;hp<wordLength;hp+=1){
if(hp>=lo.leftmin&&hp<=(wordLength-lo.rightmin)&&(wwhp[hp+1]%2)!==0){
hw+=hyphen+word.charAt(hp);
}else{
hw+=word.charAt(hp);
}
}
}
hw=onAfterWordHyphenation(hw,lang);
if(enableCache){
lo.cache[word]=hw;
}
return hw;
},
removeHyphenationFromElement=function(el){
var h,u,i=0,n;
switch(hyphen){
case'|':
h='\\|';
break;
case'+':
h='\\+';
break;
case'*':
h='\\*';
break;
default:
h=hyphen;
}
switch(urlhyphen){
case'|':
u='\\|';
break;
case'+':
u='\\+';
break;
case'*':
u='\\*';
break;
default:
u=urlhyphen;
}
n=el.childNodes[i];
while(!!n){
if(n.nodeType===3){
n.data=n.data.replace(new RegExp(h,'g'),'');
n.data=n.data.replace(new RegExp(u,'g'),'');
}else if(n.nodeType===1){
removeHyphenationFromElement(n);
}
i+=1;
n=el.childNodes[i];
}
},
copy=(function(){
var Copy=function(){
this.oncopyHandler=function(e){
e=e||window.event;
var shadow,selection,range,rangeShadow,restore,
target=e.target||e.srcElement,
currDoc=target.ownerDocument,
bdy=currDoc.getElementsByTagName('body')[0],
targetWindow=currDoc.defaultView||currDoc.parentWindow;
if(target.tagName&&dontHyphenate[target.tagName.toLowerCase()]){
return;
}
shadow=currDoc.createElement('div');
shadow.style.color=window.getComputedStyle?targetWindow.getComputedStyle(bdy,null).backgroundColor:'#FFFFFF';
shadow.style.fontSize='0px';
bdy.appendChild(shadow);
if(!!window.getSelection){
e.stopPropagation();
selection=targetWindow.getSelection();
range=selection.getRangeAt(0);
shadow.appendChild(range.cloneContents());
removeHyphenationFromElement(shadow);
selection.selectAllChildren(shadow);
restore=function(){
shadow.parentNode.removeChild(shadow);
selection.removeAllRanges();
selection.addRange(range);
};
}else{
e.cancelBubble=true;
selection=targetWindow.document.selection;
range=selection.createRange();
shadow.innerHTML=range.htmlText;
removeHyphenationFromElement(shadow);
rangeShadow=bdy.createTextRange();
rangeShadow.moveToElementText(shadow);
rangeShadow.select();
restore=function(){
shadow.parentNode.removeChild(shadow);
if(range.text!==""){
range.select();
}
};
}
window.setTimeout(restore,0);
};
this.removeOnCopy=function(el){
var body=el.ownerDocument.getElementsByTagName('body')[0];
if(!body){
return;
}
el=el||body;
if(window.removeEventListener){
el.removeEventListener("copy",this.oncopyHandler,true);
}else{
el.detachEvent("oncopy",this.oncopyHandler);
}
};
this.registerOnCopy=function(el){
var body=el.ownerDocument.getElementsByTagName('body')[0];
if(!body){
return;
}
el=el||body;
if(window.addEventListener){
el.addEventListener("copy",this.oncopyHandler,true);
}else{
el.attachEvent("oncopy",this.oncopyHandler);
}
};
};
return(safeCopy?new Copy():false);
}()),
checkIfAllDone=function(){
var allDone=true,i,doclist={},doc;
elements.each(function(ellist){
var j,l=ellist.length;
for(j=0;j<l;j+=1){
allDone=allDone&&ellist[j].hyphenated;
if(!doclist.hasOwnProperty(ellist[j].element.baseURI)){
doclist[ellist[j].element.ownerDocument.location.href]=true;
}
doclist[ellist[j].element.ownerDocument.location.href]=doclist[ellist[j].element.ownerDocument.location.href]&&ellist[j].hyphenated;
}
});
if(allDone){
if(intermediateState==='hidden'&&unhide==='progressive'){
elements.each(function(ellist){
var j,l=ellist.length,el;
for(j=0;j<l;j+=1){
el=ellist[j].element;
el.className=el.className.replace(unhideClassRegExp,'');
if(el.className===''){
el.removeAttribute('class');
}
}
});
}
for(i=0;i<CSSEditors.length;i+=1){
CSSEditors[i].clearChanges();
}
for(doc in doclist){
if(doclist.hasOwnProperty(doc)){
onHyphenationDone(doc);
}
}
}
},
hyphenateElement=function(lang,elo){
var el=elo.element,
hyphenate,
n,
i,
lo,
controlOrphans=function(part){
var h,r;
switch(hyphen){
case'|':
h='\\|';
break;
case'+':
h='\\+';
break;
case'*':
h='\\*';
break;
default:
h=hyphen;
}
part=part.replace(/[\s]*$/,'');
if(orphanControl>=2){
r=part.split(' ');
r[1]=r[1].replace(new RegExp(h,'g'),'');
r[1]=r[1].replace(new RegExp(zeroWidthSpace,'g'),'');
r=r.join(' ');
}
if(orphanControl===3){
r=r.replace(/[ ]+/g,String.fromCharCode(160));
}
return r;
};
if(Hyphenator.languages.hasOwnProperty(lang)){
lo=Hyphenator.languages[lang];
hyphenate=function(word){
var r;
if(!Hyphenator.doHyphenation){
r=word;
}else if(urlOrMailRE.test(word)){
r=hyphenateURL(word);
}else{
r=hyphenateWord(lo,lang,word);
}
return r;
};
if(safeCopy&&(el.tagName.toLowerCase()!=='body')){
copy.registerOnCopy(el);
}
i=0;
n=el.childNodes[i];
while(!!n){
if(n.nodeType===3&&n.data.length>=min){
n.data=n.data.replace(lo.genRegExp,hyphenate);
if(orphanControl!==1){
n.data=n.data.replace(/[\S]+ [\S]+[\s]*$/,controlOrphans);
}
}
i+=1;
n=el.childNodes[i];
}
}
if(intermediateState==='hidden'&&unhide==='wait'){
el.className=el.className.replace(hideClassRegExp,'');
if(el.className===''){
el.removeAttribute('class');
}
}
if(intermediateState==='hidden'&&unhide==='progressive'){
el.className=el.className.replace(hideClassRegExp,' '+unhideClass);
}
elo.hyphenated=true;
elements.hyCount+=1;
if(elements.count<=elements.hyCount){
checkIfAllDone();
}
},
hyphenateLanguageElements=function(lang){
function bind(fun,arg1,arg2){
return function(){
return fun(arg1,arg2);
};
}
var i,l;
if(lang==='*'){
elements.each(function(lang,ellist){
var j,le=ellist.length;
for(j=0;j<le;j+=1){
window.setTimeout(bind(hyphenateElement,lang,ellist[j]),0);
}
});
}else{
if(elements.list.hasOwnProperty(lang)){
l=elements.list[lang].length;
for(i=0;i<l;i+=1){
window.setTimeout(bind(hyphenateElement,lang,elements.list[lang][i]),0);
}
}
}
},
removeHyphenationFromDocument=function(){
elements.each(function(ellist){
var i,l=ellist.length;
for(i=0;i<l;i+=1){
removeHyphenationFromElement(ellist[i].element);
if(safeCopy){
copy.removeOnCopy(ellist[i].element);
}
ellist[i].hyphenated=false;
}
});
},
createStorage=function(){
var s;
try{
if(storageType!=='none'&&
window.localStorage!==undefined&&
window.sessionStorage!==undefined&&
window.JSON.stringify!==undefined&&
window.JSON.parse!==undefined){
switch(storageType){
case'session':
s=window.sessionStorage;
break;
case'local':
s=window.localStorage;
break;
default:
s=undefined;
break;
}
s.setItem('storageTest','1');
s.removeItem('storageTest');
}
}catch(e){
s=undefined;
}
if(s){
storage={
prefix:'Hyphenator_'+Hyphenator.version+'_',
store:s,
test:function(name){
var val=this.store.getItem(this.prefix+name);
return(!!val)?true:false;
},
getItem:function(name){
return this.store.getItem(this.prefix+name);
},
setItem:function(name,value){
try{
this.store.setItem(this.prefix+name,value);
}catch(e){
onError(e);
}
}
};
}else{
storage=undefined;
}
},
storeConfiguration=function(){
if(!storage){
return;
}
var settings={
'STORED':true,
'classname':hyphenateClass,
'urlclassname':urlHyphenateClass,
'donthyphenateclassname':dontHyphenateClass,
'minwordlength':min,
'hyphenchar':hyphen,
'urlhyphenchar':urlhyphen,
'togglebox':toggleBox,
'displaytogglebox':displayToggleBox,
'remoteloading':enableRemoteLoading,
'enablecache':enableCache,
'enablereducedpatternset':enableReducedPatternSet,
'onhyphenationdonecallback':onHyphenationDone,
'onerrorhandler':onError,
'onwarninghandler':onWarning,
'intermediatestate':intermediateState,
'selectorfunction':selectorFunction||mySelectorFunction,
'safecopy':safeCopy,
'doframes':doFrames,
'storagetype':storageType,
'orphancontrol':orphanControl,
'dohyphenation':Hyphenator.doHyphenation,
'persistentconfig':persistentConfig,
'defaultlanguage':defaultLanguage,
'useCSS3hyphenation':css3,
'unhide':unhide,
'onbeforewordhyphenation':onBeforeWordHyphenation,
'onafterwordhyphenation':onAfterWordHyphenation
};
storage.setItem('config',window.JSON.stringify(settings));
},
restoreConfiguration=function(){
var settings;
if(storage.test('config')){
settings=window.JSON.parse(storage.getItem('config'));
Hyphenator.config(settings);
}
};
return{
version:'4.3.0',
doHyphenation:true,
languages:{},
config:function(obj){
var assert=function(name,type){
var r,t;
t=typeof obj[name];
if(t===type){
r=true;
}else{
onError(new Error('Config onError: '+name+' must be of type '+type));
r=false;
}
return r;
},
key;
if(obj.hasOwnProperty('storagetype')){
if(assert('storagetype','string')){
storageType=obj.storagetype;
}
if(!storage){
createStorage();
}
}
if(!obj.hasOwnProperty('STORED')&&storage&&obj.hasOwnProperty('persistentconfig')&&obj.persistentconfig===true){
restoreConfiguration();
}
for(key in obj){
if(obj.hasOwnProperty(key)){
switch(key){
case'STORED':
break;
case'classname':
if(assert('classname','string')){
hyphenateClass=obj[key];
}
break;
case'urlclassname':
if(assert('urlclassname','string')){
urlHyphenateClass=obj[key];
}
break;
case'donthyphenateclassname':
if(assert('donthyphenateclassname','string')){
dontHyphenateClass=obj[key];
}
break;
case'minwordlength':
if(assert('minwordlength','number')){
min=obj[key];
}
break;
case'hyphenchar':
if(assert('hyphenchar','string')){
if(obj.hyphenchar==='&shy;'){
obj.hyphenchar=String.fromCharCode(173);
}
hyphen=obj[key];
}
break;
case'urlhyphenchar':
if(obj.hasOwnProperty('urlhyphenchar')){
if(assert('urlhyphenchar','string')){
urlhyphen=obj[key];
}
}
break;
case'togglebox':
if(assert('togglebox','function')){
toggleBox=obj[key];
}
break;
case'displaytogglebox':
if(assert('displaytogglebox','boolean')){
displayToggleBox=obj[key];
}
break;
case'remoteloading':
if(assert('remoteloading','boolean')){
enableRemoteLoading=obj[key];
}
break;
case'enablecache':
if(assert('enablecache','boolean')){
enableCache=obj[key];
}
break;
case'enablereducedpatternset':
if(assert('enablereducedpatternset','boolean')){
enableReducedPatternSet=obj[key];
}
break;
case'onhyphenationdonecallback':
if(assert('onhyphenationdonecallback','function')){
onHyphenationDone=obj[key];
}
break;
case'onerrorhandler':
if(assert('onerrorhandler','function')){
onError=obj[key];
}
break;
case'onwarninghandler':
if(assert('onwarninghandler','function')){
onWarning=obj[key];
}
break;
case'intermediatestate':
if(assert('intermediatestate','string')){
intermediateState=obj[key];
}
break;
case'selectorfunction':
if(assert('selectorfunction','function')){
selectorFunction=obj[key];
}
break;
case'safecopy':
if(assert('safecopy','boolean')){
safeCopy=obj[key];
}
break;
case'doframes':
if(assert('doframes','boolean')){
doFrames=obj[key];
}
break;
case'storagetype':
if(assert('storagetype','string')){
storageType=obj[key];
}
break;
case'orphancontrol':
if(assert('orphancontrol','number')){
orphanControl=obj[key];
}
break;
case'dohyphenation':
if(assert('dohyphenation','boolean')){
Hyphenator.doHyphenation=obj[key];
}
break;
case'persistentconfig':
if(assert('persistentconfig','boolean')){
persistentConfig=obj[key];
}
break;
case'defaultlanguage':
if(assert('defaultlanguage','string')){
defaultLanguage=obj[key];
}
break;
case'useCSS3hyphenation':
if(assert('useCSS3hyphenation','boolean')){
css3=obj[key];
}
break;
case'unhide':
if(assert('unhide','string')){
unhide=obj[key];
}
break;
case'onbeforewordhyphenation':
if(assert('onbeforewordhyphenation','function')){
onBeforeWordHyphenation=obj[key];
}
break;
case'onafterwordhyphenation':
if(assert('onafterwordhyphenation','function')){
onAfterWordHyphenation=obj[key];
}
break;
default:
onError(new Error('Hyphenator.config: property '+key+' not known.'));
}
}
}
if(storage&&persistentConfig){
storeConfiguration();
}
},
run:function(){
var process=function(){
try{
if(contextWindow.document.getElementsByTagName('frameset').length>0){
return;
}
autoSetMainLanguage(undefined);
gatherDocumentInfos();
prepare(hyphenateLanguageElements);
if(displayToggleBox){
toggleBox();
}
}catch(e){
onError(e);
}
};
if(!storage){
createStorage();
}
runWhenLoaded(window,process);
},
addExceptions:function(lang,words){
if(lang===''){
lang='global';
}
if(exceptions.hasOwnProperty(lang)){
exceptions[lang]+=", "+words;
}else{
exceptions[lang]=words;
}
},
hyphenate:function(target,lang){
var hyphenate,n,i,lo;
lo=Hyphenator.languages[lang];
if(Hyphenator.languages.hasOwnProperty(lang)){
if(!lo.prepared){
prepareLanguagesObj(lang);
}
hyphenate=function(word){
var r;
if(urlOrMailRE.test(word)){
r=hyphenateURL(word);
}else{
r=hyphenateWord(lo,lang,word);
}
return r;
};
if(typeof target==='object'&&!(typeof target==='string'||target.constructor===String)){
i=0;
n=target.childNodes[i];
while(!!n){
if(n.nodeType===3&&n.data.length>=min){
n.data=n.data.replace(lo.genRegExp,hyphenate);
}else if(n.nodeType===1){
if(n.lang!==''){
Hyphenator.hyphenate(n,n.lang);
}else{
Hyphenator.hyphenate(n,lang);
}
}
i+=1;
n=target.childNodes[i];
}
}else if(typeof target==='string'||target.constructor===String){
return target.replace(lo.genRegExp,hyphenate);
}
}else{
onError(new Error('Language "'+lang+'" is not loaded.'));
}
},
getRedPatternSet:function(lang){
return Hyphenator.languages[lang].redPatSet;
},
isBookmarklet:function(){
return isBookmarklet;
},
getConfigFromURI:function(){
var loc=null,re={},jsArray=contextWindow.document.getElementsByTagName('script'),i,j,l,s,gp,option;
for(i=0,l=jsArray.length;i<l;i+=1){
if(!!jsArray[i].getAttribute('src')){
loc=jsArray[i].getAttribute('src');
}
if(loc&&(loc.indexOf('Hyphenator.js?')!==-1)){
s=loc.indexOf('Hyphenator.js?');
gp=loc.substring(s+14).split('&');
for(j=0;j<gp.length;j+=1){
option=gp[j].split('=');
if(option[0]!=='bm'){
if(option[1]==='true'){
option[1]=true;
}else if(option[1]==='false'){
option[1]=false;
}else if(isFinite(option[1])){
option[1]=parseInt(option[1],10);
}
if(option[0]==='togglebox'||
option[0]==='onhyphenationdonecallback'||
option[0]==='onerrorhandler'||
option[0]==='selectorfunction'||
option[0]==='onbeforewordhyphenation'||
option[0]==='onafterwordhyphenation'){
option[1]=new Function('',option[1]);
}
re[option[0]]=option[1];
}
}
break;
}
}
return re;
},
toggleHyphenation:function(){
if(Hyphenator.doHyphenation){
if(!!css3hyphenateClassHandle){
css3hyphenateClassHandle.setRule('.'+css3hyphenateClass,css3_h9n.property+': none;');
}
removeHyphenationFromDocument();
Hyphenator.doHyphenation=false;
storeConfiguration();
toggleBox();
}else{
if(!!css3hyphenateClassHandle){
css3hyphenateClassHandle.setRule('.'+css3hyphenateClass,css3_h9n.property+': auto;');
}
hyphenateLanguageElements('*');
Hyphenator.doHyphenation=true;
storeConfiguration();
toggleBox();
}
}
};
}(window));
if(Hyphenator.isBookmarklet()){
Hyphenator.config({displaytogglebox:true,intermediatestate:'visible',storagetype:'local',doframes:true,useCSS3hyphenation:true});
Hyphenator.config(Hyphenator.getConfigFromURI());
Hyphenator.run();
}
Hyphenator.languages['en-us']=Hyphenator.languages['en']={
leftmin:2,
rightmin:3,
specialChars:"",
patterns:{
3:"x1qei2e1je1f1to2tlou2w3c1tue1q4tvtw41tyo1q4tz4tcd2yd1wd1v1du1ta4eu1pas4y1droo2d1psw24sv1dod1m1fad1j1su4fdo2n4fh1fi4fm4fn1fopd42ft3fu1fy1ga2sss1ru5jd5cd1bg3bgd44uk2ok1cyo5jgl2g1m4pf4pg1gog3p1gr1soc1qgs2oi2g3w1gysk21coc5nh1bck1h1fh1h4hk1zo1ci4zms2hh1w2ch5zl2idc3c2us2igi3hi3j4ik1cab1vsa22btr1w4bp2io2ipu3u4irbk4b1j1va2ze2bf4oar1p4nz4zbi1u2iv4iy5ja1jeza1y1wk1bk3fkh4k1ikk4k1lk1mk5tk1w2ldr1mn1t2lfr1lr3j4ljl1l2lm2lp4ltn1rrh4v4yn1q1ly1maw1brg2r1fwi24ao2mhw4kr1cw5p4mkm1m1mo4wtwy4x1ar1ba2nn5mx1ex1h4mtx3i1muqu2p3wx3o4mwa1jx3p1naai2x1ua2fxx4y1ba2dn1jy1cn3fpr2y1dy1i",
4:"4dryn2itni4on1inn1im_up3nik4ni4dy5giye4tyes4_ye44ab_nhe4nha4abe2n2gyn1guy1ery5eep2pe4abry3lay3lone4wne4v1nesy3chn1erne2q3neo1nenp2seps4hy2cey5lu2nedne2cyme44nk2y5at2adine2b2ne_y5ac2p1tp2ten1den1cun1cryn5dp2th4adup4twpub3ae4rxu3ayn5gaff4pue4n2au4p1ppuf4n2atag1ipu4mag1na2gon4asx3tix1t2pu2na4gya3haa3heah4la3ho_ti2a5ian2an5puspu2tnak4_th2n1kl_te4_ta4mu4u4mupmun23mum2alex4ob_sy25ynxal1i_st4y1o4xi5cxi5a4alm_si2_sh2m5sixhu4m4sh4m3r4amam2py2rabm2pixhi2yo5dr2ai4m1pmo2vmos2x2edmo2r4n1la2mor2asx3c2xas5yom4x4apxam3nme44mokrbi2nne44andy4osp4ot3noemn4omn4a4m1n4nog4m1l2angws4l1posw3shwri4wra4yp3iwom11wo2m2izrb4ow4nopo4pr2cem2isrd2iano4mig4y3pomi3awiz55mi_no4n4m1fme4v2re_wir42mes1menme2mme2gre1o2med4me_4nop4m5c4m1bwil21noureu2whi4w3ev4maprev2w1era2plpo4crfu4r4fyy5pu2maha3pu2mab2a2rn1p4npi44lyb4lya2p3nwam42l1w1lut4luplu3or1glluf4lu5a2wacltu2y3rol1tr4vv4r3guyr4rl1te4rh_nru4ar1il2sel4sc4l1rl5prl4plys4c4lovri3ar4ib4lof3lo_ar2par3q_os3ll4oll2i4as_ri1o3vokl2levoi44p1mlka35vo_ns4cas4ll1izr4iqr2is3vivl1it3lika2tan2sen2slrle42l3hlgo3l5gal5frns3mvi4p3ley_od2r2meles24athr4myle2al3drv1inldi4l2de2vilnt2il3civik4lce42l1b4lavv3ifrno4r3nua1trr2ocnt4sy4sok4syks4la2tuk4sck3ouko5ryss4a2tyau4b4klyys1tnu1akis4au3rki4pro4ek4ima2va5ki_nu4dn4umn3uokes4k1erav1irok2ke4g1keek2ed_me2aw3ikal4aws4k5agk3ab3ka_aye4ays4veg3jo4p5ba_4vedjew3n1v24ve_ja4pzar23vatizi4n1w41batba4z2b1bb2beix4o4i5w4b1d4be_rox5nym4nyp4n3za4ittr3por1r4i1ti1bel2ith2itei2su4rs2r1sars4cr2seis1p3betvag4i2sor1shbe3wr1sioad34b3hbi2bbi4d3bie3isf4ise2is_1bilr1sp5va_r5sw_le2uz4eir1ibi2tuxu3r1tiu1v2i1raze4nze4pb2l2uu4mo1biip3iz1eripe4b4louts44b1m4b3no3br3bodi4osbo4eru3aio4mi1ol4io_3booo1ce4inyin1u2insru2n2inn4inl4inkrv4e2inioch42iner3vo4indpi2np4idbt4lb4tob3trry4cry3t2in_o4elbu4ni2muim1i5saiil3v4ilnil1iil5fs1apo3er4b5w5by_bys4_in1sau4i1lazet4u2suo3ev2z1ii2go4igius1p5saw4s5bo2fi4ifti3fl4if_i3etsch2usc22ie4i2dui4dri2diid5dpi3au3ruz4ils1cuz4is4s5d4se_se4a2ce_2ici4ich3ceii1bri5bo1ceni1blse2g5seiibe43cepi2aniam4ur2li2al2i1acet4hy2scew41phy4ch_5phuhu4thu4gche2h4tyh4shur1durc44hr44h5p5sev5sexu1ra4s3fup3p2s3gph3t2sh_ho4g2h1n_he23ciau3pl4h1mci5ch2lozo4m4ciihi2vhi4p2cim2cin4phsu1peu1ouo1geu5osheu4sho4he4th1es4shwun5zun5ysi1bunu45cizo4glck3ihep5he2nh4ed1sioph2l5hazsi2rcly4zte4_ge21siscoe22cog5siu1siv5siz_ga24skes1l2s2leha4m2s1ms3ma1ogyo1h2u1ni3gus3gun2guegu4acov1gth3_eu3g4ros1n4_es3u2nez4zyum2pu1mi3som_ev2oig4cri2gov15goos4opgon2ul5v5goeu3lugob53go_2c1t4ph_g1nog1nic2te4sov4ulsgn4ag4myc4twcud5c4ufc4uipe2t3glo1gleul2igla4_eg23giz3cun5givgi4u3gir5gio1cusul4e2spagil4g1ic5gi__eb4cze41d2a5da_u1laggo44daf2dagg2gege4v1geo1gen2ged3dato1la2ge_ol2dol2i5daypek4p4eed1d42de_4gazol2tuiv3ol2vo2lys1sa2gamgaf4o2meui4n2ui2pe2cd4em4fugi4jku3fl3ufaf2tyf4to1denu4du4pe_2f3sfri2de1ps1si4f5pfos5d3eqs4sls4snfo2rss2tdes25fon4p1b_ci23payss5w2st_de1tf4l2de1v2fin4dey4d1fd4gast2idg1id2gyd1h25di_ud5dfi3au4cy_ch4pav43didu3cud1iff2fyu3crd1inst4r4f1ffev4fer11dio2fedfe4bdir2s2ty4fe_dis1on1au3ca4f5bon1c2ondd5k25far4fagpa1peys45eyc1exps4ul2dlyp4ale3whon3s3do_e1wa5doee5vud4oge1visu2msu2nub4euav4su2rp4ai6rk_d4or3dosu1atdo4v3doxp4adoo4k4swoo2padre4eus4e3upe5un2ophet5z4syc3syl4y3hoy1ads4pd4swd4syd2tho4wo3ta_du2c4etn2tabta2luac4es4wdu4g2ess4uabdu4n4duptav4st5bow1io1pr5dyn2tawe1sp2t1bop1uead1tz4et4chopy5ea4l4t1d4te_2tyle1si4esh1tee4tyat1cr4twoteg4es2c4eru1teoer1s2eroea2tte4po1rat1wh3tusea2v3teu3texer1i2e1ber1h4tey2t1f4t1ge3br2th_th2e4thle1ce3tumec2i2ths2erb1tia4tueer1aou5vtud2tif22tige1potu1aou4lttu41timt5toos4le1cre2pat4swe5owe1cue4ottsh4eos4e1ort4sce3ol4edieo2ge5of1tio4eno4enn5tiq4edoti4u1tive3my1tiz4othee2ct5laee2ft5lo4t1mee2mtme4e1meem5bcoi4to3be5exo1ry2tof1effel2iel2ftos24t1pe1la1traos2ceig2ei5de5ico2soe1h45egyeg5n",
5:"_ach4e4go_e4goseg1ule5gurtre5feg4iceher4eg5ibeger44egaltre4mei5gle3imbe3infe1ingtra3beir4deit3eei3the5ity5triae4jud3efiteki4nek4la2trime4la_e4lactri4v4toute4law5toure3leaefil45elece4ledto2rae5len4tonye1lestro3ve4fic4tonoto3mytom4bto2mato5ice5limto2gre3lioe2listru5i4todo4ellaee4tyello4e5locel5ogeest4el2shel4tae5ludel5uge4mace4mage5man2t1n2ee2s4ee4p1e2mele4metee4naemi4eee4lyeel3i3tled3tle_e4mistlan4eed3iem3iztrus4emo4gti3zaem3pie4mule4dulemu3ne4dritiv4aedon2e4dolti3tle5neae5neeen3emtis4pti5sotis4m3tisee3newti3sae5niee5nile3nioedi5zen3ite5niu5enized1ited3imeno4ge4nosen3oven4swti5oc4t1s2en3uaen5ufe3ny_4en3zed3ibe3diae4oi4ede4s3tini4ed3deo3ret2ina2e2dae4culeo4toe5outec4te4t3t2t4tes2t1ine5pel4timpe2corephe4e4plie2col5tigutu3arti5fytu4bie3pro3tienep4sh5tidie4putt4icoeci4t4tick2ti2bec3imera4bti4aber3ar4tuf45tu3ier4bler3che4cib2ere_4thooecca54thil3thet4thea3turethan4e4cade4bitere4qe4ben5turieret4tur5oeav5oeav5itu5ry4tess4tes_ter5ve1rio4eriter4iueri4v1terier3m4ter3cte5pe4t1waer3noeast3er5obe5rocero4rer1oue3assea5sp1tent4ertler3twtwis4eru4t3tende1s4a3tenc5telsear2te2scateli4e3scres5cue1s2ee2sec3tel_te5giear5kear4cte5diear3ae3sha2t1ede5ande2sice2sid5tecttece44teattype3ty5phesi4uea4gees4mie2sole3acte2sone1a4bdys5pdy4sedu4petaun4d3uleta5sytas4e4tare4tarctar4ata5pl2estrta5mo4talke2surtal3idu5eleta4bta5lae3teoua5naet1ic4taf4etin4ta5doe5tir4taciuan4id1ucad1u1ae3trae3tre2d1s2syn5ouar2d4drowet3uaet5ymdro4pdril4dri4b5dreneu3rouar3ieute44draieu5truar3te2vasdop4pe5veadoo3ddoni4u4belsum3iev1erdoli4do4laev3idevi4le4vinevi4ve5voc2d5ofdo5dee4wage5wee4d1n4ewil54d5lue3wit2d3lou3ber5eye_u1b4i3dledfa3blfab3rfa4ce3dle_fain4suit3su5issu2g34d5lasu4b3fa3tasu1al4fato1di1vd2iti5disiuci4bfeas4di1redi4pl4feca5fectdio5gfe3life4mofen2d4st3wuc4it5ferr5diniucle3f4fesf4fie4stry1dinaf4flydi3ge3dictd4icedia5bs4tops1tle5stirs3tifs4ties1ticfic4is5tias4ti_4ficsfi3cuud3ers3thefil5iste2w4filyudev45finas4tedfi2nes2talfin4ns2tagde2tode4suflin4u1dicf2ly5ud5isu5ditde1scd2es_der5sfon4tu4don5dermss4lid4erhfor4is4siede2pudepi4fra4tf5reade3pade3nufril4frol5ud4side3nou4eneuens4ug5infu5el5dem_s5setfu5nefu3rifusi4fus4s4futade5lode5if4dee_5gal_3galiga3lo2d1eds3selg5amos2s5cssas3u1ing4ganouir4mgass4gath3uita4deaf5dav5e5dav44dato4darygeez44spotspor4s4pon4gelydark5s4ply4spio4geno4genydard5ge3omg4ery5gesigeth54getoge4tydan3g4g1g2da2m2g3gergglu5dach4gh3inspil4gh4to4cutr1gi4agia5rula5bspho5g4icogien5s2pheulch42sperspa4n5spai3c4utu1lenul4gigir4lg3islcu5pycu3picu4mic3umecu2maso5vi5glasu5liagli4bg3lig5culiglo3r4ul3mctu4ru1l4og4na_c3terul1tig2ning4nio4ultug4noncta4b4c3s2cru4dul5ulsor5dgo3isum5absor5ccris4go3nic4rinson4gsona45gos_cri5fcre4vum4bi5credg4raigran25solvsoft3so4ceunat44graygre4nco5zi4gritcoz5egruf4cow5ag5stecove4cos4es5menun4ersmel44corbco4pl4gu4tco3pacon5tsman3gy5racon3ghach4hae4mhae4th5aguha3lac4onecon4aun4ims3latu2ninhan4gs3ket5colocol5ihan4kuni3vhap3lhap5ttras4co4grhar2dco5agsir5aclim45sionhas5shaun44clichaz3acle4m1head3hearun3s4s3ingun4sws2ina2s1in4silysil4eh5elohem4p4clarhena45sidiheo5r1c4l4h4eras5icc2c1itu4orsh3ernshor4h3eryci3phshon34cipecion45cinoc1ingc4inahi5anhi4cohigh5h4il2shiv5h4ina3ship3cilihir4lhi3rohir4phir4rsh3iohis4ssh1inci4lau5pia4h1l4hlan44cier5shevcia5rhmet4ch4tish1erh5ods3cho2hoge4chi2z3chitho4mahome3hon4aho5ny3hoodhoon45chiouptu44ura_ho5ruhos4esew4ihos1p1housu4ragses5tu4rasur4behree5se5shs1e4s4h1s24chedh4tarht1enht5esur4fru3rifser4os4erlhun4tsen5gur1inu3riosen4dhy3pehy3phu1ritces5tur3iz4cesa4sencur4no4iancian3i4semeia5peiass45selv5selfi4atu3centse1le4ceniib5iaib3inseg3ruros43cencib3li3cell5cel_s5edli5bun4icam5icap4icar4s4ed3secticas5i4cayiccu44iceour4pe4ced_i5cidsea5wi2cipseas4i4clyur4pi4i1cr5icrai4cryic4teictu2ccon4urti4ic4umic5uoi3curcci4ai4daiccha5ca4thscof4ide4s4casys4cliscle5i5dieid3ios4choid1itid5iui3dlei4domid3owu5sadu5sanid5uous4apied4ecany4ield3s4cesien4ei5enn4sceii1er_i3esci1estus3ciuse5as4cedscav5if4frsca4pi3fieu5siau3siccan4eiga5bcan5d4calous5sli3gibig3ilig3inig3iti4g4lus1trig3orig5oti5greigu5iig1ur2c5ah4i5i44cag4cach4ca1blusur4sat3usa5tab5utoi3legil1erilev4uta4b4butail3iail2ibil3io3sanc2ilitil2izsal4t5bustil3oqil4tyil5uru3tati4magsa5losal4m4ute_4imetbu3res3act5sack2s1ab4imitim4nii3mon4utelbumi4bu3libu4ga4inav4utenbsor42b5s2u4tis4briti3neervi4vr3vic4inga4inger3vey4ingir3ven4ingo4inguu4t1li5ni_i4niain3ioin1isbo4tor5uscrunk5both5b5ota5bos42i1no5boriino4si4not5borein3seru3in2int_ru4glbor5di5nusut5of5bor_uto5gioge4io2grbon4au5tonru3enu4touion3iio5phior3ibod3iio5thi5otiio4toi4ourbne5gb3lisrt4shblen4ip4icr3triip3uli3quar4tivr3tigrti4db4le_b5itzira4bi4racird5ert5ibi4refbi3tri4resir5gibi5ourte5oir4isr3tebr4tagbin4diro4gvac3uir5ul2b3ifis5agis3arisas52is1cis3chbi4eris3erbi5enrson3be5yor5shais3ibisi4di5sisbe3tw4is4krs3es4ismsbe5trr3secva4geis2piis4py4is1sbe3sp4bes4be5nuval5ois1teis1tirrys4rros44be5mis5us4ita_rron4i4tagrri4vi3tani3tatbe3lorri4or4reoit4esbe1libe5gu4itiarre4frre4cbe3giit3igbe3dii2tim2itio4itisrp4h4r3pet4itonr4peait5rybe3debe3dai5tudit3ul4itz_4be2dbeat3beak4ro4varo4tyros4sro5roiv5ioiv1itror3i5root1roomval1ub3berva5mo4izarva5piron4eban3ijac4qban4ebal1ajer5srom4prom4iba4geazz5i5judgay5alax4idax4ickais4aw4ly3awaya1vorav5ocav3igke5liv3el_ve4lov4elyro1feke4tyv4erdv4e2sa5vanav3ag5k2ick4illkilo5au1thk4in_4ves_ro3crkin4gve4teaun5dk5ishau4l2au3gu4kleyaugh3ve4tyk5nes1k2noat3ulkosh4at5uekro5n4k1s2at5uaat4that5te5vianat4sk5vidil4abolaci4l4adela3dylag4nlam3o3landrob3la4tosr4noular4glar3ilas4ea4topr3nivr3nita2tomr5nica4toglbin44l1c2vi5gnat3ifat1ica5tiar3neyr5net4ati_ld5isat4hol4driv2incle4bileft55leg_5leggr4nerr3nel4len_3lencr4nar1lentle3phle4prvin5dler4e3lergr3mitl4eroat5evr4mio5lesq3lessr3menl3eva4vingrma5cvio3lvi1ou4leyevi5rovi3so4l1g4vi3sulgar3l4gesate5cat5apli4agli2amr3lo4li4asr4lisli5bir4ligr2led4lics4vitil4icul3icyl3idaat5ac3lidirk4lel4iffli4flr3ket3lighvit3r4vityriv3iri2tulim3ili4moris4pl4inar3ishris4clin3ir4is_li5og4l4iqlis4pas1trl2it_as4shas5phri2pla4socask3ia3sicl3kallka4ta3sibl4lawashi4l5leal3lecl3legl3lel5riphas4abar2shrin4grin4ear4sarin4dr2inal5lowarre4l5met3rimol4modlmon42l1n2a3roorim5ilo4civo4la5rigil5ogo3loguri5et5longlon4iri1erlood5r4icolop3il3opmlora44ricir4icerib3a5los_v5oleri4agria4blos4tlo4taar2mi2loutar2izar3iolpa5bl3phal5phi4rhall3pit5voltar4im3volv2l1s2vom5ivori4l4siear4fllt5agar4fivo4rylten4vo4talth3ia3reeltis4ar4drw5ablrgo4naraw4lu3brluch4lu3cilu3enwag5olu5idlu4ma5lumia5raur5gitwait5luo3rw5al_luss4r5gisar4atl5venrgi4nara3pwar4tar3alwas4tly5mely3no2lys4l5ysewa1teaque5ma2car3gicma4clr3get5magnwed4nmaid54maldrg3erweet3wee5vwel4lapoc5re4whwest3ap3in4aphires2tr4es_mar3vre5rumas4emas1t5matemath3rero4r4eriap5atr1er4m5bilre1pumbi4vapar4a5nuran3ul4med_an3uare5lure1lian4twre5itmel4tan2trre4fy4antomen4are3fire2fe4menemen4imens4re1de3ment2r2edme5onre4awwin4g5reavme4tare3anme1tere1alm4etr3wiserdin4rdi4aan4stwith3an2span4snan2samid4amid4gan5otwl4esr4dalm4illmin4a3mindrcum3rc4itr3charcen4min4tm4inumiot4wl3ina3niumis5lan3ita3nip4mithan3ioan1gla3neuws4per2bina3nena5neem4ninw5s4tan1dl4mocrrbi4fmo2d1mo4gomois2xac5ex4agor4bagmo3mer4baba3narrau4ta5monrare4rar5cra5nor4aniam1inr2amiam5ifra4lomo3spmoth3m5ouf3mousam3icxer4ixe5roraf4tr5aclm3petra3bixhil5mpi4aam3ag3quetm5pirmp5is3quer2que_qua5vmpov5mp4tram5ab3alyz4m1s25alyt4alysa4ly_ali4exi5di5multx4ime4aldia4laral3adal5abak1enain5opu3trn4abu4nac_na4can5act5putexpe3dna4lia4i4n4naltai5lya3ic_pur4rag5ulnank4nar3c4narenar3inar4ln5arm3agognas4c4ag4l4ageupul3cage4oaga4na4gab3nautnav4e4n1b4ncar5ad5umn3chaa3ducptu4rpti3mnc1innc4itad4suad3owad4len4dain5dana5diua3ditndi4ba3dion1ditn3dizn5ducndu4rnd2we3yar4n3eara3dianeb3uac4um5neckac3ulp4siba3cio5negene4laac1inne5mine4moa3cie4nene4a2cine4poyc5erac1er2p1s2pro1tn2erepro3lner4rych4e2nes_4nesp2nest4neswpri4sycom4n5evea4carab3uln4gabn3gelpre3vpre3rycot4ng5han3gibng1inn5gitn4glangov4ng5shabi5an4gumy4erf4n1h4a5bannhab3a5bal3n4iani3anni4apni3bani4bl_us5ani5dini4erni2fip3petn5igr_ure3_un3up3per_un5op3pennin4g_un5k5nis_p5pel_un1en4ithp4ped_un1ani3tr_to4pympa3_til4n3ketnk3inyn5ic_se2ny4o5gy4onsnmet44n1n2_ru4d5pounnni4vnob4lpo4tan5ocly4ped_ro4qyper5noge4pos1s_ri4gpo4ry1p4or_res2no4mono3my_ree2po4ninon5ipoin2y4poc5po4gpo5em5pod_4noscnos4enos5tno5tayp2ta3noun_ra4cnowl3_pi2tyra5m_pi4eyr5ia_out3_oth32n1s2ns5ab_or3t_or1d_or3cplu4mnsid1nsig4y3s2eys3ion4socns4pen5spiploi4_odd5nta4bpli4n_ni4cn5tib4plignti2fpli3a3plannti4p1p2l23ysis2p3k2ys3ta_mis1nu5enpi2tun3uinp3ithysur4nu1men5umi3nu4nyt3icnu3trz5a2b_li4t_li3o_li2n_li4g_lev1_lep5_len4pion4oard3oas4e3pi1ooat5ip4inoo5barobe4l_la4mo2binpind4_ju3rob3ul_is4i_ir5rp4in_ocif3o4cil_in3so4codpi3lopi3enocre33piec5pidipi3dep5ida_in2kod3icodi3oo2do4odor3pi4cypian4_ine2o5engze3rooe4ta_im3m_id4l_hov5_hi3b_het3_hes3_go4r_gi4bpho4ro5geoo4gero3gie3phobog3it_gi5azo5ol3phizo4groogu5i4z1z22ogyn_fes3ohab5_eye55phieph1icoiff4_en3sph4ero3ing_en3go5ism_to2qans3v_el5d_eer4bbi4to3kenok5iebio5mo4lanper1v4chs_old1eol3erpe5ruo3letol4fi_du4co3liaper3op4ernp4erio5lilpe5ono5liop4encpe4la_do4tpee4do5livcin2q3pediolo4rol5pld3tabol3ub3pedeol3uno5lusedg1le1loaom5ahoma5l2p2edom2beom4bl_de3o3fich3pe4ao4met_co4ro3mia_co3ek3shao5midom1inll1fll3teapa2teo4monom3pi3pare_ca4tlue1pon4aco3nanm2an_pa4pum2en_on5doo3nenng1hoon4guon1ico3nioon1iso5niupa3nypan4ao3nou_bri2pain4ra1oronsu4rk1hopac4tpa4ceon5umonva5_ber4ood5eood5i6rks_oop3io3ordoost5rz1scope5dop1erpa4ca_ba4g_awn4_av4i_au1down5io3pito5pon1sync_as1s_as1p_as3ctch1c_ar5so5ra_ow3elo3visov4enore5auea1mor3eioun2d_ant4orew4or4guou5etou3blo5rilor1ino1rio_ang4o3riuor2miorn2eo5rofoto5sor5pe3orrhor4seo3tisorst4o3tif_an5cor4tyo5rum_al3tos3al_af1tos4ceo4teso4tano5scros2taos4poos4paz2z3wosi4ue3pai",
6:"os3ityos3itoz3ian_os4i4ey1stroos5tilos5titxquis3_am5atot3er_ot5erso3scopor3thyweek1noth3i4ot3ic_ot5icao3ticeor3thiors5enor3ougor3ityor3icaouch5i4o5ria_ani5mv1ativore5sho5realus2er__an3teover3sov4erttot3icoviti4o5v4olow3dero4r3agow5esto4posiop3ingo5phero5phanthy3sc3operaontif5on3t4ionten45paganp3agattele2gonspi4on3omyon4odipan3elpan4tyon3keyon5est3oncil_ar4tyswimm6par5diompro5par5elp4a4ripar4isomo4gepa5terst5scrpa5thy_atom5sta1tio5miniom3icaom3ic_ss3hatsky1scpear4lom3ena_ba5naol3umer1veilpedia4ped4icolli4er1treuo5liteol3ishpeli4epe4nano5lis_pen4thol3ingp4era_r1thoup4erago3li4f_bas4er1krauperme5ol5id_o3liceper3tio3lescolass4oi3terpe5tenpe5tiz_be5raoi5son_be3smphar5iphe3nooi5letph4es_oi3deroic3esph5ingr3ial_3ognizo5g2ly1o1gis3phone5phonio5geneo4gatora3mour2amenofit4tof5itera3chupi4ciepoly1eod5dedo5cureoc3ula1pole_5ocritpee2v1param4oc3raco4clamo3chetob5ingob3a3boast5eoke1st3nu3itpi5thanuf4fentu3meoerst2o3chasplas5tn3tinepli5ernti4ernter3sntre1pn4s3esplum4bnsati4npre4cns4moonon1eqnor5abpo3et5n5lessn5oniz5pointpoly5tnon4agnk3rup3nomicng1sprno5l4inois5i4n3o2dno3blenni3aln5keroppa5ran3itor3nitionis4ta5nine_ni3miznd3thrmu2dron3geripray4e5precipre5copre3emm3ma1bpre4lan5gerep3rese3press_can5cmedi2c5pri4e_ce4la3neticpris3op3rocal3chain4er5ipros3en4erarnera5bnel5iz_cit5rne4gatn5d2ifpt5a4bjanu3aign4itn3chisn5chiln5cheon4ces_nau3seid4iosna3talnas5tinan4itnanci4na5mitna5liahnau3zput3er2n1a2bhex2a3hatch1multi3hair1sm4pousg1utanmpo3rim4p1inmp5iesmphas4rach4empar5iraf5figriev1mpara5mo5seyram3et4mora_rane5oran4gemo3ny_monol4rap3er3raphymo3nizgno5morar5ef4raril1g2nacg1leadmoni3ara5vairav3elra5ziemon5gemon5etght1wemoi5sege3o1dmma5ryr5bine3fluoren1dixmis4ti_de3ra_de3rie3chasrch4err4ci4bm4inglm5ineedu2al_3miliame3tryrdi4er_des4crd3ingdi2rerme5thimet3alre5arr3mestim5ersadi2rende2ticdes3icre4cremen4temensu5re3disred5itre4facmen4dede2mosmen5acmem1o3reg3ismel5onm5e5dyme3died2d5ibren4te5mediare5pindd5a5bdata1bmba4t5cle4arma3tisma5scemar4lyre4spichs3huma5riz_dumb5re3strre4terbrus4qre3tribio1rhre5utiman3izre4valrev3elbi1orbbe2vie_eas3ire5vilba1thyman5is5maniamal4tymal4lima5linma3ligmag5inav3ioul5vet4rg3inglus3teanti1dl5umn_ltur3a_el3emltera4ltane5lp5ingloun5dans5gra2cabllos5etlor5ouric5aslo5rie_enam35ricidri4cie5lope_rid5erri3encri3ent_semi5lom3errig5an3logicril3iz5rimanlob5allm3ingrim4pell5out5rina__er4ril5linal2lin4l3le4tl3le4nriph5eliv3er_ge5og_han5k_hi3er_hon3olin3ea1l4inel4im4p_idol3_in3ci_la4cy_lath5rit3iclim4blrit5urriv5elriv3et4l4i4lli4gra_leg5elif3errk4linlid5er4lict_li4cor5licioli4atorl5ish_lig5a_mal5o_man5a_mer3c5less_rm5ersrm3ingy3thinle5sco3l4erilera5b5lene__mon3ele4matld4erild4erela4v4ar1nis44lativ_mo3rola5tanlan4telan5etlan4dllab3ic_mu5takin4dek3est_ro5filk3en4dro5ker5role__of5te4jestyys3icaron4al5izont_os4tlron4tai4v3ot_pe5tero3pelrop3ici5voreiv5il__pio5n_pre3mro4the_ran4tiv3en_rov5eliv3ellit3uati4tramr5pentrp5er__rit5ui4tismrp3ingit5ill_ros5tit3ica4i2tici5terirre4stit3era4ita5mita4bi_row5dist4lyis4ta_is4sesrsa5tiissen4is4sal_sci3erse4crrs5er_islan4rse5v2yo5netish5opis3honr4si4bis5han5iron_ir4minrtach4_self5iri3turten4diri5dei4rel4ire4de_sell5r4tieriq3uidrtil3irtil4lr4tilyr4tistiq5uefip4re4_sing4_ting4yn3chrru3e4lion3at2in4th_tin5krum3pli4no4cin3ityrun4ty_ton4aruti5nymbol5rvel4i_top5irv5er_r5vestin5geni5ness_tou5s_un3cein3cerincel45ryngei4n3auim3ulai5miniimi5lesac3riim5ida_ve5rasalar4ima5ryim3ageill5abil4istsan4deila5rai2l5am_wil5ii4ladeil3a4bsa5voright3iig3eraab5erd4ific_iff5enif5eroi3entiien5a45ie5gaidi5ou3s4cieab5latidi4arid5ianide3al4scopyab5rogid5ancic3ulaac5ardi2c5ocic3ipaic5inase2c3oi4carai4car_se4d4ei2b5riib5iteib5it_ib5ertib3eraac5aroi4ativ4ian4tse4molsen5ata5ceouh4warts5enedhus3t4s5enin4sentd4sentlsep3a34s1er_hun5kehu4min4servohro3poa5chethov5el5se5umhouse3sev3enho5senhort3eho5rishor5at3hol4ehol5arh5odizhlo3riac5robhis3elhion4ehimer4het4edsh5oldhe2s5ph5eroushort5here5aher4bahera3p3side_5sideshen5atsi5diz4signahel4lyact5ifhe3l4ihe5do55sine_h5ecathe4canad4dinsion5aad5er_har4lehard3e3sitioha5rasha3ranhan4tead3icahang5oadi4ersk5inesk5ing5hand_han4cyhan4cislith5hala3mh3ab4lsmall32g5y3n5gui5t3guard5smithad5ranaeri4eag5ellag3onia5guerso4labsol3d2so3licain5in4grada3s4on_gor5ougo5rizgondo5xpan4dait5ens5ophyal3end3g4o4ggnet4tglad5i5g4insgin5ge3g4in_spen4d2s5peog3imen5gies_3spher5giciagh5outsp5ingge5nizge4natge5lizge5lisgel4inxi5miz4gativgar5n4a5le5oga3nizgan5isga5mets5sengs4ses_fu4minfres5cfort5assi4erss5ilyfore5tfor5ayfo5ratal4ia_fon4dessur5aflo3ref5lessfis4tif1in3gstam4i5stands4ta4p5stat_fin2d5al5levs5tero4allicstew5afight5fi5del5ficie5ficiafi3cer5stickf3icena5log_st3ingf3icanama5ra5stockstom3a5stone2f3ic_3storef2f5iss4tradam5ascs4trays4tridf5fin_fend5efeath3fault5fa3thefar5thfam5is4fa4mafall5eew3inge5verbeven4ie5vengevel3oev3ellev5asteva2p5euti5let5roset3roget5rifsy5rinet3ricet5onaam5eraam5ilyami4noamor5ieti4noe5tidetai5loethod3eten4dtal5enes5urramp5enan3ageta5loge5strotan4detanta3ta5pere3ston4es2toes5times3tigta3rizestan43analy4taticta4tures4prean3arces3pertax4ises5onaes3olue5skintch5etanar4ies4i4ntead4ie2s5ima3natiande4sesh5enan3disan4dowang5iete5geres5ences5ecres5cana4n1icte2ma2tem3at3tenanwrita45erwau4tenesert3era3nieser3set5erniz4erniter4nis5ter3de4rivaan3i3fter3isan4imewo5vener3ineeri4ere3rient3ess_teth5e5ericke1ria4er3ester5esser3ent4erenea5nimier5enaer3emoth3easthe5atthe3iser5el_th5ic_th5icaere3in5thinkere5coth5odea5ninee3realan3ishan4klier4che5anniz4erandti4atoanoth5equi3lep5utat4ic1uan4scoe4probep3rehe4predans3poe4precan4surantal4e3penttim5ulep5anceo5rol3tine_eop3aran4tiewin4deap5eroen3ishen5icsen3etren5esten5esien5eroa3pheren3dicap3itae4nanten5amoem5ulaa3pituti3zen5emnize5missem5ishap5olaem5ine3tles_t5let_em1in2apor5iem3icaem5anael3op_el4labapos3te3liv3el5ishaps5esweath3e3lierel3icaar3actwa5verto3nate3libee4l1erel3egato3rietor5iza5radeelaxa4aran4gto3warelan4dej5udie5insttra5chtraci4ar5av4wa5gere5git5arbal4ar5easeg5ing4voteetrem5iar3enta5ressar5ial4tricsvor5abe3finetro5mitron5i4tronyar3iantro3sp5eficia3rieted5uloed3icae4d1erec3ulaec4tane4cremeco5roec3orae4concar5o5de4comme4cluse4clame5citeec5ifya5ronias3anta5sia_tu4nis2t3up_ecan5ce4belstur3ise4bel_eav3ene4a3tue5atifeath3ieat5eneart3eear4ilear4icear5eseam3ereal3oueal5erea5geread5iedum4be4ducts4duct_duc5eras3tenasur5adrea5rat3abl4d5outdo3natdom5izdo5lor4dlessu4bero3dles_at3alou3ble_d4is3tdirt5idi5niz3dine_at5ech5di3endi4cam1d4i3ad3ge4tud5estdev3ilde3strud3iedud3iesdes3tide2s5oat3egovis3itde4nardemor5at3en_uen4teuer4ilde5milat3eraugh3en3demicater5nuil5izdeli4ede5comde4cildecan4de4bonv3io4rdeb5it4dativ2d3a4bat3estu5laticu4tie5ulcheul3dercuss4icu5riaath5em3cultua5thenul3ingul5ishul4lar4vi4naul4liscu5ityctim3ic4ticuuls5esc5tantultra3ct5angcros4ecrop5ocro4pl5critiath5omum4blycre3at5vilitumor5oat5i5b5crat_cras5tcoro3ncop3iccom5ercol3orun5ishco3inc5clareat3ituunt3abat5ropun4tescit3iz4cisti4cista4cipicc5ing_cin3em3cinatuper5s5videsup3ingci2a5b5chini5videdupt5ib5vide_at4tag4ch1inch3ersch3er_ch5ene3chemiche5loure5atur4fercheap3vi5aliat3uravet3er4ch3abc5e4taau5sib3cessives4tece5ram2cen4e4cedenccou3turs5erur5tesur3theaut5enur4tiecav5al4cativave4nover3thcar5omca5percan4tycan3izcan5iscan4icus4lin3versecal4laver3ieca3latca5dencab3in3butiobuss4ebus5iebunt4iv4eresuten4i4u1t2iv3erenu3tineut3ingv4erelbroth35u5tizbound34b1orabon5at5vere_bom4bibol3icblun4t5blespblath5av3erav5enuebi3ogrbi5netven3om2v1a4bvac5ilbi3lizbet5izbe5strva5liebe5nigbbi4nabas4siva5nizbari4aav5ernbarbi5av5eryvel3liazi4eravi4er",
7:"_dri5v4ban5dagvar5iedbina5r43bi3tio3bit5ua_ad4derution5auti5lizver5encbuf4ferus5terevermi4ncall5incast5ercas5tigccompa5z3o1phros5itiv5chanicuri4fico5stati5chine_y5che3dupport54v3iden5cific_un4ter_at5omiz4oscopiotele4g5craticu4m3ingv3i3liz4c3retaul4li4bcul4tiscur5a4b4c5utiva5ternauiv4er_del5i5qdem5ic_de4monsdenti5fdern5izdi4latou4b5ingdrag5on5drupliuar5ant5a5si4tec5essawo4k1enec5ifiee4compear5inate4f3eretro5phewide5sp5triciatri5cesefor5ese4fuse_oth5esiar5dinear4chantra5ventrac4tetrac4itar5ativa5ratioel5ativor5est_ar5adisel5ebraton4alie4l5ic_wea5rieel5igibe4l3ingto5cratem5igraem3i3niemoni5oench4erwave1g4a4pillavoice1ption5eewill5inent5age4enthesvaude3vtill5inep5recaep5ti5bva6guer4erati_tho5rizthor5it5thodicer5ence5ternitteri5zater5iesten4tage4sage_e4sagese4sert_an5est_e4sertse4servaes5idenes5ignaesis4tees5piraes4si4btal4lisestruc5e5titioounc5erxe4cutota5bleset5itiva4m5atoa4matis5stratu4f3ical5a5lyst4ficatefill5instern5isspend4gani5zasqual4la4lenti4g3o3nas5ophiz5sophicxpecto55graph_or5angeuri4al_4graphy4gress_smol5d4hang5erh5a5nizharp5enhar5terhel4lishith5erhro5niziam5eteia4tricic4t3uascour5au2r1al_5scin4dover4nescan4t55sa3tiou5do3ny_ven4de_under5ty2p5al_anti5sylla5bliner4arturn3ari5nite_5initioinsur5aion4eryiphras4_tim5o5_ten5an_sta5blrtroph4_se5rieiq3ui3t5i5r2izis5itiviso5mer4istral5i5ticki2t5o5mtsch3ie_re5mittro3fiti4v3er_i4vers_ros5per_pe5titiv3o3ro_ped5alro5n4is_or5ato4jestierom5ete_muta5bk5iness4latelitr4ial__mist5i_me5terr4ming_lev4er__mar5tilev4eralev4ers_mag5a5liar5iz5ligaterit5ers_lat5errit5er_r5ited__im5pinri3ta3blink5er_hon5ey5litica_hero5ior5aliz_hand5irip5lic_gen3t4tolo2gylloqui5_con5grt1li2erbad5ger4operag_eu4lertho3donter2ic__ar4tie_ge4ome_ge5ot1_he3mo1_he3p6a_he3roe_in5u2tpara5bl5tar2rht1a1mintalk1a5ta3gon_par5age_aster5_ne6o3f_noe1thstyl1is_poly1s5pathic_pre1ampa4tricl3o3niz_sem4ic_semid6_semip4_semir45ommend_semiv4lea4s1a_spin1oom5etryspher1o_to6poglo4ratospe3cio3s2paceso2lute_we2b1l_re1e4ca5bolicom5erseaf6fishside5swanal6ysano5a2cside5stl5ties_5lumniasid2ed_anti1reshoe1stscy4th1s4chitzsales5wsales3cat6tes_augh4tlau5li5fom5atizol5ogizo5litiorev5olure5vertre5versbi5d2ifbil2lab_earth5pera5blro1tronro3meshblan2d1blin2d1blon2d2bor1no5ro1bot1re4ti4zr5le5quperi5stper4malbut2ed_but4tedcad5e1moist5enre5stalress5ibchie5vocig3a3roint5er4matizariv1o1lcous2ticri3tie5phisti_be5stoog5ativo2g5a5rr3a3digm4b3ingre4posir4en4tade4als_od5uctsquasis6quasir6re5fer_p5trol3rec5olldic1aiddif5fra3pseu2dr5ebrat5metric2d1lead2d1li2epro2g1epre1neuod5uct_octor5apoin3came5triem5i5liepli5narpara3memin5glim5inglypi4grappal6matmis4er_m5istryeo3graporth1riop1ism__but4tio3normaonom1icfeb1ruafermi1o_de4moio5a5lesodit1icodel3lirb5ing_gen2cy_n4t3ingmo5lestration4get2ic_4g1lishobli2g1mon4ismnsta5blmon4istg2n1or_nov3el3ns5ceivno1vembmpa5rabno4rarymula5r4nom1a6lput4tinput4tedn5o5miz_cam4penag5er_nge5nesh2t1eoun1dieck2ne1skiifac1etncour5ane3backmono1s6mono3chmol1e5cpref5ac3militapre5tenith5i2lnge4n4end5est__capa5bje1re1mma1la1ply5styr1kovian_car5olprin4t3lo2ges_l2l3ishprof5it1s2tamp",
8:"lead6er_url5ing_ces5si5bch5a5nis1le1noidlith1o5g_chill5ilar5ce1nym5e5trych5inessation5arload4ed_load6er_la4c3i5elth5i2lyneg5ativ1lunk3erwrit6er_wrap3arotrav5es51ke6linga5rameteman3u1scmar1gin1ap5illar5tisticamedio6c1me3gran3i1tesima3mi3da5bves1titemil2l1agv1er1eigmi6n3is_1verely_e4q3ui3s5tabolizg5rapher5graphicmo5e2lasinfra1s2mon4ey1lim3ped3amo4no1enab5o5liz_cor5nermoth4et2m1ou3sinm5shack2ppo5sitemul2ti5uab5it5abimenta5rignit1ernato5mizhypo1thani5ficatuad1ratu4n5i4an_ho6r1ic_ua3drati5nologishite3sidin5dling_trib5utin5glingnom5e1non1o1mistmpos5itenon1i4so_re5stattro1p2istrof4ic_g2norespgnet1ism5glo5binlem5aticflow2er_fla1g6elntrol5lifit5ted_treach1etra1versl5i5ticso3mecha6_for5mer_de5rivati2n3o1me3spac6i2t3i4an_thy4l1antho1k2er_eq5ui5to4s3phertha4l1amt3ess2es3ter1geiou3ba3dotele1r6ooxi6d1iceli2t1isonspir5apar4a1leed1ulingea4n3iesoc5ratiztch3i1er_kil2n3ipi2c1a3dpli2c1abt6ap6athdrom3e5d_le6icesdrif2t1a_me4ga1l1prema3cdren1a5lpres2plipro2cess_met4ala3do5word1syth3i2_non1e2m_post1ampto3mat4rec5ompepu5bes5cstrib5utqu6a3si31stor1ab_sem6is4star3tliqui3v4arr1abolic_sph6in1de5clar12d3aloneradi1o6gs3qui3tosports3wsports3cra5n2hascro5e2cor3bin1gespokes5wspi2c1il_te3legrcroc1o1d_un3at5t_dictio5cat1a1s2buss4ingbus6i2esbus6i2erbo2t1u1lro5e2las1s2pacinb1i3tivema5rine_r3pau5li_un5err5r5ev5er__vi2c3arback2er_ma5chinesi5resid5losophyan3ti1n2sca6p1ersca2t1olar2rangesep3temb1sci2uttse3mes1tar3che5tsem1a1ph",
9:"re4t1ribuuto5maticl3chil6d1a4pe5able1lec3ta6bas5ymptotyes5ter1yl5mo3nell5losophizlo1bot1o1c5laratioba6r1onierse1rad1iro5epide1co6ph1o3nscrap4er_rec5t6angre2c3i1prlai6n3ess1lum5bia_3lyg1a1miec5ificatef5i5nites2s3i4an_1ki5neticjapan1e2smed3i3cinirre6v3ocde2c5linao3les3termil5li5listrat1a1gquain2t1eep5etitiostu1pi4d1v1oir5du1su2per1e6_mi1s4ers3di1methy_mim5i2c1i5nitely_5maph1ro15moc1ra1tmoro6n5isdu1op1o1l_ko6r1te1n3ar4chs_phi2l3ant_ga4s1om1teach4er_parag6ra4o6v3i4an_oth3e1o1sn3ch2es1to5tes3toro5test1eror5tively5nop5o5liha2p3ar5rttrib1ut1_eth1y6l1e2r3i4an_5nop1oly_graph5er_5eu2clid1o1lo3n4omtrai3tor1_ratio5na5mocratiz_rav5en1o",
10:"se1mi6t5ic3tro1le1um5sa3par5iloli3gop1o1am1en3ta5bath3er1o1s3slova1kia3s2og1a1myo3no2t1o3nc2tro3me6c1cu2r1ance5noc3er1osth1o5gen1ih3i5pel1a4nfi6n3ites_ever5si5bs2s1a3chu1d1ri3pleg5_ta5pes1trproc3i3ty_s5sign5a3b3rab1o1loiitin5er5arwaste3w6a2mi1n2ut1erde3fin3itiquin5tes5svi1vip3a3r",
11:"pseu3d6o3f2s2t1ant5shimi1n2ut1estpseu3d6o3d25tab1o1lismpo3lyph1onophi5lat1e3ltravers3a3bschro1ding12g1o4n3i1zat1ro1pol3it3trop1o5lis3trop1o5lesle3g6en2dreeth1y6l1eneor4tho3ni4t",
12:"3ra4m5e1triz1e6p3i3neph1"
}
};
Hyphenator.languages['ru']={
leftmin:2,
rightmin:2,
specialChars:unescape("абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯਂ%u200D"),
patterns:{
2:"1г1ж1м1п1ф1ц1ш1щъ1ы1ь11э1ю",
3:"а1ба1да1еа1иа1ка1уа1ча1я1баб1вбг21бе2бжб1л1боб1т2бф2бц2бш2бщ1бы1бь1бя1вав1дв1л2вмвф22вц2вш2вщвъ21вы1вяг2а2ггг2и2гп2гф1дадв21де1дид1л1до2дп1ду2дфд1х2дщ2дъ1ды1дяе1а2ебе1ее1и2еоеэ2е1яжг2ж2м2жф2жц2жъ2зг1зе1зиз1лз1н2зт1зу2зцз1ч2зш1зы1зяи1аи1еи1ии1ки1л2ипи1ри1ти1чи1я2й1йд2йя12кг1ке2кмк2о2кп2кск2у2кф2кц2кш1кьк2ю2лб1ли2лм1ло2лпл1т2лцл1чл2ю1ля2мж2мм2мп2мф2мц2мщ2мэм2ю1на2нг1не1нин1л1но1нун1х2нц2нш2нщ1нын2э1няо1вог2о1ео3и2ойо1ко1т2оюо1япе1пх22пц2пш2пщ2рг2рз2рм2рп2рф2рх2рц2рш2рщ2рър2ю1сасг2с1зс2мс1н1сосп21ср1сусч2сш21сы1ся2тг2тжтм22тф4тц2тщ2тъ2ть2тэт2юу1ау1еу1иу1оу1у2уэу1я2фгф4и2фм2фф1ха2хг1хе1хи1хохп22хшца12цгци12цм3цу2цц3цыцю11чач1в1чеч2ж1чи1чм3чо1чуч2хш2в2шм2шфш1х2шц2шь2щмъю2ъя2ые2ыи2ыу2ьб2ь2еь2оь2юь2яэ1в2эгэ2мэ2нэ2пэс1э2фэх2э2цэя2ю1аю1бю1вю1ею1ию1к2юмю1хю1чю1яя1ея1ия1кя1ля1уа1ё1бё1дёе1ё2ёб1зёи1ё1кё1нёо1ёпё1у1ё1чёь2ёю1ё",
4:"_аи2_ау2_ии2_ио2_ис3_ль2_оз4_ск2_ст2_уб2_уд2_уе2_ук2_уо3_уп2_ус2_ую2_юс14а3ааа2паа2раа2ца3буав1ва1веа1виа1воа2вта1вуа2вх2агаа2гд2агоа3гу2адва2длад2цае2ла2епае2сазв2азг2аз1ра2ихак1в1аккак2лак1са1лаа1леа3лиа1луа1лыа1лю2амаамб42амоа2мчан1ра1нь2а1оао2дао2као2рао2с2апоа1раа1реа1риа1роа1руар1ха1рыа1рюа1ряа1таа1тиа1тоа1туат2ха1тыа1тюа1тяа2убау2дау2хау2чауэ1ах2аах3с2ачаа2члач1та2шла2эрая2бая2вая2зба1зба2о2б1ббвы22б1д3бев3бее3бец2бещб1з21б2и3биаби2б2биж3бик3биоби1х2б3к2блы2бля2б3н3бот2бр_2брсб1ру2брьб1ряб3скбс4л1б2убу1с2б1х2б1чбы2с2бь_2бьс2бьтбэ1р3б2ю3вагва1звах13вац3вая2в1бв1вив1вр2вг21вев3вег1вее1вез1вес1вец1вею1веявзг2взд2взъ21визви1овиу3ви2ф2в1квк2лв2ла2вли2влю2вля1вме2в1нвно1в3нывов21вод1воквоп21вох1вою2вп22вр_1врюв1ряв1т21вуаву3г2вуиву3п1вхо2в1чвып2вых22вь_1вье2вьс2вьт1вью1вья1в2юга1зга2у2г3бгба2г1ви3ге_2г3ж2г1з2г1кг1ле2г3мг3няго1з3гойг2ол3гою2гр_2грюг4саг4сб2г3тгу1вгу1с2г1ч2г3ш2г3эда1зда2о2д1бд1ве1двид3вкд1вл2двя2дг23дез2дж_2джсдип2диу3ди1х2д1к2д1нд3надо1здоп2до1с2др_д1ред1рид1рыд1рядск22д1тду3гду2оду1х2дцу2дцы2д1ч2дыг2дыд2дыт2дыщ2дь_1дье2дьк2дьт1дью1дья1д2юеа2деа2зе1вее1вие1вое2вте1вуе1вхе1вьег2дед2жее2хе2жг2ежее3зее3зяеи2деи2меи2ое1каек2зе1кие1куе1лае1лее1луе1лые1люе3ляе2мче3наенс2е1нэе1оде2оие2омеоп2еос22епее2пле4пн2епое4пте1рае2рве1рее1рие1рое1руе1рые1рюе1ряе1сге1ск2есле3со2еспе1сте1тае1тие1тоет1ре1туе1тые1тюе1тяе1у22еубеуз2еф2л2ецве1чле2шлею2гея2зжа1з2ж1в2жгаж2гиж2гу2ж1дж2диждо3жду14ждь3жев2жжаж2жежи1о2ж1к2ж1лж3ма2ж1нжно1жоу32жп2жпо1ж2ру2ж1с2ж1ч2жь_2жьс2жьт1за1заа2заб2заг4зап2зас2зат2зау2зах2зая2з1б2з1вез1виз1воз1вр1звуз1вьз3га2зж2з3з23зи_3зис3зич2з1кзко12зм2з3мн2зне2зно2зну1зов1зое1зои1зон1зоозос21зохзош21зоэ1зоюз1раз1роз1руз2рюз1ря2з1сз1ти3зу_зу1в3зуе2зупзы2з2зыщ1зье1зьи1зью3зья1з2юи2аби2авиаг2иао2и2апи2аф2и1би1вии1ву2ивыиг2ди3ге2игли2гни1двид1ри1дьие2гие2дие2ри1зоиз1рийс2и3кои3куилп2и2ль2имаи3мии2мчинд21инжинс21инф1инъи1оби2оги1оди1ози1они1ори1ошип3ни2рви2рж1ирри2сби2сдис1ки4сси1сти2тми1у2иу3пиф1ли2фри1хуи2штию4лию2нию2тия2дйно1йп2лй2сбй2снй2сшй2тмй2хм1кавк2ад1кае1кай1кам1кан1кат1ках1каю2к1бк1вик1ву2к1дкда22кеа2к1з1кивки1о1киткк3ск3лы2кль1клю2к1н1ков1код1коз1кос1кош2кр_кс3гкс3мк3сок3су2к1ткт2р3куе1куй3кум1кур1кут2к1ч1ла_1лаел2аклау11лаял1брл1вел1вил1вол1вул2гллго11ле_1лен1лехл1зо2л1клк2в2л1лл2льллю12л1нлс3б1лу_лу1влу3г1луе1лунлу1с1лую1лы_1лые1лыж1лый1лым4ль_2льд3лье3льи2льк2льм2льн3льо2льт2льц2льч3лью3лья1лю_1люж3ля_2ляд3лям3лях3магма2умаф23мач4м1бм3бимб2л2мг22м1д3мкн2м1л2м1н3мод3мон3моп3мофмп2л2мрим1ры2м1смс2кмс2н2м1тмфи32м1х2мш2мым1мы2с2мь_2мьсмью1мэ1рмя1р2нач2нащ3ная2н1внг4лнг2р2н1днд2жн2длн2дцнег23недне3енеи23неунея23нийниу3ни1х3ниц3нищ2н1кнк2внк2лнк1с2н1нноб2ноэ2н3п2н1ро2н1сн2сгн2слн2сн2н1тн2тмну1х3ную2нф2нхо12н1чн2члнш2т3ны_2нь_1нье1ньи2ньк1ньо2ньс2ньт2ньч1нью1нья1н2юо3авоап12оба1обмоб1р1объ2обьов2то2вхо1дьое1бое2дое1оое2цо1зооие3ои2зои2мои2оойс2ок2в1окто3лао1лео3лоо1луо1лыо1люо3ляо3ма2омеом2чо2мьо3наонд2о1нронс2о1о2о2оло2офо1рао1рео1рио1ро2орцо1рыо1рюо1ряос2бо1ст2осхотв21отг1отдо3тио2тм1отхо1у2оуп2о3фе2охио1хро1хуо2цооч2ло1чтош2тоя2воя2доя2зпа3ф2п1дпе2з4п3к2пл_2п1нп3нап3ны3пой2пп22пр_при12прсп2руп3со2п1тп3ту3пуб2пф24п3ч2пь_2пьтп2ю11ра_раа21раю1рая2р1бр1вир1вор1вьр2гвр2гнрг2р2р1дрд2жр2длр2дц1ре_р1зори3ариб2р2ин1риу1риц1риш2р1кр2кврк1ср2льрлю1р3ляр2мч2р1н1ро_1роу2р1р4р1срс2кр2снрс2п2р1тр2тм1ру_1рулрф2лр2хврх1лрх1рр2цв2р1чр2члр2чмрш2т1ры_1рыб2рыз1рым2рь_1рье1рьи2рьк2рьс2рьт1рью1рьярэ1л1рю_1рюс1ряю1сб2с2бы2сбю1с2вс2гис2гнс2го1сд2с2дас2дес3дис2до1с2е1с2ж1с2и3сизси1х4ск_ск2л2скнск2рск1с2сль2снос2овсо1дс3пн2спь2ср_2с1сс2сбсс2лс2снсс2псст2сс2ч2ст_2стбс2те1сти2стк2стм2стн2стп2стс2стф2стц1стыс4тьсу2бсу1всу2зсу1хс1х22сца2сцо1счас1чл2счос3шн1съ2сы2зсы2с2сь_1сье2ськ2сьт1сью1сьясэ1рс2эс1с2юсю1с2сяз1тагт2ан1тас1тащ2тв_2тви2тву2твы2твя2т1д1т2ете1д2т1зтии2тик23ткн2т1лт2льт3мщ2т1нто1д1тощ2тп22трб2трв2трг2трд2трм2трн2трп2трр2трф2трщ2трът1рыт2сб2т1тт2тм1тущ2т1х2т1ч2тш24ть_3тье3тьить2м4тьттью1тю1т1тяг1тяж1тяпу2асуб1ру1виув2лу1воу1вуу2гву2глу2гнуд2ву3дууе2дуе2луе1суе2ху2жжу1зоу1каук1ву1киу1коу1лау1леу1луу1люу2мчу3нау1ньуо2буо2вуо2куо2пуо2суо2фу2плу1рау1реу1риу1роу3руу1рыу1рюу1ряу1сгус2лу1сму2снус2пус3су1сф2усцу2счу2сьу1тау1тиу1тоу1туу1ты1утюу1тяууг2уу2су3фиуф1лу2фру2хвух1лух1р1учру1чьу3шеу3шиу2шлу2шпуя2зфа2х3фашфаэ12ф1б2ф1в2ф1дфи2жфи1о3фит2ф1кф2лаф2лиф2ло2ф1н3фон3фотф1риф1роф1ру2ф3с2ф1тф2тм2фуф2ф1ч2фш22фь_ф2ю1ха2дхао32х1б1х2вх3вых3д2хео3х1з2хие2х1к2х1лу2х1нхоп2хоф2хоя2х1рых1ря2х1т1ху_2хуе2хуй1хун1хус1хуш2хуюх1х2хью13ца_3цам3цах2ц1бц2ве2цвы2ц1дце1зце1кце1т2ц1зцип2циу32ц1л2ц1н2цп22ц1р2ц1с2ц1тцы2п2ч1б2ч1дче1очжо23чик3чиц2ч1кч2ле2чли2чма2чмеч2мо2ч1н2ч1сч2те2чтм3чук2ч1ч2чь_1чье1чьи2чьс2чьт1чью1чья2ш1бше1кш1лыш2лю2ш1н4шниш2п2ш3пр2ш1р2ш1сш1ти2штс2ш1ч4шь_3шье3шьи3шью3шьяш2ю1щеи2ще1сще1хщеш22щ1н2щ1р2щь_ъе2гъе2дъе2лъе2съя3ны2блы3гаы3гиыг2лы2гны2длыз2ды2злы2зныиг1ык2лык1сы2льы2мчы3поыр2вы3саы3сеы2сны3соыс2пы2схыс2чы2сшыт2ры3шьь2вяь2дцье1кь2знь2и1ь2кльмо1ьс2кь2снь2тмьхо2ь2щаь2щеь2щуья1вэв1рэд1рэк1лэкс1э3маэ3ньэо2зэ1реэ1риэ1руэ1рыэск2эс3мэ2соэ2теэхо3ю2бвю2блю1дьюз2гю1зою1лаю1лею2лию1люю2мчю2нью1о1ю1раю1рею1рию1рою1рую1рыю1тию1тою1тую1тыю2щья2бря1воя1вуя2гняд1вяд1ря1зояк1ся2лья2мья3наянс2я1рая1рия1роя1рьяс1кяс1ляс2тя1таят3вя3тия1тоя1туя1тыя1тяях1ля1хуяце1я2шл2яю_2я1я6зь_й2кь6тр_а1вёа1лёа1рё1веё1вёз1вёс1вмё1вьёг1лёд1вёд1рё1дьёе1вё2ежёе3зёе1лё2епёе1рёё1веё1воё1ву2ёжеё3зеё1каё1киё1куё1лаё1леё1луё1лыё2мчё3наёнс22ёпеё2плё4пн2ёпоё4птё1раё1реё1риё1роё1руё1рыё1ск2ёслё3соё1стё1таё1тиё1тоёт1рё1туё1тыё1тюё1тя3жёвж2жёз1вё2знё3зуё1каё3куё1лён1лёх1луё3льёне3ё1ньёо1лё2омёо1рёо3фё1рьёс2дё1с2ёс2тё1сьё1т2ё3тьё_уё2у1лёу1рёу3шёц2вёч2тё1чьё3шьёы3сёь2щё_не88не_8бъ_8въ_8гъ_8дъ_8жъ_8зъ_8къ_8лъ_8мъ_8нъ_8пъ_8ръ_8съ_8тъ_8фъ_8хъ_8цъ_8чъ_8шъ_8щъ_",
5:"_аб1р_ади2_ак1р_би2о_го2ф_дек2_ди1о_до3п_епи3_за3п_иг1р_изг2_из3н_ик1р_ле2о_на1в_на3т_не3т_ово1_ог3н_ос2п_от1в_ри2ч_ро2х_су2ж_тиа3_ти2г_ти2о_ум2ч_ур2в_ут2ра3блааб2люаб1риав3зоави2ааво1са2вотав1раав2сеа2глеаг2лиа2двеад2жиад1роаду3ча2дынае2гоае2диае2реаз1влаз1драз1обаи2г1аи3глако3т2акриа3лаг2алекало1залу2ша2льщ2аметамои2а2нафан2спанс1уаост1а3плаап2ра1аргуар2жа2ас1кас3миас3ноа1сьи1атакат3ваат1виат1ву2атезато2шат1риа1тьеа3тьюа3тьяау3доа2улеаут1рау3чьа2ф1лахми2аэ2лиаю1таба2бвба2дрба3зубалю1бас3мба1стба1трбе2глбе2гн3бе2збе3зибез3нбез1рбес3пби2обби2одби2онби2орби2тв1благб2ланб3ленб2луд2б2льб2людб2люеб2люлбо3вшбо2гдбо1з2бо2мчбо3мшбону1бо1рубо2сабо1скбо2твбот2рбоя2рб3рабб2равб2ран1брасб1рахб1рейб1рекб2ремб2рехб2ридб1рол1б2рю2б1с2бук1лбы2г1быс1кбыст1бю1тава2брвадь2ванс2ва1ства1трв2дохвед1рве3ду3везе3везлвез2у1вей_ве2п12вердвет3р1в2з2взо1бви2азви2акви2арвиа1тви3афви2гвви2гл1винт1винчв2левв2лекв2летв2лечв2лияв2люб4в3нав2несв3ну_во1б2во3вкво1двво1дрво2ерво2жжво3м2во1ру2ворц2ворьвос1кво1смво1снвот2рво1хл2вра_в2равв1рас2врац2вре_1вридв1риив1рикв1рилв1рисв1рит2в1ро2в1ры2в1с23все33в2сп3в2сювто3ш1ву1з2ву1кву1с2вух3вву1члвы3г2вы3знвы3т21вьин1в2э1г3дан2г3диге2б1гено1ге2обге2одге1орги2блги3брги2грги1слгист22гла_г2лавг1лай2глаяг2лет2гли_г2лин2гло_2глов2глог2глое2глой2глою2глую2г1лыг2ляж2глякг2навг2нанг3не_г2невг3ненг3непг3несг2нирг2ноег2ноиг2носго1б2го2влго2злгоз2нгоиг2гоми2го2сдго1сн2готдгоу3тго1члг1раег1райг1рарг1регг1рекг1рецг1рикг1рилг1ринг1рисг1ричг1ровг2розг1рокг1ронг1ропг1ротг1рофгру2пг1рывг1ряег1рялг1рят2г3с2да2б1да2грдат1р2двиз2дводд1воз2д1д23деврде2зиде2зудеио2де1кл3демеде2оддео3пде3плдес2кде2срде1хлд2жамд2ж3м2д1з2ди2аддиа2зди2арди2асди2обди2ордио1сди2пиди3птди3фрд2лев2д3м2днеа2днос24д3ныдо2блдов2лдо1д2до3дндоз2ндои2р2доктдо3плдос2п2дотд2дотл2дотъдо3ть3дохлдо2щуд1рабд1рард1рахд1рачд2раюд2реб2дрезд2релд2ремд2рий2дринд2рипд2рихд1родд1роед1ройд1ролд1ронд1росд1ротд1роюд1руб1друг1дружд1румд1рую2дрывд2рябд2рях2д1с2дс3кндуб3р2д1удду2дадуп1лдус1кд1услду1стду2чидуэ1т2д3це2д3ш2дъе2м2дымедь3яреади3еа3доеат1реба2се1браеб1рие1броеб1ры2евер2еволев1риев2хое2глее2глие2глоег2наег2но2ег2ред1вое1джее2дохе1друе2дуге2дусе2дынее2гиее1с2ее2стеж3дие2ж1резау3езд1реззу3е3зитез1обе1зомез1опез1отез1ошез2ряез1упез1усеи2г1еис1лека2б2е1ко2е1крек2роек1скеми3кемо1с2емуж2емыс2е1нрен3ш2е1о2бео3даео2деео2дое1о2жео3кле1ол_е1олаео3лие1олке1олые1олье1он_е2онае2ониео3ное1онсе1опеео2прео4пуео1ске1осме1оснео3схе1отле1о2че1о2щепат2е3плаеп1луе3плые4п3сер1вее3ре_ере3перо2б2еролер3ске3с2аес2бае2скее1слуе1слые1с4ме2спуе2стле3стует1веет1вие1тво2етечето1сет2ряе1тьее3тьюе3тьяеуб3реф1рееха2тех1обех1реех1ружа2блжа2бржат1в2ж1б23ж2глж2дакж2дачж2деп4ж2дл3ж2дяже3д2же1клже1о2же3п2же1с2же3ск2жжев2ж1з22жирр2ж3мо2ж1обжоу1сз1авуз1адрзае2дзае2хза3з2з1акт3з2анза3назанс2зар2взар2жзаст2за3ткзач2тза3ш2з2вавз2ван2зваяз2везз3в2кз1вла2зволз2глизг2наз2гнуз1д2вз2дешздож3зе2б1зе2евзе2од3зий_з1интзи2оззи1опзиу3мз2лащз2лобз2лопз2лорз2лющ2зна_з2навз2наез2найз2накз2нанз2натз2наю2зная2з3ни2з3ныз2обезо2бизо2глзо1дрзо1з21зой_1зок_з1окс1зол2зо1лгзо1лжзо3м21зом_2зомн2зонрзо2осзо2паз2оплз2опрз1оргз1оснзо1спзо2твз2отез1откз2отозо2шиз2ракзра2сз2рачз2ренз1ресз2риш2зуве2зу2г2зу1к3зумезу2прз1урбзъе2м2зыме2зымчи2агри2адеи2адииа2муи3анаианд2и3атуи2а1хиа2цеи2б1р2иваж2и1веи2в3з2и1вои1в2ри3в2сив2хои2глеи2глиигни3иг1роиг1руиг1рыи2дейи1д2жие3деие2зуи3ениие1о2иепи1и3ж2диз1в21из1дизо2ои3к2аик2ваи2квии2кляик1роик1скильт2имои2им3пли2м1рим2чаино1с1инсп1инсуио2боио2врио2деио3зои1окси1олеи1опти3ораио1руио2саи1отаи1отки1отсиоуг2ио2хоипат2ип2ляириу3ис3кеис3киис1лыис3меис3муис3нои2стли1сьиита2вит3ваит1виит1вуи2т1ри3тьюи3тьяиф2люиха3ди3х2оихо3ких1реих1рииш2лии2шлыию3тай2д3вй2о1сйо2трй3скайс2кейс4мой2с3фйх2с3ка2блказ3нка1зо1кал_1кало1калс3к2аска1стк2вакк2васк2вашк2возке2глкед1ркиос1ки2пл2к1к22клемк3ленк1леок2ликк2линк3лияк2лозк3ломкло3т1клук2кля_2клям2кляхк2ноп3ковако1др3конскоп2рко1руко1сккос3мко1сп1котнко2фрк1релкре1ок1реч1крибк1ридк2ризк2ритк1рихк1роак1робк2роек1рокк1роок1рорк1роск1рофк1рохк1роэкру1ск1рядк2с3вк2с3дк2сибк1скикс1клк1скокс3тек1стокс1трк1стукта2ккто1ску1ве1кулякуп1лку3рокус1кку1стку3ть1куче1куют3кующ2к1х22лабела2бл2лагола2грла1золак2р1лам_ла2усла2фр1ла1х2л3д2ле1влле1джле3доле1зрлек1л2лемнле2сбле2скле1твле1хрлиа2м3ливо3ливылиг2ллие3рли2кв2лимплио1сли2пллис3мли2твлиу3мли1хлли1хрл2к1ллни2ело2блло2влло1др2лоенло1звло2клло2рвло1рулос1к2лотдлот2рло2шл2л1с2лу1брлу1знлу1крлуо2длу3ть2л3ф22л1х2л2х3в1лых_2льск1льща1льще1льщу1люсьлю1таля1ви3ляво3лявыля1реля1рума2взма2гнма2дрма2дьма1зомас3лма2чтм3бля2м3в23м2глмеан2ме2егме2елме1зомеч1т2м1з2ми1зв2миздми1знми2крми2озми2ор2м1к2м2леем2лел4м3намне1д4мноем2нож4мной4мномм2нор4мноюм2нут4м3нымо1б2мо3влмо1дрмо2жжмо1звмо1зрмо3м2мо1румо1сммо1сн3мотим1раб2м1рому1стмут1рму3тьм2чавм2чалм2читм2чиш3м2щемы2мрмя1стнаб2рнаг2нна3ждна1з2на2илна2ин4наккнап2лна1с2на1твна1х2наэ1р2н1б2н2г1внги2онго1сн2дакн2д1внде3знде2сн3д2знд2рен2дрянд2спне1б22невннед2оне3дунее2дне1звне1знне1зоне1зрне1клне2олне3п2нес2кнест2не2фрне1хрне3шк2н1з2нзо1сни3б2ни2енни2клнила2ни1слнис3пнкоб2но1брно2влно1двно1дрно2ерно1звно2здно1зрно3кн3номеном3шно2рвно1руно2сч2нотдно3ф22н1ре2н1рин2с3внс2кен3слан2с3мнст2рнсу2рн2с3фн2съ3н2т1внт2рант2рент2рунт2рынут1рня1ви2о1а22обиоо1блюобо2с2обото3влаов3ноов2се2о3гео3гря2одано3де_о2дыно2дьбое2жиое1с2ое2сто2етоо3жди2озавоз2вио1здрозе1ооз3но2озоно2зопоз1уго2зымо3зысои2г1оиг2нои3мо2ок2ло3клюоко1бок1ск2окти2окумом2блом1риом2шео3мьяоно1боо3псоос3мо2отио3пако3паро2плиоп2лоо2пляоп2риоп2тоо1р2вор2тро1руео1руко1русо3садо2скеос1кио1с2лос3миос2пяос2свос2тао2сучо1с2чот3ваот1веот1виот1вло3терот1риот3смоту2ао3тьюо3тьяоус2коу3таоу3то2офаш2офит2офон2офото2фриох1лыо2хляох2ме2охороча1соч1лео3члиош3ваош2лаоэ1тиоя2рипави3пав3лпа2вьпа2дрпа2енпа1зопас1лпа2унпа1хупа2шт2п1в2пе2двпе3запе3зопе2льпе4плпе2снпе2сцпе2счпе2трпе2шт3пинк3пися4пла_пла1с2пленп1лею2плив2пло_2плов2плог2плый2плымп1лынп1лых2плю_п1лютп2лясп2ляшп3но1по1б2по3влпое2лпое2хпо1знпои2щ3полкп1оргпор2жпо1рупо1с43послпо3сспот2впот2рпо1х2поэ3мппо1д3превпре1зпрей2пре1л3претпри3вприг2при3кпри3лприп2п2риц3проипро3п2п1с2п3синп2т3впуг3нпу1стпу3тьпэ1рара2бл1рабора2гвра2глрад2жра2дцрак2в1ралг1рамк1рамн1раслрас3прас1трат1в2рахи1ращи2раятрб2лар2блерб2лорб2люрбо3ср3вакр3варр3вежр2вео1рветр3винр2витр2г1лрда1ср2д1врди2ардос2ре1вррег2нрее2врее2дрее2л1резкре1зррез2у1рейш1рекш3ремо1ренк1реньре1онре1опре1ох1репьре3р2ре1слре1счре1твре1чтре3шлр3жа_р3жамр3жанр3ж2др1з2ври3бр2риги2риджрие2лрие3рриз2врик2р1ринсрио2зрио2сри1отри3р2ри1с2ри3сб2риспри2флри3фрри1хлр2к1л2р1л2рнас4рне3оро2влро1двро1длро1др1родьрое2лрое2мрое2хро1зр1рокрро3псро1руро1ск1рослро1смрос2ф1росш1росю1роткроуг2ро2фрро1хлрош2лро3шн1роязрп2лор2плюрств2р2т1врт3варт2влрт1рарт1рерт1риртус1р3тьюрт1яч1рубаруг3н2руксрус1крус3лру3ть1руха1рухо1ручнр3ш2мры2двры2клры2х1ря1виса2блса2дьса2квса2клс1аппса1трса2унса1х22с3бусег2нсе1з2се1квсек1лсекс4семи1се2сксе2стси1омси1опси2пл2скам2скахск2вас2квис2кляс1кон2скошс1кра2скуе1слав1сладс1ламс3левс3леес1лейслео2с1летс3лею2слицс2ложс1люс2с3ля1смесс4меяс3мурс2нас2сная2сную2с3нысов2рсо1з2со3м2со1русо1сксо2сьсот2рсо1члсош2лс2павс2пеес2пелс2пенс2пехс2пешс2пеюс2пим2сполс2посс2рабсра2сс1ратсс3во4с5сис3с2к1ста_4ств_2ствлст2вя1стей1стелсте3хс3тешс2тиес2тиис2тичс2тиюст2ла2стли2стля1сто_1стов1стог1стод1стое1сток1стом1стон1стос1стотс2тоц1стою2стр_с1тут1стуюс2тыв2сть_2стьс3стью1стья1стям1стяхсуб1осу3глсу2евсу1крсума1супе2сус3лсус3псу1стсут1рсу2ф31с2фе1с2хе2с3цис2часс3чив2счикс2читсъе3дсъе3лсы2г1ся3тьта2блтаб2рта2гнта1з2та2плта1стта1тр2т1б22т2ват1вейт1велт1ветт1воет1вос2твою2т1врте2гнте1зо3текатек1л3текште1ох3терзтер3к3терятест2те2хотиа2мти2блти3д2тиис1т1импт1инд2тинж2тинфти1хр2т1к2тло2бтми2с2тобъто2влто1з2ток2р2томс2тонг1торг1торж1торсто1ру1торш2тотдто3тктпа1ттрдо2т1реат1регт1редт1реет1рецт1рею1трибт1ривт1рилт1римтри1от1риттри3фт1рищ2тройт1рортро3т2трою1трубт2руд2трукт2румт2рутт1ря_т1рявт1ряет1ряжт1ряйт3рякт1рятт1рящт1ряя4т1с2т2с3дтсеп2т2с3мт2с3пту2грту1слту1стту2фл1туша1тушо1тушьты2г12тя2чу2алеу3белубо1дубос21убрауб3рюу1ве_уг2науг2неуг1реуг1ряуда1суд1роуес2лу1з2вузо3пуко1бу1ку1у1лыху2озауост1уо2т1уп1люу3проурке3у2родурт2ру2садус1каус1киуск3лу1скрус3лиу1стеу1стяу3сьяу3терут2ляут1риу1тьеу3тьюуф2ляух1адуха2тух3ляу2чебуш1лафа2б1фа2гнфа1зофан2дфа1трфев1рфед1рфе1о3фи2глфи2зо2фобъфо2рвфо1руфос1кф1рабфра1зфра1сф1ратф2ренфре2сф2рижф2ризф2ронф2торфу3тлха2бл2х1акхан2дх1арш2х3ве2х3вихиат1хи1с2х1лавх1ласх1латх1лац1хлебх2лесх1летх3ло_х2лоп1х2му3х2ныхо2пехо1рух1осмхох1лх1раз1хранх1рейх2рисх1ров1хром2х1с2х1у2гх1у2рху3ра2х1ч2ца2плце1отцеп1лцес2лци2к1цик3лци2олци2скциф1р2ц1к2ц1о2б2ц1от2ц3ш2цып3лча2дрча2дцча2ер3чато3чатыче1влче2глчер2сче1сл1ч2лач3легч3лежч2ли_1ч2ло2ч1таша2блша2гнша2дрша1стш3венше2глше1о2ше3плше1с2ши2блши2плшиф1р2ш1к22шленш2ли_2шлив2шлилш2линш2лисш2лифш2ло_2шловш2лог2шляе2шлякш2ляп2шлят2шляч2шляю3ш2мыш2нуршу2евшуст12щ3в2ще2глщед1рщеис1ще3шкъе3доъ2е2ръе2хиыд2реы2дряы3ж2дыз2ваыз2наы2к1выко1зыре2хыс1киыс1куыт1виы3тьюы3тьяы2ш1лье1зоьми3дьми3кьне2оь2п1ль2стиь2стяьти3мь2тотьт2реьт2руьт2рыьхоз1ь3ягсэк2стэле1оэпи3кэс3теэт1раюзи2кю2к1вюре4мю2с1кю1стаю1стею1стою1стяюха1сяб1раяб3реяб1рияб3рюя1в2хя2г1ляз2гня2к1вя2к1ляст3вя1стояст1ряти1зя3тьюя3тьяа2ньшгст4ре2мьдзаи2лзао2ззаю2лз2рятзу2мьпое2ж2стьт6хуя_ы2рьмыя2вяьбат2а2двё2алёк2амёта1тьёб3лёнб2люёб1рёкб2рёмб2рёх3везёвёд1р2вёрдв2лёкв2лётв2нёс3всё3г2лётг2нёвг3нёнг2ноёд2рёбд2рёмдъё2м2евёре2глёер1вёет1вёе1тьёё1браёб1рыё1друё1зом2ё1ко2ё1крёк2ро2ёмужёпат2ё3плаёп1луё3плыё3ре_ёр3скё3с2аё2скеё3сту2ётечёто1сёха2тёх1ружё1с2з2вёзз2наёз2отёзъё2м2зымё2и1вёих1рёк3лёнк2роёлё3долёк1ллё2ск2лоён1льщё3м2щёнд2рёнё1б23номёоё2жио2скёот1вёо3тёрпё2тр2плёнп1лёюпоё2ж3прётр2блё1рвёт1рёзкрёз2у1рёкш3рёмо1рёнкроё2мсёкс4сё2ст2скуёс1лёт1стёлстё3хс3тёшт1вёлт1воётё2гнтё1зо3тёкатёк1л3тёкштёр3ктё2хоуг2нёуг1рёу1стёу3тёру1тьёу2чёб2х3вё1хлёбх2лёсчёр2с2шлёнъ2ё2рыд2рёырё2хьё1зояб3рё",
6:"_аг1ро_аль3я_ас1то_аст1р_де1кв_ди2ак_до3т2_зав2р_ио4на_лес1к_люст1_ми1ом_мо2к1_на3ш2_не3вн_не1др_не1з2_не1сл_нос1к_нук1л_ос2ка_ос3пи_от1ро_от1ру_от1уж_по3в2_по3ж2_поз2н_прос2_ре2бр_ри2ск_септ2_те2о3_тиг1р_уз2наабе3ста3в2чеага1с2а2гитиа2глосаг2лотади2ода2д1руаза4ш3аз3веза2зовьа2зольа1зориаз2о1сак3лемако1б22аконсалуш1та2минтам2нетамо1з2ана2дцан2драан2сура2н1узап2ломапо4всап1релара2стар2бокар2валаре1дваре1олар2торар2т1р1ассигаст1вуас3темас2тинас2тияас1тооас1туха1стьеас2шедас2шесат1обеа2томнат1рахба2г1рбе2д1рбез1а2без5д4без1о2бе2с1кбе2с1тбес3тебес3ти1б2лазб3лази1б2лее1б2лея1б2луж2б3лю_бо1брабо1драбо1л2жбо1льсбо3м2лбо3скобо3стибра1зо1б2рал2б1рамб2рать1б2рач2б3рая1б2редб2ритоб2ритыб1ром_3брукс2б3рю_бу2г1рва2д1рва3ж2два2стрве2с1квзъе3д3в2кус2в3лаб3в2нук3в2нучвои2с1вос3пево2стрво3х2т2в1рам2в1рах2в1рен1в2ризвро3т2в3ская4в3ски4в3скувто1б2ву2х1а3в2шиввы3ш2лга1ст2г1лами2глась3г2лифг3лоблгнит2рго3ж2дго2с1аго1склго1спагу2с1кда2гендаст1р2д1вид2двинт2двинч2д1вис2д1вит1дворьде1б2лде1б2рдез1о2дерас2де2с3вди2алиди2алодио3деди1отиди3фто3дневн4д3но1дно3д23д2няшдо3в2мдо3ж2д2долимдо2м1р2допледо2предо2рубдот2ридо2ш3вдо3ш2кдо2шлы1дравш2дразвд1ране2д3реж1дрема1дремлдрем3н1дремы2д3рендре2скд2ресс1д2рож2д3роз1д2рыг1д2рягду2ста2дут1рды2г1р2ды2с1еб1ренеб1рове2б3рюе3в2меев2нимев2нятевра1с2е1вреев1рееев1рейев1реяега1с2е2гланедноу3ед1опре2дотве2д1още2дру_е2ду2бед1убое2дувеед1уст2е3душе2евидее2в1реест1ре4ждевеза2вре1з2ваез1о2гез1о2рез1у2дез1у2кезу2соезу2сыез1у2хез1учаеис1трек1стееле3скеле1сцеми3д2ен2д1реоб2рое2о3глео2гроеоде3зе2о3роеост1реот2руепа1трепис2кеп1лешеп1лющер1актере3доере1дрере1к2ере1х4ерио3зер1обл2ерови2ерокреро3ф2ес1кале2сковес1ласес2линес2ловес2ломес2пекес3полес2танес2четеук2лоефи3б2ех1атоех3валех3лопех1опоех1у2ч3ж2дел4ждемеже1к2вза2вруза3ж2дза3мнеза3р2д2з3ва_з3валь1з2вон2з1вуюзи2онози3т2рзко3п2зо3в2мзо2о3пзот2резот2ризро2с3зу2б3р2з1уз3з1у2моз1у2тезу2час2зы2г12зы2с1иа2зовиа2налиа1с2киа1стаиа1стоиат1роиг1рени2г1ряиди1омиди1оти2еводиз2гнеиз2налика1с2ик2с1тило1ски2менои2мену2имень1инстии3оновио3склио1с2пио2т1випа1трипо3к2ира2сти2р1ауири2скиро1з2ис3ка_ис3камис3кахис3ковис3ку_и2сламисо2ски2с3при2ст1вис1тязи2т1веит2ресит3роми2т1учи2х1асих2ло2ихлор1й2с3мука2брика3днека2д1рка2п1лка2прекар3трка1т2рка2ш1тке2с1кке2ст12к3ла_2к3ле_к3лем_2к3ли_2к3лив2к3лис2к3ло_2к3лос2к3лю_3к2ниж3к2няж1кольс2коминко2р3вкре2слкри2о3ксанд2к1стамк1стан3к2то_ку2п1рла3ж2д1лами_ла1сталаст1вла1стела1стола1стула1стяла1т2р1л2галлев1рале2г1лле1онтле1о2сле4скале1с2лле1спеле1т2рли2гро2л1испли2х3вло1б2р2ловия3ловодло2г3длого1слок3ла3лопас2л1оргло1с2плу1д4р1льсти1льстяма2к1р2м1аллма1с4тма2тобма2т1рме2с1кми2гремик1рими1опими1с2л3м2нешмоис1тмо2к3вмос1камо1с2пмо2т1рм2с1ор3м2стиму1с2кму1с4лнаби1она1в2рна3м2нна1рвана1т2рн1а2фрна3ш2лнд1рагнд1ражнд2риане1в2дне3вняне1д2лне2дране1дроне3ж2дне1з2лне1к2вне3м2н3не1о2не2одане1р2жне3с2нне1с2пне1с2хне1с2чне1т2вне3т2лне1т2р2нинспнист2рнко3п2н2к1ронно3п2но3з2оно1склно2слино1с2пн2сконн2с1окн3с2пентр1ажн2трарнтрас2н2тривн2трокнтр1удн2т1ря2н3ю2роб2левоб2лемобо3м2о2бра_о1браво1брано3в2лоо2в1риов3скоог3ла_ог3ли_ог3ло_од1вое2оди3а2о3димод2литодо3про2досио1драгод1ражод1разод1рако1дралод3ребо1дробод1рово2дымао2дымуо2е1вло3ежеко3ж2дуо1з2ваоз2вено1з2вяоз2глооз2доро2з1обозо1ру2о3кан2о3колол2ган1олимполу3д2о3множоне3ф2он2труоост1ро2пле_оп2литоп3лю_о3плясопо4всопоз2но3п2теора2с3ор2б3л2о3регоре2скор1испор1уксоса3ж2о2с3баос3кароск1воо2ски_о2сковос1койос1комос1коюос1куюос3лейос3логос3лыхос3мосос2нялос2пасо1с2пуос2с3мо3страос2цен2о3тек2о3техо3ткалот1работ1радот1разотра2сот1режот1рекот1речот1решот1родот1роеот1рокот1росот1рочот1ругот1у2чо2форио2ч1топас1тапа1степас1топас1тупа1тропери1опе2с1кпиаст1пи2ж3мпи2к1рп1лем_п1лемсп2ленкп1ле2оплес1к3п2ликпо3в2спод1вопо1звепо1здопо1з2лпо3мнопо3мну3по3п2по2шлопо2шлыпо2шляпре1огпри3д2приль2про1блпрод2лпро3ж2про1з2п1розопрофо23п2сал3п2сих3п2тихпус1кура2б1р1равняра2журра2зийра2зуб1ракизра2к3лра2нохран2сцра2п1лрас3к21растара2такра1т2р1р2вавр3ватарег2ляре2досре3ж2дре1з2лре1зна1ре1зоре1к2лре3мноре1о2рре1о2фре1о2црес1кире1с2пре3старе3сторе1т2рреуч3три3в2нри2глори3г2нри1д2рри3м2нри3м2чри3стври3т2рриэти2рне1с2рно3слро2блюро1б2р1рогол1рогруро3д2зрод2ле1розарро1з2в3розысрои2с31рокон1ролис1ролиц1ромор1ронаж1ронап1роносрооп1рро2плю2р1оргро1р2жро2скиро2скуро1с2п1рот2врот2рир3ствлр2таккр2т1обрт1оргрт2ранру2дар1ружейру1старуст1рр2х1инр1х2лор2х1опры2с1к2с1арк2с1атлса2ф1рсбезо3сбе3с22с3венсе2к1рсере2бсе3стасе3стесест1рс2канд1с2каф3скиноск3ляв2сконас2копс2скриб2с3ла_2с3лая2с3ли_2с3ло_с3лому2с3лос2с3лую2с3лые2с3лый2с3лым1с2наб1с2неж2с3никсно1з2со1б2рсо1л2гсо2риесо1с2п1с2пец2списяспо1з2сре2б1сре3доссанд2с3с2нес2сорист1верст2вол1с4те_1стен_с3тет_с3тете2стимп2стинд2стинф2стинъс2тишкс3т2лест2лилст2литс2то1б3с2тои2сторг2сторж2сторсстрас24страя2стредст1рей2стривст1риз2стрил2стрищст1роаст1родст1рохст2рубст1рушсуб1а2с2ценасы2п1лсыс1ката1вритак3лет1во1з2т1войтеле1отем2б1те2о3дте4п1лте2рактере2оте2скате2скути1знатила2м2т1инвти1с2лти3ствти3ф2р3т2кав3т2кан3т2кеттмист1то2бесто1б2лто3д2р2т1оммто1с2нто1с2пто1с2цт1рага2т1раж1требо1требут1ребьт1ревет1ревшт1резат1резнтреп1л3тре2стрес1кт1рестт1ретут2решь4тринст1роглт1роидтро3плт1росо4т3роц2т1рядту2жинты2с1к1у2бытуд1рамуе2с1кун2д1руро2длус1комус1ку_у3х4вофанд1рфе2с1кфиа2к1фи2нин2ф1оргфор3трфото3п2ф1у2п2х1изы1х2лор2х1о2кхо2пор2х1оснхри2плхро2мч2цетат2ц1о2дча2евоча2евычаст1вча1стеча1стуча1стячерст1ша2г1ршан2кршар3т2ша1тро3ш2кол2ш1лейш2лите4ш3мы_ще1б2лщи2п1лы2д1роы2к3лоынос3лыра2с3ье2с1кь3п2тоь2трабэри4трэро1с2эс2т1рэтил1аю2б1рею2идалюри2ск3явиксям2б3л_вст2р_реа2нбезу2свиз2гнвыб2редос2ня4ж3дик4ж3дичла2б1рлу3с4нни4сь_о2плюсоти4днпти4днреж4ди2стче_сы2мит2сься_аз3вёзам2нётас3тёмбё2д1р2в1рён2доплёдо2прё2д3рёж1дрёма1дрёмы2д3рёнеб1рён2е1врёерё3доерё1к2ес2чёт2ё1вре2ё3душёз1о2гён2д1рёс2танёх1атоёх3валёх3лопёх1опоза3мнёзот2рёиг1рёнла1стёлё4ска3м2нёшод3рёб2о3тёкот1рёкот1рёшп2лёнкплёс1к_рё2бррё1зна1рё1зорё3старё3стород2лёсе3стёсёст1р1стён_с3тёт_с3тётес3т2лётё4п1лтё2скатё2ску3т2кётт1ревёт2рёшьчёрст1",
7:"_во2б3л_во3ж2д_за3м2н_ле2п3р_му2шт1_не1с2ц_обо3ж2_ра2с3т_ре2з3в_ро2з3в_ро2с3л_хо2р3в_че2с1ка2д1облаз2о1бра2н1о2бан1о2храпо3ч2тбили3т2б2лес1к2б3люсь1б2роди1б2росибро2с1кве2ст1вви2а1с2ви1с2ниво2б3лагри4в3нде2з1а2ди2с1тр2д1обладо1б2рад1о2сенд1о2син2д1осно2д1отря1д2разнд1ра2с3дро2г3неан2д1ре1д2лине1о2свие3п2лодере3м2не2р1у2пе2с1ка_е4с1ку_2ж1о2т1за2в1ри1з2о3ре2з1у2беи2л1а2ци2л1у2пино2к3лино3п2лисан2д1ки1с2ни2к3ласько1б2рикохо2р3ла2д1аглан2д1рла2ст1рле1з2о3лу3п2ломан2д1рме2ж1атме2ст1рна2и1с2на1р2вине2р1отни2л1ални2л1ам2н1инстнти1о2кобо1л2го3в2нуш1о2деяло2д1отчо2д1у2чоза2б3воко3п2ло3м2немо3м2нето2п1лейопо2ш3лоро2с3ло2с1ка_о1с2копо2с1ку_о1с2нимо1с2шивошпа2к3па2с1тыпе2д1инпе2к1лапе2ст1рподо3м2радо1б2рас3т2лрво1з2дремо2г3рес2с3мро2д1отро2ф1акр2т1акт2с1альп2сбе3з2сто2г3нс4т1ровсче2с1кте2с1ките2с1ко3т2ре2хтри2г1л2т1у2пруре2т3русла4ж3уто3п2сх1ра1с2ь2т1амп_бо2дра_об2люю_об2рее_об2рей_об2рею_об2рив_об2рил_об2рит_пом2ну_со2плаатро2скбино2скдро2ж3ж2дружейилло3к2ме2динсмис4с3ннар2ватне2о3рен2трассо4ж3девойс4ково2м3че_он2тратосо4м3нпо2додепо2стинпрем2норедо4плроб2лею2сбрук1б2лёс1кё2с1ка_ё4с1ку_1з2о3рёлё1з2о3о3м2нёмо3м2нёто2п1лёйпё2ст1рсчё2с1ктё2с1китё2с1ко3т2рё2х_чё2с1к",
8:"_ар2т1о2_ме2ж1у2а2н1а2ме2д1о2бедло2к1а2ун2тр1а2го2д1о2пео2д1о2пыпо2д1о2кре2д1о2пр2т1у2чи_доб2рел_до1б2ри_па2н1ис_ро2с3пиди1с2лове2о3позиере3с2со2з1а2хавни1с2коло1и2с1трони3л2ампере1с2нсо2стритсо3т2калтро2етес_доб2рёлтро2етёс",
9:"е2о3платои2л1а2минме2д1о2сммети2л1амо2д1о2болпо2д1у2роприче2с1крни3л2а3мпричё2с1к",
10:"но4л1а2мин"
}
};
Hyphenator.languages['uk']={
leftmin:2,
rightmin:2,
specialChars:"аеіоуюяєїибкпстфхцчшщвгджзлмнрй’'ґь",
patterns:{
2:"6’6ь",
3:"2а1а3аа3еа3іа3оа3уа3юа3яа3єа3ї2е1е3ае3ее3іе3ое3уе3юе3яе3єе3ї2и1и3аи3еи3іи3ои3уи3юи3яи3єи3ї2і1і3аі3еі3иі3оі3уі3юі3яі3єі3ї2о1о3ао3ео3іо3оо3уо3юо3яо3єо3ї2у1у3ау3еу3іу3оу3уу3юу3яу3єу3ї2ю1ю3аю3ею3ію3ою3ую3юю3яю3єю3ї2я1я3ая3ея3оя3уя3юя3яя3єя3ї2є1є3ує3ює3єє3ї2ї1ї3еї3ої3юд4жд4за2йе2йи2йі2йо2йу2йю2йя2йє2йї2йь6о",
4:"2б1к2б1п2б1с2б1т2б1ф2б1х2б1ц2б1ч2б1ш2б1щ2в1б2в1г2в1д2в1ж2в1з2в1к2в1л2в1м2в1н2в1п2в1р2в1с2в1т2в1ф2в1х2в1ц2в1ч2в1ш2в1щ2в1й2в’32г1к2г1п2г1с2г1т2г1ф2г1ц2г1ч2г1ш2д1к2д1п2д1с2д1т2д1ф2д1х2д1ц2д1ч2д1ш2д1щ2ж1к2ж1п2ж1с2ж1т2ж1ф2ж1х2ж1ц2ж1ч2ж1ш2з1к2з1п2з1с2з1т2з1ф2з1х2з1ц2з1ч2з1ш2з1щ2к1б2к1г2к1д2к1з2л1б2л1в2л1г2л1ґ2л1д2л1ж2л1з2л1к2л1м2л1н2л1п2л1р2л1с2л1т2л1ф2л1х2л1ц2л1ч2м1б2м1в2м1г2м1д2м1ж2м1з2м1к2м1л2м1н2м1п2м1р2м1с2м1т2м1ф2м1х2м1ц2м1ч2м1ш2м1щ2м’32н1б2н1в2н1г2н1д2н1ж2н1з2н1к2н1л2н1м2н1п2н1р2н1с2н1т2н1ф2н1х2н1ц2н1ч2н1ш2н1щ2н’32п1б2п1д2п1з2р1б2р1в2р1г2р1ґ2р1д2р1ж2р1з2р1к2р1л2р1м2р1н2р1п2р1с2р1т2р1ф2р1х2р1ц2р1ч2р1ш2р1щ2р1й2р’32с1б2с1г2с1д2т1б2т1г2т1д2т1ж2т1з2ф1б2ф1г2ф1з2х1г2х1д2ц1б2ц1г2ц1д2ц1з2ч1б2ч1д2ч1ж2ш1б2ш1г2й1б2й1в2й1г2й1д2й1ж2й1з2й1к2й1л2й1м2й1н2й1п2й1р2й1с2й1т2й1ф2й1х2й1ц2й1ч2й1ш2й1щ2б1б2в1в2г1г2ґ1ґ2д1д2ж1ж2з1з2к1к2л1л2м1м2н1н2п1п2р1р2с1с2т1т2ф1ф2х1х2ц1ц2ч1ч2ш1ш2щ1щ2й1й3ння3ття3ттю3лля3ллє3ллю3ддя3й6о_б’8_в’8_д’8_з’8_м’8_н’8_п’8_р’8_т’8_ф’8_ш’8_бд6_бр6_вб6_вг6_вд6_вж6_вз6_вк6_вл6_вм6_вп6_вс6_вт6_дж6_дз6_дл6_дс6_зб6_зг6_зд6_зл6_зс6_зч6_зш6_зґ6_йш6_кл6_кп6_кс6_кх6_кш6_лс6_ль6_мс6_мф6_нб6_пр6_пс6_пх6_рт6_ск6_сл6_сп6_ст6_сх6_тк6_тр6_тх6_ть6_фл6_хл6_ць6_чх6_шк6_шл6_шп6_шт66бв_6бз_6бй_6бл_6бн_6бр_6бс_6вб_6вв_6вд_6вж_6вз_6вй_6вк_6вл_6вм_6вн_6вп_6вр_6вс_6вт_6вх_6вч_6вш_6вщ_6гв_6гг_6гд_6гл_6гм_6гн_6гр_6гс_6гт_6дж_6дз_6дл_6дм_6дн_6др_6дт_6дь_6жб_6жв_6зв_6зг_6зд_6зк_6зл_6зм_6зн_6зр_6зь_6йб_6йв_6йг_6йд_6йз_6йк_6йл_6йм_6йн_6йп_6йр_6йс_6йт_6йф_6йх_6йц_6йч_6йш_6кв_6кк_6кл_6кр_6кс_6кт_6кх_6кш_6лб_6лг_6лд_6лк_6лл_6лм_6лн_6лп_6лс_6лт_6ль_6мб_6мг_6мж_6мк_6мл_6мм_6мн_6мп_6мр_6мс_6мт_6мф_6мх_6мш_6нв_6нг_6нд_6нж_6нз_6нк_6нм_6нн_6нр_6нс_6нт_6нф_6нх_6нц_6нч_6нш_6нь_6пд_6пл_6пр_6пс_6пт_6пф_6пц_6рб_6рв_6рг_6рд_6рж_6рз_6рк_6рл_6рм_6рн_6рп_6рр_6рс_6рт_6рф_6рх_6рц_6рч_6рш_6рщ_6рь_6ск_6сл_6см_6сн_6сп_6сс_6ст_6сь_6тв_6тл_6тм_6тр_6тс_6тт_6тц_6тч_6ть_6фм_6фр_6фт_6фф_6фь_6хв_6хм_6хн_6хр_6хт_6хш_6ць_6чб_6чм_6чн_6чт_6шв_6шм_6шн_6шт_виї4оо4боб’3од’3’ї4в’ї4з’ї4д’ї4ж’ї4л’ї4м’ї4с’ї4хге4ооо4куя4вді4омі4оі4онзо6ооу4с",
5:"2дь1к2дь1с2дь1т2дь1ц2зь1к2зь1с2зь1т2ль1б2ль1в2ль1г2ль1д2ль1ж2ль1з2ль1к2ль1м2ль1н2ль1п2ль1р2ль1с2ль1т2ль1ф2ль1х2ль1ц2ль1ч2ль1ш2ль1щ2ль1й2нь1б2нь1г2нь1з2нь1к2нь1л2нь1м2нь1с2нь1т2нь1х2нь1ц2нь1ч2нь1ш2нь1й2рь1к2рь1ц2сь1б2сь1д2ть1б2к1сп2к1ст2п1сп2п1ст2с1пк2с1пп2с1пс2с1пт2с1пх2с1пч2с1тк2с1тп2с1тс2с1тт2с1тф2с1тц2с1шт2т1ск2т1сп2т1ст2т1шк2ф1сп2ф1ст2ф1шт2х1ст2ц1ст2ц1шк2ш1тк3п4ре3п4риприї43п4ро3п4ріооб’3ооб3мнао4рнеу4к3блаж3ближ3близ3блок3бран3бруд3глад3глиб3глин3глоб3глуз3глуш3гляд3глян3гнан3гнил3гноз3грав3град3грай3грам3гран3граф3граш3граю3грає3грес3гроб3грож3гроз3груп3грів3гріт3гріш3д4ан3двиг3двою3двоє3двій3двір3драж3дром3друж3друк3дряп3дріб3жвав3зваж3зван3звед3звел3звич3звищ3звук3звуч3звіт3змін3зйом3зміш3знав3знай3знак3знал3знан3знат3знач3знаю3знає3зниж3знім3зрюв3зрів3зріл3зрін3й4ма3с4пі3х4то3ї4зд3ї4ставі4абі4о3дої4ддої4мдої4хдої4жзаї4дзаї4жзаї4ззаї4лзаї4мзаї4хзо4казо4кезо4кизо4кузо4кіий4тиій4тинаї4жнаї4знаї4лнаї4мнаї4снаї4хпоя4в_пої4пої4дпрої4сеї4ду4к4рвия4вз’я4взая4вная4веті4одея4као4хаео4ханія4кдоу4кдоу4мнею4ннея4кое4копоя4соа4ктеа4ктий4няпій4мвий4мзай4моа4на",
6:"2к1ськ2п1ськ2с1ськ2с1тсь2сь1кк2сь1кс2сь1кт2т1ськ2ф1ськ2х1ськ2ш1тсь_вб6’6_вв6’6_вз6д6_вм6’6_вп6’6_вп6х6_вс6т6_вш6к6_зв6’6_зд6з6_зм6’6_зс6к6_зс6т6_зш6к6_лк6с6_ск6л6_сп6’6_сп6л6_сп6х6_сх6л66б6ль_6б6ст_6б6ць_6в6др_6в6дь_6в6зь_6в6ль_6в6сь_6в6ць_6г6ль_6г6сь_6д6зь_6ж6дь_6ж6сь_6з6дв_6з6дн_6з6дь_6з6нь_6з6сь_6з6ьб_6з6ьк_6й6кл_6й6ль_6й6мс_6й6нс_6й6ст_6й6сь_6й6тс_6к6ль_6к6ст_6к6сь_6к6тр_6л6ль_6л6мс_6л6хв_6л6ьб_6л6ьв_6л6ьг_6л6ьд_6л6ьз_6л6ьк_6л6ьм_6л6ьн_6л6ьп_6л6ьс_6л6ьт_6л6ьф_6л6ьх_6л6ьц_6л6ьч_6л6ьш_6л6ьщ_6м6бр_6м6ль_6м6сь_6н6гл_6н6гр_6н6гс_6н6дж_6н6дз_6н6дп_6н6др_6н6кс_6н6кт_6н6ск_6н6ст_6н6тк_6н6тр_6н6ть_6н6ць_6н6ьб_6н6ьг_6н6ьк_6п6сь_6п6тр_6р6дв_6р6дж_6р6дь_6р6зн_6р6зь_6р6кс_6р6кт_6р6ль_6р6нс_6р6нь_6р6ср_6р6ст_6р6сь_6р6тв_6р6тр_6р6ть_6р6ць_6с6дп_6с6ль_6с6тв_6с6тй_6с6тм_6с6тр_6с6ть_6с6ць_6с6ьб_6с6ьк_6с6ьм_6т6вт_6т6зт_6т6ль_6т6мр_6ф6ть_6ц6тв_6ц6ьк_6ш6ль_6ш6нл_6ш6сь_6ш6тв_6щ6сь__бе4з3_безу4віду4ч_ві4д3_від’3_мі4ж3ові4д3_пере3_під’3_пі4д3_пі4в3_ро4з3ооб3рона4д’3за5о4рдо5о4рпо5о4рз3в’4яза3ю4шу3в’4яз3м’4яу3м’4яв3м’4язу4рочприо4р3й4ш4л3блиск3блоці3брати3брест3бризк3в4бив3в4дал3в4лад3в4лов3в4сюд3в4тіл3гнучк3грати3грець3грунт3д4бав3д4бал3д4бан3д4бат3д4бає3двічі3дріма3жміть3жріть3з4був3з4бут3звест3звись3з4год3з4дат3з4чеп3й4мищ3й4му_3й4шов3м4нож3м4щен3п4сов3п4сон3п4сув3р4вав3с4кид3с4кок3с4коп3с4кор3с4коч3с4пад3с4пин3с4піш3с4тав3с4тад3с4таз3с4тал3с4тан3с4тар3с4тат3с4тач3с4тає3с4теп3с4тиг3с4тиж3с4той3с4тою3с4туп3с4тяг3с4тіб3с4тій3с4тір3с4фер3с4хил3с4хов3с4хід3т4кан3ш4код3ш4кол3ш4кіл3ш4кір3ш4таб3ш4туч3ґрунт3е4тап3о4бід3о4біц3о4дяг3о4соб3о4хоч3о4чищ3у4ваг3у4важ3у4гав3у4мит3у4міл3у4ряд3я4зик3я4кіс3я4рус3є4д3н3є4дин3є4рей3ї4ждж3ї4хав3ї4хат_заї4к_заї4ц_заї4ч_наї4давої4дае4тилахої4дауді4обе5конб’4єтьбран4дви3й4дви3й4т3в’4яз4д7земді3й4тді3й4д_дої4в_дої4лдої4стеу4стрео4свіек2с1кек2с1пек2с1тек2с1цигої4діе4тилйо4свіквої4д3м’4ятна3з4внаї4вснаї4вшна4й3ана4й3енедої4неї4стоної4доо4палео4палонаї4доо4свіоу4строа4томпоч4непоч4нипоч4нупої4здраді4оз’4єднрмої4дсор4тнцук3роубої4дясої4дви3у4чза3у4чна3у4чне3у4чгелі4ополі4осоці4офізі4охімі4огоме4оао4пікка5налоі4золмете4оабия4квия4сннея4снпоя4сннеа4биео4ціноо4цінео4бурео4зорпіво4спале4оао4хотео4хотео4щадао4щадоо4чищоо4бігоу4суноу4комз3а4ктеу4богзай4нянай4няприй4мдій4манай4маобой4мпрой4мобій4моу4годау4годеу4годео4писоо4писао4пис_ом4рі_ум4ри_ум4рі_ум4ру_ум4ревиу4ди",
7:"_бе4з’3_ві5д4а_ві5д4іневі4д3_пі5д4о_пі5д4і_пі5д4е_пі5д4и_пі5д4у_спі4в3_ро5з4і_ро5з4е_ро5з4а_ро4з’3до3в’4єза3в’4єзі3в’4єпо3в’4єуі3в’4єпо3в’4яза3в’4язі3в’4яна3в’4яоб3в’4язі3м’4яно3м’4яза3м’4яна3м’4яоб3м’4япо3м’4ясу3м’4ядо3в’4юза3в’4юзі3в’4юна3в’4юпо3в’4юуі3в’4юза3я4локоу4рочпоу4роч3м4к4не3м4к4ну3м4к4ні3с4к4ле3с4к4ло3британ3в4довз3в4ласн3в4лашт3в4певн3громад3груван3г4ідро3з4бага3зворуш3з4довж3знаход3зрозум3й4менн3й4муть3й4міть3м4ріть3р4вати3р4віть3с4кіль3с4кіпл3с4пект3с4перм3с4піть3с4тайн3с4тара3с4тисл3с4титу3с4товб3с4тосо3с4тосу3с4тоян3с4тіль3ш4кідл3а4гент3а4грес3а4зарт3а4ктив3а4куст3а4кциз3а4птеч3а4соці3а4тлет3а4халі3е4моці3е4мігр3е4нерг3е4стет3о4бира3о4даль3о4збро3о4крем3о4плат3о4птим3о4пуст3о4пуше3о4пуще3о4ренд3о4сяжн3о4холо3о4чисн3у4згод3у4клад3у4рбан3у4спіш3у4твор3я4дерн3є4писк3і4снув_бе5зе_бйор4нсвер4х3нвід7знаві5д4енві5д4омво4с5ко_дої5ль3з’4ясозна3й4дзна3й4ткорої4д3м’4якшна3в4чанео4палобі3й4добі3й4тпереї4дпереї4жпереї4зпереї4лпереї4спереї4хпре4й4спо3д4вопри3й4тпро4ф3спор4т3нпри3й4дроз5винроз5витро5з4умспе4цпрспе4ц3ссь4квугтран4с3під3у4чво4єводво4єначді4алогді4огенпроя4снрозо4рарозо4рерозо4рннапоу4мне4олітне4ологне4онацне4офітнея4рок_пе4ом_д3у4сімроз’я4рте4ологте4ософа3у4даро3у4дарз3у4дарв3у4дареі4стотоі4стотоо4чистнайа4ктпіва4ктао4бразео4бразоо4бразиа4варіяа4варіоа4варіеа4варіаа4дресеа4дресоа4дресіа4дресае4фектее4фектое4фектое4місіие4місіяе4місіее4місій3у4богздій4няобій4няд4о3й4мперей4мбезу4глоа4каціоо4держбіблі4о_на3в4ч_ви3в4ч_до3в4ч_за3в4ч_по3в4чана3в4чена3в4чови3в4чеви3в4чедо3в4чоза3в4чпо3в4чае3м4рій_ви3м4р_за3м4р_зі3м4р_на3м4р_по3м4рие4стетое4стетее4стетоо4ктаніо4ктано3в4казе3в4каз",
8:"6б6с6тв_6б6с6тр_6б6с6ьк_6в6с6тв_6в6с6ть_6в6с6ьк_6г6с6тв_6д6с6тв_6д6с6ьк_6д6ь6сь_6й6с6тв_6й6с6тр_6й6с6ьк_6л6ь6дс_6л6ь6сь_6л6ь6тр_6м6б6ль_6м6с6тв_6м6с6ьк_6н6г6ль_6н6с6тв_6н6с6тр_6н6с6ьк_6н6ь6сь_6п6с6тв_6р6л6ьз_6р6н6ст_6р6с6тв_6р6с6ть_6р6с6ьк_6р6щ6сь_6с6д6рп_6с6т6рь_6т6с6тв_6т6с6ьк_6т6ь6сь_6ф6с6тв__ві5д4ом_ві5д4ун_ві5д4ербезві4д3неві4д’3_пона4д3_напі4в3ро5з4йом_чере4з3пере5о4рпі6д5о4робі3в’4євід3в’4япри3в’4япід3в’4япри3м’4янаду4рочприу4роч3в4б4лаг3в4к4лад3в4п4лив3в4т4рут3в4т4руч3з4б4рой3з4б4рою3з4б4роє3з4в4’яз3п4с4ков3с4к4лад3с4к4лит3с4п4лав3с4п4лат3с4п4лач3с4п4рав3с4т4вор3с4т4рах3с4т4риб3с4т4риж3с4т4рой3с4т4рок3с4т4ром3с4т4роф3с4т4роч3с4т4рою3с4т4роя3с4т4роє3с4т4рої3с4т4рій3с4т4ріл3с4т4річ3т4к4нен3т4ь4мар3у4п4рав3в4веден3в4довол3в4живан3в4поряд3в4рожай3з4доров3з4дійсн3с4короч3с4повід3с4пожив3с4табіл3с4тереж3с4теріг3с4торон3с4торін3а4дитив3а4ктуал3а4курат3а4кцепт3а4лергі3а4матор3а4наліз3а4натом3а4парат3а4пеляц3а4ромат3а4спект3е4колог3е4коном3е4лектр3о4б’єдн3о4б’єкт3о4береж3о4борон3о4перат3о4хорон3у4компл3у4крупн3у4перед3у4рядов3у4стпіш3у4тробн3я4скрав3і4зотоп3і4люстр3і4мовір3і4нтенс3і4нформальбі5онбей4сболбо4г3данбо4є3голбо4є3готбо4є3запбори4с5пвина3й4двина3й4тві5д4е4оджен4тльди4с3локди4с3пледи4с3путди4с3тилд4ні3п4рдо3з4волдо3з4вілкон4трремо4к5рийна3б4лизна3в4рядна4д7з4вна3в4ченне3в4томне3д4банна3д4банне3з4вичне3з4важна5п4ливні4т5ратоб5у4мовпере3й4дпере3й4тпі5в4еньпо3в4торпо3в4ченпо3д4робпо3д4разпо5з4бавпри4нципрай3в4нороз5вантро4з5ділро4з5горро4з5верро4з5чепро4з3ливсан4к4т3серцеї4дстат5упрукр3а4втукр3а4грукр3е4кснедо3у4чпед3у4чипере3у4чсамо3у4чсво4єчассво4єрідоо4динокміжу4собнай3я4снроз’я4снро5з4ориро5з4ороро5з4оруро5з4оряро5з4орюро5з4орірозо4решео4голошбальне4оне4окласпі5в4оніп4о5берео3о4кисли3о4кисле3о4кислх3о4кисли3і4сторо3і4сторі3і4стора3і4сторя3і4сторе3і4сторар4т3мінар4т3підар4т3ринар4т3хімперей4няпідій4нябезу4пин_при3в4чмона3в4чжона3в4чіона3в4ч_зав3м4р_при3м4р_роз3м4рй3е4стет",
9:"6л6ь6ств_6л6ь6ськ_6н6с6ькй_6н6т6ств__бе5з4о3д_безві4д3_ві5д4озвді4єві4д3за4вві4д3співві4д3_пере4д3г_пере4д3д_пере4д3м_пере4д3р_пере4д3ч_пере4д’3_пона5д4і_пона5д4и_пона5д4я_чере4з’3непо3в’4япере3м’4япіді3м’4япозау4роч3в4п4равн3с4к4рипт3с4п4ритн3с4п4рият3с4п4ромо3с4т4ражд3с4т4рукт3с4т4рукц3т4ь4мяні3в4разлив3з4баланс3й4мовірн3с4постер3а4вторит3а4декват3а4постол3а4ргумен3е4легант3е4лемент3е4стакад3о4рдинац3у4люблен3у4разлив3у4рочист3у4станов3у4сувати3і4ніціатай4с3бергбактері4оба4с3енербез5і4менбо4є3здатбо4є3компбо4є3постбо4є3прип4в3антрацге2ть3мандер4ж5виддер4ж5думдер4ж5комдер4ж3бездер4ж5стрдисбалансди4с3гармди4с3квалди4с3комфди4с3контди4с3кредди4с3кретди4с3крецди4с3кримди4с3кусіди4с3кутуди4с3персди4с3петчди4с3плейди4с3позиди4с3пропди4с3трибди4с3трофєв4р3атомєпі4с5копєпи4с5копза4п3часті4л3е4тилкиї4венермі4н5е4кона4й3маслна4й3сприна4й3якісна3в4чітьобі3д4раноб4лдер4жперег4нійпере4д5смпід5о4динпо3б4лизупо3в4чітьпо5ж4нітьпос4т3каппос4т3компос4т3натпос4т3соцпор4т3ретпор4т3фелпро4ект3нпро3б4лемпро4м3майпр4о5платро4з5д4вороз5у4ченроз5і4менро4з’5єднро4з3громспе4ц3курспе4ц3мон3с4проможтур4к3менро5з4ора_ро5з4орахне4омальтне4окомунне4оландшне4оліберно4к3а4утте4одолітпів3о4валнаді4сторар4т3афішар4т3кафеар4т3майсар4т3мейсар4т3фактнаді4стотнайі4стотау4т3еколбеза4варібезе4місіо3а4налізц3а4налізз3а4налізм3а4налізпів3у4годроз3у4год_віді3м4р_пере3м4рво4станнєоо4плачувео4плачув",
10:"_без5о4соб_без3ро4з3те4х3ві4д3_пере4д3св_пере4д3фрбе4з5і4дейінтер3в’4юна4й3у4бог3в4р4одливба4с3антравід5о4бражвід5о4бразводо5с4токводо5з4бірго4с4п5роздер4ж5а4дмдер4ж5бюдждер4ж5нафтдер4ж5реєсдер4ж5служдвох4а5томди4с3паритди4с3функцкон4тр3аргмі4н5е4нерна4й7о4берна4й7о4гидна4й7о4голна4й7о4пукна4й7о4хайпере5п4ливпере3в4томпів5о4с4трпос4т3процпос4т3фіксспор4т3вирспор4т3залспор4т3комспор4т3майтор4г3предсво4єкорисро5з4о5рамро6з5о4ри_ень7о4кислнай3і4сторпів3і4сторар4т3взводар4т3медіаар4т3о4динар4т3о4збрар4т3центргіпер3а4ктнай3о4бразар4т3мейстго4ф3мейстдо4к3мейстхо4р3мейстміж3а4варінад3а4варібез3а4дреснай3е4фектбло4к3пост_блі4ц3ана_блі4ц3турнт3а4налізре3а4налізбо4р4т3мехбо4р4т3пробо4р4т3радпан3е4стетпар3е4стет",
11:"про4ф3ві4д3спе4ц3ві4д3_пере4д3бач_пере4д3виб_пере4д3ост_пере4д3пла_пере4д3пок_пере4д3усібрі4дж3портволь4т3метргі4д5ро5метдер4ж5а4томдер4ж5замовзе4кономитиказа4х3станквар4т3платжко4м5а4томкому4ненергна4й3обережна4й7о4грядоб4л3а4дмінперед5о4бідперед5у4мовпо4с4т5комупо4с4т3декрпо4с4т3радіпо4с4т5соціпро3с4тирадполі4т5еконро4з5міннийруко5с4тискспор4т3клубспор4т4с3мечорно3б4ривхво4є3г4ризпа4н3о4тецьконтр3у4дарпост3і4сторар4т3десантар4т3о4бстрар4т3у4станграф3о4бразгро4с3мейсткра4н3мейстшта4л3мейстєге4р3мейстпост3а4варі_блі4ц3криг_блі4ц3опит_блі4ц3торгбак3а4налізген3а4налізміж3а4налізгос4п3у4годбо4р4т3і4нжнай3о4станнперед3о4пла",
12:"_пере4д3умовволь4т3ампердер4ж3резервдорого5в4казінфор4м3агенпо4с4т5радянпо4с4тприватукр3і4н4банкперед3і4сторсупер3о4бразбаге4р3мейстбале4т3мейстбран4д3мейстполі4ц3мейстпо4ш4т3мейстшапі4т3мейстнапів3а4варіперед3а4варісупер3а4варісупер3е4фектгіпер3е4місіполі3а4налізбо4р4т3о4пер",
13:"по4с4т3контрацен4т4р3енергва4ль4д3мействе4ль4т3мейстдекре4т3мейсткапе4ль3мейст_блі4ц3і4спитперед3о4станн",
14:"енерго3з4береженерго3з4берігкварти4р3мейстфо4р4с4т3мейст",
15:"по4с4т3менопаузконце4р4т3мейст"
}
};
Hyphenator.config({
defaultlanguage:'en',
remoteloading:false
});