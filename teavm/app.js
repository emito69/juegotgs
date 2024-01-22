"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(APv){let AUL=2463534242,D_=()=>{let x=AUL;x^=x<<13;x^=x>>>17;x^=x<<5;AUL=x;return x;},O=f=>function(){return f(this);},M=f=>function(p1){return f(this,p1);},Bl=f=>function(p1,p2){return f(this,p1,p2);},Ba=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BK=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},ATJ=f=>function(){let args=Array.prototype.slice.apply(arguments);AUM(function(){f.apply(this,args);});},ATc=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=S(Fm(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=W(args[i]);}AUM(()=>{f.call(null,javaArgs);},callback);},BH=target=>target.$clinit=()=>{},ASj=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},E=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=Fm();}return function(){superclass.call(this);};},V=cls=>ATw(cls),Fm=()=>C,VD=()=>{{return ARy();}},Jt=t=>{{return AKV(t);}};let AUN=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AUO=(name,binaryName)=>{let cls
=AUN();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Ce=AUO("boolean","Z"),J3=AUO("char","C"),AUP=AUO("byte","B"),AUQ=AUO("short","S"),BM=AUO("int","I"),AH5=AUO("long","J"),Ej=AUO("float","F"),ABL=AUO("double","D"),Bq=AUO("void","V");let AUR=new ArrayBuffer(16),AUS=new DataView(AUR),AUT=new Float32Array(AUR),AUU=new Float64Array(AUR),AUV=new Int32Array(AUR),
AUB;if(typeof BigInt!=='function'){AUB=n=>{AUS.setFloat64(0,n,true);return new AUW(AUS.getInt32(0,true),AUS.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AUB=n=>{AUS.setFloat64(0,n,true);let lo=AUS.getInt32(0,true),hi=AUS.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AUX=new BigInt64Array(AUR);AUB=n=>{AUU[0]=n;return AUX[0];};}let PM=n=>{AUT[0]=n;return AUV[0];},Kx=n=>{AUV[0]=n;return AUT[0];},Cf=(a,b)=>a>b?1:a<b? -1:a===b?0:1,Da
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},DL=(a,b)=>(a>>>0)/(b>>>0)>>>0,AS$=(a,b)=>(a>>>0)%(b>>>0)>>>0,EC=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AUW(lo,hi){this.lo=lo|0;this.hi=hi|0;}AUW.prototype.__teavm_class__=()=>{return "long";};let AUY=a=>(a.hi&0x80000000)===0,AUZ=a=>(a.hi&0x80000000)!==0,AU0=1<<18,B6,D,R,DK,AS1,Be,AU1;if(typeof BigInt!=="function"){AUW.prototype.toString=function(){let result=[],n=this,
positive=AUY(n);if(!positive){n=ATm(n);}let radix=new AUW(10,0);do {let divRem=AU1(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AUW.prototype.valueOf=function(){return AS1(this);};B6=new AUW(0,0);R=val=>new AUW(val, -(val<0)|0);DK=val=>val>=0?new AUW(val|0,val/0x100000000|0):ATm(new AUW( -val|0, -val/0x100000000|0));D=(lo,hi)=>new AUW(lo,hi);AS1=val=>0x100000000*val.hi+(val.lo>>>0);Be=
val=>val.lo;}else {B6=BigInt(0);D=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));R=val=>BigInt.asIntN(64,BigInt(val|0));DK=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));AS1=val=>Number(val);Be=val=>Number(BigInt.asIntN(32,val))|0;}let DJ,ABX,AA9,ASn,ASq,ABy,ATr,CT,AEI,AU2,Y,L7,V7,ATt,ATm,CS,ABW,HB,Fe,AS0,Bb;if(typeof BigInt!=='function'){DJ=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ABX=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;AA9=(a,b)=>{if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};ASn=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};ASq=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};ABy=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo
&1)<=(b.lo&1);};CT=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return DK(a.lo+b.lo);}else if(AU3.abs(a.hi)<AU0&&AU3.abs(b.hi)<AU0){return DK(AS1(a)+AS1(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AUW(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AU2=a=>{let lo
=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AUW(lo,hi);};ATm=a=>AU2(new AUW(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));AEI=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return DK(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AUW(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF
|(hihi&0xFFFF)<<16);};ATr=(a,b)=>{let r=EC(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Y=(a,b)=>{let positive=AUZ(a)===AUZ(b);if(AUZ(a)){a=ATm(a);}if(AUZ(b)){b=ATm(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)
+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AUW(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:ATm(result);};L7=(a,b)=>{if(AU3.abs(a.hi)<AU0&&AU3.abs(b.hi)<AU0){return DK(AS1(a)/AS1(b));}return (AU1(a,b))[0];};ATt=(a,b)=>
{if(a.hi>=0&&a.hi<AU0&&b.hi>=0&&b.hi<AU0){return DK(AS1(a)/AS1(b));}return (AU4(a,b))[0];};V7=(a,b)=>{if(AU3.abs(a.hi)<AU0&&AU3.abs(b.hi)<AU0){return DK(AS1(a)%AS1(b));}return (AU1(a,b))[1];};AU1=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AUZ(a)===AUZ(b);if(AUZ(a)){a=ATm(a);}if(AUZ(b)){b=ATm(b);}a=new AU5(a.lo,a.hi,0);b=new AU5(b.lo,b.hi,0);let q=AU6(a,b);a=new AUW(a.lo,a.hi);q=new AUW(q.lo,q.hi);return positive?[q,a]:[ATm(q),ATm(a)];};let AU4=(a,b)=>{if(b.lo===0&&b.hi===
0){throw new Error("Division by zero");}a=new AU5(a.lo,a.hi,0);b=new AU5(b.lo,b.hi,0);let q=AU6(a,b);a=new AUW(a.lo,a.hi);q=new AUW(q.lo,q.hi);return [q,a];};CS=(a,b)=>new AUW(a.lo&b.lo,a.hi&b.hi);ABW=(a,b)=>new AUW(a.lo|b.lo,a.hi|b.hi);HB=(a,b)=>new AUW(a.lo^b.lo,a.hi^b.hi);Fe=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AUW(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AUW(0,a.lo);}else {return new AUW(0,a.lo<<b -32);}};AS0=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AUW(a.lo
>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AUW(a.hi,a.hi>>31);}else {return new AUW(a.hi>>b -32,a.hi>>31);}};Bb=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AUW(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AUW(a.hi,0);}else {return new AUW(a.hi>>>b -32,0);}};function AU5(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AU7=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>
16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AU8=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&
0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AU9=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AU$=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi
>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AU_=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AVa=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi
=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AVb=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AVc=a=>new AU5(a.lo,a.hi,a.sup),AU6=(a,b)=>{let bits=b.hi!==0?AU_(b.hi):AU_(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits%16;AVa(b,bits);AVa(a,dividentBits);let q
=new AU5(0,0,0);while(sz-->0){AVa(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AVc(b);AU7(t,digit);if(AU$(t,a)>=0){while(AU$(t,a)>0){AU8(t,b); --digit;}}else {while(true){let nextT=AVc(t);AU9(nextT,b);if(AU$(nextT,a)>0){break;}t=nextT;++digit;}}AU8(a,t);q.lo|=digit;AVa(a,16);}AVb(a,bits+16);return q;};}else {DJ=(a,b)=>a===b;ABX=(a,b)=>a!==b;AA9=(a,b)=>a>b;ASn=(a,b)=>a>=b;ASq=(a,b)=>a<b;ABy=(a,b)=>a<=b;CT=(a,b)=>BigInt.asIntN(64,a+b);AU2=a=>BigInt.asIntN(64,a+1);ATm=a=>
BigInt.asIntN(64, -a);AEI=(a,b)=>BigInt.asIntN(64,a -b);ATr=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Y=(a,b)=>BigInt.asIntN(64,a*b);L7=(a,b)=>BigInt.asIntN(64,a/b);ATt=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));V7=(a,b)=>BigInt.asIntN(64,a%b);CS=(a,b)=>BigInt.asIntN(64,a&b);ABW=(a,b)=>BigInt.asIntN(64,a|b);HB=(a,b)=>BigInt.asIntN(64,a^b);Fe=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));AS0=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));Bb=(a,b)=>BigInt.asIntN(64,
BigInt.asUintN(64,a)>>BigInt(b&63));}let S=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (DM(cls))(data);},P=(cls,data)=>new (DM(cls))(data),Zj;if(typeof BigInt64Array!=='function'){Zj=init=>new AVd(init);}else {Zj=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AVd(buffer);};}let G=sz=>new AVe(new Uint16Array(sz)),AEv=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AVe(buffer);},BE=sz=>new AVf(new Int8Array(sz)),Kw=sz=>new AVg(new Int16Array(sz)),
AUC=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AVg(buffer);},U=sz=>new AVh(new Int32Array(sz)),H3=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AVh(buffer);},Jq=sz=>new AVi(new Int8Array(sz)),CB=sz=>new AVj(new Float32Array(sz)),DM=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(Fm()).call(this);this.data=data;}JavaArray.prototype=Object.create((Fm()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (DM(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[Fm()],primitive:false,superclass:Fm(),name:name,binaryName
:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AVk,ASu=strings=>{AVl();AVk=new Array(strings.length);for(let i=0;i<strings.length;++i){AVk[i]=AVm(W(strings[i]));}},A=index=>AVk[index],K=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,array.subarray(i,next));}return result;},
AR7=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},W=str=>str===null?null:St(str),Bs=str=>str===null?null:str.jn,AVl=()=>(()=>{})(),AVm;{AVm=str=>str;}let B0=(obj,cls)=>obj instanceof Fm()&&!!obj.constructor.$meta&&AVn(obj.constructor,cls),AVn=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AVn(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+
1|0){if(AVn(supertypes[i],to)){return true;}}return false;};let B=ex=>{throw ANI(ex);},AVo=Symbol("javaException"),ANI=ex=>{let err=ex.$jsException;if(!err){let javaCause=AVp(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AVq("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AVo]=ex;ex.$jsException=err;AVr(err,ex);}return err;},AVr=(err,ex)=>{if(typeof AVs==="function"&&err.stack)
{let stack=AVs(err.stack),javaStack=S(AVt(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AVu(W(element.className),W(element.methodName),W(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AVv(ex,javaStack);}}},AVq;if(typeof AVw==='object'){let AVx=Symbol("defaultMessage");AVq=function AVq(message,cause){let self=Reflect.construct(Error,[void 0,cause],AVq);Object.setPrototypeOf(self,AVq.prototype);self[AVx]
=message;return self;};AVq.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AVq},message:{get(){try {let javaException=this[AVo];if(typeof javaException==='object'){let javaMessage=AVy(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AVx];}catch(AVz){return "Exception occurred trying to extract Java exception message: "+AVz;}}}});}else {AVq=Error;}let AST=e=>e instanceof Error&&typeof e[AVo]==='object'
?e[AVo]:null,Br=err=>{let ex=err[AVo];if(!ex){ex=AVA(W("(JavaScript) "+err.toString()));err[AVo]=ex;ex.$jsException=err;AVr(err,ex);}return ex;},AVA=message=>ASg(message),AVy=t=>AL_(t),AVp=t=>ATQ(t),AVt=()=>Fm(),AVu=(className,methodName,fileName,lineNumber)=>{{return null;}},AVv=(e,stack)=>{};let AVB=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=next+1;}buffer+=msg.substring(index);};},
BU=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AVB(msg=>console.info(msg)):()=>{},Dk=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AVB(msg=>console.error(msg)):()=>{};let AVC=null,ARN=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AVC=packages;},CX=data=>{let packages=AVC,i=0;while(i<data.length)
{let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive
=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=
clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AVD(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AVD.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AVD.prototype.s
=AVD.prototype.push;AVD.prototype.pop=function(){return this.stack.pop();};AVD.prototype.l=AVD.prototype.pop;AVD.prototype.isResuming=function(){return this.status===2;};AVD.prototype.isSuspending=function(){return this.status===1;};AVD.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AVD.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(AVE!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback
=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AVD.prototype.resume=function(){if(AVE!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AVD.prototype.run=function(){AVE=this;let result;try {result=this.runner();}catch(AVz){result=AVz;}finally {AVE=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let E$
=()=>{let thread=C2();return thread!=null&&thread.isSuspending();},Fa=()=>{let thread=C2();return thread!=null&&thread.isResuming();},AUM=(runner,callback)=>(new AVD(runner)).start(callback),AVE=null,C2=()=>AVE,E4=()=>{throw new Error("Invalid recorded state");};function C(){this.lr=null;this.$id$=0;}
let Fo=b=>{let c;if(b.lr===null){c=new H8;c.lo=BQ;b.lr=c;}b=b.lr;c=b.lo;if(c===null)b.lo=BQ;else if(c!==BQ){c=new B5;c.jp=1;c.jq=1;c.jr=A(0);B(c);}b.l2=b.l2+1|0;},
Ds=b=>{let c,d;if(!GM(b)){c=b.lr;if(c.lo===BQ){d=c.l2-1|0;c.l2=d;if(!d)c.lo=null;GM(b);return;}}b=new If;b.jp=1;b.jq=1;B(b);},
ATz=b=>{ADV(b,1);},
ADV=(b,c)=>{let d,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.lr===null){d=new H8;d.lo=BQ;b.lr=d;}d=b.lr;if(d.lo===null)d.lo=BQ;if(d.lo===BQ){d.l2=d.l2+c|0;return;}$p=1;case 1:WO(b,c);if(E$()){break _;}return;default:E4();}}C2().s(b,c,d,$p);},
AGx=(b,c,d)=>{let e,f,g;e=BQ;f=b.lr;if(f===null){f=new H8;f.lo=e;b.lr=f;if(e!==e)BQ=e;BQ.nI=D5();b=b.lr;b.l2=b.l2+c|0;b=null;d.oC.e(b);return;}if(f.lo===null){f.lo=e;if(e!==e)BQ=e;BQ.nI=D5();b=b.lr;b.l2=b.l2+c|0;b=null;d.oC.e(b);return;}if(f.nD===null)f.nD=AFQ();f=f.nD;g=new RI;g.ud=e;g.ue=b;g.ub=c;g.uc=d;d=g;f.push(d);},
ATD=b=>{Wd(b,1);},
Wd=(b,c)=>{let d;if(!GM(b)){d=b.lr;if(d.lo===BQ){c=d.l2-c|0;d.l2=c;if(c>0)return;d.lo=null;d=d.nD;if(d!==null&&!(d.length?0:1)){d=new UO;d.uz=b;Mk(d,0);}else GM(b);return;}}b=new If;b.jp=1;b.jq=1;B(b);},
AMT=b=>{let c,d,e;if(!GM(b)){c=b.lr;if(c.lo===null){b=c.nD;if(b!==null&&!(b.length?0:1)){b=c.nD.shift();Bu();if(b!==null&&!(b instanceof Fm()))b=B9(b);d=b;c.nD=null;b=d.ud;c=d.ue;e=d.ub;d=d.uc;if(BQ!==b)BQ=b;BQ.nI=D5();c=c.lr;c.lo=b;c.l2=c.l2+e|0;b=null;d.oC.e(b);}return;}}},
GM=a=>{let b,c;b=a.lr;if(b===null)return 1;a:{if(b.lo===null){c=b.nD;if(!(c!==null&&!(c.length?0:1))){b=b.sZ;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.lr=null;return 1;},
BA=a=>{return;},
ASl=()=>{let a=new C();BA(a);return a;},
ATA=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BI;c.jG=b;d=c;b.classObject=d;}}return c;},
AAF=a=>{let b,c;b=a;if(!b.$id$){c=D_();b.$id$=c;}return a.$id$;},
AHC=(a,b)=>{return a!==b?0:1;},
OL=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=D_();b.$id$=c;}d=Bc(a.$id$,4);b=new J;b.jo=G(16);F(b,b.jm,A(1));e=b.jm;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jo;g=f.data;h=b.jm;i=g.length;if(h>=0&&h<=(i-0|0)){c.jn=K(f.data,0,h);return c;}b=new I;b.jp=1;b.jq=1;B(b);},
AS8=a=>{let b,c,d;if(!B0(a,EX)&&a.constructor.$meta.item===null){b=new Tk;b.jp=1;b.jq=1;B(b);}b=VU(a);c=b;d=D_();c.$id$=d;return b;},
MO=a=>{let b,c;b=a.lr;if(!(b!==null&&b.lo===BQ?1:0)){b=new If;b.jp=1;b.jq=1;B(b);}b=b.sZ;if(b===null)return;while(!(b.length?0:1)){c=b.shift();Bu();if(c!==null&&!(c instanceof Fm()))c=B9(c);c=c;if(!c.m())Mk(c,0);}a.lr.sZ=null;},
WO=(b,c)=>{let thread=C2();let javaThread=VD();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Jt(javaThread);thread.resume();};callback.gU=e=>{thread.attribute=ANI(e);Jt(javaThread);thread.resume();};callback=Rd(callback);thread.suspend(()=>{try {AGx(b,c,callback);;}catch(M4){callback.gU(M4);}});return null;};
let AOb=E();
let AE8=b=>{let c,d,e,f;Ur=G(0);c=new H;c.jn="";Lq=c;No=new MU;AMx();c=new Bv;c.ku=1.0;c.kt=0.0;NT=c;c=new Bv;c.ku=0.0;c.kt=1.0;NS=c;c=new Bv;c.ku=0.0;c.kt=0.0;Qe=c;KE=new Bv;RP=new Bv;Xj();SC=new Bv;SF=new Bv;ZG();Rh=new Bv;Ru=new Bv;c=new D7;c.nh=0.0;c.ne=0.0;c.nf=0.0;c.ng=0.0;Qp=c;c=new D7;c.nh=0.0;c.ne=0.0;c.nf=0.0;c.ng=0.0;Qo=c;Pu=new EU;R5=new EU;TQ=0.10000000149011612;AQD();P8=V(Ej);VC();On=S(IH,111);Sp=new Bv;Sz=new Bv;PB=new C;AFb();Ns=V(BM);AB9();OT=V(AH5);Nr=V(J3);SE=S(LX,128);WR();AID();PY=new Bv;PZ
=new Bv;P0=new Bv;RS=0.4000000059604645;Nq=0.10000000149011612;Ts=new Bv;AKp();QH=new Bv;Q_=new Bv;UU=new Bv;UW=new Bv;UV=new Bv;APa();AQB();AA$();Oc=new BD;ALl();HG=0.0;AD8();Qu=CB(3);AIX();AE0();AGU();C1=1;Z6();UX=new JI;PK=new JH;AHu();N=1;ABo();Ib=new Mz;AJs();X6();c=new MZ;b=S(H,0);d=b.data;IW(A(3));e=d.length;f=0;while(f<e){IW(d[f]);f=f+1|0;}c.tE=A(3);c.uq=b.p();Cm=c;APr();U6=V(ABL);ADZ();AQN();c=new GX;c.rc=A(4);Ci=c;c=new GX;c.rc=A(5);Jm=c;ADB();AMF();YB();AEn();ABR();Vt();AQ3();ADp();ZQ();J9=1;Ym();AKl();c
=new G$;c.qm=1;Rc=c;c=new G$;c.qm=0;RF=c;PI=V(Ce);c=AQG(A(6));c.qy=640;c.oH=480;Pd(new K3,new O2,c);};
let Nt=E();
let ACO=0,ACV=0,Xc=0,AQO=0,AA3=0;
let RH=()=>{RH=BH(Nt);AE$();};
let AE$=()=>{ACO=CY(W(navigator.platform),A(7));ACV=CY(W(navigator.platform),A(8));Xc=CY(W(navigator.platform),A(9));AQO=!CY(W(navigator.platform),A(10))&&!CY(W(navigator.platform),A(11))?0:1;AA3=!CY(W(navigator.platform),A(12))&&!CY(W(navigator.platform),A(13))&&!CY(W(navigator.platform),A(14))?0:1;};
let Ni=E(0);
let Lw=E();
let CN=E(0);
function Mn(){let a=this;Lw.call(a);a.n1=null;a.tG=null;a.wB=0;a.lx=null;a.mr=null;a.qg=null;a.vc=null;a.rC=null;a.rD=null;a.v9=0;a.v$=0;a.qI=null;a.qU=null;a.qQ=null;a.vF=null;a.vl=0;a.pt=null;a.vB=0;a.xL=0;a.up=0;a.sw=null;a.uA=null;}
let BG=0;
let RC=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.mr=new Bv;a.qg=S(CK,20);a.vc=Jq(20);a.rC=U(20);a.rD=U(20);d=new Mg;HN(d,1,4,V(Qh));a.vF=d;a.vl=1;a.sw=Ih;e=new BD;e.j8=0.0;e.j7=1.0;e.j6=0.0;e.j5=0.8500000238418579;CP(e);a.uA=e;if(b===null){b=new Bj;b.jp=1;b.jq=1;b.jr=A(15);B(b);}if(c===null){b=new Bj;b.jp=1;b.jq=1;b.jr=A(16);B(b);}a.n1=b;a.tG=c;c=new By;EK(c);e=new Mg;HN(e,1,4,V(CK));c.jM=e;e=new RQ;e.nQ=1.0;e.nO=0.0;e.nP=0.0;e.nS=0.0;e.nT=1.0;e.nR=0.0;c.rV=e;c.sI=C7();c.or=C7();c.mw=1;a.lx=c;c.kK=a;c=c.jM;f=c.jE;g=0;h
=c.js;while(g<h){f.data[g].w(a);g=g+1|0;}g=B3.kr.width;i=B3.kr.height;b.px=0;b.py=0;b.p7=g;b.qi=i;j=g;k=b.qz;j=j*k;k=i*k;b.rp=j;b.rA=k;Mu(b,1);},
AT7=(a,b)=>{let c=new Mn();RC(c,a,b);return c;},
AK3=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.pt===null){b=Rn(5000,null);a.pt=b;b.q9=1;}a:{if(!a.xL&&!a.up&&a.sw===Ih){if(!a.vB)break a;b=a.lx;b.jX=1;BG=1;b=b.jM;if(Cx){c=new Cq;c.j$=1;c.kc=b;c.k7=1;}else{if(b.jW===null){c=new CW;c.lh=b;c.lj=1;b.jW=c;}c=CE(b.jW);}b:while(true){if(!c.j$){c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(c.kQ>=c.kc.js?0:1))break a;b=Cl(c);if(!(b instanceof By)){b.jX=1;BG=1;}else{b=b;b.jX=1;BG=1;b=b.jM;if(Cx){d=new Cq;d.j$=1;d.kc=b;d.k7=1;}else{if(b.jW
===null){d=new CW;d.lh=b;d.lj=1;b.jW=d;}d=CE(b.jW);}while(true){if(!d.j$){c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(d.kQ>=d.kc.js?0:1))break;b=Cl(d);if(!(b instanceof By)){b.jX=1;BG=1;}else{b=b;b.jX=1;BG=1;b=b.jM;if(Cx){e=new Cq;e.j$=1;e.kc=b;e.k7=1;}else{if(b.jW===null){e=new CW;e.lh=b;e.lj=1;b.jW=e;}e=CE(b.jW);}while(true){if(!e.j$){c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(e.kQ>=e.kc.js?0:1))break;b=Cl(e);if(!(b instanceof By)){b.jX=1;BG=1;}else{b=b;b.jX=1;BG=1;f=b.jM;if(Cx){b=new Cq;b.j$=1;b.kc=f;b.k7
=1;}else{if(f.jW===null){b=new CW;BA(b);b.lh=f;b.lj=1;f.jW=b;}b=CE(f.jW);}while(true){if(!b.j$){c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(b.kQ>=b.kc.js?0:1))break;f=Cl(b);if(!(f instanceof By)){f.jX=1;BG=1;}else{f=f;f.jX=1;BG=1;f=f.jM;if(Cx){g=new Cq;BA(g);g.j$=1;g.kc=f;g.k7=1;}else{if(f.jW===null)f.jW=KY(f,1);g=CE(f.jW);}while(true){if(!g.j$){c=new Q;Gp(c,A(17));B(c);}if(!(g.kQ>=g.kc.js?0:1))break;f=Cl(g);if(!(f instanceof By)){f.jX=1;BG=1;}else{f=f;f.jX=1;BG=1;f=f.jM;if(Cx)h=Ll(f,1);else{if(f.jW===null)f.jW
=M0(f);h=CE(f.jW);}while(true){if(!h.j$)break b;if(!(h.kQ>=h.kc.js?0:1))break;f=Cl(h);if(!(f instanceof By)){f.jX=1;BG=1;}else{f=f;EM(f,1);f=FR(f.jM);while(G6(f)){i=Cl(f);if(!(i instanceof By))EM(i,1);else KN(i,1,1);}}}}}}}}}}}}}B(JU(A(17)));}c=a.mr;b=Pp;j=b.lc.data[0];k=b.lb.data[0];c.ku=j;c.kt=k;Jv(a.n1,c);b=a.mr;j=b.ku;k=b.kt;c=a.lx;b.ku=j;b.kt=k;MG(c,b);b=a.lx;c=a.mr;c=Mx(b,c.ku,c.kt,1);if(c===null)return;if(!a.up)b=c;else{b=c.kR;if(b===null)b=c;}c=a.sw;if(c===Ih){b.jX=1;BG=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof D9)break;b=b.kR;}}if(b===null)return;b.J(c);}d:{if(a.vB&&b instanceof By){c=b;c.jX=1;BG=1;c=c.jM;if(Cx){d=new Cq;d.j$=1;d.kc=c;d.k7=1;}else{if(c.jW===null){d=new CW;d.lh=c;d.lj=1;c.jW=d;}d=CE(c.jW);}e:while(true){if(!d.j$){c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(d.kQ>=d.kc.js?0:1))break d;c=Cl(d);if(!(c instanceof By)){c.jX=1;BG=1;}else{c=c;c.jX=1;BG=1;c=c.jM;if(Cx){e=new Cq;e.j$=1;e.kc=c;e.k7=1;}else{if(c.jW===null){e=new CW;e.lh=c;e.lj=1;c.jW=e;}e=CE(c.jW);}while(true){if(!e.j$)
{c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(e.kQ>=e.kc.js?0:1))break;c=Cl(e);if(!(c instanceof By)){c.jX=1;BG=1;}else{c=c;c.jX=1;BG=1;c=c.jM;if(Cx){f=new Cq;f.j$=1;f.kc=c;f.k7=1;}else{if(c.jW===null){f=new CW;f.lh=c;f.lj=1;c.jW=f;}f=CE(c.jW);}while(true){if(!f.j$){c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(f.kQ>=f.kc.js?0:1))break;c=Cl(f);if(!(c instanceof By)){c.jX=1;BG=1;}else{c=c;c.jX=1;BG=1;c=c.jM;if(Cx){g=new Cq;g.j$=1;g.kc=c;g.k7=1;}else{if(c.jW===null){g=new CW;BA(g);g.lh=c;g.lj=1;c.jW=g;}g=CE(c.jW);}while
(true){if(!g.j$){c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}if(!(g.kQ>=g.kc.js?0:1))break;c=Cl(g);if(!(c instanceof By)){c.jX=1;BG=1;}else{c=c;c.jX=1;BG=1;c=c.jM;if(Cx){h=new Cq;BA(h);h.j$=1;h.kc=c;h.k7=1;}else{if(c.jW===null)c.jW=KY(c,1);h=CE(c.jW);}while(true){if(!h.j$){c=new Q;Gp(c,A(17));B(c);}if(!(h.kQ>=h.kc.js?0:1))break;c=Cl(h);if(!(c instanceof By)){c.jX=1;BG=1;}else{c=c;c.jX=1;BG=1;c=c.jM;if(Cx)i=Ll(c,1);else{if(c.jW===null)c.jW=M0(c);i=CE(c.jW);}while(true){if(!i.j$)break e;if(!(i.kQ>=i.kc.js?0:1))break;c
=Cl(i);if(!(c instanceof By)){c.jX=1;BG=1;}else{c=c;EM(c,1);c=FR(c.jM);while(G6(c)){l=Cl(c);if(!(l instanceof By))EM(l,1);else KN(l,1,1);}}}}}}}}}}}}}B(JU(A(17)));}}c=a.lx;if(c!==b)f:{c.jX=0;if(c instanceof By){c=c.jM;m=0;n=c.js;g:while(true){if(m>=n)break f;if(m>=c.js){d=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,m,10);F(b,b.jm,A(19));m=c.js;L(b,b.jm,m,10);c=new H;o=b.jo;p=o.data;n=b.jm;q=p.length;if(n>=0&&n<=(q-0|0)){c.jn=K(o.data,0,n);d.jp=1;d.jq=1;d.jr=c;B(d);}b=new I;b.jp=1;b.jq=1;B(b);}d=c.jE.data[m];if
(d!==b)h:{d.jX=0;if(d instanceof By){d=d.jM;q=0;r=d.js;while(true){if(q>=r)break h;if(q>=d.js){c=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,q,10);F(b,b.jm,A(19));m=d.js;L(b,b.jm,m,10);d=new H;o=b.jo;p=o.data;n=b.jm;q=p.length;if(n>=0&&n<=(q-0|0)){d.jn=K(o.data,0,n);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}e=d.jE.data[q];if(e!==b)i:{e.jX=0;if(e instanceof By){e=e.jM;s=0;t=e.js;while(true){if(s>=t)break i;if(s>=e.js){c=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,s,10);F(b,b.jm,A(19));m
=e.js;L(b,b.jm,m,10);d=new H;o=b.jo;p=o.data;n=b.jm;q=p.length;if(n>=0&&n<=(q-0|0)){d.jn=K(o.data,0,n);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}f=e.jE.data[s];if(f!==b)j:{f.jX=0;if(f instanceof By){f=f.jM;u=0;v=f.js;while(true){if(u>=v)break j;if(u>=f.js){c=new I;b=new J;BA(b);b.jo=G(16);CG(b,b.jm,A(18));L(b,b.jm,u,10);CG(b,b.jm,A(19));m=f.js;L(b,b.jm,m,10);d=new H;o=b.jo;p=o.data;n=b.jm;q=p.length;if(n>=0&&n<=(q-0|0)){d.jn=K(o.data,0,n);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}g
=f.jE.data[u];if(g!==b)k:{g.jX=0;if(g instanceof By){g=g.jM;w=0;x=g.js;while(true){if(w>=x)break k;if(w>=g.js){c=new I;b=new J;DI(b,16);B_(b,b.jm,A(18));HW(b,w,10);B_(b,b.jm,A(19));HW(b,g.js,10);d=new H;o=b.jo;p=o.data;n=b.jm;q=p.length;if(n>=0&&n<=(q-0|0)){d.jn=K(o.data,0,n);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}h=g.jE.data[w];if(h!==b)l:{h.jX=0;if(h instanceof By){h=h.jM;y=0;z=h.js;while(true){if(y>=z)break l;if(y>=h.js){c=new I;b=new J;EF(b);IN(b,A(18));H1(b,y);IN(b,A(19));H1(b,h.js);d=new H;o
=b.jo;p=o.data;n=b.jm;q=p.length;if(n>=0&&n<=(q-0|0)){d.jn=K(o.data,0,n);Gp(c,d);B(c);}b=new I;b.jp=1;b.jq=1;B(b);}i=h.jE.data[y];if(i!==b)m:{i.jX=0;if(i instanceof By){l=i.jM;ba=0;bb=l.js;while(true){if(ba>=bb)break m;if(ba>=l.js)break g;i=l.jE.data[ba];if(i!==b)n:{EM(i,0);if(i instanceof By){i=i.jM;bc=0;bd=i.js;while(true){if(bc>=bd)break n;Of(a,Gq(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(To(EG(Hh(HS(Hh(HS(Ev(),A(18)),ba),A(19)),l.js))));}}}BL.V(3042);b
=a.pt;c=a.n1.pA.pf;Ck(b.n2,c.kd);b.lB=1;b=a.pt;if(!b.q9){c=new B5;c.jp=1;c.jq=1;c.jr=A(20);B(c);}DR(b,DB);N$(a.lx,a.pt);b=a.pt;DQ(b.jZ);b.la=null;BL.ba(3042);},
Of=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.jX=0;if(b instanceof By){d=b.jM;e=0;f=d.js;while(true){if(e>=f)break a;if(e>=d.js){c=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,e,10);F(b,b.jm,A(19));e=d.js;L(b,b.jm,e,10);d=new H;g=b.jo;h=g.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0)){d.jn=K(g.data,0,f);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}b=d.jE.data[e];if(b!==c)b:{b.jX=0;if(b instanceof By){j=b.jM;i=0;k=j.js;while(true){if(i>=k)break b;if
(i>=j.js){c=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,i,10);F(b,b.jm,A(19));e=j.js;L(b,b.jm,e,10);d=new H;g=b.jo;h=g.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0)){d.jn=K(g.data,0,f);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}b=j.jE.data[i];if(b!==c)c:{b.jX=0;if(b instanceof By){l=b.jM;m=0;n=l.js;while(true){if(m>=n)break c;if(m>=l.js){c=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,m,10);F(b,b.jm,A(19));e=l.js;L(b,b.jm,e,10);d=new H;g=b.jo;h=g.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0))
{d.jn=K(g.data,0,f);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}b=l.jE.data[m];if(b!==c)d:{b.jX=0;if(b instanceof By){b=b.jM;o=0;p=b.js;while(true){if(o>=p)break d;if(o>=b.js){d=new I;c=new J;c.jo=G(16);F(c,c.jm,A(18));L(c,c.jm,o,10);F(c,c.jm,A(19));e=b.js;L(c,c.jm,e,10);b=new H;g=c.jo;h=g.data;f=c.jm;i=h.length;if(f>=0&&f<=(i-0|0)){b.jn=K(g.data,0,f);d.jp=1;d.jq=1;d.jr=b;B(d);}b=new I;b.jp=1;b.jq=1;B(b);}q=b.jE.data[o];if(q!==c)e:{q.jX=0;if(q instanceof By){r=q.jM;s=0;t=r.js;while(true){if(s>=t)break e;if
(s>=r.js){c=new I;b=new J;BA(b);b.jo=G(16);CG(b,b.jm,A(18));L(b,b.jm,s,10);CG(b,b.jm,A(19));e=r.js;L(b,b.jm,e,10);d=new H;g=b.jo;h=g.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0)){d.jn=K(g.data,0,f);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}q=r.jE.data[s];if(q!==c)f:{q.jX=0;if(q instanceof By){q=q.jM;u=0;v=q.js;while(true){if(u>=v)break f;if(u>=q.js){c=new I;b=new J;DI(b,16);B_(b,b.jm,A(18));HW(b,u,10);B_(b,b.jm,A(19));HW(b,q.js,10);d=new H;g=b.jo;h=g.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0)){d.jn
=K(g.data,0,f);c.jp=1;c.jq=1;c.jr=d;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}w=q.jE.data[u];if(w!==c)g:{w.jX=0;if(w instanceof By){w=w.jM;x=0;y=w.js;while(true){if(x>=y)break g;if(x>=w.js){c=new I;b=new J;EF(b);IN(b,A(18));H1(b,x);IN(b,A(19));H1(b,w.js);d=new H;g=b.jo;h=g.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0)){d.jn=K(g.data,0,f);Gp(c,d);B(c);}b=new I;b.jp=1;b.jq=1;B(b);}z=w.jE.data[x];if(z!==c)h:{z.jX=0;if(z instanceof By){z=z.jM;ba=0;bb=z.js;while(true){if(ba>=bb)break h;if(ba>=z.js)B(To(EG(Hh(HS(Hh(HS(Ev(),
A(18)),ba),A(19)),z.js))));bc=z.jE.data[ba];if(bc!==c)i:{EM(bc,0);if(bc instanceof By){bc=bc.jM;bd=0;be=bc.js;while(true){if(bd>=be)break i;Of(a,Gq(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
ALW=(a,b)=>{let c,d,e,f,g;c=0;d=a.qg.data.length;while(c<d){e=a.qg.data;f=e[c];if(a.vc.data[c])e[c]=O9(a,f,a.rC.data[c],a.rD.data[c],c);else if(f!==null){e[c]=null;M8(a,f,a.rC.data[c],a.rD.data[c],c);}c=c+1|0;}g=GW;if(!(g!==Mf&&g!==LV&&g!==g))a.qI=O9(a,a.qI,a.v9,a.v$,(-1));Qz(a.lx,b);},
O9=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.mr;g=c;h=d;f.ku=g;f.kt=h;Jv(a.n1,f);f=a.mr;g=f.ku;h=f.kt;i=a.lx;f.ku=g;f.kt=h;MG(i,f);f=a.lx;i=a.mr;j=Mx(f,i.ku,i.kt,1);if(j===b)return b;if(b!==null){Dw();i=BW;d=B2(i,V(BR));k=d<0?null:i.kA.data[d];if(k===null){k=new DV;i=new Bt;i.kk=0;i.jE=S(C,4);k.kb=i;k.kU=100;a:{try{i=Eh(V(BR),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{i=Ed(V(BR),null);Eq(i,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}i
=null;}k.kX=i;if(i===null){b=new Bz;i=new J;i.jo=G(16);F(i,i.jm,A(21));if(V(BR).jI===null)V(BR).jI=W(V(BR).jG.$meta.name);f=V(BR).jI;F(i,i.jm,f);f=new H;l=i.jo;m=l.data;d=i.jm;e=m.length;if(d>=0&&d<=(e-0|0)){f.jn=K(l.data,0,d);b.jp=1;b.jq=1;b.jr=f;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}C6(BW,V(BR),k);}f=k.kb;c=f.js;if(c){if(!c){b=new B5;b.jp=1;b.jq=1;b.jr=A(22);B(b);}c=c-1|0;f.js=c;l=f.jE.data;f=l[c];l[c]=null;}else b:{try{f=Fx(k.kX,null);break b;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}i
=new Q;b=new J;b.jo=G(16);F(b,b.jm,A(23));n=k.kX.l6.l5;if(n.jI===null)n.jI=W(n.jG.$meta.name);k=n.jI;F(b,b.jm,k);k=new H;l=b.jo;m=l.data;d=b.jm;e=m.length;if(d>=0&&d<=(e-0|0)){k.jn=K(l.data,0,d);i.jp=1;i.jq=1;i.jr=k;i.le=f;B(i);}b=new I;b.jp=1;b.jq=1;B(b);}f=f;f.pQ=Ig;f.kV=a;i=a.mr;f.rt=i.ku;f.ru=i.kt;f.rz=e;f.mj=j;MY(b,f);i=BW;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BI;k.jG=o;p=k;o.classObject=p;}}c=B2(i,k);i=c<0?null:i.kA.data[c];if(i!==null){k=i.kb;if(k.js<i.kU){BN(k,f);c
=i.kM;d=i.kb.js;if(c>d)d=c;i.kM=d;if(B0(f,BS)){f=f;f.kV=null;f.ly=null;f.lJ=null;f.lQ=0;f.lw=1;f.lL=0;f.lM=0;f.k_=0;f.mj=null;f.mH=(-1);}}else if(B0(f,BS)){f=f;f.kV=null;f.ly=null;f.lJ=null;f.lQ=0;f.lw=1;f.lL=0;f.lM=0;f.k_=0;f.mj=null;f.mH=(-1);}}}if(j!==null){Dw();i=BW;d=B2(i,V(BR));k=d<0?null:i.kA.data[d];if(k===null){k=new DV;i=new Bt;i.kk=0;i.jE=S(C,4);k.kb=i;k.kU=100;c:{try{i=Eh(V(BR),null);break c;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{i=Ed(V(BR),null);Eq(i,1);break c;}catch
($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}i=null;}k.kX=i;if(i===null){b=new Bz;i=new J;i.jo=G(16);F(i,i.jm,A(21));if(V(BR).jI===null)V(BR).jI=W(V(BR).jG.$meta.name);f=V(BR).jI;F(i,i.jm,f);f=new H;l=i.jo;m=l.data;d=i.jm;e=m.length;if(d>=0&&d<=(e-0|0)){f.jn=K(l.data,0,d);b.jp=1;b.jq=1;b.jr=f;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}C6(BW,V(BR),k);}f=k.kb;c=f.js;if(c){if(!c){b=new B5;b.jp=1;b.jq=1;b.jr=A(22);B(b);}c=c-1|0;f.js=c;l=f.jE.data;f=l[c];l[c]=null;}else d:{try{f=Fx(k.kX,null);break d;}catch
($$e){$$je=Br($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}i=new Q;b=new J;b.jo=G(16);F(b,b.jm,A(23));n=k.kX.l6.l5;if(n.jI===null)n.jI=W(n.jG.$meta.name);k=n.jI;F(b,b.jm,k);k=new H;l=b.jo;m=l.data;d=b.jm;e=m.length;if(d>=0&&d<=(e-0|0)){k.jn=K(l.data,0,d);i.jp=1;i.jq=1;i.jr=k;i.le=f;B(i);}b=new I;b.jp=1;b.jq=1;B(b);}f=f;f.pQ=Mi;f.kV=a;i=a.mr;f.rt=i.ku;f.ru=i.kt;f.rz=e;f.mj=b;MY(j,f);b=BW;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BI;i.jG=k;o=i;k.classObject=o;}}c=B2(b,
i);b=c<0?null:b.kA.data[c];if(b!==null){i=b.kb;if(i.js<b.kU){BN(i,f);c=b.kM;d=b.kb.js;if(c>d)d=c;b.kM=d;if(B0(f,BS)){b=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.mj=null;b.mH=(-1);}}else if(B0(f,BS)){b=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.mj=null;b.mH=(-1);}}}return j;},
M8=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.mr;g=c;h=d;f.ku=g;f.kt=h;Jv(a.n1,f);Dw();i=BW;d=B2(i,V(BR));j=d<0?null:i.kA.data[d];if(j===null){j=new DV;i=new Bt;i.kk=0;i.jE=S(C,4);j.kb=i;j.kU=100;a:{try{i=Eh(V(BR),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{i=Ed(V(BR),null);Eq(i,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}i=null;}j.kX=i;if(i===null){b=new Bz;i=new J;i.jo=G(16);F(i,i.jm,A(21));if(V(BR).jI===null)V(BR).jI=W(V(BR).jG.$meta.name);f
=V(BR).jI;F(i,i.jm,f);f=new H;k=i.jo;l=k.data;d=i.jm;e=l.length;if(d>=0&&d<=(e-0|0)){f.jn=K(k.data,0,d);b.jp=1;b.jq=1;b.jr=f;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}C6(BW,V(BR),j);}f=j.kb;c=f.js;if(c){if(!c){b=new B5;b.jp=1;b.jq=1;b.jr=A(22);B(b);}c=c-1|0;f.js=c;k=f.jE.data;f=k[c];k[c]=null;}else b:{try{f=Fx(j.kX,null);break b;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}i=new Q;b=new J;b.jo=G(16);F(b,b.jm,A(23));m=j.kX.l6.l5;if(m.jI===null)m.jI=W(m.jG.$meta.name);j=m.jI;F(b,b.jm,j);j=
new H;k=b.jo;l=k.data;d=b.jm;e=l.length;if(d>=0&&d<=(e-0|0)){j.jn=K(k.data,0,d);i.jp=1;i.jq=1;i.jr=j;i.le=f;B(i);}b=new I;b.jp=1;b.jq=1;B(b);}f=f;f.pQ=Ig;f.kV=a;i=a.mr;f.rt=i.ku;f.ru=i.kt;f.rz=e;f.mj=b;MY(b,f);b=BW;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BI;i.jG=j;n=i;j.classObject=n;}}c=B2(b,i);b=c<0?null:b.kA.data[c];if(b!==null){i=b.kb;if(i.js<b.kU){BN(i,f);c=b.kM;d=b.kb.js;if(c>d)d=c;b.kM=d;if(B0(f,BS)){b=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_
=0;b.mj=null;b.mH=(-1);}}else if(B0(f,BS)){b=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.mj=null;b.mH=(-1);}}},
ASs=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.vF;Dd(d);e=d.jE;d.nx=e;d.mg=d.mg+1|0;e=e;f=0;g=d.js;h=null;i=null;j=null;a:while(true){if(f>=g){GK(d);if(c!==null){Dw();b=BW;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BI;d.jG=k;l=d;k.classObject=l;}}m=B2(b,d);b=m<0?null:b.kA.data[m];if(b!==null){d=b.kb;if(d.js<b.kU){BN(d,c);m=b.kM;f=b.kb.js;if(m>f)f=m;b.kM=f;if(B0(c,BS)){b=c;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.mj=null;b.mH=(-1);}}else if
(B0(c,BS)){b=c;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.mj=null;b.mH=(-1);}}}return;}k=e.data[f];if(k.ul===b){Dd(d);if(O7(d,k,1)){if(c===null){Dw();c=BW;n=B2(c,V(BR));l=n<0?null:c.kA.data[n];if(l===null){l=new DV;c=new Bt;c.kk=0;c.jE=S(C,4);l.kb=c;l.kU=100;b:{try{c=Eh(V(BR),h);break b;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ed(V(BR),i);Eq(c,1);break b;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}c=null;}l.kX=c;if(c===null){b=new Bz;c
=new J;c.jo=G(16);F(c,c.jm,A(21));if(V(BR).jI===null)V(BR).jI=W(V(BR).jG.$meta.name);d=V(BR).jI;F(c,c.jm,d);d=new H;e=c.jo;o=e.data;f=c.jm;g=o.length;if(f>=0&&f<=(g-0|0)){d.jn=K(e.data,0,f);b.jp=1;b.jq=1;b.jr=d;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}C6(BW,V(BR),l);}c:{c=l.kb;m=c.js;if(m){if(!m)break a;m=m-1|0;c.js=m;o=c.jE.data;c=o[m];o[m]=null;}else try{c=Fx(l.kX,j);break c;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){c=$$je;d=new Q;b=new J;b.jo=G(16);F(b,b.jm,A(23));h=l.kX.l6.l5;if(h.jI===null)h.jI=W(h.jG.$meta.name);k
=h.jI;F(b,b.jm,k);k=new H;e=b.jo;o=e.data;f=b.jm;g=o.length;if(f>=0&&f<=(g-0|0)){k.jn=K(e.data,0,f);d.jp=1;d.jq=1;d.jr=k;d.le=c;B(d);}b=new I;b.jp=1;b.jq=1;B(b);}else{throw $$e;}}}c=c;c.pQ=HY;c.kV=a;c.rt=(-2.147483648E9);c.ru=(-2.147483648E9);}c.ly=k.wm;c.lJ=k.ul;c.rz=k.wV;c.mH=k.xm;k.w_.bp(c);}}f=f+1|0;}b=new B5;b.jp=1;b.jq=1;b.jr=A(22);B(b);},
FN=(a,b)=>{let c,d,e;c=0;d=a.qg.data.length;while(c<d){e=a.qg.data;if(b===e[c]){e[c]=null;M8(a,b,a.rC.data[c],a.rD.data[c],c);}c=c+1|0;}if(b===a.qI){a.qI=null;M8(a,b,a.v9,a.v$,(-1));}},
ATy=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.qU===b)return 1;Dw();c=BW;d=B2(c,V(CM));e=d<0?null:c.kA.data[d];if(e===null){e=new DV;c=new Bt;c.kk=0;c.jE=S(C,4);e.kb=c;e.kU=100;a:{try{c=Eh(V(CM),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ed(V(CM),null);Eq(c,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}c=null;}e.kX=c;if(c===null){b=new Bz;c=new J;c.jo=G(16);F(c,c.jm,A(21));if(V(CM).jI===null)V(CM).jI=W(V(CM).jG.$meta.name);f=V(CM).jI;F(c,
c.jm,f);f=new H;g=c.jo;h=g.data;d=c.jm;i=h.length;if(d>=0&&d<=(i-0|0)){f.jn=K(g.data,0,d);b.jp=1;b.jq=1;b.jr=f;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}C6(BW,V(CM),e);}f=e.kb;j=f.js;if(j){if(!j){b=new B5;b.jp=1;b.jq=1;b.jr=A(22);B(b);}j=j-1|0;f.js=j;g=f.jE.data;f=g[j];g[j]=null;}else b:{try{f=Fx(e.kX,null);break b;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jo=G(16);F(b,b.jm,A(23));k=e.kX.l6.l5;if(k.jI===null)k.jI=W(k.jG.$meta.name);e=k.jI;F(b,b.jm,e);e=new H;g=b.jo;h
=g.data;d=b.jm;i=h.length;if(d>=0&&d<=(i-0|0)){e.jn=K(g.data,0,d);c.jp=1;c.jq=1;c.jr=e;c.le=f;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}f=f;f.kV=a;f.vi=Lt;c=a.qU;if(c!==null){f.qF=0;f.nm=b;c.bk(f);}j=f.k_?0:1;if(j){a.qU=b;if(b!==null){f.qF=1;f.nm=c;b.bk(f);j=f.k_?0:1;if(!j)a.qU=c;}}b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BI;c.jG=e;l=c;e.classObject=l;}}d=B2(b,c);b=d<0?null:b.kA.data[d];if(b!==null){c=b.kb;if(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if(d>i)i=d;b.kM=i;if(B0(f,BS)){b
=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.nm=null;}}else if(B0(f,BS)){b=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.nm=null;}}return j;},
ATd=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.qQ===b)return 1;Dw();c=BW;d=B2(c,V(CM));e=d<0?null:c.kA.data[d];if(e===null){e=new DV;c=new Bt;c.kk=0;c.jE=S(C,4);e.kb=c;e.kU=100;a:{try{c=Eh(V(CM),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ed(V(CM),null);Eq(c,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}c=null;}e.kX=c;if(c===null){b=new Bz;c=new J;c.jo=G(16);F(c,c.jm,A(21));if(V(CM).jI===null)V(CM).jI=W(V(CM).jG.$meta.name);f=V(CM).jI;F(c,
c.jm,f);f=new H;g=c.jo;h=g.data;d=c.jm;i=h.length;if(d>=0&&d<=(i-0|0)){f.jn=K(g.data,0,d);b.jp=1;b.jq=1;b.jr=f;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}C6(BW,V(CM),e);}f=e.kb;j=f.js;if(j){if(!j){b=new B5;b.jp=1;b.jq=1;b.jr=A(22);B(b);}j=j-1|0;f.js=j;g=f.jE.data;f=g[j];g[j]=null;}else b:{try{f=Fx(e.kX,null);break b;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jo=G(16);F(b,b.jm,A(23));k=e.kX.l6.l5;if(k.jI===null)k.jI=W(k.jG.$meta.name);e=k.jI;F(b,b.jm,e);e=new H;g=b.jo;h
=g.data;d=b.jm;i=h.length;if(d>=0&&d<=(i-0|0)){e.jn=K(g.data,0,d);c.jp=1;c.jq=1;c.jr=e;c.le=f;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}f=f;f.kV=a;f.vi=ML;c=a.qQ;if(c!==null){f.qF=0;f.nm=b;c.bk(f);}j=f.k_?0:1;if(j){a.qQ=b;if(b!==null){f.qF=1;f.nm=c;b.bk(f);j=f.k_?0:1;if(!j)a.qQ=c;}}b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BI;c.jG=e;l=c;e.classObject=l;}}d=B2(b,c);b=d<0?null:b.kA.data[d];if(b!==null){c=b.kb;if(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if(d>i)i=d;b.kM=i;if(B0(f,BS)){b
=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.nm=null;}}else if(B0(f,BS)){b=f;b.kV=null;b.ly=null;b.lJ=null;b.lQ=0;b.lw=1;b.lL=0;b.lM=0;b.k_=0;b.nm=null;}}return j;};
let BS=E(0);
function Fg(){let a=this;C.call(a);a.kV=null;a.ly=null;a.lJ=null;a.lQ=0;a.lw=0;a.lL=0;a.lM=0;a.k_=0;}
let APg=a=>{a.lL=1;},
AIJ=a=>{return a.lw;},
HZ=a=>{return a.lM;},
FA=a=>{return a.k_;};
let Db=E(0);
let BZ=E(0);
function Bx(){let a=this;C.call(a);a.jB=null;a.jw=0;}
let ANj=a=>{return a.jw;},
ADX=a=>{return a.jB;},
Xb=(a,b)=>{return a!==b?0:1;};
let GR=E(Bx);
let MA=null,UN=null,ADm=null,V5=null;
let AMx=()=>{let b,c,d;b=new GR;b.jB=A(24);b.jw=0;MA=b;c=new GR;c.jB=A(25);c.jw=1;UN=c;d=new GR;d.jB=A(26);d.jw=2;ADm=d;V5=P(GR,[b,c,d]);};
function CK(){let a=this;C.call(a);a.kK=null;a.kR=null;a.uv=null;a.vs=null;a.uH=null;a.w8=null;a.rR=null;a.mp=0;a.jX=0;a.ka=0.0;a.j_=0.0;a.lG=0.0;a.lF=0.0;a.pm=0.0;a.pn=0.0;a.oT=0.0;a.oU=0.0;a.pJ=0.0;a.rG=null;}
let EK=a=>{let b,c;b=new Kk;b.kk=1;b.jE=S(C,0);c=new F_;c.oL=1;c.lP=U(0);b.pp=c;a.uv=b;b=new Kk;b.kk=1;b.jE=S(C,0);c=new F_;c.oL=1;c.lP=U(0);b.pp=c;a.vs=b;b=new Bt;b.kk=1;b.jE=S(C,0);a.uH=b;a.rR=MA;a.mp=1;a.oT=1.0;a.oU=1.0;b=new BD;b.j8=1.0;b.j7=1.0;b.j6=1.0;b.j5=1.0;CP(b);a.rG=b;},
AUr=()=>{let a=new CK();EK(a);return a;},
J2=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.uH;if(!c.js)return;d=a.kK;d!==null&&!d.vl;a:{try{e=0;while(e<c.js){d=Gq(c,e);if(d.bq(b)&&e<c.js){f=Gq(c,e)===d?e:EJ(c,d,1);if(f!=(-1)){DA(c,f);d.bt(null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Br($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return;}h=a.S();c=new Bz;d=new J;d.jo=G(16);F(d,d.jm,A(27));i=h.jn.length;e=128;if(i<e)e=i;j=Cv(h,0,e);F(d,d.jm,j);j=new H;k=d.jo;l=k.data;e=d.jm;m=l.length;if(e>=0&&e<=(m-0|0)){j.jn=K(k.data,0,e);c.jp=1;c.jq=
1;c.jr=j;c.le=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);},
MY=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.kV===null)b.kV=a.kK;b.ly=a;Dw();c=BW;d=B2(c,V(Bt));e=d<0?null:c.kA.data[d];if(e===null){e=new DV;c=new Bt;c.kk=0;c.jE=S(C,4);e.kb=c;e.kU=100;a:{try{c=Eh(V(Bt),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ed(V(Bt),null);Eq(c,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}c=null;}e.kX=c;if(c===null){b=new Bz;c=new J;c.jo=G(16);F(c,c.jm,A(21));if(V(Bt).jI===null)V(Bt).jI=W(V(Bt).jG.$meta.name);f
=V(Bt).jI;F(c,c.jm,f);f=new H;g=c.jo;h=g.data;d=c.jm;i=h.length;if(d>=0&&d<=(i-0|0)){f.jn=K(g.data,0,d);b.jp=1;b.jq=1;b.jr=f;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}C6(BW,V(Bt),e);}f=e.kb;j=f.js;if(j){if(!j){b=new B5;b.jp=1;b.jq=1;b.jr=A(22);B(b);}j=j-1|0;f.js=j;g=f.jE.data;f=g[j];g[j]=null;}else b:{try{f=Fx(e.kX,null);break b;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jo=G(16);F(b,b.jm,A(23));k=e.kX.l6.l5;if(k.jI===null)k.jI=W(k.jG.$meta.name);e=k.jI;F(b,b.jm,e);e=
new H;g=b.jo;h=g.data;d=b.jm;i=h.length;if(d>=0&&d<=(i-0|0)){e.jn=K(g.data,0,d);c.jp=1;c.jq=1;c.jr=e;c.le=f;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}f=f;c=a.kR;while(c!==null){BN(f,c);c=c.kR;}c:{try{g=f.jE;j=f.js-1|0;}catch($$e){$$je=Br($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;Iv(g.data[j],b,1);if(HZ(b))break;j=j+(-1)|0;}j=FA(b);}catch($$e){$$je=Br($$e);b=$$je;break c;}g=f.jE;d=0;i=f.js;b=null;if(d>i){b=new Bj;b.jp=1;b.jq=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.js=0;b=BW;m=f.constructor;if(m
===null)k=null;else{k=m.classObject;if(k===null){k=new BI;k.jG=m;c=k;m.classObject=c;}}d=B2(b,k);b=d<0?null:b.kA.data[d];if(b!==null){c=b.kb;if(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if(d>i)i=d;b.kM=i;if(B0(f,BS))f.by();}else if(B0(f,BS))f.by();}return j;}e:{try{Iv(a,b,1);if(!HZ(b))break e;j=FA(b);}catch($$e){$$je=Br($$e);b=$$je;break c;}g=f.jE;d=0;i=f.js;b=null;if(d>i){b=new Bj;b.jp=1;b.jq=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.js=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===
null){c=new BI;c.jG=e;m=c;e.classObject=m;}}d=B2(b,c);b=d<0?null:b.kA.data[d];if(b!==null){c=b.kb;if(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if(d>i)i=d;b.kM=i;if(B0(f,BS))f.by();}else if(B0(f,BS))f.by();}return j;}f:{try{Iv(a,b,0);if(AIJ(b))break f;j=FA(b);}catch($$e){$$je=Br($$e);b=$$je;break c;}g=f.jE;d=0;i=f.js;b=null;if(d>i){b=new Bj;b.jp=1;b.jq=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.js=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BI;c.jG=e;m=c;e.classObject=m;}}d
=B2(b,c);b=d<0?null:b.kA.data[d];if(b!==null){c=b.kb;if(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if(d>i)i=d;b.kM=i;if(B0(f,BS))f.by();}else if(B0(f,BS))f.by();}return j;}g:{try{if(!HZ(b))break g;j=FA(b);}catch($$e){$$je=Br($$e);b=$$je;break c;}g=f.jE;d=0;i=f.js;b=null;if(d>i){b=new Bj;b.jp=1;b.jq=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.js=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BI;c.jG=e;m=c;e.classObject=m;}}d=B2(b,c);b=d<0?null:b.kA.data[d];if(b!==null){c=b.kb;if
(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if(d>i)i=d;b.kM=i;if(B0(f,BS))f.by();}else if(B0(f,BS))f.by();}return j;}try{j=0;d=f.js;}catch($$e){$$je=Br($$e);b=$$je;break c;}h:{try{while(j<d){Iv(g.data[j],b,0);if(HZ(b))break h;j=j+1|0;}j=FA(b);}catch($$e){$$je=Br($$e);b=$$je;break c;}g=f.jE;d=0;i=f.js;b=null;if(d>i){b=new Bj;b.jp=1;b.jq=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.js=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BI;c.jG=e;m=c;e.classObject=m;}}d=B2(b,c);b=d<
0?null:b.kA.data[d];if(b!==null){c=b.kb;if(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if(d>i)i=d;b.kM=i;if(B0(f,BS))f.by();}else if(B0(f,BS))f.by();}return j;}try{j=FA(b);}catch($$e){$$je=Br($$e);b=$$je;break c;}g=f.jE;d=0;i=f.js;b=null;if(d>i){b=new Bj;b.jp=1;b.jq=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.js=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BI;c.jG=e;m=c;e.classObject=m;}}d=B2(b,c);b=d<0?null:b.kA.data[d];if(b!==null){c=b.kb;if(c.js<b.kU){BN(c,f);d=b.kM;i=b.kb.js;if
(d>i)i=d;b.kM=i;if(B0(f,BS))f.by();}else if(B0(f,BS))f.by();}return j;}g=f.jE;j=0;d=f.js;c=null;if(j>d){b=new Bj;b.jp=1;b.jq=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.js=0;if(f===null){f=new Bj;f.jp=1;f.jq=1;f.jr=A(28);B(f);}c=BW;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BI;e.jG=m;k=e;m.classObject=k;}}j=B2(c,e);c=j<0?null:c.kA.data[j];if(c!==null){e=c.kb;if(e.js<c.kU){BN(e,f);j=c.kM;d=c.kb.js;if(j>d)d=j;c.kM=d;if(B0(f,BS))f.by();}else if(B0(f,BS))f.by();}B(b);},
Iv=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.ly===null){b=new Bj;b.jp=1;b.jq=1;b.jr=A(29);B(b);}d=!c?a.uv:a.vs;if(!d.js)return b.k_;b.lJ=a;b.lQ=c;if(b.kV===null)b.kV=a.kK;a:{try{AKW(d);e=0;f=d.js;while(e<f){if((Gq(d,e)).bp(b))APg(b);e=e+1|0;}AMS(d);}catch($$e){$$je=Br($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return b.k_;}h=a.S();d=new Bz;b=new J;b.jo=G(16);F(b,b.jm,A(27));i=h.jn.length;e=128;if(i<e)e=i;h=Cv(h,0,e);F(b,b.jm,h);h=new H;j=b.jo;k=j.data;e=b.jm;f=k.length;if(e>=0&&e<=(f-0|0)){h.jn
=K(j.data,0,e);d.jp=1;d.jq=1;d.jr=h;d.le=g;B(d);}b=new I;b.jp=1;b.jq=1;B(b);},
QM=(a,b,c,d)=>{if(d&&a.rR!==MA)return null;if(!a.mp)return null;if(!(b>=0.0&&b<a.lG&&c>=0.0&&c<a.lF))a=null;return a;},
AR_=a=>{return a.kK;},
AMn=(a,b)=>{a.kK=b;},
ASe=(a,b)=>{a.kR=b;},
AR0=a=>{return a.mp;},
AUH=a=>{return;},
ARU=a=>{return;},
MG=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.pJ;d=a.oT;e=a.oU;f=a.ka;g=a.j_;if(c!==0.0){h=c*0.01745329238474369;i=Xm(h);j=TS(h);k=a.pm;l=a.pn;m=b.ku-f-k;n=b.kt-g-l;b.ku=(m*i+n*j)/d+k;b.kt=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.ku=b.ku-f;b.kt=b.kt-g;}else{k=a.pm;l=a.pn;b.ku=(b.ku-f-k)/d+k;b.kt=(b.kt-g-l)/e+l;}return b;},
ALy=(a,b)=>{T$(a,b);},
T$=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.jX)return;c=DB;d=b.la;if(d!==c){if(d===null){b=new B5;b.jp=1;b.jq=1;b.jr=A(30);B(b);}if(!b.q9){c=new B5;c.jp=1;c.jq=1;c.jr=A(31);B(c);}DQ(b.jZ);b.la=null;DR(b,c);}c=a.kK;if(c!==null){d=c.uA;c=b.ot;c.j8=d.j8;c.j7=d.j7;c.j6=d.j6;c.j5=d.j5;}e=a.ka;f=a.j_;g=a.pm;h=a.pn;i=a.lG;j=a.lF;k=a.oT;l=a.oU;m=a.pJ;c=b.ot;AHt(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
EM=(a,b)=>{a.jX=b;if(b)BG=1;},
ATB=a=>{return a.jX;},
RL=a=>{let b,c,d,e;b=a.w8;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BI;c.jG=b;d=c;b.classObject=d;}}if(c.jI===null)c.jI=W(c.jG.$meta.name);b=c.jI;e=FD(b,46,b.jn.length-1|0);if(e!=(-1))b=Cv(b,e+1|0,b.jn.length);}return b;};
let Lz=E(0);
function By(){let a=this;CK.call(a);a.jM=null;a.rV=null;a.sI=null;a.or=null;a.mw=0;a.xq=null;}
let KE=null;
let Qz=(a,b)=>{let c,d,e,f;J2(a,b);c=a.jM;Dd(c);d=c.jE;c.nx=d;c.mg=c.mg+1|0;d=d;e=0;f=a.jM.js;while(e<f){d.data[e].bd(b);e=e+1|0;}GK(a.jM);},
AF_=(a,b,c)=>{let d;if(a.mw){d=J1(a);Ck(a.or,b.mm.kd);if(b.lA)EN(b);Ck(b.mm,d.kd);if(b.lA)FM(b);}Pa(a,b,c);if(a.mw){d=a.or;if(b.lA)EN(b);Ck(b.mm,d.kd);if(b.lA)FM(b);}},
Pa=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.rG.j5;d=a.jM;Dd(d);e=d.jE;d.nx=e;d.mg=d.mg+1|0;f=e;g=a.xq;if(g===null){if(a.mw){h=0;i=d.js;while(h<i){j=f.data[h];if(j.mp)j.bK(b,c);h=h+1|0;}}else{k=a.ka;l=a.j_;a.ka=0.0;a.j_=0.0;h=0;i=d.js;while(h<i){j=f.data[h];if(j.mp){m=j.ka;n=j.j_;j.ka=m+k;j.j_=n+l;j.bK(b,c);j.ka=m;j.j_=n;}h=h+1|0;}a.ka=k;a.j_=l;}}else{o=g.xZ;p=o+g.yb;q=g.xY;r=q+g.wW;if(a.mw){s=0;i=d.js;while(s<i){j=f.data[s];if(j.mp){m=j.ka;n=j.j_;if(m<=p&&n<=r&&m+j.lG>=o&&n+j.lF>=q)j.bK(b,c);}s=s
+1|0;}}else{k=a.ka;l=a.j_;a.ka=0.0;a.j_=0.0;s=0;i=d.js;while(s<i){j=f.data[s];if(j.mp){m=j.ka;n=j.j_;if(m<=p&&n<=r&&m+j.lG>=o&&n+j.lF>=q){j.ka=m+k;j.j_=n+l;j.bK(b,c);j.ka=m;j.j_=n;}}s=s+1|0;}a.ka=k;a.j_=l;}}GK(d);},
N$=(a,b)=>{let c;T$(a,b);if(a.mw){c=J1(a);Ck(a.or,b.m7.kd);Ck(b.m7,c.kd);b.lB=1;c=b.la;if(c!==null){DQ(b.jZ);b.la=null;DR(b,c);}}YM(a,b);if(a.mw){c=a.or;Ck(b.m7,c.kd);b.lB=1;}},
YM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.jM;Dd(c);d=c.jE;c.nx=d;c.mg=c.mg+1|0;e=d;if(a.mw){f=0;g=c.js;while(f<g){h=e.data[f];if(h.mp&&!(!h.jX&&!(h instanceof By)))h.Y(b);f=f+1|0;}h=b.la;if(h!==null){DQ(b.jZ);b.la=null;DR(b,h);}}else{i=a.ka;j=a.j_;a.ka=0.0;a.j_=0.0;k=0;g=c.js;while(k<g){h=e.data[k];if(h.mp&&!(!h.jX&&!(h instanceof By))){l=h.ka;m=h.j_;h.ka=l+i;h.j_=m+j;h.Y(b);h.ka=l;h.j_=m;}k=k+1|0;}a.ka=i;a.j_=j;}GK(c);},
J1=a=>{let b,c,d,e,f;b=a.rV;c=a.pm;d=a.pn;AEQ(b,a.ka+c,a.j_+d,a.pJ,a.oT,a.oU);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.nP=b.nP+b.nQ*c+b.nO*e;b.nR=b.nR+b.nS*c+b.nT*e;}f=a.kR;a:{while(true){if(f===null)break a;if(f.mw)break;f=f.kR;}}if(f!==null)YR(b,f.rV);AOc(a.sI,b);return a.sI;},
Mx=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.rR===UN)return null;if(!a.mp)return null;e=KE;f=a.jM;g=f.jE;h=f.js-1|0;while(true){if(h<0)return QM(a,b,c,d);i=g.data[h];e.ku=b;e.kt=c;MG(i,e);f=i.I(e.ku,e.kt,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AL1=(a,b)=>{let c,d,e,f;a.kK=b;c=a.jM;d=c.jE;e=0;f=c.js;while(e<f){d.data[e].w(b);e=e+1|0;}},
KN=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.jX=b;if(b)BG=1;a:{if(c){d=a.jM;if(!Cx){if(d.jW===null){e=new CW;e.lh=d;e.lj=1;d.jW=e;}e=CE(d.jW);}else{e=new Cq;e.j$=1;e.kc=d;e.k7=1;}b:while(true){if(!e.j$){e=new Q;e.jp=1;e.jq=1;e.jr=A(17);B(e);}if(!(e.kQ>=e.kc.js?0:1))break a;d=Cl(e);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else{d=d;d.jX=b;if(b)BG=1;c:{if(c){d=d.jM;if(Cx){f=new Cq;f.j$=1;f.kc=d;f.k7=1;}else{if(d.jW===null){g=new CW;g.lh=d;g.lj=1;d.jW=g;}f=CE(d.jW);}while(true){if(!f.j$){e=new Q;e.jp=1;e.jq=1;e.jr=A(17);B(e);}if
(!(f.kQ>=f.kc.js?0:1))break c;d=Cl(f);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else{d=d;d.jX=b;if(b)BG=1;d:{if(c){d=d.jM;if(Cx){h=new Cq;h.j$=1;h.kc=d;h.k7=1;}else{if(d.jW===null){g=new CW;g.lh=d;g.lj=1;d.jW=g;}h=CE(d.jW);}while(true){if(!h.j$){e=new Q;e.jp=1;e.jq=1;e.jr=A(17);B(e);}if(!(h.kQ>=h.kc.js?0:1))break d;d=Cl(h);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else{d=d;d.jX=b;if(b)BG=1;e:{if(c){d=d.jM;if(Cx){i=new Cq;i.j$=1;i.kc=d;i.k7=1;}else{if(d.jW===null){g=new CW;g.lh=d;g.lj=1;d.jW=g;}i=CE(d.jW);}while
(true){if(!i.j$){e=new Q;e.jp=1;e.jq=1;e.jr=A(17);B(e);}if(!(i.kQ>=i.kc.js?0:1))break e;d=Cl(i);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else{d=d;d.jX=b;if(b)BG=1;f:{if(c){d=d.jM;if(Cx){j=new Cq;j.j$=1;j.kc=d;j.k7=1;}else{if(d.jW===null){g=new CW;g.lh=d;g.lj=1;d.jW=g;}j=CE(d.jW);}while(true){if(!j.j$){e=new Q;e.jp=1;e.jq=1;e.jr=A(17);B(e);}if(!(j.kQ>=j.kc.js?0:1))break f;d=Cl(j);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else{d=d;d.jX=b;if(b)BG=1;g:{if(c){d=d.jM;if(Cx){g=new Cq;g.j$=1;g.kc=d;g.k7=1;}else{if(d.jW
===null){g=new CW;BA(g);g.lh=d;g.lj=1;d.jW=g;}g=CE(d.jW);}while(true){if(!g.j$){e=new Q;e.jp=1;e.jq=1;e.jr=A(17);B(e);}if(!(g.kQ>=g.kc.js?0:1))break g;d=Cl(g);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else{d=d;d.jX=b;if(b)BG=1;h:{if(c){d=d.jM;if(Cx){k=new Cq;BA(k);k.j$=1;k.kc=d;k.k7=1;}else{if(d.jW===null)d.jW=KY(d,1);k=CE(d.jW);}while(true){if(!k.j$){e=new Q;Gp(e,A(17));B(e);}if(!(k.kQ>=k.kc.js?0:1))break h;d=Cl(k);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else{d=d;d.jX=b;if(b)BG=1;i:{if(c){d=d.jM;if(Cx)l=Ll(d,
1);else{if(d.jW===null)d.jW=M0(d);l=CE(d.jW);}while(true){if(!l.j$)break b;if(!(l.kQ>=l.kc.js?0:1))break i;d=Cl(l);if(!(d instanceof By)){d.jX=b;if(b)BG=1;}else j:{d=d;EM(d,b);if(c){d=FR(d.jM);while(true){if(!G6(d))break j;m=Cl(d);if(!(m instanceof By))EM(m,b);else KN(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(JU(A(17)));}}},
AAg=a=>{let b,c,d,e,f;b=new J;b.jo=G(128);SB(a,b,1);c=b.jm-1|0;b.jm=c;d=new H;e=b.jo;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.jn=K(e.data,0,c);return d;}b=new I;b.jp=1;b.jq=1;B(b);},
SB=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=RL(a);F(b,b.jm,d);e=b.jm;Bd(b,e,e+1|0);b.jo.data[e]=10;d=a.jM;Dd(d);f=d.jE;d.nx=f;d.mg=d.mg+1|0;g=f;h=0;i=a.jM.js;j=c+1|0;while(h<i){k=0;while(k<c){F(b,b.jm,A(32));k=k+1|0;}d=g.data[h];if(d instanceof By)SB(d,b,j);else{F(b,b.jm,d===null?A(2):d.S());e=b.jm;Bd(b,e,e+1|0);b.jo.data[e]=10;}h=h+1|0;}GK(a.jM);},
ASX=()=>{KE=new Bv;};
let FS=E(0);
let Dp=E(0);
let Gy=E();
let Gb=E(0);
let BV=E();
let RP=null;
let AUi=()=>{RP=new Bv;};
let GP=E(BV);
let AJ6=E(GP);
let Gi=E(Bx);
let Lt=null,ML=null,Tl=null;
let Xj=()=>{let b,c;b=new Gi;b.jB=A(33);b.jw=0;Lt=b;c=new Gi;c.jB=A(34);c.jw=1;ML=c;Tl=P(Gi,[b,c]);};
let Mp=E(0);
let In=E(0);
let F$=E(0);
let Dn=E();
let AM$=E(Dn);
let Md=E(Gy);
let LQ=E();
let SC=null,SF=null;
let ASA=()=>{SC=new Bv;SF=new Bv;};
let ABl=E();
let V0=E();
let UH=E(0);
let KX=E();
let AJu=E(KX);
function CM(){let a=this;Fg.call(a);a.qF=0;a.vi=null;a.nm=null;}
let QV=a=>{a.lw=1;},
AUo=()=>{let a=new CM();QV(a);return a;},
UT=a=>{a.kV=null;a.ly=null;a.lJ=null;a.lQ=0;a.lw=1;a.lL=0;a.lM=0;a.k_=0;a.nm=null;};
let Qm=E();
let Wl=null;
let U5=()=>{U5=BH(Qm);AG3();};
let AG3=()=>{let b,c;b=U((Tl.p()).data.length);c=b.data;Wl=b;c[Lt.jw]=1;c[ML.jw]=2;};
let AHy=E();
let Sd=E();
let Vg=null;
let QY=()=>{QY=BH(Sd);ZL();};
let ZL=()=>{let b,c;b=U((Kj.p()).data.length);c=b.data;Vg=b;c[Kn.jw]=1;c[HY.jw]=2;c[KS.jw]=3;};
let AM9=E(Dn);
let E1=E();
let R$=E(E1);
let UP=E();
let AMU=0,AP0=0,AHz=0,AQd=0,ADM=0;
let S3=()=>{S3=BH(UP);APR();};
let APR=()=>{AMU=CY(W(navigator.platform),A(7));AP0=CY(W(navigator.platform),A(8));AHz=CY(W(navigator.platform),A(9));AQd=!CY(W(navigator.platform),A(10))&&!CY(W(navigator.platform),A(11))?0:1;ADM=!CY(W(navigator.platform),A(12))&&!CY(W(navigator.platform),A(13))&&!CY(W(navigator.platform),A(14))?0:1;};
let La=E();
let APE=E(GP);
let Rh=null;
let AS7=()=>{Rh=new Bv;};
let ACH=E();
let Ru=null;
let AUu=()=>{Ru=new Bv;};
let TA=E();
let AA2=null,W9=null,AQy=null;
let Uf=()=>{Uf=BH(TA);AMo();};
let AMo=()=>{let b;b=new Bt;b.kk=1;b.jE=S(C,16);AA2=b;b=new Bg;CJ();W9=b;AQy=new EU;};
let Mj=E();
let H$=E(E1);
let UC=E(E1);
let DN=E(BV);
let TQ=0.0;
let AT8=()=>{TQ=0.10000000149011612;};
let Uu=E(H$);
let ZZ=E(Fg);
let JV=E(0);
function BR(){let a=this;Fg.call(a);a.pQ=null;a.rt=0.0;a.ru=0.0;a.rz=0;a.mH=0;a.mj=null;a.xB=0;}
let Rg=a=>{a.lw=1;a.xB=1;},
ASW=()=>{let a=new BR();Rg(a);return a;},
Pc=a=>{a.kV=null;a.ly=null;a.lJ=null;a.lQ=0;a.lw=1;a.lL=0;a.lM=0;a.k_=0;a.mj=null;a.mH=(-1);},
NO=a=>{return a.pQ.jB;};
function Qh(){let a=this;C.call(a);a.w_=null;a.ul=null;a.wm=null;a.wV=0;a.xm=0;}
let M$=E();
let Y_=null;
let Ri=()=>{Ri=BH(M$);AOA();};
let AOA=()=>{let b,c;b=U((Kj.p()).data.length);c=b.data;Y_=b;c[Od.jw]=1;c[Ry.jw]=2;c[TV.jw]=3;c[Kn.jw]=4;c[HY.jw]=5;c[KS.jw]=6;c[O3.jw]=7;c[PL.jw]=8;c[Mi.jw]=9;c[Ig.jw]=10;};
let Dc=E(Bx);
let Kn=null,HY=null,KS=null,O3=null,Mi=null,Ig=null,PL=null,Od=null,Ry=null,TV=null,Kj=null;
let ZG=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Dc;b.jB=A(35);b.jw=0;Kn=b;c=new Dc;c.jB=A(36);c.jw=1;HY=c;d=new Dc;d.jB=A(37);d.jw=2;KS=d;e=new Dc;e.jB=A(38);e.jw=3;O3=e;f=new Dc;f.jB=A(39);f.jw=4;Mi=f;g=new Dc;g.jB=A(40);g.jw=5;Ig=g;h=new Dc;h.jB=A(41);h.jw=6;PL=h;i=new Dc;i.jB=A(42);i.jw=7;Od=i;j=new Dc;j.jB=A(43);j.jw=8;Ry=j;k=new Dc;k.jB=A(44);k.jw=9;TV=k;Kj=P(Dc,[b,c,d,e,f,g,h,i,j,k]);};
let Cb=E();
let EA=E(Cb);
let AEA=E(EA);
let AI8=E(EA);
let CQ=E(Cb);
let Ep=E(CQ);
let Wm=E(Ep);
let YG=E();
let MV=E(Cb);
let AAe=E(MV);
let ACz=E(Cb);
let AGG=E(Cb);
let ALq=E(Cb);
let AMe=E();
let K5=E(Cb);
let AF4=E(K5);
let AAX=E(CQ);
let AM4=E(CQ);
let AND=E(Ep);
let AJR=E(Cb);
let AKm=E(Ep);
let APh=E(CQ);
let AOB=E(CQ);
let AC9=E(Cb);
let AFB=E(CQ);
let AFR=E(Cb);
let ADD=E(Cb);
let AF7=E(EA);
let Xf=E(CQ);
let APq=E(Cb);
let AJm=E(Ep);
let ADk=E(EA);
let AIB=E(Cb);
let YI=E(CQ);
let AFa=E(CQ);
let ZT=E();
let AE5=null;
let AQD=()=>{AE5=P(BI,[V(P6),V(BD),V(Rz),V(R$),V(UC),V(H$),V(Uu),V(FX),V(QU),V(TB),V(SZ),V(Qn),V(Ui),V(Ji),V(Ut),V(Sa),V(NZ),V(Ua),V(Gl),V(Rp),V(Tu),V(Rj),V(QB),V(Ok)]);};
let C0=E(By);
let D9=E(C0);
let XW=null,AFJ=null,AMd=null,AQW=null,AIU=null,Vy=null,ACl=null,AIr=null;
let PV=()=>{PV=BH(D9);AMJ();};
let AMJ=()=>{let b,c;b=new BD;b.j8=0.0;b.j7=0.0;b.j6=1.0;b.j5=1.0;CP(b);XW=b;b=new BD;b.j8=1.0;b.j7=0.0;b.j6=0.0;b.j5=1.0;CP(b);AFJ=b;b=new BD;b.j8=0.0;b.j7=1.0;b.j6=0.0;b.j5=1.0;CP(b);AMd=b;b=new Uz;c=new Bt;c.kk=0;c.jE=S(C,16);b.kb=c;b.kU=2147483647;AQW=b;b=new Uy;HQ();AIU=b;Vy=new Ux;ACl=new Uw;AIr=new Uv;};
let Ft=E(D9);
let KQ=E(Ft);
let AAP=E(KQ);
let AM6=E(BV);
let LO=E(C0);
let Q5=E(0);
let Eg=E();
let ACZ=E(Eg);
let C_=E(CK);
let Xz=E(C_);
let AM5=E(BV);
let BX=E();
let AOj=null,ALx=null,AM2=null,ABk=null,AGb=null,AEu=null,ALr=null;
let HQ=()=>{HQ=BH(BX);X9();};
let X9=()=>{let b;b=new IH;HQ();b.xs=0.0;AOj=b;ALx=new Sj;AM2=new Sg;ABk=new Sf;AGb=new Si;AEu=new Sh;ALr=new Se;};
let Si=E(BX);
let AJv=E(BX);
let JO=E(DN);
let AFX=E(JO);
let Ux=E(BX);
let AO5=E(BV);
let Lo=E(D9);
let Sp=null,Sz=null;
let AR9=()=>{Sp=new Bv;Sz=new Bv;};
let AJw=E(BX);
let FQ=E(0);
function EU(){let a=this;C.call(a);a.xZ=0.0;a.xY=0.0;a.yb=0.0;a.wW=0.0;}
let Pu=null,R5=null;
let ATT=()=>{Pu=new EU;R5=new EU;};
let Du=E(EU);
let Va=null;
let Jk=()=>{Jk=BH(Du);NN();};
let RW=a=>{Jk();},
AR1=()=>{let a=new Du();RW(a);return a;},
NN=()=>{let b,c,d,e,f,g,h,$$je;Dw();b=BW;c=B2(b,V(Du));b=c<0?null:b.kA.data[c];if(b===null){b=new DV;d=new Bt;d.kk=0;d.jE=S(C,4);b.kb=d;b.kU=100;a:{try{d=Eh(V(Du),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{d=Ed(V(Du),null);Eq(d,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}d=null;}b.kX=d;if(d===null){b=new Bz;d=new J;d.jo=G(16);F(d,d.jm,A(21));if(V(Du).jI===null)V(Du).jI=W(V(Du).jG.$meta.name);e=V(Du).jI;F(d,d.jm,e);e=new H;f=d.jo;g=f.data;c
=d.jm;h=g.length;if(c>=0&&c<=(h-0|0)){e.jn=K(f.data,0,c);b.jp=1;b.jq=1;b.jr=e;B(b);}e=new I;e.jp=1;e.jq=1;B(e);}C6(BW,V(Du),b);}Va=b;};
let AC3=E(Eg);
let L3=E(C_);
let PY=null,PZ=null,P0=null,RS=0.0,Nq=0.0;
let AUn=()=>{PY=new Bv;PZ=new Bv;P0=new Bv;RS=0.4000000059604645;Nq=0.10000000149011612;};
let AA7=E(L3);
let AFe=E(BV);
let Pl=E(0);
let ALv=E();
let FX=E();
let Gl=E(FX);
let SZ=E(Gl);
let L8=E(C_);
let AEh=E(L8);
let AQS=E(LO);
let JX=E(C0);
let ARx=E(Ft);
let Mt=E(C_);
let Uv=E(BX);
let Tu=E();
let ADy=E();
let AF0=E(BV);
let AHH=E(Dn);
let AEE=E();
let AK4=E(BV);
let AQz=E(DN);
let AFc=E(LQ);
let Se=E(BX);
let Sh=E(BX);
let RM=E(0);
let Ji=E();
let NZ=E(Ji);
let AC0=E(Eg);
let AM3=E(La);
let AM7=E(Mj);
let AO6=E(BV);
let AO7=E(DN);
let Uw=E(BX);
let NR=E();
let ADs=null,AIL=null,ADq=null,AIK=null,Vv=null,Za=null,AIj=null,VY=null,AKX=null;
let S1=()=>{S1=BH(NR);Z0();};
let Z0=()=>{let b;b=new MM;b.tM=0.0;ADs=b;b=new MM;b.tM=1.0;AIL=b;ED();ADq=DY.data[128];ED();b=DY.data[129];AIK=b;Vv=b;ED();Za=DY.data[130];ED();AIj=DY.data[132];ED();VY=DY.data[136];ED();AKX=DY.data[144];};
let QU=E(Gl);
let AFr=E(BV);
let XY=E(Dn);
let Sj=E(BX);
let ABr=E(C0);
let AFd=E(BV);
let Rj=E();
function IH(){BX.call(this);this.xs=0.0;}
let On=null;
let AT_=()=>{On=S(IH,111);};
let ADz=E(JX);
let Sf=E(BX);
let AGy=E(C_);
let Ts=null;
let AUc=()=>{Ts=new Bv;};
let AFl=E(Md);
let Ua=E();
let Ob=E(C_);
let Xt=null,ABK=null;
let Tb=()=>{Tb=BH(Ob);Xa();};
let Xa=()=>{let b,c;Xt=new BD;b=new JM;LA();c=new Bt;c.kk=1;c.jE=S(C,1);b.xf=c;c=new F_;c.oL=1;c.lP=U(2);b.wv=c;ABK=b;};
let Ok=E();
let AJy=E(BX);
let Uy=E(BX);
let AMl=E(Lo);
let Sg=E(BX);
let Qn=E();
let AQo=E();
let Fb=E(Bx);
let Ih=null,XL=null,AJ3=null,V$=null,YO=null,ALF=null;
let AKp=()=>{let b,c,d,e,f;b=new Fb;b.jB=A(45);b.jw=0;Ih=b;c=new Fb;c.jB=A(46);c.jw=1;XL=c;d=new Fb;d.jB=A(47);d.jw=2;AJ3=d;e=new Fb;e.jB=A(48);e.jw=3;V$=e;f=new Fb;f.jB=A(49);f.jw=4;YO=f;ALF=P(Fb,[b,c,d,e,f]);};
let AQH=E(BX);
let AE3=E(Dn);
function C$(){let a=this;C.call(a);a.kU=0;a.kM=0;a.kb=null;}
let Uz=E(C$);
let XN=E();
let Ui=E();
let Rz=E();
let Sa=E();
let Mr=E(BV);
let QH=null;
let ARS=()=>{QH=new Bv;};
let XX=E(Dn);
let AO8=E(Mt);
let XQ=E(0);
let AFs=E(BV);
let ARo=E(C0);
let AI5=E(C0);
let AFn=E(DN);
let Mh=E();
let ACY=E(Mh);
let AOI=E(CK);
let W0=E(BV);
let AMI=E(Ft);
let AIa=E(BV);
let AP7=E(DN);
let TB=E(FX);
let AJa=E(C0);
let Rp=E();
let QB=E();
let AHP=E(C_);
let AQA=E(Gy);
let W2=E(BV);
let AKL=E(C0);
let Q_=null;
let AS_=()=>{Q_=new Bv;};
let AQQ=E(Mr);
let W3=E(D9);
let AC1=E(Eg);
let Vi=E();
let Ut=E();
let T4=E();
let YD=null,Xi=null,Zg=null,APi=null,APk=null,APj=null,ABq=null,ACJ=null,APX=null,W7=null,APs=null;
let T6=()=>{T6=BH(T4);AHi();};
let AHi=()=>{let b;YD=CB(16);b=new D7;b.nh=0.0;b.ne=0.0;b.nf=0.0;b.ng=1.0;Xi=b;b=new D7;b.nh=0.0;b.ne=0.0;b.nf=0.0;b.ng=1.0;Zg=b;b=new Bg;CJ();APi=b;APk=new Bg;APj=new Bg;ABq=new Bg;ACJ=C7();APX=new Bg;W7=new Bg;APs=new Bg;};
let BF=E();
let X8=null,AL5=null,ABb=null,AMb=null,AAp=null,ACg=null,AF1=null,V9=null,AGk=null,AAo=null,AHR=null,ABI=null,ACf=null,Xg=null,VV=null,ALd=null,ADE=null,ACi=null,AAt=null,AKR=null,ACh=null,AOD=null,ACm=null,AGC=null,AOh=null,AHa=null,Vf=null,V6=null,ALZ=null,ACL=null,AQZ=null,AKa=null,AO0=null,AFw=null,AK9=null,ARn=null,AEi=null,AEC=null,Wa=null,AMD=null,AQ4=null,APe=null,AKn=null,ARd=null;
let I5=()=>{I5=BH(BF);Yp();};
let Yp=()=>{let b,c;b=new SU;I5();X8=b;AL5=new SM;ABb=new SL;b=new SO;AMb=b;AAp=b;b=new Ei;b.mo=2;ACg=b;b=new Hq;b.mo=2;AF1=b;V9=b;b=new Hi;b.mo=2;AGk=b;AAo=b;AHR=new SN;ABI=new SQ;b=new Ei;b.mo=3;ACf=b;b=new Hq;b.mo=3;Xg=b;b=new Hi;b.mo=3;VV=b;ALd=new SP;ADE=new SS;b=new Ei;b.mo=4;ACi=b;b=new Hq;b.mo=4;AAt=b;b=new Hi;b.mo=4;AKR=b;b=new Ei;b.mo=5;ACh=b;b=new Hq;b.mo=5;AOD=b;b=new Hi;b.mo=5;ACm=b;AGC=new SR;AOh=new RZ;AHa=new R1;b=new Fp;b.oW=2.0;b.o$=10.0;c=F4(2.0,(-10.0));b.pu=c;b.pd=1.0/(1.0-c);Vf=b;b=new Lg;b.oW
=2.0;b.o$=10.0;c=F4(2.0,(-10.0));b.pu=c;b.pd=1.0/(1.0-c);V6=b;b=new MR;b.oW=2.0;b.o$=10.0;c=F4(2.0,(-10.0));b.pu=c;b.pd=1.0/(1.0-c);ALZ=b;b=new Fp;b.oW=2.0;b.o$=5.0;c=F4(2.0,(-5.0));b.pu=c;b.pd=1.0/(1.0-c);ACL=b;b=new Lg;b.oW=2.0;b.o$=5.0;c=F4(2.0,(-5.0));b.pu=c;b.pd=1.0/(1.0-c);AQZ=b;b=new MR;b.oW=2.0;b.o$=5.0;c=F4(2.0,(-5.0));b.pu=c;b.pd=1.0/(1.0-c);AKa=b;AO0=new R2;AFw=new R3;AK9=new R4;b=new F8;b.to=2.0;b.r2=10.0;b.r6=1.0;b.sr=(-21.99114990234375);ARn=b;b=new N4;b.to=2.0;b.r2=10.0;b.r6=1.0;b.sr=18.84955596923828;AEi
=b;b=new Qt;b.to=2.0;b.r2=10.0;b.r6=1.0;b.sr=(-21.99114990234375);AEC=b;b=new Qv;b.wR=3.0;Wa=b;b=new OC;b.yc=2.0;AMD=b;b=new Uk;b.xn=2.0;AQ4=b;b=new PU;KK(b,4);APe=b;b=new QP;KK(b,4);AKn=b;ARd=AAB(4);};
function OC(){BF.call(this);this.yc=0.0;}
let AE6=E();
let SP=E(BF);
let APz=E();
function Ei(){BF.call(this);this.mo=0;}
let Hq=E(Ei);
let Hi=E(Ei);
let IT=E(0);
let AAi=E();
let SS=E(BF);
let ANi=E();
let SO=E(BF);
function F8(){let a=this;BF.call(a);a.to=0.0;a.r2=0.0;a.r6=0.0;a.sr=0.0;}
let SN=E(BF);
let SM=E(BF);
let AJC=E();
let UU=null,UW=null,UV=null;
let ASi=()=>{UU=new Bv;UW=new Bv;UV=new Bv;};
let VZ=E(C$);
let Iy=E(0);
function Bv(){let a=this;C.call(a);a.ku=0.0;a.kt=0.0;}
let NT=null,NS=null,Qe=null;
let ASc=()=>{let b;b=new Bv;b.ku=1.0;b.kt=0.0;NT=b;b=new Bv;b.ku=0.0;b.kt=1.0;NS=b;b=new Bv;b.ku=0.0;b.kt=0.0;Qe=b;};
let R3=E(BF);
function Fp(){let a=this;BF.call(a);a.oW=0.0;a.o$=0.0;a.pu=0.0;a.pd=0.0;}
let AHL=E();
let SU=E(BF);
let MR=E(Fp);
let ADu=E();
let GY=E(Bx);
let AAU=null,ADN=null,AMP=null,AIe=null;
let APa=()=>{let b,c,d;b=new GY;b.jB=A(50);b.jw=0;AAU=b;c=new GY;c.jB=A(51);c.jw=1;ADN=c;d=new GY;d.jB=A(52);d.jw=2;AMP=d;AIe=P(GY,[b,c,d]);};
let Rv=E();
let APm=null;
let Q1=()=>{Q1=BH(Rv);AF6();};
let AF6=()=>{let b;b=new Bg;CJ();APm=b;};
function Gt(){let a=this;BF.call(a);a.xb=null;a.wK=null;}
let KK=(a,b)=>{let c,d,e,f,g,h,i,j;I5();if(b>=2&&b<=5){a:{c=CB(b);a.xb=c;d=CB(b);e=d.data;a.wK=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bj;g=new J;g.jo=G(16);F(g,g.jm,A(53));L(g,g.jm,b,10);h=new H;c=g.jo;d=c.data;i=g.jm;j=d.length;if(i>=0&&i<=(j-0|0)){h.jn=K(c.data,0,i);f.jp=1;f.jq=1;f.jr=h;B(f);}g=new I;g.jp
=1;g.jq=1;B(g);},
AAB=a=>{let b=new Gt();KK(b,a);return b;};
let QP=E(Gt);
let RZ=E(BF);
function RQ(){let a=this;C.call(a);a.nQ=0.0;a.nO=0.0;a.nP=0.0;a.nS=0.0;a.nT=0.0;a.nR=0.0;}
let AEQ=(a,b,c,d,e,f)=>{let g,h,i;a.nP=b;a.nR=c;if(d===0.0){a.nQ=e;a.nO=0.0;a.nS=0.0;a.nT=f;}else{F9();g=FF.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.nQ=i*e;a.nO= -h*f;a.nS=h*e;a.nT=i*f;}return a;},
YR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.nQ;d=a.nQ;e=c*d;f=b.nO;g=a.nS;h=e+f*g;i=a.nO;e=c*i;j=a.nT;e=e+f*j;k=a.nP;l=c*k;m=a.nR;l=l+f*m+b.nP;c=b.nS;d=c*d;f=b.nT;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.nR;a.nQ=h;a.nO=e;a.nP=l;a.nS=d;a.nT=j;a.nR=c;return a;};
let SL=E(BF);
function FC(){let a=this;C.call(a);a.pO=0.0;a.pN=0.0;a.pP=0.0;a.pM=0.0;}
let AN2=null,ANZ=null,AN0=null,AN1=null,ZO=null;
let AQB=()=>{let b;b=new FC;b.pO=1.0;b.pN=0.0;b.pP=0.0;b.pM=0.0;AN2=b;b=new FC;b.pO=0.0;b.pN=1.0;b.pP=0.0;b.pM=0.0;ANZ=b;b=new FC;b.pO=0.0;b.pN=0.0;b.pP=1.0;b.pM=0.0;AN0=b;b=new FC;b.pO=0.0;b.pN=0.0;b.pP=0.0;b.pM=1.0;AN1=b;b=new FC;b.pO=0.0;b.pN=0.0;b.pP=0.0;b.pM=0.0;ZO=b;};
let N4=E(F8);
function Qv(){BF.call(this);this.wR=0.0;}
let Z3=E();
let AQ$=E();
let SQ=E(BF);
function Uk(){BF.call(this);this.xn=0.0;}
let R4=E(BF);
let Qt=E(F8);
let U1=E();
let ACk=null,WJ=null,AP3=null;
let O8=()=>{O8=BH(U1);Wr();};
let Wr=()=>{let b,c,d,e,f,g;ACk=S(Bg,15);b=S(Bg,8);WJ=b;c=S(Bg,9);d=c.data;AP3=c;e=0;f=d.length;while(e<f){g=new Bg;CJ();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bg;CJ();b[e]=g;e=e+1|0;}};
function JT(){let a=this;C.call(a);a.u5=null;a.vd=null;a.uL=null;a.ve=null;}
let ABT=null;
let M7=()=>{M7=BH(JT);AMr();};
let AJG=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.u5;e=b.jx;f=c.jx;if(e<f)f=e;e=b.jy;g=c.jy;if(e<g)g=e;e=b.jz;h=c.jz;if(e<h)h=e;d.jx=f;d.jy=g;d.jz=h;i=a.vd;e=b.jx;g=c.jx;if(e>g)g=e;e=b.jy;h=c.jy;if(e>h)h=e;e=b.jz;f=c.jz;if(e>f)f=e;i.jx=g;i.jy=h;i.jz=f;b=a.uL;h=d.jx;j=d.jy;k=d.jz;b.jx=h;b.jy=j;b.jz=k;e=i.jx;f=i.jy;g=i.jz;h=h+e;j=j+f;k=k+g;b.jx=h;b.jy=j;b.jz=k;f=h*0.5;g=j*0.5;e=k*0.5;b.jx=f;b.jy=g;b.jz=e;b=a.ve;g=i.jx;h=i.jy;j=i.jz;b.jx=g;b.jy=h;b.jz=j;e=d.jx;f=d.jy;k=d.jz;g=g-e;e=h-f;f=j-k;b.jx=g;b.jy=e;b.jz=f;return a;},
AMr=()=>{let b;b=new Bg;CJ();ABT=b;};
function K9(){let a=this;C.call(a);a.wN=null;a.xQ=null;}
let Wj=null;
let LC=()=>{LC=BH(K9);AMC();};
let AMC=()=>{let b;b=new Bg;CJ();Wj=b;};
let AAr=E();
let WB=E();
let AKZ=E();
let AEt=E();
let Sr=E();
let AEq=null;
let F9=()=>{F9=BH(Sr);AFy();};
let KA=b=>{let c;F9();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AFy=()=>{let b,c,d,e;b=new RT;c=ABW(Fe(R(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),R(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(DJ(c,B6))c=D(0, 2147483648);d=Y(HB(c,Bb(c,33)),D(3981806797, 4283543511));d=Y(HB(d,Bb(d,33)),D(444984403, 3301882366));e=HB(d,Bb(d,33));d=Y(HB(e,Bb(e,33)),D(3981806797, 4283543511));d=Y(HB(d,Bb(d,33)),D(444984403, 3301882366));d=HB(d,Bb(d,33));b.wp=e;b.wq=d;AEq=b;};
let TJ=E();
let VI=null,VJ=null,VK=null,Z8=null,ANy=null,AGH=null,Xw=null,Xx=null,AGi=null,AGd=null,AC7=null,AC$=null,AC_=null,ADb=null,AGl=null,AGg=null,AGT=null,AEe=null,ALu=null,ADU=null,AOz=null,AOy=null,AOw=null,AEV=null;
let PR=()=>{PR=BH(TJ);AAw();};
let AAw=()=>{let b,c;b=new Bg;CJ();VI=b;VJ=new Bg;VK=new Bg;b=new I3;b.tp=1;b.tw=CB(16);Z8=b;b=new I3;b.tp=1;b.tw=CB(16);ANy=b;AGH=new Bv;Xw=new Bv;Xx=new Bv;AGi=new Bv;AGd=new Bv;AC7=new Bv;AC$=new Bv;AC_=new Bv;ADb=new Bv;b=new I$;c=new Bg;b.l0=c;b.mF=0.0;c.jx=0.0;c.jy=0.0;c.jz=0.0;b.mF=0.0;AGl=b;AGg=new Bg;AGT=new Bg;AEe=new Bg;ALu=new Bg;ADU=new Bg;AOz=new Bg;AOy=new Bg;AOw=new Bg;AEV=new Bg;};
let X4=E();
let PU=E(Gt);
function KT(){C.call(this);this.kd=null;}
let NW=null,AHo=null,AN$=null,Ip=null,G4=null,K8=null,Uj=null,OP=null,AI7=null,ARq=null,AI$=null;
let D0=()=>{D0=BH(KT);WY();};
let ALJ=a=>{let b,c;D0();b=CB(16);c=b.data;a.kd=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
C7=()=>{let a=new KT();ALJ(a);return a;},
Ck=(a,b)=>{let c;c=b.data;b=a.kd.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
RK=(a,b)=>{let c,d,e,f,g;D0();c=NW;d=c.data;e=a.kd.data;f=e[0];g=b.kd.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Ck(a,c);},
Ks=a=>{let b;b=a.kd.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
LE=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Ks(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.kd.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
AB5=(a,b,c)=>{let d,e,f,g,h,i;D0();d=Ip;e=b.jx;f=b.jy;g=b.jz;d.jx=e;d.jy=f;d.jz=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/DS(f);f=d.jx*e;g=d.jy*e;e=d.jz*e;d.jx=f;d.jy=g;d.jz=e;}d=G4;e=b.jx;f=b.jy;g=b.jz;d.jx=e;d.jy=f;d.jz=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/DS(f);f=d.jx*e;g=d.jy*e;e=d.jz*e;d.jx=f;d.jy=g;d.jz=e;}b=Pb(G4,c);e=b.jx;e=e*e;f=b.jy;e=e+f*f;f=b.jz;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/DS(e);h=b.jx*g;e=b.jy*g;f=b.jz*g;b.jx=h;b.jy=e;b.jz=f;}b=K8;c=G4;e=c.jx;f=c.jy;g=c.jz;b.jx=e;b.jy=f;b.jz=g;b=Pb(b,
Ip);e=b.jx;e=e*e;f=b.jy;e=e+f*f;f=b.jz;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/DS(f);f=b.jx*e;g=b.jy*e;e=b.jz*e;b.jx=f;b.jy=g;b.jz=e;}Ks(a);i=a.kd.data;b=G4;i[0]=b.jx;i[4]=b.jy;i[8]=b.jz;b=K8;i[1]=b.jx;i[5]=b.jy;i[9]=b.jz;b=Ip;i[2]= -b.jx;i[6]= -b.jy;i[10]= -b.jz;return a;},
AOc=(a,b)=>{let c;c=a.kd.data;c[0]=b.nQ;c[1]=b.nS;c[2]=0.0;c[3]=0.0;c[4]=b.nO;c[5]=b.nT;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.nP;c[13]=b.nR;c[14]=0.0;c[15]=1.0;return a;},
Nz=(b,c)=>{let d,e,f;D0();d=b.data;c=c.data;e=CB(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];DU(e,0,b,0,16);},
AOV=b=>{D0();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
ACu=b=>{let c,d,e;D0();c=CB(16);d=AOV(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AEK=(b,c,d)=>{let e,f,g,h,i,j,k,l;D0();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
WY=()=>{let b;NW=CB(16);b=new D7;b.nh=0.0;b.ne=0.0;b.nf=0.0;b.ng=1.0;AHo=b;b=new D7;b.nh=0.0;b.ne=0.0;b.nf=0.0;b.ng=1.0;AN$=b;b=new Bg;CJ();Ip=b;G4=new Bg;K8=new Bg;Uj=new Bg;OP=C7();AI7=new Bg;ARq=new Bg;AI$=new Bg;};
let OO=E(0);
let LD=E();
function RT(){let a=this;LD.call(a);a.wp=B6;a.wq=B6;}
let R2=E(BF);
let SR=E(BF);
function Mb(){let a=this;C.call(a);a.oz=null;a.nw=null;a.rq=null;}
let ARk=null,Uc=null,AIF=null;
let Ir=()=>{Ir=BH(Mb);AGf();};
let WH=a=>{let b,c,d,e,f,g;Ir();b=S(I$,6);c=b.data;a.oz=b;b=S(Bg,8);d=b.data;e=new Bg;CJ();d[0]=e;d[1]=new Bg;d[2]=new Bg;d[3]=new Bg;d[4]=new Bg;d[5]=new Bg;d[6]=new Bg;d[7]=new Bg;a.nw=b;a.rq=CB(24);f=0;while(f<6){e=new I$;g=new Bg;e.l0=g;e.mF=0.0;g.jx=0.0;g.jy=0.0;g.jz=0.0;e.mF=0.0;c[f]=e;f=f+1|0;}},
AKM=()=>{let a=new Mb();WH(a);return a;},
AJo=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;Ir();c=Uc;d=c.data;DU(c,0,a.rq,0,d.length);c=b.kd;e=a.rq;f=0;D0();g=0;while(g<8){AEK(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.nw.data[f];c=a.rq.data;j=h+1|0;i.jx=c[h];g=j+1|0;i.jy=c[j];h=g+1|0;i.jz=c[g];f=f+1|0;}b=a.oz.data[0];c=a.nw.data;i=c[1];k=c[0];l=c[2];m=b.l0;n=i.jx;o=i.jy;p=i.jz;m.jx=n;m.jy=o;m.jz=p;q=k.jx;r=k.jy;s=k.jz;t=n-q;u=o-r;p=p-s;m.jx=t;m.jy=u;m.jz=p;q=k.jx-l.jx;r=k.jy-l.jy;s=k.jz-l.jz;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jx=n;m.jy=s;m.jz
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/DS(r);r=m.jx*q;s=m.jy*q;q=m.jz*q;m.jx=r;m.jy=s;m.jz=q;}k=b.l0;b.mF= -(i.jx*k.jx+i.jy*k.jy+i.jz*k.jz);b=a.oz.data[1];c=a.nw.data;i=c[4];k=c[5];l=c[7];m=b.l0;n=i.jx;o=i.jy;p=i.jz;m.jx=n;m.jy=o;m.jz=p;q=k.jx;r=k.jy;s=k.jz;t=n-q;u=o-r;p=p-s;m.jx=t;m.jy=u;m.jz=p;q=k.jx-l.jx;r=k.jy-l.jy;s=k.jz-l.jz;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jx=n;m.jy=s;m.jz=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/DS(r);r=m.jx*q;s=m.jy*q;q=m.jz*q;m.jx=r;m.jy=s;m.jz=q;}k=b.l0;b.mF= -(i.jx*k.jx+i.jy
*k.jy+i.jz*k.jz);b=a.oz.data[2];c=a.nw.data;i=c[0];k=c[4];l=c[3];m=b.l0;n=i.jx;o=i.jy;t=i.jz;m.jx=n;m.jy=o;m.jz=t;r=k.jx;q=k.jy;s=k.jz;r=n-r;u=o-q;p=t-s;m.jx=r;m.jy=u;m.jz=p;q=k.jx-l.jx;s=k.jy-l.jy;n=k.jz-l.jz;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.jx=o;m.jy=n;m.jz=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/DS(r);r=m.jx*q;s=m.jy*q;q=m.jz*q;m.jx=r;m.jy=s;m.jz=q;}k=b.l0;b.mF= -(i.jx*k.jx+i.jy*k.jy+i.jz*k.jz);b=a.oz.data[3];c=a.nw.data;k=c[5];i=c[1];l=c[6];m=b.l0;n=k.jx;t=k.jy;u=k.jz;m.jx=n;m.jy=t;m.jz=u;q=i.jx;r=i.jy;s
=i.jz;o=n-q;t=t-r;u=u-s;m.jx=o;m.jy=t;m.jz=u;p=i.jx-l.jx;q=i.jy-l.jy;r=i.jz-l.jz;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.jx=s;m.jy=r;m.jz=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/DS(r);r=m.jx*q;s=m.jy*q;q=m.jz*q;m.jx=r;m.jy=s;m.jz=q;}i=b.l0;b.mF= -(k.jx*i.jx+k.jy*i.jy+k.jz*i.jz);b=a.oz.data[4];c=a.nw.data;i=c[2];k=c[3];l=c[6];m=b.l0;n=i.jx;o=i.jy;p=i.jz;m.jx=n;m.jy=o;m.jz=p;q=k.jx;r=k.jy;s=k.jz;t=n-q;u=o-r;p=p-s;m.jx=t;m.jy=u;m.jz=p;q=k.jx-l.jx;r=k.jy-l.jy;s=k.jz-l.jz;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jx=n;m.jy=s;m.jz
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/DS(r);r=m.jx*q;s=m.jy*q;q=m.jz*q;m.jx=r;m.jy=s;m.jz=q;}k=b.l0;b.mF= -(i.jx*k.jx+i.jy*k.jy+i.jz*k.jz);b=a.oz.data[5];c=a.nw.data;i=c[4];k=c[0];l=c[1];m=b.l0;n=i.jx;o=i.jy;p=i.jz;m.jx=n;m.jy=o;m.jz=p;q=k.jx;r=k.jy;s=k.jz;t=n-q;u=o-r;p=p-s;m.jx=t;m.jy=u;m.jz=p;q=k.jx-l.jx;r=k.jy-l.jy;s=k.jz-l.jz;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jx=n;m.jy=s;m.jz=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/DS(r);r=m.jx*q;s=m.jy*q;q=m.jz*q;m.jx=r;m.jy=s;m.jz=q;}k=b.l0;b.mF= -(i.jx*k.jx+i.jy
*k.jy+i.jz*k.jz);},
AGf=()=>{let b,c,d,e,f,g,h,i,j;b=S(Bg,8);c=b.data;d=new Bg;CJ();d.jx=(-1.0);d.jy=(-1.0);d.jz=(-1.0);c[0]=d;d=new Bg;d.jx=1.0;d.jy=(-1.0);d.jz=(-1.0);c[1]=d;d=new Bg;d.jx=1.0;d.jy=1.0;d.jz=(-1.0);c[2]=d;d=new Bg;d.jx=(-1.0);d.jy=1.0;d.jz=(-1.0);c[3]=d;d=new Bg;d.jx=(-1.0);d.jy=(-1.0);d.jz=1.0;c[4]=d;d=new Bg;d.jx=1.0;d.jy=(-1.0);d.jz=1.0;c[5]=d;d=new Bg;d.jx=1.0;d.jy=1.0;d.jz=1.0;c[6]=d;d=new Bg;d.jx=(-1.0);d.jy=1.0;d.jz=1.0;c[7]=d;ARk=b;b=CB(24);e=b.data;Uc=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.jx;j=i+1|0;e[i]=d.jy;f=j+1|0;e[j]=d.jz;h=h+1|0;}AIF=new Bg;};
function D7(){let a=this;C.call(a);a.nh=0.0;a.ne=0.0;a.nf=0.0;a.ng=0.0;}
let Qp=null,Qo=null;
let ASR=()=>{let b;b=new D7;b.nh=0.0;b.ne=0.0;b.nf=0.0;b.ng=0.0;Qp=b;b=new D7;b.nh=0.0;b.ne=0.0;b.nf=0.0;b.ng=0.0;Qo=b;};
let VP=E();
let AI3=E();
function Bg(){let a=this;C.call(a);a.jx=0.0;a.jy=0.0;a.jz=0.0;}
let Zy=null,Zz=null,Zx=null,AH4=null,API=null;
let CJ=()=>{CJ=BH(Bg);XG();};
let Pb=(a,b)=>{let c,d,e,f,g,h,i;c=a.jy;d=b.jz;e=c*d;f=a.jz;g=b.jy;h=e-f*g;e=b.jx;f=f*e;i=a.jx;d=f-i*d;c=i*g-c*e;a.jx=h;a.jy=d;a.jz=c;return a;},
ZY=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.kd.data;d=a.jx;e=d*c[3];f=a.jy;e=e+f*c[7];g=a.jz;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.jx=i;a.jy=j;a.jz=d;return a;},
XG=()=>{let b;b=new Bg;CJ();b.jx=1.0;b.jy=0.0;b.jz=0.0;Zy=b;b=new Bg;b.jx=0.0;b.jy=1.0;b.jz=0.0;Zz=b;b=new Bg;b.jx=0.0;b.jy=0.0;b.jz=1.0;Zx=b;b=new Bg;b.jx=0.0;b.jy=0.0;b.jz=0.0;AH4=b;API=C7();};
let ADx=E();
let ABx=E(C$);
let Lg=E(Fp);
let AJz=E();
let Yu=E();
let ANG=E();
function I$(){let a=this;C.call(a);a.l0=null;a.mF=0.0;}
let R1=E(BF);
let ANK=E();
let YE=E();
let AKO=E();
let ANE=E();
let AIp=E(0);
let ADK=E();
let ALC=E();
let FF=null;
let AA$=()=>{let b,c;FF=CB(16384);b=0;while(b<16384){FF.data[b]=TS((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=FF.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function JM(){let a=this;C.call(a);a.xf=null;a.wv=null;}
let Xu=null,APP=null;
let LA=()=>{LA=BH(JM);AAI();};
let AAI=()=>{let b,c,d,e,f,g,h,$$je;Dw();b=BW;c=B2(b,V(Dt));b=c<0?null:b.kA.data[c];if(b===null){b=new DV;d=new Bt;d.kk=0;d.jE=S(C,4);b.kb=d;b.kU=100;a:{try{d=Eh(V(Dt),null);break a;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){}else{throw $$e;}}try{d=Ed(V(Dt),null);Eq(d,1);break a;}catch($$e){$$je=Br($$e);if($$je instanceof CV){}else{throw $$e;}}d=null;}b.kX=d;if(d===null){b=new Bz;d=new J;d.jo=G(16);F(d,d.jm,A(21));if(V(Dt).jI===null)V(Dt).jI=W(V(Dt).jG.$meta.name);e=V(Dt).jI;F(d,d.jm,e);e=new H;f=d.jo;g
=f.data;c=d.jm;h=g.length;if(c>=0&&c<=(h-0|0)){e.jn=K(f.data,0,c);b.jp=1;b.jq=1;b.jr=e;B(b);}e=new I;e.jp=1;e.jq=1;B(e);}C6(BW,V(Dt),b);}Xu=b;e=new F_;e.oL=1;e.lP=U(4);APP=e;};
function MB(){let a=this;C.call(a);a.rm=null;a.v3=0.0;a.v4=0.0;a.v2=0.0;a.vZ=0.0;a.tb=0;a.tV=0;}
let AMY=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.rm.mM;g=1.0/f.mz;h=1.0/f.ms;i=b*g;j=c*h;k=(b+d|0)*g;g=(c+e|0)*h;Yz(a,i,j,k,g);l=a.rx.data;l[3]=i;l[4]=g;l[8]=i;l[9]=j;l[13]=k;l[14]=j;l[18]=k;l[19]=g;if(d<0)d= -d|0;a.tb=d;if(e<0)e= -e|0;a.tV=e;},
Yz=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.rm.mM;g=f.mz;h=f.ms;i=JZ(d-b);j=g;i=i*j;a.tb=i+Dh(i)*0.5|0;k=JZ(e-c);i=h;k=k*i;l=k+Dh(k)*0.5|0;a.tV=l;if(a.tb==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.v3=b;a.v4=c;a.v2=d;a.vZ=e;};
function Fl(){let a=this;MB.call(a);a.rx=null;a.sT=null;a.xE=0.0;a.xD=0.0;a.v0=0.0;a.uZ=0.0;a.yo=0.0;a.yn=0.0;a.xS=0.0;a.wf=0.0;a.we=0.0;a.qW=0;}
let Gg=(a,b,c,d,e,f)=>{let g,h,i,j;a.rx=CB(20);g=new BD;g.j8=1.0;g.j7=1.0;g.j6=1.0;g.j5=1.0;CP(g);a.sT=g;a.wf=1.0;a.we=1.0;a.qW=1;if(b===null){b=new Bj;b.jp=1;b.jq=1;b.jr=A(54);B(b);}a.rm=b;AMY(a,c,d,e,f);b=a.sT;b.j8=1.0;b.j7=1.0;b.j6=1.0;b.j5=1.0;CP(b);h=Gk(a.sT);i=a.rx.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;XB(a,h,f);h=a.v0/2.0;j=a.uZ/2.0;a.yo=h;a.yn=j;a.qW=1;},
ATp=(a,b,c,d,e)=>{let f=new Fl();Gg(f,a,b,c,d,e);return f;},
XB=(a,b,c)=>{let d,e,f,g;a.v0=b;a.uZ=c;if(a.qW)return;if(a.xS===0.0&&a.wf===1.0&&a.we===1.0){d=a.xE;e=d+b;b=a.xD;f=b+c;g=a.rx.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.qW=1;};
let P6=E();
let AKu=E();
let Oc=null;
let AUg=()=>{Oc=new BD;};
function BD(){let a=this;C.call(a);a.j8=0.0;a.j7=0.0;a.j6=0.0;a.j5=0.0;}
let PF=null,AD5=null,AIQ=null,AQ0=null,AEH=null,R_=0.0,W8=null,APy=null,V3=null,AN5=null,AO2=null,AJO=null,ANm=null,ADf=null,ACE=null,ALj=null,APO=null,ANW=null,ARj=null,WX=null,G2=null,ARe=null,AHB=null,AP4=null,AOK=null,ANf=null,AHx=null,Wk=null,AHe=null,ACW=null,AD9=null,ACp=null,AG_=null,AKB=null,ALD=null;
let CP=a=>{let b,c;b=a.j8;if(b<0.0)a.j8=0.0;else if(b>1.0)a.j8=1.0;c=a.j7;if(c<0.0)a.j7=0.0;else if(c>1.0)a.j7=1.0;c=a.j6;if(c<0.0)a.j6=0.0;else if(c>1.0)a.j6=1.0;c=a.j5;if(c<0.0)a.j5=0.0;else if(c>1.0)a.j5=1.0;return a;},
Gk=a=>{return Kx(((255.0*a.j5|0)<<24|(255.0*a.j6|0)<<16|(255.0*a.j7|0)<<8|255.0*a.j8|0)&(-16777217));},
C3=(b,c,d,e)=>{return Kx(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Ch=(b,c)=>{b.j8=((c&(-16777216))>>>24|0)/255.0;b.j7=((c&16711680)>>>16|0)/255.0;b.j6=((c&65280)>>>8|0)/255.0;b.j5=(c&255)/255.0;},
VC=()=>{let b;b=new BD;b.j8=1.0;b.j7=1.0;b.j6=1.0;b.j5=1.0;CP(b);PF=b;b=new BD;Ch(b,(-1077952513));AD5=b;b=new BD;Ch(b,2139062271);AIQ=b;b=new BD;Ch(b,1061109759);AQ0=b;b=new BD;b.j8=0.0;b.j7=0.0;b.j6=0.0;b.j5=1.0;CP(b);AEH=b;R_=Gk(PF);b=new BD;b.j8=0.0;b.j7=0.0;b.j6=0.0;b.j5=0.0;CP(b);W8=b;b=new BD;b.j8=0.0;b.j7=0.0;b.j6=1.0;b.j5=1.0;CP(b);APy=b;b=new BD;b.j8=0.0;b.j7=0.0;b.j6=0.5;b.j5=1.0;CP(b);V3=b;b=new BD;Ch(b,1097458175);AN5=b;b=new BD;Ch(b,1887473919);AO2=b;b=new BD;Ch(b,(-2016482305));AJO=b;b=new BD;b.j8
=0.0;b.j7=1.0;b.j6=1.0;b.j5=1.0;CP(b);ANm=b;b=new BD;b.j8=0.0;b.j7=0.5;b.j6=0.5;b.j5=1.0;CP(b);ADf=b;b=new BD;Ch(b,16711935);ACE=b;b=new BD;Ch(b,2147418367);ALj=b;b=new BD;Ch(b,852308735);APO=b;b=new BD;Ch(b,579543807);ANW=b;b=new BD;Ch(b,1804477439);ARj=b;b=new BD;Ch(b,(-65281));WX=b;b=new BD;Ch(b,(-2686721));G2=b;b=new BD;Ch(b,(-626712321));ARe=b;b=new BD;Ch(b,(-5963521));AHB=b;b=new BD;Ch(b,(-1958407169));AP4=b;b=new BD;Ch(b,(-759919361));AOK=b;b=new BD;Ch(b,(-1306385665));ANf=b;b=new BD;Ch(b,(-16776961));AHx
=b;b=new BD;Ch(b,(-13361921));Wk=b;b=new BD;Ch(b,(-8433409));AHe=b;b=new BD;Ch(b,(-92245249));ACW=b;b=new BD;Ch(b,(-9849601));AD9=b;b=new BD;b.j8=1.0;b.j7=0.0;b.j6=1.0;b.j5=1.0;CP(b);ACp=b;b=new BD;Ch(b,(-1608453889));AG_=b;b=new BD;Ch(b,(-293409025));AKB=b;b=new BD;Ch(b,(-1339006721));ALD=b;};
function M5(){let a=this;C.call(a);a.mf=0;a.oh=0;a.nz=null;a.n4=null;a.nu=null;a.nA=null;a.ox=0.0;}
let HG=0.0;
let AKv=(a,b,c,d)=>{if(b!==null&&!(!d&&a.nu===b)){BL.b6(a.mf,10242,b.qo);a.nu=b;}if(c!==null&&!(!d&&a.nA===c)){BL.b6(a.mf,10243,c.qo);a.nA=c;}},
VX=(a,b,c,d)=>{if(b!==null&&!(!d&&a.nz===b)){BL.b6(a.mf,10241,b.na);a.nz=b;}if(c!==null&&!(!d&&a.n4===c)){BL.b6(a.mf,10240,c.na);a.n4=c;}},
ADn=()=>{let b,c,d,e,f;b=HG;if(b>0.0)return b;if(!(B3.oI.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){HG=1.0;return 1.0;}if(!C1){c=CB(16);d=c.data.length;e=new HD;f=0+d|0;e.jL=(-1);e.jS=d;e.jt=d;e.jA=0;e.jt=f;e.pr=0;e.pX=0;e.oZ=c;}else{e=new CL;c=BE(64);e.jL=(-1);e.jS=64;e.jt=64;e.kh=Ci;e.kD=0;e.ke=c;e.jA=0;e.jt=64;e.li=1;e.kJ=0;e.kh=C4();e=ER(e);}Cw(e,0);CD(e,e.jS);Bi.b_(34047,e);b=QR(e,0);HG=b;return b;},
APT=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.om)OZ(c);if(N2===Tv){c=new Q;c.jp=1;c.jq=1;c.jr=A(55);B(c);}if(!c.om){e=new Q;e.jp=1;e.jq=1;e.jr=A(56);B(e);}c.om=0;f=c.pv;c.pv=null;g=1;h=c.oO;e=f.kB;if(h===(e===null?Fc:HI(e.kT)))e=f;else{e=new Fi;h=f.kB;I7(e,h===null?f.lm:h.lg,h===null?f.lp:h.lf,c.oO);h=IB;e.pW=h;i=e.kB;if(i===null){EW(e);h=e.k$;i=Bs(E2.jB);h.globalCompositeOperation=i;}else{j=h!==h?1:0;LT(i.ld,j);}i=f.kB;k=i===null?f.lm:i.lg;l=i===null?f.lp:i.lf;h=e.kB;if(h===null){EW(f);Js(e,
f.no,0,0,k,l,0,0,k,l);}else{m=i.ld;n=h.ld;Jc(m,n,0,0,k,l,0,0,k,l);}if(f.nE){e=new Q;e.jp=1;e.jq=1;e.jr=A(57);B(e);}Ek();Gn(Fn,f.oQ);h=f.kB;if(h!==null)Hz(h.ld);f.nE=1;g=1;}BL.ck(3317,1);if(c.uW){c=e.kB;ALS(b,e,c===null?e.lm:c.lg,c===null?e.lp:c.lf);}else{c=BL;h=e.kB;if(h===null)o=6408;else a:{j=h.kT;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new Q;e=new J;e.jo=G(16);B_(e,e.jm,Cd(A(58)));L(e,e.jm,j,10);h=new H;p=e.jo;q=p.data;d=e.jm;j
=q.length;if(d>=0&&d<=(j-0|0)){h.jn=K(p.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}r=h===null?e.lm:h.lg;k=h===null?e.lp:h.lf;if(h===null)m=6408;else b:{l=h.kT;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Q;e=new J;e.jo=G(16);DW(e,e.jm,A(58));L(e,e.jm,l,10);h=new H;p=e.jo;q=p.data;d=e.jm;j=q.length;if(d>=0&&d<=(j-0|0)){h.jn=K(p.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}if(h===null)l=
5121;else c:{l=h.kT;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new Q;e=new J;e.jo=G(16);B_(e,e.jm,Cd(A(58)));L(e,e.jm,l,10);h=new H;p=e.jo;q=p.data;d=e.jm;j=q.length;if(d>=0&&d<=(j-0|0)){h.jn=K(p.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}l=5121;}c.cn(b,d,o,r,k,0,m,l,e.pk);}if(g){if(e.nE){e=new Q;e.jp=1;e.jq=1;e.jr=A(57);B(e);}Ek();Gn(Fn,e.oQ);c=e.kB;if(c!==null)Hz(c.ld);e.nE=1;}},
ASN=()=>{HG=0.0;};
function Gh(){M5.call(this);this.mM=null;}
let DT=null;
let HF=(a,b)=>{let c,d;a.mM=b;if(!b.om)OZ(b);BL.co(a.mf,a.oh);APT(3553,b,0);VX(a,a.nz,a.n4,1);AKv(a,a.nu,a.nA,1);c=a.ox;d=ADn();if(d!==1.0){c=S9(c,d);Bi.cu(3553,34046,c);a.ox=c;}BL.co(a.mf,0);},
AIq=a=>{let b,c,d,e,f,g,h,i;b=a.mM;if(!(b instanceof Kl)){b=a;if(!b.$id$){c=D_();b.$id$=c;}d=Bc(a.$id$,4);b=new J;b.jo=G(16);F(b,b.jm,A(1));e=b.jm;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jo;g=f.data;h=b.jm;i=g.length;if(h>=0&&h<=(i-0|0)){c.jn=K(f.data,0,h);return c;}b=new I;b.jp=1;b.jq=1;B(b);}c=b;if(!c.$id$){d=D_();c.$id$=d;}d=Bc(b.$id$,4);b=new J;b.jo=G(16);F(b,b.jm,A(1));e=b.jm;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jo;g=f.data;h=b.jm;i=g.length;if(h>=0&&h<=(i-0|0)){c.jn=K(f.data,0,h);return c;}b=new I;b.jp
=1;b.jq=1;B(b);},
ALl=()=>{let b,c,d,e;b=new Is;c=Je(16);b.n_=0;d=S(Fj,c);e=d.data;b.ma=d;b.rF=0.75;b.o0=e.length*0.75|0;DT=b;};
function Bt(){let a=this;C.call(a);a.jE=null;a.js=0;a.kk=0;a.jW=null;}
let OA=a=>{a.kk=1;a.jE=S(C,16);},
AUj=()=>{let a=new Bt();OA(a);return a;},
UA=(a,b)=>{a.kk=1;a.jE=S(C,b);},
ATH=a=>{let b=new Bt();UA(b,a);return b;},
OV=(a,b,c)=>{a.kk=b;a.jE=S(C,c);},
GJ=(a,b)=>{let c=new Bt();OV(c,a,b);return c;},
HN=(a,b,c,d)=>{a.kk=b;if(d===null){d=new C5;d.jp=1;d.jq=1;B(d);}if(d===V(Bq)){d=new Bj;d.jp=1;d.jq=1;B(d);}if(c>=0){a.jE=DF(d.jG,c);return;}d=new DH;d.jp=1;d.jq=1;B(d);},
ARY=(a,b,c)=>{let d=new Bt();HN(d,a,b,c);return d;},
PE=(a,b)=>{a.kk=1;if(b===null){b=new C5;b.jp=1;b.jq=1;B(b);}if(b!==V(Bq)){a.jE=DF(b.jG,16);return;}b=new Bj;b.jp=1;b.jq=1;B(b);},
ASd=a=>{let b=new Bt();PE(b,a);return b;},
TX=(a,b)=>{let c,d,e,f,g;c=b.kk;d=b.js;e=b.jE.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BI;f.jG=e;g=f;e.classObject=g;}}g=D1(f);a.kk=c;if(g===null){b=new C5;b.jp=1;b.jq=1;B(b);}if(g===V(Bq)){b=new Bj;b.jp=1;b.jq=1;B(b);}if(d>=0){g=DF(g.jG,d);a.jE=g;c=b.js;a.js=c;F3(b.jE,0,g,0,c);return;}b=new DH;b.jp=1;b.jq=1;B(b);},
ARK=a=>{let b=new Bt();TX(b,a);return b;},
Ty=(a,b)=>{K2(a,1,b,0,b.data.length);},
ATO=a=>{let b=new Bt();Ty(b,a);return b;},
K2=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BI;g.jG=f;h=g;f.classObject=h;}}h=D1(g);a.kk=b;if(h===null){h=new C5;h.jp=1;h.jq=1;B(h);}if(h===V(Bq)){h=new Bj;h.jp=1;h.jq=1;B(h);}if(e>=0){h=DF(h.jG,e);a.jE=h;a.js=e;F3(c,d,h,0,e);return;}h=new DH;h.jp=1;h.jq=1;B(h);},
AS3=(a,b,c,d)=>{let e=new Bt();K2(e,a,b,c,d);return e;},
BN=(a,b)=>{let c,d,e,f;c=a.jE;d=c.data;e=a.js;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=Kp(a,e);}c=c.data;f=a.js;a.js=f+1|0;c[f]=b;},
Gq=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.js)return a.jE.data[b];c=new I;d=new J;d.jo=G(16);F(d,d.jm,A(18));L(d,d.jm,b,10);F(d,d.jm,A(19));b=a.js;L(d,d.jm,b,10);e=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);c.jp=1;c.jq=1;c.jr=e;B(c);}d=new I;d.jp=1;d.jq=1;B(d);},
EJ=(a,b,c)=>{let d,e,f;a:{d=a.jE;if(!c&&b!==null){e=0;f=a.js;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.js;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
O7=(a,b,c)=>{let d,e,f;a:{d=a.jE;if(!(!c&&b!==null)){e=0;f=a.js;while(e<f){if(d.data[e]===b){Dd(a);DA(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.js;while(true){if(e>=f)break a;if(b.cB(d.data[e])){Dd(a);DA(a,e);return 1;}e=e+1|0;}}}return 0;},
DA=(a,b)=>{let c,d,e,f,g,h,i;c=a.js;if(b<c){d=a.jE;e=d.data;f=e[b];g=c-1|0;a.js=g;if(!a.kk)e[b]=e[g];else DU(d,b+1|0,d,b,g-b|0);e[a.js]=null;return f;}f=new I;h=new J;h.jo=G(16);F(h,h.jm,A(18));L(h,h.jm,b,10);F(h,h.jm,A(19));b=a.js;L(h,h.jm,b,10);i=new H;d=h.jo;e=d.data;g=h.jm;c=e.length;if(g>=0&&g<=(c-0|0)){i.jn=K(d.data,0,g);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;f.jp=1;f.jq=1;B(f);},
Pz=a=>{let b,c,d,e,f,g;b=a.jE;c=0;d=a.js;e=null;if(c>d){e=new Bj;e.jp=1;e.jq=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.js=0;},
Kp=(a,b)=>{let c,d,e,f,g,h;c=a.jE;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BI;e.jG=d;f=e;d.classObject=f;}}e=D1(e);if(e===null){e=new C5;e.jp=1;e.jq=1;B(e);}if(e===V(Bq)){e=new Bj;e.jp=1;e.jq=1;B(e);}if(b<0){e=new DH;e.jp=1;e.jq=1;B(e);}e=DF(e.jG,b);d=e.data;g=a.js;h=d.length;if(g<h)h=g;F3(c,0,e,0,h);a.jE=e;return e;},
FR=a=>{let b;if(Cx){b=new Cq;b.j$=1;b.kc=a;b.k7=1;return b;}if(a.jW===null){b=new CW;b.lh=a;b.lj=1;a.jW=b;}return CE(a.jW);},
Q$=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.kk)return 0;if(!(b instanceof Bt))return 0;c=b;if(!c.kk)return 0;d=a.js;if(d!=c.js)return 0;e=a.jE;f=c.jE;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cB(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
T5=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.js)return A(59);b=a.jE;c=new Q2;d=G(32);e=d.data;c.lZ=d;f=c.k5;if(f==e.length)FK(c,f+1|0);b=b.data;e=c.lZ.data;g=c.k5;c.k5=g+1|0;e[g]=91;h=b[0];if(h===null)I4(c);else{h=h.S();if(h===null)I4(c);else{i=h.jn.length;j=c.k5+i|0;if(j>c.lZ.data.length)FK(c,j);Kv(h,0,i,c.lZ,c.k5);c.k5=j;}}i=1;while(i<a.js){g=A(60).jn.length;k=c.k5+g|0;if(k>c.lZ.data.length)FK(c,k);Kv(A(60),0,g,c.lZ,c.k5);c.k5=k;h=b[i];if(h===null)I4(c);else{h=h.S();if(h===null)I4(c);else{k=h.jn.length;j=c.k5+k|0;if
(j>c.lZ.data.length)FK(c,j);Kv(h,0,k,c.lZ,c.k5);c.k5=j;}}i=i+1|0;}f=c.k5;if(f==c.lZ.data.length)FK(c,f+1|0);a:{b=c.lZ;e=b.data;g=c.k5;f=g+1|0;c.k5=f;e[g]=93;if(!f)c=A(61);else{c=new H;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.jn=K(b.data,0,f);}return c;}c=new I;c.jp=1;c.jq=1;B(c);};
function Jp(){let a=this;C.call(a);a.sV=0;a.oa=null;a.kA=null;a.uG=0.0;a.ty=0;a.rn=0;a.ri=0;}
let PB=null;
let AHS=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.uG=c;d=I0(b,c);a.ty=d*c|0;b=d-1|0;a.ri=b;a.rn=ET(R(b));a.oa=S(C,d);a.kA=S(C,d);return;}e=new Bj;f=new J;f.jo=G(16);F(f,f.jm,A(62));Hj(f,f.jm,c);g=new H;h=f.jo;i=h.data;d=f.jm;j=i.length;if(d>=0&&d<=(j-0|0)){g.jn=K(h.data,0,d);e.jp=1;e.jq=1;e.jr=g;B(e);}f=new I;f.jp=1;f.jq=1;B(f);},
Ez=(a,b)=>{let c=new Jp();AHS(c,a,b);return c;},
B2=(a,b)=>{let c,d,e;if(b===null){c=new Bj;c.jp=1;c.jq=1;c.jr=A(63);B(c);}d=a.oa;e=Be(Bb(Y(R(b.cI()),D(2135587861, 2654435769)),a.rn));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cB(b))break;e=(e+1|0)&a.ri;}return e;},
C6=(a,b,c)=>{let d,e,f;d=B2(a,b);if(d>=0){e=a.kA.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.oa.data;e[d]=b;a.kA.data[d]=c;d=a.sV+1|0;a.sV=d;if(d>=a.ty)ZU(a,e.length<<1);return null;},
ZU=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.oa.data.length;a.ty=b*a.uG|0;d=b-1|0;a.ri=d;a.rn=ET(R(d));e=a.oa;f=a.kA;a.oa=S(C,b);a.kA=S(C,b);if(a.sV>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.oa;b=Be(Bb(Y(R(g.cI()),D(2135587861, 2654435769)),a.rn));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.ri;}j[b]=g;a.kA.data[b]=h;}d=d+1|0;}}}},
ASp=()=>{PB=new C;};
let AEc=E(Jp);
let AQm=E();
function DD(){let a=this;C.call(a);a.lR=0;a.lz=0;a.lY=0;a.lO=0;a.m5=0;a.lV=null;a.nj=0;a.oo=0;}
let AIy=(a,b)=>{if(!(b instanceof DD))return 0;return ADY(a,b);},
ADY=(a,b)=>{let c,d,e;a:{if(b!==null&&a.lR==b.lR&&a.lz==b.lz&&a.lO==b.lO&&a.lY==b.lY){c=a.lV;d=b.lV;if(c===d)e=1;else if(!(d instanceof H))e=0;else{d=d;e=c.jn!==d.jn?0:1;}if(e&&a.nj==b.nj){e=1;break a;}}e=0;}return e;};
let AQE=E();
let AFH=E();
let AI0=E();
let AG6=E();
let QD=E();
let V2=null;
let RN=()=>{RN=BH(QD);AFP();};
let AFP=()=>{let b,c,d;b=new JT;M7();c=new Bg;CJ();b.u5=c;d=new Bg;b.vd=d;b.uL=new Bg;b.ve=new Bg;c.jx=0.0;c.jy=0.0;c.jz=0.0;d.jx=0.0;d.jy=0.0;d.jz=0.0;AJG(b,c,d);V2=b;};
let WW=E();
let AHW=E();
let AGI=E();
let AHs=E();
let ANg=E();
let ADF=E();
let AON=E();
let AFj=E();
let YN=E();
let Z9=E();
let I9=E(Bx);
let AQ1=null,AOQ=null,AC2=null;
let AD8=()=>{let b,c;b=new I9;b.jB=A(64);b.jw=0;AQ1=b;c=new I9;c.jB=A(65);c.jw=1;AOQ=c;AC2=P(I9,[b,c]);};
let AH1=E();
let Sx=E(0);
let Dj=E();
let W6=E(Dj);
let W5=E(Dj);
let AGa=E(Dj);
let ABp=E(Dj);
let AK1=E(Dj);
let Lb=E(Dj);
let ABd=E(Lb);
let Hb=E(0);
let ACn=E();
let EZ=E(0);
let AKN=E();
let AOJ=E();
let ZA=E();
let Er=E();
let AJI=E(Er);
let G5=E(Er);
let Dv=E(G5);
let ACD=null;
let P5=()=>{P5=BH(Dv);XC();};
let XC=()=>{let b;b=new Bg;CJ();ACD=b;};
let AKt=E();
let ANe=E(Dv);
let AFx=E(Dv);
let APw=E(Er);
let Qu=null;
let ASy=()=>{Qu=CB(3);};
let KC=E(Er);
let WP=E(KC);
let AA_=E(Dv);
let GC=E(G5);
let AGZ=E(GC);
let AFu=E(Dv);
let AHv=E(Dv);
let AGY=E(GC);
let G3=E(Bx);
let AGN=null,AJD=null,ACF=null,ZW=null;
let AIX=()=>{let b,c,d;b=new G3;b.jB=A(66);b.jw=0;AGN=b;c=new G3;c.jB=A(67);c.jw=1;AJD=c;d=new G3;d.jB=A(68);d.jw=2;ACF=d;ZW=P(G3,[b,c,d]);};
let Fs=E();
let L5=E(Fs);
let Vr=E(L5);
let Hk=E(Bx);
let AOP=null,APp=null,U_=null,APD=null;
let AE0=()=>{let b,c,d;b=new Hk;b.jB=A(69);b.jw=0;AOP=b;c=new Hk;c.jB=A(70);c.jw=1;APp=c;d=new Hk;d.jB=A(71);d.jw=2;U_=d;APD=P(Hk,[b,c,d]);};
let CO=E(Fs);
let HH=E(CO);
let Zn=E();
let Gf=E(CO);
let ANP=null,ANO=null,ANQ=null,AOW=null;
let Tc=()=>{Tc=BH(Gf);AGu();};
let AGu=()=>{let b;b=new Bg;CJ();ANP=b;ANO=new Bg;ANQ=new Bg;b=new D7;b.nh=0.0;b.ne=0.0;b.nf=0.0;b.ng=1.0;AOW=b;};
let Ec=E(Gf);
let Fw=E(Ec);
let ACj=E(Fw);
let Hg=E(CO);
let ARf=E(Hg);
let ANb=E(CO);
let E_=E(CO);
let WZ=E(E_);
let GO=E(CO);
let ACb=E(Ec);
let AEp=E(Ec);
let J8=E(CO);
let AJJ=E(J8);
let Yh=E(E_);
let AFF=E(Fw);
let AJA=E(CO);
let AHG=E(E_);
let AJQ=E(CO);
let ALw=E(Gf);
let AEw=E(C$);
let YY=E(C$);
let Ze=E(Ec);
let AKh=E(GO);
let APx=E(HH);
let AIz=E(HH);
let ALi=E(GO);
let AGw=E(Fw);
let AQc=E(Hg);
let Eo=E(Fs);
let AG5=E(Eo);
let Ff=E();
let AKH=E(Ff);
let ALY=E(Eo);
let ANa=E(Eo);
let AOa=E(Ff);
let ABV=E(Eo);
let ANh=E(Ff);
let JJ=E(0);
let Ne=E(0);
function BI(){let a=this;C.call(a);a.jI=null;a.jG=null;a.o4=null;}
let Th=0;
let ATw=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BI;c.jG=b;d=c;b.classObject=d;}return c;},
AGW=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=D_();b.$id$=c;}d=a.$id$;b=new J;b.jo=G(16);F(b,b.jm,A(72));L(b,b.jm,d,10);c=new H;e=b.jo;f=e.data;g=b.jm;d=f.length;if(g>=0&&g<=(d-0|0)){c.jn=K(e.data,0,g);return c;}b=new I;b.jp=1;b.jq=1;B(b);},
D1=a=>{let b,c,d;b=a.jG.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BI;c.jG=b;d=c;b.classObject=d;}}return c;},
AF5=()=>{Du.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){RW(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Bq,callable:function(obj,args){Jk();NN();return null;}}];Dt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){PX(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[Dt],returnType:Bq,callable:function(obj,
args){ARR(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){AS5(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return ARW(obj);}}];BR.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){Rg(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,
args){Pc(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ej,callable:function(obj,args){return ASK(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[Ej],returnType:Bq,callable:function(obj,args){ATo(obj,My(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ej,callable:function(obj,args){return AUK(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[Ej],returnType:Bq,callable:function(obj,
args){ASo(obj,My(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Dc,callable:function(obj,args){return ATl(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Dc],returnType:Bq,callable:function(obj,args){ATf(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return AUe(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Bq,callable:function(obj,
args){ASL(obj,B7(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return ATj(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Bq,callable:function(obj,args){ASw(obj,B7(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return ASO(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Bq,callable
:function(obj,args){ART(obj,B7(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:J3,callable:function(obj,args){return AS2(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[J3],returnType:Bq,callable:function(obj,args){ATC(obj,ARB(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ej,callable:function(obj,args){return ARI(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:Ej,callable:function(obj,args){return ATI(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[Ej],returnType:Bq,callable:function(obj,args){AUA(obj,My(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[Ej],returnType:Bq,callable:function(obj,args){ASa(obj,My(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CK,callable:function(obj,args){return AUa(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[CK],returnType:Bq,callable:function(obj,args){ARH(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[CK,Bv],returnType:Bv,callable:function(obj,args){return AUf(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return ASV(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return ASz(obj
);}},{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Ce],returnType:Bq,callable:function(obj,args){AT0(obj,Dl(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return NO(obj);}}];Bt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){OA(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Bq,callable:function(obj,args)
{UA(obj,B7(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ce,BM],returnType:Bq,callable:function(obj,args){OV(obj,Dl(args[0]),B7(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ce,BM,BI],returnType:Bq,callable:function(obj,args){HN(obj,Dl(args[0]),B7(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BI],returnType:Bq,callable:function(obj,args){PE(obj,args[0]);return null;}},{name:"<init>",modifiers:
0,accessLevel:3,parameterTypes:[Bt],returnType:Bq,callable:function(obj,args){TX(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[DM(C)],returnType:Bq,callable:function(obj,args){Ty(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ce,DM(C),BM,BM],returnType:Bq,callable:function(obj,args){K2(obj,Dl(args[0]),args[1],B7(args[2]),B7(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Bq,callable:function(obj,
args){BN(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Bq,callable:function(obj,args){ASB(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Bq,callable:function(obj,args){AT6(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Bq,callable:function(obj,args){AUs(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers
:0,accessLevel:3,parameterTypes:[Bt],returnType:Bq,callable:function(obj,args){ASS(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bt,BM,BM],returnType:Bq,callable:function(obj,args){ARL(obj,args[0],B7(args[1]),B7(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[DM(C)],returnType:Bq,callable:function(obj,args){ASG(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[DM(C),BM,BM],returnType:Bq,callable:function(obj,
args){AR4(obj,args[0],B7(args[1]),B7(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:C,callable:function(obj,args){return Gq(obj,B7(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BM,C],returnType:Bq,callable:function(obj,args){ATK(obj,B7(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BM,C],returnType:Bq,callable:function(obj,args){ATh(obj,B7(args[0]),args[1]);return null;}},{name:"insertRange",modifiers
:0,accessLevel:3,parameterTypes:[BM,BM],returnType:Bq,callable:function(obj,args){ATU(obj,B7(args[0]),B7(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BM,BM],returnType:Bq,callable:function(obj,args){AUJ(obj,B7(args[0]),B7(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Ce],returnType:Ce,callable:function(obj,args){return ASv(obj,args[0],Dl(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bt,Ce],returnType:Ce,callable
:function(obj,args){return ASZ(obj,args[0],Dl(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bt,Ce],returnType:Ce,callable:function(obj,args){return ATk(obj,args[0],Dl(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ce],returnType:BM,callable:function(obj,args){return EJ(obj,args[0],Dl(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ce],returnType:BM,callable:function(obj,args){return ATF(obj,args[0],Dl(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Ce],returnType:Ce,callable:function(obj,args){return O7(obj,args[0],Dl(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:C,callable:function(obj,args){return DA(obj,B7(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BM,BM],returnType:Bq,callable:function(obj,args){ASm(obj,B7(args[0]),B7(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bt,Ce],returnType:Ce,callable:function(obj,
args){return AUt(obj,args[0],Dl(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return ARP(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AUp(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AUI(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return AUb(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return AR8(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){Pz(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DM(C),callable:function(obj,args){return ATG(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:DM(C),callable:function(obj,args){return AT5(obj,B7(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:DM(C),callable:function(obj,args){return AUm(obj,B7(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BM],returnType:DM(C),callable:function(obj,args){return Kp(obj,B7(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){ATZ(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[HJ],returnType:Bq,callable:function(obj,args){AUw(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[HJ,BM],returnType:C,callable:function(obj,args){return AT3(obj,args[0],B7(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[HJ,BM],returnType:BM,callable:function(obj,args){return ATR(obj,args[0],B7(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){AT1(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable
:function(obj,args){ARz(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cq,callable:function(obj,args){return FR(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[Na],returnType:Dp,callable:function(obj,args){return AUG(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Bq,callable:function(obj,args){ARQ(obj,B7(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return ATq(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DM(C),callable:function(obj,args){return ARO(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BI],returnType:DM(C),callable:function(obj,args){return AR3(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return ARZ(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ce,callable:function(obj,
args){return Q$(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ce,callable:function(obj,args){return AT9(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return T5(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[H],returnType:H,callable:function(obj,args){return ATV(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BI],returnType:Bt,callable:function(obj,
args){return ATN(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Ce,BM,BI],returnType:Bt,callable:function(obj,args){return AUl(Dl(args[0]),B7(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[DM(C)],returnType:Bt,callable:function(obj,args){return ARX(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:Hr,callable:function(obj,args){return AR6(obj);}}];CM.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bq,callable:function(obj,args){QV(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bq,callable:function(obj,args){UT(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return ATx(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Ce],returnType:Bq,callable:function(obj,args){ARF(obj,Dl(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Gi,callable:function(obj,args){return AR$(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Gi],returnType:Bq,callable:function(obj,args){ATL(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CK,callable:function(obj,args){return AUz(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[CK],returnType:Bq,callable:function(obj,args){ASH(obj,args[0]);return null;}}];},
M2=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.jG.$meta.primitive?1:0)&&!(a.jG.$meta.item===null?0:1)){if(a.o4===null){if(!Th){Th=1;AF5();}b=a.jG.$meta.methods;a.o4=S(Ha,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof Fm())?e:e[Bk]===true?e:e.jY;g=W(f.name);if(g===A(73))h=1;else if(!(A(73) instanceof H))h=0;else{e=A(73);h=g.jn!==e.jn?0:1;}if(h){g=f.parameterTypes;i=S(BI,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BI;e.jG
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.o4.data;h=c+1|0;e=new Ha;g=W(f.name);k=f.modifiers;n=f.accessLevel;f=Df(f.callable,"call");e.l5=a;e.w$=g;e.p8=k;e.qY=n;e.nK=i;e.tc=f;j[c]=e;c=h;}d=d+1|0;}i=a.o4;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BI;e.jG=b;f=e;b.classObject=f;}}e=D1(e);if(e===null){e=new C5;e.jp=1;e.jq=1;B(e);}if(e===V(Bq)){e=new Bj;e.jp=1;e.jq=1;B(e);}if(c<0){e=new DH;e.jp=1;e.jq=1;B(e);}i=i.data;f=DF(e.jG,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.o4=f;}return a.o4.p();}return S(Ha,0);},
APJ=a=>{let b,c,d,e,f,g,h,i,j,k;b=(M2(a)).data;c=b.length;d=S(Ha,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Kt(h.p8,h.qY)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=Cf(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BI;h.jG=j;k=h;j.classObject=k;}}j=D1(h);if(j===null){h=new C5;h.jp=1;h.jq=1;B(h);}if(j===V(Bq)){h=new Bj;h.jp=1;h.jq=1;B(h);}if(f<0){h=new DH;h.jp=1;h.jq=1;B(h);}k=DF(j.jG,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
AMO=(a,b)=>{let c,d,e,f;c=(M2(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new GU;f.jp=1;f.jq=1;B(f);}f=c[e];if(Tq(f.nK.p(),b))break;e=e+1|0;}return f;},
AMM=(a,b)=>{let c,d,e,f,g;c=(M2(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new GU;f.jp=1;f.jq=1;B(f);}f=c[e];g=!(Kt(f.p8,f.qY)&1)?0:1;if(g&&Tq(f.nK.p(),b))break;e=e+1|0;}return f;};
let AAf=E();
let AKA=b=>{let c,d,e,f,g;if(b===null)return null;c=BE(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof Fm())?g:g[Bk]===true?g:g.jY;e=e+1|0;}return c;},
BY=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
Df=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let Y4=E();
let VU=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
LK=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(LK(d[e],c))return 1;e=e+1|0;}return 0;},
En=b=>{setTimeout(()=>{ATJ(N6)(b);},0);},
N6=b=>{b.cS();},
Mk=(b,c)=>{setTimeout(()=>{N6(b);},c);},
AFQ=()=>{return [];};
function Dy(){let a=this;C.call(a);a.jr=null;a.le=null;a.jp=0;a.jq=0;a.w1=null;}
let X=a=>{a.jp=1;a.jq=1;},
ATX=()=>{let a=new Dy();X(a);return a;},
Bn=a=>{return a;},
AL_=a=>{return a.jr;},
ASE=a=>{return a.cT();},
ATQ=a=>{let b;b=a.le;if(b===a)b=null;return b;},
ASP=a=>{let b,c;if(C9===null){b=new Fh;c=new Cu;c.kW=BE(32);b.ll=c;c=new J;BA(c);c.jo=G(16);b.kZ=c;b.kY=G(32);b.k2=0;b.k3=Cm;C9=b;}Jn(a,C9);},
Jn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BI;d.jG=c;e=d;c.classObject=e;}}if(d.jI===null)d.jI=W(d.jG.$meta.name);Dk(Bs(d.jI));d=a.cT();if(d!==null){c=new J;c.jo=G(16);F(c,c.jm,A(74));F(c,c.jm,d);e=new H;f=c.jo;g=f.data;h=c.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);Dk(Bs(e));}else{b=new I;b.jp=1;b.jq=1;B(b);}}a:{Dk("\n");f=a.w1;if(f!==null){f=f.data;j=f.length;h=0;while(true){if(h>=j)break a;e=f[h];Dk("\tat ");c=A(2);if(e!==null)c=e.S();Dk(Bs(c));Dk("\n");h
=h+1|0;}}}c=a.le;if(c!==null&&c!==a){Dk("Caused by: ");Jn(a.le,b);}};
let Ca=E(Dy);
let IS=a=>{a.jp=1;a.jq=1;},
ARA=()=>{let a=new Ca();IS(a);return a;};
let Bz=E(Ca);
let NJ=a=>{a.jp=1;a.jq=1;},
ASr=()=>{let a=new Bz();NJ(a);return a;},
Gp=(a,b)=>{a.jp=1;a.jq=1;a.jr=b;},
ASg=a=>{let b=new Bz();Gp(b,a);return b;};
let AFp=E(Bz);
let Jf=E(0);
function H(){C.call(this);this.kS=0;}
let Ur=null,Lq=null,No=null;
let WS=(a,b)=>{a.jn=K(b.data,0,b.data.length);},
ARD=a=>{let b=new H();WS(b,a);return b;},
ADv=(a,b)=>{a.jn=b;},
St=a=>{let b=new H();ADv(b,a);return b;},
Kv=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.jn.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AR7(a.jn,b,d.data,e,g);return;}}h=new I;h.jp=1;h.jq=1;B(h);},
LW=(a,b,c)=>{let d,e,f;if((c+b.jn.length|0)>a.jn.length)return 0;d=0;a:{b:{while(d<b.jn.length){if(d<0)break a;if(d>=b.jn.length)break a;e=b.jn.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.jn.length)break b;if(e!=a.jn.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);},
ABN=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.jn.length>a.jn.length)return 0;c=0;d=a.jn.length-b.jn.length|0;a:{b:{while(d<a.jn.length){if(d<0)break a;if(d>=a.jn.length)break a;e=a.jn.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.jn.length)break b;if(e!=b.jn.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);},
Hl=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.jn.length)return (-1);if(a.jn.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.jn.length-1|0))return (-1);if(a.jn.charCodeAt(c)==e&&a.jn.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
FD=(a,b,c)=>{let d,e,f,g;d=a.jn.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.jn.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.jn.charCodeAt(d)==g){b=d-1|0;if(a.jn.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Pm=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.jn.length-b.jn.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.jn.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.jn.length)break a;g=a.jn.charCodeAt(f);if(e<0)break b;if(e>=b.jn.length)break b;if(g!=b.jn.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);},
ABE=(a,b,c)=>{let d,e,f;d=a.jn.length-b.jn.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.jn.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.jn.length)break a;f=a.jn.charCodeAt(f);if(e<0)break b;if(e>=b.jn.length)break b;if(f!=b.jn.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);},
Cv=(a,b,c)=>{let d,e,f;d=a.jn.length;e=Cf(b,c);if(!e)return Lq;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return St(a.jn.substring(b,c));f=new T;f.jp=1;f.jq=1;B(f);},
CY=(a,b)=>{let c,d,e,f;c=a.jn.length-b.jn.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.jn.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.jn.length)break a;f=a.jn.charCodeAt(f);if(e<0)break b;if(e>=b.jn.length)break b;if(f!=b.jn.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);},
L_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new J;d.jo=G(16);e=a.jn.length-b.jn.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cv(a,f,a.jn.length);g=d.jm;if(b===null)b=A(2);F(d,g,b);b=new H;h=d.jo;i=h.data;j=d.jm;e=i.length;if(j>=0&&j<=(e-0|0)){b.jn=K(h.data,0,j);return b;}b=new I;b.jp=1;b.jq=1;B(b);}k=0;d:{while(k<b.jn.length){j=f+k|0;if(j<0)break b;if(j>=a.jn.length)break b;j=a.jn.charCodeAt(j);if(k<0)break c;if(k>=b.jn.length)break c;if(j!=b.jn.charCodeAt(k)){if(f<0)break a;if(f>=a.jn.length)break a;k=a.jn.charCodeAt(f);j
=d.jm;Bd(d,j,j+1|0);d.jo.data[j]=k;break d;}k=k+1|0;}F(d,d.jm,c===null?A(2):c);f=f+(b.jn.length-1|0)|0;}f=f+1|0;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);},
AF9=a=>{let b,c,d;b=0;c=a.jn.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.jn.length)break;if(a.jn.charCodeAt(b)>32)break a;b=b+1|0;}d=new T;d.jp=1;d.jq=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.jn.length)break b;if(a.jn.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cv(a,b,c+1|0);}d=new T;d.jp=1;d.jq=1;B(d);},
Cd=a=>{return a;},
AOZ=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof H))return 0;c=b;return a.jn!==c.jn?0:1;},
AJf=a=>{let b;a:{if(!a.kS){b=0;while(true){if(b>=a.jn.length)break a;a.kS=(31*a.kS|0)+a.jn.charCodeAt(b)|0;b=b+1|0;}}}return a.kS;},
AT$=()=>{let b;Ur=G(0);b=new H;b.jn="";Lq=b;No=new MU;};
let Eb=E();
function E9(){Eb.call(this);this.mD=0;}
let Ns=null,DY=null;
let J0=(b,c)=>{if(b!==null)return Uq(b,0,b.jn.length,c);b=new Cp;b.jp=1;b.jq=1;b.jr=A(75);B(b);},
Uq=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new Cp;b.jp=1;b.jq=1;b.jr=A(76);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.jn.length){a:{switch(b.jn.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new Cp;b.jp=1;b.jq=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.jn.length)break b;g=AMy(b.jn.charCodeAt(g));if(g<0){k=new Cp;l=Cv(b,c,d);b=new J;b.jo=G(16);F(b,b.jm,A(77));c=b.jm;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jo;o=n.data;d=b.jm;e
=o.length;if(d>=0&&d<=(e-0|0)){m.jn=K(n.data,0,d);k.jp=1;k.jq=1;k.jr=m;B(k);}b=new I;b.jp=1;b.jq=1;B(b);}if(g>=e){k=new Cp;l=Cv(b,c,d);b=new J;b.jo=G(16);F(b,b.jm,A(78));L(b,b.jm,e,10);F(b,b.jm,A(74));c=b.jm;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jo;o=n.data;d=b.jm;e=o.length;if(d>=0&&d<=(e-0|0)){m.jn=K(n.data,0,d);k.jp=1;k.jq=1;k.jr=m;B(k);}b=new I;b.jp=1;b.jq=1;B(b);}if(h>i){b=new Cp;b.jp=1;b.jq=1;b.jr=A(79);B(b);}h=Da(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new Cp;l=Cv(b,c,d);b
=new J;b.jo=G(16);F(b,b.jm,A(80));c=b.jm;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jo;o=n.data;d=b.jm;e=o.length;if(d>=0&&d<=(e-0|0)){m.jn=K(n.data,0,d);k.jp=1;k.jq=1;k.jr=m;B(k);}b=new I;b.jp=1;b.jq=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);}b=new Cp;k=new J;k.jo=G(16);F(k,k.jm,A(81));L(k,k.jm,e,10);m=new H;n=k.jo;o=n.data;d=k.jm;e=o.length;if(d>=0&&d<=(e-0|0)){m.jn=K(n.data,0,d);b.jp=1;b.jq=1;b.jr=m;B(b);}b=new I;b.jp=1;b.jq=1;B(b);},
Km=b=>{if(b!==null)return Uq(b,0,b.jn.length,10);b=new Cp;b.jp=1;b.jq=1;b.jr=A(75);B(b);},
ED=()=>{let b,c,d,e,f;a:{if(DY===null){b=S(E9,256);c=b.data;DY=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new E9;f.mD=d-128|0;c[d]=f;d=d+1|0;}}}},
B7=a=>{return a.mD;},
AMy=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
N3=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
DO=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
ATY=()=>{Ns=V(BM);};
function Z(){let a=this;C.call(a);a.jo=null;a.jm=0;}
let EF=a=>{a.jo=G(16);},
ASD=()=>{let a=new Z();EF(a);return a;},
DI=(a,b)=>{a.jo=G(b);},
AUh=a=>{let b=new Z();DI(b,a);return b;},
Im=(a,b)=>{F(a,a.jm,b===null?A(2):b.S());return a;},
IN=(a,b)=>{F(a,a.jm,b);return a;},
F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.jm){if(c===null)c=A(2);else if(c.jn.length?0:1)return a;H0(a,a.jm+c.jn.length|0);d=a.jm-1|0;while(d>=b){a.jo.data[d+c.jn.length|0]=a.jo.data[d];d=d+(-1)|0;}a.jm=a.jm+c.jn.length|0;e=0;a:{while(e<c.jn.length){f=a.jo;d=b+1|0;if(e<0)break a;if(e>=c.jn.length)break a;f.data[b]=c.jn.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);},
H1=(a,b)=>{return L(a,a.jm,b,10);},
HW=(a,b,c)=>{return L(a,a.jm,b,c);},
L=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(EC(c,d)<0){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);f=a.jo.data;g=b+1|0;f[b]=45;b=g;}a.jo.data[b]=MW(c,d);}else{h=1;i=1;j=DL((-1),d);b:{while(true){k=Da(h,d);if(EC(k,c)>0){k=h;break b;}i=i+1|0;if(EC(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)e=b;else{f=a.jo.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.jo.data;b=e+1|0;f[e]=MW(DL(c,k),d);c=AS$(c,k);k=DL(k,d);e=b;}}}return a;},
Hj=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Cf(c,0.0);if(!d){if(1.0/c===Infinity){Bd(a,b,b+3|0);e=a.jo.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bd(a,b,b+4|0);e=a.jo.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.jo.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.jo.data;d=b+1|0;e[b]=45;}e=a.jo.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Qa;AIh(c,f);d=f.sm;g=f.r_;h=f.t2;i=1;j=1;if(h)j=2;k=9;l=ANC(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bd(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.jo.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.jo.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.jo.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.jo.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Pg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Cf(c,0.0);if(!d){if(1.0/c===Infinity){Bd(a,b,b+3|0);e=a.jo.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bd(a,b,b+4|0);e=a.jo.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.jo.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.jo.data;d=b+1|0;e[b]=45;}e=a.jo.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Ps;AE1(c,f);g=f.sK;h=f.r3;i=f.tT;j=1;k=1;if(i)k=2;l=18;m=AKz(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bd(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.jo.data;i=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.jo.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(ABy(p,B6))d=0;else{d=Be(L7(g,p));g=V7(g,p);}e=a.jo.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=L7(p,R(10));q=q+1|0;}if(h){e=a.jo.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
ANC=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AKz=b=>{let c,d,e,f,g;c=R(1);d=0;e=16;f=Ng.data;g=f.length-1|0;while(g>=0){if(DJ(V7(b,Y(c,f[g])),B6)){d=d|e;c=Y(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
FV=(a,b)=>{return a.c4(a.jm,b);},
DW=(a,b,c)=>{F(a,b,c===null?A(2):c.S());return a;},
H0=(a,b)=>{let c,d,e,f,g,h;c=a.jo.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jo=g;},
Lx=a=>{let b,c,d,e,f;b=new H;c=a.jo;d=c.data;e=a.jm;f=d.length;if(e>=0&&e<=(f-0|0)){b.jn=K(c.data,0,e);return b;}b=new I;b.jp=1;b.jq=1;B(b);},
JG=(a,b,c,d,e)=>{let f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jo.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
T_=(a,b)=>{let c,d,e,f;if(b>=0){c=a.jm;if(b<c){c=c-1|0;a.jm=c;while(b<c){d=a.jo.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new T;f.jp=1;f.jq=1;B(f);},
APd=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=Cf(b,c);if(d<=0){e=a.jm;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.jm=e-(c-b|0)|0;g=0;while(g<f){h=a.jo.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new T;i.jp=1;i.jq=1;B(i);},
Bd=(a,b,c)=>{let d,e,f,g;d=a.jm;e=d-b|0;a.cY((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.jo.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.jm=a.jm+(c-b|0)|0;};
let Ij=E(0);
let J=E(Z);
let AP2=a=>{a.jo=G(16);},
Ev=()=>{let a=new J();AP2(a);return a;},
Ls=(a,b)=>{F(a,a.jm,b===null?A(2):b.S());return a;},
HS=(a,b)=>{F(a,a.jm,b);return a;},
Hh=(a,b)=>{L(a,a.jm,b,10);return a;},
VT=(a,b)=>{let c;c=a.jm;Bd(a,c,c+1|0);a.jo.data[c]=b;return a;},
AQu=(a,b,c)=>{F(a,b,c===null?A(2):c.S());return a;},
APc=(a,b,c)=>{APd(a,b,c);return a;},
CG=(a,b,c)=>{F(a,b,c);return a;},
AF3=(a,b,c,d,e)=>{let f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jo.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ABc=(a,b,c,d)=>{let e,f,g,h,i;e=a.jm;Bd(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jo.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
Yf=a=>{return a.jm;},
EG=a=>{let b,c,d,e,f;b=new H;c=a.jo;d=c.data;e=a.jm;f=d.length;if(e>=0&&e<=(f-0|0)){b.jn=K(c.data,0,e);return b;}b=new I;b.jp=1;b.jq=1;B(b);},
AGo=(a,b)=>{H0(a,b);},
AHb=(a,b,c)=>{Bd(a,b,b+1|0);a.jo.data[b]=c;return a;},
B_=(a,b,c)=>{F(a,b,c);return a;};
function Qj(){let a=this;C.call(a);a.ts=0;a.v8=0;a.s2=0;a.t8=null;a.v1=0;a.yi=null;a.tL=0;a.wg=null;a.qy=0;a.oH=0;a.sa=0;a.tv=0;a.uD=0;a.ui=0;a.vz=0;a.u2=0;a.u_=0;a.tj=0;a.q_=0;}
let Xs=(a,b)=>{a.ts=0;a.v8=1;a.s2=0;a.v1=1;a.yi=A(61);a.tL=0;a.qy=(-1);a.oH=(-1);a.sa=0;a.tv=0;a.uD=0;a.ui=0;a.vz=0;a.u2=0;a.u_=0;a.tj=0;a.q_=1;a.wg=b;},
AQG=a=>{let b=new Qj();Xs(b,a);return b;};
let O0=E(0);
function K3(){let a=this;C.call(a);a.nZ=null;a.pY=null;a.uB=null;a.u6=null;a.xp=null;a.mN=null;a.qG=null;a.qM=null;a.qu=null;a.nL=null;a.pq=null;a.rT=0;a.tk=0;a.wE=null;a.oq=0;a.qw=null;a.wY=null;a.wH=null;a.qc=null;a.tz=null;a.n3=null;}
let Gx=null;
let Pd=(a,b,c)=>{let d;d=new Bt;d.kk=1;d.jE=S(C,4);a.qu=d;a.pq=MI;a.rT=(-1);a.tk=1;a.oq=1;a.wY=Ez(51,0.800000011920929);d=new Bt;d.kk=1;d.jE=S(C,16);a.qc=d;d=new Bt;d.kk=1;d.jE=S(C,16);a.tz=d;EL();a.nL=FH;a.mN=c;a.qG=b;AMk(a);},
ARG=(a,b)=>{let c=new K3();Pd(c,a,b);return c;},
AMk=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Gx=AIm();FO();Dg(EV,A(82),A(61));b=W(Gx.userAgent);FO();Dg(EV,A(83),b);if(Gx.windows?1:0){FO();Dg(EV,A(84),A(85));}else if(Gx.macOS?1:0){FO();Dg(EV,A(84),A(86));}else if(!(Gx.linux?1:0)){FO();Dg(EV,A(84),A(87));}else{FO();Dg(EV,A(84),A(10));}c=new N7;d=a.mN.tL;c.vC=0;c.wd=0;c.lX=1;c.lX=d;F1=c;EL();b=W(FH.mx.location.href);a.n3=b;if(CY(b,A(88))){c=L_(a.n3,A(89),A(61));a.n3=c;a.n3=L_(c,A(90),A(61));}e=Hl(a.n3,63,0);if(e>=0)a.n3=Cv(a.n3,0,e);c=a.mN;F0=c.v8;b=AKY(c);a.nZ=b;c
=AIl(a.n3,b.kr,a);a.qw=c;d=a.mN.v1;f=F1;g=c.qR;h=new J;h.jo=G(16);i=h.jm;if(g===null)g=A(2);CG(h,i,g);CG(h,h.jm,A(91));g=new H;j=h.jo;k=j.data;l=h.jm;m=k.length;if(l>=0&&l<=(m-0|0)){g.jn=K(j.data,0,l);h=new J;h.jo=G(16);F(h,h.jm,g);F(h,h.jm,A(92));g=new H;j=h.jo;k=j.data;l=h.jm;m=k.length;if(l>=0&&l<=(m-0|0)){g.jn=K(j.data,0,l);h=new PP;h.pw=c;h.t7=A(92);h.t6=d;if(f.lX){if(BT===null){c=new CU;b=new Cu;BA(b);b.kW=BE(32);EB(c);c.ll=b;b=new J;EF(b);c.kZ=b;c.kY=G(32);c.k2=0;c.k3=Cm;BT=c;}c=new J;c.jo=G(16);CG(c,
c.jm,A(93));CG(c,c.jm,g);b=new H;j=c.jo;k=j.data;i=c.jm;l=k.length;if(i>=0&&i<=(l-0|0)){b.jn=K(j.data,0,i);BU(Bs(b));BU("\n");}else{c=new I;c.jp=1;c.jq=1;B(c);}}a:{f.km=f.km+1|0;c=new GA;c.mR=f;c.n8=1;c.mO=g;c.m0=h;b=null;g=null;c.l9=new C;c.l8=1;c.mK=g;c.mZ=b;e=CF;CF=e+1|0;c.mY=R(e);b=new D4;b.mL=c;En(b);a.pY=Yy(a.nZ.kr);c=new S8;c.pj=a.qw;a.uB=c;c=new Su;b=new Is;d=Je(16);b.n_=0;k=S(Fj,d);j=k.data;b.ma=k;b.rF=0.75;b.o0=j.length*0.75|0;c.xj=b;a.u6=c;a.wE=new Qg;c=new Sq;c.xl=0;c.q0=1;b=new Lm;b.qL=c;c.wO=b;c.sJ
=A(61);a.wH=c;if(a.mN.s2){g=a.qw;b=new Nw;b.ws=a;n=F1;g=g.qR;h=new J;h.jo=G(16);B_(h,h.jm,g===null?A(2):Cd(g));B_(h,h.jm,Cd(A(91)));f=new H;j=h.jo;k=j.data;i=h.jm;l=k.length;if(i>=0&&i<=(l-0|0)){f.jn=K(j.data,0,i);g=new J;g.jo=G(16);CG(g,g.jm,f);CG(g,g.jm,A(94));c=new H;j=g.jo;k=j.data;i=g.jm;l=k.length;if(i>=0&&i<=(l-0|0)){c.jn=K(j.data,0,i);M1(n,1,c,b);break a;}c=new I;c.jp=1;c.jq=1;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}}CZ=a;c=a.nZ;B3=c;b=c.o7;BL=b;Bi=b;Ef=c.u7;Pp=a.pY;FY=a.uB;ALa=a.u6;c=new PG;c.vx=null;c.vx
=AOL();a.xp=c;AGQ=c;f=a.nL.mx.document;b=new JB;b.rI=a;f.addEventListener("visibilitychange",BY(b,"handleEvent"));c=a.nL;c.qA=a;requestAnimationFrame(BY(c,"onAnimationFrame"));c=a.mN;if(!c.qy&&!c.oH?1:0){c=a.nL;g=new JC;g.pK=a;g=Df(g,"handleEvent");c.mx.addEventListener("resize",BY(g,"handleEvent"));}return;}c=new I;c.jp=1;c.jq=1;B(c);}c=new I;c.jp=1;c.jq=1;B(c);},
AEO=a=>{let b,c,d,e,f,g,h,$$je;b=a.pq;a:{try{b:{LJ();switch(SK.data[ANj(b)]){case 1:c=AE4(VL());if(!c){a.pq=ID;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.qw.sA;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=Ev();VT(Hh(g,f),37);h=EG(g);d.setProperty("width",Bs(h));}}break b;case 2:break;default:break b;}if(a.qG!==null){b=a.qM;if(b!==null){AHX(b);AJP(a.qM);}ABM(a.pY,null);QG(a.pY);Pz(a.qc);a.qM
=a.qG;a.qG=null;a.pq=JD;a.nZ.rs=B6;}W_(a,a.qM);}}catch($$e){$$je=Br($$e);if($$je instanceof Dy){h=$$je;break a;}else{throw $$e;}}b=a.nL;b.qA=a;requestAnimationFrame(BY(b,"onAnimationFrame"));return;}if(C9===null){b=new Fh;d=new Cu;d.kW=BE(32);BA(b);b.ll=d;d=new J;DI(d,16);b.kZ=d;b.kY=G(32);b.k2=0;b.k3=Cm;C9=b;}Jn(h,C9);B(h);},
W_=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;AAx(a.nZ);c=B3.kr.width;d=B3.kr.height;e=0;if(a.pq===JD){a.pq=ID;f=new Hw;Hu();Ke(f,1000,null);b.wJ=f;f=ZC(b);b.wF=f;b.td=f;g=B3.kr.width;h=B3.kr.height;f=f.mv.n1;f.px=0;f.py=0;f.p7=g;f.qi=h;i=g;j=f.qz;i=i*j;j=h*j;f.rp=i;f.rA=j;Mu(f,0);e=1;}if(!(c==a.rT&&d==a.tk&&!e)){a.rT=c;a.tk=d;BL.ds(0,0,c,d);f=b.td;if(f!==null){f=f.mv.n1;f.px=0;f.py=0;f.p7=c;f.qi=d;i=c;j=f.qz;i=i*j;j=d*j;f.rp=i;f.rA=j;Mu(f,0);}}f=a.tz;k=a.qc;l=k.jE;m=k.js;n=f.jE;o=n.data;d=f.js;c=d+m
|0;if(c<=o.length)k=n;else{p=8;if(p<=c)p=c;d=d*1.75|0;if(p>d)d=p;q=n.constructor;if(q===null)k=null;else{k=q.classObject;if(k===null){k=new BI;k.jG=q;r=k;q.classObject=r;}}s=k.jG.$meta.item;if(s===null)q=null;else{q=s.classObject;if(q===null){q=new BI;q.jG=s;k=q;s.classObject=k;}}if(q===null){b=new C5;X(b);B(b);}if(q===V(Bq)){b=new Bj;X(b);B(b);}if(d<0){b=new DH;X(b);B(b);}k=DF(q.jG,d);q=k.data;h=f.js;g=q.length;if(h<g)g=h;F3(n,0,k,0,g);f.jE=k;}F3(l,0,k,f.js,m);f.js=c;f=a.qc;l=f.jE;e=0;m=f.js;k=null;if(e>m)
{b=new Bj;b.jp=1;b.jq=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.js=0;m=0;while(true){q=a.tz;e=q.js;d=Cf(m,e);if(d>=0){l=q.jE;m=0;f=null;if(m>e){b=new Bj;b.jp=1;b.jq=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}q.js=0;f=a.nZ;t=CT(f.rs,R(1));f.rs=t;if(AA9(t,R(60))){b=b.td;if(b!==null){BL.dt(0.0,0.0,0.0,1.0);BL.du(16384);f=b.mv;q=f.n1.pA;UZ(q,1);if(f.lx.mp){k=f.tG;q=q.pf;if(k.lA)EN(k);Ck(k.nU,q.kd);if(k.lA)FM(k);Qf(k);q=f.lx;if(q.mw){r=J1(q);Ck(q.or,k.mm.kd);if(k.lA)EN(k);Ck(k.mm,r.kd);if(k.lA)FM(k);}Pa(q,
k,1.0);if(q.mw){q=q.or;if(k.lA)EN(k);Ck(k.mm,q.kd);if(k.lA)FM(k);}Tz(k);if(BG)AK3(f);}ALW(b.mv,S9(B3.sH,0.03333333507180214));}}QG(a.pY);return;}if(d>=0){f=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,m,10);F(b,b.jm,A(19));e=q.js;L(b,b.jm,e,10);k=new H;l=b.jo;n=l.data;m=b.jm;d=n.length;if(m>=0&&m<=(d-0|0)){k.jn=K(l.data,0,m);f.jp=1;f.jq=1;f.jr=k;B(f);}b=new I;X(b);B(b);}q=q.jE.data[m];r=q.sG.qB;u=r.jE.constructor;if(u===null)s=null;else{s=u.classObject;if(s===null){s=new BI;s.jG=u;f=s;u.classObject=f;}}u
=s.jG.$meta.item;if(u===null)k=null;else{k=u.classObject;if(k===null){k=new BI;k.jG=u;f=k;u.classObject=f;}}e=r.js;if(k===null){b=new C5;X(b);B(b);}if(k===V(Bq)){b=new Bj;X(b);B(b);}if(e<0)break;f=DF(k.jG,e);F3(r.jE,0,f,0,r.js);l=f;q.sG.rg.tO.t8.dx(l);m=m+1|0;}b=new DH;X(b);B(b);};
let Uo=E(0);
function LI(){C.call(this);this.td=null;}
let AJP=a=>{return;},
AHX=a=>{return;};
function O2(){let a=this;LI.call(a);a.wJ=null;a.wF=null;}
let AL9=E();
let Bc=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(95);d=1<<c;e=d-1|0;f=(((32-N3(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=Da(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=MW((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new H;l.jn=K(g.data,0,h.length);return l;};
let HA=E(Bx);
let MI=null,JD=null,ID=null,Tx=null;
let AGU=()=>{let b,c,d;b=new HA;b.jB=A(96);b.jw=0;MI=b;c=new HA;c.jB=A(97);c.jw=1;JD=c;d=new HA;d.jB=A(98);d.jw=2;ID=d;Tx=P(HA,[b,c,d]);};
let NB=E(0);
let Cn=E(0);
let QC=E(0);
function IL(){let a=this;C.call(a);a.mx=null;a.qA=null;}
let FH=null;
let EL=()=>{EL=BH(IL);ADC();};
let ADC=()=>{let b;b=new IL;EL();b.mx=window;FH=b;},
AKb=(a,b)=>{let c;b;c=a.qA;a.qA=null;AEO(c);};
let AJT=E();
let P$=E();
let BW=null;
let Dw=()=>{Dw=BH(P$);AIV();};
let AIV=()=>{BW=Ez(51,0.800000011920929);};
function MM(){Eb.call(this);this.tM=0.0;}
let P8=null;
let ATE=()=>{P8=V(Ej);};
function I3(){let a=this;C.call(a);a.tw=null;a.tp=0;}
let AEz=E();
let TS=b=>{return Math.sin(b);},
Xm=b=>{return Math.cos(b);},
DS=b=>{return Math.sqrt(b);},
AAZ=b=>{return Math.ceil(b);},
F4=(b,c)=>{return Math.pow(b,c);},
S9=(b,c)=>{return Math.min(b,c);},
JZ=b=>{return Math.abs(b);},
Dh=b=>{return Math.sign(b);};
function Dt(){let a=this;C.call(a);a.xe=null;a.xk=null;}
let PX=a=>{let b;b=new Bt;b.kk=1;b.jE=S(C,16);a.xe=b;b=new I3;b.tp=1;b.tw=CB(16);a.xk=b;},
ATb=()=>{let a=new Dt();PX(a);return a;};
function F_(){let a=this;C.call(a);a.lP=null;a.kP=0;a.oL=0;}
let K_=(a,b)=>{let c,d,e,f,g;c=a.lP;d=c.data;e=a.kP;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=U(f);g=d.data.length;if(e<g)g=e;DU(c,0,d,0,g);a.lP=d;}c=d.data;f=a.kP;a.kP=f+1|0;c[f]=b;},
AQw=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.kP;if(b>d){e=new I;f=new J;f.jo=G(16);F(f,f.jm,A(99));L(f,f.jm,b,10);F(f,f.jm,A(100));b=a.kP;L(f,f.jm,b,10);g=new H;h=f.jo;i=h.data;c=f.jm;d=i.length;if(c>=0&&c<=(d-0|0)){g.jn=K(h.data,0,c);e.jp=1;e.jq=1;e.jr=g;B(e);}e=new I;e.jp=1;e.jq=1;B(e);}i=a.lP;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=U(k);l=j.data.length;if(d<l)l=d;DU(i,0,j,0,l);a.lP=j;}if(!a.oL){h=j.data;h[a.kP]=h[b];}else DU(j,b,j,b+1|0,a.kP-b|0);h=j.data;a.kP=a.kP+1|0;h[b]=c;};
let Lp=E(0);
let Kd=E();
let EX=E(0);
function Is(){let a=this;Kd.call(a);a.n_=0;a.ma=null;a.rB=0;a.rF=0.0;a.o0=0;}
let Je=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
G8=(a,b)=>{let c,d,e,f;if(b===null){c=a.ma.data[0];while(c!==null&&c.l$!==null){c=c.mk;}}else{c=b;if(!c.$id$){d=D_();c.$id$=d;}e=b.$id$;f=a.ma.data;c=f[e&(f.length-1|0)];while(c!==null){if(c.ok==e){d=c.l$;if(b!==d&&!(b!==d?0:1)?0:1)break;}c=c.mk;}}return c;},
Fq=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.ma.data;e=d[0];while(e!==null&&e.l$!==null){e=e.mk;}if(e===null){a.rB=a.rB+1|0;f=null;e=new Fj;b=null;e.l$=f;e.l4=b;e.ok=0;e.mk=d[0];d[0]=e;g=a.n_+1|0;a.n_=g;if(g>a.o0)P1(a,d.length);}}else{f=b;if(!f.$id$){e=D_();f.$id$=e;}h=b.$id$;d=a.ma.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.ok==h){f=e.l$;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.mk;}if(e===null){a.rB=a.rB+1|0;e=new Fj;f=null;e.l$=b;e.l4=f;e.ok=h;e.mk=d[j];d[j]=e;g=a.n_+1|0;a.n_=g;if(g>a.o0)P1(a,
i);}}f=e.l4;e.l4=c;return f;},
P1=(a,b)=>{let c,d,e,f,g,h,i,j;c=Je(!b?1:b<<1);d=S(Fj,c);e=d.data;f=0;c=c-1|0;while(true){g=a.ma.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.ok&c;j=h.mk;h.mk=e[i];e[i]=h;h=j;}f=f+1|0;}a.ma=d;a.o0=e.length*a.rF|0;};
let HJ=E(0);
let MU=E();
let LX=E();
let Nr=null,KB=null,BO=null,BP=null,LU=null,SE=null,BC=null,BB=null,I1=null,I2=null;
let Y0=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new I;e.jp=1;e.jq=1;B(e);},
Cr=(b,c)=>{let d,e;d=b.u1.data;if(c<d.length)return c+d[c]|0;d=b.uQ;e=ANk(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
ANk=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=Cf(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
OU=b=>{let c,d,e,f,g,h;if(KB===null){if(I1===null)I1=AEj();KB=AP8((I1.value!==null?W(I1.value):null));}c=KB.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=Cf(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
MW=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
EO=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bj;c.jp=1;c.jq=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AEv([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
CI=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(LU===null){if(I2===null)I2=AQ6();LU=ARs((I2.value!==null?W(I2.value):null));}e=LU.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.sL)c=f+1|0;else{d=g.sk;if(b>=d)return g.sn.data[b-d|0];d=f-1|0;}}return 0;},
GZ=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CI(b)!=16?0:1;},
ARV=()=>{Nr=V(J3);SE=S(LX,128);},
Dz=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
DC=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
AEj=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
AQ6=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA,=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F$"
+"\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F"
+"$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A"
+"\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( "
+"F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B"
+"( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A-"
+"^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};};
let AA0=E();
let AIm=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AKo=E();
let BT=null,C9=null,EV=null;
let F3=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IR(b)&&(e+f|0)<=IR(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BI;h.jG=g;i=h;g.classObject=i;}}j=D1(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BI;h.jG=g;i=h;g.classObject=i;}}i=D1(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.jG.$meta.primitive?1:0)&&!(i.jG.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.jG;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&LK(g.constructor,p)?1:0)){Iu(b,c,d,e,l);b=new I_;b.jp=1;b.jq=1;B(b);}l=l+1|0;m=o;}Iu(b,c,d,e,f);return;}if(!(j.jG.$meta.primitive?1:0))break a;if(i.jG.$meta.primitive?1:0)break b;else break a;}b=new I_;b.jp=1;b.jq=1;B(b);}}Iu(b,c,d,e,f);return;}b=new I_;b.jp=1;b.jq=1;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}d=new C5;d.jp=1;d.jq=1;d.jr=A(101);B(d);},
DU=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IR(b)&&(e+f|0)<=IR(d)){Iu(b,c,d,e,f);return;}b=new I;b.jp=1;b.jq=1;B(b);},
Iu=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
D5=()=>{return DK((new Date()).getTime());},
FO=()=>{let b,c;if(EV===null){b=new L4;J$(b,11);Dg(b,A(102),A(103));Dg(b,A(84),A(104));Dg(b,A(105),A(106));Dg(b,A(107),A(108));Dg(b,A(109),A(110));Dg(b,A(111),A(112));Dg(b,A(113),A(103));Dg(b,A(114),A(106));c=new L4;J$(c,11);c.xI=b;EV=c;}};
let M9=E(0);
function N7(){let a=this;C.call(a);a.km=0;a.vC=0;a.wd=0;a.lX=0;}
let AE4=a=>{return a.km;},
ZP=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{Ml();switch(Tg.data[d.jw]){case 1:if(a.lX){if(BT===null){d=new CU;e=new Cu;e.kW=BE(32);BA(d);d.ll=e;e=new J;DI(e,16);d.kZ=e;d.kY=G(32);d.k2=0;d.k3=Cm;BT=d;}d=new J;d.jo=G(16);F(d,d.jm,A(93));F(d,d.jm,c===null?A(2):c);e=new H;g=d.jo;h=g.data;i=d.jm;j=h.length;if(i>=0&&i<=(j-0|0)){e.jn=K(g.data,0,i);BU(Bs(e));BU("\n");}else{c=new I;X(c);B(c);}}a.km=a.km+1|0;d=new GA;d.mR=a;d.n8=b;d.mO=c;d.m0=f;c=null;e=null;d.l9=new C;d.l8=1;d.mK=e;d.mZ=c;k=CF;CF=k+1|0;d.mY=R(k);c=new D4;c.mL
=d;En(c);break a;case 2:d=null;l=new ND;l.qv=a;l.pE=f;l.us=d;l.v7=e;if(a.lX){if(BT===null){d=new CU;e=new Cu;EB(e);e.kW=BE(32);Fz(d,e);d.kZ=Ev();d.kY=G(32);d.k2=0;d.k3=Cm;BT=d;}d=new J;d.jo=G(16);B_(d,d.jm,Cd(A(93)));B_(d,d.jm,c===null?A(2):Cd(c));e=new H;g=d.jo;h=g.data;i=d.jm;j=h.length;if(i>=0&&i<=(j-0|0)){e.jn=K(g.data,0,i);BU(Bs(e));BU("\n");}else{c=new I;NJ(c);B(c);}}a.km=a.km+1|0;d=new Fy;d.my=a;d.nn=b;d.mu=c;d.mQ=l;c=null;e=null;d.l9=new C;d.l8=1;d.mK=e;d.mZ=c;k=CF;CF=k+1|0;d.mY=R(k);c=new D4;c.mL=d;En(c);break a;case 3:if
(a.lX){if(BT===null){d=new CU;e=new Cu;e.kW=BE(32);BA(d);d.ll=e;e=new J;DI(e,16);d.kZ=e;d.kY=G(32);d.k2=0;d.k3=Cm;BT=d;}d=new J;d.jo=G(16);F(d,d.jm,A(93));F(d,d.jm,c===null?A(2):c);e=new H;g=d.jo;h=g.data;i=d.jm;j=h.length;if(i>=0&&i<=(j-0|0)){e.jn=K(g.data,0,i);BU(Bs(e));BU("\n");}else{c=new I;X(c);B(c);}}a.km=a.km+1|0;d=new Fy;d.my=a;d.nn=b;d.mu=c;d.mQ=f;c=null;e=null;d.l9=new C;d.l8=1;d.mK=e;d.mZ=c;k=CF;CF=k+1|0;d.mY=R(k);c=new D4;c.mL=d;En(c);break a;case 4:e=new NC;e.xT=a;e.q6=f;if(a.lX){if(BT===null){d
=new CU;f=new Cu;BA(f);f.kW=BE(32);EB(d);d.ll=f;f=new J;EF(f);d.kZ=f;d.kY=G(32);d.k2=0;d.k3=Cm;BT=d;}d=new J;d.jo=G(16);CG(d,d.jm,A(93));CG(d,d.jm,c===null?A(2):c);f=new H;g=d.jo;h=g.data;i=d.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);BU(Bs(f));BU("\n");}else{c=new I;IS(c);B(c);}}a.km=a.km+1|0;d=new Fy;d.my=a;d.nn=b;d.mu=c;d.mQ=e;c=null;e=null;d.l9=new C;d.l8=1;d.mK=e;d.mZ=c;k=CF;CF=k+1|0;d.mY=R(k);c=new D4;c.mL=d;En(c);break a;case 5:break;default:c=new Q;e=new J;e.jo=G(16);F(e,e.jm,A(115));F(e,
e.jm,d.jB);d=new H;g=e.jo;h=g.data;k=e.jm;i=h.length;if(k>=0&&k<=(i-0|0)){d.jn=K(g.data,0,k);c.jp=1;c.jq=1;c.jr=d;B(c);}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);}c=null;Gz(f.p6,f.qf,f.pV,c);c=f.mn.me;c.pb=1;c.mB=0;}},
M1=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.lX){if(BT===null){e=new CU;f=new Cu;f.kW=BE(32);e.ll=f;f=new J;BA(f);f.jo=G(16);e.kZ=f;e.kY=G(32);e.k2=0;e.k3=Cm;BT=e;}e=new J;e.jo=G(16);F(e,e.jm,A(116));F(e,e.jm,c===null?A(2):c);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);BU(Bs(f));BU("\n");}else{c=new I;c.jp=1;c.jq=1;B(c);}}a.km=a.km+1|0;f=new XMLHttpRequest();e=new JE;e.pi=a;e.og=f;e.sx=b;e.q1=c;e.s$=d;e=BY(e,"handleEvent");f.onreadystatechange=e;e=new GB;e.th=a;e.qD=d;d=BY(e,"handleEvent");f.onprogress
=d;f.open("GET",Bs(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let AAm=E();
let F1=null;
let VL=()=>{return F1;};
let ADe=E();
let C1=0,F0=0;
let ASQ=()=>{C1=1;};
let Sl=E(0);
function JY(){let a=this;C.call(a);a.oI=null;a.kr=null;a.vM=null;a.o7=null;a.u7=null;a.wP=null;a.wh=0.0;a.rL=B6;a.rs=B6;a.sH=0.0;a.rl=0.0;a.tr=0;}
let MF=0,Fn=null;
let Ek=()=>{Ek=BH(JY);X7();};
let AGX=(a,b)=>{let c,d,e,f,g,h,i,j,k;Ek();a.wh=0.0;a.rL=D5();a.rs=R(-1);a.sH=0.0;a.rl=0.0;a.vM=b;EL();c=window.document;d=b.wg;a.kr=c.getElementById(Bs(d));e=ABm();d=!!b.vz;e.alpha=d;d=!!b.ui;e.antialias=d;d=!!b.uD;e.stencil=d;d=!!b.u2;e.premultipliedAlpha=d;d=!!b.u_;e.preserveDrawingBuffer=d;f=a.kr;if(b.ts)a.oI=f.getContext("webgl2",e);a:{if(b.ts){d=a.oI;if(d!==null){if(!b.tj)f=AO9(d);else{f=new N8;Nc(f,d);}a.u7=f;a.o7=f;break a;}}f=f.getContext("webgl",e);a.oI=f;if(!b.tj)d=AN6(f);else{d=new Ul;LF(d,f);}a.o7
=d;}d=a.o7.dO(7938);c=a.o7.dO(7936);g=a.o7.dO(7937);a.wP=AKk(GW,d,c,g);h=b.qy;if(!(h<0&&b.oH<0)){if(h&&b.oH?1:0)Jy(a,h,b.oH);else{i=FH;h=i.mx.document.documentElement.clientWidth-b.sa|0;j=i.mx.document.documentElement.clientHeight-b.tv|0;k=!b.q_?1.0:devicePixelRatio||1;Jy(a,k*h|0,k*j|0);}}b=a.kr;d=new LR;d.wx=a;WG(b,BY(d,"fullscreenChanged"));},
AKY=a=>{let b=new JY();AGX(b,a);return b;},
AAx=a=>{let b,c,d;b=D5();c=AS1(AEI(b,a.rL))/1000.0;a.sH=c;a.rL=b;c=a.rl+c;a.rl=c;d=a.tr+1|0;a.tr=d;if(c>1.0){a.wh=d;a.rl=0.0;a.tr=0;}},
Jy=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.kr;e=b;d.width=e;d=a.kr;e=c;d.height=e;if(a.vM.q_){f=devicePixelRatio||1;e=a.kr.style;g=b/f;H5();h=new J;h.jo=G(16);Pg(h,h.jm,g);F(h,h.jm,A(117));i=new H;j=h.jo;k=j.data;l=h.jm;b=k.length;if(l>=0&&l<=(b-0|0)){i.jn=K(j.data,0,l);e.setProperty("width",Bs(i));f=c/f;i=new J;i.jo=G(16);Pg(i,i.jm,f);F(i,i.jm,A(117));h=new H;j=i.jo;k=j.data;c=i.jm;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.jn=K(j.data,0,c);e.setProperty("height",Bs(h));}else{d=new I;d.jp=1;d.jq=1;B(d);}}return;}d
=new I;d.jp=1;d.jq=1;B(d);},
X7=()=>{MF=0;Fn=C8(51,0.800000011920929);},
WG=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function Nv(){let a=this;C.call(a);a.sX=null;a.q4=null;a.sQ=null;a.s4=null;a.s7=null;a.ut=null;a.qJ=null;a.sA=0;a.qR=null;}
let AFW=(a,b,c,d)=>{let e;a.sX=Ez(51,0.800000011920929);a.q4=Ez(51,0.800000011920929);a.sQ=Ez(51,0.800000011920929);a.s4=Ez(51,0.800000011920929);a.s7=Ez(51,0.800000011920929);a.ut=Ez(51,0.800000011920929);e=new Bt;e.kk=1;e.jE=S(C,16);a.qJ=e;a.sA=(-1);a.qR=b;AMG(a,c,d);},
AIl=(a,b,c)=>{let d=new Nv();AFW(d,a,b,c);return d;},
AMG=(a,b,c)=>{let d,e,f;d=c.mN;if(d.t8!==null){e=b.ownerDocument;f=new KG;f.xA=a;e.addEventListener("dragenter",BY(f,"handleEvent"),!!0);f=new KH;f.x3=a;e.addEventListener("dragover",BY(f,"handleEvent"),!!0);f=new KF;f.t_=a;f.tY=c;f.tO=d;e.addEventListener("drop",BY(f,"handleEvent"));}},
AEs=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AEG(a,b.ss)){b.qV=b.vR;b.pb=1;b.oR=0;b.mB=0;return 0;}if(b.mB)return 0;b.oR=0;b.pb=0;b.mB=1;c=b.ss;d=b.uf;e=b.t9;f=new PQ;f.yf=a;f.me=b;b=F1;g=a.qR;h=new J;h.jo=G(16);i=h.jm;if(g===null)g=A(2);CG(h,i,g);CG(h,h.jm,A(91));g=new H;j=h.jo;k=j.data;l=h.jm;m=k.length;if(l>=0&&l<=(m-0|0)){g.jn=K(j.data,0,l);h=new J;h.jo=G(16);F(h,h.jm,g);F(h,h.jm,c===null?A(2):c);g=new H;k=h.jo;j=k.data;m=h.jm;i=j.length;if(m>=0&&m<=(i-0|0)){g.jn=K(k.data,0,m);h=new PO;h.p6=a;h.mn=f;h.qf=d;h.pV
=c;ZP(b,1,g,d,e,h);return 1;}b=new I;X(b);B(b);}b=new I;IS(b);B(b);},
Gz=(a,b,c,d)=>{a:{MD();switch(NX.data[b.jw]){case 1:break;case 2:C6(a.q4,c,d);break a;case 3:C6(a.s7,c,d);break a;case 4:C6(a.sQ,c,d);break a;case 5:C6(a.sX,c,null);break a;default:break a;}C6(a.s4,c,d);}},
AEG=(a,b)=>{let c;c=B2(a.s4,b)<0?0:1;return !c&&!(B2(a.q4,b)<0?0:1)&&!(B2(a.s7,b)<0?0:1)&&!(B2(a.sQ,b)<0?0:1)&&!(B2(a.sX,b)<0?0:1)?0:1;};
let Dq=E();
let AHK=(a,b)=>{return;};
let R7=E(0);
let D$=E(0);
function Lr(){let a=this;C.call(a);a.kC=null;a.pC=0;a.oY=null;a.m_=null;a.lc=null;a.lb=null;a.mI=null;a.mJ=null;a.rf=null;a.pL=0;a.rW=null;a.rd=0;a.sC=null;a.tm=null;a.sB=null;a.lT=null;a.nV=B6;a.pe=0;}
let AQv=b=>{let c,d,e,f;c=Gx;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(JZ(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AKs=(a,b)=>{a.pC=0;a.oY=C8(20,0.800000011920929);a.m_=Jq(20);a.lc=U(20);a.lb=U(20);a.mI=U(20);a.mJ=U(20);a.rf=N1(51,0.800000011920929);a.pL=0;a.rW=Jq(256);a.rd=0;a.sC=Jq(256);a.tm=Jq(5);a.sB=N1(51,0.800000011920929);a.pe=1;a.kC=b;AHU(a);},
Yy=a=>{let b=new Lr();AKs(b,a);return b;},
AHU=a=>{let b;b=a.kC.ownerDocument;b.addEventListener("mousedown",BY(a,"handleEvent"),!!0);b.addEventListener("mouseup",BY(a,"handleEvent"),!!0);b.addEventListener("mousemove",BY(a,"handleEvent"),!!0);b.addEventListener("wheel",BY(a,"handleEvent"),!!0);b.addEventListener("keydown",BY(a,"handleEvent"),!!0);b.addEventListener("keyup",BY(a,"handleEvent"),!!0);b.addEventListener("keypress",BY(a,"handleEvent"),!!0);a.kC.addEventListener("touchstart",BY(a,"handleEvent"),!!1);a.kC.addEventListener("touchmove",BY(a,
"handleEvent"),!!1);a.kC.addEventListener("touchcancel",BY(a,"handleEvent"),!!1);a.kC.addEventListener("touchend",BY(a,"handleEvent"),!!1);},
AIo=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=W(b.type);if(c!==A(118)){if(A(118) instanceof H){d=A(118);e=c.jn!==d.jn?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(119))e=1;else if(A(119) instanceof H){d=A(119);e=c.jn!==d.jn?0:1;}else e=0;if(!e){if(c===A(120))e=1;else if(!(A(120) instanceof H))e=0;else{d=A(120);e=c.jn!==d.jn?0:1;}if(e){if(!(Ms(a.kC)?1:0)){f=Hd(a,b,a.kC);g=Ht(a,b,a.kC);h=a.lc.data;i=f-h[0]|0;j=a.lb.data;e=g-j[0]|0;a.mI.data[0]=i;a.mJ.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.mI.data[0]=k;a.mJ.data[0]=f;h=a.lc.data;h[0]=h[0]+b.movementX|0;h=a.lb.data;h[0]=h[0]+b.movementY|0;}a.nV=DK(performance.now()*1000000.0);d=a.lT;if(d!==null){if(!a.m_.data[0])d.d0(a.lc.data[0],a.lb.data[0]);else d.d1(a.lc.data[0],a.lb.data[0],0);}}else{if(c===A(121))e=1;else if(!(A(121) instanceof H))e=0;else{d=A(121);e=c.jn!==d.jn?0:1;}if(e){if(a.lT!==null){l=AQv(b);a.lT.d3(0.0,l|0);}a.nV=DK(performance.now()*1000000.0);}else{if(c===A(122))e=1;else if(!(A(122) instanceof H))e=0;else{d=A(122);e=c.jn!==
d.jn?0:1;}if(e){a.pC=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.oY;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.oY;if(o>=(-128)&&o<=127){ED();q=DY.data[o+128|0];}else{q=new E9;q.mD=o;}if(!AQC(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){ED();p=DY.data[o+128|0];}else{p=new E9;p.mD=o;}B1(n,k,p);a.m_.data[o]=1;h=a.lc;q=a.kC;l=q.width*1.0/q.clientWidth;k=(d.clientX-(FB(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=W(p.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f
=0;else{q=A(123);f=n.jn!==q.jn?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+Dh(l)*0.5|0;h=a.lb;q=a.kC;l=q.height*1.0/q.clientHeight;k=(d.clientY-(Ga(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=W(d.compatMode);if(q===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=q.jn!==p.jn?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+Dh(l)*0.5|0;a.mI.data[o]=0;a.mJ.data[o]=0;d=a.lT;if(d!==null)d.d8(a.lc.data[o],a.lb.data[o],o,0);e=e+1|0;}a.nV=DK(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.m_.data[0])return;d=a.rf;e=b.button;AOH(d,!e?0:e==2?1:e!=1?0:2);h=a.m_;h.data[0]=a.rf.mE<=0?0:1;if(!(Ms(a.kC)?1:0)){k=Hd(a,b,a.kC)-a.lc.data[0]|0;f=Ht(a,b,a.kC)-a.lb.data[0]|0;a.mI.data[0]=k;a.mJ.data[0]=f;a.lc.data[0]=Hd(a,b,a.kC);a.lb.data[0]=Ht(a,b,a.kC);}else{k=b.movementX|0;f=b.movementY|0;a.mI.data[0]=k;a.mJ.data[0]=f;h=a.lc.data;h[0]=h[0]+b.movementX|0;h=a.lb.data;h[0]=h[0]+b.movementY|0;}a.nV=DK(performance.now()*1000000.0);a.m_.data[0]=0;d=a.lT;if(d!==null)
{e=a.lc.data[0];k=a.lb.data[0];g=b.button;d.d$(e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.kC;if(n!==p?0:1){h=a.m_.data;if(!h[0]){a.pe=1;a.pC=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;AAy(a.rf,r);a.tm.data[r]=1;a.mI.data[0]=0;a.mJ.data[0]=0;if(!(Ms(a.kC)?1:0)){f=Hd(a,b,a.kC);g=Ht(a,b,a.kC);a.lc.data[0]=f;a.lb.data[0]=g;}else{h=a.lc.data;h[0]=h[0]+b.movementX|0;h=a.lb.data;h[0]=h[0]+b.movementY|0;}a.nV=DK(performance.now()*1000000.0);d=a.lT;if(d!==null){e=a.lc.data[0];k=a.lb.data[0];g=
b.button;d.d8(e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=Hd(a,b,p);t=Ht(a,b,a.kC);if(!(s>=0.0&&s<=B3.kr.width&&t>=0.0&&t<=B3.kr.height))a.pe=0;return;}}if(c===A(124))e=1;else if(!(A(124) instanceof H))e=0;else{d=A(124);e=c.jn!==d.jn?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.oY;if(!k)d=!d.jU?null:d.jR;else{h=d.jP;f=Be(Bb(Y(R(k),D(2135587861, 2654435769)),d.jV));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}u=d.mD;d=a.kC;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FB(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=n.jn!==p.jn?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+Dh(l)*0.5|0)-a.lc.data[u]|0;d=a.kC;l=d.height*1.0/d.clientHeight;f=(q.clientY-(Ga(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))g=1;else if(!(A(123) instanceof H))g=0;else
{p=A(123);g=n.jn!==p.jn?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+Dh(l)*0.5|0)-a.lb.data[u]|0;a.mI.data[u]=k;a.mJ.data[u]=f;h=a.lc;d=a.kC;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FB(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=n.jn!==p.jn?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+Dh(l)*0.5|0;h=a.lb;d=a.kC;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Ga(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=q.jn!==p.jn?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+Dh(l)*0.5|0;d=a.lT;if(d!==null)d.d1(a.lc.data[u],a.lb.data[u],u);e=e+1|0;}a.nV=DK(performance.now()*1000000.0);b.preventDefault();}if(c===A(125))e=1;else if(!(A(125) instanceof H))e=0;else{d=A(125);e=c.jn!==d.jn?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.oY;if(!v)p=!d.jU?null
:d.jR;else{h=d.jP;k=Be(Bb(Y(R(v),D(2135587861, 2654435769)),d.jV));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.jT;}}p=k<0?null:d.jQ.data[k];}u=p.mD;Gn(d,v);a.m_.data[u]=0;d=a.kC;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FB(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=n.jn!==p.jn?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+Dh(l)*0.5|0;d=a.kC;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(Ga(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=q.jn!==p.jn?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+Dh(l)*0.5|0;h=a.lc.data;k=o-h[u]|0;j=a.lb.data;f=g-j[u]|0;a.mI.data[u]=k;a.mJ.data[u]=f;h[u]=o;j[u]=g;d=a.lT;if(d!==null)d.d$(h[u],j[u],u,0);e=e+1|0;}a.nV=DK(performance.now()*1000000.0);b.preventDefault();}if(c===A(126))e=1;else if(!(A(126) instanceof H))e=0;else{d=A(126);e=c.jn!==d.jn?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.oY;if(!k)c=!d.jU?null:d.jR;else{h=d.jP;f=Be(Bb(Y(R(k),D(2135587861, 2654435769)),d.jV));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.jT;}}c=f<0?null:d.jQ.data[f];}u=c.mD;Gn(d,k);a.m_.data[u]=0;d=a.kC;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FB(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{c=A(123);f=p.jn!==c.jn
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+Dh(l)*0.5|0;d=a.kC;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Ga(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{c=A(123);f=p.jn!==c.jn?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+Dh(l)*0.5|0;h=a.lc.data;k=o-h[u]|0;j=a.lb.data;f=g-j[u]|0;a.mI.data[u]=k;a.mJ.data[u]=f;h[u]=o;j[u]=g;d=a.lT;if(d!==null)d.d$(h[u],j[u],u,0);e=e+1|0;}a.nV=DK(performance.now()*1000000.0);b.preventDefault();}},
Wb=(a,b)=>{let c,d,e,f,g,h,i;c=W(b.type);if(c===A(127))d=1;else if(!(A(127) instanceof H))d=0;else{e=A(127);d=c.jn!==e.jn?0:1;}if(d&&a.pe){a:{f=Q9(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}e=a.sB;if(!f)d=e.o9;else{h=e.nJ;d=Be(Bb(Y(R(f),D(2135587861, 2654435769)),e.oP));b:{while(true){i=h.data[d];if(!i){d= -(d+1|0)|0;break b;}if(i==f)break;d=(d+1|0)&e.nC;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.lT;if(e!==null){e.eb(f);a.lT.ec(g);}}else
{h=a.rW.data;if(!h[f]){a.pL=a.pL+1|0;h[f]=1;a.rd=1;a.sC.data[f]=1;e=a.lT;if(e!==null)e.eb(f);}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(128))d=1;else if(!(A(128) instanceof H))d=0;else{e=A(128);d=c.jn!==e.jn?0:1;}if(d&&a.pe){d=b.charCode&65535;e=a.lT;if(e!==null)e.ec(d);if(d==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(129))d=1;else if(!(A(129) instanceof H))d=0;else{e=A(129);d=c.jn!==e.jn?0:1;}if(d&&a.pe){f=Q9(b.keyCode);e=a.sB;if(!f)d=e.o9;else{h=e.nJ;d=Be(Bb(Y(R(f),D(2135587861, 2654435769)),
e.oP));c:{while(true){g=h.data[d];if(!g){d= -(d+1|0)|0;break c;}if(g==f)break;d=(d+1|0)&e.nC;}}d=d<0?0:1;}if(d)b.preventDefault();h=a.rW.data;if(h[f]){a.pL=a.pL-1|0;h[f]=0;}e=a.lT;if(e!==null)e.ed(f);if(f==61){b.preventDefault();b.stopPropagation();}}}}},
QG=a=>{let b,c,d;a:{if(a.pC){a.pC=0;b=0;while(true){c=a.tm.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.rd){a.rd=0;d=0;while(true){c=a.sC.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
Hd=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(FB(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(123))g=1;else if(!(A(123) instanceof H))g=0;else{c=A(123);g=f.jn!==c.jn?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Dh(d)*0.5|0;},
Ht=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Ga(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(123))g=1;else if(!(A(123) instanceof H))g=0;else{c=A(123);g=f.jn!==c.jn?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Dh(d)*0.5|0;},
Ga=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
FB=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ABM=(a,b)=>{a.lT=b;},
Ms=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
WU=(a,b)=>{AIo(a,b);Wb(a,b);};
let Rr=E(0);
function S8(){C.call(this);this.pj=null;}
function Su(){C.call(this);this.xj=null;}
let Sm=E(0);
let Qg=E();
let OJ=E(0);
function Sq(){let a=this;C.call(a);a.xl=0;a.q0=0;a.wO=null;a.sJ=null;}
let Tf=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AIG=E();
let CZ=null,B3=null,AGQ=null,Pp=null,FY=null,ALa=null,BL=null,Bi=null,Ef=null;
let Ta=E(0);
let Sv=E(0);
function PG(){C.call(this);this.vx=null;}
function JB(){C.call(this);this.rI=null;}
let AB1=(a,b)=>{let c,d,$$je;c=W(a.rI.nL.mx.document.visibilityState);if(A(130)===c)d=1;else if(!(c instanceof H))d=0;else{c=c;d=A(130).jn!==c.jn?0:1;}if(!d){b=a.rI.qu;Fo(b);a:{try{c=FR(b);while(G6(c)){AIs(Cl(c));}Ds(b);break a;}catch($$e){$$je=Br($$e);c=$$je;}Ds(b);B(c);}}else{b=a.rI.qu;Fo(b);b:{try{c=FR(b);while(G6(c)){AMK(Cl(c));}Ds(b);break b;}catch($$e){$$je=Br($$e);c=$$je;}Ds(b);B(c);}}},
AK7=(a,b)=>{AB1(a,b);};
function JC(){C.call(this);this.pK=null;}
let AQ8=(a,b)=>{let c,d,e,f,g;c=a.pK.nL.mx.document.documentElement.clientWidth;b=a.pK;d=c-b.mN.sa|0;e=b.nL.mx.document.documentElement.clientHeight;b=a.pK;f=b.mN;c=e-f.tv|0;if(d>0&&c>0){if(b.nZ!==null){if(f.q_){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Jy(a.pK.nZ,d,c);}return;}},
APS=(a,b)=>{AQ8(a,b);};
let Bj=E(Bz);
let ANT=E();
let Yj=E();
let I0=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bj;e=new J;e.jo=G(16);F(e,e.jm,A(131));L(e,e.jm,b,10);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);d.jp=1;d.jq=1;d.jr=f;B(d);}d=new I;d.jp=1;d.jq=1;B(d);}j=AAZ(b/c)|0;if(2>j)j=2;i=KA(j);if(i<=1073741824)return i;d=new Bj;e=new J;e.jo=G(16);F(e,e.jm,A(132));L(e,e.jm,b,10);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);d.jp=1;d.jq=1;d.jr=f;B(d);}d=new I;d.jp=1;d.jq=1;B(d);};
let AGt=E(Eb);
let OT=null;
let ANN=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new Cp;b.jp=1;b.jq=1;b.jr=A(76);B(b);}f=0;if(c>=0&&c<b.jn.length){a:{switch(b.jn.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=B6;i=R(e);j=CT(R(1),L7(D(4294967295, 2147483647),i));if(g==d){b=new Cp;b.jp=1;b.jq=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.jn.length)break b;g=AED(b.jn.charCodeAt(g));if(g<0){l=new Cp;b=Cv(b,c,d);m=new J;m.jo=G(16);F(m,m.jm,A(77));c=m.jm;if(b===null)b=A(2);F(m,c,
b);b=new H;n=m.jo;o=n.data;d=m.jm;e=o.length;if(d>=0&&d<=(e-0|0)){b.jn=K(n.data,0,d);l.jp=1;l.jq=1;l.jr=b;B(l);}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);}if(g>=e){l=new Cp;p=Cv(b,c,d);b=new J;b.jo=G(16);F(b,b.jm,A(78));L(b,b.jm,e,10);F(b,b.jm,A(74));c=b.jm;if(p===null)p=A(2);F(b,c,p);m=new H;n=b.jo;o=n.data;d=b.jm;e=o.length;if(d>=0&&d<=(e-0|0)){m.jn=K(n.data,0,d);l.jp=1;l.jq=1;l.jr=m;B(l);}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);}if(AA9(h,j)){b=new Cp;b.jp=1;b.jq=1;b.jr=A(133);B(b);}h=CT(Y(i,h),R(g));if(ASq(h,B6)){if(k==
d&&DJ(h,D(0, 2147483648))&&f)return D(0, 2147483648);l=new Cp;p=Cv(b,c,d);m=new J;m.jo=G(16);F(m,m.jm,A(134));c=m.jm;if(p===null)p=A(2);F(m,c,p);b=new H;n=m.jo;o=n.data;e=m.jm;c=o.length;if(e>=0&&e<=(c-0|0)){b.jn=K(n.data,0,e);l.jp=1;l.jq=1;l.jr=b;B(l);}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);}g=k;}if(f)h=ATm(h);return h;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);}b=new Cp;l=new J;l.jo=G(16);F(l,l.jm,A(81));L(l,l.jm,e,10);m=new H;n=l.jo;o=n.data;d=l.jm;e=o.length;if(d>=0&&d<=(e-0|0)){m.jn=K(n.data,0,d);b.jp
=1;b.jq=1;b.jr=m;B(b);}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
AED=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
ET=b=>{let c,d;if(DJ(b,B6))return 64;c=0;d=Bb(b,32);if(ABX(d,B6))c=32;else d=b;b=Bb(d,16);if(DJ(b,B6))b=d;else c=c|16;d=Bb(b,8);if(DJ(d,B6))d=b;else c=c|8;b=Bb(d,4);if(DJ(b,B6))b=d;else c=c|4;d=Bb(b,2);if(DJ(d,B6))d=b;else c=c|2;if(ABX(Bb(d,1),B6))c=c|1;return (64-c|0)-1|0;},
Eu=(b,c)=>{return ATt(b,c);},
ES=(b,c)=>{return ATr(b,c);},
ASJ=()=>{OT=V(AH5);};
let AF2=E();
let ABm=()=>{return {};};
let Lk=E(0);
function Gu(){let a=this;C.call(a);a.ju=null;a.od=0;a.n$=0;a.lv=0;a.wS=0;a.w2=0;a.l_=0;a.oj=0;a.kN=null;a.lu=null;a.md=null;a.xC=null;a.w7=null;a.mG=null;a.mh=null;a.m2=0;a.qj=null;a.of=null;a.pF=null;a.qp=null;a.wC=null;}
let LF=(a,b)=>{a.od=1;a.n$=1;a.lv=1;a.wS=1;a.w2=1;a.l_=1;a.oj=1;a.kN=C8(51,0.800000011920929);a.lu=C8(51,0.800000011920929);a.md=C8(51,0.800000011920929);a.xC=C8(51,0.800000011920929);a.w7=C8(51,0.800000011920929);a.mG=C8(51,0.800000011920929);a.mh=C8(51,0.800000011920929);a.m2=0;a.qj=new Float32Array(40000);a.of=new Int32Array(12000);a.pF=new Int16Array(12000);a.qp=new Int8Array(12000);a.wC=new Uint8Array(240000);a.ju=b;b.pixelStorei(37441,0);},
AN6=a=>{let b=new Gu();LF(b,a);return b;},
MX=(a,b)=>{let c,d,e,f,g;if(F0){c=(!B0(b,DZ)?null:b.n0.ke.data).buffer;d=b.jA;e=b.jt-d|0;return new Float32Array(c,d,e);}if((b.jt-b.jA|0)>a.qj.length)a.qj=new Float32Array(b.jt-b.jA|0);e=b.jA;d=0;while(true){f=b.jt;if(e>=f)break;c=a.qj;g=QR(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.qj;e=f-b.jA|0;return c.subarray(0,e);},
Rb=(a,b)=>{let c,d,e,f,g;if(F0){c=(!B0(b,DZ)?null:b.nW.ke.data).buffer;d=b.jA;e=b.jt-d|0;return new Int16Array(c,d,e);}if((b.jt-b.jA|0)>a.pF.length)a.pF=new Int16Array(b.jt-b.jA|0);e=b.jA;d=0;while(true){f=b.jt;if(e>=f)break;c=a.pF;g=ALp(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.pF;e=f-b.jA|0;return c.subarray(0,e);},
Um=(a,b)=>{let c,d,e,f,g;if(F0){c=(!B0(b,DZ)?null:b.el()).buffer;d=b.jA;e=b.jt-d|0;return new Int32Array(c,d,e);}if((b.jt-b.jA|0)>a.of.length)a.of=new Int32Array(b.jt-b.jA|0);e=b.jA;d=0;while(true){f=b.jt;if(e>=f)break;c=a.of;g=b.em(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.of;e=f-b.jA|0;return c.subarray(0,e);},
Ly=(a,b)=>{let c,d,e,f,g;if(F0)return !B0(b,DZ)?null:b.ke.data;if((b.jt-b.jA|0)>a.qp.length)a.qp=new Int8Array(b.jt-b.jA|0);c=b.jA;d=0;while(true){e=b.jt;if(c>=e)break;f=a.qp;g=VA(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.qp;c=e-b.jA|0;return f.subarray(0,c);},
AUd=(a,b)=>{if((b.jt-b.jA|0)>a.of.length)a.of=new Int32Array(b.jt-b.jA|0);},
ARC=(a,b)=>{let c,d,e,f,g;c=a.mh;d=a.m2;if(!d)c=!c.jU?null:c.jR;else{e=c.jP;f=Be(Bb(Y(R(d),D(2135587861, 2654435769)),c.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.jT;}}c=f<0?null:c.jQ.data[f];}c=c;if(!b)c=!c.jU?null:c.jR;else{e=c.jP;d=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.jV));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.jT;}}c=d<0?null:c.jQ.data[d];}Bu();return c===null?null:c[Bk]===true?c:c.jY;},
ADP=(a,b,c)=>{let d,e,f,g,h,i;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();h=d===null?null:d[Bk]===true?d:d.jY;d=a.lu;if(!c)d=!d.jU?null:d.jR;else{e=d.jP;b=Be(Bb(Y(R(c),D(2135587861, 2654435769)),d.jV));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.jT;}}d=b<0?null:d.jQ.data[b];}i=d===null?null:d[Bk]===true?d:
d.jY;a.ju.attachShader(h,i);},
APK=(a,b,c)=>{let d,e,f,g,h;d=a.ju;e=a.md;if(!c)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.bindBuffer(b,e);},
Zp=(a,b,c)=>{let d,e,f,g,h;d=a.ju;e=a.mG;if(!c)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.bindTexture(b,e);},
ACX=(a,b,c,d,e)=>{a.ju.blendFuncSeparate(b,c,d,e);},
Kz=(a,b,c,d,e)=>{let f,g;if(d instanceof D3){f=a.ju;d=MX(a,d);f.bufferData(b,d,e);}else if(d instanceof GI){f=a.ju;d=Um(a,d);f.bufferData(b,d,e);}else if(d instanceof GL){f=a.ju;d=Rb(a,d);f.bufferData(b,d,e);}else if(d instanceof EH){f=a.ju;g=Ly(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Q;f.jp=1;f.jq=1;f.jr=A(135);B(f);}a.ju.bufferData(b,c,e);}},
Ky=(a,b,c,d,e)=>{let f,g;if(e instanceof D3){f=a.ju;e=MX(a,e);f.bufferSubData(b,c,e);}else if(e instanceof GI){f=a.ju;g=Um(a,e);f.bufferSubData(b,c,g);}else if(e instanceof GL){f=a.ju;e=Rb(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof EH)){f=new Q;f.jp=1;f.jq=1;f.jr=A(135);B(f);}f=a.ju;e=Ly(a,e);f.bufferSubData(b,c,e);}},
ANp=(a,b)=>{a.ju.clear(b);},
ZE=(a,b,c,d,e)=>{a.ju.clearColor(b,c,d,e);},
AEP=(a,b)=>{let c,d,e,f;c=a.lu;if(!b)c=!c.jU?null:c.jR;else{d=c.jP;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.jV));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.jT;}}c=e<0?null:c.jQ.data[e];}Bu();c=c===null?null:c[Bk]===true?c:c.jY;a.ju.compileShader(c);},
AQt=a=>{let b,c;b=a.ju.createProgram();c=a.od;a.od=c+1|0;B1(a.kN,c,B9(b));return c;},
AKd=(a,b)=>{let c,d;c=a.ju.createShader(b);d=a.n$;a.n$=d+1|0;B1(a.lu,d,B9(c));return d;},
ANq=(a,b)=>{a.ju.depthMask(!!b);},
AJW=(a,b)=>{a.ju.disable(b);},
AIt=(a,b)=>{a.ju.disableVertexAttribArray(b);},
AAd=(a,b,c,d)=>{a.ju.drawArrays(b,c,d);},
AFD=(a,b,c,d,e)=>{let f,g;f=a.ju;g=e.jA;f.drawElements(b,c,d,g);},
AH0=(a,b,c,d,e)=>{a.ju.drawElements(b,c,d,e);},
APo=(a,b)=>{a.ju.enable(b);},
AN8=(a,b)=>{a.ju.enableVertexAttribArray(b);},
ASY=a=>{let b,c;b=a.ju.createBuffer();c=a.lv;a.lv=c+1|0;B1(a.md,c,B9(b));return c;},
Vx=(a,b)=>{a.ju.generateMipmap(b);},
AUk=a=>{let b,c;b=a.ju.createTexture();c=a.l_;a.l_=c+1|0;B1(a.mG,c,B9(b));return c;},
JR=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.ju;g=a.kN;if(!b)g=!g.jU?null:g.jR;else{h=g.jP;i=Be(Bb(Y(R(b),D(2135587861, 2654435769)),g.jV));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.jT;}}g=i<0?null:g.jQ.data[i];}Bu();g=g===null?null:g[Bk]===true?g:g.jY;g=f.getActiveAttrib(g,c);D2(d,g.size);D2(e,g.type);d.jA=0;d.jt=d.jS;d.jL=(-1);e.jA=0;e.jt=e.jS;e.jL=(-1);return W(g.name);},
Ld=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.ju;g=a.kN;if(!b)g=!g.jU?null:g.jR;else{h=g.jP;i=Be(Bb(Y(R(b),D(2135587861, 2654435769)),g.jV));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.jT;}}g=i<0?null:g.jQ.data[i];}Bu();g=g===null?null:g[Bk]===true?g:g.jY;g=f.getActiveUniform(g,c);D2(d,g.size);D2(e,g.type);d.jA=0;d.jt=d.jS;d.jL=(-1);e.jA=0;e.jt=e.jS;e.jL=(-1);return W(g.name);},
ABJ=(a,b,c)=>{let d,e,f,g,h;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();h=d===null?null:d[Bk]===true?d:d.jY;return a.ju.getAttribLocation(h,Bs(c));},
II=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Q;c.jp=1;c.jq=1;c.jr=A(136);B(c);}MT(c,0,a.ju.getParameter(b));c.jA=0;c.jt=c.jS;c.jL=(-1);},
AQj=(a,b)=>{let c,d,e,f,g;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;return W(c.getProgramInfoLog(d));},
LB=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.ju;f=a.kN;if(!b)f=!f.jU?null:f.jR;else{g=f.jP;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),f.jV));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.jT;}}f=h<0?null:f.jQ.data[h];}Bu();f=f===null?null:f[Bk]===true?f:f.jY;D2(d,e.getProgramParameter(f,c));}else{f=a.ju;e=a.kN;if(!b)e=!e.jU?null:e.jR;else{g=e.jP;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.jT;}}e=h<0?null:e.jQ.data[h];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;D2(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.jA=0;d.jt=d.jS;d.jL=(-1);},
AGj=(a,b)=>{let c,d,e,f,g;c=a.ju;d=a.lu;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;return W(c.getShaderInfoLog(d));},
Kh=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.ju;f=a.lu;if(!b)f=!f.jU?null:f.jR;else{g=f.jP;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),f.jV));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.jT;}}f=h<0?null:f.jQ.data[h];}Bu();f=f===null?null:f[Bk]===true?f:f.jY;D2(d,e.getShaderParameter(f,c));}else{f=a.ju;e=a.lu;if(!b)e=!e.jU?null:e.jR;else{g=e.jP;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.jT;}}e=h<0?null:e.jQ.data[h];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;D2(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.jA=0;d.jt=d.jS;d.jL=(-1);},
ACC=(a,b)=>{return W(a.ju.getParameter(b));},
ACx=(a,b,c)=>{let d,e,f,g,h;d=a.ju;e=a.kN;if(!b)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d=d.getUniformLocation(e,Bs(c));if(d===null)return (-1);c=a.mh;if(!b)c=!c.jU?null:c.jR;else{f=c.jP;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.jV));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.jT;}}c
=h<0?null:c.jQ.data[h];}c=c;if(c===null){c=C8(51,0.800000011920929);B1(a.mh,b,c);}h=a.oj;a.oj=h+1|0;B1(c,h,B9(d));return h;},
XT=(a,b)=>{let c,d,e,f,g;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.linkProgram(d);},
AQs=(a,b)=>{a.ju.lineWidth(b);},
AAc=(a,b,c)=>{a.ju.pixelStorei(b,c);},
Vw=(a,b,c)=>{let d,e,f,g,h;d=a.ju;e=a.lu;if(!b)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.shaderSource(e,Bs(c));},
LM=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.ju;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.jt>4){if(!F0)l=!(j instanceof D3)?Uint8Array.from(Ly(a,j)):MX(a,j);else{m=!B0(j,DZ)?null:j.ke.data;if(!(j instanceof D3)){n=j.jt-j.jA|0;o=m.byteOffset+j.jA|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.jt-j.jA|0;o=m.byteOffset+j.jA|0;l=new Float32Array(m.buffer,o,n);}}a.ju.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=ANv(j,0);Ek();j=Fn;if(!p)j=!j.jU?null:j.jR;else{q=j.jP;n=Be(Bb(Y(R(p),D(2135587861, 2654435769)),
j.jV));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.jT;}}j=n<0?null:j.jQ.data[n];}k=j;r=k.no;if(r===null&&k.kB!==null?1:0){j=a.ju;s=k.kB.ql;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.oN!==null?1:0){j=a.ju;s=k.oN;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.pI!==null?1:0){j=a.ju;s=k.pI;j.texImage2D(b,c,d,h,i,s);}else{j=a.ju;EW(k);s=k.no;j.texImage2D(b,c,d,h,i,s);}}},
AG9=(a,b,c,d)=>{a.ju.texParameterf(b,c,d);},
AJq=(a,b,c,d)=>{let e,f;e=a.ju;f=d;e.texParameterf(b,c,f);},
AJV=(a,b,c)=>{let d,e,f,g,h,i;d=a.mh;e=a.m2;if(!e)d=!d.jU?null:d.jR;else{f=d.jP;g=Be(Bb(Y(R(e),D(2135587861, 2654435769)),d.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.jT;}}d=g<0?null:d.jQ.data[g];}d=d;if(!b)d=!d.jU?null:d.jR;else{f=d.jP;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.jT;}}d=g<0?null:d.jQ.data[g];}Bu();i=d===null?null:d[Bk]===true?d:d.jY;a.ju.uniform1i(i,c);},
PJ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.mh;f=a.m2;if(!f)g=!g.jU?null:g.jR;else{h=g.jP;c=Be(Bb(Y(R(f),D(2135587861, 2654435769)),g.jV));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.jT;}}g=c<0?null:g.jQ.data[c];}g=g;if(!b)g=!g.jU?null:g.jR;else{h=g.jP;c=Be(Bb(Y(R(b),D(2135587861, 2654435769)),g.jV));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.jT;}}g=c<0?null:g.jQ.data[c];}Bu();j=g===null?null:g[Bk]===true?g:g.jY;g=a.ju;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
XV=(a,b)=>{let c,d,e,f,g;a.m2=b;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.useProgram(d);},
AGK=(a,b,c,d,e,f,g)=>{a.ju.vertexAttribPointer(b,c,d,!!e,f,g);},
VW=(a,b,c,d,e)=>{a.ju.viewport(b,c,d,e);};
let Rq=E(0);
function Jl(){let a=this;Gu.call(a);a.j1=null;a.x9=null;a.xO=0;a.wI=null;a.w0=0;a.xg=null;a.wn=0;a.qa=null;a.p4=0;a.xG=null;}
let Nc=(a,b)=>{LF(a,b);a.x9=C8(51,0.800000011920929);a.xO=1;a.wI=C8(51,0.800000011920929);a.w0=1;a.xg=C8(51,0.800000011920929);a.wn=1;a.qa=C8(51,0.800000011920929);a.p4=1;a.xG=new Uint32Array(12000);a.j1=b;},
AO9=a=>{let b=new Jl();Nc(b,a);return b;},
ADl=(a,b)=>{let c,d,e,f,g;c=a.j1;d=a.qa;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.bindVertexArray(d);},
AIk=(a,b,c,d,e)=>{a.j1.drawArraysInstanced(b,c,d,e);},
AQ2=(a,b,c,d,e,f)=>{a.j1.drawElementsInstanced(b,c,d,e,f);},
AIW=(a,b,c)=>{let d,e,f,g;d=c.jA;e=0;while(e<b){f=a.j1.createVertexArray();g=a.p4;a.p4=g+1|0;B1(a.qa,g,B9(f));D2(c,g);e=e+1|0;}Cw(c,d);},
AFL=(a,b,c)=>{if(b!=34045)II(a,b,c);else{MT(c,0,a.j1.getParameter(b));c.jA=0;c.jt=c.jS;c.jL=(-1);}};
let N8=E(Jl);
let ABS=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j1;d=a.qa;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.bindVertexArray(d);b=a.j1.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=0&&
f<=(g-0|0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
YC=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j1.drawArraysInstanced(b,c,d,e);b=a.j1.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;X(f);B(f);},
APC=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.j1.drawElementsInstanced(b,c,d,e,f);b=a.j1.getError();if(!b)return;g=new Q;h=Bc(b,4);i=new J;i.jo=G(16);F(i,i.jm,A(137));L(i,i.jm,b,10);F(i,i.jm,A(60));b=i.jm;if(h===null)h=A(2);F(i,b,h);j=new H;k=i.jo;l=k.data;c=i.jm;d=l.length;if(c>=0&&c<=(d-0|0)){j.jn=K(k.data,0,c);g.jp=1;g.jq=1;g.jr=j;B(g);}g=new I;X(g);B(g);},
XH=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.jA;e=0;while(e<b){f=a.j1.createVertexArray();g=a.p4;a.p4=g+1|0;B1(a.qa,g,B9(f));D2(c,g);e=e+1|0;}Cw(c,d);b=a.j1.getError();if(!b)return;c=new Q;h=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jo;k=j.data;e=f.jm;l=k.length;if(e>=0&&e<=(l-0|0)){i.jn=K(j.data,0,e);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
Yt=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ju;e=a.mG;if(!c)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.bindTexture(b,e);b=a.j1.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jo;k=f.data;c=e.jm;g=k.length;if(c>=0&&c<=(g
-0|0)){j.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=j;B(d);}d=new I;X(d);B(d);},
ANu=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.clear(b);b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AHc=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.ju.clearColor(b,c,d,e);f=a.j1.getError();if(!f)return;g=new Q;h=Bc(f,4);i=new J;i.jo=G(16);F(i,i.jm,A(137));L(i,i.jm,f,10);F(i,i.jm,A(60));f=i.jm;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.jo;l=k.data;m=i.jm;n=l.length;if(m>=0&&m<=(n-0|0)){j.jn=K(k.data,0,m);g.jp=1;g.jq=1;g.jr=j;B(g);}g=new I;X(g);B(g);},
XE=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.depthMask(!!b);b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AN_=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.disable(b);b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AA6=(a,b,c,d)=>{let e,f,g,h,i,j;a.ju.drawArrays(b,c,d);b=a.j1.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;d=j.length;if(c>=0&&c<=(d-0|0)){h.jn=K(i.data,0,c);e.jp=1;e.jq=1;e.jr=h;B(e);}e=new I;X(e);B(e);},
AKq=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.ju;g=e.jA;f.drawElements(b,c,d,g);b=a.j1.getError();if(!b)return;e=new Q;h=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jo;k=j.data;c=f.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);e.jp=1;e.jq=1;e.jr=i;B(e);}e=new I;X(e);B(e);},
AL2=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.enable(b);b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
Vh=(a,b)=>{return W(a.ju.getParameter(b));},
ABC=(a,b)=>{let c,d,e,f,g,h,i,j,k;a.ju.lineWidth(b);c=a.j1.getError();if(!c)return;d=new Q;e=Bc(c,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,c,10);F(f,f.jm,A(60));c=f.jm;if(e===null)e=A(2);F(f,c,e);g=new H;h=f.jo;i=h.data;j=f.jm;k=i.length;if(j>=0&&j<=(k-0|0)){g.jn=K(h.data,0,j);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
Wu=(a,b,c)=>{let d,e,f,g,h,i,j;a.ju.pixelStorei(b,c);b=a.j1.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
AHI=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;LM(a,b,c,d,e,f,g,h,i,j);b=a.j1.getError();if(!b)return;j=new Q;k=Bc(b,4);l=new J;l.jo=G(16);F(l,l.jm,A(137));L(l,l.jm,b,10);F(l,l.jm,A(60));b=l.jm;if(k===null)k=A(2);F(l,b,k);m=new H;n=l.jo;o=n.data;c=l.jm;d=o.length;if(c>=0&&c<=(d-0|0)){m.jn=K(n.data,0,c);j.jp=1;j.jq=1;j.jr=m;B(j);}j=new I;X(j);B(j);},
AAN=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.ju.texParameterf(b,c,d);b=a.j1.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;k=j.length;if(c>=0&&c<=(k-0|0)){h.jn=K(i.data,0,c);e.jp=1;e.jq=1;e.jr=h;B(e);}e=new I;X(e);B(e);},
ADa=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ju.viewport(b,c,d,e);b=a.j1.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;X(f);B(f);},
AGp=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();h=d===null?null:d[Bk]===true?d:d.jY;d=a.lu;if(!c)d=!d.jU?null:d.jR;else{e=d.jP;b=Be(Bb(Y(R(c),D(2135587861, 2654435769)),d.jV));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.jT;}}d=b<0?null:d.jQ.data[b];}i=d===null?null:d[Bk]===true
?d:d.jY;a.ju.attachShader(h,i);b=a.j1.getError();if(!b)return;d=new Q;j=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.jo;k=e.data;c=h.jm;f=k.length;if(c>=0&&c<=(f-0|0)){i.jn=K(e.data,0,c);d.jp=1;d.jq=1;d.jr=i;B(d);}d=new I;X(d);B(d);},
AO1=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ju;e=a.md;if(!c)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.bindBuffer(b,e);b=a.j1.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jo;k=f.data;c=e.jm;g=k.length;if(c>=0&&c<=(g
-0|0)){j.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=j;B(d);}d=new I;X(d);B(d);},
ABU=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ju.blendFuncSeparate(b,c,d,e);b=a.j1.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;X(f);B(f);},
AHn=(a,b,c,d,e)=>{let f,g,h,i,j;Kz(a,b,c,d,e);b=a.j1.getError();if(!b)return;d=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;e=j.length;if(c>=0&&c<=(e-0|0)){h.jn=K(i.data,0,c);d.jp=1;d.jq=1;d.jr=h;B(d);}d=new I;X(d);B(d);},
AOS=(a,b,c,d,e)=>{let f,g,h,i,j;Ky(a,b,c,d,e);b=a.j1.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;d=j.length;if(c>=0&&c<=(d-0|0)){h.jn=K(i.data,0,c);e.jp=1;e.jq=1;e.jr=h;B(e);}e=new I;X(e);B(e);},
AIN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lu;if(!b)c=!c.jU?null:c.jR;else{d=c.jP;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.jV));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.jT;}}c=e<0?null:c.jQ.data[e];}Bu();g=c===null?null:c[Bk]===true?c:c.jY;a.ju.compileShader(g);b=a.j1.getError();if(!b)return;c=new Q;h=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.jo;j=d.data;e=g.jm;f=j.length;if(e>=0&&e<=(f-0|0))
{i.jn=K(d.data,0,e);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
AQr=a=>{let b,c,d,e,f,g,h,i,j;b=a.ju.createProgram();c=a.od;a.od=c+1|0;B1(a.kN,c,B9(b));d=a.j1.getError();if(!d)return c;b=new Q;e=Bc(d,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,d,10);F(f,f.jm,A(60));d=f.jm;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);b.jp=1;b.jq=1;b.jr=g;B(b);}b=new I;X(b);B(b);},
AKK=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju.createShader(b);d=a.n$;a.n$=d+1|0;B1(a.lu,d,B9(c));b=a.j1.getError();if(!b)return d;c=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;d=f.jm;j=i.length;if(d>=0&&d<=(j-0|0)){g.jn=K(h.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;X(c);B(c);},
AQg=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.disableVertexAttribArray(b);b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
X$=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ju.drawElements(b,c,d,e);b=a.j1.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;X(f);B(f);},
AKQ=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.enableVertexAttribArray(b);b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
ANA=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.generateMipmap(b);b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AEx=(a,b,c,d,e)=>{let f,g,h,i,j;f=JR(a,b,c,d,e);b=a.j1.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jo;i=h.data;c=e.jm;j=i.length;if(c>=0&&c<=(j-0|0)){f.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=f;B(d);}d=new I;X(d);B(d);},
ANr=(a,b,c,d,e)=>{let f,g,h,i,j;f=Ld(a,b,c,d,e);b=a.j1.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jo;i=h.data;c=e.jm;j=i.length;if(c>=0&&c<=(j-0|0)){f.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=f;B(d);}d=new I;X(d);B(d);},
AH6=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();h=d===null?null:d[Bk]===true?d:d.jY;b=a.ju.getAttribLocation(h,Bs(c));f=a.j1.getError();if(!f)return b;c=new Q;i=Bc(f,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,f,10);F(d,d.jm,A(60));b=d.jm;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=
0&&f<=(g-0|0)){h.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;X(c);B(c);},
AB3=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)II(a,b,c);else{MT(c,0,a.j1.getParameter(b));c.jA=0;c.jt=c.jS;c.jL=(-1);}b=a.j1.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
ZH=(a,b,c,d)=>{let e,f,g,h,i,j;LB(a,b,c,d);b=a.j1.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
Ws=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c=W(c.getProgramInfoLog(d));b=a.j1.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
AQp=(a,b,c,d)=>{let e,f,g,h,i,j;Kh(a,b,c,d);b=a.j1.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
Xl=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju;d=a.lu;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c=W(c.getShaderInfoLog(d));b=a.j1.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
Wv=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ju;e=a.kN;if(!b)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;c=d.getUniformLocation(e,Bs(c));if(c===null)h=(-1);else{d=a.mh;if(!b)d=!d.jU?null:d.jR;else{f=d.jP;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)
&d.jT;}}d=h<0?null:d.jQ.data[h];}d=d;if(d===null){d=C8(51,0.800000011920929);B1(a.mh,b,d);}h=a.oj;a.oj=h+1|0;B1(d,h,B9(c));}b=a.j1.getError();if(!b)return h;c=new Q;i=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jo;j=f.data;h=d.jm;g=j.length;if(h>=0&&h<=(g-0|0)){e.jn=K(f.data,0,h);c.jp=1;c.jq=1;c.jr=e;B(c);}c=new I;X(c);B(c);},
APt=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.linkProgram(d);b=a.j1.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=0&&f<=(g-0|
0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
Wq=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ju;e=a.lu;if(!b)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.shaderSource(e,Bs(c));b=a.j1.getError();if(!b)return;c=new Q;i=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jo;j=f.data;g=d.jm;h=j.length;if(g>=0&&g<=
(h-0|0)){e.jn=K(f.data,0,g);c.jp=1;c.jq=1;c.jr=e;B(c);}c=new I;X(c);B(c);},
XS=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.ju;f=d;e.texParameterf(b,c,f);b=a.j1.getError();if(!b)return;e=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);e.jp=1;e.jq=1;e.jr=i;B(e);}e=new I;X(e);B(e);},
YX=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.mh;e=a.m2;if(!e)d=!d.jU?null:d.jR;else{f=d.jP;g=Be(Bb(Y(R(e),D(2135587861, 2654435769)),d.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.jT;}}d=g<0?null:d.jQ.data[g];}d=d;if(!b)d=!d.jU?null:d.jR;else{f=d.jP;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.jT;}}d=e<0?null:d.jQ.data[e];}Bu();i=d===null?null:d[Bk]===true?d:d.jY;a.ju.uniform1i(i,c);b=
a.j1.getError();if(!b)return;d=new Q;i=Bc(b,4);j=new J;j.jo=G(16);F(j,j.jm,A(137));L(j,j.jm,b,10);F(j,j.jm,A(60));b=j.jm;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.jo;l=f.data;c=j.jm;e=l.length;if(c>=0&&c<=(e-0|0)){k.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=k;B(d);}d=new I;X(d);B(d);},
AQ7=(a,b)=>{let c,d,e,f,g,h,i,j;a.m2=b;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.useProgram(d);b=a.j1.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=0&&f<=
(g-0|0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
ALA=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.ju.vertexAttribPointer(b,c,d,!!e,f,g);b=a.j1.getError();if(!b)return;h=new Q;i=Bc(b,4);j=new J;j.jo=G(16);F(j,j.jm,A(137));L(j,j.jm,b,10);F(j,j.jm,A(60));b=j.jm;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.jo;m=l.data;c=j.jm;d=m.length;if(c>=0&&c<=(d-0|0)){k.jn=K(l.data,0,c);h.jp=1;h.jq=1;h.jr=k;B(h);}h=new I;X(h);B(h);};
function Pw(){let a=this;C.call(a);a.tt=0;a.sY=0;a.s5=0;a.wu=null;a.xh=null;a.n6=null;a.wk=A(138);}
let AGh=(a,b,c,d,e)=>{a.wk=A(138);if(b===MP)a.n6=IQ;else if(b===L9)a.n6=IQ;else if(b===Mf)a.n6=I8;else if(b===LV)a.n6=I8;else if(b!==GW)a.n6=Rl;else a.n6=KV;b=a.n6;if(b===IQ)KL(a,A(139),c);else if(b===KV)KL(a,A(140),c);else if(b===I8)KL(a,A(141),c);else{a.tt=(-1);a.sY=(-1);a.s5=(-1);d=A(61);e=A(61);}a.wu=d;a.xh=e;},
AKk=(a,b,c,d)=>{let e=new Pw();AGh(e,a,b,c,d);return e;},
KL=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=PH(Ic(b,0),c);if(!P3(d)){e=CZ;b=new J;b.jo=G(16);F(b,b.jm,A(142));F(b,b.jm,c);c=new H;f=b.jo;g=f.data;h=b.jm;i=g.length;if(h>=0&&h<=(i-0|0)){c.jn=K(f.data,0,h);if(e.oq>=2){if(BT===null){b=new CU;e=new Cu;BA(e);e.kW=BE(32);EB(b);b.ll=e;e=new J;EF(e);b.kZ=e;b.kY=G(32);b.k2=0;b.k3=Cm;BT=b;}b=new J;b.jo=G(16);CG(b,b.jm,A(138));CG(b,b.jm,A(74));CG(b,b.jm,c);c=new H;f=b.jo;g=f.data;h=b.jm;i=g.length;if(h>=0&&h<=(i-0|0)){c.jn=K(f.data,0,h);BU(Bs(c));BU("\n");}else{b
=new I;b.jp=1;b.jq=1;B(b);}}a.tt=2;a.sY=0;a.s5=0;break a;}b=new I;b.jp=1;b.jq=1;B(b);}b=d.nc;j=b.nG;if(!j){b=new B5;b.jp=1;b.jq=1;Bn(b);B(b);}k=Cf(1,b.oM);if(k>=0){b=new I;c=new J;BA(c);c.jo=G(16);L(c,c.jm,1,10);e=new H;f=c.jo;g=f.data;h=c.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);b.jp=1;b.jq=1;b.jr=e;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}f=b.k1.data;if(f[2]<0)e=null;else{b=b.o3;if(!j){b=new B5;b.jp=1;b.jq=1;Bn(b);B(b);}if(k>=0){b=new I;c=new J;BA(c);c.jo=G(16);L(c,c.jm,1,10);e=new H;f=c.jo;g=f.data;h
=c.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);b.jp=1;b.jq=1;b.jr=e;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}h=f[2];if(!j){b=new B5;b.jp=1;b.jq=1;Bn(b);B(b);}if(k>=0){b=new I;c=new J;BA(c);c.jo=G(16);L(c,c.jm,1,10);e=new H;f=c.jo;g=f.data;h=c.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);b.jp=1;b.jq=1;b.jr=e;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}e=Cv(b,h,f[3]);}f=(JQ(Ic(A(143),0),e,0)).data;b=f[0];b:{try{h=Km(b);break b;}catch($$e){$$je=Br($$e);if($$je instanceof Cp){}else{throw $$e;}}d=CZ;e=new J;e.jo
=G(16);F(e,e.jm,A(144));F(e,e.jm,b);F(e,e.jm,A(145));L(e,e.jm,2,10);l=new H;g=e.jo;m=g.data;i=e.jm;j=m.length;if(i>=0&&i<=(j-0|0)){l.jn=K(g.data,0,i);if(d.oq>=1){if(C9===null){b=new Fh;e=new Cu;EB(e);e.kW=BE(32);Fz(b,e);b.kZ=Ev();b.kY=G(32);b.k2=0;b.k3=Cm;C9=b;}b=new J;b.jo=G(16);B_(b,b.jm,Cd(A(146)));B_(b,b.jm,Cd(A(74)));B_(b,b.jm,Cd(l));c=new H;g=b.jo;m=g.data;i=b.jm;j=m.length;if(i>=0&&i<=(j-0|0)){c.jn=K(g.data,0,i);Dk(Bs(c));Dk("\n");}else{b=new I;b.jp=1;b.jq=1;B(b);}}h=2;}else{b=new I;b.jp=1;b.jq=1;B(b);}}a.tt
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=Km(b);break c;}catch($$e){$$je=Br($$e);if($$je instanceof Cp){}else{throw $$e;}}d=CZ;e=new J;e.jo=G(16);F(e,e.jm,A(144));F(e,e.jm,b);F(e,e.jm,A(145));L(e,e.jm,0,10);l=new H;g=e.jo;m=g.data;j=e.jm;k=m.length;if(j>=0&&j<=(k-0|0)){l.jn=K(g.data,0,j);if(d.oq>=1){if(C9===null){b=new Fh;e=new Cu;EB(e);e.kW=BE(32);Fz(b,e);b.kZ=Ev();b.kY=G(32);b.k2=0;b.k3=Cm;C9=b;}b=new J;b.jo=G(16);B_(b,b.jm,Cd(A(146)));B_(b,b.jm,Cd(A(74)));B_(b,b.jm,Cd(l));c=new H;g=b.jo;m=g.data;j=b.jm;k
=m.length;if(j>=0&&j<=(k-0|0)){c.jn=K(g.data,0,j);Dk(Bs(c));Dk("\n");}else{b=new I;b.jp=1;b.jq=1;B(b);}}i=0;}else{b=new I;b.jp=1;b.jq=1;B(b);}}}a.sY=i;if(n<3)h=0;else{b=f[2];d:{try{h=Km(b);break d;}catch($$e){$$je=Br($$e);if($$je instanceof Cp){}else{throw $$e;}}e=CZ;d=new J;d.jo=G(16);F(d,d.jm,A(144));F(d,d.jm,b);F(d,d.jm,A(145));L(d,d.jm,0,10);b=new H;g=d.jo;f=g.data;h=d.jm;i=f.length;if(h>=0&&h<=(i-0|0)){b.jn=K(g.data,0,h);if(e.oq>=1){if(C9===null){e=new Fh;d=new Cu;EB(d);d.kW=BE(32);Fz(e,d);e.kZ=Ev();e.kY
=G(32);e.k2=0;e.k3=Cm;C9=e;}e=new J;e.jo=G(16);B_(e,e.jm,Cd(A(146)));B_(e,e.jm,Cd(A(74)));B_(e,e.jm,Cd(b));b=new H;f=e.jo;g=f.data;i=e.jm;j=g.length;if(i>=0&&i<=(j-0|0)){b.jn=K(f.data,0,i);Dk(Bs(b));Dk("\n");}else{b=new I;b.jp=1;b.jq=1;B(b);}}h=0;}else{b=new I;b.jp=1;b.jq=1;B(b);}}}a.s5=h;}};
let EE=E(Bx);
let MP=null,Mf=null,Zq=null,LV=null,GW=null,L9=null,AC6=null;
let Z6=()=>{let b,c,d,e,f,g;b=new EE;b.jB=A(7);b.jw=0;MP=b;c=new EE;c.jB=A(147);c.jw=1;Mf=c;d=new EE;d.jB=A(148);d.jw=2;Zq=d;e=new EE;e.jB=A(149);e.jw=3;LV=e;f=new EE;f.jB=A(150);f.jw=4;GW=f;g=new EE;g.jB=A(151);g.jw=5;L9=g;AC6=P(EE,[b,c,d,e,f,g]);};
let SD=E(0);
function LR(){C.call(this);this.wx=null;}
let AAV=a=>{return;};
let Ul=E(Gu);
let APZ=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ju;e=a.mG;if(!c)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.bindTexture(b,e);b=a.ju.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jo;k=f.data;c=e.jm;g=k.length;if(c>=0&&
c<=(g-0|0)){j.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=j;B(d);}d=new I;X(d);B(d);},
ZN=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.clear(b);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AAL=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.ju.clearColor(b,c,d,e);f=a.ju.getError();if(!f)return;g=new Q;h=Bc(f,4);i=new J;i.jo=G(16);F(i,i.jm,A(137));L(i,i.jm,f,10);F(i,i.jm,A(60));f=i.jm;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.jo;l=k.data;m=i.jm;n=l.length;if(m>=0&&m<=(n-0|0)){j.jn=K(k.data,0,m);g.jp=1;g.jq=1;g.jr=j;B(g);}g=new I;X(g);B(g);},
AHm=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.depthMask(!!b);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AQI=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.disable(b);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AEN=(a,b,c,d)=>{let e,f,g,h,i,j;a.ju.drawArrays(b,c,d);b=a.ju.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;d=j.length;if(c>=0&&c<=(d-0|0)){h.jn=K(i.data,0,c);e.jp=1;e.jq=1;e.jr=h;B(e);}e=new I;X(e);B(e);},
AP_=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.ju;g=e.jA;f.drawElements(b,c,d,g);b=a.ju.getError();if(!b)return;e=new Q;h=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jo;k=j.data;c=f.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);e.jp=1;e.jq=1;e.jr=i;B(e);}e=new I;X(e);B(e);},
Yb=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.enable(b);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AF8=(a,b)=>{return W(a.ju.getParameter(b));},
ABA=(a,b)=>{let c,d,e,f,g,h,i,j,k;a.ju.lineWidth(b);c=a.ju.getError();if(!c)return;d=new Q;e=Bc(c,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,c,10);F(f,f.jm,A(60));c=f.jm;if(e===null)e=A(2);F(f,c,e);g=new H;h=f.jo;i=h.data;j=f.jm;k=i.length;if(j>=0&&j<=(k-0|0)){g.jn=K(h.data,0,j);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
AIS=(a,b,c)=>{let d,e,f,g,h,i,j;a.ju.pixelStorei(b,c);b=a.ju.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
AB4=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;LM(a,b,c,d,e,f,g,h,i,j);b=a.ju.getError();if(!b)return;j=new Q;k=Bc(b,4);l=new J;l.jo=G(16);F(l,l.jm,A(137));L(l,l.jm,b,10);F(l,l.jm,A(60));b=l.jm;if(k===null)k=A(2);F(l,b,k);m=new H;n=l.jo;o=n.data;c=l.jm;d=o.length;if(c>=0&&c<=(d-0|0)){m.jn=K(n.data,0,c);j.jp=1;j.jq=1;j.jr=m;B(j);}j=new I;X(j);B(j);},
ABj=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.ju.texParameterf(b,c,d);b=a.ju.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;k=j.length;if(c>=0&&c<=(k-0|0)){h.jn=K(i.data,0,c);e.jp=1;e.jq=1;e.jr=h;B(e);}e=new I;X(e);B(e);},
AQk=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ju.viewport(b,c,d,e);b=a.ju.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;X(f);B(f);},
Wn=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();h=d===null?null:d[Bk]===true?d:d.jY;d=a.lu;if(!c)d=!d.jU?null:d.jR;else{e=d.jP;b=Be(Bb(Y(R(c),D(2135587861, 2654435769)),d.jV));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.jT;}}d=b<0?null:d.jQ.data[b];}i=d===null?null:d[Bk]===true
?d:d.jY;a.ju.attachShader(h,i);b=a.ju.getError();if(!b)return;d=new Q;j=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.jo;k=e.data;c=h.jm;f=k.length;if(c>=0&&c<=(f-0|0)){i.jn=K(e.data,0,c);d.jp=1;d.jq=1;d.jr=i;B(d);}d=new I;X(d);B(d);},
Ve=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ju;e=a.md;if(!c)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.bindBuffer(b,e);b=a.ju.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jo;k=f.data;c=e.jm;g=k.length;if(c>=0&&c<=(g-
0|0)){j.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=j;B(d);}d=new I;X(d);B(d);},
Vc=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ju.blendFuncSeparate(b,c,d,e);b=a.ju.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;X(f);B(f);},
AFC=(a,b,c,d,e)=>{let f,g,h,i,j;Kz(a,b,c,d,e);b=a.ju.getError();if(!b)return;d=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;e=j.length;if(c>=0&&c<=(e-0|0)){h.jn=K(i.data,0,c);d.jp=1;d.jq=1;d.jr=h;B(d);}d=new I;X(d);B(d);},
ADo=(a,b,c,d,e)=>{let f,g,h,i,j;Ky(a,b,c,d,e);b=a.ju.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jo;j=i.data;c=g.jm;d=j.length;if(c>=0&&c<=(d-0|0)){h.jn=K(i.data,0,c);e.jp=1;e.jq=1;e.jr=h;B(e);}e=new I;X(e);B(e);},
AQT=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lu;if(!b)c=!c.jU?null:c.jR;else{d=c.jP;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.jV));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.jT;}}c=e<0?null:c.jQ.data[e];}Bu();g=c===null?null:c[Bk]===true?c:c.jY;a.ju.compileShader(g);b=a.ju.getError();if(!b)return;c=new Q;h=Bc(b,4);g=new J;g.jo=G(16);F(g,g.jm,A(137));L(g,g.jm,b,10);F(g,g.jm,A(60));b=g.jm;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.jo;j=d.data;e=g.jm;f=j.length;if(e>=0&&e<=(f-0|0))
{i.jn=K(d.data,0,e);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
AJk=a=>{let b,c,d,e,f,g,h,i,j;b=a.ju.createProgram();c=a.od;a.od=c+1|0;B1(a.kN,c,B9(b));d=a.ju.getError();if(!d)return c;b=new Q;e=Bc(d,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,d,10);F(f,f.jm,A(60));d=f.jm;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);b.jp=1;b.jq=1;b.jr=g;B(b);}b=new I;X(b);B(b);},
AQx=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju.createShader(b);d=a.n$;a.n$=d+1|0;B1(a.lu,d,B9(c));b=a.ju.getError();if(!b)return d;c=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;d=f.jm;j=i.length;if(d>=0&&d<=(j-0|0)){g.jn=K(h.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;X(c);B(c);},
AJe=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.disableVertexAttribArray(b);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
ADG=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ju.drawElements(b,c,d,e);b=a.ju.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;X(f);B(f);},
AQJ=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.enableVertexAttribArray(b);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AIg=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju.generateMipmap(b);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AFG=(a,b,c,d,e)=>{let f,g,h,i,j;f=JR(a,b,c,d,e);b=a.ju.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jo;i=h.data;c=e.jm;j=i.length;if(c>=0&&c<=(j-0|0)){f.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=f;B(d);}d=new I;X(d);B(d);},
YA=(a,b,c,d,e)=>{let f,g,h,i,j;f=Ld(a,b,c,d,e);b=a.ju.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jo;i=h.data;c=e.jm;j=i.length;if(c>=0&&c<=(j-0|0)){f.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=f;B(d);}d=new I;X(d);B(d);},
ADQ=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();h=d===null?null:d[Bk]===true?d:d.jY;b=a.ju.getAttribLocation(h,Bs(c));f=a.ju.getError();if(!f)return b;c=new Q;i=Bc(f,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,f,10);F(d,d.jm,A(60));b=d.jm;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=
0&&f<=(g-0|0)){h.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;X(c);B(c);},
V1=(a,b,c)=>{let d,e,f,g,h,i,j;II(a,b,c);b=a.ju.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jo=G(16);F(e,e.jm,A(137));L(e,e.jm,b,10);F(e,e.jm,A(60));b=e.jm;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;X(c);B(c);},
AB$=(a,b,c,d)=>{let e,f,g,h,i,j;LB(a,b,c,d);b=a.ju.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
ACe=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c=W(c.getProgramInfoLog(d));b=a.ju.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f
>=0&&f<=(g-0|0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
WD=(a,b,c,d)=>{let e,f,g,h,i,j;Kh(a,b,c,d);b=a.ju.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jo=G(16);F(f,f.jm,A(137));L(f,f.jm,b,10);F(f,f.jm,A(60));b=f.jm;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jo;i=h.data;c=f.jm;j=i.length;if(c>=0&&c<=(j-0|0)){g.jn=K(h.data,0,c);d.jp=1;d.jq=1;d.jr=g;B(d);}d=new I;X(d);B(d);},
ALH=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju;d=a.lu;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c=W(c.getShaderInfoLog(d));b=a.ju.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
ANS=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ju;e=a.kN;if(!b)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;c=d.getUniformLocation(e,Bs(c));if(c===null)h=(-1);else{d=a.mh;if(!b)d=!d.jU?null:d.jR;else{f=d.jP;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)
&d.jT;}}d=h<0?null:d.jQ.data[h];}d=d;if(d===null){d=C8(51,0.800000011920929);B1(a.mh,b,d);}h=a.oj;a.oj=h+1|0;B1(d,h,B9(c));}b=a.ju.getError();if(!b)return h;c=new Q;i=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jo;j=f.data;h=d.jm;g=j.length;if(h>=0&&h<=(g-0|0)){e.jn=K(f.data,0,h);c.jp=1;c.jq=1;c.jr=e;B(c);}c=new I;X(c);B(c);},
AGR=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.linkProgram(d);b=a.ju.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=0&&f<=(g-0|
0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
AP9=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ju;e=a.lu;if(!b)e=!e.jU?null:e.jR;else{f=e.jP;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.jT;}}e=g<0?null:e.jQ.data[g];}Bu();e=e===null?null:e[Bk]===true?e:e.jY;d.shaderSource(e,Bs(c));b=a.ju.getError();if(!b)return;c=new Q;i=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jo;j=f.data;g=d.jm;h=j.length;if(g>=0&&g
<=(h-0|0)){e.jn=K(f.data,0,g);c.jp=1;c.jq=1;c.jr=e;B(c);}c=new I;X(c);B(c);},
ANJ=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.ju;f=d;e.texParameterf(b,c,f);b=a.ju.getError();if(!b)return;e=new Q;g=Bc(b,4);h=new J;h.jo=G(16);F(h,h.jm,A(137));L(h,h.jm,b,10);F(h,h.jm,A(60));b=h.jm;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jo;k=j.data;c=h.jm;d=k.length;if(c>=0&&c<=(d-0|0)){i.jn=K(j.data,0,c);e.jp=1;e.jq=1;e.jr=i;B(e);}e=new I;X(e);B(e);},
AQq=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.mh;e=a.m2;if(!e)d=!d.jU?null:d.jR;else{f=d.jP;g=Be(Bb(Y(R(e),D(2135587861, 2654435769)),d.jV));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.jT;}}d=g<0?null:d.jQ.data[g];}d=d;if(!b)d=!d.jU?null:d.jR;else{f=d.jP;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.jT;}}d=e<0?null:d.jQ.data[e];}Bu();i=d===null?null:d[Bk]===true?d:d.jY;a.ju.uniform1i(i,c);b
=a.ju.getError();if(!b)return;d=new Q;i=Bc(b,4);j=new J;j.jo=G(16);F(j,j.jm,A(137));L(j,j.jm,b,10);F(j,j.jm,A(60));b=j.jm;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.jo;l=f.data;c=j.jm;e=l.length;if(c>=0&&c<=(e-0|0)){k.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=k;B(d);}d=new I;X(d);B(d);},
WF=(a,b)=>{let c,d,e,f,g,h,i,j;a.m2=b;c=a.ju;d=a.kN;if(!b)d=!d.jU?null:d.jR;else{e=d.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.jV));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.jT;}}d=f<0?null:d.jQ.data[f];}Bu();d=d===null?null:d[Bk]===true?d:d.jY;c.useProgram(d);b=a.ju.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jo=G(16);F(d,d.jm,A(137));L(d,d.jm,b,10);F(d,d.jm,A(60));b=d.jm;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jo;j=e.data;f=d.jm;g=j.length;if(f>=0&&f<=
(g-0|0)){i.jn=K(e.data,0,f);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;X(c);B(c);},
Zu=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.ju.vertexAttribPointer(b,c,d,!!e,f,g);b=a.ju.getError();if(!b)return;h=new Q;i=Bc(b,4);j=new J;j.jo=G(16);F(j,j.jm,A(137));L(j,j.jm,b,10);F(j,j.jm,A(60));b=j.jm;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.jo;m=l.data;c=j.jm;d=m.length;if(c>=0&&c<=(d-0|0)){k.jn=K(l.data,0,c);h.jp=1;h.jq=1;h.jr=k;B(h);}h=new I;X(h);B(h);};
function SI(){let a=this;C.call(a);a.ni=0;a.jP=null;a.jQ=null;a.jR=null;a.jU=0;a.uu=0.0;a.rN=0;a.jV=0;a.jT=0;}
let ADj=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.uu=c;d=I0(b,c);a.rN=d*c|0;b=d-1|0;a.jT=b;a.jV=ET(R(b));a.jP=U(d);a.jQ=S(C,d);return;}e=new Bj;f=new J;f.jo=G(16);F(f,f.jm,A(62));Hj(f,f.jm,c);g=new H;h=f.jo;i=h.data;d=f.jm;j=i.length;if(d>=0&&d<=(j-0|0)){g.jn=K(h.data,0,d);e.jp=1;e.jq=1;e.jr=g;B(e);}f=new I;f.jp=1;f.jq=1;B(f);},
C8=(a,b)=>{let c=new SI();ADj(c,a,b);return c;},
B1=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.jR;a.jR=c;if(!a.jU){a.jU=1;a.ni=a.ni+1|0;}return d;}e=a.jP;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),a.jV));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.jT;}}if(f>=0){e=a.jQ.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.jQ.data[f]=c;b=a.ni+1|0;a.ni=b;if(b>=a.rN)AMR(a,g.length<<1);return null;},
Gn=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.jU)return null;a.jU=0;c=a.jR;a.jR=null;a.ni=a.ni-1|0;return c;}d=a.jP;e=Y(R(b),D(2135587861, 2654435769));f=a.jV;g=Be(Bb(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.jT;}}if(g<0)return null;j=a.jQ.data;k=j[g];l=a.jT;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Be(Bb(Y(R(n),D(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.ni=a.ni-1|0;return k;},
AQC=(a,b,c)=>{let d,e,f,g;a:{d=a.jQ;if(b===null){if(a.jU&&a.jR===null)return 1;d=d.data;e=a.jP;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.jR)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.jU){g=a.jR;if(b===g?1:g instanceof E9&&g.mD==b.mD?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof E9&&g.mD==b.mD?1:0)return 1;f=f+(-1)|0;}}return 0;},
AMR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.jP.data.length;a.rN=b*a.uu|0;d=b-1|0;a.jT=d;d=ET(R(d));a.jV=d;e=a.jP;f=a.jQ;g=U(b);a.jP=g;h=S(C,b);a.jQ=h;if(a.ni>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Be(Bb(Y(R(k),D(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.jT;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function Q4(){let a=this;C.call(a);a.mE=0;a.nJ=null;a.o9=0;a.v_=0.0;a.r4=0;a.oP=0;a.nC=0;}
let ABn=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.v_=c;d=I0(b,c);a.r4=d*c|0;b=d-1|0;a.nC=b;a.oP=ET(R(b));a.nJ=U(d);return;}e=new Bj;f=new J;f.jo=G(16);F(f,f.jm,A(62));Hj(f,f.jm,c);g=new H;h=f.jo;i=h.data;d=f.jm;j=i.length;if(d>=0&&d<=(j-0|0)){g.jn=K(h.data,0,d);e.jp=1;e.jq=1;e.jr=g;B(e);}f=new I;f.jp=1;f.jq=1;B(f);},
N1=(a,b)=>{let c=new Q4();ABn(c,a,b);return c;},
AAy=(a,b)=>{let c,d,e,f;if(!b){if(a.o9)return 0;a.o9=1;a.mE=a.mE+1|0;return 1;}c=a.nJ;d=Be(Bb(Y(R(b),D(2135587861, 2654435769)),a.oP));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.nC;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.mE+1|0;a.mE=b;if(b>=a.r4)AAJ(a,e.length<<1);return 1;},
AOH=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.o9)return 0;a.o9=0;a.mE=a.mE-1|0;return 1;}c=a.nJ;d=Y(R(b),D(2135587861, 2654435769));e=a.oP;f=Be(Bb(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.nC;}}if(f<0)return 0;h=a.nC;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.mE=a.mE-1|0;return 1;},
AAJ=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.nJ.data.length;a.r4=b*a.v_|0;d=b-1|0;a.nC=d;d=ET(R(d));a.oP=d;e=a.nJ;f=U(b);a.nJ=f;if(a.mE>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Be(Bb(Y(R(h),D(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.nC;}f[i]=h;}g=g+1|0;}}}};
let Tp=E(0);
function Lm(){C.call(this);this.qL=null;}
let Wg=a=>{let b;b=a.qL;b.q0=1;Tf(Bs(b.sJ));},
AAq=a=>{let b;b=a.qL;b.q0=1;Tf(Bs(b.sJ));},
VS=a=>{a.qL.q0=0;};
let UE=E(0);
function UL(){let a=this;C.call(a);a.pg=null;a.te=null;a.xR=null;}
let IK=0;
let AOo=a=>{let b,c,d,e,f,g,h,i,$$je;b=Y8();a.pg=b;c=AJb(b);a.te=c;b=new Ra;d=a.pg;e=new Bt;e.kk=0;e.jE=S(C,16);b.kb=e;b.kU=2147483647;b.wQ=d;b.w4=c;a.xR=b;b=CZ.qu;Fo(b);a:{try{BN(b,a);Ds(b);break a;}catch($$e){$$je=Br($$e);d=$$je;}Ds(b);B(d);}if(a.pg.state!=='running'?1:0){b=new JL;b.xP=a;Zr(a.pg,BY(b,"unlockFunction"));}else{if(!IK&&CZ.oq>=2){if(BT===null){c=new CU;e=new Cu;EB(e);e.kW=BE(32);Fz(c,e);c.kZ=Ev();c.kY=G(32);c.k2=0;c.k3=Cm;BT=c;}c=new J;c.jo=G(16);B_(c,c.jm,Cd(A(152)));B_(c,c.jm,Cd(A(74)));B_(c,
c.jm,Cd(A(153)));b=new H;f=c.jo;g=f.data;h=c.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);BU(Bs(b));BU("\n");}else{b=new I;b.jp=1;b.jq=1;B(b);}}IK=1;}},
AOL=()=>{let a=new UL();AOo(a);return a;},
AMK=a=>{a.te.disconnect(a.pg.destination);},
AIs=a=>{a.te.connect(a.pg.destination);},
Zr=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
Y8=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
AJb=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function Nw(){Dq.call(this);this.ws=null;}
let Tk=E(Ca);
function DV(){C$.call(this);this.kX=null;}
let I=E(Bz);
let Zf=a=>{a.jp=1;a.jq=1;},
XA=()=>{let a=new I();Zf(a);return a;},
AEF=(a,b)=>{a.jp=1;a.jq=1;a.jr=b;},
To=a=>{let b=new I();AEF(b,a);return b;};
let EQ=E(0);
let O$=E(0);
let QI=E(0);
let Qy=E(0);
let R0=E(0);
let UB=E(0);
let ST=E(0);
let OM=E(0);
let Kf=E(0);
let NU=E();
let AJL=(a,b)=>{b=a.R(b);Bu();return b===null?null:b instanceof Fm()&&b instanceof Es?(b[Bk]===true?b:b.jY):b;},
AM_=(a,b,c)=>{a.eL(W(b),Df(c,"handleEvent"));},
AMp=(a,b,c)=>{a.eM(W(b),Df(c,"handleEvent"));},
AJx=(a,b,c,d)=>{a.eN(W(b),Df(c,"handleEvent"),d?1:0);},
APf=(a,b)=>{return !!a.eO(b);},
Zv=a=>{return a.eP();},
VR=(a,b,c,d)=>{a.eQ(W(b),Df(c,"handleEvent"),d?1:0);};
let K0=E();
function Jb(){let a=this;K0.call(a);a.rS=0;a.oc=null;a.uU=0.0;a.r5=0;a.qn=0;a.pZ=0;a.wc=0;}
let UX=null,PK=null;
let J$=(a,b)=>{let c,d,e;a.pZ=(-1);if(b<0){c=new Bj;c.jp=1;c.jq=1;B(c);}a.rS=0;if(!b)b=1;d=S(Ia,b);e=d.data;a.oc=d;b=e.length;a.qn=b;a.uU=0.75;a.r5=b*0.75|0;},
ASC=a=>{let b=new Jb();J$(b,a);return b;},
Dg=(a,b,c)=>{let d,e,f,g,h,i,j;Fo(a);try{if(b!==null&&c!==null){a:{if(!b.kS){d=0;while(true){if(d>=b.jn.length)break a;b.kS=(31*b.kS|0)+b.jn.charCodeAt(d)|0;d=d+1|0;}}}e=b.kS&2147483647;f=a.oc.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.vf;if(!b.kS){i=0;while(true){if(i>=b.jn.length)break b;b.kS=(31*b.kS|0)+b.jn.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.kS&&h.l$.cB(b)?1:0)break;h=h.re;}if(h!==null){j=h.l4;h.l4=c;return j;}a.wc=a.wc+1|0;d=a.rS+1|0;a.rS=d;if(d>a.r5){AHl(a);g=e%a.oc.data.length|0;}if(g<a.qn)a.qn
=g;if(g>a.pZ)a.pZ=g;c:{j=new Ia;j.l$=b;j.l4=c;if(!b.kS){d=0;while(true){if(d>=b.jn.length)break c;b.kS=(31*b.kS|0)+b.jn.charCodeAt(d)|0;d=d+1|0;}}}j.vf=b.kS;f=a.oc.data;j.re=f[g];f[g]=j;return null;}b=new C5;b.jp=1;b.jq=1;B(b);}finally{Ds(a);}},
AHl=a=>{let b,c,d,e,f,g,h,i,j;b=(a.oc.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=S(Ia,b);e=d.data;f=a.pZ+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.qn)break;h=a.oc.data[f];while(h!==null){i=(h.l$.cI()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.re;h.re=e[i];e[i]=h;h=j;}}a.qn=g;a.pZ=c;a.oc=d;a.r5=e.length*a.uU|0;},
AUv=()=>{UX=new JI;PK=new JH;};
function L4(){Jb.call(this);this.xI=null;}
let AD3=E();
let Gc=E(Bx);
let I8=null,IQ=null,KV=null,Rl=null,ALc=null;
let AHu=()=>{let b,c,d,e;b=new Gc;b.jB=A(154);b.jw=0;I8=b;c=new Gc;c.jB=A(155);c.jw=1;IQ=c;d=new Gc;d.jB=A(150);d.jw=2;KV=d;e=new Gc;e.jB=A(156);e.jw=3;Rl=e;ALc=P(Gc,[b,c,d,e]);};
let Dr=E();
let ABh=E(Dr);
let AAs=E(Dr);
let AFM=E(Dr);
let AIP=E(Dr);
let AEk=E(Dr);
function KG(){C.call(this);this.xA=null;}
let AFf=(a,b)=>{b.preventDefault();};
function KH(){C.call(this);this.x3=null;}
let AQa=(a,b)=>{b.preventDefault();};
function KF(){let a=this;C.call(a);a.tY=null;a.tO=null;a.t_=null;}
let AH8=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bt;e.kk=1;e.jE=S(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=W(g.name);i=FD(h,46,h.jn.length-1|0);b=i==(-1)?A(61):Cv(h,i+1|0,h.jn.length);j=b.jn.toLowerCase();if(j!==b.jn)b=St(j);if(YF(b))j=Fd;else{if(b===A(157))k=1;else if(!(A(157) instanceof H))k=0;else{j=A(157);k=b.jn!==j.jn?0:1;}b:{if(!k){if(b===A(158))k=1;else if(!(A(158) instanceof H))k=0;else{j=A(158);k=b.jn!==j.jn?0:1;}if(!k){if(b===A(159))k
=1;else if(!(A(159) instanceof H))k=0;else{j=A(159);k=b.jn!==j.jn?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?E0:!AEB(b)?E6:Fk;}l=new FileReader();b=new LN;b.rg=a;b.sj=j;b.tu=h;b.qB=e;b.tC=d;l.addEventListener("load",BY(b,"handleEvent"));if(j!==E6&&j!==E0){if(j===Fd)l.readAsDataURL(g);else if(j===Fk)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AKC=(a,b)=>{AH8(a,b);};
function Ra(){let a=this;C$.call(a);a.wQ=null;a.w4=null;}
let Tw=E(0);
function JL(){C.call(this);this.xP=null;}
let ABD=a=>{let b,c,d,e,f,g;if(!IK&&CZ.oq>=2){if(BT===null){b=new CU;Ud(b,ANX(32),0);BT=b;}b=new J;b.jo=G(16);DW(b,b.jm,A(152));DW(b,b.jm,A(74));DW(b,b.jm,A(153));c=new H;d=b.jo;e=d.data;f=b.jm;g=e.length;if(f>=0&&f<=(g-0|0)){c.jn=K(d.data,0,f);BU(Bs(c));BU("\n");}else B(XA());}IK=1;};
let AAb=E(Dr);
function Qs(){let a=this;C.call(a);a.kg=null;a.lk=0;a.r9=null;a.tW=0;a.pa=0;a.nM=0;a.lH=0;a.uX=null;}
let JQ=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new J4;d.k0=S(C,10);e=PH(a,b);f=0;g=0;if(!b.jn.length){h=S(H,1);h.data[0]=A(61);return h;}a:{while(true){if(!P3(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.nc;if(!j.nG){b=new B5;b.jp=1;b.jq=1;Bn(b);B(b);}if(0>=j.oM){b=new I;d=new J;BA(d);d.jo=G(16);L(d,d.jm,0,10);e=new H;h=d.jo;k=h.data;f=d.jm;g=k.length;if(f>=0&&f<=(g-0|0)){e.jn=K(h.data,0,f);b.jp=1;b.jq=1;b.jr=e;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}j=Cv(b,g,j.k1.data[0]);GE(d,d.ki+1|0);h=d.k0.data;f=d.ki;d.ki=f+1|0;h[f]
=j;d.lU=d.lU+1|0;j=e.nc;if(!j.nG)break;if(0>=j.oM){b=new I;d=new J;BA(d);d.jo=G(16);L(d,d.jm,0,10);e=new H;h=d.jo;k=h.data;f=d.jm;g=k.length;if(f>=0&&f<=(g-0|0)){e.jn=K(h.data,0,f);b.jp=1;b.jq=1;b.jr=e;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}g=j.k1.data[1];f=i;}b=new B5;b.jp=1;b.jq=1;Bn(b);B(b);}b:{b=Cv(b,g,b.jn.length);GE(d,d.ki+1|0);h=d.k0.data;i=d.ki;d.ki=i+1|0;h[i]=b;d.lU=d.lU+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.ki)break;if(d.k0.data[f].jn.length)break b;S_(d,f);}b=new I;b.jp
=1;b.jq=1;B(b);}}if(f<0)f=0;return ABQ(d,S(H,f));},
Ic=(b,c)=>{let d;if(b===null){b=new C5;b.jp=1;b.jq=1;b.jr=A(160);B(b);}if(c&&(c|255)!=255){b=new Bj;b.jp=1;b.jq=1;b.jr=A(61);B(b);}N=1;d=new Qs;d.r9=S(De,10);d.pa=(-1);d.nM=(-1);d.lH=(-1);return ACy(d,b,c);},
ACy=(a,b,c)=>{let d,e,f;a.kg=AB_(b,c);a.lk=c;b=UR(a,(-1),c,null);a.uX=b;d=a.kg;if(!d.kI&&!d.jJ&&d.jF==d.ls&&!(d.kl===null?0:1)?1:0){if(a.tW)b.eZ();return a;}b=new Cc;e=d.kF;f=d.mc;b.jp=1;b.jq=1;b.j3=(-1);b.kH=A(61);b.kE=e;b.j3=f;B(b);},
APB=(a,b)=>{let c,d,e,f,g,h;c=new Cz;d=a.lk;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bf;g.jC=U(64);c.jH=g;g=new Bf;g.jC=U(2);c.jK=g;c.q8=e;c.rU=f;while(true){h=a.kg;d=h.kI;if(!d&&!h.jJ&&h.jF==h.ls&&!(h.kl===null?0:1)?1:0)break;f=!d&&!h.jJ&&h.jF==h.ls&&!(h.kl===null?0:1)?1:0;if(!(!f&&!(h.kl===null?0:1)&&(d<0?0:1)?1:0))break;f=h.jJ;if(f&&f!=(-536870788)&&f!=(-536870871))break;Bp(h);CR(c,h.nB);g=a.kg;if(g.kI!=(-536870788))continue;Bp(g);}g=Lh(a,c);g.e3(b);return g;},
UR=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new J4;e.k0=S(C,10);f=a.lk;g=0;if(c!=f)a.lk=c;a:{switch(b){case -1073741784:h=new QW;i=a.lH+1|0;a.lH=i;DG();c=N;N=c+1|0;d=new Z;d.jo=G(20);h.jD=(L(d,d.jm,c,10)).S();h.k8=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pq;i=a.lH+1|0;a.lH=i;DG();c=N;N=c+1|0;d=new Z;d.jo=G(20);h.jD=(L(d,d.jm,c,10)).S();h.k8=i;break a;case -33554392:h=new RB;i=a.lH+1|0;a.lH=i;DG();c=N;N=c+1|0;d=new Z;d.jo=G(20);h.jD=(L(d,d.jm,c,10)).S();h.k8=i;break a;default:i
=a.pa+1|0;a.pa=i;if(d!==null){h=new De;DG();c=N;N=c+1|0;d=new Z;d.jo=G(20);h.jD=(L(d,d.jm,c,10)).S();h.k8=i;}else{h=new F7;DG();j=N;N=j+1|0;d=new Z;d.jo=G(20);h.jD=(L(d,d.jm,j,10)).S();h.k8=0;g=1;}c=a.pa;if(c<=(-1))break a;if(c>=10)break a;a.r9.data[c]=h;break a;}h=new UM;DG();j=N;N=j+1|0;d=new Z;d.jo=G(20);h.jD=(L(d,d.jm,j,10)).S();h.k8=(-1);}while(true){k=a.kg;l=k.kI;j=!l&&!k.jJ&&k.jF==k.ls&&!(k.kl===null?0:1)?1:0;j=!j&&!(k.kl===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.jJ==(-536870788))k=APB(a,h);else if(l==(-536870788))
{k=new EY;j=N;N=j+1|0;d=new Z;d.jo=G(20);k.jD=(L(d,d.jm,j,10)).S();k.jv=h;k.j9=1;k.kv=1;k.j9=0;Bp(a.kg);}else{k=OX(a,h);d=a.kg;if(d.kI==(-536870788))Bp(d);}if(k!==null){GE(e,e.ki+1|0);m=e.k0.data;l=e.ki;e.ki=l+1|0;m[l]=k;e.lU=e.lU+1|0;}k=a.kg;j=k.kI;if(!j&&!k.jJ&&k.jF==k.ls&&!(k.kl===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.nB==(-536870788)){k=new EY;c=N;N=c+1|0;d=new Z;d.jo=G(20);k.jD=(L(d,d.jm,c,10)).S();k.jv=h;k.j9=1;k.kv=1;k.j9=0;GE(e,e.ki+1|0);m=e.k0.data;j=e.ki;e.ki=j+1|0;m[j]=k;e.lU=e.lU+1|
0;}if(a.lk!=f&&!g){a.lk=f;k=a.kg;k.kz=f;k.jJ=k.kI;k.m$=k.kl;j=k.mc;k.jF=j+1|0;k.pT=j;Bp(k);}switch(b){case -1073741784:break;case -536870872:d=new Nk;b=N;N=b+1|0;k=new Z;BA(k);k.jo=G(20);d.jD=(L(k,k.jm,b,10)).S();d.kL=e;d.lK=h;d.ky=h.k8;return d;case -268435416:d=new TP;b=N;N=b+1|0;k=new Z;BA(k);k.jo=G(20);d.jD=(L(k,k.jm,b,10)).S();d.kL=e;d.lK=h;d.ky=h.k8;return d;case -134217688:d=new Qw;b=N;N=b+1|0;k=new Z;BA(k);k.jo=G(20);d.jD=(L(k,k.jm,b,10)).S();d.kL=e;d.lK=h;d.ky=h.k8;return d;case -67108824:k=new RY;b
=N;N=b+1|0;d=new Z;BA(d);d.jo=G(20);k.jD=(L(d,d.jm,b,10)).S();k.kL=e;k.lK=h;k.ky=h.k8;return k;case -33554392:d=new D6;b=N;N=b+1|0;k=new Z;k.jo=G(20);d.jD=(L(k,k.jm,b,10)).S();d.kL=e;d.lK=h;d.ky=h.k8;return d;default:c=e.ki;switch(c){case 0:d=new EY;b=N;N=b+1|0;e=new Z;e.jo=G(20);d.jD=(L(e,e.jm,b,10)).S();d.jv=h;d.j9=1;d.kv=1;d.j9=0;return d;case 1:d=new FU;if(0>=c){d=new I;d.jp=1;d.jq=1;B(d);}e=e.k0.data[0];b=N;N=b+1|0;k=new Z;k.jo=G(20);d.jD=(L(k,k.jm,b,10)).S();d.l7=e;d.lK=h;d.ky=h.k8;return d;default:}d
=new Cg;b=N;N=b+1|0;k=new Z;k.jo=G(20);d.jD=(L(k,k.jm,b,10)).S();d.kL=e;d.lK=h;d.ky=h.k8;return d;}k=new Jj;j=N;N=j+1|0;d=new Z;d.jo=G(20);k.jD=(L(d,d.jm,j,10)).S();k.kL=e;k.lK=h;k.ky=h.k8;return k;},
AL3=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Oi;b.jo=G(16);while(true){c=a.kg;d=c.kI;if(!d&&!c.jJ&&c.jF==c.ls&&!(c.kl===null?0:1)?1:0)break;e=!d&&!c.jJ&&c.jF==c.ls&&!(c.kl===null?0:1)?1:0;if(!(!e&&!(c.kl===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.m$;d=f===null?0:1;if(!(!d&&!c.jJ)){d=f===null?0:1;if(!(!d&&(c.jJ<0?0:1))){g=c.jJ;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Bp(c);e=c.nB;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.jm;Bd(b,e,e+1|0);b.jo.data[e]=d;}else{h=(EO(e)).data;d=0;e=h.length;g=b.jm;Bd(b,g,g+e|0);i=e+d|0;while(d<i){j=b.jo.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.lk;if(!((e&2)!=2?0:1))return AEY(b);if(!((e&64)!=64?0:1)){c=new NM;d=N;N=d+1|0;f=new Z;f.jo=G(20);c.jD=(L(f,f.jm,d,10)).S();c.j9=1;f=new H;h=b.jo;j=h.data;e=b.jm;g=j.length;if(e>=0&&e<=(g-0|0)){f.jn=K(h.data,0,e);c.o1=f;c.j9=b.jm;return c;}b=new I;b.jp=1;b.jq=1;B(b);}c=new Nf;d=N;N=d+1|0;f=new Z;f.jo=G(20);c.jD=(L(f,f.jm,d,10)).S();c.j9
=1;f=new J;f.jo=G(16);e=0;while(true){d=Cf(e,b.jm);if(d>=0){b=new H;h=f.jo;j=h.data;g=f.jm;d=j.length;if(g>=0&&g<=(d-0|0)){b.jn=K(h.data,0,g);c.p0=b;c.j9=f.jm;return c;}b=new I;b.jp=1;b.jq=1;B(b);}if(e<0)break;if(d>=0)break;d=b.jo.data[e];if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}d=Cr(BO,d)&65535;if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}i=Cr(BP,d)&65535;g=f.jm;Bd(f,g,g+1|0);f.jo.data[g]=i;e=e+1|0;}b=new I;b.jp=1;b.jq=1;B(b);},
AMi=a=>{let b,c,d,e,f,g,h,i,j;b=U(4);c=(-1);d=(-1);e=a.kg;f=e.kI;if(!(!f&&!e.jJ&&e.jF==e.ls&&!(e.kl===null?0:1)?1:0)){g=!f&&!e.jJ&&e.jF==e.ls&&!(e.kl===null?0:1)?1:0;if(!g&&!(e.kl===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Bp(e);c=e.nB;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.kg;i=e.kI;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Bp(e);e=a.kg;i=e.kI;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Bp(e);e=new H4;c=N;N=c+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,c,10)).S();e.ns=h;e.qb=3;return e;}e=new H4;c
=N;N=c+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,c,10)).S();e.ns=h;e.qb=2;return e;}i=a.lk;if(!((i&2)!=2?0:1)){e=new DP;i=b[0];c=N;N=c+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,c,10)).S();e.j9=1;e.lD=i;return e;}if(!((i&64)!=64?0:1)){e=new Jw;i=b[0];c=N;N=c+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,c,10)).S();e.j9=1;e.ry=i;e.rX=FI(i);return e;}e=new MH;i=b[0];c=N;N=c+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,c,10)).S();e.j9=1;if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}i=Cr(BO,i)&65535;if
(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}e.qs=Cr(BP,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.kg;g=e.kI;if(!g&&!e.jJ&&e.jF==e.ls&&!(e.kl===null?0:1)?1:0)break;i=!g&&!e.jJ&&e.jF==e.ls&&!(e.kl===null?0:1)?1:0;if(!(!i&&!(e.kl===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;Bp(e);h[c]=e.nB;c=i;}if(c==1){i=h[0];if(!(Yq.em(i)==AMB?0:1))return UJ(a,h[0]);}d=a.lk;if(!((d&2)!=2?0:1)){e=new E8;i=N;N=i+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,i,10)).S();e.ol=1;e.n9=b;e.n5=c;return e;}if
((d&64)!=64?0:1){e=new UF;i=N;N=i+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,i,10)).S();e.ol=1;e.n9=b;e.n5=c;return e;}e=new Sk;i=N;N=i+1|0;j=new Z;j.jo=G(20);e.jD=(L(j,j.jm,i,10)).S();e.ol=1;e.n9=b;e.n5=c;return e;},
OX=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kg;d=c.kI;e=!d&&!c.jJ&&c.jF==c.ls&&!(c.kl===null?0:1)?1:0;e=!e&&!(c.kl===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.m$===null?0:1)&&(c.jJ<0?0:1)){if(!((a.lk&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AL3(a):MN(a,b,UD(a,b));}else{f=AMi(a);g=a.kg;e=g.kI;if(!(!e&&!g.jJ&&g.jF==g.ls&&!(g.kl===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof F7))&&e!=(-536870788)){h=!e&&!g.jJ&&g.jF==g.ls&&!(g.kl===null?0:1)?1:0;if(!(!h&&!(g.kl===null?0:1)&&(e<0?0:1)?1:0))f
=MN(a,b,f);}}}else if(d!=(-536870871))f=MN(a,b,UD(a,b));else{if(b instanceof F7){b=new Cc;g=c.kF;h=c.mc;b.jp=1;b.jq=1;b.j3=(-1);b.kH=A(61);b.kE=g;b.j3=h;B(b);}f=new EY;e=N;N=e+1|0;c=new Z;c.jo=G(20);f.jD=(L(c,c.jm,e,10)).S();f.jv=b;f.j9=1;f.kv=1;f.j9=0;}c=a.kg;d=c.kI;e=!d&&!c.jJ&&c.jF==c.ls&&!(c.kl===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof F7))&&d!=(-536870788)){g=OX(a,b);if(f instanceof Dm&&!(f instanceof E5)&&!(f instanceof Do)&&!(f instanceof E3)){b=f;if(!g.fh(b.j2)){f=new T3;c=b.j2;i=b.jv;j
=b.kv;e=N;N=e+1|0;b=new Z;b.jo=G(20);f.jD=(L(b,b.jm,e,10)).S();f.jv=i;f.j2=c;f.kv=j;f.kj=c;c.e3(f);}}if((g.fi()&65535)!=43)f.e3(g);else f.e3(g.j2);}else{if(f===null)return null;f.e3(b);}if((f.fi()&65535)!=43)return f;return f.j2;},
MN=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kg;e=d.kI;if(c!==null&&!(c instanceof Cs)){switch(e){case -2147483606:Bp(d);d=new U7;f=N;N=f+1|0;g=new Z;g.jo=G(20);d.jD=(L(g,g.jm,f,10)).S();d.jv=b;d.j2=c;d.kv=e;DG();c.e3(Hy);return d;case -2147483605:Bp(d);d=new Pk;h=N;N=h+1|0;g=new Z;g.jo=G(20);d.jD=(L(g,g.jm,h,10)).S();d.jv=b;d.j2=c;d.kv=(-2147483606);DG();c.e3(Hy);return d;case -2147483585:Bp(d);d=new O6;h=N;N=h+1|0;g=new Z;BA(g);g.jo=G(20);d.jD=(L(g,g.jm,h,10)).S();d.jv=b;d.j2=c;d.kv=(-536870849);DG();c.e3(Hy);return d;case -2147483525:g
=new NI;i=d.kl;Bp(d);d=i;f=a.nM+1|0;a.nM=f;j=N;N=j+1|0;i=new Z;BA(i);i.jo=G(20);g.jD=(L(i,i.jm,j,10)).S();g.jv=b;g.j2=c;g.kv=(-536870849);g.m6=d;g.ml=f;DG();c.e3(Hy);return g;case -1073741782:case -1073741781:Bp(d);d=new QN;f=N;N=f+1|0;g=new Z;g.jo=G(20);d.jD=(L(g,g.jm,f,10)).S();d.jv=b;d.j2=c;d.kv=e;c.e3(d);return d;case -1073741761:Bp(d);d=new P4;h=N;N=h+1|0;g=new Z;BA(g);g.jo=G(20);d.jD=(L(g,g.jm,h,10)).S();d.jv=b;d.j2=c;d.kv=(-536870849);c.e3(b);return d;case -1073741701:g=new SX;i=d.kl;Bp(d);d=i;h=a.nM
+1|0;a.nM=h;j=N;N=j+1|0;i=new Z;BA(i);i.jo=G(20);g.jD=(L(i,i.jm,j,10)).S();g.jv=b;g.j2=c;g.kv=(-536870849);g.m6=d;g.ml=h;c.e3(g);return g;case -536870870:case -536870869:Bp(d);if(c.fi()!=(-2147483602)){d=new Do;f=N;N=f+1|0;g=new Z;g.jo=G(20);d.jD=(L(g,g.jm,f,10)).S();d.jv=b;d.j2=c;d.kv=e;}else{h=a.lk;if((h&32)!=32?0:1){d=new QO;f=N;N=f+1|0;g=new Z;g.jo=G(20);d.jD=(L(g,g.jm,f,10)).S();d.jv=b;d.j2=c;d.kv=e;}else{d=new Op;if(!(h&1)){g=FJ;if(g===null){g=new IY;FJ=g;}}else{g=FW;if(g===null){g=new IX;FW=g;}}f=N;N
=f+1|0;i=new Z;i.jo=G(20);d.jD=(L(i,i.jm,f,10)).S();d.jv=b;d.j2=c;d.kv=e;d.qS=g;}}c.e3(d);return d;case -536870849:Bp(d);d=new Gs;h=N;N=h+1|0;g=new Z;g.jo=G(20);d.jD=(L(g,g.jm,h,10)).S();d.jv=b;d.j2=c;d.kv=(-536870849);c.e3(b);return d;case -536870789:g=new FL;i=d.kl;Bp(d);d=i;h=a.nM+1|0;a.nM=h;j=N;N=j+1|0;i=new Z;i.jo=G(20);g.jD=(L(i,i.jm,j,10)).S();g.jv=b;g.j2=c;g.kv=(-536870849);g.m6=d;g.ml=h;c.e3(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:Bp(d);d=new U9;f
=N;N=f+1|0;c=new Z;c.jo=G(20);d.jD=(L(c,c.jm,f,10)).S();d.jv=b;d.j2=i;d.kv=e;d.kj=i;i.jv=d;return d;case -2147483585:Bp(d);c=new TY;h=N;N=h+1|0;d=new Z;BA(d);d.jo=G(20);c.jD=(L(d,d.jm,h,10)).S();c.jv=b;c.j2=i;c.kv=(-2147483585);c.kj=i;return c;case -2147483525:c=new OW;g=d.kl;Bp(d);d=g;h=N;N=h+1|0;g=new Z;BA(g);g.jo=G(20);c.jD=(L(g,g.jm,h,10)).S();c.jv=b;c.j2=i;c.kv=(-2147483525);c.kj=i;c.os=d;return c;case -1073741782:case -1073741781:Bp(d);d=new PW;f=N;N=f+1|0;c=new Z;c.jo=G(20);d.jD=(L(c,c.jm,f,10)).S();d.jv
=b;d.j2=i;d.kv=e;d.kj=i;i.jv=d;return d;case -1073741761:Bp(d);c=new Sn;h=N;N=h+1|0;d=new Z;BA(d);d.jo=G(20);c.jD=(L(d,d.jm,h,10)).S();c.jv=b;c.j2=i;c.kv=(-1073741761);c.kj=i;return c;case -1073741701:c=new Qx;g=d.kl;Bp(d);d=g;h=N;N=h+1|0;g=new Z;BA(g);g.jo=G(20);c.jD=(L(g,g.jm,h,10)).S();c.jv=b;c.j2=i;c.kv=(-1073741701);c.kj=i;c.os=d;return c;case -536870870:case -536870869:Bp(d);d=new Dm;f=N;N=f+1|0;c=new Z;c.jo=G(20);d.jD=(L(c,c.jm,f,10)).S();d.jv=b;d.j2=i;d.kv=e;d.kj=i;i.jv=d;return d;case -536870849:Bp(d);c
=new E3;h=N;N=h+1|0;d=new Z;d.jo=G(20);c.jD=(L(d,d.jm,h,10)).S();c.jv=b;c.j2=i;c.kv=(-536870849);c.kj=i;return c;case -536870789:c=new E5;g=d.kl;Bp(d);d=g;h=N;N=h+1|0;g=new Z;g.jo=G(20);c.jD=(L(g,g.jm,h,10)).S();c.jv=b;c.j2=i;c.kv=(-536870789);c.kj=i;c.os=d;return c;default:}return c;},
UD=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof F7;while(true){a:{e=a.kg;f=e.kI;if((f&(-2147418113))==(-2147483608)){Bp(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.lk=g;else{if(f!=(-1073741784))g=a.lk;c=UR(a,f,g,b);e=a.kg;if(e.kI!=(-536870871)){b=new Cc;h=e.kF;i=e.mc;b.jp=1;b.jq=1;b.j3=(-1);b.kH=A(61);b.kE=h;b.j3=i;B(b);}Bp(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.pa<j){c=new Cc;h=e.kF;i=e.mc;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=h;c.j3=i;B(c);}Bp(e);g=a.lH+1|0;a.lH=g;i=a.lk;if(!((i&2)!=2?0:1)){c=new T7;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.pD=j;c.oy=g;}else if(!((i&64)!=64?0:1)){c=new Gj;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.pD=j;c.oy=g;}else{c=new Qq;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.pD=j;c.oy=g;}a.r9.data[j].r7=1;a.tW=1;break a;case -2147483583:break;case -2147483582:Bp(e);c
=new Kr;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.tg=0;break a;case -2147483577:Bp(e);c=new Ol;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();break a;case -2147483558:Bp(e);c=new ME;j=a.lH+1|0;a.lH=j;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.oX=j;break a;case -2147483550:Bp(e);c=new Kr;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.tg=1;break a;case -2147483526:Bp(e);c=new Ub;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();break a;case -536870876:break b;case -536870866:Bp(e);i
=a.lk;if((i&32)!=32?0:1){c=new T9;i=N;N=i+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,i,10)).S();break a;}c=new OQ;if(!(i&1)){h=FJ;if(h===null){h=new IY;FJ=h;}}else{h=FW;if(h===null){h=new IX;FW=h;}}k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.sD=h;break a;case -536870821:Bp(e);i=0;c=a.kg;if(c.kI==(-536870818)){i=1;Bp(c);}c=Lh(a,GF(a,i));c.e3(b);h=a.kg;k=h.kI;if(k!=(-536870819)){b=new Cc;e=h.kF;i=h.mc;b.jp=1;b.jq=1;b.j3=(-1);b.kH=A(61);b.kE=e;b.j3=i;B(b);}h.nb=1;h.jJ=k;h.m$=h.kl;h.jF=h.pT;h.pT=h.mc;Bp(h);Bp(a.kg);break a;case -536870818:break c;case 0:c
=e.kl;h=c;if(h!==null)c=Lh(a,h);else{if(!f&&!e.jJ&&e.jF==e.ls&&!(c===null?0:1)?1:0){c=new EY;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.jv=b;c.j9=1;c.kv=1;c.j9=0;break a;}c=new DP;j=f&65535;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.j9=1;c.lD=j;}Bp(a.kg);break a;default:if(f>=0&&!(e.kl===null?0:1)){c=UJ(a,f);Bp(a.kg);break a;}if(f==(-536870788)){c=new EY;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.jv=b;c.j9=1;c.kv=1;c.j9=0;break a;}if(f!=(-536870871)){b=new Cc;c
=e.kl;if(c===null?0:1)c=c.S();else{k=f&65535;c=new H;l=G(1);m=l.data;m[0]=k;c.jn=K(l.data,0,m.length);}e=a.kg;h=e.kF;i=e.mc;b.jp=1;b.jq=1;b.j3=(-1);b.kH=c;b.kE=h;b.j3=i;B(b);}if(d){b=new Cc;h=e.kF;i=e.mc;b.jp=1;b.jq=1;b.j3=(-1);b.kH=A(61);b.kE=h;b.j3=i;B(b);}c=new EY;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.jv=b;c.j9=1;c.kv=1;c.j9=0;break a;}Bp(e);c=new KZ;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();break a;}Bp(e);a.lH=a.lH+1|0;i=a.lk;if(!((i&8)!=8?0:1)){c=new KZ;k=N;N=k+1|0;e
=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();break a;}c=new NQ;if(!(i&1)){h=FJ;if(h===null){h=new IY;FJ=h;}}else{h=FW;if(h===null){h=new IX;FW=h;}}k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.uS=h;break a;}Bp(e);j=a.lH+1|0;a.lH=j;i=a.lk;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new RE;i=N;N=i+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,i,10)).S();c.q$=j;}else{c=new Nh;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.po=j;}}else if((i&1)!=1?0:1){c=new TZ;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,
k,10)).S();c.q3=j;}else{c=new ME;k=N;N=k+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,k,10)).S();c.oX=j;}}}if(f!=(-16777176))break;}return c;},
GF=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new Cz;d=a.lk;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bf;f.jC=U(64);c.jH=f;f=new Bf;f.jC=U(2);c.jK=f;c.q8=e;c.rU=d;Ex(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.kg;b=k.kI;if(!b&&!k.jJ&&k.jF==k.ls&&!(k.kl===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)CR(c,g);f=a.kg;Bp(f);g=f.nB;f=a.kg;if(f.kI!=(-536870874)){g=38;break d;}if(f.jJ==(-536870821)){Bp(f);h=1;g=(-1);break d;}Bp(f);if(j){c=GF(a,0);break d;}if(a.kg.kI
==(-536870819))break d;Ug(c,GF(a,0));break d;case -536870867:if(!j){b=k.jJ;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){Bp(k);k=a.kg;d=k.kI;if(k.kl===null?0:1)break c;if(d<0){b=k.jJ;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AD4(d))break e;d=d&65535;break e;}catch($$e){$$je=Br($$e);if($$je instanceof Ca){break b;}else{throw $$e;}}}try{BJ(c,g,d);}catch($$e){$$je=Br($$e);if($$je instanceof Ca){break b;}else{throw $$e;}}Bp(a.kg);g=(-1);break d;}}if(g>=0)CR(c,g);g=45;Bp(a.kg);break d;case -536870821:if
(g>=0){CR(c,g);g=(-1);}Bp(a.kg);e=0;f=a.kg;if(f.kI==(-536870818)){Bp(f);e=1;}if(!h)VE(c,GF(a,e));else Ug(c,GF(a,e));h=0;Bp(a.kg);break d;case -536870819:break;case -536870818:if(g>=0)CR(c,g);g=94;Bp(a.kg);break d;case 0:if(g>=0)CR(c,g);f=a.kg.kl;if(f===null)g=0;else{ARl(c,f);g=(-1);}Bp(a.kg);break d;default:if(g>=0)CR(c,g);f=a.kg;Bp(f);g=f.nB;break d;}if(g>=0)CR(c,g);g=93;Bp(a.kg);}j=0;}c=new Cc;l=k.kF;g=k.mc;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=l;c.j3=g;B(c);}c=new Cc;k=a.kg;l=k.kF;g=k.mc;c.jp=1;c.jq=1;c.j3
=(-1);c.kH=A(61);c.kE=l;c.j3=g;B(c);}if(!i){if(g>=0)CR(c,g);return c;}c=new Cc;l=k.kF;b=k.mc-1|0;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=l;c.j3=b;B(c);},
UJ=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.lk;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Jw;b=b&65535;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.j9=1;e.ry=b;e.rX=FI(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Nd;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.j9=1;e.j9=2;if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}b=Cr(BO,b);if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null
?W(BC.value):null)));}e.sz=Cr(BP,b);return e;}if(b<=57343&&b>=56320?1:0){e=new He;b=b&65535;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.nN=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Hm;b=b&65535;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.ny=b;return e;}e=new MH;b=b&65535;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.j9=1;if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}b=Cr(BO,b)&65535;if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value
!==null?W(BC.value):null)));}e.qs=Cr(BP,b)&65535;return e;}}if(c){e=new Ea;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.j9=1;e.j9=2;e.oG=b;h=(EO(b)).data;e.oB=h[0];e.oe=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new He;b=b&65535;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.nN=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Hm;b=b&65535;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.ny=b;return e;}e=new DP;b=b&65535;f=N;N=f+1|0;g=new Z;g.jo=G(20);e.jD=(L(g,g.jm,f,10)).S();e.j9
=1;e.lD=b;return e;},
Lh=(a,b)=>{let c,d,e,f,g,h;if(!AHE(b)){if(b.kn){if(!b.fr()){c=new Dx;d=N;N=d+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,d,10)).S();c.lN=b.fs();c.o2=b.j0;return c;}c=new Jz;d=N;N=d+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,d,10)).S();c.lN=b.fs();c.o2=b.j0;return c;}if(b.fr()){c=new J_;d=N;N=d+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,d,10)).S();c.j9=1;c.qX=b.fs();c.st=b.j0;return c;}c=new DX;d=N;N=d+1|0;e=new Z;e.jo=G(20);c.jD=(L(e,e.jm,d,10)).S();c.j9=1;c.mt=b.fs();c.sW=b.j0;return c;}c=XI(b);e=new Np;d=N;N=d+1|0;f=new Z;f.jo
=G(20);e.jD=(L(f,f.jm,d,10)).S();e.qT=c;e.rM=c.j0;if(b.kn){if(!b.fr()){c=new GT;f=new Dx;b=H2(b);d=N;N=d+1|0;g=new Z;g.jo=G(20);f.jD=(L(g,g.jm,d,10)).S();f.lN=b;f.o2=b.j0;d=N;N=d+1|0;b=new Z;b.jo=G(20);c.jD=(L(b,b.jm,d,10)).S();c.ou=f;c.on=e;return c;}c=new GT;f=new Jz;g=H2(b);h=N;N=h+1|0;b=new Z;b.jo=G(20);f.jD=(L(b,b.jm,h,10)).S();f.lN=g;f.o2=g.j0;d=N;N=d+1|0;b=new Z;b.jo=G(20);c.jD=(L(b,b.jm,d,10)).S();c.ou=f;c.on=e;return c;}if(b.fr()){c=new GT;f=new J_;b=H2(b);d=N;N=d+1|0;g=new Z;g.jo=G(20);f.jD=(L(g,g.jm,
d,10)).S();f.j9=1;f.qX=b;f.st=b.j0;d=N;N=d+1|0;b=new Z;b.jo=G(20);c.jD=(L(b,b.jm,d,10)).S();c.ou=f;c.on=e;return c;}c=new GT;f=new DX;b=H2(b);d=N;N=d+1|0;g=new Z;g.jo=G(20);f.jD=(L(g,g.jm,d,10)).S();f.j9=1;f.mt=b;f.sW=b.j0;d=N;N=d+1|0;b=new Z;b.jo=G(20);c.jD=(L(b,b.jm,d,10)).S();c.ou=f;c.on=e;return c;},
FI=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let Mw=E(0);
function Rs(){let a=this;C.call(a);a.wU=null;a.vL=null;a.q2=null;a.nc=null;a.qP=0;a.si=0;}
let Nl=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.q2.jn.length;if(b>=0&&b<=c){d=a.nc;d.nG=0;d.qe=2;e=d.k1.data;f=0;g=e.length;if(f>g){d=new Bj;X(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.kw.data;f=0;g=e.length;if(f>g){d=new Bj;X(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.nk=d.l1;d.qe=1;d.nk=b;c=d.qh;if(c<0)c=b;d.qh=c;b=a.vL.fv(b,a.q2,d);if(b==(-1))a.nc.lS=1;if(b>=0){d=a.nc;b=d.nG;if(b){e=d.k1.data;if(e[0]==(-1)){f=d.nk;e[0]=f;e[1]=f;}if(!b){d=new B5;d.jp=1;d.jq=1;Bn(d);B(d);}if(0<d.oM){d.qh=e[1];return 1;}d=new I;i
=new J;BA(i);i.jo=G(16);L(i,i.jm,0,10);j=new H;e=i.jo;k=e.data;c=i.jm;f=k.length;if(c>=0&&c<=(f-0|0)){j.jn=K(e.data,0,c);d.jp=1;d.jq=1;d.jr=j;B(d);}d=new I;d.jp=1;d.jq=1;B(d);}}a.nc.nk=(-1);return 0;}d=new I;i=new J;i.jo=G(16);L(i,i.jm,b,10);j=new H;e=i.jo;k=e.data;c=i.jm;f=k.length;if(c>=0&&c<=(f-0|0)){j.jn=K(e.data,0,c);d.jp=1;d.jq=1;d.jr=j;B(d);}d=new I;d.jp=1;d.jq=1;B(d);},
P3=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.q2.jn.length;c=a.nc;if(!c.q7)b=a.si;if(c.nk>=0&&c.qe==1){d=c.nG;if(!d){c=new B5;c.jp=1;c.jq=1;B(c);}e=Cf(0,c.oM);if(e>=0){c=new I;f=new J;f.jo=G(16);L(f,f.jm,0,10);g=new H;h=f.jo;i=h.data;b=f.jm;j=i.length;if(b>=0&&b<=(j-0|0)){g.jn=K(h.data,0,b);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}h=c.k1.data;k=h[1];c.nk=k;if(!d){c=new B5;c.jp=1;c.jq=1;B(c);}if(e>=0){c=new I;f=new J;f.jo=G(16);L(f,f.jm,0,10);g=new H;h=f.jo;i=h.data;b=f.jm;j=i.length;if(b>=0&&b<=(j-0|0))
{g.jn=K(h.data,0,b);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}j=h[1];if(!d){c=new B5;c.jp=1;c.jq=1;B(c);}if(e<0){if(j==h[0])c.nk=k+1|0;l=c.nk;return l<=b&&Nl(a,l)?1:0;}c=new I;f=new J;f.jo=G(16);L(f,f.jm,0,10);g=new H;h=f.jo;i=h.data;b=f.jm;j=i.length;if(b>=0&&b<=(j-0|0)){g.jn=K(h.data,0,b);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}return Nl(a,a.qP);},
Vl=(a,b,c)=>{let d,e;a.qP=(-1);a.si=(-1);a.wU=b;a.vL=b.uX;a.q2=c;a.qP=0;d=c.jn.length;a.si=d;e=AN7(c,a.qP,d,b.pa,b.nM+1|0,b.lH+1|0);a.nc=e;e.oi=1;},
PH=(a,b)=>{let c=new Rs();Vl(c,a,b);return c;};
let YJ=E();
let Eh=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=Oo(AMM(b,c));}catch($$e){$$je=Br($$e);if($$je instanceof J6){d=$$je;break a;}else if($$je instanceof GU){d=$$je;break b;}else{throw $$e;}}return d;}e=new CV;if(b.jI===null)b.jI=W(b.jG.$meta.name);f=b.jI;b=new J;b.jo=G(16);F(b,b.jm,A(161));g=b.jm;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jo;i=c.data;j=b.jm;k=i.length;if(j>=0&&j<=(k-0|0)){h.jn=K(c.data,0,j);e.jp=1;e.jq=1;e.jr=h;e.le=d;B(e);}b=new I;b.jp=1;b.jq=1;B(b);}e=new CV;if(b.jI
===null)b.jI=W(b.jG.$meta.name);f=b.jI;b=new J;b.jo=G(16);F(b,b.jm,A(162));g=b.jm;if(f===null)f=A(2);F(b,g,f);F(b,b.jm,A(163));h=new H;c=b.jo;i=c.data;j=b.jm;k=i.length;if(j>=0&&j<=(k-0|0)){h.jn=K(c.data,0,j);e.jp=1;e.jq=1;e.jr=h;e.le=d;B(e);}b=new I;b.jp=1;b.jq=1;B(b);}c=(APJ(b)).data;if(c.length<=0)b=null;else{b=new Kb;b.l6=c[0];}return b;},
Ed=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=Oo(AMO(b,c));}catch($$e){$$je=Br($$e);if($$je instanceof J6){d=$$je;break a;}else if($$je instanceof GU){d=$$je;e=new CV;if(b.jI===null)b.jI=W(b.jG.$meta.name);f=b.jI;b=new J;b.jo=G(16);F(b,b.jm,A(161));g=b.jm;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jo;i=c.data;j=b.jm;k=i.length;if(j>=0&&j<=(k-0|0)){h.jn=K(c.data,0,j);e.jp=1;e.jq=1;e.jr=h;e.le=d;B(e);}b=new I;b.jp=1;b.jq=1;B(b);}else{throw $$e;}}return d;}e=new CV;if(b.jI===null)b.jI=W(b.jG.$meta.name);f=b.jI;b=new J;b.jo
=G(16);F(b,b.jm,A(164));g=b.jm;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jo;i=c.data;k=b.jm;j=i.length;if(k>=0&&k<=(j-0|0)){h.jn=K(c.data,0,k);e.jp=1;e.jq=1;e.jr=h;e.le=d;B(e);}b=new I;b.jp=1;b.jq=1;B(b);};
function Kb(){C.call(this);this.l6=null;}
let AOG=(a,b)=>{a.l6=b;},
Oo=a=>{let b=new Kb();AOG(b,a);return b;},
Eq=(a,b)=>{return;},
Fx=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=S(C,0);a:{b:{c:{try{c=AM1(a.l6,b);}catch($$e){$$je=Br($$e);if($$je instanceof Bj){c=$$je;break c;}else if($$je instanceof LL){c=$$je;break a;}else if($$je instanceof Ju){c=$$je;break b;}else if($$je instanceof NP){c=$$je;d=new CV;e=a.l6.l5;if(e.jI===null)e.jI=W(e.jG.$meta.name);e=e.jI;f=new J;f.jo=G(16);F(f,f.jm,A(165));g=f.jm;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jo;i=b.data;j=f.jm;k=i.length;if(j>=0&&j<=(k-0|0)){h.jn=K(b.data,0,j);d.jp=1;d.jq=1;d.jr=h;d.le
=c;B(d);}c=new I;c.jp=1;c.jq=1;B(c);}else{throw $$e;}}return c;}d=new CV;e=a.l6.l5;if(e.jI===null)e.jI=W(e.jG.$meta.name);e=e.jI;f=new J;f.jo=G(16);F(f,f.jm,A(166));g=f.jm;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jo;i=b.data;j=f.jm;k=i.length;if(j>=0&&j<=(k-0|0)){h.jn=K(b.data,0,j);d.jp=1;d.jq=1;d.jr=h;d.le=c;B(d);}c=new I;c.jp=1;c.jq=1;B(c);}d=new CV;e=a.l6.l5;if(e.jI===null)e.jI=W(e.jG.$meta.name);e=e.jI;f=new J;f.jo=G(16);F(f,f.jm,A(167));g=f.jm;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jo;i=b.data;j=f.jm;k
=i.length;if(j>=0&&j<=(k-0|0)){h.jn=K(b.data,0,j);d.jp=1;d.jq=1;d.jr=h;d.le=c;B(d);}c=new I;c.jp=1;c.jq=1;B(c);}d=new CV;e=a.l6.l5;if(e.jI===null)e.jI=W(e.jG.$meta.name);e=e.jI;f=new J;f.jo=G(16);F(f,f.jm,A(167));g=f.jm;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jo;i=b.data;j=f.jm;k=i.length;if(j>=0&&j<=(k-0|0)){h.jn=K(b.data,0,j);d.jp=1;d.jq=1;d.jr=h;d.le=c;B(d);}c=new I;c.jp=1;c.jq=1;B(c);};
let CV=E(Ca);
function Es(){C.call(this);this.jY=null;}
let AKD=null,L6=null,GN=null,HM=null,Pf=null,Us=null,ON=null;
let Bu=()=>{Bu=BH(Es);ZJ();};
let B9=b=>{let c,d,e,f,g,h,i;Bu();if(b===null)return null;c=b;d=W(typeof c);if(d===A(168))e=1;else if(!(A(168) instanceof H))e=0;else{f=A(168);e=d.jn!==f.jn?0:1;}a:{if(!e){if(d===A(169))e=1;else if(!(A(169) instanceof H))e=0;else{f=A(169);e=d.jn!==f.jn?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Bk]===true)return b;b=L6;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Es;h.jY=c;L6.set(c,new WeakRef(h));return h;}if(d===A(170))e=1;else if
(!(A(170) instanceof H))e=0;else{b=A(170);e=d.jn!==b.jn?0:1;}if(e){f=GN.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Es;h.jY=c;i=h;GN.set(c,new WeakRef(i));N0(Us,i,c);return h;}if(d===A(171))e=1;else if(!(A(171) instanceof H))e=0;else{b=A(171);e=d.jn!==b.jn?0:1;}if(e){f=HM.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Es;h.jY=c;i=h;HM.set(c,new WeakRef(i));N0(ON,i,c);return h;}if(d===A(172))e=1;else if
(!(A(172) instanceof H))e=0;else{b=A(172);e=d.jn!==b.jn?0:1;}if(e){f=Pf;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Es;h.jY=c;Pf=new WeakRef(h);return h;}}b=new Es;b.jY=c;return b;},
ZJ=()=>{AKD=new WeakMap();L6=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();GN=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();HM=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();Us=GN===null?null:new FinalizationRegistry(BY(new Lv,"accept"));ON=HM===null?null:new FinalizationRegistry(BY(new Lu,"accept"));},
N0=(b,c,d)=>{return b.register(c,d);};
let P_=E(0);
let JI=E();
let Hr=E(0);
let JH=E();
function S4(){let a=this;C.call(a);a.k1=null;a.kw=null;a.mP=null;a.o3=null;a.oM=0;a.nG=0;a.l1=0;a.j4=0;a.nk=0;a.q7=0;a.oi=0;a.lS=0;a.xU=0;a.qh=0;a.qe=0;}
let AIE=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.qh=(-1);h=e+1|0;a.oM=h;i=U(h*2|0);a.k1=i;j=U(g);k=j.data;a.kw=j;e=0;g=k.length;l=Cf(e,g);if(l>0){b=new Bj;b.jp=1;b.jq=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.mP=U(f);i=i.data;h=0;m=i.length;e=Cf(h,m);if(e>0){b=new Bj;b.jp=1;b.jq=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.nG=0;a.qe=2;f=0;if(e>0){b=new Bj;b.jp=1;b.jq=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bj;b.jp=1;b.jq=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.o3=b;if(c
>=0){a.l1=c;a.j4=d;}a.nk=a.l1;},
AN7=(a,b,c,d,e,f)=>{let g=new S4();AIE(g,a,b,c,d,e,f);return g;};
let Cp=E(Bj);
let J6=E(Bz);
let Ee=E(Ca);
let GU=E(Ee);
let C5=E(Bz);
function B8(){let a=this;C.call(a);a.jv=null;a.lE=0;a.jD=null;a.kv=0;}
let N=0;
let AAQ=(a,b,c,d)=>{let e;e=d.j4;while(true){if(b>e)return (-1);if(a.fD(b,c,d)>=0)break;b=b+1|0;}return b;},
ADH=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fD(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
ASf=(a,b)=>{a.kv=b;},
YW=a=>{return a.kv;},
ATn=a=>{let b,c,d,e,f,g,h,i;b=a.jD;c=a.fE();d=new J;d.jo=G(16);e=d.jm;Bd(d,e,e+1|0);d.jo.data[e]=60;f=d.jm;if(b===null)b=A(2);F(d,f,b);e=d.jm;Bd(d,e,e+1|0);d.jo.data[e]=58;f=d.jm;if(c===null)c=A(2);F(d,f,c);e=d.jm;Bd(d,e,e+1|0);g=d.jo;h=g.data;h[e]=62;b=new H;e=d.jm;i=h.length;if(e>=0&&e<=(i-0|0)){b.jn=K(g.data,0,e);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
ALT=a=>{let b,c,d,e,f,g,h,i;b=a.jD;c=a.fE();d=new J;d.jo=G(16);e=d.jm;Bd(d,e,e+1|0);d.jo.data[e]=60;f=d.jm;if(b===null)b=A(2);F(d,f,b);e=d.jm;Bd(d,e,e+1|0);d.jo.data[e]=58;f=d.jm;if(c===null)c=A(2);F(d,f,c);e=d.jm;Bd(d,e,e+1|0);g=d.jo;h=g.data;h[e]=62;b=new H;e=d.jm;i=h.length;if(e>=0&&e<=(i-0|0)){b.jn=K(g.data,0,e);return b;}b=new I;X(b);B(b);},
ATW=a=>{return a.jv;},
AOp=(a,b)=>{a.jv=b;},
AOn=(a,b)=>{return 1;},
AP1=a=>{return null;},
HO=a=>{let b;a.lE=1;b=a.jv;if(b!==null){if(!b.lE){b=b.fF();if(b!==null){a.jv.lE=1;a.jv=b;}a.jv.eZ();}else if(b instanceof FU&&b.lK.r7)a.jv=b.jv;}},
AUy=()=>{N=1;};
let L0=E();
let APM=E();
let ACP=E();
let ARp=E();
let Ki=E(0);
let Lv=E();
let AOx=(a,b)=>{let c;Bu();b=b===null?null:b instanceof Fm()?b:B9(b);c=GN;b=b===null?null:b[Bk]===true?b:b.jY;c.delete(b);};
let AEg=E();
let Lu=E();
let Xr=(a,b)=>{let c;Bu();b=b===null?null:b instanceof Fm()?b:B9(b);c=HM;b=b===null?null:b[Bk]===true?b:b.jY;c.delete(b);};
let Nb=E(0);
function G7(){let a=this;C.call(a);a.l$=null;a.l4=null;}
function Ia(){let a=this;G7.call(a);a.re=null;a.vf=0;}
function De(){let a=this;B8.call(a);a.r7=0;a.k8=0;}
let Hy=null;
let DG=()=>{DG=BH(De);AB2();};
let XR=(a,b,c,d)=>{let e,f,g;e=a.k8;f=d.k1.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.jv.fD(b,c,d);if(g<0){b=a.k8;d.k1.data[(b*2|0)+1|0]=e;}return g;},
ATi=a=>{return a.k8;},
AEb=a=>{return A(173);},
Yw=(a,b)=>{return 0;},
AB2=()=>{let b,c,d;b=new Oj;c=N;N=c+1|0;d=new Z;d.jo=G(20);b.jD=(L(d,d.jm,c,10)).S();Hy=b;};
function Sc(){let a=this;C.call(a);a.kG=null;a.kz=0;a.nb=0;a.vO=0;a.nB=0;a.kI=0;a.jJ=0;a.ls=0;a.kl=null;a.m$=null;a.jF=0;a.kq=0;a.mc=0;a.pT=0;a.kF=null;}
let PA=null,Yq=null,AMB=0;
let AOr=(a,b,c)=>{let d,e,f,g,h,i,j;a.nb=1;a.kF=b;if((c&16)>0){d=new J;d.jo=G(16);F(d,d.jm,A(174));e=0;while(true){f=Pm(b,A(175),e);if(f<0)break;g=f+2|0;h=Cv(b,e,g);F(d,d.jm,h);F(d,d.jm,A(176));e=g;}b=Cv(b,e,b.jn.length);F(d,d.jm,b);F(d,d.jm,A(175));b=new H;i=d.jo;j=i.data;e=d.jm;f=j.length;if(e>=0&&e<=(f-0|0))b.jn=K(i.data,0,e);else{b=new I;b.jp=1;b.jq=1;B(b);}}a.kG=G(b.jn.length+2|0);j=G(b.jn.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){DU(j,0,a.kG,0,b.jn.length);i=a.kG.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.ls=g;a.kz=c;Bp(a);Bp(a);return;}if(e<0)break;if(e>=b.jn.length)break;i[e]=b.jn.charCodeAt(e);e=e+1|0;}b=new T;b.jp=1;b.jq=1;B(b);},
AB_=(a,b)=>{let c=new Sc();AOr(c,a,b);return c;},
Bp=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.nB=a.kI;a.kI=a.jJ;a.kl=a.m$;a.mc=a.pT;a.pT=a.jF;a:{while(true){b=0;c=a.jF>=a.kG.data.length?0:Me(a);a.jJ=c;a.m$=null;if(a.nb==4){if(c!=92)return;c=a.jF;d=a.kG.data;if(c>=d.length)c=0;else{a.kq=c;if(a.kz&4)Cj(a);else a.jF=c+1|0;c=d[a.kq];}a.jJ=c;switch(c){case 69:break;default:a.jJ=92;a.jF=a.kq;return;}a.nb=a.vO;a.jJ=a.jF>(a.kG.data.length-2|0)?0:Me(a);}b:{c=a.jJ;if(c==92){c=a.jF>=(a.kG.data.length-2|0)?(-1):Me(a);c:{d:{a.jJ=c;switch(c){case -1:e=new Cc;f=a.kF;c=a.jF;e.jp
=1;e.jq=1;e.j3=(-1);e.kH=A(61);e.kE=f;e.j3=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.jJ
=AJh(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.nb!=1)break b;a.jJ=(-2147483648)|c;break b;case 65:a.jJ=(-2147483583);break b;case 66:a.jJ=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cc;f=a.kF;c=a.jF;e.jp=1;e.jq=1;e.j3=(-1);e.kH=A(61);e.kE=f;e.j3=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.jJ
=(-2147483577);break b;case 80:case 112:break c;case 81:a.vO=a.nb;a.nb=4;b=1;break b;case 90:a.jJ=(-2147483558);break b;case 97:a.jJ=7;break b;case 98:a.jJ=(-2147483550);break b;case 99:c=a.jF;d=a.kG.data;if(c>=(d.length-2|0)){e=new Cc;f=a.kF;e.jp=1;e.jq=1;e.j3=(-1);e.kH=A(61);e.kE=f;e.j3=c;B(e);}a.kq=c;if(a.kz&4)Cj(a);else a.jF=c+1|0;a.jJ=d[a.kq]&31;break b;case 101:a.jJ=27;break b;case 102:a.jJ=12;break b;case 110:a.jJ=10;break b;case 114:a.jJ=13;break b;case 116:a.jJ=9;break b;case 117:a.jJ=Pn(a,4);break b;case 120:a.jJ
=Pn(a,2);break b;case 122:a.jJ=(-2147483526);break b;default:}break b;}e=new H;d=a.kG;g=d.data;h=a.kq;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.jn=K(d.data,h,1);e=Un(Ib,e);if(e.nd===null)e.nd=e.fM();a.m$=e.nd;a.jJ=0;break b;}e=AIv(a);j=0;if(a.jJ==80)j=1;try{a.m$=AGn(e,j);}catch($$e){$$je=Br($$e);if($$je instanceof JF){e=new Cc;f=a.kF;c=a.jF;e.jp=1;e.jq=1;e.j3=(-1);e.kH=A(61);e.kE=f;e.j3=c;B(e);}else{throw $$e;}}a.jJ=0;}else{h=a.nb;if(h==1)switch(c){case 36:a.jJ=(-536870876);break b;case 40:d=a.kG.data;c
=a.jF;if(d[c]!=63){a.jJ=(-2147483608);break b;}a.kq=c;if(a.kz&4)Cj(a);else a.jF=c+1|0;c=a.kG.data[a.jF];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.jJ=(-134217688);k=a.jF;a.kq=k;if(a.kz&4)Cj(a);else a.jF=k+1|0;break e;default:e=new Cc;f=a.kF;c=a.jF;e.jp=1;e.jq=1;e.j3=(-1);e.kH=A(61);e.kE=f;e.j3=c;B(e);}a.jJ=(-67108824);j=a.jF;a.kq=j;if(a.kz&4)Cj(a);else a.jF=j+1|0;}else{switch(c){case 33:break;case 60:h=a.jF;a.kq=h;if(a.kz&4)Cj(a);else a.jF=h+1|0;c=a.kG.data[a.jF];h=1;break e;case 61:a.jJ
=(-536870872);j=a.jF;a.kq=j;if(a.kz&4)Cj(a);else a.jF=j+1|0;break e;case 62:a.jJ=(-33554392);j=a.jF;a.kq=j;if(a.kz&4)Cj(a);else a.jF=j+1|0;break e;default:i=AQP(a);a.jJ=i;if(i<256){a.kz=i;i=i<<16;a.jJ=i;a.jJ=(-1073741784)|i;break e;}i=i&255;a.jJ=i;a.kz=i;i=i<<16;a.jJ=i;a.jJ=(-16777176)|i;break e;}a.jJ=(-268435416);j=a.jF;a.kq=j;if(a.kz&4)Cj(a);else a.jF=j+1|0;}}if(!h)break;}break b;case 41:a.jJ=(-536870871);break b;case 42:case 43:case 63:h=a.jF;d=a.kG.data;switch(h>=d.length?42:d[h]){case 43:a.jJ=c|(-2147483648);a.kq
=h;if(a.kz&4)Cj(a);else a.jF=h+1|0;break b;case 63:a.jJ=c|(-1073741824);a.kq=h;if(a.kz&4)Cj(a);else a.jF=h+1|0;break b;default:}a.jJ=c|(-536870912);break b;case 46:a.jJ=(-536870866);break b;case 91:a.jJ=(-536870821);a.nb=2;break b;case 93:if(h!=2)break b;a.jJ=(-536870819);break b;case 94:a.jJ=(-536870818);break b;case 123:a.m$=AOM(a,c);break b;case 124:a.jJ=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.jJ=(-536870874);break b;case 45:a.jJ=(-536870867);break b;case 91:a.jJ=(-536870821);break b;case 93:a.jJ
=(-536870819);break b;case 94:a.jJ=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new I;e.jp=1;e.jq=1;B(e);},
AIv=a=>{let b,c,d,e,f,g,h,i;b=new J;b.jo=G(10);c=a.jF;d=a.kG;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new H;a.kq=c;if(a.kz&4)Cj(a);else a.jF=c+1|0;g=a.kq;if(g>=0&&1<=(f-g|0)){b.jn=K(d.data,g,1);h=new J;h.jo=G(16);F(h,h.jm,A(177));F(h,h.jm,b);b=new H;d=h.jo;e=d.data;f=h.jm;g=e.length;if(f>=0&&f<=(g-0|0)){b.jn=K(d.data,0,f);return b;}b=new I;b.jp=1;b.jq=1;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}a.kq=c;if(a.kz&4)Cj(a);else a.jF=c+1|0;c=0;a:{while(true){f=a.jF;d=a.kG.data;if(f>=(d.length-2|0))break;a.kq=f;if
(a.kz&4)Cj(a);else a.jF=f+1|0;c=d[a.kq];if(c==125)break a;f=b.jm;Bd(b,f,f+1|0);b.jo.data[f]=c;}}if(c!=125){b=new Cc;i=a.kF;c=a.jF;b.jp=1;b.jq=1;b.j3=(-1);b.kH=A(61);b.kE=i;b.j3=c;B(b);}}c=b.jm;if(!c){b=new Cc;i=a.kF;c=a.jF;b.jp=1;b.jq=1;b.j3=(-1);b.kH=A(61);b.kE=i;b.j3=c;B(b);}h=new H;d=b.jo;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.jn=K(d.data,0,c);if(h.jn.length==1){b=new J;b.jo=G(16);F(b,b.jm,A(177));F(b,b.jm,h);h=new H;d=b.jo;e=d.data;f=b.jm;g=e.length;if(f>=0&&f<=(g-0|0)){h.jn=K(d.data,0,f);return h;}b=new I;b.jp
=1;b.jq=1;B(b);}b:{c:{if(h.jn.length>3){if(h===A(177)?1:LW(h,A(177),0))break c;if(h===A(178)?1:LW(h,A(178),0))break c;}break b;}h=Cv(h,2,h.jn.length);}return h;}b=new I;b.jp=1;b.jq=1;B(b);},
AOM=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new J;c.jo=G(4);d=(-1);e=2147483647;a:{while(true){f=a.jF;g=a.kG.data;if(f>=g.length)break a;a.kq=f;if(a.kz&4)Cj(a);else a.jF=f+1|0;b=g[a.kq];if(b==125)break a;if(b==44&&d<0)try{d=J0(EG(c),10);APc(c,0,Yf(c));continue;}catch($$e){$$je=Br($$e);if($$je instanceof Cp){break;}else{throw $$e;}}h=b&65535;f=c.jm;Bd(c,f,f+1|0);c.jo.data[f]=h;}c=new Cc;i=a.kF;b=a.jF;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=i;c.j3=b;B(c);}if(b!=125){c=new Cc;i=a.kF;b=a.jF;c.jp=1;c.jq=1;c.j3=(-1);c.kH
=A(61);c.kE=i;c.j3=b;B(c);}if(c.jm>0)b:{try{e=J0(EG(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Br($$e);if($$je instanceof Cp){}else{throw $$e;}}c=new Cc;i=a.kF;b=a.jF;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=i;c.j3=b;B(c);}else if(d<0){c=new Cc;i=a.kF;b=a.jF;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=i;c.j3=b;B(c);}if((d|e|(e-d|0))<0){c=new Cc;i=a.kF;b=a.jF;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=i;c.j3=b;B(c);}f=a.jF;g=a.kG.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.jJ=(-2147483525);a.kq=f;if(a.kz
&4)Cj(a);else a.jF=f+1|0;break c;case 63:a.jJ=(-1073741701);a.kq=f;if(a.kz&4)Cj(a);else a.jF=f+1|0;break c;default:}a.jJ=(-536870789);}c=new NF;c.nH=d;c.nF=e;return c;},
AD4=b=>{return b<0?0:1;},
Pn=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new J;c.jo=G(b);d=a.kG.data.length-2|0;e=0;while(true){f=Cf(e,b);if(f>=0)break;g=a.jF;if(g>=d)break;h=a.kG;a.kq=g;if(a.kz&4)Cj(a);else a.jF=g+1|0;g=h.data[a.kq];i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=g;e=e+1|0;}if(!f)a:{try{b=J0(EG(c),16);}catch($$e){$$je=Br($$e);if($$je instanceof Cp){break a;}else{throw $$e;}}return b;}c=new Cc;j=a.kF;b=a.jF;c.jp=1;c.jq=1;c.j3=(-1);c.kH=A(61);c.kE=j;c.j3=b;B(c);},
AJh=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.kG.data;e=d.length-2|0;f=OU(d[a.jF]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.jF;a.kq=g;if(a.kz&4)Cj(a);else a.jF=g+1|0;a:{while(true){if(c>=b)break a;h=a.jF;if(h>=e)break a;i=OU(a.kG.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.jF;a.kq=g;if(a.kz&4)Cj(a);else a.jF=g+1|0;c=c+1|0;}}return f;}j=new Cc;k=a.kF;b=a.jF;j.jp=1;j.jq=1;j.j3=(-1);j.kH=A(61);j.kE=k;j.j3=b;B(j);},
AQP=a=>{let b,c,d,e,f,g,h;b=1;c=a.kz;a:while(true){d=a.jF;e=a.kG.data;if(d>=e.length){f=new Cc;g=a.kF;f.jp=1;f.jq=1;f.j3=(-1);f.kH=A(61);f.kE=g;f.j3=d;B(f);}b:{c:{switch(e[d]){case 41:a.kq=d;if(a.kz&4)Cj(a);else a.jF=d+1|0;return c|256;case 45:if(!b){h=new Cc;g=a.kF;h.jp=1;h.jq=1;h.j3=(-1);h.kH=A(61);h.kE=g;h.j3=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.kq=d;if(a.kz&4)Cj(a);else a.jF=d+1|0;}a.kq=d;if(a.kz&4)Cj(a);else a.jF=d+1|0;return c;},
Cj=a=>{let b,c,d,e;b=a.kG.data.length-2|0;a.jF=a.jF+1|0;a:while(true){c=a.jF;if(c<b){b:{c=a.kG.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CI(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.jF=a.jF+1|0;continue;}}c=a.jF;if(c>=b)break;d=a.kG.data;if(d[c]!=35)break;a.jF=c+1|0;while(true){e=a.jF;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.jF
=e+1|0;}}return c;},
AAM=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?H3([d,e]):H3([d,e,4519+f|0]);}return null;},
AKf=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
Me=a=>{let b,c,d,e,f;b=a.kG;c=a.jF;a.kq=c;if(a.kz&4)Cj(a);else a.jF=c+1|0;b=b.data;d=a.kq;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.kG.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.jF;a.kq=d;if(a.kz&4)Cj(a);else a.jF=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cc(){let a=this;Bj.call(a);a.kH=null;a.kE=null;a.j3=0;}
let APU=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(61);c=a.j3;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bj;b.jp=1;b.jq=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new H;b.jn=K(d.data,0,f);}a:{h=a.kH;i=a.kE;if(i!==null&&i.jn.length){j=a.j3;i=a.kE;k=new J;k.jo=G(16);L(k,k.jm,j,10);F(k,k.jm,A(60));j=k.jm;if(i===null)i=A(2);F(k,j,i);F(k,k.jm,A(60));F(k,k.jm,b);b=new H;d=k.jo;e=d.data;c=k.jm;f=e.length;if(c>=0&&c<=(f-0|0)){b.jn=K(d.data,0,c);break a;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);}b=A(61);}i=new J;i.jo=G(16);j
=i.jm;if(h===null)h=A(2);F(i,j,h);F(i,i.jm,b);b=new H;d=i.jo;e=d.data;c=i.jm;f=e.length;if(c>=0&&c<=(f-0|0)){b.jn=K(d.data,0,c);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
let XZ=E();
let AJ4=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bj;f.jp=1;f.jq=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
ALK=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bj;f.jp=1;f.jq=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=Cf(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
Tq=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let J5=E(0);
let Lj=E();
let ABQ=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.ki;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BI;b.jG=f;c=b;f.classObject=c;}}b=D1(b);if(b===null){b=new C5;b.jp=1;b.jq=1;B(b);}if(b===V(Bq)){b=new Bj;b.jp=1;b.jq=1;B(b);}if(d<0){b=new DH;b.jp=1;b.jq=1;B(b);}b=DF(b.jG,d);}e=0;g=0;h=a.lU;i=a.ki;d=Cf(h,h);a:{while(true){j=Cf(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new Mv;b.jp=1;b.jq=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.k0.data[g];e=h;g=k;}return b;}b=new I;b.jp=1;b.jq=1;B(b);};
let Q0=E(0);
let Nu=E(0);
function J7(){Lj.call(this);this.lU=0;}
let Ss=E(0);
function J4(){let a=this;J7.call(a);a.k0=null;a.ki=0;}
let GE=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.k0;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BI;i.jG=h;j=i;h.classObject=j;}}h=D1(i);if(h===null){i=new C5;i.jp=1;i.jq=1;B(i);}if(h===V(Bq)){i=new Bj;i.jp=1;i.jq=1;B(i);}if(f<0){i=new DH;i.jp=1;i.jq=1;B(i);}j=DF(h.jG,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.k0=j;}},
AE_=(a,b,c)=>{let d,e,f;if(b>=0){d=a.ki;if(b<=d){GE(a,d+1|0);d=a.ki;e=d;while(e>b){f=a.k0.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.k0.data[b]=c;a.ki=d+1|0;a.lU=a.lU+1|0;return;}}c=new I;c.jp=1;c.jq=1;B(c);},
S_=(a,b)=>{let c,d,e,f;if(b>=0){c=a.ki;if(b<c){d=a.k0.data;e=d[b];c=c-1|0;a.ki=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.lU=a.lU+1|0;return e;}}e=new I;e.jp=1;e.jq=1;B(e);};
let QW=E(De);
let WC=(a,b,c,d)=>{let e,f;e=a.k8;f=d.kw.data;f[e]=b-f[e]|0;return a.jv.fD(b,c,d);},
AAu=a=>{return A(179);},
AMj=(a,b)=>{return 0;};
let UM=E(De);
let Z5=(a,b,c,d)=>{return b;},
AFq=a=>{return A(180);};
let Pq=E(De);
let YT=(a,b,c,d)=>{let e;e=a.k8;if(d.kw.data[e]!=b)b=(-1);return b;},
AOg=a=>{return A(181);};
function RB(){De.call(this);this.tQ=0;}
let W1=(a,b,c,d)=>{let e,f;e=a.k8;f=d.kw.data;f[e]=b-f[e]|0;a.tQ=b;return b;},
AMV=a=>{return A(182);},
AKe=(a,b)=>{return 0;};
let F7=E(De);
let AOT=(a,b,c,d)=>{if(d.qe!=1&&b!=d.j4)return (-1);d.nG=1;d.k1.data[1]=b;return b;},
Zc=a=>{return A(183);};
function Cs(){B8.call(this);this.j9=0;}
let AQU=(a,b,c,d)=>{let e;if((b+a.fW()|0)>d.j4){d.lS=1;return (-1);}e=a.fX(b,c);if(e<0)return (-1);return a.jv.fD(b+e|0,c,d);},
ANw=a=>{return a.j9;},
AFh=(a,b)=>{return 1;};
let EY=E(Cs);
let AMH=(a,b,c)=>{return 0;},
ACd=(a,b,c,d)=>{let e,f,g;e=d.j4;f=d.l1;a:{b:{while(true){g=Cf(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.jn.length)break b;if(((c.jn.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.jn.length)break a;if((c.jn.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.jv.fD(b,c,d)>=0)break;b=b+1|0;}return b;}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);},
ZM=(a,b,c,d,e)=>{let f,g,h;f=e.j4;g=e.l1;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.jn.length)break b;if(((d.jn.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.jn.length)break a;if((d.jn.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.jv.fD(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new T;d.jp=1;d.jq=1;B(d);}d=new T;d.jp=1;d.jq=1;B(d);},
AEd=a=>{return A(184);},
WT=(a,b)=>{return 0;};
function Cg(){let a=this;B8.call(a);a.kL=null;a.lK=null;a.ky=0;}
let ADJ=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.kL;if(e===null)return (-1);f=a.ky;g=d.k1.data;h=f*2|0;i=g[h];g[h]=b;f=e.ki;j=0;a:{while(true){if(j>=f){b=a.ky;d.k1.data[b*2|0]=i;return (-1);}e=a.kL;if(j<0)break a;if(j>=e.ki)break a;h=e.k0.data[j].fD(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new I;c.jp=1;c.jq=1;B(c);},
AJ8=(a,b)=>{a.lK.jv=b;},
AFz=a=>{return A(185);},
AGP=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.kL;if(c!==null){d=0;e=c.lU;f=c.ki;while(true){if(!(d>=f?0:1))break b;if(e<c.lU){b=new Mv;b.jp=1;b.jq=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.ki)break a;if(c.k0.data[d].fh(b))break;d=g;}return 1;}}return 0;}b=new I;b.jp=1;b.jq=1;B(b);},
ALb=(a,b)=>{let c,d,e;c=a.ky;d=b.k1.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
ZF=a=>{let b,c,d,e;a.lE=1;b=a.lK;if(b!==null&&!b.lE)HO(b);a:{b:{b=a.kL;if(b!==null){c=b.ki;d=0;while(true){if(d>=c)break b;b=a.kL;if(d<0)break a;if(d>=b.ki)break a;b=b.k0.data[d];e=b.fF();if(e===null)e=b;else{b.lE=1;S_(a.kL,d);AE_(a.kL,d,e);}if(!e.lE)e.eZ();d=d+1|0;}}}if(a.jv!==null)HO(a);return;}b=new I;b.jp=1;b.jq=1;B(b);};
let Jj=E(Cg);
let AJH=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ky;f=d.kw.data;g=f[e];f[e]=b;h=a.kL.ki;e=0;a:{while(true){if(e>=h){b=a.ky;d.kw.data[b]=g;return (-1);}i=a.kL;if(e<0)break a;if(e>=i.ki)break a;j=i.k0.data[e].fD(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new I;c.jp=1;c.jq=1;B(c);},
AG2=a=>{return A(186);},
ALL=(a,b)=>{let c;c=a.ky;return !b.kw.data[c]?0:1;};
let D6=E(Jj);
let AAY=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ky;f=d.kw.data;g=f[e];f[e]=b;h=a.kL.ki;i=0;a:{while(i<h){j=a.kL;if(i<0)break a;if(i>=j.ki)break a;if(j.k0.data[i].fD(b,c,d)>=0)return a.jv.fD(a.lK.tQ,c,d);i=i+1|0;}b=a.ky;d.kw.data[b]=g;return (-1);}c=new I;c.jp=1;c.jq=1;B(c);},
ALk=(a,b)=>{a.jv=b;},
WN=a=>{return A(186);};
let Nk=E(D6);
let AJY=(a,b,c,d)=>{let e,f,g;e=a.kL.ki;f=0;a:{while(f<e){g=a.kL;if(f<0)break a;if(f>=g.ki)break a;if(g.k0.data[f].fD(b,c,d)>=0)return a.jv.fD(b,c,d);f=f+1|0;}return (-1);}c=new I;c.jp=1;c.jq=1;B(c);},
AOs=(a,b)=>{return 0;},
APY=a=>{return A(187);};
let TP=E(D6);
let Yl=(a,b,c,d)=>{let e,f,g;e=a.kL.ki;f=0;a:{while(true){if(f>=e)return a.jv.fD(b,c,d);g=a.kL;if(f<0)break a;if(f>=g.ki)break a;if(g.k0.data[f].fD(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.jp=1;c.jq=1;B(c);},
ANM=(a,b)=>{return 0;},
ADt=a=>{return A(188);};
let Qw=E(D6);
let Zw=(a,b,c,d)=>{let e,f,g,h,i;e=a.kL.ki;f=d.q7?0:d.l1;a:{b:{g=a.jv.fD(b,c,d);if(g>=0){h=a.ky;d.kw.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.kL;if(h<0)break a;if(h>=i.ki)break a;if(i.k0.data[h].fZ(f,b,c,d)>=0){b=a.ky;d.kw.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new I;c.jp=1;c.jq=1;B(c);},
ARr=(a,b)=>{return 0;},
AJd=a=>{return A(189);};
let RY=E(D6);
let VM=(a,b,c,d)=>{let e,f,g;e=a.kL.ki;f=a.ky;d.kw.data[f]=b;f=0;a:{while(true){if(f>=e)return a.jv.fD(b,c,d);g=a.kL;if(f<0)break a;if(f>=g.ki)break a;if(g.k0.data[f].fZ(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.jp=1;c.jq=1;B(c);},
AL4=(a,b)=>{return 0;},
YU=a=>{return A(190);};
function FU(){Cg.call(this);this.l7=null;}
let Wi=(a,b,c,d)=>{let e,f,g;e=a.ky;f=d.k1.data;e=e*2|0;g=f[e];f[e]=b;e=a.l7.fD(b,c,d);if(e>=0)return e;e=a.ky;d.k1.data[e*2|0]=g;return (-1);},
AHd=(a,b,c,d)=>{let e;e=a.l7.fv(b,c,d);if(e>=0){b=a.ky;d.k1.data[b*2|0]=e;}return e;},
AMq=(a,b,c,d,e)=>{let f;f=a.l7.fZ(b,c,d,e);if(f>=0){b=a.ky;e.k1.data[b*2|0]=f;}return f;},
AGF=(a,b)=>{return a.l7.fh(b);},
AJ$=a=>{let b,c,d,e,f;b=new NH;c=a.l7;d=a.lK;e=N;N=e+1|0;f=new Z;f.jo=G(20);b.jD=(L(f,f.jm,e,10)).S();b.l7=c;b.lK=d;b.ky=d.k8;a.jv=b;return b;},
AP$=a=>{let b;a.lE=1;b=a.lK;if(b!==null&&!b.lE)HO(b);b=a.l7;if(b!==null&&!b.lE){b=b.fF();if(b!==null){a.l7.lE=1;a.l7=b;}a.l7.eZ();}};
let AIx=E();
let IR=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(AR5());}return b.data.length;},
DF=(b,c)=>{if(b.$meta.primitive){switch(b){};}return S(b,c);};
let I_=E(Bz);
let Ho=E();
function Bh(){let a=this;Ho.call(a);a.j0=0;a.lC=0;a.jH=null;a.rw=null;a.rZ=null;a.kn=0;}
let Ib=null;
let Yo=a=>{return null;},
Xk=a=>{return a.jH;},
AHE=a=>{return !a.lC?(HK(a.jH,0)>=2048?0:1):AKE(a.jH,0)>=2048?0:1;},
ASM=a=>{return a.kn;},
ANl=a=>{return a;},
XI=a=>{let b,c;if(a.rZ===null){b=a.f2();c=new T1;c.x1=a;c.t0=b;b=new Bf;b.jC=U(64);c.jH=b;a.rZ=c;Ex(c,a.lC);}return a.rZ;},
H2=a=>{let b,c;if(a.rw===null){b=a.f2();c=new T0;c.xM=a;c.vE=b;c.vS=a;b=new Bf;b.jC=U(64);c.jH=b;a.rw=c;Ex(c,a.j0);a.rw.kn=a.kn;}return a.rw;},
APW=a=>{return 0;},
Ex=(a,b)=>{let c;c=a.j0;if(c^b){a.j0=c?0:1;a.lC=a.lC?0:1;}if(!a.kn)a.kn=1;return a;},
ASx=a=>{return a.j0;},
AGn=(b,c)=>{b=Un(Ib,b);if(!c&&b.nd===null)b.nd=b.fM();else if(c&&b.oS===null)b.oS=Ex(b.fM(),1);return c?b.oS:b.nd;},
ASh=()=>{Ib=new Mz;};
function JF(){let a=this;Bz.call(a);a.yd=null;a.x4=null;}
function Cz(){let a=this;Bh.call(a);a.q8=0;a.rU=0;a.pc=0;a.sv=0;a.mT=0;a.mi=0;a.jK=null;a.kp=null;}
let CR=(a,b)=>{let c;a:{if(a.q8){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.mT){M6(a.jK,FI(b&65535));break a;}L2(a.jK,FI(b&65535));break a;}if(a.rU&&b>128){a.pc=1;if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}b=Cr(BO,b);if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}b=Cr(BP,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.sv)M6(a.jH,b-55296|0);else L2(a.jH,b-55296|0);}if(a.mT)M6(a.jK,b);else L2(a.jK,
b);if(!a.kn&&(b>=65536&&b<=1114111?1:0))a.kn=1;return a;},
ARl=(a,b)=>{let c,d,e;if(!a.kn&&b.kn)a.kn=1;if(a.sv){if(!b.lC)Gv(a.jH,b.f2());else DE(a.jH,b.f2());}else if(!b.lC)Go(a.jH,b.f2());else{FZ(a.jH,b.f2());DE(a.jH,b.f2());a.lC=a.lC?0:1;a.sv=1;}if(!a.mi&&b.f9()!==null){if(a.mT){if(!b.j0)Gv(a.jK,b.f9());else DE(a.jK,b.f9());}else if(!b.j0)Go(a.jK,b.f9());else{FZ(a.jK,b.f9());DE(a.jK,b.f9());a.j0=a.j0?0:1;a.mT=1;}}else{c=a.j0;d=a.kp;if(d!==null){if(!c){e=new OF;e.wM=a;e.v6=c;e.vN=d;e.vH=b;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}else{e=new OG;e.yj=a;e.uN=c;e.uI=d;e.uy=b;b
=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}}else{if(c&&!a.mT&&(a.jK.kO?0:1)){d=new OB;d.xy=a;d.uK=b;b=new Bf;b.jC=U(64);d.jH=b;a.kp=d;}else if(!c){d=new Oy;d.sq=a;d.rK=c;d.t$=b;b=new Bf;b.jC=U(64);d.jH=b;a.kp=d;}else{d=new Oz;d.s0=a;d.rP=c;d.vK=b;b=new Bf;b.jC=U(64);d.jH=b;a.kp=d;}a.mi=1;}}return a;},
BJ=(a,b,c)=>{let d;if(b>c){d=new Bj;d.jp=1;d.jq=1;B(d);}a:{b:{if(!a.q8){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CR(a,b);b=b+1|0;}}if(a.mT)Wz(a.jK,b,c+1|0);else Ik(a.jK,b,c+1|0);}return a;},
VE=(a,b)=>{let c,d,e,f;if(!a.kn&&b.kn)a.kn=1;if(b.pc)a.pc=1;c=a.lC;if(!(c^b.lC)){if(!c)Go(a.jH,b.jH);else DE(a.jH,b.jH);}else if(c)Gv(a.jH,b.jH);else{FZ(a.jH,b.jH);DE(a.jH,b.jH);a.lC=1;}a:{if(!a.mi){d=b.mi;if((!d?b.jK:null)!==null){c=a.j0;if(!(c^b.j0)){if(!c){Go(a.jK,!d?b.jK:null);break a;}DE(a.jK,!d?b.jK:null);break a;}if(c){Gv(a.jK,!d?b.jK:null);break a;}FZ(a.jK,!d?b.jK:null);DE(a.jK,!b.mi?b.jK:null);a.j0=1;break a;}}c=a.j0;e=a.kp;if(e!==null){if(!c){f=new Ot;f.ww=a;f.vu=c;f.vJ=e;f.vV=b;b=new Bf;b.jC=U(64);f.jH
=b;a.kp=f;}else{f=new OY;f.wZ=a;f.vT=c;f.tN=e;f.tS=b;b=new Bf;b.jC=U(64);f.jH=b;a.kp=f;}}else{if(!a.mT&&(a.jK.kO?0:1)){if(!c){e=new OD;e.yl=a;e.uw=b;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}else{e=new OE;e.w3=a;e.vQ=b;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}}else if(!c){e=new OH;e.vv=a;e.uV=b;e.uJ=c;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}else{e=new OI;e.u4=a;e.va=b;e.vh=c;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}a.mi=1;}}},
Ug=(a,b)=>{let c,d,e,f;if(!a.kn&&b.kn)a.kn=1;if(b.pc)a.pc=1;c=a.lC;if(!(c^b.lC)){if(!c)DE(a.jH,b.jH);else Go(a.jH,b.jH);}else if(!c)Gv(a.jH,b.jH);else{FZ(a.jH,b.jH);DE(a.jH,b.jH);a.lC=0;}a:{if(!a.mi){d=b.mi;if((!d?b.jK:null)!==null){c=a.j0;if(!(c^b.j0)){if(!c){DE(a.jK,!d?b.jK:null);break a;}Go(a.jK,!d?b.jK:null);break a;}if(!c){Gv(a.jK,!d?b.jK:null);break a;}FZ(a.jK,!d?b.jK:null);DE(a.jK,!b.mi?b.jK:null);a.j0=0;break a;}}c=a.j0;e=a.kp;if(e!==null){if(!c){f=new Ov;f.wL=a;f.vw=c;f.tZ=e;f.uM=b;b=new Bf;b.jC=U(64);f.jH
=b;a.kp=f;}else{f=new Ow;f.w9=a;f.vj=c;f.tJ=e;f.vt=b;b=new Bf;b.jC=U(64);f.jH=b;a.kp=f;}}else{if(!a.mT&&(a.jK.kO?0:1)){if(!c){e=new Or;e.w5=a;e.um=b;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}else{e=new Os;e.yg=a;e.un=b;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}}else if(!c){e=new Ox;e.wi=a;e.v5=b;e.u9=c;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}else{e=new Oq;e.u8=a;e.vn=b;e.uO=c;b=new Bf;b.jC=U(64);e.jH=b;a.kp=e;}a.mi=1;}}},
ZS=(a,b)=>{let c;c=a.kp;if(c!==null)return a.j0^c.ga(b);return a.j0^Cy(a.jK,b);},
ARm=a=>{if(!a.mi)return a.jK;return null;},
AB0=a=>{return a.jH;},
AOe=a=>{let b,c;if(a.kp!==null)return a;b=!a.mi?a.jK:null;c=new Ou;c.wr=a;c.qO=b;b=new Bf;b.jC=U(64);c.jH=b;return Ex(c,a.j0);},
AIH=a=>{let b,c,d,e,f,g,h,i,j,k;b=new J;b.jo=G(16);c=HK(a.jK,0);while(c>=0){d=(EO(c)).data;e=0;f=d.length;g=b.jm;Bd(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jo.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jm;Bd(b,g,g+1|0);b.jo.data[g]=124;c=HK(a.jK,c+1|0);}e=b.jm;if(e>0)T_(b,e-1|0);k=new H;d=b.jo;h=d.data;e=b.jm;g=h.length;if(e>=0&&e<=(g-0|0)){k.jn=K(d.data,0,e);return k;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
ACq=a=>{return a.pc;};
function El(){B8.call(this);this.j2=null;}
let AUD=a=>{return a.j2;},
AMs=(a,b)=>{return !a.j2.fh(b)&&!a.jv.fh(b)?0:1;},
AOO=(a,b)=>{return 1;},
AHT=a=>{let b;a.lE=1;b=a.jv;if(b!==null&&!b.lE){b=b.fF();if(b!==null){a.jv.lE=1;a.jv=b;}a.jv.eZ();}b=a.j2;if(b!==null){if(!b.lE){b=b.fF();if(b!==null){a.j2.lE=1;a.j2=b;}a.j2.eZ();}else if(b instanceof FU&&b.lK.r7)a.j2=b.jv;}};
function Dm(){El.call(this);this.kj=null;}
let VO=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.kj.fW()|0)<=d.j4){f=a.kj.fX(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.jv.fD(b,c,d);if(f>=0)break;b=b-a.kj.fW()|0;e=e+(-1)|0;}return f;},
ZB=a=>{return A(191);};
function E5(){Dm.call(this);this.os=null;}
let XU=(a,b,c,d)=>{let e,f,g,h,i;e=a.os;f=e.nH;g=e.nF;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.kj.fW()|0)>d.j4)break a;i=a.kj.fX(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.jv.fD(b,c,d);if(i>=0)break;b=b-a.kj.fW()|0;h=h+(-1)|0;}return i;}if((b+a.kj.fW()|0)>d.j4){d.lS=1;return (-1);}i=a.kj.fX(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
Ys=a=>{return LG(a.os);};
let Do=E(El);
let Wf=(a,b,c,d)=>{let e;if(!a.j2.gd(d))return a.jv.fD(b,c,d);e=a.j2.fD(b,c,d);if(e>=0)return e;return a.jv.fD(b,c,d);},
AEL=a=>{return A(192);};
let E3=E(Dm);
let AHk=(a,b,c,d)=>{let e;e=a.j2.fD(b,c,d);if(e<0)e=a.jv.fD(b,c,d);return e;},
ARu=(a,b)=>{a.jv=b;a.j2.e3(b);};
let T3=E(Dm);
let AQF=(a,b,c,d)=>{while((b+a.kj.fW()|0)<=d.j4&&a.kj.fX(b,c)>0){b=b+a.kj.fW()|0;}return a.jv.fD(b,c,d);},
AIw=(a,b,c,d)=>{let e,f,g;e=a.jv.fv(b,c,d);if(e<0)return (-1);f=e-a.kj.fW()|0;while(f>=b&&a.kj.fX(f,c)>0){g=f-a.kj.fW()|0;e=f;f=g;}return e;};
let Mz=E();
let WE=null,AE7=null,Sw=null;
let Un=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=Sw.data;if(c>=d.length){e=new JF;e.jp=1;e.jq=1;e.jr=A(61);e.yd=A(61);e.x4=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof H))g=0;else{f=f;g=b.jn!==f.jn?0:1;}if(g)break;c=c+1|0;}return d[1];},
ABo=()=>{let b,c,d,e,f,g;b=new IG;WE=b;c=new H_;AE7=c;d=S(DM(C),194);e=d.data;e[0]=P(C,[A(193),new SH]);e[1]=P(C,[A(194),new Te]);e[2]=P(C,[A(195),new Ti]);e[3]=P(C,[A(196),new IA]);e[4]=P(C,[A(197),c]);e[5]=P(C,[A(198),new IU]);e[6]=P(C,[A(199),new U0]);e[7]=P(C,[A(200),new Jr]);e[8]=P(C,[A(201),new QQ]);e[9]=P(C,[A(202),new Re]);e[10]=P(C,[A(203),new Ph]);e[11]=P(C,[A(204),new O4]);e[12]=P(C,[A(205),new Tm]);e[13]=P(C,[A(206),new U8]);e[14]=P(C,[A(207),new SV]);e[15]=P(C,[A(208),new SA]);e[16]=P(C,[A(209),
new TO]);e[17]=P(C,[A(210),new N5]);e[18]=P(C,[A(211),new NG]);e[19]=P(C,[A(212),new S2]);e[20]=P(C,[A(213),new S$]);e[21]=P(C,[A(214),new PD]);e[22]=P(C,[A(215),new Rk]);e[23]=P(C,[A(216),new UG]);e[24]=P(C,[A(217),new S7]);e[25]=P(C,[A(218),new Qk]);e[26]=P(C,[A(219),new PC]);e[27]=P(C,[A(220),new U4]);e[28]=P(C,[A(221),b]);e[29]=P(C,[A(222),new HV]);e[30]=P(C,[A(223),new TU]);e[31]=P(C,[A(224),b]);e[32]=P(C,[A(225),new QT]);e[33]=P(C,[A(226),c]);e[34]=P(C,[A(227),new Px]);f=S(C,2);g=f.data;g[0]=A(228);b=
new Bm;b.jN=0;b.jO=127;g[1]=b;e[35]=f;f=S(C,2);g=f.data;g[0]=A(229);b=new Bm;b.jN=128;b.jO=255;g[1]=b;e[36]=f;f=S(C,2);g=f.data;g[0]=A(230);b=new Bm;b.jN=256;b.jO=383;g[1]=b;e[37]=f;f=S(C,2);g=f.data;g[0]=A(231);b=new Bm;b.jN=384;b.jO=591;g[1]=b;e[38]=f;f=S(C,2);g=f.data;g[0]=A(232);b=new Bm;b.jN=592;b.jO=687;g[1]=b;e[39]=f;f=S(C,2);g=f.data;g[0]=A(233);b=new Bm;b.jN=688;b.jO=767;g[1]=b;e[40]=f;f=S(C,2);g=f.data;g[0]=A(234);b=new Bm;b.jN=768;b.jO=879;g[1]=b;e[41]=f;f=S(C,2);g=f.data;g[0]=A(235);b=new Bm;b.jN
=880;b.jO=1023;g[1]=b;e[42]=f;f=S(C,2);g=f.data;g[0]=A(236);b=new Bm;b.jN=1024;b.jO=1279;g[1]=b;e[43]=f;f=S(C,2);g=f.data;g[0]=A(237);b=new Bm;b.jN=1280;b.jO=1327;g[1]=b;e[44]=f;f=S(C,2);g=f.data;g[0]=A(238);b=new Bm;b.jN=1328;b.jO=1423;g[1]=b;e[45]=f;f=S(C,2);g=f.data;g[0]=A(239);b=new Bm;b.jN=1424;b.jO=1535;g[1]=b;e[46]=f;f=S(C,2);g=f.data;g[0]=A(240);b=new Bm;b.jN=1536;b.jO=1791;g[1]=b;e[47]=f;f=S(C,2);g=f.data;g[0]=A(241);b=new Bm;b.jN=1792;b.jO=1871;g[1]=b;e[48]=f;f=S(C,2);g=f.data;g[0]=A(242);b=new Bm;b.jN
=1872;b.jO=1919;g[1]=b;e[49]=f;f=S(C,2);g=f.data;g[0]=A(243);b=new Bm;b.jN=1920;b.jO=1983;g[1]=b;e[50]=f;f=S(C,2);g=f.data;g[0]=A(244);b=new Bm;b.jN=2304;b.jO=2431;g[1]=b;e[51]=f;f=S(C,2);g=f.data;g[0]=A(245);b=new Bm;b.jN=2432;b.jO=2559;g[1]=b;e[52]=f;f=S(C,2);g=f.data;g[0]=A(246);b=new Bm;b.jN=2560;b.jO=2687;g[1]=b;e[53]=f;f=S(C,2);g=f.data;g[0]=A(247);b=new Bm;b.jN=2688;b.jO=2815;g[1]=b;e[54]=f;f=S(C,2);g=f.data;g[0]=A(248);b=new Bm;b.jN=2816;b.jO=2943;g[1]=b;e[55]=f;f=S(C,2);g=f.data;g[0]=A(249);b=new Bm;b.jN
=2944;b.jO=3071;g[1]=b;e[56]=f;f=S(C,2);g=f.data;g[0]=A(250);b=new Bm;b.jN=3072;b.jO=3199;g[1]=b;e[57]=f;f=S(C,2);g=f.data;g[0]=A(251);b=new Bm;b.jN=3200;b.jO=3327;g[1]=b;e[58]=f;f=S(C,2);g=f.data;g[0]=A(252);b=new Bm;b.jN=3328;b.jO=3455;g[1]=b;e[59]=f;f=S(C,2);g=f.data;g[0]=A(253);b=new Bm;b.jN=3456;b.jO=3583;g[1]=b;e[60]=f;f=S(C,2);g=f.data;g[0]=A(254);b=new Bm;b.jN=3584;b.jO=3711;g[1]=b;e[61]=f;f=S(C,2);g=f.data;g[0]=A(255);b=new Bm;b.jN=3712;b.jO=3839;g[1]=b;e[62]=f;f=S(C,2);g=f.data;g[0]=A(256);b=new Bm;b.jN
=3840;b.jO=4095;g[1]=b;e[63]=f;f=S(C,2);g=f.data;g[0]=A(257);b=new Bm;b.jN=4096;b.jO=4255;g[1]=b;e[64]=f;f=S(C,2);g=f.data;g[0]=A(258);b=new Bm;b.jN=4256;b.jO=4351;g[1]=b;e[65]=f;f=S(C,2);g=f.data;g[0]=A(259);b=new Bm;b.jN=4352;b.jO=4607;g[1]=b;e[66]=f;f=S(C,2);g=f.data;g[0]=A(260);b=new Bm;b.jN=4608;b.jO=4991;g[1]=b;e[67]=f;f=S(C,2);g=f.data;g[0]=A(261);b=new Bm;b.jN=4992;b.jO=5023;g[1]=b;e[68]=f;f=S(C,2);g=f.data;g[0]=A(262);b=new Bm;b.jN=5024;b.jO=5119;g[1]=b;e[69]=f;f=S(C,2);g=f.data;g[0]=A(263);b=new Bm;b.jN
=5120;b.jO=5759;g[1]=b;e[70]=f;f=S(C,2);g=f.data;g[0]=A(264);b=new Bm;b.jN=5760;b.jO=5791;g[1]=b;e[71]=f;f=S(C,2);g=f.data;g[0]=A(265);b=new Bm;b.jN=5792;b.jO=5887;g[1]=b;e[72]=f;f=S(C,2);g=f.data;g[0]=A(266);b=new Bm;b.jN=5888;b.jO=5919;g[1]=b;e[73]=f;f=S(C,2);g=f.data;g[0]=A(267);b=new Bm;b.jN=5920;b.jO=5951;g[1]=b;e[74]=f;f=S(C,2);g=f.data;g[0]=A(268);b=new Bm;b.jN=5952;b.jO=5983;g[1]=b;e[75]=f;f=S(C,2);g=f.data;g[0]=A(269);b=new Bm;b.jN=5984;b.jO=6015;g[1]=b;e[76]=f;f=S(C,2);g=f.data;g[0]=A(270);b=new Bm;b.jN
=6016;b.jO=6143;g[1]=b;e[77]=f;f=S(C,2);g=f.data;g[0]=A(271);b=new Bm;b.jN=6144;b.jO=6319;g[1]=b;e[78]=f;f=S(C,2);g=f.data;g[0]=A(272);b=new Bm;b.jN=6400;b.jO=6479;g[1]=b;e[79]=f;f=S(C,2);g=f.data;g[0]=A(273);b=new Bm;b.jN=6480;b.jO=6527;g[1]=b;e[80]=f;f=S(C,2);g=f.data;g[0]=A(274);b=new Bm;b.jN=6528;b.jO=6623;g[1]=b;e[81]=f;f=S(C,2);g=f.data;g[0]=A(275);b=new Bm;b.jN=6624;b.jO=6655;g[1]=b;e[82]=f;f=S(C,2);g=f.data;g[0]=A(276);b=new Bm;b.jN=6656;b.jO=6687;g[1]=b;e[83]=f;f=S(C,2);g=f.data;g[0]=A(277);b=new Bm;b.jN
=7424;b.jO=7551;g[1]=b;e[84]=f;f=S(C,2);g=f.data;g[0]=A(278);b=new Bm;b.jN=7552;b.jO=7615;g[1]=b;e[85]=f;f=S(C,2);g=f.data;g[0]=A(279);b=new Bm;b.jN=7616;b.jO=7679;g[1]=b;e[86]=f;f=S(C,2);g=f.data;g[0]=A(280);b=new Bm;b.jN=7680;b.jO=7935;g[1]=b;e[87]=f;f=S(C,2);g=f.data;g[0]=A(281);b=new Bm;b.jN=7936;b.jO=8191;g[1]=b;e[88]=f;f=S(C,2);g=f.data;g[0]=A(282);b=new Bm;b.jN=8192;b.jO=8303;g[1]=b;e[89]=f;f=S(C,2);g=f.data;g[0]=A(283);b=new Bm;b.jN=8304;b.jO=8351;g[1]=b;e[90]=f;f=S(C,2);g=f.data;g[0]=A(284);b=new Bm;b.jN
=8352;b.jO=8399;g[1]=b;e[91]=f;f=S(C,2);g=f.data;g[0]=A(285);b=new Bm;b.jN=8400;b.jO=8447;g[1]=b;e[92]=f;f=S(C,2);g=f.data;g[0]=A(286);b=new Bm;b.jN=8448;b.jO=8527;g[1]=b;e[93]=f;f=S(C,2);g=f.data;g[0]=A(287);b=new Bm;b.jN=8528;b.jO=8591;g[1]=b;e[94]=f;f=S(C,2);g=f.data;g[0]=A(288);b=new Bm;b.jN=8592;b.jO=8703;g[1]=b;e[95]=f;f=S(C,2);g=f.data;g[0]=A(289);b=new Bm;b.jN=8704;b.jO=8959;g[1]=b;e[96]=f;f=S(C,2);g=f.data;g[0]=A(290);b=new Bm;b.jN=8960;b.jO=9215;g[1]=b;e[97]=f;f=S(C,2);g=f.data;g[0]=A(291);b=new Bm;b.jN
=9216;b.jO=9279;g[1]=b;e[98]=f;f=S(C,2);g=f.data;g[0]=A(292);b=new Bm;b.jN=9280;b.jO=9311;g[1]=b;e[99]=f;f=S(C,2);g=f.data;g[0]=A(293);b=new Bm;b.jN=9312;b.jO=9471;g[1]=b;e[100]=f;f=S(C,2);g=f.data;g[0]=A(294);b=new Bm;b.jN=9472;b.jO=9599;g[1]=b;e[101]=f;f=S(C,2);g=f.data;g[0]=A(295);b=new Bm;b.jN=9600;b.jO=9631;g[1]=b;e[102]=f;e[103]=P(C,[A(296),Bw(9632,9727)]);e[104]=P(C,[A(297),Bw(9728,9983)]);e[105]=P(C,[A(298),Bw(9984,10175)]);e[106]=P(C,[A(299),Bw(10176,10223)]);e[107]=P(C,[A(300),Bw(10224,10239)]);e[108]
=P(C,[A(301),Bw(10240,10495)]);e[109]=P(C,[A(302),Bw(10496,10623)]);e[110]=P(C,[A(303),Bw(10624,10751)]);e[111]=P(C,[A(304),Bw(10752,11007)]);e[112]=P(C,[A(305),Bw(11008,11263)]);e[113]=P(C,[A(306),Bw(11264,11359)]);e[114]=P(C,[A(307),Bw(11392,11519)]);e[115]=P(C,[A(308),Bw(11520,11567)]);e[116]=P(C,[A(309),Bw(11568,11647)]);e[117]=P(C,[A(310),Bw(11648,11743)]);e[118]=P(C,[A(311),Bw(11776,11903)]);e[119]=P(C,[A(312),Bw(11904,12031)]);e[120]=P(C,[A(313),Bw(12032,12255)]);e[121]=P(C,[A(314),Bw(12272,12287)]);e[122]
=P(C,[A(315),Bw(12288,12351)]);e[123]=P(C,[A(316),Bw(12352,12447)]);e[124]=P(C,[A(317),Bw(12448,12543)]);e[125]=P(C,[A(318),Bw(12544,12591)]);e[126]=P(C,[A(319),Bw(12592,12687)]);e[127]=P(C,[A(320),Bw(12688,12703)]);e[128]=P(C,[A(321),Bw(12704,12735)]);e[129]=P(C,[A(322),Bw(12736,12783)]);e[130]=P(C,[A(323),Bw(12784,12799)]);e[131]=P(C,[A(324),Bw(12800,13055)]);e[132]=P(C,[A(325),Bw(13056,13311)]);e[133]=P(C,[A(326),Bw(13312,19893)]);e[134]=P(C,[A(327),Bw(19904,19967)]);e[135]=P(C,[A(328),Bw(19968,40959)]);e[136]
=P(C,[A(329),Bw(40960,42127)]);e[137]=P(C,[A(330),Bw(42128,42191)]);e[138]=P(C,[A(331),Bw(42752,42783)]);e[139]=P(C,[A(332),Bw(43008,43055)]);e[140]=P(C,[A(333),Bw(44032,55203)]);e[141]=P(C,[A(334),Bw(55296,56191)]);e[142]=P(C,[A(335),Bw(56192,56319)]);e[143]=P(C,[A(336),Bw(56320,57343)]);e[144]=P(C,[A(337),Bw(57344,63743)]);e[145]=P(C,[A(338),Bw(63744,64255)]);e[146]=P(C,[A(339),Bw(64256,64335)]);e[147]=P(C,[A(340),Bw(64336,65023)]);e[148]=P(C,[A(341),Bw(65024,65039)]);e[149]=P(C,[A(342),Bw(65040,65055)]);e[150]
=P(C,[A(343),Bw(65056,65071)]);e[151]=P(C,[A(344),Bw(65072,65103)]);e[152]=P(C,[A(345),Bw(65104,65135)]);e[153]=P(C,[A(346),Bw(65136,65279)]);e[154]=P(C,[A(347),Bw(65280,65519)]);e[155]=P(C,[A(46),Bw(0,1114111)]);f=S(C,2);g=f.data;g[0]=A(348);b=new Pt;AHY(b);g[1]=b;e[156]=f;e[157]=P(C,[A(349),B$(0,1)]);e[158]=P(C,[A(350),Gm(62,1)]);e[159]=P(C,[A(351),B$(1,1)]);e[160]=P(C,[A(352),B$(2,1)]);e[161]=P(C,[A(353),B$(3,0)]);e[162]=P(C,[A(354),B$(4,0)]);e[163]=P(C,[A(355),B$(5,1)]);e[164]=P(C,[A(356),Gm(448,1)]);e[165]
=P(C,[A(357),B$(6,1)]);e[166]=P(C,[A(358),B$(7,0)]);e[167]=P(C,[A(359),B$(8,1)]);e[168]=P(C,[A(360),Gm(3584,1)]);e[169]=P(C,[A(361),B$(9,1)]);e[170]=P(C,[A(362),B$(10,1)]);e[171]=P(C,[A(363),B$(11,1)]);e[172]=P(C,[A(364),Gm(28672,0)]);e[173]=P(C,[A(365),B$(12,0)]);e[174]=P(C,[A(366),B$(13,0)]);e[175]=P(C,[A(367),B$(14,0)]);e[176]=P(C,[A(368),AEU(983040,1,1)]);e[177]=P(C,[A(369),B$(15,0)]);e[178]=P(C,[A(370),B$(16,1)]);e[179]=P(C,[A(371),B$(18,1)]);e[180]=P(C,[A(372),AGL(19,0,1)]);e[181]=P(C,[A(373),Gm(1643118592,
1)]);e[182]=P(C,[A(374),B$(20,0)]);e[183]=P(C,[A(375),B$(21,0)]);e[184]=P(C,[A(376),B$(22,0)]);e[185]=P(C,[A(377),B$(23,0)]);e[186]=P(C,[A(378),B$(24,1)]);e[187]=P(C,[A(379),Gm(2113929216,1)]);e[188]=P(C,[A(380),B$(25,1)]);e[189]=P(C,[A(381),B$(26,0)]);e[190]=P(C,[A(382),B$(27,0)]);e[191]=P(C,[A(383),B$(28,1)]);e[192]=P(C,[A(384),B$(29,0)]);e[193]=P(C,[A(385),B$(30,0)]);Sw=d;};
function Bo(){let a=this;C.call(a);a.nd=null;a.oS=null;}
let AHY=a=>{return;},
ATP=(a,b)=>{if(!b&&a.nd===null)a.nd=a.fM();else if(b&&a.oS===null)a.oS=Ex(a.fM(),1);if(b)return a.oS;return a.nd;};
function NF(){let a=this;Ho.call(a);a.nH=0;a.nF=0;}
let LG=a=>{let b,c,d,e,f,g,h;b=a.nH;c=a.nF;if(c==2147483647)d=A(61);else{d=new Z;d.jo=G(20);d=(L(d,d.jm,c,10)).S();}e=new J;e.jo=G(16);c=e.jm;Bd(e,c,c+1|0);e.jo.data[c]=123;L(e,e.jm,b,10);b=e.jm;Bd(e,b,b+1|0);e.jo.data[b]=44;f=e.jm;if(d===null)d=A(2);F(e,f,d);b=e.jm;Bd(e,b,b+1|0);g=e.jo;h=g.data;h[b]=125;d=new H;b=e.jm;c=h.length;if(b>=0&&b<=(c-0|0)){d.jn=K(g.data,0,b);return d;}d=new I;d.jp=1;d.jq=1;Bn(d);B(d);};
let Oj=E(B8);
let AFV=(a,b,c,d)=>{return b;},
AJU=a=>{return A(386);},
AJ7=(a,b)=>{return 0;};
function Bf(){let a=this;C.call(a);a.jC=null;a.kO=0;}
let L2=(a,b)=>{let c,d,e;if(b<0){c=new I;c.jp=1;c.jq=1;B(c);}d=b/32|0;if(b>=a.kO){IP(a,d+1|0);a.kO=b+1|0;}e=a.jC.data;e[d]=e[d]|1<<(b%32|0);},
Ik=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=Cf(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.kO){IP(a,e+1|0);a.kO=c;}if(d==e){f=a.jC.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.jC.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new I;i.jp=1;i.jq=1;B(i);},
M6=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.jp=1;c.jq=1;B(c);}d=b/32|0;e=a.jC.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.kO-1|0))HE(a);}},
Wz=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.kO;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.jC.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.jC.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}HE(a);return;}i=new I;i.jp=1;i.jq=1;B(i);},
Cy=(a,b)=>{let c,d,e;if(b<0){c=new I;c.jp=1;c.jq=1;B(c);}d=b/32|0;e=a.jC.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
HK=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.jp=1;c.jq=1;B(c);}d=a.kO;if(b>=d)return (-1);e=b/32|0;f=a.jC.data;g=f[e]>>>(b%32|0)|0;if(g)return DO(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+DO(f[g])|0;g=g+1|0;}return (-1);},
AKE=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new I;c.jp=1;c.jq=1;B(c);}d=a.kO;if(b>=d)return b;e=b/32|0;f=a.jC.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return DO(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+DO(f[h]^(-1))|0;h=h+1|0;}return d;},
IP=(a,b)=>{let c,d,e,f,g,h;c=a.jC.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=U(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jC=g;},
HE=a=>{let b,c,d;b=(a.kO+31|0)/32|0;a.kO=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=N3(a.jC.data[c]);if(d<32)break;c=c+(-1)|0;a.kO=a.kO-32|0;}a.kO=a.kO-d|0;}},
IO=(a,b)=>{let c,d,e,f,g;c=a.jC.data;d=c.length;e=b.jC.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
DE=(a,b)=>{let c,d,e,f,g,h,i;c=a.jC.data;d=c.length;e=b.jC.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.kO;i=b.kO;if(h<i)i=h;a.kO=i;HE(a);},
Gv=(a,b)=>{let c,d,e,f,g;c=a.jC.data;d=c.length;e=b.jC.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}HE(a);},
Go=(a,b)=>{let c,d,e,f,g;c=a.kO;d=b.kO;if(c>d)d=c;a.kO=d;IP(a,(d+31|0)/32|0);e=a.jC.data;c=e.length;f=b.jC.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
FZ=(a,b)=>{let c,d,e,f,g;c=a.kO;d=b.kO;if(c>d)d=c;a.kO=d;IP(a,(d+31|0)/32|0);e=a.jC.data;c=e.length;f=b.jC.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}HE(a);};
function Np(){let a=this;Cg.call(a);a.qT=null;a.rM=0;}
let AEr=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.l1;f=d.j4;g=b+1|0;f=Cf(g,f);if(f>0){d.lS=1;return (-1);}if(b>=0&&b<c.jn.length){h=c.jn.charCodeAt(b);if(!a.qT.ga(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.jn.length){if((c.jn.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new T;c.jp=1;c.jq=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.jn.length){if(!((c.jn.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new T;c.jp=1;c.jq=1;B(c);}}return a.jv.fD(g,c,d);}c=new T;c.jp
=1;c.jq=1;B(c);},
AKg=a=>{let b,c,d,e,f,g,h,i;b=!a.rM?A(387):A(388);c=a.qT.S();d=new J;d.jo=G(16);F(d,d.jm,A(389));F(d,d.jm,b);e=d.jm;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
function GT(){let a=this;Cg.call(a);a.ou=null;a.on=null;}
let XJ=(a,b,c,d)=>{let e;e=a.ou.fD(b,c,d);if(e<0)e=AEr(a.on,b,c,d);if(e>=0)return e;return (-1);},
AJE=(a,b)=>{a.jv=b;a.on.jv=b;a.ou.e3(b);},
AKI=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.ou;c=a.on;d=new J;d.jo=G(16);F(d,d.jm,A(390));e=d.jm;if(b===null)b=A(2);else{f=b.jD;b=b.fE();g=new J;EF(g);FV(g,60);Im(g,f);FV(g,58);Im(g,b);FV(g,62);b=Lx(g);}F(d,e,b);F(d,d.jm,A(391));e=d.jm;if(c===null)b=A(2);else{b=c.jD;f=!c.rM?A(387):A(388);c=c.qT.S();g=Ev();Ls(Ls(Ls(g,A(389)),f),c);f=EG(g);c=new J;EF(c);FV(c,60);Im(c,b);FV(c,58);Im(c,f);FV(c,62);b=Lx(c);}F(d,e,b);b=new H;h=d.jo;i=h.data;j=d.jm;k=i.length;if(j>=0&&j<=(k-0|0)){b.jn=K(h.data,0,j);return b;}b=new I;b.jp=
1;b.jq=1;Bn(b);B(b);},
Y1=(a,b)=>{return 1;},
Yn=(a,b)=>{return 1;};
function Dx(){let a=this;Cg.call(a);a.lN=null;a.o2=0;}
let ABO=(a,b,c,d)=>{let e,f,g,h;a:{e=d.j4;if(b<e){f=b+1|0;if(b>=0&&b<c.jn.length){g=c.jn.charCodeAt(b);if(a.ga(g)){h=a.jv.fD(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.jn.length){f=c.jn.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.ga(((g&1023)<<10|f&1023)+65536|0))break a;else return a.jv.fD(e,c,d);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}}return (-1);},
APL=a=>{let b,c,d,e,f,g,h,i;b=!a.o2?A(387):A(388);c=a.lN.S();d=new J;d.jo=G(16);F(d,d.jm,A(389));F(d,d.jm,b);e=d.jm;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
ACI=(a,b)=>{return a.lN.ga(b);},
Xy=(a,b)=>{let c,d;if(b instanceof Ea)return a.lN.ga(b.oG);if(b instanceof DP)return a.lN.ga(b.lD);if(b instanceof Dx){c=a.lN;b=b.lN;return c.f9()!==null&&b.f9()!==null?IO(c.f9(),b.f9()):1;}if(!(b instanceof DX))return 1;c=a.lN;d=b.mt;return c.f9()!==null&&d.f9()!==null?IO(c.f9(),d.f9()):1;},
AS4=a=>{return a.lN;},
ANc=(a,b)=>{a.jv=b;},
AB6=(a,b)=>{return 1;};
let Jz=E(Dx);
let AFi=(a,b)=>{let c;c=a.lN;if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}b=Cr(BO,b);if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}return c.ga(Cr(BP,b));},
AQf=a=>{let b,c,d,e,f,g,h,i;b=!a.o2?A(387):A(388);c=a.lN.S();d=new J;d.jo=G(16);F(d,d.jm,A(392));F(d,d.jm,b);e=d.jm;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
function J_(){let a=this;Cs.call(a);a.qX=null;a.st=0;}
let AFY=(a,b,c)=>{let d;d=a.qX;if(b>=0&&b<c.jn.length){b=c.jn.charCodeAt(b);if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}b=Cr(BO,b)&65535;if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}return !d.ga(Cr(BP,b)&65535)?(-1):1;}c=new T;c.jp=1;c.jq=1;B(c);},
YH=a=>{let b,c,d,e,f,g,h,i;b=!a.st?A(387):A(388);c=a.qX.S();d=new J;d.jo=G(16);F(d,d.jm,A(392));F(d,d.jm,b);e=d.jm;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
function DX(){let a=this;Cs.call(a);a.mt=null;a.sW=0;}
let Vd=(a,b,c)=>{let d;d=a.mt;if(b>=0&&b<c.jn.length)return !d.ga(c.jn.charCodeAt(b))?(-1):1;c=new T;c.jp=1;c.jq=1;B(c);},
AGc=a=>{let b,c,d,e,f,g,h,i;b=!a.sW?A(387):A(388);c=a.mt.S();d=new J;d.jo=G(16);F(d,d.jm,A(389));F(d,d.jm,b);e=d.jm;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
AJ9=(a,b)=>{let c,d;if(b instanceof DP)return a.mt.ga(b.lD);if(b instanceof DX){c=a.mt;b=b.mt;return c.f9()!==null&&b.f9()!==null?IO(c.f9(),b.f9()):1;}if(!(b instanceof Dx)){if(!(b instanceof Ea))return 1;return 0;}c=a.mt;d=b.lN;return c.f9()!==null&&d.f9()!==null?IO(c.f9(),d.f9()):1;};
function H4(){let a=this;Cg.call(a);a.ns=null;a.nl=null;a.qb=0;}
let AHj=(a,b)=>{a.jv=b;},
AL6=a=>{let b,c,d,e,f,g,h,i;if(a.nl===null){b=new H;c=a.ns;b.jn=K(c.data,0,c.data.length);a.nl=b;}d=a.nl;b=new J;b.jo=G(16);F(b,b.jm,A(393));e=b.jm;if(d===null)d=A(2);F(b,e,d);f=new H;c=b.jo;g=c.data;h=b.jm;i=g.length;if(h>=0&&h<=(i-0|0)){f.jn=K(c.data,0,h);return f;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
Vz=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.j4;f=U(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.jn.length){j=c.jn.charCodeAt(b);k=AAM(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.qb;if(b!=m)return (-1);while(true){if(l>=m)return a.jv.fD(i,c,d);if(f[l]!=a.ns.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.jn.length){j=c.jn.charCodeAt(i);g=j-4449|0;}else{c=new T;c.jp=1;c.jq=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.jn.length){j=c.jn.charCodeAt(b);h
=j-4519|0;}else{c=new T;c.jp=1;c.jq=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.qb==3){m=k[0];f=a.ns.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.jv.fD(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.qb==2){m=k[0];f=a.ns.data;if(m==f[0]&&k[1]==f[1]){b=a.jv.fD(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new T;c.jp=1;c.jq=1;B(c);},
YP=(a,b)=>{let c,d,e;a:{if(b instanceof H4){b=b;if(b.nl===null){c=new H;d=b.ns;c.jn=K(d.data,0,d.data.length);b.nl=c;}c=b.nl;if(a.nl===null){b=new H;d=a.ns;b.jn=K(d.data,0,d.data.length);a.nl=b;}b=a.nl;if(c===b)e=1;else if(!(b instanceof H))e=0;else{b=b;e=c.jn!==b.jn?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AOi=(a,b)=>{return 1;};
function DP(){Cs.call(this);this.lD=0;}
let AFA=a=>{return 1;},
AD0=(a,b,c)=>{let d;d=a.lD;if(b>=0&&b<c.jn.length)return d!=c.jn.charCodeAt(b)?(-1):1;c=new T;c.jp=1;c.jq=1;B(c);},
ABH=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof H){e=d.j4;while(true){if(b>=e)return (-1);f=Hl(c,a.lD,b);if(f<0)return (-1);g=a.jv;b=f+1|0;if(g.fD(b,c,d)>=0)break;}return f;}h=d.j4;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.j4){d.lS=1;e=(-1);}else{e=a.lD;if(b<0)break a;if(b>=c.jn.length)break a;e=e!=c.jn.charCodeAt(b)?(-1):1;e=e<0?(-1):a.jv.fD(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new T;X(c);B(c);},
AFK=(a,b,c,d,e)=>{let f;if(d instanceof H){a:{while(true){if(c<b)return (-1);c=FD(d,a.lD,c);if(c<0)break a;if(c<b)break a;if(a.jv.fD(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.j4){e.lS=1;f=(-1);}else{f=a.lD;if(c<0)break b;if(c>=d.jn.length)break b;f=f!=d.jn.charCodeAt(c)?(-1):1;f=f<0?(-1):a.jv.fD(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new T;X(d);B(d);},
AOC=a=>{let b,c,d,e,f,g,h;b=a.lD;c=new J;c.jo=G(16);d=c.jm;Bd(c,d,d+1|0);e=c.jo;f=e.data;f[d]=b;g=new H;d=c.jm;h=f.length;if(d>=0&&d<=(h-0|0)){g.jn=K(e.data,0,d);return g;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
AN9=(a,b)=>{let c,d,e,f;if(b instanceof DP)return b.lD!=a.lD?0:1;if(!(b instanceof DX)){if(b instanceof Dx)return b.ga(a.lD);if(!(b instanceof Ea))return 1;return 0;}b=b;c=a.lD;d=new H;e=G(1);f=e.data;f[0]=c;d.jn=K(e.data,0,f.length);b=b.mt;if(0>=d.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}return (!b.ga(d.jn.charCodeAt(0))?(-1):1)<=0?0:1;};
function MH(){Cs.call(this);this.qs=0;}
let Vm=(a,b,c)=>{let d;d=a.qs;if(b>=0&&b<c.jn.length){b=c.jn.charCodeAt(b);if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}b=Cr(BO,b)&65535;if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}return d!=(Cr(BP,b)&65535)?(-1):1;}c=new T;c.jp=1;c.jq=1;B(c);},
AJB=a=>{let b,c,d,e,f,g,h;b=a.qs;c=new J;c.jo=G(16);F(c,c.jm,A(394));d=c.jm;Bd(c,d,d+1|0);e=c.jo;f=e.data;f[d]=b;g=new H;d=c.jm;h=f.length;if(d>=0&&d<=(h-0|0)){g.jn=K(e.data,0,d);return g;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);};
function Jw(){let a=this;Cs.call(a);a.ry=0;a.rX=0;}
let V8=(a,b,c)=>{let d;d=a.ry;if(b>=0&&b<c.jn.length){a:{b:{if(d!=c.jn.charCodeAt(b)){d=a.rX;if(b<0)break a;if(b>=c.jn.length)break a;if(d!=c.jn.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);},
AEl=a=>{let b,c,d,e,f,g,h;b=a.ry;c=new J;c.jo=G(16);F(c,c.jm,A(395));d=c.jm;Bd(c,d,d+1|0);e=c.jo;f=e.data;f[d]=b;g=new H;d=c.jm;h=f.length;if(d>=0&&d<=(h-0|0)){g.jn=K(e.data,0,d);return g;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);};
function E8(){let a=this;Cg.call(a);a.ol=0;a.m3=null;a.n9=null;a.n5=0;}
let AP5=(a,b)=>{a.jv=b;},
AJF=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=U(4);f=d.j4;if(b>=f)return (-1);g=K7(a,b,c,f);h=b+a.ol|0;i=PA.gp(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;DU(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=K7(a,h,c,f);while(b<4){if(!AKf(g)){k=b+1|0;i[b]=g;}else{j=(PA.gp(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.ol|0;if(h>=f){b=k;break a;}g=K7(a,h,c,f);b=k;}}}if(b!=a.n5)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.jv.fD(h,c,d);if(j[g]!=a.n9.data[g])break;g
=g+1|0;}return (-1);},
AJl=a=>{let b,c,d,e,f,g,h,i;if(a.m3===null){b=new J;b.jo=G(16);c=0;while(c<a.n5){d=EO(a.n9.data[c]);e=d.data.length;JG(b,b.jm,d,0,e);c=c+1|0;}f=new H;d=b.jo;g=d.data;h=b.jm;e=g.length;if(h>=0&&h<=(e-0|0)){f.jn=K(d.data,0,h);a.m3=f;}else{b=new I;X(b);B(b);}}i=a.m3;b=new J;b.jo=G(16);F(b,b.jm,A(396));c=b.jm;if(i===null)i=A(2);F(b,c,i);f=new H;d=b.jo;g=d.data;h=b.jm;e=g.length;if(h>=0&&h<=(e-0|0)){f.jn=K(d.data,0,h);return f;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
K7=(a,b,c,d)=>{let e,f,g,h;a:{a.ol=1;if(b>=(d-1|0)){if(b>=0&&b<c.jn.length){e=c.jn.charCodeAt(b);break a;}c=new T;c.jp=1;c.jq=1;B(c);}d=b+1|0;if(b>=0&&b<c.jn.length){e=c.jn.charCodeAt(b);if(d>=0&&d<c.jn.length){f=c.jn.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=Y0(g,0,h.length);a.ol=2;}break a;}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}return e;},
AFZ=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof E8){b=b;if(b.m3===null){c=new J;c.jo=G(16);d=0;while(d<b.n5){e=EO(b.n9.data[d]);f=e.data.length;JG(c,c.jm,e,0,f);d=d+1|0;}g=new H;e=c.jo;h=e.data;i=c.jm;f=h.length;if(i>=0&&i<=(f-0|0)){g.jn=K(e.data,0,i);b.m3=g;}else{b=new I;X(b);B(b);}}g=b.m3;if(a.m3===null){b=new J;b.jo=G(16);d=0;while(d<a.n5){e=EO(a.n9.data[d]);f=e.data.length;JG(b,b.jm,e,0,f);d=d+1|0;}c=new H;e=b.jo;h=e.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0)){c.jn=K(e.data,0,f);a.m3=c;}else{b=new I;X(b);B(b);}}b
=a.m3;if(g===b)d=1;else if(!(b instanceof H))d=0;else{b=b;d=g.jn!==b.jn?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
ALn=(a,b)=>{return 1;};
let UF=E(E8);
let Sk=E(E8);
let U7=E(Do);
let AAa=(a,b,c,d)=>{let e;while(true){e=a.j2.fD(b,c,d);if(e<=0)break;b=e;}return a.jv.fD(b,c,d);};
let Pk=E(Do);
let AIi=(a,b,c,d)=>{let e;e=a.j2.fD(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.j2.fD(e,c,d);if(b<=e)break;e=b;}b=e;}return a.jv.fD(b,c,d);};
let Gs=E(Do);
let AM8=(a,b,c,d)=>{let e;if(!a.j2.gd(d))return a.jv.fD(b,c,d);e=a.j2.fD(b,c,d);if(e>=0)return e;return a.jv.fD(b,c,d);},
AO3=(a,b)=>{a.jv=b;a.j2.e3(b);};
let O6=E(Gs);
let AFI=(a,b,c,d)=>{let e;e=a.j2.fD(b,c,d);if(e<=0)e=b;return a.jv.fD(e,c,d);},
AIT=(a,b)=>{a.jv=b;};
function FL(){let a=this;Do.call(a);a.m6=null;a.ml=0;}
let ARh=(a,b,c,d)=>{let e,f,g,h;e=a.ml;e=d.mP.data[e];if(!a.j2.gd(d))return a.jv.fD(b,c,d);if(e>=a.m6.nF)return a.jv.fD(b,c,d);f=a.ml;e=e+1|0;d.mP.data[f]=e;g=a.j2.fD(b,c,d);if(g>=0){b=a.ml;d.mP.data[b]=0;return g;}g=a.ml;e=e+(-1)|0;h=d.mP.data;h[g]=e;if(e>=a.m6.nH)return a.jv.fD(b,c,d);h[g]=0;return (-1);},
APb=a=>{return LG(a.m6);};
let NI=E(FL);
let AEM=(a,b,c,d)=>{let e,f,g;e=0;f=a.m6.nF;a:{while(true){g=a.j2.fD(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.m6.nH)return (-1);return a.jv.fD(b,c,d);};
let QN=E(Do);
let AQi=(a,b,c,d)=>{let e;if(!a.j2.gd(d))return a.jv.fD(b,c,d);e=a.jv.fD(b,c,d);if(e>=0)return e;return a.j2.fD(b,c,d);};
let P4=E(Gs);
let Y3=(a,b,c,d)=>{let e;if(!a.j2.gd(d))return a.jv.fD(b,c,d);e=a.jv.fD(b,c,d);if(e<0)e=a.j2.fD(b,c,d);return e;};
let SX=E(FL);
let W$=(a,b,c,d)=>{let e,f,g;e=a.ml;f=d.mP.data[e];if(!a.j2.gd(d))return a.jv.fD(b,c,d);g=a.m6;if(f>=g.nF){e=a.ml;d.mP.data[e]=0;return a.jv.fD(b,c,d);}if(f<g.nH){e=a.ml;d.mP.data[e]=f+1|0;e=a.j2.fD(b,c,d);}else{e=a.jv.fD(b,c,d);if(e>=0){b=a.ml;d.mP.data[b]=0;return e;}e=a.ml;d.mP.data[e]=f+1|0;e=a.j2.fD(b,c,d);}return e;};
let QO=E(El);
let AQX=(a,b,c,d)=>{let e;e=d.j4;if(e>b)return a.jv.fZ(b,e,c,d);return a.jv.fD(b,c,d);},
ANn=(a,b,c,d)=>{let e;e=d.j4;if(a.jv.fZ(b,e,c,d)>=0)return b;return (-1);},
AKP=a=>{return A(397);};
function Op(){El.call(this);this.qS=null;}
let AJ_=(a,b,c,d)=>{let e,f,g;e=d.j4;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.qS;if(f<0)break;if(f>=c.jn.length)break;if(g.gt(c.jn.charCodeAt(f)))break a;f=f+1|0;}c=new T;c.jp=1;c.jq=1;B(c);}if(f>=0)e=f;if(e>b)return a.jv.fZ(b,e,c,d);return a.jv.fD(b,c,d);},
VH=(a,b,c,d)=>{let e,f,g,h,i;e=d.j4;f=a.jv.fv(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.qS;if(g<0)break;if(g>=c.jn.length)break;if(h.gt(c.jn.charCodeAt(g)))break a;g=g+1|0;}c=new T;c.jp=1;c.jq=1;B(c);}if(g>=0)e=g;g=a.jv.fZ(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.qS;if(i<0)break;if(i>=c.jn.length)break;if(d.gt(c.jn.charCodeAt(i)))break b;i=i+(-1)|0;}c=new T;c.jp=1;c.jq=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
AMc=a=>{return A(398);};
let Hc=E();
let FW=null,FJ=null;
let U9=E(Dm);
let Xd=(a,b,c,d)=>{let e;a:{while(true){if((b+a.kj.fW()|0)>d.j4)break a;e=a.kj.fX(b,c);if(e<1)break;b=b+e|0;}}return a.jv.fD(b,c,d);};
let TY=E(E3);
let AIb=(a,b,c,d)=>{let e;if((b+a.kj.fW()|0)<=d.j4){e=a.kj.fX(b,c);if(e>=1)b=b+e|0;}return a.jv.fD(b,c,d);};
let OW=E(E5);
let AMu=(a,b,c,d)=>{let e,f,g,h,i;e=a.os;f=e.nH;g=e.nF;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.kj.fW()|0)>d.j4)break a;i=a.kj.fX(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.jv.fD(b,c,d);}if((b+a.kj.fW()|0)>d.j4){d.lS=1;return (-1);}i=a.kj.fX(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let PW=E(Dm);
let AJ1=(a,b,c,d)=>{let e;while(true){e=a.jv.fD(b,c,d);if(e>=0)break;if((b+a.kj.fW()|0)<=d.j4){e=a.kj.fX(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let Sn=E(E3);
let Xp=(a,b,c,d)=>{let e;e=a.jv.fD(b,c,d);if(e>=0)return e;return a.j2.fD(b,c,d);};
let Qx=E(E5);
let AMN=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.os;f=e.nH;g=e.nF;h=0;while(true){if(h>=f){a:{while(true){i=a.jv.fD(b,c,d);if(i>=0)break;if((b+a.kj.fW()|0)<=d.j4){i=a.kj.fX(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.kj.fW()|0)>d.j4){d.lS=1;return (-1);}j=a.kj.fX(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let KZ=E(B8);
let AGJ=(a,b,c,d)=>{if(b&&!(d.oi&&b==d.l1))return (-1);return a.jv.fD(b,c,d);},
AE2=(a,b)=>{return 0;},
AIc=a=>{return A(399);};
function Kr(){B8.call(this);this.tg=0;}
let Yk=(a,b,c,d)=>{let e,f,g;if(b>=d.j4)e=32;else if(b>=0&&b<c.jn.length)e=c.jn.charCodeAt(b);else{c=new T;c.jp=1;c.jq=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.jn.length)f=c.jn.charCodeAt(f);else{c=new T;c.jp=1;c.jq=1;B(c);}}g=d.q7?0:d.l1;return (e!=32&&!P7(a,e,b,g,c)?0:1)^(f!=32&&!P7(a,f,b-1|0,g,c)?0:1)^a.tg?(-1):a.jv.fD(b,c,d);},
YK=(a,b)=>{return 0;},
ARc=a=>{return A(400);},
P7=(a,b,c,d,e)=>{let f;a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CI(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.jn.length)break c;e:{f:{f=e.jn.charCodeAt(c);switch(CI(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(CI(f)!=6)return 1;}}return 1;}e=new T;e.jp=1;e.jq=1;B(e);}return 0;};
let Ol=E(B8);
let AFo=(a,b,c,d)=>{if(b!=d.qh)return (-1);return a.jv.fD(b,c,d);},
AQ_=(a,b)=>{return 0;},
X3=a=>{return A(401);};
function ME(){B8.call(this);this.oX=0;}
let AK2=(a,b,c,d)=>{let e,f,g;e=!d.oi?c.jn.length:d.j4;if(b>=e){f=a.oX;d.kw.data[f]=0;return a.jv.fD(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.jn.length){if(c.jn.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.jn.length){if(c.jn.charCodeAt(g)!=10)break a;f=a.oX;d.kw.data[f]=0;return a.jv.fD(b,c,d);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.jn.length){f=c.jn.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new T;c.jp
=1;c.jq=1;B(c);}}return (-1);}e=a.oX;d.kw.data[e]=0;return a.jv.fD(b,c,d);},
ZX=(a,b)=>{let c,d,e;c=a.oX;d=b.kw.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AHq=a=>{return A(402);};
let Ub=E(B8);
let AJt=(a,b,c,d)=>{if(b<(!d.q7?d.j4:c.jn.length))return (-1);d.lS=1;d.xU=1;return a.jv.fD(b,c,d);},
Vj=(a,b)=>{return 0;},
ADI=a=>{return A(403);};
function NQ(){B8.call(this);this.uS=null;}
let ZD=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.j4){if(!b)break b;if(d.oi&&b==d.l1)break b;e=a.uS;f=b-1|0;if(f>=0&&f<c.jn.length){f=c.jn.charCodeAt(f);if(b<0)break a;if(b>=c.jn.length)break a;if(!e.gv(f,c.jn.charCodeAt(b)))break c;else break b;}c=new T;c.jp=1;c.jq=1;B(c);}}return (-1);}return a.jv.fD(b,c,d);}c=new T;c.jp=1;c.jq=1;B(c);},
ADd=(a,b)=>{return 0;},
XD=a=>{return A(404);};
let T9=E(Cg);
let AQn=(a,b,c,d)=>{let e,f,g,h,i;e=d.j4;f=b+1|0;if(f>e){d.lS=1;return (-1);}if(b>=0&&b<c.jn.length){g=Cf(c.jn.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.jn.length){h=c.jn.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.jv.fD(i,c,d);}c=new T;c.jp=1;c.jq=1;B(c);}}}return a.jv.fD(f,c,d);}c=new T;c.jp=1;c.jq=1;B(c);},
AA8=a=>{return A(405);},
YS=(a,b)=>{a.jv=b;},
AI1=a=>{return (-2147483602);},
YQ=(a,b)=>{return 1;};
function OQ(){Cg.call(this);this.sD=null;}
let AJn=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.j4;f=b+1|0;if(f>e){d.lS=1;return (-1);}if(b>=0&&b<c.jn.length){g=c.jn.charCodeAt(b);h=Cf(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.jn.length){i=c.jn.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.sD.gt(((g&1023)<<10|i&1023)+65536|0)?(-1):a.jv.fD(j,c,d);}c=new T;c.jp=1;c.jq=1;B(c);}}}return a.sD.gt(g)?(-1):a.jv.fD(f,c,d);}c=new T;c.jp=1;c.jq=1;B(c);},
Z$=a=>{return A(406);},
AMa=(a,b)=>{a.jv=b;},
U$=a=>{return (-2147483602);},
AQR=(a,b)=>{return 1;};
function TZ(){B8.call(this);this.q3=0;}
let AF$=(a,b,c,d)=>{let e,f;e=!d.oi?c.jn.length:d.j4;if(b>=e){e=a.q3;d.kw.data[e]=0;return a.jv.fD(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.jn.length){if(c.jn.charCodeAt(b)!=10)break a;else{f=a.q3;d.kw.data[f]=1;return a.jv.fD(b+1|0,c,d);}}c=new T;c.jp=1;c.jq=1;B(c);}}return (-1);},
ACQ=(a,b)=>{let c,d,e;c=a.q3;d=b.kw.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AGV=a=>{return A(402);};
function RE(){B8.call(this);this.q$=0;}
let AJr=(a,b,c,d)=>{let e;if((!d.oi?c.jn.length-b|0:d.j4-b|0)<=0){e=a.q$;d.kw.data[e]=0;return a.jv.fD(b,c,d);}if(b>=0&&b<c.jn.length){if(c.jn.charCodeAt(b)!=10)return (-1);e=a.q$;d.kw.data[e]=1;return a.jv.fD(b+1|0,c,d);}c=new T;c.jp=1;c.jq=1;B(c);},
ACB=(a,b)=>{let c,d,e;c=a.q$;d=b.kw.data;e=!d[c]?0:1;d[c]=(-1);return e;},
WI=a=>{return A(407);};
function Nh(){B8.call(this);this.po=0;}
let AET=(a,b,c,d)=>{let e,f,g;e=!d.oi?c.jn.length-b|0:d.j4-b|0;if(!e){e=a.po;d.kw.data[e]=0;return a.jv.fD(b,c,d);}a:{if(e<2){if(b>=0&&b<c.jn.length){f=c.jn.charCodeAt(b);g=97;break a;}c=new T;c.jp=1;c.jq=1;B(c);}if(b>=0&&b<c.jn.length){f=c.jn.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.jn.length){g=c.jn.charCodeAt(e);break a;}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.po;d.kw.data[e]=0;return a.jv.fD(b,c,d);case 13:if(g!=10){e=a.po;d.kw.data[e]=0;return a.jv.fD(b,
c,d);}e=a.po;d.kw.data[e]=0;return a.jv.fD(b,c,d);default:}return (-1);},
Z2=(a,b)=>{let c,d,e;c=a.po;d=b.kw.data;e=!d[c]?0:1;d[c]=(-1);return e;},
ADh=a=>{return A(408);};
function Gj(){let a=this;Cg.call(a);a.pD=0;a.oy=0;}
let Xh=(a,b,c,d)=>{let e,f,g,h,i;e=H9(a,d);if(e!==null&&(b+e.jn.length|0)<=d.j4){f=0;a:{b:{c:{d:{while(true){if(f>=e.jn.length){g=a.oy;d.kw.data[g]=e.jn.length;return a.jv.fD(b+e.jn.length|0,c,d);}if(f<0)break c;if(f>=e.jn.length)break c;h=e.jn.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.jn.length)break d;if(h!=c.jn.charCodeAt(i)){if(f<0)break a;if(f>=e.jn.length)break a;g=FI(e.jn.charCodeAt(f));if(i<0)break b;if(i>=c.jn.length)break b;if(g!=c.jn.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new T;c.jp=1;c.jq
=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}return (-1);},
ALh=(a,b)=>{a.jv=b;},
H9=(a,b)=>{let c,d,e,f,g;c=a.pD;d=b.k1.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.o3.jn.length?Cv(b.o3,f,g):null;},
WQ=a=>{let b,c,d,e,f,g,h;b=a.ky;c=new J;c.jo=G(16);F(c,c.jm,A(409));L(c,c.jm,b,10);d=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){d.jn=K(e.data,0,g);return d;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
ALM=(a,b)=>{let c,d,e;c=a.oy;d=b.kw.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let T7=E(Gj);
let Z_=(a,b,c,d)=>{let e,f,g;e=H9(a,d);if(e!==null&&(b+e.jn.length|0)<=d.j4){f=!LW(c,e,b)?(-1):e.jn.length;if(f<0)return (-1);g=a.oy;d.kw.data[g]=f;return a.jv.fD(b+f|0,c,d);}return (-1);},
AOq=(a,b,c,d)=>{let e,f,g;e=H9(a,d);f=d.l1;if(e!==null&&(b+e.jn.length|0)<=f){while(true){if(b>f)return (-1);g=Pm(c,e,b);if(g<0)return (-1);if(a.jv.fD(g+e.jn.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
WK=(a,b,c,d,e)=>{let f,g;f=H9(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=ABE(d,f,c);if(g<0)break a;if(g<b)break a;if(a.jv.fD(g+f.jn.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AH3=(a,b)=>{return 1;},
AOY=a=>{let b,c,d,e,f,g,h;b=a.ky;c=new J;c.jo=G(16);F(c,c.jm,A(410));L(c,c.jm,b,10);d=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){d.jn=K(e.data,0,g);return d;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);};
function Qq(){Gj.call(this);this.wD=0;}
let AG8=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pD;f=d.k1.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.o3.jn.length?Cv(d.o3,h,i):null;if(j!==null&&(b+j.jn.length|0)<=d.j4){i=0;a:{b:{while(true){if(i>=j.jn.length){e=a.oy;d.kw.data[e]=j.jn.length;return a.jv.fD(b+j.jn.length|0,c,d);}if(i<0)break a;if(i>=j.jn.length)break a;e=j.jn.charCodeAt(i);if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}e=Cr(BO,e)&65535;if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value)
:null)));}g=Cr(BP,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.jn.length)break b;e=c.jn.charCodeAt(h);if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}e=Cr(BO,e)&65535;if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}if(g!=(Cr(BP,e)&65535))break;i=i+1|0;}return (-1);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}return (-1);},
YL=a=>{let b,c,d,e,f,g,h;b=a.wD;c=new J;c.jo=G(16);F(c,c.jm,A(411));L(c,c.jm,b,10);d=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){d.jn=K(e.data,0,g);return d;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);};
let Oi=E(Z);
let ACs=(a,b,c,d,e)=>{let f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jo.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Yr=(a,b,c,d)=>{let e,f,g,h,i;e=a.jm;Bd(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jo.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
Zb=(a,b)=>{H0(a,b);},
ANs=(a,b,c)=>{Bd(a,b,b+1|0);a.jo.data[b]=c;return a;};
function QS(){let a=this;Cs.call(a);a.ln=null;a.sd=null;a.sO=null;}
let AAK=(a,b)=>{let c,d,e,f,g,h;c=N;N=c+1|0;d=new Z;d.jo=G(20);a.jD=(L(d,d.jm,c,10)).S();a.j9=1;d=new H;e=b.jo;f=e.data;g=b.jm;h=f.length;if(g>=0&&g<=(h-0|0)){d.jn=K(e.data,0,g);a.ln=d;c=b.jm;a.j9=c;a.sd=R6(c);a.sO=R6(a.j9);c=0;a:{b:{while(c<(a.j9-1|0)){b=a.sd;d=a.ln;if(c<0)break a;if(c>=d.jn.length)break a;QA(b,d.jn.charCodeAt(c),(a.j9-c|0)-1|0);b=a.sO;d=a.ln;g=(a.j9-c|0)-1|0;if(g<0)break b;if(g>=d.jn.length)break b;QA(b,d.jn.charCodeAt(g),(a.j9-c|0)-1|0);c=c+1|0;}return;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp
=1;b.jq=1;B(b);}b=new I;b.jp=1;b.jq=1;B(b);},
AEY=a=>{let b=new QS();AAK(b,a);return b;},
AAO=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.j9){e=d+b|0;if(e<0)break a;if(e>=c.jn.length)break a;f=c.jn.charCodeAt(e);g=a.ln;if(d<0)break b;if(d>=g.jn.length)break b;if(f!=g.jn.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.j9;}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);},
Yc=(a,b,c,d)=>{let e,f;e=d.j4;while(true){if(b>e)return (-1);f=AOF(a,c,b,e);if(f<0)return (-1);if(a.jv.fD(f+a.j9|0,c,d)>=0)break;b=f+1|0;}return f;},
AC8=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=ANt(a,d,b,c);if(c<0)return (-1);if(a.jv.fD(c+a.j9|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
AJN=a=>{let b,c,d,e,f,g,h;b=a.ln;c=new J;c.jo=G(16);F(c,c.jm,A(412));d=c.jm;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){b.jn=K(e.data,0,g);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
AEa=(a,b)=>{let c,d,e;if(b instanceof DP){c=b.lD;b=a.ln;if(0<b.jn.length)return c!=b.jn.charCodeAt(0)?0:1;b=new T;b.jp=1;b.jq=1;B(b);}if(b instanceof DX){b=b;d=Cv(a.ln,0,1);b=b.mt;if(0>=d.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}return (!b.ga(d.jn.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof Dx)){if(!(b instanceof Ea))return 1;a:{if(a.ln.jn.length>1){e=b.oG;b=a.ln;if(0>=b.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}c=b.jn.charCodeAt(0);b=a.ln;if(1>=b.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}if(e==(((c&1023)<<10|
b.jn.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.ln;if(0>=d.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}b:{c:{if(!b.ga(d.jn.charCodeAt(0))){if(a.ln.jn.length<=1)break c;d=a.ln;if(0>=d.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}c=d.jn.charCodeAt(0);d=a.ln;if(1>=d.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}if(!b.ga(((c&1023)<<10|d.jn.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AOF=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ln;f=a.j9-1|0;if(f>=0&&f<e.jn.length){g=e.jn.charCodeAt(f);a:{b:{c:{while(true){f=a.j9;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.jn.length)break c;h=b.jn.charCodeAt(f);if(h==g){f=0;d:{while(f<a.j9){i=f+c|0;if(i<0)break a;if(i>=b.jn.length)break a;j=b.jn.charCodeAt(i);e=a.ln;if(f<0)break b;if(f>=e.jn.length)break b;if(j!=e.jn.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+RA(a.sd,h)|0;}return c;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq
=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);},
ANt=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ln;if(0>=e.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}f=e.jn.charCodeAt(0);g=(b.jn.length-d|0)-a.j9|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.jn.length)break c;h=b.jn.charCodeAt(d);if(h==f){g=0;d:{while(g<a.j9){i=g+d|0;if(i<0)break a;if(i>=b.jn.length)break a;j=b.jn.charCodeAt(i);e=a.ln;if(g<0)break b;if(g>=e.jn.length)break b;if(j!=e.jn.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-RA(a.sO,h)|0;}return d;}b=new T;b.jp=1;b.jq
=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);};
function Nf(){Cs.call(this);this.p0=null;}
let AHg=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.p0.jn.length)return a.p0.jn.length;e=a.p0;if(d<0)break a;if(d>=e.jn.length)break a;f=e.jn.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.jn.length)break b;h=c.jn.charCodeAt(g);if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}h=Cr(BO,h)&65535;if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}if(f!=(Cr(BP,h)&65535))break;d=d+1|0;}return (-1);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq
=1;B(c);},
AEm=a=>{let b,c,d,e,f,g,h;b=a.p0;c=new J;c.jo=G(16);F(c,c.jm,A(413));d=c.jm;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){b.jn=K(e.data,0,g);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
function NM(){Cs.call(this);this.o1=null;}
let AMw=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.o1.jn.length)return a.o1.jn.length;e=a.o1;if(d<0)break c;if(d>=e.jn.length)break c;f=e.jn.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.jn.length)break d;if(f!=c.jn.charCodeAt(g)){e=a.o1;if(d<0)break a;if(d>=e.jn.length)break a;h=FI(e.jn.charCodeAt(d));if(g<0)break b;if(g>=c.jn.length)break b;if(h!=c.jn.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=
1;c.jq=1;B(c);},
AOd=a=>{let b,c,d,e,f,g,h;b=a.o1;c=new J;c.jo=G(16);F(c,c.jm,A(414));d=c.jm;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){b.jn=K(e.data,0,g);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
let ARv=E();
function Nd(){Cs.call(this);this.sz=0;}
let AMA=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.jn.length){e=c.jn.charCodeAt(b);if(d>=0&&d<c.jn.length){d=c.jn.charCodeAt(d);b=a.sz;d=((e&1023)<<10|d&1023)+65536|0;if(BO===null){if(BB===null)BB=DC();BO=Co(Ct((BB.value!==null?W(BB.value):null)));}d=Cr(BO,d);if(BP===null){if(BC===null)BC=Dz();BP=Co(Ct((BC.value!==null?W(BC.value):null)));}return b!=Cr(BP,d)?(-1):2;}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);},
ARa=a=>{let b,c,d,e,f,g;b=new H;c=EO(a.sz);b.jn=K(c.data,0,c.data.length);d=new J;d.jo=G(16);F(d,d.jm,A(394));F(d,d.jm,b);b=new H;c=d.jo;e=c.data;f=d.jm;g=e.length;if(f>=0&&f<=(g-0|0)){b.jn=K(c.data,0,f);return b;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
function He(){Cg.call(this);this.nN=0;}
let AJX=(a,b)=>{a.jv=b;},
Kg=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.j4){d.lS=1;return (-1);}if(b>=0&&b<c.jn.length){a:{f=c.jn.charCodeAt(b);if(b>d.l1){b=b-1|0;if(b>=0&&b<c.jn.length){if(!((c.jn.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new T;c.jp=1;c.jq=1;B(c);}}if(a.nN!=f)return (-1);return a.jv.fD(e,c,d);}c=new T;c.jp=1;c.jq=1;B(c);},
AD7=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof H)){e=d.j4;a:{while(true){if(b>e){b=(-1);break a;}if(Kg(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.l1;g=d.j4;b:{while(true){if(b>=g)return (-1);h=Hl(c,a.nN,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.jn.length)break b;if((c.jn.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.jv;b=h+1|0;if(i.fD(b,c,d)>=0)break;}return h;}c=new T;c.jp=1;c.jq=1;B(c);},
AA4=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(Kg(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.l1;b:{c:{while(true){if(c<b)return (-1);g=FD(d,a.nN,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.jn.length)break b;if((d.jn.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.jv.fD(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new T;d.jp=1;d.jq=1;B(d);},
ANF=a=>{let b,c,d,e,f,g,h;b=a.nN;c=new J;c.jo=G(16);d=c.jm;Bd(c,d,d+1|0);e=c.jo;f=e.data;f[d]=b;g=new H;d=c.jm;h=f.length;if(d>=0&&d<=(h-0|0)){g.jn=K(e.data,0,d);return g;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
Wy=(a,b)=>{if(b instanceof DP)return 0;if(b instanceof DX)return 0;if(b instanceof Dx)return 0;if(b instanceof Ea)return 0;if(b instanceof Hm)return 0;if(!(b instanceof He))return 1;return b.nN!=a.nN?0:1;},
ANU=(a,b)=>{return 1;};
function Hm(){Cg.call(this);this.ny=0;}
let Y9=(a,b)=>{a.jv=b;},
Jx=(a,b,c,d)=>{let e,f,g;e=d.j4;f=b+1|0;e=Cf(f,e);if(e>0){d.lS=1;return (-1);}if(b>=0&&b<c.jn.length){a:{g=c.jn.charCodeAt(b);if(e<0){if(f>=0&&f<c.jn.length){if(!((c.jn.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new T;c.jp=1;c.jq=1;B(c);}}if(a.ny!=g)return (-1);return a.jv.fD(f,c,d);}c=new T;c.jp=1;c.jq=1;B(c);},
AKx=(a,b,c,d)=>{let e,f;if(!(c instanceof H)){e=d.j4;a:{while(true){if(b>e){b=(-1);break a;}if(Jx(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.j4;b:{while(true){if(b>=e)return (-1);f=Hl(c,a.ny,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.jn.length)break b;if((c.jn.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.jv.fD(b,c,d)>=0)break;}return f;}c=new T;c.jp=1;c.jq=1;B(c);},
AMv=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(Jx(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.j4;b:{c:{while(true){if(c<b)return (-1);g=FD(d,a.ny,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.jn.length)break b;if((d.jn.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.jv.fD(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new T;d.jp=1;d.jq=1;B(d);},
AQl=a=>{let b,c,d,e,f,g,h;b=a.ny;c=new J;c.jo=G(16);d=c.jm;Bd(c,d,d+1|0);e=c.jo;f=e.data;f[d]=b;g=new H;d=c.jm;h=f.length;if(d>=0&&d<=(h-0|0)){g.jn=K(e.data,0,d);return g;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
AAS=(a,b)=>{if(b instanceof DP)return 0;if(b instanceof DX)return 0;if(b instanceof Dx)return 0;if(b instanceof Ea)return 0;if(b instanceof He)return 0;if(!(b instanceof Hm))return 1;return b.ny!=a.ny?0:1;},
AKJ=(a,b)=>{return 1;};
function Ea(){let a=this;Cs.call(a);a.oB=0;a.oe=0;a.oG=0;}
let ALN=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.jn.length){e=c.jn.charCodeAt(b);if(d>=0&&d<c.jn.length){d=c.jn.charCodeAt(d);return a.oB==e&&a.oe==d?2:(-1);}c=new T;c.jp=1;c.jq=1;B(c);}c=new T;c.jp=1;c.jq=1;B(c);},
AIM=(a,b,c,d)=>{let e,f,g,h;if(c instanceof H){e=d.j4;a:{while(b<e){b=Hl(c,a.oB,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.jn.length)break a;f=c.jn.charCodeAt(b);if(a.oe==f&&a.jv.fD(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new T;c.jp=1;c.jq=1;B(c);}g=d.j4;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.j9|0)>d.j4){d.lS=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.jn.length)break b;e=c.jn.charCodeAt(b);if(h<0)break c;if(h>=c.jn.length)break c;f=c.jn.charCodeAt(h);h
=a.oB==e&&a.oe==f?2:(-1);h=h<0?(-1):a.jv.fD(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new T;X(c);B(c);}c=new T;X(c);B(c);},
Y7=(a,b,c,d,e)=>{let f,g,h;if(d instanceof H){a:{b:{while(true){if(c<b)return (-1);c=FD(d,a.oe,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.oB;if(c<0)break a;if(c>=d.jn.length)break a;if(f==d.jn.charCodeAt(c)&&a.jv.fD(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new T;d.jp=1;d.jq=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.j9|0)>e.j4){e.lS=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.jn.length)break c;h=d.jn.charCodeAt(c);if(g<0)break d;if(g>=d.jn.length)break d;g=d.jn.charCodeAt(g);f
=a.oB==h&&a.oe==g?2:(-1);f=f<0?(-1):a.jv.fD(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new T;X(d);B(d);}d=new T;X(d);B(d);},
AO4=a=>{let b,c,d,e,f,g,h;b=a.oB;c=a.oe;d=new J;d.jo=G(16);e=d.jm;Bd(d,e,e+1|0);d.jo.data[e]=b;b=d.jm;Bd(d,b,b+1|0);f=d.jo;g=f.data;g[b]=c;h=new H;c=d.jm;e=g.length;if(c>=0&&c<=(e-0|0)){h.jn=K(f.data,0,c);return h;}d=new I;d.jp=1;d.jq=1;Bn(d);B(d);},
ALs=(a,b)=>{if(b instanceof Ea)return b.oG!=a.oG?0:1;if(b instanceof Dx)return b.ga(a.oG);if(b instanceof DP)return 0;if(!(b instanceof DX))return 1;return 0;};
let IX=E(Hc);
let Zk=(a,b)=>{return b!=10?0:1;},
ALB=(a,b,c)=>{return b!=10?0:1;};
let IY=E(Hc);
let AMQ=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
APQ=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function SW(){let a=this;C.call(a);a.tq=null;a.rO=null;a.pH=0;a.wa=0;}
let AFk=(a,b)=>{let c,d;while(true){c=a.pH;if(b<c)break;a.pH=c<<1|1;}d=c<<1|1;a.pH=d;d=d+1|0;a.tq=U(d);a.rO=U(d);a.wa=b;},
R6=a=>{let b=new SW();AFk(b,a);return b;},
QA=(a,b,c)=>{let d,e,f,g;d=0;e=a.pH;f=b&e;while(true){g=a.tq.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.rO.data[f]=c;},
RA=(a,b)=>{let c,d,e,f;c=a.pH;d=b&c;e=0;while(true){f=a.tq.data[d];if(!f)break;if(f==b)return a.rO.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.wa;};
let IG=E(Bo);
let AEy=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return CR(BJ(b,9,13),32);};
let H_=E(Bo);
let AG$=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(b,48,57);};
let SH=E(Bo);
let AMg=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(b,97,122);};
let Te=E(Bo);
let ANV=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(b,65,90);};
let Ti=E(Bo);
let ABP=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(b,0,127);};
let IA=E(Bo);
let ZR=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(BJ(b,97,122),65,90);};
let IU=E(IA);
let ACK=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(BJ(BJ(b,97,122),65,90),48,57);};
let U0=E(Bo);
let AD6=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(BJ(BJ(b,33,64),91,96),123,126);};
let Jr=E(IU);
let Vq=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(BJ(BJ(BJ(BJ(BJ(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let QQ=E(Jr);
let AHV=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return CR(BJ(BJ(BJ(BJ(BJ(BJ(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let Re=E(Bo);
let AAH=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return CR(CR(b,32),9);};
let Ph=E(Bo);
let AHN=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return CR(BJ(b,0,31),127);};
let O4=E(Bo);
let APV=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(BJ(BJ(b,48,57),97,102),65,70);};
let Tm=E(Bo);
let AIY=a=>{let b,c;b=new RJ;b.xt=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let U8=E(Bo);
let VB=a=>{let b,c;b=new Nn;b.xz=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let SV=E(Bo);
let AEX=a=>{let b,c;b=new Q7;b.xc=a;c=new Bf;c.jC=U(64);b.jH=c;return b;};
let SA=E(Bo);
let ALR=a=>{let b,c;b=new Q6;b.w6=a;c=new Bf;c.jC=U(64);b.jH=c;return b;};
let TO=E(Bo);
let AAE=a=>{let b,c;b=new Uh;b.xX=a;c=new Bf;c.jC=U(64);b.jH=c;Ik(c,0,2048);b.kn=1;return b;};
let N5=E(Bo);
let ABe=a=>{let b,c;b=new OR;b.xF=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let NG=E(Bo);
let APH=a=>{let b,c;b=new Oe;b.ye=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let S2=E(Bo);
let Vn=a=>{let b,c;b=new Qd;b.xu=a;c=new Bf;c.jC=U(64);b.jH=c;return b;};
let S$=E(Bo);
let AGm=a=>{let b,c;b=new Nj;b.wl=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let PD=E(Bo);
let ABs=a=>{let b,c;b=new Nm;b.xH=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let Rk=E(Bo);
let ADi=a=>{let b,c;b=new N9;b.xW=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let UG=E(Bo);
let AGr=a=>{let b,c;b=new O_;b.x8=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let S7=E(Bo);
let AOk=a=>{let b,c;b=new Pe;b.xd=a;c=new Bf;c.jC=U(64);b.jH=c;return b;};
let Qk=E(Bo);
let AKU=a=>{let b,c;b=new Sb;b.xJ=a;c=new Bf;c.jC=U(64);b.jH=c;return b;};
let PC=E(Bo);
let AIO=a=>{let b,c;b=new Rt;b.wo=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let U4=E(Bo);
let AL8=a=>{let b,c;b=new Nx;b.ym=a;c=new Bf;c.jC=U(64);b.jH=c;b.kn=1;return b;};
let HV=E(Bo);
let AGO=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return CR(BJ(BJ(BJ(b,97,122),65,90),48,57),95);};
let TU=E(HV);
let AIn=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;b=Ex(CR(BJ(BJ(BJ(b,97,122),65,90),48,57),95),1);b.kn=1;return b;};
let QT=E(IG);
let X_=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;b=Ex(CR(BJ(b,9,13),32),1);b.kn=1;return b;};
let Px=E(H_);
let ADW=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;b=Ex(BJ(b,48,57),1);b.kn=1;return b;};
function Bm(){let a=this;Bo.call(a);a.jN=0;a.jO=0;}
let APF=(a,b,c)=>{a.jN=b;a.jO=c;},
Bw=(a,b)=>{let c=new Bm();APF(c,a,b);return c;},
AGS=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(b,a.jN,a.jO);};
let Pt=E(Bo);
let APu=a=>{let b,c;b=new Cz;c=new Bf;c.jC=U(64);b.jH=c;c=new Bf;c.jC=U(2);b.jK=c;return BJ(BJ(b,65279,65279),65520,65533);};
function K4(){let a=this;Bo.call(a);a.s_=0;a.rJ=0;a.ua=0;}
let Z1=(a,b,c)=>{a.rJ=c;a.s_=b;},
B$=(a,b)=>{let c=new K4();Z1(c,a,b);return c;},
APG=(a,b,c,d)=>{a.ua=d;a.rJ=c;a.s_=b;},
AGL=(a,b,c)=>{let d=new K4();APG(d,a,b,c);return d;},
ACw=a=>{let b,c,d;b=new Jg;c=a.s_;d=new Bf;d.jC=U(64);b.jH=d;b.ra=c;if(a.ua)Ik(d,0,2048);b.kn=a.rJ;return b;};
function K$(){let a=this;Bo.call(a);a.s9=0;a.rQ=0;a.tR=0;}
let ABt=(a,b,c)=>{a.rQ=c;a.s9=b;},
Gm=(a,b)=>{let c=new K$();ABt(c,a,b);return c;},
Vp=(a,b,c,d)=>{a.tR=d;a.rQ=c;a.s9=b;},
AEU=(a,b,c)=>{let d=new K$();Vp(d,a,b,c);return d;},
Vo=a=>{let b,c,d;b=new QX;c=a.s9;d=new Bf;d.jC=U(64);b.jH=d;b.ra=c;if(a.tR)Ik(d,0,2048);b.kn=a.rQ;return b;};
let DH=E(Bz);
let W4=E();
let AAT=E();
let Y2=E();
let AP8=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new Ma;d=G(b.jn.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.r8=d;f=FE(c);d=U(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=FE(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=FE(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.jn.length)break;e[f]=b.jn.charCodeAt(f);f=f+1|0;}b=new T;b.jp=1;b.jq=1;B(b);},
Ct=b=>{let c,d,e,f,g,h,i,j,k,l;c=new Ma;d=G(b.jn.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.r8=d;f=FE(c);d=U(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+FE(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=FE(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.jn.length)break;e[f]=b.jn.charCodeAt(f);f=f+1|0;}b=new T;b.jp=1;b.jq=1;B(b);},
Co=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=U(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bj;l.jp=1;l.jq=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new Tr;l.uQ=b;l.u1=c;return l;},
It=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
ARs=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=S(HU,16384);d=c.data;e=BE(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.jn.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BI;b.jG=j;k=b;j.classObject=k;}}b=D1(b);if(b===null){b=new C5;b.jp=1;b.jq=1;B(b);}if(b===V(Bq)){b=new Bj;b.jp=1;b.jq=1;B(b);}if(g<0){b=new DH;b.jp=1;b.jq=1;B(b);}k=DF(b.jG,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.jn.length)break c;l=It(b.jn.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.jn.length)break b;l=It(b.jn.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.jn.length)break a;m=m|Da(n,It(b.jn.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.jn.length)break;m=It(b.jn.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new HU;l=h+f|0;q=BE(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.sk=h;j.sL=l;j.sn=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new HU;t=h+f|0;q=BE(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.sk=h;j.sL=t;j.sn=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);}b=new T;b.jp=1;b.jq=1;B(b);};
function Tr(){let a=this;C.call(a);a.uQ=null;a.u1=null;}
function HU(){let a=this;C.call(a);a.sk=0;a.sL=0;a.sn=null;}
function Ma(){let a=this;C.call(a);a.r8=null;a.uF=0;}
let AD2=E();
let FE=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.r8.data;f=b.uF;b.uF=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Da(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AMh=E();
function PP(){let a=this;Dq.call(a);a.t7=null;a.t6=0;a.pw=null;}
let ANo=(a,b)=>{return;},
ABw=(a,b)=>{let c,d,e,f,g,h;if(BT===null){b=new CU;c=new Cu;c.kW=BE(32);b.ll=c;c=new J;BA(c);c.jo=G(16);b.kZ=c;b.kY=G(32);b.k2=0;b.k3=Cm;BT=b;}b=a.t7;c=new J;c.jo=G(16);F(c,c.jm,A(415));d=c.jm;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){b.jn=K(e.data,0,g);BU(Bs(b));BU("\n");return;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
Xe=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(JQ(Ic(A(110),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.pw;b.sA=b.qJ.js;if(a.t6){e=0;while(true){b=a.pw;c=b.qJ;f=Cf(e,c.js);if(f>=0)break a;if(f>=0){g=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,e,10);F(b,b.jm,A(19));e=c.js;L(b,b.jm,e,10);c=new H;d=b.jo;h=d.data;f=b.jm;i=h.length;if(f>=0&&f<=(i-0|0)){c.jn=K(d.data,0,f);g.jp=1;g.jq=1;g.jr=c;B(g);}b=new I;X(b);B(b);}AEs(b,c.jE.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(JQ(Ic(A(108),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AF9(h[1]);b=h[2];if(b===null){b=new Cp;b.jp=1;b.jq=1;b.jr=A(75);B(b);}m=ANN(b,0,b.jn.length,10);n=h[3];o=Fk;if(k===A(416))i=1;else if(!(A(416) instanceof H))i=0;else{b=A(416);i=k.jn!==b.jn?0:1;}if(i)o=Fd;if(k===A(417))i=1;else if(!(A(417) instanceof H))i=0;else{b=A(417);i=k.jn!==b.jn?0:1;}if(i)o=E6;if(k===A(418))i=1;else if(!(A(418) instanceof H))i=0;else{b=A(418);i=k.jn!==b.jn?0:1;}if(i)o=E0;if(k===A(226))i=1;else if(!(A(226) instanceof H))i=0;else{b=A(226);i=k.jn!==b.jn?0:1;}if(i)o=Jd;if
(o===E0&&!F1.vC)m=B6;g=new Rw;g.ss=l;g.uf=o;g.vR=m;g.t9=n;C6(a.pw.ut,l,l);BN(a.pw.qJ,g);f=f+1|0;}b=new Q;b.jp=1;b.jq=1;b.jr=A(419);B(b);},
AIA=(a,b,c)=>{return Xe(a,b,c);};
let CC=E(Bx);
let Zm=null,AI4=null,AAA=null,AAz=null,Zs=null,Y6=null,Yv=null,AAn=null,Ya=null,AFS=null;
let H5=()=>{H5=BH(CC);WV();};
let WV=()=>{let b,c,d,e,f,g,h,i,j;b=new TH;H5();b.jB=A(420);b.jw=0;Zm=b;c=new TI;c.jB=A(421);c.jw=1;AI4=c;d=new TM;d.jB=A(422);d.jw=2;AAA=d;e=new TN;e.jB=A(423);e.jw=3;AAz=e;f=new TK;f.jB=A(424);f.jw=4;Zs=f;g=new TL;g.jB=A(425);g.jw=5;Y6=g;h=new TF;h.jB=A(426);h.jw=6;Yv=h;i=new TG;i.jB=A(427);i.jw=7;AAn=i;j=new TD;j.jB=A(428);j.jw=8;Ya=j;AFS=P(CC,[b,c,d,e,f,g,h,i,j]);};
function Fj(){let a=this;G7.call(a);a.ok=0;a.mk=null;}
let AQM=E(0);
let YF=b=>{let c,d;if(b===A(429))c=1;else if(!(A(429) instanceof H))c=0;else{d=A(429);c=b.jn!==d.jn?0:1;}a:{if(!c){if(b===A(430))c=1;else if(!(A(430) instanceof H))c=0;else{d=A(430);c=b.jn!==d.jn?0:1;}if(!c){if(b===A(431))c=1;else if(!(A(431) instanceof H))c=0;else{d=A(431);c=b.jn!==d.jn?0:1;}if(!c){if(b===A(432))c=1;else if(!(A(432) instanceof H))c=0;else{d=A(432);c=b.jn!==d.jn?0:1;}if(!c){if(b===A(433))c=1;else if(!(A(433) instanceof H))c=0;else{d=A(433);c=b.jn!==d.jn?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AEB=b=>{let c,d;if(b===A(434))c=1;else if(!(A(434) instanceof H))c=0;else{d=A(434);c=b.jn!==d.jn?0:1;}a:{b:{if(c)break b;if(b===A(435))c=1;else if(!(A(435) instanceof H))c=0;else{d=A(435);c=b.jn!==d.jn?0:1;}if(c)break b;if(b===A(436))c=1;else if(!(A(436) instanceof H))c=0;else{d=A(436);c=b.jn!==d.jn?0:1;}if(c)break b;if(b===A(437))c=1;else if(!(A(437) instanceof H))c=0;else{d=A(437);c=b.jn!==d.jn?0:1;}if(c)break b;if(b===A(438))c=1;else if(!(A(438) instanceof H))c=0;else{d=A(438);c=b.jn!==d.jn?0:1;}if(c)break b;if
(b===A(439))c=1;else if(!(A(439) instanceof H))c=0;else{d=A(439);c=b.jn!==d.jn?0:1;}if(c)break b;if(b===A(440))c=1;else if(!(A(440) instanceof H))c=0;else{d=A(440);c=b.jn!==d.jn?0:1;}if(c)break b;if(b===A(441))c=1;else if(!(A(441) instanceof H))c=0;else{d=A(441);c=b.jn!==d.jn?0:1;}if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof H))c=0;else{d=A(442);c=b.jn!==d.jn?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let SJ=E(0);
let Pr=E();
let APA=(a,b,c)=>{a.gH(W(b),Df(c,"handleEvent"));},
AI9=(a,b)=>{return !!a.gI(b);},
Y$=(a,b,c)=>{a.gJ(W(b),Df(c,"handleEvent"));},
AFN=(a,b,c,d)=>{a.gK(W(b),Df(c,"handleEvent"),d?1:0);},
AMZ=(a,b,c,d)=>{a.gL(W(b),Df(c,"handleEvent"),d?1:0);};
function LN(){let a=this;C.call(a);a.sj=null;a.tu=null;a.qB=null;a.tC=0;a.rg=null;}
let AJj=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.sj;if(e!==E6&&e!==E0){if(e===Fd){b=window.document.createElement("img");d=Bs(W(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new HT;d.mC=c;d.sU=e;d.s3=b;}else if(e===Fk)d=W(c.result);}else{e=c.result;b=new Int8Array(e);d=new HT;d.mC=b;d.sU=e;}if(d!==null){Gz(a.rg.t_,a.sj,a.tu,d);BN(a.qB,a.tu);if(a.qB.js==a.tC){b=a.rg.tY;d=new NA;d.sG=a;BN(b.qc,d);}}},
AHp=(a,b)=>{AJj(a,b);};
function E7(){Bx.call(this);this.p$=null;}
let Fd=null,E0=null,Fk=null,E6=null,Jd=null,MS=null;
let AJs=()=>{let b,c,d,e,f;b=new E7;b.jB=A(443);b.jw=0;b.p$=A(416);Fd=b;c=new E7;c.jB=A(444);c.jw=1;c.p$=A(418);E0=c;d=new E7;d.jB=A(445);d.jw=2;d.p$=A(446);Fk=d;e=new E7;e.jB=A(447);e.jw=3;e.p$=A(417);E6=e;f=new E7;f.jB=A(448);f.jw=4;f.p$=A(226);Jd=f;MS=P(E7,[b,c,d,e,f]);};
let AER=E();
let Ku=null,Oh=null;
let ANx=b=>{let c,d,e,f,g,h,i,j,k,l;c=new J;c.jo=G(16);d=AL7();e=0;f=Oh.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.jm;if(i>0){Bd(c,i,i+1|0);c.jo.data[i]=32;}j=d.data[e];F(c,c.jm,j);}e=e+1|0;h=h+1|0;}j=new H;d=c.jo;k=d.data;e=c.jm;l=k.length;if(e>=0&&e<=(l-0|0)){j.jn=K(d.data,0,e);return j;}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
AL7=()=>{if(Ku===null)Ku=P(H,[A(449),A(450),A(451),A(452),A(453),A(454),A(455),A(456),A(457),A(458),A(459),A(460)]);return Ku;},
WR=()=>{Oh=H3([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let QK=E(0);
function Ha(){let a=this;L0.call(a);a.l5=null;a.w$=null;a.p8=0;a.qY=0;a.nK=null;a.tc=null;}
let XM=a=>{let b,c,d,e,f,g,h;b=new J;b.jo=G(16);c=ANx(Kt(a.p8,a.qY));F(b,b.jm,c);d=b.jm;if(d>0){Bd(b,d,d+1|0);b.jo.data[d]=32;}c=a.l5;if(c.jI===null)c.jI=W(c.jG.$meta.name);c=c.jI;F(b,b.jm,c);d=b.jm;Bd(b,d,d+1|0);b.jo.data[d]=40;e=a.nK.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.jm;Bd(b,h,h+1|0);b.jo.data[h]=44;}c=g[f];if(c.jI===null)c.jI=W(c.jG.$meta.name);c=c.jI;F(b,b.jm,c);f=f+1|0;}d=b.jm;Bd(b,d,d+1|0);g=b.jo;e=g.data;e[d]=41;c=new H;d=b.jm;h=e.length;if(d>=0&&d<=(h-0|0)){c.jn=K(g.data,
0,d);return c;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
AM1=(a,b)=>{let c,d,e,f,g;if(a.p8&1){c=new LL;c.jp=1;c.jq=1;B(c);}if(a.tc===null){c=new Ju;c.jp=1;c.jq=1;B(c);}d=b.data;e=d.length;if(e!=a.nK.data.length){c=new Bj;c.jp=1;c.jq=1;B(c);}f=0;while(f<e){if(!(a.nK.data[f].jG.$meta.primitive?1:0)&&d[f]!==null){c=a.nK.data[f];g=d[f];c=c.jG;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&LK(g.constructor,c)?1:0)){c=new Bj;c.jp=1;c.jq=1;B(c);}}if((a.nK.data[f].jG.$meta.primitive?1:0)&&d[f]===null){c=new Bj;c.jp=1;c.jq=1;B(c);}f=f+1|0;}c=b.data;g=new(a.l5.jG);a.tc.call(g,
c);return g;};
let T=E(I);
function T1(){let a=this;Bh.call(a);a.t0=null;a.x1=null;}
let ABY=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.lC^Cy(a.t0,c):0;};
function T0(){let a=this;Bh.call(a);a.vE=null;a.vS=null;a.xM=null;}
let Wc=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.lC^Cy(a.vE,c):0;return a.vS.ga(b)&&!d?1:0;};
function Ou(){let a=this;Bh.call(a);a.qO=null;a.wr=null;}
let AGB=(a,b)=>{return a.j0^Cy(a.qO,b);},
ADA=a=>{let b,c,d,e,f,g,h,i,j,k;b=new J;b.jo=G(16);c=HK(a.qO,0);while(c>=0){d=(EO(c)).data;e=0;f=d.length;g=b.jm;Bd(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jo.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jm;Bd(b,g,g+1|0);b.jo.data[g]=124;c=HK(a.qO,c+1|0);}e=b.jm;if(e>0)T_(b,e-1|0);k=new H;d=b.jo;h=d.data;e=b.jm;g=h.length;if(e>=0&&e<=(g-0|0)){k.jn=K(d.data,0,e);return k;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);};
function OB(){let a=this;Bh.call(a);a.uK=null;a.xy=null;}
let ALP=(a,b)=>{return a.uK.ga(b);};
function Oy(){let a=this;Bh.call(a);a.rK=0;a.t$=null;a.sq=null;}
let AMz=(a,b)=>{return !(a.rK^Cy(a.sq.jK,b))&&!(a.rK^a.sq.mT^a.t$.ga(b))?0:1;};
function Oz(){let a=this;Bh.call(a);a.rP=0;a.vK=null;a.s0=null;}
let AHf=(a,b)=>{return !(a.rP^Cy(a.s0.jK,b))&&!(a.rP^a.s0.mT^a.vK.ga(b))?1:0;};
function OF(){let a=this;Bh.call(a);a.v6=0;a.vN=null;a.vH=null;a.wM=null;}
let ABi=(a,b)=>{return a.v6^(!a.vN.ga(b)&&!a.vH.ga(b)?0:1);};
function OG(){let a=this;Bh.call(a);a.uN=0;a.uI=null;a.uy=null;a.yj=null;}
let Vb=(a,b)=>{return a.uN^(!a.uI.ga(b)&&!a.uy.ga(b)?0:1)?0:1;};
function OD(){let a=this;Bh.call(a);a.uw=null;a.yl=null;}
let ADL=(a,b)=>{let c,d;c=a.uw;d=c.kp;return d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b);};
function OE(){let a=this;Bh.call(a);a.vQ=null;a.w3=null;}
let AHh=(a,b)=>{let c,d;c=a.vQ;d=c.kp;return (d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b))?0:1;};
function OH(){let a=this;Bh.call(a);a.uV=null;a.uJ=0;a.vv=null;}
let AOt=(a,b)=>{let c,d,e;c=a.uV;d=c.kp;e=d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b);return !e&&!(a.uJ^Cy(a.vv.jK,b))?0:1;};
function OI(){let a=this;Bh.call(a);a.va=null;a.vh=0;a.u4=null;}
let AAk=(a,b)=>{let c,d,e;c=a.va;d=c.kp;e=d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b);return !e&&!(a.vh^Cy(a.u4.jK,b))?1:0;};
function Ot(){let a=this;Bh.call(a);a.vu=0;a.vJ=null;a.vV=null;a.ww=null;}
let ARw=(a,b)=>{let c,d;a:{if(!(a.vu^a.vJ.ga(b))){c=a.vV;d=c.kp;if(!(d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b))){b=0;break a;}}b=1;}return b;};
function OY(){let a=this;Bh.call(a);a.vT=0;a.tN=null;a.tS=null;a.wZ=null;}
let ADT=(a,b)=>{let c,d;a:{if(!(a.vT^a.tN.ga(b))){c=a.tS;d=c.kp;if(!(d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b))){b=1;break a;}}b=0;}return b;};
function Or(){let a=this;Bh.call(a);a.um=null;a.w5=null;}
let AAh=(a,b)=>{let c,d;c=a.um;d=c.kp;return d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b);};
function Os(){let a=this;Bh.call(a);a.un=null;a.yg=null;}
let ACN=(a,b)=>{let c,d;c=a.un;d=c.kp;return (d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b))?0:1;};
function Ox(){let a=this;Bh.call(a);a.v5=null;a.u9=0;a.wi=null;}
let AFt=(a,b)=>{let c,d,e;c=a.v5;d=c.kp;e=d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b);return e&&a.u9^Cy(a.wi.jK,b)?1:0;};
function Oq(){let a=this;Bh.call(a);a.vn=null;a.uO=0;a.u8=null;}
let AN4=(a,b)=>{let c,d,e;c=a.vn;d=c.kp;e=d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b);return e&&a.uO^Cy(a.u8.jK,b)?0:1;};
function Ov(){let a=this;Bh.call(a);a.vw=0;a.tZ=null;a.uM=null;a.wL=null;}
let Yx=(a,b)=>{let c,d;a:{if(a.vw^a.tZ.ga(b)){c=a.uM;d=c.kp;if(d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b)){b=1;break a;}}b=0;}return b;};
function Ow(){let a=this;Bh.call(a);a.vj=0;a.tJ=null;a.vt=null;a.w9=null;}
let AKF=(a,b)=>{let c,d;a:{if(a.vj^a.tJ.ga(b)){c=a.vt;d=c.kp;if(d!==null?c.j0^d.ga(b):c.j0^Cy(c.jK,b)){b=0;break a;}}b=1;}return b;};
function H8(){let a=this;C.call(a);a.nD=null;a.sZ=null;a.lo=null;a.l2=0;}
function F6(){let a=this;C.call(a);a.yk=null;a.mY=B6;a.nI=B6;a.l9=null;a.ug=null;a.mK=null;a.l8=0;a.mZ=null;}
let Iw=null,BQ=null,CF=0,D8=0,QL=null;
let AGA=a=>{let b,c,$$je;a:{b:{c:{d:{try{D8=D8+1|0;AKV(a);a.cS();}catch($$e){$$je=Br($$e);if($$je instanceof Dy){b=$$je;break d;}else{b=$$je;break c;}}b=a.l9;Fo(b);e:{try{MO(b);Ds(b);break e;}catch($$e){$$je=Br($$e);c=$$je;}Ds(b);B(c);}a.l8=0;D8=D8-1|0;b=Iw;if(BQ!==b)BQ=b;BQ.nI=D5();break a;}try{Xn(AD_(a),a,b);break b;}catch($$e){$$je=Br($$e);b=$$je;}}c=a.l9;Fo(c);f:{try{MO(c);Ds(c);break f;}catch($$e){$$je=Br($$e);b=$$je;}Ds(c);B(b);}a.l8=0;D8=D8-1|0;c=Iw;if(BQ!==c)BQ=c;BQ.nI=D5();B(b);}b=a.l9;Fo(b);g:{try
{MO(b);Ds(b);break g;}catch($$e){$$je=Br($$e);c=$$je;}Ds(b);B(c);}a.l8=0;D8=D8-1|0;b=Iw;if(BQ!==b)BQ=b;BQ.nI=D5();}},
AKV=b=>{if(BQ!==b)BQ=b;BQ.nI=D5();},
ARy=()=>{return BQ;},
Kq=b=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOl(b);if(E$()){break _;}return;default:E4();}}C2().s(b,$p);},
ABf=(b,c)=>{let d,e;d=BQ;e=new Og;e.wj=d;e.vG=c;e.x2=Mk(e,ASn(b,R(2147483647))?2147483647:Be(b));d.ug=e;},
AD_=a=>{let b;b=a.yk;if(b!==null)return b;return QL;},
X6=()=>{let b,c,d;b=new F6;c=null;b.l9=new C;b.l8=1;b.mK=A(461);b.mZ=c;d=CF;CF=d+1|0;b.mY=R(d);Iw=b;BQ=b;CF=1;D8=1;QL=new Q8;},
AOl=b=>{let thread=C2();let javaThread=VD();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Jt(javaThread);thread.resume();};callback.gU=e=>{thread.attribute=ANI(e);Jt(javaThread);thread.resume();};callback=Rd(callback);thread.suspend(()=>{try {ABf(b,callback);;}catch(M4){callback.gU(M4);}});return null;};
let B5=E(Bz);
let If=E(Bz);
let ALU=E();
let Q9=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let ACR=E();
let Ww=E();
let FG=E(0);
function UO(){C.call(this);this.uz=null;}
let AOv=a=>{AMT(a.uz);};
let TH=E(CC);
let TI=E(CC);
let TM=E(CC);
let TN=E(CC);
let TK=E(CC);
let TL=E(CC);
let TF=E(CC);
let TG=E(CC);
let TD=E(CC);
let NL=E(0);
let Q8=E();
let Xn=(a,b,c)=>{let d;if(C9===null){b=new Fh;d=new Cu;d.kW=BE(32);BA(b);b.ll=d;d=new J;DI(d,16);b.kZ=d;b.kY=G(32);b.k2=0;b.k3=Cm;C9=b;}Jn(c,C9);};
let P2=E();
let QJ=E(0);
function Qr(){C.call(this);this.oC=null;}
let Rd=b=>{let c;c=new Qr;c.oC=b;return c;},
AFU=(a,b)=>{a.oC.e(b);},
AQe=(a,b)=>{a.oC.gU(b);};
function RI(){let a=this;C.call(a);a.ud=null;a.ue=null;a.ub=0;a.uc=null;}
let NH=E(FU);
let ACA=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.j4;a:{while(true){if(b>f){b=e;break a;}g=a.ky;h=d.k1.data;i=g*2|0;j=h[i];h[i]=b;e=a.l7.fD(b,c,d);if(e>=0)break;i=a.ky;d.k1.data[i*2|0]=j;b=b+1|0;}}return b;},
ARg=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.ky;h=e.k1.data;i=g*2|0;j=h[i];h[i]=c;f=a.l7.fD(c,d,e);if(f>=0)break;i=a.ky;e.k1.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
ZV=a=>{return null;};
function RJ(){Bh.call(this);this.xt=null;}
let AOR=(a,b)=>{return CI(b)!=2?0:1;};
function Nn(){Bh.call(this);this.xz=null;}
let X5=(a,b)=>{return CI(b)!=1?0:1;};
function Q7(){Bh.call(this);this.xc=null;}
let Xo=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CI(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function Q6(){Bh.call(this);this.w6=null;}
let ACt=(a,b)=>{return 0;};
function Uh(){Bh.call(this);this.xX=null;}
let AE9=(a,b)=>{return !CI(b)?0:1;};
function OR(){Bh.call(this);this.xF=null;}
let AOU=(a,b)=>{return CI(b)!=9?0:1;};
function Oe(){Bh.call(this);this.ye=null;}
let AJM=(a,b)=>{return GZ(b);};
function Qd(){Bh.call(this);this.xu=null;}
let AL0=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Nj(){Bh.call(this);this.wl=null;}
let AQL=(a,b)=>{a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GZ(b);}return b;};
function Nm(){Bh.call(this);this.xH=null;}
let AA1=(a,b)=>{a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GZ(b);}return b;};
function N9(){Bh.call(this);this.xW=null;}
let APn=(a,b)=>{a:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function O_(){Bh.call(this);this.x8=null;}
let AHJ=(a,b)=>{a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Pe(){Bh.call(this);this.xd=null;}
let ALf=(a,b)=>{a:{switch(CI(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function Sb(){Bh.call(this);this.xJ=null;}
let AOu=(a,b)=>{return CI(b)!=3?0:1;};
function Rt(){Bh.call(this);this.wo=null;}
let AQb=(a,b)=>{a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GZ(b);}return b;};
function Nx(){Bh.call(this);this.ym=null;}
let AAG=(a,b)=>{a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GZ(b);}return b;};
function Jg(){Bh.call(this);this.ra=0;}
let AJS=(a,b)=>{return a.j0^(a.ra!=CI(b&65535)?0:1);};
let QX=E(Jg);
let ANd=(a,b)=>{return a.j0^(!(a.ra>>CI(b&65535)&1)?0:1);};
function Xq(){let a=this;C.call(a);a.ys=0;a.yt=0;a.yq=0;a.yr=0;a.yp=null;}
function GA(){let a=this;F6.call(a);a.n8=0;a.mO=null;a.m0=null;a.mR=null;}
let AJ5=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new L$;c.m8=a;c.o8=b;c=BY(c,"handleEvent");b.onreadystatechange=c;c=a.mR;d=a.m0;e=new GB;e.th=c;e.qD=d;c=BY(e,"handleEvent");b.onprogress=c;d=a.mO;f=a.n8;b.open("GET",Bs(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let Ny=E();
let SK=null;
let LJ=()=>{LJ=BH(Ny);AMt();};
let AMt=()=>{let b,c;b=U((Tx.p()).data.length);c=b.data;SK=b;c[MI.jw]=1;c[ID.jw]=2;};
let TW=E();
let AGM=(a,b,c)=>{a.eL(W(b),Df(c,"handleEvent"));},
AHM=(a,b,c)=>{a.eM(W(b),Df(c,"handleEvent"));},
VQ=(a,b,c,d)=>{a.eN(W(b),Df(c,"handleEvent"),d?1:0);},
V4=(a,b)=>{return !!a.eO(b);},
ADO=(a,b,c,d)=>{a.eQ(W(b),Df(c,"handleEvent"),d?1:0);};
let GD=E(0);
function JE(){let a=this;C.call(a);a.og=null;a.sx=0;a.q1=null;a.s$=null;a.pi=null;}
let AQh=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.og.readyState==4){if(a.og.status==200){if(a.pi.lX){if(BT===null){b=new CU;c=new Cu;c.kW=BE(32);b.ll=c;c=new J;BA(c);c.jo=G(16);b.kZ=c;b.kY=G(32);b.k2=0;b.k3=Cm;BT=b;}b=a.q1;c=new J;c.jo=G(16);F(c,c.jm,A(462));d=c.jm;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g
>=0&&g<=(h-0|0)){b.jn=K(e.data,0,g);BU(Bs(b));BU("\n");}else{b=new I;b.jp=1;b.jq=1;Bn(b);B(b);}}c=a.og.response;EL();i=FH.mx.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);W(a.og.responseText);}else if(a.og.status!=404&&a.og.status!=403){try{k=R(100);$p=1;continue _;}catch($$e){$$je=Br($$e);if($$je instanceof Dy){}else{throw $$e;}}M1(a.pi,a.sx,a.q1,a.s$);}b=a.pi;b.km=b.km-1|0;}return;case 1:a:{try{Kq(k);if(E$()){break _;}break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dy)
{}else{throw $$e;}}}M1(a.pi,a.sx,a.q1,a.s$);b=a.pi;b.km=b.km-1|0;return;default:E4();}}C2().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AFg=(a,b)=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQh(a,b);if(E$()){break _;}return;default:E4();}}C2().s(a,b,$p);};
let AIf=E();
let Cx=0;
function Cq(){let a=this;C.call(a);a.kc=null;a.k7=0;a.kQ=0;a.j$=0;}
let AIu=(a,b,c)=>{a.j$=1;a.kc=b;a.k7=c;},
Ll=(a,b)=>{let c=new Cq();AIu(c,a,b);return c;},
G6=a=>{let b;if(a.j$)return a.kQ>=a.kc.js?0:1;b=new Q;b.jp=1;b.jq=1;b.jr=A(17);B(b);},
Cl=a=>{let b,c,d,e,f,g,h;b=a.kQ;c=a.kc;if(b<c.js){if(a.j$){d=c.jE.data;a.kQ=b+1|0;return d[b];}c=new Q;c.jp=1;c.jq=1;c.jr=A(17);B(c);}c=new UY;e=new J;e.jo=G(16);L(e,e.jm,b,10);f=new H;d=e.jo;g=d.data;b=e.jm;h=g.length;if(b>=0&&b<=(h-0|0)){f.jn=K(d.data,0,b);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;c.jp=1;c.jq=1;B(c);};
function CW(){let a=this;C.call(a);a.lh=null;a.lj=0;a.sR=null;a.sS=null;}
let AKS=(a,b)=>{a.lh=b;a.lj=1;},
M0=a=>{let b=new CW();AKS(b,a);return b;},
ARi=(a,b,c)=>{a.lh=b;a.lj=c;},
KY=(a,b)=>{let c=new CW();ARi(c,a,b);return c;},
CE=a=>{let b,c,d;if(Cx){b=new Cq;c=a.lh;d=a.lj;b.j$=1;b.kc=c;b.k7=d;return b;}if(a.sR===null){b=new Cq;c=a.lh;d=a.lj;b.j$=1;b.kc=c;b.k7=d;a.sR=b;b=new Cq;b.j$=1;b.kc=c;b.k7=d;a.sS=b;}b=a.sR;if(b.j$){c=a.sS;c.kQ=0;c.j$=1;b.j$=0;return c;}b.kQ=0;b.j$=1;a.sS.j$=0;return b;};
function HT(){let a=this;C.call(a);a.sU=null;a.mC=null;a.s3=null;}
let ALQ=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.mC.length;c=new J;c.jo=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new H;f=c.jo;g=f.data;b=c.jm;h=g.length;if(b>=0&&b<=(h-0|0)){e.jn=K(f.data,0,b);return e;}e=new I;e.jp=1;e.jq=1;Bn(e);B(e);}i=b-d|0;if(i>=3){j=(((a.mC[d]&255)<<16)+((a.mC[d+1|0]&255)<<8)|0)+(a.mC[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(463).jn.length)break f;h=A(463).jn.charCodeAt(h);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(463).jn.length)break g;h
=A(463).jn.charCodeAt(h);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(463).jn.length)break h;h=A(463).jn.charCodeAt(h);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;i=j&63;if(i<0)break;if(i>=A(463).jn.length)break;h=A(463).jn.charCodeAt(i);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;}else if(i<2){j=(a.mC[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(463).jn.length)break d;h=A(463).jn.charCodeAt(h);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(463).jn.length)break e;h=A(463).jn.charCodeAt(h);i
=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;F(c,c.jm,A(464));}else{k=((a.mC[d]&255)<<16)+((a.mC[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(463).jn.length)break a;h=A(463).jn.charCodeAt(h);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(463).jn.length)break b;h=A(463).jn.charCodeAt(h);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(463).jn.length)break c;h=A(463).jn.charCodeAt(h);i=c.jm;Bd(c,i,i+1|0);c.jo.data[i]=h;F(c,c.jm,A(465));}d=d+3|0;}e=new T;e.jp=1;e.jq=1;B(e);}e
=new T;e.jp=1;e.jq=1;B(e);}e=new T;e.jp=1;e.jq=1;B(e);}e=new T;e.jp=1;e.jq=1;B(e);}e=new T;e.jp=1;e.jq=1;B(e);}e=new T;e.jp=1;e.jq=1;B(e);}e=new T;e.jp=1;e.jq=1;B(e);}e=new T;e.jp=1;e.jq=1;B(e);}e=new T;e.jp=1;e.jq=1;B(e);};
function NA(){C.call(this);this.sG=null;}
let UQ=E(0);
let RU=E(0);
let SG=E(0);
let G1=E();
let EB=a=>{return;};
function HX(){G1.call(this);this.ll=null;}
let Fz=(a,b)=>{a.ll=b;},
AUq=a=>{let b=new HX();Fz(b,a);return b;};
function Ie(){let a=this;HX.call(a);a.k2=0;a.kZ=null;a.kY=null;a.k3=null;}
let Ud=(a,b,c)=>{a.ll=b;b=new J;b.jo=G(16);a.kZ=b;a.kY=G(32);a.k2=c;a.k3=Cm;},
ATs=(a,b)=>{let c=new Ie();Ud(c,a,b);return c;};
let GV=E(Ie);
let CU=E(GV);
let AFv=(a,b)=>{BU(Bs(b));};
function GB(){let a=this;C.call(a);a.qD=null;a.th=null;}
let AJc=(a,b)=>{a.qD.gX(b.loaded);};
let Yg=E();
function Cu(){G1.call(this);this.kW=null;}
let X0=(a,b)=>{a.kW=BE(b);},
ANX=a=>{let b=new Cu();X0(b,a);return b;};
function JK(){let a=this;C.call(a);a.tE=null;a.uq=null;}
let IW=b=>{let c,d,e;if(b.jn.length?0:1){c=new IZ;c.jp=1;c.jq=1;c.r1=b;B(c);}if(0>=b.jn.length){b=new T;b.jp=1;b.jq=1;B(b);}if(!S5(b.jn.charCodeAt(0))){c=new IZ;c.jp=1;c.jq=1;c.r1=b;B(c);}d=1;a:{while(d<b.jn.length){if(d<0)break a;if(d>=b.jn.length)break a;b:{e=b.jn.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(S5(e))break b;else{c=new IZ;c.jp=1;c.jq=1;c.r1=b;B(c);}}}d=d+1|0;}return;}b=new T;b.jp=1;b.jq=1;B(b);},
S5=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let MZ=E(JK);
let Cm=null;
let ASt=()=>{let b,c,d,e,f;b=new MZ;c=S(H,0);d=c.data;IW(A(3));e=d.length;f=0;while(f<e){IW(d[f]);f=f+1|0;}b.tE=A(3);b.uq=c.p();Cm=b;};
function IZ(){Bj.call(this);this.r1=null;}
let O5=E(0);
function Hw(){let a=this;C.call(a);a.tl=null;a.so=null;a.nY=0;a.qq=null;a.wb=0.0;a.tU=0.0;a.lA=0;a.mm=null;a.nU=null;a.ro=null;a.s6=0;a.vr=0;a.uh=0;a.uo=0;a.tH=0;a.oF=null;a.pz=null;a.wz=0;a.p3=null;a.rr=0.0;a.qN=0;a.sp=0;a.ti=0;}
let UK=null;
let Hu=()=>{Hu=BH(Hw);AH9();};
let Ke=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;Hu();a.nY=0;a.qq=null;a.wb=0.0;a.tU=0.0;a.lA=0;a.mm=C7();a.nU=C7();a.ro=C7();a.s6=0;a.vr=770;a.uh=771;a.uo=770;a.tH=771;a.pz=null;d=new BD;d.j8=1.0;d.j7=1.0;d.j6=1.0;d.j5=1.0;CP(d);a.p3=d;a.rr=R_;a.qN=0;a.sp=0;a.ti=0;if(b>8191){c=new Bj;d=new J;d.jo=G(16);F(d,d.jm,A(466));L(d,d.jm,b,10);e=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);c.jp=1;c.jq=1;c.jr=e;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}j=Ef===null?UK:K6;k=new IF;l=b*4|0;m=b*6|0;f
=S(DD,3);g=f.data;d=new DD;d.lR=1;d.lz=2;d.lO=5126;d.lY=0;d.lV=A(467);d.nj=0;d.oo=DO(1);g[0]=d;d=new DD;d.lR=4;d.lz=4;d.lO=5121;d.lY=1;d.lV=A(468);d.nj=0;d.oo=DO(4);g[1]=d;d=new DD;d.lR=16;d.lz=2;d.lO=5126;d.lY=0;d.lV=A(469);d.nj=0;d.oo=DO(16);g[2]=d;Up(k,j,0,l,m,Qb(f));a.tl=k;d=a.nU;n=B3.kr.width;o=B3.kr.height;LE(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.so=CB(b*20|0);f=Kw(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.tl.lq.g2(f,0,g.length);if(c!==null)a.oF=c;else{e=PS(A(470),A(471));if(!e.mX){c=new Bj;d=new J;d.jo=G(16);F(d,d.jm,A(472));if(!e.mX)j=e.mA;else{j=Bi.g4(e.lW);e.mA=j;}F(d,d.jm,j);e=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);c.jp=1;c.jq=1;c.jr=e;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}a.oF=e;a.wz=1;}},
ASU=(a,b)=>{let c=new Hw();Ke(c,a,b);return c;},
Qf=a=>{let b,c;if(a.lA){b=new B5;b.jp=1;b.jq=1;b.jr=A(473);B(b);}a.qN=0;BL.g5(0);c=a.pz;if(c!==null)c.g6();else{c=a.oF;b=Bi;if(c.kf){CA(c,c.k4,c.k6);c.kf=0;}b.g8(c.lW);}FM(a);a.lA=1;},
Tz=a=>{let b,c;if(!a.lA){b=new B5;b.jp=1;b.jq=1;b.jr=A(474);B(b);}if(a.nY>0)EN(a);a.qq=null;a.lA=0;c=BL;c.g5(1);if(a.s6?0:1)c.ba(3042);},
Po=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.lA){b=new B5;b.jp=1;b.jq=1;b.jr=A(475);B(b);}l=a.so;m=b.rm;if(m!==a.qq){EN(a);a.qq=m;m=m.mM;a.wb=1.0/m.mz;a.tU=1.0/m.ms;}else{n=l.data;if(a.nY==n.length)EN(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{F9();n=FF.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.v3;bb=b.vZ;bc=b.v2;bd=b.v4;be=a.rr;bf=a.nY;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.nY=bf+20|0;},
EN=a=>{let b,c,d,e,f,g;b=a.nY;if(!b)return;a.qN=a.qN+1|0;a.sp=a.sp+1|0;c=b/20|0;if(c>a.ti)a.ti=c;b=c*6|0;d=a.qq;BL.co(d.mf,d.oh);d=a.tl;e=a.so;f=a.nY;d.lt.g9(e,0,f);g=d.lq.g$(1);Cw(g,0);CD(g,b);if(a.s6)BL.ba(3042);else{BL.V(3042);c=a.vr;if(c!=(-1))BL.g_(c,a.uh,a.uo,a.tH);}g=a.pz;if(g===null)g=a.oF;RG(d,g,4,0,b,d.qE);a.nY=0;},
FM=a=>{let b,c,d,e;RK(Ck(a.ro,a.nU.kd),a.mm);b=a.pz;if(b!==null){b.hc(A(476),a.ro);a.pz.hd(A(477),0);}else{b=a.oF;c=a.ro;HL();d=IC(b,A(476),Hn);e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}PJ(e,d,1,0,c.kd,0);b=a.oF;c=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}c.hg(IC(b,A(477),Hn),0);}},
AH9=()=>{UK=KO;};
let QE=E(0);
function Ka(){C.call(this);this.xx=null;}
function So(){let a=this;Ka.call(a);a.mv=null;a.ya=null;a.tD=null;a.u0=null;a.x6=null;a.xv=null;a.xw=null;}
let AG4=(a,b)=>{let c,d,e,f,g,h,i,j;a:{a.xx=b;c=new Mn;b=new RD;d=new Py;AK_(d);d.t1=1.0;e=new Bg;CJ();d.vp=e;d.tf=0.0;b.sf=new Bg;b.qz=1.0;b.pA=d;d=new Hw;Hu();Ke(d,1000,null);RC(c,b,d);c.wB=1;a.mv=c;b=new Sy;EK(b);c=new MJ;H6();b.xa=c;a.ya=b;c=a.mv.lx;d=b.kR;if(d!==null){if(d!==c){f=EJ(d.jM,b,1);if(f!=(-1)){e=d.jM;Dd(e);e=DA(e,f);d=d.kK;if(d!==null)FN(d,e);e.kR=null;e.w(null);}}else break a;}BN(c.jM,b);b.kR=c;b.kK=c.kK;}b=new Mc;EK(b);c=new Gh;e=FY;g=Hp(e.pj,A(478),Fr);d=null;h=G9(g,Gd(g),d,0);d=BL;e=d.ju.createTexture();i
=d.l_;d.l_=i+1|0;B1(d.mG,i,B9(e));d=F2;c.nz=d;c.n4=d;d=Ge;c.nu=d;c.nA=d;c.ox=1.0;c.mf=3553;c.oh=i;HF(c,h);d=CZ;e=G8(DT,d);e=e===null?null:e.l4;if(e===null)e=GJ(1,16);BN(e,c);Fq(DT,d,e);b.tB=c;d=new Fl;e=c.mM;Gg(d,c,0,0,e.mz,e.ms);b.tA=d;if(!(b.lG===41.0&&b.lF===59.0)){b.lG=41.0;b.lF=59.0;}a.tD=b;if(!(b.ka===200.0&&b.j_===101.0)){b.ka=200.0;b.j_=101.0;}b=new Mc;EK(b);c=new Gh;e=FY;g=Hp(e.pj,A(478),Fr);d=null;h=G9(g,Gd(g),d,0);d=BL;e=d.ju.createTexture();i=d.l_;d.l_=i+1|0;B1(d.mG,i,B9(e));d=F2;c.nz=d;c.n4=d;d
=Ge;c.nu=d;c.nA=d;c.ox=1.0;c.mf=3553;c.oh=i;HF(c,h);d=CZ;e=G8(DT,d);e=e===null?null:e.l4;if(e===null)e=GJ(1,16);BN(e,c);Fq(DT,d,e);b.tB=c;d=new Fl;e=c.mM;Gg(d,c,0,0,e.mz,e.ms);b.tA=d;if(!(b.lG===41.0&&b.lF===59.0)){b.lG=41.0;b.lF=59.0;}a.u0=b;if(!(b.ka===200.0&&b.j_===396.0)){b.ka=200.0;b.j_=396.0;}b=new Id;EK(b);c=new Gh;e=FY;g=Hp(e.pj,A(479),Fr);d=null;h=G9(g,Gd(g),d,0);d=BL;e=d.ju.createTexture();i=d.l_;d.l_=i+1|0;B1(d.mG,i,B9(e));d=F2;c.nz=d;c.n4=d;d=Ge;c.nu=d;c.nA=d;c.ox=1.0;c.mf=3553;c.oh=i;HF(c,h);d=
CZ;e=G8(DT,d);e=e===null?null:e.l4;if(e===null)e=GJ(1,16);BN(e,c);Fq(DT,d,e);b.tx=c;d=new Fl;e=c.mM;Gg(d,c,0,0,e.mz,e.ms);b.rk=d;if(!(b.lG===20.0&&b.lF===20.0)){b.lG=20.0;b.lF=20.0;}a.x6=b;if(!(b.ka===150.0&&b.j_===106.0)){b.ka=150.0;b.j_=106.0;}b:{c=a.mv.lx;d=b.kR;if(d!==null){if(d===c)break b;f=EJ(d.jM,b,1);if(f!=(-1)){e=d.jM;Dd(e);e=DA(e,f);d=d.kK;if(d!==null)FN(d,e);e.kR=null;e.w(null);}}BN(c.jM,b);b.kR=c;b.kK=c.kK;}b=new Id;EK(b);c=new Gh;e=FY;g=Hp(e.pj,A(479),Fr);d=null;h=G9(g,Gd(g),d,0);d=BL;e=d.ju.createTexture();i
=d.l_;d.l_=i+1|0;B1(d.mG,i,B9(e));d=F2;c.nz=d;c.n4=d;d=Ge;c.nu=d;c.nA=d;c.ox=1.0;c.mf=3553;c.oh=i;HF(c,h);d=CZ;e=G8(DT,d);e=e===null?null:e.l4;if(e===null)e=GJ(1,16);BN(e,c);Fq(DT,d,e);b.tx=c;d=new Fl;e=c.mM;Gg(d,c,0,0,e.mz,e.ms);b.rk=d;if(!(b.lG===20.0&&b.lF===20.0)){b.lG=20.0;b.lF=20.0;}a.xv=b;if(!(b.ka===125.0&&b.j_===106.0)){b.ka=125.0;b.j_=106.0;}c:{c=a.mv.lx;d=b.kR;if(d!==null){if(d===c)break c;f=EJ(d.jM,b,1);if(f!=(-1)){e=d.jM;Dd(e);e=DA(e,f);d=d.kK;if(d!==null)FN(d,e);e.kR=null;e.w(null);}}BN(c.jM,b);b.kR
=c;b.kK=c.kK;}b=new Id;EK(b);c=new Gh;e=FY;g=Hp(e.pj,A(479),Fr);d=null;h=G9(g,Gd(g),d,0);d=BL;e=d.ju.createTexture();i=d.l_;d.l_=i+1|0;B1(d.mG,i,B9(e));d=F2;c.nz=d;c.n4=d;d=Ge;c.nu=d;c.nA=d;c.ox=1.0;c.mf=3553;c.oh=i;HF(c,h);d=CZ;e=G8(DT,d);e=e===null?null:e.l4;if(e===null)e=GJ(1,16);BN(e,c);Fq(DT,d,e);b.tx=c;d=new Fl;e=c.mM;Gg(d,c,0,0,e.mz,e.ms);b.rk=d;if(!(b.lG===20.0&&b.lF===20.0)){b.lG=20.0;b.lF=20.0;}a.xw=b;if(!(b.ka===100.0&&b.j_===106.0)){b.ka=100.0;b.j_=106.0;}d:{c=a.mv.lx;d=b.kR;if(d!==null){if(d===
c)break d;f=EJ(d.jM,b,1);if(f!=(-1)){e=d.jM;Dd(e);e=DA(e,f);d=d.kK;if(d!==null)FN(d,e);e.kR=null;e.w(null);}}BN(c.jM,b);b.kR=c;b.kK=c.kK;}e:{b=a.mv;c=a.tD;b=b.lx;d=c.kR;if(d!==null){if(d===b)break e;j=EJ(d.jM,c,1);if(j!=(-1)){e=d.jM;Dd(e);e=DA(e,j);d=d.kK;if(d!==null)FN(d,e);e.kR=null;e.w(null);}}BN(b.jM,c);c.kR=b;c.kK=b.kK;}f:{b=a.mv;c=a.u0;b=b.lx;d=c.kR;if(d!==null){if(d===b)break f;f=EJ(d.jM,c,1);if(f!=(-1)){e=d.jM;Dd(e);e=DA(e,f);d=d.kK;if(d!==null)FN(d,e);e.kR=null;e.w(null);}}BN(b.jM,c);c.kR=b;c.kK=b.kK;}},
ZC=a=>{let b=new So();AG4(b,a);return b;};
let UY=E(Bz);
let Q=E(Bz);
let ABG=(a,b)=>{a.jp=1;a.jq=1;a.jr=b;},
JU=a=>{let b=new Q();ABG(b,a);return b;};
let AAW=E();
let Kt=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function D4(){C.call(this);this.mL=null;}
let XF=a=>{AGA(a.mL);};
let ACa=E();
let UI=E();
let NX=null;
let MD=()=>{MD=BH(UI);AMX();};
let AMX=()=>{let b,c;b=U((MS.p()).data.length);c=b.data;NX=b;c[Fk.jw]=1;c[Fd.jw]=2;c[E6.jw]=3;c[E0.jw]=4;c[Jd.jw]=5;};
let Mv=E(Bz);
function M3(){let a=this;C.call(a);a.pA=null;a.rp=0.0;a.rA=0.0;a.px=0;a.py=0;a.p7=0;a.qi=0;a.sf=null;}
let Mu=(a,b)=>{let c,d,e,f;AGD(a.px,a.py,a.p7,a.qi);c=a.pA;d=a.rp;c.se=d;e=a.rA;c.sN=e;if(b){f=c.sM;d=d/2.0;e=e/2.0;f.jx=d;f.jy=e;f.jz=0.0;}UZ(c,1);},
Jv=(a,b)=>{let c,d,e,f;c=a.sf;d=b.ku;e=b.kt;c.jx=d;c.jy=e;c.jz=1.0;AJi(a.pA,c,a.px,a.py,a.p7,a.qi);c=a.sf;f=c.jx;d=c.jy;b.ku=f;b.kt=d;return b;};
function RD(){M3.call(this);this.qz=0.0;}
function Sy(){CK.call(this);this.xa=null;}
let AAR=(a,b,c)=>{let d,e,f,g,h;Tz(b);d=G2;e=b.nU;f=b.mm;H6();BL.ht(26.0);g=CH;Ck(g.n2,e.kd);g.lB=1;g=CH;Ck(g.m7,f.kd);g.lB=1;DR(CH,DB);g=CH;f=g.ot;f.j8=d.j8;f.j7=d.j7;f.j6=d.j6;f.j5=d.j5;Jh(g,96.0,115.0,0.0,424.0,115.0,0.0,f,f);d=CH;DQ(d.jZ);d.la=null;BL.ht(1.0);e=G2;f=b.nU;g=b.mm;BL.ht(26.0);h=CH;Ck(h.n2,f.kd);h.lB=1;d=CH;Ck(d.m7,g.kd);d.lB=1;DR(CH,DB);d=CH;g=d.ot;g.j8=e.j8;g.j7=e.j7;g.j6=e.j6;g.j5=e.j5;Jh(d,96.0,410.0,0.0,424.0,410.0,0.0,g,g);d=CH;DQ(d.jZ);d.la=null;BL.ht(1.0);d=G2;e=b.nU;f=b.mm;BL.ht(26.0);h
=CH;Ck(h.n2,e.kd);h.lB=1;e=CH;Ck(e.m7,f.kd);e.lB=1;DR(CH,DB);g=CH;f=g.ot;f.j8=d.j8;f.j7=d.j7;f.j6=d.j6;f.j5=d.j5;Jh(g,109.0,115.0,0.0,109.0,410.0,0.0,f,f);d=CH;DQ(d.jZ);d.la=null;BL.ht(1.0);d=G2;h=b.nU;e=b.mm;BL.ht(26.0);g=CH;Ck(g.n2,h.kd);g.lB=1;g=CH;Ck(g.m7,e.kd);g.lB=1;DR(CH,DB);g=CH;f=g.ot;f.j8=d.j8;f.j7=d.j7;f.j6=d.j6;f.j5=d.j5;Jh(g,411.0,115.0,0.0,411.0,410.0,0.0,f,f);d=CH;DQ(d.jZ);d.la=null;BL.ht(1.0);Qf(b);};
function Mc(){let a=this;CK.call(a);a.tB=null;a.tA=null;}
let Wp=(a,b,c)=>{let d,e,f,g;d=a.rG;c=d.j8;e=d.j7;f=d.j6;g=d.j5;d=b.p3;d.j8=c;d.j7=e;d.j6=f;d.j5=g;CP(d);b.rr=Gk(b.p3);Po(b,a.tA,a.ka,a.j_,a.pm,a.pn,a.lG,a.lF,a.oT,a.oU,a.pJ);},
ACc=(a,b)=>{J2(a,b);};
function Id(){let a=this;CK.call(a);a.tx=null;a.rk=null;}
let AKT=(a,b,c)=>{let d,e,f,g;d=a.rG;c=d.j8;e=d.j7;f=d.j6;g=d.j5;d=b.p3;d.j8=c;d.j7=e;d.j6=f;d.j5=g;CP(d);b.rr=Gk(b.p3);Po(b,a.rk,a.ka,a.j_,a.pm,a.pn,a.lG,a.lF,a.oT,a.oU,a.pJ);},
AMm=(a,b)=>{let c,d;c=a.ka;if(c>=100.0&&c<=400.0){d=a.j_;if(d<400.0){b=c+1.0;if(!(c===b&&d===d)){a.ka=b;a.j_=d;}}}c=a.ka;if(c>400.0){d=a.j_;if(d<=400.0){b=d+1.0;if(!(c===c&&d===b)){a.ka=c;a.j_=b;}}}c=a.ka;if(c>=100.0){d=a.j_;if(d>400.0){b=c-1.0;if(!(c===b&&d===d)){a.ka=b;a.j_=d;}}}c=a.ka;if(c<100.0){d=a.j_;if(d>107.0){b=d-1.0;if(!(c===c&&d===b)){a.ka=c;a.j_=b;}}}c=a.ka;if(c<100.0){d=a.j_;if(d<=107.0){b=c+1.0;if(!(c===b&&d===d)){a.ka=b;a.j_=d;}}}};
let Fh=E(GV);
let ADg=(a,b)=>{Dk(Bs(b));};
let ABa=E(Eb);
let U6=null;
let ASb=()=>{U6=V(ABL);};
let AKc=E();
let Ng=null,Ps=null,Qa=null;
let AFb=()=>{Ng=Zj([R(1),R(10),R(100),R(10000),R(100000000),D(1874919424, 2328306)]);Ps=new LS;Qa=new Td;};
let AK5=E();
let Kc=B6,Wh=null,Hf=null,HR=null;
let AE1=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AUB(b):D(0, 2146959360);c.tT=DJ(CS(d,D(0, 2147483648)),B6)?0:1;e=CS(d,D(4294967295, 1048575));f=Be(AS0(d,52))&2047;if(DJ(e,B6)&&!f){c.sK=B6;c.r3=0;return;}if(f)e=ABW(e,D(0, 1048576));else{e=Fe(e,1);while(DJ(CS(e,D(0, 1048576)),B6)){e=Fe(e,1);f=f+(-1)|0;}}g=HR;h=ALK(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=HR.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Io(e,Hf.data[i],j);if(ABy(k,Kc)){while(ES(k,Kc)<=0){h=h+(-1)|0;k=CT(Y(k,R(10)),R(9));}g=HR.data;i=
h+1|0;j=12+(f-g[i]|0)|0;k=Io(e,Hf.data[i],j);}e=Fe(e,1);d=CT(e,R(1));g=Hf.data;i=h+1|0;l=g[i];f=j-1|0;m=Io(d,l,f);l=Io(AEI(e,R(1)),Hf.data[i],f);n=R(1);while(true){o=Y(n,R(10));if(ES(Eu(k,o),Eu(l,o))<=0)break;n=o;}p=R(1);while(true){q=Y(p,R(10));if(ES(Eu(k,q),Eu(m,q))>=0)break;p=q;}i=ES(n,p);e=i>0?Y(Eu(k,n),n):i<0?CT(Y(Eu(k,p),p),p):Y(Eu(CT(k,L7(p,R(2))),p),p);if(ES(e,D(2808348672, 232830643))>=0)while(true){h=h+1|0;e=Eu(e,R(10));if(ES(e,D(2808348672, 232830643))<0)break;}else if(ES(e,D(1569325056, 23283064))
<0){h=h+(-1)|0;e=Y(e,R(10));}c.sK=e;c.r3=h-330|0;},
Io=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=CS(b,R(65535));f=CS(Bb(b,16),R(65535));g=CS(Bb(b,32),R(65535));h=CS(Bb(b,48),R(65535));i=CS(c,R(65535));j=CS(Bb(c,16),R(65535));k=CS(Bb(c,32),R(65535));l=CS(Bb(c,48),R(65535));return CT(CT(CT(Fe(Y(l,h),32+d|0),Fe(CT(Y(l,g),Y(k,h)),16+d|0)),Fe(CT(CT(Y(l,f),Y(k,g)),Y(j,h)),d)),Bb(CT(CT(CT(Y(k,e),Y(j,f)),Y(i,g)),Fe(CT(CT(CT(Y(l,e),Y(k,f)),Y(j,g)),Y(i,h)),16)),32-d|0));},
ADZ=()=>{Kc=Eu(R(-1),R(10));Wh=AI6();Hf=Zj([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
D(3141732885, 4047385770),D(2513386308, 3237908616),D(1151715587, 2590326893),D(983751480, 4144523029),D(1645994643, 3315618423),D(3034782633, 2652494738),D(3996658754, 4243991581),D(2338333544, 3395193265),D(1870666835, 2716154612),D(4073513845, 2172923689),D(3940641775, 3476677903),D(575533043, 2781342323),D(2178413352, 2225073858),D(2626467905, 3560118173),D(3819161242, 2848094538),D(478348616, 2278475631),D(3342338164, 3645561009),D(3532863990, 2916448807),D(1108304273, 2333159046),D(55299919, 3733054474),
D(903233395, 2986443579),D(1581580175, 2389154863),D(1671534821, 3822647781),D(478234397, 3058118225),D(382587518, 2446494580),D(612140029, 3914391328),D(2207698941, 3131513062),D(48172235, 2505210450),D(77075576, 4008336720),D(61660460, 3206669376),D(3485302205, 2565335500),D(1281516232, 4104536801),D(166219527, 3283629441),D(3568949458, 2626903552),D(2274345296, 4203045684),D(2678469696, 3362436547),D(424788838, 2689949238),D(2057817989, 2151959390),D(3292508783, 3443135024),D(3493000485, 2754508019),D(3653393847, 2203606415),
D(1550462860, 3525770265),D(1240370288, 2820616212),D(3569276608, 2256492969),D(3133862195, 3610388751),D(1648096297, 2888311001),D(459483578, 2310648801),D(3312154103, 3697038081),D(1790729823, 2957630465),D(1432583858, 2366104372),D(3151127633, 3785766995),D(2520902106, 3028613596),D(1157728226, 2422890877),D(2711358621, 3876625403),D(3887073815, 3101300322),D(1391672133, 2481040258),D(1367681954, 3969664413),D(2812132482, 3175731530),D(2249705985, 2540585224),D(1022549199, 4064936359),D(1677032818, 3251949087),
D(3918606632, 2601559269),D(3692790234, 4162494831),D(2095238728, 3329995865),D(1676190982, 2663996692),D(3540899031, 4262394707),D(1114732307, 3409915766),D(32792386, 2727932613),D(1744220827, 2182346090),D(2790753324, 3491753744),D(3091596118, 2793402995),D(2473276894, 2234722396),D(2239256113, 3575555834),D(2650398349, 2860444667),D(402331761, 2288355734),D(2361717736, 3661369174),D(2748367648, 2929095339),D(3057687578, 2343276271),D(3174313206, 3749242034),D(3398444024, 2999393627),D(1000768301, 2399514902),
D(2460222741, 3839223843),D(3686165111, 3071379074),D(3807925548, 2457103259),D(3515700499, 3931365215),D(2812560399, 3145092172),D(532061401, 2516073738),D(4287272078, 4025717980),D(3429817663, 3220574384),D(3602847589, 2576459507),D(2328582306, 4122335212),D(144878926, 3297868170),D(115903141, 2638294536),D(2762425404, 4221271257),D(491953404, 3377017006),D(3829536560, 2701613604),D(3922622707, 2161290883),D(1122235577, 3458065414),D(1756781920, 2766452331),D(546432077, 2213161865),D(874291324, 3541058984),
D(1558426518, 2832847187),D(3823721592, 2266277749),D(3540974170, 3626044399),D(3691772795, 2900835519),D(3812411695, 2320668415),D(1804891416, 3713069465),D(1443913133, 2970455572),D(3732110884, 2376364457),D(2535403578, 3802183132),D(310335944, 3041746506),D(3684242592, 2433397204),D(3317807769, 3893435527),D(936259297, 3114748422),D(3325987815, 2491798737),D(1885606668, 3986877980),D(1508485334, 3189502384),D(2065781726, 2551601907),D(4164244222, 4082563051),D(2472401918, 3266050441),D(1118928075, 2612840353),
D(931291461, 4180544565),D(745033169, 3344435652),D(3173006913, 2675548521),D(3358824142, 4280877634),D(3546052773, 3424702107),D(1118855300, 2739761686),D(36090780, 2191809349),D(1775732167, 3506894958),D(3138572652, 2805515966),D(1651864662, 2244412773),D(1783990001, 3591060437),D(4004172378, 2872848349),D(4062331362, 2298278679),D(3922749802, 3677245887),D(1420212923, 2941796710),D(1136170338, 2353437368),D(958879082, 3765499789),D(1626096725, 3012399831),D(441883920, 2409919865),D(707014273, 3855871784),
D(1424604878, 3084697427),D(3716664280, 2467757941),D(4228675929, 3948412706),D(2523947284, 3158730165),D(2019157827, 2526984132),D(4089645983, 4043174611),D(2412723327, 3234539689),D(2789172121, 2587631751),D(2744688475, 4140210802),D(477763862, 3312168642),D(2959191467, 2649734913),D(3875712888, 4239575861),D(2241576851, 3391660689),D(2652254940, 2713328551),D(1262810493, 2170662841),D(302509870, 3473060546),D(3677981733, 2778448436),D(2083391927, 2222758749),D(756446706, 3556413999),D(1464150824, 2845131199),
D(2030314118, 2276104959),D(671522212, 3641767935),D(537217769, 2913414348),D(2147761134, 2330731478),D(2577424355, 3729170365),D(2061939484, 2983336292),D(4226531965, 2386669033),D(1608490388, 3818670454),D(2145785770, 3054936363),D(3434615534, 2443949090),D(1200417559, 3910318545),D(960334047, 3128254836),D(4204241074, 2502603868),D(1572824964, 4004166190),D(1258259971, 3203332952),D(3583588354, 2562666361),D(4015754449, 4100266178),D(635623181, 3280212943),D(2226485463, 2624170354),D(985396364, 4198672567),
D(3365297469, 3358938053),D(115257597, 2687150443),D(1810192996, 2149720354),D(319328417, 3439552567),D(2832443111, 2751642053),D(3983941407, 2201313642),D(2938332415, 3522101828),D(4068652850, 2817681462),D(1536935362, 2254145170),D(2459096579, 3606632272),D(249290345, 2885305818),D(1917419194, 2308244654),D(490890333, 3693191447),D(2969692644, 2954553157),D(657767197, 2363642526),D(3629407892, 3781828041),D(2044532855, 3025462433),D(3353613202, 2420369946),D(3647794205, 3872591914),D(3777228823, 3098073531),
D(2162789599, 2478458825),D(3460463359, 3965534120),D(2768370687, 3172427296),D(1355703090, 2537941837),D(3028118404, 4060706939),D(3281488183, 3248565551),D(1766197087, 2598852441),D(1107928421, 4158163906),D(27349277, 3326531125),D(21879422, 2661224900),D(35007075, 4257959840),D(28005660, 3406367872),D(2599384905, 2725094297),D(361521006, 2180075438),D(4014407446, 3488120700),D(3211525957, 2790496560),D(2569220766, 2232397248),D(3251759766, 3571835597),D(883420894, 2857468478),D(2424723634, 2285974782),D(443583977, 3657559652),
D(2931847559, 2926047721),D(1486484588, 2340838177),D(3237368801, 3745341083),D(12914663, 2996272867),D(2587312108, 2397018293),D(3280705914, 3835229269),D(3483558190, 3068183415),D(2786846552, 2454546732),D(1022980646, 3927274772),D(3395364895, 3141819817),D(998304997, 2513455854),D(3315274914, 4021529366),D(1793226472, 3217223493),D(3152568096, 2573778794),D(2467128576, 4118046071),D(1114709402, 3294436857),D(3468747899, 2635549485),D(1255029343, 4216879177),D(3581003852, 3373503341),D(2005809622, 2698802673),
D(3322634616, 2159042138),D(162254630, 3454467422),D(2706784082, 2763573937),D(447440347, 2210859150),D(715904555, 3537374640),D(572723644, 2829899712),D(3035159293, 2263919769),D(2279274491, 3622271631),D(964426134, 2897817305),D(771540907, 2318253844),D(2952452370, 3709206150),D(2361961896, 2967364920),D(1889569516, 2373891936),D(1305324308, 3798227098),D(2762246365, 3038581678),D(3927784010, 2430865342),D(2848480580, 3889384548),D(3996771382, 3111507638),D(620436728, 2489206111),D(3569679143, 3982729777),
D(1137756396, 3186183822),D(3487185494, 2548947057),D(2143522954, 4078315292),D(4291798741, 3262652233),D(856458615, 2610121787),D(2229327243, 4176194859),D(2642455254, 3340955887),D(395977285, 2672764710),D(633563656, 4276423536),D(3942824761, 3421138828),D(577279431, 2736911063),D(2179810463, 2189528850),D(3487696741, 3503246160),D(2790157393, 2802596928),D(3950112833, 2242077542),D(2884206696, 3587324068),D(4025352275, 2869859254),D(4079275279, 2295887403),D(1372879692, 3673419846),D(239310294, 2938735877),
D(2768428613, 2350988701),D(2711498862, 3761581922),D(451212171, 3009265538),D(2078956655, 2407412430),D(3326330649, 3851859888),D(84084141, 3081487911),D(3503241150, 2465190328),D(451225085, 3944304526),D(3796953905, 3155443620),D(3037563124, 2524354896),D(3142114080, 4038967834),D(3372684723, 3231174267),D(980160860, 2584939414),D(3286244294, 4135903062),D(911008517, 3308722450),D(728806813, 2646977960),D(1166090902, 4235164736),D(73879262, 3388131789),D(918096869, 2710505431),D(4170451332, 2168404344),D(4095741754, 3469446951),
D(2417599944, 2775557561),D(1075086496, 2220446049),D(3438125312, 3552713678),D(173519872, 2842170943),D(1856802816, 2273736754),D(393904128, 3637978807),D(2892103680, 2910383045),D(2313682944, 2328306436),D(1983905792, 3725290298),D(3305111552, 2980232238),D(67108864, 2384185791),D(2684354560, 3814697265),D(2147483648, 3051757812),D(0, 2441406250),D(0, 3906250000),D(0, 3125000000),D(0, 2500000000),D(0, 4000000000),D(0, 3200000000),D(0, 2560000000),D(0, 4096000000),D(0, 3276800000),D(0, 2621440000),D(0, 4194304000),
D(0, 3355443200),D(0, 2684354560),D(0, 2147483648),D(3435973836, 3435973836),D(1889785610, 2748779069),D(2370821947, 2199023255),D(3793315115, 3518437208),D(457671715, 2814749767),D(2943117749, 2251799813),D(3849994940, 3602879701),D(2221002492, 2882303761),D(917808535, 2305843009),D(3186480574, 3689348814),D(3408177918, 2951479051),D(1867548875, 2361183241),D(1270091283, 3777893186),D(157079567, 3022314549),D(984657113, 2417851639),D(3293438299, 3868562622),D(916763721, 3094850098),D(2451397895, 2475880078),
D(3063243173, 3961408125),D(2450594538, 3169126500),D(1960475630, 2535301200),D(3136761009, 4056481920),D(2509408807, 3245185536),D(1148533586, 2596148429),D(3555640657, 4153837486),D(1985519066, 3323069989),D(2447408712, 2658455991),D(2197867021, 4253529586),D(899300158, 3402823669),D(1578433585, 2722258935),D(1262746868, 2177807148),D(1161401530, 3484491437),D(3506101601, 2787593149),D(3663874740, 2230074519),D(3285219207, 3568119231),D(1769181906, 2854495385),D(1415345525, 2283596308),D(1405559381, 3653754093),
D(2842434423, 2923003274),D(3132940998, 2338402619),D(2435725219, 3741444191),D(1089586716, 2993155353),D(2589656291, 2394524282),D(707476229, 3831238852),D(3142961361, 3064991081),D(1655375629, 2451992865),D(2648601007, 3923188584),D(2977874265, 3138550867),D(664312493, 2510840694),D(2780886908, 4017345110),D(2224709526, 3213876088),D(3497754539, 2571100870),D(1301439967, 4113761393),D(2759138892, 3291009114),D(3066304573, 2632807291),D(3188100398, 4212491666),D(1691486859, 3369993333),D(3071176406, 2695994666),
D(1597947665, 2156795733),D(1697722806, 3450873173),D(3076165163, 2760698538),D(4178919049, 2208558830),D(2391303182, 3533694129),D(2772036005, 2826955303),D(3935615722, 2261564242),D(2861011319, 3618502788),D(4006795973, 2894802230),D(3205436779, 2315841784),D(2551718468, 3705346855),D(2041374775, 2964277484),D(2492093279, 2371421987),D(551375410, 3794275180),D(441100328, 3035420144),D(1211873721, 2428336115),D(1938997954, 3885337784),D(2410191822, 3108270227),D(210166539, 2486616182),D(1195259923, 3978585891),
D(97214479, 3182868713),D(1795758501, 2546294970),D(2873213602, 4074071952),D(580583963, 3259257562),D(3041447548, 2607406049),D(2289335700, 4171849679),D(2690462019, 3337479743),D(3870356534, 2669983794),D(3615590076, 4271974071),D(2033478602, 3417579257),D(4203763259, 2734063405),D(3363010607, 2187250724),D(2803836594, 3499601159),D(3102062734, 2799680927),D(763663269, 2239744742),D(2080854690, 3583591587),D(4241664129, 2866873269),D(4252324763, 2293498615),D(2508752324, 3669597785),D(2007001859, 2935678228),
D(3323588406, 2348542582),D(1881767613, 3757668132),D(4082394468, 3006134505),D(3265915574, 2404907604),D(2648484541, 3847852167),D(400800715, 3078281734),D(1179634031, 2462625387),D(2746407909, 3940200619),D(3056119786, 3152160495),D(2444895829, 2521728396),D(2193846408, 4034765434),D(2614070585, 3227812347),D(373269550, 2582249878),D(4033205117, 4131599804),D(4085557553, 3305279843),D(691465664, 2644223875),D(1106345063, 4230758200),D(885076050, 3384606560),D(708060840, 2707685248),D(2284435591, 2166148198),
D(2796103486, 3465837117),D(518895870, 2772669694),D(1274110155, 2218135755),D(2038576249, 3549017208),D(3348847917, 2839213766),D(1820084875, 2271371013),D(2053142340, 3634193621),D(783520413, 2907354897),D(3203796708, 2325883917),D(1690100896, 3721414268),D(3070067635, 2977131414),D(3315047567, 2381705131),D(3586089190, 3810728210),D(2868871352, 3048582568),D(4013084000, 2438866054),D(3843954022, 3902185687),D(1357176299, 3121748550),D(1085741039, 2497398840),D(1737185663, 3995838144),D(2248741989, 3196670515),
D(1798993591, 2557336412),D(3737383206, 4091738259),D(3848900024, 3273390607),D(1361133101, 2618712486),D(459826043, 4189939978),D(2085847752, 3351951982),D(4245658579, 2681561585),D(2498086431, 4290498537),D(280482227, 3432398830),D(224385781, 2745919064),D(1038502084, 2196735251),D(4238583712, 3514776401),D(2531873511, 2811821121),D(1166505349, 2249456897),D(2725402018, 3599131035),D(2180321615, 2879304828),D(3462244210, 2303443862),D(2103616899, 3685510180),D(1682893519, 2948408144),D(2205308275, 2358726515),
D(3528493240, 3773962424),D(3681788051, 3019169939),D(3804423900, 2415335951),D(74124026, 3864537523),D(1777286139, 3091630018),D(3139815829, 2473304014),D(2446724950, 3957286423),D(3675366878, 3165829138),D(363313125, 2532663311),D(3158281377, 4052261297),D(808638183, 3241809038),D(2364897465, 2593447230),D(3783835944, 4149515568),D(450088378, 3319612455),D(360070702, 2655689964),D(2294100042, 4249103942),D(117293115, 3399283154),D(952827951, 2719426523),D(2480249279, 2175541218),D(3109405388, 3480865949),
D(3346517769, 2784692759),D(3536207675, 2227754207),D(2221958443, 3564406732),D(59579836, 2851525386),D(3483637705, 2281220308),D(419859574, 3649952494),D(1194881118, 2919961995),D(955904894, 2335969596),D(4106428209, 3737551353),D(708162189, 2990041083),D(2284516670, 2392032866),D(1937239754, 3827252586),D(690798344, 3061802069),D(1411632134, 2449441655),D(2258611415, 3919106648),D(3524876050, 3135285318),D(242920462, 2508228255),D(388672740, 4013165208),D(2028925110, 3210532166),D(764146629, 2568425733),D(363641147, 4109481173),
D(2008899836, 3287584938),D(3325106787, 2630067950),D(1025203564, 4208108721),D(4256136688, 3366486976),D(2545915891, 2693189581),D(1177739254, 2154551665),D(1884382806, 3447282664),D(2366499704, 2757826131),D(1034206304, 2206260905),D(1654730086, 3530017448),D(3041770987, 2824013958),D(4151403708, 2259211166),D(629291719, 3614737867),D(3080413753, 2891790293),D(4182317920, 2313432234),D(4114728295, 3701491575),D(3291782636, 2961193260),D(2633426109, 2368954608),D(3354488315, 3790327373),D(106610275, 3032261899),
D(944281679, 2425809519),D(3228837605, 3881295230),D(2583070084, 3105036184),D(2925449526, 2484028947),D(1244745405, 3974446316),D(136802865, 3179557053),D(1827429210, 2543645642),D(3782880196, 4069833027),D(1308317238, 3255866422),D(3623634168, 2604693137),D(2361840832, 4167509020),D(1889472666, 3334007216),D(652584673, 2667205773),D(185142018, 4267529237),D(2725093992, 3414023389),D(3039068653, 2731218711),D(1572261463, 2184974969),D(4233605259, 3495959950),D(3386884207, 2796767960),D(2709507366, 2237414368),
D(3476218326, 3579862989),D(3639968120, 2863890391),D(2052981037, 2291112313),D(2425776200, 3665779701),D(1081627501, 2932623761),D(6308541, 2346099009),D(1728080585, 3753758414),D(2241457927, 3003006731),D(934172882, 2402405385),D(1494676612, 3843848616),D(336747830, 3075078893),D(1987385183, 2460063114),D(602835915, 3936100983),D(2200255650, 3148880786),D(901211061, 2519104629),D(3159924616, 4030567406),D(1668946233, 3224453925),D(1335156987, 2579563140),D(2136251179, 4127301024),D(2567994402, 3301840819),
D(2913388981, 2641472655),D(366455074, 4226356249),D(1152157518, 3381084999),D(1780719474, 2704867999),D(2283569038, 2163894399),D(1076730083, 3462231039),D(1720377526, 2769784831),D(517308561, 2215827865),D(827693699, 3545324584),D(1521148418, 2836259667),D(3793899112, 2269007733),D(916277824, 3630412374),D(1592015718, 2904329899),D(2132606034, 2323463919),D(835189277, 3717542271),D(4104125258, 2974033816),D(2424306747, 2379227053),D(3019897337, 3806763285),D(2415917869, 3045410628),D(3650721214, 2436328502),
D(2405180105, 3898125604),D(2783137543, 3118500483),D(3944496953, 2494800386),D(298240911, 3991680619),D(1097586188, 3193344495),D(878068950, 2554675596),D(3981890698, 4087480953),D(608532181, 3269984763),D(2204812663, 2615987810),D(3527700261, 4185580496),D(1963166749, 3348464397),D(4147513777, 2678771517),D(3200048207, 4286034428),D(4278025484, 3428827542),D(1704433468, 2743062034),D(2222540234, 2194449627),D(120090538, 3511119404),D(955065889, 2808895523),D(2482039630, 2247116418),D(3112269949, 3595386269),
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);HR=AUC([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function LS(){let a=this;C.call(a);a.sK=B6;a.r3=0;a.tT=0;}
let YV=a=>{return;},
AI6=()=>{let a=new LS();YV(a);return a;};
let Gr=E(Bx);
let KO=null,NY=null,Rx=null,K6=null,Tt=null;
let APr=()=>{let b,c,d,e;b=new Gr;b.jB=A(480);b.jw=0;KO=b;c=new Gr;c.jB=A(481);c.jw=1;NY=c;d=new Gr;d.jB=A(482);d.jw=2;Rx=d;e=new Gr;e.jB=A(483);e.jw=3;K6=e;Tt=P(Gr,[b,c,d,e]);};
function IF(){let a=this;C.call(a);a.lt=null;a.lq=null;a.qE=0;a.ph=0;a.pS=null;a.qk=0;a.vo=null;}
let Hv=null;
let Up=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.qE=1;a.qk=0;g=new Bg;CJ();a.vo=g;LP();switch(RR.data[b.jw]){case 1:a.lt=Rm(c,d,f);b=new G_;b.nr=1;b.oV=0;b.sg=1;if(!C1){h=Kw(e);e=h.data.length;f=new Ja;i=0+e|0;BA(f);f.jL=(-1);f.jS=e;f.jt=e;f.jA=0;f.jt=i;f.p_=0;f.qt=0;f.pR=h;}else{d=e*2|0;if(d<0){b=new Bj;f=new J;f.jo=G(16);B_(f,f.jm,Cd(A(484)));L(f,f.jm,d,10);g=new H;h=f.jo;j=h.data;d=f.jm;e=j.length;if(d>=0&&d<=(e-0|0)){g.jn=K(h.data,0,d);b.jp=1;b.jq=1;b.jr=g;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}f=new CL;h=BE(d);f.jL
=(-1);f.jS=d;f.jt=d;f.kh=Ci;f.kD=0;f.ke=h;f.jA=0;f.jt=d;f.li=1;f.kJ=0;f.kh=C4();f=Jo(f);}b.m1=f;f.jt=f.jA;f.jA=0;f.jL=(-1);f=Bi;g=f.ju.createBuffer();e=f.lv;f.lv=e+1|0;B1(f.md,e,B9(g));b.qC=e;b.p2=!c?35048:35044;a.lq=b;a.ph=0;break a;case 2:break;case 3:a.lt=QZ(c,d,f);a.lq=US(c,e);a.ph=0;break a;case 4:break b;default:break b;}a.lt=AO_(c,d,f);a.lq=US(c,e);a.ph=0;break a;}b=new Oa;RV(b,0,d,f);a.lt=b;b=new Pi;b.nr=1;b.oV=0;b.sg=1;if(!C1){h=Kw(e);d=h.data.length;f=new Ja;k=0+d|0;TC(f,d);f.jA=0;f.jt=k;f.p_=0;f.qt
=0;f.pR=h;}else{c=e*2|0;if(c<0){b=new Bj;f=new J;f.jo=G(16);DW(f,f.jm,A(484));L(f,f.jm,c,10);g=new H;h=f.jo;j=h.data;d=f.jm;e=j.length;if(d>=0&&d<=(e-0|0)){g.jn=K(h.data,0,d);b.jp=1;b.jq=1;b.jr=g;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}f=new CL;h=BE(c);BA(f);f.jL=(-1);f.jS=c;f.jt=c;f.kh=Ci;f.kD=0;f.ke=h;f.jA=0;f.jt=c;f.li=1;f.kJ=0;f.kh=C4();f=Jo(f);}b.m1=f;f.jt=f.jA;f.jA=0;f.jL=(-1);f=Bi;g=f.ju.createBuffer();d=f.lv;f.lv=d+1|0;B1(f.md,d,B9(g));b.qC=d;b.p2=35044;a.lq=b;a.ph=1;}b=CZ;f=Hv;if(b===null){f=f.ma.data[0];while
(f!==null&&f.l$!==null){f=f.mk;}}else{l=b;if(!l.$id$){g=D_();l.$id$=g;}e=b.$id$;h=f.ma.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.ok==e){g=f.l$;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.mk;}}f=f===null?null:f.l4;if(f===null){f=new Bt;f.kk=1;f.jE=S(C,16);}BN(f,a);Fq(Hv,b,f);},
ATe=(a,b,c,d,e)=>{let f=new IF();Up(f,a,b,c,d,e);return f;},
RG=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.lt.hC(b,g);g=a.pS;if(g!==null&&g.hD()>0)a.pS.hC(b,h);if(a.lq.hE()>0)a.lq.g6();}if(a.ph){if(a.lq.hE()<=0)Bi.hF(c,d,e);else{g=a.lq.g$(0);i=g.jA;Cw(g,d);Bi.hG(c,e,5123,g);Cw(g,i);}}else{j=0;if(a.qk)j=a.pS.hD();if(a.lq.hE()<=0){if(a.qk&&j>0)Ef.hH(c,d,e,j);else Bi.hF(c,d,e);}else{if((e+d|0)>a.lq.hI()){b=new Q;g=new J;g.jo=G(16);F(g,g.jm,A(485));L(g,g.jm,e,10);F(g,g.jm,A(486));L(g,g.jm,d,10);F(g,g.jm,A(487));c=a.lq.hI();L(g,g.jm,c,10);F(g,g.jm,
A(488));h=new H;k=g.jo;l=k.data;d=g.jm;e=l.length;if(d>=0&&d<=(e-0|0)){h.jn=K(k.data,0,d);b.jp=1;b.jq=1;b.jr=h;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}if(a.qk&&j>0)Ef.hJ(c,e,5123,d*2|0,j);else Bi.hK(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.lt.hL(b,g);g=a.pS;if(g!==null&&g.hD()>0)a.pS.hL(b,h);if(a.lq.hE()>0)a.lq.hM();}},
AQN=()=>{let b,c,d,e;b=new Is;c=Je(16);b.n_=0;d=S(Fj,c);e=d.data;b.ma=d;b.rF=0.75;b.o0=e.length*0.75|0;Hv=b;};
function MK(){let a=this;C.call(a);a.sM=null;a.uT=null;a.vk=null;a.sl=null;a.s8=null;a.pf=null;a.pU=null;a.tf=0.0;a.vg=0.0;a.se=0.0;a.sN=0.0;a.vb=null;a.wT=null;a.wA=null;}
let AK_=a=>{let b,c,d;b=new Bg;CJ();a.sM=b;b=new Bg;b.jx=0.0;b.jy=0.0;b.jz=(-1.0);a.uT=b;b=new Bg;b.jx=0.0;b.jy=1.0;b.jz=0.0;a.vk=b;a.sl=C7();a.s8=C7();a.pf=C7();a.pU=C7();a.tf=1.0;a.vg=100.0;a.se=0.0;a.sN=0.0;a.vb=AKM();a.wT=new Bg;b=new K9;LC();c=new Bg;b.wN=c;d=new Bg;b.xQ=d;c.jx=0.0;c.jy=0.0;c.jz=0.0;d.jx=0.0;d.jy=0.0;d.jz=0.0;a.wA=b;},
AJi=(a,b,c,d,e,f)=>{let g,h;g=b.jx-c;h=B3.kr.height-b.jy-d;b.jx=2.0*g/e-1.0;b.jy=2.0*h/f-1.0;b.jz=2.0*b.jz-1.0;ZY(b,a.pU);return b;};
function Py(){let a=this;MK.call(a);a.t1=0.0;a.vp=null;}
let UZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.sl;d=a.t1;e=a.se;f=d* -e/2.0;e=d*e/2.0;g=a.sN;LE(c,f,e,d* -(g/2.0),d*g/2.0,a.tf,a.vg);c=a.s8;h=a.sM;i=a.vp;d=h.jx;j=h.jy;f=h.jz;i.jx=d;i.jy=j;i.jz=f;k=a.uT;l=k.jx;e=k.jy;g=k.jz;d=d+l;j=j+e;f=f+g;i.jx=d;i.jy=j;i.jz=f;i=a.vk;k=Uj;k.jx=d;k.jy=j;k.jz=f;l=h.jx;e=h.jy;g=h.jz;l=d-l;e=j-e;g=f-g;k.jx=l;k.jy=e;k.jz=g;AB5(c,k,i);i=OP;l= -h.jx;e= -h.jy;g= -h.jz;Ks(i);m=i.kd.data;m[12]=l;m[13]=e;m[14]=g;RK(c,i);Ck(a.pf,a.sl.kd);Nz(a.pf.kd,a.s8.kd);if(b){Ck(a.pU,a.pf.kd);ACu(a.pU.kd);AJo(a.vb,
a.pU);}};
let MJ=E();
let CH=null;
let H6=()=>{H6=BH(MJ);AK8();};
let AK8=()=>{CH=Rn(5000,null);};
let Mm=E(0);
let T2=E(0);
function Og(){let a=this;C.call(a);a.wj=null;a.vG=null;a.xr=0;a.x2=0;}
let AK6=a=>{let b,c;if(!a.xr){b=a.wj;b.ug=null;if(BQ!==b)BQ=b;BQ.nI=D5();c=a.vG;b=null;c.oC.e(b);}};
function Om(){let a=this;C.call(a);a.k9=null;a.l3=0;a.wG=B6;a.xo=0;a.xN=0;}
let AHO=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.wG=R(-1);a.xo=(-1);a.xN=(-1);c=b.length;if(!c){d=new Bj;d.jp=1;d.jq=1;d.jr=A(489);B(d);}e=S(DD,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.k9=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.m5=c;switch(d.lO){case 5120:case 5121:break;case 5122:case 5123:g=2*d.lz|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.lz|0;break a;default:break b;}g=d.lz;break a;}g=0;}c=c+g|0;h=h+1|0;}a.l3=c;},
Qb=a=>{let b=new Om();AHO(b,a);return b;};
function Li(){let a=this;C.call(a);a.mA=null;a.mX=0;a.qr=null;a.uC=null;a.vm=null;a.uR=null;a.mU=null;a.uP=null;a.vy=null;a.uk=null;a.lW=0;a.sh=0;a.tK=0;a.x_=null;a.k4=null;a.k6=null;a.kf=0;a.x0=0;a.mq=null;a.pB=null;}
let Hn=0,MC=null,Lf=null,Mo=null,AME=null;
let HL=()=>{HL=BH(Li);ALt();};
let AQK=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;HL();a.mA=A(61);a.qr=FT(51,0.800000011920929);a.uC=FT(51,0.800000011920929);a.vm=FT(51,0.800000011920929);a.mU=FT(51,0.800000011920929);a.uP=FT(51,0.800000011920929);a.vy=FT(51,0.800000011920929);a.x0=0;if(!C1){d=U(1);e=d.data.length;f=new FP;g=0+e|0;f.jL=(-1);f.jS=e;f.jt=e;f.jA=0;f.jt=g;f.op=0;f.ps=0;f.ob=d;}else{h=new CL;d=BE(4);h.jL=(-1);h.jS=4;h.jt=4;h.kh=Ci;h.kD=0;h.ke=d;h.jA=0;h.jt=4;h.li=1;h.kJ=0;h.kh=C4();f=Gw(h);}a.mq=f;if(!C1){d=U(1);e=d.data.length;f=new FP;g
=0+e|0;f.jL=(-1);f.jS=e;f.jt=e;f.jA=0;f.jt=g;f.op=0;f.ps=0;f.ob=d;}else{h=new CL;d=BE(4);h.jL=(-1);h.jS=4;h.jt=4;h.kh=Ci;h.kD=0;h.ke=d;h.jA=0;h.jt=4;h.li=1;h.kJ=0;h.kh=C4();f=Gw(h);}a.pB=f;if(b===null){b=new Bj;b.jp=1;b.jq=1;b.jr=A(490);B(b);}if(c===null){b=new Bj;b.jp=1;b.jq=1;b.jr=A(491);B(b);}f=MC;if(f!==null&&f.jn.length>0){f=new J;f.jo=G(16);h=MC;F(f,f.jm,h);F(f,f.jm,b);b=new H;d=f.jo;i=d.data;e=f.jm;j=i.length;if(e>=0&&e<=(j-0|0))b.jn=K(d.data,0,e);else{b=new I;b.jp=1;b.jq=1;B(b);}}f=Lf;if(f!==null&&f.jn.length
>0){f=new J;f.jo=G(16);h=Lf;F(f,f.jm,h);F(f,f.jm,c);c=new H;d=f.jo;i=d.data;e=f.jm;j=i.length;if(e>=0&&e<=(j-0|0))c.jn=K(d.data,0,e);else{b=new I;b.jp=1;b.jq=1;B(b);}}a.k4=b;a.k6=c;if(!C1){i=CB(16);k=i.data.length;f=new HD;l=0+k|0;f.jL=(-1);f.jS=k;f.jt=k;f.jA=0;f.jt=l;f.pr=0;f.pX=0;f.oZ=i;}else{f=new CL;d=BE(64);f.jL=(-1);f.jS=64;f.jt=64;f.kh=Ci;f.kD=0;f.ke=d;f.jA=0;f.jt=64;f.li=1;f.kJ=0;f.kh=C4();f=ER(f);}a.x_=f;CA(a,b,c);if(a.mX){ACv(a);AHF(a);b=CZ;c=Mo;l=B2(c,b);c=l<0?null:c.kA.data[l];if(c===null){c=new Bt;c.kk
=1;c.jE=S(C,16);}BN(c,a);C6(Mo,b,c);}},
PS=(a,b)=>{let c=new Li();AQK(c,a,b);return c;},
CA=(a,b,c)=>{let d;a.sh=U3(a,35633,b);d=U3(a,35632,c);a.tK=d;if(a.sh!=(-1)&&d!=(-1)){d=Bi.hW();if(!d)d=(-1);d=ANH(a,d);a.lW=d;if(d!=(-1)){a.mX=1;return;}a.mX=0;return;}a.mX=0;},
U3=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bi;if(!C1){e=U(1);f=e.data.length;g=new FP;h=0+f|0;g.jL=(-1);g.jS=f;g.jt=f;g.jA=0;g.jt=h;g.op=0;g.ps=0;g.ob=e;}else{g=new CL;e=BE(4);g.jL=(-1);g.jS=4;g.jt=4;g.kh=Ci;g.kD=0;g.ke=e;g.jA=0;g.jt=4;g.li=1;g.kJ=0;g.kh=C4();g=Gw(g);}i=d.hY(b);if(!i)return (-1);d.hZ(i,c);d.h0(i);d.eA(i,35713,g);if(EP(g,0))return i;j=d.h1(i);c=new J;c.jo=G(16);d=a.mA;F(c,c.jm,d);d=b!=35633?A(492):A(493);F(c,c.jm,d);d=new H;e=c.jo;k=e.data;i=c.jm;l=k.length;if(i>=0&&i<=(l-0|0)){d.jn=K(e.data,0,i);a.mA
=d;c=new J;c.jo=G(16);F(c,c.jm,d);F(c,c.jm,j);d=new H;e=c.jo;k=e.data;i=c.jm;l=k.length;if(i>=0&&i<=(l-0|0)){d.jn=K(e.data,0,i);a.mA=d;return (-1);}c=new I;c.jp=1;c.jq=1;B(c);}c=new I;c.jp=1;c.jq=1;B(c);},
ANH=(a,b)=>{let c,d,e,f;c=Bi;if(b==(-1))return (-1);c.h2(b,a.sh);c.h2(b,a.tK);c.h3(b);d=new CL;e=BE(4);d.jL=(-1);d.jS=4;d.jt=4;d.kh=Ci;d.kD=0;d.ke=e;d.jA=0;d.jt=4;d.li=1;d.kJ=0;d.kh=C4();f=Gw(d);c.ez(b,35714,f);if(EP(f,0))return b;a.mA=Bi.g4(b);return (-1);},
IC=(a,b,c)=>{let d,e,f,g,h,i;d=a.qr;e=(-2);f=EI(d,b);if(f>=0)e=d.mb.data[f];if(e==(-2)){e=Bi.h4(a.lW,b);if(e==(-1)&&c){if(a.mX){d=new Bj;g=new J;g.jo=G(16);F(g,g.jm,A(494));F(g,g.jm,b);F(g,g.jm,A(495));b=new H;h=g.jo;i=h.data;e=g.jm;f=i.length;if(e>=0&&e<=(f-0|0)){b.jn=K(h.data,0,e);d.jp=1;d.jq=1;d.jr=b;B(d);}b=new I;b.jp=1;b.jq=1;B(b);}b=new B5;d=new J;d.jo=G(16);F(d,d.jm,A(496));if(!a.mX)g=a.mA;else{g=Bi.g4(a.lW);a.mA=g;}F(d,d.jm,g);g=new H;h=d.jo;i=h.data;e=d.jm;f=i.length;if(e>=0&&e<=(f-0|0)){g.jn=K(h.data,
0,e);b.jp=1;b.jq=1;b.jr=g;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}Et(a.qr,b,e);}return e;},
AHF=a=>{let b,c,d,e,f;b=a.mq;b.jA=0;b.jt=b.jS;b.jL=(-1);Bi.ez(a.lW,35718,b);c=EP(a.mq,0);a.uR=S(H,c);d=0;while(d<c){b=a.mq;b.jA=0;b.jt=b.jS;b.jL=(-1);T8(b,0,1);b=a.pB;b.jA=0;b.jt=b.jS;b.jL=(-1);e=Bi.ey(a.lW,d,a.mq,b);f=Bi.h4(a.lW,e);Et(a.qr,e,f);Et(a.uC,e,EP(a.pB,0));Et(a.vm,e,EP(a.mq,0));a.uR.data[d]=e;d=d+1|0;}},
ACv=a=>{let b,c,d,e,f;b=a.mq;b.jA=0;b.jt=b.jS;b.jL=(-1);Bi.ez(a.lW,35721,b);c=EP(a.mq,0);a.uk=S(H,c);d=0;while(d<c){b=a.mq;b.jA=0;b.jt=b.jS;b.jL=(-1);T8(b,0,1);b=a.pB;b.jA=0;b.jt=b.jS;b.jL=(-1);e=Bi.ex(a.lW,d,a.mq,b);f=Bi.h7(a.lW,e);Et(a.mU,e,f);Et(a.uP,e,EP(a.pB,0));Et(a.vy,e,EP(a.mq,0));a.uk.data[d]=e;d=d+1|0;}},
ALt=()=>{let b,c,d,e;Hn=1;MC=A(61);Lf=A(61);Mo=Ez(51,0.800000011920929);if(!C1){b=U(1);c=b.data.length;d=new FP;e=0+c|0;d.jL=(-1);d.jS=c;d.jt=c;d.jA=0;d.jt=e;d.op=0;d.ps=0;d.ob=b;}else{d=new CL;b=BE(4);d.jL=(-1);d.jS=4;d.jt=4;d.kh=Ci;d.kD=0;d.ke=b;d.jA=0;d.jt=4;d.li=1;d.kJ=0;d.kh=C4();d=Gw(d);}AME=d;};
function Mg(){let a=this;Bt.call(a);a.nx=null;a.rH=null;a.mg=0;}
let GK=a=>{let b,c,d,e;b=a.mg-1|0;if(0>b)b=0;a.mg=b;c=a.nx;if(c===null)return;a:{if(c!==a.jE&&!b){d=c.data;a.rH=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.nx=null;},
Dd=a=>{let b,c,d,e;b=a.nx;if(b!==null){c=a.jE;if(b===c){a:{b=a.rH;if(b!==null){d=b.data.length;e=a.js;if(d>=e){DU(c,0,b,0,e);a.jE=a.rH;a.rH=null;break a;}}Kp(a,c.data.length);}return;}}};
function Kk(){let a=this;Bt.call(a);a.o6=0;a.pp=null;a.o_=0;}
let AKW=a=>{a.o6=a.o6+1|0;},
AMS=a=>{let b,c,d,e,f,g,h,i,j;b=a.o6;if(!b){c=new B5;c.jp=1;c.jq=1;c.jr=A(497);B(c);}d=b-1|0;a.o6=d;if(!d){a:{b=a.o_;if(b>0){e=a.js;if(b==e){a.pp.kP=0;if(d>0)a.o_=e;else{f=a.jE;d=0;c=null;if(d>e){c=new Bj;c.jp=1;c.jq=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.js=0;}break a;}}d=0;b=a.pp.kP;b:{while(true){if(d>=b)break b;c=a.pp;f=c.lP.data;e=c.kP-1|0;c.kP=e;h=f[e];if(h>=a.o_){if(a.o6<=0)DA(a,h);else{Ue(a,h);if(h>=a.js)break;}}d=d+1|0;}i=new I;c=new J;c.jo=G(16);F(c,c.jm,A(18));L(c,c.jm,h,10);F(c,c.jm,A(19));d
=a.js;L(c,c.jm,d,10);j=new H;f=c.jo;g=f.data;b=c.jm;e=g.length;if(b>=0&&b<=(e-0|0)){j.jn=K(f.data,0,b);i.jp=1;i.jq=1;i.jr=j;B(i);}c=new I;c.jp=1;c.jq=1;B(c);}d=a.o_-1|0;while(true){if(d<0)break a;if(a.o6<=0)DA(a,d);else{Ue(a,d);if(d>=a.js){i=new I;c=new J;c.jo=G(16);F(c,c.jm,A(18));L(c,c.jm,d,10);F(c,c.jm,A(19));d=a.js;L(c,c.jm,d,10);j=new H;f=c.jo;g=f.data;b=c.jm;e=g.length;if(b>=0&&b<=(e-0|0)){j.jn=K(f.data,0,b);i.jp=1;i.jq=1;i.jr=j;B(i);}c=new I;c.jp=1;c.jq=1;B(c);}}d=d+(-1)|0;}}a.o_=0;}},
Ue=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.o_)return;c=0;d=a.pp;e=d.kP;while(true){f=Cf(c,e);if(f>=0){K_(d,b);return;}if(f>=0){g=new I;h=new J;h.jo=G(16);F(h,h.jm,A(18));L(h,h.jm,c,10);F(h,h.jm,A(19));b=d.kP;L(h,h.jm,b,10);d=new H;i=h.jo;j=i.data;c=h.jm;e=j.length;if(c>=0&&c<=(e-0|0)){d.jn=K(i.data,0,c);g.jp=1;g.jq=1;g.jr=d;B(g);}d=new I;d.jp=1;d.jq=1;B(d);}f=Cf(b,d.lP.data[c]);if(!f)break;if(f<0){AQw(d,c,b);return;}c=c+1|0;}};
function Td(){let a=this;C.call(a);a.sm=0;a.r_=0;a.t2=0;}
let U2=E();
let RR=null;
let LP=()=>{LP=BH(U2);AL$();};
let AL$=()=>{let b,c;b=U((Tt.p()).data.length);c=b.data;RR=b;c[NY.jw]=1;c[Rx.jw]=2;c[K6.jw]=3;c[KO.jw]=4;};
let IM=E(0);
function Iq(){let a=this;C.call(a);a.mW=null;a.ow=null;a.uY=0;a.x7=0;a.su=0;a.qd=0;a.qx=0;}
let RV=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.qd=0;a.qx=0;a.x7=b;a.mW=d;c=Da(d.l3/4|0,c);if(!C1){e=CB(c);f=e.data.length;d=new HD;g=0+f|0;d.jL=(-1);d.jS=f;d.jt=f;d.jA=0;d.jt=g;d.pr=0;d.pX=0;d.oZ=e;}else{c=c*4|0;if(c<0){d=new Bj;h=new J;h.jo=G(16);CG(h,h.jm,A(484));L(h,h.jm,c,10);i=new H;e=h.jo;j=e.data;c=h.jm;k=j.length;if(c>=0&&c<=(k-0|0)){i.jn=K(e.data,0,c);d.jp=1;d.jq=1;d.jr=i;B(d);}d=new I;d.jp=1;d.jq=1;B(d);}h=new CL;e=BE(c);h.jL=(-1);h.jS=c;h.jt=c;h.kh=Ci;h.kD=0;h.ke=e;h.jA=0;h.jt=c;h.li=1;h.kJ=0;h.kh=C4();d
=ER(h);}a.ow=d;d.jt=d.jA;d.jA=0;d.jL=(-1);d=Bi;h=d.ju.createBuffer();k=d.lv;d.lv=k+1|0;B1(d.md,k,B9(h));a.uY=k;a.su=!b?35048:35044;},
Rm=(a,b,c)=>{let d=new Iq();RV(d,a,b,c);return d;},
ADc=a=>{return a.mW;},
ALG=a=>{return a.ow.jt/(a.mW.l3/4|0)|0;},
AJg=(a,b,c,d)=>{let e,f,g;a.qd=1;e=a.ow;f=null;g=e instanceof EH;if(g)f=ER(e);else if(e instanceof D3)f=e;if(f===null){f=new Q;f.jp=1;f.jq=1;f.jr=A(498);B(f);}f.jA=0;f.jt=f.jS;f.jL=(-1);Cw(e,0);IJ(f,b,c,d);Cw(e,0);if(!g)CD(e,d);else CD(e,d<<2);Cw(a.ow,0);CD(a.ow,d);if(a.qx){e=Bi;f=a.ow;e.ev(34962,f.jt,f,a.su);a.qd=0;}},
AB7=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bi;d.ia(34962,a.uY);if(a.qd){e=a.ow;d.ev(34962,e.jt,e,a.su);a.qd=0;}a:{f=a.mW.k9.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.mW.k9.data[g];j=h[g];if(j>=0){e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}e.ib(j);k=i.lz;l=i.lO;m=i.lY;n=a.mW.l3;o=i.m5;e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}e.ic(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.mW.k9.data[g];d=i.lV;e=b.mU;p=(-1);j=EI(e,d);if(j>=0)p=e.mb.data[j];if(p>=0){e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}e.ib(p);j
=i.lz;k=i.lO;l=i.lY;m=a.mW.l3;n=i.m5;e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}e.ic(p,j,k,l,m,n);}g=g+1|0;}}a.qx=1;},
XO=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bi;e=a.mW.k9.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}h.id(g);}f=f+1|0;}}i=0;while(i<e){j=a.mW.k9.data[i].lV;k=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}l=Bi;h=b.mU;g=(-2);f=EI(h,j);if(f>=0)g=h.mb.data[f];if(g==(-2)){g=l.h7(b.lW,j);Et(b.mU,j,g);}if(g!=(-1))k.id(g);i=i+1|0;}}d.ia(34962,0);a.qx=0;};
let JN=E(0);
function G_(){let a=this;C.call(a);a.m1=null;a.qC=0;a.sg=0;a.nr=0;a.oV=0;a.p2=0;}
let AEf=a=>{return a.m1.jt;},
Wx=a=>{return a.m1.jS;},
AIR=(a,b,c,d)=>{let e;a.nr=1;e=a.m1;e.jA=0;e.jt=e.jS;e.jL=(-1);TT(e,b,c,d);e=a.m1;c=e.jA;e.jt=c;e.jA=0;e.jL=(-1);if(a.oV){Bi.ev(34963,c,e,a.p2);a.nr=0;}},
Xv=(a,b)=>{a.nr=a.nr|b;return a.m1;},
APl=a=>{let b,c,d;b=a.qC;if(!b){c=new Q;c.jp=1;c.jq=1;c.jr=A(499);B(c);}Bi.ia(34963,b);if(a.nr){c=Bi;d=a.m1;c.ev(34963,d.jt,d,a.p2);a.nr=0;}a.oV=1;},
ALX=a=>{Bi.ia(34963,0);a.oV=0;};
function OS(){let a=this;C.call(a);a.mS=null;a.m4=null;a.np=null;a.tP=0;a.t4=0;a.wy=0;a.r0=0;a.p5=0;a.qH=0;}
let AH2=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.p5=0;a.qH=0;a.wy=b;a.mS=d;c=Da(d.l3,c);if(!C1){e=BE(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new CL;g=0+f|0;d.jL=(-1);d.jS=f;d.jt=f;d.kh=Ci;d.kD=0;d.ke=e;d.jA=0;d.jt=g;d.li=0;d.kJ=0;break a;}d=new I;d.jp=1;d.jq=1;Bn(d);B(d);}if(c<0){d=new Bj;h=new J;h.jo=G(16);CG(h,h.jm,A(484));L(h,h.jm,c,10);i=new H;e=h.jo;j=e.data;c=h.jm;f=j.length;if(c>=0&&c<=(f-0|0)){i.jn=K(e.data,0,c);d.jp=1;d.jq=1;d.jr=i;B(d);}d=new I;d.jp=1;d.jq=1;B(d);}d=new CL;e=BE(c);d.jL=(-1);d.jS=c;d.jt=
c;d.kh=Ci;d.kD=0;d.ke=e;d.jA=0;d.jt=c;d.li=1;d.kJ=0;d.kh=C4();}a.np=d;a.t4=1;a.r0=!b?35048:35044;a.m4=ER(d);d=Bi;h=d.ju.createBuffer();g=d.lv;d.lv=g+1|0;B1(d.md,g,B9(h));Bi.ia(34962,g);Bi.ev(34962,a.np.jS,null,a.r0);Bi.ia(34962,0);a.tP=g;d=a.m4;d.jt=d.jA;d.jA=0;d.jL=(-1);d=a.np;d.jt=d.jA;d.jA=0;d.jL=(-1);},
AO_=(a,b,c)=>{let d=new OS();AH2(d,a,b,c);return d;},
Zl=a=>{return a.mS;},
AAv=a=>{return (a.m4.jt*4|0)/a.mS.l3|0;},
Yi=(a,b,c,d)=>{let e,f,g;a.p5=1;if(!a.t4){e=a.m4;e.jA=0;e.jt=e.jS;e.jL=(-1);IJ(e,b,c,d);e=a.m4;e.jt=e.jA;e.jA=0;e.jL=(-1);Cw(a.np,0);CD(a.np,a.m4.jt<<2);}else{e=a.np;f=null;g=e instanceof EH;if(g)f=ER(e);else if(e instanceof D3)f=e;if(f===null){f=new Q;f.jp=1;f.jq=1;f.jr=A(498);B(f);}f.jA=0;f.jt=f.jS;f.jL=(-1);Cw(e,0);IJ(f,b,c,d);Cw(e,0);if(!g)CD(e,d);else CD(e,d<<2);Cw(a.m4,0);CD(a.m4,d);}if(a.qH){e=Bi;f=a.np;e.ew(34962,0,f.jt,f);a.p5=0;}},
AIC=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bi;d.ia(34962,a.tP);if(a.p5){CD(a.np,a.m4.jt*4|0);e=a.np;d.ev(34962,e.jt,e,a.r0);a.p5=0;}a:{f=a.mS.k9.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.mS.k9.data[g];j=h[g];if(j>=0){e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}e.ib(j);k=i.lz;l=i.lO;m=i.lY;n=a.mS.l3;o=i.m5;e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}e.ic(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.mS.k9.data[g];p=i.lV;e=b.mU;q=(-1);j=EI(e,p);if(j>=0)q=e.mb.data[j];if(q>=0){e=Bi;if(b.kf){CA(b,
b.k4,b.k6);b.kf=0;}e.ib(q);j=i.lz;k=i.lO;l=i.lY;m=a.mS.l3;n=i.m5;e=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}e.ic(q,j,k,l,m,n);}g=g+1|0;}}a.qH=1;},
AB8=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bi;e=a.mS.k9.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}h.id(g);}f=f+1|0;}}i=0;while(i<e){j=a.mS.k9.data[i].lV;k=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}l=Bi;h=b.mU;g=(-2);f=EI(h,j);if(f>=0)g=h.mb.data[f];if(g==(-2)){g=l.h7(b.lW,j);Et(b.mU,j,g);}if(g!=(-1))k.id(g);i=i+1|0;}}d.ia(34962,0);a.qH=0;};
function Q3(){let a=this;C.call(a);a.ov=null;a.nv=null;a.u3=0;a.xi=0;a.oA=0;a.qK=0;a.vq=0;}
let ABv=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.oA=1;a.qK=0;c=c*2|0;if(!C1){d=BE(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new CL;g=0+e|0;f.jL=(-1);f.jS=e;f.jt=e;f.kh=Ci;f.kD=0;f.ke=d;f.jA=0;f.jt=g;f.li=0;f.kJ=0;break a;}f=new I;f.jp=1;f.jq=1;Bn(f);B(f);}if(c<0){f=new Bj;h=new J;h.jo=G(16);CG(h,h.jm,A(484));L(h,h.jm,c,10);i=new H;d=h.jo;j=d.data;c=h.jm;k=j.length;if(c>=0&&c<=(k-0|0)){i.jn=K(d.data,0,c);f.jp=1;f.jq=1;f.jr=i;B(f);}f=new I;f.jp=1;f.jq=1;B(f);}f=new CL;d=BE(c);f.jL=(-1);f.jS=c;f.jt=c;f.kh=Ci;f.kD=0;f.ke
=d;f.jA=0;f.jt=c;f.li=1;f.kJ=0;f.kh=C4();}a.nv=f;a.xi=1;a.vq=!b?35048:35044;f=Jo(f);a.ov=f;f.jt=f.jA;f.jA=0;f.jL=(-1);f=a.nv;f.jt=f.jA;f.jA=0;f.jL=(-1);f=Bi;h=f.ju.createBuffer();e=f.lv;f.lv=e+1|0;B1(f.md,e,B9(h));Bi.ia(34963,e);Bi.ev(34963,a.nv.jS,null,a.vq);Bi.ia(34963,0);a.u3=e;},
US=(a,b)=>{let c=new Q3();ABv(c,a,b);return c;},
AK$=a=>{return a.ov.jt;},
VF=a=>{return a.ov.jS;},
AEW=(a,b,c,d)=>{let e,f;a.oA=1;e=a.ov;e.jA=0;e.jt=e.jS;e.jL=(-1);TT(e,b,c,d);e=a.ov;e.jt=e.jA;e.jA=0;e.jL=(-1);Cw(a.nv,0);CD(a.nv,d<<1);if(a.qK){e=Bi;f=a.nv;e.ew(34963,0,f.jt,f);a.oA=0;}},
ANY=(a,b)=>{a.oA=a.oA|b;return a.ov;},
AFO=a=>{let b,c,d;b=a.u3;if(!b){c=new Q;c.jp=1;c.jq=1;c.jr=A(500);B(c);}Bi.ia(34963,b);if(a.oA){CD(a.nv,a.ov.jt*2|0);c=Bi;d=a.nv;c.ew(34963,0,d.jt,d);a.oA=0;}a.qK=1;},
YZ=a=>{Bi.ia(34963,0);a.qK=0;};
function KD(){let a=this;C.call(a);a.nt=null;a.nX=null;a.s1=0;a.x$=0;a.sP=0;a.p9=0;a.rE=0;a.sc=0;a.m9=null;}
let LH=null;
let KI=()=>{KI=BH(KD);AQ5();};
let AAD=(a,b,c,d)=>{let e,f,g,h,i,j;KI();a.p9=0;a.rE=0;a.sc=(-1);e=new F_;e.oL=1;e.lP=U(16);a.m9=e;a.x$=b;a.nt=d;c=Da(d.l3/4|0,c);if(!C1){f=CB(c);g=f.data.length;d=new HD;h=0+g|0;d.jL=(-1);d.jS=g;d.jt=g;d.jA=0;d.jt=h;d.pr=0;d.pX=0;d.oZ=f;}else{c=c*4|0;if(c<0){d=new Bj;e=new J;e.jo=G(16);CG(e,e.jm,A(484));L(e,e.jm,c,10);i=new H;f=e.jo;j=f.data;c=e.jm;g=j.length;if(c>=0&&c<=(g-0|0)){i.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=i;B(d);}d=new I;d.jp=1;d.jq=1;B(d);}e=new CL;f=BE(c);e.jL=(-1);e.jS=c;e.jt=c;e.kh=Ci;e.kD=
0;e.ke=f;e.jA=0;e.jt=c;e.li=1;e.kJ=0;e.kh=C4();d=ER(e);}a.nX=d;d.jt=d.jA;d.jA=0;d.jL=(-1);d=Bi;e=d.ju.createBuffer();g=d.lv;d.lv=g+1|0;B1(d.md,g,B9(e));a.s1=g;a.sP=!b?35048:35044;d=LH;d.jA=0;d.jt=d.jS;d.jL=(-1);Ef.ig(1,d);d=LH;c=d.jA;if(c<d.jt){d.jA=c+1|0;a.sc=d.ih(c);return;}d=new Mq;d.jp=1;d.jq=1;B(d);},
QZ=(a,b,c)=>{let d=new KD();AAD(d,a,b,c);return d;},
X2=a=>{return a.nt;},
AII=a=>{return (a.nX.jt*4|0)/a.nt.l3|0;},
Yd=(a,b,c,d)=>{let e,f,g;a.p9=1;e=a.nX;f=null;g=e instanceof EH;if(g)f=ER(e);else if(e instanceof D3)f=e;if(f===null){f=new Q;f.jp=1;f.jq=1;f.jr=A(498);B(f);}f.jA=0;f.jt=f.jS;f.jL=(-1);Cw(e,0);IJ(f,b,c,d);Cw(e,0);if(!g)CD(e,d);else CD(e,d<<2);Cw(a.nX,0);CD(a.nX,d);if(a.rE){e=Bi;f=a.nX;e.ev(34962,f.jt,f,a.sP);a.p9=0;}},
ANB=(a,b,c)=>{let d;d=Ef;d.ii(a.sc);AML(a,b,c);if(a.p9){d.ia(34962,a.s1);b=a.nX;CD(b,b.jt);b=a.nX;d.ev(34962,b.jt,b,a.sP);a.p9=0;}a.rE=1;},
AML=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.m9;e=d.kP;f=!e?0:1;a:{g=a.nt.k9.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.nt.k9.data[e].lV;h=b.mU;i=(-1);f=EI(h,d);if(f>=0)i=h.mb.data[f];d=a.m9;if(e>=d.kP)break;f=i!=d.lP.data[e]?0:1;e=e+1|0;}h=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,e,10);F(b,b.jm,A(19));e=d.kP;L(b,b.jm,e,10);d=new H;c=b.jo;j=c.data;f=b.jm;g=j.length;if(f>=0&&f<=(g-0|0)){d.jn=K(c.data,0,f);h.jp=1;h.jq=1;h.jr=d;B(h);}b=new I;X(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.lP.data[i]?0:1;i=i+1|0;}h=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,i,10);F(b,b.jm,A(19));e=d.kP;L(b,b.jm,e,10);d=new H;c=b.jo;j=c.data;f=b.jm;g=j.length;if(f>=0&&f<=(g-0|0)){d.jn=K(c.data,0,f);h.jp=1;h.jq=1;h.jr=d;B(h);}b=new I;X(b);B(b);}}}c:{if(!f){d:{BL.ia(34962,a.s1);if(a.m9.kP){k=a.nt.k9.data.length;e=0;while(true){if(e>=k)break d;d=a.m9;if(e>=d.kP)break;i=d.lP.data[e];if(i>=0){d=Bi;if(b.kf){CA(b,
b.k4,b.k6);b.kf=0;}d.id(i);}e=e+1|0;}h=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,e,10);F(b,b.jm,A(19));e=d.kP;L(b,b.jm,e,10);d=new H;c=b.jo;j=c.data;f=b.jm;g=j.length;if(f>=0&&f<=(g-0|0)){d.jn=K(c.data,0,f);h.jp=1;h.jq=1;h.jr=d;B(h);}b=new I;IS(b);B(b);}}a.m9.kP=0;e=0;while(true){if(e>=g)break c;h=a.nt.k9.data[e];if(c!==null){j=c.data;K_(a.m9,j[e]);}else{l=a.m9;m=h.lV;d=b.mU;i=(-1);f=EI(d,m);if(f>=0)i=d.mb.data[f];K_(l,i);}d=a.m9;if(e>=d.kP){h=new I;b=new J;b.jo=G(16);F(b,b.jm,A(18));L(b,b.jm,e,10);F(b,
b.jm,A(19));e=d.kP;L(b,b.jm,e,10);d=new H;c=b.jo;j=c.data;f=b.jm;g=j.length;if(f>=0&&f<=(g-0|0)){d.jn=K(c.data,0,f);h.jp=1;h.jq=1;h.jr=d;B(h);}b=new I;X(b);B(b);}n=d.lP.data[e];if(n>=0){d=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}d.ib(n);f=h.lz;i=h.lO;k=h.lY;o=a.nt.l3;p=h.m5;d=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}d.ic(n,f,i,k,o,p);}e=e+1|0;}}}},
ABg=(a,b,c)=>{Ef.ii(0);a.rE=0;},
AQ5=()=>{let b,c,d,e;if(!C1){b=U(1);c=b.data.length;d=new FP;e=0+c|0;d.jL=(-1);d.jS=c;d.jt=c;d.jA=0;d.jt=e;d.op=0;d.ps=0;d.ob=b;}else{d=new CL;b=BE(4);d.jL=(-1);d.jS=4;d.jt=4;d.kh=Ci;d.kD=0;d.ke=b;d.jA=0;d.jt=4;d.li=1;d.kJ=0;d.kh=C4();d=Gw(d);}LH=d;};
let Oa=E(Iq);
let Pi=E(G_);
function SY(){let a=this;C.call(a);a.rY=0;a.n7=null;a.mb=null;a.uj=0.0;a.r$=0;a.rv=0;a.rj=0;}
let AD1=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.uj=c;d=I0(b,c);a.r$=d*c|0;b=d-1|0;a.rj=b;a.rv=ET(R(b));a.n7=S(C,d);a.mb=U(d);return;}e=new Bj;f=new J;f.jo=G(16);F(f,f.jm,A(62));Hj(f,f.jm,c);g=new H;h=f.jo;i=h.data;d=f.jm;j=i.length;if(d>=0&&d<=(j-0|0)){g.jn=K(h.data,0,d);e.jp=1;e.jq=1;e.jr=g;B(e);}f=new I;f.jp=1;f.jq=1;B(f);},
FT=(a,b)=>{let c=new SY();AD1(c,a,b);return c;},
EI=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bj;c.jp=1;c.jq=1;c.jr=A(63);B(c);}a:{d=a.n7;if(!b.kS){e=0;while(true){if(e>=b.jn.length)break a;b.kS=(31*b.kS|0)+b.jn.charCodeAt(e)|0;e=e+1|0;}}}f=Be(Bb(Y(R(b.kS),D(2135587861, 2654435769)),a.rv));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof H))g=0;else{h=b;g=c.jn!==h.jn?0:1;}if(g)break;f=(f+1|0)&a.rj;}return f;},
Et=(a,b,c)=>{let d,e;d=EI(a,b);if(d>=0){a.mb.data[d]=c;return;}d= -(d+1|0)|0;e=a.n7.data;e[d]=b;a.mb.data[d]=c;c=a.rY+1|0;a.rY=c;if(c>=a.r$)ANL(a,e.length<<1);},
ANL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.n7.data.length;a.r$=b*a.uj|0;d=b-1|0;a.rj=d;a.rv=ET(R(d));e=a.n7;f=a.mb;a.n7=S(C,b);a.mb=U(b);if(a.rY>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.n7;if(!h.kS){k=0;while(true){if(k>=h.jn.length)break b;h.kS=(31*h.kS|0)+h.jn.charCodeAt(k)|0;k=k+1|0;}}}b=Be(Bb(Y(R(h.kS),D(2135587861, 2654435769)),a.rv));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.rj;}l[b]=h;a.mb.data[b]=i;}g=g+1|0;}}}};
let ALo=E();
function S6(){let a=this;C.call(a);a.jZ=null;a.lB=0;a.n2=null;a.m7=null;a.rb=null;a.tF=null;a.ot=null;a.la=null;a.q9=0;a.uE=0.0;}
let AKy=(a,b,c)=>{let d,e,f,g,h,i,j;a.lB=0;a.n2=C7();a.m7=C7();a.rb=C7();a.tF=new Bv;d=new BD;d.j8=1.0;d.j7=1.0;d.j6=1.0;d.j5=1.0;CP(d);a.ot=d;a.uE=0.75;if(c!==null)a.jZ=AFE(b,0,1,0,c);else{c=new KU;e=PS(Vk(0,1,0),AHw(0,1,0));if(!e.mX){c=new Q;d=new J;d.jo=G(16);F(d,d.jm,A(472));if(!e.mX)f=e.mA;else{f=Bi.g4(e.lW);e.mA=f;}F(d,d.jm,f);f=new H;g=d.jo;h=g.data;i=d.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}Ro(c,b,0,1,0,e);c.x5=1;a.jZ=c;}LE(a.n2,0.0,
0.0+B3.kr.width,0.0,0.0+B3.kr.height,0.0,1.0);a.lB=1;},
Rn=(a,b)=>{let c=new S6();AKy(c,a,b);return c;},
DR=(a,b)=>{let c,d;if(a.la!==null){b=new B5;b.jp=1;b.jq=1;b.jr=A(501);B(b);}a.la=b;if(a.lB){Ck(a.rb,a.n2.kd);Nz(a.rb.kd,a.m7.kd);a.lB=0;}b=a.jZ;c=a.rb;d=a.la.q5;Ck(b.sF,c.kd);b.u$=d;},
Jh=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n;if(a.la===Il){AA5(a,b,c,e,f,a.uE,h,i);return;}K1(a,DB,null,2);j=a.jZ;k=h.j8;l=h.j7;m=h.j6;n=h.j5;j.ks.data[j.ko+j.kx|0]=C3(k,l,m,n);B4(a.jZ,b,c,d);h=a.jZ;b=i.j8;d=i.j7;k=i.j6;c=i.j5;h.ks.data[h.ko+h.kx|0]=C3(b,d,k,c);B4(a.jZ,e,f,g);},
AHt=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;K1(a,DB,Il,8);F9();o=FF.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.la!==DB){bf=a.jZ;bf.ks.data[bf.ko+bf.kx|0]=C3(k.j8,k.j7,k.j6,k.j5);B4(a.jZ,x,y,0.0);bf=a.jZ;bf.ks.data[bf.ko+bf.kx|0]=
C3(l.j8,l.j7,l.j6,l.j5);B4(a.jZ,z,ba,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(m.j8,m.j7,m.j6,m.j5);B4(a.jZ,bb,bc,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(m.j8,m.j7,m.j6,m.j5);B4(a.jZ,bb,bc,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(n.j8,n.j7,n.j6,n.j5);B4(a.jZ,bd,be,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(k.j8,k.j7,k.j6,k.j5);B4(a.jZ,x,y,0.0);}else{bf=a.jZ;bf.ks.data[bf.ko+bf.kx|0]=C3(k.j8,k.j7,k.j6,k.j5);B4(a.jZ,x,y,0.0);bf=a.jZ;bf.ks.data[bf.ko+bf.kx|0]=C3(l.j8,l.j7,l.j6,l.j5);B4(a.jZ,z,ba,0.0);bf=a.jZ;bf.ks.data[bf.ko
+bf.kx|0]=C3(l.j8,l.j7,l.j6,l.j5);B4(a.jZ,z,ba,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(m.j8,m.j7,m.j6,m.j5);B4(a.jZ,bb,bc,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(m.j8,m.j7,m.j6,m.j5);B4(a.jZ,bb,bc,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(n.j8,n.j7,n.j6,n.j5);B4(a.jZ,bd,be,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(n.j8,n.j7,n.j6,n.j5);B4(a.jZ,bd,be,0.0);l=a.jZ;l.ks.data[l.ko+l.kx|0]=C3(k.j8,k.j7,k.j6,k.j5);B4(a.jZ,x,y,0.0);}},
AA5=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p;K1(a,DB,Il,8);i=Gk(g);j=Gk(h);g=a.tF;k=e-c;l=b-d;g.ku=k;g.kt=l;l=DS(k*k+l*l);if(l!==0.0){g.ku=g.ku/l;g.kt=g.kt/l;}f=f*0.5;l=g.ku*f;m=g.kt*f;if(a.la!==DB){g=a.jZ;g.ks.data[g.ko+g.kx|0]=i;B4(g,b+l,c+m,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=i;b=b-l;c=c-m;B4(g,b,c,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=j;f=d+l;k=e+m;B4(g,f,k,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=j;B4(g,d-l,e-m,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=j;B4(g,f,k,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=i;B4(g,b,c,0.0);}else{g
=a.jZ;g.ks.data[g.ko+g.kx|0]=i;n=b+l;o=c+m;B4(g,n,o,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=i;p=b-l;b=c-m;B4(g,p,b,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=j;c=d+l;f=e+m;B4(g,c,f,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=j;d=d-l;e=e-m;B4(g,d,e,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=j;B4(g,c,f,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=i;B4(g,n,o,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=j;B4(g,d,e,0.0);g=a.jZ;g.ks.data[g.ko+g.kx|0]=i;B4(g,p,b,0.0);}},
K1=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.la;if(e===null){b=new B5;b.jp=1;b.jq=1;b.jr=A(30);B(b);}if(!(e!==b&&e!==c)){if(a.lB){DQ(a.jZ);a.la=null;DR(a,e);}else{b=a.jZ;if((b.t3-b.pG|0)<d){DQ(b);a.la=null;DR(a,e);}}}else{if(!a.q9){if(c===null){c=new B5;e=new J;e.jo=G(16);F(e,e.jm,A(502));F(e,e.jm,b===null?A(2):b.jB);F(e,e.jm,A(503));b=new H;f=e.jo;g=f.data;h=e.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);c.jp=1;c.jq=1;c.jr=b;B(c);}b=new I;b.jp=1;b.jq=1;B(b);}j=new B5;e=new J;e.jo=G(16);F(e,e.jm,A(502));F(e,
e.jm,b===null?A(2):b.jB);F(e,e.jm,A(504));F(e,e.jm,c.jB);F(e,e.jm,A(503));b=new H;f=e.jo;g=f.data;h=e.jm;i=g.length;if(h>=0&&h<=(i-0|0)){b.jn=K(f.data,0,h);j.jp=1;j.jq=1;j.jr=b;B(j);}b=new I;b.jp=1;b.jq=1;B(b);}DQ(a.jZ);a.la=null;DR(a,b);}};
function Ew(){let a=this;C.call(a);a.jS=0;a.jA=0;a.jt=0;a.jL=0;}
let TC=(a,b)=>{a.jL=(-1);a.jS=b;a.jt=b;},
Cw=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.jt){a.jA=b;if(b<a.jL)a.jL=0;return a;}c=new Bj;d=a.jt;e=new J;e.jo=G(16);F(e,e.jm,A(505));L(e,e.jm,b,10);F(e,e.jm,A(506));L(e,e.jm,d,10);d=e.jm;Bd(e,d,d+1|0);f=e.jo;g=f.data;g[d]=93;h=new H;d=e.jm;i=g.length;if(d>=0&&d<=(i-0|0)){h.jn=K(f.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
CD=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.jS){if(a.jL>b)a.jL=(-1);a.jt=b;if(a.jA>b)a.jA=b;return a;}c=new Bj;d=a.jS;e=new J;e.jo=G(16);F(e,e.jm,A(507));L(e,e.jm,b,10);F(e,e.jm,A(506));L(e,e.jm,d,10);d=e.jm;Bd(e,d,d+1|0);f=e.jo;g=f.data;g[d]=93;h=new H;d=e.jm;i=g.length;if(d>=0&&d<=(i-0|0)){h.jn=K(f.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);};
let D3=E(Ew);
let IJ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.is()){e=new Fu;e.jp=1;e.jq=1;B(e);}f=a.jt;g=a.jA;if((f-g|0)<d){e=new Ii;e.jp=1;e.jq=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new J;j.jo=G(16);F(j,j.jm,A(508));L(j,j.jm,i,10);F(j,j.jm,A(509));L(j,j.jm,f,10);k=new H;b=j.jo;h=b.data;d=j.jm;f=h.length;if(d>=0&&d<=(f-0|0)){k.jn=K(b.data,0,d);e.jp=1;e.jq=1;e.jr=k;B(e);}e=new I;e.jp=1;e.jq=1;Bn(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.it(g,h[c]);i=i+1|0;g=l;c=f;}a.jA=a.jA+d|0;return a;}e
=new I;j=new J;j.jo=G(16);F(j,j.jm,A(510));L(j,j.jm,d,10);F(j,j.jm,A(511));k=new H;b=j.jo;h=b.data;d=j.jm;f=h.length;if(d>=0&&d<=(f-0|0)){k.jn=K(b.data,0,d);e.jp=1;e.jq=1;e.jr=k;B(e);}e=new I;e.jp=1;e.jq=1;Bn(e);B(e);}}b=b.data;e=new I;d=b.length;j=new J;j.jo=G(16);F(j,j.jm,A(512));L(j,j.jm,c,10);F(j,j.jm,A(506));L(j,j.jm,d,10);d=j.jm;Bd(j,d,d+1|0);b=j.jo;h=b.data;h[d]=41;k=new H;d=j.jm;f=h.length;if(d>=0&&d<=(f-0|0)){k.jn=K(b.data,0,d);e.jp=1;e.jq=1;e.jr=k;B(e);}e=new I;e.jp=1;e.jq=1;Bn(e);B(e);},
ASF=(a,b)=>{CD(a,b);return a;},
ATv=(a,b)=>{Cw(a,b);return a;},
ASI=a=>{a.jt=a.jA;a.jA=0;a.jL=(-1);return a;},
AUF=a=>{a.jA=0;a.jt=a.jS;a.jL=(-1);return a;},
AKr=(a,b)=>{CD(a,b);return a;},
APN=(a,b)=>{Cw(a,b);return a;};
let GL=E(Ew);
let TT=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.is()){e=new Fu;e.jp=1;e.jq=1;B(e);}f=a.jt;g=a.jA;if((f-g|0)<d){e=new Ii;e.jp=1;e.jq=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new J;j.jo=G(16);F(j,j.jm,A(513));L(j,j.jm,i,10);F(j,j.jm,A(509));L(j,j.jm,f,10);k=new H;b=j.jo;h=b.data;d=j.jm;f=h.length;if(d>=0&&d<=(f-0|0)){k.jn=K(b.data,0,d);e.jp=1;e.jq=1;e.jr=k;B(e);}e=new I;e.jp=1;e.jq=1;Bn(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iu(g,h[c]);i=i+1|0;g=l;c=f;}a.jA=a.jA+d|0;return a;}e
=new I;j=new J;j.jo=G(16);F(j,j.jm,A(510));L(j,j.jm,d,10);F(j,j.jm,A(511));k=new H;b=j.jo;h=b.data;d=j.jm;f=h.length;if(d>=0&&d<=(f-0|0)){k.jn=K(b.data,0,d);e.jp=1;e.jq=1;e.jr=k;B(e);}e=new I;e.jp=1;e.jq=1;Bn(e);B(e);}}b=b.data;e=new I;d=b.length;j=new J;j.jo=G(16);F(j,j.jm,A(512));L(j,j.jm,c,10);F(j,j.jm,A(506));L(j,j.jm,d,10);d=j.jm;Bd(j,d,d+1|0);b=j.jo;h=b.data;h[d]=41;k=new H;d=j.jm;f=h.length;if(d>=0&&d<=(f-0|0)){k.jn=K(b.data,0,d);e.jp=1;e.jq=1;e.jr=k;B(e);}e=new I;e.jp=1;e.jq=1;Bn(e);B(e);},
ATM=(a,b)=>{CD(a,b);return a;},
ATS=(a,b)=>{Cw(a,b);return a;},
AT2=a=>{a.jt=a.jA;a.jA=0;a.jL=(-1);return a;},
AUx=a=>{a.jA=0;a.jt=a.jS;a.jL=(-1);return a;},
ATg=(a,b)=>{CD(a,b);return a;},
ARM=(a,b)=>{Cw(a,b);return a;};
let GI=E(Ew);
let ARE=(a,b)=>{Cw(a,b);return a;},
ATu=a=>{a.jA=0;a.jt=a.jS;a.jL=(-1);return a;};
function EH(){let a=this;Ew.call(a);a.kD=0;a.ke=null;a.kh=null;}
let AKi=(a,b)=>{CD(a,b);return a;},
WL=(a,b)=>{Cw(a,b);return a;};
function GX(){C.call(this);this.rc=null;}
let Ci=null,Jm=null,Ln=null;
let C4=()=>{let b;if(Ln===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;Ln=(new Int8Array(b))[0]?Jm:Ci;}return Ln;},
AUE=()=>{let b;b=new GX;b.rc=A(4);Ci=b;b=new GX;b.rc=A(5);Jm=b;};
let AEJ=E();
let DZ=E(0);
function CL(){let a=this;EH.call(a);a.li=0;a.kJ=0;}
let VA=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jt)return a.ke.data[a.kD+b|0];c=new I;d=a.jt;e=new J;e.jo=G(16);F(e,e.jm,A(514));L(e,e.jm,b,10);F(e,e.jm,A(506));L(e,e.jm,d,10);d=e.jm;Bd(e,d,d+1|0);f=e.jo;g=f.data;g[d]=41;h=new H;d=e.jm;i=g.length;if(d>=0&&d<=(i-0|0)){h.jn=K(f.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
Jo=a=>{let b,c,d,e,f,g;b=a.jt;c=a.jA;d=(b-c|0)/2|0;if(a.kh!==Ci){e=new NK;f=a.kD+c|0;c=a.kJ;e.jL=(-1);e.jS=d;e.jt=d;e.jA=0;e.jt=d;e.o5=f;e.nW=a;e.sb=c;return e;}e=new Pv;b=a.kD+c|0;g=a.kJ;e.jL=(-1);e.jS=d;e.jt=d;e.jA=0;e.jt=d;e.o5=b;e.nW=a;e.sb=g;return e;},
ANv=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.jt){c=a.ke.data;b=a.kD+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.kh!==Ci)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new I;d=a.jt-3|0;i=new J;i.jo=G(16);F(i,i.jm,A(514));L(i,i.jm,b,10);F(i,i.jm,A(506));L(i,i.jm,d,10);d=i.jm;Bd(i,d,d+1|0);c=i.jo;j=c.data;j[d]=41;k=new H;d=i.jm;e=j.length;if(d>=0&&d<=(e-0|0)){k.jn=K(c.data,0,d);h.jp=1;h.jq=1;h.jr=k;B(h);}h=new I;h.jp=1;h.jq=1;Bn(h);B(h);},
AC5=(a,b,c)=>{let d,e,f,g,h,i;if(a.kJ){d=new Fu;d.jp=1;d.jq=1;B(d);}if(b>=0&&(b+3|0)<a.jt){if(a.kh!==Ci){e=a.ke.data;b=a.kD+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.ke.data;b=a.kD+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new I;c=a.jt-3|0;f=new J;f.jo=G(16);F(f,f.jm,A(514));L(f,f.jm,b,10);F(f,f.jm,A(506));L(f,f.jm,c,10);c=f.jm;Bd(f,c,c+1|0);e=f.jo;g=e.data;g[c]=41;h=new H;c=f.jm;i=g.length;if(c>=
0&&c<=(i-0|0)){h.jn=K(e.data,0,c);d.jp=1;d.jq=1;d.jr=h;B(d);}d=new I;d.jp=1;d.jq=1;B(d);},
Gw=a=>{let b,c,d,e,f,g;b=a.jt;c=a.jA;d=(b-c|0)/4|0;if(a.kh!==Ci){e=new N_;f=a.kD+c|0;c=a.kJ;e.jL=(-1);e.jS=d;e.jt=d;e.jA=0;e.jt=d;e.oK=f;e.oJ=a;e.sE=c;return e;}e=new RO;b=a.kD+c|0;g=a.kJ;e.jL=(-1);e.jS=d;e.jt=d;e.jA=0;e.jt=d;e.oK=b;e.oJ=a;e.sE=g;return e;},
ER=a=>{let b,c,d,e,f,g;b=a.jt;c=a.jA;d=(b-c|0)/4|0;if(a.kh!==Jm){e=new NV;f=a.kD+c|0;c=a.kJ;e.jL=(-1);e.jS=d;e.jt=d;e.jA=0;e.jt=d;e.oD=f;e.n0=a;e.tn=c;return e;}e=new Ql;b=a.kD+c|0;g=a.kJ;e.jL=(-1);e.jS=d;e.jt=d;e.jA=0;e.jt=d;e.oD=b;e.n0=a;e.tn=g;return e;},
ARt=a=>{return a.ke.data;};
let AH7=E();
let RX=E(0);
function Kl(){let a=this;C.call(a);a.ur=null;a.mz=0;a.ms=0;a.oO=null;a.pv=null;a.uW=0;a.om=0;}
let AOE=0;
let Z4=(a,b,c,d,e)=>{a.mz=0;a.ms=0;a.om=0;a.ur=b;a.pv=c;a.oO=d;a.uW=e;if(c!==null){b=Tn(a,c);a.pv=b;c=b.kB;a.mz=c===null?b.lm:c.lg;a.ms=c===null?b.lp:c.lf;if(d===null)a.oO=c===null?Fc:HI(c.kT);}},
G9=(a,b,c,d)=>{let e=new Kl();Z4(e,a,b,c,d);return e;},
OZ=a=>{let b,c;if(a.om){b=new Q;b.jp=1;b.jq=1;b.jr=A(515);B(b);}if(a.pv===null){b=Tn(a,Gd(a.ur));a.pv=b;c=b.kB;a.mz=c===null?b.lm:c.lg;a.ms=c===null?b.lp:c.lf;if(a.oO===null)a.oO=c===null?Fc:HI(c.kT);}a.om=1;},
Tn=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Bi===null&&AOE){c=b.kB;d=c===null?b.lm:c.lg;e=c===null?b.lp:c.lf;f=KA(d);g=KA(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new Fi;c=b.kB;I7(h,f,g,c===null?Fc:HI(c.kT));c=h.kB;if(c===null){EW(b);Js(h,b.no,0,0,d,e,0,0,d,e);}else{i=b.kB.ld;j=c.ld;Jc(i,j,0,0,d,e,0,0,d,e);}if(b.nE){c=new Q;c.jp=1;c.jq=1;c.jr=A(57);B(c);}Ek();Gn(Fn,b.oQ);c=b.kB;if(c!==null)Hz(c.ld);b.nE=1;return h;};
function Fi(){let a=this;C.call(a);a.lm=0;a.lp=0;a.no=null;a.k$=null;a.oQ=0;a.pk=null;a.vU=0;a.vW=0;a.vY=0;a.vX=0.0;a.qZ=null;a.pW=null;a.vI=null;a.xV=null;a.oN=null;a.pI=null;a.t5=0;a.kB=null;a.nE=0;}
let KP=null;
let F5=()=>{F5=BH(Fi);AGe();};
let WA=(a,b)=>{let c,d,e,f,g,h,i,j,k;F5();a.vU=255;a.vW=255;a.vY=255;a.qZ=LY(255,255,255,a.vX);a.pW=JS;a.vI=L1;a.t5=0;c=b.ta;d=b.tI.q4;e=B2(d,c);d=e<0?null:d.kA.data[e];if(CZ.mN.s2){f=AKA(d.mC);a.kB=AHZ(f,0,f.data.length,0);JA(a,(-1),(-1),null,null);}else{JA(a,(-1),(-1),d.s3,null);if(a.oN===null){d=new Q;g=b.ta;b=new J;b.jo=G(16);F(b,b.jm,A(516));e=b.jm;if(g===null)g=A(2);F(b,e,g);F(b,b.jm,A(517));h=new H;i=b.jo;f=i.data;j=b.jm;k=f.length;if(j>=0&&j<=(k-0|0)){h.jn=K(i.data,0,j);d.jp=1;d.jq=1;d.jr=h;B(d);}b=
new I;b.jp=1;b.jq=1;B(b);}}},
Gd=a=>{let b=new Fi();WA(b,a);return b;},
I7=(a,b,c,d)=>{F5();a.vU=255;a.vW=255;a.vY=255;a.qZ=LY(255,255,255,a.vX);a.pW=JS;a.vI=L1;a.t5=0;JA(a,b,c,null,null);},
ARJ=(a,b,c)=>{let d=new Fi();I7(d,a,b,c);return d;},
JA=(a,b,c,d,e)=>{let f,g;if(e!==null){a.pI=e;a.lm=e.getWidth();a.lp=e.getHeight();}else if(d===null){a.lm=b;a.lp=c;}else{a.oN=d;a.lm=d.width;a.lp=d.height;}if(C1){d=new CL;f=BE(4);d.jL=(-1);d.jS=4;d.jt=4;d.kh=Ci;d.kD=0;d.ke=f;d.jA=0;d.jt=4;d.li=1;d.kJ=0;d.kh=C4();}else{f=BE(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new CL;g=0+c|0;d.jL=(-1);d.jS=c;d.jt=c;d.kh=Ci;d.kD=0;d.ke=f;d.jA=0;d.jt=g;d.li=0;d.kJ=0;}else{d=new I;d.jp=1;d.jq=1;Bn(d);B(d);}}a.pk=d;Ek();c=MF;MF=c+1|0;a.oQ=c;AC5(d,0,c);B1(Fn,a.oQ,a);},
AEZ=a=>{let b,c;EL();b=FH.mx.document.createElement("canvas");a.no=b;c=a.lm;b.width=c;b=a.no;c=a.lp;b.height=c;b=a.no.getContext("2d");a.k$=b;F5();c=Bs(E2.jB);b.globalCompositeOperation=c;},
LY=(b,c,d,e)=>{let f,g,h,i;F5();f=new J;f.jo=G(16);F(f,f.jm,A(518));L(f,f.jm,b,10);b=f.jm;Bd(f,b,b+1|0);f.jo.data[b]=44;L(f,f.jm,c,10);c=f.jm;Bd(f,c,c+1|0);f.jo.data[c]=44;L(f,f.jm,d,10);c=f.jm;Bd(f,c,c+1|0);f.jo.data[c]=44;Hj(f,f.jm,e);d=f.jm;Bd(f,d,d+1|0);g=f.jo;h=g.data;h[d]=41;i=new H;c=f.jm;d=h.length;if(c>=0&&c<=(d-0|0)){i.jn=K(g.data,0,c);return i;}f=new I;f.jp=1;f.jq=1;B(f);},
EW=a=>{let b,c;if(a.no===null){AEZ(a);if(a.oN!==null){b=a.k$;c=Bs(KW.lI);b.globalCompositeOperation=c;b=a.k$;c=a.oN;b.drawImage(c,0.0,0.0);b=a.k$;c=Bs(E2.lI);b.globalCompositeOperation=c;}if(a.pI!==null){c=a.k$;b=Bs(KW.lI);c.globalCompositeOperation=b;b=a.k$;c=a.pI;b.drawImage(c,0.0,0.0);b=a.k$;c=Bs(E2.lI);b.globalCompositeOperation=c;}}},
Js=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;EW(a);if(a.pW===IB){a:{k=a.k$;l=Bs(KP);k.fillStyle=l;k=a.k$;l=Bs(KP);k.strokeStyle=l;k=a.k$;l="destination-out";k.globalCompositeOperation=l;a.k$.beginPath();m=a.k$;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=KM;EW(a);KR();switch(M_.data[k.jw]){case 1:break;case 2:a.k$.stroke();break a;default:break a;}a.k$.fill();}a.k$.closePath();r=a.k$;k=Bs(a.qZ);r.fillStyle=k;r=a.k$;l=Bs(a.qZ);r.strokeStyle=l;r=a.k$;k=Bs(E2.lI);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.k$;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.xV=null;},
AGe=()=>{KP=LY(255,255,255,1.0);};
let G0=E(GI);
let AT4=a=>{let b,c;b=a.jA;if(b<a.jt){a.jA=b+1|0;return a.ih(b);}c=new Mq;c.jp=1;c.jq=1;B(c);},
D2=(a,b)=>{let c,d;if(a.is()){c=new Fu;c.jp=1;c.jq=1;B(c);}d=a.jA;if(d<a.jt){a.jA=d+1|0;a.iC(d,b);return a;}c=new Ii;c.jp=1;c.jq=1;B(c);},
EP=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jt)return a.ih(b);c=new I;d=a.jt;e=new J;e.jo=G(16);F(e,e.jm,A(514));L(e,e.jm,b,10);F(e,e.jm,A(506));L(e,e.jm,d,10);d=e.jm;Bd(e,d,d+1|0);f=e.jo;g=f.data;g[d]=41;h=new H;d=e.jm;i=g.length;if(d>=0&&d<=(i-0|0)){h.jn=K(f.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
T8=(a,b,c)=>{let d,e,f,g,h,i;if(a.is()){d=new Fu;d.jp=1;d.jq=1;B(d);}if(b>=0&&b<a.jt){a.iC(b,c);return a;}d=new I;c=a.jt;e=new J;e.jo=G(16);F(e,e.jm,A(514));L(e,e.jm,b,10);F(e,e.jm,A(506));L(e,e.jm,c,10);c=e.jm;Bd(e,c,c+1|0);f=e.jo;g=f.data;g[c]=41;h=new H;c=e.jm;i=g.length;if(c>=0&&c<=(i-0|0)){h.jn=K(f.data,0,c);d.jp=1;d.jq=1;d.jr=h;B(d);}d=new I;d.jp=1;d.jq=1;Bn(d);B(d);},
ATa=a=>{return a.is();};
function FP(){let a=this;G0.call(a);a.ps=0;a.op=0;a.ob=null;}
let AI_=(a,b)=>{return a.ob.data[b+a.op|0];},
AG1=(a,b,c)=>{a.ob.data[b+a.op|0]=c;},
Vu=a=>{return a.ps;};
let GQ=E(D3);
let QR=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jt)return a.iD(b);c=new I;d=a.jt;e=new J;e.jo=G(16);F(e,e.jm,A(514));L(e,e.jm,b,10);F(e,e.jm,A(506));L(e,e.jm,d,10);d=e.jm;Bd(e,d,d+1|0);f=e.jo;g=f.data;g[d]=41;h=new H;d=e.jm;i=g.length;if(d>=0&&d<=(i-0|0)){h.jn=K(f.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
MT=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.is()){d=new Fu;d.jp=1;d.jq=1;B(d);}if(b>=0&&b<a.jt){a.it(b,c);return a;}d=new I;e=a.jt;f=new J;f.jo=G(16);F(f,f.jm,A(514));L(f,f.jm,b,10);F(f,f.jm,A(506));L(f,f.jm,e,10);e=f.jm;Bd(f,e,e+1|0);g=f.jo;h=g.data;h[e]=41;i=new H;e=f.jm;j=h.length;if(e>=0&&e<=(j-0|0)){i.jn=K(g.data,0,e);d.jp=1;d.jq=1;d.jr=i;B(d);}d=new I;d.jp=1;d.jq=1;Bn(d);B(d);},
ASk=a=>{return a.is();};
function HD(){let a=this;GQ.call(a);a.pX=0;a.pr=0;a.oZ=null;}
let AKG=(a,b)=>{return a.oZ.data[b+a.pr|0];},
AJp=(a,b,c)=>{a.oZ.data[b+a.pr|0]=c;},
AJK=a=>{return a.pX;};
let O1=E(0);
function KU(){let a=this;C.call(a);a.u$=0;a.ko=0;a.vA=0;a.t3=0;a.pG=0;a.mV=null;a.p1=null;a.x5=0;a.vP=0;a.ux=0;a.xK=0;a.kx=0;a.wt=0;a.sF=null;a.ks=null;a.sy=null;}
let Ro=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.sF=C7();a.t3=b;a.vP=e;a.p1=f;g=Ye(a,c,d,e);h=new IF;h.qE=1;h.qk=0;f=new Bg;CJ();h.vo=f;f=Qb(g);h.lt=Ef===null?Rm(0,b,f):QZ(0,b,f);f=new G_;f.nr=1;f.oV=0;f.sg=1;if(!C1){g=Kw(0);d=g.data.length;i=new Ja;j=0+d|0;TC(i,d);i.jA=0;i.jt=j;i.p_=0;i.qt=0;i.pR=g;}else{k=new CL;g=BE(0);BA(k);k.jL=(-1);k.jS=0;k.jt=0;k.kh=Ci;k.kD=0;k.ke=g;k.jA=0;k.jt=0;k.li=1;k.kJ=0;k.kh=C4();i=Jo(k);}f.m1=i;i.jt=i.jA;i.jA=0;i.jL=(-1);i=Bi;k=i.ju.createBuffer();d=i.lv;i.lv=d+1|0;B1(i.md,d,B9(k));f.qC
=d;f.p2=35048;h.lq=f;h.ph=0;f=CZ;i=Hv;if(f===null){i=i.ma.data[0];while(i!==null&&i.l$!==null){i=i.mk;}}else{k=f;if(!k.$id$){l=D_();k.$id$=l;}m=f.$id$;g=i.ma.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.ok==m){k=i.l$;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.mk;}}i=i===null?null:i.l4;if(i===null){i=new Bt;i.kk=1;i.jE=S(C,16);}BN(i,h);Fq(Hv,f,i);a.mV=h;a.ks=CB(Da(b,(h.lt.iF()).l3/4|0));a.ux=(a.mV.lt.iF()).l3/4|0;g=(a.mV.lt.iF()).k9.data;b=g.length;d=0;a:{while(d<b){if(g[d].lR==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.mV.lt.iF()).k9.data;m=g.length;c=0;b:{while(c<m){if(g[c].lR==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.m5/4|0;}a.xK=b;g=(a.mV.lt.iF()).k9.data;m=g.length;c=0;c:{while(c<m){if(g[c].lR==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.mV.lt.iF()).k9.data;m=g.length;c=0;d:{while(c<m){if(g[c].lR==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.m5/4|0;}a.kx=b;g=(a.mV.lt.iF()).k9.data;m=g.length;c=0;e:{while(c<m){if(g[c].lR==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.mV.lt.iF()).k9.data;m
=g.length;c=0;f:{while(c<m){if(g[c].lR==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.m5/4|0;}a.wt=b;a.sy=S(H,e);m=0;g:{while(m<e){g=a.sy;f=new J;f.jo=G(16);F(f,f.jm,A(519));L(f,f.jm,m,10);i=new H;n=f.jo;o=n.data;c=f.jm;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.jn=K(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new I;f.jp=1;f.jq=1;B(f);},
AFE=(a,b,c,d,e)=>{let f=new KU();Ro(f,a,b,c,d,e);return f;},
Ye=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bt;e.kk=1;e.jE=S(C,16);f=new DD;f.lR=1;f.lz=3;f.lO=5126;f.lY=0;f.lV=A(467);f.nj=0;f.oo=DO(1);BN(e,f);if(b){g=new DD;g.lR=8;g.lz=3;g.lO=5126;g.lY=0;g.lV=A(520);g.nj=0;g.oo=DO(8);BN(e,g);}if(c){g=new DD;g.lR=4;g.lz=4;g.lO=5121;g.lY=1;g.lV=A(468);g.nj=0;g.oo=DO(4);BN(e,g);}h=0;while(true){if(h>=d){b=e.js;i=S(DD,b);j=i.data;h=0;while(true){c=Cf(h,b);if(c>=0)break;if(c>=0){f=new I;g=new J;g.jo=G(16);F(g,g.jm,A(18));L(g,g.jm,h,10);F(g,g.jm,A(19));b=e.js;L(g,g.jm,b,10);e=new H;i
=g.jo;j=i.data;c=g.jm;d=j.length;if(c>=0&&c<=(d-0|0)){e.jn=K(i.data,0,c);f.jp=1;f.jq=1;f.jr=e;B(f);}e=new I;e.jp=1;e.jq=1;B(e);}j[h]=e.jE.data[h];h=h+1|0;}return i;}g=new DD;k=new J;k.jo=G(16);F(k,k.jm,A(521));L(k,k.jm,h,10);f=new H;i=k.jo;j=i.data;c=k.jm;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.jn=K(i.data,0,c);g.lR=16;g.lz=2;g.lO=5126;g.lY=0;g.lV=f;g.nj=0;g.oo=DO(16);BN(e,g);h=h+1|0;}e=new I;e.jp=1;e.jq=1;B(e);},
B4=(a,b,c,d)=>{let e,f;e=a.ko;f=a.ks.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.vA=0;a.ko=e+a.ux|0;a.pG=a.pG+1|0;},
DQ=a=>{let b,c,d,e,f,g,h;if(!a.pG)return;b=a.p1;c=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}c.g8(b.lW);c=a.p1;d=a.sF;HL();e=IC(c,A(522),Hn);b=Bi;if(c.kf){CA(c,c.k4,c.k6);c.kf=0;}PJ(b,e,1,0,d.kd,0);f=0;while(f<a.vP){b=a.p1;c=a.sy.data[f];d=Bi;if(b.kf){CA(b,b.k4,b.k6);b.kf=0;}d.hg(IC(b,c,Hn),f);f=f+1|0;}b=a.mV;g=a.ks;h=a.ko;b.lt.g9(g,0,h);b=a.mV;RG(b,a.p1,a.u$,0,b.lq.hI()<=0?b.lt.iG():b.lq.hE(),b.qE);a.vA=0;a.ko=0;a.pG=0;},
Vk=(b,c,d)=>{let e,f,g,h,i,j,k;e=new J;e.jo=G(16);F(e,e.jm,A(523));f=!b?A(61):A(524);F(e,e.jm,f);f=!c?A(61):A(525);F(e,e.jm,f);f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);i=0;while(true){if(i>=d){e=new J;e.jo=G(16);F(e,e.jm,f);F(e,e.jm,A(526));f=!c?A(61):A(527);F(e,e.jm,f);f=new H;g=e.jo;h=g.data;b=e.jm;j=h.length;if(b>=0&&b<=(j-0|0)){f.jn=K(g.data,0,b);i=0;while(true){if(i>=d){e=new J;e.jo=G(16);F(e,e.jm,f);F(e,e.jm,A(528));f=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i
>=0&&i<=(j-0|0)){f.jn=K(g.data,0,i);if(c){e=new J;e.jo=G(16);F(e,e.jm,f);F(e,e.jm,A(529));f=new H;g=e.jo;h=g.data;c=e.jm;i=h.length;if(c>=0&&c<=(i-0|0))f.jn=K(g.data,0,c);else{e=new I;e.jp=1;e.jq=1;B(e);}}i=0;while(true){if(i>=d){e=new J;e.jo=G(16);F(e,e.jm,f);F(e,e.jm,A(530));f=new H;g=e.jo;h=g.data;c=e.jm;d=h.length;if(c>=0&&c<=(d-0|0)){f.jn=K(g.data,0,c);return f;}e=new I;e.jp=1;e.jq=1;B(e);}e=new J;e.jo=G(16);F(e,e.jm,f);F(e,e.jm,A(531));L(e,e.jm,i,10);F(e,e.jm,A(532));F(e,e.jm,A(521));L(e,e.jm,i,10);F(e,
e.jm,A(533));f=new H;g=e.jo;h=g.data;c=e.jm;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.jn=K(g.data,0,c);i=i+1|0;}e=new I;e.jp=1;e.jq=1;B(e);}e=new I;e.jp=1;e.jq=1;B(e);}e=new J;e.jo=G(16);F(e,e.jm,f);F(e,e.jm,A(534));L(e,e.jm,i,10);F(e,e.jm,A(533));f=new H;g=e.jo;h=g.data;j=e.jm;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.jn=K(g.data,0,j);i=i+1|0;}e=new I;e.jp=1;e.jq=1;B(e);}e=new I;e.jp=1;e.jq=1;B(e);}e=new J;e.jo=G(16);F(e,e.jm,f);F(e,e.jm,A(535));L(e,e.jm,i,10);F(e,e.jm,A(533));f=new H;g=e.jo;h=g.data;j
=e.jm;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.jn=K(g.data,0,j);i=i+1|0;}e=new I;e.jp=1;e.jq=1;B(e);}e=new I;e.jp=1;e.jq=1;B(e);},
AHw=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(536);if(c){f=new J;f.jo=G(16);F(f,f.jm,e);F(f,f.jm,A(527));e=new H;g=f.jo;h=g.data;i=f.jm;j=h.length;if(i>=0&&i<=(j-0|0))e.jn=K(g.data,0,i);else{e=new I;e.jp=1;e.jq=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new J;f.jo=G(16);F(f,f.jm,e);F(f,f.jm,A(537));e=!c?A(538):A(539);F(f,f.jm,e);e=new H;h=f.jo;g=h.data;b=f.jm;c=g.length;if(b>=0&&b<=(c-0|0)){e.jn=K(h.data,0,b);if(d>0){f=new J;f.jo=G(16);F(f,f.jm,e);F(f,f.jm,A(540));e=new H;g=f.jo;h=g.data;c=f.jm;i=h.length;if(c>=0&&c<=(i-
0|0))e.jn=K(g.data,0,c);else{e=new I;e.jp=1;e.jq=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new J;f.jo=G(16);F(f,f.jm,e);F(f,f.jm,A(541));e=new H;g=f.jo;h=g.data;c=f.jm;d=h.length;if(c>=0&&c<=(d-0|0)){e.jn=K(g.data,0,c);return e;}e=new I;e.jp=1;e.jq=1;B(e);}if(i!=c){f=new J;f.jo=G(16);F(f,f.jm,e);F(f,f.jm,A(542));L(f,f.jm,i,10);F(f,f.jm,A(543));L(f,f.jm,i,10);F(f,f.jm,A(544));e=new H;g=f.jo;h=g.data;j=f.jm;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.jn=K(g.data,0,j);}else{f=new J;f.jo=G(16);F(f,f.jm,e);F(f,
f.jm,A(542));L(f,f.jm,i,10);F(f,f.jm,A(543));L(f,f.jm,i,10);F(f,f.jm,A(488));e=new H;g=f.jo;h=g.data;j=f.jm;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.jn=K(g.data,0,j);}i=i+1|0;}e=new I;e.jp=1;e.jq=1;B(e);}e=new I;e.jp=1;e.jq=1;B(e);}e=new I;e.jp=1;e.jq=1;B(e);}f=new J;f.jo=G(16);F(f,f.jm,e);F(f,f.jm,A(534));L(f,f.jm,i,10);F(f,f.jm,A(533));e=new H;g=f.jo;h=g.data;j=f.jm;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.jn=K(g.data,0,j);f=new J;f.jo=G(16);F(f,f.jm,e);F(f,f.jm,A(545));L(f,f.jm,i,10);F(f,
f.jm,A(533));e=new H;g=f.jo;h=g.data;j=f.jm;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.jn=K(g.data,0,j);i=i+1|0;}e=new I;e.jp=1;e.jq=1;B(e);}e=new I;e.jp=1;e.jq=1;B(e);};
let I6=E(Bx);
let IB=null,JS=null,AH$=null;
let ADB=()=>{let b,c;b=new I6;b.jB=A(546);b.jw=0;IB=b;c=new I6;c.jB=A(547);c.jw=1;JS=c;AH$=P(I6,[b,c]);};
let HP=E(Bx);
let We=null,L1=null,AMW=null;
let AMF=()=>{let b,c;b=new HP;b.jB=A(548);b.jw=0;We=b;c=new HP;c.jB=A(549);c.jw=1;L1=c;AMW=P(HP,[b,c]);};
let JP=E();
function TR(){let a=this;JP.call(a);a.tI=null;a.ta=null;a.wX=null;}
let ACS=(a,b,c,d)=>{let e,f,g,h;if(d!==Fr&&d!==PT&&d!==R8){b=new Q;c=new J;c.jo=G(16);F(c,c.jm,A(550));F(c,c.jm,d===null?A(2):d.jB);F(c,c.jm,A(551));d=new H;e=c.jo;f=e.data;g=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){d.jn=K(e.data,0,g);b.jp=1;b.jq=1;b.jr=d;B(b);}b=new I;b.jp=1;b.jq=1;B(b);}a.tI=b;b=L_(c,A(552),A(106));if(ABN(b,A(106)))b=Cv(b,0,b.jn.length-1|0);a.ta=b;a.wX=d;},
Hp=(a,b,c)=>{let d=new TR();ACS(d,a,b,c);return d;};
function Le(){let a=this;C.call(a);a.ld=0;a.lg=0;a.lf=0;a.kT=0;a.pl=null;a.ql=null;}
let Z7=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=U(4);a.pl=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.ql=ANR(g,h,c,d);b=a.pl.data;a.ld=b[0];a.lg=b[1];a.lf=b[2];c=b[3];a.kT=c;if(e&&e!=c)ZK(a,e);},
AHZ=(a,b,c,d)=>{let e=new Le();Z7(e,a,b,c,d);return e;},
AQ9=(a,b,c,d)=>{let e;e=U(4);a.pl=e;a.ql=ALO(e.data,b,c,d);e=a.pl.data;a.ld=e[0];a.lg=e[1];a.lf=e[2];a.kT=e[3];},
ACr=(a,b,c)=>{let d=new Le();AQ9(d,a,b,c);return d;},
ZK=(a,b)=>{let c,d,e,f,g;c=ACr(a.lg,a.lf,b);LT(c.ld,0);d=a.lg;e=a.lf;f=a.ld;g=c.ld;Jc(f,g,0,0,d,e,0,0,d,e);Hz(a.ld);a.ld=c.ld;a.kT=c.kT;a.lf=c.lf;a.pl=c.pl;a.ql=c.ql;a.lg=c.lg;},
ANR=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
ALO=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
Hz=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
Jc=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
LT=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let HC=E(GL);
let ALp=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jt)return a.iM(b);c=new I;d=a.jt;e=new J;e.jo=G(16);F(e,e.jm,A(514));L(e,e.jm,b,10);F(e,e.jm,A(506));L(e,e.jm,d,10);d=e.jm;Bd(e,d,d+1|0);f=e.jo;g=f.data;g[d]=41;h=new H;d=e.jm;i=g.length;if(d>=0&&d<=(i-0|0)){h.jn=K(f.data,0,d);c.jp=1;c.jq=1;c.jr=h;B(c);}c=new I;c.jp=1;c.jq=1;Bn(c);B(c);},
AS6=a=>{return a.is();};
function Ja(){let a=this;HC.call(a);a.qt=0;a.p_=0;a.pR=null;}
let ACU=(a,b)=>{return a.pR.data[b+a.p_|0];},
AFm=(a,b,c)=>{a.pR.data[b+a.p_|0]=c;},
AAC=a=>{return a.qt;};
let AI2=E();
function Em(){Bx.call(this);this.na=0;}
let F2=null,AHQ=null,AKj=null,AGz=null,AJ0=null,AO$=null,ADr=null,ADR=null;
let YB=()=>{let b,c,d,e,f,g,h;b=new Em;b.jB=A(553);b.jw=0;b.na=9728;F2=b;c=new Em;c.jB=A(554);c.jw=1;c.na=9729;AHQ=c;d=new Em;d.jB=A(555);d.jw=2;d.na=9987;AKj=d;e=new Em;e.jB=A(556);e.jw=3;e.na=9984;AGz=e;f=new Em;f.jB=A(557);f.jw=4;f.na=9985;AJ0=f;g=new Em;g.jB=A(558);g.jw=5;g.na=9986;AO$=g;h=new Em;h.jB=A(559);h.jw=6;h.na=9987;ADr=h;ADR=P(Em,[b,c,d,e,f,g,h]);};
function Hx(){Bx.call(this);this.qo=0;}
let AN3=null,Ge=null,AId=null,AOm=null;
let AEn=()=>{let b,c,d;b=new Hx;b.jB=A(560);b.jw=0;b.qo=33648;AN3=b;c=new Hx;c.jB=A(561);c.jw=1;c.qo=33071;Ge=c;d=new Hx;d.jB=A(562);d.jw=2;d.qo=10497;AId=d;AOm=P(Hx,[b,c,d]);};
let PN=E();
let AQV=(a,b)=>{b=a.R(b);Bu();return b===null?null:b instanceof Fm()&&b instanceof Es?(b[Bk]===true?b:b.jY):b;},
Zt=a=>{return a.eP();};
function Hs(){let a=this;G0.call(a);a.oJ=null;a.sE=0;a.oK=0;}
let AGv=a=>{return a.sE;};
let N_=E(Hs);
let ACM=(a,b)=>{let c;c=a.oJ.ke.data;b=a.oK+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
Vs=(a,b,c)=>{let d;d=a.oJ.ke.data;b=a.oK+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let RO=E(Hs);
let ANz=(a,b)=>{let c;c=a.oJ.ke.data;b=a.oK+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
XP=(a,b,c)=>{let d;d=a.oJ.ke.data;b=a.oK+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function GS(){let a=this;GQ.call(a);a.n0=null;a.tn=0;a.oD=0;}
let AJZ=a=>{return a.tn;},
ALm=a=>{return a.n0.ke.data;};
let NV=E(GS);
let AGE=(a,b)=>{let c;c=a.n0.ke.data;b=a.oD+(b*4|0)|0;return Kx((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
ALg=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:PM(c);e=a.n0.ke.data;b=a.oD+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let Ql=E(GS);
let VG=(a,b)=>{let c;c=a.n0.ke.data;b=a.oD+(b*4|0)|0;return Kx(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AGs=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:PM(c);e=a.n0.ke.data;b=a.oD+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function GG(){let a=this;HC.call(a);a.nW=null;a.sb=0;a.o5=0;}
let AD$=a=>{return a.sb;},
ALV=a=>{return a.nW.ke.data;};
let NK=E(GG);
let AAj=(a,b)=>{let c;c=a.nW.ke.data;b=a.o5+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
Zo=(a,b,c)=>{let d;d=a.nW.ke.data;b=a.o5+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let Pv=E(GG);
let AIZ=(a,b)=>{let c;c=a.nW.ke.data;b=a.o5+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
AAl=(a,b,c)=>{let d;d=a.nW.ke.data;b=a.o5+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let KJ=E(Bz);
let Fu=E(KJ);
let Mq=E(Bz);
let Fv=E(Bx);
let PT=null,Fr=null,AHA=null,ACo=null,R8=null,ALE=null;
let ABR=()=>{let b,c,d,e,f;b=new Fv;b.jB=A(563);b.jw=0;PT=b;c=new Fv;c.jB=A(564);c.jw=1;Fr=c;d=new Fv;d.jB=A(565);d.jw=2;AHA=d;e=new Fv;e.jB=A(566);e.jw=3;ACo=e;f=new Fv;f.jB=A(567);f.jw=4;R8=f;ALE=P(Fv,[b,c,d,e,f]);};
let Ey=E(Bx);
let QF=null,AMf=null,Qi=null,S0=null,Rf=null,P9=null,Fc=null,AKw=null;
let HI=b=>{let c,d,e,f,g,h,i;if(b==1)return QF;if(b==2)return Qi;if(b==5)return S0;if(b==6)return Rf;if(b==3)return P9;if(b==4)return Fc;c=new Q;d=new J;d.jo=G(16);F(d,d.jm,A(568));L(d,d.jm,b,10);e=new H;f=d.jo;g=f.data;h=d.jm;i=g.length;if(h>=0&&h<=(i-0|0)){e.jn=K(f.data,0,h);c.jp=1;c.jq=1;c.jr=e;B(c);}c=new I;c.jp=1;c.jq=1;B(c);},
Vt=()=>{let b,c,d,e,f,g,h;b=new Ey;b.jB=A(196);b.jw=0;QF=b;c=new Ey;c.jB=A(569);c.jw=1;AMf=c;d=new Ey;d.jB=A(570);d.jw=2;Qi=d;e=new Ey;e.jB=A(571);e.jw=3;S0=e;f=new Ey;f.jB=A(572);f.jw=4;Rf=f;g=new Ey;g.jB=A(573);g.jw=5;P9=g;h=new Ey;h.jB=A(574);h.jw=6;Fc=h;AKw=P(Ey,[b,c,d,e,f,g,h]);};
let ABz=E();
let Lc=0,IE=null,Ix=null;
let AIh=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:PM(b);c.t2=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.sm=0;c.r_=0;return;}if(f)d=e|8388608;else{d=e<<1;while(DJ(CS(R(d),R(8388608)),B6)){d=d<<1;f=f+(-1)|0;}}g=Ix;h=AJ4(g,0,g.data.length,f);if(h<0)h= -h|0;g=Ix.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=IE.data[e];j=CS(R(d),D(4294967295, 0));k=Be(Bb(Y(j,CS(R(e),D(4294967295, 0))),32-i|0));if(k<Lc){while(EC(k,Lc)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=Ix.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Be(Bb(Y(j,CS(R(IE.data[e]),D(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=IE.data;f=h+1|0;e=g[f];m=i-1|0;n=Y(CS(R(l),D(4294967295, 0)),CS(R(e),D(4294967295, 0)));e=32-m|0;o=Be(Bb(n,e));p=Be(Bb(Y(CS(R(d-1|0),D(4294967295, 0)),CS(R(g[f]),D(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(EC(DL(k,r),DL(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(EC(DL(k,l),DL(o,l))>=0)break;m=l;}s=EC(q,m);d=s>0?Da(DL(k,q),q):s<0?Da(DL(k,m),m)+m|0:Da(DL((k+(m/2|0)|0),m),m);if(ES(R(d),R(1000000000))>=0)while(true){h=h+1|
0;d=DL(d,10);if(EC(d,1000000000)<0)break;}else if(EC(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.sm=d;c.r_=h-50|0;},
AB9=()=>{Lc=DL((-1),10);IE=H3([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Ix=H3([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let Iz=E(Bx);
let KM=null,OK=null,TE=null;
let AQ3=()=>{let b,c;b=new Iz;b.jB=A(575);b.jw=0;KM=b;c=new Iz;c.jB=A(576);c.jw=1;OK=c;TE=P(Iz,[b,c]);};
function Di(){Bx.call(this);this.lI=null;}
let KW=null,Y5=null,ZI=null,V_=null,AM0=null,ARb=null,Zi=null,AES=null,AGq=null,E2=null,ALz=null,ALI=null;
let ADp=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new Di;b.jB=A(577);b.jw=0;b.lI=A(578);KW=b;c=new Di;c.jB=A(579);c.jw=1;c.lI=A(580);Y5=c;d=new Di;d.jB=A(581);d.jw=2;d.lI=A(582);ZI=d;e=new Di;e.jB=A(583);e.jw=3;e.lI=A(584);V_=e;f=new Di;f.jB=A(585);f.jw=4;f.lI=A(586);AM0=f;g=new Di;g.jB=A(587);g.jw=5;g.lI=A(588);ARb=g;h=new Di;h.jB=A(589);h.jw=6;h.lI=A(590);Zi=h;i=new Di;i.jB=A(591);i.jw=7;i.lI=A(592);AES=i;j=new Di;j.jB=A(593);j.jw=8;j.lI=A(594);AGq=j;k=new Di;k.jB=A(595);k.jw=9;k.lI=A(596);E2=k;l=new Di;l.jB=A(597);l.jw
=10;l.lI=A(598);ALz=l;ALI=P(Di,[b,c,d,e,f,g,h,i,j,k,l]);};
let AK0=E(0);
let H7=E(Bx);
let N2=null,Tv=null,ABB=null;
let ZQ=()=>{let b,c;b=new H7;b.jB=A(599);b.jw=0;N2=b;c=new H7;c.jB=A(600);c.jw=1;Tv=c;ABB=P(H7,[b,c]);};
let AJ2=E();
let J9=0;
let ALS=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!J9){Pj(b,c,d,e);return;}f=GW;if(f!==MP&&f!==f&&f!==L9)ALe(b,c,d,e);else{g=BL;f=c.kB;if(f===null)h=6408;else a:{e=f.kT;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Q;g=new J;g.jo=G(16);DW(g,g.jm,A(58));L(g,g.jm,e,10);f=new H;i=g.jo;j=i.data;d=g.jm;e=j.length;if(d>=0&&d<=(e-0|0)){f.jn=K(i.data,0,d);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}k=f===null?c.lm:f.lg;l=f===null
?c.lp:f.lf;if(f===null)m=6408;else b:{m=f.kT;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Q;g=new J;BA(g);g.jo=G(16);AQu(g,g.jm,A(58));L(g,g.jm,m,10);f=new H;i=g.jo;j=i.data;d=g.jm;e=j.length;if(d>=0&&d<=(e-0|0)){f.jn=K(i.data,0,d);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}if(f===null)n=5121;else c:{n=f.kT;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new Q;g=new J;g.jo
=G(16);DW(g,g.jm,A(58));L(g,g.jm,n,10);f=new H;i=g.jo;j=i.data;d=g.jm;e=j.length;if(d>=0&&d<=(e-0|0)){f.jn=K(i.data,0,d);c.jp=1;c.jq=1;c.jr=f;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}n=5121;}g.cn(b,0,h,k,l,0,m,n,c.pk);Bi.iR(b);}},
ALe=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B3.oI.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B3.oI.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bi.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BI;h.jG=g;i=h;g.classObject=i;}}if(h.jI===null)h.jI=W(h.jG.$meta.name);i=h.jI;if(i===A(601))f=1;else if(!(A(601) instanceof H))f=0;else{g=A(601);f=i.jn!==g.jn?0:1;}if(!f&&Ef===null){Pj(b,c,d,e);break a;}}g=BL;i=c.kB;if(i===null)f=6408;else b:{e=i.kT;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new Q;g=new J;g.jo=G(16);B_(g,g.jm,Cd(A(58)));L(g,g.jm,e,10);i=new H;j=g.jo;k=j.data;d=g.jm;e=k.length;if(d>=0&&d<=(e-0|0)){i.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}l=i===null?c.lm:i.lg;m=i===null?c.lp:i.lf;if(i===null)n=6408;else c:{n=i.kT;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new Q;g=new J;g.jo
=G(16);DW(g,g.jm,A(58));L(g,g.jm,n,10);i=new H;j=g.jo;k=j.data;d=g.jm;e=k.length;if(d>=0&&d<=(e-0|0)){i.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}if(i===null)o=5121;else d:{o=i.kT;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new Q;g=new J;g.jo=G(16);B_(g,g.jm,Cd(A(58)));L(g,g.jm,o,10);i=new H;j=g.jo;k=j.data;d=g.jm;e=k.length;if(d>=0&&d<=(e-0|0)){i.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=i;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}o=5121;}g.cn(b,
0,f,l,m,0,n,o,c.pk);Bi.iR(b);}},
Pj=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=BL;g=c.kB;if(g===null)h=6408;else a:{i=g.kT;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new Q;f=new J;f.jo=G(16);B_(f,f.jm,Cd(A(58)));L(f,f.jm,i,10);g=new H;j=f.jo;k=j.data;d=f.jm;e=k.length;if(d>=0&&d<=(e-0|0)){g.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}h=6406;}l=g===null?c.lm:g.lg;m=g===null?c.lp:g.lf;if(g===null)n=6408;else b:{n=g.kT;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new Q;f=new J;f.jo=G(16);DW(f,f.jm,A(58));L(f,f.jm,n,10);g=new H;j=f.jo;k=j.data;d=f.jm;e=k.length;if(d>=0&&d<=(e-0|0)){g.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}if(g===null)o=5121;else c:{o=g.kT;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new Q;f=new J;f.jo=G(16);B_(f,f.jm,Cd(A(58)));L(f,f.jm,o,10);g=new H;j=f.jo;k=j.data;d=f.jm;e
=k.length;if(d>=0&&d<=(e-0|0)){g.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}f.cn(b,0,h,l,m,0,n,o,c.pk);if(Bi===null&&d!=e){c=new Q;c.jp=1;c.jq=1;c.jr=A(602);B(c);}f=c.kB;p=(f===null?c.lm:f.lg)/2|0;i=(f===null?c.lp:f.lf)/2|0;h=1;while(p>0&&i>0){f=new Fi;g=c.kB;I7(f,p,i,g===null?Fc:HI(g.kT));g=IB;f.pW=g;q=f.kB;if(q===null){EW(f);g=f.k$;q=Bs(E2.jB);g.globalCompositeOperation=q;}else{d=g!==g?1:0;LT(q.ld,d);}g=c.kB;l=g===null?c.lm:g.lg;m=g===null?c.lp:g.lf;q=f.kB;if(q===null){EW(c);Js(f,
c.no,0,0,l,m,0,0,p,i);}else{r=g.ld;s=q.ld;Jc(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.nE){f=new Q;f.jp=1;f.jq=1;f.jr=A(57);B(f);}Ek();Gn(Fn,c.oQ);g=c.kB;if(g!==null)Hz(g.ld);c.nE=1;}c=BL;g=f.kB;if(g===null)d=6408;else d:{d=g.kT;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new Q;f=new J;f.jo=G(16);B_(f,f.jm,Cd(A(58)));L(f,f.jm,d,10);g=new H;j=f.jo;k=j.data;d=f.jm;e=k.length;if(d>=0&&d<=(e-0|0)){g.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp
=1;c.jq=1;B(c);}d=6406;}e=g===null?f.lm:g.lg;p=g===null?f.lp:g.lf;if(g===null)l=6408;else e:{l=g.kT;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new Q;f=new J;f.jo=G(16);DW(f,f.jm,A(58));L(f,f.jm,l,10);g=new H;j=f.jo;k=j.data;d=f.jm;e=k.length;if(d>=0&&d<=(e-0|0)){g.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.kT;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new Q;f=new J;f.jo=G(16);B_(f,f.jm,Cd(A(58)));L(f,f.jm,m,10);g=new H;j=f.jo;k=j.data;d=f.jm;e=k.length;if(d>=0&&d<=(e-0|0)){g.jn=K(j.data,0,d);c.jp=1;c.jq=1;c.jr=g;B(c);}c=new I;c.jp=1;c.jq=1;B(c);}m=5121;}c.cn(b,h,d,e,p,0,l,m,f.pk);c=f.kB;p=(c===null?f.lm:c.lg)/2|0;i=(c===null?f.lp:c.lf)/2|0;h=h+1|0;c=f;}},
AS9=()=>{J9=1;};
let R9=E();
let M_=null;
let KR=()=>{KR=BH(R9);AQY();};
let AQY=()=>{let b,c;b=U((TE.p()).data.length);c=b.data;M_=b;c[KM.jw]=1;c[OK.jw]=2;};
let Ii=E(Bz);
let Tj=E();
let Qc=null;
let MQ=()=>{MQ=BH(Tj);WM();};
let AGD=(b,c,d,e)=>{MQ();a:{b:{if(Qc===LZ){if(B3.kr.width!=B3.kr.width)break b;if(B3.kr.height!=B3.kr.height)break b;}BL.ds(b,c,d,e);break a;}BL.ds(Da(b,B3.kr.width)/B3.kr.width|0,Da(c,B3.kr.height)/B3.kr.height|0,Da(d,B3.kr.width)/B3.kr.width|0,Da(e,B3.kr.height)/B3.kr.height|0);}},
WM=()=>{Qc=LZ;};
let ABF=E();
function L$(){let a=this;C.call(a);a.o8=null;a.m8=null;}
let AOf=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o8.readyState==4){if(a.o8.status==200){if(a.m8.mR.lX){if(BT===null){b=new CU;c=new Cu;c.kW=BE(32);b.ll=c;c=new J;BA(c);c.jo=G(16);b.kZ=c;b.kY=G(32);b.k2=0;b.k3=Cm;BT=b;}b=a.m8.mO;c=new J;c.jo=G(16);F(c,c.jm,A(603));d=c.jm;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jo;f=e.data;g
=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){b.jn=K(e.data,0,g);BU(Bs(b));BU("\n");}else{b=new I;b.jp=1;b.jq=1;Bn(b);B(b);}}b=a.m8;b.m0.iS(b.mO,W(a.o8.responseText));}else if(a.o8.status!=404&&a.o8.status!=403){try{i=R(100);$p=1;continue _;}catch($$e){$$je=Br($$e);if($$je instanceof Dy){}else{throw $$e;}}b=a.m8;c=b.mR;d=b.n8;j=b.mO;b=b.m0;if(c.lX){if(BT===null){k=new CU;l=new Cu;l.kW=BE(32);BA(k);k.ll=l;l=new J;DI(l,16);k.kZ=l;k.kY=G(32);k.k2=0;k.k3=Cm;BT=k;}k=new J;k.jo=G(16);F(k,k.jm,A(93));F(k,k.jm,j===null?A(2)
:j);l=new H;e=k.jo;f=e.data;h=k.jm;m=f.length;if(h>=0&&h<=(m-0|0)){l.jn=K(e.data,0,h);BU(Bs(l));BU("\n");}else{b=new I;X(b);B(b);}}c.km=c.km+1|0;k=new GA;k.mR=c;k.n8=d;k.mO=j;k.m0=b;b=null;c=null;k.l9=new C;k.l8=1;k.mK=c;k.mZ=b;g=CF;CF=g+1|0;k.mY=R(g);b=new D4;b.mL=k;En(b);}else{b=a.m8;b.m0.iT(b.mO);}b=a.m8.mR;b.km=b.km-1|0;}return;case 1:a:{try{Kq(i);if(E$()){break _;}break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dy){}else{throw $$e;}}}b=a.m8;c=b.mR;d=b.n8;j=b.mO;b=b.m0;if(c.lX){if(BT===null){k=new CU;l
=new Cu;l.kW=BE(32);BA(k);k.ll=l;l=new J;DI(l,16);k.kZ=l;k.kY=G(32);k.k2=0;k.k3=Cm;BT=k;}k=new J;k.jo=G(16);F(k,k.jm,A(93));F(k,k.jm,j===null?A(2):j);l=new H;e=k.jo;f=e.data;h=k.jm;m=f.length;if(h>=0&&h<=(m-0|0)){l.jn=K(e.data,0,h);BU(Bs(l));BU("\n");}else{b=new I;X(b);B(b);}}c.km=c.km+1|0;k=new GA;k.mR=c;k.n8=d;k.mO=j;k.m0=b;b=null;c=null;k.l9=new C;k.l8=1;k.mK=c;k.mZ=b;g=CF;CF=g+1|0;k.mY=R(g);b=new D4;b.mL=k;En(b);b=a.m8.mR;b.km=b.km-1|0;return;default:E4();}}C2().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AEo=(a,b)=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOf(a,b);if(E$()){break _;}return;default:E4();}}C2().s(a,b,$p);};
let IV=E(Bx);
let LZ=null,AHD=null,ABu=null;
let Ym=()=>{let b,c;b=new IV;b.jB=A(604);b.jw=0;LZ=b;c=new IV;c.jB=A(605);c.jw=1;AHD=c;ABu=P(IV,[b,c]);};
function GH(){Bx.call(this);this.q5=0;}
let AFT=null,DB=null,Il=null,AOX=null;
let AKl=()=>{let b,c,d;b=new GH;b.jB=A(606);b.jw=0;b.q5=0;AFT=b;c=new GH;c.jB=A(607);c.jw=1;c.q5=1;DB=c;d=new GH;d.jB=A(608);d.jw=2;d.q5=4;Il=d;AOX=P(GH,[b,c,d]);};
function Rw(){let a=this;C.call(a);a.pb=0;a.oR=0;a.mB=0;a.qV=B6;a.ss=null;a.uf=null;a.vR=B6;a.t9=null;}
function PQ(){let a=this;Dq.call(a);a.me=null;a.yf=null;}
let LL=E(Ee);
let Ju=E(Ee);
let NP=E(Ee);
let Na=E(0);
function G$(){C.call(this);this.qm=0;}
let Rc=null,RF=null,PI=null;
let Dl=a=>{return a.qm;},
AR2=()=>{let b;b=new G$;b.qm=1;Rc=b;b=new G$;b.qm=0;RF=b;PI=V(Ce);};
function PO(){let a=this;Dq.call(a);a.mn=null;a.qf=null;a.pV=null;a.p6=null;}
let X1=(a,b)=>{a.mn.me.qV=DK(b);},
VN=(a,b)=>{b=a.mn.me;b.oR=1;b.mB=0;},
AHr=(a,b,c)=>{Gz(a.p6,a.qf,a.pV,c);b=a.mn.me;b.pb=1;b.mB=0;return 0;};
let ACT=E();
let NE=E();
let Tg=null;
let Ml=()=>{Ml=BH(NE);AG0();};
let AG0=()=>{let b,c;b=U((MS.p()).data.length);c=b.data;Tg=b;c[Fk.jw]=1;c[Fd.jw]=2;c[E6.jw]=3;c[E0.jw]=4;c[Jd.jw]=5;};
function Q2(){let a=this;C.call(a);a.lZ=null;a.k5=0;}
let ACG=null;
let FK=(a,b)=>{let c,d,e,f;c=a.lZ;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);DU(c,0,f,0,a.k5);a.lZ=f;},
I4=a=>{let b,c,d;b=a.k5+4|0;if(b>a.lZ.data.length)FK(a,b);c=a.lZ.data;d=a.k5;b=d+1|0;a.k5=b;c[d]=110;d=b+1|0;a.k5=d;c[b]=117;b=d+1|0;a.k5=b;c[d]=108;a.k5=b+1|0;c[b]=108;},
AID=()=>{ACG=AEv([48,49,50,51,52,53,54,55,56,57]);};
function Fy(){let a=this;F6.call(a);a.nn=0;a.mu=null;a.mQ=null;a.my=null;}
let Zd=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new JW;c.nq=a;c.oE=b;c=BY(c,"handleEvent");b.onreadystatechange=c;c=a.my;d=a.mQ;e=new GB;e.th=c;e.qD=d;c=BY(e,"handleEvent");b.onprogress=c;d=a.mu;f=a.nn;b.open("GET",Bs(d),!!f);if(a.nn){d="arraybuffer";b.responseType=d;}b.send();};
function NC(){let a=this;Dq.call(a);a.q6=null;a.xT=null;}
let Zh=(a,b)=>{a.q6.mn.me.qV=DK(b);},
AH_=(a,b)=>{b=a.q6.mn.me;b.oR=1;b.mB=0;},
XK=(a,b,c)=>{c=a.q6;b=null;Gz(c.p6,c.qf,c.pV,b);b=c.mn.me;b.pb=1;b.mB=0;return 0;};
function ND(){let a=this;Dq.call(a);a.pE=null;a.us=null;a.v7=null;a.qv=null;}
let AC4=(a,b)=>{a.pE.mn.me.qV=DK(b);},
Wo=(a,b)=>{b=a.pE.mn.me;b.oR=1;b.mB=0;},
Wt=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.us;if(e!==null)d.setAttribute("crossOrigin",Bs(e));a:{e=a.qv;e.km=e.km+1|0;e=new Ko;e.rh=a;e.yh=b;e.vD=c;e.tX=d;d.addEventListener("load",BY(e,"handleEvent"),!!0);d.addEventListener("error",BY(e,"handleEvent"),!!0);if(!a.qv.wd){b=Bs(b);d.src=b;}else{b=a.v7;c=ALQ(c);e=new J;e.jo=G(16);F(e,e.jm,A(609));f=e.jm;if(b===null)b=A(2);F(e,f,b);F(e,e.jm,A(610));f=e.jm;if(c===null)c=A(2);F(e,f,c);b=new H;g=e.jo;h=g.data;i=e.jm;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.jn=K(g.data,0,i);b=Bs(b);d.src=b;}return 0;}b=new I;b.jp=1;b.jq=1;Bn(b);B(b);},
ADS=(a,b,c)=>{return Wt(a,b,c);};
function JW(){let a=this;C.call(a);a.oE=null;a.nq=null;}
let AG7=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oE.readyState==4){if(a.oE.status==200){if(a.nq.my.lX){if(BT===null){b=new CU;c=new Cu;c.kW=BE(32);b.ll=c;c=new J;BA(c);c.jo=G(16);b.kZ=c;b.kY=G(32);b.k2=0;b.k3=Cm;BT=b;}b=a.nq.mu;c=new J;c.jo=G(16);F(c,c.jm,A(603));d=c.jm;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jo;f=e.data;g
=c.jm;h=f.length;if(g>=0&&g<=(h-0|0)){b.jn=K(e.data,0,g);BU(Bs(b));BU("\n");}else{b=new I;b.jp=1;b.jq=1;Bn(b);B(b);}}i=a.oE.response;j=new Int8Array(i);b=a.nq;c=b.mQ;k=b.mu;b=new HT;b.mC=j;b.sU=i;c.iS(k,b);}else if(a.oE.status!=404&&a.oE.status!=403){try{l=R(100);$p=1;continue _;}catch($$e){$$je=Br($$e);if($$je instanceof Dy){}else{throw $$e;}}b=a.nq;c=b.my;d=b.nn;k=b.mu;b=b.mQ;if(c.lX){if(BT===null){i=new CU;j=new Cu;j.kW=BE(32);BA(i);i.ll=j;j=new J;DI(j,16);i.kZ=j;i.kY=G(32);i.k2=0;i.k3=Cm;BT=i;}i=new J;i.jo
=G(16);F(i,i.jm,A(93));F(i,i.jm,k===null?A(2):k);j=new H;e=i.jo;f=e.data;h=i.jm;m=f.length;if(h>=0&&h<=(m-0|0)){j.jn=K(e.data,0,h);BU(Bs(j));BU("\n");}else{b=new I;X(b);B(b);}}c.km=c.km+1|0;i=new Fy;i.my=c;i.nn=d;i.mu=k;i.mQ=b;b=null;c=null;i.l9=new C;i.l8=1;i.mK=c;i.mZ=b;g=CF;CF=g+1|0;i.mY=R(g);b=new D4;b.mL=i;En(b);}else{b=a.nq;b.mQ.iT(b.mu);}b=a.nq.my;b.km=b.km-1|0;}return;case 1:a:{try{Kq(l);if(E$()){break _;}break a;}catch($$e){$$je=Br($$e);if($$je instanceof Dy){}else{throw $$e;}}}b=a.nq;c=b.my;d=b.nn;k
=b.mu;b=b.mQ;if(c.lX){if(BT===null){i=new CU;j=new Cu;j.kW=BE(32);BA(i);i.ll=j;j=new J;DI(j,16);i.kZ=j;i.kY=G(32);i.k2=0;i.k3=Cm;BT=i;}i=new J;i.jo=G(16);F(i,i.jm,A(93));F(i,i.jm,k===null?A(2):k);j=new H;e=i.jo;f=e.data;h=i.jm;m=f.length;if(h>=0&&h<=(m-0|0)){j.jn=K(e.data,0,h);BU(Bs(j));BU("\n");}else{b=new I;X(b);B(b);}}c.km=c.km+1|0;i=new Fy;i.my=c;i.nn=d;i.mu=k;i.mQ=b;b=null;c=null;i.l9=new C;i.l8=1;i.mK=c;i.mZ=b;g=CF;CF=g+1|0;i.mY=R(g);b=new D4;b.mL=i;En(b);b=a.nq.my;b.km=b.km-1|0;return;default:E4();}}C2().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AP6=(a,b)=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AG7(a,b);if(E$()){break _;}return;default:E4();}}C2().s(a,b,$p);};
function Ko(){let a=this;C.call(a);a.yh=null;a.vD=null;a.tX=null;a.rh=null;}
let ADw=(a,b)=>{let c,d;c=W(b.type);if(c===A(611))d=1;else if(!(A(611) instanceof H))d=0;else{b=A(611);d=c.jn!==b.jn?0:1;}if(d){b=a.rh.pE.mn.me;b.oR=1;b.mB=0;}else{b=a.vD;b.s3=a.tX;c=a.rh.pE;Gz(c.p6,c.qf,c.pV,b);b=c.mn.me;b.pb=1;b.mB=0;}b=a.rh.qv;b.km=b.km-1|0;},
ABZ=(a,b)=>{ADw(a,b);};
ARN([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",7,"graphics",14,"g2d",7,"math",0,"mygdx",17,"game",-1,"java",19,"util",20,"regex",19,"nio",22,"charset",19,"lang"]);
CX([C,"Object",24,0,[],0,3,0,0,["cI",O(AAF),"cB",M(AHC),"S",O(OL)],AOb,0,C,[],0,3,0,0,0,Nt,0,C,[],0,3,0,RH,0,Ni,0,C,[],3,3,0,0,0,Lw,0,C,[Ni],0,3,0,0,0,CN,0,C,[],3,3,0,0,0,Mn,0,Lw,[CN],0,3,0,0,0,BS,0,C,[],3,3,0,0,0,Fg,0,C,[BS],0,3,0,0,0,Db,0,C,[],3,3,0,0,0,BZ,0,C,[],3,3,0,0,0,Bx,0,C,[Db,BZ],1,3,0,0,["S",O(ADX),"cB",M(Xb)],GR,0,Bx,[],12,3,0,0,0,CK,"Actor",11,C,[],0,3,0,0,["bd",M(J2),"I",Ba(QM),"w",M(AMn),"Y",M(ALy),"S",O(RL)],Lz,0,C,[],3,3,0,0,0,By,"Group",11,CK,[Lz],0,3,0,0,["bd",M(Qz),"bK",Bl(AF_),"Y",M(N$),
"I",Ba(Mx),"w",M(AL1),"S",O(AAg)],FS,0,C,[],3,3,0,0,0,Dp,"Iterable",24,C,[],3,3,0,0,0,Gy,0,C,[FS,Dp],0,3,0,0,0,Gb,0,C,[],3,3,0,0,0,BV,0,C,[Gb],0,3,0,0,0,GP,0,BV,[],0,3,0,0,0,AJ6,0,GP,[],0,0,0,0,0,Gi,"FocusListener$FocusEvent$Type",13,Bx,[],12,3,0,0,0,Mp,0,C,[],3,3,0,0,0,In,0,C,[Mp],3,3,0,0,0,F$,0,C,[],3,3,0,0,0,Dn,0,C,[F$],1,3,0,0,0,AM$,0,Dn,[],0,0,0,0,0,Md,0,Gy,[],0,3,0,0,0,LQ,0,C,[Gb],0,3,0,0,0,ABl,0,C,[],1,3,0,0,0,V0,0,C,[],0,3,0,0,0,UH,0,C,[],3,3,0,0,0,KX,0,C,[UH],0,3,0,0,0,AJu,0,KX,[],0,0,0,0,0,CM,"FocusListener$FocusEvent",
13,Fg,[],0,3,0,0,["by",O(UT)],Qm,0,C,[],32,0,0,U5,0,AHy,0,C,[],1,3,0,0,0,Sd,0,C,[],32,0,0,QY,0,AM9,0,Dn,[],0,0,0,0,0,E1,0,C,[Mp],0,3,0,0,0,R$,0,E1,[In],0,3,0,0,0,UP,0,C,[],4,3,0,S3,0,La,0,C,[Gb],1,3,0,0,0,APE,0,GP,[],0,3,0,0,0,ACH,0,C,[],0,3,0,0,0,TA,0,C,[],0,3,0,Uf,0,Mj,0,C,[Gb],1,3,0,0,0,H$,0,E1,[In],0,3,0,0,0]);
CX([UC,0,E1,[In],0,3,0,0,0,DN,0,BV,[],0,3,0,0,0,Uu,0,H$,[],0,3,0,0,0,ZZ,0,Fg,[],0,3,0,0,0,JV,0,C,[],3,3,0,0,0,BR,"InputEvent",11,Fg,[],0,3,0,0,["by",O(Pc),"S",O(NO)],Qh,0,C,[BS],4,3,0,0,0,M$,0,C,[],32,0,0,Ri,0,Dc,"InputEvent$Type",11,Bx,[],12,3,0,0,0,Cb,0,C,[BS],1,3,0,0,0,EA,0,Cb,[],1,3,0,0,0,AEA,0,EA,[],0,3,0,0,0,AI8,0,EA,[],0,3,0,0,0,CQ,0,Cb,[],1,3,0,0,0,Ep,0,CQ,[],1,3,0,0,0,Wm,0,Ep,[],0,3,0,0,0,YG,0,C,[Gb],0,0,0,0,0,MV,0,Cb,[],0,3,0,0,0,AAe,0,MV,[],0,3,0,0,0,ACz,0,Cb,[],0,3,0,0,0,AGG,0,Cb,[],0,3,0,0,0,ALq,
0,Cb,[],0,3,0,0,0,AMe,0,C,[],0,3,0,0,0,K5,0,Cb,[],1,3,0,0,0,AF4,0,K5,[],0,3,0,0,0,AAX,0,CQ,[],0,3,0,0,0,AM4,0,CQ,[],0,3,0,0,0,AND,0,Ep,[],0,3,0,0,0,AJR,0,Cb,[],0,3,0,0,0,AKm,0,Ep,[],0,3,0,0,0,APh,0,CQ,[],0,3,0,0,0,AOB,0,CQ,[],0,3,0,0,0,AC9,0,Cb,[],0,3,0,0,0,AFB,0,CQ,[],0,3,0,0,0,AFR,0,Cb,[],0,3,0,0,0,ADD,0,Cb,[],0,3,0,0,0,AF7,0,EA,[],0,3,0,0,0,Xf,0,CQ,[],0,3,0,0,0,APq,0,Cb,[],0,3,0,0,0,AJm,0,Ep,[],0,3,0,0,0,ADk,0,EA,[],0,3,0,0,0,AIB,0,Cb,[],0,3,0,0,0,YI,0,CQ,[],0,3,0,0,0,AFa,0,CQ,[],0,3,0,0,0,ZT,0,C,[CN],0,
3,0,0,0,C0,0,By,[JV],0,3,0,0,0,D9,0,C0,[],0,3,0,PV,0,Ft,0,D9,[FS],0,3,0,0,0,KQ,0,Ft,[],0,3,0,0,0,AAP,0,KQ,[],0,3,0,0,0]);
CX([AM6,0,BV,[],0,0,0,0,0,LO,0,C0,[],0,3,0,0,0,Q5,0,C,[],3,3,0,0,0,Eg,0,C,[Q5],1,3,0,0,0,ACZ,0,Eg,[],0,0,0,0,0,C_,0,CK,[JV],0,3,0,0,0,Xz,0,C_,[],0,3,0,0,0,AM5,0,BV,[],0,0,0,0,0,BX,0,C,[],1,3,0,HQ,0,Si,0,BX,[],0,0,0,0,0,AJv,0,BX,[],0,0,0,0,0,JO,0,DN,[],0,3,0,0,0,AFX,0,JO,[],0,3,0,0,0,Ux,0,BX,[],0,0,0,0,0,AO5,0,BV,[],0,0,0,0,0,Lo,0,D9,[],0,3,0,0,0,AJw,0,BX,[],0,0,0,0,0,FQ,0,C,[],3,3,0,0,0,EU,0,C,[BZ,FQ],0,3,0,0,0,Du,"Table$DebugRect",12,EU,[],0,3,0,Jk,0,AC3,0,Eg,[],0,0,0,0,0,L3,0,C_,[FS],0,3,0,0,0,AA7,0,L3,[],
0,3,0,0,0,AFe,0,BV,[],0,0,0,0,0,Pl,0,C,[],3,3,0,0,0,ALv,0,C,[Pl],0,3,0,0,0,FX,0,C,[],0,3,0,0,0,Gl,0,FX,[],0,3,0,0,0,SZ,0,Gl,[],0,3,0,0,0,L8,0,C_,[FS],0,3,0,0,0,AEh,0,L8,[],0,3,0,0,0,AQS,0,LO,[],0,0,0,0,0,JX,0,C0,[],0,3,0,0,0,ARx,0,Ft,[],0,3,0,0,0,Mt,0,C_,[Lz],0,3,0,0,0,Uv,0,BX,[],0,0,0,0,0,Tu,0,C,[],0,3,0,0,0,ADy,0,C,[F$],0,0,0,0,0,AF0,0,BV,[],0,0,0,0,0,AHH,0,Dn,[],0,0,0,0,0,AEE,0,C,[],0,3,0,0,0,AK4,0,BV,[],0,0,0,0,0,AQz,0,DN,[],0,0,0,0,0,AFc,0,LQ,[],0,0,0,0,0,Se,0,BX,[],0,0,0,0,0,Sh,0,BX,[],0,0,0,0,0,RM,0,
C,[],3,3,0,0,0,Ji,0,C,[],0,3,0,0,0,NZ,0,Ji,[],0,3,0,0,0,AC0,0,Eg,[],0,0,0,0,0]);
CX([AM3,0,La,[],0,0,0,0,0,AM7,0,Mj,[],0,0,0,0,0,AO6,0,BV,[],0,0,0,0,0,AO7,0,DN,[],0,0,0,0,0,Uw,0,BX,[],0,0,0,0,0,NR,0,C,[BS],0,3,0,S1,0,QU,0,Gl,[],0,3,0,0,0,AFr,0,BV,[],0,0,0,0,0,XY,0,Dn,[],0,0,0,0,0,Sj,0,BX,[],0,0,0,0,0,ABr,0,C0,[],0,3,0,0,0,AFd,0,BV,[],0,0,0,0,0,Rj,0,C,[],0,3,0,0,0,IH,0,BX,[],0,3,0,0,0,ADz,0,JX,[],0,3,0,0,0,Sf,0,BX,[],0,0,0,0,0,AGy,0,C_,[FS],0,3,0,0,0,AFl,0,Md,[],0,0,0,0,0,Ua,0,C,[],0,3,0,0,0,Ob,0,C_,[],0,3,0,Tb,0,Ok,0,C,[],0,3,0,0,0,AJy,0,BX,[],0,0,0,0,0,Uy,0,BX,[],0,0,0,0,0,AMl,0,Lo,[],
0,3,0,0,0,Sg,0,BX,[],0,0,0,0,0,Qn,0,C,[],0,3,0,0,0,AQo,0,C,[],0,3,0,0,0,Fb,0,Bx,[],12,3,0,0,0,AQH,0,BX,[],0,0,0,0,0,AE3,0,Dn,[],0,0,0,0,0,C$,0,C,[],1,3,0,0,0,Uz,0,C$,[],0,0,0,0,0,XN,0,C,[RM],0,3,0,0,0,Ui,0,C,[],0,3,0,0,0,Rz,0,C,[],0,3,0,0,0,Sa,0,C,[],0,3,0,0,0,Mr,0,BV,[],0,3,0,0,0,XX,0,Dn,[],0,0,0,0,0,AO8,0,Mt,[],0,0,0,0,0,XQ,0,C,[],3,3,0,0,0,AFs,0,BV,[],0,0,0,0,0,ARo,0,C0,[],0,3,0,0,0,AI5,0,C0,[],0,3,0,0,0,AFn,0,DN,[],0,0,0,0,0,Mh,0,C,[],0,3,0,0,0,ACY,0,Mh,[],0,0,0,0,0,AOI,0,CK,[CN],0,3,0,0,0,W0,0,BV,[],0,
0,0,0,0,AMI,0,Ft,[],0,3,0,0,0,AIa,0,BV,[],0,0,0,0,0]);
CX([AP7,0,DN,[],0,0,0,0,0,TB,0,FX,[],0,3,0,0,0,AJa,0,C0,[],0,3,0,0,0,Rp,0,C,[],0,3,0,0,0,QB,0,C,[],0,3,0,0,0,AHP,0,C_,[],0,3,0,0,0,AQA,0,Gy,[],0,0,0,0,0,W2,0,BV,[],0,0,0,0,0,AKL,0,C0,[],0,3,0,0,0,AQQ,0,Mr,[],0,3,0,0,0,W3,0,D9,[],0,0,0,0,0,AC1,0,Eg,[],0,0,0,0,0,Vi,0,C,[],1,3,0,0,0,Ut,0,C,[],0,3,0,0,0,T4,0,C,[BZ],0,3,0,T6,0,BF,0,C,[],1,3,0,I5,0,OC,0,BF,[],0,3,0,0,0,AE6,0,C,[],0,3,0,0,0,SP,0,BF,[],0,0,0,0,0,APz,0,C,[],0,3,0,0,0,Ei,0,BF,[],0,3,0,0,0,Hq,0,Ei,[],0,3,0,0,0,Hi,0,Ei,[],0,3,0,0,0,IT,0,C,[],3,3,0,0,0,AAi,
0,C,[IT],0,3,0,0,0,SS,0,BF,[],0,0,0,0,0,ANi,0,C,[FQ],0,3,0,0,0,SO,0,BF,[],0,0,0,0,0,F8,0,BF,[],0,3,0,0,0,SN,0,BF,[],0,0,0,0,0,SM,0,BF,[],0,0,0,0,0,AJC,0,C,[],4,3,0,0,0,VZ,0,C$,[],0,0,0,0,0,Iy,0,C,[],3,3,0,0,0,Bv,"Vector2",16,C,[BZ,Iy],0,3,0,0,0,R3,0,BF,[],0,0,0,0,0,Fp,0,BF,[],0,3,0,0,0,AHL,0,C,[],0,3,0,0,0,SU,0,BF,[],0,0,0,0,0,MR,0,Fp,[],0,3,0,0,0,ADu,0,C,[BS],0,3,0,0,0,GY,0,Bx,[],12,3,0,0,0,Rv,0,C,[],0,3,0,Q1,0,Gt,0,BF,[],0,3,0,0,0,QP,0,Gt,[],0,3,0,0,0,RZ,0,BF,[],0,0,0,0,0,RQ,0,C,[BZ],4,3,0,0,0,SL,0,BF,[],
0,0,0,0,0,FC,0,C,[BZ,Iy],0,3,0,0,0,N4,0,F8,[],0,3,0,0,0]);
CX([Qv,0,BF,[],0,3,0,0,0,Z3,0,C,[],0,3,0,0,0,AQ$,0,C,[FQ],0,3,0,0,0,SQ,0,BF,[],0,0,0,0,0,Uk,0,BF,[],0,3,0,0,0,R4,0,BF,[],0,0,0,0,0,Qt,0,F8,[],0,3,0,0,0,U1,0,C,[BZ],0,3,0,O8,0,JT,0,C,[BZ],0,3,0,M7,0,K9,0,C,[BZ],0,3,0,LC,0,AAr,0,C,[BZ],0,3,0,0,0,WB,0,C,[BZ],0,3,0,0,0,AKZ,0,C,[BZ,FQ],0,3,0,0,0,AEt,0,C,[IT],0,3,0,0,0,Sr,0,C,[],4,3,0,F9,0,TJ,0,C,[],4,3,0,PR,0,X4,0,C,[],4,3,0,0,0,PU,0,Gt,[],0,3,0,0,0,KT,0,C,[BZ],0,3,0,D0,0,OO,0,C,[],3,3,0,0,0,LD,0,C,[OO,BZ],0,3,0,0,0,RT,0,LD,[],0,3,0,0,0,R2,0,BF,[],0,0,0,0,0,SR,0,
BF,[],0,0,0,0,0,Mb,0,C,[],0,3,0,Ir,0,D7,0,C,[BZ],0,3,0,0,0,VP,0,C,[],0,3,0,0,0,AI3,0,C,[],0,3,0,0,0,Bg,0,C,[BZ,Iy],0,3,0,CJ,0,ADx,0,C,[BZ,FQ],0,3,0,0,0,ABx,0,C$,[],0,0,0,0,0,Lg,0,Fp,[],0,3,0,0,0,AJz,0,C,[IT],0,3,0,0,0,Yu,0,C,[],0,3,0,0,0,ANG,0,C,[BZ],0,3,0,0,0,I$,0,C,[BZ],0,3,0,0,0,R1,0,BF,[],0,0,0,0,0,ANK,0,C,[],0,3,0,0,0,YE,0,C,[],0,3,0,0,0,AKO,0,C,[],0,3,0,0,0,ANE,0,C,[BZ],0,3,0,0,0,AIp,0,C,[],3,3,0,0,0,ADK,0,C,[BZ],0,3,0,0,0,ALC,0,C,[],0,0,0,0,0,JM,0,C,[BS],0,3,0,LA,0,MB,0,C,[],0,3,0,0,0,Fl,0,MB,[],0,3,
0,0,0,P6,0,C,[CN],0,3,0,0,0,AKu,0,C,[],0,3,0,0,0,BD,0,C,[],0,3,0,0,0]);
CX([M5,0,C,[CN],1,3,0,0,0,Gh,0,M5,[],0,3,0,0,["S",O(AIq)],Bt,"Array",8,C,[Dp],0,3,0,0,["cB",M(Q$),"S",O(T5)],Jp,0,C,[Dp],0,3,0,0,0,AEc,0,Jp,[],0,3,0,0,0,AQm,0,C,[Dp],0,3,0,0,0,DD,0,C,[],4,3,0,0,["cB",M(AIy)],AQE,0,C,[],0,3,0,0,0,AFH,0,C,[],0,3,0,0,0,AI0,0,C,[],0,3,0,0,0,AG6,0,C,[],0,3,0,0,0,QD,0,C,[],0,3,0,RN,0,WW,0,C,[],0,3,0,0,0,AHW,0,C,[],0,3,0,0,0,AGI,0,C,[],0,3,0,0,0,AHs,0,C,[],0,3,0,0,0,ANg,0,C,[],0,3,0,0,0,ADF,0,C,[],0,3,0,0,0,AON,0,C,[],0,3,0,0,0,AFj,0,C,[],0,3,0,0,0,YN,0,C,[],0,3,0,0,0,Z9,0,C,[],0,
3,0,0,0,I9,0,Bx,[],12,3,0,0,0,AH1,0,C,[],0,3,0,0,0,Sx,0,C,[],3,3,0,0,0,Dj,0,C,[],0,3,0,0,0,W6,0,Dj,[],0,3,0,0,0,W5,0,Dj,[],0,3,0,0,0,AGa,0,Dj,[],0,3,0,0,0,ABp,0,Dj,[],0,3,0,0,0,AK1,0,Dj,[],0,3,0,0,0,Lb,0,Dj,[],0,3,0,0,0,ABd,0,Lb,[],0,3,0,0,0,Hb,0,C,[],3,3,0,0,0,ACn,0,C,[CN,Hb],0,3,0,0,0,EZ,0,C,[],3,3,0,0,0,AKN,0,C,[EZ,Hb],0,3,0,0,0,AOJ,0,C,[EZ],0,3,0,0,0,ZA,0,C,[],0,3,0,0,0,Er,0,C,[EZ],0,3,0,0,0,AJI,0,Er,[],0,3,0,0,0,G5,0,Er,[Hb,EZ],1,3,0,0,0,Dv,0,G5,[],1,3,0,P5,0,AKt,0,C,[],0,3,0,0,0,ANe,0,Dv,[],4,3,0,0,0,AFx,
0,Dv,[],4,3,0,0,0,APw,0,Er,[],0,3,0,0,0,KC,0,Er,[],0,3,0,0,0,WP,0,KC,[],0,3,0,0,0,AA_,0,Dv,[],4,3,0,0,0]);
CX([GC,0,G5,[],1,3,0,0,0,AGZ,0,GC,[],4,3,0,0,0,AFu,0,Dv,[],4,3,0,0,0,AHv,0,Dv,[],4,3,0,0,0,AGY,0,GC,[],4,3,0,0,0,G3,0,Bx,[],12,3,0,0,0,Fs,0,C,[CN,EZ,Hb],1,3,0,0,0,L5,0,Fs,[EZ],1,3,0,0,0,Vr,0,L5,[EZ],0,3,0,0,0,Hk,0,Bx,[],12,3,0,0,0,CO,0,Fs,[],1,3,0,0,0,HH,0,CO,[],1,3,0,0,0,Zn,0,C,[],0,3,0,0,0,Gf,0,CO,[],1,3,0,Tc,0,Ec,0,Gf,[],1,3,0,0,0,Fw,0,Ec,[],1,3,0,0,0,ACj,0,Fw,[],0,3,0,0,0,Hg,0,CO,[],1,3,0,0,0,ARf,0,Hg,[],0,3,0,0,0,ANb,0,CO,[],0,3,0,0,0,E_,0,CO,[],1,3,0,0,0,WZ,0,E_,[],0,3,0,0,0,GO,0,CO,[],1,3,0,0,0,ACb,0,
Ec,[],0,3,0,0,0,AEp,0,Ec,[],0,3,0,0,0,J8,0,CO,[],1,3,0,0,0,AJJ,0,J8,[],0,3,0,0,0,Yh,0,E_,[],0,3,0,0,0,AFF,0,Fw,[],0,3,0,0,0,AJA,0,CO,[],0,3,0,0,0,AHG,0,E_,[],0,3,0,0,0,AJQ,0,CO,[],0,3,0,0,0,ALw,0,Gf,[],0,3,0,0,0,AEw,0,C$,[],0,0,0,0,0,YY,0,C$,[],0,0,0,0,0,Ze,0,Ec,[],0,3,0,0,0,AKh,0,GO,[],0,3,0,0,0,APx,0,HH,[],0,3,0,0,0,AIz,0,HH,[],0,3,0,0,0,ALi,0,GO,[],0,3,0,0,0,AGw,0,Fw,[],0,3,0,0,0,AQc,0,Hg,[],0,3,0,0,0,Eo,0,Fs,[],1,3,0,0,0,AG5,0,Eo,[],0,3,0,0,0,Ff,0,C,[],1,3,0,0,0,AKH,0,Ff,[],0,3,0,0,0,ALY,0,Eo,[],0,3,0,0,
0,ANa,0,Eo,[],0,3,0,0,0,AOa,0,Ff,[],0,3,0,0,0,ABV,0,Eo,[],0,3,0,0,0]);
CX([ANh,0,Ff,[],0,3,0,0,0,JJ,0,C,[],3,3,0,0,0,Ne,0,C,[],3,3,0,0,0,BI,"Class",24,C,[JJ,Ne],0,3,0,0,["S",O(AGW)],AAf,0,C,[],4,0,0,0,0,Y4,0,C,[],4,3,0,0,0,Dy,0,C,[],0,3,0,0,["cT",O(AL_)],Ca,0,Dy,[],0,3,0,0,0,Bz,"RuntimeException",24,Ca,[],0,3,0,0,0,AFp,"ClassCastException",24,Bz,[],0,3,0,0,0,Jf,0,C,[],3,3,0,0,0,H,"String",24,C,[BZ,Db,Jf],0,3,0,0,["S",O(Cd),"cB",M(AOZ),"cI",O(AJf)],Eb,0,C,[BZ],1,3,0,0,0,E9,0,Eb,[Db],0,3,0,0,0,Z,0,C,[BZ,Jf],0,0,0,0,["cY",M(H0),"S",O(Lx)],Ij,0,C,[],3,3,0,0,0,J,0,Z,[Ij],0,3,0,0,["gr",
BK(AF3),"iW",Ba(ABc),"S",O(EG),"cY",M(AGo),"c4",Bl(AHb)],Qj,0,C,[],0,3,0,0,0,O0,0,C,[],3,3,0,0,0,K3,0,C,[O0,F$],0,3,0,0,0,Uo,0,C,[],3,3,0,0,0,LI,0,C,[Uo],1,3,0,0,0,O2,0,LI,[],0,3,0,0,0,AL9,0,C,[],4,3,0,0,0,HA,0,Bx,[],12,3,0,0,0,NB,0,C,[],3,3,0,0,0,Cn,0,C,[],3,3,0,0,0,QC,0,C,[Cn],3,3,0,0,0,IL,0,C,[NB,QC],0,3,0,EL,["iX",M(AKb)],AJT,0,C,[],0,3,0,0,0,P$,0,C,[],0,3,0,Dw,0,MM,0,Eb,[Db],0,3,0,0,0,I3,0,C,[],0,3,0,0,0,AEz,0,C,[],4,3,0,0,0,Dt,"GlyphLayout$GlyphRun",15,C,[BS],0,3,0,0,0,F_,0,C,[],0,3,0,0,0,Lp,0,C,[],3,
3,0,0,0,Kd,0,C,[Lp],1,3,0,0,0,EX,0,C,[],3,3,0,0,0,Is,0,Kd,[EX,BZ],0,3,0,0,0,HJ,"Comparator",20,C,[],3,3,0,0,0,MU,0,C,[HJ],0,3,0,0,0,LX,0,C,[Db],0,3,0,0,0,AA0,0,C,[],0,3,0,0,0,AKo,0,C,[],4,3,0,0,0,M9,0,C,[],3,3,0,0,0,N7,0,C,[M9],0,3,0,0,0,AAm,0,C,[],0,3,0,0,0,ADe,0,C,[],0,3,0,0,0,Sl,0,C,[],3,3,0,0,0]);
CX([JY,0,C,[Sl],0,3,0,Ek,0,Nv,0,C,[],0,3,0,0,0,Dq,0,C,[],0,3,0,0,["gX",M(AHK)],R7,0,C,[],3,3,0,0,0,D$,0,C,[Cn],3,3,0,0,0,Lr,0,C,[R7,D$],0,3,0,0,["iY",M(WU)],Rr,0,C,[],3,3,0,0,0,S8,0,C,[Rr],0,3,0,0,0,Su,0,C,[Sx],0,3,0,0,0,Sm,0,C,[],3,3,0,0,0,Qg,0,C,[Sm],0,3,0,0,0,OJ,0,C,[],3,3,0,0,0,Sq,0,C,[OJ],0,3,0,0,0,AIG,0,C,[],0,3,0,0,0,Ta,0,C,[],3,3,0,0,0,Sv,0,C,[Ta],3,3,0,0,0,PG,0,C,[Sv],0,3,0,0,0,JB,0,C,[D$],0,0,0,0,["iY",M(AK7)],JC,0,C,[D$],0,0,0,0,["iY",M(APS)],Bj,"IllegalArgumentException",24,Bz,[],0,3,0,0,0,ANT,0,
C,[],4,3,0,0,0,Yj,0,C,[Dp],0,3,0,0,0,AGt,0,Eb,[Db],0,3,0,0,0,AF2,0,C,[Cn],1,3,0,0,0,Lk,0,C,[],3,3,0,0,0,Gu,"TeaGL20",5,C,[Lk],0,3,0,0,["h2",Bl(ADP),"ia",Bl(APK),"co",Bl(Zp),"g_",BK(ACX),"ev",BK(Kz),"ew",BK(Ky),"du",M(ANp),"dt",BK(ZE),"h0",M(AEP),"hW",O(AQt),"hY",M(AKd),"g5",M(ANq),"ba",M(AJW),"id",M(AIt),"hF",Ba(AAd),"hG",BK(AFD),"hK",BK(AH0),"V",M(APo),"ib",M(AN8),"iR",M(Vx),"ex",BK(JR),"ey",BK(Ld),"h7",Bl(ABJ),"b_",Bl(II),"g4",M(AQj),"ez",Ba(LB),"h1",M(AGj),"eA",Ba(Kh),"dO",M(ACC),"h4",Bl(ACx),"h3",M(XT),
"ht",M(AQs),"ck",Bl(AAc),"hZ",Bl(Vw),"cn",function(b,c,d,e,f,g,h,i,j){LM(this,b,c,d,e,f,g,h,i,j);},"cu",Ba(AG9),"b6",Ba(AJq),"hg",Bl(AJV),"g8",M(XV),"ic",function(b,c,d,e,f,g){AGK(this,b,c,d,e,f,g);},"ds",BK(VW)],Rq,0,C,[Lk],3,3,0,0,0,Jl,"TeaGL30",5,Gu,[Rq],0,3,0,0,["ii",M(ADl),"hH",BK(AIk),"hJ",function(b,c,d,e,f){AQ2(this,b,c,d,e,f);},"ig",Bl(AIW),"b_",Bl(AFL)],N8,"TeaGL30Debug",5,Jl,[],0,3,0,0,["ii",M(ABS),"hH",BK(YC),"hJ",function(b,c,d,e,f){APC(this,b,c,d,e,f);},"ig",Bl(XH),"co",Bl(Yt),"du",M(ANu),"dt",
BK(AHc),"g5",M(XE),"ba",M(AN_),"hF",Ba(AA6),"hG",BK(AKq),"V",M(AL2),"dO",M(Vh),"ht",M(ABC),"ck",Bl(Wu),"cn",function(b,c,d,e,f,g,h,i,j){AHI(this,b,c,d,e,f,g,h,i,j);},"cu",Ba(AAN),"ds",BK(ADa),"h2",Bl(AGp),"ia",Bl(AO1),"g_",BK(ABU),"ev",BK(AHn),"ew",BK(AOS),"h0",M(AIN),"hW",O(AQr),"hY",M(AKK),"id",M(AQg),"hK",BK(X$),"ib",M(AKQ),"iR",M(ANA),"ex",BK(AEx),"ey",BK(ANr),"h7",Bl(AH6),"b_",Bl(AB3),"ez",Ba(ZH),"g4",M(Ws),"eA",Ba(AQp),"h1",M(Xl),"h4",Bl(Wv),"h3",M(APt),"hZ",Bl(Wq),"b6",Ba(XS),"hg",Bl(YX),"g8",M(AQ7),
"ic",function(b,c,d,e,f,g){ALA(this,b,c,d,e,f,g);}],Pw,0,C,[],0,3,0,0,0,EE,0,Bx,[],12,3,0,0,0,SD,0,C,[Cn],3,3,0,0,0,LR,0,C,[SD],0,0,0,0,["iZ",O(AAV)],Ul,"TeaGL20Debug",5,Gu,[],0,3,0,0,["co",Bl(APZ),"du",M(ZN),"dt",BK(AAL),"g5",M(AHm),"ba",M(AQI),"hF",Ba(AEN),"hG",BK(AP_),"V",M(Yb),"dO",M(AF8),"ht",M(ABA),"ck",Bl(AIS),"cn",function(b,c,d,e,f,g,h,i,j){AB4(this,b,c,d,e,f,g,h,i,j);},"cu",Ba(ABj),"ds",BK(AQk),"h2",Bl(Wn),"ia",Bl(Ve),"g_",BK(Vc),"ev",BK(AFC),"ew",BK(ADo),"h0",M(AQT),"hW",O(AJk),"hY",M(AQx),"id",M(AJe),
"hK",BK(ADG),"ib",M(AQJ),"iR",M(AIg),"ex",BK(AFG),"ey",BK(YA),"h7",Bl(ADQ),"b_",Bl(V1),"ez",Ba(AB$),"g4",M(ACe),"eA",Ba(WD),"h1",M(ALH),"h4",Bl(ANS),"h3",M(AGR),"hZ",Bl(AP9),"b6",Ba(ANJ),"hg",Bl(AQq),"g8",M(WF),"ic",function(b,c,d,e,f,g){Zu(this,b,c,d,e,f,g);}],SI,0,C,[Dp],0,3,0,0,0,Q4,0,C,[],0,3,0,0,0,Tp,0,C,[Cn],3,3,0,0,0,Lm,0,C,[Tp],0,0,0,0,["i0",O(Wg),"i1",O(AAq),"i2",O(VS)],UE,0,C,[],3,3,0,0,0,UL,0,C,[UE],0,3,0,0,0,Nw,0,Dq,[],0,0,0,0,0,Tk,"CloneNotSupportedException",24,Ca,[],0,3,0,0,0,DV,0,C$,[],0,3,0,
0,0,I,"IndexOutOfBoundsException",24,Bz,[],0,3,0,0,0,EQ,0,C,[Cn],3,3,0,0,0,O$,0,C,[EQ],3,3,0,0,0,QI,0,C,[EQ],3,3,0,0,0,Qy,0,C,[EQ],3,3,0,0,0,R0,0,C,[EQ],3,3,0,0,0,UB,0,C,[EQ],3,3,0,0,0]);
CX([ST,0,C,[EQ,O$,QI,Qy,R0,UB],3,3,0,0,0,OM,0,C,[],3,3,0,0,0,Kf,0,C,[Cn],3,3,0,0,0,NU,0,C,[Cn,ST,OM,Kf],1,3,0,0,["i3",M(AJL),"i4",Bl(AM_),"i5",Bl(AMp),"i6",Ba(AJx),"i7",M(APf),"i8",O(Zv),"i9",Ba(VR)],K0,0,C,[],1,3,0,0,0,Jb,0,K0,[Lp,EX,BZ],0,3,0,0,0,L4,0,Jb,[],0,3,0,0,0,AD3,0,C,[],0,3,0,0,0,Gc,0,Bx,[],12,3,0,0,0,Dr,0,C,[Cn],1,3,0,0,0,ABh,0,Dr,[],1,3,0,0,0,AAs,0,Dr,[],1,3,0,0,0,AFM,0,Dr,[],1,3,0,0,0,AIP,0,Dr,[],1,3,0,0,0,AEk,0,Dr,[],1,3,0,0,0,KG,0,C,[D$],0,0,0,0,["iY",M(AFf)],KH,0,C,[D$],0,0,0,0,["iY",M(AQa)],KF,
0,C,[D$],0,0,0,0,["iY",M(AKC)],Ra,0,C$,[],0,3,0,0,0,Tw,0,C,[Cn],3,3,0,0,0,JL,0,C,[Tw],0,0,0,0,["i$",O(ABD)],AAb,0,Dr,[],1,3,0,0,0,Qs,0,C,[BZ],4,3,0,0,0,Mw,0,C,[],3,3,0,0,0,Rs,0,C,[Mw],4,3,0,0,0,YJ,0,C,[],4,3,0,0,0,Kb,0,C,[],4,3,0,0,0,CV,"ReflectionException",9,Ca,[],0,3,0,0,0,Es,0,C,[],4,3,0,Bu,0,P_,0,C,[],3,3,0,0,0,JI,0,C,[P_],0,0,0,0,0,Hr,"Iterator",20,C,[],3,3,0,0,0,JH,0,C,[Hr],0,0,0,0,0,S4,0,C,[Mw],0,0,0,0,0,Cp,"NumberFormatException",24,Bj,[],0,3,0,0,0,J6,0,Bz,[],0,3,0,0,0,Ee,0,Ca,[],0,3,0,0,0,GU,"NoSuchMethodException",
24,Ee,[],0,3,0,0,0,C5,"NullPointerException",24,Bz,[],0,3,0,0,0,B8,0,C,[],1,0,0,0,["fv",Ba(AAQ),"fZ",BK(ADH),"fi",O(YW),"S",O(ALT),"e3",M(AOp),"fh",M(AOn),"fF",O(AP1),"eZ",O(HO)],L0,0,C,[JJ],0,3,0,0,0,APM,0,C,[Cn],1,3,0,0,0,ACP,0,C,[Cn],1,3,0,0,0,ARp,0,C,[Cn],1,3,0,0,0,Ki,0,C,[Cn],3,3,0,0,0,Lv,0,C,[Ki],0,3,0,0,["i_",M(AOx)],AEg,0,C,[Cn],1,3,0,0,0,Lu,0,C,[Ki],0,3,0,0,["i_",M(Xr)],Nb,0,C,[],3,3,0,0,0,G7,0,C,[Nb,EX],0,0,0,0,0]);
CX([Ia,0,G7,[],0,0,0,0,0,De,0,B8,[],0,0,0,DG,["fD",Ba(XR),"fE",O(AEb),"gd",M(Yw)],Sc,0,C,[],0,0,0,0,0,Cc,"PatternSyntaxException",21,Bj,[],0,3,0,0,["cT",O(APU)],XZ,0,C,[],0,3,0,0,0,J5,0,C,[Dp],3,3,0,0,0,Lj,0,C,[J5],1,3,0,0,0,Q0,0,C,[J5],3,3,0,0,0,Nu,0,C,[Q0],3,3,0,0,0,J7,0,Lj,[Nu],1,3,0,0,0,Ss,0,C,[],3,3,0,0,0,J4,0,J7,[EX,BZ,Ss],0,3,0,0,0,QW,0,De,[],0,0,0,0,["fD",Ba(WC),"fE",O(AAu),"gd",M(AMj)],UM,0,De,[],0,0,0,0,["fD",Ba(Z5),"fE",O(AFq)],Pq,0,De,[],0,0,0,0,["fD",Ba(YT),"fE",O(AOg)],RB,0,De,[],0,0,0,0,["fD",
Ba(W1),"fE",O(AMV),"gd",M(AKe)],F7,0,De,[],0,0,0,0,["fD",Ba(AOT),"fE",O(Zc)],Cs,0,B8,[],1,0,0,0,["fD",Ba(AQU),"fW",O(ANw),"gd",M(AFh)],EY,0,Cs,[],0,0,0,0,["fX",Bl(AMH),"fv",Ba(ACd),"fZ",BK(ZM),"fE",O(AEd),"gd",M(WT)],Cg,0,B8,[],0,0,0,0,["fD",Ba(ADJ),"e3",M(AJ8),"fE",O(AFz),"fh",M(AGP),"gd",M(ALb),"eZ",O(ZF)],Jj,0,Cg,[],0,0,0,0,["fD",Ba(AJH),"fE",O(AG2),"gd",M(ALL)],D6,0,Jj,[],0,0,0,0,["fD",Ba(AAY),"e3",M(ALk),"fE",O(WN)],Nk,0,D6,[],0,0,0,0,["fD",Ba(AJY),"gd",M(AOs),"fE",O(APY)],TP,0,D6,[],0,0,0,0,["fD",Ba(Yl),
"gd",M(ANM),"fE",O(ADt)],Qw,0,D6,[],0,0,0,0,["fD",Ba(Zw),"gd",M(ARr),"fE",O(AJd)],RY,0,D6,[],0,0,0,0,["fD",Ba(VM),"gd",M(AL4),"fE",O(YU)],FU,0,Cg,[],0,0,0,0,["fD",Ba(Wi),"fv",Ba(AHd),"fZ",BK(AMq),"fh",M(AGF),"fF",O(AJ$),"eZ",O(AP$)],AIx,0,C,[],4,3,0,0,0,I_,"ArrayStoreException",24,Bz,[],0,3,0,0,0,Ho,0,C,[],1,0,0,0,0,Bh,0,Ho,[],1,0,0,0,["f9",O(Yo),"f2",O(Xk),"fs",O(ANl),"fr",O(APW)],JF,"MissingResourceException",20,Bz,[],0,3,0,0,0,Cz,0,Bh,[],0,0,0,0,["ga",M(ZS),"f9",O(ARm),"f2",O(AB0),"fs",O(AOe),"S",O(AIH),
"fr",O(ACq)],El,0,B8,[],1,0,0,0,["fh",M(AMs),"gd",M(AOO),"eZ",O(AHT)],Dm,0,El,[],0,0,0,0,["fD",Ba(VO),"fE",O(ZB)],E5,0,Dm,[],0,0,0,0,["fD",Ba(XU),"fE",O(Ys)],Do,0,El,[],0,0,0,0,["fD",Ba(Wf),"fE",O(AEL)],E3,0,Dm,[],0,0,0,0,["fD",Ba(AHk),"e3",M(ARu)],T3,0,Dm,[],0,0,0,0,["fD",Ba(AQF),"fv",Ba(AIw)],Mz,0,C,[],4,0,0,0,0,Bo,0,C,[],1,0,0,0,0,NF,0,Ho,[EX],0,0,0,0,["S",O(LG)],Oj,0,B8,[],0,0,0,0,["fD",Ba(AFV),"fE",O(AJU),"gd",M(AJ7)],Bf,0,C,[EX,BZ],0,3,0,0,0,Np,0,Cg,[],0,0,0,0,["fE",O(AKg)],GT,0,Cg,[],0,0,0,0,["fD",Ba(XJ),
"e3",M(AJE),"fE",O(AKI),"gd",M(Y1),"fh",M(Yn)],Dx,0,Cg,[],0,0,0,0,["fD",Ba(ABO),"fE",O(APL),"ga",M(ACI),"fh",M(Xy),"e3",M(ANc),"gd",M(AB6)],Jz,0,Dx,[],0,0,0,0,["ga",M(AFi),"fE",O(AQf)],J_,0,Cs,[],0,0,0,0,["fX",Bl(AFY),"fE",O(YH)],DX,0,Cs,[],0,0,0,0,["fX",Bl(Vd),"fE",O(AGc),"fh",M(AJ9)]]);
CX([H4,0,Cg,[],0,0,0,0,["e3",M(AHj),"fE",O(AL6),"fD",Ba(Vz),"fh",M(YP),"gd",M(AOi)],DP,0,Cs,[],0,0,0,0,["fW",O(AFA),"fX",Bl(AD0),"fv",Ba(ABH),"fZ",BK(AFK),"fE",O(AOC),"fh",M(AN9)],MH,0,Cs,[],0,0,0,0,["fX",Bl(Vm),"fE",O(AJB)],Jw,0,Cs,[],0,0,0,0,["fX",Bl(V8),"fE",O(AEl)],E8,0,Cg,[],0,0,0,0,["e3",M(AP5),"fD",Ba(AJF),"fE",O(AJl),"fh",M(AFZ),"gd",M(ALn)],UF,0,E8,[],0,0,0,0,0,Sk,0,E8,[],0,0,0,0,0,U7,0,Do,[],0,0,0,0,["fD",Ba(AAa)],Pk,0,Do,[],0,0,0,0,["fD",Ba(AIi)],Gs,0,Do,[],0,0,0,0,["fD",Ba(AM8),"e3",M(AO3)],O6,0,
Gs,[],0,0,0,0,["fD",Ba(AFI),"e3",M(AIT)],FL,0,Do,[],0,0,0,0,["fD",Ba(ARh),"fE",O(APb)],NI,0,FL,[],0,0,0,0,["fD",Ba(AEM)],QN,0,Do,[],0,0,0,0,["fD",Ba(AQi)],P4,0,Gs,[],0,0,0,0,["fD",Ba(Y3)],SX,0,FL,[],0,0,0,0,["fD",Ba(W$)],QO,0,El,[],0,0,0,0,["fD",Ba(AQX),"fv",Ba(ANn),"fE",O(AKP)],Op,0,El,[],0,0,0,0,["fD",Ba(AJ_),"fv",Ba(VH),"fE",O(AMc)],Hc,0,C,[],1,0,0,0,0,U9,0,Dm,[],0,0,0,0,["fD",Ba(Xd)],TY,0,E3,[],0,0,0,0,["fD",Ba(AIb)],OW,0,E5,[],0,0,0,0,["fD",Ba(AMu)],PW,0,Dm,[],0,0,0,0,["fD",Ba(AJ1)],Sn,0,E3,[],0,0,0,0,
["fD",Ba(Xp)],Qx,0,E5,[],0,0,0,0,["fD",Ba(AMN)],KZ,0,B8,[],4,0,0,0,["fD",Ba(AGJ),"gd",M(AE2),"fE",O(AIc)],Kr,0,B8,[],0,0,0,0,["fD",Ba(Yk),"gd",M(YK),"fE",O(ARc)],Ol,0,B8,[],0,0,0,0,["fD",Ba(AFo),"gd",M(AQ_),"fE",O(X3)],ME,0,B8,[],4,0,0,0,["fD",Ba(AK2),"gd",M(ZX),"fE",O(AHq)],Ub,0,B8,[],0,0,0,0,["fD",Ba(AJt),"gd",M(Vj),"fE",O(ADI)],NQ,0,B8,[],0,0,0,0,["fD",Ba(ZD),"gd",M(ADd),"fE",O(XD)],T9,0,Cg,[],0,0,0,0,["fD",Ba(AQn),"fE",O(AA8),"e3",M(YS),"fi",O(AI1),"gd",M(YQ)],OQ,0,Cg,[],4,0,0,0,["fD",Ba(AJn),"fE",O(Z$),
"e3",M(AMa),"fi",O(U$),"gd",M(AQR)],TZ,0,B8,[],4,0,0,0,["fD",Ba(AF$),"gd",M(ACQ),"fE",O(AGV)],RE,0,B8,[],0,0,0,0,["fD",Ba(AJr),"gd",M(ACB),"fE",O(WI)],Nh,0,B8,[],0,0,0,0,["fD",Ba(AET),"gd",M(Z2),"fE",O(ADh)],Gj,0,Cg,[],0,0,0,0,["fD",Ba(Xh),"e3",M(ALh),"fE",O(WQ),"gd",M(ALM)],T7,0,Gj,[],0,0,0,0,["fD",Ba(Z_),"fv",Ba(AOq),"fZ",BK(WK),"fh",M(AH3),"fE",O(AOY)],Qq,0,Gj,[],0,0,0,0,["fD",Ba(AG8),"fE",O(YL)],Oi,0,Z,[Ij],0,3,0,0,["gr",BK(ACs),"iW",Ba(Yr),"cY",M(Zb),"c4",Bl(ANs)],QS,0,Cs,[],0,0,0,0,["fX",Bl(AAO),"fv",
Ba(Yc),"fZ",BK(AC8),"fE",O(AJN),"fh",M(AEa)],Nf,0,Cs,[],0,0,0,0,["fX",Bl(AHg),"fE",O(AEm)],NM,0,Cs,[],0,0,0,0,["fX",Bl(AMw),"fE",O(AOd)],ARv,0,C,[],4,3,0,0,0,Nd,0,Cs,[],0,0,0,0,["fX",Bl(AMA),"fE",O(ARa)],He,0,Cg,[],0,0,0,0,["e3",M(AJX),"fD",Ba(Kg),"fv",Ba(AD7),"fZ",BK(AA4),"fE",O(ANF),"fh",M(Wy),"gd",M(ANU)],Hm,0,Cg,[],0,0,0,0,["e3",M(Y9),"fD",Ba(Jx),"fv",Ba(AKx),"fZ",BK(AMv),"fE",O(AQl),"fh",M(AAS),"gd",M(AKJ)],Ea,0,Cs,[],0,0,0,0,["fX",Bl(ALN),"fv",Ba(AIM),"fZ",BK(Y7),"fE",O(AO4),"fh",M(ALs)],IX,0,Hc,[],0,
0,0,0,["gt",M(Zk),"gv",Bl(ALB)],IY,0,Hc,[],0,0,0,0,["gt",M(AMQ),"gv",Bl(APQ)]]);
CX([SW,0,C,[],0,0,0,0,0,IG,0,Bo,[],0,0,0,0,["fM",O(AEy)],H_,0,Bo,[],0,0,0,0,["fM",O(AG$)],SH,0,Bo,[],0,0,0,0,["fM",O(AMg)],Te,0,Bo,[],0,0,0,0,["fM",O(ANV)],Ti,0,Bo,[],0,0,0,0,["fM",O(ABP)],IA,0,Bo,[],0,0,0,0,["fM",O(ZR)],IU,0,IA,[],0,0,0,0,["fM",O(ACK)],U0,0,Bo,[],0,0,0,0,["fM",O(AD6)],Jr,0,IU,[],0,0,0,0,["fM",O(Vq)],QQ,0,Jr,[],0,0,0,0,["fM",O(AHV)],Re,0,Bo,[],0,0,0,0,["fM",O(AAH)],Ph,0,Bo,[],0,0,0,0,["fM",O(AHN)],O4,0,Bo,[],0,0,0,0,["fM",O(APV)],Tm,0,Bo,[],0,0,0,0,["fM",O(AIY)],U8,0,Bo,[],0,0,0,0,["fM",O(VB)],SV,
0,Bo,[],0,0,0,0,["fM",O(AEX)],SA,0,Bo,[],0,0,0,0,["fM",O(ALR)],TO,0,Bo,[],0,0,0,0,["fM",O(AAE)],N5,0,Bo,[],0,0,0,0,["fM",O(ABe)],NG,0,Bo,[],0,0,0,0,["fM",O(APH)],S2,0,Bo,[],0,0,0,0,["fM",O(Vn)],S$,0,Bo,[],0,0,0,0,["fM",O(AGm)],PD,0,Bo,[],0,0,0,0,["fM",O(ABs)],Rk,0,Bo,[],0,0,0,0,["fM",O(ADi)],UG,0,Bo,[],0,0,0,0,["fM",O(AGr)],S7,0,Bo,[],0,0,0,0,["fM",O(AOk)],Qk,0,Bo,[],0,0,0,0,["fM",O(AKU)],PC,0,Bo,[],0,0,0,0,["fM",O(AIO)],U4,0,Bo,[],0,0,0,0,["fM",O(AL8)],HV,0,Bo,[],0,0,0,0,["fM",O(AGO)],TU,0,HV,[],0,0,0,0,["fM",
O(AIn)],QT,0,IG,[],0,0,0,0,["fM",O(X_)],Px,0,H_,[],0,0,0,0,["fM",O(ADW)],Bm,0,Bo,[],0,0,0,0,["fM",O(AGS)],Pt,0,Bo,[],0,0,0,0,["fM",O(APu)],K4,0,Bo,[],0,0,0,0,["fM",O(ACw)],K$,0,Bo,[],0,0,0,0,["fM",O(Vo)],DH,"NegativeArraySizeException",24,Bz,[],0,3,0,0,0,W4,0,C,[],0,0,0,0,0,AAT,0,C,[],4,0,0,0,0,Y2,0,C,[],4,3,0,0,0,Tr,0,C,[],0,3,0,0,0,HU,0,C,[],0,3,0,0,0,Ma,0,C,[],0,3,0,0,0,AD2,0,C,[],4,3,0,0,0,AMh,0,C,[],4,3,0,0,0,PP,0,Dq,[],0,0,0,0,["gX",M(ANo),"iT",M(ABw),"iS",Bl(AIA)],CC,0,Bx,[],9,3,0,H5,0,Fj,0,G7,[],0,0,
0,0,0]);
CX([AQM,0,C,[],3,3,0,0,0,SJ,0,C,[Cn],3,3,0,0,0,Pr,0,C,[SJ,Cn],1,3,0,0,["ja",Bl(APA),"jb",M(AI9),"jc",Bl(Y$),"jd",Ba(AFN),"je",Ba(AMZ)],LN,0,C,[D$],0,0,0,0,["iY",M(AHp)],E7,0,Bx,[],12,3,0,0,0,AER,0,C,[],0,3,0,0,0,QK,0,C,[],3,3,0,0,0,Ha,0,L0,[QK],0,3,0,0,["S",O(XM)],T,"StringIndexOutOfBoundsException",24,I,[],0,3,0,0,0,T1,0,Bh,[],0,0,0,0,["ga",M(ABY)],T0,0,Bh,[],0,0,0,0,["ga",M(Wc)],Ou,0,Bh,[],0,0,0,0,["ga",M(AGB),"S",O(ADA)],OB,0,Bh,[],0,0,0,0,["ga",M(ALP)],Oy,0,Bh,[],0,0,0,0,["ga",M(AMz)],Oz,0,Bh,[],0,0,0,0,
["ga",M(AHf)],OF,0,Bh,[],0,0,0,0,["ga",M(ABi)],OG,0,Bh,[],0,0,0,0,["ga",M(Vb)],OD,0,Bh,[],0,0,0,0,["ga",M(ADL)],OE,0,Bh,[],0,0,0,0,["ga",M(AHh)],OH,0,Bh,[],0,0,0,0,["ga",M(AOt)],OI,0,Bh,[],0,0,0,0,["ga",M(AAk)],Ot,0,Bh,[],0,0,0,0,["ga",M(ARw)],OY,0,Bh,[],0,0,0,0,["ga",M(ADT)],Or,0,Bh,[],0,0,0,0,["ga",M(AAh)],Os,0,Bh,[],0,0,0,0,["ga",M(ACN)],Ox,0,Bh,[],0,0,0,0,["ga",M(AFt)],Oq,0,Bh,[],0,0,0,0,["ga",M(AN4)],Ov,0,Bh,[],0,0,0,0,["ga",M(Yx)],Ow,0,Bh,[],0,0,0,0,["ga",M(AKF)],H8,0,C,[],0,0,0,0,0,F6,0,C,[F$],0,3,0,
0,0,B5,"IllegalStateException",24,Bz,[],0,3,0,0,0,If,"IllegalMonitorStateException",24,Bz,[],0,3,0,0,0,ALU,0,C,[],0,3,0,0,0,ACR,0,C,[],4,3,0,0,0,Ww,0,C,[Cn],1,3,0,0,0,FG,0,C,[],3,3,0,0,0,UO,0,C,[FG],0,3,0,0,["cS",O(AOv)],TH,0,CC,[],12,0,0,0,0,TI,0,CC,[],12,0,0,0,0,TM,0,CC,[],12,0,0,0,0,TN,0,CC,[],12,0,0,0,0,TK,0,CC,[],12,0,0,0,0,TL,0,CC,[],12,0,0,0,0,TF,0,CC,[],12,0,0,0,0,TG,0,CC,[],12,0,0,0,0,TD,0,CC,[],12,0,0,0,0,NL,0,C,[],3,3,0,0,0,Q8,0,C,[NL],0,3,0,0,0,P2,0,C,[Cn],4,3,0,0,0]);
CX([QJ,0,C,[],3,3,0,0,0,Qr,0,C,[QJ],0,0,0,0,["e",M(AFU),"gU",M(AQe)],RI,0,C,[FG],0,3,0,0,0,NH,0,FU,[],0,0,0,0,["fv",Ba(ACA),"fZ",BK(ARg),"fF",O(ZV)],RJ,0,Bh,[],0,0,0,0,["ga",M(AOR)],Nn,0,Bh,[],0,0,0,0,["ga",M(X5)],Q7,0,Bh,[],0,0,0,0,["ga",M(Xo)],Q6,0,Bh,[],0,0,0,0,["ga",M(ACt)],Uh,0,Bh,[],0,0,0,0,["ga",M(AE9)],OR,0,Bh,[],0,0,0,0,["ga",M(AOU)],Oe,0,Bh,[],0,0,0,0,["ga",M(AJM)],Qd,0,Bh,[],0,0,0,0,["ga",M(AL0)],Nj,0,Bh,[],0,0,0,0,["ga",M(AQL)],Nm,0,Bh,[],0,0,0,0,["ga",M(AA1)],N9,0,Bh,[],0,0,0,0,["ga",M(APn)],O_,
0,Bh,[],0,0,0,0,["ga",M(AHJ)],Pe,0,Bh,[],0,0,0,0,["ga",M(ALf)],Sb,0,Bh,[],0,0,0,0,["ga",M(AOu)],Rt,0,Bh,[],0,0,0,0,["ga",M(AQb)],Nx,0,Bh,[],0,0,0,0,["ga",M(AAG)],Jg,0,Bh,[],0,0,0,0,["ga",M(AJS)],QX,0,Jg,[],0,0,0,0,["ga",M(ANd)],Xq,0,C,[Hr],0,0,0,0,0,GA,0,F6,[],0,0,0,0,["cS",O(AJ5)],Ny,0,C,[],32,0,0,LJ,0,TW,0,C,[Cn,EQ],1,3,0,0,["jf",Bl(AGM),"jg",Bl(AHM),"jh",Ba(VQ),"ji",M(V4),"jj",Ba(ADO)],GD,0,C,[Cn],3,3,0,0,0,JE,0,C,[GD],0,0,0,0,["iY",M(AFg)],AIf,0,C,[],0,3,0,0,0,Cq,"Array$ArrayIterator",8,C,[Hr,Dp],0,3,0,
0,0,CW,0,C,[Dp],0,3,0,0,0,HT,0,C,[],4,3,0,0,0,NA,0,C,[F$],0,0,0,0,0,UQ,0,C,[],3,3,0,0,0,RU,0,C,[UQ],3,3,0,0,0,SG,0,C,[],3,3,0,0,0,G1,0,C,[RU,SG],1,3,0,0,0,HX,0,G1,[],0,3,0,0,0,Ie,0,HX,[],0,3,0,0,0,GV,0,Ie,[],1,3,0,0,0,CU,0,GV,[],0,3,0,0,["jk",M(AFv)],GB,0,C,[GD],0,0,0,0,["iY",M(AJc)],Yg,0,C,[],0,0,0,0,0,Cu,0,G1,[],0,3,0,0,0,JK,0,C,[Db],1,3,0,0,0,MZ,0,JK,[],0,3,0,0,0,IZ,"IllegalCharsetNameException",23,Bj,[],0,3,0,0,0,O5,0,C,[CN],3,3,0,0,0,Hw,0,C,[O5],0,3,0,Hu,0,QE,0,C,[],3,3,0,0,0]);
CX([Ka,0,C,[QE],1,3,0,0,0,So,0,Ka,[],0,3,0,0,0,UY,"NoSuchElementException",20,Bz,[],0,3,0,0,0,Q,"GdxRuntimeException",8,Bz,[],0,3,0,0,0,AAW,0,C,[],4,3,0,0,0,D4,0,C,[FG],0,3,0,0,["cS",O(XF)],ACa,0,C,[],4,3,0,0,0,UI,0,C,[],32,0,0,MD,0,Mv,"ConcurrentModificationException",20,Bz,[],0,3,0,0,0,M3,0,C,[],1,3,0,0,0,RD,0,M3,[],0,3,0,0,0,Sy,"ActorFondo",18,CK,[CN],0,3,0,0,["bK",Bl(AAR)],Mc,"ActorValvula",18,CK,[CN],0,3,0,0,["bK",Bl(Wp),"bd",M(ACc)],Id,"ActorGas",18,CK,[CN],0,3,0,0,["bK",Bl(AKT),"bd",M(AMm)],Fh,0,GV,[],
0,3,0,0,["jk",M(ADg)],ABa,0,Eb,[Db],0,3,0,0,0,AKc,0,C,[],0,0,0,0,0,AK5,0,C,[],4,3,0,0,0,LS,0,C,[],0,3,0,0,0,Gr,0,Bx,[],12,3,0,0,0,IF,0,C,[CN],0,3,0,0,0,MK,0,C,[],1,3,0,0,0,Py,0,MK,[],0,3,0,0,0,MJ,0,C,[],0,3,0,H6,0,Mm,0,C,[],3,3,0,0,0,T2,0,C,[],3,3,0,0,0,Og,0,C,[FG,Mm,T2],0,0,0,0,["cS",O(AK6)],Om,0,C,[Dp,Db],4,3,0,0,0,Li,0,C,[CN],0,3,0,HL,0,Mg,0,Bt,[],0,3,0,0,0,Kk,0,Bt,[],0,3,0,0,0,Td,0,C,[],0,3,0,0,0,U2,0,C,[],32,0,0,LP,0,IM,0,C,[CN],3,3,0,0,0,Iq,0,C,[IM],0,3,0,0,["iF",O(ADc),"iG",O(ALG),"g9",Ba(AJg),"hC",Bl(AB7),
"hL",Bl(XO)],JN,0,C,[CN],3,3,0,0,0,G_,0,C,[JN],0,3,0,0,["hE",O(AEf),"hI",O(Wx),"g2",Ba(AIR),"g$",M(Xv),"g6",O(APl),"hM",O(ALX)],OS,0,C,[IM],0,3,0,0,["iF",O(Zl),"iG",O(AAv),"g9",Ba(Yi),"hC",Bl(AIC),"hL",Bl(AB8)],Q3,0,C,[JN],0,3,0,0,["hE",O(AK$),"hI",O(VF),"g2",Ba(AEW),"g$",M(ANY),"g6",O(AFO),"hM",O(YZ)],KD,0,C,[IM],0,3,0,KI,["iF",O(X2),"iG",O(AII),"g9",Ba(Yd),"hC",Bl(ANB),"hL",Bl(ABg)],Oa,0,Iq,[],0,3,0,0,0,Pi,0,G_,[],0,3,0,0,0,SY,0,C,[Dp],0,3,0,0,0,ALo,0,C,[],4,3,0,0,0,S6,0,C,[CN],0,3,0,0,0,Ew,0,C,[],1,3,0,0,
0,D3,0,Ew,[Db],1,3,0,0,["b$",M(AKr),"b9",M(APN)],GL,0,Ew,[Db],1,3,0,0,0,GI,0,Ew,[Db],1,3,0,0,0,EH,0,Ew,[Db],1,3,0,0,["b$",M(AKi),"b9",M(WL)]]);
CX([GX,0,C,[],4,3,0,0,0,AEJ,0,C,[],0,3,0,0,0,DZ,0,C,[],3,3,0,0,0,CL,0,EH,[DZ],0,0,0,0,["el",O(ARt)],AH7,0,C,[Cn],1,3,0,0,0,RX,0,C,[],3,3,0,0,0,Kl,0,C,[RX],0,3,0,0,0,Fi,0,C,[CN],0,3,0,F5,0,G0,0,GI,[],1,0,0,0,0,FP,0,G0,[],0,0,0,0,["ih",M(AI_),"iC",Bl(AG1),"is",O(Vu)],GQ,0,D3,[],1,0,0,0,0,HD,0,GQ,[],0,0,0,0,["iD",M(AKG),"it",Bl(AJp),"is",O(AJK)],O1,0,C,[],3,3,0,0,0,KU,0,C,[O1],0,3,0,0,0,I6,0,Bx,[],12,3,0,0,0,HP,0,Bx,[],12,3,0,0,0,JP,0,C,[],0,3,0,0,0,TR,0,JP,[],0,3,0,0,0,Le,0,C,[CN],0,3,0,0,0,HC,0,GL,[],1,0,0,0,
0,Ja,0,HC,[],0,0,0,0,["iM",M(ACU),"iu",Bl(AFm),"is",O(AAC)],AI2,0,C,[Cn],1,3,0,0,0,Em,0,Bx,[],12,3,0,0,0,Hx,0,Bx,[],12,3,0,0,0,PN,0,C,[Kf],1,3,0,0,["i3",M(AQV),"jl",O(Zt)],Hs,0,G0,[DZ],1,0,0,0,["is",O(AGv)],N_,0,Hs,[],0,0,0,0,["ih",M(ACM),"iC",Bl(Vs)],RO,0,Hs,[],0,0,0,0,["ih",M(ANz),"iC",Bl(XP)],GS,0,GQ,[DZ],1,0,0,0,["is",O(AJZ),"el",O(ALm)],NV,0,GS,[],0,0,0,0,["iD",M(AGE),"it",Bl(ALg)],Ql,0,GS,[],0,0,0,0,["iD",M(VG),"it",Bl(AGs)],GG,0,HC,[DZ],1,0,0,0,["is",O(AD$),"el",O(ALV)],NK,0,GG,[],0,0,0,0,["iM",M(AAj),
"iu",Bl(Zo)],Pv,0,GG,[],0,0,0,0,["iM",M(AIZ),"iu",Bl(AAl)],KJ,0,Bz,[],0,3,0,0,0,Fu,"ReadOnlyBufferException",22,KJ,[],0,3,0,0,0,Mq,"BufferUnderflowException",22,Bz,[],0,3,0,0,0,Fv,0,Bx,[],12,3,0,0,0,Ey,0,Bx,[],12,3,0,0,0,ABz,0,C,[],4,3,0,0,0,Iz,0,Bx,[],12,0,0,0,0,Di,0,Bx,[],12,3,0,0,0,AK0,0,C,[FG,Mm],3,0,0,0,0,H7,0,Bx,[],12,3,0,0,0,AJ2,0,C,[],0,3,0,0,0,R9,0,C,[],32,0,0,KR,0,Ii,"BufferOverflowException",22,Bz,[],0,3,0,0,0,Tj,0,C,[],0,3,0,MQ,0,ABF,0,C,[],0,3,0,0,0,L$,0,C,[GD],0,0,0,0,["iY",M(AEo)]]);
CX([IV,0,Bx,[],12,3,0,0,0,GH,0,Bx,[],12,3,0,0,0,Rw,0,C,[],0,3,0,0,0,PQ,0,Dq,[],0,0,0,0,0,LL,"InstantiationException",24,Ee,[],0,3,0,0,0,Ju,"IllegalAccessException",24,Ee,[],0,3,0,0,0,NP,0,Ee,[],0,3,0,0,0,Na,"Predicate",8,C,[],3,3,0,0,0,G$,0,C,[BZ,Db],0,3,0,0,0,PO,0,Dq,[],0,0,0,0,["gX",M(X1),"iT",M(VN),"iS",Bl(AHr)],ACT,0,C,[],4,3,0,0,0,NE,0,C,[],32,0,0,Ml,0,Q2,0,C,[Ij,Jf],0,3,0,0,0,Fy,0,F6,[],0,0,0,0,["cS",O(Zd)],NC,0,Dq,[],0,0,0,0,["gX",M(Zh),"iT",M(AH_),"iS",Bl(XK)],ND,0,Dq,[],0,0,0,0,["gX",M(AC4),"iT",M(Wo),
"iS",Bl(ADS)],JW,0,C,[GD],0,0,0,0,["iY",M(AP6)],Ko,0,C,[D$],0,0,0,0,["iY",M(ABZ)]]);
let AVi=DM(Ce),AVe=DM(J3),AVf=DM(AUP),AVg=DM(AUQ),AVh=DM(BM),AVd=DM(AH5),AVj=DM(Ej);ASu(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
"Unable to create new instance: ","enabled","disabled","childrenOnly","Actor: ","object cannot be null.","The event target cannot be null.","begin must be called first.","autoShapeType must be enabled.","|  ","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","none","all","table","cell","actor","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","texture cannot be null.","This TextureData implementation does not upload data itself",
"Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","[]",", ","","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for integer type","The value is too big for int type: ","Illegal radix: ","java.runtime.name","userAgent","os.name",
"Windows","OS X","no OS",".html","index.html","index-debug.html","assets/","assets.txt","Loading asset : ","gdx.wasm.js","0","LOAD_ASSETS","APP_CREATE","APP_LOOP","index can\'t be > size: "," > ","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Unsupported asset type ","Loading script : ","px","mousedown","mouseup","mousemove","wheel","touchstart","CSS1Compat","touchmove","touchcancel",
"touchend","keydown","keypress","keyup","hidden","capacity must be >= 0: ","The required capacity is too large: ","The value is too big for long type","The value is too big for long type: ","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","Invalid version string: ","\\.","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop",
"Applet","WebGL","iOS","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","object","function","string","number","undefined","fSet","\\Q","\\E","\\\\E\\Q",
"Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter",
"javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar",
"Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators",
"MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals",
"IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms",
"ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:",
"UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary",
"Directory","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","main","Script loaded: ","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","XNVCerrada.png","sphere-23.png","VertexArray","VertexBufferObject",
"VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","begin must be called before end.","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.",
"Call end() before beginning a new shape batch.","Must call begin(ShapeType.",").",") or begin(ShapeType.","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","The last short in src ","Index ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n",
"uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *","uniform sampler2D u_sampler","None","SourceOver","NearestNeighbour",
"BiLinear","FileType \'","\' Not supported in web backend","\\","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER",
"destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","Asset loaded: ","Logical","Pixels","Point","Line","Filled","data:",";base64,","error"]);
H.prototype.toString=function(){return Bs(this);};
H.prototype.valueOf=H.prototype.toString;C.prototype.toString=function(){return Bs(OL(this));};
C.prototype.__teavm_class__=function(){return ASj(this);};
APv.main=ATc(AE8);
APv.main.javaException=AST;
let Bk=Symbol('jsoClass');
(function(){var c;c=IL.prototype;c[Bk]=true;c.onAnimationFrame=c.iX;c=Lr.prototype;c[Bk]=true;c.handleEvent=c.iY;c=JB.prototype;c[Bk]=true;c.handleEvent=c.iY;c=JC.prototype;c[Bk]=true;c.handleEvent=c.iY;c=LR.prototype;c[Bk]=true;c.fullscreenChanged=c.iZ;c=Lm.prototype;c[Bk]=true;c.denied=c.i2;c.prompt=c.i1;c.granted=c.i0;c=NU.prototype;c.removeEventListener=c.i6;c.dispatchEvent=c.i7;c.get=c.i3;c.addEventListener=c.i9;Object.defineProperty(c,"length",{get:c.i8});c=KG.prototype;c[Bk]=true;c.handleEvent=c.iY;c
=KH.prototype;c[Bk]=true;c.handleEvent=c.iY;c=KF.prototype;c[Bk]=true;c.handleEvent=c.iY;c=JL.prototype;c[Bk]=true;c.unlockFunction=c.i$;c=Lv.prototype;c[Bk]=true;c.accept=c.i_;c=Lu.prototype;c[Bk]=true;c.accept=c.i_;c=Pr.prototype;c.removeEventListener=c.je;c.dispatchEvent=c.jb;c.addEventListener=c.jd;c=LN.prototype;c[Bk]=true;c.handleEvent=c.iY;c=P2.prototype;c[Bk]=true;c=TW.prototype;c.removeEventListener=c.jh;c.dispatchEvent=c.ji;c.addEventListener=c.jj;c=JE.prototype;c[Bk]=true;c.handleEvent=c.iY;c=GB.prototype;c[Bk]
=true;c.handleEvent=c.iY;c=PN.prototype;c.get=c.i3;Object.defineProperty(c,"length",{get:c.jl});c=L$.prototype;c[Bk]=true;c.handleEvent=c.iY;c=JW.prototype;c[Bk]=true;c.handleEvent=c.iY;c=Ko.prototype;c[Bk]=true;c.handleEvent=c.iY;})();
}));
