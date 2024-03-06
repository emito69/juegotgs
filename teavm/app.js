"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(ARI){let AXZ=2463534242,E1=()=>{let x=AXZ;x^=x<<13;x^=x>>>17;x^=x<<5;AXZ=x;return x;},P=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bs=f=>function(p1,p2){return f(this,p1,p2);},Bd=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BS=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AWG=f=>function(){let args=Array.prototype.slice.apply(arguments);AX0(function(){f.apply(this,args);});},AV9=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=Q(FM(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=U(args[i]);}AX0(()=>{f.call(null,javaArgs);},callback);},BQ=target=>target.$clinit=()=>{},AUV=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},F=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=FM();}return function(){superclass.call(this);};},M=cls=>AWq(cls),FM=()=>C,W4=()=>{{return ATV();}},J$=t=>{{return AMW(t);}};let AX1=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AX2=(name,binaryName)=>{let cls
=AX1();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Ci=AX2("boolean","Z"),KG=AX2("char","C"),AX3=AX2("byte","B"),AX4=AX2("short","S"),BV=AX2("int","I"),AJV=AX2("long","J"),CD=AX2("float","F"),ADc=AX2("double","D"),Bo=AX2("void","V");let AX5=new ArrayBuffer(16),AX6=new DataView(AX5),AX7=new Float32Array(AX5),AX8=new Float64Array(AX5),AX9=new Int32Array(AX5),
AXL;if(typeof BigInt!=='function'){AXL=n=>{AX6.setFloat64(0,n,true);return new AX$(AX6.getInt32(0,true),AX6.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AXL=n=>{AX6.setFloat64(0,n,true);let lo=AX6.getInt32(0,true),hi=AX6.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AX_=new BigInt64Array(AX5);AXL=n=>{AX8[0]=n;return AX_[0];};}let Ge=n=>{AX7[0]=n;return AX9[0];},Lf=n=>{AX9[0]=n;return AX7[0];},BU=(a,b)=>a>b?1:a<b? -1:a===b?0:1,Dl
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},D7=(a,b)=>(a>>>0)/(b>>>0)>>>0,AV4=(a,b)=>(a>>>0)%(b>>>0)>>>0,EV=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AX$(lo,hi){this.lo=lo|0;this.hi=hi|0;}AX$.prototype.__teavm_class__=()=>{return "long";};let AYa=a=>(a.hi&0x80000000)===0,AYb=a=>(a.hi&0x80000000)!==0,AYc=1<<18,Ca,E,V,D6,AVQ,Bl,AYd;if(typeof BigInt!=="function"){AX$.prototype.toString=function(){let result=[],n=this,
positive=AYa(n);if(!positive){n=AWg(n);}let radix=new AX$(10,0);do {let divRem=AYd(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AX$.prototype.valueOf=function(){return AVQ(this);};Ca=new AX$(0,0);V=val=>new AX$(val, -(val<0)|0);D6=val=>val>=0?new AX$(val|0,val/0x100000000|0):AWg(new AX$( -val|0, -val/0x100000000|0));E=(lo,hi)=>new AX$(lo,hi);AVQ=val=>0x100000000*val.hi+(val.lo>>>0);Bl=
val=>val.lo;}else {Ca=BigInt(0);E=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));V=val=>BigInt.asIntN(64,BigInt(val|0));D6=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));AVQ=val=>Number(val);Bl=val=>Number(BigInt.asIntN(32,val))|0;}let D5,ADn,ACz,AU1,AU6,AC0,AWl,C6,AGm,AYe,Ba,MY,Xv,AWn,AWg,C5,ADm,H3,FB,AVP,Be;if(typeof BigInt!=='function'){D5=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ADn=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;ACz=(a,b)=>{if(a.hi<b.hi)
{return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};AU1=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};AU6=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};AC0=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x
<=y;}return (a.lo&1)<=(b.lo&1);};C6=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return D6(a.lo+b.lo);}else if(AYf.abs(a.hi)<AYc&&AYf.abs(b.hi)<AYc){return D6(AVQ(a)+AVQ(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AX$(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<
16);};AYe=a=>{let lo=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AX$(lo,hi);};AWg=a=>AYe(new AX$(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));AGm=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return D6(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AX$(lolo&0xFFFF|(lohi&0xFFFF)
<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AWl=(a,b)=>{let r=EV(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Ba=(a,b)=>{let positive=AYb(a)===AYb(b);if(AYb(a)){a=AWg(a);}if(AYb(b)){b=AWg(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)
|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AX$(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:AWg(result);};MY=(a,b)=>{if(AYf.abs(a.hi)<AYc&&AYf.abs(b.hi)<AYc){return D6(AVQ(a)/AVQ(b));}return (AYd(a,
b))[0];};AWn=(a,b)=>{if(a.hi>=0&&a.hi<AYc&&b.hi>=0&&b.hi<AYc){return D6(AVQ(a)/AVQ(b));}return (AYg(a,b))[0];};Xv=(a,b)=>{if(AYf.abs(a.hi)<AYc&&AYf.abs(b.hi)<AYc){return D6(AVQ(a)%AVQ(b));}return (AYd(a,b))[1];};AYd=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AYb(a)===AYb(b);if(AYb(a)){a=AWg(a);}if(AYb(b)){b=AWg(b);}a=new AYh(a.lo,a.hi,0);b=new AYh(b.lo,b.hi,0);let q=AYi(a,b);a=new AX$(a.lo,a.hi);q=new AX$(q.lo,q.hi);return positive?[q,a]:[AWg(q),AWg(a)];};let AYg=(a,b)=>
{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new AYh(a.lo,a.hi,0);b=new AYh(b.lo,b.hi,0);let q=AYi(a,b);a=new AX$(a.lo,a.hi);q=new AX$(q.lo,q.hi);return [q,a];};C5=(a,b)=>new AX$(a.lo&b.lo,a.hi&b.hi);ADm=(a,b)=>new AX$(a.lo|b.lo,a.hi|b.hi);H3=(a,b)=>new AX$(a.lo^b.lo,a.hi^b.hi);FB=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AX$(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AX$(0,a.lo);}else {return new AX$(0,a.lo<<b -32);}};AVP=(a,b)=>{b&=63;if(b===0){return a;}else if
(b<32){return new AX$(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AX$(a.hi,a.hi>>31);}else {return new AX$(a.hi>>b -32,a.hi>>31);}};Be=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AX$(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AX$(a.hi,0);}else {return new AX$(a.hi>>>b -32,0);}};function AYh(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AYj=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|
0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AYk=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi
>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYl=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYm=(a,b)=>{let r=a.sup -b.sup;if(r
!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AYn=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AYo=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===
64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AYp=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AYq=a=>new AYh(a.lo,a.hi,a.sup),AYi=(a,b)=>{let bits=b.hi!==0?AYn(b.hi):AYn(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits
%16;AYo(b,bits);AYo(a,dividentBits);let q=new AYh(0,0,0);while(sz-->0){AYo(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AYq(b);AYj(t,digit);if(AYm(t,a)>=0){while(AYm(t,a)>0){AYk(t,b); --digit;}}else {while(true){let nextT=AYq(t);AYl(nextT,b);if(AYm(nextT,a)>0){break;}t=nextT;++digit;}}AYk(a,t);q.lo|=digit;AYo(a,16);}AYp(a,bits+16);return q;};}else {D5=(a,b)=>a===b;ADn=(a,b)=>a!==b;ACz=(a,b)=>a>b;AU1=(a,b)=>a>=b;AU6=(a,b)=>a<b;AC0=(a,b)=>a<=b;C6=(a,b)=>BigInt.asIntN(64,
a+b);AYe=a=>BigInt.asIntN(64,a+1);AWg=a=>BigInt.asIntN(64, -a);AGm=(a,b)=>BigInt.asIntN(64,a -b);AWl=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Ba=(a,b)=>BigInt.asIntN(64,a*b);MY=(a,b)=>BigInt.asIntN(64,a/b);AWn=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));Xv=(a,b)=>BigInt.asIntN(64,a%b);C5=(a,b)=>BigInt.asIntN(64,a&b);ADm=(a,b)=>BigInt.asIntN(64,a|b);H3=(a,b)=>BigInt.asIntN(64,a^b);FB=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));AVP=(a,b)=>BigInt.asIntN(64,
a>>BigInt(b&63));Be=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)>>BigInt(b&63));}let Q=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (D8(cls))(data);},T=(cls,data)=>new (D8(cls))(data),AAM;if(typeof BigInt64Array!=='function'){AAM=init=>new AYr(init);}else {AAM=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AYr(buffer);};}let G=sz=>new AYs(new Uint16Array(sz)),AF9=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AYs(buffer);},BI=sz=>new AYt(new Int8Array(sz)),
Ft=sz=>new AYu(new Int16Array(sz)),AXN=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AYu(buffer);},X=sz=>new AYv(new Int32Array(sz)),Iw=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AYv(buffer);},J7=sz=>new AYw(new Int8Array(sz)),B_=sz=>new AYx(new Float32Array(sz)),D8=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(FM()).call(this);this.data=data;}JavaArray.prototype=Object.create((FM()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor
=JavaArray;JavaArray.prototype.toString=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (D8(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[FM()],primitive
:false,superclass:FM(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AYy,AVc=strings=>{AYz();AYy=new Array(strings.length);for(let i=0;i<strings.length;++i){AYy[i]=AYA(U(strings[i]));}},A=index=>AYy[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;},AUD=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},U=str=>str===null?null:TG(str),Bw=str=>str===null?null:str.j4,AYz=()=>(()=>{})(),AYA;{AYA=str=>str;}let BB=(obj,cls)=>obj instanceof FM()&&!!obj.constructor.$meta&&AYB(obj.constructor,cls),AYB=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AYB(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for
(let i=0;i<supertypes.length;i=i+1|0){if(AYB(supertypes[i],to)){return true;}}return false;};let B=ex=>{throw APT(ex);},AYC=Symbol("javaException"),APT=ex=>{let err=ex.$jsException;if(!err){let javaCause=AYD(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AYE("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AYC]=ex;ex.$jsException=err;AYF(err,ex);}return err;},AYF=(err,ex)=>
{if(typeof AYG==="function"&&err.stack){let stack=AYG(err.stack),javaStack=Q(AYH(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AYI(U(element.className),U(element.methodName),U(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AYJ(ex,javaStack);}}},AYE;if(typeof AYK==='object'){let AYL=Symbol("defaultMessage");AYE=function AYE(message,cause){let self=Reflect.construct(Error,[void 0,cause],AYE);Object.setPrototypeOf(self,
AYE.prototype);self[AYL]=message;return self;};AYE.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AYE},message:{get(){try {let javaException=this[AYC];if(typeof javaException==='object'){let javaMessage=AYM(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AYL];}catch(AYN){return "Exception occurred trying to extract Java exception message: "+AYN;}}}});}else {AYE=Error;}let AVH=e=>e instanceof Error
&&typeof e[AYC]==='object'?e[AYC]:null,Z=err=>{let ex=err[AYC];if(!ex){ex=AYO(U("(JavaScript) "+err.toString()));err[AYC]=ex;ex.$jsException=err;AYF(err,ex);}return ex;},AYO=message=>AUS(message),AYM=t=>AOh(t),AYD=t=>AWT(t),AYH=()=>FM(),AYI=(className,methodName,fileName,lineNumber)=>{{return null;}},AYJ=(e,stack)=>{};let AYP=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=
next+1;}buffer+=msg.substring(index);};},BX=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AYP(msg=>console.info(msg)):()=>{},DA=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AYP(msg=>console.error(msg)):()=>{};let AYQ=null,AUb=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AYQ=packages;},C7=data=>
{let packages=AYQ,i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AYR(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AYR.prototype.push=function(){for
(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AYR.prototype.s=AYR.prototype.push;AYR.prototype.pop=function(){return this.stack.pop();};AYR.prototype.l=AYR.prototype.pop;AYR.prototype.isResuming=function(){return this.status===2;};AYR.prototype.isSuspending=function(){return this.status===1;};AYR.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AYR.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if
(AYS!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AYR.prototype.resume=function(){if(AYS!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AYR.prototype.run=function(){AYS=this;let result;try {result=this.runner();}catch(AYN){result=AYN;}finally {AYS=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback
=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let Fv=()=>{let thread=Db();return thread!=null&&thread.isSuspending();},Fx=()=>{let thread=Db();return thread!=null&&thread.isResuming();},AX0=(runner,callback)=>(new AYR(runner)).start(callback),AYS=null,Db=()=>AYS,Fm=()=>{throw new Error("Invalid recorded state");};function C(){this.mo=null;this.$id$=0;}
let FO=b=>{let c;if(b.mo===null){c=new IA;c.mk=B1;b.mo=c;}b=b.mo;c=b.mk;if(c===null)b.mk=B1;else if(c!==B1){c=new BN;c.j5=1;c.j6=1;c.j7=A(0);B(c);}b.mV=b.mV+1|0;},
DL=b=>{let c,d;if(!Hb(b)){c=b.mo;if(c.mk===B1){d=c.mV-1|0;c.mV=d;if(!d)c.mk=null;Hb(b);return;}}b=new IN;b.j5=1;b.j6=1;B(b);},
AWs=b=>{AFv(b,1);},
AFv=(b,c)=>{let d,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.mo===null){d=new IA;d.mk=B1;b.mo=d;}d=b.mo;if(d.mk===null)d.mk=B1;if(d.mk===B1){d.mV=d.mV+c|0;return;}$p=1;case 1:Yd(b,c);if(Fv()){break _;}return;default:Fm();}}Db().s(b,c,d,$p);},
AIh=(b,c,d)=>{let e,f,g;e=B1;f=b.mo;if(f===null){f=new IA;f.mk=e;b.mo=f;if(e!==e)B1=e;B1.oN=Em();b=b.mo;b.mV=b.mV+c|0;b=null;d.pS.e(b);return;}if(f.mk===null){f.mk=e;if(e!==e)B1=e;B1.oN=Em();b=b.mo;b.mV=b.mV+c|0;b=null;d.pS.e(b);return;}if(f.oI===null)f.oI=AHv();f=f.oI;g=new ST;g.v1=e;g.v2=b;g.vZ=c;g.v0=d;d=g;f.push(d);},
AWy=b=>{XD(b,1);},
XD=(b,c)=>{let d;if(!Hb(b)){d=b.mo;if(d.mk===B1){c=d.mV-c|0;d.mV=c;if(c>0)return;d.mk=null;d=d.oI;if(d!==null&&!(d.length?0:1)){d=new Wb;d.wn=b;Ne(d,0);}else Hb(b);return;}}b=new IN;b.j5=1;b.j6=1;B(b);},
AO2=b=>{let c,d,e;if(!Hb(b)){c=b.mo;if(c.mk===null){b=c.oI;if(b!==null&&!(b.length?0:1)){b=c.oI.shift();BD();if(b!==null&&!(b instanceof FM()))b=Cf(b);d=b;c.oI=null;b=d.v1;c=d.v2;e=d.vZ;d=d.v0;if(B1!==b)B1=b;B1.oN=Em();c=c.mo;c.mk=b;c.mV=c.mV+e|0;b=null;d.pS.e(b);}return;}}},
Hb=a=>{let b,c;b=a.mo;if(b===null)return 1;a:{if(b.mk===null){c=b.oI;if(!(c!==null&&!(c.length?0:1))){b=b.uH;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.mo=null;return 1;},
Bt=a=>{return;},
AUY=()=>{let a=new C();Bt(a);return a;},
AWt=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kj=b;d=c;b.classObject=d;}}return c;},
G_=a=>{let b,c;b=a;if(!b.$id$){c=E1();b.$id$=c;}return a.$id$;},
AJq=(a,b)=>{return a!==b?0:1;},
PP=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=E1();b.$id$=c;}d=Bh(a.$id$,4);b=new K;b.j3=G(16);D(b,b.j2,A(1));e=b.j2;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.j3;g=f.data;h=b.j2;i=g.length;if(h>=0&&h<=(i-0|0)){c.j4=L(f.data,0,h);return c;}b=new H;b.j5=1;b.j6=1;B(b);},
AVZ=a=>{let b,c,d;if(!BB(a,Fd)&&a.constructor.$meta.item===null){b=new UG;b.j5=1;b.j6=1;B(b);}b=Xi(a);c=b;d=E1();c.$id$=d;return b;},
NG=a=>{let b,c;b=a.mo;if(!(b!==null&&b.mk===B1?1:0)){b=new IN;b.j5=1;b.j6=1;B(b);}b=b.uH;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BD();if(c!==null&&!(c instanceof FM()))c=Cf(c);c=c;if(!c.m())Ne(c,0);}a.mo.uH=null;},
Yd=(b,c)=>{let thread=Db();let javaThread=W4();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;J$(javaThread);thread.resume();};callback.gZ=e=>{thread.attribute=APT(e);J$(javaThread);thread.resume();};callback=Sp(callback);thread.suspend(()=>{try {AIh(b,c,callback);;}catch(NV){callback.gZ(NV);}});return null;};
let AQm=F();
let AGM=b=>{let c,d,e,f;VN=G(0);c=new I;c.j4="";Mg=c;Om=new NM;AOG();c=new Bb;c.j$=1.0;c.j9=0.0;OR=c;c=new Bb;c.j$=0.0;c.j9=1.0;OQ=c;c=new Bb;c.j$=0.0;c.j9=0.0;Ri=c;Lo=new Bb;Jk=new Bb;YL();TQ=new Bb;TU=new Bb;AA$();St=new Bb;SE=new Bb;c=new Ep;c.oj=0.0;c.og=0.0;c.oh=0.0;c.oi=0.0;Rv=c;c=new Ep;c.oj=0.0;c.og=0.0;c.oh=0.0;c.oi=0.0;Ru=c;Qx=new D_;Tf=new D_;U_=0.10000000149011612;ASU();Q_=M(CD);W3();Pp=Q(Jh,111);TC=new Bb;TN=new Bb;QE=new C;AGR();Or=M(BV);ADz();PY=M(AJV);Oq=M(KG);TT=Q(MN,128);Yg();AKu();Q1=new Bb;Q2
=new Bb;Q3=new Bb;S4=0.4000000059604645;Op=0.10000000149011612;UN=new Bb;AMo();RO=new Bb;Sk=new Bb;Wh=new Bb;Wj=new Bb;Wi=new Bb;ARm();ASS();ACA();Pe=new BM;ANm();H9=0.0;AFJ();RA=B_(3);AKQ();AGE();AIG();Da=1;ABz();Wl=new Km;QO=new Kl;AJi();O=1;ACQ();IJ=new Nu;ALq();Zv();c=new NQ;b=Q(I,0);d=b.data;Jz(A(3));e=d.length;f=0;while(f<e){Jz(d[f]);f=f+1|0;}c.vr=A(3);c.wd=b.p();Cg=c;ARD();Wu=M(ADc);AFA();AS5();c=new Hw;c.m5=1;I8=c;c=new Hw;c.m5=0;Ji=c;QM=M(Ci);c=new Hm;c.sR=A(4);Cp=c;c=new Hm;c.sR=A(5);J3=c;AE9();AOO();Z2();AF1();ADh();WU();ATl();AEX();ABj();KM
=1;ZO();c=new Dp;c.pD=12;LT=c;AMk();AMS();ASK();DF=new Bb;Dw=new Bb;DT=new Bb;CU=new Bb;CV=new Bb;SW=new Bb;Nh=new Bb;GI=new Bb;GL=new Bb;V6=new Bb;Oo=new Bb;Pq=Cz(2.0);Pr=Cz(3.0);D2=new Bb;Fg=new Bb;Ee=new Bb;c=ASX(A(6));c.r7=1280;c.p2=720;Qh(new LO,new P7,c);};
let Os=F();
let AEj=0,AEr=0,YE=0,AS6=0,ACu=0;
let SS=()=>{SS=BQ(Os);AGO();};
let AGO=()=>{AEj=C9(U(navigator.platform),A(7));AEr=C9(U(navigator.platform),A(8));YE=C9(U(navigator.platform),A(9));AS6=!C9(U(navigator.platform),A(10))&&!C9(U(navigator.platform),A(11))?0:1;ACu=!C9(U(navigator.platform),A(12))&&!C9(U(navigator.platform),A(13))&&!C9(U(navigator.platform),A(14))?0:1;};
let Of=F(0);
let Mm=F();
let CW=F(0);
function Nj(){let a=this;Mm.call(a);a.mf=null;a.vs=null;a.yr=0;a.lw=null;a.lY=null;a.rL=null;a.sP=null;a.pO=null;a.pR=null;a.rS=0;a.rT=0;a.sg=null;a.nE=null;a.qa=null;a.pG=null;a.uL=0;a.qV=null;a.xr=0;a.zM=0;a.wc=0;a.ub=null;a.wo=null;}
let BR=0;
let SO=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.lY=new Bb;a.rL=Q(CE,20);a.sP=J7(20);a.pO=X(20);a.pR=X(20);d=new M_;If(d,1,4,M(DR));a.pG=d;a.uL=1;a.ub=IQ;e=new BM;e.k1=0.0;e.k0=1.0;e.kZ=0.0;e.k3=0.8500000238418579;CX(e);a.wo=e;if(b===null){b=new Bk;b.j5=1;b.j6=1;b.j7=A(15);B(b);}if(c===null){b=new Bk;b.j5=1;b.j6=1;b.j7=A(16);B(b);}a.mf=b;a.vs=c;c=new BJ;F_(c);e=new M_;If(e,1,4,M(CE));c.ks=e;e=new S1;e.oW=1.0;e.oU=0.0;e.oV=0.0;e.oY=0.0;e.oZ=1.0;e.oX=0.0;c.tz=e;c.un=C8();c.pE=C8();c.no=1;a.lw=c;c.lC=a;c=c.ks;f=c.j_;g=0;h
=c.j8;while(g<h){f.data[g].x(a);g=g+1|0;}g=B3.lm.width;i=B3.lm.height;b.pY=0;b.pZ=0;b.qy=g;b.nf=i;j=g;k=b.r8;j=j*k;k=i*k;b.s5=j;b.tc=k;Nq(b,1);},
AXb=(a,b)=>{let c=new Nj();SO(c,a,b);return c;},
AM5=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.qV===null){b=AIL(5000,null);a.qV=b;b.sL=1;}a:{if(!a.zM&&!a.wc&&a.ub===IQ){if(!a.xr)break a;b=a.lw;b.kH=1;BR=1;b=b.ks;if(CA){c=new Cr;c.kU=1;c.kY=b;c.l1=1;}else{if(b.kE===null){c=new C0;c.mb=b;c.me=1;b.kE=c;}c=CK(b.kE);}b:while(true){if(!c.kU){c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(c.lN>=c.kY.j8?0:1))break a;b=Cm(c);if(!(b instanceof BJ)){b.kH=1;BR=1;}else{b=b;b.kH=1;BR=1;b=b.ks;if(CA){d=new Cr;d.kU=1;d.kY=b;d.l1=1;}else{if(b.kE
===null){d=new C0;d.mb=b;d.me=1;b.kE=d;}d=CK(b.kE);}while(true){if(!d.kU){c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(d.lN>=d.kY.j8?0:1))break;b=Cm(d);if(!(b instanceof BJ)){b.kH=1;BR=1;}else{b=b;b.kH=1;BR=1;b=b.ks;if(CA){e=new Cr;e.kU=1;e.kY=b;e.l1=1;}else{if(b.kE===null){e=new C0;e.mb=b;e.me=1;b.kE=e;}e=CK(b.kE);}while(true){if(!e.kU){c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(e.lN>=e.kY.j8?0:1))break;b=Cm(e);if(!(b instanceof BJ)){b.kH=1;BR=1;}else{b=b;b.kH=1;BR=1;f=b.ks;if(CA){b=new Cr;b.kU=1;b.kY=f;b.l1
=1;}else{if(f.kE===null){b=new C0;Bt(b);b.mb=f;b.me=1;f.kE=b;}b=CK(f.kE);}while(true){if(!b.kU){c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(b.lN>=b.kY.j8?0:1))break;f=Cm(b);if(!(f instanceof BJ)){f.kH=1;BR=1;}else{f=f;f.kH=1;BR=1;f=f.ks;if(CA){g=new Cr;Bt(g);g.kU=1;g.kY=f;g.l1=1;}else{if(f.kE===null)f.kE=LK(f,1);g=CK(f.kE);}while(true){if(!g.kU){c=new S;GO(c,A(17));B(c);}if(!(g.lN>=g.kY.j8?0:1))break;f=Cm(g);if(!(f instanceof BJ)){f.kH=1;BR=1;}else{f=f;f.kH=1;BR=1;f=f.ks;if(CA)h=L_(f,1);else{if(f.kE===null)f.kE
=NR(f);h=CK(f.kE);}while(true){if(!h.kU)break b;if(!(h.lN>=h.kY.j8?0:1))break;f=Cm(h);if(!(f instanceof BJ)){f.kH=1;BR=1;}else{f=f;E5(f,1);f=Gh(f.ks);while(Hu(f)){i=Cm(f);if(!(i instanceof BJ))E5(i,1);else Ly(i,1,1);}}}}}}}}}}}}}B(Kz(A(17)));}c=a.lY;b=K_;j=b.l_.data[0];k=b.l$.data[0];c.j$=j;c.j9=k;EU(a.mf,c);b=a.lY;j=b.j$;k=b.j9;c=a.lw;b.j$=j;b.j9=k;Dx(c,b);b=a.lw;c=a.lY;c=H6(b,c.j$,c.j9,1);if(c===null)return;if(!a.wc)b=c;else{b=c.k2;if(b===null)b=c;}c=a.ub;if(c===IQ){b.kH=1;BR=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof Er)break;b=b.k2;}}if(b===null)return;b.K(c);}d:{if(a.xr&&b instanceof BJ){c=b;c.kH=1;BR=1;c=c.ks;if(CA){d=new Cr;d.kU=1;d.kY=c;d.l1=1;}else{if(c.kE===null){d=new C0;d.mb=c;d.me=1;c.kE=d;}d=CK(c.kE);}e:while(true){if(!d.kU){c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(d.lN>=d.kY.j8?0:1))break d;c=Cm(d);if(!(c instanceof BJ)){c.kH=1;BR=1;}else{c=c;c.kH=1;BR=1;c=c.ks;if(CA){e=new Cr;e.kU=1;e.kY=c;e.l1=1;}else{if(c.kE===null){e=new C0;e.mb=c;e.me=1;c.kE=e;}e=CK(c.kE);}while(true){if(!e.kU)
{c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(e.lN>=e.kY.j8?0:1))break;c=Cm(e);if(!(c instanceof BJ)){c.kH=1;BR=1;}else{c=c;c.kH=1;BR=1;c=c.ks;if(CA){f=new Cr;f.kU=1;f.kY=c;f.l1=1;}else{if(c.kE===null){f=new C0;f.mb=c;f.me=1;c.kE=f;}f=CK(c.kE);}while(true){if(!f.kU){c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(f.lN>=f.kY.j8?0:1))break;c=Cm(f);if(!(c instanceof BJ)){c.kH=1;BR=1;}else{c=c;c.kH=1;BR=1;c=c.ks;if(CA){g=new Cr;g.kU=1;g.kY=c;g.l1=1;}else{if(c.kE===null){g=new C0;Bt(g);g.mb=c;g.me=1;c.kE=g;}g=CK(c.kE);}while
(true){if(!g.kU){c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}if(!(g.lN>=g.kY.j8?0:1))break;c=Cm(g);if(!(c instanceof BJ)){c.kH=1;BR=1;}else{c=c;c.kH=1;BR=1;c=c.ks;if(CA){h=new Cr;Bt(h);h.kU=1;h.kY=c;h.l1=1;}else{if(c.kE===null)c.kE=LK(c,1);h=CK(c.kE);}while(true){if(!h.kU){c=new S;GO(c,A(17));B(c);}if(!(h.lN>=h.kY.j8?0:1))break;c=Cm(h);if(!(c instanceof BJ)){c.kH=1;BR=1;}else{c=c;c.kH=1;BR=1;c=c.ks;if(CA)i=L_(c,1);else{if(c.kE===null)c.kE=NR(c);i=CK(c.kE);}while(true){if(!i.kU)break e;if(!(i.lN>=i.kY.j8?0:1))break;c
=Cm(i);if(!(c instanceof BJ)){c.kH=1;BR=1;}else{c=c;E5(c,1);c=Gh(c.ks);while(Hu(c)){l=Cm(c);if(!(l instanceof BJ))E5(l,1);else Ly(l,1,1);}}}}}}}}}}}}}B(Kz(A(17)));}}c=a.lw;if(c!==b)f:{c.kH=0;if(c instanceof BJ){c=c.ks;m=0;n=c.j8;g:while(true){if(m>=n)break f;if(m>=c.j8){d=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,m,10);D(b,b.j2,A(19));m=c.j8;J(b,b.j2,m,10);c=new I;o=b.j3;p=o.data;n=b.j2;q=p.length;if(n>=0&&n<=(q-0|0)){c.j4=L(o.data,0,n);d.j5=1;d.j6=1;d.j7=c;B(d);}b=new H;b.j5=1;b.j6=1;B(b);}d=c.j_.data[m];if
(d!==b)h:{d.kH=0;if(d instanceof BJ){d=d.ks;q=0;r=d.j8;while(true){if(q>=r)break h;if(q>=d.j8){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,q,10);D(b,b.j2,A(19));m=d.j8;J(b,b.j2,m,10);d=new I;o=b.j3;p=o.data;n=b.j2;q=p.length;if(n>=0&&n<=(q-0|0)){d.j4=L(o.data,0,n);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}e=d.j_.data[q];if(e!==b)i:{e.kH=0;if(e instanceof BJ){e=e.ks;s=0;t=e.j8;while(true){if(s>=t)break i;if(s>=e.j8){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,s,10);D(b,b.j2,A(19));m
=e.j8;J(b,b.j2,m,10);d=new I;o=b.j3;p=o.data;n=b.j2;q=p.length;if(n>=0&&n<=(q-0|0)){d.j4=L(o.data,0,n);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}f=e.j_.data[s];if(f!==b)j:{f.kH=0;if(f instanceof BJ){f=f.ks;u=0;v=f.j8;while(true){if(u>=v)break j;if(u>=f.j8){c=new H;b=new K;Bt(b);b.j3=G(16);BY(b,b.j2,A(18));J(b,b.j2,u,10);BY(b,b.j2,A(19));m=f.j8;J(b,b.j2,m,10);d=new I;o=b.j3;p=o.data;n=b.j2;q=p.length;if(n>=0&&n<=(q-0|0)){d.j4=L(o.data,0,n);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}g
=f.j_.data[u];if(g!==b)k:{g.kH=0;if(g instanceof BJ){g=g.ks;w=0;x=g.j8;while(true){if(w>=x)break k;if(w>=g.j8){c=new H;b=new K;DM(b,16);B$(b,b.j2,A(18));Ip(b,w,10);B$(b,b.j2,A(19));Ip(b,g.j8,10);d=new I;o=b.j3;p=o.data;n=b.j2;q=p.length;if(n>=0&&n<=(q-0|0)){d.j4=L(o.data,0,n);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}h=g.j_.data[w];if(h!==b)l:{h.kH=0;if(h instanceof BJ){h=h.ks;y=0;z=h.j8;while(true){if(y>=z)break l;if(y>=h.j8){c=new H;b=new K;E0(b);Jq(b,A(18));Iu(b,y);Jq(b,A(19));Iu(b,h.j8);d=new I;o
=b.j3;p=o.data;n=b.j2;q=p.length;if(n>=0&&n<=(q-0|0)){d.j4=L(o.data,0,n);GO(c,d);B(c);}b=new H;b.j5=1;b.j6=1;B(b);}i=h.j_.data[y];if(i!==b)m:{i.kH=0;if(i instanceof BJ){l=i.ks;ba=0;bb=l.j8;while(true){if(ba>=bb)break m;if(ba>=l.j8)break g;i=l.j_.data[ba];if(i!==b)n:{E5(i,0);if(i instanceof BJ){i=i.ks;bc=0;bd=i.j8;while(true){if(bc>=bd)break n;Pg(a,DK(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(Nc(Et(FK(FZ(FK(FZ(En(),A(18)),ba),A(19)),l.j8))));}}}B9.W(3042);b
=a.qV;c=a.mf.q2.qH;C$(b.td,c.ln);b.oz=1;b=a.qV;if(!b.sL){c=new BN;c.j5=1;c.j6=1;c.j7=A(20);B(c);}FT(b,HS);O$(a.lw,a.qV);b=a.qV;FQ(b.ld);b.mQ=null;B9.bb(3042);},
Pg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.kH=0;if(b instanceof BJ){d=b.ks;e=0;f=d.j8;while(true){if(e>=f)break a;if(e>=d.j8){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,e,10);D(b,b.j2,A(19));e=d.j8;J(b,b.j2,e,10);d=new I;g=b.j3;h=g.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0)){d.j4=L(g.data,0,f);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}b=d.j_.data[e];if(b!==c)b:{b.kH=0;if(b instanceof BJ){j=b.ks;i=0;k=j.j8;while(true){if(i>=k)break b;if
(i>=j.j8){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));e=j.j8;J(b,b.j2,e,10);d=new I;g=b.j3;h=g.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0)){d.j4=L(g.data,0,f);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}b=j.j_.data[i];if(b!==c)c:{b.kH=0;if(b instanceof BJ){l=b.ks;m=0;n=l.j8;while(true){if(m>=n)break c;if(m>=l.j8){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,m,10);D(b,b.j2,A(19));e=l.j8;J(b,b.j2,e,10);d=new I;g=b.j3;h=g.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0))
{d.j4=L(g.data,0,f);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}b=l.j_.data[m];if(b!==c)d:{b.kH=0;if(b instanceof BJ){b=b.ks;o=0;p=b.j8;while(true){if(o>=p)break d;if(o>=b.j8){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,o,10);D(c,c.j2,A(19));e=b.j8;J(c,c.j2,e,10);b=new I;g=c.j3;h=g.data;f=c.j2;i=h.length;if(f>=0&&f<=(i-0|0)){b.j4=L(g.data,0,f);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;b.j5=1;b.j6=1;B(b);}q=b.j_.data[o];if(q!==c)e:{q.kH=0;if(q instanceof BJ){r=q.ks;s=0;t=r.j8;while(true){if(s>=t)break e;if
(s>=r.j8){c=new H;b=new K;Bt(b);b.j3=G(16);BY(b,b.j2,A(18));J(b,b.j2,s,10);BY(b,b.j2,A(19));e=r.j8;J(b,b.j2,e,10);d=new I;g=b.j3;h=g.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0)){d.j4=L(g.data,0,f);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}q=r.j_.data[s];if(q!==c)f:{q.kH=0;if(q instanceof BJ){q=q.ks;u=0;v=q.j8;while(true){if(u>=v)break f;if(u>=q.j8){c=new H;b=new K;DM(b,16);B$(b,b.j2,A(18));Ip(b,u,10);B$(b,b.j2,A(19));Ip(b,q.j8,10);d=new I;g=b.j3;h=g.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0)){d.j4
=L(g.data,0,f);c.j5=1;c.j6=1;c.j7=d;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}w=q.j_.data[u];if(w!==c)g:{w.kH=0;if(w instanceof BJ){w=w.ks;x=0;y=w.j8;while(true){if(x>=y)break g;if(x>=w.j8){c=new H;b=new K;E0(b);Jq(b,A(18));Iu(b,x);Jq(b,A(19));Iu(b,w.j8);d=new I;g=b.j3;h=g.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0)){d.j4=L(g.data,0,f);GO(c,d);B(c);}b=new H;b.j5=1;b.j6=1;B(b);}z=w.j_.data[x];if(z!==c)h:{z.kH=0;if(z instanceof BJ){z=z.ks;ba=0;bb=z.j8;while(true){if(ba>=bb)break h;if(ba>=z.j8)B(Nc(Et(FK(FZ(FK(FZ(En(),
A(18)),ba),A(19)),z.j8))));bc=z.j_.data[ba];if(bc!==c)i:{E5(bc,0);if(bc instanceof BJ){bc=bc.ks;bd=0;be=bc.j8;while(true){if(bd>=be)break i;Pg(a,DK(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
AN1=(a,b)=>{let c,d,e,f,g;c=0;d=a.rL.data.length;while(c<d){e=a.rL.data;f=e[c];if(a.sP.data[c])e[c]=Qb(a,f,a.pO.data[c],a.pR.data[c],c);else if(f!==null){e[c]=null;NZ(a,f,a.pO.data[c],a.pR.data[c],c);}c=c+1|0;}g=Hl;if(!(g!==M9&&g!==ML&&g!==g))a.sg=Qb(a,a.sg,a.rS,a.rT,(-1));RF(a.lw,b);},
Qb=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.lY;g=c;h=d;f.j$=g;f.j9=h;EU(a.mf,f);f=a.lY;g=f.j$;h=f.j9;i=a.lw;f.j$=g;f.j9=h;Dx(i,f);f=a.lw;i=a.lY;j=H6(f,i.j$,i.j9,1);if(j===b)return b;if(b!==null){Cw();i=Bv;d=BE(i,M(Y));k=d<0?null:i.kP.data[d];if(k===null){k=new CB;i=new Bg;i.ku=0;i.j_=Q(C,4);k.kn=i;k.kV=100;a:{try{i=CL(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CJ(M(Y),null);CN(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i
=null;}k.kG=i;if(i===null){b=new Bz;i=new K;i.j3=G(16);D(i,i.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);f=M(Y).kc;D(i,i.j2,f);f=new I;l=i.j3;m=l.data;d=i.j2;e=m.length;if(d>=0&&d<=(e-0|0)){f.j4=L(l.data,0,d);b.j5=1;b.j6=1;b.j7=f;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(Y),k);}f=k.kn;c=f.j8;if(c){if(!c){b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);}c=c-1|0;f.j8=c;l=f.j_.data;f=l[c];l[c]=null;}else b:{try{f=CZ(k.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}i
=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));n=k.kG.lI.lH;if(n.kc===null)n.kc=U(n.kj.$meta.name);k=n.kc;D(b,b.j2,k);k=new I;l=b.j3;m=l.data;d=b.j2;e=m.length;if(d>=0&&d<=(e-0|0)){k.j4=L(l.data,0,d);i.j5=1;i.j6=1;i.j7=k;i.lq=f;B(i);}b=new H;b.j5=1;b.j6=1;B(b);}f=f;f.mu=IP;f.kM=a;i=a.lY;f.nQ=i.j$;f.nR=i.j9;f.or=e;f.ls=j;D0(b,f);i=Bv;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BC;k.kj=o;p=k;o.classObject=p;}}c=BE(i,k);i=c<0?null:i.kP.data[c];if(i!==null){k=i.kn;if(k.j8<i.kV){Bf(k,f);c
=i.kS;d=i.kn.j8;if(c>d)d=c;i.kS=d;if(BB(f,BA)){f=f;f.kM=null;f.la=null;f.lb=null;f.lj=0;f.lf=1;f.k5=0;f.li=0;f.k9=0;f.ls=null;f.ll=(-1);}}else if(BB(f,BA)){f=f;f.kM=null;f.la=null;f.lb=null;f.lj=0;f.lf=1;f.k5=0;f.li=0;f.k9=0;f.ls=null;f.ll=(-1);}}}if(j!==null){Cw();i=Bv;d=BE(i,M(Y));k=d<0?null:i.kP.data[d];if(k===null){k=new CB;i=new Bg;i.ku=0;i.j_=Q(C,4);k.kn=i;k.kV=100;c:{try{i=CL(M(Y),null);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CJ(M(Y),null);CN(i,1);break c;}catch
($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}k.kG=i;if(i===null){b=new Bz;i=new K;i.j3=G(16);D(i,i.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);f=M(Y).kc;D(i,i.j2,f);f=new I;l=i.j3;m=l.data;d=i.j2;e=m.length;if(d>=0&&d<=(e-0|0)){f.j4=L(l.data,0,d);b.j5=1;b.j6=1;b.j7=f;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(Y),k);}f=k.kn;c=f.j8;if(c){if(!c){b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);}c=c-1|0;f.j8=c;l=f.j_.data;f=l[c];l[c]=null;}else d:{try{f=CZ(k.kG,null);break d;}catch($$e)
{$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}i=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));n=k.kG.lI.lH;if(n.kc===null)n.kc=U(n.kj.$meta.name);k=n.kc;D(b,b.j2,k);k=new I;l=b.j3;m=l.data;d=b.j2;e=m.length;if(d>=0&&d<=(e-0|0)){k.j4=L(l.data,0,d);i.j5=1;i.j6=1;i.j7=k;i.lq=f;B(i);}b=new H;b.j5=1;b.j6=1;B(b);}f=f;f.mu=Nb;f.kM=a;i=a.lY;f.nQ=i.j$;f.nR=i.j9;f.or=e;f.ls=b;D0(j,f);b=Bv;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BC;i.kj=k;o=i;k.classObject=o;}}c=BE(b,i);b=c
<0?null:b.kP.data[c];if(b!==null){i=b.kn;if(i.j8<b.kV){Bf(i,f);c=b.kS;d=b.kn.j8;if(c>d)d=c;b.kS=d;if(BB(f,BA)){b=f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.ls=null;b.ll=(-1);}}else if(BB(f,BA)){b=f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.ls=null;b.ll=(-1);}}}return j;},
NZ=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.lY;g=c;h=d;f.j$=g;f.j9=h;EU(a.mf,f);Cw();i=Bv;d=BE(i,M(Y));j=d<0?null:i.kP.data[d];if(j===null){j=new CB;i=new Bg;i.ku=0;i.j_=Q(C,4);j.kn=i;j.kV=100;a:{try{i=CL(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CJ(M(Y),null);CN(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}j.kG=i;if(i===null){b=new Bz;i=new K;i.j3=G(16);D(i,i.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);f
=M(Y).kc;D(i,i.j2,f);f=new I;k=i.j3;l=k.data;d=i.j2;e=l.length;if(d>=0&&d<=(e-0|0)){f.j4=L(k.data,0,d);b.j5=1;b.j6=1;b.j7=f;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(Y),j);}f=j.kn;c=f.j8;if(c){if(!c){b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);}c=c-1|0;f.j8=c;k=f.j_.data;f=k[c];k[c]=null;}else b:{try{f=CZ(j.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}i=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));m=j.kG.lI.lH;if(m.kc===null)m.kc=U(m.kj.$meta.name);j=m.kc;D(b,b.j2,j);j=new I;k
=b.j3;l=k.data;d=b.j2;e=l.length;if(d>=0&&d<=(e-0|0)){j.j4=L(k.data,0,d);i.j5=1;i.j6=1;i.j7=j;i.lq=f;B(i);}b=new H;b.j5=1;b.j6=1;B(b);}f=f;f.mu=IP;f.kM=a;i=a.lY;f.nQ=i.j$;f.nR=i.j9;f.or=e;f.ls=b;D0(b,f);b=Bv;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BC;i.kj=j;n=i;j.classObject=n;}}c=BE(b,i);b=c<0?null:b.kP.data[c];if(b!==null){i=b.kn;if(i.j8<b.kV){Bf(i,f);c=b.kS;d=b.kn.j8;if(c>d)d=c;b.kS=d;if(BB(f,BA)){b=f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.ls
=null;b.ll=(-1);}}else if(BB(f,BA)){b=f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.ls=null;b.ll=(-1);}}},
N7=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;if(!SI(a,b,c))return 0;a.sP.data[d]=1;a.pO.data[d]=b;a.pR.data[d]=c;f=a.lY;g=b;h=c;f.j$=g;f.j9=h;EU(a.mf,f);Cw();i=Bv;c=BE(i,M(Y));j=c<0?null:i.kP.data[c];if(j===null){j=new CB;i=new Bg;i.ku=0;i.j_=Q(C,4);j.kn=i;j.kV=100;a:{try{i=CL(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CJ(M(Y),null);CN(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}j.kG=i;if(i===null){i=new Bz;j=new K;j.j3
=G(16);D(j,j.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);f=M(Y).kc;D(j,j.j2,f);f=new I;k=j.j3;l=k.data;c=j.j2;d=l.length;if(c>=0&&c<=(d-0|0)){f.j4=L(k.data,0,c);i.j5=1;i.j6=1;i.j7=f;B(i);}f=new H;f.j5=1;f.j6=1;B(f);}Ce(Bv,M(Y),j);}f=j.kn;b=f.j8;if(b){if(!b){f=new BN;f.j5=1;f.j6=1;f.j7=A(22);B(f);}b=b-1|0;f.j8=b;k=f.j_.data;f=k[b];k[b]=null;}else b:{try{f=CZ(j.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){i=$$je;}else{throw $$e;}}m=new S;f=new K;f.j3=G(16);D(f,f.j2,A(23));n=j.kG.lI.lH;if
(n.kc===null)n.kc=U(n.kj.$meta.name);j=n.kc;D(f,f.j2,j);j=new I;k=f.j3;l=k.data;c=f.j2;d=l.length;if(c>=0&&c<=(d-0|0)){j.j4=L(k.data,0,c);m.j5=1;m.j6=1;m.j7=j;m.lq=i;B(m);}f=new H;f.j5=1;f.j6=1;B(f);}f=f;f.mu=IH;f.kM=a;i=a.lY;g=i.j$;f.nQ=g;h=i.j9;f.nR=h;f.or=d;f.ll=e;j=a.lw;i.j$=g;i.j9=h;Dx(j,i);i=a.lw;j=a.lY;i=H6(i,j.j$,j.j9,1);if(i!==null)D0(i,f);else{i=a.lw;if(i.r4===JR)D0(i,f);}o=f.k5;i=Bv;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BC;j.kj=m;p=j;m.classObject=p;}}b=BE(i,j);i
=b<0?null:i.kP.data[b];if(i!==null){j=i.kn;if(j.j8<i.kV){Bf(j,f);b=i.kS;c=i.kn.j8;if(b>c)c=b;i.kS=c;if(BB(f,BA)){f=f;f.kM=null;f.la=null;f.lb=null;f.lj=0;f.lf=1;f.k5=0;f.li=0;f.k9=0;f.ls=null;f.ll=(-1);}}else if(BB(f,BA)){f=f;f.kM=null;f.la=null;f.lb=null;f.lj=0;f.lf=1;f.k5=0;f.li=0;f.k9=0;f.ls=null;f.ll=(-1);}}return o;},
TH=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a.pO.data[d]=b;a.pR.data[d]=c;a.rS=b;a.rT=c;if(!a.pG.j8)return 0;e=a.lY;f=b;g=c;e.j$=f;e.j9=g;EU(a.mf,e);Cw();h=Bv;c=BE(h,M(Y));i=c<0?null:h.kP.data[c];if(i===null){i=new CB;h=new Bg;h.ku=0;h.j_=Q(C,4);i.kn=h;i.kV=100;a:{try{h=CL(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{h=CJ(M(Y),null);CN(h,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}h=null;}i.kG=h;if(h===null){h=new Bz;i=new K;i.j3
=G(16);D(i,i.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);e=M(Y).kc;D(i,i.j2,e);e=new I;j=i.j3;k=j.data;c=i.j2;d=k.length;if(c>=0&&c<=(d-0|0)){e.j4=L(j.data,0,c);h.j5=1;h.j6=1;h.j7=e;B(h);}e=new H;e.j5=1;e.j6=1;B(e);}Ce(Bv,M(Y),i);}e=i.kn;b=e.j8;if(b){if(!b){e=new BN;e.j5=1;e.j6=1;e.j7=A(22);B(e);}b=b-1|0;e.j8=b;j=e.j_.data;e=j[b];j[b]=null;}else b:{try{e=CZ(i.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){h=$$je;}else{throw $$e;}}l=new S;e=new K;e.j3=G(16);D(e,e.j2,A(23));m=i.kG.lI.lH;if
(m.kc===null)m.kc=U(m.kj.$meta.name);i=m.kc;D(e,e.j2,i);i=new I;j=e.j3;k=j.data;c=e.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);l.j5=1;l.j6=1;l.j7=i;l.lq=h;B(l);}e=new H;e.j5=1;e.j6=1;B(e);}e=e;e.mu=IO;e.kM=a;h=a.lY;e.nQ=h.j$;e.nR=h.j9;e.or=d;h=a.pG;CF(h);j=h.j_;h.nx=j;h.mB=h.mB+1|0;j=j;n=0;o=h.j8;while(n<o){i=j.data[n];if(i.sb==d&&Li(h,i,1)){e.la=i.q0;e.lb=i.qc;if(Ig(i.rc,e))e.k5=1;}n=n+1|0;}Fq(h);p=e.k5;h=Bv;l=e.constructor;if(l===null)i=null;else{i=l.classObject;if(i===null){i=new BC;i.kj=l;q=i;l.classObject
=q;}}b=BE(h,i);h=b<0?null:h.kP.data[b];if(h!==null){i=h.kn;if(i.j8<h.kV){Bf(i,e);b=h.kS;c=h.kn.j8;if(b>c)c=b;h.kS=c;if(BB(e,BA)){e=e;e.kM=null;e.la=null;e.lb=null;e.lj=0;e.lf=1;e.k5=0;e.li=0;e.k9=0;e.ls=null;e.ll=(-1);}}else if(BB(e,BA)){e=e;e.kM=null;e.la=null;e.lb=null;e.lj=0;e.lf=1;e.k5=0;e.li=0;e.k9=0;e.ls=null;e.ll=(-1);}}return p;},
L9=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;a.sP.data[d]=0;a.pO.data[d]=b;a.pR.data[d]=c;if(!a.pG.j8)return 0;f=a.lY;g=b;h=c;f.j$=g;f.j9=h;EU(a.mf,f);Cw();i=Bv;c=BE(i,M(Y));j=c<0?null:i.kP.data[c];if(j===null){j=new CB;i=new Bg;i.ku=0;i.j_=Q(C,4);j.kn=i;j.kV=100;a:{try{i=CL(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{i=CJ(M(Y),null);CN(i,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}i=null;}j.kG=i;if(i===null){i=new Bz;j=new K;j.j3
=G(16);D(j,j.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);f=M(Y).kc;D(j,j.j2,f);f=new I;k=j.j3;l=k.data;c=j.j2;d=l.length;if(c>=0&&c<=(d-0|0)){f.j4=L(k.data,0,c);i.j5=1;i.j6=1;i.j7=f;B(i);}f=new H;f.j5=1;f.j6=1;B(f);}Ce(Bv,M(Y),j);}f=j.kn;b=f.j8;if(b){if(!b){f=new BN;f.j5=1;f.j6=1;f.j7=A(22);B(f);}b=b-1|0;f.j8=b;k=f.j_.data;f=k[b];k[b]=null;}else b:{try{f=CZ(j.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){i=$$je;}else{throw $$e;}}m=new S;f=new K;f.j3=G(16);D(f,f.j2,A(23));n=j.kG.lI.lH;if
(n.kc===null)n.kc=U(n.kj.$meta.name);j=n.kc;D(f,f.j2,j);j=new I;k=f.j3;l=k.data;c=f.j2;d=l.length;if(c>=0&&c<=(d-0|0)){j.j4=L(k.data,0,c);m.j5=1;m.j6=1;m.j7=j;m.lq=i;B(m);}f=new H;f.j5=1;f.j6=1;B(f);}f=f;f.mu=G4;f.kM=a;i=a.lY;f.nQ=i.j$;f.nR=i.j9;f.or=d;f.ll=e;i=a.pG;CF(i);k=i.j_;i.nx=k;i.mB=i.mB+1|0;k=k;o=0;p=i.j8;while(o<p){j=k.data[o];if(j.sb==d&&j.uh==e){CF(i);if(ID(i,j,1)){f.la=j.q0;f.lb=j.qc;if(Ig(j.rc,f))f.k5=1;m=Bv;n=j.constructor;if(n===null)q=null;else{q=n.classObject;if(q===null){q=new BC;q.kj=n;r
=q;n.classObject=r;}}b=BE(m,q);m=b<0?null:m.kP.data[b];if(m!==null){q=m.kn;if(q.j8<m.kV){Bf(q,j);b=m.kS;c=m.kn.j8;if(b>c)c=b;m.kS=c;if(BB(j,BA))j.bt();}else if(BB(j,BA))j.bt();}}}o=o+1|0;}Fq(i);s=f.k5;i=Bv;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BC;j.kj=m;q=j;m.classObject=q;}}b=BE(i,j);i=b<0?null:i.kP.data[b];if(i!==null){j=i.kn;if(j.j8<i.kV){Bf(j,f);b=i.kS;c=i.kn.j8;if(b>c)c=b;i.kS=c;if(BB(f,BA)){f=f;f.kM=null;f.la=null;f.lb=null;f.lj=0;f.lf=1;f.k5=0;f.li=0;f.k9=0;f.ls=null;f.ll
=(-1);}}else if(BB(f,BA)){f=f;f.kM=null;f.la=null;f.lb=null;f.lj=0;f.lf=1;f.k5=0;f.li=0;f.k9=0;f.ls=null;f.ll=(-1);}}return s;},
AD5=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,$$je;a.rS=b;a.rT=c;if(!SI(a,b,c))return 0;d=a.lY;e=b;f=c;d.j$=e;d.j9=f;EU(a.mf,d);Cw();g=Bv;c=BE(g,M(Y));h=c<0?null:g.kP.data[c];if(h===null){h=new CB;g=new Bg;g.ku=0;g.j_=Q(C,4);h.kn=g;h.kV=100;a:{try{g=CL(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{g=CJ(M(Y),null);CN(g,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}g=null;}h.kG=g;if(g===null){g=new Bz;h=new K;h.j3=G(16);D(h,h.j2,A(21));if(M(Y).kc
===null)M(Y).kc=U(M(Y).kj.$meta.name);d=M(Y).kc;D(h,h.j2,d);d=new I;i=h.j3;j=i.data;c=h.j2;k=j.length;if(c>=0&&c<=(k-0|0)){d.j4=L(i.data,0,c);g.j5=1;g.j6=1;g.j7=d;B(g);}d=new H;d.j5=1;d.j6=1;B(d);}Ce(Bv,M(Y),h);}d=h.kn;b=d.j8;if(b){if(!b){d=new BN;d.j5=1;d.j6=1;d.j7=A(22);B(d);}b=b-1|0;d.j8=b;i=d.j_.data;d=i[b];i[b]=null;}else b:{try{d=CZ(h.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){g=$$je;}else{throw $$e;}}l=new S;d=new K;d.j3=G(16);D(d,d.j2,A(23));m=h.kG.lI.lH;if(m.kc===null)m.kc=U(m.kj.$meta.name);h
=m.kc;D(d,d.j2,h);h=new I;i=d.j3;j=i.data;c=d.j2;k=j.length;if(c>=0&&c<=(k-0|0)){h.j4=L(i.data,0,c);l.j5=1;l.j6=1;l.j7=h;l.lq=g;B(l);}d=new H;d.j5=1;d.j6=1;B(d);}d=d;d.mu=K1;d.kM=a;g=a.lY;e=g.j$;d.nQ=e;f=g.j9;d.nR=f;h=a.lw;g.j$=e;g.j9=f;Dx(h,g);g=a.lw;h=a.lY;g=H6(g,h.j$,h.j9,1);if(g===null)g=a.lw;D0(g,d);n=d.k5;g=Bv;l=d.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new BC;h.kj=l;o=h;l.classObject=o;}}b=BE(g,h);g=b<0?null:g.kP.data[b];if(g!==null){h=g.kn;if(h.j8<g.kV){Bf(h,d);b=g.kS;c=g.kn.j8;if
(b>c)c=b;g.kS=c;if(BB(d,BA)){d=d;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}else if(BB(d,BA)){d=d;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}return n;},
ANO=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;d=a.qa;if(d===null)d=a.lw;e=a.lY;f=a.rS;g=a.rT;e.j$=f;e.j9=g;EU(a.mf,e);Cw();h=Bv;i=BE(h,M(Y));j=i<0?null:h.kP.data[i];if(j===null){j=new CB;h=new Bg;h.ku=0;h.j_=Q(C,4);j.kn=h;j.kV=100;a:{try{h=CL(M(Y),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{h=CJ(M(Y),null);CN(h,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}h=null;}j.kG=h;if(h===null){d=new Bz;h=new K;h.j3=G(16);D(h,h.j2,A(21));if(M(Y).kc
===null)M(Y).kc=U(M(Y).kj.$meta.name);e=M(Y).kc;D(h,h.j2,e);e=new I;k=h.j3;l=k.data;i=h.j2;m=l.length;if(i>=0&&i<=(m-0|0)){e.j4=L(k.data,0,i);d.j5=1;d.j6=1;d.j7=e;B(d);}d=new H;d.j5=1;d.j6=1;B(d);}Ce(Bv,M(Y),j);}e=j.kn;n=e.j8;if(n){if(!n){d=new BN;d.j5=1;d.j6=1;d.j7=A(22);B(d);}n=n-1|0;e.j8=n;k=e.j_.data;e=k[n];k[n]=null;}else b:{try{e=CZ(j.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){e=$$je;}else{throw $$e;}}h=new S;d=new K;d.j3=G(16);D(d,d.j2,A(23));o=j.kG.lI.lH;if(o.kc===null)o.kc=U(o.kj.$meta.name);j
=o.kc;D(d,d.j2,j);j=new I;k=d.j3;l=k.data;i=d.j2;m=l.length;if(i>=0&&i<=(m-0|0)){j.j4=L(k.data,0,i);h.j5=1;h.j6=1;h.j7=j;h.lq=e;B(h);}d=new H;d.j5=1;d.j6=1;B(d);}e=e;e.mu=Lp;e.kM=a;h=a.lY;e.nQ=h.j$;e.nR=h.j9;e.zz=b;e.zy=c;D0(d,e);p=e.k5;d=Bv;j=e.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BC;h.kj=j;q=h;j.classObject=q;}}n=BE(d,h);d=n<0?null:d.kP.data[n];if(d!==null){h=d.kn;if(h.j8<d.kV){Bf(h,e);n=d.kS;i=d.kn.j8;if(n>i)i=n;d.kS=i;if(BB(e,BA)){d=e;d.kM=null;d.la=null;d.lb=null;d.lj=
0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}else if(BB(e,BA)){d=e;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}return p;},
AC_=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.pG;CF(d);e=d.j_;d.nx=e;d.mB=d.mB+1|0;e=e;f=0;g=d.j8;h=null;i=null;j=null;a:while(true){if(f>=g){Fq(d);if(c!==null){Cw();b=Bv;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BC;d.kj=k;l=d;k.classObject=l;}}m=BE(b,d);b=m<0?null:b.kP.data[m];if(b!==null){d=b.kn;if(d.j8<b.kV){Bf(d,c);m=b.kS;f=b.kn.j8;if(m>f)f=m;b.kS=f;if(BB(c,BA)){b=c;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.ls=null;b.ll=(-1);}}else if
(BB(c,BA)){b=c;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.ls=null;b.ll=(-1);}}}return;}k=e.data[f];if(k.qc===b){CF(d);if(ID(d,k,1)){if(c===null){Cw();c=Bv;n=BE(c,M(Y));l=n<0?null:c.kP.data[n];if(l===null){l=new CB;c=new Bg;c.ku=0;c.j_=Q(C,4);l.kn=c;l.kV=100;b:{try{c=CL(M(Y),h);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CJ(M(Y),i);CN(c,1);break b;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}l.kG=c;if(c===null){b=new Bz;c=
new K;c.j3=G(16);D(c,c.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);d=M(Y).kc;D(c,c.j2,d);d=new I;e=c.j3;o=e.data;f=c.j2;g=o.length;if(f>=0&&f<=(g-0|0)){d.j4=L(e.data,0,f);b.j5=1;b.j6=1;b.j7=d;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(Y),l);}c:{c=l.kn;m=c.j8;if(m){if(!m)break a;m=m-1|0;c.j8=m;o=c.j_.data;c=o[m];o[m]=null;}else try{c=CZ(l.kG,j);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){c=$$je;d=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));h=l.kG.lI.lH;if(h.kc===null)h.kc=U(h.kj.$meta.name);k
=h.kc;D(b,b.j2,k);k=new I;e=b.j3;o=e.data;f=b.j2;g=o.length;if(f>=0&&f<=(g-0|0)){k.j4=L(e.data,0,f);d.j5=1;d.j6=1;d.j7=k;d.lq=c;B(d);}b=new H;b.j5=1;b.j6=1;B(b);}else{throw $$e;}}}c=c;c.mu=G4;c.kM=a;c.nQ=(-2.147483648E9);c.nR=(-2.147483648E9);}c.la=k.q0;c.lb=k.qc;c.or=k.sb;c.ll=k.uh;Ig(k.rc,c);}}f=f+1|0;}b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);},
Ew=(a,b)=>{let c,d,e;c=0;d=a.rL.data.length;while(c<d){e=a.rL.data;if(b===e[c]){e[c]=null;NZ(a,b,a.pO.data[c],a.pR.data[c],c);}c=c+1|0;}if(b===a.sg){a.sg=null;NZ(a,b,a.rS,a.rT,(-1));}},
ALl=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.nE===b)return 1;Cw();c=Bv;d=BE(c,M(C1));e=d<0?null:c.kP.data[d];if(e===null){e=new CB;c=new Bg;c.ku=0;c.j_=Q(C,4);e.kn=c;e.kV=100;a:{try{c=CL(M(C1),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CJ(M(C1),null);CN(c,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}e.kG=c;if(c===null){b=new Bz;c=new K;c.j3=G(16);D(c,c.j2,A(21));if(M(C1).kc===null)M(C1).kc=U(M(C1).kj.$meta.name);f=M(C1).kc;D(c,
c.j2,f);f=new I;g=c.j3;h=g.data;d=c.j2;i=h.length;if(d>=0&&d<=(i-0|0)){f.j4=L(g.data,0,d);b.j5=1;b.j6=1;b.j7=f;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(C1),e);}f=e.kn;j=f.j8;if(j){if(!j){b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);}j=j-1|0;f.j8=j;g=f.j_.data;f=g[j];g[j]=null;}else b:{try{f=CZ(e.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}c=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));k=e.kG.lI.lH;if(k.kc===null)k.kc=U(k.kj.$meta.name);e=k.kc;D(b,b.j2,e);e=new I;g=b.j3;h=
g.data;d=b.j2;i=h.length;if(d>=0&&d<=(i-0|0)){e.j4=L(g.data,0,d);c.j5=1;c.j6=1;c.j7=e;c.lq=f;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}f=f;f.kM=a;f.w$=Mj;c=a.nE;if(c!==null){f.sd=0;f.oo=b;c.bl(f);}j=f.k9?0:1;if(j){a.nE=b;if(b!==null){f.sd=1;f.oo=c;b.bl(f);j=f.k9?0:1;if(!j)a.nE=c;}}b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kj=e;l=c;e.classObject=l;}}d=BE(b,c);b=d<0?null:b.kP.data[d];if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if(d>i)i=d;b.kS=i;if(BB(f,BA)){b=
f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.oo=null;}}else if(BB(f,BA)){b=f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.oo=null;}}return j;},
AIM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.qa===b)return 1;Cw();c=Bv;d=BE(c,M(C1));e=d<0?null:c.kP.data[d];if(e===null){e=new CB;c=new Bg;c.ku=0;c.j_=Q(C,4);e.kn=c;e.kV=100;a:{try{c=CL(M(C1),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CJ(M(C1),null);CN(c,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}e.kG=c;if(c===null){b=new Bz;c=new K;c.j3=G(16);D(c,c.j2,A(21));if(M(C1).kc===null)M(C1).kc=U(M(C1).kj.$meta.name);f=M(C1).kc;D(c,
c.j2,f);f=new I;g=c.j3;h=g.data;d=c.j2;i=h.length;if(d>=0&&d<=(i-0|0)){f.j4=L(g.data,0,d);b.j5=1;b.j6=1;b.j7=f;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(C1),e);}f=e.kn;j=f.j8;if(j){if(!j){b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);}j=j-1|0;f.j8=j;g=f.j_.data;f=g[j];g[j]=null;}else b:{try{f=CZ(e.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}c=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));k=e.kG.lI.lH;if(k.kc===null)k.kc=U(k.kj.$meta.name);e=k.kc;D(b,b.j2,e);e=new I;g=b.j3;h=
g.data;d=b.j2;i=h.length;if(d>=0&&d<=(i-0|0)){e.j4=L(g.data,0,d);c.j5=1;c.j6=1;c.j7=e;c.lq=f;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}f=f;f.kM=a;f.w$=NC;c=a.qa;if(c!==null){f.sd=0;f.oo=b;c.bl(f);}j=f.k9?0:1;if(j){a.qa=b;if(b!==null){f.sd=1;f.oo=c;b.bl(f);j=f.k9?0:1;if(!j)a.qa=c;}}b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kj=e;l=c;e.classObject=l;}}d=BE(b,c);b=d<0?null:b.kP.data[d];if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if(d>i)i=d;b.kS=i;if(BB(f,BA)){b=
f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.oo=null;}}else if(BB(f,BA)){b=f;b.kM=null;b.la=null;b.lb=null;b.lj=0;b.lf=1;b.k5=0;b.li=0;b.k9=0;b.oo=null;}}return j;},
SI=(a,b,c)=>{let d,e,f,g,h;d=a.mf;e=d.pY;f=e+d.qy|0;g=d.pZ;h=g+d.nf|0;c=(B3.lm.height-1|0)-c|0;return b>=e&&b<f&&c>=g&&c<h?1:0;};
let BA=F(0);
function FD(){let a=this;C.call(a);a.kM=null;a.la=null;a.lb=null;a.lj=0;a.lf=0;a.k5=0;a.li=0;a.k9=0;}
let ARs=a=>{a.k5=1;},
AKA=a=>{return a.lf;},
Ir=a=>{return a.li;},
F2=a=>{return a.k9;};
let Dn=F(0);
let B8=F(0);
function BG(){let a=this;C.call(a);a.kk=null;a.ke=0;}
let APu=a=>{return a.ke;},
AFx=a=>{return a.kk;},
YD=(a,b)=>{return a!==b?0:1;};
let Hg=F(BG);
let JR=null,Wa=null,AEU=null,Xt=null;
let AOG=()=>{let b,c,d;b=new Hg;b.kk=A(24);b.ke=0;JR=b;c=new Hg;c.kk=A(25);c.ke=1;Wa=c;d=new Hg;d.kk=A(26);d.ke=2;AEU=d;Xt=T(Hg,[b,c,d]);};
function CE(){let a=this;C.call(a);a.lC=null;a.k2=null;a.wj=null;a.sW=null;a.qn=null;a.y0=null;a.r4=null;a.ni=0;a.kH=0;a.kx=0.0;a.kJ=0.0;a.lr=0.0;a.lD=0.0;a.pJ=0.0;a.pK=0.0;a.n8=0.0;a.n9=0.0;a.m_=0.0;a.rY=null;}
let F_=a=>{let b,c;b=new K3;b.ku=1;b.j_=Q(C,0);c=new FL;c.pi=1;c.mC=X(0);b.qQ=c;a.wj=b;b=new K3;b.ku=1;b.j_=Q(C,0);c=new FL;c.pi=1;c.mC=X(0);b.qQ=c;a.sW=b;b=new Bg;b.ku=1;b.j_=Q(C,0);a.qn=b;a.r4=JR;a.ni=1;a.n8=1.0;a.n9=1.0;b=new BM;b.k1=1.0;b.k0=1.0;b.kZ=1.0;b.k3=1.0;CX(b);a.rY=b;},
AXA=()=>{let a=new CE();F_(a);return a;},
G5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.qn;if(!c.j8)return;d=a.lC;d!==null&&!d.uL;a:{try{e=0;while(e<c.j8){d=DK(c,e);if(d.bu(b)&&e<c.j8){f=DK(c,e)===d?e:D4(c,d,1);if(f!=(-1)){Dm(c,f);d.bx(null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Z($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return;}h=a.T();c=new Bz;d=new K;d.j3=G(16);D(d,d.j2,A(27));i=h.j4.length;e=128;if(i<e)e=i;j=Ch(h,0,e);D(d,d.j2,j);j=new I;k=d.j3;l=k.data;e=d.j2;m=l.length;if(e>=0&&e<=(m-0|0)){j.j4=L(k.data,0,e);c.j5=1;c.j6=1;c.j7
=j;c.lq=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);},
D0=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.kM===null)b.kM=a.lC;b.la=a;Cw();c=Bv;d=BE(c,M(Bg));e=d<0?null:c.kP.data[d];if(e===null){e=new CB;c=new Bg;c.ku=0;c.j_=Q(C,4);e.kn=c;e.kV=100;a:{try{c=CL(M(Bg),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{c=CJ(M(Bg),null);CN(c,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}c=null;}e.kG=c;if(c===null){b=new Bz;c=new K;c.j3=G(16);D(c,c.j2,A(21));if(M(Bg).kc===null)M(Bg).kc=U(M(Bg).kj.$meta.name);f=
M(Bg).kc;D(c,c.j2,f);f=new I;g=c.j3;h=g.data;d=c.j2;i=h.length;if(d>=0&&d<=(i-0|0)){f.j4=L(g.data,0,d);b.j5=1;b.j6=1;b.j7=f;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(Bg),e);}f=e.kn;j=f.j8;if(j){if(!j){b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);}j=j-1|0;f.j8=j;g=f.j_.data;f=g[j];g[j]=null;}else b:{try{f=CZ(e.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){f=$$je;}else{throw $$e;}}c=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));k=e.kG.lI.lH;if(k.kc===null)k.kc=U(k.kj.$meta.name);e=k.kc;D(b,b.j2,e);e=new I;g
=b.j3;h=g.data;d=b.j2;i=h.length;if(d>=0&&d<=(i-0|0)){e.j4=L(g.data,0,d);c.j5=1;c.j6=1;c.j7=e;c.lq=f;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}f=f;c=a.k2;while(c!==null){Bf(f,c);c=c.k2;}c:{try{g=f.j_;j=f.j8-1|0;}catch($$e){$$je=Z($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;I4(g.data[j],b,1);if(Ir(b))break;j=j+(-1)|0;}j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j_;d=0;i=f.j8;b=null;if(d>i){b=new Bk;b.j5=1;b.j6=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j8=0;b=Bv;m=f.constructor;if(m===null)k
=null;else{k=m.classObject;if(k===null){k=new BC;k.kj=m;c=k;m.classObject=c;}}d=BE(b,k);b=d<0?null:b.kP.data[d];if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if(d>i)i=d;b.kS=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}e:{try{I4(a,b,1);if(!Ir(b))break e;j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j_;d=0;i=f.j8;b=null;if(d>i){b=new Bk;b.j5=1;b.j6=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j8=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=
new BC;c.kj=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kP.data[d];if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if(d>i)i=d;b.kS=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}f:{try{I4(a,b,0);if(AKA(b))break f;j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j_;d=0;i=f.j8;b=null;if(d>i){b=new Bk;b.j5=1;b.j6=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j8=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kj=e;m=c;e.classObject=m;}}d=BE(b,
c);b=d<0?null:b.kP.data[d];if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if(d>i)i=d;b.kS=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}g:{try{if(!Ir(b))break g;j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j_;d=0;i=f.j8;b=null;if(d>i){b=new Bk;b.j5=1;b.j6=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j8=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kj=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kP.data[d];if(b!==null){c=b.kn;if(c.j8
<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if(d>i)i=d;b.kS=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}try{j=0;d=f.j8;}catch($$e){$$je=Z($$e);b=$$je;break c;}h:{try{while(j<d){I4(g.data[j],b,0);if(Ir(b))break h;j=j+1|0;}j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j_;d=0;i=f.j8;b=null;if(d>i){b=new Bk;b.j5=1;b.j6=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j8=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kj=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:
b.kP.data[d];if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if(d>i)i=d;b.kS=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}try{j=F2(b);}catch($$e){$$je=Z($$e);b=$$je;break c;}g=f.j_;d=0;i=f.j8;b=null;if(d>i){b=new Bk;b.j5=1;b.j6=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j8=0;b=Bv;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kj=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kP.data[d];if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,f);d=b.kS;i=b.kn.j8;if
(d>i)i=d;b.kS=i;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}return j;}g=f.j_;j=0;d=f.j8;c=null;if(j>d){b=new Bk;b.j5=1;b.j6=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.j8=0;if(f===null){f=new Bk;f.j5=1;f.j6=1;f.j7=A(28);B(f);}c=Bv;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BC;e.kj=m;k=e;m.classObject=k;}}j=BE(c,e);c=j<0?null:c.kP.data[j];if(c!==null){e=c.kn;if(e.j8<c.kV){Bf(e,f);j=c.kS;d=c.kn.j8;if(j>d)d=j;c.kS=d;if(BB(f,BA))f.bt();}else if(BB(f,BA))f.bt();}B(b);},
I4=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.la===null){b=new Bk;b.j5=1;b.j6=1;b.j7=A(29);B(b);}d=!c?a.wj:a.sW;if(!d.j8)return b.k9;b.lb=a;b.lj=c;if(b.kM===null)b.kM=a.lC;a:{try{AMX(d);e=0;f=d.j8;while(e<f){if(Ig(DK(d,e),b))ARs(b);e=e+1|0;}AO1(d);}catch($$e){$$je=Z($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return b.k9;}h=a.T();d=new Bz;b=new K;b.j3=G(16);D(b,b.j2,A(27));i=h.j4.length;e=128;if(i<e)e=i;h=Ch(h,0,e);D(b,b.j2,h);h=new I;j=b.j3;k=j.data;e=b.j2;f=k.length;if(e>=0&&e<=(f-0|0)){h.j4
=L(j.data,0,e);d.j5=1;d.j6=1;d.j7=h;d.lq=g;B(d);}b=new H;b.j5=1;b.j6=1;B(b);},
RV=(a,b,c,d)=>{if(d&&a.r4!==JR)return null;if(!a.ni)return null;if(!(b>=0.0&&b<a.lr&&c>=0.0&&c<a.lD))a=null;return a;},
AUJ=a=>{return a.lC;},
AOw=(a,b)=>{a.lC=b;},
AUO=(a,b)=>{a.k2=b;},
AUu=a=>{return a.ni;},
SM=a=>{return a.kx;},
AD2=(a,b,c,d)=>{if(d&16)b=b-a.lr;else if(!(d&8))b=b-a.lr/2.0;if(d&2)c=c-a.lD;else if(!(d&4))c=c-a.lD/2.0;if(!(a.kx===b&&a.kJ===c)){a.kx=b;a.kJ=c;}},
AXT=a=>{return;},
AUl=a=>{return;},
AUx=a=>{return;},
Nt=(a,b,c,d,e)=>{if(!(a.kx===b&&a.kJ===c)){a.kx=b;a.kJ=c;}if(!(a.lr===d&&a.lD===e)){a.lr=d;a.lD=e;}},
MQ=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bk;c.j5=1;c.j6=1;c.j7=A(30);B(c);}c=a.k2;if(c===null)return 0;d=c.ks;e=d.j8;if(e<=1)return 0;f=e-1|0;if(b<f)f=b;if(f<e){if(d.j_.data[f]===a)return 0;CF(d);if(!ID(d,a,1))return 0;CF(d);SL(d,f,a);return 1;}g=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,f,10);D(c,c.j2,A(19));b=d.j8;J(c,c.j2,b,10);d=new I;h=c.j3;i=h.data;f=c.j2;e=i.length;if(f>=0&&f<=(e-0|0)){d.j4=L(h.data,0,f);g.j5=1;g.j6=1;g.j7=d;B(g);}c=new H;c.j5=1;c.j6=1;B(c);},
UA=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.k2;if(c!==null){d=c.k2;if(d!==null){e=d.k2;if(e!==null){f=e.k2;if(f!==null){g=f.k2;if(g!==null){h=g.k2;if(h!==null){i=h.k2;if(i!==null){j=i.k2;if(j!==null){k=j.k2;if(k!==null)UA(k,b);Dx(j,b);}Dx(i,b);}Dx(h,b);}Dx(g,b);}Dx(f,b);}Dx(e,b);}Dx(d,b);}Dx(c,b);}Dx(a,b);return b;},
Dx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.m_;d=a.n8;e=a.n9;f=a.kx;g=a.kJ;if(c!==0.0){h=c*0.01745329238474369;i=YO(h);j=JH(h);k=a.pJ;l=a.pK;m=b.j$-f-k;n=b.j9-g-l;b.j$=(m*i+n*j)/d+k;b.j9=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.j$=b.j$-f;b.j9=b.j9-g;}else{k=a.pJ;l=a.pK;b.j$=(b.j$-f-k)/d+k;b.j9=(b.j9-g-l)/e+l;}return b;},
ANB=(a,b)=>{Vs(a,b);},
Vs=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.kH)return;c=HS;d=b.mQ;if(d!==c){if(d===null){b=new BN;b.j5=1;b.j6=1;b.j7=A(31);B(b);}if(!b.sL){c=new BN;c.j5=1;c.j6=1;c.j7=A(32);B(c);}FQ(b.ld);b.mQ=null;FT(b,c);}c=a.lC;if(c!==null){d=c.wo;c=b.uX;c.k1=d.k1;c.k0=d.k0;c.kZ=d.kZ;c.k3=d.k3;}e=a.kx;f=a.kJ;g=a.pJ;h=a.pK;i=a.lr;j=a.lD;k=a.n8;l=a.n9;m=a.m_;c=b.uX;AJh(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
E5=(a,b)=>{a.kH=b;if(b)BR=1;},
AWv=a=>{return a.kH;},
SX=a=>{let b,c,d,e;b=a.y0;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kj=b;d=c;b.classObject=d;}}if(c.kc===null)c.kc=U(c.kj.$meta.name);b=c.kc;e=EY(b,46,b.j4.length-1|0);if(e!=(-1))b=Ch(b,e+1|0,b.j4.length);}return b;};
let Mp=F(0);
function BJ(){let a=this;CE.call(a);a.ks=null;a.tz=null;a.un=null;a.pE=null;a.no=0;a.zn=null;}
let Lo=null;
let RF=(a,b)=>{let c,d,e,f;G5(a,b);c=a.ks;CF(c);d=c.j_;c.nx=d;c.mB=c.mB+1|0;d=d;e=0;f=a.ks.j8;while(e<f){d.data[e].be(b);e=e+1|0;}Fq(a.ks);},
AHT=(a,b,c)=>{let d;if(a.no){d=KF(a);C$(a.pE,b.o1.ln);if(b.ms)D9(b);C$(b.o1,d.ln);if(b.ms)Gc(b);}Qe(a,b,c);if(a.no){d=a.pE;if(b.ms)D9(b);C$(b.o1,d.ln);if(b.ms)Gc(b);}},
Qe=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.rY.k3;d=a.ks;CF(d);e=d.j_;d.nx=e;d.mB=d.mB+1|0;f=e;g=a.zn;if(g===null){if(a.no){h=0;i=d.j8;while(h<i){j=f.data[h];if(j.ni)j.bP(b,c);h=h+1|0;}}else{k=a.kx;l=a.kJ;a.kx=0.0;a.kJ=0.0;h=0;i=d.j8;while(h<i){j=f.data[h];if(j.ni){m=j.kx;n=j.kJ;j.kx=m+k;j.kJ=n+l;j.bP(b,c);j.kx=m;j.kJ=n;}h=h+1|0;}a.kx=k;a.kJ=l;}}else{o=g.nO;p=o+g.nV;q=g.nN;r=q+g.nz;if(a.no){s=0;i=d.j8;while(s<i){j=f.data[s];if(j.ni){m=j.kx;n=j.kJ;if(m<=p&&n<=r&&m+j.lr>=o&&n+j.lD>=q)j.bP(b,c);}s=s
+1|0;}}else{k=a.kx;l=a.kJ;a.kx=0.0;a.kJ=0.0;s=0;i=d.j8;while(s<i){j=f.data[s];if(j.ni){m=j.kx;n=j.kJ;if(m<=p&&n<=r&&m+j.lr>=o&&n+j.lD>=q){j.kx=m+k;j.kJ=n+l;j.bP(b,c);j.kx=m;j.kJ=n;}}s=s+1|0;}a.kx=k;a.kJ=l;}}Fq(d);},
O$=(a,b)=>{let c;Vs(a,b);if(a.no){c=KF(a);C$(a.pE,b.rk.ln);C$(b.rk,c.ln);b.oz=1;c=b.mQ;if(c!==null){FQ(b.ld);b.mQ=null;FT(b,c);}}AAc(a,b);if(a.no){c=a.pE;C$(b.rk,c.ln);b.oz=1;}},
AAc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.ks;CF(c);d=c.j_;c.nx=d;c.mB=c.mB+1|0;e=d;if(a.no){f=0;g=c.j8;while(f<g){h=e.data[f];if(h.ni&&!(!h.kH&&!(h instanceof BJ)))h.Z(b);f=f+1|0;}h=b.mQ;if(h!==null){FQ(b.ld);b.mQ=null;FT(b,h);}}else{i=a.kx;j=a.kJ;a.kx=0.0;a.kJ=0.0;k=0;g=c.j8;while(k<g){h=e.data[k];if(h.ni&&!(!h.kH&&!(h instanceof BJ))){l=h.kx;m=h.kJ;h.kx=l+i;h.kJ=m+j;h.Z(b);h.kx=l;h.kJ=m;}k=k+1|0;}a.kx=i;a.kJ=j;}Fq(c);},
KF=a=>{let b,c,d,e,f;b=a.tz;c=a.pJ;d=a.pK;AGu(b,a.kx+c,a.kJ+d,a.m_,a.n8,a.n9);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.oV=b.oV+b.oW*c+b.oU*e;b.oX=b.oX+b.oY*c+b.oZ*e;}f=a.k2;a:{while(true){if(f===null)break a;if(f.no)break;f=f.k2;}}if(f!==null)AAh(b,f.tz);AQn(a.un,b);return a.un;},
H6=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.r4===Wa)return null;if(!a.ni)return null;e=Lo;f=a.ks;g=f.j_;h=f.j8-1|0;while(true){if(h<0)return RV(a,b,c,d);i=g.data[h];e.j$=b;e.j9=c;Dx(i,e);f=i.J(e.j$,e.j9,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AN7=(a,b)=>{let c,d,e,f;a.lC=b;c=a.ks;d=c.j_;e=0;f=c.j8;while(e<f){d.data[e].x(b);e=e+1|0;}},
Ly=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.kH=b;if(b)BR=1;a:{if(c){d=a.ks;if(!CA){if(d.kE===null){e=new C0;e.mb=d;e.me=1;d.kE=e;}e=CK(d.kE);}else{e=new Cr;e.kU=1;e.kY=d;e.l1=1;}b:while(true){if(!e.kU){e=new S;e.j5=1;e.j6=1;e.j7=A(17);B(e);}if(!(e.lN>=e.kY.j8?0:1))break a;d=Cm(e);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else{d=d;d.kH=b;if(b)BR=1;c:{if(c){d=d.ks;if(CA){f=new Cr;f.kU=1;f.kY=d;f.l1=1;}else{if(d.kE===null){g=new C0;g.mb=d;g.me=1;d.kE=g;}f=CK(d.kE);}while(true){if(!f.kU){e=new S;e.j5=1;e.j6=1;e.j7=A(17);B(e);}if
(!(f.lN>=f.kY.j8?0:1))break c;d=Cm(f);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else{d=d;d.kH=b;if(b)BR=1;d:{if(c){d=d.ks;if(CA){h=new Cr;h.kU=1;h.kY=d;h.l1=1;}else{if(d.kE===null){g=new C0;g.mb=d;g.me=1;d.kE=g;}h=CK(d.kE);}while(true){if(!h.kU){e=new S;e.j5=1;e.j6=1;e.j7=A(17);B(e);}if(!(h.lN>=h.kY.j8?0:1))break d;d=Cm(h);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else{d=d;d.kH=b;if(b)BR=1;e:{if(c){d=d.ks;if(CA){i=new Cr;i.kU=1;i.kY=d;i.l1=1;}else{if(d.kE===null){g=new C0;g.mb=d;g.me=1;d.kE=g;}i=CK(d.kE);}while
(true){if(!i.kU){e=new S;e.j5=1;e.j6=1;e.j7=A(17);B(e);}if(!(i.lN>=i.kY.j8?0:1))break e;d=Cm(i);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else{d=d;d.kH=b;if(b)BR=1;f:{if(c){d=d.ks;if(CA){j=new Cr;j.kU=1;j.kY=d;j.l1=1;}else{if(d.kE===null){g=new C0;g.mb=d;g.me=1;d.kE=g;}j=CK(d.kE);}while(true){if(!j.kU){e=new S;e.j5=1;e.j6=1;e.j7=A(17);B(e);}if(!(j.lN>=j.kY.j8?0:1))break f;d=Cm(j);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else{d=d;d.kH=b;if(b)BR=1;g:{if(c){d=d.ks;if(CA){g=new Cr;g.kU=1;g.kY=d;g.l1=1;}else{if(d.kE
===null){g=new C0;Bt(g);g.mb=d;g.me=1;d.kE=g;}g=CK(d.kE);}while(true){if(!g.kU){e=new S;e.j5=1;e.j6=1;e.j7=A(17);B(e);}if(!(g.lN>=g.kY.j8?0:1))break g;d=Cm(g);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else{d=d;d.kH=b;if(b)BR=1;h:{if(c){d=d.ks;if(CA){k=new Cr;Bt(k);k.kU=1;k.kY=d;k.l1=1;}else{if(d.kE===null)d.kE=LK(d,1);k=CK(d.kE);}while(true){if(!k.kU){e=new S;GO(e,A(17));B(e);}if(!(k.lN>=k.kY.j8?0:1))break h;d=Cm(k);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else{d=d;d.kH=b;if(b)BR=1;i:{if(c){d=d.ks;if(CA)l=L_(d,
1);else{if(d.kE===null)d.kE=NR(d);l=CK(d.kE);}while(true){if(!l.kU)break b;if(!(l.lN>=l.kY.j8?0:1))break i;d=Cm(l);if(!(d instanceof BJ)){d.kH=b;if(b)BR=1;}else j:{d=d;E5(d,b);if(c){d=Gh(d.ks);while(true){if(!Hu(d))break j;m=Cm(d);if(!(m instanceof BJ))E5(m,b);else Ly(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(Kz(A(17)));}}},
ABK=a=>{let b,c,d,e,f;b=new K;b.j3=G(128);TP(a,b,1);c=b.j2-1|0;b.j2=c;d=new I;e=b.j3;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.j4=L(e.data,0,c);return d;}b=new H;b.j5=1;b.j6=1;B(b);},
TP=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=SX(a);D(b,b.j2,d);e=b.j2;Bj(b,e,e+1|0);b.j3.data[e]=10;d=a.ks;CF(d);f=d.j_;d.nx=f;d.mB=d.mB+1|0;g=f;h=0;i=a.ks.j8;j=c+1|0;while(h<i){k=0;while(k<c){D(b,b.j2,A(33));k=k+1|0;}d=g.data[h];if(d instanceof BJ)TP(d,b,j);else{D(b,b.j2,d===null?A(2):d.T());e=b.j2;Bj(b,e,e+1|0);b.j3.data[e]=10;}h=h+1|0;}Fq(a.ks);},
AVM=()=>{Lo=new Bb;};
let Gi=F(0);
let DG=F(0);
let GX=F();
let GA=F(0);
let B2=F();
let Jk=null;
let Ig=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,$$je;if(!(b instanceof Y))return 0;L6();switch(KR.data[b.mu.ke]){case 1:break;case 2:return 0;case 3:return 0;default:c=b.lb;d=Jk;e=b.nQ;f=b.nR;d.j$=e;d.j9=f;UA(c,d);switch(KR.data[b.mu.ke]){case 4:if(b.wQ){g=b.kM;h=b.lb;i=b.la;j=b.or;k=b.ll;Cw();d=Bv;l=BE(d,M(DR));c=l<0?null:d.kP.data[l];if(c===null){c=new CB;d=new Bg;d.ku=0;d.j_=Q(C,4);c.kn=d;c.kV=100;a:{try{d=CL(M(DR),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CJ(M(DR),
null);CN(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}c.kG=d;if(d===null){d=new Bz;c=new K;Bt(c);c.j3=G(16);BY(c,c.j2,A(21));if(M(DR).kc===null)M(DR).kc=U(M(DR).kj.$meta.name);b=M(DR).kc;BY(c,c.j2,b);b=new I;m=c.j3;n=m.data;l=c.j2;o=n.length;if(l>=0&&l<=(o-0|0)){b.j4=L(m.data,0,l);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;b.j5=1;b.j6=1;B(b);}Ce(Bv,M(DR),c);}b:{b=c.kn;p=b.j8;if(p){if(!p){b=new BN;b.j5=1;b.j6=1;b.j7=A(22);B(b);}p=p-1|0;b.j8=p;m=b.j_.data;b=m[p];m[p]=null;}else try
{b=CZ(c.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;i=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));g=c.kG.lI.lH;if(g.kc===null)g.kc=U(g.kj.$meta.name);c=g.kc;D(b,b.j2,c);c=new I;m=b.j3;n=m.data;l=b.j2;o=n.length;if(l>=0&&l<=(o-0|0)){c.j4=L(m.data,0,l);i.j5=1;i.j6=1;Bi(i);i.j7=c;i.lq=d;B(i);}b=new H;b.j5=1;b.j6=1;B(b);}else{throw $$e;}}}b=b;b.qc=h;b.q0=i;b.rc=a;b.sb=j;b.uh=k;Bf(g.pG,b);}return 1;case 5:d=Jk;AN4(a,b,d.j$,d.j9,b.or,b.ll);return 1;case 6:return 1;case 7:return 0;case 8:return 0;case 9:return 0;case 10:return 0;default:}return 0;}return 0;},
AXq=()=>{Jk=new Bb;};
let He=F(B2);
let AL4=F(He);
let GF=F(BG);
let Mj=null,NC=null,UH=null;
let YL=()=>{let b,c;b=new GF;b.kk=A(34);b.ke=0;Mj=b;c=new GF;c.kk=A(35);c.ke=1;NC=c;UH=T(GF,[b,c]);};
let Nl=F(0);
let IV=F(0);
let Gy=F(0);
let DD=F();
let APh=F(DD);
let M6=F(GX);
let MG=F();
let TQ=null,TU=null;
let AVi=()=>{TQ=new Bb;TU=new Bb;};
let ACN=F();
let Xo=F();
let V4=F(0);
let LJ=F();
let ALs=F(LJ);
function C1(){let a=this;FD.call(a);a.sd=0;a.w$=null;a.oo=null;}
let R4=a=>{a.lf=1;},
AXx=()=>{let a=new C1();R4(a);return a;},
Wg=a=>{a.kM=null;a.la=null;a.lb=null;a.lj=0;a.lf=1;a.k5=0;a.li=0;a.k9=0;a.oo=null;};
let Rr=F();
let XL=null;
let Wt=()=>{Wt=BQ(Rr);AIR();};
let AIR=()=>{let b,c;b=X((UH.p()).data.length);c=b.data;XL=b;c[Mj.ke]=1;c[NC.ke]=2;};
let AJm=F();
let Tp=F();
let WH=null;
let R7=()=>{R7=BQ(Tp);ABd();};
let ABd=()=>{let b,c;b=X((K0.p()).data.length);c=b.data;WH=b;c[IH.ke]=1;c[G4.ke]=2;c[IO.ke]=3;};
let APg=F(DD);
let Fj=F();
let Tk=F(Fj);
let Wc=F();
let AO3=0,ASe=0,AJn=0,ASt=0,AFk=0;
let Uk=()=>{Uk=BQ(Wc);AR6();};
let AR6=()=>{AO3=C9(U(navigator.platform),A(7));ASe=C9(U(navigator.platform),A(8));AJn=C9(U(navigator.platform),A(9));ASt=!C9(U(navigator.platform),A(10))&&!C9(U(navigator.platform),A(11))?0:1;AFk=!C9(U(navigator.platform),A(12))&&!C9(U(navigator.platform),A(13))&&!C9(U(navigator.platform),A(14))?0:1;};
let LY=F();
let ARS=F(He);
let St=null;
let AVY=()=>{St=new Bb;};
let AEc=F();
let SE=null;
let AXE=()=>{SE=new Bb;};
let UV=F();
let ACt=null,Yz=null,ASP=null;
let VB=()=>{VB=BQ(UV);AOx();};
let AOx=()=>{let b;b=new Bg;b.ku=1;b.j_=Q(C,16);ACt=b;b=new Bn;CT();Yz=b;ASP=new D_;};
let Nd=F();
let IE=F(Fj);
let VY=F(Fj);
let D$=F(B2);
let U_=0.0;
let AXc=()=>{U_=0.10000000149011612;};
let VQ=F(IE);
let ABs=F(FD);
let KA=F(0);
function Y(){let a=this;FD.call(a);a.mu=null;a.nQ=0.0;a.nR=0.0;a.zz=0.0;a.zy=0.0;a.or=0;a.ll=0;a.uW=0;a.xF=0;a.ls=null;a.wQ=0;}
let Ss=a=>{a.lf=1;a.wQ=1;},
AVL=()=>{let a=new Y();Ss(a);return a;},
Qg=a=>{a.kM=null;a.la=null;a.lb=null;a.lj=0;a.lf=1;a.k5=0;a.li=0;a.k9=0;a.ls=null;a.ll=(-1);},
OM=a=>{return a.mu.kk;};
function DR(){let a=this;C.call(a);a.rc=null;a.qc=null;a.q0=null;a.sb=0;a.uh=0;}
let Uh=a=>{return;},
AUk=()=>{let a=new DR();Uh(a);return a;},
OZ=a=>{a.qc=null;a.rc=null;a.q0=null;};
let N1=F();
let KR=null;
let L6=()=>{L6=BQ(N1);AQL();};
let AQL=()=>{let b,c;b=X((K0.p()).data.length);c=b.data;KR=b;c[It.ke]=1;c[Ma.ke]=2;c[JI.ke]=3;c[IH.ke]=4;c[G4.ke]=5;c[IO.ke]=6;c[K1.ke]=7;c[Lp.ke]=8;c[Nb.ke]=9;c[IP.ke]=10;};
let Do=F(BG);
let IH=null,G4=null,IO=null,K1=null,Nb=null,IP=null,Lp=null,It=null,Ma=null,JI=null,K0=null;
let AA$=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Do;b.kk=A(36);b.ke=0;IH=b;c=new Do;c.kk=A(37);c.ke=1;G4=c;d=new Do;d.kk=A(38);d.ke=2;IO=d;e=new Do;e.kk=A(39);e.ke=3;K1=e;f=new Do;f.kk=A(40);f.ke=4;Nb=f;g=new Do;g.kk=A(41);g.ke=5;IP=g;h=new Do;h.kk=A(42);h.ke=6;Lp=h;i=new Do;i.kk=A(43);i.ke=7;It=i;j=new Do;j.kk=A(44);j.ke=8;Ma=j;k=new Do;k.kk=A(45);k.ke=9;JI=k;K0=T(Do,[b,c,d,e,f,g,h,i,j,k]);};
function BP(){let a=this;C.call(a);a.k4=null;a.kX=null;a.l5=null;}
let AMN=a=>{return;},
ANt=(a,b)=>{let c,d,e;a.k4=b;if(a.kX===null)a.kX=b;if(b===null){b=a.l5;if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,a);d=b.kS;e=b.kn.j8;if(d>e)e=d;b.kS=e;if(BB(a,BA))a.bt();}else if(BB(a,BA))a.bt();a.l5=null;}}},
AUR=(a,b)=>{a.kX=b;},
Z_=a=>{a.k4=null;a.kX=null;a.l5=null;a.bY();},
AUn=(a,b)=>{a.l5=b;},
ANw=a=>{let b,c,d,e;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kj=b;d=c;b.classObject=d;}}if(c.kc===null)c.kc=U(c.kj.$meta.name);b=c.kc;e=EY(b,46,b.j4.length-1|0);if(e!=(-1))b=Ch(b,e+1|0,b.j4.length);if(Le(b,A(46)))b=Ch(b,0,b.j4.length-6|0);return b;};
let ES=F(BP);
let AGc=F(ES);
let AK3=F(ES);
function C3(){let a=this;BP.call(a);a.xn=0.0;a.sE=0.0;a.ve=null;a.xh=0;a.s$=0;a.p9=0;}
let ARE=(a,b)=>{let c,d,e,f,$$je;if(a.p9)return 1;c=a.l5;a.l5=null;a:{try{if(!a.s$){S3(a);a.s$=1;}b=a.sE+b;a.sE=b;d=a.xn;e=b<d?0:1;a.p9=e;d=!e?b/d:1.0;f=a.ve;if(f!==null)d=f.b0(d);if(a.xh)d=1.0-d;Sm(a,d);if(a.p9)ASw(a);e=a.p9;break a;}catch($$e){$$je=Z($$e);f=$$je;}a.l5=c;B(f);}a.l5=c;return e;},
ASw=a=>{return;},
ATG=a=>{a.sE=0.0;a.s$=0;a.p9=0;};
let EI=F(C3);
let XM=F(EI);
let Z7=F();
function NN(){let a=this;BP.call(a);a.lv=null;a.rB=0;}
let AU_=a=>{let b,c,d,e,f,g,h,i;a.rB=0;b=a.lv;c=0;d=b.j8;while(c<d){if(c>=b.j8){e=new H;f=new K;f.j3=G(16);D(f,f.j2,A(18));J(f,f.j2,c,10);D(f,f.j2,A(19));c=b.j8;J(f,f.j2,c,10);b=new I;g=f.j3;h=g.data;d=f.j2;i=h.length;if(d>=0&&d<=(i-0|0)){b.j4=L(g.data,0,d);e.j5=1;e.j6=1;e.j7=b;B(e);}b=new H;b.j5=1;b.j6=1;B(b);}b.j_.data[c].bY();c=c+1|0;}},
ALe=a=>{let b,c,d,e,f,g,h,i;a.k4=null;a.kX=null;a.l5=null;a.rB=0;b=a.lv;c=0;d=b.j8;while(c<d){if(c>=b.j8){e=new H;f=new K;f.j3=G(16);D(f,f.j2,A(18));J(f,f.j2,c,10);D(f,f.j2,A(19));c=b.j8;J(f,f.j2,c,10);b=new I;g=f.j3;h=g.data;d=f.j2;i=h.length;if(d>=0&&d<=(i-0|0)){b.j4=L(g.data,0,d);e.j5=1;e.j6=1;e.j7=b;B(e);}b=new H;b.j5=1;b.j6=1;B(b);}b.j_.data[c].bY();c=c+1|0;}a.pw=0;b=a.lv;g=b.j_;c=0;d=b.j8;f=null;if(c>d){b=new Bk;b.j5=1;b.j6=1;B(b);}while(c<d){h=g.data;i=c+1|0;h[c]=f;c=i;}b.j8=0;},
ANL=(a,b)=>{let c,d,e,f,g,h,i;c=a.lv;d=0;e=c.j8;while(true){if(d>=e){a.k4=b;if(a.kX===null)a.kX=b;if(b===null){b=a.l5;if(b!==null){c=b.kn;if(c.j8<b.kV){Bf(c,a);d=b.kS;e=b.kn.j8;if(d>e)e=d;a:{b.kS=e;if(BB(a,BA)){b=a;b.k4=null;b.kX=null;b.l5=null;b.rB=0;c=b.lv;d=0;e=c.j8;while(true){if(d>=e){b.pw=0;b=b.lv;f=b.j_;d=0;e=b.j8;c=null;if(d>e){b=new Bk;GC(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.j8=0;break a;}if(d>=c.j8)break;c.j_.data[d].bY();d=d+1|0;}B(Nc(Et(FK(FZ(FK(FZ(En(),A(18)),d),A(19)),c.j8))));}}}
else if(BB(a,BA)){b=a;b.k4=null;b.kX=null;b.l5=null;b.rB=0;c=b.lv;d=0;e=c.j8;while(d<e){(DK(c,d)).bY();d=d+1|0;}b.pw=0;b=b.lv;f=b.j_;d=0;e=b.j8;c=null;if(d>e){b=new Bk;Im(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.j8=0;}a.l5=null;}}return;}if(d>=c.j8)break;c.j_.data[d].bx(b);d=d+1|0;}i=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,d,10);D(b,b.j2,A(19));d=c.j8;J(b,b.j2,d,10);c=new I;f=b.j3;g=f.data;e=b.j2;h=g.length;if(e>=0&&e<=(h-0|0)){c.j4=L(f.data,0,e);i.j5=1;i.j6=1;i.j7=c;B(i);}b=new H;b.j5=1;b.j6
=1;B(b);},
AJa=a=>{let b,c,d,e,f,g,h,i,j;b=new K;b.j3=G(64);c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BC;d.kj=c;e=d;c.classObject=e;}}if(d.kc===null)d.kc=U(d.kj.$meta.name);c=d.kc;f=EY(c,46,c.j4.length-1|0);if(f!=(-1))c=Ch(c,f+1|0,c.j4.length);if(Le(c,A(46)))c=Ch(c,0,c.j4.length-6|0);D(b,b.j2,c);f=b.j2;Bj(b,f,f+1|0);b.j3.data[f]=40;c=a.lv;g=0;f=c.j8;while(g<f){if(g>0)D(b,b.j2,A(47));if(g>=c.j8){e=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,g,10);D(b,b.j2,A(19));g=c.j8;J(b,b.j2,g,
10);c=new I;h=b.j3;i=h.data;f=b.j2;j=i.length;if(f>=0&&f<=(j-0|0)){c.j4=L(h.data,0,f);e.j5=1;e.j6=1;e.j7=c;B(e);}b=new H;b.j5=1;b.j6=1;B(b);}e=c.j_.data[g];D(b,b.j2,e===null?A(2):e.T());g=g+1|0;}f=b.j2;Bj(b,f,f+1|0);h=b.j3;i=h.data;i[f]=41;c=new I;f=b.j2;j=i.length;if(f>=0&&f<=(j-0|0)){c.j4=L(h.data,0,f);return c;}b=new H;b.j5=1;b.j6=1;B(b);};
function Dd(){NN.call(this);this.pw=0;}
let P9=a=>{let b;b=new Bg;b.ku=1;b.j_=Q(C,4);a.lv=b;},
AVJ=()=>{let a=new Dd();P9(a);return a;},
N2=(a,b)=>{let c;c=new Bg;c.ku=1;c.j_=Q(C,4);a.lv=c;Bf(c,b);c=a.k4;if(c!==null){b.k4=c;if(b.kX===null)b.kX=c;}},
AXY=a=>{let b=new Dd();N2(b,a);return b;},
V5=(a,b,c)=>{let d;d=new Bg;d.ku=1;d.j_=Q(C,4);a.lv=d;Bf(d,b);d=a.k4;if(d!==null){b.k4=d;if(b.kX===null)b.kX=d;}Bf(a.lv,c);b=a.k4;if(b!==null){c.k4=b;if(c.kX===null)c.kX=b;}},
AXC=(a,b)=>{let c=new Dd();V5(c,a,b);return c;},
Vz=(a,b,c,d)=>{let e;e=new Bg;e.ku=1;e.j_=Q(C,4);a.lv=e;Bf(e,b);e=a.k4;if(e!==null){b.k4=e;if(b.kX===null)b.kX=e;}Bf(a.lv,c);b=a.k4;if(b!==null){c.k4=b;if(c.kX===null)c.kX=b;}Bf(a.lv,d);b=a.k4;if(b!==null){d.k4=b;if(d.kX===null)d.kX=b;}},
AXp=(a,b,c)=>{let d=new Dd();Vz(d,a,b,c);return d;},
Wk=(a,b,c,d,e)=>{let f;f=new Bg;f.ku=1;f.j_=Q(C,4);a.lv=f;Bf(f,b);f=a.k4;if(f!==null){b.k4=f;if(b.kX===null)b.kX=f;}Bf(a.lv,c);f=a.k4;if(f!==null){c.k4=f;if(c.kX===null)c.kX=f;}Bf(a.lv,d);b=a.k4;if(b!==null){d.k4=b;if(d.kX===null)d.kX=b;}Bf(a.lv,e);b=a.k4;if(b!==null){e.k4=b;if(e.kX===null)e.kX=b;}},
AVs=(a,b,c,d)=>{let e=new Dd();Wk(e,a,b,c,d);return e;},
R8=(a,b,c,d,e,f)=>{let g;g=new Bg;g.ku=1;g.j_=Q(C,4);a.lv=g;Bf(g,b);g=a.k4;if(g!==null){b.k4=g;if(b.kX===null)b.kX=g;}Bf(a.lv,c);b=a.k4;if(b!==null){c.k4=b;if(c.kX===null)c.kX=b;}Bf(a.lv,d);b=a.k4;if(b!==null){d.k4=b;if(d.kX===null)d.kX=b;}Bf(a.lv,e);b=a.k4;if(b!==null){e.k4=b;if(e.kX===null)e.kX=b;}Bf(a.lv,f);b=a.k4;if(b!==null){f.k4=b;if(f.kX===null)f.kX=b;}},
AVV=(a,b,c,d,e)=>{let f=new Dd();R8(f,a,b,c,d,e);return f;},
Od=(a,b)=>{let c,d,e,$$je;c=a.pw;d=a.lv;if(c>=d.j8)return 1;e=a.l5;a.l5=null;a:{b:{c:{d:{try{if(!(DK(d,c)).bu(b))break d;}catch($$e){$$je=Z($$e);d=$$je;break b;}e:{try{if(a.k4!==null)break e;}catch($$e){$$je=Z($$e);d=$$je;break b;}a.l5=e;return 1;}try{c=a.pw+1|0;a.pw=c;if(c<a.lv.j8)break d;else break c;}catch($$e){$$je=Z($$e);d=$$je;break b;}}try{}catch($$e){$$je=Z($$e);d=$$je;break b;}a.l5=e;return 0;}try{break a;}catch($$e){$$je=Z($$e);d=$$je;}}a.l5=e;B(d);}a.l5=e;return 1;},
UO=a=>{let b,c,d,e,f,g,h,i;a.rB=0;b=a.lv;c=0;d=b.j8;while(c<d){if(c>=b.j8){e=new H;f=new K;f.j3=G(16);D(f,f.j2,A(18));J(f,f.j2,c,10);D(f,f.j2,A(19));c=b.j8;J(f,f.j2,c,10);b=new I;g=f.j3;h=g.data;d=f.j2;i=h.length;if(d>=0&&d<=(i-0|0)){b.j4=L(g.data,0,d);e.j5=1;e.j6=1;e.j7=b;B(e);}b=new H;b.j5=1;b.j6=1;B(b);}b.j_.data[c].bY();c=c+1|0;}a.pw=0;};
let AD6=F(BP);
let AIr=F(BP);
let ANr=F(BP);
let AOm=F();
let LQ=F(BP);
let AHL=F(LQ);
function Dp(){let a=this;C3.call(a);a.tp=0.0;a.tq=0.0;a.ux=0.0;a.uw=0.0;a.pD=0;}
let O4=a=>{a.pD=12;},
AWS=()=>{let a=new Dp();O4(a);return a;},
S3=a=>{let b,c,d;b=a.kX;c=a.pD;d=b.kx;if(c&16)d=d+b.lr;else if(!(c&8))d=d+b.lr/2.0;a.tp=d;d=b.kJ;if(c&2)d=d+b.lD;else if(!(c&4))d=d+b.lD/2.0;a.tq=d;},
Sm=(a,b)=>{let c,d;if(b===0.0){c=a.tp;d=a.tq;}else if(b===1.0){c=a.ux;d=a.uw;}else{c=a.tp;c=c+(a.ux-c)*b;d=a.tq;d=d+(a.uw-d)*b;}AD2(a.kX,c,d,a.pD);},
Ur=a=>{a.k4=null;a.kX=null;a.l5=null;a.sE=0.0;a.s$=0;a.p9=0;a.xh=0;a.ve=null;a.pD=12;};
let APb=F(C3);
let APO=F(EI);
let ALO=F(BP);
let AMl=F(EI);
let ARt=F(C3);
let AQM=F(C3);
let AEF=F(BP);
let AHg=F(C3);
let AHw=F(BP);
let AFb=F(BP);
let AHO=F(ES);
let YH=F(C3);
let ARC=F(BP);
let ALi=F(EI);
let AES=F(ES);
let AKs=F(BP);
let Z9=F(C3);
let AGQ=F(C3);
let ABm=F();
let AGJ=null;
let ASU=()=>{AGJ=T(BC,[M(Q9),M(BM),M(SJ),M(Tk),M(VY),M(IE),M(VQ),M(Gn),M(R3),M(UW),M(Ud),M(Rs),M(VE),M(JZ),M(VP),M(Tm),M(OX),M(Vu),M(GJ),M(Sz),M(UQ),M(Su),M(RH),M(Pl)]);};
let C_=F(BJ);
let Er=F(C_);
let Zl=null,AHo=null,AOl=null,ATd=null,AKM=null,WZ=null,ADP=null,AKi=null;
let QY=()=>{QY=BQ(Er);AOS();};
let AOS=()=>{let b,c;b=new BM;b.k1=0.0;b.k0=0.0;b.kZ=1.0;b.k3=1.0;CX(b);Zl=b;b=new BM;b.k1=1.0;b.k0=0.0;b.kZ=0.0;b.k3=1.0;CX(b);AHo=b;b=new BM;b.k1=0.0;b.k0=1.0;b.kZ=0.0;b.k3=1.0;CX(b);AOl=b;b=new VV;c=new Bg;c.ku=0;c.j_=Q(C,16);b.kn=c;b.kV=2147483647;ATd=b;b=new VU;Ij();AKM=b;WZ=new VT;ADP=new VS;AKi=new VR;};
let FU=F(Er);
let LB=F(FU);
let ACh=F(LB);
let APd=F(B2);
let ME=F(C_);
let Sd=F(0);
let EB=F();
let AEv=F(EB);
let Dk=F(CE);
let Y1=F(Dk);
let APc=F(B2);
let B4=F();
let AQu=null,ANA=null,AO_=null,ACM=null,AHV=null,AF8=null,ANs=null;
let Ij=()=>{Ij=BQ(B4);Zz();};
let Zz=()=>{let b;b=new Jh;Ij();b.zp=0.0;AQu=b;ANA=new Tw;AO_=new Tt;ACM=new Ts;AHV=new Tv;AF8=new Tu;ANs=new Tr;};
let Tv=F(B4);
let ALt=F(B4);
let Kt=F(D$);
let AHD=F(Kt);
let VT=F(B4);
let ARf=F(B2);
let Md=F(Er);
let TC=null,TN=null;
let AUH=()=>{TC=new Bb;TN=new Bb;};
let ALu=F(B4);
let Gg=F(0);
function D_(){let a=this;C.call(a);a.nO=0.0;a.nN=0.0;a.nV=0.0;a.nz=0.0;}
let Qx=null,Tf=null;
let AE_=(a,b)=>{let c,d,e;a:{c=a.nO;d=b.nO;if(c<d+b.nV&&c+a.nV>d){c=a.nN;d=b.nN;if(c<d+b.nz&&c+a.nz>d){e=1;break a;}}e=0;}return e;},
AWX=()=>{Qx=new D_;Tf=new D_;};
let DO=F(D_);
let WA=null;
let J1=()=>{J1=BQ(DO);OL();};
let S8=a=>{J1();},
AUv=()=>{let a=new DO();S8(a);return a;},
OL=()=>{let b,c,d,e,f,g,h,$$je;Cw();b=Bv;c=BE(b,M(DO));b=c<0?null:b.kP.data[c];if(b===null){b=new CB;d=new Bg;d.ku=0;d.j_=Q(C,4);b.kn=d;b.kV=100;a:{try{d=CL(M(DO),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CJ(M(DO),null);CN(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}b.kG=d;if(d===null){b=new Bz;d=new K;d.j3=G(16);D(d,d.j2,A(21));if(M(DO).kc===null)M(DO).kc=U(M(DO).kj.$meta.name);e=M(DO).kc;D(d,d.j2,e);e=new I;f=d.j3;g=f.data;c
=d.j2;h=g.length;if(c>=0&&c<=(h-0|0)){e.j4=L(f.data,0,c);b.j5=1;b.j6=1;b.j7=e;B(b);}e=new H;e.j5=1;e.j6=1;B(e);}Ce(Bv,M(DO),b);}WA=b;};
let AEz=F(EB);
let MU=F(Dk);
let Q1=null,Q2=null,Q3=null,S4=0.0,Op=0.0;
let AXw=()=>{Q1=new Bb;Q2=new Bb;Q3=new Bb;S4=0.4000000059604645;Op=0.10000000149011612;};
let ACx=F(MU);
let AGU=F(B2);
let Qq=F(0);
let ANy=F();
let Gn=F();
let GJ=F(Gn);
let Ud=F(GJ);
let MZ=F(Dk);
let AFV=F(MZ);
let AS$=F(ME);
let KC=F(C_);
let ATU=F(FU);
let Np=F(Dk);
let VR=F(B4);
let UQ=F();
let AE6=F();
let AHH=F(B2);
let AJv=F(DD);
let AGg=F();
let AM6=F(B2);
let ASQ=F(D$);
let AGS=F(MG);
let Tr=F(B4);
let Tu=F(B4);
let SY=F(0);
let JZ=F();
let OX=F(JZ);
let AEw=F(EB);
let APa=F(LY);
let APe=F(Nd);
let ARg=F(B2);
let ARh=F(D$);
let VS=F(B4);
let OP=F();
let AE0=null,AKC=null,AEY=null,AKB=null,WW=null,AAD=null,AKa=null,Xm=null,AMY=null;
let Uf=()=>{Uf=BQ(OP);ABt();};
let ABt=()=>{let b;b=new FR;b.oy=0.0;AE0=b;b=new FR;b.oy=1.0;AKC=b;EX();AEY=Ef.data[128];EX();b=Ef.data[129];AKB=b;WW=b;EX();AAD=Ef.data[130];EX();AKa=Ef.data[132];EX();Xm=Ef.data[136];EX();AMY=Ef.data[144];};
let R3=F(GJ);
let AG7=F(B2);
let Zn=F(DD);
let Tw=F(B4);
let ACT=F(C_);
let AGT=F(B2);
let Su=F();
function Jh(){B4.call(this);this.zp=0.0;}
let Pp=null;
let AXg=()=>{Pp=Q(Jh,111);};
let AE7=F(KC);
let Ts=F(B4);
let AIi=F(Dk);
let UN=null;
let AXj=()=>{UN=new Bb;};
let AG1=F(M6);
let Vu=F();
let Pc=F(Dk);
let YV=null,ADb=null;
let Uv=()=>{Uv=BQ(Pc);YC();};
let YC=()=>{let b,c;YV=new BM;b=new Kq;Mq();c=new Bg;c.ku=1;c.j_=Q(C,1);b.za=c;c=new FL;c.pi=1;c.mC=X(2);b.yk=c;ADb=b;};
let Pl=F();
let ALw=F(B4);
let VU=F(B4);
let AOu=F(Md);
let Tt=F(B4);
let Rs=F();
let ASF=F();
let Fy=F(BG);
let IQ=null,Za=null,AL1=null,Xy=null,AAe=null,ANI=null;
let AMo=()=>{let b,c,d,e,f;b=new Fy;b.kk=A(48);b.ke=0;IQ=b;c=new Fy;c.kk=A(49);c.ke=1;Za=c;d=new Fy;d.kk=A(50);d.ke=2;AL1=d;e=new Fy;e.kk=A(51);e.ke=3;Xy=e;f=new Fy;f.kk=A(52);f.ke=4;AAe=f;ANI=T(Fy,[b,c,d,e,f]);};
let ASY=F(B4);
let AGH=F(DD);
function Dj(){let a=this;C.call(a);a.kV=0;a.kS=0;a.kn=null;}
let VV=F(Dj);
let Zc=F();
let VE=F();
let SJ=F();
let Tm=F();
let Nn=F(B2);
let RO=null;
let AUi=()=>{RO=new Bb;};
let Zm=F(DD);
let ARi=F(Np);
let Zf=F(0);
let AG8=F(B2);
let ATJ=F(C_);
let AK0=F(C_);
let AG3=F(D$);
let Na=F();
let AEu=F(Na);
let AQT=F(CE);
let Yp=F(B2);
let AOR=F(FU);
let AJ3=F(B2);
let ASl=F(D$);
let UW=F(Gn);
let AK7=F(C_);
let Sz=F();
let RH=F();
let AJD=F(Dk);
let ASR=F(GX);
let Yr=F(B2);
let AMK=F(C_);
let Sk=null;
let AV5=()=>{Sk=new Bb;};
let AS8=F(Nn);
let Ys=F(Er);
let AEx=F(EB);
let WJ=F();
let VP=F();
let Vm=F();
let Z4=null,YK=null,AAJ=null,ARu=null,ARw=null,ARv=null,ACS=null,AEe=null,ASa=null,Yx=null,ARF=null;
let Vo=()=>{Vo=BQ(Vm);AI7();};
let AI7=()=>{let b;Z4=B_(16);b=new Ep;b.oj=0.0;b.og=0.0;b.oh=0.0;b.oi=1.0;YK=b;b=new Ep;b.oj=0.0;b.og=0.0;b.oh=0.0;b.oi=1.0;AAJ=b;b=new Bn;CT();ARu=b;ARw=new Bn;ARv=new Bn;ACS=new Bn;AEe=C8();ASa=new Bn;Yx=new Bn;ARF=new Bn;};
let BO=F();
let Zy=null,AOa=null,ACD=null,AOj=null,ABT=null,ADK=null,AHI=null,Xx=null,AH4=null,ABS=null,AJF=null,AC$=null,ADJ=null,YI=null,Xj=null,ANe=null,AFc=null,ADM=null,ABX=null,AMR=null,ADL=null,AQO=null,ADQ=null,AIn=null,AQs=null,AIZ=null,WF=null,Xu=null,AN5=null,AEg=null,ATg=null,AL$=null,ARa=null,AHa=null,AM$=null,ATI=null,AFW=null,AGe=null,XA=null,AOM=null,ATm=null,ARq=null,AMm=null,ATx=null;
let JJ=()=>{JJ=BQ(BO);ZR();};
let ZR=()=>{let b,c;b=new T9;JJ();Zy=b;AOa=new T1;ACD=new T0;b=new T3;AOj=b;ABT=b;b=new EC;b.nh=2;ADK=b;b=new HO;b.nh=2;AHI=b;Xx=b;b=new HI;b.nh=2;AH4=b;ABS=b;AJF=new T2;AC$=new T5;b=new EC;b.nh=3;ADJ=b;b=new HO;b.nh=3;YI=b;b=new HI;b.nh=3;Xj=b;ANe=new T4;AFc=new T7;b=new EC;b.nh=4;ADM=b;b=new HO;b.nh=4;ABX=b;b=new HI;b.nh=4;AMR=b;b=new EC;b.nh=5;ADL=b;b=new HO;b.nh=5;AQO=b;b=new HI;b.nh=5;ADQ=b;AIn=new T6;AQs=new S_;AIZ=new Tb;b=new FP;b.qh=2.0;b.qA=10.0;c=Gs(2.0,(-10.0));b.qW=c;b.qF=1.0/(1.0-c);WF=b;b=new L4;b.qh
=2.0;b.qA=10.0;c=Gs(2.0,(-10.0));b.qW=c;b.qF=1.0/(1.0-c);Xu=b;b=new NJ;b.qh=2.0;b.qA=10.0;c=Gs(2.0,(-10.0));b.qW=c;b.qF=1.0/(1.0-c);AN5=b;b=new FP;b.qh=2.0;b.qA=5.0;c=Gs(2.0,(-5.0));b.qW=c;b.qF=1.0/(1.0-c);AEg=b;b=new L4;b.qh=2.0;b.qA=5.0;c=Gs(2.0,(-5.0));b.qW=c;b.qF=1.0/(1.0-c);ATg=b;b=new NJ;b.qh=2.0;b.qA=5.0;c=Gs(2.0,(-5.0));b.qW=c;b.qF=1.0/(1.0-c);AL$=b;ARa=new Tc;AHa=new Td;AM$=new Te;b=new Gw;b.vg=2.0;b.tG=10.0;b.tK=1.0;b.t8=(-21.99114990234375);ATI=b;b=new O3;b.vg=2.0;b.tG=10.0;b.tK=1.0;b.t8=18.84955596923828;AFW
=b;b=new Rz;b.vg=2.0;b.tG=10.0;b.tK=1.0;b.t8=(-21.99114990234375);AGe=b;b=new RB;b.yL=3.0;XA=b;b=new PG;b.Ag=2.0;AOM=b;b=new VG;b.zk=2.0;ATm=b;b=new QW;Lv(b,4);ARq=b;b=new RY;Lv(b,4);AMm=b;ATx=AB5(4);};
function PG(){BO.call(this);this.Ag=0.0;}
let AGK=F();
let T4=F(BO);
let ARN=F();
function EC(){BO.call(this);this.nh=0;}
let HO=F(EC);
let HI=F(EC);
let Jw=F(0);
let ABM=F();
let T7=F(BO);
let APs=F();
let T3=F(BO);
function Gw(){let a=this;BO.call(a);a.vg=0.0;a.tG=0.0;a.tK=0.0;a.t8=0.0;}
let T2=F(BO);
let T1=F(BO);
let ALA=F();
let Wh=null,Wj=null,Wi=null;
let AUU=()=>{Wh=new Bb;Wj=new Bb;Wi=new Bb;};
let Xn=F(Dj);
let I$=F(0);
function Bb(){let a=this;C.call(a);a.j$=0.0;a.j9=0.0;}
let OR=null,OQ=null,Ri=null;
let M$=(a,b,c)=>{a.j$=b;a.j9=c;},
AUs=(a,b)=>{let c=new Bb();M$(c,a,b);return c;},
AA6=a=>{let b,c,d,e,f,g,h;b=new K;b.j3=G(16);D(b,b.j2,A(53));c=a.j$;E$(b,b.j2,c);D(b,b.j2,A(54));c=a.j9;E$(b,b.j2,c);D(b,b.j2,A(55));d=new I;e=b.j3;f=e.data;g=b.j2;h=f.length;if(g>=0&&g<=(h-0|0)){d.j4=L(e.data,0,g);return d;}b=new H;b.j5=1;b.j6=1;B(b);},
ADF=(a,b)=>{let c,d,e,f,g,h,i;if(a===b)return 1;if(b===null)return 0;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BC;d.kj=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BC;c.kj=e;f=c;e.classObject=f;}}if(d!==c)return 0;c=b;g=a.j$;h=(isNaN(g)?1:0)?2143289344:Ge(g);g=c.j$;if(h!=((isNaN(g)?1:0)?2143289344:Ge(g)))return 0;g=a.j9;i=(isNaN(g)?1:0)?2143289344:Ge(g);g=c.j9;if(i==((isNaN(g)?1:0)?2143289344:Ge(g)))return 1;return 0;},
AUM=()=>{let b;b=new Bb;b.j$=1.0;b.j9=0.0;OR=b;b=new Bb;b.j$=0.0;b.j9=1.0;OQ=b;b=new Bb;b.j$=0.0;b.j9=0.0;Ri=b;};
let Td=F(BO);
function FP(){let a=this;BO.call(a);a.qh=0.0;a.qA=0.0;a.qW=0.0;a.qF=0.0;}
let AJz=F();
let T9=F(BO);
let NJ=F(FP);
let AE2=F();
let Hn=F(BG);
let ACm=null,AFl=null,AOY=null,AJ7=null;
let ARm=()=>{let b,c,d;b=new Hn;b.kk=A(56);b.ke=0;ACm=b;c=new Hn;c.kk=A(57);c.ke=1;AFl=c;d=new Hn;d.kk=A(58);d.ke=2;AOY=d;AJ7=T(Hn,[b,c,d]);};
let SF=F();
let ARy=null;
let R_=()=>{R_=BQ(SF);AHN();};
let AHN=()=>{let b;b=new Bn;CT();ARy=b;};
function GS(){let a=this;BO.call(a);a.y6=null;a.yA=null;}
let Lv=(a,b)=>{let c,d,e,f,g,h,i,j;JJ();if(b>=2&&b<=5){a:{c=B_(b);a.y6=c;d=B_(b);e=d.data;a.yA=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bk;g=new K;g.j3=G(16);D(g,g.j2,A(59));J(g,g.j2,b,10);h=new I;c=g.j3;d=c.data;i=g.j2;j=d.length;if(i>=0&&i<=(j-0|0)){h.j4=L(c.data,0,i);f.j5=1;f.j6=1;f.j7=h;B(f);}g=new H;g.j5
=1;g.j6=1;B(g);},
AB5=a=>{let b=new GS();Lv(b,a);return b;};
let RY=F(GS);
let S_=F(BO);
function S1(){let a=this;C.call(a);a.oW=0.0;a.oU=0.0;a.oV=0.0;a.oY=0.0;a.oZ=0.0;a.oX=0.0;}
let AGu=(a,b,c,d,e,f)=>{let g,h,i;a.oV=b;a.oX=c;if(d===0.0){a.oW=e;a.oU=0.0;a.oY=0.0;a.oZ=f;}else{Gx();g=F6.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.oW=i*e;a.oU= -h*f;a.oY=h*e;a.oZ=i*f;}return a;},
AAh=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.oW;d=a.oW;e=c*d;f=b.oU;g=a.oY;h=e+f*g;i=a.oU;e=c*i;j=a.oZ;e=e+f*j;k=a.oV;l=c*k;m=a.oX;l=l+f*m+b.oV;c=b.oY;d=c*d;f=b.oZ;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.oX;a.oW=h;a.oU=e;a.oV=l;a.oY=d;a.oZ=j;a.oX=c;return a;};
let T0=F(BO);
function F4(){let a=this;C.call(a);a.rh=0.0;a.rg=0.0;a.ri=0.0;a.rf=0.0;}
let AQb=null,AP$=null,AP_=null,AQa=null,ABh=null;
let ASS=()=>{let b;b=new F4;b.rh=1.0;b.rg=0.0;b.ri=0.0;b.rf=0.0;AQb=b;b=new F4;b.rh=0.0;b.rg=1.0;b.ri=0.0;b.rf=0.0;AP$=b;b=new F4;b.rh=0.0;b.rg=0.0;b.ri=1.0;b.rf=0.0;AP_=b;b=new F4;b.rh=0.0;b.rg=0.0;b.ri=0.0;b.rf=1.0;AQa=b;b=new F4;b.rh=0.0;b.rg=0.0;b.ri=0.0;b.rf=0.0;ABh=b;};
let O3=F(Gw);
function RB(){BO.call(this);this.yL=0.0;}
let ABw=F();
let ATs=F();
let T5=F(BO);
function VG(){BO.call(this);this.zk=0.0;}
let Te=F(BO);
let Rz=F(Gw);
let Wp=F();
let ADO=null,X$=null,ASh=null;
let Qa=()=>{Qa=BQ(Wp);XS();};
let XS=()=>{let b,c,d,e,f,g;ADO=Q(Bn,15);b=Q(Bn,8);X$=b;c=Q(Bn,9);d=c.data;ASh=c;e=0;f=d.length;while(e<f){g=new Bn;CT();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bn;CT();b[e]=g;e=e+1|0;}};
function Ky(){let a=this;C.call(a);a.wV=null;a.w4=null;a.wx=null;a.w6=null;}
let ADj=null;
let NY=()=>{NY=BQ(Ky);AOA();};
let ALE=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.wV;e=b.kf;f=c.kf;if(e<f)f=e;e=b.kg;g=c.kg;if(e<g)g=e;e=b.kh;h=c.kh;if(e<h)h=e;d.kf=f;d.kg=g;d.kh=h;i=a.w4;e=b.kf;g=c.kf;if(e>g)g=e;e=b.kg;h=c.kg;if(e>h)h=e;e=b.kh;f=c.kh;if(e>f)f=e;i.kf=g;i.kg=h;i.kh=f;b=a.wx;h=d.kf;j=d.kg;k=d.kh;b.kf=h;b.kg=j;b.kh=k;e=i.kf;f=i.kg;g=i.kh;h=h+e;j=j+f;k=k+g;b.kf=h;b.kg=j;b.kh=k;f=h*0.5;g=j*0.5;e=k*0.5;b.kf=f;b.kg=g;b.kh=e;b=a.w6;g=i.kf;h=i.kg;j=i.kh;b.kf=g;b.kg=h;b.kh=j;e=d.kf;f=d.kg;k=d.kh;g=g-e;e=h-f;f=j-k;b.kf=g;b.kg=e;b.kh=f;return a;},
AOA=()=>{let b;b=new Bn;CT();ADj=b;};
function LV(){let a=this;C.call(a);a.yE=null;a.zS=null;}
let XJ=null;
let Ms=()=>{Ms=BQ(LV);AOL();};
let AOL=()=>{let b;b=new Bn;CT();XJ=b;};
let ABV=F();
let X2=F();
let AM0=F();
let AF7=F();
let TE=F();
let AF4=null;
let Gx=()=>{Gx=BQ(TE);AHd();};
let Lj=b=>{let c;Gx();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AHd=()=>{let b,c,d,e;b=new S5;c=ADm(FB(V(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),V(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(D5(c,Ca))c=E(0, 2147483648);d=Ba(H3(c,Be(c,33)),E(3981806797, 4283543511));d=Ba(H3(d,Be(d,33)),E(444984403, 3301882366));e=H3(d,Be(d,33));d=Ba(H3(e,Be(e,33)),E(3981806797, 4283543511));d=Ba(H3(d,Be(d,33)),E(444984403, 3301882366));d=H3(d,Be(d,33));b.ye=e;b.yf=d;AF4=b;};
let U4=F();
let W9=null,W$=null,W_=null,ABB=null,APJ=null,AIs=null,YY=null,YZ=null,AH2=null,AHX=null,AED=null,AEG=null,AEH=null,AEJ=null,AH5=null,AH0=null,AIF=null,AFS=null,ANx=null,AFu=null,AQK=null,AQJ=null,AQH=null,AGz=null;
let QT=()=>{QT=BQ(U4);AB0();};
let AB0=()=>{let b,c;b=new Bn;CT();W9=b;W$=new Bn;W_=new Bn;b=new GE;b.rU=1;b.m7=B_(16);ABB=b;b=new GE;b.rU=1;b.m7=B_(16);APJ=b;AIs=new Bb;YY=new Bb;YZ=new Bb;AH2=new Bb;AHX=new Bb;AED=new Bb;AEG=new Bb;AEH=new Bb;AEJ=new Bb;b=new JO;c=new Bn;b.mT=c;b.nw=0.0;c.kf=0.0;c.kg=0.0;c.kh=0.0;b.nw=0.0;AH5=b;AH0=new Bn;AIF=new Bn;AFS=new Bn;ANx=new Bn;AFu=new Bn;AQK=new Bn;AQJ=new Bn;AQH=new Bn;AGz=new Bn;};
let Zt=F();
let QW=F(GS);
function LD(){C.call(this);this.ln=null;}
let OU=null,AJc=null,AQj=null,IX=null,Hs=null,LU=null,VF=null,PT=null,AK2=null,ATL=null,AK5=null;
let Eh=()=>{Eh=BQ(LD);Yn();};
let ANN=a=>{let b,c;Eh();b=B_(16);c=b.data;a.ln=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
C8=()=>{let a=new LD();ANN(a);return a;},
C$=(a,b)=>{let c;c=b.data;b=a.ln.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
SV=(a,b)=>{let c,d,e,f,g;Eh();c=OU;d=c.data;e=a.ln.data;f=e[0];g=b.ln.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return C$(a,c);},
La=a=>{let b;b=a.ln.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
Mu=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;La(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.ln.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
ADv=(a,b,c)=>{let d,e,f,g,h,i;Eh();d=IX;e=b.kf;f=b.kg;g=b.kh;d.kf=e;d.kg=f;d.kh=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cz(f);f=d.kf*e;g=d.kg*e;e=d.kh*e;d.kf=f;d.kg=g;d.kh=e;}d=Hs;e=b.kf;f=b.kg;g=b.kh;d.kf=e;d.kg=f;d.kh=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cz(f);f=d.kf*e;g=d.kg*e;e=d.kh*e;d.kf=f;d.kg=g;d.kh=e;}b=Qf(Hs,c);e=b.kf;e=e*e;f=b.kg;e=e+f*f;f=b.kh;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Cz(e);h=b.kf*g;e=b.kg*g;f=b.kh*g;b.kf=h;b.kg=e;b.kh=f;}b=LU;c=Hs;e=c.kf;f=c.kg;g=c.kh;b.kf=e;b.kg=f;b.kh=g;b=Qf(b,
IX);e=b.kf;e=e*e;f=b.kg;e=e+f*f;f=b.kh;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Cz(f);f=b.kf*e;g=b.kg*e;e=b.kh*e;b.kf=f;b.kg=g;b.kh=e;}La(a);i=a.ln.data;b=Hs;i[0]=b.kf;i[4]=b.kg;i[8]=b.kh;b=LU;i[1]=b.kf;i[5]=b.kg;i[9]=b.kh;b=IX;i[2]= -b.kf;i[6]= -b.kg;i[10]= -b.kh;return a;},
AQn=(a,b)=>{let c;c=a.ln.data;c[0]=b.oW;c[1]=b.oY;c[2]=0.0;c[3]=0.0;c[4]=b.oU;c[5]=b.oZ;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.oV;c[13]=b.oX;c[14]=0.0;c[15]=1.0;return a;},
Oy=(b,c)=>{let d,e,f;Eh();d=b.data;c=c.data;e=B_(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Di(e,0,b,0,16);},
AQ7=b=>{Eh();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
ADY=b=>{let c,d,e;Eh();c=B_(16);d=AQ7(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AGo=(b,c,d)=>{let e,f,g,h,i,j,k,l;Eh();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
Yn=()=>{let b;OU=B_(16);b=new Ep;b.oj=0.0;b.og=0.0;b.oh=0.0;b.oi=1.0;AJc=b;b=new Ep;b.oj=0.0;b.og=0.0;b.oh=0.0;b.oi=1.0;AQj=b;b=new Bn;CT();IX=b;Hs=new Bn;LU=new Bn;VF=new Bn;PT=C8();AK2=new Bn;ATL=new Bn;AK5=new Bn;};
let PS=F(0);
let Mt=F();
function S5(){let a=this;Mt.call(a);a.ye=Ca;a.yf=Ca;}
let Tc=F(BO);
let T6=F(BO);
function M5(){let a=this;C.call(a);a.pN=null;a.oA=null;a.s6=null;}
let ATE=null,Vw=null,AKw=null;
let IZ=()=>{IZ=BQ(M5);AHZ();};
let X8=a=>{let b,c,d,e,f,g;IZ();b=Q(JO,6);c=b.data;a.pN=b;b=Q(Bn,8);d=b.data;e=new Bn;CT();d[0]=e;d[1]=new Bn;d[2]=new Bn;d[3]=new Bn;d[4]=new Bn;d[5]=new Bn;d[6]=new Bn;d[7]=new Bn;a.oA=b;a.s6=B_(24);f=0;while(f<6){e=new JO;g=new Bn;e.mT=g;e.nw=0.0;g.kf=0.0;g.kg=0.0;g.kh=0.0;e.nw=0.0;c[f]=e;f=f+1|0;}},
AML=()=>{let a=new M5();X8(a);return a;},
ALk=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;IZ();c=Vw;d=c.data;Di(c,0,a.s6,0,d.length);c=b.ln;e=a.s6;f=0;Eh();g=0;while(g<8){AGo(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.oA.data[f];c=a.s6.data;j=h+1|0;i.kf=c[h];g=j+1|0;i.kg=c[j];h=g+1|0;i.kh=c[g];f=f+1|0;}b=a.pN.data[0];c=a.oA.data;i=c[1];k=c[0];l=c[2];m=b.mT;n=i.kf;o=i.kg;p=i.kh;m.kf=n;m.kg=o;m.kh=p;q=k.kf;r=k.kg;s=k.kh;t=n-q;u=o-r;p=p-s;m.kf=t;m.kg=u;m.kh=p;q=k.kf-l.kf;r=k.kg-l.kg;s=k.kh-l.kh;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kf=n;m.kg=s;m.kh
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kf*q;s=m.kg*q;q=m.kh*q;m.kf=r;m.kg=s;m.kh=q;}k=b.mT;b.nw= -(i.kf*k.kf+i.kg*k.kg+i.kh*k.kh);b=a.pN.data[1];c=a.oA.data;i=c[4];k=c[5];l=c[7];m=b.mT;n=i.kf;o=i.kg;p=i.kh;m.kf=n;m.kg=o;m.kh=p;q=k.kf;r=k.kg;s=k.kh;t=n-q;u=o-r;p=p-s;m.kf=t;m.kg=u;m.kh=p;q=k.kf-l.kf;r=k.kg-l.kg;s=k.kh-l.kh;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kf=n;m.kg=s;m.kh=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kf*q;s=m.kg*q;q=m.kh*q;m.kf=r;m.kg=s;m.kh=q;}k=b.mT;b.nw= -(i.kf*k.kf+i.kg
*k.kg+i.kh*k.kh);b=a.pN.data[2];c=a.oA.data;i=c[0];k=c[4];l=c[3];m=b.mT;n=i.kf;o=i.kg;t=i.kh;m.kf=n;m.kg=o;m.kh=t;r=k.kf;q=k.kg;s=k.kh;r=n-r;u=o-q;p=t-s;m.kf=r;m.kg=u;m.kh=p;q=k.kf-l.kf;s=k.kg-l.kg;n=k.kh-l.kh;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.kf=o;m.kg=n;m.kh=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kf*q;s=m.kg*q;q=m.kh*q;m.kf=r;m.kg=s;m.kh=q;}k=b.mT;b.nw= -(i.kf*k.kf+i.kg*k.kg+i.kh*k.kh);b=a.pN.data[3];c=a.oA.data;k=c[5];i=c[1];l=c[6];m=b.mT;n=k.kf;t=k.kg;u=k.kh;m.kf=n;m.kg=t;m.kh=u;q=i.kf;r=i.kg;s
=i.kh;o=n-q;t=t-r;u=u-s;m.kf=o;m.kg=t;m.kh=u;p=i.kf-l.kf;q=i.kg-l.kg;r=i.kh-l.kh;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.kf=s;m.kg=r;m.kh=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kf*q;s=m.kg*q;q=m.kh*q;m.kf=r;m.kg=s;m.kh=q;}i=b.mT;b.nw= -(k.kf*i.kf+k.kg*i.kg+k.kh*i.kh);b=a.pN.data[4];c=a.oA.data;i=c[2];k=c[3];l=c[6];m=b.mT;n=i.kf;o=i.kg;p=i.kh;m.kf=n;m.kg=o;m.kh=p;q=k.kf;r=k.kg;s=k.kh;t=n-q;u=o-r;p=p-s;m.kf=t;m.kg=u;m.kh=p;q=k.kf-l.kf;r=k.kg-l.kg;s=k.kh-l.kh;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kf=n;m.kg=s;m.kh
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kf*q;s=m.kg*q;q=m.kh*q;m.kf=r;m.kg=s;m.kh=q;}k=b.mT;b.nw= -(i.kf*k.kf+i.kg*k.kg+i.kh*k.kh);b=a.pN.data[5];c=a.oA.data;i=c[4];k=c[0];l=c[1];m=b.mT;n=i.kf;o=i.kg;p=i.kh;m.kf=n;m.kg=o;m.kh=p;q=k.kf;r=k.kg;s=k.kh;t=n-q;u=o-r;p=p-s;m.kf=t;m.kg=u;m.kh=p;q=k.kf-l.kf;r=k.kg-l.kg;s=k.kh-l.kh;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kf=n;m.kg=s;m.kh=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cz(r);r=m.kf*q;s=m.kg*q;q=m.kh*q;m.kf=r;m.kg=s;m.kh=q;}k=b.mT;b.nw= -(i.kf*k.kf+i.kg
*k.kg+i.kh*k.kh);},
AHZ=()=>{let b,c,d,e,f,g,h,i,j;b=Q(Bn,8);c=b.data;d=new Bn;CT();d.kf=(-1.0);d.kg=(-1.0);d.kh=(-1.0);c[0]=d;d=new Bn;d.kf=1.0;d.kg=(-1.0);d.kh=(-1.0);c[1]=d;d=new Bn;d.kf=1.0;d.kg=1.0;d.kh=(-1.0);c[2]=d;d=new Bn;d.kf=(-1.0);d.kg=1.0;d.kh=(-1.0);c[3]=d;d=new Bn;d.kf=(-1.0);d.kg=(-1.0);d.kh=1.0;c[4]=d;d=new Bn;d.kf=1.0;d.kg=(-1.0);d.kh=1.0;c[5]=d;d=new Bn;d.kf=1.0;d.kg=1.0;d.kh=1.0;c[6]=d;d=new Bn;d.kf=(-1.0);d.kg=1.0;d.kh=1.0;c[7]=d;ATE=b;b=B_(24);e=b.data;Vw=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.kf;j=i+1|0;e[i]=d.kg;f=j+1|0;e[j]=d.kh;h=h+1|0;}AKw=new Bn;};
function Ep(){let a=this;C.call(a);a.oj=0.0;a.og=0.0;a.oh=0.0;a.oi=0.0;}
let Rv=null,Ru=null;
let AVF=()=>{let b;b=new Ep;b.oj=0.0;b.og=0.0;b.oh=0.0;b.oi=0.0;Rv=b;b=new Ep;b.oj=0.0;b.og=0.0;b.oh=0.0;b.oi=0.0;Ru=b;};
function Ol(){let a=this;C.call(a);a.y1=null;a.zs=null;a.y7=null;}
let AKX=F();
function Bn(){let a=this;C.call(a);a.kf=0.0;a.kg=0.0;a.kh=0.0;}
let AA2=null,AA3=null,AA1=null,AJU=null,ARX=null;
let CT=()=>{CT=BQ(Bn);Y7();};
let Qf=(a,b)=>{let c,d,e,f,g,h,i;c=a.kg;d=b.kh;e=c*d;f=a.kh;g=b.kg;h=e-f*g;e=b.kf;f=f*e;i=a.kf;d=f-i*d;c=i*g-c*e;a.kf=h;a.kg=d;a.kh=c;return a;},
ABr=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.ln.data;d=a.kf;e=d*c[3];f=a.kg;e=e+f*c[7];g=a.kh;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.kf=i;a.kg=j;a.kh=d;return a;},
Y7=()=>{let b;b=new Bn;CT();b.kf=1.0;b.kg=0.0;b.kh=0.0;AA2=b;b=new Bn;b.kf=0.0;b.kg=1.0;b.kh=0.0;AA3=b;b=new Bn;b.kf=0.0;b.kg=0.0;b.kh=1.0;AA1=b;b=new Bn;b.kf=0.0;b.kg=0.0;b.kh=0.0;AJU=b;ARX=C8();};
let AE5=F();
let ACZ=F(Dj);
let L4=F(FP);
let ALx=F();
let ZW=F();
let APR=F();
function JO(){let a=this;C.call(a);a.mT=null;a.nw=0.0;}
let Tb=F(BO);
let APV=F();
let Z5=F();
let AMO=F();
let APP=F();
let AKg=F(0);
let AFi=F();
let ANF=F();
let F6=null;
let ACA=()=>{let b,c;F6=B_(16384);b=0;while(b<16384){F6.data[b]=JH((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=F6.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function Kq(){let a=this;C.call(a);a.za=null;a.yk=null;}
let YW=null,AR4=null;
let Mq=()=>{Mq=BQ(Kq);AB_();};
let AB_=()=>{let b,c,d,e,f,g,h,$$je;Cw();b=Bv;c=BE(b,M(DN));b=c<0?null:b.kP.data[c];if(b===null){b=new CB;d=new Bg;d.ku=0;d.j_=Q(C,4);b.kn=d;b.kV=100;a:{try{d=CL(M(DN),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CJ(M(DN),null);CN(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}b.kG=d;if(d===null){b=new Bz;d=new K;d.j3=G(16);D(d,d.j2,A(21));if(M(DN).kc===null)M(DN).kc=U(M(DN).kj.$meta.name);e=M(DN).kc;D(d,d.j2,e);e=new I;f=d.j3;g=
f.data;c=d.j2;h=g.length;if(c>=0&&c<=(h-0|0)){e.j4=L(f.data,0,c);b.j5=1;b.j6=1;b.j7=e;B(b);}e=new H;e.j5=1;e.j6=1;B(e);}Ce(Bv,M(DN),b);}YW=b;e=new FL;e.pi=1;e.mC=X(4);AR4=e;};
function H8(){let a=this;C.call(a);a.o3=null;a.vb=0.0;a.vc=0.0;a.va=0.0;a.u$=0.0;a.uY=0;a.vF=0;}
let Nf=(a,b,c,d,e)=>{let f,g,h;f=a.o3.n7;g=1.0/f.nH;h=1.0/f.ny;a.b_(b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.uY=d;if(e<0)e= -e|0;a.vF=e;},
Pm=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.o3.n7;g=f.nH;h=f.ny;i=D3(d-b);j=g;i=i*j;a.uY=i+CM(i)*0.5|0;k=D3(e-c);i=h;k=k*i;l=k+CM(k)*0.5|0;a.vF=l;if(a.uY==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.vb=b;a.vc=c;a.va=d;a.u$=e;};
function Jo(){let a=this;H8.call(a);a.s_=null;a.uA=null;a.zE=0.0;a.zD=0.0;a.xR=0.0;a.wO=0.0;a.Au=0.0;a.At=0.0;a.zV=0.0;a.x3=0.0;a.x2=0.0;a.su=0;}
let M8=(a,b,c,d,e,f)=>{let g,h,i,j;a.s_=B_(20);g=new BM;g.k1=1.0;g.k0=1.0;g.kZ=1.0;g.k3=1.0;CX(g);a.uA=g;a.x3=1.0;a.x2=1.0;a.su=1;if(b===null){b=new Bk;b.j5=1;b.j6=1;b.j7=A(60);B(b);}a.o3=b;Nf(a,c,d,e,f);b=a.uA;b.k1=1.0;b.k0=1.0;b.kZ=1.0;b.k3=1.0;CX(b);h=Ff(a.uA);i=a.s_.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;Y2(a,h,f);h=a.xR/2.0;j=a.wO/2.0;a.Au=h;a.At=j;a.su=1;},
AWj=(a,b,c,d,e)=>{let f=new Jo();M8(f,a,b,c,d,e);return f;},
Y2=(a,b,c)=>{let d,e,f,g;a.xR=b;a.wO=c;if(a.su)return;if(a.zV===0.0&&a.x3===1.0&&a.x2===1.0){d=a.zE;e=d+b;b=a.zD;f=b+c;g=a.s_.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.su=1;},
APj=(a,b,c,d,e)=>{let f;Pm(a,b,c,d,e);f=a.s_.data;f[3]=b;f[4]=e;f[8]=b;f[9]=c;f[13]=d;f[14]=c;f[18]=d;f[19]=e;};
let Q9=F();
let AMt=F();
let Pe=null;
let AXn=()=>{Pe=new BM;};
function BM(){let a=this;C.call(a);a.k1=0.0;a.k0=0.0;a.kZ=0.0;a.k3=0.0;}
let Lk=null,Rl=null,AKI=null,ATh=null,AGl=null,Tl=0.0,Yy=null,ARM=null,Xr=null,AQe=null,ARc=null,ALM=null,APx=null,AEN=null,AD_=null,ANk=null,AR3=null,AP7=null,ATD=null,Ym=null,AGj=null,ATy=null,AJp=null,ASi=null,AQV=null,APp=null,AJl=null,XK=null,AI3=null,AEs=null,AFL=null,ADT=null,AIY=null,AMA=null,ANG=null;
let CX=a=>{let b,c;b=a.k1;if(b<0.0)a.k1=0.0;else if(b>1.0)a.k1=1.0;c=a.k0;if(c<0.0)a.k0=0.0;else if(c>1.0)a.k0=1.0;c=a.kZ;if(c<0.0)a.kZ=0.0;else if(c>1.0)a.kZ=1.0;c=a.k3;if(c<0.0)a.k3=0.0;else if(c>1.0)a.k3=1.0;return a;},
Ff=a=>{return Lf(((255.0*a.k3|0)<<24|(255.0*a.kZ|0)<<16|(255.0*a.k0|0)<<8|255.0*a.k1|0)&(-16777217));},
Dq=(b,c,d,e)=>{return Lf(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Co=(b,c)=>{b.k1=((c&(-16777216))>>>24|0)/255.0;b.k0=((c&16711680)>>>16|0)/255.0;b.kZ=((c&65280)>>>8|0)/255.0;b.k3=(c&255)/255.0;},
W3=()=>{let b;b=new BM;b.k1=1.0;b.k0=1.0;b.kZ=1.0;b.k3=1.0;CX(b);Lk=b;b=new BM;Co(b,(-1077952513));Rl=b;b=new BM;Co(b,2139062271);AKI=b;b=new BM;Co(b,1061109759);ATh=b;b=new BM;b.k1=0.0;b.k0=0.0;b.kZ=0.0;b.k3=1.0;CX(b);AGl=b;Tl=Ff(Lk);b=new BM;b.k1=0.0;b.k0=0.0;b.kZ=0.0;b.k3=0.0;CX(b);Yy=b;b=new BM;b.k1=0.0;b.k0=0.0;b.kZ=1.0;b.k3=1.0;CX(b);ARM=b;b=new BM;b.k1=0.0;b.k0=0.0;b.kZ=0.5;b.k3=1.0;CX(b);Xr=b;b=new BM;Co(b,1097458175);AQe=b;b=new BM;Co(b,1887473919);ARc=b;b=new BM;Co(b,(-2016482305));ALM=b;b=new BM;b.k1
=0.0;b.k0=1.0;b.kZ=1.0;b.k3=1.0;CX(b);APx=b;b=new BM;b.k1=0.0;b.k0=0.5;b.kZ=0.5;b.k3=1.0;CX(b);AEN=b;b=new BM;Co(b,16711935);AD_=b;b=new BM;Co(b,2147418367);ANk=b;b=new BM;Co(b,852308735);AR3=b;b=new BM;Co(b,579543807);AP7=b;b=new BM;Co(b,1804477439);ATD=b;b=new BM;Co(b,(-65281));Ym=b;b=new BM;Co(b,(-2686721));AGj=b;b=new BM;Co(b,(-626712321));ATy=b;b=new BM;Co(b,(-5963521));AJp=b;b=new BM;Co(b,(-1958407169));ASi=b;b=new BM;Co(b,(-759919361));AQV=b;b=new BM;Co(b,(-1306385665));APp=b;b=new BM;Co(b,(-16776961));AJl
=b;b=new BM;Co(b,(-13361921));XK=b;b=new BM;Co(b,(-8433409));AI3=b;b=new BM;Co(b,(-92245249));AEs=b;b=new BM;Co(b,(-9849601));AFL=b;b=new BM;b.k1=1.0;b.k0=0.0;b.kZ=1.0;b.k3=1.0;CX(b);ADT=b;b=new BM;Co(b,(-1608453889));AIY=b;b=new BM;Co(b,(-293409025));AMA=b;b=new BM;Co(b,(-1339006721));ANG=b;};
function NW(){let a=this;C.call(a);a.nk=0;a.qm=0;a.pl=null;a.pU=null;a.pa=null;a.pn=null;a.qU=0.0;}
let H9=0.0;
let AMu=(a,b,c,d)=>{if(b!==null&&!(!d&&a.pa===b)){B9.cg(a.nk,10242,b.rW);a.pa=b;}if(c!==null&&!(!d&&a.pn===c)){B9.cg(a.nk,10243,c.rW);a.pn=c;}},
Xl=(a,b,c,d)=>{if(b!==null&&!(!d&&a.pl===b)){B9.cg(a.nk,10241,b.oc);a.pl=b;}if(c!==null&&!(!d&&a.pU===c)){B9.cg(a.nk,10240,c.oc);a.pU=c;}},
AEV=()=>{let b,c,d,e,f;b=H9;if(b>0.0)return b;if(!(B3.p3.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){H9=1.0;return 1.0;}if(!Da){c=B_(16);d=c.data.length;e=new H5;f=0+d|0;e.kt=(-1);e.kB=d;e.ka=d;e.ki=0;e.ka=f;e.qS=0;e.rq=0;e.qk=c;}else{e=new CY;c=BI(64);e.kt=(-1);e.kB=64;e.ka=64;e.k_=Cp;e.lB=0;e.k6=c;e.ki=0;e.ka=64;e.mg=1;e.lM=0;e.k_=De();e=E9(e);}CC(e,0);CQ(e,e.kB);Bq.cl(34047,e);b=R0(e,0);H9=b;return b;},
AR8=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.px)P4(c);if(O1===UR){c=new S;c.j5=1;c.j6=1;c.j7=A(61);B(c);}if(!c.px){e=new S;e.j5=1;e.j6=1;e.j7=A(62);B(e);}c.px=0;f=c.qX;c.qX=null;g=1;h=c.p8;e=f.lz;if(h===(e===null?Fz:H_(e.lX)))e=f;else{e=new FH;h=f.lz;JL(e,h===null?f.mi:h.md,h===null?f.mm:h.mc,c.p8);h=Jb;e.rp=h;i=e.lz;if(i===null){Fc(e);h=e.l9;i=Bw(Fk.kk);h.globalCompositeOperation=i;}else{j=h!==h?1:0;MJ(i.ma,j);}i=f.lz;k=i===null?f.mi:i.md;l=i===null?f.mm:i.mc;h=e.lz;if(h===null){Fc(f);J9(e,
f.oq,0,0,k,l,0,0,k,l);}else{m=i.ma;n=h.ma;JU(m,n,0,0,k,l,0,0,k,l);}if(f.oJ){e=new S;e.j5=1;e.j6=1;e.j7=A(63);B(e);}ED();GM(FN,f.qb);h=f.lz;if(h!==null)H1(h.ma);f.oJ=1;g=1;}B9.cw(3317,1);if(c.wJ){c=e.lz;ANX(b,e,c===null?e.mi:c.md,c===null?e.mm:c.mc);}else{c=B9;h=e.lz;if(h===null)o=6408;else a:{j=h.lX;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new S;e=new K;e.j3=G(16);B$(e,e.j2,Cl(A(64)));J(e,e.j2,j,10);h=new I;p=e.j3;q=p.data;d=e.j2;j
=q.length;if(d>=0&&d<=(j-0|0)){h.j4=L(p.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}r=h===null?e.mi:h.md;k=h===null?e.mm:h.mc;if(h===null)m=6408;else b:{l=h.lX;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new S;e=new K;e.j3=G(16);Ec(e,e.j2,A(64));J(e,e.j2,l,10);h=new I;p=e.j3;q=p.data;d=e.j2;j=q.length;if(d>=0&&d<=(j-0|0)){h.j4=L(p.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}if(h===null)l=
5121;else c:{l=h.lX;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new S;e=new K;e.j3=G(16);B$(e,e.j2,Cl(A(64)));J(e,e.j2,l,10);h=new I;p=e.j3;q=p.data;d=e.j2;j=q.length;if(d>=0&&d<=(j-0|0)){h.j4=L(p.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}l=5121;}c.cz(b,d,o,r,k,0,m,l,e.qN);}if(g){if(e.oJ){e=new S;e.j5=1;e.j6=1;e.j7=A(63);B(e);}ED();GM(FN,e.qb);c=e.lz;if(c!==null)H1(c.ma);e.oJ=1;}},
AVA=()=>{H9=0.0;};
function HU(){NW.call(this);this.n7=null;}
let ER=null;
let JS=(a,b)=>{let c,d;a.n7=b;if(!b.px)P4(b);B9.cA(a.nk,a.qm);AR8(3553,b,0);Xl(a,a.pl,a.pU,1);AMu(a,a.pa,a.pn,1);c=a.qU;d=AEV();if(d!==1.0){c=AN_(c,d);Bq.cG(3553,34046,c);a.qU=c;}B9.cA(a.nk,0);},
AKh=a=>{let b,c,d,e,f,g,h,i;b=a.n7;if(!(b instanceof K4)){b=a;if(!b.$id$){c=E1();b.$id$=c;}d=Bh(a.$id$,4);b=new K;b.j3=G(16);D(b,b.j2,A(1));e=b.j2;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.j3;g=f.data;h=b.j2;i=g.length;if(h>=0&&h<=(i-0|0)){c.j4=L(f.data,0,h);return c;}b=new H;b.j5=1;b.j6=1;B(b);}c=b;if(!c.$id$){d=E1();c.$id$=d;}d=Bh(b.$id$,4);b=new K;b.j3=G(16);D(b,b.j2,A(1));e=b.j2;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.j3;g=f.data;h=b.j2;i=g.length;if(h>=0&&h<=(i-0|0)){c.j4=L(f.data,0,h);return c;}b=new H;b.j5
=1;b.j6=1;B(b);},
ANm=()=>{let b,c,d,e;b=new I0;c=JW(16);b.pf=0;d=Q(FI,c);e=d.data;b.mw=d;b.th=0.75;b.ql=e.length*0.75|0;ER=b;};
function Bg(){let a=this;C.call(a);a.j_=null;a.j8=0;a.ku=0;a.kE=null;}
let PE=a=>{a.ku=1;a.j_=Q(C,16);},
AXs=()=>{let a=new Bg();PE(a);return a;},
VW=(a,b)=>{a.ku=1;a.j_=Q(C,b);},
AWE=a=>{let b=new Bg();VW(b,a);return b;},
P0=(a,b,c)=>{a.ku=b;a.j_=Q(C,c);},
AUG=(a,b)=>{let c=new Bg();P0(c,a,b);return c;},
If=(a,b,c,d)=>{a.ku=b;if(d===null){d=new Df;d.j5=1;d.j6=1;B(d);}if(d===M(Bo)){d=new Bk;d.j5=1;d.j6=1;B(d);}if(c>=0){a.j_=DY(d.kj,c);return;}d=new D1;d.j5=1;d.j6=1;B(d);},
AUq=(a,b,c)=>{let d=new Bg();If(d,a,b,c);return d;},
QJ=(a,b)=>{a.ku=1;if(b===null){b=new Df;b.j5=1;b.j6=1;B(b);}if(b!==M(Bo)){a.j_=DY(b.kj,16);return;}b=new Bk;b.j5=1;b.j6=1;B(b);},
AUN=a=>{let b=new Bg();QJ(b,a);return b;},
Vf=(a,b)=>{let c,d,e,f,g;c=b.ku;d=b.j8;e=b.j_.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BC;f.kj=e;g=f;e.classObject=g;}}g=Ei(f);a.ku=c;if(g===null){b=new Df;b.j5=1;b.j6=1;B(b);}if(g===M(Bo)){b=new Bk;b.j5=1;b.j6=1;B(b);}if(d>=0){g=DY(g.kj,d);a.j_=g;c=b.j8;a.j8=c;Gr(b.j_,0,g,0,c);return;}b=new D1;b.j5=1;b.j6=1;B(b);},
AT8=a=>{let b=new Bg();Vf(b,a);return b;},
UU=(a,b)=>{LN(a,1,b,0,b.data.length);},
AWO=a=>{let b=new Bg();UU(b,a);return b;},
LN=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BC;g.kj=f;h=g;f.classObject=h;}}h=Ei(g);a.ku=b;if(h===null){h=new Df;h.j5=1;h.j6=1;B(h);}if(h===M(Bo)){h=new Bk;h.j5=1;h.j6=1;B(h);}if(e>=0){h=DY(h.kj,e);a.j_=h;a.j8=e;Gr(c,d,h,0,e);return;}h=new D1;h.j5=1;h.j6=1;B(h);},
AVS=(a,b,c,d)=>{let e=new Bg();LN(e,a,b,c,d);return e;},
Bf=(a,b)=>{let c,d,e,f;c=a.j_;d=c.data;e=a.j8;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=II(a,e);}c=c.data;f=a.j8;a.j8=f+1|0;c[f]=b;},
DK=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.j8)return a.j_.data[b];c=new H;d=new K;d.j3=G(16);D(d,d.j2,A(18));J(d,d.j2,b,10);D(d,d.j2,A(19));b=a.j8;J(d,d.j2,b,10);e=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);c.j5=1;c.j6=1;c.j7=e;B(c);}d=new H;d.j5=1;d.j6=1;B(d);},
SL=(a,b,c)=>{let d,e,f,g,h,i;d=a.j8;if(b>d){c=new H;e=new K;e.j3=G(16);D(e,e.j2,A(65));J(e,e.j2,b,10);D(e,e.j2,A(66));f=a.j8;J(e,e.j2,f,10);g=new I;h=e.j3;i=h.data;d=e.j2;f=i.length;if(d>=0&&d<=(f-0|0)){g.j4=L(h.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}h=a.j_;if(d==h.data.length){d=d*1.75|0;if(8>d)d=8;h=II(a,d);}if(!a.ku){i=h.data;i[a.j8]=i[b];}else Di(h,b,h,b+1|0,a.j8-b|0);h=h.data;a.j8=a.j8+1|0;h[b]=c;},
Li=(a,b,c)=>{let d,e,f;a:{d=a.j_;e=a.j8-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(f[e]===b)break;e=c;}return 1;}while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(b.cN(f[e]))return 1;e=c;}}return 0;},
D4=(a,b,c)=>{let d,e,f;a:{d=a.j_;if(!c&&b!==null){e=0;f=a.j8;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.j8;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
ID=(a,b,c)=>{let d,e,f;a:{d=a.j_;if(!(!c&&b!==null)){e=0;f=a.j8;while(e<f){if(d.data[e]===b){CF(a);Dm(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.j8;while(true){if(e>=f)break a;if(b.cN(d.data[e])){CF(a);Dm(a,e);return 1;}e=e+1|0;}}}return 0;},
Dm=(a,b)=>{let c,d,e,f,g,h,i;c=a.j8;if(b<c){d=a.j_;e=d.data;f=e[b];g=c-1|0;a.j8=g;if(!a.ku)e[b]=e[g];else Di(d,b+1|0,d,b,g-b|0);e[a.j8]=null;return f;}f=new H;h=new K;h.j3=G(16);D(h,h.j2,A(18));J(h,h.j2,b,10);D(h,h.j2,A(19));b=a.j8;J(h,h.j2,b,10);i=new I;d=h.j3;e=d.data;g=h.j2;c=e.length;if(g>=0&&g<=(c-0|0)){i.j4=L(d.data,0,g);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;f.j5=1;f.j6=1;B(f);},
QC=a=>{let b,c,d,e,f,g;b=a.j_;c=0;d=a.j8;e=null;if(c>d){e=new Bk;e.j5=1;e.j6=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.j8=0;},
II=(a,b)=>{let c,d,e,f,g,h;c=a.j_;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BC;e.kj=d;f=e;d.classObject=f;}}e=Ei(e);if(e===null){e=new Df;e.j5=1;e.j6=1;B(e);}if(e===M(Bo)){e=new Bk;e.j5=1;e.j6=1;B(e);}if(b<0){e=new D1;e.j5=1;e.j6=1;B(e);}e=DY(e.kj,b);d=e.data;g=a.j8;h=d.length;if(g<h)h=g;Gr(c,0,e,0,h);a.j_=e;return e;},
Gh=a=>{let b;if(CA){b=new Cr;b.kU=1;b.kY=a;b.l1=1;return b;}if(a.kE===null){b=new C0;b.mb=a;b.me=1;a.kE=b;}return CK(a.kE);},
Sj=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.ku)return 0;if(!(b instanceof Bg))return 0;c=b;if(!c.ku)return 0;d=a.j8;if(d!=c.j8)return 0;e=a.j_;f=c.j_;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cN(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
Vn=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.j8)return A(67);b=a.j_;c=new Sa;d=G(32);e=d.data;c.mS=d;f=c.l3;if(f==e.length)Ga(c,f+1|0);b=b.data;e=c.mS.data;g=c.l3;c.l3=g+1|0;e[g]=91;h=b[0];if(h===null)JG(c);else{h=h.T();if(h===null)JG(c);else{i=h.j4.length;j=c.l3+i|0;if(j>c.mS.data.length)Ga(c,j);Ld(h,0,i,c.mS,c.l3);c.l3=j;}}i=1;while(i<a.j8){g=A(47).j4.length;k=c.l3+g|0;if(k>c.mS.data.length)Ga(c,k);Ld(A(47),0,g,c.mS,c.l3);c.l3=k;h=b[i];if(h===null)JG(c);else{h=h.T();if(h===null)JG(c);else{k=h.j4.length;j=c.l3+k|0;if
(j>c.mS.data.length)Ga(c,j);Ld(h,0,k,c.mS,c.l3);c.l3=j;}}i=i+1|0;}f=c.l3;if(f==c.mS.data.length)Ga(c,f+1|0);a:{b=c.mS;e=b.data;g=c.l3;f=g+1|0;c.l3=f;e[g]=93;if(!f)c=A(68);else{c=new I;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.j4=L(b.data,0,f);}return c;}c=new H;c.j5=1;c.j6=1;B(c);};
function J6(){let a=this;C.call(a);a.uD=0;a.pg=null;a.kP=null;a.wt=0.0;a.vo=0;a.s3=0;a.sZ=0;}
let QE=null;
let AJG=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wt=c;d=JD(b,c);a.vo=d*c|0;b=d-1|0;a.sZ=b;a.s3=Fa(V(b));a.pg=Q(C,d);a.kP=Q(C,d);return;}e=new Bk;f=new K;f.j3=G(16);D(f,f.j2,A(69));E$(f,f.j2,c);g=new I;h=f.j3;i=h.data;d=f.j2;j=i.length;if(d>=0&&d<=(j-0|0)){g.j4=L(h.data,0,d);e.j5=1;e.j6=1;e.j7=g;B(e);}f=new H;f.j5=1;f.j6=1;B(f);},
EQ=(a,b)=>{let c=new J6();AJG(c,a,b);return c;},
BE=(a,b)=>{let c,d,e;if(b===null){c=new Bk;c.j5=1;c.j6=1;c.j7=A(70);B(c);}d=a.pg;e=Bl(Be(Ba(V(b.cT()),E(2135587861, 2654435769)),a.s3));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cN(b))break;e=(e+1|0)&a.sZ;}return e;},
Ce=(a,b,c)=>{let d,e,f;d=BE(a,b);if(d>=0){e=a.kP.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.pg.data;e[d]=b;a.kP.data[d]=c;d=a.uD+1|0;a.uD=d;if(d>=a.vo)ABn(a,e.length<<1);return null;},
ABn=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.pg.data.length;a.vo=b*a.wt|0;d=b-1|0;a.sZ=d;a.s3=Fa(V(d));e=a.pg;f=a.kP;a.pg=Q(C,b);a.kP=Q(C,b);if(a.uD>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.pg;b=Bl(Be(Ba(V(g.cT()),E(2135587861, 2654435769)),a.s3));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.sZ;}j[b]=g;a.kP.data[b]=h;}d=d+1|0;}}}},
AU5=()=>{QE=new C;};
let AFQ=F(J6);
let ASD=F();
function DV(){let a=this;C.call(a);a.mJ=0;a.mx=0;a.mR=0;a.mI=0;a.n5=0;a.mN=null;a.ol=0;a.pz=0;}
let AKp=(a,b)=>{if(!(b instanceof DV))return 0;return AFy(a,b);},
AFy=(a,b)=>{let c,d,e;a:{if(b!==null&&a.mJ==b.mJ&&a.mx==b.mx&&a.mI==b.mI&&a.mR==b.mR){c=a.mN;d=b.mN;if(c===d)e=1;else if(!(d instanceof I))e=0;else{d=d;e=c.j4!==d.j4?0:1;}if(e&&a.ol==b.ol){e=1;break a;}}e=0;}return e;};
let ASV=F();
let AHm=F();
let AKU=F();
let AIT=F();
let RJ=F();
let Xq=null;
let SZ=()=>{SZ=BQ(RJ);AHu();};
let AHu=()=>{let b,c,d;b=new Ky;NY();c=new Bn;CT();b.wV=c;d=new Bn;b.w4=d;b.wx=new Bn;b.w6=new Bn;c.kf=0.0;c.kg=0.0;c.kh=0.0;d.kf=0.0;d.kg=0.0;d.kh=0.0;ALE(b,c,d);Xq=b;};
let Yl=F();
let AJL=F();
let AIt=F();
let AJg=F();
let APq=F();
let AFd=F();
let AQY=F();
let AGZ=F();
let AAd=F();
let ABC=F();
let JN=F(BG);
let ATi=null,AQ1=null,AEy=null;
let AFJ=()=>{let b,c;b=new JN;b.kk=A(71);b.ke=0;ATi=b;c=new JN;c.kk=A(72);c.ke=1;AQ1=c;AEy=T(JN,[b,c]);};
let AJQ=F();
let TL=F(0);
let Dz=F();
let Yw=F(Dz);
let Yu=F(Dz);
let AHU=F(Dz);
let ACR=F(Dz);
let AM2=F(Dz);
let LZ=F(Dz);
let ACF=F(LZ);
let HB=F(0);
let ADR=F();
let Fh=F(0);
let AMM=F();
let AQU=F();
let AA4=F();
let EJ=F();
let ALG=F(EJ);
let Ht=F(EJ);
let DP=F(Ht);
let AD$=null;
let Q8=()=>{Q8=BQ(DP);Y3();};
let Y3=()=>{let b;b=new Bn;CT();AD$=b;};
let AMs=F();
let APo=F(DP);
let AHb=F(DP);
let ARJ=F(EJ);
let RA=null;
let AVg=()=>{RA=B_(3);};
let Lm=F(EJ);
let Ye=F(Lm);
let ACB=F(DP);
let G1=F(Ht);
let AIN=F(G1);
let AG$=F(DP);
let AJj=F(DP);
let AIK=F(G1);
let Hr=F(BG);
let AIy=null,ALB=null,AEa=null,ABp=null;
let AKQ=()=>{let b,c,d;b=new Hr;b.kk=A(73);b.ke=0;AIy=b;c=new Hr;c.kk=A(74);c.ke=1;ALB=c;d=new Hr;d.kk=A(75);d.ke=2;AEa=d;ABp=T(Hr,[b,c,d]);};
let FS=F();
let MW=F(FS);
let WS=F(MW);
let HJ=F(BG);
let AQ0=null,ARB=null,Wz=null,ARR=null;
let AGE=()=>{let b,c,d;b=new HJ;b.kk=A(76);b.ke=0;AQ0=b;c=new HJ;c.kk=A(77);c.ke=1;ARB=c;d=new HJ;d.kk=A(78);d.ke=2;Wz=d;ARR=T(HJ,[b,c,d]);};
let C2=F(FS);
let H$=F(C2);
let AAQ=F();
let GD=F(C2);
let AP0=null,APZ=null,AP1=null,AQ8=null;
let Uw=()=>{Uw=BQ(GD);AIe();};
let AIe=()=>{let b;b=new Bn;CT();AP0=b;APZ=new Bn;AP1=new Bn;b=new Ep;b.oj=0.0;b.og=0.0;b.oh=0.0;b.oi=1.0;AQ8=b;};
let Ex=F(GD);
let FY=F(Ex);
let ADN=F(FY);
let HH=F(C2);
let ATz=F(HH);
let APl=F(C2);
let Fw=F(C2);
let Yo=F(Fw);
let Hd=F(C2);
let ADE=F(Ex);
let AF3=F(Ex);
let KL=F(C2);
let ALH=F(KL);
let ZJ=F(Fw);
let AHk=F(FY);
let ALy=F(C2);
let AJu=F(Fw);
let ALN=F(C2);
let ANz=F(GD);
let AF$=F(Dj);
let AAp=F(Dj);
let AAH=F(Ex);
let AMg=F(Hd);
let ARL=F(H$);
let AKq=F(H$);
let ANj=F(Hd);
let AIg=F(FY);
let ASs=F(HH);
let EH=F(FS);
let AIS=F(EH);
let FC=F();
let AMG=F(FC);
let AN3=F(EH);
let APk=F(EH);
let AQl=F(FC);
let ADl=F(EH);
let APr=F(FC);
let Kn=F(0);
let Oa=F(0);
function BC(){let a=this;C.call(a);a.kc=null;a.kj=null;a.qr=null;}
let UC=0;
let AWq=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BC;c.kj=b;d=c;b.classObject=d;}return c;},
AII=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=E1();b.$id$=c;}d=a.$id$;b=new K;b.j3=G(16);D(b,b.j2,A(79));J(b,b.j2,d,10);c=new I;e=b.j3;f=e.data;g=b.j2;d=f.length;if(g>=0&&g<=(d-0|0)){c.j4=L(e.data,0,g);return c;}b=new H;b.j5=1;b.j6=1;B(b);},
Ei=a=>{let b,c,d;b=a.kj.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BC;c.kj=b;d=c;b.classObject=d;}}return c;},
AHM=()=>{DO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){S8(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Bo,callable:function(obj,args){J1();OL();return null;}}];DN.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){Q0(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[DN],returnType:Bo,callable:function(obj,
args){AUf(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){AVW(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return AUo(obj);}}];Y.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){Ss(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,
args){Qg(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AVv(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AWi(obj,DI(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AXW(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,
args){AU3(obj,DI(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Do,callable:function(obj,args){return AWf(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Do],returnType:Bo,callable:function(obj,args){AV_(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AXl(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,
args){AVw(obj,B6(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AWd(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args){AVd(obj,B6(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AVB(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable
:function(obj,args){AUj(obj,B6(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:KG,callable:function(obj,args){return AVR(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[KG],returnType:Bo,callable:function(obj,args){AWx(obj,ATY(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AT6(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:CD,callable:function(obj,args){return AWF(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AXK(obj,DI(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AUK(obj,DI(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CE,callable:function(obj,args){return AXh(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[CE],returnType:Bo,callable:function(obj,args){AT5(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[CE,Bb],returnType:Bb,callable:function(obj,args){return AXm(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AVK(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AVh(obj
);}},{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Ci],returnType:Bo,callable:function(obj,args){AW6(obj,DB(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return OM(obj);}}];Bg.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){PE(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args)
{VW(obj,B6(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ci,BV],returnType:Bo,callable:function(obj,args){P0(obj,DB(args[0]),B6(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ci,BV,BC],returnType:Bo,callable:function(obj,args){If(obj,DB(args[0]),B6(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BC],returnType:Bo,callable:function(obj,args){QJ(obj,args[0]);return null;}},{name:"<init>",modifiers:
0,accessLevel:3,parameterTypes:[Bg],returnType:Bo,callable:function(obj,args){Vf(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[D8(C)],returnType:Bo,callable:function(obj,args){UU(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ci,D8(C),BV,BV],returnType:Bo,callable:function(obj,args){LN(obj,DB(args[0]),args[1],B6(args[2]),B6(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Bo,callable:function(obj,
args){Bf(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Bo,callable:function(obj,args){AVj(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Bo,callable:function(obj,args){AXa(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Bo,callable:function(obj,args){AXB(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers
:0,accessLevel:3,parameterTypes:[Bg],returnType:Bo,callable:function(obj,args){AVG(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bg,BV,BV],returnType:Bo,callable:function(obj,args){AT$(obj,args[0],B6(args[1]),B6(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[D8(C)],returnType:Bo,callable:function(obj,args){AVq(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[D8(C),BV,BV],returnType:Bo,callable:function(obj,
args){AUA(obj,args[0],B6(args[1]),B6(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return DK(obj,B6(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bo,callable:function(obj,args){AWJ(obj,B6(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bo,callable:function(obj,args){SL(obj,B6(args[0]),args[1]);return null;}},{name:"insertRange",modifiers
:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bo,callable:function(obj,args){AWZ(obj,B6(args[0]),B6(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bo,callable:function(obj,args){AXV(obj,B6(args[0]),B6(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Ci],returnType:Ci,callable:function(obj,args){return Li(obj,args[0],DB(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bg,Ci],returnType:Ci,callable
:function(obj,args){return AVO(obj,args[0],DB(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bg,Ci],returnType:Ci,callable:function(obj,args){return AWe(obj,args[0],DB(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ci],returnType:BV,callable:function(obj,args){return D4(obj,args[0],DB(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ci],returnType:BV,callable:function(obj,args){return AWC(obj,args[0],DB(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Ci],returnType:Ci,callable:function(obj,args){return ID(obj,args[0],DB(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return Dm(obj,B6(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bo,callable:function(obj,args){AUZ(obj,B6(args[0]),B6(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bg,Ci],returnType:Ci,callable:function(obj,
args){return AXD(obj,args[0],DB(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AUd(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AXy(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AXU(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AXi(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AUE(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){QC(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D8(C),callable:function(obj,args){return AWD(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:D8(C),callable:function(obj,args){return AW_(obj,B6(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:D8(C),callable:function(obj,args){return AXv(obj,B6(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BV],returnType:D8(C),callable:function(obj,args){return II(obj,B6(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){AW5(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[Ib],returnType:Bo,callable:function(obj,args){AXG(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[Ib,BV],returnType:C,callable:function(obj,args){return AW9(obj,args[0],B6(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[Ib,BV],returnType:BV,callable:function(obj,args){return AWV(obj,args[0],B6(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){AW7(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable
:function(obj,args){ATW(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cr,callable:function(obj,args){return Gh(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[N4],returnType:DG,callable:function(obj,args){return AXS(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args){AUe(obj,B6(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return AWk(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D8(C),callable:function(obj,args){return AUc(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BC],returnType:D8(C),callable:function(obj,args){return AUz(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AUt(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ci,callable:function(obj,
args){return Sj(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ci,callable:function(obj,args){return AXe(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return Vn(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[I],returnType:I,callable:function(obj,args){return AW0(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BC],returnType:Bg,callable:function(obj,
args){return AWN(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Ci,BV,BC],returnType:Bg,callable:function(obj,args){return AXu(DB(args[0]),B6(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[D8(C)],returnType:Bg,callable:function(obj,args){return AUp(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:HQ,callable:function(obj,args){return AUC(obj);}}];DR.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bo,callable:function(obj,args){Uh(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){OZ(obj);return null;}}];Dd.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){P9(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP],returnType:Bo,callable:function(obj,args){N2(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,
BP],returnType:Bo,callable:function(obj,args){V5(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP],returnType:Bo,callable:function(obj,args){Vz(obj,args[0],args[1],args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP,BP],returnType:Bo,callable:function(obj,args){Wk(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP,BP,BP],returnType:Bo,callable:function(obj,
args){R8(obj,args[0],args[1],args[2],args[3],args[4]);return null;}},{name:"act",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Ci,callable:function(obj,args){return Od(obj,DI(args[0]));}},{name:"restart",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){UO(obj);return null;}}];Dp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){O4(obj);return null;}},{name:"begin",modifiers:0,accessLevel:2,parameterTypes
:[],returnType:Bo,callable:function(obj,args){S3(obj);return null;}},{name:"update",modifiers:0,accessLevel:2,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){Sm(obj,DI(args[0]));return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){Ur(obj);return null;}},{name:"setStartPosition",modifiers:0,accessLevel:3,parameterTypes:[CD,CD],returnType:Bo,callable:function(obj,args){AWu(obj,DI(args[0]),DI(args[1]));return null;}},{name:"setPosition",modifiers
:0,accessLevel:3,parameterTypes:[CD,CD],returnType:Bo,callable:function(obj,args){AVx(obj,DI(args[0]),DI(args[1]));return null;}},{name:"setPosition",modifiers:0,accessLevel:3,parameterTypes:[CD,CD,BV],returnType:Bo,callable:function(obj,args){AWU(obj,DI(args[0]),DI(args[1]),B6(args[2]));return null;}},{name:"getX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AVn(obj);}},{name:"setX",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,
args){AUQ(obj,DI(args[0]));return null;}},{name:"getY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AXO(obj);}},{name:"setY",modifiers:0,accessLevel:3,parameterTypes:[CD],returnType:Bo,callable:function(obj,args){AV3(obj,DI(args[0]));return null;}},{name:"getStartX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,args){return AV1(obj);}},{name:"getStartY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CD,callable:function(obj,
args){return AW2(obj);}},{name:"getAlignment",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AVz(obj);}},{name:"setAlignment",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bo,callable:function(obj,args){AU7(obj,B6(args[0]));return null;}}];C1.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable:function(obj,args){R4(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bo,callable
:function(obj,args){Wg(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AWr(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Ci],returnType:Bo,callable:function(obj,args){AT2(obj,DB(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:GF,callable:function(obj,args){return AUI(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[GF],returnType:Bo,callable
:function(obj,args){AWL(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CE,callable:function(obj,args){return AXJ(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[CE],returnType:Bo,callable:function(obj,args){AVr(obj,args[0]);return null;}}];},
NT=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.kj.$meta.primitive?1:0)&&!(a.kj.$meta.item===null?0:1)){if(a.qr===null){if(!UC){UC=1;AHM();}b=a.kj.$meta.methods;a.qr=Q(Hy,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof FM())?e:e[Br]===true?e:e.kI;g=U(f.name);if(g===A(80))h=1;else if(!(A(80) instanceof I))h=0;else{e=A(80);h=g.j4!==e.j4?0:1;}if(h){g=f.parameterTypes;i=Q(BC,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BC;e.kj
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.qr.data;h=c+1|0;e=new Hy;g=U(f.name);k=f.modifiers;n=f.accessLevel;f=Du(f.callable,"call");e.lH=a;e.y4=g;e.rz=k;e.sw=n;e.oQ=i;e.uZ=f;j[c]=e;c=h;}d=d+1|0;}i=a.qr;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BC;e.kj=b;f=e;b.classObject=f;}}e=Ei(e);if(e===null){e=new Df;e.j5=1;e.j6=1;B(e);}if(e===M(Bo)){e=new Bk;e.j5=1;e.j6=1;B(e);}if(c<0){e=new D1;e.j5=1;e.j6=1;B(e);}i=i.data;f=DY(e.kj,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.qr=f;}return a.qr.p();}return Q(Hy,0);},
ARY=a=>{let b,c,d,e,f,g,h,i,j,k;b=(NT(a)).data;c=b.length;d=Q(Hy,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Lb(h.rz,h.sw)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=BU(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BC;h.kj=j;k=h;j.classObject=k;}}j=Ei(h);if(j===null){h=new Df;h.j5=1;h.j6=1;B(h);}if(j===M(Bo)){h=new Bk;h.j5=1;h.j6=1;B(h);}if(f<0){h=new D1;h.j5=1;h.j6=1;B(h);}k=DY(j.kj,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
AOX=(a,b)=>{let c,d,e,f;c=(NT(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Hj;f.j5=1;f.j6=1;B(f);}f=c[e];if(UL(f.oQ.p(),b))break;e=e+1|0;}return f;},
AOV=(a,b)=>{let c,d,e,f,g;c=(NT(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Hj;f.j5=1;f.j6=1;B(f);}f=c[e];g=!(Lb(f.rz,f.sw)&1)?0:1;if(g&&UL(f.oQ.p(),b))break;e=e+1|0;}return f;};
let ABJ=F();
let AMz=b=>{let c,d,e,f,g;if(b===null)return null;c=BI(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof FM())?g:g[Br]===true?g:g.kI;e=e+1|0;}return c;},
B5=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
Du=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let AAw=F();
let Xi=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
MA=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(MA(d[e],c))return 1;e=e+1|0;}return 0;},
EG=b=>{setTimeout(()=>{AWG(O6)(b);},0);},
O6=b=>{b.c3();},
Ne=(b,c)=>{setTimeout(()=>{O6(b);},c);},
AHv=()=>{return [];};
function Dr(){let a=this;C.call(a);a.j7=null;a.lq=null;a.j5=0;a.j6=0;a.yT=null;}
let R=a=>{a.j5=1;a.j6=1;},
AW3=()=>{let a=new Dr();R(a);return a;},
ND=(a,b)=>{a.j5=1;a.j6=1;a.j7=b;},
AUr=a=>{let b=new Dr();ND(b,a);return b;},
Si=(a,b,c)=>{a.j5=1;a.j6=1;a.j7=b;a.lq=c;},
AWw=(a,b)=>{let c=new Dr();Si(c,a,b);return c;},
Bi=a=>{return a;},
AOh=a=>{return a.j7;},
AVo=a=>{return a.c4();},
AWT=a=>{let b;b=a.lq;if(b===a)b=null;return b;},
AVD=a=>{let b,c;if(Dh===null){b=new FG;c=new Ck;c.lL=BI(32);b.l6=c;c=new K;Bt(c);c.j3=G(16);b.lQ=c;b.lP=G(32);b.lR=0;b.lS=Cg;Dh=b;}J4(a,Dh);},
J4=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BC;d.kj=c;e=d;c.classObject=e;}}if(d.kc===null)d.kc=U(d.kj.$meta.name);DA(Bw(d.kc));d=a.c4();if(d!==null){c=new K;c.j3=G(16);D(c,c.j2,A(81));D(c,c.j2,d);e=new I;f=c.j3;g=f.data;h=c.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);DA(Bw(e));}else{b=new H;b.j5=1;b.j6=1;B(b);}}a:{DA("\n");f=a.yT;if(f!==null){f=f.data;j=f.length;i=0;while(true){if(i>=j)break a;e=f[i];DA("\tat ");c=A(2);if(e!==null)c=!e.m5
?A(82):A(83);DA(Bw(c));DA("\n");i=i+1|0;}}}c=a.lq;if(c!==null&&c!==a){DA("Caused by: ");J4(a.lq,b);}};
let BF=F(Dr);
let GC=a=>{a.j5=1;a.j6=1;},
ATX=()=>{let a=new BF();GC(a);return a;};
let Bz=F(BF);
let Im=a=>{a.j5=1;a.j6=1;},
AU8=()=>{let a=new Bz();Im(a);return a;},
GO=(a,b)=>{a.j5=1;a.j6=1;a.j7=b;},
AUS=a=>{let b=new Bz();GO(b,a);return b;};
let AG5=F(Bz);
let JX=F(0);
function I(){C.call(this);this.lW=0;}
let VN=null,Mg=null,Om=null;
let Yh=(a,b)=>{a.j4=L(b.data,0,b.data.length);},
AT0=a=>{let b=new I();Yh(b,a);return b;},
AE3=(a,b)=>{a.j4=b;},
TG=a=>{let b=new I();AE3(b,a);return b;},
ATQ=(a,b,c,d)=>{let e,f;e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.j4=L(b.data,c,d);return;}f=new H;f.j5=1;f.j6=1;B(f);},
AAZ=(a,b,c)=>{let d=new I();ATQ(d,a,b,c);return d;},
Ld=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.j4.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AUD(a.j4,b,d.data,e,g);return;}}h=new H;h.j5=1;h.j6=1;B(h);},
MM=(a,b,c)=>{let d,e,f;if((c+b.j4.length|0)>a.j4.length)return 0;d=0;a:{b:{while(d<b.j4.length){if(d<0)break a;if(d>=b.j4.length)break a;e=b.j4.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.j4.length)break b;if(e!=a.j4.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);},
Le=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.j4.length>a.j4.length)return 0;c=0;d=a.j4.length-b.j4.length|0;a:{b:{while(d<a.j4.length){if(d<0)break a;if(d>=a.j4.length)break a;e=a.j4.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.j4.length)break b;if(e!=b.j4.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);},
HK=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.j4.length)return (-1);if(a.j4.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.j4.length-1|0))return (-1);if(a.j4.charCodeAt(c)==e&&a.j4.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
EY=(a,b,c)=>{let d,e,f,g;d=a.j4.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.j4.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.j4.charCodeAt(d)==g){b=d-1|0;if(a.j4.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Qr=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.j4.length-b.j4.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.j4.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.j4.length)break a;g=a.j4.charCodeAt(f);if(e<0)break b;if(e>=b.j4.length)break b;if(g!=b.j4.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);},
AC5=(a,b,c)=>{let d,e,f;d=a.j4.length-b.j4.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.j4.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.j4.length)break a;f=a.j4.charCodeAt(f);if(e<0)break b;if(e>=b.j4.length)break b;if(f!=b.j4.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);},
Ch=(a,b,c)=>{let d,e,f;d=a.j4.length;e=BU(b,c);if(!e)return Mg;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return TG(a.j4.substring(b,c));f=new W;f.j5=1;f.j6=1;B(f);},
C9=(a,b)=>{let c,d,e,f;c=a.j4.length-b.j4.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.j4.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.j4.length)break a;f=a.j4.charCodeAt(f);if(e<0)break b;if(e>=b.j4.length)break b;if(f!=b.j4.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);},
M3=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.j3=G(16);e=a.j4.length-b.j4.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Ch(a,f,a.j4.length);g=d.j2;if(b===null)b=A(2);D(d,g,b);b=new I;h=d.j3;i=h.data;j=d.j2;e=i.length;if(j>=0&&j<=(e-0|0)){b.j4=L(h.data,0,j);return b;}b=new H;b.j5=1;b.j6=1;B(b);}k=0;d:{while(k<b.j4.length){j=f+k|0;if(j<0)break b;if(j>=a.j4.length)break b;j=a.j4.charCodeAt(j);if(k<0)break c;if(k>=b.j4.length)break c;if(j!=b.j4.charCodeAt(k)){if(f<0)break a;if(f>=a.j4.length)break a;k=a.j4.charCodeAt(f);j
=d.j2;Bj(d,j,j+1|0);d.j3.data[j]=k;break d;}k=k+1|0;}D(d,d.j2,c===null?A(2):c);f=f+(b.j4.length-1|0)|0;}f=f+1|0;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);},
AHR=a=>{let b,c,d;b=0;c=a.j4.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.j4.length)break;if(a.j4.charCodeAt(b)>32)break a;b=b+1|0;}d=new W;d.j5=1;d.j6=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.j4.length)break b;if(a.j4.charCodeAt(c)>32)break;c=c+(-1)|0;}return Ch(a,b,c+1|0);}d=new W;d.j5=1;d.j6=1;B(d);},
Cl=a=>{return a;},
AQ_=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof I))return 0;c=b;return a.j4!==c.j4?0:1;},
ALa=a=>{let b;a:{if(!a.lW){b=0;while(true){if(b>=a.j4.length)break a;a.lW=(31*a.lW|0)+a.j4.charCodeAt(b)|0;b=b+1|0;}}}return a.lW;},
AXf=()=>{let b;VN=G(0);b=new I;b.j4="";Mg=b;Om=new NM;};
let Ev=F();
function Fu(){Ev.call(this);this.nu=0;}
let Or=null,Ef=null;
let KE=(b,c)=>{if(b!==null)return VM(b,0,b.j4.length,c);b=new Cu;b.j5=1;b.j6=1;b.j7=A(84);B(b);},
VM=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new Cu;b.j5=1;b.j6=1;b.j7=A(85);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.j4.length){a:{switch(b.j4.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new Cu;b.j5=1;b.j6=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.j4.length)break b;g=AOH(b.j4.charCodeAt(g));if(g<0){k=new Cu;l=Ch(b,c,d);b=new K;b.j3=G(16);D(b,b.j2,A(86));c=b.j2;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.j3;o=n.data;d=b.j2;e
=o.length;if(d>=0&&d<=(e-0|0)){m.j4=L(n.data,0,d);k.j5=1;k.j6=1;k.j7=m;B(k);}b=new H;b.j5=1;b.j6=1;B(b);}if(g>=e){k=new Cu;l=Ch(b,c,d);b=new K;b.j3=G(16);D(b,b.j2,A(87));J(b,b.j2,e,10);D(b,b.j2,A(81));c=b.j2;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.j3;o=n.data;d=b.j2;e=o.length;if(d>=0&&d<=(e-0|0)){m.j4=L(n.data,0,d);k.j5=1;k.j6=1;k.j7=m;B(k);}b=new H;b.j5=1;b.j6=1;B(b);}if(h>i){b=new Cu;b.j5=1;b.j6=1;b.j7=A(88);B(b);}h=Dl(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new Cu;l=Ch(b,c,d);b
=new K;b.j3=G(16);D(b,b.j2,A(89));c=b.j2;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.j3;o=n.data;d=b.j2;e=o.length;if(d>=0&&d<=(e-0|0)){m.j4=L(n.data,0,d);k.j5=1;k.j6=1;k.j7=m;B(k);}b=new H;b.j5=1;b.j6=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);}b=new Cu;k=new K;k.j3=G(16);D(k,k.j2,A(90));J(k,k.j2,e,10);m=new I;n=k.j3;o=n.data;d=k.j2;e=o.length;if(d>=0&&d<=(e-0|0)){m.j4=L(n.data,0,d);b.j5=1;b.j6=1;b.j7=m;B(b);}b=new H;b.j5=1;b.j6=1;B(b);},
K5=b=>{if(b!==null)return VM(b,0,b.j4.length,10);b=new Cu;b.j5=1;b.j6=1;b.j7=A(84);B(b);},
EX=()=>{let b,c,d,e,f;a:{if(Ef===null){b=Q(Fu,256);c=b.data;Ef=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new Fu;f.nu=d-128|0;c[d]=f;d=d+1|0;}}}},
B6=a=>{return a.nu;},
AOH=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
O2=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
Ea=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AW4=()=>{Or=M(BV);};
function Bc(){let a=this;C.call(a);a.j3=null;a.j2=0;}
let E0=a=>{a.j3=G(16);},
AVl=()=>{let a=new Bc();E0(a);return a;},
DM=(a,b)=>{a.j3=G(b);},
AXo=a=>{let b=new Bc();DM(b,a);return b;},
IU=(a,b)=>{D(a,a.j2,b===null?A(2):b.T());return a;},
Jq=(a,b)=>{D(a,a.j2,b);return a;},
D=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.j2){if(c===null)c=A(2);else if(c.j4.length?0:1)return a;Is(a,a.j2+c.j4.length|0);d=a.j2-1|0;while(d>=b){a.j3.data[d+c.j4.length|0]=a.j3.data[d];d=d+(-1)|0;}a.j2=a.j2+c.j4.length|0;e=0;a:{while(e<c.j4.length){f=a.j3;d=b+1|0;if(e<0)break a;if(e>=c.j4.length)break a;f.data[b]=c.j4.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);},
Iu=(a,b)=>{return J(a,a.j2,b,10);},
Ip=(a,b,c)=>{return J(a,a.j2,b,c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(EV(c,d)<0){if(e)Bj(a,b,b+1|0);else{Bj(a,b,b+2|0);f=a.j3.data;g=b+1|0;f[b]=45;b=g;}a.j3.data[b]=NO(c,d);}else{h=1;i=1;j=D7((-1),d);b:{while(true){k=Dl(h,d);if(EV(k,c)>0){k=h;break b;}i=i+1|0;if(EV(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bj(a,b,b+i|0);if(e)e=b;else{f=a.j3.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.j3.data;b=e+1|0;f[e]=NO(D7(c,k),d);c=AV4(c,k);k=D7(k,d);e=b;}}}return a;},
E$=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BU(c,0.0);if(!d){if(1.0/c===Infinity){Bj(a,b,b+3|0);e=a.j3.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bj(a,b,b+4|0);e=a.j3.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bj(a,b,b+3|0);e=a.j3.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bj(a,b,b+8|0);d=b;}else{Bj(a,b,b+9|0);e=a.j3.data;d=b+1|0;e[b]=45;}e=a.j3.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Re;AJ$(c,f);d=f.t4;g=f.tQ;h=f.vN;i=1;j=1;if(h)j=2;k=9;l=APN(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bj(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.j3.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.j3.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.j3.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.j3.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Qk=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BU(c,0.0);if(!d){if(1.0/c===Infinity){Bj(a,b,b+3|0);e=a.j3.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bj(a,b,b+4|0);e=a.j3.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bj(a,b,b+3|0);e=a.j3.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bj(a,b,b+8|0);d=b;}else{Bj(a,b,b+9|0);e=a.j3.data;d=b+1|0;e[b]=45;}e=a.j3.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Qv;AGF(c,f);g=f.up;h=f.tH;i=f.vE;j=1;k=1;if(i)k=2;l=18;m=AMy(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bj(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.j3.data;i=b+1|0;e[b]=45;}p=E(1569325056, 23283064);if(o){e=a.j3.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(AC0(p,Ca))d=0;else{d=Bl(MY(g,p));g=Xv(g,p);}e=a.j3.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=MY(p,V(10));q=q+1|0;}if(h){e=a.j3.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
APN=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AMy=b=>{let c,d,e,f,g;c=V(1);d=0;e=16;f=Oc.data;g=f.length-1|0;while(g>=0){if(D5(Xv(b,Ba(c,f[g])),Ca)){d=d|e;c=Ba(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
Gl=(a,b)=>{return a.dd(a.j2,b);},
Ec=(a,b,c)=>{D(a,b,c===null?A(2):c.T());return a;},
Is=(a,b)=>{let c,d,e,f,g,h;c=a.j3.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.j3=g;},
Mn=a=>{let b,c,d,e,f;b=new I;c=a.j3;d=c.data;e=a.j2;f=d.length;if(e>=0&&e<=(f-0|0)){b.j4=L(c.data,0,e);return b;}b=new H;b.j5=1;b.j6=1;B(b);},
Kk=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.j3.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Vt=(a,b)=>{let c,d,e,f;if(b>=0){c=a.j2;if(b<c){c=c-1|0;a.j2=c;while(b<c){d=a.j3.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new W;f.j5=1;f.j6=1;B(f);},
ARp=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BU(b,c);if(d<=0){e=a.j2;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.j2=e-(c-b|0)|0;g=0;while(g<f){h=a.j3.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new W;i.j5=1;i.j6=1;B(i);},
Bj=(a,b,c)=>{let d,e,f,g;d=a.j2;e=d-b|0;a.c9((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.j3.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.j2=a.j2+(c-b|0)|0;};
let IS=F(0);
let K=F(Bc);
let ASg=a=>{a.j3=G(16);},
En=()=>{let a=new K();ASg(a);return a;},
Mi=(a,b)=>{D(a,a.j2,b===null?A(2):b.T());return a;},
FZ=(a,b)=>{D(a,a.j2,b);return a;},
FK=(a,b)=>{J(a,a.j2,b,10);return a;},
Xh=(a,b)=>{let c;c=a.j2;Bj(a,c,c+1|0);a.j3.data[c]=b;return a;},
ASL=(a,b,c)=>{D(a,b,c===null?A(2):c.T());return a;},
ARo=(a,b,c)=>{ARp(a,b,c);return a;},
BY=(a,b,c)=>{D(a,b,c);return a;},
AHK=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.j3.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ACE=(a,b,c,d)=>{let e,f,g,h,i;e=a.j2;Bj(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.j3.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
ZH=a=>{return a.j2;},
Et=a=>{let b,c,d,e,f;b=new I;c=a.j3;d=c.data;e=a.j2;f=d.length;if(e>=0&&e<=(f-0|0)){b.j4=L(c.data,0,e);return b;}b=new H;b.j5=1;b.j6=1;B(b);},
AH$=(a,b)=>{Is(a,b);},
AI0=(a,b,c)=>{Bj(a,b,b+1|0);a.j3.data[b]=c;return a;},
B$=(a,b,c)=>{D(a,b,c);return a;};
function Rn(){let a=this;C.call(a);a.vj=0;a.xW=0;a.uK=0;a.vT=null;a.xS=0;a.Am=null;a.vx=0;a.x4=null;a.r7=0;a.p2=0;a.tR=0;a.vn=0;a.wr=0;a.v6=0;a.xp=0;a.wR=0;a.w1=0;a.u7=0;a.sN=0;}
let YU=(a,b)=>{a.vj=0;a.xW=1;a.uK=0;a.xS=1;a.Am=A(68);a.vx=0;a.r7=(-1);a.p2=(-1);a.tR=0;a.vn=0;a.wr=0;a.v6=0;a.xp=0;a.wR=0;a.w1=0;a.u7=0;a.sN=1;a.x4=b;},
ASX=a=>{let b=new Rn();YU(b,a);return b;};
let P5=F(0);
function LO(){let a=this;C.call(a);a.o7=null;a.rr=null;a.wp=null;a.wW=null;a.zm=null;a.nF=null;a.se=null;a.sl=null;a.r2=null;a.oR=null;a.qR=null;a.tv=0;a.u8=0;a.yu=null;a.pC=0;a.r5=null;a.yQ=null;a.yx=null;a.rG=null;a.vp=null;a.o9=null;}
let GW=null;
let Qh=(a,b,c)=>{let d;d=new Bg;d.ku=1;d.j_=Q(C,4);a.r2=d;a.qR=NA;a.tv=(-1);a.u8=1;a.pC=1;a.yQ=EQ(51,0.800000011920929);d=new Bg;d.ku=1;d.j_=Q(C,16);a.rG=d;d=new Bg;d.ku=1;d.j_=Q(C,16);a.vp=d;E4();a.oR=F8;a.nF=c;a.se=b;AOt(a);},
AT3=(a,b)=>{let c=new LO();Qh(c,a,b);return c;},
AOt=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;GW=AKd();Gd();Dv(Fb,A(91),A(68));b=U(GW.userAgent);Gd();Dv(Fb,A(92),b);if(GW.windows?1:0){Gd();Dv(Fb,A(93),A(94));}else if(GW.macOS?1:0){Gd();Dv(Fb,A(93),A(95));}else if(!(GW.linux?1:0)){Gd();Dv(Fb,A(93),A(96));}else{Gd();Dv(Fb,A(93),A(10));}c=new O7;d=a.nF.vx;c.xs=0;c.x1=0;c.mP=1;c.mP=d;Gq=c;E4();b=U(F8.np.location.href);a.o9=b;if(C9(b,A(97))){c=M3(a.o9,A(98),A(68));a.o9=c;a.o9=M3(c,A(99),A(68));}e=HK(a.o9,63,0);if(e>=0)a.o9=Ch(a.o9,0,e);c=a.nF;Gp=c.xW;b=AMZ(c);a.o7=b;c
=AKc(a.o9,b.lm,a);a.r5=c;d=a.nF.xS;f=Gq;g=c.sp;h=new K;h.j3=G(16);i=h.j2;if(g===null)g=A(2);BY(h,i,g);BY(h,h.j2,A(100));g=new I;j=h.j3;k=j.data;l=h.j2;m=k.length;if(l>=0&&l<=(m-0|0)){g.j4=L(j.data,0,l);h=new K;h.j3=G(16);D(h,h.j2,g);D(h,h.j2,A(101));g=new I;j=h.j3;k=j.data;l=h.j2;m=k.length;if(l>=0&&l<=(m-0|0)){g.j4=L(j.data,0,l);h=new QR;h.qZ=c;h.vS=A(101);h.vR=d;if(f.mP){if(BW===null){c=new CO;b=new Ck;Bt(b);b.lL=BI(32);ET(c);c.l6=b;b=new K;E0(b);c.lQ=b;c.lP=G(32);c.lR=0;c.lS=Cg;BW=c;}c=new K;c.j3=G(16);BY(c,
c.j2,A(102));BY(c,c.j2,g);b=new I;j=c.j3;k=j.data;i=c.j2;l=k.length;if(i>=0&&i<=(l-0|0)){b.j4=L(j.data,0,i);BX(Bw(b));BX("\n");}else{c=new H;c.j5=1;c.j6=1;B(c);}}a:{f.lh=f.lh+1|0;c=new GZ;c.nK=f;c.pc=1;c.nG=g;c.nY=h;b=null;g=null;c.m0=new C;c.mZ=1;c.nC=g;c.nX=b;e=CR;CR=e+1|0;c.nW=V(e);b=new El;b.nD=c;EG(b);a.rr=Z0(a.o7.lm);c=new Uq;c.rO=a.r5;a.wp=c;c=new TI;b=new I0;d=JW(16);b.pf=0;k=Q(FI,d);j=k.data;b.mw=k;b.th=0.75;b.ql=j.length*0.75|0;c.zf=b;a.wW=c;a.yu=new Rk;c=new TD;c.zh=0;c.sy=1;b=new Mb;b.sj=c;c.yG=
b;c.uo=A(68);a.yx=c;if(a.nF.uK){g=a.r5;b=new Ov;b.yh=a;n=Gq;g=g.sp;h=new K;h.j3=G(16);B$(h,h.j2,g===null?A(2):Cl(g));B$(h,h.j2,Cl(A(100)));f=new I;j=h.j3;k=j.data;i=h.j2;l=k.length;if(i>=0&&i<=(l-0|0)){f.j4=L(j.data,0,i);g=new K;g.j3=G(16);BY(g,g.j2,f);BY(g,g.j2,A(103));c=new I;j=g.j3;k=j.data;i=g.j2;l=k.length;if(i>=0&&i<=(l-0|0)){c.j4=L(j.data,0,i);NS(n,1,c,b);break a;}c=new H;c.j5=1;c.j6=1;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}}Dc=a;c=a.o7;B3=c;b=c.qv;B9=b;Bq=b;EA=c.wX;K_=a.rr;HA=a.wp;ANb=a.wW;c=new QK;c.xm=
null;c.xm=AQW();a.zm=c;AIB=c;f=a.oR.np.document;b=new Kf;b.tj=a;f.addEventListener("visibilitychange",B5(b,"handleEvent"));c=a.oR;c.r9=a;requestAnimationFrame(B5(c,"onAnimationFrame"));c=a.nF;if(!c.r7&&!c.p2?1:0){c=a.oR;g=new Kg;g.rd=a;g=Du(g,"handleEvent");c.np.addEventListener("resize",B5(g,"handleEvent"));}return;}c=new H;c.j5=1;c.j6=1;B(c);}c=new H;c.j5=1;c.j6=1;B(c);},
AGs=a=>{let b,c,d,e,f,g,h,$$je;b=a.qR;a:{try{b:{Mz();switch(TZ.data[APu(b)]){case 1:c=AGI(Xa());if(!c){a.qR=Jd;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.r5.uf;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=En();Xh(FK(g,f),37);h=Et(g);d.setProperty("width",Bw(h));}}break b;case 2:break;default:break b;}if(a.se!==null){b=a.sl;if(b!==null){AJM(b);AKE(a.sl);}ADd(a.rr,null);RN(a.rr);QC(a.rG);a.sl
=a.se;a.se=null;a.qR=Kh;a.o7.s7=Ca;}YB(a,a.sl);}}catch($$e){$$je=Z($$e);if($$je instanceof Dr){h=$$je;break a;}else{throw $$e;}}b=a.oR;b.r9=a;requestAnimationFrame(B5(b,"onAnimationFrame"));return;}if(Dh===null){b=new FG;d=new Ck;d.lL=BI(32);Bt(b);b.l6=d;d=new K;DM(d,16);b.lQ=d;b.lP=G(32);b.lR=0;b.lS=Cg;Dh=b;}J4(h,Dh);B(h);},
YB=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;AB1(a.o7);c=B3.lm.width;d=B3.lm.height;e=0;if(a.qR===Kh){a.qR=Jd;f=new HY;HW();KV(f,1000,null);b.z2=f;f=AJW(b);b.Ac=f;b.u0=f;g=B3.lm.width;h=B3.lm.height;f=f.m3.mf;f.pY=0;f.pZ=0;f.qy=g;f.nf=h;i=g;j=f.r8;i=i*j;j=h*j;f.s5=i;f.tc=j;Nq(f,0);e=1;}if(!(c==a.tv&&d==a.u8&&!e)){a.tv=c;a.u8=d;B9.dD(0,0,c,d);f=b.u0;if(f!==null){f=f.m3.mf;f.pY=0;f.pZ=0;f.qy=c;f.nf=d;i=c;j=f.r8;i=i*j;j=d*j;f.s5=i;f.tc=j;Nq(f,0);}}f=a.vp;k=a.rG;l=k.j_;m=k.j8;n=f.j_;o=n.data;c=f.j8;d=c+
m|0;if(d<=o.length)k=n;else{p=8;if(p<=d)p=d;c=c*1.75|0;if(p>c)c=p;q=n.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BC;r.kj=q;s=r;q.classObject=s;}}s=r.kj.$meta.item;if(s===null)r=null;else{r=s.classObject;if(r===null){r=new BC;r.kj=s;k=r;s.classObject=k;}}if(r===null){b=new Df;R(b);B(b);}if(r===M(Bo)){b=new Bk;R(b);B(b);}if(c<0){b=new D1;R(b);B(b);}k=DY(r.kj,c);r=k.data;h=f.j8;g=r.length;if(h<g)g=h;Gr(n,0,k,0,g);f.j_=k;}Gr(l,0,k,f.j8,m);f.j8=d;f=a.rG;l=f.j_;e=0;m=f.j8;k=null;if(e>m)
{b=new Bk;b.j5=1;b.j6=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.j8=0;m=0;while(true){r=a.vp;e=r.j8;d=BU(m,e);if(d>=0){l=r.j_;m=0;f=null;if(m>e){b=new Bk;b.j5=1;b.j6=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}r.j8=0;f=a.o7;t=C6(f.s7,V(1));f.s7=t;if(ACz(t,V(60))){f=b.u0;if(f!==null)ART(f,B3.sG);}RN(a.rr);return;}if(d>=0){f=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,m,10);D(b,b.j2,A(19));e=r.j8;J(b,b.j2,e,10);k=new I;l=b.j3;n=l.data;m=b.j2;d=n.length;if(m>=0&&m<=(d-0|0)){k.j4=L(l.data,0,m);f.j5
=1;f.j6=1;f.j7=k;B(f);}b=new H;R(b);B(b);}f=r.j_.data[m];k=f.um.r$;q=k.j_.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BC;r.kj=q;s=r;q.classObject=s;}}u=r.kj.$meta.item;if(u===null)q=null;else{q=u.classObject;if(q===null){q=new BC;q.kj=u;r=q;u.classObject=r;}}e=k.j8;if(q===null){b=new Df;R(b);B(b);}if(q===M(Bo)){b=new Bk;R(b);B(b);}if(e<0)break;r=DY(q.kj,e);Gr(k.j_,0,r,0,k.j8);l=r;f.um.sX.vz.vT.dF(l);m=m+1|0;}b=new D1;R(b);B(b);};
let VK=F(0);
function My(){C.call(this);this.u0=null;}
let AJM=a=>{return;};
function P7(){let a=this;My.call(a);a.z2=null;a.Ac=null;}
let AKE=a=>{return;};
let AOe=F();
let Bh=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(104);d=1<<c;e=d-1|0;f=(((32-O2(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=Dl(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=NO((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new I;l.j4=L(g.data,0,h.length);return l;};
let H2=F(BG);
let NA=null,Kh=null,Jd=null,UT=null;
let AIG=()=>{let b,c,d;b=new H2;b.kk=A(105);b.ke=0;NA=b;c=new H2;c.kk=A(106);c.ke=1;Kh=c;d=new H2;d.kk=A(107);d.ke=2;Jd=d;UT=T(H2,[b,c,d]);};
let OA=F(0);
let Cs=F(0);
let RI=F(0);
function Jn(){let a=this;C.call(a);a.np=null;a.r9=null;}
let F8=null;
let E4=()=>{E4=BQ(Jn);AFa();};
let AFa=()=>{let b;b=new Jn;E4();b.np=window;F8=b;},
AL_=(a,b)=>{let c;b;c=a.r9;a.r9=null;AGs(c);};
let ALQ=F();
let Rb=F();
let Bv=null;
let Cw=()=>{Cw=BQ(Rb);AKN();};
let AKN=()=>{Bv=EQ(51,0.800000011920929);};
function FR(){Ev.call(this);this.oy=0.0;}
let Q_=null;
let AWA=()=>{Q_=M(CD);};
function GE(){let a=this;C.call(a);a.m7=null;a.nc=0;a.rU=0;}
let PU=(a,b)=>{let c,d,e,f,g;c=a.m7;d=c.data;e=a.nc;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=B_(f);g=d.data.length;if(e<g)g=e;Di(c,0,d,0,g);a.m7=d;}c=d.data;f=a.nc;a.nc=f+1|0;c[f]=b;},
UF=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m7;e=d.data;f=a.nc;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=B_(h);i=g.data.length;if(f<i)i=f;Di(d,0,g,0,i);a.m7=g;}e=g.data;j=a.nc;e[j]=b;e[j+1|0]=c;a.nc=j+2|0;};
let AGb=F();
let JH=b=>{return Math.sin(b);},
YO=b=>{return Math.cos(b);},
Cz=b=>{return Math.sqrt(b);},
K6=b=>{return Math.ceil(b);},
Gs=(b,c)=>{return Math.pow(b,c);},
N6=(b,c)=>{return Math.atan2(b,c);},
AN_=(b,c)=>{return Math.min(b,c);},
D3=b=>{return Math.abs(b);},
CM=b=>{return Math.sign(b);};
function DN(){let a=this;C.call(a);a.y_=null;a.zg=null;}
let Q0=a=>{let b;b=new Bg;b.ku=1;b.j_=Q(C,16);a.y_=b;b=new GE;b.rU=1;b.m7=B_(16);a.zg=b;},
AV8=()=>{let a=new DN();Q0(a);return a;};
function FL(){let a=this;C.call(a);a.mC=null;a.lV=0;a.pi=0;}
let LX=(a,b)=>{let c,d,e,f,g;c=a.mC;d=c.data;e=a.lV;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=X(f);g=d.data.length;if(e<g)g=e;Di(c,0,d,0,g);a.mC=d;}c=d.data;f=a.lV;a.lV=f+1|0;c[f]=b;},
ASN=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.lV;if(b>d){e=new H;f=new K;f.j3=G(16);D(f,f.j2,A(65));J(f,f.j2,b,10);D(f,f.j2,A(66));b=a.lV;J(f,f.j2,b,10);g=new I;h=f.j3;i=h.data;c=f.j2;d=i.length;if(c>=0&&c<=(d-0|0)){g.j4=L(h.data,0,c);e.j5=1;e.j6=1;e.j7=g;B(e);}e=new H;e.j5=1;e.j6=1;B(e);}i=a.mC;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=X(k);l=j.data.length;if(d<l)l=d;Di(i,0,j,0,l);a.mC=j;}if(!a.pi){h=j.data;h[a.lV]=h[b];}else Di(j,b,j,b+1|0,a.lV-b|0);h=j.data;a.lV=a.lV+1|0;h[b]=c;};
let Mf=F(0);
let KU=F();
let Fd=F(0);
function I0(){let a=this;KU.call(a);a.pf=0;a.mw=null;a.tf=0;a.th=0.0;a.ql=0;}
let JW=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
IL=(a,b,c,d)=>{let e,f;e=a.mw.data[c];while(e!==null){if(e.pu==d){f=e.m1;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.nd;}return e;},
I6=a=>{let b;b=a.mw.data[0];while(b!==null&&b.m1!==null){b=b.nd;}return b;},
GG=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.mw.data;e=d[0];while(e!==null&&e.m1!==null){e=e.nd;}if(e===null){a.tf=a.tf+1|0;f=null;e=new FI;b=null;e.m1=f;e.m2=b;e.pu=0;e.nd=d[0];d[0]=e;g=a.pf+1|0;a.pf=g;if(g>a.ql)Q4(a,d.length);}}else{f=b;if(!f.$id$){e=E1();f.$id$=e;}h=b.$id$;d=a.mw.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.pu==h){f=e.m1;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.nd;}if(e===null){a.tf=a.tf+1|0;e=new FI;f=null;e.m1=b;e.m2=f;e.pu=h;e.nd=d[j];d[j]=e;g=a.pf+1|0;a.pf=g;if(g>a.ql)Q4(a,
i);}}f=e.m2;e.m2=c;return f;},
Q4=(a,b)=>{let c,d,e,f,g,h,i,j;c=JW(!b?1:b<<1);d=Q(FI,c);e=d.data;f=0;c=c-1|0;while(true){g=a.mw.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.pu&c;j=h.nd;h.nd=e[i];e[i]=h;h=j;}f=f+1|0;}a.mw=d;a.ql=e.length*a.th|0;};
let Ib=F(0);
let NM=F();
let MN=F();
let Oq=null,Ll=null,BZ=null,B0=null,MK=null,TT=null,BL=null,BK=null,JE=null,JF=null;
let AAs=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new H;e.j5=1;e.j6=1;B(e);},
Cv=(b,c)=>{let d,e;d=b.wP.data;if(c<d.length)return c+d[c]|0;d=b.wC;e=APv(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
APv=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=BU(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
PZ=b=>{let c,d,e,f,g,h;if(Ll===null){if(JE===null)JE=AFX();Ll=ASm((JE.value!==null?U(JE.value):null));}c=Ll.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=BU(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
NO=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
E6=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bk;c.j5=1;c.j6=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AF9([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
CS=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(MK===null){if(JF===null)JF=ATo();MK=ATN((JF.value!==null?U(JF.value):null));}e=MK.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.uq)c=f+1|0;else{d=g.t1;if(b>=d)return g.t5.data[b-d|0];d=f-1|0;}}return 0;},
Ho=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CS(b)!=16?0:1;},
AUm=()=>{Oq=M(KG);TT=Q(MN,128);},
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
AFX=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
ATo=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let AKd=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AMn=F();
let BW=null,Dh=null,Fb=null;
let Gr=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jv(b)&&(e+f|0)<=Jv(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BC;h.kj=g;i=h;g.classObject=i;}}j=Ei(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BC;h.kj=g;i=h;g.classObject=i;}}i=Ei(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.kj.$meta.primitive?1:0)&&!(i.kj.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.kj;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MA(g.constructor,p)?1:0)){I2(b,c,d,e,l);b=new JP;b.j5=1;b.j6=1;B(b);}l=l+1|0;m=o;}I2(b,c,d,e,f);return;}if(!(j.kj.$meta.primitive?1:0))break a;if(i.kj.$meta.primitive?1:0)break b;else break a;}b=new JP;b.j5=1;b.j6=1;B(b);}}I2(b,c,d,e,f);return;}b=new JP;b.j5=1;b.j6=1;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}d=new Df;d.j5=1;d.j6=1;d.j7=A(108);B(d);},
Di=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jv(b)&&(e+f|0)<=Jv(d)){I2(b,c,d,e,f);return;}b=new H;b.j5=1;b.j6=1;B(b);},
I2=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
Em=()=>{return D6((new Date()).getTime());},
Gd=()=>{let b,c;if(Fb===null){b=new MV;KO(b,11);Dv(b,A(109),A(110));Dv(b,A(93),A(111));Dv(b,A(112),A(113));Dv(b,A(114),A(115));Dv(b,A(116),A(117));Dv(b,A(118),A(119));Dv(b,A(120),A(110));Dv(b,A(121),A(113));c=new MV;KO(c,11);c.zI=b;Fb=c;}};
let N0=F(0);
function O7(){let a=this;C.call(a);a.lh=0;a.xs=0;a.x1=0;a.mP=0;}
let AGI=a=>{return a.lh;},
ABi=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{Ng();switch(UB.data[d.ke]){case 1:if(a.mP){if(BW===null){d=new CO;e=new Ck;e.lL=BI(32);Bt(d);d.l6=e;e=new K;DM(e,16);d.lQ=e;d.lP=G(32);d.lR=0;d.lS=Cg;BW=d;}d=new K;d.j3=G(16);D(d,d.j2,A(102));D(d,d.j2,c===null?A(2):c);e=new I;g=d.j3;h=g.data;i=d.j2;j=h.length;if(i>=0&&i<=(j-0|0)){e.j4=L(g.data,0,i);BX(Bw(e));BX("\n");}else{c=new H;R(c);B(c);}}a.lh=a.lh+1|0;d=new GZ;d.nK=a;d.pc=b;d.nG=c;d.nY=f;c=null;e=null;d.m0=new C;d.mZ=1;d.nC=e;d.nX=c;k=CR;CR=k+1|0;d.nW=V(k);c=new El;c.nD
=d;EG(c);break a;case 2:d=null;l=new OC;l.r3=a;l.q7=f;l.wf=d;l.xV=e;if(a.mP){if(BW===null){d=new CO;e=new Ck;ET(e);e.lL=BI(32);F1(d,e);d.lQ=En();d.lP=G(32);d.lR=0;d.lS=Cg;BW=d;}d=new K;d.j3=G(16);B$(d,d.j2,Cl(A(102)));B$(d,d.j2,c===null?A(2):Cl(c));e=new I;g=d.j3;h=g.data;i=d.j2;j=h.length;if(i>=0&&i<=(j-0|0)){e.j4=L(g.data,0,i);BX(Bw(e));BX("\n");}else{c=new H;Im(c);B(c);}}a.lh=a.lh+1|0;d=new F0;d.nq=a;d.op=b;d.nm=c;d.nJ=l;c=null;e=null;d.m0=new C;d.mZ=1;d.nC=e;d.nX=c;k=CR;CR=k+1|0;d.nW=V(k);c=new El;c.nD=
d;EG(c);break a;case 3:if(a.mP){if(BW===null){d=new CO;e=new Ck;e.lL=BI(32);Bt(d);d.l6=e;e=new K;DM(e,16);d.lQ=e;d.lP=G(32);d.lR=0;d.lS=Cg;BW=d;}d=new K;d.j3=G(16);D(d,d.j2,A(102));D(d,d.j2,c===null?A(2):c);e=new I;g=d.j3;h=g.data;i=d.j2;j=h.length;if(i>=0&&i<=(j-0|0)){e.j4=L(g.data,0,i);BX(Bw(e));BX("\n");}else{c=new H;R(c);B(c);}}a.lh=a.lh+1|0;d=new F0;d.nq=a;d.op=b;d.nm=c;d.nJ=f;c=null;e=null;d.m0=new C;d.mZ=1;d.nC=e;d.nX=c;k=CR;CR=k+1|0;d.nW=V(k);c=new El;c.nD=d;EG(c);break a;case 4:e=new OB;e.zX=a;e.sH
=f;if(a.mP){if(BW===null){d=new CO;f=new Ck;Bt(f);f.lL=BI(32);ET(d);d.l6=f;f=new K;E0(f);d.lQ=f;d.lP=G(32);d.lR=0;d.lS=Cg;BW=d;}d=new K;d.j3=G(16);BY(d,d.j2,A(102));BY(d,d.j2,c===null?A(2):c);f=new I;g=d.j3;h=g.data;i=d.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);BX(Bw(f));BX("\n");}else{c=new H;GC(c);B(c);}}a.lh=a.lh+1|0;d=new F0;d.nq=a;d.op=b;d.nm=c;d.nJ=e;c=null;e=null;d.m0=new C;d.mZ=1;d.nC=e;d.nX=c;k=CR;CR=k+1|0;d.nW=V(k);c=new El;c.nD=d;EG(c);break a;case 5:break;default:c=new S;e=new K;e.j3
=G(16);D(e,e.j2,A(122));D(e,e.j2,d.kk);d=new I;g=e.j3;h=g.data;k=e.j2;i=h.length;if(k>=0&&k<=(i-0|0)){d.j4=L(g.data,0,k);c.j5=1;c.j6=1;c.j7=d;B(c);}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);}c=null;GY(f.ry,f.rK,f.ro,c);c=f.ng.m$;c.qD=1;c.ns=0;}},
NS=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.mP){if(BW===null){e=new CO;f=new Ck;f.lL=BI(32);e.l6=f;f=new K;Bt(f);f.j3=G(16);e.lQ=f;e.lP=G(32);e.lR=0;e.lS=Cg;BW=e;}e=new K;e.j3=G(16);D(e,e.j2,A(123));D(e,e.j2,c===null?A(2):c);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);BX(Bw(f));BX("\n");}else{c=new H;c.j5=1;c.j6=1;B(c);}}a.lh=a.lh+1|0;f=new XMLHttpRequest();e=new Ki;e.qM=a;e.pp=f;e.uc=b;e.sz=c;e.uT=d;e=B5(e,"handleEvent");f.onreadystatechange=e;e=new G0;e.u4=a;e.sa=d;d=B5(e,"handleEvent");f.onprogress
=d;f.open("GET",Bw(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let ABQ=F();
let Gq=null;
let Xa=()=>{return Gq;};
let AEM=F();
let Da=0,Gp=0;
let AVE=()=>{Da=1;};
let Ty=F(0);
function KD(){let a=this;C.call(a);a.p3=null;a.lm=null;a.xC=null;a.qv=null;a.wX=null;a.yJ=null;a.x5=0.0;a.tm=Ca;a.s7=Ca;a.sG=0.0;a.s2=0.0;a.vi=0;}
let Ny=0,FN=null;
let ED=()=>{ED=BQ(KD);Zw();};
let AIJ=(a,b)=>{let c,d,e,f,g,h,i,j,k;ED();a.x5=0.0;a.tm=Em();a.s7=V(-1);a.sG=0.0;a.s2=0.0;a.xC=b;E4();c=window.document;d=b.x4;a.lm=c.getElementById(Bw(d));e=ACO();d=!!b.xp;e.alpha=d;d=!!b.v6;e.antialias=d;d=!!b.wr;e.stencil=d;d=!!b.wR;e.premultipliedAlpha=d;d=!!b.w1;e.preserveDrawingBuffer=d;f=a.lm;if(b.vj)a.p3=f.getContext("webgl2",e);a:{if(b.vj){d=a.p3;if(d!==null){if(!b.u7)f=ARj(d);else{f=new O8;N9(f,d);}a.wX=f;a.qv=f;break a;}}f=f.getContext("webgl",e);a.p3=f;if(!b.u7)d=AQf(f);else{d=new VH;Mv(d,f);}a.qv
=d;}d=a.qv.dV(7938);c=a.qv.dV(7936);g=a.qv.dV(7937);a.yJ=AMj(Hl,d,c,g);h=b.r7;if(!(h<0&&b.p2<0)){if(h&&b.p2?1:0)Kc(a,h,b.p2);else{i=F8;h=i.np.document.documentElement.clientWidth-b.tR|0;j=i.np.document.documentElement.clientHeight-b.vn|0;k=!b.sN?1.0:devicePixelRatio||1;Kc(a,k*h|0,k*j|0);}}b=a.lm;d=new MH;d.ym=a;X7(b,B5(d,"fullscreenChanged"));},
AMZ=a=>{let b=new KD();AIJ(b,a);return b;},
AB1=a=>{let b,c,d;b=Em();c=AVQ(AGm(b,a.tm))/1000.0;a.sG=c;a.tm=b;c=a.s2+c;a.s2=c;d=a.vi+1|0;a.vi=d;if(c>1.0){a.x5=d;a.s2=0.0;a.vi=0;}},
Kc=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.lm;e=b;d.width=e;d=a.lm;e=c;d.height=e;if(a.xC.sN){f=devicePixelRatio||1;e=a.lm.style;g=b/f;Iy();h=new K;h.j3=G(16);Qk(h,h.j2,g);D(h,h.j2,A(124));i=new I;j=h.j3;k=j.data;l=h.j2;b=k.length;if(l>=0&&l<=(b-0|0)){i.j4=L(j.data,0,l);e.setProperty("width",Bw(i));f=c/f;i=new K;i.j3=G(16);Qk(i,i.j2,f);D(i,i.j2,A(124));h=new I;j=i.j3;k=j.data;c=i.j2;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.j4=L(j.data,0,c);e.setProperty("height",Bw(h));}else{d=new H;d.j5=1;d.j6=1;B(d);}}return;}d
=new H;d.j5=1;d.j6=1;B(d);},
Zw=()=>{Ny=0;FN=Dg(51,0.800000011920929);},
X7=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function Ou(){let a=this;C.call(a);a.uF=null;a.sD=null;a.uv=null;a.uN=null;a.uQ=null;a.wh=null;a.sh=null;a.uf=0;a.sp=null;}
let AHC=(a,b,c,d)=>{let e;a.uF=EQ(51,0.800000011920929);a.sD=EQ(51,0.800000011920929);a.uv=EQ(51,0.800000011920929);a.uN=EQ(51,0.800000011920929);a.uQ=EQ(51,0.800000011920929);a.wh=EQ(51,0.800000011920929);e=new Bg;e.ku=1;e.j_=Q(C,16);a.sh=e;a.uf=(-1);a.sp=b;AOP(a,c,d);},
AKc=(a,b,c)=>{let d=new Ou();AHC(d,a,b,c);return d;},
AOP=(a,b,c)=>{let d,e,f;d=c.nF;if(d.vT!==null){e=b.ownerDocument;f=new Lr;f.zw=a;e.addEventListener("dragenter",B5(f,"handleEvent"),!!0);f=new Ls;f.z9=a;e.addEventListener("dragover",B5(f,"handleEvent"),!!0);f=new Lq;f.vW=a;f.vI=c;f.vz=d;e.addEventListener("drop",B5(f,"handleEvent"));}},
AF6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AGk(a,b.t9)){b.ss=b.xI;b.qD=1;b.qd=0;b.ns=0;return 0;}if(b.ns)return 0;b.qd=0;b.qD=0;b.ns=1;c=b.t9;d=b.v3;e=b.vU;f=new QS;f.Aj=a;f.m$=b;b=Gq;g=a.sp;h=new K;h.j3=G(16);i=h.j2;if(g===null)g=A(2);BY(h,i,g);BY(h,h.j2,A(100));g=new I;j=h.j3;k=j.data;l=h.j2;m=k.length;if(l>=0&&l<=(m-0|0)){g.j4=L(j.data,0,l);h=new K;h.j3=G(16);D(h,h.j2,g);D(h,h.j2,c===null?A(2):c);g=new I;k=h.j3;j=k.data;m=h.j2;i=j.length;if(m>=0&&m<=(i-0|0)){g.j4=L(k.data,0,m);h=new QQ;h.ry=a;h.ng=f;h.rK=d;h.ro
=c;ABi(b,1,g,d,e,h);return 1;}b=new H;R(b);B(b);}b=new H;GC(b);B(b);},
GY=(a,b,c,d)=>{a:{Nw();switch(OV.data[b.ke]){case 1:break;case 2:Ce(a.sD,c,d);break a;case 3:Ce(a.uQ,c,d);break a;case 4:Ce(a.uv,c,d);break a;case 5:Ce(a.uF,c,null);break a;default:break a;}Ce(a.uN,c,d);}},
AGk=(a,b)=>{let c;c=BE(a.uN,b)<0?0:1;return !c&&!(BE(a.sD,b)<0?0:1)&&!(BE(a.uQ,b)<0?0:1)&&!(BE(a.uv,b)<0?0:1)&&!(BE(a.uF,b)<0?0:1)?0:1;};
let DH=F();
let AJy=(a,b)=>{return;};
let Th=F(0);
let Es=F(0);
function Mh(){let a=this;C.call(a);a.lA=null;a.q5=0;a.qj=null;a.ob=null;a.l_=null;a.l$=null;a.nA=null;a.nB=null;a.sU=null;a.re=0;a.tA=null;a.sS=0;a.ui=null;a.vd=null;a.ug=null;a.mD=null;a.o4=Ca;a.qG=0;}
let ASM=b=>{let c,d,e,f;c=GW;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(D3(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AMr=(a,b)=>{a.q5=0;a.qj=Dg(20,0.800000011920929);a.ob=J7(20);a.l_=X(20);a.l$=X(20);a.nA=X(20);a.nB=X(20);a.sU=O0(51,0.800000011920929);a.re=0;a.tA=J7(256);a.sS=0;a.ui=J7(256);a.vd=J7(5);a.ug=O0(51,0.800000011920929);a.qG=1;a.lA=b;AJI(a);},
Z0=a=>{let b=new Mh();AMr(b,a);return b;},
AJI=a=>{let b;b=a.lA.ownerDocument;b.addEventListener("mousedown",B5(a,"handleEvent"),!!0);b.addEventListener("mouseup",B5(a,"handleEvent"),!!0);b.addEventListener("mousemove",B5(a,"handleEvent"),!!0);b.addEventListener("wheel",B5(a,"handleEvent"),!!0);b.addEventListener("keydown",B5(a,"handleEvent"),!!0);b.addEventListener("keyup",B5(a,"handleEvent"),!!0);b.addEventListener("keypress",B5(a,"handleEvent"),!!0);a.lA.addEventListener("touchstart",B5(a,"handleEvent"),!!1);a.lA.addEventListener("touchmove",B5(a,
"handleEvent"),!!1);a.lA.addEventListener("touchcancel",B5(a,"handleEvent"),!!1);a.lA.addEventListener("touchend",B5(a,"handleEvent"),!!1);},
AKf=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=U(b.type);if(c!==A(125)){if(A(125) instanceof I){d=A(125);e=c.j4!==d.j4?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(126))e=1;else if(A(126) instanceof I){d=A(126);e=c.j4!==d.j4?0:1;}else e=0;if(!e){if(c===A(127))e=1;else if(!(A(127) instanceof I))e=0;else{d=A(127);e=c.j4!==d.j4?0:1;}if(e){if(!(No(a.lA)?1:0)){f=HD(a,b,a.lA);g=HV(a,b,a.lA);h=a.l_.data;i=f-h[0]|0;j=a.l$.data;e=g-j[0]|0;a.nA.data[0]=i;a.nB.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.nA.data[0]=k;a.nB.data[0]=f;h=a.l_.data;h[0]=h[0]+b.movementX|0;h=a.l$.data;h[0]=h[0]+b.movementY|0;}a.o4=D6(performance.now()*1000000.0);d=a.mD;if(d!==null){if(!a.ob.data[0])AD5(d,a.l_.data[0],a.l$.data[0]);else TH(d,a.l_.data[0],a.l$.data[0],0);}}else{if(c===A(128))e=1;else if(!(A(128) instanceof I))e=0;else{d=A(128);e=c.j4!==d.j4?0:1;}if(e){if(a.mD!==null){l=ASM(b);ANO(a.mD,0.0,l|0);}a.o4=D6(performance.now()*1000000.0);}else{if(c===A(129))e=1;else if(!(A(129) instanceof I))e=0;else{d=A(129);e=c.j4!==
d.j4?0:1;}if(e){a.q5=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.qj;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.qj;if(o>=(-128)&&o<=127){EX();q=Ef.data[o+128|0];}else{q=new Fu;q.nu=o;}if(!AST(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){EX();p=Ef.data[o+128|0];}else{p=new Fu;p.nu=o;}Cc(n,k,p);a.ob.data[o]=1;h=a.l_;q=a.lA;l=q.width*1.0/q.clientWidth;k=(d.clientX-(F3(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=U(p.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f
=0;else{q=A(130);f=n.j4!==q.j4?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+CM(l)*0.5|0;h=a.l$;q=a.lA;l=q.height*1.0/q.clientHeight;k=(d.clientY-(Gz(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=U(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.j4!==p.j4?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+CM(l)*0.5|0;a.nA.data[o]=0;a.nB.data[o]=0;d=a.mD;if(d!==null)N7(d,a.l_.data[o],a.l$.data[o],o,0);e=e+1|0;}a.o4=D6(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.ob.data[0])return;d=a.sU;e=b.button;AQS(d,!e?0:e==2?1:e!=1?0:2);h=a.ob;h.data[0]=a.sU.nv<=0?0:1;if(!(No(a.lA)?1:0)){k=HD(a,b,a.lA)-a.l_.data[0]|0;f=HV(a,b,a.lA)-a.l$.data[0]|0;a.nA.data[0]=k;a.nB.data[0]=f;a.l_.data[0]=HD(a,b,a.lA);a.l$.data[0]=HV(a,b,a.lA);}else{k=b.movementX|0;f=b.movementY|0;a.nA.data[0]=k;a.nB.data[0]=f;h=a.l_.data;h[0]=h[0]+b.movementX|0;h=a.l$.data;h[0]=h[0]+b.movementY|0;}a.o4=D6(performance.now()*1000000.0);a.ob.data[0]=0;d=a.mD;if(d!==null)
{e=a.l_.data[0];k=a.l$.data[0];g=b.button;L9(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.lA;if(n!==p?0:1){h=a.ob.data;if(!h[0]){a.qG=1;a.q5=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;AB2(a.sU,r);a.vd.data[r]=1;a.nA.data[0]=0;a.nB.data[0]=0;if(!(No(a.lA)?1:0)){f=HD(a,b,a.lA);g=HV(a,b,a.lA);a.l_.data[0]=f;a.l$.data[0]=g;}else{h=a.l_.data;h[0]=h[0]+b.movementX|0;h=a.l$.data;h[0]=h[0]+b.movementY|0;}a.o4=D6(performance.now()*1000000.0);d=a.mD;if(d!==null){e=a.l_.data[0];k=a.l$.data[0];g=
b.button;N7(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=HD(a,b,p);t=HV(a,b,a.lA);if(!(s>=0.0&&s<=B3.lm.width&&t>=0.0&&t<=B3.lm.height))a.qG=0;return;}}if(c===A(131))e=1;else if(!(A(131) instanceof I))e=0;else{d=A(131);e=c.j4!==d.j4?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qj;if(!k)d=!d.kD?null:d.kA;else{h=d.ky;f=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d.kF));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}u=d.nu;d=a.lA;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.j4!==p.j4?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+CM(l)*0.5|0)-a.l_.data[u]|0;d=a.lA;l=d.height*1.0/d.clientHeight;f=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))g=1;else if(!(A(130) instanceof I))g=0;else
{p=A(130);g=n.j4!==p.j4?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+CM(l)*0.5|0)-a.l$.data[u]|0;a.nA.data[u]=k;a.nB.data[u]=f;h=a.l_;d=a.lA;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.j4!==p.j4?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+CM(l)*0.5|0;h=a.l$;d=a.lA;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=U(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.j4!==p.j4?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+CM(l)*0.5|0;d=a.mD;if(d!==null)TH(d,a.l_.data[u],a.l$.data[u],u);e=e+1|0;}a.o4=D6(performance.now()*1000000.0);b.preventDefault();}if(c===A(132))e=1;else if(!(A(132) instanceof I))e=0;else{d=A(132);e=c.j4!==d.j4?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.qj;if(!v)p=!d.kD?null
:d.kA;else{h=d.ky;k=Bl(Be(Ba(V(v),E(2135587861, 2654435769)),d.kF));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.kC;}}p=k<0?null:d.kz.data[k];}u=p.nu;GM(d,v);a.ob.data[u]=0;d=a.lA;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=U(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.j4!==p.j4?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CM(l)*0.5|0;d=a.lA;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=U(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.j4!==p.j4?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CM(l)*0.5|0;h=a.l_.data;k=o-h[u]|0;j=a.l$.data;f=g-j[u]|0;a.nA.data[u]=k;a.nB.data[u]=f;h[u]=o;j[u]=g;d=a.mD;if(d!==null)L9(d,h[u],j[u],u,0);e=e+1|0;}a.o4=D6(performance.now()*1000000.0);b.preventDefault();}if(c===A(133))e=1;else if(!(A(133) instanceof I))e=0;else{d=A(133);e=c.j4!==d.j4?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qj;if(!k)c=!d.kD?null:d.kA;else{h=d.ky;f=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d.kF));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.kC;}}c=f<0?null:d.kz.data[f];}u=c.nu;GM(d,k);a.ob.data[u]=0;d=a.lA;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F3(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=U(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.j4!==c.j4
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CM(l)*0.5|0;d=a.lA;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gz(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=U(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.j4!==c.j4?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CM(l)*0.5|0;h=a.l_.data;k=o-h[u]|0;j=a.l$.data;f=g-j[u]|0;a.nA.data[u]=k;a.nB.data[u]=f;h[u]=o;j[u]=g;d=a.mD;if(d!==null)L9(d,h[u],j[u],u,0);e=e+1|0;}a.o4=D6(performance.now()*1000000.0);b.preventDefault();}},
XB=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=U(b.type);if(c!==A(134)){if(A(134) instanceof I){d=A(134);e=c.j4!==d.j4?0:1;}else e=0;}else e=1;if(e&&a.qG){a:{f=Sh(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}d=a.ug;if(!f)e=d.qz;else{h=d.oP;e=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),d.p$));b:{while(true){i=h.data[e];if(!i){e= -(e+1|0)|0;break b;}if(i==f)break;e=(e+1|0)&d.oH;}}e=e<0?0:1;}if(e)b.preventDefault();if(f!=67&&f!=112){h=a.tA.data;if(!h[f]){a.re=a.re+1|0;h[f]=1;a.sS=1;a.ui.data[f]
=1;d=a.mD;if(d!==null){j=d.nE;if(j===null)j=d.lw;Cw();k=Bv;g=BE(k,M(Y));l=g<0?null:k.kP.data[g];if(l===null){l=new CB;k=new Bg;k.ku=0;k.j_=Q(C,4);l.kn=k;l.kV=100;c:{try{k=CL(M(Y),null);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CJ(M(Y),null);CN(k,1);break c;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}k=null;}l.kG=k;if(k===null){b=new Bz;d=new K;Bt(d);d.j3=G(16);BY(d,d.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);c=M(Y).kc;BY(d,d.j2,c);c=new I;h
=d.j3;m=h.data;f=d.j2;Bt(c);FW(0,f,m.length);c.j4=L(h.data,0,f);b.j5=1;b.j6=1;Bi(b);b.j7=c;B(b);}Ce(Bv,M(Y),l);}c=l.kn;e=c.j8;if(e){if(!e){b=new BN;b.j5=1;b.j6=1;Bi(b);b.j7=A(22);B(b);}e=e-1|0;c.j8=e;h=c.j_.data;c=h[e];h[e]=null;}else d:{try{c=CZ(l.kG,null);break d;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));l=l.kG.lI.lH;if(l.kc===null)l.kc=U(l.kj.$meta.name);j=l.kc;D(b,b.j2,j);j=new I;h=b.j3;m=h.data;f=b.j2;g=m.length;if(f>=0&&f<=(g-0|0))
{j.j4=L(h.data,0,f);c.j5=1;c.j6=1;Bi(c);c.j7=j;c.lq=d;B(c);}B(Fo());}k=c;k.mu=It;k.kM=d;k.uW=f;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kj=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kP.data[e];if(d!==null){c=d.kn;if(c.j8<d.kV){Bf(c,k);e=d.kS;g=d.kn.j8;if(e>g)g=e;d.kS=g;if(BB(k,BA)){d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}else if(BB(k,BA)){d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9
=0;d.ls=null;d.ll=(-1);}}}}}else{b.preventDefault();d=a.mD;if(d!==null){j=d.nE;if(j===null)j=d.lw;Cw();k=Bv;i=BE(k,M(Y));l=i<0?null:k.kP.data[i];if(l===null){l=new CB;k=new Bg;k.ku=0;k.j_=Q(C,4);l.kn=k;l.kV=100;e:{try{k=CL(M(Y),null);break e;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CJ(M(Y),null);CN(k,1);break e;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}k=null;}l.kG=k;if(k===null){b=new Bz;d=new K;Bt(d);d.j3=G(16);BY(d,d.j2,A(21));if(M(Y).kc===null)M(Y).kc
=U(M(Y).kj.$meta.name);c=M(Y).kc;BY(d,d.j2,c);c=new I;h=d.j3;m=h.data;f=d.j2;Bt(c);FW(0,f,m.length);c.j4=L(h.data,0,f);b.j5=1;b.j6=1;Bi(b);b.j7=c;B(b);}Ce(Bv,M(Y),l);}c=l.kn;e=c.j8;if(e){if(!e){b=new BN;b.j5=1;b.j6=1;Bi(b);b.j7=A(22);B(b);}e=e-1|0;c.j8=e;h=c.j_.data;c=h[e];h[e]=null;}else f:{try{c=CZ(l.kG,null);break f;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));l=l.kG.lI.lH;if(l.kc===null)l.kc=U(l.kj.$meta.name);j=l.kc;D(b,b.j2,j);j=new I;h
=b.j3;m=h.data;f=b.j2;g=m.length;if(f>=0&&f<=(g-0|0)){j.j4=L(h.data,0,f);c.j5=1;c.j6=1;Bi(c);c.j7=j;c.lq=d;B(c);}B(Fo());}k=c;k.mu=It;k.kM=d;k.uW=f;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kj=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kP.data[e];if(d!==null){c=d.kn;if(c.j8<d.kV){Bf(c,k);e=d.kS;i=d.kn.j8;if(e>i)i=e;d.kS=i;if(BB(k,BA)){d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}else if(BB(k,BA)){d=k;d.kM=null;d.la
=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}d=a.mD;j=d.nE;if(j===null)j=d.lw;k=Bv;i=BE(k,M(Y));l=i<0?null:k.kP.data[i];if(l===null){l=new CB;k=new Bg;k.ku=0;k.j_=Q(C,4);l.kn=k;l.kV=100;g:{try{k=CL(M(Y),null);break g;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CJ(M(Y),null);CN(k,1);break g;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}k=null;}l.kG=k;if(k===null){b=new Bz;d=new K;Bt(d);d.j3=G(16);BY(d,d.j2,A(21));if(M(Y).kc===null)M(Y).kc
=U(M(Y).kj.$meta.name);c=M(Y).kc;BY(d,d.j2,c);c=new I;h=d.j3;m=h.data;f=d.j2;Bt(c);FW(0,f,m.length);c.j4=L(h.data,0,f);b.j5=1;b.j6=1;Bi(b);b.j7=c;B(b);}Ce(Bv,M(Y),l);}c=l.kn;e=c.j8;if(e){if(!e){b=new BN;b.j5=1;b.j6=1;Bi(b);b.j7=A(22);B(b);}e=e-1|0;c.j8=e;h=c.j_.data;c=h[e];h[e]=null;}else h:{try{c=CZ(l.kG,null);break h;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));l=l.kG.lI.lH;if(l.kc===null)l.kc=U(l.kj.$meta.name);j=l.kc;D(b,b.j2,j);j=new I;h
=b.j3;m=h.data;f=b.j2;g=m.length;if(f>=0&&f<=(g-0|0)){j.j4=L(h.data,0,f);c.j5=1;c.j6=1;Bi(c);c.j7=j;c.lq=d;B(c);}B(Fo());}k=c;k.mu=JI;k.kM=d;k.xF=g;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kj=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kP.data[e];if(d!==null){c=d.kn;if(c.j8<d.kV){Bf(c,k);e=d.kS;g=d.kn.j8;if(e>g)g=e;d.kS=g;if(BB(k,BA)){d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}else if(BB(k,BA)){d=k;d.kM=null;d.la
=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(135))e=1;else if(!(A(135) instanceof I))e=0;else{d=A(135);e=c.j4!==d.j4?0:1;}if(e&&a.qG){e=b.charCode&65535;d=a.mD;if(d!==null){j=d.nE;if(j===null)j=d.lw;Cw();k=Bv;f=BE(k,M(Y));k=f<0?null:k.kP.data[f];if(k===null){k=new CB;l=new Bg;l.ku=0;l.j_=Q(C,4);k.kn=l;k.kV=100;i:{try{l=CL(M(Y),null);break i;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{l=CJ(M(Y),
null);CN(l,1);break i;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}l=null;}k.kG=l;if(l===null){b=new Bz;d=new K;Bt(d);d.j3=G(16);BY(d,d.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);c=M(Y).kc;BY(d,d.j2,c);c=new I;h=d.j3;m=h.data;f=d.j2;Bt(c);FW(0,f,m.length);c.j4=L(h.data,0,f);b.j5=1;b.j6=1;Bi(b);b.j7=c;B(b);}Ce(Bv,M(Y),k);}c=k.kn;f=c.j8;if(f){if(!f){b=new BN;b.j5=1;b.j6=1;Bi(b);b.j7=A(22);B(b);}f=f-1|0;c.j8=f;h=c.j_.data;c=h[f];h[f]=null;}else j:{try{c=CZ(k.kG,null);break j;}
catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));l=k.kG.lI.lH;if(l.kc===null)l.kc=U(l.kj.$meta.name);j=l.kc;D(b,b.j2,j);j=new I;h=b.j3;m=h.data;f=b.j2;g=m.length;if(f>=0&&f<=(g-0|0)){j.j4=L(h.data,0,f);c.j5=1;c.j6=1;Bi(c);c.j7=j;c.lq=d;B(c);}B(Fo());}k=c;k.mu=JI;k.kM=d;k.xF=e;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kj=j;l=c;j.classObject=l;}}f=BE(d,c);d=f<0?null:d.kP.data[f];if(d!==null){c=d.kn;if
(c.j8<d.kV){Bf(c,k);f=d.kS;g=d.kn.j8;if(f>g)g=f;d.kS=g;if(BB(k,BA)){d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}else if(BB(k,BA)){d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}}if(e==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(136))e=1;else if(!(A(136) instanceof I))e=0;else{d=A(136);e=c.j4!==d.j4?0:1;}if(e&&a.qG){f=Sh(b.keyCode);d=a.ug;if(!f)e=d.qz;else{h=d.oP;e=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),
d.p$));k:{while(true){g=h.data[e];if(!g){e= -(e+1|0)|0;break k;}if(g==f)break;e=(e+1|0)&d.oH;}}e=e<0?0:1;}if(e)b.preventDefault();h=a.tA.data;if(h[f]){a.re=a.re-1|0;h[f]=0;}d=a.mD;if(d!==null){j=d.nE;if(j===null)j=d.lw;Cw();k=Bv;g=BE(k,M(Y));l=g<0?null:k.kP.data[g];if(l===null){l=new CB;k=new Bg;k.ku=0;k.j_=Q(C,4);l.kn=k;l.kV=100;l:{try{k=CL(M(Y),null);break l;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{k=CJ(M(Y),null);CN(k,1);break l;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}
else{throw $$e;}}k=null;}l.kG=k;if(k===null){b=new Bz;d=new K;Bt(d);d.j3=G(16);BY(d,d.j2,A(21));if(M(Y).kc===null)M(Y).kc=U(M(Y).kj.$meta.name);c=M(Y).kc;BY(d,d.j2,c);c=new I;h=d.j3;m=h.data;f=d.j2;Bt(c);FW(0,f,m.length);c.j4=L(h.data,0,f);b.j5=1;b.j6=1;Bi(b);b.j7=c;B(b);}Ce(Bv,M(Y),l);}c=l.kn;e=c.j8;if(e){if(!e){b=new BN;b.j5=1;b.j6=1;Bi(b);b.j7=A(22);B(b);}e=e-1|0;c.j8=e;h=c.j_.data;c=h[e];h[e]=null;}else m:{try{c=CZ(l.kG,null);break m;}catch($$e){$$je=Z($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}c
=new S;b=new K;b.j3=G(16);D(b,b.j2,A(23));l=l.kG.lI.lH;if(l.kc===null)l.kc=U(l.kj.$meta.name);j=l.kc;D(b,b.j2,j);j=new I;h=b.j3;m=h.data;f=b.j2;g=m.length;if(f>=0&&f<=(g-0|0)){j.j4=L(h.data,0,f);c.j5=1;c.j6=1;Bi(c);c.j7=j;c.lq=d;B(c);}B(Fo());}k=c;k.mu=Ma;k.kM=d;k.uW=f;D0(j,k);d=Bv;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BC;c.kj=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kP.data[e];if(d!==null){c=d.kn;if(c.j8<d.kV){Bf(c,k);e=d.kS;g=d.kn.j8;if(e>g)g=e;d.kS=g;if(BB(k,BA))
{d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}else if(BB(k,BA)){d=k;d.kM=null;d.la=null;d.lb=null;d.lj=0;d.lf=1;d.k5=0;d.li=0;d.k9=0;d.ls=null;d.ll=(-1);}}}if(f==61){b.preventDefault();b.stopPropagation();}}}}},
RN=a=>{let b,c,d;a:{if(a.q5){a.q5=0;b=0;while(true){c=a.vd.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.sS){a.sS=0;d=0;while(true){c=a.ui.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
HD=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(F3(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=U(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.j4!==c.j4?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CM(d)*0.5|0;},
HV=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Gz(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=U(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.j4!==c.j4?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CM(d)*0.5|0;},
Gz=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
F3=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ADd=(a,b)=>{a.mD=b;},
No=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
Yj=(a,b)=>{AKf(a,b);XB(a,b);};
let SB=F(0);
function Uq(){C.call(this);this.rO=null;}
function TI(){C.call(this);this.zf=null;}
let Tz=F(0);
let Rk=F();
let PN=F(0);
function TD(){let a=this;C.call(a);a.zh=0;a.sy=0;a.yG=null;a.uo=null;}
let Uz=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AKx=F();
let Dc=null,B3=null,AIB=null,K_=null,HA=null,ANb=null,B9=null,Bq=null,EA=null;
let Uu=F(0);
let TJ=F(0);
function QK(){C.call(this);this.xm=null;}
function Kf(){C.call(this);this.tj=null;}
let ADr=(a,b)=>{let c,d,$$je;c=U(a.tj.oR.np.document.visibilityState);if(A(137)===c)d=1;else if(!(c instanceof I))d=0;else{c=c;d=A(137).j4!==c.j4?0:1;}if(!d){b=a.tj.r2;FO(b);a:{try{c=Gh(b);while(Hu(c)){AKj(Cm(c));}DL(b);break a;}catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}}else{b=a.tj.r2;FO(b);b:{try{c=Gh(b);while(Hu(c)){AOT(Cm(c));}DL(b);break b;}catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}}},
AM9=(a,b)=>{ADr(a,b);};
function Kg(){C.call(this);this.rd=null;}
let ATq=(a,b)=>{let c,d,e,f,g;c=a.rd.oR.np.document.documentElement.clientWidth;b=a.rd;d=c-b.nF.tR|0;e=b.oR.np.document.documentElement.clientHeight;b=a.rd;f=b.nF;c=e-f.vn|0;if(d>0&&c>0){if(b.o7!==null){if(f.sN){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Kc(a.rd.o7,d,c);}return;}},
AR7=(a,b)=>{ATq(a,b);};
let Bk=F(Bz);
let AAj=a=>{a.j5=1;a.j6=1;},
AAq=()=>{let a=new Bk();AAj(a);return a;};
let AP4=F();
let FW=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new H;e.j5=1;e.j6=1;B(e);};
let ZL=F();
let JD=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bk;e=new K;e.j3=G(16);D(e,e.j2,A(138));J(e,e.j2,b,10);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);d.j5=1;d.j6=1;d.j7=f;B(d);}d=new H;d.j5=1;d.j6=1;B(d);}j=K6(b/c)|0;if(2>j)j=2;i=Lj(j);if(i<=1073741824)return i;d=new Bk;e=new K;e.j3=G(16);D(e,e.j2,A(139));J(e,e.j2,b,10);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);d.j5=1;d.j6=1;d.j7=f;B(d);}d=new H;d.j5=1;d.j6=1;B(d);};
let AId=F(Ev);
let PY=null;
let APY=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new Cu;b.j5=1;b.j6=1;b.j7=A(85);B(b);}f=0;if(c>=0&&c<b.j4.length){a:{switch(b.j4.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=Ca;i=V(e);j=C6(V(1),MY(E(4294967295, 2147483647),i));if(g==d){b=new Cu;b.j5=1;b.j6=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.j4.length)break b;g=AGf(b.j4.charCodeAt(g));if(g<0){l=new Cu;b=Ch(b,c,d);m=new K;m.j3=G(16);D(m,m.j2,A(86));c=m.j2;if(b===null)b=A(2);D(m,c,
b);b=new I;n=m.j3;o=n.data;d=m.j2;e=o.length;if(d>=0&&d<=(e-0|0)){b.j4=L(n.data,0,d);l.j5=1;l.j6=1;l.j7=b;B(l);}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);}if(g>=e){l=new Cu;p=Ch(b,c,d);b=new K;b.j3=G(16);D(b,b.j2,A(87));J(b,b.j2,e,10);D(b,b.j2,A(81));c=b.j2;if(p===null)p=A(2);D(b,c,p);m=new I;n=b.j3;o=n.data;d=b.j2;e=o.length;if(d>=0&&d<=(e-0|0)){m.j4=L(n.data,0,d);l.j5=1;l.j6=1;l.j7=m;B(l);}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);}if(ACz(h,j)){b=new Cu;b.j5=1;b.j6=1;b.j7=A(140);B(b);}h=C6(Ba(i,h),V(g));if(AU6(h,Ca)){if(k==
d&&D5(h,E(0, 2147483648))&&f)return E(0, 2147483648);l=new Cu;p=Ch(b,c,d);m=new K;m.j3=G(16);D(m,m.j2,A(141));c=m.j2;if(p===null)p=A(2);D(m,c,p);b=new I;n=m.j3;o=n.data;e=m.j2;c=o.length;if(e>=0&&e<=(c-0|0)){b.j4=L(n.data,0,e);l.j5=1;l.j6=1;l.j7=b;B(l);}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);}g=k;}if(f)h=AWg(h);return h;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);}b=new Cu;l=new K;l.j3=G(16);D(l,l.j2,A(90));J(l,l.j2,e,10);m=new I;n=l.j3;o=n.data;d=l.j2;e=o.length;if(d>=0&&d<=(e-0|0)){m.j4=L(n.data,0,d);b.j5
=1;b.j6=1;b.j7=m;B(b);}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
AGf=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Fa=b=>{let c,d;if(D5(b,Ca))return 64;c=0;d=Be(b,32);if(ADn(d,Ca))c=32;else d=b;b=Be(d,16);if(D5(b,Ca))b=d;else c=c|16;d=Be(b,8);if(D5(d,Ca))d=b;else c=c|8;b=Be(d,4);if(D5(b,Ca))b=d;else c=c|4;d=Be(b,2);if(D5(d,Ca))d=b;else c=c|2;if(ADn(Be(d,1),Ca))c=c|1;return (64-c|0)-1|0;},
EM=(b,c)=>{return AWn(b,c);},
E_=(b,c)=>{return AWl(b,c);},
AVu=()=>{PY=M(AJV);};
let AHJ=F();
let ACO=()=>{return {};};
let L$=F(0);
function GT(){let a=this;C.call(a);a.kb=null;a.pk=0;a.pe=0;a.mt=0;a.yM=0;a.yU=0;a.nn=0;a.ps=0;a.lT=null;a.mr=null;a.m9=null;a.zx=null;a.yZ=null;a.n1=null;a.na=null;a.n0=0;a.rN=null;a.po=null;a.q8=null;a.rX=null;a.ys=null;}
let Mv=(a,b)=>{a.pk=1;a.pe=1;a.mt=1;a.yM=1;a.yU=1;a.nn=1;a.ps=1;a.lT=Dg(51,0.800000011920929);a.mr=Dg(51,0.800000011920929);a.m9=Dg(51,0.800000011920929);a.zx=Dg(51,0.800000011920929);a.yZ=Dg(51,0.800000011920929);a.n1=Dg(51,0.800000011920929);a.na=Dg(51,0.800000011920929);a.n0=0;a.rN=new Float32Array(40000);a.po=new Int32Array(12000);a.q8=new Int16Array(12000);a.rX=new Int8Array(12000);a.ys=new Uint8Array(240000);a.kb=b;b.pixelStorei(37441,0);},
AQf=a=>{let b=new GT();Mv(b,a);return b;},
NP=(a,b)=>{let c,d,e,f,g;if(Gp){c=(!BB(b,Eg)?null:b.o8.k6.data).buffer;d=b.ki;e=b.ka-d|0;return new Float32Array(c,d,e);}if((b.ka-b.ki|0)>a.rN.length)a.rN=new Float32Array(b.ka-b.ki|0);e=b.ki;d=0;while(true){f=b.ka;if(e>=f)break;c=a.rN;g=R0(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.rN;e=f-b.ki|0;return c.subarray(0,e);},
Sn=(a,b)=>{let c,d,e,f,g;if(Gp){c=(!BB(b,Eg)?null:b.o5.k6.data).buffer;d=b.ki;e=b.ka-d|0;return new Int16Array(c,d,e);}if((b.ka-b.ki|0)>a.q8.length)a.q8=new Int16Array(b.ka-b.ki|0);e=b.ki;d=0;while(true){f=b.ka;if(e>=f)break;c=a.q8;g=ANq(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.q8;e=f-b.ki|0;return c.subarray(0,e);},
VI=(a,b)=>{let c,d,e,f,g;if(Gp){c=(!BB(b,Eg)?null:b.eq()).buffer;d=b.ki;e=b.ka-d|0;return new Int32Array(c,d,e);}if((b.ka-b.ki|0)>a.po.length)a.po=new Int32Array(b.ka-b.ki|0);e=b.ki;d=0;while(true){f=b.ka;if(e>=f)break;c=a.po;g=b.er(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.po;e=f-b.ki|0;return c.subarray(0,e);},
Mo=(a,b)=>{let c,d,e,f,g;if(Gp)return !BB(b,Eg)?null:b.k6.data;if((b.ka-b.ki|0)>a.rX.length)a.rX=new Int8Array(b.ka-b.ki|0);c=b.ki;d=0;while(true){e=b.ka;if(c>=e)break;f=a.rX;g=W1(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.rX;c=e-b.ki|0;return f.subarray(0,c);},
AXk=(a,b)=>{if((b.ka-b.ki|0)>a.po.length)a.po=new Int32Array(b.ka-b.ki|0);},
ATZ=(a,b)=>{let c,d,e,f,g;c=a.na;d=a.n0;if(!d)c=!c.kD?null:c.kA;else{e=c.ky;f=Bl(Be(Ba(V(d),E(2135587861, 2654435769)),c.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.kC;}}c=f<0?null:c.kz.data[f];}c=c;if(!b)c=!c.kD?null:c.kA;else{e=c.ky;d=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kF));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.kC;}}c=d<0?null:c.kz.data[d];}BD();return c===null?null:c[Br]===true?c:c.kI;},
AFo=(a,b,c)=>{let d,e,f,g,h,i;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kI;d=a.mr;if(!c)d=!d.kD?null:d.kA;else{e=d.ky;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kF));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kC;}}d=b<0?null:d.kz.data[b];}i=d===null?null:d[Br]===true?
d:d.kI;a.kb.attachShader(h,i);},
ARZ=(a,b,c)=>{let d,e,f,g,h;d=a.kb;e=a.m9;if(!c)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.bindBuffer(b,e);},
AAS=(a,b,c)=>{let d,e,f,g,h;d=a.kb;e=a.n1;if(!c)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.bindTexture(b,e);},
AEt=(a,b,c,d,e)=>{a.kb.blendFuncSeparate(b,c,d,e);},
Lh=(a,b,c,d,e)=>{let f,g;if(d instanceof Ek){f=a.kb;d=NP(a,d);f.bufferData(b,d,e);}else if(d instanceof G9){f=a.kb;d=VI(a,d);f.bufferData(b,d,e);}else if(d instanceof G$){f=a.kb;d=Sn(a,d);f.bufferData(b,d,e);}else if(d instanceof E2){f=a.kb;g=Mo(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new S;f.j5=1;f.j6=1;f.j7=A(142);B(f);}a.kb.bufferData(b,c,e);}},
Lg=(a,b,c,d,e)=>{let f,g;if(e instanceof Ek){f=a.kb;e=NP(a,e);f.bufferSubData(b,c,e);}else if(e instanceof G9){f=a.kb;g=VI(a,e);f.bufferSubData(b,c,g);}else if(e instanceof G$){f=a.kb;e=Sn(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof E2)){f=new S;f.j5=1;f.j6=1;f.j7=A(142);B(f);}f=a.kb;e=Mo(a,e);f.bufferSubData(b,c,e);}},
APA=(a,b)=>{a.kb.clear(b);},
AA8=(a,b,c,d,e)=>{a.kb.clearColor(b,c,d,e);},
AGt=(a,b)=>{let c,d,e,f;c=a.mr;if(!b)c=!c.kD?null:c.kA;else{d=c.ky;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kF));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kC;}}c=e<0?null:c.kz.data[e];}BD();c=c===null?null:c[Br]===true?c:c.kI;a.kb.compileShader(c);},
ASJ=a=>{let b,c;b=a.kb.createProgram();c=a.pk;a.pk=c+1|0;Cc(a.lT,c,Cf(b));return c;},
AMc=(a,b)=>{let c,d;c=a.kb.createShader(b);d=a.pe;a.pe=d+1|0;Cc(a.mr,d,Cf(c));return d;},
APB=(a,b)=>{a.kb.depthMask(!!b);},
ALU=(a,b)=>{a.kb.disable(b);},
AKk=(a,b)=>{a.kb.disableVertexAttribArray(b);},
ABI=(a,b,c,d)=>{a.kb.drawArrays(b,c,d);},
AHi=(a,b,c,d,e)=>{let f,g;f=a.kb;g=e.ki;f.drawElements(b,c,d,g);},
AJP=(a,b,c,d,e)=>{a.kb.drawElements(b,c,d,e);},
ARA=(a,b)=>{a.kb.enable(b);},
AQh=(a,b)=>{a.kb.enableVertexAttribArray(b);},
AVN=a=>{let b,c;b=a.kb.createBuffer();c=a.mt;a.mt=c+1|0;Cc(a.m9,c,Cf(b));return c;},
WY=(a,b)=>{a.kb.generateMipmap(b);},
AXt=a=>{let b,c;b=a.kb.createTexture();c=a.nn;a.nn=c+1|0;Cc(a.n1,c,Cf(b));return c;},
Kw=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.kb;g=a.lT;if(!b)g=!g.kD?null:g.kA;else{h=g.ky;i=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kF));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kC;}}g=i<0?null:g.kz.data[i];}BD();g=g===null?null:g[Br]===true?g:g.kI;g=f.getActiveAttrib(g,c);Ej(d,g.size);Ej(e,g.type);d.ki=0;d.ka=d.kB;d.kt=(-1);e.ki=0;e.ka=e.kB;e.kt=(-1);return U(g.name);},
L1=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.kb;g=a.lT;if(!b)g=!g.kD?null:g.kA;else{h=g.ky;i=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kF));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kC;}}g=i<0?null:g.kz.data[i];}BD();g=g===null?null:g[Br]===true?g:g.kI;g=f.getActiveUniform(g,c);Ej(d,g.size);Ej(e,g.type);d.ki=0;d.ka=d.kB;d.kt=(-1);e.ki=0;e.ka=e.kB;e.kt=(-1);return U(g.name);},
ADa=(a,b,c)=>{let d,e,f,g,h;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kI;return a.kb.getAttribLocation(h,Bw(c));},
Jj=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new S;c.j5=1;c.j6=1;c.j7=A(143);B(c);}NL(c,0,a.kb.getParameter(b));c.ki=0;c.ka=c.kB;c.kt=(-1);},
ASA=(a,b)=>{let c,d,e,f,g;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;return U(c.getProgramInfoLog(d));},
Mr=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.kb;f=a.lT;if(!b)f=!f.kD?null:f.kA;else{g=f.ky;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),f.kF));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kC;}}f=h<0?null:f.kz.data[h];}BD();f=f===null?null:f[Br]===true?f:f.kI;Ej(d,e.getProgramParameter(f,c));}else{f=a.kb;e=a.lT;if(!b)e=!e.kD?null:e.kA;else{g=e.ky;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.kC;}}e=h<0?null:e.kz.data[h];}BD();e=e===null?null:e[Br]===true?e:e.kI;Ej(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.ki=0;d.ka=d.kB;d.kt=(-1);},
AH3=(a,b)=>{let c,d,e,f,g;c=a.kb;d=a.mr;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;return U(c.getShaderInfoLog(d));},
KY=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.kb;f=a.mr;if(!b)f=!f.kD?null:f.kA;else{g=f.ky;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),f.kF));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kC;}}f=h<0?null:f.kz.data[h];}BD();f=f===null?null:f[Br]===true?f:f.kI;Ej(d,e.getShaderParameter(f,c));}else{f=a.kb;e=a.mr;if(!b)e=!e.kD?null:e.kA;else{g=e.ky;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.kC;}}e=h<0?null:e.kz.data[h];}BD();e=e===null?null:e[Br]===true?e:e.kI;Ej(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.ki=0;d.ka=d.kB;d.kt=(-1);},
AD9=(a,b)=>{return U(a.kb.getParameter(b));},
AD3=(a,b,c)=>{let d,e,f,g,h;d=a.kb;e=a.lT;if(!b)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d=d.getUniformLocation(e,Bw(c));if(d===null)return (-1);c=a.na;if(!b)c=!c.kD?null:c.kA;else{f=c.ky;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kF));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
c.kC;}}c=h<0?null:c.kz.data[h];}c=c;if(c===null){c=Dg(51,0.800000011920929);Cc(a.na,b,c);}h=a.ps;a.ps=h+1|0;Cc(c,h,Cf(d));return h;},
Zi=(a,b)=>{let c,d,e,f,g;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.linkProgram(d);},
ABH=(a,b,c)=>{a.kb.pixelStorei(b,c);},
WX=(a,b,c)=>{let d,e,f,g,h;d=a.kb;e=a.mr;if(!b)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.shaderSource(e,Bw(c));},
MC=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.kb;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.ka>4){if(!Gp)l=!(j instanceof Ek)?Uint8Array.from(Mo(a,j)):NP(a,j);else{m=!BB(j,Eg)?null:j.k6.data;if(!(j instanceof Ek)){n=j.ka-j.ki|0;o=m.byteOffset+j.ki|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.ka-j.ki|0;o=m.byteOffset+j.ki|0;l=new Float32Array(m.buffer,o,n);}}a.kb.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=APG(j,0);ED();j=FN;if(!p)j=!j.kD?null:j.kA;else{q=j.ky;n=Bl(Be(Ba(V(p),E(2135587861, 2654435769)),
j.kF));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.kC;}}j=n<0?null:j.kz.data[n];}k=j;r=k.oq;if(r===null&&k.lz!==null?1:0){j=a.kb;s=k.lz.rR;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.p7!==null?1:0){j=a.kb;s=k.p7;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.ra!==null?1:0){j=a.kb;s=k.ra;j.texImage2D(b,c,d,h,i,s);}else{j=a.kb;Fc(k);s=k.oq;j.texImage2D(b,c,d,h,i,s);}}},
AIW=(a,b,c,d)=>{a.kb.texParameterf(b,c,d);},
ALo=(a,b,c,d)=>{let e,f;e=a.kb;f=d;e.texParameterf(b,c,f);},
ALT=(a,b,c)=>{let d,e,f,g,h,i;d=a.na;e=a.n0;if(!e)d=!d.kD?null:d.kA;else{f=d.ky;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kC;}}d=g<0?null:d.kz.data[g];}d=d;if(!b)d=!d.kD?null:d.kA;else{f=d.ky;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.kC;}}d=g<0?null:d.kz.data[g];}BD();i=d===null?null:d[Br]===true?d:d.kI;a.kb.uniform1i(i,c);},
QN=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.na;f=a.n0;if(!f)g=!g.kD?null:g.kA;else{h=g.ky;c=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),g.kF));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.kC;}}g=c<0?null:g.kz.data[c];}g=g;if(!b)g=!g.kD?null:g.kA;else{h=g.ky;c=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kF));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.kC;}}g=c<0?null:g.kz.data[c];}BD();j=g===null?null:g[Br]===true?g:g.kI;g=a.kb;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
Zk=(a,b)=>{let c,d,e,f,g;a.n0=b;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.useProgram(d);},
AIv=(a,b,c,d,e,f,g)=>{a.kb.vertexAttribPointer(b,c,d,!!e,f,g);},
Xk=(a,b,c,d,e)=>{a.kb.viewport(b,c,d,e);};
let SA=F(0);
function J2(){let a=this;GT.call(a);a.kN=null;a.Ad=null;a.zQ=0;a.yy=null;a.yS=0;a.zb=null;a.yc=0;a.rE=null;a.rw=0;a.zG=null;}
let N9=(a,b)=>{Mv(a,b);a.Ad=Dg(51,0.800000011920929);a.zQ=1;a.yy=Dg(51,0.800000011920929);a.yS=1;a.zb=Dg(51,0.800000011920929);a.yc=1;a.rE=Dg(51,0.800000011920929);a.rw=1;a.zG=new Uint32Array(12000);a.kN=b;},
ARj=a=>{let b=new J2();N9(b,a);return b;},
AET=(a,b)=>{let c,d,e,f,g;c=a.kN;d=a.rE;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.bindVertexArray(d);},
AKb=(a,b,c,d,e)=>{a.kN.drawArraysInstanced(b,c,d,e);},
ATk=(a,b,c,d,e,f)=>{a.kN.drawElementsInstanced(b,c,d,e,f);},
AKO=(a,b,c)=>{let d,e,f,g;d=c.ki;e=0;while(e<b){f=a.kN.createVertexArray();g=a.rw;a.rw=g+1|0;Cc(a.rE,g,Cf(f));Ej(c,g);e=e+1|0;}CC(c,d);},
AHq=(a,b,c)=>{if(b!=34045)Jj(a,b,c);else{NL(c,0,a.kN.getParameter(b));c.ki=0;c.ka=c.kB;c.kt=(-1);}};
let O8=F(J2);
let ADi=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kN;d=a.rE;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.bindVertexArray(d);b=a.kN.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f>=0&&
f<=(g-0|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
Z3=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kN.drawArraysInstanced(b,c,d,e);b=a.kN.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;R(f);B(f);},
ARQ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.kN.drawElementsInstanced(b,c,d,e,f);b=a.kN.getError();if(!b)return;g=new S;h=Bh(b,4);i=new K;i.j3=G(16);D(i,i.j2,A(144));J(i,i.j2,b,10);D(i,i.j2,A(47));b=i.j2;if(h===null)h=A(2);D(i,b,h);j=new I;k=i.j3;l=k.data;c=i.j2;d=l.length;if(c>=0&&c<=(d-0|0)){j.j4=L(k.data,0,c);g.j5=1;g.j6=1;g.j7=j;B(g);}g=new H;R(g);B(g);},
Y8=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.ki;e=0;while(e<b){f=a.kN.createVertexArray();g=a.rw;a.rw=g+1|0;Cc(a.rE,g,Cf(f));Ej(c,g);e=e+1|0;}CC(c,d);b=a.kN.getError();if(!b)return;c=new S;h=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.j3;k=j.data;e=f.j2;l=k.length;if(e>=0&&e<=(l-0|0)){i.j4=L(j.data,0,e);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
ZV=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kb;e=a.n1;if(!c)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.bindTexture(b,e);b=a.kN.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.j3;k=f.data;c=e.j2;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=j;B(d);}d=new H;R(d);B(d);},
APF=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.clear(b);b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AI1=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.kb.clearColor(b,c,d,e);f=a.kN.getError();if(!f)return;g=new S;h=Bh(f,4);i=new K;i.j3=G(16);D(i,i.j2,A(144));J(i,i.j2,f,10);D(i,i.j2,A(47));f=i.j2;if(h===null)h=A(2);D(i,f,h);j=new I;k=i.j3;l=k.data;m=i.j2;n=l.length;if(m>=0&&m<=(n-0|0)){j.j4=L(k.data,0,m);g.j5=1;g.j6=1;g.j7=j;B(g);}g=new H;R(g);B(g);},
Y5=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.depthMask(!!b);b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AQk=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.disable(b);b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
ACw=(a,b,c,d)=>{let e,f,g,h,i,j;a.kb.drawArrays(b,c,d);b=a.kN.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;d=j.length;if(c>=0&&c<=(d-0|0)){h.j4=L(i.data,0,c);e.j5=1;e.j6=1;e.j7=h;B(e);}e=new H;R(e);B(e);},
AMp=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.kb;g=e.ki;f.drawElements(b,c,d,g);b=a.kN.getError();if(!b)return;e=new S;h=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.j3;k=j.data;c=f.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);e.j5=1;e.j6=1;e.j7=i;B(e);}e=new H;R(e);B(e);},
AN8=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.enable(b);b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
WI=(a,b)=>{return U(a.kb.getParameter(b));},
XV=(a,b,c)=>{let d,e,f,g,h,i,j;a.kb.pixelStorei(b,c);b=a.kN.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=g;B(d);}d=new H;R(d);B(d);},
AJw=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MC(a,b,c,d,e,f,g,h,i,j);b=a.kN.getError();if(!b)return;j=new S;k=Bh(b,4);l=new K;l.j3=G(16);D(l,l.j2,A(144));J(l,l.j2,b,10);D(l,l.j2,A(47));b=l.j2;if(k===null)k=A(2);D(l,b,k);m=new I;n=l.j3;o=n.data;c=l.j2;d=o.length;if(c>=0&&c<=(d-0|0)){m.j4=L(n.data,0,c);j.j5=1;j.j6=1;j.j7=m;B(j);}j=new H;R(j);B(j);},
ACe=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.kb.texParameterf(b,c,d);b=a.kN.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;k=j.length;if(c>=0&&c<=(k-0|0)){h.j4=L(i.data,0,c);e.j5=1;e.j6=1;e.j7=h;B(e);}e=new H;R(e);B(e);},
AEI=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kb.viewport(b,c,d,e);b=a.kN.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;R(f);B(f);},
AH_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kI;d=a.mr;if(!c)d=!d.kD?null:d.kA;else{e=d.ky;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kF));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kC;}}d=b<0?null:d.kz.data[b];}i=d===null?null:d[Br]===true
?d:d.kI;a.kb.attachShader(h,i);b=a.kN.getError();if(!b)return;d=new S;j=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(j===null)j=A(2);D(h,b,j);i=new I;e=h.j3;k=e.data;c=h.j2;f=k.length;if(c>=0&&c<=(f-0|0)){i.j4=L(e.data,0,c);d.j5=1;d.j6=1;d.j7=i;B(d);}d=new H;R(d);B(d);},
ARb=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kb;e=a.m9;if(!c)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.bindBuffer(b,e);b=a.kN.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.j3;k=f.data;c=e.j2;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=j;B(d);}d=new H;R(d);B(d);},
ADk=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kb.blendFuncSeparate(b,c,d,e);b=a.kN.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;R(f);B(f);},
AJb=(a,b,c,d,e)=>{let f,g,h,i,j;Lh(a,b,c,d,e);b=a.kN.getError();if(!b)return;d=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;e=j.length;if(c>=0&&c<=(e-0|0)){h.j4=L(i.data,0,c);d.j5=1;d.j6=1;d.j7=h;B(d);}d=new H;R(d);B(d);},
AQ3=(a,b,c,d,e)=>{let f,g,h,i,j;Lg(a,b,c,d,e);b=a.kN.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;d=j.length;if(c>=0&&c<=(d-0|0)){h.j4=L(i.data,0,c);e.j5=1;e.j6=1;e.j7=h;B(e);}e=new H;R(e);B(e);},
AKF=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mr;if(!b)c=!c.kD?null:c.kA;else{d=c.ky;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kF));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kC;}}c=e<0?null:c.kz.data[e];}BD();g=c===null?null:c[Br]===true?c:c.kI;a.kb.compileShader(g);b=a.kN.getError();if(!b)return;c=new S;h=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(h===null)h=A(2);D(g,b,h);i=new I;d=g.j3;j=d.data;e=g.j2;f=j.length;if(e>=0&&e<=(f-0|0))
{i.j4=L(d.data,0,e);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
ASI=a=>{let b,c,d,e,f,g,h,i,j;b=a.kb.createProgram();c=a.pk;a.pk=c+1|0;Cc(a.lT,c,Cf(b));d=a.kN.getError();if(!d)return c;b=new S;e=Bh(d,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,d,10);D(f,f.j2,A(47));d=f.j2;if(e===null)e=A(2);D(f,d,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);b.j5=1;b.j6=1;b.j7=g;B(b);}b=new H;R(b);B(b);},
AMJ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb.createShader(b);d=a.pe;a.pe=d+1|0;Cc(a.mr,d,Cf(c));b=a.kN.getError();if(!b)return d;c=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;d=f.j2;j=i.length;if(d>=0&&d<=(j-0|0)){g.j4=L(h.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;R(c);B(c);},
ASx=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.disableVertexAttribArray(b);b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
ZA=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kb.drawElements(b,c,d,e);b=a.kN.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;R(f);B(f);},
AMQ=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.enableVertexAttribArray(b);b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
APL=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.generateMipmap(b);b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AF_=(a,b,c,d,e)=>{let f,g,h,i,j;f=Kw(a,b,c,d,e);b=a.kN.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.j3;i=h.data;c=e.j2;j=i.length;if(c>=0&&c<=(j-0|0)){f.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=f;B(d);}d=new H;R(d);B(d);},
APC=(a,b,c,d,e)=>{let f,g,h,i,j;f=L1(a,b,c,d,e);b=a.kN.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.j3;i=h.data;c=e.j2;j=i.length;if(c>=0&&c<=(j-0|0)){f.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=f;B(d);}d=new H;R(d);B(d);},
AJX=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kI;b=a.kb.getAttribLocation(h,Bw(c));f=a.kN.getError();if(!f)return b;c=new S;i=Bh(f,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,f,10);D(d,d.j2,A(47));b=d.j2;if(i===null)i=A(2);D(d,b,i);h=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f
>=0&&f<=(g-0|0)){h.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;R(c);B(c);},
ADt=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)Jj(a,b,c);else{NL(c,0,a.kN.getParameter(b));c.ki=0;c.ka=c.kB;c.kt=(-1);}b=a.kN.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AA_=(a,b,c,d)=>{let e,f,g,h,i,j;Mr(a,b,c,d);b=a.kN.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=g;B(d);}d=new H;R(d);B(d);},
XT=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c=U(c.getProgramInfoLog(d));b=a.kN.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
ASG=(a,b,c,d)=>{let e,f,g,h,i,j;KY(a,b,c,d);b=a.kN.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=g;B(d);}d=new H;R(d);B(d);},
YN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb;d=a.mr;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c=U(c.getShaderInfoLog(d));b=a.kN.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f>=
0&&f<=(g-0|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
XW=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kb;e=a.lT;if(!b)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;c=d.getUniformLocation(e,Bw(c));if(c===null)h=(-1);else{d=a.na;if(!b)d=!d.kD?null:d.kA;else{f=d.ky;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|
0)&d.kC;}}d=h<0?null:d.kz.data[h];}d=d;if(d===null){d=Dg(51,0.800000011920929);Cc(a.na,b,d);}h=a.ps;a.ps=h+1|0;Cc(d,h,Cf(c));}b=a.kN.getError();if(!b)return h;c=new S;i=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.j3;j=f.data;h=d.j2;g=j.length;if(h>=0&&h<=(g-0|0)){e.j4=L(f.data,0,h);c.j5=1;c.j6=1;c.j7=e;B(c);}c=new H;R(c);B(c);},
ARG=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.linkProgram(d);b=a.kN.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f>=0&&f<=(g-0
|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
XR=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kb;e=a.mr;if(!b)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.shaderSource(e,Bw(c));b=a.kN.getError();if(!b)return;c=new S;i=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.j3;j=f.data;g=d.j2;h=j.length;if(g>=0&&g
<=(h-0|0)){e.j4=L(f.data,0,g);c.j5=1;c.j6=1;c.j7=e;B(c);}c=new H;R(c);B(c);},
Zh=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.kb;f=d;e.texParameterf(b,c,f);b=a.kN.getError();if(!b)return;e=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);e.j5=1;e.j6=1;e.j7=i;B(e);}e=new H;R(e);B(e);},
AAo=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.na;e=a.n0;if(!e)d=!d.kD?null:d.kA;else{f=d.ky;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kC;}}d=g<0?null:d.kz.data[g];}d=d;if(!b)d=!d.kD?null:d.kA;else{f=d.ky;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kC;}}d=e<0?null:d.kz.data[e];}BD();i=d===null?null:d[Br]===true?d:d.kI;a.kb.uniform1i(i,c);b
=a.kN.getError();if(!b)return;d=new S;i=Bh(b,4);j=new K;j.j3=G(16);D(j,j.j2,A(144));J(j,j.j2,b,10);D(j,j.j2,A(47));b=j.j2;if(i===null)i=A(2);D(j,b,i);k=new I;f=j.j3;l=f.data;c=j.j2;e=l.length;if(c>=0&&c<=(e-0|0)){k.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=k;B(d);}d=new H;R(d);B(d);},
ATp=(a,b)=>{let c,d,e,f,g,h,i,j;a.n0=b;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.useProgram(d);b=a.kN.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f>=0&&f
<=(g-0|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
AND=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.kb.vertexAttribPointer(b,c,d,!!e,f,g);b=a.kN.getError();if(!b)return;h=new S;i=Bh(b,4);j=new K;j.j3=G(16);D(j,j.j2,A(144));J(j,j.j2,b,10);D(j,j.j2,A(47));b=j.j2;if(i===null)i=A(2);D(j,b,i);k=new I;l=j.j3;m=l.data;c=j.j2;d=m.length;if(c>=0&&c<=(d-0|0)){k.j4=L(l.data,0,c);h.j5=1;h.j6=1;h.j7=k;B(h);}h=new H;R(h);B(h);};
function Qz(){let a=this;C.call(a);a.vl=0;a.uG=0;a.uO=0;a.yj=null;a.zc=null;a.o_=null;a.x9=A(145);}
let AH1=(a,b,c,d,e)=>{a.x9=A(145);if(b===NH)a.o_=Jt;else if(b===M1)a.o_=Jt;else if(b===M9)a.o_=JM;else if(b===ML)a.o_=JM;else if(b!==Hl)a.o_=Sw;else a.o_=LH;b=a.o_;if(b===Jt)Lw(a,A(146),c);else if(b===LH)Lw(a,A(147),c);else if(b===JM)Lw(a,A(148),c);else{a.vl=(-1);a.uG=(-1);a.uO=(-1);d=A(68);e=A(68);}a.yj=d;a.zc=e;},
AMj=(a,b,c,d)=>{let e=new Qz();AH1(e,a,b,c,d);return e;},
Lw=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=QL(IK(b,0),c);if(!Q6(d)){e=Dc;b=new K;b.j3=G(16);D(b,b.j2,A(149));D(b,b.j2,c);c=new I;f=b.j3;g=f.data;h=b.j2;i=g.length;if(h>=0&&h<=(i-0|0)){c.j4=L(f.data,0,h);if(e.pC>=2){if(BW===null){b=new CO;e=new Ck;Bt(e);e.lL=BI(32);ET(b);b.l6=e;e=new K;E0(e);b.lQ=e;b.lP=G(32);b.lR=0;b.lS=Cg;BW=b;}b=new K;b.j3=G(16);BY(b,b.j2,A(145));BY(b,b.j2,A(81));BY(b,b.j2,c);c=new I;f=b.j3;g=f.data;h=b.j2;i=g.length;if(h>=0&&h<=(i-0|0)){c.j4=L(f.data,0,h);BX(Bw(c));BX("\n");}else{b
=new H;b.j5=1;b.j6=1;B(b);}}a.vl=2;a.uG=0;a.uO=0;break a;}b=new H;b.j5=1;b.j6=1;B(b);}b=d.oe;j=b.oL;if(!j){b=new BN;b.j5=1;b.j6=1;Bi(b);B(b);}k=BU(1,b.p6);if(k>=0){b=new H;c=new K;Bt(c);c.j3=G(16);J(c,c.j2,1,10);e=new I;f=c.j3;g=f.data;h=c.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);b.j5=1;b.j6=1;b.j7=e;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}f=b.l0.data;if(f[2]<0)e=null;else{b=b.qq;if(!j){b=new BN;b.j5=1;b.j6=1;Bi(b);B(b);}if(k>=0){b=new H;c=new K;Bt(c);c.j3=G(16);J(c,c.j2,1,10);e=new I;f=c.j3;g=f.data;h
=c.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);b.j5=1;b.j6=1;b.j7=e;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}h=f[2];if(!j){b=new BN;b.j5=1;b.j6=1;Bi(b);B(b);}if(k>=0){b=new H;c=new K;Bt(c);c.j3=G(16);J(c,c.j2,1,10);e=new I;f=c.j3;g=f.data;h=c.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);b.j5=1;b.j6=1;b.j7=e;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}e=Ch(b,h,f[3]);}f=(Kv(IK(A(150),0),e,0)).data;b=f[0];b:{try{h=K5(b);break b;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}d=Dc;e=new K;e.j3
=G(16);D(e,e.j2,A(151));D(e,e.j2,b);D(e,e.j2,A(152));J(e,e.j2,2,10);l=new I;g=e.j3;m=g.data;i=e.j2;j=m.length;if(i>=0&&i<=(j-0|0)){l.j4=L(g.data,0,i);if(d.pC>=1){if(Dh===null){b=new FG;e=new Ck;ET(e);e.lL=BI(32);F1(b,e);b.lQ=En();b.lP=G(32);b.lR=0;b.lS=Cg;Dh=b;}b=new K;b.j3=G(16);B$(b,b.j2,Cl(A(153)));B$(b,b.j2,Cl(A(81)));B$(b,b.j2,Cl(l));c=new I;g=b.j3;m=g.data;i=b.j2;j=m.length;if(i>=0&&i<=(j-0|0)){c.j4=L(g.data,0,i);DA(Bw(c));DA("\n");}else{b=new H;b.j5=1;b.j6=1;B(b);}}h=2;}else{b=new H;b.j5=1;b.j6=1;B(b);}}a.vl
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=K5(b);break c;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}d=Dc;e=new K;e.j3=G(16);D(e,e.j2,A(151));D(e,e.j2,b);D(e,e.j2,A(152));J(e,e.j2,0,10);l=new I;g=e.j3;m=g.data;j=e.j2;k=m.length;if(j>=0&&j<=(k-0|0)){l.j4=L(g.data,0,j);if(d.pC>=1){if(Dh===null){b=new FG;e=new Ck;ET(e);e.lL=BI(32);F1(b,e);b.lQ=En();b.lP=G(32);b.lR=0;b.lS=Cg;Dh=b;}b=new K;b.j3=G(16);B$(b,b.j2,Cl(A(153)));B$(b,b.j2,Cl(A(81)));B$(b,b.j2,Cl(l));c=new I;g=b.j3;m=g.data;j=b.j2;k
=m.length;if(j>=0&&j<=(k-0|0)){c.j4=L(g.data,0,j);DA(Bw(c));DA("\n");}else{b=new H;b.j5=1;b.j6=1;B(b);}}i=0;}else{b=new H;b.j5=1;b.j6=1;B(b);}}}a.uG=i;if(n<3)h=0;else{b=f[2];d:{try{h=K5(b);break d;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}e=Dc;d=new K;d.j3=G(16);D(d,d.j2,A(151));D(d,d.j2,b);D(d,d.j2,A(152));J(d,d.j2,0,10);b=new I;g=d.j3;f=g.data;h=d.j2;i=f.length;if(h>=0&&h<=(i-0|0)){b.j4=L(g.data,0,h);if(e.pC>=1){if(Dh===null){e=new FG;d=new Ck;ET(d);d.lL=BI(32);F1(e,d);e.lQ=En();e.lP
=G(32);e.lR=0;e.lS=Cg;Dh=e;}e=new K;e.j3=G(16);B$(e,e.j2,Cl(A(153)));B$(e,e.j2,Cl(A(81)));B$(e,e.j2,Cl(b));b=new I;f=e.j3;g=f.data;i=e.j2;j=g.length;if(i>=0&&i<=(j-0|0)){b.j4=L(f.data,0,i);DA(Bw(b));DA("\n");}else{b=new H;b.j5=1;b.j6=1;B(b);}}h=0;}else{b=new H;b.j5=1;b.j6=1;B(b);}}}a.uO=h;}};
let EZ=F(BG);
let NH=null,M9=null,AAT=null,ML=null,Hl=null,M1=null,AEC=null;
let ABz=()=>{let b,c,d,e,f,g;b=new EZ;b.kk=A(7);b.ke=0;NH=b;c=new EZ;c.kk=A(154);c.ke=1;M9=c;d=new EZ;d.kk=A(155);d.ke=2;AAT=d;e=new EZ;e.kk=A(156);e.ke=3;ML=e;f=new EZ;f.kk=A(157);f.ke=4;Hl=f;g=new EZ;g.kk=A(158);g.ke=5;M1=g;AEC=T(EZ,[b,c,d,e,f,g]);};
let TS=F(0);
function MH(){C.call(this);this.ym=null;}
let ACn=a=>{return;};
let VH=F(GT);
let ASd=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kb;e=a.n1;if(!c)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.bindTexture(b,e);b=a.kb.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.j3;k=f.data;c=e.j2;g=k.length;if(c>=0&&
c<=(g-0|0)){j.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=j;B(d);}d=new H;R(d);B(d);},
ABg=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.clear(b);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
ACc=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.kb.clearColor(b,c,d,e);f=a.kb.getError();if(!f)return;g=new S;h=Bh(f,4);i=new K;i.j3=G(16);D(i,i.j2,A(144));J(i,i.j2,f,10);D(i,i.j2,A(47));f=i.j2;if(h===null)h=A(2);D(i,f,h);j=new I;k=i.j3;l=k.data;m=i.j2;n=l.length;if(m>=0&&m<=(n-0|0)){j.j4=L(k.data,0,m);g.j5=1;g.j6=1;g.j7=j;B(g);}g=new H;R(g);B(g);},
AI_=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.depthMask(!!b);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
ASZ=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.disable(b);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AGr=(a,b,c,d)=>{let e,f,g,h,i,j;a.kb.drawArrays(b,c,d);b=a.kb.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;d=j.length;if(c>=0&&c<=(d-0|0)){h.j4=L(i.data,0,c);e.j5=1;e.j6=1;e.j7=h;B(e);}e=new H;R(e);B(e);},
ASp=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.kb;g=e.ki;f.drawElements(b,c,d,g);b=a.kb.getError();if(!b)return;e=new S;h=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.j3;k=j.data;c=f.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);e.j5=1;e.j6=1;e.j7=i;B(e);}e=new H;R(e);B(e);},
ZD=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.enable(b);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AHP=(a,b)=>{return U(a.kb.getParameter(b));},
AKK=(a,b,c)=>{let d,e,f,g,h,i,j;a.kb.pixelStorei(b,c);b=a.kb.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=g;B(d);}d=new H;R(d);B(d);},
ADu=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MC(a,b,c,d,e,f,g,h,i,j);b=a.kb.getError();if(!b)return;j=new S;k=Bh(b,4);l=new K;l.j3=G(16);D(l,l.j2,A(144));J(l,l.j2,b,10);D(l,l.j2,A(47));b=l.j2;if(k===null)k=A(2);D(l,b,k);m=new I;n=l.j3;o=n.data;c=l.j2;d=o.length;if(c>=0&&c<=(d-0|0)){m.j4=L(n.data,0,c);j.j5=1;j.j6=1;j.j7=m;B(j);}j=new H;R(j);B(j);},
ACL=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.kb.texParameterf(b,c,d);b=a.kb.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;k=j.length;if(c>=0&&c<=(k-0|0)){h.j4=L(i.data,0,c);e.j5=1;e.j6=1;e.j7=h;B(e);}e=new H;R(e);B(e);},
ASB=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kb.viewport(b,c,d,e);b=a.kb.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;R(f);B(f);},
XO=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kI;d=a.mr;if(!c)d=!d.kD?null:d.kA;else{e=d.ky;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kF));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kC;}}d=b<0?null:d.kz.data[b];}i=d===null?null:d[Br]===true
?d:d.kI;a.kb.attachShader(h,i);b=a.kb.getError();if(!b)return;d=new S;j=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(j===null)j=A(2);D(h,b,j);i=new I;e=h.j3;k=e.data;c=h.j2;f=k.length;if(c>=0&&c<=(f-0|0)){i.j4=L(e.data,0,c);d.j5=1;d.j6=1;d.j7=i;B(d);}d=new H;R(d);B(d);},
WE=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kb;e=a.m9;if(!c)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.bindBuffer(b,e);b=a.kb.getError();if(!b)return;d=new S;i=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.j3;k=f.data;c=e.j2;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=j;B(d);}d=new H;R(d);B(d);},
WC=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kb.blendFuncSeparate(b,c,d,e);b=a.kb.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;R(f);B(f);},
AHh=(a,b,c,d,e)=>{let f,g,h,i,j;Lh(a,b,c,d,e);b=a.kb.getError();if(!b)return;d=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;e=j.length;if(c>=0&&c<=(e-0|0)){h.j4=L(i.data,0,c);d.j5=1;d.j6=1;d.j7=h;B(d);}d=new H;R(d);B(d);},
AEW=(a,b,c,d,e)=>{let f,g,h,i,j;Lg(a,b,c,d,e);b=a.kb.getError();if(!b)return;e=new S;f=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.j3;j=i.data;c=g.j2;d=j.length;if(c>=0&&c<=(d-0|0)){h.j4=L(i.data,0,c);e.j5=1;e.j6=1;e.j7=h;B(e);}e=new H;R(e);B(e);},
AS_=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mr;if(!b)c=!c.kD?null:c.kA;else{d=c.ky;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kF));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kC;}}c=e<0?null:c.kz.data[e];}BD();g=c===null?null:c[Br]===true?c:c.kI;a.kb.compileShader(g);b=a.kb.getError();if(!b)return;c=new S;h=Bh(b,4);g=new K;g.j3=G(16);D(g,g.j2,A(144));J(g,g.j2,b,10);D(g,g.j2,A(47));b=g.j2;if(h===null)h=A(2);D(g,b,h);i=new I;d=g.j3;j=d.data;e=g.j2;f=j.length;if(e>=0&&e<=(f-0|0))
{i.j4=L(d.data,0,e);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
ALg=a=>{let b,c,d,e,f,g,h,i,j;b=a.kb.createProgram();c=a.pk;a.pk=c+1|0;Cc(a.lT,c,Cf(b));d=a.kb.getError();if(!d)return c;b=new S;e=Bh(d,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,d,10);D(f,f.j2,A(47));d=f.j2;if(e===null)e=A(2);D(f,d,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);b.j5=1;b.j6=1;b.j7=g;B(b);}b=new H;R(b);B(b);},
ASO=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb.createShader(b);d=a.pe;a.pe=d+1|0;Cc(a.mr,d,Cf(c));b=a.kb.getError();if(!b)return d;c=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;d=f.j2;j=i.length;if(d>=0&&d<=(j-0|0)){g.j4=L(h.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;R(c);B(c);},
AK_=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.disableVertexAttribArray(b);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AFe=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kb.drawElements(b,c,d,e);b=a.kb.getError();if(!b)return;f=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;R(f);B(f);},
AS0=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.enableVertexAttribArray(b);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AJ9=(a,b)=>{let c,d,e,f,g,h,i,j;a.kb.generateMipmap(b);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
AHl=(a,b,c,d,e)=>{let f,g,h,i,j;f=Kw(a,b,c,d,e);b=a.kb.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.j3;i=h.data;c=e.j2;j=i.length;if(c>=0&&c<=(j-0|0)){f.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=f;B(d);}d=new H;R(d);B(d);},
Z1=(a,b,c,d,e)=>{let f,g,h,i,j;f=L1(a,b,c,d,e);b=a.kb.getError();if(!b)return f;d=new S;g=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.j3;i=h.data;c=e.j2;j=i.length;if(c>=0&&c<=(j-0|0)){f.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=f;B(d);}d=new H;R(d);B(d);},
AFp=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();h=d===null?null:d[Br]===true?d:d.kI;b=a.kb.getAttribLocation(h,Bw(c));f=a.kb.getError();if(!f)return b;c=new S;i=Bh(f,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,f,10);D(d,d.j2,A(47));b=d.j2;if(i===null)i=A(2);D(d,b,i);h=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f
>=0&&f<=(g-0|0)){h.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;R(c);B(c);},
Xp=(a,b,c)=>{let d,e,f,g,h,i,j;Jj(a,b,c);b=a.kb.getError();if(!b)return;c=new S;d=Bh(b,4);e=new K;e.j3=G(16);D(e,e.j2,A(144));J(e,e.j2,b,10);D(e,e.j2,A(47));b=e.j2;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;R(c);B(c);},
ADA=(a,b,c,d)=>{let e,f,g,h,i,j;Mr(a,b,c,d);b=a.kb.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=g;B(d);}d=new H;R(d);B(d);},
ADI=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c=U(c.getProgramInfoLog(d));b=a.kb.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
X4=(a,b,c,d)=>{let e,f,g,h,i,j;KY(a,b,c,d);b=a.kb.getError();if(!b)return;d=new S;e=Bh(b,4);f=new K;f.j3=G(16);D(f,f.j2,A(144));J(f,f.j2,b,10);D(f,f.j2,A(47));b=f.j2;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.j3;i=h.data;c=f.j2;j=i.length;if(c>=0&&c<=(j-0|0)){g.j4=L(h.data,0,c);d.j5=1;d.j6=1;d.j7=g;B(d);}d=new H;R(d);B(d);},
ANK=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb;d=a.mr;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c=U(c.getShaderInfoLog(d));b=a.kb.getError();if(!b)return c;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
AP3=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kb;e=a.lT;if(!b)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;c=d.getUniformLocation(e,Bw(c));if(c===null)h=(-1);else{d=a.na;if(!b)d=!d.kD?null:d.kA;else{f=d.ky;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1
|0)&d.kC;}}d=h<0?null:d.kz.data[h];}d=d;if(d===null){d=Dg(51,0.800000011920929);Cc(a.na,b,d);}h=a.ps;a.ps=h+1|0;Cc(d,h,Cf(c));}b=a.kb.getError();if(!b)return h;c=new S;i=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.j3;j=f.data;h=d.j2;g=j.length;if(h>=0&&h<=(g-0|0)){e.j4=L(f.data,0,h);c.j5=1;c.j6=1;c.j7=e;B(c);}c=new H;R(c);B(c);},
AIC=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.linkProgram(d);b=a.kb.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f>=0&&f<=(g-0
|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
ASn=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kb;e=a.mr;if(!b)e=!e.kD?null:e.kA;else{f=e.ky;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kC;}}e=g<0?null:e.kz.data[g];}BD();e=e===null?null:e[Br]===true?e:e.kI;d.shaderSource(e,Bw(c));b=a.kb.getError();if(!b)return;c=new S;i=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.j3;j=f.data;g=d.j2;h=j.length;if(g>=0&&
g<=(h-0|0)){e.j4=L(f.data,0,g);c.j5=1;c.j6=1;c.j7=e;B(c);}c=new H;R(c);B(c);},
APU=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.kb;f=d;e.texParameterf(b,c,f);b=a.kb.getError();if(!b)return;e=new S;g=Bh(b,4);h=new K;h.j3=G(16);D(h,h.j2,A(144));J(h,h.j2,b,10);D(h,h.j2,A(47));b=h.j2;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.j3;k=j.data;c=h.j2;d=k.length;if(c>=0&&c<=(d-0|0)){i.j4=L(j.data,0,c);e.j5=1;e.j6=1;e.j7=i;B(e);}e=new H;R(e);B(e);},
ASH=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.na;e=a.n0;if(!e)d=!d.kD?null:d.kA;else{f=d.ky;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kF));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kC;}}d=g<0?null:d.kz.data[g];}d=d;if(!b)d=!d.kD?null:d.kA;else{f=d.ky;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kC;}}d=e<0?null:d.kz.data[e];}BD();i=d===null?null:d[Br]===true?d:d.kI;a.kb.uniform1i(i,c);b
=a.kb.getError();if(!b)return;d=new S;i=Bh(b,4);j=new K;j.j3=G(16);D(j,j.j2,A(144));J(j,j.j2,b,10);D(j,j.j2,A(47));b=j.j2;if(i===null)i=A(2);D(j,b,i);k=new I;f=j.j3;l=f.data;c=j.j2;e=l.length;if(c>=0&&c<=(e-0|0)){k.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=k;B(d);}d=new H;R(d);B(d);},
X6=(a,b)=>{let c,d,e,f,g,h,i,j;a.n0=b;c=a.kb;d=a.lT;if(!b)d=!d.kD?null:d.kA;else{e=d.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kF));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kC;}}d=f<0?null:d.kz.data[f];}BD();d=d===null?null:d[Br]===true?d:d.kI;c.useProgram(d);b=a.kb.getError();if(!b)return;c=new S;h=Bh(b,4);d=new K;d.j3=G(16);D(d,d.j2,A(144));J(d,d.j2,b,10);D(d,d.j2,A(47));b=d.j2;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.j3;j=e.data;f=d.j2;g=j.length;if(f>=0&&f<=
(g-0|0)){i.j4=L(e.data,0,f);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;R(c);B(c);},
AAX=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.kb.vertexAttribPointer(b,c,d,!!e,f,g);b=a.kb.getError();if(!b)return;h=new S;i=Bh(b,4);j=new K;j.j3=G(16);D(j,j.j2,A(144));J(j,j.j2,b,10);D(j,j.j2,A(47));b=j.j2;if(i===null)i=A(2);D(j,b,i);k=new I;l=j.j3;m=l.data;c=j.j2;d=m.length;if(c>=0&&c<=(d-0|0)){k.j4=L(l.data,0,c);h.j5=1;h.j6=1;h.j7=k;B(h);}h=new H;R(h);B(h);};
function TX(){let a=this;C.call(a);a.ok=0;a.ky=null;a.kz=null;a.kA=null;a.kD=0;a.wi=0.0;a.to=0;a.kF=0;a.kC=0;}
let AER=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wi=c;d=JD(b,c);a.to=d*c|0;b=d-1|0;a.kC=b;a.kF=Fa(V(b));a.ky=X(d);a.kz=Q(C,d);return;}e=new Bk;f=new K;f.j3=G(16);D(f,f.j2,A(69));E$(f,f.j2,c);g=new I;h=f.j3;i=h.data;d=f.j2;j=i.length;if(d>=0&&d<=(j-0|0)){g.j4=L(h.data,0,d);e.j5=1;e.j6=1;e.j7=g;B(e);}f=new H;f.j5=1;f.j6=1;B(f);},
Dg=(a,b)=>{let c=new TX();AER(c,a,b);return c;},
Cc=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.kA;a.kA=c;if(!a.kD){a.kD=1;a.ok=a.ok+1|0;}return d;}e=a.ky;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),a.kF));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.kC;}}if(f>=0){e=a.kz.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.kz.data[f]=c;b=a.ok+1|0;a.ok=b;if(b>=a.to)AO0(a,g.length<<1);return null;},
GM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.kD)return null;a.kD=0;c=a.kA;a.kA=null;a.ok=a.ok-1|0;return c;}d=a.ky;e=Ba(V(b),E(2135587861, 2654435769));f=a.kF;g=Bl(Be(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.kC;}}if(g<0)return null;j=a.kz.data;k=j[g];l=a.kC;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bl(Be(Ba(V(n),E(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.ok=a.ok-1|0;return k;},
AST=(a,b,c)=>{let d,e,f,g;a:{d=a.kz;if(b===null){if(a.kD&&a.kA===null)return 1;d=d.data;e=a.ky;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.kA)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.kD){g=a.kA;if(b===g?1:g instanceof Fu&&g.nu==b.nu?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Fu&&g.nu==b.nu?1:0)return 1;f=f+(-1)|0;}}return 0;},
AO0=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.ky.data.length;a.to=b*a.wi|0;d=b-1|0;a.kC=d;d=Fa(V(d));a.kF=d;e=a.ky;f=a.kz;g=X(b);a.ky=g;h=Q(C,b);a.kz=h;if(a.ok>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.kC;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function Sc(){let a=this;C.call(a);a.nv=0;a.oP=null;a.qz=0;a.xY=0.0;a.tI=0;a.p$=0;a.oH=0;}
let ACP=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.xY=c;d=JD(b,c);a.tI=d*c|0;b=d-1|0;a.oH=b;a.p$=Fa(V(b));a.oP=X(d);return;}e=new Bk;f=new K;f.j3=G(16);D(f,f.j2,A(69));E$(f,f.j2,c);g=new I;h=f.j3;i=h.data;d=f.j2;j=i.length;if(d>=0&&d<=(j-0|0)){g.j4=L(h.data,0,d);e.j5=1;e.j6=1;e.j7=g;B(e);}f=new H;f.j5=1;f.j6=1;B(f);},
O0=(a,b)=>{let c=new Sc();ACP(c,a,b);return c;},
AB2=(a,b)=>{let c,d,e,f;if(!b){if(a.qz)return 0;a.qz=1;a.nv=a.nv+1|0;return 1;}c=a.oP;d=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),a.p$));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.oH;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.nv+1|0;a.nv=b;if(b>=a.tI)ACa(a,e.length<<1);return 1;},
AQS=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.qz)return 0;a.qz=0;a.nv=a.nv-1|0;return 1;}c=a.oP;d=Ba(V(b),E(2135587861, 2654435769));e=a.p$;f=Bl(Be(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.oH;}}if(f<0)return 0;h=a.oH;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.nv=a.nv-1|0;return 1;},
ACa=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.oP.data.length;a.tI=b*a.xY|0;d=b-1|0;a.oH=d;d=Fa(V(d));a.p$=d;e=a.oP;f=X(b);a.oP=f;if(a.nv>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bl(Be(Ba(V(h),E(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.oH;}f[i]=h;}g=g+1|0;}}}};
let UK=F(0);
function Mb(){C.call(this);this.sj=null;}
let XG=a=>{let b;b=a.sj;b.sy=1;Uz(Bw(b.uo));},
ABU=a=>{let b;b=a.sj;b.sy=1;Uz(Bw(b.uo));},
Xg=a=>{a.sj.sy=0;};
let V1=F(0);
function V$(){let a=this;C.call(a);a.qJ=null;a.u1=null;a.zU=null;}
let Jm=0;
let AQz=a=>{let b,c,d,e,f,g,h,i,$$je;b=AAA();a.qJ=b;c=AK8(b);a.u1=c;b=new Sl;d=a.qJ;e=new Bg;e.ku=0;e.j_=Q(C,16);b.kn=e;b.kV=2147483647;b.yK=d;b.yW=c;a.zU=b;b=Dc.r2;FO(b);a:{try{Bf(b,a);DL(b);break a;}catch($$e){$$je=Z($$e);d=$$je;}DL(b);B(d);}if(a.qJ.state!=='running'?1:0){b=new Kp;b.zR=a;AAU(a.qJ,B5(b,"unlockFunction"));}else{if(!Jm&&Dc.pC>=2){if(BW===null){c=new CO;e=new Ck;ET(e);e.lL=BI(32);F1(c,e);c.lQ=En();c.lP=G(32);c.lR=0;c.lS=Cg;BW=c;}c=new K;c.j3=G(16);B$(c,c.j2,Cl(A(159)));B$(c,c.j2,Cl(A(81)));B$(c,
c.j2,Cl(A(160)));b=new I;f=c.j3;g=f.data;h=c.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);BX(Bw(b));BX("\n");}else{b=new H;b.j5=1;b.j6=1;B(b);}}Jm=1;}},
AQW=()=>{let a=new V$();AQz(a);return a;},
AOT=a=>{a.u1.disconnect(a.qJ.destination);},
AKj=a=>{a.u1.connect(a.qJ.destination);},
AAU=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
AAA=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
AK8=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function Ov(){DH.call(this);this.yh=null;}
let UG=F(BF);
function CB(){Dj.call(this);this.kG=null;}
let H=F(Bz);
let AAI=a=>{a.j5=1;a.j6=1;},
Fo=()=>{let a=new H();AAI(a);return a;},
AGi=(a,b)=>{a.j5=1;a.j6=1;a.j7=b;},
Nc=a=>{let b=new H();AGi(b,a);return b;};
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
let ALJ=(a,b)=>{b=a.S(b);BD();return b===null?null:b instanceof FM()&&b instanceof EK?(b[Br]===true?b:b.kI):b;},
APi=(a,b,c)=>{a.eQ(U(b),Du(c,"handleEvent"));},
AOy=(a,b,c)=>{a.eR(U(b),Du(c,"handleEvent"));},
ALv=(a,b,c,d)=>{a.eS(U(b),Du(c,"handleEvent"),d?1:0);},
ARr=(a,b)=>{return !!a.eT(b);},
AAY=a=>{return a.eU();},
Xf=(a,b,c,d)=>{a.eV(U(b),Du(c,"handleEvent"),d?1:0);};
let LM=F();
function JT(){let a=this;LM.call(a);a.tu=0;a.pj=null;a.wH=0.0;a.tJ=0;a.rV=0;a.rs=0;a.x0=0;}
let Wl=null,QO=null;
let KO=(a,b)=>{let c,d,e;a.rs=(-1);if(b<0){c=new Bk;c.j5=1;c.j6=1;B(c);}a.tu=0;if(!b)b=1;d=Q(IG,b);e=d.data;a.pj=d;b=e.length;a.rV=b;a.wH=0.75;a.tJ=b*0.75|0;},
AVk=a=>{let b=new JT();KO(b,a);return b;},
Dv=(a,b,c)=>{let d,e,f,g,h,i,j;FO(a);try{if(b!==null&&c!==null){a:{if(!b.lW){d=0;while(true){if(d>=b.j4.length)break a;b.lW=(31*b.lW|0)+b.j4.charCodeAt(d)|0;d=d+1|0;}}}e=b.lW&2147483647;f=a.pj.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.w7;if(!b.lW){i=0;while(true){if(i>=b.j4.length)break b;b.lW=(31*b.lW|0)+b.j4.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.lW&&h.m1.cN(b)?1:0)break;h=h.sT;}if(h!==null){j=h.m2;h.m2=c;return j;}a.x0=a.x0+1|0;d=a.tu+1|0;a.tu=d;if(d>a.tJ){AI$(a);g=e%a.pj.data.length|0;}if(g<a.rV)a.rV
=g;if(g>a.rs)a.rs=g;c:{j=new IG;j.m1=b;j.m2=c;if(!b.lW){d=0;while(true){if(d>=b.j4.length)break c;b.lW=(31*b.lW|0)+b.j4.charCodeAt(d)|0;d=d+1|0;}}}j.w7=b.lW;f=a.pj.data;j.sT=f[g];f[g]=j;return null;}b=new Df;b.j5=1;b.j6=1;B(b);}finally{DL(a);}},
AI$=a=>{let b,c,d,e,f,g,h,i,j;b=(a.pj.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Q(IG,b);e=d.data;f=a.rs+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.rV)break;h=a.pj.data[f];while(h!==null){i=(h.m1.cT()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.sT;h.sT=e[i];e[i]=h;h=j;}}a.rV=g;a.rs=c;a.pj=d;a.tJ=e.length*a.wH|0;},
AXF=()=>{Wl=new Km;QO=new Kl;};
function MV(){JT.call(this);this.zI=null;}
let AFF=F();
let GB=F(BG);
let JM=null,Jt=null,LH=null,Sw=null,ANd=null;
let AJi=()=>{let b,c,d,e;b=new GB;b.kk=A(161);b.ke=0;JM=b;c=new GB;c.kk=A(162);c.ke=1;Jt=c;d=new GB;d.kk=A(157);d.ke=2;LH=d;e=new GB;e.kk=A(163);e.ke=3;Sw=e;ANd=T(GB,[b,c,d,e]);};
let DJ=F();
let ACJ=F(DJ);
let ABW=F(DJ);
let AHr=F(DJ);
let AKH=F(DJ);
let AFY=F(DJ);
function Lr(){C.call(this);this.zw=null;}
let AGV=(a,b)=>{b.preventDefault();};
function Ls(){C.call(this);this.z9=null;}
let ASq=(a,b)=>{b.preventDefault();};
function Lq(){let a=this;C.call(a);a.vI=null;a.vz=null;a.vW=null;}
let AJZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bg;e.ku=1;e.j_=Q(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=U(g.name);i=EY(h,46,h.j4.length-1|0);b=i==(-1)?A(68):Ch(h,i+1|0,h.j4.length);j=b.j4.toLowerCase();if(j!==b.j4)b=TG(j);if(Z6(b))j=FA;else{if(b===A(164))k=1;else if(!(A(164) instanceof I))k=0;else{j=A(164);k=b.j4!==j.j4?0:1;}b:{if(!k){if(b===A(165))k=1;else if(!(A(165) instanceof I))k=0;else{j=A(165);k=b.j4!==j.j4?0:1;}if(!k){if(b===A(166))k
=1;else if(!(A(166) instanceof I))k=0;else{j=A(166);k=b.j4!==j.j4?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?Fi:!AGd(b)?Fp:FJ;}l=new FileReader();b=new MD;b.sX=a;b.t0=j;b.vm=h;b.r$=e;b.vq=d;l.addEventListener("load",B5(b,"handleEvent"));if(j!==Fp&&j!==Fi){if(j===FA)l.readAsDataURL(g);else if(j===FJ)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AMB=(a,b)=>{AJZ(a,b);};
function Sl(){let a=this;Dj.call(a);a.yK=null;a.yW=null;}
let US=F(0);
function Kp(){C.call(this);this.zR=null;}
let AC4=a=>{let b,c,d,e,f,g;if(!Jm&&Dc.pC>=2){if(BW===null){b=new CO;Vx(b,AP8(32),0);BW=b;}b=new K;b.j3=G(16);Ec(b,b.j2,A(159));Ec(b,b.j2,A(81));Ec(b,b.j2,A(160));c=new I;d=b.j3;e=d.data;f=b.j2;g=e.length;if(f>=0&&f<=(g-0|0)){c.j4=L(d.data,0,f);BX(Bw(c));BX("\n");}else B(Fo());}Jm=1;};
let ABG=F(DJ);
function Ry(){let a=this;C.call(a);a.k8=null;a.mh=0;a.tO=null;a.vG=0;a.qC=0;a.oS=0;a.mE=0;a.wL=null;}
let Kv=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new KH;d.lZ=Q(C,10);e=QL(a,b);f=0;g=0;if(!b.j4.length){h=Q(I,1);h.data[0]=A(68);return h;}a:{while(true){if(!Q6(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.oe;if(!j.oL){b=new BN;b.j5=1;b.j6=1;Bi(b);B(b);}if(0>=j.p6){b=new H;d=new K;Bt(d);d.j3=G(16);J(d,d.j2,0,10);e=new I;h=d.j3;k=h.data;f=d.j2;g=k.length;if(f>=0&&f<=(g-0|0)){e.j4=L(h.data,0,f);b.j5=1;b.j6=1;b.j7=e;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}j=Ch(b,g,j.l0.data[0]);G3(d,d.lc+1|0);h=d.lZ.data;f=d.lc;d.lc=f+1|0;h[f]
=j;d.mM=d.mM+1|0;j=e.oe;if(!j.oL)break;if(0>=j.p6){b=new H;d=new K;Bt(d);d.j3=G(16);J(d,d.j2,0,10);e=new I;h=d.j3;k=h.data;f=d.j2;g=k.length;if(f>=0&&f<=(g-0|0)){e.j4=L(h.data,0,f);b.j5=1;b.j6=1;b.j7=e;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}g=j.l0.data[1];f=i;}b=new BN;b.j5=1;b.j6=1;Bi(b);B(b);}b:{b=Ch(b,g,b.j4.length);G3(d,d.lc+1|0);h=d.lZ.data;i=d.lc;d.lc=i+1|0;h[i]=b;d.mM=d.mM+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.lc)break;if(d.lZ.data[f].j4.length)break b;Ut(d,f);}b=new H;b.j5
=1;b.j6=1;B(b);}}if(f<0)f=0;return ADg(d,Q(I,f));},
IK=(b,c)=>{let d;if(b===null){b=new Df;b.j5=1;b.j6=1;b.j7=A(167);B(b);}if(c&&(c|255)!=255){b=new Bk;b.j5=1;b.j6=1;b.j7=A(68);B(b);}O=1;d=new Ry;d.tO=Q(Dt,10);d.qC=(-1);d.oS=(-1);d.mE=(-1);return AD4(d,b,c);},
AD4=(a,b,c)=>{let d,e,f;a.k8=ADC(b,c);a.mh=c;b=We(a,(-1),c,null);a.wL=b;d=a.k8;if(!d.lK&&!d.kq&&d.ko==d.mp&&!(d.lg===null?0:1)?1:0){if(a.vG)b.e4();return a;}b=new Cj;e=d.lF;f=d.m8;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=A(68);b.lE=e;b.kO=f;B(b);},
ARP=(a,b)=>{let c,d,e,f,g,h;c=new CH;d=a.mh;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bm;g.kl=X(64);c.kp=g;g=new Bm;g.kl=X(2);c.kr=g;c.sK=e;c.tw=f;while(true){h=a.k8;d=h.lK;if(!d&&!h.kq&&h.ko==h.mp&&!(h.lg===null?0:1)?1:0)break;f=!d&&!h.kq&&h.ko==h.mp&&!(h.lg===null?0:1)?1:0;if(!(!f&&!(h.lg===null?0:1)&&(d<0?0:1)?1:0))break;f=h.kq;if(f&&f!=(-536870788)&&f!=(-536870871))break;By(h);C4(c,h.oG);g=a.k8;if(g.lK!=(-536870788))continue;By(g);}g=L5(a,c);g.e8(b);return g;},
We=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new KH;e.lZ=Q(C,10);f=a.mh;g=0;if(c!=f)a.mh=c;a:{switch(b){case -1073741784:h=new R5;i=a.mE+1|0;a.mE=i;DZ();c=O;O=c+1|0;d=new Bc;d.j3=G(20);h.km=(J(d,d.j2,c,10)).T();h.l7=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Qt;i=a.mE+1|0;a.mE=i;DZ();c=O;O=c+1|0;d=new Bc;d.j3=G(20);h.km=(J(d,d.j2,c,10)).T();h.l7=i;break a;case -33554392:h=new SN;i=a.mE+1|0;a.mE=i;DZ();c=O;O=c+1|0;d=new Bc;d.j3=G(20);h.km=(J(d,d.j2,c,10)).T();h.l7=i;break a;default:i
=a.qC+1|0;a.qC=i;if(d!==null){h=new Dt;DZ();c=O;O=c+1|0;d=new Bc;d.j3=G(20);h.km=(J(d,d.j2,c,10)).T();h.l7=i;}else{h=new Gv;DZ();j=O;O=j+1|0;d=new Bc;d.j3=G(20);h.km=(J(d,d.j2,j,10)).T();h.l7=0;g=1;}c=a.qC;if(c<=(-1))break a;if(c>=10)break a;a.tO.data[c]=h;break a;}h=new V_;DZ();j=O;O=j+1|0;d=new Bc;d.j3=G(20);h.km=(J(d,d.j2,j,10)).T();h.l7=(-1);}while(true){k=a.k8;l=k.lK;j=!l&&!k.kq&&k.ko==k.mp&&!(k.lg===null?0:1)?1:0;j=!j&&!(k.lg===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.kq==(-536870788))k=ARP(a,h);else if(l==(-536870788))
{k=new Fe;j=O;O=j+1|0;d=new Bc;d.j3=G(20);k.km=(J(d,d.j2,j,10)).T();k.kd=h;k.kT=1;k.lt=1;k.kT=0;By(a.k8);}else{k=P2(a,h);d=a.k8;if(d.lK==(-536870788))By(d);}if(k!==null){G3(e,e.lc+1|0);m=e.lZ.data;l=e.lc;e.lc=l+1|0;m[l]=k;e.mM=e.mM+1|0;}k=a.k8;j=k.lK;if(!j&&!k.kq&&k.ko==k.mp&&!(k.lg===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.oG==(-536870788)){k=new Fe;c=O;O=c+1|0;d=new Bc;d.j3=G(20);k.km=(J(d,d.j2,c,10)).T();k.kd=h;k.kT=1;k.lt=1;k.kT=0;G3(e,e.lc+1|0);m=e.lZ.data;j=e.lc;e.lc=j+1|0;m[j]=k;e.mM=e.mM+
1|0;}if(a.mh!=f&&!g){a.mh=f;k=a.k8;k.ly=f;k.kq=k.lK;k.oa=k.lg;j=k.m8;k.ko=j+1|0;k.rm=j;By(k);}switch(b){case -1073741784:break;case -536870872:d=new Oh;b=O;O=b+1|0;k=new Bc;Bt(k);k.j3=G(20);d.km=(J(k,k.j2,b,10)).T();d.lO=e;d.mG=h;d.lx=h.l7;return d;case -268435416:d=new U$;b=O;O=b+1|0;k=new Bc;Bt(k);k.j3=G(20);d.km=(J(k,k.j2,b,10)).T();d.lO=e;d.mG=h;d.lx=h.l7;return d;case -134217688:d=new RC;b=O;O=b+1|0;k=new Bc;Bt(k);k.j3=G(20);d.km=(J(k,k.j2,b,10)).T();d.lO=e;d.mG=h;d.lx=h.l7;return d;case -67108824:k=new S$;b
=O;O=b+1|0;d=new Bc;Bt(d);d.j3=G(20);k.km=(J(d,d.j2,b,10)).T();k.lO=e;k.mG=h;k.lx=h.l7;return k;case -33554392:d=new Eo;b=O;O=b+1|0;k=new Bc;k.j3=G(20);d.km=(J(k,k.j2,b,10)).T();d.lO=e;d.mG=h;d.lx=h.l7;return d;default:c=e.lc;switch(c){case 0:d=new Fe;b=O;O=b+1|0;e=new Bc;e.j3=G(20);d.km=(J(e,e.j2,b,10)).T();d.kd=h;d.kT=1;d.lt=1;d.kT=0;return d;case 1:d=new Gk;if(0>=c){d=new H;d.j5=1;d.j6=1;B(d);}e=e.lZ.data[0];b=O;O=b+1|0;k=new Bc;k.j3=G(20);d.km=(J(k,k.j2,b,10)).T();d.mY=e;d.mG=h;d.lx=h.l7;return d;default:}d
=new Cn;b=O;O=b+1|0;k=new Bc;k.j3=G(20);d.km=(J(k,k.j2,b,10)).T();d.lO=e;d.mG=h;d.lx=h.l7;return d;}k=new J0;j=O;O=j+1|0;d=new Bc;d.j3=G(20);k.km=(J(d,d.j2,j,10)).T();k.lO=e;k.mG=h;k.lx=h.l7;return k;},
AN9=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Pj;b.j3=G(16);while(true){c=a.k8;d=c.lK;if(!d&&!c.kq&&c.ko==c.mp&&!(c.lg===null?0:1)?1:0)break;e=!d&&!c.kq&&c.ko==c.mp&&!(c.lg===null?0:1)?1:0;if(!(!e&&!(c.lg===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.oa;d=f===null?0:1;if(!(!d&&!c.kq)){d=f===null?0:1;if(!(!d&&(c.kq<0?0:1))){g=c.kq;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}By(c);e=c.oG;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.j2;Bj(b,e,e+1|0);b.j3.data[e]=d;}else{h=(E6(e)).data;d=0;e=h.length;g=b.j2;Bj(b,g,g+e|0);i=e+d|0;while(d<i){j=b.j3.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.mh;if(!((e&2)!=2?0:1))return AGC(b);if(!((e&64)!=64?0:1)){c=new OK;d=O;O=d+1|0;f=new Bc;f.j3=G(20);c.km=(J(f,f.j2,d,10)).T();c.kT=1;f=new I;h=b.j3;j=h.data;e=b.j2;g=j.length;if(e>=0&&e<=(g-0|0)){f.j4=L(h.data,0,e);c.qo=f;c.kT=b.j2;return c;}b=new H;b.j5=1;b.j6=1;B(b);}c=new Ob;d=O;O=d+1|0;f=new Bc;f.j3=G(20);c.km=(J(f,f.j2,d,10)).T();c.kT
=1;f=new K;f.j3=G(16);e=0;while(true){d=BU(e,b.j2);if(d>=0){b=new I;h=f.j3;j=h.data;g=f.j2;d=j.length;if(g>=0&&g<=(d-0|0)){b.j4=L(h.data,0,g);c.rt=b;c.kT=f.j2;return c;}b=new H;b.j5=1;b.j6=1;B(b);}if(e<0)break;if(d>=0)break;d=b.j3.data[e];if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}d=Cv(BZ,d)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}i=Cv(B0,d)&65535;g=f.j2;Bj(f,g,g+1|0);f.j3.data[g]=i;e=e+1|0;}b=new H;b.j5=1;b.j6=1;B(b);},
AOr=a=>{let b,c,d,e,f,g,h,i,j;b=X(4);c=(-1);d=(-1);e=a.k8;f=e.lK;if(!(!f&&!e.kq&&e.ko==e.mp&&!(e.lg===null?0:1)?1:0)){g=!f&&!e.kq&&e.ko==e.mp&&!(e.lg===null?0:1)?1:0;if(!g&&!(e.lg===null?0:1)&&(f<0?0:1)?1:0){h=b.data;By(e);c=e.oG;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.k8;i=e.lK;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;By(e);e=a.k8;i=e.lK;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;By(e);e=new Ix;c=O;O=c+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,c,10)).T();e.ov=h;e.rF=3;return e;}e=new Ix;c
=O;O=c+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,c,10)).T();e.ov=h;e.rF=2;return e;}i=a.mh;if(!((i&2)!=2?0:1)){e=new Eb;i=b[0];c=O;O=c+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,c,10)).T();e.kT=1;e.mz=i;return e;}if(!((i&64)!=64?0:1)){e=new Ka;i=b[0];c=O;O=c+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,c,10)).T();e.kT=1;e.ta=i;e.tB=F9(i);return e;}e=new Nz;i=b[0];c=O;O=c+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,c,10)).T();e.kT=1;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}i=Cv(BZ,i)&65535;if
(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}e.r0=Cv(B0,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.k8;g=e.lK;if(!g&&!e.kq&&e.ko==e.mp&&!(e.lg===null?0:1)?1:0)break;i=!g&&!e.kq&&e.ko==e.mp&&!(e.lg===null?0:1)?1:0;if(!(!i&&!(e.lg===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;By(e);h[c]=e.oG;c=i;}if(c==1){i=h[0];if(!(ZS.er(i)==AOK?0:1))return V8(a,h[0]);}d=a.mh;if(!((d&2)!=2?0:1)){e=new Fs;i=O;O=i+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,i,10)).T();e.pv=1;e.pd=b;e.o$=c;return e;}if
((d&64)!=64?0:1){e=new V2;i=O;O=i+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,i,10)).T();e.pv=1;e.pd=b;e.o$=c;return e;}e=new Tx;i=O;O=i+1|0;j=new Bc;j.j3=G(20);e.km=(J(j,j.j2,i,10)).T();e.pv=1;e.pd=b;e.o$=c;return e;},
P2=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.k8;d=c.lK;e=!d&&!c.kq&&c.ko==c.mp&&!(c.lg===null?0:1)?1:0;e=!e&&!(c.lg===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.oa===null?0:1)&&(c.kq<0?0:1)){if(!((a.mh&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AN9(a):NE(a,b,V0(a,b));}else{f=AOr(a);g=a.k8;e=g.lK;if(!(!e&&!g.kq&&g.ko==g.mp&&!(g.lg===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof Gv))&&e!=(-536870788)){h=!e&&!g.kq&&g.ko==g.mp&&!(g.lg===null?0:1)?1:0;if(!(!h&&!(g.lg===null?0:1)&&(e<0?0:1)?1:0))f
=NE(a,b,f);}}}else if(d!=(-536870871))f=NE(a,b,V0(a,b));else{if(b instanceof Gv){b=new Cj;g=c.lF;h=c.m8;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=A(68);b.lE=g;b.kO=h;B(b);}f=new Fe;e=O;O=e+1|0;c=new Bc;c.j3=G(20);f.km=(J(c,c.j2,e,10)).T();f.kd=b;f.kT=1;f.lt=1;f.kT=0;}c=a.k8;d=c.lK;e=!d&&!c.kq&&c.ko==c.mp&&!(c.lg===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof Gv))&&d!=(-536870788)){g=P2(a,b);if(f instanceof DC&&!(f instanceof Fn)&&!(f instanceof DE)&&!(f instanceof Fl)){b=f;if(!g.fm(b.kL)){f=new Vl;c=b.kL;i=b.kd;j
=b.lt;e=O;O=e+1|0;b=new Bc;b.j3=G(20);f.km=(J(b,b.j2,e,10)).T();f.kd=i;f.kL=c;f.lt=j;f.le=c;c.e8(f);}}if((g.fn()&65535)!=43)f.e8(g);else f.e8(g.kL);}else{if(f===null)return null;f.e8(b);}if((f.fn()&65535)!=43)return f;return f.kL;},
NE=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.k8;e=d.lK;if(c!==null&&!(c instanceof Cx)){switch(e){case -2147483606:By(d);d=new Wv;f=O;O=f+1|0;g=new Bc;g.j3=G(20);d.km=(J(g,g.j2,f,10)).T();d.kd=b;d.kL=c;d.lt=e;DZ();c.e8(H0);return d;case -2147483605:By(d);d=new Qp;h=O;O=h+1|0;g=new Bc;g.j3=G(20);d.km=(J(g,g.j2,h,10)).T();d.kd=b;d.kL=c;d.lt=(-2147483606);DZ();c.e8(H0);return d;case -2147483585:By(d);d=new P_;h=O;O=h+1|0;g=new Bc;Bt(g);g.j3=G(20);d.km=(J(g,g.j2,h,10)).T();d.kd=b;d.kL=c;d.lt=(-536870849);DZ();c.e8(H0);return d;case -2147483525:g
=new OH;i=d.lg;By(d);d=i;f=a.oS+1|0;a.oS=f;j=O;O=j+1|0;i=new Bc;Bt(i);i.j3=G(20);g.km=(J(i,i.j2,j,10)).T();g.kd=b;g.kL=c;g.lt=(-536870849);g.n6=d;g.ne=f;DZ();c.e8(H0);return g;case -1073741782:case -1073741781:By(d);d=new RW;f=O;O=f+1|0;g=new Bc;g.j3=G(20);d.km=(J(g,g.j2,f,10)).T();d.kd=b;d.kL=c;d.lt=e;c.e8(d);return d;case -1073741761:By(d);d=new Q7;h=O;O=h+1|0;g=new Bc;Bt(g);g.j3=G(20);d.km=(J(g,g.j2,h,10)).T();d.kd=b;d.kL=c;d.lt=(-536870849);c.e8(b);return d;case -1073741701:g=new Ub;i=d.lg;By(d);d=i;h=a.oS
+1|0;a.oS=h;j=O;O=j+1|0;i=new Bc;Bt(i);i.j3=G(20);g.km=(J(i,i.j2,j,10)).T();g.kd=b;g.kL=c;g.lt=(-536870849);g.n6=d;g.ne=h;c.e8(g);return g;case -536870870:case -536870869:By(d);if(c.fn()!=(-2147483602)){d=new DE;f=O;O=f+1|0;g=new Bc;g.j3=G(20);d.km=(J(g,g.j2,f,10)).T();d.kd=b;d.kL=c;d.lt=e;}else{h=a.mh;if((h&32)!=32?0:1){d=new RX;f=O;O=f+1|0;g=new Bc;g.j3=G(20);d.km=(J(g,g.j2,f,10)).T();d.kd=b;d.kL=c;d.lt=e;}else{d=new Pt;if(!(h&1)){g=F$;if(g===null){g=new JB;F$=g;}}else{g=Gm;if(g===null){g=new JA;Gm=g;}}f=
O;O=f+1|0;i=new Bc;i.j3=G(20);d.km=(J(i,i.j2,f,10)).T();d.kd=b;d.kL=c;d.lt=e;d.sq=g;}}c.e8(d);return d;case -536870849:By(d);d=new GR;h=O;O=h+1|0;g=new Bc;g.j3=G(20);d.km=(J(g,g.j2,h,10)).T();d.kd=b;d.kL=c;d.lt=(-536870849);c.e8(b);return d;case -536870789:g=new Gb;i=d.lg;By(d);d=i;h=a.oS+1|0;a.oS=h;j=O;O=j+1|0;i=new Bc;i.j3=G(20);g.km=(J(i,i.j2,j,10)).T();g.kd=b;g.kL=c;g.lt=(-536870849);g.n6=d;g.ne=h;c.e8(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:By(d);d
=new Wx;f=O;O=f+1|0;c=new Bc;c.j3=G(20);d.km=(J(c,c.j2,f,10)).T();d.kd=b;d.kL=i;d.lt=e;d.le=i;i.kd=d;return d;case -2147483585:By(d);c=new Vg;h=O;O=h+1|0;d=new Bc;Bt(d);d.j3=G(20);c.km=(J(d,d.j2,h,10)).T();c.kd=b;c.kL=i;c.lt=(-2147483585);c.le=i;return c;case -2147483525:c=new P1;g=d.lg;By(d);d=g;h=O;O=h+1|0;g=new Bc;Bt(g);g.j3=G(20);c.km=(J(g,g.j2,h,10)).T();c.kd=b;c.kL=i;c.lt=(-2147483525);c.le=i;c.pF=d;return c;case -1073741782:case -1073741781:By(d);d=new QZ;f=O;O=f+1|0;c=new Bc;c.j3=G(20);d.km=(J(c,c.j2,
f,10)).T();d.kd=b;d.kL=i;d.lt=e;d.le=i;i.kd=d;return d;case -1073741761:By(d);c=new TA;h=O;O=h+1|0;d=new Bc;Bt(d);d.j3=G(20);c.km=(J(d,d.j2,h,10)).T();c.kd=b;c.kL=i;c.lt=(-1073741761);c.le=i;return c;case -1073741701:c=new RD;g=d.lg;By(d);d=g;h=O;O=h+1|0;g=new Bc;Bt(g);g.j3=G(20);c.km=(J(g,g.j2,h,10)).T();c.kd=b;c.kL=i;c.lt=(-1073741701);c.le=i;c.pF=d;return c;case -536870870:case -536870869:By(d);d=new DC;f=O;O=f+1|0;c=new Bc;c.j3=G(20);d.km=(J(c,c.j2,f,10)).T();d.kd=b;d.kL=i;d.lt=e;d.le=i;i.kd=d;return d;case -536870849:By(d);c
=new Fl;h=O;O=h+1|0;d=new Bc;d.j3=G(20);c.km=(J(d,d.j2,h,10)).T();c.kd=b;c.kL=i;c.lt=(-536870849);c.le=i;return c;case -536870789:c=new Fn;g=d.lg;By(d);d=g;h=O;O=h+1|0;g=new Bc;g.j3=G(20);c.km=(J(g,g.j2,h,10)).T();c.kd=b;c.kL=i;c.lt=(-536870789);c.le=i;c.pF=d;return c;default:}return c;},
V0=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof Gv;while(true){a:{e=a.k8;f=e.lK;if((f&(-2147418113))==(-2147483608)){By(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.mh=g;else{if(f!=(-1073741784))g=a.mh;c=We(a,f,g,b);e=a.k8;if(e.lK!=(-536870871)){b=new Cj;h=e.lF;i=e.m8;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=A(68);b.lE=h;b.kO=i;B(b);}By(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.qC<j){c=new Cj;h=e.lF;i=e.m8;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=h;c.kO=i;B(c);}By(e);g=a.mE+1|0;a.mE=g;i=a.mh;if(!((i&2)!=2?0:1)){c=new Vp;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.q6=j;c.pM=g;}else if(!((i&64)!=64?0:1)){c=new GH;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.q6=j;c.pM=g;}else{c=new Rw;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.q6=j;c.pM=g;}a.tO.data[j].tL=1;a.vG=1;break a;case -2147483583:break;case -2147483582:By(e);c
=new K9;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.u3=0;break a;case -2147483577:By(e);c=new Pn;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();break a;case -2147483558:By(e);c=new Nx;j=a.mE+1|0;a.mE=j;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.qi=j;break a;case -2147483550:By(e);c=new K9;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.u3=1;break a;case -2147483526:By(e);c=new Vv;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();break a;case -536870876:break b;case -536870866:By(e);i
=a.mh;if((i&32)!=32?0:1){c=new Vr;i=O;O=i+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,i,10)).T();break a;}c=new PV;if(!(i&1)){h=F$;if(h===null){h=new JB;F$=h;}}else{h=Gm;if(h===null){h=new JA;Gm=h;}}k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.uj=h;break a;case -536870821:By(e);i=0;c=a.k8;if(c.lK==(-536870818)){i=1;By(c);}c=L5(a,G6(a,i));c.e8(b);h=a.k8;k=h.lK;if(k!=(-536870819)){b=new Cj;e=h.lF;i=h.m8;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=A(68);b.lE=e;b.kO=i;B(b);}h.od=1;h.kq=k;h.oa=h.lg;h.ko=h.rm;h.rm=h.m8;By(h);By(a.k8);break a;case -536870818:break c;case 0:c
=e.lg;h=c;if(h!==null)c=L5(a,h);else{if(!f&&!e.kq&&e.ko==e.mp&&!(c===null?0:1)?1:0){c=new Fe;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.kd=b;c.kT=1;c.lt=1;c.kT=0;break a;}c=new Eb;j=f&65535;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.kT=1;c.mz=j;}By(a.k8);break a;default:if(f>=0&&!(e.lg===null?0:1)){c=V8(a,f);By(a.k8);break a;}if(f==(-536870788)){c=new Fe;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.kd=b;c.kT=1;c.lt=1;c.kT=0;break a;}if(f!=(-536870871)){b=new Cj;c
=e.lg;if(c===null?0:1)c=c.T();else{k=f&65535;c=new I;l=G(1);m=l.data;m[0]=k;c.j4=L(l.data,0,m.length);}e=a.k8;h=e.lF;i=e.m8;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=c;b.lE=h;b.kO=i;B(b);}if(d){b=new Cj;h=e.lF;i=e.m8;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=A(68);b.lE=h;b.kO=i;B(b);}c=new Fe;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.kd=b;c.kT=1;c.lt=1;c.kT=0;break a;}By(e);c=new LL;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();break a;}By(e);a.mE=a.mE+1|0;i=a.mh;if(!((i&8)!=8?0:1)){c=new LL;k=O;O=k+1|0;e
=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();break a;}c=new OO;if(!(i&1)){h=F$;if(h===null){h=new JB;F$=h;}}else{h=Gm;if(h===null){h=new JA;Gm=h;}}k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.wE=h;break a;}By(e);j=a.mE+1|0;a.mE=j;i=a.mh;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new SQ;i=O;O=i+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,i,10)).T();c.sM=j;}else{c=new Oe;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.qP=j;}}else if((i&1)!=1?0:1){c=new Vh;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,
e.j2,k,10)).T();c.sB=j;}else{c=new Nx;k=O;O=k+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,k,10)).T();c.qi=j;}}}if(f!=(-16777176))break;}return c;},
G6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new CH;d=a.mh;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bm;f.kl=X(64);c.kp=f;f=new Bm;f.kl=X(2);c.kr=f;c.sK=e;c.tw=d;EO(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.k8;b=k.lK;if(!b&&!k.kq&&k.ko==k.mp&&!(k.lg===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)C4(c,g);f=a.k8;By(f);g=f.oG;f=a.k8;if(f.lK!=(-536870874)){g=38;break d;}if(f.kq==(-536870821)){By(f);h=1;g=(-1);break d;}By(f);if(j){c=G6(a,0);break d;}if(a.k8.lK
==(-536870819))break d;VC(c,G6(a,0));break d;case -536870867:if(!j){b=k.kq;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){By(k);k=a.k8;d=k.lK;if(k.lg===null?0:1)break c;if(d<0){b=k.kq;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AFG(d))break e;d=d&65535;break e;}catch($$e){$$je=Z($$e);if($$je instanceof BF){break b;}else{throw $$e;}}}try{BT(c,g,d);}catch($$e){$$je=Z($$e);if($$je instanceof BF){break b;}else{throw $$e;}}By(a.k8);g=(-1);break d;}}if(g>=0)C4(c,g);g=45;By(a.k8);break d;case -536870821:if
(g>=0){C4(c,g);g=(-1);}By(a.k8);e=0;f=a.k8;if(f.lK==(-536870818)){By(f);e=1;}if(!h)W5(c,G6(a,e));else VC(c,G6(a,e));h=0;By(a.k8);break d;case -536870819:break;case -536870818:if(g>=0)C4(c,g);g=94;By(a.k8);break d;case 0:if(g>=0)C4(c,g);f=a.k8.lg;if(f===null)g=0;else{ATF(c,f);g=(-1);}By(a.k8);break d;default:if(g>=0)C4(c,g);f=a.k8;By(f);g=f.oG;break d;}if(g>=0)C4(c,g);g=93;By(a.k8);}j=0;}c=new Cj;l=k.lF;g=k.m8;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=l;c.kO=g;B(c);}c=new Cj;k=a.k8;l=k.lF;g=k.m8;c.j5=1;c.j6=1;c.kO
=(-1);c.lJ=A(68);c.lE=l;c.kO=g;B(c);}if(!i){if(g>=0)C4(c,g);return c;}c=new Cj;l=k.lF;b=k.m8-1|0;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=l;c.kO=b;B(c);},
V8=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.mh;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Ka;b=b&65535;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.kT=1;e.ta=b;e.tB=F9(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new N_;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.kT=1;e.kT=2;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null
?U(BL.value):null)));}e.ue=Cv(B0,b);return e;}if(b<=57343&&b>=56320?1:0){e=new HF;b=b&65535;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.oT=b;return e;}if(b<=56319&&b>=55296?1:0){e=new HL;b=b&65535;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.oD=b;return e;}e=new Nz;b=b&65535;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.kT=1;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value
!==null?U(BL.value):null)));}e.r0=Cv(B0,b)&65535;return e;}}if(c){e=new Eu;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.kT=1;e.kT=2;e.p1=b;h=(E6(b)).data;e.pQ=h[0];e.pm=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new HF;b=b&65535;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.oT=b;return e;}if(b<=56319&&b>=55296?1:0){e=new HL;b=b&65535;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.oD=b;return e;}e=new Eb;b=b&65535;f=O;O=f+1|0;g=new Bc;g.j3=G(20);e.km=(J(g,g.j2,f,10)).T();e.kT
=1;e.mz=b;return e;},
L5=(a,b)=>{let c,d,e,f,g,h;if(!AJs(b)){if(b.lk){if(!b.fw()){c=new DQ;d=O;O=d+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,d,10)).T();c.mH=b.fx();c.qp=b.kK;return c;}c=new Kd;d=O;O=d+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,d,10)).T();c.mH=b.fx();c.qp=b.kK;return c;}if(b.fw()){c=new KP;d=O;O=d+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,d,10)).T();c.kT=1;c.sv=b.fx();c.t$=b.kK;return c;}c=new Ed;d=O;O=d+1|0;e=new Bc;e.j3=G(20);c.km=(J(e,e.j2,d,10)).T();c.kT=1;c.nl=b.fx();c.uE=b.kK;return c;}c=Y9(b);e=new On;d=O;O=d+1|0;f=
new Bc;f.j3=G(20);e.km=(J(f,f.j2,d,10)).T();e.sr=c;e.tn=c.kK;if(b.lk){if(!b.fw()){c=new Hi;f=new DQ;b=Iv(b);d=O;O=d+1|0;g=new Bc;g.j3=G(20);f.km=(J(g,g.j2,d,10)).T();f.mH=b;f.qp=b.kK;d=O;O=d+1|0;b=new Bc;b.j3=G(20);c.km=(J(b,b.j2,d,10)).T();c.pH=f;c.py=e;return c;}c=new Hi;f=new Kd;g=Iv(b);h=O;O=h+1|0;b=new Bc;b.j3=G(20);f.km=(J(b,b.j2,h,10)).T();f.mH=g;f.qp=g.kK;d=O;O=d+1|0;b=new Bc;b.j3=G(20);c.km=(J(b,b.j2,d,10)).T();c.pH=f;c.py=e;return c;}if(b.fw()){c=new Hi;f=new KP;b=Iv(b);d=O;O=d+1|0;g=new Bc;g.j3=G(20);f.km
=(J(g,g.j2,d,10)).T();f.kT=1;f.sv=b;f.t$=b.kK;d=O;O=d+1|0;b=new Bc;b.j3=G(20);c.km=(J(b,b.j2,d,10)).T();c.pH=f;c.py=e;return c;}c=new Hi;f=new Ed;b=Iv(b);d=O;O=d+1|0;g=new Bc;g.j3=G(20);f.km=(J(g,g.j2,d,10)).T();f.kT=1;f.nl=b;f.uE=b.kK;d=O;O=d+1|0;b=new Bc;b.j3=G(20);c.km=(J(b,b.j2,d,10)).T();c.pH=f;c.py=e;return c;},
F9=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let Ns=F(0);
function SC(){let a=this;C.call(a);a.yO=null;a.xB=null;a.sA=null;a.oe=null;a.so=0;a.tZ=0;}
let Oi=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.sA.j4.length;if(b>=0&&b<=c){d=a.oe;d.oL=0;d.rI=2;e=d.l0.data;f=0;g=e.length;if(f>g){d=new Bk;R(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.lu.data;f=0;g=e.length;if(f>g){d=new Bk;R(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.om=d.mU;d.rI=1;d.om=b;c=d.rM;if(c<0)c=b;d.rM=c;b=a.xB.fA(b,a.sA,d);if(b==(-1))a.oe.mK=1;if(b>=0){d=a.oe;b=d.oL;if(b){e=d.l0.data;if(e[0]==(-1)){f=d.om;e[0]=f;e[1]=f;}if(!b){d=new BN;d.j5=1;d.j6=1;Bi(d);B(d);}if(0<d.p6){d.rM=e[1];return 1;}d=new H;i
=new K;Bt(i);i.j3=G(16);J(i,i.j2,0,10);j=new I;e=i.j3;k=e.data;c=i.j2;f=k.length;if(c>=0&&c<=(f-0|0)){j.j4=L(e.data,0,c);d.j5=1;d.j6=1;d.j7=j;B(d);}d=new H;d.j5=1;d.j6=1;B(d);}}a.oe.om=(-1);return 0;}d=new H;i=new K;i.j3=G(16);J(i,i.j2,b,10);j=new I;e=i.j3;k=e.data;c=i.j2;f=k.length;if(c>=0&&c<=(f-0|0)){j.j4=L(e.data,0,c);d.j5=1;d.j6=1;d.j7=j;B(d);}d=new H;d.j5=1;d.j6=1;B(d);},
Q6=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.sA.j4.length;c=a.oe;if(!c.sI)b=a.tZ;if(c.om>=0&&c.rI==1){d=c.oL;if(!d){c=new BN;c.j5=1;c.j6=1;B(c);}e=BU(0,c.p6);if(e>=0){c=new H;f=new K;f.j3=G(16);J(f,f.j2,0,10);g=new I;h=f.j3;i=h.data;b=f.j2;j=i.length;if(b>=0&&b<=(j-0|0)){g.j4=L(h.data,0,b);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}h=c.l0.data;k=h[1];c.om=k;if(!d){c=new BN;c.j5=1;c.j6=1;B(c);}if(e>=0){c=new H;f=new K;f.j3=G(16);J(f,f.j2,0,10);g=new I;h=f.j3;i=h.data;b=f.j2;j=i.length;if(b>=0&&b<=(j-0|0))
{g.j4=L(h.data,0,b);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}j=h[1];if(!d){c=new BN;c.j5=1;c.j6=1;B(c);}if(e<0){if(j==h[0])c.om=k+1|0;l=c.om;return l<=b&&Oi(a,l)?1:0;}c=new H;f=new K;f.j3=G(16);J(f,f.j2,0,10);g=new I;h=f.j3;i=h.data;b=f.j2;j=i.length;if(b>=0&&b<=(j-0|0)){g.j4=L(h.data,0,b);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}return Oi(a,a.so);},
WM=(a,b,c)=>{let d,e;a.so=(-1);a.tZ=(-1);a.yO=b;a.xB=b.wL;a.sA=c;a.so=0;d=c.j4.length;a.tZ=d;e=AQg(c,a.so,d,b.qC,b.oS+1|0,b.mE+1|0);a.oe=e;e.pr=1;},
QL=(a,b)=>{let c=new SC();WM(c,a,b);return c;};
let Z$=F();
let CL=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=Ps(AOV(b,c));}catch($$e){$$je=Z($$e);if($$je instanceof KJ){d=$$je;break a;}else if($$je instanceof Hj){d=$$je;break b;}else{throw $$e;}}return d;}e=new B7;if(b.kc===null)b.kc=U(b.kj.$meta.name);f=b.kc;b=new K;b.j3=G(16);D(b,b.j2,A(168));g=b.j2;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.j3;i=c.data;j=b.j2;k=i.length;if(j>=0&&j<=(k-0|0)){h.j4=L(c.data,0,j);e.j5=1;e.j6=1;e.j7=h;e.lq=d;B(e);}b=new H;b.j5=1;b.j6=1;B(b);}e=new B7;if(b.kc
===null)b.kc=U(b.kj.$meta.name);f=b.kc;b=new K;b.j3=G(16);D(b,b.j2,A(169));g=b.j2;if(f===null)f=A(2);D(b,g,f);D(b,b.j2,A(170));h=new I;c=b.j3;i=c.data;j=b.j2;k=i.length;if(j>=0&&j<=(k-0|0)){h.j4=L(c.data,0,j);e.j5=1;e.j6=1;e.j7=h;e.lq=d;B(e);}b=new H;b.j5=1;b.j6=1;B(b);}c=(ARY(b)).data;if(c.length<=0)b=null;else{b=new KS;b.lI=c[0];}return b;},
CJ=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=Ps(AOX(b,c));}catch($$e){$$je=Z($$e);if($$je instanceof KJ){d=$$je;break a;}else if($$je instanceof Hj){d=$$je;e=new B7;if(b.kc===null)b.kc=U(b.kj.$meta.name);f=b.kc;b=new K;b.j3=G(16);D(b,b.j2,A(168));g=b.j2;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.j3;i=c.data;j=b.j2;k=i.length;if(j>=0&&j<=(k-0|0)){h.j4=L(c.data,0,j);e.j5=1;e.j6=1;e.j7=h;e.lq=d;B(e);}b=new H;b.j5=1;b.j6=1;B(b);}else{throw $$e;}}return d;}e=new B7;if(b.kc===null)b.kc=U(b.kj.$meta.name);f=b.kc;b=new K;b.j3
=G(16);D(b,b.j2,A(171));g=b.j2;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.j3;i=c.data;k=b.j2;j=i.length;if(k>=0&&k<=(j-0|0)){h.j4=L(c.data,0,k);e.j5=1;e.j6=1;e.j7=h;e.lq=d;B(e);}b=new H;b.j5=1;b.j6=1;B(b);};
function KS(){C.call(this);this.lI=null;}
let AQR=(a,b)=>{a.lI=b;},
Ps=a=>{let b=new KS();AQR(b,a);return b;},
CN=(a,b)=>{return;},
CZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=Q(C,0);a:{b:{c:{try{c=AO$(a.lI,b);}catch($$e){$$je=Z($$e);if($$je instanceof Bk){c=$$je;break c;}else if($$je instanceof MB){c=$$je;break a;}else if($$je instanceof J_){c=$$je;break b;}else if($$je instanceof ON){c=$$je;d=new B7;e=a.lI.lH;if(e.kc===null)e.kc=U(e.kj.$meta.name);e=e.kc;f=new K;f.j3=G(16);D(f,f.j2,A(172));g=f.j2;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.j3;i=b.data;j=f.j2;k=i.length;if(j>=0&&j<=(k-0|0)){h.j4=L(b.data,0,j);d.j5=1;d.j6=1;d.j7=h;d.lq
=c;B(d);}c=new H;c.j5=1;c.j6=1;B(c);}else{throw $$e;}}return c;}d=new B7;e=a.lI.lH;if(e.kc===null)e.kc=U(e.kj.$meta.name);e=e.kc;f=new K;f.j3=G(16);D(f,f.j2,A(173));g=f.j2;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.j3;i=b.data;j=f.j2;k=i.length;if(j>=0&&j<=(k-0|0)){h.j4=L(b.data,0,j);d.j5=1;d.j6=1;d.j7=h;d.lq=c;B(d);}c=new H;c.j5=1;c.j6=1;B(c);}d=new B7;e=a.lI.lH;if(e.kc===null)e.kc=U(e.kj.$meta.name);e=e.kc;f=new K;f.j3=G(16);D(f,f.j2,A(174));g=f.j2;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.j3;i=b.data;j=f.j2;k
=i.length;if(j>=0&&j<=(k-0|0)){h.j4=L(b.data,0,j);d.j5=1;d.j6=1;d.j7=h;d.lq=c;B(d);}c=new H;c.j5=1;c.j6=1;B(c);}d=new B7;e=a.lI.lH;if(e.kc===null)e.kc=U(e.kj.$meta.name);e=e.kc;f=new K;f.j3=G(16);D(f,f.j2,A(174));g=f.j2;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.j3;i=b.data;j=f.j2;k=i.length;if(j>=0&&j<=(k-0|0)){h.j4=L(b.data,0,j);d.j5=1;d.j6=1;d.j7=h;d.lq=c;B(d);}c=new H;c.j5=1;c.j6=1;B(c);};
let B7=F(BF);
function EK(){C.call(this);this.kI=null;}
let AMC=null,MX=null,Hc=null,Ie=null,Qj=null,VO=null,PR=null;
let BD=()=>{BD=BQ(EK);ABb();};
let Cf=b=>{let c,d,e,f,g,h,i;BD();if(b===null)return null;c=b;d=U(typeof c);if(d===A(175))e=1;else if(!(A(175) instanceof I))e=0;else{f=A(175);e=d.j4!==f.j4?0:1;}a:{if(!e){if(d===A(176))e=1;else if(!(A(176) instanceof I))e=0;else{f=A(176);e=d.j4!==f.j4?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Br]===true)return b;b=MX;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EK;h.kI=c;MX.set(c,new WeakRef(h));return h;}if(d===A(177))e=1;else if
(!(A(177) instanceof I))e=0;else{b=A(177);e=d.j4!==b.j4?0:1;}if(e){f=Hc.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EK;h.kI=c;i=h;Hc.set(c,new WeakRef(i));OY(VO,i,c);return h;}if(d===A(178))e=1;else if(!(A(178) instanceof I))e=0;else{b=A(178);e=d.j4!==b.j4?0:1;}if(e){f=Ie.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EK;h.kI=c;i=h;Ie.set(c,new WeakRef(i));OY(PR,i,c);return h;}if(d===A(179))e=1;else if
(!(A(179) instanceof I))e=0;else{b=A(179);e=d.j4!==b.j4?0:1;}if(e){f=Qj;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EK;h.kI=c;Qj=new WeakRef(h);return h;}}b=new EK;b.kI=c;return b;},
ABb=()=>{AMC=new WeakMap();MX=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Hc=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();Ie=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();VO=Hc===null?null:new FinalizationRegistry(B5(new Ml,"accept"));PR=Ie===null?null:new FinalizationRegistry(B5(new Mk,"accept"));},
OY=(b,c,d)=>{return b.register(c,d);};
let Rc=F(0);
let Km=F();
let HQ=F(0);
let Kl=F();
function Ul(){let a=this;C.call(a);a.l0=null;a.lu=null;a.nI=null;a.qq=null;a.p6=0;a.oL=0;a.mU=0;a.kQ=0;a.om=0;a.sI=0;a.pr=0;a.mK=0;a.zY=0;a.rM=0;a.rI=0;}
let AKv=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.rM=(-1);h=e+1|0;a.p6=h;i=X(h*2|0);a.l0=i;j=X(g);k=j.data;a.lu=j;e=0;g=k.length;l=BU(e,g);if(l>0){b=new Bk;b.j5=1;b.j6=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.nI=X(f);i=i.data;h=0;m=i.length;e=BU(h,m);if(e>0){b=new Bk;b.j5=1;b.j6=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.oL=0;a.rI=2;f=0;if(e>0){b=new Bk;b.j5=1;b.j6=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bk;b.j5=1;b.j6=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.qq=b;if(c
>=0){a.mU=c;a.kQ=d;}a.om=a.mU;},
AQg=(a,b,c,d,e,f)=>{let g=new Ul();AKv(g,a,b,c,d,e,f);return g;};
let Cu=F(Bk);
let KJ=F(Bz);
let Ey=F(BF);
let Hj=F(Ey);
let Df=F(Bz);
function Cb(){let a=this;C.call(a);a.kd=null;a.mA=0;a.km=null;a.lt=0;}
let O=0;
let ACi=(a,b,c,d)=>{let e;e=d.kQ;while(true){if(b>e)return (-1);if(a.fI(b,c,d)>=0)break;b=b+1|0;}return b;},
AFf=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fI(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AUP=(a,b)=>{a.lt=b;},
AAn=a=>{return a.lt;},
AWh=a=>{let b,c,d,e,f,g,h,i;b=a.km;c=a.fJ();d=new K;d.j3=G(16);e=d.j2;Bj(d,e,e+1|0);d.j3.data[e]=60;f=d.j2;if(b===null)b=A(2);D(d,f,b);e=d.j2;Bj(d,e,e+1|0);d.j3.data[e]=58;f=d.j2;if(c===null)c=A(2);D(d,f,c);e=d.j2;Bj(d,e,e+1|0);g=d.j3;h=g.data;h[e]=62;b=new I;e=d.j2;i=h.length;if(e>=0&&e<=(i-0|0)){b.j4=L(g.data,0,e);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
ANY=a=>{let b,c,d,e,f,g,h,i;b=a.km;c=a.fJ();d=new K;d.j3=G(16);e=d.j2;Bj(d,e,e+1|0);d.j3.data[e]=60;f=d.j2;if(b===null)b=A(2);D(d,f,b);e=d.j2;Bj(d,e,e+1|0);d.j3.data[e]=58;f=d.j2;if(c===null)c=A(2);D(d,f,c);e=d.j2;Bj(d,e,e+1|0);g=d.j3;h=g.data;h[e]=62;b=new I;e=d.j2;i=h.length;if(e>=0&&e<=(i-0|0)){b.j4=L(g.data,0,e);return b;}b=new H;R(b);B(b);},
AW1=a=>{return a.kd;},
AQA=(a,b)=>{a.kd=b;},
AQy=(a,b)=>{return 1;},
ASf=a=>{return null;},
Ih=a=>{let b;a.mA=1;b=a.kd;if(b!==null){if(!b.mA){b=b.fK();if(b!==null){a.kd.mA=1;a.kd=b;}a.kd.e4();}else if(b instanceof Gk&&b.mG.tL)a.kd=b.kd;}},
AXI=()=>{O=1;};
let MR=F();
let AR1=F();
let AEk=F();
let ATK=F();
let KZ=F(0);
let Ml=F();
let AQI=(a,b)=>{let c;BD();b=b===null?null:b instanceof FM()?b:Cf(b);c=Hc;b=b===null?null:b[Br]===true?b:b.kI;c.delete(b);};
let AFU=F();
let Mk=F();
let YT=(a,b)=>{let c;BD();b=b===null?null:b instanceof FM()?b:Cf(b);c=Ie;b=b===null?null:b[Br]===true?b:b.kI;c.delete(b);};
let N5=F(0);
function Hv(){let a=this;C.call(a);a.m1=null;a.m2=null;}
function IG(){let a=this;Hv.call(a);a.sT=null;a.w7=0;}
function Dt(){let a=this;Cb.call(a);a.tL=0;a.l7=0;}
let H0=null;
let DZ=()=>{DZ=BQ(Dt);ADs();};
let Zg=(a,b,c,d)=>{let e,f,g;e=a.l7;f=d.l0.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.kd.fI(b,c,d);if(g<0){b=a.l7;d.l0.data[(b*2|0)+1|0]=e;}return g;},
AWc=a=>{return a.l7;},
AFP=a=>{return A(180);},
ZY=(a,b)=>{return 0;},
ADs=()=>{let b,c,d;b=new Pk;c=O;O=c+1|0;d=new Bc;d.j3=G(20);b.km=(J(d,d.j2,c,10)).T();H0=b;};
function To(){let a=this;C.call(a);a.lG=null;a.ly=0;a.od=0;a.xE=0;a.oG=0;a.lK=0;a.kq=0;a.mp=0;a.lg=null;a.oa=null;a.ko=0;a.lp=0;a.m8=0;a.rm=0;a.lF=null;}
let QD=null,ZS=null,AOK=0;
let AQC=(a,b,c)=>{let d,e,f,g,h,i,j;a.od=1;a.lF=b;if((c&16)>0){d=new K;d.j3=G(16);D(d,d.j2,A(181));e=0;while(true){f=Qr(b,A(182),e);if(f<0)break;g=f+2|0;h=Ch(b,e,g);D(d,d.j2,h);D(d,d.j2,A(183));e=g;}b=Ch(b,e,b.j4.length);D(d,d.j2,b);D(d,d.j2,A(182));b=new I;i=d.j3;j=i.data;e=d.j2;f=j.length;if(e>=0&&e<=(f-0|0))b.j4=L(i.data,0,e);else{b=new H;b.j5=1;b.j6=1;B(b);}}a.lG=G(b.j4.length+2|0);j=G(b.j4.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Di(j,0,a.lG,0,b.j4.length);i=a.lG.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.mp=g;a.ly=c;By(a);By(a);return;}if(e<0)break;if(e>=b.j4.length)break;i[e]=b.j4.charCodeAt(e);e=e+1|0;}b=new W;b.j5=1;b.j6=1;B(b);},
ADC=(a,b)=>{let c=new To();AQC(c,a,b);return c;},
By=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.oG=a.lK;a.lK=a.kq;a.lg=a.oa;a.m8=a.rm;a.rm=a.ko;a:{while(true){b=0;c=a.ko>=a.lG.data.length?0:M7(a);a.kq=c;a.oa=null;if(a.od==4){if(c!=92)return;c=a.ko;d=a.lG.data;if(c>=d.length)c=0;else{a.lp=c;if(a.ly&4)Cq(a);else a.ko=c+1|0;c=d[a.lp];}a.kq=c;switch(c){case 69:break;default:a.kq=92;a.ko=a.lp;return;}a.od=a.xE;a.kq=a.ko>(a.lG.data.length-2|0)?0:M7(a);}b:{c=a.kq;if(c==92){c=a.ko>=(a.lG.data.length-2|0)?(-1):M7(a);c:{d:{a.kq=c;switch(c){case -1:e=new Cj;f=a.lF;c=a.ko;e.j5
=1;e.j6=1;e.kO=(-1);e.lJ=A(68);e.lE=f;e.kO=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.kq
=ALc(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.od!=1)break b;a.kq=(-2147483648)|c;break b;case 65:a.kq=(-2147483583);break b;case 66:a.kq=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cj;f=a.lF;c=a.ko;e.j5=1;e.j6=1;e.kO=(-1);e.lJ=A(68);e.lE=f;e.kO=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.kq
=(-2147483577);break b;case 80:case 112:break c;case 81:a.xE=a.od;a.od=4;b=1;break b;case 90:a.kq=(-2147483558);break b;case 97:a.kq=7;break b;case 98:a.kq=(-2147483550);break b;case 99:c=a.ko;d=a.lG.data;if(c>=(d.length-2|0)){e=new Cj;f=a.lF;e.j5=1;e.j6=1;e.kO=(-1);e.lJ=A(68);e.lE=f;e.kO=c;B(e);}a.lp=c;if(a.ly&4)Cq(a);else a.ko=c+1|0;a.kq=d[a.lp]&31;break b;case 101:a.kq=27;break b;case 102:a.kq=12;break b;case 110:a.kq=10;break b;case 114:a.kq=13;break b;case 116:a.kq=9;break b;case 117:a.kq=Qs(a,4);break b;case 120:a.kq
=Qs(a,2);break b;case 122:a.kq=(-2147483526);break b;default:}break b;}e=new I;d=a.lG;g=d.data;h=a.lp;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.j4=L(d.data,h,1);e=VJ(IJ,e);if(e.of===null)e.of=e.fR();a.oa=e.of;a.kq=0;break b;}e=AKm(a);j=0;if(a.kq==80)j=1;try{a.oa=AH8(e,j);}catch($$e){$$je=Z($$e);if($$je instanceof Kj){e=new Cj;f=a.lF;c=a.ko;e.j5=1;e.j6=1;e.kO=(-1);e.lJ=A(68);e.lE=f;e.kO=c;B(e);}else{throw $$e;}}a.kq=0;}else{h=a.od;if(h==1)switch(c){case 36:a.kq=(-536870876);break b;case 40:d=a.lG.data;c
=a.ko;if(d[c]!=63){a.kq=(-2147483608);break b;}a.lp=c;if(a.ly&4)Cq(a);else a.ko=c+1|0;c=a.lG.data[a.ko];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.kq=(-134217688);k=a.ko;a.lp=k;if(a.ly&4)Cq(a);else a.ko=k+1|0;break e;default:e=new Cj;f=a.lF;c=a.ko;e.j5=1;e.j6=1;e.kO=(-1);e.lJ=A(68);e.lE=f;e.kO=c;B(e);}a.kq=(-67108824);j=a.ko;a.lp=j;if(a.ly&4)Cq(a);else a.ko=j+1|0;}else{switch(c){case 33:break;case 60:h=a.ko;a.lp=h;if(a.ly&4)Cq(a);else a.ko=h+1|0;c=a.lG.data[a.ko];h=1;break e;case 61:a.kq
=(-536870872);j=a.ko;a.lp=j;if(a.ly&4)Cq(a);else a.ko=j+1|0;break e;case 62:a.kq=(-33554392);j=a.ko;a.lp=j;if(a.ly&4)Cq(a);else a.ko=j+1|0;break e;default:i=AS7(a);a.kq=i;if(i<256){a.ly=i;i=i<<16;a.kq=i;a.kq=(-1073741784)|i;break e;}i=i&255;a.kq=i;a.ly=i;i=i<<16;a.kq=i;a.kq=(-16777176)|i;break e;}a.kq=(-268435416);j=a.ko;a.lp=j;if(a.ly&4)Cq(a);else a.ko=j+1|0;}}if(!h)break;}break b;case 41:a.kq=(-536870871);break b;case 42:case 43:case 63:h=a.ko;d=a.lG.data;switch(h>=d.length?42:d[h]){case 43:a.kq=c|(-2147483648);a.lp
=h;if(a.ly&4)Cq(a);else a.ko=h+1|0;break b;case 63:a.kq=c|(-1073741824);a.lp=h;if(a.ly&4)Cq(a);else a.ko=h+1|0;break b;default:}a.kq=c|(-536870912);break b;case 46:a.kq=(-536870866);break b;case 91:a.kq=(-536870821);a.od=2;break b;case 93:if(h!=2)break b;a.kq=(-536870819);break b;case 94:a.kq=(-536870818);break b;case 123:a.oa=AQX(a,c);break b;case 124:a.kq=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.kq=(-536870874);break b;case 45:a.kq=(-536870867);break b;case 91:a.kq=(-536870821);break b;case 93:a.kq
=(-536870819);break b;case 94:a.kq=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new H;e.j5=1;e.j6=1;B(e);},
AKm=a=>{let b,c,d,e,f,g,h,i;b=new K;b.j3=G(10);c=a.ko;d=a.lG;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new I;a.lp=c;if(a.ly&4)Cq(a);else a.ko=c+1|0;g=a.lp;if(g>=0&&1<=(f-g|0)){b.j4=L(d.data,g,1);h=new K;h.j3=G(16);D(h,h.j2,A(184));D(h,h.j2,b);b=new I;d=h.j3;e=d.data;f=h.j2;g=e.length;if(f>=0&&f<=(g-0|0)){b.j4=L(d.data,0,f);return b;}b=new H;b.j5=1;b.j6=1;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}a.lp=c;if(a.ly&4)Cq(a);else a.ko=c+1|0;c=0;a:{while(true){f=a.ko;d=a.lG.data;if(f>=(d.length-2|0))break;a.lp=f;if
(a.ly&4)Cq(a);else a.ko=f+1|0;c=d[a.lp];if(c==125)break a;f=b.j2;Bj(b,f,f+1|0);b.j3.data[f]=c;}}if(c!=125){b=new Cj;i=a.lF;c=a.ko;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=A(68);b.lE=i;b.kO=c;B(b);}}c=b.j2;if(!c){b=new Cj;i=a.lF;c=a.ko;b.j5=1;b.j6=1;b.kO=(-1);b.lJ=A(68);b.lE=i;b.kO=c;B(b);}h=new I;d=b.j3;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.j4=L(d.data,0,c);if(h.j4.length==1){b=new K;b.j3=G(16);D(b,b.j2,A(184));D(b,b.j2,h);h=new I;d=b.j3;e=d.data;f=b.j2;g=e.length;if(f>=0&&f<=(g-0|0)){h.j4=L(d.data,0,f);return h;}b=new H;b.j5
=1;b.j6=1;B(b);}b:{c:{if(h.j4.length>3){if(h===A(184)?1:MM(h,A(184),0))break c;if(h===A(185)?1:MM(h,A(185),0))break c;}break b;}h=Ch(h,2,h.j4.length);}return h;}b=new H;b.j5=1;b.j6=1;B(b);},
AQX=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.j3=G(4);d=(-1);e=2147483647;a:{while(true){f=a.ko;g=a.lG.data;if(f>=g.length)break a;a.lp=f;if(a.ly&4)Cq(a);else a.ko=f+1|0;b=g[a.lp];if(b==125)break a;if(b==44&&d<0)try{d=KE(Et(c),10);ARo(c,0,ZH(c));continue;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){break;}else{throw $$e;}}h=b&65535;f=c.j2;Bj(c,f,f+1|0);c.j3.data[f]=h;}c=new Cj;i=a.lF;b=a.ko;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=i;c.kO=b;B(c);}if(b!=125){c=new Cj;i=a.lF;b=a.ko;c.j5=1;c.j6=1;c.kO=(-1);c.lJ
=A(68);c.lE=i;c.kO=b;B(c);}if(c.j2>0)b:{try{e=KE(Et(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Z($$e);if($$je instanceof Cu){}else{throw $$e;}}c=new Cj;i=a.lF;b=a.ko;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=i;c.kO=b;B(c);}else if(d<0){c=new Cj;i=a.lF;b=a.ko;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=i;c.kO=b;B(c);}if((d|e|(e-d|0))<0){c=new Cj;i=a.lF;b=a.ko;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=i;c.kO=b;B(c);}f=a.ko;g=a.lG.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.kq=(-2147483525);a.lp=f;if(a.ly
&4)Cq(a);else a.ko=f+1|0;break c;case 63:a.kq=(-1073741701);a.lp=f;if(a.ly&4)Cq(a);else a.ko=f+1|0;break c;default:}a.kq=(-536870789);}c=new OE;c.oM=d;c.oK=e;return c;},
AFG=b=>{return b<0?0:1;},
Qs=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.j3=G(b);d=a.lG.data.length-2|0;e=0;while(true){f=BU(e,b);if(f>=0)break;g=a.ko;if(g>=d)break;h=a.lG;a.lp=g;if(a.ly&4)Cq(a);else a.ko=g+1|0;g=h.data[a.lp];i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=g;e=e+1|0;}if(!f)a:{try{b=KE(Et(c),16);}catch($$e){$$je=Z($$e);if($$je instanceof Cu){break a;}else{throw $$e;}}return b;}c=new Cj;j=a.lF;b=a.ko;c.j5=1;c.j6=1;c.kO=(-1);c.lJ=A(68);c.lE=j;c.kO=b;B(c);},
ALc=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.lG.data;e=d.length-2|0;f=PZ(d[a.ko]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.ko;a.lp=g;if(a.ly&4)Cq(a);else a.ko=g+1|0;a:{while(true){if(c>=b)break a;h=a.ko;if(h>=e)break a;i=PZ(a.lG.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.ko;a.lp=g;if(a.ly&4)Cq(a);else a.ko=g+1|0;c=c+1|0;}}return f;}j=new Cj;k=a.lF;b=a.ko;j.j5=1;j.j6=1;j.kO=(-1);j.lJ=A(68);j.lE=k;j.kO=b;B(j);},
AS7=a=>{let b,c,d,e,f,g,h;b=1;c=a.ly;a:while(true){d=a.ko;e=a.lG.data;if(d>=e.length){f=new Cj;g=a.lF;f.j5=1;f.j6=1;f.kO=(-1);f.lJ=A(68);f.lE=g;f.kO=d;B(f);}b:{c:{switch(e[d]){case 41:a.lp=d;if(a.ly&4)Cq(a);else a.ko=d+1|0;return c|256;case 45:if(!b){h=new Cj;g=a.lF;h.j5=1;h.j6=1;h.kO=(-1);h.lJ=A(68);h.lE=g;h.kO=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.lp=d;if(a.ly&4)Cq(a);else a.ko=d+1|0;}a.lp=d;if(a.ly&4)Cq(a);else a.ko=d+1|0;return c;},
Cq=a=>{let b,c,d,e;b=a.lG.data.length-2|0;a.ko=a.ko+1|0;a:while(true){c=a.ko;if(c<b){b:{c=a.lG.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CS(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.ko=a.ko+1|0;continue;}}c=a.ko;if(c>=b)break;d=a.lG.data;if(d[c]!=35)break;a.ko=c+1|0;while(true){e=a.ko;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.ko
=e+1|0;}}return c;},
ACd=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?Iw([d,e]):Iw([d,e,4519+f|0]);}return null;},
AMe=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
M7=a=>{let b,c,d,e,f;b=a.lG;c=a.ko;a.lp=c;if(a.ly&4)Cq(a);else a.ko=c+1|0;b=b.data;d=a.lp;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.lG.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.ko;a.lp=d;if(a.ly&4)Cq(a);else a.ko=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cj(){let a=this;Bk.call(a);a.lJ=null;a.lE=null;a.kO=0;}
let AR9=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(68);c=a.kO;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bk;b.j5=1;b.j6=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new I;b.j4=L(d.data,0,f);}a:{h=a.lJ;i=a.lE;if(i!==null&&i.j4.length){j=a.kO;i=a.lE;k=new K;k.j3=G(16);J(k,k.j2,j,10);D(k,k.j2,A(47));j=k.j2;if(i===null)i=A(2);D(k,j,i);D(k,k.j2,A(47));D(k,k.j2,b);b=new I;d=k.j3;e=d.data;c=k.j2;f=e.length;if(c>=0&&c<=(f-0|0)){b.j4=L(d.data,0,c);break a;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);}b=A(68);}i=new K;i.j3=G(16);j
=i.j2;if(h===null)h=A(2);D(i,j,h);D(i,i.j2,b);b=new I;d=i.j3;e=d.data;c=i.j2;f=e.length;if(c>=0&&c<=(f-0|0)){b.j4=L(d.data,0,c);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
let Zo=F();
let AUF=(b,c,d,e)=>{let f,g;if(c<=d){while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}return;}e=new Bk;e.j5=1;e.j6=1;B(e);},
AL2=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bk;f.j5=1;f.j6=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
ANP=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bk;f.j5=1;f.j6=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=BU(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
UL=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let KI=F(0);
let L8=F();
let ADg=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.lc;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BC;b.kj=f;c=b;f.classObject=c;}}b=Ei(b);if(b===null){b=new Df;b.j5=1;b.j6=1;B(b);}if(b===M(Bo)){b=new Bk;b.j5=1;b.j6=1;B(b);}if(d<0){b=new D1;b.j5=1;b.j6=1;B(b);}b=DY(b.kj,d);}e=0;g=0;h=a.mM;i=a.lc;d=BU(h,h);a:{while(true){j=BU(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new Nr;b.j5=1;b.j6=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.lZ.data[g];e=h;g=k;}return b;}b=new H;b.j5=1;b.j6=1;B(b);};
let R$=F(0);
let Ot=F(0);
function KK(){L8.call(this);this.mM=0;}
let TF=F(0);
function KH(){let a=this;KK.call(a);a.lZ=null;a.lc=0;}
let G3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lZ;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BC;i.kj=h;j=i;h.classObject=j;}}h=Ei(i);if(h===null){i=new Df;i.j5=1;i.j6=1;B(i);}if(h===M(Bo)){i=new Bk;i.j5=1;i.j6=1;B(i);}if(f<0){i=new D1;i.j5=1;i.j6=1;B(i);}j=DY(h.kj,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.lZ=j;}},
AGP=(a,b,c)=>{let d,e,f;if(b>=0){d=a.lc;if(b<=d){G3(a,d+1|0);d=a.lc;e=d;while(e>b){f=a.lZ.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.lZ.data[b]=c;a.lc=d+1|0;a.mM=a.mM+1|0;return;}}c=new H;c.j5=1;c.j6=1;B(c);},
Ut=(a,b)=>{let c,d,e,f;if(b>=0){c=a.lc;if(b<c){d=a.lZ.data;e=d[b];c=c-1|0;a.lc=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.mM=a.mM+1|0;return e;}}e=new H;e.j5=1;e.j6=1;B(e);};
let R5=F(Dt);
let X3=(a,b,c,d)=>{let e,f;e=a.l7;f=d.lu.data;f[e]=b-f[e]|0;return a.kd.fI(b,c,d);},
ABY=a=>{return A(186);},
AOs=(a,b)=>{return 0;};
let V_=F(Dt);
let ABy=(a,b,c,d)=>{return b;},
AG6=a=>{return A(187);};
let Qt=F(Dt);
let AAk=(a,b,c,d)=>{let e;e=a.l7;if(d.lu.data[e]!=b)b=(-1);return b;},
AQr=a=>{return A(188);};
function SN(){Dt.call(this);this.vB=0;}
let Yq=(a,b,c,d)=>{let e,f;e=a.l7;f=d.lu.data;f[e]=b-f[e]|0;a.vB=b;return b;},
AO4=a=>{return A(189);},
AMd=(a,b)=>{return 0;};
let Gv=F(Dt);
let AQ4=(a,b,c,d)=>{if(d.rI!=1&&b!=d.kQ)return (-1);d.oL=1;d.l0.data[1]=b;return b;},
AAF=a=>{return A(190);};
function Cx(){Cb.call(this);this.kT=0;}
let ATa=(a,b,c,d)=>{let e;if((b+a.f1()|0)>d.kQ){d.mK=1;return (-1);}e=a.f2(b,c);if(e<0)return (-1);return a.kd.fI(b+e|0,c,d);},
APH=a=>{return a.kT;},
AGX=(a,b)=>{return 1;};
let Fe=F(Cx);
let AOQ=(a,b,c)=>{return 0;},
ADH=(a,b,c,d)=>{let e,f,g;e=d.kQ;f=d.mU;a:{b:{while(true){g=BU(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.j4.length)break b;if(((c.j4.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.j4.length)break a;if((c.j4.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.kd.fI(b,c,d)>=0)break;b=b+1|0;}return b;}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);},
ABf=(a,b,c,d,e)=>{let f,g,h;f=e.kQ;g=e.mU;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.j4.length)break b;if(((d.j4.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.j4.length)break a;if((d.j4.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.kd.fI(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new W;d.j5=1;d.j6=1;B(d);}d=new W;d.j5=1;d.j6=1;B(d);},
AFR=a=>{return A(191);},
Yi=(a,b)=>{return 0;};
function Cn(){let a=this;Cb.call(a);a.lO=null;a.mG=null;a.lx=0;}
let AFh=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lO;if(e===null)return (-1);f=a.lx;g=d.l0.data;h=f*2|0;i=g[h];g[h]=b;f=e.lc;j=0;a:{while(true){if(j>=f){b=a.lx;d.l0.data[b*2|0]=i;return (-1);}e=a.lO;if(j<0)break a;if(j>=e.lc)break a;h=e.lZ.data[j].fI(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new H;c.j5=1;c.j6=1;B(c);},
AL6=(a,b)=>{a.mG.kd=b;},
AHe=a=>{return A(192);},
AIA=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.lO;if(c!==null){d=0;e=c.mM;f=c.lc;while(true){if(!(d>=f?0:1))break b;if(e<c.mM){b=new Nr;b.j5=1;b.j6=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.lc)break a;if(c.lZ.data[d].fm(b))break;d=g;}return 1;}}return 0;}b=new H;b.j5=1;b.j6=1;B(b);},
ANc=(a,b)=>{let c,d,e;c=a.lx;d=b.l0.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
AA9=a=>{let b,c,d,e;a.mA=1;b=a.mG;if(b!==null&&!b.mA)Ih(b);a:{b:{b=a.lO;if(b!==null){c=b.lc;d=0;while(true){if(d>=c)break b;b=a.lO;if(d<0)break a;if(d>=b.lc)break a;b=b.lZ.data[d];e=b.fK();if(e===null)e=b;else{b.mA=1;Ut(a.lO,d);AGP(a.lO,d,e);}if(!e.mA)e.e4();d=d+1|0;}}}if(a.kd!==null)Ih(a);return;}b=new H;b.j5=1;b.j6=1;B(b);};
let J0=F(Cn);
let ALF=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lx;f=d.lu.data;g=f[e];f[e]=b;h=a.lO.lc;e=0;a:{while(true){if(e>=h){b=a.lx;d.lu.data[b]=g;return (-1);}i=a.lO;if(e<0)break a;if(e>=i.lc)break a;j=i.lZ.data[e].fI(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new H;c.j5=1;c.j6=1;B(c);},
AIQ=a=>{return A(193);},
ANQ=(a,b)=>{let c;c=a.lx;return !b.lu.data[c]?0:1;};
let Eo=F(J0);
let ACq=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lx;f=d.lu.data;g=f[e];f[e]=b;h=a.lO.lc;i=0;a:{while(i<h){j=a.lO;if(i<0)break a;if(i>=j.lc)break a;if(j.lZ.data[i].fI(b,c,d)>=0)return a.kd.fI(a.mG.vB,c,d);i=i+1|0;}b=a.lx;d.lu.data[b]=g;return (-1);}c=new H;c.j5=1;c.j6=1;B(c);},
ANl=(a,b)=>{a.kd=b;},
Yc=a=>{return A(193);};
let Oh=F(Eo);
let ALW=(a,b,c,d)=>{let e,f,g;e=a.lO.lc;f=0;a:{while(f<e){g=a.lO;if(f<0)break a;if(f>=g.lc)break a;if(g.lZ.data[f].fI(b,c,d)>=0)return a.kd.fI(b,c,d);f=f+1|0;}return (-1);}c=new H;c.j5=1;c.j6=1;B(c);},
AQD=(a,b)=>{return 0;},
ASb=a=>{return A(194);};
let U$=F(Eo);
let ZN=(a,b,c,d)=>{let e,f,g;e=a.lO.lc;f=0;a:{while(true){if(f>=e)return a.kd.fI(b,c,d);g=a.lO;if(f<0)break a;if(f>=g.lc)break a;if(g.lZ.data[f].fI(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.j5=1;c.j6=1;B(c);},
APX=(a,b)=>{return 0;},
AE1=a=>{return A(195);};
let RC=F(Eo);
let AA0=(a,b,c,d)=>{let e,f,g,h,i;e=a.lO.lc;f=d.sI?0:d.mU;a:{b:{g=a.kd.fI(b,c,d);if(g>=0){h=a.lx;d.lu.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.lO;if(h<0)break a;if(h>=i.lc)break a;if(i.lZ.data[h].f4(f,b,c,d)>=0){b=a.lx;d.lu.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new H;c.j5=1;c.j6=1;B(c);},
ATM=(a,b)=>{return 0;},
AK$=a=>{return A(196);};
let S$=F(Eo);
let Xb=(a,b,c,d)=>{let e,f,g;e=a.lO.lc;f=a.lx;d.lu.data[f]=b;f=0;a:{while(true){if(f>=e)return a.kd.fI(b,c,d);g=a.lO;if(f<0)break a;if(f>=g.lc)break a;if(g.lZ.data[f].f4(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.j5=1;c.j6=1;B(c);},
AN$=(a,b)=>{return 0;},
AAl=a=>{return A(197);};
function Gk(){Cn.call(this);this.mY=null;}
let XI=(a,b,c,d)=>{let e,f,g;e=a.lx;f=d.l0.data;e=e*2|0;g=f[e];f[e]=b;e=a.mY.fI(b,c,d);if(e>=0)return e;e=a.lx;d.l0.data[e*2|0]=g;return (-1);},
AI2=(a,b,c,d)=>{let e;e=a.mY.fA(b,c,d);if(e>=0){b=a.lx;d.l0.data[b*2|0]=e;}return e;},
AOz=(a,b,c,d,e)=>{let f;f=a.mY.f4(b,c,d,e);if(f>=0){b=a.lx;e.l0.data[b*2|0]=f;}return f;},
AIq=(a,b)=>{return a.mY.fm(b);},
AL8=a=>{let b,c,d,e,f;b=new OG;c=a.mY;d=a.mG;e=O;O=e+1|0;f=new Bc;f.j3=G(20);b.km=(J(f,f.j2,e,10)).T();b.mY=c;b.mG=d;b.lx=d.l7;a.kd=b;return b;},
ASo=a=>{let b;a.mA=1;b=a.mG;if(b!==null&&!b.mA)Ih(b);b=a.mY;if(b!==null&&!b.mA){b=b.fK();if(b!==null){a.mY.mA=1;a.mY=b;}a.mY.e4();}};
let AKo=F();
let Jv=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(AAq());}return b.data.length;},
DY=(b,c)=>{if(b.$meta.primitive){switch(b){};}return Q(b,c);};
let JP=F(Bz);
let HN=F();
function Bp(){let a=this;HN.call(a);a.kK=0;a.my=0;a.kp=null;a.s9=null;a.tD=null;a.lk=0;}
let IJ=null;
let ZQ=a=>{return null;},
YM=a=>{return a.kp;},
AJs=a=>{return !a.my?(Ic(a.kp,0)>=2048?0:1):AMD(a.kp,0)>=2048?0:1;},
AVy=a=>{return a.lk;},
APw=a=>{return a;},
Y9=a=>{let b,c;if(a.tD===null){b=a.f7();c=new Vj;c.z6=a;c.vL=b;b=new Bm;b.kl=X(64);c.kp=b;a.tD=c;EO(c,a.my);}return a.tD;},
Iv=a=>{let b,c;if(a.s9===null){b=a.f7();c=new Vi;c.zN=a;c.xv=b;c.xJ=a;b=new Bm;b.kl=X(64);c.kp=b;a.s9=c;EO(c,a.kK);a.s9.lk=a.lk;}return a.s9;},
AR_=a=>{return 0;},
EO=(a,b)=>{let c;c=a.kK;if(c^b){a.kK=c?0:1;a.my=a.my?0:1;}if(!a.lk)a.lk=1;return a;},
AVf=a=>{return a.kK;},
AH8=(b,c)=>{b=VJ(IJ,b);if(!c&&b.of===null)b.of=b.fR();else if(c&&b.qe===null)b.qe=EO(b.fR(),1);return c?b.qe:b.of;},
AUT=()=>{IJ=new Nu;};
function Kj(){let a=this;Bz.call(a);a.Ah=null;a.z$=null;}
function CH(){let a=this;Bp.call(a);a.sK=0;a.tw=0;a.qE=0;a.ua=0;a.nM=0;a.nb=0;a.kr=null;a.lo=null;}
let C4=(a,b)=>{let c;a:{if(a.sK){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.nM){NX(a.kr,F9(b&65535));break a;}MT(a.kr,F9(b&65535));break a;}if(a.tw&&b>128){a.qE=1;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}b=Cv(B0,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.ua)NX(a.kp,b-55296|0);else MT(a.kp,b-55296|0);}if(a.nM)NX(a.kr,b);else MT(a.kr,
b);if(!a.lk&&(b>=65536&&b<=1114111?1:0))a.lk=1;return a;},
ATF=(a,b)=>{let c,d,e;if(!a.lk&&b.lk)a.lk=1;if(a.ua){if(!b.my)GU(a.kp,b.f7());else DX(a.kp,b.f7());}else if(!b.my)GN(a.kp,b.f7());else{Go(a.kp,b.f7());DX(a.kp,b.f7());a.my=a.my?0:1;a.ua=1;}if(!a.nb&&b.gc()!==null){if(a.nM){if(!b.kK)GU(a.kr,b.gc());else DX(a.kr,b.gc());}else if(!b.kK)GN(a.kr,b.gc());else{Go(a.kr,b.gc());DX(a.kr,b.gc());a.kK=a.kK?0:1;a.nM=1;}}else{c=a.kK;d=a.lo;if(d!==null){if(!c){e=new PJ;e.yD=a;e.xU=c;e.xD=d;e.xx=b;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}else{e=new PK;e.An=a;e.wz=c;e.wu=d;e.wm=b;b
=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}}else{if(c&&!a.nM&&(a.kr.lU?0:1)){d=new PF;d.zu=a;d.ww=b;b=new Bm;b.kl=X(64);d.kp=b;a.lo=d;}else if(!c){d=new PC;d.t7=a;d.tl=c;d.vV=b;b=new Bm;b.kl=X(64);d.kp=b;a.lo=d;}else{d=new PD;d.uI=a;d.ts=c;d.xA=b;b=new Bm;b.kl=X(64);d.kp=b;a.lo=d;}a.nb=1;}}return a;},
BT=(a,b,c)=>{let d;if(b>c){d=new Bk;d.j5=1;d.j6=1;B(d);}a:{b:{if(!a.sK){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;C4(a,b);b=b+1|0;}}if(a.nM)X0(a.kr,b,c+1|0);else IT(a.kr,b,c+1|0);}return a;},
W5=(a,b)=>{let c,d,e,f;if(!a.lk&&b.lk)a.lk=1;if(b.qE)a.qE=1;c=a.my;if(!(c^b.my)){if(!c)GN(a.kp,b.kp);else DX(a.kp,b.kp);}else if(c)GU(a.kp,b.kp);else{Go(a.kp,b.kp);DX(a.kp,b.kp);a.my=1;}a:{if(!a.nb){d=b.nb;if((!d?b.kr:null)!==null){c=a.kK;if(!(c^b.kK)){if(!c){GN(a.kr,!d?b.kr:null);break a;}DX(a.kr,!d?b.kr:null);break a;}if(c){GU(a.kr,!d?b.kr:null);break a;}Go(a.kr,!d?b.kr:null);DX(a.kr,!b.nb?b.kr:null);a.kK=1;break a;}}c=a.kK;e=a.lo;if(e!==null){if(!c){f=new Px;f.yl=a;f.xj=c;f.xz=e;f.xN=b;b=new Bm;b.kl=X(64);f.kp
=b;a.lo=f;}else{f=new P3;f.yR=a;f.xL=c;f.vy=e;f.vD=b;b=new Bm;b.kl=X(64);f.kp=b;a.lo=f;}}else{if(!a.nM&&(a.kr.lU?0:1)){if(!c){e=new PH;e.Aq=a;e.wk=b;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}else{e=new PI;e.yV=a;e.xH=b;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}}else if(!c){e=new PL;e.xk=a;e.wI=b;e.wv=c;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}else{e=new PM;e.wT=a;e.w2=b;e.w9=c;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}a.nb=1;}}},
VC=(a,b)=>{let c,d,e,f;if(!a.lk&&b.lk)a.lk=1;if(b.qE)a.qE=1;c=a.my;if(!(c^b.my)){if(!c)DX(a.kp,b.kp);else GN(a.kp,b.kp);}else if(!c)GU(a.kp,b.kp);else{Go(a.kp,b.kp);DX(a.kp,b.kp);a.my=0;}a:{if(!a.nb){d=b.nb;if((!d?b.kr:null)!==null){c=a.kK;if(!(c^b.kK)){if(!c){DX(a.kr,!d?b.kr:null);break a;}GN(a.kr,!d?b.kr:null);break a;}if(!c){GU(a.kr,!d?b.kr:null);break a;}Go(a.kr,!d?b.kr:null);DX(a.kr,!b.nb?b.kr:null);a.kK=0;break a;}}c=a.kK;e=a.lo;if(e!==null){if(!c){f=new Pz;f.yB=a;f.xl=c;f.vK=e;f.wy=b;b=new Bm;b.kl=X(64);f.kp
=b;a.lo=f;}else{f=new PA;f.y2=a;f.w_=c;f.vv=e;f.xi=b;b=new Bm;b.kl=X(64);f.kp=b;a.lo=f;}}else{if(!a.nM&&(a.kr.lU?0:1)){if(!c){e=new Pv;e.yX=a;e.v$=b;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}else{e=new Pw;e.Ak=a;e.v_=b;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}}else if(!c){e=new PB;e.x6=a;e.xT=b;e.wZ=c;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}else{e=new Pu;e.wY=a;e.xc=b;e.wA=c;b=new Bm;b.kl=X(64);e.kp=b;a.lo=e;}a.nb=1;}}},
ABl=(a,b)=>{let c;c=a.lo;if(c!==null)return a.kK^c.gf(b);return a.kK^CG(a.kr,b);},
ATH=a=>{if(!a.nb)return a.kr;return null;},
ADq=a=>{return a.kp;},
AQp=a=>{let b,c;if(a.lo!==null)return a;b=!a.nb?a.kr:null;c=new Py;c.yg=a;c.sn=b;b=new Bm;b.kl=X(64);c.kp=b;return EO(c,a.kK);},
AKy=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.j3=G(16);c=Ic(a.kr,0);while(c>=0){d=(E6(c)).data;e=0;f=d.length;g=b.j2;Bj(b,g,g+f|0);f=f+e|0;while(e<f){h=b.j3.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.j2;Bj(b,g,g+1|0);b.j3.data[g]=124;c=Ic(a.kr,c+1|0);}e=b.j2;if(e>0)Vt(b,e-1|0);k=new I;d=b.j3;h=d.data;e=b.j2;g=h.length;if(e>=0&&e<=(g-0|0)){k.j4=L(d.data,0,e);return k;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
ADU=a=>{return a.qE;};
function EE(){Cb.call(this);this.kL=null;}
let AXP=a=>{return a.kL;},
AOB=(a,b)=>{return !a.kL.fm(b)&&!a.kd.fm(b)?0:1;},
AQZ=(a,b)=>{return 1;},
AJH=a=>{let b;a.mA=1;b=a.kd;if(b!==null&&!b.mA){b=b.fK();if(b!==null){a.kd.mA=1;a.kd=b;}a.kd.e4();}b=a.kL;if(b!==null){if(!b.mA){b=b.fK();if(b!==null){a.kL.mA=1;a.kL=b;}a.kL.e4();}else if(b instanceof Gk&&b.mG.tL)a.kL=b.kd;}};
function DC(){EE.call(this);this.le=null;}
let Xd=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.le.f1()|0)<=d.kQ){f=a.le.f2(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.kd.fI(b,c,d);if(f>=0)break;b=b-a.le.f1()|0;e=e+(-1)|0;}return f;},
AA5=a=>{return A(198);};
function Fn(){DC.call(this);this.pF=null;}
let Zj=(a,b,c,d)=>{let e,f,g,h,i;e=a.pF;f=e.oM;g=e.oK;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.le.f1()|0)>d.kQ)break a;i=a.le.f2(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.kd.fI(b,c,d);if(i>=0)break;b=b-a.le.f1()|0;h=h+(-1)|0;}return i;}if((b+a.le.f1()|0)>d.kQ){d.mK=1;return (-1);}i=a.le.f2(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
ZU=a=>{return Mw(a.pF);};
let DE=F(EE);
let XF=(a,b,c,d)=>{let e;if(!a.kL.gi(d))return a.kd.fI(b,c,d);e=a.kL.fI(b,c,d);if(e>=0)return e;return a.kd.fI(b,c,d);},
AGp=a=>{return A(199);};
let Fl=F(DC);
let AI9=(a,b,c,d)=>{let e;e=a.kL.fI(b,c,d);if(e<0)e=a.kd.fI(b,c,d);return e;},
ATR=(a,b)=>{a.kd=b;a.kL.e8(b);};
let Vl=F(DC);
let ASW=(a,b,c,d)=>{while((b+a.le.f1()|0)<=d.kQ&&a.le.f2(b,c)>0){b=b+a.le.f1()|0;}return a.kd.fI(b,c,d);},
AKn=(a,b,c,d)=>{let e,f,g;e=a.kd.fA(b,c,d);if(e<0)return (-1);f=e-a.le.f1()|0;while(f>=b&&a.le.f2(f,c)>0){g=f-a.le.f1()|0;e=f;f=g;}return e;};
let Nu=F();
let X5=null,AGL=null,TK=null;
let VJ=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=TK.data;if(c>=d.length){e=new Kj;e.j5=1;e.j6=1;e.j7=A(68);e.Ah=A(68);e.z$=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof I))g=0;else{f=f;g=b.j4!==f.j4?0:1;}if(g)break;c=c+1|0;}return d[1];},
ACQ=()=>{let b,c,d,e,f,g;b=new Jg;X5=b;c=new IF;AGL=c;d=Q(D8(C),194);e=d.data;e[0]=T(C,[A(200),new TW]);e[1]=T(C,[A(201),new Uy]);e[2]=T(C,[A(202),new UD]);e[3]=T(C,[A(203),new Ja]);e[4]=T(C,[A(204),c]);e[5]=T(C,[A(205),new Jx]);e[6]=T(C,[A(206),new Wo]);e[7]=T(C,[A(207),new J8]);e[8]=T(C,[A(208),new RZ]);e[9]=T(C,[A(209),new Sq]);e[10]=T(C,[A(210),new Ql]);e[11]=T(C,[A(211),new P8]);e[12]=T(C,[A(212),new UI]);e[13]=T(C,[A(213),new Ww]);e[14]=T(C,[A(214),new T$]);e[15]=T(C,[A(215),new TO]);e[16]=T(C,[A(216),
new U9]);e[17]=T(C,[A(217),new O5]);e[18]=T(C,[A(218),new OF]);e[19]=T(C,[A(219),new Ug]);e[20]=T(C,[A(220),new Us]);e[21]=T(C,[A(221),new QG]);e[22]=T(C,[A(222),new Sv]);e[23]=T(C,[A(223),new V3]);e[24]=T(C,[A(224),new Up]);e[25]=T(C,[A(225),new Rp]);e[26]=T(C,[A(226),new QF]);e[27]=T(C,[A(227),new Ws]);e[28]=T(C,[A(228),b]);e[29]=T(C,[A(229),new Io]);e[30]=T(C,[A(230),new Vc]);e[31]=T(C,[A(231),b]);e[32]=T(C,[A(232),new R2]);e[33]=T(C,[A(233),c]);e[34]=T(C,[A(234),new QA]);f=Q(C,2);g=f.data;g[0]=A(235);b=
new Bu;b.kv=0;b.kw=127;g[1]=b;e[35]=f;f=Q(C,2);g=f.data;g[0]=A(236);b=new Bu;b.kv=128;b.kw=255;g[1]=b;e[36]=f;f=Q(C,2);g=f.data;g[0]=A(237);b=new Bu;b.kv=256;b.kw=383;g[1]=b;e[37]=f;f=Q(C,2);g=f.data;g[0]=A(238);b=new Bu;b.kv=384;b.kw=591;g[1]=b;e[38]=f;f=Q(C,2);g=f.data;g[0]=A(239);b=new Bu;b.kv=592;b.kw=687;g[1]=b;e[39]=f;f=Q(C,2);g=f.data;g[0]=A(240);b=new Bu;b.kv=688;b.kw=767;g[1]=b;e[40]=f;f=Q(C,2);g=f.data;g[0]=A(241);b=new Bu;b.kv=768;b.kw=879;g[1]=b;e[41]=f;f=Q(C,2);g=f.data;g[0]=A(242);b=new Bu;b.kv
=880;b.kw=1023;g[1]=b;e[42]=f;f=Q(C,2);g=f.data;g[0]=A(243);b=new Bu;b.kv=1024;b.kw=1279;g[1]=b;e[43]=f;f=Q(C,2);g=f.data;g[0]=A(244);b=new Bu;b.kv=1280;b.kw=1327;g[1]=b;e[44]=f;f=Q(C,2);g=f.data;g[0]=A(245);b=new Bu;b.kv=1328;b.kw=1423;g[1]=b;e[45]=f;f=Q(C,2);g=f.data;g[0]=A(246);b=new Bu;b.kv=1424;b.kw=1535;g[1]=b;e[46]=f;f=Q(C,2);g=f.data;g[0]=A(247);b=new Bu;b.kv=1536;b.kw=1791;g[1]=b;e[47]=f;f=Q(C,2);g=f.data;g[0]=A(248);b=new Bu;b.kv=1792;b.kw=1871;g[1]=b;e[48]=f;f=Q(C,2);g=f.data;g[0]=A(249);b=new Bu;b.kv
=1872;b.kw=1919;g[1]=b;e[49]=f;f=Q(C,2);g=f.data;g[0]=A(250);b=new Bu;b.kv=1920;b.kw=1983;g[1]=b;e[50]=f;f=Q(C,2);g=f.data;g[0]=A(251);b=new Bu;b.kv=2304;b.kw=2431;g[1]=b;e[51]=f;f=Q(C,2);g=f.data;g[0]=A(252);b=new Bu;b.kv=2432;b.kw=2559;g[1]=b;e[52]=f;f=Q(C,2);g=f.data;g[0]=A(253);b=new Bu;b.kv=2560;b.kw=2687;g[1]=b;e[53]=f;f=Q(C,2);g=f.data;g[0]=A(254);b=new Bu;b.kv=2688;b.kw=2815;g[1]=b;e[54]=f;f=Q(C,2);g=f.data;g[0]=A(255);b=new Bu;b.kv=2816;b.kw=2943;g[1]=b;e[55]=f;f=Q(C,2);g=f.data;g[0]=A(256);b=new Bu;b.kv
=2944;b.kw=3071;g[1]=b;e[56]=f;f=Q(C,2);g=f.data;g[0]=A(257);b=new Bu;b.kv=3072;b.kw=3199;g[1]=b;e[57]=f;f=Q(C,2);g=f.data;g[0]=A(258);b=new Bu;b.kv=3200;b.kw=3327;g[1]=b;e[58]=f;f=Q(C,2);g=f.data;g[0]=A(259);b=new Bu;b.kv=3328;b.kw=3455;g[1]=b;e[59]=f;f=Q(C,2);g=f.data;g[0]=A(260);b=new Bu;b.kv=3456;b.kw=3583;g[1]=b;e[60]=f;f=Q(C,2);g=f.data;g[0]=A(261);b=new Bu;b.kv=3584;b.kw=3711;g[1]=b;e[61]=f;f=Q(C,2);g=f.data;g[0]=A(262);b=new Bu;b.kv=3712;b.kw=3839;g[1]=b;e[62]=f;f=Q(C,2);g=f.data;g[0]=A(263);b=new Bu;b.kv
=3840;b.kw=4095;g[1]=b;e[63]=f;f=Q(C,2);g=f.data;g[0]=A(264);b=new Bu;b.kv=4096;b.kw=4255;g[1]=b;e[64]=f;f=Q(C,2);g=f.data;g[0]=A(265);b=new Bu;b.kv=4256;b.kw=4351;g[1]=b;e[65]=f;f=Q(C,2);g=f.data;g[0]=A(266);b=new Bu;b.kv=4352;b.kw=4607;g[1]=b;e[66]=f;f=Q(C,2);g=f.data;g[0]=A(267);b=new Bu;b.kv=4608;b.kw=4991;g[1]=b;e[67]=f;f=Q(C,2);g=f.data;g[0]=A(268);b=new Bu;b.kv=4992;b.kw=5023;g[1]=b;e[68]=f;f=Q(C,2);g=f.data;g[0]=A(269);b=new Bu;b.kv=5024;b.kw=5119;g[1]=b;e[69]=f;f=Q(C,2);g=f.data;g[0]=A(270);b=new Bu;b.kv
=5120;b.kw=5759;g[1]=b;e[70]=f;f=Q(C,2);g=f.data;g[0]=A(271);b=new Bu;b.kv=5760;b.kw=5791;g[1]=b;e[71]=f;f=Q(C,2);g=f.data;g[0]=A(272);b=new Bu;b.kv=5792;b.kw=5887;g[1]=b;e[72]=f;f=Q(C,2);g=f.data;g[0]=A(273);b=new Bu;b.kv=5888;b.kw=5919;g[1]=b;e[73]=f;f=Q(C,2);g=f.data;g[0]=A(274);b=new Bu;b.kv=5920;b.kw=5951;g[1]=b;e[74]=f;f=Q(C,2);g=f.data;g[0]=A(275);b=new Bu;b.kv=5952;b.kw=5983;g[1]=b;e[75]=f;f=Q(C,2);g=f.data;g[0]=A(276);b=new Bu;b.kv=5984;b.kw=6015;g[1]=b;e[76]=f;f=Q(C,2);g=f.data;g[0]=A(277);b=new Bu;b.kv
=6016;b.kw=6143;g[1]=b;e[77]=f;f=Q(C,2);g=f.data;g[0]=A(278);b=new Bu;b.kv=6144;b.kw=6319;g[1]=b;e[78]=f;f=Q(C,2);g=f.data;g[0]=A(279);b=new Bu;b.kv=6400;b.kw=6479;g[1]=b;e[79]=f;f=Q(C,2);g=f.data;g[0]=A(280);b=new Bu;b.kv=6480;b.kw=6527;g[1]=b;e[80]=f;f=Q(C,2);g=f.data;g[0]=A(281);b=new Bu;b.kv=6528;b.kw=6623;g[1]=b;e[81]=f;f=Q(C,2);g=f.data;g[0]=A(282);b=new Bu;b.kv=6624;b.kw=6655;g[1]=b;e[82]=f;f=Q(C,2);g=f.data;g[0]=A(283);b=new Bu;b.kv=6656;b.kw=6687;g[1]=b;e[83]=f;f=Q(C,2);g=f.data;g[0]=A(284);b=new Bu;b.kv
=7424;b.kw=7551;g[1]=b;e[84]=f;f=Q(C,2);g=f.data;g[0]=A(285);b=new Bu;b.kv=7552;b.kw=7615;g[1]=b;e[85]=f;f=Q(C,2);g=f.data;g[0]=A(286);b=new Bu;b.kv=7616;b.kw=7679;g[1]=b;e[86]=f;f=Q(C,2);g=f.data;g[0]=A(287);b=new Bu;b.kv=7680;b.kw=7935;g[1]=b;e[87]=f;f=Q(C,2);g=f.data;g[0]=A(288);b=new Bu;b.kv=7936;b.kw=8191;g[1]=b;e[88]=f;f=Q(C,2);g=f.data;g[0]=A(289);b=new Bu;b.kv=8192;b.kw=8303;g[1]=b;e[89]=f;f=Q(C,2);g=f.data;g[0]=A(290);b=new Bu;b.kv=8304;b.kw=8351;g[1]=b;e[90]=f;f=Q(C,2);g=f.data;g[0]=A(291);b=new Bu;b.kv
=8352;b.kw=8399;g[1]=b;e[91]=f;f=Q(C,2);g=f.data;g[0]=A(292);b=new Bu;b.kv=8400;b.kw=8447;g[1]=b;e[92]=f;f=Q(C,2);g=f.data;g[0]=A(293);b=new Bu;b.kv=8448;b.kw=8527;g[1]=b;e[93]=f;f=Q(C,2);g=f.data;g[0]=A(294);b=new Bu;b.kv=8528;b.kw=8591;g[1]=b;e[94]=f;f=Q(C,2);g=f.data;g[0]=A(295);b=new Bu;b.kv=8592;b.kw=8703;g[1]=b;e[95]=f;f=Q(C,2);g=f.data;g[0]=A(296);b=new Bu;b.kv=8704;b.kw=8959;g[1]=b;e[96]=f;f=Q(C,2);g=f.data;g[0]=A(297);b=new Bu;b.kv=8960;b.kw=9215;g[1]=b;e[97]=f;f=Q(C,2);g=f.data;g[0]=A(298);b=new Bu;b.kv
=9216;b.kw=9279;g[1]=b;e[98]=f;f=Q(C,2);g=f.data;g[0]=A(299);b=new Bu;b.kv=9280;b.kw=9311;g[1]=b;e[99]=f;f=Q(C,2);g=f.data;g[0]=A(300);b=new Bu;b.kv=9312;b.kw=9471;g[1]=b;e[100]=f;f=Q(C,2);g=f.data;g[0]=A(301);b=new Bu;b.kv=9472;b.kw=9599;g[1]=b;e[101]=f;f=Q(C,2);g=f.data;g[0]=A(302);b=new Bu;b.kv=9600;b.kw=9631;g[1]=b;e[102]=f;e[103]=T(C,[A(303),BH(9632,9727)]);e[104]=T(C,[A(304),BH(9728,9983)]);e[105]=T(C,[A(305),BH(9984,10175)]);e[106]=T(C,[A(306),BH(10176,10223)]);e[107]=T(C,[A(307),BH(10224,10239)]);e[108]
=T(C,[A(308),BH(10240,10495)]);e[109]=T(C,[A(309),BH(10496,10623)]);e[110]=T(C,[A(310),BH(10624,10751)]);e[111]=T(C,[A(311),BH(10752,11007)]);e[112]=T(C,[A(312),BH(11008,11263)]);e[113]=T(C,[A(313),BH(11264,11359)]);e[114]=T(C,[A(314),BH(11392,11519)]);e[115]=T(C,[A(315),BH(11520,11567)]);e[116]=T(C,[A(316),BH(11568,11647)]);e[117]=T(C,[A(317),BH(11648,11743)]);e[118]=T(C,[A(318),BH(11776,11903)]);e[119]=T(C,[A(319),BH(11904,12031)]);e[120]=T(C,[A(320),BH(12032,12255)]);e[121]=T(C,[A(321),BH(12272,12287)]);e[122]
=T(C,[A(322),BH(12288,12351)]);e[123]=T(C,[A(323),BH(12352,12447)]);e[124]=T(C,[A(324),BH(12448,12543)]);e[125]=T(C,[A(325),BH(12544,12591)]);e[126]=T(C,[A(326),BH(12592,12687)]);e[127]=T(C,[A(327),BH(12688,12703)]);e[128]=T(C,[A(328),BH(12704,12735)]);e[129]=T(C,[A(329),BH(12736,12783)]);e[130]=T(C,[A(330),BH(12784,12799)]);e[131]=T(C,[A(331),BH(12800,13055)]);e[132]=T(C,[A(332),BH(13056,13311)]);e[133]=T(C,[A(333),BH(13312,19893)]);e[134]=T(C,[A(334),BH(19904,19967)]);e[135]=T(C,[A(335),BH(19968,40959)]);e[136]
=T(C,[A(336),BH(40960,42127)]);e[137]=T(C,[A(337),BH(42128,42191)]);e[138]=T(C,[A(338),BH(42752,42783)]);e[139]=T(C,[A(339),BH(43008,43055)]);e[140]=T(C,[A(340),BH(44032,55203)]);e[141]=T(C,[A(341),BH(55296,56191)]);e[142]=T(C,[A(342),BH(56192,56319)]);e[143]=T(C,[A(343),BH(56320,57343)]);e[144]=T(C,[A(344),BH(57344,63743)]);e[145]=T(C,[A(345),BH(63744,64255)]);e[146]=T(C,[A(346),BH(64256,64335)]);e[147]=T(C,[A(347),BH(64336,65023)]);e[148]=T(C,[A(348),BH(65024,65039)]);e[149]=T(C,[A(349),BH(65040,65055)]);e[150]
=T(C,[A(350),BH(65056,65071)]);e[151]=T(C,[A(351),BH(65072,65103)]);e[152]=T(C,[A(352),BH(65104,65135)]);e[153]=T(C,[A(353),BH(65136,65279)]);e[154]=T(C,[A(354),BH(65280,65519)]);e[155]=T(C,[A(49),BH(0,1114111)]);f=Q(C,2);g=f.data;g[0]=A(355);b=new Qw;AJN(b);g[1]=b;e[156]=f;e[157]=T(C,[A(356),Cd(0,1)]);e[158]=T(C,[A(357),GK(62,1)]);e[159]=T(C,[A(358),Cd(1,1)]);e[160]=T(C,[A(359),Cd(2,1)]);e[161]=T(C,[A(360),Cd(3,0)]);e[162]=T(C,[A(361),Cd(4,0)]);e[163]=T(C,[A(362),Cd(5,1)]);e[164]=T(C,[A(363),GK(448,1)]);e[165]
=T(C,[A(364),Cd(6,1)]);e[166]=T(C,[A(365),Cd(7,0)]);e[167]=T(C,[A(366),Cd(8,1)]);e[168]=T(C,[A(367),GK(3584,1)]);e[169]=T(C,[A(368),Cd(9,1)]);e[170]=T(C,[A(369),Cd(10,1)]);e[171]=T(C,[A(370),Cd(11,1)]);e[172]=T(C,[A(371),GK(28672,0)]);e[173]=T(C,[A(372),Cd(12,0)]);e[174]=T(C,[A(373),Cd(13,0)]);e[175]=T(C,[A(374),Cd(14,0)]);e[176]=T(C,[A(375),AGy(983040,1,1)]);e[177]=T(C,[A(376),Cd(15,0)]);e[178]=T(C,[A(377),Cd(16,1)]);e[179]=T(C,[A(378),Cd(18,1)]);e[180]=T(C,[A(379),AIw(19,0,1)]);e[181]=T(C,[A(380),GK(1643118592,
1)]);e[182]=T(C,[A(381),Cd(20,0)]);e[183]=T(C,[A(382),Cd(21,0)]);e[184]=T(C,[A(383),Cd(22,0)]);e[185]=T(C,[A(384),Cd(23,0)]);e[186]=T(C,[A(385),Cd(24,1)]);e[187]=T(C,[A(386),GK(2113929216,1)]);e[188]=T(C,[A(387),Cd(25,1)]);e[189]=T(C,[A(388),Cd(26,0)]);e[190]=T(C,[A(389),Cd(27,0)]);e[191]=T(C,[A(390),Cd(28,1)]);e[192]=T(C,[A(391),Cd(29,0)]);e[193]=T(C,[A(392),Cd(30,0)]);TK=d;};
function Bx(){let a=this;C.call(a);a.of=null;a.qe=null;}
let AJN=a=>{return;},
AWP=(a,b)=>{if(!b&&a.of===null)a.of=a.fR();else if(b&&a.qe===null)a.qe=EO(a.fR(),1);if(b)return a.qe;return a.of;};
function OE(){let a=this;HN.call(a);a.oM=0;a.oK=0;}
let Mw=a=>{let b,c,d,e,f,g,h;b=a.oM;c=a.oK;if(c==2147483647)d=A(68);else{d=new Bc;d.j3=G(20);d=(J(d,d.j2,c,10)).T();}e=new K;e.j3=G(16);c=e.j2;Bj(e,c,c+1|0);e.j3.data[c]=123;J(e,e.j2,b,10);b=e.j2;Bj(e,b,b+1|0);e.j3.data[b]=44;f=e.j2;if(d===null)d=A(2);D(e,f,d);b=e.j2;Bj(e,b,b+1|0);g=e.j3;h=g.data;h[b]=125;d=new I;b=e.j2;c=h.length;if(b>=0&&b<=(c-0|0)){d.j4=L(g.data,0,b);return d;}d=new H;d.j5=1;d.j6=1;Bi(d);B(d);};
let Pk=F(Cb);
let AHB=(a,b,c,d)=>{return b;},
ALR=a=>{return A(393);},
AL5=(a,b)=>{return 0;};
function Bm(){let a=this;C.call(a);a.kl=null;a.lU=0;}
let MT=(a,b)=>{let c,d,e;if(b<0){c=new H;c.j5=1;c.j6=1;B(c);}d=b/32|0;if(b>=a.lU){Js(a,d+1|0);a.lU=b+1|0;}e=a.kl.data;e[d]=e[d]|1<<(b%32|0);},
IT=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BU(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.lU){Js(a,e+1|0);a.lU=c;}if(d==e){f=a.kl.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.kl.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new H;i.j5=1;i.j6=1;B(i);},
NX=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.j5=1;c.j6=1;B(c);}d=b/32|0;e=a.kl.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.lU-1|0))H7(a);}},
X0=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.lU;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.kl.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.kl.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}H7(a);return;}i=new H;i.j5=1;i.j6=1;B(i);},
CG=(a,b)=>{let c,d,e;if(b<0){c=new H;c.j5=1;c.j6=1;B(c);}d=b/32|0;e=a.kl.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
Ic=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.j5=1;c.j6=1;B(c);}d=a.lU;if(b>=d)return (-1);e=b/32|0;f=a.kl.data;g=f[e]>>>(b%32|0)|0;if(g)return Ea(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Ea(f[g])|0;g=g+1|0;}return (-1);},
AMD=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new H;c.j5=1;c.j6=1;B(c);}d=a.lU;if(b>=d)return b;e=b/32|0;f=a.kl.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return Ea(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+Ea(f[h]^(-1))|0;h=h+1|0;}return d;},
Js=(a,b)=>{let c,d,e,f,g,h;c=a.kl.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=X(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.kl=g;},
H7=a=>{let b,c,d;b=(a.lU+31|0)/32|0;a.lU=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=O2(a.kl.data[c]);if(d<32)break;c=c+(-1)|0;a.lU=a.lU-32|0;}a.lU=a.lU-d|0;}},
Jr=(a,b)=>{let c,d,e,f,g;c=a.kl.data;d=c.length;e=b.kl.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
DX=(a,b)=>{let c,d,e,f,g,h,i;c=a.kl.data;d=c.length;e=b.kl.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.lU;i=b.lU;if(h<i)i=h;a.lU=i;H7(a);},
GU=(a,b)=>{let c,d,e,f,g;c=a.kl.data;d=c.length;e=b.kl.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}H7(a);},
GN=(a,b)=>{let c,d,e,f,g;c=a.lU;d=b.lU;if(c>d)d=c;a.lU=d;Js(a,(d+31|0)/32|0);e=a.kl.data;c=e.length;f=b.kl.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
Go=(a,b)=>{let c,d,e,f,g;c=a.lU;d=b.lU;if(c>d)d=c;a.lU=d;Js(a,(d+31|0)/32|0);e=a.kl.data;c=e.length;f=b.kl.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}H7(a);};
function On(){let a=this;Cn.call(a);a.sr=null;a.tn=0;}
let AF5=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.mU;f=d.kQ;g=b+1|0;f=BU(g,f);if(f>0){d.mK=1;return (-1);}if(b>=0&&b<c.j4.length){h=c.j4.charCodeAt(b);if(!a.sr.gf(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.j4.length){if((c.j4.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new W;c.j5=1;c.j6=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.j4.length){if(!((c.j4.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new W;c.j5=1;c.j6=1;B(c);}}return a.kd.fI(g,c,d);}c=new W;c.j5
=1;c.j6=1;B(c);},
AMf=a=>{let b,c,d,e,f,g,h,i;b=!a.tn?A(394):A(395);c=a.sr.T();d=new K;d.j3=G(16);D(d,d.j2,A(396));D(d,d.j2,b);e=d.j2;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
function Hi(){let a=this;Cn.call(a);a.pH=null;a.py=null;}
let Y$=(a,b,c,d)=>{let e;e=a.pH.fI(b,c,d);if(e<0)e=AF5(a.py,b,c,d);if(e>=0)return e;return (-1);},
ALC=(a,b)=>{a.kd=b;a.py.kd=b;a.pH.e8(b);},
AMH=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.pH;c=a.py;d=new K;d.j3=G(16);D(d,d.j2,A(397));e=d.j2;if(b===null)b=A(2);else{f=b.km;b=b.fJ();g=new K;E0(g);Gl(g,60);IU(g,f);Gl(g,58);IU(g,b);Gl(g,62);b=Mn(g);}D(d,e,b);D(d,d.j2,A(398));e=d.j2;if(c===null)b=A(2);else{b=c.km;f=!c.tn?A(394):A(395);c=c.sr.T();g=En();Mi(Mi(Mi(g,A(396)),f),c);f=Et(g);c=new K;E0(c);Gl(c,60);IU(c,b);Gl(c,58);IU(c,f);Gl(c,62);b=Mn(c);}D(d,e,b);b=new I;h=d.j3;i=h.data;j=d.j2;k=i.length;if(j>=0&&j<=(k-0|0)){b.j4=L(h.data,0,j);return b;}b=new H;b.j5=
1;b.j6=1;Bi(b);B(b);},
AAt=(a,b)=>{return 1;},
ZP=(a,b)=>{return 1;};
function DQ(){let a=this;Cn.call(a);a.mH=null;a.qp=0;}
let ADe=(a,b,c,d)=>{let e,f,g,h;a:{e=d.kQ;if(b<e){f=b+1|0;if(b>=0&&b<c.j4.length){g=c.j4.charCodeAt(b);if(a.gf(g)){h=a.kd.fI(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.j4.length){f=c.j4.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.gf(((g&1023)<<10|f&1023)+65536|0))break a;else return a.kd.fI(e,c,d);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}}return (-1);},
AR0=a=>{let b,c,d,e,f,g,h,i;b=!a.qp?A(394):A(395);c=a.mH.T();d=new K;d.j3=G(16);D(d,d.j2,A(396));D(d,d.j2,b);e=d.j2;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
AEd=(a,b)=>{return a.mH.gf(b);},
Y0=(a,b)=>{let c,d;if(b instanceof Eu)return a.mH.gf(b.p1);if(b instanceof Eb)return a.mH.gf(b.mz);if(b instanceof DQ){c=a.mH;b=b.mH;return c.gc()!==null&&b.gc()!==null?Jr(c.gc(),b.gc()):1;}if(!(b instanceof Ed))return 1;c=a.mH;d=b.nl;return c.gc()!==null&&d.gc()!==null?Jr(c.gc(),d.gc()):1;},
AVU=a=>{return a.mH;},
APm=(a,b)=>{a.kd=b;},
ADw=(a,b)=>{return 1;};
let Kd=F(DQ);
let AGY=(a,b)=>{let c;c=a.mH;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return c.gf(Cv(B0,b));},
ASv=a=>{let b,c,d,e,f,g,h,i;b=!a.qp?A(394):A(395);c=a.mH.T();d=new K;d.j3=G(16);D(d,d.j2,A(399));D(d,d.j2,b);e=d.j2;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
function KP(){let a=this;Cx.call(a);a.sv=null;a.t$=0;}
let AHE=(a,b,c)=>{let d;d=a.sv;if(b>=0&&b<c.j4.length){b=c.j4.charCodeAt(b);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return !d.gf(Cv(B0,b)&65535)?(-1):1;}c=new W;c.j5=1;c.j6=1;B(c);},
Z8=a=>{let b,c,d,e,f,g,h,i;b=!a.t$?A(394):A(395);c=a.sv.T();d=new K;d.j3=G(16);D(d,d.j2,A(399));D(d,d.j2,b);e=d.j2;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
function Ed(){let a=this;Cx.call(a);a.nl=null;a.uE=0;}
let WD=(a,b,c)=>{let d;d=a.nl;if(b>=0&&b<c.j4.length)return !d.gf(c.j4.charCodeAt(b))?(-1):1;c=new W;c.j5=1;c.j6=1;B(c);},
AHW=a=>{let b,c,d,e,f,g,h,i;b=!a.uE?A(394):A(395);c=a.nl.T();d=new K;d.j3=G(16);D(d,d.j2,A(396));D(d,d.j2,b);e=d.j2;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
AL7=(a,b)=>{let c,d;if(b instanceof Eb)return a.nl.gf(b.mz);if(b instanceof Ed){c=a.nl;b=b.nl;return c.gc()!==null&&b.gc()!==null?Jr(c.gc(),b.gc()):1;}if(!(b instanceof DQ)){if(!(b instanceof Eu))return 1;return 0;}c=a.nl;d=b.mH;return c.gc()!==null&&d.gc()!==null?Jr(c.gc(),d.gc()):1;};
function Ix(){let a=this;Cn.call(a);a.ov=null;a.on=null;a.rF=0;}
let AI8=(a,b)=>{a.kd=b;},
AOb=a=>{let b,c,d,e,f,g,h,i;if(a.on===null){b=new I;c=a.ov;b.j4=L(c.data,0,c.data.length);a.on=b;}d=a.on;b=new K;b.j3=G(16);D(b,b.j2,A(400));e=b.j2;if(d===null)d=A(2);D(b,e,d);f=new I;c=b.j3;g=c.data;h=b.j2;i=g.length;if(h>=0&&h<=(i-0|0)){f.j4=L(c.data,0,h);return f;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
W0=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.kQ;f=X(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.j4.length){j=c.j4.charCodeAt(b);k=ACd(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.rF;if(b!=m)return (-1);while(true){if(l>=m)return a.kd.fI(i,c,d);if(f[l]!=a.ov.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.j4.length){j=c.j4.charCodeAt(i);g=j-4449|0;}else{c=new W;c.j5=1;c.j6=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.j4.length){j=c.j4.charCodeAt(b);h
=j-4519|0;}else{c=new W;c.j5=1;c.j6=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.rF==3){m=k[0];f=a.ov.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.kd.fI(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.rF==2){m=k[0];f=a.ov.data;if(m==f[0]&&k[1]==f[1]){b=a.kd.fI(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new W;c.j5=1;c.j6=1;B(c);},
AAf=(a,b)=>{let c,d,e;a:{if(b instanceof Ix){b=b;if(b.on===null){c=new I;d=b.ov;c.j4=L(d.data,0,d.data.length);b.on=c;}c=b.on;if(a.on===null){b=new I;d=a.ov;b.j4=L(d.data,0,d.data.length);a.on=b;}b=a.on;if(c===b)e=1;else if(!(b instanceof I))e=0;else{b=b;e=c.j4!==b.j4?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AQt=(a,b)=>{return 1;};
function Eb(){Cx.call(this);this.mz=0;}
let AHf=a=>{return 1;},
AFC=(a,b,c)=>{let d;d=a.mz;if(b>=0&&b<c.j4.length)return d!=c.j4.charCodeAt(b)?(-1):1;c=new W;c.j5=1;c.j6=1;B(c);},
AC9=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof I){e=d.kQ;while(true){if(b>=e)return (-1);f=HK(c,a.mz,b);if(f<0)return (-1);g=a.kd;b=f+1|0;if(g.fI(b,c,d)>=0)break;}return f;}h=d.kQ;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.kQ){d.mK=1;e=(-1);}else{e=a.mz;if(b<0)break a;if(b>=c.j4.length)break a;e=e!=c.j4.charCodeAt(b)?(-1):1;e=e<0?(-1):a.kd.fI(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new W;R(c);B(c);},
AHp=(a,b,c,d,e)=>{let f;if(d instanceof I){a:{while(true){if(c<b)return (-1);c=EY(d,a.mz,c);if(c<0)break a;if(c<b)break a;if(a.kd.fI(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.kQ){e.mK=1;f=(-1);}else{f=a.mz;if(c<0)break b;if(c>=d.j4.length)break b;f=f!=d.j4.charCodeAt(c)?(-1):1;f=f<0?(-1):a.kd.fI(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new W;R(d);B(d);},
AQN=a=>{let b,c,d,e,f,g,h;b=a.mz;c=new K;c.j3=G(16);d=c.j2;Bj(c,d,d+1|0);e=c.j3;f=e.data;f[d]=b;g=new I;d=c.j2;h=f.length;if(d>=0&&d<=(h-0|0)){g.j4=L(e.data,0,d);return g;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
AQi=(a,b)=>{let c,d,e,f;if(b instanceof Eb)return b.mz!=a.mz?0:1;if(!(b instanceof Ed)){if(b instanceof DQ)return b.gf(a.mz);if(!(b instanceof Eu))return 1;return 0;}b=b;c=a.mz;d=new I;e=G(1);f=e.data;f[0]=c;d.j4=L(e.data,0,f.length);b=b.nl;if(0>=d.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}return (!b.gf(d.j4.charCodeAt(0))?(-1):1)<=0?0:1;};
function Nz(){Cx.call(this);this.r0=0;}
let WN=(a,b,c)=>{let d;d=a.r0;if(b>=0&&b<c.j4.length){b=c.j4.charCodeAt(b);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}b=Cv(BZ,b)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return d!=(Cv(B0,b)&65535)?(-1):1;}c=new W;c.j5=1;c.j6=1;B(c);},
ALz=a=>{let b,c,d,e,f,g,h;b=a.r0;c=new K;c.j3=G(16);D(c,c.j2,A(401));d=c.j2;Bj(c,d,d+1|0);e=c.j3;f=e.data;f[d]=b;g=new I;d=c.j2;h=f.length;if(d>=0&&d<=(h-0|0)){g.j4=L(e.data,0,d);return g;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);};
function Ka(){let a=this;Cx.call(a);a.ta=0;a.tB=0;}
let Xw=(a,b,c)=>{let d;d=a.ta;if(b>=0&&b<c.j4.length){a:{b:{if(d!=c.j4.charCodeAt(b)){d=a.tB;if(b<0)break a;if(b>=c.j4.length)break a;if(d!=c.j4.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);},
AFZ=a=>{let b,c,d,e,f,g,h;b=a.ta;c=new K;c.j3=G(16);D(c,c.j2,A(402));d=c.j2;Bj(c,d,d+1|0);e=c.j3;f=e.data;f[d]=b;g=new I;d=c.j2;h=f.length;if(d>=0&&d<=(h-0|0)){g.j4=L(e.data,0,d);return g;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);};
function Fs(){let a=this;Cn.call(a);a.pv=0;a.n3=null;a.pd=null;a.o$=0;}
let ASj=(a,b)=>{a.kd=b;},
ALD=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=X(4);f=d.kQ;if(b>=f)return (-1);g=LS(a,b,c,f);h=b+a.pv|0;i=QD.gu(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Di(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=LS(a,h,c,f);while(b<4){if(!AMe(g)){k=b+1|0;i[b]=g;}else{j=(QD.gu(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.pv|0;if(h>=f){b=k;break a;}g=LS(a,h,c,f);b=k;}}}if(b!=a.o$)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.kd.fI(h,c,d);if(j[g]!=a.pd.data[g])break;g
=g+1|0;}return (-1);},
ALh=a=>{let b,c,d,e,f,g,h,i;if(a.n3===null){b=new K;b.j3=G(16);c=0;while(c<a.o$){d=E6(a.pd.data[c]);e=d.data.length;Kk(b,b.j2,d,0,e);c=c+1|0;}f=new I;d=b.j3;g=d.data;h=b.j2;e=g.length;if(h>=0&&h<=(e-0|0)){f.j4=L(d.data,0,h);a.n3=f;}else{b=new H;R(b);B(b);}}i=a.n3;b=new K;b.j3=G(16);D(b,b.j2,A(403));c=b.j2;if(i===null)i=A(2);D(b,c,i);f=new I;d=b.j3;g=d.data;h=b.j2;e=g.length;if(h>=0&&h<=(e-0|0)){f.j4=L(d.data,0,h);return f;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
LS=(a,b,c,d)=>{let e,f,g,h;a:{a.pv=1;if(b>=(d-1|0)){if(b>=0&&b<c.j4.length){e=c.j4.charCodeAt(b);break a;}c=new W;c.j5=1;c.j6=1;B(c);}d=b+1|0;if(b>=0&&b<c.j4.length){e=c.j4.charCodeAt(b);if(d>=0&&d<c.j4.length){f=c.j4.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=AAs(g,0,h.length);a.pv=2;}break a;}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}return e;},
AHG=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof Fs){b=b;if(b.n3===null){c=new K;c.j3=G(16);d=0;while(d<b.o$){e=E6(b.pd.data[d]);f=e.data.length;Kk(c,c.j2,e,0,f);d=d+1|0;}g=new I;e=c.j3;h=e.data;i=c.j2;f=h.length;if(i>=0&&i<=(f-0|0)){g.j4=L(e.data,0,i);b.n3=g;}else{b=new H;R(b);B(b);}}g=b.n3;if(a.n3===null){b=new K;b.j3=G(16);d=0;while(d<a.o$){e=E6(a.pd.data[d]);f=e.data.length;Kk(b,b.j2,e,0,f);d=d+1|0;}c=new I;e=b.j3;h=e.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0)){c.j4=L(e.data,0,f);a.n3=c;}else{b=new H;R(b);B(b);}}b
=a.n3;if(g===b)d=1;else if(!(b instanceof I))d=0;else{b=b;d=g.j4!==b.j4?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
ANo=(a,b)=>{return 1;};
let V2=F(Fs);
let Tx=F(Fs);
let Wv=F(DE);
let ABF=(a,b,c,d)=>{let e;while(true){e=a.kL.fI(b,c,d);if(e<=0)break;b=e;}return a.kd.fI(b,c,d);};
let Qp=F(DE);
let AJ_=(a,b,c,d)=>{let e;e=a.kL.fI(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.kL.fI(e,c,d);if(b<=e)break;e=b;}b=e;}return a.kd.fI(b,c,d);};
let GR=F(DE);
let APf=(a,b,c,d)=>{let e;if(!a.kL.gi(d))return a.kd.fI(b,c,d);e=a.kL.fI(b,c,d);if(e>=0)return e;return a.kd.fI(b,c,d);},
ARd=(a,b)=>{a.kd=b;a.kL.e8(b);};
let P_=F(GR);
let AHn=(a,b,c,d)=>{let e;e=a.kL.fI(b,c,d);if(e<=0)e=b;return a.kd.fI(e,c,d);},
AKL=(a,b)=>{a.kd=b;};
function Gb(){let a=this;DE.call(a);a.n6=null;a.ne=0;}
let ATB=(a,b,c,d)=>{let e,f,g,h;e=a.ne;e=d.nI.data[e];if(!a.kL.gi(d))return a.kd.fI(b,c,d);if(e>=a.n6.oK)return a.kd.fI(b,c,d);f=a.ne;e=e+1|0;d.nI.data[f]=e;g=a.kL.fI(b,c,d);if(g>=0){b=a.ne;d.nI.data[b]=0;return g;}g=a.ne;e=e+(-1)|0;h=d.nI.data;h[g]=e;if(e>=a.n6.oM)return a.kd.fI(b,c,d);h[g]=0;return (-1);},
ARn=a=>{return Mw(a.n6);};
let OH=F(Gb);
let AGq=(a,b,c,d)=>{let e,f,g;e=0;f=a.n6.oK;a:{while(true){g=a.kL.fI(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.n6.oM)return (-1);return a.kd.fI(b,c,d);};
let RW=F(DE);
let ASz=(a,b,c,d)=>{let e;if(!a.kL.gi(d))return a.kd.fI(b,c,d);e=a.kd.fI(b,c,d);if(e>=0)return e;return a.kL.fI(b,c,d);};
let Q7=F(GR);
let AAv=(a,b,c,d)=>{let e;if(!a.kL.gi(d))return a.kd.fI(b,c,d);e=a.kd.fI(b,c,d);if(e<0)e=a.kL.fI(b,c,d);return e;};
let Ub=F(Gb);
let YA=(a,b,c,d)=>{let e,f,g;e=a.ne;f=d.nI.data[e];if(!a.kL.gi(d))return a.kd.fI(b,c,d);g=a.n6;if(f>=g.oK){e=a.ne;d.nI.data[e]=0;return a.kd.fI(b,c,d);}if(f<g.oM){e=a.ne;d.nI.data[e]=f+1|0;e=a.kL.fI(b,c,d);}else{e=a.kd.fI(b,c,d);if(e>=0){b=a.ne;d.nI.data[b]=0;return e;}e=a.ne;d.nI.data[e]=f+1|0;e=a.kL.fI(b,c,d);}return e;};
let RX=F(EE);
let ATe=(a,b,c,d)=>{let e;e=d.kQ;if(e>b)return a.kd.f4(b,e,c,d);return a.kd.fI(b,c,d);},
APy=(a,b,c,d)=>{let e;e=d.kQ;if(a.kd.f4(b,e,c,d)>=0)return b;return (-1);},
AMP=a=>{return A(404);};
function Pt(){EE.call(this);this.sq=null;}
let AL9=(a,b,c,d)=>{let e,f,g;e=d.kQ;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.sq;if(f<0)break;if(f>=c.j4.length)break;if(g.gy(c.j4.charCodeAt(f)))break a;f=f+1|0;}c=new W;c.j5=1;c.j6=1;B(c);}if(f>=0)e=f;if(e>b)return a.kd.f4(b,e,c,d);return a.kd.fI(b,c,d);},
W8=(a,b,c,d)=>{let e,f,g,h,i;e=d.kQ;f=a.kd.fA(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.sq;if(g<0)break;if(g>=c.j4.length)break;if(h.gy(c.j4.charCodeAt(g)))break a;g=g+1|0;}c=new W;c.j5=1;c.j6=1;B(c);}if(g>=0)e=g;g=a.kd.f4(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.sq;if(i<0)break;if(i>=c.j4.length)break;if(d.gy(c.j4.charCodeAt(i)))break b;i=i+(-1)|0;}c=new W;c.j5=1;c.j6=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
AOk=a=>{return A(405);};
let HC=F();
let Gm=null,F$=null;
let Wx=F(DC);
let YF=(a,b,c,d)=>{let e;a:{while(true){if((b+a.le.f1()|0)>d.kQ)break a;e=a.le.f2(b,c);if(e<1)break;b=b+e|0;}}return a.kd.fI(b,c,d);};
let Vg=F(Fl);
let AJ4=(a,b,c,d)=>{let e;if((b+a.le.f1()|0)<=d.kQ){e=a.le.f2(b,c);if(e>=1)b=b+e|0;}return a.kd.fI(b,c,d);};
let P1=F(Fn);
let AOD=(a,b,c,d)=>{let e,f,g,h,i;e=a.pF;f=e.oM;g=e.oK;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.le.f1()|0)>d.kQ)break a;i=a.le.f2(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.kd.fI(b,c,d);}if((b+a.le.f1()|0)>d.kQ){d.mK=1;return (-1);}i=a.le.f2(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let QZ=F(DC);
let ALZ=(a,b,c,d)=>{let e;while(true){e=a.kd.fI(b,c,d);if(e>=0)break;if((b+a.le.f1()|0)<=d.kQ){e=a.le.f2(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let TA=F(Fl);
let YR=(a,b,c,d)=>{let e;e=a.kd.fI(b,c,d);if(e>=0)return e;return a.kL.fI(b,c,d);};
let RD=F(Fn);
let AOW=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pF;f=e.oM;g=e.oK;h=0;while(true){if(h>=f){a:{while(true){i=a.kd.fI(b,c,d);if(i>=0)break;if((b+a.le.f1()|0)<=d.kQ){i=a.le.f2(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.le.f1()|0)>d.kQ){d.mK=1;return (-1);}j=a.le.f2(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let LL=F(Cb);
let AIu=(a,b,c,d)=>{if(b&&!(d.pr&&b==d.mU))return (-1);return a.kd.fI(b,c,d);},
AGG=(a,b)=>{return 0;},
AJ5=a=>{return A(406);};
function K9(){Cb.call(this);this.u3=0;}
let ZM=(a,b,c,d)=>{let e,f,g;if(b>=d.kQ)e=32;else if(b>=0&&b<c.j4.length)e=c.j4.charCodeAt(b);else{c=new W;c.j5=1;c.j6=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.j4.length)f=c.j4.charCodeAt(f);else{c=new W;c.j5=1;c.j6=1;B(c);}}g=d.sI?0:d.mU;return (e!=32&&!Q$(a,e,b,g,c)?0:1)^(f!=32&&!Q$(a,f,b-1|0,g,c)?0:1)^a.u3?(-1):a.kd.fI(b,c,d);},
AAa=(a,b)=>{return 0;},
ATw=a=>{return A(407);},
Q$=(a,b,c,d,e)=>{let f;a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CS(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.j4.length)break c;e:{f:{f=e.j4.charCodeAt(c);switch(CS(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(CS(f)!=6)return 1;}}return 1;}e=new W;e.j5=1;e.j6=1;B(e);}return 0;};
let Pn=F(Cb);
let AG4=(a,b,c,d)=>{if(b!=d.rM)return (-1);return a.kd.fI(b,c,d);},
ATt=(a,b)=>{return 0;},
Zs=a=>{return A(408);};
function Nx(){Cb.call(this);this.qi=0;}
let AM3=(a,b,c,d)=>{let e,f,g;e=!d.pr?c.j4.length:d.kQ;if(b>=e){f=a.qi;d.lu.data[f]=0;return a.kd.fI(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.j4.length){if(c.j4.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.j4.length){if(c.j4.charCodeAt(g)!=10)break a;f=a.qi;d.lu.data[f]=0;return a.kd.fI(b,c,d);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.j4.length){f=c.j4.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new W;c.j5
=1;c.j6=1;B(c);}}return (-1);}e=a.qi;d.lu.data[e]=0;return a.kd.fI(b,c,d);},
ABq=(a,b)=>{let c,d,e;c=a.qi;d=b.lu.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AJe=a=>{return A(409);};
let Vv=F(Cb);
let ALr=(a,b,c,d)=>{if(b<(!d.sI?d.kQ:c.j4.length))return (-1);d.mK=1;d.zY=1;return a.kd.fI(b,c,d);},
WK=(a,b)=>{return 0;},
AFg=a=>{return A(410);};
function OO(){Cb.call(this);this.wE=null;}
let AA7=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.kQ){if(!b)break b;if(d.pr&&b==d.mU)break b;e=a.wE;f=b-1|0;if(f>=0&&f<c.j4.length){f=c.j4.charCodeAt(f);if(b<0)break a;if(b>=c.j4.length)break a;if(!e.gA(f,c.j4.charCodeAt(b)))break c;else break b;}c=new W;c.j5=1;c.j6=1;B(c);}}return (-1);}return a.kd.fI(b,c,d);}c=new W;c.j5=1;c.j6=1;B(c);},
AEL=(a,b)=>{return 0;},
Y4=a=>{return A(411);};
let Vr=F(Cn);
let ASE=(a,b,c,d)=>{let e,f,g,h,i;e=d.kQ;f=b+1|0;if(f>e){d.mK=1;return (-1);}if(b>=0&&b<c.j4.length){g=BU(c.j4.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.j4.length){h=c.j4.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.kd.fI(i,c,d);}c=new W;c.j5=1;c.j6=1;B(c);}}}return a.kd.fI(f,c,d);}c=new W;c.j5=1;c.j6=1;B(c);},
ACy=a=>{return A(412);},
AAi=(a,b)=>{a.kd=b;},
AKV=a=>{return (-2147483602);},
AAg=(a,b)=>{return 1;};
function PV(){Cn.call(this);this.uj=null;}
let ALj=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.kQ;f=b+1|0;if(f>e){d.mK=1;return (-1);}if(b>=0&&b<c.j4.length){g=c.j4.charCodeAt(b);h=BU(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.j4.length){i=c.j4.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.uj.gy(((g&1023)<<10|i&1023)+65536|0)?(-1):a.kd.fI(j,c,d);}c=new W;c.j5=1;c.j6=1;B(c);}}}return a.uj.gy(g)?(-1):a.kd.fI(f,c,d);}c=new W;c.j5=1;c.j6=1;B(c);},
ABD=a=>{return A(413);},
AOi=(a,b)=>{a.kd=b;},
Wy=a=>{return (-2147483602);},
AS9=(a,b)=>{return 1;};
function Vh(){Cb.call(this);this.sB=0;}
let AHS=(a,b,c,d)=>{let e,f;e=!d.pr?c.j4.length:d.kQ;if(b>=e){e=a.sB;d.lu.data[e]=0;return a.kd.fI(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.j4.length){if(c.j4.charCodeAt(b)!=10)break a;else{f=a.sB;d.lu.data[f]=1;return a.kd.fI(b+1|0,c,d);}}c=new W;c.j5=1;c.j6=1;B(c);}}return (-1);},
AEl=(a,b)=>{let c,d,e;c=a.sB;d=b.lu.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AIH=a=>{return A(409);};
function SQ(){Cb.call(this);this.sM=0;}
let ALp=(a,b,c,d)=>{let e;if((!d.pr?c.j4.length-b|0:d.kQ-b|0)<=0){e=a.sM;d.lu.data[e]=0;return a.kd.fI(b,c,d);}if(b>=0&&b<c.j4.length){if(c.j4.charCodeAt(b)!=10)return (-1);e=a.sM;d.lu.data[e]=1;return a.kd.fI(b+1|0,c,d);}c=new W;c.j5=1;c.j6=1;B(c);},
AD8=(a,b)=>{let c,d,e;c=a.sM;d=b.lu.data;e=!d[c]?0:1;d[c]=(-1);return e;},
X9=a=>{return A(414);};
function Oe(){Cb.call(this);this.qP=0;}
let AGx=(a,b,c,d)=>{let e,f,g;e=!d.pr?c.j4.length-b|0:d.kQ-b|0;if(!e){e=a.qP;d.lu.data[e]=0;return a.kd.fI(b,c,d);}a:{if(e<2){if(b>=0&&b<c.j4.length){f=c.j4.charCodeAt(b);g=97;break a;}c=new W;c.j5=1;c.j6=1;B(c);}if(b>=0&&b<c.j4.length){f=c.j4.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.j4.length){g=c.j4.charCodeAt(e);break a;}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.qP;d.lu.data[e]=0;return a.kd.fI(b,c,d);case 13:if(g!=10){e=a.qP;d.lu.data[e]=0;return a.kd.fI(b,
c,d);}e=a.qP;d.lu.data[e]=0;return a.kd.fI(b,c,d);default:}return (-1);},
ABv=(a,b)=>{let c,d,e;c=a.qP;d=b.lu.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AEP=a=>{return A(415);};
function GH(){let a=this;Cn.call(a);a.q6=0;a.pM=0;}
let YJ=(a,b,c,d)=>{let e,f,g,h,i;e=IB(a,d);if(e!==null&&(b+e.j4.length|0)<=d.kQ){f=0;a:{b:{c:{d:{while(true){if(f>=e.j4.length){g=a.pM;d.lu.data[g]=e.j4.length;return a.kd.fI(b+e.j4.length|0,c,d);}if(f<0)break c;if(f>=e.j4.length)break c;h=e.j4.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.j4.length)break d;if(h!=c.j4.charCodeAt(i)){if(f<0)break a;if(f>=e.j4.length)break a;g=F9(e.j4.charCodeAt(f));if(i<0)break b;if(i>=c.j4.length)break b;if(g!=c.j4.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new W;c.j5=1;c.j6
=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}return (-1);},
ANi=(a,b)=>{a.kd=b;},
IB=(a,b)=>{let c,d,e,f,g;c=a.q6;d=b.l0.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.qq.j4.length?Ch(b.qq,f,g):null;},
Yf=a=>{let b,c,d,e,f,g,h;b=a.lx;c=new K;c.j3=G(16);D(c,c.j2,A(416));J(c,c.j2,b,10);d=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){d.j4=L(e.data,0,g);return d;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
ANR=(a,b)=>{let c,d,e;c=a.pM;d=b.lu.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Vp=F(GH);
let ABE=(a,b,c,d)=>{let e,f,g;e=IB(a,d);if(e!==null&&(b+e.j4.length|0)<=d.kQ){f=!MM(c,e,b)?(-1):e.j4.length;if(f<0)return (-1);g=a.pM;d.lu.data[g]=f;return a.kd.fI(b+f|0,c,d);}return (-1);},
AQB=(a,b,c,d)=>{let e,f,g;e=IB(a,d);f=d.mU;if(e!==null&&(b+e.j4.length|0)<=f){while(true){if(b>f)return (-1);g=Qr(c,e,b);if(g<0)return (-1);if(a.kd.fI(g+e.j4.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
X_=(a,b,c,d,e)=>{let f,g;f=IB(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=AC5(d,f,c);if(g<0)break a;if(g<b)break a;if(a.kd.fI(g+f.j4.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AJS=(a,b)=>{return 1;},
AQ$=a=>{let b,c,d,e,f,g,h;b=a.lx;c=new K;c.j3=G(16);D(c,c.j2,A(417));J(c,c.j2,b,10);d=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){d.j4=L(e.data,0,g);return d;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);};
function Rw(){GH.call(this);this.yt=0;}
let AIV=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.q6;f=d.l0.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.qq.j4.length?Ch(d.qq,h,i):null;if(j!==null&&(b+j.j4.length|0)<=d.kQ){i=0;a:{b:{while(true){if(i>=j.j4.length){e=a.pM;d.lu.data[e]=j.j4.length;return a.kd.fI(b+j.j4.length|0,c,d);}if(i<0)break a;if(i>=j.j4.length)break a;e=j.j4.charCodeAt(i);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}e=Cv(BZ,e)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value)
:null)));}g=Cv(B0,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.j4.length)break b;e=c.j4.charCodeAt(h);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}e=Cv(BZ,e)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}if(g!=(Cv(B0,e)&65535))break;i=i+1|0;}return (-1);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}return (-1);},
AAb=a=>{let b,c,d,e,f,g,h;b=a.yt;c=new K;c.j3=G(16);D(c,c.j2,A(418));J(c,c.j2,b,10);d=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){d.j4=L(e.data,0,g);return d;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);};
let Pj=F(Bc);
let ADW=(a,b,c,d,e)=>{let f,g,h,i;Bj(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.j3.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ZT=(a,b,c,d)=>{let e,f,g,h,i;e=a.j2;Bj(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.j3.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
AAE=(a,b)=>{Is(a,b);},
APD=(a,b,c)=>{Bj(a,b,b+1|0);a.j3.data[b]=c;return a;};
function R1(){let a=this;Cx.call(a);a.mj=null;a.tU=null;a.ut=null;}
let ACb=(a,b)=>{let c,d,e,f,g,h;c=O;O=c+1|0;d=new Bc;d.j3=G(20);a.km=(J(d,d.j2,c,10)).T();a.kT=1;d=new I;e=b.j3;f=e.data;g=b.j2;h=f.length;if(g>=0&&g<=(h-0|0)){d.j4=L(e.data,0,g);a.mj=d;c=b.j2;a.kT=c;a.tU=Tg(c);a.ut=Tg(a.kT);c=0;a:{b:{while(c<(a.kT-1|0)){b=a.tU;d=a.mj;if(c<0)break a;if(c>=d.j4.length)break a;RG(b,d.j4.charCodeAt(c),(a.kT-c|0)-1|0);b=a.ut;d=a.mj;g=(a.kT-c|0)-1|0;if(g<0)break b;if(g>=d.j4.length)break b;RG(b,d.j4.charCodeAt(g),(a.kT-c|0)-1|0);c=c+1|0;}return;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5
=1;b.j6=1;B(b);}b=new H;b.j5=1;b.j6=1;B(b);},
AGC=a=>{let b=new R1();ACb(b,a);return b;},
ACg=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.kT){e=d+b|0;if(e<0)break a;if(e>=c.j4.length)break a;f=c.j4.charCodeAt(e);g=a.mj;if(d<0)break b;if(d>=g.j4.length)break b;if(f!=g.j4.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.kT;}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);},
ZE=(a,b,c,d)=>{let e,f;e=d.kQ;while(true){if(b>e)return (-1);f=AQQ(a,c,b,e);if(f<0)return (-1);if(a.kd.fI(f+a.kT|0,c,d)>=0)break;b=f+1|0;}return f;},
AEE=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=APE(a,d,b,c);if(c<0)return (-1);if(a.kd.fI(c+a.kT|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
ALL=a=>{let b,c,d,e,f,g,h;b=a.mj;c=new K;c.j3=G(16);D(c,c.j2,A(419));d=c.j2;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){b.j4=L(e.data,0,g);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
AFO=(a,b)=>{let c,d,e;if(b instanceof Eb){c=b.mz;b=a.mj;if(0<b.j4.length)return c!=b.j4.charCodeAt(0)?0:1;b=new W;b.j5=1;b.j6=1;B(b);}if(b instanceof Ed){b=b;d=Ch(a.mj,0,1);b=b.nl;if(0>=d.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}return (!b.gf(d.j4.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof DQ)){if(!(b instanceof Eu))return 1;a:{if(a.mj.j4.length>1){e=b.p1;b=a.mj;if(0>=b.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}c=b.j4.charCodeAt(0);b=a.mj;if(1>=b.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}if(e==(((c&1023)<<10|
b.j4.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.mj;if(0>=d.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}b:{c:{if(!b.gf(d.j4.charCodeAt(0))){if(a.mj.j4.length<=1)break c;d=a.mj;if(0>=d.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}c=d.j4.charCodeAt(0);d=a.mj;if(1>=d.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}if(!b.gf(((c&1023)<<10|d.j4.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AQQ=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mj;f=a.kT-1|0;if(f>=0&&f<e.j4.length){g=e.j4.charCodeAt(f);a:{b:{c:{while(true){f=a.kT;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.j4.length)break c;h=b.j4.charCodeAt(f);if(h==g){f=0;d:{while(f<a.kT){i=f+c|0;if(i<0)break a;if(i>=b.j4.length)break a;j=b.j4.charCodeAt(i);e=a.mj;if(f<0)break b;if(f>=e.j4.length)break b;if(j!=e.j4.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+SK(a.tU,h)|0;}return c;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6
=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);},
APE=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mj;if(0>=e.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}f=e.j4.charCodeAt(0);g=(b.j4.length-d|0)-a.kT|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.j4.length)break c;h=b.j4.charCodeAt(d);if(h==f){g=0;d:{while(g<a.kT){i=g+d|0;if(i<0)break a;if(i>=b.j4.length)break a;j=b.j4.charCodeAt(i);e=a.mj;if(g<0)break b;if(g>=e.j4.length)break b;if(j!=e.j4.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-SK(a.ut,h)|0;}return d;}b=new W;b.j5=1;b.j6
=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);};
function Ob(){Cx.call(this);this.rt=null;}
let AI5=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.rt.j4.length)return a.rt.j4.length;e=a.rt;if(d<0)break a;if(d>=e.j4.length)break a;f=e.j4.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.j4.length)break b;h=c.j4.charCodeAt(g);if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}h=Cv(BZ,h)&65535;if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}if(f!=(Cv(B0,h)&65535))break;d=d+1|0;}return (-1);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6
=1;B(c);},
AF0=a=>{let b,c,d,e,f,g,h;b=a.rt;c=new K;c.j3=G(16);D(c,c.j2,A(420));d=c.j2;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){b.j4=L(e.data,0,g);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
function OK(){Cx.call(this);this.qo=null;}
let AOF=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.qo.j4.length)return a.qo.j4.length;e=a.qo;if(d<0)break c;if(d>=e.j4.length)break c;f=e.j4.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.j4.length)break d;if(f!=c.j4.charCodeAt(g)){e=a.qo;if(d<0)break a;if(d>=e.j4.length)break a;h=F9(e.j4.charCodeAt(d));if(g<0)break b;if(g>=c.j4.length)break b;if(h!=c.j4.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=
1;c.j6=1;B(c);},
AQo=a=>{let b,c,d,e,f,g,h;b=a.qo;c=new K;c.j3=G(16);D(c,c.j2,A(421));d=c.j2;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){b.j4=L(e.data,0,g);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
let ATS=F();
function N_(){Cx.call(this);this.ue=0;}
let AOJ=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.j4.length){e=c.j4.charCodeAt(b);if(d>=0&&d<c.j4.length){d=c.j4.charCodeAt(d);b=a.ue;d=((e&1023)<<10|d&1023)+65536|0;if(BZ===null){if(BK===null)BK=DU();BZ=Ct(Cy((BK.value!==null?U(BK.value):null)));}d=Cv(BZ,d);if(B0===null){if(BL===null)BL=DS();B0=Ct(Cy((BL.value!==null?U(BL.value):null)));}return b!=Cv(B0,d)?(-1):2;}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);},
ATu=a=>{let b,c,d,e,f,g;b=new I;c=E6(a.ue);b.j4=L(c.data,0,c.data.length);d=new K;d.j3=G(16);D(d,d.j2,A(401));D(d,d.j2,b);b=new I;c=d.j3;e=c.data;f=d.j2;g=e.length;if(f>=0&&f<=(g-0|0)){b.j4=L(c.data,0,f);return b;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
function HF(){Cn.call(this);this.oT=0;}
let ALV=(a,b)=>{a.kd=b;},
KX=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.kQ){d.mK=1;return (-1);}if(b>=0&&b<c.j4.length){a:{f=c.j4.charCodeAt(b);if(b>d.mU){b=b-1|0;if(b>=0&&b<c.j4.length){if(!((c.j4.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new W;c.j5=1;c.j6=1;B(c);}}if(a.oT!=f)return (-1);return a.kd.fI(e,c,d);}c=new W;c.j5=1;c.j6=1;B(c);},
AFI=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof I)){e=d.kQ;a:{while(true){if(b>e){b=(-1);break a;}if(KX(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.mU;g=d.kQ;b:{while(true){if(b>=g)return (-1);h=HK(c,a.oT,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.j4.length)break b;if((c.j4.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.kd;b=h+1|0;if(i.fI(b,c,d)>=0)break;}return h;}c=new W;c.j5=1;c.j6=1;B(c);},
ACv=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(KX(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.mU;b:{c:{while(true){if(c<b)return (-1);g=EY(d,a.oT,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.j4.length)break b;if((d.j4.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.kd.fI(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new W;d.j5=1;d.j6=1;B(d);},
APQ=a=>{let b,c,d,e,f,g,h;b=a.oT;c=new K;c.j3=G(16);d=c.j2;Bj(c,d,d+1|0);e=c.j3;f=e.data;f[d]=b;g=new I;d=c.j2;h=f.length;if(d>=0&&d<=(h-0|0)){g.j4=L(e.data,0,d);return g;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
XZ=(a,b)=>{if(b instanceof Eb)return 0;if(b instanceof Ed)return 0;if(b instanceof DQ)return 0;if(b instanceof Eu)return 0;if(b instanceof HL)return 0;if(!(b instanceof HF))return 1;return b.oT!=a.oT?0:1;},
AP5=(a,b)=>{return 1;};
function HL(){Cn.call(this);this.oD=0;}
let AAB=(a,b)=>{a.kd=b;},
Kb=(a,b,c,d)=>{let e,f,g;e=d.kQ;f=b+1|0;e=BU(f,e);if(e>0){d.mK=1;return (-1);}if(b>=0&&b<c.j4.length){a:{g=c.j4.charCodeAt(b);if(e<0){if(f>=0&&f<c.j4.length){if(!((c.j4.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new W;c.j5=1;c.j6=1;B(c);}}if(a.oD!=g)return (-1);return a.kd.fI(f,c,d);}c=new W;c.j5=1;c.j6=1;B(c);},
AMw=(a,b,c,d)=>{let e,f;if(!(c instanceof I)){e=d.kQ;a:{while(true){if(b>e){b=(-1);break a;}if(Kb(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.kQ;b:{while(true){if(b>=e)return (-1);f=HK(c,a.oD,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.j4.length)break b;if((c.j4.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.kd.fI(b,c,d)>=0)break;}return f;}c=new W;c.j5=1;c.j6=1;B(c);},
AOE=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(Kb(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.kQ;b:{c:{while(true){if(c<b)return (-1);g=EY(d,a.oD,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.j4.length)break b;if((d.j4.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.kd.fI(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new W;d.j5=1;d.j6=1;B(d);},
ASC=a=>{let b,c,d,e,f,g,h;b=a.oD;c=new K;c.j3=G(16);d=c.j2;Bj(c,d,d+1|0);e=c.j3;f=e.data;f[d]=b;g=new I;d=c.j2;h=f.length;if(d>=0&&d<=(h-0|0)){g.j4=L(e.data,0,d);return g;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
ACk=(a,b)=>{if(b instanceof Eb)return 0;if(b instanceof Ed)return 0;if(b instanceof DQ)return 0;if(b instanceof Eu)return 0;if(b instanceof HF)return 0;if(!(b instanceof HL))return 1;return b.oD!=a.oD?0:1;},
AMI=(a,b)=>{return 1;};
function Eu(){let a=this;Cx.call(a);a.pQ=0;a.pm=0;a.p1=0;}
let ANS=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.j4.length){e=c.j4.charCodeAt(b);if(d>=0&&d<c.j4.length){d=c.j4.charCodeAt(d);return a.pQ==e&&a.pm==d?2:(-1);}c=new W;c.j5=1;c.j6=1;B(c);}c=new W;c.j5=1;c.j6=1;B(c);},
AKD=(a,b,c,d)=>{let e,f,g,h;if(c instanceof I){e=d.kQ;a:{while(b<e){b=HK(c,a.pQ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.j4.length)break a;f=c.j4.charCodeAt(b);if(a.pm==f&&a.kd.fI(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new W;c.j5=1;c.j6=1;B(c);}g=d.kQ;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.kT|0)>d.kQ){d.mK=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.j4.length)break b;e=c.j4.charCodeAt(b);if(h<0)break c;if(h>=c.j4.length)break c;f=c.j4.charCodeAt(h);h
=a.pQ==e&&a.pm==f?2:(-1);h=h<0?(-1):a.kd.fI(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new W;R(c);B(c);}c=new W;R(c);B(c);},
AAz=(a,b,c,d,e)=>{let f,g,h;if(d instanceof I){a:{b:{while(true){if(c<b)return (-1);c=EY(d,a.pm,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.pQ;if(c<0)break a;if(c>=d.j4.length)break a;if(f==d.j4.charCodeAt(c)&&a.kd.fI(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new W;d.j5=1;d.j6=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.kT|0)>e.kQ){e.mK=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.j4.length)break c;h=d.j4.charCodeAt(c);if(g<0)break d;if(g>=d.j4.length)break d;g=d.j4.charCodeAt(g);f
=a.pQ==h&&a.pm==g?2:(-1);f=f<0?(-1):a.kd.fI(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new W;R(d);B(d);}d=new W;R(d);B(d);},
ARe=a=>{let b,c,d,e,f,g,h;b=a.pQ;c=a.pm;d=new K;d.j3=G(16);e=d.j2;Bj(d,e,e+1|0);d.j3.data[e]=b;b=d.j2;Bj(d,b,b+1|0);f=d.j3;g=f.data;g[b]=c;h=new I;c=d.j2;e=g.length;if(c>=0&&c<=(e-0|0)){h.j4=L(f.data,0,c);return h;}d=new H;d.j5=1;d.j6=1;Bi(d);B(d);},
ANu=(a,b)=>{if(b instanceof Eu)return b.p1!=a.p1?0:1;if(b instanceof DQ)return b.gf(a.p1);if(b instanceof Eb)return 0;if(!(b instanceof Ed))return 1;return 0;};
let JA=F(HC);
let AAN=(a,b)=>{return b!=10?0:1;},
ANE=(a,b,c)=>{return b!=10?0:1;};
let JB=F(HC);
let AOZ=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AR5=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function T_(){let a=this;C.call(a);a.vh=null;a.tr=null;a.q_=0;a.xZ=0;}
let AG0=(a,b)=>{let c,d;while(true){c=a.q_;if(b<c)break;a.q_=c<<1|1;}d=c<<1|1;a.q_=d;d=d+1|0;a.vh=X(d);a.tr=X(d);a.xZ=b;},
Tg=a=>{let b=new T_();AG0(b,a);return b;},
RG=(a,b,c)=>{let d,e,f,g;d=0;e=a.q_;f=b&e;while(true){g=a.vh.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.tr.data[f]=c;},
SK=(a,b)=>{let c,d,e,f;c=a.q_;d=b&c;e=0;while(true){f=a.vh.data[d];if(!f)break;if(f==b)return a.tr.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xZ;};
let Jg=F(Bx);
let AGa=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return C4(BT(b,9,13),32);};
let IF=F(Bx);
let AIX=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(b,48,57);};
let TW=F(Bx);
let AOp=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(b,97,122);};
let Uy=F(Bx);
let AP6=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(b,65,90);};
let UD=F(Bx);
let ADf=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(b,0,127);};
let Ja=F(Bx);
let ABk=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(BT(b,97,122),65,90);};
let Jx=F(Ja);
let AEf=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(BT(BT(b,97,122),65,90),48,57);};
let Wo=F(Bx);
let AFH=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(BT(BT(b,33,64),91,96),123,126);};
let J8=F(Jx);
let WR=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(BT(BT(BT(BT(BT(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let RZ=F(J8);
let AJJ=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return C4(BT(BT(BT(BT(BT(BT(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let Sq=F(Bx);
let AB$=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return C4(C4(b,32),9);};
let Ql=F(Bx);
let AJB=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return C4(BT(b,0,31),127);};
let P8=F(Bx);
let AR$=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(BT(BT(b,48,57),97,102),65,70);};
let UI=F(Bx);
let AKR=a=>{let b,c;b=new SU;b.zq=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let Ww=F(Bx);
let W2=a=>{let b,c;b=new Ok;b.zv=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let T$=F(Bx);
let AGB=a=>{let b,c;b=new Sf;b.y8=a;c=new Bm;c.kl=X(64);b.kp=c;return b;};
let TO=F(Bx);
let ANW=a=>{let b,c;b=new Se;b.yY=a;c=new Bm;c.kl=X(64);b.kp=c;return b;};
let U9=F(Bx);
let AB8=a=>{let b,c;b=new VD;b.z1=a;c=new Bm;c.kl=X(64);b.kp=c;IT(c,0,2048);b.lk=1;return b;};
let O5=F(Bx);
let ACG=a=>{let b,c;b=new PW;b.zF=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let OF=F(Bx);
let ARW=a=>{let b,c;b=new Pf;b.Ai=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let Ug=F(Bx);
let WO=a=>{let b,c;b=new Rh;b.zr=a;c=new Bm;c.kl=X(64);b.kp=c;return b;};
let Us=F(Bx);
let AH7=a=>{let b,c;b=new Og;b.x$=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let QG=F(Bx);
let ACU=a=>{let b,c;b=new Oj;b.zH=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let Sv=F(Bx);
let AEQ=a=>{let b,c;b=new O9;b.z0=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let V3=F(Bx);
let AIb=a=>{let b,c;b=new Qd;b.Ab=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let Up=F(Bx);
let AQv=a=>{let b,c;b=new Qi;b.y9=a;c=new Bm;c.kl=X(64);b.kp=c;return b;};
let Rp=F(Bx);
let AMV=a=>{let b,c;b=new Tn;b.zK=a;c=new Bm;c.kl=X(64);b.kp=c;return b;};
let QF=F(Bx);
let AKG=a=>{let b,c;b=new SD;b.yd=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let Ws=F(Bx);
let AOd=a=>{let b,c;b=new Ow;b.Ar=a;c=new Bm;c.kl=X(64);b.kp=c;b.lk=1;return b;};
let Io=F(Bx);
let AIz=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return C4(BT(BT(BT(b,97,122),65,90),48,57),95);};
let Vc=F(Io);
let AKe=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;b=EO(C4(BT(BT(BT(b,97,122),65,90),48,57),95),1);b.lk=1;return b;};
let R2=F(Jg);
let ZB=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;b=EO(C4(BT(b,9,13),32),1);b.lk=1;return b;};
let QA=F(IF);
let AFw=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;b=EO(BT(b,48,57),1);b.lk=1;return b;};
function Bu(){let a=this;Bx.call(a);a.kv=0;a.kw=0;}
let ARU=(a,b,c)=>{a.kv=b;a.kw=c;},
BH=(a,b)=>{let c=new Bu();ARU(c,a,b);return c;},
AID=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(b,a.kv,a.kw);};
let Qw=F(Bx);
let ARH=a=>{let b,c;b=new CH;c=new Bm;c.kl=X(64);b.kp=c;c=new Bm;c.kl=X(2);b.kr=c;return BT(BT(b,65279,65279),65520,65533);};
function LP(){let a=this;Bx.call(a);a.uU=0;a.tk=0;a.vX=0;}
let ABu=(a,b,c)=>{a.tk=c;a.uU=b;},
Cd=(a,b)=>{let c=new LP();ABu(c,a,b);return c;},
ARV=(a,b,c,d)=>{a.vX=d;a.tk=c;a.uU=b;},
AIw=(a,b,c)=>{let d=new LP();ARV(d,a,b,c);return d;},
AD0=a=>{let b,c,d;b=new JY;c=a.uU;d=new Bm;d.kl=X(64);b.kp=d;b.sO=c;if(a.vX)IT(d,0,2048);b.lk=a.tk;return b;};
function LW(){let a=this;Bx.call(a);a.uS=0;a.tt=0;a.vC=0;}
let ACV=(a,b,c)=>{a.tt=c;a.uS=b;},
GK=(a,b)=>{let c=new LW();ACV(c,a,b);return c;},
WQ=(a,b,c,d)=>{a.vC=d;a.tt=c;a.uS=b;},
AGy=(a,b,c)=>{let d=new LW();WQ(d,a,b,c);return d;},
WP=a=>{let b,c,d;b=new R6;c=a.uS;d=new Bm;d.kl=X(64);b.kp=d;b.sO=c;if(a.vC)IT(d,0,2048);b.lk=a.tt;return b;};
let D1=F(Bz);
let Yt=F();
let ACl=F();
let AAu=F();
let ASm=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new M4;d=G(b.j4.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.tM=d;f=F5(c);d=X(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=F5(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=F5(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.j4.length)break;e[f]=b.j4.charCodeAt(f);f=f+1|0;}b=new W;b.j5=1;b.j6=1;B(b);},
Cy=b=>{let c,d,e,f,g,h,i,j,k,l;c=new M4;d=G(b.j4.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.tM=d;f=F5(c);d=X(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+F5(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=F5(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.j4.length)break;e[f]=b.j4.charCodeAt(f);f=f+1|0;}b=new W;b.j5=1;b.j6=1;B(b);},
Ct=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=X(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bk;l.j5=1;l.j6=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new UM;l.wC=b;l.wP=c;return l;},
I1=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
ATN=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=Q(In,16384);d=c.data;e=BI(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.j4.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BC;b.kj=j;k=b;j.classObject=k;}}b=Ei(b);if(b===null){b=new Df;b.j5=1;b.j6=1;B(b);}if(b===M(Bo)){b=new Bk;b.j5=1;b.j6=1;B(b);}if(g<0){b=new D1;b.j5=1;b.j6=1;B(b);}k=DY(b.kj,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.j4.length)break c;l=I1(b.j4.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.j4.length)break b;l=I1(b.j4.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.j4.length)break a;m=m|Dl(n,I1(b.j4.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.j4.length)break;m=I1(b.j4.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new In;l=h+f|0;q=BI(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.t1=h;j.uq=l;j.t5=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new In;t=h+f|0;q=BI(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.t1=h;j.uq=t;j.t5=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);}b=new W;b.j5=1;b.j6=1;B(b);};
function UM(){let a=this;C.call(a);a.wC=null;a.wP=null;}
function In(){let a=this;C.call(a);a.t1=0;a.uq=0;a.t5=null;}
function M4(){let a=this;C.call(a);a.tM=null;a.ws=0;}
let AFE=F();
let F5=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.tM.data;f=b.ws;b.ws=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Dl(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AOq=F();
function QR(){let a=this;DH.call(a);a.vS=null;a.vR=0;a.qZ=null;}
let APz=(a,b)=>{return;},
ACY=(a,b)=>{let c,d,e,f,g,h;if(BW===null){b=new CO;c=new Ck;c.lL=BI(32);b.l6=c;c=new K;Bt(c);c.j3=G(16);b.lQ=c;b.lP=G(32);b.lR=0;b.lS=Cg;BW=b;}b=a.vS;c=new K;c.j3=G(16);D(c,c.j2,A(422));d=c.j2;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){b.j4=L(e.data,0,g);BX(Bw(b));BX("\n");return;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
YG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(Kv(IK(A(117),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.qZ;b.uf=b.sh.j8;if(a.vR){e=0;while(true){b=a.qZ;c=b.sh;f=BU(e,c.j8);if(f>=0)break a;if(f>=0){g=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,e,10);D(b,b.j2,A(19));e=c.j8;J(b,b.j2,e,10);c=new I;d=b.j3;h=d.data;f=b.j2;i=h.length;if(f>=0&&f<=(i-0|0)){c.j4=L(d.data,0,f);g.j5=1;g.j6=1;g.j7=c;B(g);}b=new H;R(b);B(b);}AF6(b,c.j_.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(Kv(IK(A(115),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AHR(h[1]);b=h[2];if(b===null){b=new Cu;b.j5=1;b.j6=1;b.j7=A(84);B(b);}m=APY(b,0,b.j4.length,10);n=h[3];o=FJ;if(k===A(423))i=1;else if(!(A(423) instanceof I))i=0;else{b=A(423);i=k.j4!==b.j4?0:1;}if(i)o=FA;if(k===A(424))i=1;else if(!(A(424) instanceof I))i=0;else{b=A(424);i=k.j4!==b.j4?0:1;}if(i)o=Fp;if(k===A(425))i=1;else if(!(A(425) instanceof I))i=0;else{b=A(425);i=k.j4!==b.j4?0:1;}if(i)o=Fi;if(k===A(233))i=1;else if(!(A(233) instanceof I))i=0;else{b=A(233);i=k.j4!==b.j4?0:1;}if(i)o=JV;if
(o===Fi&&!Gq.xs)m=Ca;g=new SG;g.t9=l;g.v3=o;g.xI=m;g.vU=n;Ce(a.qZ.wh,l,l);Bf(a.qZ.sh,g);f=f+1|0;}b=new S;b.j5=1;b.j6=1;b.j7=A(426);B(b);},
AKr=(a,b,c)=>{return YG(a,b,c);};
let CP=F(BG);
let AAP=null,AKZ=null,AB4=null,AB3=null,AAV=null,AAy=null,ZX=null,ABR=null,ZC=null,AHy=null;
let Iy=()=>{Iy=BQ(CP);Yk();};
let Yk=()=>{let b,c,d,e,f,g,h,i,j;b=new U2;Iy();b.kk=A(427);b.ke=0;AAP=b;c=new U3;c.kk=A(428);c.ke=1;AKZ=c;d=new U7;d.kk=A(429);d.ke=2;AB4=d;e=new U8;e.kk=A(430);e.ke=3;AB3=e;f=new U5;f.kk=A(431);f.ke=4;AAV=f;g=new U6;g.kk=A(432);g.ke=5;AAy=g;h=new U0;h.kk=A(433);h.ke=6;ZX=h;i=new U1;i.kk=A(434);i.ke=7;ABR=i;j=new UY;j.kk=A(435);j.ke=8;ZC=j;AHy=T(CP,[b,c,d,e,f,g,h,i,j]);};
function FI(){let a=this;Hv.call(a);a.pu=0;a.nd=null;}
let AS4=F(0);
let Z6=b=>{let c,d;if(b===A(436))c=1;else if(!(A(436) instanceof I))c=0;else{d=A(436);c=b.j4!==d.j4?0:1;}a:{if(!c){if(b===A(437))c=1;else if(!(A(437) instanceof I))c=0;else{d=A(437);c=b.j4!==d.j4?0:1;}if(!c){if(b===A(438))c=1;else if(!(A(438) instanceof I))c=0;else{d=A(438);c=b.j4!==d.j4?0:1;}if(!c){if(b===A(439))c=1;else if(!(A(439) instanceof I))c=0;else{d=A(439);c=b.j4!==d.j4?0:1;}if(!c){if(b===A(440))c=1;else if(!(A(440) instanceof I))c=0;else{d=A(440);c=b.j4!==d.j4?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AGd=b=>{let c,d;if(b===A(441))c=1;else if(!(A(441) instanceof I))c=0;else{d=A(441);c=b.j4!==d.j4?0:1;}a:{b:{if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof I))c=0;else{d=A(442);c=b.j4!==d.j4?0:1;}if(c)break b;if(b===A(443))c=1;else if(!(A(443) instanceof I))c=0;else{d=A(443);c=b.j4!==d.j4?0:1;}if(c)break b;if(b===A(444))c=1;else if(!(A(444) instanceof I))c=0;else{d=A(444);c=b.j4!==d.j4?0:1;}if(c)break b;if(b===A(445))c=1;else if(!(A(445) instanceof I))c=0;else{d=A(445);c=b.j4!==d.j4?0:1;}if(c)break b;if
(b===A(446))c=1;else if(!(A(446) instanceof I))c=0;else{d=A(446);c=b.j4!==d.j4?0:1;}if(c)break b;if(b===A(447))c=1;else if(!(A(447) instanceof I))c=0;else{d=A(447);c=b.j4!==d.j4?0:1;}if(c)break b;if(b===A(448))c=1;else if(!(A(448) instanceof I))c=0;else{d=A(448);c=b.j4!==d.j4?0:1;}if(c)break b;if(b===A(449))c=1;else if(!(A(449) instanceof I))c=0;else{d=A(449);c=b.j4!==d.j4?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let TY=F(0);
let Qu=F();
let ARO=(a,b,c)=>{a.gM(U(b),Du(c,"handleEvent"));},
AK4=(a,b)=>{return !!a.gN(b);},
AAC=(a,b,c)=>{a.gO(U(b),Du(c,"handleEvent"));},
AHs=(a,b,c,d)=>{a.gP(U(b),Du(c,"handleEvent"),d?1:0);},
AO8=(a,b,c,d)=>{a.gQ(U(b),Du(c,"handleEvent"),d?1:0);};
function MD(){let a=this;C.call(a);a.t0=null;a.vm=null;a.r$=null;a.vq=0;a.sX=null;}
let ALf=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.t0;if(e!==Fp&&e!==Fi){if(e===FA){b=window.document.createElement("img");d=Bw(U(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new Il;d.nt=c;d.uB=e;d.uM=b;}else if(e===FJ)d=U(c.result);}else{e=c.result;b=new Int8Array(e);d=new Il;d.nt=b;d.uB=e;}if(d!==null){GY(a.sX.vW,a.t0,a.vm,d);Bf(a.r$,a.vm);if(a.r$.j8==a.vq){b=a.sX.vI;d=new Oz;d.um=a;Bf(b.rG,d);}}},
AJd=(a,b)=>{ALf(a,b);};
function Fr(){BG.call(this);this.rC=null;}
let FA=null,Fi=null,FJ=null,Fp=null,JV=null,NK=null;
let ALq=()=>{let b,c,d,e,f;b=new Fr;b.kk=A(450);b.ke=0;b.rC=A(423);FA=b;c=new Fr;c.kk=A(451);c.ke=1;c.rC=A(425);Fi=c;d=new Fr;d.kk=A(452);d.ke=2;d.rC=A(453);FJ=d;e=new Fr;e.kk=A(454);e.ke=3;e.rC=A(424);Fp=e;f=new Fr;f.kk=A(455);f.ke=4;f.rC=A(233);JV=f;NK=T(Fr,[b,c,d,e,f]);};
let AGv=F();
let Lc=null,Pi=null;
let API=b=>{let c,d,e,f,g,h,i,j,k,l;c=new K;c.j3=G(16);d=AOc();e=0;f=Pi.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.j2;if(i>0){Bj(c,i,i+1|0);c.j3.data[i]=32;}j=d.data[e];D(c,c.j2,j);}e=e+1|0;h=h+1|0;}j=new I;d=c.j3;k=d.data;e=c.j2;l=k.length;if(e>=0&&e<=(l-0|0)){j.j4=L(d.data,0,e);return j;}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
AOc=()=>{if(Lc===null)Lc=T(I,[A(456),A(457),A(458),A(459),A(460),A(461),A(462),A(463),A(464),A(465),A(466),A(467)]);return Lc;},
Yg=()=>{Pi=Iw([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let RR=F(0);
function Hy(){let a=this;MR.call(a);a.lH=null;a.y4=null;a.rz=0;a.sw=0;a.oQ=null;a.uZ=null;}
let Zb=a=>{let b,c,d,e,f,g,h;b=new K;b.j3=G(16);c=API(Lb(a.rz,a.sw));D(b,b.j2,c);d=b.j2;if(d>0){Bj(b,d,d+1|0);b.j3.data[d]=32;}c=a.lH;if(c.kc===null)c.kc=U(c.kj.$meta.name);c=c.kc;D(b,b.j2,c);d=b.j2;Bj(b,d,d+1|0);b.j3.data[d]=40;e=a.oQ.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.j2;Bj(b,h,h+1|0);b.j3.data[h]=44;}c=g[f];if(c.kc===null)c.kc=U(c.kj.$meta.name);c=c.kc;D(b,b.j2,c);f=f+1|0;}d=b.j2;Bj(b,d,d+1|0);g=b.j3;e=g.data;e[d]=41;c=new I;d=b.j2;h=e.length;if(d>=0&&d<=(h-0|0)){c.j4=L(g.data,
0,d);return c;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
AO$=(a,b)=>{let c,d,e,f,g;if(a.rz&1){c=new MB;c.j5=1;c.j6=1;B(c);}if(a.uZ===null){c=new J_;c.j5=1;c.j6=1;B(c);}d=b.data;e=d.length;if(e!=a.oQ.data.length){c=new Bk;c.j5=1;c.j6=1;B(c);}f=0;while(f<e){if(!(a.oQ.data[f].kj.$meta.primitive?1:0)&&d[f]!==null){c=a.oQ.data[f];g=d[f];c=c.kj;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MA(g.constructor,c)?1:0)){c=new Bk;c.j5=1;c.j6=1;B(c);}}if((a.oQ.data[f].kj.$meta.primitive?1:0)&&d[f]===null){c=new Bk;c.j5=1;c.j6=1;B(c);}f=f+1|0;}c=b.data;g=new(a.lH.kj);a.uZ.call(g,
c);return g;};
let W=F(H);
function Vj(){let a=this;Bp.call(a);a.vL=null;a.z6=null;}
let ADo=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.my^CG(a.vL,c):0;};
function Vi(){let a=this;Bp.call(a);a.xv=null;a.xJ=null;a.zN=null;}
let XC=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.my^CG(a.xv,c):0;return a.xJ.gf(b)&&!d?1:0;};
function Py(){let a=this;Bp.call(a);a.sn=null;a.yg=null;}
let AIm=(a,b)=>{return a.kK^CG(a.sn,b);},
AE8=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.j3=G(16);c=Ic(a.sn,0);while(c>=0){d=(E6(c)).data;e=0;f=d.length;g=b.j2;Bj(b,g,g+f|0);f=f+e|0;while(e<f){h=b.j3.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.j2;Bj(b,g,g+1|0);b.j3.data[g]=124;c=Ic(a.sn,c+1|0);}e=b.j2;if(e>0)Vt(b,e-1|0);k=new I;d=b.j3;h=d.data;e=b.j2;g=h.length;if(e>=0&&e<=(g-0|0)){k.j4=L(d.data,0,e);return k;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);};
function PF(){let a=this;Bp.call(a);a.ww=null;a.zu=null;}
let ANU=(a,b)=>{return a.ww.gf(b);};
function PC(){let a=this;Bp.call(a);a.tl=0;a.vV=null;a.t7=null;}
let AOI=(a,b)=>{return !(a.tl^CG(a.t7.kr,b))&&!(a.tl^a.t7.nM^a.vV.gf(b))?0:1;};
function PD(){let a=this;Bp.call(a);a.ts=0;a.xA=null;a.uI=null;}
let AI4=(a,b)=>{return !(a.ts^CG(a.uI.kr,b))&&!(a.ts^a.uI.nM^a.xA.gf(b))?1:0;};
function PJ(){let a=this;Bp.call(a);a.xU=0;a.xD=null;a.xx=null;a.yD=null;}
let ACK=(a,b)=>{return a.xU^(!a.xD.gf(b)&&!a.xx.gf(b)?0:1);};
function PK(){let a=this;Bp.call(a);a.wz=0;a.wu=null;a.wm=null;a.An=null;}
let WB=(a,b)=>{return a.wz^(!a.wu.gf(b)&&!a.wm.gf(b)?0:1)?0:1;};
function PH(){let a=this;Bp.call(a);a.wk=null;a.Aq=null;}
let AFj=(a,b)=>{let c,d;c=a.wk;d=c.lo;return d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b);};
function PI(){let a=this;Bp.call(a);a.xH=null;a.yV=null;}
let AI6=(a,b)=>{let c,d;c=a.xH;d=c.lo;return (d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b))?0:1;};
function PL(){let a=this;Bp.call(a);a.wI=null;a.wv=0;a.xk=null;}
let AQE=(a,b)=>{let c,d,e;c=a.wI;d=c.lo;e=d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b);return !e&&!(a.wv^CG(a.xk.kr,b))?0:1;};
function PM(){let a=this;Bp.call(a);a.w2=null;a.w9=0;a.wT=null;}
let ABO=(a,b)=>{let c,d,e;c=a.w2;d=c.lo;e=d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b);return !e&&!(a.w9^CG(a.wT.kr,b))?1:0;};
function Px(){let a=this;Bp.call(a);a.xj=0;a.xz=null;a.xN=null;a.yl=null;}
let ATT=(a,b)=>{let c,d;a:{if(!(a.xj^a.xz.gf(b))){c=a.xN;d=c.lo;if(!(d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b))){b=0;break a;}}b=1;}return b;};
function P3(){let a=this;Bp.call(a);a.xL=0;a.vy=null;a.vD=null;a.yR=null;}
let AFs=(a,b)=>{let c,d;a:{if(!(a.xL^a.vy.gf(b))){c=a.vD;d=c.lo;if(!(d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b))){b=1;break a;}}b=0;}return b;};
function Pv(){let a=this;Bp.call(a);a.v$=null;a.yX=null;}
let ABL=(a,b)=>{let c,d;c=a.v$;d=c.lo;return d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b);};
function Pw(){let a=this;Bp.call(a);a.v_=null;a.Ak=null;}
let AEi=(a,b)=>{let c,d;c=a.v_;d=c.lo;return (d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b))?0:1;};
function PB(){let a=this;Bp.call(a);a.xT=null;a.wZ=0;a.x6=null;}
let AG9=(a,b)=>{let c,d,e;c=a.xT;d=c.lo;e=d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b);return e&&a.wZ^CG(a.x6.kr,b)?1:0;};
function Pu(){let a=this;Bp.call(a);a.xc=null;a.wA=0;a.wY=null;}
let AQd=(a,b)=>{let c,d,e;c=a.xc;d=c.lo;e=d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b);return e&&a.wA^CG(a.wY.kr,b)?0:1;};
function Pz(){let a=this;Bp.call(a);a.xl=0;a.vK=null;a.wy=null;a.yB=null;}
let ZZ=(a,b)=>{let c,d;a:{if(a.xl^a.vK.gf(b)){c=a.wy;d=c.lo;if(d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b)){b=1;break a;}}b=0;}return b;};
function PA(){let a=this;Bp.call(a);a.w_=0;a.vv=null;a.xi=null;a.y2=null;}
let AME=(a,b)=>{let c,d;a:{if(a.w_^a.vv.gf(b)){c=a.xi;d=c.lo;if(d!==null?c.kK^d.gf(b):c.kK^CG(c.kr,b)){b=0;break a;}}b=1;}return b;};
function IA(){let a=this;C.call(a);a.oI=null;a.uH=null;a.mk=null;a.mV=0;}
function Gu(){let a=this;C.call(a);a.Ao=null;a.nW=Ca;a.oN=Ca;a.m0=null;a.v4=null;a.nC=null;a.mZ=0;a.nX=null;}
let I5=null,B1=null,CR=0,Eq=0,RT=null;
let AIl=a=>{let b,c,$$je;a:{b:{c:{d:{try{Eq=Eq+1|0;AMW(a);a.c3();}catch($$e){$$je=Z($$e);if($$je instanceof Dr){b=$$je;break d;}else{b=$$je;break c;}}b=a.m0;FO(b);e:{try{NG(b);DL(b);break e;}catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}a.mZ=0;Eq=Eq-1|0;b=I5;if(B1!==b)B1=b;B1.oN=Em();break a;}try{YP(AFN(a),a,b);break b;}catch($$e){$$je=Z($$e);b=$$je;}}c=a.m0;FO(c);f:{try{NG(c);DL(c);break f;}catch($$e){$$je=Z($$e);b=$$je;}DL(c);B(b);}a.mZ=0;Eq=Eq-1|0;c=I5;if(B1!==c)B1=c;B1.oN=Em();B(b);}b=a.m0;FO(b);g:{try{NG(b);DL(b);break g;}
catch($$e){$$je=Z($$e);c=$$je;}DL(b);B(c);}a.mZ=0;Eq=Eq-1|0;b=I5;if(B1!==b)B1=b;B1.oN=Em();}},
AMW=b=>{if(B1!==b)B1=b;B1.oN=Em();},
ATV=()=>{return B1;},
K8=b=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQw(b);if(Fv()){break _;}return;default:Fm();}}Db().s(b,$p);},
ACH=(b,c)=>{let d,e;d=B1;e=new Ph;e.x7=d;e.xw=c;e.z7=Ne(e,AU1(b,V(2147483647))?2147483647:Bl(b));d.v4=e;},
AFN=a=>{let b;b=a.Ao;if(b!==null)return b;return RT;},
Zv=()=>{let b,c,d;b=new Gu;c=null;b.m0=new C;b.mZ=1;b.nC=A(468);b.nX=c;d=CR;CR=d+1|0;b.nW=V(d);I5=b;B1=b;CR=1;Eq=1;RT=new Sg;},
AQw=b=>{let thread=Db();let javaThread=W4();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;J$(javaThread);thread.resume();};callback.gZ=e=>{thread.attribute=APT(e);J$(javaThread);thread.resume();};callback=Sp(callback);thread.suspend(()=>{try {ACH(b,callback);;}catch(NV){callback.gZ(NV);}});return null;};
let BN=F(Bz);
let IN=F(Bz);
let ANZ=F();
let Sh=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let AEm=F();
let XX=F();
let F7=F(0);
function Wb(){C.call(this);this.wn=null;}
let AQG=a=>{AO2(a.wn);};
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
let YP=(a,b,c)=>{let d;if(Dh===null){b=new FG;d=new Ck;d.lL=BI(32);Bt(b);b.l6=d;d=new K;DM(d,16);b.lQ=d;b.lP=G(32);b.lR=0;b.lS=Cg;Dh=b;}J4(c,Dh);};
let Q5=F();
let RQ=F(0);
function Rx(){C.call(this);this.pS=null;}
let Sp=b=>{let c;c=new Rx;c.pS=b;return c;},
AHA=(a,b)=>{a.pS.e(b);},
ASu=(a,b)=>{a.pS.gZ(b);};
function ST(){let a=this;C.call(a);a.v1=null;a.v2=null;a.vZ=0;a.v0=null;}
let OG=F(Gk);
let AD7=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.kQ;a:{while(true){if(b>f){b=e;break a;}g=a.lx;h=d.l0.data;i=g*2|0;j=h[i];h[i]=b;e=a.mY.fI(b,c,d);if(e>=0)break;i=a.lx;d.l0.data[i*2|0]=j;b=b+1|0;}}return b;},
ATA=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.lx;h=e.l0.data;i=g*2|0;j=h[i];h[i]=c;f=a.mY.fI(c,d,e);if(f>=0)break;i=a.lx;e.l0.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
ABo=a=>{return null;};
function SU(){Bp.call(this);this.zq=null;}
let AQ2=(a,b)=>{return CS(b)!=2?0:1;};
function Ok(){Bp.call(this);this.zv=null;}
let Zu=(a,b)=>{return CS(b)!=1?0:1;};
function Sf(){Bp.call(this);this.y8=null;}
let YQ=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CS(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function Se(){Bp.call(this);this.yY=null;}
let ADX=(a,b)=>{return 0;};
function VD(){Bp.call(this);this.z1=null;}
let AGN=(a,b)=>{return !CS(b)?0:1;};
function PW(){Bp.call(this);this.zF=null;}
let AQ6=(a,b)=>{return CS(b)!=9?0:1;};
function Pf(){Bp.call(this);this.Ai=null;}
let ALK=(a,b)=>{return Ho(b);};
function Rh(){Bp.call(this);this.zr=null;}
let AN6=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Og(){Bp.call(this);this.x$=null;}
let AS3=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function Oj(){Bp.call(this);this.zH=null;}
let ACs=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function O9(){Bp.call(this);this.z0=null;}
let ARz=(a,b)=>{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function Qd(){Bp.call(this);this.Ab=null;}
let AJx=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Qi(){Bp.call(this);this.y9=null;}
let ANg=(a,b)=>{a:{switch(CS(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function Tn(){Bp.call(this);this.zK=null;}
let AQF=(a,b)=>{return CS(b)!=3?0:1;};
function SD(){Bp.call(this);this.yd=null;}
let ASr=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function Ow(){Bp.call(this);this.Ar=null;}
let AB9=(a,b)=>{a:{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ho(b);}return b;};
function JY(){Bp.call(this);this.sO=0;}
let ALP=(a,b)=>{return a.kK^(a.sO!=CS(b&65535)?0:1);};
let R6=F(JY);
let APn=(a,b)=>{return a.kK^(!(a.sO>>CS(b&65535)&1)?0:1);};
function YS(){let a=this;C.call(a);a.Az=0;a.AA=0;a.Ax=0;a.Ay=0;a.Aw=null;}
function GZ(){let a=this;Gu.call(a);a.pc=0;a.nG=null;a.nY=null;a.nK=null;}
let AL3=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new M2;c.n$=a;c.qw=b;c=B5(c,"handleEvent");b.onreadystatechange=c;c=a.nK;d=a.nY;e=new G0;e.u4=c;e.sa=d;c=B5(e,"handleEvent");b.onprogress=c;d=a.nG;f=a.pc;b.open("GET",Bw(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let Ox=F();
let TZ=null;
let Mz=()=>{Mz=BQ(Ox);AOC();};
let AOC=()=>{let b,c;b=X((UT.p()).data.length);c=b.data;TZ=b;c[NA.ke]=1;c[Jd.ke]=2;};
let Vd=F();
let AIx=(a,b,c)=>{a.eQ(U(b),Du(c,"handleEvent"));},
AJA=(a,b,c)=>{a.eR(U(b),Du(c,"handleEvent"));},
Xe=(a,b,c,d)=>{a.eS(U(b),Du(c,"handleEvent"),d?1:0);},
Xs=(a,b)=>{return !!a.eT(b);},
AFm=(a,b,c,d)=>{a.eV(U(b),Du(c,"handleEvent"),d?1:0);};
let G2=F(0);
function Ki(){let a=this;C.call(a);a.pp=null;a.uc=0;a.sz=null;a.uT=null;a.qM=null;}
let ASy=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pp.readyState==4){if(a.pp.status==200){if(a.qM.mP){if(BW===null){b=new CO;c=new Ck;c.lL=BI(32);b.l6=c;c=new K;Bt(c);c.j3=G(16);b.lQ=c;b.lP=G(32);b.lR=0;b.lS=Cg;BW=b;}b=a.sz;c=new K;c.j3=G(16);D(c,c.j2,A(469));d=c.j2;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g
>=0&&g<=(h-0|0)){b.j4=L(e.data,0,g);BX(Bw(b));BX("\n");}else{b=new H;b.j5=1;b.j6=1;Bi(b);B(b);}}c=a.pp.response;E4();i=F8.np.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);U(a.pp.responseText);}else if(a.pp.status!=404&&a.pp.status!=403){try{k=V(100);$p=1;continue _;}catch($$e){$$je=Z($$e);if($$je instanceof Dr){}else{throw $$e;}}NS(a.qM,a.uc,a.sz,a.uT);}b=a.qM;b.lh=b.lh-1|0;}return;case 1:a:{try{K8(k);if(Fv()){break _;}break a;}catch($$e){$$je=Z($$e);if($$je instanceof Dr)
{}else{throw $$e;}}}NS(a.qM,a.uc,a.sz,a.uT);b=a.qM;b.lh=b.lh-1|0;return;default:Fm();}}Db().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AGW=(a,b)=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ASy(a,b);if(Fv()){break _;}return;default:Fm();}}Db().s(a,b,$p);};
let AJ8=F();
let CA=0;
function Cr(){let a=this;C.call(a);a.kY=null;a.l1=0;a.lN=0;a.kU=0;}
let AKl=(a,b,c)=>{a.kU=1;a.kY=b;a.l1=c;},
L_=(a,b)=>{let c=new Cr();AKl(c,a,b);return c;},
Hu=a=>{let b;if(a.kU)return a.lN>=a.kY.j8?0:1;b=new S;b.j5=1;b.j6=1;b.j7=A(17);B(b);},
Cm=a=>{let b,c,d,e,f,g,h;b=a.lN;c=a.kY;if(b<c.j8){if(a.kU){d=c.j_.data;a.lN=b+1|0;return d[b];}c=new S;c.j5=1;c.j6=1;c.j7=A(17);B(c);}c=new Wm;e=new K;e.j3=G(16);J(e,e.j2,b,10);f=new I;d=e.j3;g=d.data;b=e.j2;h=g.length;if(b>=0&&b<=(h-0|0)){f.j4=L(d.data,0,b);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;c.j5=1;c.j6=1;B(c);};
function C0(){let a=this;C.call(a);a.mb=null;a.me=0;a.uy=null;a.uz=null;}
let AMT=(a,b)=>{a.mb=b;a.me=1;},
NR=a=>{let b=new C0();AMT(b,a);return b;},
ATC=(a,b,c)=>{a.mb=b;a.me=c;},
LK=(a,b)=>{let c=new C0();ATC(c,a,b);return c;},
CK=a=>{let b,c,d;if(CA){b=new Cr;c=a.mb;d=a.me;b.kU=1;b.kY=c;b.l1=d;return b;}if(a.uy===null){b=new Cr;c=a.mb;d=a.me;b.kU=1;b.kY=c;b.l1=d;a.uy=b;b=new Cr;b.kU=1;b.kY=c;b.l1=d;a.uz=b;}b=a.uy;if(b.kU){c=a.uz;c.lN=0;c.kU=1;b.kU=0;return c;}b.lN=0;b.kU=1;a.uz.kU=0;return b;};
function Il(){let a=this;C.call(a);a.uB=null;a.nt=null;a.uM=null;}
let ANV=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.nt.length;c=new K;c.j3=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new I;f=c.j3;g=f.data;b=c.j2;h=g.length;if(b>=0&&b<=(h-0|0)){e.j4=L(f.data,0,b);return e;}e=new H;e.j5=1;e.j6=1;Bi(e);B(e);}i=b-d|0;if(i>=3){j=(((a.nt[d]&255)<<16)+((a.nt[d+1|0]&255)<<8)|0)+(a.nt[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(470).j4.length)break f;h=A(470).j4.charCodeAt(h);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(470).j4.length)break g;h
=A(470).j4.charCodeAt(h);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(470).j4.length)break h;h=A(470).j4.charCodeAt(h);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;i=j&63;if(i<0)break;if(i>=A(470).j4.length)break;h=A(470).j4.charCodeAt(i);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;}else if(i<2){j=(a.nt[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(470).j4.length)break d;h=A(470).j4.charCodeAt(h);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(470).j4.length)break e;h=A(470).j4.charCodeAt(h);i
=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;D(c,c.j2,A(471));}else{k=((a.nt[d]&255)<<16)+((a.nt[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(470).j4.length)break a;h=A(470).j4.charCodeAt(h);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(470).j4.length)break b;h=A(470).j4.charCodeAt(h);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(470).j4.length)break c;h=A(470).j4.charCodeAt(h);i=c.j2;Bj(c,i,i+1|0);c.j3.data[i]=h;D(c,c.j2,A(472));}d=d+3|0;}e=new W;e.j5=1;e.j6=1;B(e);}e
=new W;e.j5=1;e.j6=1;B(e);}e=new W;e.j5=1;e.j6=1;B(e);}e=new W;e.j5=1;e.j6=1;B(e);}e=new W;e.j5=1;e.j6=1;B(e);}e=new W;e.j5=1;e.j6=1;B(e);}e=new W;e.j5=1;e.j6=1;B(e);}e=new W;e.j5=1;e.j6=1;B(e);}e=new W;e.j5=1;e.j6=1;B(e);};
function Oz(){C.call(this);this.um=null;}
let Wd=F(0);
let S6=F(0);
let TV=F(0);
let Hq=F();
let ET=a=>{return;};
function Iq(){Hq.call(this);this.l6=null;}
let F1=(a,b)=>{a.l6=b;},
AXz=a=>{let b=new Iq();F1(b,a);return b;};
function IM(){let a=this;Iq.call(a);a.lR=0;a.lQ=null;a.lP=null;a.lS=null;}
let Vx=(a,b,c)=>{a.l6=b;b=new K;b.j3=G(16);a.lQ=b;a.lP=G(32);a.lR=c;a.lS=Cg;},
AWm=(a,b)=>{let c=new IM();Vx(c,a,b);return c;};
let Hk=F(IM);
let CO=F(Hk);
let AG_=(a,b)=>{BX(Bw(b));};
function G0(){let a=this;C.call(a);a.sa=null;a.u4=null;}
let AK9=(a,b)=>{a.sa.g2(b.loaded);};
let ZI=F();
function Ck(){Hq.call(this);this.lL=null;}
let Zp=(a,b)=>{a.lL=BI(b);},
AP8=a=>{let b=new Ck();Zp(b,a);return b;};
function Ko(){let a=this;C.call(a);a.vr=null;a.wd=null;}
let Jz=b=>{let c,d,e;if(b.j4.length?0:1){c=new JC;c.j5=1;c.j6=1;c.tF=b;B(c);}if(0>=b.j4.length){b=new W;b.j5=1;b.j6=1;B(b);}if(!Um(b.j4.charCodeAt(0))){c=new JC;c.j5=1;c.j6=1;c.tF=b;B(c);}d=1;a:{while(d<b.j4.length){if(d<0)break a;if(d>=b.j4.length)break a;b:{e=b.j4.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(Um(e))break b;else{c=new JC;c.j5=1;c.j6=1;c.tF=b;B(c);}}}d=d+1|0;}return;}b=new W;b.j5=1;b.j6=1;B(b);},
Um=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let NQ=F(Ko);
let Cg=null;
let AU$=()=>{let b,c,d,e,f;b=new NQ;c=Q(I,0);d=c.data;Jz(A(3));e=d.length;f=0;while(f<e){Jz(d[f]);f=f+1|0;}b.vr=A(3);b.wd=c.p();Cg=b;};
function JC(){Bk.call(this);this.tF=null;}
let K2=F(0);
function HY(){let a=this;C.call(a);a.u_=null;a.qf=null;a.mX=0;a.pT=null;a.vk=0.0;a.ty=0.0;a.ms=0;a.o1=null;a.sV=null;a.s4=null;a.uP=0;a.xg=0;a.v5=0;a.wb=0;a.vt=0;a.pX=null;a.q1=null;a.yo=0;a.pt=null;a.rQ=0.0;a.sm=0;a.t6=0;a.u5=0;}
let V9=null;
let HW=()=>{HW=BQ(HY);AJ0();};
let KV=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;HW();a.mX=0;a.pT=null;a.vk=0.0;a.ty=0.0;a.ms=0;a.o1=C8();a.sV=C8();a.s4=C8();a.uP=0;a.xg=770;a.v5=771;a.wb=770;a.vt=771;a.q1=null;d=new BM;d.k1=1.0;d.k0=1.0;d.kZ=1.0;d.k3=1.0;CX(d);a.pt=d;a.rQ=Tl;a.sm=0;a.t6=0;a.u5=0;if(b>8191){c=new Bk;d=new K;d.j3=G(16);D(d,d.j2,A(473));J(d,d.j2,b,10);e=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);c.j5=1;c.j6=1;c.j7=e;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}j=EA===null?V9:LR;k=new Jf;l=b*4|0;m=b*6|0;f
=Q(DV,3);g=f.data;d=new DV;d.mJ=1;d.mx=2;d.mI=5126;d.mR=0;d.mN=A(474);d.ol=0;d.pz=Ea(1);g[0]=d;d=new DV;d.mJ=4;d.mx=4;d.mI=5121;d.mR=1;d.mN=A(475);d.ol=0;d.pz=Ea(4);g[1]=d;d=new DV;d.mJ=16;d.mx=2;d.mI=5126;d.mR=0;d.mN=A(476);d.ol=0;d.pz=Ea(16);g[2]=d;VL(k,j,0,l,m,Rf(f));a.u_=k;d=a.sV;n=B3.lm.width;o=B3.lm.height;Mu(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.qf=B_(b*20|0);f=Ft(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.u_.mn.g7(f,0,g.length);if(c!==null)a.pX=c;else{e=QU(A(477),A(478));if(!e.nU){c=new Bk;d=new K;d.j3=G(16);D(d,d.j2,A(479));if(!e.nU)j=e.nr;else{j=Bq.g9(e.mO);e.nr=j;}D(d,d.j2,j);e=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);c.j5=1;c.j6=1;c.j7=e;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}a.pX=e;a.yo=1;}},
AVI=(a,b)=>{let c=new HY();KV(c,a,b);return c;},
AFB=a=>{let b,c;if(a.ms){b=new BN;b.j5=1;b.j6=1;b.j7=A(480);B(b);}a.sm=0;B9.g$(0);c=a.q1;if(c!==null)c.g_();else{c=a.pX;b=Bq;if(c.k7){CI(c,c.l2,c.l4);c.k7=0;}b.hb(c.mO);}Gc(a);a.ms=1;},
APt=a=>{let b,c;if(!a.ms){b=new BN;b.j5=1;b.j6=1;b.j7=A(481);B(b);}if(a.mX>0)D9(a);a.pT=null;a.ms=0;c=B9;c.g$(1);if(a.uP?0:1)c.bb(3042);},
AHc=(a,b,c,d,e)=>{let f,g;if(!a.ms){b=new BN;b.j5=1;b.j6=1;b.j7=A(482);B(b);}f=a.qf.data.length;if(b!==a.pT){D9(a);a.pT=b;b=b.n7;a.vk=1.0/b.nH;a.ty=1.0/b.ny;g=f;}else{g=f-a.mX|0;if(!g){D9(a);g=f;}}if(g>=e)g=e;Di(c,d,a.qf,a.mX,g);a.mX=a.mX+g|0;e=e-g|0;while(e>0){d=d+g|0;D9(a);g=f>=e?e:f;Di(c,d,a.qf,0,g);a.mX=a.mX+g|0;e=e-g|0;}},
K$=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.ms){b=new BN;b.j5=1;b.j6=1;b.j7=A(482);B(b);}l=a.qf;m=b.o3;if(m!==a.pT){D9(a);a.pT=m;m=m.n7;a.vk=1.0/m.nH;a.ty=1.0/m.ny;}else{n=l.data;if(a.mX==n.length)D9(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{Gx();n=F6.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.vb;bb=b.u$;bc=b.va;bd=b.vc;be=a.rQ;bf=a.mX;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.mX=bf+20|0;},
D9=a=>{let b,c,d,e,f,g;b=a.mX;if(!b)return;a.sm=a.sm+1|0;a.t6=a.t6+1|0;c=b/20|0;if(c>a.u5)a.u5=c;b=c*6|0;d=a.pT;B9.cA(d.nk,d.qm);d=a.u_;e=a.qf;f=a.mX;d.mq.hc(e,0,f);g=d.mn.hd(1);CC(g,0);CQ(g,b);if(a.uP)B9.bb(3042);else{B9.W(3042);c=a.xg;if(c!=(-1))B9.he(c,a.v5,a.wb,a.vt);}g=a.q1;if(g===null)g=a.pX;SR(d,g,4,0,b,d.sc);a.mX=0;},
Gc=a=>{let b,c,d,e;SV(C$(a.s4,a.sV.ln),a.o1);b=a.q1;if(b!==null){b.hh(A(483),a.s4);a.q1.hi(A(484),0);}else{b=a.pX;c=a.s4;Id();d=Jc(b,A(483),HM);e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}QN(e,d,1,0,c.ln,0);b=a.pX;c=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}c.hl(Jc(b,A(484),HM),0);}},
AJ0=()=>{V9=Lz;};
let RK=F(0);
function KQ(){C.call(this);this.zt=null;}
function TB(){let a=this;KQ.call(a);a.m3=null;a.tb=null;a.yz=null;a.y3=null;a.oO=null;a.p0=null;a.s0=0;}
let AFK=(a,b)=>{let c,d,e,f,g,h,i,j,k;a.zt=b;b=new Bg;b.ku=1;b.j_=Q(C,16);a.y3=b;a.s0=0;c=new Nj;b=new SP;d=new QB;ANa(d);d.vM=1.0;e=new Bn;CT();d.xe=e;d.u2=0.0;b.tW=new Bn;b.r8=1.0;b.q2=d;d=new HY;HW();KV(d,1000,null);SO(c,b,d);c.yr=1;a.m3=c;K_.mD=c;b=new Bg;b.ku=1;b.j_=Q(C,16);a.oO=b;Bf(b,Kr());Bf(a.oO,Kr());Bf(a.oO,Kr());b=new Bg;b.ku=1;b.j_=Q(C,16);a.p0=b;Bf(b,LE());Bf(a.p0,LE());Bf(a.p0,LE());b=a.oO;f=BU(0,b.j8);if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g=b.j8;J(c,
c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}h=b.j_.data;c=h[0];c.m_=(c.m_+270.0)%360.0;if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}c=h[0];d=a.m3;k=(d.mf.nf/2|0)+27|0;if(!(c.kx===100.0&&c.kJ===k)){c.kx=100.0;c.kJ=k;}if(f>=0){d=new H;c
=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}a:{b=h[0];c=d.lw;d=b.k2;if(d!==null){if(d===c)break a;g=D4(d.ks,b,1);if(g!=(-1)){e=d.ks;CF(e);e=Dm(e,g);d=d.lC;if(d!==null)Ew(d,e);e.k2=null;e.x(null);}}Bf(c.ks,b);b.k2=c;b.x(c.lC);}b=a.p0;f=BU(0,b.j8);if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,
g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}h=b.j_.data;c=h[0];c.m_=(c.m_+270.0)%360.0;if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}c=h[0];d=a.m3;k=(d.mf.nf/2|0)+27|0;if(!(c.kx===100.0&&c.kJ===k)){c.kx=100.0;c.kJ=k;}if(f>=0){d=new H;c
=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}b:{b=h[0];c=d.lw;d=b.k2;if(d!==null){if(d===c)break b;g=D4(d.ks,b,1);if(g!=(-1)){e=d.ks;CF(e);e=Dm(e,g);d=d.lC;if(d!==null)Ew(d,e);e.k2=null;e.x(null);}}Bf(c.ks,b);b.k2=c;b.x(c.lC);}b=a.oO;f=BU(1,b.j8);if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,
g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}h=b.j_.data;c=h[1];d=a.m3;k=(d.mf.nf/2|0)+100|0;if(!(c.kx===200.0&&c.kJ===k)){c.kx=200.0;c.kJ=k;}if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}c:{b=h[1];c=d.lw;d=b.k2;if(d!==null){if(d===c)break c;g
=D4(d.ks,b,1);if(g!=(-1)){e=d.ks;CF(e);e=Dm(e,g);d=d.lC;if(d!==null)Ew(d,e);e.k2=null;e.x(null);}}Bf(c.ks,b);b.k2=c;b.x(c.lC);}b=a.p0;f=BU(1,b.j8);if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}h=b.j_.data;c=h[1];d=a.m3;k=(d.mf.nf/2|0)+100|0;if(!(c.kx===200.0&&c.kJ===k)){c.kx=200.0;c.kJ=k;}if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,
c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}d:{b=h[1];c=d.lw;d=b.k2;if(d!==null){if(d===c)break d;g=D4(d.ks,b,1);if(g!=(-1)){e=d.ks;CF(e);e=Dm(e,g);d=d.lC;if(d!==null)Ew(d,e);e.k2=null;e.x(null);}}Bf(c.ks,b);b.k2=c;b.x(c.lC);}b=a.oO;f=BU(2,b.j8);if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i
=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}h=b.j_.data;c=h[2];d=a.m3;k=((d.mf.nf/2|0)-27|0)-100|0;if(!(c.kx===200.0&&c.kJ===k)){c.kx=200.0;c.kJ=k;}if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}e:{b=h[2];c=d.lw;d=b.k2;if(d!==null){if(d===c)break e;g=D4(d.ks,
b,1);if(g!=(-1)){e=d.ks;CF(e);e=Dm(e,g);d=d.lC;if(d!==null)Ew(d,e);e.k2=null;e.x(null);}}Bf(c.ks,b);b.k2=c;b.x(c.lC);}b=a.p0;f=BU(2,b.j8);if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}h=b.j_.data;c=h[2];d=a.m3;k=((d.mf.nf/2|0)-27|0)-100|0;if(!(c.kx===200.0&&c.kJ===k)){c.kx=200.0;c.kJ=k;}if(f>=0){d=new H;c=new K;c.j3=G(16);D(c,
c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));g=b.j8;J(c,c.j2,g,10);b=new I;h=c.j3;i=h.data;j=c.j2;f=i.length;if(j>=0&&j<=(f-0|0)){b.j4=L(h.data,0,j);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}f:{b=h[2];c=d.lw;d=b.k2;if(d!==null){if(d===c)break f;g=D4(d.ks,b,1);if(g!=(-1)){e=d.ks;CF(e);e=Dm(e,g);d=d.lC;if(d!==null)Ew(d,e);e.k2=null;e.x(null);}}Bf(c.ks,b);b.k2=c;b.x(c.lC);}g:{b=AEo(a.oO);a.tb=b;c=a.m3.lw;d=b.k2;if(d!==null){if(d===c)break g;g=D4(d.ks,b,1);if(g!=(-1)){e=d.ks;CF(e);e=Dm(e,g);d=d.lC;if(d!==null)Ew(d,
e);e.k2=null;e.x(null);}}Bf(c.ks,b);b.k2=c;b.lC=c.lC;}},
AJW=a=>{let b=new TB();AFK(b,a);return b;},
ART=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;B9.ho(0.9300000071525574,0.9300000071525574,0.9300000071525574,0.5);B9.hp(16384);if(!(a.s0%500|0)){c=AIE(a);a.yz=c;d=a.tb.oB;e=BU(0,d.j8);if(e>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g=d.j8;J(c,c.j2,g,10);d=new I;h=c.j3;i=h.data;e=c.j2;j=i.length;if(e>=0&&e<=(j-0|0)){d.j4=L(h.data,0,e);f.j5=1;f.j6=1;f.j7=d;B(f);}c=new H;R(c);B(c);}h=d.j_.data;b=h[0].j$;if(e>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));g
=d.j8;J(c,c.j2,g,10);d=new I;h=c.j3;i=h.data;e=c.j2;j=i.length;if(e>=0&&e<=(j-0|0)){d.j4=L(h.data,0,e);f.j5=1;f.j6=1;f.j7=d;B(f);}c=new H;R(c);B(c);}k=h[0].j9;if(!(c.kx===b&&c.kJ===k)){c.kx=b;c.kJ=k;}a:{d=a.m3.lw;f=c.k2;if(f!==null){if(f===d)break a;g=D4(f.ks,c,1);if(g!=(-1)){l=f.ks;CF(l);l=Dm(l,g);f=f.lC;if(f!==null)Ew(f,l);l.k2=null;l.x(null);}}Bf(d.ks,c);c.k2=d;c.lC=d.lC;}}a.s0=a.s0+1|0;AN1(a.m3,B3.sG);c=a.m3;f=c.mf.q2;Wn(f,1);if(c.lw.ni){d=c.vs;f=f.qH;if(d.ms)D9(d);C$(d.sV,f.ln);if(d.ms)Gc(d);AFB(d);f=c.lw;if
(f.no){l=KF(f);C$(f.pE,d.o1.ln);if(d.ms)D9(d);C$(d.o1,l.ln);if(d.ms)Gc(d);}Qe(f,d,1.0);if(f.no){f=f.pE;if(d.ms)D9(d);C$(d.o1,f.ln);if(d.ms)Gc(d);}APt(d);if(BR)AM5(c);}};
let Wm=F(Bz);
let S=F(Bz);
let AC8=(a,b)=>{a.j5=1;a.j6=1;a.j7=b;},
Kz=a=>{let b=new S();AC8(b,a);return b;};
let ACo=F();
let Lb=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function El(){C.call(this);this.nD=null;}
let Y6=a=>{AIl(a.nD);};
let ADD=F();
let V7=F();
let OV=null;
let Nw=()=>{Nw=BQ(V7);AO7();};
let AO7=()=>{let b,c;b=X((NK.p()).data.length);c=b.data;OV=b;c[FJ.ke]=1;c[FA.ke]=2;c[Fp.ke]=3;c[Fi.ke]=4;c[JV.ke]=5;};
let Nr=F(Bz);
function NU(){let a=this;C.call(a);a.q2=null;a.s5=0.0;a.tc=0.0;a.pY=0;a.pZ=0;a.qy=0;a.nf=0;a.tW=null;}
let Nq=(a,b)=>{let c,d,e,f;AIo(a.pY,a.pZ,a.qy,a.nf);c=a.q2;d=a.s5;c.tV=d;e=a.tc;c.us=e;if(b){f=c.ur;d=d/2.0;e=e/2.0;f.kf=d;f.kg=e;f.kh=0.0;}Wn(c,1);},
EU=(a,b)=>{let c,d,e,f;c=a.tW;d=b.j$;e=b.j9;c.kf=d;c.kg=e;c.kh=1.0;ALd(a.q2,c,a.pY,a.pZ,a.qy,a.nf);c=a.tW;f=c.kf;d=c.kg;b.j$=f;b.j9=d;return b;};
function SP(){NU.call(this);this.r8=0.0;}
function Un(){let a=this;CE.call(a);a.x_=null;a.x8=null;a.yI=null;a.yw=null;a.rJ=null;a.o0=null;a.tx=null;}
let ATb=a=>{let b,c,d,e,f,g;F_(a);a.rJ=new D_;b=new HU;c=HA;d=Ju(c.rO,A(485),GQ);e=null;f=I3(d,HP(d),e,0);e=B9;c=e.kb.createTexture();g=e.nn;e.nn=g+1|0;Cc(e.n1,g,Cf(c));e=HE;b.pl=e;b.pU=e;e=HR;b.pa=e;b.pn=e;b.qU=1.0;b.nk=3553;b.qm=g;JS(b,f);e=Dc;c=ER;if(e===null)c=I6(c);else{g=G_(e);c=IL(c,e,g&(c.mw.data.length-1|0),g);}c=c===null?null:c.m2;if(c===null){c=new Bg;Bt(c);c.ku=1;c.j_=Q(C,16);}Bf(c,b);GG(ER,e,c);a.x_=b;e=new Jo;c=b.n7;M8(e,b,0,0,c.nH,c.ny);a.x8=e;if(!(a.lr===41.0&&a.lD===59.0)){a.lr=41.0;a.lD=59.0;}Nt(a,
a.kx,a.kJ,a.lr,a.lD);e=new Bb;e.j$=0.0;e.j9=16.0;a.yI=e;e=new Bb;e.j$=a.lr;e.j9=16.0;a.yw=e;a.o0=Ji;e=new Ua;e.st=a;if(!Li(a.sW,e,1))Bf(a.sW,e);},
Kr=()=>{let a=new Un();ATb(a);return a;},
XQ=(a,b,c)=>{let d,e,f,g;if(a.o0.m5){d=new FR;d.oy=0.0;a.tx=d;}else{d=new FR;d.oy=1.0;a.tx=d;}d=a.rY;c=d.k1;e=d.k0;f=d.kZ;g=a.tx.oy;d=b.pt;d.k1=c;d.k0=e;d.kZ=f;d.k3=g;CX(d);b.rQ=Ff(b.pt);K$(b,a.x8,a.kx,a.kJ,a.pJ,a.pK,a.lr,a.lD,a.n8,a.n9,a.m_);AH6(a);},
ADG=(a,b)=>{G5(a,b);},
AH6=a=>{let b,c,d,e,f;MQ(a,100);if(a.o0.m5){b=a.rJ;c=a.kx;d=a.kJ;b.nO=c;b.nN=d;b.nV=0.0;b.nz=0.0;}else if(a.m_!==270.0){b=a.rJ;c=a.kx;d=a.kJ;e=a.lr/4.0+2.0;f=a.lD+2.0;b.nO=c;b.nN=d;b.nV=e;b.nz=f;}else{b=a.rJ;c=a.kx;d=a.kJ;e=a.lr/4.0;f=d-e;d=a.lD+2.0;e=e+2.0;b.nO=c;b.nN=f;b.nV=d;b.nz=e;}};
function Pd(){let a=this;CE.call(a);a.zj=null;a.xK=null;a.zW=null;a.zA=null;a.sJ=null;a.tN=null;a.u6=null;}
let ALn=a=>{let b,c,d,e,f,g,h;F_(a);a.sJ=new D_;b=new HU;c=HA;d=Ju(c.rO,A(486),GQ);e=null;f=I3(d,HP(d),e,0);d=B9;e=d.kb.createTexture();g=d.nn;d.nn=g+1|0;Cc(d.n1,g,Cf(e));e=HE;b.pl=e;b.pU=e;e=HR;b.pa=e;b.pn=e;b.qU=1.0;b.nk=3553;b.qm=g;JS(b,f);e=Dc;c=ER;if(e===null)c=I6(c);else{h=G_(e);c=IL(c,e,h&(c.mw.data.length-1|0),h);}c=c===null?null:c.m2;if(c===null){c=new Bg;Bt(c);c.ku=1;c.j_=Q(C,16);}Bf(c,b);GG(ER,e,c);a.zj=b;e=new Jo;c=b.n7;M8(e,b,0,0,c.nH,c.ny);a.xK=e;if(!(a.lr===41.0&&a.lD===59.0)){a.lr=41.0;a.lD=
59.0;}Nt(a,a.kx,a.kJ,a.lr,a.lD);e=new Bb;e.j$=0.0;e.j9=16.0;a.zW=e;e=new Bb;e.j$=a.lr;e.j9=16.0;a.zA=e;a.tN=I8;},
LE=()=>{let a=new Pd();ALn(a);return a;},
AIk=(a,b,c)=>{let d,e,f,g;if(!a.tN.m5){d=new FR;d.oy=0.0;a.u6=d;}else{d=new FR;d.oy=1.0;a.u6=d;}d=a.rY;c=d.k1;e=d.k0;f=d.kZ;g=a.u6.oy;d=b.pt;d.k1=c;d.k0=e;d.kZ=f;d.k3=g;CX(d);b.rQ=Ff(b.pt);K$(b,a.xK,a.kx,a.kJ,a.pJ,a.pK,a.lr,a.lD,a.n8,a.n9,a.m_);AC1(a);},
AOo=(a,b)=>{G5(a,b);},
AC1=a=>{let b,c,d,e,f;MQ(a,4);if(a.tN.m5){b=a.sJ;c=a.kx;d=a.kJ;b.nO=c;b.nN=d;b.nV=0.0;b.nz=0.0;}else if(a.m_!==270.0){b=a.sJ;c=a.kx;d=a.kJ;e=a.lr/4.0+2.0;f=a.lD+2.0;b.nO=c;b.nN=d;b.nV=e;b.nz=f;}else{b=a.sJ;c=a.kx;d=a.kJ;e=a.lr/4.0;f=d-e;d=a.lD+2.0;e=e+2.0;b.nO=c;b.nN=f;b.nV=d;b.nz=e;}};
function TM(){let a=this;CE.call(a);a.zO=null;a.wG=null;a.oB=null;a.q9=null;a.qu=null;a.p_=null;a.qK=null;a.o2=null;a.qY=null;a.z5=null;a.oC=null;}
let ACp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;F_(a);c=new HU;d=HA;e=Ju(d.rO,A(486),GQ);f=null;g=I3(e,HP(e),f,0);f=B9;d=f.kb.createTexture();h=f.nn;f.nn=h+1|0;Cc(f.n1,h,Cf(d));f=HE;c.pl=f;c.pU=f;f=HR;c.pa=f;c.pn=f;c.qU=1.0;c.nk=3553;c.qm=h;JS(c,g);f=Dc;d=ER;if(f===null)d=I6(d);else{i=G_(f);d=IL(d,f,i&(d.mw.data.length-1|0),i);}d=d===null?null:d.m2;if(d===null){d=new Bg;Bt(d);d.ku=1;d.j_=Q(C,16);}Bf(d,c);GG(ER,f,d);a.zO=c;f=new H8;f.o3=c;Nf(f,0,0,1,1);a.wG=f;a.z5=b;c=new Bg;c.ku=1;c.j_=Q(C,16);a.oB=c;f=new Bb;if
(0>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}f.j$=b.j_.data[0].kx+16.0;f.j9=600.0;Bf(c,f);c=a.oB;f=new Bb;i=b.j8;if(0>=i){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b
=new H;R(b);B(b);}k=b.j_.data;m=k[0].kx+16.0;if(1>=i){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}n=k[1].kJ+15.0;f.j$=m;f.j9=n;Bf(c,f);c=new Bg;c.ku=1;c.j_=Q(C,16);a.qK=c;f=new Bb;if(0>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));h=b.j8;J(c,c.j2,h,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if
(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}m=b.j_.data[0].kx+16.0;d=a.oB;j=d.j8;i=j-1|0;if(i>=j){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=d.j8;J(b,b.j2,j,10);f=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){f.j4=L(k.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}b=new H;R(b);B(b);}n=d.j_.data[i].j9;f.j$=m;f.j9=n;Bf(c,f);c=a.qK;f=new Bb;if(1>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));j=b.j8;J(c,
c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}n=b.j_.data[1].kx;j=c.j8;i=j-1|0;if(i>=j){f=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=c.j8;J(b,b.j2,j,10);c=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){c.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=c;B(f);}b=new H;R(b);B(b);}m=c.j_.data[i].j9;f.j$=n;f.j9=m;Bf(c,f);c=new Bg;c.ku=1;c.j_=Q(C,16);a.o2=c;f=new Bb;i=BU(1,b.j8);if(i>=0){f
=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}k=b.j_.data;n=k[1].kx;if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,1,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}m=n+k[1].lr;d=a.qK;j=d.j8;i=j-1|0;if
(i>=j){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=d.j8;J(b,b.j2,j,10);f=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){f.j4=L(k.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}b=new H;R(b);B(b);}n=d.j_.data[i].j9;f.j$=m;f.j9=n;Bf(c,f);c=a.o2;f=new Bb;j=c.j8;i=j-1|0;j=BU(i,j);if(j>=0){f=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=c.j8;J(b,b.j2,j,10);c=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){c.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7
=c;B(f);}b=new H;R(b);B(b);}k=c.j_.data;m=k[i].j$+100.0;if(j>=0){f=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=c.j8;J(b,b.j2,j,10);c=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){c.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=c;B(f);}b=new H;R(b);B(b);}n=k[i].j9;f.j$=m;f.j9=n;Bf(c,f);c=a.o2;f=new Bb;j=c.j8;i=j-1|0;if(i>=j){f=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=c.j8;J(b,b.j2,j,10);c=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h
-0|0)){c.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=c;B(f);}b=new H;R(b);B(b);}m=c.j_.data[i].j$;if(2>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}n=b.j_.data[2].kJ+15.0;f.j$=m;f.j9=n;Bf(c,f);c=a.o2;f=new Bb;i=BU(2,b.j8);if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k
=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}k=b.j_.data;n=k[2].kx;if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}m=n+k[2].lr;j=c.j8;i=j-1|0;if(i>=j){f=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=c.j8;J(b,b.j2,j,10);c=new I;k
=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){c.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=c;B(f);}b=new H;R(b);B(b);}n=c.j_.data[i].j9;f.j$=m;f.j9=n;Bf(c,f);c=new Bg;c.ku=1;c.j_=Q(C,16);a.qY=c;f=new Bb;if(2>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,2,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}n=b.j_.data[2].kx;d=a.o2;j=d.j8;i=j-1|0;if(i>=j){c=new H;b=new K;b.j3=G(16);D(b,
b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=d.j8;J(b,b.j2,j,10);f=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){f.j4=L(k.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}b=new H;R(b);B(b);}m=d.j_.data[i].j9;f.j$=n;f.j9=m;Bf(c,f);c=a.qY;f=new Bb;if(0>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}m=b.j_.data[0].kx+16.0;j=c.j8;i
=j-1|0;if(i>=j){f=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=c.j8;J(b,b.j2,j,10);c=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){c.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=c;B(f);}b=new H;R(b);B(b);}n=c.j_.data[i].j9;f.j$=m;f.j9=n;Bf(c,f);c=new Bg;c.ku=1;c.j_=Q(C,16);a.q9=c;f=new Bb;if(0>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,
i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}m=b.j_.data[0].kx+16.0;d=a.oB;j=d.j8;i=j-1|0;if(i>=j){c=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));j=d.j8;J(b,b.j2,j,10);f=new I;k=b.j3;l=k.data;i=b.j2;h=l.length;if(i>=0&&i<=(h-0|0)){f.j4=L(k.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}b=new H;R(b);B(b);}n=d.j_.data[i].j9;f.j$=m;f.j9=n;Bf(c,f);c=a.q9;f=new Bb;i=BU(0,b.j8);if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l
=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}k=b.j_.data;m=k[0].kx+16.0;if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}n=k[0].kJ;f.j$=m;f.j9=n;Bf(c,f);if(BW===null){c=new CO;f=new Ck;f.lL=BI(32);c.l6=f;f=new K;Bt(f);f.j3=G(16);c.lQ=f;c.lP=G(32);c.lR=0;c.lS=Cg;BW
=c;}if(0>=b.j8){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}m=b.j_.data[0].kx;c=new K;c.j3=G(16);D(c,c.j2,A(487));E$(c,c.j2,m);f=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){f.j4=L(k.data,0,i);BX(Bw(f));BX("\n");c=new Bg;c.ku=1;c.j_=Q(C,16);a.qu=c;f=new Bb;i=BU(0,b.j8);if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,
c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}k=b.j_.data;m=k[0].kx+16.0;if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}o=k[0].kJ;if(i>=0){f=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,
c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}n=o-k[0].lr;f.j$=m;f.j9=n;Bf(c,f);c=a.qu;f=new Bb;if(0<b.j8){m=b.j_.data[0].kx+16.0;n=(DK(c,c.j8-1|0)).j9-100.0;f.j$=m;f.j9=n;Bf(c,f);c=new Bg;c.ku=1;c.j_=Q(C,16);a.p_=c;f=new Bb;m=SM(DK(b,0))+16.0;d=a.qu;M$(f,m,(DK(d,d.j8-1|0)).j9);Bf(c,f);c=a.p_;f=new Bb;m=SM(DK(b,0))+16.0;b=a.p_;M$(f,m,(DK(b,b.j8-1|0)).j9-200.0);Bf(c,f);return;}f=new H;c=new K;c.j3
=G(16);D(c,c.j2,A(18));J(c,c.j2,0,10);D(c,c.j2,A(19));j=b.j8;J(c,c.j2,j,10);b=new I;k=c.j3;l=k.data;i=c.j2;h=l.length;if(i>=0&&i<=(h-0|0)){b.j4=L(k.data,0,i);f.j5=1;f.j6=1;f.j7=b;B(f);}b=new H;R(b);B(b);}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
AEo=a=>{let b=new TM();ACp(b,a);return b;},
ACj=(a,b,c)=>{let d,e,f;d=new Rj;e=a.wG;f=new Ro;f.ya=20;f.zC=4000;f.yC=1.0;AS2(d,b,e,f);d.Ap=B_(8);a.oC=d;c=Ff(Rl);d.sC.m4=c;b=a.oC;d=a.oB;e=EW;FE(b.oE,d,25.0,e,1);b=a.oC;d=a.q9;e=EW;FE(b.oE,d,25.0,e,1);b=a.oC;d=a.qK;e=EW;FE(b.oE,d,25.0,e,1);b=a.oC;d=a.o2;e=EW;FE(b.oE,d,25.0,e,1);b=a.oC;d=a.qY;e=EW;FE(b.oE,d,25.0,e,1);b=a.oC;d=a.qu;e=EW;FE(b.oE,d,25.0,e,1);b=a.oC;d=a.p_;e=EW;FE(b.oE,d,25.0,e,1);};
let FG=F(Hk);
let AEO=(a,b)=>{DA(Bw(b));};
let ACC=F(Ev);
let Wu=null;
let AUL=()=>{Wu=M(ADc);};
let AMa=F();
let Oc=null,Qv=null,Re=null;
let AGR=()=>{Oc=AAM([V(1),V(10),V(100),V(10000),V(100000000),E(1874919424, 2328306)]);Qv=new MI;Re=new Ux;};
let AM7=F();
let KT=Ca,XH=null,HG=null,Ik=null;
let AGF=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AXL(b):E(0, 2146959360);c.vE=D5(C5(d,E(0, 2147483648)),Ca)?0:1;e=C5(d,E(4294967295, 1048575));f=Bl(AVP(d,52))&2047;if(D5(e,Ca)&&!f){c.up=Ca;c.tH=0;return;}if(f)e=ADm(e,E(0, 1048576));else{e=FB(e,1);while(D5(C5(e,E(0, 1048576)),Ca)){e=FB(e,1);f=f+(-1)|0;}}g=Ik;h=ANP(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=Ik.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=IW(e,HG.data[i],j);if(AC0(k,KT)){while(E_(k,KT)<=0){h=h+(-1)|0;k=C6(Ba(k,V(10)),V(9));}g=Ik.data;i
=h+1|0;j=12+(f-g[i]|0)|0;k=IW(e,HG.data[i],j);}e=FB(e,1);d=C6(e,V(1));g=HG.data;i=h+1|0;l=g[i];f=j-1|0;m=IW(d,l,f);l=IW(AGm(e,V(1)),HG.data[i],f);n=V(1);while(true){o=Ba(n,V(10));if(E_(EM(k,o),EM(l,o))<=0)break;n=o;}p=V(1);while(true){q=Ba(p,V(10));if(E_(EM(k,q),EM(m,q))>=0)break;p=q;}i=E_(n,p);e=i>0?Ba(EM(k,n),n):i<0?C6(Ba(EM(k,p),p),p):Ba(EM(C6(k,MY(p,V(2))),p),p);if(E_(e,E(2808348672, 232830643))>=0)while(true){h=h+1|0;e=EM(e,V(10));if(E_(e,E(2808348672, 232830643))<0)break;}else if(E_(e,E(1569325056, 23283064))
<0){h=h+(-1)|0;e=Ba(e,V(10));}c.up=e;c.tH=h-330|0;},
IW=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=C5(b,V(65535));f=C5(Be(b,16),V(65535));g=C5(Be(b,32),V(65535));h=C5(Be(b,48),V(65535));i=C5(c,V(65535));j=C5(Be(c,16),V(65535));k=C5(Be(c,32),V(65535));l=C5(Be(c,48),V(65535));return C6(C6(C6(FB(Ba(l,h),32+d|0),FB(C6(Ba(l,g),Ba(k,h)),16+d|0)),FB(C6(C6(Ba(l,f),Ba(k,g)),Ba(j,h)),d)),Be(C6(C6(C6(Ba(k,e),Ba(j,f)),Ba(i,g)),FB(C6(C6(C6(Ba(l,e),Ba(k,f)),Ba(j,g)),Ba(i,h)),16)),32-d|0));},
AFA=()=>{KT=EM(V(-1),V(10));XH=AK1();HG=AAM([E(3251292512, 2194092222),E(1766094183, 3510547556),E(553881887, 2808438045),E(443105509, 2246750436),E(3285949193, 3594800697),E(910772436, 2875840558),E(2446604867, 2300672446),E(2196580869, 3681075914),E(2616258154, 2944860731),E(1234013064, 2355888585),E(1974420903, 3769421736),E(720543263, 3015537389),E(1435428070, 2412429911),E(578697993, 3859887858),E(2180945313, 3087910286),E(885762791, 2470328229),E(3135207384, 3952525166),E(1649172448, 3162020133),E(3037324877, 2529616106),
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
function MI(){let a=this;C.call(a);a.up=Ca;a.tH=0;a.vE=0;}
let AAm=a=>{return;},
AK1=()=>{let a=new MI();AAm(a);return a;};
let GP=F(BG);
let Lz=null,OW=null,SH=null,LR=null,UP=null;
let ARD=()=>{let b,c,d,e;b=new GP;b.kk=A(488);b.ke=0;Lz=b;c=new GP;c.kk=A(489);c.ke=1;OW=c;d=new GP;d.kk=A(490);d.ke=2;SH=d;e=new GP;e.kk=A(491);e.ke=3;LR=e;UP=T(GP,[b,c,d,e]);};
function Jf(){let a=this;C.call(a);a.mq=null;a.mn=null;a.sc=0;a.qL=0;a.rl=null;a.rP=0;a.xd=null;}
let HX=null;
let VL=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.sc=1;a.rP=0;g=new Bn;CT();a.xd=g;MF();switch(S2.data[b.ke]){case 1:a.mq=Sx(c,d,f);b=new Hx;b.ou=1;b.qg=0;b.tX=1;if(!Da){h=Ft(e);e=h.data.length;f=new JQ;i=0+e|0;Bt(f);f.kt=(-1);f.kB=e;f.ka=e;f.ki=0;f.ka=i;f.rD=0;f.r1=0;f.rj=h;}else{d=e*2|0;if(d<0){b=new Bk;f=new K;f.j3=G(16);B$(f,f.j2,Cl(A(492)));J(f,f.j2,d,10);g=new I;h=f.j3;j=h.data;d=f.j2;e=j.length;if(d>=0&&d<=(e-0|0)){g.j4=L(h.data,0,d);b.j5=1;b.j6=1;b.j7=g;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}f=new CY;h=BI(d);f.kt
=(-1);f.kB=d;f.ka=d;f.k_=Cp;f.lB=0;f.k6=h;f.ki=0;f.ka=d;f.mg=1;f.lM=0;f.k_=De();f=J5(f);}b.nZ=f;f.ka=f.ki;f.ki=0;f.kt=(-1);f=Bq;g=f.kb.createBuffer();e=f.mt;f.mt=e+1|0;Cc(f.m9,e,Cf(g));b.r_=e;b.rv=!c?35048:35044;a.mn=b;a.qL=0;break a;case 2:break;case 3:a.mq=R9(c,d,f);a.mn=Wf(c,e);a.qL=0;break a;case 4:break b;default:break b;}a.mq=ARl(c,d,f);a.mn=Wf(c,e);a.qL=0;break a;}b=new Pb;S7(b,0,d,f);a.mq=b;b=new Qn;b.ou=1;b.qg=0;b.tX=1;if(!Da){h=Ft(e);d=h.data.length;f=new JQ;k=0+d|0;UX(f,d);f.ki=0;f.ka=k;f.rD=0;f.r1
=0;f.rj=h;}else{c=e*2|0;if(c<0){b=new Bk;f=new K;f.j3=G(16);Ec(f,f.j2,A(492));J(f,f.j2,c,10);g=new I;h=f.j3;j=h.data;d=f.j2;e=j.length;if(d>=0&&d<=(e-0|0)){g.j4=L(h.data,0,d);b.j5=1;b.j6=1;b.j7=g;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}f=new CY;h=BI(c);Bt(f);f.kt=(-1);f.kB=c;f.ka=c;f.k_=Cp;f.lB=0;f.k6=h;f.ki=0;f.ka=c;f.mg=1;f.lM=0;f.k_=De();f=J5(f);}b.nZ=f;f.ka=f.ki;f.ki=0;f.kt=(-1);f=Bq;g=f.kb.createBuffer();d=f.mt;f.mt=d+1|0;Cc(f.m9,d,Cf(g));b.r_=d;b.rv=35044;a.mn=b;a.qL=1;}b=Dc;f=HX;if(b===null){f=f.mw.data[0];while
(f!==null&&f.m1!==null){f=f.nd;}}else{l=b;if(!l.$id$){g=E1();l.$id$=g;}e=b.$id$;h=f.mw.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.pu==e){g=f.m1;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.nd;}}f=f===null?null:f.m2;if(f===null){f=new Bg;f.ku=1;f.j_=Q(C,16);}Bf(f,a);GG(HX,b,f);},
AV$=(a,b,c,d,e)=>{let f=new Jf();VL(f,a,b,c,d,e);return f;},
SR=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.mq.hS(b,g);g=a.rl;if(g!==null&&g.hT()>0)a.rl.hS(b,h);if(a.mn.hU()>0)a.mn.g_();}if(a.qL){if(a.mn.hU()<=0)Bq.hV(c,d,e);else{g=a.mn.hd(0);i=g.ki;CC(g,d);Bq.hW(c,e,5123,g);CC(g,i);}}else{j=0;if(a.rP)j=a.rl.hT();if(a.mn.hU()<=0){if(a.rP&&j>0)EA.hX(c,d,e,j);else Bq.hV(c,d,e);}else{if((e+d|0)>a.mn.hY()){b=new S;g=new K;g.j3=G(16);D(g,g.j2,A(493));J(g,g.j2,e,10);D(g,g.j2,A(494));J(g,g.j2,d,10);D(g,g.j2,A(495));c=a.mn.hY();J(g,g.j2,c,10);D(g,g.j2,
A(55));h=new I;k=g.j3;l=k.data;d=g.j2;e=l.length;if(d>=0&&d<=(e-0|0)){h.j4=L(k.data,0,d);b.j5=1;b.j6=1;b.j7=h;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}if(a.rP&&j>0)EA.hZ(c,e,5123,d*2|0,j);else Bq.h0(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.mq.h1(b,g);g=a.rl;if(g!==null&&g.hT()>0)a.rl.h1(b,h);if(a.mn.hU()>0)a.mn.h2();}},
AS5=()=>{let b,c,d,e;b=new I0;c=JW(16);b.pf=0;d=Q(FI,c);e=d.data;b.mw=d;b.th=0.75;b.ql=e.length*0.75|0;HX=b;};
function NB(){let a=this;C.call(a);a.ur=null;a.wF=null;a.xa=null;a.t2=null;a.uR=null;a.qH=null;a.rn=null;a.u2=0.0;a.w8=0.0;a.tV=0.0;a.us=0.0;a.w3=null;a.yN=null;a.yp=null;}
let ANa=a=>{let b,c,d;b=new Bn;CT();a.ur=b;b=new Bn;b.kf=0.0;b.kg=0.0;b.kh=(-1.0);a.wF=b;b=new Bn;b.kf=0.0;b.kg=1.0;b.kh=0.0;a.xa=b;a.t2=C8();a.uR=C8();a.qH=C8();a.rn=C8();a.u2=1.0;a.w8=100.0;a.tV=0.0;a.us=0.0;a.w3=AML();a.yN=new Bn;b=new LV;Ms();c=new Bn;b.yE=c;d=new Bn;b.zS=d;c.kf=0.0;c.kg=0.0;c.kh=0.0;d.kf=0.0;d.kg=0.0;d.kh=0.0;a.yp=b;},
ALd=(a,b,c,d,e,f)=>{let g,h;g=b.kf-c;h=B3.lm.height-b.kg-d;b.kf=2.0*g/e-1.0;b.kg=2.0*h/f-1.0;b.kh=2.0*b.kh-1.0;ABr(b,a.rn);return b;};
function QB(){let a=this;NB.call(a);a.vM=0.0;a.xe=null;}
let Wn=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.t2;d=a.vM;e=a.tV;f=d* -e/2.0;e=d*e/2.0;g=a.us;Mu(c,f,e,d* -(g/2.0),d*g/2.0,a.u2,a.w8);c=a.uR;h=a.ur;i=a.xe;d=h.kf;j=h.kg;f=h.kh;i.kf=d;i.kg=j;i.kh=f;k=a.wF;l=k.kf;e=k.kg;g=k.kh;d=d+l;j=j+e;f=f+g;i.kf=d;i.kg=j;i.kh=f;i=a.xa;k=VF;k.kf=d;k.kg=j;k.kh=f;l=h.kf;e=h.kg;g=h.kh;l=d-l;e=j-e;g=f-g;k.kf=l;k.kg=e;k.kh=g;ADv(c,k,i);i=PT;l= -h.kf;e= -h.kg;g= -h.kh;La(i);m=i.ln.data;m[12]=l;m[13]=e;m[14]=g;SV(c,i);C$(a.qH,a.t2.ln);Oy(a.qH.ln,a.uR.ln);if(b){C$(a.rn,a.qH.ln);ADY(a.rn.ln);ALk(a.w3,
a.rn);}};
function Hw(){C.call(this);this.m5=0;}
let I8=null,Ji=null,QM=null;
let DB=a=>{return a.m5;},
AUw=()=>{let b;b=new Hw;b.m5=1;I8=b;b=new Hw;b.m5=0;Ji=b;QM=M(Ci);};
function Ua(){B2.call(this);this.st=null;}
let AN4=(a,b,c,d,e,f)=>{let g;b=a.st;if(b.o0.m5){b.o0=Ji;if(BW===null){b=new CO;g=new Ck;g.lL=BI(32);b.l6=g;g=new K;Bt(g);g.j3=G(16);b.lQ=g;b.lP=G(32);b.lR=0;b.lS=Cg;BW=b;}g=a.st.o0;b=A(2);if(g!==null)b=!g.m5?A(82):A(83);BX(Bw(b));}else{b.o0=I8;if(BW===null){b=new CO;g=new Ck;g.lL=BI(32);b.l6=g;g=new K;Bt(g);g.j3=G(16);b.lQ=g;b.lP=G(32);b.lR=0;b.lS=Cg;BW=b;}g=a.st.o0;b=A(2);if(g!==null)b=!g.m5?A(82):A(83);BX(Bw(b));}};
let Ni=F(0);
let Vk=F(0);
function Ph(){let a=this;C.call(a);a.x7=null;a.xw=null;a.zo=0;a.z7=0;}
let AM8=a=>{let b,c;if(!a.zo){b=a.x7;b.v4=null;if(B1!==b)B1=b;B1.oN=Em();c=a.xw;b=null;c.pS.e(b);}};
function Po(){let a=this;C.call(a);a.l8=null;a.mW=0;a.yv=Ca;a.zl=0;a.zP=0;}
let AJC=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.yv=V(-1);a.zl=(-1);a.zP=(-1);c=b.length;if(!c){d=new Bk;d.j5=1;d.j6=1;d.j7=A(496);B(d);}e=Q(DV,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.l8=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.n5=c;switch(d.mI){case 5120:case 5121:break;case 5122:case 5123:g=2*d.mx|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.mx|0;break a;default:break b;}g=d.mx;break a;}g=0;}c=c+g|0;h=h+1|0;}a.mW=c;},
Rf=a=>{let b=new Po();AJC(b,a);return b;};
function L7(){let a=this;C.call(a);a.nr=null;a.nU=0;a.rZ=null;a.wq=null;a.xb=null;a.wD=null;a.nP=null;a.wB=null;a.xo=null;a.v8=null;a.mO=0;a.tY=0;a.vw=0;a.Af=null;a.l2=null;a.l4=null;a.k7=0;a.z4=0;a.nj=null;a.q3=null;}
let HM=0,Nv=null,L3=null,Nk=null,AON=null;
let Id=()=>{Id=BQ(L7);ANv();};
let AS1=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;Id();a.nr=A(68);a.rZ=Gj(51,0.800000011920929);a.wq=Gj(51,0.800000011920929);a.xb=Gj(51,0.800000011920929);a.nP=Gj(51,0.800000011920929);a.wB=Gj(51,0.800000011920929);a.xo=Gj(51,0.800000011920929);a.z4=0;if(!Da){d=X(1);e=d.data.length;f=new Gf;g=0+e|0;f.kt=(-1);f.kB=e;f.ka=e;f.ki=0;f.ka=g;f.pB=0;f.qT=0;f.ph=d;}else{h=new CY;d=BI(4);h.kt=(-1);h.kB=4;h.ka=4;h.k_=Cp;h.lB=0;h.k6=d;h.ki=0;h.ka=4;h.mg=1;h.lM=0;h.k_=De();f=GV(h);}a.nj=f;if(!Da){d=X(1);e=d.data.length;f=new Gf;g
=0+e|0;f.kt=(-1);f.kB=e;f.ka=e;f.ki=0;f.ka=g;f.pB=0;f.qT=0;f.ph=d;}else{h=new CY;d=BI(4);h.kt=(-1);h.kB=4;h.ka=4;h.k_=Cp;h.lB=0;h.k6=d;h.ki=0;h.ka=4;h.mg=1;h.lM=0;h.k_=De();f=GV(h);}a.q3=f;if(b===null){b=new Bk;b.j5=1;b.j6=1;b.j7=A(497);B(b);}if(c===null){b=new Bk;b.j5=1;b.j6=1;b.j7=A(498);B(b);}f=Nv;if(f!==null&&f.j4.length>0){f=new K;f.j3=G(16);h=Nv;D(f,f.j2,h);D(f,f.j2,b);b=new I;d=f.j3;i=d.data;e=f.j2;j=i.length;if(e>=0&&e<=(j-0|0))b.j4=L(d.data,0,e);else{b=new H;b.j5=1;b.j6=1;B(b);}}f=L3;if(f!==null&&f.j4.length
>0){f=new K;f.j3=G(16);h=L3;D(f,f.j2,h);D(f,f.j2,c);c=new I;d=f.j3;i=d.data;e=f.j2;j=i.length;if(e>=0&&e<=(j-0|0))c.j4=L(d.data,0,e);else{b=new H;b.j5=1;b.j6=1;B(b);}}a.l2=b;a.l4=c;if(!Da){i=B_(16);k=i.data.length;f=new H5;l=0+k|0;f.kt=(-1);f.kB=k;f.ka=k;f.ki=0;f.ka=l;f.qS=0;f.rq=0;f.qk=i;}else{f=new CY;d=BI(64);f.kt=(-1);f.kB=64;f.ka=64;f.k_=Cp;f.lB=0;f.k6=d;f.ki=0;f.ka=64;f.mg=1;f.lM=0;f.k_=De();f=E9(f);}a.Af=f;CI(a,b,c);if(a.nU){ADZ(a);AJt(a);b=Dc;c=Nk;l=BE(c,b);c=l<0?null:c.kP.data[l];if(c===null){c=new Bg;c.ku
=1;c.j_=Q(C,16);}Bf(c,a);Ce(Nk,b,c);}},
QU=(a,b)=>{let c=new L7();AS1(c,a,b);return c;},
CI=(a,b,c)=>{let d;a.tY=Wr(a,35633,b);d=Wr(a,35632,c);a.vw=d;if(a.tY!=(-1)&&d!=(-1)){d=Bq.ia();if(!d)d=(-1);d=APS(a,d);a.mO=d;if(d!=(-1)){a.nU=1;return;}a.nU=0;return;}a.nU=0;},
Wr=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bq;if(!Da){e=X(1);f=e.data.length;g=new Gf;h=0+f|0;g.kt=(-1);g.kB=f;g.ka=f;g.ki=0;g.ka=h;g.pB=0;g.qT=0;g.ph=e;}else{g=new CY;e=BI(4);g.kt=(-1);g.kB=4;g.ka=4;g.k_=Cp;g.lB=0;g.k6=e;g.ki=0;g.ka=4;g.mg=1;g.lM=0;g.k_=De();g=GV(g);}i=d.ic(b);if(!i)return (-1);d.id(i,c);d.ie(i);d.eF(i,35713,g);if(E7(g,0))return i;j=d.ig(i);c=new K;c.j3=G(16);d=a.nr;D(c,c.j2,d);d=b!=35633?A(499):A(500);D(c,c.j2,d);d=new I;e=c.j3;k=e.data;i=c.j2;l=k.length;if(i>=0&&i<=(l-0|0)){d.j4=L(e.data,0,i);a.nr
=d;c=new K;c.j3=G(16);D(c,c.j2,d);D(c,c.j2,j);d=new I;e=c.j3;k=e.data;i=c.j2;l=k.length;if(i>=0&&i<=(l-0|0)){d.j4=L(e.data,0,i);a.nr=d;return (-1);}c=new H;c.j5=1;c.j6=1;B(c);}c=new H;c.j5=1;c.j6=1;B(c);},
APS=(a,b)=>{let c,d,e,f;c=Bq;if(b==(-1))return (-1);c.ih(b,a.tY);c.ih(b,a.vw);c.ii(b);d=new CY;e=BI(4);d.kt=(-1);d.kB=4;d.ka=4;d.k_=Cp;d.lB=0;d.k6=e;d.ki=0;d.ka=4;d.mg=1;d.lM=0;d.k_=De();f=GV(d);c.eE(b,35714,f);if(E7(f,0))return b;a.nr=Bq.g9(b);return (-1);},
Jc=(a,b,c)=>{let d,e,f,g,h,i;d=a.rZ;e=(-2);f=E3(d,b);if(f>=0)e=d.m6.data[f];if(e==(-2)){e=Bq.ij(a.mO,b);if(e==(-1)&&c){if(a.nU){d=new Bk;g=new K;g.j3=G(16);D(g,g.j2,A(501));D(g,g.j2,b);D(g,g.j2,A(502));b=new I;h=g.j3;i=h.data;e=g.j2;f=i.length;if(e>=0&&e<=(f-0|0)){b.j4=L(h.data,0,e);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;b.j5=1;b.j6=1;B(b);}b=new BN;d=new K;d.j3=G(16);D(d,d.j2,A(503));if(!a.nU)g=a.nr;else{g=Bq.g9(a.mO);a.nr=g;}D(d,d.j2,g);g=new I;h=d.j3;i=h.data;e=d.j2;f=i.length;if(e>=0&&e<=(f-0|0)){g.j4=L(h.data,
0,e);b.j5=1;b.j6=1;b.j7=g;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}EL(a.rZ,b,e);}return e;},
AJt=a=>{let b,c,d,e,f;b=a.nj;b.ki=0;b.ka=b.kB;b.kt=(-1);Bq.eE(a.mO,35718,b);c=E7(a.nj,0);a.wD=Q(I,c);d=0;while(d<c){b=a.nj;b.ki=0;b.ka=b.kB;b.kt=(-1);Vq(b,0,1);b=a.q3;b.ki=0;b.ka=b.kB;b.kt=(-1);e=Bq.eD(a.mO,d,a.nj,b);f=Bq.ij(a.mO,e);EL(a.rZ,e,f);EL(a.wq,e,E7(a.q3,0));EL(a.xb,e,E7(a.nj,0));a.wD.data[d]=e;d=d+1|0;}},
ADZ=a=>{let b,c,d,e,f;b=a.nj;b.ki=0;b.ka=b.kB;b.kt=(-1);Bq.eE(a.mO,35721,b);c=E7(a.nj,0);a.v8=Q(I,c);d=0;while(d<c){b=a.nj;b.ki=0;b.ka=b.kB;b.kt=(-1);Vq(b,0,1);b=a.q3;b.ki=0;b.ka=b.kB;b.kt=(-1);e=Bq.eC(a.mO,d,a.nj,b);f=Bq.im(a.mO,e);EL(a.nP,e,f);EL(a.wB,e,E7(a.q3,0));EL(a.xo,e,E7(a.nj,0));a.v8.data[d]=e;d=d+1|0;}},
ANv=()=>{let b,c,d,e;HM=1;Nv=A(68);L3=A(68);Nk=EQ(51,0.800000011920929);if(!Da){b=X(1);c=b.data.length;d=new Gf;e=0+c|0;d.kt=(-1);d.kB=c;d.ka=c;d.ki=0;d.ka=e;d.pB=0;d.qT=0;d.ph=b;}else{d=new CY;b=BI(4);d.kt=(-1);d.kB=4;d.ka=4;d.k_=Cp;d.lB=0;d.k6=b;d.ki=0;d.ka=4;d.mg=1;d.lM=0;d.k_=De();d=GV(d);}AON=d;};
function M_(){let a=this;Bg.call(a);a.nx=null;a.ti=null;a.mB=0;}
let Fq=a=>{let b,c,d,e;b=a.mB-1|0;if(0>b)b=0;a.mB=b;c=a.nx;if(c===null)return;a:{if(c!==a.j_&&!b){d=c.data;a.ti=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.nx=null;},
CF=a=>{let b,c,d,e;b=a.nx;if(b!==null){c=a.j_;if(b===c){a:{b=a.ti;if(b!==null){d=b.data.length;e=a.j8;if(d>=e){Di(c,0,b,0,e);a.j_=a.ti;a.ti=null;break a;}}II(a,c.data.length);}return;}}};
function K3(){let a=this;Bg.call(a);a.qt=0;a.qQ=null;a.qB=0;}
let AMX=a=>{a.qt=a.qt+1|0;},
AO1=a=>{let b,c,d,e,f,g,h,i,j;b=a.qt;if(!b){c=new BN;c.j5=1;c.j6=1;c.j7=A(504);B(c);}d=b-1|0;a.qt=d;if(!d){a:{b=a.qB;if(b>0){e=a.j8;if(b==e){a.qQ.lV=0;if(d>0)a.qB=e;else{f=a.j_;d=0;c=null;if(d>e){c=new Bk;c.j5=1;c.j6=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.j8=0;}break a;}}d=0;b=a.qQ.lV;b:{while(true){if(d>=b)break b;c=a.qQ;f=c.mC.data;e=c.lV-1|0;c.lV=e;h=f[e];if(h>=a.qB){if(a.qt<=0)Dm(a,h);else{VA(a,h);if(h>=a.j8)break;}}d=d+1|0;}i=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,h,10);D(c,c.j2,A(19));d
=a.j8;J(c,c.j2,d,10);j=new I;f=c.j3;g=f.data;b=c.j2;e=g.length;if(b>=0&&b<=(e-0|0)){j.j4=L(f.data,0,b);i.j5=1;i.j6=1;i.j7=j;B(i);}c=new H;c.j5=1;c.j6=1;B(c);}d=a.qB-1|0;while(true){if(d<0)break a;if(a.qt<=0)Dm(a,d);else{VA(a,d);if(d>=a.j8){i=new H;c=new K;c.j3=G(16);D(c,c.j2,A(18));J(c,c.j2,d,10);D(c,c.j2,A(19));d=a.j8;J(c,c.j2,d,10);j=new I;f=c.j3;g=f.data;b=c.j2;e=g.length;if(b>=0&&b<=(e-0|0)){j.j4=L(f.data,0,b);i.j5=1;i.j6=1;i.j7=j;B(i);}c=new H;c.j5=1;c.j6=1;B(c);}}d=d+(-1)|0;}}a.qB=0;}},
VA=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.qB)return;c=0;d=a.qQ;e=d.lV;while(true){f=BU(c,e);if(f>=0){LX(d,b);return;}if(f>=0){g=new H;h=new K;h.j3=G(16);D(h,h.j2,A(18));J(h,h.j2,c,10);D(h,h.j2,A(19));b=d.lV;J(h,h.j2,b,10);d=new I;i=h.j3;j=i.data;c=h.j2;e=j.length;if(c>=0&&c<=(e-0|0)){d.j4=L(i.data,0,c);g.j5=1;g.j6=1;g.j7=d;B(g);}d=new H;d.j5=1;d.j6=1;B(d);}f=BU(b,d.mC.data[c]);if(!f)break;if(f<0){ASN(d,c,b);return;}c=c+1|0;}};
function Ux(){let a=this;C.call(a);a.t4=0;a.tQ=0;a.vN=0;}
let Wq=F();
let S2=null;
let MF=()=>{MF=BQ(Wq);AOf();};
let AOf=()=>{let b,c;b=X((UP.p()).data.length);c=b.data;S2=b;c[OW.ke]=1;c[SH.ke]=2;c[LR.ke]=3;c[Lz.ke]=4;};
let Jp=F(0);
function IY(){let a=this;C.call(a);a.nT=null;a.pL=null;a.wN=0;a.Aa=0;a.t_=0;a.rH=0;a.r6=0;}
let S7=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.rH=0;a.r6=0;a.Aa=b;a.nT=d;c=Dl(d.mW/4|0,c);if(!Da){e=B_(c);f=e.data.length;d=new H5;g=0+f|0;d.kt=(-1);d.kB=f;d.ka=f;d.ki=0;d.ka=g;d.qS=0;d.rq=0;d.qk=e;}else{c=c*4|0;if(c<0){d=new Bk;h=new K;h.j3=G(16);BY(h,h.j2,A(492));J(h,h.j2,c,10);i=new I;e=h.j3;j=e.data;c=h.j2;k=j.length;if(c>=0&&c<=(k-0|0)){i.j4=L(e.data,0,c);d.j5=1;d.j6=1;d.j7=i;B(d);}d=new H;d.j5=1;d.j6=1;B(d);}h=new CY;e=BI(c);h.kt=(-1);h.kB=c;h.ka=c;h.k_=Cp;h.lB=0;h.k6=e;h.ki=0;h.ka=c;h.mg=1;h.lM=0;h.k_=De();d
=E9(h);}a.pL=d;d.ka=d.ki;d.ki=0;d.kt=(-1);d=Bq;h=d.kb.createBuffer();k=d.mt;d.mt=k+1|0;Cc(d.m9,k,Cf(h));a.wN=k;a.t_=!b?35048:35044;},
Sx=(a,b,c)=>{let d=new IY();S7(d,a,b,c);return d;},
AEK=a=>{return a.nT;},
ANJ=a=>{return a.pL.ka/(a.nT.mW/4|0)|0;},
ALb=(a,b,c,d)=>{let e,f,g;a.rH=1;e=a.pL;f=null;g=e instanceof E2;if(g)f=E9(e);else if(e instanceof Ek)f=e;if(f===null){f=new S;f.j5=1;f.j6=1;f.j7=A(505);B(f);}f.ki=0;f.ka=f.kB;f.kt=(-1);CC(e,0);Jl(f,b,c,d);CC(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CC(a.pL,0);CQ(a.pL,d);if(a.r6){e=Bq;f=a.pL;e.eA(34962,f.ka,f,a.t_);a.rH=0;}},
ADx=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bq;d.is(34962,a.wN);if(a.rH){e=a.pL;d.eA(34962,e.ka,e,a.t_);a.rH=0;}a:{f=a.nT.l8.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nT.l8.data[g];j=h[g];if(j>=0){e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}e.it(j);k=i.mx;l=i.mI;m=i.mR;n=a.nT.mW;o=i.n5;e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}e.iu(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nT.l8.data[g];d=i.mN;e=b.nP;p=(-1);j=E3(e,d);if(j>=0)p=e.m6.data[j];if(p>=0){e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}e.it(p);j
=i.mx;k=i.mI;l=i.mR;m=a.nT.mW;n=i.n5;e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}e.iu(p,j,k,l,m,n);}g=g+1|0;}}a.r6=1;},
Zd=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bq;e=a.nT.l8.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}h.iv(g);}f=f+1|0;}}i=0;while(i<e){j=a.nT.l8.data[i].mN;k=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}l=Bq;h=b.nP;g=(-2);f=E3(h,j);if(f>=0)g=h.m6.data[f];if(g==(-2)){g=l.im(b.mO,j);EL(b.nP,j,g);}if(g!=(-1))k.iv(g);i=i+1|0;}}d.is(34962,0);a.r6=0;};
let Ks=F(0);
function Hx(){let a=this;C.call(a);a.nZ=null;a.r_=0;a.tX=0;a.ou=0;a.qg=0;a.rv=0;}
let AFT=a=>{return a.nZ.ka;},
XY=a=>{return a.nZ.kB;},
AKJ=(a,b,c,d)=>{let e;a.ou=1;e=a.nZ;e.ki=0;e.ka=e.kB;e.kt=(-1);Vb(e,b,c,d);e=a.nZ;c=e.ki;e.ka=c;e.ki=0;e.kt=(-1);if(a.qg){Bq.eA(34963,c,e,a.rv);a.ou=0;}},
YX=(a,b)=>{a.ou=a.ou|b;return a.nZ;},
ARx=a=>{let b,c,d;b=a.r_;if(!b){c=new S;c.j5=1;c.j6=1;c.j7=A(506);B(c);}Bq.is(34963,b);if(a.ou){c=Bq;d=a.nZ;c.eA(34963,d.ka,d,a.rv);a.ou=0;}a.qg=1;},
AN2=a=>{Bq.is(34963,0);a.qg=0;};
function PX(){let a=this;C.call(a);a.nL=null;a.n4=null;a.os=null;a.vA=0;a.vP=0;a.yn=0;a.tE=0;a.rx=0;a.sf=0;}
let AJR=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.rx=0;a.sf=0;a.yn=b;a.nL=d;c=Dl(d.mW,c);if(!Da){e=BI(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new CY;g=0+f|0;d.kt=(-1);d.kB=f;d.ka=f;d.k_=Cp;d.lB=0;d.k6=e;d.ki=0;d.ka=g;d.mg=0;d.lM=0;break a;}d=new H;d.j5=1;d.j6=1;Bi(d);B(d);}if(c<0){d=new Bk;h=new K;h.j3=G(16);BY(h,h.j2,A(492));J(h,h.j2,c,10);i=new I;e=h.j3;j=e.data;c=h.j2;f=j.length;if(c>=0&&c<=(f-0|0)){i.j4=L(e.data,0,c);d.j5=1;d.j6=1;d.j7=i;B(d);}d=new H;d.j5=1;d.j6=1;B(d);}d=new CY;e=BI(c);d.kt=(-1);d.kB=c;d.ka=
c;d.k_=Cp;d.lB=0;d.k6=e;d.ki=0;d.ka=c;d.mg=1;d.lM=0;d.k_=De();}a.os=d;a.vP=1;a.tE=!b?35048:35044;a.n4=E9(d);d=Bq;h=d.kb.createBuffer();g=d.mt;d.mt=g+1|0;Cc(d.m9,g,Cf(h));Bq.is(34962,g);Bq.eA(34962,a.os.kB,null,a.tE);Bq.is(34962,0);a.vA=g;d=a.n4;d.ka=d.ki;d.ki=0;d.kt=(-1);d=a.os;d.ka=d.ki;d.ki=0;d.kt=(-1);},
ARl=(a,b,c)=>{let d=new PX();AJR(d,a,b,c);return d;},
AAO=a=>{return a.nL;},
ABZ=a=>{return (a.n4.ka*4|0)/a.nL.mW|0;},
ZK=(a,b,c,d)=>{let e,f,g;a.rx=1;if(!a.vP){e=a.n4;e.ki=0;e.ka=e.kB;e.kt=(-1);Jl(e,b,c,d);e=a.n4;e.ka=e.ki;e.ki=0;e.kt=(-1);CC(a.os,0);CQ(a.os,a.n4.ka<<2);}else{e=a.os;f=null;g=e instanceof E2;if(g)f=E9(e);else if(e instanceof Ek)f=e;if(f===null){f=new S;f.j5=1;f.j6=1;f.j7=A(505);B(f);}f.ki=0;f.ka=f.kB;f.kt=(-1);CC(e,0);Jl(f,b,c,d);CC(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CC(a.n4,0);CQ(a.n4,d);}if(a.sf){e=Bq;f=a.os;e.eB(34962,0,f.ka,f);a.rx=0;}},
AKt=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bq;d.is(34962,a.vA);if(a.rx){CQ(a.os,a.n4.ka*4|0);e=a.os;d.eA(34962,e.ka,e,a.tE);a.rx=0;}a:{f=a.nL.l8.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nL.l8.data[g];j=h[g];if(j>=0){e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}e.it(j);k=i.mx;l=i.mI;m=i.mR;n=a.nL.mW;o=i.n5;e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}e.iu(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nL.l8.data[g];p=i.mN;e=b.nP;q=(-1);j=E3(e,p);if(j>=0)q=e.m6.data[j];if(q>=0){e=Bq;if(b.k7){CI(b,
b.l2,b.l4);b.k7=0;}e.it(q);j=i.mx;k=i.mI;l=i.mR;m=a.nL.mW;n=i.n5;e=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}e.iu(q,j,k,l,m,n);}g=g+1|0;}}a.sf=1;},
ADy=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bq;e=a.nL.l8.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}h.iv(g);}f=f+1|0;}}i=0;while(i<e){j=a.nL.l8.data[i].mN;k=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}l=Bq;h=b.nP;g=(-2);f=E3(h,j);if(f>=0)g=h.m6.data[f];if(g==(-2)){g=l.im(b.mO,j);EL(b.nP,j,g);}if(g!=(-1))k.iv(g);i=i+1|0;}}d.is(34962,0);a.sf=0;};
function Sb(){let a=this;C.call(a);a.pI=null;a.ox=null;a.wS=0;a.zd=0;a.pP=0;a.si=0;a.xf=0;}
let ACX=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.pP=1;a.si=0;c=c*2|0;if(!Da){d=BI(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new CY;g=0+e|0;f.kt=(-1);f.kB=e;f.ka=e;f.k_=Cp;f.lB=0;f.k6=d;f.ki=0;f.ka=g;f.mg=0;f.lM=0;break a;}f=new H;f.j5=1;f.j6=1;Bi(f);B(f);}if(c<0){f=new Bk;h=new K;h.j3=G(16);BY(h,h.j2,A(492));J(h,h.j2,c,10);i=new I;d=h.j3;j=d.data;c=h.j2;k=j.length;if(c>=0&&c<=(k-0|0)){i.j4=L(d.data,0,c);f.j5=1;f.j6=1;f.j7=i;B(f);}f=new H;f.j5=1;f.j6=1;B(f);}f=new CY;d=BI(c);f.kt=(-1);f.kB=c;f.ka=c;f.k_=Cp;f.lB=0;f.k6
=d;f.ki=0;f.ka=c;f.mg=1;f.lM=0;f.k_=De();}a.ox=f;a.zd=1;a.xf=!b?35048:35044;f=J5(f);a.pI=f;f.ka=f.ki;f.ki=0;f.kt=(-1);f=a.ox;f.ka=f.ki;f.ki=0;f.kt=(-1);f=Bq;h=f.kb.createBuffer();e=f.mt;f.mt=e+1|0;Cc(f.m9,e,Cf(h));Bq.is(34963,e);Bq.eA(34963,a.ox.kB,null,a.xf);Bq.is(34963,0);a.wS=e;},
Wf=(a,b)=>{let c=new Sb();ACX(c,a,b);return c;},
AM_=a=>{return a.pI.ka;},
W6=a=>{return a.pI.kB;},
AGA=(a,b,c,d)=>{let e,f;a.pP=1;e=a.pI;e.ki=0;e.ka=e.kB;e.kt=(-1);Vb(e,b,c,d);e=a.pI;e.ka=e.ki;e.ki=0;e.kt=(-1);CC(a.ox,0);CQ(a.ox,d<<1);if(a.si){e=Bq;f=a.ox;e.eB(34963,0,f.ka,f);a.pP=0;}},
AP9=(a,b)=>{a.pP=a.pP|b;return a.pI;},
AHt=a=>{let b,c,d;b=a.wS;if(!b){c=new S;c.j5=1;c.j6=1;c.j7=A(507);B(c);}Bq.is(34963,b);if(a.pP){CQ(a.ox,a.pI.ka*2|0);c=Bq;d=a.ox;c.eB(34963,0,d.ka,d);a.pP=0;}a.si=1;},
AAr=a=>{Bq.is(34963,0);a.si=0;};
function Ln(){let a=this;C.call(a);a.ow=null;a.o6=null;a.uJ=0;a.Ae=0;a.uu=0;a.rA=0;a.tg=0;a.tT=0;a.n_=null;}
let Mx=null;
let Lt=()=>{Lt=BQ(Ln);ATn();};
let AB7=(a,b,c,d)=>{let e,f,g,h,i,j;Lt();a.rA=0;a.tg=0;a.tT=(-1);e=new FL;e.pi=1;e.mC=X(16);a.n_=e;a.Ae=b;a.ow=d;c=Dl(d.mW/4|0,c);if(!Da){f=B_(c);g=f.data.length;d=new H5;h=0+g|0;d.kt=(-1);d.kB=g;d.ka=g;d.ki=0;d.ka=h;d.qS=0;d.rq=0;d.qk=f;}else{c=c*4|0;if(c<0){d=new Bk;e=new K;e.j3=G(16);BY(e,e.j2,A(492));J(e,e.j2,c,10);i=new I;f=e.j3;j=f.data;c=e.j2;g=j.length;if(c>=0&&c<=(g-0|0)){i.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=i;B(d);}d=new H;d.j5=1;d.j6=1;B(d);}e=new CY;f=BI(c);e.kt=(-1);e.kB=c;e.ka=c;e.k_=Cp;e.lB=
0;e.k6=f;e.ki=0;e.ka=c;e.mg=1;e.lM=0;e.k_=De();d=E9(e);}a.o6=d;d.ka=d.ki;d.ki=0;d.kt=(-1);d=Bq;e=d.kb.createBuffer();g=d.mt;d.mt=g+1|0;Cc(d.m9,g,Cf(e));a.uJ=g;a.uu=!b?35048:35044;d=Mx;d.ki=0;d.ka=d.kB;d.kt=(-1);EA.ix(1,d);d=Mx;c=d.ki;if(c<d.ka){d.ki=c+1|0;a.tT=d.iy(c);return;}d=new Nm;d.j5=1;d.j6=1;B(d);},
R9=(a,b,c)=>{let d=new Ln();AB7(d,a,b,c);return d;},
Zr=a=>{return a.ow;},
AKz=a=>{return (a.o6.ka*4|0)/a.ow.mW|0;},
ZF=(a,b,c,d)=>{let e,f,g;a.rA=1;e=a.o6;f=null;g=e instanceof E2;if(g)f=E9(e);else if(e instanceof Ek)f=e;if(f===null){f=new S;f.j5=1;f.j6=1;f.j7=A(505);B(f);}f.ki=0;f.ka=f.kB;f.kt=(-1);CC(e,0);Jl(f,b,c,d);CC(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CC(a.o6,0);CQ(a.o6,d);if(a.tg){e=Bq;f=a.o6;e.eA(34962,f.ka,f,a.uu);a.rA=0;}},
APM=(a,b,c)=>{let d;d=EA;d.iz(a.tT);AOU(a,b,c);if(a.rA){d.is(34962,a.uJ);b=a.o6;CQ(b,b.ka);b=a.o6;d.eA(34962,b.ka,b,a.uu);a.rA=0;}a.tg=1;},
AOU=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.n_;e=d.lV;f=!e?0:1;a:{g=a.ow.l8.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.ow.l8.data[e].mN;h=b.nP;i=(-1);f=E3(h,d);if(f>=0)i=h.m6.data[f];d=a.n_;if(e>=d.lV)break;f=i!=d.mC.data[e]?0:1;e=e+1|0;}h=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,e,10);D(b,b.j2,A(19));e=d.lV;J(b,b.j2,e,10);d=new I;c=b.j3;j=c.data;f=b.j2;g=j.length;if(f>=0&&f<=(g-0|0)){d.j4=L(c.data,0,f);h.j5=1;h.j6=1;h.j7=d;B(h);}b=new H;R(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.mC.data[i]?0:1;i=i+1|0;}h=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,i,10);D(b,b.j2,A(19));e=d.lV;J(b,b.j2,e,10);d=new I;c=b.j3;j=c.data;f=b.j2;g=j.length;if(f>=0&&f<=(g-0|0)){d.j4=L(c.data,0,f);h.j5=1;h.j6=1;h.j7=d;B(h);}b=new H;R(b);B(b);}}}c:{if(!f){d:{B9.is(34962,a.uJ);if(a.n_.lV){k=a.ow.l8.data.length;e=0;while(true){if(e>=k)break d;d=a.n_;if(e>=d.lV)break;i=d.mC.data[e];if(i>=0){d=Bq;if(b.k7){CI(b,
b.l2,b.l4);b.k7=0;}d.iv(i);}e=e+1|0;}h=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,e,10);D(b,b.j2,A(19));e=d.lV;J(b,b.j2,e,10);d=new I;c=b.j3;j=c.data;f=b.j2;g=j.length;if(f>=0&&f<=(g-0|0)){d.j4=L(c.data,0,f);h.j5=1;h.j6=1;h.j7=d;B(h);}b=new H;GC(b);B(b);}}a.n_.lV=0;e=0;while(true){if(e>=g)break c;h=a.ow.l8.data[e];if(c!==null){j=c.data;LX(a.n_,j[e]);}else{l=a.n_;m=h.mN;d=b.nP;i=(-1);f=E3(d,m);if(f>=0)i=d.m6.data[f];LX(l,i);}d=a.n_;if(e>=d.lV){h=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,e,10);D(b,
b.j2,A(19));e=d.lV;J(b,b.j2,e,10);d=new I;c=b.j3;j=c.data;f=b.j2;g=j.length;if(f>=0&&f<=(g-0|0)){d.j4=L(c.data,0,f);h.j5=1;h.j6=1;h.j7=d;B(h);}b=new H;R(b);B(b);}n=d.mC.data[e];if(n>=0){d=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}d.it(n);f=h.mx;i=h.mI;k=h.mR;o=a.ow.mW;p=h.n5;d=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}d.iu(n,f,i,k,o,p);}e=e+1|0;}}}},
ACI=(a,b,c)=>{EA.iz(0);a.tg=0;},
ATn=()=>{let b,c,d,e;if(!Da){b=X(1);c=b.data.length;d=new Gf;e=0+c|0;d.kt=(-1);d.kB=c;d.ka=c;d.ki=0;d.ka=e;d.pB=0;d.qT=0;d.ph=b;}else{d=new CY;b=BI(4);d.kt=(-1);d.kB=4;d.ka=4;d.k_=Cp;d.lB=0;d.k6=b;d.ki=0;d.ka=4;d.mg=1;d.lM=0;d.k_=De();d=GV(d);}Mx=d;};
let Pb=F(IY);
let Qn=F(Hx);
function Uc(){let a=this;C.call(a);a.tC=0;a.pb=null;a.m6=null;a.v7=0.0;a.tP=0;a.s8=0;a.s1=0;}
let AFD=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.v7=c;d=JD(b,c);a.tP=d*c|0;b=d-1|0;a.s1=b;a.s8=Fa(V(b));a.pb=Q(C,d);a.m6=X(d);return;}e=new Bk;f=new K;f.j3=G(16);D(f,f.j2,A(69));E$(f,f.j2,c);g=new I;h=f.j3;i=h.data;d=f.j2;j=i.length;if(d>=0&&d<=(j-0|0)){g.j4=L(h.data,0,d);e.j5=1;e.j6=1;e.j7=g;B(e);}f=new H;f.j5=1;f.j6=1;B(f);},
Gj=(a,b)=>{let c=new Uc();AFD(c,a,b);return c;},
E3=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bk;c.j5=1;c.j6=1;c.j7=A(70);B(c);}a:{d=a.pb;if(!b.lW){e=0;while(true){if(e>=b.j4.length)break a;b.lW=(31*b.lW|0)+b.j4.charCodeAt(e)|0;e=e+1|0;}}}f=Bl(Be(Ba(V(b.lW),E(2135587861, 2654435769)),a.s8));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof I))g=0;else{h=b;g=c.j4!==h.j4?0:1;}if(g)break;f=(f+1|0)&a.s1;}return f;},
EL=(a,b,c)=>{let d,e;d=E3(a,b);if(d>=0){a.m6.data[d]=c;return;}d= -(d+1|0)|0;e=a.pb.data;e[d]=b;a.m6.data[d]=c;c=a.tC+1|0;a.tC=c;if(c>=a.tP)APW(a,e.length<<1);},
APW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.pb.data.length;a.tP=b*a.v7|0;d=b-1|0;a.s1=d;a.s8=Fa(V(d));e=a.pb;f=a.m6;a.pb=Q(C,b);a.m6=X(b);if(a.tC>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.pb;if(!h.lW){k=0;while(true){if(k>=h.j4.length)break b;h.lW=(31*h.lW|0)+h.j4.charCodeAt(k)|0;k=k+1|0;}}}b=Bl(Be(Ba(V(h.lW),E(2135587861, 2654435769)),a.s8));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.s1;}l[b]=h;a.m6.data[b]=i;}g=g+1|0;}}}};
let ANp=F();
function EN(){let a=this;C.call(a);a.kB=0;a.ki=0;a.ka=0;a.kt=0;}
let UX=(a,b)=>{a.kt=(-1);a.kB=b;a.ka=b;},
CC=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.ka){a.ki=b;if(b<a.kt)a.kt=0;return a;}c=new Bk;d=a.ka;e=new K;e.j3=G(16);D(e,e.j2,A(508));J(e,e.j2,b,10);D(e,e.j2,A(509));J(e,e.j2,d,10);d=e.j2;Bj(e,d,d+1|0);f=e.j3;g=f.data;g[d]=93;h=new I;d=e.j2;i=g.length;if(d>=0&&d<=(i-0|0)){h.j4=L(f.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
CQ=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.kB){if(a.kt>b)a.kt=(-1);a.ka=b;if(a.ki>b)a.ki=b;return a;}c=new Bk;d=a.kB;e=new K;e.j3=G(16);D(e,e.j2,A(510));J(e,e.j2,b,10);D(e,e.j2,A(509));J(e,e.j2,d,10);d=e.j2;Bj(e,d,d+1|0);f=e.j3;g=f.data;g[d]=93;h=new I;d=e.j2;i=g.length;if(d>=0&&d<=(i-0|0)){h.j4=L(f.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);};
let Ek=F(EN);
let Jl=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iB()){e=new FV;e.j5=1;e.j6=1;B(e);}f=a.ka;g=a.ki;if((f-g|0)<d){e=new IR;e.j5=1;e.j6=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.j3=G(16);D(j,j.j2,A(511));J(j,j.j2,i,10);D(j,j.j2,A(512));J(j,j.j2,f,10);k=new I;b=j.j3;h=b.data;d=j.j2;f=h.length;if(d>=0&&d<=(f-0|0)){k.j4=L(b.data,0,d);e.j5=1;e.j6=1;e.j7=k;B(e);}e=new H;e.j5=1;e.j6=1;Bi(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iC(g,h[c]);i=i+1|0;g=l;c=f;}a.ki=a.ki+d|0;return a;}e
=new H;j=new K;j.j3=G(16);D(j,j.j2,A(513));J(j,j.j2,d,10);D(j,j.j2,A(514));k=new I;b=j.j3;h=b.data;d=j.j2;f=h.length;if(d>=0&&d<=(f-0|0)){k.j4=L(b.data,0,d);e.j5=1;e.j6=1;e.j7=k;B(e);}e=new H;e.j5=1;e.j6=1;Bi(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.j3=G(16);D(j,j.j2,A(515));J(j,j.j2,c,10);D(j,j.j2,A(509));J(j,j.j2,d,10);d=j.j2;Bj(j,d,d+1|0);b=j.j3;h=b.data;h[d]=41;k=new I;d=j.j2;f=h.length;if(d>=0&&d<=(f-0|0)){k.j4=L(b.data,0,d);e.j5=1;e.j6=1;e.j7=k;B(e);}e=new H;e.j5=1;e.j6=1;Bi(e);B(e);},
AVp=(a,b)=>{CQ(a,b);return a;},
AWp=(a,b)=>{CC(a,b);return a;},
AVt=a=>{a.ka=a.ki;a.ki=0;a.kt=(-1);return a;},
AXR=a=>{a.ki=0;a.ka=a.kB;a.kt=(-1);return a;},
AMq=(a,b)=>{CQ(a,b);return a;},
AR2=(a,b)=>{CC(a,b);return a;};
let G$=F(EN);
let Vb=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iB()){e=new FV;e.j5=1;e.j6=1;B(e);}f=a.ka;g=a.ki;if((f-g|0)<d){e=new IR;e.j5=1;e.j6=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.j3=G(16);D(j,j.j2,A(516));J(j,j.j2,i,10);D(j,j.j2,A(512));J(j,j.j2,f,10);k=new I;b=j.j3;h=b.data;d=j.j2;f=h.length;if(d>=0&&d<=(f-0|0)){k.j4=L(b.data,0,d);e.j5=1;e.j6=1;e.j7=k;B(e);}e=new H;e.j5=1;e.j6=1;Bi(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iD(g,h[c]);i=i+1|0;g=l;c=f;}a.ki=a.ki+d|0;return a;}e
=new H;j=new K;j.j3=G(16);D(j,j.j2,A(513));J(j,j.j2,d,10);D(j,j.j2,A(514));k=new I;b=j.j3;h=b.data;d=j.j2;f=h.length;if(d>=0&&d<=(f-0|0)){k.j4=L(b.data,0,d);e.j5=1;e.j6=1;e.j7=k;B(e);}e=new H;e.j5=1;e.j6=1;Bi(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.j3=G(16);D(j,j.j2,A(515));J(j,j.j2,c,10);D(j,j.j2,A(509));J(j,j.j2,d,10);d=j.j2;Bj(j,d,d+1|0);b=j.j3;h=b.data;h[d]=41;k=new I;d=j.j2;f=h.length;if(d>=0&&d<=(f-0|0)){k.j4=L(b.data,0,d);e.j5=1;e.j6=1;e.j7=k;B(e);}e=new H;e.j5=1;e.j6=1;Bi(e);B(e);},
AWM=(a,b)=>{CQ(a,b);return a;},
AWW=(a,b)=>{CC(a,b);return a;},
AW8=a=>{a.ka=a.ki;a.ki=0;a.kt=(-1);return a;},
AXH=a=>{a.ki=0;a.ka=a.kB;a.kt=(-1);return a;},
AWa=(a,b)=>{CQ(a,b);return a;},
AUa=(a,b)=>{CC(a,b);return a;};
let G9=F(EN);
let AT1=(a,b)=>{CC(a,b);return a;},
AWo=a=>{a.ki=0;a.ka=a.kB;a.kt=(-1);return a;};
function E2(){let a=this;EN.call(a);a.lB=0;a.k6=null;a.k_=null;}
let AMh=(a,b)=>{CQ(a,b);return a;},
Ya=(a,b)=>{CC(a,b);return a;};
function Hm(){C.call(this);this.sR=null;}
let Cp=null,J3=null,Mc=null;
let De=()=>{let b;if(Mc===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;Mc=(new Int8Array(b))[0]?J3:Cp;}return Mc;},
AXQ=()=>{let b;b=new Hm;b.sR=A(4);Cp=b;b=new Hm;b.sR=A(5);J3=b;};
let AGn=F();
let Eg=F(0);
function CY(){let a=this;E2.call(a);a.mg=0;a.lM=0;}
let W1=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.ka)return a.k6.data[a.lB+b|0];c=new H;d=a.ka;e=new K;e.j3=G(16);D(e,e.j2,A(517));J(e,e.j2,b,10);D(e,e.j2,A(509));J(e,e.j2,d,10);d=e.j2;Bj(e,d,d+1|0);f=e.j3;g=f.data;g[d]=41;h=new I;d=e.j2;i=g.length;if(d>=0&&d<=(i-0|0)){h.j4=L(f.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
J5=a=>{let b,c,d,e,f,g;b=a.ka;c=a.ki;d=(b-c|0)/2|0;if(a.k_!==Cp){e=new OI;f=a.lB+c|0;c=a.lM;e.kt=(-1);e.kB=d;e.ka=d;e.ki=0;e.ka=d;e.qs=f;e.o5=a;e.tS=c;return e;}e=new Qy;b=a.lB+c|0;g=a.lM;e.kt=(-1);e.kB=d;e.ka=d;e.ki=0;e.ka=d;e.qs=b;e.o5=a;e.tS=g;return e;},
APG=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.ka){c=a.k6.data;b=a.lB+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.k_!==Cp)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new H;d=a.ka-3|0;i=new K;i.j3=G(16);D(i,i.j2,A(517));J(i,i.j2,b,10);D(i,i.j2,A(509));J(i,i.j2,d,10);d=i.j2;Bj(i,d,d+1|0);c=i.j3;j=c.data;j[d]=41;k=new I;d=i.j2;e=j.length;if(d>=0&&d<=(e-0|0)){k.j4=L(c.data,0,d);h.j5=1;h.j6=1;h.j7=k;B(h);}h=new H;h.j5=1;h.j6=1;Bi(h);B(h);},
AEB=(a,b,c)=>{let d,e,f,g,h,i;if(a.lM){d=new FV;d.j5=1;d.j6=1;B(d);}if(b>=0&&(b+3|0)<a.ka){if(a.k_!==Cp){e=a.k6.data;b=a.lB+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.k6.data;b=a.lB+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new H;c=a.ka-3|0;f=new K;f.j3=G(16);D(f,f.j2,A(517));J(f,f.j2,b,10);D(f,f.j2,A(509));J(f,f.j2,c,10);c=f.j2;Bj(f,c,c+1|0);e=f.j3;g=e.data;g[c]=41;h=new I;c=f.j2;i=g.length;if(c>=
0&&c<=(i-0|0)){h.j4=L(e.data,0,c);d.j5=1;d.j6=1;d.j7=h;B(d);}d=new H;d.j5=1;d.j6=1;B(d);},
GV=a=>{let b,c,d,e,f,g;b=a.ka;c=a.ki;d=(b-c|0)/4|0;if(a.k_!==Cp){e=new Pa;f=a.lB+c|0;c=a.lM;e.kt=(-1);e.kB=d;e.ka=d;e.ki=0;e.ka=d;e.p5=f;e.p4=a;e.uk=c;return e;}e=new S0;b=a.lB+c|0;g=a.lM;e.kt=(-1);e.kB=d;e.ka=d;e.ki=0;e.ka=d;e.p5=b;e.p4=a;e.uk=g;return e;},
E9=a=>{let b,c,d,e,f,g;b=a.ka;c=a.ki;d=(b-c|0)/4|0;if(a.k_!==J3){e=new OT;f=a.lB+c|0;c=a.lM;e.kt=(-1);e.kB=d;e.ka=d;e.ki=0;e.ka=d;e.pV=f;e.o8=a;e.vf=c;return e;}e=new Rq;b=a.lB+c|0;g=a.lM;e.kt=(-1);e.kB=d;e.ka=d;e.ki=0;e.ka=d;e.pV=b;e.o8=a;e.vf=g;return e;},
ATO=a=>{return a.k6.data;};
let AJY=F();
let S9=F(0);
function K4(){let a=this;C.call(a);a.we=null;a.nH=0;a.ny=0;a.p8=null;a.qX=null;a.wJ=0;a.px=0;}
let AQP=0;
let ABx=(a,b,c,d,e)=>{a.nH=0;a.ny=0;a.px=0;a.we=b;a.qX=c;a.p8=d;a.wJ=e;if(c!==null){b=UJ(a,c);a.qX=b;c=b.lz;a.nH=c===null?b.mi:c.md;a.ny=c===null?b.mm:c.mc;if(d===null)a.p8=c===null?Fz:H_(c.lX);}},
I3=(a,b,c,d)=>{let e=new K4();ABx(e,a,b,c,d);return e;},
P4=a=>{let b,c;if(a.px){b=new S;b.j5=1;b.j6=1;b.j7=A(518);B(b);}if(a.qX===null){b=UJ(a,HP(a.we));a.qX=b;c=b.lz;a.nH=c===null?b.mi:c.md;a.ny=c===null?b.mm:c.mc;if(a.p8===null)a.p8=c===null?Fz:H_(c.lX);}a.px=1;},
UJ=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Bq===null&&AQP){c=b.lz;d=c===null?b.mi:c.md;e=c===null?b.mm:c.mc;f=Lj(d);g=Lj(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new FH;c=b.lz;JL(h,f,g,c===null?Fz:H_(c.lX));c=h.lz;if(c===null){Fc(b);J9(h,b.oq,0,0,d,e,0,0,d,e);}else{i=b.lz.ma;j=c.ma;JU(i,j,0,0,d,e,0,0,d,e);}if(b.oJ){c=new S;c.j5=1;c.j6=1;c.j7=A(63);B(c);}ED();GM(FN,b.qb);c=b.lz;if(c!==null)H1(c.ma);b.oJ=1;return h;};
function FH(){let a=this;C.call(a);a.mi=0;a.mm=0;a.oq=null;a.l9=null;a.qb=0;a.qN=null;a.xM=0;a.xO=0;a.xQ=0;a.xP=0.0;a.sx=null;a.rp=null;a.xy=null;a.zZ=null;a.p7=null;a.ra=null;a.vQ=0;a.lz=null;a.oJ=0;}
let LA=null;
let Gt=()=>{Gt=BQ(FH);AHY();};
let X1=(a,b)=>{let c,d,e,f,g,h,i,j,k;Gt();a.xM=255;a.xO=255;a.xQ=255;a.sx=MO(255,255,255,a.xP);a.rp=Kx;a.xy=MS;a.vQ=0;c=b.uV;d=b.vu.sD;e=BE(d,c);d=e<0?null:d.kP.data[e];if(Dc.nF.uK){f=AMz(d.nt);a.lz=AJO(f,0,f.data.length,0);Ke(a,(-1),(-1),null,null);}else{Ke(a,(-1),(-1),d.uM,null);if(a.p7===null){d=new S;g=b.uV;b=new K;b.j3=G(16);D(b,b.j2,A(519));e=b.j2;if(g===null)g=A(2);D(b,e,g);D(b,b.j2,A(520));h=new I;i=b.j3;f=i.data;j=b.j2;k=f.length;if(j>=0&&j<=(k-0|0)){h.j4=L(i.data,0,j);d.j5=1;d.j6=1;d.j7=h;B(d);}b=
new H;b.j5=1;b.j6=1;B(b);}}},
HP=a=>{let b=new FH();X1(b,a);return b;},
JL=(a,b,c,d)=>{Gt();a.xM=255;a.xO=255;a.xQ=255;a.sx=MO(255,255,255,a.xP);a.rp=Kx;a.xy=MS;a.vQ=0;Ke(a,b,c,null,null);},
AT7=(a,b,c)=>{let d=new FH();JL(d,a,b,c);return d;},
Ke=(a,b,c,d,e)=>{let f,g;if(e!==null){a.ra=e;a.mi=e.getWidth();a.mm=e.getHeight();}else if(d===null){a.mi=b;a.mm=c;}else{a.p7=d;a.mi=d.width;a.mm=d.height;}if(Da){d=new CY;f=BI(4);d.kt=(-1);d.kB=4;d.ka=4;d.k_=Cp;d.lB=0;d.k6=f;d.ki=0;d.ka=4;d.mg=1;d.lM=0;d.k_=De();}else{f=BI(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new CY;g=0+c|0;d.kt=(-1);d.kB=c;d.ka=c;d.k_=Cp;d.lB=0;d.k6=f;d.ki=0;d.ka=g;d.mg=0;d.lM=0;}else{d=new H;d.j5=1;d.j6=1;Bi(d);B(d);}}a.qN=d;ED();c=Ny;Ny=c+1|0;a.qb=c;AEB(d,0,c);Cc(FN,a.qb,a);},
AGD=a=>{let b,c;E4();b=F8.np.document.createElement("canvas");a.oq=b;c=a.mi;b.width=c;b=a.oq;c=a.mm;b.height=c;b=a.oq.getContext("2d");a.l9=b;Gt();c=Bw(Fk.kk);b.globalCompositeOperation=c;},
MO=(b,c,d,e)=>{let f,g,h,i;Gt();f=new K;f.j3=G(16);D(f,f.j2,A(521));J(f,f.j2,b,10);b=f.j2;Bj(f,b,b+1|0);f.j3.data[b]=44;J(f,f.j2,c,10);c=f.j2;Bj(f,c,c+1|0);f.j3.data[c]=44;J(f,f.j2,d,10);c=f.j2;Bj(f,c,c+1|0);f.j3.data[c]=44;E$(f,f.j2,e);d=f.j2;Bj(f,d,d+1|0);g=f.j3;h=g.data;h[d]=41;i=new I;c=f.j2;d=h.length;if(c>=0&&c<=(d-0|0)){i.j4=L(g.data,0,c);return i;}f=new H;f.j5=1;f.j6=1;B(f);},
Fc=a=>{let b,c;if(a.oq===null){AGD(a);if(a.p7!==null){b=a.l9;c=Bw(LI.mF);b.globalCompositeOperation=c;b=a.l9;c=a.p7;b.drawImage(c,0.0,0.0);b=a.l9;c=Bw(Fk.mF);b.globalCompositeOperation=c;}if(a.ra!==null){c=a.l9;b=Bw(LI.mF);c.globalCompositeOperation=b;b=a.l9;c=a.ra;b.drawImage(c,0.0,0.0);b=a.l9;c=Bw(Fk.mF);b.globalCompositeOperation=c;}}},
J9=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;Fc(a);if(a.rp===Jb){a:{k=a.l9;l=Bw(LA);k.fillStyle=l;k=a.l9;l=Bw(LA);k.strokeStyle=l;k=a.l9;l="destination-out";k.globalCompositeOperation=l;a.l9.beginPath();m=a.l9;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=Lx;Fc(a);LC();switch(N3.data[k.ke]){case 1:break;case 2:a.l9.stroke();break a;default:break a;}a.l9.fill();}a.l9.closePath();r=a.l9;k=Bw(a.sx);r.fillStyle=k;r=a.l9;l=Bw(a.sx);r.strokeStyle=l;r=a.l9;k=Bw(Fk.mF);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.l9;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.zZ=null;},
AHY=()=>{LA=MO(255,255,255,1.0);};
let Hp=F(G9);
let AW$=a=>{let b,c;b=a.ki;if(b<a.ka){a.ki=b+1|0;return a.iy(b);}c=new Nm;c.j5=1;c.j6=1;B(c);},
Ej=(a,b)=>{let c,d;if(a.iB()){c=new FV;c.j5=1;c.j6=1;B(c);}d=a.ki;if(d<a.ka){a.ki=d+1|0;a.iL(d,b);return a;}c=new IR;c.j5=1;c.j6=1;B(c);},
E7=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.ka)return a.iy(b);c=new H;d=a.ka;e=new K;e.j3=G(16);D(e,e.j2,A(517));J(e,e.j2,b,10);D(e,e.j2,A(509));J(e,e.j2,d,10);d=e.j2;Bj(e,d,d+1|0);f=e.j3;g=f.data;g[d]=41;h=new I;d=e.j2;i=g.length;if(d>=0&&d<=(i-0|0)){h.j4=L(f.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
Vq=(a,b,c)=>{let d,e,f,g,h,i;if(a.iB()){d=new FV;d.j5=1;d.j6=1;B(d);}if(b>=0&&b<a.ka){a.iL(b,c);return a;}d=new H;c=a.ka;e=new K;e.j3=G(16);D(e,e.j2,A(517));J(e,e.j2,b,10);D(e,e.j2,A(509));J(e,e.j2,c,10);c=e.j2;Bj(e,c,c+1|0);f=e.j3;g=f.data;g[c]=41;h=new I;c=e.j2;i=g.length;if(c>=0&&c<=(i-0|0)){h.j4=L(f.data,0,c);d.j5=1;d.j6=1;d.j7=h;B(d);}d=new H;d.j5=1;d.j6=1;Bi(d);B(d);},
AV6=a=>{return a.iB();};
function Gf(){let a=this;Hp.call(a);a.qT=0;a.pB=0;a.ph=null;}
let AK6=(a,b)=>{return a.ph.data[b+a.pB|0];},
AIP=(a,b,c)=>{a.ph.data[b+a.pB|0]=c;},
WV=a=>{return a.qT;};
let Hf=F(Ek);
let R0=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.ka)return a.iM(b);c=new H;d=a.ka;e=new K;e.j3=G(16);D(e,e.j2,A(517));J(e,e.j2,b,10);D(e,e.j2,A(509));J(e,e.j2,d,10);d=e.j2;Bj(e,d,d+1|0);f=e.j3;g=f.data;g[d]=41;h=new I;d=e.j2;i=g.length;if(d>=0&&d<=(i-0|0)){h.j4=L(f.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
NL=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.iB()){d=new FV;d.j5=1;d.j6=1;B(d);}if(b>=0&&b<a.ka){a.iC(b,c);return a;}d=new H;e=a.ka;f=new K;f.j3=G(16);D(f,f.j2,A(517));J(f,f.j2,b,10);D(f,f.j2,A(509));J(f,f.j2,e,10);e=f.j2;Bj(f,e,e+1|0);g=f.j3;h=g.data;h[e]=41;i=new I;e=f.j2;j=h.length;if(e>=0&&e<=(j-0|0)){i.j4=L(g.data,0,e);d.j5=1;d.j6=1;d.j7=i;B(d);}d=new H;d.j5=1;d.j6=1;Bi(d);B(d);},
AUW=a=>{return a.iB();};
function H5(){let a=this;Hf.call(a);a.rq=0;a.qS=0;a.qk=null;}
let AMF=(a,b)=>{return a.qk.data[b+a.qS|0];},
ALm=(a,b,c)=>{a.qk.data[b+a.qS|0]=c;},
ALI=a=>{return a.rq;};
let JK=F(BG);
let Jb=null,Kx=null,AJ1=null;
let AE9=()=>{let b,c;b=new JK;b.kk=A(522);b.ke=0;Jb=b;c=new JK;c.kk=A(523);c.ke=1;Kx=c;AJ1=T(JK,[b,c]);};
let Ii=F(BG);
let XE=null,MS=null,AO6=null;
let AOO=()=>{let b,c;b=new Ii;b.kk=A(524);b.ke=0;XE=b;c=new Ii;c.kk=A(525);c.ke=1;MS=c;AO6=T(Ii,[b,c]);};
let Ku=F();
function Va(){let a=this;Ku.call(a);a.vu=null;a.uV=null;a.yP=null;}
let AEn=(a,b,c,d)=>{let e,f,g,h;if(d!==GQ&&d!==QV&&d!==Ti){b=new S;c=new K;c.j3=G(16);D(c,c.j2,A(526));D(c,c.j2,d===null?A(2):d.kk);D(c,c.j2,A(527));d=new I;e=c.j3;f=e.data;g=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){d.j4=L(e.data,0,g);b.j5=1;b.j6=1;b.j7=d;B(b);}b=new H;b.j5=1;b.j6=1;B(b);}a.vu=b;b=M3(c,A(528),A(113));if(Le(b,A(113)))b=Ch(b,0,b.j4.length-1|0);a.uV=b;a.yP=d;},
Ju=(a,b,c)=>{let d=new Va();AEn(d,a,b,c);return d;};
function L2(){let a=this;C.call(a);a.ma=0;a.md=0;a.mc=0;a.lX=0;a.qO=null;a.rR=null;}
let ABA=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=X(4);a.qO=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.rR=AP2(g,h,c,d);b=a.qO.data;a.ma=b[0];a.md=b[1];a.mc=b[2];c=b[3];a.lX=c;if(e&&e!=c)ABc(a,e);},
AJO=(a,b,c,d)=>{let e=new L2();ABA(e,a,b,c,d);return e;},
ATr=(a,b,c,d)=>{let e;e=X(4);a.qO=e;a.rR=ANT(e.data,b,c,d);e=a.qO.data;a.ma=e[0];a.md=e[1];a.mc=e[2];a.lX=e[3];},
ADV=(a,b,c)=>{let d=new L2();ATr(d,a,b,c);return d;},
ABc=(a,b)=>{let c,d,e,f,g;c=ADV(a.md,a.mc,b);MJ(c.ma,0);d=a.md;e=a.mc;f=a.ma;g=c.ma;JU(f,g,0,0,d,e,0,0,d,e);H1(a.ma);a.ma=c.ma;a.lX=c.lX;a.mc=c.mc;a.qO=c.qO;a.rR=c.rR;a.md=c.md;},
AP2=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
ANT=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
H1=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
JU=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
MJ=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let H4=F(G$);
let ANq=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.ka)return a.iR(b);c=new H;d=a.ka;e=new K;e.j3=G(16);D(e,e.j2,A(517));J(e,e.j2,b,10);D(e,e.j2,A(509));J(e,e.j2,d,10);d=e.j2;Bj(e,d,d+1|0);f=e.j3;g=f.data;g[d]=41;h=new I;d=e.j2;i=g.length;if(d>=0&&d<=(i-0|0)){h.j4=L(f.data,0,d);c.j5=1;c.j6=1;c.j7=h;B(c);}c=new H;c.j5=1;c.j6=1;Bi(c);B(c);},
AVX=a=>{return a.iB();};
function JQ(){let a=this;H4.call(a);a.r1=0;a.rD=0;a.rj=null;}
let AEq=(a,b)=>{return a.rj.data[b+a.rD|0];},
AG2=(a,b,c)=>{a.rj.data[b+a.rD|0]=c;},
AB6=a=>{return a.r1;};
let AKW=F();
function EF(){BG.call(this);this.oc=0;}
let HE=null,AJE=null,AMi=null,AIj=null,ALY=null,ARk=null,AEZ=null,AFq=null;
let Z2=()=>{let b,c,d,e,f,g,h;b=new EF;b.kk=A(529);b.ke=0;b.oc=9728;HE=b;c=new EF;c.kk=A(530);c.ke=1;c.oc=9729;AJE=c;d=new EF;d.kk=A(531);d.ke=2;d.oc=9987;AMi=d;e=new EF;e.kk=A(532);e.ke=3;e.oc=9984;AIj=e;f=new EF;f.kk=A(533);f.ke=4;f.oc=9985;ALY=f;g=new EF;g.kk=A(534);g.ke=5;g.oc=9986;ARk=g;h=new EF;h.kk=A(535);h.ke=6;h.oc=9987;AEZ=h;AFq=T(EF,[b,c,d,e,f,g,h]);};
function HZ(){BG.call(this);this.rW=0;}
let AQc=null,HR=null,AJ6=null,AQx=null;
let AF1=()=>{let b,c,d;b=new HZ;b.kk=A(536);b.ke=0;b.rW=33648;AQc=b;c=new HZ;c.kk=A(537);c.ke=1;c.rW=33071;HR=c;d=new HZ;d.kk=A(538);d.ke=2;d.rW=10497;AJ6=d;AQx=T(HZ,[b,c,d]);};
let QP=F();
let ATc=(a,b)=>{b=a.S(b);BD();return b===null?null:b instanceof FM()&&b instanceof EK?(b[Br]===true?b:b.kI):b;},
AAW=a=>{return a.eU();};
function HT(){let a=this;Hp.call(a);a.p4=null;a.uk=0;a.p5=0;}
let AIf=a=>{return a.uk;};
let Pa=F(HT);
let AEh=(a,b)=>{let c;c=a.p4.k6.data;b=a.p5+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
WT=(a,b,c)=>{let d;d=a.p4.k6.data;b=a.p5+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let S0=F(HT);
let APK=(a,b)=>{let c;c=a.p4.k6.data;b=a.p5+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
Ze=(a,b,c)=>{let d;d=a.p4.k6.data;b=a.p5+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function Hh(){let a=this;Hf.call(a);a.o8=null;a.vf=0;a.pV=0;}
let ALX=a=>{return a.vf;},
ANn=a=>{return a.o8.k6.data;};
let OT=F(Hh);
let AIp=(a,b)=>{let c;c=a.o8.k6.data;b=a.pV+(b*4|0)|0;return Lf((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
ANh=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Ge(c);e=a.o8.k6.data;b=a.pV+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let Rq=F(Hh);
let W7=(a,b)=>{let c;c=a.o8.k6.data;b=a.pV+(b*4|0)|0;return Lf(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AIc=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Ge(c);e=a.o8.k6.data;b=a.pV+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function G7(){let a=this;H4.call(a);a.o5=null;a.tS=0;a.qs=0;}
let AFM=a=>{return a.tS;},
AN0=a=>{return a.o5.k6.data;};
let OI=F(G7);
let ABN=(a,b)=>{let c;c=a.o5.k6.data;b=a.qs+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
AAR=(a,b,c)=>{let d;d=a.o5.k6.data;b=a.qs+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let Qy=F(G7);
let AKS=(a,b)=>{let c;c=a.o5.k6.data;b=a.qs+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
ABP=(a,b,c)=>{let d;d=a.o5.k6.data;b=a.qs+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let Lu=F(Bz);
let FV=F(Lu);
let Nm=F(Bz);
let FX=F(BG);
let QV=null,GQ=null,AJo=null,ADS=null,Ti=null,ANH=null;
let ADh=()=>{let b,c,d,e,f;b=new FX;b.kk=A(539);b.ke=0;QV=b;c=new FX;c.kk=A(540);c.ke=1;GQ=c;d=new FX;d.kk=A(541);d.ke=2;AJo=d;e=new FX;e.kk=A(542);e.ke=3;ADS=e;f=new FX;f.kk=A(543);f.ke=4;Ti=f;ANH=T(FX,[b,c,d,e,f]);};
let EP=F(BG);
let RM=null,AOn=null,Rm=null,Ue=null,Sr=null,Ra=null,Fz=null,AMv=null;
let H_=b=>{let c,d,e,f,g,h,i;if(b==1)return RM;if(b==2)return Rm;if(b==5)return Ue;if(b==6)return Sr;if(b==3)return Ra;if(b==4)return Fz;c=new S;d=new K;d.j3=G(16);D(d,d.j2,A(544));J(d,d.j2,b,10);e=new I;f=d.j3;g=f.data;h=d.j2;i=g.length;if(h>=0&&h<=(i-0|0)){e.j4=L(f.data,0,h);c.j5=1;c.j6=1;c.j7=e;B(c);}c=new H;c.j5=1;c.j6=1;B(c);},
WU=()=>{let b,c,d,e,f,g,h;b=new EP;b.kk=A(203);b.ke=0;RM=b;c=new EP;c.kk=A(545);c.ke=1;AOn=c;d=new EP;d.kk=A(546);d.ke=2;Rm=d;e=new EP;e.kk=A(547);e.ke=3;Ue=e;f=new EP;f.kk=A(548);f.ke=4;Sr=f;g=new EP;g.kk=A(549);g.ke=5;Ra=g;h=new EP;h.kk=A(550);h.ke=6;Fz=h;AMv=T(EP,[b,c,d,e,f,g,h]);};
let AC2=F();
let L0=0,Je=null,I9=null;
let AJ$=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:Ge(b);c.vN=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.t4=0;c.tQ=0;return;}if(f)d=e|8388608;else{d=e<<1;while(D5(C5(V(d),V(8388608)),Ca)){d=d<<1;f=f+(-1)|0;}}g=I9;h=AL2(g,0,g.data.length,f);if(h<0)h= -h|0;g=I9.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=Je.data[e];j=C5(V(d),E(4294967295, 0));k=Bl(Be(Ba(j,C5(V(e),E(4294967295, 0))),32-i|0));if(k<L0){while(EV(k,L0)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=I9.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Bl(Be(Ba(j,C5(V(Je.data[e]),E(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=Je.data;f=h+1|0;e=g[f];m=i-1|0;n=Ba(C5(V(l),E(4294967295, 0)),C5(V(e),E(4294967295, 0)));e=32-m|0;o=Bl(Be(n,e));p=Bl(Be(Ba(C5(V(d-1|0),E(4294967295, 0)),C5(V(g[f]),E(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(EV(D7(k,r),D7(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(EV(D7(k,l),D7(o,l))>=0)break;m=l;}s=EV(q,m);d=s>0?Dl(D7(k,q),q):s<0?Dl(D7(k,m),m)+m|0:Dl(D7((k+(m/2|0)|0),m),m);if(E_(V(d),V(1000000000))>=0)while(true){h=h
+1|0;d=D7(d,10);if(EV(d,1000000000)<0)break;}else if(EV(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.t4=d;c.tQ=h-50|0;},
ADz=()=>{L0=D7((-1),10);Je=Iw([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);I9=Iw([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let I_=F(BG);
let Lx=null,PO=null,UZ=null;
let ATl=()=>{let b,c;b=new I_;b.kk=A(551);b.ke=0;Lx=b;c=new I_;c.kk=A(552);c.ke=1;PO=c;UZ=T(I_,[b,c]);};
function Dy(){BG.call(this);this.mF=null;}
let LI=null,AAx=null,ABa=null,Xz=null,AO9=null,ATv=null,AAL=null,AGw=null,AIa=null,Fk=null,ANC=null,ANM=null;
let AEX=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new Dy;b.kk=A(553);b.ke=0;b.mF=A(554);LI=b;c=new Dy;c.kk=A(555);c.ke=1;c.mF=A(556);AAx=c;d=new Dy;d.kk=A(557);d.ke=2;d.mF=A(558);ABa=d;e=new Dy;e.kk=A(559);e.ke=3;e.mF=A(560);Xz=e;f=new Dy;f.kk=A(561);f.ke=4;f.mF=A(562);AO9=f;g=new Dy;g.kk=A(563);g.ke=5;g.mF=A(564);ATv=g;h=new Dy;h.kk=A(565);h.ke=6;h.mF=A(566);AAL=h;i=new Dy;i.kk=A(567);i.ke=7;i.mF=A(568);AGw=i;j=new Dy;j.kk=A(569);j.ke=8;j.mF=A(570);AIa=j;k=new Dy;k.kk=A(571);k.ke=9;k.mF=A(572);Fk=k;l=new Dy;l.kk=A(573);l.ke
=10;l.mF=A(574);ANC=l;ANM=T(Dy,[b,c,d,e,f,g,h,i,j,k,l]);};
let AM1=F(0);
let Iz=F(BG);
let O1=null,UR=null,AC3=null;
let ABj=()=>{let b,c;b=new Iz;b.kk=A(575);b.ke=0;O1=b;c=new Iz;c.kk=A(576);c.ke=1;UR=c;AC3=T(Iz,[b,c]);};
let AL0=F();
let KM=0;
let ANX=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!KM){Qo(b,c,d,e);return;}f=Hl;if(f!==NH&&f!==f&&f!==M1)ANf(b,c,d,e);else{g=B9;f=c.lz;if(f===null)h=6408;else a:{e=f.lX;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new S;g=new K;g.j3=G(16);Ec(g,g.j2,A(64));J(g,g.j2,e,10);f=new I;i=g.j3;j=i.data;d=g.j2;e=j.length;if(d>=0&&d<=(e-0|0)){f.j4=L(i.data,0,d);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}k=f===null?c.mi:f.md;l=f===null
?c.mm:f.mc;if(f===null)m=6408;else b:{m=f.lX;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new S;g=new K;Bt(g);g.j3=G(16);ASL(g,g.j2,A(64));J(g,g.j2,m,10);f=new I;i=g.j3;j=i.data;d=g.j2;e=j.length;if(d>=0&&d<=(e-0|0)){f.j4=L(i.data,0,d);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}if(f===null)n=5121;else c:{n=f.lX;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new S;g=new K;g.j3
=G(16);Ec(g,g.j2,A(64));J(g,g.j2,n,10);f=new I;i=g.j3;j=i.data;d=g.j2;e=j.length;if(d>=0&&d<=(e-0|0)){f.j4=L(i.data,0,d);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}n=5121;}g.cz(b,0,h,k,l,0,m,n,c.qN);Bq.iW(b);}},
ANf=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B3.p3.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B3.p3.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bq.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BC;h.kj=g;i=h;g.classObject=i;}}if(h.kc===null)h.kc=U(h.kj.$meta.name);i=h.kc;if(i===A(577))f=1;else if(!(A(577) instanceof I))f=0;else{g=A(577);f=i.j4!==g.j4?0:1;}if(!f&&EA===null){Qo(b,c,d,e);break a;}}g=B9;i=c.lz;if(i===null)f=6408;else b:{e=i.lX;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new S;g=new K;g.j3=G(16);B$(g,g.j2,Cl(A(64)));J(g,g.j2,e,10);i=new I;j=g.j3;k=j.data;d=g.j2;e=k.length;if(d>=0&&d<=(e-0|0)){i.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}l=i===null?c.mi:i.md;m=i===null?c.mm:i.mc;if(i===null)n=6408;else c:{n=i.lX;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new S;g=new K;g.j3
=G(16);Ec(g,g.j2,A(64));J(g,g.j2,n,10);i=new I;j=g.j3;k=j.data;d=g.j2;e=k.length;if(d>=0&&d<=(e-0|0)){i.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}if(i===null)o=5121;else d:{o=i.lX;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new S;g=new K;g.j3=G(16);B$(g,g.j2,Cl(A(64)));J(g,g.j2,o,10);i=new I;j=g.j3;k=j.data;d=g.j2;e=k.length;if(d>=0&&d<=(e-0|0)){i.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=i;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}o=5121;}g.cz(b,
0,f,l,m,0,n,o,c.qN);Bq.iW(b);}},
Qo=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=B9;g=c.lz;if(g===null)h=6408;else a:{i=g.lX;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new S;f=new K;f.j3=G(16);B$(f,f.j2,Cl(A(64)));J(f,f.j2,i,10);g=new I;j=f.j3;k=j.data;d=f.j2;e=k.length;if(d>=0&&d<=(e-0|0)){g.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}h=6406;}l=g===null?c.mi:g.md;m=g===null?c.mm:g.mc;if(g===null)n=6408;else b:{n=g.lX;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new S;f=new K;f.j3=G(16);Ec(f,f.j2,A(64));J(f,f.j2,n,10);g=new I;j=f.j3;k=j.data;d=f.j2;e=k.length;if(d>=0&&d<=(e-0|0)){g.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}if(g===null)o=5121;else c:{o=g.lX;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new S;f=new K;f.j3=G(16);B$(f,f.j2,Cl(A(64)));J(f,f.j2,o,10);g=new I;j=f.j3;k=j.data;d=f.j2;e
=k.length;if(d>=0&&d<=(e-0|0)){g.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}f.cz(b,0,h,l,m,0,n,o,c.qN);if(Bq===null&&d!=e){c=new S;c.j5=1;c.j6=1;c.j7=A(578);B(c);}f=c.lz;p=(f===null?c.mi:f.md)/2|0;i=(f===null?c.mm:f.mc)/2|0;h=1;while(p>0&&i>0){f=new FH;g=c.lz;JL(f,p,i,g===null?Fz:H_(g.lX));g=Jb;f.rp=g;q=f.lz;if(q===null){Fc(f);g=f.l9;q=Bw(Fk.kk);g.globalCompositeOperation=q;}else{d=g!==g?1:0;MJ(q.ma,d);}g=c.lz;l=g===null?c.mi:g.md;m=g===null?c.mm:g.mc;q=f.lz;if(q===null){Fc(c);J9(f,
c.oq,0,0,l,m,0,0,p,i);}else{r=g.ma;s=q.ma;JU(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.oJ){f=new S;f.j5=1;f.j6=1;f.j7=A(63);B(f);}ED();GM(FN,c.qb);g=c.lz;if(g!==null)H1(g.ma);c.oJ=1;}c=B9;g=f.lz;if(g===null)d=6408;else d:{d=g.lX;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new S;f=new K;f.j3=G(16);B$(f,f.j2,Cl(A(64)));J(f,f.j2,d,10);g=new I;j=f.j3;k=j.data;d=f.j2;e=k.length;if(d>=0&&d<=(e-0|0)){g.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5
=1;c.j6=1;B(c);}d=6406;}e=g===null?f.mi:g.md;p=g===null?f.mm:g.mc;if(g===null)l=6408;else e:{l=g.lX;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new S;f=new K;f.j3=G(16);Ec(f,f.j2,A(64));J(f,f.j2,l,10);g=new I;j=f.j3;k=j.data;d=f.j2;e=k.length;if(d>=0&&d<=(e-0|0)){g.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.lX;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new S;f=new K;f.j3=G(16);B$(f,f.j2,Cl(A(64)));J(f,f.j2,m,10);g=new I;j=f.j3;k=j.data;d=f.j2;e=k.length;if(d>=0&&d<=(e-0|0)){g.j4=L(j.data,0,d);c.j5=1;c.j6=1;c.j7=g;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}m=5121;}c.cz(b,h,d,e,p,0,l,m,f.qN);c=f.lz;p=(c===null?f.mi:c.md)/2|0;i=(c===null?f.mm:c.mc)/2|0;h=h+1|0;c=f;}},
AV2=()=>{KM=1;};
let Tj=F();
let N3=null;
let LC=()=>{LC=BQ(Tj);ATf();};
let ATf=()=>{let b,c;b=X((UZ.p()).data.length);c=b.data;N3=b;c[Lx.ke]=1;c[PO.ke]=2;};
let IR=F(Bz);
function QI(){let a=this;CE.call(a);a.wK=null;a.As=null;a.xt=null;a.wa=null;a.yF=null;a.Av=null;a.y5=null;a.wU=null;a.zi=null;a.zJ=null;a.z8=null;a.q4=null;a.zT=null;a.zB=null;a.v9=null;a.u9=null;}
let AMb=(a,b)=>{let c,d,e,f,g,h,i,j,k;F_(a);c=new N8;c.qI=0;a.q4=c;a.u9=new D_;a.v9=b;c=new Bg;c.ku=1;c.j_=Q(C,16);a.wK=c;d=new HU;e=HA;f=Ju(e.rO,A(579),GQ);c=null;g=I3(f,HP(f),c,0);c=B9;e=c.kb.createTexture();h=c.nn;c.nn=h+1|0;Cc(c.n1,h,Cf(e));c=HE;d.pl=c;d.pU=c;c=HR;d.pa=c;d.pn=c;d.qU=1.0;d.nk=3553;d.qm=h;JS(d,g);c=Dc;e=ER;if(c===null)e=I6(e);else{i=G_(c);e=IL(e,c,i&(e.mw.data.length-1|0),i);}e=e===null?null:e.m2;if(e===null){e=new Bg;Bt(e);e.ku=1;e.j_=Q(C,16);}Bf(e,d);GG(ER,c,e);a.As=d;c=new H8;c.o3=d;e=
d.n7;Nf(c,0,0,e.nH,e.ny);a.xt=c;if(!(a.lr===21.0&&a.lD===21.0)){a.lr=21.0;a.lD=21.0;}Nt(a,a.kx,a.kJ,a.lr,a.lD);c=new Bb;j=a.lr/2.0;k=a.lD/2.0;c.j$=j;c.j9=k;a.wa=c;if(!(a.n8===1.0&&a.n9===1.0)){a.n8=1.0;a.n9=1.0;}e=b.tb;a.yF=e.oB;a.Av=e.q9;a.y5=e.qu;a.wU=e.p_;a.zi=e.qK;a.zJ=e.o2;a.z8=e.qY;a.q4.qI=1;c=new Dp;c.pD=12;a.zB=c;a.zT=AKP(b);},
AIE=a=>{let b=new QI();AMb(b,a);return b;},
AMU=(a,b,c)=>{let d,e,f,g,h;d=a.rY;c=d.k1;e=d.k0;f=d.kZ;g=d.k3;d=b.pt;d.k1=c;d.k0=e;d.kZ=f;d.k3=g;CX(d);b.rQ=Ff(b.pt);d=a.xt;e=a.kx;h=a.wa;K$(b,d,e-h.j$,a.kJ-h.j9,a.pJ,a.pK,a.lr,a.lD,a.n8,a.n9,a.m_);},
AOv=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a:{c=a.q4;if(c.qI){c.qI=0;d=AM4(a,b);c=a.q4;Cw();e=Bv;f=BE(e,M(Dd));g=f<0?null:e.kP.data[f];if(g===null){g=new CB;e=new Bg;e.ku=0;e.j_=Q(C,4);g.kn=e;g.kV=100;b:{try{e=CL(M(Dd),null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{e=CJ(M(Dd),null);CN(e,1);break b;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}e=null;}g.kG=e;if(e===null){c=new Bz;d=new K;Bt(d);d.j3=G(16);BY(d,d.j2,A(21));if(M(Dd).kc===null)M(Dd).kc
=U(M(Dd).kj.$meta.name);h=M(Dd).kc;BY(d,d.j2,h);h=new I;i=d.j3;j=i.data;f=d.j2;Bt(h);FW(0,f,j.length);h.j4=L(i.data,0,f);c.j5=1;c.j6=1;Bi(c);c.j7=h;B(c);}Ce(Bv,M(Dd),g);}h=g.kn;k=h.j8;if(k){if(!k){c=new BN;c.j5=1;c.j6=1;Bi(c);c.j7=A(22);B(c);}k=k-1|0;h.j8=k;i=h.j_.data;h=i[k];i[k]=null;}else c:{try{h=CZ(g.kG,null);break c;}catch($$e){$$je=Z($$e);if($$je instanceof BF){h=$$je;}else{throw $$e;}}d=new S;c=new K;c.j3=G(16);D(c,c.j2,A(23));l=g.kG.lI.lH;if(l.kc===null)l.kc=U(l.kj.$meta.name);e=l.kc;D(c,c.j2,e);e=
new I;i=c.j3;j=i.data;f=c.j2;m=j.length;if(f>=0&&f<=(m-0|0)){e.j4=L(i.data,0,f);d.j5=1;d.j6=1;Bi(d);d.j7=e;d.lq=h;B(d);}B(Fo());}h=h;h.l5=g;e=h;Bf(e.lv,d);h=e.k4;if(h!==null){d.k4=h;if(d.kX===null)d.kX=h;}Bf(e.lv,c);h=e.k4;if(h!==null){c.k4=h;if(c.kX===null)c.kX=h;}c=e.lv;k=0;f=c.j8;while(true){if(k>=f){e.k4=a;if(e.kX===null)e.kX=a;Bf(a.qn,e);c=a.lC;c!==null&&!c.uL;break a;}if(k>=c.j8)break;c.j_.data[k].bx(a);k=k+1|0;}d=new H;h=new K;h.j3=G(16);D(h,h.j2,A(18));J(h,h.j2,k,10);D(h,h.j2,A(19));k=c.j8;J(h,h.j2,
k,10);c=new I;i=h.j3;j=i.data;f=h.j2;m=j.length;if(f>=0&&f<=(m-0|0)){c.j4=L(i.data,0,f);d.j5=1;d.j6=1;d.j7=c;B(d);}c=new H;Im(c);B(c);}}c=a.u9;n=a.kx;o=a.kJ;p=a.lr;q=a.lD;c.nO=n;c.nN=o;c.nV=p;c.nz=q;MQ(a,1);h=a.v9.oO;a.wK=h;if(CA){c=new Cr;c.kU=1;c.kY=h;c.l1=1;}else{if(h.kE===null){c=new C0;c.mb=h;c.me=1;h.kE=c;}c=CK(h.kE);}while(true){if(!c.kU){h=new S;h.j5=1;h.j6=1;h.j7=A(17);B(h);}if(!(c.lN>=c.kY.j8?0:1)){G5(a,b);q=a.kJ;c=a.wU;f=c.j8;k=f-1|0;if(k>=f){d=new H;h=new K;h.j3=G(16);D(h,h.j2,A(18));J(h,h.j2,k,
10);D(h,h.j2,A(19));k=c.j8;J(h,h.j2,k,10);c=new I;i=h.j3;j=i.data;f=h.j2;m=j.length;if(f>=0&&f<=(m-0|0)){c.j4=L(i.data,0,f);d.j5=1;d.j6=1;d.j7=c;B(d);}c=new H;R(c);B(c);}if(q<=c.j_.data[k].j9){c=a.k2;if(c!==null){k=D4(c.ks,a,1);if(k!=(-1)){h=c.ks;CF(h);h=Dm(h,k);d=c.lC;if(d!==null){AC_(d,h);c=d.qa;if(c!==null&&c.iZ(h))AIM(d,null);c=d.nE;if(c!==null&&c.iZ(h))ALl(d,null);Ew(d,h);}h.k2=null;h.x(null);}}}return;}h=Cm(c);if(AE_(a.u9,h.rJ)){a.q4.qI=1;k=a.qn.j8-1|0;while(k>=0){h=a.qn;if(k>=h.j8){d=new H;c=new K;c.j3
=G(16);D(c,c.j2,A(18));J(c,c.j2,k,10);D(c,c.j2,A(19));k=h.j8;J(c,c.j2,k,10);h=new I;i=c.j3;j=i.data;f=c.j2;m=j.length;if(f>=0&&f<=(m-0|0)){h.j4=L(i.data,0,f);d.j5=1;d.j6=1;d.j7=h;B(d);}c=new H;GC(c);B(c);}h.j_.data[k].bx(null);k=k+(-1)|0;}h=a.qn;i=h.j_;k=0;f=h.j8;d=null;if(k>f)break;while(k<f){j=i.data;m=k+1|0;j[k]=d;k=m;}h.j8=0;}}c=new Bk;c.j5=1;c.j6=1;B(c);};
let UE=F();
let Rg=null;
let NI=()=>{NI=BQ(UE);Yb();};
let AIo=(b,c,d,e)=>{NI();a:{b:{if(Rg===MP){if(B3.lm.width!=B3.lm.width)break b;if(B3.lm.height!=B3.lm.height)break b;}B9.dD(b,c,d,e);break a;}B9.dD(Dl(b,B3.lm.width)/B3.lm.width|0,Dl(c,B3.lm.height)/B3.lm.height|0,Dl(d,B3.lm.width)/B3.lm.width|0,Dl(e,B3.lm.height)/B3.lm.height|0);}},
Yb=()=>{Rg=MP;};
let AC6=F();
function M2(){let a=this;C.call(a);a.qw=null;a.n$=null;}
let AQq=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qw.readyState==4){if(a.qw.status==200){if(a.n$.nK.mP){if(BW===null){b=new CO;c=new Ck;c.lL=BI(32);b.l6=c;c=new K;Bt(c);c.j3=G(16);b.lQ=c;b.lP=G(32);b.lR=0;b.lS=Cg;BW=b;}b=a.n$.nG;c=new K;c.j3=G(16);D(c,c.j2,A(580));d=c.j2;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.j3;f=e.data;g
=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){b.j4=L(e.data,0,g);BX(Bw(b));BX("\n");}else{b=new H;b.j5=1;b.j6=1;Bi(b);B(b);}}b=a.n$;b.nY.i3(b.nG,U(a.qw.responseText));}else if(a.qw.status!=404&&a.qw.status!=403){try{i=V(100);$p=1;continue _;}catch($$e){$$je=Z($$e);if($$je instanceof Dr){}else{throw $$e;}}b=a.n$;c=b.nK;d=b.pc;j=b.nG;b=b.nY;if(c.mP){if(BW===null){k=new CO;l=new Ck;l.lL=BI(32);Bt(k);k.l6=l;l=new K;DM(l,16);k.lQ=l;k.lP=G(32);k.lR=0;k.lS=Cg;BW=k;}k=new K;k.j3=G(16);D(k,k.j2,A(102));D(k,k.j2,j===null?A(2)
:j);l=new I;e=k.j3;f=e.data;h=k.j2;m=f.length;if(h>=0&&h<=(m-0|0)){l.j4=L(e.data,0,h);BX(Bw(l));BX("\n");}else{b=new H;R(b);B(b);}}c.lh=c.lh+1|0;k=new GZ;k.nK=c;k.pc=d;k.nG=j;k.nY=b;b=null;c=null;k.m0=new C;k.mZ=1;k.nC=c;k.nX=b;g=CR;CR=g+1|0;k.nW=V(g);b=new El;b.nD=k;EG(b);}else{b=a.n$;b.nY.i4(b.nG);}b=a.n$.nK;b.lh=b.lh-1|0;}return;case 1:a:{try{K8(i);if(Fv()){break _;}break a;}catch($$e){$$je=Z($$e);if($$je instanceof Dr){}else{throw $$e;}}}b=a.n$;c=b.nK;d=b.pc;j=b.nG;b=b.nY;if(c.mP){if(BW===null){k=new CO;l
=new Ck;l.lL=BI(32);Bt(k);k.l6=l;l=new K;DM(l,16);k.lQ=l;k.lP=G(32);k.lR=0;k.lS=Cg;BW=k;}k=new K;k.j3=G(16);D(k,k.j2,A(102));D(k,k.j2,j===null?A(2):j);l=new I;e=k.j3;f=e.data;h=k.j2;m=f.length;if(h>=0&&h<=(m-0|0)){l.j4=L(e.data,0,h);BX(Bw(l));BX("\n");}else{b=new H;R(b);B(b);}}c.lh=c.lh+1|0;k=new GZ;k.nK=c;k.pc=d;k.nG=j;k.nY=b;b=null;c=null;k.m0=new C;k.mZ=1;k.nC=c;k.nX=b;g=CR;CR=g+1|0;k.nW=V(g);b=new El;b.nD=k;EG(b);b=a.n$.nK;b.lh=b.lh-1|0;return;default:Fm();}}Db().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AF2=(a,b)=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQq(a,b);if(Fv()){break _;}return;default:Fm();}}Db().s(a,b,$p);};
function N8(){BP.call(this);this.qI=0;}
let AJK=(a,b)=>{a.qI=1;return 1;};
let O_=F();
let Uj=null,AFt=null,WG=null,Rd=null,Zx=null,AQ5=null,AJT=null,Vy=null,QH=null,LT=null;
let AH9=(a,b)=>{let c;c=b.tb;Uj=c.oB;AFt=c.q9;WG=c.qu;Rd=c.p_;Zx=c.qK;AQ5=c.o2;AJT=c.qY;},
AKP=a=>{let b=new O_();AH9(b,a);return b;},
AM4=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;b=Uj;if(0>=b.j8){d=new H;e=new K;e.j3=G(16);D(e,e.j2,A(18));J(e,e.j2,0,10);D(e,e.j2,A(19));f=b.j8;J(e,e.j2,f,10);b=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){b.j4=L(g.data,0,i);d.j5=1;d.j6=1;d.j7=b;B(d);}b=new H;R(b);B(b);}b=b.j_.data[0];Vy=b;e=Rd;i=e.j8;f=i-1|0;if(f>=i){d=new H;b=new K;b.j3=G(16);D(b,b.j2,A(18));J(b,b.j2,f,10);D(b,b.j2,A(19));f=e.j8;J(b,b.j2,f,10);e=new I;g=b.j3;h=g.data;i=b.j2;j=h.length;if(i>=0&&i<=(j-0|0)){e.j4=L(g.data,0,i);d.j5
=1;d.j6=1;d.j7=e;B(d);}b=new H;R(b);B(b);}e=e.j_.data[f];QH=e;k=e.j$;l=e.j9;c=(D3(b.j$-k)+D3(Vy.j9-QH.j9))*c*1.0;b=null;Cw();d=Bv;i=BE(d,M(Dp));m=i<0?null:d.kP.data[i];if(m===null){m=new CB;d=new Bg;Bt(d);d.ku=0;d.j_=Q(C,4);m.kn=d;m.kV=100;a:{try{d=CL(M(Dp),null);break a;}catch($$e){$$je=Z($$e);if($$je instanceof BF){}else{throw $$e;}}try{d=CJ(M(Dp),null);CN(d,1);break a;}catch($$e){$$je=Z($$e);if($$je instanceof B7){}else{throw $$e;}}d=null;}m.kG=d;if(d===null){b=new Bz;d=new K;DM(d,16);B$(d,d.j2,A(21));if
(M(Dp).kc===null)M(Dp).kc=U(M(Dp).kj.$meta.name);e=M(Dp).kc;B$(d,d.j2,e);ND(b,AAZ(d.j3,0,d.j2));B(b);}Ce(Bv,M(Dp),m);}b:{e=m.kn;f=e.j8;if(f){if(!f){b=new BN;ND(b,A(22));B(b);}f=f-1|0;e.j8=f;g=e.j_.data;e=g[f];g[f]=null;}else try{e=CZ(m.kG,null);break b;}catch($$e){$$je=Z($$e);if($$je instanceof BF){e=$$je;d=new S;b=new K;Bt(b);b.j3=G(16);BY(b,b.j2,A(23));n=m.kG.lI.lH;if(n.kc===null)n.kc=U(n.kj.$meta.name);m=n.kc;BY(b,b.j2,m);m=new I;g=b.j3;h=g.data;i=b.j2;Bt(m);FW(0,i,h.length);m.j4=L(g.data,0,i);Si(d,m,e);B(d);}
else{throw $$e;}}}e=e;e.l5=m;e=e;e.ux=k;e.uw=l;e.xn=c;e.ve=b;LT=e;return e;},
AU9=()=>{let b;b=new Dp;b.pD=12;LT=b;};
let Jy=F(BG);
let MP=null,AJr=null,ACW=null;
let ZO=()=>{let b,c;b=new Jy;b.kk=A(581);b.ke=0;MP=b;c=new Jy;c.kk=A(582);c.ke=1;AJr=c;ACW=T(Jy,[b,c]);};
let N4=F(0);
function Uo(){let a=this;C.call(a);a.ld=null;a.oz=0;a.td=null;a.rk=null;a.sQ=null;a.yb=null;a.uX=null;a.mQ=null;a.sL=0;a.ze=0.0;}
let AMx=(a,b,c)=>{let d,e,f,g,h,i,j;a.oz=0;a.td=C8();a.rk=C8();a.sQ=C8();a.yb=new Bb;d=new BM;d.k1=1.0;d.k0=1.0;d.kZ=1.0;d.k3=1.0;CX(d);a.uX=d;a.ze=0.75;if(c!==null)a.ld=AHj(b,0,1,0,c);else{c=new LG;e=QU(WL(0,1,0),AJk(0,1,0));if(!e.nU){c=new S;d=new K;d.j3=G(16);D(d,d.j2,A(479));if(!e.nU)f=e.nr;else{f=Bq.g9(e.mO);e.nr=f;}D(d,d.j2,f);f=new I;g=d.j3;h=g.data;i=d.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);c.j5=1;c.j6=1;c.j7=f;B(c);}c=new H;c.j5=1;c.j6=1;B(c);}Sy(c,b,0,1,0,e);c.z_=1;a.ld=c;}Mu(a.td,0.0,
0.0+B3.lm.width,0.0,0.0+B3.lm.height,0.0,1.0);a.oz=1;},
AIL=(a,b)=>{let c=new Uo();AMx(c,a,b);return c;},
FT=(a,b)=>{let c,d;if(a.mQ!==null){b=new BN;b.j5=1;b.j6=1;b.j7=A(583);B(b);}a.mQ=b;if(a.oz){C$(a.sQ,a.td.ln);Oy(a.sQ.ln,a.rk.ln);a.oz=0;}b=a.ld;c=a.sQ;d=a.mQ.sF;C$(b.ul,c.ln);b.w0=d;},
AJh=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;AGh(a,HS,Rt,8);Gx();o=F6.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.mQ!==HS){bf=a.ld;bf.mv.data[bf.ml+bf.mL|0]=Dq(k.k1,k.k0,k.kZ,k.k3);Ds(a.ld,x,y,0.0);bf=a.ld;bf.mv.data[bf.ml+bf.mL|0]
=Dq(l.k1,l.k0,l.kZ,l.k3);Ds(a.ld,z,ba,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(m.k1,m.k0,m.kZ,m.k3);Ds(a.ld,bb,bc,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(m.k1,m.k0,m.kZ,m.k3);Ds(a.ld,bb,bc,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(n.k1,n.k0,n.kZ,n.k3);Ds(a.ld,bd,be,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(k.k1,k.k0,k.kZ,k.k3);Ds(a.ld,x,y,0.0);}else{bf=a.ld;bf.mv.data[bf.ml+bf.mL|0]=Dq(k.k1,k.k0,k.kZ,k.k3);Ds(a.ld,x,y,0.0);bf=a.ld;bf.mv.data[bf.ml+bf.mL|0]=Dq(l.k1,l.k0,l.kZ,l.k3);Ds(a.ld,z,ba,0.0);bf=a.ld;bf.mv.data[bf.ml
+bf.mL|0]=Dq(l.k1,l.k0,l.kZ,l.k3);Ds(a.ld,z,ba,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(m.k1,m.k0,m.kZ,m.k3);Ds(a.ld,bb,bc,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(m.k1,m.k0,m.kZ,m.k3);Ds(a.ld,bb,bc,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(n.k1,n.k0,n.kZ,n.k3);Ds(a.ld,bd,be,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(n.k1,n.k0,n.kZ,n.k3);Ds(a.ld,bd,be,0.0);l=a.ld;l.mv.data[l.ml+l.mL|0]=Dq(k.k1,k.k0,k.kZ,k.k3);Ds(a.ld,x,y,0.0);}},
AGh=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mQ;if(e===null){b=new BN;b.j5=1;b.j6=1;b.j7=A(31);B(b);}if(!(e!==b&&e!==c)){if(a.oz){FQ(a.ld);a.mQ=null;FT(a,e);}else{b=a.ld;if((b.vO-b.q$|0)<d){FQ(b);a.mQ=null;FT(a,e);}}}else{if(!a.sL){if(c===null){c=new BN;e=new K;e.j3=G(16);D(e,e.j2,A(584));D(e,e.j2,b===null?A(2):b.kk);D(e,e.j2,A(585));b=new I;f=e.j3;g=f.data;h=e.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);c.j5=1;c.j6=1;c.j7=b;B(c);}b=new H;b.j5=1;b.j6=1;B(b);}j=new BN;e=new K;e.j3=G(16);D(e,e.j2,A(584));D(e,
e.j2,b===null?A(2):b.kk);D(e,e.j2,A(586));D(e,e.j2,c.kk);D(e,e.j2,A(585));b=new I;f=e.j3;g=f.data;h=e.j2;i=g.length;if(h>=0&&h<=(i-0|0)){b.j4=L(f.data,0,h);j.j5=1;j.j6=1;j.j7=b;B(j);}b=new H;b.j5=1;b.j6=1;B(b);}FQ(a.ld);a.mQ=null;FT(a,b);}};
let MB=F(Ey);
let J_=F(Ey);
let ON=F(Ey);
let P6=F(0);
function LG(){let a=this;C.call(a);a.w0=0;a.ml=0;a.xq=0;a.vO=0;a.q$=0;a.nS=null;a.ru=null;a.z_=0;a.xG=0;a.wl=0;a.zL=0;a.mL=0;a.yi=0;a.ul=null;a.mv=null;a.ud=null;}
let Sy=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.ul=C8();a.vO=b;a.xG=e;a.ru=f;g=ZG(a,c,d,e);h=new Jf;h.sc=1;h.rP=0;f=new Bn;CT();h.xd=f;f=Rf(g);h.mq=EA===null?Sx(0,b,f):R9(0,b,f);f=new Hx;f.ou=1;f.qg=0;f.tX=1;if(!Da){g=Ft(0);d=g.data.length;i=new JQ;j=0+d|0;UX(i,d);i.ki=0;i.ka=j;i.rD=0;i.r1=0;i.rj=g;}else{k=new CY;g=BI(0);Bt(k);k.kt=(-1);k.kB=0;k.ka=0;k.k_=Cp;k.lB=0;k.k6=g;k.ki=0;k.ka=0;k.mg=1;k.lM=0;k.k_=De();i=J5(k);}f.nZ=i;i.ka=i.ki;i.ki=0;i.kt=(-1);i=Bq;k=i.kb.createBuffer();d=i.mt;i.mt=d+1|0;Cc(i.m9,d,Cf(k));f.r_
=d;f.rv=35048;h.mn=f;h.qL=0;f=Dc;i=HX;if(f===null){i=i.mw.data[0];while(i!==null&&i.m1!==null){i=i.nd;}}else{k=f;if(!k.$id$){l=E1();k.$id$=l;}m=f.$id$;g=i.mw.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.pu==m){k=i.m1;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.nd;}}i=i===null?null:i.m2;if(i===null){i=new Bg;i.ku=1;i.j_=Q(C,16);}Bf(i,h);GG(HX,f,i);a.nS=h;a.mv=B_(Dl(b,(h.mq.jc()).mW/4|0));a.wl=(a.nS.mq.jc()).mW/4|0;g=(a.nS.mq.jc()).l8.data;b=g.length;d=0;a:{while(d<b){if(g[d].mJ==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.nS.mq.jc()).l8.data;m=g.length;c=0;b:{while(c<m){if(g[c].mJ==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.n5/4|0;}a.zL=b;g=(a.nS.mq.jc()).l8.data;m=g.length;c=0;c:{while(c<m){if(g[c].mJ==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.nS.mq.jc()).l8.data;m=g.length;c=0;d:{while(c<m){if(g[c].mJ==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.n5/4|0;}a.mL=b;g=(a.nS.mq.jc()).l8.data;m=g.length;c=0;e:{while(c<m){if(g[c].mJ==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.nS.mq.jc()).l8.data;m
=g.length;c=0;f:{while(c<m){if(g[c].mJ==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.n5/4|0;}a.yi=b;a.ud=Q(I,e);m=0;g:{while(m<e){g=a.ud;f=new K;f.j3=G(16);D(f,f.j2,A(587));J(f,f.j2,m,10);i=new I;n=f.j3;o=n.data;c=f.j2;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.j4=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new H;f.j5=1;f.j6=1;B(f);},
AHj=(a,b,c,d,e)=>{let f=new LG();Sy(f,a,b,c,d,e);return f;},
ZG=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bg;e.ku=1;e.j_=Q(C,16);f=new DV;f.mJ=1;f.mx=3;f.mI=5126;f.mR=0;f.mN=A(474);f.ol=0;f.pz=Ea(1);Bf(e,f);if(b){g=new DV;g.mJ=8;g.mx=3;g.mI=5126;g.mR=0;g.mN=A(588);g.ol=0;g.pz=Ea(8);Bf(e,g);}if(c){g=new DV;g.mJ=4;g.mx=4;g.mI=5121;g.mR=1;g.mN=A(475);g.ol=0;g.pz=Ea(4);Bf(e,g);}h=0;while(true){if(h>=d){b=e.j8;i=Q(DV,b);j=i.data;h=0;while(true){c=BU(h,b);if(c>=0)break;if(c>=0){f=new H;g=new K;g.j3=G(16);D(g,g.j2,A(18));J(g,g.j2,h,10);D(g,g.j2,A(19));b=e.j8;J(g,g.j2,b,10);e=new I;i
=g.j3;j=i.data;c=g.j2;d=j.length;if(c>=0&&c<=(d-0|0)){e.j4=L(i.data,0,c);f.j5=1;f.j6=1;f.j7=e;B(f);}e=new H;e.j5=1;e.j6=1;B(e);}j[h]=e.j_.data[h];h=h+1|0;}return i;}g=new DV;k=new K;k.j3=G(16);D(k,k.j2,A(589));J(k,k.j2,h,10);f=new I;i=k.j3;j=i.data;c=k.j2;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.j4=L(i.data,0,c);g.mJ=16;g.mx=2;g.mI=5126;g.mR=0;g.mN=f;g.ol=0;g.pz=Ea(16);Bf(e,g);h=h+1|0;}e=new H;e.j5=1;e.j6=1;B(e);},
Ds=(a,b,c,d)=>{let e,f;e=a.ml;f=a.mv.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.xq=0;a.ml=e+a.wl|0;a.q$=a.q$+1|0;},
FQ=a=>{let b,c,d,e,f,g,h;if(!a.q$)return;b=a.ru;c=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}c.hb(b.mO);c=a.ru;d=a.ul;Id();e=Jc(c,A(590),HM);b=Bq;if(c.k7){CI(c,c.l2,c.l4);c.k7=0;}QN(b,e,1,0,d.ln,0);f=0;while(f<a.xG){b=a.ru;c=a.ud.data[f];d=Bq;if(b.k7){CI(b,b.l2,b.l4);b.k7=0;}d.hl(Jc(b,c,HM),f);f=f+1|0;}b=a.nS;g=a.mv;h=a.ml;b.mq.hc(g,0,h);b=a.nS;SR(b,a.ru,a.w0,0,b.mn.hY()<=0?b.mq.jd():b.mn.hU(),b.sc);a.xq=0;a.ml=0;a.q$=0;},
WL=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.j3=G(16);D(e,e.j2,A(591));f=!b?A(68):A(592);D(e,e.j2,f);f=!c?A(68):A(593);D(e,e.j2,f);f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.j3=G(16);D(e,e.j2,f);D(e,e.j2,A(594));f=!c?A(68):A(595);D(e,e.j2,f);f=new I;g=e.j3;h=g.data;b=e.j2;j=h.length;if(b>=0&&b<=(j-0|0)){f.j4=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.j3=G(16);D(e,e.j2,f);D(e,e.j2,A(596));f=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i
>=0&&i<=(j-0|0)){f.j4=L(g.data,0,i);if(c){e=new K;e.j3=G(16);D(e,e.j2,f);D(e,e.j2,A(597));f=new I;g=e.j3;h=g.data;c=e.j2;i=h.length;if(c>=0&&c<=(i-0|0))f.j4=L(g.data,0,c);else{e=new H;e.j5=1;e.j6=1;B(e);}}i=0;while(true){if(i>=d){e=new K;e.j3=G(16);D(e,e.j2,f);D(e,e.j2,A(598));f=new I;g=e.j3;h=g.data;c=e.j2;d=h.length;if(c>=0&&c<=(d-0|0)){f.j4=L(g.data,0,c);return f;}e=new H;e.j5=1;e.j6=1;B(e);}e=new K;e.j3=G(16);D(e,e.j2,f);D(e,e.j2,A(599));J(e,e.j2,i,10);D(e,e.j2,A(600));D(e,e.j2,A(589));J(e,e.j2,i,10);D(e,
e.j2,A(601));f=new I;g=e.j3;h=g.data;c=e.j2;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.j4=L(g.data,0,c);i=i+1|0;}e=new H;e.j5=1;e.j6=1;B(e);}e=new H;e.j5=1;e.j6=1;B(e);}e=new K;e.j3=G(16);D(e,e.j2,f);D(e,e.j2,A(602));J(e,e.j2,i,10);D(e,e.j2,A(601));f=new I;g=e.j3;h=g.data;j=e.j2;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.j4=L(g.data,0,j);i=i+1|0;}e=new H;e.j5=1;e.j6=1;B(e);}e=new H;e.j5=1;e.j6=1;B(e);}e=new K;e.j3=G(16);D(e,e.j2,f);D(e,e.j2,A(603));J(e,e.j2,i,10);D(e,e.j2,A(601));f=new I;g=e.j3;h=g.data;j
=e.j2;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.j4=L(g.data,0,j);i=i+1|0;}e=new H;e.j5=1;e.j6=1;B(e);}e=new H;e.j5=1;e.j6=1;B(e);},
AJk=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(604);if(c){f=new K;f.j3=G(16);D(f,f.j2,e);D(f,f.j2,A(595));e=new I;g=f.j3;h=g.data;i=f.j2;j=h.length;if(i>=0&&i<=(j-0|0))e.j4=L(g.data,0,i);else{e=new H;e.j5=1;e.j6=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.j3=G(16);D(f,f.j2,e);D(f,f.j2,A(605));e=!c?A(606):A(607);D(f,f.j2,e);e=new I;h=f.j3;g=h.data;b=f.j2;c=g.length;if(b>=0&&b<=(c-0|0)){e.j4=L(h.data,0,b);if(d>0){f=new K;f.j3=G(16);D(f,f.j2,e);D(f,f.j2,A(608));e=new I;g=f.j3;h=g.data;c=f.j2;i=h.length;if(c>=0&&c<=(i-
0|0))e.j4=L(g.data,0,c);else{e=new H;e.j5=1;e.j6=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.j3=G(16);D(f,f.j2,e);D(f,f.j2,A(609));e=new I;g=f.j3;h=g.data;c=f.j2;d=h.length;if(c>=0&&c<=(d-0|0)){e.j4=L(g.data,0,c);return e;}e=new H;e.j5=1;e.j6=1;B(e);}if(i!=c){f=new K;f.j3=G(16);D(f,f.j2,e);D(f,f.j2,A(610));J(f,f.j2,i,10);D(f,f.j2,A(611));J(f,f.j2,i,10);D(f,f.j2,A(612));e=new I;g=f.j3;h=g.data;j=f.j2;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.j4=L(g.data,0,j);}else{f=new K;f.j3=G(16);D(f,f.j2,e);D(f,
f.j2,A(610));J(f,f.j2,i,10);D(f,f.j2,A(611));J(f,f.j2,i,10);D(f,f.j2,A(55));e=new I;g=f.j3;h=g.data;j=f.j2;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.j4=L(g.data,0,j);}i=i+1|0;}e=new H;e.j5=1;e.j6=1;B(e);}e=new H;e.j5=1;e.j6=1;B(e);}e=new H;e.j5=1;e.j6=1;B(e);}f=new K;f.j3=G(16);D(f,f.j2,e);D(f,f.j2,A(602));J(f,f.j2,i,10);D(f,f.j2,A(601));e=new I;g=f.j3;h=g.data;j=f.j2;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.j4=L(g.data,0,j);f=new K;f.j3=G(16);D(f,f.j2,e);D(f,f.j2,A(613));J(f,f.j2,i,10);D(f,f.j2,
A(601));e=new I;g=f.j3;h=g.data;j=f.j2;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.j4=L(g.data,0,j);i=i+1|0;}e=new H;e.j5=1;e.j6=1;B(e);}e=new H;e.j5=1;e.j6=1;B(e);};
function G8(){BG.call(this);this.sF=0;}
let AHz=null,HS=null,Rt=null,AQ9=null;
let AMk=()=>{let b,c,d;b=new G8;b.kk=A(614);b.ke=0;b.sF=0;AHz=b;c=new G8;c.kk=A(615);c.ke=1;c.sF=1;HS=c;d=new G8;d.kk=A(616);d.ke=2;d.sF=4;Rt=d;AQ9=T(G8,[b,c,d]);};
let AEp=F();
function SG(){let a=this;C.call(a);a.qD=0;a.qd=0;a.ns=0;a.ss=Ca;a.t9=null;a.v3=null;a.xI=Ca;a.vU=null;}
function I7(){let a=this;C.call(a);a.sC=null;a.yH=0.0;a.y$=0;a.t3=null;a.oE=null;a.yq=null;a.w5=null;a.z3=null;}
let AO5=null,ATj=null;
let NF=()=>{NF=BQ(I7);AOg();};
let AS2=(a,b,c,d)=>{let e;NF();a.yH=1.0;a.y$=0;if(!BB(b,Ve)){e=AFz(b,c);a.sC=e;b=new RU;b.pA=a;b.k$=e;a.w5=b;}else{e=new Tq;Qm(e,b,c);e.oF=0;e.rb=Ft(K6((e.kW.data.length/5|0)*3|0)|0);b=new So;b.pA=a;b.k$=e;a.w5=b;a.sC=e;}b=new RS;c=a.sC;b.pA=a;b.k$=c;a.t3=b;b=new TR;b.pA=a;b.k$=c;e=new GE;e.rU=1;e.m7=B_(16);b.pq=e;e=new GE;e.rU=1;e.m7=B_(16);b.te=e;a.oE=b;b=new RL;b.pA=a;b.k$=c;a.yq=b;a.z3=d;},
AOg=()=>{AO5=C8();ATj=B_(6);};
function Rj(){I7.call(this);this.Ap=null;}
let Ia=F(BG);
let Ui=null,QX=null,EW=null,AD1=null;
let AMS=()=>{let b,c,d;b=new Ia;b.kk=A(163);b.ke=0;Ui=b;c=new Ia;c.kk=A(617);c.ke=1;QX=c;d=new Ia;d.kk=A(618);d.ke=2;EW=d;AD1=T(Ia,[b,c,d]);};
function Sa(){let a=this;C.call(a);a.mS=null;a.l3=0;}
let AEb=null;
let Ga=(a,b)=>{let c,d,e,f;c=a.mS;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);Di(c,0,f,0,a.l3);a.mS=f;},
JG=a=>{let b,c,d;b=a.l3+4|0;if(b>a.mS.data.length)Ga(a,b);c=a.mS.data;d=a.l3;b=d+1|0;a.l3=b;c[d]=110;d=b+1|0;a.l3=d;c[b]=117;b=d+1|0;a.l3=b;c[d]=108;a.l3=b+1|0;c[b]=108;},
AKu=()=>{AEb=AF9([48,49,50,51,52,53,54,55,56,57]);};
function QS(){let a=this;DH.call(a);a.m$=null;a.Aj=null;}
let P$=F(0);
function Ro(){let a=this;C.call(a);a.ya=0;a.zC=0;a.yC=0.0;}
let Ve=F(0);
function Ha(){let a=this;C.call(a);a.uC=null;a.qx=null;a.m4=0.0;a.kW=null;a.kR=0;a.xX=0.0;a.vY=0.0;a.wM=0.0;a.n2=0;a.sk=null;}
let ACf=null;
let M0=()=>{M0=BQ(Ha);ADB();};
let Qm=(a,b,c)=>{M0();a.xX=1.0;a.vY=0.5;a.wM=0.0010000000474974513;a.n2=0;a.sk=null;a.uC=b;a.kW=B_(2000);a.qx=c;IC(a);a.m4=Ff(Lk);},
AFz=(a,b)=>{let c=new Ha();Qm(c,a,b);return c;},
AVC=(a,b)=>{let c;c=a.qx;a.qx=b;IC(a);return c;},
IC=a=>{let b,c,d,e,f;a:{b=a.qx;if(b!==null){c=0.5*(b.vb+b.va);d=0.5*(b.vc+b.u$);e=0;while(true){f=a.kW.data;if(e>=f.length)break a;f[e+3|0]=c;f[e+4|0]=d;e=e+5|0;}}}},
AWR=(a,b)=>{let c,d;c=Ff(b);d=a.m4;a.m4=c;return d;},
AWz=(a,b)=>{let c;c=a.m4;a.m4=b;return c;},
AUg=a=>{return a.m4;},
AWK=a=>{return a.n2;},
AVe=a=>{let b;b=a.n2;a.n2=1;return b;},
AU0=a=>{a.n2=0;if(a.kR>0)a.jg();},
AXd=a=>{return a.sk===null?0:1;},
AC7=a=>{a.kR=a.kR+4|0;},
AHx=a=>{let b,c,d;b=a.kW.data;c=5*a.kR|0;d=b[c+10|0];b[c+15|0]=d;d=b[c+11|0];b[c+16|0]=d;a.jh();},
AKT=a=>{FF(a,4);},
AWB=a=>{FF(a,4);},
FF=(a,b)=>{let c,d;c=b*5|0;d=a.kW.data.length;if(c>d)a.jj(c);else if(((d-(20*a.kR|0)|0)/5|0)<b)a.jg();},
AHF=(a,b)=>{let c;a.jg();c=a.kW.data.length;while(b>c){c=c*2|0;}a.kW=B_(c);IC(a);},
AUy=a=>{return (a.kW.data.length-(20*a.kR|0)|0)/5|0;},
AHQ=a=>{let b,c;b=a.kR;if(!b)return;c=a.sk;if(c===null?0:1)c.jk();else{c=a.qx;if(c===null){c=new BN;c.j5=1;c.j6=1;c.j7=A(619);B(c);}AHc(a.uC,c.o3,a.kW,0,5*b|0);}a.kR=0;},
AU4=a=>{return 5*a.kR|0;},
AVT=(a,b)=>{a.kW.data[(5*a.kR|0)+0|0]=b;},
AVa=(a,b)=>{a.kW.data[(5*a.kR|0)+1|0]=b;},
AWQ=(a,b)=>{a.kW.data[(5*a.kR|0)+5|0]=b;},
AT9=(a,b)=>{a.kW.data[(5*a.kR|0)+6|0]=b;},
AT4=(a,b)=>{a.kW.data[(5*a.kR|0)+10|0]=b;},
AWY=(a,b)=>{a.kW.data[(5*a.kR|0)+11|0]=b;},
AU2=(a,b)=>{a.kW.data[(5*a.kR|0)+15|0]=b;},
AWb=(a,b)=>{a.kW.data[(5*a.kR|0)+16|0]=b;},
AUh=a=>{return a.kW.data[(5*a.kR|0)+10|0];},
AVm=a=>{return a.kW.data[(5*a.kR|0)+11|0];},
AV7=a=>{return a.kW.data[(5*a.kR|0)+15|0];},
AWH=a=>{return a.kW.data[(5*a.kR|0)+16|0];},
AV0=(a,b)=>{a.kW.data[(5*a.kR|0)+2|0]=b;},
AWI=(a,b)=>{a.kW.data[(5*a.kR|0)+7|0]=b;},
AXM=(a,b)=>{a.kW.data[(5*a.kR|0)+12|0]=b;},
AUB=(a,b)=>{a.kW.data[(5*a.kR|0)+17|0]=b;},
ADB=()=>{ACf=C8();};
function Ez(){let a=this;C.call(a);a.pA=null;a.k$=null;}
let DF=null,Dw=null,DT=null,CU=null,CV=null,SW=null,Nh=null;
let AT_=()=>{DF=new Bb;Dw=new Bb;DT=new Bb;CU=new Bb;CV=new Bb;SW=new Bb;Nh=new Bb;};
let Hz=F(Ez);
let AKY=null;
let ASK=()=>{let b,c;b=new Ol;c=new Me;c.vJ=1;c.wg=Ft(16);b.y1=c;c=new FL;c.pi=1;c.mC=X(16);b.zs=c;c=new Me;c.vJ=1;c.wg=Ft(16);b.y7=c;AKY=b;};
let RU=F(Hz);
function Tq(){let a=this;Ha.call(a);a.rb=null;a.oF=0;}
let ASc=a=>{let b,c,d,e,f,g,h,i;b=a.kR;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.oF;g=3*f|0;h=a.rb.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;f=f+1|0;a.oF=f;i=(b+3|0)<<16>>16;d=3*f|0;h[d]=c;h[d+1|0]=e;h[d+2|0]=i;a.oF=f+1|0;a.kR=b+4|0;},
ATP=a=>{let b,c,d,e,f,g,h;b=a.kR;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.oF;g=3*f|0;h=a.rb.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;a.oF=f+1|0;a.kR=b+3|0;},
ALS=a=>{let b;b=a.kW.data.length;if(15>b)N$(a,15);else if(((b-(20*a.kR|0)|0)/5|0)<3)LF(a);},
LF=a=>{let b,c;b=a.kR;if(!b)return;c=a.sk;if(c===null?0:1)c.jk();else a.uC.jm(a.qx.o3,a.kW,0,5*b|0,a.rb,0,3*a.oF|0);a.kR=0;a.oF=0;},
N$=(a,b)=>{let c;LF(a);c=a.kW.data.length;while(b>c){c=c*2|0;}a.kW=B_(c);IC(a);a.rb=Ft(K6((a.kW.data.length/5|0)*3|0)|0);};
let So=F(Hz);
let RS=F(Ez);
let VZ=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n,o,p,q,r,s;FF(a.k$,4);j=0.0;k=d-b;l=e-c;if(g){m=a.k$;n=m.wM;o=m.xX;p=m.vY;b=b/o;b=(b+CM(b)*0.5|0)*o+p-CM(k)*n;c=c/o;c=(c+CM(c)*0.5|0)*o+p-CM(l)*n;d=d/o;d=(d+CM(d)*0.5|0)*o+p+CM(k)*n;e=e/o;e=(e+CM(e)*0.5|0)*o+p+CM(l)*n;}q=0.5*f;if(b!==d){if(c===e){j=q;q=0.0;}else{f=e-c;k=d-b;r=1.0/Cz(f*f+k*k)*q;q=f*r;j=k*r;}}f=b+q;m=a.k$;s=m.kW.data;g=5*m.kR|0;s[g+0|0]=f;s[g+1|0]=c-j;s[g+5|0]=b-q;s[g+6|0]=c+j;s[g+10|0]=d-q;s[g+11|0]=e+j;s[g+15|0]=d+q;s[g+16|0]=e-j;s[g+2|0]=h;s[g+7|0]
=h;s[g+12|0]=i;s[g+17|0]=i;m.jh();m=a.k$;if(!m.n2)m.jg();};
function TR(){let a=this;Ez.call(a);a.pq=null;a.te=null;}
let GI=null,GL=null;
let FE=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;while(true){g=BU(f,b.j8);if(g>=0)break;if(g>=0){h=new H;d=new K;d.j3=G(16);D(d,d.j2,A(18));J(d,d.j2,f,10);D(d,d.j2,A(19));e=b.j8;J(d,d.j2,e,10);b=new I;i=d.j3;j=i.data;f=d.j2;g=j.length;if(f>=0&&f<=(g-0|0)){b.j4=L(i.data,0,f);h.j5=1;h.j6=1;h.j7=b;B(h);}b=new H;R(b);B(b);}h=b.j_.data[f];UF(a.te,h.j$,h.j9);f=f+1|0;}b=a.te;AFn(a,b.m7,0,b.nc,c,d,e);a.te.nc=0;},
AFn=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o;b=b.data;if(b.length<4)return;PU(a.pq,b[c]);PU(a.pq,b[c+1|0]);h=c+2|0;while(h<d){c=D3(b[h-2|0]-b[h])>=0.0010000000474974513?0:1;if(!(c&&(D3(b[h-1|0]-b[h+1|0])>=0.0010000000474974513?0:1)))UF(a.pq,b[h],b[h+1|0]);h=h+2|0;}i=a.pq;h=i.nc;c=BU(h,4);if(c<0){i.nc=0;return;}if(!c){j=a.pA.t3;b=i.m7.data;k=b[0];l=b[1];m=b[2];n=b[3];o=j.k$.m4;VZ(j,k,l,m,n,e,0,o,o);j.k$.jg();a.pq.nc=0;return;}j=a.k$;d=j.n2;j.n2=1;if(f===Ui)Yv(a,i.m7,h,e,g);else AE$(a,i.m7,h,e,g,f!==QX?0:1);if(!d)
{f=a.k$;f.n2=0;if(f.kR>0)f.jg();}a.pq.nc=0;},
Yv=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=!e?c:c-2|0;g=0;while(g<f){h=b.data;i=a.pA.t3;j=h[g];k=h[g+1|0];l=g+2|0;m=h[l%c|0];n=h[(g+3|0)%c|0];o=i.k$.m4;VZ(i,j,k,m,n,d,0,o,o);i.k$.jg();g=l;}},
AE$=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;g=0.5*d;h=a.k$;i=h.m4;FF(h,4);j=2;k=c-2|0;l=g*g;m=c-1|0;while(j<k){n=b.data;h=DF;d=n[j-2|0];o=n[j-1|0];h.j$=d;h.j9=o;p=Dw;d=n[j];o=n[j+1|0];p.j$=d;p.j9=o;q=DT;r=j+2|0;d=n[r];o=n[j+3|0];q.j$=d;q.j9=o;if(f)KN(h,p,q,CU,CV,g);else DW(h,p,q,CU,CV,g,0);p=CU;d=p.j$;o=p.j9;h=a.k$;s=h.kW.data;t=5*h.kR|0;s[t+10|0]=d;s[t+11|0]=o;q=CV;d=q.j$;o=q.j9;s[t+15|0]=d;s[t+16|0]=o;if(j==2){if(!e){h=Nh;d=n[k];o=n[m];h.j$=d;h.j9=o;if(f)KN(h,DF,Dw,GI,GL,g);else DW(h,
DF,Dw,GI,GL,g,1);h=GL;d=h.j$;o=h.j9;h=a.k$;s=h.kW.data;t=5*h.kR|0;s[t+0|0]=d;s[t+1|0]=o;h=GI;d=h.j$;o=h.j9;s[t+5|0]=d;s[t+6|0]=o;}else{d=n[2];o=n[3];u=n[0];v=n[1];h=Ee;h.j$=u;h.j9=v;d=u-d;h.j$=d;o=v-o;h.j9=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=Cz(l/o);h.j$=h.j$*d;h.j9=h.j9*d;}h=Ee;d=h.j9;o= -h.j$;p.j$=d;p.j9=o;p.j$=d+u;p.j9=o+v;d= -h.j9;o=h.j$;q.j$=d;q.j9=o;q.j$=d+u;q.j9=o+v;h=CV;d=h.j$;o=h.j9;h=a.k$;s=h.kW.data;t=5*h.kR|0;s[t+0|0]=d;s[t+1|0]=o;h=CU;d=h.j$;o=h.j9;s[t+5|0]=d;s[t+6|0]=o;}}if(!f){DW(DF,Dw,DT,CU,CV,
g,1);h=CU;v=h.j$;w=h.j9;h=CV;x=h.j$;u=h.j9;}else{h=a.k$;s=h.kW.data;t=5*h.kR|0;v=s[t+10|0];w=s[t+11|0];x=s[t+15|0];u=s[t+16|0];}h=a.k$;s=h.kW.data;t=5*h.kR|0;s[t+2|0]=i;s[t+7|0]=i;s[t+12|0]=i;s[t+17|0]=i;h.jh();if(!f){p=DF;q=Dw;y=DT;z=CU;ba=CV;a.k$.jv();c=DW(p,q,y,z,ba,g,0);h=!c?z:ba;d=h.j$;o=h.j9;h=a.k$;s=h.kW.data;j=5*h.kR|0;s[j+0|0]=d;s[j+1|0]=o;h=!c?ba:z;d=h.j$;o=h.j9;s[j+5|0]=d;s[j+6|0]=o;if(DW(p,q,y,z,ba,g,1))z=ba;d=z.j$;o=z.j9;h=a.k$;s=h.kW.data;t=5*h.kR|0;s[t+10|0]=d;s[t+11|0]=o;d=h.m4;s[t+2|0]=d;s[t
+7|0]=d;s[t+12|0]=d;h.jw();}FF(a.k$,4);h=a.k$;s=h.kW.data;t=5*h.kR|0;s[t+0|0]=x;s[t+1|0]=u;s[t+5|0]=v;s[t+6|0]=w;j=r;}if(e){h=Dw;p=DT;q=CU;y=CV;d=h.j$;o=h.j9;g=p.j$;u=p.j9;h=Ee;h.j$=g;h.j9=u;d=g-d;h.j$=d;o=u-o;h.j9=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=Cz(l/o);h.j$=h.j$*d;h.j9=h.j9*d;}h=Ee;d=h.j9;o= -h.j$;q.j$=d;q.j9=o;q.j$=d+g;q.j9=o+u;d= -h.j9;o=h.j$;y.j$=d;y.j9=o;y.j$=d+g;y.j9=o+u;h=CV;d=h.j$;o=h.j9;p=a.k$;b=p.kW.data;e=5*p.kR|0;b[e+10|0]=d;b[e+11|0]=o;h=CU;d=h.j$;o=h.j9;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e
+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jh();}else if(f){b=b.data;h=DF;d=b[0];o=b[1];h.j$=d;h.j9=o;KN(Dw,DT,h,CU,CV,g);h=CU;d=h.j$;o=h.j9;p=a.k$;b=p.kW.data;e=5*p.kR|0;b[e+10|0]=d;b[e+11|0]=o;h=CV;d=h.j$;o=h.j9;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jh();FF(a.k$,4);h=CU;d=h.j$;o=h.j9;p=a.k$;b=p.kW.data;e=5*p.kR|0;b[e+0|0]=d;b[e+1|0]=o;h=CV;d=h.j$;o=h.j9;b[e+5|0]=d;b[e+6|0]=o;h=GL;d=h.j$;o=h.j9;b[e+10|0]=d;b[e+11|0]=o;h=GI;d=h.j$;o=h.j9;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e
+12|0]=i;b[e+17|0]=i;p.jh();}else{s=b.data;h=DF;p=Dw;h.j$=p.j$;h.j9=p.j9;q=DT;p.j$=q.j$;p.j9=q.j9;d=s[0];o=s[1];q.j$=d;q.j9=o;DW(h,p,q,CU,CV,g,0);h=CU;d=h.j$;o=h.j9;h=a.k$;b=h.kW.data;e=5*h.kR|0;b[e+10|0]=d;b[e+11|0]=o;p=CV;d=p.j$;o=p.j9;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;h.jh();p=DF;q=Dw;y=DT;z=CU;ba=CV;a.k$.jv();f=DW(p,q,y,z,ba,g,0);h=!f?z:ba;d=h.j$;o=h.j9;h=a.k$;b=h.kW.data;e=5*h.kR|0;b[e+0|0]=d;b[e+1|0]=o;h=!f?ba:z;d=h.j$;o=h.j9;b[e+5|0]=d;b[e+6|0]=o;if(DW(p,q,y,z,ba,g,
1))z=ba;d=z.j$;o=z.j9;h=a.k$;b=h.kW.data;e=5*h.kR|0;b[e+10|0]=d;b[e+11|0]=o;d=h.m4;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jw();FF(a.k$,4);DW(DF,Dw,DT,CU,CV,g,1);h=CV;d=h.j$;o=h.j9;p=a.k$;b=p.kW.data;e=5*p.kR|0;b[e+10|0]=d;b[e+11|0]=o;p=CU;d=p.j$;o=p.j9;b[e+15|0]=d;b[e+16|0]=o;q=DF;d=s[2];o=s[3];q.j$=d;q.j9=o;DW(Dw,DT,q,p,h,g,0);h=CU;d=h.j$;o=h.j9;p=a.k$;b=p.kW.data;e=5*p.kR|0;b[e+0|0]=d;b[e+1|0]=o;h=CV;d=h.j$;o=h.j9;b[e+5|0]=d;b[e+6|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jh();h=Dw;p=DT;q=DF;y=CU;z
=CV;a.k$.jv();c=DW(h,p,q,y,z,g,0);ba=!c?y:z;d=ba.j$;o=ba.j9;ba=a.k$;b=ba.kW.data;f=5*ba.kR|0;b[f+0|0]=d;b[f+1|0]=o;ba=!c?z:y;d=ba.j$;o=ba.j9;b[f+5|0]=d;b[f+6|0]=o;if(DW(h,p,q,y,z,g,1))y=z;d=y.j$;o=y.j9;h=a.k$;b=h.kW.data;e=5*h.kR|0;b[e+10|0]=d;b[e+11|0]=o;d=h.m4;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jw();}},
AXX=()=>{GI=new Bb;GL=new Bb;};
let RL=F(Ez);
let V6=null,Oo=null;
let AVb=()=>{V6=new Bb;Oo=new Bb;};
function Me(){let a=this;C.call(a);a.wg=null;a.vJ=0;}
function QQ(){let a=this;DH.call(a);a.ng=null;a.rK=null;a.ro=null;a.ry=null;}
let Zq=(a,b)=>{a.ng.m$.ss=D6(b);},
Xc=(a,b)=>{b=a.ng.m$;b.qd=1;b.ns=0;},
AJf=(a,b,c)=>{GY(a.ry,a.rK,a.ro,c);b=a.ng.m$;b.qD=1;b.ns=0;return 0;};
let OD=F();
let UB=null;
let Ng=()=>{Ng=BQ(OD);AIO();};
let AIO=()=>{let b,c;b=X((NK.p()).data.length);c=b.data;UB=b;c[FJ.ke]=1;c[FA.ke]=2;c[Fp.ke]=3;c[Fi.ke]=4;c[JV.ke]=5;};
let ARK=F();
let Pq=0.0,Pr=0.0;
let AUX=()=>{Pq=Cz(2.0);Pr=Cz(3.0);};
function F0(){let a=this;Gu.call(a);a.op=0;a.nm=null;a.nJ=null;a.nq=null;}
let AAG=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new KB;c.ot=a;c.pW=b;c=B5(c,"handleEvent");b.onreadystatechange=c;c=a.nq;d=a.nJ;e=new G0;e.u4=c;e.sa=d;c=B5(e,"handleEvent");b.onprogress=c;d=a.nm;f=a.op;b.open("GET",Bw(d),!!f);if(a.op){d="arraybuffer";b.responseType=d;}b.send();};
function OB(){let a=this;DH.call(a);a.sH=null;a.zX=null;}
let AAK=(a,b)=>{a.sH.ng.m$.ss=D6(b);},
AJ2=(a,b)=>{b=a.sH.ng.m$;b.qd=1;b.ns=0;},
Y_=(a,b,c)=>{c=a.sH;b=null;GY(c.ry,c.rK,c.ro,b);b=c.ng.m$;b.qD=1;b.ns=0;return 0;};
let XN=F();
let D2=null,Fg=null,Ee=null;
let KN=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;h=D2;i=c.j$;h.j$=i;j=c.j9;h.j9=j;h.j$=i-b.j$;h.j9=j-b.j9;b=Fg;i=d.j$;b.j$=i;j=d.j9;b.j9=j;k=i-c.j$;b.j$=k;l=j-c.j9;b.j9=l;m=h.j9;i=k*m;j=h.j$;j=N6(i-l*j,j*k+m*l);n=D3(j-0.0)>=0.0010000000474974513?0:1;if(!n&&!(D3(j-6.2831854820251465)>=0.0010000000474974513?0:1)){m=g/JH(j);n=j>=0.0?0:1;b=D2;i=m*m;g=b.j$;g=g*g;m=b.j9;m=g+m*m;if(m!==0.0&&m!==i){g=Cz(i/m);b.j$=b.j$*g;b.j9=b.j9*g;}b=Fg;g=b.j$;g=g*g;m=b.j9;m=g+m*m;if(m!==0.0&&m!==i){g=Cz(i/m);b.j$=b.j$*g;b.j9=b.j9*g;}h=!n
?f:e;if(n)e=f;m=c.j$;h.j$=m;i=c.j9;h.j9=i;b=D2;m=m-b.j$;h.j$=m;i=i-b.j9;h.j9=i;d=Fg;h.j$=m+d.j$;h.j9=i+d.j9;m=c.j$;e.j$=m;i=c.j9;e.j9=i;m=m+b.j$;e.j$=m;i=i+b.j9;e.j9=i;e.j$=m-d.j$;e.j9=i-d.j9;return j;}b=D2;g=g*g;m=b.j$;m=m*m;i=b.j9;m=m+i*i;if(m!==0.0&&m!==g){g=Cz(g/m);b.j$=b.j$*g;b.j9=b.j9*g;}b=D2;g= -b.j9;m=b.j$;e.j$=g;e.j9=m;e.j$=g+c.j$;e.j9=m+c.j9;g=b.j9;m= -b.j$;f.j$=g;f.j9=m;f.j$=g+c.j$;f.j9=m+c.j9;return j;},
DW=(b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q;i=D2;j=c.j$;i.j$=j;k=c.j9;i.j9=k;i.j$=j-b.j$;i.j9=k-b.j9;b=Fg;l=d.j$;b.j$=l;j=d.j9;b.j9=j;k=l-c.j$;b.j$=k;m=j-c.j9;b.j9=m;j=i.j9;l=k*j;n=i.j$;l=N6(l-m*n,n*k+j*m);o=D3(l-0.0)>=0.0010000000474974513?0:1;if(!o&&!(D3(l-6.2831854820251465)>=0.0010000000474974513?0:1)){j=g/JH(l);b=D2;n=j*j;j=b.j$;j=j*j;k=b.j9;j=j+k*k;if(j!==0.0&&j!==n){j=Cz(n/j);b.j$=b.j$*j;b.j9=b.j9*j;}b=Fg;j=b.j$;j=j*j;k=b.j9;k=j+k*k;if(k!==0.0&&k!==n){j=Cz(n/k);b.j$=b.j$*j;b.j9=b.j9*j;}o=l>=0.0?0:1;i=
!o?f:e;if(o)e=f;k=c.j$;i.j$=k;l=c.j9;i.j9=l;p=D2;k=k-p.j$;i.j$=k;l=l-p.j9;i.j9=l;q=Fg;i.j$=k+q.j$;i.j9=l+q.j9;if(h)p=q;if(!o){b=Ee;j= -p.j9;k=p.j$;b.j$=j;b.j9=k;}else{b=Ee;j=p.j9;k= -p.j$;b.j$=j;b.j9=k;}b=Ee;g=g*g;j=b.j$;j=j*j;k=b.j9;k=j+k*k;if(k!==0.0&&k!==g){g=Cz(g/k);b.j$=b.j$*g;b.j9=b.j9*g;}j=c.j$;e.j$=j;k=c.j9;e.j9=k;b=Ee;e.j$=j+b.j$;e.j9=k+b.j9;return o;}b=D2;g=g*g;j=b.j$;j=j*j;k=b.j9;k=j+k*k;if(k!==0.0&&k!==g){g=Cz(g/k);b.j$=b.j$*g;b.j9=b.j9*g;}b=D2;g= -b.j9;j=b.j$;e.j$=g;e.j9=j;e.j$=g+c.j$;e.j9=j+c.j9;g
=b.j9;j= -b.j$;f.j$=g;f.j9=j;f.j$=g+c.j$;f.j9=j+c.j9;return 1;},
AXr=()=>{D2=new Bb;Fg=new Bb;Ee=new Bb;};
function OC(){let a=this;DH.call(a);a.q7=null;a.wf=null;a.xV=null;a.r3=null;}
let AEA=(a,b)=>{a.q7.ng.m$.ss=D6(b);},
XP=(a,b)=>{b=a.q7.ng.m$;b.qd=1;b.ns=0;},
XU=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.wf;if(e!==null)d.setAttribute("crossOrigin",Bw(e));a:{e=a.r3;e.lh=e.lh+1|0;e=new K7;e.sY=a;e.Al=b;e.xu=c;e.vH=d;d.addEventListener("load",B5(e,"handleEvent"),!!0);d.addEventListener("error",B5(e,"handleEvent"),!!0);if(!a.r3.x1){b=Bw(b);d.src=b;}else{b=a.xV;c=ANV(c);e=new K;e.j3=G(16);D(e,e.j2,A(620));f=e.j2;if(b===null)b=A(2);D(e,f,b);D(e,e.j2,A(621));f=e.j2;if(c===null)c=A(2);D(e,f,c);b=new I;g=e.j3;h=g.data;i=e.j2;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.j4=L(g.data,0,i);b=Bw(b);d.src=b;}return 0;}b=new H;b.j5=1;b.j6=1;Bi(b);B(b);},
AFr=(a,b,c)=>{return XU(a,b,c);};
function KB(){let a=this;C.call(a);a.pW=null;a.ot=null;}
let AIU=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pW.readyState==4){if(a.pW.status==200){if(a.ot.nq.mP){if(BW===null){b=new CO;c=new Ck;c.lL=BI(32);b.l6=c;c=new K;Bt(c);c.j3=G(16);b.lQ=c;b.lP=G(32);b.lR=0;b.lS=Cg;BW=b;}b=a.ot.nm;c=new K;c.j3=G(16);D(c,c.j2,A(580));d=c.j2;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.j3;f=e.data;g
=c.j2;h=f.length;if(g>=0&&g<=(h-0|0)){b.j4=L(e.data,0,g);BX(Bw(b));BX("\n");}else{b=new H;b.j5=1;b.j6=1;Bi(b);B(b);}}i=a.pW.response;j=new Int8Array(i);b=a.ot;c=b.nJ;k=b.nm;b=new Il;b.nt=j;b.uB=i;c.i3(k,b);}else if(a.pW.status!=404&&a.pW.status!=403){try{l=V(100);$p=1;continue _;}catch($$e){$$je=Z($$e);if($$je instanceof Dr){}else{throw $$e;}}b=a.ot;c=b.nq;d=b.op;k=b.nm;b=b.nJ;if(c.mP){if(BW===null){i=new CO;j=new Ck;j.lL=BI(32);Bt(i);i.l6=j;j=new K;DM(j,16);i.lQ=j;i.lP=G(32);i.lR=0;i.lS=Cg;BW=i;}i=new K;i.j3
=G(16);D(i,i.j2,A(102));D(i,i.j2,k===null?A(2):k);j=new I;e=i.j3;f=e.data;h=i.j2;m=f.length;if(h>=0&&h<=(m-0|0)){j.j4=L(e.data,0,h);BX(Bw(j));BX("\n");}else{b=new H;R(b);B(b);}}c.lh=c.lh+1|0;i=new F0;i.nq=c;i.op=d;i.nm=k;i.nJ=b;b=null;c=null;i.m0=new C;i.mZ=1;i.nC=c;i.nX=b;g=CR;CR=g+1|0;i.nW=V(g);b=new El;b.nD=i;EG(b);}else{b=a.ot;b.nJ.i4(b.nm);}b=a.ot.nq;b.lh=b.lh-1|0;}return;case 1:a:{try{K8(l);if(Fv()){break _;}break a;}catch($$e){$$je=Z($$e);if($$je instanceof Dr){}else{throw $$e;}}}b=a.ot;c=b.nq;d=b.op;k
=b.nm;b=b.nJ;if(c.mP){if(BW===null){i=new CO;j=new Ck;j.lL=BI(32);Bt(i);i.l6=j;j=new K;DM(j,16);i.lQ=j;i.lP=G(32);i.lR=0;i.lS=Cg;BW=i;}i=new K;i.j3=G(16);D(i,i.j2,A(102));D(i,i.j2,k===null?A(2):k);j=new I;e=i.j3;f=e.data;h=i.j2;m=f.length;if(h>=0&&h<=(m-0|0)){j.j4=L(e.data,0,h);BX(Bw(j));BX("\n");}else{b=new H;R(b);B(b);}}c.lh=c.lh+1|0;i=new F0;i.nq=c;i.op=d;i.nm=k;i.nJ=b;b=null;c=null;i.m0=new C;i.mZ=1;i.nC=c;i.nX=b;g=CR;CR=g+1|0;i.nW=V(g);b=new El;b.nD=i;EG(b);b=a.ot.nq;b.lh=b.lh-1|0;return;default:Fm();}}Db().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
ASk=(a,b)=>{let $p,$z;$p=0;if(Fx()){let $T=Db();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AIU(a,b);if(Fv()){break _;}return;default:Fm();}}Db().s(a,b,$p);};
let ABe=F();
function K7(){let a=this;C.call(a);a.Al=null;a.xu=null;a.vH=null;a.sY=null;}
let AE4=(a,b)=>{let c,d;c=U(b.type);if(c===A(622))d=1;else if(!(A(622) instanceof I))d=0;else{b=A(622);d=c.j4!==b.j4?0:1;}if(d){b=a.sY.q7.ng.m$;b.qd=1;b.ns=0;}else{b=a.xu;b.uM=a.vH;c=a.sY.q7;GY(c.ry,c.rK,c.ro,b);b=c.ng.m$;b.qD=1;b.ns=0;}b=a.sY.r3;b.lh=b.lh-1|0;},
ADp=(a,b)=>{AE4(a,b);};
AUb([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",11,"actions",7,"graphics",15,"g2d",7,"math",0,"mygdx",18,"game",-1,"java",20,"util",21,"regex",20,"nio",23,"charset",20,"lang"]);
C7([C,"Object",25,0,[],0,3,0,0,["cT",P(G_),"cN",N(AJq),"T",P(PP)],AQm,0,C,[],0,3,0,0,0,Os,0,C,[],0,3,0,SS,0,Of,0,C,[],3,3,0,0,0,Mm,0,C,[Of],0,3,0,0,0,CW,0,C,[],3,3,0,0,0,Nj,0,Mm,[CW],0,3,0,0,0,BA,0,C,[],3,3,0,0,0,FD,0,C,[BA],0,3,0,0,0,Dn,0,C,[],3,3,0,0,0,B8,0,C,[],3,3,0,0,0,BG,0,C,[Dn,B8],1,3,0,0,["T",P(AFx),"cN",N(YD)],Hg,0,BG,[],12,3,0,0,0,CE,"Actor",11,C,[],0,3,0,0,["be",N(G5),"J",Bd(RV),"x",N(AOw),"Z",N(ANB),"T",P(SX)],Mp,0,C,[],3,3,0,0,0,BJ,"Group",11,CE,[Mp],0,3,0,0,["be",N(RF),"bP",Bs(AHT),"Z",N(O$),
"J",Bd(H6),"x",N(AN7),"T",P(ABK)],Gi,0,C,[],3,3,0,0,0,DG,"Iterable",25,C,[],3,3,0,0,0,GX,0,C,[Gi,DG],0,3,0,0,0,GA,0,C,[],3,3,0,0,0,B2,0,C,[GA],0,3,0,0,0,He,0,B2,[],0,3,0,0,0,AL4,0,He,[],0,0,0,0,0,GF,"FocusListener$FocusEvent$Type",13,BG,[],12,3,0,0,0,Nl,0,C,[],3,3,0,0,0,IV,0,C,[Nl],3,3,0,0,0,Gy,0,C,[],3,3,0,0,0,DD,0,C,[Gy],1,3,0,0,0,APh,0,DD,[],0,0,0,0,0,M6,0,GX,[],0,3,0,0,0,MG,0,C,[GA],0,3,0,0,0,ACN,0,C,[],1,3,0,0,0,Xo,0,C,[],0,3,0,0,0,V4,0,C,[],3,3,0,0,0,LJ,0,C,[V4],0,3,0,0,0,ALs,0,LJ,[],0,0,0,0,0,C1,"FocusListener$FocusEvent",
13,FD,[],0,3,0,0,["bt",P(Wg)],Rr,0,C,[],32,0,0,Wt,0,AJm,0,C,[],1,3,0,0,0,Tp,0,C,[],32,0,0,R7,0,APg,0,DD,[],0,0,0,0,0,Fj,0,C,[Nl],0,3,0,0,0,Tk,0,Fj,[IV],0,3,0,0,0,Wc,0,C,[],4,3,0,Uk,0,LY,0,C,[GA],1,3,0,0,0,ARS,0,He,[],0,3,0,0,0,AEc,0,C,[],0,3,0,0,0,UV,0,C,[],0,3,0,VB,0,Nd,0,C,[GA],1,3,0,0,0,IE,0,Fj,[IV],0,3,0,0,0]);
C7([VY,0,Fj,[IV],0,3,0,0,0,D$,0,B2,[],0,3,0,0,0,VQ,0,IE,[],0,3,0,0,0,ABs,0,FD,[],0,3,0,0,0,KA,0,C,[],3,3,0,0,0,Y,"InputEvent",11,FD,[],0,3,0,0,["bt",P(Qg),"T",P(OM)],DR,"Stage$TouchFocus",11,C,[BA],4,3,0,0,["bt",P(OZ)],N1,0,C,[],32,0,0,L6,0,Do,"InputEvent$Type",11,BG,[],12,3,0,0,0,BP,"Action",11,C,[BA],1,3,0,0,["bY",P(AMN),"bx",N(ANt),"bt",P(Z_),"T",P(ANw)],ES,0,BP,[],1,3,0,0,0,AGc,0,ES,[],0,3,0,0,0,AK3,0,ES,[],0,3,0,0,0,C3,0,BP,[],1,3,0,0,["bu",N(ARE),"bY",P(ATG)],EI,0,C3,[],1,3,0,0,0,XM,0,EI,[],0,3,0,0,0,Z7,
0,C,[GA],0,0,0,0,0,NN,0,BP,[],0,3,0,0,["bt",P(ALe),"bx",N(ANL),"T",P(AJa)],Dd,"SequenceAction",14,NN,[],0,3,0,0,["bu",N(Od),"bY",P(UO)],AD6,0,BP,[],0,3,0,0,0,AIr,0,BP,[],0,3,0,0,0,ANr,0,BP,[],0,3,0,0,0,AOm,0,C,[],0,3,0,0,0,LQ,0,BP,[],1,3,0,0,0,AHL,0,LQ,[],0,3,0,0,0,Dp,"MoveToAction",14,C3,[],0,3,0,0,["bt",P(Ur)],APb,0,C3,[],0,3,0,0,0,APO,0,EI,[],0,3,0,0,0,ALO,0,BP,[],0,3,0,0,0,AMl,0,EI,[],0,3,0,0,0,ARt,0,C3,[],0,3,0,0,0,AQM,0,C3,[],0,3,0,0,0,AEF,0,BP,[],0,3,0,0,0,AHg,0,C3,[],0,3,0,0,0,AHw,0,BP,[],0,3,0,0,0,AFb,
0,BP,[],0,3,0,0,0,AHO,0,ES,[],0,3,0,0,0,YH,0,C3,[],0,3,0,0,0,ARC,0,BP,[],0,3,0,0,0,ALi,0,EI,[],0,3,0,0,0,AES,0,ES,[],0,3,0,0,0,AKs,0,BP,[],0,3,0,0,0,Z9,0,C3,[],0,3,0,0,0,AGQ,0,C3,[],0,3,0,0,0,ABm,0,C,[CW],0,3,0,0,0,C_,0,BJ,[KA],0,3,0,0,0,Er,0,C_,[],0,3,0,QY,0,FU,0,Er,[Gi],0,3,0,0,0,LB,0,FU,[],0,3,0,0,0,ACh,0,LB,[],0,3,0,0,0]);
C7([APd,0,B2,[],0,0,0,0,0,ME,0,C_,[],0,3,0,0,0,Sd,0,C,[],3,3,0,0,0,EB,0,C,[Sd],1,3,0,0,0,AEv,0,EB,[],0,0,0,0,0,Dk,0,CE,[KA],0,3,0,0,0,Y1,0,Dk,[],0,3,0,0,0,APc,0,B2,[],0,0,0,0,0,B4,0,C,[],1,3,0,Ij,0,Tv,0,B4,[],0,0,0,0,0,ALt,0,B4,[],0,0,0,0,0,Kt,0,D$,[],0,3,0,0,0,AHD,0,Kt,[],0,3,0,0,0,VT,0,B4,[],0,0,0,0,0,ARf,0,B2,[],0,0,0,0,0,Md,0,Er,[],0,3,0,0,0,ALu,0,B4,[],0,0,0,0,0,Gg,0,C,[],3,3,0,0,0,D_,0,C,[B8,Gg],0,3,0,0,0,DO,"Table$DebugRect",12,D_,[],0,3,0,J1,0,AEz,0,EB,[],0,0,0,0,0,MU,0,Dk,[Gi],0,3,0,0,0,ACx,0,MU,[],
0,3,0,0,0,AGU,0,B2,[],0,0,0,0,0,Qq,0,C,[],3,3,0,0,0,ANy,0,C,[Qq],0,3,0,0,0,Gn,0,C,[],0,3,0,0,0,GJ,0,Gn,[],0,3,0,0,0,Ud,0,GJ,[],0,3,0,0,0,MZ,0,Dk,[Gi],0,3,0,0,0,AFV,0,MZ,[],0,3,0,0,0,AS$,0,ME,[],0,0,0,0,0,KC,0,C_,[],0,3,0,0,0,ATU,0,FU,[],0,3,0,0,0,Np,0,Dk,[Mp],0,3,0,0,0,VR,0,B4,[],0,0,0,0,0,UQ,0,C,[],0,3,0,0,0,AE6,0,C,[Gy],0,0,0,0,0,AHH,0,B2,[],0,0,0,0,0,AJv,0,DD,[],0,0,0,0,0,AGg,0,C,[],0,3,0,0,0,AM6,0,B2,[],0,0,0,0,0,ASQ,0,D$,[],0,0,0,0,0,AGS,0,MG,[],0,0,0,0,0,Tr,0,B4,[],0,0,0,0,0,Tu,0,B4,[],0,0,0,0,0,SY,0,
C,[],3,3,0,0,0,JZ,0,C,[],0,3,0,0,0,OX,0,JZ,[],0,3,0,0,0,AEw,0,EB,[],0,0,0,0,0]);
C7([APa,0,LY,[],0,0,0,0,0,APe,0,Nd,[],0,0,0,0,0,ARg,0,B2,[],0,0,0,0,0,ARh,0,D$,[],0,0,0,0,0,VS,0,B4,[],0,0,0,0,0,OP,0,C,[BA],0,3,0,Uf,0,R3,0,GJ,[],0,3,0,0,0,AG7,0,B2,[],0,0,0,0,0,Zn,0,DD,[],0,0,0,0,0,Tw,0,B4,[],0,0,0,0,0,ACT,0,C_,[],0,3,0,0,0,AGT,0,B2,[],0,0,0,0,0,Su,0,C,[],0,3,0,0,0,Jh,0,B4,[],0,3,0,0,0,AE7,0,KC,[],0,3,0,0,0,Ts,0,B4,[],0,0,0,0,0,AIi,0,Dk,[Gi],0,3,0,0,0,AG1,0,M6,[],0,0,0,0,0,Vu,0,C,[],0,3,0,0,0,Pc,0,Dk,[],0,3,0,Uv,0,Pl,0,C,[],0,3,0,0,0,ALw,0,B4,[],0,0,0,0,0,VU,0,B4,[],0,0,0,0,0,AOu,0,Md,[],
0,3,0,0,0,Tt,0,B4,[],0,0,0,0,0,Rs,0,C,[],0,3,0,0,0,ASF,0,C,[],0,3,0,0,0,Fy,0,BG,[],12,3,0,0,0,ASY,0,B4,[],0,0,0,0,0,AGH,0,DD,[],0,0,0,0,0,Dj,0,C,[],1,3,0,0,0,VV,0,Dj,[],0,0,0,0,0,Zc,0,C,[SY],0,3,0,0,0,VE,0,C,[],0,3,0,0,0,SJ,0,C,[],0,3,0,0,0,Tm,0,C,[],0,3,0,0,0,Nn,0,B2,[],0,3,0,0,0,Zm,0,DD,[],0,0,0,0,0,ARi,0,Np,[],0,0,0,0,0,Zf,0,C,[],3,3,0,0,0,AG8,0,B2,[],0,0,0,0,0,ATJ,0,C_,[],0,3,0,0,0,AK0,0,C_,[],0,3,0,0,0,AG3,0,D$,[],0,0,0,0,0,Na,0,C,[],0,3,0,0,0,AEu,0,Na,[],0,0,0,0,0,AQT,0,CE,[CW],0,3,0,0,0,Yp,0,B2,[],0,
0,0,0,0,AOR,0,FU,[],0,3,0,0,0,AJ3,0,B2,[],0,0,0,0,0]);
C7([ASl,0,D$,[],0,0,0,0,0,UW,0,Gn,[],0,3,0,0,0,AK7,0,C_,[],0,3,0,0,0,Sz,0,C,[],0,3,0,0,0,RH,0,C,[],0,3,0,0,0,AJD,0,Dk,[],0,3,0,0,0,ASR,0,GX,[],0,0,0,0,0,Yr,0,B2,[],0,0,0,0,0,AMK,0,C_,[],0,3,0,0,0,AS8,0,Nn,[],0,3,0,0,0,Ys,0,Er,[],0,0,0,0,0,AEx,0,EB,[],0,0,0,0,0,WJ,0,C,[],1,3,0,0,0,VP,0,C,[],0,3,0,0,0,Vm,0,C,[B8],0,3,0,Vo,0,BO,0,C,[],1,3,0,JJ,0,PG,0,BO,[],0,3,0,0,0,AGK,0,C,[],0,3,0,0,0,T4,0,BO,[],0,0,0,0,0,ARN,0,C,[],0,3,0,0,0,EC,0,BO,[],0,3,0,0,0,HO,0,EC,[],0,3,0,0,0,HI,0,EC,[],0,3,0,0,0,Jw,0,C,[],3,3,0,0,0,ABM,
0,C,[Jw],0,3,0,0,0,T7,0,BO,[],0,0,0,0,0,APs,0,C,[Gg],0,3,0,0,0,T3,0,BO,[],0,0,0,0,0,Gw,0,BO,[],0,3,0,0,0,T2,0,BO,[],0,0,0,0,0,T1,0,BO,[],0,0,0,0,0,ALA,0,C,[],4,3,0,0,0,Xn,0,Dj,[],0,0,0,0,0,I$,0,C,[],3,3,0,0,0,Bb,"Vector2",17,C,[B8,I$],0,3,0,0,["T",P(AA6),"cN",N(ADF)],Td,0,BO,[],0,0,0,0,0,FP,0,BO,[],0,3,0,0,0,AJz,0,C,[],0,3,0,0,0,T9,0,BO,[],0,0,0,0,0,NJ,0,FP,[],0,3,0,0,0,AE2,0,C,[BA],0,3,0,0,0,Hn,0,BG,[],12,3,0,0,0,SF,0,C,[],0,3,0,R_,0,GS,0,BO,[],0,3,0,0,0,RY,0,GS,[],0,3,0,0,0,S_,0,BO,[],0,0,0,0,0,S1,0,C,[B8],
4,3,0,0,0,T0,0,BO,[],0,0,0,0,0,F4,0,C,[B8,I$],0,3,0,0,0,O3,0,Gw,[],0,3,0,0,0]);
C7([RB,0,BO,[],0,3,0,0,0,ABw,0,C,[],0,3,0,0,0,ATs,0,C,[Gg],0,3,0,0,0,T5,0,BO,[],0,0,0,0,0,VG,0,BO,[],0,3,0,0,0,Te,0,BO,[],0,0,0,0,0,Rz,0,Gw,[],0,3,0,0,0,Wp,0,C,[B8],0,3,0,Qa,0,Ky,0,C,[B8],0,3,0,NY,0,LV,0,C,[B8],0,3,0,Ms,0,ABV,0,C,[B8],0,3,0,0,0,X2,0,C,[B8],0,3,0,0,0,AM0,0,C,[B8,Gg],0,3,0,0,0,AF7,0,C,[Jw],0,3,0,0,0,TE,0,C,[],4,3,0,Gx,0,U4,0,C,[],4,3,0,QT,0,Zt,0,C,[],4,3,0,0,0,QW,0,GS,[],0,3,0,0,0,LD,0,C,[B8],0,3,0,Eh,0,PS,0,C,[],3,3,0,0,0,Mt,0,C,[PS,B8],0,3,0,0,0,S5,0,Mt,[],0,3,0,0,0,Tc,0,BO,[],0,0,0,0,0,T6,
0,BO,[],0,0,0,0,0,M5,0,C,[],0,3,0,IZ,0,Ep,0,C,[B8],0,3,0,0,0,Ol,0,C,[],0,3,0,0,0,AKX,0,C,[],0,3,0,0,0,Bn,0,C,[B8,I$],0,3,0,CT,0,AE5,0,C,[B8,Gg],0,3,0,0,0,ACZ,0,Dj,[],0,0,0,0,0,L4,0,FP,[],0,3,0,0,0,ALx,0,C,[Jw],0,3,0,0,0,ZW,0,C,[],0,3,0,0,0,APR,0,C,[B8],0,3,0,0,0,JO,0,C,[B8],0,3,0,0,0,Tb,0,BO,[],0,0,0,0,0,APV,0,C,[],0,3,0,0,0,Z5,0,C,[],0,3,0,0,0,AMO,0,C,[],0,3,0,0,0,APP,0,C,[B8],0,3,0,0,0,AKg,0,C,[],3,3,0,0,0,AFi,0,C,[B8],0,3,0,0,0,ANF,0,C,[],0,0,0,0,0,Kq,0,C,[BA],0,3,0,Mq,0,H8,0,C,[],0,3,0,0,["b_",BS(Pm)],Jo,
0,H8,[],0,3,0,0,["b_",BS(APj)],Q9,0,C,[CW],0,3,0,0,0,AMt,0,C,[],0,3,0,0,0,BM,0,C,[],0,3,0,0,0]);
C7([NW,0,C,[CW],1,3,0,0,0,HU,0,NW,[],0,3,0,0,["T",P(AKh)],Bg,"Array",8,C,[DG],0,3,0,0,["cN",N(Sj),"T",P(Vn)],J6,0,C,[DG],0,3,0,0,0,AFQ,0,J6,[],0,3,0,0,0,ASD,0,C,[DG],0,3,0,0,0,DV,0,C,[],4,3,0,0,["cN",N(AKp)],ASV,0,C,[],0,3,0,0,0,AHm,0,C,[],0,3,0,0,0,AKU,0,C,[],0,3,0,0,0,AIT,0,C,[],0,3,0,0,0,RJ,0,C,[],0,3,0,SZ,0,Yl,0,C,[],0,3,0,0,0,AJL,0,C,[],0,3,0,0,0,AIt,0,C,[],0,3,0,0,0,AJg,0,C,[],0,3,0,0,0,APq,0,C,[],0,3,0,0,0,AFd,0,C,[],0,3,0,0,0,AQY,0,C,[],0,3,0,0,0,AGZ,0,C,[],0,3,0,0,0,AAd,0,C,[],0,3,0,0,0,ABC,0,C,[],
0,3,0,0,0,JN,0,BG,[],12,3,0,0,0,AJQ,0,C,[],0,3,0,0,0,TL,0,C,[],3,3,0,0,0,Dz,0,C,[],0,3,0,0,0,Yw,0,Dz,[],0,3,0,0,0,Yu,0,Dz,[],0,3,0,0,0,AHU,0,Dz,[],0,3,0,0,0,ACR,0,Dz,[],0,3,0,0,0,AM2,0,Dz,[],0,3,0,0,0,LZ,0,Dz,[],0,3,0,0,0,ACF,0,LZ,[],0,3,0,0,0,HB,0,C,[],3,3,0,0,0,ADR,0,C,[CW,HB],0,3,0,0,0,Fh,0,C,[],3,3,0,0,0,AMM,0,C,[Fh,HB],0,3,0,0,0,AQU,0,C,[Fh],0,3,0,0,0,AA4,0,C,[],0,3,0,0,0,EJ,0,C,[Fh],0,3,0,0,0,ALG,0,EJ,[],0,3,0,0,0,Ht,0,EJ,[HB,Fh],1,3,0,0,0,DP,0,Ht,[],1,3,0,Q8,0,AMs,0,C,[],0,3,0,0,0,APo,0,DP,[],4,3,0,0,
0,AHb,0,DP,[],4,3,0,0,0,ARJ,0,EJ,[],0,3,0,0,0,Lm,0,EJ,[],0,3,0,0,0,Ye,0,Lm,[],0,3,0,0,0,ACB,0,DP,[],4,3,0,0,0]);
C7([G1,0,Ht,[],1,3,0,0,0,AIN,0,G1,[],4,3,0,0,0,AG$,0,DP,[],4,3,0,0,0,AJj,0,DP,[],4,3,0,0,0,AIK,0,G1,[],4,3,0,0,0,Hr,0,BG,[],12,3,0,0,0,FS,0,C,[CW,Fh,HB],1,3,0,0,0,MW,0,FS,[Fh],1,3,0,0,0,WS,0,MW,[Fh],0,3,0,0,0,HJ,0,BG,[],12,3,0,0,0,C2,0,FS,[],1,3,0,0,0,H$,0,C2,[],1,3,0,0,0,AAQ,0,C,[],0,3,0,0,0,GD,0,C2,[],1,3,0,Uw,0,Ex,0,GD,[],1,3,0,0,0,FY,0,Ex,[],1,3,0,0,0,ADN,0,FY,[],0,3,0,0,0,HH,0,C2,[],1,3,0,0,0,ATz,0,HH,[],0,3,0,0,0,APl,0,C2,[],0,3,0,0,0,Fw,0,C2,[],1,3,0,0,0,Yo,0,Fw,[],0,3,0,0,0,Hd,0,C2,[],1,3,0,0,0,ADE,
0,Ex,[],0,3,0,0,0,AF3,0,Ex,[],0,3,0,0,0,KL,0,C2,[],1,3,0,0,0,ALH,0,KL,[],0,3,0,0,0,ZJ,0,Fw,[],0,3,0,0,0,AHk,0,FY,[],0,3,0,0,0,ALy,0,C2,[],0,3,0,0,0,AJu,0,Fw,[],0,3,0,0,0,ALN,0,C2,[],0,3,0,0,0,ANz,0,GD,[],0,3,0,0,0,AF$,0,Dj,[],0,0,0,0,0,AAp,0,Dj,[],0,0,0,0,0,AAH,0,Ex,[],0,3,0,0,0,AMg,0,Hd,[],0,3,0,0,0,ARL,0,H$,[],0,3,0,0,0,AKq,0,H$,[],0,3,0,0,0,ANj,0,Hd,[],0,3,0,0,0,AIg,0,FY,[],0,3,0,0,0,ASs,0,HH,[],0,3,0,0,0,EH,0,FS,[],1,3,0,0,0,AIS,0,EH,[],0,3,0,0,0,FC,0,C,[],1,3,0,0,0,AMG,0,FC,[],0,3,0,0,0,AN3,0,EH,[],0,3,
0,0,0,APk,0,EH,[],0,3,0,0,0,AQl,0,FC,[],0,3,0,0,0,ADl,0,EH,[],0,3,0,0,0]);
C7([APr,0,FC,[],0,3,0,0,0,Kn,0,C,[],3,3,0,0,0,Oa,0,C,[],3,3,0,0,0,BC,"Class",25,C,[Kn,Oa],0,3,0,0,["T",P(AII)],ABJ,0,C,[],4,0,0,0,0,AAw,0,C,[],4,3,0,0,0,Dr,0,C,[],0,3,0,0,["c4",P(AOh)],BF,0,Dr,[],0,3,0,0,0,Bz,"RuntimeException",25,BF,[],0,3,0,0,0,AG5,"ClassCastException",25,Bz,[],0,3,0,0,0,JX,0,C,[],3,3,0,0,0,I,"String",25,C,[B8,Dn,JX],0,3,0,0,["T",P(Cl),"cN",N(AQ_),"cT",P(ALa)],Ev,0,C,[B8],1,3,0,0,0,Fu,0,Ev,[Dn],0,3,0,0,0,Bc,0,C,[B8,JX],0,0,0,0,["c9",N(Is),"T",P(Mn)],IS,0,C,[],3,3,0,0,0,K,0,Bc,[IS],0,3,0,0,
["gw",BS(AHK),"jA",Bd(ACE),"T",P(Et),"c9",N(AH$),"dd",Bs(AI0)],Rn,0,C,[],0,3,0,0,0,P5,0,C,[],3,3,0,0,0,LO,0,C,[P5,Gy],0,3,0,0,0,VK,0,C,[],3,3,0,0,0,My,0,C,[VK],1,3,0,0,0,P7,0,My,[],0,3,0,0,0,AOe,0,C,[],4,3,0,0,0,H2,0,BG,[],12,3,0,0,0,OA,0,C,[],3,3,0,0,0,Cs,0,C,[],3,3,0,0,0,RI,0,C,[Cs],3,3,0,0,0,Jn,0,C,[OA,RI],0,3,0,E4,["jB",N(AL_)],ALQ,0,C,[],0,3,0,0,0,Rb,0,C,[],0,3,0,Cw,0,FR,0,Ev,[Dn],0,3,0,0,0,GE,0,C,[],0,3,0,0,0,AGb,0,C,[],4,3,0,0,0,DN,"GlyphLayout$GlyphRun",16,C,[BA],0,3,0,0,0,FL,0,C,[],0,3,0,0,0,Mf,0,C,
[],3,3,0,0,0,KU,0,C,[Mf],1,3,0,0,0,Fd,0,C,[],3,3,0,0,0,I0,0,KU,[Fd,B8],0,3,0,0,0,Ib,"Comparator",21,C,[],3,3,0,0,0,NM,0,C,[Ib],0,3,0,0,0,MN,0,C,[Dn],0,3,0,0,0,ACr,0,C,[],0,3,0,0,0,AMn,0,C,[],4,3,0,0,0,N0,0,C,[],3,3,0,0,0,O7,0,C,[N0],0,3,0,0,0,ABQ,0,C,[],0,3,0,0,0,AEM,0,C,[],0,3,0,0,0,Ty,0,C,[],3,3,0,0,0]);
C7([KD,0,C,[Ty],0,3,0,ED,0,Ou,0,C,[],0,3,0,0,0,DH,0,C,[],0,3,0,0,["g2",N(AJy)],Th,0,C,[],3,3,0,0,0,Es,0,C,[Cs],3,3,0,0,0,Mh,0,C,[Th,Es],0,3,0,0,["jC",N(Yj)],SB,0,C,[],3,3,0,0,0,Uq,0,C,[SB],0,3,0,0,0,TI,0,C,[TL],0,3,0,0,0,Tz,0,C,[],3,3,0,0,0,Rk,0,C,[Tz],0,3,0,0,0,PN,0,C,[],3,3,0,0,0,TD,0,C,[PN],0,3,0,0,0,AKx,0,C,[],0,3,0,0,0,Uu,0,C,[],3,3,0,0,0,TJ,0,C,[Uu],3,3,0,0,0,QK,0,C,[TJ],0,3,0,0,0,Kf,0,C,[Es],0,0,0,0,["jC",N(AM9)],Kg,0,C,[Es],0,0,0,0,["jC",N(AR7)],Bk,"IllegalArgumentException",25,Bz,[],0,3,0,0,0,AP4,0,
C,[],4,3,0,0,0,ZL,0,C,[DG],0,3,0,0,0,AId,0,Ev,[Dn],0,3,0,0,0,AHJ,0,C,[Cs],1,3,0,0,0,L$,0,C,[],3,3,0,0,0,GT,"TeaGL20",5,C,[L$],0,3,0,0,["ih",Bs(AFo),"is",Bs(ARZ),"cA",Bs(AAS),"he",BS(AEt),"eA",BS(Lh),"eB",BS(Lg),"hp",N(APA),"ho",BS(AA8),"ie",N(AGt),"ia",P(ASJ),"ic",N(AMc),"g$",N(APB),"bb",N(ALU),"iv",N(AKk),"hV",Bd(ABI),"hW",BS(AHi),"h0",BS(AJP),"W",N(ARA),"it",N(AQh),"iW",N(WY),"eC",BS(Kw),"eD",BS(L1),"im",Bs(ADa),"cl",Bs(Jj),"g9",N(ASA),"eE",Bd(Mr),"ig",N(AH3),"eF",Bd(KY),"dV",N(AD9),"ij",Bs(AD3),"ii",N(Zi),
"cw",Bs(ABH),"id",Bs(WX),"cz",function(b,c,d,e,f,g,h,i,j){MC(this,b,c,d,e,f,g,h,i,j);},"cG",Bd(AIW),"cg",Bd(ALo),"hl",Bs(ALT),"hb",N(Zk),"iu",function(b,c,d,e,f,g){AIv(this,b,c,d,e,f,g);},"dD",BS(Xk)],SA,0,C,[L$],3,3,0,0,0,J2,"TeaGL30",5,GT,[SA],0,3,0,0,["iz",N(AET),"hX",BS(AKb),"hZ",function(b,c,d,e,f){ATk(this,b,c,d,e,f);},"ix",Bs(AKO),"cl",Bs(AHq)],O8,"TeaGL30Debug",5,J2,[],0,3,0,0,["iz",N(ADi),"hX",BS(Z3),"hZ",function(b,c,d,e,f){ARQ(this,b,c,d,e,f);},"ix",Bs(Y8),"cA",Bs(ZV),"hp",N(APF),"ho",BS(AI1),"g$",
N(Y5),"bb",N(AQk),"hV",Bd(ACw),"hW",BS(AMp),"W",N(AN8),"dV",N(WI),"cw",Bs(XV),"cz",function(b,c,d,e,f,g,h,i,j){AJw(this,b,c,d,e,f,g,h,i,j);},"cG",Bd(ACe),"dD",BS(AEI),"ih",Bs(AH_),"is",Bs(ARb),"he",BS(ADk),"eA",BS(AJb),"eB",BS(AQ3),"ie",N(AKF),"ia",P(ASI),"ic",N(AMJ),"iv",N(ASx),"h0",BS(ZA),"it",N(AMQ),"iW",N(APL),"eC",BS(AF_),"eD",BS(APC),"im",Bs(AJX),"cl",Bs(ADt),"eE",Bd(AA_),"g9",N(XT),"eF",Bd(ASG),"ig",N(YN),"ij",Bs(XW),"ii",N(ARG),"id",Bs(XR),"cg",Bd(Zh),"hl",Bs(AAo),"hb",N(ATp),"iu",function(b,c,d,e,f,
g){AND(this,b,c,d,e,f,g);}],Qz,0,C,[],0,3,0,0,0,EZ,0,BG,[],12,3,0,0,0,TS,0,C,[Cs],3,3,0,0,0,MH,0,C,[TS],0,0,0,0,["jD",P(ACn)],VH,"TeaGL20Debug",5,GT,[],0,3,0,0,["cA",Bs(ASd),"hp",N(ABg),"ho",BS(ACc),"g$",N(AI_),"bb",N(ASZ),"hV",Bd(AGr),"hW",BS(ASp),"W",N(ZD),"dV",N(AHP),"cw",Bs(AKK),"cz",function(b,c,d,e,f,g,h,i,j){ADu(this,b,c,d,e,f,g,h,i,j);},"cG",Bd(ACL),"dD",BS(ASB),"ih",Bs(XO),"is",Bs(WE),"he",BS(WC),"eA",BS(AHh),"eB",BS(AEW),"ie",N(AS_),"ia",P(ALg),"ic",N(ASO),"iv",N(AK_),"h0",BS(AFe),"it",N(AS0),"iW",
N(AJ9),"eC",BS(AHl),"eD",BS(Z1),"im",Bs(AFp),"cl",Bs(Xp),"eE",Bd(ADA),"g9",N(ADI),"eF",Bd(X4),"ig",N(ANK),"ij",Bs(AP3),"ii",N(AIC),"id",Bs(ASn),"cg",Bd(APU),"hl",Bs(ASH),"hb",N(X6),"iu",function(b,c,d,e,f,g){AAX(this,b,c,d,e,f,g);}],TX,0,C,[DG],0,3,0,0,0,Sc,0,C,[],0,3,0,0,0,UK,0,C,[Cs],3,3,0,0,0,Mb,0,C,[UK],0,0,0,0,["jE",P(XG),"jF",P(ABU),"jG",P(Xg)],V1,0,C,[],3,3,0,0,0,V$,0,C,[V1],0,3,0,0,0,Ov,0,DH,[],0,0,0,0,0,UG,"CloneNotSupportedException",25,BF,[],0,3,0,0,0,CB,0,Dj,[],0,3,0,0,0,H,"IndexOutOfBoundsException",
25,Bz,[],0,3,0,0,0,E8,0,C,[Cs],3,3,0,0,0,Qc,0,C,[E8],3,3,0,0,0,RP,0,C,[E8],3,3,0,0,0,RE,0,C,[E8],3,3,0,0,0,Ta,0,C,[E8],3,3,0,0,0,VX,0,C,[E8],3,3,0,0,0]);
C7([T8,0,C,[E8,Qc,RP,RE,Ta,VX],3,3,0,0,0,PQ,0,C,[],3,3,0,0,0,KW,0,C,[Cs],3,3,0,0,0,OS,0,C,[Cs,T8,PQ,KW],1,3,0,0,["jH",N(ALJ),"jI",Bs(APi),"jJ",Bs(AOy),"jK",Bd(ALv),"jL",N(ARr),"jM",P(AAY),"jN",Bd(Xf)],LM,0,C,[],1,3,0,0,0,JT,0,LM,[Mf,Fd,B8],0,3,0,0,0,MV,0,JT,[],0,3,0,0,0,AFF,0,C,[],0,3,0,0,0,GB,0,BG,[],12,3,0,0,0,DJ,0,C,[Cs],1,3,0,0,0,ACJ,0,DJ,[],1,3,0,0,0,ABW,0,DJ,[],1,3,0,0,0,AHr,0,DJ,[],1,3,0,0,0,AKH,0,DJ,[],1,3,0,0,0,AFY,0,DJ,[],1,3,0,0,0,Lr,0,C,[Es],0,0,0,0,["jC",N(AGV)],Ls,0,C,[Es],0,0,0,0,["jC",N(ASq)],Lq,
0,C,[Es],0,0,0,0,["jC",N(AMB)],Sl,0,Dj,[],0,3,0,0,0,US,0,C,[Cs],3,3,0,0,0,Kp,0,C,[US],0,0,0,0,["jO",P(AC4)],ABG,0,DJ,[],1,3,0,0,0,Ry,0,C,[B8],4,3,0,0,0,Ns,0,C,[],3,3,0,0,0,SC,0,C,[Ns],4,3,0,0,0,Z$,0,C,[],4,3,0,0,0,KS,0,C,[],4,3,0,0,0,B7,"ReflectionException",9,BF,[],0,3,0,0,0,EK,0,C,[],4,3,0,BD,0,Rc,0,C,[],3,3,0,0,0,Km,0,C,[Rc],0,0,0,0,0,HQ,"Iterator",21,C,[],3,3,0,0,0,Kl,0,C,[HQ],0,0,0,0,0,Ul,0,C,[Ns],0,0,0,0,0,Cu,"NumberFormatException",25,Bk,[],0,3,0,0,0,KJ,0,Bz,[],0,3,0,0,0,Ey,0,BF,[],0,3,0,0,0,Hj,"NoSuchMethodException",
25,Ey,[],0,3,0,0,0,Df,"NullPointerException",25,Bz,[],0,3,0,0,0,Cb,0,C,[],1,0,0,0,["fA",Bd(ACi),"f4",BS(AFf),"fn",P(AAn),"T",P(ANY),"e8",N(AQA),"fm",N(AQy),"fK",P(ASf),"e4",P(Ih)],MR,0,C,[Kn],0,3,0,0,0,AR1,0,C,[Cs],1,3,0,0,0,AEk,0,C,[Cs],1,3,0,0,0,ATK,0,C,[Cs],1,3,0,0,0,KZ,0,C,[Cs],3,3,0,0,0,Ml,0,C,[KZ],0,3,0,0,["jP",N(AQI)],AFU,0,C,[Cs],1,3,0,0,0,Mk,0,C,[KZ],0,3,0,0,["jP",N(YT)],N5,0,C,[],3,3,0,0,0,Hv,0,C,[N5,Fd],0,0,0,0,0]);
C7([IG,0,Hv,[],0,0,0,0,0,Dt,0,Cb,[],0,0,0,DZ,["fI",Bd(Zg),"fJ",P(AFP),"gi",N(ZY)],To,0,C,[],0,0,0,0,0,Cj,"PatternSyntaxException",22,Bk,[],0,3,0,0,["c4",P(AR9)],Zo,0,C,[],0,3,0,0,0,KI,0,C,[DG],3,3,0,0,0,L8,0,C,[KI],1,3,0,0,0,R$,0,C,[KI],3,3,0,0,0,Ot,0,C,[R$],3,3,0,0,0,KK,0,L8,[Ot],1,3,0,0,0,TF,0,C,[],3,3,0,0,0,KH,0,KK,[Fd,B8,TF],0,3,0,0,0,R5,0,Dt,[],0,0,0,0,["fI",Bd(X3),"fJ",P(ABY),"gi",N(AOs)],V_,0,Dt,[],0,0,0,0,["fI",Bd(ABy),"fJ",P(AG6)],Qt,0,Dt,[],0,0,0,0,["fI",Bd(AAk),"fJ",P(AQr)],SN,0,Dt,[],0,0,0,0,["fI",
Bd(Yq),"fJ",P(AO4),"gi",N(AMd)],Gv,0,Dt,[],0,0,0,0,["fI",Bd(AQ4),"fJ",P(AAF)],Cx,0,Cb,[],1,0,0,0,["fI",Bd(ATa),"f1",P(APH),"gi",N(AGX)],Fe,0,Cx,[],0,0,0,0,["f2",Bs(AOQ),"fA",Bd(ADH),"f4",BS(ABf),"fJ",P(AFR),"gi",N(Yi)],Cn,0,Cb,[],0,0,0,0,["fI",Bd(AFh),"e8",N(AL6),"fJ",P(AHe),"fm",N(AIA),"gi",N(ANc),"e4",P(AA9)],J0,0,Cn,[],0,0,0,0,["fI",Bd(ALF),"fJ",P(AIQ),"gi",N(ANQ)],Eo,0,J0,[],0,0,0,0,["fI",Bd(ACq),"e8",N(ANl),"fJ",P(Yc)],Oh,0,Eo,[],0,0,0,0,["fI",Bd(ALW),"gi",N(AQD),"fJ",P(ASb)],U$,0,Eo,[],0,0,0,0,["fI",Bd(ZN),
"gi",N(APX),"fJ",P(AE1)],RC,0,Eo,[],0,0,0,0,["fI",Bd(AA0),"gi",N(ATM),"fJ",P(AK$)],S$,0,Eo,[],0,0,0,0,["fI",Bd(Xb),"gi",N(AN$),"fJ",P(AAl)],Gk,0,Cn,[],0,0,0,0,["fI",Bd(XI),"fA",Bd(AI2),"f4",BS(AOz),"fm",N(AIq),"fK",P(AL8),"e4",P(ASo)],AKo,0,C,[],4,3,0,0,0,JP,"ArrayStoreException",25,Bz,[],0,3,0,0,0,HN,0,C,[],1,0,0,0,0,Bp,0,HN,[],1,0,0,0,["gc",P(ZQ),"f7",P(YM),"fx",P(APw),"fw",P(AR_)],Kj,"MissingResourceException",21,Bz,[],0,3,0,0,0,CH,0,Bp,[],0,0,0,0,["gf",N(ABl),"gc",P(ATH),"f7",P(ADq),"fx",P(AQp),"T",P(AKy),
"fw",P(ADU)],EE,0,Cb,[],1,0,0,0,["fm",N(AOB),"gi",N(AQZ),"e4",P(AJH)],DC,0,EE,[],0,0,0,0,["fI",Bd(Xd),"fJ",P(AA5)],Fn,0,DC,[],0,0,0,0,["fI",Bd(Zj),"fJ",P(ZU)],DE,0,EE,[],0,0,0,0,["fI",Bd(XF),"fJ",P(AGp)],Fl,0,DC,[],0,0,0,0,["fI",Bd(AI9),"e8",N(ATR)],Vl,0,DC,[],0,0,0,0,["fI",Bd(ASW),"fA",Bd(AKn)],Nu,0,C,[],4,0,0,0,0,Bx,0,C,[],1,0,0,0,0,OE,0,HN,[Fd],0,0,0,0,["T",P(Mw)],Pk,0,Cb,[],0,0,0,0,["fI",Bd(AHB),"fJ",P(ALR),"gi",N(AL5)],Bm,0,C,[Fd,B8],0,3,0,0,0,On,0,Cn,[],0,0,0,0,["fJ",P(AMf)],Hi,0,Cn,[],0,0,0,0,["fI",Bd(Y$),
"e8",N(ALC),"fJ",P(AMH),"gi",N(AAt),"fm",N(ZP)],DQ,0,Cn,[],0,0,0,0,["fI",Bd(ADe),"fJ",P(AR0),"gf",N(AEd),"fm",N(Y0),"e8",N(APm),"gi",N(ADw)],Kd,0,DQ,[],0,0,0,0,["gf",N(AGY),"fJ",P(ASv)],KP,0,Cx,[],0,0,0,0,["f2",Bs(AHE),"fJ",P(Z8)],Ed,0,Cx,[],0,0,0,0,["f2",Bs(WD),"fJ",P(AHW),"fm",N(AL7)]]);
C7([Ix,0,Cn,[],0,0,0,0,["e8",N(AI8),"fJ",P(AOb),"fI",Bd(W0),"fm",N(AAf),"gi",N(AQt)],Eb,0,Cx,[],0,0,0,0,["f1",P(AHf),"f2",Bs(AFC),"fA",Bd(AC9),"f4",BS(AHp),"fJ",P(AQN),"fm",N(AQi)],Nz,0,Cx,[],0,0,0,0,["f2",Bs(WN),"fJ",P(ALz)],Ka,0,Cx,[],0,0,0,0,["f2",Bs(Xw),"fJ",P(AFZ)],Fs,0,Cn,[],0,0,0,0,["e8",N(ASj),"fI",Bd(ALD),"fJ",P(ALh),"fm",N(AHG),"gi",N(ANo)],V2,0,Fs,[],0,0,0,0,0,Tx,0,Fs,[],0,0,0,0,0,Wv,0,DE,[],0,0,0,0,["fI",Bd(ABF)],Qp,0,DE,[],0,0,0,0,["fI",Bd(AJ_)],GR,0,DE,[],0,0,0,0,["fI",Bd(APf),"e8",N(ARd)],P_,
0,GR,[],0,0,0,0,["fI",Bd(AHn),"e8",N(AKL)],Gb,0,DE,[],0,0,0,0,["fI",Bd(ATB),"fJ",P(ARn)],OH,0,Gb,[],0,0,0,0,["fI",Bd(AGq)],RW,0,DE,[],0,0,0,0,["fI",Bd(ASz)],Q7,0,GR,[],0,0,0,0,["fI",Bd(AAv)],Ub,0,Gb,[],0,0,0,0,["fI",Bd(YA)],RX,0,EE,[],0,0,0,0,["fI",Bd(ATe),"fA",Bd(APy),"fJ",P(AMP)],Pt,0,EE,[],0,0,0,0,["fI",Bd(AL9),"fA",Bd(W8),"fJ",P(AOk)],HC,0,C,[],1,0,0,0,0,Wx,0,DC,[],0,0,0,0,["fI",Bd(YF)],Vg,0,Fl,[],0,0,0,0,["fI",Bd(AJ4)],P1,0,Fn,[],0,0,0,0,["fI",Bd(AOD)],QZ,0,DC,[],0,0,0,0,["fI",Bd(ALZ)],TA,0,Fl,[],0,0,0,
0,["fI",Bd(YR)],RD,0,Fn,[],0,0,0,0,["fI",Bd(AOW)],LL,0,Cb,[],4,0,0,0,["fI",Bd(AIu),"gi",N(AGG),"fJ",P(AJ5)],K9,0,Cb,[],0,0,0,0,["fI",Bd(ZM),"gi",N(AAa),"fJ",P(ATw)],Pn,0,Cb,[],0,0,0,0,["fI",Bd(AG4),"gi",N(ATt),"fJ",P(Zs)],Nx,0,Cb,[],4,0,0,0,["fI",Bd(AM3),"gi",N(ABq),"fJ",P(AJe)],Vv,0,Cb,[],0,0,0,0,["fI",Bd(ALr),"gi",N(WK),"fJ",P(AFg)],OO,0,Cb,[],0,0,0,0,["fI",Bd(AA7),"gi",N(AEL),"fJ",P(Y4)],Vr,0,Cn,[],0,0,0,0,["fI",Bd(ASE),"fJ",P(ACy),"e8",N(AAi),"fn",P(AKV),"gi",N(AAg)],PV,0,Cn,[],4,0,0,0,["fI",Bd(ALj),"fJ",
P(ABD),"e8",N(AOi),"fn",P(Wy),"gi",N(AS9)],Vh,0,Cb,[],4,0,0,0,["fI",Bd(AHS),"gi",N(AEl),"fJ",P(AIH)],SQ,0,Cb,[],0,0,0,0,["fI",Bd(ALp),"gi",N(AD8),"fJ",P(X9)],Oe,0,Cb,[],0,0,0,0,["fI",Bd(AGx),"gi",N(ABv),"fJ",P(AEP)],GH,0,Cn,[],0,0,0,0,["fI",Bd(YJ),"e8",N(ANi),"fJ",P(Yf),"gi",N(ANR)],Vp,0,GH,[],0,0,0,0,["fI",Bd(ABE),"fA",Bd(AQB),"f4",BS(X_),"fm",N(AJS),"fJ",P(AQ$)],Rw,0,GH,[],0,0,0,0,["fI",Bd(AIV),"fJ",P(AAb)],Pj,0,Bc,[IS],0,3,0,0,["gw",BS(ADW),"jA",Bd(ZT),"c9",N(AAE),"dd",Bs(APD)],R1,0,Cx,[],0,0,0,0,["f2",Bs(ACg),
"fA",Bd(ZE),"f4",BS(AEE),"fJ",P(ALL),"fm",N(AFO)],Ob,0,Cx,[],0,0,0,0,["f2",Bs(AI5),"fJ",P(AF0)],OK,0,Cx,[],0,0,0,0,["f2",Bs(AOF),"fJ",P(AQo)],ATS,0,C,[],4,3,0,0,0,N_,0,Cx,[],0,0,0,0,["f2",Bs(AOJ),"fJ",P(ATu)],HF,0,Cn,[],0,0,0,0,["e8",N(ALV),"fI",Bd(KX),"fA",Bd(AFI),"f4",BS(ACv),"fJ",P(APQ),"fm",N(XZ),"gi",N(AP5)],HL,0,Cn,[],0,0,0,0,["e8",N(AAB),"fI",Bd(Kb),"fA",Bd(AMw),"f4",BS(AOE),"fJ",P(ASC),"fm",N(ACk),"gi",N(AMI)],Eu,0,Cx,[],0,0,0,0,["f2",Bs(ANS),"fA",Bd(AKD),"f4",BS(AAz),"fJ",P(ARe),"fm",N(ANu)],JA,0,HC,
[],0,0,0,0,["gy",N(AAN),"gA",Bs(ANE)],JB,0,HC,[],0,0,0,0,["gy",N(AOZ),"gA",Bs(AR5)]]);
C7([T_,0,C,[],0,0,0,0,0,Jg,0,Bx,[],0,0,0,0,["fR",P(AGa)],IF,0,Bx,[],0,0,0,0,["fR",P(AIX)],TW,0,Bx,[],0,0,0,0,["fR",P(AOp)],Uy,0,Bx,[],0,0,0,0,["fR",P(AP6)],UD,0,Bx,[],0,0,0,0,["fR",P(ADf)],Ja,0,Bx,[],0,0,0,0,["fR",P(ABk)],Jx,0,Ja,[],0,0,0,0,["fR",P(AEf)],Wo,0,Bx,[],0,0,0,0,["fR",P(AFH)],J8,0,Jx,[],0,0,0,0,["fR",P(WR)],RZ,0,J8,[],0,0,0,0,["fR",P(AJJ)],Sq,0,Bx,[],0,0,0,0,["fR",P(AB$)],Ql,0,Bx,[],0,0,0,0,["fR",P(AJB)],P8,0,Bx,[],0,0,0,0,["fR",P(AR$)],UI,0,Bx,[],0,0,0,0,["fR",P(AKR)],Ww,0,Bx,[],0,0,0,0,["fR",P(W2)],T$,
0,Bx,[],0,0,0,0,["fR",P(AGB)],TO,0,Bx,[],0,0,0,0,["fR",P(ANW)],U9,0,Bx,[],0,0,0,0,["fR",P(AB8)],O5,0,Bx,[],0,0,0,0,["fR",P(ACG)],OF,0,Bx,[],0,0,0,0,["fR",P(ARW)],Ug,0,Bx,[],0,0,0,0,["fR",P(WO)],Us,0,Bx,[],0,0,0,0,["fR",P(AH7)],QG,0,Bx,[],0,0,0,0,["fR",P(ACU)],Sv,0,Bx,[],0,0,0,0,["fR",P(AEQ)],V3,0,Bx,[],0,0,0,0,["fR",P(AIb)],Up,0,Bx,[],0,0,0,0,["fR",P(AQv)],Rp,0,Bx,[],0,0,0,0,["fR",P(AMV)],QF,0,Bx,[],0,0,0,0,["fR",P(AKG)],Ws,0,Bx,[],0,0,0,0,["fR",P(AOd)],Io,0,Bx,[],0,0,0,0,["fR",P(AIz)],Vc,0,Io,[],0,0,0,0,["fR",
P(AKe)],R2,0,Jg,[],0,0,0,0,["fR",P(ZB)],QA,0,IF,[],0,0,0,0,["fR",P(AFw)],Bu,0,Bx,[],0,0,0,0,["fR",P(AID)],Qw,0,Bx,[],0,0,0,0,["fR",P(ARH)],LP,0,Bx,[],0,0,0,0,["fR",P(AD0)],LW,0,Bx,[],0,0,0,0,["fR",P(WP)],D1,"NegativeArraySizeException",25,Bz,[],0,3,0,0,0,Yt,0,C,[],0,0,0,0,0,ACl,0,C,[],4,0,0,0,0,AAu,0,C,[],4,3,0,0,0,UM,0,C,[],0,3,0,0,0,In,0,C,[],0,3,0,0,0,M4,0,C,[],0,3,0,0,0,AFE,0,C,[],4,3,0,0,0,AOq,0,C,[],4,3,0,0,0,QR,0,DH,[],0,0,0,0,["g2",N(APz),"i4",N(ACY),"i3",Bs(AKr)],CP,0,BG,[],9,3,0,Iy,0,FI,0,Hv,[],0,
0,0,0,0]);
C7([AS4,0,C,[],3,3,0,0,0,TY,0,C,[Cs],3,3,0,0,0,Qu,0,C,[TY,Cs],1,3,0,0,["jQ",Bs(ARO),"jR",N(AK4),"jS",Bs(AAC),"jT",Bd(AHs),"jU",Bd(AO8)],MD,0,C,[Es],0,0,0,0,["jC",N(AJd)],Fr,0,BG,[],12,3,0,0,0,AGv,0,C,[],0,3,0,0,0,RR,0,C,[],3,3,0,0,0,Hy,0,MR,[RR],0,3,0,0,["T",P(Zb)],W,"StringIndexOutOfBoundsException",25,H,[],0,3,0,0,0,Vj,0,Bp,[],0,0,0,0,["gf",N(ADo)],Vi,0,Bp,[],0,0,0,0,["gf",N(XC)],Py,0,Bp,[],0,0,0,0,["gf",N(AIm),"T",P(AE8)],PF,0,Bp,[],0,0,0,0,["gf",N(ANU)],PC,0,Bp,[],0,0,0,0,["gf",N(AOI)],PD,0,Bp,[],0,0,0,
0,["gf",N(AI4)],PJ,0,Bp,[],0,0,0,0,["gf",N(ACK)],PK,0,Bp,[],0,0,0,0,["gf",N(WB)],PH,0,Bp,[],0,0,0,0,["gf",N(AFj)],PI,0,Bp,[],0,0,0,0,["gf",N(AI6)],PL,0,Bp,[],0,0,0,0,["gf",N(AQE)],PM,0,Bp,[],0,0,0,0,["gf",N(ABO)],Px,0,Bp,[],0,0,0,0,["gf",N(ATT)],P3,0,Bp,[],0,0,0,0,["gf",N(AFs)],Pv,0,Bp,[],0,0,0,0,["gf",N(ABL)],Pw,0,Bp,[],0,0,0,0,["gf",N(AEi)],PB,0,Bp,[],0,0,0,0,["gf",N(AG9)],Pu,0,Bp,[],0,0,0,0,["gf",N(AQd)],Pz,0,Bp,[],0,0,0,0,["gf",N(ZZ)],PA,0,Bp,[],0,0,0,0,["gf",N(AME)],IA,0,C,[],0,0,0,0,0,Gu,0,C,[Gy],0,3,
0,0,0,BN,"IllegalStateException",25,Bz,[],0,3,0,0,0,IN,"IllegalMonitorStateException",25,Bz,[],0,3,0,0,0,ANZ,0,C,[],0,3,0,0,0,AEm,0,C,[],4,3,0,0,0,XX,0,C,[Cs],1,3,0,0,0,F7,0,C,[],3,3,0,0,0,Wb,0,C,[F7],0,3,0,0,["c3",P(AQG)],U2,0,CP,[],12,0,0,0,0,U3,0,CP,[],12,0,0,0,0,U7,0,CP,[],12,0,0,0,0,U8,0,CP,[],12,0,0,0,0,U5,0,CP,[],12,0,0,0,0,U6,0,CP,[],12,0,0,0,0,U0,0,CP,[],12,0,0,0,0,U1,0,CP,[],12,0,0,0,0,UY,0,CP,[],12,0,0,0,0,OJ,0,C,[],3,3,0,0,0,Sg,0,C,[OJ],0,3,0,0,0,Q5,0,C,[Cs],4,3,0,0,0]);
C7([RQ,0,C,[],3,3,0,0,0,Rx,0,C,[RQ],0,0,0,0,["e",N(AHA),"gZ",N(ASu)],ST,0,C,[F7],0,3,0,0,0,OG,0,Gk,[],0,0,0,0,["fA",Bd(AD7),"f4",BS(ATA),"fK",P(ABo)],SU,0,Bp,[],0,0,0,0,["gf",N(AQ2)],Ok,0,Bp,[],0,0,0,0,["gf",N(Zu)],Sf,0,Bp,[],0,0,0,0,["gf",N(YQ)],Se,0,Bp,[],0,0,0,0,["gf",N(ADX)],VD,0,Bp,[],0,0,0,0,["gf",N(AGN)],PW,0,Bp,[],0,0,0,0,["gf",N(AQ6)],Pf,0,Bp,[],0,0,0,0,["gf",N(ALK)],Rh,0,Bp,[],0,0,0,0,["gf",N(AN6)],Og,0,Bp,[],0,0,0,0,["gf",N(AS3)],Oj,0,Bp,[],0,0,0,0,["gf",N(ACs)],O9,0,Bp,[],0,0,0,0,["gf",N(ARz)],Qd,
0,Bp,[],0,0,0,0,["gf",N(AJx)],Qi,0,Bp,[],0,0,0,0,["gf",N(ANg)],Tn,0,Bp,[],0,0,0,0,["gf",N(AQF)],SD,0,Bp,[],0,0,0,0,["gf",N(ASr)],Ow,0,Bp,[],0,0,0,0,["gf",N(AB9)],JY,0,Bp,[],0,0,0,0,["gf",N(ALP)],R6,0,JY,[],0,0,0,0,["gf",N(APn)],YS,0,C,[HQ],0,0,0,0,0,GZ,0,Gu,[],0,0,0,0,["c3",P(AL3)],Ox,0,C,[],32,0,0,Mz,0,Vd,0,C,[Cs,E8],1,3,0,0,["jV",Bs(AIx),"jW",Bs(AJA),"jX",Bd(Xe),"jY",N(Xs),"jZ",Bd(AFm)],G2,0,C,[Cs],3,3,0,0,0,Ki,0,C,[G2],0,0,0,0,["jC",N(AGW)],AJ8,0,C,[],0,3,0,0,0,Cr,"Array$ArrayIterator",8,C,[HQ,DG],0,3,0,
0,0,C0,0,C,[DG],0,3,0,0,0,Il,0,C,[],4,3,0,0,0,Oz,0,C,[Gy],0,0,0,0,0,Wd,0,C,[],3,3,0,0,0,S6,0,C,[Wd],3,3,0,0,0,TV,0,C,[],3,3,0,0,0,Hq,0,C,[S6,TV],1,3,0,0,0,Iq,0,Hq,[],0,3,0,0,0,IM,0,Iq,[],0,3,0,0,0,Hk,0,IM,[],1,3,0,0,0,CO,0,Hk,[],0,3,0,0,["j0",N(AG_)],G0,0,C,[G2],0,0,0,0,["jC",N(AK9)],ZI,0,C,[],0,0,0,0,0,Ck,0,Hq,[],0,3,0,0,0,Ko,0,C,[Dn],1,3,0,0,0,NQ,0,Ko,[],0,3,0,0,0,JC,"IllegalCharsetNameException",24,Bk,[],0,3,0,0,0,K2,0,C,[CW],3,3,0,0,0,HY,0,C,[K2],0,3,0,HW,0,RK,0,C,[],3,3,0,0,0]);
C7([KQ,0,C,[RK],1,3,0,0,0,TB,0,KQ,[],0,3,0,0,0,Wm,"NoSuchElementException",21,Bz,[],0,3,0,0,0,S,"GdxRuntimeException",8,Bz,[],0,3,0,0,0,ACo,0,C,[],4,3,0,0,0,El,0,C,[F7],0,3,0,0,["c3",P(Y6)],ADD,0,C,[],4,3,0,0,0,V7,0,C,[],32,0,0,Nw,0,Nr,"ConcurrentModificationException",21,Bz,[],0,3,0,0,0,NU,0,C,[],1,3,0,0,0,SP,0,NU,[],0,3,0,0,0,Un,"ActorValvula",19,CE,[CW],0,3,0,0,["bP",Bs(XQ),"be",N(ADG)],Pd,"ActorValvulaAbierta",19,CE,[CW],0,3,0,0,["bP",Bs(AIk),"be",N(AOo)],TM,"ActorFondo",19,CE,[CW],0,3,0,0,["bP",Bs(ACj)],FG,
0,Hk,[],0,3,0,0,["j0",N(AEO)],ACC,0,Ev,[Dn],0,3,0,0,0,AMa,0,C,[],0,0,0,0,0,AM7,0,C,[],4,3,0,0,0,MI,0,C,[],0,3,0,0,0,GP,0,BG,[],12,3,0,0,0,Jf,0,C,[CW],0,3,0,0,0,NB,0,C,[],1,3,0,0,0,QB,0,NB,[],0,3,0,0,0,Hw,0,C,[B8,Dn],0,3,0,0,0,Ua,0,B2,[],0,0,0,0,0,Ni,0,C,[],3,3,0,0,0,Vk,0,C,[],3,3,0,0,0,Ph,0,C,[F7,Ni,Vk],0,0,0,0,["c3",P(AM8)],Po,0,C,[DG,Dn],4,3,0,0,0,L7,0,C,[CW],0,3,0,Id,0,M_,0,Bg,[],0,3,0,0,0,K3,0,Bg,[],0,3,0,0,0,Ux,0,C,[],0,3,0,0,0,Wq,0,C,[],32,0,0,MF,0,Jp,0,C,[CW],3,3,0,0,0,IY,0,C,[Jp],0,3,0,0,["jc",P(AEK),
"jd",P(ANJ),"hc",Bd(ALb),"hS",Bs(ADx),"h1",Bs(Zd)],Ks,0,C,[CW],3,3,0,0,0,Hx,0,C,[Ks],0,3,0,0,["hU",P(AFT),"hY",P(XY),"g7",Bd(AKJ),"hd",N(YX),"g_",P(ARx),"h2",P(AN2)],PX,0,C,[Jp],0,3,0,0,["jc",P(AAO),"jd",P(ABZ),"hc",Bd(ZK),"hS",Bs(AKt),"h1",Bs(ADy)],Sb,0,C,[Ks],0,3,0,0,["hU",P(AM_),"hY",P(W6),"g7",Bd(AGA),"hd",N(AP9),"g_",P(AHt),"h2",P(AAr)],Ln,0,C,[Jp],0,3,0,Lt,["jc",P(Zr),"jd",P(AKz),"hc",Bd(ZF),"hS",Bs(APM),"h1",Bs(ACI)],Pb,0,IY,[],0,3,0,0,0,Qn,0,Hx,[],0,3,0,0,0,Uc,0,C,[DG],0,3,0,0,0,ANp,0,C,[],4,3,0,0,0,EN,
0,C,[],1,3,0,0,0,Ek,0,EN,[Dn],1,3,0,0,["ck",N(AMq),"cj",N(AR2)],G$,0,EN,[Dn],1,3,0,0,0,G9,0,EN,[Dn],1,3,0,0,0,E2,0,EN,[Dn],1,3,0,0,["ck",N(AMh),"cj",N(Ya)]]);
C7([Hm,0,C,[],4,3,0,0,0,AGn,0,C,[],0,3,0,0,0,Eg,0,C,[],3,3,0,0,0,CY,0,E2,[Eg],0,0,0,0,["eq",P(ATO)],AJY,0,C,[Cs],1,3,0,0,0,S9,0,C,[],3,3,0,0,0,K4,0,C,[S9],0,3,0,0,0,FH,0,C,[CW],0,3,0,Gt,0,Hp,0,G9,[],1,0,0,0,0,Gf,0,Hp,[],0,0,0,0,["iy",N(AK6),"iL",Bs(AIP),"iB",P(WV)],Hf,0,Ek,[],1,0,0,0,0,H5,0,Hf,[],0,0,0,0,["iM",N(AMF),"iC",Bs(ALm),"iB",P(ALI)],JK,0,BG,[],12,3,0,0,0,Ii,0,BG,[],12,3,0,0,0,Ku,0,C,[],0,3,0,0,0,Va,0,Ku,[],0,3,0,0,0,L2,0,C,[CW],0,3,0,0,0,H4,0,G$,[],1,0,0,0,0,JQ,0,H4,[],0,0,0,0,["iR",N(AEq),"iD",Bs(AG2),
"iB",P(AB6)],AKW,0,C,[Cs],1,3,0,0,0,EF,0,BG,[],12,3,0,0,0,HZ,0,BG,[],12,3,0,0,0,QP,0,C,[KW],1,3,0,0,["jH",N(ATc),"j1",P(AAW)],HT,0,Hp,[Eg],1,0,0,0,["iB",P(AIf)],Pa,0,HT,[],0,0,0,0,["iy",N(AEh),"iL",Bs(WT)],S0,0,HT,[],0,0,0,0,["iy",N(APK),"iL",Bs(Ze)],Hh,0,Hf,[Eg],1,0,0,0,["iB",P(ALX),"eq",P(ANn)],OT,0,Hh,[],0,0,0,0,["iM",N(AIp),"iC",Bs(ANh)],Rq,0,Hh,[],0,0,0,0,["iM",N(W7),"iC",Bs(AIc)],G7,0,H4,[Eg],1,0,0,0,["iB",P(AFM),"eq",P(AN0)],OI,0,G7,[],0,0,0,0,["iR",N(ABN),"iD",Bs(AAR)],Qy,0,G7,[],0,0,0,0,["iR",N(AKS),
"iD",Bs(ABP)],Lu,0,Bz,[],0,3,0,0,0,FV,"ReadOnlyBufferException",23,Lu,[],0,3,0,0,0,Nm,"BufferUnderflowException",23,Bz,[],0,3,0,0,0,FX,0,BG,[],12,3,0,0,0,EP,0,BG,[],12,3,0,0,0,AC2,0,C,[],4,3,0,0,0,I_,0,BG,[],12,0,0,0,0,Dy,0,BG,[],12,3,0,0,0,AM1,0,C,[F7,Ni],3,0,0,0,0,Iz,0,BG,[],12,3,0,0,0,AL0,0,C,[],0,3,0,0,0,Tj,0,C,[],32,0,0,LC,0,IR,"BufferOverflowException",23,Bz,[],0,3,0,0,0,QI,"ActorGas",19,CE,[CW],0,3,0,0,["bP",Bs(AMU),"be",N(AOv)],UE,0,C,[],0,3,0,NI,0,AC6,0,C,[],0,3,0,0,0,M2,0,C,[G2],0,0,0,0,["jC",N(AF2)],N8,
"VerificaAccion",19,BP,[],0,3,0,0,["bu",N(AJK)]]);
C7([O_,0,C,[],0,3,0,0,0,Jy,0,BG,[],12,3,0,0,0,N4,"Predicate",8,C,[],3,3,0,0,0,Uo,0,C,[CW],0,3,0,0,0,MB,"InstantiationException",25,Ey,[],0,3,0,0,0,J_,"IllegalAccessException",25,Ey,[],0,3,0,0,0,ON,0,Ey,[],0,3,0,0,0,P6,0,C,[],3,3,0,0,0,LG,0,C,[P6],0,3,0,0,0,G8,0,BG,[],12,3,0,0,0,AEp,0,C,[],4,3,0,0,0,SG,0,C,[],0,3,0,0,0,I7,0,C,[],1,3,0,NF,0,Rj,0,I7,[],0,3,0,0,0,Ia,0,BG,[],12,3,0,0,0,Sa,0,C,[IS,JX],0,3,0,0,0,QS,0,DH,[],0,0,0,0,0,P$,0,C,[],3,3,0,0,0,Ro,0,C,[P$],0,3,0,0,0,Ve,0,C,[K2],3,3,0,0,0,Ha,0,C,[],0,0,0,M0,
["jh",P(AC7),"jw",P(AHx),"jv",P(AKT),"jj",N(AHF),"jg",P(AHQ)],Ez,0,C,[],1,0,0,0,0,Hz,0,Ez,[],1,0,0,0,0,RU,0,Hz,[],0,0,0,0,0,Tq,0,Ha,[],0,0,0,0,["jh",P(ASc),"jw",P(ATP),"jv",P(ALS),"jg",P(LF),"jj",N(N$)],So,0,Hz,[],0,0,0,0,0,RS,0,Ez,[],0,0,0,0,0,TR,0,Ez,[],0,0,0,0,0,RL,0,Ez,[],0,0,0,0,0,Me,0,C,[],0,3,0,0,0,QQ,0,DH,[],0,0,0,0,["g2",N(Zq),"i4",N(Xc),"i3",Bs(AJf)],OD,0,C,[],32,0,0,Ng,0,ARK,0,C,[],0,3,0,0,0,F0,0,Gu,[],0,0,0,0,["c3",P(AAG)],OB,0,DH,[],0,0,0,0,["g2",N(AAK),"i4",N(AJ2),"i3",Bs(Y_)],XN,0,C,[],0,0,0,
0,0,OC,0,DH,[],0,0,0,0,["g2",N(AEA),"i4",N(XP),"i3",Bs(AFr)],KB,0,C,[G2],0,0,0,0,["jC",N(ASk)],ABe,0,C,[],0,3,0,0,0,K7,0,C,[Es],0,0,0,0,["jC",N(ADp)]]);
let AYw=D8(Ci),AYs=D8(KG),AYt=D8(AX3),AYu=D8(AX4),AYv=D8(BV),AYr=D8(AJV),AYx=D8(CD);AVc(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
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
C.prototype.__teavm_class__=function(){return AUV(this);};
ARI.main=AV9(AGM);
ARI.main.javaException=AVH;
let Br=Symbol('jsoClass');
(function(){var c;c=Jn.prototype;c[Br]=true;c.onAnimationFrame=c.jB;c=Mh.prototype;c[Br]=true;c.handleEvent=c.jC;c=Kf.prototype;c[Br]=true;c.handleEvent=c.jC;c=Kg.prototype;c[Br]=true;c.handleEvent=c.jC;c=MH.prototype;c[Br]=true;c.fullscreenChanged=c.jD;c=Mb.prototype;c[Br]=true;c.denied=c.jG;c.prompt=c.jF;c.granted=c.jE;c=OS.prototype;c.removeEventListener=c.jK;c.dispatchEvent=c.jL;c.get=c.jH;c.addEventListener=c.jN;Object.defineProperty(c,"length",{get:c.jM});c=Lr.prototype;c[Br]=true;c.handleEvent=c.jC;c
=Ls.prototype;c[Br]=true;c.handleEvent=c.jC;c=Lq.prototype;c[Br]=true;c.handleEvent=c.jC;c=Kp.prototype;c[Br]=true;c.unlockFunction=c.jO;c=Ml.prototype;c[Br]=true;c.accept=c.jP;c=Mk.prototype;c[Br]=true;c.accept=c.jP;c=Qu.prototype;c.removeEventListener=c.jU;c.dispatchEvent=c.jR;c.addEventListener=c.jT;c=MD.prototype;c[Br]=true;c.handleEvent=c.jC;c=Q5.prototype;c[Br]=true;c=Vd.prototype;c.removeEventListener=c.jX;c.dispatchEvent=c.jY;c.addEventListener=c.jZ;c=Ki.prototype;c[Br]=true;c.handleEvent=c.jC;c=G0.prototype;c[Br]
=true;c.handleEvent=c.jC;c=QP.prototype;c.get=c.jH;Object.defineProperty(c,"length",{get:c.j1});c=M2.prototype;c[Br]=true;c.handleEvent=c.jC;c=KB.prototype;c[Br]=true;c.handleEvent=c.jC;c=K7.prototype;c[Br]=true;c.handleEvent=c.jC;})();
}));
