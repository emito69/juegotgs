"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(ARZ){let AYd=2463534242,Fd=()=>{let x=AYd;x^=x<<13;x^=x>>>17;x^=x<<5;AYd=x;return x;},P=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bs=f=>function(p1,p2){return f(this,p1,p2);},Bf=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BT=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AWX=f=>function(){let args=Array.prototype.slice.apply(arguments);AYe(function(){f.apply(this,args);});},AWo=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=R(F6(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=W(args[i]);}AYe(()=>{f.call(null,javaArgs);},callback);},BR=target=>target.$clinit=()=>{},AVa=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},F=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=F6();}return function(){superclass.call(this);};},M=cls=>AWH(cls),F6=()=>C,Xh=()=>{{return AUb();}},Kq=t=>{{return ANa(t);}};let AYf=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AYg=(name,binaryName)=>{let cls
=AYf();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Cl=AYg("boolean","Z"),KX=AYg("char","C"),AYh=AYg("byte","B"),AYi=AYg("short","S"),BV=AYg("int","I"),AJ_=AYg("long","J"),CL=AYg("float","F"),ADs=AYg("double","D"),Bp=AYg("void","V");let AYj=new ArrayBuffer(16),AYk=new DataView(AYj),AYl=new Float32Array(AYj),AYm=new Float64Array(AYj),AYn=new Int32Array(AYj),
AX1;if(typeof BigInt!=='function'){AX1=n=>{AYk.setFloat64(0,n,true);return new AYo(AYk.getInt32(0,true),AYk.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AX1=n=>{AYk.setFloat64(0,n,true);let lo=AYk.getInt32(0,true),hi=AYk.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AYp=new BigInt64Array(AYj);AX1=n=>{AYm[0]=n;return AYp[0];};}let GA=n=>{AYl[0]=n;return AYn[0];},Lv=n=>{AYn[0]=n;return AYl[0];},BW=(a,b)=>a>b?1:a<b? -1:a===b?0:1,Dy
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},Em=(a,b)=>(a>>>0)/(b>>>0)>>>0,AWj=(a,b)=>(a>>>0)%(b>>>0)>>>0,E$=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AYo(lo,hi){this.lo=lo|0;this.hi=hi|0;}AYo.prototype.__teavm_class__=()=>{return "long";};let AYq=a=>(a.hi&0x80000000)===0,AYr=a=>(a.hi&0x80000000)!==0,AYs=1<<18,Ce,D,X,El,AV7,Bm,AYt;if(typeof BigInt!=="function"){AYo.prototype.toString=function(){let result=[],n=this,
positive=AYq(n);if(!positive){n=AWx(n);}let radix=new AYo(10,0);do {let divRem=AYt(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AYo.prototype.valueOf=function(){return AV7(this);};Ce=new AYo(0,0);X=val=>new AYo(val, -(val<0)|0);El=val=>val>=0?new AYo(val|0,val/0x100000000|0):AWx(new AYo( -val|0, -val/0x100000000|0));D=(lo,hi)=>new AYo(lo,hi);AV7=val=>0x100000000*val.hi+(val.lo>>>0);Bm=
val=>val.lo;}else {Ce=BigInt(0);D=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));X=val=>BigInt.asIntN(64,BigInt(val|0));El=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));AV7=val=>Number(val);Bm=val=>Number(BigInt.asIntN(32,val))|0;}let Ek,ADD,ACP,AVg,AVl,ADe,AWC,De,AGB,AYu,Bd,Na,XK,AWE,AWx,Dc,ADC,In,FU,AV6,Bg;if(typeof BigInt!=='function'){Ek=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ADD=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;ACP=(a,b)=>{if(a.hi<b.hi)
{return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};AVg=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};AVl=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};ADe=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x
<=y;}return (a.lo&1)<=(b.lo&1);};De=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return El(a.lo+b.lo);}else if(AYv.abs(a.hi)<AYs&&AYv.abs(b.hi)<AYs){return El(AV7(a)+AV7(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AYo(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<
16);};AYu=a=>{let lo=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AYo(lo,hi);};AWx=a=>AYu(new AYo(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));AGB=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return El(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AYo(lolo&0xFFFF|(lohi&0xFFFF)
<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AWC=(a,b)=>{let r=E$(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Bd=(a,b)=>{let positive=AYr(a)===AYr(b);if(AYr(a)){a=AWx(a);}if(AYr(b)){b=AWx(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)
|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AYo(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:AWx(result);};Na=(a,b)=>{if(AYv.abs(a.hi)<AYs&&AYv.abs(b.hi)<AYs){return El(AV7(a)/AV7(b));}return (AYt(a,
b))[0];};AWE=(a,b)=>{if(a.hi>=0&&a.hi<AYs&&b.hi>=0&&b.hi<AYs){return El(AV7(a)/AV7(b));}return (AYw(a,b))[0];};XK=(a,b)=>{if(AYv.abs(a.hi)<AYs&&AYv.abs(b.hi)<AYs){return El(AV7(a)%AV7(b));}return (AYt(a,b))[1];};AYt=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AYr(a)===AYr(b);if(AYr(a)){a=AWx(a);}if(AYr(b)){b=AWx(b);}a=new AYx(a.lo,a.hi,0);b=new AYx(b.lo,b.hi,0);let q=AYy(a,b);a=new AYo(a.lo,a.hi);q=new AYo(q.lo,q.hi);return positive?[q,a]:[AWx(q),AWx(a)];};let AYw=(a,b)=>
{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new AYx(a.lo,a.hi,0);b=new AYx(b.lo,b.hi,0);let q=AYy(a,b);a=new AYo(a.lo,a.hi);q=new AYo(q.lo,q.hi);return [q,a];};Dc=(a,b)=>new AYo(a.lo&b.lo,a.hi&b.hi);ADC=(a,b)=>new AYo(a.lo|b.lo,a.hi|b.hi);In=(a,b)=>new AYo(a.lo^b.lo,a.hi^b.hi);FU=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AYo(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AYo(0,a.lo);}else {return new AYo(0,a.lo<<b -32);}};AV6=(a,b)=>{b&=63;if(b===0){return a;}else if
(b<32){return new AYo(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AYo(a.hi,a.hi>>31);}else {return new AYo(a.hi>>b -32,a.hi>>31);}};Bg=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AYo(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AYo(a.hi,0);}else {return new AYo(a.hi>>>b -32,0);}};function AYx(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AYz=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|
0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AYA=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi
>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYB=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYC=(a,b)=>{let r=a.sup -b.sup;if(r
!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AYD=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AYE=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===
64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AYF=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AYG=a=>new AYx(a.lo,a.hi,a.sup),AYy=(a,b)=>{let bits=b.hi!==0?AYD(b.hi):AYD(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits
%16;AYE(b,bits);AYE(a,dividentBits);let q=new AYx(0,0,0);while(sz-->0){AYE(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AYG(b);AYz(t,digit);if(AYC(t,a)>=0){while(AYC(t,a)>0){AYA(t,b); --digit;}}else {while(true){let nextT=AYG(t);AYB(nextT,b);if(AYC(nextT,a)>0){break;}t=nextT;++digit;}}AYA(a,t);q.lo|=digit;AYE(a,16);}AYF(a,bits+16);return q;};}else {Ek=(a,b)=>a===b;ADD=(a,b)=>a!==b;ACP=(a,b)=>a>b;AVg=(a,b)=>a>=b;AVl=(a,b)=>a<b;ADe=(a,b)=>a<=b;De=(a,b)=>BigInt.asIntN(64,
a+b);AYu=a=>BigInt.asIntN(64,a+1);AWx=a=>BigInt.asIntN(64, -a);AGB=(a,b)=>BigInt.asIntN(64,a -b);AWC=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Bd=(a,b)=>BigInt.asIntN(64,a*b);Na=(a,b)=>BigInt.asIntN(64,a/b);AWE=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));XK=(a,b)=>BigInt.asIntN(64,a%b);Dc=(a,b)=>BigInt.asIntN(64,a&b);ADC=(a,b)=>BigInt.asIntN(64,a|b);In=(a,b)=>BigInt.asIntN(64,a^b);FU=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));AV6=(a,b)=>BigInt.asIntN(64,
a>>BigInt(b&63));Bg=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)>>BigInt(b&63));}let R=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (En(cls))(data);},V=(cls,data)=>new (En(cls))(data),AA3;if(typeof BigInt64Array!=='function'){AA3=init=>new AYH(init);}else {AA3=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AYH(buffer);};}let G=sz=>new AYI(new Uint16Array(sz)),AGn=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AYI(buffer);},BN=sz=>new AYJ(new Int8Array(sz)),
FM=sz=>new AYK(new Int16Array(sz)),AX3=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AYK(buffer);},Ba=sz=>new AYL(new Int32Array(sz)),IT=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AYL(buffer);},Kn=sz=>new AYM(new Int8Array(sz)),Cc=sz=>new AYN(new Float32Array(sz)),En=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(F6()).call(this);this.data=data;}JavaArray.prototype=Object.create((F6()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor
=JavaArray;JavaArray.prototype.toString=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (En(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[F6()],primitive
:false,superclass:F6(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AYO,AVt=strings=>{AYP();AYO=new Array(strings.length);for(let i=0;i<strings.length;++i){AYO[i]=AYQ(W(strings[i]));}},A=index=>AYO[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;},AUU=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},W=str=>str===null?null:TU(str),Bz=str=>str===null?null:str.kb,AYP=()=>(()=>{})(),AYQ;{AYQ=str=>str;}let BC=(obj,cls)=>obj instanceof F6()&&!!obj.constructor.$meta&&AYR(obj.constructor,cls),AYR=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AYR(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for
(let i=0;i<supertypes.length;i=i+1|0){if(AYR(supertypes[i],to)){return true;}}return false;};let B=ex=>{throw AP$(ex);},AYS=Symbol("javaException"),AP$=ex=>{let err=ex.$jsException;if(!err){let javaCause=AYT(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AYU("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AYS]=ex;ex.$jsException=err;AYV(err,ex);}return err;},AYV=(err,ex)=>
{if(typeof AYW==="function"&&err.stack){let stack=AYW(err.stack),javaStack=R(AYX(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AYY(W(element.className),W(element.methodName),W(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AYZ(ex,javaStack);}}},AYU;if(typeof AY0==='object'){let AY1=Symbol("defaultMessage");AYU=function AYU(message,cause){let self=Reflect.construct(Error,[void 0,cause],AYU);Object.setPrototypeOf(self,
AYU.prototype);self[AY1]=message;return self;};AYU.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AYU},message:{get(){try {let javaException=this[AYS];if(typeof javaException==='object'){let javaMessage=AY2(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AY1];}catch(AY3){return "Exception occurred trying to extract Java exception message: "+AY3;}}}});}else {AYU=Error;}let AVY=e=>e instanceof Error
&&typeof e[AYS]==='object'?e[AYS]:null,Bc=err=>{let ex=err[AYS];if(!ex){ex=AY4(W("(JavaScript) "+err.toString()));err[AYS]=ex;ex.$jsException=err;AYV(err,ex);}return ex;},AY4=message=>AU9(message),AY2=t=>AOx(t),AYT=t=>AW$(t),AYX=()=>F6(),AYY=(className,methodName,fileName,lineNumber)=>{{return null;}},AYZ=(e,stack)=>{};let AY5=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index
=next+1;}buffer+=msg.substring(index);};},B2=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AY5(msg=>console.info(msg)):()=>{},DN=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AY5(msg=>console.error(msg)):()=>{};let AY6=null,AUt=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AY6=packages;},Dg=data=>
{let packages=AY6,i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AY7(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AY7.prototype.push=function(){for
(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AY7.prototype.s=AY7.prototype.push;AY7.prototype.pop=function(){return this.stack.pop();};AY7.prototype.l=AY7.prototype.pop;AY7.prototype.isResuming=function(){return this.status===2;};AY7.prototype.isSuspending=function(){return this.status===1;};AY7.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AY7.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if
(AY8!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AY7.prototype.resume=function(){if(AY8!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AY7.prototype.run=function(){AY8=this;let result;try {result=this.runner();}catch(AY3){result=AY3;}finally {AY8=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback
=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let FO=()=>{let thread=Dp();return thread!=null&&thread.isSuspending();},FQ=()=>{let thread=Dp();return thread!=null&&thread.isResuming();},AYe=(runner,callback)=>(new AY7(runner)).start(callback),AY8=null,Dp=()=>AY8,FC=()=>{throw new Error("Invalid recorded state");};function C(){this.mD=null;this.$id$=0;}
let F$=b=>{let c;if(b.mD===null){c=new IX;c.mz=B3;b.mD=c;}b=b.mD;c=b.mz;if(c===null)b.mz=B3;else if(c!==B3){c=new BO;c.kc=1;c.kd=1;c.kf=A(0);B(c);}b.nc=b.nc+1|0;},
DZ=b=>{let c,d;if(!HA(b)){c=b.mD;if(c.mz===B3){d=c.nc-1|0;c.nc=d;if(!d)c.mz=null;HA(b);return;}}b=new I_;b.kc=1;b.kd=1;B(b);},
AWJ=b=>{AFL(b,1);},
AFL=(b,c)=>{let d,$p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.mD===null){d=new IX;d.mz=B3;b.mD=d;}d=b.mD;if(d.mz===null)d.mz=B3;if(d.mz===B3){d.nc=d.nc+c|0;return;}$p=1;case 1:Yt(b,c);if(FO()){break _;}return;default:FC();}}Dp().s(b,c,d,$p);},
AIx=(b,c,d)=>{let e,f,g;e=B3;f=b.mD;if(f===null){f=new IX;f.mz=e;b.mD=f;if(e!==e)B3=e;B3.pb=EE();b=b.mD;b.nc=b.nc+c|0;b=null;d.qc.e(b);return;}if(f.mz===null){f.mz=e;if(e!==e)B3=e;B3.pb=EE();b=b.mD;b.nc=b.nc+c|0;b=null;d.qc.e(b);return;}if(f.o7===null)f.o7=AHL();f=f.o7;g=new S6;g.wu=e;g.wv=b;g.ws=c;g.wt=d;d=g;f.push(d);},
AWP=b=>{XT(b,1);},
XT=(b,c)=>{let d;if(!HA(b)){d=b.mD;if(d.mz===B3){c=d.nc-c|0;d.nc=c;if(c>0)return;d.mz=null;d=d.o7;if(d!==null&&!(d.length?0:1)){d=new Wp;d.wS=b;Nq(d,0);}else HA(b);return;}}b=new I_;b.kc=1;b.kd=1;B(b);},
APg=b=>{let c,d,e;if(!HA(b)){c=b.mD;if(c.mz===null){b=c.o7;if(b!==null&&!(b.length?0:1)){b=c.o7.shift();BE();if(b!==null&&!(b instanceof F6()))b=Cd(b);d=b;c.o7=null;b=d.wu;c=d.wv;e=d.ws;d=d.wt;if(B3!==b)B3=b;B3.pb=EE();c=c.mD;c.mz=b;c.nc=c.nc+e|0;b=null;d.qc.e(b);}return;}}},
HA=a=>{let b,c;b=a.mD;if(b===null)return 1;a:{if(b.mz===null){c=b.o7;if(!(c!==null&&!(c.length?0:1))){b=b.u8;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.mD=null;return 1;},
Bu=a=>{return;},
AVd=()=>{let a=new C();Bu(a);return a;},
AWK=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.ks=b;d=c;b.classObject=d;}}return c;},
FJ=a=>{let b,c;b=a;if(!b.$id$){c=Fd();b.$id$=c;}return a.$id$;},
AJG=(a,b)=>{return a!==b?0:1;},
P0=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=Fd();b.$id$=c;}d=Bi(a.$id$,4);b=new K;b.ka=G(16);E(b,b.j_,A(1));e=b.j_;if(d===null)d=A(2);E(b,e,d);c=new I;f=b.ka;g=f.data;h=b.j_;i=g.length;if(h>=0&&h<=(i-0|0)){c.kb=L(f.data,0,h);return c;}b=new H;b.kc=1;b.kd=1;B(b);},
AWe=a=>{let b,c,d;if(!BC(a,Fs)&&a.constructor.$meta.item===null){b=new UU;b.kc=1;b.kd=1;B(b);}b=Xx(a);c=b;d=Fd();c.$id$=d;return b;},
NR=a=>{let b,c;b=a.mD;if(!(b!==null&&b.mz===B3?1:0)){b=new I_;b.kc=1;b.kd=1;B(b);}b=b.u8;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BE();if(c!==null&&!(c instanceof F6()))c=Cd(c);c=c;if(!c.m())Nq(c,0);}a.mD.u8=null;},
Yt=(b,c)=>{let thread=Dp();let javaThread=Xh();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Kq(javaThread);thread.resume();};callback.g0=e=>{thread.attribute=AP$(e);Kq(javaThread);thread.resume();};callback=SD(callback);thread.suspend(()=>{try {AIx(b,c,callback);;}catch(N6){callback.g0(N6);}});return null;};
let AQE=F();
let AG2=b=>{let c,d,e,f;V1=G(0);c=new I;c.kb="";Mv=c;Ox=new NX;AOW();c=new Z;c.kh=1.0;c.kg=0.0;O2=c;c=new Z;c.kh=0.0;c.kg=1.0;O1=c;c=new Z;c.kh=0.0;c.kg=0.0;Rv=c;LE=new Z;JF=new Z;Y1();T4=new Z;T8=new Z;ABp();SH=new Z;SS=new Z;c=new EH;c.oG=0.0;c.oD=0.0;c.oE=0.0;c.oF=0.0;RI=c;c=new EH;c.oG=0.0;c.oD=0.0;c.oE=0.0;c.oF=0.0;RH=c;QJ=new DR;Ts=new DR;Vn=0.10000000149011612;AS_();Rm=M(CL);Xg();PA=R(JD,111);TQ=new Z;T1=new Z;QQ=new C;AG7();OC=M(BV);ADP();P9=M(AJ_);OB=M(KX);T7=R(M2,128);Yw();AKK();Rc=new Z;Rd=new Z;Re
=new Z;Tf=0.4000000059604645;OA=0.10000000149011612;U1=new Z;AMD();R2=new Z;Sy=new Z;Ww=new Z;Wy=new Z;Wx=new Z;ARD();AS9();ACQ();Pp=new BM;ANC();Iu=0.0;AFZ();RN=Cc(3);AK5();AGU();AIW();Do=1;ABQ();WA=new KE;Q1=new KD;AJy();O=1;AC6();I6=new NF;ALF();ZM();c=new N1;b=R(I,0);d=b.data;JS(A(3));e=d.length;f=0;while(f<e){JS(d[f]);f=f+1|0;}c.vU=A(3);c.wI=b.p();Co=c;ARU();WJ=M(ADs);AFQ();ATk();c=new HW;c.nm=1;Js=c;c=new HW;c.nm=0;GR=c;QY=M(Cl);c=new HM;c.tf=A(4);Ct=c;c=new HM;c.tf=A(5);Kj=c;AFm();AO4();AAh();AGf();ADx();W9();ATB();AFa();ABA();K3
=1;Z5();c=new DC;c.pZ=12;L8=c;AMz();AM8();AS1();DU=new Z;DJ=new Z;D_=new Z;C1=new Z;C2=new Z;S9=new Z;Nt=new Z;G9=new Z;Hb=new Z;Wi=new Z;Oz=new Z;PB=CH(2.0);PC=CH(3.0);Ei=new Z;Fv=new Z;Ew=new Z;c=ATc(A(6));c.st=(-1);c.ql=(-1);Qs(new L3,new Qg,c);};
let OD=F();
let AEz=0,AEG=0,YU=0,ATl=0,ACK=0;
let S5=()=>{S5=BR(OD);AG4();};
let AG4=()=>{AEz=Dl(W(navigator.platform),A(7));AEG=Dl(W(navigator.platform),A(8));YU=Dl(W(navigator.platform),A(9));ATl=!Dl(W(navigator.platform),A(10))&&!Dl(W(navigator.platform),A(11))?0:1;ACK=!Dl(W(navigator.platform),A(12))&&!Dl(W(navigator.platform),A(13))&&!Dl(W(navigator.platform),A(14))?0:1;};
let Oq=F(0);
let MB=F();
let CR=F(0);
function Nv(){let a=this;MB.call(a);a.ma=null;a.vV=null;a.yY=0;a.lB=null;a.mb=null;a.r$=null;a.td=null;a.p$=null;a.qb=null;a.sd=0;a.se=0;a.sF=null;a.n3=null;a.qu=null;a.p2=null;a.va=0;a.rc=null;a.xX=0;a.Ak=0;a.wH=0;a.uB=null;a.wT=null;}
let BS=0;
let S1=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.mb=new Z;a.r$=R(Cm,20);a.td=Kn(20);a.p$=Ba(20);a.qb=Ba(20);d=new Nl;IC(d,1,4,M(D8));a.p2=d;a.va=1;a.uB=Jc;e=new BM;e.k_=0.0;e.k$=1.0;e.k9=0.0;e.la=0.8500000238418579;CV(e);a.wT=e;if(b===null){b=new Bl;b.kc=1;b.kd=1;b.kf=A(15);B(b);}if(c===null){b=new Bl;b.kc=1;b.kd=1;b.kf=A(16);B(b);}a.ma=b;a.vV=c;c=new BJ;Fg(c);e=new Nl;IC(e,1,4,M(Cm));c.kz=e;e=new Tc;e.pj=1.0;e.ph=0.0;e.pi=0.0;e.pl=0.0;e.pm=1.0;e.pk=0.0;c.tZ=e;c.uN=Dj();c.p0=Dj();c.nN=1;a.lB=c;c.lF=a;c=c.kz;f=c.ki;g=
0;h=c.ke;while(g<h){f.data[g].x(a);g=g+1|0;}g=B6.lA.width;i=B6.lA.height;b.qi=0;b.qj=0;b.qS=g;b.mV=i;j=g;k=b.sv;j=j*k;k=i*k;b.tt=j;b.tB=k;NC(b,1);},
AXs=(a,b)=>{let c=new Nv();S1(c,a,b);return c;},
ANj=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.rc===null){b=AI1(5000,null);a.rc=b;b.s_=1;}a:{if(!a.Ak&&!a.wH&&a.uB===Jc){if(!a.xX)break a;b=a.lB;b.kR=1;BS=1;b=b.kz;if(CI){c=new Cx;c.k5=1;c.lb=b;c.me=1;}else{if(b.kO===null){c=new C7;c.mq=b;c.mt=1;b.kO=c;}c=CQ(b.kO);}b:while(true){if(!c.k5){c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(c.lZ>=c.lb.ke?0:1))break a;b=Cq(c);if(!(b instanceof BJ)){b.kR=1;BS=1;}else{b=b;b.kR=1;BS=1;b=b.kz;if(CI){d=new Cx;d.k5=1;d.lb=b;d.me=1;}else{if(b.kO
===null){d=new C7;d.mq=b;d.mt=1;b.kO=d;}d=CQ(b.kO);}while(true){if(!d.k5){c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(d.lZ>=d.lb.ke?0:1))break;b=Cq(d);if(!(b instanceof BJ)){b.kR=1;BS=1;}else{b=b;b.kR=1;BS=1;b=b.kz;if(CI){e=new Cx;e.k5=1;e.lb=b;e.me=1;}else{if(b.kO===null){e=new C7;e.mq=b;e.mt=1;b.kO=e;}e=CQ(b.kO);}while(true){if(!e.k5){c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(e.lZ>=e.lb.ke?0:1))break;b=Cq(e);if(!(b instanceof BJ)){b.kR=1;BS=1;}else{b=b;b.kR=1;BS=1;f=b.kz;if(CI){b=new Cx;b.k5=1;b.lb=f;b.me
=1;}else{if(f.kO===null){b=new C7;Bu(b);b.mq=f;b.mt=1;f.kO=b;}b=CQ(f.kO);}while(true){if(!b.k5){c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(b.lZ>=b.lb.ke?0:1))break;f=Cq(b);if(!(f instanceof BJ)){f.kR=1;BS=1;}else{f=f;f.kR=1;BS=1;f=f.kz;if(CI){g=new Cx;Bu(g);g.k5=1;g.lb=f;g.me=1;}else{if(f.kO===null)f.kO=LZ(f,1);g=CQ(f.kO);}while(true){if(!g.k5){c=new T;He(c,A(17));B(c);}if(!(g.lZ>=g.lb.ke?0:1))break;f=Cq(g);if(!(f instanceof BJ)){f.kR=1;BS=1;}else{f=f;f.kR=1;BS=1;f=f.kz;if(CI)h=Mo(f,1);else{if(f.kO===null)f.kO
=N2(f);h=CQ(f.kO);}while(true){if(!h.k5)break b;if(!(h.lZ>=h.lb.ke?0:1))break;f=Cq(h);if(!(f instanceof BJ)){f.kR=1;BS=1;}else{f=f;Fi(f,1);f=GD(f.kz);while(HU(f)){i=Cq(f);if(!(i instanceof BJ))Fi(i,1);else LO(i,1,1);}}}}}}}}}}}}}B(KQ(A(17)));}c=a.mb;b=Lp;j=b.mo.data[0];k=b.mn.data[0];c.kh=j;c.kg=k;E9(a.ma,c);b=a.mb;j=b.kh;k=b.kg;c=a.lB;b.kh=j;b.kg=k;DK(c,b);b=a.lB;c=a.mb;c=Iq(b,c.kh,c.kg,1);if(c===null)return;if(!a.wH)b=c;else{b=c.k0;if(b===null)b=c;}c=a.uB;if(c===Jc){b.kR=1;BS=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof EJ)break;b=b.k0;}}if(b===null)return;b.K(c);}d:{if(a.xX&&b instanceof BJ){c=b;c.kR=1;BS=1;c=c.kz;if(CI){d=new Cx;d.k5=1;d.lb=c;d.me=1;}else{if(c.kO===null){d=new C7;d.mq=c;d.mt=1;c.kO=d;}d=CQ(c.kO);}e:while(true){if(!d.k5){c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(d.lZ>=d.lb.ke?0:1))break d;c=Cq(d);if(!(c instanceof BJ)){c.kR=1;BS=1;}else{c=c;c.kR=1;BS=1;c=c.kz;if(CI){e=new Cx;e.k5=1;e.lb=c;e.me=1;}else{if(c.kO===null){e=new C7;e.mq=c;e.mt=1;c.kO=e;}e=CQ(c.kO);}while(true){if(!e.k5)
{c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(e.lZ>=e.lb.ke?0:1))break;c=Cq(e);if(!(c instanceof BJ)){c.kR=1;BS=1;}else{c=c;c.kR=1;BS=1;c=c.kz;if(CI){f=new Cx;f.k5=1;f.lb=c;f.me=1;}else{if(c.kO===null){f=new C7;f.mq=c;f.mt=1;c.kO=f;}f=CQ(c.kO);}while(true){if(!f.k5){c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(f.lZ>=f.lb.ke?0:1))break;c=Cq(f);if(!(c instanceof BJ)){c.kR=1;BS=1;}else{c=c;c.kR=1;BS=1;c=c.kz;if(CI){g=new Cx;g.k5=1;g.lb=c;g.me=1;}else{if(c.kO===null){g=new C7;Bu(g);g.mq=c;g.mt=1;c.kO=g;}g=CQ(c.kO);}while
(true){if(!g.k5){c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}if(!(g.lZ>=g.lb.ke?0:1))break;c=Cq(g);if(!(c instanceof BJ)){c.kR=1;BS=1;}else{c=c;c.kR=1;BS=1;c=c.kz;if(CI){h=new Cx;Bu(h);h.k5=1;h.lb=c;h.me=1;}else{if(c.kO===null)c.kO=LZ(c,1);h=CQ(c.kO);}while(true){if(!h.k5){c=new T;He(c,A(17));B(c);}if(!(h.lZ>=h.lb.ke?0:1))break;c=Cq(h);if(!(c instanceof BJ)){c.kR=1;BS=1;}else{c=c;c.kR=1;BS=1;c=c.kz;if(CI)i=Mo(c,1);else{if(c.kO===null)c.kO=N2(c);i=CQ(c.kO);}while(true){if(!i.k5)break e;if(!(i.lZ>=i.lb.ke?0:1))break;c
=Cq(i);if(!(c instanceof BJ)){c.kR=1;BS=1;}else{c=c;Fi(c,1);c=GD(c.kz);while(HU(c)){l=Cq(c);if(!(l instanceof BJ))Fi(l,1);else LO(l,1,1);}}}}}}}}}}}}}B(KQ(A(17)));}}c=a.lB;if(c!==b)f:{c.kR=0;if(c instanceof BJ){c=c.kz;m=0;n=c.ke;g:while(true){if(m>=n)break f;if(m>=c.ke){d=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,m,10);E(b,b.j_,A(19));m=c.ke;J(b,b.j_,m,10);c=new I;o=b.ka;p=o.data;n=b.j_;q=p.length;if(n>=0&&n<=(q-0|0)){c.kb=L(o.data,0,n);d.kc=1;d.kd=1;d.kf=c;B(d);}b=new H;b.kc=1;b.kd=1;B(b);}d=c.ki.data[m];if
(d!==b)h:{d.kR=0;if(d instanceof BJ){d=d.kz;q=0;r=d.ke;while(true){if(q>=r)break h;if(q>=d.ke){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,q,10);E(b,b.j_,A(19));m=d.ke;J(b,b.j_,m,10);d=new I;o=b.ka;p=o.data;n=b.j_;q=p.length;if(n>=0&&n<=(q-0|0)){d.kb=L(o.data,0,n);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}e=d.ki.data[q];if(e!==b)i:{e.kR=0;if(e instanceof BJ){e=e.kz;s=0;t=e.ke;while(true){if(s>=t)break i;if(s>=e.ke){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,s,10);E(b,b.j_,A(19));m
=e.ke;J(b,b.j_,m,10);d=new I;o=b.ka;p=o.data;n=b.j_;q=p.length;if(n>=0&&n<=(q-0|0)){d.kb=L(o.data,0,n);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}f=e.ki.data[s];if(f!==b)j:{f.kR=0;if(f instanceof BJ){f=f.kz;u=0;v=f.ke;while(true){if(u>=v)break j;if(u>=f.ke){c=new H;b=new K;Bu(b);b.ka=G(16);BZ(b,b.j_,A(18));J(b,b.j_,u,10);BZ(b,b.j_,A(19));m=f.ke;J(b,b.j_,m,10);d=new I;o=b.ka;p=o.data;n=b.j_;q=p.length;if(n>=0&&n<=(q-0|0)){d.kb=L(o.data,0,n);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}g
=f.ki.data[u];if(g!==b)k:{g.kR=0;if(g instanceof BJ){g=g.kz;w=0;x=g.ke;while(true){if(w>=x)break k;if(w>=g.ke){c=new H;b=new K;D1(b,16);Cb(b,b.j_,A(18));IM(b,w,10);Cb(b,b.j_,A(19));IM(b,g.ke,10);d=new I;o=b.ka;p=o.data;n=b.j_;q=p.length;if(n>=0&&n<=(q-0|0)){d.kb=L(o.data,0,n);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}h=g.ki.data[w];if(h!==b)l:{h.kR=0;if(h instanceof BJ){h=h.kz;y=0;z=h.ke;while(true){if(y>=z)break l;if(y>=h.ke){c=new H;b=new K;Fc(b);JK(b,A(18));IR(b,y);JK(b,A(19));IR(b,h.ke);d=new I;o
=b.ka;p=o.data;n=b.j_;q=p.length;if(n>=0&&n<=(q-0|0)){d.kb=L(o.data,0,n);He(c,d);B(c);}b=new H;b.kc=1;b.kd=1;B(b);}i=h.ki.data[y];if(i!==b)m:{i.kR=0;if(i instanceof BJ){l=i.kz;ba=0;bb=l.ke;while(true){if(ba>=bb)break m;if(ba>=l.ke)break g;i=l.ki.data[ba];if(i!==b)n:{Fi(i,0);if(i instanceof BJ){i=i.kz;bc=0;bd=i.ke;while(true){if(bc>=bd)break n;Pr(a,Q(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(No(Et(Fn(FD(Fn(FD(EF(),A(18)),ba),A(19)),l.ke))));}}}B5.W(3042);b
=a.rc;c=a.ma.rj.q1;Dm(b.tD,c.lC);b.o0=1;b=a.rc;if(!b.s_){c=new BO;c.kc=1;c.kd=1;c.kf=A(20);B(c);}Ge(b,Id);Pj(a.lB,a.rc);b=a.rc;Gb(b.lp);b.m9=null;B5.bb(3042);},
Pr=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.kR=0;if(b instanceof BJ){d=b.kz;e=0;f=d.ke;while(true){if(e>=f)break a;if(e>=d.ke){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,e,10);E(b,b.j_,A(19));e=d.ke;J(b,b.j_,e,10);d=new I;g=b.ka;h=g.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0)){d.kb=L(g.data,0,f);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}b=d.ki.data[e];if(b!==c)b:{b.kR=0;if(b instanceof BJ){j=b.kz;i=0;k=j.ke;while(true){if(i>=k)break b;if
(i>=j.ke){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,i,10);E(b,b.j_,A(19));e=j.ke;J(b,b.j_,e,10);d=new I;g=b.ka;h=g.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0)){d.kb=L(g.data,0,f);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}b=j.ki.data[i];if(b!==c)c:{b.kR=0;if(b instanceof BJ){l=b.kz;m=0;n=l.ke;while(true){if(m>=n)break c;if(m>=l.ke){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,m,10);E(b,b.j_,A(19));e=l.ke;J(b,b.j_,e,10);d=new I;g=b.ka;h=g.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0))
{d.kb=L(g.data,0,f);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}b=l.ki.data[m];if(b!==c)d:{b.kR=0;if(b instanceof BJ){b=b.kz;o=0;p=b.ke;while(true){if(o>=p)break d;if(o>=b.ke){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,o,10);E(c,c.j_,A(19));e=b.ke;J(c,c.j_,e,10);b=new I;g=c.ka;h=g.data;f=c.j_;i=h.length;if(f>=0&&f<=(i-0|0)){b.kb=L(g.data,0,f);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;b.kc=1;b.kd=1;B(b);}q=b.ki.data[o];if(q!==c)e:{q.kR=0;if(q instanceof BJ){r=q.kz;s=0;t=r.ke;while(true){if(s>=t)break e;if
(s>=r.ke){c=new H;b=new K;Bu(b);b.ka=G(16);BZ(b,b.j_,A(18));J(b,b.j_,s,10);BZ(b,b.j_,A(19));e=r.ke;J(b,b.j_,e,10);d=new I;g=b.ka;h=g.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0)){d.kb=L(g.data,0,f);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}q=r.ki.data[s];if(q!==c)f:{q.kR=0;if(q instanceof BJ){q=q.kz;u=0;v=q.ke;while(true){if(u>=v)break f;if(u>=q.ke){c=new H;b=new K;D1(b,16);Cb(b,b.j_,A(18));IM(b,u,10);Cb(b,b.j_,A(19));IM(b,q.ke,10);d=new I;g=b.ka;h=g.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0)){d.kb
=L(g.data,0,f);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}w=q.ki.data[u];if(w!==c)g:{w.kR=0;if(w instanceof BJ){w=w.kz;x=0;y=w.ke;while(true){if(x>=y)break g;if(x>=w.ke){c=new H;b=new K;Fc(b);JK(b,A(18));IR(b,x);JK(b,A(19));IR(b,w.ke);d=new I;g=b.ka;h=g.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0)){d.kb=L(g.data,0,f);He(c,d);B(c);}b=new H;b.kc=1;b.kd=1;B(b);}z=w.ki.data[x];if(z!==c)h:{z.kR=0;if(z instanceof BJ){z=z.kz;ba=0;bb=z.ke;while(true){if(ba>=bb)break h;if(ba>=z.ke)B(No(Et(Fn(FD(Fn(FD(EF(),
A(18)),ba),A(19)),z.ke))));bc=z.ki.data[ba];if(bc!==c)i:{Fi(bc,0);if(bc instanceof BJ){bc=bc.kz;bd=0;be=bc.ke;while(true){if(bd>=be)break i;Pr(a,Q(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
AOf=(a,b)=>{let c,d,e,f,g;c=0;d=a.r$.data.length;while(c<d){e=a.r$.data;f=e[c];if(a.td.data[c])e[c]=Qm(a,f,a.p$.data[c],a.qb.data[c],c);else if(f!==null){e[c]=null;N$(a,f,a.p$.data[c],a.qb.data[c],c);}c=c+1|0;}g=HL;if(!(g!==Nk&&g!==M0&&g!==g))a.sF=Qm(a,a.sF,a.sd,a.se,(-1));RS(a.lB,b);},
Qm=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.mb;g=c;h=d;f.kh=g;f.kg=h;E9(a.ma,f);f=a.mb;g=f.kh;h=f.kg;i=a.lB;f.kh=g;f.kg=h;DK(i,f);f=a.lB;i=a.mb;j=Iq(f,i.kh,i.kg,1);if(j===b)return b;if(b!==null){CE();i=Bw;d=BF(i,M(Bb));k=d<0?null:i.kY.data[d];if(k===null){k=new CJ;i=new Bh;i.kF=0;i.ki=R(C,4);k.kw=i;k.k6=100;a:{try{i=CS(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{i=CP(M(Bb),null);CU(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}i
=null;}k.kQ=i;if(i===null){b=new BA;i=new K;i.ka=G(16);E(i,i.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);f=M(Bb).kl;E(i,i.j_,f);f=new I;l=i.ka;m=l.data;d=i.j_;e=m.length;if(d>=0&&d<=(e-0|0)){f.kb=L(l.data,0,d);b.kc=1;b.kd=1;b.kf=f;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(Bb),k);}f=k.kw;c=f.ke;if(c){if(!c){b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);}c=c-1|0;f.ke=c;l=f.ki.data;f=l[c];l[c]=null;}else b:{try{f=C6(k.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){f=$$je;}else{throw $$e;}}i
=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));n=k.kQ.lV.lU;if(n.kl===null)n.kl=W(n.ks.$meta.name);k=n.kl;E(b,b.j_,k);k=new I;l=b.ka;m=l.data;d=b.j_;e=m.length;if(d>=0&&d<=(e-0|0)){k.kb=L(l.data,0,d);i.kc=1;i.kd=1;i.kf=k;i.lG=f;B(i);}b=new H;b.kc=1;b.kd=1;B(b);}f=f;f.mJ=Jb;f.kV=a;i=a.mb;f.ob=i.kh;f.oc=i.kg;f.oR=e;f.lH=j;Eg(b,f);i=Bw;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BD;k.ks=o;p=k;o.classObject=p;}}c=BF(i,k);i=c<0?null:i.kY.data[c];if(i!==null){k=i.kw;if(k.ke<i.k6){S(k,f);c
=i.k3;d=i.kw.ke;if(c>d)d=c;i.k3=d;if(BC(f,BB)){f=f;f.kV=null;f.ll=null;f.lm=null;f.lv=0;f.lr=1;f.ld=0;f.lu=0;f.li=0;f.lH=null;f.lz=(-1);}}else if(BC(f,BB)){f=f;f.kV=null;f.ll=null;f.lm=null;f.lv=0;f.lr=1;f.ld=0;f.lu=0;f.li=0;f.lH=null;f.lz=(-1);}}}if(j!==null){CE();i=Bw;d=BF(i,M(Bb));k=d<0?null:i.kY.data[d];if(k===null){k=new CJ;i=new Bh;i.kF=0;i.ki=R(C,4);k.kw=i;k.k6=100;c:{try{i=CS(M(Bb),null);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{i=CP(M(Bb),null);CU(i,1);break c;}catch
($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}i=null;}k.kQ=i;if(i===null){b=new BA;i=new K;i.ka=G(16);E(i,i.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);f=M(Bb).kl;E(i,i.j_,f);f=new I;l=i.ka;m=l.data;d=i.j_;e=m.length;if(d>=0&&d<=(e-0|0)){f.kb=L(l.data,0,d);b.kc=1;b.kd=1;b.kf=f;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(Bb),k);}f=k.kw;c=f.ke;if(c){if(!c){b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);}c=c-1|0;f.ke=c;l=f.ki.data;f=l[c];l[c]=null;}else d:{try{f=C6(k.kQ,null);break d;}catch
($$e){$$je=Bc($$e);if($$je instanceof BG){f=$$je;}else{throw $$e;}}i=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));n=k.kQ.lV.lU;if(n.kl===null)n.kl=W(n.ks.$meta.name);k=n.kl;E(b,b.j_,k);k=new I;l=b.ka;m=l.data;d=b.j_;e=m.length;if(d>=0&&d<=(e-0|0)){k.kb=L(l.data,0,d);i.kc=1;i.kd=1;i.kf=k;i.lG=f;B(i);}b=new H;b.kc=1;b.kd=1;B(b);}f=f;f.mJ=Nn;f.kV=a;i=a.mb;f.ob=i.kh;f.oc=i.kg;f.oR=e;f.lH=b;Eg(j,f);b=Bw;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BD;i.ks=k;o=i;k.classObject=o;}}c=BF(b,
i);b=c<0?null:b.kY.data[c];if(b!==null){i=b.kw;if(i.ke<b.k6){S(i,f);c=b.k3;d=b.kw.ke;if(c>d)d=c;b.k3=d;if(BC(f,BB)){b=f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.lH=null;b.lz=(-1);}}else if(BC(f,BB)){b=f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.lH=null;b.lz=(-1);}}}return j;},
N$=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.mb;g=c;h=d;f.kh=g;f.kg=h;E9(a.ma,f);CE();i=Bw;d=BF(i,M(Bb));j=d<0?null:i.kY.data[d];if(j===null){j=new CJ;i=new Bh;i.kF=0;i.ki=R(C,4);j.kw=i;j.k6=100;a:{try{i=CS(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{i=CP(M(Bb),null);CU(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}i=null;}j.kQ=i;if(i===null){b=new BA;i=new K;i.ka=G(16);E(i,i.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);f
=M(Bb).kl;E(i,i.j_,f);f=new I;k=i.ka;l=k.data;d=i.j_;e=l.length;if(d>=0&&d<=(e-0|0)){f.kb=L(k.data,0,d);b.kc=1;b.kd=1;b.kf=f;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(Bb),j);}f=j.kw;c=f.ke;if(c){if(!c){b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);}c=c-1|0;f.ke=c;k=f.ki.data;f=k[c];k[c]=null;}else b:{try{f=C6(j.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){f=$$je;}else{throw $$e;}}i=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));m=j.kQ.lV.lU;if(m.kl===null)m.kl=W(m.ks.$meta.name);j=m.kl;E(b,b.j_,j);j=
new I;k=b.ka;l=k.data;d=b.j_;e=l.length;if(d>=0&&d<=(e-0|0)){j.kb=L(k.data,0,d);i.kc=1;i.kd=1;i.kf=j;i.lG=f;B(i);}b=new H;b.kc=1;b.kd=1;B(b);}f=f;f.mJ=Jb;f.kV=a;i=a.mb;f.ob=i.kh;f.oc=i.kg;f.oR=e;f.lH=b;Eg(b,f);b=Bw;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BD;i.ks=j;n=i;j.classObject=n;}}c=BF(b,i);b=c<0?null:b.kY.data[c];if(b!==null){i=b.kw;if(i.ke<b.k6){S(i,f);c=b.k3;d=b.kw.ke;if(c>d)d=c;b.k3=d;if(BC(f,BB)){b=f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=
0;b.lH=null;b.lz=(-1);}}else if(BC(f,BB)){b=f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.lH=null;b.lz=(-1);}}},
Og=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;if(!SW(a,b,c))return 0;a.td.data[d]=1;a.p$.data[d]=b;a.qb.data[d]=c;f=a.mb;g=b;h=c;f.kh=g;f.kg=h;E9(a.ma,f);CE();i=Bw;c=BF(i,M(Bb));j=c<0?null:i.kY.data[c];if(j===null){j=new CJ;i=new Bh;i.kF=0;i.ki=R(C,4);j.kw=i;j.k6=100;a:{try{i=CS(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{i=CP(M(Bb),null);CU(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}i=null;}j.kQ=i;if(i===null){i=new BA;j=new K;j.ka
=G(16);E(j,j.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);f=M(Bb).kl;E(j,j.j_,f);f=new I;k=j.ka;l=k.data;c=j.j_;d=l.length;if(c>=0&&c<=(d-0|0)){f.kb=L(k.data,0,c);i.kc=1;i.kd=1;i.kf=f;B(i);}f=new H;f.kc=1;f.kd=1;B(f);}Ci(Bw,M(Bb),j);}f=j.kw;b=f.ke;if(b){if(!b){f=new BO;f.kc=1;f.kd=1;f.kf=A(22);B(f);}b=b-1|0;f.ke=b;k=f.ki.data;f=k[b];k[b]=null;}else b:{try{f=C6(j.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){i=$$je;}else{throw $$e;}}m=new T;f=new K;f.ka=G(16);E(f,f.j_,A(23));n
=j.kQ.lV.lU;if(n.kl===null)n.kl=W(n.ks.$meta.name);j=n.kl;E(f,f.j_,j);j=new I;k=f.ka;l=k.data;c=f.j_;d=l.length;if(c>=0&&c<=(d-0|0)){j.kb=L(k.data,0,c);m.kc=1;m.kd=1;m.kf=j;m.lG=i;B(m);}f=new H;f.kc=1;f.kd=1;B(f);}f=f;f.mJ=I4;f.kV=a;i=a.mb;g=i.kh;f.ob=g;h=i.kg;f.oc=h;f.oR=d;f.lz=e;j=a.lB;i.kh=g;i.kg=h;DK(j,i);i=a.lB;j=a.mb;i=Iq(i,j.kh,j.kg,1);if(i!==null)Eg(i,f);else{i=a.lB;if(i.sq===J$)Eg(i,f);}o=f.ld;i=Bw;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BD;j.ks=m;p=j;m.classObject
=p;}}b=BF(i,j);i=b<0?null:i.kY.data[b];if(i!==null){j=i.kw;if(j.ke<i.k6){S(j,f);b=i.k3;c=i.kw.ke;if(b>c)c=b;i.k3=c;if(BC(f,BB)){f=f;f.kV=null;f.ll=null;f.lm=null;f.lv=0;f.lr=1;f.ld=0;f.lu=0;f.li=0;f.lH=null;f.lz=(-1);}}else if(BC(f,BB)){f=f;f.kV=null;f.ll=null;f.lm=null;f.lv=0;f.lr=1;f.ld=0;f.lu=0;f.li=0;f.lH=null;f.lz=(-1);}}return o;},
TV=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a.p$.data[d]=b;a.qb.data[d]=c;a.sd=b;a.se=c;if(!a.p2.ke)return 0;e=a.mb;f=b;g=c;e.kh=f;e.kg=g;E9(a.ma,e);CE();h=Bw;c=BF(h,M(Bb));i=c<0?null:h.kY.data[c];if(i===null){i=new CJ;h=new Bh;h.kF=0;h.ki=R(C,4);i.kw=h;i.k6=100;a:{try{h=CS(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{h=CP(M(Bb),null);CU(h,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}h=null;}i.kQ=h;if(h===null){h=new BA;i=new K;i.ka
=G(16);E(i,i.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);e=M(Bb).kl;E(i,i.j_,e);e=new I;j=i.ka;k=j.data;c=i.j_;d=k.length;if(c>=0&&c<=(d-0|0)){e.kb=L(j.data,0,c);h.kc=1;h.kd=1;h.kf=e;B(h);}e=new H;e.kc=1;e.kd=1;B(e);}Ci(Bw,M(Bb),i);}e=i.kw;b=e.ke;if(b){if(!b){e=new BO;e.kc=1;e.kd=1;e.kf=A(22);B(e);}b=b-1|0;e.ke=b;j=e.ki.data;e=j[b];j[b]=null;}else b:{try{e=C6(i.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){h=$$je;}else{throw $$e;}}l=new T;e=new K;e.ka=G(16);E(e,e.j_,A(23));m
=i.kQ.lV.lU;if(m.kl===null)m.kl=W(m.ks.$meta.name);i=m.kl;E(e,e.j_,i);i=new I;j=e.ka;k=j.data;c=e.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);l.kc=1;l.kd=1;l.kf=i;l.lG=h;B(l);}e=new H;e.kc=1;e.kd=1;B(e);}e=e;e.mJ=Ja;e.kV=a;h=a.mb;e.ob=h.kh;e.oc=h.kg;e.oR=d;h=a.p2;Cv(h);j=h.ki;h.nY=j;h.mP=h.mP+1|0;j=j;n=0;o=h.ke;while(n<o){i=j.data[n];if(i.sA==d&&Ly(h,i,1)){e.ll=i.rh;e.lm=i.qw;if(ID(i.rw,e))e.ld=1;}n=n+1|0;}FI(h);p=e.ld;h=Bw;l=e.constructor;if(l===null)i=null;else{i=l.classObject;if(i===null){i=new BD;i.ks
=l;q=i;l.classObject=q;}}b=BF(h,i);h=b<0?null:h.kY.data[b];if(h!==null){i=h.kw;if(i.ke<h.k6){S(i,e);b=h.k3;c=h.kw.ke;if(b>c)c=b;h.k3=c;if(BC(e,BB)){e=e;e.kV=null;e.ll=null;e.lm=null;e.lv=0;e.lr=1;e.ld=0;e.lu=0;e.li=0;e.lH=null;e.lz=(-1);}}else if(BC(e,BB)){e=e;e.kV=null;e.ll=null;e.lm=null;e.lv=0;e.lr=1;e.ld=0;e.lu=0;e.li=0;e.lH=null;e.lz=(-1);}}return p;},
Mm=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;a.td.data[d]=0;a.p$.data[d]=b;a.qb.data[d]=c;if(!a.p2.ke)return 0;f=a.mb;g=b;h=c;f.kh=g;f.kg=h;E9(a.ma,f);CE();i=Bw;c=BF(i,M(Bb));j=c<0?null:i.kY.data[c];if(j===null){j=new CJ;i=new Bh;i.kF=0;i.ki=R(C,4);j.kw=i;j.k6=100;a:{try{i=CS(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{i=CP(M(Bb),null);CU(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}i=null;}j.kQ=i;if(i===null){i=new BA;j
=new K;j.ka=G(16);E(j,j.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);f=M(Bb).kl;E(j,j.j_,f);f=new I;k=j.ka;l=k.data;c=j.j_;d=l.length;if(c>=0&&c<=(d-0|0)){f.kb=L(k.data,0,c);i.kc=1;i.kd=1;i.kf=f;B(i);}f=new H;f.kc=1;f.kd=1;B(f);}Ci(Bw,M(Bb),j);}f=j.kw;b=f.ke;if(b){if(!b){f=new BO;f.kc=1;f.kd=1;f.kf=A(22);B(f);}b=b-1|0;f.ke=b;k=f.ki.data;f=k[b];k[b]=null;}else b:{try{f=C6(j.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){i=$$je;}else{throw $$e;}}m=new T;f=new K;f.ka=G(16);E(f,
f.j_,A(23));n=j.kQ.lV.lU;if(n.kl===null)n.kl=W(n.ks.$meta.name);j=n.kl;E(f,f.j_,j);j=new I;k=f.ka;l=k.data;c=f.j_;d=l.length;if(c>=0&&c<=(d-0|0)){j.kb=L(k.data,0,c);m.kc=1;m.kd=1;m.kf=j;m.lG=i;B(m);}f=new H;f.kc=1;f.kd=1;B(f);}f=f;f.mJ=Ht;f.kV=a;i=a.mb;f.ob=i.kh;f.oc=i.kg;f.oR=d;f.lz=e;i=a.p2;Cv(i);k=i.ki;i.nY=k;i.mP=i.mP+1|0;k=k;o=0;p=i.ke;while(o<p){j=k.data[o];if(j.sA==d&&j.uH==e){Cv(i);if(I0(i,j,1)){f.ll=j.rh;f.lm=j.qw;if(ID(j.rw,f))f.ld=1;m=Bw;n=j.constructor;if(n===null)q=null;else{q=n.classObject;if(q
===null){q=new BD;q.ks=n;r=q;n.classObject=r;}}b=BF(m,q);m=b<0?null:m.kY.data[b];if(m!==null){q=m.kw;if(q.ke<m.k6){S(q,j);b=m.k3;c=m.kw.ke;if(b>c)c=b;m.k3=c;if(BC(j,BB))j.bt();}else if(BC(j,BB))j.bt();}}}o=o+1|0;}FI(i);s=f.ld;i=Bw;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BD;j.ks=m;q=j;m.classObject=q;}}b=BF(i,j);i=b<0?null:i.kY.data[b];if(i!==null){j=i.kw;if(j.ke<i.k6){S(j,f);b=i.k3;c=i.kw.ke;if(b>c)c=b;i.k3=c;if(BC(f,BB)){f=f;f.kV=null;f.ll=null;f.lm=null;f.lv=0;f.lr=1;f.ld
=0;f.lu=0;f.li=0;f.lH=null;f.lz=(-1);}}else if(BC(f,BB)){f=f;f.kV=null;f.ll=null;f.lm=null;f.lv=0;f.lr=1;f.ld=0;f.lu=0;f.li=0;f.lH=null;f.lz=(-1);}}return s;},
AEj=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,$$je;a.sd=b;a.se=c;if(!SW(a,b,c))return 0;d=a.mb;e=b;f=c;d.kh=e;d.kg=f;E9(a.ma,d);CE();g=Bw;c=BF(g,M(Bb));h=c<0?null:g.kY.data[c];if(h===null){h=new CJ;g=new Bh;g.kF=0;g.ki=R(C,4);h.kw=g;h.k6=100;a:{try{g=CS(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{g=CP(M(Bb),null);CU(g,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}g=null;}h.kQ=g;if(g===null){g=new BA;h=new K;h.ka=G(16);E(h,h.j_,A(21));if
(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);d=M(Bb).kl;E(h,h.j_,d);d=new I;i=h.ka;j=i.data;c=h.j_;k=j.length;if(c>=0&&c<=(k-0|0)){d.kb=L(i.data,0,c);g.kc=1;g.kd=1;g.kf=d;B(g);}d=new H;d.kc=1;d.kd=1;B(d);}Ci(Bw,M(Bb),h);}d=h.kw;b=d.ke;if(b){if(!b){d=new BO;d.kc=1;d.kd=1;d.kf=A(22);B(d);}b=b-1|0;d.ke=b;i=d.ki.data;d=i[b];i[b]=null;}else b:{try{d=C6(h.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){g=$$je;}else{throw $$e;}}l=new T;d=new K;d.ka=G(16);E(d,d.j_,A(23));m=h.kQ.lV.lU;if(m.kl===
null)m.kl=W(m.ks.$meta.name);h=m.kl;E(d,d.j_,h);h=new I;i=d.ka;j=i.data;c=d.j_;k=j.length;if(c>=0&&c<=(k-0|0)){h.kb=L(i.data,0,c);l.kc=1;l.kd=1;l.kf=h;l.lG=g;B(l);}d=new H;d.kc=1;d.kd=1;B(d);}d=d;d.mJ=Lg;d.kV=a;g=a.mb;e=g.kh;d.ob=e;f=g.kg;d.oc=f;h=a.lB;g.kh=e;g.kg=f;DK(h,g);g=a.lB;h=a.mb;g=Iq(g,h.kh,h.kg,1);if(g===null)g=a.lB;Eg(g,d);n=d.ld;g=Bw;l=d.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new BD;h.ks=l;o=h;l.classObject=o;}}b=BF(g,h);g=b<0?null:g.kY.data[b];if(g!==null){h=g.kw;if(h.ke
<g.k6){S(h,d);b=g.k3;c=g.kw.ke;if(b>c)c=b;g.k3=c;if(BC(d,BB)){d=d;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}else if(BC(d,BB)){d=d;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}return n;},
AN4=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;d=a.qu;if(d===null)d=a.lB;e=a.mb;f=a.sd;g=a.se;e.kh=f;e.kg=g;E9(a.ma,e);CE();h=Bw;i=BF(h,M(Bb));j=i<0?null:h.kY.data[i];if(j===null){j=new CJ;h=new Bh;h.kF=0;h.ki=R(C,4);j.kw=h;j.k6=100;a:{try{h=CS(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{h=CP(M(Bb),null);CU(h,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}h=null;}j.kQ=h;if(h===null){d=new BA;h=new K;h.ka=G(16);E(h,h.j_,A(21));if
(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);e=M(Bb).kl;E(h,h.j_,e);e=new I;k=h.ka;l=k.data;i=h.j_;m=l.length;if(i>=0&&i<=(m-0|0)){e.kb=L(k.data,0,i);d.kc=1;d.kd=1;d.kf=e;B(d);}d=new H;d.kc=1;d.kd=1;B(d);}Ci(Bw,M(Bb),j);}e=j.kw;n=e.ke;if(n){if(!n){d=new BO;d.kc=1;d.kd=1;d.kf=A(22);B(d);}n=n-1|0;e.ke=n;k=e.ki.data;e=k[n];k[n]=null;}else b:{try{e=C6(j.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){e=$$je;}else{throw $$e;}}h=new T;d=new K;d.ka=G(16);E(d,d.j_,A(23));o=j.kQ.lV.lU;if(o.kl===
null)o.kl=W(o.ks.$meta.name);j=o.kl;E(d,d.j_,j);j=new I;k=d.ka;l=k.data;i=d.j_;m=l.length;if(i>=0&&i<=(m-0|0)){j.kb=L(k.data,0,i);h.kc=1;h.kd=1;h.kf=j;h.lG=e;B(h);}d=new H;d.kc=1;d.kd=1;B(d);}e=e;e.mJ=LF;e.kV=a;h=a.mb;e.ob=h.kh;e.oc=h.kg;e.z9=b;e.z8=c;Eg(d,e);p=e.ld;d=Bw;j=e.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BD;h.ks=j;q=h;j.classObject=q;}}n=BF(d,h);d=n<0?null:d.kY.data[n];if(d!==null){h=d.kw;if(h.ke<d.k6){S(h,e);n=d.k3;i=d.kw.ke;if(n>i)i=n;d.k3=i;if(BC(e,BB)){d=e;d.kV=null;d.ll
=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}else if(BC(e,BB)){d=e;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}return p;},
ADp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.p2;Cv(d);e=d.ki;d.nY=e;d.mP=d.mP+1|0;e=e;f=0;g=d.ke;h=null;i=null;j=null;a:while(true){if(f>=g){FI(d);if(c!==null){CE();b=Bw;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BD;d.ks=k;l=d;k.classObject=l;}}m=BF(b,d);b=m<0?null:b.kY.data[m];if(b!==null){d=b.kw;if(d.ke<b.k6){S(d,c);m=b.k3;f=b.kw.ke;if(m>f)f=m;b.k3=f;if(BC(c,BB)){b=c;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.lH=null;b.lz=(-1);}}else if(BC(c,
BB)){b=c;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.lH=null;b.lz=(-1);}}}return;}k=e.data[f];if(k.qw===b){Cv(d);if(I0(d,k,1)){if(c===null){CE();c=Bw;n=BF(c,M(Bb));l=n<0?null:c.kY.data[n];if(l===null){l=new CJ;c=new Bh;c.kF=0;c.ki=R(C,4);l.kw=c;l.k6=100;b:{try{c=CS(M(Bb),h);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{c=CP(M(Bb),i);CU(c,1);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}c=null;}l.kQ=c;if(c===null){b=new BA;c=new K;c.ka
=G(16);E(c,c.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);d=M(Bb).kl;E(c,c.j_,d);d=new I;e=c.ka;o=e.data;f=c.j_;g=o.length;if(f>=0&&f<=(g-0|0)){d.kb=L(e.data,0,f);b.kc=1;b.kd=1;b.kf=d;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(Bb),l);}c:{c=l.kw;m=c.ke;if(m){if(!m)break a;m=m-1|0;c.ke=m;o=c.ki.data;c=o[m];o[m]=null;}else try{c=C6(l.kQ,j);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){c=$$je;d=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));h=l.kQ.lV.lU;if(h.kl===null)h.kl=W(h.ks.$meta.name);k
=h.kl;E(b,b.j_,k);k=new I;e=b.ka;o=e.data;f=b.j_;g=o.length;if(f>=0&&f<=(g-0|0)){k.kb=L(e.data,0,f);d.kc=1;d.kd=1;d.kf=k;d.lG=c;B(d);}b=new H;b.kc=1;b.kd=1;B(b);}else{throw $$e;}}}c=c;c.mJ=Ht;c.kV=a;c.ob=(-2.147483648E9);c.oc=(-2.147483648E9);}c.ll=k.rh;c.lm=k.qw;c.oR=k.sA;c.lz=k.uH;ID(k.rw,c);}}f=f+1|0;}b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);},
C8=(a,b)=>{let c,d,e,f;a:{c=a.lB;d=b.k0;if(d!==null){if(d===c)break a;e=DB(d.kz,b,1);if(e!=(-1)){f=d.kz;Cv(f);f=Di(f,e);d=d.lF;if(d!==null)D5(d,f);f.k0=null;f.x(null);}}S(c.kz,b);b.k0=c;b.x(c.lF);}},
D5=(a,b)=>{let c,d,e;c=0;d=a.r$.data.length;while(c<d){e=a.r$.data;if(b===e[c]){e[c]=null;N$(a,b,a.p$.data[c],a.qb.data[c],c);}c=c+1|0;}if(b===a.sF){a.sF=null;N$(a,b,a.sd,a.se,(-1));}},
ALA=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.n3===b)return 1;CE();c=Bw;d=BF(c,M(C9));e=d<0?null:c.kY.data[d];if(e===null){e=new CJ;c=new Bh;c.kF=0;c.ki=R(C,4);e.kw=c;e.k6=100;a:{try{c=CS(M(C9),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{c=CP(M(C9),null);CU(c,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}c=null;}e.kQ=c;if(c===null){b=new BA;c=new K;c.ka=G(16);E(c,c.j_,A(21));if(M(C9).kl===null)M(C9).kl=W(M(C9).ks.$meta.name);f=M(C9).kl;E(c,
c.j_,f);f=new I;g=c.ka;h=g.data;d=c.j_;i=h.length;if(d>=0&&d<=(i-0|0)){f.kb=L(g.data,0,d);b.kc=1;b.kd=1;b.kf=f;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(C9),e);}f=e.kw;j=f.ke;if(j){if(!j){b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);}j=j-1|0;f.ke=j;g=f.ki.data;f=g[j];g[j]=null;}else b:{try{f=C6(e.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){f=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));k=e.kQ.lV.lU;if(k.kl===null)k.kl=W(k.ks.$meta.name);e=k.kl;E(b,b.j_,e);e=new I;g=b.ka;h
=g.data;d=b.j_;i=h.length;if(d>=0&&d<=(i-0|0)){e.kb=L(g.data,0,d);c.kc=1;c.kd=1;c.kf=e;c.lG=f;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}f=f;f.kV=a;f.xE=My;c=a.n3;if(c!==null){f.sC=0;f.oM=b;c.bl(f);}j=f.li?0:1;if(j){a.n3=b;if(b!==null){f.sC=1;f.oM=c;b.bl(f);j=f.li?0:1;if(!j)a.n3=c;}}b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.ks=e;l=c;e.classObject=l;}}d=BF(b,c);b=d<0?null:b.kY.data[d];if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if(d>i)i=d;b.k3=i;if(BC(f,BB)){b=
f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.oM=null;}}else if(BC(f,BB)){b=f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.oM=null;}}return j;},
AI2=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.qu===b)return 1;CE();c=Bw;d=BF(c,M(C9));e=d<0?null:c.kY.data[d];if(e===null){e=new CJ;c=new Bh;c.kF=0;c.ki=R(C,4);e.kw=c;e.k6=100;a:{try{c=CS(M(C9),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{c=CP(M(C9),null);CU(c,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}c=null;}e.kQ=c;if(c===null){b=new BA;c=new K;c.ka=G(16);E(c,c.j_,A(21));if(M(C9).kl===null)M(C9).kl=W(M(C9).ks.$meta.name);f=M(C9).kl;E(c,
c.j_,f);f=new I;g=c.ka;h=g.data;d=c.j_;i=h.length;if(d>=0&&d<=(i-0|0)){f.kb=L(g.data,0,d);b.kc=1;b.kd=1;b.kf=f;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(C9),e);}f=e.kw;j=f.ke;if(j){if(!j){b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);}j=j-1|0;f.ke=j;g=f.ki.data;f=g[j];g[j]=null;}else b:{try{f=C6(e.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){f=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));k=e.kQ.lV.lU;if(k.kl===null)k.kl=W(k.ks.$meta.name);e=k.kl;E(b,b.j_,e);e=new I;g=b.ka;h
=g.data;d=b.j_;i=h.length;if(d>=0&&d<=(i-0|0)){e.kb=L(g.data,0,d);c.kc=1;c.kd=1;c.kf=e;c.lG=f;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}f=f;f.kV=a;f.xE=NN;c=a.qu;if(c!==null){f.sC=0;f.oM=b;c.bl(f);}j=f.li?0:1;if(j){a.qu=b;if(b!==null){f.sC=1;f.oM=c;b.bl(f);j=f.li?0:1;if(!j)a.qu=c;}}b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.ks=e;l=c;e.classObject=l;}}d=BF(b,c);b=d<0?null:b.kY.data[d];if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if(d>i)i=d;b.k3=i;if(BC(f,BB)){b=
f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.oM=null;}}else if(BC(f,BB)){b=f;b.kV=null;b.ll=null;b.lm=null;b.lv=0;b.lr=1;b.ld=0;b.lu=0;b.li=0;b.oM=null;}}return j;},
Dk=a=>{return a.ma;},
SW=(a,b,c)=>{let d,e,f,g,h;d=a.ma;e=d.qi;f=e+d.qS|0;g=d.qj;h=g+d.mV|0;c=(B6.lA.height-1|0)-c|0;return b>=e&&b<f&&c>=g&&c<h?1:0;};
let BB=F(0);
function FX(){let a=this;C.call(a);a.kV=null;a.ll=null;a.lm=null;a.lv=0;a.lr=0;a.ld=0;a.lu=0;a.li=0;}
let ARJ=a=>{a.ld=1;},
AKQ=a=>{return a.lr;},
IO=a=>{return a.lu;},
Gm=a=>{return a.li;};
let Dz=F(0);
let B_=F(0);
function BH(){let a=this;C.call(a);a.kt=null;a.kn=0;}
let APL=a=>{return a.kn;},
AFN=a=>{return a.kt;},
YT=(a,b)=>{return a!==b?0:1;};
let HG=F(BH);
let J$=null,Wo=null,AE9=null,XI=null;
let AOW=()=>{let b,c,d;b=new HG;b.kt=A(24);b.kn=0;J$=b;c=new HG;c.kt=A(25);c.kn=1;Wo=c;d=new HG;d.kt=A(26);d.kn=2;AE9=d;XI=V(HG,[b,c,d]);};
function Cm(){let a=this;C.call(a);a.lF=null;a.k0=null;a.wO=null;a.tk=null;a.qH=null;a.zw=null;a.sq=null;a.nF=0;a.kR=0;a.kD=0.0;a.kE=0.0;a.lh=0.0;a.lo=0.0;a.oP=0.0;a.oQ=0.0;a.nL=0.0;a.nM=0.0;a.mR=0.0;a.qd=null;}
let Fg=a=>{let b,c;b=new Li;b.kF=1;b.ki=R(C,0);c=new F5;c.pG=1;c.mS=Ba(0);b.q$=c;a.wO=b;b=new Li;b.kF=1;b.ki=R(C,0);c=new F5;c.pG=1;c.mS=Ba(0);b.q$=c;a.tk=b;b=new Bh;b.kF=1;b.ki=R(C,0);a.qH=b;a.sq=J$;a.nF=1;a.nL=1.0;a.nM=1.0;b=new BM;b.k_=1.0;b.k$=1.0;b.k9=1.0;b.la=1.0;CV(b);a.qd=b;},
AXQ=()=>{let a=new Cm();Fg(a);return a;},
FG=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.qH;if(!c.ke)return;d=a.lF;d!==null&&!d.va;a:{try{e=0;while(e<c.ke){d=Q(c,e);if(d.bx(b)&&e<c.ke){f=Q(c,e)===d?e:DB(c,d,1);if(f!=(-1)){Di(c,f);d.by(null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Bc($$e);if($$je instanceof BA){g=$$je;break a;}else{throw $$e;}}return;}h=a.T();c=new BA;d=new K;d.ka=G(16);E(d,d.j_,A(27));i=h.kb.length;e=128;if(i<e)e=i;j=Cj(h,0,e);E(d,d.j_,j);j=new I;k=d.ka;l=k.data;e=d.j_;m=l.length;if(e>=0&&e<=(m-0|0)){j.kb=L(k.data,0,e);c.kc=1;c.kd=1;c.kf
=j;c.lG=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);},
Eg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.kV===null)b.kV=a.lF;b.ll=a;CE();c=Bw;d=BF(c,M(Bh));e=d<0?null:c.kY.data[d];if(e===null){e=new CJ;c=new Bh;c.kF=0;c.ki=R(C,4);e.kw=c;e.k6=100;a:{try{c=CS(M(Bh),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{c=CP(M(Bh),null);CU(c,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}c=null;}e.kQ=c;if(c===null){b=new BA;c=new K;c.ka=G(16);E(c,c.j_,A(21));if(M(Bh).kl===null)M(Bh).kl=W(M(Bh).ks.$meta.name);f
=M(Bh).kl;E(c,c.j_,f);f=new I;g=c.ka;h=g.data;d=c.j_;i=h.length;if(d>=0&&d<=(i-0|0)){f.kb=L(g.data,0,d);b.kc=1;b.kd=1;b.kf=f;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(Bh),e);}f=e.kw;j=f.ke;if(j){if(!j){b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);}j=j-1|0;f.ke=j;g=f.ki.data;f=g[j];g[j]=null;}else b:{try{f=C6(e.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){f=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));k=e.kQ.lV.lU;if(k.kl===null)k.kl=W(k.ks.$meta.name);e=k.kl;E(b,b.j_,e);e=
new I;g=b.ka;h=g.data;d=b.j_;i=h.length;if(d>=0&&d<=(i-0|0)){e.kb=L(g.data,0,d);c.kc=1;c.kd=1;c.kf=e;c.lG=f;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}f=f;c=a.k0;while(c!==null){S(f,c);c=c.k0;}c:{try{g=f.ki;j=f.ke-1|0;}catch($$e){$$je=Bc($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;Jp(g.data[j],b,1);if(IO(b))break;j=j+(-1)|0;}j=Gm(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.ki;d=0;i=f.ke;b=null;if(d>i){b=new Bl;b.kc=1;b.kd=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ke=0;b=Bw;m=f.constructor;if(m
===null)k=null;else{k=m.classObject;if(k===null){k=new BD;k.ks=m;c=k;m.classObject=c;}}d=BF(b,k);b=d<0?null:b.kY.data[d];if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if(d>i)i=d;b.k3=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}e:{try{Jp(a,b,1);if(!IO(b))break e;j=Gm(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.ki;d=0;i=f.ke;b=null;if(d>i){b=new Bl;b.kc=1;b.kd=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ke=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===
null){c=new BD;c.ks=e;m=c;e.classObject=m;}}d=BF(b,c);b=d<0?null:b.kY.data[d];if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if(d>i)i=d;b.k3=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}f:{try{Jp(a,b,0);if(AKQ(b))break f;j=Gm(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.ki;d=0;i=f.ke;b=null;if(d>i){b=new Bl;b.kc=1;b.kd=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ke=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.ks=e;m=c;e.classObject=m;}}d
=BF(b,c);b=d<0?null:b.kY.data[d];if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if(d>i)i=d;b.k3=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}g:{try{if(!IO(b))break g;j=Gm(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.ki;d=0;i=f.ke;b=null;if(d>i){b=new Bl;b.kc=1;b.kd=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ke=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.ks=e;m=c;e.classObject=m;}}d=BF(b,c);b=d<0?null:b.kY.data[d];if(b!==null){c=b.kw;if
(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if(d>i)i=d;b.k3=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}try{j=0;d=f.ke;}catch($$e){$$je=Bc($$e);b=$$je;break c;}h:{try{while(j<d){Jp(g.data[j],b,0);if(IO(b))break h;j=j+1|0;}j=Gm(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.ki;d=0;i=f.ke;b=null;if(d>i){b=new Bl;b.kc=1;b.kd=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ke=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.ks=e;m=c;e.classObject=m;}}d=BF(b,c);b=d<0
?null:b.kY.data[d];if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if(d>i)i=d;b.k3=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}try{j=Gm(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.ki;d=0;i=f.ke;b=null;if(d>i){b=new Bl;b.kc=1;b.kd=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ke=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.ks=e;m=c;e.classObject=m;}}d=BF(b,c);b=d<0?null:b.kY.data[d];if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,f);d=b.k3;i=b.kw.ke;if
(d>i)i=d;b.k3=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}g=f.ki;j=0;d=f.ke;c=null;if(j>d){b=new Bl;b.kc=1;b.kd=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.ke=0;if(f===null){f=new Bl;f.kc=1;f.kd=1;f.kf=A(28);B(f);}c=Bw;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BD;e.ks=m;k=e;m.classObject=k;}}j=BF(c,e);c=j<0?null:c.kY.data[j];if(c!==null){e=c.kw;if(e.ke<c.k6){S(e,f);j=c.k3;d=c.kw.ke;if(j>d)d=j;c.k3=d;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}B(b);},
Jp=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.ll===null){b=new Bl;b.kc=1;b.kd=1;b.kf=A(29);B(b);}d=!c?a.wO:a.tk;if(!d.ke)return b.li;b.lm=a;b.lv=c;if(b.kV===null)b.kV=a.lF;a:{try{ANb(d);e=0;f=d.ke;while(e<f){if(ID(Q(d,e),b))ARJ(b);e=e+1|0;}APf(d);}catch($$e){$$je=Bc($$e);if($$je instanceof BA){g=$$je;break a;}else{throw $$e;}}return b.li;}h=a.T();d=new BA;b=new K;b.ka=G(16);E(b,b.j_,A(27));i=h.kb.length;e=128;if(i<e)e=i;h=Cj(h,0,e);E(b,b.j_,h);h=new I;j=b.ka;k=j.data;e=b.j_;f=k.length;if(e>=0&&e<=(f-0|0)){h.kb
=L(j.data,0,e);d.kc=1;d.kd=1;d.kf=h;d.lG=g;B(d);}b=new H;b.kc=1;b.kd=1;B(b);},
R9=(a,b,c,d)=>{if(d&&a.sq!==J$)return null;if(!a.nF)return null;if(!(b>=0.0&&b<a.lh&&c>=0.0&&c<a.lo))a=null;return a;},
AU0=a=>{return a.lF;},
AOM=(a,b)=>{a.lF=b;},
AU5=(a,b)=>{a.k0=b;},
AUL=a=>{return a.nF;},
Cg=a=>{return a.kD;},
Da=a=>{return a.kE;},
Dd=(a,b,c)=>{if(!(a.kD===b&&a.kE===c)){a.kD=b;a.kE=c;}},
AEg=(a,b,c,d)=>{if(d&16)b=b-a.lh;else if(!(d&8))b=b-a.lh/2.0;if(d&2)c=c-a.lo;else if(!(d&4))c=c-a.lo/2.0;if(!(a.kD===b&&a.kE===c)){a.kD=b;a.kE=c;}},
DT=a=>{return a.lh;},
Q0=a=>{return a.lo;},
AX9=a=>{return;},
AUD=a=>{return;},
AUO=a=>{return;},
Ir=(a,b,c,d,e)=>{if(!(a.kD===b&&a.kE===c)){a.kD=b;a.kE=c;}if(!(a.lh===d&&a.lo===e)){a.lh=d;a.lo=e;}},
I7=(a,b)=>{if(b!==0.0)a.mR=(a.mR+b)%360.0;},
G3=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bl;c.kc=1;c.kd=1;c.kf=A(30);B(c);}c=a.k0;if(c===null)return 0;d=c.kz;e=d.ke;if(e<=1)return 0;f=e-1|0;if(b<f)f=b;if(f<e){if(d.ki.data[f]===a)return 0;Cv(d);if(!I0(d,a,1))return 0;Cv(d);SZ(d,f,a);return 1;}g=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,f,10);E(c,c.j_,A(19));b=d.ke;J(c,c.j_,b,10);d=new I;h=c.ka;i=h.data;f=c.j_;e=i.length;if(f>=0&&f<=(e-0|0)){d.kb=L(h.data,0,f);g.kc=1;g.kd=1;g.kf=d;B(g);}c=new H;c.kc=1;c.kd=1;B(c);},
UO=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.k0;if(c!==null){d=c.k0;if(d!==null){e=d.k0;if(e!==null){f=e.k0;if(f!==null){g=f.k0;if(g!==null){h=g.k0;if(h!==null){i=h.k0;if(i!==null){j=i.k0;if(j!==null){k=j.k0;if(k!==null)UO(k,b);DK(j,b);}DK(i,b);}DK(h,b);}DK(g,b);}DK(f,b);}DK(e,b);}DK(d,b);}DK(c,b);}DK(a,b);return b;},
DK=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.mR;d=a.nL;e=a.nM;f=a.kD;g=a.kE;if(c!==0.0){h=c*0.01745329238474369;i=Y4(h);j=J0(h);k=a.oP;l=a.oQ;m=b.kh-f-k;n=b.kg-g-l;b.kh=(m*i+n*j)/d+k;b.kg=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.kh=b.kh-f;b.kg=b.kg-g;}else{k=a.oP;l=a.oQ;b.kh=(b.kh-f-k)/d+k;b.kg=(b.kg-g-l)/e+l;}return b;},
ANR=(a,b)=>{VG(a,b);},
VG=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.kR)return;c=Id;d=b.m9;if(d!==c){if(d===null){b=new BO;b.kc=1;b.kd=1;b.kf=A(31);B(b);}if(!b.s_){c=new BO;c.kc=1;c.kd=1;c.kf=A(32);B(c);}Gb(b.lp);b.m9=null;Ge(b,c);}c=a.lF;if(c!==null){d=c.wT;c=b.vn;c.k_=d.k_;c.k$=d.k$;c.k9=d.k9;c.la=d.la;}e=a.kD;f=a.kE;g=a.oP;h=a.oQ;i=a.lh;j=a.lo;k=a.nL;l=a.nM;m=a.mR;c=b.vn;AJx(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
Fi=(a,b)=>{a.kR=b;if(b)BS=1;},
AWM=a=>{return a.kR;},
S$=a=>{let b,c,d,e;b=a.zw;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.ks=b;d=c;b.classObject=d;}}if(c.kl===null)c.kl=W(c.ks.$meta.name);b=c.kl;e=Fa(b,46,b.kb.length-1|0);if(e!=(-1))b=Cj(b,e+1|0,b.kb.length);}return b;};
let ME=F(0);
function BJ(){let a=this;Cm.call(a);a.kz=null;a.tZ=null;a.uN=null;a.p0=null;a.nN=0;a.zX=null;}
let LE=null;
let RS=(a,b)=>{let c,d,e,f;FG(a,b);c=a.kz;Cv(c);d=c.ki;c.nY=d;c.mP=c.mP+1|0;d=d;e=0;f=a.kz.ke;while(e<f){d.data[e].be(b);e=e+1|0;}FI(a.kz);},
AH9=(a,b,c)=>{let d;if(a.nN){d=KW(a);Dm(a.p0,b.po.lC);if(b.mH)Eo(b);Dm(b.po,d.lC);if(b.mH)Gx(b);}Qp(a,b,c);if(a.nN){d=a.p0;if(b.mH)Eo(b);Dm(b.po,d.lC);if(b.mH)Gx(b);}},
Qp=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.qd.la;d=a.kz;Cv(d);e=d.ki;d.nY=e;d.mP=d.mP+1|0;f=e;g=a.zX;if(g===null){if(a.nN){h=0;i=d.ke;while(h<i){j=f.data[h];if(j.nF)j.bQ(b,c);h=h+1|0;}}else{k=a.kD;l=a.kE;a.kD=0.0;a.kE=0.0;h=0;i=d.ke;while(h<i){j=f.data[h];if(j.nF){m=j.kD;n=j.kE;j.kD=m+k;j.kE=n+l;j.bQ(b,c);j.kD=m;j.kE=n;}h=h+1|0;}a.kD=k;a.kE=l;}}else{o=g.nB;p=o+g.nD;q=g.nA;r=q+g.nt;if(a.nN){s=0;i=d.ke;while(s<i){j=f.data[s];if(j.nF){m=j.kD;n=j.kE;if(m<=p&&n<=r&&m+j.lh>=o&&n+j.lo>=q)j.bQ(b,c);}s=s
+1|0;}}else{k=a.kD;l=a.kE;a.kD=0.0;a.kE=0.0;s=0;i=d.ke;while(s<i){j=f.data[s];if(j.nF){m=j.kD;n=j.kE;if(m<=p&&n<=r&&m+j.lh>=o&&n+j.lo>=q){j.kD=m+k;j.kE=n+l;j.bQ(b,c);j.kD=m;j.kE=n;}}s=s+1|0;}a.kD=k;a.kE=l;}}FI(d);},
Pj=(a,b)=>{let c;VG(a,b);if(a.nN){c=KW(a);Dm(a.p0,b.rG.lC);Dm(b.rG,c.lC);b.o0=1;c=b.m9;if(c!==null){Gb(b.lp);b.m9=null;Ge(b,c);}}AAt(a,b);if(a.nN){c=a.p0;Dm(b.rG,c.lC);b.o0=1;}},
AAt=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.kz;Cv(c);d=c.ki;c.nY=d;c.mP=c.mP+1|0;e=d;if(a.nN){f=0;g=c.ke;while(f<g){h=e.data[f];if(h.nF&&!(!h.kR&&!(h instanceof BJ)))h.Z(b);f=f+1|0;}h=b.m9;if(h!==null){Gb(b.lp);b.m9=null;Ge(b,h);}}else{i=a.kD;j=a.kE;a.kD=0.0;a.kE=0.0;k=0;g=c.ke;while(k<g){h=e.data[k];if(h.nF&&!(!h.kR&&!(h instanceof BJ))){l=h.kD;m=h.kE;h.kD=l+i;h.kE=m+j;h.Z(b);h.kD=l;h.kE=m;}k=k+1|0;}a.kD=i;a.kE=j;}FI(c);},
KW=a=>{let b,c,d,e,f;b=a.tZ;c=a.oP;d=a.oQ;AGK(b,a.kD+c,a.kE+d,a.mR,a.nL,a.nM);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.pi=b.pi+b.pj*c+b.ph*e;b.pk=b.pk+b.pl*c+b.pm*e;}f=a.k0;a:{while(true){if(f===null)break a;if(f.nN)break;f=f.k0;}}if(f!==null)AAy(b,f.tZ);AQF(a.uN,b);return a.uN;},
Iq=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.sq===Wo)return null;if(!a.nF)return null;e=LE;f=a.kz;g=f.ki;h=f.ke-1|0;while(true){if(h<0)return R9(a,b,c,d);i=g.data[h];e.kh=b;e.kg=c;DK(i,e);f=i.J(e.kh,e.kg,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AGE=(a,b)=>{let c,d,e;c=b.k0;if(c!==null){if(c===a)return;d=DB(c.kz,b,1);if(d!=(-1)){e=c.kz;Cv(e);e=Di(e,d);c=c.lF;if(c!==null)D5(c,e);e.k0=null;e.x(null);}}S(a.kz,b);b.k0=a;b.x(a.lF);},
AOl=(a,b)=>{let c,d,e,f;a.lF=b;c=a.kz;d=c.ki;e=0;f=c.ke;while(e<f){d.data[e].x(b);e=e+1|0;}},
LO=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.kR=b;if(b)BS=1;a:{if(c){d=a.kz;if(!CI){if(d.kO===null){e=new C7;e.mq=d;e.mt=1;d.kO=e;}e=CQ(d.kO);}else{e=new Cx;e.k5=1;e.lb=d;e.me=1;}b:while(true){if(!e.k5){e=new T;e.kc=1;e.kd=1;e.kf=A(17);B(e);}if(!(e.lZ>=e.lb.ke?0:1))break a;d=Cq(e);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else{d=d;d.kR=b;if(b)BS=1;c:{if(c){d=d.kz;if(CI){f=new Cx;f.k5=1;f.lb=d;f.me=1;}else{if(d.kO===null){g=new C7;g.mq=d;g.mt=1;d.kO=g;}f=CQ(d.kO);}while(true){if(!f.k5){e=new T;e.kc=1;e.kd=1;e.kf=A(17);B(e);}if
(!(f.lZ>=f.lb.ke?0:1))break c;d=Cq(f);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else{d=d;d.kR=b;if(b)BS=1;d:{if(c){d=d.kz;if(CI){h=new Cx;h.k5=1;h.lb=d;h.me=1;}else{if(d.kO===null){g=new C7;g.mq=d;g.mt=1;d.kO=g;}h=CQ(d.kO);}while(true){if(!h.k5){e=new T;e.kc=1;e.kd=1;e.kf=A(17);B(e);}if(!(h.lZ>=h.lb.ke?0:1))break d;d=Cq(h);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else{d=d;d.kR=b;if(b)BS=1;e:{if(c){d=d.kz;if(CI){i=new Cx;i.k5=1;i.lb=d;i.me=1;}else{if(d.kO===null){g=new C7;g.mq=d;g.mt=1;d.kO=g;}i=CQ(d.kO);}while
(true){if(!i.k5){e=new T;e.kc=1;e.kd=1;e.kf=A(17);B(e);}if(!(i.lZ>=i.lb.ke?0:1))break e;d=Cq(i);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else{d=d;d.kR=b;if(b)BS=1;f:{if(c){d=d.kz;if(CI){j=new Cx;j.k5=1;j.lb=d;j.me=1;}else{if(d.kO===null){g=new C7;g.mq=d;g.mt=1;d.kO=g;}j=CQ(d.kO);}while(true){if(!j.k5){e=new T;e.kc=1;e.kd=1;e.kf=A(17);B(e);}if(!(j.lZ>=j.lb.ke?0:1))break f;d=Cq(j);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else{d=d;d.kR=b;if(b)BS=1;g:{if(c){d=d.kz;if(CI){g=new Cx;g.k5=1;g.lb=d;g.me=1;}else{if(d.kO
===null){g=new C7;Bu(g);g.mq=d;g.mt=1;d.kO=g;}g=CQ(d.kO);}while(true){if(!g.k5){e=new T;e.kc=1;e.kd=1;e.kf=A(17);B(e);}if(!(g.lZ>=g.lb.ke?0:1))break g;d=Cq(g);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else{d=d;d.kR=b;if(b)BS=1;h:{if(c){d=d.kz;if(CI){k=new Cx;Bu(k);k.k5=1;k.lb=d;k.me=1;}else{if(d.kO===null)d.kO=LZ(d,1);k=CQ(d.kO);}while(true){if(!k.k5){e=new T;He(e,A(17));B(e);}if(!(k.lZ>=k.lb.ke?0:1))break h;d=Cq(k);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else{d=d;d.kR=b;if(b)BS=1;i:{if(c){d=d.kz;if(CI)l=Mo(d,
1);else{if(d.kO===null)d.kO=N2(d);l=CQ(d.kO);}while(true){if(!l.k5)break b;if(!(l.lZ>=l.lb.ke?0:1))break i;d=Cq(l);if(!(d instanceof BJ)){d.kR=b;if(b)BS=1;}else j:{d=d;Fi(d,b);if(c){d=GD(d.kz);while(true){if(!HU(d))break j;m=Cq(d);if(!(m instanceof BJ))Fi(m,b);else LO(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(KQ(A(17)));}}},
AB1=a=>{let b,c,d,e,f;b=new K;b.ka=G(128);T3(a,b,1);c=b.j_-1|0;b.j_=c;d=new I;e=b.ka;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.kb=L(e.data,0,c);return d;}b=new H;b.kc=1;b.kd=1;B(b);},
T3=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=S$(a);E(b,b.j_,d);e=b.j_;Bj(b,e,e+1|0);b.ka.data[e]=10;d=a.kz;Cv(d);f=d.ki;d.nY=f;d.mP=d.mP+1|0;g=f;h=0;i=a.kz.ke;j=c+1|0;while(h<i){k=0;while(k<c){E(b,b.j_,A(33));k=k+1|0;}d=g.data[h];if(d instanceof BJ)T3(d,b,j);else{E(b,b.j_,d===null?A(2):d.T());e=b.j_;Bj(b,e,e+1|0);b.ka.data[e]=10;}h=h+1|0;}FI(a.kz);},
AV3=()=>{LE=new Z;};
let GE=F(0);
let DV=F(0);
let Hm=F();
let G0=F(0);
let B4=F();
let JF=null;
let ID=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,$$je;if(!(b instanceof Bb))return 0;Mj();switch(K8.data[b.mJ.kn]){case 1:break;case 2:return 0;case 3:return 0;default:c=b.lm;d=JF;e=b.ob;f=b.oc;d.kh=e;d.kg=f;UO(c,d);switch(K8.data[b.mJ.kn]){case 4:if(b.xj){g=b.kV;h=b.lm;i=b.ll;j=b.oR;k=b.lz;CE();d=Bw;l=BF(d,M(D8));c=l<0?null:d.kY.data[l];if(c===null){c=new CJ;d=new Bh;d.kF=0;d.ki=R(C,4);c.kw=d;c.k6=100;a:{try{d=CS(M(D8),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{d=CP(M(D8),
null);CU(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}d=null;}c.kQ=d;if(d===null){d=new BA;c=new K;Bu(c);c.ka=G(16);BZ(c,c.j_,A(21));if(M(D8).kl===null)M(D8).kl=W(M(D8).ks.$meta.name);b=M(D8).kl;BZ(c,c.j_,b);b=new I;m=c.ka;n=m.data;l=c.j_;o=n.length;if(l>=0&&l<=(o-0|0)){b.kb=L(m.data,0,l);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;b.kc=1;b.kd=1;B(b);}Ci(Bw,M(D8),c);}b:{b=c.kw;p=b.ke;if(p){if(!p){b=new BO;b.kc=1;b.kd=1;b.kf=A(22);B(b);}p=p-1|0;b.ke=p;m=b.ki.data;b=m[p];m[p]=null;}else try
{b=C6(c.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){d=$$je;i=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));g=c.kQ.lV.lU;if(g.kl===null)g.kl=W(g.ks.$meta.name);c=g.kl;E(b,b.j_,c);c=new I;m=b.ka;n=m.data;l=b.j_;o=n.length;if(l>=0&&l<=(o-0|0)){c.kb=L(m.data,0,l);i.kc=1;i.kd=1;Bk(i);i.kf=c;i.lG=d;B(i);}b=new H;b.kc=1;b.kd=1;B(b);}else{throw $$e;}}}b=b;b.qw=h;b.rh=i;b.rw=a;b.sA=j;b.uH=k;S(g.p2,b);}return 1;case 5:d=JF;AOi(a,b,d.kh,d.kg,b.oR,b.lz);return 1;case 6:return 1;case 7:return 0;case 8:return 0;case 9:return 0;case 10:return 0;default:}return 0;}return 0;},
AXH=()=>{JF=new Z;};
let HD=F(B4);
let AMh=F(HD);
let G7=F(BH);
let My=null,NN=null,UV=null;
let Y1=()=>{let b,c;b=new G7;b.kt=A(34);b.kn=0;My=b;c=new G7;c.kt=A(35);c.kn=1;NN=c;UV=V(G7,[b,c]);};
let Nx=F(0);
let Jh=F(0);
let GY=F(0);
let DQ=F();
let APy=F(DQ);
let Ni=F(Hm);
let MV=F();
let T4=null,T8=null;
let AVz=()=>{T4=new Z;T8=new Z;};
let AC3=F();
let XD=F();
let Wg=F(0);
let LY=F();
let ALH=F(LY);
function C9(){let a=this;FX.call(a);a.sC=0;a.xE=null;a.oM=null;}
let Sg=a=>{a.lr=1;},
AXN=()=>{let a=new C9();Sg(a);return a;},
Wu=a=>{a.kV=null;a.ll=null;a.lm=null;a.lv=0;a.lr=1;a.ld=0;a.lu=0;a.li=0;a.oM=null;};
let RE=F();
let X1=null;
let WI=()=>{WI=BR(RE);AI7();};
let AI7=()=>{let b,c;b=Ba((UV.p()).data.length);c=b.data;X1=b;c[My.kn]=1;c[NN.kn]=2;};
let AJC=F();
let TC=F();
let WW=null;
let Sj=()=>{Sj=BR(TC);ABu();};
let ABu=()=>{let b,c;b=Ba((Lf.p()).data.length);c=b.data;WW=b;c[I4.kn]=1;c[Ht.kn]=2;c[Ja.kn]=3;};
let APx=F(DQ);
let Fz=F();
let Tx=F(Fz);
let Wq=F();
let APh=0,ASv=0,AJD=0,ASK=0,AFz=0;
let Uy=()=>{Uy=BR(Wq);ASl();};
let ASl=()=>{APh=Dl(W(navigator.platform),A(7));ASv=Dl(W(navigator.platform),A(8));AJD=Dl(W(navigator.platform),A(9));ASK=!Dl(W(navigator.platform),A(10))&&!Dl(W(navigator.platform),A(11))?0:1;AFz=!Dl(W(navigator.platform),A(12))&&!Dl(W(navigator.platform),A(13))&&!Dl(W(navigator.platform),A(14))?0:1;};
let Mb=F();
let AR9=F(HD);
let SH=null;
let AWd=()=>{SH=new Z;};
let AEs=F();
let SS=null;
let AXU=()=>{SS=new Z;};
let U9=F();
let ACJ=null,YP=null,AS6=null;
let VP=()=>{VP=BR(U9);AON();};
let AON=()=>{let b;b=new Bh;b.kF=1;b.ki=R(C,16);ACJ=b;b=new Bo;C0();YP=b;AS6=new DR;};
let Np=F();
let I1=F(Fz);
let Wa=F(Fz);
let Ep=F(B4);
let Vn=0.0;
let AXt=()=>{Vn=0.10000000149011612;};
let V4=F(I1);
let ABJ=F(FX);
let KR=F(0);
function Bb(){let a=this;FX.call(a);a.mJ=null;a.ob=0.0;a.oc=0.0;a.z9=0.0;a.z8=0.0;a.oR=0;a.lz=0;a.vm=0;a.x_=0;a.lH=null;a.xj=0;}
let SG=a=>{a.lr=1;a.xj=1;},
AV2=()=>{let a=new Bb();SG(a);return a;},
Qr=a=>{a.kV=null;a.ll=null;a.lm=null;a.lv=0;a.lr=1;a.ld=0;a.lu=0;a.li=0;a.lH=null;a.lz=(-1);},
OX=a=>{return a.mJ.kt;};
function D8(){let a=this;C.call(a);a.rw=null;a.qw=null;a.rh=null;a.sA=0;a.uH=0;}
let Uv=a=>{return;},
AUC=()=>{let a=new D8();Uv(a);return a;},
O$=a=>{a.qw=null;a.rw=null;a.rh=null;};
let Oa=F();
let K8=null;
let Mj=()=>{Mj=BR(Oa);AQ3();};
let AQ3=()=>{let b,c;b=Ba((Lf.p()).data.length);c=b.data;K8=b;c[IQ.kn]=1;c[Mp.kn]=2;c[J1.kn]=3;c[I4.kn]=4;c[Ht.kn]=5;c[Ja.kn]=6;c[Lg.kn]=7;c[LF.kn]=8;c[Nn.kn]=9;c[Jb.kn]=10;};
let DA=F(BH);
let I4=null,Ht=null,Ja=null,Lg=null,Nn=null,Jb=null,LF=null,IQ=null,Mp=null,J1=null,Lf=null;
let ABp=()=>{let b,c,d,e,f,g,h,i,j,k;b=new DA;b.kt=A(36);b.kn=0;I4=b;c=new DA;c.kt=A(37);c.kn=1;Ht=c;d=new DA;d.kt=A(38);d.kn=2;Ja=d;e=new DA;e.kt=A(39);e.kn=3;Lg=e;f=new DA;f.kt=A(40);f.kn=4;Nn=f;g=new DA;g.kt=A(41);g.kn=5;Jb=g;h=new DA;h.kt=A(42);h.kn=6;LF=h;i=new DA;i.kt=A(43);i.kn=7;IQ=i;j=new DA;j.kt=A(44);j.kn=8;Mp=j;k=new DA;k.kt=A(45);k.kn=9;J1=k;Lf=V(DA,[b,c,d,e,f,g,h,i,j,k]);};
function BQ(){let a=this;C.call(a);a.lc=null;a.k8=null;a.mi=null;}
let AM3=a=>{return;},
ANJ=(a,b)=>{let c,d,e;a.lc=b;if(a.k8===null)a.k8=b;if(b===null){b=a.mi;if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,a);d=b.k3;e=b.kw.ke;if(d>e)e=d;b.k3=e;if(BC(a,BB))a.bt();}else if(BC(a,BB))a.bt();a.mi=null;}}},
AU8=(a,b)=>{a.k8=b;},
AAq=a=>{a.lc=null;a.k8=null;a.mi=null;a.bZ();},
AUF=(a,b)=>{a.mi=b;},
ANM=a=>{let b,c,d,e;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.ks=b;d=c;b.classObject=d;}}if(c.kl===null)c.kl=W(c.ks.$meta.name);b=c.kl;e=Fa(b,46,b.kb.length-1|0);if(e!=(-1))b=Cj(b,e+1|0,b.kb.length);if(Lu(b,A(46)))b=Cj(b,0,b.kb.length-6|0);return b;};
let E7=F(BQ);
let AGs=F(E7);
let ALg=F(E7);
function C_(){let a=this;BQ.call(a);a.xT=0.0;a.s4=0.0;a.vH=null;a.xN=0;a.ty=0;a.qs=0;}
let ARV=(a,b)=>{let c,d,e,f,$$je;if(a.qs)return 1;c=a.mi;a.mi=null;a:{try{if(!a.ty){Te(a);a.ty=1;}b=a.s4+b;a.s4=b;d=a.xT;e=b<d?0:1;a.qs=e;d=!e?b/d:1.0;f=a.vH;if(f!==null)d=f.b1(d);if(a.xN)d=1.0-d;SA(a,d);if(a.qs)ASN(a);e=a.qs;break a;}catch($$e){$$je=Bc($$e);f=$$je;}a.mi=c;B(f);}a.mi=c;return e;},
ASN=a=>{return;},
ATX=a=>{a.s4=0.0;a.ty=0;a.qs=0;};
let EY=F(C_);
let X2=F(EY);
let AAm=F();
function NY(){let a=this;BQ.call(a);a.lK=null;a.rZ=0;}
let AVq=a=>{let b,c,d,e,f,g,h,i;a.rZ=0;b=a.lK;c=0;d=b.ke;while(c<d){if(c>=b.ke){e=new H;f=new K;f.ka=G(16);E(f,f.j_,A(18));J(f,f.j_,c,10);E(f,f.j_,A(19));c=b.ke;J(f,f.j_,c,10);b=new I;g=f.ka;h=g.data;d=f.j_;i=h.length;if(d>=0&&d<=(i-0|0)){b.kb=L(g.data,0,d);e.kc=1;e.kd=1;e.kf=b;B(e);}b=new H;b.kc=1;b.kd=1;B(b);}b.ki.data[c].bZ();c=c+1|0;}},
ALt=a=>{let b,c,d,e,f,g,h,i;a.lc=null;a.k8=null;a.mi=null;a.rZ=0;b=a.lK;c=0;d=b.ke;while(c<d){if(c>=b.ke){e=new H;f=new K;f.ka=G(16);E(f,f.j_,A(18));J(f,f.j_,c,10);E(f,f.j_,A(19));c=b.ke;J(f,f.j_,c,10);b=new I;g=f.ka;h=g.data;d=f.j_;i=h.length;if(d>=0&&d<=(i-0|0)){b.kb=L(g.data,0,d);e.kc=1;e.kd=1;e.kf=b;B(e);}b=new H;b.kc=1;b.kd=1;B(b);}b.ki.data[c].bZ();c=c+1|0;}a.pS=0;b=a.lK;g=b.ki;c=0;d=b.ke;f=null;if(c>d){b=new Bl;b.kc=1;b.kd=1;B(b);}while(c<d){h=g.data;i=c+1|0;h[c]=f;c=i;}b.ke=0;},
AN1=(a,b)=>{let c,d,e,f,g,h,i;c=a.lK;d=0;e=c.ke;while(true){if(d>=e){a.lc=b;if(a.k8===null)a.k8=b;if(b===null){b=a.mi;if(b!==null){c=b.kw;if(c.ke<b.k6){S(c,a);d=b.k3;e=b.kw.ke;if(d>e)e=d;a:{b.k3=e;if(BC(a,BB)){b=a;b.lc=null;b.k8=null;b.mi=null;b.rZ=0;c=b.lK;d=0;e=c.ke;while(true){if(d>=e){b.pS=0;b=b.lK;f=b.ki;d=0;e=b.ke;c=null;if(d>e){b=new Bl;G4(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.ke=0;break a;}if(d>=c.ke)break;c.ki.data[d].bZ();d=d+1|0;}B(No(Et(Fn(FD(Fn(FD(EF(),A(18)),d),A(19)),c.ke))));}}}
else if(BC(a,BB)){b=a;b.lc=null;b.k8=null;b.mi=null;b.rZ=0;c=b.lK;d=0;e=c.ke;while(d<e){(Q(c,d)).bZ();d=d+1|0;}b.pS=0;b=b.lK;f=b.ki;d=0;e=b.ke;c=null;if(d>e){b=new Bl;IJ(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.ke=0;}a.mi=null;}}return;}if(d>=c.ke)break;c.ki.data[d].by(b);d=d+1|0;}i=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,d,10);E(b,b.j_,A(19));d=c.ke;J(b,b.j_,d,10);c=new I;f=b.ka;g=f.data;e=b.j_;h=g.length;if(e>=0&&e<=(h-0|0)){c.kb=L(f.data,0,e);i.kc=1;i.kd=1;i.kf=c;B(i);}b=new H;b.kc=1;b.kd
=1;B(b);},
AJq=a=>{let b,c,d,e,f,g,h,i,j;b=new K;b.ka=G(64);c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BD;d.ks=c;e=d;c.classObject=e;}}if(d.kl===null)d.kl=W(d.ks.$meta.name);c=d.kl;f=Fa(c,46,c.kb.length-1|0);if(f!=(-1))c=Cj(c,f+1|0,c.kb.length);if(Lu(c,A(46)))c=Cj(c,0,c.kb.length-6|0);E(b,b.j_,c);f=b.j_;Bj(b,f,f+1|0);b.ka.data[f]=40;c=a.lK;g=0;f=c.ke;while(g<f){if(g>0)E(b,b.j_,A(47));if(g>=c.ke){e=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,g,10);E(b,b.j_,A(19));g=c.ke;J(b,b.j_,g,
10);c=new I;h=b.ka;i=h.data;f=b.j_;j=i.length;if(f>=0&&f<=(j-0|0)){c.kb=L(h.data,0,f);e.kc=1;e.kd=1;e.kf=c;B(e);}b=new H;b.kc=1;b.kd=1;B(b);}e=c.ki.data[g];E(b,b.j_,e===null?A(2):e.T());g=g+1|0;}f=b.j_;Bj(b,f,f+1|0);h=b.ka;i=h.data;i[f]=41;c=new I;f=b.j_;j=i.length;if(f>=0&&f<=(j-0|0)){c.kb=L(h.data,0,f);return c;}b=new H;b.kc=1;b.kd=1;B(b);};
function Dq(){NY.call(this);this.pS=0;}
let Qi=a=>{let b;b=new Bh;b.kF=1;b.ki=R(C,4);a.lK=b;},
AV0=()=>{let a=new Dq();Qi(a);return a;},
Ob=(a,b)=>{let c;c=new Bh;c.kF=1;c.ki=R(C,4);a.lK=c;S(c,b);c=a.lc;if(c!==null){b.lc=c;if(b.k8===null)b.k8=c;}},
AYc=a=>{let b=new Dq();Ob(b,a);return b;},
Wh=(a,b,c)=>{let d;d=new Bh;d.kF=1;d.ki=R(C,4);a.lK=d;S(d,b);d=a.lc;if(d!==null){b.lc=d;if(b.k8===null)b.k8=d;}S(a.lK,c);b=a.lc;if(b!==null){c.lc=b;if(c.k8===null)c.k8=b;}},
AXS=(a,b)=>{let c=new Dq();Wh(c,a,b);return c;},
VN=(a,b,c,d)=>{let e;e=new Bh;e.kF=1;e.ki=R(C,4);a.lK=e;S(e,b);e=a.lc;if(e!==null){b.lc=e;if(b.k8===null)b.k8=e;}S(a.lK,c);b=a.lc;if(b!==null){c.lc=b;if(c.k8===null)c.k8=b;}S(a.lK,d);b=a.lc;if(b!==null){d.lc=b;if(d.k8===null)d.k8=b;}},
AXG=(a,b,c)=>{let d=new Dq();VN(d,a,b,c);return d;},
Wz=(a,b,c,d,e)=>{let f;f=new Bh;f.kF=1;f.ki=R(C,4);a.lK=f;S(f,b);f=a.lc;if(f!==null){b.lc=f;if(b.k8===null)b.k8=f;}S(a.lK,c);f=a.lc;if(f!==null){c.lc=f;if(c.k8===null)c.k8=f;}S(a.lK,d);b=a.lc;if(b!==null){d.lc=b;if(d.k8===null)d.k8=b;}S(a.lK,e);b=a.lc;if(b!==null){e.lc=b;if(e.k8===null)e.k8=b;}},
AVJ=(a,b,c,d)=>{let e=new Dq();Wz(e,a,b,c,d);return e;},
Sk=(a,b,c,d,e,f)=>{let g;g=new Bh;g.kF=1;g.ki=R(C,4);a.lK=g;S(g,b);g=a.lc;if(g!==null){b.lc=g;if(b.k8===null)b.k8=g;}S(a.lK,c);b=a.lc;if(b!==null){c.lc=b;if(c.k8===null)c.k8=b;}S(a.lK,d);b=a.lc;if(b!==null){d.lc=b;if(d.k8===null)d.k8=b;}S(a.lK,e);b=a.lc;if(b!==null){e.lc=b;if(e.k8===null)e.k8=b;}S(a.lK,f);b=a.lc;if(b!==null){f.lc=b;if(f.k8===null)f.k8=b;}},
AWa=(a,b,c,d,e)=>{let f=new Dq();Sk(f,a,b,c,d,e);return f;},
Oo=(a,b)=>{let c,d,e,$$je;c=a.pS;d=a.lK;if(c>=d.ke)return 1;e=a.mi;a.mi=null;a:{b:{c:{d:{try{if(!(Q(d,c)).bx(b))break d;}catch($$e){$$je=Bc($$e);d=$$je;break b;}e:{try{if(a.lc!==null)break e;}catch($$e){$$je=Bc($$e);d=$$je;break b;}a.mi=e;return 1;}try{c=a.pS+1|0;a.pS=c;if(c<a.lK.ke)break d;else break c;}catch($$e){$$je=Bc($$e);d=$$je;break b;}}try{}catch($$e){$$je=Bc($$e);d=$$je;break b;}a.mi=e;return 0;}try{break a;}catch($$e){$$je=Bc($$e);d=$$je;}}a.mi=e;B(d);}a.mi=e;return 1;},
U2=a=>{let b,c,d,e,f,g,h,i;a.rZ=0;b=a.lK;c=0;d=b.ke;while(c<d){if(c>=b.ke){e=new H;f=new K;f.ka=G(16);E(f,f.j_,A(18));J(f,f.j_,c,10);E(f,f.j_,A(19));c=b.ke;J(f,f.j_,c,10);b=new I;g=f.ka;h=g.data;d=f.j_;i=h.length;if(d>=0&&d<=(i-0|0)){b.kb=L(g.data,0,d);e.kc=1;e.kd=1;e.kf=b;B(e);}b=new H;b.kc=1;b.kd=1;B(b);}b.ki.data[c].bZ();c=c+1|0;}a.pS=0;};
let AEk=F(BQ);
let AIH=F(BQ);
let ANH=F(BQ);
let AOC=F();
let L5=F(BQ);
let AH1=F(L5);
function DC(){let a=this;C_.call(a);a.tP=0.0;a.tQ=0.0;a.uX=0.0;a.uW=0.0;a.pZ=0;}
let Pd=a=>{a.pZ=12;},
AW9=()=>{let a=new DC();Pd(a);return a;},
Te=a=>{let b,c,d;b=a.k8;c=a.pZ;d=b.kD;if(c&16)d=d+b.lh;else if(!(c&8))d=d+b.lh/2.0;a.tP=d;d=b.kE;if(c&2)d=d+b.lo;else if(!(c&4))d=d+b.lo/2.0;a.tQ=d;},
SA=(a,b)=>{let c,d;if(b===0.0){c=a.tP;d=a.tQ;}else if(b===1.0){c=a.uX;d=a.uW;}else{c=a.tP;c=c+(a.uX-c)*b;d=a.tQ;d=d+(a.uW-d)*b;}AEg(a.k8,c,d,a.pZ);},
UF=a=>{a.lc=null;a.k8=null;a.mi=null;a.s4=0.0;a.ty=0;a.qs=0;a.xN=0;a.vH=null;a.pZ=12;};
let APs=F(C_);
let AP5=F(EY);
let AL3=F(BQ);
let AMA=F(EY);
let ARK=F(C_);
let AQ4=F(C_);
let AEU=F(BQ);
let AHw=F(C_);
let AHM=F(BQ);
let AFq=F(BQ);
let AH4=F(E7);
let YX=F(C_);
let ART=F(BQ);
let ALx=F(EY);
let AE7=F(E7);
let AKI=F(BQ);
let AAo=F(C_);
let AG6=F(C_);
let ABD=F();
let AGZ=null;
let AS_=()=>{AGZ=V(BD,[M(Rk),M(BM),M(SX),M(Tx),M(Wa),M(I1),M(V4),M(GK),M(Sf),M(U$),M(Ur),M(RF),M(VS),M(Kf),M(V3),M(Tz),M(O8),M(VI),M(G_),M(SN),M(U4),M(SI),M(RV),M(Pw)]);};
let Dn=F(BJ);
let EJ=F(Dn);
let ZC=null,AHE=null,AOB=null,ATu=null,AK2=null,Xc=null,AD5=null,AKy=null;
let Q_=()=>{Q_=BR(EJ);AO8();};
let AO8=()=>{let b,c;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=1.0;b.la=1.0;CV(b);ZC=b;b=new BM;b.k_=1.0;b.k$=0.0;b.k9=0.0;b.la=1.0;CV(b);AHE=b;b=new BM;b.k_=0.0;b.k$=1.0;b.k9=0.0;b.la=1.0;CV(b);AOB=b;b=new V9;c=new Bh;c.kF=0;c.ki=R(C,16);b.kw=c;b.k6=2147483647;ATu=b;b=new V8;IG();AK2=b;Xc=new V7;AD5=new V6;AKy=new V5;};
let Gf=F(EJ);
let LR=F(Gf);
let ACy=F(LR);
let APu=F(B4);
let MT=F(Dn);
let Sr=F(0);
let ER=F();
let AEK=F(ER);
let Dx=F(Cm);
let Zf=F(Dx);
let APt=F(B4);
let B7=F();
let AQM=null,ANQ=null,APq=null,AC2=null,AH_=null,AGm=null,ANI=null;
let IG=()=>{IG=BR(B7);ZQ();};
let ZQ=()=>{let b;b=new JD;IG();b.zZ=0.0;AQM=b;ANQ=new TJ;APq=new TG;AC2=new TF;AH_=new TI;AGm=new TH;ANI=new TE;};
let TI=F(B7);
let ALI=F(B7);
let KK=F(Ep);
let AHT=F(KK);
let V7=F(B7);
let ARw=F(B4);
let Ms=F(EJ);
let TQ=null,T1=null;
let AUY=()=>{TQ=new Z;T1=new Z;};
let ALJ=F(B7);
let GC=F(0);
function DR(){let a=this;C.call(a);a.nB=0.0;a.nA=0.0;a.nD=0.0;a.nt=0.0;}
let QJ=null,Ts=null;
let AFo=(a,b)=>{let c,d,e;a:{c=a.nB;d=b.nB;if(c<d+b.nD&&c+a.nD>d){c=a.nA;d=b.nA;if(c<d+b.nt&&c+a.nt>d){e=1;break a;}}e=0;}return e;},
AXc=()=>{QJ=new DR;Ts=new DR;};
let D4=F(DR);
let WP=null;
let Kh=()=>{Kh=BR(D4);OW();};
let Tj=a=>{Kh();},
AUM=()=>{let a=new D4();Tj(a);return a;},
OW=()=>{let b,c,d,e,f,g,h,$$je;CE();b=Bw;c=BF(b,M(D4));b=c<0?null:b.kY.data[c];if(b===null){b=new CJ;d=new Bh;d.kF=0;d.ki=R(C,4);b.kw=d;b.k6=100;a:{try{d=CS(M(D4),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{d=CP(M(D4),null);CU(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}d=null;}b.kQ=d;if(d===null){b=new BA;d=new K;d.ka=G(16);E(d,d.j_,A(21));if(M(D4).kl===null)M(D4).kl=W(M(D4).ks.$meta.name);e=M(D4).kl;E(d,d.j_,e);e=new I;f=d.ka;g=f.data;c
=d.j_;h=g.length;if(c>=0&&c<=(h-0|0)){e.kb=L(f.data,0,c);b.kc=1;b.kd=1;b.kf=e;B(b);}e=new H;e.kc=1;e.kd=1;B(e);}Ci(Bw,M(D4),b);}WP=b;};
let AEO=F(ER);
let M8=F(Dx);
let Rc=null,Rd=null,Re=null,Tf=0.0,OA=0.0;
let AXM=()=>{Rc=new Z;Rd=new Z;Re=new Z;Tf=0.4000000059604645;OA=0.10000000149011612;};
let ACN=F(M8);
let AG$=F(B4);
let QB=F(0);
let ANO=F();
let GK=F();
let G_=F(GK);
let Ur=F(G_);
let Nb=F(Dx);
let AF_=F(Nb);
let ATp=F(MT);
let KT=F(Dn);
let AUa=F(Gf);
let NB=F(Dx);
let V5=F(B7);
let U4=F();
let AFj=F();
let AHX=F(B4);
let AJL=F(DQ);
let AGw=F();
let ANk=F(B4);
let AS7=F(Ep);
let AG8=F(MV);
let TE=F(B7);
let TH=F(B7);
let S_=F(0);
let Kf=F();
let O8=F(Kf);
let AEL=F(ER);
let APr=F(Mb);
let APv=F(Np);
let ARx=F(B4);
let ARy=F(Ep);
let V6=F(B7);
let O0=F();
let AFd=null,AKS=null,AFb=null,AKR=null,W_=null,AAU=null,AKq=null,XB=null,ANc=null;
let Ut=()=>{Ut=BR(O0);ABK();};
let ABK=()=>{let b;b=new Gc;b.oZ=0.0;AFd=b;b=new Gc;b.oZ=1.0;AKS=b;E_();AFb=Ex.data[128];E_();b=Ex.data[129];AKR=b;W_=b;E_();AAU=Ex.data[130];E_();AKq=Ex.data[132];E_();XB=Ex.data[136];E_();ANc=Ex.data[144];};
let Sf=F(G_);
let AHl=F(B4);
let ZE=F(DQ);
let TJ=F(B7);
let AC9=F(Dn);
let AG9=F(B4);
let SI=F();
function JD(){B7.call(this);this.zZ=0.0;}
let PA=null;
let AXx=()=>{PA=R(JD,111);};
let AFk=F(KT);
let TF=F(B7);
let AIy=F(Dx);
let U1=null;
let AXA=()=>{U1=new Z;};
let AHf=F(Ni);
let VI=F();
let Pn=F(Dx);
let Y_=null,ADr=null;
let UJ=()=>{UJ=BR(Pn);YS();};
let YS=()=>{let b,c;Y_=new BM;b=new KI;MF();c=new Bh;c.kF=1;c.ki=R(C,1);b.zI=c;c=new F5;c.pG=1;c.mS=Ba(2);b.yR=c;ADr=b;};
let Pw=F();
let ALL=F(B7);
let V8=F(B7);
let AOK=F(Ms);
let TG=F(B7);
let RF=F();
let ASW=F();
let FR=F(BH);
let Jc=null,Zr=null,AMe=null,XN=null,AAv=null,ANY=null;
let AMD=()=>{let b,c,d,e,f;b=new FR;b.kt=A(48);b.kn=0;Jc=b;c=new FR;c.kt=A(49);c.kn=1;Zr=c;d=new FR;d.kt=A(50);d.kn=2;AMe=d;e=new FR;e.kt=A(51);e.kn=3;XN=e;f=new FR;f.kt=A(52);f.kn=4;AAv=f;ANY=V(FR,[b,c,d,e,f]);};
let ATd=F(B7);
let AGX=F(DQ);
function Dw(){let a=this;C.call(a);a.k6=0;a.k3=0;a.kw=null;}
let V9=F(Dw);
let Zt=F();
let VS=F();
let SX=F();
let Tz=F();
let Nz=F(B4);
let R2=null;
let AUA=()=>{R2=new Z;};
let ZD=F(DQ);
let ARz=F(NB);
let Zw=F(0);
let AHm=F(B4);
let AT0=F(Dn);
let ALd=F(Dn);
let AHh=F(Ep);
let Nm=F();
let AEJ=F(Nm);
let AQ_=F(Cm);
let YF=F(B4);
let AO7=F(Gf);
let AKh=F(B4);
let ASC=F(Ep);
let U$=F(GK);
let ALk=F(Dn);
let SN=F();
let RV=F();
let AJT=F(Dx);
let AS8=F(Hm);
let YH=F(B4);
let AM0=F(Dn);
let Sy=null;
let AWk=()=>{Sy=new Z;};
let ATn=F(Nz);
let YI=F(EJ);
let AEM=F(ER);
let WY=F();
let V3=F();
let VA=F();
let AAj=null,Y0=null,AA0=null,ARL=null,ARN=null,ARM=null,AC8=null,AEu=null,ASr=null,YN=null,ARW=null;
let VC=()=>{VC=BR(VA);AJl();};
let AJl=()=>{let b;AAj=Cc(16);b=new EH;b.oG=0.0;b.oD=0.0;b.oE=0.0;b.oF=1.0;Y0=b;b=new EH;b.oG=0.0;b.oD=0.0;b.oE=0.0;b.oF=1.0;AA0=b;b=new Bo;C0();ARL=b;ARN=new Bo;ARM=new Bo;AC8=new Bo;AEu=Dj();ASr=new Bo;YN=new Bo;ARW=new Bo;};
let BP=F();
let ZP=null,AOq=null,ACT=null,AOz=null,AB$=null,AD0=null,AHY=null,XM=null,AIi=null,AB9=null,AJV=null,ADo=null,ADZ=null,YY=null,Xy=null,ANu=null,AFr=null,AD2=null,ACc=null,AM7=null,AD1=null,AQ6=null,AD6=null,AID=null,AQK=null,AJd=null,WU=null,XJ=null,AOj=null,AEw=null,ATx=null,AMn=null,ARr=null,AHq=null,ANo=null,ATZ=null,AGa=null,AGu=null,XP=null,AO2=null,ATC=null,ARH=null,AMB=null,ATO=null;
let J2=()=>{J2=BR(BP);Z8();};
let Z8=()=>{let b,c;b=new Ul;J2();ZP=b;AOq=new Ud;ACT=new Uc;b=new Uf;AOz=b;AB$=b;b=new ES;b.nE=2;AD0=b;b=new Ia;b.nE=2;AHY=b;XM=b;b=new H6;b.nE=2;AIi=b;AB9=b;AJV=new Ue;ADo=new Uh;b=new ES;b.nE=3;ADZ=b;b=new Ia;b.nE=3;YY=b;b=new H6;b.nE=3;Xy=b;ANu=new Ug;AFr=new Uj;b=new ES;b.nE=4;AD2=b;b=new Ia;b.nE=4;ACc=b;b=new H6;b.nE=4;AM7=b;b=new ES;b.nE=5;AD1=b;b=new Ia;b.nE=5;AQ6=b;b=new H6;b.nE=5;AD6=b;AID=new Ui;AQK=new Tm;AJd=new To;b=new Ga;b.qB=2.0;b.qU=10.0;c=GQ(2.0,(-10.0));b.rd=c;b.qZ=1.0/(1.0-c);WU=b;b=new Mh;b.qB
=2.0;b.qU=10.0;c=GQ(2.0,(-10.0));b.rd=c;b.qZ=1.0/(1.0-c);XJ=b;b=new NU;b.qB=2.0;b.qU=10.0;c=GQ(2.0,(-10.0));b.rd=c;b.qZ=1.0/(1.0-c);AOj=b;b=new Ga;b.qB=2.0;b.qU=5.0;c=GQ(2.0,(-5.0));b.rd=c;b.qZ=1.0/(1.0-c);AEw=b;b=new Mh;b.qB=2.0;b.qU=5.0;c=GQ(2.0,(-5.0));b.rd=c;b.qZ=1.0/(1.0-c);ATx=b;b=new NU;b.qB=2.0;b.qU=5.0;c=GQ(2.0,(-5.0));b.rd=c;b.qZ=1.0/(1.0-c);AMn=b;ARr=new Tp;AHq=new Tq;ANo=new Tr;b=new GW;b.vJ=2.0;b.t6=10.0;b.t$=1.0;b.uw=(-21.99114990234375);ATZ=b;b=new Pc;b.vJ=2.0;b.t6=10.0;b.t$=1.0;b.uw=18.84955596923828;AGa
=b;b=new RM;b.vJ=2.0;b.t6=10.0;b.t$=1.0;b.uw=(-21.99114990234375);AGu=b;b=new RO;b.zh=3.0;XP=b;b=new PR;b.AQ=2.0;AO2=b;b=new VU;b.zU=2.0;ATC=b;b=new Q$;LL(b,4);ARH=b;b=new Sa;LL(b,4);AMB=b;ATO=ACk(4);};
function PR(){BP.call(this);this.AQ=0.0;}
let AG0=F();
let Ug=F(BP);
let AR4=F();
function ES(){BP.call(this);this.nE=0;}
let Ia=F(ES);
let H6=F(ES);
let JP=F(0);
let AB3=F();
let Uj=F(BP);
let APJ=F();
let Uf=F(BP);
function GW(){let a=this;BP.call(a);a.vJ=0.0;a.t6=0.0;a.t$=0.0;a.uw=0.0;}
let Ue=F(BP);
let Ud=F(BP);
let ALP=F();
let Ww=null,Wy=null,Wx=null;
let AU_=()=>{Ww=new Z;Wy=new Z;Wx=new Z;};
let XC=F(Dw);
let Ju=F(0);
function Z(){let a=this;C.call(a);a.kh=0.0;a.kg=0.0;}
let O2=null,O1=null,Rv=null;
let BY=(a,b,c)=>{a.kh=b;a.kg=c;},
Ck=(a,b)=>{let c=new Z();BY(c,a,b);return c;},
ABl=a=>{let b,c,d,e,f,g,h;b=new K;b.ka=G(16);E(b,b.j_,A(53));c=a.kh;F4(b,b.j_,c);E(b,b.j_,A(54));c=a.kg;F4(b,b.j_,c);E(b,b.j_,A(55));d=new I;e=b.ka;f=e.data;g=b.j_;h=f.length;if(g>=0&&g<=(h-0|0)){d.kb=L(e.data,0,g);return d;}b=new H;b.kc=1;b.kd=1;B(b);},
ADV=(a,b)=>{let c,d,e,f,g,h,i;if(a===b)return 1;if(b===null)return 0;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BD;d.ks=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.ks=e;f=c;e.classObject=f;}}if(d!==c)return 0;c=b;g=a.kh;h=(isNaN(g)?1:0)?2143289344:GA(g);g=c.kh;if(h!=((isNaN(g)?1:0)?2143289344:GA(g)))return 0;g=a.kg;i=(isNaN(g)?1:0)?2143289344:GA(g);g=c.kg;if(i==((isNaN(g)?1:0)?2143289344:GA(g)))return 1;return 0;},
AU3=()=>{let b;b=new Z;b.kh=1.0;b.kg=0.0;O2=b;b=new Z;b.kh=0.0;b.kg=1.0;O1=b;b=new Z;b.kh=0.0;b.kg=0.0;Rv=b;};
let Tq=F(BP);
function Ga(){let a=this;BP.call(a);a.qB=0.0;a.qU=0.0;a.rd=0.0;a.qZ=0.0;}
let AJP=F();
let Ul=F(BP);
let NU=F(Ga);
let AFf=F();
let HN=F(BH);
let ACD=null,AFB=null,APc=null,AKl=null;
let ARD=()=>{let b,c,d;b=new HN;b.kt=A(56);b.kn=0;ACD=b;c=new HN;c.kt=A(57);c.kn=1;AFB=c;d=new HN;d.kt=A(58);d.kn=2;APc=d;AKl=V(HN,[b,c,d]);};
let ST=F();
let ARP=null;
let Sn=()=>{Sn=BR(ST);AH3();};
let AH3=()=>{let b;b=new Bo;C0();ARP=b;};
function Hh(){let a=this;BP.call(a);a.zC=null;a.y7=null;}
let LL=(a,b)=>{let c,d,e,f,g,h,i,j;J2();if(b>=2&&b<=5){a:{c=Cc(b);a.zC=c;d=Cc(b);e=d.data;a.y7=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bl;g=new K;g.ka=G(16);E(g,g.j_,A(59));J(g,g.j_,b,10);h=new I;c=g.ka;d=c.data;i=g.j_;j=d.length;if(i>=0&&i<=(j-0|0)){h.kb=L(c.data,0,i);f.kc=1;f.kd=1;f.kf=h;B(f);}g=new H;g.kc
=1;g.kd=1;B(g);},
ACk=a=>{let b=new Hh();LL(b,a);return b;};
let Sa=F(Hh);
let Tm=F(BP);
function Tc(){let a=this;C.call(a);a.pj=0.0;a.ph=0.0;a.pi=0.0;a.pl=0.0;a.pm=0.0;a.pk=0.0;}
let AGK=(a,b,c,d,e,f)=>{let g,h,i;a.pi=b;a.pk=c;if(d===0.0){a.pj=e;a.ph=0.0;a.pl=0.0;a.pm=f;}else{GX();g=Gq.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.pj=i*e;a.ph= -h*f;a.pl=h*e;a.pm=i*f;}return a;},
AAy=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.pj;d=a.pj;e=c*d;f=b.ph;g=a.pl;h=e+f*g;i=a.ph;e=c*i;j=a.pm;e=e+f*j;k=a.pi;l=c*k;m=a.pk;l=l+f*m+b.pi;c=b.pl;d=c*d;f=b.pm;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.pk;a.pj=h;a.ph=e;a.pi=l;a.pl=d;a.pm=j;a.pk=c;return a;};
let Uc=F(BP);
function Go(){let a=this;C.call(a);a.rC=0.0;a.rB=0.0;a.rD=0.0;a.rA=0.0;}
let AQt=null,AQq=null,AQr=null,AQs=null,ABy=null;
let AS9=()=>{let b;b=new Go;b.rC=1.0;b.rB=0.0;b.rD=0.0;b.rA=0.0;AQt=b;b=new Go;b.rC=0.0;b.rB=1.0;b.rD=0.0;b.rA=0.0;AQq=b;b=new Go;b.rC=0.0;b.rB=0.0;b.rD=1.0;b.rA=0.0;AQr=b;b=new Go;b.rC=0.0;b.rB=0.0;b.rD=0.0;b.rA=1.0;AQs=b;b=new Go;b.rC=0.0;b.rB=0.0;b.rD=0.0;b.rA=0.0;ABy=b;};
let Pc=F(GW);
function RO(){BP.call(this);this.zh=0.0;}
let ABN=F();
let ATI=F();
let Uh=F(BP);
function VU(){BP.call(this);this.zU=0.0;}
let Tr=F(BP);
let RM=F(GW);
let WE=F();
let AD4=null,Yo=null,ASy=null;
let Ql=()=>{Ql=BR(WE);X8();};
let X8=()=>{let b,c,d,e,f,g;AD4=R(Bo,15);b=R(Bo,8);Yo=b;c=R(Bo,9);d=c.data;ASy=c;e=0;f=d.length;while(e<f){g=new Bo;C0();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bo;C0();b[e]=g;e=e+1|0;}};
function KP(){let a=this;C.call(a);a.xo=null;a.xy=null;a.w2=null;a.xA=null;}
let ADz=null;
let N9=()=>{N9=BR(KP);AOQ();};
let ALT=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.xo;e=b.ko;f=c.ko;if(e<f)f=e;e=b.kp;g=c.kp;if(e<g)g=e;e=b.kq;h=c.kq;if(e<h)h=e;d.ko=f;d.kp=g;d.kq=h;i=a.xy;e=b.ko;g=c.ko;if(e>g)g=e;e=b.kp;h=c.kp;if(e>h)h=e;e=b.kq;f=c.kq;if(e>f)f=e;i.ko=g;i.kp=h;i.kq=f;b=a.w2;h=d.ko;j=d.kp;k=d.kq;b.ko=h;b.kp=j;b.kq=k;e=i.ko;f=i.kp;g=i.kq;h=h+e;j=j+f;k=k+g;b.ko=h;b.kp=j;b.kq=k;f=h*0.5;g=j*0.5;e=k*0.5;b.ko=f;b.kp=g;b.kq=e;b=a.xA;g=i.ko;h=i.kp;j=i.kq;b.ko=g;b.kp=h;b.kq=j;e=d.ko;f=d.kp;k=d.kq;g=g-e;e=h-f;f=j-k;b.ko=g;b.kp=e;b.kq=f;return a;},
AOQ=()=>{let b;b=new Bo;C0();ADz=b;};
function L$(){let a=this;C.call(a);a.za=null;a.Aq=null;}
let XZ=null;
let MH=()=>{MH=BR(L$);AO1();};
let AO1=()=>{let b;b=new Bo;C0();XZ=b;};
let ACa=F();
let Yg=F();
let ANe=F();
let AGl=F();
let TS=F();
let AGi=null;
let GX=()=>{GX=BR(TS);AHt();};
let Lz=b=>{let c;GX();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AHt=()=>{let b,c,d,e;b=new Tg;c=ADC(FU(X(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),X(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(Ek(c,Ce))c=D(0, 2147483648);d=Bd(In(c,Bg(c,33)),D(3981806797, 4283543511));d=Bd(In(d,Bg(d,33)),D(444984403, 3301882366));e=In(d,Bg(d,33));d=Bd(In(e,Bg(e,33)),D(3981806797, 4283543511));d=Bd(In(d,Bg(d,33)),D(444984403, 3301882366));d=In(d,Bg(d,33));b.yL=e;b.yM=d;AGi=b;};
let Vg=F();
let Xm=null,Xn=null,Xo=null,ABS=null,AP0=null,AII=null,Zc=null,Zd=null,AIg=null,AIb=null,AES=null,AEV=null,AEW=null,AEY=null,AIj=null,AIe=null,AIV=null,AF8=null,ANN=null,AFK=null,AQ2=null,AQ1=null,AQZ=null,AGP=null;
let Q7=()=>{Q7=BR(Vg);ACf();};
let ACf=()=>{let b,c;b=new Bo;C0();Xm=b;Xn=new Bo;Xo=new Bo;b=new G6;b.sf=1;b.no=Cc(16);ABS=b;b=new G6;b.sf=1;b.no=Cc(16);AP0=b;AII=new Z;Zc=new Z;Zd=new Z;AIg=new Z;AIb=new Z;AES=new Z;AEV=new Z;AEW=new Z;AEY=new Z;b=new J7;c=new Bo;b.na=c;b.nX=0.0;c.ko=0.0;c.kp=0.0;c.kq=0.0;b.nX=0.0;AIj=b;AIe=new Bo;AIV=new Bo;AF8=new Bo;ANN=new Bo;AFK=new Bo;AQ2=new Bo;AQ1=new Bo;AQZ=new Bo;AGP=new Bo;};
let ZK=F();
let Q$=F(Hh);
function LT(){C.call(this);this.lC=null;}
let O5=null,AJs=null,AQB=null,Jj=null,HS=null,L9=null,VT=null,P4=null,ALf=null,AT2=null,ALi=null;
let Ez=()=>{Ez=BR(LT);YD();};
let AN3=a=>{let b,c;Ez();b=Cc(16);c=b.data;a.lC=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
Dj=()=>{let a=new LT();AN3(a);return a;},
Dm=(a,b)=>{let c;c=b.data;b=a.lC.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
S8=(a,b)=>{let c,d,e,f,g;Ez();c=O5;d=c.data;e=a.lC.data;f=e[0];g=b.lC.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Dm(a,c);},
Lq=a=>{let b;b=a.lC.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
MJ=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Lq(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.lC.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
ADL=(a,b,c)=>{let d,e,f,g,h,i;Ez();d=Jj;e=b.ko;f=b.kp;g=b.kq;d.ko=e;d.kp=f;d.kq=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/CH(f);f=d.ko*e;g=d.kp*e;e=d.kq*e;d.ko=f;d.kp=g;d.kq=e;}d=HS;e=b.ko;f=b.kp;g=b.kq;d.ko=e;d.kp=f;d.kq=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/CH(f);f=d.ko*e;g=d.kp*e;e=d.kq*e;d.ko=f;d.kp=g;d.kq=e;}b=Qq(HS,c);e=b.ko;e=e*e;f=b.kp;e=e+f*f;f=b.kq;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/CH(e);h=b.ko*g;e=b.kp*g;f=b.kq*g;b.ko=h;b.kp=e;b.kq=f;}b=L9;c=HS;e=c.ko;f=c.kp;g=c.kq;b.ko=e;b.kp=f;b.kq=g;b=Qq(b,
Jj);e=b.ko;e=e*e;f=b.kp;e=e+f*f;f=b.kq;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/CH(f);f=b.ko*e;g=b.kp*e;e=b.kq*e;b.ko=f;b.kp=g;b.kq=e;}Lq(a);i=a.lC.data;b=HS;i[0]=b.ko;i[4]=b.kp;i[8]=b.kq;b=L9;i[1]=b.ko;i[5]=b.kp;i[9]=b.kq;b=Jj;i[2]= -b.ko;i[6]= -b.kp;i[10]= -b.kq;return a;},
AQF=(a,b)=>{let c;c=a.lC.data;c[0]=b.pj;c[1]=b.pl;c[2]=0.0;c[3]=0.0;c[4]=b.ph;c[5]=b.pm;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.pi;c[13]=b.pk;c[14]=0.0;c[15]=1.0;return a;},
OJ=(b,c)=>{let d,e,f;Ez();d=b.data;c=c.data;e=Cc(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Dv(e,0,b,0,16);},
ARm=b=>{Ez();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
AEc=b=>{let c,d,e;Ez();c=Cc(16);d=ARm(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AGD=(b,c,d)=>{let e,f,g,h,i,j,k,l;Ez();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
YD=()=>{let b;O5=Cc(16);b=new EH;b.oG=0.0;b.oD=0.0;b.oE=0.0;b.oF=1.0;AJs=b;b=new EH;b.oG=0.0;b.oD=0.0;b.oE=0.0;b.oF=1.0;AQB=b;b=new Bo;C0();Jj=b;HS=new Bo;L9=new Bo;VT=new Bo;P4=Dj();ALf=new Bo;AT2=new Bo;ALi=new Bo;};
let P3=F(0);
let MI=F();
function Tg(){let a=this;MI.call(a);a.yL=Ce;a.yM=Ce;}
let Tp=F(BP);
let Ui=F(BP);
function Nh(){let a=this;C.call(a);a.p9=null;a.o1=null;a.tu=null;}
let ATV=null,VK=null,AKM=null;
let Jl=()=>{Jl=BR(Nh);AId();};
let Ym=a=>{let b,c,d,e,f,g;Jl();b=R(J7,6);c=b.data;a.p9=b;b=R(Bo,8);d=b.data;e=new Bo;C0();d[0]=e;d[1]=new Bo;d[2]=new Bo;d[3]=new Bo;d[4]=new Bo;d[5]=new Bo;d[6]=new Bo;d[7]=new Bo;a.o1=b;a.tu=Cc(24);f=0;while(f<6){e=new J7;g=new Bo;e.na=g;e.nX=0.0;g.ko=0.0;g.kp=0.0;g.kq=0.0;e.nX=0.0;c[f]=e;f=f+1|0;}},
AM1=()=>{let a=new Nh();Ym(a);return a;},
ALz=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;Jl();c=VK;d=c.data;Dv(c,0,a.tu,0,d.length);c=b.lC;e=a.tu;f=0;Ez();g=0;while(g<8){AGD(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.o1.data[f];c=a.tu.data;j=h+1|0;i.ko=c[h];g=j+1|0;i.kp=c[j];h=g+1|0;i.kq=c[g];f=f+1|0;}b=a.p9.data[0];c=a.o1.data;i=c[1];k=c[0];l=c[2];m=b.na;n=i.ko;o=i.kp;p=i.kq;m.ko=n;m.kp=o;m.kq=p;q=k.ko;r=k.kp;s=k.kq;t=n-q;u=o-r;p=p-s;m.ko=t;m.kp=u;m.kq=p;q=k.ko-l.ko;r=k.kp-l.kp;s=k.kq-l.kq;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ko=n;m.kp=s;m.kq
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CH(r);r=m.ko*q;s=m.kp*q;q=m.kq*q;m.ko=r;m.kp=s;m.kq=q;}k=b.na;b.nX= -(i.ko*k.ko+i.kp*k.kp+i.kq*k.kq);b=a.p9.data[1];c=a.o1.data;i=c[4];k=c[5];l=c[7];m=b.na;n=i.ko;o=i.kp;p=i.kq;m.ko=n;m.kp=o;m.kq=p;q=k.ko;r=k.kp;s=k.kq;t=n-q;u=o-r;p=p-s;m.ko=t;m.kp=u;m.kq=p;q=k.ko-l.ko;r=k.kp-l.kp;s=k.kq-l.kq;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ko=n;m.kp=s;m.kq=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CH(r);r=m.ko*q;s=m.kp*q;q=m.kq*q;m.ko=r;m.kp=s;m.kq=q;}k=b.na;b.nX= -(i.ko*k.ko+i.kp
*k.kp+i.kq*k.kq);b=a.p9.data[2];c=a.o1.data;i=c[0];k=c[4];l=c[3];m=b.na;n=i.ko;o=i.kp;t=i.kq;m.ko=n;m.kp=o;m.kq=t;r=k.ko;q=k.kp;s=k.kq;r=n-r;u=o-q;p=t-s;m.ko=r;m.kp=u;m.kq=p;q=k.ko-l.ko;s=k.kp-l.kp;n=k.kq-l.kq;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.ko=o;m.kp=n;m.kq=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/CH(r);r=m.ko*q;s=m.kp*q;q=m.kq*q;m.ko=r;m.kp=s;m.kq=q;}k=b.na;b.nX= -(i.ko*k.ko+i.kp*k.kp+i.kq*k.kq);b=a.p9.data[3];c=a.o1.data;k=c[5];i=c[1];l=c[6];m=b.na;n=k.ko;t=k.kp;u=k.kq;m.ko=n;m.kp=t;m.kq=u;q=i.ko;r=i.kp;s
=i.kq;o=n-q;t=t-r;u=u-s;m.ko=o;m.kp=t;m.kq=u;p=i.ko-l.ko;q=i.kp-l.kp;r=i.kq-l.kq;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.ko=s;m.kp=r;m.kq=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/CH(r);r=m.ko*q;s=m.kp*q;q=m.kq*q;m.ko=r;m.kp=s;m.kq=q;}i=b.na;b.nX= -(k.ko*i.ko+k.kp*i.kp+k.kq*i.kq);b=a.p9.data[4];c=a.o1.data;i=c[2];k=c[3];l=c[6];m=b.na;n=i.ko;o=i.kp;p=i.kq;m.ko=n;m.kp=o;m.kq=p;q=k.ko;r=k.kp;s=k.kq;t=n-q;u=o-r;p=p-s;m.ko=t;m.kp=u;m.kq=p;q=k.ko-l.ko;r=k.kp-l.kp;s=k.kq-l.kq;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ko=n;m.kp=s;m.kq
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CH(r);r=m.ko*q;s=m.kp*q;q=m.kq*q;m.ko=r;m.kp=s;m.kq=q;}k=b.na;b.nX= -(i.ko*k.ko+i.kp*k.kp+i.kq*k.kq);b=a.p9.data[5];c=a.o1.data;i=c[4];k=c[0];l=c[1];m=b.na;n=i.ko;o=i.kp;p=i.kq;m.ko=n;m.kp=o;m.kq=p;q=k.ko;r=k.kp;s=k.kq;t=n-q;u=o-r;p=p-s;m.ko=t;m.kp=u;m.kq=p;q=k.ko-l.ko;r=k.kp-l.kp;s=k.kq-l.kq;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ko=n;m.kp=s;m.kq=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CH(r);r=m.ko*q;s=m.kp*q;q=m.kq*q;m.ko=r;m.kp=s;m.kq=q;}k=b.na;b.nX= -(i.ko*k.ko+i.kp
*k.kp+i.kq*k.kq);},
AId=()=>{let b,c,d,e,f,g,h,i,j;b=R(Bo,8);c=b.data;d=new Bo;C0();d.ko=(-1.0);d.kp=(-1.0);d.kq=(-1.0);c[0]=d;d=new Bo;d.ko=1.0;d.kp=(-1.0);d.kq=(-1.0);c[1]=d;d=new Bo;d.ko=1.0;d.kp=1.0;d.kq=(-1.0);c[2]=d;d=new Bo;d.ko=(-1.0);d.kp=1.0;d.kq=(-1.0);c[3]=d;d=new Bo;d.ko=(-1.0);d.kp=(-1.0);d.kq=1.0;c[4]=d;d=new Bo;d.ko=1.0;d.kp=(-1.0);d.kq=1.0;c[5]=d;d=new Bo;d.ko=1.0;d.kp=1.0;d.kq=1.0;c[6]=d;d=new Bo;d.ko=(-1.0);d.kp=1.0;d.kq=1.0;c[7]=d;ATV=b;b=Cc(24);e=b.data;VK=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.ko;j=i+1|0;e[i]=d.kp;f=j+1|0;e[j]=d.kq;h=h+1|0;}AKM=new Bo;};
function EH(){let a=this;C.call(a);a.oG=0.0;a.oD=0.0;a.oE=0.0;a.oF=0.0;}
let RI=null,RH=null;
let AVW=()=>{let b;b=new EH;b.oG=0.0;b.oD=0.0;b.oE=0.0;b.oF=0.0;RI=b;b=new EH;b.oG=0.0;b.oD=0.0;b.oE=0.0;b.oF=0.0;RH=b;};
function Ow(){let a=this;C.call(a);a.zx=null;a.z2=null;a.zD=null;}
let ALa=F();
function Bo(){let a=this;C.call(a);a.ko=0.0;a.kp=0.0;a.kq=0.0;}
let ABh=null,ABi=null,ABg=null,AJ$=null,ASc=null;
let C0=()=>{C0=BR(Bo);Zm();};
let Qq=(a,b)=>{let c,d,e,f,g,h,i;c=a.kp;d=b.kq;e=c*d;f=a.kq;g=b.kp;h=e-f*g;e=b.ko;f=f*e;i=a.ko;d=f-i*d;c=i*g-c*e;a.ko=h;a.kp=d;a.kq=c;return a;},
ABI=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.lC.data;d=a.ko;e=d*c[3];f=a.kp;e=e+f*c[7];g=a.kq;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.ko=i;a.kp=j;a.kq=d;return a;},
Zm=()=>{let b;b=new Bo;C0();b.ko=1.0;b.kp=0.0;b.kq=0.0;ABh=b;b=new Bo;b.ko=0.0;b.kp=1.0;b.kq=0.0;ABi=b;b=new Bo;b.ko=0.0;b.kp=0.0;b.kq=1.0;ABg=b;b=new Bo;b.ko=0.0;b.kp=0.0;b.kq=0.0;AJ$=b;ASc=Dj();};
let AFi=F();
let ADd=F(Dw);
let Mh=F(Ga);
let ALM=F();
let AAb=F();
let AP8=F();
function J7(){let a=this;C.call(a);a.na=null;a.nX=0.0;}
let To=F(BP);
let AQa=F();
let AAk=F();
let AM4=F();
let AP6=F();
let AKw=F(0);
let AFx=F();
let ANV=F();
let Gq=null;
let ACQ=()=>{let b,c;Gq=Cc(16384);b=0;while(b<16384){Gq.data[b]=J0((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=Gq.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function KI(){let a=this;C.call(a);a.zI=null;a.yR=null;}
let Za=null,ASj=null;
let MF=()=>{MF=BR(KI);ACq();};
let ACq=()=>{let b,c,d,e,f,g,h,$$je;CE();b=Bw;c=BF(b,M(D3));b=c<0?null:b.kY.data[c];if(b===null){b=new CJ;d=new Bh;d.kF=0;d.ki=R(C,4);b.kw=d;b.k6=100;a:{try{d=CS(M(D3),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{d=CP(M(D3),null);CU(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}d=null;}b.kQ=d;if(d===null){b=new BA;d=new K;d.ka=G(16);E(d,d.j_,A(21));if(M(D3).kl===null)M(D3).kl=W(M(D3).ks.$meta.name);e=M(D3).kl;E(d,d.j_,e);e=new I;f=d.ka;g
=f.data;c=d.j_;h=g.length;if(c>=0&&c<=(h-0|0)){e.kb=L(f.data,0,c);b.kc=1;b.kd=1;b.kf=e;B(b);}e=new H;e.kc=1;e.kd=1;B(e);}Ci(Bw,M(D3),b);}Za=b;e=new F5;e.pG=1;e.mS=Ba(4);ASj=e;};
function It(){let a=this;C.call(a);a.pp=null;a.vE=0.0;a.vF=0.0;a.vD=0.0;a.vA=0.0;a.vo=0;a.v9=0;}
let Nr=(a,b,c,d,e)=>{let f,g,h;f=a.pp.nK;g=1.0/f.nu;h=1.0/f.ns;a.ca(b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.vo=d;if(e<0)e= -e|0;a.v9=e;},
Px=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.pp.nK;g=f.nu;h=f.ns;i=Ej(d-b);j=g;i=i*j;a.vo=i+CT(i)*0.5|0;k=Ej(e-c);i=h;k=k*i;l=k+CT(k)*0.5|0;a.v9=l;if(a.vo==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.vE=b;a.vF=c;a.vD=d;a.vA=e;};
function GU(){let a=this;It.call(a);a.tz=null;a.u0=null;a.Ac=0.0;a.Ab=0.0;a.ym=0.0;a.xh=0.0;a.A4=0.0;a.A3=0.0;a.At=0.0;a.yy=0.0;a.yx=0.0;a.sV=0;}
let Ic=(a,b,c,d,e,f)=>{let g,h,i,j;a.tz=Cc(20);g=new BM;g.k_=1.0;g.k$=1.0;g.k9=1.0;g.la=1.0;CV(g);a.u0=g;a.yy=1.0;a.yx=1.0;a.sV=1;if(b===null){b=new Bl;b.kc=1;b.kd=1;b.kf=A(60);B(b);}a.pp=b;Nr(a,c,d,e,f);b=a.u0;b.k_=1.0;b.k$=1.0;b.k9=1.0;b.la=1.0;CV(b);h=Es(a.u0);i=a.tz.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;Zh(a,h,f);h=a.ym/2.0;j=a.xh/2.0;a.A4=h;a.A3=j;a.sV=1;},
AWA=(a,b,c,d,e)=>{let f=new GU();Ic(f,a,b,c,d,e);return f;},
Zh=(a,b,c)=>{let d,e,f,g;a.ym=b;a.xh=c;if(a.sV)return;if(a.At===0.0&&a.yy===1.0&&a.yx===1.0){d=a.Ac;e=d+b;b=a.Ab;f=b+c;g=a.tz.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.sV=1;},
APA=(a,b,c,d,e)=>{let f;Px(a,b,c,d,e);f=a.tz.data;f[3]=b;f[4]=e;f[8]=b;f[9]=c;f[13]=d;f[14]=c;f[18]=d;f[19]=e;};
let Rk=F();
let AMJ=F();
let Pp=null;
let AXE=()=>{Pp=new BM;};
function BM(){let a=this;C.call(a);a.k_=0.0;a.k$=0.0;a.k9=0.0;a.la=0.0;}
let LA=null,Ry=null,AKY=null,Wv=null,AGA=null,Ty=0.0,YO=null,AR3=null,XG=null,AQw=null,ARt=null,AL1=null,APO=null,AE2=null,AEp=null,ANA=null,ASi=null,AQn=null,ATU=null,YC=null,AGy=null,ATP=null,AJF=null,ASz=null,ARb=null,APG=null,AJB=null,X0=null,AJh=null,AEH=null,AF1=null,AD9=null,AJc=null,AMQ=null,ANW=null;
let CV=a=>{let b,c;b=a.k_;if(b<0.0)a.k_=0.0;else if(b>1.0)a.k_=1.0;c=a.k$;if(c<0.0)a.k$=0.0;else if(c>1.0)a.k$=1.0;c=a.k9;if(c<0.0)a.k9=0.0;else if(c>1.0)a.k9=1.0;c=a.la;if(c<0.0)a.la=0.0;else if(c>1.0)a.la=1.0;return a;},
Es=a=>{return Lv(((255.0*a.la|0)<<24|(255.0*a.k9|0)<<16|(255.0*a.k$|0)<<8|255.0*a.k_|0)&(-16777217));},
DD=(b,c,d,e)=>{return Lv(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Cs=(b,c)=>{b.k_=((c&(-16777216))>>>24|0)/255.0;b.k$=((c&16711680)>>>16|0)/255.0;b.k9=((c&65280)>>>8|0)/255.0;b.la=(c&255)/255.0;},
Xg=()=>{let b;b=new BM;b.k_=1.0;b.k$=1.0;b.k9=1.0;b.la=1.0;CV(b);LA=b;b=new BM;Cs(b,(-1077952513));Ry=b;b=new BM;Cs(b,2139062271);AKY=b;b=new BM;Cs(b,1061109759);Wv=b;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=0.0;b.la=1.0;CV(b);AGA=b;Ty=Es(LA);b=new BM;b.k_=0.0;b.k$=0.0;b.k9=0.0;b.la=0.0;CV(b);YO=b;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=1.0;b.la=1.0;CV(b);AR3=b;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=0.5;b.la=1.0;CV(b);XG=b;b=new BM;Cs(b,1097458175);AQw=b;b=new BM;Cs(b,1887473919);ARt=b;b=new BM;Cs(b,(-2016482305));AL1=b;b=new BM;b.k_
=0.0;b.k$=1.0;b.k9=1.0;b.la=1.0;CV(b);APO=b;b=new BM;b.k_=0.0;b.k$=0.5;b.k9=0.5;b.la=1.0;CV(b);AE2=b;b=new BM;Cs(b,16711935);AEp=b;b=new BM;Cs(b,2147418367);ANA=b;b=new BM;Cs(b,852308735);ASi=b;b=new BM;Cs(b,579543807);AQn=b;b=new BM;Cs(b,1804477439);ATU=b;b=new BM;Cs(b,(-65281));YC=b;b=new BM;Cs(b,(-2686721));AGy=b;b=new BM;Cs(b,(-626712321));ATP=b;b=new BM;Cs(b,(-5963521));AJF=b;b=new BM;Cs(b,(-1958407169));ASz=b;b=new BM;Cs(b,(-759919361));ARb=b;b=new BM;Cs(b,(-1306385665));APG=b;b=new BM;Cs(b,(-16776961));AJB
=b;b=new BM;Cs(b,(-13361921));X0=b;b=new BM;Cs(b,(-8433409));AJh=b;b=new BM;Cs(b,(-92245249));AEH=b;b=new BM;Cs(b,(-9849601));AF1=b;b=new BM;b.k_=1.0;b.k$=0.0;b.k9=1.0;b.la=1.0;CV(b);AD9=b;b=new BM;Cs(b,(-1608453889));AJc=b;b=new BM;Cs(b,(-293409025));AMQ=b;b=new BM;Cs(b,(-1339006721));ANW=b;};
function N7(){let a=this;C.call(a);a.nk=0;a.o9=0;a.oq=null;a.oV=null;a.ok=null;a.or=null;a.pu=0.0;}
let Iu=0.0;
let AMK=(a,b,c,d)=>{if(b!==null&&!(!d&&a.ok===b)){B5.ch(a.nk,10242,b.si);a.ok=b;}if(c!==null&&!(!d&&a.or===c)){B5.ch(a.nk,10243,c.si);a.or=c;}},
XA=(a,b,c,d)=>{if(b!==null&&!(!d&&a.oq===b)){B5.ch(a.nk,10241,b.oz);a.oq=b;}if(c!==null&&!(!d&&a.oV===c)){B5.ch(a.nk,10240,c.oz);a.oV=c;}},
AE$=()=>{let b,c,d,e,f;b=Iu;if(b>0.0)return b;if(!(B6.qm.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){Iu=1.0;return 1.0;}if(!Do){c=Cc(16);d=c.data.length;e=new Ip;f=0+d|0;e.kC=(-1);e.kL=d;e.kj=d;e.kr=0;e.kj=f;e.ra=0;e.rN=0;e.qE=c;}else{e=new C4;c=BN(64);e.kC=(-1);e.kL=64;e.kj=64;e.lk=Ct;e.lP=0;e.le=c;e.kr=0;e.kj=64;e.mu=1;e.lY=0;e.lk=Dr();e=Fm(e);}CK(e,0);CX(e,e.kL);Br.cm(34047,e);b=Sc(e,0);Iu=b;return b;},
ASn=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.pT)Qd(c);if(Pa===U5){c=new T;c.kc=1;c.kd=1;c.kf=A(61);B(c);}if(!c.pT){e=new T;e.kc=1;e.kd=1;e.kf=A(62);B(e);}c.pT=0;f=c.re;c.re=null;g=1;h=c.qr;e=f.lN;if(h===(e===null?FS:Iw(e.l_)))e=f;else{e=new F1;h=f.lN;J4(e,h===null?f.mx:h.ms,h===null?f.mB:h.mr,c.qr);h=Jx;e.rL=h;i=e.lN;if(i===null){Fr(e);h=e.ml;i=Bz(FA.kt);h.globalCompositeOperation=i;}else{j=h!==h?1:0;MY(i.mp,j);}i=f.lN;k=i===null?f.mx:i.ms;l=i===null?f.mB:i.mr;h=e.lN;if(h===null){Fr(f);Kp(e,
f.oO,0,0,k,l,0,0,k,l);}else{m=i.mp;n=h.mp;Ka(m,n,0,0,k,l,0,0,k,l);}if(f.o8){e=new T;e.kc=1;e.kd=1;e.kf=A(63);B(e);}ET();Hc(F8,f.qv);h=f.lN;if(h!==null)Il(h.mp);f.o8=1;g=1;}B5.cx(3317,1);if(c.xc){c=e.lN;AOb(b,e,c===null?e.mx:c.ms,c===null?e.mB:c.mr);}else{c=B5;h=e.lN;if(h===null)o=6408;else a:{j=h.l_;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new T;e=new K;e.ka=G(16);Cb(e,e.j_,Cp(A(64)));J(e,e.j_,j,10);h=new I;p=e.ka;q=p.data;d=e.j_;j
=q.length;if(d>=0&&d<=(j-0|0)){h.kb=L(p.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}r=h===null?e.mx:h.ms;k=h===null?e.mB:h.mr;if(h===null)m=6408;else b:{l=h.l_;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new T;e=new K;e.ka=G(16);Eu(e,e.j_,A(64));J(e,e.j_,l,10);h=new I;p=e.ka;q=p.data;d=e.j_;j=q.length;if(d>=0&&d<=(j-0|0)){h.kb=L(p.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}if(h===null)l=
5121;else c:{l=h.l_;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new T;e=new K;e.ka=G(16);Cb(e,e.j_,Cp(A(64)));J(e,e.j_,l,10);h=new I;p=e.ka;q=p.data;d=e.j_;j=q.length;if(d>=0&&d<=(j-0|0)){h.kb=L(p.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}l=5121;}c.cA(b,d,o,r,k,0,m,l,e.q6);}if(g){if(e.o8){e=new T;e.kc=1;e.kd=1;e.kf=A(63);B(e);}ET();Hc(F8,e.qv);c=e.lN;if(c!==null)Il(c.mp);e.o8=1;}},
AVR=()=>{Iu=0.0;};
function F_(){N7.call(this);this.nK=null;}
let D0=null;
let G$=(a,b)=>{let c,d;a.nK=b;if(!b.pT)Qd(b);B5.cB(a.nk,a.o9);ASn(3553,b,0);XA(a,a.oq,a.oV,1);AMK(a,a.ok,a.or,1);c=a.pu;d=AE$();if(d!==1.0){c=AOp(c,d);Br.cH(3553,34046,c);a.pu=c;}B5.cB(a.nk,0);},
AKx=a=>{let b,c,d,e,f,g,h,i;b=a.nK;if(!(b instanceof Lj)){b=a;if(!b.$id$){c=Fd();b.$id$=c;}d=Bi(a.$id$,4);b=new K;b.ka=G(16);E(b,b.j_,A(1));e=b.j_;if(d===null)d=A(2);E(b,e,d);c=new I;f=b.ka;g=f.data;h=b.j_;i=g.length;if(h>=0&&h<=(i-0|0)){c.kb=L(f.data,0,h);return c;}b=new H;b.kc=1;b.kd=1;B(b);}c=b;if(!c.$id$){d=Fd();c.$id$=d;}d=Bi(b.$id$,4);b=new K;b.ka=G(16);E(b,b.j_,A(1));e=b.j_;if(d===null)d=A(2);E(b,e,d);c=new I;f=b.ka;g=f.data;h=b.j_;i=g.length;if(h>=0&&h<=(i-0|0)){c.kb=L(f.data,0,h);return c;}b=new H;b.kc
=1;b.kd=1;B(b);},
ANC=()=>{let b,c,d,e;b=new Jm;c=Kc(16);b.pD=0;d=R(F2,c);e=d.data;b.mv=d;b.tH=0.75;b.qF=e.length*0.75|0;D0=b;};
function Bh(){let a=this;C.call(a);a.ki=null;a.ke=0;a.kF=0;a.kO=null;}
let PP=a=>{a.kF=1;a.ki=R(C,16);},
C5=()=>{let a=new Bh();PP(a);return a;},
V$=(a,b)=>{a.kF=1;a.ki=R(C,b);},
AWV=a=>{let b=new Bh();V$(b,a);return b;},
P_=(a,b,c)=>{a.kF=b;a.ki=R(C,c);},
AUX=(a,b)=>{let c=new Bh();P_(c,a,b);return c;},
IC=(a,b,c,d)=>{a.kF=b;if(d===null){d=new Ds;d.kc=1;d.kd=1;B(d);}if(d===M(Bp)){d=new Bl;d.kc=1;d.kd=1;B(d);}if(c>=0){a.ki=Ee(d.ks,c);return;}d=new Eh;d.kc=1;d.kd=1;B(d);},
AUI=(a,b,c)=>{let d=new Bh();IC(d,a,b,c);return d;},
QV=(a,b)=>{a.kF=1;if(b===null){b=new Ds;b.kc=1;b.kd=1;B(b);}if(b!==M(Bp)){a.ki=Ee(b.ks,16);return;}b=new Bl;b.kc=1;b.kd=1;B(b);},
AU4=a=>{let b=new Bh();QV(b,a);return b;},
Vt=(a,b)=>{let c,d,e,f,g;c=b.kF;d=b.ke;e=b.ki.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BD;f.ks=e;g=f;e.classObject=g;}}g=EA(f);a.kF=c;if(g===null){b=new Ds;b.kc=1;b.kd=1;B(b);}if(g===M(Bp)){b=new Bl;b.kc=1;b.kd=1;B(b);}if(d>=0){g=Ee(g.ks,d);a.ki=g;c=b.ke;a.ke=c;GP(b.ki,0,g,0,c);return;}b=new Eh;b.kc=1;b.kd=1;B(b);},
AUo=a=>{let b=new Bh();Vt(b,a);return b;},
U8=(a,b)=>{L2(a,1,b,0,b.data.length);},
AW5=a=>{let b=new Bh();U8(b,a);return b;},
L2=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BD;g.ks=f;h=g;f.classObject=h;}}h=EA(g);a.kF=b;if(h===null){h=new Ds;h.kc=1;h.kd=1;B(h);}if(h===M(Bp)){h=new Bl;h.kc=1;h.kd=1;B(h);}if(e>=0){h=Ee(h.ks,e);a.ki=h;a.ke=e;GP(c,d,h,0,e);return;}h=new Eh;h.kc=1;h.kd=1;B(h);},
AV9=(a,b,c,d)=>{let e=new Bh();L2(e,a,b,c,d);return e;},
S=(a,b)=>{let c,d,e,f;c=a.ki;d=c.data;e=a.ke;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=I5(a,e);}c=c.data;f=a.ke;a.ke=f+1|0;c[f]=b;},
Q=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.ke)return a.ki.data[b];c=new H;d=new K;d.ka=G(16);E(d,d.j_,A(18));J(d,d.j_,b,10);E(d,d.j_,A(19));b=a.ke;J(d,d.j_,b,10);e=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);c.kc=1;c.kd=1;c.kf=e;B(c);}d=new H;d.kc=1;d.kd=1;B(d);},
SZ=(a,b,c)=>{let d,e,f,g,h,i;d=a.ke;if(b>d){c=new H;e=new K;e.ka=G(16);E(e,e.j_,A(65));J(e,e.j_,b,10);E(e,e.j_,A(66));f=a.ke;J(e,e.j_,f,10);g=new I;h=e.ka;i=h.data;d=e.j_;f=i.length;if(d>=0&&d<=(f-0|0)){g.kb=L(h.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}h=a.ki;if(d==h.data.length){d=d*1.75|0;if(8>d)d=8;h=I5(a,d);}if(!a.kF){i=h.data;i[a.ke]=i[b];}else Dv(h,b,h,b+1|0,a.ke-b|0);h=h.data;a.ke=a.ke+1|0;h[b]=c;},
Ly=(a,b,c)=>{let d,e,f;a:{d=a.ki;e=a.ke-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(f[e]===b)break;e=c;}return 1;}while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(b.cO(f[e]))return 1;e=c;}}return 0;},
DB=(a,b,c)=>{let d,e,f;a:{d=a.ki;if(!c&&b!==null){e=0;f=a.ke;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.ke;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
I0=(a,b,c)=>{let d,e,f;a:{d=a.ki;if(!(!c&&b!==null)){e=0;f=a.ke;while(e<f){if(d.data[e]===b){Cv(a);Di(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.ke;while(true){if(e>=f)break a;if(b.cO(d.data[e])){Cv(a);Di(a,e);return 1;}e=e+1|0;}}}return 0;},
Di=(a,b)=>{let c,d,e,f,g,h,i;c=a.ke;if(b<c){d=a.ki;e=d.data;f=e[b];g=c-1|0;a.ke=g;if(!a.kF)e[b]=e[g];else Dv(d,b+1|0,d,b,g-b|0);e[a.ke]=null;return f;}f=new H;h=new K;h.ka=G(16);E(h,h.j_,A(18));J(h,h.j_,b,10);E(h,h.j_,A(19));b=a.ke;J(h,h.j_,b,10);i=new I;d=h.ka;e=d.data;g=h.j_;c=e.length;if(g>=0&&g<=(c-0|0)){i.kb=L(d.data,0,g);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;f.kc=1;f.kd=1;B(f);},
QO=a=>{let b,c,d,e,f,g;b=a.ki;c=0;d=a.ke;e=null;if(c>d){e=new Bl;e.kc=1;e.kd=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.ke=0;},
I5=(a,b)=>{let c,d,e,f,g,h;c=a.ki;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BD;e.ks=d;f=e;d.classObject=f;}}e=EA(e);if(e===null){e=new Ds;e.kc=1;e.kd=1;B(e);}if(e===M(Bp)){e=new Bl;e.kc=1;e.kd=1;B(e);}if(b<0){e=new Eh;e.kc=1;e.kd=1;B(e);}e=Ee(e.ks,b);d=e.data;g=a.ke;h=d.length;if(g<h)h=g;GP(c,0,e,0,h);a.ki=e;return e;},
GD=a=>{let b;if(CI){b=new Cx;b.k5=1;b.lb=a;b.me=1;return b;}if(a.kO===null){b=new C7;b.mq=a;b.mt=1;a.kO=b;}return CQ(a.kO);},
Sx=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.kF)return 0;if(!(b instanceof Bh))return 0;c=b;if(!c.kF)return 0;d=a.ke;if(d!=c.ke)return 0;e=a.ki;f=c.ki;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cO(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
VB=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.ke)return A(67);b=a.ki;c=new So;d=G(32);e=d.data;c.m_=d;f=c.mg;if(f==e.length)Gv(c,f+1|0);b=b.data;e=c.m_.data;g=c.mg;c.mg=g+1|0;e[g]=91;h=b[0];if(h===null)JZ(c);else{h=h.T();if(h===null)JZ(c);else{i=h.kb.length;j=c.mg+i|0;if(j>c.m_.data.length)Gv(c,j);Lt(h,0,i,c.m_,c.mg);c.mg=j;}}i=1;while(i<a.ke){g=A(47).kb.length;k=c.mg+g|0;if(k>c.m_.data.length)Gv(c,k);Lt(A(47),0,g,c.m_,c.mg);c.mg=k;h=b[i];if(h===null)JZ(c);else{h=h.T();if(h===null)JZ(c);else{k=h.kb.length;j=c.mg+k|0;if
(j>c.m_.data.length)Gv(c,j);Lt(h,0,k,c.m_,c.mg);c.mg=j;}}i=i+1|0;}f=c.mg;if(f==c.m_.data.length)Gv(c,f+1|0);a:{b=c.m_;e=b.data;g=c.mg;f=g+1|0;c.mg=f;e[g]=93;if(!f)c=A(68);else{c=new I;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.kb=L(b.data,0,f);}return c;}c=new H;c.kc=1;c.kd=1;B(c);};
function Km(){let a=this;C.call(a);a.u3=0;a.pE=null;a.kY=null;a.wY=0.0;a.vR=0;a.tr=0;a.tn=0;}
let QQ=null;
let AJW=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wY=c;d=JW(b,c);a.vR=d*c|0;b=d-1|0;a.tn=b;a.tr=Fp(X(b));a.pE=R(C,d);a.kY=R(C,d);return;}e=new Bl;f=new K;f.ka=G(16);E(f,f.j_,A(69));F4(f,f.j_,c);g=new I;h=f.ka;i=h.data;d=f.j_;j=i.length;if(d>=0&&d<=(j-0|0)){g.kb=L(h.data,0,d);e.kc=1;e.kd=1;e.kf=g;B(e);}f=new H;f.kc=1;f.kd=1;B(f);},
E6=(a,b)=>{let c=new Km();AJW(c,a,b);return c;},
BF=(a,b)=>{let c,d,e;if(b===null){c=new Bl;c.kc=1;c.kd=1;c.kf=A(70);B(c);}d=a.pE;e=Bm(Bg(Bd(X(b.cU()),D(2135587861, 2654435769)),a.tr));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cO(b))break;e=(e+1|0)&a.tn;}return e;},
Ci=(a,b,c)=>{let d,e,f;d=BF(a,b);if(d>=0){e=a.kY.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.pE.data;e[d]=b;a.kY.data[d]=c;d=a.u3+1|0;a.u3=d;if(d>=a.vR)ABE(a,e.length<<1);return null;},
ABE=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.pE.data.length;a.vR=b*a.wY|0;d=b-1|0;a.tn=d;a.tr=Fp(X(d));e=a.pE;f=a.kY;a.pE=R(C,b);a.kY=R(C,b);if(a.u3>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.pE;b=Bm(Bg(Bd(X(g.cU()),D(2135587861, 2654435769)),a.tr));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.tn;}j[b]=g;a.kY.data[b]=h;}d=d+1|0;}}}},
AVk=()=>{QQ=new C;};
let AF6=F(Km);
let ASU=F();
function Eb(){let a=this;C.call(a);a.m2=0;a.mL=0;a.m$=0;a.m1=0;a.ot=0;a.m6=null;a.oJ=0;a.pV=0;}
let AKF=(a,b)=>{if(!(b instanceof Eb))return 0;return AFO(a,b);},
AFO=(a,b)=>{let c,d,e;a:{if(b!==null&&a.m2==b.m2&&a.mL==b.mL&&a.m1==b.m1&&a.m$==b.m$){c=a.m6;d=b.m6;if(c===d)e=1;else if(!(d instanceof I))e=0;else{d=d;e=c.kb!==d.kb?0:1;}if(e&&a.oJ==b.oJ){e=1;break a;}}e=0;}return e;};
let ATa=F();
let AHC=F();
let AK9=F();
let AI9=F();
let RX=F();
let XF=null;
let Ta=()=>{Ta=BR(RX);AHK();};
let AHK=()=>{let b,c,d;b=new KP;N9();c=new Bo;C0();b.xo=c;d=new Bo;b.xy=d;b.w2=new Bo;b.xA=new Bo;c.ko=0.0;c.kp=0.0;c.kq=0.0;d.ko=0.0;d.kp=0.0;d.kq=0.0;ALT(b,c,d);XF=b;};
let YB=F();
let AJ1=F();
let AIJ=F();
let AJw=F();
let APH=F();
let AFs=F();
let ARe=F();
let AHd=F();
let AAu=F();
let ABT=F();
let J6=F(BH);
let ATy=null,ARh=null,AEN=null;
let AFZ=()=>{let b,c;b=new J6;b.kt=A(71);b.kn=0;ATy=b;c=new J6;c.kt=A(72);c.kn=1;ARh=c;AEN=V(J6,[b,c]);};
let AJ6=F();
let TZ=F(0);
let DM=F();
let YM=F(DM);
let YK=F(DM);
let AH$=F(DM);
let AC7=F(DM);
let ANg=F(DM);
let Mc=F(DM);
let ACV=F(Mc);
let H0=F(0);
let AD7=F();
let Fx=F(0);
let AM2=F();
let ARa=F();
let ABj=F();
let EZ=F();
let ALV=F(EZ);
let HT=F(EZ);
let D6=F(HT);
let AEo=null;
let Rj=()=>{Rj=BR(D6);Zi();};
let Zi=()=>{let b;b=new Bo;C0();AEo=b;};
let AMI=F();
let APF=F(D6);
let AHr=F(D6);
let AR0=F(EZ);
let RN=null;
let AVx=()=>{RN=Cc(3);};
let LC=F(EZ);
let Yu=F(LC);
let ACR=F(D6);
let Hq=F(HT);
let AI3=F(Hq);
let AHo=F(D6);
let AJz=F(D6);
let AI0=F(Hq);
let HR=F(BH);
let AIO=null,ALQ=null,AEq=null,ABG=null;
let AK5=()=>{let b,c,d;b=new HR;b.kt=A(73);b.kn=0;AIO=b;c=new HR;c.kt=A(74);c.kn=1;ALQ=c;d=new HR;d.kt=A(75);d.kn=2;AEq=d;ABG=V(HR,[b,c,d]);};
let Gd=F();
let M$=F(Gd);
let W7=F(M$);
let H7=F(BH);
let ARg=null,ARS=null,WO=null,AR8=null;
let AGU=()=>{let b,c,d;b=new H7;b.kt=A(76);b.kn=0;ARg=b;c=new H7;c.kt=A(77);c.kn=1;ARS=c;d=new H7;d.kt=A(78);d.kn=2;WO=d;AR8=V(H7,[b,c,d]);};
let C$=F(Gd);
let Iv=F(C$);
let AA7=F();
let G5=F(C$);
let AQf=null,AQe=null,AQg=null,ARn=null;
let UK=()=>{UK=BR(G5);AIt();};
let AIt=()=>{let b;b=new Bo;C0();AQf=b;AQe=new Bo;AQg=new Bo;b=new EH;b.oG=0.0;b.oD=0.0;b.oE=0.0;b.oF=1.0;ARn=b;};
let EN=F(G5);
let Gj=F(EN);
let AD3=F(Gj);
let H5=F(C$);
let ATQ=F(H5);
let APC=F(C$);
let FP=F(C$);
let YE=F(FP);
let HC=F(C$);
let ADU=F(EN);
let AGh=F(EN);
let K2=F(C$);
let ALW=F(K2);
let Z0=F(FP);
let AHA=F(Gj);
let ALN=F(C$);
let AJK=F(FP);
let AL2=F(C$);
let ANP=F(G5);
let AGo=F(Dw);
let AAG=F(Dw);
let AAY=F(EN);
let AMv=F(HC);
let AR2=F(Iv);
let AKG=F(Iv);
let ANz=F(HC);
let AIw=F(Gj);
let ASJ=F(H5);
let EX=F(Gd);
let AI8=F(EX);
let FV=F();
let AMW=F(FV);
let AOh=F(EX);
let APB=F(EX);
let AQD=F(FV);
let ADB=F(EX);
let API=F(FV);
let KF=F(0);
let Ol=F(0);
function BD(){let a=this;C.call(a);a.kl=null;a.ks=null;a.qL=null;}
let UQ=0;
let AWH=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BD;c.ks=b;d=c;b.classObject=d;}return c;},
AIY=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=Fd();b.$id$=c;}d=a.$id$;b=new K;b.ka=G(16);E(b,b.j_,A(79));J(b,b.j_,d,10);c=new I;e=b.ka;f=e.data;g=b.j_;d=f.length;if(g>=0&&g<=(d-0|0)){c.kb=L(e.data,0,g);return c;}b=new H;b.kc=1;b.kd=1;B(b);},
EA=a=>{let b,c,d;b=a.ks.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.ks=b;d=c;b.classObject=d;}}return c;},
AH2=()=>{D4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Tj(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Bp,callable:function(obj,args){Kh();OW();return null;}}];D3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Rb(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[D3],returnType:Bp,callable:function(obj,
args){AUx(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){AWb(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return AUG(obj);}}];Bb.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){SG(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,
args){Qr(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CL,callable:function(obj,args){return AVM(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[CL],returnType:Bp,callable:function(obj,args){AWz(obj,DX(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CL,callable:function(obj,args){return AYa(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[CL],returnType:Bp,callable:function(obj,
args){AVi(obj,DX(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DA,callable:function(obj,args){return AWw(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[DA],returnType:Bp,callable:function(obj,args){AWq(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AXC(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,
args){AVN(obj,B9(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AWu(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){AVu(obj,B9(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AVS(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable
:function(obj,args){AUB(obj,B9(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:KX,callable:function(obj,args){return AV8(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[KX],returnType:Bp,callable:function(obj,args){AWO(obj,AUe(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CL,callable:function(obj,args){return AUm(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:CL,callable:function(obj,args){return AWW(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[CL],returnType:Bp,callable:function(obj,args){AX0(obj,DX(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[CL],returnType:Bp,callable:function(obj,args){AU1(obj,DX(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cm,callable:function(obj,args){return AXy(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[Cm],returnType:Bp,callable:function(obj,args){AUl(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[Cm,Z],returnType:Z,callable:function(obj,args){return AXD(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AV1(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AVy(obj);}},
{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Cl],returnType:Bp,callable:function(obj,args){AXl(obj,DO(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return OX(obj);}}];Bh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){PP(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){V$(obj
,B9(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cl,BV],returnType:Bp,callable:function(obj,args){P_(obj,DO(args[0]),B9(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cl,BV,BD],returnType:Bp,callable:function(obj,args){IC(obj,DO(args[0]),B9(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BD],returnType:Bp,callable:function(obj,args){QV(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[Bh],returnType:Bp,callable:function(obj,args){Vt(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[En(C)],returnType:Bp,callable:function(obj,args){U8(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cl,En(C),BV,BV],returnType:Bp,callable:function(obj,args){L2(obj,DO(args[0]),args[1],B9(args[2]),B9(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Bp,callable:function(obj,args)
{S(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Bp,callable:function(obj,args){AVA(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Bp,callable:function(obj,args){AXr(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Bp,callable:function(obj,args){AXR(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers:0,accessLevel
:3,parameterTypes:[Bh],returnType:Bp,callable:function(obj,args){AVX(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bh,BV,BV],returnType:Bp,callable:function(obj,args){AUq(obj,args[0],B9(args[1]),B9(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[En(C)],returnType:Bp,callable:function(obj,args){AVH(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[En(C),BV,BV],returnType:Bp,callable:function(obj,args){AUR(obj
,args[0],B9(args[1]),B9(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return Q(obj,B9(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bp,callable:function(obj,args){AW0(obj,B9(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bp,callable:function(obj,args){SZ(obj,B9(args[0]),args[1]);return null;}},{name:"insertRange",modifiers:0,accessLevel
:3,parameterTypes:[BV,BV],returnType:Bp,callable:function(obj,args){AXe(obj,B9(args[0]),B9(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bp,callable:function(obj,args){AX_(obj,B9(args[0]),B9(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Cl],returnType:Cl,callable:function(obj,args){return Ly(obj,args[0],DO(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bh,Cl],returnType:Cl,callable:function(obj,
args){return AV5(obj,args[0],DO(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bh,Cl],returnType:Cl,callable:function(obj,args){return AWv(obj,args[0],DO(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Cl],returnType:BV,callable:function(obj,args){return DB(obj,args[0],DO(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Cl],returnType:BV,callable:function(obj,args){return AWT(obj,args[0],DO(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Cl],returnType:Cl,callable:function(obj,args){return I0(obj,args[0],DO(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return Di(obj,B9(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bp,callable:function(obj,args){AVe(obj,B9(args[0]),B9(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bh,Cl],returnType:Cl,callable:function(obj,
args){return AXT(obj,args[0],DO(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AUv(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AXO(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AX$(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AXz(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AUV(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){QO(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:En(C),callable:function(obj,args){return AWU(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:En(C),callable:function(obj,args){return AXq(obj,B9(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:En(C),callable:function(obj,args){return AXL(obj,B9(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BV],returnType:En(C),callable:function(obj,args){return I5(obj,B9(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){AXk(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[Iy],returnType:Bp,callable:function(obj,args){AXW(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[Iy,BV],returnType:C,callable:function(obj,args){return AXo(obj,args[0],B9(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[Iy,BV],returnType:BV,callable:function(obj,args){return AXa(obj,args[0],B9(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){AXm(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable
:function(obj,args){AUc(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cx,callable:function(obj,args){return GD(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[Od],returnType:DV,callable:function(obj,args){return AX8(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){AUw(obj,B9(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return AWB(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:En(C),callable:function(obj,args){return AUu(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BD],returnType:En(C),callable:function(obj,args){return AUQ(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AUK(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Cl,callable:function(obj,
args){return Sx(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Cl,callable:function(obj,args){return AXv(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return VB(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[I],returnType:I,callable:function(obj,args){return AXf(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BD],returnType:Bh,callable:function(obj,
args){return AW4(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Cl,BV,BD],returnType:Bh,callable:function(obj,args){return AXK(DO(args[0]),B9(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[En(C)],returnType:Bh,callable:function(obj,args){return AUH(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:Ib,callable:function(obj,args){return AUT(obj);}}];D8.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bp,callable:function(obj,args){Uv(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){O$(obj);return null;}}];Dq.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Qi(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ],returnType:Bp,callable:function(obj,args){Ob(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,
BQ],returnType:Bp,callable:function(obj,args){Wh(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,BQ,BQ],returnType:Bp,callable:function(obj,args){VN(obj,args[0],args[1],args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,BQ,BQ,BQ],returnType:Bp,callable:function(obj,args){Wz(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,BQ,BQ,BQ,BQ],returnType:Bp,callable:function(obj,
args){Sk(obj,args[0],args[1],args[2],args[3],args[4]);return null;}},{name:"act",modifiers:0,accessLevel:3,parameterTypes:[CL],returnType:Cl,callable:function(obj,args){return Oo(obj,DX(args[0]));}},{name:"restart",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){U2(obj);return null;}}];DC.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Pd(obj);return null;}},{name:"begin",modifiers:0,accessLevel:2,parameterTypes
:[],returnType:Bp,callable:function(obj,args){Te(obj);return null;}},{name:"update",modifiers:0,accessLevel:2,parameterTypes:[CL],returnType:Bp,callable:function(obj,args){SA(obj,DX(args[0]));return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){UF(obj);return null;}},{name:"setStartPosition",modifiers:0,accessLevel:3,parameterTypes:[CL,CL],returnType:Bp,callable:function(obj,args){AWL(obj,DX(args[0]),DX(args[1]));return null;}},{name:"setPosition",modifiers
:0,accessLevel:3,parameterTypes:[CL,CL],returnType:Bp,callable:function(obj,args){AVO(obj,DX(args[0]),DX(args[1]));return null;}},{name:"setPosition",modifiers:0,accessLevel:3,parameterTypes:[CL,CL,BV],returnType:Bp,callable:function(obj,args){AW_(obj,DX(args[0]),DX(args[1]),B9(args[2]));return null;}},{name:"getX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CL,callable:function(obj,args){return AVE(obj);}},{name:"setX",modifiers:0,accessLevel:3,parameterTypes:[CL],returnType:Bp,callable:function(obj,
args){AU7(obj,DX(args[0]));return null;}},{name:"getY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CL,callable:function(obj,args){return AX4(obj);}},{name:"setY",modifiers:0,accessLevel:3,parameterTypes:[CL],returnType:Bp,callable:function(obj,args){AWi(obj,DX(args[0]));return null;}},{name:"getStartX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CL,callable:function(obj,args){return AWg(obj);}},{name:"getStartY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CL,callable:function(obj,
args){return AXh(obj);}},{name:"getAlignment",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AVQ(obj);}},{name:"setAlignment",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){AVm(obj,B9(args[0]));return null;}}];C9.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Sg(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable
:function(obj,args){Wu(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AWI(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Cl],returnType:Bp,callable:function(obj,args){AUi(obj,DO(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:G7,callable:function(obj,args){return AUZ(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[G7],returnType:Bp,callable
:function(obj,args){AW2(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cm,callable:function(obj,args){return AXZ(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[Cm],returnType:Bp,callable:function(obj,args){AVI(obj,args[0]);return null;}}];},
N4=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.ks.$meta.primitive?1:0)&&!(a.ks.$meta.item===null?0:1)){if(a.qL===null){if(!UQ){UQ=1;AH2();}b=a.ks.$meta.methods;a.qL=R(HY,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof F6())?e:e[Bt]===true?e:e.kS;g=W(f.name);if(g===A(80))h=1;else if(!(A(80) instanceof I))h=0;else{e=A(80);h=g.kb!==e.kb?0:1;}if(h){g=f.parameterTypes;i=R(BD,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BD;e.ks
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.qL.data;h=c+1|0;e=new HY;g=W(f.name);k=f.modifiers;n=f.accessLevel;f=DH(f.callable,"call");e.lU=a;e.zA=g;e.rX=k;e.sX=n;e.pd=i;e.vp=f;j[c]=e;c=h;}d=d+1|0;}i=a.qL;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BD;e.ks=b;f=e;b.classObject=f;}}e=EA(e);if(e===null){e=new Ds;e.kc=1;e.kd=1;B(e);}if(e===M(Bp)){e=new Bl;e.kc=1;e.kd=1;B(e);}if(c<0){e=new Eh;e.kc=1;e.kd=1;B(e);}i=i.data;f=Ee(e.ks,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.qL=f;}return a.qL.p();}return R(HY,0);},
ASd=a=>{let b,c,d,e,f,g,h,i,j,k;b=(N4(a)).data;c=b.length;d=R(HY,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Lr(h.rX,h.sX)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=BW(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BD;h.ks=j;k=h;j.classObject=k;}}j=EA(h);if(j===null){h=new Ds;h.kc=1;h.kd=1;B(h);}if(j===M(Bp)){h=new Bl;h.kc=1;h.kd=1;B(h);}if(f<0){h=new Eh;h.kc=1;h.kd=1;B(h);}k=Ee(j.ks,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
APb=(a,b)=>{let c,d,e,f;c=(N4(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HJ;f.kc=1;f.kd=1;B(f);}f=c[e];if(UZ(f.pd.p(),b))break;e=e+1|0;}return f;},
AO_=(a,b)=>{let c,d,e,f,g;c=(N4(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HJ;f.kc=1;f.kd=1;B(f);}f=c[e];g=!(Lr(f.rX,f.sX)&1)?0:1;if(g&&UZ(f.pd.p(),b))break;e=e+1|0;}return f;};
let AB0=F();
let AMP=b=>{let c,d,e,f,g;if(b===null)return null;c=BN(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof F6())?g:g[Bt]===true?g:g.kS;e=e+1|0;}return c;},
B8=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
DH=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let AAN=F();
let Xx=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
MP=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(MP(d[e],c))return 1;e=e+1|0;}return 0;},
EW=b=>{setTimeout(()=>{AWX(Pf)(b);},0);},
Pf=b=>{b.c4();},
Nq=(b,c)=>{setTimeout(()=>{Pf(b);},c);},
AHL=()=>{return [];};
function DE(){let a=this;C.call(a);a.kf=null;a.lG=null;a.kc=0;a.kd=0;a.zp=null;}
let U=a=>{a.kc=1;a.kd=1;},
AXi=()=>{let a=new DE();U(a);return a;},
NO=(a,b)=>{a.kc=1;a.kd=1;a.kf=b;},
AUJ=a=>{let b=new DE();NO(b,a);return b;},
Sw=(a,b,c)=>{a.kc=1;a.kd=1;a.kf=b;a.lG=c;},
AWN=(a,b)=>{let c=new DE();Sw(c,a,b);return c;},
Bk=a=>{return a;},
AOx=a=>{return a.kf;},
AVF=a=>{return a.c5();},
AW$=a=>{let b;b=a.lG;if(b===a)b=null;return b;},
AVU=a=>{let b,c;if(Du===null){b=new F0;c=new Cu;c.l4=BN(32);b.mm=c;c=new K;Bu(c);c.ka=G(16);b.l7=c;b.l6=G(32);b.l8=0;b.l9=Co;Du=b;}Kk(a,Du);},
Kk=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BD;d.ks=c;e=d;c.classObject=e;}}if(d.kl===null)d.kl=W(d.ks.$meta.name);DN(Bz(d.kl));d=a.c5();if(d!==null){c=new K;c.ka=G(16);E(c,c.j_,A(81));E(c,c.j_,d);e=new I;f=c.ka;g=f.data;h=c.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);DN(Bz(e));}else{b=new H;b.kc=1;b.kd=1;B(b);}}a:{DN("\n");f=a.zp;if(f!==null){f=f.data;j=f.length;i=0;while(true){if(i>=j)break a;e=f[i];DN("\tat ");c=A(2);if(e!==null)c=!e.nm
?A(82):A(83);DN(Bz(c));DN("\n");i=i+1|0;}}}c=a.lG;if(c!==null&&c!==a){DN("Caused by: ");Kk(a.lG,b);}};
let BG=F(DE);
let G4=a=>{a.kc=1;a.kd=1;},
AUd=()=>{let a=new BG();G4(a);return a;};
let BA=F(BG);
let IJ=a=>{a.kc=1;a.kd=1;},
AVn=()=>{let a=new BA();IJ(a);return a;},
He=(a,b)=>{a.kc=1;a.kd=1;a.kf=b;},
AU9=a=>{let b=new BA();He(b,a);return b;};
let AHj=F(BA);
let Kd=F(0);
function I(){C.call(this);this.l$=0;}
let V1=null,Mv=null,Ox=null;
let Yx=(a,b)=>{a.kb=L(b.data,0,b.data.length);},
AUg=a=>{let b=new I();Yx(b,a);return b;},
AFg=(a,b)=>{a.kb=b;},
TU=a=>{let b=new I();AFg(b,a);return b;},
AT7=(a,b,c,d)=>{let e,f;e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.kb=L(b.data,c,d);return;}f=new H;f.kc=1;f.kd=1;B(f);},
ABe=(a,b,c)=>{let d=new I();AT7(d,a,b,c);return d;},
Lt=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.kb.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AUU(a.kb,b,d.data,e,g);return;}}h=new H;h.kc=1;h.kd=1;B(h);},
M1=(a,b,c)=>{let d,e,f;if((c+b.kb.length|0)>a.kb.length)return 0;d=0;a:{b:{while(d<b.kb.length){if(d<0)break a;if(d>=b.kb.length)break a;e=b.kb.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.kb.length)break b;if(e!=a.kb.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);},
Lu=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.kb.length>a.kb.length)return 0;c=0;d=a.kb.length-b.kb.length|0;a:{b:{while(d<a.kb.length){if(d<0)break a;if(d>=a.kb.length)break a;e=a.kb.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.kb.length)break b;if(e!=b.kb.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);},
H8=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.kb.length)return (-1);if(a.kb.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.kb.length-1|0))return (-1);if(a.kb.charCodeAt(c)==e&&a.kb.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
Fa=(a,b,c)=>{let d,e,f,g;d=a.kb.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.kb.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.kb.charCodeAt(d)==g){b=d-1|0;if(a.kb.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
QC=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.kb.length-b.kb.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.kb.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.kb.length)break a;g=a.kb.charCodeAt(f);if(e<0)break b;if(e>=b.kb.length)break b;if(g!=b.kb.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);},
ADj=(a,b,c)=>{let d,e,f;d=a.kb.length-b.kb.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.kb.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.kb.length)break a;f=a.kb.charCodeAt(f);if(e<0)break b;if(e>=b.kb.length)break b;if(f!=b.kb.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);},
Cj=(a,b,c)=>{let d,e,f;d=a.kb.length;e=BW(b,c);if(!e)return Mv;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return TU(a.kb.substring(b,c));f=new Y;f.kc=1;f.kd=1;B(f);},
Dl=(a,b)=>{let c,d,e,f;c=a.kb.length-b.kb.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.kb.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.kb.length)break a;f=a.kb.charCodeAt(f);if(e<0)break b;if(e>=b.kb.length)break b;if(f!=b.kb.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);},
Nf=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.ka=G(16);e=a.kb.length-b.kb.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cj(a,f,a.kb.length);g=d.j_;if(b===null)b=A(2);E(d,g,b);b=new I;h=d.ka;i=h.data;j=d.j_;e=i.length;if(j>=0&&j<=(e-0|0)){b.kb=L(h.data,0,j);return b;}b=new H;b.kc=1;b.kd=1;B(b);}k=0;d:{while(k<b.kb.length){j=f+k|0;if(j<0)break b;if(j>=a.kb.length)break b;j=a.kb.charCodeAt(j);if(k<0)break c;if(k>=b.kb.length)break c;if(j!=b.kb.charCodeAt(k)){if(f<0)break a;if(f>=a.kb.length)break a;k=a.kb.charCodeAt(f);j
=d.j_;Bj(d,j,j+1|0);d.ka.data[j]=k;break d;}k=k+1|0;}E(d,d.j_,c===null?A(2):c);f=f+(b.kb.length-1|0)|0;}f=f+1|0;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);},
AH7=a=>{let b,c,d;b=0;c=a.kb.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.kb.length)break;if(a.kb.charCodeAt(b)>32)break a;b=b+1|0;}d=new Y;d.kc=1;d.kd=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.kb.length)break b;if(a.kb.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cj(a,b,c+1|0);}d=new Y;d.kc=1;d.kd=1;B(d);},
Cp=a=>{return a;},
ARq=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof I))return 0;c=b;return a.kb!==c.kb?0:1;},
ALp=a=>{let b;a:{if(!a.l$){b=0;while(true){if(b>=a.kb.length)break a;a.l$=(31*a.l$|0)+a.kb.charCodeAt(b)|0;b=b+1|0;}}}return a.l$;},
AXw=()=>{let b;V1=G(0);b=new I;b.kb="";Mv=b;Ox=new NX;};
let EM=F();
function FN(){EM.call(this);this.nU=0;}
let OC=null,Ex=null;
let KV=(b,c)=>{if(b!==null)return V0(b,0,b.kb.length,c);b=new CC;b.kc=1;b.kd=1;b.kf=A(84);B(b);},
V0=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new CC;b.kc=1;b.kd=1;b.kf=A(85);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.kb.length){a:{switch(b.kb.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new CC;b.kc=1;b.kd=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.kb.length)break b;g=AOX(b.kb.charCodeAt(g));if(g<0){k=new CC;l=Cj(b,c,d);b=new K;b.ka=G(16);E(b,b.j_,A(86));c=b.j_;if(l===null)l=A(2);E(b,c,l);m=new I;n=b.ka;o=n.data;d=b.j_;e
=o.length;if(d>=0&&d<=(e-0|0)){m.kb=L(n.data,0,d);k.kc=1;k.kd=1;k.kf=m;B(k);}b=new H;b.kc=1;b.kd=1;B(b);}if(g>=e){k=new CC;l=Cj(b,c,d);b=new K;b.ka=G(16);E(b,b.j_,A(87));J(b,b.j_,e,10);E(b,b.j_,A(81));c=b.j_;if(l===null)l=A(2);E(b,c,l);m=new I;n=b.ka;o=n.data;d=b.j_;e=o.length;if(d>=0&&d<=(e-0|0)){m.kb=L(n.data,0,d);k.kc=1;k.kd=1;k.kf=m;B(k);}b=new H;b.kc=1;b.kd=1;B(b);}if(h>i){b=new CC;b.kc=1;b.kd=1;b.kf=A(88);B(b);}h=Dy(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new CC;l=Cj(b,c,d);b
=new K;b.ka=G(16);E(b,b.j_,A(89));c=b.j_;if(l===null)l=A(2);E(b,c,l);m=new I;n=b.ka;o=n.data;d=b.j_;e=o.length;if(d>=0&&d<=(e-0|0)){m.kb=L(n.data,0,d);k.kc=1;k.kd=1;k.kf=m;B(k);}b=new H;b.kc=1;b.kd=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);}b=new CC;k=new K;k.ka=G(16);E(k,k.j_,A(90));J(k,k.j_,e,10);m=new I;n=k.ka;o=n.data;d=k.j_;e=o.length;if(d>=0&&d<=(e-0|0)){m.kb=L(n.data,0,d);b.kc=1;b.kd=1;b.kf=m;B(b);}b=new H;b.kc=1;b.kd=1;B(b);},
Lk=b=>{if(b!==null)return V0(b,0,b.kb.length,10);b=new CC;b.kc=1;b.kd=1;b.kf=A(84);B(b);},
E_=()=>{let b,c,d,e,f;a:{if(Ex===null){b=R(FN,256);c=b.data;Ex=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new FN;f.nU=d-128|0;c[d]=f;d=d+1|0;}}}},
B9=a=>{return a.nU;},
AOX=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Pb=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
Eq=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AXj=()=>{OC=M(BV);};
function Be(){let a=this;C.call(a);a.ka=null;a.j_=0;}
let Fc=a=>{a.ka=G(16);},
AVC=()=>{let a=new Be();Fc(a);return a;},
D1=(a,b)=>{a.ka=G(b);},
AXF=a=>{let b=new Be();D1(b,a);return b;},
Jg=(a,b)=>{E(a,a.j_,b===null?A(2):b.T());return a;},
JK=(a,b)=>{E(a,a.j_,b);return a;},
E=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.j_){if(c===null)c=A(2);else if(c.kb.length?0:1)return a;IP(a,a.j_+c.kb.length|0);d=a.j_-1|0;while(d>=b){a.ka.data[d+c.kb.length|0]=a.ka.data[d];d=d+(-1)|0;}a.j_=a.j_+c.kb.length|0;e=0;a:{while(e<c.kb.length){f=a.ka;d=b+1|0;if(e<0)break a;if(e>=c.kb.length)break a;f.data[b]=c.kb.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);},
IR=(a,b)=>{return J(a,a.j_,b,10);},
IM=(a,b,c)=>{return J(a,a.j_,b,c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(E$(c,d)<0){if(e)Bj(a,b,b+1|0);else{Bj(a,b,b+2|0);f=a.ka.data;g=b+1|0;f[b]=45;b=g;}a.ka.data[b]=NZ(c,d);}else{h=1;i=1;j=Em((-1),d);b:{while(true){k=Dy(h,d);if(E$(k,c)>0){k=h;break b;}i=i+1|0;if(E$(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bj(a,b,b+i|0);if(e)e=b;else{f=a.ka.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.ka.data;b=e+1|0;f[e]=NZ(Em(c,k),d);c=AWj(c,k);k=Em(k,d);e=b;}}}return a;},
F4=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BW(c,0.0);if(!d){if(1.0/c===Infinity){Bj(a,b,b+3|0);e=a.ka.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bj(a,b,b+4|0);e=a.ka.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bj(a,b,b+3|0);e=a.ka.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bj(a,b,b+8|0);d=b;}else{Bj(a,b,b+9|0);e=a.ka.data;d=b+1|0;e[b]=45;}e=a.ka.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Rr;AKo(c,f);d=f.us;g=f.ue;h=f.wf;i=1;j=1;if(h)j=2;k=9;l=AP4(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bj(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.ka.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.ka.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.ka.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.ka.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Qv=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BW(c,0.0);if(!d){if(1.0/c===Infinity){Bj(a,b,b+3|0);e=a.ka.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bj(a,b,b+4|0);e=a.ka.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bj(a,b,b+3|0);e=a.ka.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bj(a,b,b+8|0);d=b;}else{Bj(a,b,b+9|0);e=a.ka.data;d=b+1|0;e[b]=45;}e=a.ka.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=QG;AGV(c,f);g=f.uP;h=f.t7;i=f.v8;j=1;k=1;if(i)k=2;l=18;m=AMO(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bj(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.ka.data;i=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.ka.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(ADe(p,Ce))d=0;else{d=Bm(Na(g,p));g=XK(g,p);}e=a.ka.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=Na(p,X(10));q=q+1|0;}if(h){e=a.ka.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
AP4=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AMO=b=>{let c,d,e,f,g;c=X(1);d=0;e=16;f=On.data;g=f.length-1|0;while(g>=0){if(Ek(XK(b,Bd(c,f[g])),Ce)){d=d|e;c=Bd(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
GH=(a,b)=>{return a.de(a.j_,b);},
Eu=(a,b,c)=>{E(a,b,c===null?A(2):c.T());return a;},
IP=(a,b)=>{let c,d,e,f,g,h;c=a.ka.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.ka=g;},
MC=a=>{let b,c,d,e,f;b=new I;c=a.ka;d=c.data;e=a.j_;f=d.length;if(e>=0&&e<=(f-0|0)){b.kb=L(c.data,0,e);return b;}b=new H;b.kc=1;b.kd=1;B(b);},
KC=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ka.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
VH=(a,b)=>{let c,d,e,f;if(b>=0){c=a.j_;if(b<c){c=c-1|0;a.j_=c;while(b<c){d=a.ka.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Y;f.kc=1;f.kd=1;B(f);},
ARG=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BW(b,c);if(d<=0){e=a.j_;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.j_=e-(c-b|0)|0;g=0;while(g<f){h=a.ka.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Y;i.kc=1;i.kd=1;B(i);},
Bj=(a,b,c)=>{let d,e,f,g;d=a.j_;e=d-b|0;a.c$((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.ka.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.j_=a.j_+(c-b|0)|0;};
let Je=F(0);
let K=F(Be);
let ASx=a=>{a.ka=G(16);},
EF=()=>{let a=new K();ASx(a);return a;},
Mx=(a,b)=>{E(a,a.j_,b===null?A(2):b.T());return a;},
FD=(a,b)=>{E(a,a.j_,b);return a;},
Fn=(a,b)=>{J(a,a.j_,b,10);return a;},
Xw=(a,b)=>{let c;c=a.j_;Bj(a,c,c+1|0);a.ka.data[c]=b;return a;},
AS2=(a,b,c)=>{E(a,b,c===null?A(2):c.T());return a;},
ARF=(a,b,c)=>{ARG(a,b,c);return a;},
BZ=(a,b,c)=>{E(a,b,c);return a;},
AH0=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ka.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ACU=(a,b,c,d)=>{let e,f,g,h,i;e=a.j_;Bj(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.ka.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
ZY=a=>{return a.j_;},
Et=a=>{let b,c,d,e,f;b=new I;c=a.ka;d=c.data;e=a.j_;f=d.length;if(e>=0&&e<=(f-0|0)){b.kb=L(c.data,0,e);return b;}b=new H;b.kc=1;b.kd=1;B(b);},
AIn=(a,b)=>{IP(a,b);},
AJe=(a,b,c)=>{Bj(a,b,b+1|0);a.ka.data[b]=c;return a;},
Cb=(a,b,c)=>{E(a,b,c);return a;};
function RA(){let a=this;C.call(a);a.vM=0;a.yr=0;a.u_=0;a.wl=null;a.yn=0;a.AW=null;a.v0=0;a.yz=null;a.st=0;a.ql=0;a.uf=0;a.vQ=0;a.wW=0;a.wz=0;a.xV=0;a.xk=0;a.xu=0;a.vx=0;a.tb=0;}
let Y$=(a,b)=>{a.vM=0;a.yr=1;a.u_=0;a.yn=1;a.AW=A(68);a.v0=0;a.st=(-1);a.ql=(-1);a.uf=0;a.vQ=0;a.wW=0;a.wz=0;a.xV=0;a.xk=0;a.xu=0;a.vx=0;a.tb=1;a.yz=b;},
ATc=a=>{let b=new RA();Y$(b,a);return b;};
let Qe=F(0);
function L3(){let a=this;C.call(a);a.pt=null;a.rP=null;a.wU=null;a.xp=null;a.zW=null;a.n4=null;a.sD=null;a.sL=null;a.so=null;a.pe=null;a.q_=null;a.tV=0;a.vy=0;a.y1=null;a.pY=0;a.sr=null;a.zm=null;a.y4=null;a.r4=null;a.vS=null;a.pw=null;}
let Hl=null;
let Qs=(a,b,c)=>{let d;d=new Bh;d.kF=1;d.ki=R(C,4);a.so=d;a.q_=NL;a.tV=(-1);a.vy=1;a.pY=1;a.zm=E6(51,0.800000011920929);d=new Bh;d.kF=1;d.ki=R(C,16);a.r4=d;d=new Bh;d.kF=1;d.ki=R(C,16);a.vS=d;Fh();a.pe=Gs;a.n4=c;a.sD=b;AOJ(a);},
AUj=(a,b)=>{let c=new L3();Qs(c,a,b);return c;},
AOJ=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Hl=AKt();Gy();DI(Fq,A(91),A(68));b=W(Hl.userAgent);Gy();DI(Fq,A(92),b);if(Hl.windows?1:0){Gy();DI(Fq,A(93),A(94));}else if(Hl.macOS?1:0){Gy();DI(Fq,A(93),A(95));}else if(!(Hl.linux?1:0)){Gy();DI(Fq,A(93),A(96));}else{Gy();DI(Fq,A(93),A(10));}c=new Pg;d=a.n4.v0;c.xY=0;c.yw=0;c.m8=1;c.m8=d;GO=c;Fh();b=W(Gs.nO.location.href);a.pw=b;if(Dl(b,A(97))){c=Nf(a.pw,A(98),A(68));a.pw=c;a.pw=Nf(c,A(99),A(68));}e=H8(a.pw,63,0);if(e>=0)a.pw=Cj(a.pw,0,e);c=a.n4;GN=c.yr;b=ANd(c);a.pt=b;c
=AKs(a.pw,b.lA,a);a.sr=c;d=a.n4.yn;f=GO;g=c.sP;h=new K;h.ka=G(16);i=h.j_;if(g===null)g=A(2);BZ(h,i,g);BZ(h,h.j_,A(100));g=new I;j=h.ka;k=j.data;l=h.j_;m=k.length;if(l>=0&&l<=(m-0|0)){g.kb=L(j.data,0,l);h=new K;h.ka=G(16);E(h,h.j_,g);E(h,h.j_,A(101));g=new I;j=h.ka;k=j.data;l=h.j_;m=k.length;if(l>=0&&l<=(m-0|0)){g.kb=L(j.data,0,l);h=new Q5;h.rg=c;h.wk=A(101);h.wj=d;if(f.m8){if(BX===null){c=new C3;b=new Cu;Bu(b);b.l4=BN(32);E8(c);c.mm=b;b=new K;Fc(b);c.l7=b;c.l6=G(32);c.l8=0;c.l9=Co;BX=c;}c=new K;c.ka=G(16);BZ(c,
c.j_,A(102));BZ(c,c.j_,g);b=new I;j=c.ka;k=j.data;i=c.j_;l=k.length;if(i>=0&&i<=(l-0|0)){b.kb=L(j.data,0,i);B2(Bz(b));B2("\n");}else{c=new H;c.kc=1;c.kd=1;B(c);}}a:{f.lt=f.lt+1|0;c=new Ho;c.n9=f;c.pA=1;c.n5=g;c.oj=h;b=null;g=null;c.nj=new C;c.ni=1;c.n1=g;c.oi=b;e=CY;CY=e+1|0;c.oh=X(e);b=new ED;b.n2=c;EW(b);a.rP=AAf(a.pt.lA);c=new UE;c.p3=a.sr;a.wU=c;c=new TW;b=new Jm;d=Kc(16);b.pD=0;k=R(F2,d);j=k.data;b.mv=k;b.tH=0.75;b.qF=j.length*0.75|0;c.zO=b;a.xp=c;a.y1=new Rx;c=new TR;c.zR=0;c.sZ=1;b=new Mq;b.sI=c;c.zc
=b;c.uO=A(68);a.y4=c;if(a.n4.u_){g=a.sr;b=new OG;b.yO=a;n=GO;g=g.sP;h=new K;h.ka=G(16);Cb(h,h.j_,g===null?A(2):Cp(g));Cb(h,h.j_,Cp(A(100)));f=new I;j=h.ka;k=j.data;i=h.j_;l=k.length;if(i>=0&&i<=(l-0|0)){f.kb=L(j.data,0,i);g=new K;g.ka=G(16);BZ(g,g.j_,f);BZ(g,g.j_,A(103));c=new I;j=g.ka;k=j.data;i=g.j_;l=k.length;if(i>=0&&i<=(l-0|0)){c.kb=L(j.data,0,i);N3(n,1,c,b);break a;}c=new H;c.kc=1;c.kd=1;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}}Df=a;c=a.pt;B6=c;b=c.qP;B5=b;Br=b;EQ=c.xq;Lp=a.rP;FW=a.wU;ANr=a.xp;c=new QW;c.xS
=null;c.xS=ARc();a.zW=c;AIR=c;f=a.pe.nO.document;b=new Kx;b.tJ=a;f.addEventListener("visibilitychange",B8(b,"handleEvent"));c=a.pe;c.sw=a;requestAnimationFrame(B8(c,"onAnimationFrame"));c=a.n4;if(!c.st&&!c.ql?1:0){c=a.pe;g=new Ky;g.ry=a;g=DH(g,"handleEvent");c.nO.addEventListener("resize",B8(g,"handleEvent"));}return;}c=new H;c.kc=1;c.kd=1;B(c);}c=new H;c.kc=1;c.kd=1;B(c);},
AGI=a=>{let b,c,d,e,f,g,h,$$je;b=a.q_;a:{try{b:{MO();switch(Ub.data[APL(b)]){case 1:c=AGY(Xp());if(!c){a.q_=Jz;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.sr.uF;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=EF();Xw(Fn(g,f),37);h=Et(g);d.setProperty("width",Bz(h));}}break b;case 2:break;default:break b;}if(a.sD!==null){b=a.sL;if(b!==null){AJ2(b);AKU(a.sL);}ADt(a.rP,null);R1(a.rP);QO(a.r4);a.sL
=a.sD;a.sD=null;a.q_=Kz;a.pt.tv=Ce;}YR(a,a.sL);}}catch($$e){$$je=Bc($$e);if($$je instanceof DE){h=$$je;break a;}else{throw $$e;}}b=a.pe;b.sw=a;requestAnimationFrame(B8(b,"onAnimationFrame"));return;}if(Du===null){b=new F0;d=new Cu;d.l4=BN(32);Bu(b);b.mm=d;d=new K;D1(d,16);b.l7=d;b.l6=G(32);b.l8=0;b.l9=Co;Du=b;}Kk(h,Du);B(h);},
YR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;ACg(a.pt);c=B6.lA.width;d=B6.lA.height;e=0;if(a.q_===Kz){a.q_=Jz;f=new Ii;Ig();La(f,1000,null);b.AA=f;f=AKa(b);b.AM=f;b.vq=f;g=B6.lA.width;h=B6.lA.height;f=f.k2.ma;f.qi=0;f.qj=0;f.qS=g;f.mV=h;i=g;j=f.sv;i=i*j;j=h*j;f.tt=i;f.tB=j;NC(f,0);e=1;}if(!(c==a.tV&&d==a.vy&&!e)){a.tV=c;a.vy=d;B5.dE(0,0,c,d);f=b.vq;if(f!==null){f=f.k2.ma;f.qi=0;f.qj=0;f.qS=c;f.mV=d;i=c;j=f.sv;i=i*j;j=d*j;f.tt=i;f.tB=j;NC(f,0);}}f=a.vS;k=a.r4;l=k.ki;m=k.ke;n=f.ki;o=n.data;c=f.ke;d=c+
m|0;if(d<=o.length)k=n;else{p=8;if(p<=d)p=d;c=c*1.75|0;if(p>c)c=p;q=n.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BD;r.ks=q;s=r;q.classObject=s;}}s=r.ks.$meta.item;if(s===null)r=null;else{r=s.classObject;if(r===null){r=new BD;r.ks=s;k=r;s.classObject=k;}}if(r===null){b=new Ds;U(b);B(b);}if(r===M(Bp)){b=new Bl;U(b);B(b);}if(c<0){b=new Eh;U(b);B(b);}k=Ee(r.ks,c);r=k.data;h=f.ke;g=r.length;if(h<g)g=h;GP(n,0,k,0,g);f.ki=k;}GP(l,0,k,f.ke,m);f.ke=d;f=a.r4;l=f.ki;e=0;m=f.ke;k=null;if(e>m)
{b=new Bl;b.kc=1;b.kd=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.ke=0;m=0;while(true){r=a.vS;e=r.ke;d=BW(m,e);if(d>=0){l=r.ki;m=0;f=null;if(m>e){b=new Bl;b.kc=1;b.kd=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}r.ke=0;f=a.pt;t=De(f.tv,X(1));f.tv=t;if(ACP(t,X(60))){f=b.vq;if(f!==null)AR$(f,B6.s6);}R1(a.rP);return;}if(d>=0){f=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,m,10);E(b,b.j_,A(19));e=r.ke;J(b,b.j_,e,10);k=new I;l=b.ka;n=l.data;m=b.j_;d=n.length;if(m>=0&&m<=(d-0|0)){k.kb=L(l.data,0,m);f.kc
=1;f.kd=1;f.kf=k;B(f);}b=new H;U(b);B(b);}f=r.ki.data[m];k=f.uM.sx;q=k.ki.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BD;r.ks=q;s=r;q.classObject=s;}}u=r.ks.$meta.item;if(u===null)q=null;else{q=u.classObject;if(q===null){q=new BD;q.ks=u;r=q;u.classObject=r;}}e=k.ke;if(q===null){b=new Ds;U(b);B(b);}if(q===M(Bp)){b=new Bl;U(b);B(b);}if(e<0)break;r=Ee(q.ks,e);GP(k.ki,0,r,0,k.ke);l=r;f.uM.tl.v3.wl.dG(l);m=m+1|0;}b=new Eh;U(b);B(b);};
let VY=F(0);
function MN(){C.call(this);this.vq=null;}
let AJ2=a=>{return;};
function Qg(){let a=this;MN.call(a);a.AA=null;a.AM=null;}
let AKU=a=>{return;};
let AOu=F();
let Bi=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(104);d=1<<c;e=d-1|0;f=(((32-Pb(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=Dy(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=NZ((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new I;l.kb=L(g.data,0,h.length);return l;};
let Im=F(BH);
let NL=null,Kz=null,Jz=null,U7=null;
let AIW=()=>{let b,c,d;b=new Im;b.kt=A(105);b.kn=0;NL=b;c=new Im;c.kt=A(106);c.kn=1;Kz=c;d=new Im;d.kt=A(107);d.kn=2;Jz=d;U7=V(Im,[b,c,d]);};
let OL=F(0);
let Cz=F(0);
let RW=F(0);
function JI(){let a=this;C.call(a);a.nO=null;a.sw=null;}
let Gs=null;
let Fh=()=>{Fh=BR(JI);AFp();};
let AFp=()=>{let b;b=new JI;Fh();b.nO=window;Gs=b;},
AMo=(a,b)=>{let c;b;c=a.sw;a.sw=null;AGI(c);};
let AL5=F();
let Ro=F();
let Bw=null;
let CE=()=>{CE=BR(Ro);AK3();};
let AK3=()=>{Bw=E6(51,0.800000011920929);};
function Gc(){EM.call(this);this.oZ=0.0;}
let Rm=null;
let AWR=()=>{Rm=M(CL);};
function G6(){let a=this;C.call(a);a.no=null;a.nx=0;a.sf=0;}
let P5=(a,b)=>{let c,d,e,f,g;c=a.no;d=c.data;e=a.nx;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Cc(f);g=d.data.length;if(e<g)g=e;Dv(c,0,d,0,g);a.no=d;}c=d.data;f=a.nx;a.nx=f+1|0;c[f]=b;},
UT=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.no;e=d.data;f=a.nx;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=Cc(h);i=g.data.length;if(f<i)i=f;Dv(d,0,g,0,i);a.no=g;}e=g.data;j=a.nx;e[j]=b;e[j+1|0]=c;a.nx=j+2|0;};
let AGr=F();
let J0=b=>{return Math.sin(b);},
Y4=b=>{return Math.cos(b);},
CH=b=>{return Math.sqrt(b);},
Ll=b=>{return Math.ceil(b);},
GQ=(b,c)=>{return Math.pow(b,c);},
Of=(b,c)=>{return Math.atan2(b,c);},
AOp=(b,c)=>{return Math.min(b,c);},
Ej=b=>{return Math.abs(b);},
CT=b=>{return Math.sign(b);};
function D3(){let a=this;C.call(a);a.zH=null;a.zP=null;}
let Rb=a=>{let b;b=new Bh;b.kF=1;b.ki=R(C,16);a.zH=b;b=new G6;b.sf=1;b.no=Cc(16);a.zP=b;},
AWn=()=>{let a=new D3();Rb(a);return a;};
function F5(){let a=this;C.call(a);a.mS=null;a.l5=0;a.pG=0;}
let Ma=(a,b)=>{let c,d,e,f,g;c=a.mS;d=c.data;e=a.l5;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Ba(f);g=d.data.length;if(e<g)g=e;Dv(c,0,d,0,g);a.mS=d;}c=d.data;f=a.l5;a.l5=f+1|0;c[f]=b;},
AS4=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.l5;if(b>d){e=new H;f=new K;f.ka=G(16);E(f,f.j_,A(65));J(f,f.j_,b,10);E(f,f.j_,A(66));b=a.l5;J(f,f.j_,b,10);g=new I;h=f.ka;i=h.data;c=f.j_;d=i.length;if(c>=0&&c<=(d-0|0)){g.kb=L(h.data,0,c);e.kc=1;e.kd=1;e.kf=g;B(e);}e=new H;e.kc=1;e.kd=1;B(e);}i=a.mS;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=Ba(k);l=j.data.length;if(d<l)l=d;Dv(i,0,j,0,l);a.mS=j;}if(!a.pG){h=j.data;h[a.l5]=h[b];}else Dv(j,b,j,b+1|0,a.l5-b|0);h=j.data;a.l5=a.l5+1|0;h[b]=c;};
let Mu=F(0);
let K_=F();
let Fs=F(0);
function Jm(){let a=this;K_.call(a);a.pD=0;a.mv=null;a.tF=0;a.tH=0.0;a.qF=0;}
let Kc=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
Gz=(a,b,c,d)=>{let e,f;e=a.mv.data[c];while(e!==null){if(e.pQ==d){f=e.nl;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.ny;}return e;},
GM=a=>{let b;b=a.mv.data[0];while(b!==null&&b.nl!==null){b=b.ny;}return b;},
Fu=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.mv.data;e=d[0];while(e!==null&&e.nl!==null){e=e.ny;}if(e===null){a.tF=a.tF+1|0;f=null;e=new F2;b=null;e.nl=f;e.mZ=b;e.pQ=0;e.ny=d[0];d[0]=e;g=a.pD+1|0;a.pD=g;if(g>a.qF)Rf(a,d.length);}}else{f=b;if(!f.$id$){e=Fd();f.$id$=e;}h=b.$id$;d=a.mv.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.pQ==h){f=e.nl;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.ny;}if(e===null){a.tF=a.tF+1|0;e=new F2;f=null;e.nl=b;e.mZ=f;e.pQ=h;e.ny=d[j];d[j]=e;g=a.pD+1|0;a.pD=g;if(g>a.qF)Rf(a,
i);}}f=e.mZ;e.mZ=c;return f;},
Rf=(a,b)=>{let c,d,e,f,g,h,i,j;c=Kc(!b?1:b<<1);d=R(F2,c);e=d.data;f=0;c=c-1|0;while(true){g=a.mv.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.pQ&c;j=h.ny;h.ny=e[i];e[i]=h;h=j;}f=f+1|0;}a.mv=d;a.qF=e.length*a.tH|0;};
let Iy=F(0);
let NX=F();
let M2=F();
let OB=null,LB=null,B0=null,B1=null,MZ=null,T7=null,BL=null,BK=null,JX=null,JY=null;
let AAJ=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new H;e.kc=1;e.kd=1;B(e);},
CD=(b,c)=>{let d,e;d=b.xi.data;if(c<d.length)return c+d[c]|0;d=b.w7;e=APM(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
APM=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=BW(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
P$=b=>{let c,d,e,f,g,h;if(LB===null){if(JX===null)JX=AGb();LB=ASD((JX.value!==null?W(JX.value):null));}c=LB.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=BW(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
NZ=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
Fj=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bl;c.kc=1;c.kd=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AGn([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
CZ=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(MZ===null){if(JY===null)JY=ATE();MZ=AT4((JY.value!==null?W(JY.value):null));}e=MZ.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.uQ)c=f+1|0;else{d=g.up;if(b>=d)return g.ut.data[b-d|0];d=f-1|0;}}return 0;},
HO=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CZ(b)!=16?0:1;},
AUE=()=>{OB=M(KX);T7=R(M2,128);},
D$=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
Ea=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
AGb=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
ATE=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let ACH=F();
let AKt=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AMC=F();
let BX=null,Du=null,Fq=null;
let GP=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=JO(b)&&(e+f|0)<=JO(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BD;h.ks=g;i=h;g.classObject=i;}}j=EA(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BD;h.ks=g;i=h;g.classObject=i;}}i=EA(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.ks.$meta.primitive?1:0)&&!(i.ks.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.ks;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MP(g.constructor,p)?1:0)){Jo(b,c,d,e,l);b=new J8;b.kc=1;b.kd=1;B(b);}l=l+1|0;m=o;}Jo(b,c,d,e,f);return;}if(!(j.ks.$meta.primitive?1:0))break a;if(i.ks.$meta.primitive?1:0)break b;else break a;}b=new J8;b.kc=1;b.kd=1;B(b);}}Jo(b,c,d,e,f);return;}b=new J8;b.kc=1;b.kd=1;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}d=new Ds;d.kc=1;d.kd=1;d.kf=A(108);B(d);},
Dv=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=JO(b)&&(e+f|0)<=JO(d)){Jo(b,c,d,e,f);return;}b=new H;b.kc=1;b.kd=1;B(b);},
Jo=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
EE=()=>{return El((new Date()).getTime());},
Gy=()=>{let b,c;if(Fq===null){b=new M9;K5(b,11);DI(b,A(109),A(110));DI(b,A(93),A(111));DI(b,A(112),A(113));DI(b,A(114),A(115));DI(b,A(116),A(117));DI(b,A(118),A(119));DI(b,A(120),A(110));DI(b,A(121),A(113));c=new M9;K5(c,11);c.Ah=b;Fq=c;}};
let N_=F(0);
function Pg(){let a=this;C.call(a);a.lt=0;a.xY=0;a.yw=0;a.m8=0;}
let AGY=a=>{return a.lt;},
ABz=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{Ns();switch(UP.data[d.kn]){case 1:if(a.m8){if(BX===null){d=new C3;e=new Cu;e.l4=BN(32);Bu(d);d.mm=e;e=new K;D1(e,16);d.l7=e;d.l6=G(32);d.l8=0;d.l9=Co;BX=d;}d=new K;d.ka=G(16);E(d,d.j_,A(102));E(d,d.j_,c===null?A(2):c);e=new I;g=d.ka;h=g.data;i=d.j_;j=h.length;if(i>=0&&i<=(j-0|0)){e.kb=L(g.data,0,i);B2(Bz(e));B2("\n");}else{c=new H;U(c);B(c);}}a.lt=a.lt+1|0;d=new Ho;d.n9=a;d.pA=b;d.n5=c;d.oj=f;c=null;e=null;d.nj=new C;d.ni=1;d.n1=e;d.oi=c;k=CY;CY=k+1|0;d.oh=X(k);c=new ED;c.n2
=d;EW(c);break a;case 2:d=null;l=new ON;l.sp=a;l.rp=f;l.wK=d;l.yq=e;if(a.m8){if(BX===null){d=new C3;e=new Cu;E8(e);e.l4=BN(32);Gl(d,e);d.l7=EF();d.l6=G(32);d.l8=0;d.l9=Co;BX=d;}d=new K;d.ka=G(16);Cb(d,d.j_,Cp(A(102)));Cb(d,d.j_,c===null?A(2):Cp(c));e=new I;g=d.ka;h=g.data;i=d.j_;j=h.length;if(i>=0&&i<=(j-0|0)){e.kb=L(g.data,0,i);B2(Bz(e));B2("\n");}else{c=new H;IJ(c);B(c);}}a.lt=a.lt+1|0;d=new Gk;d.nP=a;d.oN=b;d.nJ=c;d.n8=l;c=null;e=null;d.nj=new C;d.ni=1;d.n1=e;d.oi=c;k=CY;CY=k+1|0;d.oh=X(k);c=new ED;c.n2=
d;EW(c);break a;case 3:if(a.m8){if(BX===null){d=new C3;e=new Cu;e.l4=BN(32);Bu(d);d.mm=e;e=new K;D1(e,16);d.l7=e;d.l6=G(32);d.l8=0;d.l9=Co;BX=d;}d=new K;d.ka=G(16);E(d,d.j_,A(102));E(d,d.j_,c===null?A(2):c);e=new I;g=d.ka;h=g.data;i=d.j_;j=h.length;if(i>=0&&i<=(j-0|0)){e.kb=L(g.data,0,i);B2(Bz(e));B2("\n");}else{c=new H;U(c);B(c);}}a.lt=a.lt+1|0;d=new Gk;d.nP=a;d.oN=b;d.nJ=c;d.n8=f;c=null;e=null;d.nj=new C;d.ni=1;d.n1=e;d.oi=c;k=CY;CY=k+1|0;d.oh=X(k);c=new ED;c.n2=d;EW(c);break a;case 4:e=new OM;e.Av=a;e.s7
=f;if(a.m8){if(BX===null){d=new C3;f=new Cu;Bu(f);f.l4=BN(32);E8(d);d.mm=f;f=new K;Fc(f);d.l7=f;d.l6=G(32);d.l8=0;d.l9=Co;BX=d;}d=new K;d.ka=G(16);BZ(d,d.j_,A(102));BZ(d,d.j_,c===null?A(2):c);f=new I;g=d.ka;h=g.data;i=d.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);B2(Bz(f));B2("\n");}else{c=new H;G4(c);B(c);}}a.lt=a.lt+1|0;d=new Gk;d.nP=a;d.oN=b;d.nJ=c;d.n8=e;c=null;e=null;d.nj=new C;d.ni=1;d.n1=e;d.oi=c;k=CY;CY=k+1|0;d.oh=X(k);c=new ED;c.n2=d;EW(c);break a;case 5:break;default:c=new T;e=new K;e.ka
=G(16);E(e,e.j_,A(122));E(e,e.j_,d.kt);d=new I;g=e.ka;h=g.data;k=e.j_;i=h.length;if(k>=0&&k<=(i-0|0)){d.kb=L(g.data,0,k);c.kc=1;c.kd=1;c.kf=d;B(c);}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);}c=null;Hn(f.rW,f.r9,f.rK,c);c=f.nC.nr;c.qX=1;c.nR=0;}},
N3=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.m8){if(BX===null){e=new C3;f=new Cu;f.l4=BN(32);e.mm=f;f=new K;Bu(f);f.ka=G(16);e.l7=f;e.l6=G(32);e.l8=0;e.l9=Co;BX=e;}e=new K;e.ka=G(16);E(e,e.j_,A(123));E(e,e.j_,c===null?A(2):c);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);B2(Bz(f));B2("\n");}else{c=new H;c.kc=1;c.kd=1;B(c);}}a.lt=a.lt+1|0;f=new XMLHttpRequest();e=new KA;e.q5=a;e.pM=f;e.uC=b;e.s0=c;e.vj=d;e=B8(e,"handleEvent");f.onreadystatechange=e;e=new Hp;e.vu=a;e.sz=d;d=B8(e,"handleEvent");f.onprogress
=d;f.open("GET",Bz(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let AB7=F();
let GO=null;
let Xp=()=>{return GO;};
let AE1=F();
let Do=0,GN=0;
let AVV=()=>{Do=1;};
let TM=F(0);
function KU(){let a=this;C.call(a);a.qm=null;a.lA=null;a.x8=null;a.qP=null;a.xq=null;a.zf=null;a.yA=0.0;a.tM=Ce;a.tv=Ce;a.s6=0.0;a.tq=0.0;a.vL=0;}
let NJ=0,F8=null;
let ET=()=>{ET=BR(KU);ZN();};
let AIZ=(a,b)=>{let c,d,e,f,g,h,i,j,k;ET();a.yA=0.0;a.tM=EE();a.tv=X(-1);a.s6=0.0;a.tq=0.0;a.x8=b;Fh();c=window.document;d=b.yz;a.lA=c.getElementById(Bz(d));e=AC4();d=!!b.xV;e.alpha=d;d=!!b.wz;e.antialias=d;d=!!b.wW;e.stencil=d;d=!!b.xk;e.premultipliedAlpha=d;d=!!b.xu;e.preserveDrawingBuffer=d;f=a.lA;if(b.vM)a.qm=f.getContext("webgl2",e);a:{if(b.vM){d=a.qm;if(d!==null){if(!b.vx)f=ARA(d);else{f=new Ph;Oi(f,d);}a.xq=f;a.qP=f;break a;}}f=f.getContext("webgl",e);a.qm=f;if(!b.vx)d=AQx(f);else{d=new VV;MK(d,f);}a.qP
=d;}d=a.qP.dW(7938);c=a.qP.dW(7936);g=a.qP.dW(7937);a.zf=AMy(HL,d,c,g);h=b.st;if(!(h<0&&b.ql<0)){if(h&&b.ql?1:0)Ku(a,h,b.ql);else{i=Gs;h=i.nO.document.documentElement.clientWidth-b.uf|0;j=i.nO.document.documentElement.clientHeight-b.vQ|0;k=!b.tb?1.0:devicePixelRatio||1;Ku(a,k*h|0,k*j|0);}}b=a.lA;d=new MW;d.yT=a;Yl(b,B8(d,"fullscreenChanged"));},
ANd=a=>{let b=new KU();AIZ(b,a);return b;},
ACg=a=>{let b,c,d;b=EE();c=AV7(AGB(b,a.tM))/1000.0;a.s6=c;a.tM=b;c=a.tq+c;a.tq=c;d=a.vL+1|0;a.vL=d;if(c>1.0){a.yA=d;a.tq=0.0;a.vL=0;}},
Ku=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.lA;e=b;d.width=e;d=a.lA;e=c;d.height=e;if(a.x8.tb){f=devicePixelRatio||1;e=a.lA.style;g=b/f;IV();h=new K;h.ka=G(16);Qv(h,h.j_,g);E(h,h.j_,A(124));i=new I;j=h.ka;k=j.data;l=h.j_;b=k.length;if(l>=0&&l<=(b-0|0)){i.kb=L(j.data,0,l);e.setProperty("width",Bz(i));f=c/f;i=new K;i.ka=G(16);Qv(i,i.j_,f);E(i,i.j_,A(124));h=new I;j=i.ka;k=j.data;c=i.j_;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.kb=L(j.data,0,c);e.setProperty("height",Bz(h));}else{d=new H;d.kc=1;d.kd=1;B(d);}}return;}d
=new H;d.kc=1;d.kd=1;B(d);},
ZN=()=>{NJ=0;F8=Dt(51,0.800000011920929);},
Yl=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function OF(){let a=this;C.call(a);a.u5=null;a.s3=null;a.uV=null;a.vc=null;a.vf=null;a.wM=null;a.sG=null;a.uF=0;a.sP=null;}
let AHS=(a,b,c,d)=>{let e;a.u5=E6(51,0.800000011920929);a.s3=E6(51,0.800000011920929);a.uV=E6(51,0.800000011920929);a.vc=E6(51,0.800000011920929);a.vf=E6(51,0.800000011920929);a.wM=E6(51,0.800000011920929);e=new Bh;e.kF=1;e.ki=R(C,16);a.sG=e;a.uF=(-1);a.sP=b;AO5(a,c,d);},
AKs=(a,b,c)=>{let d=new OF();AHS(d,a,b,c);return d;},
AO5=(a,b,c)=>{let d,e,f;d=c.n4;if(d.wl!==null){e=b.ownerDocument;f=new LH;f.z6=a;e.addEventListener("dragenter",B8(f,"handleEvent"),!!0);f=new LI;f.AH=a;e.addEventListener("dragover",B8(f,"handleEvent"),!!0);f=new LG;f.wo=a;f.wa=c;f.v3=d;e.addEventListener("drop",B8(f,"handleEvent"));}},
AGk=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AGz(a,b.ux)){b.sS=b.yc;b.qX=1;b.qx=0;b.nR=0;return 0;}if(b.nR)return 0;b.qx=0;b.qX=0;b.nR=1;c=b.ux;d=b.ww;e=b.wm;f=new Q6;f.AT=a;f.nr=b;b=GO;g=a.sP;h=new K;h.ka=G(16);i=h.j_;if(g===null)g=A(2);BZ(h,i,g);BZ(h,h.j_,A(100));g=new I;j=h.ka;k=j.data;l=h.j_;m=k.length;if(l>=0&&l<=(m-0|0)){g.kb=L(j.data,0,l);h=new K;h.ka=G(16);E(h,h.j_,g);E(h,h.j_,c===null?A(2):c);g=new I;k=h.ka;j=k.data;m=h.j_;i=j.length;if(m>=0&&m<=(i-0|0)){g.kb=L(k.data,0,m);h=new Q4;h.rW=a;h.nC=f;h.r9=d;h.rK
=c;ABz(b,1,g,d,e,h);return 1;}b=new H;U(b);B(b);}b=new H;G4(b);B(b);},
Hn=(a,b,c,d)=>{a:{NH();switch(O6.data[b.kn]){case 1:break;case 2:Ci(a.s3,c,d);break a;case 3:Ci(a.vf,c,d);break a;case 4:Ci(a.uV,c,d);break a;case 5:Ci(a.u5,c,null);break a;default:break a;}Ci(a.vc,c,d);}},
AGz=(a,b)=>{let c;c=BF(a.vc,b)<0?0:1;return !c&&!(BF(a.s3,b)<0?0:1)&&!(BF(a.vf,b)<0?0:1)&&!(BF(a.uV,b)<0?0:1)&&!(BF(a.u5,b)<0?0:1)?0:1;};
let DW=F();
let AJO=(a,b)=>{return;};
let Tu=F(0);
let EK=F(0);
function Mw(){let a=this;C.call(a);a.lO=null;a.rn=0;a.qD=null;a.oy=null;a.mo=null;a.mn=null;a.nZ=null;a.n0=null;a.ti=null;a.rz=0;a.t0=null;a.tg=0;a.uI=null;a.vG=null;a.uG=null;a.mT=null;a.pq=Ce;a.q0=0;}
let AS3=b=>{let c,d,e,f;c=Hl;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(Ej(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AMH=(a,b)=>{a.rn=0;a.qD=Dt(20,0.800000011920929);a.oy=Kn(20);a.mo=Ba(20);a.mn=Ba(20);a.nZ=Ba(20);a.n0=Ba(20);a.ti=O_(51,0.800000011920929);a.rz=0;a.t0=Kn(256);a.tg=0;a.uI=Kn(256);a.vG=Kn(5);a.uG=O_(51,0.800000011920929);a.q0=1;a.lO=b;AJY(a);},
AAf=a=>{let b=new Mw();AMH(b,a);return b;},
AJY=a=>{let b;b=a.lO.ownerDocument;b.addEventListener("mousedown",B8(a,"handleEvent"),!!0);b.addEventListener("mouseup",B8(a,"handleEvent"),!!0);b.addEventListener("mousemove",B8(a,"handleEvent"),!!0);b.addEventListener("wheel",B8(a,"handleEvent"),!!0);b.addEventListener("keydown",B8(a,"handleEvent"),!!0);b.addEventListener("keyup",B8(a,"handleEvent"),!!0);b.addEventListener("keypress",B8(a,"handleEvent"),!!0);a.lO.addEventListener("touchstart",B8(a,"handleEvent"),!!1);a.lO.addEventListener("touchmove",B8(a,
"handleEvent"),!!1);a.lO.addEventListener("touchcancel",B8(a,"handleEvent"),!!1);a.lO.addEventListener("touchend",B8(a,"handleEvent"),!!1);},
AKv=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=W(b.type);if(c!==A(125)){if(A(125) instanceof I){d=A(125);e=c.kb!==d.kb?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(126))e=1;else if(A(126) instanceof I){d=A(126);e=c.kb!==d.kb?0:1;}else e=0;if(!e){if(c===A(127))e=1;else if(!(A(127) instanceof I))e=0;else{d=A(127);e=c.kb!==d.kb?0:1;}if(e){if(!(NA(a.lO)?1:0)){f=H2(a,b,a.lO);g=If(a,b,a.lO);h=a.mo.data;i=f-h[0]|0;j=a.mn.data;e=g-j[0]|0;a.nZ.data[0]=i;a.n0.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.nZ.data[0]=k;a.n0.data[0]=f;h=a.mo.data;h[0]=h[0]+b.movementX|0;h=a.mn.data;h[0]=h[0]+b.movementY|0;}a.pq=El(performance.now()*1000000.0);d=a.mT;if(d!==null){if(!a.oy.data[0])AEj(d,a.mo.data[0],a.mn.data[0]);else TV(d,a.mo.data[0],a.mn.data[0],0);}}else{if(c===A(128))e=1;else if(!(A(128) instanceof I))e=0;else{d=A(128);e=c.kb!==d.kb?0:1;}if(e){if(a.mT!==null){l=AS3(b);AN4(a.mT,0.0,l|0);}a.pq=El(performance.now()*1000000.0);}else{if(c===A(129))e=1;else if(!(A(129) instanceof I))e=0;else{d=A(129);e=c.kb!==
d.kb?0:1;}if(e){a.rn=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.qD;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.qD;if(o>=(-128)&&o<=127){E_();q=Ex.data[o+128|0];}else{q=new FN;q.nU=o;}if(!AS$(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){E_();p=Ex.data[o+128|0];}else{p=new FN;p.nU=o;}Ca(n,k,p);a.oy.data[o]=1;h=a.mo;q=a.lO;l=q.width*1.0/q.clientWidth;k=(d.clientX-(Gn(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=W(p.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f
=0;else{q=A(130);f=n.kb!==q.kb?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+CT(l)*0.5|0;h=a.mn;q=a.lO;l=q.height*1.0/q.clientHeight;k=(d.clientY-(GZ(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=W(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.kb!==p.kb?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+CT(l)*0.5|0;a.nZ.data[o]=0;a.n0.data[o]=0;d=a.mT;if(d!==null)Og(d,a.mo.data[o],a.mn.data[o],o,0);e=e+1|0;}a.pq=El(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.oy.data[0])return;d=a.ti;e=b.button;AQ$(d,!e?0:e==2?1:e!=1?0:2);h=a.oy;h.data[0]=a.ti.nV<=0?0:1;if(!(NA(a.lO)?1:0)){k=H2(a,b,a.lO)-a.mo.data[0]|0;f=If(a,b,a.lO)-a.mn.data[0]|0;a.nZ.data[0]=k;a.n0.data[0]=f;a.mo.data[0]=H2(a,b,a.lO);a.mn.data[0]=If(a,b,a.lO);}else{k=b.movementX|0;f=b.movementY|0;a.nZ.data[0]=k;a.n0.data[0]=f;h=a.mo.data;h[0]=h[0]+b.movementX|0;h=a.mn.data;h[0]=h[0]+b.movementY|0;}a.pq=El(performance.now()*1000000.0);a.oy.data[0]=0;d=a.mT;if(d!==null)
{e=a.mo.data[0];k=a.mn.data[0];g=b.button;Mm(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.lO;if(n!==p?0:1){h=a.oy.data;if(!h[0]){a.q0=1;a.rn=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;ACh(a.ti,r);a.vG.data[r]=1;a.nZ.data[0]=0;a.n0.data[0]=0;if(!(NA(a.lO)?1:0)){f=H2(a,b,a.lO);g=If(a,b,a.lO);a.mo.data[0]=f;a.mn.data[0]=g;}else{h=a.mo.data;h[0]=h[0]+b.movementX|0;h=a.mn.data;h[0]=h[0]+b.movementY|0;}a.pq=El(performance.now()*1000000.0);d=a.mT;if(d!==null){e=a.mo.data[0];k=a.mn.data[0];g=
b.button;Og(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=H2(a,b,p);t=If(a,b,a.lO);if(!(s>=0.0&&s<=B6.lA.width&&t>=0.0&&t<=B6.lA.height))a.q0=0;return;}}if(c===A(131))e=1;else if(!(A(131) instanceof I))e=0;else{d=A(131);e=c.kb!==d.kb?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qD;if(!k)d=!d.kN?null:d.kK;else{h=d.kI;f=Bm(Bg(Bd(X(k),D(2135587861, 2654435769)),d.kP));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}u=d.nU;d=a.lO;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gn(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.kb!==p.kb?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+CT(l)*0.5|0)-a.mo.data[u]|0;d=a.lO;l=d.height*1.0/d.clientHeight;f=(q.clientY-(GZ(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))g=1;else if(!(A(130) instanceof I))g=0;else
{p=A(130);g=n.kb!==p.kb?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+CT(l)*0.5|0)-a.mn.data[u]|0;a.nZ.data[u]=k;a.n0.data[u]=f;h=a.mo;d=a.lO;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gn(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.kb!==p.kb?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+CT(l)*0.5|0;h=a.mn;d=a.lO;l=d.height*1.0/d.clientHeight;k=(q.clientY-(GZ(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.kb!==p.kb?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+CT(l)*0.5|0;d=a.mT;if(d!==null)TV(d,a.mo.data[u],a.mn.data[u],u);e=e+1|0;}a.pq=El(performance.now()*1000000.0);b.preventDefault();}if(c===A(132))e=1;else if(!(A(132) instanceof I))e=0;else{d=A(132);e=c.kb!==d.kb?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.qD;if(!v)p=!d.kN?null
:d.kK;else{h=d.kI;k=Bm(Bg(Bd(X(v),D(2135587861, 2654435769)),d.kP));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.kM;}}p=k<0?null:d.kJ.data[k];}u=p.nU;Hc(d,v);a.oy.data[u]=0;d=a.lO;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gn(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.kb!==p.kb?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CT(l)*0.5|0;d=a.lO;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(GZ(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.kb!==p.kb?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CT(l)*0.5|0;h=a.mo.data;k=o-h[u]|0;j=a.mn.data;f=g-j[u]|0;a.nZ.data[u]=k;a.n0.data[u]=f;h[u]=o;j[u]=g;d=a.mT;if(d!==null)Mm(d,h[u],j[u],u,0);e=e+1|0;}a.pq=El(performance.now()*1000000.0);b.preventDefault();}if(c===A(133))e=1;else if(!(A(133) instanceof I))e=0;else{d=A(133);e=c.kb!==d.kb?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qD;if(!k)c=!d.kN?null:d.kK;else{h=d.kI;f=Bm(Bg(Bd(X(k),D(2135587861, 2654435769)),d.kP));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.kM;}}c=f<0?null:d.kJ.data[f];}u=c.nU;Hc(d,k);a.oy.data[u]=0;d=a.lO;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gn(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.kb!==c.kb
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CT(l)*0.5|0;d=a.lO;l=d.height*1.0/d.clientHeight;k=(q.clientY-(GZ(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.kb!==c.kb?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CT(l)*0.5|0;h=a.mo.data;k=o-h[u]|0;j=a.mn.data;f=g-j[u]|0;a.nZ.data[u]=k;a.n0.data[u]=f;h[u]=o;j[u]=g;d=a.mT;if(d!==null)Mm(d,h[u],j[u],u,0);e=e+1|0;}a.pq=El(performance.now()*1000000.0);b.preventDefault();}},
XQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=W(b.type);if(c!==A(134)){if(A(134) instanceof I){d=A(134);e=c.kb!==d.kb?0:1;}else e=0;}else e=1;if(e&&a.q0){a:{f=Sv(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}d=a.uG;if(!f)e=d.qT;else{h=d.pc;e=Bm(Bg(Bd(X(f),D(2135587861, 2654435769)),d.qt));b:{while(true){i=h.data[e];if(!i){e= -(e+1|0)|0;break b;}if(i==f)break;e=(e+1|0)&d.o6;}}e=e<0?0:1;}if(e)b.preventDefault();if(f!=67&&f!=112){h=a.t0.data;if(!h[f]){a.rz=a.rz+1|0;h[f]=1;a.tg=1;a.uI.data[f]
=1;d=a.mT;if(d!==null){j=d.n3;if(j===null)j=d.lB;CE();k=Bw;g=BF(k,M(Bb));l=g<0?null:k.kY.data[g];if(l===null){l=new CJ;k=new Bh;k.kF=0;k.ki=R(C,4);l.kw=k;l.k6=100;c:{try{k=CS(M(Bb),null);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{k=CP(M(Bb),null);CU(k,1);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}k=null;}l.kQ=k;if(k===null){b=new BA;d=new K;Bu(d);d.ka=G(16);BZ(d,d.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);c=M(Bb).kl;BZ(d,d.j_,
c);c=new I;h=d.ka;m=h.data;f=d.j_;Bu(c);Gh(0,f,m.length);c.kb=L(h.data,0,f);b.kc=1;b.kd=1;Bk(b);b.kf=c;B(b);}Ci(Bw,M(Bb),l);}c=l.kw;e=c.ke;if(e){if(!e){b=new BO;b.kc=1;b.kd=1;Bk(b);b.kf=A(22);B(b);}e=e-1|0;c.ke=e;h=c.ki.data;c=h[e];h[e]=null;}else d:{try{c=C6(l.kQ,null);break d;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));l=l.kQ.lV.lU;if(l.kl===null)l.kl=W(l.ks.$meta.name);j=l.kl;E(b,b.j_,j);j=new I;h=b.ka;m=h.data;f=b.j_;g=m.length;if(f
>=0&&f<=(g-0|0)){j.kb=L(h.data,0,f);c.kc=1;c.kd=1;Bk(c);c.kf=j;c.lG=d;B(c);}B(FF());}k=c;k.mJ=IQ;k.kV=d;k.vm=f;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.ks=j;l=c;j.classObject=l;}}e=BF(d,c);d=e<0?null:d.kY.data[e];if(d!==null){c=d.kw;if(c.ke<d.k6){S(c,k);e=d.k3;g=d.kw.ke;if(e>g)g=e;d.k3=g;if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}else if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld
=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}}}}else{b.preventDefault();d=a.mT;if(d!==null){j=d.n3;if(j===null)j=d.lB;CE();k=Bw;i=BF(k,M(Bb));l=i<0?null:k.kY.data[i];if(l===null){l=new CJ;k=new Bh;k.kF=0;k.ki=R(C,4);l.kw=k;l.k6=100;e:{try{k=CS(M(Bb),null);break e;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{k=CP(M(Bb),null);CU(k,1);break e;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}k=null;}l.kQ=k;if(k===null){b=new BA;d=new K;Bu(d);d.ka=G(16);BZ(d,d.j_,A(21));if(M(Bb).kl
===null)M(Bb).kl=W(M(Bb).ks.$meta.name);c=M(Bb).kl;BZ(d,d.j_,c);c=new I;h=d.ka;m=h.data;f=d.j_;Bu(c);Gh(0,f,m.length);c.kb=L(h.data,0,f);b.kc=1;b.kd=1;Bk(b);b.kf=c;B(b);}Ci(Bw,M(Bb),l);}c=l.kw;e=c.ke;if(e){if(!e){b=new BO;b.kc=1;b.kd=1;Bk(b);b.kf=A(22);B(b);}e=e-1|0;c.ke=e;h=c.ki.data;c=h[e];h[e]=null;}else f:{try{c=C6(l.kQ,null);break f;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));l=l.kQ.lV.lU;if(l.kl===null)l.kl=W(l.ks.$meta.name);j=l.kl;E(b,
b.j_,j);j=new I;h=b.ka;m=h.data;f=b.j_;g=m.length;if(f>=0&&f<=(g-0|0)){j.kb=L(h.data,0,f);c.kc=1;c.kd=1;Bk(c);c.kf=j;c.lG=d;B(c);}B(FF());}k=c;k.mJ=IQ;k.kV=d;k.vm=f;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.ks=j;l=c;j.classObject=l;}}e=BF(d,c);d=e<0?null:d.kY.data[e];if(d!==null){c=d.kw;if(c.ke<d.k6){S(c,k);e=d.k3;i=d.kw.ke;if(e>i)i=e;d.k3=i;if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}else if(BC(k,
BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}d=a.mT;j=d.n3;if(j===null)j=d.lB;k=Bw;i=BF(k,M(Bb));l=i<0?null:k.kY.data[i];if(l===null){l=new CJ;k=new Bh;k.kF=0;k.ki=R(C,4);l.kw=k;l.k6=100;g:{try{k=CS(M(Bb),null);break g;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{k=CP(M(Bb),null);CU(k,1);break g;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}k=null;}l.kQ=k;if(k===null){b=new BA;d=new K;Bu(d);d.ka=G(16);BZ(d,d.j_,A(21));if
(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);c=M(Bb).kl;BZ(d,d.j_,c);c=new I;h=d.ka;m=h.data;f=d.j_;Bu(c);Gh(0,f,m.length);c.kb=L(h.data,0,f);b.kc=1;b.kd=1;Bk(b);b.kf=c;B(b);}Ci(Bw,M(Bb),l);}c=l.kw;e=c.ke;if(e){if(!e){b=new BO;b.kc=1;b.kd=1;Bk(b);b.kf=A(22);B(b);}e=e-1|0;c.ke=e;h=c.ki.data;c=h[e];h[e]=null;}else h:{try{c=C6(l.kQ,null);break h;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));l=l.kQ.lV.lU;if(l.kl===null)l.kl=W(l.ks.$meta.name);j
=l.kl;E(b,b.j_,j);j=new I;h=b.ka;m=h.data;f=b.j_;g=m.length;if(f>=0&&f<=(g-0|0)){j.kb=L(h.data,0,f);c.kc=1;c.kd=1;Bk(c);c.kf=j;c.lG=d;B(c);}B(FF());}k=c;k.mJ=J1;k.kV=d;k.x_=g;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.ks=j;l=c;j.classObject=l;}}e=BF(d,c);d=e<0?null:d.kY.data[e];if(d!==null){c=d.kw;if(c.ke<d.k6){S(c,k);e=d.k3;g=d.kw.ke;if(e>g)g=e;d.k3=g;if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}else if
(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(135))e=1;else if(!(A(135) instanceof I))e=0;else{d=A(135);e=c.kb!==d.kb?0:1;}if(e&&a.q0){e=b.charCode&65535;d=a.mT;if(d!==null){j=d.n3;if(j===null)j=d.lB;CE();k=Bw;f=BF(k,M(Bb));k=f<0?null:k.kY.data[f];if(k===null){k=new CJ;l=new Bh;l.kF=0;l.ki=R(C,4);k.kw=l;k.k6=100;i:{try{l=CS(M(Bb),null);break i;}catch($$e){$$je=Bc($$e);if($$je instanceof BG)
{}else{throw $$e;}}try{l=CP(M(Bb),null);CU(l,1);break i;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}l=null;}k.kQ=l;if(l===null){b=new BA;d=new K;Bu(d);d.ka=G(16);BZ(d,d.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);c=M(Bb).kl;BZ(d,d.j_,c);c=new I;h=d.ka;m=h.data;f=d.j_;Bu(c);Gh(0,f,m.length);c.kb=L(h.data,0,f);b.kc=1;b.kd=1;Bk(b);b.kf=c;B(b);}Ci(Bw,M(Bb),k);}c=k.kw;f=c.ke;if(f){if(!f){b=new BO;b.kc=1;b.kd=1;Bk(b);b.kf=A(22);B(b);}f=f-1|0;c.ke=f;h=c.ki.data;c=h[f];h[f]=null;}
else j:{try{c=C6(k.kQ,null);break j;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));l=k.kQ.lV.lU;if(l.kl===null)l.kl=W(l.ks.$meta.name);j=l.kl;E(b,b.j_,j);j=new I;h=b.ka;m=h.data;f=b.j_;g=m.length;if(f>=0&&f<=(g-0|0)){j.kb=L(h.data,0,f);c.kc=1;c.kd=1;Bk(c);c.kf=j;c.lG=d;B(c);}B(FF());}k=c;k.mJ=J1;k.kV=d;k.x_=e;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.ks=j;l=c;j.classObject=l;}}f=BF(d,c);d=
f<0?null:d.kY.data[f];if(d!==null){c=d.kw;if(c.ke<d.k6){S(c,k);f=d.k3;g=d.kw.ke;if(f>g)g=f;d.k3=g;if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}else if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}}if(e==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(136))e=1;else if(!(A(136) instanceof I))e=0;else{d=A(136);e=c.kb!==d.kb?0:1;}if(e&&a.q0){f=Sv(b.keyCode);d=a.uG;if(!f)e=d.qT;else{h=d.pc;e
=Bm(Bg(Bd(X(f),D(2135587861, 2654435769)),d.qt));k:{while(true){g=h.data[e];if(!g){e= -(e+1|0)|0;break k;}if(g==f)break;e=(e+1|0)&d.o6;}}e=e<0?0:1;}if(e)b.preventDefault();h=a.t0.data;if(h[f]){a.rz=a.rz-1|0;h[f]=0;}d=a.mT;if(d!==null){j=d.n3;if(j===null)j=d.lB;CE();k=Bw;g=BF(k,M(Bb));l=g<0?null:k.kY.data[g];if(l===null){l=new CJ;k=new Bh;k.kF=0;k.ki=R(C,4);l.kw=k;l.k6=100;l:{try{k=CS(M(Bb),null);break l;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{k=CP(M(Bb),null);CU(k,1);break l;}catch
($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}k=null;}l.kQ=k;if(k===null){b=new BA;d=new K;Bu(d);d.ka=G(16);BZ(d,d.j_,A(21));if(M(Bb).kl===null)M(Bb).kl=W(M(Bb).ks.$meta.name);c=M(Bb).kl;BZ(d,d.j_,c);c=new I;h=d.ka;m=h.data;f=d.j_;Bu(c);Gh(0,f,m.length);c.kb=L(h.data,0,f);b.kc=1;b.kd=1;Bk(b);b.kf=c;B(b);}Ci(Bw,M(Bb),l);}c=l.kw;e=c.ke;if(e){if(!e){b=new BO;b.kc=1;b.kd=1;Bk(b);b.kf=A(22);B(b);}e=e-1|0;c.ke=e;h=c.ki.data;c=h[e];h[e]=null;}else m:{try{c=C6(l.kQ,null);break m;}catch($$e){$$je=Bc($$e);if
($$je instanceof BG){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ka=G(16);E(b,b.j_,A(23));l=l.kQ.lV.lU;if(l.kl===null)l.kl=W(l.ks.$meta.name);j=l.kl;E(b,b.j_,j);j=new I;h=b.ka;m=h.data;f=b.j_;g=m.length;if(f>=0&&f<=(g-0|0)){j.kb=L(h.data,0,f);c.kc=1;c.kd=1;Bk(c);c.kf=j;c.lG=d;B(c);}B(FF());}k=c;k.mJ=Mp;k.kV=d;k.vm=f;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.ks=j;l=c;j.classObject=l;}}e=BF(d,c);d=e<0?null:d.kY.data[e];if(d!==null){c=d.kw;if(c.ke<d.k6){S(c,k);e
=d.k3;g=d.kw.ke;if(e>g)g=e;d.k3=g;if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}else if(BC(k,BB)){d=k;d.kV=null;d.ll=null;d.lm=null;d.lv=0;d.lr=1;d.ld=0;d.lu=0;d.li=0;d.lH=null;d.lz=(-1);}}}if(f==61){b.preventDefault();b.stopPropagation();}}}}},
R1=a=>{let b,c,d;a:{if(a.rn){a.rn=0;b=0;while(true){c=a.vG.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.tg){a.tg=0;d=0;while(true){c=a.uI.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
H2=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Gn(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.kb!==c.kb?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CT(d)*0.5|0;},
If=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(GZ(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.kb!==c.kb?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CT(d)*0.5|0;},
GZ=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
Gn=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ADt=(a,b)=>{a.mT=b;},
NA=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
Yz=(a,b)=>{AKv(a,b);XQ(a,b);};
let SP=F(0);
function UE(){C.call(this);this.p3=null;}
function TW(){C.call(this);this.zO=null;}
let TN=F(0);
let Rx=F();
let PY=F(0);
function TR(){let a=this;C.call(a);a.zR=0;a.sZ=0;a.zc=null;a.uO=null;}
let UN=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AKN=F();
let Df=null,B6=null,AIR=null,Lp=null,FW=null,ANr=null,B5=null,Br=null,EQ=null;
let UI=F(0);
let TX=F(0);
function QW(){C.call(this);this.xS=null;}
function Kx(){C.call(this);this.tJ=null;}
let ADH=(a,b)=>{let c,d,$$je;c=W(a.tJ.pe.nO.document.visibilityState);if(A(137)===c)d=1;else if(!(c instanceof I))d=0;else{c=c;d=A(137).kb!==c.kb?0:1;}if(!d){b=a.tJ.so;F$(b);a:{try{c=GD(b);while(HU(c)){AKz(Cq(c));}DZ(b);break a;}catch($$e){$$je=Bc($$e);c=$$je;}DZ(b);B(c);}}else{b=a.tJ.so;F$(b);b:{try{c=GD(b);while(HU(c)){AO9(Cq(c));}DZ(b);break b;}catch($$e){$$je=Bc($$e);c=$$je;}DZ(b);B(c);}}},
ANn=(a,b)=>{ADH(a,b);};
function Ky(){C.call(this);this.ry=null;}
let ATG=(a,b)=>{let c,d,e,f,g;c=a.ry.pe.nO.document.documentElement.clientWidth;b=a.ry;d=c-b.n4.uf|0;e=b.pe.nO.document.documentElement.clientHeight;b=a.ry;f=b.n4;c=e-f.vQ|0;if(d>0&&c>0){if(b.pt!==null){if(f.tb){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Ku(a.ry.pt,d,c);}return;}},
ASm=(a,b)=>{ATG(a,b);};
let Bl=F(BA);
let AAA=a=>{a.kc=1;a.kd=1;},
AAH=()=>{let a=new Bl();AAA(a);return a;};
let AQj=F();
let Gh=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new H;e.kc=1;e.kd=1;B(e);};
let Z2=F();
let JW=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bl;e=new K;e.ka=G(16);E(e,e.j_,A(138));J(e,e.j_,b,10);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);d.kc=1;d.kd=1;d.kf=f;B(d);}d=new H;d.kc=1;d.kd=1;B(d);}j=Ll(b/c)|0;if(2>j)j=2;i=Lz(j);if(i<=1073741824)return i;d=new Bl;e=new K;e.ka=G(16);E(e,e.j_,A(139));J(e,e.j_,b,10);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);d.kc=1;d.kd=1;d.kf=f;B(d);}d=new H;d.kc=1;d.kd=1;B(d);};
let AIs=F(EM);
let P9=null;
let AQd=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new CC;b.kc=1;b.kd=1;b.kf=A(85);B(b);}f=0;if(c>=0&&c<b.kb.length){a:{switch(b.kb.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=Ce;i=X(e);j=De(X(1),Na(D(4294967295, 2147483647),i));if(g==d){b=new CC;b.kc=1;b.kd=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.kb.length)break b;g=AGv(b.kb.charCodeAt(g));if(g<0){l=new CC;b=Cj(b,c,d);m=new K;m.ka=G(16);E(m,m.j_,A(86));c=m.j_;if(b===null)b=A(2);E(m,c,
b);b=new I;n=m.ka;o=n.data;d=m.j_;e=o.length;if(d>=0&&d<=(e-0|0)){b.kb=L(n.data,0,d);l.kc=1;l.kd=1;l.kf=b;B(l);}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);}if(g>=e){l=new CC;p=Cj(b,c,d);b=new K;b.ka=G(16);E(b,b.j_,A(87));J(b,b.j_,e,10);E(b,b.j_,A(81));c=b.j_;if(p===null)p=A(2);E(b,c,p);m=new I;n=b.ka;o=n.data;d=b.j_;e=o.length;if(d>=0&&d<=(e-0|0)){m.kb=L(n.data,0,d);l.kc=1;l.kd=1;l.kf=m;B(l);}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);}if(ACP(h,j)){b=new CC;b.kc=1;b.kd=1;b.kf=A(140);B(b);}h=De(Bd(i,h),X(g));if(AVl(h,Ce)){if(k==
d&&Ek(h,D(0, 2147483648))&&f)return D(0, 2147483648);l=new CC;p=Cj(b,c,d);m=new K;m.ka=G(16);E(m,m.j_,A(141));c=m.j_;if(p===null)p=A(2);E(m,c,p);b=new I;n=m.ka;o=n.data;e=m.j_;c=o.length;if(e>=0&&e<=(c-0|0)){b.kb=L(n.data,0,e);l.kc=1;l.kd=1;l.kf=b;B(l);}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);}g=k;}if(f)h=AWx(h);return h;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);}b=new CC;l=new K;l.ka=G(16);E(l,l.j_,A(90));J(l,l.j_,e,10);m=new I;n=l.ka;o=n.data;d=l.j_;e=o.length;if(d>=0&&d<=(e-0|0)){m.kb=L(n.data,0,d);b.kc
=1;b.kd=1;b.kf=m;B(b);}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
AGv=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Fp=b=>{let c,d;if(Ek(b,Ce))return 64;c=0;d=Bg(b,32);if(ADD(d,Ce))c=32;else d=b;b=Bg(d,16);if(Ek(b,Ce))b=d;else c=c|16;d=Bg(b,8);if(Ek(d,Ce))d=b;else c=c|8;b=Bg(d,4);if(Ek(b,Ce))b=d;else c=c|4;d=Bg(b,2);if(Ek(d,Ce))d=b;else c=c|2;if(ADD(Bg(d,1),Ce))c=c|1;return (64-c|0)-1|0;},
E2=(b,c)=>{return AWE(b,c);},
Fo=(b,c)=>{return AWC(b,c);},
AVL=()=>{P9=M(AJ_);};
let AHZ=F();
let AC4=()=>{return {};};
let Mn=F(0);
function Hi(){let a=this;C.call(a);a.kk=null;a.pI=0;a.pC=0;a.mI=0;a.zi=0;a.zq=0;a.mY=0;a.pP=0;a.l2=null;a.mG=null;a.nq=null;a.z7=null;a.zv=null;a.nH=null;a.nv=null;a.om=0;a.sa=null;a.pK=null;a.rq=null;a.sj=null;a.yZ=null;}
let MK=(a,b)=>{a.pI=1;a.pC=1;a.mI=1;a.zi=1;a.zq=1;a.mY=1;a.pP=1;a.l2=Dt(51,0.800000011920929);a.mG=Dt(51,0.800000011920929);a.nq=Dt(51,0.800000011920929);a.z7=Dt(51,0.800000011920929);a.zv=Dt(51,0.800000011920929);a.nH=Dt(51,0.800000011920929);a.nv=Dt(51,0.800000011920929);a.om=0;a.sa=new Float32Array(40000);a.pK=new Int32Array(12000);a.rq=new Int16Array(12000);a.sj=new Int8Array(12000);a.yZ=new Uint8Array(240000);a.kk=b;b.pixelStorei(37441,0);},
AQx=a=>{let b=new Hi();MK(b,a);return b;},
N0=(a,b)=>{let c,d,e,f,g;if(GN){c=(!BC(b,Ey)?null:b.pv.le.data).buffer;d=b.kr;e=b.kj-d|0;return new Float32Array(c,d,e);}if((b.kj-b.kr|0)>a.sa.length)a.sa=new Float32Array(b.kj-b.kr|0);e=b.kr;d=0;while(true){f=b.kj;if(e>=f)break;c=a.sa;g=Sc(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.sa;e=f-b.kr|0;return c.subarray(0,e);},
SB=(a,b)=>{let c,d,e,f,g;if(GN){c=(!BC(b,Ey)?null:b.pr.le.data).buffer;d=b.kr;e=b.kj-d|0;return new Int16Array(c,d,e);}if((b.kj-b.kr|0)>a.rq.length)a.rq=new Int16Array(b.kj-b.kr|0);e=b.kr;d=0;while(true){f=b.kj;if(e>=f)break;c=a.rq;g=ANG(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.rq;e=f-b.kr|0;return c.subarray(0,e);},
VW=(a,b)=>{let c,d,e,f,g;if(GN){c=(!BC(b,Ey)?null:b.er()).buffer;d=b.kr;e=b.kj-d|0;return new Int32Array(c,d,e);}if((b.kj-b.kr|0)>a.pK.length)a.pK=new Int32Array(b.kj-b.kr|0);e=b.kr;d=0;while(true){f=b.kj;if(e>=f)break;c=a.pK;g=b.es(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.pK;e=f-b.kr|0;return c.subarray(0,e);},
MD=(a,b)=>{let c,d,e,f,g;if(GN)return !BC(b,Ey)?null:b.le.data;if((b.kj-b.kr|0)>a.sj.length)a.sj=new Int8Array(b.kj-b.kr|0);c=b.kr;d=0;while(true){e=b.kj;if(c>=e)break;f=a.sj;g=Xe(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.sj;c=e-b.kr|0;return f.subarray(0,c);},
AXB=(a,b)=>{if((b.kj-b.kr|0)>a.pK.length)a.pK=new Int32Array(b.kj-b.kr|0);},
AUf=(a,b)=>{let c,d,e,f,g;c=a.nv;d=a.om;if(!d)c=!c.kN?null:c.kK;else{e=c.kI;f=Bm(Bg(Bd(X(d),D(2135587861, 2654435769)),c.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.kM;}}c=f<0?null:c.kJ.data[f];}c=c;if(!b)c=!c.kN?null:c.kK;else{e=c.kI;d=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kP));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.kM;}}c=d<0?null:c.kJ.data[d];}BE();return c===null?null:c[Bt]===true?c:c.kS;},
AFE=(a,b,c)=>{let d,e,f,g,h,i;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kS;d=a.mG;if(!c)d=!d.kN?null:d.kK;else{e=d.kI;b=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),d.kP));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kM;}}d=b<0?null:d.kJ.data[b];}i=d===null?null:d[Bt]===true?
d:d.kS;a.kk.attachShader(h,i);},
ASe=(a,b,c)=>{let d,e,f,g,h;d=a.kk;e=a.nq;if(!c)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.bindBuffer(b,e);},
AA9=(a,b,c)=>{let d,e,f,g,h;d=a.kk;e=a.nH;if(!c)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.bindTexture(b,e);},
AEI=(a,b,c,d,e)=>{a.kk.blendFuncSeparate(b,c,d,e);},
Lx=(a,b,c,d,e)=>{let f,g;if(d instanceof EC){f=a.kk;d=N0(a,d);f.bufferData(b,d,e);}else if(d instanceof Hx){f=a.kk;d=VW(a,d);f.bufferData(b,d,e);}else if(d instanceof Hy){f=a.kk;d=SB(a,d);f.bufferData(b,d,e);}else if(d instanceof Fe){f=a.kk;g=MD(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new T;f.kc=1;f.kd=1;f.kf=A(142);B(f);}a.kk.bufferData(b,c,e);}},
Lw=(a,b,c,d,e)=>{let f,g;if(e instanceof EC){f=a.kk;e=N0(a,e);f.bufferSubData(b,c,e);}else if(e instanceof Hx){f=a.kk;g=VW(a,e);f.bufferSubData(b,c,g);}else if(e instanceof Hy){f=a.kk;e=SB(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof Fe)){f=new T;f.kc=1;f.kd=1;f.kf=A(142);B(f);}f=a.kk;e=MD(a,e);f.bufferSubData(b,c,e);}},
APR=(a,b)=>{a.kk.clear(b);},
ABn=(a,b,c,d,e)=>{a.kk.clearColor(b,c,d,e);},
AGJ=(a,b)=>{let c,d,e,f;c=a.mG;if(!b)c=!c.kN?null:c.kK;else{d=c.kI;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kP));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kM;}}c=e<0?null:c.kJ.data[e];}BE();c=c===null?null:c[Bt]===true?c:c.kS;a.kk.compileShader(c);},
AS0=a=>{let b,c;b=a.kk.createProgram();c=a.pI;a.pI=c+1|0;Ca(a.l2,c,Cd(b));return c;},
AMr=(a,b)=>{let c,d;c=a.kk.createShader(b);d=a.pC;a.pC=d+1|0;Ca(a.mG,d,Cd(c));return d;},
APS=(a,b)=>{a.kk.depthMask(!!b);},
AL9=(a,b)=>{a.kk.disable(b);},
AKA=(a,b)=>{a.kk.disableVertexAttribArray(b);},
ABZ=(a,b,c,d)=>{a.kk.drawArrays(b,c,d);},
AHy=(a,b,c,d,e)=>{let f,g;f=a.kk;g=e.kr;f.drawElements(b,c,d,g);},
AJ5=(a,b,c,d,e)=>{a.kk.drawElements(b,c,d,e);},
ARR=(a,b)=>{a.kk.enable(b);},
AQz=(a,b)=>{a.kk.enableVertexAttribArray(b);},
AV4=a=>{let b,c;b=a.kk.createBuffer();c=a.mI;a.mI=c+1|0;Ca(a.nq,c,Cd(b));return c;},
Xb=(a,b)=>{a.kk.generateMipmap(b);},
AXJ=a=>{let b,c;b=a.kk.createTexture();c=a.mY;a.mY=c+1|0;Ca(a.nH,c,Cd(b));return c;},
KN=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.kk;g=a.l2;if(!b)g=!g.kN?null:g.kK;else{h=g.kI;i=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),g.kP));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kM;}}g=i<0?null:g.kJ.data[i];}BE();g=g===null?null:g[Bt]===true?g:g.kS;g=f.getActiveAttrib(g,c);EB(d,g.size);EB(e,g.type);d.kr=0;d.kj=d.kL;d.kC=(-1);e.kr=0;e.kj=e.kL;e.kC=(-1);return W(g.name);},
Me=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.kk;g=a.l2;if(!b)g=!g.kN?null:g.kK;else{h=g.kI;i=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),g.kP));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kM;}}g=i<0?null:g.kJ.data[i];}BE();g=g===null?null:g[Bt]===true?g:g.kS;g=f.getActiveUniform(g,c);EB(d,g.size);EB(e,g.type);d.kr=0;d.kj=d.kL;d.kC=(-1);e.kr=0;e.kj=e.kL;e.kC=(-1);return W(g.name);},
ADq=(a,b,c)=>{let d,e,f,g,h;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kS;return a.kk.getAttribLocation(h,Bz(c));},
JE=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new T;c.kc=1;c.kd=1;c.kf=A(143);B(c);}NW(c,0,a.kk.getParameter(b));c.kr=0;c.kj=c.kL;c.kC=(-1);},
ASR=(a,b)=>{let c,d,e,f,g;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;return W(c.getProgramInfoLog(d));},
MG=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.kk;f=a.l2;if(!b)f=!f.kN?null:f.kK;else{g=f.kI;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),f.kP));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kM;}}f=h<0?null:f.kJ.data[h];}BE();f=f===null?null:f[Bt]===true?f:f.kS;EB(d,e.getProgramParameter(f,c));}else{f=a.kk;e=a.l2;if(!b)e=!e.kN?null:e.kK;else{g=e.kI;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.kM;}}e=h<0?null:e.kJ.data[h];}BE();e=e===null?null:e[Bt]===true?e:e.kS;EB(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.kr=0;d.kj=d.kL;d.kC=(-1);},
AIh=(a,b)=>{let c,d,e,f,g;c=a.kk;d=a.mG;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;return W(c.getShaderInfoLog(d));},
Ld=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.kk;f=a.mG;if(!b)f=!f.kN?null:f.kK;else{g=f.kI;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),f.kP));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kM;}}f=h<0?null:f.kJ.data[h];}BE();f=f===null?null:f[Bt]===true?f:f.kS;EB(d,e.getShaderParameter(f,c));}else{f=a.kk;e=a.mG;if(!b)e=!e.kN?null:e.kK;else{g=e.kI;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.kM;}}e=h<0?null:e.kJ.data[h];}BE();e=e===null?null:e[Bt]===true?e:e.kS;EB(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.kr=0;d.kj=d.kL;d.kC=(-1);},
AEn=(a,b)=>{return W(a.kk.getParameter(b));},
AEh=(a,b,c)=>{let d,e,f,g,h;d=a.kk;e=a.l2;if(!b)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d=d.getUniformLocation(e,Bz(c));if(d===null)return (-1);c=a.nv;if(!b)c=!c.kN?null:c.kK;else{f=c.kI;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kP));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
c.kM;}}c=h<0?null:c.kJ.data[h];}c=c;if(c===null){c=Dt(51,0.800000011920929);Ca(a.nv,b,c);}h=a.pP;a.pP=h+1|0;Ca(c,h,Cd(d));return h;},
Zz=(a,b)=>{let c,d,e,f,g;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.linkProgram(d);},
ABY=(a,b,c)=>{a.kk.pixelStorei(b,c);},
Xa=(a,b,c)=>{let d,e,f,g,h;d=a.kk;e=a.mG;if(!b)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.shaderSource(e,Bz(c));},
MR=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.kk;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.kj>4){if(!GN)l=!(j instanceof EC)?Uint8Array.from(MD(a,j)):N0(a,j);else{m=!BC(j,Ey)?null:j.le.data;if(!(j instanceof EC)){n=j.kj-j.kr|0;o=m.byteOffset+j.kr|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.kj-j.kr|0;o=m.byteOffset+j.kr|0;l=new Float32Array(m.buffer,o,n);}}a.kk.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=APX(j,0);ET();j=F8;if(!p)j=!j.kN?null:j.kK;else{q=j.kI;n=Bm(Bg(Bd(X(p),D(2135587861, 2654435769)),
j.kP));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.kM;}}j=n<0?null:j.kJ.data[n];}k=j;r=k.oO;if(r===null&&k.lN!==null?1:0){j=a.kk;s=k.lN.sc;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.qq!==null?1:0){j=a.kk;s=k.qq;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.rt!==null?1:0){j=a.kk;s=k.rt;j.texImage2D(b,c,d,h,i,s);}else{j=a.kk;Fr(k);s=k.oO;j.texImage2D(b,c,d,h,i,s);}}},
AJa=(a,b,c,d)=>{a.kk.texParameterf(b,c,d);},
ALD=(a,b,c,d)=>{let e,f;e=a.kk;f=d;e.texParameterf(b,c,f);},
AL8=(a,b,c)=>{let d,e,f,g,h,i;d=a.nv;e=a.om;if(!e)d=!d.kN?null:d.kK;else{f=d.kI;g=Bm(Bg(Bd(X(e),D(2135587861, 2654435769)),d.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kM;}}d=g<0?null:d.kJ.data[g];}d=d;if(!b)d=!d.kN?null:d.kK;else{f=d.kI;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.kM;}}d=g<0?null:d.kJ.data[g];}BE();i=d===null?null:d[Bt]===true?d:d.kS;a.kk.uniform1i(i,c);},
QZ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.nv;f=a.om;if(!f)g=!g.kN?null:g.kK;else{h=g.kI;c=Bm(Bg(Bd(X(f),D(2135587861, 2654435769)),g.kP));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.kM;}}g=c<0?null:g.kJ.data[c];}g=g;if(!b)g=!g.kN?null:g.kK;else{h=g.kI;c=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),g.kP));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.kM;}}g=c<0?null:g.kJ.data[c];}BE();j=g===null?null:g[Bt]===true?g:g.kS;g=a.kk;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
ZB=(a,b)=>{let c,d,e,f,g;a.om=b;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.useProgram(d);},
AIL=(a,b,c,d,e,f,g)=>{a.kk.vertexAttribPointer(b,c,d,!!e,f,g);},
Xz=(a,b,c,d,e)=>{a.kk.viewport(b,c,d,e);};
let SO=F(0);
function Ki(){let a=this;Hi.call(a);a.kW=null;a.AN=null;a.Ao=0;a.y5=null;a.zo=0;a.zJ=null;a.yJ=0;a.r2=null;a.rU=0;a.Ae=null;}
let Oi=(a,b)=>{MK(a,b);a.AN=Dt(51,0.800000011920929);a.Ao=1;a.y5=Dt(51,0.800000011920929);a.zo=1;a.zJ=Dt(51,0.800000011920929);a.yJ=1;a.r2=Dt(51,0.800000011920929);a.rU=1;a.Ae=new Uint32Array(12000);a.kW=b;},
ARA=a=>{let b=new Ki();Oi(b,a);return b;},
AE8=(a,b)=>{let c,d,e,f,g;c=a.kW;d=a.r2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.bindVertexArray(d);},
AKr=(a,b,c,d,e)=>{a.kW.drawArraysInstanced(b,c,d,e);},
ATA=(a,b,c,d,e,f)=>{a.kW.drawElementsInstanced(b,c,d,e,f);},
AK4=(a,b,c)=>{let d,e,f,g;d=c.kr;e=0;while(e<b){f=a.kW.createVertexArray();g=a.rU;a.rU=g+1|0;Ca(a.r2,g,Cd(f));EB(c,g);e=e+1|0;}CK(c,d);},
AHG=(a,b,c)=>{if(b!=34045)JE(a,b,c);else{NW(c,0,a.kW.getParameter(b));c.kr=0;c.kj=c.kL;c.kC=(-1);}};
let Ph=F(Ki);
let ADy=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kW;d=a.r2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.bindVertexArray(d);b=a.kW.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f>=0&&
f<=(g-0|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
AAi=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kW.drawArraysInstanced(b,c,d,e);b=a.kW.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;U(f);B(f);},
AR7=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.kW.drawElementsInstanced(b,c,d,e,f);b=a.kW.getError();if(!b)return;g=new T;h=Bi(b,4);i=new K;i.ka=G(16);E(i,i.j_,A(144));J(i,i.j_,b,10);E(i,i.j_,A(47));b=i.j_;if(h===null)h=A(2);E(i,b,h);j=new I;k=i.ka;l=k.data;c=i.j_;d=l.length;if(c>=0&&c<=(d-0|0)){j.kb=L(k.data,0,c);g.kc=1;g.kd=1;g.kf=j;B(g);}g=new H;U(g);B(g);},
Zn=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.kr;e=0;while(e<b){f=a.kW.createVertexArray();g=a.rU;a.rU=g+1|0;Ca(a.r2,g,Cd(f));EB(c,g);e=e+1|0;}CK(c,d);b=a.kW.getError();if(!b)return;c=new T;h=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(h===null)h=A(2);E(f,b,h);i=new I;j=f.ka;k=j.data;e=f.j_;l=k.length;if(e>=0&&e<=(l-0|0)){i.kb=L(j.data,0,e);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
AAa=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kk;e=a.nH;if(!c)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.bindTexture(b,e);b=a.kW.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ka;k=f.data;c=e.j_;g=k.length;if(c>=0&&c<=
(g-0|0)){j.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=j;B(d);}d=new H;U(d);B(d);},
APW=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.clear(b);b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AJf=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.kk.clearColor(b,c,d,e);f=a.kW.getError();if(!f)return;g=new T;h=Bi(f,4);i=new K;i.ka=G(16);E(i,i.j_,A(144));J(i,i.j_,f,10);E(i,i.j_,A(47));f=i.j_;if(h===null)h=A(2);E(i,f,h);j=new I;k=i.ka;l=k.data;m=i.j_;n=l.length;if(m>=0&&m<=(n-0|0)){j.kb=L(k.data,0,m);g.kc=1;g.kd=1;g.kf=j;B(g);}g=new H;U(g);B(g);},
Zk=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.depthMask(!!b);b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AQC=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.disable(b);b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
ACM=(a,b,c,d)=>{let e,f,g,h,i,j;a.kk.drawArrays(b,c,d);b=a.kW.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;d=j.length;if(c>=0&&c<=(d-0|0)){h.kb=L(i.data,0,c);e.kc=1;e.kd=1;e.kf=h;B(e);}e=new H;U(e);B(e);},
AME=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.kk;g=e.kr;f.drawElements(b,c,d,g);b=a.kW.getError();if(!b)return;e=new T;h=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(h===null)h=A(2);E(f,b,h);i=new I;j=f.ka;k=j.data;c=f.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);e.kc=1;e.kd=1;e.kf=i;B(e);}e=new H;U(e);B(e);},
AOm=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.enable(b);b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
WX=(a,b)=>{return W(a.kk.getParameter(b));},
X_=(a,b,c)=>{let d,e,f,g,h,i,j;a.kk.pixelStorei(b,c);b=a.kW.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=g;B(d);}d=new H;U(d);B(d);},
AJM=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MR(a,b,c,d,e,f,g,h,i,j);b=a.kW.getError();if(!b)return;j=new T;k=Bi(b,4);l=new K;l.ka=G(16);E(l,l.j_,A(144));J(l,l.j_,b,10);E(l,l.j_,A(47));b=l.j_;if(k===null)k=A(2);E(l,b,k);m=new I;n=l.ka;o=n.data;c=l.j_;d=o.length;if(c>=0&&c<=(d-0|0)){m.kb=L(n.data,0,c);j.kc=1;j.kd=1;j.kf=m;B(j);}j=new H;U(j);B(j);},
ACv=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.kk.texParameterf(b,c,d);b=a.kW.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;k=j.length;if(c>=0&&c<=(k-0|0)){h.kb=L(i.data,0,c);e.kc=1;e.kd=1;e.kf=h;B(e);}e=new H;U(e);B(e);},
AEX=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kk.viewport(b,c,d,e);b=a.kW.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;U(f);B(f);},
AIo=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kS;d=a.mG;if(!c)d=!d.kN?null:d.kK;else{e=d.kI;b=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),d.kP));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kM;}}d=b<0?null:d.kJ.data[b];}i=d===null?null:d[Bt]===true
?d:d.kS;a.kk.attachShader(h,i);b=a.kW.getError();if(!b)return;d=new T;j=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(j===null)j=A(2);E(h,b,j);i=new I;e=h.ka;k=e.data;c=h.j_;f=k.length;if(c>=0&&c<=(f-0|0)){i.kb=L(e.data,0,c);d.kc=1;d.kd=1;d.kf=i;B(d);}d=new H;U(d);B(d);},
ARs=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kk;e=a.nq;if(!c)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.bindBuffer(b,e);b=a.kW.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ka;k=f.data;c=e.j_;g=k.length;if(c>=0&&c<=(g
-0|0)){j.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=j;B(d);}d=new H;U(d);B(d);},
ADA=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kk.blendFuncSeparate(b,c,d,e);b=a.kW.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;U(f);B(f);},
AJr=(a,b,c,d,e)=>{let f,g,h,i,j;Lx(a,b,c,d,e);b=a.kW.getError();if(!b)return;d=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;e=j.length;if(c>=0&&c<=(e-0|0)){h.kb=L(i.data,0,c);d.kc=1;d.kd=1;d.kf=h;B(d);}d=new H;U(d);B(d);},
ARj=(a,b,c,d,e)=>{let f,g,h,i,j;Lw(a,b,c,d,e);b=a.kW.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;d=j.length;if(c>=0&&c<=(d-0|0)){h.kb=L(i.data,0,c);e.kc=1;e.kd=1;e.kf=h;B(e);}e=new H;U(e);B(e);},
AKV=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mG;if(!b)c=!c.kN?null:c.kK;else{d=c.kI;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kP));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kM;}}c=e<0?null:c.kJ.data[e];}BE();g=c===null?null:c[Bt]===true?c:c.kS;a.kk.compileShader(g);b=a.kW.getError();if(!b)return;c=new T;h=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(h===null)h=A(2);E(g,b,h);i=new I;d=g.ka;j=d.data;e=g.j_;f=j.length;if(e>=0&&e<=(f-0|0))
{i.kb=L(d.data,0,e);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
ASZ=a=>{let b,c,d,e,f,g,h,i,j;b=a.kk.createProgram();c=a.pI;a.pI=c+1|0;Ca(a.l2,c,Cd(b));d=a.kW.getError();if(!d)return c;b=new T;e=Bi(d,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,d,10);E(f,f.j_,A(47));d=f.j_;if(e===null)e=A(2);E(f,d,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);b.kc=1;b.kd=1;b.kf=g;B(b);}b=new H;U(b);B(b);},
AMZ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk.createShader(b);d=a.pC;a.pC=d+1|0;Ca(a.mG,d,Cd(c));b=a.kW.getError();if(!b)return d;c=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;d=f.j_;j=i.length;if(d>=0&&d<=(j-0|0)){g.kb=L(h.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;U(c);B(c);},
ASO=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.disableVertexAttribArray(b);b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
ZR=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kk.drawElements(b,c,d,e);b=a.kW.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;U(f);B(f);},
AM6=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.enableVertexAttribArray(b);b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AP2=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.generateMipmap(b);b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AGp=(a,b,c,d,e)=>{let f,g,h,i,j;f=KN(a,b,c,d,e);b=a.kW.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ka;i=h.data;c=e.j_;j=i.length;if(c>=0&&c<=(j-0|0)){f.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=f;B(d);}d=new H;U(d);B(d);},
APT=(a,b,c,d,e)=>{let f,g,h,i,j;f=Me(a,b,c,d,e);b=a.kW.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ka;i=h.data;c=e.j_;j=i.length;if(c>=0&&c<=(j-0|0)){f.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=f;B(d);}d=new H;U(d);B(d);},
AKb=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kS;b=a.kk.getAttribLocation(h,Bz(c));f=a.kW.getError();if(!f)return b;c=new T;i=Bi(f,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,f,10);E(d,d.j_,A(47));b=d.j_;if(i===null)i=A(2);E(d,b,i);h=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f
>=0&&f<=(g-0|0)){h.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;U(c);B(c);},
ADJ=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)JE(a,b,c);else{NW(c,0,a.kW.getParameter(b));c.kr=0;c.kj=c.kL;c.kC=(-1);}b=a.kW.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
ABq=(a,b,c,d)=>{let e,f,g,h,i,j;MG(a,b,c,d);b=a.kW.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=g;B(d);}d=new H;U(d);B(d);},
X9=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c=W(c.getProgramInfoLog(d));b=a.kW.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f
>=0&&f<=(g-0|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
ASX=(a,b,c,d)=>{let e,f,g,h,i,j;Ld(a,b,c,d);b=a.kW.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=g;B(d);}d=new H;U(d);B(d);},
Y3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk;d=a.mG;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c=W(c.getShaderInfoLog(d));b=a.kW.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f>=
0&&f<=(g-0|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
Ya=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kk;e=a.l2;if(!b)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;c=d.getUniformLocation(e,Bz(c));if(c===null)h=(-1);else{d=a.nv;if(!b)d=!d.kN?null:d.kK;else{f=d.kI;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|
0)&d.kM;}}d=h<0?null:d.kJ.data[h];}d=d;if(d===null){d=Dt(51,0.800000011920929);Ca(a.nv,b,d);}h=a.pP;a.pP=h+1|0;Ca(d,h,Cd(c));}b=a.kW.getError();if(!b)return h;c=new T;i=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ka;j=f.data;h=d.j_;g=j.length;if(h>=0&&h<=(g-0|0)){e.kb=L(f.data,0,h);c.kc=1;c.kd=1;c.kf=e;B(c);}c=new H;U(c);B(c);},
ARX=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.linkProgram(d);b=a.kW.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f>=0&&f<=(g-0
|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
X7=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kk;e=a.mG;if(!b)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.shaderSource(e,Bz(c));b=a.kW.getError();if(!b)return;c=new T;i=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ka;j=f.data;g=d.j_;h=j.length;if(g>=0&&g
<=(h-0|0)){e.kb=L(f.data,0,g);c.kc=1;c.kd=1;c.kf=e;B(c);}c=new H;U(c);B(c);},
Zy=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.kk;f=d;e.texParameterf(b,c,f);b=a.kW.getError();if(!b)return;e=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);e.kc=1;e.kd=1;e.kf=i;B(e);}e=new H;U(e);B(e);},
AAF=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.nv;e=a.om;if(!e)d=!d.kN?null:d.kK;else{f=d.kI;g=Bm(Bg(Bd(X(e),D(2135587861, 2654435769)),d.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kM;}}d=g<0?null:d.kJ.data[g];}d=d;if(!b)d=!d.kN?null:d.kK;else{f=d.kI;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kM;}}d=e<0?null:d.kJ.data[e];}BE();i=d===null?null:d[Bt]===true?d:d.kS;a.kk.uniform1i(i,c);b
=a.kW.getError();if(!b)return;d=new T;i=Bi(b,4);j=new K;j.ka=G(16);E(j,j.j_,A(144));J(j,j.j_,b,10);E(j,j.j_,A(47));b=j.j_;if(i===null)i=A(2);E(j,b,i);k=new I;f=j.ka;l=f.data;c=j.j_;e=l.length;if(c>=0&&c<=(e-0|0)){k.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=k;B(d);}d=new H;U(d);B(d);},
ATF=(a,b)=>{let c,d,e,f,g,h,i,j;a.om=b;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.useProgram(d);b=a.kW.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f>=0&&f
<=(g-0|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
ANT=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.kk.vertexAttribPointer(b,c,d,!!e,f,g);b=a.kW.getError();if(!b)return;h=new T;i=Bi(b,4);j=new K;j.ka=G(16);E(j,j.j_,A(144));J(j,j.j_,b,10);E(j,j.j_,A(47));b=j.j_;if(i===null)i=A(2);E(j,b,i);k=new I;l=j.ka;m=l.data;c=j.j_;d=m.length;if(c>=0&&c<=(d-0|0)){k.kb=L(l.data,0,c);h.kc=1;h.kd=1;h.kf=k;B(h);}h=new H;U(h);B(h);};
function QL(){let a=this;C.call(a);a.vO=0;a.u6=0;a.vd=0;a.yQ=null;a.zL=null;a.py=null;a.yE=A(145);}
let AIf=(a,b,c,d,e)=>{a.yE=A(145);if(b===NS)a.py=JN;else if(b===Nd)a.py=JN;else if(b===Nk)a.py=J5;else if(b===M0)a.py=J5;else if(b!==HL)a.py=SK;else a.py=LW;b=a.py;if(b===JN)LM(a,A(146),c);else if(b===LW)LM(a,A(147),c);else if(b===J5)LM(a,A(148),c);else{a.vO=(-1);a.u6=(-1);a.vd=(-1);d=A(68);e=A(68);}a.yQ=d;a.zL=e;},
AMy=(a,b,c,d)=>{let e=new QL();AIf(e,a,b,c,d);return e;},
LM=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=QX(I8(b,0),c);if(!Rh(d)){e=Df;b=new K;b.ka=G(16);E(b,b.j_,A(149));E(b,b.j_,c);c=new I;f=b.ka;g=f.data;h=b.j_;i=g.length;if(h>=0&&h<=(i-0|0)){c.kb=L(f.data,0,h);if(e.pY>=2){if(BX===null){b=new C3;e=new Cu;Bu(e);e.l4=BN(32);E8(b);b.mm=e;e=new K;Fc(e);b.l7=e;b.l6=G(32);b.l8=0;b.l9=Co;BX=b;}b=new K;b.ka=G(16);BZ(b,b.j_,A(145));BZ(b,b.j_,A(81));BZ(b,b.j_,c);c=new I;f=b.ka;g=f.data;h=b.j_;i=g.length;if(h>=0&&h<=(i-0|0)){c.kb=L(f.data,0,h);B2(Bz(c));B2("\n");}else{b
=new H;b.kc=1;b.kd=1;B(b);}}a.vO=2;a.u6=0;a.vd=0;break a;}b=new H;b.kc=1;b.kd=1;B(b);}b=d.oB;j=b.o_;if(!j){b=new BO;b.kc=1;b.kd=1;Bk(b);B(b);}k=BW(1,b.qp);if(k>=0){b=new H;c=new K;Bu(c);c.ka=G(16);J(c,c.j_,1,10);e=new I;f=c.ka;g=f.data;h=c.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);b.kc=1;b.kd=1;b.kf=e;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}f=b.md.data;if(f[2]<0)e=null;else{b=b.qK;if(!j){b=new BO;b.kc=1;b.kd=1;Bk(b);B(b);}if(k>=0){b=new H;c=new K;Bu(c);c.ka=G(16);J(c,c.j_,1,10);e=new I;f=c.ka;g=f.data;h
=c.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);b.kc=1;b.kd=1;b.kf=e;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}h=f[2];if(!j){b=new BO;b.kc=1;b.kd=1;Bk(b);B(b);}if(k>=0){b=new H;c=new K;Bu(c);c.ka=G(16);J(c,c.j_,1,10);e=new I;f=c.ka;g=f.data;h=c.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);b.kc=1;b.kd=1;b.kf=e;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}e=Cj(b,h,f[3]);}f=(KM(I8(A(150),0),e,0)).data;b=f[0];b:{try{h=Lk(b);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}d=Df;e=new K;e.ka
=G(16);E(e,e.j_,A(151));E(e,e.j_,b);E(e,e.j_,A(152));J(e,e.j_,2,10);l=new I;g=e.ka;m=g.data;i=e.j_;j=m.length;if(i>=0&&i<=(j-0|0)){l.kb=L(g.data,0,i);if(d.pY>=1){if(Du===null){b=new F0;e=new Cu;E8(e);e.l4=BN(32);Gl(b,e);b.l7=EF();b.l6=G(32);b.l8=0;b.l9=Co;Du=b;}b=new K;b.ka=G(16);Cb(b,b.j_,Cp(A(153)));Cb(b,b.j_,Cp(A(81)));Cb(b,b.j_,Cp(l));c=new I;g=b.ka;m=g.data;i=b.j_;j=m.length;if(i>=0&&i<=(j-0|0)){c.kb=L(g.data,0,i);DN(Bz(c));DN("\n");}else{b=new H;b.kc=1;b.kd=1;B(b);}}h=2;}else{b=new H;b.kc=1;b.kd=1;B(b);}}a.vO
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=Lk(b);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}d=Df;e=new K;e.ka=G(16);E(e,e.j_,A(151));E(e,e.j_,b);E(e,e.j_,A(152));J(e,e.j_,0,10);l=new I;g=e.ka;m=g.data;j=e.j_;k=m.length;if(j>=0&&j<=(k-0|0)){l.kb=L(g.data,0,j);if(d.pY>=1){if(Du===null){b=new F0;e=new Cu;E8(e);e.l4=BN(32);Gl(b,e);b.l7=EF();b.l6=G(32);b.l8=0;b.l9=Co;Du=b;}b=new K;b.ka=G(16);Cb(b,b.j_,Cp(A(153)));Cb(b,b.j_,Cp(A(81)));Cb(b,b.j_,Cp(l));c=new I;g=b.ka;m=g.data;j=b.j_;k
=m.length;if(j>=0&&j<=(k-0|0)){c.kb=L(g.data,0,j);DN(Bz(c));DN("\n");}else{b=new H;b.kc=1;b.kd=1;B(b);}}i=0;}else{b=new H;b.kc=1;b.kd=1;B(b);}}}a.u6=i;if(n<3)h=0;else{b=f[2];d:{try{h=Lk(b);break d;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}e=Df;d=new K;d.ka=G(16);E(d,d.j_,A(151));E(d,d.j_,b);E(d,d.j_,A(152));J(d,d.j_,0,10);b=new I;g=d.ka;f=g.data;h=d.j_;i=f.length;if(h>=0&&h<=(i-0|0)){b.kb=L(g.data,0,h);if(e.pY>=1){if(Du===null){e=new F0;d=new Cu;E8(d);d.l4=BN(32);Gl(e,d);e.l7=EF();e.l6
=G(32);e.l8=0;e.l9=Co;Du=e;}e=new K;e.ka=G(16);Cb(e,e.j_,Cp(A(153)));Cb(e,e.j_,Cp(A(81)));Cb(e,e.j_,Cp(b));b=new I;f=e.ka;g=f.data;i=e.j_;j=g.length;if(i>=0&&i<=(j-0|0)){b.kb=L(f.data,0,i);DN(Bz(b));DN("\n");}else{b=new H;b.kc=1;b.kd=1;B(b);}}h=0;}else{b=new H;b.kc=1;b.kd=1;B(b);}}}a.vd=h;}};
let Fb=F(BH);
let NS=null,Nk=null,AA$=null,M0=null,HL=null,Nd=null,AER=null;
let ABQ=()=>{let b,c,d,e,f,g;b=new Fb;b.kt=A(7);b.kn=0;NS=b;c=new Fb;c.kt=A(154);c.kn=1;Nk=c;d=new Fb;d.kt=A(155);d.kn=2;AA$=d;e=new Fb;e.kt=A(156);e.kn=3;M0=e;f=new Fb;f.kt=A(157);f.kn=4;HL=f;g=new Fb;g.kt=A(158);g.kn=5;Nd=g;AER=V(Fb,[b,c,d,e,f,g]);};
let T6=F(0);
function MW(){C.call(this);this.yT=null;}
let ACE=a=>{return;};
let VV=F(Hi);
let ASu=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kk;e=a.nH;if(!c)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.bindTexture(b,e);b=a.kk.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ka;k=f.data;c=e.j_;g=k.length;if(c>=0&&
c<=(g-0|0)){j.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=j;B(d);}d=new H;U(d);B(d);},
ABx=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.clear(b);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
ACt=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.kk.clearColor(b,c,d,e);f=a.kk.getError();if(!f)return;g=new T;h=Bi(f,4);i=new K;i.ka=G(16);E(i,i.j_,A(144));J(i,i.j_,f,10);E(i,i.j_,A(47));f=i.j_;if(h===null)h=A(2);E(i,f,h);j=new I;k=i.ka;l=k.data;m=i.j_;n=l.length;if(m>=0&&m<=(n-0|0)){j.kb=L(k.data,0,m);g.kc=1;g.kd=1;g.kf=j;B(g);}g=new H;U(g);B(g);},
AJp=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.depthMask(!!b);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
ATe=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.disable(b);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AGH=(a,b,c,d)=>{let e,f,g,h,i,j;a.kk.drawArrays(b,c,d);b=a.kk.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;d=j.length;if(c>=0&&c<=(d-0|0)){h.kb=L(i.data,0,c);e.kc=1;e.kd=1;e.kf=h;B(e);}e=new H;U(e);B(e);},
ASG=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.kk;g=e.kr;f.drawElements(b,c,d,g);b=a.kk.getError();if(!b)return;e=new T;h=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(h===null)h=A(2);E(f,b,h);i=new I;j=f.ka;k=j.data;c=f.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);e.kc=1;e.kd=1;e.kf=i;B(e);}e=new H;U(e);B(e);},
ZU=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.enable(b);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AH5=(a,b)=>{return W(a.kk.getParameter(b));},
AK0=(a,b,c)=>{let d,e,f,g,h,i,j;a.kk.pixelStorei(b,c);b=a.kk.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=g;B(d);}d=new H;U(d);B(d);},
ADK=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MR(a,b,c,d,e,f,g,h,i,j);b=a.kk.getError();if(!b)return;j=new T;k=Bi(b,4);l=new K;l.ka=G(16);E(l,l.j_,A(144));J(l,l.j_,b,10);E(l,l.j_,A(47));b=l.j_;if(k===null)k=A(2);E(l,b,k);m=new I;n=l.ka;o=n.data;c=l.j_;d=o.length;if(c>=0&&c<=(d-0|0)){m.kb=L(n.data,0,c);j.kc=1;j.kd=1;j.kf=m;B(j);}j=new H;U(j);B(j);},
AC1=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.kk.texParameterf(b,c,d);b=a.kk.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;k=j.length;if(c>=0&&c<=(k-0|0)){h.kb=L(i.data,0,c);e.kc=1;e.kd=1;e.kf=h;B(e);}e=new H;U(e);B(e);},
ASS=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kk.viewport(b,c,d,e);b=a.kk.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;U(f);B(f);},
X4=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kS;d=a.mG;if(!c)d=!d.kN?null:d.kK;else{e=d.kI;b=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),d.kP));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kM;}}d=b<0?null:d.kJ.data[b];}i=d===null?null:d[Bt]===true
?d:d.kS;a.kk.attachShader(h,i);b=a.kk.getError();if(!b)return;d=new T;j=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(j===null)j=A(2);E(h,b,j);i=new I;e=h.ka;k=e.data;c=h.j_;f=k.length;if(c>=0&&c<=(f-0|0)){i.kb=L(e.data,0,c);d.kc=1;d.kd=1;d.kf=i;B(d);}d=new H;U(d);B(d);},
WT=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kk;e=a.nq;if(!c)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.bindBuffer(b,e);b=a.kk.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ka;k=f.data;c=e.j_;g=k.length;if(c>=0&&c<=(g
-0|0)){j.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=j;B(d);}d=new H;U(d);B(d);},
WR=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kk.blendFuncSeparate(b,c,d,e);b=a.kk.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;U(f);B(f);},
AHx=(a,b,c,d,e)=>{let f,g,h,i,j;Lx(a,b,c,d,e);b=a.kk.getError();if(!b)return;d=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;e=j.length;if(c>=0&&c<=(e-0|0)){h.kb=L(i.data,0,c);d.kc=1;d.kd=1;d.kf=h;B(d);}d=new H;U(d);B(d);},
AE_=(a,b,c,d,e)=>{let f,g,h,i,j;Lw(a,b,c,d,e);b=a.kk.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ka;j=i.data;c=g.j_;d=j.length;if(c>=0&&c<=(d-0|0)){h.kb=L(i.data,0,c);e.kc=1;e.kd=1;e.kf=h;B(e);}e=new H;U(e);B(e);},
ATq=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mG;if(!b)c=!c.kN?null:c.kK;else{d=c.kI;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kP));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kM;}}c=e<0?null:c.kJ.data[e];}BE();g=c===null?null:c[Bt]===true?c:c.kS;a.kk.compileShader(g);b=a.kk.getError();if(!b)return;c=new T;h=Bi(b,4);g=new K;g.ka=G(16);E(g,g.j_,A(144));J(g,g.j_,b,10);E(g,g.j_,A(47));b=g.j_;if(h===null)h=A(2);E(g,b,h);i=new I;d=g.ka;j=d.data;e=g.j_;f=j.length;if(e>=0&&e<=(f-0|0))
{i.kb=L(d.data,0,e);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
ALv=a=>{let b,c,d,e,f,g,h,i,j;b=a.kk.createProgram();c=a.pI;a.pI=c+1|0;Ca(a.l2,c,Cd(b));d=a.kk.getError();if(!d)return c;b=new T;e=Bi(d,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,d,10);E(f,f.j_,A(47));d=f.j_;if(e===null)e=A(2);E(f,d,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);b.kc=1;b.kd=1;b.kf=g;B(b);}b=new H;U(b);B(b);},
AS5=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk.createShader(b);d=a.pC;a.pC=d+1|0;Ca(a.mG,d,Cd(c));b=a.kk.getError();if(!b)return d;c=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;d=f.j_;j=i.length;if(d>=0&&d<=(j-0|0)){g.kb=L(h.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;U(c);B(c);},
ALo=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.disableVertexAttribArray(b);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AFt=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kk.drawElements(b,c,d,e);b=a.kk.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;U(f);B(f);},
ATf=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.enableVertexAttribArray(b);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AKn=(a,b)=>{let c,d,e,f,g,h,i,j;a.kk.generateMipmap(b);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
AHB=(a,b,c,d,e)=>{let f,g,h,i,j;f=KN(a,b,c,d,e);b=a.kk.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ka;i=h.data;c=e.j_;j=i.length;if(c>=0&&c<=(j-0|0)){f.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=f;B(d);}d=new H;U(d);B(d);},
AAg=(a,b,c,d,e)=>{let f,g,h,i,j;f=Me(a,b,c,d,e);b=a.kk.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ka;i=h.data;c=e.j_;j=i.length;if(c>=0&&c<=(j-0|0)){f.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=f;B(d);}d=new H;U(d);B(d);},
AFF=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kS;b=a.kk.getAttribLocation(h,Bz(c));f=a.kk.getError();if(!f)return b;c=new T;i=Bi(f,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,f,10);E(d,d.j_,A(47));b=d.j_;if(i===null)i=A(2);E(d,b,i);h=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f
>=0&&f<=(g-0|0)){h.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;U(c);B(c);},
XE=(a,b,c)=>{let d,e,f,g,h,i,j;JE(a,b,c);b=a.kk.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ka=G(16);E(e,e.j_,A(144));J(e,e.j_,b,10);E(e,e.j_,A(47));b=e.j_;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;U(c);B(c);},
ADQ=(a,b,c,d)=>{let e,f,g,h,i,j;MG(a,b,c,d);b=a.kk.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=g;B(d);}d=new H;U(d);B(d);},
ADY=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c=W(c.getProgramInfoLog(d));b=a.kk.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f
>=0&&f<=(g-0|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
Yi=(a,b,c,d)=>{let e,f,g,h,i,j;Ld(a,b,c,d);b=a.kk.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ka=G(16);E(f,f.j_,A(144));J(f,f.j_,b,10);E(f,f.j_,A(47));b=f.j_;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ka;i=h.data;c=f.j_;j=i.length;if(c>=0&&c<=(j-0|0)){g.kb=L(h.data,0,c);d.kc=1;d.kd=1;d.kf=g;B(d);}d=new H;U(d);B(d);},
AN0=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk;d=a.mG;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c=W(c.getShaderInfoLog(d));b=a.kk.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f
>=0&&f<=(g-0|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
AQi=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kk;e=a.l2;if(!b)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;c=d.getUniformLocation(e,Bz(c));if(c===null)h=(-1);else{d=a.nv;if(!b)d=!d.kN?null:d.kK;else{f=d.kI;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1
|0)&d.kM;}}d=h<0?null:d.kJ.data[h];}d=d;if(d===null){d=Dt(51,0.800000011920929);Ca(a.nv,b,d);}h=a.pP;a.pP=h+1|0;Ca(d,h,Cd(c));}b=a.kk.getError();if(!b)return h;c=new T;i=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ka;j=f.data;h=d.j_;g=j.length;if(h>=0&&h<=(g-0|0)){e.kb=L(f.data,0,h);c.kc=1;c.kd=1;c.kf=e;B(c);}c=new H;U(c);B(c);},
AIS=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.linkProgram(d);b=a.kk.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f>=0&&f<=(g-0
|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
ASE=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kk;e=a.mG;if(!b)e=!e.kN?null:e.kK;else{f=e.kI;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kM;}}e=g<0?null:e.kJ.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kS;d.shaderSource(e,Bz(c));b=a.kk.getError();if(!b)return;c=new T;i=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ka;j=f.data;g=d.j_;h=j.length;if(g>=0&&
g<=(h-0|0)){e.kb=L(f.data,0,g);c.kc=1;c.kd=1;c.kf=e;B(c);}c=new H;U(c);B(c);},
AP_=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.kk;f=d;e.texParameterf(b,c,f);b=a.kk.getError();if(!b)return;e=new T;g=Bi(b,4);h=new K;h.ka=G(16);E(h,h.j_,A(144));J(h,h.j_,b,10);E(h,h.j_,A(47));b=h.j_;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ka;k=j.data;c=h.j_;d=k.length;if(c>=0&&c<=(d-0|0)){i.kb=L(j.data,0,c);e.kc=1;e.kd=1;e.kf=i;B(e);}e=new H;U(e);B(e);},
ASY=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.nv;e=a.om;if(!e)d=!d.kN?null:d.kK;else{f=d.kI;g=Bm(Bg(Bd(X(e),D(2135587861, 2654435769)),d.kP));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kM;}}d=g<0?null:d.kJ.data[g];}d=d;if(!b)d=!d.kN?null:d.kK;else{f=d.kI;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kM;}}d=e<0?null:d.kJ.data[e];}BE();i=d===null?null:d[Bt]===true?d:d.kS;a.kk.uniform1i(i,c);b
=a.kk.getError();if(!b)return;d=new T;i=Bi(b,4);j=new K;j.ka=G(16);E(j,j.j_,A(144));J(j,j.j_,b,10);E(j,j.j_,A(47));b=j.j_;if(i===null)i=A(2);E(j,b,i);k=new I;f=j.ka;l=f.data;c=j.j_;e=l.length;if(c>=0&&c<=(e-0|0)){k.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=k;B(d);}d=new H;U(d);B(d);},
Yk=(a,b)=>{let c,d,e,f,g,h,i,j;a.om=b;c=a.kk;d=a.l2;if(!b)d=!d.kN?null:d.kK;else{e=d.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kP));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kM;}}d=f<0?null:d.kJ.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kS;c.useProgram(d);b=a.kk.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ka=G(16);E(d,d.j_,A(144));J(d,d.j_,b,10);E(d,d.j_,A(47));b=d.j_;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ka;j=e.data;f=d.j_;g=j.length;if(f>=0&&f<=
(g-0|0)){i.kb=L(e.data,0,f);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;U(c);B(c);},
ABc=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.kk.vertexAttribPointer(b,c,d,!!e,f,g);b=a.kk.getError();if(!b)return;h=new T;i=Bi(b,4);j=new K;j.ka=G(16);E(j,j.j_,A(144));J(j,j.j_,b,10);E(j,j.j_,A(47));b=j.j_;if(i===null)i=A(2);E(j,b,i);k=new I;l=j.ka;m=l.data;c=j.j_;d=m.length;if(c>=0&&c<=(d-0|0)){k.kb=L(l.data,0,c);h.kc=1;h.kd=1;h.kf=k;B(h);}h=new H;U(h);B(h);};
function T_(){let a=this;C.call(a);a.oH=0;a.kI=null;a.kJ=null;a.kK=null;a.kN=0;a.wN=0.0;a.tO=0;a.kP=0;a.kM=0;}
let AE6=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wN=c;d=JW(b,c);a.tO=d*c|0;b=d-1|0;a.kM=b;a.kP=Fp(X(b));a.kI=Ba(d);a.kJ=R(C,d);return;}e=new Bl;f=new K;f.ka=G(16);E(f,f.j_,A(69));F4(f,f.j_,c);g=new I;h=f.ka;i=h.data;d=f.j_;j=i.length;if(d>=0&&d<=(j-0|0)){g.kb=L(h.data,0,d);e.kc=1;e.kd=1;e.kf=g;B(e);}f=new H;f.kc=1;f.kd=1;B(f);},
Dt=(a,b)=>{let c=new T_();AE6(c,a,b);return c;},
Ca=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.kK;a.kK=c;if(!a.kN){a.kN=1;a.oH=a.oH+1|0;}return d;}e=a.kI;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),a.kP));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.kM;}}if(f>=0){e=a.kJ.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.kJ.data[f]=c;b=a.oH+1|0;a.oH=b;if(b>=a.tO)APe(a,g.length<<1);return null;},
Hc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.kN)return null;a.kN=0;c=a.kK;a.kK=null;a.oH=a.oH-1|0;return c;}d=a.kI;e=Bd(X(b),D(2135587861, 2654435769));f=a.kP;g=Bm(Bg(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.kM;}}if(g<0)return null;j=a.kJ.data;k=j[g];l=a.kM;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bm(Bg(Bd(X(n),D(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.oH=a.oH-1|0;return k;},
AS$=(a,b,c)=>{let d,e,f,g;a:{d=a.kJ;if(b===null){if(a.kN&&a.kK===null)return 1;d=d.data;e=a.kI;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.kK)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.kN){g=a.kK;if(b===g?1:g instanceof FN&&g.nU==b.nU?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof FN&&g.nU==b.nU?1:0)return 1;f=f+(-1)|0;}}return 0;},
APe=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.kI.data.length;a.tO=b*a.wN|0;d=b-1|0;a.kM=d;d=Fp(X(d));a.kP=d;e=a.kI;f=a.kJ;g=Ba(b);a.kI=g;h=R(C,b);a.kJ=h;if(a.oH>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bm(Bg(Bd(X(k),D(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.kM;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function Sq(){let a=this;C.call(a);a.nV=0;a.pc=null;a.qT=0;a.yt=0.0;a.t8=0;a.qt=0;a.o6=0;}
let AC5=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.yt=c;d=JW(b,c);a.t8=d*c|0;b=d-1|0;a.o6=b;a.qt=Fp(X(b));a.pc=Ba(d);return;}e=new Bl;f=new K;f.ka=G(16);E(f,f.j_,A(69));F4(f,f.j_,c);g=new I;h=f.ka;i=h.data;d=f.j_;j=i.length;if(d>=0&&d<=(j-0|0)){g.kb=L(h.data,0,d);e.kc=1;e.kd=1;e.kf=g;B(e);}f=new H;f.kc=1;f.kd=1;B(f);},
O_=(a,b)=>{let c=new Sq();AC5(c,a,b);return c;},
ACh=(a,b)=>{let c,d,e,f;if(!b){if(a.qT)return 0;a.qT=1;a.nV=a.nV+1|0;return 1;}c=a.pc;d=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),a.qt));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.o6;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.nV+1|0;a.nV=b;if(b>=a.t8)ACr(a,e.length<<1);return 1;},
AQ$=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.qT)return 0;a.qT=0;a.nV=a.nV-1|0;return 1;}c=a.pc;d=Bd(X(b),D(2135587861, 2654435769));e=a.qt;f=Bm(Bg(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.o6;}}if(f<0)return 0;h=a.o6;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.nV=a.nV-1|0;return 1;},
ACr=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.pc.data.length;a.t8=b*a.yt|0;d=b-1|0;a.o6=d;d=Fp(X(d));a.qt=d;e=a.pc;f=Ba(b);a.pc=f;if(a.nV>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bm(Bg(Bd(X(h),D(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.o6;}f[i]=h;}g=g+1|0;}}}};
let UY=F(0);
function Mq(){C.call(this);this.sI=null;}
let XW=a=>{let b;b=a.sI;b.sZ=1;UN(Bz(b.uO));},
AB_=a=>{let b;b=a.sI;b.sZ=1;UN(Bz(b.uO));},
Xv=a=>{a.sI.sZ=0;};
let Wd=F(0);
function Wm(){let a=this;C.call(a);a.q3=null;a.vr=null;a.As=null;}
let JH=0;
let AQR=a=>{let b,c,d,e,f,g,h,i,$$je;b=AAR();a.q3=b;c=ALl(b);a.vr=c;b=new Sz;d=a.q3;e=new Bh;e.kF=0;e.ki=R(C,16);b.kw=e;b.k6=2147483647;b.zg=d;b.zs=c;a.As=b;b=Df.so;F$(b);a:{try{S(b,a);DZ(b);break a;}catch($$e){$$je=Bc($$e);d=$$je;}DZ(b);B(d);}if(a.q3.state!=='running'?1:0){b=new KH;b.Ap=a;AA_(a.q3,B8(b,"unlockFunction"));}else{if(!JH&&Df.pY>=2){if(BX===null){c=new C3;e=new Cu;E8(e);e.l4=BN(32);Gl(c,e);c.l7=EF();c.l6=G(32);c.l8=0;c.l9=Co;BX=c;}c=new K;c.ka=G(16);Cb(c,c.j_,Cp(A(159)));Cb(c,c.j_,Cp(A(81)));Cb(c,
c.j_,Cp(A(160)));b=new I;f=c.ka;g=f.data;h=c.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);B2(Bz(b));B2("\n");}else{b=new H;b.kc=1;b.kd=1;B(b);}}JH=1;}},
ARc=()=>{let a=new Wm();AQR(a);return a;},
AO9=a=>{a.vr.disconnect(a.q3.destination);},
AKz=a=>{a.vr.connect(a.q3.destination);},
AA_=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
AAR=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
ALl=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function OG(){DW.call(this);this.yO=null;}
let UU=F(BG);
function CJ(){Dw.call(this);this.kQ=null;}
let H=F(BA);
let AAZ=a=>{a.kc=1;a.kd=1;},
FF=()=>{let a=new H();AAZ(a);return a;},
RU=(a,b)=>{a.kc=1;a.kd=1;a.kf=b;},
No=a=>{let b=new H();RU(b,a);return b;};
let Fl=F(0);
let Qn=F(0);
let R3=F(0);
let RR=F(0);
let Tn=F(0);
let V_=F(0);
let Uk=F(0);
let P1=F(0);
let Lb=F(0);
let O3=F();
let ALY=(a,b)=>{b=a.S(b);BE();return b===null?null:b instanceof F6()&&b instanceof E0?(b[Bt]===true?b:b.kS):b;},
APz=(a,b,c)=>{a.eR(W(b),DH(c,"handleEvent"));},
AOO=(a,b,c)=>{a.eS(W(b),DH(c,"handleEvent"));},
ALK=(a,b,c,d)=>{a.eT(W(b),DH(c,"handleEvent"),d?1:0);},
ARI=(a,b)=>{return !!a.eU(b);},
ABd=a=>{return a.eV();},
Xu=(a,b,c,d)=>{a.eW(W(b),DH(c,"handleEvent"),d?1:0);};
let L1=F();
function J_(){let a=this;L1.call(a);a.tU=0;a.pH=null;a.xa=0.0;a.t9=0;a.sh=0;a.rQ=0;a.yv=0;}
let WA=null,Q1=null;
let K5=(a,b)=>{let c,d,e;a.rQ=(-1);if(b<0){c=new Bl;c.kc=1;c.kd=1;B(c);}a.tU=0;if(!b)b=1;d=R(I3,b);e=d.data;a.pH=d;b=e.length;a.sh=b;a.xa=0.75;a.t9=b*0.75|0;},
AVB=a=>{let b=new J_();K5(b,a);return b;},
DI=(a,b,c)=>{let d,e,f,g,h,i,j;F$(a);try{if(b!==null&&c!==null){a:{if(!b.l$){d=0;while(true){if(d>=b.kb.length)break a;b.l$=(31*b.l$|0)+b.kb.charCodeAt(d)|0;d=d+1|0;}}}e=b.l$&2147483647;f=a.pH.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.xB;if(!b.l$){i=0;while(true){if(i>=b.kb.length)break b;b.l$=(31*b.l$|0)+b.kb.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.l$&&h.nl.cO(b)?1:0)break;h=h.th;}if(h!==null){j=h.mZ;h.mZ=c;return j;}a.yv=a.yv+1|0;d=a.tU+1|0;a.tU=d;if(d>a.t9){AJo(a);g=e%a.pH.data.length|0;}if(g<a.sh)a.sh
=g;if(g>a.rQ)a.rQ=g;c:{j=new I3;j.nl=b;j.mZ=c;if(!b.l$){d=0;while(true){if(d>=b.kb.length)break c;b.l$=(31*b.l$|0)+b.kb.charCodeAt(d)|0;d=d+1|0;}}}j.xB=b.l$;f=a.pH.data;j.th=f[g];f[g]=j;return null;}b=new Ds;b.kc=1;b.kd=1;B(b);}finally{DZ(a);}},
AJo=a=>{let b,c,d,e,f,g,h,i,j;b=(a.pH.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=R(I3,b);e=d.data;f=a.rQ+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.sh)break;h=a.pH.data[f];while(h!==null){i=(h.nl.cU()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.th;h.th=e[i];e[i]=h;h=j;}}a.sh=g;a.rQ=c;a.pH=d;a.t9=e.length*a.xa|0;},
AXV=()=>{WA=new KE;Q1=new KD;};
function M9(){J_.call(this);this.Ah=null;}
let AFV=F();
let G2=F(BH);
let J5=null,JN=null,LW=null,SK=null,ANt=null;
let AJy=()=>{let b,c,d,e;b=new G2;b.kt=A(161);b.kn=0;J5=b;c=new G2;c.kt=A(162);c.kn=1;JN=c;d=new G2;d.kt=A(157);d.kn=2;LW=d;e=new G2;e.kt=A(163);e.kn=3;SK=e;ANt=V(G2,[b,c,d,e]);};
let DY=F();
let ACZ=F(DY);
let ACb=F(DY);
let AHH=F(DY);
let AKX=F(DY);
let AGc=F(DY);
function LH(){C.call(this);this.z6=null;}
let AG_=(a,b)=>{b.preventDefault();};
function LI(){C.call(this);this.AH=null;}
let ASH=(a,b)=>{b.preventDefault();};
function LG(){let a=this;C.call(a);a.wa=null;a.v3=null;a.wo=null;}
let AKd=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bh;e.kF=1;e.ki=R(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=W(g.name);i=Fa(h,46,h.kb.length-1|0);b=i==(-1)?A(68):Cj(h,i+1|0,h.kb.length);j=b.kb.toLowerCase();if(j!==b.kb)b=TU(j);if(AAl(b))j=FT;else{if(b===A(164))k=1;else if(!(A(164) instanceof I))k=0;else{j=A(164);k=b.kb!==j.kb?0:1;}b:{if(!k){if(b===A(165))k=1;else if(!(A(165) instanceof I))k=0;else{j=A(165);k=b.kb!==j.kb?0:1;}if(!k){if(b===A(166))k
=1;else if(!(A(166) instanceof I))k=0;else{j=A(166);k=b.kb!==j.kb?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?Fy:!AGt(b)?FH:F3;}l=new FileReader();b=new MS;b.tl=a;b.uo=j;b.vP=h;b.sx=e;b.vT=d;l.addEventListener("load",B8(b,"handleEvent"));if(j!==FH&&j!==Fy){if(j===FT)l.readAsDataURL(g);else if(j===F3)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AMR=(a,b)=>{AKd(a,b);};
function Sz(){let a=this;Dw.call(a);a.zg=null;a.zs=null;}
let U6=F(0);
function KH(){C.call(this);this.Ap=null;}
let ADi=a=>{let b,c,d,e,f,g;if(!JH&&Df.pY>=2){if(BX===null){b=new C3;VL(b,AQo(32),0);BX=b;}b=new K;b.ka=G(16);Eu(b,b.j_,A(159));Eu(b,b.j_,A(81));Eu(b,b.j_,A(160));c=new I;d=b.ka;e=d.data;f=b.j_;g=e.length;if(f>=0&&f<=(g-0|0)){c.kb=L(d.data,0,f);B2(Bz(c));B2("\n");}else B(FF());}JH=1;};
let ABX=F(DY);
function RL(){let a=this;C.call(a);a.lg=null;a.mw=0;a.uc=null;a.v$=0;a.qW=0;a.pf=0;a.mU=0;a.xe=null;}
let KM=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new KY;d.mc=R(C,10);e=QX(a,b);f=0;g=0;if(!b.kb.length){h=R(I,1);h.data[0]=A(68);return h;}a:{while(true){if(!Rh(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.oB;if(!j.o_){b=new BO;b.kc=1;b.kd=1;Bk(b);B(b);}if(0>=j.qp){b=new H;d=new K;Bu(d);d.ka=G(16);J(d,d.j_,0,10);e=new I;h=d.ka;k=h.data;f=d.j_;g=k.length;if(f>=0&&f<=(g-0|0)){e.kb=L(h.data,0,f);b.kc=1;b.kd=1;b.kf=e;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}j=Cj(b,g,j.md.data[0]);Hs(d,d.ln+1|0);h=d.mc.data;f=d.ln;d.ln=f+1|0;h[f]
=j;d.m5=d.m5+1|0;j=e.oB;if(!j.o_)break;if(0>=j.qp){b=new H;d=new K;Bu(d);d.ka=G(16);J(d,d.j_,0,10);e=new I;h=d.ka;k=h.data;f=d.j_;g=k.length;if(f>=0&&f<=(g-0|0)){e.kb=L(h.data,0,f);b.kc=1;b.kd=1;b.kf=e;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}g=j.md.data[1];f=i;}b=new BO;b.kc=1;b.kd=1;Bk(b);B(b);}b:{b=Cj(b,g,b.kb.length);Hs(d,d.ln+1|0);h=d.mc.data;i=d.ln;d.ln=i+1|0;h[i]=b;d.m5=d.m5+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.ln)break;if(d.mc.data[f].kb.length)break b;UH(d,f);}b=new H;b.kc
=1;b.kd=1;B(b);}}if(f<0)f=0;return ADw(d,R(I,f));},
I8=(b,c)=>{let d;if(b===null){b=new Ds;b.kc=1;b.kd=1;b.kf=A(167);B(b);}if(c&&(c|255)!=255){b=new Bl;b.kc=1;b.kd=1;b.kf=A(68);B(b);}O=1;d=new RL;d.uc=R(DG,10);d.qW=(-1);d.pf=(-1);d.mU=(-1);return AEi(d,b,c);},
AEi=(a,b,c)=>{let d,e,f;a.lg=ADS(b,c);a.mw=c;b=Ws(a,(-1),c,null);a.xe=b;d=a.lg;if(!d.lX&&!d.kA&&d.kx==d.mE&&!(d.ls===null?0:1)?1:0){if(a.v$)b.e5();return a;}b=new Cn;e=d.lR;f=d.np;b.kc=1;b.kd=1;b.kX=(-1);b.lW=A(68);b.lQ=e;b.kX=f;B(b);},
AR6=(a,b)=>{let c,d,e,f,g,h;c=new CN;d=a.mw;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bn;g.ku=Ba(64);c.ky=g;g=new Bn;g.ku=Ba(2);c.kB=g;c.s$=e;c.tW=f;while(true){h=a.lg;d=h.lX;if(!d&&!h.kA&&h.kx==h.mE&&!(h.ls===null?0:1)?1:0)break;f=!d&&!h.kA&&h.kx==h.mE&&!(h.ls===null?0:1)?1:0;if(!(!f&&!(h.ls===null?0:1)&&(d<0?0:1)?1:0))break;f=h.kA;if(f&&f!=(-536870788)&&f!=(-536870871))break;By(h);Db(c,h.o5);g=a.lg;if(g.lX!=(-536870788))continue;By(g);}g=Mi(a,c);g.e9(b);return g;},
Ws=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new KY;e.mc=R(C,10);f=a.mw;g=0;if(c!=f)a.mw=c;a:{switch(b){case -1073741784:h=new Sh;i=a.mU+1|0;a.mU=i;Ef();c=O;O=c+1|0;d=new Be;d.ka=G(20);h.kv=(J(d,d.j_,c,10)).T();h.mj=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QE;i=a.mU+1|0;a.mU=i;Ef();c=O;O=c+1|0;d=new Be;d.ka=G(20);h.kv=(J(d,d.j_,c,10)).T();h.mj=i;break a;case -33554392:h=new S0;i=a.mU+1|0;a.mU=i;Ef();c=O;O=c+1|0;d=new Be;d.ka=G(20);h.kv=(J(d,d.j_,c,10)).T();h.mj=i;break a;default:i
=a.qW+1|0;a.qW=i;if(d!==null){h=new DG;Ef();c=O;O=c+1|0;d=new Be;d.ka=G(20);h.kv=(J(d,d.j_,c,10)).T();h.mj=i;}else{h=new GV;Ef();j=O;O=j+1|0;d=new Be;d.ka=G(20);h.kv=(J(d,d.j_,j,10)).T();h.mj=0;g=1;}c=a.qW;if(c<=(-1))break a;if(c>=10)break a;a.uc.data[c]=h;break a;}h=new Wn;Ef();j=O;O=j+1|0;d=new Be;d.ka=G(20);h.kv=(J(d,d.j_,j,10)).T();h.mj=(-1);}while(true){k=a.lg;l=k.lX;j=!l&&!k.kA&&k.kx==k.mE&&!(k.ls===null?0:1)?1:0;j=!j&&!(k.ls===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.kA==(-536870788))k=AR6(a,h);else if(l==(-536870788))
{k=new Ft;j=O;O=j+1|0;d=new Be;d.ka=G(20);k.kv=(J(d,d.j_,j,10)).T();k.km=h;k.k4=1;k.lI=1;k.k4=0;By(a.lg);}else{k=Qb(a,h);d=a.lg;if(d.lX==(-536870788))By(d);}if(k!==null){Hs(e,e.ln+1|0);m=e.mc.data;l=e.ln;e.ln=l+1|0;m[l]=k;e.m5=e.m5+1|0;}k=a.lg;j=k.lX;if(!j&&!k.kA&&k.kx==k.mE&&!(k.ls===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.o5==(-536870788)){k=new Ft;c=O;O=c+1|0;d=new Be;d.ka=G(20);k.kv=(J(d,d.j_,c,10)).T();k.km=h;k.k4=1;k.lI=1;k.k4=0;Hs(e,e.ln+1|0);m=e.mc.data;j=e.ln;e.ln=j+1|0;m[j]=k;e.m5=e.m5+
1|0;}if(a.mw!=f&&!g){a.mw=f;k=a.lg;k.lM=f;k.kA=k.lX;k.ox=k.ls;j=k.np;k.kx=j+1|0;k.rI=j;By(k);}switch(b){case -1073741784:break;case -536870872:d=new Os;b=O;O=b+1|0;k=new Be;Bu(k);k.ka=G(20);d.kv=(J(k,k.j_,b,10)).T();d.l0=e;d.mX=h;d.lL=h.mj;return d;case -268435416:d=new Vm;b=O;O=b+1|0;k=new Be;Bu(k);k.ka=G(20);d.kv=(J(k,k.j_,b,10)).T();d.l0=e;d.mX=h;d.lL=h.mj;return d;case -134217688:d=new RP;b=O;O=b+1|0;k=new Be;Bu(k);k.ka=G(20);d.kv=(J(k,k.j_,b,10)).T();d.l0=e;d.mX=h;d.lL=h.mj;return d;case -67108824:k=new Tl;b
=O;O=b+1|0;d=new Be;Bu(d);d.ka=G(20);k.kv=(J(d,d.j_,b,10)).T();k.l0=e;k.mX=h;k.lL=h.mj;return k;case -33554392:d=new EG;b=O;O=b+1|0;k=new Be;k.ka=G(20);d.kv=(J(k,k.j_,b,10)).T();d.l0=e;d.mX=h;d.lL=h.mj;return d;default:c=e.ln;switch(c){case 0:d=new Ft;b=O;O=b+1|0;e=new Be;e.ka=G(20);d.kv=(J(e,e.j_,b,10)).T();d.km=h;d.k4=1;d.lI=1;d.k4=0;return d;case 1:d=new GG;if(0>=c){d=new H;d.kc=1;d.kd=1;B(d);}e=e.mc.data[0];b=O;O=b+1|0;k=new Be;k.ka=G(20);d.kv=(J(k,k.j_,b,10)).T();d.nh=e;d.mX=h;d.lL=h.mj;return d;default:}d
=new Cr;b=O;O=b+1|0;k=new Be;k.ka=G(20);d.kv=(J(k,k.j_,b,10)).T();d.l0=e;d.mX=h;d.lL=h.mj;return d;}k=new Kg;j=O;O=j+1|0;d=new Be;d.ka=G(20);k.kv=(J(d,d.j_,j,10)).T();k.l0=e;k.mX=h;k.lL=h.mj;return k;},
AOn=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Pu;b.ka=G(16);while(true){c=a.lg;d=c.lX;if(!d&&!c.kA&&c.kx==c.mE&&!(c.ls===null?0:1)?1:0)break;e=!d&&!c.kA&&c.kx==c.mE&&!(c.ls===null?0:1)?1:0;if(!(!e&&!(c.ls===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.ox;d=f===null?0:1;if(!(!d&&!c.kA)){d=f===null?0:1;if(!(!d&&(c.kA<0?0:1))){g=c.kA;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}By(c);e=c.o5;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.j_;Bj(b,e,e+1|0);b.ka.data[e]=d;}else{h=(Fj(e)).data;d=0;e=h.length;g=b.j_;Bj(b,g,g+e|0);i=e+d|0;while(d<i){j=b.ka.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.mw;if(!((e&2)!=2?0:1))return AGS(b);if(!((e&64)!=64?0:1)){c=new OV;d=O;O=d+1|0;f=new Be;f.ka=G(20);c.kv=(J(f,f.j_,d,10)).T();c.k4=1;f=new I;h=b.ka;j=h.data;e=b.j_;g=j.length;if(e>=0&&e<=(g-0|0)){f.kb=L(h.data,0,e);c.qI=f;c.k4=b.j_;return c;}b=new H;b.kc=1;b.kd=1;B(b);}c=new Om;d=O;O=d+1|0;f=new Be;f.ka=G(20);c.kv=(J(f,f.j_,d,10)).T();c.k4
=1;f=new K;f.ka=G(16);e=0;while(true){d=BW(e,b.j_);if(d>=0){b=new I;h=f.ka;j=h.data;g=f.j_;d=j.length;if(g>=0&&g<=(d-0|0)){b.kb=L(h.data,0,g);c.rR=b;c.k4=f.j_;return c;}b=new H;b.kc=1;b.kd=1;B(b);}if(e<0)break;if(d>=0)break;d=b.ka.data[e];if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}d=CD(B0,d)&65535;if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}i=CD(B1,d)&65535;g=f.j_;Bj(f,g,g+1|0);f.ka.data[g]=i;e=e+1|0;}b=new H;b.kc=1;b.kd=1;B(b);},
AOH=a=>{let b,c,d,e,f,g,h,i,j;b=Ba(4);c=(-1);d=(-1);e=a.lg;f=e.lX;if(!(!f&&!e.kA&&e.kx==e.mE&&!(e.ls===null?0:1)?1:0)){g=!f&&!e.kA&&e.kx==e.mE&&!(e.ls===null?0:1)?1:0;if(!g&&!(e.ls===null?0:1)&&(f<0?0:1)?1:0){h=b.data;By(e);c=e.o5;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.lg;i=e.lX;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;By(e);e=a.lg;i=e.lX;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;By(e);e=new IU;c=O;O=c+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,c,10)).T();e.oW=h;e.r3=3;return e;}e=new IU;c
=O;O=c+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,c,10)).T();e.oW=h;e.r3=2;return e;}i=a.mw;if(!((i&2)!=2?0:1)){e=new Er;i=b[0];c=O;O=c+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,c,10)).T();e.k4=1;e.mN=i;return e;}if(!((i&64)!=64?0:1)){e=new Ks;i=b[0];c=O;O=c+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,c,10)).T();e.k4=1;e.tA=i;e.t1=Gt(i);return e;}e=new NK;i=b[0];c=O;O=c+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,c,10)).T();e.k4=1;if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}i=CD(B0,i)&65535;if
(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}e.sm=CD(B1,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.lg;g=e.lX;if(!g&&!e.kA&&e.kx==e.mE&&!(e.ls===null?0:1)?1:0)break;i=!g&&!e.kA&&e.kx==e.mE&&!(e.ls===null?0:1)?1:0;if(!(!i&&!(e.ls===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;By(e);h[c]=e.o5;c=i;}if(c==1){i=h[0];if(!(Z9.es(i)==AO0?0:1))return Wk(a,h[0]);}d=a.mw;if(!((d&2)!=2?0:1)){e=new FL;i=O;O=i+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,i,10)).T();e.pR=1;e.pB=b;e.px=c;return e;}if
((d&64)!=64?0:1){e=new We;i=O;O=i+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,i,10)).T();e.pR=1;e.pB=b;e.px=c;return e;}e=new TK;i=O;O=i+1|0;j=new Be;j.ka=G(20);e.kv=(J(j,j.j_,i,10)).T();e.pR=1;e.pB=b;e.px=c;return e;},
Qb=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lg;d=c.lX;e=!d&&!c.kA&&c.kx==c.mE&&!(c.ls===null?0:1)?1:0;e=!e&&!(c.ls===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.ox===null?0:1)&&(c.kA<0?0:1)){if(!((a.mw&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AOn(a):NP(a,b,Wc(a,b));}else{f=AOH(a);g=a.lg;e=g.lX;if(!(!e&&!g.kA&&g.kx==g.mE&&!(g.ls===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof GV))&&e!=(-536870788)){h=!e&&!g.kA&&g.kx==g.mE&&!(g.ls===null?0:1)?1:0;if(!(!h&&!(g.ls===null?0:1)&&(e<0?0:1)?1:0))f
=NP(a,b,f);}}}else if(d!=(-536870871))f=NP(a,b,Wc(a,b));else{if(b instanceof GV){b=new Cn;g=c.lR;h=c.np;b.kc=1;b.kd=1;b.kX=(-1);b.lW=A(68);b.lQ=g;b.kX=h;B(b);}f=new Ft;e=O;O=e+1|0;c=new Be;c.ka=G(20);f.kv=(J(c,c.j_,e,10)).T();f.km=b;f.k4=1;f.lI=1;f.k4=0;}c=a.lg;d=c.lX;e=!d&&!c.kA&&c.kx==c.mE&&!(c.ls===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof GV))&&d!=(-536870788)){g=Qb(a,b);if(f instanceof DP&&!(f instanceof FE)&&!(f instanceof DS)&&!(f instanceof FB)){b=f;if(!g.fn(b.kU)){f=new Vz;c=b.kU;i=b.km;j
=b.lI;e=O;O=e+1|0;b=new Be;b.ka=G(20);f.kv=(J(b,b.j_,e,10)).T();f.km=i;f.kU=c;f.lI=j;f.lq=c;c.e9(f);}}if((g.fo()&65535)!=43)f.e9(g);else f.e9(g.kU);}else{if(f===null)return null;f.e9(b);}if((f.fo()&65535)!=43)return f;return f.kU;},
NP=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lg;e=d.lX;if(c!==null&&!(c instanceof CF)){switch(e){case -2147483606:By(d);d=new WK;f=O;O=f+1|0;g=new Be;g.ka=G(20);d.kv=(J(g,g.j_,f,10)).T();d.km=b;d.kU=c;d.lI=e;Ef();c.e9(Ik);return d;case -2147483605:By(d);d=new QA;h=O;O=h+1|0;g=new Be;g.ka=G(20);d.kv=(J(g,g.j_,h,10)).T();d.km=b;d.kU=c;d.lI=(-2147483606);Ef();c.e9(Ik);return d;case -2147483585:By(d);d=new Qk;h=O;O=h+1|0;g=new Be;Bu(g);g.ka=G(20);d.kv=(J(g,g.j_,h,10)).T();d.km=b;d.kU=c;d.lI=(-536870849);Ef();c.e9(Ik);return d;case -2147483525:g
=new OS;i=d.ls;By(d);d=i;f=a.pf+1|0;a.pf=f;j=O;O=j+1|0;i=new Be;Bu(i);i.ka=G(20);g.kv=(J(i,i.j_,j,10)).T();g.km=b;g.kU=c;g.lI=(-536870849);g.ou=d;g.nz=f;Ef();c.e9(Ik);return g;case -1073741782:case -1073741781:By(d);d=new R$;f=O;O=f+1|0;g=new Be;g.ka=G(20);d.kv=(J(g,g.j_,f,10)).T();d.km=b;d.kU=c;d.lI=e;c.e9(d);return d;case -1073741761:By(d);d=new Ri;h=O;O=h+1|0;g=new Be;Bu(g);g.ka=G(20);d.kv=(J(g,g.j_,h,10)).T();d.km=b;d.kU=c;d.lI=(-536870849);c.e9(b);return d;case -1073741701:g=new Up;i=d.ls;By(d);d=i;h=a.pf
+1|0;a.pf=h;j=O;O=j+1|0;i=new Be;Bu(i);i.ka=G(20);g.kv=(J(i,i.j_,j,10)).T();g.km=b;g.kU=c;g.lI=(-536870849);g.ou=d;g.nz=h;c.e9(g);return g;case -536870870:case -536870869:By(d);if(c.fo()!=(-2147483602)){d=new DS;f=O;O=f+1|0;g=new Be;g.ka=G(20);d.kv=(J(g,g.j_,f,10)).T();d.km=b;d.kU=c;d.lI=e;}else{h=a.mw;if((h&32)!=32?0:1){d=new R_;f=O;O=f+1|0;g=new Be;g.ka=G(20);d.kv=(J(g,g.j_,f,10)).T();d.km=b;d.kU=c;d.lI=e;}else{d=new PE;if(!(h&1)){g=Gu;if(g===null){g=new JU;Gu=g;}}else{g=GI;if(g===null){g=new JT;GI=g;}}f=
O;O=f+1|0;i=new Be;i.ka=G(20);d.kv=(J(i,i.j_,f,10)).T();d.km=b;d.kU=c;d.lI=e;d.sQ=g;}}c.e9(d);return d;case -536870849:By(d);d=new Hg;h=O;O=h+1|0;g=new Be;g.ka=G(20);d.kv=(J(g,g.j_,h,10)).T();d.km=b;d.kU=c;d.lI=(-536870849);c.e9(b);return d;case -536870789:g=new Gw;i=d.ls;By(d);d=i;h=a.pf+1|0;a.pf=h;j=O;O=j+1|0;i=new Be;i.ka=G(20);g.kv=(J(i,i.j_,j,10)).T();g.km=b;g.kU=c;g.lI=(-536870849);g.ou=d;g.nz=h;c.e9(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:By(d);d
=new WM;f=O;O=f+1|0;c=new Be;c.ka=G(20);d.kv=(J(c,c.j_,f,10)).T();d.km=b;d.kU=i;d.lI=e;d.lq=i;i.km=d;return d;case -2147483585:By(d);c=new Vu;h=O;O=h+1|0;d=new Be;Bu(d);d.ka=G(20);c.kv=(J(d,d.j_,h,10)).T();c.km=b;c.kU=i;c.lI=(-2147483585);c.lq=i;return c;case -2147483525:c=new Qa;g=d.ls;By(d);d=g;h=O;O=h+1|0;g=new Be;Bu(g);g.ka=G(20);c.kv=(J(g,g.j_,h,10)).T();c.km=b;c.kU=i;c.lI=(-2147483525);c.lq=i;c.p1=d;return c;case -1073741782:case -1073741781:By(d);d=new Ra;f=O;O=f+1|0;c=new Be;c.ka=G(20);d.kv=(J(c,c.j_,
f,10)).T();d.km=b;d.kU=i;d.lI=e;d.lq=i;i.km=d;return d;case -1073741761:By(d);c=new TO;h=O;O=h+1|0;d=new Be;Bu(d);d.ka=G(20);c.kv=(J(d,d.j_,h,10)).T();c.km=b;c.kU=i;c.lI=(-1073741761);c.lq=i;return c;case -1073741701:c=new RQ;g=d.ls;By(d);d=g;h=O;O=h+1|0;g=new Be;Bu(g);g.ka=G(20);c.kv=(J(g,g.j_,h,10)).T();c.km=b;c.kU=i;c.lI=(-1073741701);c.lq=i;c.p1=d;return c;case -536870870:case -536870869:By(d);d=new DP;f=O;O=f+1|0;c=new Be;c.ka=G(20);d.kv=(J(c,c.j_,f,10)).T();d.km=b;d.kU=i;d.lI=e;d.lq=i;i.km=d;return d;case -536870849:By(d);c
=new FB;h=O;O=h+1|0;d=new Be;d.ka=G(20);c.kv=(J(d,d.j_,h,10)).T();c.km=b;c.kU=i;c.lI=(-536870849);c.lq=i;return c;case -536870789:c=new FE;g=d.ls;By(d);d=g;h=O;O=h+1|0;g=new Be;g.ka=G(20);c.kv=(J(g,g.j_,h,10)).T();c.km=b;c.kU=i;c.lI=(-536870789);c.lq=i;c.p1=d;return c;default:}return c;},
Wc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof GV;while(true){a:{e=a.lg;f=e.lX;if((f&(-2147418113))==(-2147483608)){By(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.mw=g;else{if(f!=(-1073741784))g=a.mw;c=Ws(a,f,g,b);e=a.lg;if(e.lX!=(-536870871)){b=new Cn;h=e.lR;i=e.np;b.kc=1;b.kd=1;b.kX=(-1);b.lW=A(68);b.lQ=h;b.kX=i;B(b);}By(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.qW<j){c=new Cn;h=e.lR;i=e.np;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=h;c.kX=i;B(c);}By(e);g=a.mU+1|0;a.mU=g;i=a.mw;if(!((i&2)!=2?0:1)){c=new VD;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.ro=j;c.p8=g;}else if(!((i&64)!=64?0:1)){c=new G8;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.ro=j;c.p8=g;}else{c=new RJ;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.ro=j;c.p8=g;}a.uc.data[j].t_=1;a.v$=1;break a;case -2147483583:break;case -2147483582:By(e);c
=new Lo;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.vt=0;break a;case -2147483577:By(e);c=new Py;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();break a;case -2147483558:By(e);c=new NI;j=a.mU+1|0;a.mU=j;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.qC=j;break a;case -2147483550:By(e);c=new Lo;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.vt=1;break a;case -2147483526:By(e);c=new VJ;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();break a;case -536870876:break b;case -536870866:By(e);i
=a.mw;if((i&32)!=32?0:1){c=new VF;i=O;O=i+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,i,10)).T();break a;}c=new P6;if(!(i&1)){h=Gu;if(h===null){h=new JU;Gu=h;}}else{h=GI;if(h===null){h=new JT;GI=h;}}k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.uJ=h;break a;case -536870821:By(e);i=0;c=a.lg;if(c.lX==(-536870818)){i=1;By(c);}c=Mi(a,Hu(a,i));c.e9(b);h=a.lg;k=h.lX;if(k!=(-536870819)){b=new Cn;e=h.lR;i=h.np;b.kc=1;b.kd=1;b.kX=(-1);b.lW=A(68);b.lQ=e;b.kX=i;B(b);}h.oA=1;h.kA=k;h.ox=h.ls;h.kx=h.rI;h.rI=h.np;By(h);By(a.lg);break a;case -536870818:break c;case 0:c
=e.ls;h=c;if(h!==null)c=Mi(a,h);else{if(!f&&!e.kA&&e.kx==e.mE&&!(c===null?0:1)?1:0){c=new Ft;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.km=b;c.k4=1;c.lI=1;c.k4=0;break a;}c=new Er;j=f&65535;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.k4=1;c.mN=j;}By(a.lg);break a;default:if(f>=0&&!(e.ls===null?0:1)){c=Wk(a,f);By(a.lg);break a;}if(f==(-536870788)){c=new Ft;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.km=b;c.k4=1;c.lI=1;c.k4=0;break a;}if(f!=(-536870871)){b=new Cn;c
=e.ls;if(c===null?0:1)c=c.T();else{k=f&65535;c=new I;l=G(1);m=l.data;m[0]=k;c.kb=L(l.data,0,m.length);}e=a.lg;h=e.lR;i=e.np;b.kc=1;b.kd=1;b.kX=(-1);b.lW=c;b.lQ=h;b.kX=i;B(b);}if(d){b=new Cn;h=e.lR;i=e.np;b.kc=1;b.kd=1;b.kX=(-1);b.lW=A(68);b.lQ=h;b.kX=i;B(b);}c=new Ft;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.km=b;c.k4=1;c.lI=1;c.k4=0;break a;}By(e);c=new L0;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();break a;}By(e);a.mU=a.mU+1|0;i=a.mw;if(!((i&8)!=8?0:1)){c=new L0;k=O;O=k+1|0;e
=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();break a;}c=new OZ;if(!(i&1)){h=Gu;if(h===null){h=new JU;Gu=h;}}else{h=GI;if(h===null){h=new JT;GI=h;}}k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.w9=h;break a;}By(e);j=a.mU+1|0;a.mU=j;i=a.mw;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new S3;i=O;O=i+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,i,10)).T();c.ta=j;}else{c=new Op;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.q9=j;}}else if((i&1)!=1?0:1){c=new Vv;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,
e.j_,k,10)).T();c.s2=j;}else{c=new NI;k=O;O=k+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,k,10)).T();c.qC=j;}}}if(f!=(-16777176))break;}return c;},
Hu=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new CN;d=a.mw;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bn;f.ku=Ba(64);c.ky=f;f=new Bn;f.ku=Ba(2);c.kB=f;c.s$=e;c.tW=d;E4(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.lg;b=k.lX;if(!b&&!k.kA&&k.kx==k.mE&&!(k.ls===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)Db(c,g);f=a.lg;By(f);g=f.o5;f=a.lg;if(f.lX!=(-536870874)){g=38;break d;}if(f.kA==(-536870821)){By(f);h=1;g=(-1);break d;}By(f);if(j){c=Hu(a,0);break d;}if(a.lg.lX
==(-536870819))break d;VQ(c,Hu(a,0));break d;case -536870867:if(!j){b=k.kA;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){By(k);k=a.lg;d=k.lX;if(k.ls===null?0:1)break c;if(d<0){b=k.kA;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AFW(d))break e;d=d&65535;break e;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){break b;}else{throw $$e;}}}try{BU(c,g,d);}catch($$e){$$je=Bc($$e);if($$je instanceof BG){break b;}else{throw $$e;}}By(a.lg);g=(-1);break d;}}if(g>=0)Db(c,g);g=45;By(a.lg);break d;case -536870821:if
(g>=0){Db(c,g);g=(-1);}By(a.lg);e=0;f=a.lg;if(f.lX==(-536870818)){By(f);e=1;}if(!h)Xi(c,Hu(a,e));else VQ(c,Hu(a,e));h=0;By(a.lg);break d;case -536870819:break;case -536870818:if(g>=0)Db(c,g);g=94;By(a.lg);break d;case 0:if(g>=0)Db(c,g);f=a.lg.ls;if(f===null)g=0;else{ATW(c,f);g=(-1);}By(a.lg);break d;default:if(g>=0)Db(c,g);f=a.lg;By(f);g=f.o5;break d;}if(g>=0)Db(c,g);g=93;By(a.lg);}j=0;}c=new Cn;l=k.lR;g=k.np;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=l;c.kX=g;B(c);}c=new Cn;k=a.lg;l=k.lR;g=k.np;c.kc=1;c.kd=1;c.kX
=(-1);c.lW=A(68);c.lQ=l;c.kX=g;B(c);}if(!i){if(g>=0)Db(c,g);return c;}c=new Cn;l=k.lR;b=k.np-1|0;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=l;c.kX=b;B(c);},
Wk=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.mw;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Ks;b=b&65535;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.k4=1;e.tA=b;e.t1=Gt(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Ok;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.k4=1;e.k4=2;if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b);if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null
?W(BL.value):null)));}e.uE=CD(B1,b);return e;}if(b<=57343&&b>=56320?1:0){e=new H3;b=b&65535;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.pg=b;return e;}if(b<=56319&&b>=55296?1:0){e=new H9;b=b&65535;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.o3=b;return e;}e=new NK;b=b&65535;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.k4=1;if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b)&65535;if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value
!==null?W(BL.value):null)));}e.sm=CD(B1,b)&65535;return e;}}if(c){e=new EL;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.k4=1;e.k4=2;e.qk=b;h=(Fj(b)).data;e.qa=h[0];e.pJ=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new H3;b=b&65535;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.pg=b;return e;}if(b<=56319&&b>=55296?1:0){e=new H9;b=b&65535;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.o3=b;return e;}e=new Er;b=b&65535;f=O;O=f+1|0;g=new Be;g.ka=G(20);e.kv=(J(g,g.j_,f,10)).T();e.k4
=1;e.mN=b;return e;},
Mi=(a,b)=>{let c,d,e,f,g,h;if(!AJI(b)){if(b.lx){if(!b.fx()){c=new D7;d=O;O=d+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,d,10)).T();c.m0=b.fy();c.qJ=b.kT;return c;}c=new Kv;d=O;O=d+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,d,10)).T();c.m0=b.fy();c.qJ=b.kT;return c;}if(b.fx()){c=new K6;d=O;O=d+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,d,10)).T();c.k4=1;c.sW=b.fy();c.uy=b.kT;return c;}c=new Ev;d=O;O=d+1|0;e=new Be;e.ka=G(20);c.kv=(J(e,e.j_,d,10)).T();c.k4=1;c.nI=b.fy();c.u4=b.kT;return c;}c=Zo(b);e=new Oy;d=O;O=d+1|0;f=
new Be;f.ka=G(20);e.kv=(J(f,f.j_,d,10)).T();e.sR=c;e.tN=c.kT;if(b.lx){if(!b.fx()){c=new HI;f=new D7;b=IS(b);d=O;O=d+1|0;g=new Be;g.ka=G(20);f.kv=(J(g,g.j_,d,10)).T();f.m0=b;f.qJ=b.kT;d=O;O=d+1|0;b=new Be;b.ka=G(20);c.kv=(J(b,b.j_,d,10)).T();c.p4=f;c.pU=e;return c;}c=new HI;f=new Kv;g=IS(b);h=O;O=h+1|0;b=new Be;b.ka=G(20);f.kv=(J(b,b.j_,h,10)).T();f.m0=g;f.qJ=g.kT;d=O;O=d+1|0;b=new Be;b.ka=G(20);c.kv=(J(b,b.j_,d,10)).T();c.p4=f;c.pU=e;return c;}if(b.fx()){c=new HI;f=new K6;b=IS(b);d=O;O=d+1|0;g=new Be;g.ka=G(20);f.kv
=(J(g,g.j_,d,10)).T();f.k4=1;f.sW=b;f.uy=b.kT;d=O;O=d+1|0;b=new Be;b.ka=G(20);c.kv=(J(b,b.j_,d,10)).T();c.p4=f;c.pU=e;return c;}c=new HI;f=new Ev;b=IS(b);d=O;O=d+1|0;g=new Be;g.ka=G(20);f.kv=(J(g,g.j_,d,10)).T();f.k4=1;f.nI=b;f.u4=b.kT;d=O;O=d+1|0;b=new Be;b.ka=G(20);c.kv=(J(b,b.j_,d,10)).T();c.p4=f;c.pU=e;return c;},
Gt=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let NE=F(0);
function SQ(){let a=this;C.call(a);a.zk=null;a.x7=null;a.s1=null;a.oB=null;a.sO=0;a.un=0;}
let Ot=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.s1.kb.length;if(b>=0&&b<=c){d=a.oB;d.o_=0;d.r7=2;e=d.md.data;f=0;g=e.length;if(f>g){d=new Bl;U(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.lJ.data;f=0;g=e.length;if(f>g){d=new Bl;U(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.oK=d.nb;d.r7=1;d.oK=b;c=d.r_;if(c<0)c=b;d.r_=c;b=a.x7.fB(b,a.s1,d);if(b==(-1))a.oB.m3=1;if(b>=0){d=a.oB;b=d.o_;if(b){e=d.md.data;if(e[0]==(-1)){f=d.oK;e[0]=f;e[1]=f;}if(!b){d=new BO;d.kc=1;d.kd=1;Bk(d);B(d);}if(0<d.qp){d.r_=e[1];return 1;}d=new H;i
=new K;Bu(i);i.ka=G(16);J(i,i.j_,0,10);j=new I;e=i.ka;k=e.data;c=i.j_;f=k.length;if(c>=0&&c<=(f-0|0)){j.kb=L(e.data,0,c);d.kc=1;d.kd=1;d.kf=j;B(d);}d=new H;d.kc=1;d.kd=1;B(d);}}a.oB.oK=(-1);return 0;}d=new H;i=new K;i.ka=G(16);J(i,i.j_,b,10);j=new I;e=i.ka;k=e.data;c=i.j_;f=k.length;if(c>=0&&c<=(f-0|0)){j.kb=L(e.data,0,c);d.kc=1;d.kd=1;d.kf=j;B(d);}d=new H;d.kc=1;d.kd=1;B(d);},
Rh=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.s1.kb.length;c=a.oB;if(!c.s8)b=a.un;if(c.oK>=0&&c.r7==1){d=c.o_;if(!d){c=new BO;c.kc=1;c.kd=1;B(c);}e=BW(0,c.qp);if(e>=0){c=new H;f=new K;f.ka=G(16);J(f,f.j_,0,10);g=new I;h=f.ka;i=h.data;b=f.j_;j=i.length;if(b>=0&&b<=(j-0|0)){g.kb=L(h.data,0,b);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}h=c.md.data;k=h[1];c.oK=k;if(!d){c=new BO;c.kc=1;c.kd=1;B(c);}if(e>=0){c=new H;f=new K;f.ka=G(16);J(f,f.j_,0,10);g=new I;h=f.ka;i=h.data;b=f.j_;j=i.length;if(b>=0&&b<=(j-0|0))
{g.kb=L(h.data,0,b);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}j=h[1];if(!d){c=new BO;c.kc=1;c.kd=1;B(c);}if(e<0){if(j==h[0])c.oK=k+1|0;l=c.oK;return l<=b&&Ot(a,l)?1:0;}c=new H;f=new K;f.ka=G(16);J(f,f.j_,0,10);g=new I;h=f.ka;i=h.data;b=f.j_;j=i.length;if(b>=0&&b<=(j-0|0)){g.kb=L(h.data,0,b);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}return Ot(a,a.sO);},
W1=(a,b,c)=>{let d,e;a.sO=(-1);a.un=(-1);a.zk=b;a.x7=b.xe;a.s1=c;a.sO=0;d=c.kb.length;a.un=d;e=AQy(c,a.sO,d,b.qW,b.pf+1|0,b.mU+1|0);a.oB=e;e.pO=1;},
QX=(a,b)=>{let c=new SQ();W1(c,a,b);return c;};
let AAp=F();
let CS=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=PD(AO_(b,c));}catch($$e){$$je=Bc($$e);if($$je instanceof K0){d=$$je;break a;}else if($$je instanceof HJ){d=$$je;break b;}else{throw $$e;}}return d;}e=new B$;if(b.kl===null)b.kl=W(b.ks.$meta.name);f=b.kl;b=new K;b.ka=G(16);E(b,b.j_,A(168));g=b.j_;if(f===null)f=A(2);E(b,g,f);h=new I;c=b.ka;i=c.data;j=b.j_;k=i.length;if(j>=0&&j<=(k-0|0)){h.kb=L(c.data,0,j);e.kc=1;e.kd=1;e.kf=h;e.lG=d;B(e);}b=new H;b.kc=1;b.kd=1;B(b);}e=new B$;if(b.kl
===null)b.kl=W(b.ks.$meta.name);f=b.kl;b=new K;b.ka=G(16);E(b,b.j_,A(169));g=b.j_;if(f===null)f=A(2);E(b,g,f);E(b,b.j_,A(170));h=new I;c=b.ka;i=c.data;j=b.j_;k=i.length;if(j>=0&&j<=(k-0|0)){h.kb=L(c.data,0,j);e.kc=1;e.kd=1;e.kf=h;e.lG=d;B(e);}b=new H;b.kc=1;b.kd=1;B(b);}c=(ASd(b)).data;if(c.length<=0)b=null;else{b=new K9;b.lV=c[0];}return b;},
CP=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=PD(APb(b,c));}catch($$e){$$je=Bc($$e);if($$je instanceof K0){d=$$je;break a;}else if($$je instanceof HJ){d=$$je;e=new B$;if(b.kl===null)b.kl=W(b.ks.$meta.name);f=b.kl;b=new K;b.ka=G(16);E(b,b.j_,A(168));g=b.j_;if(f===null)f=A(2);E(b,g,f);h=new I;c=b.ka;i=c.data;j=b.j_;k=i.length;if(j>=0&&j<=(k-0|0)){h.kb=L(c.data,0,j);e.kc=1;e.kd=1;e.kf=h;e.lG=d;B(e);}b=new H;b.kc=1;b.kd=1;B(b);}else{throw $$e;}}return d;}e=new B$;if(b.kl===null)b.kl=W(b.ks.$meta.name);f=b.kl;b=new K;b.ka
=G(16);E(b,b.j_,A(171));g=b.j_;if(f===null)f=A(2);E(b,g,f);h=new I;c=b.ka;i=c.data;k=b.j_;j=i.length;if(k>=0&&k<=(j-0|0)){h.kb=L(c.data,0,k);e.kc=1;e.kd=1;e.kf=h;e.lG=d;B(e);}b=new H;b.kc=1;b.kd=1;B(b);};
function K9(){C.call(this);this.lV=null;}
let AQ9=(a,b)=>{a.lV=b;},
PD=a=>{let b=new K9();AQ9(b,a);return b;},
CU=(a,b)=>{return;},
C6=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=R(C,0);a:{b:{c:{try{c=APp(a.lV,b);}catch($$e){$$je=Bc($$e);if($$je instanceof Bl){c=$$je;break c;}else if($$je instanceof MQ){c=$$je;break a;}else if($$je instanceof Kr){c=$$je;break b;}else if($$je instanceof OY){c=$$je;d=new B$;e=a.lV.lU;if(e.kl===null)e.kl=W(e.ks.$meta.name);e=e.kl;f=new K;f.ka=G(16);E(f,f.j_,A(172));g=f.j_;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ka;i=b.data;j=f.j_;k=i.length;if(j>=0&&j<=(k-0|0)){h.kb=L(b.data,0,j);d.kc=1;d.kd=1;d.kf=h;d.lG
=c;B(d);}c=new H;c.kc=1;c.kd=1;B(c);}else{throw $$e;}}return c;}d=new B$;e=a.lV.lU;if(e.kl===null)e.kl=W(e.ks.$meta.name);e=e.kl;f=new K;f.ka=G(16);E(f,f.j_,A(173));g=f.j_;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ka;i=b.data;j=f.j_;k=i.length;if(j>=0&&j<=(k-0|0)){h.kb=L(b.data,0,j);d.kc=1;d.kd=1;d.kf=h;d.lG=c;B(d);}c=new H;c.kc=1;c.kd=1;B(c);}d=new B$;e=a.lV.lU;if(e.kl===null)e.kl=W(e.ks.$meta.name);e=e.kl;f=new K;f.ka=G(16);E(f,f.j_,A(174));g=f.j_;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ka;i=b.data;j=f.j_;k
=i.length;if(j>=0&&j<=(k-0|0)){h.kb=L(b.data,0,j);d.kc=1;d.kd=1;d.kf=h;d.lG=c;B(d);}c=new H;c.kc=1;c.kd=1;B(c);}d=new B$;e=a.lV.lU;if(e.kl===null)e.kl=W(e.ks.$meta.name);e=e.kl;f=new K;f.ka=G(16);E(f,f.j_,A(174));g=f.j_;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ka;i=b.data;j=f.j_;k=i.length;if(j>=0&&j<=(k-0|0)){h.kb=L(b.data,0,j);d.kc=1;d.kd=1;d.kf=h;d.lG=c;B(d);}c=new H;c.kc=1;c.kd=1;B(c);};
let B$=F(BG);
function E0(){C.call(this);this.kS=null;}
let AMS=null,M_=null,HB=null,IB=null,Qu=null,V2=null,P2=null;
let BE=()=>{BE=BR(E0);ABs();};
let Cd=b=>{let c,d,e,f,g,h,i;BE();if(b===null)return null;c=b;d=W(typeof c);if(d===A(175))e=1;else if(!(A(175) instanceof I))e=0;else{f=A(175);e=d.kb!==f.kb?0:1;}a:{if(!e){if(d===A(176))e=1;else if(!(A(176) instanceof I))e=0;else{f=A(176);e=d.kb!==f.kb?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Bt]===true)return b;b=M_;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E0;h.kS=c;M_.set(c,new WeakRef(h));return h;}if(d===A(177))e=1;else if
(!(A(177) instanceof I))e=0;else{b=A(177);e=d.kb!==b.kb?0:1;}if(e){f=HB.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E0;h.kS=c;i=h;HB.set(c,new WeakRef(i));O9(V2,i,c);return h;}if(d===A(178))e=1;else if(!(A(178) instanceof I))e=0;else{b=A(178);e=d.kb!==b.kb?0:1;}if(e){f=IB.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E0;h.kS=c;i=h;IB.set(c,new WeakRef(i));O9(P2,i,c);return h;}if(d===A(179))e=1;else if
(!(A(179) instanceof I))e=0;else{b=A(179);e=d.kb!==b.kb?0:1;}if(e){f=Qu;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E0;h.kS=c;Qu=new WeakRef(h);return h;}}b=new E0;b.kS=c;return b;},
ABs=()=>{AMS=new WeakMap();M_=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();HB=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();IB=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();V2=HB===null?null:new FinalizationRegistry(B8(new MA,"accept"));P2=IB===null?null:new FinalizationRegistry(B8(new Mz,"accept"));},
O9=(b,c,d)=>{return b.register(c,d);};
let Rp=F(0);
let KE=F();
let Ib=F(0);
let KD=F();
function Uz(){let a=this;C.call(a);a.md=null;a.lJ=null;a.n7=null;a.qK=null;a.qp=0;a.o_=0;a.nb=0;a.kZ=0;a.oK=0;a.s8=0;a.pO=0;a.m3=0;a.Aw=0;a.r_=0;a.r7=0;}
let AKL=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.r_=(-1);h=e+1|0;a.qp=h;i=Ba(h*2|0);a.md=i;j=Ba(g);k=j.data;a.lJ=j;e=0;g=k.length;l=BW(e,g);if(l>0){b=new Bl;b.kc=1;b.kd=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.n7=Ba(f);i=i.data;h=0;m=i.length;e=BW(h,m);if(e>0){b=new Bl;b.kc=1;b.kd=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.o_=0;a.r7=2;f=0;if(e>0){b=new Bl;b.kc=1;b.kd=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bl;b.kc=1;b.kd=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.qK=b;if
(c>=0){a.nb=c;a.kZ=d;}a.oK=a.nb;},
AQy=(a,b,c,d,e,f)=>{let g=new Uz();AKL(g,a,b,c,d,e,f);return g;};
let CC=F(Bl);
let K0=F(BA);
let EO=F(BG);
let HJ=F(EO);
let Ds=F(BA);
function Cf(){let a=this;C.call(a);a.km=null;a.mO=0;a.kv=null;a.lI=0;}
let O=0;
let ACz=(a,b,c,d)=>{let e;e=d.kZ;while(true){if(b>e)return (-1);if(a.fJ(b,c,d)>=0)break;b=b+1|0;}return b;},
AFu=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fJ(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AU6=(a,b)=>{a.lI=b;},
AAE=a=>{return a.lI;},
AWy=a=>{let b,c,d,e,f,g,h,i;b=a.kv;c=a.fK();d=new K;d.ka=G(16);e=d.j_;Bj(d,e,e+1|0);d.ka.data[e]=60;f=d.j_;if(b===null)b=A(2);E(d,f,b);e=d.j_;Bj(d,e,e+1|0);d.ka.data[e]=58;f=d.j_;if(c===null)c=A(2);E(d,f,c);e=d.j_;Bj(d,e,e+1|0);g=d.ka;h=g.data;h[e]=62;b=new I;e=d.j_;i=h.length;if(e>=0&&e<=(i-0|0)){b.kb=L(g.data,0,e);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
AOc=a=>{let b,c,d,e,f,g,h,i;b=a.kv;c=a.fK();d=new K;d.ka=G(16);e=d.j_;Bj(d,e,e+1|0);d.ka.data[e]=60;f=d.j_;if(b===null)b=A(2);E(d,f,b);e=d.j_;Bj(d,e,e+1|0);d.ka.data[e]=58;f=d.j_;if(c===null)c=A(2);E(d,f,c);e=d.j_;Bj(d,e,e+1|0);g=d.ka;h=g.data;h[e]=62;b=new I;e=d.j_;i=h.length;if(e>=0&&e<=(i-0|0)){b.kb=L(g.data,0,e);return b;}b=new H;U(b);B(b);},
AXg=a=>{return a.km;},
AQS=(a,b)=>{a.km=b;},
AQQ=(a,b)=>{return 1;},
ASw=a=>{return null;},
IE=a=>{let b;a.mO=1;b=a.km;if(b!==null){if(!b.mO){b=b.fL();if(b!==null){a.km.mO=1;a.km=b;}a.km.e5();}else if(b instanceof GG&&b.mX.t_)a.km=b.km;}},
AXY=()=>{O=1;};
let M5=F();
let ASg=F();
let AEA=F();
let AT1=F();
let Le=F(0);
let MA=F();
let AQ0=(a,b)=>{let c;BE();b=b===null?null:b instanceof F6()?b:Cd(b);c=HB;b=b===null?null:b[Bt]===true?b:b.kS;c.delete(b);};
let AF$=F();
let Mz=F();
let Y9=(a,b)=>{let c;BE();b=b===null?null:b instanceof F6()?b:Cd(b);c=IB;b=b===null?null:b[Bt]===true?b:b.kS;c.delete(b);};
let Oe=F(0);
function HV(){let a=this;C.call(a);a.nl=null;a.mZ=null;}
function I3(){let a=this;HV.call(a);a.th=null;a.xB=0;}
function DG(){let a=this;Cf.call(a);a.t_=0;a.mj=0;}
let Ik=null;
let Ef=()=>{Ef=BR(DG);ADI();};
let Zx=(a,b,c,d)=>{let e,f,g;e=a.mj;f=d.md.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.km.fJ(b,c,d);if(g<0){b=a.mj;d.md.data[(b*2|0)+1|0]=e;}return g;},
AWt=a=>{return a.mj;},
AF5=a=>{return A(180);},
AAd=(a,b)=>{return 0;},
ADI=()=>{let b,c,d;b=new Pv;c=O;O=c+1|0;d=new Be;d.ka=G(20);b.kv=(J(d,d.j_,c,10)).T();Ik=b;};
function TB(){let a=this;C.call(a);a.lT=null;a.lM=0;a.oA=0;a.x$=0;a.o5=0;a.lX=0;a.kA=0;a.mE=0;a.ls=null;a.ox=null;a.kx=0;a.lE=0;a.np=0;a.rI=0;a.lR=null;}
let QP=null,Z9=null,AO0=0;
let AQU=(a,b,c)=>{let d,e,f,g,h,i,j;a.oA=1;a.lR=b;if((c&16)>0){d=new K;d.ka=G(16);E(d,d.j_,A(181));e=0;while(true){f=QC(b,A(182),e);if(f<0)break;g=f+2|0;h=Cj(b,e,g);E(d,d.j_,h);E(d,d.j_,A(183));e=g;}b=Cj(b,e,b.kb.length);E(d,d.j_,b);E(d,d.j_,A(182));b=new I;i=d.ka;j=i.data;e=d.j_;f=j.length;if(e>=0&&e<=(f-0|0))b.kb=L(i.data,0,e);else{b=new H;b.kc=1;b.kd=1;B(b);}}a.lT=G(b.kb.length+2|0);j=G(b.kb.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Dv(j,0,a.lT,0,b.kb.length);i=a.lT.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.mE=g;a.lM=c;By(a);By(a);return;}if(e<0)break;if(e>=b.kb.length)break;i[e]=b.kb.charCodeAt(e);e=e+1|0;}b=new Y;b.kc=1;b.kd=1;B(b);},
ADS=(a,b)=>{let c=new TB();AQU(c,a,b);return c;},
By=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.o5=a.lX;a.lX=a.kA;a.ls=a.ox;a.np=a.rI;a.rI=a.kx;a:{while(true){b=0;c=a.kx>=a.lT.data.length?0:Nj(a);a.kA=c;a.ox=null;if(a.oA==4){if(c!=92)return;c=a.kx;d=a.lT.data;if(c>=d.length)c=0;else{a.lE=c;if(a.lM&4)Cw(a);else a.kx=c+1|0;c=d[a.lE];}a.kA=c;switch(c){case 69:break;default:a.kA=92;a.kx=a.lE;return;}a.oA=a.x$;a.kA=a.kx>(a.lT.data.length-2|0)?0:Nj(a);}b:{c=a.kA;if(c==92){c=a.kx>=(a.lT.data.length-2|0)?(-1):Nj(a);c:{d:{a.kA=c;switch(c){case -1:e=new Cn;f=a.lR;c=a.kx;e.kc
=1;e.kd=1;e.kX=(-1);e.lW=A(68);e.lQ=f;e.kX=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.kA
=ALr(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.oA!=1)break b;a.kA=(-2147483648)|c;break b;case 65:a.kA=(-2147483583);break b;case 66:a.kA=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cn;f=a.lR;c=a.kx;e.kc=1;e.kd=1;e.kX=(-1);e.lW=A(68);e.lQ=f;e.kX=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.kA
=(-2147483577);break b;case 80:case 112:break c;case 81:a.x$=a.oA;a.oA=4;b=1;break b;case 90:a.kA=(-2147483558);break b;case 97:a.kA=7;break b;case 98:a.kA=(-2147483550);break b;case 99:c=a.kx;d=a.lT.data;if(c>=(d.length-2|0)){e=new Cn;f=a.lR;e.kc=1;e.kd=1;e.kX=(-1);e.lW=A(68);e.lQ=f;e.kX=c;B(e);}a.lE=c;if(a.lM&4)Cw(a);else a.kx=c+1|0;a.kA=d[a.lE]&31;break b;case 101:a.kA=27;break b;case 102:a.kA=12;break b;case 110:a.kA=10;break b;case 114:a.kA=13;break b;case 116:a.kA=9;break b;case 117:a.kA=QD(a,4);break b;case 120:a.kA
=QD(a,2);break b;case 122:a.kA=(-2147483526);break b;default:}break b;}e=new I;d=a.lT;g=d.data;h=a.lE;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.kb=L(d.data,h,1);e=VX(I6,e);if(e.oC===null)e.oC=e.fS();a.ox=e.oC;a.kA=0;break b;}e=AKC(a);j=0;if(a.kA==80)j=1;try{a.ox=AIm(e,j);}catch($$e){$$je=Bc($$e);if($$je instanceof KB){e=new Cn;f=a.lR;c=a.kx;e.kc=1;e.kd=1;e.kX=(-1);e.lW=A(68);e.lQ=f;e.kX=c;B(e);}else{throw $$e;}}a.kA=0;}else{h=a.oA;if(h==1)switch(c){case 36:a.kA=(-536870876);break b;case 40:d=a.lT.data;c
=a.kx;if(d[c]!=63){a.kA=(-2147483608);break b;}a.lE=c;if(a.lM&4)Cw(a);else a.kx=c+1|0;c=a.lT.data[a.kx];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.kA=(-134217688);k=a.kx;a.lE=k;if(a.lM&4)Cw(a);else a.kx=k+1|0;break e;default:e=new Cn;f=a.lR;c=a.kx;e.kc=1;e.kd=1;e.kX=(-1);e.lW=A(68);e.lQ=f;e.kX=c;B(e);}a.kA=(-67108824);j=a.kx;a.lE=j;if(a.lM&4)Cw(a);else a.kx=j+1|0;}else{switch(c){case 33:break;case 60:h=a.kx;a.lE=h;if(a.lM&4)Cw(a);else a.kx=h+1|0;c=a.lT.data[a.kx];h=1;break e;case 61:a.kA
=(-536870872);j=a.kx;a.lE=j;if(a.lM&4)Cw(a);else a.kx=j+1|0;break e;case 62:a.kA=(-33554392);j=a.kx;a.lE=j;if(a.lM&4)Cw(a);else a.kx=j+1|0;break e;default:i=ATm(a);a.kA=i;if(i<256){a.lM=i;i=i<<16;a.kA=i;a.kA=(-1073741784)|i;break e;}i=i&255;a.kA=i;a.lM=i;i=i<<16;a.kA=i;a.kA=(-16777176)|i;break e;}a.kA=(-268435416);j=a.kx;a.lE=j;if(a.lM&4)Cw(a);else a.kx=j+1|0;}}if(!h)break;}break b;case 41:a.kA=(-536870871);break b;case 42:case 43:case 63:h=a.kx;d=a.lT.data;switch(h>=d.length?42:d[h]){case 43:a.kA=c|(-2147483648);a.lE
=h;if(a.lM&4)Cw(a);else a.kx=h+1|0;break b;case 63:a.kA=c|(-1073741824);a.lE=h;if(a.lM&4)Cw(a);else a.kx=h+1|0;break b;default:}a.kA=c|(-536870912);break b;case 46:a.kA=(-536870866);break b;case 91:a.kA=(-536870821);a.oA=2;break b;case 93:if(h!=2)break b;a.kA=(-536870819);break b;case 94:a.kA=(-536870818);break b;case 123:a.ox=ARd(a,c);break b;case 124:a.kA=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.kA=(-536870874);break b;case 45:a.kA=(-536870867);break b;case 91:a.kA=(-536870821);break b;case 93:a.kA
=(-536870819);break b;case 94:a.kA=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new H;e.kc=1;e.kd=1;B(e);},
AKC=a=>{let b,c,d,e,f,g,h,i;b=new K;b.ka=G(10);c=a.kx;d=a.lT;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new I;a.lE=c;if(a.lM&4)Cw(a);else a.kx=c+1|0;g=a.lE;if(g>=0&&1<=(f-g|0)){b.kb=L(d.data,g,1);h=new K;h.ka=G(16);E(h,h.j_,A(184));E(h,h.j_,b);b=new I;d=h.ka;e=d.data;f=h.j_;g=e.length;if(f>=0&&f<=(g-0|0)){b.kb=L(d.data,0,f);return b;}b=new H;b.kc=1;b.kd=1;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}a.lE=c;if(a.lM&4)Cw(a);else a.kx=c+1|0;c=0;a:{while(true){f=a.kx;d=a.lT.data;if(f>=(d.length-2|0))break;a.lE=f;if
(a.lM&4)Cw(a);else a.kx=f+1|0;c=d[a.lE];if(c==125)break a;f=b.j_;Bj(b,f,f+1|0);b.ka.data[f]=c;}}if(c!=125){b=new Cn;i=a.lR;c=a.kx;b.kc=1;b.kd=1;b.kX=(-1);b.lW=A(68);b.lQ=i;b.kX=c;B(b);}}c=b.j_;if(!c){b=new Cn;i=a.lR;c=a.kx;b.kc=1;b.kd=1;b.kX=(-1);b.lW=A(68);b.lQ=i;b.kX=c;B(b);}h=new I;d=b.ka;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.kb=L(d.data,0,c);if(h.kb.length==1){b=new K;b.ka=G(16);E(b,b.j_,A(184));E(b,b.j_,h);h=new I;d=b.ka;e=d.data;f=b.j_;g=e.length;if(f>=0&&f<=(g-0|0)){h.kb=L(d.data,0,f);return h;}b=new H;b.kc
=1;b.kd=1;B(b);}b:{c:{if(h.kb.length>3){if(h===A(184)?1:M1(h,A(184),0))break c;if(h===A(185)?1:M1(h,A(185),0))break c;}break b;}h=Cj(h,2,h.kb.length);}return h;}b=new H;b.kc=1;b.kd=1;B(b);},
ARd=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.ka=G(4);d=(-1);e=2147483647;a:{while(true){f=a.kx;g=a.lT.data;if(f>=g.length)break a;a.lE=f;if(a.lM&4)Cw(a);else a.kx=f+1|0;b=g[a.lE];if(b==125)break a;if(b==44&&d<0)try{d=KV(Et(c),10);ARF(c,0,ZY(c));continue;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){break;}else{throw $$e;}}h=b&65535;f=c.j_;Bj(c,f,f+1|0);c.ka.data[f]=h;}c=new Cn;i=a.lR;b=a.kx;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=i;c.kX=b;B(c);}if(b!=125){c=new Cn;i=a.lR;b=a.kx;c.kc=1;c.kd=1;c.kX=(-1);c.lW
=A(68);c.lQ=i;c.kX=b;B(c);}if(c.j_>0)b:{try{e=KV(Et(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}c=new Cn;i=a.lR;b=a.kx;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=i;c.kX=b;B(c);}else if(d<0){c=new Cn;i=a.lR;b=a.kx;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=i;c.kX=b;B(c);}if((d|e|(e-d|0))<0){c=new Cn;i=a.lR;b=a.kx;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=i;c.kX=b;B(c);}f=a.kx;g=a.lT.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.kA=(-2147483525);a.lE=f;if(a.lM
&4)Cw(a);else a.kx=f+1|0;break c;case 63:a.kA=(-1073741701);a.lE=f;if(a.lM&4)Cw(a);else a.kx=f+1|0;break c;default:}a.kA=(-536870789);}c=new OP;c.pa=d;c.o$=e;return c;},
AFW=b=>{return b<0?0:1;},
QD=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.ka=G(b);d=a.lT.data.length-2|0;e=0;while(true){f=BW(e,b);if(f>=0)break;g=a.kx;if(g>=d)break;h=a.lT;a.lE=g;if(a.lM&4)Cw(a);else a.kx=g+1|0;g=h.data[a.lE];i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=g;e=e+1|0;}if(!f)a:{try{b=KV(Et(c),16);}catch($$e){$$je=Bc($$e);if($$je instanceof CC){break a;}else{throw $$e;}}return b;}c=new Cn;j=a.lR;b=a.kx;c.kc=1;c.kd=1;c.kX=(-1);c.lW=A(68);c.lQ=j;c.kX=b;B(c);},
ALr=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.lT.data;e=d.length-2|0;f=P$(d[a.kx]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.kx;a.lE=g;if(a.lM&4)Cw(a);else a.kx=g+1|0;a:{while(true){if(c>=b)break a;h=a.kx;if(h>=e)break a;i=P$(a.lT.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.kx;a.lE=g;if(a.lM&4)Cw(a);else a.kx=g+1|0;c=c+1|0;}}return f;}j=new Cn;k=a.lR;b=a.kx;j.kc=1;j.kd=1;j.kX=(-1);j.lW=A(68);j.lQ=k;j.kX=b;B(j);},
ATm=a=>{let b,c,d,e,f,g,h;b=1;c=a.lM;a:while(true){d=a.kx;e=a.lT.data;if(d>=e.length){f=new Cn;g=a.lR;f.kc=1;f.kd=1;f.kX=(-1);f.lW=A(68);f.lQ=g;f.kX=d;B(f);}b:{c:{switch(e[d]){case 41:a.lE=d;if(a.lM&4)Cw(a);else a.kx=d+1|0;return c|256;case 45:if(!b){h=new Cn;g=a.lR;h.kc=1;h.kd=1;h.kX=(-1);h.lW=A(68);h.lQ=g;h.kX=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.lE=d;if(a.lM&4)Cw(a);else a.kx=d+1|0;}a.lE=d;if(a.lM&4)Cw(a);else a.kx=d+1|0;return c;},
Cw=a=>{let b,c,d,e;b=a.lT.data.length-2|0;a.kx=a.kx+1|0;a:while(true){c=a.kx;if(c<b){b:{c=a.lT.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CZ(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.kx=a.kx+1|0;continue;}}c=a.kx;if(c>=b)break;d=a.lT.data;if(d[c]!=35)break;a.kx=c+1|0;while(true){e=a.kx;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.kx
=e+1|0;}}return c;},
ACu=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?IT([d,e]):IT([d,e,4519+f|0]);}return null;},
AMt=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
Nj=a=>{let b,c,d,e,f;b=a.lT;c=a.kx;a.lE=c;if(a.lM&4)Cw(a);else a.kx=c+1|0;b=b.data;d=a.lE;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.lT.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.kx;a.lE=d;if(a.lM&4)Cw(a);else a.kx=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cn(){let a=this;Bl.call(a);a.lW=null;a.lQ=null;a.kX=0;}
let ASo=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(68);c=a.kX;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bl;b.kc=1;b.kd=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new I;b.kb=L(d.data,0,f);}a:{h=a.lW;i=a.lQ;if(i!==null&&i.kb.length){j=a.kX;i=a.lQ;k=new K;k.ka=G(16);J(k,k.j_,j,10);E(k,k.j_,A(47));j=k.j_;if(i===null)i=A(2);E(k,j,i);E(k,k.j_,A(47));E(k,k.j_,b);b=new I;d=k.ka;e=d.data;c=k.j_;f=e.length;if(c>=0&&c<=(f-0|0)){b.kb=L(d.data,0,c);break a;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);}b=A(68);}i=new K;i.ka=G(16);j
=i.j_;if(h===null)h=A(2);E(i,j,h);E(i,i.j_,b);b=new I;d=i.ka;e=d.data;c=i.j_;f=e.length;if(c>=0&&c<=(f-0|0)){b.kb=L(d.data,0,c);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
let ZF=F();
let AUW=(b,c,d,e)=>{let f,g;if(c<=d){while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}return;}e=new Bl;e.kc=1;e.kd=1;B(e);},
AMf=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bl;f.kc=1;f.kd=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
AN5=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bl;f.kc=1;f.kd=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=BW(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
UZ=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let KZ=F(0);
let Ml=F();
let ADw=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.ln;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BD;b.ks=f;c=b;f.classObject=c;}}b=EA(b);if(b===null){b=new Ds;b.kc=1;b.kd=1;B(b);}if(b===M(Bp)){b=new Bl;b.kc=1;b.kd=1;B(b);}if(d<0){b=new Eh;b.kc=1;b.kd=1;B(b);}b=Ee(b.ks,d);}e=0;g=0;h=a.m5;i=a.ln;d=BW(h,h);a:{while(true){j=BW(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new ND;b.kc=1;b.kd=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.mc.data[g];e=h;g=k;}return b;}b=new H;b.kc=1;b.kd=1;B(b);};
let Sm=F(0);
let OE=F(0);
function K1(){Ml.call(this);this.m5=0;}
let TT=F(0);
function KY(){let a=this;K1.call(a);a.mc=null;a.ln=0;}
let Hs=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mc;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BD;i.ks=h;j=i;h.classObject=j;}}h=EA(i);if(h===null){i=new Ds;i.kc=1;i.kd=1;B(i);}if(h===M(Bp)){i=new Bl;i.kc=1;i.kd=1;B(i);}if(f<0){i=new Eh;i.kc=1;i.kd=1;B(i);}j=Ee(h.ks,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.mc=j;}},
AG5=(a,b,c)=>{let d,e,f;if(b>=0){d=a.ln;if(b<=d){Hs(a,d+1|0);d=a.ln;e=d;while(e>b){f=a.mc.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.mc.data[b]=c;a.ln=d+1|0;a.m5=a.m5+1|0;return;}}c=new H;c.kc=1;c.kd=1;B(c);},
UH=(a,b)=>{let c,d,e,f;if(b>=0){c=a.ln;if(b<c){d=a.mc.data;e=d[b];c=c-1|0;a.ln=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.m5=a.m5+1|0;return e;}}e=new H;e.kc=1;e.kd=1;B(e);};
let Sh=F(DG);
let Yh=(a,b,c,d)=>{let e,f;e=a.mj;f=d.lJ.data;f[e]=b-f[e]|0;return a.km.fJ(b,c,d);},
ACd=a=>{return A(186);},
AOI=(a,b)=>{return 0;};
let Wn=F(DG);
let ABP=(a,b,c,d)=>{return b;},
AHk=a=>{return A(187);};
let QE=F(DG);
let AAB=(a,b,c,d)=>{let e;e=a.mj;if(d.lJ.data[e]!=b)b=(-1);return b;},
AQJ=a=>{return A(188);};
function S0(){DG.call(this);this.v5=0;}
let YG=(a,b,c,d)=>{let e,f;e=a.mj;f=d.lJ.data;f[e]=b-f[e]|0;a.v5=b;return b;},
APi=a=>{return A(189);},
AMs=(a,b)=>{return 0;};
let GV=F(DG);
let ARk=(a,b,c,d)=>{if(d.r7!=1&&b!=d.kZ)return (-1);d.o_=1;d.md.data[1]=b;return b;},
AAW=a=>{return A(190);};
function CF(){Cf.call(this);this.k4=0;}
let ATr=(a,b,c,d)=>{let e;if((b+a.f2()|0)>d.kZ){d.m3=1;return (-1);}e=a.f3(b,c);if(e<0)return (-1);return a.km.fJ(b+e|0,c,d);},
APY=a=>{return a.k4;},
AHb=(a,b)=>{return 1;};
let Ft=F(CF);
let AO6=(a,b,c)=>{return 0;},
ADX=(a,b,c,d)=>{let e,f,g;e=d.kZ;f=d.nb;a:{b:{while(true){g=BW(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.kb.length)break b;if(((c.kb.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.kb.length)break a;if((c.kb.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.km.fJ(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);},
ABw=(a,b,c,d,e)=>{let f,g,h;f=e.kZ;g=e.nb;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.kb.length)break b;if(((d.kb.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.kb.length)break a;if((d.kb.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.km.fJ(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Y;d.kc=1;d.kd=1;B(d);}d=new Y;d.kc=1;d.kd=1;B(d);},
AF7=a=>{return A(191);},
Yy=(a,b)=>{return 0;};
function Cr(){let a=this;Cf.call(a);a.l0=null;a.mX=null;a.lL=0;}
let AFw=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.l0;if(e===null)return (-1);f=a.lL;g=d.md.data;h=f*2|0;i=g[h];g[h]=b;f=e.ln;j=0;a:{while(true){if(j>=f){b=a.lL;d.md.data[b*2|0]=i;return (-1);}e=a.l0;if(j<0)break a;if(j>=e.ln)break a;h=e.mc.data[j].fJ(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new H;c.kc=1;c.kd=1;B(c);},
AMj=(a,b)=>{a.mX.km=b;},
AHu=a=>{return A(192);},
AIQ=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.l0;if(c!==null){d=0;e=c.m5;f=c.ln;while(true){if(!(d>=f?0:1))break b;if(e<c.m5){b=new ND;b.kc=1;b.kd=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.ln)break a;if(c.mc.data[d].fn(b))break;d=g;}return 1;}}return 0;}b=new H;b.kc=1;b.kd=1;B(b);},
ANs=(a,b)=>{let c,d,e;c=a.lL;d=b.md.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
ABo=a=>{let b,c,d,e;a.mO=1;b=a.mX;if(b!==null&&!b.mO)IE(b);a:{b:{b=a.l0;if(b!==null){c=b.ln;d=0;while(true){if(d>=c)break b;b=a.l0;if(d<0)break a;if(d>=b.ln)break a;b=b.mc.data[d];e=b.fL();if(e===null)e=b;else{b.mO=1;UH(a.l0,d);AG5(a.l0,d,e);}if(!e.mO)e.e5();d=d+1|0;}}}if(a.km!==null)IE(a);return;}b=new H;b.kc=1;b.kd=1;B(b);};
let Kg=F(Cr);
let ALU=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lL;f=d.lJ.data;g=f[e];f[e]=b;h=a.l0.ln;e=0;a:{while(true){if(e>=h){b=a.lL;d.lJ.data[b]=g;return (-1);}i=a.l0;if(e<0)break a;if(e>=i.ln)break a;j=i.mc.data[e].fJ(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new H;c.kc=1;c.kd=1;B(c);},
AI6=a=>{return A(193);},
AN6=(a,b)=>{let c;c=a.lL;return !b.lJ.data[c]?0:1;};
let EG=F(Kg);
let ACG=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lL;f=d.lJ.data;g=f[e];f[e]=b;h=a.l0.ln;i=0;a:{while(i<h){j=a.l0;if(i<0)break a;if(i>=j.ln)break a;if(j.mc.data[i].fJ(b,c,d)>=0)return a.km.fJ(a.mX.v5,c,d);i=i+1|0;}b=a.lL;d.lJ.data[b]=g;return (-1);}c=new H;c.kc=1;c.kd=1;B(c);},
ANB=(a,b)=>{a.km=b;},
Ys=a=>{return A(193);};
let Os=F(EG);
let AL_=(a,b,c,d)=>{let e,f,g;e=a.l0.ln;f=0;a:{while(f<e){g=a.l0;if(f<0)break a;if(f>=g.ln)break a;if(g.mc.data[f].fJ(b,c,d)>=0)return a.km.fJ(b,c,d);f=f+1|0;}return (-1);}c=new H;c.kc=1;c.kd=1;B(c);},
AQV=(a,b)=>{return 0;},
ASs=a=>{return A(194);};
let Vm=F(EG);
let Z4=(a,b,c,d)=>{let e,f,g;e=a.l0.ln;f=0;a:{while(true){if(f>=e)return a.km.fJ(b,c,d);g=a.l0;if(f<0)break a;if(f>=g.ln)break a;if(g.mc.data[f].fJ(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.kc=1;c.kd=1;B(c);},
AQc=(a,b)=>{return 0;},
AFe=a=>{return A(195);};
let RP=F(EG);
let ABf=(a,b,c,d)=>{let e,f,g,h,i;e=a.l0.ln;f=d.s8?0:d.nb;a:{b:{g=a.km.fJ(b,c,d);if(g>=0){h=a.lL;d.lJ.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.l0;if(h<0)break a;if(h>=i.ln)break a;if(i.mc.data[h].f5(f,b,c,d)>=0){b=a.lL;d.lJ.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new H;c.kc=1;c.kd=1;B(c);},
AT3=(a,b)=>{return 0;},
ALn=a=>{return A(196);};
let Tl=F(EG);
let Xq=(a,b,c,d)=>{let e,f,g;e=a.l0.ln;f=a.lL;d.lJ.data[f]=b;f=0;a:{while(true){if(f>=e)return a.km.fJ(b,c,d);g=a.l0;if(f<0)break a;if(f>=g.ln)break a;if(g.mc.data[f].f5(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.kc=1;c.kd=1;B(c);},
AOo=(a,b)=>{return 0;},
AAC=a=>{return A(197);};
function GG(){Cr.call(this);this.nh=null;}
let XY=(a,b,c,d)=>{let e,f,g;e=a.lL;f=d.md.data;e=e*2|0;g=f[e];f[e]=b;e=a.nh.fJ(b,c,d);if(e>=0)return e;e=a.lL;d.md.data[e*2|0]=g;return (-1);},
AJg=(a,b,c,d)=>{let e;e=a.nh.fB(b,c,d);if(e>=0){b=a.lL;d.md.data[b*2|0]=e;}return e;},
AOP=(a,b,c,d,e)=>{let f;f=a.nh.f5(b,c,d,e);if(f>=0){b=a.lL;e.md.data[b*2|0]=f;}return f;},
AIG=(a,b)=>{return a.nh.fn(b);},
AMl=a=>{let b,c,d,e,f;b=new OR;c=a.nh;d=a.mX;e=O;O=e+1|0;f=new Be;f.ka=G(20);b.kv=(J(f,f.j_,e,10)).T();b.nh=c;b.mX=d;b.lL=d.mj;a.km=b;return b;},
ASF=a=>{let b;a.mO=1;b=a.mX;if(b!==null&&!b.mO)IE(b);b=a.nh;if(b!==null&&!b.mO){b=b.fL();if(b!==null){a.nh.mO=1;a.nh=b;}a.nh.e5();}};
let AKE=F();
let JO=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(AAH());}return b.data.length;},
Ee=(b,c)=>{if(b.$meta.primitive){switch(b){};}return R(b,c);};
let J8=F(BA);
let H_=F();
function Bq(){let a=this;H_.call(a);a.kT=0;a.mM=0;a.ky=null;a.tx=null;a.t3=null;a.lx=0;}
let I6=null;
let Z7=a=>{return null;},
Y2=a=>{return a.ky;},
AJI=a=>{return !a.mM?(Iz(a.ky,0)>=2048?0:1):AMT(a.ky,0)>=2048?0:1;},
AVP=a=>{return a.lx;},
APN=a=>{return a;},
Zo=a=>{let b,c;if(a.t3===null){b=a.f8();c=new Vx;c.AE=a;c.wd=b;b=new Bn;b.ku=Ba(64);c.ky=b;a.t3=c;E4(c,a.mM);}return a.t3;},
IS=a=>{let b,c;if(a.tx===null){b=a.f8();c=new Vw;c.Al=a;c.x1=b;c.ye=a;b=new Bn;b.ku=Ba(64);c.ky=b;a.tx=c;E4(c,a.kT);a.tx.lx=a.lx;}return a.tx;},
ASq=a=>{return 0;},
E4=(a,b)=>{let c;c=a.kT;if(c^b){a.kT=c?0:1;a.mM=a.mM?0:1;}if(!a.lx)a.lx=1;return a;},
AVw=a=>{return a.kT;},
AIm=(b,c)=>{b=VX(I6,b);if(!c&&b.oC===null)b.oC=b.fS();else if(c&&b.qy===null)b.qy=E4(b.fS(),1);return c?b.qy:b.oC;},
AU$=()=>{I6=new NF;};
function KB(){let a=this;BA.call(a);a.AR=null;a.AI=null;}
function CN(){let a=this;Bq.call(a);a.s$=0;a.tW=0;a.qY=0;a.uA=0;a.n_=0;a.nw=0;a.kB=null;a.lD=null;}
let Db=(a,b)=>{let c;a:{if(a.s$){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.n_){N8(a.kB,Gt(b&65535));break a;}M7(a.kB,Gt(b&65535));break a;}if(a.tW&&b>128){a.qY=1;if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b);if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}b=CD(B1,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.uA)N8(a.ky,b-55296|0);else M7(a.ky,b-55296|0);}if(a.n_)N8(a.kB,b);else M7(a.kB,
b);if(!a.lx&&(b>=65536&&b<=1114111?1:0))a.lx=1;return a;},
ATW=(a,b)=>{let c,d,e;if(!a.lx&&b.lx)a.lx=1;if(a.uA){if(!b.mM)Hj(a.ky,b.f8());else Ed(a.ky,b.f8());}else if(!b.mM)Hd(a.ky,b.f8());else{GL(a.ky,b.f8());Ed(a.ky,b.f8());a.mM=a.mM?0:1;a.uA=1;}if(!a.nw&&b.gd()!==null){if(a.n_){if(!b.kT)Hj(a.kB,b.gd());else Ed(a.kB,b.gd());}else if(!b.kT)Hd(a.kB,b.gd());else{GL(a.kB,b.gd());Ed(a.kB,b.gd());a.kT=a.kT?0:1;a.n_=1;}}else{c=a.kT;d=a.lD;if(d!==null){if(!c){e=new PU;e.y_=a;e.yp=c;e.x9=d;e.x3=b;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}else{e=new PV;e.AX=a;e.w4=c;e.wZ=d;e.wR=
b;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}}else{if(c&&!a.n_&&(a.kB.l3?0:1)){d=new PQ;d.z4=a;d.w1=b;b=new Bn;b.ku=Ba(64);d.ky=b;a.lD=d;}else if(!c){d=new PN;d.uv=a;d.tL=c;d.wn=b;b=new Bn;b.ku=Ba(64);d.ky=b;a.lD=d;}else{d=new PO;d.u9=a;d.tS=c;d.x6=b;b=new Bn;b.ku=Ba(64);d.ky=b;a.lD=d;}a.nw=1;}}return a;},
BU=(a,b,c)=>{let d;if(b>c){d=new Bl;d.kc=1;d.kd=1;B(d);}a:{b:{if(!a.s$){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Db(a,b);b=b+1|0;}}if(a.n_)Ye(a.kB,b,c+1|0);else Jf(a.kB,b,c+1|0);}return a;},
Xi=(a,b)=>{let c,d,e,f;if(!a.lx&&b.lx)a.lx=1;if(b.qY)a.qY=1;c=a.mM;if(!(c^b.mM)){if(!c)Hd(a.ky,b.ky);else Ed(a.ky,b.ky);}else if(c)Hj(a.ky,b.ky);else{GL(a.ky,b.ky);Ed(a.ky,b.ky);a.mM=1;}a:{if(!a.nw){d=b.nw;if((!d?b.kB:null)!==null){c=a.kT;if(!(c^b.kT)){if(!c){Hd(a.kB,!d?b.kB:null);break a;}Ed(a.kB,!d?b.kB:null);break a;}if(c){Hj(a.kB,!d?b.kB:null);break a;}GL(a.kB,!d?b.kB:null);Ed(a.kB,!b.nw?b.kB:null);a.kT=1;break a;}}c=a.kT;e=a.lD;if(e!==null){if(!c){f=new PI;f.yS=a;f.xP=c;f.x5=e;f.yi=b;b=new Bn;b.ku=Ba(64);f.ky
=b;a.lD=f;}else{f=new Qc;f.zn=a;f.yg=c;f.v2=e;f.v7=b;b=new Bn;b.ku=Ba(64);f.ky=b;a.lD=f;}}else{if(!a.n_&&(a.kB.l3?0:1)){if(!c){e=new PS;e.A0=a;e.wP=b;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}else{e=new PT;e.zr=a;e.yb=b;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}}else if(!c){e=new PW;e.xQ=a;e.xb=b;e.w0=c;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}else{e=new PX;e.xm=a;e.xv=b;e.xD=c;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}a.nw=1;}}},
VQ=(a,b)=>{let c,d,e,f;if(!a.lx&&b.lx)a.lx=1;if(b.qY)a.qY=1;c=a.mM;if(!(c^b.mM)){if(!c)Ed(a.ky,b.ky);else Hd(a.ky,b.ky);}else if(!c)Hj(a.ky,b.ky);else{GL(a.ky,b.ky);Ed(a.ky,b.ky);a.mM=0;}a:{if(!a.nw){d=b.nw;if((!d?b.kB:null)!==null){c=a.kT;if(!(c^b.kT)){if(!c){Ed(a.kB,!d?b.kB:null);break a;}Hd(a.kB,!d?b.kB:null);break a;}if(!c){Hj(a.kB,!d?b.kB:null);break a;}GL(a.kB,!d?b.kB:null);Ed(a.kB,!b.nw?b.kB:null);a.kT=0;break a;}}c=a.kT;e=a.lD;if(e!==null){if(!c){f=new PK;f.y9=a;f.xR=c;f.wc=e;f.w3=b;b=new Bn;b.ku=Ba(64);f.ky
=b;a.lD=f;}else{f=new PL;f.zy=a;f.xF=c;f.vY=e;f.xO=b;b=new Bn;b.ku=Ba(64);f.ky=b;a.lD=f;}}else{if(!a.n_&&(a.kB.l3?0:1)){if(!c){e=new PG;e.zt=a;e.wD=b;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}else{e=new PH;e.AU=a;e.wE=b;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}}else if(!c){e=new PM;e.yB=a;e.yo=b;e.xs=c;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}else{e=new PF;e.xr=a;e.xI=b;e.w5=c;b=new Bn;b.ku=Ba(64);e.ky=b;a.lD=e;}a.nw=1;}}},
ABC=(a,b)=>{let c;c=a.lD;if(c!==null)return a.kT^c.gg(b);return a.kT^CM(a.kB,b);},
ATY=a=>{if(!a.nw)return a.kB;return null;},
ADG=a=>{return a.ky;},
AQH=a=>{let b,c;if(a.lD!==null)return a;b=!a.nw?a.kB:null;c=new PJ;c.yN=a;c.sN=b;b=new Bn;b.ku=Ba(64);c.ky=b;return E4(c,a.kT);},
AKO=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.ka=G(16);c=Iz(a.kB,0);while(c>=0){d=(Fj(c)).data;e=0;f=d.length;g=b.j_;Bj(b,g,g+f|0);f=f+e|0;while(e<f){h=b.ka.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.j_;Bj(b,g,g+1|0);b.ka.data[g]=124;c=Iz(a.kB,c+1|0);}e=b.j_;if(e>0)VH(b,e-1|0);k=new I;d=b.ka;h=d.data;e=b.j_;g=h.length;if(e>=0&&e<=(g-0|0)){k.kb=L(d.data,0,e);return k;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
AD$=a=>{return a.qY;};
function EU(){Cf.call(this);this.kU=null;}
let AX5=a=>{return a.kU;},
AOR=(a,b)=>{return !a.kU.fn(b)&&!a.km.fn(b)?0:1;},
ARf=(a,b)=>{return 1;},
AJX=a=>{let b;a.mO=1;b=a.km;if(b!==null&&!b.mO){b=b.fL();if(b!==null){a.km.mO=1;a.km=b;}a.km.e5();}b=a.kU;if(b!==null){if(!b.mO){b=b.fL();if(b!==null){a.kU.mO=1;a.kU=b;}a.kU.e5();}else if(b instanceof GG&&b.mX.t_)a.kU=b.km;}};
function DP(){EU.call(this);this.lq=null;}
let Xs=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.lq.f2()|0)<=d.kZ){f=a.lq.f3(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.km.fJ(b,c,d);if(f>=0)break;b=b-a.lq.f2()|0;e=e+(-1)|0;}return f;},
ABk=a=>{return A(198);};
function FE(){DP.call(this);this.p1=null;}
let ZA=(a,b,c,d)=>{let e,f,g,h,i;e=a.p1;f=e.pa;g=e.o$;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.lq.f2()|0)>d.kZ)break a;i=a.lq.f3(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.km.fJ(b,c,d);if(i>=0)break;b=b-a.lq.f2()|0;h=h+(-1)|0;}return i;}if((b+a.lq.f2()|0)>d.kZ){d.m3=1;return (-1);}i=a.lq.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
Z_=a=>{return ML(a.p1);};
let DS=F(EU);
let XV=(a,b,c,d)=>{let e;if(!a.kU.gj(d))return a.km.fJ(b,c,d);e=a.kU.fJ(b,c,d);if(e>=0)return e;return a.km.fJ(b,c,d);},
AGF=a=>{return A(199);};
let FB=F(DP);
let AJn=(a,b,c,d)=>{let e;e=a.kU.fJ(b,c,d);if(e<0)e=a.km.fJ(b,c,d);return e;},
AT8=(a,b)=>{a.km=b;a.kU.e9(b);};
let Vz=F(DP);
let ATb=(a,b,c,d)=>{while((b+a.lq.f2()|0)<=d.kZ&&a.lq.f3(b,c)>0){b=b+a.lq.f2()|0;}return a.km.fJ(b,c,d);},
AKD=(a,b,c,d)=>{let e,f,g;e=a.km.fB(b,c,d);if(e<0)return (-1);f=e-a.lq.f2()|0;while(f>=b&&a.lq.f3(f,c)>0){g=f-a.lq.f2()|0;e=f;f=g;}return e;};
let NF=F();
let Yj=null,AG1=null,TY=null;
let VX=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=TY.data;if(c>=d.length){e=new KB;e.kc=1;e.kd=1;e.kf=A(68);e.AR=A(68);e.AI=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof I))g=0;else{f=f;g=b.kb!==f.kb?0:1;}if(g)break;c=c+1|0;}return d[1];},
AC6=()=>{let b,c,d,e,f,g;b=new JC;Yj=b;c=new I2;AG1=c;d=R(En(C),194);e=d.data;e[0]=V(C,[A(200),new T$]);e[1]=V(C,[A(201),new UM]);e[2]=V(C,[A(202),new UR]);e[3]=V(C,[A(203),new Jw]);e[4]=V(C,[A(204),c]);e[5]=V(C,[A(205),new JQ]);e[6]=V(C,[A(206),new WD]);e[7]=V(C,[A(207),new Ko]);e[8]=V(C,[A(208),new Sb]);e[9]=V(C,[A(209),new SE]);e[10]=V(C,[A(210),new Qw]);e[11]=V(C,[A(211),new Qh]);e[12]=V(C,[A(212),new UW]);e[13]=V(C,[A(213),new WL]);e[14]=V(C,[A(214),new Um]);e[15]=V(C,[A(215),new T2]);e[16]=V(C,[A(216),
new Vl]);e[17]=V(C,[A(217),new Pe]);e[18]=V(C,[A(218),new OQ]);e[19]=V(C,[A(219),new Uu]);e[20]=V(C,[A(220),new UG]);e[21]=V(C,[A(221),new QS]);e[22]=V(C,[A(222),new SJ]);e[23]=V(C,[A(223),new Wf]);e[24]=V(C,[A(224),new UD]);e[25]=V(C,[A(225),new RC]);e[26]=V(C,[A(226),new QR]);e[27]=V(C,[A(227),new WH]);e[28]=V(C,[A(228),b]);e[29]=V(C,[A(229),new IL]);e[30]=V(C,[A(230),new Vq]);e[31]=V(C,[A(231),b]);e[32]=V(C,[A(232),new Se]);e[33]=V(C,[A(233),c]);e[34]=V(C,[A(234),new QM]);f=R(C,2);g=f.data;g[0]=A(235);b=
new Bv;b.kG=0;b.kH=127;g[1]=b;e[35]=f;f=R(C,2);g=f.data;g[0]=A(236);b=new Bv;b.kG=128;b.kH=255;g[1]=b;e[36]=f;f=R(C,2);g=f.data;g[0]=A(237);b=new Bv;b.kG=256;b.kH=383;g[1]=b;e[37]=f;f=R(C,2);g=f.data;g[0]=A(238);b=new Bv;b.kG=384;b.kH=591;g[1]=b;e[38]=f;f=R(C,2);g=f.data;g[0]=A(239);b=new Bv;b.kG=592;b.kH=687;g[1]=b;e[39]=f;f=R(C,2);g=f.data;g[0]=A(240);b=new Bv;b.kG=688;b.kH=767;g[1]=b;e[40]=f;f=R(C,2);g=f.data;g[0]=A(241);b=new Bv;b.kG=768;b.kH=879;g[1]=b;e[41]=f;f=R(C,2);g=f.data;g[0]=A(242);b=new Bv;b.kG
=880;b.kH=1023;g[1]=b;e[42]=f;f=R(C,2);g=f.data;g[0]=A(243);b=new Bv;b.kG=1024;b.kH=1279;g[1]=b;e[43]=f;f=R(C,2);g=f.data;g[0]=A(244);b=new Bv;b.kG=1280;b.kH=1327;g[1]=b;e[44]=f;f=R(C,2);g=f.data;g[0]=A(245);b=new Bv;b.kG=1328;b.kH=1423;g[1]=b;e[45]=f;f=R(C,2);g=f.data;g[0]=A(246);b=new Bv;b.kG=1424;b.kH=1535;g[1]=b;e[46]=f;f=R(C,2);g=f.data;g[0]=A(247);b=new Bv;b.kG=1536;b.kH=1791;g[1]=b;e[47]=f;f=R(C,2);g=f.data;g[0]=A(248);b=new Bv;b.kG=1792;b.kH=1871;g[1]=b;e[48]=f;f=R(C,2);g=f.data;g[0]=A(249);b=new Bv;b.kG
=1872;b.kH=1919;g[1]=b;e[49]=f;f=R(C,2);g=f.data;g[0]=A(250);b=new Bv;b.kG=1920;b.kH=1983;g[1]=b;e[50]=f;f=R(C,2);g=f.data;g[0]=A(251);b=new Bv;b.kG=2304;b.kH=2431;g[1]=b;e[51]=f;f=R(C,2);g=f.data;g[0]=A(252);b=new Bv;b.kG=2432;b.kH=2559;g[1]=b;e[52]=f;f=R(C,2);g=f.data;g[0]=A(253);b=new Bv;b.kG=2560;b.kH=2687;g[1]=b;e[53]=f;f=R(C,2);g=f.data;g[0]=A(254);b=new Bv;b.kG=2688;b.kH=2815;g[1]=b;e[54]=f;f=R(C,2);g=f.data;g[0]=A(255);b=new Bv;b.kG=2816;b.kH=2943;g[1]=b;e[55]=f;f=R(C,2);g=f.data;g[0]=A(256);b=new Bv;b.kG
=2944;b.kH=3071;g[1]=b;e[56]=f;f=R(C,2);g=f.data;g[0]=A(257);b=new Bv;b.kG=3072;b.kH=3199;g[1]=b;e[57]=f;f=R(C,2);g=f.data;g[0]=A(258);b=new Bv;b.kG=3200;b.kH=3327;g[1]=b;e[58]=f;f=R(C,2);g=f.data;g[0]=A(259);b=new Bv;b.kG=3328;b.kH=3455;g[1]=b;e[59]=f;f=R(C,2);g=f.data;g[0]=A(260);b=new Bv;b.kG=3456;b.kH=3583;g[1]=b;e[60]=f;f=R(C,2);g=f.data;g[0]=A(261);b=new Bv;b.kG=3584;b.kH=3711;g[1]=b;e[61]=f;f=R(C,2);g=f.data;g[0]=A(262);b=new Bv;b.kG=3712;b.kH=3839;g[1]=b;e[62]=f;f=R(C,2);g=f.data;g[0]=A(263);b=new Bv;b.kG
=3840;b.kH=4095;g[1]=b;e[63]=f;f=R(C,2);g=f.data;g[0]=A(264);b=new Bv;b.kG=4096;b.kH=4255;g[1]=b;e[64]=f;f=R(C,2);g=f.data;g[0]=A(265);b=new Bv;b.kG=4256;b.kH=4351;g[1]=b;e[65]=f;f=R(C,2);g=f.data;g[0]=A(266);b=new Bv;b.kG=4352;b.kH=4607;g[1]=b;e[66]=f;f=R(C,2);g=f.data;g[0]=A(267);b=new Bv;b.kG=4608;b.kH=4991;g[1]=b;e[67]=f;f=R(C,2);g=f.data;g[0]=A(268);b=new Bv;b.kG=4992;b.kH=5023;g[1]=b;e[68]=f;f=R(C,2);g=f.data;g[0]=A(269);b=new Bv;b.kG=5024;b.kH=5119;g[1]=b;e[69]=f;f=R(C,2);g=f.data;g[0]=A(270);b=new Bv;b.kG
=5120;b.kH=5759;g[1]=b;e[70]=f;f=R(C,2);g=f.data;g[0]=A(271);b=new Bv;b.kG=5760;b.kH=5791;g[1]=b;e[71]=f;f=R(C,2);g=f.data;g[0]=A(272);b=new Bv;b.kG=5792;b.kH=5887;g[1]=b;e[72]=f;f=R(C,2);g=f.data;g[0]=A(273);b=new Bv;b.kG=5888;b.kH=5919;g[1]=b;e[73]=f;f=R(C,2);g=f.data;g[0]=A(274);b=new Bv;b.kG=5920;b.kH=5951;g[1]=b;e[74]=f;f=R(C,2);g=f.data;g[0]=A(275);b=new Bv;b.kG=5952;b.kH=5983;g[1]=b;e[75]=f;f=R(C,2);g=f.data;g[0]=A(276);b=new Bv;b.kG=5984;b.kH=6015;g[1]=b;e[76]=f;f=R(C,2);g=f.data;g[0]=A(277);b=new Bv;b.kG
=6016;b.kH=6143;g[1]=b;e[77]=f;f=R(C,2);g=f.data;g[0]=A(278);b=new Bv;b.kG=6144;b.kH=6319;g[1]=b;e[78]=f;f=R(C,2);g=f.data;g[0]=A(279);b=new Bv;b.kG=6400;b.kH=6479;g[1]=b;e[79]=f;f=R(C,2);g=f.data;g[0]=A(280);b=new Bv;b.kG=6480;b.kH=6527;g[1]=b;e[80]=f;f=R(C,2);g=f.data;g[0]=A(281);b=new Bv;b.kG=6528;b.kH=6623;g[1]=b;e[81]=f;f=R(C,2);g=f.data;g[0]=A(282);b=new Bv;b.kG=6624;b.kH=6655;g[1]=b;e[82]=f;f=R(C,2);g=f.data;g[0]=A(283);b=new Bv;b.kG=6656;b.kH=6687;g[1]=b;e[83]=f;f=R(C,2);g=f.data;g[0]=A(284);b=new Bv;b.kG
=7424;b.kH=7551;g[1]=b;e[84]=f;f=R(C,2);g=f.data;g[0]=A(285);b=new Bv;b.kG=7552;b.kH=7615;g[1]=b;e[85]=f;f=R(C,2);g=f.data;g[0]=A(286);b=new Bv;b.kG=7616;b.kH=7679;g[1]=b;e[86]=f;f=R(C,2);g=f.data;g[0]=A(287);b=new Bv;b.kG=7680;b.kH=7935;g[1]=b;e[87]=f;f=R(C,2);g=f.data;g[0]=A(288);b=new Bv;b.kG=7936;b.kH=8191;g[1]=b;e[88]=f;f=R(C,2);g=f.data;g[0]=A(289);b=new Bv;b.kG=8192;b.kH=8303;g[1]=b;e[89]=f;f=R(C,2);g=f.data;g[0]=A(290);b=new Bv;b.kG=8304;b.kH=8351;g[1]=b;e[90]=f;f=R(C,2);g=f.data;g[0]=A(291);b=new Bv;b.kG
=8352;b.kH=8399;g[1]=b;e[91]=f;f=R(C,2);g=f.data;g[0]=A(292);b=new Bv;b.kG=8400;b.kH=8447;g[1]=b;e[92]=f;f=R(C,2);g=f.data;g[0]=A(293);b=new Bv;b.kG=8448;b.kH=8527;g[1]=b;e[93]=f;f=R(C,2);g=f.data;g[0]=A(294);b=new Bv;b.kG=8528;b.kH=8591;g[1]=b;e[94]=f;f=R(C,2);g=f.data;g[0]=A(295);b=new Bv;b.kG=8592;b.kH=8703;g[1]=b;e[95]=f;f=R(C,2);g=f.data;g[0]=A(296);b=new Bv;b.kG=8704;b.kH=8959;g[1]=b;e[96]=f;f=R(C,2);g=f.data;g[0]=A(297);b=new Bv;b.kG=8960;b.kH=9215;g[1]=b;e[97]=f;f=R(C,2);g=f.data;g[0]=A(298);b=new Bv;b.kG
=9216;b.kH=9279;g[1]=b;e[98]=f;f=R(C,2);g=f.data;g[0]=A(299);b=new Bv;b.kG=9280;b.kH=9311;g[1]=b;e[99]=f;f=R(C,2);g=f.data;g[0]=A(300);b=new Bv;b.kG=9312;b.kH=9471;g[1]=b;e[100]=f;f=R(C,2);g=f.data;g[0]=A(301);b=new Bv;b.kG=9472;b.kH=9599;g[1]=b;e[101]=f;f=R(C,2);g=f.data;g[0]=A(302);b=new Bv;b.kG=9600;b.kH=9631;g[1]=b;e[102]=f;e[103]=V(C,[A(303),BI(9632,9727)]);e[104]=V(C,[A(304),BI(9728,9983)]);e[105]=V(C,[A(305),BI(9984,10175)]);e[106]=V(C,[A(306),BI(10176,10223)]);e[107]=V(C,[A(307),BI(10224,10239)]);e[108]
=V(C,[A(308),BI(10240,10495)]);e[109]=V(C,[A(309),BI(10496,10623)]);e[110]=V(C,[A(310),BI(10624,10751)]);e[111]=V(C,[A(311),BI(10752,11007)]);e[112]=V(C,[A(312),BI(11008,11263)]);e[113]=V(C,[A(313),BI(11264,11359)]);e[114]=V(C,[A(314),BI(11392,11519)]);e[115]=V(C,[A(315),BI(11520,11567)]);e[116]=V(C,[A(316),BI(11568,11647)]);e[117]=V(C,[A(317),BI(11648,11743)]);e[118]=V(C,[A(318),BI(11776,11903)]);e[119]=V(C,[A(319),BI(11904,12031)]);e[120]=V(C,[A(320),BI(12032,12255)]);e[121]=V(C,[A(321),BI(12272,12287)]);e[122]
=V(C,[A(322),BI(12288,12351)]);e[123]=V(C,[A(323),BI(12352,12447)]);e[124]=V(C,[A(324),BI(12448,12543)]);e[125]=V(C,[A(325),BI(12544,12591)]);e[126]=V(C,[A(326),BI(12592,12687)]);e[127]=V(C,[A(327),BI(12688,12703)]);e[128]=V(C,[A(328),BI(12704,12735)]);e[129]=V(C,[A(329),BI(12736,12783)]);e[130]=V(C,[A(330),BI(12784,12799)]);e[131]=V(C,[A(331),BI(12800,13055)]);e[132]=V(C,[A(332),BI(13056,13311)]);e[133]=V(C,[A(333),BI(13312,19893)]);e[134]=V(C,[A(334),BI(19904,19967)]);e[135]=V(C,[A(335),BI(19968,40959)]);e[136]
=V(C,[A(336),BI(40960,42127)]);e[137]=V(C,[A(337),BI(42128,42191)]);e[138]=V(C,[A(338),BI(42752,42783)]);e[139]=V(C,[A(339),BI(43008,43055)]);e[140]=V(C,[A(340),BI(44032,55203)]);e[141]=V(C,[A(341),BI(55296,56191)]);e[142]=V(C,[A(342),BI(56192,56319)]);e[143]=V(C,[A(343),BI(56320,57343)]);e[144]=V(C,[A(344),BI(57344,63743)]);e[145]=V(C,[A(345),BI(63744,64255)]);e[146]=V(C,[A(346),BI(64256,64335)]);e[147]=V(C,[A(347),BI(64336,65023)]);e[148]=V(C,[A(348),BI(65024,65039)]);e[149]=V(C,[A(349),BI(65040,65055)]);e[150]
=V(C,[A(350),BI(65056,65071)]);e[151]=V(C,[A(351),BI(65072,65103)]);e[152]=V(C,[A(352),BI(65104,65135)]);e[153]=V(C,[A(353),BI(65136,65279)]);e[154]=V(C,[A(354),BI(65280,65519)]);e[155]=V(C,[A(49),BI(0,1114111)]);f=R(C,2);g=f.data;g[0]=A(355);b=new QI;AJ3(b);g[1]=b;e[156]=f;e[157]=V(C,[A(356),Ch(0,1)]);e[158]=V(C,[A(357),Ha(62,1)]);e[159]=V(C,[A(358),Ch(1,1)]);e[160]=V(C,[A(359),Ch(2,1)]);e[161]=V(C,[A(360),Ch(3,0)]);e[162]=V(C,[A(361),Ch(4,0)]);e[163]=V(C,[A(362),Ch(5,1)]);e[164]=V(C,[A(363),Ha(448,1)]);e[165]
=V(C,[A(364),Ch(6,1)]);e[166]=V(C,[A(365),Ch(7,0)]);e[167]=V(C,[A(366),Ch(8,1)]);e[168]=V(C,[A(367),Ha(3584,1)]);e[169]=V(C,[A(368),Ch(9,1)]);e[170]=V(C,[A(369),Ch(10,1)]);e[171]=V(C,[A(370),Ch(11,1)]);e[172]=V(C,[A(371),Ha(28672,0)]);e[173]=V(C,[A(372),Ch(12,0)]);e[174]=V(C,[A(373),Ch(13,0)]);e[175]=V(C,[A(374),Ch(14,0)]);e[176]=V(C,[A(375),AGO(983040,1,1)]);e[177]=V(C,[A(376),Ch(15,0)]);e[178]=V(C,[A(377),Ch(16,1)]);e[179]=V(C,[A(378),Ch(18,1)]);e[180]=V(C,[A(379),AIM(19,0,1)]);e[181]=V(C,[A(380),Ha(1643118592,
1)]);e[182]=V(C,[A(381),Ch(20,0)]);e[183]=V(C,[A(382),Ch(21,0)]);e[184]=V(C,[A(383),Ch(22,0)]);e[185]=V(C,[A(384),Ch(23,0)]);e[186]=V(C,[A(385),Ch(24,1)]);e[187]=V(C,[A(386),Ha(2113929216,1)]);e[188]=V(C,[A(387),Ch(25,1)]);e[189]=V(C,[A(388),Ch(26,0)]);e[190]=V(C,[A(389),Ch(27,0)]);e[191]=V(C,[A(390),Ch(28,1)]);e[192]=V(C,[A(391),Ch(29,0)]);e[193]=V(C,[A(392),Ch(30,0)]);TY=d;};
function Bx(){let a=this;C.call(a);a.oC=null;a.qy=null;}
let AJ3=a=>{return;},
AW6=(a,b)=>{if(!b&&a.oC===null)a.oC=a.fS();else if(b&&a.qy===null)a.qy=E4(a.fS(),1);if(b)return a.qy;return a.oC;};
function OP(){let a=this;H_.call(a);a.pa=0;a.o$=0;}
let ML=a=>{let b,c,d,e,f,g,h;b=a.pa;c=a.o$;if(c==2147483647)d=A(68);else{d=new Be;d.ka=G(20);d=(J(d,d.j_,c,10)).T();}e=new K;e.ka=G(16);c=e.j_;Bj(e,c,c+1|0);e.ka.data[c]=123;J(e,e.j_,b,10);b=e.j_;Bj(e,b,b+1|0);e.ka.data[b]=44;f=e.j_;if(d===null)d=A(2);E(e,f,d);b=e.j_;Bj(e,b,b+1|0);g=e.ka;h=g.data;h[b]=125;d=new I;b=e.j_;c=h.length;if(b>=0&&b<=(c-0|0)){d.kb=L(g.data,0,b);return d;}d=new H;d.kc=1;d.kd=1;Bk(d);B(d);};
let Pv=F(Cf);
let AHR=(a,b,c,d)=>{return b;},
AL6=a=>{return A(393);},
AMi=(a,b)=>{return 0;};
function Bn(){let a=this;C.call(a);a.ku=null;a.l3=0;}
let M7=(a,b)=>{let c,d,e;if(b<0){c=new H;c.kc=1;c.kd=1;B(c);}d=b/32|0;if(b>=a.l3){JM(a,d+1|0);a.l3=b+1|0;}e=a.ku.data;e[d]=e[d]|1<<(b%32|0);},
Jf=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BW(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.l3){JM(a,e+1|0);a.l3=c;}if(d==e){f=a.ku.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.ku.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new H;i.kc=1;i.kd=1;B(i);},
N8=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.kc=1;c.kd=1;B(c);}d=b/32|0;e=a.ku.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.l3-1|0))Is(a);}},
Ye=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.l3;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.ku.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.ku.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}Is(a);return;}i=new H;i.kc=1;i.kd=1;B(i);},
CM=(a,b)=>{let c,d,e;if(b<0){c=new H;c.kc=1;c.kd=1;B(c);}d=b/32|0;e=a.ku.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
Iz=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.kc=1;c.kd=1;B(c);}d=a.l3;if(b>=d)return (-1);e=b/32|0;f=a.ku.data;g=f[e]>>>(b%32|0)|0;if(g)return Eq(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Eq(f[g])|0;g=g+1|0;}return (-1);},
AMT=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new H;c.kc=1;c.kd=1;B(c);}d=a.l3;if(b>=d)return b;e=b/32|0;f=a.ku.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return Eq(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+Eq(f[h]^(-1))|0;h=h+1|0;}return d;},
JM=(a,b)=>{let c,d,e,f,g,h;c=a.ku.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=Ba(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.ku=g;},
Is=a=>{let b,c,d;b=(a.l3+31|0)/32|0;a.l3=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Pb(a.ku.data[c]);if(d<32)break;c=c+(-1)|0;a.l3=a.l3-32|0;}a.l3=a.l3-d|0;}},
JL=(a,b)=>{let c,d,e,f,g;c=a.ku.data;d=c.length;e=b.ku.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
Ed=(a,b)=>{let c,d,e,f,g,h,i;c=a.ku.data;d=c.length;e=b.ku.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.l3;i=b.l3;if(h<i)i=h;a.l3=i;Is(a);},
Hj=(a,b)=>{let c,d,e,f,g;c=a.ku.data;d=c.length;e=b.ku.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}Is(a);},
Hd=(a,b)=>{let c,d,e,f,g;c=a.l3;d=b.l3;if(c>d)d=c;a.l3=d;JM(a,(d+31|0)/32|0);e=a.ku.data;c=e.length;f=b.ku.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
GL=(a,b)=>{let c,d,e,f,g;c=a.l3;d=b.l3;if(c>d)d=c;a.l3=d;JM(a,(d+31|0)/32|0);e=a.ku.data;c=e.length;f=b.ku.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}Is(a);};
function Oy(){let a=this;Cr.call(a);a.sR=null;a.tN=0;}
let AGj=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.nb;f=d.kZ;g=b+1|0;f=BW(g,f);if(f>0){d.m3=1;return (-1);}if(b>=0&&b<c.kb.length){h=c.kb.charCodeAt(b);if(!a.sR.gg(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.kb.length){if((c.kb.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new Y;c.kc=1;c.kd=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.kb.length){if(!((c.kb.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);}}return a.km.fJ(g,c,d);}c=new Y;c.kc
=1;c.kd=1;B(c);},
AMu=a=>{let b,c,d,e,f,g,h,i;b=!a.tN?A(394):A(395);c=a.sR.T();d=new K;d.ka=G(16);E(d,d.j_,A(396));E(d,d.j_,b);e=d.j_;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
function HI(){let a=this;Cr.call(a);a.p4=null;a.pU=null;}
let Zp=(a,b,c,d)=>{let e;e=a.p4.fJ(b,c,d);if(e<0)e=AGj(a.pU,b,c,d);if(e>=0)return e;return (-1);},
ALR=(a,b)=>{a.km=b;a.pU.km=b;a.p4.e9(b);},
AMX=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.p4;c=a.pU;d=new K;d.ka=G(16);E(d,d.j_,A(397));e=d.j_;if(b===null)b=A(2);else{f=b.kv;b=b.fK();g=new K;Fc(g);GH(g,60);Jg(g,f);GH(g,58);Jg(g,b);GH(g,62);b=MC(g);}E(d,e,b);E(d,d.j_,A(398));e=d.j_;if(c===null)b=A(2);else{b=c.kv;f=!c.tN?A(394):A(395);c=c.sR.T();g=EF();Mx(Mx(Mx(g,A(396)),f),c);f=Et(g);c=new K;Fc(c);GH(c,60);Jg(c,b);GH(c,58);Jg(c,f);GH(c,62);b=MC(c);}E(d,e,b);b=new I;h=d.ka;i=h.data;j=d.j_;k=i.length;if(j>=0&&j<=(k-0|0)){b.kb=L(h.data,0,j);return b;}b=new H;b.kc=
1;b.kd=1;Bk(b);B(b);},
AAK=(a,b)=>{return 1;},
Z6=(a,b)=>{return 1;};
function D7(){let a=this;Cr.call(a);a.m0=null;a.qJ=0;}
let ADu=(a,b,c,d)=>{let e,f,g,h;a:{e=d.kZ;if(b<e){f=b+1|0;if(b>=0&&b<c.kb.length){g=c.kb.charCodeAt(b);if(a.gg(g)){h=a.km.fJ(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.kb.length){f=c.kb.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.gg(((g&1023)<<10|f&1023)+65536|0))break a;else return a.km.fJ(e,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}}return (-1);},
ASf=a=>{let b,c,d,e,f,g,h,i;b=!a.qJ?A(394):A(395);c=a.m0.T();d=new K;d.ka=G(16);E(d,d.j_,A(396));E(d,d.j_,b);e=d.j_;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
AEt=(a,b)=>{return a.m0.gg(b);},
Ze=(a,b)=>{let c,d;if(b instanceof EL)return a.m0.gg(b.qk);if(b instanceof Er)return a.m0.gg(b.mN);if(b instanceof D7){c=a.m0;b=b.m0;return c.gd()!==null&&b.gd()!==null?JL(c.gd(),b.gd()):1;}if(!(b instanceof Ev))return 1;c=a.m0;d=b.nI;return c.gd()!==null&&d.gd()!==null?JL(c.gd(),d.gd()):1;},
AV_=a=>{return a.m0;},
APD=(a,b)=>{a.km=b;},
ADM=(a,b)=>{return 1;};
let Kv=F(D7);
let AHc=(a,b)=>{let c;c=a.m0;if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b);if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}return c.gg(CD(B1,b));},
ASM=a=>{let b,c,d,e,f,g,h,i;b=!a.qJ?A(394):A(395);c=a.m0.T();d=new K;d.ka=G(16);E(d,d.j_,A(399));E(d,d.j_,b);e=d.j_;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
function K6(){let a=this;CF.call(a);a.sW=null;a.uy=0;}
let AHU=(a,b,c)=>{let d;d=a.sW;if(b>=0&&b<c.kb.length){b=c.kb.charCodeAt(b);if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b)&65535;if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}return !d.gg(CD(B1,b)&65535)?(-1):1;}c=new Y;c.kc=1;c.kd=1;B(c);},
AAn=a=>{let b,c,d,e,f,g,h,i;b=!a.uy?A(394):A(395);c=a.sW.T();d=new K;d.ka=G(16);E(d,d.j_,A(399));E(d,d.j_,b);e=d.j_;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
function Ev(){let a=this;CF.call(a);a.nI=null;a.u4=0;}
let WS=(a,b,c)=>{let d;d=a.nI;if(b>=0&&b<c.kb.length)return !d.gg(c.kb.charCodeAt(b))?(-1):1;c=new Y;c.kc=1;c.kd=1;B(c);},
AIa=a=>{let b,c,d,e,f,g,h,i;b=!a.u4?A(394):A(395);c=a.nI.T();d=new K;d.ka=G(16);E(d,d.j_,A(396));E(d,d.j_,b);e=d.j_;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
AMk=(a,b)=>{let c,d;if(b instanceof Er)return a.nI.gg(b.mN);if(b instanceof Ev){c=a.nI;b=b.nI;return c.gd()!==null&&b.gd()!==null?JL(c.gd(),b.gd()):1;}if(!(b instanceof D7)){if(!(b instanceof EL))return 1;return 0;}c=a.nI;d=b.m0;return c.gd()!==null&&d.gd()!==null?JL(c.gd(),d.gd()):1;};
function IU(){let a=this;Cr.call(a);a.oW=null;a.oL=null;a.r3=0;}
let AJm=(a,b)=>{a.km=b;},
AOr=a=>{let b,c,d,e,f,g,h,i;if(a.oL===null){b=new I;c=a.oW;b.kb=L(c.data,0,c.data.length);a.oL=b;}d=a.oL;b=new K;b.ka=G(16);E(b,b.j_,A(400));e=b.j_;if(d===null)d=A(2);E(b,e,d);f=new I;c=b.ka;g=c.data;h=b.j_;i=g.length;if(h>=0&&h<=(i-0|0)){f.kb=L(c.data,0,h);return f;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
Xd=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.kZ;f=Ba(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.kb.length){j=c.kb.charCodeAt(b);k=ACu(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.r3;if(b!=m)return (-1);while(true){if(l>=m)return a.km.fJ(i,c,d);if(f[l]!=a.oW.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.kb.length){j=c.kb.charCodeAt(i);g=j-4449|0;}else{c=new Y;c.kc=1;c.kd=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.kb.length){j=c.kb.charCodeAt(b);h
=j-4519|0;}else{c=new Y;c.kc=1;c.kd=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.r3==3){m=k[0];f=a.oW.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.km.fJ(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.r3==2){m=k[0];f=a.oW.data;if(m==f[0]&&k[1]==f[1]){b=a.km.fJ(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);},
AAw=(a,b)=>{let c,d,e;a:{if(b instanceof IU){b=b;if(b.oL===null){c=new I;d=b.oW;c.kb=L(d.data,0,d.data.length);b.oL=c;}c=b.oL;if(a.oL===null){b=new I;d=a.oW;b.kb=L(d.data,0,d.data.length);a.oL=b;}b=a.oL;if(c===b)e=1;else if(!(b instanceof I))e=0;else{b=b;e=c.kb!==b.kb?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AQL=(a,b)=>{return 1;};
function Er(){CF.call(this);this.mN=0;}
let AHv=a=>{return 1;},
AFS=(a,b,c)=>{let d;d=a.mN;if(b>=0&&b<c.kb.length)return d!=c.kb.charCodeAt(b)?(-1):1;c=new Y;c.kc=1;c.kd=1;B(c);},
ADn=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof I){e=d.kZ;while(true){if(b>=e)return (-1);f=H8(c,a.mN,b);if(f<0)return (-1);g=a.km;b=f+1|0;if(g.fJ(b,c,d)>=0)break;}return f;}h=d.kZ;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.kZ){d.m3=1;e=(-1);}else{e=a.mN;if(b<0)break a;if(b>=c.kb.length)break a;e=e!=c.kb.charCodeAt(b)?(-1):1;e=e<0?(-1):a.km.fJ(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new Y;U(c);B(c);},
AHF=(a,b,c,d,e)=>{let f;if(d instanceof I){a:{while(true){if(c<b)return (-1);c=Fa(d,a.mN,c);if(c<0)break a;if(c<b)break a;if(a.km.fJ(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.kZ){e.m3=1;f=(-1);}else{f=a.mN;if(c<0)break b;if(c>=d.kb.length)break b;f=f!=d.kb.charCodeAt(c)?(-1):1;f=f<0?(-1):a.km.fJ(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Y;U(d);B(d);},
AQ5=a=>{let b,c,d,e,f,g,h;b=a.mN;c=new K;c.ka=G(16);d=c.j_;Bj(c,d,d+1|0);e=c.ka;f=e.data;f[d]=b;g=new I;d=c.j_;h=f.length;if(d>=0&&d<=(h-0|0)){g.kb=L(e.data,0,d);return g;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
AQA=(a,b)=>{let c,d,e,f;if(b instanceof Er)return b.mN!=a.mN?0:1;if(!(b instanceof Ev)){if(b instanceof D7)return b.gg(a.mN);if(!(b instanceof EL))return 1;return 0;}b=b;c=a.mN;d=new I;e=G(1);f=e.data;f[0]=c;d.kb=L(e.data,0,f.length);b=b.nI;if(0>=d.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}return (!b.gg(d.kb.charCodeAt(0))?(-1):1)<=0?0:1;};
function NK(){CF.call(this);this.sm=0;}
let W2=(a,b,c)=>{let d;d=a.sm;if(b>=0&&b<c.kb.length){b=c.kb.charCodeAt(b);if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b)&65535;if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}return d!=(CD(B1,b)&65535)?(-1):1;}c=new Y;c.kc=1;c.kd=1;B(c);},
ALO=a=>{let b,c,d,e,f,g,h;b=a.sm;c=new K;c.ka=G(16);E(c,c.j_,A(401));d=c.j_;Bj(c,d,d+1|0);e=c.ka;f=e.data;f[d]=b;g=new I;d=c.j_;h=f.length;if(d>=0&&d<=(h-0|0)){g.kb=L(e.data,0,d);return g;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);};
function Ks(){let a=this;CF.call(a);a.tA=0;a.t1=0;}
let XL=(a,b,c)=>{let d;d=a.tA;if(b>=0&&b<c.kb.length){a:{b:{if(d!=c.kb.charCodeAt(b)){d=a.t1;if(b<0)break a;if(b>=c.kb.length)break a;if(d!=c.kb.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);},
AGd=a=>{let b,c,d,e,f,g,h;b=a.tA;c=new K;c.ka=G(16);E(c,c.j_,A(402));d=c.j_;Bj(c,d,d+1|0);e=c.ka;f=e.data;f[d]=b;g=new I;d=c.j_;h=f.length;if(d>=0&&d<=(h-0|0)){g.kb=L(e.data,0,d);return g;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);};
function FL(){let a=this;Cr.call(a);a.pR=0;a.op=null;a.pB=null;a.px=0;}
let ASA=(a,b)=>{a.km=b;},
ALS=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=Ba(4);f=d.kZ;if(b>=f)return (-1);g=L7(a,b,c,f);h=b+a.pR|0;i=QP.gv(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Dv(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=L7(a,h,c,f);while(b<4){if(!AMt(g)){k=b+1|0;i[b]=g;}else{j=(QP.gv(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.pR|0;if(h>=f){b=k;break a;}g=L7(a,h,c,f);b=k;}}}if(b!=a.px)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.km.fJ(h,c,d);if(j[g]!=a.pB.data[g])break;g
=g+1|0;}return (-1);},
ALw=a=>{let b,c,d,e,f,g,h,i;if(a.op===null){b=new K;b.ka=G(16);c=0;while(c<a.px){d=Fj(a.pB.data[c]);e=d.data.length;KC(b,b.j_,d,0,e);c=c+1|0;}f=new I;d=b.ka;g=d.data;h=b.j_;e=g.length;if(h>=0&&h<=(e-0|0)){f.kb=L(d.data,0,h);a.op=f;}else{b=new H;U(b);B(b);}}i=a.op;b=new K;b.ka=G(16);E(b,b.j_,A(403));c=b.j_;if(i===null)i=A(2);E(b,c,i);f=new I;d=b.ka;g=d.data;h=b.j_;e=g.length;if(h>=0&&h<=(e-0|0)){f.kb=L(d.data,0,h);return f;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
L7=(a,b,c,d)=>{let e,f,g,h;a:{a.pR=1;if(b>=(d-1|0)){if(b>=0&&b<c.kb.length){e=c.kb.charCodeAt(b);break a;}c=new Y;c.kc=1;c.kd=1;B(c);}d=b+1|0;if(b>=0&&b<c.kb.length){e=c.kb.charCodeAt(b);if(d>=0&&d<c.kb.length){f=c.kb.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=AAJ(g,0,h.length);a.pR=2;}break a;}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}return e;},
AHW=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof FL){b=b;if(b.op===null){c=new K;c.ka=G(16);d=0;while(d<b.px){e=Fj(b.pB.data[d]);f=e.data.length;KC(c,c.j_,e,0,f);d=d+1|0;}g=new I;e=c.ka;h=e.data;i=c.j_;f=h.length;if(i>=0&&i<=(f-0|0)){g.kb=L(e.data,0,i);b.op=g;}else{b=new H;U(b);B(b);}}g=b.op;if(a.op===null){b=new K;b.ka=G(16);d=0;while(d<a.px){e=Fj(a.pB.data[d]);f=e.data.length;KC(b,b.j_,e,0,f);d=d+1|0;}c=new I;e=b.ka;h=e.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0)){c.kb=L(e.data,0,f);a.op=c;}else{b=new H;U(b);B(b);}}b
=a.op;if(g===b)d=1;else if(!(b instanceof I))d=0;else{b=b;d=g.kb!==b.kb?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
ANE=(a,b)=>{return 1;};
let We=F(FL);
let TK=F(FL);
let WK=F(DS);
let ABW=(a,b,c,d)=>{let e;while(true){e=a.kU.fJ(b,c,d);if(e<=0)break;b=e;}return a.km.fJ(b,c,d);};
let QA=F(DS);
let AKp=(a,b,c,d)=>{let e;e=a.kU.fJ(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.kU.fJ(e,c,d);if(b<=e)break;e=b;}b=e;}return a.km.fJ(b,c,d);};
let Hg=F(DS);
let APw=(a,b,c,d)=>{let e;if(!a.kU.gj(d))return a.km.fJ(b,c,d);e=a.kU.fJ(b,c,d);if(e>=0)return e;return a.km.fJ(b,c,d);},
ARu=(a,b)=>{a.km=b;a.kU.e9(b);};
let Qk=F(Hg);
let AHD=(a,b,c,d)=>{let e;e=a.kU.fJ(b,c,d);if(e<=0)e=b;return a.km.fJ(e,c,d);},
AK1=(a,b)=>{a.km=b;};
function Gw(){let a=this;DS.call(a);a.ou=null;a.nz=0;}
let ATS=(a,b,c,d)=>{let e,f,g,h;e=a.nz;e=d.n7.data[e];if(!a.kU.gj(d))return a.km.fJ(b,c,d);if(e>=a.ou.o$)return a.km.fJ(b,c,d);f=a.nz;e=e+1|0;d.n7.data[f]=e;g=a.kU.fJ(b,c,d);if(g>=0){b=a.nz;d.n7.data[b]=0;return g;}g=a.nz;e=e+(-1)|0;h=d.n7.data;h[g]=e;if(e>=a.ou.pa)return a.km.fJ(b,c,d);h[g]=0;return (-1);},
ARE=a=>{return ML(a.ou);};
let OS=F(Gw);
let AGG=(a,b,c,d)=>{let e,f,g;e=0;f=a.ou.o$;a:{while(true){g=a.kU.fJ(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ou.pa)return (-1);return a.km.fJ(b,c,d);};
let R$=F(DS);
let ASQ=(a,b,c,d)=>{let e;if(!a.kU.gj(d))return a.km.fJ(b,c,d);e=a.km.fJ(b,c,d);if(e>=0)return e;return a.kU.fJ(b,c,d);};
let Ri=F(Hg);
let AAM=(a,b,c,d)=>{let e;if(!a.kU.gj(d))return a.km.fJ(b,c,d);e=a.km.fJ(b,c,d);if(e<0)e=a.kU.fJ(b,c,d);return e;};
let Up=F(Gw);
let YQ=(a,b,c,d)=>{let e,f,g;e=a.nz;f=d.n7.data[e];if(!a.kU.gj(d))return a.km.fJ(b,c,d);g=a.ou;if(f>=g.o$){e=a.nz;d.n7.data[e]=0;return a.km.fJ(b,c,d);}if(f<g.pa){e=a.nz;d.n7.data[e]=f+1|0;e=a.kU.fJ(b,c,d);}else{e=a.km.fJ(b,c,d);if(e>=0){b=a.nz;d.n7.data[b]=0;return e;}e=a.nz;d.n7.data[e]=f+1|0;e=a.kU.fJ(b,c,d);}return e;};
let R_=F(EU);
let ATv=(a,b,c,d)=>{let e;e=d.kZ;if(e>b)return a.km.f5(b,e,c,d);return a.km.fJ(b,c,d);},
APP=(a,b,c,d)=>{let e;e=d.kZ;if(a.km.f5(b,e,c,d)>=0)return b;return (-1);},
AM5=a=>{return A(404);};
function PE(){EU.call(this);this.sQ=null;}
let AMm=(a,b,c,d)=>{let e,f,g;e=d.kZ;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.sQ;if(f<0)break;if(f>=c.kb.length)break;if(g.gz(c.kb.charCodeAt(f)))break a;f=f+1|0;}c=new Y;c.kc=1;c.kd=1;B(c);}if(f>=0)e=f;if(e>b)return a.km.f5(b,e,c,d);return a.km.fJ(b,c,d);},
Xl=(a,b,c,d)=>{let e,f,g,h,i;e=d.kZ;f=a.km.fB(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.sQ;if(g<0)break;if(g>=c.kb.length)break;if(h.gz(c.kb.charCodeAt(g)))break a;g=g+1|0;}c=new Y;c.kc=1;c.kd=1;B(c);}if(g>=0)e=g;g=a.km.f5(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.sQ;if(i<0)break;if(i>=c.kb.length)break;if(d.gz(c.kb.charCodeAt(i)))break b;i=i+(-1)|0;}c=new Y;c.kc=1;c.kd=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
AOA=a=>{return A(405);};
let H1=F();
let GI=null,Gu=null;
let WM=F(DP);
let YV=(a,b,c,d)=>{let e;a:{while(true){if((b+a.lq.f2()|0)>d.kZ)break a;e=a.lq.f3(b,c);if(e<1)break;b=b+e|0;}}return a.km.fJ(b,c,d);};
let Vu=F(FB);
let AKi=(a,b,c,d)=>{let e;if((b+a.lq.f2()|0)<=d.kZ){e=a.lq.f3(b,c);if(e>=1)b=b+e|0;}return a.km.fJ(b,c,d);};
let Qa=F(FE);
let AOT=(a,b,c,d)=>{let e,f,g,h,i;e=a.p1;f=e.pa;g=e.o$;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.lq.f2()|0)>d.kZ)break a;i=a.lq.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.km.fJ(b,c,d);}if((b+a.lq.f2()|0)>d.kZ){d.m3=1;return (-1);}i=a.lq.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let Ra=F(DP);
let AMc=(a,b,c,d)=>{let e;while(true){e=a.km.fJ(b,c,d);if(e>=0)break;if((b+a.lq.f2()|0)<=d.kZ){e=a.lq.f3(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let TO=F(FB);
let Y7=(a,b,c,d)=>{let e;e=a.km.fJ(b,c,d);if(e>=0)return e;return a.kU.fJ(b,c,d);};
let RQ=F(FE);
let APa=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.p1;f=e.pa;g=e.o$;h=0;while(true){if(h>=f){a:{while(true){i=a.km.fJ(b,c,d);if(i>=0)break;if((b+a.lq.f2()|0)<=d.kZ){i=a.lq.f3(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.lq.f2()|0)>d.kZ){d.m3=1;return (-1);}j=a.lq.f3(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let L0=F(Cf);
let AIK=(a,b,c,d)=>{if(b&&!(d.pO&&b==d.nb))return (-1);return a.km.fJ(b,c,d);},
AGW=(a,b)=>{return 0;},
AKj=a=>{return A(406);};
function Lo(){Cf.call(this);this.vt=0;}
let Z3=(a,b,c,d)=>{let e,f,g;if(b>=d.kZ)e=32;else if(b>=0&&b<c.kb.length)e=c.kb.charCodeAt(b);else{c=new Y;c.kc=1;c.kd=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.kb.length)f=c.kb.charCodeAt(f);else{c=new Y;c.kc=1;c.kd=1;B(c);}}g=d.s8?0:d.nb;return (e!=32&&!Rl(a,e,b,g,c)?0:1)^(f!=32&&!Rl(a,f,b-1|0,g,c)?0:1)^a.vt?(-1):a.km.fJ(b,c,d);},
AAr=(a,b)=>{return 0;},
ATN=a=>{return A(407);},
Rl=(a,b,c,d,e)=>{let f;a:{b:{switch(CZ(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CZ(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.kb.length)break c;e:{f:{f=e.kb.charCodeAt(c);switch(CZ(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(CZ(f)!=6)return 1;}}return 1;}e=new Y;e.kc=1;e.kd=1;B(e);}return 0;};
let Py=F(Cf);
let AHi=(a,b,c,d)=>{if(b!=d.r_)return (-1);return a.km.fJ(b,c,d);},
ATJ=(a,b)=>{return 0;},
ZJ=a=>{return A(408);};
function NI(){Cf.call(this);this.qC=0;}
let ANh=(a,b,c,d)=>{let e,f,g;e=!d.pO?c.kb.length:d.kZ;if(b>=e){f=a.qC;d.lJ.data[f]=0;return a.km.fJ(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.kb.length){if(c.kb.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.kb.length){if(c.kb.charCodeAt(g)!=10)break a;f=a.qC;d.lJ.data[f]=0;return a.km.fJ(b,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.kb.length){f=c.kb.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new Y;c.kc
=1;c.kd=1;B(c);}}return (-1);}e=a.qC;d.lJ.data[e]=0;return a.km.fJ(b,c,d);},
ABH=(a,b)=>{let c,d,e;c=a.qC;d=b.lJ.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AJu=a=>{return A(409);};
let VJ=F(Cf);
let ALG=(a,b,c,d)=>{if(b<(!d.s8?d.kZ:c.kb.length))return (-1);d.m3=1;d.Aw=1;return a.km.fJ(b,c,d);},
WZ=(a,b)=>{return 0;},
AFv=a=>{return A(410);};
function OZ(){Cf.call(this);this.w9=null;}
let ABm=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.kZ){if(!b)break b;if(d.pO&&b==d.nb)break b;e=a.w9;f=b-1|0;if(f>=0&&f<c.kb.length){f=c.kb.charCodeAt(f);if(b<0)break a;if(b>=c.kb.length)break a;if(!e.gB(f,c.kb.charCodeAt(b)))break c;else break b;}c=new Y;c.kc=1;c.kd=1;B(c);}}return (-1);}return a.km.fJ(b,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);},
AE0=(a,b)=>{return 0;},
Zj=a=>{return A(411);};
let VF=F(Cr);
let ASV=(a,b,c,d)=>{let e,f,g,h,i;e=d.kZ;f=b+1|0;if(f>e){d.m3=1;return (-1);}if(b>=0&&b<c.kb.length){g=BW(c.kb.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.kb.length){h=c.kb.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.km.fJ(i,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);}}}return a.km.fJ(f,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);},
ACO=a=>{return A(412);},
AAz=(a,b)=>{a.km=b;},
AK$=a=>{return (-2147483602);},
AAx=(a,b)=>{return 1;};
function P6(){Cr.call(this);this.uJ=null;}
let ALy=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.kZ;f=b+1|0;if(f>e){d.m3=1;return (-1);}if(b>=0&&b<c.kb.length){g=c.kb.charCodeAt(b);h=BW(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.kb.length){i=c.kb.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.uJ.gz(((g&1023)<<10|i&1023)+65536|0)?(-1):a.km.fJ(j,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);}}}return a.uJ.gz(g)?(-1):a.km.fJ(f,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);},
ABU=a=>{return A(413);},
AOy=(a,b)=>{a.km=b;},
WN=a=>{return (-2147483602);},
ATo=(a,b)=>{return 1;};
function Vv(){Cf.call(this);this.s2=0;}
let AH8=(a,b,c,d)=>{let e,f;e=!d.pO?c.kb.length:d.kZ;if(b>=e){e=a.s2;d.lJ.data[e]=0;return a.km.fJ(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.kb.length){if(c.kb.charCodeAt(b)!=10)break a;else{f=a.s2;d.lJ.data[f]=1;return a.km.fJ(b+1|0,c,d);}}c=new Y;c.kc=1;c.kd=1;B(c);}}return (-1);},
AEB=(a,b)=>{let c,d,e;c=a.s2;d=b.lJ.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AIX=a=>{return A(409);};
function S3(){Cf.call(this);this.ta=0;}
let ALE=(a,b,c,d)=>{let e;if((!d.pO?c.kb.length-b|0:d.kZ-b|0)<=0){e=a.ta;d.lJ.data[e]=0;return a.km.fJ(b,c,d);}if(b>=0&&b<c.kb.length){if(c.kb.charCodeAt(b)!=10)return (-1);e=a.ta;d.lJ.data[e]=1;return a.km.fJ(b+1|0,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);},
AEm=(a,b)=>{let c,d,e;c=a.ta;d=b.lJ.data;e=!d[c]?0:1;d[c]=(-1);return e;},
Yn=a=>{return A(414);};
function Op(){Cf.call(this);this.q9=0;}
let AGN=(a,b,c,d)=>{let e,f,g;e=!d.pO?c.kb.length-b|0:d.kZ-b|0;if(!e){e=a.q9;d.lJ.data[e]=0;return a.km.fJ(b,c,d);}a:{if(e<2){if(b>=0&&b<c.kb.length){f=c.kb.charCodeAt(b);g=97;break a;}c=new Y;c.kc=1;c.kd=1;B(c);}if(b>=0&&b<c.kb.length){f=c.kb.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.kb.length){g=c.kb.charCodeAt(e);break a;}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.q9;d.lJ.data[e]=0;return a.km.fJ(b,c,d);case 13:if(g!=10){e=a.q9;d.lJ.data[e]=0;return a.km.fJ(b,
c,d);}e=a.q9;d.lJ.data[e]=0;return a.km.fJ(b,c,d);default:}return (-1);},
ABM=(a,b)=>{let c,d,e;c=a.q9;d=b.lJ.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AE4=a=>{return A(415);};
function G8(){let a=this;Cr.call(a);a.ro=0;a.p8=0;}
let YZ=(a,b,c,d)=>{let e,f,g,h,i;e=IY(a,d);if(e!==null&&(b+e.kb.length|0)<=d.kZ){f=0;a:{b:{c:{d:{while(true){if(f>=e.kb.length){g=a.p8;d.lJ.data[g]=e.kb.length;return a.km.fJ(b+e.kb.length|0,c,d);}if(f<0)break c;if(f>=e.kb.length)break c;h=e.kb.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.kb.length)break d;if(h!=c.kb.charCodeAt(i)){if(f<0)break a;if(f>=e.kb.length)break a;g=Gt(e.kb.charCodeAt(f));if(i<0)break b;if(i>=c.kb.length)break b;if(g!=c.kb.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new Y;c.kc=1;c.kd
=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}return (-1);},
ANy=(a,b)=>{a.km=b;},
IY=(a,b)=>{let c,d,e,f,g;c=a.ro;d=b.md.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.qK.kb.length?Cj(b.qK,f,g):null;},
Yv=a=>{let b,c,d,e,f,g,h;b=a.lL;c=new K;c.ka=G(16);E(c,c.j_,A(416));J(c,c.j_,b,10);d=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){d.kb=L(e.data,0,g);return d;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
AN7=(a,b)=>{let c,d,e;c=a.p8;d=b.lJ.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let VD=F(G8);
let ABV=(a,b,c,d)=>{let e,f,g;e=IY(a,d);if(e!==null&&(b+e.kb.length|0)<=d.kZ){f=!M1(c,e,b)?(-1):e.kb.length;if(f<0)return (-1);g=a.p8;d.lJ.data[g]=f;return a.km.fJ(b+f|0,c,d);}return (-1);},
AQT=(a,b,c,d)=>{let e,f,g;e=IY(a,d);f=d.nb;if(e!==null&&(b+e.kb.length|0)<=f){while(true){if(b>f)return (-1);g=QC(c,e,b);if(g<0)return (-1);if(a.km.fJ(g+e.kb.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
Yp=(a,b,c,d,e)=>{let f,g;f=IY(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=ADj(d,f,c);if(g<0)break a;if(g<b)break a;if(a.km.fJ(g+f.kb.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AJ8=(a,b)=>{return 1;},
ARp=a=>{let b,c,d,e,f,g,h;b=a.lL;c=new K;c.ka=G(16);E(c,c.j_,A(417));J(c,c.j_,b,10);d=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){d.kb=L(e.data,0,g);return d;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);};
function RJ(){G8.call(this);this.y0=0;}
let AI_=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ro;f=d.md.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.qK.kb.length?Cj(d.qK,h,i):null;if(j!==null&&(b+j.kb.length|0)<=d.kZ){i=0;a:{b:{while(true){if(i>=j.kb.length){e=a.p8;d.lJ.data[e]=j.kb.length;return a.km.fJ(b+j.kb.length|0,c,d);}if(i<0)break a;if(i>=j.kb.length)break a;e=j.kb.charCodeAt(i);if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}e=CD(B0,e)&65535;if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value)
:null)));}g=CD(B1,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.kb.length)break b;e=c.kb.charCodeAt(h);if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}e=CD(B0,e)&65535;if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}if(g!=(CD(B1,e)&65535))break;i=i+1|0;}return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}return (-1);},
AAs=a=>{let b,c,d,e,f,g,h;b=a.y0;c=new K;c.ka=G(16);E(c,c.j_,A(418));J(c,c.j_,b,10);d=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){d.kb=L(e.data,0,g);return d;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);};
let Pu=F(Be);
let AEa=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ka.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Z$=(a,b,c,d)=>{let e,f,g,h,i;e=a.j_;Bj(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.ka.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
AAV=(a,b)=>{IP(a,b);},
APU=(a,b,c)=>{Bj(a,b,b+1|0);a.ka.data[b]=c;return a;};
function Sd(){let a=this;CF.call(a);a.my=null;a.ui=null;a.uT=null;}
let ACs=(a,b)=>{let c,d,e,f,g,h;c=O;O=c+1|0;d=new Be;d.ka=G(20);a.kv=(J(d,d.j_,c,10)).T();a.k4=1;d=new I;e=b.ka;f=e.data;g=b.j_;h=f.length;if(g>=0&&g<=(h-0|0)){d.kb=L(e.data,0,g);a.my=d;c=b.j_;a.k4=c;a.ui=Tt(c);a.uT=Tt(a.k4);c=0;a:{b:{while(c<(a.k4-1|0)){b=a.ui;d=a.my;if(c<0)break a;if(c>=d.kb.length)break a;RT(b,d.kb.charCodeAt(c),(a.k4-c|0)-1|0);b=a.uT;d=a.my;g=(a.k4-c|0)-1|0;if(g<0)break b;if(g>=d.kb.length)break b;RT(b,d.kb.charCodeAt(g),(a.k4-c|0)-1|0);c=c+1|0;}return;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc
=1;b.kd=1;B(b);}b=new H;b.kc=1;b.kd=1;B(b);},
AGS=a=>{let b=new Sd();ACs(b,a);return b;},
ACx=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.k4){e=d+b|0;if(e<0)break a;if(e>=c.kb.length)break a;f=c.kb.charCodeAt(e);g=a.my;if(d<0)break b;if(d>=g.kb.length)break b;if(f!=g.kb.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.k4;}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);},
ZV=(a,b,c,d)=>{let e,f;e=d.kZ;while(true){if(b>e)return (-1);f=AQ8(a,c,b,e);if(f<0)return (-1);if(a.km.fJ(f+a.k4|0,c,d)>=0)break;b=f+1|0;}return f;},
AET=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=APV(a,d,b,c);if(c<0)return (-1);if(a.km.fJ(c+a.k4|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
AL0=a=>{let b,c,d,e,f,g,h;b=a.my;c=new K;c.ka=G(16);E(c,c.j_,A(419));d=c.j_;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){b.kb=L(e.data,0,g);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
AF4=(a,b)=>{let c,d,e;if(b instanceof Er){c=b.mN;b=a.my;if(0<b.kb.length)return c!=b.kb.charCodeAt(0)?0:1;b=new Y;b.kc=1;b.kd=1;B(b);}if(b instanceof Ev){b=b;d=Cj(a.my,0,1);b=b.nI;if(0>=d.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}return (!b.gg(d.kb.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof D7)){if(!(b instanceof EL))return 1;a:{if(a.my.kb.length>1){e=b.qk;b=a.my;if(0>=b.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}c=b.kb.charCodeAt(0);b=a.my;if(1>=b.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}if(e==(((c&1023)<<10|
b.kb.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.my;if(0>=d.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}b:{c:{if(!b.gg(d.kb.charCodeAt(0))){if(a.my.kb.length<=1)break c;d=a.my;if(0>=d.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}c=d.kb.charCodeAt(0);d=a.my;if(1>=d.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}if(!b.gg(((c&1023)<<10|d.kb.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AQ8=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.my;f=a.k4-1|0;if(f>=0&&f<e.kb.length){g=e.kb.charCodeAt(f);a:{b:{c:{while(true){f=a.k4;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.kb.length)break c;h=b.kb.charCodeAt(f);if(h==g){f=0;d:{while(f<a.k4){i=f+c|0;if(i<0)break a;if(i>=b.kb.length)break a;j=b.kb.charCodeAt(i);e=a.my;if(f<0)break b;if(f>=e.kb.length)break b;if(j!=e.kb.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+SY(a.ui,h)|0;}return c;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd
=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);},
APV=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.my;if(0>=e.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}f=e.kb.charCodeAt(0);g=(b.kb.length-d|0)-a.k4|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.kb.length)break c;h=b.kb.charCodeAt(d);if(h==f){g=0;d:{while(g<a.k4){i=g+d|0;if(i<0)break a;if(i>=b.kb.length)break a;j=b.kb.charCodeAt(i);e=a.my;if(g<0)break b;if(g>=e.kb.length)break b;if(j!=e.kb.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-SY(a.uT,h)|0;}return d;}b=new Y;b.kc=1;b.kd
=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);};
function Om(){CF.call(this);this.rR=null;}
let AJj=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.rR.kb.length)return a.rR.kb.length;e=a.rR;if(d<0)break a;if(d>=e.kb.length)break a;f=e.kb.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.kb.length)break b;h=c.kb.charCodeAt(g);if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}h=CD(B0,h)&65535;if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}if(f!=(CD(B1,h)&65535))break;d=d+1|0;}return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd
=1;B(c);},
AGe=a=>{let b,c,d,e,f,g,h;b=a.rR;c=new K;c.ka=G(16);E(c,c.j_,A(420));d=c.j_;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){b.kb=L(e.data,0,g);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
function OV(){CF.call(this);this.qI=null;}
let AOV=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.qI.kb.length)return a.qI.kb.length;e=a.qI;if(d<0)break c;if(d>=e.kb.length)break c;f=e.kb.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.kb.length)break d;if(f!=c.kb.charCodeAt(g)){e=a.qI;if(d<0)break a;if(d>=e.kb.length)break a;h=Gt(e.kb.charCodeAt(d));if(g<0)break b;if(g>=c.kb.length)break b;if(h!=c.kb.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=
1;c.kd=1;B(c);},
AQG=a=>{let b,c,d,e,f,g,h;b=a.qI;c=new K;c.ka=G(16);E(c,c.j_,A(421));d=c.j_;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){b.kb=L(e.data,0,g);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
let AT9=F();
function Ok(){CF.call(this);this.uE=0;}
let AOZ=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.kb.length){e=c.kb.charCodeAt(b);if(d>=0&&d<c.kb.length){d=c.kb.charCodeAt(d);b=a.uE;d=((e&1023)<<10|d&1023)+65536|0;if(B0===null){if(BK===null)BK=Ea();B0=CA(CG((BK.value!==null?W(BK.value):null)));}d=CD(B0,d);if(B1===null){if(BL===null)BL=D$();B1=CA(CG((BL.value!==null?W(BL.value):null)));}return b!=CD(B1,d)?(-1):2;}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);},
ATK=a=>{let b,c,d,e,f,g;b=new I;c=Fj(a.uE);b.kb=L(c.data,0,c.data.length);d=new K;d.ka=G(16);E(d,d.j_,A(401));E(d,d.j_,b);b=new I;c=d.ka;e=c.data;f=d.j_;g=e.length;if(f>=0&&f<=(g-0|0)){b.kb=L(c.data,0,f);return b;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
function H3(){Cr.call(this);this.pg=0;}
let AL$=(a,b)=>{a.km=b;},
Lc=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.kZ){d.m3=1;return (-1);}if(b>=0&&b<c.kb.length){a:{f=c.kb.charCodeAt(b);if(b>d.nb){b=b-1|0;if(b>=0&&b<c.kb.length){if(!((c.kb.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);}}if(a.pg!=f)return (-1);return a.km.fJ(e,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);},
AFY=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof I)){e=d.kZ;a:{while(true){if(b>e){b=(-1);break a;}if(Lc(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.nb;g=d.kZ;b:{while(true){if(b>=g)return (-1);h=H8(c,a.pg,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.kb.length)break b;if((c.kb.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.km;b=h+1|0;if(i.fJ(b,c,d)>=0)break;}return h;}c=new Y;c.kc=1;c.kd=1;B(c);},
ACL=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(Lc(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.nb;b:{c:{while(true){if(c<b)return (-1);g=Fa(d,a.pg,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.kb.length)break b;if((d.kb.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.km.fJ(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Y;d.kc=1;d.kd=1;B(d);},
AP7=a=>{let b,c,d,e,f,g,h;b=a.pg;c=new K;c.ka=G(16);d=c.j_;Bj(c,d,d+1|0);e=c.ka;f=e.data;f[d]=b;g=new I;d=c.j_;h=f.length;if(d>=0&&d<=(h-0|0)){g.kb=L(e.data,0,d);return g;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
Yd=(a,b)=>{if(b instanceof Er)return 0;if(b instanceof Ev)return 0;if(b instanceof D7)return 0;if(b instanceof EL)return 0;if(b instanceof H9)return 0;if(!(b instanceof H3))return 1;return b.pg!=a.pg?0:1;},
AQk=(a,b)=>{return 1;};
function H9(){Cr.call(this);this.o3=0;}
let AAS=(a,b)=>{a.km=b;},
Kt=(a,b,c,d)=>{let e,f,g;e=d.kZ;f=b+1|0;e=BW(f,e);if(e>0){d.m3=1;return (-1);}if(b>=0&&b<c.kb.length){a:{g=c.kb.charCodeAt(b);if(e<0){if(f>=0&&f<c.kb.length){if(!((c.kb.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);}}if(a.o3!=g)return (-1);return a.km.fJ(f,c,d);}c=new Y;c.kc=1;c.kd=1;B(c);},
AMM=(a,b,c,d)=>{let e,f;if(!(c instanceof I)){e=d.kZ;a:{while(true){if(b>e){b=(-1);break a;}if(Kt(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.kZ;b:{while(true){if(b>=e)return (-1);f=H8(c,a.o3,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.kb.length)break b;if((c.kb.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.km.fJ(b,c,d)>=0)break;}return f;}c=new Y;c.kc=1;c.kd=1;B(c);},
AOU=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(Kt(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.kZ;b:{c:{while(true){if(c<b)return (-1);g=Fa(d,a.o3,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.kb.length)break b;if((d.kb.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.km.fJ(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Y;d.kc=1;d.kd=1;B(d);},
AST=a=>{let b,c,d,e,f,g,h;b=a.o3;c=new K;c.ka=G(16);d=c.j_;Bj(c,d,d+1|0);e=c.ka;f=e.data;f[d]=b;g=new I;d=c.j_;h=f.length;if(d>=0&&d<=(h-0|0)){g.kb=L(e.data,0,d);return g;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
ACB=(a,b)=>{if(b instanceof Er)return 0;if(b instanceof Ev)return 0;if(b instanceof D7)return 0;if(b instanceof EL)return 0;if(b instanceof H3)return 0;if(!(b instanceof H9))return 1;return b.o3!=a.o3?0:1;},
AMY=(a,b)=>{return 1;};
function EL(){let a=this;CF.call(a);a.qa=0;a.pJ=0;a.qk=0;}
let AN8=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.kb.length){e=c.kb.charCodeAt(b);if(d>=0&&d<c.kb.length){d=c.kb.charCodeAt(d);return a.qa==e&&a.pJ==d?2:(-1);}c=new Y;c.kc=1;c.kd=1;B(c);}c=new Y;c.kc=1;c.kd=1;B(c);},
AKT=(a,b,c,d)=>{let e,f,g,h;if(c instanceof I){e=d.kZ;a:{while(b<e){b=H8(c,a.qa,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.kb.length)break a;f=c.kb.charCodeAt(b);if(a.pJ==f&&a.km.fJ(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Y;c.kc=1;c.kd=1;B(c);}g=d.kZ;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.k4|0)>d.kZ){d.m3=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.kb.length)break b;e=c.kb.charCodeAt(b);if(h<0)break c;if(h>=c.kb.length)break c;f=c.kb.charCodeAt(h);h
=a.qa==e&&a.pJ==f?2:(-1);h=h<0?(-1):a.km.fJ(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new Y;U(c);B(c);}c=new Y;U(c);B(c);},
AAQ=(a,b,c,d,e)=>{let f,g,h;if(d instanceof I){a:{b:{while(true){if(c<b)return (-1);c=Fa(d,a.pJ,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.qa;if(c<0)break a;if(c>=d.kb.length)break a;if(f==d.kb.charCodeAt(c)&&a.km.fJ(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Y;d.kc=1;d.kd=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.k4|0)>e.kZ){e.m3=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.kb.length)break c;h=d.kb.charCodeAt(c);if(g<0)break d;if(g>=d.kb.length)break d;g=d.kb.charCodeAt(g);f
=a.qa==h&&a.pJ==g?2:(-1);f=f<0?(-1):a.km.fJ(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Y;U(d);B(d);}d=new Y;U(d);B(d);},
ARv=a=>{let b,c,d,e,f,g,h;b=a.qa;c=a.pJ;d=new K;d.ka=G(16);e=d.j_;Bj(d,e,e+1|0);d.ka.data[e]=b;b=d.j_;Bj(d,b,b+1|0);f=d.ka;g=f.data;g[b]=c;h=new I;c=d.j_;e=g.length;if(c>=0&&c<=(e-0|0)){h.kb=L(f.data,0,c);return h;}d=new H;d.kc=1;d.kd=1;Bk(d);B(d);},
ANK=(a,b)=>{if(b instanceof EL)return b.qk!=a.qk?0:1;if(b instanceof D7)return b.gg(a.qk);if(b instanceof Er)return 0;if(!(b instanceof Ev))return 1;return 0;};
let JT=F(H1);
let AA4=(a,b)=>{return b!=10?0:1;},
ANU=(a,b,c)=>{return b!=10?0:1;};
let JU=F(H1);
let APd=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
ASk=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function Un(){let a=this;C.call(a);a.vK=null;a.tR=null;a.rs=0;a.yu=0;}
let AHe=(a,b)=>{let c,d;while(true){c=a.rs;if(b<c)break;a.rs=c<<1|1;}d=c<<1|1;a.rs=d;d=d+1|0;a.vK=Ba(d);a.tR=Ba(d);a.yu=b;},
Tt=a=>{let b=new Un();AHe(b,a);return b;},
RT=(a,b,c)=>{let d,e,f,g;d=0;e=a.rs;f=b&e;while(true){g=a.vK.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.tR.data[f]=c;},
SY=(a,b)=>{let c,d,e,f;c=a.rs;d=b&c;e=0;while(true){f=a.vK.data[d];if(!f)break;if(f==b)return a.tR.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.yu;};
let JC=F(Bx);
let AGq=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return Db(BU(b,9,13),32);};
let I2=F(Bx);
let AJb=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(b,48,57);};
let T$=F(Bx);
let AOF=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(b,97,122);};
let UM=F(Bx);
let AQl=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(b,65,90);};
let UR=F(Bx);
let ADv=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(b,0,127);};
let Jw=F(Bx);
let ABB=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(BU(b,97,122),65,90);};
let JQ=F(Jw);
let AEv=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(BU(BU(b,97,122),65,90),48,57);};
let WD=F(Bx);
let AFX=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(BU(BU(b,33,64),91,96),123,126);};
let Ko=F(JQ);
let W6=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(BU(BU(BU(BU(BU(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let Sb=F(Ko);
let AJZ=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return Db(BU(BU(BU(BU(BU(BU(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let SE=F(Bx);
let ACp=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return Db(Db(b,32),9);};
let Qw=F(Bx);
let AJR=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return Db(BU(b,0,31),127);};
let Qh=F(Bx);
let ASp=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(BU(BU(b,48,57),97,102),65,70);};
let UW=F(Bx);
let AK6=a=>{let b,c;b=new S7;b.z0=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let WL=F(Bx);
let Xf=a=>{let b,c;b=new Ov;b.z5=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let Um=F(Bx);
let AGR=a=>{let b,c;b=new St;b.zE=a;c=new Bn;c.ku=Ba(64);b.ky=c;return b;};
let T2=F(Bx);
let AOa=a=>{let b,c;b=new Ss;b.zu=a;c=new Bn;c.ku=Ba(64);b.ky=c;return b;};
let Vl=F(Bx);
let ACn=a=>{let b,c;b=new VR;b.Az=a;c=new Bn;c.ku=Ba(64);b.ky=c;Jf(c,0,2048);b.lx=1;return b;};
let Pe=F(Bx);
let ACW=a=>{let b,c;b=new P7;b.Ad=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let OQ=F(Bx);
let ASb=a=>{let b,c;b=new Pq;b.AS=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let Uu=F(Bx);
let W3=a=>{let b,c;b=new Ru;b.z1=a;c=new Bn;c.ku=Ba(64);b.ky=c;return b;};
let UG=F(Bx);
let AIl=a=>{let b,c;b=new Or;b.yF=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let QS=F(Bx);
let AC$=a=>{let b,c;b=new Ou;b.Ag=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let SJ=F(Bx);
let AE5=a=>{let b,c;b=new Pi;b.Ay=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let Wf=F(Bx);
let AIq=a=>{let b,c;b=new Qo;b.AL=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let UD=F(Bx);
let AQN=a=>{let b,c;b=new Qt;b.zF=a;c=new Bn;c.ku=Ba(64);b.ky=c;return b;};
let RC=F(Bx);
let AM_=a=>{let b,c;b=new TA;b.Ai=a;c=new Bn;c.ku=Ba(64);b.ky=c;return b;};
let QR=F(Bx);
let AKW=a=>{let b,c;b=new SR;b.yK=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let WH=F(Bx);
let AOt=a=>{let b,c;b=new OH;b.A1=a;c=new Bn;c.ku=Ba(64);b.ky=c;b.lx=1;return b;};
let IL=F(Bx);
let AIP=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return Db(BU(BU(BU(b,97,122),65,90),48,57),95);};
let Vq=F(IL);
let AKu=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;b=E4(Db(BU(BU(BU(b,97,122),65,90),48,57),95),1);b.lx=1;return b;};
let Se=F(JC);
let ZS=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;b=E4(Db(BU(b,9,13),32),1);b.lx=1;return b;};
let QM=F(I2);
let AFM=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;b=E4(BU(b,48,57),1);b.lx=1;return b;};
function Bv(){let a=this;Bx.call(a);a.kG=0;a.kH=0;}
let AR_=(a,b,c)=>{a.kG=b;a.kH=c;},
BI=(a,b)=>{let c=new Bv();AR_(c,a,b);return c;},
AIT=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(b,a.kG,a.kH);};
let QI=F(Bx);
let ARY=a=>{let b,c;b=new CN;c=new Bn;c.ku=Ba(64);b.ky=c;c=new Bn;c.ku=Ba(2);b.kB=c;return BU(BU(b,65279,65279),65520,65533);};
function L4(){let a=this;Bx.call(a);a.vk=0;a.tK=0;a.wq=0;}
let ABL=(a,b,c)=>{a.tK=c;a.vk=b;},
Ch=(a,b)=>{let c=new L4();ABL(c,a,b);return c;},
ASa=(a,b,c,d)=>{a.wq=d;a.tK=c;a.vk=b;},
AIM=(a,b,c)=>{let d=new L4();ASa(d,a,b,c);return d;},
AEe=a=>{let b,c,d;b=new Ke;c=a.vk;d=new Bn;d.ku=Ba(64);b.ky=d;b.tc=c;if(a.wq)Jf(d,0,2048);b.lx=a.tK;return b;};
function L_(){let a=this;Bx.call(a);a.vi=0;a.tT=0;a.v6=0;}
let AC_=(a,b,c)=>{a.tT=c;a.vi=b;},
Ha=(a,b)=>{let c=new L_();AC_(c,a,b);return c;},
W5=(a,b,c,d)=>{a.v6=d;a.tT=c;a.vi=b;},
AGO=(a,b,c)=>{let d=new L_();W5(d,a,b,c);return d;},
W4=a=>{let b,c,d;b=new Si;c=a.vi;d=new Bn;d.ku=Ba(64);b.ky=d;b.tc=c;if(a.v6)Jf(d,0,2048);b.lx=a.tT;return b;};
let Eh=F(BA);
let YJ=F();
let ACC=F();
let AAL=F();
let ASD=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new Ng;d=G(b.kb.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.ua=d;f=Gp(c);d=Ba(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=Gp(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=Gp(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.kb.length)break;e[f]=b.kb.charCodeAt(f);f=f+1|0;}b=new Y;b.kc=1;b.kd=1;B(b);},
CG=b=>{let c,d,e,f,g,h,i,j,k,l;c=new Ng;d=G(b.kb.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.ua=d;f=Gp(c);d=Ba(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+Gp(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=Gp(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.kb.length)break;e[f]=b.kb.charCodeAt(f);f=f+1|0;}b=new Y;b.kc=1;b.kd=1;B(b);},
CA=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=Ba(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bl;l.kc=1;l.kd=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new U0;l.w7=b;l.xi=c;return l;},
Jn=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
AT4=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=R(IK,16384);d=c.data;e=BN(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.kb.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BD;b.ks=j;k=b;j.classObject=k;}}b=EA(b);if(b===null){b=new Ds;b.kc=1;b.kd=1;B(b);}if(b===M(Bp)){b=new Bl;b.kc=1;b.kd=1;B(b);}if(g<0){b=new Eh;b.kc=1;b.kd=1;B(b);}k=Ee(b.ks,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.kb.length)break c;l=Jn(b.kb.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.kb.length)break b;l=Jn(b.kb.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.kb.length)break a;m=m|Dy(n,Jn(b.kb.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.kb.length)break;m=Jn(b.kb.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new IK;l=h+f|0;q=BN(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.up=h;j.uQ=l;j.ut=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new IK;t=h+f|0;q=BN(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.up=h;j.uQ=t;j.ut=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);}b=new Y;b.kc=1;b.kd=1;B(b);};
function U0(){let a=this;C.call(a);a.w7=null;a.xi=null;}
function IK(){let a=this;C.call(a);a.up=0;a.uQ=0;a.ut=null;}
function Ng(){let a=this;C.call(a);a.ua=null;a.wX=0;}
let AFU=F();
let Gp=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.ua.data;f=b.wX;b.wX=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Dy(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AOG=F();
function Q5(){let a=this;DW.call(a);a.wk=null;a.wj=0;a.rg=null;}
let APQ=(a,b)=>{return;},
ADc=(a,b)=>{let c,d,e,f,g,h;if(BX===null){b=new C3;c=new Cu;c.l4=BN(32);b.mm=c;c=new K;Bu(c);c.ka=G(16);b.l7=c;b.l6=G(32);b.l8=0;b.l9=Co;BX=b;}b=a.wk;c=new K;c.ka=G(16);E(c,c.j_,A(422));d=c.j_;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){b.kb=L(e.data,0,g);B2(Bz(b));B2("\n");return;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
YW=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(KM(I8(A(117),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.rg;b.uF=b.sG.ke;if(a.wj){e=0;while(true){b=a.rg;c=b.sG;f=BW(e,c.ke);if(f>=0)break a;if(f>=0){g=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,e,10);E(b,b.j_,A(19));e=c.ke;J(b,b.j_,e,10);c=new I;d=b.ka;h=d.data;f=b.j_;i=h.length;if(f>=0&&f<=(i-0|0)){c.kb=L(d.data,0,f);g.kc=1;g.kd=1;g.kf=c;B(g);}b=new H;U(b);B(b);}AGk(b,c.ki.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(KM(I8(A(115),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AH7(h[1]);b=h[2];if(b===null){b=new CC;b.kc=1;b.kd=1;b.kf=A(84);B(b);}m=AQd(b,0,b.kb.length,10);n=h[3];o=F3;if(k===A(423))i=1;else if(!(A(423) instanceof I))i=0;else{b=A(423);i=k.kb!==b.kb?0:1;}if(i)o=FT;if(k===A(424))i=1;else if(!(A(424) instanceof I))i=0;else{b=A(424);i=k.kb!==b.kb?0:1;}if(i)o=FH;if(k===A(425))i=1;else if(!(A(425) instanceof I))i=0;else{b=A(425);i=k.kb!==b.kb?0:1;}if(i)o=Fy;if(k===A(233))i=1;else if(!(A(233) instanceof I))i=0;else{b=A(233);i=k.kb!==b.kb?0:1;}if(i)o=Kb;if
(o===Fy&&!GO.xY)m=Ce;g=new SU;g.ux=l;g.ww=o;g.yc=m;g.wm=n;Ci(a.rg.wM,l,l);S(a.rg.sG,g);f=f+1|0;}b=new T;b.kc=1;b.kd=1;b.kf=A(426);B(b);},
AKH=(a,b,c)=>{return YW(a,b,c);};
let CW=F(BH);
let AA6=null,ALc=null,ACj=null,ACi=null,ABa=null,AAP=null,AAc=null,AB8=null,ZT=null,AHO=null;
let IV=()=>{IV=BR(CW);YA();};
let YA=()=>{let b,c,d,e,f,g,h,i,j;b=new Ve;IV();b.kt=A(427);b.kn=0;AA6=b;c=new Vf;c.kt=A(428);c.kn=1;ALc=c;d=new Vj;d.kt=A(429);d.kn=2;ACj=d;e=new Vk;e.kt=A(430);e.kn=3;ACi=e;f=new Vh;f.kt=A(431);f.kn=4;ABa=f;g=new Vi;g.kt=A(432);g.kn=5;AAP=g;h=new Vc;h.kt=A(433);h.kn=6;AAc=h;i=new Vd;i.kt=A(434);i.kn=7;AB8=i;j=new Va;j.kt=A(435);j.kn=8;ZT=j;AHO=V(CW,[b,c,d,e,f,g,h,i,j]);};
function F2(){let a=this;HV.call(a);a.pQ=0;a.ny=null;}
let ATj=F(0);
let AAl=b=>{let c,d;if(b===A(436))c=1;else if(!(A(436) instanceof I))c=0;else{d=A(436);c=b.kb!==d.kb?0:1;}a:{if(!c){if(b===A(437))c=1;else if(!(A(437) instanceof I))c=0;else{d=A(437);c=b.kb!==d.kb?0:1;}if(!c){if(b===A(438))c=1;else if(!(A(438) instanceof I))c=0;else{d=A(438);c=b.kb!==d.kb?0:1;}if(!c){if(b===A(439))c=1;else if(!(A(439) instanceof I))c=0;else{d=A(439);c=b.kb!==d.kb?0:1;}if(!c){if(b===A(440))c=1;else if(!(A(440) instanceof I))c=0;else{d=A(440);c=b.kb!==d.kb?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AGt=b=>{let c,d;if(b===A(441))c=1;else if(!(A(441) instanceof I))c=0;else{d=A(441);c=b.kb!==d.kb?0:1;}a:{b:{if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof I))c=0;else{d=A(442);c=b.kb!==d.kb?0:1;}if(c)break b;if(b===A(443))c=1;else if(!(A(443) instanceof I))c=0;else{d=A(443);c=b.kb!==d.kb?0:1;}if(c)break b;if(b===A(444))c=1;else if(!(A(444) instanceof I))c=0;else{d=A(444);c=b.kb!==d.kb?0:1;}if(c)break b;if(b===A(445))c=1;else if(!(A(445) instanceof I))c=0;else{d=A(445);c=b.kb!==d.kb?0:1;}if(c)break b;if
(b===A(446))c=1;else if(!(A(446) instanceof I))c=0;else{d=A(446);c=b.kb!==d.kb?0:1;}if(c)break b;if(b===A(447))c=1;else if(!(A(447) instanceof I))c=0;else{d=A(447);c=b.kb!==d.kb?0:1;}if(c)break b;if(b===A(448))c=1;else if(!(A(448) instanceof I))c=0;else{d=A(448);c=b.kb!==d.kb?0:1;}if(c)break b;if(b===A(449))c=1;else if(!(A(449) instanceof I))c=0;else{d=A(449);c=b.kb!==d.kb?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let Ua=F(0);
let QF=F();
let AR5=(a,b,c)=>{a.gN(W(b),DH(c,"handleEvent"));},
ALh=(a,b)=>{return !!a.gO(b);},
AAT=(a,b,c)=>{a.gP(W(b),DH(c,"handleEvent"));},
AHI=(a,b,c,d)=>{a.gQ(W(b),DH(c,"handleEvent"),d?1:0);},
APn=(a,b,c,d)=>{a.gR(W(b),DH(c,"handleEvent"),d?1:0);};
function MS(){let a=this;C.call(a);a.uo=null;a.vP=null;a.sx=null;a.vT=0;a.tl=null;}
let ALu=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.uo;if(e!==FH&&e!==Fy){if(e===FT){b=window.document.createElement("img");d=Bz(W(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new II;d.nT=c;d.u1=e;d.vb=b;}else if(e===F3)d=W(c.result);}else{e=c.result;b=new Int8Array(e);d=new II;d.nT=b;d.u1=e;}if(d!==null){Hn(a.tl.wo,a.uo,a.vP,d);S(a.sx,a.vP);if(a.sx.ke==a.vT){b=a.tl.wa;d=new OK;d.uM=a;S(b.r4,d);}}},
AJt=(a,b)=>{ALu(a,b);};
function FK(){BH.call(this);this.r0=null;}
let FT=null,Fy=null,F3=null,FH=null,Kb=null,NV=null;
let ALF=()=>{let b,c,d,e,f;b=new FK;b.kt=A(450);b.kn=0;b.r0=A(423);FT=b;c=new FK;c.kt=A(451);c.kn=1;c.r0=A(425);Fy=c;d=new FK;d.kt=A(452);d.kn=2;d.r0=A(453);F3=d;e=new FK;e.kt=A(454);e.kn=3;e.r0=A(424);FH=e;f=new FK;f.kt=A(455);f.kn=4;f.r0=A(233);Kb=f;NV=V(FK,[b,c,d,e,f]);};
let AGL=F();
let Ls=null,Pt=null;
let APZ=b=>{let c,d,e,f,g,h,i,j,k,l;c=new K;c.ka=G(16);d=AOs();e=0;f=Pt.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.j_;if(i>0){Bj(c,i,i+1|0);c.ka.data[i]=32;}j=d.data[e];E(c,c.j_,j);}e=e+1|0;h=h+1|0;}j=new I;d=c.ka;k=d.data;e=c.j_;l=k.length;if(e>=0&&e<=(l-0|0)){j.kb=L(d.data,0,e);return j;}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
AOs=()=>{if(Ls===null)Ls=V(I,[A(456),A(457),A(458),A(459),A(460),A(461),A(462),A(463),A(464),A(465),A(466),A(467)]);return Ls;},
Yw=()=>{Pt=IT([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let R5=F(0);
function HY(){let a=this;M5.call(a);a.lU=null;a.zA=null;a.rX=0;a.sX=0;a.pd=null;a.vp=null;}
let Zs=a=>{let b,c,d,e,f,g,h;b=new K;b.ka=G(16);c=APZ(Lr(a.rX,a.sX));E(b,b.j_,c);d=b.j_;if(d>0){Bj(b,d,d+1|0);b.ka.data[d]=32;}c=a.lU;if(c.kl===null)c.kl=W(c.ks.$meta.name);c=c.kl;E(b,b.j_,c);d=b.j_;Bj(b,d,d+1|0);b.ka.data[d]=40;e=a.pd.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.j_;Bj(b,h,h+1|0);b.ka.data[h]=44;}c=g[f];if(c.kl===null)c.kl=W(c.ks.$meta.name);c=c.kl;E(b,b.j_,c);f=f+1|0;}d=b.j_;Bj(b,d,d+1|0);g=b.ka;e=g.data;e[d]=41;c=new I;d=b.j_;h=e.length;if(d>=0&&d<=(h-0|0)){c.kb=L(g.data,
0,d);return c;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
APp=(a,b)=>{let c,d,e,f,g;if(a.rX&1){c=new MQ;c.kc=1;c.kd=1;B(c);}if(a.vp===null){c=new Kr;c.kc=1;c.kd=1;B(c);}d=b.data;e=d.length;if(e!=a.pd.data.length){c=new Bl;c.kc=1;c.kd=1;B(c);}f=0;while(f<e){if(!(a.pd.data[f].ks.$meta.primitive?1:0)&&d[f]!==null){c=a.pd.data[f];g=d[f];c=c.ks;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MP(g.constructor,c)?1:0)){c=new Bl;c.kc=1;c.kd=1;B(c);}}if((a.pd.data[f].ks.$meta.primitive?1:0)&&d[f]===null){c=new Bl;c.kc=1;c.kd=1;B(c);}f=f+1|0;}c=b.data;g=new(a.lU.ks);a.vp.call(g,
c);return g;};
let Y=F(H);
function Vx(){let a=this;Bq.call(a);a.wd=null;a.AE=null;}
let ADE=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.mM^CM(a.wd,c):0;};
function Vw(){let a=this;Bq.call(a);a.x1=null;a.ye=null;a.Al=null;}
let XR=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.mM^CM(a.x1,c):0;return a.ye.gg(b)&&!d?1:0;};
function PJ(){let a=this;Bq.call(a);a.sN=null;a.yN=null;}
let AIC=(a,b)=>{return a.kT^CM(a.sN,b);},
AFl=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.ka=G(16);c=Iz(a.sN,0);while(c>=0){d=(Fj(c)).data;e=0;f=d.length;g=b.j_;Bj(b,g,g+f|0);f=f+e|0;while(e<f){h=b.ka.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.j_;Bj(b,g,g+1|0);b.ka.data[g]=124;c=Iz(a.sN,c+1|0);}e=b.j_;if(e>0)VH(b,e-1|0);k=new I;d=b.ka;h=d.data;e=b.j_;g=h.length;if(e>=0&&e<=(g-0|0)){k.kb=L(d.data,0,e);return k;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);};
function PQ(){let a=this;Bq.call(a);a.w1=null;a.z4=null;}
let AN$=(a,b)=>{return a.w1.gg(b);};
function PN(){let a=this;Bq.call(a);a.tL=0;a.wn=null;a.uv=null;}
let AOY=(a,b)=>{return !(a.tL^CM(a.uv.kB,b))&&!(a.tL^a.uv.n_^a.wn.gg(b))?0:1;};
function PO(){let a=this;Bq.call(a);a.tS=0;a.x6=null;a.u9=null;}
let AJi=(a,b)=>{return !(a.tS^CM(a.u9.kB,b))&&!(a.tS^a.u9.n_^a.x6.gg(b))?1:0;};
function PU(){let a=this;Bq.call(a);a.yp=0;a.x9=null;a.x3=null;a.y_=null;}
let AC0=(a,b)=>{return a.yp^(!a.x9.gg(b)&&!a.x3.gg(b)?0:1);};
function PV(){let a=this;Bq.call(a);a.w4=0;a.wZ=null;a.wR=null;a.AX=null;}
let WQ=(a,b)=>{return a.w4^(!a.wZ.gg(b)&&!a.wR.gg(b)?0:1)?0:1;};
function PS(){let a=this;Bq.call(a);a.wP=null;a.A0=null;}
let AFy=(a,b)=>{let c,d;c=a.wP;d=c.lD;return d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b);};
function PT(){let a=this;Bq.call(a);a.yb=null;a.zr=null;}
let AJk=(a,b)=>{let c,d;c=a.yb;d=c.lD;return (d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b))?0:1;};
function PW(){let a=this;Bq.call(a);a.xb=null;a.w0=0;a.xQ=null;}
let AQW=(a,b)=>{let c,d,e;c=a.xb;d=c.lD;e=d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b);return !e&&!(a.w0^CM(a.xQ.kB,b))?0:1;};
function PX(){let a=this;Bq.call(a);a.xv=null;a.xD=0;a.xm=null;}
let AB5=(a,b)=>{let c,d,e;c=a.xv;d=c.lD;e=d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b);return !e&&!(a.xD^CM(a.xm.kB,b))?1:0;};
function PI(){let a=this;Bq.call(a);a.xP=0;a.x5=null;a.yi=null;a.yS=null;}
let AT_=(a,b)=>{let c,d;a:{if(!(a.xP^a.x5.gg(b))){c=a.yi;d=c.lD;if(!(d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b))){b=0;break a;}}b=1;}return b;};
function Qc(){let a=this;Bq.call(a);a.yg=0;a.v2=null;a.v7=null;a.zn=null;}
let AFI=(a,b)=>{let c,d;a:{if(!(a.yg^a.v2.gg(b))){c=a.v7;d=c.lD;if(!(d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b))){b=1;break a;}}b=0;}return b;};
function PG(){let a=this;Bq.call(a);a.wD=null;a.zt=null;}
let AB2=(a,b)=>{let c,d;c=a.wD;d=c.lD;return d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b);};
function PH(){let a=this;Bq.call(a);a.wE=null;a.AU=null;}
let AEy=(a,b)=>{let c,d;c=a.wE;d=c.lD;return (d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b))?0:1;};
function PM(){let a=this;Bq.call(a);a.yo=null;a.xs=0;a.yB=null;}
let AHn=(a,b)=>{let c,d,e;c=a.yo;d=c.lD;e=d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b);return e&&a.xs^CM(a.yB.kB,b)?1:0;};
function PF(){let a=this;Bq.call(a);a.xI=null;a.w5=0;a.xr=null;}
let AQv=(a,b)=>{let c,d,e;c=a.xI;d=c.lD;e=d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b);return e&&a.w5^CM(a.xr.kB,b)?0:1;};
function PK(){let a=this;Bq.call(a);a.xR=0;a.wc=null;a.w3=null;a.y9=null;}
let AAe=(a,b)=>{let c,d;a:{if(a.xR^a.wc.gg(b)){c=a.w3;d=c.lD;if(d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b)){b=1;break a;}}b=0;}return b;};
function PL(){let a=this;Bq.call(a);a.xF=0;a.vY=null;a.xO=null;a.zy=null;}
let AMU=(a,b)=>{let c,d;a:{if(a.xF^a.vY.gg(b)){c=a.xO;d=c.lD;if(d!==null?c.kT^d.gg(b):c.kT^CM(c.kB,b)){b=0;break a;}}b=1;}return b;};
function IX(){let a=this;C.call(a);a.o7=null;a.u8=null;a.mz=null;a.nc=0;}
function GT(){let a=this;C.call(a);a.AY=null;a.oh=Ce;a.pb=Ce;a.nj=null;a.wx=null;a.n1=null;a.ni=0;a.oi=null;}
let Jq=null,B3=null,CY=0,EI=0,R7=null;
let AIB=a=>{let b,c,$$je;a:{b:{c:{d:{try{EI=EI+1|0;ANa(a);a.c4();}catch($$e){$$je=Bc($$e);if($$je instanceof DE){b=$$je;break d;}else{b=$$je;break c;}}b=a.nj;F$(b);e:{try{NR(b);DZ(b);break e;}catch($$e){$$je=Bc($$e);c=$$je;}DZ(b);B(c);}a.ni=0;EI=EI-1|0;b=Jq;if(B3!==b)B3=b;B3.pb=EE();break a;}try{Y5(AF3(a),a,b);break b;}catch($$e){$$je=Bc($$e);b=$$je;}}c=a.nj;F$(c);f:{try{NR(c);DZ(c);break f;}catch($$e){$$je=Bc($$e);b=$$je;}DZ(c);B(b);}a.ni=0;EI=EI-1|0;c=Jq;if(B3!==c)B3=c;B3.pb=EE();B(b);}b=a.nj;F$(b);g:{try
{NR(b);DZ(b);break g;}catch($$e){$$je=Bc($$e);c=$$je;}DZ(b);B(c);}a.ni=0;EI=EI-1|0;b=Jq;if(B3!==b)B3=b;B3.pb=EE();}},
ANa=b=>{if(B3!==b)B3=b;B3.pb=EE();},
AUb=()=>{return B3;},
Ln=b=>{let $p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQO(b);if(FO()){break _;}return;default:FC();}}Dp().s(b,$p);},
ACX=(b,c)=>{let d,e;d=B3;e=new Ps;e.yC=d;e.x2=c;e.AF=Nq(e,AVg(b,X(2147483647))?2147483647:Bm(b));d.wx=e;},
AF3=a=>{let b;b=a.AY;if(b!==null)return b;return R7;},
ZM=()=>{let b,c,d;b=new GT;c=null;b.nj=new C;b.ni=1;b.n1=A(468);b.oi=c;d=CY;CY=d+1|0;b.oh=X(d);Jq=b;B3=b;CY=1;EI=1;R7=new Su;},
AQO=b=>{let thread=Dp();let javaThread=Xh();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Kq(javaThread);thread.resume();};callback.g0=e=>{thread.attribute=AP$(e);Kq(javaThread);thread.resume();};callback=SD(callback);thread.suspend(()=>{try {ACX(b,callback);;}catch(N6){callback.g0(N6);}});return null;};
let BO=F(BA);
let I_=F(BA);
let AOd=F();
let Sv=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let AEC=F();
let Yb=F();
let Gr=F(0);
function Wp(){C.call(this);this.wS=null;}
let AQY=a=>{APg(a.wS);};
let Ve=F(CW);
let Vf=F(CW);
let Vj=F(CW);
let Vk=F(CW);
let Vh=F(CW);
let Vi=F(CW);
let Vc=F(CW);
let Vd=F(CW);
let Va=F(CW);
let OU=F(0);
let Su=F();
let Y5=(a,b,c)=>{let d;if(Du===null){b=new F0;d=new Cu;d.l4=BN(32);Bu(b);b.mm=d;d=new K;D1(d,16);b.l7=d;b.l6=G(32);b.l8=0;b.l9=Co;Du=b;}Kk(c,Du);};
let Rg=F();
let R4=F(0);
function RK(){C.call(this);this.qc=null;}
let SD=b=>{let c;c=new RK;c.qc=b;return c;},
AHQ=(a,b)=>{a.qc.e(b);},
ASL=(a,b)=>{a.qc.g0(b);};
function S6(){let a=this;C.call(a);a.wu=null;a.wv=null;a.ws=0;a.wt=null;}
let OR=F(GG);
let AEl=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.kZ;a:{while(true){if(b>f){b=e;break a;}g=a.lL;h=d.md.data;i=g*2|0;j=h[i];h[i]=b;e=a.nh.fJ(b,c,d);if(e>=0)break;i=a.lL;d.md.data[i*2|0]=j;b=b+1|0;}}return b;},
ATR=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.lL;h=e.md.data;i=g*2|0;j=h[i];h[i]=c;f=a.nh.fJ(c,d,e);if(f>=0)break;i=a.lL;e.md.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
ABF=a=>{return null;};
function S7(){Bq.call(this);this.z0=null;}
let ARi=(a,b)=>{return CZ(b)!=2?0:1;};
function Ov(){Bq.call(this);this.z5=null;}
let ZL=(a,b)=>{return CZ(b)!=1?0:1;};
function St(){Bq.call(this);this.zE=null;}
let Y6=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CZ(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function Ss(){Bq.call(this);this.zu=null;}
let AEb=(a,b)=>{return 0;};
function VR(){Bq.call(this);this.Az=null;}
let AG3=(a,b)=>{return !CZ(b)?0:1;};
function P7(){Bq.call(this);this.Ad=null;}
let ARl=(a,b)=>{return CZ(b)!=9?0:1;};
function Pq(){Bq.call(this);this.AS=null;}
let ALZ=(a,b)=>{return HO(b);};
function Ru(){Bq.call(this);this.z1=null;}
let AOk=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Or(){Bq.call(this);this.yF=null;}
let ATi=(a,b)=>{a:{b:{switch(CZ(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HO(b);}return b;};
function Ou(){Bq.call(this);this.Ag=null;}
let ACI=(a,b)=>{a:{b:{switch(CZ(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HO(b);}return b;};
function Pi(){Bq.call(this);this.Ay=null;}
let ARQ=(a,b)=>{a:{switch(CZ(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function Qo(){Bq.call(this);this.AL=null;}
let AJN=(a,b)=>{a:{b:{switch(CZ(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Qt(){Bq.call(this);this.zF=null;}
let ANw=(a,b)=>{a:{switch(CZ(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function TA(){Bq.call(this);this.Ai=null;}
let AQX=(a,b)=>{return CZ(b)!=3?0:1;};
function SR(){Bq.call(this);this.yK=null;}
let ASI=(a,b)=>{a:{b:{switch(CZ(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HO(b);}return b;};
function OH(){Bq.call(this);this.A1=null;}
let ACo=(a,b)=>{a:{b:{switch(CZ(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HO(b);}return b;};
function Ke(){Bq.call(this);this.tc=0;}
let AL4=(a,b)=>{return a.kT^(a.tc!=CZ(b&65535)?0:1);};
let Si=F(Ke);
let APE=(a,b)=>{return a.kT^(!(a.tc>>CZ(b&65535)&1)?0:1);};
function Y8(){let a=this;C.call(a);a.A9=0;a.A$=0;a.A7=0;a.A8=0;a.A6=null;}
function Ho(){let a=this;GT.call(a);a.pA=0;a.n5=null;a.oj=null;a.n9=null;}
let AMg=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Ne;c.ov=a;c.qQ=b;c=B8(c,"handleEvent");b.onreadystatechange=c;c=a.n9;d=a.oj;e=new Hp;e.vu=c;e.sz=d;c=B8(e,"handleEvent");b.onprogress=c;d=a.n5;f=a.pA;b.open("GET",Bz(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let OI=F();
let Ub=null;
let MO=()=>{MO=BR(OI);AOS();};
let AOS=()=>{let b,c;b=Ba((U7.p()).data.length);c=b.data;Ub=b;c[NL.kn]=1;c[Jz.kn]=2;};
let Vr=F();
let AIN=(a,b,c)=>{a.eR(W(b),DH(c,"handleEvent"));},
AJQ=(a,b,c)=>{a.eS(W(b),DH(c,"handleEvent"));},
Xt=(a,b,c,d)=>{a.eT(W(b),DH(c,"handleEvent"),d?1:0);},
XH=(a,b)=>{return !!a.eU(b);},
AFC=(a,b,c,d)=>{a.eW(W(b),DH(c,"handleEvent"),d?1:0);};
let Hr=F(0);
function KA(){let a=this;C.call(a);a.pM=null;a.uC=0;a.s0=null;a.vj=null;a.q5=null;}
let ASP=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pM.readyState==4){if(a.pM.status==200){if(a.q5.m8){if(BX===null){b=new C3;c=new Cu;c.l4=BN(32);b.mm=c;c=new K;Bu(c);c.ka=G(16);b.l7=c;b.l6=G(32);b.l8=0;b.l9=Co;BX=b;}b=a.s0;c=new K;c.ka=G(16);E(c,c.j_,A(469));d=c.j_;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g
>=0&&g<=(h-0|0)){b.kb=L(e.data,0,g);B2(Bz(b));B2("\n");}else{b=new H;b.kc=1;b.kd=1;Bk(b);B(b);}}c=a.pM.response;Fh();i=Gs.nO.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);W(a.pM.responseText);}else if(a.pM.status!=404&&a.pM.status!=403){try{k=X(100);$p=1;continue _;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}N3(a.q5,a.uC,a.s0,a.vj);}b=a.q5;b.lt=b.lt-1|0;}return;case 1:a:{try{Ln(k);if(FO()){break _;}break a;}catch($$e){$$je=Bc($$e);if($$je instanceof DE)
{}else{throw $$e;}}}N3(a.q5,a.uC,a.s0,a.vj);b=a.q5;b.lt=b.lt-1|0;return;default:FC();}}Dp().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AHa=(a,b)=>{let $p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ASP(a,b);if(FO()){break _;}return;default:FC();}}Dp().s(a,b,$p);};
let AKm=F();
let CI=0;
function Cx(){let a=this;C.call(a);a.lb=null;a.me=0;a.lZ=0;a.k5=0;}
let AKB=(a,b,c)=>{a.k5=1;a.lb=b;a.me=c;},
Mo=(a,b)=>{let c=new Cx();AKB(c,a,b);return c;},
HU=a=>{let b;if(a.k5)return a.lZ>=a.lb.ke?0:1;b=new T;b.kc=1;b.kd=1;b.kf=A(17);B(b);},
Cq=a=>{let b,c,d,e,f,g,h;b=a.lZ;c=a.lb;if(b<c.ke){if(a.k5){d=c.ki.data;a.lZ=b+1|0;return d[b];}c=new T;c.kc=1;c.kd=1;c.kf=A(17);B(c);}c=new WB;e=new K;e.ka=G(16);J(e,e.j_,b,10);f=new I;d=e.ka;g=d.data;b=e.j_;h=g.length;if(b>=0&&b<=(h-0|0)){f.kb=L(d.data,0,b);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;c.kc=1;c.kd=1;B(c);};
function C7(){let a=this;C.call(a);a.mq=null;a.mt=0;a.uY=null;a.uZ=null;}
let AM9=(a,b)=>{a.mq=b;a.mt=1;},
N2=a=>{let b=new C7();AM9(b,a);return b;},
ATT=(a,b,c)=>{a.mq=b;a.mt=c;},
LZ=(a,b)=>{let c=new C7();ATT(c,a,b);return c;},
CQ=a=>{let b,c,d;if(CI){b=new Cx;c=a.mq;d=a.mt;b.k5=1;b.lb=c;b.me=d;return b;}if(a.uY===null){b=new Cx;c=a.mq;d=a.mt;b.k5=1;b.lb=c;b.me=d;a.uY=b;b=new Cx;b.k5=1;b.lb=c;b.me=d;a.uZ=b;}b=a.uY;if(b.k5){c=a.uZ;c.lZ=0;c.k5=1;b.k5=0;return c;}b.lZ=0;b.k5=1;a.uZ.k5=0;return b;};
function II(){let a=this;C.call(a);a.u1=null;a.nT=null;a.vb=null;}
let AN_=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.nT.length;c=new K;c.ka=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new I;f=c.ka;g=f.data;b=c.j_;h=g.length;if(b>=0&&b<=(h-0|0)){e.kb=L(f.data,0,b);return e;}e=new H;e.kc=1;e.kd=1;Bk(e);B(e);}i=b-d|0;if(i>=3){j=(((a.nT[d]&255)<<16)+((a.nT[d+1|0]&255)<<8)|0)+(a.nT[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(470).kb.length)break f;h=A(470).kb.charCodeAt(h);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(470).kb.length)break g;h
=A(470).kb.charCodeAt(h);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(470).kb.length)break h;h=A(470).kb.charCodeAt(h);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;i=j&63;if(i<0)break;if(i>=A(470).kb.length)break;h=A(470).kb.charCodeAt(i);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;}else if(i<2){j=(a.nT[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(470).kb.length)break d;h=A(470).kb.charCodeAt(h);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(470).kb.length)break e;h=A(470).kb.charCodeAt(h);i
=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;E(c,c.j_,A(471));}else{k=((a.nT[d]&255)<<16)+((a.nT[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(470).kb.length)break a;h=A(470).kb.charCodeAt(h);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(470).kb.length)break b;h=A(470).kb.charCodeAt(h);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(470).kb.length)break c;h=A(470).kb.charCodeAt(h);i=c.j_;Bj(c,i,i+1|0);c.ka.data[i]=h;E(c,c.j_,A(472));}d=d+3|0;}e=new Y;e.kc=1;e.kd=1;B(e);}e
=new Y;e.kc=1;e.kd=1;B(e);}e=new Y;e.kc=1;e.kd=1;B(e);}e=new Y;e.kc=1;e.kd=1;B(e);}e=new Y;e.kc=1;e.kd=1;B(e);}e=new Y;e.kc=1;e.kd=1;B(e);}e=new Y;e.kc=1;e.kd=1;B(e);}e=new Y;e.kc=1;e.kd=1;B(e);}e=new Y;e.kc=1;e.kd=1;B(e);};
function OK(){C.call(this);this.uM=null;}
let Wr=F(0);
let Th=F(0);
let T9=F(0);
let HQ=F();
let E8=a=>{return;};
function IN(){HQ.call(this);this.mm=null;}
let Gl=(a,b)=>{a.mm=b;},
AXP=a=>{let b=new IN();Gl(b,a);return b;};
function I$(){let a=this;IN.call(a);a.l8=0;a.l7=null;a.l6=null;a.l9=null;}
let VL=(a,b,c)=>{a.mm=b;b=new K;b.ka=G(16);a.l7=b;a.l6=G(32);a.l8=c;a.l9=Co;},
AWD=(a,b)=>{let c=new I$();VL(c,a,b);return c;};
let HK=F(I$);
let C3=F(HK);
let AHp=(a,b)=>{B2(Bz(b));};
function Hp(){let a=this;C.call(a);a.sz=null;a.vu=null;}
let ALm=(a,b)=>{a.sz.g3(b.loaded);};
let ZZ=F();
function Cu(){HQ.call(this);this.l4=null;}
let ZG=(a,b)=>{a.l4=BN(b);},
AQo=a=>{let b=new Cu();ZG(b,a);return b;};
function KG(){let a=this;C.call(a);a.vU=null;a.wI=null;}
let JS=b=>{let c,d,e;if(b.kb.length?0:1){c=new JV;c.kc=1;c.kd=1;c.t5=b;B(c);}if(0>=b.kb.length){b=new Y;b.kc=1;b.kd=1;B(b);}if(!UA(b.kb.charCodeAt(0))){c=new JV;c.kc=1;c.kd=1;c.t5=b;B(c);}d=1;a:{while(d<b.kb.length){if(d<0)break a;if(d>=b.kb.length)break a;b:{e=b.kb.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(UA(e))break b;else{c=new JV;c.kc=1;c.kd=1;c.t5=b;B(c);}}}d=d+1|0;}return;}b=new Y;b.kc=1;b.kd=1;B(b);},
UA=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let N1=F(KG);
let Co=null;
let AVp=()=>{let b,c,d,e,f;b=new N1;c=R(I,0);d=c.data;JS(A(3));e=d.length;f=0;while(f<e){JS(d[f]);f=f+1|0;}b.vU=A(3);b.wI=c.p();Co=b;};
function JV(){Bl.call(this);this.t5=null;}
let Lh=F(0);
function Ii(){let a=this;C.call(a);a.vB=null;a.qz=null;a.nf=0;a.qe=null;a.vN=0.0;a.tY=0.0;a.mH=0;a.po=null;a.tj=null;a.ts=null;a.ve=0;a.xM=0;a.wy=0;a.wG=0;a.vW=0;a.qh=null;a.ri=null;a.yV=0;a.nS=null;a.p6=0.0;a.sM=0;a.uu=0;a.vv=0;}
let Wl=null;
let Ig=()=>{Ig=BR(Ii);AKe();};
let La=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;Ig();a.nf=0;a.qe=null;a.vN=0.0;a.tY=0.0;a.mH=0;a.po=Dj();a.tj=Dj();a.ts=Dj();a.ve=0;a.xM=770;a.wy=771;a.wG=770;a.vW=771;a.ri=null;d=new BM;d.k_=1.0;d.k$=1.0;d.k9=1.0;d.la=1.0;CV(d);a.nS=d;a.p6=Ty;a.sM=0;a.uu=0;a.vv=0;if(b>8191){c=new Bl;d=new K;d.ka=G(16);E(d,d.j_,A(473));J(d,d.j_,b,10);e=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);c.kc=1;c.kd=1;c.kf=e;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}j=EQ===null?Wl:L6;k=new JB;l=b*4|0;m=b*6|0;f
=R(Eb,3);g=f.data;d=new Eb;d.m2=1;d.mL=2;d.m1=5126;d.m$=0;d.m6=A(474);d.oJ=0;d.pV=Eq(1);g[0]=d;d=new Eb;d.m2=4;d.mL=4;d.m1=5121;d.m$=1;d.m6=A(475);d.oJ=0;d.pV=Eq(4);g[1]=d;d=new Eb;d.m2=16;d.mL=2;d.m1=5126;d.m$=0;d.m6=A(476);d.oJ=0;d.pV=Eq(16);g[2]=d;VZ(k,j,0,l,m,Rs(f));a.vB=k;d=a.tj;n=B6.lA.width;o=B6.lA.height;MJ(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.qz=Cc(b*20|0);f=FM(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.vB.mC.g8(f,0,g.length);if(c!==null)a.qh=c;else{e=Q8(A(477),A(478));if(!e.of){c=new Bl;d=new K;d.ka=G(16);E(d,d.j_,A(479));if(!e.of)j=e.nQ;else{j=Br.g$(e.m7);e.nQ=j;}E(d,d.j_,j);e=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);c.kc=1;c.kd=1;c.kf=e;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}a.qh=e;a.yV=1;}},
AVZ=(a,b)=>{let c=new Ii();La(c,a,b);return c;},
AFR=a=>{let b,c;if(a.mH){b=new BO;b.kc=1;b.kd=1;b.kf=A(480);B(b);}a.sM=0;B5.g_(0);c=a.ri;if(c!==null)c.ha();else{c=a.qh;b=Br;if(c.lf){CO(c,c.mf,c.mh);c.lf=0;}b.hc(c.m7);}Gx(a);a.mH=1;},
APK=a=>{let b,c;if(!a.mH){b=new BO;b.kc=1;b.kd=1;b.kf=A(481);B(b);}if(a.nf>0)Eo(a);a.qe=null;a.mH=0;c=B5;c.g_(1);if(a.ve?0:1)c.bb(3042);},
AHs=(a,b,c,d,e)=>{let f,g;if(!a.mH){b=new BO;b.kc=1;b.kd=1;b.kf=A(482);B(b);}f=a.qz.data.length;if(b!==a.qe){Eo(a);a.qe=b;b=b.nK;a.vN=1.0/b.nu;a.tY=1.0/b.ns;g=f;}else{g=f-a.nf|0;if(!g){Eo(a);g=f;}}if(g>=e)g=e;Dv(c,d,a.qz,a.nf,g);a.nf=a.nf+g|0;e=e-g|0;while(e>0){d=d+g|0;Eo(a);g=f>=e?e:f;Dv(c,d,a.qz,0,g);a.nf=a.nf+g|0;e=e-g|0;}},
HE=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.mH){b=new BO;b.kc=1;b.kd=1;b.kf=A(482);B(b);}l=a.qz;m=b.pp;if(m!==a.qe){Eo(a);a.qe=m;m=m.nK;a.vN=1.0/m.nu;a.tY=1.0/m.ns;}else{n=l.data;if(a.nf==n.length)Eo(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{GX();n=Gq.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.vE;bb=b.vA;bc=b.vD;bd=b.vF;be=a.p6;bf=a.nf;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.nf=bf+20|0;},
Eo=a=>{let b,c,d,e,f,g;b=a.nf;if(!b)return;a.sM=a.sM+1|0;a.uu=a.uu+1|0;c=b/20|0;if(c>a.vv)a.vv=c;b=c*6|0;d=a.qe;B5.cB(d.nk,d.o9);d=a.vB;e=a.qz;f=a.nf;d.mF.hd(e,0,f);g=d.mC.he(1);CK(g,0);CX(g,b);if(a.ve)B5.bb(3042);else{B5.W(3042);c=a.xM;if(c!=(-1))B5.hf(c,a.wy,a.wG,a.vW);}g=a.ri;if(g===null)g=a.qh;S4(d,g,4,0,b,d.sB);a.nf=0;},
Gx=a=>{let b,c,d,e;S8(Dm(a.ts,a.tj.lC),a.po);b=a.ri;if(b!==null){b.hi(A(483),a.ts);a.ri.hj(A(484),0);}else{b=a.qh;c=a.ts;IA();d=Jy(b,A(483),H$);e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}QZ(e,d,1,0,c.lC,0);b=a.qh;c=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}c.hm(Jy(b,A(484),H$),0);}},
AKe=()=>{Wl=LP;};
let RY=F(0);
function K7(){C.call(this);this.z3=null;}
function TP(){let a=this;K7.call(a);a.k2=null;a.vC=null;a.y6=null;a.zz=null;a.lw=null;a.ly=null;a.pL=null;a.rF=null;a.to=0;}
let AF0=(a,b)=>{let c,d,e,f,g,h,i,j,k;a.z3=b;b=new Bh;b.kF=1;b.ki=R(C,16);a.zz=b;a.to=0;c=new Nv;b=new S2;d=new QN;ANq(d);d.we=1.0;e=new Bo;C0();d.xK=e;d.vs=0.0;b.uk=new Bo;b.sv=1.0;b.rj=d;d=new Ii;Ig();La(d,1000,null);S1(c,b,d);c.yY=1;a.k2=c;Lp.mT=c;b=new Bh;b.kF=1;b.ki=R(C,16);a.lw=b;S(b,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());S(a.lw,D2());b=new Bh;b.kF=1;b.ki=R(C,16);a.ly=b;S(b,D9());S(a.ly,D9());S(a.ly,D9());S(a.ly,
D9());S(a.ly,D9());S(a.ly,D9());S(a.ly,D9());S(a.ly,D9());S(a.ly,D9());S(a.ly,D9());S(a.ly,D9());S(a.ly,D9());b=new Bh;b.kF=1;b.ki=R(C,16);a.pL=b;S(b,Q2());S(a.pL,Q2());a.rF=AFA();b=a.lw;f=BW(0,b.ke);if(f<0){g=b.ki.data;c=g[0];c.mR=(c.mR+270.0)%360.0;if(f<0){c=g[0];d=a.k2;h=(d.ma.mV/2|0)+27|0;if(!(c.kD===100.0&&c.kE===h)){c.kD=100.0;c.kE=h;}if(f<0){a:{b=g[0];c=d.lB;d=b.k0;if(d!==null){if(d===c)break a;i=DB(d.kz,b,1);if(i!=(-1)){e=d.kz;Cv(e);e=Di(e,i);d=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}S(c.kz,b);b.k0
=c;b.x(c.lF);}b=a.ly;f=BW(0,b.ke);if(f<0){g=b.ki.data;c=g[0];c.mR=(c.mR+270.0)%360.0;if(f<0){c=g[0];d=a.k2;h=(d.ma.mV/2|0)+27|0;if(!(c.kD===100.0&&c.kE===h)){c.kD=100.0;c.kE=h;}if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}b:{b=g[0];c=d.lB;d=b.k0;if(d!==null){if(d===c)break b;i=DB(d.kz,b,1);if(i!=(-1)){e=d.kz;Cv(e);e=Di(e,i);d
=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}S(c.kz,b);b.k0=c;b.x(c.lF);}b=a.lw;f=BW(1,b.ke);if(f<0){g=b.ki.data;c=g[1];d=a.k2;h=((d.ma.mV/2|0)+27|0)+200|0;if(!(c.kD===250.0&&c.kE===h)){c.kD=250.0;c.kE=h;}if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,1,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}c:{b=g[1];c=d.lB;d=b.k0;if(d!==null){if(d!==c){i=DB(d.kz,b,1);if(i!=(-1))
{e=d.kz;Cv(e);e=Di(e,i);d=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}else break c;}S(c.kz,b);b.k0=c;b.x(c.lF);}b=a.ly;f=BW(1,b.ke);if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,1,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}g=b.ki.data;c=g[1];d=a.k2;h=((d.ma.mV/2|0)+27|0)+200|0;if(!(c.kD===250.0&&c.kE===h)){c.kD=250.0;c.kE=h;}if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,
c.j_,A(18));J(c,c.j_,1,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}d:{b=g[1];c=d.lB;d=b.k0;if(d!==null){if(d===c)break d;i=DB(d.kz,b,1);if(i!=(-1)){e=d.kz;Cv(e);e=Di(e,i);d=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}S(c.kz,b);b.k0=c;b.x(c.lF);}b=a.lw;f=BW(2,b.ke);if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,2,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j
=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}g=b.ki.data;c=g[2];d=a.k2;h=((d.ma.mV/2|0)+27|0)+125|0;if(!(c.kD===250.0&&c.kE===h)){c.kD=250.0;c.kE=h;}if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,2,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}e:{b=g[2];c=d.lB;d=b.k0;if(d!==null){if(d===c)break e;i=DB(d.kz,
b,1);if(i!=(-1)){e=d.kz;Cv(e);e=Di(e,i);d=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}S(c.kz,b);b.k0=c;b.x(c.lF);}b=a.ly;f=BW(2,b.ke);if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,2,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}g=b.ki.data;c=g[2];d=a.k2;h=((d.ma.mV/2|0)+27|0)+125|0;if(!(c.kD===250.0&&c.kE===h)){c.kD=250.0;c.kE=h;}if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,
c.j_,A(18));J(c,c.j_,2,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}f:{b=g[2];c=d.lB;d=b.k0;if(d!==null){if(d===c)break f;i=DB(d.kz,b,1);if(i!=(-1)){e=d.kz;Cv(e);e=Di(e,i);d=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}S(c.kz,b);b.k0=c;b.x(c.lF);}b=a.lw;f=BW(3,b.ke);if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,3,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j
=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}g=b.ki.data;c=g[3];d=a.k2;h=((d.ma.mV/2|0)+27|0)+200|0;if(!(c.kD===550.0&&c.kE===h)){c.kD=550.0;c.kE=h;}if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,3,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}g:{b=g[3];c=d.lB;d=b.k0;if(d!==null){if(d===c)break g;i=DB(d.kz,
b,1);if(i!=(-1)){e=d.kz;Cv(e);e=Di(e,i);d=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}S(c.kz,b);b.k0=c;b.x(c.lF);}b=a.ly;f=BW(3,b.ke);if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,3,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}g=b.ki.data;c=g[3];d=a.k2;h=((d.ma.mV/2|0)+27|0)+200|0;if(!(c.kD===550.0&&c.kE===h)){c.kD=550.0;c.kE=h;}if(f>=0){d=new H;c=new K;c.ka=G(16);E(c,
c.j_,A(18));J(c,c.j_,3,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}h:{b=g[3];c=d.lB;d=b.k0;if(d!==null){if(d===c)break h;i=DB(d.kz,b,1);if(i!=(-1)){e=d.kz;Cv(e);e=Di(e,i);d=d.lF;if(d!==null)D5(d,e);e.k0=null;e.x(null);}}S(c.kz,b);b.k0=c;b.x(c.lF);}b=a.lw;if(4>=b.ke){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,4,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k
=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}c=b.ki.data[4];d=a.k2;h=((d.ma.mV/2|0)+27|0)+125|0;if(!(c.kD===550.0&&c.kE===h)){c.kD=550.0;c.kE=h;}b=Q(b,4);AGE(d.lB,b);Dd(Q(a.ly,4),550.0,((Dh(Dk(a.k2))/2|0)+27|0)+125|0);C8(a.k2,Q(a.ly,4));Dd(Q(a.lw,5),900.0,((Dh(Dk(a.k2))/2|0)+27|0)+200|0);C8(a.k2,Q(a.lw,5));Dd(Q(a.ly,5),900.0,((Dh(Dk(a.k2))/2|0)+27|0)+200|0);C8(a.k2,Q(a.ly,5));Dd(Q(a.lw,6),550.0,((Dh(Dk(a.k2))/2|0)+27|0)+25|0);C8(a.k2,Q(a.lw,6));Dd(Q(a.ly,
6),550.0,((Dh(Dk(a.k2))/2|0)+27|0)+25|0);C8(a.k2,Q(a.ly,6));Dd(Q(a.lw,7),550.0,((Dh(Dk(a.k2))/2|0)+27|0)-50|0);C8(a.k2,Q(a.lw,7));Dd(Q(a.ly,7),550.0,((Dh(Dk(a.k2))/2|0)+27|0)-50|0);C8(a.k2,Q(a.ly,7));Dd(Q(a.lw,8),900.0,((Dh(Dk(a.k2))/2|0)+27|0)+25|0);C8(a.k2,Q(a.lw,8));Dd(Q(a.ly,8),900.0,((Dh(Dk(a.k2))/2|0)+27|0)+25|0);C8(a.k2,Q(a.ly,8));I7(Q(a.lw,9),270.0);Dd(Q(a.lw,9),1050.0,((Dh(Dk(a.k2))/2|0)+27|0)+300|0);C8(a.k2,Q(a.lw,9));I7(Q(a.ly,9),270.0);Dd(Q(a.ly,9),1050.0,((Dh(Dk(a.k2))/2|0)+27|0)+300|0);C8(a.k2,
Q(a.ly,9));I7(Q(a.lw,10),270.0);Dd(Q(a.lw,10),400.0,((Dh(Dk(a.k2))/2|0)-27|0)-100|0);C8(a.k2,Q(a.lw,10));I7(Q(a.ly,10),270.0);Dd(Q(a.ly,10),400.0,((Dh(Dk(a.k2))/2|0)-27|0)-100|0);C8(a.k2,Q(a.ly,10));Dd(Q(a.lw,11),250.0,((Dh(Dk(a.k2))/2|0)-27|0)-200|0);C8(a.k2,Q(a.lw,11));Dd(Q(a.ly,11),250.0,((Dh(Dk(a.k2))/2|0)-27|0)-200|0);C8(a.k2,Q(a.ly,11));Dd(Q(a.pL,0),670.0,((Dh(Dk(a.k2))/2|0)+27|0)+150|0);C8(a.k2,Q(a.pL,0));Dd(Q(a.pL,1),670.0,((Dh(Dk(a.k2))/2|0)+27|0)-25|0);C8(a.k2,Q(a.pL,1));Dd(a.rF,1100.0,(Dh(Dk(a.k2))
/2|0)-Q0(a.rF)/2.0);C8(a.k2,a.rF);b=AQm(a.lw,a.pL,a.rF);a.vC=b;C8(a.k2,b);return;}d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,1,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b
=new H;U(b);B(b);}d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,
c.j_,0,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));i=b.ke;J(c,c.j_,i,10);b=new I;g=c.ka;j=g.data;k=c.j_;f=j.length;if(k>=0&&k<=(f-0|0)){b.kb=L(g.data,0,k);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);},
AKa=a=>{let b=new TP();AF0(b,a);return b;},
AR$=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;B5.hv(0.8899999856948853,0.8899999856948853,0.8899999856948853,0.5);B5.hw(16384);if(!(a.to%500|0)){c=AIU(a);a.y6=c;d=a.vC.o2;e=BW(0,d.ke);if(e>=0){f=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));g=d.ke;J(c,c.j_,g,10);d=new I;h=c.ka;i=h.data;e=c.j_;j=i.length;if(e>=0&&e<=(j-0|0)){d.kb=L(h.data,0,e);f.kc=1;f.kd=1;f.kf=d;B(f);}c=new H;U(c);B(c);}h=d.ki.data;b=h[0].kh;if(e>=0){f=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));g
=d.ke;J(c,c.j_,g,10);d=new I;h=c.ka;i=h.data;e=c.j_;j=i.length;if(e>=0&&e<=(j-0|0)){d.kb=L(h.data,0,e);f.kc=1;f.kd=1;f.kf=d;B(f);}c=new H;U(c);B(c);}k=h[0].kg;if(!(c.kD===b&&c.kE===k)){c.kD=b;c.kE=k;}a:{d=a.k2.lB;f=c.k0;if(f!==null){if(f===d)break a;g=DB(f.kz,c,1);if(g!=(-1)){l=f.kz;Cv(l);l=Di(l,g);f=f.lF;if(f!==null)D5(f,l);l.k0=null;l.x(null);}}S(d.kz,c);c.k0=d;c.lF=d.lF;}}a.to=a.to+1|0;AOf(a.k2,B6.s6);c=a.k2;f=c.ma.rj;WC(f,1);if(c.lB.nF){d=c.vV;f=f.q1;if(d.mH)Eo(d);Dm(d.tj,f.lC);if(d.mH)Gx(d);AFR(d);f=c.lB;if
(f.nN){l=KW(f);Dm(f.p0,d.po.lC);if(d.mH)Eo(d);Dm(d.po,l.lC);if(d.mH)Gx(d);}Qp(f,d,1.0);if(f.nN){f=f.p0;if(d.mH)Eo(d);Dm(d.po,f.lC);if(d.mH)Gx(d);}APK(d);if(BS)ANj(c);}};
let WB=F(BA);
let T=F(BA);
let ADm=(a,b)=>{a.kc=1;a.kd=1;a.kf=b;},
KQ=a=>{let b=new T();ADm(b,a);return b;};
let ACF=F();
let Lr=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function ED(){C.call(this);this.n2=null;}
let Zl=a=>{AIB(a.n2);};
let ADT=F();
let Wj=F();
let O6=null;
let NH=()=>{NH=BR(Wj);APm();};
let APm=()=>{let b,c;b=Ba((NV.p()).data.length);c=b.data;O6=b;c[F3.kn]=1;c[FT.kn]=2;c[FH.kn]=3;c[Fy.kn]=4;c[Kb.kn]=5;};
let ND=F(BA);
function N5(){let a=this;C.call(a);a.rj=null;a.tt=0.0;a.tB=0.0;a.qi=0;a.qj=0;a.qS=0;a.mV=0;a.uk=null;}
let NC=(a,b)=>{let c,d,e,f;AIE(a.qi,a.qj,a.qS,a.mV);c=a.rj;d=a.tt;c.uj=d;e=a.tB;c.uS=e;if(b){f=c.uR;d=d/2.0;e=e/2.0;f.ko=d;f.kp=e;f.kq=0.0;}WC(c,1);},
E9=(a,b)=>{let c,d,e,f;c=a.uk;d=b.kh;e=b.kg;c.ko=d;c.kp=e;c.kq=1.0;ALs(a.rj,c,a.qi,a.qj,a.qS,a.mV);c=a.uk;f=c.ko;d=c.kp;b.kh=f;b.kg=d;return b;},
Dh=a=>{return a.mV;};
function S2(){N5.call(this);this.sv=0.0;}
function UB(){let a=this;Cm.call(a);a.yG=null;a.yD=null;a.ze=null;a.y3=null;a.r8=null;a.pn=null;a.tX=null;}
let ATs=a=>{let b,c,d,e,f,g;Fg(a);a.r8=new DR;b=new F_;c=FW;d=G1(c.p3,A(485),Fw);e=null;f=GJ(d,F7(d),e,0);e=B5;c=e.kk.createTexture();g=e.mY;e.mY=g+1|0;Ca(e.nH,g,Cd(c));e=FY;b.oq=e;b.oV=e;e=F9;b.ok=e;b.or=e;b.pu=1.0;b.nk=3553;b.o9=g;G$(b,f);e=Df;c=D0;if(e===null)c=GM(c);else{g=FJ(e);c=Gz(c,e,g&(c.mv.data.length-1|0),g);}c=c===null?null:c.mZ;if(c===null){c=new Bh;Bu(c);c.kF=1;c.ki=R(C,16);}S(c,b);Fu(D0,e,c);a.yG=b;e=new GU;c=b.nK;Ic(e,b,0,0,c.nu,c.ns);a.yD=e;if(!(a.lh===41.0&&a.lo===59.0)){a.lh=41.0;a.lo=59.0;}Ir(a,
a.kD,a.kE,a.lh,a.lo);e=new Z;e.kh=0.0;e.kg=16.0;a.ze=e;e=new Z;e.kh=a.lh;e.kg=16.0;a.y3=e;a.pn=GR;e=new Uo;e.sT=a;if(!Ly(a.tk,e,1))S(a.tk,e);},
D2=()=>{let a=new UB();ATs(a);return a;},
X6=(a,b,c)=>{let d,e,f,g;if(a.pn.nm){d=new Gc;d.oZ=0.0;a.tX=d;}else{d=new Gc;d.oZ=1.0;a.tX=d;}d=a.qd;c=d.k_;e=d.k$;f=d.k9;g=a.tX.oZ;d=b.nS;d.k_=c;d.k$=e;d.k9=f;d.la=g;CV(d);b.p6=Es(b.nS);HE(b,a.yD,a.kD,a.kE,a.oP,a.oQ,a.lh,a.lo,a.nL,a.nM,a.mR);AIk(a);},
ADW=(a,b)=>{FG(a,b);},
AIk=a=>{let b,c,d,e,f;G3(a,100);if(a.pn.nm){b=a.r8;c=a.kD;d=a.kE;b.nB=c;b.nA=d;b.nD=0.0;b.nt=0.0;}else if(a.mR!==270.0){b=a.r8;c=a.kD;d=a.kE;e=a.lh/4.0+2.0;f=a.lo+2.0;b.nB=c;b.nA=d;b.nD=e;b.nt=f;}else{b=a.r8;c=a.kD;d=a.kE;e=a.lh/4.0;f=d-e;d=a.lo+2.0;e=e+2.0;b.nB=c;b.nA=f;b.nD=d;b.nt=e;}};
function Po(){let a=this;Cm.call(a);a.zT=null;a.yf=null;a.Au=null;a.z$=null;a.s9=null;a.ub=null;a.vw=null;}
let ALC=a=>{let b,c,d,e,f,g,h;Fg(a);a.s9=new DR;b=new F_;c=FW;d=G1(c.p3,A(486),Fw);e=null;f=GJ(d,F7(d),e,0);d=B5;e=d.kk.createTexture();g=d.mY;d.mY=g+1|0;Ca(d.nH,g,Cd(e));e=FY;b.oq=e;b.oV=e;e=F9;b.ok=e;b.or=e;b.pu=1.0;b.nk=3553;b.o9=g;G$(b,f);e=Df;c=D0;if(e===null)c=GM(c);else{h=FJ(e);c=Gz(c,e,h&(c.mv.data.length-1|0),h);}c=c===null?null:c.mZ;if(c===null){c=new Bh;Bu(c);c.kF=1;c.ki=R(C,16);}S(c,b);Fu(D0,e,c);a.zT=b;e=new GU;c=b.nK;Ic(e,b,0,0,c.nu,c.ns);a.yf=e;if(!(a.lh===41.0&&a.lo===59.0)){a.lh=41.0;a.lo=59.0;}Ir(a,
a.kD,a.kE,a.lh,a.lo);e=new Z;e.kh=0.0;e.kg=16.0;a.Au=e;e=new Z;e.kh=a.lh;e.kg=16.0;a.z$=e;a.ub=Js;},
D9=()=>{let a=new Po();ALC(a);return a;},
AIA=(a,b,c)=>{let d,e,f,g;if(!a.ub.nm){d=new Gc;d.oZ=0.0;a.vw=d;}else{d=new Gc;d.oZ=1.0;a.vw=d;}d=a.qd;c=d.k_;e=d.k$;f=d.k9;g=a.vw.oZ;d=b.nS;d.k_=c;d.k$=e;d.k9=f;d.la=g;CV(d);b.p6=Es(b.nS);HE(b,a.yf,a.kD,a.kE,a.oP,a.oQ,a.lh,a.lo,a.nL,a.nM,a.mR);ADf(a);},
AOE=(a,b)=>{FG(a,b);},
ADf=a=>{let b,c,d,e,f;G3(a,4);if(a.ub.nm){b=a.s9;c=a.kD;d=a.kE;b.nB=c;b.nA=d;b.nD=0.0;b.nt=0.0;}else if(a.mR!==270.0){b=a.s9;c=a.kD;d=a.kE;e=a.lh/4.0+2.0;f=a.lo+2.0;b.nB=c;b.nA=d;b.nD=e;b.nt=f;}else{b=a.s9;c=a.kD;d=a.kE;e=a.lh/4.0;f=d-e;d=a.lo+2.0;e=e+2.0;b.nB=c;b.nA=f;b.nD=d;b.nt=e;}};
function TL(){let a=this;Cm.call(a);a.Af=null;a.xx=null;a.wp=null;a.zK=null;}
let AT$=a=>{let b,c,d,e,f,g,h;Fg(a);a.wp=new DR;b=new F_;c=FW;d=G1(c.p3,A(487),Fw);e=null;f=GJ(d,F7(d),e,0);e=B5;c=e.kk.createTexture();g=e.mY;e.mY=g+1|0;Ca(e.nH,g,Cd(c));e=FY;b.oq=e;b.oV=e;e=F9;b.ok=e;b.or=e;b.pu=1.0;b.nk=3553;b.o9=g;G$(b,f);e=Df;c=D0;if(e===null)c=GM(c);else{h=FJ(e);c=Gz(c,e,h&(c.mv.data.length-1|0),h);}c=c===null?null:c.mZ;if(c===null){c=new Bh;Bu(c);c.kF=1;c.ki=R(C,16);}S(c,b);Fu(D0,e,c);a.Af=b;e=new GU;c=b.nK;Ic(e,b,0,0,c.nu,c.ns);a.xx=e;if(!(a.lh===159.0&&a.lo===109.0)){a.lh=159.0;a.lo
=109.0;}Ir(a,a.kD,a.kE,a.lh,a.lo);a.zK=GR;},
Q2=()=>{let a=new TL();AT$(a);return a;},
Zg=(a,b,c)=>{let d,e,f,g;d=a.qd;c=d.k_;e=d.k$;f=d.k9;g=d.la;d=b.nS;d.k_=c;d.k$=e;d.k9=f;d.la=g;CV(d);b.p6=Es(b.nS);HE(b,a.xx,a.kD,a.kE,a.oP,a.oQ,a.lh,a.lo,a.nL,a.nM,a.mR);G3(a,100);b=a.wp;g=a.kD;f=a.kE;e=a.lh;c=a.lo;b.nB=g;b.nA=f;b.nD=e;b.nt=c;},
ATM=(a,b)=>{FG(a,b);};
function QH(){let a=this;Cm.call(a);a.zQ=null;a.yd=null;a.v1=null;a.y8=null;}
let APk=a=>{let b,c,d,e,f,g,h;Fg(a);a.v1=new DR;b=new F_;c=FW;d=G1(c.p3,A(488),Fw);e=null;f=GJ(d,F7(d),e,0);e=B5;c=e.kk.createTexture();g=e.mY;e.mY=g+1|0;Ca(e.nH,g,Cd(c));e=FY;b.oq=e;b.oV=e;e=F9;b.ok=e;b.or=e;b.pu=1.0;b.nk=3553;b.o9=g;G$(b,f);e=Df;c=D0;if(e===null)c=GM(c);else{h=FJ(e);c=Gz(c,e,h&(c.mv.data.length-1|0),h);}c=c===null?null:c.mZ;if(c===null){c=new Bh;Bu(c);c.kF=1;c.ki=R(C,16);}S(c,b);Fu(D0,e,c);a.zQ=b;e=new GU;c=b.nK;Ic(e,b,0,0,c.nu,c.ns);a.yd=e;if(!(a.lh===100.0&&a.lo===100.0)){a.lh=100.0;a.lo
=100.0;}Ir(a,a.kD,a.kE,a.lh,a.lo);a.y8=GR;},
AFA=()=>{let a=new QH();APk(a);return a;},
AIu=(a,b,c)=>{let d,e,f,g;d=a.qd;c=d.k_;e=d.k$;f=d.k9;g=d.la;d=b.nS;d.k_=c;d.k$=e;d.k9=f;d.la=g;CV(d);b.p6=Es(b.nS);HE(b,a.yd,a.kD,a.kE,a.oP,a.oQ,a.lh,a.lo,a.nL,a.nM,a.mR);G3(a,100);b=a.v1;g=a.kD;f=a.kE;e=a.lh;c=a.lo;b.nB=g;b.nA=f;b.nD=e;b.nt=c;},
AMF=(a,b)=>{FG(a,b);};
function T0(){let a=this;Cm.call(a);a.Am=null;a.w_=null;a.o2=null;a.su=null;a.oI=null;a.rx=null;a.r5=null;a.mQ=null;a.rk=null;a.on=null;a.sg=null;a.n6=null;a.sk=null;a.og=null;a.rO=null;a.sU=null;a.tC=null;a.ru=null;a.ng=null;a.vg=null;a.q7=null;a.u7=null;a.qG=null;a.nW=null;a.rf=null;a.qO=null;a.sJ=null;a.AD=null;a.lS=null;}
let XS=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q;Fg(a);e=new F_;f=FW;g=G1(f.p3,A(486),Fw);h=null;i=GJ(g,F7(g),h,0);h=B5;f=h.kk.createTexture();j=h.mY;h.mY=j+1|0;Ca(h.nH,j,Cd(f));f=FY;e.oq=f;e.oV=f;f=F9;e.ok=f;e.or=f;e.pu=1.0;e.nk=3553;e.o9=j;G$(e,i);g=Df;f=D0;if(g===null)f=GM(f);else{j=FJ(g);f=Gz(f,g,j&(f.mv.data.length-1|0),j);}i=f===null?null:f.mZ;if(i===null){i=new Bh;Bu(i);i.kF=1;i.ki=R(C,16);}S(i,e);Fu(D0,g,i);a.Am=e;f=new It;f.pp=e;Nr(f,0,0,1,1);a.w_=f;a.AD=b;f=new Bh;f.kF=1;f.ki=R(C,16);a.o2=f;g=new Z;j
=b.ke;if(0>=j){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}l=b.ki.data;o=l[0].kD+16.0;if(1>=j){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,1,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}p=l[1].kE+250.0;g.kh
=o;g.kg=p;S(f,g);f=a.o2;g=new Z;j=b.ke;if(0>=j){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}l=b.ki.data;o=l[0].kD+16.0;if(1>=j){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,1,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b
=new H;U(b);B(b);}p=l[1].kE+15.0;g.kh=o;g.kg=p;S(f,g);f=new Bh;f.kF=1;f.ki=R(C,16);a.su=f;g=new Z;if(0>=b.ke){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}o=b.ki.data[0].kD+16.0;i=a.o2;k=i.ke;j=k-1|0;if(j>=k){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,j,10);E(b,b.j_,A(19));k=i.ke;J(b,b.j_,k,10);d=new I;l=b.ka;m=l.data;j=b.j_;n
=m.length;if(j>=0&&j<=(n-0|0)){d.kb=L(l.data,0,j);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;U(b);B(b);}p=i.ki.data[j].kg;g.kh=o;g.kg=p;S(f,g);f=a.su;g=new Z;j=BW(0,b.ke);if(j>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}l=b.ki.data;o=l[0].kD+16.0;if(j>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,
c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}p=l[0].kE;g.kh=o;g.kg=p;S(f,g);f=new Bh;f.kF=1;f.ki=R(C,16);a.qO=f;g=new Z;j=BW(0,b.ke);if(j>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}l=b.ki.data;o=l[0].kD+16.0;if(j>=0){d=new H;c=new K;c.ka
=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}q=l[0].kE;if(j>=0){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}p=q-l[0].lh;g.kh=o;g.kg=p;S(f,g);f=a.qO;g=new Z;j=b.ke;if(0>=j){d
=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}l=b.ki.data;o=l[0].kD+16.0;if(11>=j){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,11,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}p=l[11].kE;g.kh=o;g.kg=p;S(f,
g);f=new Bh;f.kF=1;f.ki=R(C,16);a.sJ=f;g=new Z;if(0>=b.ke){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}o=b.ki.data[0].kD+16.0;i=a.qO;k=i.ke;j=k-1|0;if(j>=k){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,j,10);E(b,b.j_,A(19));k=i.ke;J(b,b.j_,k,10);d=new I;l=b.ka;m=l.data;j=b.j_;n=m.length;if(j>=0&&j<=(n-0|0)){d.kb=L(l.data,0,
j);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;U(b);B(b);}p=i.ki.data[j].kg;g.kh=o;g.kg=p;S(f,g);f=a.sJ;g=new Z;if(0>=b.ke){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}o=b.ki.data[0].kD+16.0;k=f.ke;j=k-1|0;if(j>=k){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,j,10);E(b,b.j_,A(19));k=f.ke;J(b,b.j_,k,10);d=new I;l=b.ka;m=l.data;j=b.j_;n
=m.length;if(j>=0&&j<=(n-0|0)){d.kb=L(l.data,0,j);c.kc=1;c.kd=1;c.kf=d;B(c);}b=new H;U(b);B(b);}p=f.ki.data[j].kg-250.0;g.kh=o;g.kg=p;S(f,g);f=new Bh;f.kF=1;f.ki=R(C,16);a.oI=f;g=new Z;if(0>=b.ke){d=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,0,10);E(c,c.j_,A(19));k=b.ke;J(c,c.j_,k,10);b=new I;l=c.ka;m=l.data;j=c.j_;n=m.length;if(j>=0&&j<=(n-0|0)){b.kb=L(l.data,0,j);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}o=b.ki.data[0].kD+16.0;i=a.o2;k=i.ke;j=k-1|0;if(j>=k){c=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,
b.j_,j,10);RU(c,Et(Fn(FD(b,A(19)),i.ke)));B(c);}BY(g,o,i.ki.data[j].kg);S(f,g);f=a.oI;g=new Z;o=Cg(Q(b,1))-25.0;i=a.o2;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.oI;g=new Z;o=Cg(Q(b,1));i=a.oI;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.rx=f;g=new Z;i=a.oI;o=(Q(i,i.ke-2|0)).kh;i=a.oI;BY(g,o,(Q(i,i.ke-2|0)).kg);S(f,g);f=a.rx;g=new Z;i=a.oI;BY(g,(Q(i,i.ke-2|0)).kh,Da(Q(b,2))+15.0);S(f,g);f=a.rx;g=new Z;o=Cg(Q(b,2));i=a.rx;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.mQ=f;S(f,Ck(Cg(Q(b,1))+DT(Q(b,1)),Da(Q(b,1))+15.0));f
=a.mQ;g=new Z;o=(Q(f,f.ke-1|0)).kh+25.0;i=a.mQ;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.mQ;g=new Z;o=Cg(Q(b,3))-75.0;i=a.mQ;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.mQ;g=new Z;o=Cg(Q(b,3))-25.0;i=a.mQ;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.mQ;g=new Z;o=Cg(Q(b,3));i=a.mQ;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.r5=f;S(f,Ck(Cg(Q(b,2))+DT(Q(b,2)),Da(Q(b,2))+15.0));f=a.r5;g=new Z;o=(Q(a.mQ,1)).kh;i=a.r5;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.r5;S(f,Ck((Q(f,f.ke-1|0)).kh,(Q(a.mQ,0)).kg));f=C5();a.rk=f;S(f,Ck((Q(a.mQ,3)).kh,
(Q(a.mQ,3)).kg));f=a.rk;S(f,Ck((Q(f,f.ke-1|0)).kh,Da(Q(b,4))+15.0));f=a.rk;g=new Z;o=Cg(Q(b,4));i=a.rk;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.on=f;S(f,Ck((Q(a.mQ,2)).kh,(Q(a.mQ,2)).kg));f=a.on;S(f,Ck((Q(f,f.ke-1|0)).kh,Da(Q(b,6))+15.0));f=a.on;g=new Z;o=Cg(Q(b,6))-25.0;i=a.on;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.on;g=new Z;o=Cg(Q(b,6));i=a.on;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.sg=f;S(f,Ck((Q(a.on,2)).kh,(Q(a.on,2)).kg));f=a.sg;S(f,Ck((Q(f,f.ke-1|0)).kh,Da(Q(b,7))+15.0));f=a.sg;g=new Z;o=Cg(Q(b,
7));i=a.sg;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.n6=f;S(f,Ck(Cg(Q(b,3))+DT(Q(b,3)),Da(Q(b,3))+15.0));f=a.n6;g=new Z;o=(Q(f,f.ke-1|0)).kh+25.0;i=a.n6;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.n6;g=new Z;o=Cg(Q(c,0));i=a.n6;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.sk=f;S(f,Ck(Cg(Q(b,4))+DT(Q(b,2)),Da(Q(b,4))+15.0));f=a.sk;g=new Z;o=(Q(a.n6,1)).kh;i=a.sk;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.sk;S(f,Ck((Q(f,f.ke-1|0)).kh,(Q(a.n6,1)).kg));f=C5();a.og=f;S(f,Ck(Cg(Q(b,6))+DT(Q(b,6)),Da(Q(b,6))+15.0));f=a.og;g=new Z;o
=(Q(f,f.ke-1|0)).kh+25.0;i=a.og;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.og;g=new Z;o=Cg(Q(c,1));i=a.og;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.rO=f;S(f,Ck(Cg(Q(b,7))+DT(Q(b,2)),Da(Q(b,7))+15.0));f=a.rO;g=new Z;o=(Q(a.og,1)).kh;i=a.rO;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.rO;S(f,Ck((Q(f,f.ke-1|0)).kh,(Q(a.og,1)).kg));f=C5();a.sU=f;g=new Z;i=a.n6;o=(Q(i,i.ke-1|0)).kh+DT(Q(c,0));i=a.n6;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=a.sU;g=new Z;o=Cg(Q(b,5));i=a.sU;BY(g,o,(Q(i,i.ke-1|0)).kg);S(f,g);f=C5();a.tC=f;g=new Z;i
=a.og;o=(Q(i,i.ke-1|0)).kh+DT(Q(c,1));c=a.og;BY(g,o,(Q(c,c.ke-1|0)).kg);S(f,g);c=a.tC;f=new Z;o=Cg(Q(b,8));g=a.tC;BY(f,o,(Q(g,g.ke-1|0)).kg);S(c,f);c=C5();a.ng=c;S(c,Ck(Cg(Q(b,5))+DT(Q(b,5)),Da(Q(b,5))+15.0));c=a.ng;f=new Z;o=(Q(c,c.ke-1|0)).kh+50.0;g=a.ng;BY(f,o,(Q(g,g.ke-1|0)).kg);S(c,f);c=a.ng;f=new Z;o=Cg(Q(b,9))+16.0;g=a.ng;BY(f,o,(Q(g,g.ke-1|0)).kg);S(c,f);c=a.ng;f=new Z;o=Cg(d)+25.0;g=a.ng;BY(f,o,(Q(g,g.ke-1|0)).kg);S(c,f);c=a.ng;S(c,Ck((Q(c,c.ke-1|0)).kh,Da(d)+Q0(d)/4.0));c=C5();a.ru=c;S(c,Ck(Cg(Q(b,
8))+DT(Q(b,8)),Da(Q(b,8))+15.0));c=a.ru;f=new Z;o=(Q(a.ng,1)).kh;g=a.ru;BY(f,o,(Q(g,g.ke-1|0)).kg);S(c,f);c=a.ru;S(c,Ck((Q(c,c.ke-1|0)).kh,(Q(a.ng,1)).kg));c=C5();a.nW=c;S(c,Ck(Cg(d)+25.0,Da(d)));c=a.nW;S(c,Ck((Q(c,c.ke-1|0)).kh,Da(Q(b,11))+15.0));c=a.nW;d=new Z;o=Cg(Q(b,10))+16.0;f=a.nW;BY(d,o,(Q(f,f.ke-1|0)).kg);S(c,d);c=a.nW;d=new Z;o=Cg(Q(b,11))+DT(Q(b,11));f=a.nW;BY(d,o,(Q(f,f.ke-1|0)).kg);S(c,d);c=C5();a.vg=c;S(c,Ck((Q(a.ng,2)).kh,(Q(a.ng,2)).kg+12.0));c=a.vg;S(c,Ck((Q(c,c.ke-1|0)).kh,Da(Q(b,9))-DT(Q(b,
9))));c=C5();a.q7=c;S(c,Ck((Q(a.ng,2)).kh,Da(Q(b,9))));c=a.q7;d=new Z;o=(Q(c,c.ke-1|0)).kh;f=a.q7;BY(d,o,(Q(f,f.ke-1|0)).kg+25.0);S(c,d);c=a.q7;d=new Z;o=(Q(c,c.ke-1|0)).kh-10.0;f=a.q7;BY(d,o,(Q(f,f.ke-1|0)).kg-10.0);S(c,d);c=C5();a.u7=c;S(c,Ck((Q(a.nW,2)).kh,(Q(a.nW,2)).kg+12.0));c=a.u7;S(c,Ck((Q(c,c.ke-1|0)).kh,Da(Q(b,10))-DT(Q(b,10))));c=C5();a.qG=c;S(c,Ck((Q(a.nW,2)).kh,Da(Q(b,10))));c=a.qG;d=new Z;o=(Q(c,c.ke-1|0)).kh;f=a.qG;BY(d,o,(Q(f,f.ke-1|0)).kg+25.0);S(c,d);c=a.qG;d=new Z;o=(Q(c,c.ke-1|0)).kh+10.0;f
=a.qG;BY(d,o,(Q(f,f.ke-1|0)).kg-10.0);S(c,d);c=C5();a.rf=c;d=new Z;o=Cg(Q(b,11));f=a.qO;BY(d,o,(Q(f,f.ke-1|0)).kg+15.0);S(c,d);c=a.rf;d=new Z;o=Cg(Q(b,0))+16.0;b=a.rf;BY(d,o,(Q(b,b.ke-1|0)).kg);S(c,d);},
AQm=(a,b,c)=>{let d=new T0();XS(d,a,b,c);return d;},
ACA=(a,b,c)=>{let d,e,f;G3(a,0);d=new Rw;e=a.w_;f=new RB;f.yH=20;f.Aa=4000;f.y$=1.0;ATh(d,b,e,f);d.AZ=Cc(8);a.lS=d;c=Es(Ry);d.rM.ne=c;b=a.lS;d=a.o2;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.su;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.qO;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.sJ;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.oI;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.rx;e=CB;Cy(b.l1,d,10.0,e,1);b=a.lS;d=a.mQ;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.r5;e=CB;Cy(b.l1,d,10.0,e,1);b=a.lS;d=a.on;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.rk;e=CB;Cy(b.l1,
d,10.0,e,1);b=a.lS;d=a.sg;e=CB;Cy(b.l1,d,10.0,e,1);b=a.lS;d=a.n6;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.sk;e=CB;Cy(b.l1,d,10.0,e,1);b=a.lS;d=a.og;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.rO;e=CB;Cy(b.l1,d,10.0,e,1);b=a.lS;d=a.sU;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.tC;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.ng;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.ru;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.nW;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;d=a.rf;e=CB;Cy(b.l1,d,21.0,e,1);b=a.lS;c=Es(Wv);b.rM.ne=c;b=a.lS;d=a.vg;e=CB;Cy(b.l1,d,10.0,e,1);b=a.lS;d
=a.q7;e=I9;Cy(b.l1,d,10.0,e,1);b=a.lS;d=a.u7;e=CB;Cy(b.l1,d,10.0,e,1);b=a.lS;d=a.qG;e=I9;Cy(b.l1,d,10.0,e,1);};
let F0=F(HK);
let AE3=(a,b)=>{DN(Bz(b));};
let ACS=F(EM);
let WJ=null;
let AU2=()=>{WJ=M(ADs);};
let AMp=F();
let On=null,QG=null,Rr=null;
let AG7=()=>{On=AA3([X(1),X(10),X(100),X(10000),X(100000000),D(1874919424, 2328306)]);QG=new MX;Rr=new UL;};
let ANl=F();
let K$=Ce,XX=null,H4=null,IH=null;
let AGV=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AX1(b):D(0, 2146959360);c.v8=Ek(Dc(d,D(0, 2147483648)),Ce)?0:1;e=Dc(d,D(4294967295, 1048575));f=Bm(AV6(d,52))&2047;if(Ek(e,Ce)&&!f){c.uP=Ce;c.t7=0;return;}if(f)e=ADC(e,D(0, 1048576));else{e=FU(e,1);while(Ek(Dc(e,D(0, 1048576)),Ce)){e=FU(e,1);f=f+(-1)|0;}}g=IH;h=AN5(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=IH.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Ji(e,H4.data[i],j);if(ADe(k,K$)){while(Fo(k,K$)<=0){h=h+(-1)|0;k=De(Bd(k,X(10)),X(9));}g=IH.data;i
=h+1|0;j=12+(f-g[i]|0)|0;k=Ji(e,H4.data[i],j);}e=FU(e,1);d=De(e,X(1));g=H4.data;i=h+1|0;l=g[i];f=j-1|0;m=Ji(d,l,f);l=Ji(AGB(e,X(1)),H4.data[i],f);n=X(1);while(true){o=Bd(n,X(10));if(Fo(E2(k,o),E2(l,o))<=0)break;n=o;}p=X(1);while(true){q=Bd(p,X(10));if(Fo(E2(k,q),E2(m,q))>=0)break;p=q;}i=Fo(n,p);e=i>0?Bd(E2(k,n),n):i<0?De(Bd(E2(k,p),p),p):Bd(E2(De(k,Na(p,X(2))),p),p);if(Fo(e,D(2808348672, 232830643))>=0)while(true){h=h+1|0;e=E2(e,X(10));if(Fo(e,D(2808348672, 232830643))<0)break;}else if(Fo(e,D(1569325056, 23283064))
<0){h=h+(-1)|0;e=Bd(e,X(10));}c.uP=e;c.t7=h-330|0;},
Ji=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Dc(b,X(65535));f=Dc(Bg(b,16),X(65535));g=Dc(Bg(b,32),X(65535));h=Dc(Bg(b,48),X(65535));i=Dc(c,X(65535));j=Dc(Bg(c,16),X(65535));k=Dc(Bg(c,32),X(65535));l=Dc(Bg(c,48),X(65535));return De(De(De(FU(Bd(l,h),32+d|0),FU(De(Bd(l,g),Bd(k,h)),16+d|0)),FU(De(De(Bd(l,f),Bd(k,g)),Bd(j,h)),d)),Bg(De(De(De(Bd(k,e),Bd(j,f)),Bd(i,g)),FU(De(De(De(Bd(l,e),Bd(k,f)),Bd(j,g)),Bd(i,h)),16)),32-d|0));},
AFQ=()=>{K$=E2(X(-1),X(10));XX=ALe();H4=AA3([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);IH=AX3([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function MX(){let a=this;C.call(a);a.uP=Ce;a.t7=0;a.v8=0;}
let AAD=a=>{return;},
ALe=()=>{let a=new MX();AAD(a);return a;};
let Hf=F(BH);
let LP=null,O7=null,SV=null,L6=null,U3=null;
let ARU=()=>{let b,c,d,e;b=new Hf;b.kt=A(489);b.kn=0;LP=b;c=new Hf;c.kt=A(490);c.kn=1;O7=c;d=new Hf;d.kt=A(491);d.kn=2;SV=d;e=new Hf;e.kt=A(492);e.kn=3;L6=e;U3=V(Hf,[b,c,d,e]);};
function JB(){let a=this;C.call(a);a.mF=null;a.mC=null;a.sB=0;a.q4=0;a.rH=null;a.sb=0;a.xJ=null;}
let Ih=null;
let VZ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.sB=1;a.sb=0;g=new Bo;C0();a.xJ=g;MU();switch(Td.data[b.kn]){case 1:a.mF=SL(c,d,f);b=new HX;b.oU=1;b.qA=0;b.ul=1;if(!Do){h=FM(e);e=h.data.length;f=new J9;i=0+e|0;Bu(f);f.kC=(-1);f.kL=e;f.kj=e;f.kr=0;f.kj=i;f.r1=0;f.sn=0;f.rE=h;}else{d=e*2|0;if(d<0){b=new Bl;f=new K;f.ka=G(16);Cb(f,f.j_,Cp(A(493)));J(f,f.j_,d,10);g=new I;h=f.ka;j=h.data;d=f.j_;e=j.length;if(d>=0&&d<=(e-0|0)){g.kb=L(h.data,0,d);b.kc=1;b.kd=1;b.kf=g;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}f=new C4;h=BN(d);f.kC
=(-1);f.kL=d;f.kj=d;f.lk=Ct;f.lP=0;f.le=h;f.kr=0;f.kj=d;f.mu=1;f.lY=0;f.lk=Dr();f=Kl(f);}b.ol=f;f.kj=f.kr;f.kr=0;f.kC=(-1);f=Br;g=f.kk.createBuffer();e=f.mI;f.mI=e+1|0;Ca(f.nq,e,Cd(g));b.sy=e;b.rT=!c?35048:35044;a.mC=b;a.q4=0;break a;case 2:break;case 3:a.mF=Sl(c,d,f);a.mC=Wt(c,e);a.q4=0;break a;case 4:break b;default:break b;}a.mF=ARC(c,d,f);a.mC=Wt(c,e);a.q4=0;break a;}b=new Pm;Ti(b,0,d,f);a.mF=b;b=new Qy;b.oU=1;b.qA=0;b.ul=1;if(!Do){h=FM(e);d=h.data.length;f=new J9;k=0+d|0;U_(f,d);f.kr=0;f.kj=k;f.r1=0;f.sn
=0;f.rE=h;}else{c=e*2|0;if(c<0){b=new Bl;f=new K;f.ka=G(16);Eu(f,f.j_,A(493));J(f,f.j_,c,10);g=new I;h=f.ka;j=h.data;d=f.j_;e=j.length;if(d>=0&&d<=(e-0|0)){g.kb=L(h.data,0,d);b.kc=1;b.kd=1;b.kf=g;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}f=new C4;h=BN(c);Bu(f);f.kC=(-1);f.kL=c;f.kj=c;f.lk=Ct;f.lP=0;f.le=h;f.kr=0;f.kj=c;f.mu=1;f.lY=0;f.lk=Dr();f=Kl(f);}b.ol=f;f.kj=f.kr;f.kr=0;f.kC=(-1);f=Br;g=f.kk.createBuffer();d=f.mI;f.mI=d+1|0;Ca(f.nq,d,Cd(g));b.sy=d;b.rT=35044;a.mC=b;a.q4=1;}b=Df;f=Ih;if(b===null){f=f.mv.data[0];while
(f!==null&&f.nl!==null){f=f.ny;}}else{l=b;if(!l.$id$){g=Fd();l.$id$=g;}e=b.$id$;h=f.mv.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.pQ==e){g=f.nl;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.ny;}}f=f===null?null:f.mZ;if(f===null){f=new Bh;f.kF=1;f.ki=R(C,16);}S(f,a);Fu(Ih,b,f);},
AWp=(a,b,c,d,e)=>{let f=new JB();VZ(f,a,b,c,d,e);return f;},
S4=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.mF.h1(b,g);g=a.rH;if(g!==null&&g.h2()>0)a.rH.h1(b,h);if(a.mC.h3()>0)a.mC.ha();}if(a.q4){if(a.mC.h3()<=0)Br.h4(c,d,e);else{g=a.mC.he(0);i=g.kr;CK(g,d);Br.h5(c,e,5123,g);CK(g,i);}}else{j=0;if(a.sb)j=a.rH.h2();if(a.mC.h3()<=0){if(a.sb&&j>0)EQ.h6(c,d,e,j);else Br.h4(c,d,e);}else{if((e+d|0)>a.mC.h7()){b=new T;g=new K;g.ka=G(16);E(g,g.j_,A(494));J(g,g.j_,e,10);E(g,g.j_,A(495));J(g,g.j_,d,10);E(g,g.j_,A(496));c=a.mC.h7();J(g,g.j_,c,10);E(g,g.j_,
A(55));h=new I;k=g.ka;l=k.data;d=g.j_;e=l.length;if(d>=0&&d<=(e-0|0)){h.kb=L(k.data,0,d);b.kc=1;b.kd=1;b.kf=h;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}if(a.sb&&j>0)EQ.h8(c,e,5123,d*2|0,j);else Br.h9(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.mF.h$(b,g);g=a.rH;if(g!==null&&g.h2()>0)a.rH.h$(b,h);if(a.mC.h3()>0)a.mC.h_();}},
ATk=()=>{let b,c,d,e;b=new Jm;c=Kc(16);b.pD=0;d=R(F2,c);e=d.data;b.mv=d;b.tH=0.75;b.qF=e.length*0.75|0;Ih=b;};
function NM(){let a=this;C.call(a);a.uR=null;a.w$=null;a.xG=null;a.uq=null;a.vh=null;a.q1=null;a.rJ=null;a.vs=0.0;a.xC=0.0;a.uj=0.0;a.uS=0.0;a.xw=null;a.zj=null;a.yW=null;}
let ANq=a=>{let b,c,d;b=new Bo;C0();a.uR=b;b=new Bo;b.ko=0.0;b.kp=0.0;b.kq=(-1.0);a.w$=b;b=new Bo;b.ko=0.0;b.kp=1.0;b.kq=0.0;a.xG=b;a.uq=Dj();a.vh=Dj();a.q1=Dj();a.rJ=Dj();a.vs=1.0;a.xC=100.0;a.uj=0.0;a.uS=0.0;a.xw=AM1();a.zj=new Bo;b=new L$;MH();c=new Bo;b.za=c;d=new Bo;b.Aq=d;c.ko=0.0;c.kp=0.0;c.kq=0.0;d.ko=0.0;d.kp=0.0;d.kq=0.0;a.yW=b;},
ALs=(a,b,c,d,e,f)=>{let g,h;g=b.ko-c;h=B6.lA.height-b.kp-d;b.ko=2.0*g/e-1.0;b.kp=2.0*h/f-1.0;b.kq=2.0*b.kq-1.0;ABI(b,a.rJ);return b;};
function QN(){let a=this;NM.call(a);a.we=0.0;a.xK=null;}
let WC=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.uq;d=a.we;e=a.uj;f=d* -e/2.0;e=d*e/2.0;g=a.uS;MJ(c,f,e,d* -(g/2.0),d*g/2.0,a.vs,a.xC);c=a.vh;h=a.uR;i=a.xK;d=h.ko;j=h.kp;f=h.kq;i.ko=d;i.kp=j;i.kq=f;k=a.w$;l=k.ko;e=k.kp;g=k.kq;d=d+l;j=j+e;f=f+g;i.ko=d;i.kp=j;i.kq=f;i=a.xG;k=VT;k.ko=d;k.kp=j;k.kq=f;l=h.ko;e=h.kp;g=h.kq;l=d-l;e=j-e;g=f-g;k.ko=l;k.kp=e;k.kq=g;ADL(c,k,i);i=P4;l= -h.ko;e= -h.kp;g= -h.kq;Lq(i);m=i.lC.data;m[12]=l;m[13]=e;m[14]=g;S8(c,i);Dm(a.q1,a.uq.lC);OJ(a.q1.lC,a.vh.lC);if(b){Dm(a.rJ,a.q1.lC);AEc(a.rJ.lC);ALz(a.xw,
a.rJ);}};
function HW(){C.call(this);this.nm=0;}
let Js=null,GR=null,QY=null;
let DO=a=>{return a.nm;},
AUN=()=>{let b;b=new HW;b.nm=1;Js=b;b=new HW;b.nm=0;GR=b;QY=M(Cl);};
function Uo(){B4.call(this);this.sT=null;}
let AOi=(a,b,c,d,e,f)=>{let g;b=a.sT;if(b.pn.nm){b.pn=GR;if(BX===null){b=new C3;g=new Cu;g.l4=BN(32);b.mm=g;g=new K;Bu(g);g.ka=G(16);b.l7=g;b.l6=G(32);b.l8=0;b.l9=Co;BX=b;}g=a.sT.pn;b=A(2);if(g!==null)b=!g.nm?A(82):A(83);B2(Bz(b));}else{b.pn=Js;if(BX===null){b=new C3;g=new Cu;g.l4=BN(32);b.mm=g;g=new K;Bu(g);g.ka=G(16);b.l7=g;b.l6=G(32);b.l8=0;b.l9=Co;BX=b;}g=a.sT.pn;b=A(2);if(g!==null)b=!g.nm?A(82):A(83);B2(Bz(b));}};
let Nu=F(0);
let Vy=F(0);
function Ps(){let a=this;C.call(a);a.yC=null;a.x2=null;a.zY=0;a.AF=0;}
let ANm=a=>{let b,c;if(!a.zY){b=a.yC;b.wx=null;if(B3!==b)B3=b;B3.pb=EE();c=a.x2;b=null;c.qc.e(b);}};
function Pz(){let a=this;C.call(a);a.mk=null;a.nd=0;a.y2=Ce;a.zV=0;a.An=0;}
let AJS=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.y2=X(-1);a.zV=(-1);a.An=(-1);c=b.length;if(!c){d=new Bl;d.kc=1;d.kd=1;d.kf=A(497);B(d);}e=R(Eb,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.mk=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.ot=c;switch(d.m1){case 5120:case 5121:break;case 5122:case 5123:g=2*d.mL|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.mL|0;break a;default:break b;}g=d.mL;break a;}g=0;}c=c+g|0;h=h+1|0;}a.nd=c;},
Rs=a=>{let b=new Pz();AJS(b,a);return b;};
function Mk(){let a=this;C.call(a);a.nQ=null;a.of=0;a.sl=null;a.wV=null;a.xH=null;a.w8=null;a.oa=null;a.w6=null;a.xU=null;a.wB=null;a.m7=0;a.um=0;a.vZ=0;a.AP=null;a.mf=null;a.mh=null;a.lf=0;a.AC=0;a.nG=null;a.rl=null;}
let H$=0,NG=null,Mg=null,Nw=null,AO3=null;
let IA=()=>{IA=BR(Mk);ANL();};
let ATg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;IA();a.nQ=A(68);a.sl=GF(51,0.800000011920929);a.wV=GF(51,0.800000011920929);a.xH=GF(51,0.800000011920929);a.oa=GF(51,0.800000011920929);a.w6=GF(51,0.800000011920929);a.xU=GF(51,0.800000011920929);a.AC=0;if(!Do){d=Ba(1);e=d.data.length;f=new GB;g=0+e|0;f.kC=(-1);f.kL=e;f.kj=e;f.kr=0;f.kj=g;f.pX=0;f.rb=0;f.pF=d;}else{h=new C4;d=BN(4);h.kC=(-1);h.kL=4;h.kj=4;h.lk=Ct;h.lP=0;h.le=d;h.kr=0;h.kj=4;h.mu=1;h.lY=0;h.lk=Dr();f=Hk(h);}a.nG=f;if(!Do){d=Ba(1);e=d.data.length;f=new GB;g
=0+e|0;f.kC=(-1);f.kL=e;f.kj=e;f.kr=0;f.kj=g;f.pX=0;f.rb=0;f.pF=d;}else{h=new C4;d=BN(4);h.kC=(-1);h.kL=4;h.kj=4;h.lk=Ct;h.lP=0;h.le=d;h.kr=0;h.kj=4;h.mu=1;h.lY=0;h.lk=Dr();f=Hk(h);}a.rl=f;if(b===null){b=new Bl;b.kc=1;b.kd=1;b.kf=A(498);B(b);}if(c===null){b=new Bl;b.kc=1;b.kd=1;b.kf=A(499);B(b);}f=NG;if(f!==null&&f.kb.length>0){f=new K;f.ka=G(16);h=NG;E(f,f.j_,h);E(f,f.j_,b);b=new I;d=f.ka;i=d.data;e=f.j_;j=i.length;if(e>=0&&e<=(j-0|0))b.kb=L(d.data,0,e);else{b=new H;b.kc=1;b.kd=1;B(b);}}f=Mg;if(f!==null&&f.kb.length
>0){f=new K;f.ka=G(16);h=Mg;E(f,f.j_,h);E(f,f.j_,c);c=new I;d=f.ka;i=d.data;e=f.j_;j=i.length;if(e>=0&&e<=(j-0|0))c.kb=L(d.data,0,e);else{b=new H;b.kc=1;b.kd=1;B(b);}}a.mf=b;a.mh=c;if(!Do){i=Cc(16);k=i.data.length;f=new Ip;l=0+k|0;f.kC=(-1);f.kL=k;f.kj=k;f.kr=0;f.kj=l;f.ra=0;f.rN=0;f.qE=i;}else{f=new C4;d=BN(64);f.kC=(-1);f.kL=64;f.kj=64;f.lk=Ct;f.lP=0;f.le=d;f.kr=0;f.kj=64;f.mu=1;f.lY=0;f.lk=Dr();f=Fm(f);}a.AP=f;CO(a,b,c);if(a.of){AEd(a);AJJ(a);b=Df;c=Nw;l=BF(c,b);c=l<0?null:c.kY.data[l];if(c===null){c=new Bh;c.kF
=1;c.ki=R(C,16);}S(c,a);Ci(Nw,b,c);}},
Q8=(a,b)=>{let c=new Mk();ATg(c,a,b);return c;},
CO=(a,b,c)=>{let d;a.um=WG(a,35633,b);d=WG(a,35632,c);a.vZ=d;if(a.um!=(-1)&&d!=(-1)){d=Br.ik();if(!d)d=(-1);d=AP9(a,d);a.m7=d;if(d!=(-1)){a.of=1;return;}a.of=0;return;}a.of=0;},
WG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Br;if(!Do){e=Ba(1);f=e.data.length;g=new GB;h=0+f|0;g.kC=(-1);g.kL=f;g.kj=f;g.kr=0;g.kj=h;g.pX=0;g.rb=0;g.pF=e;}else{g=new C4;e=BN(4);g.kC=(-1);g.kL=4;g.kj=4;g.lk=Ct;g.lP=0;g.le=e;g.kr=0;g.kj=4;g.mu=1;g.lY=0;g.lk=Dr();g=Hk(g);}i=d.im(b);if(!i)return (-1);d.io(i,c);d.ip(i);d.eG(i,35713,g);if(Fk(g,0))return i;j=d.iq(i);c=new K;c.ka=G(16);d=a.nQ;E(c,c.j_,d);d=b!=35633?A(500):A(501);E(c,c.j_,d);d=new I;e=c.ka;k=e.data;i=c.j_;l=k.length;if(i>=0&&i<=(l-0|0)){d.kb=L(e.data,0,i);a.nQ
=d;c=new K;c.ka=G(16);E(c,c.j_,d);E(c,c.j_,j);d=new I;e=c.ka;k=e.data;i=c.j_;l=k.length;if(i>=0&&i<=(l-0|0)){d.kb=L(e.data,0,i);a.nQ=d;return (-1);}c=new H;c.kc=1;c.kd=1;B(c);}c=new H;c.kc=1;c.kd=1;B(c);},
AP9=(a,b)=>{let c,d,e,f;c=Br;if(b==(-1))return (-1);c.ir(b,a.um);c.ir(b,a.vZ);c.is(b);d=new C4;e=BN(4);d.kC=(-1);d.kL=4;d.kj=4;d.lk=Ct;d.lP=0;d.le=e;d.kr=0;d.kj=4;d.mu=1;d.lY=0;d.lk=Dr();f=Hk(d);c.eF(b,35714,f);if(Fk(f,0))return b;a.nQ=Br.g$(b);return (-1);},
Jy=(a,b,c)=>{let d,e,f,g,h,i;d=a.sl;e=(-2);f=Ff(d,b);if(f>=0)e=d.nn.data[f];if(e==(-2)){e=Br.it(a.m7,b);if(e==(-1)&&c){if(a.of){d=new Bl;g=new K;g.ka=G(16);E(g,g.j_,A(502));E(g,g.j_,b);E(g,g.j_,A(503));b=new I;h=g.ka;i=h.data;e=g.j_;f=i.length;if(e>=0&&e<=(f-0|0)){b.kb=L(h.data,0,e);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;b.kc=1;b.kd=1;B(b);}b=new BO;d=new K;d.ka=G(16);E(d,d.j_,A(504));if(!a.of)g=a.nQ;else{g=Br.g$(a.m7);a.nQ=g;}E(d,d.j_,g);g=new I;h=d.ka;i=h.data;e=d.j_;f=i.length;if(e>=0&&e<=(f-0|0)){g.kb=L(h.data,
0,e);b.kc=1;b.kd=1;b.kf=g;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}E1(a.sl,b,e);}return e;},
AJJ=a=>{let b,c,d,e,f;b=a.nG;b.kr=0;b.kj=b.kL;b.kC=(-1);Br.eF(a.m7,35718,b);c=Fk(a.nG,0);a.w8=R(I,c);d=0;while(d<c){b=a.nG;b.kr=0;b.kj=b.kL;b.kC=(-1);VE(b,0,1);b=a.rl;b.kr=0;b.kj=b.kL;b.kC=(-1);e=Br.eE(a.m7,d,a.nG,b);f=Br.it(a.m7,e);E1(a.sl,e,f);E1(a.wV,e,Fk(a.rl,0));E1(a.xH,e,Fk(a.nG,0));a.w8.data[d]=e;d=d+1|0;}},
AEd=a=>{let b,c,d,e,f;b=a.nG;b.kr=0;b.kj=b.kL;b.kC=(-1);Br.eF(a.m7,35721,b);c=Fk(a.nG,0);a.wB=R(I,c);d=0;while(d<c){b=a.nG;b.kr=0;b.kj=b.kL;b.kC=(-1);VE(b,0,1);b=a.rl;b.kr=0;b.kj=b.kL;b.kC=(-1);e=Br.eD(a.m7,d,a.nG,b);f=Br.iw(a.m7,e);E1(a.oa,e,f);E1(a.w6,e,Fk(a.rl,0));E1(a.xU,e,Fk(a.nG,0));a.wB.data[d]=e;d=d+1|0;}},
ANL=()=>{let b,c,d,e;H$=1;NG=A(68);Mg=A(68);Nw=E6(51,0.800000011920929);if(!Do){b=Ba(1);c=b.data.length;d=new GB;e=0+c|0;d.kC=(-1);d.kL=c;d.kj=c;d.kr=0;d.kj=e;d.pX=0;d.rb=0;d.pF=b;}else{d=new C4;b=BN(4);d.kC=(-1);d.kL=4;d.kj=4;d.lk=Ct;d.lP=0;d.le=b;d.kr=0;d.kj=4;d.mu=1;d.lY=0;d.lk=Dr();d=Hk(d);}AO3=d;};
function Nl(){let a=this;Bh.call(a);a.nY=null;a.tI=null;a.mP=0;}
let FI=a=>{let b,c,d,e;b=a.mP-1|0;if(0>b)b=0;a.mP=b;c=a.nY;if(c===null)return;a:{if(c!==a.ki&&!b){d=c.data;a.tI=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.nY=null;},
Cv=a=>{let b,c,d,e;b=a.nY;if(b!==null){c=a.ki;if(b===c){a:{b=a.tI;if(b!==null){d=b.data.length;e=a.ke;if(d>=e){Dv(c,0,b,0,e);a.ki=a.tI;a.tI=null;break a;}}I5(a,c.data.length);}return;}}};
function Li(){let a=this;Bh.call(a);a.qN=0;a.q$=null;a.qV=0;}
let ANb=a=>{a.qN=a.qN+1|0;},
APf=a=>{let b,c,d,e,f,g,h,i,j;b=a.qN;if(!b){c=new BO;c.kc=1;c.kd=1;c.kf=A(505);B(c);}d=b-1|0;a.qN=d;if(!d){a:{b=a.qV;if(b>0){e=a.ke;if(b==e){a.q$.l5=0;if(d>0)a.qV=e;else{f=a.ki;d=0;c=null;if(d>e){c=new Bl;c.kc=1;c.kd=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.ke=0;}break a;}}d=0;b=a.q$.l5;b:{while(true){if(d>=b)break b;c=a.q$;f=c.mS.data;e=c.l5-1|0;c.l5=e;h=f[e];if(h>=a.qV){if(a.qN<=0)Di(a,h);else{VO(a,h);if(h>=a.ke)break;}}d=d+1|0;}i=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,h,10);E(c,c.j_,A(19));d
=a.ke;J(c,c.j_,d,10);j=new I;f=c.ka;g=f.data;b=c.j_;e=g.length;if(b>=0&&b<=(e-0|0)){j.kb=L(f.data,0,b);i.kc=1;i.kd=1;i.kf=j;B(i);}c=new H;c.kc=1;c.kd=1;B(c);}d=a.qV-1|0;while(true){if(d<0)break a;if(a.qN<=0)Di(a,d);else{VO(a,d);if(d>=a.ke){i=new H;c=new K;c.ka=G(16);E(c,c.j_,A(18));J(c,c.j_,d,10);E(c,c.j_,A(19));d=a.ke;J(c,c.j_,d,10);j=new I;f=c.ka;g=f.data;b=c.j_;e=g.length;if(b>=0&&b<=(e-0|0)){j.kb=L(f.data,0,b);i.kc=1;i.kd=1;i.kf=j;B(i);}c=new H;c.kc=1;c.kd=1;B(c);}}d=d+(-1)|0;}}a.qV=0;}},
VO=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.qV)return;c=0;d=a.q$;e=d.l5;while(true){f=BW(c,e);if(f>=0){Ma(d,b);return;}if(f>=0){g=new H;h=new K;h.ka=G(16);E(h,h.j_,A(18));J(h,h.j_,c,10);E(h,h.j_,A(19));b=d.l5;J(h,h.j_,b,10);d=new I;i=h.ka;j=i.data;c=h.j_;e=j.length;if(c>=0&&c<=(e-0|0)){d.kb=L(i.data,0,c);g.kc=1;g.kd=1;g.kf=d;B(g);}d=new H;d.kc=1;d.kd=1;B(d);}f=BW(b,d.mS.data[c]);if(!f)break;if(f<0){AS4(d,c,b);return;}c=c+1|0;}};
function UL(){let a=this;C.call(a);a.us=0;a.ue=0;a.wf=0;}
let WF=F();
let Td=null;
let MU=()=>{MU=BR(WF);AOv();};
let AOv=()=>{let b,c;b=Ba((U3.p()).data.length);c=b.data;Td=b;c[O7.kn]=1;c[SV.kn]=2;c[L6.kn]=3;c[LP.kn]=4;};
let JJ=F(0);
function Jk(){let a=this;C.call(a);a.oe=null;a.p7=null;a.xg=0;a.AK=0;a.uz=0;a.r6=0;a.ss=0;}
let Ti=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.r6=0;a.ss=0;a.AK=b;a.oe=d;c=Dy(d.nd/4|0,c);if(!Do){e=Cc(c);f=e.data.length;d=new Ip;g=0+f|0;d.kC=(-1);d.kL=f;d.kj=f;d.kr=0;d.kj=g;d.ra=0;d.rN=0;d.qE=e;}else{c=c*4|0;if(c<0){d=new Bl;h=new K;h.ka=G(16);BZ(h,h.j_,A(493));J(h,h.j_,c,10);i=new I;e=h.ka;j=e.data;c=h.j_;k=j.length;if(c>=0&&c<=(k-0|0)){i.kb=L(e.data,0,c);d.kc=1;d.kd=1;d.kf=i;B(d);}d=new H;d.kc=1;d.kd=1;B(d);}h=new C4;e=BN(c);h.kC=(-1);h.kL=c;h.kj=c;h.lk=Ct;h.lP=0;h.le=e;h.kr=0;h.kj=c;h.mu=1;h.lY=0;h.lk=Dr();d
=Fm(h);}a.p7=d;d.kj=d.kr;d.kr=0;d.kC=(-1);d=Br;h=d.kk.createBuffer();k=d.mI;d.mI=k+1|0;Ca(d.nq,k,Cd(h));a.xg=k;a.uz=!b?35048:35044;},
SL=(a,b,c)=>{let d=new Jk();Ti(d,a,b,c);return d;},
AEZ=a=>{return a.oe;},
ANZ=a=>{return a.p7.kj/(a.oe.nd/4|0)|0;},
ALq=(a,b,c,d)=>{let e,f,g;a.r6=1;e=a.p7;f=null;g=e instanceof Fe;if(g)f=Fm(e);else if(e instanceof EC)f=e;if(f===null){f=new T;f.kc=1;f.kd=1;f.kf=A(506);B(f);}f.kr=0;f.kj=f.kL;f.kC=(-1);CK(e,0);JG(f,b,c,d);CK(e,0);if(!g)CX(e,d);else CX(e,d<<2);CK(a.p7,0);CX(a.p7,d);if(a.ss){e=Br;f=a.p7;e.eB(34962,f.kj,f,a.uz);a.r6=0;}},
ADN=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Br;d.iB(34962,a.xg);if(a.r6){e=a.p7;d.eB(34962,e.kj,e,a.uz);a.r6=0;}a:{f=a.oe.mk.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.oe.mk.data[g];j=h[g];if(j>=0){e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}e.iC(j);k=i.mL;l=i.m1;m=i.m$;n=a.oe.nd;o=i.ot;e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}e.iD(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.oe.mk.data[g];d=i.m6;e=b.oa;p=(-1);j=Ff(e,d);if(j>=0)p=e.nn.data[j];if(p>=0){e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}e.iC(p);j
=i.mL;k=i.m1;l=i.m$;m=a.oe.nd;n=i.ot;e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}e.iD(p,j,k,l,m,n);}g=g+1|0;}}a.ss=1;},
Zu=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Br;e=a.oe.mk.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}h.iE(g);}f=f+1|0;}}i=0;while(i<e){j=a.oe.mk.data[i].m6;k=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}l=Br;h=b.oa;g=(-2);f=Ff(h,j);if(f>=0)g=h.nn.data[f];if(g==(-2)){g=l.iw(b.m7,j);E1(b.oa,j,g);}if(g!=(-1))k.iE(g);i=i+1|0;}}d.iB(34962,0);a.ss=0;};
let KJ=F(0);
function HX(){let a=this;C.call(a);a.ol=null;a.sy=0;a.ul=0;a.oU=0;a.qA=0;a.rT=0;}
let AF9=a=>{return a.ol.kj;},
Yc=a=>{return a.ol.kL;},
AKZ=(a,b,c,d)=>{let e;a.oU=1;e=a.ol;e.kr=0;e.kj=e.kL;e.kC=(-1);Vp(e,b,c,d);e=a.ol;c=e.kr;e.kj=c;e.kr=0;e.kC=(-1);if(a.qA){Br.eB(34963,c,e,a.rT);a.oU=0;}},
Zb=(a,b)=>{a.oU=a.oU|b;return a.ol;},
ARO=a=>{let b,c,d;b=a.sy;if(!b){c=new T;c.kc=1;c.kd=1;c.kf=A(507);B(c);}Br.iB(34963,b);if(a.oU){c=Br;d=a.ol;c.eB(34963,d.kj,d,a.rT);a.oU=0;}a.qA=1;},
AOg=a=>{Br.iB(34963,0);a.qA=0;};
function P8(){let a=this;C.call(a);a.n$=null;a.os=null;a.oS=null;a.v4=0;a.wh=0;a.yU=0;a.t4=0;a.rV=0;a.sE=0;}
let AJ7=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.rV=0;a.sE=0;a.yU=b;a.n$=d;c=Dy(d.nd,c);if(!Do){e=BN(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new C4;g=0+f|0;d.kC=(-1);d.kL=f;d.kj=f;d.lk=Ct;d.lP=0;d.le=e;d.kr=0;d.kj=g;d.mu=0;d.lY=0;break a;}d=new H;d.kc=1;d.kd=1;Bk(d);B(d);}if(c<0){d=new Bl;h=new K;h.ka=G(16);BZ(h,h.j_,A(493));J(h,h.j_,c,10);i=new I;e=h.ka;j=e.data;c=h.j_;f=j.length;if(c>=0&&c<=(f-0|0)){i.kb=L(e.data,0,c);d.kc=1;d.kd=1;d.kf=i;B(d);}d=new H;d.kc=1;d.kd=1;B(d);}d=new C4;e=BN(c);d.kC=(-1);d.kL=c;d.kj=
c;d.lk=Ct;d.lP=0;d.le=e;d.kr=0;d.kj=c;d.mu=1;d.lY=0;d.lk=Dr();}a.oS=d;a.wh=1;a.t4=!b?35048:35044;a.os=Fm(d);d=Br;h=d.kk.createBuffer();g=d.mI;d.mI=g+1|0;Ca(d.nq,g,Cd(h));Br.iB(34962,g);Br.eB(34962,a.oS.kL,null,a.t4);Br.iB(34962,0);a.v4=g;d=a.os;d.kj=d.kr;d.kr=0;d.kC=(-1);d=a.oS;d.kj=d.kr;d.kr=0;d.kC=(-1);},
ARC=(a,b,c)=>{let d=new P8();AJ7(d,a,b,c);return d;},
AA5=a=>{return a.n$;},
ACe=a=>{return (a.os.kj*4|0)/a.n$.nd|0;},
Z1=(a,b,c,d)=>{let e,f,g;a.rV=1;if(!a.wh){e=a.os;e.kr=0;e.kj=e.kL;e.kC=(-1);JG(e,b,c,d);e=a.os;e.kj=e.kr;e.kr=0;e.kC=(-1);CK(a.oS,0);CX(a.oS,a.os.kj<<2);}else{e=a.oS;f=null;g=e instanceof Fe;if(g)f=Fm(e);else if(e instanceof EC)f=e;if(f===null){f=new T;f.kc=1;f.kd=1;f.kf=A(506);B(f);}f.kr=0;f.kj=f.kL;f.kC=(-1);CK(e,0);JG(f,b,c,d);CK(e,0);if(!g)CX(e,d);else CX(e,d<<2);CK(a.os,0);CX(a.os,d);}if(a.sE){e=Br;f=a.oS;e.eC(34962,0,f.kj,f);a.rV=0;}},
AKJ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Br;d.iB(34962,a.v4);if(a.rV){CX(a.oS,a.os.kj*4|0);e=a.oS;d.eB(34962,e.kj,e,a.t4);a.rV=0;}a:{f=a.n$.mk.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.n$.mk.data[g];j=h[g];if(j>=0){e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}e.iC(j);k=i.mL;l=i.m1;m=i.m$;n=a.n$.nd;o=i.ot;e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}e.iD(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.n$.mk.data[g];p=i.m6;e=b.oa;q=(-1);j=Ff(e,p);if(j>=0)q=e.nn.data[j];if(q>=0){e=Br;if(b.lf){CO(b,
b.mf,b.mh);b.lf=0;}e.iC(q);j=i.mL;k=i.m1;l=i.m$;m=a.n$.nd;n=i.ot;e=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}e.iD(q,j,k,l,m,n);}g=g+1|0;}}a.sE=1;},
ADO=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Br;e=a.n$.mk.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}h.iE(g);}f=f+1|0;}}i=0;while(i<e){j=a.n$.mk.data[i].m6;k=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}l=Br;h=b.oa;g=(-2);f=Ff(h,j);if(f>=0)g=h.nn.data[f];if(g==(-2)){g=l.iw(b.m7,j);E1(b.oa,j,g);}if(g!=(-1))k.iE(g);i=i+1|0;}}d.iB(34962,0);a.sE=0;};
function Sp(){let a=this;C.call(a);a.p5=null;a.oY=null;a.xl=0;a.zM=0;a.p_=0;a.sH=0;a.xL=0;}
let ADb=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.p_=1;a.sH=0;c=c*2|0;if(!Do){d=BN(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new C4;g=0+e|0;f.kC=(-1);f.kL=e;f.kj=e;f.lk=Ct;f.lP=0;f.le=d;f.kr=0;f.kj=g;f.mu=0;f.lY=0;break a;}f=new H;f.kc=1;f.kd=1;Bk(f);B(f);}if(c<0){f=new Bl;h=new K;h.ka=G(16);BZ(h,h.j_,A(493));J(h,h.j_,c,10);i=new I;d=h.ka;j=d.data;c=h.j_;k=j.length;if(c>=0&&c<=(k-0|0)){i.kb=L(d.data,0,c);f.kc=1;f.kd=1;f.kf=i;B(f);}f=new H;f.kc=1;f.kd=1;B(f);}f=new C4;d=BN(c);f.kC=(-1);f.kL=c;f.kj=c;f.lk=Ct;f.lP=0;f.le
=d;f.kr=0;f.kj=c;f.mu=1;f.lY=0;f.lk=Dr();}a.oY=f;a.zM=1;a.xL=!b?35048:35044;f=Kl(f);a.p5=f;f.kj=f.kr;f.kr=0;f.kC=(-1);f=a.oY;f.kj=f.kr;f.kr=0;f.kC=(-1);f=Br;h=f.kk.createBuffer();e=f.mI;f.mI=e+1|0;Ca(f.nq,e,Cd(h));Br.iB(34963,e);Br.eB(34963,a.oY.kL,null,a.xL);Br.iB(34963,0);a.xl=e;},
Wt=(a,b)=>{let c=new Sp();ADb(c,a,b);return c;},
ANp=a=>{return a.p5.kj;},
Xj=a=>{return a.p5.kL;},
AGQ=(a,b,c,d)=>{let e,f;a.p_=1;e=a.p5;e.kr=0;e.kj=e.kL;e.kC=(-1);Vp(e,b,c,d);e=a.p5;e.kj=e.kr;e.kr=0;e.kC=(-1);CK(a.oY,0);CX(a.oY,d<<1);if(a.sH){e=Br;f=a.oY;e.eC(34963,0,f.kj,f);a.p_=0;}},
AQp=(a,b)=>{a.p_=a.p_|b;return a.p5;},
AHJ=a=>{let b,c,d;b=a.xl;if(!b){c=new T;c.kc=1;c.kd=1;c.kf=A(508);B(c);}Br.iB(34963,b);if(a.p_){CX(a.oY,a.p5.kj*2|0);c=Br;d=a.oY;c.eC(34963,0,d.kj,d);a.p_=0;}a.sH=1;},
AAI=a=>{Br.iB(34963,0);a.sH=0;};
function LD(){let a=this;C.call(a);a.oX=null;a.ps=null;a.u$=0;a.AO=0;a.uU=0;a.rY=0;a.tG=0;a.uh=0;a.ow=null;}
let MM=null;
let LJ=()=>{LJ=BR(LD);ATD();};
let ACm=(a,b,c,d)=>{let e,f,g,h,i,j;LJ();a.rY=0;a.tG=0;a.uh=(-1);e=new F5;e.pG=1;e.mS=Ba(16);a.ow=e;a.AO=b;a.oX=d;c=Dy(d.nd/4|0,c);if(!Do){f=Cc(c);g=f.data.length;d=new Ip;h=0+g|0;d.kC=(-1);d.kL=g;d.kj=g;d.kr=0;d.kj=h;d.ra=0;d.rN=0;d.qE=f;}else{c=c*4|0;if(c<0){d=new Bl;e=new K;e.ka=G(16);BZ(e,e.j_,A(493));J(e,e.j_,c,10);i=new I;f=e.ka;j=f.data;c=e.j_;g=j.length;if(c>=0&&c<=(g-0|0)){i.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=i;B(d);}d=new H;d.kc=1;d.kd=1;B(d);}e=new C4;f=BN(c);e.kC=(-1);e.kL=c;e.kj=c;e.lk=Ct;e.lP
=0;e.le=f;e.kr=0;e.kj=c;e.mu=1;e.lY=0;e.lk=Dr();d=Fm(e);}a.ps=d;d.kj=d.kr;d.kr=0;d.kC=(-1);d=Br;e=d.kk.createBuffer();g=d.mI;d.mI=g+1|0;Ca(d.nq,g,Cd(e));a.u$=g;a.uU=!b?35048:35044;d=MM;d.kr=0;d.kj=d.kL;d.kC=(-1);EQ.iG(1,d);d=MM;c=d.kr;if(c<d.kj){d.kr=c+1|0;a.uh=d.iH(c);return;}d=new Ny;d.kc=1;d.kd=1;B(d);},
Sl=(a,b,c)=>{let d=new LD();ACm(d,a,b,c);return d;},
ZI=a=>{return a.oX;},
AKP=a=>{return (a.ps.kj*4|0)/a.oX.nd|0;},
ZW=(a,b,c,d)=>{let e,f,g;a.rY=1;e=a.ps;f=null;g=e instanceof Fe;if(g)f=Fm(e);else if(e instanceof EC)f=e;if(f===null){f=new T;f.kc=1;f.kd=1;f.kf=A(506);B(f);}f.kr=0;f.kj=f.kL;f.kC=(-1);CK(e,0);JG(f,b,c,d);CK(e,0);if(!g)CX(e,d);else CX(e,d<<2);CK(a.ps,0);CX(a.ps,d);if(a.tG){e=Br;f=a.ps;e.eB(34962,f.kj,f,a.uU);a.rY=0;}},
AP3=(a,b,c)=>{let d;d=EQ;d.iI(a.uh);AO$(a,b,c);if(a.rY){d.iB(34962,a.u$);b=a.ps;CX(b,b.kj);b=a.ps;d.eB(34962,b.kj,b,a.uU);a.rY=0;}a.tG=1;},
AO$=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.ow;e=d.l5;f=!e?0:1;a:{g=a.oX.mk.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.oX.mk.data[e].m6;h=b.oa;i=(-1);f=Ff(h,d);if(f>=0)i=h.nn.data[f];d=a.ow;if(e>=d.l5)break;f=i!=d.mS.data[e]?0:1;e=e+1|0;}h=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,e,10);E(b,b.j_,A(19));e=d.l5;J(b,b.j_,e,10);d=new I;c=b.ka;j=c.data;f=b.j_;g=j.length;if(f>=0&&f<=(g-0|0)){d.kb=L(c.data,0,f);h.kc=1;h.kd=1;h.kf=d;B(h);}b=new H;U(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.mS.data[i]?0:1;i=i+1|0;}h=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,i,10);E(b,b.j_,A(19));e=d.l5;J(b,b.j_,e,10);d=new I;c=b.ka;j=c.data;f=b.j_;g=j.length;if(f>=0&&f<=(g-0|0)){d.kb=L(c.data,0,f);h.kc=1;h.kd=1;h.kf=d;B(h);}b=new H;U(b);B(b);}}}c:{if(!f){d:{B5.iB(34962,a.u$);if(a.ow.l5){k=a.oX.mk.data.length;e=0;while(true){if(e>=k)break d;d=a.ow;if(e>=d.l5)break;i=d.mS.data[e];if(i>=0){d=Br;if(b.lf){CO(b,
b.mf,b.mh);b.lf=0;}d.iE(i);}e=e+1|0;}h=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,e,10);E(b,b.j_,A(19));e=d.l5;J(b,b.j_,e,10);d=new I;c=b.ka;j=c.data;f=b.j_;g=j.length;if(f>=0&&f<=(g-0|0)){d.kb=L(c.data,0,f);h.kc=1;h.kd=1;h.kf=d;B(h);}b=new H;G4(b);B(b);}}a.ow.l5=0;e=0;while(true){if(e>=g)break c;h=a.oX.mk.data[e];if(c!==null){j=c.data;Ma(a.ow,j[e]);}else{l=a.ow;m=h.m6;d=b.oa;i=(-1);f=Ff(d,m);if(f>=0)i=d.nn.data[f];Ma(l,i);}d=a.ow;if(e>=d.l5){h=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,e,10);E(b,
b.j_,A(19));e=d.l5;J(b,b.j_,e,10);d=new I;c=b.ka;j=c.data;f=b.j_;g=j.length;if(f>=0&&f<=(g-0|0)){d.kb=L(c.data,0,f);h.kc=1;h.kd=1;h.kf=d;B(h);}b=new H;U(b);B(b);}n=d.mS.data[e];if(n>=0){d=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}d.iC(n);f=h.mL;i=h.m1;k=h.m$;o=a.oX.nd;p=h.ot;d=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}d.iD(n,f,i,k,o,p);}e=e+1|0;}}}},
ACY=(a,b,c)=>{EQ.iI(0);a.tG=0;},
ATD=()=>{let b,c,d,e;if(!Do){b=Ba(1);c=b.data.length;d=new GB;e=0+c|0;d.kC=(-1);d.kL=c;d.kj=c;d.kr=0;d.kj=e;d.pX=0;d.rb=0;d.pF=b;}else{d=new C4;b=BN(4);d.kC=(-1);d.kL=4;d.kj=4;d.lk=Ct;d.lP=0;d.le=b;d.kr=0;d.kj=4;d.mu=1;d.lY=0;d.lk=Dr();d=Hk(d);}MM=d;};
let Pm=F(Jk);
let Qy=F(HX);
function Uq(){let a=this;C.call(a);a.t2=0;a.pz=null;a.nn=null;a.wA=0.0;a.ud=0;a.tw=0;a.tp=0;}
let AFT=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wA=c;d=JW(b,c);a.ud=d*c|0;b=d-1|0;a.tp=b;a.tw=Fp(X(b));a.pz=R(C,d);a.nn=Ba(d);return;}e=new Bl;f=new K;f.ka=G(16);E(f,f.j_,A(69));F4(f,f.j_,c);g=new I;h=f.ka;i=h.data;d=f.j_;j=i.length;if(d>=0&&d<=(j-0|0)){g.kb=L(h.data,0,d);e.kc=1;e.kd=1;e.kf=g;B(e);}f=new H;f.kc=1;f.kd=1;B(f);},
GF=(a,b)=>{let c=new Uq();AFT(c,a,b);return c;},
Ff=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bl;c.kc=1;c.kd=1;c.kf=A(70);B(c);}a:{d=a.pz;if(!b.l$){e=0;while(true){if(e>=b.kb.length)break a;b.l$=(31*b.l$|0)+b.kb.charCodeAt(e)|0;e=e+1|0;}}}f=Bm(Bg(Bd(X(b.l$),D(2135587861, 2654435769)),a.tw));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof I))g=0;else{h=b;g=c.kb!==h.kb?0:1;}if(g)break;f=(f+1|0)&a.tp;}return f;},
E1=(a,b,c)=>{let d,e;d=Ff(a,b);if(d>=0){a.nn.data[d]=c;return;}d= -(d+1|0)|0;e=a.pz.data;e[d]=b;a.nn.data[d]=c;c=a.t2+1|0;a.t2=c;if(c>=a.ud)AQb(a,e.length<<1);},
AQb=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.pz.data.length;a.ud=b*a.wA|0;d=b-1|0;a.tp=d;a.tw=Fp(X(d));e=a.pz;f=a.nn;a.pz=R(C,b);a.nn=Ba(b);if(a.t2>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.pz;if(!h.l$){k=0;while(true){if(k>=h.kb.length)break b;h.l$=(31*h.l$|0)+h.kb.charCodeAt(k)|0;k=k+1|0;}}}b=Bm(Bg(Bd(X(h.l$),D(2135587861, 2654435769)),a.tw));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.tp;}l[b]=h;a.nn.data[b]=i;}g=g+1|0;}}}};
let ANF=F();
function E3(){let a=this;C.call(a);a.kL=0;a.kr=0;a.kj=0;a.kC=0;}
let U_=(a,b)=>{a.kC=(-1);a.kL=b;a.kj=b;},
CK=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.kj){a.kr=b;if(b<a.kC)a.kC=0;return a;}c=new Bl;d=a.kj;e=new K;e.ka=G(16);E(e,e.j_,A(509));J(e,e.j_,b,10);E(e,e.j_,A(510));J(e,e.j_,d,10);d=e.j_;Bj(e,d,d+1|0);f=e.ka;g=f.data;g[d]=93;h=new I;d=e.j_;i=g.length;if(d>=0&&d<=(i-0|0)){h.kb=L(f.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
CX=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.kL){if(a.kC>b)a.kC=(-1);a.kj=b;if(a.kr>b)a.kr=b;return a;}c=new Bl;d=a.kL;e=new K;e.ka=G(16);E(e,e.j_,A(511));J(e,e.j_,b,10);E(e,e.j_,A(510));J(e,e.j_,d,10);d=e.j_;Bj(e,d,d+1|0);f=e.ka;g=f.data;g[d]=93;h=new I;d=e.j_;i=g.length;if(d>=0&&d<=(i-0|0)){h.kb=L(f.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);};
let EC=F(E3);
let JG=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iK()){e=new Gg;e.kc=1;e.kd=1;B(e);}f=a.kj;g=a.kr;if((f-g|0)<d){e=new Jd;e.kc=1;e.kd=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.ka=G(16);E(j,j.j_,A(512));J(j,j.j_,i,10);E(j,j.j_,A(513));J(j,j.j_,f,10);k=new I;b=j.ka;h=b.data;d=j.j_;f=h.length;if(d>=0&&d<=(f-0|0)){k.kb=L(b.data,0,d);e.kc=1;e.kd=1;e.kf=k;B(e);}e=new H;e.kc=1;e.kd=1;Bk(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iL(g,h[c]);i=i+1|0;g=l;c=f;}a.kr=a.kr+d|0;return a;}e
=new H;j=new K;j.ka=G(16);E(j,j.j_,A(514));J(j,j.j_,d,10);E(j,j.j_,A(515));k=new I;b=j.ka;h=b.data;d=j.j_;f=h.length;if(d>=0&&d<=(f-0|0)){k.kb=L(b.data,0,d);e.kc=1;e.kd=1;e.kf=k;B(e);}e=new H;e.kc=1;e.kd=1;Bk(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.ka=G(16);E(j,j.j_,A(516));J(j,j.j_,c,10);E(j,j.j_,A(510));J(j,j.j_,d,10);d=j.j_;Bj(j,d,d+1|0);b=j.ka;h=b.data;h[d]=41;k=new I;d=j.j_;f=h.length;if(d>=0&&d<=(f-0|0)){k.kb=L(b.data,0,d);e.kc=1;e.kd=1;e.kf=k;B(e);}e=new H;e.kc=1;e.kd=1;Bk(e);B(e);},
AVG=(a,b)=>{CX(a,b);return a;},
AWG=(a,b)=>{CK(a,b);return a;},
AVK=a=>{a.kj=a.kr;a.kr=0;a.kC=(-1);return a;},
AX7=a=>{a.kr=0;a.kj=a.kL;a.kC=(-1);return a;},
AMG=(a,b)=>{CX(a,b);return a;},
ASh=(a,b)=>{CK(a,b);return a;};
let Hy=F(E3);
let Vp=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iK()){e=new Gg;e.kc=1;e.kd=1;B(e);}f=a.kj;g=a.kr;if((f-g|0)<d){e=new Jd;e.kc=1;e.kd=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.ka=G(16);E(j,j.j_,A(517));J(j,j.j_,i,10);E(j,j.j_,A(513));J(j,j.j_,f,10);k=new I;b=j.ka;h=b.data;d=j.j_;f=h.length;if(d>=0&&d<=(f-0|0)){k.kb=L(b.data,0,d);e.kc=1;e.kd=1;e.kf=k;B(e);}e=new H;e.kc=1;e.kd=1;Bk(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iM(g,h[c]);i=i+1|0;g=l;c=f;}a.kr=a.kr+d|0;return a;}e
=new H;j=new K;j.ka=G(16);E(j,j.j_,A(514));J(j,j.j_,d,10);E(j,j.j_,A(515));k=new I;b=j.ka;h=b.data;d=j.j_;f=h.length;if(d>=0&&d<=(f-0|0)){k.kb=L(b.data,0,d);e.kc=1;e.kd=1;e.kf=k;B(e);}e=new H;e.kc=1;e.kd=1;Bk(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.ka=G(16);E(j,j.j_,A(516));J(j,j.j_,c,10);E(j,j.j_,A(510));J(j,j.j_,d,10);d=j.j_;Bj(j,d,d+1|0);b=j.ka;h=b.data;h[d]=41;k=new I;d=j.j_;f=h.length;if(d>=0&&d<=(f-0|0)){k.kb=L(b.data,0,d);e.kc=1;e.kd=1;e.kf=k;B(e);}e=new H;e.kc=1;e.kd=1;Bk(e);B(e);},
AW3=(a,b)=>{CX(a,b);return a;},
AXb=(a,b)=>{CK(a,b);return a;},
AXn=a=>{a.kj=a.kr;a.kr=0;a.kC=(-1);return a;},
AXX=a=>{a.kr=0;a.kj=a.kL;a.kC=(-1);return a;},
AWr=(a,b)=>{CX(a,b);return a;},
AUs=(a,b)=>{CK(a,b);return a;};
let Hx=F(E3);
let AUh=(a,b)=>{CK(a,b);return a;},
AWF=a=>{a.kr=0;a.kj=a.kL;a.kC=(-1);return a;};
function Fe(){let a=this;E3.call(a);a.lP=0;a.le=null;a.lk=null;}
let AMw=(a,b)=>{CX(a,b);return a;},
Yq=(a,b)=>{CK(a,b);return a;};
function HM(){C.call(this);this.tf=null;}
let Ct=null,Kj=null,Mr=null;
let Dr=()=>{let b;if(Mr===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;Mr=(new Int8Array(b))[0]?Kj:Ct;}return Mr;},
AX6=()=>{let b;b=new HM;b.tf=A(4);Ct=b;b=new HM;b.tf=A(5);Kj=b;};
let AGC=F();
let Ey=F(0);
function C4(){let a=this;Fe.call(a);a.mu=0;a.lY=0;}
let Xe=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kj)return a.le.data[a.lP+b|0];c=new H;d=a.kj;e=new K;e.ka=G(16);E(e,e.j_,A(518));J(e,e.j_,b,10);E(e,e.j_,A(510));J(e,e.j_,d,10);d=e.j_;Bj(e,d,d+1|0);f=e.ka;g=f.data;g[d]=41;h=new I;d=e.j_;i=g.length;if(d>=0&&d<=(i-0|0)){h.kb=L(f.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
Kl=a=>{let b,c,d,e,f,g;b=a.kj;c=a.kr;d=(b-c|0)/2|0;if(a.lk!==Ct){e=new OT;f=a.lP+c|0;c=a.lY;e.kC=(-1);e.kL=d;e.kj=d;e.kr=0;e.kj=d;e.qM=f;e.pr=a;e.ug=c;return e;}e=new QK;b=a.lP+c|0;g=a.lY;e.kC=(-1);e.kL=d;e.kj=d;e.kr=0;e.kj=d;e.qM=b;e.pr=a;e.ug=g;return e;},
APX=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.kj){c=a.le.data;b=a.lP+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.lk!==Ct)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new H;d=a.kj-3|0;i=new K;i.ka=G(16);E(i,i.j_,A(518));J(i,i.j_,b,10);E(i,i.j_,A(510));J(i,i.j_,d,10);d=i.j_;Bj(i,d,d+1|0);c=i.ka;j=c.data;j[d]=41;k=new I;d=i.j_;e=j.length;if(d>=0&&d<=(e-0|0)){k.kb=L(c.data,0,d);h.kc=1;h.kd=1;h.kf=k;B(h);}h=new H;h.kc=1;h.kd=1;Bk(h);B(h);},
AEQ=(a,b,c)=>{let d,e,f,g,h,i;if(a.lY){d=new Gg;d.kc=1;d.kd=1;B(d);}if(b>=0&&(b+3|0)<a.kj){if(a.lk!==Ct){e=a.le.data;b=a.lP+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.le.data;b=a.lP+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new H;c=a.kj-3|0;f=new K;f.ka=G(16);E(f,f.j_,A(518));J(f,f.j_,b,10);E(f,f.j_,A(510));J(f,f.j_,c,10);c=f.j_;Bj(f,c,c+1|0);e=f.ka;g=e.data;g[c]=41;h=new I;c=f.j_;i=g.length;if(c>=
0&&c<=(i-0|0)){h.kb=L(e.data,0,c);d.kc=1;d.kd=1;d.kf=h;B(d);}d=new H;d.kc=1;d.kd=1;B(d);},
Hk=a=>{let b,c,d,e,f,g;b=a.kj;c=a.kr;d=(b-c|0)/4|0;if(a.lk!==Ct){e=new Pl;f=a.lP+c|0;c=a.lY;e.kC=(-1);e.kL=d;e.kj=d;e.kr=0;e.kj=d;e.qo=f;e.qn=a;e.uK=c;return e;}e=new Tb;b=a.lP+c|0;g=a.lY;e.kC=(-1);e.kL=d;e.kj=d;e.kr=0;e.kj=d;e.qo=b;e.qn=a;e.uK=g;return e;},
Fm=a=>{let b,c,d,e,f,g;b=a.kj;c=a.kr;d=(b-c|0)/4|0;if(a.lk!==Kj){e=new O4;f=a.lP+c|0;c=a.lY;e.kC=(-1);e.kL=d;e.kj=d;e.kr=0;e.kj=d;e.qf=f;e.pv=a;e.vI=c;return e;}e=new RD;b=a.lP+c|0;g=a.lY;e.kC=(-1);e.kL=d;e.kj=d;e.kr=0;e.kj=d;e.qf=b;e.pv=a;e.vI=g;return e;},
AT5=a=>{return a.le.data;};
let AKc=F();
let Tk=F(0);
function Lj(){let a=this;C.call(a);a.wJ=null;a.nu=0;a.ns=0;a.qr=null;a.re=null;a.xc=0;a.pT=0;}
let AQ7=0;
let ABO=(a,b,c,d,e)=>{a.nu=0;a.ns=0;a.pT=0;a.wJ=b;a.re=c;a.qr=d;a.xc=e;if(c!==null){b=UX(a,c);a.re=b;c=b.lN;a.nu=c===null?b.mx:c.ms;a.ns=c===null?b.mB:c.mr;if(d===null)a.qr=c===null?FS:Iw(c.l_);}},
GJ=(a,b,c,d)=>{let e=new Lj();ABO(e,a,b,c,d);return e;},
Qd=a=>{let b,c;if(a.pT){b=new T;b.kc=1;b.kd=1;b.kf=A(519);B(b);}if(a.re===null){b=UX(a,F7(a.wJ));a.re=b;c=b.lN;a.nu=c===null?b.mx:c.ms;a.ns=c===null?b.mB:c.mr;if(a.qr===null)a.qr=c===null?FS:Iw(c.l_);}a.pT=1;},
UX=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Br===null&&AQ7){c=b.lN;d=c===null?b.mx:c.ms;e=c===null?b.mB:c.mr;f=Lz(d);g=Lz(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new F1;c=b.lN;J4(h,f,g,c===null?FS:Iw(c.l_));c=h.lN;if(c===null){Fr(b);Kp(h,b.oO,0,0,d,e,0,0,d,e);}else{i=b.lN.mp;j=c.mp;Ka(i,j,0,0,d,e,0,0,d,e);}if(b.o8){c=new T;c.kc=1;c.kd=1;c.kf=A(63);B(c);}ET();Hc(F8,b.qv);c=b.lN;if(c!==null)Il(c.mp);b.o8=1;return h;};
function F1(){let a=this;C.call(a);a.mx=0;a.mB=0;a.oO=null;a.ml=null;a.qv=0;a.q6=null;a.yh=0;a.yj=0;a.yl=0;a.yk=0.0;a.sY=null;a.rL=null;a.x4=null;a.Ax=null;a.qq=null;a.rt=null;a.wi=0;a.lN=null;a.o8=0;}
let LQ=null;
let GS=()=>{GS=BR(F1);AIc();};
let Yf=(a,b)=>{let c,d,e,f,g,h,i,j,k;GS();a.yh=255;a.yj=255;a.yl=255;a.sY=M3(255,255,255,a.yk);a.rL=KO;a.x4=M6;a.wi=0;c=b.vl;d=b.vX.s3;e=BF(d,c);d=e<0?null:d.kY.data[e];if(Df.n4.u_){f=AMP(d.nT);a.lN=AJ4(f,0,f.data.length,0);Kw(a,(-1),(-1),null,null);}else{Kw(a,(-1),(-1),d.vb,null);if(a.qq===null){d=new T;g=b.vl;b=new K;b.ka=G(16);E(b,b.j_,A(520));e=b.j_;if(g===null)g=A(2);E(b,e,g);E(b,b.j_,A(521));h=new I;i=b.ka;f=i.data;j=b.j_;k=f.length;if(j>=0&&j<=(k-0|0)){h.kb=L(i.data,0,j);d.kc=1;d.kd=1;d.kf=h;B(d);}b=
new H;b.kc=1;b.kd=1;B(b);}}},
F7=a=>{let b=new F1();Yf(b,a);return b;},
J4=(a,b,c,d)=>{GS();a.yh=255;a.yj=255;a.yl=255;a.sY=M3(255,255,255,a.yk);a.rL=KO;a.x4=M6;a.wi=0;Kw(a,b,c,null,null);},
AUn=(a,b,c)=>{let d=new F1();J4(d,a,b,c);return d;},
Kw=(a,b,c,d,e)=>{let f,g;if(e!==null){a.rt=e;a.mx=e.getWidth();a.mB=e.getHeight();}else if(d===null){a.mx=b;a.mB=c;}else{a.qq=d;a.mx=d.width;a.mB=d.height;}if(Do){d=new C4;f=BN(4);d.kC=(-1);d.kL=4;d.kj=4;d.lk=Ct;d.lP=0;d.le=f;d.kr=0;d.kj=4;d.mu=1;d.lY=0;d.lk=Dr();}else{f=BN(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new C4;g=0+c|0;d.kC=(-1);d.kL=c;d.kj=c;d.lk=Ct;d.lP=0;d.le=f;d.kr=0;d.kj=g;d.mu=0;d.lY=0;}else{d=new H;d.kc=1;d.kd=1;Bk(d);B(d);}}a.q6=d;ET();c=NJ;NJ=c+1|0;a.qv=c;AEQ(d,0,c);Ca(F8,a.qv,a);},
AGT=a=>{let b,c;Fh();b=Gs.nO.document.createElement("canvas");a.oO=b;c=a.mx;b.width=c;b=a.oO;c=a.mB;b.height=c;b=a.oO.getContext("2d");a.ml=b;GS();c=Bz(FA.kt);b.globalCompositeOperation=c;},
M3=(b,c,d,e)=>{let f,g,h,i;GS();f=new K;f.ka=G(16);E(f,f.j_,A(522));J(f,f.j_,b,10);b=f.j_;Bj(f,b,b+1|0);f.ka.data[b]=44;J(f,f.j_,c,10);c=f.j_;Bj(f,c,c+1|0);f.ka.data[c]=44;J(f,f.j_,d,10);c=f.j_;Bj(f,c,c+1|0);f.ka.data[c]=44;F4(f,f.j_,e);d=f.j_;Bj(f,d,d+1|0);g=f.ka;h=g.data;h[d]=41;i=new I;c=f.j_;d=h.length;if(c>=0&&c<=(d-0|0)){i.kb=L(g.data,0,c);return i;}f=new H;f.kc=1;f.kd=1;B(f);},
Fr=a=>{let b,c;if(a.oO===null){AGT(a);if(a.qq!==null){b=a.ml;c=Bz(LX.mW);b.globalCompositeOperation=c;b=a.ml;c=a.qq;b.drawImage(c,0.0,0.0);b=a.ml;c=Bz(FA.mW);b.globalCompositeOperation=c;}if(a.rt!==null){c=a.ml;b=Bz(LX.mW);c.globalCompositeOperation=b;b=a.ml;c=a.rt;b.drawImage(c,0.0,0.0);b=a.ml;c=Bz(FA.mW);b.globalCompositeOperation=c;}}},
Kp=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;Fr(a);if(a.rL===Jx){a:{k=a.ml;l=Bz(LQ);k.fillStyle=l;k=a.ml;l=Bz(LQ);k.strokeStyle=l;k=a.ml;l="destination-out";k.globalCompositeOperation=l;a.ml.beginPath();m=a.ml;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=LN;Fr(a);LS();switch(Oc.data[k.kn]){case 1:break;case 2:a.ml.stroke();break a;default:break a;}a.ml.fill();}a.ml.closePath();r=a.ml;k=Bz(a.sY);r.fillStyle=k;r=a.ml;l=Bz(a.sY);r.strokeStyle=l;r=a.ml;k=Bz(FA.mW);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.ml;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.Ax=null;},
AIc=()=>{LQ=M3(255,255,255,1.0);};
let HP=F(Hx);
let AXp=a=>{let b,c;b=a.kr;if(b<a.kj){a.kr=b+1|0;return a.iH(b);}c=new Ny;c.kc=1;c.kd=1;B(c);},
EB=(a,b)=>{let c,d;if(a.iK()){c=new Gg;c.kc=1;c.kd=1;B(c);}d=a.kr;if(d<a.kj){a.kr=d+1|0;a.iU(d,b);return a;}c=new Jd;c.kc=1;c.kd=1;B(c);},
Fk=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kj)return a.iH(b);c=new H;d=a.kj;e=new K;e.ka=G(16);E(e,e.j_,A(518));J(e,e.j_,b,10);E(e,e.j_,A(510));J(e,e.j_,d,10);d=e.j_;Bj(e,d,d+1|0);f=e.ka;g=f.data;g[d]=41;h=new I;d=e.j_;i=g.length;if(d>=0&&d<=(i-0|0)){h.kb=L(f.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
VE=(a,b,c)=>{let d,e,f,g,h,i;if(a.iK()){d=new Gg;d.kc=1;d.kd=1;B(d);}if(b>=0&&b<a.kj){a.iU(b,c);return a;}d=new H;c=a.kj;e=new K;e.ka=G(16);E(e,e.j_,A(518));J(e,e.j_,b,10);E(e,e.j_,A(510));J(e,e.j_,c,10);c=e.j_;Bj(e,c,c+1|0);f=e.ka;g=f.data;g[c]=41;h=new I;c=e.j_;i=g.length;if(c>=0&&c<=(i-0|0)){h.kb=L(f.data,0,c);d.kc=1;d.kd=1;d.kf=h;B(d);}d=new H;d.kc=1;d.kd=1;Bk(d);B(d);},
AWl=a=>{return a.iK();};
function GB(){let a=this;HP.call(a);a.rb=0;a.pX=0;a.pF=null;}
let ALj=(a,b)=>{return a.pF.data[b+a.pX|0];},
AI5=(a,b,c)=>{a.pF.data[b+a.pX|0]=c;},
W$=a=>{return a.rb;};
let HF=F(EC);
let Sc=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kj)return a.iV(b);c=new H;d=a.kj;e=new K;e.ka=G(16);E(e,e.j_,A(518));J(e,e.j_,b,10);E(e,e.j_,A(510));J(e,e.j_,d,10);d=e.j_;Bj(e,d,d+1|0);f=e.ka;g=f.data;g[d]=41;h=new I;d=e.j_;i=g.length;if(d>=0&&d<=(i-0|0)){h.kb=L(f.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
NW=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.iK()){d=new Gg;d.kc=1;d.kd=1;B(d);}if(b>=0&&b<a.kj){a.iL(b,c);return a;}d=new H;e=a.kj;f=new K;f.ka=G(16);E(f,f.j_,A(518));J(f,f.j_,b,10);E(f,f.j_,A(510));J(f,f.j_,e,10);e=f.j_;Bj(f,e,e+1|0);g=f.ka;h=g.data;h[e]=41;i=new I;e=f.j_;j=h.length;if(e>=0&&e<=(j-0|0)){i.kb=L(g.data,0,e);d.kc=1;d.kd=1;d.kf=i;B(d);}d=new H;d.kc=1;d.kd=1;Bk(d);B(d);},
AVb=a=>{return a.iK();};
function Ip(){let a=this;HF.call(a);a.rN=0;a.ra=0;a.qE=null;}
let AMV=(a,b)=>{return a.qE.data[b+a.ra|0];},
ALB=(a,b,c)=>{a.qE.data[b+a.ra|0]=c;},
ALX=a=>{return a.rN;};
let J3=F(BH);
let Jx=null,KO=null,AKf=null;
let AFm=()=>{let b,c;b=new J3;b.kt=A(523);b.kn=0;Jx=b;c=new J3;c.kt=A(524);c.kn=1;KO=c;AKf=V(J3,[b,c]);};
let IF=F(BH);
let XU=null,M6=null,APl=null;
let AO4=()=>{let b,c;b=new IF;b.kt=A(525);b.kn=0;XU=b;c=new IF;c.kt=A(526);c.kn=1;M6=c;APl=V(IF,[b,c]);};
let KL=F();
function Vo(){let a=this;KL.call(a);a.vX=null;a.vl=null;a.zl=null;}
let AED=(a,b,c,d)=>{let e,f,g,h;if(d!==Fw&&d!==Q9&&d!==Tv){b=new T;c=new K;c.ka=G(16);E(c,c.j_,A(527));E(c,c.j_,d===null?A(2):d.kt);E(c,c.j_,A(528));d=new I;e=c.ka;f=e.data;g=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){d.kb=L(e.data,0,g);b.kc=1;b.kd=1;b.kf=d;B(b);}b=new H;b.kc=1;b.kd=1;B(b);}a.vX=b;b=Nf(c,A(529),A(113));if(Lu(b,A(113)))b=Cj(b,0,b.kb.length-1|0);a.vl=b;a.zl=d;},
G1=(a,b,c)=>{let d=new Vo();AED(d,a,b,c);return d;};
function Mf(){let a=this;C.call(a);a.mp=0;a.ms=0;a.mr=0;a.l_=0;a.q8=null;a.sc=null;}
let ABR=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=Ba(4);a.q8=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.sc=AQh(g,h,c,d);b=a.q8.data;a.mp=b[0];a.ms=b[1];a.mr=b[2];c=b[3];a.l_=c;if(e&&e!=c)ABt(a,e);},
AJ4=(a,b,c,d)=>{let e=new Mf();ABR(e,a,b,c,d);return e;},
ATH=(a,b,c,d)=>{let e;e=Ba(4);a.q8=e;a.sc=AN9(e.data,b,c,d);e=a.q8.data;a.mp=e[0];a.ms=e[1];a.mr=e[2];a.l_=e[3];},
AD_=(a,b,c)=>{let d=new Mf();ATH(d,a,b,c);return d;},
ABt=(a,b)=>{let c,d,e,f,g;c=AD_(a.ms,a.mr,b);MY(c.mp,0);d=a.ms;e=a.mr;f=a.mp;g=c.mp;Ka(f,g,0,0,d,e,0,0,d,e);Il(a.mp);a.mp=c.mp;a.l_=c.l_;a.mr=c.mr;a.q8=c.q8;a.sc=c.sc;a.ms=c.ms;},
AQh=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
AN9=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
Il=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
Ka=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
MY=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let Io=F(Hy);
let ANG=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kj)return a.i0(b);c=new H;d=a.kj;e=new K;e.ka=G(16);E(e,e.j_,A(518));J(e,e.j_,b,10);E(e,e.j_,A(510));J(e,e.j_,d,10);d=e.j_;Bj(e,d,d+1|0);f=e.ka;g=f.data;g[d]=41;h=new I;d=e.j_;i=g.length;if(d>=0&&d<=(i-0|0)){h.kb=L(f.data,0,d);c.kc=1;c.kd=1;c.kf=h;B(c);}c=new H;c.kc=1;c.kd=1;Bk(c);B(c);},
AWc=a=>{return a.iK();};
function J9(){let a=this;Io.call(a);a.sn=0;a.r1=0;a.rE=null;}
let AEF=(a,b)=>{return a.rE.data[b+a.r1|0];},
AHg=(a,b,c)=>{a.rE.data[b+a.r1|0]=c;},
ACl=a=>{return a.sn;};
let AK_=F();
function EV(){BH.call(this);this.oz=0;}
let FY=null,AJU=null,AMx=null,AIz=null,AMb=null,ARB=null,AFc=null,AFG=null;
let AAh=()=>{let b,c,d,e,f,g,h;b=new EV;b.kt=A(530);b.kn=0;b.oz=9728;FY=b;c=new EV;c.kt=A(531);c.kn=1;c.oz=9729;AJU=c;d=new EV;d.kt=A(532);d.kn=2;d.oz=9987;AMx=d;e=new EV;e.kt=A(533);e.kn=3;e.oz=9984;AIz=e;f=new EV;f.kt=A(534);f.kn=4;f.oz=9985;AMb=f;g=new EV;g.kt=A(535);g.kn=5;g.oz=9986;ARB=g;h=new EV;h.kt=A(536);h.kn=6;h.oz=9987;AFc=h;AFG=V(EV,[b,c,d,e,f,g,h]);};
function Ij(){BH.call(this);this.si=0;}
let AQu=null,F9=null,AKk=null,AQP=null;
let AGf=()=>{let b,c,d;b=new Ij;b.kt=A(537);b.kn=0;b.si=33648;AQu=b;c=new Ij;c.kt=A(538);c.kn=1;c.si=33071;F9=c;d=new Ij;d.kt=A(539);d.kn=2;d.si=10497;AKk=d;AQP=V(Ij,[b,c,d]);};
let Q3=F();
let ATt=(a,b)=>{b=a.S(b);BE();return b===null?null:b instanceof F6()&&b instanceof E0?(b[Bt]===true?b:b.kS):b;},
ABb=a=>{return a.eV();};
function Ie(){let a=this;HP.call(a);a.qn=null;a.uK=0;a.qo=0;}
let AIv=a=>{return a.uK;};
let Pl=F(Ie);
let AEx=(a,b)=>{let c;c=a.qn.le.data;b=a.qo+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
W8=(a,b,c)=>{let d;d=a.qn.le.data;b=a.qo+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let Tb=F(Ie);
let AP1=(a,b)=>{let c;c=a.qn.le.data;b=a.qo+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
Zv=(a,b,c)=>{let d;d=a.qn.le.data;b=a.qo+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function HH(){let a=this;HF.call(a);a.pv=null;a.vI=0;a.qf=0;}
let AMa=a=>{return a.vI;},
AND=a=>{return a.pv.le.data;};
let O4=F(HH);
let AIF=(a,b)=>{let c;c=a.pv.le.data;b=a.qf+(b*4|0)|0;return Lv((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
ANx=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:GA(c);e=a.pv.le.data;b=a.qf+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let RD=F(HH);
let Xk=(a,b)=>{let c;c=a.pv.le.data;b=a.qf+(b*4|0)|0;return Lv(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AIr=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:GA(c);e=a.pv.le.data;b=a.qf+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function Hv(){let a=this;Io.call(a);a.pr=null;a.ug=0;a.qM=0;}
let AF2=a=>{return a.ug;},
AOe=a=>{return a.pr.le.data;};
let OT=F(Hv);
let AB4=(a,b)=>{let c;c=a.pr.le.data;b=a.qM+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
AA8=(a,b,c)=>{let d;d=a.pr.le.data;b=a.qM+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let QK=F(Hv);
let AK7=(a,b)=>{let c;c=a.pr.le.data;b=a.qM+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
AB6=(a,b,c)=>{let d;d=a.pr.le.data;b=a.qM+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let LK=F(BA);
let Gg=F(LK);
let Ny=F(BA);
let Gi=F(BH);
let Q9=null,Fw=null,AJE=null,AD8=null,Tv=null,ANX=null;
let ADx=()=>{let b,c,d,e,f;b=new Gi;b.kt=A(540);b.kn=0;Q9=b;c=new Gi;c.kt=A(541);c.kn=1;Fw=c;d=new Gi;d.kt=A(542);d.kn=2;AJE=d;e=new Gi;e.kt=A(543);e.kn=3;AD8=e;f=new Gi;f.kt=A(544);f.kn=4;Tv=f;ANX=V(Gi,[b,c,d,e,f]);};
let E5=F(BH);
let R0=null,AOD=null,Rz=null,Us=null,SF=null,Rn=null,FS=null,AML=null;
let Iw=b=>{let c,d,e,f,g,h,i;if(b==1)return R0;if(b==2)return Rz;if(b==5)return Us;if(b==6)return SF;if(b==3)return Rn;if(b==4)return FS;c=new T;d=new K;d.ka=G(16);E(d,d.j_,A(545));J(d,d.j_,b,10);e=new I;f=d.ka;g=f.data;h=d.j_;i=g.length;if(h>=0&&h<=(i-0|0)){e.kb=L(f.data,0,h);c.kc=1;c.kd=1;c.kf=e;B(c);}c=new H;c.kc=1;c.kd=1;B(c);},
W9=()=>{let b,c,d,e,f,g,h;b=new E5;b.kt=A(203);b.kn=0;R0=b;c=new E5;c.kt=A(546);c.kn=1;AOD=c;d=new E5;d.kt=A(547);d.kn=2;Rz=d;e=new E5;e.kt=A(548);e.kn=3;Us=e;f=new E5;f.kt=A(549);f.kn=4;SF=f;g=new E5;g.kt=A(550);g.kn=5;Rn=g;h=new E5;h.kt=A(551);h.kn=6;FS=h;AML=V(E5,[b,c,d,e,f,g,h]);};
let ADg=F();
let Md=0,JA=null,Jt=null;
let AKo=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:GA(b);c.wf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.us=0;c.ue=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Ek(Dc(X(d),X(8388608)),Ce)){d=d<<1;f=f+(-1)|0;}}g=Jt;h=AMf(g,0,g.data.length,f);if(h<0)h= -h|0;g=Jt.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=JA.data[e];j=Dc(X(d),D(4294967295, 0));k=Bm(Bg(Bd(j,Dc(X(e),D(4294967295, 0))),32-i|0));if(k<Md){while(E$(k,Md)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=Jt.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Bm(Bg(Bd(j,Dc(X(JA.data[e]),D(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=JA.data;f=h+1|0;e=g[f];m=i-1|0;n=Bd(Dc(X(l),D(4294967295, 0)),Dc(X(e),D(4294967295, 0)));e=32-m|0;o=Bm(Bg(n,e));p=Bm(Bg(Bd(Dc(X(d-1|0),D(4294967295, 0)),Dc(X(g[f]),D(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(E$(Em(k,r),Em(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(E$(Em(k,l),Em(o,l))>=0)break;m=l;}s=E$(q,m);d=s>0?Dy(Em(k,q),q):s<0?Dy(Em(k,m),m)+m|0:Dy(Em((k+(m/2|0)|0),m),m);if(Fo(X(d),X(1000000000))>=0)while(true){h=h
+1|0;d=Em(d,10);if(E$(d,1000000000)<0)break;}else if(E$(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.us=d;c.ue=h-50|0;},
ADP=()=>{Md=Em((-1),10);JA=IT([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Jt=IT([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let Jv=F(BH);
let LN=null,PZ=null,Vb=null;
let ATB=()=>{let b,c;b=new Jv;b.kt=A(552);b.kn=0;LN=b;c=new Jv;c.kt=A(553);c.kn=1;PZ=c;Vb=V(Jv,[b,c]);};
function DL(){BH.call(this);this.mW=null;}
let LX=null,AAO=null,ABr=null,XO=null,APo=null,ATL=null,AA2=null,AGM=null,AIp=null,FA=null,ANS=null,AN2=null;
let AFa=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new DL;b.kt=A(554);b.kn=0;b.mW=A(555);LX=b;c=new DL;c.kt=A(556);c.kn=1;c.mW=A(557);AAO=c;d=new DL;d.kt=A(558);d.kn=2;d.mW=A(559);ABr=d;e=new DL;e.kt=A(560);e.kn=3;e.mW=A(561);XO=e;f=new DL;f.kt=A(562);f.kn=4;f.mW=A(563);APo=f;g=new DL;g.kt=A(564);g.kn=5;g.mW=A(565);ATL=g;h=new DL;h.kt=A(566);h.kn=6;h.mW=A(567);AA2=h;i=new DL;i.kt=A(568);i.kn=7;i.mW=A(569);AGM=i;j=new DL;j.kt=A(570);j.kn=8;j.mW=A(571);AIp=j;k=new DL;k.kt=A(572);k.kn=9;k.mW=A(573);FA=k;l=new DL;l.kt=A(574);l.kn
=10;l.mW=A(575);ANS=l;AN2=V(DL,[b,c,d,e,f,g,h,i,j,k,l]);};
let ANf=F(0);
let IW=F(BH);
let Pa=null,U5=null,ADh=null;
let ABA=()=>{let b,c;b=new IW;b.kt=A(576);b.kn=0;Pa=b;c=new IW;c.kt=A(577);c.kn=1;U5=c;ADh=V(IW,[b,c]);};
let AMd=F();
let K3=0;
let AOb=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!K3){Qz(b,c,d,e);return;}f=HL;if(f!==NS&&f!==f&&f!==Nd)ANv(b,c,d,e);else{g=B5;f=c.lN;if(f===null)h=6408;else a:{e=f.l_;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new T;g=new K;g.ka=G(16);Eu(g,g.j_,A(64));J(g,g.j_,e,10);f=new I;i=g.ka;j=i.data;d=g.j_;e=j.length;if(d>=0&&d<=(e-0|0)){f.kb=L(i.data,0,d);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}k=f===null?c.mx:f.ms;l=f===null
?c.mB:f.mr;if(f===null)m=6408;else b:{m=f.l_;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new T;g=new K;Bu(g);g.ka=G(16);AS2(g,g.j_,A(64));J(g,g.j_,m,10);f=new I;i=g.ka;j=i.data;d=g.j_;e=j.length;if(d>=0&&d<=(e-0|0)){f.kb=L(i.data,0,d);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}if(f===null)n=5121;else c:{n=f.l_;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new T;g=new K;g.ka
=G(16);Eu(g,g.j_,A(64));J(g,g.j_,n,10);f=new I;i=g.ka;j=i.data;d=g.j_;e=j.length;if(d>=0&&d<=(e-0|0)){f.kb=L(i.data,0,d);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}n=5121;}g.cA(b,0,h,k,l,0,m,n,c.q6);Br.i5(b);}},
ANv=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B6.qm.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B6.qm.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Br.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BD;h.ks=g;i=h;g.classObject=i;}}if(h.kl===null)h.kl=W(h.ks.$meta.name);i=h.kl;if(i===A(578))f=1;else if(!(A(578) instanceof I))f=0;else{g=A(578);f=i.kb!==g.kb?0:1;}if(!f&&EQ===null){Qz(b,c,d,e);break a;}}g=B5;i=c.lN;if(i===null)f=6408;else b:{e=i.l_;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new T;g=new K;g.ka=G(16);Cb(g,g.j_,Cp(A(64)));J(g,g.j_,e,10);i=new I;j=g.ka;k=j.data;d=g.j_;e=k.length;if(d>=0&&d<=(e-0|0)){i.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}l=i===null?c.mx:i.ms;m=i===null?c.mB:i.mr;if(i===null)n=6408;else c:{n=i.l_;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new T;g=new K;g.ka
=G(16);Eu(g,g.j_,A(64));J(g,g.j_,n,10);i=new I;j=g.ka;k=j.data;d=g.j_;e=k.length;if(d>=0&&d<=(e-0|0)){i.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}if(i===null)o=5121;else d:{o=i.l_;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new T;g=new K;g.ka=G(16);Cb(g,g.j_,Cp(A(64)));J(g,g.j_,o,10);i=new I;j=g.ka;k=j.data;d=g.j_;e=k.length;if(d>=0&&d<=(e-0|0)){i.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=i;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}o=5121;}g.cA(b,
0,f,l,m,0,n,o,c.q6);Br.i5(b);}},
Qz=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=B5;g=c.lN;if(g===null)h=6408;else a:{i=g.l_;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new T;f=new K;f.ka=G(16);Cb(f,f.j_,Cp(A(64)));J(f,f.j_,i,10);g=new I;j=f.ka;k=j.data;d=f.j_;e=k.length;if(d>=0&&d<=(e-0|0)){g.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}h=6406;}l=g===null?c.mx:g.ms;m=g===null?c.mB:g.mr;if(g===null)n=6408;else b:{n=g.l_;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new T;f=new K;f.ka=G(16);Eu(f,f.j_,A(64));J(f,f.j_,n,10);g=new I;j=f.ka;k=j.data;d=f.j_;e=k.length;if(d>=0&&d<=(e-0|0)){g.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}if(g===null)o=5121;else c:{o=g.l_;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new T;f=new K;f.ka=G(16);Cb(f,f.j_,Cp(A(64)));J(f,f.j_,o,10);g=new I;j=f.ka;k=j.data;d=f.j_;e
=k.length;if(d>=0&&d<=(e-0|0)){g.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}f.cA(b,0,h,l,m,0,n,o,c.q6);if(Br===null&&d!=e){c=new T;c.kc=1;c.kd=1;c.kf=A(579);B(c);}f=c.lN;p=(f===null?c.mx:f.ms)/2|0;i=(f===null?c.mB:f.mr)/2|0;h=1;while(p>0&&i>0){f=new F1;g=c.lN;J4(f,p,i,g===null?FS:Iw(g.l_));g=Jx;f.rL=g;q=f.lN;if(q===null){Fr(f);g=f.ml;q=Bz(FA.kt);g.globalCompositeOperation=q;}else{d=g!==g?1:0;MY(q.mp,d);}g=c.lN;l=g===null?c.mx:g.ms;m=g===null?c.mB:g.mr;q=f.lN;if(q===null){Fr(c);Kp(f,
c.oO,0,0,l,m,0,0,p,i);}else{r=g.mp;s=q.mp;Ka(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.o8){f=new T;f.kc=1;f.kd=1;f.kf=A(63);B(f);}ET();Hc(F8,c.qv);g=c.lN;if(g!==null)Il(g.mp);c.o8=1;}c=B5;g=f.lN;if(g===null)d=6408;else d:{d=g.l_;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new T;f=new K;f.ka=G(16);Cb(f,f.j_,Cp(A(64)));J(f,f.j_,d,10);g=new I;j=f.ka;k=j.data;d=f.j_;e=k.length;if(d>=0&&d<=(e-0|0)){g.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc
=1;c.kd=1;B(c);}d=6406;}e=g===null?f.mx:g.ms;p=g===null?f.mB:g.mr;if(g===null)l=6408;else e:{l=g.l_;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new T;f=new K;f.ka=G(16);Eu(f,f.j_,A(64));J(f,f.j_,l,10);g=new I;j=f.ka;k=j.data;d=f.j_;e=k.length;if(d>=0&&d<=(e-0|0)){g.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.l_;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new T;f=new K;f.ka=G(16);Cb(f,f.j_,Cp(A(64)));J(f,f.j_,m,10);g=new I;j=f.ka;k=j.data;d=f.j_;e=k.length;if(d>=0&&d<=(e-0|0)){g.kb=L(j.data,0,d);c.kc=1;c.kd=1;c.kf=g;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}m=5121;}c.cA(b,h,d,e,p,0,l,m,f.q6);c=f.lN;p=(c===null?f.mx:c.ms)/2|0;i=(c===null?f.mB:c.mr)/2|0;h=h+1|0;c=f;}},
AWh=()=>{K3=1;};
let Tw=F();
let Oc=null;
let LS=()=>{LS=BR(Tw);ATw();};
let ATw=()=>{let b,c;b=Ba((Vb.p()).data.length);c=b.data;Oc=b;c[LN.kn]=1;c[PZ.kn]=2;};
let Jd=F(BA);
function QU(){let a=this;Cm.call(a);a.xd=null;a.A2=null;a.xZ=null;a.wF=null;a.zb=null;a.A5=null;a.zB=null;a.xn=null;a.zS=null;a.AG=null;a.rm=null;a.Ar=null;a.z_=null;a.wC=null;a.vz=null;}
let AMq=(a,b)=>{let c,d,e,f,g,h,i,j,k;Fg(a);c=new Oh;c.q2=0;a.rm=c;a.vz=new DR;a.wC=b;c=new Bh;c.kF=1;c.ki=R(C,16);a.xd=c;d=new F_;e=FW;f=G1(e.p3,A(580),Fw);g=null;e=GJ(f,F7(f),g,0);g=B5;c=g.kk.createTexture();h=g.mY;g.mY=h+1|0;Ca(g.nH,h,Cd(c));c=FY;d.oq=c;d.oV=c;c=F9;d.ok=c;d.or=c;d.pu=1.0;d.nk=3553;d.o9=h;G$(d,e);e=Df;c=D0;if(e===null)c=GM(c);else{h=FJ(e);c=Gz(c,e,h&(c.mv.data.length-1|0),h);}c=c===null?null:c.mZ;if(c===null){c=new Bh;Bu(c);c.kF=1;c.ki=R(C,16);}S(c,d);Fu(D0,e,c);a.A2=d;c=new It;c.pp=d;d=d.nK;Nr(c,
0,0,d.nu,d.ns);a.xZ=c;if(!(a.lh===21.0&&a.lo===21.0)){a.lh=21.0;a.lo=21.0;}Ir(a,a.kD,a.kE,a.lh,a.lo);c=new Z;i=a.lh/2.0;j=a.lo/2.0;c.kh=i;c.kg=j;a.wF=c;if(!(a.nL===1.0&&a.nM===1.0)){a.nL=1.0;a.nM=1.0;}g=b.vC;b=g.o2;a.zb=b;c=g.su;a.A5=c;d=g.qO;a.zB=d;f=g.sJ;a.xn=f;e=g.oI;a.zS=e;g=g.rf;a.AG=g;a.rm.q2=1;k=new DC;k.pZ=12;a.z_=k;k=new Pk;Ux=b;AFJ=c;WV=d;Rq=f;ZO=e;AJ9=g;a.Ar=k;},
AIU=a=>{let b=new QU();AMq(b,a);return b;},
AM$=(a,b,c)=>{let d,e,f,g,h;d=a.qd;c=d.k_;e=d.k$;f=d.k9;g=d.la;d=b.nS;d.k_=c;d.k$=e;d.k9=f;d.la=g;CV(d);b.p6=Es(b.nS);d=a.xZ;e=a.kD;h=a.wF;HE(b,d,e-h.kh,a.kE-h.kg,a.oP,a.oQ,a.lh,a.lo,a.nL,a.nM,a.mR);},
AOL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a:{c=a.rm;if(c.q2){c.q2=0;d=ANi(a,b);c=a.rm;CE();e=Bw;f=BF(e,M(Dq));g=f<0?null:e.kY.data[f];if(g===null){g=new CJ;e=new Bh;e.kF=0;e.ki=R(C,4);g.kw=e;g.k6=100;b:{try{e=CS(M(Dq),null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{e=CP(M(Dq),null);CU(e,1);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}e=null;}g.kQ=e;if(e===null){c=new BA;d=new K;Bu(d);d.ka=G(16);BZ(d,d.j_,A(21));if(M(Dq).kl===null)M(Dq).kl
=W(M(Dq).ks.$meta.name);h=M(Dq).kl;BZ(d,d.j_,h);h=new I;i=d.ka;j=i.data;f=d.j_;Bu(h);Gh(0,f,j.length);h.kb=L(i.data,0,f);c.kc=1;c.kd=1;Bk(c);c.kf=h;B(c);}Ci(Bw,M(Dq),g);}h=g.kw;k=h.ke;if(k){if(!k){c=new BO;c.kc=1;c.kd=1;Bk(c);c.kf=A(22);B(c);}k=k-1|0;h.ke=k;i=h.ki.data;h=i[k];i[k]=null;}else c:{try{h=C6(g.kQ,null);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){h=$$je;}else{throw $$e;}}d=new T;c=new K;c.ka=G(16);E(c,c.j_,A(23));l=g.kQ.lV.lU;if(l.kl===null)l.kl=W(l.ks.$meta.name);e=l.kl;E(c,c.j_,e);e
=new I;i=c.ka;j=i.data;f=c.j_;m=j.length;if(f>=0&&f<=(m-0|0)){e.kb=L(i.data,0,f);d.kc=1;d.kd=1;Bk(d);d.kf=e;d.lG=h;B(d);}B(FF());}h=h;h.mi=g;e=h;S(e.lK,d);h=e.lc;if(h!==null){d.lc=h;if(d.k8===null)d.k8=h;}S(e.lK,c);h=e.lc;if(h!==null){c.lc=h;if(c.k8===null)c.k8=h;}c=e.lK;k=0;f=c.ke;while(true){if(k>=f){e.lc=a;if(e.k8===null)e.k8=a;S(a.qH,e);c=a.lF;c!==null&&!c.va;break a;}if(k>=c.ke)break;c.ki.data[k].by(a);k=k+1|0;}d=new H;h=new K;h.ka=G(16);E(h,h.j_,A(18));J(h,h.j_,k,10);E(h,h.j_,A(19));k=c.ke;J(h,h.j_,k,
10);c=new I;i=h.ka;j=i.data;f=h.j_;m=j.length;if(f>=0&&f<=(m-0|0)){c.kb=L(i.data,0,f);d.kc=1;d.kd=1;d.kf=c;B(d);}c=new H;IJ(c);B(c);}}c=a.vz;n=a.kD;o=a.kE;p=a.lh;q=a.lo;c.nB=n;c.nA=o;c.nD=p;c.nt=q;G3(a,1);h=a.wC.lw;a.xd=h;if(CI){c=new Cx;c.k5=1;c.lb=h;c.me=1;}else{if(h.kO===null){c=new C7;c.mq=h;c.mt=1;h.kO=c;}c=CQ(h.kO);}while(true){if(!c.k5){h=new T;h.kc=1;h.kd=1;h.kf=A(17);B(h);}if(!(c.lZ>=c.lb.ke?0:1)){FG(a,b);q=a.kE;c=a.xn;f=c.ke;k=f-1|0;if(k>=f){d=new H;h=new K;h.ka=G(16);E(h,h.j_,A(18));J(h,h.j_,k,10);E(h,
h.j_,A(19));k=c.ke;J(h,h.j_,k,10);c=new I;i=h.ka;j=i.data;f=h.j_;m=j.length;if(f>=0&&f<=(m-0|0)){c.kb=L(i.data,0,f);d.kc=1;d.kd=1;d.kf=c;B(d);}c=new H;U(c);B(c);}if(q<=c.ki.data[k].kg){c=a.k0;if(c!==null){k=DB(c.kz,a,1);if(k!=(-1)){h=c.kz;Cv(h);h=Di(h,k);d=c.lF;if(d!==null){ADp(d,h);c=d.qu;if(c!==null&&c.i8(h))AI2(d,null);c=d.n3;if(c!==null&&c.i8(h))ALA(d,null);D5(d,h);}h.k0=null;h.x(null);}}}return;}h=Cq(c);if(AFo(a.vz,h.r8)){a.rm.q2=1;k=a.qH.ke-1|0;while(k>=0){h=a.qH;if(k>=h.ke){d=new H;c=new K;c.ka=G(16);E(c,
c.j_,A(18));J(c,c.j_,k,10);E(c,c.j_,A(19));k=h.ke;J(c,c.j_,k,10);h=new I;i=c.ka;j=i.data;f=c.j_;m=j.length;if(f>=0&&f<=(m-0|0)){h.kb=L(i.data,0,f);d.kc=1;d.kd=1;d.kf=h;B(d);}c=new H;G4(c);B(c);}h.ki.data[k].by(null);k=k+(-1)|0;}h=a.qH;i=h.ki;k=0;f=h.ke;d=null;if(k>f)break;while(k<f){j=i.data;m=k+1|0;j[k]=d;k=m;}h.ke=0;}}c=new Bl;c.kc=1;c.kd=1;B(c);};
let US=F();
let Rt=null;
let NT=()=>{NT=BR(US);Yr();};
let AIE=(b,c,d,e)=>{NT();a:{b:{if(Rt===M4){if(B6.lA.width!=B6.lA.width)break b;if(B6.lA.height!=B6.lA.height)break b;}B5.dE(b,c,d,e);break a;}B5.dE(Dy(b,B6.lA.width)/B6.lA.width|0,Dy(c,B6.lA.height)/B6.lA.height|0,Dy(d,B6.lA.width)/B6.lA.width|0,Dy(e,B6.lA.height)/B6.lA.height|0);}},
Yr=()=>{Rt=M4;};
let ADk=F();
function Ne(){let a=this;C.call(a);a.qQ=null;a.ov=null;}
let AQI=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qQ.readyState==4){if(a.qQ.status==200){if(a.ov.n9.m8){if(BX===null){b=new C3;c=new Cu;c.l4=BN(32);b.mm=c;c=new K;Bu(c);c.ka=G(16);b.l7=c;b.l6=G(32);b.l8=0;b.l9=Co;BX=b;}b=a.ov.n5;c=new K;c.ka=G(16);E(c,c.j_,A(581));d=c.j_;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ka;f=e.data;g
=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){b.kb=L(e.data,0,g);B2(Bz(b));B2("\n");}else{b=new H;b.kc=1;b.kd=1;Bk(b);B(b);}}b=a.ov;b.oj.ja(b.n5,W(a.qQ.responseText));}else if(a.qQ.status!=404&&a.qQ.status!=403){try{i=X(100);$p=1;continue _;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}b=a.ov;c=b.n9;d=b.pA;j=b.n5;b=b.oj;if(c.m8){if(BX===null){k=new C3;l=new Cu;l.l4=BN(32);Bu(k);k.mm=l;l=new K;D1(l,16);k.l7=l;k.l6=G(32);k.l8=0;k.l9=Co;BX=k;}k=new K;k.ka=G(16);E(k,k.j_,A(102));E(k,k.j_,j===null?A(2)
:j);l=new I;e=k.ka;f=e.data;h=k.j_;m=f.length;if(h>=0&&h<=(m-0|0)){l.kb=L(e.data,0,h);B2(Bz(l));B2("\n");}else{b=new H;U(b);B(b);}}c.lt=c.lt+1|0;k=new Ho;k.n9=c;k.pA=d;k.n5=j;k.oj=b;b=null;c=null;k.nj=new C;k.ni=1;k.n1=c;k.oi=b;g=CY;CY=g+1|0;k.oh=X(g);b=new ED;b.n2=k;EW(b);}else{b=a.ov;b.oj.jb(b.n5);}b=a.ov.n9;b.lt=b.lt-1|0;}return;case 1:a:{try{Ln(i);if(FO()){break _;}break a;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}}b=a.ov;c=b.n9;d=b.pA;j=b.n5;b=b.oj;if(c.m8){if(BX===null){k=new C3;l
=new Cu;l.l4=BN(32);Bu(k);k.mm=l;l=new K;D1(l,16);k.l7=l;k.l6=G(32);k.l8=0;k.l9=Co;BX=k;}k=new K;k.ka=G(16);E(k,k.j_,A(102));E(k,k.j_,j===null?A(2):j);l=new I;e=k.ka;f=e.data;h=k.j_;m=f.length;if(h>=0&&h<=(m-0|0)){l.kb=L(e.data,0,h);B2(Bz(l));B2("\n");}else{b=new H;U(b);B(b);}}c.lt=c.lt+1|0;k=new Ho;k.n9=c;k.pA=d;k.n5=j;k.oj=b;b=null;c=null;k.nj=new C;k.ni=1;k.n1=c;k.oi=b;g=CY;CY=g+1|0;k.oh=X(g);b=new ED;b.n2=k;EW(b);b=a.ov.n9;b.lt=b.lt-1|0;return;default:FC();}}Dp().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AGg=(a,b)=>{let $p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQI(a,b);if(FO()){break _;}return;default:FC();}}Dp().s(a,b,$p);};
function Oh(){BQ.call(this);this.q2=0;}
let AJ0=(a,b)=>{a.q2=1;return 1;};
let Pk=F();
let Ux=null,AFJ=null,WV=null,Rq=null,ZO=null,AJ9=null,VM=null,QT=null,L8=null;
let ANi=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;b=Ux;if(0>=b.ke){d=new H;e=new K;e.ka=G(16);E(e,e.j_,A(18));J(e,e.j_,0,10);E(e,e.j_,A(19));f=b.ke;J(e,e.j_,f,10);b=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){b.kb=L(g.data,0,i);d.kc=1;d.kd=1;d.kf=b;B(d);}b=new H;U(b);B(b);}b=b.ki.data[0];VM=b;e=Rq;i=e.ke;f=i-1|0;if(f>=i){d=new H;b=new K;b.ka=G(16);E(b,b.j_,A(18));J(b,b.j_,f,10);E(b,b.j_,A(19));f=e.ke;J(b,b.j_,f,10);e=new I;g=b.ka;h=g.data;i=b.j_;j=h.length;if(i>=0&&i<=(j-0|0)){e.kb=L(g.data,0,
i);d.kc=1;d.kd=1;d.kf=e;B(d);}b=new H;U(b);B(b);}e=e.ki.data[f];QT=e;k=e.kh;l=e.kg;c=(Ej(b.kh-k)+Ej(VM.kg-QT.kg))*c*1.0;b=null;CE();d=Bw;i=BF(d,M(DC));m=i<0?null:d.kY.data[i];if(m===null){m=new CJ;d=new Bh;Bu(d);d.kF=0;d.ki=R(C,4);m.kw=d;m.k6=100;a:{try{d=CS(M(DC),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){}else{throw $$e;}}try{d=CP(M(DC),null);CU(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof B$){}else{throw $$e;}}d=null;}m.kQ=d;if(d===null){b=new BA;d=new K;D1(d,16);Cb(d,d.j_,
A(21));if(M(DC).kl===null)M(DC).kl=W(M(DC).ks.$meta.name);e=M(DC).kl;Cb(d,d.j_,e);NO(b,ABe(d.ka,0,d.j_));B(b);}Ci(Bw,M(DC),m);}b:{e=m.kw;f=e.ke;if(f){if(!f){b=new BO;NO(b,A(22));B(b);}f=f-1|0;e.ke=f;g=e.ki.data;e=g[f];g[f]=null;}else try{e=C6(m.kQ,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BG){e=$$je;d=new T;b=new K;Bu(b);b.ka=G(16);BZ(b,b.j_,A(23));n=m.kQ.lV.lU;if(n.kl===null)n.kl=W(n.ks.$meta.name);m=n.kl;BZ(b,b.j_,m);m=new I;g=b.ka;h=g.data;i=b.j_;Bu(m);Gh(0,i,h.length);m.kb=L(g.data,0,i);Sw(d,
m,e);B(d);}else{throw $$e;}}}e=e;e.mi=m;e=e;e.uX=k;e.uW=l;e.xT=c;e.vH=b;L8=e;return e;},
AVo=()=>{let b;b=new DC;b.pZ=12;L8=b;};
let JR=F(BH);
let M4=null,AJH=null,ADa=null;
let Z5=()=>{let b,c;b=new JR;b.kt=A(582);b.kn=0;M4=b;c=new JR;c.kt=A(583);c.kn=1;AJH=c;ADa=V(JR,[b,c]);};
let Od=F(0);
function UC(){let a=this;C.call(a);a.lp=null;a.o0=0;a.tD=null;a.rG=null;a.te=null;a.yI=null;a.vn=null;a.m9=null;a.s_=0;a.zN=0.0;}
let AMN=(a,b,c)=>{let d,e,f,g,h,i,j;a.o0=0;a.tD=Dj();a.rG=Dj();a.te=Dj();a.yI=new Z;d=new BM;d.k_=1.0;d.k$=1.0;d.k9=1.0;d.la=1.0;CV(d);a.vn=d;a.zN=0.75;if(c!==null)a.lp=AHz(b,0,1,0,c);else{c=new LV;e=Q8(W0(0,1,0),AJA(0,1,0));if(!e.of){c=new T;d=new K;d.ka=G(16);E(d,d.j_,A(479));if(!e.of)f=e.nQ;else{f=Br.g$(e.m7);e.nQ=f;}E(d,d.j_,f);f=new I;g=d.ka;h=g.data;i=d.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);c.kc=1;c.kd=1;c.kf=f;B(c);}c=new H;c.kc=1;c.kd=1;B(c);}SM(c,b,0,1,0,e);c.AJ=1;a.lp=c;}MJ(a.tD,0.0,
0.0+B6.lA.width,0.0,0.0+B6.lA.height,0.0,1.0);a.o0=1;},
AI1=(a,b)=>{let c=new UC();AMN(c,a,b);return c;},
Ge=(a,b)=>{let c,d;if(a.m9!==null){b=new BO;b.kc=1;b.kd=1;b.kf=A(584);B(b);}a.m9=b;if(a.o0){Dm(a.te,a.tD.lC);OJ(a.te.lC,a.rG.lC);a.o0=0;}b=a.lp;c=a.te;d=a.m9.s5;Dm(b.uL,c.lC);b.xt=d;},
AJx=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;AGx(a,Id,RG,8);GX();o=Gq.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.m9!==Id){bf=a.lp;bf.mK.data[bf.mA+bf.m4|0]=DD(k.k_,k.k$,k.k9,k.la);DF(a.lp,x,y,0.0);bf=a.lp;bf.mK.data[bf.mA+bf.m4|0]
=DD(l.k_,l.k$,l.k9,l.la);DF(a.lp,z,ba,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(m.k_,m.k$,m.k9,m.la);DF(a.lp,bb,bc,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(m.k_,m.k$,m.k9,m.la);DF(a.lp,bb,bc,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(n.k_,n.k$,n.k9,n.la);DF(a.lp,bd,be,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(k.k_,k.k$,k.k9,k.la);DF(a.lp,x,y,0.0);}else{bf=a.lp;bf.mK.data[bf.mA+bf.m4|0]=DD(k.k_,k.k$,k.k9,k.la);DF(a.lp,x,y,0.0);bf=a.lp;bf.mK.data[bf.mA+bf.m4|0]=DD(l.k_,l.k$,l.k9,l.la);DF(a.lp,z,ba,0.0);bf=a.lp;bf.mK.data[bf.mA
+bf.m4|0]=DD(l.k_,l.k$,l.k9,l.la);DF(a.lp,z,ba,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(m.k_,m.k$,m.k9,m.la);DF(a.lp,bb,bc,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(m.k_,m.k$,m.k9,m.la);DF(a.lp,bb,bc,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(n.k_,n.k$,n.k9,n.la);DF(a.lp,bd,be,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(n.k_,n.k$,n.k9,n.la);DF(a.lp,bd,be,0.0);l=a.lp;l.mK.data[l.mA+l.m4|0]=DD(k.k_,k.k$,k.k9,k.la);DF(a.lp,x,y,0.0);}},
AGx=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.m9;if(e===null){b=new BO;b.kc=1;b.kd=1;b.kf=A(31);B(b);}if(!(e!==b&&e!==c)){if(a.o0){Gb(a.lp);a.m9=null;Ge(a,e);}else{b=a.lp;if((b.wg-b.rr|0)<d){Gb(b);a.m9=null;Ge(a,e);}}}else{if(!a.s_){if(c===null){c=new BO;e=new K;e.ka=G(16);E(e,e.j_,A(585));E(e,e.j_,b===null?A(2):b.kt);E(e,e.j_,A(586));b=new I;f=e.ka;g=f.data;h=e.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);c.kc=1;c.kd=1;c.kf=b;B(c);}b=new H;b.kc=1;b.kd=1;B(b);}j=new BO;e=new K;e.ka=G(16);E(e,e.j_,A(585));E(e,
e.j_,b===null?A(2):b.kt);E(e,e.j_,A(587));E(e,e.j_,c.kt);E(e,e.j_,A(586));b=new I;f=e.ka;g=f.data;h=e.j_;i=g.length;if(h>=0&&h<=(i-0|0)){b.kb=L(f.data,0,h);j.kc=1;j.kd=1;j.kf=b;B(j);}b=new H;b.kc=1;b.kd=1;B(b);}Gb(a.lp);a.m9=null;Ge(a,b);}};
let MQ=F(EO);
let Kr=F(EO);
let OY=F(EO);
let Qf=F(0);
function LV(){let a=this;C.call(a);a.xt=0;a.mA=0;a.xW=0;a.wg=0;a.rr=0;a.od=null;a.rS=null;a.AJ=0;a.ya=0;a.wQ=0;a.Aj=0;a.m4=0;a.yP=0;a.uL=null;a.mK=null;a.uD=null;}
let SM=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.uL=Dj();a.wg=b;a.ya=e;a.rS=f;g=ZX(a,c,d,e);h=new JB;h.sB=1;h.sb=0;f=new Bo;C0();h.xJ=f;f=Rs(g);h.mF=EQ===null?SL(0,b,f):Sl(0,b,f);f=new HX;f.oU=1;f.qA=0;f.ul=1;if(!Do){g=FM(0);d=g.data.length;i=new J9;j=0+d|0;U_(i,d);i.kr=0;i.kj=j;i.r1=0;i.sn=0;i.rE=g;}else{k=new C4;g=BN(0);Bu(k);k.kC=(-1);k.kL=0;k.kj=0;k.lk=Ct;k.lP=0;k.le=g;k.kr=0;k.kj=0;k.mu=1;k.lY=0;k.lk=Dr();i=Kl(k);}f.ol=i;i.kj=i.kr;i.kr=0;i.kC=(-1);i=Br;k=i.kk.createBuffer();d=i.mI;i.mI=d+1|0;Ca(i.nq,d,Cd(k));f.sy
=d;f.rT=35048;h.mC=f;h.q4=0;f=Df;i=Ih;if(f===null){i=i.mv.data[0];while(i!==null&&i.nl!==null){i=i.ny;}}else{k=f;if(!k.$id$){l=Fd();k.$id$=l;}m=f.$id$;g=i.mv.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.pQ==m){k=i.nl;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.ny;}}i=i===null?null:i.mZ;if(i===null){i=new Bh;i.kF=1;i.ki=R(C,16);}S(i,h);Fu(Ih,f,i);a.od=h;a.mK=Cc(Dy(b,(h.mF.jl()).nd/4|0));a.wQ=(a.od.mF.jl()).nd/4|0;g=(a.od.mF.jl()).mk.data;b=g.length;d=0;a:{while(d<b){if(g[d].m2==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.od.mF.jl()).mk.data;m=g.length;c=0;b:{while(c<m){if(g[c].m2==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.ot/4|0;}a.Aj=b;g=(a.od.mF.jl()).mk.data;m=g.length;c=0;c:{while(c<m){if(g[c].m2==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.od.mF.jl()).mk.data;m=g.length;c=0;d:{while(c<m){if(g[c].m2==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.ot/4|0;}a.m4=b;g=(a.od.mF.jl()).mk.data;m=g.length;c=0;e:{while(c<m){if(g[c].m2==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.od.mF.jl()).mk.data;m
=g.length;c=0;f:{while(c<m){if(g[c].m2==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.ot/4|0;}a.yP=b;a.uD=R(I,e);m=0;g:{while(m<e){g=a.uD;f=new K;f.ka=G(16);E(f,f.j_,A(588));J(f,f.j_,m,10);i=new I;n=f.ka;o=n.data;c=f.j_;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.kb=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new H;f.kc=1;f.kd=1;B(f);},
AHz=(a,b,c,d,e)=>{let f=new LV();SM(f,a,b,c,d,e);return f;},
ZX=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bh;e.kF=1;e.ki=R(C,16);f=new Eb;f.m2=1;f.mL=3;f.m1=5126;f.m$=0;f.m6=A(474);f.oJ=0;f.pV=Eq(1);S(e,f);if(b){g=new Eb;g.m2=8;g.mL=3;g.m1=5126;g.m$=0;g.m6=A(589);g.oJ=0;g.pV=Eq(8);S(e,g);}if(c){g=new Eb;g.m2=4;g.mL=4;g.m1=5121;g.m$=1;g.m6=A(475);g.oJ=0;g.pV=Eq(4);S(e,g);}h=0;while(true){if(h>=d){b=e.ke;i=R(Eb,b);j=i.data;h=0;while(true){c=BW(h,b);if(c>=0)break;if(c>=0){f=new H;g=new K;g.ka=G(16);E(g,g.j_,A(18));J(g,g.j_,h,10);E(g,g.j_,A(19));b=e.ke;J(g,g.j_,b,10);e=new I;i
=g.ka;j=i.data;c=g.j_;d=j.length;if(c>=0&&c<=(d-0|0)){e.kb=L(i.data,0,c);f.kc=1;f.kd=1;f.kf=e;B(f);}e=new H;e.kc=1;e.kd=1;B(e);}j[h]=e.ki.data[h];h=h+1|0;}return i;}g=new Eb;k=new K;k.ka=G(16);E(k,k.j_,A(590));J(k,k.j_,h,10);f=new I;i=k.ka;j=i.data;c=k.j_;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.kb=L(i.data,0,c);g.m2=16;g.mL=2;g.m1=5126;g.m$=0;g.m6=f;g.oJ=0;g.pV=Eq(16);S(e,g);h=h+1|0;}e=new H;e.kc=1;e.kd=1;B(e);},
DF=(a,b,c,d)=>{let e,f;e=a.mA;f=a.mK.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.xW=0;a.mA=e+a.wQ|0;a.rr=a.rr+1|0;},
Gb=a=>{let b,c,d,e,f,g,h;if(!a.rr)return;b=a.rS;c=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}c.hc(b.m7);c=a.rS;d=a.uL;IA();e=Jy(c,A(591),H$);b=Br;if(c.lf){CO(c,c.mf,c.mh);c.lf=0;}QZ(b,e,1,0,d.lC,0);f=0;while(f<a.ya){b=a.rS;c=a.uD.data[f];d=Br;if(b.lf){CO(b,b.mf,b.mh);b.lf=0;}d.hm(Jy(b,c,H$),f);f=f+1|0;}b=a.od;g=a.mK;h=a.mA;b.mF.hd(g,0,h);b=a.od;S4(b,a.rS,a.xt,0,b.mC.h7()<=0?b.mF.jm():b.mC.h3(),b.sB);a.xW=0;a.mA=0;a.rr=0;},
W0=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.ka=G(16);E(e,e.j_,A(592));f=!b?A(68):A(593);E(e,e.j_,f);f=!c?A(68):A(594);E(e,e.j_,f);f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.ka=G(16);E(e,e.j_,f);E(e,e.j_,A(595));f=!c?A(68):A(596);E(e,e.j_,f);f=new I;g=e.ka;h=g.data;b=e.j_;j=h.length;if(b>=0&&b<=(j-0|0)){f.kb=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.ka=G(16);E(e,e.j_,f);E(e,e.j_,A(597));f=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i
>=0&&i<=(j-0|0)){f.kb=L(g.data,0,i);if(c){e=new K;e.ka=G(16);E(e,e.j_,f);E(e,e.j_,A(598));f=new I;g=e.ka;h=g.data;c=e.j_;i=h.length;if(c>=0&&c<=(i-0|0))f.kb=L(g.data,0,c);else{e=new H;e.kc=1;e.kd=1;B(e);}}i=0;while(true){if(i>=d){e=new K;e.ka=G(16);E(e,e.j_,f);E(e,e.j_,A(599));f=new I;g=e.ka;h=g.data;c=e.j_;d=h.length;if(c>=0&&c<=(d-0|0)){f.kb=L(g.data,0,c);return f;}e=new H;e.kc=1;e.kd=1;B(e);}e=new K;e.ka=G(16);E(e,e.j_,f);E(e,e.j_,A(600));J(e,e.j_,i,10);E(e,e.j_,A(601));E(e,e.j_,A(590));J(e,e.j_,i,10);E(e,
e.j_,A(602));f=new I;g=e.ka;h=g.data;c=e.j_;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.kb=L(g.data,0,c);i=i+1|0;}e=new H;e.kc=1;e.kd=1;B(e);}e=new H;e.kc=1;e.kd=1;B(e);}e=new K;e.ka=G(16);E(e,e.j_,f);E(e,e.j_,A(603));J(e,e.j_,i,10);E(e,e.j_,A(602));f=new I;g=e.ka;h=g.data;j=e.j_;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.kb=L(g.data,0,j);i=i+1|0;}e=new H;e.kc=1;e.kd=1;B(e);}e=new H;e.kc=1;e.kd=1;B(e);}e=new K;e.ka=G(16);E(e,e.j_,f);E(e,e.j_,A(604));J(e,e.j_,i,10);E(e,e.j_,A(602));f=new I;g=e.ka;h=g.data;j
=e.j_;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.kb=L(g.data,0,j);i=i+1|0;}e=new H;e.kc=1;e.kd=1;B(e);}e=new H;e.kc=1;e.kd=1;B(e);},
AJA=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(605);if(c){f=new K;f.ka=G(16);E(f,f.j_,e);E(f,f.j_,A(596));e=new I;g=f.ka;h=g.data;i=f.j_;j=h.length;if(i>=0&&i<=(j-0|0))e.kb=L(g.data,0,i);else{e=new H;e.kc=1;e.kd=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.ka=G(16);E(f,f.j_,e);E(f,f.j_,A(606));e=!c?A(607):A(608);E(f,f.j_,e);e=new I;h=f.ka;g=h.data;b=f.j_;c=g.length;if(b>=0&&b<=(c-0|0)){e.kb=L(h.data,0,b);if(d>0){f=new K;f.ka=G(16);E(f,f.j_,e);E(f,f.j_,A(609));e=new I;g=f.ka;h=g.data;c=f.j_;i=h.length;if(c>=0&&c<=(i-
0|0))e.kb=L(g.data,0,c);else{e=new H;e.kc=1;e.kd=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.ka=G(16);E(f,f.j_,e);E(f,f.j_,A(610));e=new I;g=f.ka;h=g.data;c=f.j_;d=h.length;if(c>=0&&c<=(d-0|0)){e.kb=L(g.data,0,c);return e;}e=new H;e.kc=1;e.kd=1;B(e);}if(i!=c){f=new K;f.ka=G(16);E(f,f.j_,e);E(f,f.j_,A(611));J(f,f.j_,i,10);E(f,f.j_,A(612));J(f,f.j_,i,10);E(f,f.j_,A(613));e=new I;g=f.ka;h=g.data;j=f.j_;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.kb=L(g.data,0,j);}else{f=new K;f.ka=G(16);E(f,f.j_,e);E(f,
f.j_,A(611));J(f,f.j_,i,10);E(f,f.j_,A(612));J(f,f.j_,i,10);E(f,f.j_,A(55));e=new I;g=f.ka;h=g.data;j=f.j_;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.kb=L(g.data,0,j);}i=i+1|0;}e=new H;e.kc=1;e.kd=1;B(e);}e=new H;e.kc=1;e.kd=1;B(e);}e=new H;e.kc=1;e.kd=1;B(e);}f=new K;f.ka=G(16);E(f,f.j_,e);E(f,f.j_,A(603));J(f,f.j_,i,10);E(f,f.j_,A(602));e=new I;g=f.ka;h=g.data;j=f.j_;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.kb=L(g.data,0,j);f=new K;f.ka=G(16);E(f,f.j_,e);E(f,f.j_,A(614));J(f,f.j_,i,10);E(f,f.j_,
A(602));e=new I;g=f.ka;h=g.data;j=f.j_;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.kb=L(g.data,0,j);i=i+1|0;}e=new H;e.kc=1;e.kd=1;B(e);}e=new H;e.kc=1;e.kd=1;B(e);};
function Hw(){BH.call(this);this.s5=0;}
let AHP=null,Id=null,RG=null,ARo=null;
let AMz=()=>{let b,c,d;b=new Hw;b.kt=A(615);b.kn=0;b.s5=0;AHP=b;c=new Hw;c.kt=A(616);c.kn=1;c.s5=1;Id=c;d=new Hw;d.kt=A(617);d.kn=2;d.s5=4;RG=d;ARo=V(Hw,[b,c,d]);};
let AEE=F();
function SU(){let a=this;C.call(a);a.qX=0;a.qx=0;a.nR=0;a.sS=Ce;a.ux=null;a.ww=null;a.yc=Ce;a.wm=null;}
function Jr(){let a=this;C.call(a);a.rM=null;a.zd=0.0;a.zG=0;a.ur=null;a.l1=null;a.yX=null;a.xz=null;a.AB=null;}
let APj=null,ATz=null;
let NQ=()=>{NQ=BR(Jr);AOw();};
let ATh=(a,b,c,d)=>{let e;NQ();a.zd=1.0;a.zG=0;if(!BC(b,Vs)){e=AFP(b,c);a.rM=e;b=new R8;b.pW=a;b.lj=e;a.xz=b;}else{e=new TD;Qx(e,b,c);e.o4=0;e.rv=FM(Ll((e.k7.data.length/5|0)*3|0)|0);b=new SC;b.pW=a;b.lj=e;a.xz=b;a.rM=e;}b=new R6;c=a.rM;b.pW=a;b.lj=c;a.ur=b;b=new T5;b.pW=a;b.lj=c;e=new G6;e.sf=1;e.no=Cc(16);b.pN=e;e=new G6;e.sf=1;e.no=Cc(16);b.tE=e;a.l1=b;b=new RZ;b.pW=a;b.lj=c;a.yX=b;a.AB=d;},
AOw=()=>{APj=Dj();ATz=Cc(6);};
function Rw(){Jr.call(this);this.AZ=null;}
let Ix=F(BH);
let Uw=null,I9=null,CB=null,AEf=null;
let AM8=()=>{let b,c,d;b=new Ix;b.kt=A(163);b.kn=0;Uw=b;c=new Ix;c.kt=A(618);c.kn=1;I9=c;d=new Ix;d.kt=A(619);d.kn=2;CB=d;AEf=V(Ix,[b,c,d]);};
function So(){let a=this;C.call(a);a.m_=null;a.mg=0;}
let AEr=null;
let Gv=(a,b)=>{let c,d,e,f;c=a.m_;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);Dv(c,0,f,0,a.mg);a.m_=f;},
JZ=a=>{let b,c,d;b=a.mg+4|0;if(b>a.m_.data.length)Gv(a,b);c=a.m_.data;d=a.mg;b=d+1|0;a.mg=b;c[d]=110;d=b+1|0;a.mg=d;c[b]=117;b=d+1|0;a.mg=b;c[d]=108;a.mg=b+1|0;c[b]=108;},
AKK=()=>{AEr=AGn([48,49,50,51,52,53,54,55,56,57]);};
function Q6(){let a=this;DW.call(a);a.nr=null;a.AT=null;}
let Qj=F(0);
function RB(){let a=this;C.call(a);a.yH=0;a.Aa=0;a.y$=0.0;}
let Vs=F(0);
function Hz(){let a=this;C.call(a);a.u2=null;a.qR=null;a.ne=0.0;a.k7=null;a.k1=0;a.ys=0.0;a.wr=0.0;a.xf=0.0;a.oo=0;a.sK=null;}
let ACw=null;
let Nc=()=>{Nc=BR(Hz);ADR();};
let Qx=(a,b,c)=>{Nc();a.ys=1.0;a.wr=0.5;a.xf=0.0010000000474974513;a.oo=0;a.sK=null;a.u2=b;a.k7=Cc(2000);a.qR=c;IZ(a);a.ne=Es(LA);},
AFP=(a,b)=>{let c=new Hz();Qx(c,a,b);return c;},
AVT=(a,b)=>{let c;c=a.qR;a.qR=b;IZ(a);return c;},
IZ=a=>{let b,c,d,e,f;a:{b=a.qR;if(b!==null){c=0.5*(b.vE+b.vD);d=0.5*(b.vF+b.vA);e=0;while(true){f=a.k7.data;if(e>=f.length)break a;f[e+3|0]=c;f[e+4|0]=d;e=e+5|0;}}}},
AW8=(a,b)=>{let c,d;c=Es(b);d=a.ne;a.ne=c;return d;},
AWQ=(a,b)=>{let c;c=a.ne;a.ne=b;return c;},
AUy=a=>{return a.ne;},
AW1=a=>{return a.oo;},
AVv=a=>{let b;b=a.oo;a.oo=1;return b;},
AVf=a=>{a.oo=0;if(a.k1>0)a.jp();},
AXu=a=>{return a.sK===null?0:1;},
ADl=a=>{a.k1=a.k1+4|0;},
AHN=a=>{let b,c,d;b=a.k7.data;c=5*a.k1|0;d=b[c+10|0];b[c+15|0]=d;d=b[c+11|0];b[c+16|0]=d;a.jq();},
AK8=a=>{FZ(a,4);},
AWS=a=>{FZ(a,4);},
FZ=(a,b)=>{let c,d;c=b*5|0;d=a.k7.data.length;if(c>d)a.js(c);else if(((d-(20*a.k1|0)|0)/5|0)<b)a.jp();},
AHV=(a,b)=>{let c;a.jp();c=a.k7.data.length;while(b>c){c=c*2|0;}a.k7=Cc(c);IZ(a);},
AUP=a=>{return (a.k7.data.length-(20*a.k1|0)|0)/5|0;},
AH6=a=>{let b,c;b=a.k1;if(!b)return;c=a.sK;if(c===null?0:1)c.jt();else{c=a.qR;if(c===null){c=new BO;c.kc=1;c.kd=1;c.kf=A(620);B(c);}AHs(a.u2,c.pp,a.k7,0,5*b|0);}a.k1=0;},
AVj=a=>{return 5*a.k1|0;},
AV$=(a,b)=>{a.k7.data[(5*a.k1|0)+0|0]=b;},
AVr=(a,b)=>{a.k7.data[(5*a.k1|0)+1|0]=b;},
AW7=(a,b)=>{a.k7.data[(5*a.k1|0)+5|0]=b;},
AUp=(a,b)=>{a.k7.data[(5*a.k1|0)+6|0]=b;},
AUk=(a,b)=>{a.k7.data[(5*a.k1|0)+10|0]=b;},
AXd=(a,b)=>{a.k7.data[(5*a.k1|0)+11|0]=b;},
AVh=(a,b)=>{a.k7.data[(5*a.k1|0)+15|0]=b;},
AWs=(a,b)=>{a.k7.data[(5*a.k1|0)+16|0]=b;},
AUz=a=>{return a.k7.data[(5*a.k1|0)+10|0];},
AVD=a=>{return a.k7.data[(5*a.k1|0)+11|0];},
AWm=a=>{return a.k7.data[(5*a.k1|0)+15|0];},
AWY=a=>{return a.k7.data[(5*a.k1|0)+16|0];},
AWf=(a,b)=>{a.k7.data[(5*a.k1|0)+2|0]=b;},
AWZ=(a,b)=>{a.k7.data[(5*a.k1|0)+7|0]=b;},
AX2=(a,b)=>{a.k7.data[(5*a.k1|0)+12|0]=b;},
AUS=(a,b)=>{a.k7.data[(5*a.k1|0)+17|0]=b;},
ADR=()=>{ACw=Dj();};
function EP(){let a=this;C.call(a);a.pW=null;a.lj=null;}
let DU=null,DJ=null,D_=null,C1=null,C2=null,S9=null,Nt=null;
let AUr=()=>{DU=new Z;DJ=new Z;D_=new Z;C1=new Z;C2=new Z;S9=new Z;Nt=new Z;};
let HZ=F(EP);
let ALb=null;
let AS1=()=>{let b,c;b=new Ow;c=new Mt;c.wb=1;c.wL=FM(16);b.zx=c;c=new F5;c.pG=1;c.mS=Ba(16);b.z2=c;c=new Mt;c.wb=1;c.wL=FM(16);b.zD=c;ALb=b;};
let R8=F(HZ);
function TD(){let a=this;Hz.call(a);a.rv=null;a.o4=0;}
let ASt=a=>{let b,c,d,e,f,g,h,i;b=a.k1;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.o4;g=3*f|0;h=a.rv.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;f=f+1|0;a.o4=f;i=(b+3|0)<<16>>16;d=3*f|0;h[d]=c;h[d+1|0]=e;h[d+2|0]=i;a.o4=f+1|0;a.k1=b+4|0;},
AT6=a=>{let b,c,d,e,f,g,h;b=a.k1;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.o4;g=3*f|0;h=a.rv.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;a.o4=f+1|0;a.k1=b+3|0;},
AL7=a=>{let b;b=a.k7.data.length;if(15>b)Oj(a,15);else if(((b-(20*a.k1|0)|0)/5|0)<3)LU(a);},
LU=a=>{let b,c;b=a.k1;if(!b)return;c=a.sK;if(c===null?0:1)c.jt();else a.u2.jv(a.qR.pp,a.k7,0,5*b|0,a.rv,0,3*a.o4|0);a.k1=0;a.o4=0;},
Oj=(a,b)=>{let c;LU(a);c=a.k7.data.length;while(b>c){c=c*2|0;}a.k7=Cc(c);IZ(a);a.rv=FM(Ll((a.k7.data.length/5|0)*3|0)|0);};
let SC=F(HZ);
let R6=F(EP);
let Wb=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n,o,p,q,r,s;FZ(a.lj,4);j=0.0;k=d-b;l=e-c;if(g){m=a.lj;n=m.xf;o=m.ys;p=m.wr;b=b/o;b=(b+CT(b)*0.5|0)*o+p-CT(k)*n;c=c/o;c=(c+CT(c)*0.5|0)*o+p-CT(l)*n;d=d/o;d=(d+CT(d)*0.5|0)*o+p+CT(k)*n;e=e/o;e=(e+CT(e)*0.5|0)*o+p+CT(l)*n;}q=0.5*f;if(b!==d){if(c===e){j=q;q=0.0;}else{f=e-c;k=d-b;r=1.0/CH(f*f+k*k)*q;q=f*r;j=k*r;}}f=b+q;m=a.lj;s=m.k7.data;g=5*m.k1|0;s[g+0|0]=f;s[g+1|0]=c-j;s[g+5|0]=b-q;s[g+6|0]=c+j;s[g+10|0]=d-q;s[g+11|0]=e+j;s[g+15|0]=d+q;s[g+16|0]=e-j;s[g+2|0]=h;s[g+7|0]
=h;s[g+12|0]=i;s[g+17|0]=i;m.jq();m=a.lj;if(!m.oo)m.jp();};
function T5(){let a=this;EP.call(a);a.pN=null;a.tE=null;}
let G9=null,Hb=null;
let Cy=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;while(true){g=BW(f,b.ke);if(g>=0)break;if(g>=0){h=new H;d=new K;d.ka=G(16);E(d,d.j_,A(18));J(d,d.j_,f,10);E(d,d.j_,A(19));e=b.ke;J(d,d.j_,e,10);b=new I;i=d.ka;j=i.data;f=d.j_;g=j.length;if(f>=0&&f<=(g-0|0)){b.kb=L(i.data,0,f);h.kc=1;h.kd=1;h.kf=b;B(h);}b=new H;U(b);B(b);}h=b.ki.data[f];UT(a.tE,h.kh,h.kg);f=f+1|0;}b=a.tE;AFD(a,b.no,0,b.nx,c,d,e);a.tE.nx=0;},
AFD=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o;b=b.data;if(b.length<4)return;P5(a.pN,b[c]);P5(a.pN,b[c+1|0]);h=c+2|0;while(h<d){c=Ej(b[h-2|0]-b[h])>=0.0010000000474974513?0:1;if(!(c&&(Ej(b[h-1|0]-b[h+1|0])>=0.0010000000474974513?0:1)))UT(a.pN,b[h],b[h+1|0]);h=h+2|0;}i=a.pN;h=i.nx;c=BW(h,4);if(c<0){i.nx=0;return;}if(!c){j=a.pW.ur;b=i.no.data;k=b[0];l=b[1];m=b[2];n=b[3];o=j.lj.ne;Wb(j,k,l,m,n,e,0,o,o);j.lj.jp();a.pN.nx=0;return;}j=a.lj;d=j.oo;j.oo=1;if(f===Uw)YL(a,i.no,h,e,g);else AFn(a,i.no,h,e,g,f!==I9?0:1);if(!d)
{f=a.lj;f.oo=0;if(f.k1>0)f.jp();}a.pN.nx=0;},
YL=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=!e?c:c-2|0;g=0;while(g<f){h=b.data;i=a.pW.ur;j=h[g];k=h[g+1|0];l=g+2|0;m=h[l%c|0];n=h[(g+3|0)%c|0];o=i.lj.ne;Wb(i,j,k,m,n,d,0,o,o);i.lj.jp();g=l;}},
AFn=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;g=0.5*d;h=a.lj;i=h.ne;FZ(h,4);j=2;k=c-2|0;l=g*g;m=c-1|0;while(j<k){n=b.data;h=DU;d=n[j-2|0];o=n[j-1|0];h.kh=d;h.kg=o;p=DJ;d=n[j];o=n[j+1|0];p.kh=d;p.kg=o;q=D_;r=j+2|0;d=n[r];o=n[j+3|0];q.kh=d;q.kg=o;if(f)K4(h,p,q,C1,C2,g);else Ec(h,p,q,C1,C2,g,0);p=C1;d=p.kh;o=p.kg;h=a.lj;s=h.k7.data;t=5*h.k1|0;s[t+10|0]=d;s[t+11|0]=o;q=C2;d=q.kh;o=q.kg;s[t+15|0]=d;s[t+16|0]=o;if(j==2){if(!e){h=Nt;d=n[k];o=n[m];h.kh=d;h.kg=o;if(f)K4(h,DU,DJ,G9,Hb,g);else Ec(h,
DU,DJ,G9,Hb,g,1);h=Hb;d=h.kh;o=h.kg;h=a.lj;s=h.k7.data;t=5*h.k1|0;s[t+0|0]=d;s[t+1|0]=o;h=G9;d=h.kh;o=h.kg;s[t+5|0]=d;s[t+6|0]=o;}else{d=n[2];o=n[3];u=n[0];v=n[1];h=Ew;h.kh=u;h.kg=v;d=u-d;h.kh=d;o=v-o;h.kg=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=CH(l/o);h.kh=h.kh*d;h.kg=h.kg*d;}h=Ew;d=h.kg;o= -h.kh;p.kh=d;p.kg=o;p.kh=d+u;p.kg=o+v;d= -h.kg;o=h.kh;q.kh=d;q.kg=o;q.kh=d+u;q.kg=o+v;h=C2;d=h.kh;o=h.kg;h=a.lj;s=h.k7.data;t=5*h.k1|0;s[t+0|0]=d;s[t+1|0]=o;h=C1;d=h.kh;o=h.kg;s[t+5|0]=d;s[t+6|0]=o;}}if(!f){Ec(DU,DJ,D_,C1,C2,
g,1);h=C1;v=h.kh;w=h.kg;h=C2;x=h.kh;u=h.kg;}else{h=a.lj;s=h.k7.data;t=5*h.k1|0;v=s[t+10|0];w=s[t+11|0];x=s[t+15|0];u=s[t+16|0];}h=a.lj;s=h.k7.data;t=5*h.k1|0;s[t+2|0]=i;s[t+7|0]=i;s[t+12|0]=i;s[t+17|0]=i;h.jq();if(!f){p=DU;q=DJ;y=D_;z=C1;ba=C2;a.lj.jE();c=Ec(p,q,y,z,ba,g,0);h=!c?z:ba;d=h.kh;o=h.kg;h=a.lj;s=h.k7.data;j=5*h.k1|0;s[j+0|0]=d;s[j+1|0]=o;h=!c?ba:z;d=h.kh;o=h.kg;s[j+5|0]=d;s[j+6|0]=o;if(Ec(p,q,y,z,ba,g,1))z=ba;d=z.kh;o=z.kg;h=a.lj;s=h.k7.data;t=5*h.k1|0;s[t+10|0]=d;s[t+11|0]=o;d=h.ne;s[t+2|0]=d;s[t
+7|0]=d;s[t+12|0]=d;h.jF();}FZ(a.lj,4);h=a.lj;s=h.k7.data;t=5*h.k1|0;s[t+0|0]=x;s[t+1|0]=u;s[t+5|0]=v;s[t+6|0]=w;j=r;}if(e){h=DJ;p=D_;q=C1;y=C2;d=h.kh;o=h.kg;g=p.kh;u=p.kg;h=Ew;h.kh=g;h.kg=u;d=g-d;h.kh=d;o=u-o;h.kg=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=CH(l/o);h.kh=h.kh*d;h.kg=h.kg*d;}h=Ew;d=h.kg;o= -h.kh;q.kh=d;q.kg=o;q.kh=d+g;q.kg=o+u;d= -h.kg;o=h.kh;y.kh=d;y.kg=o;y.kh=d+g;y.kg=o+u;h=C2;d=h.kh;o=h.kg;p=a.lj;b=p.k7.data;e=5*p.k1|0;b[e+10|0]=d;b[e+11|0]=o;h=C1;d=h.kh;o=h.kg;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e
+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jq();}else if(f){b=b.data;h=DU;d=b[0];o=b[1];h.kh=d;h.kg=o;K4(DJ,D_,h,C1,C2,g);h=C1;d=h.kh;o=h.kg;p=a.lj;b=p.k7.data;e=5*p.k1|0;b[e+10|0]=d;b[e+11|0]=o;h=C2;d=h.kh;o=h.kg;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jq();FZ(a.lj,4);h=C1;d=h.kh;o=h.kg;p=a.lj;b=p.k7.data;e=5*p.k1|0;b[e+0|0]=d;b[e+1|0]=o;h=C2;d=h.kh;o=h.kg;b[e+5|0]=d;b[e+6|0]=o;h=Hb;d=h.kh;o=h.kg;b[e+10|0]=d;b[e+11|0]=o;h=G9;d=h.kh;o=h.kg;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e
+12|0]=i;b[e+17|0]=i;p.jq();}else{s=b.data;h=DU;p=DJ;h.kh=p.kh;h.kg=p.kg;q=D_;p.kh=q.kh;p.kg=q.kg;d=s[0];o=s[1];q.kh=d;q.kg=o;Ec(h,p,q,C1,C2,g,0);h=C1;d=h.kh;o=h.kg;h=a.lj;b=h.k7.data;e=5*h.k1|0;b[e+10|0]=d;b[e+11|0]=o;p=C2;d=p.kh;o=p.kg;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;h.jq();p=DU;q=DJ;y=D_;z=C1;ba=C2;a.lj.jE();f=Ec(p,q,y,z,ba,g,0);h=!f?z:ba;d=h.kh;o=h.kg;h=a.lj;b=h.k7.data;e=5*h.k1|0;b[e+0|0]=d;b[e+1|0]=o;h=!f?ba:z;d=h.kh;o=h.kg;b[e+5|0]=d;b[e+6|0]=o;if(Ec(p,q,y,z,ba,g,
1))z=ba;d=z.kh;o=z.kg;h=a.lj;b=h.k7.data;e=5*h.k1|0;b[e+10|0]=d;b[e+11|0]=o;d=h.ne;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jF();FZ(a.lj,4);Ec(DU,DJ,D_,C1,C2,g,1);h=C2;d=h.kh;o=h.kg;p=a.lj;b=p.k7.data;e=5*p.k1|0;b[e+10|0]=d;b[e+11|0]=o;p=C1;d=p.kh;o=p.kg;b[e+15|0]=d;b[e+16|0]=o;q=DU;d=s[2];o=s[3];q.kh=d;q.kg=o;Ec(DJ,D_,q,p,h,g,0);h=C1;d=h.kh;o=h.kg;p=a.lj;b=p.k7.data;e=5*p.k1|0;b[e+0|0]=d;b[e+1|0]=o;h=C2;d=h.kh;o=h.kg;b[e+5|0]=d;b[e+6|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jq();h=DJ;p=D_;q=DU;y=C1;z
=C2;a.lj.jE();c=Ec(h,p,q,y,z,g,0);ba=!c?y:z;d=ba.kh;o=ba.kg;ba=a.lj;b=ba.k7.data;f=5*ba.k1|0;b[f+0|0]=d;b[f+1|0]=o;ba=!c?z:y;d=ba.kh;o=ba.kg;b[f+5|0]=d;b[f+6|0]=o;if(Ec(h,p,q,y,z,g,1))y=z;d=y.kh;o=y.kg;h=a.lj;b=h.k7.data;e=5*h.k1|0;b[e+10|0]=d;b[e+11|0]=o;d=h.ne;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jF();}},
AYb=()=>{G9=new Z;Hb=new Z;};
let RZ=F(EP);
let Wi=null,Oz=null;
let AVs=()=>{Wi=new Z;Oz=new Z;};
function Mt(){let a=this;C.call(a);a.wL=null;a.wb=0;}
function Q4(){let a=this;DW.call(a);a.nC=null;a.r9=null;a.rK=null;a.rW=null;}
let ZH=(a,b)=>{a.nC.nr.sS=El(b);},
Xr=(a,b)=>{b=a.nC.nr;b.qx=1;b.nR=0;},
AJv=(a,b,c)=>{Hn(a.rW,a.r9,a.rK,c);b=a.nC.nr;b.qX=1;b.nR=0;return 0;};
let OO=F();
let UP=null;
let Ns=()=>{Ns=BR(OO);AI4();};
let AI4=()=>{let b,c;b=Ba((NV.p()).data.length);c=b.data;UP=b;c[F3.kn]=1;c[FT.kn]=2;c[FH.kn]=3;c[Fy.kn]=4;c[Kb.kn]=5;};
let AR1=F();
let PB=0.0,PC=0.0;
let AVc=()=>{PB=CH(2.0);PC=CH(3.0);};
function Gk(){let a=this;GT.call(a);a.oN=0;a.nJ=null;a.n8=null;a.nP=null;}
let AAX=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new KS;c.oT=a;c.qg=b;c=B8(c,"handleEvent");b.onreadystatechange=c;c=a.nP;d=a.n8;e=new Hp;e.vu=c;e.sz=d;c=B8(e,"handleEvent");b.onprogress=c;d=a.nJ;f=a.oN;b.open("GET",Bz(d),!!f);if(a.oN){d="arraybuffer";b.responseType=d;}b.send();};
function OM(){let a=this;DW.call(a);a.s7=null;a.Av=null;}
let AA1=(a,b)=>{a.s7.nC.nr.sS=El(b);},
AKg=(a,b)=>{b=a.s7.nC.nr;b.qx=1;b.nR=0;},
Zq=(a,b,c)=>{c=a.s7;b=null;Hn(c.rW,c.r9,c.rK,b);b=c.nC.nr;b.qX=1;b.nR=0;return 0;};
let X3=F();
let Ei=null,Fv=null,Ew=null;
let K4=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;h=Ei;i=c.kh;h.kh=i;j=c.kg;h.kg=j;h.kh=i-b.kh;h.kg=j-b.kg;b=Fv;i=d.kh;b.kh=i;j=d.kg;b.kg=j;k=i-c.kh;b.kh=k;l=j-c.kg;b.kg=l;m=h.kg;i=k*m;j=h.kh;j=Of(i-l*j,j*k+m*l);n=Ej(j-0.0)>=0.0010000000474974513?0:1;if(!n&&!(Ej(j-6.2831854820251465)>=0.0010000000474974513?0:1)){m=g/J0(j);n=j>=0.0?0:1;b=Ei;i=m*m;g=b.kh;g=g*g;m=b.kg;m=g+m*m;if(m!==0.0&&m!==i){g=CH(i/m);b.kh=b.kh*g;b.kg=b.kg*g;}b=Fv;g=b.kh;g=g*g;m=b.kg;m=g+m*m;if(m!==0.0&&m!==i){g=CH(i/m);b.kh=b.kh*g;b.kg=b.kg*g;}h=!n
?f:e;if(n)e=f;m=c.kh;h.kh=m;i=c.kg;h.kg=i;b=Ei;m=m-b.kh;h.kh=m;i=i-b.kg;h.kg=i;d=Fv;h.kh=m+d.kh;h.kg=i+d.kg;m=c.kh;e.kh=m;i=c.kg;e.kg=i;m=m+b.kh;e.kh=m;i=i+b.kg;e.kg=i;e.kh=m-d.kh;e.kg=i-d.kg;return j;}b=Ei;g=g*g;m=b.kh;m=m*m;i=b.kg;m=m+i*i;if(m!==0.0&&m!==g){g=CH(g/m);b.kh=b.kh*g;b.kg=b.kg*g;}b=Ei;g= -b.kg;m=b.kh;e.kh=g;e.kg=m;e.kh=g+c.kh;e.kg=m+c.kg;g=b.kg;m= -b.kh;f.kh=g;f.kg=m;f.kh=g+c.kh;f.kg=m+c.kg;return j;},
Ec=(b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q;i=Ei;j=c.kh;i.kh=j;k=c.kg;i.kg=k;i.kh=j-b.kh;i.kg=k-b.kg;b=Fv;l=d.kh;b.kh=l;j=d.kg;b.kg=j;k=l-c.kh;b.kh=k;m=j-c.kg;b.kg=m;j=i.kg;l=k*j;n=i.kh;l=Of(l-m*n,n*k+j*m);o=Ej(l-0.0)>=0.0010000000474974513?0:1;if(!o&&!(Ej(l-6.2831854820251465)>=0.0010000000474974513?0:1)){j=g/J0(l);b=Ei;n=j*j;j=b.kh;j=j*j;k=b.kg;j=j+k*k;if(j!==0.0&&j!==n){j=CH(n/j);b.kh=b.kh*j;b.kg=b.kg*j;}b=Fv;j=b.kh;j=j*j;k=b.kg;k=j+k*k;if(k!==0.0&&k!==n){j=CH(n/k);b.kh=b.kh*j;b.kg=b.kg*j;}o=l>=0.0?0:1;i=
!o?f:e;if(o)e=f;k=c.kh;i.kh=k;l=c.kg;i.kg=l;p=Ei;k=k-p.kh;i.kh=k;l=l-p.kg;i.kg=l;q=Fv;i.kh=k+q.kh;i.kg=l+q.kg;if(h)p=q;if(!o){b=Ew;j= -p.kg;k=p.kh;b.kh=j;b.kg=k;}else{b=Ew;j=p.kg;k= -p.kh;b.kh=j;b.kg=k;}b=Ew;g=g*g;j=b.kh;j=j*j;k=b.kg;k=j+k*k;if(k!==0.0&&k!==g){g=CH(g/k);b.kh=b.kh*g;b.kg=b.kg*g;}j=c.kh;e.kh=j;k=c.kg;e.kg=k;b=Ew;e.kh=j+b.kh;e.kg=k+b.kg;return o;}b=Ei;g=g*g;j=b.kh;j=j*j;k=b.kg;k=j+k*k;if(k!==0.0&&k!==g){g=CH(g/k);b.kh=b.kh*g;b.kg=b.kg*g;}b=Ei;g= -b.kg;j=b.kh;e.kh=g;e.kg=j;e.kh=g+c.kh;e.kg=j+c.kg;g
=b.kg;j= -b.kh;f.kh=g;f.kg=j;f.kh=g+c.kh;f.kg=j+c.kg;return 1;},
AXI=()=>{Ei=new Z;Fv=new Z;Ew=new Z;};
function ON(){let a=this;DW.call(a);a.rp=null;a.wK=null;a.yq=null;a.sp=null;}
let AEP=(a,b)=>{a.rp.nC.nr.sS=El(b);},
X5=(a,b)=>{b=a.rp.nC.nr;b.qx=1;b.nR=0;},
X$=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.wK;if(e!==null)d.setAttribute("crossOrigin",Bz(e));a:{e=a.sp;e.lt=e.lt+1|0;e=new Lm;e.tm=a;e.AV=b;e.x0=c;e.v_=d;d.addEventListener("load",B8(e,"handleEvent"),!!0);d.addEventListener("error",B8(e,"handleEvent"),!!0);if(!a.sp.yw){b=Bz(b);d.src=b;}else{b=a.yq;c=AN_(c);e=new K;e.ka=G(16);E(e,e.j_,A(621));f=e.j_;if(b===null)b=A(2);E(e,f,b);E(e,e.j_,A(622));f=e.j_;if(c===null)c=A(2);E(e,f,c);b=new I;g=e.ka;h=g.data;i=e.j_;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.kb=L(g.data,0,i);b=Bz(b);d.src=b;}return 0;}b=new H;b.kc=1;b.kd=1;Bk(b);B(b);},
AFH=(a,b,c)=>{return X$(a,b,c);};
function KS(){let a=this;C.call(a);a.qg=null;a.oT=null;}
let AI$=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qg.readyState==4){if(a.qg.status==200){if(a.oT.nP.m8){if(BX===null){b=new C3;c=new Cu;c.l4=BN(32);b.mm=c;c=new K;Bu(c);c.ka=G(16);b.l7=c;b.l6=G(32);b.l8=0;b.l9=Co;BX=b;}b=a.oT.nJ;c=new K;c.ka=G(16);E(c,c.j_,A(581));d=c.j_;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ka;f=e.data;g
=c.j_;h=f.length;if(g>=0&&g<=(h-0|0)){b.kb=L(e.data,0,g);B2(Bz(b));B2("\n");}else{b=new H;b.kc=1;b.kd=1;Bk(b);B(b);}}i=a.qg.response;j=new Int8Array(i);b=a.oT;c=b.n8;k=b.nJ;b=new II;b.nT=j;b.u1=i;c.ja(k,b);}else if(a.qg.status!=404&&a.qg.status!=403){try{l=X(100);$p=1;continue _;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}b=a.oT;c=b.nP;d=b.oN;k=b.nJ;b=b.n8;if(c.m8){if(BX===null){i=new C3;j=new Cu;j.l4=BN(32);Bu(i);i.mm=j;j=new K;D1(j,16);i.l7=j;i.l6=G(32);i.l8=0;i.l9=Co;BX=i;}i=new K;i.ka
=G(16);E(i,i.j_,A(102));E(i,i.j_,k===null?A(2):k);j=new I;e=i.ka;f=e.data;h=i.j_;m=f.length;if(h>=0&&h<=(m-0|0)){j.kb=L(e.data,0,h);B2(Bz(j));B2("\n");}else{b=new H;U(b);B(b);}}c.lt=c.lt+1|0;i=new Gk;i.nP=c;i.oN=d;i.nJ=k;i.n8=b;b=null;c=null;i.nj=new C;i.ni=1;i.n1=c;i.oi=b;g=CY;CY=g+1|0;i.oh=X(g);b=new ED;b.n2=i;EW(b);}else{b=a.oT;b.n8.jb(b.nJ);}b=a.oT.nP;b.lt=b.lt-1|0;}return;case 1:a:{try{Ln(l);if(FO()){break _;}break a;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}}b=a.oT;c=b.nP;d=b.oN;k
=b.nJ;b=b.n8;if(c.m8){if(BX===null){i=new C3;j=new Cu;j.l4=BN(32);Bu(i);i.mm=j;j=new K;D1(j,16);i.l7=j;i.l6=G(32);i.l8=0;i.l9=Co;BX=i;}i=new K;i.ka=G(16);E(i,i.j_,A(102));E(i,i.j_,k===null?A(2):k);j=new I;e=i.ka;f=e.data;h=i.j_;m=f.length;if(h>=0&&h<=(m-0|0)){j.kb=L(e.data,0,h);B2(Bz(j));B2("\n");}else{b=new H;U(b);B(b);}}c.lt=c.lt+1|0;i=new Gk;i.nP=c;i.oN=d;i.nJ=k;i.n8=b;b=null;c=null;i.nj=new C;i.ni=1;i.n1=c;i.oi=b;g=CY;CY=g+1|0;i.oh=X(g);b=new ED;b.n2=i;EW(b);b=a.oT.nP;b.lt=b.lt-1|0;return;default:FC();}}Dp().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
ASB=(a,b)=>{let $p,$z;$p=0;if(FQ()){let $T=Dp();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI$(a,b);if(FO()){break _;}return;default:FC();}}Dp().s(a,b,$p);};
let ABv=F();
function Lm(){let a=this;C.call(a);a.AV=null;a.x0=null;a.v_=null;a.tm=null;}
let AFh=(a,b)=>{let c,d;c=W(b.type);if(c===A(623))d=1;else if(!(A(623) instanceof I))d=0;else{b=A(623);d=c.kb!==b.kb?0:1;}if(d){b=a.tm.rp.nC.nr;b.qx=1;b.nR=0;}else{b=a.x0;b.vb=a.v_;c=a.tm.rp;Hn(c.rW,c.r9,c.rK,b);b=c.nC.nr;b.qX=1;b.nR=0;}b=a.tm.sp;b.lt=b.lt-1|0;},
ADF=(a,b)=>{AFh(a,b);};
AUt([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",11,"actions",7,"graphics",15,"g2d",7,"math",0,"mygdx",18,"game",-1,"java",20,"util",21,"regex",20,"nio",23,"charset",20,"lang"]);
Dg([C,"Object",25,0,[],0,3,0,0,["cU",P(FJ),"cO",N(AJG),"T",P(P0)],AQE,0,C,[],0,3,0,0,0,OD,0,C,[],0,3,0,S5,0,Oq,0,C,[],3,3,0,0,0,MB,0,C,[Oq],0,3,0,0,0,CR,0,C,[],3,3,0,0,0,Nv,0,MB,[CR],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,FX,0,C,[BB],0,3,0,0,0,Dz,0,C,[],3,3,0,0,0,B_,0,C,[],3,3,0,0,0,BH,0,C,[Dz,B_],1,3,0,0,["T",P(AFN),"cO",N(YT)],HG,0,BH,[],12,3,0,0,0,Cm,"Actor",11,C,[],0,3,0,0,["be",N(FG),"J",Bf(R9),"x",N(AOM),"Z",N(ANR),"T",P(S$)],ME,0,C,[],3,3,0,0,0,BJ,"Group",11,Cm,[ME],0,3,0,0,["be",N(RS),"bQ",Bs(AH9),"Z",N(Pj),
"J",Bf(Iq),"x",N(AOl),"T",P(AB1)],GE,0,C,[],3,3,0,0,0,DV,"Iterable",25,C,[],3,3,0,0,0,Hm,0,C,[GE,DV],0,3,0,0,0,G0,0,C,[],3,3,0,0,0,B4,0,C,[G0],0,3,0,0,0,HD,0,B4,[],0,3,0,0,0,AMh,0,HD,[],0,0,0,0,0,G7,"FocusListener$FocusEvent$Type",13,BH,[],12,3,0,0,0,Nx,0,C,[],3,3,0,0,0,Jh,0,C,[Nx],3,3,0,0,0,GY,0,C,[],3,3,0,0,0,DQ,0,C,[GY],1,3,0,0,0,APy,0,DQ,[],0,0,0,0,0,Ni,0,Hm,[],0,3,0,0,0,MV,0,C,[G0],0,3,0,0,0,AC3,0,C,[],1,3,0,0,0,XD,0,C,[],0,3,0,0,0,Wg,0,C,[],3,3,0,0,0,LY,0,C,[Wg],0,3,0,0,0,ALH,0,LY,[],0,0,0,0,0,C9,"FocusListener$FocusEvent",
13,FX,[],0,3,0,0,["bt",P(Wu)],RE,0,C,[],32,0,0,WI,0,AJC,0,C,[],1,3,0,0,0,TC,0,C,[],32,0,0,Sj,0,APx,0,DQ,[],0,0,0,0,0,Fz,0,C,[Nx],0,3,0,0,0,Tx,0,Fz,[Jh],0,3,0,0,0,Wq,0,C,[],4,3,0,Uy,0,Mb,0,C,[G0],1,3,0,0,0,AR9,0,HD,[],0,3,0,0,0,AEs,0,C,[],0,3,0,0,0,U9,0,C,[],0,3,0,VP,0,Np,0,C,[G0],1,3,0,0,0,I1,0,Fz,[Jh],0,3,0,0,0]);
Dg([Wa,0,Fz,[Jh],0,3,0,0,0,Ep,0,B4,[],0,3,0,0,0,V4,0,I1,[],0,3,0,0,0,ABJ,0,FX,[],0,3,0,0,0,KR,0,C,[],3,3,0,0,0,Bb,"InputEvent",11,FX,[],0,3,0,0,["bt",P(Qr),"T",P(OX)],D8,"Stage$TouchFocus",11,C,[BB],4,3,0,0,["bt",P(O$)],Oa,0,C,[],32,0,0,Mj,0,DA,"InputEvent$Type",11,BH,[],12,3,0,0,0,BQ,"Action",11,C,[BB],1,3,0,0,["bZ",P(AM3),"by",N(ANJ),"bt",P(AAq),"T",P(ANM)],E7,0,BQ,[],1,3,0,0,0,AGs,0,E7,[],0,3,0,0,0,ALg,0,E7,[],0,3,0,0,0,C_,0,BQ,[],1,3,0,0,["bx",N(ARV),"bZ",P(ATX)],EY,0,C_,[],1,3,0,0,0,X2,0,EY,[],0,3,0,0,
0,AAm,0,C,[G0],0,0,0,0,0,NY,0,BQ,[],0,3,0,0,["bt",P(ALt),"by",N(AN1),"T",P(AJq)],Dq,"SequenceAction",14,NY,[],0,3,0,0,["bx",N(Oo),"bZ",P(U2)],AEk,0,BQ,[],0,3,0,0,0,AIH,0,BQ,[],0,3,0,0,0,ANH,0,BQ,[],0,3,0,0,0,AOC,0,C,[],0,3,0,0,0,L5,0,BQ,[],1,3,0,0,0,AH1,0,L5,[],0,3,0,0,0,DC,"MoveToAction",14,C_,[],0,3,0,0,["bt",P(UF)],APs,0,C_,[],0,3,0,0,0,AP5,0,EY,[],0,3,0,0,0,AL3,0,BQ,[],0,3,0,0,0,AMA,0,EY,[],0,3,0,0,0,ARK,0,C_,[],0,3,0,0,0,AQ4,0,C_,[],0,3,0,0,0,AEU,0,BQ,[],0,3,0,0,0,AHw,0,C_,[],0,3,0,0,0,AHM,0,BQ,[],0,3,
0,0,0,AFq,0,BQ,[],0,3,0,0,0,AH4,0,E7,[],0,3,0,0,0,YX,0,C_,[],0,3,0,0,0,ART,0,BQ,[],0,3,0,0,0,ALx,0,EY,[],0,3,0,0,0,AE7,0,E7,[],0,3,0,0,0,AKI,0,BQ,[],0,3,0,0,0,AAo,0,C_,[],0,3,0,0,0,AG6,0,C_,[],0,3,0,0,0,ABD,0,C,[CR],0,3,0,0,0,Dn,0,BJ,[KR],0,3,0,0,0,EJ,0,Dn,[],0,3,0,Q_,0,Gf,0,EJ,[GE],0,3,0,0,0,LR,0,Gf,[],0,3,0,0,0,ACy,0,LR,[],0,3,0,0,0]);
Dg([APu,0,B4,[],0,0,0,0,0,MT,0,Dn,[],0,3,0,0,0,Sr,0,C,[],3,3,0,0,0,ER,0,C,[Sr],1,3,0,0,0,AEK,0,ER,[],0,0,0,0,0,Dx,0,Cm,[KR],0,3,0,0,0,Zf,0,Dx,[],0,3,0,0,0,APt,0,B4,[],0,0,0,0,0,B7,0,C,[],1,3,0,IG,0,TI,0,B7,[],0,0,0,0,0,ALI,0,B7,[],0,0,0,0,0,KK,0,Ep,[],0,3,0,0,0,AHT,0,KK,[],0,3,0,0,0,V7,0,B7,[],0,0,0,0,0,ARw,0,B4,[],0,0,0,0,0,Ms,0,EJ,[],0,3,0,0,0,ALJ,0,B7,[],0,0,0,0,0,GC,0,C,[],3,3,0,0,0,DR,0,C,[B_,GC],0,3,0,0,0,D4,"Table$DebugRect",12,DR,[],0,3,0,Kh,0,AEO,0,ER,[],0,0,0,0,0,M8,0,Dx,[GE],0,3,0,0,0,ACN,0,M8,[],
0,3,0,0,0,AG$,0,B4,[],0,0,0,0,0,QB,0,C,[],3,3,0,0,0,ANO,0,C,[QB],0,3,0,0,0,GK,0,C,[],0,3,0,0,0,G_,0,GK,[],0,3,0,0,0,Ur,0,G_,[],0,3,0,0,0,Nb,0,Dx,[GE],0,3,0,0,0,AF_,0,Nb,[],0,3,0,0,0,ATp,0,MT,[],0,0,0,0,0,KT,0,Dn,[],0,3,0,0,0,AUa,0,Gf,[],0,3,0,0,0,NB,0,Dx,[ME],0,3,0,0,0,V5,0,B7,[],0,0,0,0,0,U4,0,C,[],0,3,0,0,0,AFj,0,C,[GY],0,0,0,0,0,AHX,0,B4,[],0,0,0,0,0,AJL,0,DQ,[],0,0,0,0,0,AGw,0,C,[],0,3,0,0,0,ANk,0,B4,[],0,0,0,0,0,AS7,0,Ep,[],0,0,0,0,0,AG8,0,MV,[],0,0,0,0,0,TE,0,B7,[],0,0,0,0,0,TH,0,B7,[],0,0,0,0,0,S_,0,
C,[],3,3,0,0,0,Kf,0,C,[],0,3,0,0,0,O8,0,Kf,[],0,3,0,0,0,AEL,0,ER,[],0,0,0,0,0]);
Dg([APr,0,Mb,[],0,0,0,0,0,APv,0,Np,[],0,0,0,0,0,ARx,0,B4,[],0,0,0,0,0,ARy,0,Ep,[],0,0,0,0,0,V6,0,B7,[],0,0,0,0,0,O0,0,C,[BB],0,3,0,Ut,0,Sf,0,G_,[],0,3,0,0,0,AHl,0,B4,[],0,0,0,0,0,ZE,0,DQ,[],0,0,0,0,0,TJ,0,B7,[],0,0,0,0,0,AC9,0,Dn,[],0,3,0,0,0,AG9,0,B4,[],0,0,0,0,0,SI,0,C,[],0,3,0,0,0,JD,0,B7,[],0,3,0,0,0,AFk,0,KT,[],0,3,0,0,0,TF,0,B7,[],0,0,0,0,0,AIy,0,Dx,[GE],0,3,0,0,0,AHf,0,Ni,[],0,0,0,0,0,VI,0,C,[],0,3,0,0,0,Pn,0,Dx,[],0,3,0,UJ,0,Pw,0,C,[],0,3,0,0,0,ALL,0,B7,[],0,0,0,0,0,V8,0,B7,[],0,0,0,0,0,AOK,0,Ms,[],
0,3,0,0,0,TG,0,B7,[],0,0,0,0,0,RF,0,C,[],0,3,0,0,0,ASW,0,C,[],0,3,0,0,0,FR,0,BH,[],12,3,0,0,0,ATd,0,B7,[],0,0,0,0,0,AGX,0,DQ,[],0,0,0,0,0,Dw,0,C,[],1,3,0,0,0,V9,0,Dw,[],0,0,0,0,0,Zt,0,C,[S_],0,3,0,0,0,VS,0,C,[],0,3,0,0,0,SX,0,C,[],0,3,0,0,0,Tz,0,C,[],0,3,0,0,0,Nz,0,B4,[],0,3,0,0,0,ZD,0,DQ,[],0,0,0,0,0,ARz,0,NB,[],0,0,0,0,0,Zw,0,C,[],3,3,0,0,0,AHm,0,B4,[],0,0,0,0,0,AT0,0,Dn,[],0,3,0,0,0,ALd,0,Dn,[],0,3,0,0,0,AHh,0,Ep,[],0,0,0,0,0,Nm,0,C,[],0,3,0,0,0,AEJ,0,Nm,[],0,0,0,0,0,AQ_,0,Cm,[CR],0,3,0,0,0,YF,0,B4,[],0,
0,0,0,0,AO7,0,Gf,[],0,3,0,0,0,AKh,0,B4,[],0,0,0,0,0]);
Dg([ASC,0,Ep,[],0,0,0,0,0,U$,0,GK,[],0,3,0,0,0,ALk,0,Dn,[],0,3,0,0,0,SN,0,C,[],0,3,0,0,0,RV,0,C,[],0,3,0,0,0,AJT,0,Dx,[],0,3,0,0,0,AS8,0,Hm,[],0,0,0,0,0,YH,0,B4,[],0,0,0,0,0,AM0,0,Dn,[],0,3,0,0,0,ATn,0,Nz,[],0,3,0,0,0,YI,0,EJ,[],0,0,0,0,0,AEM,0,ER,[],0,0,0,0,0,WY,0,C,[],1,3,0,0,0,V3,0,C,[],0,3,0,0,0,VA,0,C,[B_],0,3,0,VC,0,BP,0,C,[],1,3,0,J2,0,PR,0,BP,[],0,3,0,0,0,AG0,0,C,[],0,3,0,0,0,Ug,0,BP,[],0,0,0,0,0,AR4,0,C,[],0,3,0,0,0,ES,0,BP,[],0,3,0,0,0,Ia,0,ES,[],0,3,0,0,0,H6,0,ES,[],0,3,0,0,0,JP,0,C,[],3,3,0,0,0,AB3,
0,C,[JP],0,3,0,0,0,Uj,0,BP,[],0,0,0,0,0,APJ,0,C,[GC],0,3,0,0,0,Uf,0,BP,[],0,0,0,0,0,GW,0,BP,[],0,3,0,0,0,Ue,0,BP,[],0,0,0,0,0,Ud,0,BP,[],0,0,0,0,0,ALP,0,C,[],4,3,0,0,0,XC,0,Dw,[],0,0,0,0,0,Ju,0,C,[],3,3,0,0,0,Z,"Vector2",17,C,[B_,Ju],0,3,0,0,["T",P(ABl),"cO",N(ADV)],Tq,0,BP,[],0,0,0,0,0,Ga,0,BP,[],0,3,0,0,0,AJP,0,C,[],0,3,0,0,0,Ul,0,BP,[],0,0,0,0,0,NU,0,Ga,[],0,3,0,0,0,AFf,0,C,[BB],0,3,0,0,0,HN,0,BH,[],12,3,0,0,0,ST,0,C,[],0,3,0,Sn,0,Hh,0,BP,[],0,3,0,0,0,Sa,0,Hh,[],0,3,0,0,0,Tm,0,BP,[],0,0,0,0,0,Tc,0,C,[B_],
4,3,0,0,0,Uc,0,BP,[],0,0,0,0,0,Go,0,C,[B_,Ju],0,3,0,0,0,Pc,0,GW,[],0,3,0,0,0]);
Dg([RO,0,BP,[],0,3,0,0,0,ABN,0,C,[],0,3,0,0,0,ATI,0,C,[GC],0,3,0,0,0,Uh,0,BP,[],0,0,0,0,0,VU,0,BP,[],0,3,0,0,0,Tr,0,BP,[],0,0,0,0,0,RM,0,GW,[],0,3,0,0,0,WE,0,C,[B_],0,3,0,Ql,0,KP,0,C,[B_],0,3,0,N9,0,L$,0,C,[B_],0,3,0,MH,0,ACa,0,C,[B_],0,3,0,0,0,Yg,0,C,[B_],0,3,0,0,0,ANe,0,C,[B_,GC],0,3,0,0,0,AGl,0,C,[JP],0,3,0,0,0,TS,0,C,[],4,3,0,GX,0,Vg,0,C,[],4,3,0,Q7,0,ZK,0,C,[],4,3,0,0,0,Q$,0,Hh,[],0,3,0,0,0,LT,0,C,[B_],0,3,0,Ez,0,P3,0,C,[],3,3,0,0,0,MI,0,C,[P3,B_],0,3,0,0,0,Tg,0,MI,[],0,3,0,0,0,Tp,0,BP,[],0,0,0,0,0,Ui,
0,BP,[],0,0,0,0,0,Nh,0,C,[],0,3,0,Jl,0,EH,0,C,[B_],0,3,0,0,0,Ow,0,C,[],0,3,0,0,0,ALa,0,C,[],0,3,0,0,0,Bo,0,C,[B_,Ju],0,3,0,C0,0,AFi,0,C,[B_,GC],0,3,0,0,0,ADd,0,Dw,[],0,0,0,0,0,Mh,0,Ga,[],0,3,0,0,0,ALM,0,C,[JP],0,3,0,0,0,AAb,0,C,[],0,3,0,0,0,AP8,0,C,[B_],0,3,0,0,0,J7,0,C,[B_],0,3,0,0,0,To,0,BP,[],0,0,0,0,0,AQa,0,C,[],0,3,0,0,0,AAk,0,C,[],0,3,0,0,0,AM4,0,C,[],0,3,0,0,0,AP6,0,C,[B_],0,3,0,0,0,AKw,0,C,[],3,3,0,0,0,AFx,0,C,[B_],0,3,0,0,0,ANV,0,C,[],0,0,0,0,0,KI,0,C,[BB],0,3,0,MF,0,It,0,C,[],0,3,0,0,["ca",BT(Px)],GU,
0,It,[],0,3,0,0,["ca",BT(APA)],Rk,0,C,[CR],0,3,0,0,0,AMJ,0,C,[],0,3,0,0,0,BM,0,C,[],0,3,0,0,0]);
Dg([N7,0,C,[CR],1,3,0,0,0,F_,0,N7,[],0,3,0,0,["T",P(AKx)],Bh,"Array",8,C,[DV],0,3,0,0,["cO",N(Sx),"T",P(VB)],Km,0,C,[DV],0,3,0,0,0,AF6,0,Km,[],0,3,0,0,0,ASU,0,C,[DV],0,3,0,0,0,Eb,0,C,[],4,3,0,0,["cO",N(AKF)],ATa,0,C,[],0,3,0,0,0,AHC,0,C,[],0,3,0,0,0,AK9,0,C,[],0,3,0,0,0,AI9,0,C,[],0,3,0,0,0,RX,0,C,[],0,3,0,Ta,0,YB,0,C,[],0,3,0,0,0,AJ1,0,C,[],0,3,0,0,0,AIJ,0,C,[],0,3,0,0,0,AJw,0,C,[],0,3,0,0,0,APH,0,C,[],0,3,0,0,0,AFs,0,C,[],0,3,0,0,0,ARe,0,C,[],0,3,0,0,0,AHd,0,C,[],0,3,0,0,0,AAu,0,C,[],0,3,0,0,0,ABT,0,C,[],
0,3,0,0,0,J6,0,BH,[],12,3,0,0,0,AJ6,0,C,[],0,3,0,0,0,TZ,0,C,[],3,3,0,0,0,DM,0,C,[],0,3,0,0,0,YM,0,DM,[],0,3,0,0,0,YK,0,DM,[],0,3,0,0,0,AH$,0,DM,[],0,3,0,0,0,AC7,0,DM,[],0,3,0,0,0,ANg,0,DM,[],0,3,0,0,0,Mc,0,DM,[],0,3,0,0,0,ACV,0,Mc,[],0,3,0,0,0,H0,0,C,[],3,3,0,0,0,AD7,0,C,[CR,H0],0,3,0,0,0,Fx,0,C,[],3,3,0,0,0,AM2,0,C,[Fx,H0],0,3,0,0,0,ARa,0,C,[Fx],0,3,0,0,0,ABj,0,C,[],0,3,0,0,0,EZ,0,C,[Fx],0,3,0,0,0,ALV,0,EZ,[],0,3,0,0,0,HT,0,EZ,[H0,Fx],1,3,0,0,0,D6,0,HT,[],1,3,0,Rj,0,AMI,0,C,[],0,3,0,0,0,APF,0,D6,[],4,3,0,0,
0,AHr,0,D6,[],4,3,0,0,0,AR0,0,EZ,[],0,3,0,0,0,LC,0,EZ,[],0,3,0,0,0,Yu,0,LC,[],0,3,0,0,0,ACR,0,D6,[],4,3,0,0,0]);
Dg([Hq,0,HT,[],1,3,0,0,0,AI3,0,Hq,[],4,3,0,0,0,AHo,0,D6,[],4,3,0,0,0,AJz,0,D6,[],4,3,0,0,0,AI0,0,Hq,[],4,3,0,0,0,HR,0,BH,[],12,3,0,0,0,Gd,0,C,[CR,Fx,H0],1,3,0,0,0,M$,0,Gd,[Fx],1,3,0,0,0,W7,0,M$,[Fx],0,3,0,0,0,H7,0,BH,[],12,3,0,0,0,C$,0,Gd,[],1,3,0,0,0,Iv,0,C$,[],1,3,0,0,0,AA7,0,C,[],0,3,0,0,0,G5,0,C$,[],1,3,0,UK,0,EN,0,G5,[],1,3,0,0,0,Gj,0,EN,[],1,3,0,0,0,AD3,0,Gj,[],0,3,0,0,0,H5,0,C$,[],1,3,0,0,0,ATQ,0,H5,[],0,3,0,0,0,APC,0,C$,[],0,3,0,0,0,FP,0,C$,[],1,3,0,0,0,YE,0,FP,[],0,3,0,0,0,HC,0,C$,[],1,3,0,0,0,ADU,
0,EN,[],0,3,0,0,0,AGh,0,EN,[],0,3,0,0,0,K2,0,C$,[],1,3,0,0,0,ALW,0,K2,[],0,3,0,0,0,Z0,0,FP,[],0,3,0,0,0,AHA,0,Gj,[],0,3,0,0,0,ALN,0,C$,[],0,3,0,0,0,AJK,0,FP,[],0,3,0,0,0,AL2,0,C$,[],0,3,0,0,0,ANP,0,G5,[],0,3,0,0,0,AGo,0,Dw,[],0,0,0,0,0,AAG,0,Dw,[],0,0,0,0,0,AAY,0,EN,[],0,3,0,0,0,AMv,0,HC,[],0,3,0,0,0,AR2,0,Iv,[],0,3,0,0,0,AKG,0,Iv,[],0,3,0,0,0,ANz,0,HC,[],0,3,0,0,0,AIw,0,Gj,[],0,3,0,0,0,ASJ,0,H5,[],0,3,0,0,0,EX,0,Gd,[],1,3,0,0,0,AI8,0,EX,[],0,3,0,0,0,FV,0,C,[],1,3,0,0,0,AMW,0,FV,[],0,3,0,0,0,AOh,0,EX,[],0,3,
0,0,0,APB,0,EX,[],0,3,0,0,0,AQD,0,FV,[],0,3,0,0,0,ADB,0,EX,[],0,3,0,0,0]);
Dg([API,0,FV,[],0,3,0,0,0,KF,0,C,[],3,3,0,0,0,Ol,0,C,[],3,3,0,0,0,BD,"Class",25,C,[KF,Ol],0,3,0,0,["T",P(AIY)],AB0,0,C,[],4,0,0,0,0,AAN,0,C,[],4,3,0,0,0,DE,0,C,[],0,3,0,0,["c5",P(AOx)],BG,0,DE,[],0,3,0,0,0,BA,"RuntimeException",25,BG,[],0,3,0,0,0,AHj,"ClassCastException",25,BA,[],0,3,0,0,0,Kd,0,C,[],3,3,0,0,0,I,"String",25,C,[B_,Dz,Kd],0,3,0,0,["T",P(Cp),"cO",N(ARq),"cU",P(ALp)],EM,0,C,[B_],1,3,0,0,0,FN,0,EM,[Dz],0,3,0,0,0,Be,0,C,[B_,Kd],0,0,0,0,["c$",N(IP),"T",P(MC)],Je,0,C,[],3,3,0,0,0,K,0,Be,[Je],0,3,0,0,
["gx",BT(AH0),"jJ",Bf(ACU),"T",P(Et),"c$",N(AIn),"de",Bs(AJe)],RA,0,C,[],0,3,0,0,0,Qe,0,C,[],3,3,0,0,0,L3,0,C,[Qe,GY],0,3,0,0,0,VY,0,C,[],3,3,0,0,0,MN,0,C,[VY],1,3,0,0,0,Qg,0,MN,[],0,3,0,0,0,AOu,0,C,[],4,3,0,0,0,Im,0,BH,[],12,3,0,0,0,OL,0,C,[],3,3,0,0,0,Cz,0,C,[],3,3,0,0,0,RW,0,C,[Cz],3,3,0,0,0,JI,0,C,[OL,RW],0,3,0,Fh,["jK",N(AMo)],AL5,0,C,[],0,3,0,0,0,Ro,0,C,[],0,3,0,CE,0,Gc,0,EM,[Dz],0,3,0,0,0,G6,0,C,[],0,3,0,0,0,AGr,0,C,[],4,3,0,0,0,D3,"GlyphLayout$GlyphRun",16,C,[BB],0,3,0,0,0,F5,0,C,[],0,3,0,0,0,Mu,0,C,
[],3,3,0,0,0,K_,0,C,[Mu],1,3,0,0,0,Fs,0,C,[],3,3,0,0,0,Jm,0,K_,[Fs,B_],0,3,0,0,0,Iy,"Comparator",21,C,[],3,3,0,0,0,NX,0,C,[Iy],0,3,0,0,0,M2,0,C,[Dz],0,3,0,0,0,ACH,0,C,[],0,3,0,0,0,AMC,0,C,[],4,3,0,0,0,N_,0,C,[],3,3,0,0,0,Pg,0,C,[N_],0,3,0,0,0,AB7,0,C,[],0,3,0,0,0,AE1,0,C,[],0,3,0,0,0,TM,0,C,[],3,3,0,0,0]);
Dg([KU,0,C,[TM],0,3,0,ET,0,OF,0,C,[],0,3,0,0,0,DW,0,C,[],0,3,0,0,["g3",N(AJO)],Tu,0,C,[],3,3,0,0,0,EK,0,C,[Cz],3,3,0,0,0,Mw,0,C,[Tu,EK],0,3,0,0,["jL",N(Yz)],SP,0,C,[],3,3,0,0,0,UE,0,C,[SP],0,3,0,0,0,TW,0,C,[TZ],0,3,0,0,0,TN,0,C,[],3,3,0,0,0,Rx,0,C,[TN],0,3,0,0,0,PY,0,C,[],3,3,0,0,0,TR,0,C,[PY],0,3,0,0,0,AKN,0,C,[],0,3,0,0,0,UI,0,C,[],3,3,0,0,0,TX,0,C,[UI],3,3,0,0,0,QW,0,C,[TX],0,3,0,0,0,Kx,0,C,[EK],0,0,0,0,["jL",N(ANn)],Ky,0,C,[EK],0,0,0,0,["jL",N(ASm)],Bl,"IllegalArgumentException",25,BA,[],0,3,0,0,0,AQj,0,
C,[],4,3,0,0,0,Z2,0,C,[DV],0,3,0,0,0,AIs,0,EM,[Dz],0,3,0,0,0,AHZ,0,C,[Cz],1,3,0,0,0,Mn,0,C,[],3,3,0,0,0,Hi,"TeaGL20",5,C,[Mn],0,3,0,0,["ir",Bs(AFE),"iB",Bs(ASe),"cB",Bs(AA9),"hf",BT(AEI),"eB",BT(Lx),"eC",BT(Lw),"hw",N(APR),"hv",BT(ABn),"ip",N(AGJ),"ik",P(AS0),"im",N(AMr),"g_",N(APS),"bb",N(AL9),"iE",N(AKA),"h4",Bf(ABZ),"h5",BT(AHy),"h9",BT(AJ5),"W",N(ARR),"iC",N(AQz),"i5",N(Xb),"eD",BT(KN),"eE",BT(Me),"iw",Bs(ADq),"cm",Bs(JE),"g$",N(ASR),"eF",Bf(MG),"iq",N(AIh),"eG",Bf(Ld),"dW",N(AEn),"it",Bs(AEh),"is",N(Zz),
"cx",Bs(ABY),"io",Bs(Xa),"cA",function(b,c,d,e,f,g,h,i,j){MR(this,b,c,d,e,f,g,h,i,j);},"cH",Bf(AJa),"ch",Bf(ALD),"hm",Bs(AL8),"hc",N(ZB),"iD",function(b,c,d,e,f,g){AIL(this,b,c,d,e,f,g);},"dE",BT(Xz)],SO,0,C,[Mn],3,3,0,0,0,Ki,"TeaGL30",5,Hi,[SO],0,3,0,0,["iI",N(AE8),"h6",BT(AKr),"h8",function(b,c,d,e,f){ATA(this,b,c,d,e,f);},"iG",Bs(AK4),"cm",Bs(AHG)],Ph,"TeaGL30Debug",5,Ki,[],0,3,0,0,["iI",N(ADy),"h6",BT(AAi),"h8",function(b,c,d,e,f){AR7(this,b,c,d,e,f);},"iG",Bs(Zn),"cB",Bs(AAa),"hw",N(APW),"hv",BT(AJf),"g_",
N(Zk),"bb",N(AQC),"h4",Bf(ACM),"h5",BT(AME),"W",N(AOm),"dW",N(WX),"cx",Bs(X_),"cA",function(b,c,d,e,f,g,h,i,j){AJM(this,b,c,d,e,f,g,h,i,j);},"cH",Bf(ACv),"dE",BT(AEX),"ir",Bs(AIo),"iB",Bs(ARs),"hf",BT(ADA),"eB",BT(AJr),"eC",BT(ARj),"ip",N(AKV),"ik",P(ASZ),"im",N(AMZ),"iE",N(ASO),"h9",BT(ZR),"iC",N(AM6),"i5",N(AP2),"eD",BT(AGp),"eE",BT(APT),"iw",Bs(AKb),"cm",Bs(ADJ),"eF",Bf(ABq),"g$",N(X9),"eG",Bf(ASX),"iq",N(Y3),"it",Bs(Ya),"is",N(ARX),"io",Bs(X7),"ch",Bf(Zy),"hm",Bs(AAF),"hc",N(ATF),"iD",function(b,c,d,e,f,
g){ANT(this,b,c,d,e,f,g);}],QL,0,C,[],0,3,0,0,0,Fb,0,BH,[],12,3,0,0,0,T6,0,C,[Cz],3,3,0,0,0,MW,0,C,[T6],0,0,0,0,["jM",P(ACE)],VV,"TeaGL20Debug",5,Hi,[],0,3,0,0,["cB",Bs(ASu),"hw",N(ABx),"hv",BT(ACt),"g_",N(AJp),"bb",N(ATe),"h4",Bf(AGH),"h5",BT(ASG),"W",N(ZU),"dW",N(AH5),"cx",Bs(AK0),"cA",function(b,c,d,e,f,g,h,i,j){ADK(this,b,c,d,e,f,g,h,i,j);},"cH",Bf(AC1),"dE",BT(ASS),"ir",Bs(X4),"iB",Bs(WT),"hf",BT(WR),"eB",BT(AHx),"eC",BT(AE_),"ip",N(ATq),"ik",P(ALv),"im",N(AS5),"iE",N(ALo),"h9",BT(AFt),"iC",N(ATf),"i5",
N(AKn),"eD",BT(AHB),"eE",BT(AAg),"iw",Bs(AFF),"cm",Bs(XE),"eF",Bf(ADQ),"g$",N(ADY),"eG",Bf(Yi),"iq",N(AN0),"it",Bs(AQi),"is",N(AIS),"io",Bs(ASE),"ch",Bf(AP_),"hm",Bs(ASY),"hc",N(Yk),"iD",function(b,c,d,e,f,g){ABc(this,b,c,d,e,f,g);}],T_,0,C,[DV],0,3,0,0,0,Sq,0,C,[],0,3,0,0,0,UY,0,C,[Cz],3,3,0,0,0,Mq,0,C,[UY],0,0,0,0,["jN",P(XW),"jO",P(AB_),"jP",P(Xv)],Wd,0,C,[],3,3,0,0,0,Wm,0,C,[Wd],0,3,0,0,0,OG,0,DW,[],0,0,0,0,0,UU,"CloneNotSupportedException",25,BG,[],0,3,0,0,0,CJ,0,Dw,[],0,3,0,0,0,H,"IndexOutOfBoundsException",
25,BA,[],0,3,0,0,0,Fl,0,C,[Cz],3,3,0,0,0,Qn,0,C,[Fl],3,3,0,0,0,R3,0,C,[Fl],3,3,0,0,0,RR,0,C,[Fl],3,3,0,0,0,Tn,0,C,[Fl],3,3,0,0,0,V_,0,C,[Fl],3,3,0,0,0]);
Dg([Uk,0,C,[Fl,Qn,R3,RR,Tn,V_],3,3,0,0,0,P1,0,C,[],3,3,0,0,0,Lb,0,C,[Cz],3,3,0,0,0,O3,0,C,[Cz,Uk,P1,Lb],1,3,0,0,["jQ",N(ALY),"jR",Bs(APz),"jS",Bs(AOO),"jT",Bf(ALK),"jU",N(ARI),"jV",P(ABd),"jW",Bf(Xu)],L1,0,C,[],1,3,0,0,0,J_,0,L1,[Mu,Fs,B_],0,3,0,0,0,M9,0,J_,[],0,3,0,0,0,AFV,0,C,[],0,3,0,0,0,G2,0,BH,[],12,3,0,0,0,DY,0,C,[Cz],1,3,0,0,0,ACZ,0,DY,[],1,3,0,0,0,ACb,0,DY,[],1,3,0,0,0,AHH,0,DY,[],1,3,0,0,0,AKX,0,DY,[],1,3,0,0,0,AGc,0,DY,[],1,3,0,0,0,LH,0,C,[EK],0,0,0,0,["jL",N(AG_)],LI,0,C,[EK],0,0,0,0,["jL",N(ASH)],LG,
0,C,[EK],0,0,0,0,["jL",N(AMR)],Sz,0,Dw,[],0,3,0,0,0,U6,0,C,[Cz],3,3,0,0,0,KH,0,C,[U6],0,0,0,0,["jX",P(ADi)],ABX,0,DY,[],1,3,0,0,0,RL,0,C,[B_],4,3,0,0,0,NE,0,C,[],3,3,0,0,0,SQ,0,C,[NE],4,3,0,0,0,AAp,0,C,[],4,3,0,0,0,K9,0,C,[],4,3,0,0,0,B$,"ReflectionException",9,BG,[],0,3,0,0,0,E0,0,C,[],4,3,0,BE,0,Rp,0,C,[],3,3,0,0,0,KE,0,C,[Rp],0,0,0,0,0,Ib,"Iterator",21,C,[],3,3,0,0,0,KD,0,C,[Ib],0,0,0,0,0,Uz,0,C,[NE],0,0,0,0,0,CC,"NumberFormatException",25,Bl,[],0,3,0,0,0,K0,0,BA,[],0,3,0,0,0,EO,0,BG,[],0,3,0,0,0,HJ,"NoSuchMethodException",
25,EO,[],0,3,0,0,0,Ds,"NullPointerException",25,BA,[],0,3,0,0,0,Cf,0,C,[],1,0,0,0,["fB",Bf(ACz),"f5",BT(AFu),"fo",P(AAE),"T",P(AOc),"e9",N(AQS),"fn",N(AQQ),"fL",P(ASw),"e5",P(IE)],M5,0,C,[KF],0,3,0,0,0,ASg,0,C,[Cz],1,3,0,0,0,AEA,0,C,[Cz],1,3,0,0,0,AT1,0,C,[Cz],1,3,0,0,0,Le,0,C,[Cz],3,3,0,0,0,MA,0,C,[Le],0,3,0,0,["jY",N(AQ0)],AF$,0,C,[Cz],1,3,0,0,0,Mz,0,C,[Le],0,3,0,0,["jY",N(Y9)],Oe,0,C,[],3,3,0,0,0,HV,0,C,[Oe,Fs],0,0,0,0,0]);
Dg([I3,0,HV,[],0,0,0,0,0,DG,0,Cf,[],0,0,0,Ef,["fJ",Bf(Zx),"fK",P(AF5),"gj",N(AAd)],TB,0,C,[],0,0,0,0,0,Cn,"PatternSyntaxException",22,Bl,[],0,3,0,0,["c5",P(ASo)],ZF,0,C,[],0,3,0,0,0,KZ,0,C,[DV],3,3,0,0,0,Ml,0,C,[KZ],1,3,0,0,0,Sm,0,C,[KZ],3,3,0,0,0,OE,0,C,[Sm],3,3,0,0,0,K1,0,Ml,[OE],1,3,0,0,0,TT,0,C,[],3,3,0,0,0,KY,0,K1,[Fs,B_,TT],0,3,0,0,0,Sh,0,DG,[],0,0,0,0,["fJ",Bf(Yh),"fK",P(ACd),"gj",N(AOI)],Wn,0,DG,[],0,0,0,0,["fJ",Bf(ABP),"fK",P(AHk)],QE,0,DG,[],0,0,0,0,["fJ",Bf(AAB),"fK",P(AQJ)],S0,0,DG,[],0,0,0,0,["fJ",
Bf(YG),"fK",P(APi),"gj",N(AMs)],GV,0,DG,[],0,0,0,0,["fJ",Bf(ARk),"fK",P(AAW)],CF,0,Cf,[],1,0,0,0,["fJ",Bf(ATr),"f2",P(APY),"gj",N(AHb)],Ft,0,CF,[],0,0,0,0,["f3",Bs(AO6),"fB",Bf(ADX),"f5",BT(ABw),"fK",P(AF7),"gj",N(Yy)],Cr,0,Cf,[],0,0,0,0,["fJ",Bf(AFw),"e9",N(AMj),"fK",P(AHu),"fn",N(AIQ),"gj",N(ANs),"e5",P(ABo)],Kg,0,Cr,[],0,0,0,0,["fJ",Bf(ALU),"fK",P(AI6),"gj",N(AN6)],EG,0,Kg,[],0,0,0,0,["fJ",Bf(ACG),"e9",N(ANB),"fK",P(Ys)],Os,0,EG,[],0,0,0,0,["fJ",Bf(AL_),"gj",N(AQV),"fK",P(ASs)],Vm,0,EG,[],0,0,0,0,["fJ",Bf(Z4),
"gj",N(AQc),"fK",P(AFe)],RP,0,EG,[],0,0,0,0,["fJ",Bf(ABf),"gj",N(AT3),"fK",P(ALn)],Tl,0,EG,[],0,0,0,0,["fJ",Bf(Xq),"gj",N(AOo),"fK",P(AAC)],GG,0,Cr,[],0,0,0,0,["fJ",Bf(XY),"fB",Bf(AJg),"f5",BT(AOP),"fn",N(AIG),"fL",P(AMl),"e5",P(ASF)],AKE,0,C,[],4,3,0,0,0,J8,"ArrayStoreException",25,BA,[],0,3,0,0,0,H_,0,C,[],1,0,0,0,0,Bq,0,H_,[],1,0,0,0,["gd",P(Z7),"f8",P(Y2),"fy",P(APN),"fx",P(ASq)],KB,"MissingResourceException",21,BA,[],0,3,0,0,0,CN,0,Bq,[],0,0,0,0,["gg",N(ABC),"gd",P(ATY),"f8",P(ADG),"fy",P(AQH),"T",P(AKO),
"fx",P(AD$)],EU,0,Cf,[],1,0,0,0,["fn",N(AOR),"gj",N(ARf),"e5",P(AJX)],DP,0,EU,[],0,0,0,0,["fJ",Bf(Xs),"fK",P(ABk)],FE,0,DP,[],0,0,0,0,["fJ",Bf(ZA),"fK",P(Z_)],DS,0,EU,[],0,0,0,0,["fJ",Bf(XV),"fK",P(AGF)],FB,0,DP,[],0,0,0,0,["fJ",Bf(AJn),"e9",N(AT8)],Vz,0,DP,[],0,0,0,0,["fJ",Bf(ATb),"fB",Bf(AKD)],NF,0,C,[],4,0,0,0,0,Bx,0,C,[],1,0,0,0,0,OP,0,H_,[Fs],0,0,0,0,["T",P(ML)],Pv,0,Cf,[],0,0,0,0,["fJ",Bf(AHR),"fK",P(AL6),"gj",N(AMi)],Bn,0,C,[Fs,B_],0,3,0,0,0,Oy,0,Cr,[],0,0,0,0,["fK",P(AMu)],HI,0,Cr,[],0,0,0,0,["fJ",Bf(Zp),
"e9",N(ALR),"fK",P(AMX),"gj",N(AAK),"fn",N(Z6)],D7,0,Cr,[],0,0,0,0,["fJ",Bf(ADu),"fK",P(ASf),"gg",N(AEt),"fn",N(Ze),"e9",N(APD),"gj",N(ADM)],Kv,0,D7,[],0,0,0,0,["gg",N(AHc),"fK",P(ASM)],K6,0,CF,[],0,0,0,0,["f3",Bs(AHU),"fK",P(AAn)],Ev,0,CF,[],0,0,0,0,["f3",Bs(WS),"fK",P(AIa),"fn",N(AMk)]]);
Dg([IU,0,Cr,[],0,0,0,0,["e9",N(AJm),"fK",P(AOr),"fJ",Bf(Xd),"fn",N(AAw),"gj",N(AQL)],Er,0,CF,[],0,0,0,0,["f2",P(AHv),"f3",Bs(AFS),"fB",Bf(ADn),"f5",BT(AHF),"fK",P(AQ5),"fn",N(AQA)],NK,0,CF,[],0,0,0,0,["f3",Bs(W2),"fK",P(ALO)],Ks,0,CF,[],0,0,0,0,["f3",Bs(XL),"fK",P(AGd)],FL,0,Cr,[],0,0,0,0,["e9",N(ASA),"fJ",Bf(ALS),"fK",P(ALw),"fn",N(AHW),"gj",N(ANE)],We,0,FL,[],0,0,0,0,0,TK,0,FL,[],0,0,0,0,0,WK,0,DS,[],0,0,0,0,["fJ",Bf(ABW)],QA,0,DS,[],0,0,0,0,["fJ",Bf(AKp)],Hg,0,DS,[],0,0,0,0,["fJ",Bf(APw),"e9",N(ARu)],Qk,
0,Hg,[],0,0,0,0,["fJ",Bf(AHD),"e9",N(AK1)],Gw,0,DS,[],0,0,0,0,["fJ",Bf(ATS),"fK",P(ARE)],OS,0,Gw,[],0,0,0,0,["fJ",Bf(AGG)],R$,0,DS,[],0,0,0,0,["fJ",Bf(ASQ)],Ri,0,Hg,[],0,0,0,0,["fJ",Bf(AAM)],Up,0,Gw,[],0,0,0,0,["fJ",Bf(YQ)],R_,0,EU,[],0,0,0,0,["fJ",Bf(ATv),"fB",Bf(APP),"fK",P(AM5)],PE,0,EU,[],0,0,0,0,["fJ",Bf(AMm),"fB",Bf(Xl),"fK",P(AOA)],H1,0,C,[],1,0,0,0,0,WM,0,DP,[],0,0,0,0,["fJ",Bf(YV)],Vu,0,FB,[],0,0,0,0,["fJ",Bf(AKi)],Qa,0,FE,[],0,0,0,0,["fJ",Bf(AOT)],Ra,0,DP,[],0,0,0,0,["fJ",Bf(AMc)],TO,0,FB,[],0,0,0,
0,["fJ",Bf(Y7)],RQ,0,FE,[],0,0,0,0,["fJ",Bf(APa)],L0,0,Cf,[],4,0,0,0,["fJ",Bf(AIK),"gj",N(AGW),"fK",P(AKj)],Lo,0,Cf,[],0,0,0,0,["fJ",Bf(Z3),"gj",N(AAr),"fK",P(ATN)],Py,0,Cf,[],0,0,0,0,["fJ",Bf(AHi),"gj",N(ATJ),"fK",P(ZJ)],NI,0,Cf,[],4,0,0,0,["fJ",Bf(ANh),"gj",N(ABH),"fK",P(AJu)],VJ,0,Cf,[],0,0,0,0,["fJ",Bf(ALG),"gj",N(WZ),"fK",P(AFv)],OZ,0,Cf,[],0,0,0,0,["fJ",Bf(ABm),"gj",N(AE0),"fK",P(Zj)],VF,0,Cr,[],0,0,0,0,["fJ",Bf(ASV),"fK",P(ACO),"e9",N(AAz),"fo",P(AK$),"gj",N(AAx)],P6,0,Cr,[],4,0,0,0,["fJ",Bf(ALy),"fK",
P(ABU),"e9",N(AOy),"fo",P(WN),"gj",N(ATo)],Vv,0,Cf,[],4,0,0,0,["fJ",Bf(AH8),"gj",N(AEB),"fK",P(AIX)],S3,0,Cf,[],0,0,0,0,["fJ",Bf(ALE),"gj",N(AEm),"fK",P(Yn)],Op,0,Cf,[],0,0,0,0,["fJ",Bf(AGN),"gj",N(ABM),"fK",P(AE4)],G8,0,Cr,[],0,0,0,0,["fJ",Bf(YZ),"e9",N(ANy),"fK",P(Yv),"gj",N(AN7)],VD,0,G8,[],0,0,0,0,["fJ",Bf(ABV),"fB",Bf(AQT),"f5",BT(Yp),"fn",N(AJ8),"fK",P(ARp)],RJ,0,G8,[],0,0,0,0,["fJ",Bf(AI_),"fK",P(AAs)],Pu,0,Be,[Je],0,3,0,0,["gx",BT(AEa),"jJ",Bf(Z$),"c$",N(AAV),"de",Bs(APU)],Sd,0,CF,[],0,0,0,0,["f3",Bs(ACx),
"fB",Bf(ZV),"f5",BT(AET),"fK",P(AL0),"fn",N(AF4)],Om,0,CF,[],0,0,0,0,["f3",Bs(AJj),"fK",P(AGe)],OV,0,CF,[],0,0,0,0,["f3",Bs(AOV),"fK",P(AQG)],AT9,0,C,[],4,3,0,0,0,Ok,0,CF,[],0,0,0,0,["f3",Bs(AOZ),"fK",P(ATK)],H3,0,Cr,[],0,0,0,0,["e9",N(AL$),"fJ",Bf(Lc),"fB",Bf(AFY),"f5",BT(ACL),"fK",P(AP7),"fn",N(Yd),"gj",N(AQk)],H9,0,Cr,[],0,0,0,0,["e9",N(AAS),"fJ",Bf(Kt),"fB",Bf(AMM),"f5",BT(AOU),"fK",P(AST),"fn",N(ACB),"gj",N(AMY)],EL,0,CF,[],0,0,0,0,["f3",Bs(AN8),"fB",Bf(AKT),"f5",BT(AAQ),"fK",P(ARv),"fn",N(ANK)],JT,0,H1,
[],0,0,0,0,["gz",N(AA4),"gB",Bs(ANU)],JU,0,H1,[],0,0,0,0,["gz",N(APd),"gB",Bs(ASk)]]);
Dg([Un,0,C,[],0,0,0,0,0,JC,0,Bx,[],0,0,0,0,["fS",P(AGq)],I2,0,Bx,[],0,0,0,0,["fS",P(AJb)],T$,0,Bx,[],0,0,0,0,["fS",P(AOF)],UM,0,Bx,[],0,0,0,0,["fS",P(AQl)],UR,0,Bx,[],0,0,0,0,["fS",P(ADv)],Jw,0,Bx,[],0,0,0,0,["fS",P(ABB)],JQ,0,Jw,[],0,0,0,0,["fS",P(AEv)],WD,0,Bx,[],0,0,0,0,["fS",P(AFX)],Ko,0,JQ,[],0,0,0,0,["fS",P(W6)],Sb,0,Ko,[],0,0,0,0,["fS",P(AJZ)],SE,0,Bx,[],0,0,0,0,["fS",P(ACp)],Qw,0,Bx,[],0,0,0,0,["fS",P(AJR)],Qh,0,Bx,[],0,0,0,0,["fS",P(ASp)],UW,0,Bx,[],0,0,0,0,["fS",P(AK6)],WL,0,Bx,[],0,0,0,0,["fS",P(Xf)],Um,
0,Bx,[],0,0,0,0,["fS",P(AGR)],T2,0,Bx,[],0,0,0,0,["fS",P(AOa)],Vl,0,Bx,[],0,0,0,0,["fS",P(ACn)],Pe,0,Bx,[],0,0,0,0,["fS",P(ACW)],OQ,0,Bx,[],0,0,0,0,["fS",P(ASb)],Uu,0,Bx,[],0,0,0,0,["fS",P(W3)],UG,0,Bx,[],0,0,0,0,["fS",P(AIl)],QS,0,Bx,[],0,0,0,0,["fS",P(AC$)],SJ,0,Bx,[],0,0,0,0,["fS",P(AE5)],Wf,0,Bx,[],0,0,0,0,["fS",P(AIq)],UD,0,Bx,[],0,0,0,0,["fS",P(AQN)],RC,0,Bx,[],0,0,0,0,["fS",P(AM_)],QR,0,Bx,[],0,0,0,0,["fS",P(AKW)],WH,0,Bx,[],0,0,0,0,["fS",P(AOt)],IL,0,Bx,[],0,0,0,0,["fS",P(AIP)],Vq,0,IL,[],0,0,0,0,["fS",
P(AKu)],Se,0,JC,[],0,0,0,0,["fS",P(ZS)],QM,0,I2,[],0,0,0,0,["fS",P(AFM)],Bv,0,Bx,[],0,0,0,0,["fS",P(AIT)],QI,0,Bx,[],0,0,0,0,["fS",P(ARY)],L4,0,Bx,[],0,0,0,0,["fS",P(AEe)],L_,0,Bx,[],0,0,0,0,["fS",P(W4)],Eh,"NegativeArraySizeException",25,BA,[],0,3,0,0,0,YJ,0,C,[],0,0,0,0,0,ACC,0,C,[],4,0,0,0,0,AAL,0,C,[],4,3,0,0,0,U0,0,C,[],0,3,0,0,0,IK,0,C,[],0,3,0,0,0,Ng,0,C,[],0,3,0,0,0,AFU,0,C,[],4,3,0,0,0,AOG,0,C,[],4,3,0,0,0,Q5,0,DW,[],0,0,0,0,["g3",N(APQ),"jb",N(ADc),"ja",Bs(AKH)],CW,0,BH,[],9,3,0,IV,0,F2,0,HV,[],0,
0,0,0,0]);
Dg([ATj,0,C,[],3,3,0,0,0,Ua,0,C,[Cz],3,3,0,0,0,QF,0,C,[Ua,Cz],1,3,0,0,["jZ",Bs(AR5),"j0",N(ALh),"j1",Bs(AAT),"j2",Bf(AHI),"j3",Bf(APn)],MS,0,C,[EK],0,0,0,0,["jL",N(AJt)],FK,0,BH,[],12,3,0,0,0,AGL,0,C,[],0,3,0,0,0,R5,0,C,[],3,3,0,0,0,HY,0,M5,[R5],0,3,0,0,["T",P(Zs)],Y,"StringIndexOutOfBoundsException",25,H,[],0,3,0,0,0,Vx,0,Bq,[],0,0,0,0,["gg",N(ADE)],Vw,0,Bq,[],0,0,0,0,["gg",N(XR)],PJ,0,Bq,[],0,0,0,0,["gg",N(AIC),"T",P(AFl)],PQ,0,Bq,[],0,0,0,0,["gg",N(AN$)],PN,0,Bq,[],0,0,0,0,["gg",N(AOY)],PO,0,Bq,[],0,0,0,
0,["gg",N(AJi)],PU,0,Bq,[],0,0,0,0,["gg",N(AC0)],PV,0,Bq,[],0,0,0,0,["gg",N(WQ)],PS,0,Bq,[],0,0,0,0,["gg",N(AFy)],PT,0,Bq,[],0,0,0,0,["gg",N(AJk)],PW,0,Bq,[],0,0,0,0,["gg",N(AQW)],PX,0,Bq,[],0,0,0,0,["gg",N(AB5)],PI,0,Bq,[],0,0,0,0,["gg",N(AT_)],Qc,0,Bq,[],0,0,0,0,["gg",N(AFI)],PG,0,Bq,[],0,0,0,0,["gg",N(AB2)],PH,0,Bq,[],0,0,0,0,["gg",N(AEy)],PM,0,Bq,[],0,0,0,0,["gg",N(AHn)],PF,0,Bq,[],0,0,0,0,["gg",N(AQv)],PK,0,Bq,[],0,0,0,0,["gg",N(AAe)],PL,0,Bq,[],0,0,0,0,["gg",N(AMU)],IX,0,C,[],0,0,0,0,0,GT,0,C,[GY],0,3,
0,0,0,BO,"IllegalStateException",25,BA,[],0,3,0,0,0,I_,"IllegalMonitorStateException",25,BA,[],0,3,0,0,0,AOd,0,C,[],0,3,0,0,0,AEC,0,C,[],4,3,0,0,0,Yb,0,C,[Cz],1,3,0,0,0,Gr,0,C,[],3,3,0,0,0,Wp,0,C,[Gr],0,3,0,0,["c4",P(AQY)],Ve,0,CW,[],12,0,0,0,0,Vf,0,CW,[],12,0,0,0,0,Vj,0,CW,[],12,0,0,0,0,Vk,0,CW,[],12,0,0,0,0,Vh,0,CW,[],12,0,0,0,0,Vi,0,CW,[],12,0,0,0,0,Vc,0,CW,[],12,0,0,0,0,Vd,0,CW,[],12,0,0,0,0,Va,0,CW,[],12,0,0,0,0,OU,0,C,[],3,3,0,0,0,Su,0,C,[OU],0,3,0,0,0,Rg,0,C,[Cz],4,3,0,0,0]);
Dg([R4,0,C,[],3,3,0,0,0,RK,0,C,[R4],0,0,0,0,["e",N(AHQ),"g0",N(ASL)],S6,0,C,[Gr],0,3,0,0,0,OR,0,GG,[],0,0,0,0,["fB",Bf(AEl),"f5",BT(ATR),"fL",P(ABF)],S7,0,Bq,[],0,0,0,0,["gg",N(ARi)],Ov,0,Bq,[],0,0,0,0,["gg",N(ZL)],St,0,Bq,[],0,0,0,0,["gg",N(Y6)],Ss,0,Bq,[],0,0,0,0,["gg",N(AEb)],VR,0,Bq,[],0,0,0,0,["gg",N(AG3)],P7,0,Bq,[],0,0,0,0,["gg",N(ARl)],Pq,0,Bq,[],0,0,0,0,["gg",N(ALZ)],Ru,0,Bq,[],0,0,0,0,["gg",N(AOk)],Or,0,Bq,[],0,0,0,0,["gg",N(ATi)],Ou,0,Bq,[],0,0,0,0,["gg",N(ACI)],Pi,0,Bq,[],0,0,0,0,["gg",N(ARQ)],Qo,
0,Bq,[],0,0,0,0,["gg",N(AJN)],Qt,0,Bq,[],0,0,0,0,["gg",N(ANw)],TA,0,Bq,[],0,0,0,0,["gg",N(AQX)],SR,0,Bq,[],0,0,0,0,["gg",N(ASI)],OH,0,Bq,[],0,0,0,0,["gg",N(ACo)],Ke,0,Bq,[],0,0,0,0,["gg",N(AL4)],Si,0,Ke,[],0,0,0,0,["gg",N(APE)],Y8,0,C,[Ib],0,0,0,0,0,Ho,0,GT,[],0,0,0,0,["c4",P(AMg)],OI,0,C,[],32,0,0,MO,0,Vr,0,C,[Cz,Fl],1,3,0,0,["j4",Bs(AIN),"j5",Bs(AJQ),"j6",Bf(Xt),"j7",N(XH),"j8",Bf(AFC)],Hr,0,C,[Cz],3,3,0,0,0,KA,0,C,[Hr],0,0,0,0,["jL",N(AHa)],AKm,0,C,[],0,3,0,0,0,Cx,"Array$ArrayIterator",8,C,[Ib,DV],0,3,0,
0,0,C7,0,C,[DV],0,3,0,0,0,II,0,C,[],4,3,0,0,0,OK,0,C,[GY],0,0,0,0,0,Wr,0,C,[],3,3,0,0,0,Th,0,C,[Wr],3,3,0,0,0,T9,0,C,[],3,3,0,0,0,HQ,0,C,[Th,T9],1,3,0,0,0,IN,0,HQ,[],0,3,0,0,0,I$,0,IN,[],0,3,0,0,0,HK,0,I$,[],1,3,0,0,0,C3,0,HK,[],0,3,0,0,["j9",N(AHp)],Hp,0,C,[Hr],0,0,0,0,["jL",N(ALm)],ZZ,0,C,[],0,0,0,0,0,Cu,0,HQ,[],0,3,0,0,0,KG,0,C,[Dz],1,3,0,0,0,N1,0,KG,[],0,3,0,0,0,JV,"IllegalCharsetNameException",24,Bl,[],0,3,0,0,0,Lh,0,C,[CR],3,3,0,0,0,Ii,0,C,[Lh],0,3,0,Ig,0,RY,0,C,[],3,3,0,0,0]);
Dg([K7,0,C,[RY],1,3,0,0,0,TP,0,K7,[],0,3,0,0,0,WB,"NoSuchElementException",21,BA,[],0,3,0,0,0,T,"GdxRuntimeException",8,BA,[],0,3,0,0,0,ACF,0,C,[],4,3,0,0,0,ED,0,C,[Gr],0,3,0,0,["c4",P(Zl)],ADT,0,C,[],4,3,0,0,0,Wj,0,C,[],32,0,0,NH,0,ND,"ConcurrentModificationException",21,BA,[],0,3,0,0,0,N5,0,C,[],1,3,0,0,0,S2,0,N5,[],0,3,0,0,0,UB,"ActorValvula",19,Cm,[CR],0,3,0,0,["bQ",Bs(X6),"be",N(ADW)],Po,"ActorValvulaAbierta",19,Cm,[CR],0,3,0,0,["bQ",Bs(AIA),"be",N(AOE)],TL,"ActorSeparador",19,Cm,[CR],0,3,0,0,["bQ",Bs(Zg),
"be",N(ATM)],QH,"ActorCompresor",19,Cm,[CR],0,3,0,0,["bQ",Bs(AIu),"be",N(AMF)],T0,"ActorFondo",19,Cm,[CR],0,3,0,0,["bQ",Bs(ACA)],F0,0,HK,[],0,3,0,0,["j9",N(AE3)],ACS,0,EM,[Dz],0,3,0,0,0,AMp,0,C,[],0,0,0,0,0,ANl,0,C,[],4,3,0,0,0,MX,0,C,[],0,3,0,0,0,Hf,0,BH,[],12,3,0,0,0,JB,0,C,[CR],0,3,0,0,0,NM,0,C,[],1,3,0,0,0,QN,0,NM,[],0,3,0,0,0,HW,0,C,[B_,Dz],0,3,0,0,0,Uo,0,B4,[],0,0,0,0,0,Nu,0,C,[],3,3,0,0,0,Vy,0,C,[],3,3,0,0,0,Ps,0,C,[Gr,Nu,Vy],0,0,0,0,["c4",P(ANm)],Pz,0,C,[DV,Dz],4,3,0,0,0,Mk,0,C,[CR],0,3,0,IA,0,Nl,0,
Bh,[],0,3,0,0,0,Li,0,Bh,[],0,3,0,0,0,UL,0,C,[],0,3,0,0,0,WF,0,C,[],32,0,0,MU,0,JJ,0,C,[CR],3,3,0,0,0,Jk,0,C,[JJ],0,3,0,0,["jl",P(AEZ),"jm",P(ANZ),"hd",Bf(ALq),"h1",Bs(ADN),"h$",Bs(Zu)],KJ,0,C,[CR],3,3,0,0,0,HX,0,C,[KJ],0,3,0,0,["h3",P(AF9),"h7",P(Yc),"g8",Bf(AKZ),"he",N(Zb),"ha",P(ARO),"h_",P(AOg)],P8,0,C,[JJ],0,3,0,0,["jl",P(AA5),"jm",P(ACe),"hd",Bf(Z1),"h1",Bs(AKJ),"h$",Bs(ADO)],Sp,0,C,[KJ],0,3,0,0,["h3",P(ANp),"h7",P(Xj),"g8",Bf(AGQ),"he",N(AQp),"ha",P(AHJ),"h_",P(AAI)],LD,0,C,[JJ],0,3,0,LJ,["jl",P(ZI),"jm",
P(AKP),"hd",Bf(ZW),"h1",Bs(AP3),"h$",Bs(ACY)],Pm,0,Jk,[],0,3,0,0,0,Qy,0,HX,[],0,3,0,0,0,Uq,0,C,[DV],0,3,0,0,0,ANF,0,C,[],4,3,0,0,0,E3,0,C,[],1,3,0,0,0,EC,0,E3,[Dz],1,3,0,0,["cl",N(AMG),"ck",N(ASh)],Hy,0,E3,[Dz],1,3,0,0,0]);
Dg([Hx,0,E3,[Dz],1,3,0,0,0,Fe,0,E3,[Dz],1,3,0,0,["cl",N(AMw),"ck",N(Yq)],HM,0,C,[],4,3,0,0,0,AGC,0,C,[],0,3,0,0,0,Ey,0,C,[],3,3,0,0,0,C4,0,Fe,[Ey],0,0,0,0,["er",P(AT5)],AKc,0,C,[Cz],1,3,0,0,0,Tk,0,C,[],3,3,0,0,0,Lj,0,C,[Tk],0,3,0,0,0,F1,0,C,[CR],0,3,0,GS,0,HP,0,Hx,[],1,0,0,0,0,GB,0,HP,[],0,0,0,0,["iH",N(ALj),"iU",Bs(AI5),"iK",P(W$)],HF,0,EC,[],1,0,0,0,0,Ip,0,HF,[],0,0,0,0,["iV",N(AMV),"iL",Bs(ALB),"iK",P(ALX)],J3,0,BH,[],12,3,0,0,0,IF,0,BH,[],12,3,0,0,0,KL,0,C,[],0,3,0,0,0,Vo,0,KL,[],0,3,0,0,0,Mf,0,C,[CR],0,
3,0,0,0,Io,0,Hy,[],1,0,0,0,0,J9,0,Io,[],0,0,0,0,["i0",N(AEF),"iM",Bs(AHg),"iK",P(ACl)],AK_,0,C,[Cz],1,3,0,0,0,EV,0,BH,[],12,3,0,0,0,Ij,0,BH,[],12,3,0,0,0,Q3,0,C,[Lb],1,3,0,0,["jQ",N(ATt),"j$",P(ABb)],Ie,0,HP,[Ey],1,0,0,0,["iK",P(AIv)],Pl,0,Ie,[],0,0,0,0,["iH",N(AEx),"iU",Bs(W8)],Tb,0,Ie,[],0,0,0,0,["iH",N(AP1),"iU",Bs(Zv)],HH,0,HF,[Ey],1,0,0,0,["iK",P(AMa),"er",P(AND)],O4,0,HH,[],0,0,0,0,["iV",N(AIF),"iL",Bs(ANx)],RD,0,HH,[],0,0,0,0,["iV",N(Xk),"iL",Bs(AIr)],Hv,0,Io,[Ey],1,0,0,0,["iK",P(AF2),"er",P(AOe)],OT,
0,Hv,[],0,0,0,0,["i0",N(AB4),"iM",Bs(AA8)],QK,0,Hv,[],0,0,0,0,["i0",N(AK7),"iM",Bs(AB6)],LK,0,BA,[],0,3,0,0,0,Gg,"ReadOnlyBufferException",23,LK,[],0,3,0,0,0,Ny,"BufferUnderflowException",23,BA,[],0,3,0,0,0,Gi,0,BH,[],12,3,0,0,0,E5,0,BH,[],12,3,0,0,0,ADg,0,C,[],4,3,0,0,0,Jv,0,BH,[],12,0,0,0,0,DL,0,BH,[],12,3,0,0,0,ANf,0,C,[Gr,Nu],3,0,0,0,0,IW,0,BH,[],12,3,0,0,0,AMd,0,C,[],0,3,0,0,0,Tw,0,C,[],32,0,0,LS,0,Jd,"BufferOverflowException",23,BA,[],0,3,0,0,0,QU,"ActorGas",19,Cm,[CR],0,3,0,0,["bQ",Bs(AM$),"be",N(AOL)],US,
0,C,[],0,3,0,NT,0,ADk,0,C,[],0,3,0,0,0]);
Dg([Ne,0,C,[Hr],0,0,0,0,["jL",N(AGg)],Oh,"VerificaAccion",19,BQ,[],0,3,0,0,["bx",N(AJ0)],Pk,0,C,[],0,3,0,0,0,JR,0,BH,[],12,3,0,0,0,Od,"Predicate",8,C,[],3,3,0,0,0,UC,0,C,[CR],0,3,0,0,0,MQ,"InstantiationException",25,EO,[],0,3,0,0,0,Kr,"IllegalAccessException",25,EO,[],0,3,0,0,0,OY,0,EO,[],0,3,0,0,0,Qf,0,C,[],3,3,0,0,0,LV,0,C,[Qf],0,3,0,0,0,Hw,0,BH,[],12,3,0,0,0,AEE,0,C,[],4,3,0,0,0,SU,0,C,[],0,3,0,0,0,Jr,0,C,[],1,3,0,NQ,0,Rw,0,Jr,[],0,3,0,0,0,Ix,0,BH,[],12,3,0,0,0,So,0,C,[Je,Kd],0,3,0,0,0,Q6,0,DW,[],0,0,0,0,
0,Qj,0,C,[],3,3,0,0,0,RB,0,C,[Qj],0,3,0,0,0,Vs,0,C,[Lh],3,3,0,0,0,Hz,0,C,[],0,0,0,Nc,["jq",P(ADl),"jF",P(AHN),"jE",P(AK8),"js",N(AHV),"jp",P(AH6)],EP,0,C,[],1,0,0,0,0,HZ,0,EP,[],1,0,0,0,0,R8,0,HZ,[],0,0,0,0,0,TD,0,Hz,[],0,0,0,0,["jq",P(ASt),"jF",P(AT6),"jE",P(AL7),"jp",P(LU),"js",N(Oj)],SC,0,HZ,[],0,0,0,0,0,R6,0,EP,[],0,0,0,0,0,T5,0,EP,[],0,0,0,0,0,RZ,0,EP,[],0,0,0,0,0,Mt,0,C,[],0,3,0,0,0,Q4,0,DW,[],0,0,0,0,["g3",N(ZH),"jb",N(Xr),"ja",Bs(AJv)],OO,0,C,[],32,0,0,Ns,0,AR1,0,C,[],0,3,0,0,0,Gk,0,GT,[],0,0,0,0,["c4",
P(AAX)],OM,0,DW,[],0,0,0,0,["g3",N(AA1),"jb",N(AKg),"ja",Bs(Zq)],X3,0,C,[],0,0,0,0,0,ON,0,DW,[],0,0,0,0,["g3",N(AEP),"jb",N(X5),"ja",Bs(AFH)],KS,0,C,[Hr],0,0,0,0,["jL",N(ASB)],ABv,0,C,[],0,3,0,0,0,Lm,0,C,[EK],0,0,0,0,["jL",N(ADF)]]);
let AYM=En(Cl),AYI=En(KX),AYJ=En(AYh),AYK=En(AYi),AYL=En(BV),AYH=En(AJ_),AYN=En(CL);AVt(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
"Unable to create new instance: ","enabled","disabled","childrenOnly","Actor: ","object cannot be null.","The event target cannot be null.","ZIndex cannot be < 0.","begin must be called first.","autoShapeType must be enabled.","|  ","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Action",", ","none","all","table","cell","actor","(",",",")","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","texture cannot be null.","This TextureData implementation does not upload data itself",
"Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","index can\'t be > size: "," > ","[]","","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","false","true","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for integer type","The value is too big for int type: ","Illegal radix: ",
"java.runtime.name","userAgent","os.name","Windows","OS X","no OS",".html","index.html","index-debug.html","assets/","assets.txt","Loading asset : ","gdx.wasm.js","0","LOAD_ASSETS","APP_CREATE","APP_LOOP","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Unsupported asset type ","Loading script : ","px","mousedown","mouseup","mousemove","wheel","touchstart","CSS1Compat","touchmove",
"touchcancel","touchend","keydown","keypress","keyup","hidden","capacity must be >= 0: ","The required capacity is too large: ","The value is too big for long type","The value is too big for long type: ","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","Invalid version string: ","\\.","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop",
"Applet","WebGL","iOS","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","object","function","string","number","undefined","fSet","\\Q","\\E","\\\\E\\Q",
"Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter",
"javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar",
"Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators",
"MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals",
"IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms",
"ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:",
"UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary",
"Directory","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","main","Script loaded: ","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","XNVCerrada.png","XNVAbierta.png","Separador.png","CGN.png",
"VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","begin must be called before end.","data must be a ByteBuffer or FloatBuffer",
"No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","The last short in src ","Index ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest",
"MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER",
"source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","sphere-23.png","Asset loaded: ","Logical","Pixels","Call end() before beginning a new shape batch.","Must call begin(ShapeType.",").",") or begin(ShapeType.","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n",
"void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *","uniform sampler2D u_sampler","Point","Line","Filled","POINTY","SMOOTH","The texture region is null. Please set a texture region first (e.g. in the constructor or by calling setTextureRegion(TextureRegion region))",
"data:",";base64,","error"]);
I.prototype.toString=function(){return Bz(this);};
I.prototype.valueOf=I.prototype.toString;C.prototype.toString=function(){return Bz(P0(this));};
C.prototype.__teavm_class__=function(){return AVa(this);};
ARZ.main=AWo(AG2);
ARZ.main.javaException=AVY;
let Bt=Symbol('jsoClass');
(function(){var c;c=JI.prototype;c[Bt]=true;c.onAnimationFrame=c.jK;c=Mw.prototype;c[Bt]=true;c.handleEvent=c.jL;c=Kx.prototype;c[Bt]=true;c.handleEvent=c.jL;c=Ky.prototype;c[Bt]=true;c.handleEvent=c.jL;c=MW.prototype;c[Bt]=true;c.fullscreenChanged=c.jM;c=Mq.prototype;c[Bt]=true;c.denied=c.jP;c.prompt=c.jO;c.granted=c.jN;c=O3.prototype;c.removeEventListener=c.jT;c.dispatchEvent=c.jU;c.get=c.jQ;c.addEventListener=c.jW;Object.defineProperty(c,"length",{get:c.jV});c=LH.prototype;c[Bt]=true;c.handleEvent=c.jL;c
=LI.prototype;c[Bt]=true;c.handleEvent=c.jL;c=LG.prototype;c[Bt]=true;c.handleEvent=c.jL;c=KH.prototype;c[Bt]=true;c.unlockFunction=c.jX;c=MA.prototype;c[Bt]=true;c.accept=c.jY;c=Mz.prototype;c[Bt]=true;c.accept=c.jY;c=QF.prototype;c.removeEventListener=c.j3;c.dispatchEvent=c.j0;c.addEventListener=c.j2;c=MS.prototype;c[Bt]=true;c.handleEvent=c.jL;c=Rg.prototype;c[Bt]=true;c=Vr.prototype;c.removeEventListener=c.j6;c.dispatchEvent=c.j7;c.addEventListener=c.j8;c=KA.prototype;c[Bt]=true;c.handleEvent=c.jL;c=Hp.prototype;c[Bt]
=true;c.handleEvent=c.jL;c=Q3.prototype;c.get=c.jQ;Object.defineProperty(c,"length",{get:c.j$});c=Ne.prototype;c[Bt]=true;c.handleEvent=c.jL;c=KS.prototype;c[Bt]=true;c.handleEvent=c.jL;c=Lm.prototype;c[Bt]=true;c.handleEvent=c.jL;})();
}));
