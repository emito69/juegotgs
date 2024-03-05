"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(ARF){let AXZ=2463534242,E0=()=>{let x=AXZ;x^=x<<13;x^=x>>>17;x^=x<<5;AXZ=x;return x;},P=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bs=f=>function(p1,p2){return f(this,p1,p2);},Bd=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BS=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AWG=f=>function(){let args=Array.prototype.slice.apply(arguments);AX0(function(){f.apply(this,args);});},AV7=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=Q(FM(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=U(args[i]);}AX0(()=>{f.call(null,javaArgs);},callback);},BQ=target=>target.$clinit=()=>{},AUS=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},F=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=FM();}return function(){superclass.call(this);};},M=cls=>AWp(cls),FM=()=>C,W4=()=>{{return ATS();}},J$=t=>{{return AMT(t);}};let AX1=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AX2=(name,binaryName)=>{let cls
=AX1();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Ci=AX2("boolean","Z"),KG=AX2("char","C"),AX3=AX2("byte","B"),AX4=AX2("short","S"),BV=AX2("int","I"),AJT=AX2("long","J"),CD=AX2("float","F"),ADb=AX2("double","D"),Bo=AX2("void","V");let AX5=new ArrayBuffer(16),AX6=new DataView(AX5),AX7=new Float32Array(AX5),AX8=new Float64Array(AX5),AX9=new Int32Array(AX5),
AXL;if(typeof BigInt!=='function'){AXL=n=>{AX6.setFloat64(0,n,true);return new AX$(AX6.getInt32(0,true),AX6.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AXL=n=>{AX6.setFloat64(0,n,true);let lo=AX6.getInt32(0,true),hi=AX6.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AX_=new BigInt64Array(AX5);AXL=n=>{AX8[0]=n;return AX_[0];};}let Ge=n=>{AX7[0]=n;return AX9[0];},Lf=n=>{AX9[0]=n;return AX7[0];},BU=(a,b)=>a>b?1:a<b? -1:a===b?0:1,Dl
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},D6=(a,b)=>(a>>>0)/(b>>>0)>>>0,AV2=(a,b)=>(a>>>0)%(b>>>0)>>>0,EU=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AX$(lo,hi){this.lo=lo|0;this.hi=hi|0;}AX$.prototype.__teavm_class__=()=>{return "long";};let AYa=a=>(a.hi&0x80000000)===0,AYb=a=>(a.hi&0x80000000)!==0,AYc=1<<18,Ca,E,V,D5,AVO,Bl,AYd;if(typeof BigInt!=="function"){AX$.prototype.toString=function(){let result=[],n=this,
positive=AYa(n);if(!positive){n=AWf(n);}let radix=new AX$(10,0);do {let divRem=AYd(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AX$.prototype.valueOf=function(){return AVO(this);};Ca=new AX$(0,0);V=val=>new AX$(val, -(val<0)|0);D5=val=>val>=0?new AX$(val|0,val/0x100000000|0):AWf(new AX$( -val|0, -val/0x100000000|0));E=(lo,hi)=>new AX$(lo,hi);AVO=val=>0x100000000*val.hi+(val.lo>>>0);Bl=
val=>val.lo;}else {Ca=BigInt(0);E=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));V=val=>BigInt.asIntN(64,BigInt(val|0));D5=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));AVO=val=>Number(val);Bl=val=>Number(BigInt.asIntN(32,val))|0;}let D4,ADm,ACz,AUY,AU3,AC0,AWk,C6,AGl,AYe,Ba,MY,Xv,AWm,AWf,C5,ADl,H3,FB,AVN,Be;if(typeof BigInt!=='function'){D4=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ADm=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;ACz=(a,b)=>{if(a.hi<b.hi)
{return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};AUY=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};AU3=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};AC0=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x
<=y;}return (a.lo&1)<=(b.lo&1);};C6=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return D5(a.lo+b.lo);}else if(AYf.abs(a.hi)<AYc&&AYf.abs(b.hi)<AYc){return D5(AVO(a)+AVO(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AX$(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<
16);};AYe=a=>{let lo=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AX$(lo,hi);};AWf=a=>AYe(new AX$(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));AGl=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return D5(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AX$(lolo&0xFFFF|(lohi&0xFFFF)
<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AWk=(a,b)=>{let r=EU(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Ba=(a,b)=>{let positive=AYb(a)===AYb(b);if(AYb(a)){a=AWf(a);}if(AYb(b)){b=AWf(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)
|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AX$(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:AWf(result);};MY=(a,b)=>{if(AYf.abs(a.hi)<AYc&&AYf.abs(b.hi)<AYc){return D5(AVO(a)/AVO(b));}return (AYd(a,
b))[0];};AWm=(a,b)=>{if(a.hi>=0&&a.hi<AYc&&b.hi>=0&&b.hi<AYc){return D5(AVO(a)/AVO(b));}return (AYg(a,b))[0];};Xv=(a,b)=>{if(AYf.abs(a.hi)<AYc&&AYf.abs(b.hi)<AYc){return D5(AVO(a)%AVO(b));}return (AYd(a,b))[1];};AYd=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AYb(a)===AYb(b);if(AYb(a)){a=AWf(a);}if(AYb(b)){b=AWf(b);}a=new AYh(a.lo,a.hi,0);b=new AYh(b.lo,b.hi,0);let q=AYi(a,b);a=new AX$(a.lo,a.hi);q=new AX$(q.lo,q.hi);return positive?[q,a]:[AWf(q),AWf(a)];};let AYg=(a,b)=>
{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new AYh(a.lo,a.hi,0);b=new AYh(b.lo,b.hi,0);let q=AYi(a,b);a=new AX$(a.lo,a.hi);q=new AX$(q.lo,q.hi);return [q,a];};C5=(a,b)=>new AX$(a.lo&b.lo,a.hi&b.hi);ADl=(a,b)=>new AX$(a.lo|b.lo,a.hi|b.hi);H3=(a,b)=>new AX$(a.lo^b.lo,a.hi^b.hi);FB=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AX$(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AX$(0,a.lo);}else {return new AX$(0,a.lo<<b -32);}};AVN=(a,b)=>{b&=63;if(b===0){return a;}else if
(b<32){return new AX$(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AX$(a.hi,a.hi>>31);}else {return new AX$(a.hi>>b -32,a.hi>>31);}};Be=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AX$(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AX$(a.hi,0);}else {return new AX$(a.hi>>>b -32,0);}};function AYh(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AYj=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|
0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AYk=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi
>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYl=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYm=(a,b)=>{let r=a.sup -b.sup;if(r
!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AYn=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AYo=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===
64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AYp=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AYq=a=>new AYh(a.lo,a.hi,a.sup),AYi=(a,b)=>{let bits=b.hi!==0?AYn(b.hi):AYn(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits
%16;AYo(b,bits);AYo(a,dividentBits);let q=new AYh(0,0,0);while(sz-->0){AYo(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AYq(b);AYj(t,digit);if(AYm(t,a)>=0){while(AYm(t,a)>0){AYk(t,b); --digit;}}else {while(true){let nextT=AYq(t);AYl(nextT,b);if(AYm(nextT,a)>0){break;}t=nextT;++digit;}}AYk(a,t);q.lo|=digit;AYo(a,16);}AYp(a,bits+16);return q;};}else {D4=(a,b)=>a===b;ADm=(a,b)=>a!==b;ACz=(a,b)=>a>b;AUY=(a,b)=>a>=b;AU3=(a,b)=>a<b;AC0=(a,b)=>a<=b;C6=(a,b)=>BigInt.asIntN(64,
a+b);AYe=a=>BigInt.asIntN(64,a+1);AWf=a=>BigInt.asIntN(64, -a);AGl=(a,b)=>BigInt.asIntN(64,a -b);AWk=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Ba=(a,b)=>BigInt.asIntN(64,a*b);MY=(a,b)=>BigInt.asIntN(64,a/b);AWm=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));Xv=(a,b)=>BigInt.asIntN(64,a%b);C5=(a,b)=>BigInt.asIntN(64,a&b);ADl=(a,b)=>BigInt.asIntN(64,a|b);H3=(a,b)=>BigInt.asIntN(64,a^b);FB=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));AVN=(a,b)=>BigInt.asIntN(64,
a>>BigInt(b&63));Be=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)>>BigInt(b&63));}let Q=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (D7(cls))(data);},T=(cls,data)=>new (D7(cls))(data),AAM;if(typeof BigInt64Array!=='function'){AAM=init=>new AYr(init);}else {AAM=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AYr(buffer);};}let G=sz=>new AYs(new Uint16Array(sz)),AF8=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AYs(buffer);},BI=sz=>new AYt(new Int8Array(sz)),
Ft=sz=>new AYu(new Int16Array(sz)),AXN=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AYu(buffer);},X=sz=>new AYv(new Int32Array(sz)),Iw=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AYv(buffer);},J7=sz=>new AYw(new Int8Array(sz)),B_=sz=>new AYx(new Float32Array(sz)),D7=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(FM()).call(this);this.data=data;}JavaArray.prototype=Object.create((FM()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor
=JavaArray;JavaArray.prototype.toString=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (D7(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[FM()],primitive
:false,superclass:FM(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AYy,AVa=strings=>{AYz();AYy=new Array(strings.length);for(let i=0;i<strings.length;++i){AYy[i]=AYA(U(strings[i]));}},A=index=>AYy[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;},AUA=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},U=str=>str===null?null:TG(str),Bw=str=>str===null?null:str.j0,AYz=()=>(()=>{})(),AYA;{AYA=str=>str;}let BB=(obj,cls)=>obj instanceof FM()&&!!obj.constructor.$meta&&AYB(obj.constructor,cls),AYB=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AYB(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for
(let i=0;i<supertypes.length;i=i+1|0){if(AYB(supertypes[i],to)){return true;}}return false;};let B=ex=>{throw APQ(ex);},AYC=Symbol("javaException"),APQ=ex=>{let err=ex.$jsException;if(!err){let javaCause=AYD(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AYE("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AYC]=ex;ex.$jsException=err;AYF(err,ex);}return err;},AYF=(err,ex)=>
{if(typeof AYG==="function"&&err.stack){let stack=AYG(err.stack),javaStack=Q(AYH(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AYI(U(element.className),U(element.methodName),U(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AYJ(ex,javaStack);}}},AYE;if(typeof AYK==='object'){let AYL=Symbol("defaultMessage");AYE=function AYE(message,cause){let self=Reflect.construct(Error,[void 0,cause],AYE);Object.setPrototypeOf(self,
AYE.prototype);self[AYL]=message;return self;};AYE.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AYE},message:{get(){try {let javaException=this[AYC];if(typeof javaException==='object'){let javaMessage=AYM(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AYL];}catch(AYN){return "Exception occurred trying to extract Java exception message: "+AYN;}}}});}else {AYE=Error;}let AVF=e=>e instanceof Error
&&typeof e[AYC]==='object'?e[AYC]:null,Z=err=>{let ex=err[AYC];if(!ex){ex=AYO(U("(JavaScript) "+err.toString()));err[AYC]=ex;ex.$jsException=err;AYF(err,ex);}return ex;},AYO=message=>AUP(message),AYM=t=>AOe(t),AYD=t=>AWT(t),AYH=()=>FM(),AYI=(className,methodName,fileName,lineNumber)=>{{return null;}},AYJ=(e,stack)=>{};let AYP=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=
next+1;}buffer+=msg.substring(index);};},BX=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AYP(msg=>console.info(msg)):()=>{},DA=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AYP(msg=>console.error(msg)):()=>{};let AYQ=null,AT$=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AYQ=packages;},C7=data=>
{let packages=AYQ,i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AYR(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AYR.prototype.push=function(){for
(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AYR.prototype.s=AYR.prototype.push;AYR.prototype.pop=function(){return this.stack.pop();};AYR.prototype.l=AYR.prototype.pop;AYR.prototype.isResuming=function(){return this.status===2;};AYR.prototype.isSuspending=function(){return this.status===1;};AYR.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AYR.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if
(AYS!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AYR.prototype.resume=function(){if(AYS!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AYR.prototype.run=function(){AYS=this;let result;try {result=this.runner();}catch(AYN){result=AYN;}finally {AYS=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback
=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let Fv=()=>{let thread=Db();return thread!=null&&thread.isSuspending();},Fx=()=>{let thread=Db();return thread!=null&&thread.isResuming();},AX0=(runner,callback)=>(new AYR(runner)).start(callback),AYS=null,Db=()=>AYS,Fm=()=>{throw new Error("Invalid recorded state");};function C(){this.mk=null;this.$id$=0;}
let FO=b=>{let c;if(b.mk===null){c=new IA;c.mg=B1;b.mk=c;}b=b.mk;c=b.mg;if(c===null)b.mg=B1;else if(c!==B1){c=new BN;c.j1=1;c.j2=1;c.j3=A(0);B(c);}b.mR=b.mR+1|0;},
DL=b=>{let c,d;if(!Hb(b)){c=b.mk;if(c.mg===B1){d=c.mR-1|0;c.mR=d;if(!d)c.mg=null;Hb(b);return;}}b=new IN;b.j1=1;b.j2=1;B(b);},
AWs=b=>{AFu(b,1);},
AFu=(b,c)=>{let d,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.mk===null){d=new IA;d.mg=B1;b.mk=d;}d=b.mk;if(d.mg===null)d.mg=B1;if(d.mg===B1){d.mR=d.mR+c|0;return;}$p=1;case 1:Yd(b,c);if(Fv()){break _;}return;default:Fm();}}Db().s(b,c,d,$p);},
AIg=(b,c,d)=>{let e,f,g;e=B1;f=b.mk;if(f===null){f=new IA;f.mg=e;b.mk=f;if(e!==e)B1=e;B1.oJ=Em();b=b.mk;b.mR=b.mR+c|0;b=null;d.pO.e(b);return;}if(f.mg===null){f.mg=e;if(e!==e)B1=e;B1.oJ=Em();b=b.mk;b.mR=b.mR+c|0;b=null;d.pO.e(b);return;}if(f.oE===null)f.oE=AHu();f=f.oE;g=new ST;g.vX=e;g.vY=b;g.vV=c;g.vW=d;d=g;f.push(d);},
AWy=b=>{XD(b,1);},
XD=(b,c)=>{let d;if(!Hb(b)){d=b.mk;if(d.mg===B1){c=d.mR-c|0;d.mR=c;if(c>0)return;d.mg=null;d=d.oE;if(d!==null&&!(d.length?0:1)){d=new Wb;d.wj=b;Ne(d,0);}else Hb(b);return;}}b=new IN;b.j1=1;b.j2=1;B(b);},
AOZ=b=>{let c,d,e;if(!Hb(b)){c=b.mk;if(c.mg===null){b=c.oE;if(b!==null&&!(b.length?0:1)){b=c.oE.shift();BD();if(b!==null&&!(b instanceof FM()))b=Cf(b);d=b;c.oE=null;b=d.vX;c=d.vY;e=d.vV;d=d.vW;if(B1!==b)B1=b;B1.oJ=Em();c=c.mk;c.mg=b;c.mR=c.mR+e|0;b=null;d.pO.e(b);}return;}}},
Hb=a=>{let b,c;b=a.mk;if(b===null)return 1;a:{if(b.mg===null){c=b.oE;if(!(c!==null&&!(c.length?0:1))){b=b.uD;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.mk=null;return 1;},
Bt=a=>{return;},
AUV=()=>{let a=new C();Bt(a);return a;},
AWt=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kf=b;d=c;b.classObject=d;}}return c;},
G_=a=>{let b,c;b=a;if(!b.$id$){c=E0();b.$id$=c;}return a.$id$;},
AJo=(a,b)=>{return a!==b?0:1;},
PP=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=E0();b.$id$=c;}d=Bh(a.$id$,4);b=new K;b.jZ=G(16);D(b,b.jY,A(1));e=b.jY;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);return c;}b=new H;b.j1=1;b.j2=1;B(b);},
AVX=a=>{let b,c,d;if(!BB(a,Fd)&&a.constructor.$meta.item===null){b=new UG;b.j1=1;b.j2=1;B(b);}b=Xi(a);c=b;d=E0();c.$id$=d;return b;},
NG=a=>{let b,c;b=a.mk;if(!(b!==null&&b.mg===B1?1:0)){b=new IN;b.j1=1;b.j2=1;B(b);}b=b.uD;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BD();if(c!==null&&!(c instanceof FM()))c=Cf(c);c=c;if(!c.m())Ne(c,0);}a.mk.uD=null;},
Yd=(b,c)=>{let thread=Db();let javaThread=W4();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;J$(javaThread);thread.resume();};callback.gZ=e=>{thread.attribute=APQ(e);J$(javaThread);thread.resume();};callback=Sp(callback);thread.suspend(()=>{try {AIg(b,c,callback);;}catch(NV){callback.gZ(NV);}});return null;};
let AQj=F();
let AGL=b=>{let c,d,e,f;VN=G(0);c=new I;c.j0="";Mg=c;Om=new NM;AOD();c=new Bb;c.j6=1.0;c.j5=0.0;OR=c;c=new Bb;c.j6=0.0;c.j5=1.0;OQ=c;c=new Bb;c.j6=0.0;c.j5=0.0;Ri=c;Lo=new Bb;Jk=new Bb;YL();TQ=new Bb;TU=new Bb;AA$();St=new Bb;SE=new Bb;c=new Ep;c.of=0.0;c.oc=0.0;c.od=0.0;c.oe=0.0;Rv=c;c=new Ep;c.of=0.0;c.oc=0.0;c.od=0.0;c.oe=0.0;Ru=c;Qx=new D$;Tf=new D$;U_=0.10000000149011612;ASR();Q_=M(CD);W3();Pp=Q(Jh,111);TC=new Bb;TN=new Bb;QE=new C;AGQ();Or=M(BV);ADy();PY=M(AJT);Oq=M(KG);TT=Q(MN,128);Yg();AKs();Q1=new Bb;Q2
=new Bb;Q3=new Bb;S4=0.4000000059604645;Op=0.10000000149011612;UN=new Bb;AMl();RO=new Bb;Sk=new Bb;Wh=new Bb;Wj=new Bb;Wi=new Bb;ARj();ASP();ACA();Pe=new BM;ANj();H9=0.0;AFI();RA=B_(3);AKO();AGD();AIF();Da=1;ABz();Wl=new Km;QO=new Kl;AJg();O=1;ACQ();IJ=new Nu;ALn();Zv();c=new NQ;b=Q(I,0);d=b.data;Jz(A(3));e=d.length;f=0;while(f<e){Jz(d[f]);f=f+1|0;}c.vn=A(3);c.v_=b.p();Cg=c;ARA();Wu=M(ADb);AFz();AS2();c=new Hw;c.m1=1;I8=c;c=new Hw;c.m1=0;Ji=c;QM=M(Ci);c=new Hm;c.sN=A(4);Cp=c;c=new Hm;c.sN=A(5);J3=c;AE8();AOL();Z2();AF0();ADg();WU();ATi();AEW();ABj();KM
=1;ZO();c=new Do;c.pz=12;LT=c;AMh();AMP();ASH();DF=new Bb;Dw=new Bb;DT=new Bb;CU=new Bb;CV=new Bb;SW=new Bb;Nh=new Bb;GI=new Bb;GL=new Bb;V6=new Bb;Oo=new Bb;Pq=Cz(2.0);Pr=Cz(3.0);D2=new Bb;Fg=new Bb;Ee=new Bb;c=ASU(A(6));c.r3=640;c.pY=480;Qh(new LO,new P7,c);};
let Os=F();
let AEi=0,AEq=0,YE=0,AS3=0,ACu=0;
let SS=()=>{SS=BQ(Os);AGN();};
let AGN=()=>{AEi=C9(U(navigator.platform),A(7));AEq=C9(U(navigator.platform),A(8));YE=C9(U(navigator.platform),A(9));AS3=!C9(U(navigator.platform),A(10))&&!C9(U(navigator.platform),A(11))?0:1;ACu=!C9(U(navigator.platform),A(12))&&!C9(U(navigator.platform),A(13))&&!C9(U(navigator.platform),A(14))?0:1;};
let Of=F(0);
let Mm=F();
let CW=F(0);
function Nj(){let a=this;Mm.call(a);a.mb=null;a.vo=null;a.ym=0;a.ls=null;a.lU=null;a.rH=null;a.sL=null;a.pK=null;a.pN=null;a.rO=0;a.rP=0;a.sc=null;a.n2=null;a.q9=null;a.pC=null;a.uH=0;a.qQ=null;a.xm=0;a.zI=0;a.v$=0;a.t9=null;a.wk=null;}
let BR=0;
let SO=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.lU=new Bb;a.rH=Q(CE,20);a.sL=J7(20);a.pK=X(20);a.pN=X(20);d=new M_;If(d,1,4,M(DR));a.pC=d;a.uH=1;a.t9=IQ;e=new BM;e.kX=0.0;e.kW=1.0;e.kV=0.0;e.kY=0.8500000238418579;CX(e);a.wk=e;if(b===null){b=new Bk;b.j1=1;b.j2=1;b.j3=A(15);B(b);}if(c===null){b=new Bk;b.j1=1;b.j2=1;b.j3=A(16);B(b);}a.mb=b;a.vo=c;c=new BJ;F_(c);e=new M_;If(e,1,4,M(CE));c.kp=e;e=new S1;e.oS=1.0;e.oQ=0.0;e.oR=0.0;e.oU=0.0;e.oV=1.0;e.oT=0.0;c.tv=e;c.uj=C8();c.pA=C8();c.nk=1;a.ls=c;c.lA=a;c=c.kp;f=c.j7;g=0;h
=c.j4;while(g<h){f.data[g].x(a);g=g+1|0;}g=B3.li.width;i=B3.li.height;b.pU=0;b.pV=0;b.qt=g;b.nb=i;j=g;k=b.r4;j=j*k;k=i*k;b.s1=j;b.s$=k;Nq(b,1);},
AXb=(a,b)=>{let c=new Nj();SO(c,a,b);return c;},
AM2=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.qQ===null){b=AIK(5000,null);a.qQ=b;b.sH=1;}a:{if(!a.zI&&!a.v$&&a.t9===IQ){if(!a.xm)break a;b=a.ls;b.kD=1;BR=1;b=b.kp;if(CA){c=new Cr;c.kQ=1;c.kU=b;c.lX=1;}else{if(b.kA===null){c=new C0;c.l9=b;c.ma=1;b.kA=c;}c=CJ(b.kA);}b:while(true){if(!c.kQ){c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(c.lJ>=c.kU.j4?0:1))break a;b=Cm(c);if(!(b instanceof BJ)){b.kD=1;BR=1;}else{b=b;b.kD=1;BR=1;b=b.kp;if(CA){d=new Cr;d.kQ=1;d.kU=b;d.lX=1;}else{if(b.kA
===null){d=new C0;d.l9=b;d.ma=1;b.kA=d;}d=CJ(b.kA);}while(true){if(!d.kQ){c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(d.lJ>=d.kU.j4?0:1))break;b=Cm(d);if(!(b instanceof BJ)){b.kD=1;BR=1;}else{b=b;b.kD=1;BR=1;b=b.kp;if(CA){e=new Cr;e.kQ=1;e.kU=b;e.lX=1;}else{if(b.kA===null){e=new C0;e.l9=b;e.ma=1;b.kA=e;}e=CJ(b.kA);}while(true){if(!e.kQ){c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(e.lJ>=e.kU.j4?0:1))break;b=Cm(e);if(!(b instanceof BJ)){b.kD=1;BR=1;}else{b=b;b.kD=1;BR=1;f=b.kp;if(CA){b=new Cr;b.kQ=1;b.kU=f;b.lX
=1;}else{if(f.kA===null){b=new C0;Bt(b);b.l9=f;b.ma=1;f.kA=b;}b=CJ(f.kA);}while(true){if(!b.kQ){c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(b.lJ>=b.kU.j4?0:1))break;f=Cm(b);if(!(f instanceof BJ)){f.kD=1;BR=1;}else{f=f;f.kD=1;BR=1;f=f.kp;if(CA){g=new Cr;Bt(g);g.kQ=1;g.kU=f;g.lX=1;}else{if(f.kA===null)f.kA=LK(f,1);g=CJ(f.kA);}while(true){if(!g.kQ){c=new S;GO(c,A(17));B(c);}if(!(g.lJ>=g.kU.j4?0:1))break;f=Cm(g);if(!(f instanceof BJ)){f.kD=1;BR=1;}else{f=f;f.kD=1;BR=1;f=f.kp;if(CA)h=L_(f,1);else{if(f.kA===null)f.kA
=NR(f);h=CJ(f.kA);}while(true){if(!h.kQ)break b;if(!(h.lJ>=h.kU.j4?0:1))break;f=Cm(h);if(!(f instanceof BJ)){f.kD=1;BR=1;}else{f=f;E5(f,1);f=Gh(f.kp);while(Hu(f)){i=Cm(f);if(!(i instanceof BJ))E5(i,1);else Ly(i,1,1);}}}}}}}}}}}}}B(Kz(A(17)));}c=a.lU;b=K_;j=b.l7.data[0];k=b.l6.data[0];c.j6=j;c.j5=k;ET(a.mb,c);b=a.lU;j=b.j6;k=b.j5;c=a.ls;b.j6=j;b.j5=k;Dx(c,b);b=a.ls;c=a.lU;c=H6(b,c.j6,c.j5,1);if(c===null)return;if(!a.v$)b=c;else{b=c.k4;if(b===null)b=c;}c=a.t9;if(c===IQ){b.kD=1;BR=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof Er)break;b=b.k4;}}if(b===null)return;b.K(c);}d:{if(a.xm&&b instanceof BJ){c=b;c.kD=1;BR=1;c=c.kp;if(CA){d=new Cr;d.kQ=1;d.kU=c;d.lX=1;}else{if(c.kA===null){d=new C0;d.l9=c;d.ma=1;c.kA=d;}d=CJ(c.kA);}e:while(true){if(!d.kQ){c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(d.lJ>=d.kU.j4?0:1))break d;c=Cm(d);if(!(c instanceof BJ)){c.kD=1;BR=1;}else{c=c;c.kD=1;BR=1;c=c.kp;if(CA){e=new Cr;e.kQ=1;e.kU=c;e.lX=1;}else{if(c.kA===null){e=new C0;e.l9=c;e.ma=1;c.kA=e;}e=CJ(c.kA);}while(true){if(!e.kQ)
{c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(e.lJ>=e.kU.j4?0:1))break;c=Cm(e);if(!(c instanceof BJ)){c.kD=1;BR=1;}else{c=c;c.kD=1;BR=1;c=c.kp;if(CA){f=new Cr;f.kQ=1;f.kU=c;f.lX=1;}else{if(c.kA===null){f=new C0;f.l9=c;f.ma=1;c.kA=f;}f=CJ(c.kA);}while(true){if(!f.kQ){c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(f.lJ>=f.kU.j4?0:1))break;c=Cm(f);if(!(c instanceof BJ)){c.kD=1;BR=1;}else{c=c;c.kD=1;BR=1;c=c.kp;if(CA){g=new Cr;g.kQ=1;g.kU=c;g.lX=1;}else{if(c.kA===null){g=new C0;Bt(g);g.l9=c;g.ma=1;c.kA=g;}g=CJ(c.kA);}while
(true){if(!g.kQ){c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(g.lJ>=g.kU.j4?0:1))break;c=Cm(g);if(!(c instanceof BJ)){c.kD=1;BR=1;}else{c=c;c.kD=1;BR=1;c=c.kp;if(CA){h=new Cr;Bt(h);h.kQ=1;h.kU=c;h.lX=1;}else{if(c.kA===null)c.kA=LK(c,1);h=CJ(c.kA);}while(true){if(!h.kQ){c=new S;GO(c,A(17));B(c);}if(!(h.lJ>=h.kU.j4?0:1))break;c=Cm(h);if(!(c instanceof BJ)){c.kD=1;BR=1;}else{c=c;c.kD=1;BR=1;c=c.kp;if(CA)i=L_(c,1);else{if(c.kA===null)c.kA=NR(c);i=CJ(c.kA);}while(true){if(!i.kQ)break e;if(!(i.lJ>=i.kU.j4?0:1))break;c
=Cm(i);if(!(c instanceof BJ)){c.kD=1;BR=1;}else{c=c;E5(c,1);c=Gh(c.kp);while(Hu(c)){l=Cm(c);if(!(l instanceof BJ))E5(l,1);else Ly(l,1,1);}}}}}}}}}}}}}B(Kz(A(17)));}}c=a.ls;if(c!==b)f:{c.kD=0;if(c instanceof BJ){c=c.kp;m=0;n=c.j4;g:while(true){if(m>=n)break f;if(m>=c.j4){d=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,m,10);D(b,b.jY,A(19));m=c.j4;J(b,b.jY,m,10);c=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){c.j0=L(o.data,0,n);d.j1=1;d.j2=1;d.j3=c;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}d=c.j7.data[m];if
(d!==b)h:{d.kD=0;if(d instanceof BJ){d=d.kp;q=0;r=d.j4;while(true){if(q>=r)break h;if(q>=d.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,q,10);D(b,b.jY,A(19));m=d.j4;J(b,b.jY,m,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}e=d.j7.data[q];if(e!==b)i:{e.kD=0;if(e instanceof BJ){e=e.kp;s=0;t=e.j4;while(true){if(s>=t)break i;if(s>=e.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,s,10);D(b,b.jY,A(19));m
=e.j4;J(b,b.jY,m,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=e.j7.data[s];if(f!==b)j:{f.kD=0;if(f instanceof BJ){f=f.kp;u=0;v=f.j4;while(true){if(u>=v)break j;if(u>=f.j4){c=new H;b=new K;Bt(b);b.jZ=G(16);BY(b,b.jY,A(18));J(b,b.jY,u,10);BY(b,b.jY,A(19));m=f.j4;J(b,b.jY,m,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}g
=f.j7.data[u];if(g!==b)k:{g.kD=0;if(g instanceof BJ){g=g.kp;w=0;x=g.j4;while(true){if(w>=x)break k;if(w>=g.j4){c=new H;b=new K;DM(b,16);B$(b,b.jY,A(18));Ip(b,w,10);B$(b,b.jY,A(19));Ip(b,g.j4,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}h=g.j7.data[w];if(h!==b)l:{h.kD=0;if(h instanceof BJ){h=h.kp;y=0;z=h.j4;while(true){if(y>=z)break l;if(y>=h.j4){c=new H;b=new K;EZ(b);Jq(b,A(18));Iu(b,y);Jq(b,A(19));Iu(b,h.j4);d=new I;o
=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);GO(c,d);B(c);}b=new H;b.j1=1;b.j2=1;B(b);}i=h.j7.data[y];if(i!==b)m:{i.kD=0;if(i instanceof BJ){l=i.kp;ba=0;bb=l.j4;while(true){if(ba>=bb)break m;if(ba>=l.j4)break g;i=l.j7.data[ba];if(i!==b)n:{E5(i,0);if(i instanceof BJ){i=i.kp;bc=0;bd=i.j4;while(true){if(bc>=bd)break n;Pg(a,DK(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(Nc(Et(FK(FZ(FK(FZ(En(),A(18)),ba),A(19)),l.j4))));}}}B9.W(3042);b
=a.qQ;c=a.mb.qX.qC;C$(b.s_,c.lj);b.ov=1;b=a.qQ;if(!b.sH){c=new BN;c.j1=1;c.j2=1;c.j3=A(20);B(c);}FT(b,HS);O$(a.ls,a.qQ);b=a.qQ;FQ(b.k_);b.mM=null;B9.bb(3042);},
Pg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.kD=0;if(b instanceof BJ){d=b.kp;e=0;f=d.j4;while(true){if(e>=f)break a;if(e>=d.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=d.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}b=d.j7.data[e];if(b!==c)b:{b.kD=0;if(b instanceof BJ){j=b.kp;i=0;k=j.j4;while(true){if(i>=k)break b;if
(i>=j.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));e=j.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}b=j.j7.data[i];if(b!==c)c:{b.kD=0;if(b instanceof BJ){l=b.kp;m=0;n=l.j4;while(true){if(m>=n)break c;if(m>=l.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,m,10);D(b,b.jY,A(19));e=l.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0))
{d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}b=l.j7.data[m];if(b!==c)d:{b.kD=0;if(b instanceof BJ){b=b.kp;o=0;p=b.j4;while(true){if(o>=p)break d;if(o>=b.j4){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,o,10);D(c,c.jY,A(19));e=b.j4;J(c,c.jY,e,10);b=new I;g=c.jZ;h=g.data;f=c.jY;i=h.length;if(f>=0&&f<=(i-0|0)){b.j0=L(g.data,0,f);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}q=b.j7.data[o];if(q!==c)e:{q.kD=0;if(q instanceof BJ){r=q.kp;s=0;t=r.j4;while(true){if(s>=t)break e;if
(s>=r.j4){c=new H;b=new K;Bt(b);b.jZ=G(16);BY(b,b.jY,A(18));J(b,b.jY,s,10);BY(b,b.jY,A(19));e=r.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}q=r.j7.data[s];if(q!==c)f:{q.kD=0;if(q instanceof BJ){q=q.kp;u=0;v=q.j4;while(true){if(u>=v)break f;if(u>=q.j4){c=new H;b=new K;DM(b,16);B$(b,b.jY,A(18));Ip(b,u,10);B$(b,b.jY,A(19));Ip(b,q.j4,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0
=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}w=q.j7.data[u];if(w!==c)g:{w.kD=0;if(w instanceof BJ){w=w.kp;x=0;y=w.j4;while(true){if(x>=y)break g;if(x>=w.j4){c=new H;b=new K;EZ(b);Jq(b,A(18));Iu(b,x);Jq(b,A(19));Iu(b,w.j4);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);GO(c,d);B(c);}b=new H;b.j1=1;b.j2=1;B(b);}z=w.j7.data[x];if(z!==c)h:{z.kD=0;if(z instanceof BJ){z=z.kp;ba=0;bb=z.j4;while(true){if(ba>=bb)break h;if(ba>=z.j4)B(Nc(Et(FK(FZ(FK(FZ(En(),
A(18)),ba),A(19)),z.j4))));bc=z.j7.data[ba];if(bc!==c)i:{E5(bc,0);if(bc instanceof BJ){bc=bc.kp;bd=0;be=bc.j4;while(true){if(bd>=be)break i;Pg(a,DK(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
ANY=(a,b)=>{let c,d,e,f,g;c=0;d=a.rH.data.length;while(c<d){e=a.rH.data;f=e[c];if(a.sL.data[c])e[c]=Qb(a,f,a.pK.data[c],a.pN.data[c],c);else if(f!==null){e[c]=null;NZ(a,f,a.pK.data[c],a.pN.data[c],c);}c=c+1|0;}g=Hl;if(!(g!==M9&&g!==ML&&g!==g))a.sc=Qb(a,a.sc,a.rO,a.rP,(-1));RF(a.ls,b);},
Qb=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.lU;g=c;h=d;f.j6=g;f.j5=h;ET(a.mb,f);f=a.lU;g=f.j6;h=f.j5;i=a.ls;f.j6=g;f.j5=h;Dx(i,f);f=a.ls;i=a.lU;j=H6(f,i.j6,i.j5,1);if(j===b)return b;if(b!==null){Cw();i=Bv;d=BE(i,M(Y));k=d<0?null:i.kL.data[d];if(k===null){k=new CB;i=new Bg;i.kq=0;i.j7=Q(C,4);k.kj=i;k.kR=100;a:{try{i=CK(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CI(M(Y),null);CM(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i
=null;}k.kC=i;if(i===null){b=new Bz;i=new K;i.jZ=G(16);D(i,i.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);f=M(Y).j$;D(i,i.jY,f);f=new I;l=i.jZ;m=l.data;d=i.jY;e=m.length;if(d>=0&&d<=(e-0|0)){f.j0=L(l.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(Y),k);}f=k.kj;c=f.j4;if(c){if(!c){b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);}c=c-1|0;f.j4=c;l=f.j7.data;f=l[c];l[c]=null;}else b:{try{f=CZ(k.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}i
=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));n=k.kC.lE.lD;if(n.j$===null)n.j$=U(n.kf.$meta.name);k=n.j$;D(b,b.jY,k);k=new I;l=b.jZ;m=l.data;d=b.jY;e=m.length;if(d>=0&&d<=(e-0|0)){k.j0=L(l.data,0,d);i.j1=1;i.j2=1;i.j3=k;i.lm=f;B(i);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.mq=IP;f.kI=a;i=a.lU;f.nL=i.j6;f.nM=i.j5;f.on=e;f.lo=j;D0(b,f);i=Bv;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BC;k.kf=o;p=k;o.classObject=p;}}c=BE(i,k);i=c<0?null:i.kL.data[c];if(i!==null){k=i.kj;if(k.j4<i.kR){Bf(k,f);c
=i.kO;d=i.kj.j4;if(c>d)d=c;i.kO=d;if(BB(f,BA)){f=f;f.kI=null;f.k8=null;f.k9=null;f.lf=0;f.lb=1;f.k0=0;f.le=0;f.k5=0;f.lo=null;f.lh=(-1);}}else if(BB(f,BA)){f=f;f.kI=null;f.k8=null;f.k9=null;f.lf=0;f.lb=1;f.k0=0;f.le=0;f.k5=0;f.lo=null;f.lh=(-1);}}}if(j!==null){Cw();i=Bv;d=BE(i,M(Y));k=d<0?null:i.kL.data[d];if(k===null){k=new CB;i=new Bg;i.kq=0;i.j7=Q(C,4);k.kj=i;k.kR=100;c:{try{i=CK(M(Y),null);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CI(M(Y),null);CM(i,1);break c;}catch
($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}k.kC=i;if(i===null){b=new Bz;i=new K;i.jZ=G(16);D(i,i.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);f=M(Y).j$;D(i,i.jY,f);f=new I;l=i.jZ;m=l.data;d=i.jY;e=m.length;if(d>=0&&d<=(e-0|0)){f.j0=L(l.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(Y),k);}f=k.kj;c=f.j4;if(c){if(!c){b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);}c=c-1|0;f.j4=c;l=f.j7.data;f=l[c];l[c]=null;}else d:{try{f=CZ(k.kC,null);break d;}catch($$e)
{$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}i=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));n=k.kC.lE.lD;if(n.j$===null)n.j$=U(n.kf.$meta.name);k=n.j$;D(b,b.jY,k);k=new I;l=b.jZ;m=l.data;d=b.jY;e=m.length;if(d>=0&&d<=(e-0|0)){k.j0=L(l.data,0,d);i.j1=1;i.j2=1;i.j3=k;i.lm=f;B(i);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.mq=Nb;f.kI=a;i=a.lU;f.nL=i.j6;f.nM=i.j5;f.on=e;f.lo=b;D0(j,f);b=Bv;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BC;i.kf=k;o=i;k.classObject=o;}}c=BE(b,i);b=c
<0?null:b.kL.data[c];if(b!==null){i=b.kj;if(i.j4<b.kR){Bf(i,f);c=b.kO;d=b.kj.j4;if(c>d)d=c;b.kO=d;if(BB(f,BA)){b=f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.lo=null;b.lh=(-1);}}else if(BB(f,BA)){b=f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.lo=null;b.lh=(-1);}}}return j;},
NZ=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.lU;g=c;h=d;f.j6=g;f.j5=h;ET(a.mb,f);Cw();i=Bv;d=BE(i,M(Y));j=d<0?null:i.kL.data[d];if(j===null){j=new CB;i=new Bg;i.kq=0;i.j7=Q(C,4);j.kj=i;j.kR=100;a:{try{i=CK(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CI(M(Y),null);CM(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}j.kC=i;if(i===null){b=new Bz;i=new K;i.jZ=G(16);D(i,i.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);f
=M(Y).j$;D(i,i.jY,f);f=new I;k=i.jZ;l=k.data;d=i.jY;e=l.length;if(d>=0&&d<=(e-0|0)){f.j0=L(k.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(Y),j);}f=j.kj;c=f.j4;if(c){if(!c){b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);}c=c-1|0;f.j4=c;k=f.j7.data;f=k[c];k[c]=null;}else b:{try{f=CZ(j.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}i=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));m=j.kC.lE.lD;if(m.j$===null)m.j$=U(m.kf.$meta.name);j=m.j$;D(b,b.jY,j);j=new I;k
=b.jZ;l=k.data;d=b.jY;e=l.length;if(d>=0&&d<=(e-0|0)){j.j0=L(k.data,0,d);i.j1=1;i.j2=1;i.j3=j;i.lm=f;B(i);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.mq=IP;f.kI=a;i=a.lU;f.nL=i.j6;f.nM=i.j5;f.on=e;f.lo=b;D0(b,f);b=Bv;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BC;i.kf=j;n=i;j.classObject=n;}}c=BE(b,i);b=c<0?null:b.kL.data[c];if(b!==null){i=b.kj;if(i.j4<b.kR){Bf(i,f);c=b.kO;d=b.kj.j4;if(c>d)d=c;b.kO=d;if(BB(f,BA)){b=f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.lo
=null;b.lh=(-1);}}else if(BB(f,BA)){b=f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.lo=null;b.lh=(-1);}}},
N7=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;if(!SI(a,b,c))return 0;a.sL.data[d]=1;a.pK.data[d]=b;a.pN.data[d]=c;f=a.lU;g=b;h=c;f.j6=g;f.j5=h;ET(a.mb,f);Cw();i=Bv;c=BE(i,M(Y));j=c<0?null:i.kL.data[c];if(j===null){j=new CB;i=new Bg;i.kq=0;i.j7=Q(C,4);j.kj=i;j.kR=100;a:{try{i=CK(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CI(M(Y),null);CM(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}j.kC=i;if(i===null){i=new Bz;j=new K;j.jZ
=G(16);D(j,j.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);f=M(Y).j$;D(j,j.jY,f);f=new I;k=j.jZ;l=k.data;c=j.jY;d=l.length;if(c>=0&&c<=(d-0|0)){f.j0=L(k.data,0,c);i.j1=1;i.j2=1;i.j3=f;B(i);}f=new H;f.j1=1;f.j2=1;B(f);}Ce(Bv,M(Y),j);}f=j.kj;b=f.j4;if(b){if(!b){f=new BN;f.j1=1;f.j2=1;f.j3=A(22);B(f);}b=b-1|0;f.j4=b;k=f.j7.data;f=k[b];k[b]=null;}else b:{try{f=CZ(j.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){i=$$je;}else{throw $$e;}}m=new S;f=new K;f.jZ=G(16);D(f,f.jY,A(23));n=j.kC.lE.lD;if
(n.j$===null)n.j$=U(n.kf.$meta.name);j=n.j$;D(f,f.jY,j);j=new I;k=f.jZ;l=k.data;c=f.jY;d=l.length;if(c>=0&&c<=(d-0|0)){j.j0=L(k.data,0,c);m.j1=1;m.j2=1;m.j3=j;m.lm=i;B(m);}f=new H;f.j1=1;f.j2=1;B(f);}f=f;f.mq=IH;f.kI=a;i=a.lU;g=i.j6;f.nL=g;h=i.j5;f.nM=h;f.on=d;f.lh=e;j=a.ls;i.j6=g;i.j5=h;Dx(j,i);i=a.ls;j=a.lU;i=H6(i,j.j6,j.j5,1);if(i!==null)D0(i,f);else{i=a.ls;if(i.r0===JR)D0(i,f);}o=f.k0;i=Bv;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BC;j.kf=m;p=j;m.classObject=p;}}b=BE(i,j);i
=b<0?null:i.kL.data[b];if(i!==null){j=i.kj;if(j.j4<i.kR){Bf(j,f);b=i.kO;c=i.kj.j4;if(b>c)c=b;i.kO=c;if(BB(f,BA)){f=f;f.kI=null;f.k8=null;f.k9=null;f.lf=0;f.lb=1;f.k0=0;f.le=0;f.k5=0;f.lo=null;f.lh=(-1);}}else if(BB(f,BA)){f=f;f.kI=null;f.k8=null;f.k9=null;f.lf=0;f.lb=1;f.k0=0;f.le=0;f.k5=0;f.lo=null;f.lh=(-1);}}return o;},
TH=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a.pK.data[d]=b;a.pN.data[d]=c;a.rO=b;a.rP=c;if(!a.pC.j4)return 0;e=a.lU;f=b;g=c;e.j6=f;e.j5=g;ET(a.mb,e);Cw();h=Bv;c=BE(h,M(Y));i=c<0?null:h.kL.data[c];if(i===null){i=new CB;h=new Bg;h.kq=0;h.j7=Q(C,4);i.kj=h;i.kR=100;a:{try{h=CK(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{h=CI(M(Y),null);CM(h,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}h=null;}i.kC=h;if(h===null){h=new Bz;i=new K;i.jZ
=G(16);D(i,i.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);e=M(Y).j$;D(i,i.jY,e);e=new I;j=i.jZ;k=j.data;c=i.jY;d=k.length;if(c>=0&&c<=(d-0|0)){e.j0=L(j.data,0,c);h.j1=1;h.j2=1;h.j3=e;B(h);}e=new H;e.j1=1;e.j2=1;B(e);}Ce(Bv,M(Y),i);}e=i.kj;b=e.j4;if(b){if(!b){e=new BN;e.j1=1;e.j2=1;e.j3=A(22);B(e);}b=b-1|0;e.j4=b;j=e.j7.data;e=j[b];j[b]=null;}else b:{try{e=CZ(i.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){h=$$je;}else{throw $$e;}}l=new S;e=new K;e.jZ=G(16);D(e,e.jY,A(23));m=i.kC.lE.lD;if
(m.j$===null)m.j$=U(m.kf.$meta.name);i=m.j$;D(e,e.jY,i);i=new I;j=e.jZ;k=j.data;c=e.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);l.j1=1;l.j2=1;l.j3=i;l.lm=h;B(l);}e=new H;e.j1=1;e.j2=1;B(e);}e=e;e.mq=IO;e.kI=a;h=a.lU;e.nL=h.j6;e.nM=h.j5;e.on=d;h=a.pC;CO(h);j=h.j7;h.nt=j;h.mx=h.mx+1|0;j=j;n=0;o=h.j4;while(n<o){i=j.data[n];if(i.r9==d&&Li(h,i,1)){e.k8=i.qV;e.k9=i.p9;if(Ig(i.q$,e))e.k0=1;}n=n+1|0;}Fq(h);p=e.k0;h=Bv;l=e.constructor;if(l===null)i=null;else{i=l.classObject;if(i===null){i=new BC;i.kf=l;q=i;l.classObject
=q;}}b=BE(h,i);h=b<0?null:h.kL.data[b];if(h!==null){i=h.kj;if(i.j4<h.kR){Bf(i,e);b=h.kO;c=h.kj.j4;if(b>c)c=b;h.kO=c;if(BB(e,BA)){e=e;e.kI=null;e.k8=null;e.k9=null;e.lf=0;e.lb=1;e.k0=0;e.le=0;e.k5=0;e.lo=null;e.lh=(-1);}}else if(BB(e,BA)){e=e;e.kI=null;e.k8=null;e.k9=null;e.lf=0;e.lb=1;e.k0=0;e.le=0;e.k5=0;e.lo=null;e.lh=(-1);}}return p;},
L9=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;a.sL.data[d]=0;a.pK.data[d]=b;a.pN.data[d]=c;if(!a.pC.j4)return 0;f=a.lU;g=b;h=c;f.j6=g;f.j5=h;ET(a.mb,f);Cw();i=Bv;c=BE(i,M(Y));j=c<0?null:i.kL.data[c];if(j===null){j=new CB;i=new Bg;i.kq=0;i.j7=Q(C,4);j.kj=i;j.kR=100;a:{try{i=CK(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CI(M(Y),null);CM(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}j.kC=i;if(i===null){i=new Bz;j=new K;j.jZ
=G(16);D(j,j.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);f=M(Y).j$;D(j,j.jY,f);f=new I;k=j.jZ;l=k.data;c=j.jY;d=l.length;if(c>=0&&c<=(d-0|0)){f.j0=L(k.data,0,c);i.j1=1;i.j2=1;i.j3=f;B(i);}f=new H;f.j1=1;f.j2=1;B(f);}Ce(Bv,M(Y),j);}f=j.kj;b=f.j4;if(b){if(!b){f=new BN;f.j1=1;f.j2=1;f.j3=A(22);B(f);}b=b-1|0;f.j4=b;k=f.j7.data;f=k[b];k[b]=null;}else b:{try{f=CZ(j.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){i=$$je;}else{throw $$e;}}m=new S;f=new K;f.jZ=G(16);D(f,f.jY,A(23));n=j.kC.lE.lD;if
(n.j$===null)n.j$=U(n.kf.$meta.name);j=n.j$;D(f,f.jY,j);j=new I;k=f.jZ;l=k.data;c=f.jY;d=l.length;if(c>=0&&c<=(d-0|0)){j.j0=L(k.data,0,c);m.j1=1;m.j2=1;m.j3=j;m.lm=i;B(m);}f=new H;f.j1=1;f.j2=1;B(f);}f=f;f.mq=G4;f.kI=a;i=a.lU;f.nL=i.j6;f.nM=i.j5;f.on=d;f.lh=e;i=a.pC;CO(i);k=i.j7;i.nt=k;i.mx=i.mx+1|0;k=k;o=0;p=i.j4;while(o<p){j=k.data[o];if(j.r9==d&&j.ud==e){CO(i);if(ID(i,j,1)){f.k8=j.qV;f.k9=j.p9;if(Ig(j.q$,f))f.k0=1;m=Bv;n=j.constructor;if(n===null)q=null;else{q=n.classObject;if(q===null){q=new BC;q.kf=n;r
=q;n.classObject=r;}}b=BE(m,q);m=b<0?null:m.kL.data[b];if(m!==null){q=m.kj;if(q.j4<m.kR){Bf(q,j);b=m.kO;c=m.kj.j4;if(b>c)c=b;m.kO=c;if(BB(j,BA))j.bt();}else if(BB(j,BA))j.bt();}}}o=o+1|0;}Fq(i);s=f.k0;i=Bv;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BC;j.kf=m;q=j;m.classObject=q;}}b=BE(i,j);i=b<0?null:i.kL.data[b];if(i!==null){j=i.kj;if(j.j4<i.kR){Bf(j,f);b=i.kO;c=i.kj.j4;if(b>c)c=b;i.kO=c;if(BB(f,BA)){f=f;f.kI=null;f.k8=null;f.k9=null;f.lf=0;f.lb=1;f.k0=0;f.le=0;f.k5=0;f.lo=null;f.lh
=(-1);}}else if(BB(f,BA)){f=f;f.kI=null;f.k8=null;f.k9=null;f.lf=0;f.lb=1;f.k0=0;f.le=0;f.k5=0;f.lo=null;f.lh=(-1);}}return s;},
AD4=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,$$je;a.rO=b;a.rP=c;if(!SI(a,b,c))return 0;d=a.lU;e=b;f=c;d.j6=e;d.j5=f;ET(a.mb,d);Cw();g=Bv;c=BE(g,M(Y));h=c<0?null:g.kL.data[c];if(h===null){h=new CB;g=new Bg;g.kq=0;g.j7=Q(C,4);h.kj=g;h.kR=100;a:{try{g=CK(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{g=CI(M(Y),null);CM(g,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}g=null;}h.kC=g;if(g===null){g=new Bz;h=new K;h.jZ=G(16);D(h,h.jY,A(21));if(M(Y).j$
===null)M(Y).j$=U(M(Y).kf.$meta.name);d=M(Y).j$;D(h,h.jY,d);d=new I;i=h.jZ;j=i.data;c=h.jY;k=j.length;if(c>=0&&c<=(k-0|0)){d.j0=L(i.data,0,c);g.j1=1;g.j2=1;g.j3=d;B(g);}d=new H;d.j1=1;d.j2=1;B(d);}Ce(Bv,M(Y),h);}d=h.kj;b=d.j4;if(b){if(!b){d=new BN;d.j1=1;d.j2=1;d.j3=A(22);B(d);}b=b-1|0;d.j4=b;i=d.j7.data;d=i[b];i[b]=null;}else b:{try{d=CZ(h.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){g=$$je;}else{throw $$e;}}l=new S;d=new K;d.jZ=G(16);D(d,d.jY,A(23));m=h.kC.lE.lD;if(m.j$===null)m.j$=U(m.kf.$meta.name);h
=m.j$;D(d,d.jY,h);h=new I;i=d.jZ;j=i.data;c=d.jY;k=j.length;if(c>=0&&c<=(k-0|0)){h.j0=L(i.data,0,c);l.j1=1;l.j2=1;l.j3=h;l.lm=g;B(l);}d=new H;d.j1=1;d.j2=1;B(d);}d=d;d.mq=K1;d.kI=a;g=a.lU;e=g.j6;d.nL=e;f=g.j5;d.nM=f;h=a.ls;g.j6=e;g.j5=f;Dx(h,g);g=a.ls;h=a.lU;g=H6(g,h.j6,h.j5,1);if(g===null)g=a.ls;D0(g,d);n=d.k0;g=Bv;l=d.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new BC;h.kf=l;o=h;l.classObject=o;}}b=BE(g,h);g=b<0?null:g.kL.data[b];if(g!==null){h=g.kj;if(h.j4<g.kR){Bf(h,d);b=g.kO;c=g.kj.j4;if
(b>c)c=b;g.kO=c;if(BB(d,BA)){d=d;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}else if(BB(d,BA)){d=d;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}return n;},
ANL=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;d=a.q9;if(d===null)d=a.ls;e=a.lU;f=a.rO;g=a.rP;e.j6=f;e.j5=g;ET(a.mb,e);Cw();h=Bv;i=BE(h,M(Y));j=i<0?null:h.kL.data[i];if(j===null){j=new CB;h=new Bg;h.kq=0;h.j7=Q(C,4);j.kj=h;j.kR=100;a:{try{h=CK(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{h=CI(M(Y),null);CM(h,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}h=null;}j.kC=h;if(h===null){d=new Bz;h=new K;h.jZ=G(16);D(h,h.jY,A(21));if(M(Y).j$
===null)M(Y).j$=U(M(Y).kf.$meta.name);e=M(Y).j$;D(h,h.jY,e);e=new I;k=h.jZ;l=k.data;i=h.jY;m=l.length;if(i>=0&&i<=(m-0|0)){e.j0=L(k.data,0,i);d.j1=1;d.j2=1;d.j3=e;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}Ce(Bv,M(Y),j);}e=j.kj;n=e.j4;if(n){if(!n){d=new BN;d.j1=1;d.j2=1;d.j3=A(22);B(d);}n=n-1|0;e.j4=n;k=e.j7.data;e=k[n];k[n]=null;}else b:{try{e=CZ(j.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){e=$$je;}else{throw $$e;}}h=new S;d=new K;d.jZ=G(16);D(d,d.jY,A(23));o=j.kC.lE.lD;if(o.j$===null)o.j$=U(o.kf.$meta.name);j
=o.j$;D(d,d.jY,j);j=new I;k=d.jZ;l=k.data;i=d.jY;m=l.length;if(i>=0&&i<=(m-0|0)){j.j0=L(k.data,0,i);h.j1=1;h.j2=1;h.j3=j;h.lm=e;B(h);}d=new H;d.j1=1;d.j2=1;B(d);}e=e;e.mq=Lp;e.kI=a;h=a.lU;e.nL=h.j6;e.nM=h.j5;e.zv=b;e.zu=c;D0(d,e);p=e.k0;d=Bv;j=e.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BC;h.kf=j;q=h;j.classObject=q;}}n=BE(d,h);d=n<0?null:d.kL.data[n];if(d!==null){h=d.kj;if(h.j4<d.kR){Bf(h,e);n=d.kO;i=d.kj.j4;if(n>i)i=n;d.kO=i;if(BB(e,BA)){d=e;d.kI=null;d.k8=null;d.k9=null;d.lf=
0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}else if(BB(e,BA)){d=e;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}return p;},
AU6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.pC;CO(d);e=d.j7;d.nt=e;d.mx=d.mx+1|0;e=e;f=0;g=d.j4;h=null;i=null;j=null;a:while(true){if(f>=g){Fq(d);if(c!==null){Cw();b=Bv;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BC;d.kf=k;l=d;k.classObject=l;}}m=BE(b,d);b=m<0?null:b.kL.data[m];if(b!==null){d=b.kj;if(d.j4<b.kR){Bf(d,c);m=b.kO;f=b.kj.j4;if(m>f)f=m;b.kO=f;if(BB(c,BA)){b=c;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.lo=null;b.lh=(-1);}}else if
(BB(c,BA)){b=c;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.lo=null;b.lh=(-1);}}}return;}k=e.data[f];if(k.p9===b){CO(d);if(ID(d,k,1)){if(c===null){Cw();c=Bv;n=BE(c,M(Y));l=n<0?null:c.kL.data[n];if(l===null){l=new CB;c=new Bg;c.kq=0;c.j7=Q(C,4);l.kj=c;l.kR=100;b:{try{c=CK(M(Y),h);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CI(M(Y),i);CM(c,1);break b;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}l.kC=c;if(c===null){b=new Bz;c=
new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);d=M(Y).j$;D(c,c.jY,d);d=new I;e=c.jZ;o=e.data;f=c.jY;g=o.length;if(f>=0&&f<=(g-0|0)){d.j0=L(e.data,0,f);b.j1=1;b.j2=1;b.j3=d;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(Y),l);}c:{c=l.kj;m=c.j4;if(m){if(!m)break a;m=m-1|0;c.j4=m;o=c.j7.data;c=o[m];o[m]=null;}else try{c=CZ(l.kC,j);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){c=$$je;d=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));h=l.kC.lE.lD;if(h.j$===null)h.j$=U(h.kf.$meta.name);k
=h.j$;D(b,b.jY,k);k=new I;e=b.jZ;o=e.data;f=b.jY;g=o.length;if(f>=0&&f<=(g-0|0)){k.j0=L(e.data,0,f);d.j1=1;d.j2=1;d.j3=k;d.lm=c;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}else{throw $$e;}}}c=c;c.mq=G4;c.kI=a;c.nL=(-2.147483648E9);c.nM=(-2.147483648E9);}c.k8=k.qV;c.k9=k.p9;c.on=k.r9;c.lh=k.ud;Ig(k.q$,c);}}f=f+1|0;}b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);},
E3=(a,b)=>{let c,d,e;c=0;d=a.rH.data.length;while(c<d){e=a.rH.data;if(b===e[c]){e[c]=null;NZ(a,b,a.pK.data[c],a.pN.data[c],c);}c=c+1|0;}if(b===a.sc){a.sc=null;NZ(a,b,a.rO,a.rP,(-1));}},
AWr=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.n2===b)return 1;Cw();c=Bv;d=BE(c,M(C1));e=d<0?null:c.kL.data[d];if(e===null){e=new CB;c=new Bg;c.kq=0;c.j7=Q(C,4);e.kj=c;e.kR=100;a:{try{c=CK(M(C1),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CI(M(C1),null);CM(c,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}e.kC=c;if(c===null){b=new Bz;c=new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(C1).j$===null)M(C1).j$=U(M(C1).kf.$meta.name);f=M(C1).j$;D(c,
c.jY,f);f=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){f.j0=L(g.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(C1),e);}f=e.kj;j=f.j4;if(j){if(!j){b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);}j=j-1|0;f.j4=j;g=f.j7.data;f=g[j];g[j]=null;}else b:{try{f=CZ(e.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}c=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));k=e.kC.lE.lD;if(k.j$===null)k.j$=U(k.kf.$meta.name);e=k.j$;D(b,b.jY,e);e=new I;g=b.jZ;h=
g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){e.j0=L(g.data,0,d);c.j1=1;c.j2=1;c.j3=e;c.lm=f;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.kI=a;f.w5=Mj;c=a.n2;if(c!==null){f.r_=0;f.ok=b;c.bl(f);}j=f.k5?0:1;if(j){a.n2=b;if(b!==null){f.r_=1;f.ok=c;b.bl(f);j=f.k5?0:1;if(!j)a.n2=c;}}b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kf=e;l=c;e.classObject=l;}}d=BE(b,c);b=d<0?null:b.kL.data[d];if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if(d>i)i=d;b.kO=i;if(BB(f,BA)){b=
f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.ok=null;}}else if(BB(f,BA)){b=f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.ok=null;}}return j;},
AV8=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.q9===b)return 1;Cw();c=Bv;d=BE(c,M(C1));e=d<0?null:c.kL.data[d];if(e===null){e=new CB;c=new Bg;c.kq=0;c.j7=Q(C,4);e.kj=c;e.kR=100;a:{try{c=CK(M(C1),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CI(M(C1),null);CM(c,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}e.kC=c;if(c===null){b=new Bz;c=new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(C1).j$===null)M(C1).j$=U(M(C1).kf.$meta.name);f=M(C1).j$;D(c,
c.jY,f);f=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){f.j0=L(g.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(C1),e);}f=e.kj;j=f.j4;if(j){if(!j){b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);}j=j-1|0;f.j4=j;g=f.j7.data;f=g[j];g[j]=null;}else b:{try{f=CZ(e.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}c=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));k=e.kC.lE.lD;if(k.j$===null)k.j$=U(k.kf.$meta.name);e=k.j$;D(b,b.jY,e);e=new I;g=b.jZ;h=
g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){e.j0=L(g.data,0,d);c.j1=1;c.j2=1;c.j3=e;c.lm=f;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.kI=a;f.w5=NC;c=a.q9;if(c!==null){f.r_=0;f.ok=b;c.bl(f);}j=f.k5?0:1;if(j){a.q9=b;if(b!==null){f.r_=1;f.ok=c;b.bl(f);j=f.k5?0:1;if(!j)a.q9=c;}}b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kf=e;l=c;e.classObject=l;}}d=BE(b,c);b=d<0?null:b.kL.data[d];if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if(d>i)i=d;b.kO=i;if(BB(f,BA)){b=
f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.ok=null;}}else if(BB(f,BA)){b=f;b.kI=null;b.k8=null;b.k9=null;b.lf=0;b.lb=1;b.k0=0;b.le=0;b.k5=0;b.ok=null;}}return j;},
SI=(a,b,c)=>{let d,e,f,g,h;d=a.mb;e=d.pU;f=e+d.qt|0;g=d.pV;h=g+d.nb|0;c=(B3.li.height-1|0)-c|0;return b>=e&&b<f&&c>=g&&c<h?1:0;};
let BA=F(0);
function FD(){let a=this;C.call(a);a.kI=null;a.k8=null;a.k9=null;a.lf=0;a.lb=0;a.k0=0;a.le=0;a.k5=0;}
let ARp=a=>{a.k0=1;},
AKy=a=>{return a.lb;},
Ir=a=>{return a.le;},
F2=a=>{return a.k5;};
let Dm=F(0);
let B8=F(0);
function BG(){let a=this;C.call(a);a.kg=null;a.ka=0;}
let APr=a=>{return a.ka;},
AFw=a=>{return a.kg;},
YD=(a,b)=>{return a!==b?0:1;};
let Hg=F(BG);
let JR=null,Wa=null,AET=null,Xt=null;
let AOD=()=>{let b,c,d;b=new Hg;b.kg=A(24);b.ka=0;JR=b;c=new Hg;c.kg=A(25);c.ka=1;Wa=c;d=new Hg;d.kg=A(26);d.ka=2;AET=d;Xt=T(Hg,[b,c,d]);};
function CE(){let a=this;C.call(a);a.lA=null;a.k4=null;a.wf=null;a.sS=null;a.qi=null;a.yV=null;a.r0=null;a.ne=0;a.kD=0;a.kt=0.0;a.kF=0.0;a.ln=0.0;a.ly=0.0;a.pF=0.0;a.pG=0.0;a.n4=0.0;a.n5=0.0;a.m7=0.0;a.rU=null;}
let F_=a=>{let b,c;b=new K3;b.kq=1;b.j7=Q(C,0);c=new FL;c.pe=1;c.my=X(0);b.qL=c;a.wf=b;b=new K3;b.kq=1;b.j7=Q(C,0);c=new FL;c.pe=1;c.my=X(0);b.qL=c;a.sS=b;b=new Bg;b.kq=1;b.j7=Q(C,0);a.qi=b;a.r0=JR;a.ne=1;a.n4=1.0;a.n5=1.0;b=new BM;b.kX=1.0;b.kW=1.0;b.kV=1.0;b.kY=1.0;CX(b);a.rU=b;},
AXA=()=>{let a=new CE();F_(a);return a;},
G5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.qi;if(!c.j4)return;d=a.lA;d!==null&&!d.uH;a:{try{e=0;while(e<c.j4){d=DK(c,e);if(d.bu(b)&&e<c.j4){f=DK(c,e)===d?e:Eb(c,d,1);if(f!=(-1)){Dv(c,f);d.bx(null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Z($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return;}h=a.T();c=new Bz;d=new K;d.jZ=G(16);D(d,d.jY,A(27));i=h.j0.length;e=128;if(i<e)e=i;j=Ch(h,0,e);D(d,d.jY,j);j=new I;k=d.jZ;l=k.data;e=d.jY;m=l.length;if(e>=0&&e<=(m-0|0)){j.j0=L(k.data,0,e);c.j1=1;c.j2=1;c.j3
=j;c.lm=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
D0=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.kI===null)b.kI=a.lA;b.k8=a;Cw();c=Bv;d=BE(c,M(Bg));e=d<0?null:c.kL.data[d];if(e===null){e=new CB;c=new Bg;c.kq=0;c.j7=Q(C,4);e.kj=c;e.kR=100;a:{try{c=CK(M(Bg),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CI(M(Bg),null);CM(c,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}e.kC=c;if(c===null){b=new Bz;c=new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(Bg).j$===null)M(Bg).j$=U(M(Bg).kf.$meta.name);f=
M(Bg).j$;D(c,c.jY,f);f=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){f.j0=L(g.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(Bg),e);}f=e.kj;j=f.j4;if(j){if(!j){b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);}j=j-1|0;f.j4=j;g=f.j7.data;f=g[j];g[j]=null;}else b:{try{f=CZ(e.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}c=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));k=e.kC.lE.lD;if(k.j$===null)k.j$=U(k.kf.$meta.name);e=k.j$;D(b,b.jY,e);e=new I;g
=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){e.j0=L(g.data,0,d);c.j1=1;c.j2=1;c.j3=e;c.lm=f;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;c=a.k4;while(c!==null){Bf(f,c);c=c.k4;}c:{try{g=f.j7;j=f.j4-1|0;}catch($$e){$$je=Z($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;I4(g.data[j],b,1);if(Ir(b))break;j=j+(-1)|0;}j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j7;d=0;i=f.j4;b=null;if(d>i){b=new Bk;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Bv;m=f.constructor;if(m===null)k
=null;else{k=m.classObject;if(k===null){k=new BC;k.kf=m;c=k;m.classObject=c;}}d=BE(b,k);b=d<0?null:b.kL.data[d];if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if(d>i)i=d;b.kO=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}e:{try{I4(a,b,1);if(!Ir(b))break e;j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j7;d=0;i=f.j4;b=null;if(d>i){b=new Bk;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=
new BC;c.kf=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kL.data[d];if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if(d>i)i=d;b.kO=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}f:{try{I4(a,b,0);if(AKy(b))break f;j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j7;d=0;i=f.j4;b=null;if(d>i){b=new Bk;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kf=e;m=c;e.classObject=m;}}d=BE(b,
c);b=d<0?null:b.kL.data[d];if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if(d>i)i=d;b.kO=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}g:{try{if(!Ir(b))break g;j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j7;d=0;i=f.j4;b=null;if(d>i){b=new Bk;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kf=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kL.data[d];if(b!==null){c=b.kj;if(c.j4
<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if(d>i)i=d;b.kO=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}try{j=0;d=f.j4;}catch($$e){$$je=Z($$e);b=$$je;break c;}h:{try{while(j<d){I4(g.data[j],b,0);if(Ir(b))break h;j=j+1|0;}j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j7;d=0;i=f.j4;b=null;if(d>i){b=new Bk;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kf=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:
b.kL.data[d];if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if(d>i)i=d;b.kO=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}try{j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j7;d=0;i=f.j4;b=null;if(d>i){b=new Bk;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kf=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kL.data[d];if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,f);d=b.kO;i=b.kj.j4;if
(d>i)i=d;b.kO=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}g=f.j7;j=0;d=f.j4;c=null;if(j>d){b=new Bk;b.j1=1;b.j2=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.j4=0;if(f===null){f=new Bk;f.j1=1;f.j2=1;f.j3=A(28);B(f);}c=Bv;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BC;e.kf=m;k=e;m.classObject=k;}}j=BE(c,e);c=j<0?null:c.kL.data[j];if(c!==null){e=c.kj;if(e.j4<c.kR){Bf(e,f);j=c.kO;d=c.kj.j4;if(j>d)d=j;c.kO=d;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}B(b);},
I4=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.k8===null){b=new Bk;b.j1=1;b.j2=1;b.j3=A(29);B(b);}d=!c?a.wf:a.sS;if(!d.j4)return b.k5;b.k9=a;b.lf=c;if(b.kI===null)b.kI=a.lA;a:{try{AMU(d);e=0;f=d.j4;while(e<f){if(Ig(DK(d,e),b))ARp(b);e=e+1|0;}AOY(d);}catch($$e){$$je=Z($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return b.k5;}h=a.T();d=new Bz;b=new K;b.jZ=G(16);D(b,b.jY,A(27));i=h.j0.length;e=128;if(i<e)e=i;h=Ch(h,0,e);D(b,b.jY,h);h=new I;j=b.jZ;k=j.data;e=b.jY;f=k.length;if(e>=0&&e<=(f-0|0)){h.j0
=L(j.data,0,e);d.j1=1;d.j2=1;d.j3=h;d.lm=g;B(d);}b=new H;b.j1=1;b.j2=1;B(b);},
RV=(a,b,c,d)=>{if(d&&a.r0!==JR)return null;if(!a.ne)return null;if(!(b>=0.0&&b<a.ln&&c>=0.0&&c<a.ly))a=null;return a;},
AUG=a=>{return a.lA;},
AOt=(a,b)=>{a.lA=b;},
AUL=(a,b)=>{a.k4=b;},
AUr=a=>{return a.ne;},
SM=a=>{return a.kt;},
AD1=(a,b,c,d)=>{if(d&16)b=b-a.ln;else if(!(d&8))b=b-a.ln/2.0;if(d&2)c=c-a.ly;else if(!(d&4))c=c-a.ly/2.0;if(!(a.kt===b&&a.kF===c)){a.kt=b;a.kF=c;}},
AXT=a=>{return;},
AUi=a=>{return;},
AUu=a=>{return;},
Nt=(a,b,c,d,e)=>{if(!(a.kt===b&&a.kF===c)){a.kt=b;a.kF=c;}if(!(a.ln===d&&a.ly===e)){a.ln=d;a.ly=e;}},
MQ=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bk;c.j1=1;c.j2=1;c.j3=A(30);B(c);}c=a.k4;if(c===null)return 0;d=c.kp;e=d.j4;if(e<=1)return 0;f=e-1|0;if(b<f)f=b;if(f<e){if(d.j7.data[f]===a)return 0;CO(d);if(!ID(d,a,1))return 0;CO(d);SL(d,f,a);return 1;}g=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,f,10);D(c,c.jY,A(19));b=d.j4;J(c,c.jY,b,10);d=new I;h=c.jZ;i=h.data;f=c.jY;e=i.length;if(f>=0&&f<=(e-0|0)){d.j0=L(h.data,0,f);g.j1=1;g.j2=1;g.j3=d;B(g);}c=new H;c.j1=1;c.j2=1;B(c);},
UA=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.k4;if(c!==null){d=c.k4;if(d!==null){e=d.k4;if(e!==null){f=e.k4;if(f!==null){g=f.k4;if(g!==null){h=g.k4;if(h!==null){i=h.k4;if(i!==null){j=i.k4;if(j!==null){k=j.k4;if(k!==null)UA(k,b);Dx(j,b);}Dx(i,b);}Dx(h,b);}Dx(g,b);}Dx(f,b);}Dx(e,b);}Dx(d,b);}Dx(c,b);}Dx(a,b);return b;},
Dx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.m7;d=a.n4;e=a.n5;f=a.kt;g=a.kF;if(c!==0.0){h=c*0.01745329238474369;i=YO(h);j=JH(h);k=a.pF;l=a.pG;m=b.j6-f-k;n=b.j5-g-l;b.j6=(m*i+n*j)/d+k;b.j5=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.j6=b.j6-f;b.j5=b.j5-g;}else{k=a.pF;l=a.pG;b.j6=(b.j6-f-k)/d+k;b.j5=(b.j5-g-l)/e+l;}return b;},
ANy=(a,b)=>{Vs(a,b);},
Vs=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.kD)return;c=HS;d=b.mM;if(d!==c){if(d===null){b=new BN;b.j1=1;b.j2=1;b.j3=A(31);B(b);}if(!b.sH){c=new BN;c.j1=1;c.j2=1;c.j3=A(32);B(c);}FQ(b.k_);b.mM=null;FT(b,c);}c=a.lA;if(c!==null){d=c.wk;c=b.uT;c.kX=d.kX;c.kW=d.kW;c.kV=d.kV;c.kY=d.kY;}e=a.kt;f=a.kF;g=a.pF;h=a.pG;i=a.ln;j=a.ly;k=a.n4;l=a.n5;m=a.m7;c=b.uT;AJf(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
E5=(a,b)=>{a.kD=b;if(b)BR=1;},
AWv=a=>{return a.kD;},
SX=a=>{let b,c,d,e;b=a.yV;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kf=b;d=c;b.classObject=d;}}if(c.j$===null)c.j$=U(c.kf.$meta.name);b=c.j$;e=EX(b,46,b.j0.length-1|0);if(e!=(-1))b=Ch(b,e+1|0,b.j0.length);}return b;};
let Mp=F(0);
function BJ(){let a=this;CE.call(a);a.kp=null;a.tv=null;a.uj=null;a.pA=null;a.nk=0;a.zi=null;}
let Lo=null;
let RF=(a,b)=>{let c,d,e,f;G5(a,b);c=a.kp;CO(c);d=c.j7;c.nt=d;c.mx=c.mx+1|0;d=d;e=0;f=a.kp.j4;while(e<f){d.data[e].be(b);e=e+1|0;}Fq(a.kp);},
AHS=(a,b,c)=>{let d;if(a.nk){d=KF(a);C$(a.pA,b.oX.lj);if(b.mo)D8(b);C$(b.oX,d.lj);if(b.mo)Gc(b);}Qe(a,b,c);if(a.nk){d=a.pA;if(b.mo)D8(b);C$(b.oX,d.lj);if(b.mo)Gc(b);}},
Qe=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.rU.kY;d=a.kp;CO(d);e=d.j7;d.nt=e;d.mx=d.mx+1|0;f=e;g=a.zi;if(g===null){if(a.nk){h=0;i=d.j4;while(h<i){j=f.data[h];if(j.ne)j.bP(b,c);h=h+1|0;}}else{k=a.kt;l=a.kF;a.kt=0.0;a.kF=0.0;h=0;i=d.j4;while(h<i){j=f.data[h];if(j.ne){m=j.kt;n=j.kF;j.kt=m+k;j.kF=n+l;j.bP(b,c);j.kt=m;j.kF=n;}h=h+1|0;}a.kt=k;a.kF=l;}}else{o=g.nJ;p=o+g.nQ;q=g.nI;r=q+g.nv;if(a.nk){s=0;i=d.j4;while(s<i){j=f.data[s];if(j.ne){m=j.kt;n=j.kF;if(m<=p&&n<=r&&m+j.ln>=o&&n+j.ly>=q)j.bP(b,c);}s=s
+1|0;}}else{k=a.kt;l=a.kF;a.kt=0.0;a.kF=0.0;s=0;i=d.j4;while(s<i){j=f.data[s];if(j.ne){m=j.kt;n=j.kF;if(m<=p&&n<=r&&m+j.ln>=o&&n+j.ly>=q){j.kt=m+k;j.kF=n+l;j.bP(b,c);j.kt=m;j.kF=n;}}s=s+1|0;}a.kt=k;a.kF=l;}}Fq(d);},
O$=(a,b)=>{let c;Vs(a,b);if(a.nk){c=KF(a);C$(a.pA,b.rg.lj);C$(b.rg,c.lj);b.ov=1;c=b.mM;if(c!==null){FQ(b.k_);b.mM=null;FT(b,c);}}AAc(a,b);if(a.nk){c=a.pA;C$(b.rg,c.lj);b.ov=1;}},
AAc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.kp;CO(c);d=c.j7;c.nt=d;c.mx=c.mx+1|0;e=d;if(a.nk){f=0;g=c.j4;while(f<g){h=e.data[f];if(h.ne&&!(!h.kD&&!(h instanceof BJ)))h.Z(b);f=f+1|0;}h=b.mM;if(h!==null){FQ(b.k_);b.mM=null;FT(b,h);}}else{i=a.kt;j=a.kF;a.kt=0.0;a.kF=0.0;k=0;g=c.j4;while(k<g){h=e.data[k];if(h.ne&&!(!h.kD&&!(h instanceof BJ))){l=h.kt;m=h.kF;h.kt=l+i;h.kF=m+j;h.Z(b);h.kt=l;h.kF=m;}k=k+1|0;}a.kt=i;a.kF=j;}Fq(c);},
KF=a=>{let b,c,d,e,f;b=a.tv;c=a.pF;d=a.pG;AGt(b,a.kt+c,a.kF+d,a.m7,a.n4,a.n5);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.oR=b.oR+b.oS*c+b.oQ*e;b.oT=b.oT+b.oU*c+b.oV*e;}f=a.k4;a:{while(true){if(f===null)break a;if(f.nk)break;f=f.k4;}}if(f!==null)AAh(b,f.tv);AQk(a.uj,b);return a.uj;},
H6=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.r0===Wa)return null;if(!a.ne)return null;e=Lo;f=a.kp;g=f.j7;h=f.j4-1|0;while(true){if(h<0)return RV(a,b,c,d);i=g.data[h];e.j6=b;e.j5=c;Dx(i,e);f=i.J(e.j6,e.j5,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AN4=(a,b)=>{let c,d,e,f;a.lA=b;c=a.kp;d=c.j7;e=0;f=c.j4;while(e<f){d.data[e].x(b);e=e+1|0;}},
Ly=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.kD=b;if(b)BR=1;a:{if(c){d=a.kp;if(!CA){if(d.kA===null){e=new C0;e.l9=d;e.ma=1;d.kA=e;}e=CJ(d.kA);}else{e=new Cr;e.kQ=1;e.kU=d;e.lX=1;}b:while(true){if(!e.kQ){e=new S;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(e.lJ>=e.kU.j4?0:1))break a;d=Cm(e);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else{d=d;d.kD=b;if(b)BR=1;c:{if(c){d=d.kp;if(CA){f=new Cr;f.kQ=1;f.kU=d;f.lX=1;}else{if(d.kA===null){g=new C0;g.l9=d;g.ma=1;d.kA=g;}f=CJ(d.kA);}while(true){if(!f.kQ){e=new S;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if
(!(f.lJ>=f.kU.j4?0:1))break c;d=Cm(f);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else{d=d;d.kD=b;if(b)BR=1;d:{if(c){d=d.kp;if(CA){h=new Cr;h.kQ=1;h.kU=d;h.lX=1;}else{if(d.kA===null){g=new C0;g.l9=d;g.ma=1;d.kA=g;}h=CJ(d.kA);}while(true){if(!h.kQ){e=new S;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(h.lJ>=h.kU.j4?0:1))break d;d=Cm(h);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else{d=d;d.kD=b;if(b)BR=1;e:{if(c){d=d.kp;if(CA){i=new Cr;i.kQ=1;i.kU=d;i.lX=1;}else{if(d.kA===null){g=new C0;g.l9=d;g.ma=1;d.kA=g;}i=CJ(d.kA);}while
(true){if(!i.kQ){e=new S;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(i.lJ>=i.kU.j4?0:1))break e;d=Cm(i);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else{d=d;d.kD=b;if(b)BR=1;f:{if(c){d=d.kp;if(CA){j=new Cr;j.kQ=1;j.kU=d;j.lX=1;}else{if(d.kA===null){g=new C0;g.l9=d;g.ma=1;d.kA=g;}j=CJ(d.kA);}while(true){if(!j.kQ){e=new S;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(j.lJ>=j.kU.j4?0:1))break f;d=Cm(j);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else{d=d;d.kD=b;if(b)BR=1;g:{if(c){d=d.kp;if(CA){g=new Cr;g.kQ=1;g.kU=d;g.lX=1;}else{if(d.kA
===null){g=new C0;Bt(g);g.l9=d;g.ma=1;d.kA=g;}g=CJ(d.kA);}while(true){if(!g.kQ){e=new S;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(g.lJ>=g.kU.j4?0:1))break g;d=Cm(g);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else{d=d;d.kD=b;if(b)BR=1;h:{if(c){d=d.kp;if(CA){k=new Cr;Bt(k);k.kQ=1;k.kU=d;k.lX=1;}else{if(d.kA===null)d.kA=LK(d,1);k=CJ(d.kA);}while(true){if(!k.kQ){e=new S;GO(e,A(17));B(e);}if(!(k.lJ>=k.kU.j4?0:1))break h;d=Cm(k);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else{d=d;d.kD=b;if(b)BR=1;i:{if(c){d=d.kp;if(CA)l=L_(d,
1);else{if(d.kA===null)d.kA=NR(d);l=CJ(d.kA);}while(true){if(!l.kQ)break b;if(!(l.lJ>=l.kU.j4?0:1))break i;d=Cm(l);if(!(d instanceof BJ)){d.kD=b;if(b)BR=1;}else j:{d=d;E5(d,b);if(c){d=Gh(d.kp);while(true){if(!Hu(d))break j;m=Cm(d);if(!(m instanceof BJ))E5(m,b);else Ly(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(Kz(A(17)));}}},
ABK=a=>{let b,c,d,e,f;b=new K;b.jZ=G(128);TP(a,b,1);c=b.jY-1|0;b.jY=c;d=new I;e=b.jZ;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.j0=L(e.data,0,c);return d;}b=new H;b.j1=1;b.j2=1;B(b);},
TP=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=SX(a);D(b,b.jY,d);e=b.jY;Bj(b,e,e+1|0);b.jZ.data[e]=10;d=a.kp;CO(d);f=d.j7;d.nt=f;d.mx=d.mx+1|0;g=f;h=0;i=a.kp.j4;j=c+1|0;while(h<i){k=0;while(k<c){D(b,b.jY,A(33));k=k+1|0;}d=g.data[h];if(d instanceof BJ)TP(d,b,j);else{D(b,b.jY,d===null?A(2):d.T());e=b.jY;Bj(b,e,e+1|0);b.jZ.data[e]=10;}h=h+1|0;}Fq(a.kp);},
AVK=()=>{Lo=new Bb;};
let Gi=F(0);
let DG=F(0);
let GX=F();
let GA=F(0);
let B2=F();
let Jk=null;
let Ig=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,$$je;if(!(b instanceof Y))return 0;L6();switch(KR.data[b.mq.ka]){case 1:break;case 2:return 0;case 3:return 0;default:c=b.k9;d=Jk;e=b.nL;f=b.nM;d.j6=e;d.j5=f;UA(c,d);switch(KR.data[b.mq.ka]){case 4:if(b.wM){g=b.kI;h=b.k9;i=b.k8;j=b.on;k=b.lh;Cw();d=Bv;l=BE(d,M(DR));c=l<0?null:d.kL.data[l];if(c===null){c=new CB;d=new Bg;d.kq=0;d.j7=Q(C,4);c.kj=d;c.kR=100;a:{try{d=CK(M(DR),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CI(M(DR),
null);CM(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}c.kC=d;if(d===null){d=new Bz;c=new K;Bt(c);c.jZ=G(16);BY(c,c.jY,A(21));if(M(DR).j$===null)M(DR).j$=U(M(DR).kf.$meta.name);b=M(DR).j$;BY(c,c.jY,b);b=new I;m=c.jZ;n=m.data;l=c.jY;o=n.length;if(l>=0&&l<=(o-0|0)){b.j0=L(m.data,0,l);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}Ce(Bv,M(DR),c);}b:{b=c.kj;p=b.j4;if(p){if(!p){b=new BN;b.j1=1;b.j2=1;b.j3=A(22);B(b);}p=p-1|0;b.j4=p;m=b.j7.data;b=m[p];m[p]=null;}else try
{b=CZ(c.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;i=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));g=c.kC.lE.lD;if(g.j$===null)g.j$=U(g.kf.$meta.name);c=g.j$;D(b,b.jY,c);c=new I;m=b.jZ;n=m.data;l=b.jY;o=n.length;if(l>=0&&l<=(o-0|0)){c.j0=L(m.data,0,l);i.j1=1;i.j2=1;Bi(i);i.j3=c;i.lm=d;B(i);}b=new H;b.j1=1;b.j2=1;B(b);}else{throw $$e;}}}b=b;b.p9=h;b.qV=i;b.q$=a;b.r9=j;b.ud=k;Bf(g.pC,b);}return 1;case 5:d=Jk;AN1(a,b,d.j6,d.j5,b.on,b.lh);return 1;case 6:return 1;case 7:return 0;case 8:return 0;case 9:return 0;case 10:return 0;default:}return 0;}return 0;},
AXq=()=>{Jk=new Bb;};
let He=F(B2);
let AL1=F(He);
let GF=F(BG);
let Mj=null,NC=null,UH=null;
let YL=()=>{let b,c;b=new GF;b.kg=A(34);b.ka=0;Mj=b;c=new GF;c.kg=A(35);c.ka=1;NC=c;UH=T(GF,[b,c]);};
let Nl=F(0);
let IV=F(0);
let Gy=F(0);
let DD=F();
let APe=F(DD);
let M6=F(GX);
let MG=F();
let TQ=null,TU=null;
let AVg=()=>{TQ=new Bb;TU=new Bb;};
let ACN=F();
let Xo=F();
let V4=F(0);
let LJ=F();
let ALp=F(LJ);
function C1(){let a=this;FD.call(a);a.r_=0;a.w5=null;a.ok=null;}
let R4=a=>{a.lb=1;},
AXx=()=>{let a=new C1();R4(a);return a;},
Wg=a=>{a.kI=null;a.k8=null;a.k9=null;a.lf=0;a.lb=1;a.k0=0;a.le=0;a.k5=0;a.ok=null;};
let Rr=F();
let XL=null;
let Wt=()=>{Wt=BQ(Rr);AIP();};
let AIP=()=>{let b,c;b=X((UH.p()).data.length);c=b.data;XL=b;c[Mj.ka]=1;c[NC.ka]=2;};
let AJk=F();
let Tp=F();
let WH=null;
let R7=()=>{R7=BQ(Tp);ABd();};
let ABd=()=>{let b,c;b=X((K0.p()).data.length);c=b.data;WH=b;c[IH.ka]=1;c[G4.ka]=2;c[IO.ka]=3;};
let APd=F(DD);
let Fj=F();
let Tk=F(Fj);
let Wc=F();
let AO0=0,ASb=0,AJl=0,ASq=0,AFj=0;
let Uk=()=>{Uk=BQ(Wc);AR3();};
let AR3=()=>{AO0=C9(U(navigator.platform),A(7));ASb=C9(U(navigator.platform),A(8));AJl=C9(U(navigator.platform),A(9));ASq=!C9(U(navigator.platform),A(10))&&!C9(U(navigator.platform),A(11))?0:1;AFj=!C9(U(navigator.platform),A(12))&&!C9(U(navigator.platform),A(13))&&!C9(U(navigator.platform),A(14))?0:1;};
let LY=F();
let ARP=F(He);
let St=null;
let AVW=()=>{St=new Bb;};
let AEb=F();
let SE=null;
let AXE=()=>{SE=new Bb;};
let UV=F();
let ACt=null,Yz=null,ASM=null;
let VB=()=>{VB=BQ(UV);AOu();};
let AOu=()=>{let b;b=new Bg;b.kq=1;b.j7=Q(C,16);ACt=b;b=new Bn;CT();Yz=b;ASM=new D$;};
let Nd=F();
let IE=F(Fj);
let VY=F(Fj);
let D9=F(B2);
let U_=0.0;
let AXc=()=>{U_=0.10000000149011612;};
let VQ=F(IE);
let ABs=F(FD);
let KA=F(0);
function Y(){let a=this;FD.call(a);a.mq=null;a.nL=0.0;a.nM=0.0;a.zv=0.0;a.zu=0.0;a.on=0;a.lh=0;a.uS=0;a.xA=0;a.lo=null;a.wM=0;}
let Ss=a=>{a.lb=1;a.wM=1;},
AVJ=()=>{let a=new Y();Ss(a);return a;},
Qg=a=>{a.kI=null;a.k8=null;a.k9=null;a.lf=0;a.lb=1;a.k0=0;a.le=0;a.k5=0;a.lo=null;a.lh=(-1);},
OM=a=>{return a.mq.kg;};
function DR(){let a=this;C.call(a);a.q$=null;a.p9=null;a.qV=null;a.r9=0;a.ud=0;}
let Uh=a=>{return;},
AUh=()=>{let a=new DR();Uh(a);return a;},
OZ=a=>{a.p9=null;a.q$=null;a.qV=null;};
let N1=F();
let KR=null;
let L6=()=>{L6=BQ(N1);AQI();};
let AQI=()=>{let b,c;b=X((K0.p()).data.length);c=b.data;KR=b;c[It.ka]=1;c[Ma.ka]=2;c[JI.ka]=3;c[IH.ka]=4;c[G4.ka]=5;c[IO.ka]=6;c[K1.ka]=7;c[Lp.ka]=8;c[Nb.ka]=9;c[IP.ka]=10;};
let Dn=F(BG);
let IH=null,G4=null,IO=null,K1=null,Nb=null,IP=null,Lp=null,It=null,Ma=null,JI=null,K0=null;
let AA$=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Dn;b.kg=A(36);b.ka=0;IH=b;c=new Dn;c.kg=A(37);c.ka=1;G4=c;d=new Dn;d.kg=A(38);d.ka=2;IO=d;e=new Dn;e.kg=A(39);e.ka=3;K1=e;f=new Dn;f.kg=A(40);f.ka=4;Nb=f;g=new Dn;g.kg=A(41);g.ka=5;IP=g;h=new Dn;h.kg=A(42);h.ka=6;Lp=h;i=new Dn;i.kg=A(43);i.ka=7;It=i;j=new Dn;j.kg=A(44);j.ka=8;Ma=j;k=new Dn;k.kg=A(45);k.ka=9;JI=k;K0=T(Dn,[b,c,d,e,f,g,h,i,j,k]);};
function BP(){let a=this;C.call(a);a.kZ=null;a.kT=null;a.l1=null;}
let AMK=a=>{return;},
ANq=(a,b)=>{let c,d,e;a.kZ=b;if(a.kT===null)a.kT=b;if(b===null){b=a.l1;if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,a);d=b.kO;e=b.kj.j4;if(d>e)e=d;b.kO=e;if(BB(a,BA))a.bt();}else if(BB(a,BA))a.bt();a.l1=null;}}},
AUO=(a,b)=>{a.kT=b;},
Z_=a=>{a.kZ=null;a.kT=null;a.l1=null;a.bY();},
AUk=(a,b)=>{a.l1=b;},
ANt=a=>{let b,c,d,e;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kf=b;d=c;b.classObject=d;}}if(c.j$===null)c.j$=U(c.kf.$meta.name);b=c.j$;e=EX(b,46,b.j0.length-1|0);if(e!=(-1))b=Ch(b,e+1|0,b.j0.length);if(Le(b,A(46)))b=Ch(b,0,b.j0.length-6|0);return b;};
let ER=F(BP);
let AGb=F(ER);
let AK1=F(ER);
function C3(){let a=this;BP.call(a);a.xi=0.0;a.sA=0.0;a.va=null;a.xc=0;a.s6=0;a.p5=0;}
let ARB=(a,b)=>{let c,d,e,f,$$je;if(a.p5)return 1;c=a.l1;a.l1=null;a:{try{if(!a.s6){S3(a);a.s6=1;}b=a.sA+b;a.sA=b;d=a.xi;e=b<d?0:1;a.p5=e;d=!e?b/d:1.0;f=a.va;if(f!==null)d=f.b0(d);if(a.xc)d=1.0-d;Sm(a,d);if(a.p5)ASt(a);e=a.p5;break a;}catch($$e){$$je=Z($$e);f=$$je;}a.l1=c;B(f);}a.l1=c;return e;},
ASt=a=>{return;},
ATD=a=>{a.sA=0.0;a.s6=0;a.p5=0;};
let EH=F(C3);
let XM=F(EH);
let Z7=F();
function NN(){let a=this;BP.call(a);a.lr=null;a.rx=0;}
let AU9=a=>{let b,c,d,e,f,g,h,i;a.rx=0;b=a.lr;c=0;d=b.j4;while(c<d){if(c>=b.j4){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(18));J(f,f.jY,c,10);D(f,f.jY,A(19));c=b.j4;J(f,f.jY,c,10);b=new I;g=f.jZ;h=g.data;d=f.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);e.j1=1;e.j2=1;e.j3=b;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}b.j7.data[c].bY();c=c+1|0;}},
ALc=a=>{let b,c,d,e,f,g,h,i;a.kZ=null;a.kT=null;a.l1=null;a.rx=0;b=a.lr;c=0;d=b.j4;while(c<d){if(c>=b.j4){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(18));J(f,f.jY,c,10);D(f,f.jY,A(19));c=b.j4;J(f,f.jY,c,10);b=new I;g=f.jZ;h=g.data;d=f.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);e.j1=1;e.j2=1;e.j3=b;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}b.j7.data[c].bY();c=c+1|0;}a.ps=0;b=a.lr;g=b.j7;c=0;d=b.j4;f=null;if(c>d){b=new Bk;b.j1=1;b.j2=1;B(b);}while(c<d){h=g.data;i=c+1|0;h[c]=f;c=i;}b.j4=0;},
ANI=(a,b)=>{let c,d,e,f,g,h,i;c=a.lr;d=0;e=c.j4;while(true){if(d>=e){a.kZ=b;if(a.kT===null)a.kT=b;if(b===null){b=a.l1;if(b!==null){c=b.kj;if(c.j4<b.kR){Bf(c,a);d=b.kO;e=b.kj.j4;if(d>e)e=d;a:{b.kO=e;if(BB(a,BA)){b=a;b.kZ=null;b.kT=null;b.l1=null;b.rx=0;c=b.lr;d=0;e=c.j4;while(true){if(d>=e){b.ps=0;b=b.lr;f=b.j7;d=0;e=b.j4;c=null;if(d>e){b=new Bk;GC(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.j4=0;break a;}if(d>=c.j4)break;c.j7.data[d].bY();d=d+1|0;}B(Nc(Et(FK(FZ(FK(FZ(En(),A(18)),d),A(19)),c.j4))));}}}
else if(BB(a,BA)){b=a;b.kZ=null;b.kT=null;b.l1=null;b.rx=0;c=b.lr;d=0;e=c.j4;while(d<e){(DK(c,d)).bY();d=d+1|0;}b.ps=0;b=b.lr;f=b.j7;d=0;e=b.j4;c=null;if(d>e){b=new Bk;Im(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.j4=0;}a.l1=null;}}return;}if(d>=c.j4)break;c.j7.data[d].bx(b);d=d+1|0;}i=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,d,10);D(b,b.jY,A(19));d=c.j4;J(b,b.jY,d,10);c=new I;f=b.jZ;g=f.data;e=b.jY;h=g.length;if(e>=0&&e<=(h-0|0)){c.j0=L(f.data,0,e);i.j1=1;i.j2=1;i.j3=c;B(i);}b=new H;b.j1=1;b.j2
=1;B(b);},
AI$=a=>{let b,c,d,e,f,g,h,i,j;b=new K;b.jZ=G(64);c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BC;d.kf=c;e=d;c.classObject=e;}}if(d.j$===null)d.j$=U(d.kf.$meta.name);c=d.j$;f=EX(c,46,c.j0.length-1|0);if(f!=(-1))c=Ch(c,f+1|0,c.j0.length);if(Le(c,A(46)))c=Ch(c,0,c.j0.length-6|0);D(b,b.jY,c);f=b.jY;Bj(b,f,f+1|0);b.jZ.data[f]=40;c=a.lr;g=0;f=c.j4;while(g<f){if(g>0)D(b,b.jY,A(47));if(g>=c.j4){e=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,g,10);D(b,b.jY,A(19));g=c.j4;J(b,b.jY,g,
10);c=new I;h=b.jZ;i=h.data;f=b.jY;j=i.length;if(f>=0&&f<=(j-0|0)){c.j0=L(h.data,0,f);e.j1=1;e.j2=1;e.j3=c;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}e=c.j7.data[g];D(b,b.jY,e===null?A(2):e.T());g=g+1|0;}f=b.jY;Bj(b,f,f+1|0);h=b.jZ;i=h.data;i[f]=41;c=new I;f=b.jY;j=i.length;if(f>=0&&f<=(j-0|0)){c.j0=L(h.data,0,f);return c;}b=new H;b.j1=1;b.j2=1;B(b);};
function Dd(){NN.call(this);this.ps=0;}
let P9=a=>{let b;b=new Bg;b.kq=1;b.j7=Q(C,4);a.lr=b;},
AVH=()=>{let a=new Dd();P9(a);return a;},
N2=(a,b)=>{let c;c=new Bg;c.kq=1;c.j7=Q(C,4);a.lr=c;Bf(c,b);c=a.kZ;if(c!==null){b.kZ=c;if(b.kT===null)b.kT=c;}},
AXY=a=>{let b=new Dd();N2(b,a);return b;},
V5=(a,b,c)=>{let d;d=new Bg;d.kq=1;d.j7=Q(C,4);a.lr=d;Bf(d,b);d=a.kZ;if(d!==null){b.kZ=d;if(b.kT===null)b.kT=d;}Bf(a.lr,c);b=a.kZ;if(b!==null){c.kZ=b;if(c.kT===null)c.kT=b;}},
AXC=(a,b)=>{let c=new Dd();V5(c,a,b);return c;},
Vz=(a,b,c,d)=>{let e;e=new Bg;e.kq=1;e.j7=Q(C,4);a.lr=e;Bf(e,b);e=a.kZ;if(e!==null){b.kZ=e;if(b.kT===null)b.kT=e;}Bf(a.lr,c);b=a.kZ;if(b!==null){c.kZ=b;if(c.kT===null)c.kT=b;}Bf(a.lr,d);b=a.kZ;if(b!==null){d.kZ=b;if(d.kT===null)d.kT=b;}},
AXp=(a,b,c)=>{let d=new Dd();Vz(d,a,b,c);return d;},
Wk=(a,b,c,d,e)=>{let f;f=new Bg;f.kq=1;f.j7=Q(C,4);a.lr=f;Bf(f,b);f=a.kZ;if(f!==null){b.kZ=f;if(b.kT===null)b.kT=f;}Bf(a.lr,c);f=a.kZ;if(f!==null){c.kZ=f;if(c.kT===null)c.kT=f;}Bf(a.lr,d);b=a.kZ;if(b!==null){d.kZ=b;if(d.kT===null)d.kT=b;}Bf(a.lr,e);b=a.kZ;if(b!==null){e.kZ=b;if(e.kT===null)e.kT=b;}},
AVq=(a,b,c,d)=>{let e=new Dd();Wk(e,a,b,c,d);return e;},
R8=(a,b,c,d,e,f)=>{let g;g=new Bg;g.kq=1;g.j7=Q(C,4);a.lr=g;Bf(g,b);g=a.kZ;if(g!==null){b.kZ=g;if(b.kT===null)b.kT=g;}Bf(a.lr,c);b=a.kZ;if(b!==null){c.kZ=b;if(c.kT===null)c.kT=b;}Bf(a.lr,d);b=a.kZ;if(b!==null){d.kZ=b;if(d.kT===null)d.kT=b;}Bf(a.lr,e);b=a.kZ;if(b!==null){e.kZ=b;if(e.kT===null)e.kT=b;}Bf(a.lr,f);b=a.kZ;if(b!==null){f.kZ=b;if(f.kT===null)f.kT=b;}},
AVT=(a,b,c,d,e)=>{let f=new Dd();R8(f,a,b,c,d,e);return f;},
Od=(a,b)=>{let c,d,e,$$je;c=a.ps;d=a.lr;if(c>=d.j4)return 1;e=a.l1;a.l1=null;a:{b:{c:{d:{try{if(!(DK(d,c)).bu(b))break d;}catch($$e){$$je=Z($$e);d=$$je;break b;}e:{try{if(a.kZ!==null)break e;}catch($$e){$$je=Z($$e);d=$$je;break b;}a.l1=e;return 1;}try{c=a.ps+1|0;a.ps=c;if(c<a.lr.j4)break d;else break c;}catch($$e){$$je=Z($$e);d=$$je;break b;}}try{}catch($$e){$$je=Z($$e);d=$$je;break b;}a.l1=e;return 0;}try{break a;}catch($$e){$$je=Z($$e);d=$$je;}}a.l1=e;B(d);}a.l1=e;return 1;},
UO=a=>{let b,c,d,e,f,g,h,i;a.rx=0;b=a.lr;c=0;d=b.j4;while(c<d){if(c>=b.j4){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(18));J(f,f.jY,c,10);D(f,f.jY,A(19));c=b.j4;J(f,f.jY,c,10);b=new I;g=f.jZ;h=g.data;d=f.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);e.j1=1;e.j2=1;e.j3=b;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}b.j7.data[c].bY();c=c+1|0;}a.ps=0;};
let AD5=F(BP);
let AIq=F(BP);
let ANo=F(BP);
let AOj=F();
let LQ=F(BP);
let AHK=F(LQ);
function Do(){let a=this;C3.call(a);a.tl=0.0;a.tm=0.0;a.ut=0.0;a.us=0.0;a.pz=0;}
let O4=a=>{a.pz=12;},
AWS=()=>{let a=new Do();O4(a);return a;},
S3=a=>{let b,c,d;b=a.kT;c=a.pz;d=b.kt;if(c&16)d=d+b.ln;else if(!(c&8))d=d+b.ln/2.0;a.tl=d;d=b.kF;if(c&2)d=d+b.ly;else if(!(c&4))d=d+b.ly/2.0;a.tm=d;},
Sm=(a,b)=>{let c,d;if(b===0.0){c=a.tl;d=a.tm;}else if(b===1.0){c=a.ut;d=a.us;}else{c=a.tl;c=c+(a.ut-c)*b;d=a.tm;d=d+(a.us-d)*b;}AD1(a.kT,c,d,a.pz);},
Ur=a=>{a.kZ=null;a.kT=null;a.l1=null;a.sA=0.0;a.s6=0;a.p5=0;a.xc=0;a.va=null;a.pz=12;};
let AO$=F(C3);
let APL=F(EH);
let ALL=F(BP);
let AMi=F(EH);
let ARq=F(C3);
let AQJ=F(C3);
let AEE=F(BP);
let AHf=F(C3);
let AHv=F(BP);
let AFa=F(BP);
let AHN=F(ER);
let YH=F(C3);
let ARz=F(BP);
let ALg=F(EH);
let AER=F(ER);
let AKq=F(BP);
let Z9=F(C3);
let AGP=F(C3);
let ABm=F();
let AGI=null;
let ASR=()=>{AGI=T(BC,[M(Q9),M(BM),M(SJ),M(Tk),M(VY),M(IE),M(VQ),M(Gn),M(R3),M(UW),M(Ud),M(Rs),M(VE),M(JZ),M(VP),M(Tm),M(OX),M(Vu),M(GJ),M(Sz),M(UQ),M(Su),M(RH),M(Pl)]);};
let C_=F(BJ);
let Er=F(C_);
let Zl=null,AHn=null,AOi=null,ATa=null,AKK=null,WZ=null,ADO=null,AKg=null;
let QY=()=>{QY=BQ(Er);AOP();};
let AOP=()=>{let b,c;b=new BM;b.kX=0.0;b.kW=0.0;b.kV=1.0;b.kY=1.0;CX(b);Zl=b;b=new BM;b.kX=1.0;b.kW=0.0;b.kV=0.0;b.kY=1.0;CX(b);AHn=b;b=new BM;b.kX=0.0;b.kW=1.0;b.kV=0.0;b.kY=1.0;CX(b);AOi=b;b=new VV;c=new Bg;c.kq=0;c.j7=Q(C,16);b.kj=c;b.kR=2147483647;ATa=b;b=new VU;Ij();AKK=b;WZ=new VT;ADO=new VS;AKg=new VR;};
let FU=F(Er);
let LB=F(FU);
let ACh=F(LB);
let APa=F(B2);
let ME=F(C_);
let Sd=F(0);
let EA=F();
let AEu=F(EA);
let Dk=F(CE);
let Y1=F(Dk);
let AO_=F(B2);
let B4=F();
let AQr=null,ANx=null,AO8=null,ACM=null,AHU=null,AF7=null,ANp=null;
let Ij=()=>{Ij=BQ(B4);Zz();};
let Zz=()=>{let b;b=new Jh;Ij();b.zk=0.0;AQr=b;ANx=new Tw;AO8=new Tt;ACM=new Ts;AHU=new Tv;AF7=new Tu;ANp=new Tr;};
let Tv=F(B4);
let ALq=F(B4);
let Kt=F(D9);
let AHC=F(Kt);
let VT=F(B4);
let ARc=F(B2);
let Md=F(Er);
let TC=null,TN=null;
let AUE=()=>{TC=new Bb;TN=new Bb;};
let ALr=F(B4);
let Gg=F(0);
function D$(){let a=this;C.call(a);a.nJ=0.0;a.nI=0.0;a.nQ=0.0;a.nv=0.0;}
let Qx=null,Tf=null;
let AE$=(a,b)=>{let c,d,e;a:{c=a.nJ;d=b.nJ;if(c<d+b.nQ&&c+a.nQ>d){c=a.nI;d=b.nI;if(c<d+b.nv&&c+a.nv>d){e=1;break a;}}e=0;}return e;},
AWX=()=>{Qx=new D$;Tf=new D$;};
let DO=F(D$);
let WA=null;
let J1=()=>{J1=BQ(DO);OL();};
let S8=a=>{J1();},
AUs=()=>{let a=new DO();S8(a);return a;},
OL=()=>{let b,c,d,e,f,g,h,$$je;Cw();b=Bv;c=BE(b,M(DO));b=c<0?null:b.kL.data[c];if(b===null){b=new CB;d=new Bg;d.kq=0;d.j7=Q(C,4);b.kj=d;b.kR=100;a:{try{d=CK(M(DO),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CI(M(DO),null);CM(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}b.kC=d;if(d===null){b=new Bz;d=new K;d.jZ=G(16);D(d,d.jY,A(21));if(M(DO).j$===null)M(DO).j$=U(M(DO).kf.$meta.name);e=M(DO).j$;D(d,d.jY,e);e=new I;f=d.jZ;g=f.data;c
=d.jY;h=g.length;if(c>=0&&c<=(h-0|0)){e.j0=L(f.data,0,c);b.j1=1;b.j2=1;b.j3=e;B(b);}e=new H;e.j1=1;e.j2=1;B(e);}Ce(Bv,M(DO),b);}WA=b;};
let AEy=F(EA);
let MU=F(Dk);
let Q1=null,Q2=null,Q3=null,S4=0.0,Op=0.0;
let AXw=()=>{Q1=new Bb;Q2=new Bb;Q3=new Bb;S4=0.4000000059604645;Op=0.10000000149011612;};
let ACx=F(MU);
let AGT=F(B2);
let Qq=F(0);
let ANv=F();
let Gn=F();
let GJ=F(Gn);
let Ud=F(GJ);
let MZ=F(Dk);
let AFU=F(MZ);
let AS7=F(ME);
let KC=F(C_);
let ATR=F(FU);
let Np=F(Dk);
let VR=F(B4);
let UQ=F();
let AE5=F();
let AHG=F(B2);
let AJt=F(DD);
let AGf=F();
let AM3=F(B2);
let ASN=F(D9);
let AGR=F(MG);
let Tr=F(B4);
let Tu=F(B4);
let SY=F(0);
let JZ=F();
let OX=F(JZ);
let AEv=F(EA);
let AO9=F(LY);
let APb=F(Nd);
let ARd=F(B2);
let ARe=F(D9);
let VS=F(B4);
let OP=F();
let AEZ=null,AKA=null,AEX=null,AKz=null,WW=null,AAD=null,AJ$=null,Xm=null,AMV=null;
let Uf=()=>{Uf=BQ(OP);ABt();};
let ABt=()=>{let b;b=new FR;b.ou=0.0;AEZ=b;b=new FR;b.ou=1.0;AKA=b;EW();AEX=Ef.data[128];EW();b=Ef.data[129];AKz=b;WW=b;EW();AAD=Ef.data[130];EW();AJ$=Ef.data[132];EW();Xm=Ef.data[136];EW();AMV=Ef.data[144];};
let R3=F(GJ);
let AG6=F(B2);
let Zn=F(DD);
let Tw=F(B4);
let ACT=F(C_);
let AGS=F(B2);
let Su=F();
function Jh(){B4.call(this);this.zk=0.0;}
let Pp=null;
let AXg=()=>{Pp=Q(Jh,111);};
let AE6=F(KC);
let Ts=F(B4);
let AIh=F(Dk);
let UN=null;
let AXj=()=>{UN=new Bb;};
let AG0=F(M6);
let Vu=F();
let Pc=F(Dk);
let YV=null,ADa=null;
let Uv=()=>{Uv=BQ(Pc);YC();};
let YC=()=>{let b,c;YV=new BM;b=new Kq;Mq();c=new Bg;c.kq=1;c.j7=Q(C,1);b.y7=c;c=new FL;c.pe=1;c.my=X(2);b.yf=c;ADa=b;};
let Pl=F();
let ALt=F(B4);
let VU=F(B4);
let AOr=F(Md);
let Tt=F(B4);
let Rs=F();
let ASC=F();
let Fy=F(BG);
let IQ=null,Za=null,ALY=null,Xy=null,AAe=null,ANF=null;
let AMl=()=>{let b,c,d,e,f;b=new Fy;b.kg=A(48);b.ka=0;IQ=b;c=new Fy;c.kg=A(49);c.ka=1;Za=c;d=new Fy;d.kg=A(50);d.ka=2;ALY=d;e=new Fy;e.kg=A(51);e.ka=3;Xy=e;f=new Fy;f.kg=A(52);f.ka=4;AAe=f;ANF=T(Fy,[b,c,d,e,f]);};
let ASV=F(B4);
let AGG=F(DD);
function Dj(){let a=this;C.call(a);a.kR=0;a.kO=0;a.kj=null;}
let VV=F(Dj);
let Zc=F();
let VE=F();
let SJ=F();
let Tm=F();
let Nn=F(B2);
let RO=null;
let AUf=()=>{RO=new Bb;};
let Zm=F(DD);
let ARf=F(Np);
let Zf=F(0);
let AG7=F(B2);
let ATG=F(C_);
let AKY=F(C_);
let AG2=F(D9);
let Na=F();
let AEt=F(Na);
let AQQ=F(CE);
let Yp=F(B2);
let AOO=F(FU);
let AJ1=F(B2);
let ASi=F(D9);
let UW=F(Gn);
let AK5=F(C_);
let Sz=F();
let RH=F();
let AJB=F(Dk);
let ASO=F(GX);
let Yr=F(B2);
let AMH=F(C_);
let Sk=null;
let AV3=()=>{Sk=new Bb;};
let AS5=F(Nn);
let Ys=F(Er);
let AEw=F(EA);
let WJ=F();
let VP=F();
let Vm=F();
let Z4=null,YK=null,AAJ=null,ARr=null,ARt=null,ARs=null,ACS=null,AEd=null,AR9=null,Yx=null,ARC=null;
let Vo=()=>{Vo=BQ(Vm);AI5();};
let AI5=()=>{let b;Z4=B_(16);b=new Ep;b.of=0.0;b.oc=0.0;b.od=0.0;b.oe=1.0;YK=b;b=new Ep;b.of=0.0;b.oc=0.0;b.od=0.0;b.oe=1.0;AAJ=b;b=new Bn;CT();ARr=b;ARt=new Bn;ARs=new Bn;ACS=new Bn;AEd=C8();AR9=new Bn;Yx=new Bn;ARC=new Bn;};
let BO=F();
let Zy=null,AN9=null,ACD=null,AOg=null,ABT=null,ADJ=null,AHH=null,Xx=null,AH3=null,ABS=null,AJD=null,AC$=null,ADI=null,YI=null,Xj=null,ANb=null,AFb=null,ADL=null,ABX=null,AMO=null,ADK=null,AQL=null,ADP=null,AIm=null,AQp=null,AIX=null,WF=null,Xu=null,AN2=null,AEf=null,ATd=null,AL7=null,AQ9=null,AG_=null,AM7=null,ATF=null,AFV=null,AGd=null,XA=null,AOJ=null,ATj=null,ARn=null,AMj=null,ATu=null;
let JJ=()=>{JJ=BQ(BO);ZR();};
let ZR=()=>{let b,c;b=new T9;JJ();Zy=b;AN9=new T1;ACD=new T0;b=new T3;AOg=b;ABT=b;b=new EB;b.nd=2;ADJ=b;b=new HO;b.nd=2;AHH=b;Xx=b;b=new HI;b.nd=2;AH3=b;ABS=b;AJD=new T2;AC$=new T5;b=new EB;b.nd=3;ADI=b;b=new HO;b.nd=3;YI=b;b=new HI;b.nd=3;Xj=b;ANb=new T4;AFb=new T7;b=new EB;b.nd=4;ADL=b;b=new HO;b.nd=4;ABX=b;b=new HI;b.nd=4;AMO=b;b=new EB;b.nd=5;ADK=b;b=new HO;b.nd=5;AQL=b;b=new HI;b.nd=5;ADP=b;AIm=new T6;AQp=new S_;AIX=new Tb;b=new FP;b.qc=2.0;b.qv=10.0;c=Gs(2.0,(-10.0));b.qR=c;b.qA=1.0/(1.0-c);WF=b;b=new L4;b.qc
=2.0;b.qv=10.0;c=Gs(2.0,(-10.0));b.qR=c;b.qA=1.0/(1.0-c);Xu=b;b=new NJ;b.qc=2.0;b.qv=10.0;c=Gs(2.0,(-10.0));b.qR=c;b.qA=1.0/(1.0-c);AN2=b;b=new FP;b.qc=2.0;b.qv=5.0;c=Gs(2.0,(-5.0));b.qR=c;b.qA=1.0/(1.0-c);AEf=b;b=new L4;b.qc=2.0;b.qv=5.0;c=Gs(2.0,(-5.0));b.qR=c;b.qA=1.0/(1.0-c);ATd=b;b=new NJ;b.qc=2.0;b.qv=5.0;c=Gs(2.0,(-5.0));b.qR=c;b.qA=1.0/(1.0-c);AL7=b;AQ9=new Tc;AG_=new Td;AM7=new Te;b=new Gw;b.vc=2.0;b.tC=10.0;b.tG=1.0;b.t4=(-21.99114990234375);ATF=b;b=new O3;b.vc=2.0;b.tC=10.0;b.tG=1.0;b.t4=18.84955596923828;AFV
=b;b=new Rz;b.vc=2.0;b.tC=10.0;b.tG=1.0;b.t4=(-21.99114990234375);AGd=b;b=new RB;b.yG=3.0;XA=b;b=new PG;b.Ac=2.0;AOJ=b;b=new VG;b.zf=2.0;ATj=b;b=new QW;Lv(b,4);ARn=b;b=new RY;Lv(b,4);AMj=b;ATu=AB5(4);};
function PG(){BO.call(this);this.Ac=0.0;}
let AGJ=F();
let T4=F(BO);
let ARK=F();
function EB(){BO.call(this);this.nd=0;}
let HO=F(EB);
let HI=F(EB);
let Jw=F(0);
let ABM=F();
let T7=F(BO);
let APp=F();
let T3=F(BO);
function Gw(){let a=this;BO.call(a);a.vc=0.0;a.tC=0.0;a.tG=0.0;a.t4=0.0;}
let T2=F(BO);
let T1=F(BO);
let ALx=F();
let Wh=null,Wj=null,Wi=null;
let AUR=()=>{Wh=new Bb;Wj=new Bb;Wi=new Bb;};
let Xn=F(Dj);
let I$=F(0);
function Bb(){let a=this;C.call(a);a.j6=0.0;a.j5=0.0;}
let OR=null,OQ=null,Ri=null;
let M$=(a,b,c)=>{a.j6=b;a.j5=c;},
AUp=(a,b)=>{let c=new Bb();M$(c,a,b);return c;},
AA6=a=>{let b,c,d,e,f,g,h;b=new K;b.jZ=G(16);D(b,b.jY,A(53));c=a.j6;E$(b,b.jY,c);D(b,b.jY,A(54));c=a.j5;E$(b,b.jY,c);D(b,b.jY,A(55));d=new I;e=b.jZ;f=e.data;g=b.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}b=new H;b.j1=1;b.j2=1;B(b);},
ADE=(a,b)=>{let c,d,e,f,g,h,i;if(a===b)return 1;if(b===null)return 0;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BC;d.kf=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kf=e;f=c;e.classObject=f;}}if(d!==c)return 0;c=b;g=a.j6;h=(isNaN(g)?1:0)?2143289344:Ge(g);g=c.j6;if(h!=((isNaN(g)?1:0)?2143289344:Ge(g)))return 0;g=a.j5;i=(isNaN(g)?1:0)?2143289344:Ge(g);g=c.j5;if(i==((isNaN(g)?1:0)?2143289344:Ge(g)))return 1;return 0;},
AUJ=()=>{let b;b=new Bb;b.j6=1.0;b.j5=0.0;OR=b;b=new Bb;b.j6=0.0;b.j5=1.0;OQ=b;b=new Bb;b.j6=0.0;b.j5=0.0;Ri=b;};
let Td=F(BO);
function FP(){let a=this;BO.call(a);a.qc=0.0;a.qv=0.0;a.qR=0.0;a.qA=0.0;}
let AJx=F();
let T9=F(BO);
let NJ=F(FP);
let AE1=F();
let Hn=F(BG);
let ACm=null,AFk=null,AOV=null,AJ5=null;
let ARj=()=>{let b,c,d;b=new Hn;b.kg=A(56);b.ka=0;ACm=b;c=new Hn;c.kg=A(57);c.ka=1;AFk=c;d=new Hn;d.kg=A(58);d.ka=2;AOV=d;AJ5=T(Hn,[b,c,d]);};
let SF=F();
let ARv=null;
let R_=()=>{R_=BQ(SF);AHM();};
let AHM=()=>{let b;b=new Bn;CT();ARv=b;};
function GS(){let a=this;BO.call(a);a.y1=null;a.yv=null;}
let Lv=(a,b)=>{let c,d,e,f,g,h,i,j;JJ();if(b>=2&&b<=5){a:{c=B_(b);a.y1=c;d=B_(b);e=d.data;a.yv=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bk;g=new K;g.jZ=G(16);D(g,g.jY,A(59));J(g,g.jY,b,10);h=new I;c=g.jZ;d=c.data;i=g.jY;j=d.length;if(i>=0&&i<=(j-0|0)){h.j0=L(c.data,0,i);f.j1=1;f.j2=1;f.j3=h;B(f);}g=new H;g.j1
=1;g.j2=1;B(g);},
AB5=a=>{let b=new GS();Lv(b,a);return b;};
let RY=F(GS);
let S_=F(BO);
function S1(){let a=this;C.call(a);a.oS=0.0;a.oQ=0.0;a.oR=0.0;a.oU=0.0;a.oV=0.0;a.oT=0.0;}
let AGt=(a,b,c,d,e,f)=>{let g,h,i;a.oR=b;a.oT=c;if(d===0.0){a.oS=e;a.oQ=0.0;a.oU=0.0;a.oV=f;}else{Gx();g=F6.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.oS=i*e;a.oQ= -h*f;a.oU=h*e;a.oV=i*f;}return a;},
AAh=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.oS;d=a.oS;e=c*d;f=b.oQ;g=a.oU;h=e+f*g;i=a.oQ;e=c*i;j=a.oV;e=e+f*j;k=a.oR;l=c*k;m=a.oT;l=l+f*m+b.oR;c=b.oU;d=c*d;f=b.oV;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.oT;a.oS=h;a.oQ=e;a.oR=l;a.oU=d;a.oV=j;a.oT=c;return a;};
let T0=F(BO);
function F4(){let a=this;C.call(a);a.rd=0.0;a.rc=0.0;a.re=0.0;a.rb=0.0;}
let AP$=null,AP7=null,AP8=null,AP9=null,ABh=null;
let ASP=()=>{let b;b=new F4;b.rd=1.0;b.rc=0.0;b.re=0.0;b.rb=0.0;AP$=b;b=new F4;b.rd=0.0;b.rc=1.0;b.re=0.0;b.rb=0.0;AP7=b;b=new F4;b.rd=0.0;b.rc=0.0;b.re=1.0;b.rb=0.0;AP8=b;b=new F4;b.rd=0.0;b.rc=0.0;b.re=0.0;b.rb=1.0;AP9=b;b=new F4;b.rd=0.0;b.rc=0.0;b.re=0.0;b.rb=0.0;ABh=b;};
let O3=F(Gw);
function RB(){BO.call(this);this.yG=0.0;}
let ABw=F();
let ATp=F();
let T5=F(BO);
function VG(){BO.call(this);this.zf=0.0;}
let Te=F(BO);
let Rz=F(Gw);
let Wp=F();
let ADN=null,X$=null,ASe=null;
let Qa=()=>{Qa=BQ(Wp);XS();};
let XS=()=>{let b,c,d,e,f,g;ADN=Q(Bn,15);b=Q(Bn,8);X$=b;c=Q(Bn,9);d=c.data;ASe=c;e=0;f=d.length;while(e<f){g=new Bn;CT();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bn;CT();b[e]=g;e=e+1|0;}};
function Ky(){let a=this;C.call(a);a.wQ=null;a.wZ=null;a.wt=null;a.w1=null;}
let ADi=null;
let NY=()=>{NY=BQ(Ky);AOx();};
let ALB=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.wQ;e=b.kb;f=c.kb;if(e<f)f=e;e=b.kc;g=c.kc;if(e<g)g=e;e=b.kd;h=c.kd;if(e<h)h=e;d.kb=f;d.kc=g;d.kd=h;i=a.wZ;e=b.kb;g=c.kb;if(e>g)g=e;e=b.kc;h=c.kc;if(e>h)h=e;e=b.kd;f=c.kd;if(e>f)f=e;i.kb=g;i.kc=h;i.kd=f;b=a.wt;h=d.kb;j=d.kc;k=d.kd;b.kb=h;b.kc=j;b.kd=k;e=i.kb;f=i.kc;g=i.kd;h=h+e;j=j+f;k=k+g;b.kb=h;b.kc=j;b.kd=k;f=h*0.5;g=j*0.5;e=k*0.5;b.kb=f;b.kc=g;b.kd=e;b=a.w1;g=i.kb;h=i.kc;j=i.kd;b.kb=g;b.kc=h;b.kd=j;e=d.kb;f=d.kc;k=d.kd;g=g-e;e=h-f;f=j-k;b.kb=g;b.kc=e;b.kd=f;return a;},
AOx=()=>{let b;b=new Bn;CT();ADi=b;};
function LV(){let a=this;C.call(a);a.yz=null;a.zO=null;}
let XJ=null;
let Ms=()=>{Ms=BQ(LV);AOI();};
let AOI=()=>{let b;b=new Bn;CT();XJ=b;};
let ABV=F();
let X2=F();
let AMX=F();
let AF6=F();
let TE=F();
let AF3=null;
let Gx=()=>{Gx=BQ(TE);AHc();};
let Lj=b=>{let c;Gx();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AHc=()=>{let b,c,d,e;b=new S5;c=ADl(FB(V(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),V(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(D4(c,Ca))c=E(0, 2147483648);d=Ba(H3(c,Be(c,33)),E(3981806797, 4283543511));d=Ba(H3(d,Be(d,33)),E(444984403, 3301882366));e=H3(d,Be(d,33));d=Ba(H3(e,Be(e,33)),E(3981806797, 4283543511));d=Ba(H3(d,Be(d,33)),E(444984403, 3301882366));d=H3(d,Be(d,33));b.x_=e;b.ya=d;AF3=b;};
let U4=F();
let W9=null,W$=null,W_=null,ABB=null,APG=null,AIr=null,YY=null,YZ=null,AH1=null,AHW=null,AEC=null,AEF=null,AEG=null,AEI=null,AH4=null,AHZ=null,AIE=null,AFR=null,ANu=null,AFt=null,AQH=null,AQG=null,AQE=null,AGy=null;
let QT=()=>{QT=BQ(U4);AB0();};
let AB0=()=>{let b,c;b=new Bn;CT();W9=b;W$=new Bn;W_=new Bn;b=new GE;b.rQ=1;b.m3=B_(16);ABB=b;b=new GE;b.rQ=1;b.m3=B_(16);APG=b;AIr=new Bb;YY=new Bb;YZ=new Bb;AH1=new Bb;AHW=new Bb;AEC=new Bb;AEF=new Bb;AEG=new Bb;AEI=new Bb;b=new JO;c=new Bn;b.mP=c;b.ns=0.0;c.kb=0.0;c.kc=0.0;c.kd=0.0;b.ns=0.0;AH4=b;AHZ=new Bn;AIE=new Bn;AFR=new Bn;ANu=new Bn;AFt=new Bn;AQH=new Bn;AQG=new Bn;AQE=new Bn;AGy=new Bn;};
let Zt=F();
let QW=F(GS);
function LD(){C.call(this);this.lj=null;}
let OU=null,AJa=null,AQg=null,IX=null,Hs=null,LU=null,VF=null,PT=null,AK0=null,ATI=null,AK3=null;
let Eh=()=>{Eh=BQ(LD);Yn();};
let ANK=a=>{let b,c;Eh();b=B_(16);c=b.data;a.lj=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
C8=()=>{let a=new LD();ANK(a);return a;},
C$=(a,b)=>{let c;c=b.data;b=a.lj.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
SV=(a,b)=>{let c,d,e,f,g;Eh();c=OU;d=c.data;e=a.lj.data;f=e[0];g=b.lj.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return C$(a,c);},
La=a=>{let b;b=a.lj.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
Mu=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;La(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.lj.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
ADu=(a,b,c)=>{let d,e,f,g,h,i;Eh();d=IX;e=b.kb;f=b.kc;g=b.kd;d.kb=e;d.kc=f;d.kd=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cz(f);f=d.kb*e;g=d.kc*e;e=d.kd*e;d.kb=f;d.kc=g;d.kd=e;}d=Hs;e=b.kb;f=b.kc;g=b.kd;d.kb=e;d.kc=f;d.kd=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cz(f);f=d.kb*e;g=d.kc*e;e=d.kd*e;d.kb=f;d.kc=g;d.kd=e;}b=Qf(Hs,c);e=b.kb;e=e*e;f=b.kc;e=e+f*f;f=b.kd;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Cz(e);h=b.kb*g;e=b.kc*g;f=b.kd*g;b.kb=h;b.kc=e;b.kd=f;}b=LU;c=Hs;e=c.kb;f=c.kc;g=c.kd;b.kb=e;b.kc=f;b.kd=g;b=Qf(b,
IX);e=b.kb;e=e*e;f=b.kc;e=e+f*f;f=b.kd;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Cz(f);f=b.kb*e;g=b.kc*e;e=b.kd*e;b.kb=f;b.kc=g;b.kd=e;}La(a);i=a.lj.data;b=Hs;i[0]=b.kb;i[4]=b.kc;i[8]=b.kd;b=LU;i[1]=b.kb;i[5]=b.kc;i[9]=b.kd;b=IX;i[2]= -b.kb;i[6]= -b.kc;i[10]= -b.kd;return a;},
AQk=(a,b)=>{let c;c=a.lj.data;c[0]=b.oS;c[1]=b.oU;c[2]=0.0;c[3]=0.0;c[4]=b.oQ;c[5]=b.oV;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.oR;c[13]=b.oT;c[14]=0.0;c[15]=1.0;return a;},
Oy=(b,c)=>{let d,e,f;Eh();d=b.data;c=c.data;e=B_(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Di(e,0,b,0,16);},
AQ4=b=>{Eh();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
ADX=b=>{let c,d,e;Eh();c=B_(16);d=AQ4(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AGn=(b,c,d)=>{let e,f,g,h,i,j,k,l;Eh();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
Yn=()=>{let b;OU=B_(16);b=new Ep;b.of=0.0;b.oc=0.0;b.od=0.0;b.oe=1.0;AJa=b;b=new Ep;b.of=0.0;b.oc=0.0;b.od=0.0;b.oe=1.0;AQg=b;b=new Bn;CT();IX=b;Hs=new Bn;LU=new Bn;VF=new Bn;PT=C8();AK0=new Bn;ATI=new Bn;AK3=new Bn;};
let PS=F(0);
let Mt=F();
function S5(){let a=this;Mt.call(a);a.x_=Ca;a.ya=Ca;}
let Tc=F(BO);
let T6=F(BO);
function M5(){let a=this;C.call(a);a.pJ=null;a.ow=null;a.s2=null;}
let ATB=null,Vw=null,AKu=null;
let IZ=()=>{IZ=BQ(M5);AHY();};
let X8=a=>{let b,c,d,e,f,g;IZ();b=Q(JO,6);c=b.data;a.pJ=b;b=Q(Bn,8);d=b.data;e=new Bn;CT();d[0]=e;d[1]=new Bn;d[2]=new Bn;d[3]=new Bn;d[4]=new Bn;d[5]=new Bn;d[6]=new Bn;d[7]=new Bn;a.ow=b;a.s2=B_(24);f=0;while(f<6){e=new JO;g=new Bn;e.mP=g;e.ns=0.0;g.kb=0.0;g.kc=0.0;g.kd=0.0;e.ns=0.0;c[f]=e;f=f+1|0;}},
AMI=()=>{let a=new M5();X8(a);return a;},
ALi=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;IZ();c=Vw;d=c.data;Di(c,0,a.s2,0,d.length);c=b.lj;e=a.s2;f=0;Eh();g=0;while(g<8){AGn(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.ow.data[f];c=a.s2.data;j=h+1|0;i.kb=c[h];g=j+1|0;i.kc=c[j];h=g+1|0;i.kd=c[g];f=f+1|0;}b=a.pJ.data[0];c=a.ow.data;i=c[1];k=c[0];l=c[2];m=b.mP;n=i.kb;o=i.kc;p=i.kd;m.kb=n;m.kc=o;m.kd=p;q=k.kb;r=k.kc;s=k.kd;t=n-q;u=o-r;p=p-s;m.kb=t;m.kc=u;m.kd=p;q=k.kb-l.kb;r=k.kc-l.kc;s=k.kd-l.kd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kb=n;m.kc=s;m.kd
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kb*q;s=m.kc*q;q=m.kd*q;m.kb=r;m.kc=s;m.kd=q;}k=b.mP;b.ns= -(i.kb*k.kb+i.kc*k.kc+i.kd*k.kd);b=a.pJ.data[1];c=a.ow.data;i=c[4];k=c[5];l=c[7];m=b.mP;n=i.kb;o=i.kc;p=i.kd;m.kb=n;m.kc=o;m.kd=p;q=k.kb;r=k.kc;s=k.kd;t=n-q;u=o-r;p=p-s;m.kb=t;m.kc=u;m.kd=p;q=k.kb-l.kb;r=k.kc-l.kc;s=k.kd-l.kd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kb=n;m.kc=s;m.kd=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kb*q;s=m.kc*q;q=m.kd*q;m.kb=r;m.kc=s;m.kd=q;}k=b.mP;b.ns= -(i.kb*k.kb+i.kc
*k.kc+i.kd*k.kd);b=a.pJ.data[2];c=a.ow.data;i=c[0];k=c[4];l=c[3];m=b.mP;n=i.kb;o=i.kc;t=i.kd;m.kb=n;m.kc=o;m.kd=t;r=k.kb;q=k.kc;s=k.kd;r=n-r;u=o-q;p=t-s;m.kb=r;m.kc=u;m.kd=p;q=k.kb-l.kb;s=k.kc-l.kc;n=k.kd-l.kd;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.kb=o;m.kc=n;m.kd=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kb*q;s=m.kc*q;q=m.kd*q;m.kb=r;m.kc=s;m.kd=q;}k=b.mP;b.ns= -(i.kb*k.kb+i.kc*k.kc+i.kd*k.kd);b=a.pJ.data[3];c=a.ow.data;k=c[5];i=c[1];l=c[6];m=b.mP;n=k.kb;t=k.kc;u=k.kd;m.kb=n;m.kc=t;m.kd=u;q=i.kb;r=i.kc;s
=i.kd;o=n-q;t=t-r;u=u-s;m.kb=o;m.kc=t;m.kd=u;p=i.kb-l.kb;q=i.kc-l.kc;r=i.kd-l.kd;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.kb=s;m.kc=r;m.kd=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kb*q;s=m.kc*q;q=m.kd*q;m.kb=r;m.kc=s;m.kd=q;}i=b.mP;b.ns= -(k.kb*i.kb+k.kc*i.kc+k.kd*i.kd);b=a.pJ.data[4];c=a.ow.data;i=c[2];k=c[3];l=c[6];m=b.mP;n=i.kb;o=i.kc;p=i.kd;m.kb=n;m.kc=o;m.kd=p;q=k.kb;r=k.kc;s=k.kd;t=n-q;u=o-r;p=p-s;m.kb=t;m.kc=u;m.kd=p;q=k.kb-l.kb;r=k.kc-l.kc;s=k.kd-l.kd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kb=n;m.kc=s;m.kd
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kb*q;s=m.kc*q;q=m.kd*q;m.kb=r;m.kc=s;m.kd=q;}k=b.mP;b.ns= -(i.kb*k.kb+i.kc*k.kc+i.kd*k.kd);b=a.pJ.data[5];c=a.ow.data;i=c[4];k=c[0];l=c[1];m=b.mP;n=i.kb;o=i.kc;p=i.kd;m.kb=n;m.kc=o;m.kd=p;q=k.kb;r=k.kc;s=k.kd;t=n-q;u=o-r;p=p-s;m.kb=t;m.kc=u;m.kd=p;q=k.kb-l.kb;r=k.kc-l.kc;s=k.kd-l.kd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kb=n;m.kc=s;m.kd=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kb*q;s=m.kc*q;q=m.kd*q;m.kb=r;m.kc=s;m.kd=q;}k=b.mP;b.ns= -(i.kb*k.kb+i.kc
*k.kc+i.kd*k.kd);},
AHY=()=>{let b,c,d,e,f,g,h,i,j;b=Q(Bn,8);c=b.data;d=new Bn;CT();d.kb=(-1.0);d.kc=(-1.0);d.kd=(-1.0);c[0]=d;d=new Bn;d.kb=1.0;d.kc=(-1.0);d.kd=(-1.0);c[1]=d;d=new Bn;d.kb=1.0;d.kc=1.0;d.kd=(-1.0);c[2]=d;d=new Bn;d.kb=(-1.0);d.kc=1.0;d.kd=(-1.0);c[3]=d;d=new Bn;d.kb=(-1.0);d.kc=(-1.0);d.kd=1.0;c[4]=d;d=new Bn;d.kb=1.0;d.kc=(-1.0);d.kd=1.0;c[5]=d;d=new Bn;d.kb=1.0;d.kc=1.0;d.kd=1.0;c[6]=d;d=new Bn;d.kb=(-1.0);d.kc=1.0;d.kd=1.0;c[7]=d;ATB=b;b=B_(24);e=b.data;Vw=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.kb;j=i+1|0;e[i]=d.kc;f=j+1|0;e[j]=d.kd;h=h+1|0;}AKu=new Bn;};
function Ep(){let a=this;C.call(a);a.of=0.0;a.oc=0.0;a.od=0.0;a.oe=0.0;}
let Rv=null,Ru=null;
let AVD=()=>{let b;b=new Ep;b.of=0.0;b.oc=0.0;b.od=0.0;b.oe=0.0;Rv=b;b=new Ep;b.of=0.0;b.oc=0.0;b.od=0.0;b.oe=0.0;Ru=b;};
function Ol(){let a=this;C.call(a);a.yW=null;a.zn=null;a.y2=null;}
let AKV=F();
function Bn(){let a=this;C.call(a);a.kb=0.0;a.kc=0.0;a.kd=0.0;}
let AA2=null,AA3=null,AA1=null,AJS=null,ARU=null;
let CT=()=>{CT=BQ(Bn);Y7();};
let Qf=(a,b)=>{let c,d,e,f,g,h,i;c=a.kc;d=b.kd;e=c*d;f=a.kd;g=b.kc;h=e-f*g;e=b.kb;f=f*e;i=a.kb;d=f-i*d;c=i*g-c*e;a.kb=h;a.kc=d;a.kd=c;return a;},
ABr=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.lj.data;d=a.kb;e=d*c[3];f=a.kc;e=e+f*c[7];g=a.kd;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.kb=i;a.kc=j;a.kd=d;return a;},
Y7=()=>{let b;b=new Bn;CT();b.kb=1.0;b.kc=0.0;b.kd=0.0;AA2=b;b=new Bn;b.kb=0.0;b.kc=1.0;b.kd=0.0;AA3=b;b=new Bn;b.kb=0.0;b.kc=0.0;b.kd=1.0;AA1=b;b=new Bn;b.kb=0.0;b.kc=0.0;b.kd=0.0;AJS=b;ARU=C8();};
let AE4=F();
let ACZ=F(Dj);
let L4=F(FP);
let ALu=F();
let ZW=F();
let APO=F();
function JO(){let a=this;C.call(a);a.mP=null;a.ns=0.0;}
let Tb=F(BO);
let APS=F();
let Z5=F();
let AML=F();
let APM=F();
let AKe=F(0);
let AFh=F();
let ANC=F();
let F6=null;
let ACA=()=>{let b,c;F6=B_(16384);b=0;while(b<16384){F6.data[b]=JH((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=F6.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function Kq(){let a=this;C.call(a);a.y7=null;a.yf=null;}
let YW=null,AR1=null;
let Mq=()=>{Mq=BQ(Kq);AB_();};
let AB_=()=>{let b,c,d,e,f,g,h,$$je;Cw();b=Bv;c=BE(b,M(DN));b=c<0?null:b.kL.data[c];if(b===null){b=new CB;d=new Bg;d.kq=0;d.j7=Q(C,4);b.kj=d;b.kR=100;a:{try{d=CK(M(DN),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CI(M(DN),null);CM(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}b.kC=d;if(d===null){b=new Bz;d=new K;d.jZ=G(16);D(d,d.jY,A(21));if(M(DN).j$===null)M(DN).j$=U(M(DN).kf.$meta.name);e=M(DN).j$;D(d,d.jY,e);e=new I;f=d.jZ;g=
f.data;c=d.jY;h=g.length;if(c>=0&&c<=(h-0|0)){e.j0=L(f.data,0,c);b.j1=1;b.j2=1;b.j3=e;B(b);}e=new H;e.j1=1;e.j2=1;B(e);}Ce(Bv,M(DN),b);}YW=b;e=new FL;e.pe=1;e.my=X(4);AR1=e;};
function H8(){let a=this;C.call(a);a.oZ=null;a.u9=0.0;a.u$=0.0;a.u8=0.0;a.u6=0.0;a.uU=0;a.vB=0;}
let Nf=(a,b,c,d,e)=>{let f,g,h;f=a.oZ.n3;g=1.0/f.nC;h=1.0/f.nu;a.b_(b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.uU=d;if(e<0)e= -e|0;a.vB=e;},
Pm=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.oZ.n3;g=f.nC;h=f.nu;i=D3(d-b);j=g;i=i*j;a.uU=i+CL(i)*0.5|0;k=D3(e-c);i=h;k=k*i;l=k+CL(k)*0.5|0;a.vB=l;if(a.uU==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.u9=b;a.u$=c;a.u8=d;a.u6=e;};
function Jo(){let a=this;H8.call(a);a.s7=null;a.uw=null;a.zA=0.0;a.zz=0.0;a.xM=0.0;a.wK=0.0;a.Aq=0.0;a.Ap=0.0;a.zR=0.0;a.xY=0.0;a.xX=0.0;a.sq=0;}
let M8=(a,b,c,d,e,f)=>{let g,h,i,j;a.s7=B_(20);g=new BM;g.kX=1.0;g.kW=1.0;g.kV=1.0;g.kY=1.0;CX(g);a.uw=g;a.xY=1.0;a.xX=1.0;a.sq=1;if(b===null){b=new Bk;b.j1=1;b.j2=1;b.j3=A(60);B(b);}a.oZ=b;Nf(a,c,d,e,f);b=a.uw;b.kX=1.0;b.kW=1.0;b.kV=1.0;b.kY=1.0;CX(b);h=Ff(a.uw);i=a.s7.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;Y2(a,h,f);h=a.xM/2.0;j=a.wK/2.0;a.Aq=h;a.Ap=j;a.sq=1;},
AWi=(a,b,c,d,e)=>{let f=new Jo();M8(f,a,b,c,d,e);return f;},
Y2=(a,b,c)=>{let d,e,f,g;a.xM=b;a.wK=c;if(a.sq)return;if(a.zR===0.0&&a.xY===1.0&&a.xX===1.0){d=a.zA;e=d+b;b=a.zz;f=b+c;g=a.s7.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.sq=1;},
APg=(a,b,c,d,e)=>{let f;Pm(a,b,c,d,e);f=a.s7.data;f[3]=b;f[4]=e;f[8]=b;f[9]=c;f[13]=d;f[14]=c;f[18]=d;f[19]=e;};
let Q9=F();
let AMq=F();
let Pe=null;
let AXn=()=>{Pe=new BM;};
function BM(){let a=this;C.call(a);a.kX=0.0;a.kW=0.0;a.kV=0.0;a.kY=0.0;}
let Lk=null,Rl=null,AKG=null,ATe=null,AGk=null,Tl=0.0,Yy=null,ARJ=null,Xr=null,AQb=null,AQ_=null,ALJ=null,APu=null,AEM=null,AD$=null,ANh=null,AR0=null,AP4=null,ATA=null,Ym=null,AGi=null,ATv=null,AJn=null,ASf=null,AQS=null,APm=null,AJj=null,XK=null,AI1=null,AEr=null,AFK=null,ADS=null,AIW=null,AMx=null,AND=null;
let CX=a=>{let b,c;b=a.kX;if(b<0.0)a.kX=0.0;else if(b>1.0)a.kX=1.0;c=a.kW;if(c<0.0)a.kW=0.0;else if(c>1.0)a.kW=1.0;c=a.kV;if(c<0.0)a.kV=0.0;else if(c>1.0)a.kV=1.0;c=a.kY;if(c<0.0)a.kY=0.0;else if(c>1.0)a.kY=1.0;return a;},
Ff=a=>{return Lf(((255.0*a.kY|0)<<24|(255.0*a.kV|0)<<16|(255.0*a.kW|0)<<8|255.0*a.kX|0)&(-16777217));},
Dp=(b,c,d,e)=>{return Lf(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Co=(b,c)=>{b.kX=((c&(-16777216))>>>24|0)/255.0;b.kW=((c&16711680)>>>16|0)/255.0;b.kV=((c&65280)>>>8|0)/255.0;b.kY=(c&255)/255.0;},
W3=()=>{let b;b=new BM;b.kX=1.0;b.kW=1.0;b.kV=1.0;b.kY=1.0;CX(b);Lk=b;b=new BM;Co(b,(-1077952513));Rl=b;b=new BM;Co(b,2139062271);AKG=b;b=new BM;Co(b,1061109759);ATe=b;b=new BM;b.kX=0.0;b.kW=0.0;b.kV=0.0;b.kY=1.0;CX(b);AGk=b;Tl=Ff(Lk);b=new BM;b.kX=0.0;b.kW=0.0;b.kV=0.0;b.kY=0.0;CX(b);Yy=b;b=new BM;b.kX=0.0;b.kW=0.0;b.kV=1.0;b.kY=1.0;CX(b);ARJ=b;b=new BM;b.kX=0.0;b.kW=0.0;b.kV=0.5;b.kY=1.0;CX(b);Xr=b;b=new BM;Co(b,1097458175);AQb=b;b=new BM;Co(b,1887473919);AQ_=b;b=new BM;Co(b,(-2016482305));ALJ=b;b=new BM;b.kX
=0.0;b.kW=1.0;b.kV=1.0;b.kY=1.0;CX(b);APu=b;b=new BM;b.kX=0.0;b.kW=0.5;b.kV=0.5;b.kY=1.0;CX(b);AEM=b;b=new BM;Co(b,16711935);AD$=b;b=new BM;Co(b,2147418367);ANh=b;b=new BM;Co(b,852308735);AR0=b;b=new BM;Co(b,579543807);AP4=b;b=new BM;Co(b,1804477439);ATA=b;b=new BM;Co(b,(-65281));Ym=b;b=new BM;Co(b,(-2686721));AGi=b;b=new BM;Co(b,(-626712321));ATv=b;b=new BM;Co(b,(-5963521));AJn=b;b=new BM;Co(b,(-1958407169));ASf=b;b=new BM;Co(b,(-759919361));AQS=b;b=new BM;Co(b,(-1306385665));APm=b;b=new BM;Co(b,(-16776961));AJj
=b;b=new BM;Co(b,(-13361921));XK=b;b=new BM;Co(b,(-8433409));AI1=b;b=new BM;Co(b,(-92245249));AEr=b;b=new BM;Co(b,(-9849601));AFK=b;b=new BM;b.kX=1.0;b.kW=0.0;b.kV=1.0;b.kY=1.0;CX(b);ADS=b;b=new BM;Co(b,(-1608453889));AIW=b;b=new BM;Co(b,(-293409025));AMx=b;b=new BM;Co(b,(-1339006721));AND=b;};
function NW(){let a=this;C.call(a);a.ng=0;a.qh=0;a.ph=null;a.pQ=null;a.o8=null;a.pj=null;a.qP=0.0;}
let H9=0.0;
let AMr=(a,b,c,d)=>{if(b!==null&&!(!d&&a.o8===b)){B9.cg(a.ng,10242,b.rS);a.o8=b;}if(c!==null&&!(!d&&a.pj===c)){B9.cg(a.ng,10243,c.rS);a.pj=c;}},
Xl=(a,b,c,d)=>{if(b!==null&&!(!d&&a.ph===b)){B9.cg(a.ng,10241,b.n$);a.ph=b;}if(c!==null&&!(!d&&a.pQ===c)){B9.cg(a.ng,10240,c.n$);a.pQ=c;}},
AEU=()=>{let b,c,d,e,f;b=H9;if(b>0.0)return b;if(!(B3.pZ.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){H9=1.0;return 1.0;}if(!Da){c=B_(16);d=c.data.length;e=new H5;f=0+d|0;e.ko=(-1);e.kx=d;e.j8=d;e.ke=0;e.j8=f;e.qN=0;e.rm=0;e.qf=c;}else{e=new CY;c=BI(64);e.ko=(-1);e.kx=64;e.j8=64;e.k7=Cp;e.lx=0;e.k1=c;e.ke=0;e.j8=64;e.mc=1;e.lI=0;e.k7=De();e=E9(e);}CC(e,0);CQ(e,e.kx);Bq.cl(34047,e);b=R0(e,0);H9=b;return b;},
AR5=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.pt)P4(c);if(O1===UR){c=new S;c.j1=1;c.j2=1;c.j3=A(61);B(c);}if(!c.pt){e=new S;e.j1=1;e.j2=1;e.j3=A(62);B(e);}c.pt=0;f=c.qS;c.qS=null;g=1;h=c.p4;e=f.lv;if(h===(e===null?Fz:H_(e.lT)))e=f;else{e=new FH;h=f.lv;JL(e,h===null?f.me:h.l_,h===null?f.mi:h.l$,c.p4);h=Jb;e.rl=h;i=e.lv;if(i===null){Fc(e);h=e.l5;i=Bw(Fk.kg);h.globalCompositeOperation=i;}else{j=h!==h?1:0;MJ(i.l8,j);}i=f.lv;k=i===null?f.me:i.l_;l=i===null?f.mi:i.l$;h=e.lv;if(h===null){Fc(f);J9(e,
f.om,0,0,k,l,0,0,k,l);}else{m=i.l8;n=h.l8;JU(m,n,0,0,k,l,0,0,k,l);}if(f.oF){e=new S;e.j1=1;e.j2=1;e.j3=A(63);B(e);}EC();GM(FN,f.p8);h=f.lv;if(h!==null)H1(h.l8);f.oF=1;g=1;}B9.cw(3317,1);if(c.wF){c=e.lv;ANU(b,e,c===null?e.me:c.l_,c===null?e.mi:c.l$);}else{c=B9;h=e.lv;if(h===null)o=6408;else a:{j=h.lT;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new S;e=new K;e.jZ=G(16);B$(e,e.jY,Cl(A(64)));J(e,e.jY,j,10);h=new I;p=e.jZ;q=p.data;d=e.jY;j
=q.length;if(d>=0&&d<=(j-0|0)){h.j0=L(p.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}r=h===null?e.me:h.l_;k=h===null?e.mi:h.l$;if(h===null)m=6408;else b:{l=h.lT;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new S;e=new K;e.jZ=G(16);Ec(e,e.jY,A(64));J(e,e.jY,l,10);h=new I;p=e.jZ;q=p.data;d=e.jY;j=q.length;if(d>=0&&d<=(j-0|0)){h.j0=L(p.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(h===null)l=
5121;else c:{l=h.lT;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new S;e=new K;e.jZ=G(16);B$(e,e.jY,Cl(A(64)));J(e,e.jY,l,10);h=new I;p=e.jZ;q=p.data;d=e.jY;j=q.length;if(d>=0&&d<=(j-0|0)){h.j0=L(p.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}l=5121;}c.cz(b,d,o,r,k,0,m,l,e.qI);}if(g){if(e.oF){e=new S;e.j1=1;e.j2=1;e.j3=A(63);B(e);}EC();GM(FN,e.p8);c=e.lv;if(c!==null)H1(c.l8);e.oF=1;}},
AVy=()=>{H9=0.0;};
function HU(){NW.call(this);this.n3=null;}
let EQ=null;
let JS=(a,b)=>{let c,d;a.n3=b;if(!b.pt)P4(b);B9.cA(a.ng,a.qh);AR5(3553,b,0);Xl(a,a.ph,a.pQ,1);AMr(a,a.o8,a.pj,1);c=a.qP;d=AEU();if(d!==1.0){c=AN8(c,d);Bq.cG(3553,34046,c);a.qP=c;}B9.cA(a.ng,0);},
AKf=a=>{let b,c,d,e,f,g,h,i;b=a.n3;if(!(b instanceof K4)){b=a;if(!b.$id$){c=E0();b.$id$=c;}d=Bh(a.$id$,4);b=new K;b.jZ=G(16);D(b,b.jY,A(1));e=b.jY;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);return c;}b=new H;b.j1=1;b.j2=1;B(b);}c=b;if(!c.$id$){d=E0();c.$id$=d;}d=Bh(b.$id$,4);b=new K;b.jZ=G(16);D(b,b.jY,A(1));e=b.jY;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);return c;}b=new H;b.j1
=1;b.j2=1;B(b);},
ANj=()=>{let b,c,d,e;b=new I0;c=JW(16);b.pb=0;d=Q(FI,c);e=d.data;b.ms=d;b.td=0.75;b.qg=e.length*0.75|0;EQ=b;};
function Bg(){let a=this;C.call(a);a.j7=null;a.j4=0;a.kq=0;a.kA=null;}
let PE=a=>{a.kq=1;a.j7=Q(C,16);},
AXs=()=>{let a=new Bg();PE(a);return a;},
VW=(a,b)=>{a.kq=1;a.j7=Q(C,b);},
AWE=a=>{let b=new Bg();VW(b,a);return b;},
P0=(a,b,c)=>{a.kq=b;a.j7=Q(C,c);},
AUD=(a,b)=>{let c=new Bg();P0(c,a,b);return c;},
If=(a,b,c,d)=>{a.kq=b;if(d===null){d=new Df;d.j1=1;d.j2=1;B(d);}if(d===M(Bo)){d=new Bk;d.j1=1;d.j2=1;B(d);}if(c>=0){a.j7=DY(d.kf,c);return;}d=new D1;d.j1=1;d.j2=1;B(d);},
AUn=(a,b,c)=>{let d=new Bg();If(d,a,b,c);return d;},
QJ=(a,b)=>{a.kq=1;if(b===null){b=new Df;b.j1=1;b.j2=1;B(b);}if(b!==M(Bo)){a.j7=DY(b.kf,16);return;}b=new Bk;b.j1=1;b.j2=1;B(b);},
AUK=a=>{let b=new Bg();QJ(b,a);return b;},
Vf=(a,b)=>{let c,d,e,f,g;c=b.kq;d=b.j4;e=b.j7.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BC;f.kf=e;g=f;e.classObject=g;}}g=Ei(f);a.kq=c;if(g===null){b=new Df;b.j1=1;b.j2=1;B(b);}if(g===M(Bo)){b=new Bk;b.j1=1;b.j2=1;B(b);}if(d>=0){g=DY(g.kf,d);a.j7=g;c=b.j4;a.j4=c;Gr(b.j7,0,g,0,c);return;}b=new D1;b.j1=1;b.j2=1;B(b);},
AT5=a=>{let b=new Bg();Vf(b,a);return b;},
UU=(a,b)=>{LN(a,1,b,0,b.data.length);},
AWO=a=>{let b=new Bg();UU(b,a);return b;},
LN=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BC;g.kf=f;h=g;f.classObject=h;}}h=Ei(g);a.kq=b;if(h===null){h=new Df;h.j1=1;h.j2=1;B(h);}if(h===M(Bo)){h=new Bk;h.j1=1;h.j2=1;B(h);}if(e>=0){h=DY(h.kf,e);a.j7=h;a.j4=e;Gr(c,d,h,0,e);return;}h=new D1;h.j1=1;h.j2=1;B(h);},
AVQ=(a,b,c,d)=>{let e=new Bg();LN(e,a,b,c,d);return e;},
Bf=(a,b)=>{let c,d,e,f;c=a.j7;d=c.data;e=a.j4;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=II(a,e);}c=c.data;f=a.j4;a.j4=f+1|0;c[f]=b;},
DK=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.j4)return a.j7.data[b];c=new H;d=new K;d.jZ=G(16);D(d,d.jY,A(18));J(d,d.jY,b,10);D(d,d.jY,A(19));b=a.j4;J(d,d.jY,b,10);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}d=new H;d.j1=1;d.j2=1;B(d);},
SL=(a,b,c)=>{let d,e,f,g,h,i;d=a.j4;if(b>d){c=new H;e=new K;e.jZ=G(16);D(e,e.jY,A(65));J(e,e.jY,b,10);D(e,e.jY,A(66));f=a.j4;J(e,e.jY,f,10);g=new I;h=e.jZ;i=h.data;d=e.jY;f=i.length;if(d>=0&&d<=(f-0|0)){g.j0=L(h.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}h=a.j7;if(d==h.data.length){d=d*1.75|0;if(8>d)d=8;h=II(a,d);}if(!a.kq){i=h.data;i[a.j4]=i[b];}else Di(h,b,h,b+1|0,a.j4-b|0);h=h.data;a.j4=a.j4+1|0;h[b]=c;},
Li=(a,b,c)=>{let d,e,f;a:{d=a.j7;e=a.j4-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(f[e]===b)break;e=c;}return 1;}while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(b.cN(f[e]))return 1;e=c;}}return 0;},
Eb=(a,b,c)=>{let d,e,f;a:{d=a.j7;if(!c&&b!==null){e=0;f=a.j4;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.j4;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
ID=(a,b,c)=>{let d,e,f;a:{d=a.j7;if(!(!c&&b!==null)){e=0;f=a.j4;while(e<f){if(d.data[e]===b){CO(a);Dv(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.j4;while(true){if(e>=f)break a;if(b.cN(d.data[e])){CO(a);Dv(a,e);return 1;}e=e+1|0;}}}return 0;},
Dv=(a,b)=>{let c,d,e,f,g,h,i;c=a.j4;if(b<c){d=a.j7;e=d.data;f=e[b];g=c-1|0;a.j4=g;if(!a.kq)e[b]=e[g];else Di(d,b+1|0,d,b,g-b|0);e[a.j4]=null;return f;}f=new H;h=new K;h.jZ=G(16);D(h,h.jY,A(18));J(h,h.jY,b,10);D(h,h.jY,A(19));b=a.j4;J(h,h.jY,b,10);i=new I;d=h.jZ;e=d.data;g=h.jY;c=e.length;if(g>=0&&g<=(c-0|0)){i.j0=L(d.data,0,g);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;f.j1=1;f.j2=1;B(f);},
QC=a=>{let b,c,d,e,f,g;b=a.j7;c=0;d=a.j4;e=null;if(c>d){e=new Bk;e.j1=1;e.j2=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.j4=0;},
II=(a,b)=>{let c,d,e,f,g,h;c=a.j7;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BC;e.kf=d;f=e;d.classObject=f;}}e=Ei(e);if(e===null){e=new Df;e.j1=1;e.j2=1;B(e);}if(e===M(Bo)){e=new Bk;e.j1=1;e.j2=1;B(e);}if(b<0){e=new D1;e.j1=1;e.j2=1;B(e);}e=DY(e.kf,b);d=e.data;g=a.j4;h=d.length;if(g<h)h=g;Gr(c,0,e,0,h);a.j7=e;return e;},
Gh=a=>{let b;if(CA){b=new Cr;b.kQ=1;b.kU=a;b.lX=1;return b;}if(a.kA===null){b=new C0;b.l9=a;b.ma=1;a.kA=b;}return CJ(a.kA);},
Sj=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.kq)return 0;if(!(b instanceof Bg))return 0;c=b;if(!c.kq)return 0;d=a.j4;if(d!=c.j4)return 0;e=a.j7;f=c.j7;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cN(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
Vn=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.j4)return A(67);b=a.j7;c=new Sa;d=G(32);e=d.data;c.mO=d;f=c.lZ;if(f==e.length)Ga(c,f+1|0);b=b.data;e=c.mO.data;g=c.lZ;c.lZ=g+1|0;e[g]=91;h=b[0];if(h===null)JG(c);else{h=h.T();if(h===null)JG(c);else{i=h.j0.length;j=c.lZ+i|0;if(j>c.mO.data.length)Ga(c,j);Ld(h,0,i,c.mO,c.lZ);c.lZ=j;}}i=1;while(i<a.j4){g=A(47).j0.length;k=c.lZ+g|0;if(k>c.mO.data.length)Ga(c,k);Ld(A(47),0,g,c.mO,c.lZ);c.lZ=k;h=b[i];if(h===null)JG(c);else{h=h.T();if(h===null)JG(c);else{k=h.j0.length;j=c.lZ+k|0;if
(j>c.mO.data.length)Ga(c,j);Ld(h,0,k,c.mO,c.lZ);c.lZ=j;}}i=i+1|0;}f=c.lZ;if(f==c.mO.data.length)Ga(c,f+1|0);a:{b=c.mO;e=b.data;g=c.lZ;f=g+1|0;c.lZ=f;e[g]=93;if(!f)c=A(68);else{c=new I;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.j0=L(b.data,0,f);}return c;}c=new H;c.j1=1;c.j2=1;B(c);};
function J6(){let a=this;C.call(a);a.uz=0;a.pc=null;a.kL=null;a.wp=0.0;a.vk=0;a.sZ=0;a.sV=0;}
let QE=null;
let AJE=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wp=c;d=JD(b,c);a.vk=d*c|0;b=d-1|0;a.sV=b;a.sZ=Fa(V(b));a.pc=Q(C,d);a.kL=Q(C,d);return;}e=new Bk;f=new K;f.jZ=G(16);D(f,f.jY,A(69));E$(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
EP=(a,b)=>{let c=new J6();AJE(c,a,b);return c;},
BE=(a,b)=>{let c,d,e;if(b===null){c=new Bk;c.j1=1;c.j2=1;c.j3=A(70);B(c);}d=a.pc;e=Bl(Be(Ba(V(b.cT()),E(2135587861, 2654435769)),a.sZ));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cN(b))break;e=(e+1|0)&a.sV;}return e;},
Ce=(a,b,c)=>{let d,e,f;d=BE(a,b);if(d>=0){e=a.kL.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.pc.data;e[d]=b;a.kL.data[d]=c;d=a.uz+1|0;a.uz=d;if(d>=a.vk)ABn(a,e.length<<1);return null;},
ABn=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.pc.data.length;a.vk=b*a.wp|0;d=b-1|0;a.sV=d;a.sZ=Fa(V(d));e=a.pc;f=a.kL;a.pc=Q(C,b);a.kL=Q(C,b);if(a.uz>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.pc;b=Bl(Be(Ba(V(g.cT()),E(2135587861, 2654435769)),a.sZ));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.sV;}j[b]=g;a.kL.data[b]=h;}d=d+1|0;}}}},
AU2=()=>{QE=new C;};
let AFP=F(J6);
let ASA=F();
function DV(){let a=this;C.call(a);a.mF=0;a.mt=0;a.mN=0;a.mE=0;a.n0=0;a.mJ=null;a.oh=0;a.pv=0;}
let AKn=(a,b)=>{if(!(b instanceof DV))return 0;return AFx(a,b);},
AFx=(a,b)=>{let c,d,e;a:{if(b!==null&&a.mF==b.mF&&a.mt==b.mt&&a.mE==b.mE&&a.mN==b.mN){c=a.mJ;d=b.mJ;if(c===d)e=1;else if(!(d instanceof I))e=0;else{d=d;e=c.j0!==d.j0?0:1;}if(e&&a.oh==b.oh){e=1;break a;}}e=0;}return e;};
let ASS=F();
let AHl=F();
let AKS=F();
let AIR=F();
let RJ=F();
let Xq=null;
let SZ=()=>{SZ=BQ(RJ);AHt();};
let AHt=()=>{let b,c,d;b=new Ky;NY();c=new Bn;CT();b.wQ=c;d=new Bn;b.wZ=d;b.wt=new Bn;b.w1=new Bn;c.kb=0.0;c.kc=0.0;c.kd=0.0;d.kb=0.0;d.kc=0.0;d.kd=0.0;ALB(b,c,d);Xq=b;};
let Yl=F();
let AJJ=F();
let AIs=F();
let AJe=F();
let APn=F();
let AFc=F();
let AQV=F();
let AGY=F();
let AAd=F();
let ABC=F();
let JN=F(BG);
let ATf=null,AQY=null,AEx=null;
let AFI=()=>{let b,c;b=new JN;b.kg=A(71);b.ka=0;ATf=b;c=new JN;c.kg=A(72);c.ka=1;AQY=c;AEx=T(JN,[b,c]);};
let AJO=F();
let TL=F(0);
let Dz=F();
let Yw=F(Dz);
let Yu=F(Dz);
let AHT=F(Dz);
let ACR=F(Dz);
let AMZ=F(Dz);
let LZ=F(Dz);
let ACF=F(LZ);
let HB=F(0);
let ADQ=F();
let Fh=F(0);
let AMJ=F();
let AQR=F();
let AA4=F();
let EI=F();
let ALD=F(EI);
let Ht=F(EI);
let DP=F(Ht);
let AD9=null;
let Q8=()=>{Q8=BQ(DP);Y3();};
let Y3=()=>{let b;b=new Bn;CT();AD9=b;};
let AMp=F();
let APl=F(DP);
let AHa=F(DP);
let ARG=F(EI);
let RA=null;
let AVe=()=>{RA=B_(3);};
let Lm=F(EI);
let Ye=F(Lm);
let ACB=F(DP);
let G1=F(Ht);
let AIL=F(G1);
let AG9=F(DP);
let AJh=F(DP);
let AIJ=F(G1);
let Hr=F(BG);
let AIx=null,ALy=null,AD_=null,ABp=null;
let AKO=()=>{let b,c,d;b=new Hr;b.kg=A(73);b.ka=0;AIx=b;c=new Hr;c.kg=A(74);c.ka=1;ALy=c;d=new Hr;d.kg=A(75);d.ka=2;AD_=d;ABp=T(Hr,[b,c,d]);};
let FS=F();
let MW=F(FS);
let WS=F(MW);
let HJ=F(BG);
let AQX=null,ARy=null,Wz=null,ARO=null;
let AGD=()=>{let b,c,d;b=new HJ;b.kg=A(76);b.ka=0;AQX=b;c=new HJ;c.kg=A(77);c.ka=1;ARy=c;d=new HJ;d.kg=A(78);d.ka=2;Wz=d;ARO=T(HJ,[b,c,d]);};
let C2=F(FS);
let H$=F(C2);
let AAQ=F();
let GD=F(C2);
let APX=null,APW=null,APY=null,AQ5=null;
let Uw=()=>{Uw=BQ(GD);AId();};
let AId=()=>{let b;b=new Bn;CT();APX=b;APW=new Bn;APY=new Bn;b=new Ep;b.of=0.0;b.oc=0.0;b.od=0.0;b.oe=1.0;AQ5=b;};
let Ew=F(GD);
let FY=F(Ew);
let ADM=F(FY);
let HH=F(C2);
let ATw=F(HH);
let APi=F(C2);
let Fw=F(C2);
let Yo=F(Fw);
let Hd=F(C2);
let ADD=F(Ew);
let AF2=F(Ew);
let KL=F(C2);
let ALE=F(KL);
let ZJ=F(Fw);
let AHj=F(FY);
let ALv=F(C2);
let AJs=F(Fw);
let ALK=F(C2);
let ANw=F(GD);
let AF9=F(Dj);
let AAp=F(Dj);
let AAH=F(Ew);
let AMd=F(Hd);
let ARI=F(H$);
let AKo=F(H$);
let ANg=F(Hd);
let AIf=F(FY);
let ASp=F(HH);
let EG=F(FS);
let AIQ=F(EG);
let FC=F();
let AMD=F(FC);
let AN0=F(EG);
let APh=F(EG);
let AQi=F(FC);
let ADk=F(EG);
let APo=F(FC);
let Kn=F(0);
let Oa=F(0);
function BC(){let a=this;C.call(a);a.j$=null;a.kf=null;a.qm=null;}
let UC=0;
let AWp=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BC;c.kf=b;d=c;b.classObject=d;}return c;},
AIH=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=E0();b.$id$=c;}d=a.$id$;b=new K;b.jZ=G(16);D(b,b.jY,A(79));J(b,b.jY,d,10);c=new I;e=b.jZ;f=e.data;g=b.jY;d=f.length;if(g>=0&&g<=(d-0|0)){c.j0=L(e.data,0,g);return c;}b=new H;b.j1=1;b.j2=1;B(b);},
Ei=a=>{let b,c,d;b=a.kf.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kf=b;d=c;b.classObject=d;}}return c;},
AHL=()=>{DO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){S8(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Bo,callable:function(obj,args){J1();OL();return null;}}];DN.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){Q0(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[DN],returnType:Bo,callable:function(obj,
args){AUc(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){AVU(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return AUl(obj);}}];Y.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){Ss(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,
args){Qg(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AVt(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AWh(obj,DI(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AXW(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,
args){AU0(obj,DI(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Dn,callable:function(obj,args){return AWe(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Dn],returnType:Bo,callable:function(obj,args){AV$(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AXl(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,
args){AVu(obj,B6(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AWc(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args){AVb(obj,B6(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AVz(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable
:function(obj,args){AUg(obj,B6(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:KG,callable:function(obj,args){return AVP(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[KG],returnType:Bo,callable:function(obj,args){AWx(obj,ATV(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AT3(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:CD,callable:function(obj,args){return AWF(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AXK(obj,DI(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AUH(obj,DI(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CE,callable:function(obj,args){return AXh(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[CE],returnType:Bo,callable:function(obj,args){AT2(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[CE,Bb],returnType:Bb,callable:function(obj,args){return AXm(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AVI(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AVf(obj
);}},{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Ci],returnType:Bo,callable:function(obj,args){AW6(obj,DB(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return OM(obj);}}];Bg.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){PE(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args)
{VW(obj,B6(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ci,BV],returnType:Bo,callable:function(obj,args){P0(obj,DB(args[0]),B6(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ci,BV,BC],returnType:Bo,callable:function(obj,args){If(obj,DB(args[0]),B6(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BC],returnType:Bo,callable:function(obj,args){QJ(obj,args[0]);return null;}},{name:"<init>",modifiers:
0,accessLevel:3,parameterTypes:[Bg],returnType:Bo,callable:function(obj,args){Vf(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[D7(C)],returnType:Bo,callable:function(obj,args){UU(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ci,D7(C),BV,BV],returnType:Bo,callable:function(obj,args){LN(obj,DB(args[0]),args[1],B6(args[2]),B6(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Bo,callable:function(obj,
args){Bf(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Bo,callable:function(obj,args){AVh(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Bo,callable:function(obj,args){AXa(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Bo,callable:function(obj,args){AXB(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers
:0,accessLevel:3,parameterTypes:[Bg],returnType:Bo,callable:function(obj,args){AVE(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bg,BV,BV],returnType:Bo,callable:function(obj,args){AT7(obj,args[0],B6(args[1]),B6(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[D7(C)],returnType:Bo,callable:function(obj,args){AVo(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[D7(C),BV,BV],returnType:Bo,callable:function(obj,
args){AUx(obj,args[0],B6(args[1]),B6(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return DK(obj,B6(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bo,callable:function(obj,args){AWJ(obj,B6(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bo,callable:function(obj,args){SL(obj,B6(args[0]),args[1]);return null;}},{name:"insertRange",modifiers
:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bo,callable:function(obj,args){AWZ(obj,B6(args[0]),B6(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bo,callable:function(obj,args){AXV(obj,B6(args[0]),B6(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Ci],returnType:Ci,callable:function(obj,args){return Li(obj,args[0],DB(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bg,Ci],returnType:Ci,callable
:function(obj,args){return AVM(obj,args[0],DB(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bg,Ci],returnType:Ci,callable:function(obj,args){return AWd(obj,args[0],DB(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ci],returnType:BV,callable:function(obj,args){return Eb(obj,args[0],DB(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ci],returnType:BV,callable:function(obj,args){return AWC(obj,args[0],DB(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Ci],returnType:Ci,callable:function(obj,args){return ID(obj,args[0],DB(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return Dv(obj,B6(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bo,callable:function(obj,args){AUW(obj,B6(args[0]),B6(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bg,Ci],returnType:Ci,callable:function(obj,
args){return AXD(obj,args[0],DB(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AUa(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AXy(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AXU(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AXi(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AUB(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){QC(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D7(C),callable:function(obj,args){return AWD(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:D7(C),callable:function(obj,args){return AW_(obj,B6(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:D7(C),callable:function(obj,args){return AXv(obj,B6(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BV],returnType:D7(C),callable:function(obj,args){return II(obj,B6(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){AW5(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[Ib],returnType:Bo,callable:function(obj,args){AXG(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[Ib,BV],returnType:C,callable:function(obj,args){return AW9(obj,args[0],B6(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[Ib,BV],returnType:BV,callable:function(obj,args){return AWV(obj,args[0],B6(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){AW7(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable
:function(obj,args){ATT(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cr,callable:function(obj,args){return Gh(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[N4],returnType:DG,callable:function(obj,args){return AXS(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args){AUb(obj,B6(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return AWj(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D7(C),callable:function(obj,args){return AT_(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BC],returnType:D7(C),callable:function(obj,args){return AUw(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AUq(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ci,callable:function(obj,
args){return Sj(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ci,callable:function(obj,args){return AXe(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return Vn(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[I],returnType:I,callable:function(obj,args){return AW0(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BC],returnType:Bg,callable:function(obj,
args){return AWN(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Ci,BV,BC],returnType:Bg,callable:function(obj,args){return AXu(DB(args[0]),B6(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[D7(C)],returnType:Bg,callable:function(obj,args){return AUm(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:HQ,callable:function(obj,args){return AUz(obj);}}];DR.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bo,callable:function(obj,args){Uh(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){OZ(obj);return null;}}];Dd.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){P9(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP],returnType:Bo,callable:function(obj,args){N2(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,
BP],returnType:Bo,callable:function(obj,args){V5(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP],returnType:Bo,callable:function(obj,args){Vz(obj,args[0],args[1],args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP,BP],returnType:Bo,callable:function(obj,args){Wk(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP,BP,BP],returnType:Bo,callable:function(obj,
args){R8(obj,args[0],args[1],args[2],args[3],args[4]);return null;}},{name:"act",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Ci,callable:function(obj,args){return Od(obj,DI(args[0]));}},{name:"restart",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){UO(obj);return null;}}];Do.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){O4(obj);return null;}},{name:"begin",modifiers:0,accessLevel:2,parameterTypes
:[],returnType:Bo,callable:function(obj,args){S3(obj);return null;}},{name:"update",modifiers:0,accessLevel:2,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){Sm(obj,DI(args[0]));return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){Ur(obj);return null;}},{name:"setStartPosition",modifiers:0,accessLevel:3,parameterTypes:[CD,CD],returnType:Bo,callable:function(obj,args){AWu(obj,DI(args[0]),DI(args[1]));return null;}},{name:"setPosition",modifiers
:0,accessLevel:3,parameterTypes:[CD,CD],returnType:Bo,callable:function(obj,args){AVv(obj,DI(args[0]),DI(args[1]));return null;}},{name:"setPosition",modifiers:0,accessLevel:3,parameterTypes:[CD,CD,BV],returnType:Bo,callable:function(obj,args){AWU(obj,DI(args[0]),DI(args[1]),B6(args[2]));return null;}},{name:"getX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AVl(obj);}},{name:"setX",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,
args){AUN(obj,DI(args[0]));return null;}},{name:"getY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AXO(obj);}},{name:"setY",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AV1(obj,DI(args[0]));return null;}},{name:"getStartX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AVZ(obj);}},{name:"getStartY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,
args){return AW2(obj);}},{name:"getAlignment",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AVx(obj);}},{name:"setAlignment",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args){AU4(obj,B6(args[0]));return null;}}];C1.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){R4(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable
:function(obj,args){Wg(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AWq(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Ci],returnType:Bo,callable:function(obj,args){ATZ(obj,DB(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:GF,callable:function(obj,args){return AUF(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:Bo,callable
:function(obj,args){AWL(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CE,callable:function(obj,args){return AXJ(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[CE],returnType:Bo,callable:function(obj,args){AVp(obj,args[0]);return null;}}];},
NT=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.kf.$meta.primitive?1:0)&&!(a.kf.$meta.item===null?0:1)){if(a.qm===null){if(!UC){UC=1;AHL();}b=a.kf.$meta.methods;a.qm=Q(Hy,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof FM())?e:e[Br]===true?e:e.kE;g=U(f.name);if(g===A(80))h=1;else if(!(A(80) instanceof I))h=0;else{e=A(80);h=g.j0!==e.j0?0:1;}if(h){g=f.parameterTypes;i=Q(BC,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BC;e.kf
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.qm.data;h=c+1|0;e=new Hy;g=U(f.name);k=f.modifiers;n=f.accessLevel;f=Dt(f.callable,"call");e.lD=a;e.yZ=g;e.rv=k;e.ss=n;e.oM=i;e.uV=f;j[c]=e;c=h;}d=d+1|0;}i=a.qm;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BC;e.kf=b;f=e;b.classObject=f;}}e=Ei(e);if(e===null){e=new Df;e.j1=1;e.j2=1;B(e);}if(e===M(Bo)){e=new Bk;e.j1=1;e.j2=1;B(e);}if(c<0){e=new D1;e.j1=1;e.j2=1;B(e);}i=i.data;f=DY(e.kf,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.qm=f;}return a.qm.p();}return Q(Hy,0);},
ARV=a=>{let b,c,d,e,f,g,h,i,j,k;b=(NT(a)).data;c=b.length;d=Q(Hy,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Lb(h.rv,h.ss)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=BU(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BC;h.kf=j;k=h;j.classObject=k;}}j=Ei(h);if(j===null){h=new Df;h.j1=1;h.j2=1;B(h);}if(j===M(Bo)){h=new Bk;h.j1=1;h.j2=1;B(h);}if(f<0){h=new D1;h.j1=1;h.j2=1;B(h);}k=DY(j.kf,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
AOU=(a,b)=>{let c,d,e,f;c=(NT(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Hj;f.j1=1;f.j2=1;B(f);}f=c[e];if(UL(f.oM.p(),b))break;e=e+1|0;}return f;},
AOS=(a,b)=>{let c,d,e,f,g;c=(NT(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Hj;f.j1=1;f.j2=1;B(f);}f=c[e];g=!(Lb(f.rv,f.ss)&1)?0:1;if(g&&UL(f.oM.p(),b))break;e=e+1|0;}return f;};
let ABJ=F();
let AMw=b=>{let c,d,e,f,g;if(b===null)return null;c=BI(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof FM())?g:g[Br]===true?g:g.kE;e=e+1|0;}return c;},
B5=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
Dt=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let AAw=F();
let Xi=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
MA=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(MA(d[e],c))return 1;e=e+1|0;}return 0;},
EF=b=>{setTimeout(()=>{AWG(O6)(b);},0);},
O6=b=>{b.c3();},
Ne=(b,c)=>{setTimeout(()=>{O6(b);},c);},
AHu=()=>{return [];};
function Dq(){let a=this;C.call(a);a.j3=null;a.lm=null;a.j1=0;a.j2=0;a.yO=null;}
let R=a=>{a.j1=1;a.j2=1;},
AW3=()=>{let a=new Dq();R(a);return a;},
ND=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
AUo=a=>{let b=new Dq();ND(b,a);return b;},
Si=(a,b,c)=>{a.j1=1;a.j2=1;a.j3=b;a.lm=c;},
AWw=(a,b)=>{let c=new Dq();Si(c,a,b);return c;},
Bi=a=>{return a;},
AOe=a=>{return a.j3;},
AVm=a=>{return a.c4();},
AWT=a=>{let b;b=a.lm;if(b===a)b=null;return b;},
AVB=a=>{let b,c;if(Dh===null){b=new FG;c=new Ck;c.lH=BI(32);b.l2=c;c=new K;Bt(c);c.jZ=G(16);b.lM=c;b.lL=G(32);b.lN=0;b.lO=Cg;Dh=b;}J4(a,Dh);},
J4=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BC;d.kf=c;e=d;c.classObject=e;}}if(d.j$===null)d.j$=U(d.kf.$meta.name);DA(Bw(d.j$));d=a.c4();if(d!==null){c=new K;c.jZ=G(16);D(c,c.jY,A(81));D(c,c.jY,d);e=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);DA(Bw(e));}else{b=new H;b.j1=1;b.j2=1;B(b);}}a:{DA("\n");f=a.yO;if(f!==null){f=f.data;j=f.length;i=0;while(true){if(i>=j)break a;e=f[i];DA("\tat ");c=A(2);if(e!==null)c=!e.m1
?A(82):A(83);DA(Bw(c));DA("\n");i=i+1|0;}}}c=a.lm;if(c!==null&&c!==a){DA("Caused by: ");J4(a.lm,b);}};
let BF=F(Dq);
let GC=a=>{a.j1=1;a.j2=1;},
ATU=()=>{let a=new BF();GC(a);return a;};
let Bz=F(BF);
let Im=a=>{a.j1=1;a.j2=1;},
AU5=()=>{let a=new Bz();Im(a);return a;},
GO=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
AUP=a=>{let b=new Bz();GO(b,a);return b;};
let AG4=F(Bz);
let JX=F(0);
function I(){C.call(this);this.lS=0;}
let VN=null,Mg=null,Om=null;
let Yh=(a,b)=>{a.j0=L(b.data,0,b.data.length);},
ATX=a=>{let b=new I();Yh(b,a);return b;},
AE2=(a,b)=>{a.j0=b;},
TG=a=>{let b=new I();AE2(b,a);return b;},
ATN=(a,b,c,d)=>{let e,f;e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.j0=L(b.data,c,d);return;}f=new H;f.j1=1;f.j2=1;B(f);},
AAZ=(a,b,c)=>{let d=new I();ATN(d,a,b,c);return d;},
Ld=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.j0.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AUA(a.j0,b,d.data,e,g);return;}}h=new H;h.j1=1;h.j2=1;B(h);},
MM=(a,b,c)=>{let d,e,f;if((c+b.j0.length|0)>a.j0.length)return 0;d=0;a:{b:{while(d<b.j0.length){if(d<0)break a;if(d>=b.j0.length)break a;e=b.j0.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.j0.length)break b;if(e!=a.j0.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
Le=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.j0.length>a.j0.length)return 0;c=0;d=a.j0.length-b.j0.length|0;a:{b:{while(d<a.j0.length){if(d<0)break a;if(d>=a.j0.length)break a;e=a.j0.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.j0.length)break b;if(e!=b.j0.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
HK=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.j0.length)return (-1);if(a.j0.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.j0.length-1|0))return (-1);if(a.j0.charCodeAt(c)==e&&a.j0.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
EX=(a,b,c)=>{let d,e,f,g;d=a.j0.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.j0.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.j0.charCodeAt(d)==g){b=d-1|0;if(a.j0.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Qr=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.j0.length-b.j0.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.j0.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.j0.length)break a;g=a.j0.charCodeAt(f);if(e<0)break b;if(e>=b.j0.length)break b;if(g!=b.j0.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
AC5=(a,b,c)=>{let d,e,f;d=a.j0.length-b.j0.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.j0.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.j0.length)break a;f=a.j0.charCodeAt(f);if(e<0)break b;if(e>=b.j0.length)break b;if(f!=b.j0.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
Ch=(a,b,c)=>{let d,e,f;d=a.j0.length;e=BU(b,c);if(!e)return Mg;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return TG(a.j0.substring(b,c));f=new W;f.j1=1;f.j2=1;B(f);},
C9=(a,b)=>{let c,d,e,f;c=a.j0.length-b.j0.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.j0.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.j0.length)break a;f=a.j0.charCodeAt(f);if(e<0)break b;if(e>=b.j0.length)break b;if(f!=b.j0.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
M3=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.jZ=G(16);e=a.j0.length-b.j0.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Ch(a,f,a.j0.length);g=d.jY;if(b===null)b=A(2);D(d,g,b);b=new I;h=d.jZ;i=h.data;j=d.jY;e=i.length;if(j>=0&&j<=(e-0|0)){b.j0=L(h.data,0,j);return b;}b=new H;b.j1=1;b.j2=1;B(b);}k=0;d:{while(k<b.j0.length){j=f+k|0;if(j<0)break b;if(j>=a.j0.length)break b;j=a.j0.charCodeAt(j);if(k<0)break c;if(k>=b.j0.length)break c;if(j!=b.j0.charCodeAt(k)){if(f<0)break a;if(f>=a.j0.length)break a;k=a.j0.charCodeAt(f);j
=d.jY;Bj(d,j,j+1|0);d.jZ.data[j]=k;break d;}k=k+1|0;}D(d,d.jY,c===null?A(2):c);f=f+(b.j0.length-1|0)|0;}f=f+1|0;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
AHQ=a=>{let b,c,d;b=0;c=a.j0.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.j0.length)break;if(a.j0.charCodeAt(b)>32)break a;b=b+1|0;}d=new W;d.j1=1;d.j2=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.j0.length)break b;if(a.j0.charCodeAt(c)>32)break;c=c+(-1)|0;}return Ch(a,b,c+1|0);}d=new W;d.j1=1;d.j2=1;B(d);},
Cl=a=>{return a;},
AQ8=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof I))return 0;c=b;return a.j0!==c.j0?0:1;},
AK$=a=>{let b;a:{if(!a.lS){b=0;while(true){if(b>=a.j0.length)break a;a.lS=(31*a.lS|0)+a.j0.charCodeAt(b)|0;b=b+1|0;}}}return a.lS;},
AXf=()=>{let b;VN=G(0);b=new I;b.j0="";Mg=b;Om=new NM;};
let Ev=F();
function Fu(){Ev.call(this);this.nq=0;}
let Or=null,Ef=null;
let KE=(b,c)=>{if(b!==null)return VM(b,0,b.j0.length,c);b=new Cu;b.j1=1;b.j2=1;b.j3=A(84);B(b);},
VM=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new Cu;b.j1=1;b.j2=1;b.j3=A(85);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.j0.length){a:{switch(b.j0.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new Cu;b.j1=1;b.j2=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.j0.length)break b;g=AOE(b.j0.charCodeAt(g));if(g<0){k=new Cu;l=Ch(b,c,d);b=new K;b.jZ=G(16);D(b,b.jY,A(86));c=b.jY;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.jZ;o=n.data;d=b.jY;e
=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);k.j1=1;k.j2=1;k.j3=m;B(k);}b=new H;b.j1=1;b.j2=1;B(b);}if(g>=e){k=new Cu;l=Ch(b,c,d);b=new K;b.jZ=G(16);D(b,b.jY,A(87));J(b,b.jY,e,10);D(b,b.jY,A(81));c=b.jY;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.jZ;o=n.data;d=b.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);k.j1=1;k.j2=1;k.j3=m;B(k);}b=new H;b.j1=1;b.j2=1;B(b);}if(h>i){b=new Cu;b.j1=1;b.j2=1;b.j3=A(88);B(b);}h=Dl(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new Cu;l=Ch(b,c,d);b
=new K;b.jZ=G(16);D(b,b.jY,A(89));c=b.jY;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.jZ;o=n.data;d=b.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);k.j1=1;k.j2=1;k.j3=m;B(k);}b=new H;b.j1=1;b.j2=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new Cu;k=new K;k.jZ=G(16);D(k,k.jY,A(90));J(k,k.jY,e,10);m=new I;n=k.jZ;o=n.data;d=k.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);b.j1=1;b.j2=1;b.j3=m;B(b);}b=new H;b.j1=1;b.j2=1;B(b);},
K5=b=>{if(b!==null)return VM(b,0,b.j0.length,10);b=new Cu;b.j1=1;b.j2=1;b.j3=A(84);B(b);},
EW=()=>{let b,c,d,e,f;a:{if(Ef===null){b=Q(Fu,256);c=b.data;Ef=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new Fu;f.nq=d-128|0;c[d]=f;d=d+1|0;}}}},
B6=a=>{return a.nq;},
AOE=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
O2=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
D_=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AW4=()=>{Or=M(BV);};
function Bc(){let a=this;C.call(a);a.jZ=null;a.jY=0;}
let EZ=a=>{a.jZ=G(16);},
AVj=()=>{let a=new Bc();EZ(a);return a;},
DM=(a,b)=>{a.jZ=G(b);},
AXo=a=>{let b=new Bc();DM(b,a);return b;},
IU=(a,b)=>{D(a,a.jY,b===null?A(2):b.T());return a;},
Jq=(a,b)=>{D(a,a.jY,b);return a;},
D=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.jY){if(c===null)c=A(2);else if(c.j0.length?0:1)return a;Is(a,a.jY+c.j0.length|0);d=a.jY-1|0;while(d>=b){a.jZ.data[d+c.j0.length|0]=a.jZ.data[d];d=d+(-1)|0;}a.jY=a.jY+c.j0.length|0;e=0;a:{while(e<c.j0.length){f=a.jZ;d=b+1|0;if(e<0)break a;if(e>=c.j0.length)break a;f.data[b]=c.j0.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
Iu=(a,b)=>{return J(a,a.jY,b,10);},
Ip=(a,b,c)=>{return J(a,a.jY,b,c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(EU(c,d)<0){if(e)Bj(a,b,b+1|0);else{Bj(a,b,b+2|0);f=a.jZ.data;g=b+1|0;f[b]=45;b=g;}a.jZ.data[b]=NO(c,d);}else{h=1;i=1;j=D6((-1),d);b:{while(true){k=Dl(h,d);if(EU(k,c)>0){k=h;break b;}i=i+1|0;if(EU(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bj(a,b,b+i|0);if(e)e=b;else{f=a.jZ.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.jZ.data;b=e+1|0;f[e]=NO(D6(c,k),d);c=AV2(c,k);k=D6(k,d);e=b;}}}return a;},
E$=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BU(c,0.0);if(!d){if(1.0/c===Infinity){Bj(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bj(a,b,b+4|0);e=a.jZ.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bj(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bj(a,b,b+8|0);d=b;}else{Bj(a,b,b+9|0);e=a.jZ.data;d=b+1|0;e[b]=45;}e=a.jZ.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Re;AJ8(c,f);d=f.t0;g=f.tM;h=f.vJ;i=1;j=1;if(h)j=2;k=9;l=APK(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bj(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.jZ.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.jZ.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.jZ.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.jZ.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Qk=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BU(c,0.0);if(!d){if(1.0/c===Infinity){Bj(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bj(a,b,b+4|0);e=a.jZ.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bj(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bj(a,b,b+8|0);d=b;}else{Bj(a,b,b+9|0);e=a.jZ.data;d=b+1|0;e[b]=45;}e=a.jZ.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Qv;AGE(c,f);g=f.ul;h=f.tD;i=f.vA;j=1;k=1;if(i)k=2;l=18;m=AMv(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bj(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.jZ.data;i=b+1|0;e[b]=45;}p=E(1569325056, 23283064);if(o){e=a.jZ.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(AC0(p,Ca))d=0;else{d=Bl(MY(g,p));g=Xv(g,p);}e=a.jZ.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=MY(p,V(10));q=q+1|0;}if(h){e=a.jZ.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
APK=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AMv=b=>{let c,d,e,f,g;c=V(1);d=0;e=16;f=Oc.data;g=f.length-1|0;while(g>=0){if(D4(Xv(b,Ba(c,f[g])),Ca)){d=d|e;c=Ba(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
Gl=(a,b)=>{return a.dd(a.jY,b);},
Ec=(a,b,c)=>{D(a,b,c===null?A(2):c.T());return a;},
Is=(a,b)=>{let c,d,e,f,g,h;c=a.jZ.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jZ=g;},
Mn=a=>{let b,c,d,e,f;b=new I;c=a.jZ;d=c.data;e=a.jY;f=d.length;if(e>=0&&e<=(f-0|0)){b.j0=L(c.data,0,e);return b;}b=new H;b.j1=1;b.j2=1;B(b);},
Kk=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jZ.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Vt=(a,b)=>{let c,d,e,f;if(b>=0){c=a.jY;if(b<c){c=c-1|0;a.jY=c;while(b<c){d=a.jZ.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new W;f.j1=1;f.j2=1;B(f);},
ARm=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BU(b,c);if(d<=0){e=a.jY;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.jY=e-(c-b|0)|0;g=0;while(g<f){h=a.jZ.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new W;i.j1=1;i.j2=1;B(i);},
Bj=(a,b,c)=>{let d,e,f,g;d=a.jY;e=d-b|0;a.c9((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.jZ.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.jY=a.jY+(c-b|0)|0;};
let IS=F(0);
let K=F(Bc);
let ASd=a=>{a.jZ=G(16);},
En=()=>{let a=new K();ASd(a);return a;},
Mi=(a,b)=>{D(a,a.jY,b===null?A(2):b.T());return a;},
FZ=(a,b)=>{D(a,a.jY,b);return a;},
FK=(a,b)=>{J(a,a.jY,b,10);return a;},
Xh=(a,b)=>{let c;c=a.jY;Bj(a,c,c+1|0);a.jZ.data[c]=b;return a;},
ASI=(a,b,c)=>{D(a,b,c===null?A(2):c.T());return a;},
ARl=(a,b,c)=>{ARm(a,b,c);return a;},
BY=(a,b,c)=>{D(a,b,c);return a;},
AHJ=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jZ.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ACE=(a,b,c,d)=>{let e,f,g,h,i;e=a.jY;Bj(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jZ.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
ZH=a=>{return a.jY;},
Et=a=>{let b,c,d,e,f;b=new I;c=a.jZ;d=c.data;e=a.jY;f=d.length;if(e>=0&&e<=(f-0|0)){b.j0=L(c.data,0,e);return b;}b=new H;b.j1=1;b.j2=1;B(b);},
AH9=(a,b)=>{Is(a,b);},
AIY=(a,b,c)=>{Bj(a,b,b+1|0);a.jZ.data[b]=c;return a;},
B$=(a,b,c)=>{D(a,b,c);return a;};
function Rn(){let a=this;C.call(a);a.vf=0;a.xR=0;a.uG=0;a.vP=null;a.xN=0;a.Ai=null;a.vt=0;a.xZ=null;a.r3=0;a.pY=0;a.tN=0;a.vj=0;a.wn=0;a.v2=0;a.xk=0;a.wN=0;a.wW=0;a.u3=0;a.sJ=0;}
let YU=(a,b)=>{a.vf=0;a.xR=1;a.uG=0;a.xN=1;a.Ai=A(68);a.vt=0;a.r3=(-1);a.pY=(-1);a.tN=0;a.vj=0;a.wn=0;a.v2=0;a.xk=0;a.wN=0;a.wW=0;a.u3=0;a.sJ=1;a.xZ=b;},
ASU=a=>{let b=new Rn();YU(b,a);return b;};
let P5=F(0);
function LO(){let a=this;C.call(a);a.o3=null;a.rn=null;a.wl=null;a.wR=null;a.zh=null;a.nA=null;a.sa=null;a.sh=null;a.rY=null;a.oN=null;a.qM=null;a.tr=0;a.u4=0;a.yp=null;a.py=0;a.r1=null;a.yL=null;a.ys=null;a.rC=null;a.vl=null;a.o5=null;}
let GW=null;
let Qh=(a,b,c)=>{let d;d=new Bg;d.kq=1;d.j7=Q(C,4);a.rY=d;a.qM=NA;a.tr=(-1);a.u4=1;a.py=1;a.yL=EP(51,0.800000011920929);d=new Bg;d.kq=1;d.j7=Q(C,16);a.rC=d;d=new Bg;d.kq=1;d.j7=Q(C,16);a.vl=d;E4();a.oN=F8;a.nA=c;a.sa=b;AOq(a);},
AT0=(a,b)=>{let c=new LO();Qh(c,a,b);return c;},
AOq=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;GW=AKb();Gd();Du(Fb,A(91),A(68));b=U(GW.userAgent);Gd();Du(Fb,A(92),b);if(GW.windows?1:0){Gd();Du(Fb,A(93),A(94));}else if(GW.macOS?1:0){Gd();Du(Fb,A(93),A(95));}else if(!(GW.linux?1:0)){Gd();Du(Fb,A(93),A(96));}else{Gd();Du(Fb,A(93),A(10));}c=new O7;d=a.nA.vt;c.xn=0;c.xW=0;c.mL=1;c.mL=d;Gq=c;E4();b=U(F8.nl.location.href);a.o5=b;if(C9(b,A(97))){c=M3(a.o5,A(98),A(68));a.o5=c;a.o5=M3(c,A(99),A(68));}e=HK(a.o5,63,0);if(e>=0)a.o5=Ch(a.o5,0,e);c=a.nA;Gp=c.xR;b=AMW(c);a.o3=b;c
=AKa(a.o5,b.li,a);a.r1=c;d=a.nA.xN;f=Gq;g=c.sl;h=new K;h.jZ=G(16);i=h.jY;if(g===null)g=A(2);BY(h,i,g);BY(h,h.jY,A(100));g=new I;j=h.jZ;k=j.data;l=h.jY;m=k.length;if(l>=0&&l<=(m-0|0)){g.j0=L(j.data,0,l);h=new K;h.jZ=G(16);D(h,h.jY,g);D(h,h.jY,A(101));g=new I;j=h.jZ;k=j.data;l=h.jY;m=k.length;if(l>=0&&l<=(m-0|0)){g.j0=L(j.data,0,l);h=new QR;h.qU=c;h.vO=A(101);h.vN=d;if(f.mL){if(BW===null){c=new CN;b=new Ck;Bt(b);b.lH=BI(32);ES(c);c.l2=b;b=new K;EZ(b);c.lM=b;c.lL=G(32);c.lN=0;c.lO=Cg;BW=c;}c=new K;c.jZ=G(16);BY(c,
c.jY,A(102));BY(c,c.jY,g);b=new I;j=c.jZ;k=j.data;i=c.jY;l=k.length;if(i>=0&&i<=(l-0|0)){b.j0=L(j.data,0,i);BX(Bw(b));BX("\n");}else{c=new H;c.j1=1;c.j2=1;B(c);}}a:{f.ld=f.ld+1|0;c=new GZ;c.nF=f;c.o$=1;c.nB=g;c.nT=h;b=null;g=null;c.mW=new C;c.mV=1;c.ny=g;c.nS=b;e=CR;CR=e+1|0;c.nR=V(e);b=new El;b.nz=c;EF(b);a.rn=Z0(a.o3.li);c=new Uq;c.rK=a.r1;a.wl=c;c=new TI;b=new I0;d=JW(16);b.pb=0;k=Q(FI,d);j=k.data;b.ms=k;b.td=0.75;b.qg=j.length*0.75|0;c.za=b;a.wR=c;a.yp=new Rk;c=new TD;c.zc=0;c.su=1;b=new Mb;b.sf=c;c.yB=
b;c.uk=A(68);a.ys=c;if(a.nA.uG){g=a.r1;b=new Ov;b.yc=a;n=Gq;g=g.sl;h=new K;h.jZ=G(16);B$(h,h.jY,g===null?A(2):Cl(g));B$(h,h.jY,Cl(A(100)));f=new I;j=h.jZ;k=j.data;i=h.jY;l=k.length;if(i>=0&&i<=(l-0|0)){f.j0=L(j.data,0,i);g=new K;g.jZ=G(16);BY(g,g.jY,f);BY(g,g.jY,A(103));c=new I;j=g.jZ;k=j.data;i=g.jY;l=k.length;if(i>=0&&i<=(l-0|0)){c.j0=L(j.data,0,i);NS(n,1,c,b);break a;}c=new H;c.j1=1;c.j2=1;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}}Dc=a;c=a.o3;B3=c;b=c.qq;B9=b;Bq=b;Ez=c.wS;K_=a.rn;HA=a.wl;AM$=a.wR;c=new QK;c.xh=
null;c.xh=AQT();a.zh=c;AIA=c;f=a.oN.nl.document;b=new Kf;b.tf=a;f.addEventListener("visibilitychange",B5(b,"handleEvent"));c=a.oN;c.r5=a;requestAnimationFrame(B5(c,"onAnimationFrame"));c=a.nA;if(!c.r3&&!c.pY?1:0){c=a.oN;g=new Kg;g.q_=a;g=Dt(g,"handleEvent");c.nl.addEventListener("resize",B5(g,"handleEvent"));}return;}c=new H;c.j1=1;c.j2=1;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
AGr=a=>{let b,c,d,e,f,g,h,$$je;b=a.qM;a:{try{b:{Mz();switch(TZ.data[APr(b)]){case 1:c=AGH(Xa());if(!c){a.qM=Jd;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.r1.ub;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=En();Xh(FK(g,f),37);h=Et(g);d.setProperty("width",Bw(h));}}break b;case 2:break;default:break b;}if(a.sa!==null){b=a.sh;if(b!==null){AJK(b);AKC(a.sh);}ADc(a.rn,null);RN(a.rn);QC(a.rC);a.sh
=a.sa;a.sa=null;a.qM=Kh;a.o3.s3=Ca;}YB(a,a.sh);}}catch($$e){$$je=Z($$e);if($$je instanceof Dq){h=$$je;break a;}else{throw $$e;}}b=a.oN;b.r5=a;requestAnimationFrame(B5(b,"onAnimationFrame"));return;}if(Dh===null){b=new FG;d=new Ck;d.lH=BI(32);Bt(b);b.l2=d;d=new K;DM(d,16);b.lM=d;b.lL=G(32);b.lN=0;b.lO=Cg;Dh=b;}J4(h,Dh);B(h);},
YB=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;AB1(a.o3);c=B3.li.width;d=B3.li.height;e=0;if(a.qM===Kh){a.qM=Jd;f=new HY;HW();KV(f,1000,null);b.zY=f;f=AJU(b);b.z$=f;b.uW=f;g=B3.li.width;h=B3.li.height;f=f.mZ.mb;f.pU=0;f.pV=0;f.qt=g;f.nb=h;i=g;j=f.r4;i=i*j;j=h*j;f.s1=i;f.s$=j;Nq(f,0);e=1;}if(!(c==a.tr&&d==a.u4&&!e)){a.tr=c;a.u4=d;B9.dD(0,0,c,d);f=b.uW;if(f!==null){f=f.mZ.mb;f.pU=0;f.pV=0;f.qt=c;f.nb=d;i=c;j=f.r4;i=i*j;j=d*j;f.s1=i;f.s$=j;Nq(f,0);}}f=a.vl;k=a.rC;l=k.j7;m=k.j4;n=f.j7;o=n.data;c=f.j4;d=c+
m|0;if(d<=o.length)k=n;else{p=8;if(p<=d)p=d;c=c*1.75|0;if(p>c)c=p;q=n.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BC;r.kf=q;s=r;q.classObject=s;}}s=r.kf.$meta.item;if(s===null)r=null;else{r=s.classObject;if(r===null){r=new BC;r.kf=s;k=r;s.classObject=k;}}if(r===null){b=new Df;R(b);B(b);}if(r===M(Bo)){b=new Bk;R(b);B(b);}if(c<0){b=new D1;R(b);B(b);}k=DY(r.kf,c);r=k.data;h=f.j4;g=r.length;if(h<g)g=h;Gr(n,0,k,0,g);f.j7=k;}Gr(l,0,k,f.j4,m);f.j4=d;f=a.rC;l=f.j7;e=0;m=f.j4;k=null;if(e>m)
{b=new Bk;b.j1=1;b.j2=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.j4=0;m=0;while(true){r=a.vl;e=r.j4;d=BU(m,e);if(d>=0){l=r.j7;m=0;f=null;if(m>e){b=new Bk;b.j1=1;b.j2=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}r.j4=0;f=a.o3;t=C6(f.s3,V(1));f.s3=t;if(ACz(t,V(60))){f=b.uW;if(f!==null)ARQ(f,B3.sC);}RN(a.rn);return;}if(d>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,m,10);D(b,b.jY,A(19));e=r.j4;J(b,b.jY,e,10);k=new I;l=b.jZ;n=l.data;m=b.jY;d=n.length;if(m>=0&&m<=(d-0|0)){k.j0=L(l.data,0,m);f.j1
=1;f.j2=1;f.j3=k;B(f);}b=new H;R(b);B(b);}f=r.j7.data[m];k=f.ui.r6;q=k.j7.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BC;r.kf=q;s=r;q.classObject=s;}}u=r.kf.$meta.item;if(u===null)q=null;else{q=u.classObject;if(q===null){q=new BC;q.kf=u;r=q;u.classObject=r;}}e=k.j4;if(q===null){b=new Df;R(b);B(b);}if(q===M(Bo)){b=new Bk;R(b);B(b);}if(e<0)break;r=DY(q.kf,e);Gr(k.j7,0,r,0,k.j4);l=r;f.ui.sT.vv.vP.dF(l);m=m+1|0;}b=new D1;R(b);B(b);};
let VK=F(0);
function My(){C.call(this);this.uW=null;}
let AJK=a=>{return;};
function P7(){let a=this;My.call(a);a.zY=null;a.z$=null;}
let AKC=a=>{return;};
let AOb=F();
let Bh=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(104);d=1<<c;e=d-1|0;f=(((32-O2(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=Dl(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=NO((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new I;l.j0=L(g.data,0,h.length);return l;};
let H2=F(BG);
let NA=null,Kh=null,Jd=null,UT=null;
let AIF=()=>{let b,c,d;b=new H2;b.kg=A(105);b.ka=0;NA=b;c=new H2;c.kg=A(106);c.ka=1;Kh=c;d=new H2;d.kg=A(107);d.ka=2;Jd=d;UT=T(H2,[b,c,d]);};
let OA=F(0);
let Cs=F(0);
let RI=F(0);
function Jn(){let a=this;C.call(a);a.nl=null;a.r5=null;}
let F8=null;
let E4=()=>{E4=BQ(Jn);AE_();};
let AE_=()=>{let b;b=new Jn;E4();b.nl=window;F8=b;},
AL8=(a,b)=>{let c;b;c=a.r5;a.r5=null;AGr(c);};
let ALN=F();
let Rb=F();
let Bv=null;
let Cw=()=>{Cw=BQ(Rb);AKL();};
let AKL=()=>{Bv=EP(51,0.800000011920929);};
function FR(){Ev.call(this);this.ou=0.0;}
let Q_=null;
let AWA=()=>{Q_=M(CD);};
function GE(){let a=this;C.call(a);a.m3=null;a.m$=0;a.rQ=0;}
let PU=(a,b)=>{let c,d,e,f,g;c=a.m3;d=c.data;e=a.m$;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=B_(f);g=d.data.length;if(e<g)g=e;Di(c,0,d,0,g);a.m3=d;}c=d.data;f=a.m$;a.m$=f+1|0;c[f]=b;},
UF=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m3;e=d.data;f=a.m$;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=B_(h);i=g.data.length;if(f<i)i=f;Di(d,0,g,0,i);a.m3=g;}e=g.data;j=a.m$;e[j]=b;e[j+1|0]=c;a.m$=j+2|0;};
let AGa=F();
let JH=b=>{return Math.sin(b);},
YO=b=>{return Math.cos(b);},
Cz=b=>{return Math.sqrt(b);},
K6=b=>{return Math.ceil(b);},
Gs=(b,c)=>{return Math.pow(b,c);},
N6=(b,c)=>{return Math.atan2(b,c);},
AN8=(b,c)=>{return Math.min(b,c);},
D3=b=>{return Math.abs(b);},
CL=b=>{return Math.sign(b);};
function DN(){let a=this;C.call(a);a.y6=null;a.zb=null;}
let Q0=a=>{let b;b=new Bg;b.kq=1;b.j7=Q(C,16);a.y6=b;b=new GE;b.rQ=1;b.m3=B_(16);a.zb=b;},
AV6=()=>{let a=new DN();Q0(a);return a;};
function FL(){let a=this;C.call(a);a.my=null;a.lR=0;a.pe=0;}
let LX=(a,b)=>{let c,d,e,f,g;c=a.my;d=c.data;e=a.lR;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=X(f);g=d.data.length;if(e<g)g=e;Di(c,0,d,0,g);a.my=d;}c=d.data;f=a.lR;a.lR=f+1|0;c[f]=b;},
ASK=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.lR;if(b>d){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(65));J(f,f.jY,b,10);D(f,f.jY,A(66));b=a.lR;J(f,f.jY,b,10);g=new I;h=f.jZ;i=h.data;c=f.jY;d=i.length;if(c>=0&&c<=(d-0|0)){g.j0=L(h.data,0,c);e.j1=1;e.j2=1;e.j3=g;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}i=a.my;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=X(k);l=j.data.length;if(d<l)l=d;Di(i,0,j,0,l);a.my=j;}if(!a.pe){h=j.data;h[a.lR]=h[b];}else Di(j,b,j,b+1|0,a.lR-b|0);h=j.data;a.lR=a.lR+1|0;h[b]=c;};
let Mf=F(0);
let KU=F();
let Fd=F(0);
function I0(){let a=this;KU.call(a);a.pb=0;a.ms=null;a.tb=0;a.td=0.0;a.qg=0;}
let JW=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
IL=(a,b,c,d)=>{let e,f;e=a.ms.data[c];while(e!==null){if(e.pq==d){f=e.mX;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.m_;}return e;},
I6=a=>{let b;b=a.ms.data[0];while(b!==null&&b.mX!==null){b=b.m_;}return b;},
GG=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.ms.data;e=d[0];while(e!==null&&e.mX!==null){e=e.m_;}if(e===null){a.tb=a.tb+1|0;f=null;e=new FI;b=null;e.mX=f;e.mY=b;e.pq=0;e.m_=d[0];d[0]=e;g=a.pb+1|0;a.pb=g;if(g>a.qg)Q4(a,d.length);}}else{f=b;if(!f.$id$){e=E0();f.$id$=e;}h=b.$id$;d=a.ms.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.pq==h){f=e.mX;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.m_;}if(e===null){a.tb=a.tb+1|0;e=new FI;f=null;e.mX=b;e.mY=f;e.pq=h;e.m_=d[j];d[j]=e;g=a.pb+1|0;a.pb=g;if(g>a.qg)Q4(a,
i);}}f=e.mY;e.mY=c;return f;},
Q4=(a,b)=>{let c,d,e,f,g,h,i,j;c=JW(!b?1:b<<1);d=Q(FI,c);e=d.data;f=0;c=c-1|0;while(true){g=a.ms.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.pq&c;j=h.m_;h.m_=e[i];e[i]=h;h=j;}f=f+1|0;}a.ms=d;a.qg=e.length*a.td|0;};
let Ib=F(0);
let NM=F();
let MN=F();
let Oq=null,Ll=null,BZ=null,B0=null,MK=null,TT=null,BL=null,BK=null,JE=null,JF=null;
let AAs=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new H;e.j1=1;e.j2=1;B(e);},
Cv=(b,c)=>{let d,e;d=b.wL.data;if(c<d.length)return c+d[c]|0;d=b.wy;e=APs(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
APs=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=BU(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
PZ=b=>{let c,d,e,f,g,h;if(Ll===null){if(JE===null)JE=AFW();Ll=ASj((JE.value!==null?U(JE.value):null));}c=Ll.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=BU(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
NO=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
E6=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bk;c.j1=1;c.j2=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AF8([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
CS=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(MK===null){if(JF===null)JF=ATl();MK=ATK((JF.value!==null?U(JF.value):null));}e=MK.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.um)c=f+1|0;else{d=g.tX;if(b>=d)return g.t1.data[b-d|0];d=f-1|0;}}return 0;},
Ho=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CS(b)!=16?0:1;},
AUj=()=>{Oq=M(KG);TT=Q(MN,128);},
DS=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
DU=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
AFW=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
ATl=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let ACr=F();
let AKb=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AMk=F();
let BW=null,Dh=null,Fb=null;
let Gr=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jv(b)&&(e+f|0)<=Jv(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BC;h.kf=g;i=h;g.classObject=i;}}j=Ei(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BC;h.kf=g;i=h;g.classObject=i;}}i=Ei(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.kf.$meta.primitive?1:0)&&!(i.kf.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.kf;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MA(g.constructor,p)?1:0)){I2(b,c,d,e,l);b=new JP;b.j1=1;b.j2=1;B(b);}l=l+1|0;m=o;}I2(b,c,d,e,f);return;}if(!(j.kf.$meta.primitive?1:0))break a;if(i.kf.$meta.primitive?1:0)break b;else break a;}b=new JP;b.j1=1;b.j2=1;B(b);}}I2(b,c,d,e,f);return;}b=new JP;b.j1=1;b.j2=1;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}d=new Df;d.j1=1;d.j2=1;d.j3=A(108);B(d);},
Di=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jv(b)&&(e+f|0)<=Jv(d)){I2(b,c,d,e,f);return;}b=new H;b.j1=1;b.j2=1;B(b);},
I2=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
Em=()=>{return D5((new Date()).getTime());},
Gd=()=>{let b,c;if(Fb===null){b=new MV;KO(b,11);Du(b,A(109),A(110));Du(b,A(93),A(111));Du(b,A(112),A(113));Du(b,A(114),A(115));Du(b,A(116),A(117));Du(b,A(118),A(119));Du(b,A(120),A(110));Du(b,A(121),A(113));c=new MV;KO(c,11);c.zE=b;Fb=c;}};
let N0=F(0);
function O7(){let a=this;C.call(a);a.ld=0;a.xn=0;a.xW=0;a.mL=0;}
let AGH=a=>{return a.ld;},
ABi=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{Ng();switch(UB.data[d.ka]){case 1:if(a.mL){if(BW===null){d=new CN;e=new Ck;e.lH=BI(32);Bt(d);d.l2=e;e=new K;DM(e,16);d.lM=e;d.lL=G(32);d.lN=0;d.lO=Cg;BW=d;}d=new K;d.jZ=G(16);D(d,d.jY,A(102));D(d,d.jY,c===null?A(2):c);e=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){e.j0=L(g.data,0,i);BX(Bw(e));BX("\n");}else{c=new H;R(c);B(c);}}a.ld=a.ld+1|0;d=new GZ;d.nF=a;d.o$=b;d.nB=c;d.nT=f;c=null;e=null;d.mW=new C;d.mV=1;d.ny=e;d.nS=c;k=CR;CR=k+1|0;d.nR=V(k);c=new El;c.nz
=d;EF(c);break a;case 2:d=null;l=new OC;l.rZ=a;l.q2=f;l.wb=d;l.xQ=e;if(a.mL){if(BW===null){d=new CN;e=new Ck;ES(e);e.lH=BI(32);F1(d,e);d.lM=En();d.lL=G(32);d.lN=0;d.lO=Cg;BW=d;}d=new K;d.jZ=G(16);B$(d,d.jY,Cl(A(102)));B$(d,d.jY,c===null?A(2):Cl(c));e=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){e.j0=L(g.data,0,i);BX(Bw(e));BX("\n");}else{c=new H;Im(c);B(c);}}a.ld=a.ld+1|0;d=new F0;d.nm=a;d.ol=b;d.ni=c;d.nE=l;c=null;e=null;d.mW=new C;d.mV=1;d.ny=e;d.nS=c;k=CR;CR=k+1|0;d.nR=V(k);c=new El;c.nz=
d;EF(c);break a;case 3:if(a.mL){if(BW===null){d=new CN;e=new Ck;e.lH=BI(32);Bt(d);d.l2=e;e=new K;DM(e,16);d.lM=e;d.lL=G(32);d.lN=0;d.lO=Cg;BW=d;}d=new K;d.jZ=G(16);D(d,d.jY,A(102));D(d,d.jY,c===null?A(2):c);e=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){e.j0=L(g.data,0,i);BX(Bw(e));BX("\n");}else{c=new H;R(c);B(c);}}a.ld=a.ld+1|0;d=new F0;d.nm=a;d.ol=b;d.ni=c;d.nE=f;c=null;e=null;d.mW=new C;d.mV=1;d.ny=e;d.nS=c;k=CR;CR=k+1|0;d.nR=V(k);c=new El;c.nz=d;EF(c);break a;case 4:e=new OB;e.zT=a;e.sD
=f;if(a.mL){if(BW===null){d=new CN;f=new Ck;Bt(f);f.lH=BI(32);ES(d);d.l2=f;f=new K;EZ(f);d.lM=f;d.lL=G(32);d.lN=0;d.lO=Cg;BW=d;}d=new K;d.jZ=G(16);BY(d,d.jY,A(102));BY(d,d.jY,c===null?A(2):c);f=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);BX(Bw(f));BX("\n");}else{c=new H;GC(c);B(c);}}a.ld=a.ld+1|0;d=new F0;d.nm=a;d.ol=b;d.ni=c;d.nE=e;c=null;e=null;d.mW=new C;d.mV=1;d.ny=e;d.nS=c;k=CR;CR=k+1|0;d.nR=V(k);c=new El;c.nz=d;EF(c);break a;case 5:break;default:c=new S;e=new K;e.jZ
=G(16);D(e,e.jY,A(122));D(e,e.jY,d.kg);d=new I;g=e.jZ;h=g.data;k=e.jY;i=h.length;if(k>=0&&k<=(i-0|0)){d.j0=L(g.data,0,k);c.j1=1;c.j2=1;c.j3=d;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);}c=null;GY(f.ru,f.rG,f.rk,c);c=f.nc.m6;c.qy=1;c.no=0;}},
NS=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.mL){if(BW===null){e=new CN;f=new Ck;f.lH=BI(32);e.l2=f;f=new K;Bt(f);f.jZ=G(16);e.lM=f;e.lL=G(32);e.lN=0;e.lO=Cg;BW=e;}e=new K;e.jZ=G(16);D(e,e.jY,A(123));D(e,e.jY,c===null?A(2):c);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);BX(Bw(f));BX("\n");}else{c=new H;c.j1=1;c.j2=1;B(c);}}a.ld=a.ld+1|0;f=new XMLHttpRequest();e=new Ki;e.qH=a;e.pl=f;e.t$=b;e.sv=c;e.uP=d;e=B5(e,"handleEvent");f.onreadystatechange=e;e=new G0;e.u0=a;e.r8=d;d=B5(e,"handleEvent");f.onprogress
=d;f.open("GET",Bw(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let ABQ=F();
let Gq=null;
let Xa=()=>{return Gq;};
let AEL=F();
let Da=0,Gp=0;
let AVC=()=>{Da=1;};
let Ty=F(0);
function KD(){let a=this;C.call(a);a.pZ=null;a.li=null;a.xx=null;a.qq=null;a.wS=null;a.yE=null;a.x0=0.0;a.ti=Ca;a.s3=Ca;a.sC=0.0;a.sY=0.0;a.ve=0;}
let Ny=0,FN=null;
let EC=()=>{EC=BQ(KD);Zw();};
let AII=(a,b)=>{let c,d,e,f,g,h,i,j,k;EC();a.x0=0.0;a.ti=Em();a.s3=V(-1);a.sC=0.0;a.sY=0.0;a.xx=b;E4();c=window.document;d=b.xZ;a.li=c.getElementById(Bw(d));e=ACO();d=!!b.xk;e.alpha=d;d=!!b.v2;e.antialias=d;d=!!b.wn;e.stencil=d;d=!!b.wN;e.premultipliedAlpha=d;d=!!b.wW;e.preserveDrawingBuffer=d;f=a.li;if(b.vf)a.pZ=f.getContext("webgl2",e);a:{if(b.vf){d=a.pZ;if(d!==null){if(!b.u3)f=ARg(d);else{f=new O8;N9(f,d);}a.wS=f;a.qq=f;break a;}}f=f.getContext("webgl",e);a.pZ=f;if(!b.u3)d=AQc(f);else{d=new VH;Mv(d,f);}a.qq
=d;}d=a.qq.dV(7938);c=a.qq.dV(7936);g=a.qq.dV(7937);a.yE=AMg(Hl,d,c,g);h=b.r3;if(!(h<0&&b.pY<0)){if(h&&b.pY?1:0)Kc(a,h,b.pY);else{i=F8;h=i.nl.document.documentElement.clientWidth-b.tN|0;j=i.nl.document.documentElement.clientHeight-b.vj|0;k=!b.sJ?1.0:devicePixelRatio||1;Kc(a,k*h|0,k*j|0);}}b=a.li;d=new MH;d.yh=a;X7(b,B5(d,"fullscreenChanged"));},
AMW=a=>{let b=new KD();AII(b,a);return b;},
AB1=a=>{let b,c,d;b=Em();c=AVO(AGl(b,a.ti))/1000.0;a.sC=c;a.ti=b;c=a.sY+c;a.sY=c;d=a.ve+1|0;a.ve=d;if(c>1.0){a.x0=d;a.sY=0.0;a.ve=0;}},
Kc=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.li;e=b;d.width=e;d=a.li;e=c;d.height=e;if(a.xx.sJ){f=devicePixelRatio||1;e=a.li.style;g=b/f;Iy();h=new K;h.jZ=G(16);Qk(h,h.jY,g);D(h,h.jY,A(124));i=new I;j=h.jZ;k=j.data;l=h.jY;b=k.length;if(l>=0&&l<=(b-0|0)){i.j0=L(j.data,0,l);e.setProperty("width",Bw(i));f=c/f;i=new K;i.jZ=G(16);Qk(i,i.jY,f);D(i,i.jY,A(124));h=new I;j=i.jZ;k=j.data;c=i.jY;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.j0=L(j.data,0,c);e.setProperty("height",Bw(h));}else{d=new H;d.j1=1;d.j2=1;B(d);}}return;}d
=new H;d.j1=1;d.j2=1;B(d);},
Zw=()=>{Ny=0;FN=Dg(51,0.800000011920929);},
X7=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function Ou(){let a=this;C.call(a);a.uB=null;a.sz=null;a.ur=null;a.uJ=null;a.uM=null;a.wd=null;a.sd=null;a.ub=0;a.sl=null;}
let AHB=(a,b,c,d)=>{let e;a.uB=EP(51,0.800000011920929);a.sz=EP(51,0.800000011920929);a.ur=EP(51,0.800000011920929);a.uJ=EP(51,0.800000011920929);a.uM=EP(51,0.800000011920929);a.wd=EP(51,0.800000011920929);e=new Bg;e.kq=1;e.j7=Q(C,16);a.sd=e;a.ub=(-1);a.sl=b;AOM(a,c,d);},
AKa=(a,b,c)=>{let d=new Ou();AHB(d,a,b,c);return d;},
AOM=(a,b,c)=>{let d,e,f;d=c.nA;if(d.vP!==null){e=b.ownerDocument;f=new Lr;f.zr=a;e.addEventListener("dragenter",B5(f,"handleEvent"),!!0);f=new Ls;f.z5=a;e.addEventListener("dragover",B5(f,"handleEvent"),!!0);f=new Lq;f.vS=a;f.vE=c;f.vv=d;e.addEventListener("drop",B5(f,"handleEvent"));}},
AF5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AGj(a,b.t5)){b.so=b.xD;b.qy=1;b.p$=0;b.no=0;return 0;}if(b.no)return 0;b.p$=0;b.qy=0;b.no=1;c=b.t5;d=b.vZ;e=b.vQ;f=new QS;f.Af=a;f.m6=b;b=Gq;g=a.sl;h=new K;h.jZ=G(16);i=h.jY;if(g===null)g=A(2);BY(h,i,g);BY(h,h.jY,A(100));g=new I;j=h.jZ;k=j.data;l=h.jY;m=k.length;if(l>=0&&l<=(m-0|0)){g.j0=L(j.data,0,l);h=new K;h.jZ=G(16);D(h,h.jY,g);D(h,h.jY,c===null?A(2):c);g=new I;k=h.jZ;j=k.data;m=h.jY;i=j.length;if(m>=0&&m<=(i-0|0)){g.j0=L(k.data,0,m);h=new QQ;h.ru=a;h.nc=f;h.rG=d;h.rk
=c;ABi(b,1,g,d,e,h);return 1;}b=new H;R(b);B(b);}b=new H;GC(b);B(b);},
GY=(a,b,c,d)=>{a:{Nw();switch(OV.data[b.ka]){case 1:break;case 2:Ce(a.sz,c,d);break a;case 3:Ce(a.uM,c,d);break a;case 4:Ce(a.ur,c,d);break a;case 5:Ce(a.uB,c,null);break a;default:break a;}Ce(a.uJ,c,d);}},
AGj=(a,b)=>{let c;c=BE(a.uJ,b)<0?0:1;return !c&&!(BE(a.sz,b)<0?0:1)&&!(BE(a.uM,b)<0?0:1)&&!(BE(a.ur,b)<0?0:1)&&!(BE(a.uB,b)<0?0:1)?0:1;};
let DH=F();
let AJw=(a,b)=>{return;};
let Th=F(0);
let Es=F(0);
function Mh(){let a=this;C.call(a);a.lw=null;a.q0=0;a.qe=null;a.n9=null;a.l7=null;a.l6=null;a.nw=null;a.nx=null;a.sQ=null;a.ra=0;a.tw=null;a.sO=0;a.ue=null;a.u_=null;a.uc=null;a.mz=null;a.o0=Ca;a.qB=0;}
let ASJ=b=>{let c,d,e,f;c=GW;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(D3(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AMo=(a,b)=>{a.q0=0;a.qe=Dg(20,0.800000011920929);a.n9=J7(20);a.l7=X(20);a.l6=X(20);a.nw=X(20);a.nx=X(20);a.sQ=O0(51,0.800000011920929);a.ra=0;a.tw=J7(256);a.sO=0;a.ue=J7(256);a.u_=J7(5);a.uc=O0(51,0.800000011920929);a.qB=1;a.lw=b;AJG(a);},
Z0=a=>{let b=new Mh();AMo(b,a);return b;},
AJG=a=>{let b;b=a.lw.ownerDocument;b.addEventListener("mousedown",B5(a,"handleEvent"),!!0);b.addEventListener("mouseup",B5(a,"handleEvent"),!!0);b.addEventListener("mousemove",B5(a,"handleEvent"),!!0);b.addEventListener("wheel",B5(a,"handleEvent"),!!0);b.addEventListener("keydown",B5(a,"handleEvent"),!!0);b.addEventListener("keyup",B5(a,"handleEvent"),!!0);b.addEventListener("keypress",B5(a,"handleEvent"),!!0);a.lw.addEventListener("touchstart",B5(a,"handleEvent"),!!1);a.lw.addEventListener("touchmove",B5(a,
"handleEvent"),!!1);a.lw.addEventListener("touchcancel",B5(a,"handleEvent"),!!1);a.lw.addEventListener("touchend",B5(a,"handleEvent"),!!1);},
AKd=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=U(b.type);if(c!==A(125)){if(A(125) instanceof I){d=A(125);e=c.j0!==d.j0?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(126))e=1;else if(A(126) instanceof I){d=A(126);e=c.j0!==d.j0?0:1;}else e=0;if(!e){if(c===A(127))e=1;else if(!(A(127) instanceof I))e=0;else{d=A(127);e=c.j0!==d.j0?0:1;}if(e){if(!(No(a.lw)?1:0)){f=HD(a,b,a.lw);g=HV(a,b,a.lw);h=a.l7.data;i=f-h[0]|0;j=a.l6.data;e=g-j[0]|0;a.nw.data[0]=i;a.nx.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.nw.data[0]=k;a.nx.data[0]=f;h=a.l7.data;h[0]=h[0]+b.movementX|0;h=a.l6.data;h[0]=h[0]+b.movementY|0;}a.o0=D5(performance.now()*1000000.0);d=a.mz;if(d!==null){if(!a.n9.data[0])AD4(d,a.l7.data[0],a.l6.data[0]);else TH(d,a.l7.data[0],a.l6.data[0],0);}}else{if(c===A(128))e=1;else if(!(A(128) instanceof I))e=0;else{d=A(128);e=c.j0!==d.j0?0:1;}if(e){if(a.mz!==null){l=ASJ(b);ANL(a.mz,0.0,l|0);}a.o0=D5(performance.now()*1000000.0);}else{if(c===A(129))e=1;else if(!(A(129) instanceof I))e=0;else{d=A(129);e=c.j0!==
d.j0?0:1;}if(e){a.q0=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.qe;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.qe;if(o>=(-128)&&o<=127){EW();q=Ef.data[o+128|0];}else{q=new Fu;q.nq=o;}if(!ASQ(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){EW();p=Ef.data[o+128|0];}else{p=new Fu;p.nq=o;}Cc(n,k,p);a.n9.data[o]=1;h=a.l7;q=a.lw;l=q.width*1.0/q.clientWidth;k=(d.clientX-(F3(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=U(p.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f
=0;else{q=A(130);f=n.j0!==q.j0?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+CL(l)*0.5|0;h=a.l6;q=a.lw;l=q.height*1.0/q.clientHeight;k=(d.clientY-(Gz(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=U(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.j0!==p.j0?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+CL(l)*0.5|0;a.nw.data[o]=0;a.nx.data[o]=0;d=a.mz;if(d!==null)N7(d,a.l7.data[o],a.l6.data[o],o,0);e=e+1|0;}a.o0=D5(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.n9.data[0])return;d=a.sQ;e=b.button;AQP(d,!e?0:e==2?1:e!=1?0:2);h=a.n9;h.data[0]=a.sQ.nr<=0?0:1;if(!(No(a.lw)?1:0)){k=HD(a,b,a.lw)-a.l7.data[0]|0;f=HV(a,b,a.lw)-a.l6.data[0]|0;a.nw.data[0]=k;a.nx.data[0]=f;a.l7.data[0]=HD(a,b,a.lw);a.l6.data[0]=HV(a,b,a.lw);}else{k=b.movementX|0;f=b.movementY|0;a.nw.data[0]=k;a.nx.data[0]=f;h=a.l7.data;h[0]=h[0]+b.movementX|0;h=a.l6.data;h[0]=h[0]+b.movementY|0;}a.o0=D5(performance.now()*1000000.0);a.n9.data[0]=0;d=a.mz;if(d!==null)
{e=a.l7.data[0];k=a.l6.data[0];g=b.button;L9(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.lw;if(n!==p?0:1){h=a.n9.data;if(!h[0]){a.qB=1;a.q0=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;AB2(a.sQ,r);a.u_.data[r]=1;a.nw.data[0]=0;a.nx.data[0]=0;if(!(No(a.lw)?1:0)){f=HD(a,b,a.lw);g=HV(a,b,a.lw);a.l7.data[0]=f;a.l6.data[0]=g;}else{h=a.l7.data;h[0]=h[0]+b.movementX|0;h=a.l6.data;h[0]=h[0]+b.movementY|0;}a.o0=D5(performance.now()*1000000.0);d=a.mz;if(d!==null){e=a.l7.data[0];k=a.l6.data[0];g=
b.button;N7(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=HD(a,b,p);t=HV(a,b,a.lw);if(!(s>=0.0&&s<=B3.li.width&&t>=0.0&&t<=B3.li.height))a.qB=0;return;}}if(c===A(131))e=1;else if(!(A(131) instanceof I))e=0;else{d=A(131);e=c.j0!==d.j0?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qe;if(!k)d=!d.kz?null:d.kw;else{h=d.ku;f=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d.kB));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}u=d.nq;d=a.lw;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.j0!==p.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+CL(l)*0.5|0)-a.l7.data[u]|0;d=a.lw;l=d.height*1.0/d.clientHeight;f=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))g=1;else if(!(A(130) instanceof I))g=0;else
{p=A(130);g=n.j0!==p.j0?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+CL(l)*0.5|0)-a.l6.data[u]|0;a.nw.data[u]=k;a.nx.data[u]=f;h=a.l7;d=a.lw;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.j0!==p.j0?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+CL(l)*0.5|0;h=a.l6;d=a.lw;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=U(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.j0!==p.j0?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+CL(l)*0.5|0;d=a.mz;if(d!==null)TH(d,a.l7.data[u],a.l6.data[u],u);e=e+1|0;}a.o0=D5(performance.now()*1000000.0);b.preventDefault();}if(c===A(132))e=1;else if(!(A(132) instanceof I))e=0;else{d=A(132);e=c.j0!==d.j0?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.qe;if(!v)p=!d.kz?null
:d.kw;else{h=d.ku;k=Bl(Be(Ba(V(v),E(2135587861, 2654435769)),d.kB));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.ky;}}p=k<0?null:d.kv.data[k];}u=p.nq;GM(d,v);a.n9.data[u]=0;d=a.lw;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.j0!==p.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CL(l)*0.5|0;d=a.lw;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=U(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.j0!==p.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CL(l)*0.5|0;h=a.l7.data;k=o-h[u]|0;j=a.l6.data;f=g-j[u]|0;a.nw.data[u]=k;a.nx.data[u]=f;h[u]=o;j[u]=g;d=a.mz;if(d!==null)L9(d,h[u],j[u],u,0);e=e+1|0;}a.o0=D5(performance.now()*1000000.0);b.preventDefault();}if(c===A(133))e=1;else if(!(A(133) instanceof I))e=0;else{d=A(133);e=c.j0!==d.j0?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qe;if(!k)c=!d.kz?null:d.kw;else{h=d.ku;f=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d.kB));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.ky;}}c=f<0?null:d.kv.data[f];}u=c.nq;GM(d,k);a.n9.data[u]=0;d=a.lw;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=U(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.j0!==c.j0
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CL(l)*0.5|0;d=a.lw;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=U(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.j0!==c.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CL(l)*0.5|0;h=a.l7.data;k=o-h[u]|0;j=a.l6.data;f=g-j[u]|0;a.nw.data[u]=k;a.nx.data[u]=f;h[u]=o;j[u]=g;d=a.mz;if(d!==null)L9(d,h[u],j[u],u,0);e=e+1|0;}a.o0=D5(performance.now()*1000000.0);b.preventDefault();}},
XB=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=U(b.type);if(c!==A(134)){if(A(134) instanceof I){d=A(134);e=c.j0!==d.j0?0:1;}else e=0;}else e=1;if(e&&a.qB){a:{f=Sh(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}d=a.uc;if(!f)e=d.qu;else{h=d.oL;e=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),d.p6));b:{while(true){i=h.data[e];if(!i){e= -(e+1|0)|0;break b;}if(i==f)break;e=(e+1|0)&d.oD;}}e=e<0?0:1;}if(e)b.preventDefault();if(f!=67&&f!=112){h=a.tw.data;if(!h[f]){a.ra=a.ra+1|0;h[f]=1;a.sO=1;a.ue.data[f]
=1;d=a.mz;if(d!==null){j=d.n2;if(j===null)j=d.ls;Cw();k=Bv;g=BE(k,M(Y));l=g<0?null:k.kL.data[g];if(l===null){l=new CB;k=new Bg;k.kq=0;k.j7=Q(C,4);l.kj=k;l.kR=100;c:{try{k=CK(M(Y),null);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CI(M(Y),null);CM(k,1);break c;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}k=null;}l.kC=k;if(k===null){b=new Bz;d=new K;Bt(d);d.jZ=G(16);BY(d,d.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);c=M(Y).j$;BY(d,d.jY,c);c=new I;h
=d.jZ;m=h.data;f=d.jY;Bt(c);FW(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}Ce(Bv,M(Y),l);}c=l.kj;e=c.j4;if(e){if(!e){b=new BN;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j7.data;c=h[e];h[e]=null;}else d:{try{c=CZ(l.kC,null);break d;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kC.lE.lD;if(l.j$===null)l.j$=U(l.kf.$meta.name);j=l.j$;D(b,b.jY,j);j=new I;h=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0))
{j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.lm=d;B(c);}B(Fo());}k=c;k.mq=It;k.kI=d;k.uS=f;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kf=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kL.data[e];if(d!==null){c=d.kj;if(c.j4<d.kR){Bf(c,k);e=d.kO;g=d.kj.j4;if(e>g)g=e;d.kO=g;if(BB(k,BA)){d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}else if(BB(k,BA)){d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5
=0;d.lo=null;d.lh=(-1);}}}}}else{b.preventDefault();d=a.mz;if(d!==null){j=d.n2;if(j===null)j=d.ls;Cw();k=Bv;i=BE(k,M(Y));l=i<0?null:k.kL.data[i];if(l===null){l=new CB;k=new Bg;k.kq=0;k.j7=Q(C,4);l.kj=k;l.kR=100;e:{try{k=CK(M(Y),null);break e;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CI(M(Y),null);CM(k,1);break e;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}k=null;}l.kC=k;if(k===null){b=new Bz;d=new K;Bt(d);d.jZ=G(16);BY(d,d.jY,A(21));if(M(Y).j$===null)M(Y).j$
=U(M(Y).kf.$meta.name);c=M(Y).j$;BY(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bt(c);FW(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}Ce(Bv,M(Y),l);}c=l.kj;e=c.j4;if(e){if(!e){b=new BN;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j7.data;c=h[e];h[e]=null;}else f:{try{c=CZ(l.kC,null);break f;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kC.lE.lD;if(l.j$===null)l.j$=U(l.kf.$meta.name);j=l.j$;D(b,b.jY,j);j=new I;h
=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.lm=d;B(c);}B(Fo());}k=c;k.mq=It;k.kI=d;k.uS=f;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kf=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kL.data[e];if(d!==null){c=d.kj;if(c.j4<d.kR){Bf(c,k);e=d.kO;i=d.kj.j4;if(e>i)i=e;d.kO=i;if(BB(k,BA)){d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}else if(BB(k,BA)){d=k;d.kI=null;d.k8
=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}d=a.mz;j=d.n2;if(j===null)j=d.ls;k=Bv;i=BE(k,M(Y));l=i<0?null:k.kL.data[i];if(l===null){l=new CB;k=new Bg;k.kq=0;k.j7=Q(C,4);l.kj=k;l.kR=100;g:{try{k=CK(M(Y),null);break g;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CI(M(Y),null);CM(k,1);break g;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}k=null;}l.kC=k;if(k===null){b=new Bz;d=new K;Bt(d);d.jZ=G(16);BY(d,d.jY,A(21));if(M(Y).j$===null)M(Y).j$
=U(M(Y).kf.$meta.name);c=M(Y).j$;BY(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bt(c);FW(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}Ce(Bv,M(Y),l);}c=l.kj;e=c.j4;if(e){if(!e){b=new BN;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j7.data;c=h[e];h[e]=null;}else h:{try{c=CZ(l.kC,null);break h;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kC.lE.lD;if(l.j$===null)l.j$=U(l.kf.$meta.name);j=l.j$;D(b,b.jY,j);j=new I;h
=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.lm=d;B(c);}B(Fo());}k=c;k.mq=JI;k.kI=d;k.xA=g;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kf=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kL.data[e];if(d!==null){c=d.kj;if(c.j4<d.kR){Bf(c,k);e=d.kO;g=d.kj.j4;if(e>g)g=e;d.kO=g;if(BB(k,BA)){d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}else if(BB(k,BA)){d=k;d.kI=null;d.k8
=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(135))e=1;else if(!(A(135) instanceof I))e=0;else{d=A(135);e=c.j0!==d.j0?0:1;}if(e&&a.qB){e=b.charCode&65535;d=a.mz;if(d!==null){j=d.n2;if(j===null)j=d.ls;Cw();k=Bv;f=BE(k,M(Y));k=f<0?null:k.kL.data[f];if(k===null){k=new CB;l=new Bg;l.kq=0;l.j7=Q(C,4);k.kj=l;k.kR=100;i:{try{l=CK(M(Y),null);break i;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{l=CI(M(Y),
null);CM(l,1);break i;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}l=null;}k.kC=l;if(l===null){b=new Bz;d=new K;Bt(d);d.jZ=G(16);BY(d,d.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);c=M(Y).j$;BY(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bt(c);FW(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}Ce(Bv,M(Y),k);}c=k.kj;f=c.j4;if(f){if(!f){b=new BN;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}f=f-1|0;c.j4=f;h=c.j7.data;c=h[f];h[f]=null;}else j:{try{c=CZ(k.kC,null);break j;}
catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=k.kC.lE.lD;if(l.j$===null)l.j$=U(l.kf.$meta.name);j=l.j$;D(b,b.jY,j);j=new I;h=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.lm=d;B(c);}B(Fo());}k=c;k.mq=JI;k.kI=d;k.xA=e;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kf=j;l=c;j.classObject=l;}}f=BE(d,c);d=f<0?null:d.kL.data[f];if(d!==null){c=d.kj;if
(c.j4<d.kR){Bf(c,k);f=d.kO;g=d.kj.j4;if(f>g)g=f;d.kO=g;if(BB(k,BA)){d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}else if(BB(k,BA)){d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}}if(e==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(136))e=1;else if(!(A(136) instanceof I))e=0;else{d=A(136);e=c.j0!==d.j0?0:1;}if(e&&a.qB){f=Sh(b.keyCode);d=a.uc;if(!f)e=d.qu;else{h=d.oL;e=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),
d.p6));k:{while(true){g=h.data[e];if(!g){e= -(e+1|0)|0;break k;}if(g==f)break;e=(e+1|0)&d.oD;}}e=e<0?0:1;}if(e)b.preventDefault();h=a.tw.data;if(h[f]){a.ra=a.ra-1|0;h[f]=0;}d=a.mz;if(d!==null){j=d.n2;if(j===null)j=d.ls;Cw();k=Bv;g=BE(k,M(Y));l=g<0?null:k.kL.data[g];if(l===null){l=new CB;k=new Bg;k.kq=0;k.j7=Q(C,4);l.kj=k;l.kR=100;l:{try{k=CK(M(Y),null);break l;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CI(M(Y),null);CM(k,1);break l;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}
else{throw $$e;}}k=null;}l.kC=k;if(k===null){b=new Bz;d=new K;Bt(d);d.jZ=G(16);BY(d,d.jY,A(21));if(M(Y).j$===null)M(Y).j$=U(M(Y).kf.$meta.name);c=M(Y).j$;BY(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bt(c);FW(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}Ce(Bv,M(Y),l);}c=l.kj;e=c.j4;if(e){if(!e){b=new BN;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j7.data;c=h[e];h[e]=null;}else m:{try{c=CZ(l.kC,null);break m;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c
=new S;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kC.lE.lD;if(l.j$===null)l.j$=U(l.kf.$meta.name);j=l.j$;D(b,b.jY,j);j=new I;h=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.lm=d;B(c);}B(Fo());}k=c;k.mq=Ma;k.kI=d;k.uS=f;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kf=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kL.data[e];if(d!==null){c=d.kj;if(c.j4<d.kR){Bf(c,k);e=d.kO;g=d.kj.j4;if(e>g)g=e;d.kO=g;if(BB(k,BA))
{d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}else if(BB(k,BA)){d=k;d.kI=null;d.k8=null;d.k9=null;d.lf=0;d.lb=1;d.k0=0;d.le=0;d.k5=0;d.lo=null;d.lh=(-1);}}}if(f==61){b.preventDefault();b.stopPropagation();}}}}},
RN=a=>{let b,c,d;a:{if(a.q0){a.q0=0;b=0;while(true){c=a.u_.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.sO){a.sO=0;d=0;while(true){c=a.ue.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
HD=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(F3(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=U(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.j0!==c.j0?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CL(d)*0.5|0;},
HV=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Gz(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=U(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.j0!==c.j0?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CL(d)*0.5|0;},
Gz=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
F3=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ADc=(a,b)=>{a.mz=b;},
No=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
Yj=(a,b)=>{AKd(a,b);XB(a,b);};
let SB=F(0);
function Uq(){C.call(this);this.rK=null;}
function TI(){C.call(this);this.za=null;}
let Tz=F(0);
let Rk=F();
let PN=F(0);
function TD(){let a=this;C.call(a);a.zc=0;a.su=0;a.yB=null;a.uk=null;}
let Uz=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AKv=F();
let Dc=null,B3=null,AIA=null,K_=null,HA=null,AM$=null,B9=null,Bq=null,Ez=null;
let Uu=F(0);
let TJ=F(0);
function QK(){C.call(this);this.xh=null;}
function Kf(){C.call(this);this.tf=null;}
let ADq=(a,b)=>{let c,d,$$je;c=U(a.tf.oN.nl.document.visibilityState);if(A(137)===c)d=1;else if(!(c instanceof I))d=0;else{c=c;d=A(137).j0!==c.j0?0:1;}if(!d){b=a.tf.rY;FO(b);a:{try{c=Gh(b);while(Hu(c)){AKh(Cm(c));}DL(b);break a;}catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}}else{b=a.tf.rY;FO(b);b:{try{c=Gh(b);while(Hu(c)){AOQ(Cm(c));}DL(b);break b;}catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}}},
AM6=(a,b)=>{ADq(a,b);};
function Kg(){C.call(this);this.q_=null;}
let ATn=(a,b)=>{let c,d,e,f,g;c=a.q_.oN.nl.document.documentElement.clientWidth;b=a.q_;d=c-b.nA.tN|0;e=b.oN.nl.document.documentElement.clientHeight;b=a.q_;f=b.nA;c=e-f.vj|0;if(d>0&&c>0){if(b.o3!==null){if(f.sJ){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Kc(a.q_.o3,d,c);}return;}},
AR4=(a,b)=>{ATn(a,b);};
let Bk=F(Bz);
let AAj=a=>{a.j1=1;a.j2=1;},
AAq=()=>{let a=new Bk();AAj(a);return a;};
let AP1=F();
let FW=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new H;e.j1=1;e.j2=1;B(e);};
let ZL=F();
let JD=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bk;e=new K;e.jZ=G(16);D(e,e.jY,A(138));J(e,e.jY,b,10);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}j=K6(b/c)|0;if(2>j)j=2;i=Lj(j);if(i<=1073741824)return i;d=new Bk;e=new K;e.jZ=G(16);D(e,e.jY,A(139));J(e,e.jY,b,10);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;d.j1=1;d.j2=1;B(d);};
let AIc=F(Ev);
let PY=null;
let APV=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new Cu;b.j1=1;b.j2=1;b.j3=A(85);B(b);}f=0;if(c>=0&&c<b.j0.length){a:{switch(b.j0.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=Ca;i=V(e);j=C6(V(1),MY(E(4294967295, 2147483647),i));if(g==d){b=new Cu;b.j1=1;b.j2=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.j0.length)break b;g=AGe(b.j0.charCodeAt(g));if(g<0){l=new Cu;b=Ch(b,c,d);m=new K;m.jZ=G(16);D(m,m.jY,A(86));c=m.jY;if(b===null)b=A(2);D(m,c,
b);b=new I;n=m.jZ;o=n.data;d=m.jY;e=o.length;if(d>=0&&d<=(e-0|0)){b.j0=L(n.data,0,d);l.j1=1;l.j2=1;l.j3=b;B(l);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}if(g>=e){l=new Cu;p=Ch(b,c,d);b=new K;b.jZ=G(16);D(b,b.jY,A(87));J(b,b.jY,e,10);D(b,b.jY,A(81));c=b.jY;if(p===null)p=A(2);D(b,c,p);m=new I;n=b.jZ;o=n.data;d=b.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);l.j1=1;l.j2=1;l.j3=m;B(l);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}if(ACz(h,j)){b=new Cu;b.j1=1;b.j2=1;b.j3=A(140);B(b);}h=C6(Ba(i,h),V(g));if(AU3(h,Ca)){if(k==
d&&D4(h,E(0, 2147483648))&&f)return E(0, 2147483648);l=new Cu;p=Ch(b,c,d);m=new K;m.jZ=G(16);D(m,m.jY,A(141));c=m.jY;if(p===null)p=A(2);D(m,c,p);b=new I;n=m.jZ;o=n.data;e=m.jY;c=o.length;if(e>=0&&e<=(c-0|0)){b.j0=L(n.data,0,e);l.j1=1;l.j2=1;l.j3=b;B(l);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}g=k;}if(f)h=AWf(h);return h;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new Cu;l=new K;l.jZ=G(16);D(l,l.jY,A(90));J(l,l.jY,e,10);m=new I;n=l.jZ;o=n.data;d=l.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);b.j1
=1;b.j2=1;b.j3=m;B(b);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AGe=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Fa=b=>{let c,d;if(D4(b,Ca))return 64;c=0;d=Be(b,32);if(ADm(d,Ca))c=32;else d=b;b=Be(d,16);if(D4(b,Ca))b=d;else c=c|16;d=Be(b,8);if(D4(d,Ca))d=b;else c=c|8;b=Be(d,4);if(D4(b,Ca))b=d;else c=c|4;d=Be(b,2);if(D4(d,Ca))d=b;else c=c|2;if(ADm(Be(d,1),Ca))c=c|1;return (64-c|0)-1|0;},
EL=(b,c)=>{return AWm(b,c);},
E_=(b,c)=>{return AWk(b,c);},
AVs=()=>{PY=M(AJT);};
let AHI=F();
let ACO=()=>{return {};};
let L$=F(0);
function GT(){let a=this;C.call(a);a.j9=null;a.pg=0;a.pa=0;a.mp=0;a.yH=0;a.yP=0;a.nj=0;a.po=0;a.lP=null;a.mn=null;a.m5=null;a.zs=null;a.yU=null;a.nW=null;a.m8=null;a.nV=0;a.rJ=null;a.pk=null;a.q3=null;a.rT=null;a.yn=null;}
let Mv=(a,b)=>{a.pg=1;a.pa=1;a.mp=1;a.yH=1;a.yP=1;a.nj=1;a.po=1;a.lP=Dg(51,0.800000011920929);a.mn=Dg(51,0.800000011920929);a.m5=Dg(51,0.800000011920929);a.zs=Dg(51,0.800000011920929);a.yU=Dg(51,0.800000011920929);a.nW=Dg(51,0.800000011920929);a.m8=Dg(51,0.800000011920929);a.nV=0;a.rJ=new Float32Array(40000);a.pk=new Int32Array(12000);a.q3=new Int16Array(12000);a.rT=new Int8Array(12000);a.yn=new Uint8Array(240000);a.j9=b;b.pixelStorei(37441,0);},
AQc=a=>{let b=new GT();Mv(b,a);return b;},
NP=(a,b)=>{let c,d,e,f,g;if(Gp){c=(!BB(b,Eg)?null:b.o4.k1.data).buffer;d=b.ke;e=b.j8-d|0;return new Float32Array(c,d,e);}if((b.j8-b.ke|0)>a.rJ.length)a.rJ=new Float32Array(b.j8-b.ke|0);e=b.ke;d=0;while(true){f=b.j8;if(e>=f)break;c=a.rJ;g=R0(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.rJ;e=f-b.ke|0;return c.subarray(0,e);},
Sn=(a,b)=>{let c,d,e,f,g;if(Gp){c=(!BB(b,Eg)?null:b.o1.k1.data).buffer;d=b.ke;e=b.j8-d|0;return new Int16Array(c,d,e);}if((b.j8-b.ke|0)>a.q3.length)a.q3=new Int16Array(b.j8-b.ke|0);e=b.ke;d=0;while(true){f=b.j8;if(e>=f)break;c=a.q3;g=ANn(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.q3;e=f-b.ke|0;return c.subarray(0,e);},
VI=(a,b)=>{let c,d,e,f,g;if(Gp){c=(!BB(b,Eg)?null:b.eq()).buffer;d=b.ke;e=b.j8-d|0;return new Int32Array(c,d,e);}if((b.j8-b.ke|0)>a.pk.length)a.pk=new Int32Array(b.j8-b.ke|0);e=b.ke;d=0;while(true){f=b.j8;if(e>=f)break;c=a.pk;g=b.er(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.pk;e=f-b.ke|0;return c.subarray(0,e);},
Mo=(a,b)=>{let c,d,e,f,g;if(Gp)return !BB(b,Eg)?null:b.k1.data;if((b.j8-b.ke|0)>a.rT.length)a.rT=new Int8Array(b.j8-b.ke|0);c=b.ke;d=0;while(true){e=b.j8;if(c>=e)break;f=a.rT;g=W1(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.rT;c=e-b.ke|0;return f.subarray(0,c);},
AXk=(a,b)=>{if((b.j8-b.ke|0)>a.pk.length)a.pk=new Int32Array(b.j8-b.ke|0);},
ATW=(a,b)=>{let c,d,e,f,g;c=a.m8;d=a.nV;if(!d)c=!c.kz?null:c.kw;else{e=c.ku;f=Bl(Be(Ba(V(d),E(2135587861, 2654435769)),c.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.ky;}}c=f<0?null:c.kv.data[f];}c=c;if(!b)c=!c.kz?null:c.kw;else{e=c.ku;d=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kB));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.ky;}}c=d<0?null:c.kv.data[d];}BD();return c===null?null:c[Br]===true?c:c.kE;},
AFn=(a,b,c)=>{let d,e,f,g,h,i;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kE;d=a.mn;if(!c)d=!d.kz?null:d.kw;else{e=d.ku;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kB));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.ky;}}d=b<0?null:d.kv.data[b];}i=d===null?null:d[Br]===true?
d:d.kE;a.j9.attachShader(h,i);},
ARW=(a,b,c)=>{let d,e,f,g,h;d=a.j9;e=a.m5;if(!c)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.bindBuffer(b,e);},
AAS=(a,b,c)=>{let d,e,f,g,h;d=a.j9;e=a.nW;if(!c)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.bindTexture(b,e);},
AEs=(a,b,c,d,e)=>{a.j9.blendFuncSeparate(b,c,d,e);},
Lh=(a,b,c,d,e)=>{let f,g;if(d instanceof Ek){f=a.j9;d=NP(a,d);f.bufferData(b,d,e);}else if(d instanceof G9){f=a.j9;d=VI(a,d);f.bufferData(b,d,e);}else if(d instanceof G$){f=a.j9;d=Sn(a,d);f.bufferData(b,d,e);}else if(d instanceof E1){f=a.j9;g=Mo(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new S;f.j1=1;f.j2=1;f.j3=A(142);B(f);}a.j9.bufferData(b,c,e);}},
Lg=(a,b,c,d,e)=>{let f,g;if(e instanceof Ek){f=a.j9;e=NP(a,e);f.bufferSubData(b,c,e);}else if(e instanceof G9){f=a.j9;g=VI(a,e);f.bufferSubData(b,c,g);}else if(e instanceof G$){f=a.j9;e=Sn(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof E1)){f=new S;f.j1=1;f.j2=1;f.j3=A(142);B(f);}f=a.j9;e=Mo(a,e);f.bufferSubData(b,c,e);}},
APx=(a,b)=>{a.j9.clear(b);},
AA8=(a,b,c,d,e)=>{a.j9.clearColor(b,c,d,e);},
AGs=(a,b)=>{let c,d,e,f;c=a.mn;if(!b)c=!c.kz?null:c.kw;else{d=c.ku;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kB));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.ky;}}c=e<0?null:c.kv.data[e];}BD();c=c===null?null:c[Br]===true?c:c.kE;a.j9.compileShader(c);},
ASG=a=>{let b,c;b=a.j9.createProgram();c=a.pg;a.pg=c+1|0;Cc(a.lP,c,Cf(b));return c;},
AL_=(a,b)=>{let c,d;c=a.j9.createShader(b);d=a.pa;a.pa=d+1|0;Cc(a.mn,d,Cf(c));return d;},
APy=(a,b)=>{a.j9.depthMask(!!b);},
ALR=(a,b)=>{a.j9.disable(b);},
AKi=(a,b)=>{a.j9.disableVertexAttribArray(b);},
ABI=(a,b,c,d)=>{a.j9.drawArrays(b,c,d);},
AHh=(a,b,c,d,e)=>{let f,g;f=a.j9;g=e.ke;f.drawElements(b,c,d,g);},
AJN=(a,b,c,d,e)=>{a.j9.drawElements(b,c,d,e);},
ARx=(a,b)=>{a.j9.enable(b);},
AQe=(a,b)=>{a.j9.enableVertexAttribArray(b);},
AVL=a=>{let b,c;b=a.j9.createBuffer();c=a.mp;a.mp=c+1|0;Cc(a.m5,c,Cf(b));return c;},
WY=(a,b)=>{a.j9.generateMipmap(b);},
AXt=a=>{let b,c;b=a.j9.createTexture();c=a.nj;a.nj=c+1|0;Cc(a.nW,c,Cf(b));return c;},
Kw=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.j9;g=a.lP;if(!b)g=!g.kz?null:g.kw;else{h=g.ku;i=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kB));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.ky;}}g=i<0?null:g.kv.data[i];}BD();g=g===null?null:g[Br]===true?g:g.kE;g=f.getActiveAttrib(g,c);Ej(d,g.size);Ej(e,g.type);d.ke=0;d.j8=d.kx;d.ko=(-1);e.ke=0;e.j8=e.kx;e.ko=(-1);return U(g.name);},
L1=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.j9;g=a.lP;if(!b)g=!g.kz?null:g.kw;else{h=g.ku;i=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kB));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.ky;}}g=i<0?null:g.kv.data[i];}BD();g=g===null?null:g[Br]===true?g:g.kE;g=f.getActiveUniform(g,c);Ej(d,g.size);Ej(e,g.type);d.ke=0;d.j8=d.kx;d.ko=(-1);e.ke=0;e.j8=e.kx;e.ko=(-1);return U(g.name);},
AC_=(a,b,c)=>{let d,e,f,g,h;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kE;return a.j9.getAttribLocation(h,Bw(c));},
Jj=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new S;c.j1=1;c.j2=1;c.j3=A(143);B(c);}NL(c,0,a.j9.getParameter(b));c.ke=0;c.j8=c.kx;c.ko=(-1);},
ASx=(a,b)=>{let c,d,e,f,g;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;return U(c.getProgramInfoLog(d));},
Mr=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.j9;f=a.lP;if(!b)f=!f.kz?null:f.kw;else{g=f.ku;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),f.kB));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.ky;}}f=h<0?null:f.kv.data[h];}BD();f=f===null?null:f[Br]===true?f:f.kE;Ej(d,e.getProgramParameter(f,c));}else{f=a.j9;e=a.lP;if(!b)e=!e.kz?null:e.kw;else{g=e.ku;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.ky;}}e=h<0?null:e.kv.data[h];}BD();e=e===null?null:e[Br]===true?e:e.kE;Ej(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.ke=0;d.j8=d.kx;d.ko=(-1);},
AH2=(a,b)=>{let c,d,e,f,g;c=a.j9;d=a.mn;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;return U(c.getShaderInfoLog(d));},
KY=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.j9;f=a.mn;if(!b)f=!f.kz?null:f.kw;else{g=f.ku;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),f.kB));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.ky;}}f=h<0?null:f.kv.data[h];}BD();f=f===null?null:f[Br]===true?f:f.kE;Ej(d,e.getShaderParameter(f,c));}else{f=a.j9;e=a.mn;if(!b)e=!e.kz?null:e.kw;else{g=e.ku;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.ky;}}e=h<0?null:e.kv.data[h];}BD();e=e===null?null:e[Br]===true?e:e.kE;Ej(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.ke=0;d.j8=d.kx;d.ko=(-1);},
AD8=(a,b)=>{return U(a.j9.getParameter(b));},
AD2=(a,b,c)=>{let d,e,f,g,h;d=a.j9;e=a.lP;if(!b)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d=d.getUniformLocation(e,Bw(c));if(d===null)return (-1);c=a.m8;if(!b)c=!c.kz?null:c.kw;else{f=c.ku;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kB));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
c.ky;}}c=h<0?null:c.kv.data[h];}c=c;if(c===null){c=Dg(51,0.800000011920929);Cc(a.m8,b,c);}h=a.po;a.po=h+1|0;Cc(c,h,Cf(d));return h;},
Zi=(a,b)=>{let c,d,e,f,g;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.linkProgram(d);},
ABH=(a,b,c)=>{a.j9.pixelStorei(b,c);},
WX=(a,b,c)=>{let d,e,f,g,h;d=a.j9;e=a.mn;if(!b)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.shaderSource(e,Bw(c));},
MC=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.j9;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.j8>4){if(!Gp)l=!(j instanceof Ek)?Uint8Array.from(Mo(a,j)):NP(a,j);else{m=!BB(j,Eg)?null:j.k1.data;if(!(j instanceof Ek)){n=j.j8-j.ke|0;o=m.byteOffset+j.ke|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.j8-j.ke|0;o=m.byteOffset+j.ke|0;l=new Float32Array(m.buffer,o,n);}}a.j9.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=APD(j,0);EC();j=FN;if(!p)j=!j.kz?null:j.kw;else{q=j.ku;n=Bl(Be(Ba(V(p),E(2135587861, 2654435769)),
j.kB));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.ky;}}j=n<0?null:j.kv.data[n];}k=j;r=k.om;if(r===null&&k.lv!==null?1:0){j=a.j9;s=k.lv.rN;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.p3!==null?1:0){j=a.j9;s=k.p3;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.q7!==null?1:0){j=a.j9;s=k.q7;j.texImage2D(b,c,d,h,i,s);}else{j=a.j9;Fc(k);s=k.om;j.texImage2D(b,c,d,h,i,s);}}},
AIU=(a,b,c,d)=>{a.j9.texParameterf(b,c,d);},
ALl=(a,b,c,d)=>{let e,f;e=a.j9;f=d;e.texParameterf(b,c,f);},
ALQ=(a,b,c)=>{let d,e,f,g,h,i;d=a.m8;e=a.nV;if(!e)d=!d.kz?null:d.kw;else{f=d.ku;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.ky;}}d=g<0?null:d.kv.data[g];}d=d;if(!b)d=!d.kz?null:d.kw;else{f=d.ku;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.ky;}}d=g<0?null:d.kv.data[g];}BD();i=d===null?null:d[Br]===true?d:d.kE;a.j9.uniform1i(i,c);},
QN=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.m8;f=a.nV;if(!f)g=!g.kz?null:g.kw;else{h=g.ku;c=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),g.kB));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.ky;}}g=c<0?null:g.kv.data[c];}g=g;if(!b)g=!g.kz?null:g.kw;else{h=g.ku;c=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kB));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.ky;}}g=c<0?null:g.kv.data[c];}BD();j=g===null?null:g[Br]===true?g:g.kE;g=a.j9;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
Zk=(a,b)=>{let c,d,e,f,g;a.nV=b;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.useProgram(d);},
AIu=(a,b,c,d,e,f,g)=>{a.j9.vertexAttribPointer(b,c,d,!!e,f,g);},
Xk=(a,b,c,d,e)=>{a.j9.viewport(b,c,d,e);};
let SA=F(0);
function J2(){let a=this;GT.call(a);a.kJ=null;a.z_=null;a.zM=0;a.yt=null;a.yN=0;a.y8=null;a.x9=0;a.rA=null;a.rs=0;a.zC=null;}
let N9=(a,b)=>{Mv(a,b);a.z_=Dg(51,0.800000011920929);a.zM=1;a.yt=Dg(51,0.800000011920929);a.yN=1;a.y8=Dg(51,0.800000011920929);a.x9=1;a.rA=Dg(51,0.800000011920929);a.rs=1;a.zC=new Uint32Array(12000);a.kJ=b;},
ARg=a=>{let b=new J2();N9(b,a);return b;},
AES=(a,b)=>{let c,d,e,f,g;c=a.kJ;d=a.rA;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.bindVertexArray(d);},
AJ_=(a,b,c,d,e)=>{a.kJ.drawArraysInstanced(b,c,d,e);},
ATh=(a,b,c,d,e,f)=>{a.kJ.drawElementsInstanced(b,c,d,e,f);},
AKM=(a,b,c)=>{let d,e,f,g;d=c.ke;e=0;while(e<b){f=a.kJ.createVertexArray();g=a.rs;a.rs=g+1|0;Cc(a.rA,g,Cf(f));Ej(c,g);e=e+1|0;}CC(c,d);},
AHp=(a,b,c)=>{if(b!=34045)Jj(a,b,c);else{NL(c,0,a.kJ.getParameter(b));c.ke=0;c.j8=c.kx;c.ko=(-1);}};
let O8=F(J2);
let ADh=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kJ;d=a.rA;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.bindVertexArray(d);b=a.kJ.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&
f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
Z3=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kJ.drawArraysInstanced(b,c,d,e);b=a.kJ.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;R(f);B(f);},
ARN=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.kJ.drawElementsInstanced(b,c,d,e,f);b=a.kJ.getError();if(!b)return;g=new S;h=Bh(b,4);i=new K;i.jZ=G(16);D(i,i.jY,A(144));J(i,i.jY,b,10);D(i,i.jY,A(47));b=i.jY;if(h===null)h=A(2);D(i,b,h);j=new I;k=i.jZ;l=k.data;c=i.jY;d=l.length;if(c>=0&&c<=(d-0|0)){j.j0=L(k.data,0,c);g.j1=1;g.j2=1;g.j3=j;B(g);}g=new H;R(g);B(g);},
Y8=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.ke;e=0;while(e<b){f=a.kJ.createVertexArray();g=a.rs;a.rs=g+1|0;Cc(a.rA,g,Cf(f));Ej(c,g);e=e+1|0;}CC(c,d);b=a.kJ.getError();if(!b)return;c=new S;h=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.jZ;k=j.data;e=f.jY;l=k.length;if(e>=0&&e<=(l-0|0)){i.j0=L(j.data,0,e);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
ZV=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j9;e=a.nW;if(!c)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.bindTexture(b,e);b=a.kJ.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;R(d);B(d);},
APC=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.clear(b);b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AIZ=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.j9.clearColor(b,c,d,e);f=a.kJ.getError();if(!f)return;g=new S;h=Bh(f,4);i=new K;i.jZ=G(16);D(i,i.jY,A(144));J(i,i.jY,f,10);D(i,i.jY,A(47));f=i.jY;if(h===null)h=A(2);D(i,f,h);j=new I;k=i.jZ;l=k.data;m=i.jY;n=l.length;if(m>=0&&m<=(n-0|0)){j.j0=L(k.data,0,m);g.j1=1;g.j2=1;g.j3=j;B(g);}g=new H;R(g);B(g);},
Y5=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.depthMask(!!b);b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AQh=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.disable(b);b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
ACw=(a,b,c,d)=>{let e,f,g,h,i,j;a.j9.drawArrays(b,c,d);b=a.kJ.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;R(e);B(e);},
AMm=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.j9;g=e.ke;f.drawElements(b,c,d,g);b=a.kJ.getError();if(!b)return;e=new S;h=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.jZ;k=j.data;c=f.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;R(e);B(e);},
AN5=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.enable(b);b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
WI=(a,b)=>{return U(a.j9.getParameter(b));},
XV=(a,b,c)=>{let d,e,f,g,h,i,j;a.j9.pixelStorei(b,c);b=a.kJ.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;R(d);B(d);},
AJu=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MC(a,b,c,d,e,f,g,h,i,j);b=a.kJ.getError();if(!b)return;j=new S;k=Bh(b,4);l=new K;l.jZ=G(16);D(l,l.jY,A(144));J(l,l.jY,b,10);D(l,l.jY,A(47));b=l.jY;if(k===null)k=A(2);D(l,b,k);m=new I;n=l.jZ;o=n.data;c=l.jY;d=o.length;if(c>=0&&c<=(d-0|0)){m.j0=L(n.data,0,c);j.j1=1;j.j2=1;j.j3=m;B(j);}j=new H;R(j);B(j);},
ACe=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.j9.texParameterf(b,c,d);b=a.kJ.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;k=j.length;if(c>=0&&c<=(k-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;R(e);B(e);},
AEH=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j9.viewport(b,c,d,e);b=a.kJ.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;R(f);B(f);},
AH$=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kE;d=a.mn;if(!c)d=!d.kz?null:d.kw;else{e=d.ku;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kB));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.ky;}}d=b<0?null:d.kv.data[b];}i=d===null?null:d[Br]===true
?d:d.kE;a.j9.attachShader(h,i);b=a.kJ.getError();if(!b)return;d=new S;j=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(j===null)j=A(2);D(h,b,j);i=new I;e=h.jZ;k=e.data;c=h.jY;f=k.length;if(c>=0&&c<=(f-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;R(d);B(d);},
AQ$=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j9;e=a.m5;if(!c)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.bindBuffer(b,e);b=a.kJ.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;R(d);B(d);},
ADj=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j9.blendFuncSeparate(b,c,d,e);b=a.kJ.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;R(f);B(f);},
AI_=(a,b,c,d,e)=>{let f,g,h,i,j;Lh(a,b,c,d,e);b=a.kJ.getError();if(!b)return;d=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;e=j.length;if(c>=0&&c<=(e-0|0)){h.j0=L(i.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;R(d);B(d);},
AQ0=(a,b,c,d,e)=>{let f,g,h,i,j;Lg(a,b,c,d,e);b=a.kJ.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;R(e);B(e);},
AKD=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mn;if(!b)c=!c.kz?null:c.kw;else{d=c.ku;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kB));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.ky;}}c=e<0?null:c.kv.data[e];}BD();g=c===null?null:c[Br]===true?c:c.kE;a.j9.compileShader(g);b=a.kJ.getError();if(!b)return;c=new S;h=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(h===null)h=A(2);D(g,b,h);i=new I;d=g.jZ;j=d.data;e=g.jY;f=j.length;if(e>=0&&e<=(f-0|0))
{i.j0=L(d.data,0,e);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
ASF=a=>{let b,c,d,e,f,g,h,i,j;b=a.j9.createProgram();c=a.pg;a.pg=c+1|0;Cc(a.lP,c,Cf(b));d=a.kJ.getError();if(!d)return c;b=new S;e=Bh(d,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,d,10);D(f,f.jY,A(47));d=f.jY;if(e===null)e=A(2);D(f,d,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;R(b);B(b);},
AMG=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9.createShader(b);d=a.pa;a.pa=d+1|0;Cc(a.mn,d,Cf(c));b=a.kJ.getError();if(!b)return d;c=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;R(c);B(c);},
ASu=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.disableVertexAttribArray(b);b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
ZA=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j9.drawElements(b,c,d,e);b=a.kJ.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;R(f);B(f);},
AMN=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.enableVertexAttribArray(b);b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
API=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.generateMipmap(b);b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AF$=(a,b,c,d,e)=>{let f,g,h,i,j;f=Kw(a,b,c,d,e);b=a.kJ.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;R(d);B(d);},
APz=(a,b,c,d,e)=>{let f,g,h,i,j;f=L1(a,b,c,d,e);b=a.kJ.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;R(d);B(d);},
AJV=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kE;b=a.j9.getAttribLocation(h,Bw(c));f=a.kJ.getError();if(!f)return b;c=new S;i=Bh(f,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,f,10);D(d,d.jY,A(47));b=d.jY;if(i===null)i=A(2);D(d,b,i);h=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){h.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;R(c);B(c);},
ADs=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)Jj(a,b,c);else{NL(c,0,a.kJ.getParameter(b));c.ke=0;c.j8=c.kx;c.ko=(-1);}b=a.kJ.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AA_=(a,b,c,d)=>{let e,f,g,h,i,j;Mr(a,b,c,d);b=a.kJ.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;R(d);B(d);},
XT=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c=U(c.getProgramInfoLog(d));b=a.kJ.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
ASD=(a,b,c,d)=>{let e,f,g,h,i,j;KY(a,b,c,d);b=a.kJ.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;R(d);B(d);},
YN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9;d=a.mn;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c=U(c.getShaderInfoLog(d));b=a.kJ.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=
0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
XW=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j9;e=a.lP;if(!b)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;c=d.getUniformLocation(e,Bw(c));if(c===null)h=(-1);else{d=a.m8;if(!b)d=!d.kz?null:d.kw;else{f=d.ku;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|
0)&d.ky;}}d=h<0?null:d.kv.data[h];}d=d;if(d===null){d=Dg(51,0.800000011920929);Cc(a.m8,b,d);}h=a.po;a.po=h+1|0;Cc(d,h,Cf(c));}b=a.kJ.getError();if(!b)return h;c=new S;i=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;h=d.jY;g=j.length;if(h>=0&&h<=(g-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;R(c);B(c);},
ARD=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.linkProgram(d);b=a.kJ.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f<=(g-0
|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
XR=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j9;e=a.mn;if(!b)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.shaderSource(e,Bw(c));b=a.kJ.getError();if(!b)return;c=new S;i=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;g=d.jY;h=j.length;if(g>=0&&g
<=(h-0|0)){e.j0=L(f.data,0,g);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;R(c);B(c);},
Zh=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.j9;f=d;e.texParameterf(b,c,f);b=a.kJ.getError();if(!b)return;e=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;R(e);B(e);},
AAo=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.m8;e=a.nV;if(!e)d=!d.kz?null:d.kw;else{f=d.ku;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.ky;}}d=g<0?null:d.kv.data[g];}d=d;if(!b)d=!d.kz?null:d.kw;else{f=d.ku;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.ky;}}d=e<0?null:d.kv.data[e];}BD();i=d===null?null:d[Br]===true?d:d.kE;a.j9.uniform1i(i,c);b
=a.kJ.getError();if(!b)return;d=new S;i=Bh(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(144));J(j,j.jY,b,10);D(j,j.jY,A(47));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;f=j.jZ;l=f.data;c=j.jY;e=l.length;if(c>=0&&c<=(e-0|0)){k.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=k;B(d);}d=new H;R(d);B(d);},
ATm=(a,b)=>{let c,d,e,f,g,h,i,j;a.nV=b;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.useProgram(d);b=a.kJ.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f
<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
ANA=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.j9.vertexAttribPointer(b,c,d,!!e,f,g);b=a.kJ.getError();if(!b)return;h=new S;i=Bh(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(144));J(j,j.jY,b,10);D(j,j.jY,A(47));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;l=j.jZ;m=l.data;c=j.jY;d=m.length;if(c>=0&&c<=(d-0|0)){k.j0=L(l.data,0,c);h.j1=1;h.j2=1;h.j3=k;B(h);}h=new H;R(h);B(h);};
function Qz(){let a=this;C.call(a);a.vh=0;a.uC=0;a.uK=0;a.ye=null;a.y9=null;a.o7=null;a.x4=A(145);}
let AH0=(a,b,c,d,e)=>{a.x4=A(145);if(b===NH)a.o7=Jt;else if(b===M1)a.o7=Jt;else if(b===M9)a.o7=JM;else if(b===ML)a.o7=JM;else if(b!==Hl)a.o7=Sw;else a.o7=LH;b=a.o7;if(b===Jt)Lw(a,A(146),c);else if(b===LH)Lw(a,A(147),c);else if(b===JM)Lw(a,A(148),c);else{a.vh=(-1);a.uC=(-1);a.uK=(-1);d=A(68);e=A(68);}a.ye=d;a.y9=e;},
AMg=(a,b,c,d)=>{let e=new Qz();AH0(e,a,b,c,d);return e;},
Lw=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=QL(IK(b,0),c);if(!Q6(d)){e=Dc;b=new K;b.jZ=G(16);D(b,b.jY,A(149));D(b,b.jY,c);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);if(e.py>=2){if(BW===null){b=new CN;e=new Ck;Bt(e);e.lH=BI(32);ES(b);b.l2=e;e=new K;EZ(e);b.lM=e;b.lL=G(32);b.lN=0;b.lO=Cg;BW=b;}b=new K;b.jZ=G(16);BY(b,b.jY,A(145));BY(b,b.jY,A(81));BY(b,b.jY,c);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);BX(Bw(c));BX("\n");}else{b
=new H;b.j1=1;b.j2=1;B(b);}}a.vh=2;a.uC=0;a.uK=0;break a;}b=new H;b.j1=1;b.j2=1;B(b);}b=d.oa;j=b.oH;if(!j){b=new BN;b.j1=1;b.j2=1;Bi(b);B(b);}k=BU(1,b.p2);if(k>=0){b=new H;c=new K;Bt(c);c.jZ=G(16);J(c,c.jY,1,10);e=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}f=b.lW.data;if(f[2]<0)e=null;else{b=b.ql;if(!j){b=new BN;b.j1=1;b.j2=1;Bi(b);B(b);}if(k>=0){b=new H;c=new K;Bt(c);c.jZ=G(16);J(c,c.jY,1,10);e=new I;f=c.jZ;g=f.data;h
=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}h=f[2];if(!j){b=new BN;b.j1=1;b.j2=1;Bi(b);B(b);}if(k>=0){b=new H;c=new K;Bt(c);c.jZ=G(16);J(c,c.jY,1,10);e=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}e=Ch(b,h,f[3]);}f=(Kv(IK(A(150),0),e,0)).data;b=f[0];b:{try{h=K5(b);break b;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}d=Dc;e=new K;e.jZ
=G(16);D(e,e.jY,A(151));D(e,e.jY,b);D(e,e.jY,A(152));J(e,e.jY,2,10);l=new I;g=e.jZ;m=g.data;i=e.jY;j=m.length;if(i>=0&&i<=(j-0|0)){l.j0=L(g.data,0,i);if(d.py>=1){if(Dh===null){b=new FG;e=new Ck;ES(e);e.lH=BI(32);F1(b,e);b.lM=En();b.lL=G(32);b.lN=0;b.lO=Cg;Dh=b;}b=new K;b.jZ=G(16);B$(b,b.jY,Cl(A(153)));B$(b,b.jY,Cl(A(81)));B$(b,b.jY,Cl(l));c=new I;g=b.jZ;m=g.data;i=b.jY;j=m.length;if(i>=0&&i<=(j-0|0)){c.j0=L(g.data,0,i);DA(Bw(c));DA("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}h=2;}else{b=new H;b.j1=1;b.j2=1;B(b);}}a.vh
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=K5(b);break c;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}d=Dc;e=new K;e.jZ=G(16);D(e,e.jY,A(151));D(e,e.jY,b);D(e,e.jY,A(152));J(e,e.jY,0,10);l=new I;g=e.jZ;m=g.data;j=e.jY;k=m.length;if(j>=0&&j<=(k-0|0)){l.j0=L(g.data,0,j);if(d.py>=1){if(Dh===null){b=new FG;e=new Ck;ES(e);e.lH=BI(32);F1(b,e);b.lM=En();b.lL=G(32);b.lN=0;b.lO=Cg;Dh=b;}b=new K;b.jZ=G(16);B$(b,b.jY,Cl(A(153)));B$(b,b.jY,Cl(A(81)));B$(b,b.jY,Cl(l));c=new I;g=b.jZ;m=g.data;j=b.jY;k
=m.length;if(j>=0&&j<=(k-0|0)){c.j0=L(g.data,0,j);DA(Bw(c));DA("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}i=0;}else{b=new H;b.j1=1;b.j2=1;B(b);}}}a.uC=i;if(n<3)h=0;else{b=f[2];d:{try{h=K5(b);break d;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}e=Dc;d=new K;d.jZ=G(16);D(d,d.jY,A(151));D(d,d.jY,b);D(d,d.jY,A(152));J(d,d.jY,0,10);b=new I;g=d.jZ;f=g.data;h=d.jY;i=f.length;if(h>=0&&h<=(i-0|0)){b.j0=L(g.data,0,h);if(e.py>=1){if(Dh===null){e=new FG;d=new Ck;ES(d);d.lH=BI(32);F1(e,d);e.lM=En();e.lL
=G(32);e.lN=0;e.lO=Cg;Dh=e;}e=new K;e.jZ=G(16);B$(e,e.jY,Cl(A(153)));B$(e,e.jY,Cl(A(81)));B$(e,e.jY,Cl(b));b=new I;f=e.jZ;g=f.data;i=e.jY;j=g.length;if(i>=0&&i<=(j-0|0)){b.j0=L(f.data,0,i);DA(Bw(b));DA("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}h=0;}else{b=new H;b.j1=1;b.j2=1;B(b);}}}a.uK=h;}};
let EY=F(BG);
let NH=null,M9=null,AAT=null,ML=null,Hl=null,M1=null,AEB=null;
let ABz=()=>{let b,c,d,e,f,g;b=new EY;b.kg=A(7);b.ka=0;NH=b;c=new EY;c.kg=A(154);c.ka=1;M9=c;d=new EY;d.kg=A(155);d.ka=2;AAT=d;e=new EY;e.kg=A(156);e.ka=3;ML=e;f=new EY;f.kg=A(157);f.ka=4;Hl=f;g=new EY;g.kg=A(158);g.ka=5;M1=g;AEB=T(EY,[b,c,d,e,f,g]);};
let TS=F(0);
function MH(){C.call(this);this.yh=null;}
let ACn=a=>{return;};
let VH=F(GT);
let ASa=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j9;e=a.nW;if(!c)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.bindTexture(b,e);b=a.j9.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&
c<=(g-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;R(d);B(d);},
ABg=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.clear(b);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
ACc=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.j9.clearColor(b,c,d,e);f=a.j9.getError();if(!f)return;g=new S;h=Bh(f,4);i=new K;i.jZ=G(16);D(i,i.jY,A(144));J(i,i.jY,f,10);D(i,i.jY,A(47));f=i.jY;if(h===null)h=A(2);D(i,f,h);j=new I;k=i.jZ;l=k.data;m=i.jY;n=l.length;if(m>=0&&m<=(n-0|0)){j.j0=L(k.data,0,m);g.j1=1;g.j2=1;g.j3=j;B(g);}g=new H;R(g);B(g);},
AI9=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.depthMask(!!b);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
ASW=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.disable(b);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AGq=(a,b,c,d)=>{let e,f,g,h,i,j;a.j9.drawArrays(b,c,d);b=a.j9.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;R(e);B(e);},
ASm=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.j9;g=e.ke;f.drawElements(b,c,d,g);b=a.j9.getError();if(!b)return;e=new S;h=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.jZ;k=j.data;c=f.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;R(e);B(e);},
ZD=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.enable(b);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AHO=(a,b)=>{return U(a.j9.getParameter(b));},
AKI=(a,b,c)=>{let d,e,f,g,h,i,j;a.j9.pixelStorei(b,c);b=a.j9.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;R(d);B(d);},
ADt=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MC(a,b,c,d,e,f,g,h,i,j);b=a.j9.getError();if(!b)return;j=new S;k=Bh(b,4);l=new K;l.jZ=G(16);D(l,l.jY,A(144));J(l,l.jY,b,10);D(l,l.jY,A(47));b=l.jY;if(k===null)k=A(2);D(l,b,k);m=new I;n=l.jZ;o=n.data;c=l.jY;d=o.length;if(c>=0&&c<=(d-0|0)){m.j0=L(n.data,0,c);j.j1=1;j.j2=1;j.j3=m;B(j);}j=new H;R(j);B(j);},
ACL=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.j9.texParameterf(b,c,d);b=a.j9.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;k=j.length;if(c>=0&&c<=(k-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;R(e);B(e);},
ASy=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j9.viewport(b,c,d,e);b=a.j9.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;R(f);B(f);},
XO=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kE;d=a.mn;if(!c)d=!d.kz?null:d.kw;else{e=d.ku;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kB));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.ky;}}d=b<0?null:d.kv.data[b];}i=d===null?null:d[Br]===true
?d:d.kE;a.j9.attachShader(h,i);b=a.j9.getError();if(!b)return;d=new S;j=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(j===null)j=A(2);D(h,b,j);i=new I;e=h.jZ;k=e.data;c=h.jY;f=k.length;if(c>=0&&c<=(f-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;R(d);B(d);},
WE=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j9;e=a.m5;if(!c)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.bindBuffer(b,e);b=a.j9.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;R(d);B(d);},
WC=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j9.blendFuncSeparate(b,c,d,e);b=a.j9.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;R(f);B(f);},
AHg=(a,b,c,d,e)=>{let f,g,h,i,j;Lh(a,b,c,d,e);b=a.j9.getError();if(!b)return;d=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;e=j.length;if(c>=0&&c<=(e-0|0)){h.j0=L(i.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;R(d);B(d);},
AEV=(a,b,c,d,e)=>{let f,g,h,i,j;Lg(a,b,c,d,e);b=a.j9.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;R(e);B(e);},
AS8=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mn;if(!b)c=!c.kz?null:c.kw;else{d=c.ku;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kB));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.ky;}}c=e<0?null:c.kv.data[e];}BD();g=c===null?null:c[Br]===true?c:c.kE;a.j9.compileShader(g);b=a.j9.getError();if(!b)return;c=new S;h=Bh(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(144));J(g,g.jY,b,10);D(g,g.jY,A(47));b=g.jY;if(h===null)h=A(2);D(g,b,h);i=new I;d=g.jZ;j=d.data;e=g.jY;f=j.length;if(e>=0&&e<=(f-0|0))
{i.j0=L(d.data,0,e);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
ALe=a=>{let b,c,d,e,f,g,h,i,j;b=a.j9.createProgram();c=a.pg;a.pg=c+1|0;Cc(a.lP,c,Cf(b));d=a.j9.getError();if(!d)return c;b=new S;e=Bh(d,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,d,10);D(f,f.jY,A(47));d=f.jY;if(e===null)e=A(2);D(f,d,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;R(b);B(b);},
ASL=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9.createShader(b);d=a.pa;a.pa=d+1|0;Cc(a.mn,d,Cf(c));b=a.j9.getError();if(!b)return d;c=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;R(c);B(c);},
AK9=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.disableVertexAttribArray(b);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AFd=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j9.drawElements(b,c,d,e);b=a.j9.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;R(f);B(f);},
ASX=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.enableVertexAttribArray(b);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AJ7=(a,b)=>{let c,d,e,f,g,h,i,j;a.j9.generateMipmap(b);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
AHk=(a,b,c,d,e)=>{let f,g,h,i,j;f=Kw(a,b,c,d,e);b=a.j9.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;R(d);B(d);},
Z1=(a,b,c,d,e)=>{let f,g,h,i,j;f=L1(a,b,c,d,e);b=a.j9.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;R(d);B(d);},
AFo=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kE;b=a.j9.getAttribLocation(h,Bw(c));f=a.j9.getError();if(!f)return b;c=new S;i=Bh(f,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,f,10);D(d,d.jY,A(47));b=d.jY;if(i===null)i=A(2);D(d,b,i);h=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){h.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;R(c);B(c);},
Xp=(a,b,c)=>{let d,e,f,g,h,i,j;Jj(a,b,c);b=a.j9.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(144));J(e,e.jY,b,10);D(e,e.jY,A(47));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;R(c);B(c);},
ADz=(a,b,c,d)=>{let e,f,g,h,i,j;Mr(a,b,c,d);b=a.j9.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;R(d);B(d);},
ADH=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c=U(c.getProgramInfoLog(d));b=a.j9.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
X4=(a,b,c,d)=>{let e,f,g,h,i,j;KY(a,b,c,d);b=a.j9.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(144));J(f,f.jY,b,10);D(f,f.jY,A(47));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;R(d);B(d);},
ANH=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9;d=a.mn;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c=U(c.getShaderInfoLog(d));b=a.j9.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
AP0=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j9;e=a.lP;if(!b)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;c=d.getUniformLocation(e,Bw(c));if(c===null)h=(-1);else{d=a.m8;if(!b)d=!d.kz?null:d.kw;else{f=d.ku;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1
|0)&d.ky;}}d=h<0?null:d.kv.data[h];}d=d;if(d===null){d=Dg(51,0.800000011920929);Cc(a.m8,b,d);}h=a.po;a.po=h+1|0;Cc(d,h,Cf(c));}b=a.j9.getError();if(!b)return h;c=new S;i=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;h=d.jY;g=j.length;if(h>=0&&h<=(g-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;R(c);B(c);},
AIB=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.linkProgram(d);b=a.j9.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f<=(g-0
|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
ASk=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j9;e=a.mn;if(!b)e=!e.kz?null:e.kw;else{f=e.ku;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ky;}}e=g<0?null:e.kv.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kE;d.shaderSource(e,Bw(c));b=a.j9.getError();if(!b)return;c=new S;i=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;g=d.jY;h=j.length;if(g>=0&&
g<=(h-0|0)){e.j0=L(f.data,0,g);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;R(c);B(c);},
APR=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.j9;f=d;e.texParameterf(b,c,f);b=a.j9.getError();if(!b)return;e=new S;g=Bh(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(144));J(h,h.jY,b,10);D(h,h.jY,A(47));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;R(e);B(e);},
ASE=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.m8;e=a.nV;if(!e)d=!d.kz?null:d.kw;else{f=d.ku;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kB));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.ky;}}d=g<0?null:d.kv.data[g];}d=d;if(!b)d=!d.kz?null:d.kw;else{f=d.ku;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.ky;}}d=e<0?null:d.kv.data[e];}BD();i=d===null?null:d[Br]===true?d:d.kE;a.j9.uniform1i(i,c);b
=a.j9.getError();if(!b)return;d=new S;i=Bh(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(144));J(j,j.jY,b,10);D(j,j.jY,A(47));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;f=j.jZ;l=f.data;c=j.jY;e=l.length;if(c>=0&&c<=(e-0|0)){k.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=k;B(d);}d=new H;R(d);B(d);},
X6=(a,b)=>{let c,d,e,f,g,h,i,j;a.nV=b;c=a.j9;d=a.lP;if(!b)d=!d.kz?null:d.kw;else{e=d.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kB));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ky;}}d=f<0?null:d.kv.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kE;c.useProgram(d);b=a.j9.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(144));J(d,d.jY,b,10);D(d,d.jY,A(47));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f<=
(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;R(c);B(c);},
AAX=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.j9.vertexAttribPointer(b,c,d,!!e,f,g);b=a.j9.getError();if(!b)return;h=new S;i=Bh(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(144));J(j,j.jY,b,10);D(j,j.jY,A(47));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;l=j.jZ;m=l.data;c=j.jY;d=m.length;if(c>=0&&c<=(d-0|0)){k.j0=L(l.data,0,c);h.j1=1;h.j2=1;h.j3=k;B(h);}h=new H;R(h);B(h);};
function TX(){let a=this;C.call(a);a.og=0;a.ku=null;a.kv=null;a.kw=null;a.kz=0;a.we=0.0;a.tk=0;a.kB=0;a.ky=0;}
let AEQ=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.we=c;d=JD(b,c);a.tk=d*c|0;b=d-1|0;a.ky=b;a.kB=Fa(V(b));a.ku=X(d);a.kv=Q(C,d);return;}e=new Bk;f=new K;f.jZ=G(16);D(f,f.jY,A(69));E$(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
Dg=(a,b)=>{let c=new TX();AEQ(c,a,b);return c;},
Cc=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.kw;a.kw=c;if(!a.kz){a.kz=1;a.og=a.og+1|0;}return d;}e=a.ku;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),a.kB));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.ky;}}if(f>=0){e=a.kv.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.kv.data[f]=c;b=a.og+1|0;a.og=b;if(b>=a.tk)AOX(a,g.length<<1);return null;},
GM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.kz)return null;a.kz=0;c=a.kw;a.kw=null;a.og=a.og-1|0;return c;}d=a.ku;e=Ba(V(b),E(2135587861, 2654435769));f=a.kB;g=Bl(Be(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.ky;}}if(g<0)return null;j=a.kv.data;k=j[g];l=a.ky;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bl(Be(Ba(V(n),E(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.og=a.og-1|0;return k;},
ASQ=(a,b,c)=>{let d,e,f,g;a:{d=a.kv;if(b===null){if(a.kz&&a.kw===null)return 1;d=d.data;e=a.ku;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.kw)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.kz){g=a.kw;if(b===g?1:g instanceof Fu&&g.nq==b.nq?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Fu&&g.nq==b.nq?1:0)return 1;f=f+(-1)|0;}}return 0;},
AOX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.ku.data.length;a.tk=b*a.we|0;d=b-1|0;a.ky=d;d=Fa(V(d));a.kB=d;e=a.ku;f=a.kv;g=X(b);a.ku=g;h=Q(C,b);a.kv=h;if(a.og>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.ky;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function Sc(){let a=this;C.call(a);a.nr=0;a.oL=null;a.qu=0;a.xT=0.0;a.tE=0;a.p6=0;a.oD=0;}
let ACP=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.xT=c;d=JD(b,c);a.tE=d*c|0;b=d-1|0;a.oD=b;a.p6=Fa(V(b));a.oL=X(d);return;}e=new Bk;f=new K;f.jZ=G(16);D(f,f.jY,A(69));E$(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
O0=(a,b)=>{let c=new Sc();ACP(c,a,b);return c;},
AB2=(a,b)=>{let c,d,e,f;if(!b){if(a.qu)return 0;a.qu=1;a.nr=a.nr+1|0;return 1;}c=a.oL;d=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),a.p6));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.oD;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.nr+1|0;a.nr=b;if(b>=a.tE)ACa(a,e.length<<1);return 1;},
AQP=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.qu)return 0;a.qu=0;a.nr=a.nr-1|0;return 1;}c=a.oL;d=Ba(V(b),E(2135587861, 2654435769));e=a.p6;f=Bl(Be(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.oD;}}if(f<0)return 0;h=a.oD;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.nr=a.nr-1|0;return 1;},
ACa=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.oL.data.length;a.tE=b*a.xT|0;d=b-1|0;a.oD=d;d=Fa(V(d));a.p6=d;e=a.oL;f=X(b);a.oL=f;if(a.nr>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bl(Be(Ba(V(h),E(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.oD;}f[i]=h;}g=g+1|0;}}}};
let UK=F(0);
function Mb(){C.call(this);this.sf=null;}
let XG=a=>{let b;b=a.sf;b.su=1;Uz(Bw(b.uk));},
ABU=a=>{let b;b=a.sf;b.su=1;Uz(Bw(b.uk));},
Xg=a=>{a.sf.su=0;};
let V1=F(0);
function V$(){let a=this;C.call(a);a.qE=null;a.uX=null;a.zQ=null;}
let Jm=0;
let AQw=a=>{let b,c,d,e,f,g,h,i,$$je;b=AAA();a.qE=b;c=AK6(b);a.uX=c;b=new Sl;d=a.qE;e=new Bg;e.kq=0;e.j7=Q(C,16);b.kj=e;b.kR=2147483647;b.yF=d;b.yR=c;a.zQ=b;b=Dc.rY;FO(b);a:{try{Bf(b,a);DL(b);break a;}catch($$e){$$je=Z($$e);d=$$je;}DL(b);B(d);}if(a.qE.state!=='running'?1:0){b=new Kp;b.zN=a;AAU(a.qE,B5(b,"unlockFunction"));}else{if(!Jm&&Dc.py>=2){if(BW===null){c=new CN;e=new Ck;ES(e);e.lH=BI(32);F1(c,e);c.lM=En();c.lL=G(32);c.lN=0;c.lO=Cg;BW=c;}c=new K;c.jZ=G(16);B$(c,c.jY,Cl(A(159)));B$(c,c.jY,Cl(A(81)));B$(c,
c.jY,Cl(A(160)));b=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);BX(Bw(b));BX("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}Jm=1;}},
AQT=()=>{let a=new V$();AQw(a);return a;},
AOQ=a=>{a.uX.disconnect(a.qE.destination);},
AKh=a=>{a.uX.connect(a.qE.destination);},
AAU=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
AAA=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
AK6=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function Ov(){DH.call(this);this.yc=null;}
let UG=F(BF);
function CB(){Dj.call(this);this.kC=null;}
let H=F(Bz);
let AAI=a=>{a.j1=1;a.j2=1;},
Fo=()=>{let a=new H();AAI(a);return a;},
AGh=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
Nc=a=>{let b=new H();AGh(b,a);return b;};
let E8=F(0);
let Qc=F(0);
let RP=F(0);
let RE=F(0);
let Ta=F(0);
let VX=F(0);
let T8=F(0);
let PQ=F(0);
let KW=F(0);
let OS=F();
let ALG=(a,b)=>{b=a.S(b);BD();return b===null?null:b instanceof FM()&&b instanceof EJ?(b[Br]===true?b:b.kE):b;},
APf=(a,b,c)=>{a.eQ(U(b),Dt(c,"handleEvent"));},
AOv=(a,b,c)=>{a.eR(U(b),Dt(c,"handleEvent"));},
ALs=(a,b,c,d)=>{a.eS(U(b),Dt(c,"handleEvent"),d?1:0);},
ARo=(a,b)=>{return !!a.eT(b);},
AAY=a=>{return a.eU();},
Xf=(a,b,c,d)=>{a.eV(U(b),Dt(c,"handleEvent"),d?1:0);};
let LM=F();
function JT(){let a=this;LM.call(a);a.tq=0;a.pf=null;a.wD=0.0;a.tF=0;a.rR=0;a.ro=0;a.xV=0;}
let Wl=null,QO=null;
let KO=(a,b)=>{let c,d,e;a.ro=(-1);if(b<0){c=new Bk;c.j1=1;c.j2=1;B(c);}a.tq=0;if(!b)b=1;d=Q(IG,b);e=d.data;a.pf=d;b=e.length;a.rR=b;a.wD=0.75;a.tF=b*0.75|0;},
AVi=a=>{let b=new JT();KO(b,a);return b;},
Du=(a,b,c)=>{let d,e,f,g,h,i,j;FO(a);try{if(b!==null&&c!==null){a:{if(!b.lS){d=0;while(true){if(d>=b.j0.length)break a;b.lS=(31*b.lS|0)+b.j0.charCodeAt(d)|0;d=d+1|0;}}}e=b.lS&2147483647;f=a.pf.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.w2;if(!b.lS){i=0;while(true){if(i>=b.j0.length)break b;b.lS=(31*b.lS|0)+b.j0.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.lS&&h.mX.cN(b)?1:0)break;h=h.sP;}if(h!==null){j=h.mY;h.mY=c;return j;}a.xV=a.xV+1|0;d=a.tq+1|0;a.tq=d;if(d>a.tF){AI8(a);g=e%a.pf.data.length|0;}if(g<a.rR)a.rR
=g;if(g>a.ro)a.ro=g;c:{j=new IG;j.mX=b;j.mY=c;if(!b.lS){d=0;while(true){if(d>=b.j0.length)break c;b.lS=(31*b.lS|0)+b.j0.charCodeAt(d)|0;d=d+1|0;}}}j.w2=b.lS;f=a.pf.data;j.sP=f[g];f[g]=j;return null;}b=new Df;b.j1=1;b.j2=1;B(b);}finally{DL(a);}},
AI8=a=>{let b,c,d,e,f,g,h,i,j;b=(a.pf.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Q(IG,b);e=d.data;f=a.ro+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.rR)break;h=a.pf.data[f];while(h!==null){i=(h.mX.cT()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.sP;h.sP=e[i];e[i]=h;h=j;}}a.rR=g;a.ro=c;a.pf=d;a.tF=e.length*a.wD|0;},
AXF=()=>{Wl=new Km;QO=new Kl;};
function MV(){JT.call(this);this.zE=null;}
let AFE=F();
let GB=F(BG);
let JM=null,Jt=null,LH=null,Sw=null,ANa=null;
let AJg=()=>{let b,c,d,e;b=new GB;b.kg=A(161);b.ka=0;JM=b;c=new GB;c.kg=A(162);c.ka=1;Jt=c;d=new GB;d.kg=A(157);d.ka=2;LH=d;e=new GB;e.kg=A(163);e.ka=3;Sw=e;ANa=T(GB,[b,c,d,e]);};
let DJ=F();
let ACJ=F(DJ);
let ABW=F(DJ);
let AHq=F(DJ);
let AKF=F(DJ);
let AFX=F(DJ);
function Lr(){C.call(this);this.zr=null;}
let AGU=(a,b)=>{b.preventDefault();};
function Ls(){C.call(this);this.z5=null;}
let ASn=(a,b)=>{b.preventDefault();};
function Lq(){let a=this;C.call(a);a.vE=null;a.vv=null;a.vS=null;}
let AJX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bg;e.kq=1;e.j7=Q(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=U(g.name);i=EX(h,46,h.j0.length-1|0);b=i==(-1)?A(68):Ch(h,i+1|0,h.j0.length);j=b.j0.toLowerCase();if(j!==b.j0)b=TG(j);if(Z6(b))j=FA;else{if(b===A(164))k=1;else if(!(A(164) instanceof I))k=0;else{j=A(164);k=b.j0!==j.j0?0:1;}b:{if(!k){if(b===A(165))k=1;else if(!(A(165) instanceof I))k=0;else{j=A(165);k=b.j0!==j.j0?0:1;}if(!k){if(b===A(166))k
=1;else if(!(A(166) instanceof I))k=0;else{j=A(166);k=b.j0!==j.j0?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?Fi:!AGc(b)?Fp:FJ;}l=new FileReader();b=new MD;b.sT=a;b.tW=j;b.vi=h;b.r6=e;b.vm=d;l.addEventListener("load",B5(b,"handleEvent"));if(j!==Fp&&j!==Fi){if(j===FA)l.readAsDataURL(g);else if(j===FJ)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AMy=(a,b)=>{AJX(a,b);};
function Sl(){let a=this;Dj.call(a);a.yF=null;a.yR=null;}
let US=F(0);
function Kp(){C.call(this);this.zN=null;}
let AC4=a=>{let b,c,d,e,f,g;if(!Jm&&Dc.py>=2){if(BW===null){b=new CN;Vx(b,AP5(32),0);BW=b;}b=new K;b.jZ=G(16);Ec(b,b.jY,A(159));Ec(b,b.jY,A(81));Ec(b,b.jY,A(160));c=new I;d=b.jZ;e=d.data;f=b.jY;g=e.length;if(f>=0&&f<=(g-0|0)){c.j0=L(d.data,0,f);BX(Bw(c));BX("\n");}else B(Fo());}Jm=1;};
let ABG=F(DJ);
function Ry(){let a=this;C.call(a);a.k3=null;a.md=0;a.tK=null;a.vC=0;a.qx=0;a.oO=0;a.mA=0;a.wH=null;}
let Kv=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new KH;d.lV=Q(C,10);e=QL(a,b);f=0;g=0;if(!b.j0.length){h=Q(I,1);h.data[0]=A(68);return h;}a:{while(true){if(!Q6(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.oa;if(!j.oH){b=new BN;b.j1=1;b.j2=1;Bi(b);B(b);}if(0>=j.p2){b=new H;d=new K;Bt(d);d.jZ=G(16);J(d,d.jY,0,10);e=new I;h=d.jZ;k=h.data;f=d.jY;g=k.length;if(f>=0&&f<=(g-0|0)){e.j0=L(h.data,0,f);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}j=Ch(b,g,j.lW.data[0]);G3(d,d.k$+1|0);h=d.lV.data;f=d.k$;d.k$=f+1|0;h[f]
=j;d.mI=d.mI+1|0;j=e.oa;if(!j.oH)break;if(0>=j.p2){b=new H;d=new K;Bt(d);d.jZ=G(16);J(d,d.jY,0,10);e=new I;h=d.jZ;k=h.data;f=d.jY;g=k.length;if(f>=0&&f<=(g-0|0)){e.j0=L(h.data,0,f);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}g=j.lW.data[1];f=i;}b=new BN;b.j1=1;b.j2=1;Bi(b);B(b);}b:{b=Ch(b,g,b.j0.length);G3(d,d.k$+1|0);h=d.lV.data;i=d.k$;d.k$=i+1|0;h[i]=b;d.mI=d.mI+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.k$)break;if(d.lV.data[f].j0.length)break b;Ut(d,f);}b=new H;b.j1
=1;b.j2=1;B(b);}}if(f<0)f=0;return ADf(d,Q(I,f));},
IK=(b,c)=>{let d;if(b===null){b=new Df;b.j1=1;b.j2=1;b.j3=A(167);B(b);}if(c&&(c|255)!=255){b=new Bk;b.j1=1;b.j2=1;b.j3=A(68);B(b);}O=1;d=new Ry;d.tK=Q(Ds,10);d.qx=(-1);d.oO=(-1);d.mA=(-1);return AD3(d,b,c);},
AD3=(a,b,c)=>{let d,e,f;a.k3=ADB(b,c);a.md=c;b=We(a,(-1),c,null);a.wH=b;d=a.k3;if(!d.lG&&!d.km&&d.kk==d.ml&&!(d.lc===null?0:1)?1:0){if(a.vC)b.e4();return a;}b=new Cj;e=d.lB;f=d.m4;b.j1=1;b.j2=1;b.kK=(-1);b.lF=A(68);b.lz=e;b.kK=f;B(b);},
ARM=(a,b)=>{let c,d,e,f,g,h;c=new CG;d=a.md;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bm;g.kh=X(64);c.kl=g;g=new Bm;g.kh=X(2);c.kn=g;c.sG=e;c.ts=f;while(true){h=a.k3;d=h.lG;if(!d&&!h.km&&h.kk==h.ml&&!(h.lc===null?0:1)?1:0)break;f=!d&&!h.km&&h.kk==h.ml&&!(h.lc===null?0:1)?1:0;if(!(!f&&!(h.lc===null?0:1)&&(d<0?0:1)?1:0))break;f=h.km;if(f&&f!=(-536870788)&&f!=(-536870871))break;By(h);C4(c,h.oC);g=a.k3;if(g.lG!=(-536870788))continue;By(g);}g=L5(a,c);g.e8(b);return g;},
We=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new KH;e.lV=Q(C,10);f=a.md;g=0;if(c!=f)a.md=c;a:{switch(b){case -1073741784:h=new R5;i=a.mA+1|0;a.mA=i;DZ();c=O;O=c+1|0;d=new Bc;d.jZ=G(20);h.ki=(J(d,d.jY,c,10)).T();h.l3=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Qt;i=a.mA+1|0;a.mA=i;DZ();c=O;O=c+1|0;d=new Bc;d.jZ=G(20);h.ki=(J(d,d.jY,c,10)).T();h.l3=i;break a;case -33554392:h=new SN;i=a.mA+1|0;a.mA=i;DZ();c=O;O=c+1|0;d=new Bc;d.jZ=G(20);h.ki=(J(d,d.jY,c,10)).T();h.l3=i;break a;default:i
=a.qx+1|0;a.qx=i;if(d!==null){h=new Ds;DZ();c=O;O=c+1|0;d=new Bc;d.jZ=G(20);h.ki=(J(d,d.jY,c,10)).T();h.l3=i;}else{h=new Gv;DZ();j=O;O=j+1|0;d=new Bc;d.jZ=G(20);h.ki=(J(d,d.jY,j,10)).T();h.l3=0;g=1;}c=a.qx;if(c<=(-1))break a;if(c>=10)break a;a.tK.data[c]=h;break a;}h=new V_;DZ();j=O;O=j+1|0;d=new Bc;d.jZ=G(20);h.ki=(J(d,d.jY,j,10)).T();h.l3=(-1);}while(true){k=a.k3;l=k.lG;j=!l&&!k.km&&k.kk==k.ml&&!(k.lc===null?0:1)?1:0;j=!j&&!(k.lc===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.km==(-536870788))k=ARM(a,h);else if(l==(-536870788))
{k=new Fe;j=O;O=j+1|0;d=new Bc;d.jZ=G(20);k.ki=(J(d,d.jY,j,10)).T();k.j_=h;k.kP=1;k.lp=1;k.kP=0;By(a.k3);}else{k=P2(a,h);d=a.k3;if(d.lG==(-536870788))By(d);}if(k!==null){G3(e,e.k$+1|0);m=e.lV.data;l=e.k$;e.k$=l+1|0;m[l]=k;e.mI=e.mI+1|0;}k=a.k3;j=k.lG;if(!j&&!k.km&&k.kk==k.ml&&!(k.lc===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.oC==(-536870788)){k=new Fe;c=O;O=c+1|0;d=new Bc;d.jZ=G(20);k.ki=(J(d,d.jY,c,10)).T();k.j_=h;k.kP=1;k.lp=1;k.kP=0;G3(e,e.k$+1|0);m=e.lV.data;j=e.k$;e.k$=j+1|0;m[j]=k;e.mI=e.mI+
1|0;}if(a.md!=f&&!g){a.md=f;k=a.k3;k.lu=f;k.km=k.lG;k.n8=k.lc;j=k.m4;k.kk=j+1|0;k.ri=j;By(k);}switch(b){case -1073741784:break;case -536870872:d=new Oh;b=O;O=b+1|0;k=new Bc;Bt(k);k.jZ=G(20);d.ki=(J(k,k.jY,b,10)).T();d.lK=e;d.mC=h;d.lt=h.l3;return d;case -268435416:d=new U$;b=O;O=b+1|0;k=new Bc;Bt(k);k.jZ=G(20);d.ki=(J(k,k.jY,b,10)).T();d.lK=e;d.mC=h;d.lt=h.l3;return d;case -134217688:d=new RC;b=O;O=b+1|0;k=new Bc;Bt(k);k.jZ=G(20);d.ki=(J(k,k.jY,b,10)).T();d.lK=e;d.mC=h;d.lt=h.l3;return d;case -67108824:k=new S$;b
=O;O=b+1|0;d=new Bc;Bt(d);d.jZ=G(20);k.ki=(J(d,d.jY,b,10)).T();k.lK=e;k.mC=h;k.lt=h.l3;return k;case -33554392:d=new Eo;b=O;O=b+1|0;k=new Bc;k.jZ=G(20);d.ki=(J(k,k.jY,b,10)).T();d.lK=e;d.mC=h;d.lt=h.l3;return d;default:c=e.k$;switch(c){case 0:d=new Fe;b=O;O=b+1|0;e=new Bc;e.jZ=G(20);d.ki=(J(e,e.jY,b,10)).T();d.j_=h;d.kP=1;d.lp=1;d.kP=0;return d;case 1:d=new Gk;if(0>=c){d=new H;d.j1=1;d.j2=1;B(d);}e=e.lV.data[0];b=O;O=b+1|0;k=new Bc;k.jZ=G(20);d.ki=(J(k,k.jY,b,10)).T();d.mU=e;d.mC=h;d.lt=h.l3;return d;default:}d
=new Cn;b=O;O=b+1|0;k=new Bc;k.jZ=G(20);d.ki=(J(k,k.jY,b,10)).T();d.lK=e;d.mC=h;d.lt=h.l3;return d;}k=new J0;j=O;O=j+1|0;d=new Bc;d.jZ=G(20);k.ki=(J(d,d.jY,j,10)).T();k.lK=e;k.mC=h;k.lt=h.l3;return k;},
AN6=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Pj;b.jZ=G(16);while(true){c=a.k3;d=c.lG;if(!d&&!c.km&&c.kk==c.ml&&!(c.lc===null?0:1)?1:0)break;e=!d&&!c.km&&c.kk==c.ml&&!(c.lc===null?0:1)?1:0;if(!(!e&&!(c.lc===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.n8;d=f===null?0:1;if(!(!d&&!c.km)){d=f===null?0:1;if(!(!d&&(c.km<0?0:1))){g=c.km;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}By(c);e=c.oC;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.jY;Bj(b,e,e+1|0);b.jZ.data[e]=d;}else{h=(E6(e)).data;d=0;e=h.length;g=b.jY;Bj(b,g,g+e|0);i=e+d|0;while(d<i){j=b.jZ.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.md;if(!((e&2)!=2?0:1))return AGB(b);if(!((e&64)!=64?0:1)){c=new OK;d=O;O=d+1|0;f=new Bc;f.jZ=G(20);c.ki=(J(f,f.jY,d,10)).T();c.kP=1;f=new I;h=b.jZ;j=h.data;e=b.jY;g=j.length;if(e>=0&&e<=(g-0|0)){f.j0=L(h.data,0,e);c.qj=f;c.kP=b.jY;return c;}b=new H;b.j1=1;b.j2=1;B(b);}c=new Ob;d=O;O=d+1|0;f=new Bc;f.jZ=G(20);c.ki=(J(f,f.jY,d,10)).T();c.kP
=1;f=new K;f.jZ=G(16);e=0;while(true){d=BU(e,b.jY);if(d>=0){b=new I;h=f.jZ;j=h.data;g=f.jY;d=j.length;if(g>=0&&g<=(d-0|0)){b.j0=L(h.data,0,g);c.rp=b;c.kP=f.jY;return c;}b=new H;b.j1=1;b.j2=1;B(b);}if(e<0)break;if(d>=0)break;d=b.jZ.data[e];if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}d=Cv(BZ,d)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}i=Cv(B0,d)&65535;g=f.jY;Bj(f,g,g+1|0);f.jZ.data[g]=i;e=e+1|0;}b=new H;b.j1=1;b.j2=1;B(b);},
AOo=a=>{let b,c,d,e,f,g,h,i,j;b=X(4);c=(-1);d=(-1);e=a.k3;f=e.lG;if(!(!f&&!e.km&&e.kk==e.ml&&!(e.lc===null?0:1)?1:0)){g=!f&&!e.km&&e.kk==e.ml&&!(e.lc===null?0:1)?1:0;if(!g&&!(e.lc===null?0:1)&&(f<0?0:1)?1:0){h=b.data;By(e);c=e.oC;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.k3;i=e.lG;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;By(e);e=a.k3;i=e.lG;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;By(e);e=new Ix;c=O;O=c+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,c,10)).T();e.or=h;e.rB=3;return e;}e=new Ix;c
=O;O=c+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,c,10)).T();e.or=h;e.rB=2;return e;}i=a.md;if(!((i&2)!=2?0:1)){e=new Ea;i=b[0];c=O;O=c+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,c,10)).T();e.kP=1;e.mv=i;return e;}if(!((i&64)!=64?0:1)){e=new Ka;i=b[0];c=O;O=c+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,c,10)).T();e.kP=1;e.s8=i;e.tx=F9(i);return e;}e=new Nz;i=b[0];c=O;O=c+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,c,10)).T();e.kP=1;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}i=Cv(BZ,i)&65535;if
(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}e.rW=Cv(B0,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.k3;g=e.lG;if(!g&&!e.km&&e.kk==e.ml&&!(e.lc===null?0:1)?1:0)break;i=!g&&!e.km&&e.kk==e.ml&&!(e.lc===null?0:1)?1:0;if(!(!i&&!(e.lc===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;By(e);h[c]=e.oC;c=i;}if(c==1){i=h[0];if(!(ZS.er(i)==AOH?0:1))return V8(a,h[0]);}d=a.md;if(!((d&2)!=2?0:1)){e=new Fs;i=O;O=i+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,i,10)).T();e.pr=1;e.o_=b;e.o6=c;return e;}if
((d&64)!=64?0:1){e=new V2;i=O;O=i+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,i,10)).T();e.pr=1;e.o_=b;e.o6=c;return e;}e=new Tx;i=O;O=i+1|0;j=new Bc;j.jZ=G(20);e.ki=(J(j,j.jY,i,10)).T();e.pr=1;e.o_=b;e.o6=c;return e;},
P2=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.k3;d=c.lG;e=!d&&!c.km&&c.kk==c.ml&&!(c.lc===null?0:1)?1:0;e=!e&&!(c.lc===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.n8===null?0:1)&&(c.km<0?0:1)){if(!((a.md&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AN6(a):NE(a,b,V0(a,b));}else{f=AOo(a);g=a.k3;e=g.lG;if(!(!e&&!g.km&&g.kk==g.ml&&!(g.lc===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof Gv))&&e!=(-536870788)){h=!e&&!g.km&&g.kk==g.ml&&!(g.lc===null?0:1)?1:0;if(!(!h&&!(g.lc===null?0:1)&&(e<0?0:1)?1:0))f
=NE(a,b,f);}}}else if(d!=(-536870871))f=NE(a,b,V0(a,b));else{if(b instanceof Gv){b=new Cj;g=c.lB;h=c.m4;b.j1=1;b.j2=1;b.kK=(-1);b.lF=A(68);b.lz=g;b.kK=h;B(b);}f=new Fe;e=O;O=e+1|0;c=new Bc;c.jZ=G(20);f.ki=(J(c,c.jY,e,10)).T();f.j_=b;f.kP=1;f.lp=1;f.kP=0;}c=a.k3;d=c.lG;e=!d&&!c.km&&c.kk==c.ml&&!(c.lc===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof Gv))&&d!=(-536870788)){g=P2(a,b);if(f instanceof DC&&!(f instanceof Fn)&&!(f instanceof DE)&&!(f instanceof Fl)){b=f;if(!g.fm(b.kH)){f=new Vl;c=b.kH;i=b.j_;j
=b.lp;e=O;O=e+1|0;b=new Bc;b.jZ=G(20);f.ki=(J(b,b.jY,e,10)).T();f.j_=i;f.kH=c;f.lp=j;f.la=c;c.e8(f);}}if((g.fn()&65535)!=43)f.e8(g);else f.e8(g.kH);}else{if(f===null)return null;f.e8(b);}if((f.fn()&65535)!=43)return f;return f.kH;},
NE=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.k3;e=d.lG;if(c!==null&&!(c instanceof Cx)){switch(e){case -2147483606:By(d);d=new Wv;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);d.ki=(J(g,g.jY,f,10)).T();d.j_=b;d.kH=c;d.lp=e;DZ();c.e8(H0);return d;case -2147483605:By(d);d=new Qp;h=O;O=h+1|0;g=new Bc;g.jZ=G(20);d.ki=(J(g,g.jY,h,10)).T();d.j_=b;d.kH=c;d.lp=(-2147483606);DZ();c.e8(H0);return d;case -2147483585:By(d);d=new P_;h=O;O=h+1|0;g=new Bc;Bt(g);g.jZ=G(20);d.ki=(J(g,g.jY,h,10)).T();d.j_=b;d.kH=c;d.lp=(-536870849);DZ();c.e8(H0);return d;case -2147483525:g
=new OH;i=d.lc;By(d);d=i;f=a.oO+1|0;a.oO=f;j=O;O=j+1|0;i=new Bc;Bt(i);i.jZ=G(20);g.ki=(J(i,i.jY,j,10)).T();g.j_=b;g.kH=c;g.lp=(-536870849);g.n1=d;g.na=f;DZ();c.e8(H0);return g;case -1073741782:case -1073741781:By(d);d=new RW;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);d.ki=(J(g,g.jY,f,10)).T();d.j_=b;d.kH=c;d.lp=e;c.e8(d);return d;case -1073741761:By(d);d=new Q7;h=O;O=h+1|0;g=new Bc;Bt(g);g.jZ=G(20);d.ki=(J(g,g.jY,h,10)).T();d.j_=b;d.kH=c;d.lp=(-536870849);c.e8(b);return d;case -1073741701:g=new Ub;i=d.lc;By(d);d=i;h=a.oO
+1|0;a.oO=h;j=O;O=j+1|0;i=new Bc;Bt(i);i.jZ=G(20);g.ki=(J(i,i.jY,j,10)).T();g.j_=b;g.kH=c;g.lp=(-536870849);g.n1=d;g.na=h;c.e8(g);return g;case -536870870:case -536870869:By(d);if(c.fn()!=(-2147483602)){d=new DE;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);d.ki=(J(g,g.jY,f,10)).T();d.j_=b;d.kH=c;d.lp=e;}else{h=a.md;if((h&32)!=32?0:1){d=new RX;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);d.ki=(J(g,g.jY,f,10)).T();d.j_=b;d.kH=c;d.lp=e;}else{d=new Pt;if(!(h&1)){g=F$;if(g===null){g=new JB;F$=g;}}else{g=Gm;if(g===null){g=new JA;Gm=g;}}f=
O;O=f+1|0;i=new Bc;i.jZ=G(20);d.ki=(J(i,i.jY,f,10)).T();d.j_=b;d.kH=c;d.lp=e;d.sm=g;}}c.e8(d);return d;case -536870849:By(d);d=new GR;h=O;O=h+1|0;g=new Bc;g.jZ=G(20);d.ki=(J(g,g.jY,h,10)).T();d.j_=b;d.kH=c;d.lp=(-536870849);c.e8(b);return d;case -536870789:g=new Gb;i=d.lc;By(d);d=i;h=a.oO+1|0;a.oO=h;j=O;O=j+1|0;i=new Bc;i.jZ=G(20);g.ki=(J(i,i.jY,j,10)).T();g.j_=b;g.kH=c;g.lp=(-536870849);g.n1=d;g.na=h;c.e8(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:By(d);d
=new Wx;f=O;O=f+1|0;c=new Bc;c.jZ=G(20);d.ki=(J(c,c.jY,f,10)).T();d.j_=b;d.kH=i;d.lp=e;d.la=i;i.j_=d;return d;case -2147483585:By(d);c=new Vg;h=O;O=h+1|0;d=new Bc;Bt(d);d.jZ=G(20);c.ki=(J(d,d.jY,h,10)).T();c.j_=b;c.kH=i;c.lp=(-2147483585);c.la=i;return c;case -2147483525:c=new P1;g=d.lc;By(d);d=g;h=O;O=h+1|0;g=new Bc;Bt(g);g.jZ=G(20);c.ki=(J(g,g.jY,h,10)).T();c.j_=b;c.kH=i;c.lp=(-2147483525);c.la=i;c.pB=d;return c;case -1073741782:case -1073741781:By(d);d=new QZ;f=O;O=f+1|0;c=new Bc;c.jZ=G(20);d.ki=(J(c,c.jY,
f,10)).T();d.j_=b;d.kH=i;d.lp=e;d.la=i;i.j_=d;return d;case -1073741761:By(d);c=new TA;h=O;O=h+1|0;d=new Bc;Bt(d);d.jZ=G(20);c.ki=(J(d,d.jY,h,10)).T();c.j_=b;c.kH=i;c.lp=(-1073741761);c.la=i;return c;case -1073741701:c=new RD;g=d.lc;By(d);d=g;h=O;O=h+1|0;g=new Bc;Bt(g);g.jZ=G(20);c.ki=(J(g,g.jY,h,10)).T();c.j_=b;c.kH=i;c.lp=(-1073741701);c.la=i;c.pB=d;return c;case -536870870:case -536870869:By(d);d=new DC;f=O;O=f+1|0;c=new Bc;c.jZ=G(20);d.ki=(J(c,c.jY,f,10)).T();d.j_=b;d.kH=i;d.lp=e;d.la=i;i.j_=d;return d;case -536870849:By(d);c
=new Fl;h=O;O=h+1|0;d=new Bc;d.jZ=G(20);c.ki=(J(d,d.jY,h,10)).T();c.j_=b;c.kH=i;c.lp=(-536870849);c.la=i;return c;case -536870789:c=new Fn;g=d.lc;By(d);d=g;h=O;O=h+1|0;g=new Bc;g.jZ=G(20);c.ki=(J(g,g.jY,h,10)).T();c.j_=b;c.kH=i;c.lp=(-536870789);c.la=i;c.pB=d;return c;default:}return c;},
V0=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof Gv;while(true){a:{e=a.k3;f=e.lG;if((f&(-2147418113))==(-2147483608)){By(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.md=g;else{if(f!=(-1073741784))g=a.md;c=We(a,f,g,b);e=a.k3;if(e.lG!=(-536870871)){b=new Cj;h=e.lB;i=e.m4;b.j1=1;b.j2=1;b.kK=(-1);b.lF=A(68);b.lz=h;b.kK=i;B(b);}By(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.qx<j){c=new Cj;h=e.lB;i=e.m4;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=h;c.kK=i;B(c);}By(e);g=a.mA+1|0;a.mA=g;i=a.md;if(!((i&2)!=2?0:1)){c=new Vp;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.q1=j;c.pI=g;}else if(!((i&64)!=64?0:1)){c=new GH;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.q1=j;c.pI=g;}else{c=new Rw;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.q1=j;c.pI=g;}a.tK.data[j].tH=1;a.vC=1;break a;case -2147483583:break;case -2147483582:By(e);c
=new K9;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.uZ=0;break a;case -2147483577:By(e);c=new Pn;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();break a;case -2147483558:By(e);c=new Nx;j=a.mA+1|0;a.mA=j;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.qd=j;break a;case -2147483550:By(e);c=new K9;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.uZ=1;break a;case -2147483526:By(e);c=new Vv;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();break a;case -536870876:break b;case -536870866:By(e);i
=a.md;if((i&32)!=32?0:1){c=new Vr;i=O;O=i+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,i,10)).T();break a;}c=new PV;if(!(i&1)){h=F$;if(h===null){h=new JB;F$=h;}}else{h=Gm;if(h===null){h=new JA;Gm=h;}}k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.uf=h;break a;case -536870821:By(e);i=0;c=a.k3;if(c.lG==(-536870818)){i=1;By(c);}c=L5(a,G6(a,i));c.e8(b);h=a.k3;k=h.lG;if(k!=(-536870819)){b=new Cj;e=h.lB;i=h.m4;b.j1=1;b.j2=1;b.kK=(-1);b.lF=A(68);b.lz=e;b.kK=i;B(b);}h.n_=1;h.km=k;h.n8=h.lc;h.kk=h.ri;h.ri=h.m4;By(h);By(a.k3);break a;case -536870818:break c;case 0:c
=e.lc;h=c;if(h!==null)c=L5(a,h);else{if(!f&&!e.km&&e.kk==e.ml&&!(c===null?0:1)?1:0){c=new Fe;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.j_=b;c.kP=1;c.lp=1;c.kP=0;break a;}c=new Ea;j=f&65535;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.kP=1;c.mv=j;}By(a.k3);break a;default:if(f>=0&&!(e.lc===null?0:1)){c=V8(a,f);By(a.k3);break a;}if(f==(-536870788)){c=new Fe;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.j_=b;c.kP=1;c.lp=1;c.kP=0;break a;}if(f!=(-536870871)){b=new Cj;c
=e.lc;if(c===null?0:1)c=c.T();else{k=f&65535;c=new I;l=G(1);m=l.data;m[0]=k;c.j0=L(l.data,0,m.length);}e=a.k3;h=e.lB;i=e.m4;b.j1=1;b.j2=1;b.kK=(-1);b.lF=c;b.lz=h;b.kK=i;B(b);}if(d){b=new Cj;h=e.lB;i=e.m4;b.j1=1;b.j2=1;b.kK=(-1);b.lF=A(68);b.lz=h;b.kK=i;B(b);}c=new Fe;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.j_=b;c.kP=1;c.lp=1;c.kP=0;break a;}By(e);c=new LL;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();break a;}By(e);a.mA=a.mA+1|0;i=a.md;if(!((i&8)!=8?0:1)){c=new LL;k=O;O=k+1|0;e
=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();break a;}c=new OO;if(!(i&1)){h=F$;if(h===null){h=new JB;F$=h;}}else{h=Gm;if(h===null){h=new JA;Gm=h;}}k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.wA=h;break a;}By(e);j=a.mA+1|0;a.mA=j;i=a.md;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new SQ;i=O;O=i+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,i,10)).T();c.sI=j;}else{c=new Oe;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.qK=j;}}else if((i&1)!=1?0:1){c=new Vh;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,
e.jY,k,10)).T();c.sx=j;}else{c=new Nx;k=O;O=k+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,k,10)).T();c.qd=j;}}}if(f!=(-16777176))break;}return c;},
G6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new CG;d=a.md;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bm;f.kh=X(64);c.kl=f;f=new Bm;f.kh=X(2);c.kn=f;c.sG=e;c.ts=d;EN(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.k3;b=k.lG;if(!b&&!k.km&&k.kk==k.ml&&!(k.lc===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)C4(c,g);f=a.k3;By(f);g=f.oC;f=a.k3;if(f.lG!=(-536870874)){g=38;break d;}if(f.km==(-536870821)){By(f);h=1;g=(-1);break d;}By(f);if(j){c=G6(a,0);break d;}if(a.k3.lG
==(-536870819))break d;VC(c,G6(a,0));break d;case -536870867:if(!j){b=k.km;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){By(k);k=a.k3;d=k.lG;if(k.lc===null?0:1)break c;if(d<0){b=k.km;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AFF(d))break e;d=d&65535;break e;}catch($$e){$$je=Z($$e);if($$je instanceof BF){break b;}else{throw $$e;}}}try{BT(c,g,d);}catch($$e){$$je=Z($$e);if($$je instanceof BF){break b;}else{throw $$e;}}By(a.k3);g=(-1);break d;}}if(g>=0)C4(c,g);g=45;By(a.k3);break d;case -536870821:if
(g>=0){C4(c,g);g=(-1);}By(a.k3);e=0;f=a.k3;if(f.lG==(-536870818)){By(f);e=1;}if(!h)W5(c,G6(a,e));else VC(c,G6(a,e));h=0;By(a.k3);break d;case -536870819:break;case -536870818:if(g>=0)C4(c,g);g=94;By(a.k3);break d;case 0:if(g>=0)C4(c,g);f=a.k3.lc;if(f===null)g=0;else{ATC(c,f);g=(-1);}By(a.k3);break d;default:if(g>=0)C4(c,g);f=a.k3;By(f);g=f.oC;break d;}if(g>=0)C4(c,g);g=93;By(a.k3);}j=0;}c=new Cj;l=k.lB;g=k.m4;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=l;c.kK=g;B(c);}c=new Cj;k=a.k3;l=k.lB;g=k.m4;c.j1=1;c.j2=1;c.kK
=(-1);c.lF=A(68);c.lz=l;c.kK=g;B(c);}if(!i){if(g>=0)C4(c,g);return c;}c=new Cj;l=k.lB;b=k.m4-1|0;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=l;c.kK=b;B(c);},
V8=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.md;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Ka;b=b&65535;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.kP=1;e.s8=b;e.tx=F9(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new N_;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.kP=1;e.kP=2;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null
?U(BL.value):null)));}e.ua=Cv(B0,b);return e;}if(b<=57343&&b>=56320?1:0){e=new HF;b=b&65535;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.oP=b;return e;}if(b<=56319&&b>=55296?1:0){e=new HL;b=b&65535;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.oz=b;return e;}e=new Nz;b=b&65535;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.kP=1;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value
!==null?U(BL.value):null)));}e.rW=Cv(B0,b)&65535;return e;}}if(c){e=new Eu;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.kP=1;e.kP=2;e.pX=b;h=(E6(b)).data;e.pM=h[0];e.pi=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new HF;b=b&65535;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.oP=b;return e;}if(b<=56319&&b>=55296?1:0){e=new HL;b=b&65535;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.oz=b;return e;}e=new Ea;b=b&65535;f=O;O=f+1|0;g=new Bc;g.jZ=G(20);e.ki=(J(g,g.jY,f,10)).T();e.kP
=1;e.mv=b;return e;},
L5=(a,b)=>{let c,d,e,f,g,h;if(!AJq(b)){if(b.lg){if(!b.fw()){c=new DQ;d=O;O=d+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,d,10)).T();c.mD=b.fx();c.qk=b.kG;return c;}c=new Kd;d=O;O=d+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,d,10)).T();c.mD=b.fx();c.qk=b.kG;return c;}if(b.fw()){c=new KP;d=O;O=d+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,d,10)).T();c.kP=1;c.sr=b.fx();c.t6=b.kG;return c;}c=new Ed;d=O;O=d+1|0;e=new Bc;e.jZ=G(20);c.ki=(J(e,e.jY,d,10)).T();c.kP=1;c.nh=b.fx();c.uA=b.kG;return c;}c=Y9(b);e=new On;d=O;O=d+1|0;f=
new Bc;f.jZ=G(20);e.ki=(J(f,f.jY,d,10)).T();e.sn=c;e.tj=c.kG;if(b.lg){if(!b.fw()){c=new Hi;f=new DQ;b=Iv(b);d=O;O=d+1|0;g=new Bc;g.jZ=G(20);f.ki=(J(g,g.jY,d,10)).T();f.mD=b;f.qk=b.kG;d=O;O=d+1|0;b=new Bc;b.jZ=G(20);c.ki=(J(b,b.jY,d,10)).T();c.pD=f;c.pu=e;return c;}c=new Hi;f=new Kd;g=Iv(b);h=O;O=h+1|0;b=new Bc;b.jZ=G(20);f.ki=(J(b,b.jY,h,10)).T();f.mD=g;f.qk=g.kG;d=O;O=d+1|0;b=new Bc;b.jZ=G(20);c.ki=(J(b,b.jY,d,10)).T();c.pD=f;c.pu=e;return c;}if(b.fw()){c=new Hi;f=new KP;b=Iv(b);d=O;O=d+1|0;g=new Bc;g.jZ=G(20);f.ki
=(J(g,g.jY,d,10)).T();f.kP=1;f.sr=b;f.t6=b.kG;d=O;O=d+1|0;b=new Bc;b.jZ=G(20);c.ki=(J(b,b.jY,d,10)).T();c.pD=f;c.pu=e;return c;}c=new Hi;f=new Ed;b=Iv(b);d=O;O=d+1|0;g=new Bc;g.jZ=G(20);f.ki=(J(g,g.jY,d,10)).T();f.kP=1;f.nh=b;f.uA=b.kG;d=O;O=d+1|0;b=new Bc;b.jZ=G(20);c.ki=(J(b,b.jY,d,10)).T();c.pD=f;c.pu=e;return c;},
F9=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let Ns=F(0);
function SC(){let a=this;C.call(a);a.yJ=null;a.xw=null;a.sw=null;a.oa=null;a.sk=0;a.tV=0;}
let Oi=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.sw.j0.length;if(b>=0&&b<=c){d=a.oa;d.oH=0;d.rE=2;e=d.lW.data;f=0;g=e.length;if(f>g){d=new Bk;R(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.lq.data;f=0;g=e.length;if(f>g){d=new Bk;R(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.oi=d.mQ;d.rE=1;d.oi=b;c=d.rI;if(c<0)c=b;d.rI=c;b=a.xw.fA(b,a.sw,d);if(b==(-1))a.oa.mG=1;if(b>=0){d=a.oa;b=d.oH;if(b){e=d.lW.data;if(e[0]==(-1)){f=d.oi;e[0]=f;e[1]=f;}if(!b){d=new BN;d.j1=1;d.j2=1;Bi(d);B(d);}if(0<d.p2){d.rI=e[1];return 1;}d=new H;i
=new K;Bt(i);i.jZ=G(16);J(i,i.jY,0,10);j=new I;e=i.jZ;k=e.data;c=i.jY;f=k.length;if(c>=0&&c<=(f-0|0)){j.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}}a.oa.oi=(-1);return 0;}d=new H;i=new K;i.jZ=G(16);J(i,i.jY,b,10);j=new I;e=i.jZ;k=e.data;c=i.jY;f=k.length;if(c>=0&&c<=(f-0|0)){j.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;d.j1=1;d.j2=1;B(d);},
Q6=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.sw.j0.length;c=a.oa;if(!c.sE)b=a.tV;if(c.oi>=0&&c.rE==1){d=c.oH;if(!d){c=new BN;c.j1=1;c.j2=1;B(c);}e=BU(0,c.p2);if(e>=0){c=new H;f=new K;f.jZ=G(16);J(f,f.jY,0,10);g=new I;h=f.jZ;i=h.data;b=f.jY;j=i.length;if(b>=0&&b<=(j-0|0)){g.j0=L(h.data,0,b);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}h=c.lW.data;k=h[1];c.oi=k;if(!d){c=new BN;c.j1=1;c.j2=1;B(c);}if(e>=0){c=new H;f=new K;f.jZ=G(16);J(f,f.jY,0,10);g=new I;h=f.jZ;i=h.data;b=f.jY;j=i.length;if(b>=0&&b<=(j-0|0))
{g.j0=L(h.data,0,b);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}j=h[1];if(!d){c=new BN;c.j1=1;c.j2=1;B(c);}if(e<0){if(j==h[0])c.oi=k+1|0;l=c.oi;return l<=b&&Oi(a,l)?1:0;}c=new H;f=new K;f.jZ=G(16);J(f,f.jY,0,10);g=new I;h=f.jZ;i=h.data;b=f.jY;j=i.length;if(b>=0&&b<=(j-0|0)){g.j0=L(h.data,0,b);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}return Oi(a,a.sk);},
WM=(a,b,c)=>{let d,e;a.sk=(-1);a.tV=(-1);a.yJ=b;a.xw=b.wH;a.sw=c;a.sk=0;d=c.j0.length;a.tV=d;e=AQd(c,a.sk,d,b.qx,b.oO+1|0,b.mA+1|0);a.oa=e;e.pn=1;},
QL=(a,b)=>{let c=new SC();WM(c,a,b);return c;};
let Z$=F();
let CK=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=Ps(AOS(b,c));}catch($$e){$$je=Z($$e);if($$je instanceof KJ){d=$$je;break a;}else if($$je instanceof Hj){d=$$je;break b;}else{throw $$e;}}return d;}e=new B7;if(b.j$===null)b.j$=U(b.kf.$meta.name);f=b.j$;b=new K;b.jZ=G(16);D(b,b.jY,A(168));g=b.jY;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.jZ;i=c.data;j=b.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(c.data,0,j);e.j1=1;e.j2=1;e.j3=h;e.lm=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}e=new B7;if(b.j$
===null)b.j$=U(b.kf.$meta.name);f=b.j$;b=new K;b.jZ=G(16);D(b,b.jY,A(169));g=b.jY;if(f===null)f=A(2);D(b,g,f);D(b,b.jY,A(170));h=new I;c=b.jZ;i=c.data;j=b.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(c.data,0,j);e.j1=1;e.j2=1;e.j3=h;e.lm=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}c=(ARV(b)).data;if(c.length<=0)b=null;else{b=new KS;b.lE=c[0];}return b;},
CI=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=Ps(AOU(b,c));}catch($$e){$$je=Z($$e);if($$je instanceof KJ){d=$$je;break a;}else if($$je instanceof Hj){d=$$je;e=new B7;if(b.j$===null)b.j$=U(b.kf.$meta.name);f=b.j$;b=new K;b.jZ=G(16);D(b,b.jY,A(168));g=b.jY;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.jZ;i=c.data;j=b.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(c.data,0,j);e.j1=1;e.j2=1;e.j3=h;e.lm=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}else{throw $$e;}}return d;}e=new B7;if(b.j$===null)b.j$=U(b.kf.$meta.name);f=b.j$;b=new K;b.jZ
=G(16);D(b,b.jY,A(171));g=b.jY;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.jZ;i=c.data;k=b.jY;j=i.length;if(k>=0&&k<=(j-0|0)){h.j0=L(c.data,0,k);e.j1=1;e.j2=1;e.j3=h;e.lm=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);};
function KS(){C.call(this);this.lE=null;}
let AQO=(a,b)=>{a.lE=b;},
Ps=a=>{let b=new KS();AQO(b,a);return b;},
CM=(a,b)=>{return;},
CZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=Q(C,0);a:{b:{c:{try{c=AO7(a.lE,b);}catch($$e){$$je=Z($$e);if($$je instanceof Bk){c=$$je;break c;}else if($$je instanceof MB){c=$$je;break a;}else if($$je instanceof J_){c=$$je;break b;}else if($$je instanceof ON){c=$$je;d=new B7;e=a.lE.lD;if(e.j$===null)e.j$=U(e.kf.$meta.name);e=e.j$;f=new K;f.jZ=G(16);D(f,f.jY,A(172));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.lm
=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);}else{throw $$e;}}return c;}d=new B7;e=a.lE.lD;if(e.j$===null)e.j$=U(e.kf.$meta.name);e=e.j$;f=new K;f.jZ=G(16);D(f,f.jY,A(173));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.lm=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);}d=new B7;e=a.lE.lD;if(e.j$===null)e.j$=U(e.kf.$meta.name);e=e.j$;f=new K;f.jZ=G(16);D(f,f.jY,A(174));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k
=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.lm=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);}d=new B7;e=a.lE.lD;if(e.j$===null)e.j$=U(e.kf.$meta.name);e=e.j$;f=new K;f.jZ=G(16);D(f,f.jY,A(174));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.lm=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);};
let B7=F(BF);
function EJ(){C.call(this);this.kE=null;}
let AMz=null,MX=null,Hc=null,Ie=null,Qj=null,VO=null,PR=null;
let BD=()=>{BD=BQ(EJ);ABb();};
let Cf=b=>{let c,d,e,f,g,h,i;BD();if(b===null)return null;c=b;d=U(typeof c);if(d===A(175))e=1;else if(!(A(175) instanceof I))e=0;else{f=A(175);e=d.j0!==f.j0?0:1;}a:{if(!e){if(d===A(176))e=1;else if(!(A(176) instanceof I))e=0;else{f=A(176);e=d.j0!==f.j0?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Br]===true)return b;b=MX;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EJ;h.kE=c;MX.set(c,new WeakRef(h));return h;}if(d===A(177))e=1;else if
(!(A(177) instanceof I))e=0;else{b=A(177);e=d.j0!==b.j0?0:1;}if(e){f=Hc.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EJ;h.kE=c;i=h;Hc.set(c,new WeakRef(i));OY(VO,i,c);return h;}if(d===A(178))e=1;else if(!(A(178) instanceof I))e=0;else{b=A(178);e=d.j0!==b.j0?0:1;}if(e){f=Ie.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EJ;h.kE=c;i=h;Ie.set(c,new WeakRef(i));OY(PR,i,c);return h;}if(d===A(179))e=1;else if
(!(A(179) instanceof I))e=0;else{b=A(179);e=d.j0!==b.j0?0:1;}if(e){f=Qj;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EJ;h.kE=c;Qj=new WeakRef(h);return h;}}b=new EJ;b.kE=c;return b;},
ABb=()=>{AMz=new WeakMap();MX=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Hc=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();Ie=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();VO=Hc===null?null:new FinalizationRegistry(B5(new Ml,"accept"));PR=Ie===null?null:new FinalizationRegistry(B5(new Mk,"accept"));},
OY=(b,c,d)=>{return b.register(c,d);};
let Rc=F(0);
let Km=F();
let HQ=F(0);
let Kl=F();
function Ul(){let a=this;C.call(a);a.lW=null;a.lq=null;a.nD=null;a.ql=null;a.p2=0;a.oH=0;a.mQ=0;a.kM=0;a.oi=0;a.sE=0;a.pn=0;a.mG=0;a.zU=0;a.rI=0;a.rE=0;}
let AKt=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.rI=(-1);h=e+1|0;a.p2=h;i=X(h*2|0);a.lW=i;j=X(g);k=j.data;a.lq=j;e=0;g=k.length;l=BU(e,g);if(l>0){b=new Bk;b.j1=1;b.j2=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.nD=X(f);i=i.data;h=0;m=i.length;e=BU(h,m);if(e>0){b=new Bk;b.j1=1;b.j2=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.oH=0;a.rE=2;f=0;if(e>0){b=new Bk;b.j1=1;b.j2=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bk;b.j1=1;b.j2=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.ql=b;if(c
>=0){a.mQ=c;a.kM=d;}a.oi=a.mQ;},
AQd=(a,b,c,d,e,f)=>{let g=new Ul();AKt(g,a,b,c,d,e,f);return g;};
let Cu=F(Bk);
let KJ=F(Bz);
let Ex=F(BF);
let Hj=F(Ex);
let Df=F(Bz);
function Cb(){let a=this;C.call(a);a.j_=null;a.mw=0;a.ki=null;a.lp=0;}
let O=0;
let ACi=(a,b,c,d)=>{let e;e=d.kM;while(true){if(b>e)return (-1);if(a.fI(b,c,d)>=0)break;b=b+1|0;}return b;},
AFe=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fI(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AUM=(a,b)=>{a.lp=b;},
AAn=a=>{return a.lp;},
AWg=a=>{let b,c,d,e,f,g,h,i;b=a.ki;c=a.fJ();d=new K;d.jZ=G(16);e=d.jY;Bj(d,e,e+1|0);d.jZ.data[e]=60;f=d.jY;if(b===null)b=A(2);D(d,f,b);e=d.jY;Bj(d,e,e+1|0);d.jZ.data[e]=58;f=d.jY;if(c===null)c=A(2);D(d,f,c);e=d.jY;Bj(d,e,e+1|0);g=d.jZ;h=g.data;h[e]=62;b=new I;e=d.jY;i=h.length;if(e>=0&&e<=(i-0|0)){b.j0=L(g.data,0,e);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
ANV=a=>{let b,c,d,e,f,g,h,i;b=a.ki;c=a.fJ();d=new K;d.jZ=G(16);e=d.jY;Bj(d,e,e+1|0);d.jZ.data[e]=60;f=d.jY;if(b===null)b=A(2);D(d,f,b);e=d.jY;Bj(d,e,e+1|0);d.jZ.data[e]=58;f=d.jY;if(c===null)c=A(2);D(d,f,c);e=d.jY;Bj(d,e,e+1|0);g=d.jZ;h=g.data;h[e]=62;b=new I;e=d.jY;i=h.length;if(e>=0&&e<=(i-0|0)){b.j0=L(g.data,0,e);return b;}b=new H;R(b);B(b);},
AW1=a=>{return a.j_;},
AQx=(a,b)=>{a.j_=b;},
AQv=(a,b)=>{return 1;},
ASc=a=>{return null;},
Ih=a=>{let b;a.mw=1;b=a.j_;if(b!==null){if(!b.mw){b=b.fK();if(b!==null){a.j_.mw=1;a.j_=b;}a.j_.e4();}else if(b instanceof Gk&&b.mC.tH)a.j_=b.j_;}},
AXI=()=>{O=1;};
let MR=F();
let ARY=F();
let AEj=F();
let ATH=F();
let KZ=F(0);
let Ml=F();
let AQF=(a,b)=>{let c;BD();b=b===null?null:b instanceof FM()?b:Cf(b);c=Hc;b=b===null?null:b[Br]===true?b:b.kE;c.delete(b);};
let AFT=F();
let Mk=F();
let YT=(a,b)=>{let c;BD();b=b===null?null:b instanceof FM()?b:Cf(b);c=Ie;b=b===null?null:b[Br]===true?b:b.kE;c.delete(b);};
let N5=F(0);
function Hv(){let a=this;C.call(a);a.mX=null;a.mY=null;}
function IG(){let a=this;Hv.call(a);a.sP=null;a.w2=0;}
function Ds(){let a=this;Cb.call(a);a.tH=0;a.l3=0;}
let H0=null;
let DZ=()=>{DZ=BQ(Ds);ADr();};
let Zg=(a,b,c,d)=>{let e,f,g;e=a.l3;f=d.lW.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.j_.fI(b,c,d);if(g<0){b=a.l3;d.lW.data[(b*2|0)+1|0]=e;}return g;},
AWb=a=>{return a.l3;},
AFO=a=>{return A(180);},
ZY=(a,b)=>{return 0;},
ADr=()=>{let b,c,d;b=new Pk;c=O;O=c+1|0;d=new Bc;d.jZ=G(20);b.ki=(J(d,d.jY,c,10)).T();H0=b;};
function To(){let a=this;C.call(a);a.lC=null;a.lu=0;a.n_=0;a.xz=0;a.oC=0;a.lG=0;a.km=0;a.ml=0;a.lc=null;a.n8=null;a.kk=0;a.ll=0;a.m4=0;a.ri=0;a.lB=null;}
let QD=null,ZS=null,AOH=0;
let AQz=(a,b,c)=>{let d,e,f,g,h,i,j;a.n_=1;a.lB=b;if((c&16)>0){d=new K;d.jZ=G(16);D(d,d.jY,A(181));e=0;while(true){f=Qr(b,A(182),e);if(f<0)break;g=f+2|0;h=Ch(b,e,g);D(d,d.jY,h);D(d,d.jY,A(183));e=g;}b=Ch(b,e,b.j0.length);D(d,d.jY,b);D(d,d.jY,A(182));b=new I;i=d.jZ;j=i.data;e=d.jY;f=j.length;if(e>=0&&e<=(f-0|0))b.j0=L(i.data,0,e);else{b=new H;b.j1=1;b.j2=1;B(b);}}a.lC=G(b.j0.length+2|0);j=G(b.j0.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Di(j,0,a.lC,0,b.j0.length);i=a.lC.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.ml=g;a.lu=c;By(a);By(a);return;}if(e<0)break;if(e>=b.j0.length)break;i[e]=b.j0.charCodeAt(e);e=e+1|0;}b=new W;b.j1=1;b.j2=1;B(b);},
ADB=(a,b)=>{let c=new To();AQz(c,a,b);return c;},
By=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.oC=a.lG;a.lG=a.km;a.lc=a.n8;a.m4=a.ri;a.ri=a.kk;a:{while(true){b=0;c=a.kk>=a.lC.data.length?0:M7(a);a.km=c;a.n8=null;if(a.n_==4){if(c!=92)return;c=a.kk;d=a.lC.data;if(c>=d.length)c=0;else{a.ll=c;if(a.lu&4)Cq(a);else a.kk=c+1|0;c=d[a.ll];}a.km=c;switch(c){case 69:break;default:a.km=92;a.kk=a.ll;return;}a.n_=a.xz;a.km=a.kk>(a.lC.data.length-2|0)?0:M7(a);}b:{c=a.km;if(c==92){c=a.kk>=(a.lC.data.length-2|0)?(-1):M7(a);c:{d:{a.km=c;switch(c){case -1:e=new Cj;f=a.lB;c=a.kk;e.j1
=1;e.j2=1;e.kK=(-1);e.lF=A(68);e.lz=f;e.kK=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.km
=ALa(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.n_!=1)break b;a.km=(-2147483648)|c;break b;case 65:a.km=(-2147483583);break b;case 66:a.km=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cj;f=a.lB;c=a.kk;e.j1=1;e.j2=1;e.kK=(-1);e.lF=A(68);e.lz=f;e.kK=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.km
=(-2147483577);break b;case 80:case 112:break c;case 81:a.xz=a.n_;a.n_=4;b=1;break b;case 90:a.km=(-2147483558);break b;case 97:a.km=7;break b;case 98:a.km=(-2147483550);break b;case 99:c=a.kk;d=a.lC.data;if(c>=(d.length-2|0)){e=new Cj;f=a.lB;e.j1=1;e.j2=1;e.kK=(-1);e.lF=A(68);e.lz=f;e.kK=c;B(e);}a.ll=c;if(a.lu&4)Cq(a);else a.kk=c+1|0;a.km=d[a.ll]&31;break b;case 101:a.km=27;break b;case 102:a.km=12;break b;case 110:a.km=10;break b;case 114:a.km=13;break b;case 116:a.km=9;break b;case 117:a.km=Qs(a,4);break b;case 120:a.km
=Qs(a,2);break b;case 122:a.km=(-2147483526);break b;default:}break b;}e=new I;d=a.lC;g=d.data;h=a.ll;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.j0=L(d.data,h,1);e=VJ(IJ,e);if(e.ob===null)e.ob=e.fR();a.n8=e.ob;a.km=0;break b;}e=AKk(a);j=0;if(a.km==80)j=1;try{a.n8=AH7(e,j);}catch($$e){$$je=Z($$e);if($$je instanceof Kj){e=new Cj;f=a.lB;c=a.kk;e.j1=1;e.j2=1;e.kK=(-1);e.lF=A(68);e.lz=f;e.kK=c;B(e);}else{throw $$e;}}a.km=0;}else{h=a.n_;if(h==1)switch(c){case 36:a.km=(-536870876);break b;case 40:d=a.lC.data;c
=a.kk;if(d[c]!=63){a.km=(-2147483608);break b;}a.ll=c;if(a.lu&4)Cq(a);else a.kk=c+1|0;c=a.lC.data[a.kk];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.km=(-134217688);k=a.kk;a.ll=k;if(a.lu&4)Cq(a);else a.kk=k+1|0;break e;default:e=new Cj;f=a.lB;c=a.kk;e.j1=1;e.j2=1;e.kK=(-1);e.lF=A(68);e.lz=f;e.kK=c;B(e);}a.km=(-67108824);j=a.kk;a.ll=j;if(a.lu&4)Cq(a);else a.kk=j+1|0;}else{switch(c){case 33:break;case 60:h=a.kk;a.ll=h;if(a.lu&4)Cq(a);else a.kk=h+1|0;c=a.lC.data[a.kk];h=1;break e;case 61:a.km
=(-536870872);j=a.kk;a.ll=j;if(a.lu&4)Cq(a);else a.kk=j+1|0;break e;case 62:a.km=(-33554392);j=a.kk;a.ll=j;if(a.lu&4)Cq(a);else a.kk=j+1|0;break e;default:i=AS4(a);a.km=i;if(i<256){a.lu=i;i=i<<16;a.km=i;a.km=(-1073741784)|i;break e;}i=i&255;a.km=i;a.lu=i;i=i<<16;a.km=i;a.km=(-16777176)|i;break e;}a.km=(-268435416);j=a.kk;a.ll=j;if(a.lu&4)Cq(a);else a.kk=j+1|0;}}if(!h)break;}break b;case 41:a.km=(-536870871);break b;case 42:case 43:case 63:h=a.kk;d=a.lC.data;switch(h>=d.length?42:d[h]){case 43:a.km=c|(-2147483648);a.ll
=h;if(a.lu&4)Cq(a);else a.kk=h+1|0;break b;case 63:a.km=c|(-1073741824);a.ll=h;if(a.lu&4)Cq(a);else a.kk=h+1|0;break b;default:}a.km=c|(-536870912);break b;case 46:a.km=(-536870866);break b;case 91:a.km=(-536870821);a.n_=2;break b;case 93:if(h!=2)break b;a.km=(-536870819);break b;case 94:a.km=(-536870818);break b;case 123:a.n8=AQU(a,c);break b;case 124:a.km=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.km=(-536870874);break b;case 45:a.km=(-536870867);break b;case 91:a.km=(-536870821);break b;case 93:a.km
=(-536870819);break b;case 94:a.km=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new H;e.j1=1;e.j2=1;B(e);},
AKk=a=>{let b,c,d,e,f,g,h,i;b=new K;b.jZ=G(10);c=a.kk;d=a.lC;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new I;a.ll=c;if(a.lu&4)Cq(a);else a.kk=c+1|0;g=a.ll;if(g>=0&&1<=(f-g|0)){b.j0=L(d.data,g,1);h=new K;h.jZ=G(16);D(h,h.jY,A(184));D(h,h.jY,b);b=new I;d=h.jZ;e=d.data;f=h.jY;g=e.length;if(f>=0&&f<=(g-0|0)){b.j0=L(d.data,0,f);return b;}b=new H;b.j1=1;b.j2=1;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}a.ll=c;if(a.lu&4)Cq(a);else a.kk=c+1|0;c=0;a:{while(true){f=a.kk;d=a.lC.data;if(f>=(d.length-2|0))break;a.ll=f;if
(a.lu&4)Cq(a);else a.kk=f+1|0;c=d[a.ll];if(c==125)break a;f=b.jY;Bj(b,f,f+1|0);b.jZ.data[f]=c;}}if(c!=125){b=new Cj;i=a.lB;c=a.kk;b.j1=1;b.j2=1;b.kK=(-1);b.lF=A(68);b.lz=i;b.kK=c;B(b);}}c=b.jY;if(!c){b=new Cj;i=a.lB;c=a.kk;b.j1=1;b.j2=1;b.kK=(-1);b.lF=A(68);b.lz=i;b.kK=c;B(b);}h=new I;d=b.jZ;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.j0=L(d.data,0,c);if(h.j0.length==1){b=new K;b.jZ=G(16);D(b,b.jY,A(184));D(b,b.jY,h);h=new I;d=b.jZ;e=d.data;f=b.jY;g=e.length;if(f>=0&&f<=(g-0|0)){h.j0=L(d.data,0,f);return h;}b=new H;b.j1
=1;b.j2=1;B(b);}b:{c:{if(h.j0.length>3){if(h===A(184)?1:MM(h,A(184),0))break c;if(h===A(185)?1:MM(h,A(185),0))break c;}break b;}h=Ch(h,2,h.j0.length);}return h;}b=new H;b.j1=1;b.j2=1;B(b);},
AQU=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.jZ=G(4);d=(-1);e=2147483647;a:{while(true){f=a.kk;g=a.lC.data;if(f>=g.length)break a;a.ll=f;if(a.lu&4)Cq(a);else a.kk=f+1|0;b=g[a.ll];if(b==125)break a;if(b==44&&d<0)try{d=KE(Et(c),10);ARl(c,0,ZH(c));continue;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){break;}else{throw $$e;}}h=b&65535;f=c.jY;Bj(c,f,f+1|0);c.jZ.data[f]=h;}c=new Cj;i=a.lB;b=a.kk;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=i;c.kK=b;B(c);}if(b!=125){c=new Cj;i=a.lB;b=a.kk;c.j1=1;c.j2=1;c.kK=(-1);c.lF
=A(68);c.lz=i;c.kK=b;B(c);}if(c.jY>0)b:{try{e=KE(Et(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}c=new Cj;i=a.lB;b=a.kk;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=i;c.kK=b;B(c);}else if(d<0){c=new Cj;i=a.lB;b=a.kk;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=i;c.kK=b;B(c);}if((d|e|(e-d|0))<0){c=new Cj;i=a.lB;b=a.kk;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=i;c.kK=b;B(c);}f=a.kk;g=a.lC.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.km=(-2147483525);a.ll=f;if(a.lu
&4)Cq(a);else a.kk=f+1|0;break c;case 63:a.km=(-1073741701);a.ll=f;if(a.lu&4)Cq(a);else a.kk=f+1|0;break c;default:}a.km=(-536870789);}c=new OE;c.oI=d;c.oG=e;return c;},
AFF=b=>{return b<0?0:1;},
Qs=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.jZ=G(b);d=a.lC.data.length-2|0;e=0;while(true){f=BU(e,b);if(f>=0)break;g=a.kk;if(g>=d)break;h=a.lC;a.ll=g;if(a.lu&4)Cq(a);else a.kk=g+1|0;g=h.data[a.ll];i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=g;e=e+1|0;}if(!f)a:{try{b=KE(Et(c),16);}catch($$e){$$je=Z($$e);if($$je instanceof Cu){break a;}else{throw $$e;}}return b;}c=new Cj;j=a.lB;b=a.kk;c.j1=1;c.j2=1;c.kK=(-1);c.lF=A(68);c.lz=j;c.kK=b;B(c);},
ALa=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.lC.data;e=d.length-2|0;f=PZ(d[a.kk]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.kk;a.ll=g;if(a.lu&4)Cq(a);else a.kk=g+1|0;a:{while(true){if(c>=b)break a;h=a.kk;if(h>=e)break a;i=PZ(a.lC.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.kk;a.ll=g;if(a.lu&4)Cq(a);else a.kk=g+1|0;c=c+1|0;}}return f;}j=new Cj;k=a.lB;b=a.kk;j.j1=1;j.j2=1;j.kK=(-1);j.lF=A(68);j.lz=k;j.kK=b;B(j);},
AS4=a=>{let b,c,d,e,f,g,h;b=1;c=a.lu;a:while(true){d=a.kk;e=a.lC.data;if(d>=e.length){f=new Cj;g=a.lB;f.j1=1;f.j2=1;f.kK=(-1);f.lF=A(68);f.lz=g;f.kK=d;B(f);}b:{c:{switch(e[d]){case 41:a.ll=d;if(a.lu&4)Cq(a);else a.kk=d+1|0;return c|256;case 45:if(!b){h=new Cj;g=a.lB;h.j1=1;h.j2=1;h.kK=(-1);h.lF=A(68);h.lz=g;h.kK=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.ll=d;if(a.lu&4)Cq(a);else a.kk=d+1|0;}a.ll=d;if(a.lu&4)Cq(a);else a.kk=d+1|0;return c;},
Cq=a=>{let b,c,d,e;b=a.lC.data.length-2|0;a.kk=a.kk+1|0;a:while(true){c=a.kk;if(c<b){b:{c=a.lC.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CS(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.kk=a.kk+1|0;continue;}}c=a.kk;if(c>=b)break;d=a.lC.data;if(d[c]!=35)break;a.kk=c+1|0;while(true){e=a.kk;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.kk
=e+1|0;}}return c;},
ACd=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?Iw([d,e]):Iw([d,e,4519+f|0]);}return null;},
AMb=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
M7=a=>{let b,c,d,e,f;b=a.lC;c=a.kk;a.ll=c;if(a.lu&4)Cq(a);else a.kk=c+1|0;b=b.data;d=a.ll;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.lC.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.kk;a.ll=d;if(a.lu&4)Cq(a);else a.kk=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cj(){let a=this;Bk.call(a);a.lF=null;a.lz=null;a.kK=0;}
let AR6=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(68);c=a.kK;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bk;b.j1=1;b.j2=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new I;b.j0=L(d.data,0,f);}a:{h=a.lF;i=a.lz;if(i!==null&&i.j0.length){j=a.kK;i=a.lz;k=new K;k.jZ=G(16);J(k,k.jY,j,10);D(k,k.jY,A(47));j=k.jY;if(i===null)i=A(2);D(k,j,i);D(k,k.jY,A(47));D(k,k.jY,b);b=new I;d=k.jZ;e=d.data;c=k.jY;f=e.length;if(c>=0&&c<=(f-0|0)){b.j0=L(d.data,0,c);break a;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}b=A(68);}i=new K;i.jZ=G(16);j
=i.jY;if(h===null)h=A(2);D(i,j,h);D(i,i.jY,b);b=new I;d=i.jZ;e=d.data;c=i.jY;f=e.length;if(c>=0&&c<=(f-0|0)){b.j0=L(d.data,0,c);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
let Zo=F();
let AUC=(b,c,d,e)=>{let f,g;if(c<=d){while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}return;}e=new Bk;e.j1=1;e.j2=1;B(e);},
ALZ=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bk;f.j1=1;f.j2=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
ANM=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bk;f.j1=1;f.j2=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=BU(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
UL=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let KI=F(0);
let L8=F();
let ADf=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.k$;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BC;b.kf=f;c=b;f.classObject=c;}}b=Ei(b);if(b===null){b=new Df;b.j1=1;b.j2=1;B(b);}if(b===M(Bo)){b=new Bk;b.j1=1;b.j2=1;B(b);}if(d<0){b=new D1;b.j1=1;b.j2=1;B(b);}b=DY(b.kf,d);}e=0;g=0;h=a.mI;i=a.k$;d=BU(h,h);a:{while(true){j=BU(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new Nr;b.j1=1;b.j2=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.lV.data[g];e=h;g=k;}return b;}b=new H;b.j1=1;b.j2=1;B(b);};
let R$=F(0);
let Ot=F(0);
function KK(){L8.call(this);this.mI=0;}
let TF=F(0);
function KH(){let a=this;KK.call(a);a.lV=null;a.k$=0;}
let G3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lV;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BC;i.kf=h;j=i;h.classObject=j;}}h=Ei(i);if(h===null){i=new Df;i.j1=1;i.j2=1;B(i);}if(h===M(Bo)){i=new Bk;i.j1=1;i.j2=1;B(i);}if(f<0){i=new D1;i.j1=1;i.j2=1;B(i);}j=DY(h.kf,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.lV=j;}},
AGO=(a,b,c)=>{let d,e,f;if(b>=0){d=a.k$;if(b<=d){G3(a,d+1|0);d=a.k$;e=d;while(e>b){f=a.lV.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.lV.data[b]=c;a.k$=d+1|0;a.mI=a.mI+1|0;return;}}c=new H;c.j1=1;c.j2=1;B(c);},
Ut=(a,b)=>{let c,d,e,f;if(b>=0){c=a.k$;if(b<c){d=a.lV.data;e=d[b];c=c-1|0;a.k$=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.mI=a.mI+1|0;return e;}}e=new H;e.j1=1;e.j2=1;B(e);};
let R5=F(Ds);
let X3=(a,b,c,d)=>{let e,f;e=a.l3;f=d.lq.data;f[e]=b-f[e]|0;return a.j_.fI(b,c,d);},
ABY=a=>{return A(186);},
AOp=(a,b)=>{return 0;};
let V_=F(Ds);
let ABy=(a,b,c,d)=>{return b;},
AG5=a=>{return A(187);};
let Qt=F(Ds);
let AAk=(a,b,c,d)=>{let e;e=a.l3;if(d.lq.data[e]!=b)b=(-1);return b;},
AQo=a=>{return A(188);};
function SN(){Ds.call(this);this.vx=0;}
let Yq=(a,b,c,d)=>{let e,f;e=a.l3;f=d.lq.data;f[e]=b-f[e]|0;a.vx=b;return b;},
AO1=a=>{return A(189);},
AMa=(a,b)=>{return 0;};
let Gv=F(Ds);
let AQ1=(a,b,c,d)=>{if(d.rE!=1&&b!=d.kM)return (-1);d.oH=1;d.lW.data[1]=b;return b;},
AAF=a=>{return A(190);};
function Cx(){Cb.call(this);this.kP=0;}
let AS9=(a,b,c,d)=>{let e;if((b+a.f1()|0)>d.kM){d.mG=1;return (-1);}e=a.f2(b,c);if(e<0)return (-1);return a.j_.fI(b+e|0,c,d);},
APE=a=>{return a.kP;},
AGW=(a,b)=>{return 1;};
let Fe=F(Cx);
let AON=(a,b,c)=>{return 0;},
ADG=(a,b,c,d)=>{let e,f,g;e=d.kM;f=d.mQ;a:{b:{while(true){g=BU(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.j0.length)break b;if(((c.j0.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.j0.length)break a;if((c.j0.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.j_.fI(b,c,d)>=0)break;b=b+1|0;}return b;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
ABf=(a,b,c,d,e)=>{let f,g,h;f=e.kM;g=e.mQ;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.j0.length)break b;if(((d.j0.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.j0.length)break a;if((d.j0.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.j_.fI(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new W;d.j1=1;d.j2=1;B(d);}d=new W;d.j1=1;d.j2=1;B(d);},
AFQ=a=>{return A(191);},
Yi=(a,b)=>{return 0;};
function Cn(){let a=this;Cb.call(a);a.lK=null;a.mC=null;a.lt=0;}
let AFg=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lK;if(e===null)return (-1);f=a.lt;g=d.lW.data;h=f*2|0;i=g[h];g[h]=b;f=e.k$;j=0;a:{while(true){if(j>=f){b=a.lt;d.lW.data[b*2|0]=i;return (-1);}e=a.lK;if(j<0)break a;if(j>=e.k$)break a;h=e.lV.data[j].fI(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new H;c.j1=1;c.j2=1;B(c);},
AL3=(a,b)=>{a.mC.j_=b;},
AHd=a=>{return A(192);},
AIz=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.lK;if(c!==null){d=0;e=c.mI;f=c.k$;while(true){if(!(d>=f?0:1))break b;if(e<c.mI){b=new Nr;b.j1=1;b.j2=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.k$)break a;if(c.lV.data[d].fm(b))break;d=g;}return 1;}}return 0;}b=new H;b.j1=1;b.j2=1;B(b);},
AM_=(a,b)=>{let c,d,e;c=a.lt;d=b.lW.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
AA9=a=>{let b,c,d,e;a.mw=1;b=a.mC;if(b!==null&&!b.mw)Ih(b);a:{b:{b=a.lK;if(b!==null){c=b.k$;d=0;while(true){if(d>=c)break b;b=a.lK;if(d<0)break a;if(d>=b.k$)break a;b=b.lV.data[d];e=b.fK();if(e===null)e=b;else{b.mw=1;Ut(a.lK,d);AGO(a.lK,d,e);}if(!e.mw)e.e4();d=d+1|0;}}}if(a.j_!==null)Ih(a);return;}b=new H;b.j1=1;b.j2=1;B(b);};
let J0=F(Cn);
let ALC=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lt;f=d.lq.data;g=f[e];f[e]=b;h=a.lK.k$;e=0;a:{while(true){if(e>=h){b=a.lt;d.lq.data[b]=g;return (-1);}i=a.lK;if(e<0)break a;if(e>=i.k$)break a;j=i.lV.data[e].fI(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new H;c.j1=1;c.j2=1;B(c);},
AIO=a=>{return A(193);},
ANN=(a,b)=>{let c;c=a.lt;return !b.lq.data[c]?0:1;};
let Eo=F(J0);
let ACq=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lt;f=d.lq.data;g=f[e];f[e]=b;h=a.lK.k$;i=0;a:{while(i<h){j=a.lK;if(i<0)break a;if(i>=j.k$)break a;if(j.lV.data[i].fI(b,c,d)>=0)return a.j_.fI(a.mC.vx,c,d);i=i+1|0;}b=a.lt;d.lq.data[b]=g;return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
ANi=(a,b)=>{a.j_=b;},
Yc=a=>{return A(193);};
let Oh=F(Eo);
let ALT=(a,b,c,d)=>{let e,f,g;e=a.lK.k$;f=0;a:{while(f<e){g=a.lK;if(f<0)break a;if(f>=g.k$)break a;if(g.lV.data[f].fI(b,c,d)>=0)return a.j_.fI(b,c,d);f=f+1|0;}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
AQA=(a,b)=>{return 0;},
AR$=a=>{return A(194);};
let U$=F(Eo);
let ZN=(a,b,c,d)=>{let e,f,g;e=a.lK.k$;f=0;a:{while(true){if(f>=e)return a.j_.fI(b,c,d);g=a.lK;if(f<0)break a;if(f>=g.k$)break a;if(g.lV.data[f].fI(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
APU=(a,b)=>{return 0;},
AE0=a=>{return A(195);};
let RC=F(Eo);
let AA0=(a,b,c,d)=>{let e,f,g,h,i;e=a.lK.k$;f=d.sE?0:d.mQ;a:{b:{g=a.j_.fI(b,c,d);if(g>=0){h=a.lt;d.lq.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.lK;if(h<0)break a;if(h>=i.k$)break a;if(i.lV.data[h].f4(f,b,c,d)>=0){b=a.lt;d.lq.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
ATJ=(a,b)=>{return 0;},
AK8=a=>{return A(196);};
let S$=F(Eo);
let Xb=(a,b,c,d)=>{let e,f,g;e=a.lK.k$;f=a.lt;d.lq.data[f]=b;f=0;a:{while(true){if(f>=e)return a.j_.fI(b,c,d);g=a.lK;if(f<0)break a;if(f>=g.k$)break a;if(g.lV.data[f].f4(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
AN7=(a,b)=>{return 0;},
AAl=a=>{return A(197);};
function Gk(){Cn.call(this);this.mU=null;}
let XI=(a,b,c,d)=>{let e,f,g;e=a.lt;f=d.lW.data;e=e*2|0;g=f[e];f[e]=b;e=a.mU.fI(b,c,d);if(e>=0)return e;e=a.lt;d.lW.data[e*2|0]=g;return (-1);},
AI0=(a,b,c,d)=>{let e;e=a.mU.fA(b,c,d);if(e>=0){b=a.lt;d.lW.data[b*2|0]=e;}return e;},
AOw=(a,b,c,d,e)=>{let f;f=a.mU.f4(b,c,d,e);if(f>=0){b=a.lt;e.lW.data[b*2|0]=f;}return f;},
AIp=(a,b)=>{return a.mU.fm(b);},
AL5=a=>{let b,c,d,e,f;b=new OG;c=a.mU;d=a.mC;e=O;O=e+1|0;f=new Bc;f.jZ=G(20);b.ki=(J(f,f.jY,e,10)).T();b.mU=c;b.mC=d;b.lt=d.l3;a.j_=b;return b;},
ASl=a=>{let b;a.mw=1;b=a.mC;if(b!==null&&!b.mw)Ih(b);b=a.mU;if(b!==null&&!b.mw){b=b.fK();if(b!==null){a.mU.mw=1;a.mU=b;}a.mU.e4();}};
let AKm=F();
let Jv=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(AAq());}return b.data.length;},
DY=(b,c)=>{if(b.$meta.primitive){switch(b){};}return Q(b,c);};
let JP=F(Bz);
let HN=F();
function Bp(){let a=this;HN.call(a);a.kG=0;a.mu=0;a.kl=null;a.s5=null;a.tz=null;a.lg=0;}
let IJ=null;
let ZQ=a=>{return null;},
YM=a=>{return a.kl;},
AJq=a=>{return !a.mu?(Ic(a.kl,0)>=2048?0:1):AMA(a.kl,0)>=2048?0:1;},
AVw=a=>{return a.lg;},
APt=a=>{return a;},
Y9=a=>{let b,c;if(a.tz===null){b=a.f7();c=new Vj;c.z2=a;c.vH=b;b=new Bm;b.kh=X(64);c.kl=b;a.tz=c;EN(c,a.mu);}return a.tz;},
Iv=a=>{let b,c;if(a.s5===null){b=a.f7();c=new Vi;c.zJ=a;c.xq=b;c.xE=a;b=new Bm;b.kh=X(64);c.kl=b;a.s5=c;EN(c,a.kG);a.s5.lg=a.lg;}return a.s5;},
AR8=a=>{return 0;},
EN=(a,b)=>{let c;c=a.kG;if(c^b){a.kG=c?0:1;a.mu=a.mu?0:1;}if(!a.lg)a.lg=1;return a;},
AVd=a=>{return a.kG;},
AH7=(b,c)=>{b=VJ(IJ,b);if(!c&&b.ob===null)b.ob=b.fR();else if(c&&b.p_===null)b.p_=EN(b.fR(),1);return c?b.p_:b.ob;},
AUQ=()=>{IJ=new Nu;};
function Kj(){let a=this;Bz.call(a);a.Ad=null;a.z6=null;}
function CG(){let a=this;Bp.call(a);a.sG=0;a.ts=0;a.qz=0;a.t8=0;a.nH=0;a.m9=0;a.kn=null;a.lk=null;}
let C4=(a,b)=>{let c;a:{if(a.sG){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.nH){NX(a.kn,F9(b&65535));break a;}MT(a.kn,F9(b&65535));break a;}if(a.ts&&b>128){a.qz=1;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}b=Cv(B0,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.t8)NX(a.kl,b-55296|0);else MT(a.kl,b-55296|0);}if(a.nH)NX(a.kn,b);else MT(a.kn,
b);if(!a.lg&&(b>=65536&&b<=1114111?1:0))a.lg=1;return a;},
ATC=(a,b)=>{let c,d,e;if(!a.lg&&b.lg)a.lg=1;if(a.t8){if(!b.mu)GU(a.kl,b.f7());else DX(a.kl,b.f7());}else if(!b.mu)GN(a.kl,b.f7());else{Go(a.kl,b.f7());DX(a.kl,b.f7());a.mu=a.mu?0:1;a.t8=1;}if(!a.m9&&b.gc()!==null){if(a.nH){if(!b.kG)GU(a.kn,b.gc());else DX(a.kn,b.gc());}else if(!b.kG)GN(a.kn,b.gc());else{Go(a.kn,b.gc());DX(a.kn,b.gc());a.kG=a.kG?0:1;a.nH=1;}}else{c=a.kG;d=a.lk;if(d!==null){if(!c){e=new PJ;e.yy=a;e.xP=c;e.xy=d;e.xs=b;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}else{e=new PK;e.Aj=a;e.wv=c;e.wq=d;e.wi=b;b
=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}}else{if(c&&!a.nH&&(a.kn.lQ?0:1)){d=new PF;d.zp=a;d.ws=b;b=new Bm;b.kh=X(64);d.kl=b;a.lk=d;}else if(!c){d=new PC;d.t3=a;d.th=c;d.vR=b;b=new Bm;b.kh=X(64);d.kl=b;a.lk=d;}else{d=new PD;d.uE=a;d.to=c;d.xv=b;b=new Bm;b.kh=X(64);d.kl=b;a.lk=d;}a.m9=1;}}return a;},
BT=(a,b,c)=>{let d;if(b>c){d=new Bk;d.j1=1;d.j2=1;B(d);}a:{b:{if(!a.sG){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;C4(a,b);b=b+1|0;}}if(a.nH)X0(a.kn,b,c+1|0);else IT(a.kn,b,c+1|0);}return a;},
W5=(a,b)=>{let c,d,e,f;if(!a.lg&&b.lg)a.lg=1;if(b.qz)a.qz=1;c=a.mu;if(!(c^b.mu)){if(!c)GN(a.kl,b.kl);else DX(a.kl,b.kl);}else if(c)GU(a.kl,b.kl);else{Go(a.kl,b.kl);DX(a.kl,b.kl);a.mu=1;}a:{if(!a.m9){d=b.m9;if((!d?b.kn:null)!==null){c=a.kG;if(!(c^b.kG)){if(!c){GN(a.kn,!d?b.kn:null);break a;}DX(a.kn,!d?b.kn:null);break a;}if(c){GU(a.kn,!d?b.kn:null);break a;}Go(a.kn,!d?b.kn:null);DX(a.kn,!b.m9?b.kn:null);a.kG=1;break a;}}c=a.kG;e=a.lk;if(e!==null){if(!c){f=new Px;f.yg=a;f.xe=c;f.xu=e;f.xI=b;b=new Bm;b.kh=X(64);f.kl
=b;a.lk=f;}else{f=new P3;f.yM=a;f.xG=c;f.vu=e;f.vz=b;b=new Bm;b.kh=X(64);f.kl=b;a.lk=f;}}else{if(!a.nH&&(a.kn.lQ?0:1)){if(!c){e=new PH;e.Am=a;e.wg=b;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}else{e=new PI;e.yQ=a;e.xC=b;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}}else if(!c){e=new PL;e.xf=a;e.wE=b;e.wr=c;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}else{e=new PM;e.wP=a;e.wX=b;e.w4=c;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}a.m9=1;}}},
VC=(a,b)=>{let c,d,e,f;if(!a.lg&&b.lg)a.lg=1;if(b.qz)a.qz=1;c=a.mu;if(!(c^b.mu)){if(!c)DX(a.kl,b.kl);else GN(a.kl,b.kl);}else if(!c)GU(a.kl,b.kl);else{Go(a.kl,b.kl);DX(a.kl,b.kl);a.mu=0;}a:{if(!a.m9){d=b.m9;if((!d?b.kn:null)!==null){c=a.kG;if(!(c^b.kG)){if(!c){DX(a.kn,!d?b.kn:null);break a;}GN(a.kn,!d?b.kn:null);break a;}if(!c){GU(a.kn,!d?b.kn:null);break a;}Go(a.kn,!d?b.kn:null);DX(a.kn,!b.m9?b.kn:null);a.kG=0;break a;}}c=a.kG;e=a.lk;if(e!==null){if(!c){f=new Pz;f.yw=a;f.xg=c;f.vG=e;f.wu=b;b=new Bm;b.kh=X(64);f.kl
=b;a.lk=f;}else{f=new PA;f.yX=a;f.w6=c;f.vr=e;f.xd=b;b=new Bm;b.kh=X(64);f.kl=b;a.lk=f;}}else{if(!a.nH&&(a.kn.lQ?0:1)){if(!c){e=new Pv;e.yS=a;e.v6=b;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}else{e=new Pw;e.Ag=a;e.v7=b;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}}else if(!c){e=new PB;e.x1=a;e.xO=b;e.wU=c;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}else{e=new Pu;e.wT=a;e.w9=b;e.ww=c;b=new Bm;b.kh=X(64);e.kl=b;a.lk=e;}a.m9=1;}}},
ABl=(a,b)=>{let c;c=a.lk;if(c!==null)return a.kG^c.gf(b);return a.kG^CF(a.kn,b);},
ATE=a=>{if(!a.m9)return a.kn;return null;},
ADp=a=>{return a.kl;},
AQm=a=>{let b,c;if(a.lk!==null)return a;b=!a.m9?a.kn:null;c=new Py;c.yb=a;c.sj=b;b=new Bm;b.kh=X(64);c.kl=b;return EN(c,a.kG);},
AKw=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.jZ=G(16);c=Ic(a.kn,0);while(c>=0){d=(E6(c)).data;e=0;f=d.length;g=b.jY;Bj(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jZ.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jY;Bj(b,g,g+1|0);b.jZ.data[g]=124;c=Ic(a.kn,c+1|0);}e=b.jY;if(e>0)Vt(b,e-1|0);k=new I;d=b.jZ;h=d.data;e=b.jY;g=h.length;if(e>=0&&e<=(g-0|0)){k.j0=L(d.data,0,e);return k;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
ADT=a=>{return a.qz;};
function ED(){Cb.call(this);this.kH=null;}
let AXP=a=>{return a.kH;},
AOy=(a,b)=>{return !a.kH.fm(b)&&!a.j_.fm(b)?0:1;},
AQW=(a,b)=>{return 1;},
AJF=a=>{let b;a.mw=1;b=a.j_;if(b!==null&&!b.mw){b=b.fK();if(b!==null){a.j_.mw=1;a.j_=b;}a.j_.e4();}b=a.kH;if(b!==null){if(!b.mw){b=b.fK();if(b!==null){a.kH.mw=1;a.kH=b;}a.kH.e4();}else if(b instanceof Gk&&b.mC.tH)a.kH=b.j_;}};
function DC(){ED.call(this);this.la=null;}
let Xd=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.la.f1()|0)<=d.kM){f=a.la.f2(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.j_.fI(b,c,d);if(f>=0)break;b=b-a.la.f1()|0;e=e+(-1)|0;}return f;},
AA5=a=>{return A(198);};
function Fn(){DC.call(this);this.pB=null;}
let Zj=(a,b,c,d)=>{let e,f,g,h,i;e=a.pB;f=e.oI;g=e.oG;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.la.f1()|0)>d.kM)break a;i=a.la.f2(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.j_.fI(b,c,d);if(i>=0)break;b=b-a.la.f1()|0;h=h+(-1)|0;}return i;}if((b+a.la.f1()|0)>d.kM){d.mG=1;return (-1);}i=a.la.f2(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
ZU=a=>{return Mw(a.pB);};
let DE=F(ED);
let XF=(a,b,c,d)=>{let e;if(!a.kH.gi(d))return a.j_.fI(b,c,d);e=a.kH.fI(b,c,d);if(e>=0)return e;return a.j_.fI(b,c,d);},
AGo=a=>{return A(199);};
let Fl=F(DC);
let AI7=(a,b,c,d)=>{let e;e=a.kH.fI(b,c,d);if(e<0)e=a.j_.fI(b,c,d);return e;},
ATO=(a,b)=>{a.j_=b;a.kH.e8(b);};
let Vl=F(DC);
let AST=(a,b,c,d)=>{while((b+a.la.f1()|0)<=d.kM&&a.la.f2(b,c)>0){b=b+a.la.f1()|0;}return a.j_.fI(b,c,d);},
AKl=(a,b,c,d)=>{let e,f,g;e=a.j_.fA(b,c,d);if(e<0)return (-1);f=e-a.la.f1()|0;while(f>=b&&a.la.f2(f,c)>0){g=f-a.la.f1()|0;e=f;f=g;}return e;};
let Nu=F();
let X5=null,AGK=null,TK=null;
let VJ=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=TK.data;if(c>=d.length){e=new Kj;e.j1=1;e.j2=1;e.j3=A(68);e.Ad=A(68);e.z6=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof I))g=0;else{f=f;g=b.j0!==f.j0?0:1;}if(g)break;c=c+1|0;}return d[1];},
ACQ=()=>{let b,c,d,e,f,g;b=new Jg;X5=b;c=new IF;AGK=c;d=Q(D7(C),194);e=d.data;e[0]=T(C,[A(200),new TW]);e[1]=T(C,[A(201),new Uy]);e[2]=T(C,[A(202),new UD]);e[3]=T(C,[A(203),new Ja]);e[4]=T(C,[A(204),c]);e[5]=T(C,[A(205),new Jx]);e[6]=T(C,[A(206),new Wo]);e[7]=T(C,[A(207),new J8]);e[8]=T(C,[A(208),new RZ]);e[9]=T(C,[A(209),new Sq]);e[10]=T(C,[A(210),new Ql]);e[11]=T(C,[A(211),new P8]);e[12]=T(C,[A(212),new UI]);e[13]=T(C,[A(213),new Ww]);e[14]=T(C,[A(214),new T$]);e[15]=T(C,[A(215),new TO]);e[16]=T(C,[A(216),
new U9]);e[17]=T(C,[A(217),new O5]);e[18]=T(C,[A(218),new OF]);e[19]=T(C,[A(219),new Ug]);e[20]=T(C,[A(220),new Us]);e[21]=T(C,[A(221),new QG]);e[22]=T(C,[A(222),new Sv]);e[23]=T(C,[A(223),new V3]);e[24]=T(C,[A(224),new Up]);e[25]=T(C,[A(225),new Rp]);e[26]=T(C,[A(226),new QF]);e[27]=T(C,[A(227),new Ws]);e[28]=T(C,[A(228),b]);e[29]=T(C,[A(229),new Io]);e[30]=T(C,[A(230),new Vc]);e[31]=T(C,[A(231),b]);e[32]=T(C,[A(232),new R2]);e[33]=T(C,[A(233),c]);e[34]=T(C,[A(234),new QA]);f=Q(C,2);g=f.data;g[0]=A(235);b=
new Bu;b.kr=0;b.ks=127;g[1]=b;e[35]=f;f=Q(C,2);g=f.data;g[0]=A(236);b=new Bu;b.kr=128;b.ks=255;g[1]=b;e[36]=f;f=Q(C,2);g=f.data;g[0]=A(237);b=new Bu;b.kr=256;b.ks=383;g[1]=b;e[37]=f;f=Q(C,2);g=f.data;g[0]=A(238);b=new Bu;b.kr=384;b.ks=591;g[1]=b;e[38]=f;f=Q(C,2);g=f.data;g[0]=A(239);b=new Bu;b.kr=592;b.ks=687;g[1]=b;e[39]=f;f=Q(C,2);g=f.data;g[0]=A(240);b=new Bu;b.kr=688;b.ks=767;g[1]=b;e[40]=f;f=Q(C,2);g=f.data;g[0]=A(241);b=new Bu;b.kr=768;b.ks=879;g[1]=b;e[41]=f;f=Q(C,2);g=f.data;g[0]=A(242);b=new Bu;b.kr
=880;b.ks=1023;g[1]=b;e[42]=f;f=Q(C,2);g=f.data;g[0]=A(243);b=new Bu;b.kr=1024;b.ks=1279;g[1]=b;e[43]=f;f=Q(C,2);g=f.data;g[0]=A(244);b=new Bu;b.kr=1280;b.ks=1327;g[1]=b;e[44]=f;f=Q(C,2);g=f.data;g[0]=A(245);b=new Bu;b.kr=1328;b.ks=1423;g[1]=b;e[45]=f;f=Q(C,2);g=f.data;g[0]=A(246);b=new Bu;b.kr=1424;b.ks=1535;g[1]=b;e[46]=f;f=Q(C,2);g=f.data;g[0]=A(247);b=new Bu;b.kr=1536;b.ks=1791;g[1]=b;e[47]=f;f=Q(C,2);g=f.data;g[0]=A(248);b=new Bu;b.kr=1792;b.ks=1871;g[1]=b;e[48]=f;f=Q(C,2);g=f.data;g[0]=A(249);b=new Bu;b.kr
=1872;b.ks=1919;g[1]=b;e[49]=f;f=Q(C,2);g=f.data;g[0]=A(250);b=new Bu;b.kr=1920;b.ks=1983;g[1]=b;e[50]=f;f=Q(C,2);g=f.data;g[0]=A(251);b=new Bu;b.kr=2304;b.ks=2431;g[1]=b;e[51]=f;f=Q(C,2);g=f.data;g[0]=A(252);b=new Bu;b.kr=2432;b.ks=2559;g[1]=b;e[52]=f;f=Q(C,2);g=f.data;g[0]=A(253);b=new Bu;b.kr=2560;b.ks=2687;g[1]=b;e[53]=f;f=Q(C,2);g=f.data;g[0]=A(254);b=new Bu;b.kr=2688;b.ks=2815;g[1]=b;e[54]=f;f=Q(C,2);g=f.data;g[0]=A(255);b=new Bu;b.kr=2816;b.ks=2943;g[1]=b;e[55]=f;f=Q(C,2);g=f.data;g[0]=A(256);b=new Bu;b.kr
=2944;b.ks=3071;g[1]=b;e[56]=f;f=Q(C,2);g=f.data;g[0]=A(257);b=new Bu;b.kr=3072;b.ks=3199;g[1]=b;e[57]=f;f=Q(C,2);g=f.data;g[0]=A(258);b=new Bu;b.kr=3200;b.ks=3327;g[1]=b;e[58]=f;f=Q(C,2);g=f.data;g[0]=A(259);b=new Bu;b.kr=3328;b.ks=3455;g[1]=b;e[59]=f;f=Q(C,2);g=f.data;g[0]=A(260);b=new Bu;b.kr=3456;b.ks=3583;g[1]=b;e[60]=f;f=Q(C,2);g=f.data;g[0]=A(261);b=new Bu;b.kr=3584;b.ks=3711;g[1]=b;e[61]=f;f=Q(C,2);g=f.data;g[0]=A(262);b=new Bu;b.kr=3712;b.ks=3839;g[1]=b;e[62]=f;f=Q(C,2);g=f.data;g[0]=A(263);b=new Bu;b.kr
=3840;b.ks=4095;g[1]=b;e[63]=f;f=Q(C,2);g=f.data;g[0]=A(264);b=new Bu;b.kr=4096;b.ks=4255;g[1]=b;e[64]=f;f=Q(C,2);g=f.data;g[0]=A(265);b=new Bu;b.kr=4256;b.ks=4351;g[1]=b;e[65]=f;f=Q(C,2);g=f.data;g[0]=A(266);b=new Bu;b.kr=4352;b.ks=4607;g[1]=b;e[66]=f;f=Q(C,2);g=f.data;g[0]=A(267);b=new Bu;b.kr=4608;b.ks=4991;g[1]=b;e[67]=f;f=Q(C,2);g=f.data;g[0]=A(268);b=new Bu;b.kr=4992;b.ks=5023;g[1]=b;e[68]=f;f=Q(C,2);g=f.data;g[0]=A(269);b=new Bu;b.kr=5024;b.ks=5119;g[1]=b;e[69]=f;f=Q(C,2);g=f.data;g[0]=A(270);b=new Bu;b.kr
=5120;b.ks=5759;g[1]=b;e[70]=f;f=Q(C,2);g=f.data;g[0]=A(271);b=new Bu;b.kr=5760;b.ks=5791;g[1]=b;e[71]=f;f=Q(C,2);g=f.data;g[0]=A(272);b=new Bu;b.kr=5792;b.ks=5887;g[1]=b;e[72]=f;f=Q(C,2);g=f.data;g[0]=A(273);b=new Bu;b.kr=5888;b.ks=5919;g[1]=b;e[73]=f;f=Q(C,2);g=f.data;g[0]=A(274);b=new Bu;b.kr=5920;b.ks=5951;g[1]=b;e[74]=f;f=Q(C,2);g=f.data;g[0]=A(275);b=new Bu;b.kr=5952;b.ks=5983;g[1]=b;e[75]=f;f=Q(C,2);g=f.data;g[0]=A(276);b=new Bu;b.kr=5984;b.ks=6015;g[1]=b;e[76]=f;f=Q(C,2);g=f.data;g[0]=A(277);b=new Bu;b.kr
=6016;b.ks=6143;g[1]=b;e[77]=f;f=Q(C,2);g=f.data;g[0]=A(278);b=new Bu;b.kr=6144;b.ks=6319;g[1]=b;e[78]=f;f=Q(C,2);g=f.data;g[0]=A(279);b=new Bu;b.kr=6400;b.ks=6479;g[1]=b;e[79]=f;f=Q(C,2);g=f.data;g[0]=A(280);b=new Bu;b.kr=6480;b.ks=6527;g[1]=b;e[80]=f;f=Q(C,2);g=f.data;g[0]=A(281);b=new Bu;b.kr=6528;b.ks=6623;g[1]=b;e[81]=f;f=Q(C,2);g=f.data;g[0]=A(282);b=new Bu;b.kr=6624;b.ks=6655;g[1]=b;e[82]=f;f=Q(C,2);g=f.data;g[0]=A(283);b=new Bu;b.kr=6656;b.ks=6687;g[1]=b;e[83]=f;f=Q(C,2);g=f.data;g[0]=A(284);b=new Bu;b.kr
=7424;b.ks=7551;g[1]=b;e[84]=f;f=Q(C,2);g=f.data;g[0]=A(285);b=new Bu;b.kr=7552;b.ks=7615;g[1]=b;e[85]=f;f=Q(C,2);g=f.data;g[0]=A(286);b=new Bu;b.kr=7616;b.ks=7679;g[1]=b;e[86]=f;f=Q(C,2);g=f.data;g[0]=A(287);b=new Bu;b.kr=7680;b.ks=7935;g[1]=b;e[87]=f;f=Q(C,2);g=f.data;g[0]=A(288);b=new Bu;b.kr=7936;b.ks=8191;g[1]=b;e[88]=f;f=Q(C,2);g=f.data;g[0]=A(289);b=new Bu;b.kr=8192;b.ks=8303;g[1]=b;e[89]=f;f=Q(C,2);g=f.data;g[0]=A(290);b=new Bu;b.kr=8304;b.ks=8351;g[1]=b;e[90]=f;f=Q(C,2);g=f.data;g[0]=A(291);b=new Bu;b.kr
=8352;b.ks=8399;g[1]=b;e[91]=f;f=Q(C,2);g=f.data;g[0]=A(292);b=new Bu;b.kr=8400;b.ks=8447;g[1]=b;e[92]=f;f=Q(C,2);g=f.data;g[0]=A(293);b=new Bu;b.kr=8448;b.ks=8527;g[1]=b;e[93]=f;f=Q(C,2);g=f.data;g[0]=A(294);b=new Bu;b.kr=8528;b.ks=8591;g[1]=b;e[94]=f;f=Q(C,2);g=f.data;g[0]=A(295);b=new Bu;b.kr=8592;b.ks=8703;g[1]=b;e[95]=f;f=Q(C,2);g=f.data;g[0]=A(296);b=new Bu;b.kr=8704;b.ks=8959;g[1]=b;e[96]=f;f=Q(C,2);g=f.data;g[0]=A(297);b=new Bu;b.kr=8960;b.ks=9215;g[1]=b;e[97]=f;f=Q(C,2);g=f.data;g[0]=A(298);b=new Bu;b.kr
=9216;b.ks=9279;g[1]=b;e[98]=f;f=Q(C,2);g=f.data;g[0]=A(299);b=new Bu;b.kr=9280;b.ks=9311;g[1]=b;e[99]=f;f=Q(C,2);g=f.data;g[0]=A(300);b=new Bu;b.kr=9312;b.ks=9471;g[1]=b;e[100]=f;f=Q(C,2);g=f.data;g[0]=A(301);b=new Bu;b.kr=9472;b.ks=9599;g[1]=b;e[101]=f;f=Q(C,2);g=f.data;g[0]=A(302);b=new Bu;b.kr=9600;b.ks=9631;g[1]=b;e[102]=f;e[103]=T(C,[A(303),BH(9632,9727)]);e[104]=T(C,[A(304),BH(9728,9983)]);e[105]=T(C,[A(305),BH(9984,10175)]);e[106]=T(C,[A(306),BH(10176,10223)]);e[107]=T(C,[A(307),BH(10224,10239)]);e[108]
=T(C,[A(308),BH(10240,10495)]);e[109]=T(C,[A(309),BH(10496,10623)]);e[110]=T(C,[A(310),BH(10624,10751)]);e[111]=T(C,[A(311),BH(10752,11007)]);e[112]=T(C,[A(312),BH(11008,11263)]);e[113]=T(C,[A(313),BH(11264,11359)]);e[114]=T(C,[A(314),BH(11392,11519)]);e[115]=T(C,[A(315),BH(11520,11567)]);e[116]=T(C,[A(316),BH(11568,11647)]);e[117]=T(C,[A(317),BH(11648,11743)]);e[118]=T(C,[A(318),BH(11776,11903)]);e[119]=T(C,[A(319),BH(11904,12031)]);e[120]=T(C,[A(320),BH(12032,12255)]);e[121]=T(C,[A(321),BH(12272,12287)]);e[122]
=T(C,[A(322),BH(12288,12351)]);e[123]=T(C,[A(323),BH(12352,12447)]);e[124]=T(C,[A(324),BH(12448,12543)]);e[125]=T(C,[A(325),BH(12544,12591)]);e[126]=T(C,[A(326),BH(12592,12687)]);e[127]=T(C,[A(327),BH(12688,12703)]);e[128]=T(C,[A(328),BH(12704,12735)]);e[129]=T(C,[A(329),BH(12736,12783)]);e[130]=T(C,[A(330),BH(12784,12799)]);e[131]=T(C,[A(331),BH(12800,13055)]);e[132]=T(C,[A(332),BH(13056,13311)]);e[133]=T(C,[A(333),BH(13312,19893)]);e[134]=T(C,[A(334),BH(19904,19967)]);e[135]=T(C,[A(335),BH(19968,40959)]);e[136]
=T(C,[A(336),BH(40960,42127)]);e[137]=T(C,[A(337),BH(42128,42191)]);e[138]=T(C,[A(338),BH(42752,42783)]);e[139]=T(C,[A(339),BH(43008,43055)]);e[140]=T(C,[A(340),BH(44032,55203)]);e[141]=T(C,[A(341),BH(55296,56191)]);e[142]=T(C,[A(342),BH(56192,56319)]);e[143]=T(C,[A(343),BH(56320,57343)]);e[144]=T(C,[A(344),BH(57344,63743)]);e[145]=T(C,[A(345),BH(63744,64255)]);e[146]=T(C,[A(346),BH(64256,64335)]);e[147]=T(C,[A(347),BH(64336,65023)]);e[148]=T(C,[A(348),BH(65024,65039)]);e[149]=T(C,[A(349),BH(65040,65055)]);e[150]
=T(C,[A(350),BH(65056,65071)]);e[151]=T(C,[A(351),BH(65072,65103)]);e[152]=T(C,[A(352),BH(65104,65135)]);e[153]=T(C,[A(353),BH(65136,65279)]);e[154]=T(C,[A(354),BH(65280,65519)]);e[155]=T(C,[A(49),BH(0,1114111)]);f=Q(C,2);g=f.data;g[0]=A(355);b=new Qw;AJL(b);g[1]=b;e[156]=f;e[157]=T(C,[A(356),Cd(0,1)]);e[158]=T(C,[A(357),GK(62,1)]);e[159]=T(C,[A(358),Cd(1,1)]);e[160]=T(C,[A(359),Cd(2,1)]);e[161]=T(C,[A(360),Cd(3,0)]);e[162]=T(C,[A(361),Cd(4,0)]);e[163]=T(C,[A(362),Cd(5,1)]);e[164]=T(C,[A(363),GK(448,1)]);e[165]
=T(C,[A(364),Cd(6,1)]);e[166]=T(C,[A(365),Cd(7,0)]);e[167]=T(C,[A(366),Cd(8,1)]);e[168]=T(C,[A(367),GK(3584,1)]);e[169]=T(C,[A(368),Cd(9,1)]);e[170]=T(C,[A(369),Cd(10,1)]);e[171]=T(C,[A(370),Cd(11,1)]);e[172]=T(C,[A(371),GK(28672,0)]);e[173]=T(C,[A(372),Cd(12,0)]);e[174]=T(C,[A(373),Cd(13,0)]);e[175]=T(C,[A(374),Cd(14,0)]);e[176]=T(C,[A(375),AGx(983040,1,1)]);e[177]=T(C,[A(376),Cd(15,0)]);e[178]=T(C,[A(377),Cd(16,1)]);e[179]=T(C,[A(378),Cd(18,1)]);e[180]=T(C,[A(379),AIv(19,0,1)]);e[181]=T(C,[A(380),GK(1643118592,
1)]);e[182]=T(C,[A(381),Cd(20,0)]);e[183]=T(C,[A(382),Cd(21,0)]);e[184]=T(C,[A(383),Cd(22,0)]);e[185]=T(C,[A(384),Cd(23,0)]);e[186]=T(C,[A(385),Cd(24,1)]);e[187]=T(C,[A(386),GK(2113929216,1)]);e[188]=T(C,[A(387),Cd(25,1)]);e[189]=T(C,[A(388),Cd(26,0)]);e[190]=T(C,[A(389),Cd(27,0)]);e[191]=T(C,[A(390),Cd(28,1)]);e[192]=T(C,[A(391),Cd(29,0)]);e[193]=T(C,[A(392),Cd(30,0)]);TK=d;};
function Bx(){let a=this;C.call(a);a.ob=null;a.p_=null;}
let AJL=a=>{return;},
AWP=(a,b)=>{if(!b&&a.ob===null)a.ob=a.fR();else if(b&&a.p_===null)a.p_=EN(a.fR(),1);if(b)return a.p_;return a.ob;};
function OE(){let a=this;HN.call(a);a.oI=0;a.oG=0;}
let Mw=a=>{let b,c,d,e,f,g,h;b=a.oI;c=a.oG;if(c==2147483647)d=A(68);else{d=new Bc;d.jZ=G(20);d=(J(d,d.jY,c,10)).T();}e=new K;e.jZ=G(16);c=e.jY;Bj(e,c,c+1|0);e.jZ.data[c]=123;J(e,e.jY,b,10);b=e.jY;Bj(e,b,b+1|0);e.jZ.data[b]=44;f=e.jY;if(d===null)d=A(2);D(e,f,d);b=e.jY;Bj(e,b,b+1|0);g=e.jZ;h=g.data;h[b]=125;d=new I;b=e.jY;c=h.length;if(b>=0&&b<=(c-0|0)){d.j0=L(g.data,0,b);return d;}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);};
let Pk=F(Cb);
let AHA=(a,b,c,d)=>{return b;},
ALO=a=>{return A(393);},
AL2=(a,b)=>{return 0;};
function Bm(){let a=this;C.call(a);a.kh=null;a.lQ=0;}
let MT=(a,b)=>{let c,d,e;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=b/32|0;if(b>=a.lQ){Js(a,d+1|0);a.lQ=b+1|0;}e=a.kh.data;e[d]=e[d]|1<<(b%32|0);},
IT=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BU(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.lQ){Js(a,e+1|0);a.lQ=c;}if(d==e){f=a.kh.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.kh.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new H;i.j1=1;i.j2=1;B(i);},
NX=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=b/32|0;e=a.kh.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.lQ-1|0))H7(a);}},
X0=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.lQ;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.kh.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.kh.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}H7(a);return;}i=new H;i.j1=1;i.j2=1;B(i);},
CF=(a,b)=>{let c,d,e;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=b/32|0;e=a.kh.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
Ic=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=a.lQ;if(b>=d)return (-1);e=b/32|0;f=a.kh.data;g=f[e]>>>(b%32|0)|0;if(g)return D_(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+D_(f[g])|0;g=g+1|0;}return (-1);},
AMA=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=a.lQ;if(b>=d)return b;e=b/32|0;f=a.kh.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return D_(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+D_(f[h]^(-1))|0;h=h+1|0;}return d;},
Js=(a,b)=>{let c,d,e,f,g,h;c=a.kh.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=X(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.kh=g;},
H7=a=>{let b,c,d;b=(a.lQ+31|0)/32|0;a.lQ=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=O2(a.kh.data[c]);if(d<32)break;c=c+(-1)|0;a.lQ=a.lQ-32|0;}a.lQ=a.lQ-d|0;}},
Jr=(a,b)=>{let c,d,e,f,g;c=a.kh.data;d=c.length;e=b.kh.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
DX=(a,b)=>{let c,d,e,f,g,h,i;c=a.kh.data;d=c.length;e=b.kh.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.lQ;i=b.lQ;if(h<i)i=h;a.lQ=i;H7(a);},
GU=(a,b)=>{let c,d,e,f,g;c=a.kh.data;d=c.length;e=b.kh.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}H7(a);},
GN=(a,b)=>{let c,d,e,f,g;c=a.lQ;d=b.lQ;if(c>d)d=c;a.lQ=d;Js(a,(d+31|0)/32|0);e=a.kh.data;c=e.length;f=b.kh.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
Go=(a,b)=>{let c,d,e,f,g;c=a.lQ;d=b.lQ;if(c>d)d=c;a.lQ=d;Js(a,(d+31|0)/32|0);e=a.kh.data;c=e.length;f=b.kh.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}H7(a);};
function On(){let a=this;Cn.call(a);a.sn=null;a.tj=0;}
let AF4=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.mQ;f=d.kM;g=b+1|0;f=BU(g,f);if(f>0){d.mG=1;return (-1);}if(b>=0&&b<c.j0.length){h=c.j0.charCodeAt(b);if(!a.sn.gf(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.j0.length){if((c.j0.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new W;c.j1=1;c.j2=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.j0.length){if(!((c.j0.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}}return a.j_.fI(g,c,d);}c=new W;c.j1
=1;c.j2=1;B(c);},
AMc=a=>{let b,c,d,e,f,g,h,i;b=!a.tj?A(394):A(395);c=a.sn.T();d=new K;d.jZ=G(16);D(d,d.jY,A(396));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function Hi(){let a=this;Cn.call(a);a.pD=null;a.pu=null;}
let Y$=(a,b,c,d)=>{let e;e=a.pD.fI(b,c,d);if(e<0)e=AF4(a.pu,b,c,d);if(e>=0)return e;return (-1);},
ALz=(a,b)=>{a.j_=b;a.pu.j_=b;a.pD.e8(b);},
AME=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.pD;c=a.pu;d=new K;d.jZ=G(16);D(d,d.jY,A(397));e=d.jY;if(b===null)b=A(2);else{f=b.ki;b=b.fJ();g=new K;EZ(g);Gl(g,60);IU(g,f);Gl(g,58);IU(g,b);Gl(g,62);b=Mn(g);}D(d,e,b);D(d,d.jY,A(398));e=d.jY;if(c===null)b=A(2);else{b=c.ki;f=!c.tj?A(394):A(395);c=c.sn.T();g=En();Mi(Mi(Mi(g,A(396)),f),c);f=Et(g);c=new K;EZ(c);Gl(c,60);IU(c,b);Gl(c,58);IU(c,f);Gl(c,62);b=Mn(c);}D(d,e,b);b=new I;h=d.jZ;i=h.data;j=d.jY;k=i.length;if(j>=0&&j<=(k-0|0)){b.j0=L(h.data,0,j);return b;}b=new H;b.j1=
1;b.j2=1;Bi(b);B(b);},
AAt=(a,b)=>{return 1;},
ZP=(a,b)=>{return 1;};
function DQ(){let a=this;Cn.call(a);a.mD=null;a.qk=0;}
let ADd=(a,b,c,d)=>{let e,f,g,h;a:{e=d.kM;if(b<e){f=b+1|0;if(b>=0&&b<c.j0.length){g=c.j0.charCodeAt(b);if(a.gf(g)){h=a.j_.fI(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.j0.length){f=c.j0.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.gf(((g&1023)<<10|f&1023)+65536|0))break a;else return a.j_.fI(e,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}}return (-1);},
ARX=a=>{let b,c,d,e,f,g,h,i;b=!a.qk?A(394):A(395);c=a.mD.T();d=new K;d.jZ=G(16);D(d,d.jY,A(396));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AEc=(a,b)=>{return a.mD.gf(b);},
Y0=(a,b)=>{let c,d;if(b instanceof Eu)return a.mD.gf(b.pX);if(b instanceof Ea)return a.mD.gf(b.mv);if(b instanceof DQ){c=a.mD;b=b.mD;return c.gc()!==null&&b.gc()!==null?Jr(c.gc(),b.gc()):1;}if(!(b instanceof Ed))return 1;c=a.mD;d=b.nh;return c.gc()!==null&&d.gc()!==null?Jr(c.gc(),d.gc()):1;},
AVS=a=>{return a.mD;},
APj=(a,b)=>{a.j_=b;},
ADv=(a,b)=>{return 1;};
let Kd=F(DQ);
let AGX=(a,b)=>{let c;c=a.mD;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return c.gf(Cv(B0,b));},
ASs=a=>{let b,c,d,e,f,g,h,i;b=!a.qk?A(394):A(395);c=a.mD.T();d=new K;d.jZ=G(16);D(d,d.jY,A(399));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function KP(){let a=this;Cx.call(a);a.sr=null;a.t6=0;}
let AHD=(a,b,c)=>{let d;d=a.sr;if(b>=0&&b<c.j0.length){b=c.j0.charCodeAt(b);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return !d.gf(Cv(B0,b)&65535)?(-1):1;}c=new W;c.j1=1;c.j2=1;B(c);},
Z8=a=>{let b,c,d,e,f,g,h,i;b=!a.t6?A(394):A(395);c=a.sr.T();d=new K;d.jZ=G(16);D(d,d.jY,A(399));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function Ed(){let a=this;Cx.call(a);a.nh=null;a.uA=0;}
let WD=(a,b,c)=>{let d;d=a.nh;if(b>=0&&b<c.j0.length)return !d.gf(c.j0.charCodeAt(b))?(-1):1;c=new W;c.j1=1;c.j2=1;B(c);},
AHV=a=>{let b,c,d,e,f,g,h,i;b=!a.uA?A(394):A(395);c=a.nh.T();d=new K;d.jZ=G(16);D(d,d.jY,A(396));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AL4=(a,b)=>{let c,d;if(b instanceof Ea)return a.nh.gf(b.mv);if(b instanceof Ed){c=a.nh;b=b.nh;return c.gc()!==null&&b.gc()!==null?Jr(c.gc(),b.gc()):1;}if(!(b instanceof DQ)){if(!(b instanceof Eu))return 1;return 0;}c=a.nh;d=b.mD;return c.gc()!==null&&d.gc()!==null?Jr(c.gc(),d.gc()):1;};
function Ix(){let a=this;Cn.call(a);a.or=null;a.oj=null;a.rB=0;}
let AI6=(a,b)=>{a.j_=b;},
AN$=a=>{let b,c,d,e,f,g,h,i;if(a.oj===null){b=new I;c=a.or;b.j0=L(c.data,0,c.data.length);a.oj=b;}d=a.oj;b=new K;b.jZ=G(16);D(b,b.jY,A(400));e=b.jY;if(d===null)d=A(2);D(b,e,d);f=new I;c=b.jZ;g=c.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){f.j0=L(c.data,0,h);return f;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
W0=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.kM;f=X(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.j0.length){j=c.j0.charCodeAt(b);k=ACd(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.rB;if(b!=m)return (-1);while(true){if(l>=m)return a.j_.fI(i,c,d);if(f[l]!=a.or.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.j0.length){j=c.j0.charCodeAt(i);g=j-4449|0;}else{c=new W;c.j1=1;c.j2=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.j0.length){j=c.j0.charCodeAt(b);h
=j-4519|0;}else{c=new W;c.j1=1;c.j2=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.rB==3){m=k[0];f=a.or.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.j_.fI(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.rB==2){m=k[0];f=a.or.data;if(m==f[0]&&k[1]==f[1]){b=a.j_.fI(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);},
AAf=(a,b)=>{let c,d,e;a:{if(b instanceof Ix){b=b;if(b.oj===null){c=new I;d=b.or;c.j0=L(d.data,0,d.data.length);b.oj=c;}c=b.oj;if(a.oj===null){b=new I;d=a.or;b.j0=L(d.data,0,d.data.length);a.oj=b;}b=a.oj;if(c===b)e=1;else if(!(b instanceof I))e=0;else{b=b;e=c.j0!==b.j0?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AQq=(a,b)=>{return 1;};
function Ea(){Cx.call(this);this.mv=0;}
let AHe=a=>{return 1;},
AFB=(a,b,c)=>{let d;d=a.mv;if(b>=0&&b<c.j0.length)return d!=c.j0.charCodeAt(b)?(-1):1;c=new W;c.j1=1;c.j2=1;B(c);},
AC9=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof I){e=d.kM;while(true){if(b>=e)return (-1);f=HK(c,a.mv,b);if(f<0)return (-1);g=a.j_;b=f+1|0;if(g.fI(b,c,d)>=0)break;}return f;}h=d.kM;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.kM){d.mG=1;e=(-1);}else{e=a.mv;if(b<0)break a;if(b>=c.j0.length)break a;e=e!=c.j0.charCodeAt(b)?(-1):1;e=e<0?(-1):a.j_.fI(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new W;R(c);B(c);},
AHo=(a,b,c,d,e)=>{let f;if(d instanceof I){a:{while(true){if(c<b)return (-1);c=EX(d,a.mv,c);if(c<0)break a;if(c<b)break a;if(a.j_.fI(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.kM){e.mG=1;f=(-1);}else{f=a.mv;if(c<0)break b;if(c>=d.j0.length)break b;f=f!=d.j0.charCodeAt(c)?(-1):1;f=f<0?(-1):a.j_.fI(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new W;R(d);B(d);},
AQK=a=>{let b,c,d,e,f,g,h;b=a.mv;c=new K;c.jZ=G(16);d=c.jY;Bj(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
AQf=(a,b)=>{let c,d,e,f;if(b instanceof Ea)return b.mv!=a.mv?0:1;if(!(b instanceof Ed)){if(b instanceof DQ)return b.gf(a.mv);if(!(b instanceof Eu))return 1;return 0;}b=b;c=a.mv;d=new I;e=G(1);f=e.data;f[0]=c;d.j0=L(e.data,0,f.length);b=b.nh;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}return (!b.gf(d.j0.charCodeAt(0))?(-1):1)<=0?0:1;};
function Nz(){Cx.call(this);this.rW=0;}
let WN=(a,b,c)=>{let d;d=a.rW;if(b>=0&&b<c.j0.length){b=c.j0.charCodeAt(b);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return d!=(Cv(B0,b)&65535)?(-1):1;}c=new W;c.j1=1;c.j2=1;B(c);},
ALw=a=>{let b,c,d,e,f,g,h;b=a.rW;c=new K;c.jZ=G(16);D(c,c.jY,A(401));d=c.jY;Bj(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
function Ka(){let a=this;Cx.call(a);a.s8=0;a.tx=0;}
let Xw=(a,b,c)=>{let d;d=a.s8;if(b>=0&&b<c.j0.length){a:{b:{if(d!=c.j0.charCodeAt(b)){d=a.tx;if(b<0)break a;if(b>=c.j0.length)break a;if(d!=c.j0.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
AFY=a=>{let b,c,d,e,f,g,h;b=a.s8;c=new K;c.jZ=G(16);D(c,c.jY,A(402));d=c.jY;Bj(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
function Fs(){let a=this;Cn.call(a);a.pr=0;a.nY=null;a.o_=null;a.o6=0;}
let ASg=(a,b)=>{a.j_=b;},
ALA=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=X(4);f=d.kM;if(b>=f)return (-1);g=LS(a,b,c,f);h=b+a.pr|0;i=QD.gu(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Di(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=LS(a,h,c,f);while(b<4){if(!AMb(g)){k=b+1|0;i[b]=g;}else{j=(QD.gu(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.pr|0;if(h>=f){b=k;break a;}g=LS(a,h,c,f);b=k;}}}if(b!=a.o6)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.j_.fI(h,c,d);if(j[g]!=a.o_.data[g])break;g
=g+1|0;}return (-1);},
ALf=a=>{let b,c,d,e,f,g,h,i;if(a.nY===null){b=new K;b.jZ=G(16);c=0;while(c<a.o6){d=E6(a.o_.data[c]);e=d.data.length;Kk(b,b.jY,d,0,e);c=c+1|0;}f=new I;d=b.jZ;g=d.data;h=b.jY;e=g.length;if(h>=0&&h<=(e-0|0)){f.j0=L(d.data,0,h);a.nY=f;}else{b=new H;R(b);B(b);}}i=a.nY;b=new K;b.jZ=G(16);D(b,b.jY,A(403));c=b.jY;if(i===null)i=A(2);D(b,c,i);f=new I;d=b.jZ;g=d.data;h=b.jY;e=g.length;if(h>=0&&h<=(e-0|0)){f.j0=L(d.data,0,h);return f;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
LS=(a,b,c,d)=>{let e,f,g,h;a:{a.pr=1;if(b>=(d-1|0)){if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);break a;}c=new W;c.j1=1;c.j2=1;B(c);}d=b+1|0;if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);if(d>=0&&d<c.j0.length){f=c.j0.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=AAs(g,0,h.length);a.pr=2;}break a;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}return e;},
AHF=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof Fs){b=b;if(b.nY===null){c=new K;c.jZ=G(16);d=0;while(d<b.o6){e=E6(b.o_.data[d]);f=e.data.length;Kk(c,c.jY,e,0,f);d=d+1|0;}g=new I;e=c.jZ;h=e.data;i=c.jY;f=h.length;if(i>=0&&i<=(f-0|0)){g.j0=L(e.data,0,i);b.nY=g;}else{b=new H;R(b);B(b);}}g=b.nY;if(a.nY===null){b=new K;b.jZ=G(16);d=0;while(d<a.o6){e=E6(a.o_.data[d]);f=e.data.length;Kk(b,b.jY,e,0,f);d=d+1|0;}c=new I;e=b.jZ;h=e.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){c.j0=L(e.data,0,f);a.nY=c;}else{b=new H;R(b);B(b);}}b
=a.nY;if(g===b)d=1;else if(!(b instanceof I))d=0;else{b=b;d=g.j0!==b.j0?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
ANl=(a,b)=>{return 1;};
let V2=F(Fs);
let Tx=F(Fs);
let Wv=F(DE);
let ABF=(a,b,c,d)=>{let e;while(true){e=a.kH.fI(b,c,d);if(e<=0)break;b=e;}return a.j_.fI(b,c,d);};
let Qp=F(DE);
let AJ9=(a,b,c,d)=>{let e;e=a.kH.fI(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.kH.fI(e,c,d);if(b<=e)break;e=b;}b=e;}return a.j_.fI(b,c,d);};
let GR=F(DE);
let APc=(a,b,c,d)=>{let e;if(!a.kH.gi(d))return a.j_.fI(b,c,d);e=a.kH.fI(b,c,d);if(e>=0)return e;return a.j_.fI(b,c,d);},
ARa=(a,b)=>{a.j_=b;a.kH.e8(b);};
let P_=F(GR);
let AHm=(a,b,c,d)=>{let e;e=a.kH.fI(b,c,d);if(e<=0)e=b;return a.j_.fI(e,c,d);},
AKJ=(a,b)=>{a.j_=b;};
function Gb(){let a=this;DE.call(a);a.n1=null;a.na=0;}
let ATy=(a,b,c,d)=>{let e,f,g,h;e=a.na;e=d.nD.data[e];if(!a.kH.gi(d))return a.j_.fI(b,c,d);if(e>=a.n1.oG)return a.j_.fI(b,c,d);f=a.na;e=e+1|0;d.nD.data[f]=e;g=a.kH.fI(b,c,d);if(g>=0){b=a.na;d.nD.data[b]=0;return g;}g=a.na;e=e+(-1)|0;h=d.nD.data;h[g]=e;if(e>=a.n1.oI)return a.j_.fI(b,c,d);h[g]=0;return (-1);},
ARk=a=>{return Mw(a.n1);};
let OH=F(Gb);
let AGp=(a,b,c,d)=>{let e,f,g;e=0;f=a.n1.oG;a:{while(true){g=a.kH.fI(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.n1.oI)return (-1);return a.j_.fI(b,c,d);};
let RW=F(DE);
let ASw=(a,b,c,d)=>{let e;if(!a.kH.gi(d))return a.j_.fI(b,c,d);e=a.j_.fI(b,c,d);if(e>=0)return e;return a.kH.fI(b,c,d);};
let Q7=F(GR);
let AAv=(a,b,c,d)=>{let e;if(!a.kH.gi(d))return a.j_.fI(b,c,d);e=a.j_.fI(b,c,d);if(e<0)e=a.kH.fI(b,c,d);return e;};
let Ub=F(Gb);
let YA=(a,b,c,d)=>{let e,f,g;e=a.na;f=d.nD.data[e];if(!a.kH.gi(d))return a.j_.fI(b,c,d);g=a.n1;if(f>=g.oG){e=a.na;d.nD.data[e]=0;return a.j_.fI(b,c,d);}if(f<g.oI){e=a.na;d.nD.data[e]=f+1|0;e=a.kH.fI(b,c,d);}else{e=a.j_.fI(b,c,d);if(e>=0){b=a.na;d.nD.data[b]=0;return e;}e=a.na;d.nD.data[e]=f+1|0;e=a.kH.fI(b,c,d);}return e;};
let RX=F(ED);
let ATb=(a,b,c,d)=>{let e;e=d.kM;if(e>b)return a.j_.f4(b,e,c,d);return a.j_.fI(b,c,d);},
APv=(a,b,c,d)=>{let e;e=d.kM;if(a.j_.f4(b,e,c,d)>=0)return b;return (-1);},
AMM=a=>{return A(404);};
function Pt(){ED.call(this);this.sm=null;}
let AL6=(a,b,c,d)=>{let e,f,g;e=d.kM;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.sm;if(f<0)break;if(f>=c.j0.length)break;if(g.gy(c.j0.charCodeAt(f)))break a;f=f+1|0;}c=new W;c.j1=1;c.j2=1;B(c);}if(f>=0)e=f;if(e>b)return a.j_.f4(b,e,c,d);return a.j_.fI(b,c,d);},
W8=(a,b,c,d)=>{let e,f,g,h,i;e=d.kM;f=a.j_.fA(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.sm;if(g<0)break;if(g>=c.j0.length)break;if(h.gy(c.j0.charCodeAt(g)))break a;g=g+1|0;}c=new W;c.j1=1;c.j2=1;B(c);}if(g>=0)e=g;g=a.j_.f4(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.sm;if(i<0)break;if(i>=c.j0.length)break;if(d.gy(c.j0.charCodeAt(i)))break b;i=i+(-1)|0;}c=new W;c.j1=1;c.j2=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
AOh=a=>{return A(405);};
let HC=F();
let Gm=null,F$=null;
let Wx=F(DC);
let YF=(a,b,c,d)=>{let e;a:{while(true){if((b+a.la.f1()|0)>d.kM)break a;e=a.la.f2(b,c);if(e<1)break;b=b+e|0;}}return a.j_.fI(b,c,d);};
let Vg=F(Fl);
let AJ2=(a,b,c,d)=>{let e;if((b+a.la.f1()|0)<=d.kM){e=a.la.f2(b,c);if(e>=1)b=b+e|0;}return a.j_.fI(b,c,d);};
let P1=F(Fn);
let AOA=(a,b,c,d)=>{let e,f,g,h,i;e=a.pB;f=e.oI;g=e.oG;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.la.f1()|0)>d.kM)break a;i=a.la.f2(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.j_.fI(b,c,d);}if((b+a.la.f1()|0)>d.kM){d.mG=1;return (-1);}i=a.la.f2(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let QZ=F(DC);
let ALW=(a,b,c,d)=>{let e;while(true){e=a.j_.fI(b,c,d);if(e>=0)break;if((b+a.la.f1()|0)<=d.kM){e=a.la.f2(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let TA=F(Fl);
let YR=(a,b,c,d)=>{let e;e=a.j_.fI(b,c,d);if(e>=0)return e;return a.kH.fI(b,c,d);};
let RD=F(Fn);
let AOT=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pB;f=e.oI;g=e.oG;h=0;while(true){if(h>=f){a:{while(true){i=a.j_.fI(b,c,d);if(i>=0)break;if((b+a.la.f1()|0)<=d.kM){i=a.la.f2(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.la.f1()|0)>d.kM){d.mG=1;return (-1);}j=a.la.f2(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let LL=F(Cb);
let AIt=(a,b,c,d)=>{if(b&&!(d.pn&&b==d.mQ))return (-1);return a.j_.fI(b,c,d);},
AGF=(a,b)=>{return 0;},
AJ3=a=>{return A(406);};
function K9(){Cb.call(this);this.uZ=0;}
let ZM=(a,b,c,d)=>{let e,f,g;if(b>=d.kM)e=32;else if(b>=0&&b<c.j0.length)e=c.j0.charCodeAt(b);else{c=new W;c.j1=1;c.j2=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.j0.length)f=c.j0.charCodeAt(f);else{c=new W;c.j1=1;c.j2=1;B(c);}}g=d.sE?0:d.mQ;return (e!=32&&!Q$(a,e,b,g,c)?0:1)^(f!=32&&!Q$(a,f,b-1|0,g,c)?0:1)^a.uZ?(-1):a.j_.fI(b,c,d);},
AAa=(a,b)=>{return 0;},
ATt=a=>{return A(407);},
Q$=(a,b,c,d,e)=>{let f;a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CS(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.j0.length)break c;e:{f:{f=e.j0.charCodeAt(c);switch(CS(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(CS(f)!=6)return 1;}}return 1;}e=new W;e.j1=1;e.j2=1;B(e);}return 0;};
let Pn=F(Cb);
let AG3=(a,b,c,d)=>{if(b!=d.rI)return (-1);return a.j_.fI(b,c,d);},
ATq=(a,b)=>{return 0;},
Zs=a=>{return A(408);};
function Nx(){Cb.call(this);this.qd=0;}
let AM0=(a,b,c,d)=>{let e,f,g;e=!d.pn?c.j0.length:d.kM;if(b>=e){f=a.qd;d.lq.data[f]=0;return a.j_.fI(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.j0.length){if(c.j0.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.j0.length){if(c.j0.charCodeAt(g)!=10)break a;f=a.qd;d.lq.data[f]=0;return a.j_.fI(b,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.j0.length){f=c.j0.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new W;c.j1
=1;c.j2=1;B(c);}}return (-1);}e=a.qd;d.lq.data[e]=0;return a.j_.fI(b,c,d);},
ABq=(a,b)=>{let c,d,e;c=a.qd;d=b.lq.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AJc=a=>{return A(409);};
let Vv=F(Cb);
let ALo=(a,b,c,d)=>{if(b<(!d.sE?d.kM:c.j0.length))return (-1);d.mG=1;d.zU=1;return a.j_.fI(b,c,d);},
WK=(a,b)=>{return 0;},
AFf=a=>{return A(410);};
function OO(){Cb.call(this);this.wA=null;}
let AA7=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.kM){if(!b)break b;if(d.pn&&b==d.mQ)break b;e=a.wA;f=b-1|0;if(f>=0&&f<c.j0.length){f=c.j0.charCodeAt(f);if(b<0)break a;if(b>=c.j0.length)break a;if(!e.gA(f,c.j0.charCodeAt(b)))break c;else break b;}c=new W;c.j1=1;c.j2=1;B(c);}}return (-1);}return a.j_.fI(b,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AEK=(a,b)=>{return 0;},
Y4=a=>{return A(411);};
let Vr=F(Cn);
let ASB=(a,b,c,d)=>{let e,f,g,h,i;e=d.kM;f=b+1|0;if(f>e){d.mG=1;return (-1);}if(b>=0&&b<c.j0.length){g=BU(c.j0.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.j0.length){h=c.j0.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.j_.fI(i,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}}}return a.j_.fI(f,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
ACy=a=>{return A(412);},
AAi=(a,b)=>{a.j_=b;},
AKT=a=>{return (-2147483602);},
AAg=(a,b)=>{return 1;};
function PV(){Cn.call(this);this.uf=null;}
let ALh=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.kM;f=b+1|0;if(f>e){d.mG=1;return (-1);}if(b>=0&&b<c.j0.length){g=c.j0.charCodeAt(b);h=BU(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.j0.length){i=c.j0.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.uf.gy(((g&1023)<<10|i&1023)+65536|0)?(-1):a.j_.fI(j,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}}}return a.uf.gy(g)?(-1):a.j_.fI(f,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
ABD=a=>{return A(413);},
AOf=(a,b)=>{a.j_=b;},
Wy=a=>{return (-2147483602);},
AS6=(a,b)=>{return 1;};
function Vh(){Cb.call(this);this.sx=0;}
let AHR=(a,b,c,d)=>{let e,f;e=!d.pn?c.j0.length:d.kM;if(b>=e){e=a.sx;d.lq.data[e]=0;return a.j_.fI(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.j0.length){if(c.j0.charCodeAt(b)!=10)break a;else{f=a.sx;d.lq.data[f]=1;return a.j_.fI(b+1|0,c,d);}}c=new W;c.j1=1;c.j2=1;B(c);}}return (-1);},
AEk=(a,b)=>{let c,d,e;c=a.sx;d=b.lq.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AIG=a=>{return A(409);};
function SQ(){Cb.call(this);this.sI=0;}
let ALm=(a,b,c,d)=>{let e;if((!d.pn?c.j0.length-b|0:d.kM-b|0)<=0){e=a.sI;d.lq.data[e]=0;return a.j_.fI(b,c,d);}if(b>=0&&b<c.j0.length){if(c.j0.charCodeAt(b)!=10)return (-1);e=a.sI;d.lq.data[e]=1;return a.j_.fI(b+1|0,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AD7=(a,b)=>{let c,d,e;c=a.sI;d=b.lq.data;e=!d[c]?0:1;d[c]=(-1);return e;},
X9=a=>{return A(414);};
function Oe(){Cb.call(this);this.qK=0;}
let AGw=(a,b,c,d)=>{let e,f,g;e=!d.pn?c.j0.length-b|0:d.kM-b|0;if(!e){e=a.qK;d.lq.data[e]=0;return a.j_.fI(b,c,d);}a:{if(e<2){if(b>=0&&b<c.j0.length){f=c.j0.charCodeAt(b);g=97;break a;}c=new W;c.j1=1;c.j2=1;B(c);}if(b>=0&&b<c.j0.length){f=c.j0.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.j0.length){g=c.j0.charCodeAt(e);break a;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.qK;d.lq.data[e]=0;return a.j_.fI(b,c,d);case 13:if(g!=10){e=a.qK;d.lq.data[e]=0;return a.j_.fI(b,
c,d);}e=a.qK;d.lq.data[e]=0;return a.j_.fI(b,c,d);default:}return (-1);},
ABv=(a,b)=>{let c,d,e;c=a.qK;d=b.lq.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AEO=a=>{return A(415);};
function GH(){let a=this;Cn.call(a);a.q1=0;a.pI=0;}
let YJ=(a,b,c,d)=>{let e,f,g,h,i;e=IB(a,d);if(e!==null&&(b+e.j0.length|0)<=d.kM){f=0;a:{b:{c:{d:{while(true){if(f>=e.j0.length){g=a.pI;d.lq.data[g]=e.j0.length;return a.j_.fI(b+e.j0.length|0,c,d);}if(f<0)break c;if(f>=e.j0.length)break c;h=e.j0.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.j0.length)break d;if(h!=c.j0.charCodeAt(i)){if(f<0)break a;if(f>=e.j0.length)break a;g=F9(e.j0.charCodeAt(f));if(i<0)break b;if(i>=c.j0.length)break b;if(g!=c.j0.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new W;c.j1=1;c.j2
=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}return (-1);},
ANf=(a,b)=>{a.j_=b;},
IB=(a,b)=>{let c,d,e,f,g;c=a.q1;d=b.lW.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.ql.j0.length?Ch(b.ql,f,g):null;},
Yf=a=>{let b,c,d,e,f,g,h;b=a.lt;c=new K;c.jZ=G(16);D(c,c.jY,A(416));J(c,c.jY,b,10);d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
ANO=(a,b)=>{let c,d,e;c=a.pI;d=b.lq.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Vp=F(GH);
let ABE=(a,b,c,d)=>{let e,f,g;e=IB(a,d);if(e!==null&&(b+e.j0.length|0)<=d.kM){f=!MM(c,e,b)?(-1):e.j0.length;if(f<0)return (-1);g=a.pI;d.lq.data[g]=f;return a.j_.fI(b+f|0,c,d);}return (-1);},
AQy=(a,b,c,d)=>{let e,f,g;e=IB(a,d);f=d.mQ;if(e!==null&&(b+e.j0.length|0)<=f){while(true){if(b>f)return (-1);g=Qr(c,e,b);if(g<0)return (-1);if(a.j_.fI(g+e.j0.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
X_=(a,b,c,d,e)=>{let f,g;f=IB(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=AC5(d,f,c);if(g<0)break a;if(g<b)break a;if(a.j_.fI(g+f.j0.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AJQ=(a,b)=>{return 1;},
AQ7=a=>{let b,c,d,e,f,g,h;b=a.lt;c=new K;c.jZ=G(16);D(c,c.jY,A(417));J(c,c.jY,b,10);d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
function Rw(){GH.call(this);this.yo=0;}
let AIT=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.q1;f=d.lW.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.ql.j0.length?Ch(d.ql,h,i):null;if(j!==null&&(b+j.j0.length|0)<=d.kM){i=0;a:{b:{while(true){if(i>=j.j0.length){e=a.pI;d.lq.data[e]=j.j0.length;return a.j_.fI(b+j.j0.length|0,c,d);}if(i<0)break a;if(i>=j.j0.length)break a;e=j.j0.charCodeAt(i);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}e=Cv(BZ,e)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value)
:null)));}g=Cv(B0,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.j0.length)break b;e=c.j0.charCodeAt(h);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}e=Cv(BZ,e)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}if(g!=(Cv(B0,e)&65535))break;i=i+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}return (-1);},
AAb=a=>{let b,c,d,e,f,g,h;b=a.yo;c=new K;c.jZ=G(16);D(c,c.jY,A(418));J(c,c.jY,b,10);d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
let Pj=F(Bc);
let ADV=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jZ.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ZT=(a,b,c,d)=>{let e,f,g,h,i;e=a.jY;Bj(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jZ.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
AAE=(a,b)=>{Is(a,b);},
APA=(a,b,c)=>{Bj(a,b,b+1|0);a.jZ.data[b]=c;return a;};
function R1(){let a=this;Cx.call(a);a.mf=null;a.tQ=null;a.up=null;}
let ACb=(a,b)=>{let c,d,e,f,g,h;c=O;O=c+1|0;d=new Bc;d.jZ=G(20);a.ki=(J(d,d.jY,c,10)).T();a.kP=1;d=new I;e=b.jZ;f=e.data;g=b.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);a.mf=d;c=b.jY;a.kP=c;a.tQ=Tg(c);a.up=Tg(a.kP);c=0;a:{b:{while(c<(a.kP-1|0)){b=a.tQ;d=a.mf;if(c<0)break a;if(c>=d.j0.length)break a;RG(b,d.j0.charCodeAt(c),(a.kP-c|0)-1|0);b=a.up;d=a.mf;g=(a.kP-c|0)-1|0;if(g<0)break b;if(g>=d.j0.length)break b;RG(b,d.j0.charCodeAt(g),(a.kP-c|0)-1|0);c=c+1|0;}return;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1
=1;b.j2=1;B(b);}b=new H;b.j1=1;b.j2=1;B(b);},
AGB=a=>{let b=new R1();ACb(b,a);return b;},
ACg=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.kP){e=d+b|0;if(e<0)break a;if(e>=c.j0.length)break a;f=c.j0.charCodeAt(e);g=a.mf;if(d<0)break b;if(d>=g.j0.length)break b;if(f!=g.j0.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.kP;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
ZE=(a,b,c,d)=>{let e,f;e=d.kM;while(true){if(b>e)return (-1);f=AQN(a,c,b,e);if(f<0)return (-1);if(a.j_.fI(f+a.kP|0,c,d)>=0)break;b=f+1|0;}return f;},
AED=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=APB(a,d,b,c);if(c<0)return (-1);if(a.j_.fI(c+a.kP|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
ALI=a=>{let b,c,d,e,f,g,h;b=a.mf;c=new K;c.jZ=G(16);D(c,c.jY,A(419));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AFN=(a,b)=>{let c,d,e;if(b instanceof Ea){c=b.mv;b=a.mf;if(0<b.j0.length)return c!=b.j0.charCodeAt(0)?0:1;b=new W;b.j1=1;b.j2=1;B(b);}if(b instanceof Ed){b=b;d=Ch(a.mf,0,1);b=b.nh;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}return (!b.gf(d.j0.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof DQ)){if(!(b instanceof Eu))return 1;a:{if(a.mf.j0.length>1){e=b.pX;b=a.mf;if(0>=b.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}c=b.j0.charCodeAt(0);b=a.mf;if(1>=b.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}if(e==(((c&1023)<<10|
b.j0.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.mf;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}b:{c:{if(!b.gf(d.j0.charCodeAt(0))){if(a.mf.j0.length<=1)break c;d=a.mf;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}c=d.j0.charCodeAt(0);d=a.mf;if(1>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}if(!b.gf(((c&1023)<<10|d.j0.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AQN=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mf;f=a.kP-1|0;if(f>=0&&f<e.j0.length){g=e.j0.charCodeAt(f);a:{b:{c:{while(true){f=a.kP;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.j0.length)break c;h=b.j0.charCodeAt(f);if(h==g){f=0;d:{while(f<a.kP){i=f+c|0;if(i<0)break a;if(i>=b.j0.length)break a;j=b.j0.charCodeAt(i);e=a.mf;if(f<0)break b;if(f>=e.j0.length)break b;if(j!=e.j0.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+SK(a.tQ,h)|0;}return c;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2
=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
APB=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mf;if(0>=e.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}f=e.j0.charCodeAt(0);g=(b.j0.length-d|0)-a.kP|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.j0.length)break c;h=b.j0.charCodeAt(d);if(h==f){g=0;d:{while(g<a.kP){i=g+d|0;if(i<0)break a;if(i>=b.j0.length)break a;j=b.j0.charCodeAt(i);e=a.mf;if(g<0)break b;if(g>=e.j0.length)break b;if(j!=e.j0.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-SK(a.up,h)|0;}return d;}b=new W;b.j1=1;b.j2
=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);};
function Ob(){Cx.call(this);this.rp=null;}
let AI3=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.rp.j0.length)return a.rp.j0.length;e=a.rp;if(d<0)break a;if(d>=e.j0.length)break a;f=e.j0.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.j0.length)break b;h=c.j0.charCodeAt(g);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}h=Cv(BZ,h)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}if(f!=(Cv(B0,h)&65535))break;d=d+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2
=1;B(c);},
AFZ=a=>{let b,c,d,e,f,g,h;b=a.rp;c=new K;c.jZ=G(16);D(c,c.jY,A(420));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function OK(){Cx.call(this);this.qj=null;}
let AOC=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.qj.j0.length)return a.qj.j0.length;e=a.qj;if(d<0)break c;if(d>=e.j0.length)break c;f=e.j0.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.j0.length)break d;if(f!=c.j0.charCodeAt(g)){e=a.qj;if(d<0)break a;if(d>=e.j0.length)break a;h=F9(e.j0.charCodeAt(d));if(g<0)break b;if(g>=c.j0.length)break b;if(h!=c.j0.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=
1;c.j2=1;B(c);},
AQl=a=>{let b,c,d,e,f,g,h;b=a.qj;c=new K;c.jZ=G(16);D(c,c.jY,A(421));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
let ATP=F();
function N_(){Cx.call(this);this.ua=0;}
let AOG=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);if(d>=0&&d<c.j0.length){d=c.j0.charCodeAt(d);b=a.ua;d=((e&1023)<<10|d&1023)+65536|0;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}d=Cv(BZ,d);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return b!=Cv(B0,d)?(-1):2;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
ATr=a=>{let b,c,d,e,f,g;b=new I;c=E6(a.ua);b.j0=L(c.data,0,c.data.length);d=new K;d.jZ=G(16);D(d,d.jY,A(401));D(d,d.jY,b);b=new I;c=d.jZ;e=c.data;f=d.jY;g=e.length;if(f>=0&&f<=(g-0|0)){b.j0=L(c.data,0,f);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function HF(){Cn.call(this);this.oP=0;}
let ALS=(a,b)=>{a.j_=b;},
KX=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.kM){d.mG=1;return (-1);}if(b>=0&&b<c.j0.length){a:{f=c.j0.charCodeAt(b);if(b>d.mQ){b=b-1|0;if(b>=0&&b<c.j0.length){if(!((c.j0.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}}if(a.oP!=f)return (-1);return a.j_.fI(e,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AFH=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof I)){e=d.kM;a:{while(true){if(b>e){b=(-1);break a;}if(KX(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.mQ;g=d.kM;b:{while(true){if(b>=g)return (-1);h=HK(c,a.oP,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.j0.length)break b;if((c.j0.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.j_;b=h+1|0;if(i.fI(b,c,d)>=0)break;}return h;}c=new W;c.j1=1;c.j2=1;B(c);},
ACv=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(KX(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.mQ;b:{c:{while(true){if(c<b)return (-1);g=EX(d,a.oP,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.j0.length)break b;if((d.j0.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.j_.fI(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new W;d.j1=1;d.j2=1;B(d);},
APN=a=>{let b,c,d,e,f,g,h;b=a.oP;c=new K;c.jZ=G(16);d=c.jY;Bj(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
XZ=(a,b)=>{if(b instanceof Ea)return 0;if(b instanceof Ed)return 0;if(b instanceof DQ)return 0;if(b instanceof Eu)return 0;if(b instanceof HL)return 0;if(!(b instanceof HF))return 1;return b.oP!=a.oP?0:1;},
AP2=(a,b)=>{return 1;};
function HL(){Cn.call(this);this.oz=0;}
let AAB=(a,b)=>{a.j_=b;},
Kb=(a,b,c,d)=>{let e,f,g;e=d.kM;f=b+1|0;e=BU(f,e);if(e>0){d.mG=1;return (-1);}if(b>=0&&b<c.j0.length){a:{g=c.j0.charCodeAt(b);if(e<0){if(f>=0&&f<c.j0.length){if(!((c.j0.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}}if(a.oz!=g)return (-1);return a.j_.fI(f,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AMt=(a,b,c,d)=>{let e,f;if(!(c instanceof I)){e=d.kM;a:{while(true){if(b>e){b=(-1);break a;}if(Kb(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.kM;b:{while(true){if(b>=e)return (-1);f=HK(c,a.oz,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.j0.length)break b;if((c.j0.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.j_.fI(b,c,d)>=0)break;}return f;}c=new W;c.j1=1;c.j2=1;B(c);},
AOB=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(Kb(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.kM;b:{c:{while(true){if(c<b)return (-1);g=EX(d,a.oz,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.j0.length)break b;if((d.j0.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.j_.fI(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new W;d.j1=1;d.j2=1;B(d);},
ASz=a=>{let b,c,d,e,f,g,h;b=a.oz;c=new K;c.jZ=G(16);d=c.jY;Bj(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
ACk=(a,b)=>{if(b instanceof Ea)return 0;if(b instanceof Ed)return 0;if(b instanceof DQ)return 0;if(b instanceof Eu)return 0;if(b instanceof HF)return 0;if(!(b instanceof HL))return 1;return b.oz!=a.oz?0:1;},
AMF=(a,b)=>{return 1;};
function Eu(){let a=this;Cx.call(a);a.pM=0;a.pi=0;a.pX=0;}
let ANP=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);if(d>=0&&d<c.j0.length){d=c.j0.charCodeAt(d);return a.pM==e&&a.pi==d?2:(-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
AKB=(a,b,c,d)=>{let e,f,g,h;if(c instanceof I){e=d.kM;a:{while(b<e){b=HK(c,a.pM,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.j0.length)break a;f=c.j0.charCodeAt(b);if(a.pi==f&&a.j_.fI(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}g=d.kM;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.kP|0)>d.kM){d.mG=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.j0.length)break b;e=c.j0.charCodeAt(b);if(h<0)break c;if(h>=c.j0.length)break c;f=c.j0.charCodeAt(h);h
=a.pM==e&&a.pi==f?2:(-1);h=h<0?(-1):a.j_.fI(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new W;R(c);B(c);}c=new W;R(c);B(c);},
AAz=(a,b,c,d,e)=>{let f,g,h;if(d instanceof I){a:{b:{while(true){if(c<b)return (-1);c=EX(d,a.pi,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.pM;if(c<0)break a;if(c>=d.j0.length)break a;if(f==d.j0.charCodeAt(c)&&a.j_.fI(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new W;d.j1=1;d.j2=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.kP|0)>e.kM){e.mG=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.j0.length)break c;h=d.j0.charCodeAt(c);if(g<0)break d;if(g>=d.j0.length)break d;g=d.j0.charCodeAt(g);f
=a.pM==h&&a.pi==g?2:(-1);f=f<0?(-1):a.j_.fI(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new W;R(d);B(d);}d=new W;R(d);B(d);},
ARb=a=>{let b,c,d,e,f,g,h;b=a.pM;c=a.pi;d=new K;d.jZ=G(16);e=d.jY;Bj(d,e,e+1|0);d.jZ.data[e]=b;b=d.jY;Bj(d,b,b+1|0);f=d.jZ;g=f.data;g[b]=c;h=new I;c=d.jY;e=g.length;if(c>=0&&c<=(e-0|0)){h.j0=L(f.data,0,c);return h;}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);},
ANr=(a,b)=>{if(b instanceof Eu)return b.pX!=a.pX?0:1;if(b instanceof DQ)return b.gf(a.pX);if(b instanceof Ea)return 0;if(!(b instanceof Ed))return 1;return 0;};
let JA=F(HC);
let AAN=(a,b)=>{return b!=10?0:1;},
ANB=(a,b,c)=>{return b!=10?0:1;};
let JB=F(HC);
let AOW=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AR2=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function T_(){let a=this;C.call(a);a.vd=null;a.tn=null;a.q6=0;a.xU=0;}
let AGZ=(a,b)=>{let c,d;while(true){c=a.q6;if(b<c)break;a.q6=c<<1|1;}d=c<<1|1;a.q6=d;d=d+1|0;a.vd=X(d);a.tn=X(d);a.xU=b;},
Tg=a=>{let b=new T_();AGZ(b,a);return b;},
RG=(a,b,c)=>{let d,e,f,g;d=0;e=a.q6;f=b&e;while(true){g=a.vd.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.tn.data[f]=c;},
SK=(a,b)=>{let c,d,e,f;c=a.q6;d=b&c;e=0;while(true){f=a.vd.data[d];if(!f)break;if(f==b)return a.tn.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xU;};
let Jg=F(Bx);
let AF_=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return C4(BT(b,9,13),32);};
let IF=F(Bx);
let AIV=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(b,48,57);};
let TW=F(Bx);
let AOm=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(b,97,122);};
let Uy=F(Bx);
let AP3=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(b,65,90);};
let UD=F(Bx);
let ADe=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(b,0,127);};
let Ja=F(Bx);
let ABk=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(BT(b,97,122),65,90);};
let Jx=F(Ja);
let AEe=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(BT(BT(b,97,122),65,90),48,57);};
let Wo=F(Bx);
let AFG=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(BT(BT(b,33,64),91,96),123,126);};
let J8=F(Jx);
let WR=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(BT(BT(BT(BT(BT(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let RZ=F(J8);
let AJH=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return C4(BT(BT(BT(BT(BT(BT(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let Sq=F(Bx);
let AB$=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return C4(C4(b,32),9);};
let Ql=F(Bx);
let AJz=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return C4(BT(b,0,31),127);};
let P8=F(Bx);
let AR7=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(BT(BT(b,48,57),97,102),65,70);};
let UI=F(Bx);
let AKP=a=>{let b,c;b=new SU;b.zl=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let Ww=F(Bx);
let W2=a=>{let b,c;b=new Ok;b.zq=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let T$=F(Bx);
let AGA=a=>{let b,c;b=new Sf;b.y3=a;c=new Bm;c.kh=X(64);b.kl=c;return b;};
let TO=F(Bx);
let ANT=a=>{let b,c;b=new Se;b.yT=a;c=new Bm;c.kh=X(64);b.kl=c;return b;};
let U9=F(Bx);
let AB8=a=>{let b,c;b=new VD;b.zX=a;c=new Bm;c.kh=X(64);b.kl=c;IT(c,0,2048);b.lg=1;return b;};
let O5=F(Bx);
let ACG=a=>{let b,c;b=new PW;b.zB=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let OF=F(Bx);
let ART=a=>{let b,c;b=new Pf;b.Ae=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let Ug=F(Bx);
let WO=a=>{let b,c;b=new Rh;b.zm=a;c=new Bm;c.kh=X(64);b.kl=c;return b;};
let Us=F(Bx);
let AH6=a=>{let b,c;b=new Og;b.x5=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let QG=F(Bx);
let ACU=a=>{let b,c;b=new Oj;b.zD=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let Sv=F(Bx);
let AEP=a=>{let b,c;b=new O9;b.zW=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let V3=F(Bx);
let AIa=a=>{let b,c;b=new Qd;b.z9=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let Up=F(Bx);
let AQs=a=>{let b,c;b=new Qi;b.y4=a;c=new Bm;c.kh=X(64);b.kl=c;return b;};
let Rp=F(Bx);
let AMS=a=>{let b,c;b=new Tn;b.zG=a;c=new Bm;c.kh=X(64);b.kl=c;return b;};
let QF=F(Bx);
let AKE=a=>{let b,c;b=new SD;b.x$=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let Ws=F(Bx);
let AOa=a=>{let b,c;b=new Ow;b.An=a;c=new Bm;c.kh=X(64);b.kl=c;b.lg=1;return b;};
let Io=F(Bx);
let AIy=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return C4(BT(BT(BT(b,97,122),65,90),48,57),95);};
let Vc=F(Io);
let AKc=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;b=EN(C4(BT(BT(BT(b,97,122),65,90),48,57),95),1);b.lg=1;return b;};
let R2=F(Jg);
let ZB=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;b=EN(C4(BT(b,9,13),32),1);b.lg=1;return b;};
let QA=F(IF);
let AFv=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;b=EN(BT(b,48,57),1);b.lg=1;return b;};
function Bu(){let a=this;Bx.call(a);a.kr=0;a.ks=0;}
let ARR=(a,b,c)=>{a.kr=b;a.ks=c;},
BH=(a,b)=>{let c=new Bu();ARR(c,a,b);return c;},
AIC=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(b,a.kr,a.ks);};
let Qw=F(Bx);
let ARE=a=>{let b,c;b=new CG;c=new Bm;c.kh=X(64);b.kl=c;c=new Bm;c.kh=X(2);b.kn=c;return BT(BT(b,65279,65279),65520,65533);};
function LP(){let a=this;Bx.call(a);a.uQ=0;a.tg=0;a.vT=0;}
let ABu=(a,b,c)=>{a.tg=c;a.uQ=b;},
Cd=(a,b)=>{let c=new LP();ABu(c,a,b);return c;},
ARS=(a,b,c,d)=>{a.vT=d;a.tg=c;a.uQ=b;},
AIv=(a,b,c)=>{let d=new LP();ARS(d,a,b,c);return d;},
ADZ=a=>{let b,c,d;b=new JY;c=a.uQ;d=new Bm;d.kh=X(64);b.kl=d;b.sK=c;if(a.vT)IT(d,0,2048);b.lg=a.tg;return b;};
function LW(){let a=this;Bx.call(a);a.uO=0;a.tp=0;a.vy=0;}
let ACV=(a,b,c)=>{a.tp=c;a.uO=b;},
GK=(a,b)=>{let c=new LW();ACV(c,a,b);return c;},
WQ=(a,b,c,d)=>{a.vy=d;a.tp=c;a.uO=b;},
AGx=(a,b,c)=>{let d=new LW();WQ(d,a,b,c);return d;},
WP=a=>{let b,c,d;b=new R6;c=a.uO;d=new Bm;d.kh=X(64);b.kl=d;b.sK=c;if(a.vy)IT(d,0,2048);b.lg=a.tp;return b;};
let D1=F(Bz);
let Yt=F();
let ACl=F();
let AAu=F();
let ASj=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new M4;d=G(b.j0.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.tI=d;f=F5(c);d=X(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=F5(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=F5(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.j0.length)break;e[f]=b.j0.charCodeAt(f);f=f+1|0;}b=new W;b.j1=1;b.j2=1;B(b);},
Cy=b=>{let c,d,e,f,g,h,i,j,k,l;c=new M4;d=G(b.j0.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.tI=d;f=F5(c);d=X(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+F5(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=F5(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.j0.length)break;e[f]=b.j0.charCodeAt(f);f=f+1|0;}b=new W;b.j1=1;b.j2=1;B(b);},
Ct=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=X(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bk;l.j1=1;l.j2=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new UM;l.wy=b;l.wL=c;return l;},
I1=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
ATK=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=Q(In,16384);d=c.data;e=BI(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.j0.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BC;b.kf=j;k=b;j.classObject=k;}}b=Ei(b);if(b===null){b=new Df;b.j1=1;b.j2=1;B(b);}if(b===M(Bo)){b=new Bk;b.j1=1;b.j2=1;B(b);}if(g<0){b=new D1;b.j1=1;b.j2=1;B(b);}k=DY(b.kf,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.j0.length)break c;l=I1(b.j0.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.j0.length)break b;l=I1(b.j0.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.j0.length)break a;m=m|Dl(n,I1(b.j0.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.j0.length)break;m=I1(b.j0.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new In;l=h+f|0;q=BI(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.tX=h;j.um=l;j.t1=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new In;t=h+f|0;q=BI(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.tX=h;j.um=t;j.t1=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);};
function UM(){let a=this;C.call(a);a.wy=null;a.wL=null;}
function In(){let a=this;C.call(a);a.tX=0;a.um=0;a.t1=null;}
function M4(){let a=this;C.call(a);a.tI=null;a.wo=0;}
let AFD=F();
let F5=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.tI.data;f=b.wo;b.wo=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Dl(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AOn=F();
function QR(){let a=this;DH.call(a);a.vO=null;a.vN=0;a.qU=null;}
let APw=(a,b)=>{return;},
ACY=(a,b)=>{let c,d,e,f,g,h;if(BW===null){b=new CN;c=new Ck;c.lH=BI(32);b.l2=c;c=new K;Bt(c);c.jZ=G(16);b.lM=c;b.lL=G(32);b.lN=0;b.lO=Cg;BW=b;}b=a.vO;c=new K;c.jZ=G(16);D(c,c.jY,A(422));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BX(Bw(b));BX("\n");return;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
YG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(Kv(IK(A(117),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.qU;b.ub=b.sd.j4;if(a.vN){e=0;while(true){b=a.qU;c=b.sd;f=BU(e,c.j4);if(f>=0)break a;if(f>=0){g=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;d=b.jZ;h=d.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){c.j0=L(d.data,0,f);g.j1=1;g.j2=1;g.j3=c;B(g);}b=new H;R(b);B(b);}AF5(b,c.j7.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(Kv(IK(A(115),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AHQ(h[1]);b=h[2];if(b===null){b=new Cu;b.j1=1;b.j2=1;b.j3=A(84);B(b);}m=APV(b,0,b.j0.length,10);n=h[3];o=FJ;if(k===A(423))i=1;else if(!(A(423) instanceof I))i=0;else{b=A(423);i=k.j0!==b.j0?0:1;}if(i)o=FA;if(k===A(424))i=1;else if(!(A(424) instanceof I))i=0;else{b=A(424);i=k.j0!==b.j0?0:1;}if(i)o=Fp;if(k===A(425))i=1;else if(!(A(425) instanceof I))i=0;else{b=A(425);i=k.j0!==b.j0?0:1;}if(i)o=Fi;if(k===A(233))i=1;else if(!(A(233) instanceof I))i=0;else{b=A(233);i=k.j0!==b.j0?0:1;}if(i)o=JV;if
(o===Fi&&!Gq.xn)m=Ca;g=new SG;g.t5=l;g.vZ=o;g.xD=m;g.vQ=n;Ce(a.qU.wd,l,l);Bf(a.qU.sd,g);f=f+1|0;}b=new S;b.j1=1;b.j2=1;b.j3=A(426);B(b);},
AKp=(a,b,c)=>{return YG(a,b,c);};
let CP=F(BG);
let AAP=null,AKX=null,AB4=null,AB3=null,AAV=null,AAy=null,ZX=null,ABR=null,ZC=null,AHx=null;
let Iy=()=>{Iy=BQ(CP);Yk();};
let Yk=()=>{let b,c,d,e,f,g,h,i,j;b=new U2;Iy();b.kg=A(427);b.ka=0;AAP=b;c=new U3;c.kg=A(428);c.ka=1;AKX=c;d=new U7;d.kg=A(429);d.ka=2;AB4=d;e=new U8;e.kg=A(430);e.ka=3;AB3=e;f=new U5;f.kg=A(431);f.ka=4;AAV=f;g=new U6;g.kg=A(432);g.ka=5;AAy=g;h=new U0;h.kg=A(433);h.ka=6;ZX=h;i=new U1;i.kg=A(434);i.ka=7;ABR=i;j=new UY;j.kg=A(435);j.ka=8;ZC=j;AHx=T(CP,[b,c,d,e,f,g,h,i,j]);};
function FI(){let a=this;Hv.call(a);a.pq=0;a.m_=null;}
let AS1=F(0);
let Z6=b=>{let c,d;if(b===A(436))c=1;else if(!(A(436) instanceof I))c=0;else{d=A(436);c=b.j0!==d.j0?0:1;}a:{if(!c){if(b===A(437))c=1;else if(!(A(437) instanceof I))c=0;else{d=A(437);c=b.j0!==d.j0?0:1;}if(!c){if(b===A(438))c=1;else if(!(A(438) instanceof I))c=0;else{d=A(438);c=b.j0!==d.j0?0:1;}if(!c){if(b===A(439))c=1;else if(!(A(439) instanceof I))c=0;else{d=A(439);c=b.j0!==d.j0?0:1;}if(!c){if(b===A(440))c=1;else if(!(A(440) instanceof I))c=0;else{d=A(440);c=b.j0!==d.j0?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AGc=b=>{let c,d;if(b===A(441))c=1;else if(!(A(441) instanceof I))c=0;else{d=A(441);c=b.j0!==d.j0?0:1;}a:{b:{if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof I))c=0;else{d=A(442);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(443))c=1;else if(!(A(443) instanceof I))c=0;else{d=A(443);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(444))c=1;else if(!(A(444) instanceof I))c=0;else{d=A(444);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(445))c=1;else if(!(A(445) instanceof I))c=0;else{d=A(445);c=b.j0!==d.j0?0:1;}if(c)break b;if
(b===A(446))c=1;else if(!(A(446) instanceof I))c=0;else{d=A(446);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(447))c=1;else if(!(A(447) instanceof I))c=0;else{d=A(447);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(448))c=1;else if(!(A(448) instanceof I))c=0;else{d=A(448);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(449))c=1;else if(!(A(449) instanceof I))c=0;else{d=A(449);c=b.j0!==d.j0?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let TY=F(0);
let Qu=F();
let ARL=(a,b,c)=>{a.gM(U(b),Dt(c,"handleEvent"));},
AK2=(a,b)=>{return !!a.gN(b);},
AAC=(a,b,c)=>{a.gO(U(b),Dt(c,"handleEvent"));},
AHr=(a,b,c,d)=>{a.gP(U(b),Dt(c,"handleEvent"),d?1:0);},
AO5=(a,b,c,d)=>{a.gQ(U(b),Dt(c,"handleEvent"),d?1:0);};
function MD(){let a=this;C.call(a);a.tW=null;a.vi=null;a.r6=null;a.vm=0;a.sT=null;}
let ALd=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.tW;if(e!==Fp&&e!==Fi){if(e===FA){b=window.document.createElement("img");d=Bw(U(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new Il;d.np=c;d.ux=e;d.uI=b;}else if(e===FJ)d=U(c.result);}else{e=c.result;b=new Int8Array(e);d=new Il;d.np=b;d.ux=e;}if(d!==null){GY(a.sT.vS,a.tW,a.vi,d);Bf(a.r6,a.vi);if(a.r6.j4==a.vm){b=a.sT.vE;d=new Oz;d.ui=a;Bf(b.rC,d);}}},
AJb=(a,b)=>{ALd(a,b);};
function Fr(){BG.call(this);this.ry=null;}
let FA=null,Fi=null,FJ=null,Fp=null,JV=null,NK=null;
let ALn=()=>{let b,c,d,e,f;b=new Fr;b.kg=A(450);b.ka=0;b.ry=A(423);FA=b;c=new Fr;c.kg=A(451);c.ka=1;c.ry=A(425);Fi=c;d=new Fr;d.kg=A(452);d.ka=2;d.ry=A(453);FJ=d;e=new Fr;e.kg=A(454);e.ka=3;e.ry=A(424);Fp=e;f=new Fr;f.kg=A(455);f.ka=4;f.ry=A(233);JV=f;NK=T(Fr,[b,c,d,e,f]);};
let AGu=F();
let Lc=null,Pi=null;
let APF=b=>{let c,d,e,f,g,h,i,j,k,l;c=new K;c.jZ=G(16);d=AN_();e=0;f=Pi.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.jY;if(i>0){Bj(c,i,i+1|0);c.jZ.data[i]=32;}j=d.data[e];D(c,c.jY,j);}e=e+1|0;h=h+1|0;}j=new I;d=c.jZ;k=d.data;e=c.jY;l=k.length;if(e>=0&&e<=(l-0|0)){j.j0=L(d.data,0,e);return j;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
AN_=()=>{if(Lc===null)Lc=T(I,[A(456),A(457),A(458),A(459),A(460),A(461),A(462),A(463),A(464),A(465),A(466),A(467)]);return Lc;},
Yg=()=>{Pi=Iw([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let RR=F(0);
function Hy(){let a=this;MR.call(a);a.lD=null;a.yZ=null;a.rv=0;a.ss=0;a.oM=null;a.uV=null;}
let Zb=a=>{let b,c,d,e,f,g,h;b=new K;b.jZ=G(16);c=APF(Lb(a.rv,a.ss));D(b,b.jY,c);d=b.jY;if(d>0){Bj(b,d,d+1|0);b.jZ.data[d]=32;}c=a.lD;if(c.j$===null)c.j$=U(c.kf.$meta.name);c=c.j$;D(b,b.jY,c);d=b.jY;Bj(b,d,d+1|0);b.jZ.data[d]=40;e=a.oM.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.jY;Bj(b,h,h+1|0);b.jZ.data[h]=44;}c=g[f];if(c.j$===null)c.j$=U(c.kf.$meta.name);c=c.j$;D(b,b.jY,c);f=f+1|0;}d=b.jY;Bj(b,d,d+1|0);g=b.jZ;e=g.data;e[d]=41;c=new I;d=b.jY;h=e.length;if(d>=0&&d<=(h-0|0)){c.j0=L(g.data,
0,d);return c;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AO7=(a,b)=>{let c,d,e,f,g;if(a.rv&1){c=new MB;c.j1=1;c.j2=1;B(c);}if(a.uV===null){c=new J_;c.j1=1;c.j2=1;B(c);}d=b.data;e=d.length;if(e!=a.oM.data.length){c=new Bk;c.j1=1;c.j2=1;B(c);}f=0;while(f<e){if(!(a.oM.data[f].kf.$meta.primitive?1:0)&&d[f]!==null){c=a.oM.data[f];g=d[f];c=c.kf;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MA(g.constructor,c)?1:0)){c=new Bk;c.j1=1;c.j2=1;B(c);}}if((a.oM.data[f].kf.$meta.primitive?1:0)&&d[f]===null){c=new Bk;c.j1=1;c.j2=1;B(c);}f=f+1|0;}c=b.data;g=new(a.lD.kf);a.uV.call(g,
c);return g;};
let W=F(H);
function Vj(){let a=this;Bp.call(a);a.vH=null;a.z2=null;}
let ADn=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.mu^CF(a.vH,c):0;};
function Vi(){let a=this;Bp.call(a);a.xq=null;a.xE=null;a.zJ=null;}
let XC=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.mu^CF(a.xq,c):0;return a.xE.gf(b)&&!d?1:0;};
function Py(){let a=this;Bp.call(a);a.sj=null;a.yb=null;}
let AIl=(a,b)=>{return a.kG^CF(a.sj,b);},
AE7=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.jZ=G(16);c=Ic(a.sj,0);while(c>=0){d=(E6(c)).data;e=0;f=d.length;g=b.jY;Bj(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jZ.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jY;Bj(b,g,g+1|0);b.jZ.data[g]=124;c=Ic(a.sj,c+1|0);}e=b.jY;if(e>0)Vt(b,e-1|0);k=new I;d=b.jZ;h=d.data;e=b.jY;g=h.length;if(e>=0&&e<=(g-0|0)){k.j0=L(d.data,0,e);return k;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function PF(){let a=this;Bp.call(a);a.ws=null;a.zp=null;}
let ANR=(a,b)=>{return a.ws.gf(b);};
function PC(){let a=this;Bp.call(a);a.th=0;a.vR=null;a.t3=null;}
let AOF=(a,b)=>{return !(a.th^CF(a.t3.kn,b))&&!(a.th^a.t3.nH^a.vR.gf(b))?0:1;};
function PD(){let a=this;Bp.call(a);a.to=0;a.xv=null;a.uE=null;}
let AI2=(a,b)=>{return !(a.to^CF(a.uE.kn,b))&&!(a.to^a.uE.nH^a.xv.gf(b))?1:0;};
function PJ(){let a=this;Bp.call(a);a.xP=0;a.xy=null;a.xs=null;a.yy=null;}
let ACK=(a,b)=>{return a.xP^(!a.xy.gf(b)&&!a.xs.gf(b)?0:1);};
function PK(){let a=this;Bp.call(a);a.wv=0;a.wq=null;a.wi=null;a.Aj=null;}
let WB=(a,b)=>{return a.wv^(!a.wq.gf(b)&&!a.wi.gf(b)?0:1)?0:1;};
function PH(){let a=this;Bp.call(a);a.wg=null;a.Am=null;}
let AFi=(a,b)=>{let c,d;c=a.wg;d=c.lk;return d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b);};
function PI(){let a=this;Bp.call(a);a.xC=null;a.yQ=null;}
let AI4=(a,b)=>{let c,d;c=a.xC;d=c.lk;return (d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b))?0:1;};
function PL(){let a=this;Bp.call(a);a.wE=null;a.wr=0;a.xf=null;}
let AQB=(a,b)=>{let c,d,e;c=a.wE;d=c.lk;e=d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b);return !e&&!(a.wr^CF(a.xf.kn,b))?0:1;};
function PM(){let a=this;Bp.call(a);a.wX=null;a.w4=0;a.wP=null;}
let ABO=(a,b)=>{let c,d,e;c=a.wX;d=c.lk;e=d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b);return !e&&!(a.w4^CF(a.wP.kn,b))?1:0;};
function Px(){let a=this;Bp.call(a);a.xe=0;a.xu=null;a.xI=null;a.yg=null;}
let ATQ=(a,b)=>{let c,d;a:{if(!(a.xe^a.xu.gf(b))){c=a.xI;d=c.lk;if(!(d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b))){b=0;break a;}}b=1;}return b;};
function P3(){let a=this;Bp.call(a);a.xG=0;a.vu=null;a.vz=null;a.yM=null;}
let AFr=(a,b)=>{let c,d;a:{if(!(a.xG^a.vu.gf(b))){c=a.vz;d=c.lk;if(!(d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b))){b=1;break a;}}b=0;}return b;};
function Pv(){let a=this;Bp.call(a);a.v6=null;a.yS=null;}
let ABL=(a,b)=>{let c,d;c=a.v6;d=c.lk;return d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b);};
function Pw(){let a=this;Bp.call(a);a.v7=null;a.Ag=null;}
let AEh=(a,b)=>{let c,d;c=a.v7;d=c.lk;return (d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b))?0:1;};
function PB(){let a=this;Bp.call(a);a.xO=null;a.wU=0;a.x1=null;}
let AG8=(a,b)=>{let c,d,e;c=a.xO;d=c.lk;e=d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b);return e&&a.wU^CF(a.x1.kn,b)?1:0;};
function Pu(){let a=this;Bp.call(a);a.w9=null;a.ww=0;a.wT=null;}
let AQa=(a,b)=>{let c,d,e;c=a.w9;d=c.lk;e=d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b);return e&&a.ww^CF(a.wT.kn,b)?0:1;};
function Pz(){let a=this;Bp.call(a);a.xg=0;a.vG=null;a.wu=null;a.yw=null;}
let ZZ=(a,b)=>{let c,d;a:{if(a.xg^a.vG.gf(b)){c=a.wu;d=c.lk;if(d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b)){b=1;break a;}}b=0;}return b;};
function PA(){let a=this;Bp.call(a);a.w6=0;a.vr=null;a.xd=null;a.yX=null;}
let AMB=(a,b)=>{let c,d;a:{if(a.w6^a.vr.gf(b)){c=a.xd;d=c.lk;if(d!==null?c.kG^d.gf(b):c.kG^CF(c.kn,b)){b=0;break a;}}b=1;}return b;};
function IA(){let a=this;C.call(a);a.oE=null;a.uD=null;a.mg=null;a.mR=0;}
function Gu(){let a=this;C.call(a);a.Ak=null;a.nR=Ca;a.oJ=Ca;a.mW=null;a.v0=null;a.ny=null;a.mV=0;a.nS=null;}
let I5=null,B1=null,CR=0,Eq=0,RT=null;
let AIk=a=>{let b,c,$$je;a:{b:{c:{d:{try{Eq=Eq+1|0;AMT(a);a.c3();}catch($$e){$$je=Z($$e);if($$je instanceof Dq){b=$$je;break d;}else{b=$$je;break c;}}b=a.mW;FO(b);e:{try{NG(b);DL(b);break e;}catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}a.mV=0;Eq=Eq-1|0;b=I5;if(B1!==b)B1=b;B1.oJ=Em();break a;}try{YP(AFM(a),a,b);break b;}catch($$e){$$je=Z($$e);b=$$je;}}c=a.mW;FO(c);f:{try{NG(c);DL(c);break f;}catch($$e){$$je=Z($$e);b=$$je;}DL(c);B(b);}a.mV=0;Eq=Eq-1|0;c=I5;if(B1!==c)B1=c;B1.oJ=Em();B(b);}b=a.mW;FO(b);g:{try{NG(b);DL(b);break g;}
catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}a.mV=0;Eq=Eq-1|0;b=I5;if(B1!==b)B1=b;B1.oJ=Em();}},
AMT=b=>{if(B1!==b)B1=b;B1.oJ=Em();},
ATS=()=>{return B1;},
K8=b=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQt(b);if(Fv()){break _;}return;default:Fm();}}Db().s(b,$p);},
ACH=(b,c)=>{let d,e;d=B1;e=new Ph;e.x2=d;e.xr=c;e.z3=Ne(e,AUY(b,V(2147483647))?2147483647:Bl(b));d.v0=e;},
AFM=a=>{let b;b=a.Ak;if(b!==null)return b;return RT;},
Zv=()=>{let b,c,d;b=new Gu;c=null;b.mW=new C;b.mV=1;b.ny=A(468);b.nS=c;d=CR;CR=d+1|0;b.nR=V(d);I5=b;B1=b;CR=1;Eq=1;RT=new Sg;},
AQt=b=>{let thread=Db();let javaThread=W4();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;J$(javaThread);thread.resume();};callback.gZ=e=>{thread.attribute=APQ(e);J$(javaThread);thread.resume();};callback=Sp(callback);thread.suspend(()=>{try {ACH(b,callback);;}catch(NV){callback.gZ(NV);}});return null;};
let BN=F(Bz);
let IN=F(Bz);
let ANW=F();
let Sh=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let AEl=F();
let XX=F();
let F7=F(0);
function Wb(){C.call(this);this.wj=null;}
let AQD=a=>{AOZ(a.wj);};
let U2=F(CP);
let U3=F(CP);
let U7=F(CP);
let U8=F(CP);
let U5=F(CP);
let U6=F(CP);
let U0=F(CP);
let U1=F(CP);
let UY=F(CP);
let OJ=F(0);
let Sg=F();
let YP=(a,b,c)=>{let d;if(Dh===null){b=new FG;d=new Ck;d.lH=BI(32);Bt(b);b.l2=d;d=new K;DM(d,16);b.lM=d;b.lL=G(32);b.lN=0;b.lO=Cg;Dh=b;}J4(c,Dh);};
let Q5=F();
let RQ=F(0);
function Rx(){C.call(this);this.pO=null;}
let Sp=b=>{let c;c=new Rx;c.pO=b;return c;},
AHz=(a,b)=>{a.pO.e(b);},
ASr=(a,b)=>{a.pO.gZ(b);};
function ST(){let a=this;C.call(a);a.vX=null;a.vY=null;a.vV=0;a.vW=null;}
let OG=F(Gk);
let AD6=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.kM;a:{while(true){if(b>f){b=e;break a;}g=a.lt;h=d.lW.data;i=g*2|0;j=h[i];h[i]=b;e=a.mU.fI(b,c,d);if(e>=0)break;i=a.lt;d.lW.data[i*2|0]=j;b=b+1|0;}}return b;},
ATx=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.lt;h=e.lW.data;i=g*2|0;j=h[i];h[i]=c;f=a.mU.fI(c,d,e);if(f>=0)break;i=a.lt;e.lW.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
ABo=a=>{return null;};
function SU(){Bp.call(this);this.zl=null;}
let AQZ=(a,b)=>{return CS(b)!=2?0:1;};
function Ok(){Bp.call(this);this.zq=null;}
let Zu=(a,b)=>{return CS(b)!=1?0:1;};
function Sf(){Bp.call(this);this.y3=null;}
let YQ=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CS(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function Se(){Bp.call(this);this.yT=null;}
let ADW=(a,b)=>{return 0;};
function VD(){Bp.call(this);this.zX=null;}
let AGM=(a,b)=>{return !CS(b)?0:1;};
function PW(){Bp.call(this);this.zB=null;}
let AQ3=(a,b)=>{return CS(b)!=9?0:1;};
function Pf(){Bp.call(this);this.Ae=null;}
let ALH=(a,b)=>{return Ho(b);};
function Rh(){Bp.call(this);this.zm=null;}
let AN3=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Og(){Bp.call(this);this.x5=null;}
let AS0=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function Oj(){Bp.call(this);this.zD=null;}
let ACs=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function O9(){Bp.call(this);this.zW=null;}
let ARw=(a,b)=>{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function Qd(){Bp.call(this);this.z9=null;}
let AJv=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Qi(){Bp.call(this);this.y4=null;}
let ANd=(a,b)=>{a:{switch(CS(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function Tn(){Bp.call(this);this.zG=null;}
let AQC=(a,b)=>{return CS(b)!=3?0:1;};
function SD(){Bp.call(this);this.x$=null;}
let ASo=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function Ow(){Bp.call(this);this.An=null;}
let AB9=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function JY(){Bp.call(this);this.sK=0;}
let ALM=(a,b)=>{return a.kG^(a.sK!=CS(b&65535)?0:1);};
let R6=F(JY);
let APk=(a,b)=>{return a.kG^(!(a.sK>>CS(b&65535)&1)?0:1);};
function YS(){let a=this;C.call(a);a.Av=0;a.Aw=0;a.At=0;a.Au=0;a.As=null;}
function GZ(){let a=this;Gu.call(a);a.o$=0;a.nB=null;a.nT=null;a.nF=null;}
let AL0=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new M2;c.n6=a;c.qr=b;c=B5(c,"handleEvent");b.onreadystatechange=c;c=a.nF;d=a.nT;e=new G0;e.u0=c;e.r8=d;c=B5(e,"handleEvent");b.onprogress=c;d=a.nB;f=a.o$;b.open("GET",Bw(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let Ox=F();
let TZ=null;
let Mz=()=>{Mz=BQ(Ox);AOz();};
let AOz=()=>{let b,c;b=X((UT.p()).data.length);c=b.data;TZ=b;c[NA.ka]=1;c[Jd.ka]=2;};
let Vd=F();
let AIw=(a,b,c)=>{a.eQ(U(b),Dt(c,"handleEvent"));},
AJy=(a,b,c)=>{a.eR(U(b),Dt(c,"handleEvent"));},
Xe=(a,b,c,d)=>{a.eS(U(b),Dt(c,"handleEvent"),d?1:0);},
Xs=(a,b)=>{return !!a.eT(b);},
AFl=(a,b,c,d)=>{a.eV(U(b),Dt(c,"handleEvent"),d?1:0);};
let G2=F(0);
function Ki(){let a=this;C.call(a);a.pl=null;a.t$=0;a.sv=null;a.uP=null;a.qH=null;}
let ASv=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pl.readyState==4){if(a.pl.status==200){if(a.qH.mL){if(BW===null){b=new CN;c=new Ck;c.lH=BI(32);b.l2=c;c=new K;Bt(c);c.jZ=G(16);b.lM=c;b.lL=G(32);b.lN=0;b.lO=Cg;BW=b;}b=a.sv;c=new K;c.jZ=G(16);D(c,c.jY,A(469));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g
>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BX(Bw(b));BX("\n");}else{b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}}c=a.pl.response;E4();i=F8.nl.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);U(a.pl.responseText);}else if(a.pl.status!=404&&a.pl.status!=403){try{k=V(100);$p=1;continue _;}catch($$e){$$je=Z($$e);if($$je instanceof Dq){}else{throw $$e;}}NS(a.qH,a.t$,a.sv,a.uP);}b=a.qH;b.ld=b.ld-1|0;}return;case 1:a:{try{K8(k);if(Fv()){break _;}break a;}catch($$e){$$je=Z($$e);if($$je instanceof Dq)
{}else{throw $$e;}}}NS(a.qH,a.t$,a.sv,a.uP);b=a.qH;b.ld=b.ld-1|0;return;default:Fm();}}Db().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AGV=(a,b)=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ASv(a,b);if(Fv()){break _;}return;default:Fm();}}Db().s(a,b,$p);};
let AJ6=F();
let CA=0;
function Cr(){let a=this;C.call(a);a.kU=null;a.lX=0;a.lJ=0;a.kQ=0;}
let AKj=(a,b,c)=>{a.kQ=1;a.kU=b;a.lX=c;},
L_=(a,b)=>{let c=new Cr();AKj(c,a,b);return c;},
Hu=a=>{let b;if(a.kQ)return a.lJ>=a.kU.j4?0:1;b=new S;b.j1=1;b.j2=1;b.j3=A(17);B(b);},
Cm=a=>{let b,c,d,e,f,g,h;b=a.lJ;c=a.kU;if(b<c.j4){if(a.kQ){d=c.j7.data;a.lJ=b+1|0;return d[b];}c=new S;c.j1=1;c.j2=1;c.j3=A(17);B(c);}c=new Wm;e=new K;e.jZ=G(16);J(e,e.jY,b,10);f=new I;d=e.jZ;g=d.data;b=e.jY;h=g.length;if(b>=0&&b<=(h-0|0)){f.j0=L(d.data,0,b);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);};
function C0(){let a=this;C.call(a);a.l9=null;a.ma=0;a.uu=null;a.uv=null;}
let AMQ=(a,b)=>{a.l9=b;a.ma=1;},
NR=a=>{let b=new C0();AMQ(b,a);return b;},
ATz=(a,b,c)=>{a.l9=b;a.ma=c;},
LK=(a,b)=>{let c=new C0();ATz(c,a,b);return c;},
CJ=a=>{let b,c,d;if(CA){b=new Cr;c=a.l9;d=a.ma;b.kQ=1;b.kU=c;b.lX=d;return b;}if(a.uu===null){b=new Cr;c=a.l9;d=a.ma;b.kQ=1;b.kU=c;b.lX=d;a.uu=b;b=new Cr;b.kQ=1;b.kU=c;b.lX=d;a.uv=b;}b=a.uu;if(b.kQ){c=a.uv;c.lJ=0;c.kQ=1;b.kQ=0;return c;}b.lJ=0;b.kQ=1;a.uv.kQ=0;return b;};
function Il(){let a=this;C.call(a);a.ux=null;a.np=null;a.uI=null;}
let ANS=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.np.length;c=new K;c.jZ=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new I;f=c.jZ;g=f.data;b=c.jY;h=g.length;if(b>=0&&b<=(h-0|0)){e.j0=L(f.data,0,b);return e;}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}i=b-d|0;if(i>=3){j=(((a.np[d]&255)<<16)+((a.np[d+1|0]&255)<<8)|0)+(a.np[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(470).j0.length)break f;h=A(470).j0.charCodeAt(h);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(470).j0.length)break g;h
=A(470).j0.charCodeAt(h);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(470).j0.length)break h;h=A(470).j0.charCodeAt(h);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;i=j&63;if(i<0)break;if(i>=A(470).j0.length)break;h=A(470).j0.charCodeAt(i);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;}else if(i<2){j=(a.np[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(470).j0.length)break d;h=A(470).j0.charCodeAt(h);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(470).j0.length)break e;h=A(470).j0.charCodeAt(h);i
=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;D(c,c.jY,A(471));}else{k=((a.np[d]&255)<<16)+((a.np[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(470).j0.length)break a;h=A(470).j0.charCodeAt(h);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(470).j0.length)break b;h=A(470).j0.charCodeAt(h);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(470).j0.length)break c;h=A(470).j0.charCodeAt(h);i=c.jY;Bj(c,i,i+1|0);c.jZ.data[i]=h;D(c,c.jY,A(472));}d=d+3|0;}e=new W;e.j1=1;e.j2=1;B(e);}e
=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);};
function Oz(){C.call(this);this.ui=null;}
let Wd=F(0);
let S6=F(0);
let TV=F(0);
let Hq=F();
let ES=a=>{return;};
function Iq(){Hq.call(this);this.l2=null;}
let F1=(a,b)=>{a.l2=b;},
AXz=a=>{let b=new Iq();F1(b,a);return b;};
function IM(){let a=this;Iq.call(a);a.lN=0;a.lM=null;a.lL=null;a.lO=null;}
let Vx=(a,b,c)=>{a.l2=b;b=new K;b.jZ=G(16);a.lM=b;a.lL=G(32);a.lN=c;a.lO=Cg;},
AWl=(a,b)=>{let c=new IM();Vx(c,a,b);return c;};
let Hk=F(IM);
let CN=F(Hk);
let AG$=(a,b)=>{BX(Bw(b));};
function G0(){let a=this;C.call(a);a.r8=null;a.u0=null;}
let AK7=(a,b)=>{a.r8.g2(b.loaded);};
let ZI=F();
function Ck(){Hq.call(this);this.lH=null;}
let Zp=(a,b)=>{a.lH=BI(b);},
AP5=a=>{let b=new Ck();Zp(b,a);return b;};
function Ko(){let a=this;C.call(a);a.vn=null;a.v_=null;}
let Jz=b=>{let c,d,e;if(b.j0.length?0:1){c=new JC;c.j1=1;c.j2=1;c.tB=b;B(c);}if(0>=b.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}if(!Um(b.j0.charCodeAt(0))){c=new JC;c.j1=1;c.j2=1;c.tB=b;B(c);}d=1;a:{while(d<b.j0.length){if(d<0)break a;if(d>=b.j0.length)break a;b:{e=b.j0.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(Um(e))break b;else{c=new JC;c.j1=1;c.j2=1;c.tB=b;B(c);}}}d=d+1|0;}return;}b=new W;b.j1=1;b.j2=1;B(b);},
Um=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let NQ=F(Ko);
let Cg=null;
let AU8=()=>{let b,c,d,e,f;b=new NQ;c=Q(I,0);d=c.data;Jz(A(3));e=d.length;f=0;while(f<e){Jz(d[f]);f=f+1|0;}b.vn=A(3);b.v_=c.p();Cg=b;};
function JC(){Bk.call(this);this.tB=null;}
let K2=F(0);
function HY(){let a=this;C.call(a);a.u7=null;a.qa=null;a.mT=0;a.pP=null;a.vg=0.0;a.tu=0.0;a.mo=0;a.oX=null;a.sR=null;a.s0=null;a.uL=0;a.xb=0;a.v1=0;a.v9=0;a.vp=0;a.pT=null;a.qW=null;a.yj=0;a.pp=null;a.rM=0.0;a.si=0;a.t2=0;a.u1=0;}
let V9=null;
let HW=()=>{HW=BQ(HY);AJY();};
let KV=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;HW();a.mT=0;a.pP=null;a.vg=0.0;a.tu=0.0;a.mo=0;a.oX=C8();a.sR=C8();a.s0=C8();a.uL=0;a.xb=770;a.v1=771;a.v9=770;a.vp=771;a.qW=null;d=new BM;d.kX=1.0;d.kW=1.0;d.kV=1.0;d.kY=1.0;CX(d);a.pp=d;a.rM=Tl;a.si=0;a.t2=0;a.u1=0;if(b>8191){c=new Bk;d=new K;d.jZ=G(16);D(d,d.jY,A(473));J(d,d.jY,b,10);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}j=Ez===null?V9:LR;k=new Jf;l=b*4|0;m=b*6|0;f
=Q(DV,3);g=f.data;d=new DV;d.mF=1;d.mt=2;d.mE=5126;d.mN=0;d.mJ=A(474);d.oh=0;d.pv=D_(1);g[0]=d;d=new DV;d.mF=4;d.mt=4;d.mE=5121;d.mN=1;d.mJ=A(475);d.oh=0;d.pv=D_(4);g[1]=d;d=new DV;d.mF=16;d.mt=2;d.mE=5126;d.mN=0;d.mJ=A(476);d.oh=0;d.pv=D_(16);g[2]=d;VL(k,j,0,l,m,Rf(f));a.u7=k;d=a.sR;n=B3.li.width;o=B3.li.height;Mu(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.qa=B_(b*20|0);f=Ft(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.u7.mj.g7(f,0,g.length);if(c!==null)a.pT=c;else{e=QU(A(477),A(478));if(!e.nP){c=new Bk;d=new K;d.jZ=G(16);D(d,d.jY,A(479));if(!e.nP)j=e.nn;else{j=Bq.g9(e.mK);e.nn=j;}D(d,d.jY,j);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}a.pT=e;a.yj=1;}},
AVG=(a,b)=>{let c=new HY();KV(c,a,b);return c;},
AFA=a=>{let b,c;if(a.mo){b=new BN;b.j1=1;b.j2=1;b.j3=A(480);B(b);}a.si=0;B9.g$(0);c=a.qW;if(c!==null)c.g_();else{c=a.pT;b=Bq;if(c.k2){CH(c,c.lY,c.l0);c.k2=0;}b.hb(c.mK);}Gc(a);a.mo=1;},
APq=a=>{let b,c;if(!a.mo){b=new BN;b.j1=1;b.j2=1;b.j3=A(481);B(b);}if(a.mT>0)D8(a);a.pP=null;a.mo=0;c=B9;c.g$(1);if(a.uL?0:1)c.bb(3042);},
AHb=(a,b,c,d,e)=>{let f,g;if(!a.mo){b=new BN;b.j1=1;b.j2=1;b.j3=A(482);B(b);}f=a.qa.data.length;if(b!==a.pP){D8(a);a.pP=b;b=b.n3;a.vg=1.0/b.nC;a.tu=1.0/b.nu;g=f;}else{g=f-a.mT|0;if(!g){D8(a);g=f;}}if(g>=e)g=e;Di(c,d,a.qa,a.mT,g);a.mT=a.mT+g|0;e=e-g|0;while(e>0){d=d+g|0;D8(a);g=f>=e?e:f;Di(c,d,a.qa,0,g);a.mT=a.mT+g|0;e=e-g|0;}},
K$=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.mo){b=new BN;b.j1=1;b.j2=1;b.j3=A(482);B(b);}l=a.qa;m=b.oZ;if(m!==a.pP){D8(a);a.pP=m;m=m.n3;a.vg=1.0/m.nC;a.tu=1.0/m.nu;}else{n=l.data;if(a.mT==n.length)D8(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{Gx();n=F6.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.u9;bb=b.u6;bc=b.u8;bd=b.u$;be=a.rM;bf=a.mT;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.mT=bf+20|0;},
D8=a=>{let b,c,d,e,f,g;b=a.mT;if(!b)return;a.si=a.si+1|0;a.t2=a.t2+1|0;c=b/20|0;if(c>a.u1)a.u1=c;b=c*6|0;d=a.pP;B9.cA(d.ng,d.qh);d=a.u7;e=a.qa;f=a.mT;d.mm.hc(e,0,f);g=d.mj.hd(1);CC(g,0);CQ(g,b);if(a.uL)B9.bb(3042);else{B9.W(3042);c=a.xb;if(c!=(-1))B9.he(c,a.v1,a.v9,a.vp);}g=a.qW;if(g===null)g=a.pT;SR(d,g,4,0,b,d.r$);a.mT=0;},
Gc=a=>{let b,c,d,e;SV(C$(a.s0,a.sR.lj),a.oX);b=a.qW;if(b!==null){b.hh(A(483),a.s0);a.qW.hi(A(484),0);}else{b=a.pT;c=a.s0;Id();d=Jc(b,A(483),HM);e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}QN(e,d,1,0,c.lj,0);b=a.pT;c=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}c.hl(Jc(b,A(484),HM),0);}},
AJY=()=>{V9=Lz;};
let RK=F(0);
function KQ(){C.call(this);this.zo=null;}
function TB(){let a=this;KQ.call(a);a.mZ=null;a.s9=null;a.yu=null;a.yY=null;a.oK=null;a.pW=null;a.sW=0;}
let AFJ=(a,b)=>{let c,d,e,f,g,h,i,j,k;a.zo=b;b=new Bg;b.kq=1;b.j7=Q(C,16);a.yY=b;a.sW=0;c=new Nj;b=new SP;d=new QB;AM9(d);d.vI=1.0;e=new Bn;CT();d.w_=e;d.uY=0.0;b.tS=new Bn;b.r4=1.0;b.qX=d;d=new HY;HW();KV(d,1000,null);SO(c,b,d);c.ym=1;a.mZ=c;K_.mz=c;b=new Bg;b.kq=1;b.j7=Q(C,16);a.oK=b;Bf(b,Kr());Bf(a.oK,Kr());Bf(a.oK,Kr());b=new Bg;b.kq=1;b.j7=Q(C,16);a.pW=b;Bf(b,LE());Bf(a.pW,LE());Bf(a.pW,LE());b=a.oK;f=BU(0,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,
c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}h=b.j7.data;c=h[0];c.m7=(c.m7+270.0)%360.0;if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}c=h[0];d=a.mZ;k=(d.mb.nb/2|0)+27|0;if(!(c.kt===100.0&&c.kF===k)){c.kt=100.0;c.kF=k;}if(f>=0){d=new H;c
=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}a:{b=h[0];c=d.ls;d=b.k4;if(d!==null){if(d===c)break a;g=Eb(d.kp,b,1);if(g!=(-1)){e=d.kp;CO(e);e=Dv(e,g);d=d.lA;if(d!==null)E3(d,e);e.k4=null;e.x(null);}}Bf(c.kp,b);b.k4=c;b.x(c.lA);}b=a.pW;f=BU(0,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,
g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}h=b.j7.data;c=h[0];c.m7=(c.m7+270.0)%360.0;if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}c=h[0];d=a.mZ;k=(d.mb.nb/2|0)+27|0;if(!(c.kt===100.0&&c.kF===k)){c.kt=100.0;c.kF=k;}if(f>=0){d=new H;c
=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}b:{b=h[0];c=d.ls;d=b.k4;if(d!==null){if(d===c)break b;g=Eb(d.kp,b,1);if(g!=(-1)){e=d.kp;CO(e);e=Dv(e,g);d=d.lA;if(d!==null)E3(d,e);e.k4=null;e.x(null);}}Bf(c.kp,b);b.k4=c;b.x(c.lA);}b=a.oK;f=BU(1,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,
g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}h=b.j7.data;c=h[1];d=a.mZ;k=(d.mb.nb/2|0)+100|0;if(!(c.kt===200.0&&c.kF===k)){c.kt=200.0;c.kF=k;}if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}c:{b=h[1];c=d.ls;d=b.k4;if(d!==null){if(d===c)break c;g
=Eb(d.kp,b,1);if(g!=(-1)){e=d.kp;CO(e);e=Dv(e,g);d=d.lA;if(d!==null)E3(d,e);e.k4=null;e.x(null);}}Bf(c.kp,b);b.k4=c;b.x(c.lA);}b=a.pW;f=BU(1,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}h=b.j7.data;c=h[1];d=a.mZ;k=(d.mb.nb/2|0)+100|0;if(!(c.kt===200.0&&c.kF===k)){c.kt=200.0;c.kF=k;}if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,
c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}d:{b=h[1];c=d.ls;d=b.k4;if(d!==null){if(d===c)break d;g=Eb(d.kp,b,1);if(g!=(-1)){e=d.kp;CO(e);e=Dv(e,g);d=d.lA;if(d!==null)E3(d,e);e.k4=null;e.x(null);}}Bf(c.kp,b);b.k4=c;b.x(c.lA);}b=a.oK;f=BU(2,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i
=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}h=b.j7.data;c=h[2];d=a.mZ;k=((d.mb.nb/2|0)-27|0)-100|0;if(!(c.kt===200.0&&c.kF===k)){c.kt=200.0;c.kF=k;}if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}e:{b=h[2];c=d.ls;d=b.k4;if(d!==null){if(d===c)break e;g=Eb(d.kp,
b,1);if(g!=(-1)){e=d.kp;CO(e);e=Dv(e,g);d=d.lA;if(d!==null)E3(d,e);e.k4=null;e.x(null);}}Bf(c.kp,b);b.k4=c;b.x(c.lA);}b=a.pW;f=BU(2,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}h=b.j7.data;c=h[2];d=a.mZ;k=((d.mb.nb/2|0)-27|0)-100|0;if(!(c.kt===200.0&&c.kF===k)){c.kt=200.0;c.kF=k;}if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,
c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}f:{b=h[2];c=d.ls;d=b.k4;if(d!==null){if(d===c)break f;g=Eb(d.kp,b,1);if(g!=(-1)){e=d.kp;CO(e);e=Dv(e,g);d=d.lA;if(d!==null)E3(d,e);e.k4=null;e.x(null);}}Bf(c.kp,b);b.k4=c;b.x(c.lA);}g:{b=AEn(a.oK);a.s9=b;c=a.mZ.ls;d=b.k4;if(d!==null){if(d===c)break g;g=Eb(d.kp,b,1);if(g!=(-1)){e=d.kp;CO(e);e=Dv(e,g);d=d.lA;if(d!==null)E3(d,
e);e.k4=null;e.x(null);}}Bf(c.kp,b);b.k4=c;b.lA=c.lA;}},
AJU=a=>{let b=new TB();AFJ(b,a);return b;},
ARQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;B9.ho(0.9300000071525574,0.9300000071525574,0.9300000071525574,0.5);B9.hp(16384);if(!(a.sW%500|0)){c=AID(a);a.yu=c;d=a.s9.ox;e=BU(0,d.j4);if(e>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=d.j4;J(c,c.jY,g,10);d=new I;h=c.jZ;i=h.data;e=c.jY;j=i.length;if(e>=0&&e<=(j-0|0)){d.j0=L(h.data,0,e);f.j1=1;f.j2=1;f.j3=d;B(f);}c=new H;R(c);B(c);}h=d.j7.data;b=h[0].j6;if(e>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g
=d.j4;J(c,c.jY,g,10);d=new I;h=c.jZ;i=h.data;e=c.jY;j=i.length;if(e>=0&&e<=(j-0|0)){d.j0=L(h.data,0,e);f.j1=1;f.j2=1;f.j3=d;B(f);}c=new H;R(c);B(c);}k=h[0].j5;if(!(c.kt===b&&c.kF===k)){c.kt=b;c.kF=k;}a:{d=a.mZ.ls;f=c.k4;if(f!==null){if(f===d)break a;g=Eb(f.kp,c,1);if(g!=(-1)){l=f.kp;CO(l);l=Dv(l,g);f=f.lA;if(f!==null)E3(f,l);l.k4=null;l.x(null);}}Bf(d.kp,c);c.k4=d;c.lA=d.lA;}}a.sW=a.sW+1|0;ANY(a.mZ,B3.sC);c=a.mZ;f=c.mb.qX;Wn(f,1);if(c.ls.ne){d=c.vo;f=f.qC;if(d.mo)D8(d);C$(d.sR,f.lj);if(d.mo)Gc(d);AFA(d);f=c.ls;if
(f.nk){l=KF(f);C$(f.pA,d.oX.lj);if(d.mo)D8(d);C$(d.oX,l.lj);if(d.mo)Gc(d);}Qe(f,d,1.0);if(f.nk){f=f.pA;if(d.mo)D8(d);C$(d.oX,f.lj);if(d.mo)Gc(d);}APq(d);if(BR)AM2(c);}};
let Wm=F(Bz);
let S=F(Bz);
let AC8=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
Kz=a=>{let b=new S();AC8(b,a);return b;};
let ACo=F();
let Lb=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function El(){C.call(this);this.nz=null;}
let Y6=a=>{AIk(a.nz);};
let ADC=F();
let V7=F();
let OV=null;
let Nw=()=>{Nw=BQ(V7);AO4();};
let AO4=()=>{let b,c;b=X((NK.p()).data.length);c=b.data;OV=b;c[FJ.ka]=1;c[FA.ka]=2;c[Fp.ka]=3;c[Fi.ka]=4;c[JV.ka]=5;};
let Nr=F(Bz);
function NU(){let a=this;C.call(a);a.qX=null;a.s1=0.0;a.s$=0.0;a.pU=0;a.pV=0;a.qt=0;a.nb=0;a.tS=null;}
let Nq=(a,b)=>{let c,d,e,f;AIn(a.pU,a.pV,a.qt,a.nb);c=a.qX;d=a.s1;c.tR=d;e=a.s$;c.uo=e;if(b){f=c.un;d=d/2.0;e=e/2.0;f.kb=d;f.kc=e;f.kd=0.0;}Wn(c,1);},
ET=(a,b)=>{let c,d,e,f;c=a.tS;d=b.j6;e=b.j5;c.kb=d;c.kc=e;c.kd=1.0;ALb(a.qX,c,a.pU,a.pV,a.qt,a.nb);c=a.tS;f=c.kb;d=c.kc;b.j6=f;b.j5=d;return b;};
function SP(){NU.call(this);this.r4=0.0;}
function Un(){let a=this;CE.call(a);a.x6=null;a.x3=null;a.yD=null;a.yr=null;a.rF=null;a.oW=null;a.tt=null;}
let AS$=a=>{let b,c,d,e,f,g;F_(a);a.rF=new D$;b=new HU;c=HA;d=Ju(c.rK,A(485),GQ);e=null;f=I3(d,HP(d),e,0);e=B9;c=e.j9.createTexture();g=e.nj;e.nj=g+1|0;Cc(e.nW,g,Cf(c));e=HE;b.ph=e;b.pQ=e;e=HR;b.o8=e;b.pj=e;b.qP=1.0;b.ng=3553;b.qh=g;JS(b,f);e=Dc;c=EQ;if(e===null)c=I6(c);else{g=G_(e);c=IL(c,e,g&(c.ms.data.length-1|0),g);}c=c===null?null:c.mY;if(c===null){c=new Bg;Bt(c);c.kq=1;c.j7=Q(C,16);}Bf(c,b);GG(EQ,e,c);a.x6=b;e=new Jo;c=b.n3;M8(e,b,0,0,c.nC,c.nu);a.x3=e;if(!(a.ln===41.0&&a.ly===59.0)){a.ln=41.0;a.ly=59.0;}Nt(a,
a.kt,a.kF,a.ln,a.ly);e=new Bb;e.j6=0.0;e.j5=16.0;a.yD=e;e=new Bb;e.j6=a.ln;e.j5=16.0;a.yr=e;a.oW=Ji;e=new Ua;e.sp=a;if(!Li(a.sS,e,1))Bf(a.sS,e);},
Kr=()=>{let a=new Un();AS$(a);return a;},
XQ=(a,b,c)=>{let d,e,f,g;if(a.oW.m1){d=new FR;d.ou=0.0;a.tt=d;}else{d=new FR;d.ou=1.0;a.tt=d;}d=a.rU;c=d.kX;e=d.kW;f=d.kV;g=a.tt.ou;d=b.pp;d.kX=c;d.kW=e;d.kV=f;d.kY=g;CX(d);b.rM=Ff(b.pp);K$(b,a.x3,a.kt,a.kF,a.pF,a.pG,a.ln,a.ly,a.n4,a.n5,a.m7);AH5(a);},
ADF=(a,b)=>{G5(a,b);},
AH5=a=>{let b,c,d,e,f;MQ(a,100);if(a.oW.m1){b=a.rF;c=a.kt;d=a.kF;b.nJ=c;b.nI=d;b.nQ=0.0;b.nv=0.0;}else if(a.m7!==270.0){b=a.rF;d=a.kt;e=a.kF;c=a.ln+2.0;f=a.ly+2.0;b.nJ=d;b.nI=e;b.nQ=c;b.nv=f;}else{b=a.rF;e=a.kt;c=a.kF;f=a.ln;c=c-f;d=a.ly+2.0;f=f+2.0;b.nJ=e;b.nI=c;b.nQ=d;b.nv=f;}};
function Pd(){let a=this;CE.call(a);a.ze=null;a.xF=null;a.zS=null;a.zw=null;a.sF=null;a.tJ=null;a.u2=null;}
let ALk=a=>{let b,c,d,e,f,g,h;F_(a);a.sF=new D$;b=new HU;c=HA;d=Ju(c.rK,A(486),GQ);e=null;f=I3(d,HP(d),e,0);d=B9;e=d.j9.createTexture();g=d.nj;d.nj=g+1|0;Cc(d.nW,g,Cf(e));e=HE;b.ph=e;b.pQ=e;e=HR;b.o8=e;b.pj=e;b.qP=1.0;b.ng=3553;b.qh=g;JS(b,f);e=Dc;c=EQ;if(e===null)c=I6(c);else{h=G_(e);c=IL(c,e,h&(c.ms.data.length-1|0),h);}c=c===null?null:c.mY;if(c===null){c=new Bg;Bt(c);c.kq=1;c.j7=Q(C,16);}Bf(c,b);GG(EQ,e,c);a.ze=b;e=new Jo;c=b.n3;M8(e,b,0,0,c.nC,c.nu);a.xF=e;if(!(a.ln===41.0&&a.ly===59.0)){a.ln=41.0;a.ly=
59.0;}Nt(a,a.kt,a.kF,a.ln,a.ly);e=new Bb;e.j6=0.0;e.j5=16.0;a.zS=e;e=new Bb;e.j6=a.ln;e.j5=16.0;a.zw=e;a.tJ=I8;},
LE=()=>{let a=new Pd();ALk(a);return a;},
AIj=(a,b,c)=>{let d,e,f,g;if(!a.tJ.m1){d=new FR;d.ou=0.0;a.u2=d;}else{d=new FR;d.ou=1.0;a.u2=d;}d=a.rU;c=d.kX;e=d.kW;f=d.kV;g=a.u2.ou;d=b.pp;d.kX=c;d.kW=e;d.kV=f;d.kY=g;CX(d);b.rM=Ff(b.pp);K$(b,a.xF,a.kt,a.kF,a.pF,a.pG,a.ln,a.ly,a.n4,a.n5,a.m7);AC1(a);},
AOl=(a,b)=>{G5(a,b);},
AC1=a=>{let b,c,d,e,f;MQ(a,4);if(a.tJ.m1){b=a.sF;c=a.kt;d=a.kF;b.nJ=c;b.nI=d;b.nQ=0.0;b.nv=0.0;}else if(a.m7!==270.0){b=a.sF;d=a.kt;e=a.kF;c=a.ln+2.0;f=a.ly+2.0;b.nJ=d;b.nI=e;b.nQ=c;b.nv=f;}else{b=a.sF;e=a.kt;c=a.kF;f=a.ln;c=c-f;d=a.ly+2.0;f=f+2.0;b.nJ=e;b.nI=c;b.nQ=d;b.nv=f;}};
function TM(){let a=this;CE.call(a);a.zK=null;a.wC=null;a.ox=null;a.q4=null;a.qp=null;a.p7=null;a.qF=null;a.oY=null;a.qT=null;a.z1=null;a.oy=null;}
let ACp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;F_(a);c=new HU;d=HA;e=Ju(d.rK,A(486),GQ);f=null;g=I3(e,HP(e),f,0);f=B9;d=f.j9.createTexture();h=f.nj;f.nj=h+1|0;Cc(f.nW,h,Cf(d));f=HE;c.ph=f;c.pQ=f;f=HR;c.o8=f;c.pj=f;c.qP=1.0;c.ng=3553;c.qh=h;JS(c,g);f=Dc;d=EQ;if(f===null)d=I6(d);else{i=G_(f);d=IL(d,f,i&(d.ms.data.length-1|0),i);}d=d===null?null:d.mY;if(d===null){d=new Bg;Bt(d);d.kq=1;d.j7=Q(C,16);}Bf(d,c);GG(EQ,f,d);a.zK=c;f=new H8;f.oZ=c;Nf(f,0,0,1,1);a.wC=f;a.z1=b;c=new Bg;c.kq=1;c.j7=Q(C,16);a.ox=c;f=new Bb;if
(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}f.j6=b.j7.data[0].kt+16.0;f.j5=600.0;Bf(c,f);c=a.ox;f=new Bb;i=b.j4;if(0>=i){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b
=new H;R(b);B(b);}k=b.j7.data;m=k[0].kt+16.0;if(1>=i){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}n=k[1].kF+15.0;f.j6=m;f.j5=n;Bf(c,f);c=new Bg;c.kq=1;c.j7=Q(C,16);a.qF=c;f=new Bb;if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));h=b.j4;J(c,c.jY,h,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if
(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}m=b.j7.data[0].kt+16.0;d=a.ox;j=d.j4;i=j-1|0;if(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;R(b);B(b);}n=d.j7.data[i].j5;f.j6=m;f.j5=n;Bf(c,f);c=a.qF;f=new Bb;if(1>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,
c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}n=b.j7.data[1].kt;j=c.j4;i=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;R(b);B(b);}m=c.j7.data[i].j5;f.j6=n;f.j5=m;Bf(c,f);c=new Bg;c.kq=1;c.j7=Q(C,16);a.oY=c;f=new Bb;i=BU(1,b.j4);if(i>=0){f
=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}k=b.j7.data;n=k[1].kt;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}m=n+k[1].ln;d=a.qF;j=d.j4;i=j-1|0;if
(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;R(b);B(b);}n=d.j7.data[i].j5;f.j6=m;f.j5=n;Bf(c,f);c=a.oY;f=new Bb;j=c.j4;i=j-1|0;j=BU(i,j);if(j>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3
=c;B(f);}b=new H;R(b);B(b);}k=c.j7.data;m=k[i].j6+100.0;if(j>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;R(b);B(b);}n=k[i].j5;f.j6=m;f.j5=n;Bf(c,f);c=a.oY;f=new Bb;j=c.j4;i=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h
-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;R(b);B(b);}m=c.j7.data[i].j6;if(2>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}n=b.j7.data[2].kF+15.0;f.j6=m;f.j5=n;Bf(c,f);c=a.oY;f=new Bb;i=BU(2,b.j4);if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k
=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}k=b.j7.data;n=k[2].kt;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}m=n+k[2].ln;j=c.j4;i=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k
=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;R(b);B(b);}n=c.j7.data[i].j5;f.j6=m;f.j5=n;Bf(c,f);c=new Bg;c.kq=1;c.j7=Q(C,16);a.qT=c;f=new Bb;if(2>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}n=b.j7.data[2].kt;d=a.oY;j=d.j4;i=j-1|0;if(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,
b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;R(b);B(b);}m=d.j7.data[i].j5;f.j6=n;f.j5=m;Bf(c,f);c=a.qT;f=new Bb;if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}m=b.j7.data[0].kt+16.0;j=c.j4;i
=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;R(b);B(b);}n=c.j7.data[i].j5;f.j6=m;f.j5=n;Bf(c,f);c=new Bg;c.kq=1;c.j7=Q(C,16);a.q4=c;f=new Bb;if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,
i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}m=b.j7.data[0].kt+16.0;d=a.ox;j=d.j4;i=j-1|0;if(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;R(b);B(b);}n=d.j7.data[i].j5;f.j6=m;f.j5=n;Bf(c,f);c=a.q4;f=new Bb;i=BU(0,b.j4);if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l
=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}k=b.j7.data;m=k[0].kt+16.0;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}n=k[0].kF;f.j6=m;f.j5=n;Bf(c,f);if(BW===null){c=new CN;f=new Ck;f.lH=BI(32);c.l2=f;f=new K;Bt(f);f.jZ=G(16);c.lM=f;c.lL=G(32);c.lN=0;c.lO=Cg;BW
=c;}if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}m=b.j7.data[0].kt;c=new K;c.jZ=G(16);D(c,c.jY,A(487));E$(c,c.jY,m);f=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);BX(Bw(f));BX("\n");c=new Bg;c.kq=1;c.j7=Q(C,16);a.qp=c;f=new Bb;i=BU(0,b.j4);if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,
c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}k=b.j7.data;m=k[0].kt+16.0;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}o=k[0].kF;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,
c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}n=o-k[0].ln;f.j6=m;f.j5=n;Bf(c,f);c=a.qp;f=new Bb;if(0<b.j4){m=b.j7.data[0].kt+16.0;n=(DK(c,c.j4-1|0)).j5-100.0;f.j6=m;f.j5=n;Bf(c,f);c=new Bg;c.kq=1;c.j7=Q(C,16);a.p7=c;f=new Bb;m=SM(DK(b,0))+16.0;d=a.qp;M$(f,m,(DK(d,d.j4-1|0)).j5);Bf(c,f);c=a.p7;f=new Bb;m=SM(DK(b,0))+16.0;b=a.p7;M$(f,m,(DK(b,b.j4-1|0)).j5-200.0);Bf(c,f);return;}f=new H;c=new K;c.jZ
=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;R(b);B(b);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AEn=a=>{let b=new TM();ACp(b,a);return b;},
ACj=(a,b,c)=>{let d,e,f;d=new Rj;e=a.wC;f=new Ro;f.x7=20;f.zy=4000;f.yx=1.0;ASZ(d,b,e,f);d.Al=B_(8);a.oy=d;c=Ff(Rl);d.sy.m0=c;b=a.oy;d=a.ox;e=EV;FE(b.oA,d,25.0,e,1);b=a.oy;d=a.q4;e=EV;FE(b.oA,d,25.0,e,1);b=a.oy;d=a.qF;e=EV;FE(b.oA,d,25.0,e,1);b=a.oy;d=a.oY;e=EV;FE(b.oA,d,25.0,e,1);b=a.oy;d=a.qT;e=EV;FE(b.oA,d,25.0,e,1);b=a.oy;d=a.qp;e=EV;FE(b.oA,d,25.0,e,1);b=a.oy;d=a.p7;e=EV;FE(b.oA,d,25.0,e,1);};
let FG=F(Hk);
let AEN=(a,b)=>{DA(Bw(b));};
let ACC=F(Ev);
let Wu=null;
let AUI=()=>{Wu=M(ADb);};
let AL9=F();
let Oc=null,Qv=null,Re=null;
let AGQ=()=>{Oc=AAM([V(1),V(10),V(100),V(10000),V(100000000),E(1874919424, 2328306)]);Qv=new MI;Re=new Ux;};
let AM4=F();
let KT=Ca,XH=null,HG=null,Ik=null;
let AGE=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AXL(b):E(0, 2146959360);c.vA=D4(C5(d,E(0, 2147483648)),Ca)?0:1;e=C5(d,E(4294967295, 1048575));f=Bl(AVN(d,52))&2047;if(D4(e,Ca)&&!f){c.ul=Ca;c.tD=0;return;}if(f)e=ADl(e,E(0, 1048576));else{e=FB(e,1);while(D4(C5(e,E(0, 1048576)),Ca)){e=FB(e,1);f=f+(-1)|0;}}g=Ik;h=ANM(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=Ik.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=IW(e,HG.data[i],j);if(AC0(k,KT)){while(E_(k,KT)<=0){h=h+(-1)|0;k=C6(Ba(k,V(10)),V(9));}g=Ik.data;i
=h+1|0;j=12+(f-g[i]|0)|0;k=IW(e,HG.data[i],j);}e=FB(e,1);d=C6(e,V(1));g=HG.data;i=h+1|0;l=g[i];f=j-1|0;m=IW(d,l,f);l=IW(AGl(e,V(1)),HG.data[i],f);n=V(1);while(true){o=Ba(n,V(10));if(E_(EL(k,o),EL(l,o))<=0)break;n=o;}p=V(1);while(true){q=Ba(p,V(10));if(E_(EL(k,q),EL(m,q))>=0)break;p=q;}i=E_(n,p);e=i>0?Ba(EL(k,n),n):i<0?C6(Ba(EL(k,p),p),p):Ba(EL(C6(k,MY(p,V(2))),p),p);if(E_(e,E(2808348672, 232830643))>=0)while(true){h=h+1|0;e=EL(e,V(10));if(E_(e,E(2808348672, 232830643))<0)break;}else if(E_(e,E(1569325056, 23283064))
<0){h=h+(-1)|0;e=Ba(e,V(10));}c.ul=e;c.tD=h-330|0;},
IW=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=C5(b,V(65535));f=C5(Be(b,16),V(65535));g=C5(Be(b,32),V(65535));h=C5(Be(b,48),V(65535));i=C5(c,V(65535));j=C5(Be(c,16),V(65535));k=C5(Be(c,32),V(65535));l=C5(Be(c,48),V(65535));return C6(C6(C6(FB(Ba(l,h),32+d|0),FB(C6(Ba(l,g),Ba(k,h)),16+d|0)),FB(C6(C6(Ba(l,f),Ba(k,g)),Ba(j,h)),d)),Be(C6(C6(C6(Ba(k,e),Ba(j,f)),Ba(i,g)),FB(C6(C6(C6(Ba(l,e),Ba(k,f)),Ba(j,g)),Ba(i,h)),16)),32-d|0));},
AFz=()=>{KT=EL(V(-1),V(10));XH=AKZ();HG=AAM([E(3251292512, 2194092222),E(1766094183, 3510547556),E(553881887, 2808438045),E(443105509, 2246750436),E(3285949193, 3594800697),E(910772436, 2875840558),E(2446604867, 2300672446),E(2196580869, 3681075914),E(2616258154, 2944860731),E(1234013064, 2355888585),E(1974420903, 3769421736),E(720543263, 3015537389),E(1435428070, 2412429911),E(578697993, 3859887858),E(2180945313, 3087910286),E(885762791, 2470328229),E(3135207384, 3952525166),E(1649172448, 3162020133),E(3037324877, 2529616106),
E(3141732885, 4047385770),E(2513386308, 3237908616),E(1151715587, 2590326893),E(983751480, 4144523029),E(1645994643, 3315618423),E(3034782633, 2652494738),E(3996658754, 4243991581),E(2338333544, 3395193265),E(1870666835, 2716154612),E(4073513845, 2172923689),E(3940641775, 3476677903),E(575533043, 2781342323),E(2178413352, 2225073858),E(2626467905, 3560118173),E(3819161242, 2848094538),E(478348616, 2278475631),E(3342338164, 3645561009),E(3532863990, 2916448807),E(1108304273, 2333159046),E(55299919, 3733054474),
E(903233395, 2986443579),E(1581580175, 2389154863),E(1671534821, 3822647781),E(478234397, 3058118225),E(382587518, 2446494580),E(612140029, 3914391328),E(2207698941, 3131513062),E(48172235, 2505210450),E(77075576, 4008336720),E(61660460, 3206669376),E(3485302205, 2565335500),E(1281516232, 4104536801),E(166219527, 3283629441),E(3568949458, 2626903552),E(2274345296, 4203045684),E(2678469696, 3362436547),E(424788838, 2689949238),E(2057817989, 2151959390),E(3292508783, 3443135024),E(3493000485, 2754508019),E(3653393847, 2203606415),
E(1550462860, 3525770265),E(1240370288, 2820616212),E(3569276608, 2256492969),E(3133862195, 3610388751),E(1648096297, 2888311001),E(459483578, 2310648801),E(3312154103, 3697038081),E(1790729823, 2957630465),E(1432583858, 2366104372),E(3151127633, 3785766995),E(2520902106, 3028613596),E(1157728226, 2422890877),E(2711358621, 3876625403),E(3887073815, 3101300322),E(1391672133, 2481040258),E(1367681954, 3969664413),E(2812132482, 3175731530),E(2249705985, 2540585224),E(1022549199, 4064936359),E(1677032818, 3251949087),
E(3918606632, 2601559269),E(3692790234, 4162494831),E(2095238728, 3329995865),E(1676190982, 2663996692),E(3540899031, 4262394707),E(1114732307, 3409915766),E(32792386, 2727932613),E(1744220827, 2182346090),E(2790753324, 3491753744),E(3091596118, 2793402995),E(2473276894, 2234722396),E(2239256113, 3575555834),E(2650398349, 2860444667),E(402331761, 2288355734),E(2361717736, 3661369174),E(2748367648, 2929095339),E(3057687578, 2343276271),E(3174313206, 3749242034),E(3398444024, 2999393627),E(1000768301, 2399514902),
E(2460222741, 3839223843),E(3686165111, 3071379074),E(3807925548, 2457103259),E(3515700499, 3931365215),E(2812560399, 3145092172),E(532061401, 2516073738),E(4287272078, 4025717980),E(3429817663, 3220574384),E(3602847589, 2576459507),E(2328582306, 4122335212),E(144878926, 3297868170),E(115903141, 2638294536),E(2762425404, 4221271257),E(491953404, 3377017006),E(3829536560, 2701613604),E(3922622707, 2161290883),E(1122235577, 3458065414),E(1756781920, 2766452331),E(546432077, 2213161865),E(874291324, 3541058984),
E(1558426518, 2832847187),E(3823721592, 2266277749),E(3540974170, 3626044399),E(3691772795, 2900835519),E(3812411695, 2320668415),E(1804891416, 3713069465),E(1443913133, 2970455572),E(3732110884, 2376364457),E(2535403578, 3802183132),E(310335944, 3041746506),E(3684242592, 2433397204),E(3317807769, 3893435527),E(936259297, 3114748422),E(3325987815, 2491798737),E(1885606668, 3986877980),E(1508485334, 3189502384),E(2065781726, 2551601907),E(4164244222, 4082563051),E(2472401918, 3266050441),E(1118928075, 2612840353),
E(931291461, 4180544565),E(745033169, 3344435652),E(3173006913, 2675548521),E(3358824142, 4280877634),E(3546052773, 3424702107),E(1118855300, 2739761686),E(36090780, 2191809349),E(1775732167, 3506894958),E(3138572652, 2805515966),E(1651864662, 2244412773),E(1783990001, 3591060437),E(4004172378, 2872848349),E(4062331362, 2298278679),E(3922749802, 3677245887),E(1420212923, 2941796710),E(1136170338, 2353437368),E(958879082, 3765499789),E(1626096725, 3012399831),E(441883920, 2409919865),E(707014273, 3855871784),
E(1424604878, 3084697427),E(3716664280, 2467757941),E(4228675929, 3948412706),E(2523947284, 3158730165),E(2019157827, 2526984132),E(4089645983, 4043174611),E(2412723327, 3234539689),E(2789172121, 2587631751),E(2744688475, 4140210802),E(477763862, 3312168642),E(2959191467, 2649734913),E(3875712888, 4239575861),E(2241576851, 3391660689),E(2652254940, 2713328551),E(1262810493, 2170662841),E(302509870, 3473060546),E(3677981733, 2778448436),E(2083391927, 2222758749),E(756446706, 3556413999),E(1464150824, 2845131199),
E(2030314118, 2276104959),E(671522212, 3641767935),E(537217769, 2913414348),E(2147761134, 2330731478),E(2577424355, 3729170365),E(2061939484, 2983336292),E(4226531965, 2386669033),E(1608490388, 3818670454),E(2145785770, 3054936363),E(3434615534, 2443949090),E(1200417559, 3910318545),E(960334047, 3128254836),E(4204241074, 2502603868),E(1572824964, 4004166190),E(1258259971, 3203332952),E(3583588354, 2562666361),E(4015754449, 4100266178),E(635623181, 3280212943),E(2226485463, 2624170354),E(985396364, 4198672567),
E(3365297469, 3358938053),E(115257597, 2687150443),E(1810192996, 2149720354),E(319328417, 3439552567),E(2832443111, 2751642053),E(3983941407, 2201313642),E(2938332415, 3522101828),E(4068652850, 2817681462),E(1536935362, 2254145170),E(2459096579, 3606632272),E(249290345, 2885305818),E(1917419194, 2308244654),E(490890333, 3693191447),E(2969692644, 2954553157),E(657767197, 2363642526),E(3629407892, 3781828041),E(2044532855, 3025462433),E(3353613202, 2420369946),E(3647794205, 3872591914),E(3777228823, 3098073531),
E(2162789599, 2478458825),E(3460463359, 3965534120),E(2768370687, 3172427296),E(1355703090, 2537941837),E(3028118404, 4060706939),E(3281488183, 3248565551),E(1766197087, 2598852441),E(1107928421, 4158163906),E(27349277, 3326531125),E(21879422, 2661224900),E(35007075, 4257959840),E(28005660, 3406367872),E(2599384905, 2725094297),E(361521006, 2180075438),E(4014407446, 3488120700),E(3211525957, 2790496560),E(2569220766, 2232397248),E(3251759766, 3571835597),E(883420894, 2857468478),E(2424723634, 2285974782),E(443583977, 3657559652),
E(2931847559, 2926047721),E(1486484588, 2340838177),E(3237368801, 3745341083),E(12914663, 2996272867),E(2587312108, 2397018293),E(3280705914, 3835229269),E(3483558190, 3068183415),E(2786846552, 2454546732),E(1022980646, 3927274772),E(3395364895, 3141819817),E(998304997, 2513455854),E(3315274914, 4021529366),E(1793226472, 3217223493),E(3152568096, 2573778794),E(2467128576, 4118046071),E(1114709402, 3294436857),E(3468747899, 2635549485),E(1255029343, 4216879177),E(3581003852, 3373503341),E(2005809622, 2698802673),
E(3322634616, 2159042138),E(162254630, 3454467422),E(2706784082, 2763573937),E(447440347, 2210859150),E(715904555, 3537374640),E(572723644, 2829899712),E(3035159293, 2263919769),E(2279274491, 3622271631),E(964426134, 2897817305),E(771540907, 2318253844),E(2952452370, 3709206150),E(2361961896, 2967364920),E(1889569516, 2373891936),E(1305324308, 3798227098),E(2762246365, 3038581678),E(3927784010, 2430865342),E(2848480580, 3889384548),E(3996771382, 3111507638),E(620436728, 2489206111),E(3569679143, 3982729777),
E(1137756396, 3186183822),E(3487185494, 2548947057),E(2143522954, 4078315292),E(4291798741, 3262652233),E(856458615, 2610121787),E(2229327243, 4176194859),E(2642455254, 3340955887),E(395977285, 2672764710),E(633563656, 4276423536),E(3942824761, 3421138828),E(577279431, 2736911063),E(2179810463, 2189528850),E(3487696741, 3503246160),E(2790157393, 2802596928),E(3950112833, 2242077542),E(2884206696, 3587324068),E(4025352275, 2869859254),E(4079275279, 2295887403),E(1372879692, 3673419846),E(239310294, 2938735877),
E(2768428613, 2350988701),E(2711498862, 3761581922),E(451212171, 3009265538),E(2078956655, 2407412430),E(3326330649, 3851859888),E(84084141, 3081487911),E(3503241150, 2465190328),E(451225085, 3944304526),E(3796953905, 3155443620),E(3037563124, 2524354896),E(3142114080, 4038967834),E(3372684723, 3231174267),E(980160860, 2584939414),E(3286244294, 4135903062),E(911008517, 3308722450),E(728806813, 2646977960),E(1166090902, 4235164736),E(73879262, 3388131789),E(918096869, 2710505431),E(4170451332, 2168404344),E(4095741754, 3469446951),
E(2417599944, 2775557561),E(1075086496, 2220446049),E(3438125312, 3552713678),E(173519872, 2842170943),E(1856802816, 2273736754),E(393904128, 3637978807),E(2892103680, 2910383045),E(2313682944, 2328306436),E(1983905792, 3725290298),E(3305111552, 2980232238),E(67108864, 2384185791),E(2684354560, 3814697265),E(2147483648, 3051757812),E(0, 2441406250),E(0, 3906250000),E(0, 3125000000),E(0, 2500000000),E(0, 4000000000),E(0, 3200000000),E(0, 2560000000),E(0, 4096000000),E(0, 3276800000),E(0, 2621440000),E(0, 4194304000),
E(0, 3355443200),E(0, 2684354560),E(0, 2147483648),E(3435973836, 3435973836),E(1889785610, 2748779069),E(2370821947, 2199023255),E(3793315115, 3518437208),E(457671715, 2814749767),E(2943117749, 2251799813),E(3849994940, 3602879701),E(2221002492, 2882303761),E(917808535, 2305843009),E(3186480574, 3689348814),E(3408177918, 2951479051),E(1867548875, 2361183241),E(1270091283, 3777893186),E(157079567, 3022314549),E(984657113, 2417851639),E(3293438299, 3868562622),E(916763721, 3094850098),E(2451397895, 2475880078),
E(3063243173, 3961408125),E(2450594538, 3169126500),E(1960475630, 2535301200),E(3136761009, 4056481920),E(2509408807, 3245185536),E(1148533586, 2596148429),E(3555640657, 4153837486),E(1985519066, 3323069989),E(2447408712, 2658455991),E(2197867021, 4253529586),E(899300158, 3402823669),E(1578433585, 2722258935),E(1262746868, 2177807148),E(1161401530, 3484491437),E(3506101601, 2787593149),E(3663874740, 2230074519),E(3285219207, 3568119231),E(1769181906, 2854495385),E(1415345525, 2283596308),E(1405559381, 3653754093),
E(2842434423, 2923003274),E(3132940998, 2338402619),E(2435725219, 3741444191),E(1089586716, 2993155353),E(2589656291, 2394524282),E(707476229, 3831238852),E(3142961361, 3064991081),E(1655375629, 2451992865),E(2648601007, 3923188584),E(2977874265, 3138550867),E(664312493, 2510840694),E(2780886908, 4017345110),E(2224709526, 3213876088),E(3497754539, 2571100870),E(1301439967, 4113761393),E(2759138892, 3291009114),E(3066304573, 2632807291),E(3188100398, 4212491666),E(1691486859, 3369993333),E(3071176406, 2695994666),
E(1597947665, 2156795733),E(1697722806, 3450873173),E(3076165163, 2760698538),E(4178919049, 2208558830),E(2391303182, 3533694129),E(2772036005, 2826955303),E(3935615722, 2261564242),E(2861011319, 3618502788),E(4006795973, 2894802230),E(3205436779, 2315841784),E(2551718468, 3705346855),E(2041374775, 2964277484),E(2492093279, 2371421987),E(551375410, 3794275180),E(441100328, 3035420144),E(1211873721, 2428336115),E(1938997954, 3885337784),E(2410191822, 3108270227),E(210166539, 2486616182),E(1195259923, 3978585891),
E(97214479, 3182868713),E(1795758501, 2546294970),E(2873213602, 4074071952),E(580583963, 3259257562),E(3041447548, 2607406049),E(2289335700, 4171849679),E(2690462019, 3337479743),E(3870356534, 2669983794),E(3615590076, 4271974071),E(2033478602, 3417579257),E(4203763259, 2734063405),E(3363010607, 2187250724),E(2803836594, 3499601159),E(3102062734, 2799680927),E(763663269, 2239744742),E(2080854690, 3583591587),E(4241664129, 2866873269),E(4252324763, 2293498615),E(2508752324, 3669597785),E(2007001859, 2935678228),
E(3323588406, 2348542582),E(1881767613, 3757668132),E(4082394468, 3006134505),E(3265915574, 2404907604),E(2648484541, 3847852167),E(400800715, 3078281734),E(1179634031, 2462625387),E(2746407909, 3940200619),E(3056119786, 3152160495),E(2444895829, 2521728396),E(2193846408, 4034765434),E(2614070585, 3227812347),E(373269550, 2582249878),E(4033205117, 4131599804),E(4085557553, 3305279843),E(691465664, 2644223875),E(1106345063, 4230758200),E(885076050, 3384606560),E(708060840, 2707685248),E(2284435591, 2166148198),
E(2796103486, 3465837117),E(518895870, 2772669694),E(1274110155, 2218135755),E(2038576249, 3549017208),E(3348847917, 2839213766),E(1820084875, 2271371013),E(2053142340, 3634193621),E(783520413, 2907354897),E(3203796708, 2325883917),E(1690100896, 3721414268),E(3070067635, 2977131414),E(3315047567, 2381705131),E(3586089190, 3810728210),E(2868871352, 3048582568),E(4013084000, 2438866054),E(3843954022, 3902185687),E(1357176299, 3121748550),E(1085741039, 2497398840),E(1737185663, 3995838144),E(2248741989, 3196670515),
E(1798993591, 2557336412),E(3737383206, 4091738259),E(3848900024, 3273390607),E(1361133101, 2618712486),E(459826043, 4189939978),E(2085847752, 3351951982),E(4245658579, 2681561585),E(2498086431, 4290498537),E(280482227, 3432398830),E(224385781, 2745919064),E(1038502084, 2196735251),E(4238583712, 3514776401),E(2531873511, 2811821121),E(1166505349, 2249456897),E(2725402018, 3599131035),E(2180321615, 2879304828),E(3462244210, 2303443862),E(2103616899, 3685510180),E(1682893519, 2948408144),E(2205308275, 2358726515),
E(3528493240, 3773962424),E(3681788051, 3019169939),E(3804423900, 2415335951),E(74124026, 3864537523),E(1777286139, 3091630018),E(3139815829, 2473304014),E(2446724950, 3957286423),E(3675366878, 3165829138),E(363313125, 2532663311),E(3158281377, 4052261297),E(808638183, 3241809038),E(2364897465, 2593447230),E(3783835944, 4149515568),E(450088378, 3319612455),E(360070702, 2655689964),E(2294100042, 4249103942),E(117293115, 3399283154),E(952827951, 2719426523),E(2480249279, 2175541218),E(3109405388, 3480865949),
E(3346517769, 2784692759),E(3536207675, 2227754207),E(2221958443, 3564406732),E(59579836, 2851525386),E(3483637705, 2281220308),E(419859574, 3649952494),E(1194881118, 2919961995),E(955904894, 2335969596),E(4106428209, 3737551353),E(708162189, 2990041083),E(2284516670, 2392032866),E(1937239754, 3827252586),E(690798344, 3061802069),E(1411632134, 2449441655),E(2258611415, 3919106648),E(3524876050, 3135285318),E(242920462, 2508228255),E(388672740, 4013165208),E(2028925110, 3210532166),E(764146629, 2568425733),E(363641147, 4109481173),
E(2008899836, 3287584938),E(3325106787, 2630067950),E(1025203564, 4208108721),E(4256136688, 3366486976),E(2545915891, 2693189581),E(1177739254, 2154551665),E(1884382806, 3447282664),E(2366499704, 2757826131),E(1034206304, 2206260905),E(1654730086, 3530017448),E(3041770987, 2824013958),E(4151403708, 2259211166),E(629291719, 3614737867),E(3080413753, 2891790293),E(4182317920, 2313432234),E(4114728295, 3701491575),E(3291782636, 2961193260),E(2633426109, 2368954608),E(3354488315, 3790327373),E(106610275, 3032261899),
E(944281679, 2425809519),E(3228837605, 3881295230),E(2583070084, 3105036184),E(2925449526, 2484028947),E(1244745405, 3974446316),E(136802865, 3179557053),E(1827429210, 2543645642),E(3782880196, 4069833027),E(1308317238, 3255866422),E(3623634168, 2604693137),E(2361840832, 4167509020),E(1889472666, 3334007216),E(652584673, 2667205773),E(185142018, 4267529237),E(2725093992, 3414023389),E(3039068653, 2731218711),E(1572261463, 2184974969),E(4233605259, 3495959950),E(3386884207, 2796767960),E(2709507366, 2237414368),
E(3476218326, 3579862989),E(3639968120, 2863890391),E(2052981037, 2291112313),E(2425776200, 3665779701),E(1081627501, 2932623761),E(6308541, 2346099009),E(1728080585, 3753758414),E(2241457927, 3003006731),E(934172882, 2402405385),E(1494676612, 3843848616),E(336747830, 3075078893),E(1987385183, 2460063114),E(602835915, 3936100983),E(2200255650, 3148880786),E(901211061, 2519104629),E(3159924616, 4030567406),E(1668946233, 3224453925),E(1335156987, 2579563140),E(2136251179, 4127301024),E(2567994402, 3301840819),
E(2913388981, 2641472655),E(366455074, 4226356249),E(1152157518, 3381084999),E(1780719474, 2704867999),E(2283569038, 2163894399),E(1076730083, 3462231039),E(1720377526, 2769784831),E(517308561, 2215827865),E(827693699, 3545324584),E(1521148418, 2836259667),E(3793899112, 2269007733),E(916277824, 3630412374),E(1592015718, 2904329899),E(2132606034, 2323463919),E(835189277, 3717542271),E(4104125258, 2974033816),E(2424306747, 2379227053),E(3019897337, 3806763285),E(2415917869, 3045410628),E(3650721214, 2436328502),
E(2405180105, 3898125604),E(2783137543, 3118500483),E(3944496953, 2494800386),E(298240911, 3991680619),E(1097586188, 3193344495),E(878068950, 2554675596),E(3981890698, 4087480953),E(608532181, 3269984763),E(2204812663, 2615987810),E(3527700261, 4185580496),E(1963166749, 3348464397),E(4147513777, 2678771517),E(3200048207, 4286034428),E(4278025484, 3428827542),E(1704433468, 2743062034),E(2222540234, 2194449627),E(120090538, 3511119404),E(955065889, 2808895523),E(2482039630, 2247116418),E(3112269949, 3595386269),
E(3348809418, 2876309015),E(2679047534, 2301047212),E(850502218, 3681675540),E(680401775, 2945340432),E(3121301797, 2356272345),E(699115580, 3770035753),E(2277279382, 3016028602),E(103836587, 2412822882),E(1025131999, 3860516611),E(4256079436, 3088413288),E(827883168, 2470730631),E(3901593088, 3953169009)]);Ik=AXN([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function MI(){let a=this;C.call(a);a.ul=Ca;a.tD=0;a.vA=0;}
let AAm=a=>{return;},
AKZ=()=>{let a=new MI();AAm(a);return a;};
let GP=F(BG);
let Lz=null,OW=null,SH=null,LR=null,UP=null;
let ARA=()=>{let b,c,d,e;b=new GP;b.kg=A(488);b.ka=0;Lz=b;c=new GP;c.kg=A(489);c.ka=1;OW=c;d=new GP;d.kg=A(490);d.ka=2;SH=d;e=new GP;e.kg=A(491);e.ka=3;LR=e;UP=T(GP,[b,c,d,e]);};
function Jf(){let a=this;C.call(a);a.mm=null;a.mj=null;a.r$=0;a.qG=0;a.rh=null;a.rL=0;a.w$=null;}
let HX=null;
let VL=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.r$=1;a.rL=0;g=new Bn;CT();a.w$=g;MF();switch(S2.data[b.ka]){case 1:a.mm=Sx(c,d,f);b=new Hx;b.oq=1;b.qb=0;b.tT=1;if(!Da){h=Ft(e);e=h.data.length;f=new JQ;i=0+e|0;Bt(f);f.ko=(-1);f.kx=e;f.j8=e;f.ke=0;f.j8=i;f.rz=0;f.rX=0;f.rf=h;}else{d=e*2|0;if(d<0){b=new Bk;f=new K;f.jZ=G(16);B$(f,f.jY,Cl(A(492)));J(f,f.jY,d,10);g=new I;h=f.jZ;j=h.data;d=f.jY;e=j.length;if(d>=0&&d<=(e-0|0)){g.j0=L(h.data,0,d);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}f=new CY;h=BI(d);f.ko
=(-1);f.kx=d;f.j8=d;f.k7=Cp;f.lx=0;f.k1=h;f.ke=0;f.j8=d;f.mc=1;f.lI=0;f.k7=De();f=J5(f);}b.nU=f;f.j8=f.ke;f.ke=0;f.ko=(-1);f=Bq;g=f.j9.createBuffer();e=f.mp;f.mp=e+1|0;Cc(f.m5,e,Cf(g));b.r7=e;b.rr=!c?35048:35044;a.mj=b;a.qG=0;break a;case 2:break;case 3:a.mm=R9(c,d,f);a.mj=Wf(c,e);a.qG=0;break a;case 4:break b;default:break b;}a.mm=ARi(c,d,f);a.mj=Wf(c,e);a.qG=0;break a;}b=new Pb;S7(b,0,d,f);a.mm=b;b=new Qn;b.oq=1;b.qb=0;b.tT=1;if(!Da){h=Ft(e);d=h.data.length;f=new JQ;k=0+d|0;UX(f,d);f.ke=0;f.j8=k;f.rz=0;f.rX
=0;f.rf=h;}else{c=e*2|0;if(c<0){b=new Bk;f=new K;f.jZ=G(16);Ec(f,f.jY,A(492));J(f,f.jY,c,10);g=new I;h=f.jZ;j=h.data;d=f.jY;e=j.length;if(d>=0&&d<=(e-0|0)){g.j0=L(h.data,0,d);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}f=new CY;h=BI(c);Bt(f);f.ko=(-1);f.kx=c;f.j8=c;f.k7=Cp;f.lx=0;f.k1=h;f.ke=0;f.j8=c;f.mc=1;f.lI=0;f.k7=De();f=J5(f);}b.nU=f;f.j8=f.ke;f.ke=0;f.ko=(-1);f=Bq;g=f.j9.createBuffer();d=f.mp;f.mp=d+1|0;Cc(f.m5,d,Cf(g));b.r7=d;b.rr=35044;a.mj=b;a.qG=1;}b=Dc;f=HX;if(b===null){f=f.ms.data[0];while
(f!==null&&f.mX!==null){f=f.m_;}}else{l=b;if(!l.$id$){g=E0();l.$id$=g;}e=b.$id$;h=f.ms.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.pq==e){g=f.mX;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.m_;}}f=f===null?null:f.mY;if(f===null){f=new Bg;f.kq=1;f.j7=Q(C,16);}Bf(f,a);GG(HX,b,f);},
AV9=(a,b,c,d,e)=>{let f=new Jf();VL(f,a,b,c,d,e);return f;},
SR=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.mm.hS(b,g);g=a.rh;if(g!==null&&g.hT()>0)a.rh.hS(b,h);if(a.mj.hU()>0)a.mj.g_();}if(a.qG){if(a.mj.hU()<=0)Bq.hV(c,d,e);else{g=a.mj.hd(0);i=g.ke;CC(g,d);Bq.hW(c,e,5123,g);CC(g,i);}}else{j=0;if(a.rL)j=a.rh.hT();if(a.mj.hU()<=0){if(a.rL&&j>0)Ez.hX(c,d,e,j);else Bq.hV(c,d,e);}else{if((e+d|0)>a.mj.hY()){b=new S;g=new K;g.jZ=G(16);D(g,g.jY,A(493));J(g,g.jY,e,10);D(g,g.jY,A(494));J(g,g.jY,d,10);D(g,g.jY,A(495));c=a.mj.hY();J(g,g.jY,c,10);D(g,g.jY,
A(55));h=new I;k=g.jZ;l=k.data;d=g.jY;e=l.length;if(d>=0&&d<=(e-0|0)){h.j0=L(k.data,0,d);b.j1=1;b.j2=1;b.j3=h;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}if(a.rL&&j>0)Ez.hZ(c,e,5123,d*2|0,j);else Bq.h0(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.mm.h1(b,g);g=a.rh;if(g!==null&&g.hT()>0)a.rh.h1(b,h);if(a.mj.hU()>0)a.mj.h2();}},
AS2=()=>{let b,c,d,e;b=new I0;c=JW(16);b.pb=0;d=Q(FI,c);e=d.data;b.ms=d;b.td=0.75;b.qg=e.length*0.75|0;HX=b;};
function NB(){let a=this;C.call(a);a.un=null;a.wB=null;a.w7=null;a.tY=null;a.uN=null;a.qC=null;a.rj=null;a.uY=0.0;a.w3=0.0;a.tR=0.0;a.uo=0.0;a.wY=null;a.yI=null;a.yk=null;}
let AM9=a=>{let b,c,d;b=new Bn;CT();a.un=b;b=new Bn;b.kb=0.0;b.kc=0.0;b.kd=(-1.0);a.wB=b;b=new Bn;b.kb=0.0;b.kc=1.0;b.kd=0.0;a.w7=b;a.tY=C8();a.uN=C8();a.qC=C8();a.rj=C8();a.uY=1.0;a.w3=100.0;a.tR=0.0;a.uo=0.0;a.wY=AMI();a.yI=new Bn;b=new LV;Ms();c=new Bn;b.yz=c;d=new Bn;b.zO=d;c.kb=0.0;c.kc=0.0;c.kd=0.0;d.kb=0.0;d.kc=0.0;d.kd=0.0;a.yk=b;},
ALb=(a,b,c,d,e,f)=>{let g,h;g=b.kb-c;h=B3.li.height-b.kc-d;b.kb=2.0*g/e-1.0;b.kc=2.0*h/f-1.0;b.kd=2.0*b.kd-1.0;ABr(b,a.rj);return b;};
function QB(){let a=this;NB.call(a);a.vI=0.0;a.w_=null;}
let Wn=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.tY;d=a.vI;e=a.tR;f=d* -e/2.0;e=d*e/2.0;g=a.uo;Mu(c,f,e,d* -(g/2.0),d*g/2.0,a.uY,a.w3);c=a.uN;h=a.un;i=a.w_;d=h.kb;j=h.kc;f=h.kd;i.kb=d;i.kc=j;i.kd=f;k=a.wB;l=k.kb;e=k.kc;g=k.kd;d=d+l;j=j+e;f=f+g;i.kb=d;i.kc=j;i.kd=f;i=a.w7;k=VF;k.kb=d;k.kc=j;k.kd=f;l=h.kb;e=h.kc;g=h.kd;l=d-l;e=j-e;g=f-g;k.kb=l;k.kc=e;k.kd=g;ADu(c,k,i);i=PT;l= -h.kb;e= -h.kc;g= -h.kd;La(i);m=i.lj.data;m[12]=l;m[13]=e;m[14]=g;SV(c,i);C$(a.qC,a.tY.lj);Oy(a.qC.lj,a.uN.lj);if(b){C$(a.rj,a.qC.lj);ADX(a.rj.lj);ALi(a.wY,
a.rj);}};
function Hw(){C.call(this);this.m1=0;}
let I8=null,Ji=null,QM=null;
let DB=a=>{return a.m1;},
AUt=()=>{let b;b=new Hw;b.m1=1;I8=b;b=new Hw;b.m1=0;Ji=b;QM=M(Ci);};
function Ua(){B2.call(this);this.sp=null;}
let AN1=(a,b,c,d,e,f)=>{let g;b=a.sp;if(b.oW.m1){b.oW=Ji;if(BW===null){b=new CN;g=new Ck;g.lH=BI(32);b.l2=g;g=new K;Bt(g);g.jZ=G(16);b.lM=g;b.lL=G(32);b.lN=0;b.lO=Cg;BW=b;}g=a.sp.oW;b=A(2);if(g!==null)b=!g.m1?A(82):A(83);BX(Bw(b));}else{b.oW=I8;if(BW===null){b=new CN;g=new Ck;g.lH=BI(32);b.l2=g;g=new K;Bt(g);g.jZ=G(16);b.lM=g;b.lL=G(32);b.lN=0;b.lO=Cg;BW=b;}g=a.sp.oW;b=A(2);if(g!==null)b=!g.m1?A(82):A(83);BX(Bw(b));}};
let Ni=F(0);
let Vk=F(0);
function Ph(){let a=this;C.call(a);a.x2=null;a.xr=null;a.zj=0;a.z3=0;}
let AM5=a=>{let b,c;if(!a.zj){b=a.x2;b.v0=null;if(B1!==b)B1=b;B1.oJ=Em();c=a.xr;b=null;c.pO.e(b);}};
function Po(){let a=this;C.call(a);a.l4=null;a.mS=0;a.yq=Ca;a.zg=0;a.zL=0;}
let AJA=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.yq=V(-1);a.zg=(-1);a.zL=(-1);c=b.length;if(!c){d=new Bk;d.j1=1;d.j2=1;d.j3=A(496);B(d);}e=Q(DV,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.l4=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.n0=c;switch(d.mE){case 5120:case 5121:break;case 5122:case 5123:g=2*d.mt|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.mt|0;break a;default:break b;}g=d.mt;break a;}g=0;}c=c+g|0;h=h+1|0;}a.mS=c;},
Rf=a=>{let b=new Po();AJA(b,a);return b;};
function L7(){let a=this;C.call(a);a.nn=null;a.nP=0;a.rV=null;a.wm=null;a.w8=null;a.wz=null;a.nK=null;a.wx=null;a.xj=null;a.v4=null;a.mK=0;a.tU=0;a.vs=0;a.Ab=null;a.lY=null;a.l0=null;a.k2=0;a.z0=0;a.nf=null;a.qY=null;}
let HM=0,Nv=null,L3=null,Nk=null,AOK=null;
let Id=()=>{Id=BQ(L7);ANs();};
let ASY=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;Id();a.nn=A(68);a.rV=Gj(51,0.800000011920929);a.wm=Gj(51,0.800000011920929);a.w8=Gj(51,0.800000011920929);a.nK=Gj(51,0.800000011920929);a.wx=Gj(51,0.800000011920929);a.xj=Gj(51,0.800000011920929);a.z0=0;if(!Da){d=X(1);e=d.data.length;f=new Gf;g=0+e|0;f.ko=(-1);f.kx=e;f.j8=e;f.ke=0;f.j8=g;f.px=0;f.qO=0;f.pd=d;}else{h=new CY;d=BI(4);h.ko=(-1);h.kx=4;h.j8=4;h.k7=Cp;h.lx=0;h.k1=d;h.ke=0;h.j8=4;h.mc=1;h.lI=0;h.k7=De();f=GV(h);}a.nf=f;if(!Da){d=X(1);e=d.data.length;f=new Gf;g
=0+e|0;f.ko=(-1);f.kx=e;f.j8=e;f.ke=0;f.j8=g;f.px=0;f.qO=0;f.pd=d;}else{h=new CY;d=BI(4);h.ko=(-1);h.kx=4;h.j8=4;h.k7=Cp;h.lx=0;h.k1=d;h.ke=0;h.j8=4;h.mc=1;h.lI=0;h.k7=De();f=GV(h);}a.qY=f;if(b===null){b=new Bk;b.j1=1;b.j2=1;b.j3=A(497);B(b);}if(c===null){b=new Bk;b.j1=1;b.j2=1;b.j3=A(498);B(b);}f=Nv;if(f!==null&&f.j0.length>0){f=new K;f.jZ=G(16);h=Nv;D(f,f.jY,h);D(f,f.jY,b);b=new I;d=f.jZ;i=d.data;e=f.jY;j=i.length;if(e>=0&&e<=(j-0|0))b.j0=L(d.data,0,e);else{b=new H;b.j1=1;b.j2=1;B(b);}}f=L3;if(f!==null&&f.j0.length
>0){f=new K;f.jZ=G(16);h=L3;D(f,f.jY,h);D(f,f.jY,c);c=new I;d=f.jZ;i=d.data;e=f.jY;j=i.length;if(e>=0&&e<=(j-0|0))c.j0=L(d.data,0,e);else{b=new H;b.j1=1;b.j2=1;B(b);}}a.lY=b;a.l0=c;if(!Da){i=B_(16);k=i.data.length;f=new H5;l=0+k|0;f.ko=(-1);f.kx=k;f.j8=k;f.ke=0;f.j8=l;f.qN=0;f.rm=0;f.qf=i;}else{f=new CY;d=BI(64);f.ko=(-1);f.kx=64;f.j8=64;f.k7=Cp;f.lx=0;f.k1=d;f.ke=0;f.j8=64;f.mc=1;f.lI=0;f.k7=De();f=E9(f);}a.Ab=f;CH(a,b,c);if(a.nP){ADY(a);AJr(a);b=Dc;c=Nk;l=BE(c,b);c=l<0?null:c.kL.data[l];if(c===null){c=new Bg;c.kq
=1;c.j7=Q(C,16);}Bf(c,a);Ce(Nk,b,c);}},
QU=(a,b)=>{let c=new L7();ASY(c,a,b);return c;},
CH=(a,b,c)=>{let d;a.tU=Wr(a,35633,b);d=Wr(a,35632,c);a.vs=d;if(a.tU!=(-1)&&d!=(-1)){d=Bq.ia();if(!d)d=(-1);d=APP(a,d);a.mK=d;if(d!=(-1)){a.nP=1;return;}a.nP=0;return;}a.nP=0;},
Wr=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bq;if(!Da){e=X(1);f=e.data.length;g=new Gf;h=0+f|0;g.ko=(-1);g.kx=f;g.j8=f;g.ke=0;g.j8=h;g.px=0;g.qO=0;g.pd=e;}else{g=new CY;e=BI(4);g.ko=(-1);g.kx=4;g.j8=4;g.k7=Cp;g.lx=0;g.k1=e;g.ke=0;g.j8=4;g.mc=1;g.lI=0;g.k7=De();g=GV(g);}i=d.ic(b);if(!i)return (-1);d.id(i,c);d.ie(i);d.eF(i,35713,g);if(E7(g,0))return i;j=d.ig(i);c=new K;c.jZ=G(16);d=a.nn;D(c,c.jY,d);d=b!=35633?A(499):A(500);D(c,c.jY,d);d=new I;e=c.jZ;k=e.data;i=c.jY;l=k.length;if(i>=0&&i<=(l-0|0)){d.j0=L(e.data,0,i);a.nn
=d;c=new K;c.jZ=G(16);D(c,c.jY,d);D(c,c.jY,j);d=new I;e=c.jZ;k=e.data;i=c.jY;l=k.length;if(i>=0&&i<=(l-0|0)){d.j0=L(e.data,0,i);a.nn=d;return (-1);}c=new H;c.j1=1;c.j2=1;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
APP=(a,b)=>{let c,d,e,f;c=Bq;if(b==(-1))return (-1);c.ih(b,a.tU);c.ih(b,a.vs);c.ii(b);d=new CY;e=BI(4);d.ko=(-1);d.kx=4;d.j8=4;d.k7=Cp;d.lx=0;d.k1=e;d.ke=0;d.j8=4;d.mc=1;d.lI=0;d.k7=De();f=GV(d);c.eE(b,35714,f);if(E7(f,0))return b;a.nn=Bq.g9(b);return (-1);},
Jc=(a,b,c)=>{let d,e,f,g,h,i;d=a.rV;e=(-2);f=E2(d,b);if(f>=0)e=d.m2.data[f];if(e==(-2)){e=Bq.ij(a.mK,b);if(e==(-1)&&c){if(a.nP){d=new Bk;g=new K;g.jZ=G(16);D(g,g.jY,A(501));D(g,g.jY,b);D(g,g.jY,A(502));b=new I;h=g.jZ;i=h.data;e=g.jY;f=i.length;if(e>=0&&e<=(f-0|0)){b.j0=L(h.data,0,e);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}b=new BN;d=new K;d.jZ=G(16);D(d,d.jY,A(503));if(!a.nP)g=a.nn;else{g=Bq.g9(a.mK);a.nn=g;}D(d,d.jY,g);g=new I;h=d.jZ;i=h.data;e=d.jY;f=i.length;if(e>=0&&e<=(f-0|0)){g.j0=L(h.data,
0,e);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}EK(a.rV,b,e);}return e;},
AJr=a=>{let b,c,d,e,f;b=a.nf;b.ke=0;b.j8=b.kx;b.ko=(-1);Bq.eE(a.mK,35718,b);c=E7(a.nf,0);a.wz=Q(I,c);d=0;while(d<c){b=a.nf;b.ke=0;b.j8=b.kx;b.ko=(-1);Vq(b,0,1);b=a.qY;b.ke=0;b.j8=b.kx;b.ko=(-1);e=Bq.eD(a.mK,d,a.nf,b);f=Bq.ij(a.mK,e);EK(a.rV,e,f);EK(a.wm,e,E7(a.qY,0));EK(a.w8,e,E7(a.nf,0));a.wz.data[d]=e;d=d+1|0;}},
ADY=a=>{let b,c,d,e,f;b=a.nf;b.ke=0;b.j8=b.kx;b.ko=(-1);Bq.eE(a.mK,35721,b);c=E7(a.nf,0);a.v4=Q(I,c);d=0;while(d<c){b=a.nf;b.ke=0;b.j8=b.kx;b.ko=(-1);Vq(b,0,1);b=a.qY;b.ke=0;b.j8=b.kx;b.ko=(-1);e=Bq.eC(a.mK,d,a.nf,b);f=Bq.im(a.mK,e);EK(a.nK,e,f);EK(a.wx,e,E7(a.qY,0));EK(a.xj,e,E7(a.nf,0));a.v4.data[d]=e;d=d+1|0;}},
ANs=()=>{let b,c,d,e;HM=1;Nv=A(68);L3=A(68);Nk=EP(51,0.800000011920929);if(!Da){b=X(1);c=b.data.length;d=new Gf;e=0+c|0;d.ko=(-1);d.kx=c;d.j8=c;d.ke=0;d.j8=e;d.px=0;d.qO=0;d.pd=b;}else{d=new CY;b=BI(4);d.ko=(-1);d.kx=4;d.j8=4;d.k7=Cp;d.lx=0;d.k1=b;d.ke=0;d.j8=4;d.mc=1;d.lI=0;d.k7=De();d=GV(d);}AOK=d;};
function M_(){let a=this;Bg.call(a);a.nt=null;a.te=null;a.mx=0;}
let Fq=a=>{let b,c,d,e;b=a.mx-1|0;if(0>b)b=0;a.mx=b;c=a.nt;if(c===null)return;a:{if(c!==a.j7&&!b){d=c.data;a.te=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.nt=null;},
CO=a=>{let b,c,d,e;b=a.nt;if(b!==null){c=a.j7;if(b===c){a:{b=a.te;if(b!==null){d=b.data.length;e=a.j4;if(d>=e){Di(c,0,b,0,e);a.j7=a.te;a.te=null;break a;}}II(a,c.data.length);}return;}}};
function K3(){let a=this;Bg.call(a);a.qo=0;a.qL=null;a.qw=0;}
let AMU=a=>{a.qo=a.qo+1|0;},
AOY=a=>{let b,c,d,e,f,g,h,i,j;b=a.qo;if(!b){c=new BN;c.j1=1;c.j2=1;c.j3=A(504);B(c);}d=b-1|0;a.qo=d;if(!d){a:{b=a.qw;if(b>0){e=a.j4;if(b==e){a.qL.lR=0;if(d>0)a.qw=e;else{f=a.j7;d=0;c=null;if(d>e){c=new Bk;c.j1=1;c.j2=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.j4=0;}break a;}}d=0;b=a.qL.lR;b:{while(true){if(d>=b)break b;c=a.qL;f=c.my.data;e=c.lR-1|0;c.lR=e;h=f[e];if(h>=a.qw){if(a.qo<=0)Dv(a,h);else{VA(a,h);if(h>=a.j4)break;}}d=d+1|0;}i=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,h,10);D(c,c.jY,A(19));d
=a.j4;J(c,c.jY,d,10);j=new I;f=c.jZ;g=f.data;b=c.jY;e=g.length;if(b>=0&&b<=(e-0|0)){j.j0=L(f.data,0,b);i.j1=1;i.j2=1;i.j3=j;B(i);}c=new H;c.j1=1;c.j2=1;B(c);}d=a.qw-1|0;while(true){if(d<0)break a;if(a.qo<=0)Dv(a,d);else{VA(a,d);if(d>=a.j4){i=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,d,10);D(c,c.jY,A(19));d=a.j4;J(c,c.jY,d,10);j=new I;f=c.jZ;g=f.data;b=c.jY;e=g.length;if(b>=0&&b<=(e-0|0)){j.j0=L(f.data,0,b);i.j1=1;i.j2=1;i.j3=j;B(i);}c=new H;c.j1=1;c.j2=1;B(c);}}d=d+(-1)|0;}}a.qw=0;}},
VA=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.qw)return;c=0;d=a.qL;e=d.lR;while(true){f=BU(c,e);if(f>=0){LX(d,b);return;}if(f>=0){g=new H;h=new K;h.jZ=G(16);D(h,h.jY,A(18));J(h,h.jY,c,10);D(h,h.jY,A(19));b=d.lR;J(h,h.jY,b,10);d=new I;i=h.jZ;j=i.data;c=h.jY;e=j.length;if(c>=0&&c<=(e-0|0)){d.j0=L(i.data,0,c);g.j1=1;g.j2=1;g.j3=d;B(g);}d=new H;d.j1=1;d.j2=1;B(d);}f=BU(b,d.my.data[c]);if(!f)break;if(f<0){ASK(d,c,b);return;}c=c+1|0;}};
function Ux(){let a=this;C.call(a);a.t0=0;a.tM=0;a.vJ=0;}
let Wq=F();
let S2=null;
let MF=()=>{MF=BQ(Wq);AOc();};
let AOc=()=>{let b,c;b=X((UP.p()).data.length);c=b.data;S2=b;c[OW.ka]=1;c[SH.ka]=2;c[LR.ka]=3;c[Lz.ka]=4;};
let Jp=F(0);
function IY(){let a=this;C.call(a);a.nO=null;a.pH=null;a.wJ=0;a.z8=0;a.t7=0;a.rD=0;a.r2=0;}
let S7=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.rD=0;a.r2=0;a.z8=b;a.nO=d;c=Dl(d.mS/4|0,c);if(!Da){e=B_(c);f=e.data.length;d=new H5;g=0+f|0;d.ko=(-1);d.kx=f;d.j8=f;d.ke=0;d.j8=g;d.qN=0;d.rm=0;d.qf=e;}else{c=c*4|0;if(c<0){d=new Bk;h=new K;h.jZ=G(16);BY(h,h.jY,A(492));J(h,h.jY,c,10);i=new I;e=h.jZ;j=e.data;c=h.jY;k=j.length;if(c>=0&&c<=(k-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}h=new CY;e=BI(c);h.ko=(-1);h.kx=c;h.j8=c;h.k7=Cp;h.lx=0;h.k1=e;h.ke=0;h.j8=c;h.mc=1;h.lI=0;h.k7=De();d
=E9(h);}a.pH=d;d.j8=d.ke;d.ke=0;d.ko=(-1);d=Bq;h=d.j9.createBuffer();k=d.mp;d.mp=k+1|0;Cc(d.m5,k,Cf(h));a.wJ=k;a.t7=!b?35048:35044;},
Sx=(a,b,c)=>{let d=new IY();S7(d,a,b,c);return d;},
AEJ=a=>{return a.nO;},
ANG=a=>{return a.pH.j8/(a.nO.mS/4|0)|0;},
AK_=(a,b,c,d)=>{let e,f,g;a.rD=1;e=a.pH;f=null;g=e instanceof E1;if(g)f=E9(e);else if(e instanceof Ek)f=e;if(f===null){f=new S;f.j1=1;f.j2=1;f.j3=A(505);B(f);}f.ke=0;f.j8=f.kx;f.ko=(-1);CC(e,0);Jl(f,b,c,d);CC(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CC(a.pH,0);CQ(a.pH,d);if(a.r2){e=Bq;f=a.pH;e.eA(34962,f.j8,f,a.t7);a.rD=0;}},
ADw=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bq;d.is(34962,a.wJ);if(a.rD){e=a.pH;d.eA(34962,e.j8,e,a.t7);a.rD=0;}a:{f=a.nO.l4.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nO.l4.data[g];j=h[g];if(j>=0){e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}e.it(j);k=i.mt;l=i.mE;m=i.mN;n=a.nO.mS;o=i.n0;e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}e.iu(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nO.l4.data[g];d=i.mJ;e=b.nK;p=(-1);j=E2(e,d);if(j>=0)p=e.m2.data[j];if(p>=0){e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}e.it(p);j
=i.mt;k=i.mE;l=i.mN;m=a.nO.mS;n=i.n0;e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}e.iu(p,j,k,l,m,n);}g=g+1|0;}}a.r2=1;},
Zd=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bq;e=a.nO.l4.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}h.iv(g);}f=f+1|0;}}i=0;while(i<e){j=a.nO.l4.data[i].mJ;k=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}l=Bq;h=b.nK;g=(-2);f=E2(h,j);if(f>=0)g=h.m2.data[f];if(g==(-2)){g=l.im(b.mK,j);EK(b.nK,j,g);}if(g!=(-1))k.iv(g);i=i+1|0;}}d.is(34962,0);a.r2=0;};
let Ks=F(0);
function Hx(){let a=this;C.call(a);a.nU=null;a.r7=0;a.tT=0;a.oq=0;a.qb=0;a.rr=0;}
let AFS=a=>{return a.nU.j8;},
XY=a=>{return a.nU.kx;},
AKH=(a,b,c,d)=>{let e;a.oq=1;e=a.nU;e.ke=0;e.j8=e.kx;e.ko=(-1);Vb(e,b,c,d);e=a.nU;c=e.ke;e.j8=c;e.ke=0;e.ko=(-1);if(a.qb){Bq.eA(34963,c,e,a.rr);a.oq=0;}},
YX=(a,b)=>{a.oq=a.oq|b;return a.nU;},
ARu=a=>{let b,c,d;b=a.r7;if(!b){c=new S;c.j1=1;c.j2=1;c.j3=A(506);B(c);}Bq.is(34963,b);if(a.oq){c=Bq;d=a.nU;c.eA(34963,d.j8,d,a.rr);a.oq=0;}a.qb=1;},
ANZ=a=>{Bq.is(34963,0);a.qb=0;};
function PX(){let a=this;C.call(a);a.nG=null;a.nZ=null;a.oo=null;a.vw=0;a.vL=0;a.yi=0;a.tA=0;a.rt=0;a.sb=0;}
let AJP=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.rt=0;a.sb=0;a.yi=b;a.nG=d;c=Dl(d.mS,c);if(!Da){e=BI(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new CY;g=0+f|0;d.ko=(-1);d.kx=f;d.j8=f;d.k7=Cp;d.lx=0;d.k1=e;d.ke=0;d.j8=g;d.mc=0;d.lI=0;break a;}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);}if(c<0){d=new Bk;h=new K;h.jZ=G(16);BY(h,h.jY,A(492));J(h,h.jY,c,10);i=new I;e=h.jZ;j=e.data;c=h.jY;f=j.length;if(c>=0&&c<=(f-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}d=new CY;e=BI(c);d.ko=(-1);d.kx=c;d.j8=
c;d.k7=Cp;d.lx=0;d.k1=e;d.ke=0;d.j8=c;d.mc=1;d.lI=0;d.k7=De();}a.oo=d;a.vL=1;a.tA=!b?35048:35044;a.nZ=E9(d);d=Bq;h=d.j9.createBuffer();g=d.mp;d.mp=g+1|0;Cc(d.m5,g,Cf(h));Bq.is(34962,g);Bq.eA(34962,a.oo.kx,null,a.tA);Bq.is(34962,0);a.vw=g;d=a.nZ;d.j8=d.ke;d.ke=0;d.ko=(-1);d=a.oo;d.j8=d.ke;d.ke=0;d.ko=(-1);},
ARi=(a,b,c)=>{let d=new PX();AJP(d,a,b,c);return d;},
AAO=a=>{return a.nG;},
ABZ=a=>{return (a.nZ.j8*4|0)/a.nG.mS|0;},
ZK=(a,b,c,d)=>{let e,f,g;a.rt=1;if(!a.vL){e=a.nZ;e.ke=0;e.j8=e.kx;e.ko=(-1);Jl(e,b,c,d);e=a.nZ;e.j8=e.ke;e.ke=0;e.ko=(-1);CC(a.oo,0);CQ(a.oo,a.nZ.j8<<2);}else{e=a.oo;f=null;g=e instanceof E1;if(g)f=E9(e);else if(e instanceof Ek)f=e;if(f===null){f=new S;f.j1=1;f.j2=1;f.j3=A(505);B(f);}f.ke=0;f.j8=f.kx;f.ko=(-1);CC(e,0);Jl(f,b,c,d);CC(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CC(a.nZ,0);CQ(a.nZ,d);}if(a.sb){e=Bq;f=a.oo;e.eB(34962,0,f.j8,f);a.rt=0;}},
AKr=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bq;d.is(34962,a.vw);if(a.rt){CQ(a.oo,a.nZ.j8*4|0);e=a.oo;d.eA(34962,e.j8,e,a.tA);a.rt=0;}a:{f=a.nG.l4.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nG.l4.data[g];j=h[g];if(j>=0){e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}e.it(j);k=i.mt;l=i.mE;m=i.mN;n=a.nG.mS;o=i.n0;e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}e.iu(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nG.l4.data[g];p=i.mJ;e=b.nK;q=(-1);j=E2(e,p);if(j>=0)q=e.m2.data[j];if(q>=0){e=Bq;if(b.k2){CH(b,
b.lY,b.l0);b.k2=0;}e.it(q);j=i.mt;k=i.mE;l=i.mN;m=a.nG.mS;n=i.n0;e=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}e.iu(q,j,k,l,m,n);}g=g+1|0;}}a.sb=1;},
ADx=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bq;e=a.nG.l4.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}h.iv(g);}f=f+1|0;}}i=0;while(i<e){j=a.nG.l4.data[i].mJ;k=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}l=Bq;h=b.nK;g=(-2);f=E2(h,j);if(f>=0)g=h.m2.data[f];if(g==(-2)){g=l.im(b.mK,j);EK(b.nK,j,g);}if(g!=(-1))k.iv(g);i=i+1|0;}}d.is(34962,0);a.sb=0;};
function Sb(){let a=this;C.call(a);a.pE=null;a.ot=null;a.wO=0;a.y$=0;a.pL=0;a.se=0;a.xa=0;}
let ACX=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.pL=1;a.se=0;c=c*2|0;if(!Da){d=BI(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new CY;g=0+e|0;f.ko=(-1);f.kx=e;f.j8=e;f.k7=Cp;f.lx=0;f.k1=d;f.ke=0;f.j8=g;f.mc=0;f.lI=0;break a;}f=new H;f.j1=1;f.j2=1;Bi(f);B(f);}if(c<0){f=new Bk;h=new K;h.jZ=G(16);BY(h,h.jY,A(492));J(h,h.jY,c,10);i=new I;d=h.jZ;j=d.data;c=h.jY;k=j.length;if(c>=0&&c<=(k-0|0)){i.j0=L(d.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;f.j1=1;f.j2=1;B(f);}f=new CY;d=BI(c);f.ko=(-1);f.kx=c;f.j8=c;f.k7=Cp;f.lx=0;f.k1
=d;f.ke=0;f.j8=c;f.mc=1;f.lI=0;f.k7=De();}a.ot=f;a.y$=1;a.xa=!b?35048:35044;f=J5(f);a.pE=f;f.j8=f.ke;f.ke=0;f.ko=(-1);f=a.ot;f.j8=f.ke;f.ke=0;f.ko=(-1);f=Bq;h=f.j9.createBuffer();e=f.mp;f.mp=e+1|0;Cc(f.m5,e,Cf(h));Bq.is(34963,e);Bq.eA(34963,a.ot.kx,null,a.xa);Bq.is(34963,0);a.wO=e;},
Wf=(a,b)=>{let c=new Sb();ACX(c,a,b);return c;},
AM8=a=>{return a.pE.j8;},
W6=a=>{return a.pE.kx;},
AGz=(a,b,c,d)=>{let e,f;a.pL=1;e=a.pE;e.ke=0;e.j8=e.kx;e.ko=(-1);Vb(e,b,c,d);e=a.pE;e.j8=e.ke;e.ke=0;e.ko=(-1);CC(a.ot,0);CQ(a.ot,d<<1);if(a.se){e=Bq;f=a.ot;e.eB(34963,0,f.j8,f);a.pL=0;}},
AP6=(a,b)=>{a.pL=a.pL|b;return a.pE;},
AHs=a=>{let b,c,d;b=a.wO;if(!b){c=new S;c.j1=1;c.j2=1;c.j3=A(507);B(c);}Bq.is(34963,b);if(a.pL){CQ(a.ot,a.pE.j8*2|0);c=Bq;d=a.ot;c.eB(34963,0,d.j8,d);a.pL=0;}a.se=1;},
AAr=a=>{Bq.is(34963,0);a.se=0;};
function Ln(){let a=this;C.call(a);a.os=null;a.o2=null;a.uF=0;a.Aa=0;a.uq=0;a.rw=0;a.tc=0;a.tP=0;a.n7=null;}
let Mx=null;
let Lt=()=>{Lt=BQ(Ln);ATk();};
let AB7=(a,b,c,d)=>{let e,f,g,h,i,j;Lt();a.rw=0;a.tc=0;a.tP=(-1);e=new FL;e.pe=1;e.my=X(16);a.n7=e;a.Aa=b;a.os=d;c=Dl(d.mS/4|0,c);if(!Da){f=B_(c);g=f.data.length;d=new H5;h=0+g|0;d.ko=(-1);d.kx=g;d.j8=g;d.ke=0;d.j8=h;d.qN=0;d.rm=0;d.qf=f;}else{c=c*4|0;if(c<0){d=new Bk;e=new K;e.jZ=G(16);BY(e,e.jY,A(492));J(e,e.jY,c,10);i=new I;f=e.jZ;j=f.data;c=e.jY;g=j.length;if(c>=0&&c<=(g-0|0)){i.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}e=new CY;f=BI(c);e.ko=(-1);e.kx=c;e.j8=c;e.k7=Cp;e.lx=
0;e.k1=f;e.ke=0;e.j8=c;e.mc=1;e.lI=0;e.k7=De();d=E9(e);}a.o2=d;d.j8=d.ke;d.ke=0;d.ko=(-1);d=Bq;e=d.j9.createBuffer();g=d.mp;d.mp=g+1|0;Cc(d.m5,g,Cf(e));a.uF=g;a.uq=!b?35048:35044;d=Mx;d.ke=0;d.j8=d.kx;d.ko=(-1);Ez.ix(1,d);d=Mx;c=d.ke;if(c<d.j8){d.ke=c+1|0;a.tP=d.iy(c);return;}d=new Nm;d.j1=1;d.j2=1;B(d);},
R9=(a,b,c)=>{let d=new Ln();AB7(d,a,b,c);return d;},
Zr=a=>{return a.os;},
AKx=a=>{return (a.o2.j8*4|0)/a.os.mS|0;},
ZF=(a,b,c,d)=>{let e,f,g;a.rw=1;e=a.o2;f=null;g=e instanceof E1;if(g)f=E9(e);else if(e instanceof Ek)f=e;if(f===null){f=new S;f.j1=1;f.j2=1;f.j3=A(505);B(f);}f.ke=0;f.j8=f.kx;f.ko=(-1);CC(e,0);Jl(f,b,c,d);CC(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CC(a.o2,0);CQ(a.o2,d);if(a.tc){e=Bq;f=a.o2;e.eA(34962,f.j8,f,a.uq);a.rw=0;}},
APJ=(a,b,c)=>{let d;d=Ez;d.iz(a.tP);AOR(a,b,c);if(a.rw){d.is(34962,a.uF);b=a.o2;CQ(b,b.j8);b=a.o2;d.eA(34962,b.j8,b,a.uq);a.rw=0;}a.tc=1;},
AOR=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.n7;e=d.lR;f=!e?0:1;a:{g=a.os.l4.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.os.l4.data[e].mJ;h=b.nK;i=(-1);f=E2(h,d);if(f>=0)i=h.m2.data[f];d=a.n7;if(e>=d.lR)break;f=i!=d.my.data[e]?0:1;e=e+1|0;}h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=d.lR;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;R(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.my.data[i]?0:1;i=i+1|0;}h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));e=d.lR;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;R(b);B(b);}}}c:{if(!f){d:{B9.is(34962,a.uF);if(a.n7.lR){k=a.os.l4.data.length;e=0;while(true){if(e>=k)break d;d=a.n7;if(e>=d.lR)break;i=d.my.data[e];if(i>=0){d=Bq;if(b.k2){CH(b,
b.lY,b.l0);b.k2=0;}d.iv(i);}e=e+1|0;}h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=d.lR;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;GC(b);B(b);}}a.n7.lR=0;e=0;while(true){if(e>=g)break c;h=a.os.l4.data[e];if(c!==null){j=c.data;LX(a.n7,j[e]);}else{l=a.n7;m=h.mJ;d=b.nK;i=(-1);f=E2(d,m);if(f>=0)i=d.m2.data[f];LX(l,i);}d=a.n7;if(e>=d.lR){h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,
b.jY,A(19));e=d.lR;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;R(b);B(b);}n=d.my.data[e];if(n>=0){d=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}d.it(n);f=h.mt;i=h.mE;k=h.mN;o=a.os.mS;p=h.n0;d=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}d.iu(n,f,i,k,o,p);}e=e+1|0;}}}},
ACI=(a,b,c)=>{Ez.iz(0);a.tc=0;},
ATk=()=>{let b,c,d,e;if(!Da){b=X(1);c=b.data.length;d=new Gf;e=0+c|0;d.ko=(-1);d.kx=c;d.j8=c;d.ke=0;d.j8=e;d.px=0;d.qO=0;d.pd=b;}else{d=new CY;b=BI(4);d.ko=(-1);d.kx=4;d.j8=4;d.k7=Cp;d.lx=0;d.k1=b;d.ke=0;d.j8=4;d.mc=1;d.lI=0;d.k7=De();d=GV(d);}Mx=d;};
let Pb=F(IY);
let Qn=F(Hx);
function Uc(){let a=this;C.call(a);a.ty=0;a.o9=null;a.m2=null;a.v3=0.0;a.tL=0;a.s4=0;a.sX=0;}
let AFC=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.v3=c;d=JD(b,c);a.tL=d*c|0;b=d-1|0;a.sX=b;a.s4=Fa(V(b));a.o9=Q(C,d);a.m2=X(d);return;}e=new Bk;f=new K;f.jZ=G(16);D(f,f.jY,A(69));E$(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
Gj=(a,b)=>{let c=new Uc();AFC(c,a,b);return c;},
E2=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bk;c.j1=1;c.j2=1;c.j3=A(70);B(c);}a:{d=a.o9;if(!b.lS){e=0;while(true){if(e>=b.j0.length)break a;b.lS=(31*b.lS|0)+b.j0.charCodeAt(e)|0;e=e+1|0;}}}f=Bl(Be(Ba(V(b.lS),E(2135587861, 2654435769)),a.s4));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof I))g=0;else{h=b;g=c.j0!==h.j0?0:1;}if(g)break;f=(f+1|0)&a.sX;}return f;},
EK=(a,b,c)=>{let d,e;d=E2(a,b);if(d>=0){a.m2.data[d]=c;return;}d= -(d+1|0)|0;e=a.o9.data;e[d]=b;a.m2.data[d]=c;c=a.ty+1|0;a.ty=c;if(c>=a.tL)APT(a,e.length<<1);},
APT=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.o9.data.length;a.tL=b*a.v3|0;d=b-1|0;a.sX=d;a.s4=Fa(V(d));e=a.o9;f=a.m2;a.o9=Q(C,b);a.m2=X(b);if(a.ty>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.o9;if(!h.lS){k=0;while(true){if(k>=h.j0.length)break b;h.lS=(31*h.lS|0)+h.j0.charCodeAt(k)|0;k=k+1|0;}}}b=Bl(Be(Ba(V(h.lS),E(2135587861, 2654435769)),a.s4));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.sX;}l[b]=h;a.m2.data[b]=i;}g=g+1|0;}}}};
let ANm=F();
function EM(){let a=this;C.call(a);a.kx=0;a.ke=0;a.j8=0;a.ko=0;}
let UX=(a,b)=>{a.ko=(-1);a.kx=b;a.j8=b;},
CC=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.j8){a.ke=b;if(b<a.ko)a.ko=0;return a;}c=new Bk;d=a.j8;e=new K;e.jZ=G(16);D(e,e.jY,A(508));J(e,e.jY,b,10);D(e,e.jY,A(509));J(e,e.jY,d,10);d=e.jY;Bj(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=93;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
CQ=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.kx){if(a.ko>b)a.ko=(-1);a.j8=b;if(a.ke>b)a.ke=b;return a;}c=new Bk;d=a.kx;e=new K;e.jZ=G(16);D(e,e.jY,A(510));J(e,e.jY,b,10);D(e,e.jY,A(509));J(e,e.jY,d,10);d=e.jY;Bj(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=93;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
let Ek=F(EM);
let Jl=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iB()){e=new FV;e.j1=1;e.j2=1;B(e);}f=a.j8;g=a.ke;if((f-g|0)<d){e=new IR;e.j1=1;e.j2=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(511));J(j,j.jY,i,10);D(j,j.jY,A(512));J(j,j.jY,f,10);k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iC(g,h[c]);i=i+1|0;g=l;c=f;}a.ke=a.ke+d|0;return a;}e
=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(513));J(j,j.jY,d,10);D(j,j.jY,A(514));k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.jZ=G(16);D(j,j.jY,A(515));J(j,j.jY,c,10);D(j,j.jY,A(509));J(j,j.jY,d,10);d=j.jY;Bj(j,d,d+1|0);b=j.jZ;h=b.data;h[d]=41;k=new I;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);},
AVn=(a,b)=>{CQ(a,b);return a;},
AWo=(a,b)=>{CC(a,b);return a;},
AVr=a=>{a.j8=a.ke;a.ke=0;a.ko=(-1);return a;},
AXR=a=>{a.ke=0;a.j8=a.kx;a.ko=(-1);return a;},
AMn=(a,b)=>{CQ(a,b);return a;},
ARZ=(a,b)=>{CC(a,b);return a;};
let G$=F(EM);
let Vb=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iB()){e=new FV;e.j1=1;e.j2=1;B(e);}f=a.j8;g=a.ke;if((f-g|0)<d){e=new IR;e.j1=1;e.j2=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(516));J(j,j.jY,i,10);D(j,j.jY,A(512));J(j,j.jY,f,10);k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iD(g,h[c]);i=i+1|0;g=l;c=f;}a.ke=a.ke+d|0;return a;}e
=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(513));J(j,j.jY,d,10);D(j,j.jY,A(514));k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.jZ=G(16);D(j,j.jY,A(515));J(j,j.jY,c,10);D(j,j.jY,A(509));J(j,j.jY,d,10);d=j.jY;Bj(j,d,d+1|0);b=j.jZ;h=b.data;h[d]=41;k=new I;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);},
AWM=(a,b)=>{CQ(a,b);return a;},
AWW=(a,b)=>{CC(a,b);return a;},
AW8=a=>{a.j8=a.ke;a.ke=0;a.ko=(-1);return a;},
AXH=a=>{a.ke=0;a.j8=a.kx;a.ko=(-1);return a;},
AV_=(a,b)=>{CQ(a,b);return a;},
AT9=(a,b)=>{CC(a,b);return a;};
let G9=F(EM);
let ATY=(a,b)=>{CC(a,b);return a;},
AWn=a=>{a.ke=0;a.j8=a.kx;a.ko=(-1);return a;};
function E1(){let a=this;EM.call(a);a.lx=0;a.k1=null;a.k7=null;}
let AMe=(a,b)=>{CQ(a,b);return a;},
Ya=(a,b)=>{CC(a,b);return a;};
function Hm(){C.call(this);this.sN=null;}
let Cp=null,J3=null,Mc=null;
let De=()=>{let b;if(Mc===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;Mc=(new Int8Array(b))[0]?J3:Cp;}return Mc;},
AXQ=()=>{let b;b=new Hm;b.sN=A(4);Cp=b;b=new Hm;b.sN=A(5);J3=b;};
let AGm=F();
let Eg=F(0);
function CY(){let a=this;E1.call(a);a.mc=0;a.lI=0;}
let W1=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j8)return a.k1.data[a.lx+b|0];c=new H;d=a.j8;e=new K;e.jZ=G(16);D(e,e.jY,A(517));J(e,e.jY,b,10);D(e,e.jY,A(509));J(e,e.jY,d,10);d=e.jY;Bj(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
J5=a=>{let b,c,d,e,f,g;b=a.j8;c=a.ke;d=(b-c|0)/2|0;if(a.k7!==Cp){e=new OI;f=a.lx+c|0;c=a.lI;e.ko=(-1);e.kx=d;e.j8=d;e.ke=0;e.j8=d;e.qn=f;e.o1=a;e.tO=c;return e;}e=new Qy;b=a.lx+c|0;g=a.lI;e.ko=(-1);e.kx=d;e.j8=d;e.ke=0;e.j8=d;e.qn=b;e.o1=a;e.tO=g;return e;},
APD=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.j8){c=a.k1.data;b=a.lx+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.k7!==Cp)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new H;d=a.j8-3|0;i=new K;i.jZ=G(16);D(i,i.jY,A(517));J(i,i.jY,b,10);D(i,i.jY,A(509));J(i,i.jY,d,10);d=i.jY;Bj(i,d,d+1|0);c=i.jZ;j=c.data;j[d]=41;k=new I;d=i.jY;e=j.length;if(d>=0&&d<=(e-0|0)){k.j0=L(c.data,0,d);h.j1=1;h.j2=1;h.j3=k;B(h);}h=new H;h.j1=1;h.j2=1;Bi(h);B(h);},
AEA=(a,b,c)=>{let d,e,f,g,h,i;if(a.lI){d=new FV;d.j1=1;d.j2=1;B(d);}if(b>=0&&(b+3|0)<a.j8){if(a.k7!==Cp){e=a.k1.data;b=a.lx+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.k1.data;b=a.lx+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new H;c=a.j8-3|0;f=new K;f.jZ=G(16);D(f,f.jY,A(517));J(f,f.jY,b,10);D(f,f.jY,A(509));J(f,f.jY,c,10);c=f.jY;Bj(f,c,c+1|0);e=f.jZ;g=e.data;g[c]=41;h=new I;c=f.jY;i=g.length;if(c>=
0&&c<=(i-0|0)){h.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;d.j1=1;d.j2=1;B(d);},
GV=a=>{let b,c,d,e,f,g;b=a.j8;c=a.ke;d=(b-c|0)/4|0;if(a.k7!==Cp){e=new Pa;f=a.lx+c|0;c=a.lI;e.ko=(-1);e.kx=d;e.j8=d;e.ke=0;e.j8=d;e.p1=f;e.p0=a;e.ug=c;return e;}e=new S0;b=a.lx+c|0;g=a.lI;e.ko=(-1);e.kx=d;e.j8=d;e.ke=0;e.j8=d;e.p1=b;e.p0=a;e.ug=g;return e;},
E9=a=>{let b,c,d,e,f,g;b=a.j8;c=a.ke;d=(b-c|0)/4|0;if(a.k7!==J3){e=new OT;f=a.lx+c|0;c=a.lI;e.ko=(-1);e.kx=d;e.j8=d;e.ke=0;e.j8=d;e.pR=f;e.o4=a;e.vb=c;return e;}e=new Rq;b=a.lx+c|0;g=a.lI;e.ko=(-1);e.kx=d;e.j8=d;e.ke=0;e.j8=d;e.pR=b;e.o4=a;e.vb=g;return e;},
ATL=a=>{return a.k1.data;};
let AJW=F();
let S9=F(0);
function K4(){let a=this;C.call(a);a.wa=null;a.nC=0;a.nu=0;a.p4=null;a.qS=null;a.wF=0;a.pt=0;}
let AQM=0;
let ABx=(a,b,c,d,e)=>{a.nC=0;a.nu=0;a.pt=0;a.wa=b;a.qS=c;a.p4=d;a.wF=e;if(c!==null){b=UJ(a,c);a.qS=b;c=b.lv;a.nC=c===null?b.me:c.l_;a.nu=c===null?b.mi:c.l$;if(d===null)a.p4=c===null?Fz:H_(c.lT);}},
I3=(a,b,c,d)=>{let e=new K4();ABx(e,a,b,c,d);return e;},
P4=a=>{let b,c;if(a.pt){b=new S;b.j1=1;b.j2=1;b.j3=A(518);B(b);}if(a.qS===null){b=UJ(a,HP(a.wa));a.qS=b;c=b.lv;a.nC=c===null?b.me:c.l_;a.nu=c===null?b.mi:c.l$;if(a.p4===null)a.p4=c===null?Fz:H_(c.lT);}a.pt=1;},
UJ=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Bq===null&&AQM){c=b.lv;d=c===null?b.me:c.l_;e=c===null?b.mi:c.l$;f=Lj(d);g=Lj(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new FH;c=b.lv;JL(h,f,g,c===null?Fz:H_(c.lT));c=h.lv;if(c===null){Fc(b);J9(h,b.om,0,0,d,e,0,0,d,e);}else{i=b.lv.l8;j=c.l8;JU(i,j,0,0,d,e,0,0,d,e);}if(b.oF){c=new S;c.j1=1;c.j2=1;c.j3=A(63);B(c);}EC();GM(FN,b.p8);c=b.lv;if(c!==null)H1(c.l8);b.oF=1;return h;};
function FH(){let a=this;C.call(a);a.me=0;a.mi=0;a.om=null;a.l5=null;a.p8=0;a.qI=null;a.xH=0;a.xJ=0;a.xL=0;a.xK=0.0;a.st=null;a.rl=null;a.xt=null;a.zV=null;a.p3=null;a.q7=null;a.vM=0;a.lv=null;a.oF=0;}
let LA=null;
let Gt=()=>{Gt=BQ(FH);AHX();};
let X1=(a,b)=>{let c,d,e,f,g,h,i,j,k;Gt();a.xH=255;a.xJ=255;a.xL=255;a.st=MO(255,255,255,a.xK);a.rl=Kx;a.xt=MS;a.vM=0;c=b.uR;d=b.vq.sz;e=BE(d,c);d=e<0?null:d.kL.data[e];if(Dc.nA.uG){f=AMw(d.np);a.lv=AJM(f,0,f.data.length,0);Ke(a,(-1),(-1),null,null);}else{Ke(a,(-1),(-1),d.uI,null);if(a.p3===null){d=new S;g=b.uR;b=new K;b.jZ=G(16);D(b,b.jY,A(519));e=b.jY;if(g===null)g=A(2);D(b,e,g);D(b,b.jY,A(520));h=new I;i=b.jZ;f=i.data;j=b.jY;k=f.length;if(j>=0&&j<=(k-0|0)){h.j0=L(i.data,0,j);d.j1=1;d.j2=1;d.j3=h;B(d);}b=
new H;b.j1=1;b.j2=1;B(b);}}},
HP=a=>{let b=new FH();X1(b,a);return b;},
JL=(a,b,c,d)=>{Gt();a.xH=255;a.xJ=255;a.xL=255;a.st=MO(255,255,255,a.xK);a.rl=Kx;a.xt=MS;a.vM=0;Ke(a,b,c,null,null);},
AT4=(a,b,c)=>{let d=new FH();JL(d,a,b,c);return d;},
Ke=(a,b,c,d,e)=>{let f,g;if(e!==null){a.q7=e;a.me=e.getWidth();a.mi=e.getHeight();}else if(d===null){a.me=b;a.mi=c;}else{a.p3=d;a.me=d.width;a.mi=d.height;}if(Da){d=new CY;f=BI(4);d.ko=(-1);d.kx=4;d.j8=4;d.k7=Cp;d.lx=0;d.k1=f;d.ke=0;d.j8=4;d.mc=1;d.lI=0;d.k7=De();}else{f=BI(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new CY;g=0+c|0;d.ko=(-1);d.kx=c;d.j8=c;d.k7=Cp;d.lx=0;d.k1=f;d.ke=0;d.j8=g;d.mc=0;d.lI=0;}else{d=new H;d.j1=1;d.j2=1;Bi(d);B(d);}}a.qI=d;EC();c=Ny;Ny=c+1|0;a.p8=c;AEA(d,0,c);Cc(FN,a.p8,a);},
AGC=a=>{let b,c;E4();b=F8.nl.document.createElement("canvas");a.om=b;c=a.me;b.width=c;b=a.om;c=a.mi;b.height=c;b=a.om.getContext("2d");a.l5=b;Gt();c=Bw(Fk.kg);b.globalCompositeOperation=c;},
MO=(b,c,d,e)=>{let f,g,h,i;Gt();f=new K;f.jZ=G(16);D(f,f.jY,A(521));J(f,f.jY,b,10);b=f.jY;Bj(f,b,b+1|0);f.jZ.data[b]=44;J(f,f.jY,c,10);c=f.jY;Bj(f,c,c+1|0);f.jZ.data[c]=44;J(f,f.jY,d,10);c=f.jY;Bj(f,c,c+1|0);f.jZ.data[c]=44;E$(f,f.jY,e);d=f.jY;Bj(f,d,d+1|0);g=f.jZ;h=g.data;h[d]=41;i=new I;c=f.jY;d=h.length;if(c>=0&&c<=(d-0|0)){i.j0=L(g.data,0,c);return i;}f=new H;f.j1=1;f.j2=1;B(f);},
Fc=a=>{let b,c;if(a.om===null){AGC(a);if(a.p3!==null){b=a.l5;c=Bw(LI.mB);b.globalCompositeOperation=c;b=a.l5;c=a.p3;b.drawImage(c,0.0,0.0);b=a.l5;c=Bw(Fk.mB);b.globalCompositeOperation=c;}if(a.q7!==null){c=a.l5;b=Bw(LI.mB);c.globalCompositeOperation=b;b=a.l5;c=a.q7;b.drawImage(c,0.0,0.0);b=a.l5;c=Bw(Fk.mB);b.globalCompositeOperation=c;}}},
J9=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;Fc(a);if(a.rl===Jb){a:{k=a.l5;l=Bw(LA);k.fillStyle=l;k=a.l5;l=Bw(LA);k.strokeStyle=l;k=a.l5;l="destination-out";k.globalCompositeOperation=l;a.l5.beginPath();m=a.l5;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=Lx;Fc(a);LC();switch(N3.data[k.ka]){case 1:break;case 2:a.l5.stroke();break a;default:break a;}a.l5.fill();}a.l5.closePath();r=a.l5;k=Bw(a.st);r.fillStyle=k;r=a.l5;l=Bw(a.st);r.strokeStyle=l;r=a.l5;k=Bw(Fk.mB);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.l5;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.zV=null;},
AHX=()=>{LA=MO(255,255,255,1.0);};
let Hp=F(G9);
let AW$=a=>{let b,c;b=a.ke;if(b<a.j8){a.ke=b+1|0;return a.iy(b);}c=new Nm;c.j1=1;c.j2=1;B(c);},
Ej=(a,b)=>{let c,d;if(a.iB()){c=new FV;c.j1=1;c.j2=1;B(c);}d=a.ke;if(d<a.j8){a.ke=d+1|0;a.iL(d,b);return a;}c=new IR;c.j1=1;c.j2=1;B(c);},
E7=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j8)return a.iy(b);c=new H;d=a.j8;e=new K;e.jZ=G(16);D(e,e.jY,A(517));J(e,e.jY,b,10);D(e,e.jY,A(509));J(e,e.jY,d,10);d=e.jY;Bj(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
Vq=(a,b,c)=>{let d,e,f,g,h,i;if(a.iB()){d=new FV;d.j1=1;d.j2=1;B(d);}if(b>=0&&b<a.j8){a.iL(b,c);return a;}d=new H;c=a.j8;e=new K;e.jZ=G(16);D(e,e.jY,A(517));J(e,e.jY,b,10);D(e,e.jY,A(509));J(e,e.jY,c,10);c=e.jY;Bj(e,c,c+1|0);f=e.jZ;g=f.data;g[c]=41;h=new I;c=e.jY;i=g.length;if(c>=0&&c<=(i-0|0)){h.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);},
AV4=a=>{return a.iB();};
function Gf(){let a=this;Hp.call(a);a.qO=0;a.px=0;a.pd=null;}
let AK4=(a,b)=>{return a.pd.data[b+a.px|0];},
AIN=(a,b,c)=>{a.pd.data[b+a.px|0]=c;},
WV=a=>{return a.qO;};
let Hf=F(Ek);
let R0=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j8)return a.iM(b);c=new H;d=a.j8;e=new K;e.jZ=G(16);D(e,e.jY,A(517));J(e,e.jY,b,10);D(e,e.jY,A(509));J(e,e.jY,d,10);d=e.jY;Bj(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
NL=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.iB()){d=new FV;d.j1=1;d.j2=1;B(d);}if(b>=0&&b<a.j8){a.iC(b,c);return a;}d=new H;e=a.j8;f=new K;f.jZ=G(16);D(f,f.jY,A(517));J(f,f.jY,b,10);D(f,f.jY,A(509));J(f,f.jY,e,10);e=f.jY;Bj(f,e,e+1|0);g=f.jZ;h=g.data;h[e]=41;i=new I;e=f.jY;j=h.length;if(e>=0&&e<=(j-0|0)){i.j0=L(g.data,0,e);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);},
AUT=a=>{return a.iB();};
function H5(){let a=this;Hf.call(a);a.rm=0;a.qN=0;a.qf=null;}
let AMC=(a,b)=>{return a.qf.data[b+a.qN|0];},
ALj=(a,b,c)=>{a.qf.data[b+a.qN|0]=c;},
ALF=a=>{return a.rm;};
let JK=F(BG);
let Jb=null,Kx=null,AJZ=null;
let AE8=()=>{let b,c;b=new JK;b.kg=A(522);b.ka=0;Jb=b;c=new JK;c.kg=A(523);c.ka=1;Kx=c;AJZ=T(JK,[b,c]);};
let Ii=F(BG);
let XE=null,MS=null,AO3=null;
let AOL=()=>{let b,c;b=new Ii;b.kg=A(524);b.ka=0;XE=b;c=new Ii;c.kg=A(525);c.ka=1;MS=c;AO3=T(Ii,[b,c]);};
let Ku=F();
function Va(){let a=this;Ku.call(a);a.vq=null;a.uR=null;a.yK=null;}
let AEm=(a,b,c,d)=>{let e,f,g,h;if(d!==GQ&&d!==QV&&d!==Ti){b=new S;c=new K;c.jZ=G(16);D(c,c.jY,A(526));D(c,c.jY,d===null?A(2):d.kg);D(c,c.jY,A(527));d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);b.j1=1;b.j2=1;b.j3=d;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}a.vq=b;b=M3(c,A(528),A(113));if(Le(b,A(113)))b=Ch(b,0,b.j0.length-1|0);a.uR=b;a.yK=d;},
Ju=(a,b,c)=>{let d=new Va();AEm(d,a,b,c);return d;};
function L2(){let a=this;C.call(a);a.l8=0;a.l_=0;a.l$=0;a.lT=0;a.qJ=null;a.rN=null;}
let ABA=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=X(4);a.qJ=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.rN=APZ(g,h,c,d);b=a.qJ.data;a.l8=b[0];a.l_=b[1];a.l$=b[2];c=b[3];a.lT=c;if(e&&e!=c)ABc(a,e);},
AJM=(a,b,c,d)=>{let e=new L2();ABA(e,a,b,c,d);return e;},
ATo=(a,b,c,d)=>{let e;e=X(4);a.qJ=e;a.rN=ANQ(e.data,b,c,d);e=a.qJ.data;a.l8=e[0];a.l_=e[1];a.l$=e[2];a.lT=e[3];},
ADU=(a,b,c)=>{let d=new L2();ATo(d,a,b,c);return d;},
ABc=(a,b)=>{let c,d,e,f,g;c=ADU(a.l_,a.l$,b);MJ(c.l8,0);d=a.l_;e=a.l$;f=a.l8;g=c.l8;JU(f,g,0,0,d,e,0,0,d,e);H1(a.l8);a.l8=c.l8;a.lT=c.lT;a.l$=c.l$;a.qJ=c.qJ;a.rN=c.rN;a.l_=c.l_;},
APZ=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
ANQ=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
H1=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
JU=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
MJ=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let H4=F(G$);
let ANn=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j8)return a.iR(b);c=new H;d=a.j8;e=new K;e.jZ=G(16);D(e,e.jY,A(517));J(e,e.jY,b,10);D(e,e.jY,A(509));J(e,e.jY,d,10);d=e.jY;Bj(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
AVV=a=>{return a.iB();};
function JQ(){let a=this;H4.call(a);a.rX=0;a.rz=0;a.rf=null;}
let AEp=(a,b)=>{return a.rf.data[b+a.rz|0];},
AG1=(a,b,c)=>{a.rf.data[b+a.rz|0]=c;},
AB6=a=>{return a.rX;};
let AKU=F();
function EE(){BG.call(this);this.n$=0;}
let HE=null,AJC=null,AMf=null,AIi=null,ALV=null,ARh=null,AEY=null,AFp=null;
let Z2=()=>{let b,c,d,e,f,g,h;b=new EE;b.kg=A(529);b.ka=0;b.n$=9728;HE=b;c=new EE;c.kg=A(530);c.ka=1;c.n$=9729;AJC=c;d=new EE;d.kg=A(531);d.ka=2;d.n$=9987;AMf=d;e=new EE;e.kg=A(532);e.ka=3;e.n$=9984;AIi=e;f=new EE;f.kg=A(533);f.ka=4;f.n$=9985;ALV=f;g=new EE;g.kg=A(534);g.ka=5;g.n$=9986;ARh=g;h=new EE;h.kg=A(535);h.ka=6;h.n$=9987;AEY=h;AFp=T(EE,[b,c,d,e,f,g,h]);};
function HZ(){BG.call(this);this.rS=0;}
let AP_=null,HR=null,AJ4=null,AQu=null;
let AF0=()=>{let b,c,d;b=new HZ;b.kg=A(536);b.ka=0;b.rS=33648;AP_=b;c=new HZ;c.kg=A(537);c.ka=1;c.rS=33071;HR=c;d=new HZ;d.kg=A(538);d.ka=2;d.rS=10497;AJ4=d;AQu=T(HZ,[b,c,d]);};
let QP=F();
let AS_=(a,b)=>{b=a.S(b);BD();return b===null?null:b instanceof FM()&&b instanceof EJ?(b[Br]===true?b:b.kE):b;},
AAW=a=>{return a.eU();};
function HT(){let a=this;Hp.call(a);a.p0=null;a.ug=0;a.p1=0;}
let AIe=a=>{return a.ug;};
let Pa=F(HT);
let AEg=(a,b)=>{let c;c=a.p0.k1.data;b=a.p1+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
WT=(a,b,c)=>{let d;d=a.p0.k1.data;b=a.p1+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let S0=F(HT);
let APH=(a,b)=>{let c;c=a.p0.k1.data;b=a.p1+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
Ze=(a,b,c)=>{let d;d=a.p0.k1.data;b=a.p1+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function Hh(){let a=this;Hf.call(a);a.o4=null;a.vb=0;a.pR=0;}
let ALU=a=>{return a.vb;},
ANk=a=>{return a.o4.k1.data;};
let OT=F(Hh);
let AIo=(a,b)=>{let c;c=a.o4.k1.data;b=a.pR+(b*4|0)|0;return Lf((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
ANe=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Ge(c);e=a.o4.k1.data;b=a.pR+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let Rq=F(Hh);
let W7=(a,b)=>{let c;c=a.o4.k1.data;b=a.pR+(b*4|0)|0;return Lf(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AIb=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Ge(c);e=a.o4.k1.data;b=a.pR+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function G7(){let a=this;H4.call(a);a.o1=null;a.tO=0;a.qn=0;}
let AFL=a=>{return a.tO;},
ANX=a=>{return a.o1.k1.data;};
let OI=F(G7);
let ABN=(a,b)=>{let c;c=a.o1.k1.data;b=a.qn+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
AAR=(a,b,c)=>{let d;d=a.o1.k1.data;b=a.qn+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let Qy=F(G7);
let AKQ=(a,b)=>{let c;c=a.o1.k1.data;b=a.qn+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
ABP=(a,b,c)=>{let d;d=a.o1.k1.data;b=a.qn+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let Lu=F(Bz);
let FV=F(Lu);
let Nm=F(Bz);
let FX=F(BG);
let QV=null,GQ=null,AJm=null,ADR=null,Ti=null,ANE=null;
let ADg=()=>{let b,c,d,e,f;b=new FX;b.kg=A(539);b.ka=0;QV=b;c=new FX;c.kg=A(540);c.ka=1;GQ=c;d=new FX;d.kg=A(541);d.ka=2;AJm=d;e=new FX;e.kg=A(542);e.ka=3;ADR=e;f=new FX;f.kg=A(543);f.ka=4;Ti=f;ANE=T(FX,[b,c,d,e,f]);};
let EO=F(BG);
let RM=null,AOk=null,Rm=null,Ue=null,Sr=null,Ra=null,Fz=null,AMs=null;
let H_=b=>{let c,d,e,f,g,h,i;if(b==1)return RM;if(b==2)return Rm;if(b==5)return Ue;if(b==6)return Sr;if(b==3)return Ra;if(b==4)return Fz;c=new S;d=new K;d.jZ=G(16);D(d,d.jY,A(544));J(d,d.jY,b,10);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
WU=()=>{let b,c,d,e,f,g,h;b=new EO;b.kg=A(203);b.ka=0;RM=b;c=new EO;c.kg=A(545);c.ka=1;AOk=c;d=new EO;d.kg=A(546);d.ka=2;Rm=d;e=new EO;e.kg=A(547);e.ka=3;Ue=e;f=new EO;f.kg=A(548);f.ka=4;Sr=f;g=new EO;g.kg=A(549);g.ka=5;Ra=g;h=new EO;h.kg=A(550);h.ka=6;Fz=h;AMs=T(EO,[b,c,d,e,f,g,h]);};
let AC2=F();
let L0=0,Je=null,I9=null;
let AJ8=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:Ge(b);c.vJ=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.t0=0;c.tM=0;return;}if(f)d=e|8388608;else{d=e<<1;while(D4(C5(V(d),V(8388608)),Ca)){d=d<<1;f=f+(-1)|0;}}g=I9;h=ALZ(g,0,g.data.length,f);if(h<0)h= -h|0;g=I9.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=Je.data[e];j=C5(V(d),E(4294967295, 0));k=Bl(Be(Ba(j,C5(V(e),E(4294967295, 0))),32-i|0));if(k<L0){while(EU(k,L0)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=I9.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Bl(Be(Ba(j,C5(V(Je.data[e]),E(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=Je.data;f=h+1|0;e=g[f];m=i-1|0;n=Ba(C5(V(l),E(4294967295, 0)),C5(V(e),E(4294967295, 0)));e=32-m|0;o=Bl(Be(n,e));p=Bl(Be(Ba(C5(V(d-1|0),E(4294967295, 0)),C5(V(g[f]),E(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(EU(D6(k,r),D6(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(EU(D6(k,l),D6(o,l))>=0)break;m=l;}s=EU(q,m);d=s>0?Dl(D6(k,q),q):s<0?Dl(D6(k,m),m)+m|0:Dl(D6((k+(m/2|0)|0),m),m);if(E_(V(d),V(1000000000))>=0)while(true){h=h
+1|0;d=D6(d,10);if(EU(d,1000000000)<0)break;}else if(EU(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.t0=d;c.tM=h-50|0;},
ADy=()=>{L0=D6((-1),10);Je=Iw([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);I9=Iw([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let I_=F(BG);
let Lx=null,PO=null,UZ=null;
let ATi=()=>{let b,c;b=new I_;b.kg=A(551);b.ka=0;Lx=b;c=new I_;c.kg=A(552);c.ka=1;PO=c;UZ=T(I_,[b,c]);};
function Dy(){BG.call(this);this.mB=null;}
let LI=null,AAx=null,ABa=null,Xz=null,AO6=null,ATs=null,AAL=null,AGv=null,AH_=null,Fk=null,ANz=null,ANJ=null;
let AEW=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new Dy;b.kg=A(553);b.ka=0;b.mB=A(554);LI=b;c=new Dy;c.kg=A(555);c.ka=1;c.mB=A(556);AAx=c;d=new Dy;d.kg=A(557);d.ka=2;d.mB=A(558);ABa=d;e=new Dy;e.kg=A(559);e.ka=3;e.mB=A(560);Xz=e;f=new Dy;f.kg=A(561);f.ka=4;f.mB=A(562);AO6=f;g=new Dy;g.kg=A(563);g.ka=5;g.mB=A(564);ATs=g;h=new Dy;h.kg=A(565);h.ka=6;h.mB=A(566);AAL=h;i=new Dy;i.kg=A(567);i.ka=7;i.mB=A(568);AGv=i;j=new Dy;j.kg=A(569);j.ka=8;j.mB=A(570);AH_=j;k=new Dy;k.kg=A(571);k.ka=9;k.mB=A(572);Fk=k;l=new Dy;l.kg=A(573);l.ka
=10;l.mB=A(574);ANz=l;ANJ=T(Dy,[b,c,d,e,f,g,h,i,j,k,l]);};
let AMY=F(0);
let Iz=F(BG);
let O1=null,UR=null,AC3=null;
let ABj=()=>{let b,c;b=new Iz;b.kg=A(575);b.ka=0;O1=b;c=new Iz;c.kg=A(576);c.ka=1;UR=c;AC3=T(Iz,[b,c]);};
let ALX=F();
let KM=0;
let ANU=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!KM){Qo(b,c,d,e);return;}f=Hl;if(f!==NH&&f!==f&&f!==M1)ANc(b,c,d,e);else{g=B9;f=c.lv;if(f===null)h=6408;else a:{e=f.lT;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new S;g=new K;g.jZ=G(16);Ec(g,g.jY,A(64));J(g,g.jY,e,10);f=new I;i=g.jZ;j=i.data;d=g.jY;e=j.length;if(d>=0&&d<=(e-0|0)){f.j0=L(i.data,0,d);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}k=f===null?c.me:f.l_;l=f===null
?c.mi:f.l$;if(f===null)m=6408;else b:{m=f.lT;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new S;g=new K;Bt(g);g.jZ=G(16);ASI(g,g.jY,A(64));J(g,g.jY,m,10);f=new I;i=g.jZ;j=i.data;d=g.jY;e=j.length;if(d>=0&&d<=(e-0|0)){f.j0=L(i.data,0,d);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(f===null)n=5121;else c:{n=f.lT;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new S;g=new K;g.jZ
=G(16);Ec(g,g.jY,A(64));J(g,g.jY,n,10);f=new I;i=g.jZ;j=i.data;d=g.jY;e=j.length;if(d>=0&&d<=(e-0|0)){f.j0=L(i.data,0,d);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}n=5121;}g.cz(b,0,h,k,l,0,m,n,c.qI);Bq.iW(b);}},
ANc=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B3.pZ.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B3.pZ.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bq.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BC;h.kf=g;i=h;g.classObject=i;}}if(h.j$===null)h.j$=U(h.kf.$meta.name);i=h.j$;if(i===A(577))f=1;else if(!(A(577) instanceof I))f=0;else{g=A(577);f=i.j0!==g.j0?0:1;}if(!f&&Ez===null){Qo(b,c,d,e);break a;}}g=B9;i=c.lv;if(i===null)f=6408;else b:{e=i.lT;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new S;g=new K;g.jZ=G(16);B$(g,g.jY,Cl(A(64)));J(g,g.jY,e,10);i=new I;j=g.jZ;k=j.data;d=g.jY;e=k.length;if(d>=0&&d<=(e-0|0)){i.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}l=i===null?c.me:i.l_;m=i===null?c.mi:i.l$;if(i===null)n=6408;else c:{n=i.lT;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new S;g=new K;g.jZ
=G(16);Ec(g,g.jY,A(64));J(g,g.jY,n,10);i=new I;j=g.jZ;k=j.data;d=g.jY;e=k.length;if(d>=0&&d<=(e-0|0)){i.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(i===null)o=5121;else d:{o=i.lT;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new S;g=new K;g.jZ=G(16);B$(g,g.jY,Cl(A(64)));J(g,g.jY,o,10);i=new I;j=g.jZ;k=j.data;d=g.jY;e=k.length;if(d>=0&&d<=(e-0|0)){i.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}o=5121;}g.cz(b,
0,f,l,m,0,n,o,c.qI);Bq.iW(b);}},
Qo=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=B9;g=c.lv;if(g===null)h=6408;else a:{i=g.lT;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new S;f=new K;f.jZ=G(16);B$(f,f.jY,Cl(A(64)));J(f,f.jY,i,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}h=6406;}l=g===null?c.me:g.l_;m=g===null?c.mi:g.l$;if(g===null)n=6408;else b:{n=g.lT;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new S;f=new K;f.jZ=G(16);Ec(f,f.jY,A(64));J(f,f.jY,n,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(g===null)o=5121;else c:{o=g.lT;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new S;f=new K;f.jZ=G(16);B$(f,f.jY,Cl(A(64)));J(f,f.jY,o,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e
=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}f.cz(b,0,h,l,m,0,n,o,c.qI);if(Bq===null&&d!=e){c=new S;c.j1=1;c.j2=1;c.j3=A(578);B(c);}f=c.lv;p=(f===null?c.me:f.l_)/2|0;i=(f===null?c.mi:f.l$)/2|0;h=1;while(p>0&&i>0){f=new FH;g=c.lv;JL(f,p,i,g===null?Fz:H_(g.lT));g=Jb;f.rl=g;q=f.lv;if(q===null){Fc(f);g=f.l5;q=Bw(Fk.kg);g.globalCompositeOperation=q;}else{d=g!==g?1:0;MJ(q.l8,d);}g=c.lv;l=g===null?c.me:g.l_;m=g===null?c.mi:g.l$;q=f.lv;if(q===null){Fc(c);J9(f,
c.om,0,0,l,m,0,0,p,i);}else{r=g.l8;s=q.l8;JU(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.oF){f=new S;f.j1=1;f.j2=1;f.j3=A(63);B(f);}EC();GM(FN,c.p8);g=c.lv;if(g!==null)H1(g.l8);c.oF=1;}c=B9;g=f.lv;if(g===null)d=6408;else d:{d=g.lT;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new S;f=new K;f.jZ=G(16);B$(f,f.jY,Cl(A(64)));J(f,f.jY,d,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1
=1;c.j2=1;B(c);}d=6406;}e=g===null?f.me:g.l_;p=g===null?f.mi:g.l$;if(g===null)l=6408;else e:{l=g.lT;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new S;f=new K;f.jZ=G(16);Ec(f,f.jY,A(64));J(f,f.jY,l,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.lT;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new S;f=new K;f.jZ=G(16);B$(f,f.jY,Cl(A(64)));J(f,f.jY,m,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}m=5121;}c.cz(b,h,d,e,p,0,l,m,f.qI);c=f.lv;p=(c===null?f.me:c.l_)/2|0;i=(c===null?f.mi:c.l$)/2|0;h=h+1|0;c=f;}},
AV0=()=>{KM=1;};
let Tj=F();
let N3=null;
let LC=()=>{LC=BQ(Tj);ATc();};
let ATc=()=>{let b,c;b=X((UZ.p()).data.length);c=b.data;N3=b;c[Lx.ka]=1;c[PO.ka]=2;};
let IR=F(Bz);
function QI(){let a=this;CE.call(a);a.wG=null;a.Ao=null;a.xo=null;a.v8=null;a.yA=null;a.Ar=null;a.y0=null;a.zt=null;a.zd=null;a.zF=null;a.z4=null;a.qZ=null;a.zP=null;a.zx=null;a.v5=null;a.u5=null;}
let AL$=(a,b)=>{let c,d,e,f,g,h,i,j,k;F_(a);c=new N8;c.qD=0;a.qZ=c;a.u5=new D$;a.v5=b;c=new Bg;c.kq=1;c.j7=Q(C,16);a.wG=c;d=new HU;e=HA;f=Ju(e.rK,A(579),GQ);c=null;g=I3(f,HP(f),c,0);c=B9;e=c.j9.createTexture();h=c.nj;c.nj=h+1|0;Cc(c.nW,h,Cf(e));c=HE;d.ph=c;d.pQ=c;c=HR;d.o8=c;d.pj=c;d.qP=1.0;d.ng=3553;d.qh=h;JS(d,g);c=Dc;e=EQ;if(c===null)e=I6(e);else{i=G_(c);e=IL(e,c,i&(e.ms.data.length-1|0),i);}e=e===null?null:e.mY;if(e===null){e=new Bg;Bt(e);e.kq=1;e.j7=Q(C,16);}Bf(e,d);GG(EQ,c,e);a.Ao=d;c=new H8;c.oZ=d;e=
d.n3;Nf(c,0,0,e.nC,e.nu);a.xo=c;if(!(a.ln===21.0&&a.ly===21.0)){a.ln=21.0;a.ly=21.0;}Nt(a,a.kt,a.kF,a.ln,a.ly);c=new Bb;j=a.ln/2.0;k=a.ly/2.0;c.j6=j;c.j5=k;a.v8=c;if(!(a.n4===1.0&&a.n5===1.0)){a.n4=1.0;a.n5=1.0;}e=b.s9;a.yA=e.ox;a.Ar=e.q4;a.y0=e.qp;a.zt=e.p7;a.zd=e.qF;a.zF=e.oY;a.z4=e.qT;a.qZ.qD=1;c=new Do;c.pz=12;a.zx=c;a.zP=AKN(b);},
AID=a=>{let b=new QI();AL$(b,a);return b;},
AMR=(a,b,c)=>{let d,e,f,g,h;d=a.rU;c=d.kX;e=d.kW;f=d.kV;g=d.kY;d=b.pp;d.kX=c;d.kW=e;d.kV=f;d.kY=g;CX(d);b.rM=Ff(b.pp);d=a.xo;e=a.kt;h=a.v8;K$(b,d,e-h.j6,a.kF-h.j5,a.pF,a.pG,a.ln,a.ly,a.n4,a.n5,a.m7);},
AOs=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a:{c=a.qZ;if(c.qD){c.qD=0;d=AM1(a,b);c=a.qZ;Cw();e=Bv;f=BE(e,M(Dd));g=f<0?null:e.kL.data[f];if(g===null){g=new CB;e=new Bg;e.kq=0;e.j7=Q(C,4);g.kj=e;g.kR=100;b:{try{e=CK(M(Dd),null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{e=CI(M(Dd),null);CM(e,1);break b;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}e=null;}g.kC=e;if(e===null){c=new Bz;d=new K;Bt(d);d.jZ=G(16);BY(d,d.jY,A(21));if(M(Dd).j$===null)M(Dd).j$
=U(M(Dd).kf.$meta.name);h=M(Dd).j$;BY(d,d.jY,h);h=new I;i=d.jZ;j=i.data;f=d.jY;Bt(h);FW(0,f,j.length);h.j0=L(i.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=h;B(c);}Ce(Bv,M(Dd),g);}h=g.kj;k=h.j4;if(k){if(!k){c=new BN;c.j1=1;c.j2=1;Bi(c);c.j3=A(22);B(c);}k=k-1|0;h.j4=k;i=h.j7.data;h=i[k];i[k]=null;}else c:{try{h=CZ(g.kC,null);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){h=$$je;}else{throw $$e;}}d=new S;c=new K;c.jZ=G(16);D(c,c.jY,A(23));l=g.kC.lE.lD;if(l.j$===null)l.j$=U(l.kf.$meta.name);e=l.j$;D(c,c.jY,e);e=
new I;i=c.jZ;j=i.data;f=c.jY;m=j.length;if(f>=0&&f<=(m-0|0)){e.j0=L(i.data,0,f);d.j1=1;d.j2=1;Bi(d);d.j3=e;d.lm=h;B(d);}B(Fo());}h=h;h.l1=g;e=h;Bf(e.lr,d);h=e.kZ;if(h!==null){d.kZ=h;if(d.kT===null)d.kT=h;}Bf(e.lr,c);h=e.kZ;if(h!==null){c.kZ=h;if(c.kT===null)c.kT=h;}c=e.lr;k=0;f=c.j4;while(true){if(k>=f){e.kZ=a;if(e.kT===null)e.kT=a;Bf(a.qi,e);c=a.lA;c!==null&&!c.uH;break a;}if(k>=c.j4)break;c.j7.data[k].bx(a);k=k+1|0;}d=new H;h=new K;h.jZ=G(16);D(h,h.jY,A(18));J(h,h.jY,k,10);D(h,h.jY,A(19));k=c.j4;J(h,h.jY,
k,10);c=new I;i=h.jZ;j=i.data;f=h.jY;m=j.length;if(f>=0&&f<=(m-0|0)){c.j0=L(i.data,0,f);d.j1=1;d.j2=1;d.j3=c;B(d);}c=new H;Im(c);B(c);}}c=a.u5;n=a.kt;o=a.kF;p=a.ln;q=a.ly;c.nJ=n;c.nI=o;c.nQ=p;c.nv=q;MQ(a,1);h=a.v5.oK;a.wG=h;if(CA){c=new Cr;c.kQ=1;c.kU=h;c.lX=1;}else{if(h.kA===null){c=new C0;c.l9=h;c.ma=1;h.kA=c;}c=CJ(h.kA);}while(true){if(!c.kQ){h=new S;h.j1=1;h.j2=1;h.j3=A(17);B(h);}if(!(c.lJ>=c.kU.j4?0:1))break;h=Cm(c);if(AE$(a.u5,h.rF)){a.qZ.qD=1;k=a.qi.j4-1|0;while(k>=0){h=a.qi;if(k>=h.j4){d=new H;c=new K;c.jZ
=G(16);D(c,c.jY,A(18));J(c,c.jY,k,10);D(c,c.jY,A(19));k=h.j4;J(c,c.jY,k,10);h=new I;i=c.jZ;j=i.data;f=c.jY;m=j.length;if(f>=0&&f<=(m-0|0)){h.j0=L(i.data,0,f);d.j1=1;d.j2=1;d.j3=h;B(d);}c=new H;GC(c);B(c);}h.j7.data[k].bx(null);k=k+(-1)|0;}h=a.qi;i=h.j7;k=0;f=h.j4;d=null;if(k>f){c=new Bk;c.j1=1;c.j2=1;B(c);}while(k<f){j=i.data;m=k+1|0;j[k]=d;k=m;}h.j4=0;}}G5(a,b);};
let UE=F();
let Rg=null;
let NI=()=>{NI=BQ(UE);Yb();};
let AIn=(b,c,d,e)=>{NI();a:{b:{if(Rg===MP){if(B3.li.width!=B3.li.width)break b;if(B3.li.height!=B3.li.height)break b;}B9.dD(b,c,d,e);break a;}B9.dD(Dl(b,B3.li.width)/B3.li.width|0,Dl(c,B3.li.height)/B3.li.height|0,Dl(d,B3.li.width)/B3.li.width|0,Dl(e,B3.li.height)/B3.li.height|0);}},
Yb=()=>{Rg=MP;};
let AC6=F();
function M2(){let a=this;C.call(a);a.qr=null;a.n6=null;}
let AQn=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qr.readyState==4){if(a.qr.status==200){if(a.n6.nF.mL){if(BW===null){b=new CN;c=new Ck;c.lH=BI(32);b.l2=c;c=new K;Bt(c);c.jZ=G(16);b.lM=c;b.lL=G(32);b.lN=0;b.lO=Cg;BW=b;}b=a.n6.nB;c=new K;c.jZ=G(16);D(c,c.jY,A(580));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g
=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BX(Bw(b));BX("\n");}else{b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}}b=a.n6;b.nT.iZ(b.nB,U(a.qr.responseText));}else if(a.qr.status!=404&&a.qr.status!=403){try{i=V(100);$p=1;continue _;}catch($$e){$$je=Z($$e);if($$je instanceof Dq){}else{throw $$e;}}b=a.n6;c=b.nF;d=b.o$;j=b.nB;b=b.nT;if(c.mL){if(BW===null){k=new CN;l=new Ck;l.lH=BI(32);Bt(k);k.l2=l;l=new K;DM(l,16);k.lM=l;k.lL=G(32);k.lN=0;k.lO=Cg;BW=k;}k=new K;k.jZ=G(16);D(k,k.jY,A(102));D(k,k.jY,j===null?A(2)
:j);l=new I;e=k.jZ;f=e.data;h=k.jY;m=f.length;if(h>=0&&h<=(m-0|0)){l.j0=L(e.data,0,h);BX(Bw(l));BX("\n");}else{b=new H;R(b);B(b);}}c.ld=c.ld+1|0;k=new GZ;k.nF=c;k.o$=d;k.nB=j;k.nT=b;b=null;c=null;k.mW=new C;k.mV=1;k.ny=c;k.nS=b;g=CR;CR=g+1|0;k.nR=V(g);b=new El;b.nz=k;EF(b);}else{b=a.n6;b.nT.i0(b.nB);}b=a.n6.nF;b.ld=b.ld-1|0;}return;case 1:a:{try{K8(i);if(Fv()){break _;}break a;}catch($$e){$$je=Z($$e);if($$je instanceof Dq){}else{throw $$e;}}}b=a.n6;c=b.nF;d=b.o$;j=b.nB;b=b.nT;if(c.mL){if(BW===null){k=new CN;l
=new Ck;l.lH=BI(32);Bt(k);k.l2=l;l=new K;DM(l,16);k.lM=l;k.lL=G(32);k.lN=0;k.lO=Cg;BW=k;}k=new K;k.jZ=G(16);D(k,k.jY,A(102));D(k,k.jY,j===null?A(2):j);l=new I;e=k.jZ;f=e.data;h=k.jY;m=f.length;if(h>=0&&h<=(m-0|0)){l.j0=L(e.data,0,h);BX(Bw(l));BX("\n");}else{b=new H;R(b);B(b);}}c.ld=c.ld+1|0;k=new GZ;k.nF=c;k.o$=d;k.nB=j;k.nT=b;b=null;c=null;k.mW=new C;k.mV=1;k.ny=c;k.nS=b;g=CR;CR=g+1|0;k.nR=V(g);b=new El;b.nz=k;EF(b);b=a.n6.nF;b.ld=b.ld-1|0;return;default:Fm();}}Db().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AF1=(a,b)=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQn(a,b);if(Fv()){break _;}return;default:Fm();}}Db().s(a,b,$p);};
function N8(){BP.call(this);this.qD=0;}
let AJI=(a,b)=>{a.qD=1;return 1;};
let O_=F();
let Uj=null,AFs=null,WG=null,Rd=null,Zx=null,AQ2=null,AJR=null,Vy=null,QH=null,LT=null;
let AH8=(a,b)=>{let c;c=b.s9;Uj=c.ox;AFs=c.q4;WG=c.qp;Rd=c.p7;Zx=c.qF;AQ2=c.oY;AJR=c.qT;},
AKN=a=>{let b=new O_();AH8(b,a);return b;},
AM1=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;b=Uj;if(0>=b.j4){d=new H;e=new K;e.jZ=G(16);D(e,e.jY,A(18));J(e,e.jY,0,10);D(e,e.jY,A(19));f=b.j4;J(e,e.jY,f,10);b=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){b.j0=L(g.data,0,i);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;R(b);B(b);}b=b.j7.data[0];Vy=b;e=Rd;i=e.j4;f=i-1|0;if(f>=i){d=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,f,10);D(b,b.jY,A(19));f=e.j4;J(b,b.jY,f,10);e=new I;g=b.jZ;h=g.data;i=b.jY;j=h.length;if(i>=0&&i<=(j-0|0)){e.j0=L(g.data,0,i);d.j1
=1;d.j2=1;d.j3=e;B(d);}b=new H;R(b);B(b);}e=e.j7.data[f];QH=e;k=e.j6;l=e.j5;c=(D3(b.j6-k)+D3(Vy.j5-QH.j5))*c*1.0;b=null;Cw();d=Bv;i=BE(d,M(Do));m=i<0?null:d.kL.data[i];if(m===null){m=new CB;d=new Bg;Bt(d);d.kq=0;d.j7=Q(C,4);m.kj=d;m.kR=100;a:{try{d=CK(M(Do),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CI(M(Do),null);CM(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}m.kC=d;if(d===null){b=new Bz;d=new K;DM(d,16);B$(d,d.jY,A(21));if
(M(Do).j$===null)M(Do).j$=U(M(Do).kf.$meta.name);e=M(Do).j$;B$(d,d.jY,e);ND(b,AAZ(d.jZ,0,d.jY));B(b);}Ce(Bv,M(Do),m);}b:{e=m.kj;f=e.j4;if(f){if(!f){b=new BN;ND(b,A(22));B(b);}f=f-1|0;e.j4=f;g=e.j7.data;e=g[f];g[f]=null;}else try{e=CZ(m.kC,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){e=$$je;d=new S;b=new K;Bt(b);b.jZ=G(16);BY(b,b.jY,A(23));n=m.kC.lE.lD;if(n.j$===null)n.j$=U(n.kf.$meta.name);m=n.j$;BY(b,b.jY,m);m=new I;g=b.jZ;h=g.data;i=b.jY;Bt(m);FW(0,i,h.length);m.j0=L(g.data,0,i);Si(d,m,e);B(d);}
else{throw $$e;}}}e=e;e.l1=m;e=e;e.ut=k;e.us=l;e.xi=c;e.va=b;LT=e;return e;},
AU7=()=>{let b;b=new Do;b.pz=12;LT=b;};
let Jy=F(BG);
let MP=null,AJp=null,ACW=null;
let ZO=()=>{let b,c;b=new Jy;b.kg=A(581);b.ka=0;MP=b;c=new Jy;c.kg=A(582);c.ka=1;AJp=c;ACW=T(Jy,[b,c]);};
let N4=F(0);
function Uo(){let a=this;C.call(a);a.k_=null;a.ov=0;a.s_=null;a.rg=null;a.sM=null;a.x8=null;a.uT=null;a.mM=null;a.sH=0;a.y_=0.0;}
let AMu=(a,b,c)=>{let d,e,f,g,h,i,j;a.ov=0;a.s_=C8();a.rg=C8();a.sM=C8();a.x8=new Bb;d=new BM;d.kX=1.0;d.kW=1.0;d.kV=1.0;d.kY=1.0;CX(d);a.uT=d;a.y_=0.75;if(c!==null)a.k_=AHi(b,0,1,0,c);else{c=new LG;e=QU(WL(0,1,0),AJi(0,1,0));if(!e.nP){c=new S;d=new K;d.jZ=G(16);D(d,d.jY,A(479));if(!e.nP)f=e.nn;else{f=Bq.g9(e.mK);e.nn=f;}D(d,d.jY,f);f=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}Sy(c,b,0,1,0,e);c.z7=1;a.k_=c;}Mu(a.s_,0.0,
0.0+B3.li.width,0.0,0.0+B3.li.height,0.0,1.0);a.ov=1;},
AIK=(a,b)=>{let c=new Uo();AMu(c,a,b);return c;},
FT=(a,b)=>{let c,d;if(a.mM!==null){b=new BN;b.j1=1;b.j2=1;b.j3=A(583);B(b);}a.mM=b;if(a.ov){C$(a.sM,a.s_.lj);Oy(a.sM.lj,a.rg.lj);a.ov=0;}b=a.k_;c=a.sM;d=a.mM.sB;C$(b.uh,c.lj);b.wV=d;},
AJf=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;AGg(a,HS,Rt,8);Gx();o=F6.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.mM!==HS){bf=a.k_;bf.mr.data[bf.mh+bf.mH|0]=Dp(k.kX,k.kW,k.kV,k.kY);Dr(a.k_,x,y,0.0);bf=a.k_;bf.mr.data[bf.mh+bf.mH|0]
=Dp(l.kX,l.kW,l.kV,l.kY);Dr(a.k_,z,ba,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(m.kX,m.kW,m.kV,m.kY);Dr(a.k_,bb,bc,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(m.kX,m.kW,m.kV,m.kY);Dr(a.k_,bb,bc,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(n.kX,n.kW,n.kV,n.kY);Dr(a.k_,bd,be,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(k.kX,k.kW,k.kV,k.kY);Dr(a.k_,x,y,0.0);}else{bf=a.k_;bf.mr.data[bf.mh+bf.mH|0]=Dp(k.kX,k.kW,k.kV,k.kY);Dr(a.k_,x,y,0.0);bf=a.k_;bf.mr.data[bf.mh+bf.mH|0]=Dp(l.kX,l.kW,l.kV,l.kY);Dr(a.k_,z,ba,0.0);bf=a.k_;bf.mr.data[bf.mh
+bf.mH|0]=Dp(l.kX,l.kW,l.kV,l.kY);Dr(a.k_,z,ba,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(m.kX,m.kW,m.kV,m.kY);Dr(a.k_,bb,bc,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(m.kX,m.kW,m.kV,m.kY);Dr(a.k_,bb,bc,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(n.kX,n.kW,n.kV,n.kY);Dr(a.k_,bd,be,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(n.kX,n.kW,n.kV,n.kY);Dr(a.k_,bd,be,0.0);l=a.k_;l.mr.data[l.mh+l.mH|0]=Dp(k.kX,k.kW,k.kV,k.kY);Dr(a.k_,x,y,0.0);}},
AGg=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mM;if(e===null){b=new BN;b.j1=1;b.j2=1;b.j3=A(31);B(b);}if(!(e!==b&&e!==c)){if(a.ov){FQ(a.k_);a.mM=null;FT(a,e);}else{b=a.k_;if((b.vK-b.q5|0)<d){FQ(b);a.mM=null;FT(a,e);}}}else{if(!a.sH){if(c===null){c=new BN;e=new K;e.jZ=G(16);D(e,e.jY,A(584));D(e,e.jY,b===null?A(2):b.kg);D(e,e.jY,A(585));b=new I;f=e.jZ;g=f.data;h=e.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=b;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}j=new BN;e=new K;e.jZ=G(16);D(e,e.jY,A(584));D(e,
e.jY,b===null?A(2):b.kg);D(e,e.jY,A(586));D(e,e.jY,c.kg);D(e,e.jY,A(585));b=new I;f=e.jZ;g=f.data;h=e.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);j.j1=1;j.j2=1;j.j3=b;B(j);}b=new H;b.j1=1;b.j2=1;B(b);}FQ(a.k_);a.mM=null;FT(a,b);}};
let MB=F(Ex);
let J_=F(Ex);
let ON=F(Ex);
let P6=F(0);
function LG(){let a=this;C.call(a);a.wV=0;a.mh=0;a.xl=0;a.vK=0;a.q5=0;a.nN=null;a.rq=null;a.z7=0;a.xB=0;a.wh=0;a.zH=0;a.mH=0;a.yd=0;a.uh=null;a.mr=null;a.t_=null;}
let Sy=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.uh=C8();a.vK=b;a.xB=e;a.rq=f;g=ZG(a,c,d,e);h=new Jf;h.r$=1;h.rL=0;f=new Bn;CT();h.w$=f;f=Rf(g);h.mm=Ez===null?Sx(0,b,f):R9(0,b,f);f=new Hx;f.oq=1;f.qb=0;f.tT=1;if(!Da){g=Ft(0);d=g.data.length;i=new JQ;j=0+d|0;UX(i,d);i.ke=0;i.j8=j;i.rz=0;i.rX=0;i.rf=g;}else{k=new CY;g=BI(0);Bt(k);k.ko=(-1);k.kx=0;k.j8=0;k.k7=Cp;k.lx=0;k.k1=g;k.ke=0;k.j8=0;k.mc=1;k.lI=0;k.k7=De();i=J5(k);}f.nU=i;i.j8=i.ke;i.ke=0;i.ko=(-1);i=Bq;k=i.j9.createBuffer();d=i.mp;i.mp=d+1|0;Cc(i.m5,d,Cf(k));f.r7
=d;f.rr=35048;h.mj=f;h.qG=0;f=Dc;i=HX;if(f===null){i=i.ms.data[0];while(i!==null&&i.mX!==null){i=i.m_;}}else{k=f;if(!k.$id$){l=E0();k.$id$=l;}m=f.$id$;g=i.ms.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.pq==m){k=i.mX;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.m_;}}i=i===null?null:i.mY;if(i===null){i=new Bg;i.kq=1;i.j7=Q(C,16);}Bf(i,h);GG(HX,f,i);a.nN=h;a.mr=B_(Dl(b,(h.mm.i$()).mS/4|0));a.wh=(a.nN.mm.i$()).mS/4|0;g=(a.nN.mm.i$()).l4.data;b=g.length;d=0;a:{while(d<b){if(g[d].mF==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.nN.mm.i$()).l4.data;m=g.length;c=0;b:{while(c<m){if(g[c].mF==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.n0/4|0;}a.zH=b;g=(a.nN.mm.i$()).l4.data;m=g.length;c=0;c:{while(c<m){if(g[c].mF==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.nN.mm.i$()).l4.data;m=g.length;c=0;d:{while(c<m){if(g[c].mF==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.n0/4|0;}a.mH=b;g=(a.nN.mm.i$()).l4.data;m=g.length;c=0;e:{while(c<m){if(g[c].mF==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.nN.mm.i$()).l4.data;m
=g.length;c=0;f:{while(c<m){if(g[c].mF==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.n0/4|0;}a.yd=b;a.t_=Q(I,e);m=0;g:{while(m<e){g=a.t_;f=new K;f.jZ=G(16);D(f,f.jY,A(587));J(f,f.jY,m,10);i=new I;n=f.jZ;o=n.data;c=f.jY;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.j0=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new H;f.j1=1;f.j2=1;B(f);},
AHi=(a,b,c,d,e)=>{let f=new LG();Sy(f,a,b,c,d,e);return f;},
ZG=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bg;e.kq=1;e.j7=Q(C,16);f=new DV;f.mF=1;f.mt=3;f.mE=5126;f.mN=0;f.mJ=A(474);f.oh=0;f.pv=D_(1);Bf(e,f);if(b){g=new DV;g.mF=8;g.mt=3;g.mE=5126;g.mN=0;g.mJ=A(588);g.oh=0;g.pv=D_(8);Bf(e,g);}if(c){g=new DV;g.mF=4;g.mt=4;g.mE=5121;g.mN=1;g.mJ=A(475);g.oh=0;g.pv=D_(4);Bf(e,g);}h=0;while(true){if(h>=d){b=e.j4;i=Q(DV,b);j=i.data;h=0;while(true){c=BU(h,b);if(c>=0)break;if(c>=0){f=new H;g=new K;g.jZ=G(16);D(g,g.jY,A(18));J(g,g.jY,h,10);D(g,g.jY,A(19));b=e.j4;J(g,g.jY,b,10);e=new I;i
=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){e.j0=L(i.data,0,c);f.j1=1;f.j2=1;f.j3=e;B(f);}e=new H;e.j1=1;e.j2=1;B(e);}j[h]=e.j7.data[h];h=h+1|0;}return i;}g=new DV;k=new K;k.jZ=G(16);D(k,k.jY,A(589));J(k,k.jY,h,10);f=new I;i=k.jZ;j=i.data;c=k.jY;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.j0=L(i.data,0,c);g.mF=16;g.mt=2;g.mE=5126;g.mN=0;g.mJ=f;g.oh=0;g.pv=D_(16);Bf(e,g);h=h+1|0;}e=new H;e.j1=1;e.j2=1;B(e);},
Dr=(a,b,c,d)=>{let e,f;e=a.mh;f=a.mr.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.xl=0;a.mh=e+a.wh|0;a.q5=a.q5+1|0;},
FQ=a=>{let b,c,d,e,f,g,h;if(!a.q5)return;b=a.rq;c=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}c.hb(b.mK);c=a.rq;d=a.uh;Id();e=Jc(c,A(590),HM);b=Bq;if(c.k2){CH(c,c.lY,c.l0);c.k2=0;}QN(b,e,1,0,d.lj,0);f=0;while(f<a.xB){b=a.rq;c=a.t_.data[f];d=Bq;if(b.k2){CH(b,b.lY,b.l0);b.k2=0;}d.hl(Jc(b,c,HM),f);f=f+1|0;}b=a.nN;g=a.mr;h=a.mh;b.mm.hc(g,0,h);b=a.nN;SR(b,a.rq,a.wV,0,b.mj.hY()<=0?b.mm.i_():b.mj.hU(),b.r$);a.xl=0;a.mh=0;a.q5=0;},
WL=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.jZ=G(16);D(e,e.jY,A(591));f=!b?A(68):A(592);D(e,e.jY,f);f=!c?A(68):A(593);D(e,e.jY,f);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(594));f=!c?A(68):A(595);D(e,e.jY,f);f=new I;g=e.jZ;h=g.data;b=e.jY;j=h.length;if(b>=0&&b<=(j-0|0)){f.j0=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(596));f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i
>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);if(c){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(597));f=new I;g=e.jZ;h=g.data;c=e.jY;i=h.length;if(c>=0&&c<=(i-0|0))f.j0=L(g.data,0,c);else{e=new H;e.j1=1;e.j2=1;B(e);}}i=0;while(true){if(i>=d){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(598));f=new I;g=e.jZ;h=g.data;c=e.jY;d=h.length;if(c>=0&&c<=(d-0|0)){f.j0=L(g.data,0,c);return f;}e=new H;e.j1=1;e.j2=1;B(e);}e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(599));J(e,e.jY,i,10);D(e,e.jY,A(600));D(e,e.jY,A(589));J(e,e.jY,i,10);D(e,
e.jY,A(601));f=new I;g=e.jZ;h=g.data;c=e.jY;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.j0=L(g.data,0,c);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(602));J(e,e.jY,i,10);D(e,e.jY,A(601));f=new I;g=e.jZ;h=g.data;j=e.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.j0=L(g.data,0,j);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(603));J(e,e.jY,i,10);D(e,e.jY,A(601));f=new I;g=e.jZ;h=g.data;j
=e.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.j0=L(g.data,0,j);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);},
AJi=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(604);if(c){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(595));e=new I;g=f.jZ;h=g.data;i=f.jY;j=h.length;if(i>=0&&i<=(j-0|0))e.j0=L(g.data,0,i);else{e=new H;e.j1=1;e.j2=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(605));e=!c?A(606):A(607);D(f,f.jY,e);e=new I;h=f.jZ;g=h.data;b=f.jY;c=g.length;if(b>=0&&b<=(c-0|0)){e.j0=L(h.data,0,b);if(d>0){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(608));e=new I;g=f.jZ;h=g.data;c=f.jY;i=h.length;if(c>=0&&c<=(i-
0|0))e.j0=L(g.data,0,c);else{e=new H;e.j1=1;e.j2=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(609));e=new I;g=f.jZ;h=g.data;c=f.jY;d=h.length;if(c>=0&&c<=(d-0|0)){e.j0=L(g.data,0,c);return e;}e=new H;e.j1=1;e.j2=1;B(e);}if(i!=c){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(610));J(f,f.jY,i,10);D(f,f.jY,A(611));J(f,f.jY,i,10);D(f,f.jY,A(612));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.j0=L(g.data,0,j);}else{f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,
f.jY,A(610));J(f,f.jY,i,10);D(f,f.jY,A(611));J(f,f.jY,i,10);D(f,f.jY,A(55));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.j0=L(g.data,0,j);}i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(602));J(f,f.jY,i,10);D(f,f.jY,A(601));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.j0=L(g.data,0,j);f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(613));J(f,f.jY,i,10);D(f,f.jY,
A(601));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.j0=L(g.data,0,j);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);};
function G8(){BG.call(this);this.sB=0;}
let AHy=null,HS=null,Rt=null,AQ6=null;
let AMh=()=>{let b,c,d;b=new G8;b.kg=A(614);b.ka=0;b.sB=0;AHy=b;c=new G8;c.kg=A(615);c.ka=1;c.sB=1;HS=c;d=new G8;d.kg=A(616);d.ka=2;d.sB=4;Rt=d;AQ6=T(G8,[b,c,d]);};
let AEo=F();
function SG(){let a=this;C.call(a);a.qy=0;a.p$=0;a.no=0;a.so=Ca;a.t5=null;a.vZ=null;a.xD=Ca;a.vQ=null;}
function I7(){let a=this;C.call(a);a.sy=null;a.yC=0.0;a.y5=0;a.tZ=null;a.oA=null;a.yl=null;a.w0=null;a.zZ=null;}
let AO2=null,ATg=null;
let NF=()=>{NF=BQ(I7);AOd();};
let ASZ=(a,b,c,d)=>{let e;NF();a.yC=1.0;a.y5=0;if(!BB(b,Ve)){e=AFy(b,c);a.sy=e;b=new RU;b.pw=a;b.k6=e;a.w0=b;}else{e=new Tq;Qm(e,b,c);e.oB=0;e.q8=Ft(K6((e.kS.data.length/5|0)*3|0)|0);b=new So;b.pw=a;b.k6=e;a.w0=b;a.sy=e;}b=new RS;c=a.sy;b.pw=a;b.k6=c;a.tZ=b;b=new TR;b.pw=a;b.k6=c;e=new GE;e.rQ=1;e.m3=B_(16);b.pm=e;e=new GE;e.rQ=1;e.m3=B_(16);b.ta=e;a.oA=b;b=new RL;b.pw=a;b.k6=c;a.yl=b;a.zZ=d;},
AOd=()=>{AO2=C8();ATg=B_(6);};
function Rj(){I7.call(this);this.Al=null;}
let Ia=F(BG);
let Ui=null,QX=null,EV=null,AD0=null;
let AMP=()=>{let b,c,d;b=new Ia;b.kg=A(163);b.ka=0;Ui=b;c=new Ia;c.kg=A(617);c.ka=1;QX=c;d=new Ia;d.kg=A(618);d.ka=2;EV=d;AD0=T(Ia,[b,c,d]);};
function Sa(){let a=this;C.call(a);a.mO=null;a.lZ=0;}
let AEa=null;
let Ga=(a,b)=>{let c,d,e,f;c=a.mO;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);Di(c,0,f,0,a.lZ);a.mO=f;},
JG=a=>{let b,c,d;b=a.lZ+4|0;if(b>a.mO.data.length)Ga(a,b);c=a.mO.data;d=a.lZ;b=d+1|0;a.lZ=b;c[d]=110;d=b+1|0;a.lZ=d;c[b]=117;b=d+1|0;a.lZ=b;c[d]=108;a.lZ=b+1|0;c[b]=108;},
AKs=()=>{AEa=AF8([48,49,50,51,52,53,54,55,56,57]);};
function QS(){let a=this;DH.call(a);a.m6=null;a.Af=null;}
let P$=F(0);
function Ro(){let a=this;C.call(a);a.x7=0;a.zy=0;a.yx=0.0;}
let Ve=F(0);
function Ha(){let a=this;C.call(a);a.uy=null;a.qs=null;a.m0=0.0;a.kS=null;a.kN=0;a.xS=0.0;a.vU=0.0;a.wI=0.0;a.nX=0;a.sg=null;}
let ACf=null;
let M0=()=>{M0=BQ(Ha);ADA();};
let Qm=(a,b,c)=>{M0();a.xS=1.0;a.vU=0.5;a.wI=0.0010000000474974513;a.nX=0;a.sg=null;a.uy=b;a.kS=B_(2000);a.qs=c;IC(a);a.m0=Ff(Lk);},
AFy=(a,b)=>{let c=new Ha();Qm(c,a,b);return c;},
AVA=(a,b)=>{let c;c=a.qs;a.qs=b;IC(a);return c;},
IC=a=>{let b,c,d,e,f;a:{b=a.qs;if(b!==null){c=0.5*(b.u9+b.u8);d=0.5*(b.u$+b.u6);e=0;while(true){f=a.kS.data;if(e>=f.length)break a;f[e+3|0]=c;f[e+4|0]=d;e=e+5|0;}}}},
AWR=(a,b)=>{let c,d;c=Ff(b);d=a.m0;a.m0=c;return d;},
AWz=(a,b)=>{let c;c=a.m0;a.m0=b;return c;},
AUd=a=>{return a.m0;},
AWK=a=>{return a.nX;},
AVc=a=>{let b;b=a.nX;a.nX=1;return b;},
AUX=a=>{a.nX=0;if(a.kN>0)a.jc();},
AXd=a=>{return a.sg===null?0:1;},
AC7=a=>{a.kN=a.kN+4|0;},
AHw=a=>{let b,c,d;b=a.kS.data;c=5*a.kN|0;d=b[c+10|0];b[c+15|0]=d;d=b[c+11|0];b[c+16|0]=d;a.jd();},
AKR=a=>{FF(a,4);},
AWB=a=>{FF(a,4);},
FF=(a,b)=>{let c,d;c=b*5|0;d=a.kS.data.length;if(c>d)a.jf(c);else if(((d-(20*a.kN|0)|0)/5|0)<b)a.jc();},
AHE=(a,b)=>{let c;a.jc();c=a.kS.data.length;while(b>c){c=c*2|0;}a.kS=B_(c);IC(a);},
AUv=a=>{return (a.kS.data.length-(20*a.kN|0)|0)/5|0;},
AHP=a=>{let b,c;b=a.kN;if(!b)return;c=a.sg;if(c===null?0:1)c.jg();else{c=a.qs;if(c===null){c=new BN;c.j1=1;c.j2=1;c.j3=A(619);B(c);}AHb(a.uy,c.oZ,a.kS,0,5*b|0);}a.kN=0;},
AU1=a=>{return 5*a.kN|0;},
AVR=(a,b)=>{a.kS.data[(5*a.kN|0)+0|0]=b;},
AU$=(a,b)=>{a.kS.data[(5*a.kN|0)+1|0]=b;},
AWQ=(a,b)=>{a.kS.data[(5*a.kN|0)+5|0]=b;},
AT6=(a,b)=>{a.kS.data[(5*a.kN|0)+6|0]=b;},
AT1=(a,b)=>{a.kS.data[(5*a.kN|0)+10|0]=b;},
AWY=(a,b)=>{a.kS.data[(5*a.kN|0)+11|0]=b;},
AUZ=(a,b)=>{a.kS.data[(5*a.kN|0)+15|0]=b;},
AWa=(a,b)=>{a.kS.data[(5*a.kN|0)+16|0]=b;},
AUe=a=>{return a.kS.data[(5*a.kN|0)+10|0];},
AVk=a=>{return a.kS.data[(5*a.kN|0)+11|0];},
AV5=a=>{return a.kS.data[(5*a.kN|0)+15|0];},
AWH=a=>{return a.kS.data[(5*a.kN|0)+16|0];},
AVY=(a,b)=>{a.kS.data[(5*a.kN|0)+2|0]=b;},
AWI=(a,b)=>{a.kS.data[(5*a.kN|0)+7|0]=b;},
AXM=(a,b)=>{a.kS.data[(5*a.kN|0)+12|0]=b;},
AUy=(a,b)=>{a.kS.data[(5*a.kN|0)+17|0]=b;},
ADA=()=>{ACf=C8();};
function Ey(){let a=this;C.call(a);a.pw=null;a.k6=null;}
let DF=null,Dw=null,DT=null,CU=null,CV=null,SW=null,Nh=null;
let AT8=()=>{DF=new Bb;Dw=new Bb;DT=new Bb;CU=new Bb;CV=new Bb;SW=new Bb;Nh=new Bb;};
let Hz=F(Ey);
let AKW=null;
let ASH=()=>{let b,c;b=new Ol;c=new Me;c.vF=1;c.wc=Ft(16);b.yW=c;c=new FL;c.pe=1;c.my=X(16);b.zn=c;c=new Me;c.vF=1;c.wc=Ft(16);b.y2=c;AKW=b;};
let RU=F(Hz);
function Tq(){let a=this;Ha.call(a);a.q8=null;a.oB=0;}
let AR_=a=>{let b,c,d,e,f,g,h,i;b=a.kN;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.oB;g=3*f|0;h=a.q8.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;f=f+1|0;a.oB=f;i=(b+3|0)<<16>>16;d=3*f|0;h[d]=c;h[d+1|0]=e;h[d+2|0]=i;a.oB=f+1|0;a.kN=b+4|0;},
ATM=a=>{let b,c,d,e,f,g,h;b=a.kN;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.oB;g=3*f|0;h=a.q8.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;a.oB=f+1|0;a.kN=b+3|0;},
ALP=a=>{let b;b=a.kS.data.length;if(15>b)N$(a,15);else if(((b-(20*a.kN|0)|0)/5|0)<3)LF(a);},
LF=a=>{let b,c;b=a.kN;if(!b)return;c=a.sg;if(c===null?0:1)c.jg();else a.uy.ji(a.qs.oZ,a.kS,0,5*b|0,a.q8,0,3*a.oB|0);a.kN=0;a.oB=0;},
N$=(a,b)=>{let c;LF(a);c=a.kS.data.length;while(b>c){c=c*2|0;}a.kS=B_(c);IC(a);a.q8=Ft(K6((a.kS.data.length/5|0)*3|0)|0);};
let So=F(Hz);
let RS=F(Ey);
let VZ=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n,o,p,q,r,s;FF(a.k6,4);j=0.0;k=d-b;l=e-c;if(g){m=a.k6;n=m.wI;o=m.xS;p=m.vU;b=b/o;b=(b+CL(b)*0.5|0)*o+p-CL(k)*n;c=c/o;c=(c+CL(c)*0.5|0)*o+p-CL(l)*n;d=d/o;d=(d+CL(d)*0.5|0)*o+p+CL(k)*n;e=e/o;e=(e+CL(e)*0.5|0)*o+p+CL(l)*n;}q=0.5*f;if(b!==d){if(c===e){j=q;q=0.0;}else{f=e-c;k=d-b;r=1.0/Cz(f*f+k*k)*q;q=f*r;j=k*r;}}f=b+q;m=a.k6;s=m.kS.data;g=5*m.kN|0;s[g+0|0]=f;s[g+1|0]=c-j;s[g+5|0]=b-q;s[g+6|0]=c+j;s[g+10|0]=d-q;s[g+11|0]=e+j;s[g+15|0]=d+q;s[g+16|0]=e-j;s[g+2|0]=h;s[g+7|0]
=h;s[g+12|0]=i;s[g+17|0]=i;m.jd();m=a.k6;if(!m.nX)m.jc();};
function TR(){let a=this;Ey.call(a);a.pm=null;a.ta=null;}
let GI=null,GL=null;
let FE=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;while(true){g=BU(f,b.j4);if(g>=0)break;if(g>=0){h=new H;d=new K;d.jZ=G(16);D(d,d.jY,A(18));J(d,d.jY,f,10);D(d,d.jY,A(19));e=b.j4;J(d,d.jY,e,10);b=new I;i=d.jZ;j=i.data;f=d.jY;g=j.length;if(f>=0&&f<=(g-0|0)){b.j0=L(i.data,0,f);h.j1=1;h.j2=1;h.j3=b;B(h);}b=new H;R(b);B(b);}h=b.j7.data[f];UF(a.ta,h.j6,h.j5);f=f+1|0;}b=a.ta;AFm(a,b.m3,0,b.m$,c,d,e);a.ta.m$=0;},
AFm=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o;b=b.data;if(b.length<4)return;PU(a.pm,b[c]);PU(a.pm,b[c+1|0]);h=c+2|0;while(h<d){c=D3(b[h-2|0]-b[h])>=0.0010000000474974513?0:1;if(!(c&&(D3(b[h-1|0]-b[h+1|0])>=0.0010000000474974513?0:1)))UF(a.pm,b[h],b[h+1|0]);h=h+2|0;}i=a.pm;h=i.m$;c=BU(h,4);if(c<0){i.m$=0;return;}if(!c){j=a.pw.tZ;b=i.m3.data;k=b[0];l=b[1];m=b[2];n=b[3];o=j.k6.m0;VZ(j,k,l,m,n,e,0,o,o);j.k6.jc();a.pm.m$=0;return;}j=a.k6;d=j.nX;j.nX=1;if(f===Ui)Yv(a,i.m3,h,e,g);else AE9(a,i.m3,h,e,g,f!==QX?0:1);if(!d)
{f=a.k6;f.nX=0;if(f.kN>0)f.jc();}a.pm.m$=0;},
Yv=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=!e?c:c-2|0;g=0;while(g<f){h=b.data;i=a.pw.tZ;j=h[g];k=h[g+1|0];l=g+2|0;m=h[l%c|0];n=h[(g+3|0)%c|0];o=i.k6.m0;VZ(i,j,k,m,n,d,0,o,o);i.k6.jc();g=l;}},
AE9=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;g=0.5*d;h=a.k6;i=h.m0;FF(h,4);j=2;k=c-2|0;l=g*g;m=c-1|0;while(j<k){n=b.data;h=DF;d=n[j-2|0];o=n[j-1|0];h.j6=d;h.j5=o;p=Dw;d=n[j];o=n[j+1|0];p.j6=d;p.j5=o;q=DT;r=j+2|0;d=n[r];o=n[j+3|0];q.j6=d;q.j5=o;if(f)KN(h,p,q,CU,CV,g);else DW(h,p,q,CU,CV,g,0);p=CU;d=p.j6;o=p.j5;h=a.k6;s=h.kS.data;t=5*h.kN|0;s[t+10|0]=d;s[t+11|0]=o;q=CV;d=q.j6;o=q.j5;s[t+15|0]=d;s[t+16|0]=o;if(j==2){if(!e){h=Nh;d=n[k];o=n[m];h.j6=d;h.j5=o;if(f)KN(h,DF,Dw,GI,GL,g);else DW(h,
DF,Dw,GI,GL,g,1);h=GL;d=h.j6;o=h.j5;h=a.k6;s=h.kS.data;t=5*h.kN|0;s[t+0|0]=d;s[t+1|0]=o;h=GI;d=h.j6;o=h.j5;s[t+5|0]=d;s[t+6|0]=o;}else{d=n[2];o=n[3];u=n[0];v=n[1];h=Ee;h.j6=u;h.j5=v;d=u-d;h.j6=d;o=v-o;h.j5=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=Cz(l/o);h.j6=h.j6*d;h.j5=h.j5*d;}h=Ee;d=h.j5;o= -h.j6;p.j6=d;p.j5=o;p.j6=d+u;p.j5=o+v;d= -h.j5;o=h.j6;q.j6=d;q.j5=o;q.j6=d+u;q.j5=o+v;h=CV;d=h.j6;o=h.j5;h=a.k6;s=h.kS.data;t=5*h.kN|0;s[t+0|0]=d;s[t+1|0]=o;h=CU;d=h.j6;o=h.j5;s[t+5|0]=d;s[t+6|0]=o;}}if(!f){DW(DF,Dw,DT,CU,CV,
g,1);h=CU;v=h.j6;w=h.j5;h=CV;x=h.j6;u=h.j5;}else{h=a.k6;s=h.kS.data;t=5*h.kN|0;v=s[t+10|0];w=s[t+11|0];x=s[t+15|0];u=s[t+16|0];}h=a.k6;s=h.kS.data;t=5*h.kN|0;s[t+2|0]=i;s[t+7|0]=i;s[t+12|0]=i;s[t+17|0]=i;h.jd();if(!f){p=DF;q=Dw;y=DT;z=CU;ba=CV;a.k6.jr();c=DW(p,q,y,z,ba,g,0);h=!c?z:ba;d=h.j6;o=h.j5;h=a.k6;s=h.kS.data;j=5*h.kN|0;s[j+0|0]=d;s[j+1|0]=o;h=!c?ba:z;d=h.j6;o=h.j5;s[j+5|0]=d;s[j+6|0]=o;if(DW(p,q,y,z,ba,g,1))z=ba;d=z.j6;o=z.j5;h=a.k6;s=h.kS.data;t=5*h.kN|0;s[t+10|0]=d;s[t+11|0]=o;d=h.m0;s[t+2|0]=d;s[t
+7|0]=d;s[t+12|0]=d;h.js();}FF(a.k6,4);h=a.k6;s=h.kS.data;t=5*h.kN|0;s[t+0|0]=x;s[t+1|0]=u;s[t+5|0]=v;s[t+6|0]=w;j=r;}if(e){h=Dw;p=DT;q=CU;y=CV;d=h.j6;o=h.j5;g=p.j6;u=p.j5;h=Ee;h.j6=g;h.j5=u;d=g-d;h.j6=d;o=u-o;h.j5=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=Cz(l/o);h.j6=h.j6*d;h.j5=h.j5*d;}h=Ee;d=h.j5;o= -h.j6;q.j6=d;q.j5=o;q.j6=d+g;q.j5=o+u;d= -h.j5;o=h.j6;y.j6=d;y.j5=o;y.j6=d+g;y.j5=o+u;h=CV;d=h.j6;o=h.j5;p=a.k6;b=p.kS.data;e=5*p.kN|0;b[e+10|0]=d;b[e+11|0]=o;h=CU;d=h.j6;o=h.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e
+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jd();}else if(f){b=b.data;h=DF;d=b[0];o=b[1];h.j6=d;h.j5=o;KN(Dw,DT,h,CU,CV,g);h=CU;d=h.j6;o=h.j5;p=a.k6;b=p.kS.data;e=5*p.kN|0;b[e+10|0]=d;b[e+11|0]=o;h=CV;d=h.j6;o=h.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jd();FF(a.k6,4);h=CU;d=h.j6;o=h.j5;p=a.k6;b=p.kS.data;e=5*p.kN|0;b[e+0|0]=d;b[e+1|0]=o;h=CV;d=h.j6;o=h.j5;b[e+5|0]=d;b[e+6|0]=o;h=GL;d=h.j6;o=h.j5;b[e+10|0]=d;b[e+11|0]=o;h=GI;d=h.j6;o=h.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e
+12|0]=i;b[e+17|0]=i;p.jd();}else{s=b.data;h=DF;p=Dw;h.j6=p.j6;h.j5=p.j5;q=DT;p.j6=q.j6;p.j5=q.j5;d=s[0];o=s[1];q.j6=d;q.j5=o;DW(h,p,q,CU,CV,g,0);h=CU;d=h.j6;o=h.j5;h=a.k6;b=h.kS.data;e=5*h.kN|0;b[e+10|0]=d;b[e+11|0]=o;p=CV;d=p.j6;o=p.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;h.jd();p=DF;q=Dw;y=DT;z=CU;ba=CV;a.k6.jr();f=DW(p,q,y,z,ba,g,0);h=!f?z:ba;d=h.j6;o=h.j5;h=a.k6;b=h.kS.data;e=5*h.kN|0;b[e+0|0]=d;b[e+1|0]=o;h=!f?ba:z;d=h.j6;o=h.j5;b[e+5|0]=d;b[e+6|0]=o;if(DW(p,q,y,z,ba,g,
1))z=ba;d=z.j6;o=z.j5;h=a.k6;b=h.kS.data;e=5*h.kN|0;b[e+10|0]=d;b[e+11|0]=o;d=h.m0;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.js();FF(a.k6,4);DW(DF,Dw,DT,CU,CV,g,1);h=CV;d=h.j6;o=h.j5;p=a.k6;b=p.kS.data;e=5*p.kN|0;b[e+10|0]=d;b[e+11|0]=o;p=CU;d=p.j6;o=p.j5;b[e+15|0]=d;b[e+16|0]=o;q=DF;d=s[2];o=s[3];q.j6=d;q.j5=o;DW(Dw,DT,q,p,h,g,0);h=CU;d=h.j6;o=h.j5;p=a.k6;b=p.kS.data;e=5*p.kN|0;b[e+0|0]=d;b[e+1|0]=o;h=CV;d=h.j6;o=h.j5;b[e+5|0]=d;b[e+6|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jd();h=Dw;p=DT;q=DF;y=CU;z
=CV;a.k6.jr();c=DW(h,p,q,y,z,g,0);ba=!c?y:z;d=ba.j6;o=ba.j5;ba=a.k6;b=ba.kS.data;f=5*ba.kN|0;b[f+0|0]=d;b[f+1|0]=o;ba=!c?z:y;d=ba.j6;o=ba.j5;b[f+5|0]=d;b[f+6|0]=o;if(DW(h,p,q,y,z,g,1))y=z;d=y.j6;o=y.j5;h=a.k6;b=h.kS.data;e=5*h.kN|0;b[e+10|0]=d;b[e+11|0]=o;d=h.m0;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.js();}},
AXX=()=>{GI=new Bb;GL=new Bb;};
let RL=F(Ey);
let V6=null,Oo=null;
let AU_=()=>{V6=new Bb;Oo=new Bb;};
function Me(){let a=this;C.call(a);a.wc=null;a.vF=0;}
function QQ(){let a=this;DH.call(a);a.nc=null;a.rG=null;a.rk=null;a.ru=null;}
let Zq=(a,b)=>{a.nc.m6.so=D5(b);},
Xc=(a,b)=>{b=a.nc.m6;b.p$=1;b.no=0;},
AJd=(a,b,c)=>{GY(a.ru,a.rG,a.rk,c);b=a.nc.m6;b.qy=1;b.no=0;return 0;};
let OD=F();
let UB=null;
let Ng=()=>{Ng=BQ(OD);AIM();};
let AIM=()=>{let b,c;b=X((NK.p()).data.length);c=b.data;UB=b;c[FJ.ka]=1;c[FA.ka]=2;c[Fp.ka]=3;c[Fi.ka]=4;c[JV.ka]=5;};
let ARH=F();
let Pq=0.0,Pr=0.0;
let AUU=()=>{Pq=Cz(2.0);Pr=Cz(3.0);};
function F0(){let a=this;Gu.call(a);a.ol=0;a.ni=null;a.nE=null;a.nm=null;}
let AAG=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new KB;c.op=a;c.pS=b;c=B5(c,"handleEvent");b.onreadystatechange=c;c=a.nm;d=a.nE;e=new G0;e.u0=c;e.r8=d;c=B5(e,"handleEvent");b.onprogress=c;d=a.ni;f=a.ol;b.open("GET",Bw(d),!!f);if(a.ol){d="arraybuffer";b.responseType=d;}b.send();};
function OB(){let a=this;DH.call(a);a.sD=null;a.zT=null;}
let AAK=(a,b)=>{a.sD.nc.m6.so=D5(b);},
AJ0=(a,b)=>{b=a.sD.nc.m6;b.p$=1;b.no=0;},
Y_=(a,b,c)=>{c=a.sD;b=null;GY(c.ru,c.rG,c.rk,b);b=c.nc.m6;b.qy=1;b.no=0;return 0;};
let XN=F();
let D2=null,Fg=null,Ee=null;
let KN=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;h=D2;i=c.j6;h.j6=i;j=c.j5;h.j5=j;h.j6=i-b.j6;h.j5=j-b.j5;b=Fg;i=d.j6;b.j6=i;j=d.j5;b.j5=j;k=i-c.j6;b.j6=k;l=j-c.j5;b.j5=l;m=h.j5;i=k*m;j=h.j6;j=N6(i-l*j,j*k+m*l);n=D3(j-0.0)>=0.0010000000474974513?0:1;if(!n&&!(D3(j-6.2831854820251465)>=0.0010000000474974513?0:1)){m=g/JH(j);n=j>=0.0?0:1;b=D2;i=m*m;g=b.j6;g=g*g;m=b.j5;m=g+m*m;if(m!==0.0&&m!==i){g=Cz(i/m);b.j6=b.j6*g;b.j5=b.j5*g;}b=Fg;g=b.j6;g=g*g;m=b.j5;m=g+m*m;if(m!==0.0&&m!==i){g=Cz(i/m);b.j6=b.j6*g;b.j5=b.j5*g;}h=!n
?f:e;if(n)e=f;m=c.j6;h.j6=m;i=c.j5;h.j5=i;b=D2;m=m-b.j6;h.j6=m;i=i-b.j5;h.j5=i;d=Fg;h.j6=m+d.j6;h.j5=i+d.j5;m=c.j6;e.j6=m;i=c.j5;e.j5=i;m=m+b.j6;e.j6=m;i=i+b.j5;e.j5=i;e.j6=m-d.j6;e.j5=i-d.j5;return j;}b=D2;g=g*g;m=b.j6;m=m*m;i=b.j5;m=m+i*i;if(m!==0.0&&m!==g){g=Cz(g/m);b.j6=b.j6*g;b.j5=b.j5*g;}b=D2;g= -b.j5;m=b.j6;e.j6=g;e.j5=m;e.j6=g+c.j6;e.j5=m+c.j5;g=b.j5;m= -b.j6;f.j6=g;f.j5=m;f.j6=g+c.j6;f.j5=m+c.j5;return j;},
DW=(b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q;i=D2;j=c.j6;i.j6=j;k=c.j5;i.j5=k;i.j6=j-b.j6;i.j5=k-b.j5;b=Fg;l=d.j6;b.j6=l;j=d.j5;b.j5=j;k=l-c.j6;b.j6=k;m=j-c.j5;b.j5=m;j=i.j5;l=k*j;n=i.j6;l=N6(l-m*n,n*k+j*m);o=D3(l-0.0)>=0.0010000000474974513?0:1;if(!o&&!(D3(l-6.2831854820251465)>=0.0010000000474974513?0:1)){j=g/JH(l);b=D2;n=j*j;j=b.j6;j=j*j;k=b.j5;j=j+k*k;if(j!==0.0&&j!==n){j=Cz(n/j);b.j6=b.j6*j;b.j5=b.j5*j;}b=Fg;j=b.j6;j=j*j;k=b.j5;k=j+k*k;if(k!==0.0&&k!==n){j=Cz(n/k);b.j6=b.j6*j;b.j5=b.j5*j;}o=l>=0.0?0:1;i=
!o?f:e;if(o)e=f;k=c.j6;i.j6=k;l=c.j5;i.j5=l;p=D2;k=k-p.j6;i.j6=k;l=l-p.j5;i.j5=l;q=Fg;i.j6=k+q.j6;i.j5=l+q.j5;if(h)p=q;if(!o){b=Ee;j= -p.j5;k=p.j6;b.j6=j;b.j5=k;}else{b=Ee;j=p.j5;k= -p.j6;b.j6=j;b.j5=k;}b=Ee;g=g*g;j=b.j6;j=j*j;k=b.j5;k=j+k*k;if(k!==0.0&&k!==g){g=Cz(g/k);b.j6=b.j6*g;b.j5=b.j5*g;}j=c.j6;e.j6=j;k=c.j5;e.j5=k;b=Ee;e.j6=j+b.j6;e.j5=k+b.j5;return o;}b=D2;g=g*g;j=b.j6;j=j*j;k=b.j5;k=j+k*k;if(k!==0.0&&k!==g){g=Cz(g/k);b.j6=b.j6*g;b.j5=b.j5*g;}b=D2;g= -b.j5;j=b.j6;e.j6=g;e.j5=j;e.j6=g+c.j6;e.j5=j+c.j5;g
=b.j5;j= -b.j6;f.j6=g;f.j5=j;f.j6=g+c.j6;f.j5=j+c.j5;return 1;},
AXr=()=>{D2=new Bb;Fg=new Bb;Ee=new Bb;};
function OC(){let a=this;DH.call(a);a.q2=null;a.wb=null;a.xQ=null;a.rZ=null;}
let AEz=(a,b)=>{a.q2.nc.m6.so=D5(b);},
XP=(a,b)=>{b=a.q2.nc.m6;b.p$=1;b.no=0;},
XU=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.wb;if(e!==null)d.setAttribute("crossOrigin",Bw(e));a:{e=a.rZ;e.ld=e.ld+1|0;e=new K7;e.sU=a;e.Ah=b;e.xp=c;e.vD=d;d.addEventListener("load",B5(e,"handleEvent"),!!0);d.addEventListener("error",B5(e,"handleEvent"),!!0);if(!a.rZ.xW){b=Bw(b);d.src=b;}else{b=a.xQ;c=ANS(c);e=new K;e.jZ=G(16);D(e,e.jY,A(620));f=e.jY;if(b===null)b=A(2);D(e,f,b);D(e,e.jY,A(621));f=e.jY;if(c===null)c=A(2);D(e,f,c);b=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.j0=L(g.data,0,i);b=Bw(b);d.src=b;}return 0;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AFq=(a,b,c)=>{return XU(a,b,c);};
function KB(){let a=this;C.call(a);a.pS=null;a.op=null;}
let AIS=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pS.readyState==4){if(a.pS.status==200){if(a.op.nm.mL){if(BW===null){b=new CN;c=new Ck;c.lH=BI(32);b.l2=c;c=new K;Bt(c);c.jZ=G(16);b.lM=c;b.lL=G(32);b.lN=0;b.lO=Cg;BW=b;}b=a.op.ni;c=new K;c.jZ=G(16);D(c,c.jY,A(580));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g
=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BX(Bw(b));BX("\n");}else{b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}}i=a.pS.response;j=new Int8Array(i);b=a.op;c=b.nE;k=b.ni;b=new Il;b.np=j;b.ux=i;c.iZ(k,b);}else if(a.pS.status!=404&&a.pS.status!=403){try{l=V(100);$p=1;continue _;}catch($$e){$$je=Z($$e);if($$je instanceof Dq){}else{throw $$e;}}b=a.op;c=b.nm;d=b.ol;k=b.ni;b=b.nE;if(c.mL){if(BW===null){i=new CN;j=new Ck;j.lH=BI(32);Bt(i);i.l2=j;j=new K;DM(j,16);i.lM=j;i.lL=G(32);i.lN=0;i.lO=Cg;BW=i;}i=new K;i.jZ
=G(16);D(i,i.jY,A(102));D(i,i.jY,k===null?A(2):k);j=new I;e=i.jZ;f=e.data;h=i.jY;m=f.length;if(h>=0&&h<=(m-0|0)){j.j0=L(e.data,0,h);BX(Bw(j));BX("\n");}else{b=new H;R(b);B(b);}}c.ld=c.ld+1|0;i=new F0;i.nm=c;i.ol=d;i.ni=k;i.nE=b;b=null;c=null;i.mW=new C;i.mV=1;i.ny=c;i.nS=b;g=CR;CR=g+1|0;i.nR=V(g);b=new El;b.nz=i;EF(b);}else{b=a.op;b.nE.i0(b.ni);}b=a.op.nm;b.ld=b.ld-1|0;}return;case 1:a:{try{K8(l);if(Fv()){break _;}break a;}catch($$e){$$je=Z($$e);if($$je instanceof Dq){}else{throw $$e;}}}b=a.op;c=b.nm;d=b.ol;k
=b.ni;b=b.nE;if(c.mL){if(BW===null){i=new CN;j=new Ck;j.lH=BI(32);Bt(i);i.l2=j;j=new K;DM(j,16);i.lM=j;i.lL=G(32);i.lN=0;i.lO=Cg;BW=i;}i=new K;i.jZ=G(16);D(i,i.jY,A(102));D(i,i.jY,k===null?A(2):k);j=new I;e=i.jZ;f=e.data;h=i.jY;m=f.length;if(h>=0&&h<=(m-0|0)){j.j0=L(e.data,0,h);BX(Bw(j));BX("\n");}else{b=new H;R(b);B(b);}}c.ld=c.ld+1|0;i=new F0;i.nm=c;i.ol=d;i.ni=k;i.nE=b;b=null;c=null;i.mW=new C;i.mV=1;i.ny=c;i.nS=b;g=CR;CR=g+1|0;i.nR=V(g);b=new El;b.nz=i;EF(b);b=a.op.nm;b.ld=b.ld-1|0;return;default:Fm();}}Db().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
ASh=(a,b)=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AIS(a,b);if(Fv()){break _;}return;default:Fm();}}Db().s(a,b,$p);};
let ABe=F();
function K7(){let a=this;C.call(a);a.Ah=null;a.xp=null;a.vD=null;a.sU=null;}
let AE3=(a,b)=>{let c,d;c=U(b.type);if(c===A(622))d=1;else if(!(A(622) instanceof I))d=0;else{b=A(622);d=c.j0!==b.j0?0:1;}if(d){b=a.sU.q2.nc.m6;b.p$=1;b.no=0;}else{b=a.xp;b.uI=a.vD;c=a.sU.q2;GY(c.ru,c.rG,c.rk,b);b=c.nc.m6;b.qy=1;b.no=0;}b=a.sU.rZ;b.ld=b.ld-1|0;},
ADo=(a,b)=>{AE3(a,b);};
AT$([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",11,"actions",7,"graphics",15,"g2d",7,"math",0,"mygdx",18,"game",-1,"java",20,"util",21,"regex",20,"nio",23,"charset",20,"lang"]);
C7([C,"Object",25,0,[],0,3,0,0,["cT",P(G_),"cN",N(AJo),"T",P(PP)],AQj,0,C,[],0,3,0,0,0,Os,0,C,[],0,3,0,SS,0,Of,0,C,[],3,3,0,0,0,Mm,0,C,[Of],0,3,0,0,0,CW,0,C,[],3,3,0,0,0,Nj,0,Mm,[CW],0,3,0,0,0,BA,0,C,[],3,3,0,0,0,FD,0,C,[BA],0,3,0,0,0,Dm,0,C,[],3,3,0,0,0,B8,0,C,[],3,3,0,0,0,BG,0,C,[Dm,B8],1,3,0,0,["T",P(AFw),"cN",N(YD)],Hg,0,BG,[],12,3,0,0,0,CE,"Actor",11,C,[],0,3,0,0,["be",N(G5),"J",Bd(RV),"x",N(AOt),"Z",N(ANy),"T",P(SX)],Mp,0,C,[],3,3,0,0,0,BJ,"Group",11,CE,[Mp],0,3,0,0,["be",N(RF),"bP",Bs(AHS),"Z",N(O$),
"J",Bd(H6),"x",N(AN4),"T",P(ABK)],Gi,0,C,[],3,3,0,0,0,DG,"Iterable",25,C,[],3,3,0,0,0,GX,0,C,[Gi,DG],0,3,0,0,0,GA,0,C,[],3,3,0,0,0,B2,0,C,[GA],0,3,0,0,0,He,0,B2,[],0,3,0,0,0,AL1,0,He,[],0,0,0,0,0,GF,"FocusListener$FocusEvent$Type",13,BG,[],12,3,0,0,0,Nl,0,C,[],3,3,0,0,0,IV,0,C,[Nl],3,3,0,0,0,Gy,0,C,[],3,3,0,0,0,DD,0,C,[Gy],1,3,0,0,0,APe,0,DD,[],0,0,0,0,0,M6,0,GX,[],0,3,0,0,0,MG,0,C,[GA],0,3,0,0,0,ACN,0,C,[],1,3,0,0,0,Xo,0,C,[],0,3,0,0,0,V4,0,C,[],3,3,0,0,0,LJ,0,C,[V4],0,3,0,0,0,ALp,0,LJ,[],0,0,0,0,0,C1,"FocusListener$FocusEvent",
13,FD,[],0,3,0,0,["bt",P(Wg)],Rr,0,C,[],32,0,0,Wt,0,AJk,0,C,[],1,3,0,0,0,Tp,0,C,[],32,0,0,R7,0,APd,0,DD,[],0,0,0,0,0,Fj,0,C,[Nl],0,3,0,0,0,Tk,0,Fj,[IV],0,3,0,0,0,Wc,0,C,[],4,3,0,Uk,0,LY,0,C,[GA],1,3,0,0,0,ARP,0,He,[],0,3,0,0,0,AEb,0,C,[],0,3,0,0,0,UV,0,C,[],0,3,0,VB,0,Nd,0,C,[GA],1,3,0,0,0,IE,0,Fj,[IV],0,3,0,0,0]);
C7([VY,0,Fj,[IV],0,3,0,0,0,D9,0,B2,[],0,3,0,0,0,VQ,0,IE,[],0,3,0,0,0,ABs,0,FD,[],0,3,0,0,0,KA,0,C,[],3,3,0,0,0,Y,"InputEvent",11,FD,[],0,3,0,0,["bt",P(Qg),"T",P(OM)],DR,"Stage$TouchFocus",11,C,[BA],4,3,0,0,["bt",P(OZ)],N1,0,C,[],32,0,0,L6,0,Dn,"InputEvent$Type",11,BG,[],12,3,0,0,0,BP,"Action",11,C,[BA],1,3,0,0,["bY",P(AMK),"bx",N(ANq),"bt",P(Z_),"T",P(ANt)],ER,0,BP,[],1,3,0,0,0,AGb,0,ER,[],0,3,0,0,0,AK1,0,ER,[],0,3,0,0,0,C3,0,BP,[],1,3,0,0,["bu",N(ARB),"bY",P(ATD)],EH,0,C3,[],1,3,0,0,0,XM,0,EH,[],0,3,0,0,0,Z7,
0,C,[GA],0,0,0,0,0,NN,0,BP,[],0,3,0,0,["bt",P(ALc),"bx",N(ANI),"T",P(AI$)],Dd,"SequenceAction",14,NN,[],0,3,0,0,["bu",N(Od),"bY",P(UO)],AD5,0,BP,[],0,3,0,0,0,AIq,0,BP,[],0,3,0,0,0,ANo,0,BP,[],0,3,0,0,0,AOj,0,C,[],0,3,0,0,0,LQ,0,BP,[],1,3,0,0,0,AHK,0,LQ,[],0,3,0,0,0,Do,"MoveToAction",14,C3,[],0,3,0,0,["bt",P(Ur)],AO$,0,C3,[],0,3,0,0,0,APL,0,EH,[],0,3,0,0,0,ALL,0,BP,[],0,3,0,0,0,AMi,0,EH,[],0,3,0,0,0,ARq,0,C3,[],0,3,0,0,0,AQJ,0,C3,[],0,3,0,0,0,AEE,0,BP,[],0,3,0,0,0,AHf,0,C3,[],0,3,0,0,0,AHv,0,BP,[],0,3,0,0,0,AFa,
0,BP,[],0,3,0,0,0,AHN,0,ER,[],0,3,0,0,0,YH,0,C3,[],0,3,0,0,0,ARz,0,BP,[],0,3,0,0,0,ALg,0,EH,[],0,3,0,0,0,AER,0,ER,[],0,3,0,0,0,AKq,0,BP,[],0,3,0,0,0,Z9,0,C3,[],0,3,0,0,0,AGP,0,C3,[],0,3,0,0,0,ABm,0,C,[CW],0,3,0,0,0,C_,0,BJ,[KA],0,3,0,0,0,Er,0,C_,[],0,3,0,QY,0,FU,0,Er,[Gi],0,3,0,0,0,LB,0,FU,[],0,3,0,0,0,ACh,0,LB,[],0,3,0,0,0]);
C7([APa,0,B2,[],0,0,0,0,0,ME,0,C_,[],0,3,0,0,0,Sd,0,C,[],3,3,0,0,0,EA,0,C,[Sd],1,3,0,0,0,AEu,0,EA,[],0,0,0,0,0,Dk,0,CE,[KA],0,3,0,0,0,Y1,0,Dk,[],0,3,0,0,0,AO_,0,B2,[],0,0,0,0,0,B4,0,C,[],1,3,0,Ij,0,Tv,0,B4,[],0,0,0,0,0,ALq,0,B4,[],0,0,0,0,0,Kt,0,D9,[],0,3,0,0,0,AHC,0,Kt,[],0,3,0,0,0,VT,0,B4,[],0,0,0,0,0,ARc,0,B2,[],0,0,0,0,0,Md,0,Er,[],0,3,0,0,0,ALr,0,B4,[],0,0,0,0,0,Gg,0,C,[],3,3,0,0,0,D$,0,C,[B8,Gg],0,3,0,0,0,DO,"Table$DebugRect",12,D$,[],0,3,0,J1,0,AEy,0,EA,[],0,0,0,0,0,MU,0,Dk,[Gi],0,3,0,0,0,ACx,0,MU,[],
0,3,0,0,0,AGT,0,B2,[],0,0,0,0,0,Qq,0,C,[],3,3,0,0,0,ANv,0,C,[Qq],0,3,0,0,0,Gn,0,C,[],0,3,0,0,0,GJ,0,Gn,[],0,3,0,0,0,Ud,0,GJ,[],0,3,0,0,0,MZ,0,Dk,[Gi],0,3,0,0,0,AFU,0,MZ,[],0,3,0,0,0,AS7,0,ME,[],0,0,0,0,0,KC,0,C_,[],0,3,0,0,0,ATR,0,FU,[],0,3,0,0,0,Np,0,Dk,[Mp],0,3,0,0,0,VR,0,B4,[],0,0,0,0,0,UQ,0,C,[],0,3,0,0,0,AE5,0,C,[Gy],0,0,0,0,0,AHG,0,B2,[],0,0,0,0,0,AJt,0,DD,[],0,0,0,0,0,AGf,0,C,[],0,3,0,0,0,AM3,0,B2,[],0,0,0,0,0,ASN,0,D9,[],0,0,0,0,0,AGR,0,MG,[],0,0,0,0,0,Tr,0,B4,[],0,0,0,0,0,Tu,0,B4,[],0,0,0,0,0,SY,0,
C,[],3,3,0,0,0,JZ,0,C,[],0,3,0,0,0,OX,0,JZ,[],0,3,0,0,0,AEv,0,EA,[],0,0,0,0,0]);
C7([AO9,0,LY,[],0,0,0,0,0,APb,0,Nd,[],0,0,0,0,0,ARd,0,B2,[],0,0,0,0,0,ARe,0,D9,[],0,0,0,0,0,VS,0,B4,[],0,0,0,0,0,OP,0,C,[BA],0,3,0,Uf,0,R3,0,GJ,[],0,3,0,0,0,AG6,0,B2,[],0,0,0,0,0,Zn,0,DD,[],0,0,0,0,0,Tw,0,B4,[],0,0,0,0,0,ACT,0,C_,[],0,3,0,0,0,AGS,0,B2,[],0,0,0,0,0,Su,0,C,[],0,3,0,0,0,Jh,0,B4,[],0,3,0,0,0,AE6,0,KC,[],0,3,0,0,0,Ts,0,B4,[],0,0,0,0,0,AIh,0,Dk,[Gi],0,3,0,0,0,AG0,0,M6,[],0,0,0,0,0,Vu,0,C,[],0,3,0,0,0,Pc,0,Dk,[],0,3,0,Uv,0,Pl,0,C,[],0,3,0,0,0,ALt,0,B4,[],0,0,0,0,0,VU,0,B4,[],0,0,0,0,0,AOr,0,Md,[],
0,3,0,0,0,Tt,0,B4,[],0,0,0,0,0,Rs,0,C,[],0,3,0,0,0,ASC,0,C,[],0,3,0,0,0,Fy,0,BG,[],12,3,0,0,0,ASV,0,B4,[],0,0,0,0,0,AGG,0,DD,[],0,0,0,0,0,Dj,0,C,[],1,3,0,0,0,VV,0,Dj,[],0,0,0,0,0,Zc,0,C,[SY],0,3,0,0,0,VE,0,C,[],0,3,0,0,0,SJ,0,C,[],0,3,0,0,0,Tm,0,C,[],0,3,0,0,0,Nn,0,B2,[],0,3,0,0,0,Zm,0,DD,[],0,0,0,0,0,ARf,0,Np,[],0,0,0,0,0,Zf,0,C,[],3,3,0,0,0,AG7,0,B2,[],0,0,0,0,0,ATG,0,C_,[],0,3,0,0,0,AKY,0,C_,[],0,3,0,0,0,AG2,0,D9,[],0,0,0,0,0,Na,0,C,[],0,3,0,0,0,AEt,0,Na,[],0,0,0,0,0,AQQ,0,CE,[CW],0,3,0,0,0,Yp,0,B2,[],0,
0,0,0,0,AOO,0,FU,[],0,3,0,0,0,AJ1,0,B2,[],0,0,0,0,0]);
C7([ASi,0,D9,[],0,0,0,0,0,UW,0,Gn,[],0,3,0,0,0,AK5,0,C_,[],0,3,0,0,0,Sz,0,C,[],0,3,0,0,0,RH,0,C,[],0,3,0,0,0,AJB,0,Dk,[],0,3,0,0,0,ASO,0,GX,[],0,0,0,0,0,Yr,0,B2,[],0,0,0,0,0,AMH,0,C_,[],0,3,0,0,0,AS5,0,Nn,[],0,3,0,0,0,Ys,0,Er,[],0,0,0,0,0,AEw,0,EA,[],0,0,0,0,0,WJ,0,C,[],1,3,0,0,0,VP,0,C,[],0,3,0,0,0,Vm,0,C,[B8],0,3,0,Vo,0,BO,0,C,[],1,3,0,JJ,0,PG,0,BO,[],0,3,0,0,0,AGJ,0,C,[],0,3,0,0,0,T4,0,BO,[],0,0,0,0,0,ARK,0,C,[],0,3,0,0,0,EB,0,BO,[],0,3,0,0,0,HO,0,EB,[],0,3,0,0,0,HI,0,EB,[],0,3,0,0,0,Jw,0,C,[],3,3,0,0,0,ABM,
0,C,[Jw],0,3,0,0,0,T7,0,BO,[],0,0,0,0,0,APp,0,C,[Gg],0,3,0,0,0,T3,0,BO,[],0,0,0,0,0,Gw,0,BO,[],0,3,0,0,0,T2,0,BO,[],0,0,0,0,0,T1,0,BO,[],0,0,0,0,0,ALx,0,C,[],4,3,0,0,0,Xn,0,Dj,[],0,0,0,0,0,I$,0,C,[],3,3,0,0,0,Bb,"Vector2",17,C,[B8,I$],0,3,0,0,["T",P(AA6),"cN",N(ADE)],Td,0,BO,[],0,0,0,0,0,FP,0,BO,[],0,3,0,0,0,AJx,0,C,[],0,3,0,0,0,T9,0,BO,[],0,0,0,0,0,NJ,0,FP,[],0,3,0,0,0,AE1,0,C,[BA],0,3,0,0,0,Hn,0,BG,[],12,3,0,0,0,SF,0,C,[],0,3,0,R_,0,GS,0,BO,[],0,3,0,0,0,RY,0,GS,[],0,3,0,0,0,S_,0,BO,[],0,0,0,0,0,S1,0,C,[B8],
4,3,0,0,0,T0,0,BO,[],0,0,0,0,0,F4,0,C,[B8,I$],0,3,0,0,0,O3,0,Gw,[],0,3,0,0,0]);
C7([RB,0,BO,[],0,3,0,0,0,ABw,0,C,[],0,3,0,0,0,ATp,0,C,[Gg],0,3,0,0,0,T5,0,BO,[],0,0,0,0,0,VG,0,BO,[],0,3,0,0,0,Te,0,BO,[],0,0,0,0,0,Rz,0,Gw,[],0,3,0,0,0,Wp,0,C,[B8],0,3,0,Qa,0,Ky,0,C,[B8],0,3,0,NY,0,LV,0,C,[B8],0,3,0,Ms,0,ABV,0,C,[B8],0,3,0,0,0,X2,0,C,[B8],0,3,0,0,0,AMX,0,C,[B8,Gg],0,3,0,0,0,AF6,0,C,[Jw],0,3,0,0,0,TE,0,C,[],4,3,0,Gx,0,U4,0,C,[],4,3,0,QT,0,Zt,0,C,[],4,3,0,0,0,QW,0,GS,[],0,3,0,0,0,LD,0,C,[B8],0,3,0,Eh,0,PS,0,C,[],3,3,0,0,0,Mt,0,C,[PS,B8],0,3,0,0,0,S5,0,Mt,[],0,3,0,0,0,Tc,0,BO,[],0,0,0,0,0,T6,
0,BO,[],0,0,0,0,0,M5,0,C,[],0,3,0,IZ,0,Ep,0,C,[B8],0,3,0,0,0,Ol,0,C,[],0,3,0,0,0,AKV,0,C,[],0,3,0,0,0,Bn,0,C,[B8,I$],0,3,0,CT,0,AE4,0,C,[B8,Gg],0,3,0,0,0,ACZ,0,Dj,[],0,0,0,0,0,L4,0,FP,[],0,3,0,0,0,ALu,0,C,[Jw],0,3,0,0,0,ZW,0,C,[],0,3,0,0,0,APO,0,C,[B8],0,3,0,0,0,JO,0,C,[B8],0,3,0,0,0,Tb,0,BO,[],0,0,0,0,0,APS,0,C,[],0,3,0,0,0,Z5,0,C,[],0,3,0,0,0,AML,0,C,[],0,3,0,0,0,APM,0,C,[B8],0,3,0,0,0,AKe,0,C,[],3,3,0,0,0,AFh,0,C,[B8],0,3,0,0,0,ANC,0,C,[],0,0,0,0,0,Kq,0,C,[BA],0,3,0,Mq,0,H8,0,C,[],0,3,0,0,["b_",BS(Pm)],Jo,
0,H8,[],0,3,0,0,["b_",BS(APg)],Q9,0,C,[CW],0,3,0,0,0,AMq,0,C,[],0,3,0,0,0,BM,0,C,[],0,3,0,0,0]);
C7([NW,0,C,[CW],1,3,0,0,0,HU,0,NW,[],0,3,0,0,["T",P(AKf)],Bg,"Array",8,C,[DG],0,3,0,0,["cN",N(Sj),"T",P(Vn)],J6,0,C,[DG],0,3,0,0,0,AFP,0,J6,[],0,3,0,0,0,ASA,0,C,[DG],0,3,0,0,0,DV,0,C,[],4,3,0,0,["cN",N(AKn)],ASS,0,C,[],0,3,0,0,0,AHl,0,C,[],0,3,0,0,0,AKS,0,C,[],0,3,0,0,0,AIR,0,C,[],0,3,0,0,0,RJ,0,C,[],0,3,0,SZ,0,Yl,0,C,[],0,3,0,0,0,AJJ,0,C,[],0,3,0,0,0,AIs,0,C,[],0,3,0,0,0,AJe,0,C,[],0,3,0,0,0,APn,0,C,[],0,3,0,0,0,AFc,0,C,[],0,3,0,0,0,AQV,0,C,[],0,3,0,0,0,AGY,0,C,[],0,3,0,0,0,AAd,0,C,[],0,3,0,0,0,ABC,0,C,[],
0,3,0,0,0,JN,0,BG,[],12,3,0,0,0,AJO,0,C,[],0,3,0,0,0,TL,0,C,[],3,3,0,0,0,Dz,0,C,[],0,3,0,0,0,Yw,0,Dz,[],0,3,0,0,0,Yu,0,Dz,[],0,3,0,0,0,AHT,0,Dz,[],0,3,0,0,0,ACR,0,Dz,[],0,3,0,0,0,AMZ,0,Dz,[],0,3,0,0,0,LZ,0,Dz,[],0,3,0,0,0,ACF,0,LZ,[],0,3,0,0,0,HB,0,C,[],3,3,0,0,0,ADQ,0,C,[CW,HB],0,3,0,0,0,Fh,0,C,[],3,3,0,0,0,AMJ,0,C,[Fh,HB],0,3,0,0,0,AQR,0,C,[Fh],0,3,0,0,0,AA4,0,C,[],0,3,0,0,0,EI,0,C,[Fh],0,3,0,0,0,ALD,0,EI,[],0,3,0,0,0,Ht,0,EI,[HB,Fh],1,3,0,0,0,DP,0,Ht,[],1,3,0,Q8,0,AMp,0,C,[],0,3,0,0,0,APl,0,DP,[],4,3,0,0,
0,AHa,0,DP,[],4,3,0,0,0,ARG,0,EI,[],0,3,0,0,0,Lm,0,EI,[],0,3,0,0,0,Ye,0,Lm,[],0,3,0,0,0,ACB,0,DP,[],4,3,0,0,0]);
C7([G1,0,Ht,[],1,3,0,0,0,AIL,0,G1,[],4,3,0,0,0,AG9,0,DP,[],4,3,0,0,0,AJh,0,DP,[],4,3,0,0,0,AIJ,0,G1,[],4,3,0,0,0,Hr,0,BG,[],12,3,0,0,0,FS,0,C,[CW,Fh,HB],1,3,0,0,0,MW,0,FS,[Fh],1,3,0,0,0,WS,0,MW,[Fh],0,3,0,0,0,HJ,0,BG,[],12,3,0,0,0,C2,0,FS,[],1,3,0,0,0,H$,0,C2,[],1,3,0,0,0,AAQ,0,C,[],0,3,0,0,0,GD,0,C2,[],1,3,0,Uw,0,Ew,0,GD,[],1,3,0,0,0,FY,0,Ew,[],1,3,0,0,0,ADM,0,FY,[],0,3,0,0,0,HH,0,C2,[],1,3,0,0,0,ATw,0,HH,[],0,3,0,0,0,APi,0,C2,[],0,3,0,0,0,Fw,0,C2,[],1,3,0,0,0,Yo,0,Fw,[],0,3,0,0,0,Hd,0,C2,[],1,3,0,0,0,ADD,
0,Ew,[],0,3,0,0,0,AF2,0,Ew,[],0,3,0,0,0,KL,0,C2,[],1,3,0,0,0,ALE,0,KL,[],0,3,0,0,0,ZJ,0,Fw,[],0,3,0,0,0,AHj,0,FY,[],0,3,0,0,0,ALv,0,C2,[],0,3,0,0,0,AJs,0,Fw,[],0,3,0,0,0,ALK,0,C2,[],0,3,0,0,0,ANw,0,GD,[],0,3,0,0,0,AF9,0,Dj,[],0,0,0,0,0,AAp,0,Dj,[],0,0,0,0,0,AAH,0,Ew,[],0,3,0,0,0,AMd,0,Hd,[],0,3,0,0,0,ARI,0,H$,[],0,3,0,0,0,AKo,0,H$,[],0,3,0,0,0,ANg,0,Hd,[],0,3,0,0,0,AIf,0,FY,[],0,3,0,0,0,ASp,0,HH,[],0,3,0,0,0,EG,0,FS,[],1,3,0,0,0,AIQ,0,EG,[],0,3,0,0,0,FC,0,C,[],1,3,0,0,0,AMD,0,FC,[],0,3,0,0,0,AN0,0,EG,[],0,3,
0,0,0,APh,0,EG,[],0,3,0,0,0,AQi,0,FC,[],0,3,0,0,0,ADk,0,EG,[],0,3,0,0,0]);
C7([APo,0,FC,[],0,3,0,0,0,Kn,0,C,[],3,3,0,0,0,Oa,0,C,[],3,3,0,0,0,BC,"Class",25,C,[Kn,Oa],0,3,0,0,["T",P(AIH)],ABJ,0,C,[],4,0,0,0,0,AAw,0,C,[],4,3,0,0,0,Dq,0,C,[],0,3,0,0,["c4",P(AOe)],BF,0,Dq,[],0,3,0,0,0,Bz,"RuntimeException",25,BF,[],0,3,0,0,0,AG4,"ClassCastException",25,Bz,[],0,3,0,0,0,JX,0,C,[],3,3,0,0,0,I,"String",25,C,[B8,Dm,JX],0,3,0,0,["T",P(Cl),"cN",N(AQ8),"cT",P(AK$)],Ev,0,C,[B8],1,3,0,0,0,Fu,0,Ev,[Dm],0,3,0,0,0,Bc,0,C,[B8,JX],0,0,0,0,["c9",N(Is),"T",P(Mn)],IS,0,C,[],3,3,0,0,0,K,0,Bc,[IS],0,3,0,0,
["gw",BS(AHJ),"jw",Bd(ACE),"T",P(Et),"c9",N(AH9),"dd",Bs(AIY)],Rn,0,C,[],0,3,0,0,0,P5,0,C,[],3,3,0,0,0,LO,0,C,[P5,Gy],0,3,0,0,0,VK,0,C,[],3,3,0,0,0,My,0,C,[VK],1,3,0,0,0,P7,0,My,[],0,3,0,0,0,AOb,0,C,[],4,3,0,0,0,H2,0,BG,[],12,3,0,0,0,OA,0,C,[],3,3,0,0,0,Cs,0,C,[],3,3,0,0,0,RI,0,C,[Cs],3,3,0,0,0,Jn,0,C,[OA,RI],0,3,0,E4,["jx",N(AL8)],ALN,0,C,[],0,3,0,0,0,Rb,0,C,[],0,3,0,Cw,0,FR,0,Ev,[Dm],0,3,0,0,0,GE,0,C,[],0,3,0,0,0,AGa,0,C,[],4,3,0,0,0,DN,"GlyphLayout$GlyphRun",16,C,[BA],0,3,0,0,0,FL,0,C,[],0,3,0,0,0,Mf,0,C,
[],3,3,0,0,0,KU,0,C,[Mf],1,3,0,0,0,Fd,0,C,[],3,3,0,0,0,I0,0,KU,[Fd,B8],0,3,0,0,0,Ib,"Comparator",21,C,[],3,3,0,0,0,NM,0,C,[Ib],0,3,0,0,0,MN,0,C,[Dm],0,3,0,0,0,ACr,0,C,[],0,3,0,0,0,AMk,0,C,[],4,3,0,0,0,N0,0,C,[],3,3,0,0,0,O7,0,C,[N0],0,3,0,0,0,ABQ,0,C,[],0,3,0,0,0,AEL,0,C,[],0,3,0,0,0,Ty,0,C,[],3,3,0,0,0]);
C7([KD,0,C,[Ty],0,3,0,EC,0,Ou,0,C,[],0,3,0,0,0,DH,0,C,[],0,3,0,0,["g2",N(AJw)],Th,0,C,[],3,3,0,0,0,Es,0,C,[Cs],3,3,0,0,0,Mh,0,C,[Th,Es],0,3,0,0,["jy",N(Yj)],SB,0,C,[],3,3,0,0,0,Uq,0,C,[SB],0,3,0,0,0,TI,0,C,[TL],0,3,0,0,0,Tz,0,C,[],3,3,0,0,0,Rk,0,C,[Tz],0,3,0,0,0,PN,0,C,[],3,3,0,0,0,TD,0,C,[PN],0,3,0,0,0,AKv,0,C,[],0,3,0,0,0,Uu,0,C,[],3,3,0,0,0,TJ,0,C,[Uu],3,3,0,0,0,QK,0,C,[TJ],0,3,0,0,0,Kf,0,C,[Es],0,0,0,0,["jy",N(AM6)],Kg,0,C,[Es],0,0,0,0,["jy",N(AR4)],Bk,"IllegalArgumentException",25,Bz,[],0,3,0,0,0,AP1,0,
C,[],4,3,0,0,0,ZL,0,C,[DG],0,3,0,0,0,AIc,0,Ev,[Dm],0,3,0,0,0,AHI,0,C,[Cs],1,3,0,0,0,L$,0,C,[],3,3,0,0,0,GT,"TeaGL20",5,C,[L$],0,3,0,0,["ih",Bs(AFn),"is",Bs(ARW),"cA",Bs(AAS),"he",BS(AEs),"eA",BS(Lh),"eB",BS(Lg),"hp",N(APx),"ho",BS(AA8),"ie",N(AGs),"ia",P(ASG),"ic",N(AL_),"g$",N(APy),"bb",N(ALR),"iv",N(AKi),"hV",Bd(ABI),"hW",BS(AHh),"h0",BS(AJN),"W",N(ARx),"it",N(AQe),"iW",N(WY),"eC",BS(Kw),"eD",BS(L1),"im",Bs(AC_),"cl",Bs(Jj),"g9",N(ASx),"eE",Bd(Mr),"ig",N(AH2),"eF",Bd(KY),"dV",N(AD8),"ij",Bs(AD2),"ii",N(Zi),
"cw",Bs(ABH),"id",Bs(WX),"cz",function(b,c,d,e,f,g,h,i,j){MC(this,b,c,d,e,f,g,h,i,j);},"cG",Bd(AIU),"cg",Bd(ALl),"hl",Bs(ALQ),"hb",N(Zk),"iu",function(b,c,d,e,f,g){AIu(this,b,c,d,e,f,g);},"dD",BS(Xk)],SA,0,C,[L$],3,3,0,0,0,J2,"TeaGL30",5,GT,[SA],0,3,0,0,["iz",N(AES),"hX",BS(AJ_),"hZ",function(b,c,d,e,f){ATh(this,b,c,d,e,f);},"ix",Bs(AKM),"cl",Bs(AHp)],O8,"TeaGL30Debug",5,J2,[],0,3,0,0,["iz",N(ADh),"hX",BS(Z3),"hZ",function(b,c,d,e,f){ARN(this,b,c,d,e,f);},"ix",Bs(Y8),"cA",Bs(ZV),"hp",N(APC),"ho",BS(AIZ),"g$",
N(Y5),"bb",N(AQh),"hV",Bd(ACw),"hW",BS(AMm),"W",N(AN5),"dV",N(WI),"cw",Bs(XV),"cz",function(b,c,d,e,f,g,h,i,j){AJu(this,b,c,d,e,f,g,h,i,j);},"cG",Bd(ACe),"dD",BS(AEH),"ih",Bs(AH$),"is",Bs(AQ$),"he",BS(ADj),"eA",BS(AI_),"eB",BS(AQ0),"ie",N(AKD),"ia",P(ASF),"ic",N(AMG),"iv",N(ASu),"h0",BS(ZA),"it",N(AMN),"iW",N(API),"eC",BS(AF$),"eD",BS(APz),"im",Bs(AJV),"cl",Bs(ADs),"eE",Bd(AA_),"g9",N(XT),"eF",Bd(ASD),"ig",N(YN),"ij",Bs(XW),"ii",N(ARD),"id",Bs(XR),"cg",Bd(Zh),"hl",Bs(AAo),"hb",N(ATm),"iu",function(b,c,d,e,f,
g){ANA(this,b,c,d,e,f,g);}],Qz,0,C,[],0,3,0,0,0,EY,0,BG,[],12,3,0,0,0,TS,0,C,[Cs],3,3,0,0,0,MH,0,C,[TS],0,0,0,0,["jz",P(ACn)],VH,"TeaGL20Debug",5,GT,[],0,3,0,0,["cA",Bs(ASa),"hp",N(ABg),"ho",BS(ACc),"g$",N(AI9),"bb",N(ASW),"hV",Bd(AGq),"hW",BS(ASm),"W",N(ZD),"dV",N(AHO),"cw",Bs(AKI),"cz",function(b,c,d,e,f,g,h,i,j){ADt(this,b,c,d,e,f,g,h,i,j);},"cG",Bd(ACL),"dD",BS(ASy),"ih",Bs(XO),"is",Bs(WE),"he",BS(WC),"eA",BS(AHg),"eB",BS(AEV),"ie",N(AS8),"ia",P(ALe),"ic",N(ASL),"iv",N(AK9),"h0",BS(AFd),"it",N(ASX),"iW",
N(AJ7),"eC",BS(AHk),"eD",BS(Z1),"im",Bs(AFo),"cl",Bs(Xp),"eE",Bd(ADz),"g9",N(ADH),"eF",Bd(X4),"ig",N(ANH),"ij",Bs(AP0),"ii",N(AIB),"id",Bs(ASk),"cg",Bd(APR),"hl",Bs(ASE),"hb",N(X6),"iu",function(b,c,d,e,f,g){AAX(this,b,c,d,e,f,g);}],TX,0,C,[DG],0,3,0,0,0,Sc,0,C,[],0,3,0,0,0,UK,0,C,[Cs],3,3,0,0,0,Mb,0,C,[UK],0,0,0,0,["jA",P(XG),"jB",P(ABU),"jC",P(Xg)],V1,0,C,[],3,3,0,0,0,V$,0,C,[V1],0,3,0,0,0,Ov,0,DH,[],0,0,0,0,0,UG,"CloneNotSupportedException",25,BF,[],0,3,0,0,0,CB,0,Dj,[],0,3,0,0,0,H,"IndexOutOfBoundsException",
25,Bz,[],0,3,0,0,0,E8,0,C,[Cs],3,3,0,0,0,Qc,0,C,[E8],3,3,0,0,0,RP,0,C,[E8],3,3,0,0,0,RE,0,C,[E8],3,3,0,0,0,Ta,0,C,[E8],3,3,0,0,0,VX,0,C,[E8],3,3,0,0,0]);
C7([T8,0,C,[E8,Qc,RP,RE,Ta,VX],3,3,0,0,0,PQ,0,C,[],3,3,0,0,0,KW,0,C,[Cs],3,3,0,0,0,OS,0,C,[Cs,T8,PQ,KW],1,3,0,0,["jD",N(ALG),"jE",Bs(APf),"jF",Bs(AOv),"jG",Bd(ALs),"jH",N(ARo),"jI",P(AAY),"jJ",Bd(Xf)],LM,0,C,[],1,3,0,0,0,JT,0,LM,[Mf,Fd,B8],0,3,0,0,0,MV,0,JT,[],0,3,0,0,0,AFE,0,C,[],0,3,0,0,0,GB,0,BG,[],12,3,0,0,0,DJ,0,C,[Cs],1,3,0,0,0,ACJ,0,DJ,[],1,3,0,0,0,ABW,0,DJ,[],1,3,0,0,0,AHq,0,DJ,[],1,3,0,0,0,AKF,0,DJ,[],1,3,0,0,0,AFX,0,DJ,[],1,3,0,0,0,Lr,0,C,[Es],0,0,0,0,["jy",N(AGU)],Ls,0,C,[Es],0,0,0,0,["jy",N(ASn)],Lq,
0,C,[Es],0,0,0,0,["jy",N(AMy)],Sl,0,Dj,[],0,3,0,0,0,US,0,C,[Cs],3,3,0,0,0,Kp,0,C,[US],0,0,0,0,["jK",P(AC4)],ABG,0,DJ,[],1,3,0,0,0,Ry,0,C,[B8],4,3,0,0,0,Ns,0,C,[],3,3,0,0,0,SC,0,C,[Ns],4,3,0,0,0,Z$,0,C,[],4,3,0,0,0,KS,0,C,[],4,3,0,0,0,B7,"ReflectionException",9,BF,[],0,3,0,0,0,EJ,0,C,[],4,3,0,BD,0,Rc,0,C,[],3,3,0,0,0,Km,0,C,[Rc],0,0,0,0,0,HQ,"Iterator",21,C,[],3,3,0,0,0,Kl,0,C,[HQ],0,0,0,0,0,Ul,0,C,[Ns],0,0,0,0,0,Cu,"NumberFormatException",25,Bk,[],0,3,0,0,0,KJ,0,Bz,[],0,3,0,0,0,Ex,0,BF,[],0,3,0,0,0,Hj,"NoSuchMethodException",
25,Ex,[],0,3,0,0,0,Df,"NullPointerException",25,Bz,[],0,3,0,0,0,Cb,0,C,[],1,0,0,0,["fA",Bd(ACi),"f4",BS(AFe),"fn",P(AAn),"T",P(ANV),"e8",N(AQx),"fm",N(AQv),"fK",P(ASc),"e4",P(Ih)],MR,0,C,[Kn],0,3,0,0,0,ARY,0,C,[Cs],1,3,0,0,0,AEj,0,C,[Cs],1,3,0,0,0,ATH,0,C,[Cs],1,3,0,0,0,KZ,0,C,[Cs],3,3,0,0,0,Ml,0,C,[KZ],0,3,0,0,["jL",N(AQF)],AFT,0,C,[Cs],1,3,0,0,0,Mk,0,C,[KZ],0,3,0,0,["jL",N(YT)],N5,0,C,[],3,3,0,0,0,Hv,0,C,[N5,Fd],0,0,0,0,0]);
C7([IG,0,Hv,[],0,0,0,0,0,Ds,0,Cb,[],0,0,0,DZ,["fI",Bd(Zg),"fJ",P(AFO),"gi",N(ZY)],To,0,C,[],0,0,0,0,0,Cj,"PatternSyntaxException",22,Bk,[],0,3,0,0,["c4",P(AR6)],Zo,0,C,[],0,3,0,0,0,KI,0,C,[DG],3,3,0,0,0,L8,0,C,[KI],1,3,0,0,0,R$,0,C,[KI],3,3,0,0,0,Ot,0,C,[R$],3,3,0,0,0,KK,0,L8,[Ot],1,3,0,0,0,TF,0,C,[],3,3,0,0,0,KH,0,KK,[Fd,B8,TF],0,3,0,0,0,R5,0,Ds,[],0,0,0,0,["fI",Bd(X3),"fJ",P(ABY),"gi",N(AOp)],V_,0,Ds,[],0,0,0,0,["fI",Bd(ABy),"fJ",P(AG5)],Qt,0,Ds,[],0,0,0,0,["fI",Bd(AAk),"fJ",P(AQo)],SN,0,Ds,[],0,0,0,0,["fI",
Bd(Yq),"fJ",P(AO1),"gi",N(AMa)],Gv,0,Ds,[],0,0,0,0,["fI",Bd(AQ1),"fJ",P(AAF)],Cx,0,Cb,[],1,0,0,0,["fI",Bd(AS9),"f1",P(APE),"gi",N(AGW)],Fe,0,Cx,[],0,0,0,0,["f2",Bs(AON),"fA",Bd(ADG),"f4",BS(ABf),"fJ",P(AFQ),"gi",N(Yi)],Cn,0,Cb,[],0,0,0,0,["fI",Bd(AFg),"e8",N(AL3),"fJ",P(AHd),"fm",N(AIz),"gi",N(AM_),"e4",P(AA9)],J0,0,Cn,[],0,0,0,0,["fI",Bd(ALC),"fJ",P(AIO),"gi",N(ANN)],Eo,0,J0,[],0,0,0,0,["fI",Bd(ACq),"e8",N(ANi),"fJ",P(Yc)],Oh,0,Eo,[],0,0,0,0,["fI",Bd(ALT),"gi",N(AQA),"fJ",P(AR$)],U$,0,Eo,[],0,0,0,0,["fI",Bd(ZN),
"gi",N(APU),"fJ",P(AE0)],RC,0,Eo,[],0,0,0,0,["fI",Bd(AA0),"gi",N(ATJ),"fJ",P(AK8)],S$,0,Eo,[],0,0,0,0,["fI",Bd(Xb),"gi",N(AN7),"fJ",P(AAl)],Gk,0,Cn,[],0,0,0,0,["fI",Bd(XI),"fA",Bd(AI0),"f4",BS(AOw),"fm",N(AIp),"fK",P(AL5),"e4",P(ASl)],AKm,0,C,[],4,3,0,0,0,JP,"ArrayStoreException",25,Bz,[],0,3,0,0,0,HN,0,C,[],1,0,0,0,0,Bp,0,HN,[],1,0,0,0,["gc",P(ZQ),"f7",P(YM),"fx",P(APt),"fw",P(AR8)],Kj,"MissingResourceException",21,Bz,[],0,3,0,0,0,CG,0,Bp,[],0,0,0,0,["gf",N(ABl),"gc",P(ATE),"f7",P(ADp),"fx",P(AQm),"T",P(AKw),
"fw",P(ADT)],ED,0,Cb,[],1,0,0,0,["fm",N(AOy),"gi",N(AQW),"e4",P(AJF)],DC,0,ED,[],0,0,0,0,["fI",Bd(Xd),"fJ",P(AA5)],Fn,0,DC,[],0,0,0,0,["fI",Bd(Zj),"fJ",P(ZU)],DE,0,ED,[],0,0,0,0,["fI",Bd(XF),"fJ",P(AGo)],Fl,0,DC,[],0,0,0,0,["fI",Bd(AI7),"e8",N(ATO)],Vl,0,DC,[],0,0,0,0,["fI",Bd(AST),"fA",Bd(AKl)],Nu,0,C,[],4,0,0,0,0,Bx,0,C,[],1,0,0,0,0,OE,0,HN,[Fd],0,0,0,0,["T",P(Mw)],Pk,0,Cb,[],0,0,0,0,["fI",Bd(AHA),"fJ",P(ALO),"gi",N(AL2)],Bm,0,C,[Fd,B8],0,3,0,0,0,On,0,Cn,[],0,0,0,0,["fJ",P(AMc)],Hi,0,Cn,[],0,0,0,0,["fI",Bd(Y$),
"e8",N(ALz),"fJ",P(AME),"gi",N(AAt),"fm",N(ZP)],DQ,0,Cn,[],0,0,0,0,["fI",Bd(ADd),"fJ",P(ARX),"gf",N(AEc),"fm",N(Y0),"e8",N(APj),"gi",N(ADv)],Kd,0,DQ,[],0,0,0,0,["gf",N(AGX),"fJ",P(ASs)],KP,0,Cx,[],0,0,0,0,["f2",Bs(AHD),"fJ",P(Z8)],Ed,0,Cx,[],0,0,0,0,["f2",Bs(WD),"fJ",P(AHV),"fm",N(AL4)]]);
C7([Ix,0,Cn,[],0,0,0,0,["e8",N(AI6),"fJ",P(AN$),"fI",Bd(W0),"fm",N(AAf),"gi",N(AQq)],Ea,0,Cx,[],0,0,0,0,["f1",P(AHe),"f2",Bs(AFB),"fA",Bd(AC9),"f4",BS(AHo),"fJ",P(AQK),"fm",N(AQf)],Nz,0,Cx,[],0,0,0,0,["f2",Bs(WN),"fJ",P(ALw)],Ka,0,Cx,[],0,0,0,0,["f2",Bs(Xw),"fJ",P(AFY)],Fs,0,Cn,[],0,0,0,0,["e8",N(ASg),"fI",Bd(ALA),"fJ",P(ALf),"fm",N(AHF),"gi",N(ANl)],V2,0,Fs,[],0,0,0,0,0,Tx,0,Fs,[],0,0,0,0,0,Wv,0,DE,[],0,0,0,0,["fI",Bd(ABF)],Qp,0,DE,[],0,0,0,0,["fI",Bd(AJ9)],GR,0,DE,[],0,0,0,0,["fI",Bd(APc),"e8",N(ARa)],P_,
0,GR,[],0,0,0,0,["fI",Bd(AHm),"e8",N(AKJ)],Gb,0,DE,[],0,0,0,0,["fI",Bd(ATy),"fJ",P(ARk)],OH,0,Gb,[],0,0,0,0,["fI",Bd(AGp)],RW,0,DE,[],0,0,0,0,["fI",Bd(ASw)],Q7,0,GR,[],0,0,0,0,["fI",Bd(AAv)],Ub,0,Gb,[],0,0,0,0,["fI",Bd(YA)],RX,0,ED,[],0,0,0,0,["fI",Bd(ATb),"fA",Bd(APv),"fJ",P(AMM)],Pt,0,ED,[],0,0,0,0,["fI",Bd(AL6),"fA",Bd(W8),"fJ",P(AOh)],HC,0,C,[],1,0,0,0,0,Wx,0,DC,[],0,0,0,0,["fI",Bd(YF)],Vg,0,Fl,[],0,0,0,0,["fI",Bd(AJ2)],P1,0,Fn,[],0,0,0,0,["fI",Bd(AOA)],QZ,0,DC,[],0,0,0,0,["fI",Bd(ALW)],TA,0,Fl,[],0,0,0,
0,["fI",Bd(YR)],RD,0,Fn,[],0,0,0,0,["fI",Bd(AOT)],LL,0,Cb,[],4,0,0,0,["fI",Bd(AIt),"gi",N(AGF),"fJ",P(AJ3)],K9,0,Cb,[],0,0,0,0,["fI",Bd(ZM),"gi",N(AAa),"fJ",P(ATt)],Pn,0,Cb,[],0,0,0,0,["fI",Bd(AG3),"gi",N(ATq),"fJ",P(Zs)],Nx,0,Cb,[],4,0,0,0,["fI",Bd(AM0),"gi",N(ABq),"fJ",P(AJc)],Vv,0,Cb,[],0,0,0,0,["fI",Bd(ALo),"gi",N(WK),"fJ",P(AFf)],OO,0,Cb,[],0,0,0,0,["fI",Bd(AA7),"gi",N(AEK),"fJ",P(Y4)],Vr,0,Cn,[],0,0,0,0,["fI",Bd(ASB),"fJ",P(ACy),"e8",N(AAi),"fn",P(AKT),"gi",N(AAg)],PV,0,Cn,[],4,0,0,0,["fI",Bd(ALh),"fJ",
P(ABD),"e8",N(AOf),"fn",P(Wy),"gi",N(AS6)],Vh,0,Cb,[],4,0,0,0,["fI",Bd(AHR),"gi",N(AEk),"fJ",P(AIG)],SQ,0,Cb,[],0,0,0,0,["fI",Bd(ALm),"gi",N(AD7),"fJ",P(X9)],Oe,0,Cb,[],0,0,0,0,["fI",Bd(AGw),"gi",N(ABv),"fJ",P(AEO)],GH,0,Cn,[],0,0,0,0,["fI",Bd(YJ),"e8",N(ANf),"fJ",P(Yf),"gi",N(ANO)],Vp,0,GH,[],0,0,0,0,["fI",Bd(ABE),"fA",Bd(AQy),"f4",BS(X_),"fm",N(AJQ),"fJ",P(AQ7)],Rw,0,GH,[],0,0,0,0,["fI",Bd(AIT),"fJ",P(AAb)],Pj,0,Bc,[IS],0,3,0,0,["gw",BS(ADV),"jw",Bd(ZT),"c9",N(AAE),"dd",Bs(APA)],R1,0,Cx,[],0,0,0,0,["f2",Bs(ACg),
"fA",Bd(ZE),"f4",BS(AED),"fJ",P(ALI),"fm",N(AFN)],Ob,0,Cx,[],0,0,0,0,["f2",Bs(AI3),"fJ",P(AFZ)],OK,0,Cx,[],0,0,0,0,["f2",Bs(AOC),"fJ",P(AQl)],ATP,0,C,[],4,3,0,0,0,N_,0,Cx,[],0,0,0,0,["f2",Bs(AOG),"fJ",P(ATr)],HF,0,Cn,[],0,0,0,0,["e8",N(ALS),"fI",Bd(KX),"fA",Bd(AFH),"f4",BS(ACv),"fJ",P(APN),"fm",N(XZ),"gi",N(AP2)],HL,0,Cn,[],0,0,0,0,["e8",N(AAB),"fI",Bd(Kb),"fA",Bd(AMt),"f4",BS(AOB),"fJ",P(ASz),"fm",N(ACk),"gi",N(AMF)],Eu,0,Cx,[],0,0,0,0,["f2",Bs(ANP),"fA",Bd(AKB),"f4",BS(AAz),"fJ",P(ARb),"fm",N(ANr)],JA,0,HC,
[],0,0,0,0,["gy",N(AAN),"gA",Bs(ANB)],JB,0,HC,[],0,0,0,0,["gy",N(AOW),"gA",Bs(AR2)]]);
C7([T_,0,C,[],0,0,0,0,0,Jg,0,Bx,[],0,0,0,0,["fR",P(AF_)],IF,0,Bx,[],0,0,0,0,["fR",P(AIV)],TW,0,Bx,[],0,0,0,0,["fR",P(AOm)],Uy,0,Bx,[],0,0,0,0,["fR",P(AP3)],UD,0,Bx,[],0,0,0,0,["fR",P(ADe)],Ja,0,Bx,[],0,0,0,0,["fR",P(ABk)],Jx,0,Ja,[],0,0,0,0,["fR",P(AEe)],Wo,0,Bx,[],0,0,0,0,["fR",P(AFG)],J8,0,Jx,[],0,0,0,0,["fR",P(WR)],RZ,0,J8,[],0,0,0,0,["fR",P(AJH)],Sq,0,Bx,[],0,0,0,0,["fR",P(AB$)],Ql,0,Bx,[],0,0,0,0,["fR",P(AJz)],P8,0,Bx,[],0,0,0,0,["fR",P(AR7)],UI,0,Bx,[],0,0,0,0,["fR",P(AKP)],Ww,0,Bx,[],0,0,0,0,["fR",P(W2)],T$,
0,Bx,[],0,0,0,0,["fR",P(AGA)],TO,0,Bx,[],0,0,0,0,["fR",P(ANT)],U9,0,Bx,[],0,0,0,0,["fR",P(AB8)],O5,0,Bx,[],0,0,0,0,["fR",P(ACG)],OF,0,Bx,[],0,0,0,0,["fR",P(ART)],Ug,0,Bx,[],0,0,0,0,["fR",P(WO)],Us,0,Bx,[],0,0,0,0,["fR",P(AH6)],QG,0,Bx,[],0,0,0,0,["fR",P(ACU)],Sv,0,Bx,[],0,0,0,0,["fR",P(AEP)],V3,0,Bx,[],0,0,0,0,["fR",P(AIa)],Up,0,Bx,[],0,0,0,0,["fR",P(AQs)],Rp,0,Bx,[],0,0,0,0,["fR",P(AMS)],QF,0,Bx,[],0,0,0,0,["fR",P(AKE)],Ws,0,Bx,[],0,0,0,0,["fR",P(AOa)],Io,0,Bx,[],0,0,0,0,["fR",P(AIy)],Vc,0,Io,[],0,0,0,0,["fR",
P(AKc)],R2,0,Jg,[],0,0,0,0,["fR",P(ZB)],QA,0,IF,[],0,0,0,0,["fR",P(AFv)],Bu,0,Bx,[],0,0,0,0,["fR",P(AIC)],Qw,0,Bx,[],0,0,0,0,["fR",P(ARE)],LP,0,Bx,[],0,0,0,0,["fR",P(ADZ)],LW,0,Bx,[],0,0,0,0,["fR",P(WP)],D1,"NegativeArraySizeException",25,Bz,[],0,3,0,0,0,Yt,0,C,[],0,0,0,0,0,ACl,0,C,[],4,0,0,0,0,AAu,0,C,[],4,3,0,0,0,UM,0,C,[],0,3,0,0,0,In,0,C,[],0,3,0,0,0,M4,0,C,[],0,3,0,0,0,AFD,0,C,[],4,3,0,0,0,AOn,0,C,[],4,3,0,0,0,QR,0,DH,[],0,0,0,0,["g2",N(APw),"i0",N(ACY),"iZ",Bs(AKp)],CP,0,BG,[],9,3,0,Iy,0,FI,0,Hv,[],0,
0,0,0,0]);
C7([AS1,0,C,[],3,3,0,0,0,TY,0,C,[Cs],3,3,0,0,0,Qu,0,C,[TY,Cs],1,3,0,0,["jM",Bs(ARL),"jN",N(AK2),"jO",Bs(AAC),"jP",Bd(AHr),"jQ",Bd(AO5)],MD,0,C,[Es],0,0,0,0,["jy",N(AJb)],Fr,0,BG,[],12,3,0,0,0,AGu,0,C,[],0,3,0,0,0,RR,0,C,[],3,3,0,0,0,Hy,0,MR,[RR],0,3,0,0,["T",P(Zb)],W,"StringIndexOutOfBoundsException",25,H,[],0,3,0,0,0,Vj,0,Bp,[],0,0,0,0,["gf",N(ADn)],Vi,0,Bp,[],0,0,0,0,["gf",N(XC)],Py,0,Bp,[],0,0,0,0,["gf",N(AIl),"T",P(AE7)],PF,0,Bp,[],0,0,0,0,["gf",N(ANR)],PC,0,Bp,[],0,0,0,0,["gf",N(AOF)],PD,0,Bp,[],0,0,0,
0,["gf",N(AI2)],PJ,0,Bp,[],0,0,0,0,["gf",N(ACK)],PK,0,Bp,[],0,0,0,0,["gf",N(WB)],PH,0,Bp,[],0,0,0,0,["gf",N(AFi)],PI,0,Bp,[],0,0,0,0,["gf",N(AI4)],PL,0,Bp,[],0,0,0,0,["gf",N(AQB)],PM,0,Bp,[],0,0,0,0,["gf",N(ABO)],Px,0,Bp,[],0,0,0,0,["gf",N(ATQ)],P3,0,Bp,[],0,0,0,0,["gf",N(AFr)],Pv,0,Bp,[],0,0,0,0,["gf",N(ABL)],Pw,0,Bp,[],0,0,0,0,["gf",N(AEh)],PB,0,Bp,[],0,0,0,0,["gf",N(AG8)],Pu,0,Bp,[],0,0,0,0,["gf",N(AQa)],Pz,0,Bp,[],0,0,0,0,["gf",N(ZZ)],PA,0,Bp,[],0,0,0,0,["gf",N(AMB)],IA,0,C,[],0,0,0,0,0,Gu,0,C,[Gy],0,3,
0,0,0,BN,"IllegalStateException",25,Bz,[],0,3,0,0,0,IN,"IllegalMonitorStateException",25,Bz,[],0,3,0,0,0,ANW,0,C,[],0,3,0,0,0,AEl,0,C,[],4,3,0,0,0,XX,0,C,[Cs],1,3,0,0,0,F7,0,C,[],3,3,0,0,0,Wb,0,C,[F7],0,3,0,0,["c3",P(AQD)],U2,0,CP,[],12,0,0,0,0,U3,0,CP,[],12,0,0,0,0,U7,0,CP,[],12,0,0,0,0,U8,0,CP,[],12,0,0,0,0,U5,0,CP,[],12,0,0,0,0,U6,0,CP,[],12,0,0,0,0,U0,0,CP,[],12,0,0,0,0,U1,0,CP,[],12,0,0,0,0,UY,0,CP,[],12,0,0,0,0,OJ,0,C,[],3,3,0,0,0,Sg,0,C,[OJ],0,3,0,0,0,Q5,0,C,[Cs],4,3,0,0,0]);
C7([RQ,0,C,[],3,3,0,0,0,Rx,0,C,[RQ],0,0,0,0,["e",N(AHz),"gZ",N(ASr)],ST,0,C,[F7],0,3,0,0,0,OG,0,Gk,[],0,0,0,0,["fA",Bd(AD6),"f4",BS(ATx),"fK",P(ABo)],SU,0,Bp,[],0,0,0,0,["gf",N(AQZ)],Ok,0,Bp,[],0,0,0,0,["gf",N(Zu)],Sf,0,Bp,[],0,0,0,0,["gf",N(YQ)],Se,0,Bp,[],0,0,0,0,["gf",N(ADW)],VD,0,Bp,[],0,0,0,0,["gf",N(AGM)],PW,0,Bp,[],0,0,0,0,["gf",N(AQ3)],Pf,0,Bp,[],0,0,0,0,["gf",N(ALH)],Rh,0,Bp,[],0,0,0,0,["gf",N(AN3)],Og,0,Bp,[],0,0,0,0,["gf",N(AS0)],Oj,0,Bp,[],0,0,0,0,["gf",N(ACs)],O9,0,Bp,[],0,0,0,0,["gf",N(ARw)],Qd,
0,Bp,[],0,0,0,0,["gf",N(AJv)],Qi,0,Bp,[],0,0,0,0,["gf",N(ANd)],Tn,0,Bp,[],0,0,0,0,["gf",N(AQC)],SD,0,Bp,[],0,0,0,0,["gf",N(ASo)],Ow,0,Bp,[],0,0,0,0,["gf",N(AB9)],JY,0,Bp,[],0,0,0,0,["gf",N(ALM)],R6,0,JY,[],0,0,0,0,["gf",N(APk)],YS,0,C,[HQ],0,0,0,0,0,GZ,0,Gu,[],0,0,0,0,["c3",P(AL0)],Ox,0,C,[],32,0,0,Mz,0,Vd,0,C,[Cs,E8],1,3,0,0,["jR",Bs(AIw),"jS",Bs(AJy),"jT",Bd(Xe),"jU",N(Xs),"jV",Bd(AFl)],G2,0,C,[Cs],3,3,0,0,0,Ki,0,C,[G2],0,0,0,0,["jy",N(AGV)],AJ6,0,C,[],0,3,0,0,0,Cr,"Array$ArrayIterator",8,C,[HQ,DG],0,3,0,
0,0,C0,0,C,[DG],0,3,0,0,0,Il,0,C,[],4,3,0,0,0,Oz,0,C,[Gy],0,0,0,0,0,Wd,0,C,[],3,3,0,0,0,S6,0,C,[Wd],3,3,0,0,0,TV,0,C,[],3,3,0,0,0,Hq,0,C,[S6,TV],1,3,0,0,0,Iq,0,Hq,[],0,3,0,0,0,IM,0,Iq,[],0,3,0,0,0,Hk,0,IM,[],1,3,0,0,0,CN,0,Hk,[],0,3,0,0,["jW",N(AG$)],G0,0,C,[G2],0,0,0,0,["jy",N(AK7)],ZI,0,C,[],0,0,0,0,0,Ck,0,Hq,[],0,3,0,0,0,Ko,0,C,[Dm],1,3,0,0,0,NQ,0,Ko,[],0,3,0,0,0,JC,"IllegalCharsetNameException",24,Bk,[],0,3,0,0,0,K2,0,C,[CW],3,3,0,0,0,HY,0,C,[K2],0,3,0,HW,0,RK,0,C,[],3,3,0,0,0]);
C7([KQ,0,C,[RK],1,3,0,0,0,TB,0,KQ,[],0,3,0,0,0,Wm,"NoSuchElementException",21,Bz,[],0,3,0,0,0,S,"GdxRuntimeException",8,Bz,[],0,3,0,0,0,ACo,0,C,[],4,3,0,0,0,El,0,C,[F7],0,3,0,0,["c3",P(Y6)],ADC,0,C,[],4,3,0,0,0,V7,0,C,[],32,0,0,Nw,0,Nr,"ConcurrentModificationException",21,Bz,[],0,3,0,0,0,NU,0,C,[],1,3,0,0,0,SP,0,NU,[],0,3,0,0,0,Un,"ActorValvula",19,CE,[CW],0,3,0,0,["bP",Bs(XQ),"be",N(ADF)],Pd,"ActorValvulaAbierta",19,CE,[CW],0,3,0,0,["bP",Bs(AIj),"be",N(AOl)],TM,"ActorFondo",19,CE,[CW],0,3,0,0,["bP",Bs(ACj)],FG,
0,Hk,[],0,3,0,0,["jW",N(AEN)],ACC,0,Ev,[Dm],0,3,0,0,0,AL9,0,C,[],0,0,0,0,0,AM4,0,C,[],4,3,0,0,0,MI,0,C,[],0,3,0,0,0,GP,0,BG,[],12,3,0,0,0,Jf,0,C,[CW],0,3,0,0,0,NB,0,C,[],1,3,0,0,0,QB,0,NB,[],0,3,0,0,0,Hw,0,C,[B8,Dm],0,3,0,0,0,Ua,0,B2,[],0,0,0,0,0,Ni,0,C,[],3,3,0,0,0,Vk,0,C,[],3,3,0,0,0,Ph,0,C,[F7,Ni,Vk],0,0,0,0,["c3",P(AM5)],Po,0,C,[DG,Dm],4,3,0,0,0,L7,0,C,[CW],0,3,0,Id,0,M_,0,Bg,[],0,3,0,0,0,K3,0,Bg,[],0,3,0,0,0,Ux,0,C,[],0,3,0,0,0,Wq,0,C,[],32,0,0,MF,0,Jp,0,C,[CW],3,3,0,0,0,IY,0,C,[Jp],0,3,0,0,["i$",P(AEJ),
"i_",P(ANG),"hc",Bd(AK_),"hS",Bs(ADw),"h1",Bs(Zd)],Ks,0,C,[CW],3,3,0,0,0,Hx,0,C,[Ks],0,3,0,0,["hU",P(AFS),"hY",P(XY),"g7",Bd(AKH),"hd",N(YX),"g_",P(ARu),"h2",P(ANZ)],PX,0,C,[Jp],0,3,0,0,["i$",P(AAO),"i_",P(ABZ),"hc",Bd(ZK),"hS",Bs(AKr),"h1",Bs(ADx)],Sb,0,C,[Ks],0,3,0,0,["hU",P(AM8),"hY",P(W6),"g7",Bd(AGz),"hd",N(AP6),"g_",P(AHs),"h2",P(AAr)],Ln,0,C,[Jp],0,3,0,Lt,["i$",P(Zr),"i_",P(AKx),"hc",Bd(ZF),"hS",Bs(APJ),"h1",Bs(ACI)],Pb,0,IY,[],0,3,0,0,0,Qn,0,Hx,[],0,3,0,0,0,Uc,0,C,[DG],0,3,0,0,0,ANm,0,C,[],4,3,0,0,0,EM,
0,C,[],1,3,0,0,0,Ek,0,EM,[Dm],1,3,0,0,["ck",N(AMn),"cj",N(ARZ)],G$,0,EM,[Dm],1,3,0,0,0,G9,0,EM,[Dm],1,3,0,0,0,E1,0,EM,[Dm],1,3,0,0,["ck",N(AMe),"cj",N(Ya)]]);
C7([Hm,0,C,[],4,3,0,0,0,AGm,0,C,[],0,3,0,0,0,Eg,0,C,[],3,3,0,0,0,CY,0,E1,[Eg],0,0,0,0,["eq",P(ATL)],AJW,0,C,[Cs],1,3,0,0,0,S9,0,C,[],3,3,0,0,0,K4,0,C,[S9],0,3,0,0,0,FH,0,C,[CW],0,3,0,Gt,0,Hp,0,G9,[],1,0,0,0,0,Gf,0,Hp,[],0,0,0,0,["iy",N(AK4),"iL",Bs(AIN),"iB",P(WV)],Hf,0,Ek,[],1,0,0,0,0,H5,0,Hf,[],0,0,0,0,["iM",N(AMC),"iC",Bs(ALj),"iB",P(ALF)],JK,0,BG,[],12,3,0,0,0,Ii,0,BG,[],12,3,0,0,0,Ku,0,C,[],0,3,0,0,0,Va,0,Ku,[],0,3,0,0,0,L2,0,C,[CW],0,3,0,0,0,H4,0,G$,[],1,0,0,0,0,JQ,0,H4,[],0,0,0,0,["iR",N(AEp),"iD",Bs(AG1),
"iB",P(AB6)],AKU,0,C,[Cs],1,3,0,0,0,EE,0,BG,[],12,3,0,0,0,HZ,0,BG,[],12,3,0,0,0,QP,0,C,[KW],1,3,0,0,["jD",N(AS_),"jX",P(AAW)],HT,0,Hp,[Eg],1,0,0,0,["iB",P(AIe)],Pa,0,HT,[],0,0,0,0,["iy",N(AEg),"iL",Bs(WT)],S0,0,HT,[],0,0,0,0,["iy",N(APH),"iL",Bs(Ze)],Hh,0,Hf,[Eg],1,0,0,0,["iB",P(ALU),"eq",P(ANk)],OT,0,Hh,[],0,0,0,0,["iM",N(AIo),"iC",Bs(ANe)],Rq,0,Hh,[],0,0,0,0,["iM",N(W7),"iC",Bs(AIb)],G7,0,H4,[Eg],1,0,0,0,["iB",P(AFL),"eq",P(ANX)],OI,0,G7,[],0,0,0,0,["iR",N(ABN),"iD",Bs(AAR)],Qy,0,G7,[],0,0,0,0,["iR",N(AKQ),
"iD",Bs(ABP)],Lu,0,Bz,[],0,3,0,0,0,FV,"ReadOnlyBufferException",23,Lu,[],0,3,0,0,0,Nm,"BufferUnderflowException",23,Bz,[],0,3,0,0,0,FX,0,BG,[],12,3,0,0,0,EO,0,BG,[],12,3,0,0,0,AC2,0,C,[],4,3,0,0,0,I_,0,BG,[],12,0,0,0,0,Dy,0,BG,[],12,3,0,0,0,AMY,0,C,[F7,Ni],3,0,0,0,0,Iz,0,BG,[],12,3,0,0,0,ALX,0,C,[],0,3,0,0,0,Tj,0,C,[],32,0,0,LC,0,IR,"BufferOverflowException",23,Bz,[],0,3,0,0,0,QI,"ActorGas",19,CE,[CW],0,3,0,0,["bP",Bs(AMR),"be",N(AOs)],UE,0,C,[],0,3,0,NI,0,AC6,0,C,[],0,3,0,0,0,M2,0,C,[G2],0,0,0,0,["jy",N(AF1)],N8,
"VerificaAccion",19,BP,[],0,3,0,0,["bu",N(AJI)]]);
C7([O_,0,C,[],0,3,0,0,0,Jy,0,BG,[],12,3,0,0,0,N4,"Predicate",8,C,[],3,3,0,0,0,Uo,0,C,[CW],0,3,0,0,0,MB,"InstantiationException",25,Ex,[],0,3,0,0,0,J_,"IllegalAccessException",25,Ex,[],0,3,0,0,0,ON,0,Ex,[],0,3,0,0,0,P6,0,C,[],3,3,0,0,0,LG,0,C,[P6],0,3,0,0,0,G8,0,BG,[],12,3,0,0,0,AEo,0,C,[],4,3,0,0,0,SG,0,C,[],0,3,0,0,0,I7,0,C,[],1,3,0,NF,0,Rj,0,I7,[],0,3,0,0,0,Ia,0,BG,[],12,3,0,0,0,Sa,0,C,[IS,JX],0,3,0,0,0,QS,0,DH,[],0,0,0,0,0,P$,0,C,[],3,3,0,0,0,Ro,0,C,[P$],0,3,0,0,0,Ve,0,C,[K2],3,3,0,0,0,Ha,0,C,[],0,0,0,M0,
["jd",P(AC7),"js",P(AHw),"jr",P(AKR),"jf",N(AHE),"jc",P(AHP)],Ey,0,C,[],1,0,0,0,0,Hz,0,Ey,[],1,0,0,0,0,RU,0,Hz,[],0,0,0,0,0,Tq,0,Ha,[],0,0,0,0,["jd",P(AR_),"js",P(ATM),"jr",P(ALP),"jc",P(LF),"jf",N(N$)],So,0,Hz,[],0,0,0,0,0,RS,0,Ey,[],0,0,0,0,0,TR,0,Ey,[],0,0,0,0,0,RL,0,Ey,[],0,0,0,0,0,Me,0,C,[],0,3,0,0,0,QQ,0,DH,[],0,0,0,0,["g2",N(Zq),"i0",N(Xc),"iZ",Bs(AJd)],OD,0,C,[],32,0,0,Ng,0,ARH,0,C,[],0,3,0,0,0,F0,0,Gu,[],0,0,0,0,["c3",P(AAG)],OB,0,DH,[],0,0,0,0,["g2",N(AAK),"i0",N(AJ0),"iZ",Bs(Y_)],XN,0,C,[],0,0,0,
0,0,OC,0,DH,[],0,0,0,0,["g2",N(AEz),"i0",N(XP),"iZ",Bs(AFq)],KB,0,C,[G2],0,0,0,0,["jy",N(ASh)],ABe,0,C,[],0,3,0,0,0,K7,0,C,[Es],0,0,0,0,["jy",N(ADo)]]);
let AYw=D7(Ci),AYs=D7(KG),AYt=D7(AX3),AYu=D7(AX4),AYv=D7(BV),AYr=D7(AJT),AYx=D7(CD);AVa(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
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
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","XNVCerrada.png","XNVAbierta.png","EMI EN ACTOR valvulas.get(0)",
"VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","begin must be called before end.","data must be a ByteBuffer or FloatBuffer",
"No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","The last short in src ","Index ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest",
"MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER",
"source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","sphere-23.png","Asset loaded: ","Logical","Pixels","Call end() before beginning a new shape batch.","Must call begin(ShapeType.",").",") or begin(ShapeType.","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n",
"void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *","uniform sampler2D u_sampler","Point","Line","Filled","POINTY","SMOOTH","The texture region is null. Please set a texture region first (e.g. in the constructor or by calling setTextureRegion(TextureRegion region))",
"data:",";base64,","error"]);
I.prototype.toString=function(){return Bw(this);};
I.prototype.valueOf=I.prototype.toString;C.prototype.toString=function(){return Bw(PP(this));};
C.prototype.__teavm_class__=function(){return AUS(this);};
ARF.main=AV7(AGL);
ARF.main.javaException=AVF;
let Br=Symbol('jsoClass');
(function(){var c;c=Jn.prototype;c[Br]=true;c.onAnimationFrame=c.jx;c=Mh.prototype;c[Br]=true;c.handleEvent=c.jy;c=Kf.prototype;c[Br]=true;c.handleEvent=c.jy;c=Kg.prototype;c[Br]=true;c.handleEvent=c.jy;c=MH.prototype;c[Br]=true;c.fullscreenChanged=c.jz;c=Mb.prototype;c[Br]=true;c.denied=c.jC;c.prompt=c.jB;c.granted=c.jA;c=OS.prototype;c.removeEventListener=c.jG;c.dispatchEvent=c.jH;c.get=c.jD;c.addEventListener=c.jJ;Object.defineProperty(c,"length",{get:c.jI});c=Lr.prototype;c[Br]=true;c.handleEvent=c.jy;c
=Ls.prototype;c[Br]=true;c.handleEvent=c.jy;c=Lq.prototype;c[Br]=true;c.handleEvent=c.jy;c=Kp.prototype;c[Br]=true;c.unlockFunction=c.jK;c=Ml.prototype;c[Br]=true;c.accept=c.jL;c=Mk.prototype;c[Br]=true;c.accept=c.jL;c=Qu.prototype;c.removeEventListener=c.jQ;c.dispatchEvent=c.jN;c.addEventListener=c.jP;c=MD.prototype;c[Br]=true;c.handleEvent=c.jy;c=Q5.prototype;c[Br]=true;c=Vd.prototype;c.removeEventListener=c.jT;c.dispatchEvent=c.jU;c.addEventListener=c.jV;c=Ki.prototype;c[Br]=true;c.handleEvent=c.jy;c=G0.prototype;c[Br]
=true;c.handleEvent=c.jy;c=QP.prototype;c.get=c.jD;Object.defineProperty(c,"length",{get:c.jX});c=M2.prototype;c[Br]=true;c.handleEvent=c.jy;c=KB.prototype;c[Br]=true;c.handleEvent=c.jy;c=K7.prototype;c[Br]=true;c.handleEvent=c.jy;})();
}));
