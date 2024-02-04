"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(ARI){let AYh=2463534242,E3=()=>{let x=AYh;x^=x<<13;x^=x>>>17;x^=x<<5;AYh=x;return x;},P=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bu=f=>function(p1,p2){return f(this,p1,p2);},Bd=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BS=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AWU=f=>function(){let args=Array.prototype.slice.apply(arguments);AYi(function(){f.apply(this,args);});},AWf=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=Q(FS(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=T(args[i]);}AYi(()=>{f.call(null,javaArgs);},callback);},BQ=target=>target.$clinit=()=>{},AUX=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},F=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=FS();}return function(){superclass.call(this);};},M=cls=>AWC(cls),FS=()=>C,Xd=()=>{{return ATV();}},Kc=t=>{{return AM0(t);}};let AYj=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AYk=(name,binaryName)=>{let cls
=AYj();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Cl=AYk("boolean","Z"),KL=AYk("char","C"),AYl=AYk("byte","B"),AYm=AYk("short","S"),BY=AYk("int","I"),AJ0=AYk("long","J"),CF=AYk("float","F"),ADl=AYk("double","D"),Bh=AYk("void","V");let AYn=new ArrayBuffer(16),AYo=new DataView(AYn),AYp=new Float32Array(AYn),AYq=new Float64Array(AYn),AYr=new Int32Array(AYn),
AX5;if(typeof BigInt!=='function'){AX5=n=>{AYo.setFloat64(0,n,true);return new AYs(AYo.getInt32(0,true),AYo.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AX5=n=>{AYo.setFloat64(0,n,true);let lo=AYo.getInt32(0,true),hi=AYo.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AYt=new BigInt64Array(AYn);AX5=n=>{AYq[0]=n;return AYt[0];};}let Gl=n=>{AYp[0]=n;return AYr[0];},Ll=n=>{AYr[0]=n;return AYp[0];},BT=(a,b)=>a>b?1:a<b? -1:a===b?0:1,Dr
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},D9=(a,b)=>(a>>>0)/(b>>>0)>>>0,AWa=(a,b)=>(a>>>0)%(b>>>0)>>>0,EY=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AYs(lo,hi){this.lo=lo|0;this.hi=hi|0;}AYs.prototype.__teavm_class__=()=>{return "long";};let AYu=a=>(a.hi&0x80000000)===0,AYv=a=>(a.hi&0x80000000)!==0,AYw=1<<18,Cc,E,V,D8,AVX,Bl,AYx;if(typeof BigInt!=="function"){AYs.prototype.toString=function(){let result=[],n=this,
positive=AYu(n);if(!positive){n=AWs(n);}let radix=new AYs(10,0);do {let divRem=AYx(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AYs.prototype.valueOf=function(){return AVX(this);};Cc=new AYs(0,0);V=val=>new AYs(val, -(val<0)|0);D8=val=>val>=0?new AYs(val|0,val/0x100000000|0):AWs(new AYs( -val|0, -val/0x100000000|0));E=(lo,hi)=>new AYs(lo,hi);AVX=val=>0x100000000*val.hi+(val.lo>>>0);Bl=
val=>val.lo;}else {Cc=BigInt(0);E=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));V=val=>BigInt.asIntN(64,BigInt(val|0));D8=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));AVX=val=>Number(val);Bl=val=>Number(BigInt.asIntN(32,val))|0;}let D7,ADw,ACK,AU4,AU9,AC_,AWx,C8,AGt,AYy,Ba,M5,XG,AWz,AWs,C7,ADv,Ib,FF,AVV,Be;if(typeof BigInt!=='function'){D7=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ADw=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;ACK=(a,b)=>{if(a.hi<b.hi)
{return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};AU4=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};AU9=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};AC_=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x
<=y;}return (a.lo&1)<=(b.lo&1);};C8=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return D8(a.lo+b.lo);}else if(AYz.abs(a.hi)<AYw&&AYz.abs(b.hi)<AYw){return D8(AVX(a)+AVX(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AYs(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<
16);};AYy=a=>{let lo=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AYs(lo,hi);};AWs=a=>AYy(new AYs(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));AGt=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return D8(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AYs(lolo&0xFFFF|(lohi&0xFFFF)
<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AWx=(a,b)=>{let r=EY(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Ba=(a,b)=>{let positive=AYv(a)===AYv(b);if(AYv(a)){a=AWs(a);}if(AYv(b)){b=AWs(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)
|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AYs(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:AWs(result);};M5=(a,b)=>{if(AYz.abs(a.hi)<AYw&&AYz.abs(b.hi)<AYw){return D8(AVX(a)/AVX(b));}return (AYx(a,
b))[0];};AWz=(a,b)=>{if(a.hi>=0&&a.hi<AYw&&b.hi>=0&&b.hi<AYw){return D8(AVX(a)/AVX(b));}return (AYA(a,b))[0];};XG=(a,b)=>{if(AYz.abs(a.hi)<AYw&&AYz.abs(b.hi)<AYw){return D8(AVX(a)%AVX(b));}return (AYx(a,b))[1];};AYx=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AYv(a)===AYv(b);if(AYv(a)){a=AWs(a);}if(AYv(b)){b=AWs(b);}a=new AYB(a.lo,a.hi,0);b=new AYB(b.lo,b.hi,0);let q=AYC(a,b);a=new AYs(a.lo,a.hi);q=new AYs(q.lo,q.hi);return positive?[q,a]:[AWs(q),AWs(a)];};let AYA=(a,b)=>
{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new AYB(a.lo,a.hi,0);b=new AYB(b.lo,b.hi,0);let q=AYC(a,b);a=new AYs(a.lo,a.hi);q=new AYs(q.lo,q.hi);return [q,a];};C7=(a,b)=>new AYs(a.lo&b.lo,a.hi&b.hi);ADv=(a,b)=>new AYs(a.lo|b.lo,a.hi|b.hi);Ib=(a,b)=>new AYs(a.lo^b.lo,a.hi^b.hi);FF=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AYs(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AYs(0,a.lo);}else {return new AYs(0,a.lo<<b -32);}};AVV=(a,b)=>{b&=63;if(b===0){return a;}else if
(b<32){return new AYs(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AYs(a.hi,a.hi>>31);}else {return new AYs(a.hi>>b -32,a.hi>>31);}};Be=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AYs(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AYs(a.hi,0);}else {return new AYs(a.hi>>>b -32,0);}};function AYB(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AYD=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|
0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AYE=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi
>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYF=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYG=(a,b)=>{let r=a.sup -b.sup;if(r
!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AYH=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AYI=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===
64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AYJ=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AYK=a=>new AYB(a.lo,a.hi,a.sup),AYC=(a,b)=>{let bits=b.hi!==0?AYH(b.hi):AYH(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits
%16;AYI(b,bits);AYI(a,dividentBits);let q=new AYB(0,0,0);while(sz-->0){AYI(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AYK(b);AYD(t,digit);if(AYG(t,a)>=0){while(AYG(t,a)>0){AYE(t,b); --digit;}}else {while(true){let nextT=AYK(t);AYF(nextT,b);if(AYG(nextT,a)>0){break;}t=nextT;++digit;}}AYE(a,t);q.lo|=digit;AYI(a,16);}AYJ(a,bits+16);return q;};}else {D7=(a,b)=>a===b;ADw=(a,b)=>a!==b;ACK=(a,b)=>a>b;AU4=(a,b)=>a>=b;AU9=(a,b)=>a<b;AC_=(a,b)=>a<=b;C8=(a,b)=>BigInt.asIntN(64,
a+b);AYy=a=>BigInt.asIntN(64,a+1);AWs=a=>BigInt.asIntN(64, -a);AGt=(a,b)=>BigInt.asIntN(64,a -b);AWx=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Ba=(a,b)=>BigInt.asIntN(64,a*b);M5=(a,b)=>BigInt.asIntN(64,a/b);AWz=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));XG=(a,b)=>BigInt.asIntN(64,a%b);C7=(a,b)=>BigInt.asIntN(64,a&b);ADv=(a,b)=>BigInt.asIntN(64,a|b);Ib=(a,b)=>BigInt.asIntN(64,a^b);FF=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));AVV=(a,b)=>BigInt.asIntN(64,
a>>BigInt(b&63));Be=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)>>BigInt(b&63));}let Q=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (D$(cls))(data);},U=(cls,data)=>new (D$(cls))(data),AAX;if(typeof BigInt64Array!=='function'){AAX=init=>new AYL(init);}else {AAX=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AYL(buffer);};}let G=sz=>new AYM(new Uint16Array(sz)),AGe=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AYM(buffer);},BJ=sz=>new AYN(new Int8Array(sz)),
E7=sz=>new AYO(new Int16Array(sz)),AX7=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AYO(buffer);},X=sz=>new AYP(new Int32Array(sz)),IG=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AYP(buffer);},J_=sz=>new AYQ(new Int8Array(sz)),B7=sz=>new AYR(new Float32Array(sz)),D$=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(FS()).call(this);this.data=data;}JavaArray.prototype=Object.create((FS()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor
=JavaArray;JavaArray.prototype.toString=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (D$(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[FS()],primitive
:false,superclass:FS(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AYS,AVh=strings=>{AYT();AYS=new Array(strings.length);for(let i=0;i<strings.length;++i){AYS[i]=AYU(T(strings[i]));}},A=index=>AYS[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;},AUF=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},T=str=>str===null?null:TP(str),Bx=str=>str===null?null:str.j0,AYT=()=>(()=>{})(),AYU;{AYU=str=>str;}let BD=(obj,cls)=>obj instanceof FS()&&!!obj.constructor.$meta&&AYV(obj.constructor,cls),AYV=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AYV(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for
(let i=0;i<supertypes.length;i=i+1|0){if(AYV(supertypes[i],to)){return true;}}return false;};let B=ex=>{throw APS(ex);},AYW=Symbol("javaException"),APS=ex=>{let err=ex.$jsException;if(!err){let javaCause=AYX(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AYY("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AYW]=ex;ex.$jsException=err;AYZ(err,ex);}return err;},AYZ=(err,ex)=>
{if(typeof AY0==="function"&&err.stack){let stack=AY0(err.stack),javaStack=Q(AY1(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AY2(T(element.className),T(element.methodName),T(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AY3(ex,javaStack);}}},AYY;if(typeof AY4==='object'){let AY5=Symbol("defaultMessage");AYY=function AYY(message,cause){let self=Reflect.construct(Error,[void 0,cause],AYY);Object.setPrototypeOf(self,
AYY.prototype);self[AY5]=message;return self;};AYY.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AYY},message:{get(){try {let javaException=this[AYW];if(typeof javaException==='object'){let javaMessage=AY6(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AY5];}catch(AY7){return "Exception occurred trying to extract Java exception message: "+AY7;}}}});}else {AYY=Error;}let AVN=e=>e instanceof Error
&&typeof e[AYW]==='object'?e[AYW]:null,Y=err=>{let ex=err[AYW];if(!ex){ex=AY8(T("(JavaScript) "+err.toString()));err[AYW]=ex;ex.$jsException=err;AYZ(err,ex);}return ex;},AY8=message=>AUU(message),AY6=t=>AOh(t),AYX=t=>AW9(t),AY1=()=>FS(),AY2=(className,methodName,fileName,lineNumber)=>{{return null;}},AY3=(e,stack)=>{};let AY9=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=
next+1;}buffer+=msg.substring(index);};},BV=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AY9(msg=>console.info(msg)):()=>{},DG=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AY9(msg=>console.error(msg)):()=>{};let AY$=null,AUc=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AY$=packages;},C$=data=>
{let packages=AY$,i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AY_(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AY_.prototype.push=function(){for
(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AY_.prototype.s=AY_.prototype.push;AY_.prototype.pop=function(){return this.stack.pop();};AY_.prototype.l=AY_.prototype.pop;AY_.prototype.isResuming=function(){return this.status===2;};AY_.prototype.isSuspending=function(){return this.status===1;};AY_.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AY_.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if
(AZa!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AY_.prototype.resume=function(){if(AZa!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AY_.prototype.run=function(){AZa=this;let result;try {result=this.runner();}catch(AY7){result=AY7;}finally {AZa=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback
=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let Fz=()=>{let thread=Dg();return thread!=null&&thread.isSuspending();},FB=()=>{let thread=Dg();return thread!=null&&thread.isResuming();},AYi=(runner,callback)=>(new AY_(runner)).start(callback),AZa=null,Dg=()=>AZa,Fr=()=>{throw new Error("Invalid recorded state");};function C(){this.mj=null;this.$id$=0;}
let FU=b=>{let c;if(b.mj===null){c=new IK;c.mf=B2;b.mj=c;}b=b.mj;c=b.mf;if(c===null)b.mf=B2;else if(c!==B2){c=new BK;c.j1=1;c.j2=1;c.j3=A(0);B(c);}b.mT=b.mT+1|0;},
DP=b=>{let c,d;if(!Hk(b)){c=b.mj;if(c.mf===B2){d=c.mT-1|0;c.mT=d;if(!d)c.mf=null;Hk(b);return;}}b=new IU;b.j1=1;b.j2=1;B(b);},
AWF=b=>{AFC(b,1);},
AFC=(b,c)=>{let d,$p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.mj===null){d=new IK;d.mf=B2;b.mj=d;}d=b.mj;if(d.mf===null)d.mf=B2;if(d.mf===B2){d.mT=d.mT+c|0;return;}$p=1;case 1:Yo(b,c);if(Fz()){break _;}return;default:Fr();}}Dg().s(b,c,d,$p);},
AIo=(b,c,d)=>{let e,f,g;e=B2;f=b.mj;if(f===null){f=new IK;f.mf=e;b.mj=f;if(e!==e)B2=e;B2.oD=Eo();b=b.mj;b.mT=b.mT+c|0;b=null;d.pI.e(b);return;}if(f.mf===null){f.mf=e;if(e!==e)B2=e;B2.oD=Eo();b=b.mj;b.mT=b.mT+c|0;b=null;d.pI.e(b);return;}if(f.ov===null)f.ov=AHD();f=f.ov;g=new S3;g.v1=e;g.v2=b;g.vZ=c;g.v0=d;d=g;f.push(d);},
AWL=b=>{XO(b,1);},
XO=(b,c)=>{let d;if(!Hk(b)){d=b.mj;if(d.mf===B2){c=d.mT-c|0;d.mT=c;if(c>0)return;d.mf=null;d=d.ov;if(d!==null&&!(d.length?0:1)){d=new Wk;d.wn=b;Nl(d,0);}else Hk(b);return;}}b=new IU;b.j1=1;b.j2=1;B(b);},
AO1=b=>{let c,d,e;if(!Hk(b)){c=b.mj;if(c.mf===null){b=c.ov;if(b!==null&&!(b.length?0:1)){b=c.ov.shift();BF();if(b!==null&&!(b instanceof FS()))b=Ch(b);d=b;c.ov=null;b=d.v1;c=d.v2;e=d.vZ;d=d.v0;if(B2!==b)B2=b;B2.oD=Eo();c=c.mj;c.mf=b;c.mT=c.mT+e|0;b=null;d.pI.e(b);}return;}}},
Hk=a=>{let b,c;b=a.mj;if(b===null)return 1;a:{if(b.mf===null){c=b.ov;if(!(c!==null&&!(c.length?0:1))){b=b.uC;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.mj=null;return 1;},
Bp=a=>{return;},
AU0=()=>{let a=new C();Bp(a);return a;},
AWG=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BE;c.kb=b;d=c;b.classObject=d;}}return c;},
Hi=a=>{let b,c;b=a;if(!b.$id$){c=E3();b.$id$=c;}return a.$id$;},
AJu=(a,b)=>{return a!==b?0:1;},
PV=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=E3();b.$id$=c;}d=Bj(a.$id$,4);b=new K;b.jZ=G(16);D(b,b.jY,A(1));e=b.jY;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);return c;}b=new H;b.j1=1;b.j2=1;B(b);},
AV6=a=>{let b,c,d;if(!BD(a,Fi)&&a.constructor.$meta.item===null){b=new UP;b.j1=1;b.j2=1;B(b);}b=Xt(a);c=b;d=E3();c.$id$=d;return b;},
NL=a=>{let b,c;b=a.mj;if(!(b!==null&&b.mf===B2?1:0)){b=new IU;b.j1=1;b.j2=1;B(b);}b=b.uC;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BF();if(c!==null&&!(c instanceof FS()))c=Ch(c);c=c;if(!c.m())Nl(c,0);}a.mj.uC=null;},
Yo=(b,c)=>{let thread=Dg();let javaThread=Xd();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Kc(javaThread);thread.resume();};callback.g0=e=>{thread.attribute=APS(e);Kc(javaThread);thread.resume();};callback=Sy(callback);thread.suspend(()=>{try {AIo(b,c,callback);;}catch(N0){callback.g0(N0);}});return null;};
let AQm=F();
let AGT=b=>{let c,d,e,f;VW=G(0);c=new I;c.j0="";Ml=c;Or=new NR;AOF();c=new Bc;c.j6=1.0;c.j5=0.0;OX=c;c=new Bc;c.j6=0.0;c.j5=1.0;OW=c;c=new Bc;c.j6=0.0;c.j5=0.0;Rq=c;Lu=new Bc;Mw=new Bc;YV();TZ=new Bc;T4=new Bc;ABi();SC=new Bc;SN=new Bc;c=new Er;c.n8=0.0;c.n5=0.0;c.n6=0.0;c.n7=0.0;RC=c;c=new Er;c.n8=0.0;c.n5=0.0;c.n6=0.0;c.n7=0.0;RB=c;QF=new Fe;To=new Fe;Vj=0.10000000149011612;ASV();Rh=M(CF);Xc();Pv=Q(Jo,111);TL=new Bc;TW=new Bc;QM=new C;AGZ();Ow=M(BY);ADI();P5=M(AJ0);Ov=M(KL);T2=Q(MU,128);Yr();AKz();Q9=new Bc;Q$
=new Bc;Q_=new Bc;Tb=0.4000000059604645;Ou=0.10000000149011612;UW=new Bc;AMs();RW=new Bc;Ss=new Bc;Ws=new Bc;Wu=new Bc;Wt=new Bc;ARm();AST();ACL();Pk=new BI;ANp();Ig=0.0;AFQ();RH=B7(3);AKU();AGL();AIM();De=1;ABJ();Ww=new Kq;QW=new Kp;AJn();O=1;AC1();IQ=new Nz;ALt();ZF();c=new NV;b=Q(I,0);d=b.data;JC(A(3));e=d.length;f=0;while(f<e){JC(d[f]);f=f+1|0;}c.vo=A(3);c.wd=b.p();Cg=c;ARD();WF=M(ADl);AFH();AS5();c=new Hv;c.sM=A(4);Ct=c;c=new Hv;c.sM=A(5);J7=c;AFf();AON();AAa();AF8();ADq();W5();ATl();AE5();ABt();KR=1;ZY();c
=new Cb;c.pu=12;Gr=c;AMo();c=new HF;c.rQ=1;Sx=c;c=new HF;c.rQ=0;S0=c;QT=M(Cl);AMW();ASL();CX=new Bc;C0=new Bc;Df=new Bc;CV=new Bc;CW=new Bc;FL=new Bc;Nn=new Bc;GQ=new Bc;GU=new Bc;Wd=new Bc;Ot=new Bc;Pw=Cu(2.0);Px=Cu(3.0);D5=new Bc;Fl=new Bc;Eg=new Bc;c=ASY(A(6));c.r6=640;c.pR=480;Qo(new LU,new Qc,c);};
let Ox=F();
let AEr=0,AEz=0,YO=0,AS6=0,ACF=0;
let S2=()=>{S2=BQ(Ox);AGV();};
let AGV=()=>{AEr=Da(T(navigator.platform),A(7));AEz=Da(T(navigator.platform),A(8));YO=Da(T(navigator.platform),A(9));AS6=!Da(T(navigator.platform),A(10))&&!Da(T(navigator.platform),A(11))?0:1;ACF=!Da(T(navigator.platform),A(12))&&!Da(T(navigator.platform),A(13))&&!Da(T(navigator.platform),A(14))?0:1;};
let Ok=F(0);
let Mr=F();
let CZ=F(0);
function Np(){let a=this;Mr.call(a);a.mt=null;a.vp=null;a.yp=0;a.lv=null;a.lU=null;a.rJ=null;a.sK=null;a.pE=null;a.pH=null;a.rR=0;a.rS=0;a.sf=null;a.nV=null;a.q4=null;a.py=null;a.rz=0;a.qL=null;a.xp=0;a.zJ=0;a.wc=0;a.t8=null;a.wo=null;}
let BR=0;
let SX=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.lU=new Bc;a.rJ=Q(CI,20);a.sK=J_(20);a.pE=X(20);a.pH=X(20);d=new Ng;Io(d,1,4,M(DU));a.py=d;a.rz=1;a.t8=IX;e=new BI;e.kT=0.0;e.kS=1.0;e.kR=0.0;e.kQ=0.8500000238418579;CY(e);a.wo=e;if(b===null){b=new Bm;b.j1=1;b.j2=1;b.j3=A(15);B(b);}if(c===null){b=new Bm;b.j1=1;b.j2=1;b.j3=A(16);B(b);}a.mt=b;a.vp=c;c=new BL;Ge(c);e=new Ng;Io(e,1,4,M(CI));c.kr=e;e=new S$;e.oM=1.0;e.oK=0.0;e.oL=0.0;e.oO=0.0;e.oP=1.0;e.oN=0.0;c.tu=e;c.ui=C_();c.pv=C_();c.nj=1;a.lv=c;c.lL=a;c=c.kr;f=c.j8;g=0;h
=c.j4;while(g<h){f.data[g].x(a);g=g+1|0;}g=B5.ld.width;i=B5.ld.height;b.pO=0;b.pP=0;b.ql=g;b.of=i;j=g;k=b.r7;j=j*k;k=i*k;b.s0=j;b.s8=k;Nw(b,1);},
AXu=(a,b)=>{let c=new Np();SX(c,a,b);return c;},
AM8=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.qL===null){b=AIR(5000,null);a.qL=b;b.sG=1;}a:{if(!a.zJ&&!a.wc&&a.t8===IX){if(!a.xp)break a;b=a.lv;b.kE=1;BR=1;b=b.kr;if(CK){c=new CB;c.kX=1;c.k0=b;c.l1=1;}else{if(b.kD===null){c=new C9;c.l_=b;c.mb=1;b.kD=c;}c=CR(b.kD);}b:while(true){if(!c.kX){c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(c.lQ>=c.k0.j4?0:1))break a;b=Cw(c);if(!(b instanceof BL)){b.kE=1;BR=1;}else{b=b;b.kE=1;BR=1;b=b.kr;if(CK){d=new CB;d.kX=1;d.k0=b;d.l1=1;}else{if(b.kD
===null){d=new C9;d.l_=b;d.mb=1;b.kD=d;}d=CR(b.kD);}while(true){if(!d.kX){c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(d.lQ>=d.k0.j4?0:1))break;b=Cw(d);if(!(b instanceof BL)){b.kE=1;BR=1;}else{b=b;b.kE=1;BR=1;b=b.kr;if(CK){e=new CB;e.kX=1;e.k0=b;e.l1=1;}else{if(b.kD===null){e=new C9;e.l_=b;e.mb=1;b.kD=e;}e=CR(b.kD);}while(true){if(!e.kX){c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(e.lQ>=e.k0.j4?0:1))break;b=Cw(e);if(!(b instanceof BL)){b.kE=1;BR=1;}else{b=b;b.kE=1;BR=1;f=b.kr;if(CK){b=new CB;b.kX=1;b.k0=f;b.l1
=1;}else{if(f.kD===null){b=new C9;Bp(b);b.l_=f;b.mb=1;f.kD=b;}b=CR(f.kD);}while(true){if(!b.kX){c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(b.lQ>=b.k0.j4?0:1))break;f=Cw(b);if(!(f instanceof BL)){f.kE=1;BR=1;}else{f=f;f.kE=1;BR=1;f=f.kr;if(CK){g=new CB;Bp(g);g.kX=1;g.k0=f;g.l1=1;}else{if(f.kD===null)f.kD=LQ(f,1);g=CR(f.kD);}while(true){if(!g.kX){c=new R;GX(c,A(17));B(c);}if(!(g.lQ>=g.k0.j4?0:1))break;f=Cw(g);if(!(f instanceof BL)){f.kE=1;BR=1;}else{f=f;f.kE=1;BR=1;f=f.kr;if(CK)h=Me(f,1);else{if(f.kD===null)f.kD
=NW(f);h=CR(f.kD);}while(true){if(!h.kX)break b;if(!(h.lQ>=h.k0.j4?0:1))break;f=Cw(h);if(!(f instanceof BL)){f.kE=1;BR=1;}else{f=f;E9(f,1);f=Gp(f.kr);while(HD(f)){i=Cw(f);if(!(i instanceof BL))E9(i,1);else LE(i,1,1);}}}}}}}}}}}}}B(KE(A(17)));}c=a.lU;b=Lf;j=b.l6.data[0];k=b.l5.data[0];c.j6=j;c.j5=k;EX(a.mt,c);b=a.lU;j=b.j6;k=b.j5;c=a.lv;b.j6=j;b.j5=k;DD(c,b);b=a.lv;c=a.lU;c=Ie(b,c.j6,c.j5,1);if(c===null)return;if(!a.wc)b=c;else{b=c.lh;if(b===null)b=c;}c=a.t8;if(c===IX){b.kE=1;BR=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof Et)break;b=b.lh;}}if(b===null)return;b.K(c);}d:{if(a.xp&&b instanceof BL){c=b;c.kE=1;BR=1;c=c.kr;if(CK){d=new CB;d.kX=1;d.k0=c;d.l1=1;}else{if(c.kD===null){d=new C9;d.l_=c;d.mb=1;c.kD=d;}d=CR(c.kD);}e:while(true){if(!d.kX){c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(d.lQ>=d.k0.j4?0:1))break d;c=Cw(d);if(!(c instanceof BL)){c.kE=1;BR=1;}else{c=c;c.kE=1;BR=1;c=c.kr;if(CK){e=new CB;e.kX=1;e.k0=c;e.l1=1;}else{if(c.kD===null){e=new C9;e.l_=c;e.mb=1;c.kD=e;}e=CR(c.kD);}while(true){if(!e.kX)
{c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(e.lQ>=e.k0.j4?0:1))break;c=Cw(e);if(!(c instanceof BL)){c.kE=1;BR=1;}else{c=c;c.kE=1;BR=1;c=c.kr;if(CK){f=new CB;f.kX=1;f.k0=c;f.l1=1;}else{if(c.kD===null){f=new C9;f.l_=c;f.mb=1;c.kD=f;}f=CR(c.kD);}while(true){if(!f.kX){c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(f.lQ>=f.k0.j4?0:1))break;c=Cw(f);if(!(c instanceof BL)){c.kE=1;BR=1;}else{c=c;c.kE=1;BR=1;c=c.kr;if(CK){g=new CB;g.kX=1;g.k0=c;g.l1=1;}else{if(c.kD===null){g=new C9;Bp(g);g.l_=c;g.mb=1;c.kD=g;}g=CR(c.kD);}while
(true){if(!g.kX){c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}if(!(g.lQ>=g.k0.j4?0:1))break;c=Cw(g);if(!(c instanceof BL)){c.kE=1;BR=1;}else{c=c;c.kE=1;BR=1;c=c.kr;if(CK){h=new CB;Bp(h);h.kX=1;h.k0=c;h.l1=1;}else{if(c.kD===null)c.kD=LQ(c,1);h=CR(c.kD);}while(true){if(!h.kX){c=new R;GX(c,A(17));B(c);}if(!(h.lQ>=h.k0.j4?0:1))break;c=Cw(h);if(!(c instanceof BL)){c.kE=1;BR=1;}else{c=c;c.kE=1;BR=1;c=c.kr;if(CK)i=Me(c,1);else{if(c.kD===null)c.kD=NW(c);i=CR(c.kD);}while(true){if(!i.kX)break e;if(!(i.lQ>=i.k0.j4?0:1))break;c
=Cw(i);if(!(c instanceof BL)){c.kE=1;BR=1;}else{c=c;E9(c,1);c=Gp(c.kr);while(HD(c)){l=Cw(c);if(!(l instanceof BL))E9(l,1);else LE(l,1,1);}}}}}}}}}}}}}B(KE(A(17)));}}c=a.lv;if(c!==b)f:{c.kE=0;if(c instanceof BL){c=c.kr;m=0;n=c.j4;g:while(true){if(m>=n)break f;if(m>=c.j4){d=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,m,10);D(b,b.jY,A(19));m=c.j4;J(b,b.jY,m,10);c=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){c.j0=L(o.data,0,n);d.j1=1;d.j2=1;d.j3=c;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}d=c.j8.data[m];if
(d!==b)h:{d.kE=0;if(d instanceof BL){d=d.kr;q=0;r=d.j4;while(true){if(q>=r)break h;if(q>=d.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,q,10);D(b,b.jY,A(19));m=d.j4;J(b,b.jY,m,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}e=d.j8.data[q];if(e!==b)i:{e.kE=0;if(e instanceof BL){e=e.kr;s=0;t=e.j4;while(true){if(s>=t)break i;if(s>=e.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,s,10);D(b,b.jY,A(19));m
=e.j4;J(b,b.jY,m,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=e.j8.data[s];if(f!==b)j:{f.kE=0;if(f instanceof BL){f=f.kr;u=0;v=f.j4;while(true){if(u>=v)break j;if(u>=f.j4){c=new H;b=new K;Bp(b);b.jZ=G(16);BW(b,b.jY,A(18));J(b,b.jY,u,10);BW(b,b.jY,A(19));m=f.j4;J(b,b.jY,m,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}g
=f.j8.data[u];if(g!==b)k:{g.kE=0;if(g instanceof BL){g=g.kr;w=0;x=g.j4;while(true){if(w>=x)break k;if(w>=g.j4){c=new H;b=new K;Di(b,16);BZ(b,b.jY,A(18));Iy(b,w,10);BZ(b,b.jY,A(19));Iy(b,g.j4,10);d=new I;o=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}h=g.j8.data[w];if(h!==b)l:{h.kE=0;if(h instanceof BL){h=h.kr;y=0;z=h.j4;while(true){if(y>=z)break l;if(y>=h.j4){c=new H;b=new K;Ed(b);Ff(b,A(18));IE(b,y);Ff(b,A(19));IE(b,h.j4);d=new I;o
=b.jZ;p=o.data;n=b.jY;q=p.length;if(n>=0&&n<=(q-0|0)){d.j0=L(o.data,0,n);GX(c,d);B(c);}b=new H;b.j1=1;b.j2=1;B(b);}i=h.j8.data[y];if(i!==b)m:{i.kE=0;if(i instanceof BL){l=i.kr;ba=0;bb=l.j4;while(true){if(ba>=bb)break m;if(ba>=l.j4)break g;i=l.j8.data[ba];if(i!==b)n:{E9(i,0);if(i instanceof BL){i=i.kr;bc=0;bd=i.j4;while(true){if(bc>=bd)break n;Pm(a,DO(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(Nj(Ev(FP(F4(FP(F4(Ep(),A(18)),ba),A(19)),l.j4))));}}}Ca.W(3042);b
=a.qL;c=a.mt.qT.qu;Dc(b.s9,c.lj);b.om=1;b=a.qL;if(!b.sG){c=new BK;c.j1=1;c.j2=1;c.j3=A(20);B(c);}FZ(b,H2);Pf(a.lv,a.qL);b=a.qL;FW(b.k$);b.mO=null;Ca.bb(3042);},
Pm=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.kE=0;if(b instanceof BL){d=b.kr;e=0;f=d.j4;while(true){if(e>=f)break a;if(e>=d.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=d.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}b=d.j8.data[e];if(b!==c)b:{b.kE=0;if(b instanceof BL){j=b.kr;i=0;k=j.j4;while(true){if(i>=k)break b;if
(i>=j.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));e=j.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}b=j.j8.data[i];if(b!==c)c:{b.kE=0;if(b instanceof BL){l=b.kr;m=0;n=l.j4;while(true){if(m>=n)break c;if(m>=l.j4){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,m,10);D(b,b.jY,A(19));e=l.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0))
{d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}b=l.j8.data[m];if(b!==c)d:{b.kE=0;if(b instanceof BL){b=b.kr;o=0;p=b.j4;while(true){if(o>=p)break d;if(o>=b.j4){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,o,10);D(c,c.jY,A(19));e=b.j4;J(c,c.jY,e,10);b=new I;g=c.jZ;h=g.data;f=c.jY;i=h.length;if(f>=0&&f<=(i-0|0)){b.j0=L(g.data,0,f);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}q=b.j8.data[o];if(q!==c)e:{q.kE=0;if(q instanceof BL){r=q.kr;s=0;t=r.j4;while(true){if(s>=t)break e;if
(s>=r.j4){c=new H;b=new K;Bp(b);b.jZ=G(16);BW(b,b.jY,A(18));J(b,b.jY,s,10);BW(b,b.jY,A(19));e=r.j4;J(b,b.jY,e,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}q=r.j8.data[s];if(q!==c)f:{q.kE=0;if(q instanceof BL){q=q.kr;u=0;v=q.j4;while(true){if(u>=v)break f;if(u>=q.j4){c=new H;b=new K;Di(b,16);BZ(b,b.jY,A(18));Iy(b,u,10);BZ(b,b.jY,A(19));Iy(b,q.j4,10);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0
=L(g.data,0,f);c.j1=1;c.j2=1;c.j3=d;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}w=q.j8.data[u];if(w!==c)g:{w.kE=0;if(w instanceof BL){w=w.kr;x=0;y=w.j4;while(true){if(x>=y)break g;if(x>=w.j4){c=new H;b=new K;Ed(b);Ff(b,A(18));IE(b,x);Ff(b,A(19));IE(b,w.j4);d=new I;g=b.jZ;h=g.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){d.j0=L(g.data,0,f);GX(c,d);B(c);}b=new H;b.j1=1;b.j2=1;B(b);}z=w.j8.data[x];if(z!==c)h:{z.kE=0;if(z instanceof BL){z=z.kr;ba=0;bb=z.j4;while(true){if(ba>=bb)break h;if(ba>=z.j4)B(Nj(Ev(FP(F4(FP(F4(Ep(),
A(18)),ba),A(19)),z.j4))));bc=z.j8.data[ba];if(bc!==c)i:{E9(bc,0);if(bc instanceof BL){bc=bc.kr;bd=0;be=bc.j4;while(true){if(bd>=be)break i;Pm(a,DO(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
AN3=(a,b)=>{let c,d,e,f,g;c=0;d=a.rJ.data.length;while(c<d){e=a.rJ.data;f=e[c];if(a.sK.data[c])e[c]=Qi(a,f,a.pE.data[c],a.pH.data[c],c);else if(f!==null){e[c]=null;N4(a,f,a.pE.data[c],a.pH.data[c],c);}c=c+1|0;}g=Hu;if(!(g!==Ne&&g!==MS&&g!==g))a.sf=Qi(a,a.sf,a.rR,a.rS,(-1));RN(a.lv,b);},
Qi=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.lU;g=c;h=d;f.j6=g;f.j5=h;EX(a.mt,f);f=a.lU;g=f.j6;h=f.j5;i=a.lv;f.j6=g;f.j5=h;DD(i,f);f=a.lv;i=a.lU;j=Ie(f,i.j6,i.j5,1);if(j===b)return b;if(b!==null){Cx();i=Br;d=BC(i,M(Z));k=d<0?null:i.kH.data[d];if(k===null){k=new Ck;i=new Bf;i.ks=0;i.j8=Q(C,4);k.kh=i;k.kO=100;a:{try{i=Cp(M(Z),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{i=Co(M(Z),null);Cr(i,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}i
=null;}k.kq=i;if(i===null){b=new Bw;i=new K;i.jZ=G(16);D(i,i.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);f=M(Z).j7;D(i,i.jY,f);f=new I;l=i.jZ;m=l.data;d=i.jY;e=m.length;if(d>=0&&d<=(e-0|0)){f.j0=L(l.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(Z),k);}f=k.kh;c=f.j4;if(c){if(!c){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}c=c-1|0;f.j4=c;l=f.j8.data;f=l[c];l[c]=null;}else b:{try{f=CG(k.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){f=$$je;}else{throw $$e;}}i
=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));n=k.kq.ls.lq;if(n.j7===null)n.j7=T(n.kb.$meta.name);k=n.j7;D(b,b.jY,k);k=new I;l=b.jZ;m=l.data;d=b.jY;e=m.length;if(d>=0&&d<=(e-0|0)){k.j0=L(l.data,0,d);i.j1=1;i.j2=1;i.j3=k;i.li=f;B(i);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.mp=IW;f.kL=a;i=a.lU;f.nF=i.j6;f.nG=i.j5;f.oW=e;f.ln=j;D3(b,f);i=Br;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BE;k.kb=o;p=k;o.classObject=p;}}c=BC(i,k);i=c<0?null:i.kH.data[c];if(i!==null){k=i.kh;if(k.j4<i.kO){Bg(k,f);c
=i.kU;d=i.kh.j4;if(c>d)d=c;i.kU=d;if(BD(f,BB)){f=f;f.kL=null;f.k7=null;f.k8=null;f.lf=0;f.la=1;f.k1=0;f.le=0;f.k5=0;f.ln=null;f.lm=(-1);}}else if(BD(f,BB)){f=f;f.kL=null;f.k7=null;f.k8=null;f.lf=0;f.la=1;f.k1=0;f.le=0;f.k5=0;f.ln=null;f.lm=(-1);}}}if(j!==null){Cx();i=Br;d=BC(i,M(Z));k=d<0?null:i.kH.data[d];if(k===null){k=new Ck;i=new Bf;i.ks=0;i.j8=Q(C,4);k.kh=i;k.kO=100;c:{try{i=Cp(M(Z),null);break c;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{i=Co(M(Z),null);Cr(i,1);break c;}catch
($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}i=null;}k.kq=i;if(i===null){b=new Bw;i=new K;i.jZ=G(16);D(i,i.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);f=M(Z).j7;D(i,i.jY,f);f=new I;l=i.jZ;m=l.data;d=i.jY;e=m.length;if(d>=0&&d<=(e-0|0)){f.j0=L(l.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(Z),k);}f=k.kh;c=f.j4;if(c){if(!c){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}c=c-1|0;f.j4=c;l=f.j8.data;f=l[c];l[c]=null;}else d:{try{f=CG(k.kq,null);break d;}catch($$e)
{$$je=Y($$e);if($$je instanceof Bz){f=$$je;}else{throw $$e;}}i=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));n=k.kq.ls.lq;if(n.j7===null)n.j7=T(n.kb.$meta.name);k=n.j7;D(b,b.jY,k);k=new I;l=b.jZ;m=l.data;d=b.jY;e=m.length;if(d>=0&&d<=(e-0|0)){k.j0=L(l.data,0,d);i.j1=1;i.j2=1;i.j3=k;i.li=f;B(i);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.mp=Ni;f.kL=a;i=a.lU;f.nF=i.j6;f.nG=i.j5;f.oW=e;f.ln=b;D3(j,f);b=Br;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BE;i.kb=k;o=i;k.classObject=o;}}c=BC(b,i);b=c
<0?null:b.kH.data[c];if(b!==null){i=b.kh;if(i.j4<b.kO){Bg(i,f);c=b.kU;d=b.kh.j4;if(c>d)d=c;b.kU=d;if(BD(f,BB)){b=f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ln=null;b.lm=(-1);}}else if(BD(f,BB)){b=f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ln=null;b.lm=(-1);}}}return j;},
N4=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.lU;g=c;h=d;f.j6=g;f.j5=h;EX(a.mt,f);Cx();i=Br;d=BC(i,M(Z));j=d<0?null:i.kH.data[d];if(j===null){j=new Ck;i=new Bf;i.ks=0;i.j8=Q(C,4);j.kh=i;j.kO=100;a:{try{i=Cp(M(Z),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{i=Co(M(Z),null);Cr(i,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}i=null;}j.kq=i;if(i===null){b=new Bw;i=new K;i.jZ=G(16);D(i,i.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);f
=M(Z).j7;D(i,i.jY,f);f=new I;k=i.jZ;l=k.data;d=i.jY;e=l.length;if(d>=0&&d<=(e-0|0)){f.j0=L(k.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(Z),j);}f=j.kh;c=f.j4;if(c){if(!c){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}c=c-1|0;f.j4=c;k=f.j8.data;f=k[c];k[c]=null;}else b:{try{f=CG(j.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){f=$$je;}else{throw $$e;}}i=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));m=j.kq.ls.lq;if(m.j7===null)m.j7=T(m.kb.$meta.name);j=m.j7;D(b,b.jY,j);j=new I;k
=b.jZ;l=k.data;d=b.jY;e=l.length;if(d>=0&&d<=(e-0|0)){j.j0=L(k.data,0,d);i.j1=1;i.j2=1;i.j3=j;i.li=f;B(i);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.mp=IW;f.kL=a;i=a.lU;f.nF=i.j6;f.nG=i.j5;f.oW=e;f.ln=b;D3(b,f);b=Br;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BE;i.kb=j;n=i;j.classObject=n;}}c=BC(b,i);b=c<0?null:b.kH.data[c];if(b!==null){i=b.kh;if(i.j4<b.kO){Bg(i,f);c=b.kU;d=b.kh.j4;if(c>d)d=c;b.kU=d;if(BD(f,BB)){b=f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ln
=null;b.lm=(-1);}}else if(BD(f,BB)){b=f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ln=null;b.lm=(-1);}}},
Oa=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;if(!SR(a,b,c))return 0;a.sK.data[d]=1;a.pE.data[d]=b;a.pH.data[d]=c;f=a.lU;g=b;h=c;f.j6=g;f.j5=h;EX(a.mt,f);Cx();i=Br;c=BC(i,M(Z));j=c<0?null:i.kH.data[c];if(j===null){j=new Ck;i=new Bf;i.ks=0;i.j8=Q(C,4);j.kh=i;j.kO=100;a:{try{i=Cp(M(Z),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{i=Co(M(Z),null);Cr(i,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}i=null;}j.kq=i;if(i===null){i=new Bw;j=new K;j.jZ
=G(16);D(j,j.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);f=M(Z).j7;D(j,j.jY,f);f=new I;k=j.jZ;l=k.data;c=j.jY;d=l.length;if(c>=0&&c<=(d-0|0)){f.j0=L(k.data,0,c);i.j1=1;i.j2=1;i.j3=f;B(i);}f=new H;f.j1=1;f.j2=1;B(f);}B6(Br,M(Z),j);}f=j.kh;b=f.j4;if(b){if(!b){f=new BK;f.j1=1;f.j2=1;f.j3=A(22);B(f);}b=b-1|0;f.j4=b;k=f.j8.data;f=k[b];k[b]=null;}else b:{try{f=CG(j.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){i=$$je;}else{throw $$e;}}m=new R;f=new K;f.jZ=G(16);D(f,f.jY,A(23));n=j.kq.ls.lq;if
(n.j7===null)n.j7=T(n.kb.$meta.name);j=n.j7;D(f,f.jY,j);j=new I;k=f.jZ;l=k.data;c=f.jY;d=l.length;if(c>=0&&c<=(d-0|0)){j.j0=L(k.data,0,c);m.j1=1;m.j2=1;m.j3=j;m.li=i;B(m);}f=new H;f.j1=1;f.j2=1;B(f);}f=f;f.mp=IP;f.kL=a;i=a.lU;g=i.j6;f.nF=g;h=i.j5;f.nG=h;f.oW=d;f.lm=e;j=a.lv;i.j6=g;i.j5=h;DD(j,i);i=a.lv;j=a.lU;i=Ie(i,j.j6,j.j5,1);if(i!==null)D3(i,f);else{i=a.lv;if(i.r3===JV)D3(i,f);}o=f.k1;i=Br;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BE;j.kb=m;p=j;m.classObject=p;}}b=BC(i,j);i
=b<0?null:i.kH.data[b];if(i!==null){j=i.kh;if(j.j4<i.kO){Bg(j,f);b=i.kU;c=i.kh.j4;if(b>c)c=b;i.kU=c;if(BD(f,BB)){f=f;f.kL=null;f.k7=null;f.k8=null;f.lf=0;f.la=1;f.k1=0;f.le=0;f.k5=0;f.ln=null;f.lm=(-1);}}else if(BD(f,BB)){f=f;f.kL=null;f.k7=null;f.k8=null;f.lf=0;f.la=1;f.k1=0;f.le=0;f.k5=0;f.ln=null;f.lm=(-1);}}return o;},
TQ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a.pE.data[d]=b;a.pH.data[d]=c;a.rR=b;a.rS=c;if(!a.py.j4)return 0;e=a.lU;f=b;g=c;e.j6=f;e.j5=g;EX(a.mt,e);Cx();h=Br;c=BC(h,M(Z));i=c<0?null:h.kH.data[c];if(i===null){i=new Ck;h=new Bf;h.ks=0;h.j8=Q(C,4);i.kh=h;i.kO=100;a:{try{h=Cp(M(Z),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{h=Co(M(Z),null);Cr(h,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}h=null;}i.kq=h;if(h===null){h=new Bw;i=new K;i.jZ
=G(16);D(i,i.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);e=M(Z).j7;D(i,i.jY,e);e=new I;j=i.jZ;k=j.data;c=i.jY;d=k.length;if(c>=0&&c<=(d-0|0)){e.j0=L(j.data,0,c);h.j1=1;h.j2=1;h.j3=e;B(h);}e=new H;e.j1=1;e.j2=1;B(e);}B6(Br,M(Z),i);}e=i.kh;b=e.j4;if(b){if(!b){e=new BK;e.j1=1;e.j2=1;e.j3=A(22);B(e);}b=b-1|0;e.j4=b;j=e.j8.data;e=j[b];j[b]=null;}else b:{try{e=CG(i.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){h=$$je;}else{throw $$e;}}l=new R;e=new K;e.jZ=G(16);D(e,e.jY,A(23));m=i.kq.ls.lq;if
(m.j7===null)m.j7=T(m.kb.$meta.name);i=m.j7;D(e,e.jY,i);i=new I;j=e.jZ;k=j.data;c=e.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);l.j1=1;l.j2=1;l.j3=i;l.li=h;B(l);}e=new H;e.j1=1;e.j2=1;B(e);}e=e;e.mp=IV;e.kL=a;h=a.lU;e.nF=h.j6;e.nG=h.j5;e.oW=d;h=a.py;Db(h);j=h.j8;h.ns=j;h.mx=h.mx+1|0;j=j;n=0;o=h.j4;while(n<o){i=j.data[n];if(i.sa==d&&Lo(h,i,1)){e.k7=i.qR;e.k8=i.p1;if(Ip(i.q5,e))e.k1=1;}n=n+1|0;}Fv(h);p=e.k1;h=Br;l=e.constructor;if(l===null)i=null;else{i=l.classObject;if(i===null){i=new BE;i.kb=l;q=i;l.classObject
=q;}}b=BC(h,i);h=b<0?null:h.kH.data[b];if(h!==null){i=h.kh;if(i.j4<h.kO){Bg(i,e);b=h.kU;c=h.kh.j4;if(b>c)c=b;h.kU=c;if(BD(e,BB)){e=e;e.kL=null;e.k7=null;e.k8=null;e.lf=0;e.la=1;e.k1=0;e.le=0;e.k5=0;e.ln=null;e.lm=(-1);}}else if(BD(e,BB)){e=e;e.kL=null;e.k7=null;e.k8=null;e.lf=0;e.la=1;e.k1=0;e.le=0;e.k5=0;e.ln=null;e.lm=(-1);}}return p;},
Mc=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;a.sK.data[d]=0;a.pE.data[d]=b;a.pH.data[d]=c;if(!a.py.j4)return 0;f=a.lU;g=b;h=c;f.j6=g;f.j5=h;EX(a.mt,f);Cx();i=Br;c=BC(i,M(Z));j=c<0?null:i.kH.data[c];if(j===null){j=new Ck;i=new Bf;i.ks=0;i.j8=Q(C,4);j.kh=i;j.kO=100;a:{try{i=Cp(M(Z),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{i=Co(M(Z),null);Cr(i,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}i=null;}j.kq=i;if(i===null){i=new Bw;j=new K;j.jZ
=G(16);D(j,j.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);f=M(Z).j7;D(j,j.jY,f);f=new I;k=j.jZ;l=k.data;c=j.jY;d=l.length;if(c>=0&&c<=(d-0|0)){f.j0=L(k.data,0,c);i.j1=1;i.j2=1;i.j3=f;B(i);}f=new H;f.j1=1;f.j2=1;B(f);}B6(Br,M(Z),j);}f=j.kh;b=f.j4;if(b){if(!b){f=new BK;f.j1=1;f.j2=1;f.j3=A(22);B(f);}b=b-1|0;f.j4=b;k=f.j8.data;f=k[b];k[b]=null;}else b:{try{f=CG(j.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){i=$$je;}else{throw $$e;}}m=new R;f=new K;f.jZ=G(16);D(f,f.jY,A(23));n=j.kq.ls.lq;if
(n.j7===null)n.j7=T(n.kb.$meta.name);j=n.j7;D(f,f.jY,j);j=new I;k=f.jZ;l=k.data;c=f.jY;d=l.length;if(c>=0&&c<=(d-0|0)){j.j0=L(k.data,0,c);m.j1=1;m.j2=1;m.j3=j;m.li=i;B(m);}f=new H;f.j1=1;f.j2=1;B(f);}f=f;f.mp=Hb;f.kL=a;i=a.lU;f.nF=i.j6;f.nG=i.j5;f.oW=d;f.lm=e;i=a.py;Db(i);k=i.j8;i.ns=k;i.mx=i.mx+1|0;k=k;o=0;p=i.j4;while(o<p){j=k.data[o];if(j.sa==d&&j.uc==e){Db(i);if(K9(i,j,1)){f.k7=j.qR;f.k8=j.p1;if(Ip(j.q5,f))f.k1=1;m=Br;n=j.constructor;if(n===null)q=null;else{q=n.classObject;if(q===null){q=new BE;q.kb=n;r
=q;n.classObject=r;}}b=BC(m,q);m=b<0?null:m.kH.data[b];if(m!==null){q=m.kh;if(q.j4<m.kO){Bg(q,j);b=m.kU;c=m.kh.j4;if(b>c)c=b;m.kU=c;if(BD(j,BB))j.bt();}else if(BD(j,BB))j.bt();}}}o=o+1|0;}Fv(i);s=f.k1;i=Br;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BE;j.kb=m;q=j;m.classObject=q;}}b=BC(i,j);i=b<0?null:i.kH.data[b];if(i!==null){j=i.kh;if(j.j4<i.kO){Bg(j,f);b=i.kU;c=i.kh.j4;if(b>c)c=b;i.kU=c;if(BD(f,BB)){f=f;f.kL=null;f.k7=null;f.k8=null;f.lf=0;f.la=1;f.k1=0;f.le=0;f.k5=0;f.ln=null;f.lm
=(-1);}}else if(BD(f,BB)){f=f;f.kL=null;f.k7=null;f.k8=null;f.lf=0;f.la=1;f.k1=0;f.le=0;f.k5=0;f.ln=null;f.lm=(-1);}}return s;},
AEc=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,$$je;a.rR=b;a.rS=c;if(!SR(a,b,c))return 0;d=a.lU;e=b;f=c;d.j6=e;d.j5=f;EX(a.mt,d);Cx();g=Br;c=BC(g,M(Z));h=c<0?null:g.kH.data[c];if(h===null){h=new Ck;g=new Bf;g.ks=0;g.j8=Q(C,4);h.kh=g;h.kO=100;a:{try{g=Cp(M(Z),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{g=Co(M(Z),null);Cr(g,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}g=null;}h.kq=g;if(g===null){g=new Bw;h=new K;h.jZ=G(16);D(h,h.jY,A(21));if(M(Z).j7
===null)M(Z).j7=T(M(Z).kb.$meta.name);d=M(Z).j7;D(h,h.jY,d);d=new I;i=h.jZ;j=i.data;c=h.jY;k=j.length;if(c>=0&&c<=(k-0|0)){d.j0=L(i.data,0,c);g.j1=1;g.j2=1;g.j3=d;B(g);}d=new H;d.j1=1;d.j2=1;B(d);}B6(Br,M(Z),h);}d=h.kh;b=d.j4;if(b){if(!b){d=new BK;d.j1=1;d.j2=1;d.j3=A(22);B(d);}b=b-1|0;d.j4=b;i=d.j8.data;d=i[b];i[b]=null;}else b:{try{d=CG(h.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){g=$$je;}else{throw $$e;}}l=new R;d=new K;d.jZ=G(16);D(d,d.jY,A(23));m=h.kq.ls.lq;if(m.j7===null)m.j7=T(m.kb.$meta.name);h
=m.j7;D(d,d.jY,h);h=new I;i=d.jZ;j=i.data;c=d.jY;k=j.length;if(c>=0&&c<=(k-0|0)){h.j0=L(i.data,0,c);l.j1=1;l.j2=1;l.j3=h;l.li=g;B(l);}d=new H;d.j1=1;d.j2=1;B(d);}d=d;d.mp=K7;d.kL=a;g=a.lU;e=g.j6;d.nF=e;f=g.j5;d.nG=f;h=a.lv;g.j6=e;g.j5=f;DD(h,g);g=a.lv;h=a.lU;g=Ie(g,h.j6,h.j5,1);if(g===null)g=a.lv;D3(g,d);n=d.k1;g=Br;l=d.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new BE;h.kb=l;o=h;l.classObject=o;}}b=BC(g,h);g=b<0?null:g.kH.data[b];if(g!==null){h=g.kh;if(h.j4<g.kO){Bg(h,d);b=g.kU;c=g.kh.j4;if
(b>c)c=b;g.kU=c;if(BD(d,BB)){d=d;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}else if(BD(d,BB)){d=d;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}return n;},
ANQ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;d=a.q4;if(d===null)d=a.lv;e=a.lU;f=a.rR;g=a.rS;e.j6=f;e.j5=g;EX(a.mt,e);Cx();h=Br;i=BC(h,M(Z));j=i<0?null:h.kH.data[i];if(j===null){j=new Ck;h=new Bf;h.ks=0;h.j8=Q(C,4);j.kh=h;j.kO=100;a:{try{h=Cp(M(Z),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{h=Co(M(Z),null);Cr(h,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}h=null;}j.kq=h;if(h===null){d=new Bw;h=new K;h.jZ=G(16);D(h,h.jY,A(21));if(M(Z).j7
===null)M(Z).j7=T(M(Z).kb.$meta.name);e=M(Z).j7;D(h,h.jY,e);e=new I;k=h.jZ;l=k.data;i=h.jY;m=l.length;if(i>=0&&i<=(m-0|0)){e.j0=L(k.data,0,i);d.j1=1;d.j2=1;d.j3=e;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}B6(Br,M(Z),j);}e=j.kh;n=e.j4;if(n){if(!n){d=new BK;d.j1=1;d.j2=1;d.j3=A(22);B(d);}n=n-1|0;e.j4=n;k=e.j8.data;e=k[n];k[n]=null;}else b:{try{e=CG(j.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){e=$$je;}else{throw $$e;}}h=new R;d=new K;d.jZ=G(16);D(d,d.jY,A(23));o=j.kq.ls.lq;if(o.j7===null)o.j7=T(o.kb.$meta.name);j
=o.j7;D(d,d.jY,j);j=new I;k=d.jZ;l=k.data;i=d.jY;m=l.length;if(i>=0&&i<=(m-0|0)){j.j0=L(k.data,0,i);h.j1=1;h.j2=1;h.j3=j;h.li=e;B(h);}d=new H;d.j1=1;d.j2=1;B(d);}e=e;e.mp=Lv;e.kL=a;h=a.lU;e.nF=h.j6;e.nG=h.j5;e.zy=b;e.zx=c;D3(d,e);p=e.k1;d=Br;j=e.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BE;h.kb=j;q=h;j.classObject=q;}}n=BC(d,h);d=n<0?null:d.kH.data[n];if(d!==null){h=d.kh;if(h.j4<d.kO){Bg(h,e);n=d.kU;i=d.kh.j4;if(n>i)i=n;d.kU=i;if(BD(e,BB)){d=e;d.kL=null;d.k7=null;d.k8=null;d.lf=
0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}else if(BD(e,BB)){d=e;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}return p;},
AVa=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.py;Db(d);e=d.j8;d.ns=e;d.mx=d.mx+1|0;e=e;f=0;g=d.j4;h=null;i=null;j=null;a:while(true){if(f>=g){Fv(d);if(c!==null){Cx();b=Br;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BE;d.kb=k;l=d;k.classObject=l;}}m=BC(b,d);b=m<0?null:b.kH.data[m];if(b!==null){d=b.kh;if(d.j4<b.kO){Bg(d,c);m=b.kU;f=b.kh.j4;if(m>f)f=m;b.kU=f;if(BD(c,BB)){b=c;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ln=null;b.lm=(-1);}}else if
(BD(c,BB)){b=c;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ln=null;b.lm=(-1);}}}return;}k=e.data[f];if(k.p1===b){Db(d);if(K9(d,k,1)){if(c===null){Cx();c=Br;n=BC(c,M(Z));l=n<0?null:c.kH.data[n];if(l===null){l=new Ck;c=new Bf;c.ks=0;c.j8=Q(C,4);l.kh=c;l.kO=100;b:{try{c=Cp(M(Z),h);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{c=Co(M(Z),i);Cr(c,1);break b;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}c=null;}l.kq=c;if(c===null){b=new Bw;c=
new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);d=M(Z).j7;D(c,c.jY,d);d=new I;e=c.jZ;o=e.data;f=c.jY;g=o.length;if(f>=0&&f<=(g-0|0)){d.j0=L(e.data,0,f);b.j1=1;b.j2=1;b.j3=d;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(Z),l);}c:{c=l.kh;m=c.j4;if(m){if(!m)break a;m=m-1|0;c.j4=m;o=c.j8.data;c=o[m];o[m]=null;}else try{c=CG(l.kq,j);break c;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){c=$$je;d=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));h=l.kq.ls.lq;if(h.j7===null)h.j7=T(h.kb.$meta.name);k
=h.j7;D(b,b.jY,k);k=new I;e=b.jZ;o=e.data;f=b.jY;g=o.length;if(f>=0&&f<=(g-0|0)){k.j0=L(e.data,0,f);d.j1=1;d.j2=1;d.j3=k;d.li=c;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}else{throw $$e;}}}c=c;c.mp=Hb;c.kL=a;c.nF=(-2.147483648E9);c.nG=(-2.147483648E9);}c.k7=k.qR;c.k8=k.p1;c.oW=k.sa;c.lm=k.uc;Ip(k.q5,c);}}f=f+1|0;}b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);},
Gj=(a,b)=>{let c,d,e;c=0;d=a.rJ.data.length;while(c<d){e=a.rJ.data;if(b===e[c]){e[c]=null;N4(a,b,a.pE.data[c],a.pH.data[c],c);}c=c+1|0;}if(b===a.sf){a.sf=null;N4(a,b,a.rR,a.rS,(-1));}},
AWE=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.nV===b)return 1;Cx();c=Br;d=BC(c,M(C2));e=d<0?null:c.kH.data[d];if(e===null){e=new Ck;c=new Bf;c.ks=0;c.j8=Q(C,4);e.kh=c;e.kO=100;a:{try{c=Cp(M(C2),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{c=Co(M(C2),null);Cr(c,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}c=null;}e.kq=c;if(c===null){b=new Bw;c=new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(C2).j7===null)M(C2).j7=T(M(C2).kb.$meta.name);f=M(C2).j7;D(c,
c.jY,f);f=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){f.j0=L(g.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(C2),e);}f=e.kh;j=f.j4;if(j){if(!j){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}j=j-1|0;f.j4=j;g=f.j8.data;f=g[j];g[j]=null;}else b:{try{f=CG(e.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){f=$$je;}else{throw $$e;}}c=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));k=e.kq.ls.lq;if(k.j7===null)k.j7=T(k.kb.$meta.name);e=k.j7;D(b,b.jY,e);e=new I;g=b.jZ;h=
g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){e.j0=L(g.data,0,d);c.j1=1;c.j2=1;c.j3=e;c.li=f;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.kL=a;f.w$=Mo;c=a.nV;if(c!==null){f.sc=0;f.ob=b;c.bl(f);}j=f.k5?0:1;if(j){a.nV=b;if(b!==null){f.sc=1;f.ob=c;b.bl(f);j=f.k5?0:1;if(!j)a.nV=c;}}b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BE;c.kb=e;l=c;e.classObject=l;}}d=BC(b,c);b=d<0?null:b.kH.data[d];if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if(d>i)i=d;b.kU=i;if(BD(f,BB)){b=
f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ob=null;}}else if(BD(f,BB)){b=f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ob=null;}}return j;},
AWg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.q4===b)return 1;Cx();c=Br;d=BC(c,M(C2));e=d<0?null:c.kH.data[d];if(e===null){e=new Ck;c=new Bf;c.ks=0;c.j8=Q(C,4);e.kh=c;e.kO=100;a:{try{c=Cp(M(C2),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{c=Co(M(C2),null);Cr(c,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}c=null;}e.kq=c;if(c===null){b=new Bw;c=new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(C2).j7===null)M(C2).j7=T(M(C2).kb.$meta.name);f=M(C2).j7;D(c,
c.jY,f);f=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){f.j0=L(g.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(C2),e);}f=e.kh;j=f.j4;if(j){if(!j){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}j=j-1|0;f.j4=j;g=f.j8.data;f=g[j];g[j]=null;}else b:{try{f=CG(e.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){f=$$je;}else{throw $$e;}}c=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));k=e.kq.ls.lq;if(k.j7===null)k.j7=T(k.kb.$meta.name);e=k.j7;D(b,b.jY,e);e=new I;g=b.jZ;h=
g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){e.j0=L(g.data,0,d);c.j1=1;c.j2=1;c.j3=e;c.li=f;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;f.kL=a;f.w$=NH;c=a.q4;if(c!==null){f.sc=0;f.ob=b;c.bl(f);}j=f.k5?0:1;if(j){a.q4=b;if(b!==null){f.sc=1;f.ob=c;b.bl(f);j=f.k5?0:1;if(!j)a.q4=c;}}b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BE;c.kb=e;l=c;e.classObject=l;}}d=BC(b,c);b=d<0?null:b.kH.data[d];if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if(d>i)i=d;b.kU=i;if(BD(f,BB)){b=
f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ob=null;}}else if(BD(f,BB)){b=f;b.kL=null;b.k7=null;b.k8=null;b.lf=0;b.la=1;b.k1=0;b.le=0;b.k5=0;b.ob=null;}}return j;},
SR=(a,b,c)=>{let d,e,f,g,h;d=a.mt;e=d.pO;f=e+d.ql|0;g=d.pP;h=g+d.of|0;c=(B5.ld.height-1|0)-c|0;return b>=e&&b<f&&c>=g&&c<h?1:0;};
let BB=F(0);
function FH(){let a=this;C.call(a);a.kL=null;a.k7=null;a.k8=null;a.lf=0;a.la=0;a.k1=0;a.le=0;a.k5=0;}
let ARs=a=>{a.k1=1;},
AKF=a=>{return a.la;},
IA=a=>{return a.le;},
F7=a=>{return a.k5;};
let Ds=F(0);
let B_=F(0);
function BG(){let a=this;C.call(a);a.kg=null;a.ka=0;}
let APt=a=>{return a.ka;},
AFE=a=>{return a.kg;},
YN=(a,b)=>{return a!==b?0:1;};
let Hp=F(BG);
let JV=null,Wj=null,AE2=null,XE=null;
let AOF=()=>{let b,c,d;b=new Hp;b.kg=A(24);b.ka=0;JV=b;c=new Hp;c.kg=A(25);c.ka=1;Wj=c;d=new Hp;d.kg=A(26);d.ka=2;AE2=d;XE=U(Hp,[b,c,d]);};
function CI(){let a=this;C.call(a);a.lL=null;a.lh=null;a.wj=null;a.sR=null;a.rh=null;a.v5=null;a.r3=null;a.nd=0;a.kE=0;a.kJ=0.0;a.kY=0.0;a.lT=0.0;a.l8=0.0;a.qC=0.0;a.qD=0.0;a.ox=0.0;a.oy=0.0;a.pf=0.0;a.qN=null;}
let Ge=a=>{let b,c;b=new K$;b.ks=1;b.j8=Q(C,0);c=new FR;c.o$=1;c.my=X(0);b.qF=c;a.wj=b;b=new K$;b.ks=1;b.j8=Q(C,0);c=new FR;c.o$=1;c.my=X(0);b.qF=c;a.sR=b;b=new Bf;b.ks=1;b.j8=Q(C,0);a.rh=b;a.r3=JV;a.nd=1;a.ox=1.0;a.oy=1.0;b=new BI;b.kT=1.0;b.kS=1.0;b.kR=1.0;b.kQ=1.0;CY(b);a.qN=b;},
AXU=()=>{let a=new CI();Ge(a);return a;},
IB=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.rh;if(!c.j4)return;d=a.lL;d!==null&&!d.rz;a:{try{e=0;while(e<c.j4){d=DO(c,e);if(d.bu(b)&&e<c.j4){f=DO(c,e)===d?e:E6(c,d,1);if(f!=(-1)){DW(c,f);d.bx(null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Y($$e);if($$je instanceof Bw){g=$$je;break a;}else{throw $$e;}}return;}h=a.T();c=new Bw;d=new K;d.jZ=G(16);D(d,d.jY,A(27));i=h.j0.length;e=128;if(i<e)e=i;j=Cj(h,0,e);D(d,d.jY,j);j=new I;k=d.jZ;l=k.data;e=d.jY;m=l.length;if(e>=0&&e<=(m-0|0)){j.j0=L(k.data,0,e);c.j1=1;c.j2=1;c.j3
=j;c.li=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
D3=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.kL===null)b.kL=a.lL;b.k7=a;Cx();c=Br;d=BC(c,M(Bf));e=d<0?null:c.kH.data[d];if(e===null){e=new Ck;c=new Bf;c.ks=0;c.j8=Q(C,4);e.kh=c;e.kO=100;a:{try{c=Cp(M(Bf),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{c=Co(M(Bf),null);Cr(c,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}c=null;}e.kq=c;if(c===null){b=new Bw;c=new K;c.jZ=G(16);D(c,c.jY,A(21));if(M(Bf).j7===null)M(Bf).j7=T(M(Bf).kb.$meta.name);f=
M(Bf).j7;D(c,c.jY,f);f=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){f.j0=L(g.data,0,d);b.j1=1;b.j2=1;b.j3=f;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(Bf),e);}f=e.kh;j=f.j4;if(j){if(!j){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}j=j-1|0;f.j4=j;g=f.j8.data;f=g[j];g[j]=null;}else b:{try{f=CG(e.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){f=$$je;}else{throw $$e;}}c=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));k=e.kq.ls.lq;if(k.j7===null)k.j7=T(k.kb.$meta.name);e=k.j7;D(b,b.jY,e);e=new I;g
=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){e.j0=L(g.data,0,d);c.j1=1;c.j2=1;c.j3=e;c.li=f;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}f=f;c=a.lh;while(c!==null){Bg(f,c);c=c.lh;}c:{try{g=f.j8;j=f.j4-1|0;}catch($$e){$$je=Y($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;I_(g.data[j],b,1);if(IA(b))break;j=j+(-1)|0;}j=F7(b);}catch($$e){$$je=Y($$e);b=$$je;break c;}g=f.j8;d=0;i=f.j4;b=null;if(d>i){b=new Bm;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Br;m=f.constructor;if(m===null)k
=null;else{k=m.classObject;if(k===null){k=new BE;k.kb=m;c=k;m.classObject=c;}}d=BC(b,k);b=d<0?null:b.kH.data[d];if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if(d>i)i=d;b.kU=i;if(BD(f,BB))f.bt();}else if(BD(f,BB))f.bt();}return j;}e:{try{I_(a,b,1);if(!IA(b))break e;j=F7(b);}catch($$e){$$je=Y($$e);b=$$je;break c;}g=f.j8;d=0;i=f.j4;b=null;if(d>i){b=new Bm;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=
new BE;c.kb=e;m=c;e.classObject=m;}}d=BC(b,c);b=d<0?null:b.kH.data[d];if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if(d>i)i=d;b.kU=i;if(BD(f,BB))f.bt();}else if(BD(f,BB))f.bt();}return j;}f:{try{I_(a,b,0);if(AKF(b))break f;j=F7(b);}catch($$e){$$je=Y($$e);b=$$je;break c;}g=f.j8;d=0;i=f.j4;b=null;if(d>i){b=new Bm;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BE;c.kb=e;m=c;e.classObject=m;}}d=BC(b,
c);b=d<0?null:b.kH.data[d];if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if(d>i)i=d;b.kU=i;if(BD(f,BB))f.bt();}else if(BD(f,BB))f.bt();}return j;}g:{try{if(!IA(b))break g;j=F7(b);}catch($$e){$$je=Y($$e);b=$$je;break c;}g=f.j8;d=0;i=f.j4;b=null;if(d>i){b=new Bm;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BE;c.kb=e;m=c;e.classObject=m;}}d=BC(b,c);b=d<0?null:b.kH.data[d];if(b!==null){c=b.kh;if(c.j4
<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if(d>i)i=d;b.kU=i;if(BD(f,BB))f.bt();}else if(BD(f,BB))f.bt();}return j;}try{j=0;d=f.j4;}catch($$e){$$je=Y($$e);b=$$je;break c;}h:{try{while(j<d){I_(g.data[j],b,0);if(IA(b))break h;j=j+1|0;}j=F7(b);}catch($$e){$$je=Y($$e);b=$$je;break c;}g=f.j8;d=0;i=f.j4;b=null;if(d>i){b=new Bm;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BE;c.kb=e;m=c;e.classObject=m;}}d=BC(b,c);b=d<0?null:
b.kH.data[d];if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if(d>i)i=d;b.kU=i;if(BD(f,BB))f.bt();}else if(BD(f,BB))f.bt();}return j;}try{j=F7(b);}catch($$e){$$je=Y($$e);b=$$je;break c;}g=f.j8;d=0;i=f.j4;b=null;if(d>i){b=new Bm;b.j1=1;b.j2=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.j4=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BE;c.kb=e;m=c;e.classObject=m;}}d=BC(b,c);b=d<0?null:b.kH.data[d];if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,f);d=b.kU;i=b.kh.j4;if
(d>i)i=d;b.kU=i;if(BD(f,BB))f.bt();}else if(BD(f,BB))f.bt();}return j;}g=f.j8;j=0;d=f.j4;c=null;if(j>d){b=new Bm;b.j1=1;b.j2=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.j4=0;if(f===null){f=new Bm;f.j1=1;f.j2=1;f.j3=A(28);B(f);}c=Br;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BE;e.kb=m;k=e;m.classObject=k;}}j=BC(c,e);c=j<0?null:c.kH.data[j];if(c!==null){e=c.kh;if(e.j4<c.kO){Bg(e,f);j=c.kU;d=c.kh.j4;if(j>d)d=j;c.kU=d;if(BD(f,BB))f.bt();}else if(BD(f,BB))f.bt();}B(b);},
I_=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.k7===null){b=new Bm;b.j1=1;b.j2=1;b.j3=A(29);B(b);}d=!c?a.wj:a.sR;if(!d.j4)return b.k5;b.k8=a;b.lf=c;if(b.kL===null)b.kL=a.lL;a:{try{AM1(d);e=0;f=d.j4;while(e<f){if(Ip(DO(d,e),b))ARs(b);e=e+1|0;}AO0(d);}catch($$e){$$je=Y($$e);if($$je instanceof Bw){g=$$je;break a;}else{throw $$e;}}return b.k5;}h=a.T();d=new Bw;b=new K;b.jZ=G(16);D(b,b.jY,A(27));i=h.j0.length;e=128;if(i<e)e=i;h=Cj(h,0,e);D(b,b.jY,h);h=new I;j=b.jZ;k=j.data;e=b.jY;f=k.length;if(e>=0&&e<=(f-0|0)){h.j0
=L(j.data,0,e);d.j1=1;d.j2=1;d.j3=h;d.li=g;B(d);}b=new H;b.j1=1;b.j2=1;B(b);},
R3=(a,b,c,d)=>{if(d&&a.r3!==JV)return null;if(!a.nd)return null;if(!(b>=0.0&&b<a.lT&&c>=0.0&&c<a.l8))a=null;return a;},
AUK=a=>{return a.lL;},
AOv=(a,b)=>{a.lL=b;},
AUP=(a,b)=>{a.lh=b;},
AUw=a=>{return a.nd;},
SV=a=>{return a.kJ;},
AUd=(a,b)=>{let c;c=a.kJ;if(b&16)c=c+a.lT;else if(!(b&8))c=c+a.lT/2.0;return c;},
AXm=(a,b)=>{let c;c=a.kY;if(b&2)c=c+a.l8;else if(!(b&4))c=c+a.l8/2.0;return c;},
AD_=(a,b,c,d)=>{if(d&16)b=b-a.lT;else if(!(d&8))b=b-a.lT/2.0;if(d&2)c=c-a.l8;else if(!(d&4))c=c-a.l8/2.0;if(!(a.kJ===b&&a.kY===c)){a.kJ=b;a.kY=c;}},
AYb=a=>{return;},
AUn=a=>{return;},
AQw=(a,b,c,d,e)=>{if(!(a.kJ===b&&a.kY===c)){a.kJ=b;a.kY=c;}if(!(a.lT===d&&a.l8===e)){a.lT=d;a.l8=e;}},
AWo=a=>{return a.qN;},
UJ=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.lh;if(c!==null){d=c.lh;if(d!==null){e=d.lh;if(e!==null){f=e.lh;if(f!==null){g=f.lh;if(g!==null){h=g.lh;if(h!==null){i=h.lh;if(i!==null){j=i.lh;if(j!==null){k=j.lh;if(k!==null)UJ(k,b);DD(j,b);}DD(i,b);}DD(h,b);}DD(g,b);}DD(f,b);}DD(e,b);}DD(d,b);}DD(c,b);}DD(a,b);return b;},
DD=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.pf;d=a.ox;e=a.oy;f=a.kJ;g=a.kY;if(c!==0.0){h=c*0.01745329238474369;i=Dv(h);j=Dh(h);k=a.qC;l=a.qD;m=b.j6-f-k;n=b.j5-g-l;b.j6=(m*i+n*j)/d+k;b.j5=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.j6=b.j6-f;b.j5=b.j5-g;}else{k=a.qC;l=a.qD;b.j6=(b.j6-f-k)/d+k;b.j5=(b.j5-g-l)/e+l;}return b;},
AND=(a,b)=>{VB(a,b);},
VB=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.kE)return;c=H2;d=b.mO;if(d!==c){if(d===null){b=new BK;b.j1=1;b.j2=1;b.j3=A(30);B(b);}if(!b.sG){c=new BK;c.j1=1;c.j2=1;c.j3=A(31);B(c);}FW(b.k$);b.mO=null;FZ(b,c);}c=a.lL;if(c!==null){d=c.wo;c=b.uW;c.kT=d.kT;c.kS=d.kS;c.kR=d.kR;c.kQ=d.kQ;}e=a.kJ;f=a.kY;g=a.qC;h=a.qD;i=a.lT;j=a.l8;k=a.ox;l=a.oy;m=a.pf;c=b.uW;AJm(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
E9=(a,b)=>{a.kE=b;if(b)BR=1;},
AWI=a=>{return a.kE;},
S6=a=>{let b,c,d,e;b=a.v5;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BE;c.kb=b;d=c;b.classObject=d;}}if(c.j7===null)c.j7=T(c.kb.$meta.name);b=c.j7;e=E1(b,46,b.j0.length-1|0);if(e!=(-1))b=Cj(b,e+1|0,b.j0.length);}return b;};
let Mu=F(0);
function BL(){let a=this;CI.call(a);a.kr=null;a.tu=null;a.ui=null;a.pv=null;a.nj=0;a.zk=null;}
let Lu=null;
let RN=(a,b)=>{let c,d,e,f;IB(a,b);c=a.kr;Db(c);d=c.j8;c.ns=d;c.mx=c.mx+1|0;d=d;e=0;f=a.kr.j4;while(e<f){d.data[e].be(b);e=e+1|0;}Fv(a.kr);},
AH1=(a,b,c)=>{let d;if(a.nj){d=KK(a);Dc(a.pv,b.oQ.lj);if(b.mn)D_(b);Dc(b.oQ,d.lj);if(b.mn)Gi(b);}Ql(a,b,c);if(a.nj){d=a.pv;if(b.mn)D_(b);Dc(b.oQ,d.lj);if(b.mn)Gi(b);}},
Ql=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.qN.kQ;d=a.kr;Db(d);e=d.j8;d.ns=e;d.mx=d.mx+1|0;f=e;g=a.zk;if(g===null){if(a.nj){h=0;i=d.j4;while(h<i){j=f.data[h];if(j.nd)j.bO(b,c);h=h+1|0;}}else{k=a.kJ;l=a.kY;a.kJ=0.0;a.kY=0.0;h=0;i=d.j4;while(h<i){j=f.data[h];if(j.nd){m=j.kJ;n=j.kY;j.kJ=m+k;j.kY=n+l;j.bO(b,c);j.kJ=m;j.kY=n;}h=h+1|0;}a.kJ=k;a.kY=l;}}else{o=g.z0;p=o+g.Ad;q=g.zZ;r=q+g.yN;if(a.nj){s=0;i=d.j4;while(s<i){j=f.data[s];if(j.nd){m=j.kJ;n=j.kY;if(m<=p&&n<=r&&m+j.lT>=o&&n+j.l8>=q)j.bO(b,c);}s=s
+1|0;}}else{k=a.kJ;l=a.kY;a.kJ=0.0;a.kY=0.0;s=0;i=d.j4;while(s<i){j=f.data[s];if(j.nd){m=j.kJ;n=j.kY;if(m<=p&&n<=r&&m+j.lT>=o&&n+j.l8>=q){j.kJ=m+k;j.kY=n+l;j.bO(b,c);j.kJ=m;j.kY=n;}}s=s+1|0;}a.kJ=k;a.kY=l;}}Fv(d);},
Pf=(a,b)=>{let c;VB(a,b);if(a.nj){c=KK(a);Dc(a.pv,b.rb.lj);Dc(b.rb,c.lj);b.om=1;c=b.mO;if(c!==null){FW(b.k$);b.mO=null;FZ(b,c);}}AAm(a,b);if(a.nj){c=a.pv;Dc(b.rb,c.lj);b.om=1;}},
AAm=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.kr;Db(c);d=c.j8;c.ns=d;c.mx=c.mx+1|0;e=d;if(a.nj){f=0;g=c.j4;while(f<g){h=e.data[f];if(h.nd&&!(!h.kE&&!(h instanceof BL)))h.Z(b);f=f+1|0;}h=b.mO;if(h!==null){FW(b.k$);b.mO=null;FZ(b,h);}}else{i=a.kJ;j=a.kY;a.kJ=0.0;a.kY=0.0;k=0;g=c.j4;while(k<g){h=e.data[k];if(h.nd&&!(!h.kE&&!(h instanceof BL))){l=h.kJ;m=h.kY;h.kJ=l+i;h.kY=m+j;h.Z(b);h.kJ=l;h.kY=m;}k=k+1|0;}a.kJ=i;a.kY=j;}Fv(c);},
KK=a=>{let b,c,d,e,f;b=a.tu;c=a.qC;d=a.qD;AGB(b,a.kJ+c,a.kY+d,a.pf,a.ox,a.oy);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.oL=b.oL+b.oM*c+b.oK*e;b.oN=b.oN+b.oO*c+b.oP*e;}f=a.lh;a:{while(true){if(f===null)break a;if(f.nj)break;f=f.lh;}}if(f!==null)AAr(b,f.tu);AQn(a.ui,b);return a.ui;},
Ie=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.r3===Wj)return null;if(!a.nd)return null;e=Lu;f=a.kr;g=f.j8;h=f.j4-1|0;while(true){if(h<0)return R3(a,b,c,d);i=g.data[h];e.j6=b;e.j5=c;DD(i,e);f=i.J(e.j6,e.j5,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AN8=(a,b)=>{let c,d,e,f;a.lL=b;c=a.kr;d=c.j8;e=0;f=c.j4;while(e<f){d.data[e].x(b);e=e+1|0;}},
LE=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.kE=b;if(b)BR=1;a:{if(c){d=a.kr;if(!CK){if(d.kD===null){e=new C9;e.l_=d;e.mb=1;d.kD=e;}e=CR(d.kD);}else{e=new CB;e.kX=1;e.k0=d;e.l1=1;}b:while(true){if(!e.kX){e=new R;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(e.lQ>=e.k0.j4?0:1))break a;d=Cw(e);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else{d=d;d.kE=b;if(b)BR=1;c:{if(c){d=d.kr;if(CK){f=new CB;f.kX=1;f.k0=d;f.l1=1;}else{if(d.kD===null){g=new C9;g.l_=d;g.mb=1;d.kD=g;}f=CR(d.kD);}while(true){if(!f.kX){e=new R;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if
(!(f.lQ>=f.k0.j4?0:1))break c;d=Cw(f);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else{d=d;d.kE=b;if(b)BR=1;d:{if(c){d=d.kr;if(CK){h=new CB;h.kX=1;h.k0=d;h.l1=1;}else{if(d.kD===null){g=new C9;g.l_=d;g.mb=1;d.kD=g;}h=CR(d.kD);}while(true){if(!h.kX){e=new R;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(h.lQ>=h.k0.j4?0:1))break d;d=Cw(h);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else{d=d;d.kE=b;if(b)BR=1;e:{if(c){d=d.kr;if(CK){i=new CB;i.kX=1;i.k0=d;i.l1=1;}else{if(d.kD===null){g=new C9;g.l_=d;g.mb=1;d.kD=g;}i=CR(d.kD);}while
(true){if(!i.kX){e=new R;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(i.lQ>=i.k0.j4?0:1))break e;d=Cw(i);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else{d=d;d.kE=b;if(b)BR=1;f:{if(c){d=d.kr;if(CK){j=new CB;j.kX=1;j.k0=d;j.l1=1;}else{if(d.kD===null){g=new C9;g.l_=d;g.mb=1;d.kD=g;}j=CR(d.kD);}while(true){if(!j.kX){e=new R;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(j.lQ>=j.k0.j4?0:1))break f;d=Cw(j);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else{d=d;d.kE=b;if(b)BR=1;g:{if(c){d=d.kr;if(CK){g=new CB;g.kX=1;g.k0=d;g.l1=1;}else{if(d.kD
===null){g=new C9;Bp(g);g.l_=d;g.mb=1;d.kD=g;}g=CR(d.kD);}while(true){if(!g.kX){e=new R;e.j1=1;e.j2=1;e.j3=A(17);B(e);}if(!(g.lQ>=g.k0.j4?0:1))break g;d=Cw(g);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else{d=d;d.kE=b;if(b)BR=1;h:{if(c){d=d.kr;if(CK){k=new CB;Bp(k);k.kX=1;k.k0=d;k.l1=1;}else{if(d.kD===null)d.kD=LQ(d,1);k=CR(d.kD);}while(true){if(!k.kX){e=new R;GX(e,A(17));B(e);}if(!(k.lQ>=k.k0.j4?0:1))break h;d=Cw(k);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else{d=d;d.kE=b;if(b)BR=1;i:{if(c){d=d.kr;if(CK)l=Me(d,
1);else{if(d.kD===null)d.kD=NW(d);l=CR(d.kD);}while(true){if(!l.kX)break b;if(!(l.lQ>=l.k0.j4?0:1))break i;d=Cw(l);if(!(d instanceof BL)){d.kE=b;if(b)BR=1;}else j:{d=d;E9(d,b);if(c){d=Gp(d.kr);while(true){if(!HD(d))break j;m=Cw(d);if(!(m instanceof BL))E9(m,b);else LE(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(KE(A(17)));}}},
ABU=a=>{let b,c,d,e,f;b=new K;b.jZ=G(128);TY(a,b,1);c=b.jY-1|0;b.jY=c;d=new I;e=b.jZ;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.j0=L(e.data,0,c);return d;}b=new H;b.j1=1;b.j2=1;B(b);},
TY=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=S6(a);D(b,b.jY,d);e=b.jY;Bk(b,e,e+1|0);b.jZ.data[e]=10;d=a.kr;Db(d);f=d.j8;d.ns=f;d.mx=d.mx+1|0;g=f;h=0;i=a.kr.j4;j=c+1|0;while(h<i){k=0;while(k<c){D(b,b.jY,A(32));k=k+1|0;}d=g.data[h];if(d instanceof BL)TY(d,b,j);else{D(b,b.jY,d===null?A(2):d.T());e=b.jY;Bk(b,e,e+1|0);b.jZ.data[e]=10;}h=h+1|0;}Fv(a.kr);},
AVS=()=>{Lu=new Bc;};
let Gq=F(0);
let DL=F(0);
let G6=F();
let GI=F(0);
let B4=F();
let Mw=null;
let Ip=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;if(!(b instanceof Z))return 0;L_();switch(KW.data[b.mp.ka]){case 1:break;case 2:return 0;case 3:return 0;default:c=b.k8;d=Mw;e=b.nF;f=b.nG;d.j6=e;d.j5=f;UJ(c,d);switch(KW.data[b.mp.ka]){case 4:c=a.vb.ro;d=SU;g=null;Cx();h=Br;i=BC(h,M(C4));j=i<0?null:h.kH.data[i];if(j===null){j=new Ck;Bp(j);j.kh=P0(0,4);j.kO=100;a:{try{h=Cp(M(C4),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{h=Co(M(C4),null);Cr(h,1);break a;}catch($$e)
{$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}h=null;}j.kq=h;if(h===null){b=new Bw;d=new K;Ed(d);Ff(d,A(21));if(M(C4).j7===null)M(C4).j7=UY(M(C4).kb);Ff(d,M(C4).j7);c=new I;k=d.jZ;l=k.data;i=d.jY;m=l.length;if(i>=0&&i<=(m-0|0)){c.j0=L(k.data,0,i);b.j1=1;b.j2=1;b.j3=c;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(C4),j);}n=j.kh;o=n.j4;if(o){if(!o){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}o=o-1|0;n.j4=o;k=n.j8.data;n=k[o];k[o]=null;}else b:{try{n=CG(j.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz)
{d=$$je;}else{throw $$e;}}c=new R;b=new K;Di(b,16);BZ(b,b.jY,A(23));h=j.kq.ls.lq;if(h.j7===null)h.j7=T(h.kb.$meta.name);g=h.j7;BZ(b,b.jY,g);g=new I;k=b.jZ;l=k.data;i=b.jY;m=l.length;if(i>=0&&i<=(m-0|0)){g.j0=L(k.data,0,i);KB(c,g,d);B(c);}b=new H;b.j1=1;b.j2=1;B(b);}n=n;n.lA=j;n=n;h=n.qX;h.kT=d.kT;h.kS=d.kS;h.kR=d.kR;h.kQ=d.kQ;n.qy=0.0;n.oX=g;M4(n,c);Bg(c.rh,n);d=c.lL;d!==null&&!d.rz;if(b.wS){h=b.kL;n=b.k8;g=b.k7;p=b.oW;q=b.lm;d=Br;i=BC(d,M(DU));c=i<0?null:d.kH.data[i];if(c===null){c=new Ck;d=new Bf;d.ks=0;d.j8
=Q(C,4);c.kh=d;c.kO=100;c:{try{d=Cp(M(DU),null);break c;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{d=Co(M(DU),null);Cr(d,1);break c;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}d=null;}c.kq=d;if(d===null){d=new Bw;c=new K;Bp(c);c.jZ=G(16);BW(c,c.jY,A(21));if(M(DU).j7===null)M(DU).j7=T(M(DU).kb.$meta.name);b=M(DU).j7;BW(c,c.jY,b);b=new I;k=c.jZ;l=k.data;i=c.jY;m=l.length;if(i>=0&&i<=(m-0|0)){b.j0=L(k.data,0,i);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,
M(DU),c);}d:{b=c.kh;o=b.j4;if(o){if(!o){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}o=o-1|0;b.j4=o;k=b.j8.data;b=k[o];k[o]=null;}else try{b=CG(c.kq,null);break d;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;g=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));h=c.kq.ls.lq;if(h.j7===null)h.j7=T(h.kb.$meta.name);c=h.j7;D(b,b.jY,c);c=new I;k=b.jZ;l=k.data;i=b.jY;m=l.length;if(i>=0&&i<=(m-0|0)){c.j0=L(k.data,0,i);g.j1=1;g.j2=1;Bi(g);g.j3=c;g.li=d;B(g);}b=new H;b.j1=1;b.j2=1;B(b);}else{throw $$e;}}}b=b;b.p1=n;b.qR=g;b.q5
=a;b.sa=p;b.uc=q;Bg(h.py,b);}return 1;case 5:d=a.vb.ro;b=QV;c=null;Cx();n=Br;i=BC(n,M(C4));h=i<0?null:n.kH.data[i];if(h===null){h=new Ck;Bp(h);h.kh=P0(0,4);h.kO=100;e:{try{n=Cp(M(C4),null);break e;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{n=Co(M(C4),null);Cr(n,1);break e;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}n=null;}h.kq=n;if(n===null){b=new Bw;d=new K;Ed(d);Ff(d,A(21));if(M(C4).j7===null)M(C4).j7=UY(M(C4).kb);Ff(d,M(C4).j7);c=new I;k=d.jZ;l=k.data;i=d.jY;m
=l.length;if(i>=0&&i<=(m-0|0)){c.j0=L(k.data,0,i);b.j1=1;b.j2=1;b.j3=c;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}B6(Br,M(C4),h);}f:{g=h.kh;o=g.j4;if(o){if(!o){b=new BK;b.j1=1;b.j2=1;b.j3=A(22);B(b);}o=o-1|0;g.j4=o;k=g.j8.data;g=k[o];k[o]=null;}else try{g=CG(h.kq,null);break f;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;c=new R;b=new K;Di(b,16);BZ(b,b.jY,A(23));h=h.kq.ls.lq;if(h.j7===null)h.j7=T(h.kb.$meta.name);g=h.j7;BZ(b,b.jY,g);g=new I;k=b.jZ;l=k.data;i=b.jY;m=l.length;if(i>=0&&i<=(m-0|0)){g.j0=L(k.data,
0,i);KB(c,g,d);B(c);}b=new H;b.j1=1;b.j2=1;B(b);}else{throw $$e;}}}g=g;g.lA=h;g=g;n=g.qX;n.kT=b.kT;n.kS=b.kS;n.kR=b.kR;n.kQ=b.kQ;g.qy=0.0;g.oX=c;M4(g,d);Bg(d.rh,g);b=d.lL;b!==null&&!b.rz;return 1;case 6:return 1;case 7:return 0;case 8:return 0;case 9:return 0;case 10:return 0;default:}return 0;}return 0;},
AXJ=()=>{Mw=new Bc;};
let Hn=F(B4);
let AL8=F(Hn);
let GN=F(BG);
let Mo=null,NH=null,UQ=null;
let YV=()=>{let b,c;b=new GN;b.kg=A(33);b.ka=0;Mo=b;c=new GN;c.kg=A(34);c.ka=1;NH=c;UQ=U(GN,[b,c]);};
let Nr=F(0);
let I2=F(0);
let GG=F(0);
let DJ=F();
let APg=F(DJ);
let Nc=F(G6);
let MN=F();
let TZ=null,T4=null;
let AVn=()=>{TZ=new Bc;T4=new Bc;};
let ACY=F();
let Xz=F();
let Wb=F(0);
let LP=F();
let ALv=F(LP);
function C2(){let a=this;FH.call(a);a.sc=0;a.w$=null;a.ob=null;}
let Sb=a=>{a.la=1;},
AXR=()=>{let a=new C2();Sb(a);return a;},
Wr=a=>{a.kL=null;a.k7=null;a.k8=null;a.lf=0;a.la=1;a.k1=0;a.le=0;a.k5=0;a.ob=null;};
let Ry=F();
let XW=null;
let WE=()=>{WE=BQ(Ry);AIW();};
let AIW=()=>{let b,c;b=X((UQ.p()).data.length);c=b.data;XW=b;c[Mo.ka]=1;c[NH.ka]=2;};
let AJq=F();
let Ty=F();
let WS=null;
let Se=()=>{Se=BQ(Ty);ABn();};
let ABn=()=>{let b,c;b=X((K6.p()).data.length);c=b.data;WS=b;c[IP.ka]=1;c[Hb.ka]=2;c[IV.ka]=3;};
let APf=F(DJ);
let Fo=F();
let Tt=F(Fo);
let Wm=F();
let AO2=0,ASf=0,AJr=0,ASu=0,AFs=0;
let Us=()=>{Us=BQ(Wm);AR7();};
let AR7=()=>{AO2=Da(T(navigator.platform),A(7));ASf=Da(T(navigator.platform),A(8));AJr=Da(T(navigator.platform),A(9));ASu=!Da(T(navigator.platform),A(10))&&!Da(T(navigator.platform),A(11))?0:1;AFs=!Da(T(navigator.platform),A(12))&&!Da(T(navigator.platform),A(13))&&!Da(T(navigator.platform),A(14))?0:1;};
let L3=F();
let ARS=F(Hn);
let SC=null;
let AV5=()=>{SC=new Bc;};
let AEk=F();
let SN=null;
let AXY=()=>{SN=new Bc;};
let U5=F();
let ACE=null,YJ=null,ASQ=null;
let VJ=()=>{VJ=BQ(U5);AOw();};
let AOw=()=>{let b;b=new Bf;b.ks=1;b.j8=Q(C,16);ACE=b;b=new Bo;CU();YJ=b;ASQ=new Fe;};
let Nk=F();
let IM=F(Fo);
let V7=F(Fo);
let Ea=F(B4);
let Vj=0.0;
let AXv=()=>{Vj=0.10000000149011612;};
let VZ=F(IM);
let ABC=F(FH);
let KF=F(0);
function Z(){let a=this;FH.call(a);a.mp=null;a.nF=0.0;a.nG=0.0;a.zy=0.0;a.zx=0.0;a.oW=0;a.lm=0;a.uV=0;a.xF=0;a.ln=null;a.wS=0;}
let SB=a=>{a.la=1;a.wS=1;},
AVR=()=>{let a=new Z();SB(a);return a;},
Qn=a=>{a.kL=null;a.k7=null;a.k8=null;a.lf=0;a.la=1;a.k1=0;a.le=0;a.k5=0;a.ln=null;a.lm=(-1);},
OS=a=>{return a.mp.kg;};
function DU(){let a=this;C.call(a);a.q5=null;a.p1=null;a.qR=null;a.sa=0;a.uc=0;}
let Uq=a=>{return;},
AUm=()=>{let a=new DU();Uq(a);return a;},
O6=a=>{a.p1=null;a.q5=null;a.qR=null;};
let N6=F();
let KW=null;
let L_=()=>{L_=BQ(N6);AQM();};
let AQM=()=>{let b,c;b=X((K6.p()).data.length);c=b.data;KW=b;c[ID.ka]=1;c[Mf.ka]=2;c[JL.ka]=3;c[IP.ka]=4;c[Hb.ka]=5;c[IV.ka]=6;c[K7.ka]=7;c[Lv.ka]=8;c[Ni.ka]=9;c[IW.ka]=10;};
let Dt=F(BG);
let IP=null,Hb=null,IV=null,K7=null,Ni=null,IW=null,Lv=null,ID=null,Mf=null,JL=null,K6=null;
let ABi=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Dt;b.kg=A(35);b.ka=0;IP=b;c=new Dt;c.kg=A(36);c.ka=1;Hb=c;d=new Dt;d.kg=A(37);d.ka=2;IV=d;e=new Dt;e.kg=A(38);e.ka=3;K7=e;f=new Dt;f.kg=A(39);f.ka=4;Ni=f;g=new Dt;g.kg=A(40);g.ka=5;IW=g;h=new Dt;h.kg=A(41);h.ka=6;Lv=h;i=new Dt;i.kg=A(42);i.ka=7;ID=i;j=new Dt;j.kg=A(43);j.ka=8;Mf=j;k=new Dt;k.kg=A(44);k.ka=9;JL=k;K6=U(Dt,[b,c,d,e,f,g,h,i,j,k]);};
function BP(){let a=this;C.call(a);a.kZ=null;a.kW=null;a.lA=null;}
let AMR=a=>{return;},
M4=(a,b)=>{let c,d,e;a.kZ=b;if(a.kW===null)a.kW=b;if(b===null){b=a.lA;if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,a);d=b.kU;e=b.kh.j4;if(d>e)e=d;b.kU=e;if(BD(a,BB))a.bt();}else if(BD(a,BB))a.bt();a.lA=null;}}},
AUT=(a,b)=>{a.kW=b;},
AAj=a=>{a.kZ=null;a.kW=null;a.lA=null;a.bZ();},
AUR=a=>{return a.lA;},
AUp=(a,b)=>{a.lA=b;},
ANy=a=>{let b,c,d,e;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BE;c.kb=b;d=c;b.classObject=d;}}if(c.j7===null)c.j7=T(c.kb.$meta.name);b=c.j7;e=E1(b,46,b.j0.length-1|0);if(e!=(-1))b=Cj(b,e+1|0,b.j0.length);if(Lk(b,A(45)))b=Cj(b,0,b.j0.length-6|0);return b;};
let EV=F(BP);
let AGj=F(EV);
let AK8=F(EV);
function C5(){let a=this;BP.call(a);a.qy=0.0;a.rj=0.0;a.oX=null;a.uI=0;a.rO=0;a.pc=0;}
let ARE=(a,b)=>{let c,d,e,f,$$je;if(a.pc)return 1;c=a.lA;a.lA=null;a:{try{if(!a.rO){a.bD();a.rO=1;}b=a.rj+b;a.rj=b;d=a.qy;e=b<d?0:1;a.pc=e;d=!e?b/d:1.0;f=a.oX;if(f!==null)d=f.b1(d);if(a.uI)d=1.0-d;a.b2(d);if(a.pc)ASx(a);e=a.pc;break a;}catch($$e){$$je=Y($$e);f=$$je;}a.lA=c;B(f);}a.lA=c;return e;},
ASx=a=>{return;},
ATG=a=>{a.rj=0.0;a.rO=0;a.pc=0;};
let EK=F(C5);
let XX=F(EK);
let AAf=F();
function NS(){let a=this;BP.call(a);a.lr=null;a.ry=0;}
let AVe=a=>{let b,c,d,e,f,g,h,i;a.ry=0;b=a.lr;c=0;d=b.j4;while(c<d){if(c>=b.j4){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(18));J(f,f.jY,c,10);D(f,f.jY,A(19));c=b.j4;J(f,f.jY,c,10);b=new I;g=f.jZ;h=g.data;d=f.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);e.j1=1;e.j2=1;e.j3=b;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}b.j8.data[c].bZ();c=c+1|0;}},
ALj=a=>{let b,c,d,e,f,g,h,i;a.kZ=null;a.kW=null;a.lA=null;a.ry=0;b=a.lr;c=0;d=b.j4;while(c<d){if(c>=b.j4){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(18));J(f,f.jY,c,10);D(f,f.jY,A(19));c=b.j4;J(f,f.jY,c,10);b=new I;g=f.jZ;h=g.data;d=f.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);e.j1=1;e.j2=1;e.j3=b;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}b.j8.data[c].bZ();c=c+1|0;}a.pn=0;b=a.lr;g=b.j8;c=0;d=b.j4;f=null;if(c>d){b=new Bm;b.j1=1;b.j2=1;B(b);}while(c<d){h=g.data;i=c+1|0;h[c]=f;c=i;}b.j4=0;},
ANN=(a,b)=>{let c,d,e,f,g,h,i;c=a.lr;d=0;e=c.j4;while(true){if(d>=e){a.kZ=b;if(a.kW===null)a.kW=b;if(b===null){b=a.lA;if(b!==null){c=b.kh;if(c.j4<b.kO){Bg(c,a);d=b.kU;e=b.kh.j4;if(d>e)e=d;a:{b.kU=e;if(BD(a,BB)){b=a;b.kZ=null;b.kW=null;b.lA=null;b.ry=0;c=b.lr;d=0;e=c.j4;while(true){if(d>=e){b.pn=0;b=b.lr;f=b.j8;d=0;e=b.j4;c=null;if(d>e){b=new Bm;HY(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.j4=0;break a;}if(d>=c.j4)break;c.j8.data[d].bZ();d=d+1|0;}B(Nj(Ev(FP(F4(FP(F4(Ep(),A(18)),d),A(19)),c.j4))));}}}
else if(BD(a,BB)){b=a;b.kZ=null;b.kW=null;b.lA=null;b.ry=0;c=b.lr;d=0;e=c.j4;while(d<e){(DO(c,d)).bZ();d=d+1|0;}b.pn=0;b=b.lr;f=b.j8;d=0;e=b.j4;c=null;if(d>e){b=new Bm;Iv(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.j4=0;}a.lA=null;}}return;}if(d>=c.j4)break;c.j8.data[d].bx(b);d=d+1|0;}i=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,d,10);D(b,b.jY,A(19));d=c.j4;J(b,b.jY,d,10);c=new I;f=b.jZ;g=f.data;e=b.jY;h=g.length;if(e>=0&&e<=(h-0|0)){c.j0=L(f.data,0,e);i.j1=1;i.j2=1;i.j3=c;B(i);}b=new H;b.j1=1;b.j2
=1;B(b);},
AJf=a=>{let b,c,d,e,f,g,h,i,j;b=new K;b.jZ=G(64);c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BE;d.kb=c;e=d;c.classObject=e;}}if(d.j7===null)d.j7=T(d.kb.$meta.name);c=d.j7;f=E1(c,46,c.j0.length-1|0);if(f!=(-1))c=Cj(c,f+1|0,c.j0.length);if(Lk(c,A(45)))c=Cj(c,0,c.j0.length-6|0);D(b,b.jY,c);f=b.jY;Bk(b,f,f+1|0);b.jZ.data[f]=40;c=a.lr;g=0;f=c.j4;while(g<f){if(g>0)D(b,b.jY,A(46));if(g>=c.j4){e=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,g,10);D(b,b.jY,A(19));g=c.j4;J(b,b.jY,g,
10);c=new I;h=b.jZ;i=h.data;f=b.jY;j=i.length;if(f>=0&&f<=(j-0|0)){c.j0=L(h.data,0,f);e.j1=1;e.j2=1;e.j3=c;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}e=c.j8.data[g];D(b,b.jY,e===null?A(2):e.T());g=g+1|0;}f=b.jY;Bk(b,f,f+1|0);h=b.jZ;i=h.data;i[f]=41;c=new I;f=b.jY;j=i.length;if(f>=0&&f<=(j-0|0)){c.j0=L(h.data,0,f);return c;}b=new H;b.j1=1;b.j2=1;B(b);};
function Dk(){NS.call(this);this.pn=0;}
let Qe=a=>{let b;b=new Bf;b.ks=1;b.j8=Q(C,4);a.lr=b;},
AVP=()=>{let a=new Dk();Qe(a);return a;},
N7=(a,b)=>{let c;c=new Bf;c.ks=1;c.j8=Q(C,4);a.lr=c;Bg(c,b);c=a.kZ;if(c!==null){b.kZ=c;if(b.kW===null)b.kW=c;}},
AYg=a=>{let b=new Dk();N7(b,a);return b;},
Wc=(a,b,c)=>{let d;d=new Bf;d.ks=1;d.j8=Q(C,4);a.lr=d;Bg(d,b);d=a.kZ;if(d!==null){b.kZ=d;if(b.kW===null)b.kW=d;}Bg(a.lr,c);b=a.kZ;if(b!==null){c.kZ=b;if(c.kW===null)c.kW=b;}},
AXW=(a,b)=>{let c=new Dk();Wc(c,a,b);return c;},
VH=(a,b,c,d)=>{let e;e=new Bf;e.ks=1;e.j8=Q(C,4);a.lr=e;Bg(e,b);e=a.kZ;if(e!==null){b.kZ=e;if(b.kW===null)b.kW=e;}Bg(a.lr,c);b=a.kZ;if(b!==null){c.kZ=b;if(c.kW===null)c.kW=b;}Bg(a.lr,d);b=a.kZ;if(b!==null){d.kZ=b;if(d.kW===null)d.kW=b;}},
AXI=(a,b,c)=>{let d=new Dk();VH(d,a,b,c);return d;},
Wv=(a,b,c,d,e)=>{let f;f=new Bf;f.ks=1;f.j8=Q(C,4);a.lr=f;Bg(f,b);f=a.kZ;if(f!==null){b.kZ=f;if(b.kW===null)b.kW=f;}Bg(a.lr,c);f=a.kZ;if(f!==null){c.kZ=f;if(c.kW===null)c.kW=f;}Bg(a.lr,d);b=a.kZ;if(b!==null){d.kZ=b;if(d.kW===null)d.kW=b;}Bg(a.lr,e);b=a.kZ;if(b!==null){e.kZ=b;if(e.kW===null)e.kW=b;}},
AVy=(a,b,c,d)=>{let e=new Dk();Wv(e,a,b,c,d);return e;},
Sf=(a,b,c,d,e,f)=>{let g;g=new Bf;g.ks=1;g.j8=Q(C,4);a.lr=g;Bg(g,b);g=a.kZ;if(g!==null){b.kZ=g;if(b.kW===null)b.kW=g;}Bg(a.lr,c);b=a.kZ;if(b!==null){c.kZ=b;if(c.kW===null)c.kW=b;}Bg(a.lr,d);b=a.kZ;if(b!==null){d.kZ=b;if(d.kW===null)d.kW=b;}Bg(a.lr,e);b=a.kZ;if(b!==null){e.kZ=b;if(e.kW===null)e.kW=b;}Bg(a.lr,f);b=a.kZ;if(b!==null){f.kZ=b;if(f.kW===null)f.kW=b;}},
AV2=(a,b,c,d,e)=>{let f=new Dk();Sf(f,a,b,c,d,e);return f;},
Oi=(a,b)=>{let c,d,e,$$je;c=a.pn;d=a.lr;if(c>=d.j4)return 1;e=a.lA;a.lA=null;a:{b:{c:{d:{try{if(!(DO(d,c)).bu(b))break d;}catch($$e){$$je=Y($$e);d=$$je;break b;}e:{try{if(a.kZ!==null)break e;}catch($$e){$$je=Y($$e);d=$$je;break b;}a.lA=e;return 1;}try{c=a.pn+1|0;a.pn=c;if(c<a.lr.j4)break d;else break c;}catch($$e){$$je=Y($$e);d=$$je;break b;}}try{}catch($$e){$$je=Y($$e);d=$$je;break b;}a.lA=e;return 0;}try{break a;}catch($$e){$$je=Y($$e);d=$$je;}}a.lA=e;B(d);}a.lA=e;return 1;},
UX=a=>{let b,c,d,e,f,g,h,i;a.ry=0;b=a.lr;c=0;d=b.j4;while(c<d){if(c>=b.j4){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(18));J(f,f.jY,c,10);D(f,f.jY,A(19));c=b.j4;J(f,f.jY,c,10);b=new I;g=f.jZ;h=g.data;d=f.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);e.j1=1;e.j2=1;e.j3=b;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}b.j8.data[c].bZ();c=c+1|0;}a.pn=0;};
let AEd=F(BP);
let AIx=F(BP);
let ANu=F(BP);
let AOm=F();
let LW=F(BP);
let AHT=F(LW);
function Cb(){let a=this;C5.call(a);a.tl=0.0;a.tm=0.0;a.rs=0.0;a.rr=0.0;a.pu=0;}
let O_=a=>{a.pu=12;},
AW8=()=>{let a=new Cb();O_(a);return a;},
Ta=a=>{let b,c,d;b=a.kW;c=a.pu;d=b.kJ;if(c&16)d=d+b.lT;else if(!(c&8))d=d+b.lT/2.0;a.tl=d;d=b.kY;if(c&2)d=d+b.l8;else if(!(c&4))d=d+b.l8/2.0;a.tm=d;},
Su=(a,b)=>{let c,d;if(b===0.0){c=a.tl;d=a.tm;}else if(b===1.0){c=a.rs;d=a.rr;}else{c=a.tl;c=c+(a.rs-c)*b;d=a.tm;d=d+(a.rr-d)*b;}AD_(a.kW,c,d,a.pu);},
Uz=a=>{a.kZ=null;a.kW=null;a.lA=null;a.rj=0.0;a.rO=0;a.pc=0;a.uI=0;a.oX=null;a.pu=12;};
let APa=F(C5);
let APN=F(EK);
let ALS=F(BP);
let AMp=F(EK);
let ARt=F(C5);
function C4(){let a=this;C5.call(a);a.uN=0.0;a.uO=0.0;a.uQ=0.0;a.uP=0.0;a.px=null;a.qX=null;}
let VP=a=>{a.qX=new BI;},
AVW=()=>{let a=new C4();VP(a);return a;},
O1=a=>{let b;if(a.px===null)a.px=a.kW.qN;b=a.px;a.uN=b.kT;a.uO=b.kS;a.uQ=b.kR;a.uP=b.kQ;},
R8=(a,b)=>{let c,d,e,f,g,h;if(b===0.0){c=a.px;b=a.uN;d=a.uO;e=a.uQ;f=a.uP;c.kT=b;c.kS=d;c.kR=e;c.kQ=f;CY(c);}else if(b===1.0){c=a.px;g=a.qX;c.kT=g.kT;c.kS=g.kS;c.kR=g.kR;c.kQ=g.kQ;}else{d=a.uN;c=a.qX;d=d+(c.kT-d)*b;e=a.uO;e=e+(c.kS-e)*b;f=a.uQ;f=f+(c.kR-f)*b;h=a.uP;h=h+(c.kQ-h)*b;c=a.px;c.kT=d;c.kS=e;c.kR=f;c.kQ=h;CY(c);}},
Wl=a=>{a.kZ=null;a.kW=null;a.lA=null;a.rj=0.0;a.rO=0;a.pc=0;a.uI=0;a.oX=null;a.px=null;};
let AEN=F(BP);
let AHo=F(C5);
let AHE=F(BP);
let AFi=F(BP);
let AHW=F(EV);
let YR=F(C5);
let ARC=F(BP);
let ALn=F(EK);
let AE0=F(EV);
let AKx=F(BP);
let AAh=F(C5);
let AGX=F(C5);
let ABw=F();
let AGQ=null;
let ASV=()=>{AGQ=U(BE,[M(Rf),M(BI),M(SS),M(Tt),M(V7),M(IM),M(VZ),M(Gw),M(Sa),M(U6),M(Um),M(Rz),M(VM),M(J3),M(VY),M(Tv),M(O4),M(VD),M(GR),M(SI),M(U0),M(SD),M(RP),M(Pr)]);};
let Dd=F(BL);
let Et=F(Dd);
let Zv=null,AHw=null,AOl=null,ATd=null,AKQ=null,W$=null,ADY=null,AKn=null;
let Q6=()=>{Q6=BQ(Et);AOR();};
let AOR=()=>{let b,c;b=new BI;b.kT=0.0;b.kS=0.0;b.kR=1.0;b.kQ=1.0;CY(b);Zv=b;b=new BI;b.kT=1.0;b.kS=0.0;b.kR=0.0;b.kQ=1.0;CY(b);AHw=b;b=new BI;b.kT=0.0;b.kS=1.0;b.kR=0.0;b.kQ=1.0;CY(b);AOl=b;b=new V4;c=new Bf;c.ks=0;c.j8=Q(C,16);b.kh=c;b.kO=2147483647;ATd=b;b=new V3;Is();AKQ=b;W$=new V2;ADY=new V1;AKn=new V0;};
let F0=F(Et);
let LH=F(F0);
let ACr=F(LH);
let APc=F(B4);
let ML=F(Dd);
let Sm=F(0);
let EC=F();
let AED=F(EC);
let Dq=F(CI);
let Y_=F(Dq);
let APb=F(B4);
let B8=F();
let AQu=null,ANC=null,AO$=null,ACX=null,AH3=null,AGd=null,ANv=null;
let Is=()=>{Is=BQ(B8);ZJ();};
let ZJ=()=>{let b;b=new Jo;Is();b.zm=0.0;AQu=b;ANC=new TF;AO$=new TC;ACX=new TB;AH3=new TE;AGd=new TD;ANv=new TA;};
let TE=F(B8);
let ALw=F(B8);
let Kx=F(Ea);
let AHL=F(Kx);
let V2=F(B8);
let ARf=F(B4);
let Mi=F(Et);
let TL=null,TW=null;
let AUI=()=>{TL=new Bc;TW=new Bc;};
let ALx=F(B8);
let Go=F(0);
function Fe(){let a=this;C.call(a);a.z0=0.0;a.zZ=0.0;a.Ad=0.0;a.yN=0.0;}
let QF=null,To=null;
let AXc=()=>{QF=new Fe;To=new Fe;};
let DR=F(Fe);
let WL=null;
let J5=()=>{J5=BQ(DR);OR();};
let Tf=a=>{J5();},
AUx=()=>{let a=new DR();Tf(a);return a;},
OR=()=>{let b,c,d,e,f,g,h,$$je;Cx();b=Br;c=BC(b,M(DR));b=c<0?null:b.kH.data[c];if(b===null){b=new Ck;d=new Bf;d.ks=0;d.j8=Q(C,4);b.kh=d;b.kO=100;a:{try{d=Cp(M(DR),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{d=Co(M(DR),null);Cr(d,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}d=null;}b.kq=d;if(d===null){b=new Bw;d=new K;d.jZ=G(16);D(d,d.jY,A(21));if(M(DR).j7===null)M(DR).j7=T(M(DR).kb.$meta.name);e=M(DR).j7;D(d,d.jY,e);e=new I;f=d.jZ;g=f.data;c
=d.jY;h=g.length;if(c>=0&&c<=(h-0|0)){e.j0=L(f.data,0,c);b.j1=1;b.j2=1;b.j3=e;B(b);}e=new H;e.j1=1;e.j2=1;B(e);}B6(Br,M(DR),b);}WL=b;};
let AEH=F(EC);
let M0=F(Dq);
let Q9=null,Q$=null,Q_=null,Tb=0.0,Ou=0.0;
let AXQ=()=>{Q9=new Bc;Q$=new Bc;Q_=new Bc;Tb=0.4000000059604645;Ou=0.10000000149011612;};
let ACI=F(M0);
let AG2=F(B4);
let Qx=F(0);
let ANA=F();
let Gw=F();
let GR=F(Gw);
let Um=F(GR);
let M6=F(Dq);
let AF2=F(M6);
let AS$=F(ML);
let KH=F(Dd);
let ATU=F(F0);
let Nv=F(Dq);
let V0=F(B8);
let U0=F();
let AFc=F();
let AHP=F(B4);
let AJz=F(DJ);
let AGn=F();
let AM9=F(B4);
let ASR=F(Ea);
let AG0=F(MN);
let TA=F(B8);
let TD=F(B8);
let S7=F(0);
let J3=F();
let O4=F(J3);
let AEE=F(EC);
let AO_=F(L3);
let APd=F(Nk);
let ARg=F(B4);
let ARh=F(Ea);
let V1=F(B8);
let OV=F();
let AE8=null,AKH=null,AE6=null,AKG=null,W7=null,AAO=null,AKf=null,Xx=null,AM2=null;
let Uo=()=>{Uo=BQ(OV);ABD();};
let ABD=()=>{let b;b=new NI;b.vv=0.0;AE8=b;b=new NI;b.vv=1.0;AKH=b;E0();AE6=Eh.data[128];E0();b=Eh.data[129];AKG=b;W7=b;E0();AAO=Eh.data[130];E0();AKf=Eh.data[132];E0();Xx=Eh.data[136];E0();AM2=Eh.data[144];};
let Sa=F(GR);
let AHd=F(B4);
let Zx=F(DJ);
let TF=F(B8);
let AC4=F(Dd);
let AG1=F(B4);
let SD=F();
function Jo(){B8.call(this);this.zm=0.0;}
let Pv=null;
let AXz=()=>{Pv=Q(Jo,111);};
let AFd=F(KH);
let TB=F(B8);
let AIp=F(Dq);
let UW=null;
let AXC=()=>{UW=new Bc;};
let AG9=F(Nc);
let VD=F();
let Pj=F(Dq);
let Y5=null,ADk=null;
let UE=()=>{UE=BQ(Pj);YM();};
let YM=()=>{let b,c;Y5=new BI;b=new Ku;Mv();c=new Bf;c.ks=1;c.j8=Q(C,1);b.y$=c;c=new FR;c.o$=1;c.my=X(2);b.yi=c;ADk=b;};
let Pr=F();
let ALz=F(B8);
let V3=F(B8);
let AOt=F(Mi);
let TC=F(B8);
let Rz=F();
let ASG=F();
let FC=F(BG);
let IX=null,Zk=null,AL5=null,XJ=null,AAo=null,ANK=null;
let AMs=()=>{let b,c,d,e,f;b=new FC;b.kg=A(47);b.ka=0;IX=b;c=new FC;c.kg=A(48);c.ka=1;Zk=c;d=new FC;d.kg=A(49);d.ka=2;AL5=d;e=new FC;e.kg=A(50);e.ka=3;XJ=e;f=new FC;f.kg=A(51);f.ka=4;AAo=f;ANK=U(FC,[b,c,d,e,f]);};
let ASZ=F(B8);
let AGO=F(DJ);
function Dp(){let a=this;C.call(a);a.kO=0;a.kU=0;a.kh=null;}
let V4=F(Dp);
let Zm=F();
let VM=F();
let SS=F();
let Tv=F();
let Nt=F(B4);
let RW=null;
let AUk=()=>{RW=new Bc;};
let Zw=F(DJ);
let ARi=F(Nv);
let Zp=F(0);
let AHe=F(B4);
let ATJ=F(Dd);
let AK5=F(Dd);
let AG_=F(Ea);
let Nh=F();
let AEC=F(Nh);
let AQT=F(CI);
let Yz=F(B4);
let AOQ=F(F0);
let AJ8=F(B4);
let ASm=F(Ea);
let U6=F(Gw);
let ALa=F(Dd);
let SI=F();
let RP=F();
let AJH=F(Dq);
let ASS=F(G6);
let YB=F(B4);
let AMO=F(Dd);
let Ss=null;
let AWb=()=>{Ss=new Bc;};
let AS8=F(Nt);
let YC=F(Et);
let AEF=F(EC);
let WU=F();
let VY=F();
let Vw=F();
let AAc=null,YU=null,AAU=null,ARu=null,ARw=null,ARv=null,AC3=null,AEm=null,ASb=null,YH=null,ARF=null;
let Vx=()=>{Vx=BQ(Vw);AJa();};
let AJa=()=>{let b;AAc=B7(16);b=new Er;b.n8=0.0;b.n5=0.0;b.n6=0.0;b.n7=1.0;YU=b;b=new Er;b.n8=0.0;b.n5=0.0;b.n6=0.0;b.n7=1.0;AAU=b;b=new Bo;CU();ARu=b;ARw=new Bo;ARv=new Bo;AC3=new Bo;AEm=C_();ASb=new Bo;YH=new Bo;ARF=new Bo;};
let BO=F();
let ZI=null,AOa=null,ACO=null,AOj=null,AB3=null,ADT=null,AHQ=null,XI=null,AIa=null,AB2=null,AJJ=null,ADi=null,ADS=null,YS=null,Xu=null,ANh=null,AFj=null,ADV=null,AB7=null,AMV=null,ADU=null,AQO=null,ADZ=null,AIt=null,AQs=null,AI4=null,WQ=null,XF=null,AN6=null,AEo=null,ATg=null,AMc=null,ARa=null,AHi=null,ANb=null,ATI=null,AF3=null,AGl=null,XL=null,AOL=null,ATm=null,ARq=null,AMq=null,ATx=null;
let JM=()=>{JM=BQ(BO);Z1();};
let Z1=()=>{let b,c;b=new Uh;JM();ZI=b;AOa=new T_;ACO=new T$;b=new Ub;AOj=b;AB3=b;b=new EE;b.nc=2;ADT=b;b=new HX;b.nc=2;AHQ=b;XI=b;b=new HR;b.nc=2;AIa=b;AB2=b;AJJ=new Ua;ADi=new Ud;b=new EE;b.nc=3;ADS=b;b=new HX;b.nc=3;YS=b;b=new HR;b.nc=3;Xu=b;ANh=new Uc;AFj=new Uf;b=new EE;b.nc=4;ADV=b;b=new HX;b.nc=4;AB7=b;b=new HR;b.nc=4;AMV=b;b=new EE;b.nc=5;ADU=b;b=new HX;b.nc=5;AQO=b;b=new HR;b.nc=5;ADZ=b;AIt=new Ue;AQs=new Ti;AI4=new Tk;b=new FV;b.p6=2.0;b.qn=10.0;c=GB(2.0,(-10.0));b.qM=c;b.qs=1.0/(1.0-c);WQ=b;b=new L9;b.p6
=2.0;b.qn=10.0;c=GB(2.0,(-10.0));b.qM=c;b.qs=1.0/(1.0-c);XF=b;b=new NO;b.p6=2.0;b.qn=10.0;c=GB(2.0,(-10.0));b.qM=c;b.qs=1.0/(1.0-c);AN6=b;b=new FV;b.p6=2.0;b.qn=5.0;c=GB(2.0,(-5.0));b.qM=c;b.qs=1.0/(1.0-c);AEo=b;b=new L9;b.p6=2.0;b.qn=5.0;c=GB(2.0,(-5.0));b.qM=c;b.qs=1.0/(1.0-c);ATg=b;b=new NO;b.p6=2.0;b.qn=5.0;c=GB(2.0,(-5.0));b.qM=c;b.qs=1.0/(1.0-c);AMc=b;ARa=new Tl;AHi=new Tm;ANb=new Tn;b=new GF;b.vd=2.0;b.tB=10.0;b.tF=1.0;b.t3=(-21.99114990234375);ATI=b;b=new O$;b.vd=2.0;b.tB=10.0;b.tF=1.0;b.t3=18.84955596923828;AF3
=b;b=new RG;b.vd=2.0;b.tB=10.0;b.tF=1.0;b.t3=(-21.99114990234375);AGl=b;b=new RI;b.yJ=3.0;XL=b;b=new PM;b.Ae=2.0;AOL=b;b=new VO;b.zh=2.0;ATm=b;b=new Q4;LB(b,4);ARq=b;b=new R6;LB(b,4);AMq=b;ATx=ACd(4);};
function PM(){BO.call(this);this.Ae=0.0;}
let AGR=F();
let Uc=F(BO);
let ARN=F();
function EE(){BO.call(this);this.nc=0;}
let HX=F(EE);
let HR=F(EE);
let Jz=F(0);
let ABW=F();
let Uf=F(BO);
let APr=F();
let Ub=F(BO);
function GF(){let a=this;BO.call(a);a.vd=0.0;a.tB=0.0;a.tF=0.0;a.t3=0.0;}
let Ua=F(BO);
let T_=F(BO);
let ALD=F();
let Ws=null,Wu=null,Wt=null;
let AUW=()=>{Ws=new Bc;Wu=new Bc;Wt=new Bc;};
let Xy=F(Dp);
let Jf=F(0);
function Bc(){let a=this;C.call(a);a.j6=0.0;a.j5=0.0;}
let OX=null,OW=null,Rq=null;
let Nf=(a,b,c)=>{a.j6=b;a.j5=c;},
AUu=(a,b)=>{let c=new Bc();Nf(c,a,b);return c;},
ABe=a=>{let b,c,d,e,f,g,h;b=new K;b.jZ=G(16);D(b,b.jY,A(52));c=a.j6;ED(b,b.jY,c);D(b,b.jY,A(53));c=a.j5;ED(b,b.jY,c);D(b,b.jY,A(54));d=new I;e=b.jZ;f=e.data;g=b.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}b=new H;b.j1=1;b.j2=1;B(b);},
ADO=(a,b)=>{let c,d,e,f,g,h,i;if(a===b)return 1;if(b===null)return 0;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BE;d.kb=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BE;c.kb=e;f=c;e.classObject=f;}}if(d!==c)return 0;c=b;g=a.j6;h=(isNaN(g)?1:0)?2143289344:Gl(g);g=c.j6;if(h!=((isNaN(g)?1:0)?2143289344:Gl(g)))return 0;g=a.j5;i=(isNaN(g)?1:0)?2143289344:Gl(g);g=c.j5;if(i==((isNaN(g)?1:0)?2143289344:Gl(g)))return 1;return 0;},
AUN=()=>{let b;b=new Bc;b.j6=1.0;b.j5=0.0;OX=b;b=new Bc;b.j6=0.0;b.j5=1.0;OW=b;b=new Bc;b.j6=0.0;b.j5=0.0;Rq=b;};
let Tm=F(BO);
function FV(){let a=this;BO.call(a);a.p6=0.0;a.qn=0.0;a.qM=0.0;a.qs=0.0;}
let AJD=F();
let Uh=F(BO);
let NO=F(FV);
let AE$=F();
let Hw=F(BG);
let ACx=null,AFt=null,AOX=null,AKa=null;
let ARm=()=>{let b,c,d;b=new Hw;b.kg=A(55);b.ka=0;ACx=b;c=new Hw;c.kg=A(56);c.ka=1;AFt=c;d=new Hw;d.kg=A(57);d.ka=2;AOX=d;AKa=U(Hw,[b,c,d]);};
let SO=F();
let ARy=null;
let Si=()=>{Si=BQ(SO);AHV();};
let AHV=()=>{let b;b=new Bo;CU();ARy=b;};
function G1(){let a=this;BO.call(a);a.y4=null;a.yz=null;}
let LB=(a,b)=>{let c,d,e,f,g,h,i,j;JM();if(b>=2&&b<=5){a:{c=B7(b);a.y4=c;d=B7(b);e=d.data;a.yz=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bm;g=new K;g.jZ=G(16);D(g,g.jY,A(58));J(g,g.jY,b,10);h=new I;c=g.jZ;d=c.data;i=g.jY;j=d.length;if(i>=0&&i<=(j-0|0)){h.j0=L(c.data,0,i);f.j1=1;f.j2=1;f.j3=h;B(f);}g=new H;g.j1
=1;g.j2=1;B(g);},
ACd=a=>{let b=new G1();LB(b,a);return b;};
let R6=F(G1);
let Ti=F(BO);
function S$(){let a=this;C.call(a);a.oM=0.0;a.oK=0.0;a.oL=0.0;a.oO=0.0;a.oP=0.0;a.oN=0.0;}
let AGB=(a,b,c,d,e,f)=>{let g,h,i;a.oL=b;a.oN=c;if(d===0.0){a.oM=e;a.oK=0.0;a.oO=0.0;a.oP=f;}else{FQ();g=F_.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.oM=i*e;a.oK= -h*f;a.oO=h*e;a.oP=i*f;}return a;},
AAr=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.oM;d=a.oM;e=c*d;f=b.oK;g=a.oO;h=e+f*g;i=a.oK;e=c*i;j=a.oP;e=e+f*j;k=a.oL;l=c*k;m=a.oN;l=l+f*m+b.oL;c=b.oO;d=c*d;f=b.oP;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.oN;a.oM=h;a.oK=e;a.oL=l;a.oO=d;a.oP=j;a.oN=c;return a;};
let T$=F(BO);
function F9(){let a=this;C.call(a);a.q$=0.0;a.q9=0.0;a.q_=0.0;a.q8=0.0;}
let AQb=null,AP$=null,AP_=null,AQa=null,ABr=null;
let AST=()=>{let b;b=new F9;b.q$=1.0;b.q9=0.0;b.q_=0.0;b.q8=0.0;AQb=b;b=new F9;b.q$=0.0;b.q9=1.0;b.q_=0.0;b.q8=0.0;AP$=b;b=new F9;b.q$=0.0;b.q9=0.0;b.q_=1.0;b.q8=0.0;AP_=b;b=new F9;b.q$=0.0;b.q9=0.0;b.q_=0.0;b.q8=1.0;AQa=b;b=new F9;b.q$=0.0;b.q9=0.0;b.q_=0.0;b.q8=0.0;ABr=b;};
let O$=F(GF);
function RI(){BO.call(this);this.yJ=0.0;}
let ABG=F();
let ATs=F();
let Ud=F(BO);
function VO(){BO.call(this);this.zh=0.0;}
let Tn=F(BO);
let RG=F(GF);
let WA=F();
let ADX=null,Yj=null,ASi=null;
let Qh=()=>{Qh=BQ(WA);X3();};
let X3=()=>{let b,c,d,e,f,g;ADX=Q(Bo,15);b=Q(Bo,8);Yj=b;c=Q(Bo,9);d=c.data;ASi=c;e=0;f=d.length;while(e<f){g=new Bo;CU();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bo;CU();b[e]=g;e=e+1|0;}};
function KD(){let a=this;C.call(a);a.wW=null;a.w5=null;a.wx=null;a.w6=null;}
let ADs=null;
let N3=()=>{N3=BQ(KD);AOz();};
let ALH=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.wW;e=b.kc;f=c.kc;if(e<f)f=e;e=b.kd;g=c.kd;if(e<g)g=e;e=b.ke;h=c.ke;if(e<h)h=e;d.kc=f;d.kd=g;d.ke=h;i=a.w5;e=b.kc;g=c.kc;if(e>g)g=e;e=b.kd;h=c.kd;if(e>h)h=e;e=b.ke;f=c.ke;if(e>f)f=e;i.kc=g;i.kd=h;i.ke=f;b=a.wx;h=d.kc;j=d.kd;k=d.ke;b.kc=h;b.kd=j;b.ke=k;e=i.kc;f=i.kd;g=i.ke;h=h+e;j=j+f;k=k+g;b.kc=h;b.kd=j;b.ke=k;f=h*0.5;g=j*0.5;e=k*0.5;b.kc=f;b.kd=g;b.ke=e;b=a.w6;g=i.kc;h=i.kd;j=i.ke;b.kc=g;b.kd=h;b.ke=j;e=d.kc;f=d.kd;k=d.ke;g=g-e;e=h-f;f=j-k;b.kc=g;b.kd=e;b.ke=f;return a;},
AOz=()=>{let b;b=new Bo;CU();ADs=b;};
function L0(){let a=this;C.call(a);a.yC=null;a.zP=null;}
let XU=null;
let My=()=>{My=BQ(L0);AOK();};
let AOK=()=>{let b;b=new Bo;CU();XU=b;};
let AB5=F();
let Yb=F();
let AM4=F();
let AGc=F();
let TN=F();
let AF_=null;
let FQ=()=>{FQ=BQ(TN);AHl();};
let Lp=b=>{let c;FQ();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AHl=()=>{let b,c,d,e;b=new Tc;c=ADv(FF(V(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),V(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(D7(c,Cc))c=E(0, 2147483648);d=Ba(Ib(c,Be(c,33)),E(3981806797, 4283543511));d=Ba(Ib(d,Be(d,33)),E(444984403, 3301882366));e=Ib(d,Be(d,33));d=Ba(Ib(e,Be(e,33)),E(3981806797, 4283543511));d=Ba(Ib(d,Be(d,33)),E(444984403, 3301882366));d=Ib(d,Be(d,33));b.yc=e;b.yd=d;AF_=b;};
let Vc=F();
let Xi=null,Xj=null,Xk=null,ABL=null,API=null,AIy=null,Y8=null,Y9=null,AH$=null,AH5=null,AEL=null,AEO=null,AEP=null,AER=null,AIb=null,AH8=null,AIL=null,AFZ=null,ANz=null,AFB=null,AQL=null,AQK=null,AQI=null,AGG=null;
let Q1=()=>{Q1=BQ(Vc);AB$();};
let AB$=()=>{let b,c;b=new Bo;CU();Xi=b;Xj=new Bo;Xk=new Bo;b=new GM;b.rT=1;b.m2=B7(16);ABL=b;b=new GM;b.rT=1;b.m2=B7(16);API=b;AIy=new Bc;Y8=new Bc;Y9=new Bc;AH$=new Bc;AH5=new Bc;AEL=new Bc;AEO=new Bc;AEP=new Bc;AER=new Bc;b=new JS;c=new Bo;b.mR=c;b.nr=0.0;c.kc=0.0;c.kd=0.0;c.ke=0.0;b.nr=0.0;AIb=b;AH8=new Bo;AIL=new Bo;AFZ=new Bo;ANz=new Bo;AFB=new Bo;AQL=new Bo;AQK=new Bo;AQI=new Bo;AGG=new Bo;};
let ZD=F();
let Q4=F(G1);
function LJ(){C.call(this);this.lj=null;}
let O0=null,AJh=null,AQj=null,I4=null,HB=null,LZ=null,VN=null,PZ=null,AK7=null,ATL=null,AK$=null;
let Ej=()=>{Ej=BQ(LJ);Yx();};
let ANP=a=>{let b,c;Ej();b=B7(16);c=b.data;a.lj=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
C_=()=>{let a=new LJ();ANP(a);return a;},
Dc=(a,b)=>{let c;c=b.data;b=a.lj.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
S5=(a,b)=>{let c,d,e,f,g;Ej();c=O0;d=c.data;e=a.lj.data;f=e[0];g=b.lj.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Dc(a,c);},
Lg=a=>{let b;b=a.lj.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
MA=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Lg(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.lj.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
ADE=(a,b,c)=>{let d,e,f,g,h,i;Ej();d=I4;e=b.kc;f=b.kd;g=b.ke;d.kc=e;d.kd=f;d.ke=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cu(f);f=d.kc*e;g=d.kd*e;e=d.ke*e;d.kc=f;d.kd=g;d.ke=e;}d=HB;e=b.kc;f=b.kd;g=b.ke;d.kc=e;d.kd=f;d.ke=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cu(f);f=d.kc*e;g=d.kd*e;e=d.ke*e;d.kc=f;d.kd=g;d.ke=e;}b=Qm(HB,c);e=b.kc;e=e*e;f=b.kd;e=e+f*f;f=b.ke;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Cu(e);h=b.kc*g;e=b.kd*g;f=b.ke*g;b.kc=h;b.kd=e;b.ke=f;}b=LZ;c=HB;e=c.kc;f=c.kd;g=c.ke;b.kc=e;b.kd=f;b.ke=g;b=Qm(b,
I4);e=b.kc;e=e*e;f=b.kd;e=e+f*f;f=b.ke;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Cu(f);f=b.kc*e;g=b.kd*e;e=b.ke*e;b.kc=f;b.kd=g;b.ke=e;}Lg(a);i=a.lj.data;b=HB;i[0]=b.kc;i[4]=b.kd;i[8]=b.ke;b=LZ;i[1]=b.kc;i[5]=b.kd;i[9]=b.ke;b=I4;i[2]= -b.kc;i[6]= -b.kd;i[10]= -b.ke;return a;},
AQn=(a,b)=>{let c;c=a.lj.data;c[0]=b.oM;c[1]=b.oO;c[2]=0.0;c[3]=0.0;c[4]=b.oK;c[5]=b.oP;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.oL;c[13]=b.oN;c[14]=0.0;c[15]=1.0;return a;},
OD=(b,c)=>{let d,e,f;Ej();d=b.data;c=c.data;e=B7(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Du(e,0,b,0,16);},
AQ7=b=>{Ej();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
AD7=b=>{let c,d,e;Ej();c=B7(16);d=AQ7(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AGv=(b,c,d)=>{let e,f,g,h,i,j,k,l;Ej();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
Yx=()=>{let b;O0=B7(16);b=new Er;b.n8=0.0;b.n5=0.0;b.n6=0.0;b.n7=1.0;AJh=b;b=new Er;b.n8=0.0;b.n5=0.0;b.n6=0.0;b.n7=1.0;AQj=b;b=new Bo;CU();I4=b;HB=new Bo;LZ=new Bo;VN=new Bo;PZ=C_();AK7=new Bo;ATL=new Bo;AK$=new Bo;};
let PY=F(0);
let Mz=F();
function Tc(){let a=this;Mz.call(a);a.yc=Cc;a.yd=Cc;}
let Tl=F(BO);
let Ue=F(BO);
function Nb(){let a=this;C.call(a);a.pD=null;a.on=null;a.s1=null;}
let ATE=null,VF=null,AKB=null;
let I6=()=>{I6=BQ(Nb);AH7();};
let Yh=a=>{let b,c,d,e,f,g;I6();b=Q(JS,6);c=b.data;a.pD=b;b=Q(Bo,8);d=b.data;e=new Bo;CU();d[0]=e;d[1]=new Bo;d[2]=new Bo;d[3]=new Bo;d[4]=new Bo;d[5]=new Bo;d[6]=new Bo;d[7]=new Bo;a.on=b;a.s1=B7(24);f=0;while(f<6){e=new JS;g=new Bo;e.mR=g;e.nr=0.0;g.kc=0.0;g.kd=0.0;g.ke=0.0;e.nr=0.0;c[f]=e;f=f+1|0;}},
AMP=()=>{let a=new Nb();Yh(a);return a;},
ALp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;I6();c=VF;d=c.data;Du(c,0,a.s1,0,d.length);c=b.lj;e=a.s1;f=0;Ej();g=0;while(g<8){AGv(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.on.data[f];c=a.s1.data;j=h+1|0;i.kc=c[h];g=j+1|0;i.kd=c[j];h=g+1|0;i.ke=c[g];f=f+1|0;}b=a.pD.data[0];c=a.on.data;i=c[1];k=c[0];l=c[2];m=b.mR;n=i.kc;o=i.kd;p=i.ke;m.kc=n;m.kd=o;m.ke=p;q=k.kc;r=k.kd;s=k.ke;t=n-q;u=o-r;p=p-s;m.kc=t;m.kd=u;m.ke=p;q=k.kc-l.kc;r=k.kd-l.kd;s=k.ke-l.ke;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kc=n;m.kd=s;m.ke
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cu(r);r=m.kc*q;s=m.kd*q;q=m.ke*q;m.kc=r;m.kd=s;m.ke=q;}k=b.mR;b.nr= -(i.kc*k.kc+i.kd*k.kd+i.ke*k.ke);b=a.pD.data[1];c=a.on.data;i=c[4];k=c[5];l=c[7];m=b.mR;n=i.kc;o=i.kd;p=i.ke;m.kc=n;m.kd=o;m.ke=p;q=k.kc;r=k.kd;s=k.ke;t=n-q;u=o-r;p=p-s;m.kc=t;m.kd=u;m.ke=p;q=k.kc-l.kc;r=k.kd-l.kd;s=k.ke-l.ke;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kc=n;m.kd=s;m.ke=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cu(r);r=m.kc*q;s=m.kd*q;q=m.ke*q;m.kc=r;m.kd=s;m.ke=q;}k=b.mR;b.nr= -(i.kc*k.kc+i.kd
*k.kd+i.ke*k.ke);b=a.pD.data[2];c=a.on.data;i=c[0];k=c[4];l=c[3];m=b.mR;n=i.kc;o=i.kd;t=i.ke;m.kc=n;m.kd=o;m.ke=t;r=k.kc;q=k.kd;s=k.ke;r=n-r;u=o-q;p=t-s;m.kc=r;m.kd=u;m.ke=p;q=k.kc-l.kc;s=k.kd-l.kd;n=k.ke-l.ke;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.kc=o;m.kd=n;m.ke=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Cu(r);r=m.kc*q;s=m.kd*q;q=m.ke*q;m.kc=r;m.kd=s;m.ke=q;}k=b.mR;b.nr= -(i.kc*k.kc+i.kd*k.kd+i.ke*k.ke);b=a.pD.data[3];c=a.on.data;k=c[5];i=c[1];l=c[6];m=b.mR;n=k.kc;t=k.kd;u=k.ke;m.kc=n;m.kd=t;m.ke=u;q=i.kc;r=i.kd;s
=i.ke;o=n-q;t=t-r;u=u-s;m.kc=o;m.kd=t;m.ke=u;p=i.kc-l.kc;q=i.kd-l.kd;r=i.ke-l.ke;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.kc=s;m.kd=r;m.ke=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Cu(r);r=m.kc*q;s=m.kd*q;q=m.ke*q;m.kc=r;m.kd=s;m.ke=q;}i=b.mR;b.nr= -(k.kc*i.kc+k.kd*i.kd+k.ke*i.ke);b=a.pD.data[4];c=a.on.data;i=c[2];k=c[3];l=c[6];m=b.mR;n=i.kc;o=i.kd;p=i.ke;m.kc=n;m.kd=o;m.ke=p;q=k.kc;r=k.kd;s=k.ke;t=n-q;u=o-r;p=p-s;m.kc=t;m.kd=u;m.ke=p;q=k.kc-l.kc;r=k.kd-l.kd;s=k.ke-l.ke;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kc=n;m.kd=s;m.ke
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cu(r);r=m.kc*q;s=m.kd*q;q=m.ke*q;m.kc=r;m.kd=s;m.ke=q;}k=b.mR;b.nr= -(i.kc*k.kc+i.kd*k.kd+i.ke*k.ke);b=a.pD.data[5];c=a.on.data;i=c[4];k=c[0];l=c[1];m=b.mR;n=i.kc;o=i.kd;p=i.ke;m.kc=n;m.kd=o;m.ke=p;q=k.kc;r=k.kd;s=k.ke;t=n-q;u=o-r;p=p-s;m.kc=t;m.kd=u;m.ke=p;q=k.kc-l.kc;r=k.kd-l.kd;s=k.ke-l.ke;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.kc=n;m.kd=s;m.ke=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Cu(r);r=m.kc*q;s=m.kd*q;q=m.ke*q;m.kc=r;m.kd=s;m.ke=q;}k=b.mR;b.nr= -(i.kc*k.kc+i.kd
*k.kd+i.ke*k.ke);},
AH7=()=>{let b,c,d,e,f,g,h,i,j;b=Q(Bo,8);c=b.data;d=new Bo;CU();d.kc=(-1.0);d.kd=(-1.0);d.ke=(-1.0);c[0]=d;d=new Bo;d.kc=1.0;d.kd=(-1.0);d.ke=(-1.0);c[1]=d;d=new Bo;d.kc=1.0;d.kd=1.0;d.ke=(-1.0);c[2]=d;d=new Bo;d.kc=(-1.0);d.kd=1.0;d.ke=(-1.0);c[3]=d;d=new Bo;d.kc=(-1.0);d.kd=(-1.0);d.ke=1.0;c[4]=d;d=new Bo;d.kc=1.0;d.kd=(-1.0);d.ke=1.0;c[5]=d;d=new Bo;d.kc=1.0;d.kd=1.0;d.ke=1.0;c[6]=d;d=new Bo;d.kc=(-1.0);d.kd=1.0;d.ke=1.0;c[7]=d;ATE=b;b=B7(24);e=b.data;VF=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.kc;j=i+1|0;e[i]=d.kd;f=j+1|0;e[j]=d.ke;h=h+1|0;}AKB=new Bo;};
function Er(){let a=this;C.call(a);a.n8=0.0;a.n5=0.0;a.n6=0.0;a.n7=0.0;}
let RC=null,RB=null;
let AVL=()=>{let b;b=new Er;b.n8=0.0;b.n5=0.0;b.n6=0.0;b.n7=0.0;RC=b;b=new Er;b.n8=0.0;b.n5=0.0;b.n6=0.0;b.n7=0.0;RB=b;};
function Oq(){let a=this;C.call(a);a.yZ=null;a.zp=null;a.y5=null;}
let AK1=F();
function Bo(){let a=this;C.call(a);a.kc=0.0;a.kd=0.0;a.ke=0.0;}
let ABa=null,ABb=null,AA_=null,AJZ=null,ARY=null;
let CU=()=>{CU=BQ(Bo);Zf();};
let Qm=(a,b)=>{let c,d,e,f,g,h,i;c=a.kd;d=b.ke;e=c*d;f=a.ke;g=b.kd;h=e-f*g;e=b.kc;f=f*e;i=a.kc;d=f-i*d;c=i*g-c*e;a.kc=h;a.kd=d;a.ke=c;return a;},
ABB=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.lj.data;d=a.kc;e=d*c[3];f=a.kd;e=e+f*c[7];g=a.ke;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.kc=i;a.kd=j;a.ke=d;return a;},
Zf=()=>{let b;b=new Bo;CU();b.kc=1.0;b.kd=0.0;b.ke=0.0;ABa=b;b=new Bo;b.kc=0.0;b.kd=1.0;b.ke=0.0;ABb=b;b=new Bo;b.kc=0.0;b.kd=0.0;b.ke=1.0;AA_=b;b=new Bo;b.kc=0.0;b.kd=0.0;b.ke=0.0;AJZ=b;ARY=C_();};
let AFb=F();
let AC$=F(Dp);
let L9=F(FV);
let ALA=F();
let Z6=F();
let APQ=F();
function JS(){let a=this;C.call(a);a.mR=null;a.nr=0.0;}
let Tk=F(BO);
let APV=F();
let AAd=F();
let AMS=F();
let APO=F();
let AKl=F(0);
let AFp=F();
let ANH=F();
let F_=null;
let ACL=()=>{let b,c;F_=B7(16384);b=0;while(b<16384){F_.data[b]=Dh((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=F_.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function Ku(){let a=this;C.call(a);a.y$=null;a.yi=null;}
let Y6=null,AR5=null;
let Mv=()=>{Mv=BQ(Ku);ACj();};
let ACj=()=>{let b,c,d,e,f,g,h,$$je;Cx();b=Br;c=BC(b,M(DQ));b=c<0?null:b.kH.data[c];if(b===null){b=new Ck;d=new Bf;d.ks=0;d.j8=Q(C,4);b.kh=d;b.kO=100;a:{try{d=Cp(M(DQ),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{d=Co(M(DQ),null);Cr(d,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}d=null;}b.kq=d;if(d===null){b=new Bw;d=new K;d.jZ=G(16);D(d,d.jY,A(21));if(M(DQ).j7===null)M(DQ).j7=T(M(DQ).kb.$meta.name);e=M(DQ).j7;D(d,d.jY,e);e=new I;f=d.jZ;g=
f.data;c=d.jY;h=g.length;if(c>=0&&c<=(h-0|0)){e.j0=L(f.data,0,c);b.j1=1;b.j2=1;b.j3=e;B(b);}e=new H;e.j1=1;e.j2=1;B(e);}B6(Br,M(DQ),b);}Y6=b;e=new FR;e.o$=1;e.my=X(4);AR5=e;};
function GS(){let a=this;C.call(a);a.od=null;a.u$=0.0;a.u_=0.0;a.u9=0.0;a.u7=0.0;a.uX=0;a.vD=0;}
let JG=(a,b,c,d,e)=>{let f,g,h;f=a.od.ow;g=1.0/f.nX;h=1.0/f.nQ;a.ca(b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.uX=d;if(e<0)e= -e|0;a.vD=e;},
Ps=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.od.ow;g=f.nX;h=f.nQ;i=D6(d-b);j=g;i=i*j;a.uX=i+CO(i)*0.5|0;k=D6(e-c);i=h;k=k*i;l=k+CO(k)*0.5|0;a.vD=l;if(a.uX==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.u$=b;a.u_=c;a.u9=d;a.u7=e;};
function MD(){let a=this;GS.call(a);a.s6=null;a.ut=null;a.zB=0.0;a.zA=0.0;a.xQ=0.0;a.wO=0.0;a.Ar=0.0;a.Aq=0.0;a.zS=0.0;a.x2=0.0;a.x1=0.0;a.ss=0;}
let UD=(a,b,c,d,e,f)=>{let g,h,i,j;a.s6=B7(20);g=new BI;g.kT=1.0;g.kS=1.0;g.kR=1.0;g.kQ=1.0;CY(g);a.ut=g;a.x2=1.0;a.x1=1.0;a.ss=1;if(b===null){b=new Bm;b.j1=1;b.j2=1;b.j3=A(59);B(b);}a.od=b;JG(a,c,d,e,f);b=a.ut;b.kT=1.0;b.kS=1.0;b.kR=1.0;b.kQ=1.0;CY(b);h=Fk(a.ut);i=a.s6.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;Za(a,h,f);h=a.xQ/2.0;j=a.wO/2.0;a.Ar=h;a.Aq=j;a.ss=1;},
AWv=(a,b,c,d,e)=>{let f=new MD();UD(f,a,b,c,d,e);return f;},
Za=(a,b,c)=>{let d,e,f,g;a.xQ=b;a.wO=c;if(a.ss)return;if(a.zS===0.0&&a.x2===1.0&&a.x1===1.0){d=a.zB;e=d+b;b=a.zA;f=b+c;g=a.s6.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.ss=1;},
APi=(a,b,c,d,e)=>{let f;Ps(a,b,c,d,e);f=a.s6.data;f[3]=b;f[4]=e;f[8]=b;f[9]=c;f[13]=d;f[14]=c;f[18]=d;f[19]=e;};
let Rf=F();
let AMx=F();
let Pk=null;
let AXG=()=>{Pk=new BI;};
function BI(){let a=this;C.call(a);a.kT=0.0;a.kS=0.0;a.kR=0.0;a.kQ=0.0;}
let Lq=null,Rt=null,AKM=null,ATh=null,AGs=null,Tu=0.0,YI=null,ARM=null,XC=null,AQe=null,ARc=null,ALP=null,APw=null,AEV=null,QV=null,ANn=null,AR4=null,AP7=null,ATD=null,OP=null,AGq=null,ATy=null,AJt=null,ASj=null,AQV=null,APo=null,SU=null,XV=null,AI8=null,AEA=null,AFS=null,AD2=null,AI3=null,AME=null,ANI=null;
let CY=a=>{let b,c;b=a.kT;if(b<0.0)a.kT=0.0;else if(b>1.0)a.kT=1.0;c=a.kS;if(c<0.0)a.kS=0.0;else if(c>1.0)a.kS=1.0;c=a.kR;if(c<0.0)a.kR=0.0;else if(c>1.0)a.kR=1.0;c=a.kQ;if(c<0.0)a.kQ=0.0;else if(c>1.0)a.kQ=1.0;return a;},
Fk=a=>{return Ll(((255.0*a.kQ|0)<<24|(255.0*a.kR|0)<<16|(255.0*a.kS|0)<<8|255.0*a.kT|0)&(-16777217));},
Dw=(b,c,d,e)=>{return Ll(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Cs=(b,c)=>{b.kT=((c&(-16777216))>>>24|0)/255.0;b.kS=((c&16711680)>>>16|0)/255.0;b.kR=((c&65280)>>>8|0)/255.0;b.kQ=(c&255)/255.0;},
Xc=()=>{let b;b=new BI;b.kT=1.0;b.kS=1.0;b.kR=1.0;b.kQ=1.0;CY(b);Lq=b;b=new BI;Cs(b,(-1077952513));Rt=b;b=new BI;Cs(b,2139062271);AKM=b;b=new BI;Cs(b,1061109759);ATh=b;b=new BI;b.kT=0.0;b.kS=0.0;b.kR=0.0;b.kQ=1.0;CY(b);AGs=b;Tu=Fk(Lq);b=new BI;b.kT=0.0;b.kS=0.0;b.kR=0.0;b.kQ=0.0;CY(b);YI=b;b=new BI;b.kT=0.0;b.kS=0.0;b.kR=1.0;b.kQ=1.0;CY(b);ARM=b;b=new BI;b.kT=0.0;b.kS=0.0;b.kR=0.5;b.kQ=1.0;CY(b);XC=b;b=new BI;Cs(b,1097458175);AQe=b;b=new BI;Cs(b,1887473919);ARc=b;b=new BI;Cs(b,(-2016482305));ALP=b;b=new BI;b.kT
=0.0;b.kS=1.0;b.kR=1.0;b.kQ=1.0;CY(b);APw=b;b=new BI;b.kT=0.0;b.kS=0.5;b.kR=0.5;b.kQ=1.0;CY(b);AEV=b;b=new BI;Cs(b,16711935);QV=b;b=new BI;Cs(b,2147418367);ANn=b;b=new BI;Cs(b,852308735);AR4=b;b=new BI;Cs(b,579543807);AP7=b;b=new BI;Cs(b,1804477439);ATD=b;b=new BI;Cs(b,(-65281));OP=b;b=new BI;Cs(b,(-2686721));AGq=b;b=new BI;Cs(b,(-626712321));ATy=b;b=new BI;Cs(b,(-5963521));AJt=b;b=new BI;Cs(b,(-1958407169));ASj=b;b=new BI;Cs(b,(-759919361));AQV=b;b=new BI;Cs(b,(-1306385665));APo=b;b=new BI;Cs(b,(-16776961));SU
=b;b=new BI;Cs(b,(-13361921));XV=b;b=new BI;Cs(b,(-8433409));AI8=b;b=new BI;Cs(b,(-92245249));AEA=b;b=new BI;Cs(b,(-9849601));AFS=b;b=new BI;b.kT=1.0;b.kS=0.0;b.kR=1.0;b.kQ=1.0;CY(b);AD2=b;b=new BI;Cs(b,(-1608453889));AI3=b;b=new BI;Cs(b,(-293409025));AME=b;b=new BI;Cs(b,(-1339006721));ANI=b;};
function N1(){let a=this;C.call(a);a.nf=0;a.p_=0;a.pb=null;a.pK=null;a.o2=null;a.pe=null;a.qK=0.0;}
let Ig=0.0;
let AMy=(a,b,c,d)=>{if(b!==null&&!(!d&&a.o2===b)){Ca.ch(a.nf,10242,b.rV);a.o2=b;}if(c!==null&&!(!d&&a.pe===c)){Ca.ch(a.nf,10243,c.rV);a.pe=c;}},
Xw=(a,b,c,d)=>{if(b!==null&&!(!d&&a.pb===b)){Ca.ch(a.nf,10241,b.n1);a.pb=b;}if(c!==null&&!(!d&&a.pK===c)){Ca.ch(a.nf,10240,c.n1);a.pK=c;}},
AE3=()=>{let b,c,d,e,f;b=Ig;if(b>0.0)return b;if(!(B5.pS.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){Ig=1.0;return 1.0;}if(!De){c=B7(16);d=c.data.length;e=new Id;f=0+d|0;e.ko=(-1);e.ky=d;e.j9=d;e.kf=0;e.j9=f;e.qH=0;e.ri=0;e.p9=c;}else{e=new C1;c=BJ(64);e.ko=(-1);e.ky=64;e.j9=64;e.k6=Ct;e.ly=0;e.k2=c;e.kf=0;e.j9=64;e.ma=1;e.lK=0;e.k6=Dl();e=Fb(e);}CH(e,0);CQ(e,e.ky);Bs.cm(34047,e);b=R9(e,0);Ig=b;return b;},
AR9=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.po)P_(c);if(O8===U1){c=new R;c.j1=1;c.j2=1;c.j3=A(60);B(c);}if(!c.po){e=new R;e.j1=1;e.j2=1;e.j3=A(61);B(e);}c.po=0;f=c.qO;c.qO=null;g=1;h=c.pX;e=f.lw;if(h===(e===null?FD:Ii(e.lS)))e=f;else{e=new FM;h=f.lw;JP(e,h===null?f.md:h.l$,h===null?f.mh:h.l9,c.pX);h=Ji;e.rg=h;i=e.lw;if(i===null){Fh(e);h=e.l4;i=Bx(Fp.kg);h.globalCompositeOperation=i;}else{j=h!==h?1:0;MQ(i.l7,j);}i=f.lw;k=i===null?f.md:i.l$;l=i===null?f.mh:i.l9;h=e.lw;if(h===null){Fh(f);Kb(e,
f.oe,0,0,k,l,0,0,k,l);}else{m=i.l7;n=h.l7;JY(m,n,0,0,k,l,0,0,k,l);}if(f.oz){e=new R;e.j1=1;e.j2=1;e.j3=A(62);B(e);}EF();GV(FT,f.p0);h=f.lw;if(h!==null)H_(h.l7);f.oz=1;g=1;}Ca.cx(3317,1);if(c.wK){c=e.lw;ANZ(b,e,c===null?e.md:c.l$,c===null?e.mh:c.l9);}else{c=Ca;h=e.lw;if(h===null)o=6408;else a:{j=h.lS;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new R;e=new K;e.jZ=G(16);BZ(e,e.jY,Cn(A(63)));J(e,e.jY,j,10);h=new I;p=e.jZ;q=p.data;d=e.jY;j
=q.length;if(d>=0&&d<=(j-0|0)){h.j0=L(p.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}r=h===null?e.md:h.l$;k=h===null?e.mh:h.l9;if(h===null)m=6408;else b:{l=h.lS;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new R;e=new K;e.jZ=G(16);Ee(e,e.jY,A(63));J(e,e.jY,l,10);h=new I;p=e.jZ;q=p.data;d=e.jY;j=q.length;if(d>=0&&d<=(j-0|0)){h.j0=L(p.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(h===null)l=
5121;else c:{l=h.lS;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new R;e=new K;e.jZ=G(16);BZ(e,e.jY,Cn(A(63)));J(e,e.jY,l,10);h=new I;p=e.jZ;q=p.data;d=e.jY;j=q.length;if(d>=0&&d<=(j-0|0)){h.j0=L(p.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}l=5121;}c.cA(b,d,o,r,k,0,m,l,e.qA);}if(g){if(e.oz){e=new R;e.j1=1;e.j2=1;e.j3=A(62);B(e);}EF();GV(FT,e.p0);c=e.lw;if(c!==null)H_(c.l7);e.oz=1;}},
AVG=()=>{Ig=0.0;};
function H4(){N1.call(this);this.ow=null;}
let EU=null;
let JW=(a,b)=>{let c,d;a.ow=b;if(!b.po)P_(b);Ca.cB(a.nf,a.p_);AR9(3553,b,0);Xw(a,a.pb,a.pK,1);AMy(a,a.o2,a.pe,1);c=a.qK;d=AE3();if(d!==1.0){c=GK(c,d);Bs.cH(3553,34046,c);a.qK=c;}Ca.cB(a.nf,0);},
AKm=a=>{let b,c,d,e,f,g,h,i;b=a.ow;if(!(b instanceof K_)){b=a;if(!b.$id$){c=E3();b.$id$=c;}d=Bj(a.$id$,4);b=new K;b.jZ=G(16);D(b,b.jY,A(1));e=b.jY;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);return c;}b=new H;b.j1=1;b.j2=1;B(b);}c=b;if(!c.$id$){d=E3();c.$id$=d;}d=Bj(b.$id$,4);b=new K;b.jZ=G(16);D(b,b.jY,A(1));e=b.jY;if(d===null)d=A(2);D(b,e,d);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);return c;}b=new H;b.j1
=1;b.j2=1;B(b);},
ANp=()=>{let b,c,d,e;b=new I7;c=J0(16);b.o7=0;d=Q(FN,c);e=d.data;b.mr=d;b.tc=0.75;b.p$=e.length*0.75|0;EU=b;};
function Bf(){let a=this;C.call(a);a.j8=null;a.j4=0;a.ks=0;a.kD=null;}
let PK=a=>{a.ks=1;a.j8=Q(C,16);},
AXL=()=>{let a=new Bf();PK(a);return a;},
V5=(a,b)=>{a.ks=1;a.j8=Q(C,b);},
AWR=a=>{let b=new Bf();V5(b,a);return b;},
P7=(a,b,c)=>{a.ks=b;a.j8=Q(C,c);},
P0=(a,b)=>{let c=new Bf();P7(c,a,b);return c;},
Io=(a,b,c,d)=>{a.ks=b;if(d===null){d=new Dm;d.j1=1;d.j2=1;B(d);}if(d===M(Bh)){d=new Bm;d.j1=1;d.j2=1;B(d);}if(c>=0){a.j8=D1(d.kb,c);return;}d=new D4;d.j1=1;d.j2=1;B(d);},
AUs=(a,b,c)=>{let d=new Bf();Io(d,a,b,c);return d;},
QQ=(a,b)=>{a.ks=1;if(b===null){b=new Dm;b.j1=1;b.j2=1;B(b);}if(b!==M(Bh)){a.j8=D1(b.kb,16);return;}b=new Bm;b.j1=1;b.j2=1;B(b);},
AUO=a=>{let b=new Bf();QQ(b,a);return b;},
Vp=(a,b)=>{let c,d,e,f,g;c=b.ks;d=b.j4;e=b.j8.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BE;f.kb=e;g=f;e.classObject=g;}}g=Ek(f);a.ks=c;if(g===null){b=new Dm;b.j1=1;b.j2=1;B(b);}if(g===M(Bh)){b=new Bm;b.j1=1;b.j2=1;B(b);}if(d>=0){g=D1(g.kb,d);a.j8=g;c=b.j4;a.j4=c;GA(b.j8,0,g,0,c);return;}b=new D4;b.j1=1;b.j2=1;B(b);},
AT9=a=>{let b=new Bf();Vp(b,a);return b;},
U4=(a,b)=>{LT(a,1,b,0,b.data.length);},
AW3=a=>{let b=new Bf();U4(b,a);return b;},
LT=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BE;g.kb=f;h=g;f.classObject=h;}}h=Ek(g);a.ks=b;if(h===null){h=new Dm;h.j1=1;h.j2=1;B(h);}if(h===M(Bh)){h=new Bm;h.j1=1;h.j2=1;B(h);}if(e>=0){h=D1(h.kb,e);a.j8=h;a.j4=e;GA(c,d,h,0,e);return;}h=new D4;h.j1=1;h.j2=1;B(h);},
AVZ=(a,b,c,d)=>{let e=new Bf();LT(e,a,b,c,d);return e;},
Bg=(a,b)=>{let c,d,e,f;c=a.j8;d=c.data;e=a.j4;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=Lc(a,e);}c=c.data;f=a.j4;a.j4=f+1|0;c[f]=b;},
DO=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.j4)return a.j8.data[b];c=new H;d=new K;d.jZ=G(16);D(d,d.jY,A(18));J(d,d.jY,b,10);D(d,d.jY,A(19));b=a.j4;J(d,d.jY,b,10);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}d=new H;d.j1=1;d.j2=1;B(d);},
Lo=(a,b,c)=>{let d,e,f;a:{d=a.j8;e=a.j4-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(f[e]===b)break;e=c;}return 1;}while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(b.cO(f[e]))return 1;e=c;}}return 0;},
E6=(a,b,c)=>{let d,e,f;a:{d=a.j8;if(!c&&b!==null){e=0;f=a.j4;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.j4;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
K9=(a,b,c)=>{let d,e,f;a:{d=a.j8;if(!(!c&&b!==null)){e=0;f=a.j4;while(e<f){if(d.data[e]===b){Db(a);DW(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.j4;while(true){if(e>=f)break a;if(b.cO(d.data[e])){Db(a);DW(a,e);return 1;}e=e+1|0;}}}return 0;},
DW=(a,b)=>{let c,d,e,f,g,h,i;c=a.j4;if(b<c){d=a.j8;e=d.data;f=e[b];g=c-1|0;a.j4=g;if(!a.ks)e[b]=e[g];else Du(d,b+1|0,d,b,g-b|0);e[a.j4]=null;return f;}f=new H;h=new K;h.jZ=G(16);D(h,h.jY,A(18));J(h,h.jY,b,10);D(h,h.jY,A(19));b=a.j4;J(h,h.jY,b,10);i=new I;d=h.jZ;e=d.data;g=h.jY;c=e.length;if(g>=0&&g<=(c-0|0)){i.j0=L(d.data,0,g);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;f.j1=1;f.j2=1;B(f);},
QK=a=>{let b,c,d,e,f,g;b=a.j8;c=0;d=a.j4;e=null;if(c>d){e=new Bm;e.j1=1;e.j2=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.j4=0;},
Lc=(a,b)=>{let c,d,e,f,g,h;c=a.j8;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BE;e.kb=d;f=e;d.classObject=f;}}e=Ek(e);if(e===null){e=new Dm;e.j1=1;e.j2=1;B(e);}if(e===M(Bh)){e=new Bm;e.j1=1;e.j2=1;B(e);}if(b<0){e=new D4;e.j1=1;e.j2=1;B(e);}e=D1(e.kb,b);d=e.data;g=a.j4;h=d.length;if(g<h)h=g;GA(c,0,e,0,h);a.j8=e;return e;},
Gp=a=>{let b;if(CK){b=new CB;b.kX=1;b.k0=a;b.l1=1;return b;}if(a.kD===null){b=new C9;b.l_=a;b.mb=1;a.kD=b;}return CR(a.kD);},
Sr=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.ks)return 0;if(!(b instanceof Bf))return 0;c=b;if(!c.ks)return 0;d=a.j4;if(d!=c.j4)return 0;e=a.j8;f=c.j8;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cO(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
JN=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.j4)return A(64);b=a.j8;c=new Sj;d=G(32);e=d.data;c.mQ=d;f=c.lZ;if(f==e.length)Gf(c,f+1|0);b=b.data;e=c.mQ.data;g=c.lZ;c.lZ=g+1|0;e[g]=91;h=b[0];if(h===null)JK(c);else{h=h.T();if(h===null)JK(c);else{i=h.j0.length;j=c.lZ+i|0;if(j>c.mQ.data.length)Gf(c,j);Lj(h,0,i,c.mQ,c.lZ);c.lZ=j;}}i=1;while(i<a.j4){g=A(46).j0.length;k=c.lZ+g|0;if(k>c.mQ.data.length)Gf(c,k);Lj(A(46),0,g,c.mQ,c.lZ);c.lZ=k;h=b[i];if(h===null)JK(c);else{h=h.T();if(h===null)JK(c);else{k=h.j0.length;j=c.lZ+k|0;if
(j>c.mQ.data.length)Gf(c,j);Lj(h,0,k,c.mQ,c.lZ);c.lZ=j;}}i=i+1|0;}f=c.lZ;if(f==c.mQ.data.length)Gf(c,f+1|0);a:{b=c.mQ;e=b.data;g=c.lZ;f=g+1|0;c.lZ=f;e[g]=93;if(!f)c=A(65);else{c=new I;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.j0=L(b.data,0,f);}return c;}c=new H;c.j1=1;c.j2=1;B(c);};
function J$(){let a=this;C.call(a);a.uw=0;a.o8=null;a.kH=null;a.wt=0.0;a.vl=0;a.sY=0;a.sU=0;}
let QM=null;
let AJK=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wt=c;d=JH(b,c);a.vl=d*c|0;b=d-1|0;a.sU=b;a.sY=Fd(V(b));a.o8=Q(C,d);a.kH=Q(C,d);return;}e=new Bm;f=new K;f.jZ=G(16);D(f,f.jY,A(66));ED(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
ES=(a,b)=>{let c=new J$();AJK(c,a,b);return c;},
BC=(a,b)=>{let c,d,e;if(b===null){c=new Bm;c.j1=1;c.j2=1;c.j3=A(67);B(c);}d=a.o8;e=Bl(Be(Ba(V(b.cU()),E(2135587861, 2654435769)),a.sY));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cO(b))break;e=(e+1|0)&a.sU;}return e;},
B6=(a,b,c)=>{let d,e,f;d=BC(a,b);if(d>=0){e=a.kH.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.o8.data;e[d]=b;a.kH.data[d]=c;d=a.uw+1|0;a.uw=d;if(d>=a.vl)ABx(a,e.length<<1);return null;},
ABx=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.o8.data.length;a.vl=b*a.wt|0;d=b-1|0;a.sU=d;a.sY=Fd(V(d));e=a.o8;f=a.kH;a.o8=Q(C,b);a.kH=Q(C,b);if(a.uw>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.o8;b=Bl(Be(Ba(V(g.cU()),E(2135587861, 2654435769)),a.sY));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.sU;}j[b]=g;a.kH.data[b]=h;}d=d+1|0;}}}},
AU8=()=>{QM=new C;};
let AFX=F(J$);
let ASE=F();
function DY(){let a=this;C.call(a);a.mG=0;a.ms=0;a.mP=0;a.mF=0;a.nT=0;a.mK=null;a.n$=0;a.pq=0;}
let AKu=(a,b)=>{if(!(b instanceof DY))return 0;return AFF(a,b);},
AFF=(a,b)=>{let c,d,e;a:{if(b!==null&&a.mG==b.mG&&a.ms==b.ms&&a.mF==b.mF&&a.mP==b.mP){c=a.mK;d=b.mK;if(c===d)e=1;else if(!(d instanceof I))e=0;else{d=d;e=c.j0!==d.j0?0:1;}if(e&&a.n$==b.n$){e=1;break a;}}e=0;}return e;};
let ASW=F();
let AHu=F();
let AKY=F();
let AIY=F();
let RR=F();
let XB=null;
let S8=()=>{S8=BQ(RR);AHC();};
let AHC=()=>{let b,c,d;b=new KD;N3();c=new Bo;CU();b.wW=c;d=new Bo;b.w5=d;b.wx=new Bo;b.w6=new Bo;c.kc=0.0;c.kd=0.0;c.ke=0.0;d.kc=0.0;d.kd=0.0;d.ke=0.0;ALH(b,c,d);XB=b;};
let Yw=F();
let AJP=F();
let AIz=F();
let AJl=F();
let APp=F();
let AFk=F();
let AQY=F();
let AG7=F();
let AAn=F();
let ABM=F();
let JR=F(BG);
let ATi=null,AQ1=null,AEG=null;
let AFQ=()=>{let b,c;b=new JR;b.kg=A(68);b.ka=0;ATi=b;c=new JR;c.kg=A(69);c.ka=1;AQ1=c;AEG=U(JR,[b,c]);};
let AJV=F();
let TU=F(0);
let DF=F();
let YG=F(DF);
let YE=F(DF);
let AH2=F(DF);
let AC2=F(DF);
let AM6=F(DF);
let L4=F(DF);
let ACQ=F(L4);
let HK=F(0);
let AD0=F();
let Fm=F(0);
let AMQ=F();
let AQU=F();
let ABc=F();
let EL=F();
let ALJ=F(EL);
let HC=F(EL);
let DS=F(HC);
let AEh=null;
let Re=()=>{Re=BQ(DS);Zb();};
let Zb=()=>{let b;b=new Bo;CU();AEh=b;};
let AMw=F();
let APn=F(DS);
let AHj=F(DS);
let ARJ=F(EL);
let RH=null;
let AVl=()=>{RH=B7(3);};
let Ls=F(EL);
let Yp=F(Ls);
let ACM=F(DS);
let G$=F(HC);
let AIS=F(G$);
let AHg=F(DS);
let AJo=F(DS);
let AIQ=F(G$);
let HA=F(BG);
let AIE=null,ALE=null,AEi=null,ABz=null;
let AKU=()=>{let b,c,d;b=new HA;b.kg=A(70);b.ka=0;AIE=b;c=new HA;c.kg=A(71);c.ka=1;ALE=c;d=new HA;d.kg=A(72);d.ka=2;AEi=d;ABz=U(HA,[b,c,d]);};
let FX=F();
let M2=F(FX);
let W3=F(M2);
let HS=F(BG);
let AQ0=null,ARB=null,WK=null,ARR=null;
let AGL=()=>{let b,c,d;b=new HS;b.kg=A(73);b.ka=0;AQ0=b;c=new HS;c.kg=A(74);c.ka=1;ARB=c;d=new HS;d.kg=A(75);d.ka=2;WK=d;ARR=U(HS,[b,c,d]);};
let C3=F(FX);
let Ih=F(C3);
let AA1=F();
let GL=F(C3);
let AP0=null,APZ=null,AP1=null,AQ8=null;
let UF=()=>{UF=BQ(GL);AIl();};
let AIl=()=>{let b;b=new Bo;CU();AP0=b;APZ=new Bo;AP1=new Bo;b=new Er;b.n8=0.0;b.n5=0.0;b.n6=0.0;b.n7=1.0;AQ8=b;};
let Ey=F(GL);
let F3=F(Ey);
let ADW=F(F3);
let HQ=F(C3);
let ATz=F(HQ);
let APk=F(C3);
let FA=F(C3);
let Yy=F(FA);
let Hm=F(C3);
let ADN=F(Ey);
let AF$=F(Ey);
let KQ=F(C3);
let ALK=F(KQ);
let ZT=F(FA);
let AHs=F(F3);
let ALB=F(C3);
let AJy=F(FA);
let ALR=F(C3);
let ANB=F(GL);
let AGf=F(Dp);
let AAz=F(Dp);
let AAS=F(Ey);
let AMk=F(Hm);
let ARL=F(Ih);
let AKv=F(Ih);
let ANm=F(Hm);
let AIn=F(F3);
let ASt=F(HQ);
let EJ=F(FX);
let AIX=F(EJ);
let FG=F();
let AMK=F(FG);
let AN5=F(EJ);
let APj=F(EJ);
let AQl=F(FG);
let ADu=F(EJ);
let APq=F(FG);
let Kr=F(0);
let Of=F(0);
function BE(){let a=this;C.call(a);a.j7=null;a.kb=null;a.qe=null;}
let UL=0;
let AWC=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BE;c.kb=b;d=c;b.classObject=d;}return c;},
AIO=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=E3();b.$id$=c;}d=a.$id$;b=new K;b.jZ=G(16);D(b,b.jY,A(76));J(b,b.jY,d,10);c=new I;e=b.jZ;f=e.data;g=b.jY;d=f.length;if(g>=0&&g<=(d-0|0)){c.j0=L(e.data,0,g);return c;}b=new H;b.j1=1;b.j2=1;B(b);},
Ek=a=>{let b,c,d;b=a.kb.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BE;c.kb=b;d=c;b.classObject=d;}}return c;},
AHU=()=>{DR.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){Tf(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Bh,callable:function(obj,args){J5();OR();return null;}}];DQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){Q8(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[DQ],returnType:Bh,callable:function(obj,
args){AUh(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){AV3(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return AUq(obj);}}];Z.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){SB(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,
args){Qn(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CF,callable:function(obj,args){return AVB(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[CF],returnType:Bh,callable:function(obj,args){AWu(obj,DC(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CF,callable:function(obj,args){return AYe(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[CF],returnType:Bh,callable:function(obj,
args){AU6(obj,DC(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Dt,callable:function(obj,args){return AWr(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Dt],returnType:Bh,callable:function(obj,args){AWj(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BY,callable:function(obj,args){return AXE(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:Bh,callable:function(obj,
args){AVC(obj,B$(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BY,callable:function(obj,args){return AWp(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:Bh,callable:function(obj,args){AVi(obj,B$(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BY,callable:function(obj,args){return AVH(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:Bh,callable
:function(obj,args){AUl(obj,B$(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:KL,callable:function(obj,args){return AVY(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[KL],returnType:Bh,callable:function(obj,args){AWK(obj,ATZ(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CF,callable:function(obj,args){return AT7(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:CF,callable:function(obj,args){return AWS(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[CF],returnType:Bh,callable:function(obj,args){AX4(obj,DC(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[CF],returnType:Bh,callable:function(obj,args){AUL(obj,DC(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CI,callable:function(obj,args){return AXA(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[CI],returnType:Bh,callable:function(obj,args){AT6(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[CI,Bc],returnType:Bc,callable:function(obj,args){return AXF(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AVQ(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AVm(obj
);}},{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Cl],returnType:Bh,callable:function(obj,args){AXn(obj,DH(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return OS(obj);}}];Bf.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){PK(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:Bh,callable:function(obj,args)
{V5(obj,B$(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cl,BY],returnType:Bh,callable:function(obj,args){P7(obj,DH(args[0]),B$(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cl,BY,BE],returnType:Bh,callable:function(obj,args){Io(obj,DH(args[0]),B$(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BE],returnType:Bh,callable:function(obj,args){QQ(obj,args[0]);return null;}},{name:"<init>",modifiers:
0,accessLevel:3,parameterTypes:[Bf],returnType:Bh,callable:function(obj,args){Vp(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[D$(C)],returnType:Bh,callable:function(obj,args){U4(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cl,D$(C),BY,BY],returnType:Bh,callable:function(obj,args){LT(obj,DH(args[0]),args[1],B$(args[2]),B$(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Bh,callable:function(obj,
args){Bg(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Bh,callable:function(obj,args){AVp(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Bh,callable:function(obj,args){AXt(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Bh,callable:function(obj,args){AXV(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers
:0,accessLevel:3,parameterTypes:[Bf],returnType:Bh,callable:function(obj,args){AVM(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bf,BY,BY],returnType:Bh,callable:function(obj,args){AT_(obj,args[0],B$(args[1]),B$(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[D$(C)],returnType:Bh,callable:function(obj,args){AVw(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[D$(C),BY,BY],returnType:Bh,callable:function(obj,
args){AUB(obj,args[0],B$(args[1]),B$(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:C,callable:function(obj,args){return DO(obj,B$(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BY,C],returnType:Bh,callable:function(obj,args){AWX(obj,B$(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BY,C],returnType:Bh,callable:function(obj,args){AWm(obj,B$(args[0]),args[1]);return null;}},{name:"insertRange",modifiers
:0,accessLevel:3,parameterTypes:[BY,BY],returnType:Bh,callable:function(obj,args){AXe(obj,B$(args[0]),B$(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BY,BY],returnType:Bh,callable:function(obj,args){AYd(obj,B$(args[0]),B$(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Cl],returnType:Cl,callable:function(obj,args){return Lo(obj,args[0],DH(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bf,Cl],returnType:Cl,callable
:function(obj,args){return AVU(obj,args[0],DH(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bf,Cl],returnType:Cl,callable:function(obj,args){return AWq(obj,args[0],DH(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Cl],returnType:BY,callable:function(obj,args){return E6(obj,args[0],DH(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Cl],returnType:BY,callable:function(obj,args){return AWP(obj,args[0],DH(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Cl],returnType:Cl,callable:function(obj,args){return K9(obj,args[0],DH(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:C,callable:function(obj,args){return DW(obj,B$(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BY,BY],returnType:Bh,callable:function(obj,args){AU1(obj,B$(args[0]),B$(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bf,Cl],returnType:Cl,callable:function(obj,
args){return AXX(obj,args[0],DH(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AUf(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AXS(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AYc(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AXB(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AUG(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){QK(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D$(C),callable:function(obj,args){return AWQ(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:D$(C),callable:function(obj,args){return AXs(obj,B$(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:D$(C),callable:function(obj,args){return AXP(obj,B$(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BY],returnType:D$(C),callable:function(obj,args){return Lc(obj,B$(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){AXk(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[Ik],returnType:Bh,callable:function(obj,args){AX0(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[Ik,BY],returnType:C,callable:function(obj,args){return AXq(obj,args[0],B$(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[Ik,BY],returnType:BY,callable:function(obj,args){return AXa(obj,args[0],B$(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){AXo(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable
:function(obj,args){ATW(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CB,callable:function(obj,args){return Gp(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[N9],returnType:DL,callable:function(obj,args){return AYa(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:Bh,callable:function(obj,args){AUg(obj,B$(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return AWw(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D$(C),callable:function(obj,args){return AUe(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BE],returnType:D$(C),callable:function(obj,args){return AUA(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BY,callable:function(obj,args){return AUv(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Cl,callable:function(obj,
args){return Sr(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Cl,callable:function(obj,args){return AXx(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return JN(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[I],returnType:I,callable:function(obj,args){return AXf(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BE],returnType:Bf,callable:function(obj,
args){return AW2(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Cl,BY,BE],returnType:Bf,callable:function(obj,args){return AXO(DH(args[0]),B$(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[D$(C)],returnType:Bf,callable:function(obj,args){return AUr(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:H0,callable:function(obj,args){return AUE(obj);}}];DU.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bh,callable:function(obj,args){Uq(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){O6(obj);return null;}}];Dk.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){Qe(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP],returnType:Bh,callable:function(obj,args){N7(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,
BP],returnType:Bh,callable:function(obj,args){Wc(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP],returnType:Bh,callable:function(obj,args){VH(obj,args[0],args[1],args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP,BP],returnType:Bh,callable:function(obj,args){Wv(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BP,BP,BP,BP,BP],returnType:Bh,callable:function(obj,
args){Sf(obj,args[0],args[1],args[2],args[3],args[4]);return null;}},{name:"act",modifiers:0,accessLevel:3,parameterTypes:[CF],returnType:Cl,callable:function(obj,args){return Oi(obj,DC(args[0]));}},{name:"restart",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){UX(obj);return null;}}];C4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){VP(obj);return null;}},{name:"begin",modifiers:0,accessLevel:2,parameterTypes
:[],returnType:Bh,callable:function(obj,args){O1(obj);return null;}},{name:"update",modifiers:0,accessLevel:2,parameterTypes:[CF],returnType:Bh,callable:function(obj,args){R8(obj,DC(args[0]));return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){Wl(obj);return null;}},{name:"getColor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BI,callable:function(obj,args){return AUD(obj);}},{name:"setColor",modifiers:0,accessLevel:3,parameterTypes:[BI],returnType
:Bh,callable:function(obj,args){AW_(obj,args[0]);return null;}},{name:"getEndColor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BI,callable:function(obj,args){return AWT(obj);}},{name:"setEndColor",modifiers:0,accessLevel:3,parameterTypes:[BI],returnType:Bh,callable:function(obj,args){AWh(obj,args[0]);return null;}}];Cb.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){O_(obj);return null;}},{name:"begin",modifiers:0,accessLevel:2,parameterTypes
:[],returnType:Bh,callable:function(obj,args){Ta(obj);return null;}},{name:"update",modifiers:0,accessLevel:2,parameterTypes:[CF],returnType:Bh,callable:function(obj,args){Su(obj,DC(args[0]));return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){Uz(obj);return null;}},{name:"setStartPosition",modifiers:0,accessLevel:3,parameterTypes:[CF,CF],returnType:Bh,callable:function(obj,args){AWH(obj,DC(args[0]),DC(args[1]));return null;}},{name:"setPosition",modifiers
:0,accessLevel:3,parameterTypes:[CF,CF],returnType:Bh,callable:function(obj,args){AVD(obj,DC(args[0]),DC(args[1]));return null;}},{name:"setPosition",modifiers:0,accessLevel:3,parameterTypes:[CF,CF,BY],returnType:Bh,callable:function(obj,args){AW$(obj,DC(args[0]),DC(args[1]),B$(args[2]));return null;}},{name:"getX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CF,callable:function(obj,args){return AVt(obj);}},{name:"setX",modifiers:0,accessLevel:3,parameterTypes:[CF],returnType:Bh,callable:function(obj,
args){AUS(obj,DC(args[0]));return null;}},{name:"getY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CF,callable:function(obj,args){return AX8(obj);}},{name:"setY",modifiers:0,accessLevel:3,parameterTypes:[CF],returnType:Bh,callable:function(obj,args){AV_(obj,DC(args[0]));return null;}},{name:"getStartX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CF,callable:function(obj,args){return AV8(obj);}},{name:"getStartY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CF,callable:function(obj,
args){return AXh(obj);}},{name:"getAlignment",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BY,callable:function(obj,args){return AVF(obj);}},{name:"setAlignment",modifiers:0,accessLevel:3,parameterTypes:[BY],returnType:Bh,callable:function(obj,args){AU$(obj,B$(args[0]));return null;}}];C2.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable:function(obj,args){Sb(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bh,callable
:function(obj,args){Wr(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cl,callable:function(obj,args){return AWD(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Cl],returnType:Bh,callable:function(obj,args){AT3(obj,DH(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:GN,callable:function(obj,args){return AUJ(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[GN],returnType:Bh,callable
:function(obj,args){AW0(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CI,callable:function(obj,args){return AX3(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[CI],returnType:Bh,callable:function(obj,args){AVx(obj,args[0]);return null;}}];},
NY=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.kb.$meta.primitive?1:0)&&!(a.kb.$meta.item===null?0:1)){if(a.qe===null){if(!UL){UL=1;AHU();}b=a.kb.$meta.methods;a.qe=Q(HH,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof FS())?e:e[Bt]===true?e:e.kG;g=T(f.name);if(g===A(77))h=1;else if(!(A(77) instanceof I))h=0;else{e=A(77);h=g.j0!==e.j0?0:1;}if(h){g=f.parameterTypes;i=Q(BE,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BE;e.kb
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.qe.data;h=c+1|0;e=new HH;g=T(f.name);k=f.modifiers;n=f.accessLevel;f=DA(f.callable,"call");e.lq=a;e.y2=g;e.rw=k;e.su=n;e.oG=i;e.uY=f;j[c]=e;c=h;}d=d+1|0;}i=a.qe;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BE;e.kb=b;f=e;b.classObject=f;}}e=Ek(e);if(e===null){e=new Dm;e.j1=1;e.j2=1;B(e);}if(e===M(Bh)){e=new Bm;e.j1=1;e.j2=1;B(e);}if(c<0){e=new D4;e.j1=1;e.j2=1;B(e);}i=i.data;f=D1(e.kb,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.qe=f;}return a.qe.p();}return Q(HH,0);},
ARZ=a=>{let b,c,d,e,f,g,h,i,j,k;b=(NY(a)).data;c=b.length;d=Q(HH,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Lh(h.rw,h.su)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=BT(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BE;h.kb=j;k=h;j.classObject=k;}}j=Ek(h);if(j===null){h=new Dm;h.j1=1;h.j2=1;B(h);}if(j===M(Bh)){h=new Bm;h.j1=1;h.j2=1;B(h);}if(f<0){h=new D4;h.j1=1;h.j2=1;B(h);}k=D1(j.kb,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
AOW=(a,b)=>{let c,d,e,f;c=(NY(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Hs;f.j1=1;f.j2=1;B(f);}f=c[e];if(UU(f.oG.p(),b))break;e=e+1|0;}return f;},
AOU=(a,b)=>{let c,d,e,f,g;c=(NY(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new Hs;f.j1=1;f.j2=1;B(f);}f=c[e];g=!(Lh(f.rw,f.su)&1)?0:1;if(g&&UU(f.oG.p(),b))break;e=e+1|0;}return f;};
let ABT=F();
let AMD=b=>{let c,d,e,f,g;if(b===null)return null;c=BJ(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof FS())?g:g[Bt]===true?g:g.kG;e=e+1|0;}return c;},
B9=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
DA=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let AAG=F();
let Xt=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
MH=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(MH(d[e],c))return 1;e=e+1|0;}return 0;},
EI=b=>{setTimeout(()=>{AWU(Pb)(b);},0);},
Pb=b=>{b.c4();},
Nl=(b,c)=>{setTimeout(()=>{Pb(b);},c);},
UY=b=>{return T(b.$meta.name);},
AHD=()=>{return [];};
function Dx(){let a=this;C.call(a);a.j3=null;a.li=null;a.j1=0;a.j2=0;a.yS=null;}
let S=a=>{a.j1=1;a.j2=1;},
AXi=()=>{let a=new Dx();S(a);return a;},
FY=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
AUt=a=>{let b=new Dx();FY(b,a);return b;},
Ja=(a,b,c)=>{a.j1=1;a.j2=1;a.j3=b;a.li=c;},
AWJ=(a,b)=>{let c=new Dx();Ja(c,a,b);return c;},
Bi=a=>{return a;},
AOh=a=>{return a.j3;},
AVu=a=>{return a.c5();},
AW9=a=>{let b;b=a.li;if(b===a)b=null;return b;},
AVJ=a=>{let b,c;if(Do===null){b=new FK;c=new Ci;c.lB=BJ(32);b.lX=c;c=new K;Bp(c);c.jZ=G(16);b.lF=c;b.lD=G(32);b.lG=0;b.lI=Cg;Do=b;}J8(a,Do);},
J8=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BE;d.kb=c;e=d;c.classObject=e;}}if(d.j7===null)d.j7=T(d.kb.$meta.name);DG(Bx(d.j7));d=a.c5();if(d!==null){c=new K;c.jZ=G(16);D(c,c.jY,A(78));D(c,c.jY,d);e=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);DG(Bx(e));}else{b=new H;b.j1=1;b.j2=1;B(b);}}a:{DG("\n");f=a.yS;if(f!==null){f=f.data;j=f.length;h=0;while(true){if(h>=j)break a;e=f[h];DG("\tat ");c=A(2);if(e!==null)c=JN(e);DG(Bx(c));DG("\n");h
=h+1|0;}}}c=a.li;if(c!==null&&c!==a){DG("Caused by: ");J8(a.li,b);}};
let Bz=F(Dx);
let HY=a=>{a.j1=1;a.j2=1;},
ATX=()=>{let a=new Bz();HY(a);return a;},
KB=(a,b,c)=>{a.j1=1;a.j2=1;a.j3=b;a.li=c;},
AXl=(a,b)=>{let c=new Bz();KB(c,a,b);return c;};
let Bw=F(Bz);
let Iv=a=>{a.j1=1;a.j2=1;},
AU_=()=>{let a=new Bw();Iv(a);return a;},
GX=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
AUU=a=>{let b=new Bw();GX(b,a);return b;};
let AHb=F(Bw);
let J1=F(0);
function I(){C.call(this);this.lR=0;}
let VW=null,Ml=null,Or=null;
let Ys=(a,b)=>{a.j0=L(b.data,0,b.data.length);},
AT1=a=>{let b=new I();Ys(b,a);return b;},
AE_=(a,b)=>{a.j0=b;},
TP=a=>{let b=new I();AE_(b,a);return b;},
ATQ=(a,b,c,d)=>{let e,f;e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.j0=L(b.data,c,d);return;}f=new H;f.j1=1;f.j2=1;B(f);},
KZ=(a,b,c)=>{let d=new I();ATQ(d,a,b,c);return d;},
Lj=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.j0.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AUF(a.j0,b,d.data,e,g);return;}}h=new H;h.j1=1;h.j2=1;B(h);},
MT=(a,b,c)=>{let d,e,f;if((c+b.j0.length|0)>a.j0.length)return 0;d=0;a:{b:{while(d<b.j0.length){if(d<0)break a;if(d>=b.j0.length)break a;e=b.j0.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.j0.length)break b;if(e!=a.j0.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
Lk=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.j0.length>a.j0.length)return 0;c=0;d=a.j0.length-b.j0.length|0;a:{b:{while(d<a.j0.length){if(d<0)break a;if(d>=a.j0.length)break a;e=a.j0.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.j0.length)break b;if(e!=b.j0.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
HT=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.j0.length)return (-1);if(a.j0.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.j0.length-1|0))return (-1);if(a.j0.charCodeAt(c)==e&&a.j0.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
E1=(a,b,c)=>{let d,e,f,g;d=a.j0.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.j0.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.j0.charCodeAt(d)==g){b=d-1|0;if(a.j0.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Qy=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.j0.length-b.j0.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.j0.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.j0.length)break a;g=a.j0.charCodeAt(f);if(e<0)break b;if(e>=b.j0.length)break b;if(g!=b.j0.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
ADd=(a,b,c)=>{let d,e,f;d=a.j0.length-b.j0.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.j0.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.j0.length)break a;f=a.j0.charCodeAt(f);if(e<0)break b;if(e>=b.j0.length)break b;if(f!=b.j0.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
Cj=(a,b,c)=>{let d,e,f;d=a.j0.length;e=BT(b,c);if(!e)return Ml;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return TP(a.j0.substring(b,c));f=new W;f.j1=1;f.j2=1;B(f);},
Da=(a,b)=>{let c,d,e,f;c=a.j0.length-b.j0.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.j0.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.j0.length)break a;f=a.j0.charCodeAt(f);if(e<0)break b;if(e>=b.j0.length)break b;if(f!=b.j0.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
M$=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.jZ=G(16);e=a.j0.length-b.j0.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cj(a,f,a.j0.length);g=d.jY;if(b===null)b=A(2);D(d,g,b);b=new I;h=d.jZ;i=h.data;j=d.jY;e=i.length;if(j>=0&&j<=(e-0|0)){b.j0=L(h.data,0,j);return b;}b=new H;b.j1=1;b.j2=1;B(b);}k=0;d:{while(k<b.j0.length){j=f+k|0;if(j<0)break b;if(j>=a.j0.length)break b;j=a.j0.charCodeAt(j);if(k<0)break c;if(k>=b.j0.length)break c;if(j!=b.j0.charCodeAt(k)){if(f<0)break a;if(f>=a.j0.length)break a;k=a.j0.charCodeAt(f);j
=d.jY;Bk(d,j,j+1|0);d.jZ.data[j]=k;break d;}k=k+1|0;}D(d,d.jY,c===null?A(2):c);f=f+(b.j0.length-1|0)|0;}f=f+1|0;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
AHZ=a=>{let b,c,d;b=0;c=a.j0.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.j0.length)break;if(a.j0.charCodeAt(b)>32)break a;b=b+1|0;}d=new W;d.j1=1;d.j2=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.j0.length)break b;if(a.j0.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cj(a,b,c+1|0);}d=new W;d.j1=1;d.j2=1;B(d);},
Cn=a=>{return a;},
AQ_=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof I))return 0;c=b;return a.j0!==c.j0?0:1;},
ALf=a=>{let b;a:{if(!a.lR){b=0;while(true){if(b>=a.j0.length)break a;a.lR=(31*a.lR|0)+a.j0.charCodeAt(b)|0;b=b+1|0;}}}return a.lR;},
AXy=()=>{let b;VW=G(0);b=new I;b.j0="";Ml=b;Or=new NR;};
let Ex=F();
function Fy(){Ex.call(this);this.np=0;}
let Ow=null,Eh=null;
let KJ=(b,c)=>{if(b!==null)return VV(b,0,b.j0.length,c);b=new CA;b.j1=1;b.j2=1;b.j3=A(79);B(b);},
VV=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new CA;b.j1=1;b.j2=1;b.j3=A(80);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.j0.length){a:{switch(b.j0.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new CA;b.j1=1;b.j2=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.j0.length)break b;g=AOG(b.j0.charCodeAt(g));if(g<0){k=new CA;l=Cj(b,c,d);b=new K;b.jZ=G(16);D(b,b.jY,A(81));c=b.jY;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.jZ;o=n.data;d=b.jY;e
=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);k.j1=1;k.j2=1;k.j3=m;B(k);}b=new H;b.j1=1;b.j2=1;B(b);}if(g>=e){k=new CA;l=Cj(b,c,d);b=new K;b.jZ=G(16);D(b,b.jY,A(82));J(b,b.jY,e,10);D(b,b.jY,A(78));c=b.jY;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.jZ;o=n.data;d=b.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);k.j1=1;k.j2=1;k.j3=m;B(k);}b=new H;b.j1=1;b.j2=1;B(b);}if(h>i){b=new CA;b.j1=1;b.j2=1;b.j3=A(83);B(b);}h=Dr(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new CA;l=Cj(b,c,d);b
=new K;b.jZ=G(16);D(b,b.jY,A(84));c=b.jY;if(l===null)l=A(2);D(b,c,l);m=new I;n=b.jZ;o=n.data;d=b.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);k.j1=1;k.j2=1;k.j3=m;B(k);}b=new H;b.j1=1;b.j2=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new CA;k=new K;k.jZ=G(16);D(k,k.jY,A(85));J(k,k.jY,e,10);m=new I;n=k.jZ;o=n.data;d=k.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);b.j1=1;b.j2=1;b.j3=m;B(b);}b=new H;b.j1=1;b.j2=1;B(b);},
La=b=>{if(b!==null)return VV(b,0,b.j0.length,10);b=new CA;b.j1=1;b.j2=1;b.j3=A(79);B(b);},
E0=()=>{let b,c,d,e,f;a:{if(Eh===null){b=Q(Fy,256);c=b.data;Eh=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new Fy;f.np=d-128|0;c[d]=f;d=d+1|0;}}}},
B$=a=>{return a.np;},
AOG=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
O9=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
Eb=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AXj=()=>{Ow=M(BY);};
function Bb(){let a=this;C.call(a);a.jZ=null;a.jY=0;}
let Ed=a=>{a.jZ=G(16);},
AVr=()=>{let a=new Bb();Ed(a);return a;},
Di=(a,b)=>{a.jZ=G(b);},
AXH=a=>{let b=new Bb();Di(b,a);return b;},
I1=(a,b)=>{D(a,a.jY,b===null?A(2):b.T());return a;},
Ff=(a,b)=>{D(a,a.jY,b);return a;},
D=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.jY){if(c===null)c=A(2);else if(c.j0.length?0:1)return a;IC(a,a.jY+c.j0.length|0);d=a.jY-1|0;while(d>=b){a.jZ.data[d+c.j0.length|0]=a.jZ.data[d];d=d+(-1)|0;}a.jY=a.jY+c.j0.length|0;e=0;a:{while(e<c.j0.length){f=a.jZ;d=b+1|0;if(e<0)break a;if(e>=c.j0.length)break a;f.data[b]=c.j0.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
IE=(a,b)=>{return J(a,a.jY,b,10);},
Iy=(a,b,c)=>{return J(a,a.jY,b,c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(EY(c,d)<0){if(e)Bk(a,b,b+1|0);else{Bk(a,b,b+2|0);f=a.jZ.data;g=b+1|0;f[b]=45;b=g;}a.jZ.data[b]=NT(c,d);}else{h=1;i=1;j=D9((-1),d);b:{while(true){k=Dr(h,d);if(EY(k,c)>0){k=h;break b;}i=i+1|0;if(EY(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bk(a,b,b+i|0);if(e)e=b;else{f=a.jZ.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.jZ.data;b=e+1|0;f[e]=NT(D9(c,k),d);c=AWa(c,k);k=D9(k,d);e=b;}}}return a;},
ED=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BT(c,0.0);if(!d){if(1.0/c===Infinity){Bk(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bk(a,b,b+4|0);e=a.jZ.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bk(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bk(a,b,b+8|0);d=b;}else{Bk(a,b,b+9|0);e=a.jZ.data;d=b+1|0;e[b]=45;}e=a.jZ.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Rm;AKd(c,f);d=f.tZ;g=f.tL;h=f.vL;i=1;j=1;if(h)j=2;k=9;l=APM(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bk(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.jZ.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.jZ.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.jZ.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.jZ.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Qr=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BT(c,0.0);if(!d){if(1.0/c===Infinity){Bk(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bk(a,b,b+4|0);e=a.jZ.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bk(a,b,b+3|0);e=a.jZ.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bk(a,b,b+8|0);d=b;}else{Bk(a,b,b+9|0);e=a.jZ.data;d=b+1|0;e[b]=45;}e=a.jZ.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=QD;AGM(c,f);g=f.uk;h=f.tC;i=f.vC;j=1;k=1;if(i)k=2;l=18;m=AMC(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bk(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.jZ.data;i=b+1|0;e[b]=45;}p=E(1569325056, 23283064);if(o){e=a.jZ.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(AC_(p,Cc))d=0;else{d=Bl(M5(g,p));g=XG(g,p);}e=a.jZ.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=M5(p,V(10));q=q+1|0;}if(h){e=a.jZ.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
APM=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AMC=b=>{let c,d,e,f,g;c=V(1);d=0;e=16;f=Oh.data;g=f.length-1|0;while(g>=0){if(D7(XG(b,Ba(c,f[g])),Cc)){d=d|e;c=Ba(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
Gu=(a,b)=>{return a.de(a.jY,b);},
Ee=(a,b,c)=>{D(a,b,c===null?A(2):c.T());return a;},
IC=(a,b)=>{let c,d,e,f,g,h;c=a.jZ.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jZ=g;},
Ms=a=>{let b,c,d,e,f;b=new I;c=a.jZ;d=c.data;e=a.jY;f=d.length;if(e>=0&&e<=(f-0|0)){b.j0=L(c.data,0,e);return b;}b=new H;b.j1=1;b.j2=1;B(b);},
Ko=(a,b,c,d,e)=>{let f,g,h,i;Bk(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jZ.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
VC=(a,b)=>{let c,d,e,f;if(b>=0){c=a.jY;if(b<c){c=c-1|0;a.jY=c;while(b<c){d=a.jZ.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new W;f.j1=1;f.j2=1;B(f);},
ARp=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BT(b,c);if(d<=0){e=a.jY;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.jY=e-(c-b|0)|0;g=0;while(g<f){h=a.jZ.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new W;i.j1=1;i.j2=1;B(i);},
Bk=(a,b,c)=>{let d,e,f,g;d=a.jY;e=d-b|0;a.c$((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.jZ.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.jY=a.jY+(c-b|0)|0;};
let IZ=F(0);
let K=F(Bb);
let ASh=a=>{a.jZ=G(16);},
Ep=()=>{let a=new K();ASh(a);return a;},
Mn=(a,b)=>{D(a,a.jY,b===null?A(2):b.T());return a;},
F4=(a,b)=>{D(a,a.jY,b);return a;},
FP=(a,b)=>{J(a,a.jY,b,10);return a;},
Xs=(a,b)=>{let c;c=a.jY;Bk(a,c,c+1|0);a.jZ.data[c]=b;return a;},
ASM=(a,b,c)=>{D(a,b,c===null?A(2):c.T());return a;},
ARo=(a,b,c)=>{ARp(a,b,c);return a;},
BW=(a,b,c)=>{D(a,b,c);return a;},
AHS=(a,b,c,d,e)=>{let f,g,h,i;Bk(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jZ.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ACP=(a,b,c,d)=>{let e,f,g,h,i;e=a.jY;Bk(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jZ.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
ZR=a=>{return a.jY;},
Ev=a=>{let b,c,d,e,f;b=new I;c=a.jZ;d=c.data;e=a.jY;f=d.length;if(e>=0&&e<=(f-0|0)){b.j0=L(c.data,0,e);return b;}b=new H;b.j1=1;b.j2=1;B(b);},
AIf=(a,b)=>{IC(a,b);},
AI5=(a,b,c)=>{Bk(a,b,b+1|0);a.jZ.data[b]=c;return a;},
BZ=(a,b,c)=>{D(a,b,c);return a;};
function Rv(){let a=this;C.call(a);a.vg=0;a.xV=0;a.uF=0;a.vT=null;a.xR=0;a.Ak=null;a.vu=0;a.x3=null;a.r6=0;a.pR=0;a.tM=0;a.vk=0;a.wr=0;a.v7=0;a.xn=0;a.wT=0;a.w2=0;a.u5=0;a.sI=0;}
let Y4=(a,b)=>{a.vg=0;a.xV=1;a.uF=0;a.xR=1;a.Ak=A(65);a.vu=0;a.r6=(-1);a.pR=(-1);a.tM=0;a.vk=0;a.wr=0;a.v7=0;a.xn=0;a.wT=0;a.w2=0;a.u5=0;a.sI=1;a.x3=b;},
ASY=a=>{let b=new Rv();Y4(b,a);return b;};
let Qa=F(0);
function LU(){let a=this;C.call(a);a.oV=null;a.rk=null;a.wp=null;a.wX=null;a.zj=null;a.nx=null;a.sd=null;a.sk=null;a.r0=null;a.oH=null;a.qG=null;a.tr=0;a.u6=0;a.ys=null;a.pt=0;a.r4=null;a.yP=null;a.yv=null;a.rF=null;a.vm=null;a.oZ=null;}
let G5=null;
let Qo=(a,b,c)=>{let d;d=new Bf;d.ks=1;d.j8=Q(C,4);a.r0=d;a.qG=NF;a.tr=(-1);a.u6=1;a.pt=1;a.yP=ES(51,0.800000011920929);d=new Bf;d.ks=1;d.j8=Q(C,16);a.rF=d;d=new Bf;d.ks=1;d.j8=Q(C,16);a.vm=d;E8();a.oH=Gb;a.nx=c;a.sd=b;AOs(a);},
AT4=(a,b)=>{let c=new LU();Qo(c,a,b);return c;},
AOs=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;G5=AKi();Gk();DB(Fg,A(86),A(65));b=T(G5.userAgent);Gk();DB(Fg,A(87),b);if(G5.windows?1:0){Gk();DB(Fg,A(88),A(89));}else if(G5.macOS?1:0){Gk();DB(Fg,A(88),A(90));}else if(!(G5.linux?1:0)){Gk();DB(Fg,A(88),A(91));}else{Gk();DB(Fg,A(88),A(10));}c=new Pc;d=a.nx.vu;c.xq=0;c.x0=0;c.mN=1;c.mN=d;Gz=c;E8();b=T(Gb.nk.location.href);a.oZ=b;if(Da(b,A(92))){c=M$(a.oZ,A(93),A(65));a.oZ=c;a.oZ=M$(c,A(94),A(65));}e=HT(a.oZ,63,0);if(e>=0)a.oZ=Cj(a.oZ,0,e);c=a.nx;Gy=c.xV;b=AM3(c);a.oV=b;c
=AKh(a.oZ,b.ld,a);a.r4=c;d=a.nx.xR;f=Gz;g=c.so;h=new K;h.jZ=G(16);i=h.jY;if(g===null)g=A(2);BW(h,i,g);BW(h,h.jY,A(95));g=new I;j=h.jZ;k=j.data;l=h.jY;m=k.length;if(l>=0&&l<=(m-0|0)){g.j0=L(j.data,0,l);h=new K;h.jZ=G(16);D(h,h.jY,g);D(h,h.jY,A(96));g=new I;j=h.jZ;k=j.data;l=h.jY;m=k.length;if(l>=0&&l<=(m-0|0)){g.j0=L(j.data,0,l);h=new QZ;h.qQ=c;h.vS=A(96);h.vP=d;if(f.mN){if(BU===null){c=new CJ;b=new Ci;Bp(b);b.lB=BJ(32);EW(c);c.lX=b;b=new K;Ed(b);c.lF=b;c.lD=G(32);c.lG=0;c.lI=Cg;BU=c;}c=new K;c.jZ=G(16);BW(c,
c.jY,A(97));BW(c,c.jY,g);b=new I;j=c.jZ;k=j.data;i=c.jY;l=k.length;if(i>=0&&i<=(l-0|0)){b.j0=L(j.data,0,i);BV(Bx(b));BV("\n");}else{c=new H;c.j1=1;c.j2=1;B(c);}}a:{f.lc=f.lc+1|0;c=new G8;c.nB=f;c.o4=1;c.ny=g;c.nM=h;b=null;g=null;c.mY=new C;c.mX=1;c.nv=g;c.nL=b;e=CS;CS=e+1|0;c.nK=V(e);b=new En;b.nw=c;EI(b);a.rk=Z$(a.oV.ld);c=new Uy;c.rM=a.r4;a.wp=c;c=new TR;b=new I7;d=J0(16);b.o7=0;k=Q(FN,d);j=k.data;b.mr=k;b.tc=0.75;b.p$=j.length*0.75|0;c.zd=b;a.wX=c;a.ys=new Rs;c=new TM;c.zf=0;c.sw=1;b=new Mg;b.si=c;c.yE=b;c.uj
=A(65);a.yv=c;if(a.nx.uF){g=a.r4;b=new OA;b.yf=a;n=Gz;g=g.so;h=new K;h.jZ=G(16);BZ(h,h.jY,g===null?A(2):Cn(g));BZ(h,h.jY,Cn(A(95)));f=new I;j=h.jZ;k=j.data;i=h.jY;l=k.length;if(i>=0&&i<=(l-0|0)){f.j0=L(j.data,0,i);g=new K;g.jZ=G(16);BW(g,g.jY,f);BW(g,g.jY,A(98));c=new I;j=g.jZ;k=j.data;i=g.jY;l=k.length;if(i>=0&&i<=(l-0|0)){c.j0=L(j.data,0,i);NX(n,1,c,b);break a;}c=new H;c.j1=1;c.j2=1;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}}Dj=a;c=a.oV;B5=c;b=c.qi;Ca=b;Bs=b;EB=c.wY;Lf=a.rk;HJ=a.wp;ANe=a.wX;c=new QR;c.xl=null;c.xl
=AQW();a.zj=c;AIH=c;f=a.oH.nk.document;b=new Kj;b.te=a;f.addEventListener("visibilitychange",B9(b,"handleEvent"));c=a.oH;c.r8=a;requestAnimationFrame(B9(c,"onAnimationFrame"));c=a.nx;if(!c.r6&&!c.pR?1:0){c=a.oH;g=new Kk;g.q6=a;g=DA(g,"handleEvent");c.nk.addEventListener("resize",B9(g,"handleEvent"));}return;}c=new H;c.j1=1;c.j2=1;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
AGz=a=>{let b,c,d,e,f,g,h,$$je;b=a.qG;a:{try{b:{MG();switch(T9.data[APt(b)]){case 1:c=AGP(Xl());if(!c){a.qG=Jk;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.r4.ua;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=Ep();Xs(FP(g,f),37);h=Ev(g);d.setProperty("width",Bx(h));}}break b;case 2:break;default:break b;}if(a.sd!==null){b=a.sk;if(b!==null){AJQ(b);ALQ(a.sk);}ADm(a.rk,null);RV(a.rk);QK(a.rF);a.sk
=a.sd;a.sd=null;a.qG=Kl;a.oV.s3=Cc;}YL(a,a.sk);}}catch($$e){$$je=Y($$e);if($$je instanceof Dx){h=$$je;break a;}else{throw $$e;}}b=a.oH;b.r8=a;requestAnimationFrame(B9(b,"onAnimationFrame"));return;}if(Do===null){b=new FK;d=new Ci;d.lB=BJ(32);Bp(b);b.lX=d;d=new K;Di(d,16);b.lF=d;b.lD=G(32);b.lG=0;b.lI=Cg;Do=b;}J8(h,Do);B(h);},
YL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;AB_(a.oV);c=B5.ld.width;d=B5.ld.height;e=0;if(a.qG===Kl){a.qG=Jk;f=new H8;H6();K1(f,1000,null);b.zY=f;f=AJ1(b);b.z_=f;b.uZ=f;g=B5.ld.width;h=B5.ld.height;f=f.m7.mt;f.pO=0;f.pP=0;f.ql=g;f.of=h;i=g;j=f.r7;i=i*j;j=h*j;f.s0=i;f.s8=j;Nw(f,0);e=1;}if(!(c==a.tr&&d==a.u6&&!e)){a.tr=c;a.u6=d;Ca.dE(0,0,c,d);f=b.uZ;if(f!==null){f=f.m7.mt;f.pO=0;f.pP=0;f.ql=c;f.of=d;i=c;j=f.r7;i=i*j;j=d*j;f.s0=i;f.s8=j;Nw(f,0);}}f=a.vm;k=a.rF;l=k.j8;m=k.j4;n=f.j8;o=n.data;c=f.j4;d=c+
m|0;if(d<=o.length)k=n;else{p=8;if(p<=d)p=d;c=c*1.75|0;if(p>c)c=p;q=n.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BE;r.kb=q;s=r;q.classObject=s;}}s=r.kb.$meta.item;if(s===null)r=null;else{r=s.classObject;if(r===null){r=new BE;r.kb=s;k=r;s.classObject=k;}}if(r===null){b=new Dm;S(b);B(b);}if(r===M(Bh)){b=new Bm;S(b);B(b);}if(c<0){b=new D4;S(b);B(b);}k=D1(r.kb,c);r=k.data;h=f.j4;g=r.length;if(h<g)g=h;GA(n,0,k,0,g);f.j8=k;}GA(l,0,k,f.j4,m);f.j4=d;f=a.rF;l=f.j8;e=0;m=f.j4;k=null;if(e>m)
{b=new Bm;b.j1=1;b.j2=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.j4=0;m=0;while(true){r=a.vm;e=r.j4;d=BT(m,e);if(d>=0){l=r.j8;m=0;f=null;if(m>e){b=new Bm;b.j1=1;b.j2=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}r.j4=0;f=a.oV;t=C8(f.s3,V(1));f.s3=t;if(ACK(t,V(60))){f=b.uZ;if(f!==null)ART(f,B5.sC);}RV(a.rk);return;}if(d>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,m,10);D(b,b.jY,A(19));e=r.j4;J(b,b.jY,e,10);k=new I;l=b.jZ;n=l.data;m=b.jY;d=n.length;if(m>=0&&m<=(d-0|0)){k.j0=L(l.data,0,m);f.j1
=1;f.j2=1;f.j3=k;B(f);}b=new H;S(b);B(b);}f=r.j8.data[m];k=f.uh.r9;q=k.j8.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BE;r.kb=q;s=r;q.classObject=s;}}u=r.kb.$meta.item;if(u===null)q=null;else{q=u.classObject;if(q===null){q=new BE;q.kb=u;r=q;u.classObject=r;}}e=k.j4;if(q===null){b=new Dm;S(b);B(b);}if(q===M(Bh)){b=new Bm;S(b);B(b);}if(e<0)break;r=D1(q.kb,e);GA(k.j8,0,r,0,k.j4);l=r;f.uh.sS.vx.vT.dG(l);m=m+1|0;}b=new D4;S(b);B(b);};
let VT=F(0);
function MF(){C.call(this);this.uZ=null;}
let ALQ=a=>{return;},
AJQ=a=>{return;};
function Qc(){let a=this;MF.call(a);a.zY=null;a.z_=null;}
let AOe=F();
let Bj=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(99);d=1<<c;e=d-1|0;f=(((32-O9(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=Dr(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=NT((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new I;l.j0=L(g.data,0,h.length);return l;};
let Ia=F(BG);
let NF=null,Kl=null,Jk=null,U3=null;
let AIM=()=>{let b,c,d;b=new Ia;b.kg=A(100);b.ka=0;NF=b;c=new Ia;c.kg=A(101);c.ka=1;Kl=c;d=new Ia;d.kg=A(102);d.ka=2;Jk=d;U3=U(Ia,[b,c,d]);};
let OF=F(0);
let Cy=F(0);
let RQ=F(0);
function Js(){let a=this;C.call(a);a.nk=null;a.r8=null;}
let Gb=null;
let E8=()=>{E8=BQ(Js);AFh();};
let AFh=()=>{let b;b=new Js;E8();b.nk=window;Gb=b;},
AMd=(a,b)=>{let c;b;c=a.r8;a.r8=null;AGz(c);};
let ALU=F();
let Rj=F();
let Br=null;
let Cx=()=>{Cx=BQ(Rj);AKR();};
let AKR=()=>{Br=ES(51,0.800000011920929);};
function NI(){Ex.call(this);this.vv=0.0;}
let Rh=null;
let AWN=()=>{Rh=M(CF);};
function GM(){let a=this;C.call(a);a.m2=null;a.m$=0;a.rT=0;}
let P1=(a,b)=>{let c,d,e,f,g;c=a.m2;d=c.data;e=a.m$;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=B7(f);g=d.data.length;if(e<g)g=e;Du(c,0,d,0,g);a.m2=d;}c=d.data;f=a.m$;a.m$=f+1|0;c[f]=b;},
UO=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m2;e=d.data;f=a.m$;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=B7(h);i=g.data.length;if(f<i)i=f;Du(d,0,g,0,i);a.m2=g;}e=g.data;j=a.m$;e[j]=b;e[j+1|0]=c;a.m$=j+2|0;};
let AGi=F();
let Dh=b=>{return Math.sin(b);},
Dv=b=>{return Math.cos(b);},
Cu=b=>{return Math.sqrt(b);},
Gg=b=>{return Math.ceil(b);},
Rr=b=>{return Math.floor(b);},
GB=(b,c)=>{return Math.pow(b,c);},
N_=(b,c)=>{return Math.atan2(b,c);},
GK=(b,c)=>{return Math.min(b,c);},
ARV=(b,c)=>{return Math.max(b,c);},
D6=b=>{return Math.abs(b);},
CO=b=>{return Math.sign(b);};
function DQ(){let a=this;C.call(a);a.y9=null;a.ze=null;}
let Q8=a=>{let b;b=new Bf;b.ks=1;b.j8=Q(C,16);a.y9=b;b=new GM;b.rT=1;b.m2=B7(16);a.ze=b;},
AWe=()=>{let a=new DQ();Q8(a);return a;};
function FR(){let a=this;C.call(a);a.my=null;a.lP=0;a.o$=0;}
let L2=(a,b)=>{let c,d,e,f,g;c=a.my;d=c.data;e=a.lP;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=X(f);g=d.data.length;if(e<g)g=e;Du(c,0,d,0,g);a.my=d;}c=d.data;f=a.lP;a.lP=f+1|0;c[f]=b;},
ASO=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.lP;if(b>d){e=new H;f=new K;f.jZ=G(16);D(f,f.jY,A(103));J(f,f.jY,b,10);D(f,f.jY,A(104));b=a.lP;J(f,f.jY,b,10);g=new I;h=f.jZ;i=h.data;c=f.jY;d=i.length;if(c>=0&&c<=(d-0|0)){g.j0=L(h.data,0,c);e.j1=1;e.j2=1;e.j3=g;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}i=a.my;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=X(k);l=j.data.length;if(d<l)l=d;Du(i,0,j,0,l);a.my=j;}if(!a.o$){h=j.data;h[a.lP]=h[b];}else Du(j,b,j,b+1|0,a.lP-b|0);h=j.data;a.lP=a.lP+1|0;h[b]=c;};
let Mk=F(0);
let K0=F();
let Fi=F(0);
function I7(){let a=this;K0.call(a);a.o7=0;a.mr=null;a.ta=0;a.tc=0.0;a.p$=0;}
let J0=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
IS=(a,b,c,d)=>{let e,f;e=a.mr.data[c];while(e!==null){if(e.pl==d){f=e.mZ;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.m_;}return e;},
Jc=a=>{let b;b=a.mr.data[0];while(b!==null&&b.mZ!==null){b=b.m_;}return b;},
GO=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.mr.data;e=d[0];while(e!==null&&e.mZ!==null){e=e.m_;}if(e===null){a.ta=a.ta+1|0;f=null;e=new FN;b=null;e.mZ=f;e.m0=b;e.pl=0;e.m_=d[0];d[0]=e;g=a.o7+1|0;a.o7=g;if(g>a.p$)Ra(a,d.length);}}else{f=b;if(!f.$id$){e=E3();f.$id$=e;}h=b.$id$;d=a.mr.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.pl==h){f=e.mZ;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.m_;}if(e===null){a.ta=a.ta+1|0;e=new FN;f=null;e.mZ=b;e.m0=f;e.pl=h;e.m_=d[j];d[j]=e;g=a.o7+1|0;a.o7=g;if(g>a.p$)Ra(a,
i);}}f=e.m0;e.m0=c;return f;},
Ra=(a,b)=>{let c,d,e,f,g,h,i,j;c=J0(!b?1:b<<1);d=Q(FN,c);e=d.data;f=0;c=c-1|0;while(true){g=a.mr.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.pl&c;j=h.m_;h.m_=e[i];e[i]=h;h=j;}f=f+1|0;}a.mr=d;a.p$=e.length*a.tc|0;};
let Ik=F(0);
let NR=F();
let MU=F();
let Ov=null,Lr=null,B0=null,B1=null,MR=null,T2=null,BN=null,BM=null,JI=null,JJ=null;
let AAC=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new H;e.j1=1;e.j2=1;B(e);},
CC=(b,c)=>{let d,e;d=b.wR.data;if(c<d.length)return c+d[c]|0;d=b.wD;e=APu(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
APu=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=BT(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
P6=b=>{let c,d,e,f,g,h;if(Lr===null){if(JI===null)JI=AF4();Lr=ASn((JI.value!==null?T(JI.value):null));}c=Lr.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=BT(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
NT=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
E$=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bm;c.j1=1;c.j2=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AGe([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
CT=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(MR===null){if(JJ===null)JJ=ATo();MR=ATN((JJ.value!==null?T(JJ.value):null));}e=MR.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.ul)c=f+1|0;else{d=g.tW;if(b>=d)return g.t0.data[b-d|0];d=f-1|0;}}return 0;},
Hx=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CT(b)!=16?0:1;},
AUo=()=>{Ov=M(KL);T2=Q(MU,128);},
DV=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
DX=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
AF4=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
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
let ACC=F();
let AKi=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AMr=F();
let BU=null,Do=null,Fg=null;
let GA=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jy(b)&&(e+f|0)<=Jy(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BE;h.kb=g;i=h;g.classObject=i;}}j=Ek(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BE;h.kb=g;i=h;g.classObject=i;}}i=Ek(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.kb.$meta.primitive?1:0)&&!(i.kb.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.kb;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MH(g.constructor,p)?1:0)){I9(b,c,d,e,l);b=new JT;b.j1=1;b.j2=1;B(b);}l=l+1|0;m=o;}I9(b,c,d,e,f);return;}if(!(j.kb.$meta.primitive?1:0))break a;if(i.kb.$meta.primitive?1:0)break b;else break a;}b=new JT;b.j1=1;b.j2=1;B(b);}}I9(b,c,d,e,f);return;}b=new JT;b.j1=1;b.j2=1;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}d=new Dm;d.j1=1;d.j2=1;d.j3=A(105);B(d);},
Du=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Jy(b)&&(e+f|0)<=Jy(d)){I9(b,c,d,e,f);return;}b=new H;b.j1=1;b.j2=1;B(b);},
I9=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
Eo=()=>{return D8((new Date()).getTime());},
Gk=()=>{let b,c;if(Fg===null){b=new M1;KT(b,11);DB(b,A(106),A(107));DB(b,A(88),A(108));DB(b,A(109),A(110));DB(b,A(111),A(112));DB(b,A(113),A(114));DB(b,A(115),A(116));DB(b,A(117),A(107));DB(b,A(118),A(110));c=new M1;KT(c,11);c.zF=b;Fg=c;}};
let N5=F(0);
function Pc(){let a=this;C.call(a);a.lc=0;a.xq=0;a.x0=0;a.mN=0;}
let AGP=a=>{return a.lc;},
ABs=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{Nm();switch(UK.data[d.ka]){case 1:if(a.mN){if(BU===null){d=new CJ;e=new Ci;e.lB=BJ(32);Bp(d);d.lX=e;e=new K;Di(e,16);d.lF=e;d.lD=G(32);d.lG=0;d.lI=Cg;BU=d;}d=new K;d.jZ=G(16);D(d,d.jY,A(97));D(d,d.jY,c===null?A(2):c);e=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){e.j0=L(g.data,0,i);BV(Bx(e));BV("\n");}else{c=new H;S(c);B(c);}}a.lc=a.lc+1|0;d=new G8;d.nB=a;d.o4=b;d.ny=c;d.nM=f;c=null;e=null;d.mY=new C;d.mX=1;d.nv=e;d.nL=c;k=CS;CS=k+1|0;d.nK=V(k);c=new En;c.nw
=d;EI(c);break a;case 2:d=null;l=new OH;l.r1=a;l.qY=f;l.wf=d;l.xU=e;if(a.mN){if(BU===null){d=new CJ;e=new Ci;EW(e);e.lB=BJ(32);F6(d,e);d.lF=Ep();d.lD=G(32);d.lG=0;d.lI=Cg;BU=d;}d=new K;d.jZ=G(16);BZ(d,d.jY,Cn(A(97)));BZ(d,d.jY,c===null?A(2):Cn(c));e=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){e.j0=L(g.data,0,i);BV(Bx(e));BV("\n");}else{c=new H;Iv(c);B(c);}}a.lc=a.lc+1|0;d=new F5;d.nl=a;d.oc=b;d.nh=c;d.nA=l;c=null;e=null;d.mY=new C;d.mX=1;d.nv=e;d.nL=c;k=CS;CS=k+1|0;d.nK=V(k);c=new En;c.nw=d;EI(c);break a;case 3:if
(a.mN){if(BU===null){d=new CJ;e=new Ci;e.lB=BJ(32);Bp(d);d.lX=e;e=new K;Di(e,16);d.lF=e;d.lD=G(32);d.lG=0;d.lI=Cg;BU=d;}d=new K;d.jZ=G(16);D(d,d.jY,A(97));D(d,d.jY,c===null?A(2):c);e=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){e.j0=L(g.data,0,i);BV(Bx(e));BV("\n");}else{c=new H;S(c);B(c);}}a.lc=a.lc+1|0;d=new F5;d.nl=a;d.oc=b;d.nh=c;d.nA=f;c=null;e=null;d.mY=new C;d.mX=1;d.nv=e;d.nL=c;k=CS;CS=k+1|0;d.nK=V(k);c=new En;c.nw=d;EI(c);break a;case 4:e=new OG;e.zT=a;e.sD=f;if(a.mN){if(BU===null){d
=new CJ;f=new Ci;Bp(f);f.lB=BJ(32);EW(d);d.lX=f;f=new K;Ed(f);d.lF=f;d.lD=G(32);d.lG=0;d.lI=Cg;BU=d;}d=new K;d.jZ=G(16);BW(d,d.jY,A(97));BW(d,d.jY,c===null?A(2):c);f=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);BV(Bx(f));BV("\n");}else{c=new H;HY(c);B(c);}}a.lc=a.lc+1|0;d=new F5;d.nl=a;d.oc=b;d.nh=c;d.nA=e;c=null;e=null;d.mY=new C;d.mX=1;d.nv=e;d.nL=c;k=CS;CS=k+1|0;d.nK=V(k);c=new En;c.nw=d;EI(c);break a;case 5:break;default:c=new R;e=new K;e.jZ=G(16);D(e,e.jY,A(119));D(e,
e.jY,d.kg);d=new I;g=e.jZ;h=g.data;k=e.jY;i=h.length;if(k>=0&&k<=(i-0|0)){d.j0=L(g.data,0,k);c.j1=1;c.j2=1;c.j3=d;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);}c=null;G7(f.rv,f.rI,f.rf,c);c=f.nb.m5;c.qq=1;c.nn=0;}},
NX=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.mN){if(BU===null){e=new CJ;f=new Ci;f.lB=BJ(32);e.lX=f;f=new K;Bp(f);f.jZ=G(16);e.lF=f;e.lD=G(32);e.lG=0;e.lI=Cg;BU=e;}e=new K;e.jZ=G(16);D(e,e.jY,A(120));D(e,e.jY,c===null?A(2):c);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);BV(Bx(f));BV("\n");}else{c=new H;c.j1=1;c.j2=1;B(c);}}a.lc=a.lc+1|0;f=new XMLHttpRequest();e=new Km;e.qz=a;e.ph=f;e.t9=b;e.sx=c;e.uS=d;e=B9(e,"handleEvent");f.onreadystatechange=e;e=new G9;e.u3=a;e.r_=d;d=B9(e,"handleEvent");f.onprogress
=d;f.open("GET",Bx(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let AB0=F();
let Gz=null;
let Xl=()=>{return Gz;};
let AEU=F();
let De=0,Gy=0;
let AVK=()=>{De=1;};
let TH=F(0);
function KI(){let a=this;C.call(a);a.pS=null;a.ld=null;a.xB=null;a.qi=null;a.wY=null;a.yH=null;a.x4=0.0;a.ti=Cc;a.s3=Cc;a.sC=0.0;a.sX=0.0;a.vf=0;}
let ND=0,FT=null;
let EF=()=>{EF=BQ(KI);ZG();};
let AIP=(a,b)=>{let c,d,e,f,g,h,i,j,k;EF();a.x4=0.0;a.ti=Eo();a.s3=V(-1);a.sC=0.0;a.sX=0.0;a.xB=b;E8();c=window.document;d=b.x3;a.ld=c.getElementById(Bx(d));e=ACZ();d=!!b.xn;e.alpha=d;d=!!b.v7;e.antialias=d;d=!!b.wr;e.stencil=d;d=!!b.wT;e.premultipliedAlpha=d;d=!!b.w2;e.preserveDrawingBuffer=d;f=a.ld;if(b.vg)a.pS=f.getContext("webgl2",e);a:{if(b.vg){d=a.pS;if(d!==null){if(!b.u5)f=ARj(d);else{f=new Pd;Oc(f,d);}a.wY=f;a.qi=f;break a;}}f=f.getContext("webgl",e);a.pS=f;if(!b.u5)d=AQf(f);else{d=new VQ;MB(d,f);}a.qi
=d;}d=a.qi.dW(7938);c=a.qi.dW(7936);g=a.qi.dW(7937);a.yH=AMn(Hu,d,c,g);h=b.r6;if(!(h<0&&b.pR<0)){if(h&&b.pR?1:0)Kg(a,h,b.pR);else{i=Gb;h=i.nk.document.documentElement.clientWidth-b.tM|0;j=i.nk.document.documentElement.clientHeight-b.vk|0;k=!b.sI?1.0:devicePixelRatio||1;Kg(a,k*h|0,k*j|0);}}b=a.ld;d=new MO;d.yk=a;Yg(b,B9(d,"fullscreenChanged"));},
AM3=a=>{let b=new KI();AIP(b,a);return b;},
AB_=a=>{let b,c,d;b=Eo();c=AVX(AGt(b,a.ti))/1000.0;a.sC=c;a.ti=b;c=a.sX+c;a.sX=c;d=a.vf+1|0;a.vf=d;if(c>1.0){a.x4=d;a.sX=0.0;a.vf=0;}},
Kg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.ld;e=b;d.width=e;d=a.ld;e=c;d.height=e;if(a.xB.sI){f=devicePixelRatio||1;e=a.ld.style;g=b/f;II();h=new K;h.jZ=G(16);Qr(h,h.jY,g);D(h,h.jY,A(121));i=new I;j=h.jZ;k=j.data;l=h.jY;b=k.length;if(l>=0&&l<=(b-0|0)){i.j0=L(j.data,0,l);e.setProperty("width",Bx(i));f=c/f;i=new K;i.jZ=G(16);Qr(i,i.jY,f);D(i,i.jY,A(121));h=new I;j=i.jZ;k=j.data;c=i.jY;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.j0=L(j.data,0,c);e.setProperty("height",Bx(h));}else{d=new H;d.j1=1;d.j2=1;B(d);}}return;}d
=new H;d.j1=1;d.j2=1;B(d);},
ZG=()=>{ND=0;FT=Dn(51,0.800000011920929);},
Yg=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function Oz(){let a=this;C.call(a);a.uz=null;a.sA=null;a.uq=null;a.uH=null;a.uL=null;a.wh=null;a.sg=null;a.ua=0;a.so=null;}
let AHK=(a,b,c,d)=>{let e;a.uz=ES(51,0.800000011920929);a.sA=ES(51,0.800000011920929);a.uq=ES(51,0.800000011920929);a.uH=ES(51,0.800000011920929);a.uL=ES(51,0.800000011920929);a.wh=ES(51,0.800000011920929);e=new Bf;e.ks=1;e.j8=Q(C,16);a.sg=e;a.ua=(-1);a.so=b;AOO(a,c,d);},
AKh=(a,b,c)=>{let d=new Oz();AHK(d,a,b,c);return d;},
AOO=(a,b,c)=>{let d,e,f;d=c.nx;if(d.vT!==null){e=b.ownerDocument;f=new Lx;f.zt=a;e.addEventListener("dragenter",B9(f,"handleEvent"),!!0);f=new Ly;f.z6=a;e.addEventListener("dragover",B9(f,"handleEvent"),!!0);f=new Lw;f.vW=a;f.vG=c;f.vx=d;e.addEventListener("drop",B9(f,"handleEvent"));}},
AGb=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AGr(a,b.t4)){b.sr=b.xI;b.qq=1;b.p2=0;b.nn=0;return 0;}if(b.nn)return 0;b.p2=0;b.qq=0;b.nn=1;c=b.t4;d=b.v3;e=b.vU;f=new Q0;f.Ah=a;f.m5=b;b=Gz;g=a.so;h=new K;h.jZ=G(16);i=h.jY;if(g===null)g=A(2);BW(h,i,g);BW(h,h.jY,A(95));g=new I;j=h.jZ;k=j.data;l=h.jY;m=k.length;if(l>=0&&l<=(m-0|0)){g.j0=L(j.data,0,l);h=new K;h.jZ=G(16);D(h,h.jY,g);D(h,h.jY,c===null?A(2):c);g=new I;k=h.jZ;j=k.data;m=h.jY;i=j.length;if(m>=0&&m<=(i-0|0)){g.j0=L(k.data,0,m);h=new QY;h.rv=a;h.nb=f;h.rI=d;h.rf
=c;ABs(b,1,g,d,e,h);return 1;}b=new H;S(b);B(b);}b=new H;HY(b);B(b);},
G7=(a,b,c,d)=>{a:{NB();switch(O2.data[b.ka]){case 1:break;case 2:B6(a.sA,c,d);break a;case 3:B6(a.uL,c,d);break a;case 4:B6(a.uq,c,d);break a;case 5:B6(a.uz,c,null);break a;default:break a;}B6(a.uH,c,d);}},
AGr=(a,b)=>{let c;c=BC(a.uH,b)<0?0:1;return !c&&!(BC(a.sA,b)<0?0:1)&&!(BC(a.uL,b)<0?0:1)&&!(BC(a.uq,b)<0?0:1)&&!(BC(a.uz,b)<0?0:1)?0:1;};
let DM=F();
let AJC=(a,b)=>{return;};
let Tq=F(0);
let Eu=F(0);
function Mm(){let a=this;C.call(a);a.lx=null;a.qV=0;a.p8=null;a.n0=null;a.l6=null;a.l5=null;a.nt=null;a.nu=null;a.sP=null;a.q7=0;a.tv=null;a.sN=0;a.ud=null;a.va=null;a.ub=null;a.mz=null;a.oS=Cc;a.qt=0;}
let ASN=b=>{let c,d,e,f;c=G5;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(D6(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AMv=(a,b)=>{a.qV=0;a.p8=Dn(20,0.800000011920929);a.n0=J_(20);a.l6=X(20);a.l5=X(20);a.nt=X(20);a.nu=X(20);a.sP=O7(51,0.800000011920929);a.q7=0;a.tv=J_(256);a.sN=0;a.ud=J_(256);a.va=J_(5);a.ub=O7(51,0.800000011920929);a.qt=1;a.lx=b;AJM(a);},
Z$=a=>{let b=new Mm();AMv(b,a);return b;},
AJM=a=>{let b;b=a.lx.ownerDocument;b.addEventListener("mousedown",B9(a,"handleEvent"),!!0);b.addEventListener("mouseup",B9(a,"handleEvent"),!!0);b.addEventListener("mousemove",B9(a,"handleEvent"),!!0);b.addEventListener("wheel",B9(a,"handleEvent"),!!0);b.addEventListener("keydown",B9(a,"handleEvent"),!!0);b.addEventListener("keyup",B9(a,"handleEvent"),!!0);b.addEventListener("keypress",B9(a,"handleEvent"),!!0);a.lx.addEventListener("touchstart",B9(a,"handleEvent"),!!1);a.lx.addEventListener("touchmove",B9(a,
"handleEvent"),!!1);a.lx.addEventListener("touchcancel",B9(a,"handleEvent"),!!1);a.lx.addEventListener("touchend",B9(a,"handleEvent"),!!1);},
AKk=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=T(b.type);if(c!==A(122)){if(A(122) instanceof I){d=A(122);e=c.j0!==d.j0?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(123))e=1;else if(A(123) instanceof I){d=A(123);e=c.j0!==d.j0?0:1;}else e=0;if(!e){if(c===A(124))e=1;else if(!(A(124) instanceof I))e=0;else{d=A(124);e=c.j0!==d.j0?0:1;}if(e){if(!(Nu(a.lx)?1:0)){f=HM(a,b,a.lx);g=H5(a,b,a.lx);h=a.l6.data;i=f-h[0]|0;j=a.l5.data;e=g-j[0]|0;a.nt.data[0]=i;a.nu.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.nt.data[0]=k;a.nu.data[0]=f;h=a.l6.data;h[0]=h[0]+b.movementX|0;h=a.l5.data;h[0]=h[0]+b.movementY|0;}a.oS=D8(performance.now()*1000000.0);d=a.mz;if(d!==null){if(!a.n0.data[0])AEc(d,a.l6.data[0],a.l5.data[0]);else TQ(d,a.l6.data[0],a.l5.data[0],0);}}else{if(c===A(125))e=1;else if(!(A(125) instanceof I))e=0;else{d=A(125);e=c.j0!==d.j0?0:1;}if(e){if(a.mz!==null){l=ASN(b);ANQ(a.mz,0.0,l|0);}a.oS=D8(performance.now()*1000000.0);}else{if(c===A(126))e=1;else if(!(A(126) instanceof I))e=0;else{d=A(126);e=c.j0!==
d.j0?0:1;}if(e){a.qV=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.p8;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.p8;if(o>=(-128)&&o<=127){E0();q=Eh.data[o+128|0];}else{q=new Fy;q.np=o;}if(!ASU(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){E0();p=Eh.data[o+128|0];}else{p=new Fy;p.np=o;}Ce(n,k,p);a.n0.data[o]=1;h=a.l6;q=a.lx;l=q.width*1.0/q.clientWidth;k=(d.clientX-(F8(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=T(p.compatMode);if(n===A(127))f=1;else if(!(A(127) instanceof I))f
=0;else{q=A(127);f=n.j0!==q.j0?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+CO(l)*0.5|0;h=a.l5;q=a.lx;l=q.height*1.0/q.clientHeight;k=(d.clientY-(GH(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=T(d.compatMode);if(q===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{p=A(127);f=q.j0!==p.j0?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+CO(l)*0.5|0;a.nt.data[o]=0;a.nu.data[o]=0;d=a.mz;if(d!==null)Oa(d,a.l6.data[o],a.l5.data[o],o,0);e=e+1|0;}a.oS=D8(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.n0.data[0])return;d=a.sP;e=b.button;AQS(d,!e?0:e==2?1:e!=1?0:2);h=a.n0;h.data[0]=a.sP.nq<=0?0:1;if(!(Nu(a.lx)?1:0)){k=HM(a,b,a.lx)-a.l6.data[0]|0;f=H5(a,b,a.lx)-a.l5.data[0]|0;a.nt.data[0]=k;a.nu.data[0]=f;a.l6.data[0]=HM(a,b,a.lx);a.l5.data[0]=H5(a,b,a.lx);}else{k=b.movementX|0;f=b.movementY|0;a.nt.data[0]=k;a.nu.data[0]=f;h=a.l6.data;h[0]=h[0]+b.movementX|0;h=a.l5.data;h[0]=h[0]+b.movementY|0;}a.oS=D8(performance.now()*1000000.0);a.n0.data[0]=0;d=a.mz;if(d!==null)
{e=a.l6.data[0];k=a.l5.data[0];g=b.button;Mc(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.lx;if(n!==p?0:1){h=a.n0.data;if(!h[0]){a.qt=1;a.qV=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;ACa(a.sP,r);a.va.data[r]=1;a.nt.data[0]=0;a.nu.data[0]=0;if(!(Nu(a.lx)?1:0)){f=HM(a,b,a.lx);g=H5(a,b,a.lx);a.l6.data[0]=f;a.l5.data[0]=g;}else{h=a.l6.data;h[0]=h[0]+b.movementX|0;h=a.l5.data;h[0]=h[0]+b.movementY|0;}a.oS=D8(performance.now()*1000000.0);d=a.mz;if(d!==null){e=a.l6.data[0];k=a.l5.data[0];g=
b.button;Oa(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=HM(a,b,p);t=H5(a,b,a.lx);if(!(s>=0.0&&s<=B5.ld.width&&t>=0.0&&t<=B5.ld.height))a.qt=0;return;}}if(c===A(128))e=1;else if(!(A(128) instanceof I))e=0;else{d=A(128);e=c.j0!==d.j0?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.p8;if(!k)d=!d.kB?null:d.kx;else{h=d.kv;f=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d.kC));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}u=d.np;d=a.lx;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F8(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{p=A(127);f=n.j0!==p.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+CO(l)*0.5|0)-a.l6.data[u]|0;d=a.lx;l=d.height*1.0/d.clientHeight;f=(q.clientY-(GH(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(127))g=1;else if(!(A(127) instanceof I))g=0;else
{p=A(127);g=n.j0!==p.j0?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+CO(l)*0.5|0)-a.l5.data[u]|0;a.nt.data[u]=k;a.nu.data[u]=f;h=a.l6;d=a.lx;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F8(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{p=A(127);f=n.j0!==p.j0?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+CO(l)*0.5|0;h=a.l5;d=a.lx;l=d.height*1.0/d.clientHeight;k=(q.clientY-(GH(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=T(d.compatMode);if(q===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{p=A(127);f=q.j0!==p.j0?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+CO(l)*0.5|0;d=a.mz;if(d!==null)TQ(d,a.l6.data[u],a.l5.data[u],u);e=e+1|0;}a.oS=D8(performance.now()*1000000.0);b.preventDefault();}if(c===A(129))e=1;else if(!(A(129) instanceof I))e=0;else{d=A(129);e=c.j0!==d.j0?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.p8;if(!v)p=!d.kB?null
:d.kx;else{h=d.kv;k=Bl(Be(Ba(V(v),E(2135587861, 2654435769)),d.kC));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.kA;}}p=k<0?null:d.kw.data[k];}u=p.np;GV(d,v);a.n0.data[u]=0;d=a.lx;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F8(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{p=A(127);f=n.j0!==p.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CO(l)*0.5|0;d=a.lx;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(GH(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=T(d.compatMode);if(q===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{p=A(127);f=q.j0!==p.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CO(l)*0.5|0;h=a.l6.data;k=o-h[u]|0;j=a.l5.data;f=g-j[u]|0;a.nt.data[u]=k;a.nu.data[u]=f;h[u]=o;j[u]=g;d=a.mz;if(d!==null)Mc(d,h[u],j[u],u,0);e=e+1|0;}a.oS=D8(performance.now()*1000000.0);b.preventDefault();}if(c===A(130))e=1;else if(!(A(130) instanceof I))e=0;else{d=A(130);e=c.j0!==d.j0?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.p8;if(!k)c=!d.kB?null:d.kx;else{h=d.kv;f=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d.kC));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.kA;}}c=f<0?null:d.kw.data[f];}u=c.np;GV(d,k);a.n0.data[u]=0;d=a.lx;l=d.width*1.0/d.clientWidth;k=(q.clientX-(F8(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=T(d.compatMode);if(p===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{c=A(127);f=p.j0!==c.j0
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CO(l)*0.5|0;d=a.lx;l=d.height*1.0/d.clientHeight;k=(q.clientY-(GH(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=T(d.compatMode);if(p===A(127))f=1;else if(!(A(127) instanceof I))f=0;else{c=A(127);f=p.j0!==c.j0?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CO(l)*0.5|0;h=a.l6.data;k=o-h[u]|0;j=a.l5.data;f=g-j[u]|0;a.nt.data[u]=k;a.nu.data[u]=f;h[u]=o;j[u]=g;d=a.mz;if(d!==null)Mc(d,h[u],j[u],u,0);e=e+1|0;}a.oS=D8(performance.now()*1000000.0);b.preventDefault();}},
XM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=T(b.type);if(c!==A(131)){if(A(131) instanceof I){d=A(131);e=c.j0!==d.j0?0:1;}else e=0;}else e=1;if(e&&a.qt){a:{f=Sq(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}d=a.ub;if(!f)e=d.qm;else{h=d.oF;e=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),d.pY));b:{while(true){i=h.data[e];if(!i){e= -(e+1|0)|0;break b;}if(i==f)break;e=(e+1|0)&d.ou;}}e=e<0?0:1;}if(e)b.preventDefault();if(f!=67&&f!=112){h=a.tv.data;if(!h[f]){a.q7=a.q7+1|0;h[f]=1;a.sN=1;a.ud.data[f]
=1;d=a.mz;if(d!==null){j=d.nV;if(j===null)j=d.lv;Cx();k=Br;g=BC(k,M(Z));l=g<0?null:k.kH.data[g];if(l===null){l=new Ck;k=new Bf;k.ks=0;k.j8=Q(C,4);l.kh=k;l.kO=100;c:{try{k=Cp(M(Z),null);break c;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{k=Co(M(Z),null);Cr(k,1);break c;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}k=null;}l.kq=k;if(k===null){b=new Bw;d=new K;Bp(d);d.jZ=G(16);BW(d,d.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);c=M(Z).j7;BW(d,d.jY,c);c=new I;h
=d.jZ;m=h.data;f=d.jY;Bp(c);ET(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}B6(Br,M(Z),l);}c=l.kh;e=c.j4;if(e){if(!e){b=new BK;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j8.data;c=h[e];h[e]=null;}else d:{try{c=CG(l.kq,null);break d;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}c=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kq.ls.lq;if(l.j7===null)l.j7=T(l.kb.$meta.name);j=l.j7;D(b,b.jY,j);j=new I;h=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0))
{j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.li=d;B(c);}B(Ft());}k=c;k.mp=ID;k.kL=d;k.uV=f;D3(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BE;c.kb=j;l=c;j.classObject=l;}}e=BC(d,c);d=e<0?null:d.kH.data[e];if(d!==null){c=d.kh;if(c.j4<d.kO){Bg(c,k);e=d.kU;g=d.kh.j4;if(e>g)g=e;d.kU=g;if(BD(k,BB)){d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}else if(BD(k,BB)){d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5
=0;d.ln=null;d.lm=(-1);}}}}}else{b.preventDefault();d=a.mz;if(d!==null){j=d.nV;if(j===null)j=d.lv;Cx();k=Br;i=BC(k,M(Z));l=i<0?null:k.kH.data[i];if(l===null){l=new Ck;k=new Bf;k.ks=0;k.j8=Q(C,4);l.kh=k;l.kO=100;e:{try{k=Cp(M(Z),null);break e;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{k=Co(M(Z),null);Cr(k,1);break e;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}k=null;}l.kq=k;if(k===null){b=new Bw;d=new K;Bp(d);d.jZ=G(16);BW(d,d.jY,A(21));if(M(Z).j7===null)M(Z).j7
=T(M(Z).kb.$meta.name);c=M(Z).j7;BW(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bp(c);ET(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}B6(Br,M(Z),l);}c=l.kh;e=c.j4;if(e){if(!e){b=new BK;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j8.data;c=h[e];h[e]=null;}else f:{try{c=CG(l.kq,null);break f;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}c=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kq.ls.lq;if(l.j7===null)l.j7=T(l.kb.$meta.name);j=l.j7;D(b,b.jY,j);j=new I;h
=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.li=d;B(c);}B(Ft());}k=c;k.mp=ID;k.kL=d;k.uV=f;D3(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BE;c.kb=j;l=c;j.classObject=l;}}e=BC(d,c);d=e<0?null:d.kH.data[e];if(d!==null){c=d.kh;if(c.j4<d.kO){Bg(c,k);e=d.kU;i=d.kh.j4;if(e>i)i=e;d.kU=i;if(BD(k,BB)){d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}else if(BD(k,BB)){d=k;d.kL=null;d.k7
=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}d=a.mz;j=d.nV;if(j===null)j=d.lv;k=Br;i=BC(k,M(Z));l=i<0?null:k.kH.data[i];if(l===null){l=new Ck;k=new Bf;k.ks=0;k.j8=Q(C,4);l.kh=k;l.kO=100;g:{try{k=Cp(M(Z),null);break g;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{k=Co(M(Z),null);Cr(k,1);break g;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}k=null;}l.kq=k;if(k===null){b=new Bw;d=new K;Bp(d);d.jZ=G(16);BW(d,d.jY,A(21));if(M(Z).j7===null)M(Z).j7
=T(M(Z).kb.$meta.name);c=M(Z).j7;BW(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bp(c);ET(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}B6(Br,M(Z),l);}c=l.kh;e=c.j4;if(e){if(!e){b=new BK;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j8.data;c=h[e];h[e]=null;}else h:{try{c=CG(l.kq,null);break h;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}c=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kq.ls.lq;if(l.j7===null)l.j7=T(l.kb.$meta.name);j=l.j7;D(b,b.jY,j);j=new I;h
=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.li=d;B(c);}B(Ft());}k=c;k.mp=JL;k.kL=d;k.xF=g;D3(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BE;c.kb=j;l=c;j.classObject=l;}}e=BC(d,c);d=e<0?null:d.kH.data[e];if(d!==null){c=d.kh;if(c.j4<d.kO){Bg(c,k);e=d.kU;g=d.kh.j4;if(e>g)g=e;d.kU=g;if(BD(k,BB)){d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}else if(BD(k,BB)){d=k;d.kL=null;d.k7
=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(132))e=1;else if(!(A(132) instanceof I))e=0;else{d=A(132);e=c.j0!==d.j0?0:1;}if(e&&a.qt){e=b.charCode&65535;d=a.mz;if(d!==null){j=d.nV;if(j===null)j=d.lv;Cx();k=Br;f=BC(k,M(Z));k=f<0?null:k.kH.data[f];if(k===null){k=new Ck;l=new Bf;l.ks=0;l.j8=Q(C,4);k.kh=l;k.kO=100;i:{try{l=Cp(M(Z),null);break i;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{l=Co(M(Z),
null);Cr(l,1);break i;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}l=null;}k.kq=l;if(l===null){b=new Bw;d=new K;Bp(d);d.jZ=G(16);BW(d,d.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);c=M(Z).j7;BW(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bp(c);ET(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}B6(Br,M(Z),k);}c=k.kh;f=c.j4;if(f){if(!f){b=new BK;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}f=f-1|0;c.j4=f;h=c.j8.data;c=h[f];h[f]=null;}else j:{try{c=CG(k.kq,null);break j;}
catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}c=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=k.kq.ls.lq;if(l.j7===null)l.j7=T(l.kb.$meta.name);j=l.j7;D(b,b.jY,j);j=new I;h=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.li=d;B(c);}B(Ft());}k=c;k.mp=JL;k.kL=d;k.xF=e;D3(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BE;c.kb=j;l=c;j.classObject=l;}}f=BC(d,c);d=f<0?null:d.kH.data[f];if(d!==null){c=d.kh;if
(c.j4<d.kO){Bg(c,k);f=d.kU;g=d.kh.j4;if(f>g)g=f;d.kU=g;if(BD(k,BB)){d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}else if(BD(k,BB)){d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}}if(e==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(133))e=1;else if(!(A(133) instanceof I))e=0;else{d=A(133);e=c.j0!==d.j0?0:1;}if(e&&a.qt){f=Sq(b.keyCode);d=a.ub;if(!f)e=d.qm;else{h=d.oF;e=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),
d.pY));k:{while(true){g=h.data[e];if(!g){e= -(e+1|0)|0;break k;}if(g==f)break;e=(e+1|0)&d.ou;}}e=e<0?0:1;}if(e)b.preventDefault();h=a.tv.data;if(h[f]){a.q7=a.q7-1|0;h[f]=0;}d=a.mz;if(d!==null){j=d.nV;if(j===null)j=d.lv;Cx();k=Br;g=BC(k,M(Z));l=g<0?null:k.kH.data[g];if(l===null){l=new Ck;k=new Bf;k.ks=0;k.j8=Q(C,4);l.kh=k;l.kO=100;l:{try{k=Cp(M(Z),null);break l;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{k=Co(M(Z),null);Cr(k,1);break l;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}
else{throw $$e;}}k=null;}l.kq=k;if(k===null){b=new Bw;d=new K;Bp(d);d.jZ=G(16);BW(d,d.jY,A(21));if(M(Z).j7===null)M(Z).j7=T(M(Z).kb.$meta.name);c=M(Z).j7;BW(d,d.jY,c);c=new I;h=d.jZ;m=h.data;f=d.jY;Bp(c);ET(0,f,m.length);c.j0=L(h.data,0,f);b.j1=1;b.j2=1;Bi(b);b.j3=c;B(b);}B6(Br,M(Z),l);}c=l.kh;e=c.j4;if(e){if(!e){b=new BK;b.j1=1;b.j2=1;Bi(b);b.j3=A(22);B(b);}e=e-1|0;c.j4=e;h=c.j8.data;c=h[e];h[e]=null;}else m:{try{c=CG(l.kq,null);break m;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}c
=new R;b=new K;b.jZ=G(16);D(b,b.jY,A(23));l=l.kq.ls.lq;if(l.j7===null)l.j7=T(l.kb.$meta.name);j=l.j7;D(b,b.jY,j);j=new I;h=b.jZ;m=h.data;f=b.jY;g=m.length;if(f>=0&&f<=(g-0|0)){j.j0=L(h.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=j;c.li=d;B(c);}B(Ft());}k=c;k.mp=Mf;k.kL=d;k.uV=f;D3(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BE;c.kb=j;l=c;j.classObject=l;}}e=BC(d,c);d=e<0?null:d.kH.data[e];if(d!==null){c=d.kh;if(c.j4<d.kO){Bg(c,k);e=d.kU;g=d.kh.j4;if(e>g)g=e;d.kU=g;if(BD(k,BB))
{d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}else if(BD(k,BB)){d=k;d.kL=null;d.k7=null;d.k8=null;d.lf=0;d.la=1;d.k1=0;d.le=0;d.k5=0;d.ln=null;d.lm=(-1);}}}if(f==61){b.preventDefault();b.stopPropagation();}}}}},
RV=a=>{let b,c,d;a:{if(a.qV){a.qV=0;b=0;while(true){c=a.va.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.sN){a.sN=0;d=0;while(true){c=a.ud.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
HM=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(F8(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=T(b.compatMode);if(f===A(127))g=1;else if(!(A(127) instanceof I))g=0;else{c=A(127);g=f.j0!==c.j0?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CO(d)*0.5|0;},
H5=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(GH(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=T(b.compatMode);if(f===A(127))g=1;else if(!(A(127) instanceof I))g=0;else{c=A(127);g=f.j0!==c.j0?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CO(d)*0.5|0;},
GH=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
F8=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ADm=(a,b)=>{a.mz=b;},
Nu=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
Yu=(a,b)=>{AKk(a,b);XM(a,b);};
let SK=F(0);
function Uy(){C.call(this);this.rM=null;}
function TR(){C.call(this);this.zd=null;}
let TI=F(0);
let Rs=F();
let PT=F(0);
function TM(){let a=this;C.call(a);a.zf=0;a.sw=0;a.yE=null;a.uj=null;}
let UI=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AKC=F();
let Dj=null,B5=null,AIH=null,Lf=null,HJ=null,ANe=null,Ca=null,Bs=null,EB=null;
let UC=F(0);
let TS=F(0);
function QR(){C.call(this);this.xl=null;}
function Kj(){C.call(this);this.te=null;}
let ADA=(a,b)=>{let c,d,$$je;c=T(a.te.oH.nk.document.visibilityState);if(A(134)===c)d=1;else if(!(c instanceof I))d=0;else{c=c;d=A(134).j0!==c.j0?0:1;}if(!d){b=a.te.r0;FU(b);a:{try{c=Gp(b);while(HD(c)){AKo(Cw(c));}DP(b);break a;}catch($$e){$$je=Y($$e);c=$$je;}DP(b);B(c);}}else{b=a.te.r0;FU(b);b:{try{c=Gp(b);while(HD(c)){AOS(Cw(c));}DP(b);break b;}catch($$e){$$je=Y($$e);c=$$je;}DP(b);B(c);}}},
ANa=(a,b)=>{ADA(a,b);};
function Kk(){C.call(this);this.q6=null;}
let ATq=(a,b)=>{let c,d,e,f,g;c=a.q6.oH.nk.document.documentElement.clientWidth;b=a.q6;d=c-b.nx.tM|0;e=b.oH.nk.document.documentElement.clientHeight;b=a.q6;f=b.nx;c=e-f.vk|0;if(d>0&&c>0){if(b.oV!==null){if(f.sI){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Kg(a.q6.oV,d,c);}return;}},
AR8=(a,b)=>{ATq(a,b);};
let Bm=F(Bw);
let AAt=a=>{a.j1=1;a.j2=1;},
AAA=()=>{let a=new Bm();AAt(a);return a;};
let AP4=F();
let ET=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new H;e.j1=1;e.j2=1;B(e);};
let ZV=F();
let JH=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bm;e=new K;e.jZ=G(16);D(e,e.jY,A(135));J(e,e.jY,b,10);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}j=Gg(b/c)|0;if(2>j)j=2;i=Lp(j);if(i<=1073741824)return i;d=new Bm;e=new K;e.jZ=G(16);D(e,e.jY,A(136));J(e,e.jY,b,10);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;d.j1=1;d.j2=1;B(d);};
let AIk=F(Ex);
let P5=null;
let APY=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new CA;b.j1=1;b.j2=1;b.j3=A(80);B(b);}f=0;if(c>=0&&c<b.j0.length){a:{switch(b.j0.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=Cc;i=V(e);j=C8(V(1),M5(E(4294967295, 2147483647),i));if(g==d){b=new CA;b.j1=1;b.j2=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.j0.length)break b;g=AGm(b.j0.charCodeAt(g));if(g<0){l=new CA;b=Cj(b,c,d);m=new K;m.jZ=G(16);D(m,m.jY,A(81));c=m.jY;if(b===null)b=A(2);D(m,c,
b);b=new I;n=m.jZ;o=n.data;d=m.jY;e=o.length;if(d>=0&&d<=(e-0|0)){b.j0=L(n.data,0,d);l.j1=1;l.j2=1;l.j3=b;B(l);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}if(g>=e){l=new CA;p=Cj(b,c,d);b=new K;b.jZ=G(16);D(b,b.jY,A(82));J(b,b.jY,e,10);D(b,b.jY,A(78));c=b.jY;if(p===null)p=A(2);D(b,c,p);m=new I;n=b.jZ;o=n.data;d=b.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);l.j1=1;l.j2=1;l.j3=m;B(l);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}if(ACK(h,j)){b=new CA;b.j1=1;b.j2=1;b.j3=A(137);B(b);}h=C8(Ba(i,h),V(g));if(AU9(h,Cc)){if(k==
d&&D7(h,E(0, 2147483648))&&f)return E(0, 2147483648);l=new CA;p=Cj(b,c,d);m=new K;m.jZ=G(16);D(m,m.jY,A(138));c=m.jY;if(p===null)p=A(2);D(m,c,p);b=new I;n=m.jZ;o=n.data;e=m.jY;c=o.length;if(e>=0&&e<=(c-0|0)){b.j0=L(n.data,0,e);l.j1=1;l.j2=1;l.j3=b;B(l);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}g=k;}if(f)h=AWs(h);return h;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new CA;l=new K;l.jZ=G(16);D(l,l.jY,A(85));J(l,l.jY,e,10);m=new I;n=l.jZ;o=n.data;d=l.jY;e=o.length;if(d>=0&&d<=(e-0|0)){m.j0=L(n.data,0,d);b.j1
=1;b.j2=1;b.j3=m;B(b);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AGm=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Fd=b=>{let c,d;if(D7(b,Cc))return 64;c=0;d=Be(b,32);if(ADw(d,Cc))c=32;else d=b;b=Be(d,16);if(D7(b,Cc))b=d;else c=c|16;d=Be(b,8);if(D7(d,Cc))d=b;else c=c|8;b=Be(d,4);if(D7(b,Cc))b=d;else c=c|4;d=Be(b,2);if(D7(d,Cc))d=b;else c=c|2;if(ADw(Be(d,1),Cc))c=c|1;return (64-c|0)-1|0;},
EO=(b,c)=>{return AWz(b,c);},
Fc=(b,c)=>{return AWx(b,c);},
AVA=()=>{P5=M(AJ0);};
let AHR=F();
let ACZ=()=>{return {};};
let Md=F(0);
function G2(){let a=this;C.call(a);a.j$=null;a.pa=0;a.o6=0;a.mo=0;a.yK=0;a.yT=0;a.ni=0;a.pk=0;a.lN=null;a.mm=null;a.m4=null;a.zu=null;a.yY=null;a.nP=null;a.m8=null;a.nO=0;a.rL=null;a.pg=null;a.qZ=null;a.rW=null;a.yq=null;}
let MB=(a,b)=>{a.pa=1;a.o6=1;a.mo=1;a.yK=1;a.yT=1;a.ni=1;a.pk=1;a.lN=Dn(51,0.800000011920929);a.mm=Dn(51,0.800000011920929);a.m4=Dn(51,0.800000011920929);a.zu=Dn(51,0.800000011920929);a.yY=Dn(51,0.800000011920929);a.nP=Dn(51,0.800000011920929);a.m8=Dn(51,0.800000011920929);a.nO=0;a.rL=new Float32Array(40000);a.pg=new Int32Array(12000);a.qZ=new Int16Array(12000);a.rW=new Int8Array(12000);a.yq=new Uint8Array(240000);a.j$=b;b.pixelStorei(37441,0);},
AQf=a=>{let b=new G2();MB(b,a);return b;},
NU=(a,b)=>{let c,d,e,f,g;if(Gy){c=(!BD(b,Ei)?null:b.oY.k2.data).buffer;d=b.kf;e=b.j9-d|0;return new Float32Array(c,d,e);}if((b.j9-b.kf|0)>a.rL.length)a.rL=new Float32Array(b.j9-b.kf|0);e=b.kf;d=0;while(true){f=b.j9;if(e>=f)break;c=a.rL;g=R9(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.rL;e=f-b.kf|0;return c.subarray(0,e);},
Sv=(a,b)=>{let c,d,e,f,g;if(Gy){c=(!BD(b,Ei)?null:b.oT.k2.data).buffer;d=b.kf;e=b.j9-d|0;return new Int16Array(c,d,e);}if((b.j9-b.kf|0)>a.qZ.length)a.qZ=new Int16Array(b.j9-b.kf|0);e=b.kf;d=0;while(true){f=b.j9;if(e>=f)break;c=a.qZ;g=ANt(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.qZ;e=f-b.kf|0;return c.subarray(0,e);},
VR=(a,b)=>{let c,d,e,f,g;if(Gy){c=(!BD(b,Ei)?null:b.er()).buffer;d=b.kf;e=b.j9-d|0;return new Int32Array(c,d,e);}if((b.j9-b.kf|0)>a.pg.length)a.pg=new Int32Array(b.j9-b.kf|0);e=b.kf;d=0;while(true){f=b.j9;if(e>=f)break;c=a.pg;g=b.es(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.pg;e=f-b.kf|0;return c.subarray(0,e);},
Mt=(a,b)=>{let c,d,e,f,g;if(Gy)return !BD(b,Ei)?null:b.k2.data;if((b.j9-b.kf|0)>a.rW.length)a.rW=new Int8Array(b.j9-b.kf|0);c=b.kf;d=0;while(true){e=b.j9;if(c>=e)break;f=a.rW;g=Xa(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.rW;c=e-b.kf|0;return f.subarray(0,c);},
AXD=(a,b)=>{if((b.j9-b.kf|0)>a.pg.length)a.pg=new Int32Array(b.j9-b.kf|0);},
AT0=(a,b)=>{let c,d,e,f,g;c=a.m8;d=a.nO;if(!d)c=!c.kB?null:c.kx;else{e=c.kv;f=Bl(Be(Ba(V(d),E(2135587861, 2654435769)),c.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.kA;}}c=f<0?null:c.kw.data[f];}c=c;if(!b)c=!c.kB?null:c.kx;else{e=c.kv;d=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kC));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.kA;}}c=d<0?null:c.kw.data[d];}BF();return c===null?null:c[Bt]===true?c:c.kG;},
AFw=(a,b,c)=>{let d,e,f,g,h,i;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();h=d===null?null:d[Bt]===true?d:d.kG;d=a.mm;if(!c)d=!d.kB?null:d.kx;else{e=d.kv;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kC));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kA;}}d=b<0?null:d.kw.data[b];}i=d===null?null:d[Bt]===true?
d:d.kG;a.j$.attachShader(h,i);},
AR0=(a,b,c)=>{let d,e,f,g,h;d=a.j$;e=a.m4;if(!c)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.bindBuffer(b,e);},
AA3=(a,b,c)=>{let d,e,f,g,h;d=a.j$;e=a.nP;if(!c)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.bindTexture(b,e);},
AEB=(a,b,c,d,e)=>{a.j$.blendFuncSeparate(b,c,d,e);},
Ln=(a,b,c,d,e)=>{let f,g;if(d instanceof Em){f=a.j$;d=NU(a,d);f.bufferData(b,d,e);}else if(d instanceof Hf){f=a.j$;d=VR(a,d);f.bufferData(b,d,e);}else if(d instanceof Hg){f=a.j$;d=Sv(a,d);f.bufferData(b,d,e);}else if(d instanceof E4){f=a.j$;g=Mt(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new R;f.j1=1;f.j2=1;f.j3=A(139);B(f);}a.j$.bufferData(b,c,e);}},
Lm=(a,b,c,d,e)=>{let f,g;if(e instanceof Em){f=a.j$;e=NU(a,e);f.bufferSubData(b,c,e);}else if(e instanceof Hf){f=a.j$;g=VR(a,e);f.bufferSubData(b,c,g);}else if(e instanceof Hg){f=a.j$;e=Sv(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof E4)){f=new R;f.j1=1;f.j2=1;f.j3=A(139);B(f);}f=a.j$;e=Mt(a,e);f.bufferSubData(b,c,e);}},
APz=(a,b)=>{a.j$.clear(b);},
ABg=(a,b,c,d,e)=>{a.j$.clearColor(b,c,d,e);},
AGA=(a,b)=>{let c,d,e,f;c=a.mm;if(!b)c=!c.kB?null:c.kx;else{d=c.kv;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kC));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kA;}}c=e<0?null:c.kw.data[e];}BF();c=c===null?null:c[Bt]===true?c:c.kG;a.j$.compileShader(c);},
ASK=a=>{let b,c;b=a.j$.createProgram();c=a.pa;a.pa=c+1|0;Ce(a.lN,c,Ch(b));return c;},
AMg=(a,b)=>{let c,d;c=a.j$.createShader(b);d=a.o6;a.o6=d+1|0;Ce(a.mm,d,Ch(c));return d;},
APA=(a,b)=>{a.j$.depthMask(!!b);},
ALY=(a,b)=>{a.j$.disable(b);},
AKp=(a,b)=>{a.j$.disableVertexAttribArray(b);},
ABS=(a,b,c,d)=>{a.j$.drawArrays(b,c,d);},
AHq=(a,b,c,d,e)=>{let f,g;f=a.j$;g=e.kf;f.drawElements(b,c,d,g);},
AJU=(a,b,c,d,e)=>{a.j$.drawElements(b,c,d,e);},
ARA=(a,b)=>{a.j$.enable(b);},
AQh=(a,b)=>{a.j$.enableVertexAttribArray(b);},
AVT=a=>{let b,c;b=a.j$.createBuffer();c=a.mo;a.mo=c+1|0;Ce(a.m4,c,Ch(b));return c;},
W9=(a,b)=>{a.j$.generateMipmap(b);},
AXM=a=>{let b,c;b=a.j$.createTexture();c=a.ni;a.ni=c+1|0;Ce(a.nP,c,Ch(b));return c;},
KA=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.j$;g=a.lN;if(!b)g=!g.kB?null:g.kx;else{h=g.kv;i=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kC));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kA;}}g=i<0?null:g.kw.data[i];}BF();g=g===null?null:g[Bt]===true?g:g.kG;g=f.getActiveAttrib(g,c);El(d,g.size);El(e,g.type);d.kf=0;d.j9=d.ky;d.ko=(-1);e.kf=0;e.j9=e.ky;e.ko=(-1);return T(g.name);},
L6=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.j$;g=a.lN;if(!b)g=!g.kB?null:g.kx;else{h=g.kv;i=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kC));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kA;}}g=i<0?null:g.kw.data[i];}BF();g=g===null?null:g[Bt]===true?g:g.kG;g=f.getActiveUniform(g,c);El(d,g.size);El(e,g.type);d.kf=0;d.j9=d.ky;d.ko=(-1);e.kf=0;e.j9=e.ky;e.ko=(-1);return T(g.name);},
ADj=(a,b,c)=>{let d,e,f,g,h;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();h=d===null?null:d[Bt]===true?d:d.kG;return a.j$.getAttribLocation(h,Bx(c));},
Jp=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new R;c.j1=1;c.j2=1;c.j3=A(140);B(c);}NQ(c,0,a.j$.getParameter(b));c.kf=0;c.j9=c.ky;c.ko=(-1);},
ASB=(a,b)=>{let c,d,e,f,g;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;return T(c.getProgramInfoLog(d));},
Mx=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.j$;f=a.lN;if(!b)f=!f.kB?null:f.kx;else{g=f.kv;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),f.kC));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kA;}}f=h<0?null:f.kw.data[h];}BF();f=f===null?null:f[Bt]===true?f:f.kG;El(d,e.getProgramParameter(f,c));}else{f=a.j$;e=a.lN;if(!b)e=!e.kB?null:e.kx;else{g=e.kv;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.kA;}}e=h<0?null:e.kw.data[h];}BF();e=e===null?null:e[Bt]===true?e:e.kG;El(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.kf=0;d.j9=d.ky;d.ko=(-1);},
AH_=(a,b)=>{let c,d,e,f,g;c=a.j$;d=a.mm;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;return T(c.getShaderInfoLog(d));},
K4=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.j$;f=a.mm;if(!b)f=!f.kB?null:f.kx;else{g=f.kv;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),f.kC));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kA;}}f=h<0?null:f.kw.data[h];}BF();f=f===null?null:f[Bt]===true?f:f.kG;El(d,e.getShaderParameter(f,c));}else{f=a.j$;e=a.mm;if(!b)e=!e.kB?null:e.kx;else{g=e.kv;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.kA;}}e=h<0?null:e.kw.data[h];}BF();e=e===null?null:e[Bt]===true?e:e.kG;El(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.kf=0;d.j9=d.ky;d.ko=(-1);},
AEg=(a,b)=>{return T(a.j$.getParameter(b));},
AEa=(a,b,c)=>{let d,e,f,g,h;d=a.j$;e=a.lN;if(!b)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d=d.getUniformLocation(e,Bx(c));if(d===null)return (-1);c=a.m8;if(!b)c=!c.kB?null:c.kx;else{f=c.kv;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kC));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
c.kA;}}c=h<0?null:c.kw.data[h];}c=c;if(c===null){c=Dn(51,0.800000011920929);Ce(a.m8,b,c);}h=a.pk;a.pk=h+1|0;Ce(c,h,Ch(d));return h;},
Zs=(a,b)=>{let c,d,e,f,g;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.linkProgram(d);},
ABR=(a,b,c)=>{a.j$.pixelStorei(b,c);},
W8=(a,b,c)=>{let d,e,f,g,h;d=a.j$;e=a.mm;if(!b)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.shaderSource(e,Bx(c));},
MJ=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.j$;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.j9>4){if(!Gy)l=!(j instanceof Em)?Uint8Array.from(Mt(a,j)):NU(a,j);else{m=!BD(j,Ei)?null:j.k2.data;if(!(j instanceof Em)){n=j.j9-j.kf|0;o=m.byteOffset+j.kf|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.j9-j.kf|0;o=m.byteOffset+j.kf|0;l=new Float32Array(m.buffer,o,n);}}a.j$.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=APF(j,0);EF();j=FT;if(!p)j=!j.kB?null:j.kx;else{q=j.kv;n=Bl(Be(Ba(V(p),E(2135587861, 2654435769)),
j.kC));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.kA;}}j=n<0?null:j.kw.data[n];}k=j;r=k.oe;if(r===null&&k.lw!==null?1:0){j=a.j$;s=k.lw.rP;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.pW!==null?1:0){j=a.j$;s=k.pW;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.q3!==null?1:0){j=a.j$;s=k.q3;j.texImage2D(b,c,d,h,i,s);}else{j=a.j$;Fh(k);s=k.oe;j.texImage2D(b,c,d,h,i,s);}}},
AI1=(a,b,c,d)=>{a.j$.texParameterf(b,c,d);},
ALr=(a,b,c,d)=>{let e,f;e=a.j$;f=d;e.texParameterf(b,c,f);},
ALX=(a,b,c)=>{let d,e,f,g,h,i;d=a.m8;e=a.nO;if(!e)d=!d.kB?null:d.kx;else{f=d.kv;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kA;}}d=g<0?null:d.kw.data[g];}d=d;if(!b)d=!d.kB?null:d.kx;else{f=d.kv;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.kA;}}d=g<0?null:d.kw.data[g];}BF();i=d===null?null:d[Bt]===true?d:d.kG;a.j$.uniform1i(i,c);},
QU=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.m8;f=a.nO;if(!f)g=!g.kB?null:g.kx;else{h=g.kv;c=Bl(Be(Ba(V(f),E(2135587861, 2654435769)),g.kC));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.kA;}}g=c<0?null:g.kw.data[c];}g=g;if(!b)g=!g.kB?null:g.kx;else{h=g.kv;c=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),g.kC));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.kA;}}g=c<0?null:g.kw.data[c];}BF();j=g===null?null:g[Bt]===true?g:g.kG;g=a.j$;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
Zu=(a,b)=>{let c,d,e,f,g;a.nO=b;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.useProgram(d);},
AIB=(a,b,c,d,e,f,g)=>{a.j$.vertexAttribPointer(b,c,d,!!e,f,g);},
Xv=(a,b,c,d,e)=>{a.j$.viewport(b,c,d,e);};
let SJ=F(0);
function J6(){let a=this;G2.call(a);a.kM=null;a.Aa=null;a.zN=0;a.yw=null;a.yR=0;a.y_=null;a.ya=0;a.rD=null;a.rt=0;a.zD=null;}
let Oc=(a,b)=>{MB(a,b);a.Aa=Dn(51,0.800000011920929);a.zN=1;a.yw=Dn(51,0.800000011920929);a.yR=1;a.y_=Dn(51,0.800000011920929);a.ya=1;a.rD=Dn(51,0.800000011920929);a.rt=1;a.zD=new Uint32Array(12000);a.kM=b;},
ARj=a=>{let b=new J6();Oc(b,a);return b;},
AE1=(a,b)=>{let c,d,e,f,g;c=a.kM;d=a.rD;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.bindVertexArray(d);},
AKg=(a,b,c,d,e)=>{a.kM.drawArraysInstanced(b,c,d,e);},
ATk=(a,b,c,d,e,f)=>{a.kM.drawElementsInstanced(b,c,d,e,f);},
AKS=(a,b,c)=>{let d,e,f,g;d=c.kf;e=0;while(e<b){f=a.kM.createVertexArray();g=a.rt;a.rt=g+1|0;Ce(a.rD,g,Ch(f));El(c,g);e=e+1|0;}CH(c,d);},
AHy=(a,b,c)=>{if(b!=34045)Jp(a,b,c);else{NQ(c,0,a.kM.getParameter(b));c.kf=0;c.j9=c.ky;c.ko=(-1);}};
let Pd=F(J6);
let ADr=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kM;d=a.rD;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.bindVertexArray(d);b=a.kM.getError();if(!b)return;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&
f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
AAb=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kM.drawArraysInstanced(b,c,d,e);b=a.kM.getError();if(!b)return;f=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;S(f);B(f);},
ARQ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.kM.drawElementsInstanced(b,c,d,e,f);b=a.kM.getError();if(!b)return;g=new R;h=Bj(b,4);i=new K;i.jZ=G(16);D(i,i.jY,A(141));J(i,i.jY,b,10);D(i,i.jY,A(46));b=i.jY;if(h===null)h=A(2);D(i,b,h);j=new I;k=i.jZ;l=k.data;c=i.jY;d=l.length;if(c>=0&&c<=(d-0|0)){j.j0=L(k.data,0,c);g.j1=1;g.j2=1;g.j3=j;B(g);}g=new H;S(g);B(g);},
Zg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.kf;e=0;while(e<b){f=a.kM.createVertexArray();g=a.rt;a.rt=g+1|0;Ce(a.rD,g,Ch(f));El(c,g);e=e+1|0;}CH(c,d);b=a.kM.getError();if(!b)return;c=new R;h=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.jZ;k=j.data;e=f.jY;l=k.length;if(e>=0&&e<=(l-0|0)){i.j0=L(j.data,0,e);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
Z5=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j$;e=a.nP;if(!c)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.bindTexture(b,e);b=a.kM.getError();if(!b)return;d=new R;i=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;S(d);B(d);},
APE=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.clear(b);b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AI6=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.j$.clearColor(b,c,d,e);f=a.kM.getError();if(!f)return;g=new R;h=Bj(f,4);i=new K;i.jZ=G(16);D(i,i.jY,A(141));J(i,i.jY,f,10);D(i,i.jY,A(46));f=i.jY;if(h===null)h=A(2);D(i,f,h);j=new I;k=i.jZ;l=k.data;m=i.jY;n=l.length;if(m>=0&&m<=(n-0|0)){j.j0=L(k.data,0,m);g.j1=1;g.j2=1;g.j3=j;B(g);}g=new H;S(g);B(g);},
Zd=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.depthMask(!!b);b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AQk=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.disable(b);b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
ACH=(a,b,c,d)=>{let e,f,g,h,i,j;a.j$.drawArrays(b,c,d);b=a.kM.getError();if(!b)return;e=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;S(e);B(e);},
AMt=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.j$;g=e.kf;f.drawElements(b,c,d,g);b=a.kM.getError();if(!b)return;e=new R;h=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.jZ;k=j.data;c=f.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;S(e);B(e);},
AN9=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.enable(b);b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
WT=(a,b)=>{return T(a.j$.getParameter(b));},
X6=(a,b,c)=>{let d,e,f,g,h,i,j;a.j$.pixelStorei(b,c);b=a.kM.getError();if(!b)return;d=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;S(d);B(d);},
AJA=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MJ(a,b,c,d,e,f,g,h,i,j);b=a.kM.getError();if(!b)return;j=new R;k=Bj(b,4);l=new K;l.jZ=G(16);D(l,l.jY,A(141));J(l,l.jY,b,10);D(l,l.jY,A(46));b=l.jY;if(k===null)k=A(2);D(l,b,k);m=new I;n=l.jZ;o=n.data;c=l.jY;d=o.length;if(c>=0&&c<=(d-0|0)){m.j0=L(n.data,0,c);j.j1=1;j.j2=1;j.j3=m;B(j);}j=new H;S(j);B(j);},
ACo=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.j$.texParameterf(b,c,d);b=a.kM.getError();if(!b)return;e=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;k=j.length;if(c>=0&&c<=(k-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;S(e);B(e);},
AEQ=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j$.viewport(b,c,d,e);b=a.kM.getError();if(!b)return;f=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;S(f);B(f);},
AIg=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();h=d===null?null:d[Bt]===true?d:d.kG;d=a.mm;if(!c)d=!d.kB?null:d.kx;else{e=d.kv;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kC));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kA;}}d=b<0?null:d.kw.data[b];}i=d===null?null:d[Bt]===true
?d:d.kG;a.j$.attachShader(h,i);b=a.kM.getError();if(!b)return;d=new R;j=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(j===null)j=A(2);D(h,b,j);i=new I;e=h.jZ;k=e.data;c=h.jY;f=k.length;if(c>=0&&c<=(f-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;S(d);B(d);},
ARb=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j$;e=a.m4;if(!c)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.bindBuffer(b,e);b=a.kM.getError();if(!b)return;d=new R;i=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;S(d);B(d);},
ADt=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j$.blendFuncSeparate(b,c,d,e);b=a.kM.getError();if(!b)return;f=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;S(f);B(f);},
AJg=(a,b,c,d,e)=>{let f,g,h,i,j;Ln(a,b,c,d,e);b=a.kM.getError();if(!b)return;d=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;e=j.length;if(c>=0&&c<=(e-0|0)){h.j0=L(i.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;S(d);B(d);},
AQ3=(a,b,c,d,e)=>{let f,g,h,i,j;Lm(a,b,c,d,e);b=a.kM.getError();if(!b)return;e=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;S(e);B(e);},
AKJ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mm;if(!b)c=!c.kB?null:c.kx;else{d=c.kv;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kC));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kA;}}c=e<0?null:c.kw.data[e];}BF();g=c===null?null:c[Bt]===true?c:c.kG;a.j$.compileShader(g);b=a.kM.getError();if(!b)return;c=new R;h=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(h===null)h=A(2);D(g,b,h);i=new I;d=g.jZ;j=d.data;e=g.jY;f=j.length;if(e>=0&&e<=(f-0|0))
{i.j0=L(d.data,0,e);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
ASJ=a=>{let b,c,d,e,f,g,h,i,j;b=a.j$.createProgram();c=a.pa;a.pa=c+1|0;Ce(a.lN,c,Ch(b));d=a.kM.getError();if(!d)return c;b=new R;e=Bj(d,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,d,10);D(f,f.jY,A(46));d=f.jY;if(e===null)e=A(2);D(f,d,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;S(b);B(b);},
AMN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$.createShader(b);d=a.o6;a.o6=d+1|0;Ce(a.mm,d,Ch(c));b=a.kM.getError();if(!b)return d;c=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;S(c);B(c);},
ASy=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.disableVertexAttribArray(b);b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
ZK=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j$.drawElements(b,c,d,e);b=a.kM.getError();if(!b)return;f=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;S(f);B(f);},
AMU=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.enableVertexAttribArray(b);b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
APK=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.generateMipmap(b);b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AGg=(a,b,c,d,e)=>{let f,g,h,i,j;f=KA(a,b,c,d,e);b=a.kM.getError();if(!b)return f;d=new R;g=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;S(d);B(d);},
APB=(a,b,c,d,e)=>{let f,g,h,i,j;f=L6(a,b,c,d,e);b=a.kM.getError();if(!b)return f;d=new R;g=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;S(d);B(d);},
AJ2=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();h=d===null?null:d[Bt]===true?d:d.kG;b=a.j$.getAttribLocation(h,Bx(c));f=a.kM.getError();if(!f)return b;c=new R;i=Bj(f,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,f,10);D(d,d.jY,A(46));b=d.jY;if(i===null)i=A(2);D(d,b,i);h=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){h.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;S(c);B(c);},
ADC=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)Jp(a,b,c);else{NQ(c,0,a.kM.getParameter(b));c.kf=0;c.j9=c.ky;c.ko=(-1);}b=a.kM.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
ABj=(a,b,c,d)=>{let e,f,g,h,i,j;Mx(a,b,c,d);b=a.kM.getError();if(!b)return;d=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;S(d);B(d);},
X4=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c=T(c.getProgramInfoLog(d));b=a.kM.getError();if(!b)return c;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
ASH=(a,b,c,d)=>{let e,f,g,h,i,j;K4(a,b,c,d);b=a.kM.getError();if(!b)return;d=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;S(d);B(d);},
YX=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$;d=a.mm;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c=T(c.getShaderInfoLog(d));b=a.kM.getError();if(!b)return c;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=
0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
X7=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j$;e=a.lN;if(!b)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;c=d.getUniformLocation(e,Bx(c));if(c===null)h=(-1);else{d=a.m8;if(!b)d=!d.kB?null:d.kx;else{f=d.kv;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|
0)&d.kA;}}d=h<0?null:d.kw.data[h];}d=d;if(d===null){d=Dn(51,0.800000011920929);Ce(a.m8,b,d);}h=a.pk;a.pk=h+1|0;Ce(d,h,Ch(c));}b=a.kM.getError();if(!b)return h;c=new R;i=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;h=d.jY;g=j.length;if(h>=0&&h<=(g-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;S(c);B(c);},
ARG=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.linkProgram(d);b=a.kM.getError();if(!b)return;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f<=(g-0
|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
X2=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j$;e=a.mm;if(!b)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.shaderSource(e,Bx(c));b=a.kM.getError();if(!b)return;c=new R;i=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;g=d.jY;h=j.length;if(g>=0&&g
<=(h-0|0)){e.j0=L(f.data,0,g);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;S(c);B(c);},
Zr=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.j$;f=d;e.texParameterf(b,c,f);b=a.kM.getError();if(!b)return;e=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;S(e);B(e);},
AAy=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.m8;e=a.nO;if(!e)d=!d.kB?null:d.kx;else{f=d.kv;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kA;}}d=g<0?null:d.kw.data[g];}d=d;if(!b)d=!d.kB?null:d.kx;else{f=d.kv;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kA;}}d=e<0?null:d.kw.data[e];}BF();i=d===null?null:d[Bt]===true?d:d.kG;a.j$.uniform1i(i,c);b
=a.kM.getError();if(!b)return;d=new R;i=Bj(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(141));J(j,j.jY,b,10);D(j,j.jY,A(46));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;f=j.jZ;l=f.data;c=j.jY;e=l.length;if(c>=0&&c<=(e-0|0)){k.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=k;B(d);}d=new H;S(d);B(d);},
ATp=(a,b)=>{let c,d,e,f,g,h,i,j;a.nO=b;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.useProgram(d);b=a.kM.getError();if(!b)return;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f
<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
ANF=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.j$.vertexAttribPointer(b,c,d,!!e,f,g);b=a.kM.getError();if(!b)return;h=new R;i=Bj(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(141));J(j,j.jY,b,10);D(j,j.jY,A(46));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;l=j.jZ;m=l.data;c=j.jY;d=m.length;if(c>=0&&c<=(d-0|0)){k.j0=L(l.data,0,c);h.j1=1;h.j2=1;h.j3=k;B(h);}h=new H;S(h);B(h);};
function QH(){let a=this;C.call(a);a.vi=0;a.uA=0;a.uJ=0;a.yh=null;a.za=null;a.o1=null;a.x8=A(142);}
let AH9=(a,b,c,d,e)=>{a.x8=A(142);if(b===NM)a.o1=Jw;else if(b===M8)a.o1=Jw;else if(b===Ne)a.o1=JQ;else if(b===MS)a.o1=JQ;else if(b!==Hu)a.o1=SF;else a.o1=LN;b=a.o1;if(b===Jw)LC(a,A(143),c);else if(b===LN)LC(a,A(144),c);else if(b===JQ)LC(a,A(145),c);else{a.vi=(-1);a.uA=(-1);a.uJ=(-1);d=A(65);e=A(65);}a.yh=d;a.za=e;},
AMn=(a,b,c,d)=>{let e=new QH();AH9(e,a,b,c,d);return e;},
LC=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=QS(IR(b,0),c);if(!Rc(d)){e=Dj;b=new K;b.jZ=G(16);D(b,b.jY,A(146));D(b,b.jY,c);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);if(e.pt>=2){if(BU===null){b=new CJ;e=new Ci;Bp(e);e.lB=BJ(32);EW(b);b.lX=e;e=new K;Ed(e);b.lF=e;b.lD=G(32);b.lG=0;b.lI=Cg;BU=b;}b=new K;b.jZ=G(16);BW(b,b.jY,A(142));BW(b,b.jY,A(78));BW(b,b.jY,c);c=new I;f=b.jZ;g=f.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){c.j0=L(f.data,0,h);BV(Bx(c));BV("\n");}else{b
=new H;b.j1=1;b.j2=1;B(b);}}a.vi=2;a.uA=0;a.uJ=0;break a;}b=new H;b.j1=1;b.j2=1;B(b);}b=d.n3;j=b.oB;if(!j){b=new BK;b.j1=1;b.j2=1;Bi(b);B(b);}k=BT(1,b.pV);if(k>=0){b=new H;c=new K;Bp(c);c.jZ=G(16);J(c,c.jY,1,10);e=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}f=b.lW.data;if(f[2]<0)e=null;else{b=b.qd;if(!j){b=new BK;b.j1=1;b.j2=1;Bi(b);B(b);}if(k>=0){b=new H;c=new K;Bp(c);c.jZ=G(16);J(c,c.jY,1,10);e=new I;f=c.jZ;g=f.data;h
=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}h=f[2];if(!j){b=new BK;b.j1=1;b.j2=1;Bi(b);B(b);}if(k>=0){b=new H;c=new K;Bp(c);c.jZ=G(16);J(c,c.jY,1,10);e=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}e=Cj(b,h,f[3]);}f=(Kz(IR(A(147),0),e,0)).data;b=f[0];b:{try{h=La(b);break b;}catch($$e){$$je=Y($$e);if($$je instanceof CA){}else{throw $$e;}}d=Dj;e=new K;e.jZ
=G(16);D(e,e.jY,A(148));D(e,e.jY,b);D(e,e.jY,A(149));J(e,e.jY,2,10);l=new I;g=e.jZ;m=g.data;i=e.jY;j=m.length;if(i>=0&&i<=(j-0|0)){l.j0=L(g.data,0,i);if(d.pt>=1){if(Do===null){b=new FK;e=new Ci;EW(e);e.lB=BJ(32);F6(b,e);b.lF=Ep();b.lD=G(32);b.lG=0;b.lI=Cg;Do=b;}b=new K;b.jZ=G(16);BZ(b,b.jY,Cn(A(150)));BZ(b,b.jY,Cn(A(78)));BZ(b,b.jY,Cn(l));c=new I;g=b.jZ;m=g.data;i=b.jY;j=m.length;if(i>=0&&i<=(j-0|0)){c.j0=L(g.data,0,i);DG(Bx(c));DG("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}h=2;}else{b=new H;b.j1=1;b.j2=1;B(b);}}a.vi
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=La(b);break c;}catch($$e){$$je=Y($$e);if($$je instanceof CA){}else{throw $$e;}}d=Dj;e=new K;e.jZ=G(16);D(e,e.jY,A(148));D(e,e.jY,b);D(e,e.jY,A(149));J(e,e.jY,0,10);l=new I;g=e.jZ;m=g.data;j=e.jY;k=m.length;if(j>=0&&j<=(k-0|0)){l.j0=L(g.data,0,j);if(d.pt>=1){if(Do===null){b=new FK;e=new Ci;EW(e);e.lB=BJ(32);F6(b,e);b.lF=Ep();b.lD=G(32);b.lG=0;b.lI=Cg;Do=b;}b=new K;b.jZ=G(16);BZ(b,b.jY,Cn(A(150)));BZ(b,b.jY,Cn(A(78)));BZ(b,b.jY,Cn(l));c=new I;g=b.jZ;m=g.data;j=b.jY;k
=m.length;if(j>=0&&j<=(k-0|0)){c.j0=L(g.data,0,j);DG(Bx(c));DG("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}i=0;}else{b=new H;b.j1=1;b.j2=1;B(b);}}}a.uA=i;if(n<3)h=0;else{b=f[2];d:{try{h=La(b);break d;}catch($$e){$$je=Y($$e);if($$je instanceof CA){}else{throw $$e;}}e=Dj;d=new K;d.jZ=G(16);D(d,d.jY,A(148));D(d,d.jY,b);D(d,d.jY,A(149));J(d,d.jY,0,10);b=new I;g=d.jZ;f=g.data;h=d.jY;i=f.length;if(h>=0&&h<=(i-0|0)){b.j0=L(g.data,0,h);if(e.pt>=1){if(Do===null){e=new FK;d=new Ci;EW(d);d.lB=BJ(32);F6(e,d);e.lF=Ep();e.lD
=G(32);e.lG=0;e.lI=Cg;Do=e;}e=new K;e.jZ=G(16);BZ(e,e.jY,Cn(A(150)));BZ(e,e.jY,Cn(A(78)));BZ(e,e.jY,Cn(b));b=new I;f=e.jZ;g=f.data;i=e.jY;j=g.length;if(i>=0&&i<=(j-0|0)){b.j0=L(f.data,0,i);DG(Bx(b));DG("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}h=0;}else{b=new H;b.j1=1;b.j2=1;B(b);}}}a.uJ=h;}};
let E2=F(BG);
let NM=null,Ne=null,AA4=null,MS=null,Hu=null,M8=null,AEK=null;
let ABJ=()=>{let b,c,d,e,f,g;b=new E2;b.kg=A(7);b.ka=0;NM=b;c=new E2;c.kg=A(151);c.ka=1;Ne=c;d=new E2;d.kg=A(152);d.ka=2;AA4=d;e=new E2;e.kg=A(153);e.ka=3;MS=e;f=new E2;f.kg=A(154);f.ka=4;Hu=f;g=new E2;g.kg=A(155);g.ka=5;M8=g;AEK=U(E2,[b,c,d,e,f,g]);};
let T1=F(0);
function MO(){C.call(this);this.yk=null;}
let ACy=a=>{return;};
let VQ=F(G2);
let ASe=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j$;e=a.nP;if(!c)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.bindTexture(b,e);b=a.j$.getError();if(!b)return;d=new R;i=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&
c<=(g-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;S(d);B(d);},
ABq=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.clear(b);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
ACm=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.j$.clearColor(b,c,d,e);f=a.j$.getError();if(!f)return;g=new R;h=Bj(f,4);i=new K;i.jZ=G(16);D(i,i.jY,A(141));J(i,i.jY,f,10);D(i,i.jY,A(46));f=i.jY;if(h===null)h=A(2);D(i,f,h);j=new I;k=i.jZ;l=k.data;m=i.jY;n=l.length;if(m>=0&&m<=(n-0|0)){j.j0=L(k.data,0,m);g.j1=1;g.j2=1;g.j3=j;B(g);}g=new H;S(g);B(g);},
AJe=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.depthMask(!!b);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AS0=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.disable(b);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AGy=(a,b,c,d)=>{let e,f,g,h,i,j;a.j$.drawArrays(b,c,d);b=a.j$.getError();if(!b)return;e=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;S(e);B(e);},
ASq=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.j$;g=e.kf;f.drawElements(b,c,d,g);b=a.j$.getError();if(!b)return;e=new R;h=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(h===null)h=A(2);D(f,b,h);i=new I;j=f.jZ;k=j.data;c=f.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;S(e);B(e);},
ZN=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.enable(b);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AHX=(a,b)=>{return T(a.j$.getParameter(b));},
AKO=(a,b,c)=>{let d,e,f,g,h,i,j;a.j$.pixelStorei(b,c);b=a.j$.getError();if(!b)return;d=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;S(d);B(d);},
ADD=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;MJ(a,b,c,d,e,f,g,h,i,j);b=a.j$.getError();if(!b)return;j=new R;k=Bj(b,4);l=new K;l.jZ=G(16);D(l,l.jY,A(141));J(l,l.jY,b,10);D(l,l.jY,A(46));b=l.jY;if(k===null)k=A(2);D(l,b,k);m=new I;n=l.jZ;o=n.data;c=l.jY;d=o.length;if(c>=0&&c<=(d-0|0)){m.j0=L(n.data,0,c);j.j1=1;j.j2=1;j.j3=m;B(j);}j=new H;S(j);B(j);},
ACW=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.j$.texParameterf(b,c,d);b=a.j$.getError();if(!b)return;e=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;k=j.length;if(c>=0&&c<=(k-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;S(e);B(e);},
ASC=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j$.viewport(b,c,d,e);b=a.j$.getError();if(!b)return;f=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;S(f);B(f);},
XZ=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();h=d===null?null:d[Bt]===true?d:d.kG;d=a.mm;if(!c)d=!d.kB?null:d.kx;else{e=d.kv;b=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),d.kC));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kA;}}d=b<0?null:d.kw.data[b];}i=d===null?null:d[Bt]===true
?d:d.kG;a.j$.attachShader(h,i);b=a.j$.getError();if(!b)return;d=new R;j=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(j===null)j=A(2);D(h,b,j);i=new I;e=h.jZ;k=e.data;c=h.jY;f=k.length;if(c>=0&&c<=(f-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;S(d);B(d);},
WP=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.j$;e=a.m4;if(!c)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(c),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.bindBuffer(b,e);b=a.j$.getError();if(!b)return;d=new R;i=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(i===null)i=A(2);D(e,b,i);j=new I;f=e.jZ;k=f.data;c=e.jY;g=k.length;if(c>=0&&c<=(g
-0|0)){j.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;S(d);B(d);},
WN=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j$.blendFuncSeparate(b,c,d,e);b=a.j$.getError();if(!b)return;f=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;S(f);B(f);},
AHp=(a,b,c,d,e)=>{let f,g,h,i,j;Ln(a,b,c,d,e);b=a.j$.getError();if(!b)return;d=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;e=j.length;if(c>=0&&c<=(e-0|0)){h.j0=L(i.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;S(d);B(d);},
AE4=(a,b,c,d,e)=>{let f,g,h,i,j;Lm(a,b,c,d,e);b=a.j$.getError();if(!b)return;e=new R;f=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(f===null)f=A(2);D(g,b,f);h=new I;i=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){h.j0=L(i.data,0,c);e.j1=1;e.j2=1;e.j3=h;B(e);}e=new H;S(e);B(e);},
AS_=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mm;if(!b)c=!c.kB?null:c.kx;else{d=c.kv;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),c.kC));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kA;}}c=e<0?null:c.kw.data[e];}BF();g=c===null?null:c[Bt]===true?c:c.kG;a.j$.compileShader(g);b=a.j$.getError();if(!b)return;c=new R;h=Bj(b,4);g=new K;g.jZ=G(16);D(g,g.jY,A(141));J(g,g.jY,b,10);D(g,g.jY,A(46));b=g.jY;if(h===null)h=A(2);D(g,b,h);i=new I;d=g.jZ;j=d.data;e=g.jY;f=j.length;if(e>=0&&e<=(f-0|0))
{i.j0=L(d.data,0,e);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
ALl=a=>{let b,c,d,e,f,g,h,i,j;b=a.j$.createProgram();c=a.pa;a.pa=c+1|0;Ce(a.lN,c,Ch(b));d=a.j$.getError();if(!d)return c;b=new R;e=Bj(d,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,d,10);D(f,f.jY,A(46));d=f.jY;if(e===null)e=A(2);D(f,d,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;S(b);B(b);},
ASP=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$.createShader(b);d=a.o6;a.o6=d+1|0;Ce(a.mm,d,Ch(c));b=a.j$.getError();if(!b)return d;c=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;S(c);B(c);},
ALe=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.disableVertexAttribArray(b);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AFl=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j$.drawElements(b,c,d,e);b=a.j$.getError();if(!b)return;f=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;S(f);B(f);},
AS1=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.enableVertexAttribArray(b);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AKc=(a,b)=>{let c,d,e,f,g,h,i,j;a.j$.generateMipmap(b);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
AHt=(a,b,c,d,e)=>{let f,g,h,i,j;f=KA(a,b,c,d,e);b=a.j$.getError();if(!b)return f;d=new R;g=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;S(d);B(d);},
Z_=(a,b,c,d,e)=>{let f,g,h,i,j;f=L6(a,b,c,d,e);b=a.j$.getError();if(!b)return f;d=new R;g=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(g===null)g=A(2);D(e,b,g);f=new I;h=e.jZ;i=h.data;c=e.jY;j=i.length;if(c>=0&&c<=(j-0|0)){f.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=f;B(d);}d=new H;S(d);B(d);},
AFx=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();h=d===null?null:d[Bt]===true?d:d.kG;b=a.j$.getAttribLocation(h,Bx(c));f=a.j$.getError();if(!f)return b;c=new R;i=Bj(f,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,f,10);D(d,d.jY,A(46));b=d.jY;if(i===null)i=A(2);D(d,b,i);h=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){h.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;S(c);B(c);},
XA=(a,b,c)=>{let d,e,f,g,h,i,j;Jp(a,b,c);b=a.j$.getError();if(!b)return;c=new R;d=Bj(b,4);e=new K;e.jZ=G(16);D(e,e.jY,A(141));J(e,e.jY,b,10);D(e,e.jY,A(46));b=e.jY;if(d===null)d=A(2);D(e,b,d);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;S(c);B(c);},
ADJ=(a,b,c,d)=>{let e,f,g,h,i,j;Mx(a,b,c,d);b=a.j$.getError();if(!b)return;d=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;S(d);B(d);},
ADR=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c=T(c.getProgramInfoLog(d));b=a.j$.getError();if(!b)return c;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
Yd=(a,b,c,d)=>{let e,f,g,h,i,j;K4(a,b,c,d);b=a.j$.getError();if(!b)return;d=new R;e=Bj(b,4);f=new K;f.jZ=G(16);D(f,f.jY,A(141));J(f,f.jY,b,10);D(f,f.jY,A(46));b=f.jY;if(e===null)e=A(2);D(f,b,e);g=new I;h=f.jZ;i=h.data;c=f.jY;j=i.length;if(c>=0&&c<=(j-0|0)){g.j0=L(h.data,0,c);d.j1=1;d.j2=1;d.j3=g;B(d);}d=new H;S(d);B(d);},
ANM=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$;d=a.mm;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c=T(c.getShaderInfoLog(d));b=a.j$.getError();if(!b)return c;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f
>=0&&f<=(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
AP3=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j$;e=a.lN;if(!b)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;c=d.getUniformLocation(e,Bx(c));if(c===null)h=(-1);else{d=a.m8;if(!b)d=!d.kB?null:d.kx;else{f=d.kv;h=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1
|0)&d.kA;}}d=h<0?null:d.kw.data[h];}d=d;if(d===null){d=Dn(51,0.800000011920929);Ce(a.m8,b,d);}h=a.pk;a.pk=h+1|0;Ce(d,h,Ch(c));}b=a.j$.getError();if(!b)return h;c=new R;i=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;h=d.jY;g=j.length;if(h>=0&&h<=(g-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;S(c);B(c);},
AII=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.linkProgram(d);b=a.j$.getError();if(!b)return;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f<=(g-0
|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
ASo=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.j$;e=a.mm;if(!b)e=!e.kB?null:e.kx;else{f=e.kv;g=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kA;}}e=g<0?null:e.kw.data[g];}BF();e=e===null?null:e[Bt]===true?e:e.kG;d.shaderSource(e,Bx(c));b=a.j$.getError();if(!b)return;c=new R;i=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(i===null)i=A(2);D(d,b,i);e=new I;f=d.jZ;j=f.data;g=d.jY;h=j.length;if(g>=0&&
g<=(h-0|0)){e.j0=L(f.data,0,g);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;S(c);B(c);},
APT=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.j$;f=d;e.texParameterf(b,c,f);b=a.j$.getError();if(!b)return;e=new R;g=Bj(b,4);h=new K;h.jZ=G(16);D(h,h.jY,A(141));J(h,h.jY,b,10);D(h,h.jY,A(46));b=h.jY;if(g===null)g=A(2);D(h,b,g);i=new I;j=h.jZ;k=j.data;c=h.jY;d=k.length;if(c>=0&&c<=(d-0|0)){i.j0=L(j.data,0,c);e.j1=1;e.j2=1;e.j3=i;B(e);}e=new H;S(e);B(e);},
ASI=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.m8;e=a.nO;if(!e)d=!d.kB?null:d.kx;else{f=d.kv;g=Bl(Be(Ba(V(e),E(2135587861, 2654435769)),d.kC));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kA;}}d=g<0?null:d.kw.data[g];}d=d;if(!b)d=!d.kB?null:d.kx;else{f=d.kv;e=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kA;}}d=e<0?null:d.kw.data[e];}BF();i=d===null?null:d[Bt]===true?d:d.kG;a.j$.uniform1i(i,c);b
=a.j$.getError();if(!b)return;d=new R;i=Bj(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(141));J(j,j.jY,b,10);D(j,j.jY,A(46));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;f=j.jZ;l=f.data;c=j.jY;e=l.length;if(c>=0&&c<=(e-0|0)){k.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=k;B(d);}d=new H;S(d);B(d);},
Yf=(a,b)=>{let c,d,e,f,g,h,i,j;a.nO=b;c=a.j$;d=a.lN;if(!b)d=!d.kB?null:d.kx;else{e=d.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),d.kC));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kA;}}d=f<0?null:d.kw.data[f];}BF();d=d===null?null:d[Bt]===true?d:d.kG;c.useProgram(d);b=a.j$.getError();if(!b)return;c=new R;h=Bj(b,4);d=new K;d.jZ=G(16);D(d,d.jY,A(141));J(d,d.jY,b,10);D(d,d.jY,A(46));b=d.jY;if(h===null)h=A(2);D(d,b,h);i=new I;e=d.jZ;j=e.data;f=d.jY;g=j.length;if(f>=0&&f<=
(g-0|0)){i.j0=L(e.data,0,f);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;S(c);B(c);},
AA8=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.j$.vertexAttribPointer(b,c,d,!!e,f,g);b=a.j$.getError();if(!b)return;h=new R;i=Bj(b,4);j=new K;j.jZ=G(16);D(j,j.jY,A(141));J(j,j.jY,b,10);D(j,j.jY,A(46));b=j.jY;if(i===null)i=A(2);D(j,b,i);k=new I;l=j.jZ;m=l.data;c=j.jY;d=m.length;if(c>=0&&c<=(d-0|0)){k.j0=L(l.data,0,c);h.j1=1;h.j2=1;h.j3=k;B(h);}h=new H;S(h);B(h);};
function T7(){let a=this;C.call(a);a.n9=0;a.kv=null;a.kw=null;a.kx=null;a.kB=0;a.wi=0.0;a.tk=0;a.kC=0;a.kA=0;}
let AEZ=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wi=c;d=JH(b,c);a.tk=d*c|0;b=d-1|0;a.kA=b;a.kC=Fd(V(b));a.kv=X(d);a.kw=Q(C,d);return;}e=new Bm;f=new K;f.jZ=G(16);D(f,f.jY,A(66));ED(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
Dn=(a,b)=>{let c=new T7();AEZ(c,a,b);return c;},
Ce=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.kx;a.kx=c;if(!a.kB){a.kB=1;a.n9=a.n9+1|0;}return d;}e=a.kv;f=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),a.kC));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.kA;}}if(f>=0){e=a.kw.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.kw.data[f]=c;b=a.n9+1|0;a.n9=b;if(b>=a.tk)AOZ(a,g.length<<1);return null;},
GV=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.kB)return null;a.kB=0;c=a.kx;a.kx=null;a.n9=a.n9-1|0;return c;}d=a.kv;e=Ba(V(b),E(2135587861, 2654435769));f=a.kC;g=Bl(Be(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.kA;}}if(g<0)return null;j=a.kw.data;k=j[g];l=a.kA;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bl(Be(Ba(V(n),E(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.n9=a.n9-1|0;return k;},
ASU=(a,b,c)=>{let d,e,f,g;a:{d=a.kw;if(b===null){if(a.kB&&a.kx===null)return 1;d=d.data;e=a.kv;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.kx)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.kB){g=a.kx;if(b===g?1:g instanceof Fy&&g.np==b.np?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Fy&&g.np==b.np?1:0)return 1;f=f+(-1)|0;}}return 0;},
AOZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.kv.data.length;a.tk=b*a.wi|0;d=b-1|0;a.kA=d;d=Fd(V(d));a.kC=d;e=a.kv;f=a.kw;g=X(b);a.kv=g;h=Q(C,b);a.kw=h;if(a.n9>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bl(Be(Ba(V(k),E(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.kA;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function Sl(){let a=this;C.call(a);a.nq=0;a.oF=null;a.qm=0;a.xW=0.0;a.tD=0;a.pY=0;a.ou=0;}
let AC0=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.xW=c;d=JH(b,c);a.tD=d*c|0;b=d-1|0;a.ou=b;a.pY=Fd(V(b));a.oF=X(d);return;}e=new Bm;f=new K;f.jZ=G(16);D(f,f.jY,A(66));ED(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
O7=(a,b)=>{let c=new Sl();AC0(c,a,b);return c;},
ACa=(a,b)=>{let c,d,e,f;if(!b){if(a.qm)return 0;a.qm=1;a.nq=a.nq+1|0;return 1;}c=a.oF;d=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),a.pY));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.ou;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.nq+1|0;a.nq=b;if(b>=a.tD)ACk(a,e.length<<1);return 1;},
AQS=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.qm)return 0;a.qm=0;a.nq=a.nq-1|0;return 1;}c=a.oF;d=Ba(V(b),E(2135587861, 2654435769));e=a.pY;f=Bl(Be(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.ou;}}if(f<0)return 0;h=a.ou;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bl(Be(Ba(V(b),E(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.nq=a.nq-1|0;return 1;},
ACk=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.oF.data.length;a.tD=b*a.xW|0;d=b-1|0;a.ou=d;d=Fd(V(d));a.pY=d;e=a.oF;f=X(b);a.oF=f;if(a.nq>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bl(Be(Ba(V(h),E(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.ou;}f[i]=h;}g=g+1|0;}}}};
let UT=F(0);
function Mg(){C.call(this);this.si=null;}
let XR=a=>{let b;b=a.si;b.sw=1;UI(Bx(b.uj));},
AB4=a=>{let b;b=a.si;b.sw=1;UI(Bx(b.uj));},
Xr=a=>{a.si.sw=0;};
let V$=F(0);
function Wh(){let a=this;C.call(a);a.qv=null;a.u0=null;a.zR=null;}
let Jr=0;
let AQA=a=>{let b,c,d,e,f,g,h,i,$$je;b=AAL();a.qv=b;c=ALb(b);a.u0=c;b=new St;d=a.qv;e=new Bf;e.ks=0;e.j8=Q(C,16);b.kh=e;b.kO=2147483647;b.yI=d;b.yV=c;a.zR=b;b=Dj.r0;FU(b);a:{try{Bg(b,a);DP(b);break a;}catch($$e){$$je=Y($$e);d=$$je;}DP(b);B(d);}if(a.qv.state!=='running'?1:0){b=new Kt;b.zO=a;AA5(a.qv,B9(b,"unlockFunction"));}else{if(!Jr&&Dj.pt>=2){if(BU===null){c=new CJ;e=new Ci;EW(e);e.lB=BJ(32);F6(c,e);c.lF=Ep();c.lD=G(32);c.lG=0;c.lI=Cg;BU=c;}c=new K;c.jZ=G(16);BZ(c,c.jY,Cn(A(156)));BZ(c,c.jY,Cn(A(78)));BZ(c,
c.jY,Cn(A(157)));b=new I;f=c.jZ;g=f.data;h=c.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);BV(Bx(b));BV("\n");}else{b=new H;b.j1=1;b.j2=1;B(b);}}Jr=1;}},
AQW=()=>{let a=new Wh();AQA(a);return a;},
AOS=a=>{a.u0.disconnect(a.qv.destination);},
AKo=a=>{a.u0.connect(a.qv.destination);},
AA5=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
AAL=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
ALb=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function OA(){DM.call(this);this.yf=null;}
let UP=F(Bz);
function Ck(){Dp.call(this);this.kq=null;}
let H=F(Bw);
let AAT=a=>{a.j1=1;a.j2=1;},
Ft=()=>{let a=new H();AAT(a);return a;},
AGp=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
Nj=a=>{let b=new H();AGp(b,a);return b;};
let Fa=F(0);
let Qj=F(0);
let RX=F(0);
let RM=F(0);
let Tj=F(0);
let V6=F(0);
let Ug=F(0);
let PW=F(0);
let K2=F(0);
let OY=F();
let ALM=(a,b)=>{b=a.S(b);BF();return b===null?null:b instanceof FS()&&b instanceof EM?(b[Bt]===true?b:b.kG):b;},
APh=(a,b,c)=>{a.eR(T(b),DA(c,"handleEvent"));},
AOx=(a,b,c)=>{a.eS(T(b),DA(c,"handleEvent"));},
ALy=(a,b,c,d)=>{a.eT(T(b),DA(c,"handleEvent"),d?1:0);},
ARr=(a,b)=>{return !!a.eU(b);},
AA9=a=>{return a.eV();},
Xq=(a,b,c,d)=>{a.eW(T(b),DA(c,"handleEvent"),d?1:0);};
let LS=F();
function JX(){let a=this;LS.call(a);a.tq=0;a.o_=null;a.wI=0.0;a.tE=0;a.rU=0;a.rl=0;a.xZ=0;}
let Ww=null,QW=null;
let KT=(a,b)=>{let c,d,e;a.rl=(-1);if(b<0){c=new Bm;c.j1=1;c.j2=1;B(c);}a.tq=0;if(!b)b=1;d=Q(IO,b);e=d.data;a.o_=d;b=e.length;a.rU=b;a.wI=0.75;a.tE=b*0.75|0;},
AVq=a=>{let b=new JX();KT(b,a);return b;},
DB=(a,b,c)=>{let d,e,f,g,h,i,j;FU(a);try{if(b!==null&&c!==null){a:{if(!b.lR){d=0;while(true){if(d>=b.j0.length)break a;b.lR=(31*b.lR|0)+b.j0.charCodeAt(d)|0;d=d+1|0;}}}e=b.lR&2147483647;f=a.o_.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.w7;if(!b.lR){i=0;while(true){if(i>=b.j0.length)break b;b.lR=(31*b.lR|0)+b.j0.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.lR&&h.mZ.cO(b)?1:0)break;h=h.sO;}if(h!==null){j=h.m0;h.m0=c;return j;}a.xZ=a.xZ+1|0;d=a.tq+1|0;a.tq=d;if(d>a.tE){AJd(a);g=e%a.o_.data.length|0;}if(g<a.rU)a.rU
=g;if(g>a.rl)a.rl=g;c:{j=new IO;j.mZ=b;j.m0=c;if(!b.lR){d=0;while(true){if(d>=b.j0.length)break c;b.lR=(31*b.lR|0)+b.j0.charCodeAt(d)|0;d=d+1|0;}}}j.w7=b.lR;f=a.o_.data;j.sO=f[g];f[g]=j;return null;}b=new Dm;b.j1=1;b.j2=1;B(b);}finally{DP(a);}},
AJd=a=>{let b,c,d,e,f,g,h,i,j;b=(a.o_.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Q(IO,b);e=d.data;f=a.rl+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.rU)break;h=a.o_.data[f];while(h!==null){i=(h.mZ.cU()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.sO;h.sO=e[i];e[i]=h;h=j;}}a.rU=g;a.rl=c;a.o_=d;a.tE=e.length*a.wI|0;},
AXZ=()=>{Ww=new Kq;QW=new Kp;};
function M1(){JX.call(this);this.zF=null;}
let AFM=F();
let GJ=F(BG);
let JQ=null,Jw=null,LN=null,SF=null,ANg=null;
let AJn=()=>{let b,c,d,e;b=new GJ;b.kg=A(158);b.ka=0;JQ=b;c=new GJ;c.kg=A(159);c.ka=1;Jw=c;d=new GJ;d.kg=A(154);d.ka=2;LN=d;e=new GJ;e.kg=A(160);e.ka=3;SF=e;ANg=U(GJ,[b,c,d,e]);};
let DN=F();
let ACU=F(DN);
let AB6=F(DN);
let AHz=F(DN);
let AKL=F(DN);
let AF5=F(DN);
function Lx(){C.call(this);this.zt=null;}
let AG3=(a,b)=>{b.preventDefault();};
function Ly(){C.call(this);this.z6=null;}
let ASr=(a,b)=>{b.preventDefault();};
function Lw(){let a=this;C.call(a);a.vG=null;a.vx=null;a.vW=null;}
let AJ4=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bf;e.ks=1;e.j8=Q(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=T(g.name);i=E1(h,46,h.j0.length-1|0);b=i==(-1)?A(65):Cj(h,i+1|0,h.j0.length);j=b.j0.toLowerCase();if(j!==b.j0)b=TP(j);if(AAe(b))j=FE;else{if(b===A(161))k=1;else if(!(A(161) instanceof I))k=0;else{j=A(161);k=b.j0!==j.j0?0:1;}b:{if(!k){if(b===A(162))k=1;else if(!(A(162) instanceof I))k=0;else{j=A(162);k=b.j0!==j.j0?0:1;}if(!k){if(b===A(163))k
=1;else if(!(A(163) instanceof I))k=0;else{j=A(163);k=b.j0!==j.j0?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?Fn:!AGk(b)?Fu:FO;}l=new FileReader();b=new MK;b.sS=a;b.tV=j;b.vj=h;b.r9=e;b.vn=d;l.addEventListener("load",B9(b,"handleEvent"));if(j!==Fu&&j!==Fn){if(j===FE)l.readAsDataURL(g);else if(j===FO)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AMF=(a,b)=>{AJ4(a,b);};
function St(){let a=this;Dp.call(a);a.yI=null;a.yV=null;}
let U2=F(0);
function Kt(){C.call(this);this.zO=null;}
let ADc=a=>{let b,c,d,e,f,g;if(!Jr&&Dj.pt>=2){if(BU===null){b=new CJ;VG(b,AP8(32),0);BU=b;}b=new K;b.jZ=G(16);Ee(b,b.jY,A(156));Ee(b,b.jY,A(78));Ee(b,b.jY,A(157));c=new I;d=b.jZ;e=d.data;f=b.jY;g=e.length;if(f>=0&&f<=(g-0|0)){c.j0=L(d.data,0,f);BV(Bx(c));BV("\n");}else B(Ft());}Jr=1;};
let ABQ=F(DN);
function RF(){let a=this;C.call(a);a.k4=null;a.mc=0;a.tJ=null;a.vE=0;a.qp=0;a.oI=0;a.mA=0;a.wL=null;}
let Kz=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new KM;d.lV=Q(C,10);e=QS(a,b);f=0;g=0;if(!b.j0.length){h=Q(I,1);h.data[0]=A(65);return h;}a:{while(true){if(!Rc(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.n3;if(!j.oB){b=new BK;b.j1=1;b.j2=1;Bi(b);B(b);}if(0>=j.pV){b=new H;d=new K;Bp(d);d.jZ=G(16);J(d,d.jY,0,10);e=new I;h=d.jZ;k=h.data;f=d.jY;g=k.length;if(f>=0&&f<=(g-0|0)){e.j0=L(h.data,0,f);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}j=Cj(b,g,j.lW.data[0]);Ha(d,d.k9+1|0);h=d.lV.data;f=d.k9;d.k9=f+1|0;h[f]
=j;d.mJ=d.mJ+1|0;j=e.n3;if(!j.oB)break;if(0>=j.pV){b=new H;d=new K;Bp(d);d.jZ=G(16);J(d,d.jY,0,10);e=new I;h=d.jZ;k=h.data;f=d.jY;g=k.length;if(f>=0&&f<=(g-0|0)){e.j0=L(h.data,0,f);b.j1=1;b.j2=1;b.j3=e;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}g=j.lW.data[1];f=i;}b=new BK;b.j1=1;b.j2=1;Bi(b);B(b);}b:{b=Cj(b,g,b.j0.length);Ha(d,d.k9+1|0);h=d.lV.data;i=d.k9;d.k9=i+1|0;h[i]=b;d.mJ=d.mJ+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.k9)break;if(d.lV.data[f].j0.length)break b;UB(d,f);}b=new H;b.j1
=1;b.j2=1;B(b);}}if(f<0)f=0;return ADp(d,Q(I,f));},
IR=(b,c)=>{let d;if(b===null){b=new Dm;b.j1=1;b.j2=1;b.j3=A(164);B(b);}if(c&&(c|255)!=255){b=new Bm;b.j1=1;b.j2=1;b.j3=A(65);B(b);}O=1;d=new RF;d.tJ=Q(Dz,10);d.qp=(-1);d.oI=(-1);d.mA=(-1);return AEb(d,b,c);},
AEb=(a,b,c)=>{let d,e,f;a.k4=ADL(b,c);a.mc=c;b=Wp(a,(-1),c,null);a.wL=b;d=a.k4;if(!d.lJ&&!d.km&&d.kk==d.mk&&!(d.lb===null?0:1)?1:0){if(a.vE)b.e5();return a;}b=new Cm;e=d.lC;f=d.m3;b.j1=1;b.j2=1;b.kN=(-1);b.lH=A(65);b.lz=e;b.kN=f;B(b);},
ARP=(a,b)=>{let c,d,e,f,g,h;c=new CM;d=a.mc;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bn;g.ki=X(64);c.kl=g;g=new Bn;g.ki=X(2);c.kn=g;c.sF=e;c.ts=f;while(true){h=a.k4;d=h.lJ;if(!d&&!h.km&&h.kk==h.mk&&!(h.lb===null?0:1)?1:0)break;f=!d&&!h.km&&h.kk==h.mk&&!(h.lb===null?0:1)?1:0;if(!(!f&&!(h.lb===null?0:1)&&(d<0?0:1)?1:0))break;f=h.km;if(f&&f!=(-536870788)&&f!=(-536870871))break;BA(h);C6(c,h.ot);g=a.k4;if(g.lJ!=(-536870788))continue;BA(g);}g=L$(a,c);g.e9(b);return g;},
Wp=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new KM;e.lV=Q(C,10);f=a.mc;g=0;if(c!=f)a.mc=c;a:{switch(b){case -1073741784:h=new Sc;i=a.mA+1|0;a.mA=i;D2();c=O;O=c+1|0;d=new Bb;d.jZ=G(20);h.kj=(J(d,d.jY,c,10)).T();h.l2=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QB;i=a.mA+1|0;a.mA=i;D2();c=O;O=c+1|0;d=new Bb;d.jZ=G(20);h.kj=(J(d,d.jY,c,10)).T();h.l2=i;break a;case -33554392:h=new SW;i=a.mA+1|0;a.mA=i;D2();c=O;O=c+1|0;d=new Bb;d.jZ=G(20);h.kj=(J(d,d.jY,c,10)).T();h.l2=i;break a;default:i
=a.qp+1|0;a.qp=i;if(d!==null){h=new Dz;D2();c=O;O=c+1|0;d=new Bb;d.jZ=G(20);h.kj=(J(d,d.jY,c,10)).T();h.l2=i;}else{h=new GE;D2();j=O;O=j+1|0;d=new Bb;d.jZ=G(20);h.kj=(J(d,d.jY,j,10)).T();h.l2=0;g=1;}c=a.qp;if(c<=(-1))break a;if(c>=10)break a;a.tJ.data[c]=h;break a;}h=new Wi;D2();j=O;O=j+1|0;d=new Bb;d.jZ=G(20);h.kj=(J(d,d.jY,j,10)).T();h.l2=(-1);}while(true){k=a.k4;l=k.lJ;j=!l&&!k.km&&k.kk==k.mk&&!(k.lb===null?0:1)?1:0;j=!j&&!(k.lb===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.km==(-536870788))k=ARP(a,h);else if(l==(-536870788))
{k=new Fj;j=O;O=j+1|0;d=new Bb;d.jZ=G(20);k.kj=(J(d,d.jY,j,10)).T();k.j_=h;k.kV=1;k.lo=1;k.kV=0;BA(a.k4);}else{k=P9(a,h);d=a.k4;if(d.lJ==(-536870788))BA(d);}if(k!==null){Ha(e,e.k9+1|0);m=e.lV.data;l=e.k9;e.k9=l+1|0;m[l]=k;e.mJ=e.mJ+1|0;}k=a.k4;j=k.lJ;if(!j&&!k.km&&k.kk==k.mk&&!(k.lb===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.ot==(-536870788)){k=new Fj;c=O;O=c+1|0;d=new Bb;d.jZ=G(20);k.kj=(J(d,d.jY,c,10)).T();k.j_=h;k.kV=1;k.lo=1;k.kV=0;Ha(e,e.k9+1|0);m=e.lV.data;j=e.k9;e.k9=j+1|0;m[j]=k;e.mJ=e.mJ+
1|0;}if(a.mc!=f&&!g){a.mc=f;k=a.k4;k.lu=f;k.km=k.lJ;k.nZ=k.lb;j=k.m3;k.kk=j+1|0;k.rd=j;BA(k);}switch(b){case -1073741784:break;case -536870872:d=new Om;b=O;O=b+1|0;k=new Bb;Bp(k);k.jZ=G(20);d.kj=(J(k,k.jY,b,10)).T();d.lM=e;d.mC=h;d.lt=h.l2;return d;case -268435416:d=new Vi;b=O;O=b+1|0;k=new Bb;Bp(k);k.jZ=G(20);d.kj=(J(k,k.jY,b,10)).T();d.lM=e;d.mC=h;d.lt=h.l2;return d;case -134217688:d=new RK;b=O;O=b+1|0;k=new Bb;Bp(k);k.jZ=G(20);d.kj=(J(k,k.jY,b,10)).T();d.lM=e;d.mC=h;d.lt=h.l2;return d;case -67108824:k=new Th;b
=O;O=b+1|0;d=new Bb;Bp(d);d.jZ=G(20);k.kj=(J(d,d.jY,b,10)).T();k.lM=e;k.mC=h;k.lt=h.l2;return k;case -33554392:d=new Eq;b=O;O=b+1|0;k=new Bb;k.jZ=G(20);d.kj=(J(k,k.jY,b,10)).T();d.lM=e;d.mC=h;d.lt=h.l2;return d;default:c=e.k9;switch(c){case 0:d=new Fj;b=O;O=b+1|0;e=new Bb;e.jZ=G(20);d.kj=(J(e,e.jY,b,10)).T();d.j_=h;d.kV=1;d.lo=1;d.kV=0;return d;case 1:d=new Gt;if(0>=c){d=new H;d.j1=1;d.j2=1;B(d);}e=e.lV.data[0];b=O;O=b+1|0;k=new Bb;k.jZ=G(20);d.kj=(J(k,k.jY,b,10)).T();d.mW=e;d.mC=h;d.lt=h.l2;return d;default:}d
=new Cq;b=O;O=b+1|0;k=new Bb;k.jZ=G(20);d.kj=(J(k,k.jY,b,10)).T();d.lM=e;d.mC=h;d.lt=h.l2;return d;}k=new J4;j=O;O=j+1|0;d=new Bb;d.jZ=G(20);k.kj=(J(d,d.jY,j,10)).T();k.lM=e;k.mC=h;k.lt=h.l2;return k;},
AN$=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Pp;b.jZ=G(16);while(true){c=a.k4;d=c.lJ;if(!d&&!c.km&&c.kk==c.mk&&!(c.lb===null?0:1)?1:0)break;e=!d&&!c.km&&c.kk==c.mk&&!(c.lb===null?0:1)?1:0;if(!(!e&&!(c.lb===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.nZ;d=f===null?0:1;if(!(!d&&!c.km)){d=f===null?0:1;if(!(!d&&(c.km<0?0:1))){g=c.km;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}BA(c);e=c.ot;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.jY;Bk(b,e,e+1|0);b.jZ.data[e]=d;}else{h=(E$(e)).data;d=0;e=h.length;g=b.jY;Bk(b,g,g+e|0);i=e+d|0;while(d<i){j=b.jZ.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.mc;if(!((e&2)!=2?0:1))return AGJ(b);if(!((e&64)!=64?0:1)){c=new OQ;d=O;O=d+1|0;f=new Bb;f.jZ=G(20);c.kj=(J(f,f.jY,d,10)).T();c.kV=1;f=new I;h=b.jZ;j=h.data;e=b.jY;g=j.length;if(e>=0&&e<=(g-0|0)){f.j0=L(h.data,0,e);c.qa=f;c.kV=b.jY;return c;}b=new H;b.j1=1;b.j2=1;B(b);}c=new Og;d=O;O=d+1|0;f=new Bb;f.jZ=G(20);c.kj=(J(f,f.jY,d,10)).T();c.kV
=1;f=new K;f.jZ=G(16);e=0;while(true){d=BT(e,b.jY);if(d>=0){b=new I;h=f.jZ;j=h.data;g=f.jY;d=j.length;if(g>=0&&g<=(d-0|0)){b.j0=L(h.data,0,g);c.rm=b;c.kV=f.jY;return c;}b=new H;b.j1=1;b.j2=1;B(b);}if(e<0)break;if(d>=0)break;d=b.jZ.data[e];if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}d=CC(B0,d)&65535;if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}i=CC(B1,d)&65535;g=f.jY;Bk(f,g,g+1|0);f.jZ.data[g]=i;e=e+1|0;}b=new H;b.j1=1;b.j2=1;B(b);},
AOq=a=>{let b,c,d,e,f,g,h,i,j;b=X(4);c=(-1);d=(-1);e=a.k4;f=e.lJ;if(!(!f&&!e.km&&e.kk==e.mk&&!(e.lb===null?0:1)?1:0)){g=!f&&!e.km&&e.kk==e.mk&&!(e.lb===null?0:1)?1:0;if(!g&&!(e.lb===null?0:1)&&(f<0?0:1)?1:0){h=b.data;BA(e);c=e.ot;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.k4;i=e.lJ;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;BA(e);e=a.k4;i=e.lJ;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;BA(e);e=new IH;c=O;O=c+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,c,10)).T();e.oj=h;e.rE=3;return e;}e=new IH;c
=O;O=c+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,c,10)).T();e.oj=h;e.rE=2;return e;}i=a.mc;if(!((i&2)!=2?0:1)){e=new Ec;i=b[0];c=O;O=c+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,c,10)).T();e.kV=1;e.mv=i;return e;}if(!((i&64)!=64?0:1)){e=new Ke;i=b[0];c=O;O=c+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,c,10)).T();e.kV=1;e.s7=i;e.tw=Gc(i);return e;}e=new NE;i=b[0];c=O;O=c+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,c,10)).T();e.kV=1;if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}i=CC(B0,i)&65535;if
(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}e.rY=CC(B1,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.k4;g=e.lJ;if(!g&&!e.km&&e.kk==e.mk&&!(e.lb===null?0:1)?1:0)break;i=!g&&!e.km&&e.kk==e.mk&&!(e.lb===null?0:1)?1:0;if(!(!i&&!(e.lb===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;BA(e);h[c]=e.ot;c=i;}if(c==1){i=h[0];if(!(Z2.es(i)==AOJ?0:1))return Wf(a,h[0]);}d=a.mc;if(!((d&2)!=2?0:1)){e=new Fx;i=O;O=i+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,i,10)).T();e.pm=1;e.o5=b;e.o0=c;return e;}if
((d&64)!=64?0:1){e=new V_;i=O;O=i+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,i,10)).T();e.pm=1;e.o5=b;e.o0=c;return e;}e=new TG;i=O;O=i+1|0;j=new Bb;j.jZ=G(20);e.kj=(J(j,j.jY,i,10)).T();e.pm=1;e.o5=b;e.o0=c;return e;},
P9=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.k4;d=c.lJ;e=!d&&!c.km&&c.kk==c.mk&&!(c.lb===null?0:1)?1:0;e=!e&&!(c.lb===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.nZ===null?0:1)&&(c.km<0?0:1)){if(!((a.mc&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AN$(a):NJ(a,b,V9(a,b));}else{f=AOq(a);g=a.k4;e=g.lJ;if(!(!e&&!g.km&&g.kk==g.mk&&!(g.lb===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof GE))&&e!=(-536870788)){h=!e&&!g.km&&g.kk==g.mk&&!(g.lb===null?0:1)?1:0;if(!(!h&&!(g.lb===null?0:1)&&(e<0?0:1)?1:0))f
=NJ(a,b,f);}}}else if(d!=(-536870871))f=NJ(a,b,V9(a,b));else{if(b instanceof GE){b=new Cm;g=c.lC;h=c.m3;b.j1=1;b.j2=1;b.kN=(-1);b.lH=A(65);b.lz=g;b.kN=h;B(b);}f=new Fj;e=O;O=e+1|0;c=new Bb;c.jZ=G(20);f.kj=(J(c,c.jY,e,10)).T();f.j_=b;f.kV=1;f.lo=1;f.kV=0;}c=a.k4;d=c.lJ;e=!d&&!c.km&&c.kk==c.mk&&!(c.lb===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof GE))&&d!=(-536870788)){g=P9(a,b);if(f instanceof DI&&!(f instanceof Fs)&&!(f instanceof DK)&&!(f instanceof Fq)){b=f;if(!g.fn(b.kK)){f=new Vv;c=b.kK;i=b.j_;j
=b.lo;e=O;O=e+1|0;b=new Bb;b.jZ=G(20);f.kj=(J(b,b.jY,e,10)).T();f.j_=i;f.kK=c;f.lo=j;f.k_=c;c.e9(f);}}if((g.fo()&65535)!=43)f.e9(g);else f.e9(g.kK);}else{if(f===null)return null;f.e9(b);}if((f.fo()&65535)!=43)return f;return f.kK;},
NJ=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.k4;e=d.lJ;if(c!==null&&!(c instanceof CD)){switch(e){case -2147483606:BA(d);d=new WG;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);d.kj=(J(g,g.jY,f,10)).T();d.j_=b;d.kK=c;d.lo=e;D2();c.e9(H$);return d;case -2147483605:BA(d);d=new Qw;h=O;O=h+1|0;g=new Bb;g.jZ=G(20);d.kj=(J(g,g.jY,h,10)).T();d.j_=b;d.kK=c;d.lo=(-2147483606);D2();c.e9(H$);return d;case -2147483585:BA(d);d=new Qg;h=O;O=h+1|0;g=new Bb;Bp(g);g.jZ=G(20);d.kj=(J(g,g.jY,h,10)).T();d.j_=b;d.kK=c;d.lo=(-536870849);D2();c.e9(H$);return d;case -2147483525:g
=new OM;i=d.lb;BA(d);d=i;f=a.oI+1|0;a.oI=f;j=O;O=j+1|0;i=new Bb;Bp(i);i.jZ=G(20);g.kj=(J(i,i.jY,j,10)).T();g.j_=b;g.kK=c;g.lo=(-536870849);g.nU=d;g.na=f;D2();c.e9(H$);return g;case -1073741782:case -1073741781:BA(d);d=new R4;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);d.kj=(J(g,g.jY,f,10)).T();d.j_=b;d.kK=c;d.lo=e;c.e9(d);return d;case -1073741761:BA(d);d=new Rd;h=O;O=h+1|0;g=new Bb;Bp(g);g.jZ=G(20);d.kj=(J(g,g.jY,h,10)).T();d.j_=b;d.kK=c;d.lo=(-536870849);c.e9(b);return d;case -1073741701:g=new Uk;i=d.lb;BA(d);d=i;h=a.oI
+1|0;a.oI=h;j=O;O=j+1|0;i=new Bb;Bp(i);i.jZ=G(20);g.kj=(J(i,i.jY,j,10)).T();g.j_=b;g.kK=c;g.lo=(-536870849);g.nU=d;g.na=h;c.e9(g);return g;case -536870870:case -536870869:BA(d);if(c.fo()!=(-2147483602)){d=new DK;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);d.kj=(J(g,g.jY,f,10)).T();d.j_=b;d.kK=c;d.lo=e;}else{h=a.mc;if((h&32)!=32?0:1){d=new R5;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);d.kj=(J(g,g.jY,f,10)).T();d.j_=b;d.kK=c;d.lo=e;}else{d=new Pz;if(!(h&1)){g=Gd;if(g===null){g=new JE;Gd=g;}}else{g=Gv;if(g===null){g=new JD;Gv=g;}}f=
O;O=f+1|0;i=new Bb;i.jZ=G(20);d.kj=(J(i,i.jY,f,10)).T();d.j_=b;d.kK=c;d.lo=e;d.sp=g;}}c.e9(d);return d;case -536870849:BA(d);d=new G0;h=O;O=h+1|0;g=new Bb;g.jZ=G(20);d.kj=(J(g,g.jY,h,10)).T();d.j_=b;d.kK=c;d.lo=(-536870849);c.e9(b);return d;case -536870789:g=new Gh;i=d.lb;BA(d);d=i;h=a.oI+1|0;a.oI=h;j=O;O=j+1|0;i=new Bb;i.jZ=G(20);g.kj=(J(i,i.jY,j,10)).T();g.j_=b;g.kK=c;g.lo=(-536870849);g.nU=d;g.na=h;c.e9(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:BA(d);d
=new WI;f=O;O=f+1|0;c=new Bb;c.jZ=G(20);d.kj=(J(c,c.jY,f,10)).T();d.j_=b;d.kK=i;d.lo=e;d.k_=i;i.j_=d;return d;case -2147483585:BA(d);c=new Vq;h=O;O=h+1|0;d=new Bb;Bp(d);d.jZ=G(20);c.kj=(J(d,d.jY,h,10)).T();c.j_=b;c.kK=i;c.lo=(-2147483585);c.k_=i;return c;case -2147483525:c=new P8;g=d.lb;BA(d);d=g;h=O;O=h+1|0;g=new Bb;Bp(g);g.jZ=G(20);c.kj=(J(g,g.jY,h,10)).T();c.j_=b;c.kK=i;c.lo=(-2147483525);c.k_=i;c.pw=d;return c;case -1073741782:case -1073741781:BA(d);d=new Q7;f=O;O=f+1|0;c=new Bb;c.jZ=G(20);d.kj=(J(c,c.jY,
f,10)).T();d.j_=b;d.kK=i;d.lo=e;d.k_=i;i.j_=d;return d;case -1073741761:BA(d);c=new TJ;h=O;O=h+1|0;d=new Bb;Bp(d);d.jZ=G(20);c.kj=(J(d,d.jY,h,10)).T();c.j_=b;c.kK=i;c.lo=(-1073741761);c.k_=i;return c;case -1073741701:c=new RL;g=d.lb;BA(d);d=g;h=O;O=h+1|0;g=new Bb;Bp(g);g.jZ=G(20);c.kj=(J(g,g.jY,h,10)).T();c.j_=b;c.kK=i;c.lo=(-1073741701);c.k_=i;c.pw=d;return c;case -536870870:case -536870869:BA(d);d=new DI;f=O;O=f+1|0;c=new Bb;c.jZ=G(20);d.kj=(J(c,c.jY,f,10)).T();d.j_=b;d.kK=i;d.lo=e;d.k_=i;i.j_=d;return d;case -536870849:BA(d);c
=new Fq;h=O;O=h+1|0;d=new Bb;d.jZ=G(20);c.kj=(J(d,d.jY,h,10)).T();c.j_=b;c.kK=i;c.lo=(-536870849);c.k_=i;return c;case -536870789:c=new Fs;g=d.lb;BA(d);d=g;h=O;O=h+1|0;g=new Bb;g.jZ=G(20);c.kj=(J(g,g.jY,h,10)).T();c.j_=b;c.kK=i;c.lo=(-536870789);c.k_=i;c.pw=d;return c;default:}return c;},
V9=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof GE;while(true){a:{e=a.k4;f=e.lJ;if((f&(-2147418113))==(-2147483608)){BA(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.mc=g;else{if(f!=(-1073741784))g=a.mc;c=Wp(a,f,g,b);e=a.k4;if(e.lJ!=(-536870871)){b=new Cm;h=e.lC;i=e.m3;b.j1=1;b.j2=1;b.kN=(-1);b.lH=A(65);b.lz=h;b.kN=i;B(b);}BA(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.qp<j){c=new Cm;h=e.lC;i=e.m3;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=h;c.kN=i;B(c);}BA(e);g=a.mA+1|0;a.mA=g;i=a.mc;if(!((i&2)!=2?0:1)){c=new Vy;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.qW=j;c.pC=g;}else if(!((i&64)!=64?0:1)){c=new GP;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.qW=j;c.pC=g;}else{c=new RD;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.qW=j;c.pC=g;}a.tJ.data[j].tH=1;a.vE=1;break a;case -2147483583:break;case -2147483582:BA(e);c
=new Le;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.u2=0;break a;case -2147483577:BA(e);c=new Pt;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();break a;case -2147483558:BA(e);c=new NC;j=a.mA+1|0;a.mA=j;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.p7=j;break a;case -2147483550:BA(e);c=new Le;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.u2=1;break a;case -2147483526:BA(e);c=new VE;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();break a;case -536870876:break b;case -536870866:BA(e);i
=a.mc;if((i&32)!=32?0:1){c=new VA;i=O;O=i+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,i,10)).T();break a;}c=new P2;if(!(i&1)){h=Gd;if(h===null){h=new JE;Gd=h;}}else{h=Gv;if(h===null){h=new JD;Gv=h;}}k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.ue=h;break a;case -536870821:BA(e);i=0;c=a.k4;if(c.lJ==(-536870818)){i=1;BA(c);}c=L$(a,Hc(a,i));c.e9(b);h=a.k4;k=h.lJ;if(k!=(-536870819)){b=new Cm;e=h.lC;i=h.m3;b.j1=1;b.j2=1;b.kN=(-1);b.lH=A(65);b.lz=e;b.kN=i;B(b);}h.n2=1;h.km=k;h.nZ=h.lb;h.kk=h.rd;h.rd=h.m3;BA(h);BA(a.k4);break a;case -536870818:break c;case 0:c
=e.lb;h=c;if(h!==null)c=L$(a,h);else{if(!f&&!e.km&&e.kk==e.mk&&!(c===null?0:1)?1:0){c=new Fj;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.j_=b;c.kV=1;c.lo=1;c.kV=0;break a;}c=new Ec;j=f&65535;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.kV=1;c.mv=j;}BA(a.k4);break a;default:if(f>=0&&!(e.lb===null?0:1)){c=Wf(a,f);BA(a.k4);break a;}if(f==(-536870788)){c=new Fj;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.j_=b;c.kV=1;c.lo=1;c.kV=0;break a;}if(f!=(-536870871)){b=new Cm;c
=e.lb;if(c===null?0:1)c=c.T();else{k=f&65535;c=new I;l=G(1);m=l.data;m[0]=k;c.j0=L(l.data,0,m.length);}e=a.k4;h=e.lC;i=e.m3;b.j1=1;b.j2=1;b.kN=(-1);b.lH=c;b.lz=h;b.kN=i;B(b);}if(d){b=new Cm;h=e.lC;i=e.m3;b.j1=1;b.j2=1;b.kN=(-1);b.lH=A(65);b.lz=h;b.kN=i;B(b);}c=new Fj;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.j_=b;c.kV=1;c.lo=1;c.kV=0;break a;}BA(e);c=new LR;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();break a;}BA(e);a.mA=a.mA+1|0;i=a.mc;if(!((i&8)!=8?0:1)){c=new LR;k=O;O=k+1|0;e
=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();break a;}c=new OU;if(!(i&1)){h=Gd;if(h===null){h=new JE;Gd=h;}}else{h=Gv;if(h===null){h=new JD;Gv=h;}}k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.wF=h;break a;}BA(e);j=a.mA+1|0;a.mA=j;i=a.mc;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new SZ;i=O;O=i+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,i,10)).T();c.sH=j;}else{c=new Oj;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.qE=j;}}else if((i&1)!=1?0:1){c=new Vr;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,
e.jY,k,10)).T();c.sz=j;}else{c=new NC;k=O;O=k+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,k,10)).T();c.p7=j;}}}if(f!=(-16777176))break;}return c;},
Hc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new CM;d=a.mc;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bn;f.ki=X(64);c.kl=f;f=new Bn;f.ki=X(2);c.kn=f;c.sF=e;c.ts=d;EQ(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.k4;b=k.lJ;if(!b&&!k.km&&k.kk==k.mk&&!(k.lb===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)C6(c,g);f=a.k4;BA(f);g=f.ot;f=a.k4;if(f.lJ!=(-536870874)){g=38;break d;}if(f.km==(-536870821)){BA(f);h=1;g=(-1);break d;}BA(f);if(j){c=Hc(a,0);break d;}if(a.k4.lJ
==(-536870819))break d;VK(c,Hc(a,0));break d;case -536870867:if(!j){b=k.km;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){BA(k);k=a.k4;d=k.lJ;if(k.lb===null?0:1)break c;if(d<0){b=k.km;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AFN(d))break e;d=d&65535;break e;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){break b;}else{throw $$e;}}}try{BX(c,g,d);}catch($$e){$$je=Y($$e);if($$je instanceof Bz){break b;}else{throw $$e;}}BA(a.k4);g=(-1);break d;}}if(g>=0)C6(c,g);g=45;BA(a.k4);break d;case -536870821:if
(g>=0){C6(c,g);g=(-1);}BA(a.k4);e=0;f=a.k4;if(f.lJ==(-536870818)){BA(f);e=1;}if(!h)Xe(c,Hc(a,e));else VK(c,Hc(a,e));h=0;BA(a.k4);break d;case -536870819:break;case -536870818:if(g>=0)C6(c,g);g=94;BA(a.k4);break d;case 0:if(g>=0)C6(c,g);f=a.k4.lb;if(f===null)g=0;else{ATF(c,f);g=(-1);}BA(a.k4);break d;default:if(g>=0)C6(c,g);f=a.k4;BA(f);g=f.ot;break d;}if(g>=0)C6(c,g);g=93;BA(a.k4);}j=0;}c=new Cm;l=k.lC;g=k.m3;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=l;c.kN=g;B(c);}c=new Cm;k=a.k4;l=k.lC;g=k.m3;c.j1=1;c.j2=1;c.kN
=(-1);c.lH=A(65);c.lz=l;c.kN=g;B(c);}if(!i){if(g>=0)C6(c,g);return c;}c=new Cm;l=k.lC;b=k.m3-1|0;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=l;c.kN=b;B(c);},
Wf=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.mc;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Ke;b=b&65535;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.kV=1;e.s7=b;e.tw=Gc(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Oe;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.kV=1;e.kV=2;if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}b=CC(B0,b);if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null
?T(BN.value):null)));}e.t_=CC(B1,b);return e;}if(b<=57343&&b>=56320?1:0){e=new HO;b=b&65535;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.oJ=b;return e;}if(b<=56319&&b>=55296?1:0){e=new HU;b=b&65535;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.oq=b;return e;}e=new NE;b=b&65535;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.kV=1;if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}b=CC(B0,b)&65535;if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value
!==null?T(BN.value):null)));}e.rY=CC(B1,b)&65535;return e;}}if(c){e=new Ew;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.kV=1;e.kV=2;e.pQ=b;h=(E$(b)).data;e.pG=h[0];e.pd=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new HO;b=b&65535;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.oJ=b;return e;}if(b<=56319&&b>=55296?1:0){e=new HU;b=b&65535;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.oq=b;return e;}e=new Ec;b=b&65535;f=O;O=f+1|0;g=new Bb;g.jZ=G(20);e.kj=(J(g,g.jY,f,10)).T();e.kV
=1;e.mv=b;return e;},
L$=(a,b)=>{let c,d,e,f,g,h;if(!AJw(b)){if(b.lg){if(!b.fx()){c=new DT;d=O;O=d+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,d,10)).T();c.mE=b.fy();c.qc=b.kI;return c;}c=new Kh;d=O;O=d+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,d,10)).T();c.mE=b.fy();c.qc=b.kI;return c;}if(b.fx()){c=new KU;d=O;O=d+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,d,10)).T();c.kV=1;c.st=b.fy();c.t5=b.kI;return c;}c=new Ef;d=O;O=d+1|0;e=new Bb;e.jZ=G(20);c.kj=(J(e,e.jY,d,10)).T();c.kV=1;c.ng=b.fy();c.ux=b.kI;return c;}c=Zh(b);e=new Os;d=O;O=d+1|0;f=
new Bb;f.jZ=G(20);e.kj=(J(f,f.jY,d,10)).T();e.sq=c;e.tj=c.kI;if(b.lg){if(!b.fx()){c=new Hr;f=new DT;b=IF(b);d=O;O=d+1|0;g=new Bb;g.jZ=G(20);f.kj=(J(g,g.jY,d,10)).T();f.mE=b;f.qc=b.kI;d=O;O=d+1|0;b=new Bb;b.jZ=G(20);c.kj=(J(b,b.jY,d,10)).T();c.pz=f;c.pp=e;return c;}c=new Hr;f=new Kh;g=IF(b);h=O;O=h+1|0;b=new Bb;b.jZ=G(20);f.kj=(J(b,b.jY,h,10)).T();f.mE=g;f.qc=g.kI;d=O;O=d+1|0;b=new Bb;b.jZ=G(20);c.kj=(J(b,b.jY,d,10)).T();c.pz=f;c.pp=e;return c;}if(b.fx()){c=new Hr;f=new KU;b=IF(b);d=O;O=d+1|0;g=new Bb;g.jZ=G(20);f.kj
=(J(g,g.jY,d,10)).T();f.kV=1;f.st=b;f.t5=b.kI;d=O;O=d+1|0;b=new Bb;b.jZ=G(20);c.kj=(J(b,b.jY,d,10)).T();c.pz=f;c.pp=e;return c;}c=new Hr;f=new Ef;b=IF(b);d=O;O=d+1|0;g=new Bb;g.jZ=G(20);f.kj=(J(g,g.jY,d,10)).T();f.kV=1;f.ng=b;f.ux=b.kI;d=O;O=d+1|0;b=new Bb;b.jZ=G(20);c.kj=(J(b,b.jY,d,10)).T();c.pz=f;c.pp=e;return c;},
Gc=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let Ny=F(0);
function SL(){let a=this;C.call(a);a.yM=null;a.xA=null;a.sy=null;a.n3=null;a.sn=0;a.tU=0;}
let On=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.sy.j0.length;if(b>=0&&b<=c){d=a.n3;d.oB=0;d.rH=2;e=d.lW.data;f=0;g=e.length;if(f>g){d=new Bm;S(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.lp.data;f=0;g=e.length;if(f>g){d=new Bm;S(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.n_=d.mS;d.rH=1;d.n_=b;c=d.rK;if(c<0)c=b;d.rK=c;b=a.xA.fB(b,a.sy,d);if(b==(-1))a.n3.mH=1;if(b>=0){d=a.n3;b=d.oB;if(b){e=d.lW.data;if(e[0]==(-1)){f=d.n_;e[0]=f;e[1]=f;}if(!b){d=new BK;d.j1=1;d.j2=1;Bi(d);B(d);}if(0<d.pV){d.rK=e[1];return 1;}d=new H;i
=new K;Bp(i);i.jZ=G(16);J(i,i.jY,0,10);j=new I;e=i.jZ;k=e.data;c=i.jY;f=k.length;if(c>=0&&c<=(f-0|0)){j.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}}a.n3.n_=(-1);return 0;}d=new H;i=new K;i.jZ=G(16);J(i,i.jY,b,10);j=new I;e=i.jZ;k=e.data;c=i.jY;f=k.length;if(c>=0&&c<=(f-0|0)){j.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=j;B(d);}d=new H;d.j1=1;d.j2=1;B(d);},
Rc=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.sy.j0.length;c=a.n3;if(!c.sE)b=a.tU;if(c.n_>=0&&c.rH==1){d=c.oB;if(!d){c=new BK;c.j1=1;c.j2=1;B(c);}e=BT(0,c.pV);if(e>=0){c=new H;f=new K;f.jZ=G(16);J(f,f.jY,0,10);g=new I;h=f.jZ;i=h.data;b=f.jY;j=i.length;if(b>=0&&b<=(j-0|0)){g.j0=L(h.data,0,b);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}h=c.lW.data;k=h[1];c.n_=k;if(!d){c=new BK;c.j1=1;c.j2=1;B(c);}if(e>=0){c=new H;f=new K;f.jZ=G(16);J(f,f.jY,0,10);g=new I;h=f.jZ;i=h.data;b=f.jY;j=i.length;if(b>=0&&b<=(j-0|0))
{g.j0=L(h.data,0,b);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}j=h[1];if(!d){c=new BK;c.j1=1;c.j2=1;B(c);}if(e<0){if(j==h[0])c.n_=k+1|0;l=c.n_;return l<=b&&On(a,l)?1:0;}c=new H;f=new K;f.jZ=G(16);J(f,f.jY,0,10);g=new I;h=f.jZ;i=h.data;b=f.jY;j=i.length;if(b>=0&&b<=(j-0|0)){g.j0=L(h.data,0,b);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}return On(a,a.sn);},
WX=(a,b,c)=>{let d,e;a.sn=(-1);a.tU=(-1);a.yM=b;a.xA=b.wL;a.sy=c;a.sn=0;d=c.j0.length;a.tU=d;e=AQg(c,a.sn,d,b.qp,b.oI+1|0,b.mA+1|0);a.n3=e;e.pj=1;},
QS=(a,b)=>{let c=new SL();WX(c,a,b);return c;};
let AAi=F();
let Cp=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=Py(AOU(b,c));}catch($$e){$$je=Y($$e);if($$je instanceof KO){d=$$je;break a;}else if($$je instanceof Hs){d=$$je;break b;}else{throw $$e;}}return d;}e=new B3;if(b.j7===null)b.j7=T(b.kb.$meta.name);f=b.j7;b=new K;b.jZ=G(16);D(b,b.jY,A(165));g=b.jY;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.jZ;i=c.data;j=b.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(c.data,0,j);e.j1=1;e.j2=1;e.j3=h;e.li=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}e=new B3;if(b.j7
===null)b.j7=T(b.kb.$meta.name);f=b.j7;b=new K;b.jZ=G(16);D(b,b.jY,A(166));g=b.jY;if(f===null)f=A(2);D(b,g,f);D(b,b.jY,A(167));h=new I;c=b.jZ;i=c.data;j=b.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(c.data,0,j);e.j1=1;e.j2=1;e.j3=h;e.li=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}c=(ARZ(b)).data;if(c.length<=0)b=null;else{b=new KX;b.ls=c[0];}return b;},
Co=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=Py(AOW(b,c));}catch($$e){$$je=Y($$e);if($$je instanceof KO){d=$$je;break a;}else if($$je instanceof Hs){d=$$je;e=new B3;if(b.j7===null)b.j7=T(b.kb.$meta.name);f=b.j7;b=new K;b.jZ=G(16);D(b,b.jY,A(165));g=b.jY;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.jZ;i=c.data;j=b.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(c.data,0,j);e.j1=1;e.j2=1;e.j3=h;e.li=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);}else{throw $$e;}}return d;}e=new B3;if(b.j7===null)b.j7=T(b.kb.$meta.name);f=b.j7;b=new K;b.jZ
=G(16);D(b,b.jY,A(168));g=b.jY;if(f===null)f=A(2);D(b,g,f);h=new I;c=b.jZ;i=c.data;k=b.jY;j=i.length;if(k>=0&&k<=(j-0|0)){h.j0=L(c.data,0,k);e.j1=1;e.j2=1;e.j3=h;e.li=d;B(e);}b=new H;b.j1=1;b.j2=1;B(b);};
function KX(){C.call(this);this.ls=null;}
let AQR=(a,b)=>{a.ls=b;},
Py=a=>{let b=new KX();AQR(b,a);return b;},
Cr=(a,b)=>{return;},
CG=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=Q(C,0);a:{b:{c:{try{c=AO9(a.ls,b);}catch($$e){$$je=Y($$e);if($$je instanceof Bm){c=$$je;break c;}else if($$je instanceof MI){c=$$je;break a;}else if($$je instanceof Kd){c=$$je;break b;}else if($$je instanceof OT){c=$$je;d=new B3;e=a.ls.lq;if(e.j7===null)e.j7=T(e.kb.$meta.name);e=e.j7;f=new K;f.jZ=G(16);D(f,f.jY,A(169));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.li
=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);}else{throw $$e;}}return c;}d=new B3;e=a.ls.lq;if(e.j7===null)e.j7=T(e.kb.$meta.name);e=e.j7;f=new K;f.jZ=G(16);D(f,f.jY,A(170));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.li=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);}d=new B3;e=a.ls.lq;if(e.j7===null)e.j7=T(e.kb.$meta.name);e=e.j7;f=new K;f.jZ=G(16);D(f,f.jY,A(171));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k
=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.li=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);}d=new B3;e=a.ls.lq;if(e.j7===null)e.j7=T(e.kb.$meta.name);e=e.j7;f=new K;f.jZ=G(16);D(f,f.jY,A(171));g=f.jY;if(e===null)e=A(2);D(f,g,e);h=new I;b=f.jZ;i=b.data;j=f.jY;k=i.length;if(j>=0&&j<=(k-0|0)){h.j0=L(b.data,0,j);d.j1=1;d.j2=1;d.j3=h;d.li=c;B(d);}c=new H;c.j1=1;c.j2=1;B(c);};
let B3=F(Bz);
function EM(){C.call(this);this.kG=null;}
let AMG=null,M3=null,Hl=null,In=null,Qq=null,VX=null,PX=null;
let BF=()=>{BF=BQ(EM);ABl();};
let Ch=b=>{let c,d,e,f,g,h,i;BF();if(b===null)return null;c=b;d=T(typeof c);if(d===A(172))e=1;else if(!(A(172) instanceof I))e=0;else{f=A(172);e=d.j0!==f.j0?0:1;}a:{if(!e){if(d===A(173))e=1;else if(!(A(173) instanceof I))e=0;else{f=A(173);e=d.j0!==f.j0?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Bt]===true)return b;b=M3;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EM;h.kG=c;M3.set(c,new WeakRef(h));return h;}if(d===A(174))e=1;else if
(!(A(174) instanceof I))e=0;else{b=A(174);e=d.j0!==b.j0?0:1;}if(e){f=Hl.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EM;h.kG=c;i=h;Hl.set(c,new WeakRef(i));O5(VX,i,c);return h;}if(d===A(175))e=1;else if(!(A(175) instanceof I))e=0;else{b=A(175);e=d.j0!==b.j0?0:1;}if(e){f=In.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EM;h.kG=c;i=h;In.set(c,new WeakRef(i));O5(PX,i,c);return h;}if(d===A(176))e=1;else if
(!(A(176) instanceof I))e=0;else{b=A(176);e=d.j0!==b.j0?0:1;}if(e){f=Qq;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new EM;h.kG=c;Qq=new WeakRef(h);return h;}}b=new EM;b.kG=c;return b;},
ABl=()=>{AMG=new WeakMap();M3=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Hl=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();In=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();VX=Hl===null?null:new FinalizationRegistry(B9(new Mq,"accept"));PX=In===null?null:new FinalizationRegistry(B9(new Mp,"accept"));},
O5=(b,c,d)=>{return b.register(c,d);};
let Rk=F(0);
let Kq=F();
let H0=F(0);
let Kp=F();
function Ut(){let a=this;C.call(a);a.lW=null;a.lp=null;a.nz=null;a.qd=null;a.pV=0;a.oB=0;a.mS=0;a.kP=0;a.n_=0;a.sE=0;a.pj=0;a.mH=0;a.zU=0;a.rK=0;a.rH=0;}
let AKA=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.rK=(-1);h=e+1|0;a.pV=h;i=X(h*2|0);a.lW=i;j=X(g);k=j.data;a.lp=j;e=0;g=k.length;l=BT(e,g);if(l>0){b=new Bm;b.j1=1;b.j2=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.nz=X(f);i=i.data;h=0;m=i.length;e=BT(h,m);if(e>0){b=new Bm;b.j1=1;b.j2=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.oB=0;a.rH=2;f=0;if(e>0){b=new Bm;b.j1=1;b.j2=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bm;b.j1=1;b.j2=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.qd=b;if(c
>=0){a.mS=c;a.kP=d;}a.n_=a.mS;},
AQg=(a,b,c,d,e,f)=>{let g=new Ut();AKA(g,a,b,c,d,e,f);return g;};
let CA=F(Bm);
let KO=F(Bw);
let Ez=F(Bz);
let Hs=F(Ez);
let Dm=F(Bw);
function Cd(){let a=this;C.call(a);a.j_=null;a.mw=0;a.kj=null;a.lo=0;}
let O=0;
let ACt=(a,b,c,d)=>{let e;e=d.kP;while(true){if(b>e)return (-1);if(a.fJ(b,c,d)>=0)break;b=b+1|0;}return b;},
AFm=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fJ(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AUQ=(a,b)=>{a.lo=b;},
AAx=a=>{return a.lo;},
AWt=a=>{let b,c,d,e,f,g,h,i;b=a.kj;c=a.fK();d=new K;d.jZ=G(16);e=d.jY;Bk(d,e,e+1|0);d.jZ.data[e]=60;f=d.jY;if(b===null)b=A(2);D(d,f,b);e=d.jY;Bk(d,e,e+1|0);d.jZ.data[e]=58;f=d.jY;if(c===null)c=A(2);D(d,f,c);e=d.jY;Bk(d,e,e+1|0);g=d.jZ;h=g.data;h[e]=62;b=new I;e=d.jY;i=h.length;if(e>=0&&e<=(i-0|0)){b.j0=L(g.data,0,e);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AN0=a=>{let b,c,d,e,f,g,h,i;b=a.kj;c=a.fK();d=new K;d.jZ=G(16);e=d.jY;Bk(d,e,e+1|0);d.jZ.data[e]=60;f=d.jY;if(b===null)b=A(2);D(d,f,b);e=d.jY;Bk(d,e,e+1|0);d.jZ.data[e]=58;f=d.jY;if(c===null)c=A(2);D(d,f,c);e=d.jY;Bk(d,e,e+1|0);g=d.jZ;h=g.data;h[e]=62;b=new I;e=d.jY;i=h.length;if(e>=0&&e<=(i-0|0)){b.j0=L(g.data,0,e);return b;}b=new H;S(b);B(b);},
AXg=a=>{return a.j_;},
AQB=(a,b)=>{a.j_=b;},
AQz=(a,b)=>{return 1;},
ASg=a=>{return null;},
Iq=a=>{let b;a.mw=1;b=a.j_;if(b!==null){if(!b.mw){b=b.fL();if(b!==null){a.j_.mw=1;a.j_=b;}a.j_.e5();}else if(b instanceof Gt&&b.mC.tH)a.j_=b.j_;}},
AX2=()=>{O=1;};
let MX=F();
let AR2=F();
let AEs=F();
let ATK=F();
let K5=F(0);
let Mq=F();
let AQJ=(a,b)=>{let c;BF();b=b===null?null:b instanceof FS()?b:Ch(b);c=Hl;b=b===null?null:b[Bt]===true?b:b.kG;c.delete(b);};
let AF1=F();
let Mp=F();
let Y3=(a,b)=>{let c;BF();b=b===null?null:b instanceof FS()?b:Ch(b);c=In;b=b===null?null:b[Bt]===true?b:b.kG;c.delete(b);};
let N$=F(0);
function HE(){let a=this;C.call(a);a.mZ=null;a.m0=null;}
function IO(){let a=this;HE.call(a);a.sO=null;a.w7=0;}
function Dz(){let a=this;Cd.call(a);a.tH=0;a.l2=0;}
let H$=null;
let D2=()=>{D2=BQ(Dz);ADB();};
let Zq=(a,b,c,d)=>{let e,f,g;e=a.l2;f=d.lW.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.j_.fJ(b,c,d);if(g<0){b=a.l2;d.lW.data[(b*2|0)+1|0]=e;}return g;},
AWn=a=>{return a.l2;},
AFW=a=>{return A(177);},
Z8=(a,b)=>{return 0;},
ADB=()=>{let b,c,d;b=new Pq;c=O;O=c+1|0;d=new Bb;d.jZ=G(20);b.kj=(J(d,d.jY,c,10)).T();H$=b;};
function Tx(){let a=this;C.call(a);a.lE=null;a.lu=0;a.n2=0;a.xE=0;a.ot=0;a.lJ=0;a.km=0;a.mk=0;a.lb=null;a.nZ=null;a.kk=0;a.ll=0;a.m3=0;a.rd=0;a.lC=null;}
let QL=null,Z2=null,AOJ=0;
let AQD=(a,b,c)=>{let d,e,f,g,h,i,j;a.n2=1;a.lC=b;if((c&16)>0){d=new K;d.jZ=G(16);D(d,d.jY,A(178));e=0;while(true){f=Qy(b,A(179),e);if(f<0)break;g=f+2|0;h=Cj(b,e,g);D(d,d.jY,h);D(d,d.jY,A(180));e=g;}b=Cj(b,e,b.j0.length);D(d,d.jY,b);D(d,d.jY,A(179));b=new I;i=d.jZ;j=i.data;e=d.jY;f=j.length;if(e>=0&&e<=(f-0|0))b.j0=L(i.data,0,e);else{b=new H;b.j1=1;b.j2=1;B(b);}}a.lE=G(b.j0.length+2|0);j=G(b.j0.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Du(j,0,a.lE,0,b.j0.length);i=a.lE.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.mk=g;a.lu=c;BA(a);BA(a);return;}if(e<0)break;if(e>=b.j0.length)break;i[e]=b.j0.charCodeAt(e);e=e+1|0;}b=new W;b.j1=1;b.j2=1;B(b);},
ADL=(a,b)=>{let c=new Tx();AQD(c,a,b);return c;},
BA=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.ot=a.lJ;a.lJ=a.km;a.lb=a.nZ;a.m3=a.rd;a.rd=a.kk;a:{while(true){b=0;c=a.kk>=a.lE.data.length?0:Nd(a);a.km=c;a.nZ=null;if(a.n2==4){if(c!=92)return;c=a.kk;d=a.lE.data;if(c>=d.length)c=0;else{a.ll=c;if(a.lu&4)Cv(a);else a.kk=c+1|0;c=d[a.ll];}a.km=c;switch(c){case 69:break;default:a.km=92;a.kk=a.ll;return;}a.n2=a.xE;a.km=a.kk>(a.lE.data.length-2|0)?0:Nd(a);}b:{c=a.km;if(c==92){c=a.kk>=(a.lE.data.length-2|0)?(-1):Nd(a);c:{d:{a.km=c;switch(c){case -1:e=new Cm;f=a.lC;c=a.kk;e.j1
=1;e.j2=1;e.kN=(-1);e.lH=A(65);e.lz=f;e.kN=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.km
=ALh(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.n2!=1)break b;a.km=(-2147483648)|c;break b;case 65:a.km=(-2147483583);break b;case 66:a.km=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cm;f=a.lC;c=a.kk;e.j1=1;e.j2=1;e.kN=(-1);e.lH=A(65);e.lz=f;e.kN=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.km
=(-2147483577);break b;case 80:case 112:break c;case 81:a.xE=a.n2;a.n2=4;b=1;break b;case 90:a.km=(-2147483558);break b;case 97:a.km=7;break b;case 98:a.km=(-2147483550);break b;case 99:c=a.kk;d=a.lE.data;if(c>=(d.length-2|0)){e=new Cm;f=a.lC;e.j1=1;e.j2=1;e.kN=(-1);e.lH=A(65);e.lz=f;e.kN=c;B(e);}a.ll=c;if(a.lu&4)Cv(a);else a.kk=c+1|0;a.km=d[a.ll]&31;break b;case 101:a.km=27;break b;case 102:a.km=12;break b;case 110:a.km=10;break b;case 114:a.km=13;break b;case 116:a.km=9;break b;case 117:a.km=Qz(a,4);break b;case 120:a.km
=Qz(a,2);break b;case 122:a.km=(-2147483526);break b;default:}break b;}e=new I;d=a.lE;g=d.data;h=a.ll;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.j0=L(d.data,h,1);e=VS(IQ,e);if(e.n4===null)e.n4=e.fS();a.nZ=e.n4;a.km=0;break b;}e=AKr(a);j=0;if(a.km==80)j=1;try{a.nZ=AId(e,j);}catch($$e){$$je=Y($$e);if($$je instanceof Kn){e=new Cm;f=a.lC;c=a.kk;e.j1=1;e.j2=1;e.kN=(-1);e.lH=A(65);e.lz=f;e.kN=c;B(e);}else{throw $$e;}}a.km=0;}else{h=a.n2;if(h==1)switch(c){case 36:a.km=(-536870876);break b;case 40:d=a.lE.data;c
=a.kk;if(d[c]!=63){a.km=(-2147483608);break b;}a.ll=c;if(a.lu&4)Cv(a);else a.kk=c+1|0;c=a.lE.data[a.kk];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.km=(-134217688);k=a.kk;a.ll=k;if(a.lu&4)Cv(a);else a.kk=k+1|0;break e;default:e=new Cm;f=a.lC;c=a.kk;e.j1=1;e.j2=1;e.kN=(-1);e.lH=A(65);e.lz=f;e.kN=c;B(e);}a.km=(-67108824);j=a.kk;a.ll=j;if(a.lu&4)Cv(a);else a.kk=j+1|0;}else{switch(c){case 33:break;case 60:h=a.kk;a.ll=h;if(a.lu&4)Cv(a);else a.kk=h+1|0;c=a.lE.data[a.kk];h=1;break e;case 61:a.km
=(-536870872);j=a.kk;a.ll=j;if(a.lu&4)Cv(a);else a.kk=j+1|0;break e;case 62:a.km=(-33554392);j=a.kk;a.ll=j;if(a.lu&4)Cv(a);else a.kk=j+1|0;break e;default:i=AS7(a);a.km=i;if(i<256){a.lu=i;i=i<<16;a.km=i;a.km=(-1073741784)|i;break e;}i=i&255;a.km=i;a.lu=i;i=i<<16;a.km=i;a.km=(-16777176)|i;break e;}a.km=(-268435416);j=a.kk;a.ll=j;if(a.lu&4)Cv(a);else a.kk=j+1|0;}}if(!h)break;}break b;case 41:a.km=(-536870871);break b;case 42:case 43:case 63:h=a.kk;d=a.lE.data;switch(h>=d.length?42:d[h]){case 43:a.km=c|(-2147483648);a.ll
=h;if(a.lu&4)Cv(a);else a.kk=h+1|0;break b;case 63:a.km=c|(-1073741824);a.ll=h;if(a.lu&4)Cv(a);else a.kk=h+1|0;break b;default:}a.km=c|(-536870912);break b;case 46:a.km=(-536870866);break b;case 91:a.km=(-536870821);a.n2=2;break b;case 93:if(h!=2)break b;a.km=(-536870819);break b;case 94:a.km=(-536870818);break b;case 123:a.nZ=AQX(a,c);break b;case 124:a.km=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.km=(-536870874);break b;case 45:a.km=(-536870867);break b;case 91:a.km=(-536870821);break b;case 93:a.km
=(-536870819);break b;case 94:a.km=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new H;e.j1=1;e.j2=1;B(e);},
AKr=a=>{let b,c,d,e,f,g,h,i;b=new K;b.jZ=G(10);c=a.kk;d=a.lE;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new I;a.ll=c;if(a.lu&4)Cv(a);else a.kk=c+1|0;g=a.ll;if(g>=0&&1<=(f-g|0)){b.j0=L(d.data,g,1);h=new K;h.jZ=G(16);D(h,h.jY,A(181));D(h,h.jY,b);b=new I;d=h.jZ;e=d.data;f=h.jY;g=e.length;if(f>=0&&f<=(g-0|0)){b.j0=L(d.data,0,f);return b;}b=new H;b.j1=1;b.j2=1;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}a.ll=c;if(a.lu&4)Cv(a);else a.kk=c+1|0;c=0;a:{while(true){f=a.kk;d=a.lE.data;if(f>=(d.length-2|0))break;a.ll=f;if
(a.lu&4)Cv(a);else a.kk=f+1|0;c=d[a.ll];if(c==125)break a;f=b.jY;Bk(b,f,f+1|0);b.jZ.data[f]=c;}}if(c!=125){b=new Cm;i=a.lC;c=a.kk;b.j1=1;b.j2=1;b.kN=(-1);b.lH=A(65);b.lz=i;b.kN=c;B(b);}}c=b.jY;if(!c){b=new Cm;i=a.lC;c=a.kk;b.j1=1;b.j2=1;b.kN=(-1);b.lH=A(65);b.lz=i;b.kN=c;B(b);}h=new I;d=b.jZ;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.j0=L(d.data,0,c);if(h.j0.length==1){b=new K;b.jZ=G(16);D(b,b.jY,A(181));D(b,b.jY,h);h=new I;d=b.jZ;e=d.data;f=b.jY;g=e.length;if(f>=0&&f<=(g-0|0)){h.j0=L(d.data,0,f);return h;}b=new H;b.j1
=1;b.j2=1;B(b);}b:{c:{if(h.j0.length>3){if(h===A(181)?1:MT(h,A(181),0))break c;if(h===A(182)?1:MT(h,A(182),0))break c;}break b;}h=Cj(h,2,h.j0.length);}return h;}b=new H;b.j1=1;b.j2=1;B(b);},
AQX=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.jZ=G(4);d=(-1);e=2147483647;a:{while(true){f=a.kk;g=a.lE.data;if(f>=g.length)break a;a.ll=f;if(a.lu&4)Cv(a);else a.kk=f+1|0;b=g[a.ll];if(b==125)break a;if(b==44&&d<0)try{d=KJ(Ev(c),10);ARo(c,0,ZR(c));continue;}catch($$e){$$je=Y($$e);if($$je instanceof CA){break;}else{throw $$e;}}h=b&65535;f=c.jY;Bk(c,f,f+1|0);c.jZ.data[f]=h;}c=new Cm;i=a.lC;b=a.kk;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=i;c.kN=b;B(c);}if(b!=125){c=new Cm;i=a.lC;b=a.kk;c.j1=1;c.j2=1;c.kN=(-1);c.lH
=A(65);c.lz=i;c.kN=b;B(c);}if(c.jY>0)b:{try{e=KJ(Ev(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Y($$e);if($$je instanceof CA){}else{throw $$e;}}c=new Cm;i=a.lC;b=a.kk;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=i;c.kN=b;B(c);}else if(d<0){c=new Cm;i=a.lC;b=a.kk;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=i;c.kN=b;B(c);}if((d|e|(e-d|0))<0){c=new Cm;i=a.lC;b=a.kk;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=i;c.kN=b;B(c);}f=a.kk;g=a.lE.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.km=(-2147483525);a.ll=f;if(a.lu
&4)Cv(a);else a.kk=f+1|0;break c;case 63:a.km=(-1073741701);a.ll=f;if(a.lu&4)Cv(a);else a.kk=f+1|0;break c;default:}a.km=(-536870789);}c=new OJ;c.oC=d;c.oA=e;return c;},
AFN=b=>{return b<0?0:1;},
Qz=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.jZ=G(b);d=a.lE.data.length-2|0;e=0;while(true){f=BT(e,b);if(f>=0)break;g=a.kk;if(g>=d)break;h=a.lE;a.ll=g;if(a.lu&4)Cv(a);else a.kk=g+1|0;g=h.data[a.ll];i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=g;e=e+1|0;}if(!f)a:{try{b=KJ(Ev(c),16);}catch($$e){$$je=Y($$e);if($$je instanceof CA){break a;}else{throw $$e;}}return b;}c=new Cm;j=a.lC;b=a.kk;c.j1=1;c.j2=1;c.kN=(-1);c.lH=A(65);c.lz=j;c.kN=b;B(c);},
ALh=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.lE.data;e=d.length-2|0;f=P6(d[a.kk]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.kk;a.ll=g;if(a.lu&4)Cv(a);else a.kk=g+1|0;a:{while(true){if(c>=b)break a;h=a.kk;if(h>=e)break a;i=P6(a.lE.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.kk;a.ll=g;if(a.lu&4)Cv(a);else a.kk=g+1|0;c=c+1|0;}}return f;}j=new Cm;k=a.lC;b=a.kk;j.j1=1;j.j2=1;j.kN=(-1);j.lH=A(65);j.lz=k;j.kN=b;B(j);},
AS7=a=>{let b,c,d,e,f,g,h;b=1;c=a.lu;a:while(true){d=a.kk;e=a.lE.data;if(d>=e.length){f=new Cm;g=a.lC;f.j1=1;f.j2=1;f.kN=(-1);f.lH=A(65);f.lz=g;f.kN=d;B(f);}b:{c:{switch(e[d]){case 41:a.ll=d;if(a.lu&4)Cv(a);else a.kk=d+1|0;return c|256;case 45:if(!b){h=new Cm;g=a.lC;h.j1=1;h.j2=1;h.kN=(-1);h.lH=A(65);h.lz=g;h.kN=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.ll=d;if(a.lu&4)Cv(a);else a.kk=d+1|0;}a.ll=d;if(a.lu&4)Cv(a);else a.kk=d+1|0;return c;},
Cv=a=>{let b,c,d,e;b=a.lE.data.length-2|0;a.kk=a.kk+1|0;a:while(true){c=a.kk;if(c<b){b:{c=a.lE.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CT(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.kk=a.kk+1|0;continue;}}c=a.kk;if(c>=b)break;d=a.lE.data;if(d[c]!=35)break;a.kk=c+1|0;while(true){e=a.kk;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.kk
=e+1|0;}}return c;},
ACn=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?IG([d,e]):IG([d,e,4519+f|0]);}return null;},
AMi=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
Nd=a=>{let b,c,d,e,f;b=a.lE;c=a.kk;a.ll=c;if(a.lu&4)Cv(a);else a.kk=c+1|0;b=b.data;d=a.ll;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.lE.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.kk;a.ll=d;if(a.lu&4)Cv(a);else a.kk=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cm(){let a=this;Bm.call(a);a.lH=null;a.lz=null;a.kN=0;}
let AR$=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(65);c=a.kN;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bm;b.j1=1;b.j2=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new I;b.j0=L(d.data,0,f);}a:{h=a.lH;i=a.lz;if(i!==null&&i.j0.length){j=a.kN;i=a.lz;k=new K;k.jZ=G(16);J(k,k.jY,j,10);D(k,k.jY,A(46));j=k.jY;if(i===null)i=A(2);D(k,j,i);D(k,k.jY,A(46));D(k,k.jY,b);b=new I;d=k.jZ;e=d.data;c=k.jY;f=e.length;if(c>=0&&c<=(f-0|0)){b.j0=L(d.data,0,c);break a;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}b=A(65);}i=new K;i.jZ=G(16);j
=i.jY;if(h===null)h=A(2);D(i,j,h);D(i,i.jY,b);b=new I;d=i.jZ;e=d.data;c=i.jY;f=e.length;if(c>=0&&c<=(f-0|0)){b.j0=L(d.data,0,c);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
let Zy=F();
let AUH=(b,c,d,e)=>{let f,g;if(c<=d){while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}return;}e=new Bm;e.j1=1;e.j2=1;B(e);},
AL6=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bm;f.j1=1;f.j2=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
ANR=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bm;f.j1=1;f.j2=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=BT(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
UU=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let KN=F(0);
let Mb=F();
let ADp=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.k9;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BE;b.kb=f;c=b;f.classObject=c;}}b=Ek(b);if(b===null){b=new Dm;b.j1=1;b.j2=1;B(b);}if(b===M(Bh)){b=new Bm;b.j1=1;b.j2=1;B(b);}if(d<0){b=new D4;b.j1=1;b.j2=1;B(b);}b=D1(b.kb,d);}e=0;g=0;h=a.mJ;i=a.k9;d=BT(h,h);a:{while(true){j=BT(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new Nx;b.j1=1;b.j2=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.lV.data[g];e=h;g=k;}return b;}b=new H;b.j1=1;b.j2=1;B(b);};
let Sh=F(0);
let Oy=F(0);
function KP(){Mb.call(this);this.mJ=0;}
let TO=F(0);
function KM(){let a=this;KP.call(a);a.lV=null;a.k9=0;}
let Ha=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lV;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BE;i.kb=h;j=i;h.classObject=j;}}h=Ek(i);if(h===null){i=new Dm;i.j1=1;i.j2=1;B(i);}if(h===M(Bh)){i=new Bm;i.j1=1;i.j2=1;B(i);}if(f<0){i=new D4;i.j1=1;i.j2=1;B(i);}j=D1(h.kb,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.lV=j;}},
AGW=(a,b,c)=>{let d,e,f;if(b>=0){d=a.k9;if(b<=d){Ha(a,d+1|0);d=a.k9;e=d;while(e>b){f=a.lV.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.lV.data[b]=c;a.k9=d+1|0;a.mJ=a.mJ+1|0;return;}}c=new H;c.j1=1;c.j2=1;B(c);},
UB=(a,b)=>{let c,d,e,f;if(b>=0){c=a.k9;if(b<c){d=a.lV.data;e=d[b];c=c-1|0;a.k9=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.mJ=a.mJ+1|0;return e;}}e=new H;e.j1=1;e.j2=1;B(e);};
let Sc=F(Dz);
let Yc=(a,b,c,d)=>{let e,f;e=a.l2;f=d.lp.data;f[e]=b-f[e]|0;return a.j_.fJ(b,c,d);},
AB8=a=>{return A(183);},
AOr=(a,b)=>{return 0;};
let Wi=F(Dz);
let ABI=(a,b,c,d)=>{return b;},
AHc=a=>{return A(184);};
let QB=F(Dz);
let AAu=(a,b,c,d)=>{let e;e=a.l2;if(d.lp.data[e]!=b)b=(-1);return b;},
AQr=a=>{return A(185);};
function SW(){Dz.call(this);this.vz=0;}
let YA=(a,b,c,d)=>{let e,f;e=a.l2;f=d.lp.data;f[e]=b-f[e]|0;a.vz=b;return b;},
AO3=a=>{return A(186);},
AMh=(a,b)=>{return 0;};
let GE=F(Dz);
let AQ4=(a,b,c,d)=>{if(d.rH!=1&&b!=d.kP)return (-1);d.oB=1;d.lW.data[1]=b;return b;},
AAQ=a=>{return A(187);};
function CD(){Cd.call(this);this.kV=0;}
let ATa=(a,b,c,d)=>{let e;if((b+a.f2()|0)>d.kP){d.mH=1;return (-1);}e=a.f3(b,c);if(e<0)return (-1);return a.j_.fJ(b+e|0,c,d);},
APG=a=>{return a.kV;},
AG5=(a,b)=>{return 1;};
let Fj=F(CD);
let AOP=(a,b,c)=>{return 0;},
ADQ=(a,b,c,d)=>{let e,f,g;e=d.kP;f=d.mS;a:{b:{while(true){g=BT(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.j0.length)break b;if(((c.j0.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.j0.length)break a;if((c.j0.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.j_.fJ(b,c,d)>=0)break;b=b+1|0;}return b;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
ABp=(a,b,c,d,e)=>{let f,g,h;f=e.kP;g=e.mS;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.j0.length)break b;if(((d.j0.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.j0.length)break a;if((d.j0.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.j_.fJ(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new W;d.j1=1;d.j2=1;B(d);}d=new W;d.j1=1;d.j2=1;B(d);},
AFY=a=>{return A(188);},
Yt=(a,b)=>{return 0;};
function Cq(){let a=this;Cd.call(a);a.lM=null;a.mC=null;a.lt=0;}
let AFo=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lM;if(e===null)return (-1);f=a.lt;g=d.lW.data;h=f*2|0;i=g[h];g[h]=b;f=e.k9;j=0;a:{while(true){if(j>=f){b=a.lt;d.lW.data[b*2|0]=i;return (-1);}e=a.lM;if(j<0)break a;if(j>=e.k9)break a;h=e.lV.data[j].fJ(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new H;c.j1=1;c.j2=1;B(c);},
AL$=(a,b)=>{a.mC.j_=b;},
AHm=a=>{return A(189);},
AIG=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.lM;if(c!==null){d=0;e=c.mJ;f=c.k9;while(true){if(!(d>=f?0:1))break b;if(e<c.mJ){b=new Nx;b.j1=1;b.j2=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.k9)break a;if(c.lV.data[d].fn(b))break;d=g;}return 1;}}return 0;}b=new H;b.j1=1;b.j2=1;B(b);},
ANf=(a,b)=>{let c,d,e;c=a.lt;d=b.lW.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
ABh=a=>{let b,c,d,e;a.mw=1;b=a.mC;if(b!==null&&!b.mw)Iq(b);a:{b:{b=a.lM;if(b!==null){c=b.k9;d=0;while(true){if(d>=c)break b;b=a.lM;if(d<0)break a;if(d>=b.k9)break a;b=b.lV.data[d];e=b.fL();if(e===null)e=b;else{b.mw=1;UB(a.lM,d);AGW(a.lM,d,e);}if(!e.mw)e.e5();d=d+1|0;}}}if(a.j_!==null)Iq(a);return;}b=new H;b.j1=1;b.j2=1;B(b);};
let J4=F(Cq);
let ALI=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lt;f=d.lp.data;g=f[e];f[e]=b;h=a.lM.k9;e=0;a:{while(true){if(e>=h){b=a.lt;d.lp.data[b]=g;return (-1);}i=a.lM;if(e<0)break a;if(e>=i.k9)break a;j=i.lV.data[e].fJ(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new H;c.j1=1;c.j2=1;B(c);},
AIV=a=>{return A(190);},
ANS=(a,b)=>{let c;c=a.lt;return !b.lp.data[c]?0:1;};
let Eq=F(J4);
let ACB=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lt;f=d.lp.data;g=f[e];f[e]=b;h=a.lM.k9;i=0;a:{while(i<h){j=a.lM;if(i<0)break a;if(i>=j.k9)break a;if(j.lV.data[i].fJ(b,c,d)>=0)return a.j_.fJ(a.mC.vz,c,d);i=i+1|0;}b=a.lt;d.lp.data[b]=g;return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
ANo=(a,b)=>{a.j_=b;},
Yn=a=>{return A(190);};
let Om=F(Eq);
let AL0=(a,b,c,d)=>{let e,f,g;e=a.lM.k9;f=0;a:{while(f<e){g=a.lM;if(f<0)break a;if(f>=g.k9)break a;if(g.lV.data[f].fJ(b,c,d)>=0)return a.j_.fJ(b,c,d);f=f+1|0;}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
AQE=(a,b)=>{return 0;},
ASc=a=>{return A(191);};
let Vi=F(Eq);
let ZX=(a,b,c,d)=>{let e,f,g;e=a.lM.k9;f=0;a:{while(true){if(f>=e)return a.j_.fJ(b,c,d);g=a.lM;if(f<0)break a;if(f>=g.k9)break a;if(g.lV.data[f].fJ(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
APX=(a,b)=>{return 0;},
AE9=a=>{return A(192);};
let RK=F(Eq);
let AA$=(a,b,c,d)=>{let e,f,g,h,i;e=a.lM.k9;f=d.sE?0:d.mS;a:{b:{g=a.j_.fJ(b,c,d);if(g>=0){h=a.lt;d.lp.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.lM;if(h<0)break a;if(h>=i.k9)break a;if(i.lV.data[h].f5(f,b,c,d)>=0){b=a.lt;d.lp.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
ATM=(a,b)=>{return 0;},
ALd=a=>{return A(193);};
let Th=F(Eq);
let Xm=(a,b,c,d)=>{let e,f,g;e=a.lM.k9;f=a.lt;d.lp.data[f]=b;f=0;a:{while(true){if(f>=e)return a.j_.fJ(b,c,d);g=a.lM;if(f<0)break a;if(f>=g.k9)break a;if(g.lV.data[f].f5(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.j1=1;c.j2=1;B(c);},
AN_=(a,b)=>{return 0;},
AAv=a=>{return A(194);};
function Gt(){Cq.call(this);this.mW=null;}
let XT=(a,b,c,d)=>{let e,f,g;e=a.lt;f=d.lW.data;e=e*2|0;g=f[e];f[e]=b;e=a.mW.fJ(b,c,d);if(e>=0)return e;e=a.lt;d.lW.data[e*2|0]=g;return (-1);},
AI7=(a,b,c,d)=>{let e;e=a.mW.fB(b,c,d);if(e>=0){b=a.lt;d.lW.data[b*2|0]=e;}return e;},
AOy=(a,b,c,d,e)=>{let f;f=a.mW.f5(b,c,d,e);if(f>=0){b=a.lt;e.lW.data[b*2|0]=f;}return f;},
AIw=(a,b)=>{return a.mW.fn(b);},
AMa=a=>{let b,c,d,e,f;b=new OL;c=a.mW;d=a.mC;e=O;O=e+1|0;f=new Bb;f.jZ=G(20);b.kj=(J(f,f.jY,e,10)).T();b.mW=c;b.mC=d;b.lt=d.l2;a.j_=b;return b;},
ASp=a=>{let b;a.mw=1;b=a.mC;if(b!==null&&!b.mw)Iq(b);b=a.mW;if(b!==null&&!b.mw){b=b.fL();if(b!==null){a.mW.mw=1;a.mW=b;}a.mW.e5();}};
let AKt=F();
let Jy=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(AAA());}return b.data.length;},
D1=(b,c)=>{if(b.$meta.primitive){switch(b){};}return Q(b,c);};
let JT=F(Bw);
let HW=F();
function Bq(){let a=this;HW.call(a);a.kI=0;a.mu=0;a.kl=null;a.s5=null;a.ty=null;a.lg=0;}
let IQ=null;
let Z0=a=>{return null;},
YW=a=>{return a.kl;},
AJw=a=>{return !a.mu?(Il(a.kl,0)>=2048?0:1):AMH(a.kl,0)>=2048?0:1;},
AVE=a=>{return a.lg;},
APv=a=>{return a;},
Zh=a=>{let b,c;if(a.ty===null){b=a.f8();c=new Vt;c.z3=a;c.vJ=b;b=new Bn;b.ki=X(64);c.kl=b;a.ty=c;EQ(c,a.mu);}return a.ty;},
IF=a=>{let b,c;if(a.s5===null){b=a.f8();c=new Vs;c.zK=a;c.xt=b;c.xJ=a;b=new Bn;b.ki=X(64);c.kl=b;a.s5=c;EQ(c,a.kI);a.s5.lg=a.lg;}return a.s5;},
ASa=a=>{return 0;},
EQ=(a,b)=>{let c;c=a.kI;if(c^b){a.kI=c?0:1;a.mu=a.mu?0:1;}if(!a.lg)a.lg=1;return a;},
AVk=a=>{return a.kI;},
AId=(b,c)=>{b=VS(IQ,b);if(!c&&b.n4===null)b.n4=b.fS();else if(c&&b.p3===null)b.p3=EQ(b.fS(),1);return c?b.p3:b.n4;},
AUV=()=>{IQ=new Nz;};
function Kn(){let a=this;Bw.call(a);a.Af=null;a.z7=null;}
function CM(){let a=this;Bq.call(a);a.sF=0;a.ts=0;a.qr=0;a.t7=0;a.nD=0;a.m9=0;a.kn=null;a.lk=null;}
let C6=(a,b)=>{let c;a:{if(a.sF){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.nD){N2(a.kn,Gc(b&65535));break a;}MZ(a.kn,Gc(b&65535));break a;}if(a.ts&&b>128){a.qr=1;if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}b=CC(B0,b);if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}b=CC(B1,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.t7)N2(a.kl,b-55296|0);else MZ(a.kl,b-55296|0);}if(a.nD)N2(a.kn,b);else MZ(a.kn,
b);if(!a.lg&&(b>=65536&&b<=1114111?1:0))a.lg=1;return a;},
ATF=(a,b)=>{let c,d,e;if(!a.lg&&b.lg)a.lg=1;if(a.t7){if(!b.mu)G3(a.kl,b.f8());else D0(a.kl,b.f8());}else if(!b.mu)GW(a.kl,b.f8());else{Gx(a.kl,b.f8());D0(a.kl,b.f8());a.mu=a.mu?0:1;a.t7=1;}if(!a.m9&&b.gd()!==null){if(a.nD){if(!b.kI)G3(a.kn,b.gd());else D0(a.kn,b.gd());}else if(!b.kI)GW(a.kn,b.gd());else{Gx(a.kn,b.gd());D0(a.kn,b.gd());a.kI=a.kI?0:1;a.nD=1;}}else{c=a.kI;d=a.lk;if(d!==null){if(!c){e=new PP;e.yB=a;e.xT=c;e.xD=d;e.xv=b;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}else{e=new PQ;e.Al=a;e.wA=c;e.wu=d;e.wm=b;b
=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}}else{if(c&&!a.nD&&(a.kn.lO?0:1)){d=new PL;d.zr=a;d.ww=b;b=new Bn;b.ki=X(64);d.kl=b;a.lk=d;}else if(!c){d=new PI;d.t2=a;d.th=c;d.vV=b;b=new Bn;b.ki=X(64);d.kl=b;a.lk=d;}else{d=new PJ;d.uD=a;d.to=c;d.xz=b;b=new Bn;b.ki=X(64);d.kl=b;a.lk=d;}a.m9=1;}}return a;},
BX=(a,b,c)=>{let d;if(b>c){d=new Bm;d.j1=1;d.j2=1;B(d);}a:{b:{if(!a.sF){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;C6(a,b);b=b+1|0;}}if(a.nD)X_(a.kn,b,c+1|0);else I0(a.kn,b,c+1|0);}return a;},
Xe=(a,b)=>{let c,d,e,f;if(!a.lg&&b.lg)a.lg=1;if(b.qr)a.qr=1;c=a.mu;if(!(c^b.mu)){if(!c)GW(a.kl,b.kl);else D0(a.kl,b.kl);}else if(c)G3(a.kl,b.kl);else{Gx(a.kl,b.kl);D0(a.kl,b.kl);a.mu=1;}a:{if(!a.m9){d=b.m9;if((!d?b.kn:null)!==null){c=a.kI;if(!(c^b.kI)){if(!c){GW(a.kn,!d?b.kn:null);break a;}D0(a.kn,!d?b.kn:null);break a;}if(c){G3(a.kn,!d?b.kn:null);break a;}Gx(a.kn,!d?b.kn:null);D0(a.kn,!b.m9?b.kn:null);a.kI=1;break a;}}c=a.kI;e=a.lk;if(e!==null){if(!c){f=new PD;f.yj=a;f.xi=c;f.xy=e;f.xM=b;b=new Bn;b.ki=X(64);f.kl
=b;a.lk=f;}else{f=new P$;f.yQ=a;f.xK=c;f.vw=e;f.vB=b;b=new Bn;b.ki=X(64);f.kl=b;a.lk=f;}}else{if(!a.nD&&(a.kn.lO?0:1)){if(!c){e=new PN;e.An=a;e.wk=b;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}else{e=new PO;e.yU=a;e.xH=b;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}}else if(!c){e=new PR;e.xj=a;e.wJ=b;e.wv=c;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}else{e=new PS;e.wV=a;e.w3=b;e.w9=c;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}a.m9=1;}}},
VK=(a,b)=>{let c,d,e,f;if(!a.lg&&b.lg)a.lg=1;if(b.qr)a.qr=1;c=a.mu;if(!(c^b.mu)){if(!c)D0(a.kl,b.kl);else GW(a.kl,b.kl);}else if(!c)G3(a.kl,b.kl);else{Gx(a.kl,b.kl);D0(a.kl,b.kl);a.mu=0;}a:{if(!a.m9){d=b.m9;if((!d?b.kn:null)!==null){c=a.kI;if(!(c^b.kI)){if(!c){D0(a.kn,!d?b.kn:null);break a;}GW(a.kn,!d?b.kn:null);break a;}if(!c){G3(a.kn,!d?b.kn:null);break a;}Gx(a.kn,!d?b.kn:null);D0(a.kn,!b.m9?b.kn:null);a.kI=0;break a;}}c=a.kI;e=a.lk;if(e!==null){if(!c){f=new PF;f.yA=a;f.xk=c;f.vI=e;f.wy=b;b=new Bn;b.ki=X(64);f.kl
=b;a.lk=f;}else{f=new PG;f.y0=a;f.w_=c;f.vs=e;f.xh=b;b=new Bn;b.ki=X(64);f.kl=b;a.lk=f;}}else{if(!a.nD&&(a.kn.lO?0:1)){if(!c){e=new PB;e.yW=a;e.v$=b;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}else{e=new PC;e.Ai=a;e.v_=b;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}}else if(!c){e=new PH;e.x5=a;e.xS=b;e.w0=c;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}else{e=new PA;e.wZ=a;e.xc=b;e.wB=c;b=new Bn;b.ki=X(64);e.kl=b;a.lk=e;}a.m9=1;}}},
ABv=(a,b)=>{let c;c=a.lk;if(c!==null)return a.kI^c.gg(b);return a.kI^CL(a.kn,b);},
ATH=a=>{if(!a.m9)return a.kn;return null;},
ADz=a=>{return a.kl;},
AQp=a=>{let b,c;if(a.lk!==null)return a;b=!a.m9?a.kn:null;c=new PE;c.ye=a;c.sm=b;b=new Bn;b.ki=X(64);c.kl=b;return EQ(c,a.kI);},
AKD=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.jZ=G(16);c=Il(a.kn,0);while(c>=0){d=(E$(c)).data;e=0;f=d.length;g=b.jY;Bk(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jZ.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jY;Bk(b,g,g+1|0);b.jZ.data[g]=124;c=Il(a.kn,c+1|0);}e=b.jY;if(e>0)VC(b,e-1|0);k=new I;d=b.jZ;h=d.data;e=b.jY;g=h.length;if(e>=0&&e<=(g-0|0)){k.j0=L(d.data,0,e);return k;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AD3=a=>{return a.qr;};
function EG(){Cd.call(this);this.kK=null;}
let AX9=a=>{return a.kK;},
AOA=(a,b)=>{return !a.kK.fn(b)&&!a.j_.fn(b)?0:1;},
AQZ=(a,b)=>{return 1;},
AJL=a=>{let b;a.mw=1;b=a.j_;if(b!==null&&!b.mw){b=b.fL();if(b!==null){a.j_.mw=1;a.j_=b;}a.j_.e5();}b=a.kK;if(b!==null){if(!b.mw){b=b.fL();if(b!==null){a.kK.mw=1;a.kK=b;}a.kK.e5();}else if(b instanceof Gt&&b.mC.tH)a.kK=b.j_;}};
function DI(){EG.call(this);this.k_=null;}
let Xo=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.k_.f2()|0)<=d.kP){f=a.k_.f3(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.j_.fJ(b,c,d);if(f>=0)break;b=b-a.k_.f2()|0;e=e+(-1)|0;}return f;},
ABd=a=>{return A(195);};
function Fs(){DI.call(this);this.pw=null;}
let Zt=(a,b,c,d)=>{let e,f,g,h,i;e=a.pw;f=e.oC;g=e.oA;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.k_.f2()|0)>d.kP)break a;i=a.k_.f3(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.j_.fJ(b,c,d);if(i>=0)break;b=b-a.k_.f2()|0;h=h+(-1)|0;}return i;}if((b+a.k_.f2()|0)>d.kP){d.mH=1;return (-1);}i=a.k_.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
Z4=a=>{return MC(a.pw);};
let DK=F(EG);
let XQ=(a,b,c,d)=>{let e;if(!a.kK.gj(d))return a.j_.fJ(b,c,d);e=a.kK.fJ(b,c,d);if(e>=0)return e;return a.j_.fJ(b,c,d);},
AGw=a=>{return A(196);};
let Fq=F(DI);
let AJc=(a,b,c,d)=>{let e;e=a.kK.fJ(b,c,d);if(e<0)e=a.j_.fJ(b,c,d);return e;},
ATR=(a,b)=>{a.j_=b;a.kK.e9(b);};
let Vv=F(DI);
let ASX=(a,b,c,d)=>{while((b+a.k_.f2()|0)<=d.kP&&a.k_.f3(b,c)>0){b=b+a.k_.f2()|0;}return a.j_.fJ(b,c,d);},
AKs=(a,b,c,d)=>{let e,f,g;e=a.j_.fB(b,c,d);if(e<0)return (-1);f=e-a.k_.f2()|0;while(f>=b&&a.k_.f3(f,c)>0){g=f-a.k_.f2()|0;e=f;f=g;}return e;};
let Nz=F();
let Ye=null,AGS=null,TT=null;
let VS=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=TT.data;if(c>=d.length){e=new Kn;e.j1=1;e.j2=1;e.j3=A(65);e.Af=A(65);e.z7=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof I))g=0;else{f=f;g=b.j0!==f.j0?0:1;}if(g)break;c=c+1|0;}return d[1];},
AC1=()=>{let b,c,d,e,f,g;b=new Jn;Ye=b;c=new IN;AGS=c;d=Q(D$(C),194);e=d.data;e[0]=U(C,[A(197),new T6]);e[1]=U(C,[A(198),new UH]);e[2]=U(C,[A(199),new UM]);e[3]=U(C,[A(200),new Jh]);e[4]=U(C,[A(201),c]);e[5]=U(C,[A(202),new JA]);e[6]=U(C,[A(203),new Wz]);e[7]=U(C,[A(204),new Ka]);e[8]=U(C,[A(205),new R7]);e[9]=U(C,[A(206),new Sz]);e[10]=U(C,[A(207),new Qs]);e[11]=U(C,[A(208),new Qd]);e[12]=U(C,[A(209),new UR]);e[13]=U(C,[A(210),new WH]);e[14]=U(C,[A(211),new Ui]);e[15]=U(C,[A(212),new TX]);e[16]=U(C,[A(213),
new Vh]);e[17]=U(C,[A(214),new Pa]);e[18]=U(C,[A(215),new OK]);e[19]=U(C,[A(216),new Up]);e[20]=U(C,[A(217),new UA]);e[21]=U(C,[A(218),new QO]);e[22]=U(C,[A(219),new SE]);e[23]=U(C,[A(220),new Wa]);e[24]=U(C,[A(221),new Ux]);e[25]=U(C,[A(222),new Rw]);e[26]=U(C,[A(223),new QN]);e[27]=U(C,[A(224),new WD]);e[28]=U(C,[A(225),b]);e[29]=U(C,[A(226),new Ix]);e[30]=U(C,[A(227),new Vm]);e[31]=U(C,[A(228),b]);e[32]=U(C,[A(229),new R_]);e[33]=U(C,[A(230),c]);e[34]=U(C,[A(231),new QI]);f=Q(C,2);g=f.data;g[0]=A(232);b=
new Bv;b.kt=0;b.ku=127;g[1]=b;e[35]=f;f=Q(C,2);g=f.data;g[0]=A(233);b=new Bv;b.kt=128;b.ku=255;g[1]=b;e[36]=f;f=Q(C,2);g=f.data;g[0]=A(234);b=new Bv;b.kt=256;b.ku=383;g[1]=b;e[37]=f;f=Q(C,2);g=f.data;g[0]=A(235);b=new Bv;b.kt=384;b.ku=591;g[1]=b;e[38]=f;f=Q(C,2);g=f.data;g[0]=A(236);b=new Bv;b.kt=592;b.ku=687;g[1]=b;e[39]=f;f=Q(C,2);g=f.data;g[0]=A(237);b=new Bv;b.kt=688;b.ku=767;g[1]=b;e[40]=f;f=Q(C,2);g=f.data;g[0]=A(238);b=new Bv;b.kt=768;b.ku=879;g[1]=b;e[41]=f;f=Q(C,2);g=f.data;g[0]=A(239);b=new Bv;b.kt
=880;b.ku=1023;g[1]=b;e[42]=f;f=Q(C,2);g=f.data;g[0]=A(240);b=new Bv;b.kt=1024;b.ku=1279;g[1]=b;e[43]=f;f=Q(C,2);g=f.data;g[0]=A(241);b=new Bv;b.kt=1280;b.ku=1327;g[1]=b;e[44]=f;f=Q(C,2);g=f.data;g[0]=A(242);b=new Bv;b.kt=1328;b.ku=1423;g[1]=b;e[45]=f;f=Q(C,2);g=f.data;g[0]=A(243);b=new Bv;b.kt=1424;b.ku=1535;g[1]=b;e[46]=f;f=Q(C,2);g=f.data;g[0]=A(244);b=new Bv;b.kt=1536;b.ku=1791;g[1]=b;e[47]=f;f=Q(C,2);g=f.data;g[0]=A(245);b=new Bv;b.kt=1792;b.ku=1871;g[1]=b;e[48]=f;f=Q(C,2);g=f.data;g[0]=A(246);b=new Bv;b.kt
=1872;b.ku=1919;g[1]=b;e[49]=f;f=Q(C,2);g=f.data;g[0]=A(247);b=new Bv;b.kt=1920;b.ku=1983;g[1]=b;e[50]=f;f=Q(C,2);g=f.data;g[0]=A(248);b=new Bv;b.kt=2304;b.ku=2431;g[1]=b;e[51]=f;f=Q(C,2);g=f.data;g[0]=A(249);b=new Bv;b.kt=2432;b.ku=2559;g[1]=b;e[52]=f;f=Q(C,2);g=f.data;g[0]=A(250);b=new Bv;b.kt=2560;b.ku=2687;g[1]=b;e[53]=f;f=Q(C,2);g=f.data;g[0]=A(251);b=new Bv;b.kt=2688;b.ku=2815;g[1]=b;e[54]=f;f=Q(C,2);g=f.data;g[0]=A(252);b=new Bv;b.kt=2816;b.ku=2943;g[1]=b;e[55]=f;f=Q(C,2);g=f.data;g[0]=A(253);b=new Bv;b.kt
=2944;b.ku=3071;g[1]=b;e[56]=f;f=Q(C,2);g=f.data;g[0]=A(254);b=new Bv;b.kt=3072;b.ku=3199;g[1]=b;e[57]=f;f=Q(C,2);g=f.data;g[0]=A(255);b=new Bv;b.kt=3200;b.ku=3327;g[1]=b;e[58]=f;f=Q(C,2);g=f.data;g[0]=A(256);b=new Bv;b.kt=3328;b.ku=3455;g[1]=b;e[59]=f;f=Q(C,2);g=f.data;g[0]=A(257);b=new Bv;b.kt=3456;b.ku=3583;g[1]=b;e[60]=f;f=Q(C,2);g=f.data;g[0]=A(258);b=new Bv;b.kt=3584;b.ku=3711;g[1]=b;e[61]=f;f=Q(C,2);g=f.data;g[0]=A(259);b=new Bv;b.kt=3712;b.ku=3839;g[1]=b;e[62]=f;f=Q(C,2);g=f.data;g[0]=A(260);b=new Bv;b.kt
=3840;b.ku=4095;g[1]=b;e[63]=f;f=Q(C,2);g=f.data;g[0]=A(261);b=new Bv;b.kt=4096;b.ku=4255;g[1]=b;e[64]=f;f=Q(C,2);g=f.data;g[0]=A(262);b=new Bv;b.kt=4256;b.ku=4351;g[1]=b;e[65]=f;f=Q(C,2);g=f.data;g[0]=A(263);b=new Bv;b.kt=4352;b.ku=4607;g[1]=b;e[66]=f;f=Q(C,2);g=f.data;g[0]=A(264);b=new Bv;b.kt=4608;b.ku=4991;g[1]=b;e[67]=f;f=Q(C,2);g=f.data;g[0]=A(265);b=new Bv;b.kt=4992;b.ku=5023;g[1]=b;e[68]=f;f=Q(C,2);g=f.data;g[0]=A(266);b=new Bv;b.kt=5024;b.ku=5119;g[1]=b;e[69]=f;f=Q(C,2);g=f.data;g[0]=A(267);b=new Bv;b.kt
=5120;b.ku=5759;g[1]=b;e[70]=f;f=Q(C,2);g=f.data;g[0]=A(268);b=new Bv;b.kt=5760;b.ku=5791;g[1]=b;e[71]=f;f=Q(C,2);g=f.data;g[0]=A(269);b=new Bv;b.kt=5792;b.ku=5887;g[1]=b;e[72]=f;f=Q(C,2);g=f.data;g[0]=A(270);b=new Bv;b.kt=5888;b.ku=5919;g[1]=b;e[73]=f;f=Q(C,2);g=f.data;g[0]=A(271);b=new Bv;b.kt=5920;b.ku=5951;g[1]=b;e[74]=f;f=Q(C,2);g=f.data;g[0]=A(272);b=new Bv;b.kt=5952;b.ku=5983;g[1]=b;e[75]=f;f=Q(C,2);g=f.data;g[0]=A(273);b=new Bv;b.kt=5984;b.ku=6015;g[1]=b;e[76]=f;f=Q(C,2);g=f.data;g[0]=A(274);b=new Bv;b.kt
=6016;b.ku=6143;g[1]=b;e[77]=f;f=Q(C,2);g=f.data;g[0]=A(275);b=new Bv;b.kt=6144;b.ku=6319;g[1]=b;e[78]=f;f=Q(C,2);g=f.data;g[0]=A(276);b=new Bv;b.kt=6400;b.ku=6479;g[1]=b;e[79]=f;f=Q(C,2);g=f.data;g[0]=A(277);b=new Bv;b.kt=6480;b.ku=6527;g[1]=b;e[80]=f;f=Q(C,2);g=f.data;g[0]=A(278);b=new Bv;b.kt=6528;b.ku=6623;g[1]=b;e[81]=f;f=Q(C,2);g=f.data;g[0]=A(279);b=new Bv;b.kt=6624;b.ku=6655;g[1]=b;e[82]=f;f=Q(C,2);g=f.data;g[0]=A(280);b=new Bv;b.kt=6656;b.ku=6687;g[1]=b;e[83]=f;f=Q(C,2);g=f.data;g[0]=A(281);b=new Bv;b.kt
=7424;b.ku=7551;g[1]=b;e[84]=f;f=Q(C,2);g=f.data;g[0]=A(282);b=new Bv;b.kt=7552;b.ku=7615;g[1]=b;e[85]=f;f=Q(C,2);g=f.data;g[0]=A(283);b=new Bv;b.kt=7616;b.ku=7679;g[1]=b;e[86]=f;f=Q(C,2);g=f.data;g[0]=A(284);b=new Bv;b.kt=7680;b.ku=7935;g[1]=b;e[87]=f;f=Q(C,2);g=f.data;g[0]=A(285);b=new Bv;b.kt=7936;b.ku=8191;g[1]=b;e[88]=f;f=Q(C,2);g=f.data;g[0]=A(286);b=new Bv;b.kt=8192;b.ku=8303;g[1]=b;e[89]=f;f=Q(C,2);g=f.data;g[0]=A(287);b=new Bv;b.kt=8304;b.ku=8351;g[1]=b;e[90]=f;f=Q(C,2);g=f.data;g[0]=A(288);b=new Bv;b.kt
=8352;b.ku=8399;g[1]=b;e[91]=f;f=Q(C,2);g=f.data;g[0]=A(289);b=new Bv;b.kt=8400;b.ku=8447;g[1]=b;e[92]=f;f=Q(C,2);g=f.data;g[0]=A(290);b=new Bv;b.kt=8448;b.ku=8527;g[1]=b;e[93]=f;f=Q(C,2);g=f.data;g[0]=A(291);b=new Bv;b.kt=8528;b.ku=8591;g[1]=b;e[94]=f;f=Q(C,2);g=f.data;g[0]=A(292);b=new Bv;b.kt=8592;b.ku=8703;g[1]=b;e[95]=f;f=Q(C,2);g=f.data;g[0]=A(293);b=new Bv;b.kt=8704;b.ku=8959;g[1]=b;e[96]=f;f=Q(C,2);g=f.data;g[0]=A(294);b=new Bv;b.kt=8960;b.ku=9215;g[1]=b;e[97]=f;f=Q(C,2);g=f.data;g[0]=A(295);b=new Bv;b.kt
=9216;b.ku=9279;g[1]=b;e[98]=f;f=Q(C,2);g=f.data;g[0]=A(296);b=new Bv;b.kt=9280;b.ku=9311;g[1]=b;e[99]=f;f=Q(C,2);g=f.data;g[0]=A(297);b=new Bv;b.kt=9312;b.ku=9471;g[1]=b;e[100]=f;f=Q(C,2);g=f.data;g[0]=A(298);b=new Bv;b.kt=9472;b.ku=9599;g[1]=b;e[101]=f;f=Q(C,2);g=f.data;g[0]=A(299);b=new Bv;b.kt=9600;b.ku=9631;g[1]=b;e[102]=f;e[103]=U(C,[A(300),BH(9632,9727)]);e[104]=U(C,[A(301),BH(9728,9983)]);e[105]=U(C,[A(302),BH(9984,10175)]);e[106]=U(C,[A(303),BH(10176,10223)]);e[107]=U(C,[A(304),BH(10224,10239)]);e[108]
=U(C,[A(305),BH(10240,10495)]);e[109]=U(C,[A(306),BH(10496,10623)]);e[110]=U(C,[A(307),BH(10624,10751)]);e[111]=U(C,[A(308),BH(10752,11007)]);e[112]=U(C,[A(309),BH(11008,11263)]);e[113]=U(C,[A(310),BH(11264,11359)]);e[114]=U(C,[A(311),BH(11392,11519)]);e[115]=U(C,[A(312),BH(11520,11567)]);e[116]=U(C,[A(313),BH(11568,11647)]);e[117]=U(C,[A(314),BH(11648,11743)]);e[118]=U(C,[A(315),BH(11776,11903)]);e[119]=U(C,[A(316),BH(11904,12031)]);e[120]=U(C,[A(317),BH(12032,12255)]);e[121]=U(C,[A(318),BH(12272,12287)]);e[122]
=U(C,[A(319),BH(12288,12351)]);e[123]=U(C,[A(320),BH(12352,12447)]);e[124]=U(C,[A(321),BH(12448,12543)]);e[125]=U(C,[A(322),BH(12544,12591)]);e[126]=U(C,[A(323),BH(12592,12687)]);e[127]=U(C,[A(324),BH(12688,12703)]);e[128]=U(C,[A(325),BH(12704,12735)]);e[129]=U(C,[A(326),BH(12736,12783)]);e[130]=U(C,[A(327),BH(12784,12799)]);e[131]=U(C,[A(328),BH(12800,13055)]);e[132]=U(C,[A(329),BH(13056,13311)]);e[133]=U(C,[A(330),BH(13312,19893)]);e[134]=U(C,[A(331),BH(19904,19967)]);e[135]=U(C,[A(332),BH(19968,40959)]);e[136]
=U(C,[A(333),BH(40960,42127)]);e[137]=U(C,[A(334),BH(42128,42191)]);e[138]=U(C,[A(335),BH(42752,42783)]);e[139]=U(C,[A(336),BH(43008,43055)]);e[140]=U(C,[A(337),BH(44032,55203)]);e[141]=U(C,[A(338),BH(55296,56191)]);e[142]=U(C,[A(339),BH(56192,56319)]);e[143]=U(C,[A(340),BH(56320,57343)]);e[144]=U(C,[A(341),BH(57344,63743)]);e[145]=U(C,[A(342),BH(63744,64255)]);e[146]=U(C,[A(343),BH(64256,64335)]);e[147]=U(C,[A(344),BH(64336,65023)]);e[148]=U(C,[A(345),BH(65024,65039)]);e[149]=U(C,[A(346),BH(65040,65055)]);e[150]
=U(C,[A(347),BH(65056,65071)]);e[151]=U(C,[A(348),BH(65072,65103)]);e[152]=U(C,[A(349),BH(65104,65135)]);e[153]=U(C,[A(350),BH(65136,65279)]);e[154]=U(C,[A(351),BH(65280,65519)]);e[155]=U(C,[A(48),BH(0,1114111)]);f=Q(C,2);g=f.data;g[0]=A(352);b=new QE;AJS(b);g[1]=b;e[156]=f;e[157]=U(C,[A(353),Cf(0,1)]);e[158]=U(C,[A(354),GT(62,1)]);e[159]=U(C,[A(355),Cf(1,1)]);e[160]=U(C,[A(356),Cf(2,1)]);e[161]=U(C,[A(357),Cf(3,0)]);e[162]=U(C,[A(358),Cf(4,0)]);e[163]=U(C,[A(359),Cf(5,1)]);e[164]=U(C,[A(360),GT(448,1)]);e[165]
=U(C,[A(361),Cf(6,1)]);e[166]=U(C,[A(362),Cf(7,0)]);e[167]=U(C,[A(363),Cf(8,1)]);e[168]=U(C,[A(364),GT(3584,1)]);e[169]=U(C,[A(365),Cf(9,1)]);e[170]=U(C,[A(366),Cf(10,1)]);e[171]=U(C,[A(367),Cf(11,1)]);e[172]=U(C,[A(368),GT(28672,0)]);e[173]=U(C,[A(369),Cf(12,0)]);e[174]=U(C,[A(370),Cf(13,0)]);e[175]=U(C,[A(371),Cf(14,0)]);e[176]=U(C,[A(372),AGF(983040,1,1)]);e[177]=U(C,[A(373),Cf(15,0)]);e[178]=U(C,[A(374),Cf(16,1)]);e[179]=U(C,[A(375),Cf(18,1)]);e[180]=U(C,[A(376),AIC(19,0,1)]);e[181]=U(C,[A(377),GT(1643118592,
1)]);e[182]=U(C,[A(378),Cf(20,0)]);e[183]=U(C,[A(379),Cf(21,0)]);e[184]=U(C,[A(380),Cf(22,0)]);e[185]=U(C,[A(381),Cf(23,0)]);e[186]=U(C,[A(382),Cf(24,1)]);e[187]=U(C,[A(383),GT(2113929216,1)]);e[188]=U(C,[A(384),Cf(25,1)]);e[189]=U(C,[A(385),Cf(26,0)]);e[190]=U(C,[A(386),Cf(27,0)]);e[191]=U(C,[A(387),Cf(28,1)]);e[192]=U(C,[A(388),Cf(29,0)]);e[193]=U(C,[A(389),Cf(30,0)]);TT=d;};
function By(){let a=this;C.call(a);a.n4=null;a.p3=null;}
let AJS=a=>{return;},
AW4=(a,b)=>{if(!b&&a.n4===null)a.n4=a.fS();else if(b&&a.p3===null)a.p3=EQ(a.fS(),1);if(b)return a.p3;return a.n4;};
function OJ(){let a=this;HW.call(a);a.oC=0;a.oA=0;}
let MC=a=>{let b,c,d,e,f,g,h;b=a.oC;c=a.oA;if(c==2147483647)d=A(65);else{d=new Bb;d.jZ=G(20);d=(J(d,d.jY,c,10)).T();}e=new K;e.jZ=G(16);c=e.jY;Bk(e,c,c+1|0);e.jZ.data[c]=123;J(e,e.jY,b,10);b=e.jY;Bk(e,b,b+1|0);e.jZ.data[b]=44;f=e.jY;if(d===null)d=A(2);D(e,f,d);b=e.jY;Bk(e,b,b+1|0);g=e.jZ;h=g.data;h[b]=125;d=new I;b=e.jY;c=h.length;if(b>=0&&b<=(c-0|0)){d.j0=L(g.data,0,b);return d;}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);};
let Pq=F(Cd);
let AHJ=(a,b,c,d)=>{return b;},
ALV=a=>{return A(390);},
AL9=(a,b)=>{return 0;};
function Bn(){let a=this;C.call(a);a.ki=null;a.lO=0;}
let MZ=(a,b)=>{let c,d,e;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=b/32|0;if(b>=a.lO){Jv(a,d+1|0);a.lO=b+1|0;}e=a.ki.data;e[d]=e[d]|1<<(b%32|0);},
I0=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BT(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.lO){Jv(a,e+1|0);a.lO=c;}if(d==e){f=a.ki.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.ki.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new H;i.j1=1;i.j2=1;B(i);},
N2=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=b/32|0;e=a.ki.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.lO-1|0))If(a);}},
X_=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.lO;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.ki.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.ki.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}If(a);return;}i=new H;i.j1=1;i.j2=1;B(i);},
CL=(a,b)=>{let c,d,e;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=b/32|0;e=a.ki.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
Il=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=a.lO;if(b>=d)return (-1);e=b/32|0;f=a.ki.data;g=f[e]>>>(b%32|0)|0;if(g)return Eb(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Eb(f[g])|0;g=g+1|0;}return (-1);},
AMH=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new H;c.j1=1;c.j2=1;B(c);}d=a.lO;if(b>=d)return b;e=b/32|0;f=a.ki.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return Eb(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+Eb(f[h]^(-1))|0;h=h+1|0;}return d;},
Jv=(a,b)=>{let c,d,e,f,g,h;c=a.ki.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=X(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.ki=g;},
If=a=>{let b,c,d;b=(a.lO+31|0)/32|0;a.lO=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=O9(a.ki.data[c]);if(d<32)break;c=c+(-1)|0;a.lO=a.lO-32|0;}a.lO=a.lO-d|0;}},
Ju=(a,b)=>{let c,d,e,f,g;c=a.ki.data;d=c.length;e=b.ki.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
D0=(a,b)=>{let c,d,e,f,g,h,i;c=a.ki.data;d=c.length;e=b.ki.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.lO;i=b.lO;if(h<i)i=h;a.lO=i;If(a);},
G3=(a,b)=>{let c,d,e,f,g;c=a.ki.data;d=c.length;e=b.ki.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}If(a);},
GW=(a,b)=>{let c,d,e,f,g;c=a.lO;d=b.lO;if(c>d)d=c;a.lO=d;Jv(a,(d+31|0)/32|0);e=a.ki.data;c=e.length;f=b.ki.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
Gx=(a,b)=>{let c,d,e,f,g;c=a.lO;d=b.lO;if(c>d)d=c;a.lO=d;Jv(a,(d+31|0)/32|0);e=a.ki.data;c=e.length;f=b.ki.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}If(a);};
function Os(){let a=this;Cq.call(a);a.sq=null;a.tj=0;}
let AGa=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.mS;f=d.kP;g=b+1|0;f=BT(g,f);if(f>0){d.mH=1;return (-1);}if(b>=0&&b<c.j0.length){h=c.j0.charCodeAt(b);if(!a.sq.gg(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.j0.length){if((c.j0.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new W;c.j1=1;c.j2=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.j0.length){if(!((c.j0.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}}return a.j_.fJ(g,c,d);}c=new W;c.j1
=1;c.j2=1;B(c);},
AMj=a=>{let b,c,d,e,f,g,h,i;b=!a.tj?A(391):A(392);c=a.sq.T();d=new K;d.jZ=G(16);D(d,d.jY,A(393));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function Hr(){let a=this;Cq.call(a);a.pz=null;a.pp=null;}
let Zi=(a,b,c,d)=>{let e;e=a.pz.fJ(b,c,d);if(e<0)e=AGa(a.pp,b,c,d);if(e>=0)return e;return (-1);},
ALF=(a,b)=>{a.j_=b;a.pp.j_=b;a.pz.e9(b);},
AML=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.pz;c=a.pp;d=new K;d.jZ=G(16);D(d,d.jY,A(394));e=d.jY;if(b===null)b=A(2);else{f=b.kj;b=b.fK();g=new K;Ed(g);Gu(g,60);I1(g,f);Gu(g,58);I1(g,b);Gu(g,62);b=Ms(g);}D(d,e,b);D(d,d.jY,A(395));e=d.jY;if(c===null)b=A(2);else{b=c.kj;f=!c.tj?A(391):A(392);c=c.sq.T();g=Ep();Mn(Mn(Mn(g,A(393)),f),c);f=Ev(g);c=new K;Ed(c);Gu(c,60);I1(c,b);Gu(c,58);I1(c,f);Gu(c,62);b=Ms(c);}D(d,e,b);b=new I;h=d.jZ;i=h.data;j=d.jY;k=i.length;if(j>=0&&j<=(k-0|0)){b.j0=L(h.data,0,j);return b;}b=new H;b.j1=
1;b.j2=1;Bi(b);B(b);},
AAD=(a,b)=>{return 1;},
ZZ=(a,b)=>{return 1;};
function DT(){let a=this;Cq.call(a);a.mE=null;a.qc=0;}
let ADn=(a,b,c,d)=>{let e,f,g,h;a:{e=d.kP;if(b<e){f=b+1|0;if(b>=0&&b<c.j0.length){g=c.j0.charCodeAt(b);if(a.gg(g)){h=a.j_.fJ(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.j0.length){f=c.j0.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.gg(((g&1023)<<10|f&1023)+65536|0))break a;else return a.j_.fJ(e,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}}return (-1);},
AR1=a=>{let b,c,d,e,f,g,h,i;b=!a.qc?A(391):A(392);c=a.mE.T();d=new K;d.jZ=G(16);D(d,d.jY,A(393));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AEl=(a,b)=>{return a.mE.gg(b);},
Y$=(a,b)=>{let c,d;if(b instanceof Ew)return a.mE.gg(b.pQ);if(b instanceof Ec)return a.mE.gg(b.mv);if(b instanceof DT){c=a.mE;b=b.mE;return c.gd()!==null&&b.gd()!==null?Ju(c.gd(),b.gd()):1;}if(!(b instanceof Ef))return 1;c=a.mE;d=b.ng;return c.gd()!==null&&d.gd()!==null?Ju(c.gd(),d.gd()):1;},
AV1=a=>{return a.mE;},
APl=(a,b)=>{a.j_=b;},
ADF=(a,b)=>{return 1;};
let Kh=F(DT);
let AG6=(a,b)=>{let c;c=a.mE;if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}b=CC(B0,b);if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}return c.gg(CC(B1,b));},
ASw=a=>{let b,c,d,e,f,g,h,i;b=!a.qc?A(391):A(392);c=a.mE.T();d=new K;d.jZ=G(16);D(d,d.jY,A(396));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function KU(){let a=this;CD.call(a);a.st=null;a.t5=0;}
let AHM=(a,b,c)=>{let d;d=a.st;if(b>=0&&b<c.j0.length){b=c.j0.charCodeAt(b);if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}b=CC(B0,b)&65535;if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}return !d.gg(CC(B1,b)&65535)?(-1):1;}c=new W;c.j1=1;c.j2=1;B(c);},
AAg=a=>{let b,c,d,e,f,g,h,i;b=!a.t5?A(391):A(392);c=a.st.T();d=new K;d.jZ=G(16);D(d,d.jY,A(396));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function Ef(){let a=this;CD.call(a);a.ng=null;a.ux=0;}
let WO=(a,b,c)=>{let d;d=a.ng;if(b>=0&&b<c.j0.length)return !d.gg(c.j0.charCodeAt(b))?(-1):1;c=new W;c.j1=1;c.j2=1;B(c);},
AH4=a=>{let b,c,d,e,f,g,h,i;b=!a.ux?A(391):A(392);c=a.ng.T();d=new K;d.jZ=G(16);D(d,d.jY,A(393));D(d,d.jY,b);e=d.jY;if(c===null)c=A(2);D(d,e,c);b=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AL_=(a,b)=>{let c,d;if(b instanceof Ec)return a.ng.gg(b.mv);if(b instanceof Ef){c=a.ng;b=b.ng;return c.gd()!==null&&b.gd()!==null?Ju(c.gd(),b.gd()):1;}if(!(b instanceof DT)){if(!(b instanceof Ew))return 1;return 0;}c=a.ng;d=b.mE;return c.gd()!==null&&d.gd()!==null?Ju(c.gd(),d.gd()):1;};
function IH(){let a=this;Cq.call(a);a.oj=null;a.oa=null;a.rE=0;}
let AJb=(a,b)=>{a.j_=b;},
AOb=a=>{let b,c,d,e,f,g,h,i;if(a.oa===null){b=new I;c=a.oj;b.j0=L(c.data,0,c.data.length);a.oa=b;}d=a.oa;b=new K;b.jZ=G(16);D(b,b.jY,A(397));e=b.jY;if(d===null)d=A(2);D(b,e,d);f=new I;c=b.jZ;g=c.data;h=b.jY;i=g.length;if(h>=0&&h<=(i-0|0)){f.j0=L(c.data,0,h);return f;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
W_=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.kP;f=X(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.j0.length){j=c.j0.charCodeAt(b);k=ACn(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.rE;if(b!=m)return (-1);while(true){if(l>=m)return a.j_.fJ(i,c,d);if(f[l]!=a.oj.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.j0.length){j=c.j0.charCodeAt(i);g=j-4449|0;}else{c=new W;c.j1=1;c.j2=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.j0.length){j=c.j0.charCodeAt(b);h
=j-4519|0;}else{c=new W;c.j1=1;c.j2=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.rE==3){m=k[0];f=a.oj.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.j_.fJ(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.rE==2){m=k[0];f=a.oj.data;if(m==f[0]&&k[1]==f[1]){b=a.j_.fJ(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);},
AAp=(a,b)=>{let c,d,e;a:{if(b instanceof IH){b=b;if(b.oa===null){c=new I;d=b.oj;c.j0=L(d.data,0,d.data.length);b.oa=c;}c=b.oa;if(a.oa===null){b=new I;d=a.oj;b.j0=L(d.data,0,d.data.length);a.oa=b;}b=a.oa;if(c===b)e=1;else if(!(b instanceof I))e=0;else{b=b;e=c.j0!==b.j0?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AQt=(a,b)=>{return 1;};
function Ec(){CD.call(this);this.mv=0;}
let AHn=a=>{return 1;},
AFJ=(a,b,c)=>{let d;d=a.mv;if(b>=0&&b<c.j0.length)return d!=c.j0.charCodeAt(b)?(-1):1;c=new W;c.j1=1;c.j2=1;B(c);},
ADh=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof I){e=d.kP;while(true){if(b>=e)return (-1);f=HT(c,a.mv,b);if(f<0)return (-1);g=a.j_;b=f+1|0;if(g.fJ(b,c,d)>=0)break;}return f;}h=d.kP;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.kP){d.mH=1;e=(-1);}else{e=a.mv;if(b<0)break a;if(b>=c.j0.length)break a;e=e!=c.j0.charCodeAt(b)?(-1):1;e=e<0?(-1):a.j_.fJ(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new W;S(c);B(c);},
AHx=(a,b,c,d,e)=>{let f;if(d instanceof I){a:{while(true){if(c<b)return (-1);c=E1(d,a.mv,c);if(c<0)break a;if(c<b)break a;if(a.j_.fJ(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.kP){e.mH=1;f=(-1);}else{f=a.mv;if(c<0)break b;if(c>=d.j0.length)break b;f=f!=d.j0.charCodeAt(c)?(-1):1;f=f<0?(-1):a.j_.fJ(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new W;S(d);B(d);},
AQN=a=>{let b,c,d,e,f,g,h;b=a.mv;c=new K;c.jZ=G(16);d=c.jY;Bk(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
AQi=(a,b)=>{let c,d,e,f;if(b instanceof Ec)return b.mv!=a.mv?0:1;if(!(b instanceof Ef)){if(b instanceof DT)return b.gg(a.mv);if(!(b instanceof Ew))return 1;return 0;}b=b;c=a.mv;d=new I;e=G(1);f=e.data;f[0]=c;d.j0=L(e.data,0,f.length);b=b.ng;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}return (!b.gg(d.j0.charCodeAt(0))?(-1):1)<=0?0:1;};
function NE(){CD.call(this);this.rY=0;}
let WY=(a,b,c)=>{let d;d=a.rY;if(b>=0&&b<c.j0.length){b=c.j0.charCodeAt(b);if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}b=CC(B0,b)&65535;if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}return d!=(CC(B1,b)&65535)?(-1):1;}c=new W;c.j1=1;c.j2=1;B(c);},
ALC=a=>{let b,c,d,e,f,g,h;b=a.rY;c=new K;c.jZ=G(16);D(c,c.jY,A(398));d=c.jY;Bk(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
function Ke(){let a=this;CD.call(a);a.s7=0;a.tw=0;}
let XH=(a,b,c)=>{let d;d=a.s7;if(b>=0&&b<c.j0.length){a:{b:{if(d!=c.j0.charCodeAt(b)){d=a.tw;if(b<0)break a;if(b>=c.j0.length)break a;if(d!=c.j0.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
AF6=a=>{let b,c,d,e,f,g,h;b=a.s7;c=new K;c.jZ=G(16);D(c,c.jY,A(399));d=c.jY;Bk(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
function Fx(){let a=this;Cq.call(a);a.pm=0;a.nR=null;a.o5=null;a.o0=0;}
let ASk=(a,b)=>{a.j_=b;},
ALG=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=X(4);f=d.kP;if(b>=f)return (-1);g=LY(a,b,c,f);h=b+a.pm|0;i=QL.gv(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Du(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=LY(a,h,c,f);while(b<4){if(!AMi(g)){k=b+1|0;i[b]=g;}else{j=(QL.gv(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.pm|0;if(h>=f){b=k;break a;}g=LY(a,h,c,f);b=k;}}}if(b!=a.o0)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.j_.fJ(h,c,d);if(j[g]!=a.o5.data[g])break;g
=g+1|0;}return (-1);},
ALm=a=>{let b,c,d,e,f,g,h,i;if(a.nR===null){b=new K;b.jZ=G(16);c=0;while(c<a.o0){d=E$(a.o5.data[c]);e=d.data.length;Ko(b,b.jY,d,0,e);c=c+1|0;}f=new I;d=b.jZ;g=d.data;h=b.jY;e=g.length;if(h>=0&&h<=(e-0|0)){f.j0=L(d.data,0,h);a.nR=f;}else{b=new H;S(b);B(b);}}i=a.nR;b=new K;b.jZ=G(16);D(b,b.jY,A(400));c=b.jY;if(i===null)i=A(2);D(b,c,i);f=new I;d=b.jZ;g=d.data;h=b.jY;e=g.length;if(h>=0&&h<=(e-0|0)){f.j0=L(d.data,0,h);return f;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
LY=(a,b,c,d)=>{let e,f,g,h;a:{a.pm=1;if(b>=(d-1|0)){if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);break a;}c=new W;c.j1=1;c.j2=1;B(c);}d=b+1|0;if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);if(d>=0&&d<c.j0.length){f=c.j0.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=AAC(g,0,h.length);a.pm=2;}break a;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}return e;},
AHO=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof Fx){b=b;if(b.nR===null){c=new K;c.jZ=G(16);d=0;while(d<b.o0){e=E$(b.o5.data[d]);f=e.data.length;Ko(c,c.jY,e,0,f);d=d+1|0;}g=new I;e=c.jZ;h=e.data;i=c.jY;f=h.length;if(i>=0&&i<=(f-0|0)){g.j0=L(e.data,0,i);b.nR=g;}else{b=new H;S(b);B(b);}}g=b.nR;if(a.nR===null){b=new K;b.jZ=G(16);d=0;while(d<a.o0){e=E$(a.o5.data[d]);f=e.data.length;Ko(b,b.jY,e,0,f);d=d+1|0;}c=new I;e=b.jZ;h=e.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){c.j0=L(e.data,0,f);a.nR=c;}else{b=new H;S(b);B(b);}}b
=a.nR;if(g===b)d=1;else if(!(b instanceof I))d=0;else{b=b;d=g.j0!==b.j0?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
ANr=(a,b)=>{return 1;};
let V_=F(Fx);
let TG=F(Fx);
let WG=F(DK);
let ABP=(a,b,c,d)=>{let e;while(true){e=a.kK.fJ(b,c,d);if(e<=0)break;b=e;}return a.j_.fJ(b,c,d);};
let Qw=F(DK);
let AKe=(a,b,c,d)=>{let e;e=a.kK.fJ(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.kK.fJ(e,c,d);if(b<=e)break;e=b;}b=e;}return a.j_.fJ(b,c,d);};
let G0=F(DK);
let APe=(a,b,c,d)=>{let e;if(!a.kK.gj(d))return a.j_.fJ(b,c,d);e=a.kK.fJ(b,c,d);if(e>=0)return e;return a.j_.fJ(b,c,d);},
ARd=(a,b)=>{a.j_=b;a.kK.e9(b);};
let Qg=F(G0);
let AHv=(a,b,c,d)=>{let e;e=a.kK.fJ(b,c,d);if(e<=0)e=b;return a.j_.fJ(e,c,d);},
AKP=(a,b)=>{a.j_=b;};
function Gh(){let a=this;DK.call(a);a.nU=null;a.na=0;}
let ATB=(a,b,c,d)=>{let e,f,g,h;e=a.na;e=d.nz.data[e];if(!a.kK.gj(d))return a.j_.fJ(b,c,d);if(e>=a.nU.oA)return a.j_.fJ(b,c,d);f=a.na;e=e+1|0;d.nz.data[f]=e;g=a.kK.fJ(b,c,d);if(g>=0){b=a.na;d.nz.data[b]=0;return g;}g=a.na;e=e+(-1)|0;h=d.nz.data;h[g]=e;if(e>=a.nU.oC)return a.j_.fJ(b,c,d);h[g]=0;return (-1);},
ARn=a=>{return MC(a.nU);};
let OM=F(Gh);
let AGx=(a,b,c,d)=>{let e,f,g;e=0;f=a.nU.oA;a:{while(true){g=a.kK.fJ(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.nU.oC)return (-1);return a.j_.fJ(b,c,d);};
let R4=F(DK);
let ASA=(a,b,c,d)=>{let e;if(!a.kK.gj(d))return a.j_.fJ(b,c,d);e=a.j_.fJ(b,c,d);if(e>=0)return e;return a.kK.fJ(b,c,d);};
let Rd=F(G0);
let AAF=(a,b,c,d)=>{let e;if(!a.kK.gj(d))return a.j_.fJ(b,c,d);e=a.j_.fJ(b,c,d);if(e<0)e=a.kK.fJ(b,c,d);return e;};
let Uk=F(Gh);
let YK=(a,b,c,d)=>{let e,f,g;e=a.na;f=d.nz.data[e];if(!a.kK.gj(d))return a.j_.fJ(b,c,d);g=a.nU;if(f>=g.oA){e=a.na;d.nz.data[e]=0;return a.j_.fJ(b,c,d);}if(f<g.oC){e=a.na;d.nz.data[e]=f+1|0;e=a.kK.fJ(b,c,d);}else{e=a.j_.fJ(b,c,d);if(e>=0){b=a.na;d.nz.data[b]=0;return e;}e=a.na;d.nz.data[e]=f+1|0;e=a.kK.fJ(b,c,d);}return e;};
let R5=F(EG);
let ATe=(a,b,c,d)=>{let e;e=d.kP;if(e>b)return a.j_.f5(b,e,c,d);return a.j_.fJ(b,c,d);},
APx=(a,b,c,d)=>{let e;e=d.kP;if(a.j_.f5(b,e,c,d)>=0)return b;return (-1);},
AMT=a=>{return A(401);};
function Pz(){EG.call(this);this.sp=null;}
let AMb=(a,b,c,d)=>{let e,f,g;e=d.kP;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.sp;if(f<0)break;if(f>=c.j0.length)break;if(g.gz(c.j0.charCodeAt(f)))break a;f=f+1|0;}c=new W;c.j1=1;c.j2=1;B(c);}if(f>=0)e=f;if(e>b)return a.j_.f5(b,e,c,d);return a.j_.fJ(b,c,d);},
Xh=(a,b,c,d)=>{let e,f,g,h,i;e=d.kP;f=a.j_.fB(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.sp;if(g<0)break;if(g>=c.j0.length)break;if(h.gz(c.j0.charCodeAt(g)))break a;g=g+1|0;}c=new W;c.j1=1;c.j2=1;B(c);}if(g>=0)e=g;g=a.j_.f5(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.sp;if(i<0)break;if(i>=c.j0.length)break;if(d.gz(c.j0.charCodeAt(i)))break b;i=i+(-1)|0;}c=new W;c.j1=1;c.j2=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
AOk=a=>{return A(402);};
let HL=F();
let Gv=null,Gd=null;
let WI=F(DI);
let YP=(a,b,c,d)=>{let e;a:{while(true){if((b+a.k_.f2()|0)>d.kP)break a;e=a.k_.f3(b,c);if(e<1)break;b=b+e|0;}}return a.j_.fJ(b,c,d);};
let Vq=F(Fq);
let AJ9=(a,b,c,d)=>{let e;if((b+a.k_.f2()|0)<=d.kP){e=a.k_.f3(b,c);if(e>=1)b=b+e|0;}return a.j_.fJ(b,c,d);};
let P8=F(Fs);
let AOC=(a,b,c,d)=>{let e,f,g,h,i;e=a.pw;f=e.oC;g=e.oA;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.k_.f2()|0)>d.kP)break a;i=a.k_.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.j_.fJ(b,c,d);}if((b+a.k_.f2()|0)>d.kP){d.mH=1;return (-1);}i=a.k_.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let Q7=F(DI);
let AL3=(a,b,c,d)=>{let e;while(true){e=a.j_.fJ(b,c,d);if(e>=0)break;if((b+a.k_.f2()|0)<=d.kP){e=a.k_.f3(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let TJ=F(Fq);
let Y1=(a,b,c,d)=>{let e;e=a.j_.fJ(b,c,d);if(e>=0)return e;return a.kK.fJ(b,c,d);};
let RL=F(Fs);
let AOV=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pw;f=e.oC;g=e.oA;h=0;while(true){if(h>=f){a:{while(true){i=a.j_.fJ(b,c,d);if(i>=0)break;if((b+a.k_.f2()|0)<=d.kP){i=a.k_.f3(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.k_.f2()|0)>d.kP){d.mH=1;return (-1);}j=a.k_.f3(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let LR=F(Cd);
let AIA=(a,b,c,d)=>{if(b&&!(d.pj&&b==d.mS))return (-1);return a.j_.fJ(b,c,d);},
AGN=(a,b)=>{return 0;},
AJ$=a=>{return A(403);};
function Le(){Cd.call(this);this.u2=0;}
let ZW=(a,b,c,d)=>{let e,f,g;if(b>=d.kP)e=32;else if(b>=0&&b<c.j0.length)e=c.j0.charCodeAt(b);else{c=new W;c.j1=1;c.j2=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.j0.length)f=c.j0.charCodeAt(f);else{c=new W;c.j1=1;c.j2=1;B(c);}}g=d.sE?0:d.mS;return (e!=32&&!Rg(a,e,b,g,c)?0:1)^(f!=32&&!Rg(a,f,b-1|0,g,c)?0:1)^a.u2?(-1):a.j_.fJ(b,c,d);},
AAk=(a,b)=>{return 0;},
ATw=a=>{return A(404);},
Rg=(a,b,c,d,e)=>{let f;a:{b:{switch(CT(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CT(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.j0.length)break c;e:{f:{f=e.j0.charCodeAt(c);switch(CT(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(CT(f)!=6)return 1;}}return 1;}e=new W;e.j1=1;e.j2=1;B(e);}return 0;};
let Pt=F(Cd);
let AHa=(a,b,c,d)=>{if(b!=d.rK)return (-1);return a.j_.fJ(b,c,d);},
ATt=(a,b)=>{return 0;},
ZC=a=>{return A(405);};
function NC(){Cd.call(this);this.p7=0;}
let AM7=(a,b,c,d)=>{let e,f,g;e=!d.pj?c.j0.length:d.kP;if(b>=e){f=a.p7;d.lp.data[f]=0;return a.j_.fJ(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.j0.length){if(c.j0.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.j0.length){if(c.j0.charCodeAt(g)!=10)break a;f=a.p7;d.lp.data[f]=0;return a.j_.fJ(b,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.j0.length){f=c.j0.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new W;c.j1
=1;c.j2=1;B(c);}}return (-1);}e=a.p7;d.lp.data[e]=0;return a.j_.fJ(b,c,d);},
ABA=(a,b)=>{let c,d,e;c=a.p7;d=b.lp.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AJj=a=>{return A(406);};
let VE=F(Cd);
let ALu=(a,b,c,d)=>{if(b<(!d.sE?d.kP:c.j0.length))return (-1);d.mH=1;d.zU=1;return a.j_.fJ(b,c,d);},
WV=(a,b)=>{return 0;},
AFn=a=>{return A(407);};
function OU(){Cd.call(this);this.wF=null;}
let ABf=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.kP){if(!b)break b;if(d.pj&&b==d.mS)break b;e=a.wF;f=b-1|0;if(f>=0&&f<c.j0.length){f=c.j0.charCodeAt(f);if(b<0)break a;if(b>=c.j0.length)break a;if(!e.gB(f,c.j0.charCodeAt(b)))break c;else break b;}c=new W;c.j1=1;c.j2=1;B(c);}}return (-1);}return a.j_.fJ(b,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AET=(a,b)=>{return 0;},
Zc=a=>{return A(408);};
let VA=F(Cq);
let ASF=(a,b,c,d)=>{let e,f,g,h,i;e=d.kP;f=b+1|0;if(f>e){d.mH=1;return (-1);}if(b>=0&&b<c.j0.length){g=BT(c.j0.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.j0.length){h=c.j0.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.j_.fJ(i,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}}}return a.j_.fJ(f,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
ACJ=a=>{return A(409);},
AAs=(a,b)=>{a.j_=b;},
AKZ=a=>{return (-2147483602);},
AAq=(a,b)=>{return 1;};
function P2(){Cq.call(this);this.ue=null;}
let ALo=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.kP;f=b+1|0;if(f>e){d.mH=1;return (-1);}if(b>=0&&b<c.j0.length){g=c.j0.charCodeAt(b);h=BT(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.j0.length){i=c.j0.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.ue.gz(((g&1023)<<10|i&1023)+65536|0)?(-1):a.j_.fJ(j,c,d);}c=new W;c.j1=1;c.j2=1;B(c);}}}return a.ue.gz(g)?(-1):a.j_.fJ(f,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
ABN=a=>{return A(410);},
AOi=(a,b)=>{a.j_=b;},
WJ=a=>{return (-2147483602);},
AS9=(a,b)=>{return 1;};
function Vr(){Cd.call(this);this.sz=0;}
let AH0=(a,b,c,d)=>{let e,f;e=!d.pj?c.j0.length:d.kP;if(b>=e){e=a.sz;d.lp.data[e]=0;return a.j_.fJ(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.j0.length){if(c.j0.charCodeAt(b)!=10)break a;else{f=a.sz;d.lp.data[f]=1;return a.j_.fJ(b+1|0,c,d);}}c=new W;c.j1=1;c.j2=1;B(c);}}return (-1);},
AEt=(a,b)=>{let c,d,e;c=a.sz;d=b.lp.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AIN=a=>{return A(406);};
function SZ(){Cd.call(this);this.sH=0;}
let ALs=(a,b,c,d)=>{let e;if((!d.pj?c.j0.length-b|0:d.kP-b|0)<=0){e=a.sH;d.lp.data[e]=0;return a.j_.fJ(b,c,d);}if(b>=0&&b<c.j0.length){if(c.j0.charCodeAt(b)!=10)return (-1);e=a.sH;d.lp.data[e]=1;return a.j_.fJ(b+1|0,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AEf=(a,b)=>{let c,d,e;c=a.sH;d=b.lp.data;e=!d[c]?0:1;d[c]=(-1);return e;},
Yi=a=>{return A(411);};
function Oj(){Cd.call(this);this.qE=0;}
let AGE=(a,b,c,d)=>{let e,f,g;e=!d.pj?c.j0.length-b|0:d.kP-b|0;if(!e){e=a.qE;d.lp.data[e]=0;return a.j_.fJ(b,c,d);}a:{if(e<2){if(b>=0&&b<c.j0.length){f=c.j0.charCodeAt(b);g=97;break a;}c=new W;c.j1=1;c.j2=1;B(c);}if(b>=0&&b<c.j0.length){f=c.j0.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.j0.length){g=c.j0.charCodeAt(e);break a;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.qE;d.lp.data[e]=0;return a.j_.fJ(b,c,d);case 13:if(g!=10){e=a.qE;d.lp.data[e]=0;return a.j_.fJ(b,
c,d);}e=a.qE;d.lp.data[e]=0;return a.j_.fJ(b,c,d);default:}return (-1);},
ABF=(a,b)=>{let c,d,e;c=a.qE;d=b.lp.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AEX=a=>{return A(412);};
function GP(){let a=this;Cq.call(a);a.qW=0;a.pC=0;}
let YT=(a,b,c,d)=>{let e,f,g,h,i;e=IL(a,d);if(e!==null&&(b+e.j0.length|0)<=d.kP){f=0;a:{b:{c:{d:{while(true){if(f>=e.j0.length){g=a.pC;d.lp.data[g]=e.j0.length;return a.j_.fJ(b+e.j0.length|0,c,d);}if(f<0)break c;if(f>=e.j0.length)break c;h=e.j0.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.j0.length)break d;if(h!=c.j0.charCodeAt(i)){if(f<0)break a;if(f>=e.j0.length)break a;g=Gc(e.j0.charCodeAt(f));if(i<0)break b;if(i>=c.j0.length)break b;if(g!=c.j0.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new W;c.j1=1;c.j2
=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}return (-1);},
ANl=(a,b)=>{a.j_=b;},
IL=(a,b)=>{let c,d,e,f,g;c=a.qW;d=b.lW.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.qd.j0.length?Cj(b.qd,f,g):null;},
Yq=a=>{let b,c,d,e,f,g,h;b=a.lt;c=new K;c.jZ=G(16);D(c,c.jY,A(413));J(c,c.jY,b,10);d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
ANT=(a,b)=>{let c,d,e;c=a.pC;d=b.lp.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Vy=F(GP);
let ABO=(a,b,c,d)=>{let e,f,g;e=IL(a,d);if(e!==null&&(b+e.j0.length|0)<=d.kP){f=!MT(c,e,b)?(-1):e.j0.length;if(f<0)return (-1);g=a.pC;d.lp.data[g]=f;return a.j_.fJ(b+f|0,c,d);}return (-1);},
AQC=(a,b,c,d)=>{let e,f,g;e=IL(a,d);f=d.mS;if(e!==null&&(b+e.j0.length|0)<=f){while(true){if(b>f)return (-1);g=Qy(c,e,b);if(g<0)return (-1);if(a.j_.fJ(g+e.j0.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
Yk=(a,b,c,d,e)=>{let f,g;f=IL(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=ADd(d,f,c);if(g<0)break a;if(g<b)break a;if(a.j_.fJ(g+f.j0.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AJX=(a,b)=>{return 1;},
AQ$=a=>{let b,c,d,e,f,g,h;b=a.lt;c=new K;c.jZ=G(16);D(c,c.jY,A(414));J(c,c.jY,b,10);d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
function RD(){GP.call(this);this.yr=0;}
let AI0=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.qW;f=d.lW.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.qd.j0.length?Cj(d.qd,h,i):null;if(j!==null&&(b+j.j0.length|0)<=d.kP){i=0;a:{b:{while(true){if(i>=j.j0.length){e=a.pC;d.lp.data[e]=j.j0.length;return a.j_.fJ(b+j.j0.length|0,c,d);}if(i<0)break a;if(i>=j.j0.length)break a;e=j.j0.charCodeAt(i);if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}e=CC(B0,e)&65535;if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value)
:null)));}g=CC(B1,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.j0.length)break b;e=c.j0.charCodeAt(h);if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}e=CC(B0,e)&65535;if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}if(g!=(CC(B1,e)&65535))break;i=i+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}return (-1);},
AAl=a=>{let b,c,d,e,f,g,h;b=a.yr;c=new K;c.jZ=G(16);D(c,c.jY,A(415));J(c,c.jY,b,10);d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);return d;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
let Pp=F(Bb);
let AD5=(a,b,c,d,e)=>{let f,g,h,i;Bk(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jZ.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Z3=(a,b,c,d)=>{let e,f,g,h,i;e=a.jY;Bk(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jZ.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
AAP=(a,b)=>{IC(a,b);},
APC=(a,b,c)=>{Bk(a,b,b+1|0);a.jZ.data[b]=c;return a;};
function R$(){let a=this;CD.call(a);a.me=null;a.tP=null;a.uo=null;}
let ACl=(a,b)=>{let c,d,e,f,g,h;c=O;O=c+1|0;d=new Bb;d.jZ=G(20);a.kj=(J(d,d.jY,c,10)).T();a.kV=1;d=new I;e=b.jZ;f=e.data;g=b.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);a.me=d;c=b.jY;a.kV=c;a.tP=Tp(c);a.uo=Tp(a.kV);c=0;a:{b:{while(c<(a.kV-1|0)){b=a.tP;d=a.me;if(c<0)break a;if(c>=d.j0.length)break a;RO(b,d.j0.charCodeAt(c),(a.kV-c|0)-1|0);b=a.uo;d=a.me;g=(a.kV-c|0)-1|0;if(g<0)break b;if(g>=d.j0.length)break b;RO(b,d.j0.charCodeAt(g),(a.kV-c|0)-1|0);c=c+1|0;}return;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1
=1;b.j2=1;B(b);}b=new H;b.j1=1;b.j2=1;B(b);},
AGJ=a=>{let b=new R$();ACl(b,a);return b;},
ACq=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.kV){e=d+b|0;if(e<0)break a;if(e>=c.j0.length)break a;f=c.j0.charCodeAt(e);g=a.me;if(d<0)break b;if(d>=g.j0.length)break b;if(f!=g.j0.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.kV;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
ZO=(a,b,c,d)=>{let e,f;e=d.kP;while(true){if(b>e)return (-1);f=AQQ(a,c,b,e);if(f<0)return (-1);if(a.j_.fJ(f+a.kV|0,c,d)>=0)break;b=f+1|0;}return f;},
AEM=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=APD(a,d,b,c);if(c<0)return (-1);if(a.j_.fJ(c+a.kV|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
ALO=a=>{let b,c,d,e,f,g,h;b=a.me;c=new K;c.jZ=G(16);D(c,c.jY,A(416));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AFV=(a,b)=>{let c,d,e;if(b instanceof Ec){c=b.mv;b=a.me;if(0<b.j0.length)return c!=b.j0.charCodeAt(0)?0:1;b=new W;b.j1=1;b.j2=1;B(b);}if(b instanceof Ef){b=b;d=Cj(a.me,0,1);b=b.ng;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}return (!b.gg(d.j0.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof DT)){if(!(b instanceof Ew))return 1;a:{if(a.me.j0.length>1){e=b.pQ;b=a.me;if(0>=b.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}c=b.j0.charCodeAt(0);b=a.me;if(1>=b.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}if(e==(((c&1023)<<10|
b.j0.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.me;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}b:{c:{if(!b.gg(d.j0.charCodeAt(0))){if(a.me.j0.length<=1)break c;d=a.me;if(0>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}c=d.j0.charCodeAt(0);d=a.me;if(1>=d.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}if(!b.gg(((c&1023)<<10|d.j0.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AQQ=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.me;f=a.kV-1|0;if(f>=0&&f<e.j0.length){g=e.j0.charCodeAt(f);a:{b:{c:{while(true){f=a.kV;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.j0.length)break c;h=b.j0.charCodeAt(f);if(h==g){f=0;d:{while(f<a.kV){i=f+c|0;if(i<0)break a;if(i>=b.j0.length)break a;j=b.j0.charCodeAt(i);e=a.me;if(f<0)break b;if(f>=e.j0.length)break b;if(j!=e.j0.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+ST(a.tP,h)|0;}return c;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2
=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);},
APD=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.me;if(0>=e.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}f=e.j0.charCodeAt(0);g=(b.j0.length-d|0)-a.kV|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.j0.length)break c;h=b.j0.charCodeAt(d);if(h==f){g=0;d:{while(g<a.kV){i=g+d|0;if(i<0)break a;if(i>=b.j0.length)break a;j=b.j0.charCodeAt(i);e=a.me;if(g<0)break b;if(g>=e.j0.length)break b;if(j!=e.j0.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-ST(a.uo,h)|0;}return d;}b=new W;b.j1=1;b.j2
=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);};
function Og(){CD.call(this);this.rm=null;}
let AI$=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.rm.j0.length)return a.rm.j0.length;e=a.rm;if(d<0)break a;if(d>=e.j0.length)break a;f=e.j0.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.j0.length)break b;h=c.j0.charCodeAt(g);if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}h=CC(B0,h)&65535;if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}if(f!=(CC(B1,h)&65535))break;d=d+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2
=1;B(c);},
AF7=a=>{let b,c,d,e,f,g,h;b=a.rm;c=new K;c.jZ=G(16);D(c,c.jY,A(417));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function OQ(){CD.call(this);this.qa=null;}
let AOE=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.qa.j0.length)return a.qa.j0.length;e=a.qa;if(d<0)break c;if(d>=e.j0.length)break c;f=e.j0.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.j0.length)break d;if(f!=c.j0.charCodeAt(g)){e=a.qa;if(d<0)break a;if(d>=e.j0.length)break a;h=Gc(e.j0.charCodeAt(d));if(g<0)break b;if(g>=c.j0.length)break b;if(h!=c.j0.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=
1;c.j2=1;B(c);},
AQo=a=>{let b,c,d,e,f,g,h;b=a.qa;c=new K;c.jZ=G(16);D(c,c.jY,A(418));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
let ATS=F();
function Oe(){CD.call(this);this.t_=0;}
let AOI=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);if(d>=0&&d<c.j0.length){d=c.j0.charCodeAt(d);b=a.t_;d=((e&1023)<<10|d&1023)+65536|0;if(B0===null){if(BM===null)BM=DX();B0=Cz(CE((BM.value!==null?T(BM.value):null)));}d=CC(B0,d);if(B1===null){if(BN===null)BN=DV();B1=Cz(CE((BN.value!==null?T(BN.value):null)));}return b!=CC(B1,d)?(-1):2;}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
ATu=a=>{let b,c,d,e,f,g;b=new I;c=E$(a.t_);b.j0=L(c.data,0,c.data.length);d=new K;d.jZ=G(16);D(d,d.jY,A(398));D(d,d.jY,b);b=new I;c=d.jZ;e=c.data;f=d.jY;g=e.length;if(f>=0&&f<=(g-0|0)){b.j0=L(c.data,0,f);return b;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function HO(){Cq.call(this);this.oJ=0;}
let ALZ=(a,b)=>{a.j_=b;},
K3=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.kP){d.mH=1;return (-1);}if(b>=0&&b<c.j0.length){a:{f=c.j0.charCodeAt(b);if(b>d.mS){b=b-1|0;if(b>=0&&b<c.j0.length){if(!((c.j0.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}}if(a.oJ!=f)return (-1);return a.j_.fJ(e,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AFP=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof I)){e=d.kP;a:{while(true){if(b>e){b=(-1);break a;}if(K3(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.mS;g=d.kP;b:{while(true){if(b>=g)return (-1);h=HT(c,a.oJ,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.j0.length)break b;if((c.j0.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.j_;b=h+1|0;if(i.fJ(b,c,d)>=0)break;}return h;}c=new W;c.j1=1;c.j2=1;B(c);},
ACG=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(K3(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.mS;b:{c:{while(true){if(c<b)return (-1);g=E1(d,a.oJ,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.j0.length)break b;if((d.j0.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.j_.fJ(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new W;d.j1=1;d.j2=1;B(d);},
APP=a=>{let b,c,d,e,f,g,h;b=a.oJ;c=new K;c.jZ=G(16);d=c.jY;Bk(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
X$=(a,b)=>{if(b instanceof Ec)return 0;if(b instanceof Ef)return 0;if(b instanceof DT)return 0;if(b instanceof Ew)return 0;if(b instanceof HU)return 0;if(!(b instanceof HO))return 1;return b.oJ!=a.oJ?0:1;},
AP5=(a,b)=>{return 1;};
function HU(){Cq.call(this);this.oq=0;}
let AAM=(a,b)=>{a.j_=b;},
Kf=(a,b,c,d)=>{let e,f,g;e=d.kP;f=b+1|0;e=BT(f,e);if(e>0){d.mH=1;return (-1);}if(b>=0&&b<c.j0.length){a:{g=c.j0.charCodeAt(b);if(e<0){if(f>=0&&f<c.j0.length){if(!((c.j0.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}}if(a.oq!=g)return (-1);return a.j_.fJ(f,c,d);}c=new W;c.j1=1;c.j2=1;B(c);},
AMA=(a,b,c,d)=>{let e,f;if(!(c instanceof I)){e=d.kP;a:{while(true){if(b>e){b=(-1);break a;}if(Kf(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.kP;b:{while(true){if(b>=e)return (-1);f=HT(c,a.oq,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.j0.length)break b;if((c.j0.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.j_.fJ(b,c,d)>=0)break;}return f;}c=new W;c.j1=1;c.j2=1;B(c);},
AOD=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(Kf(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.kP;b:{c:{while(true){if(c<b)return (-1);g=E1(d,a.oq,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.j0.length)break b;if((d.j0.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.j_.fJ(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new W;d.j1=1;d.j2=1;B(d);},
ASD=a=>{let b,c,d,e,f,g,h;b=a.oq;c=new K;c.jZ=G(16);d=c.jY;Bk(c,d,d+1|0);e=c.jZ;f=e.data;f[d]=b;g=new I;d=c.jY;h=f.length;if(d>=0&&d<=(h-0|0)){g.j0=L(e.data,0,d);return g;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
ACv=(a,b)=>{if(b instanceof Ec)return 0;if(b instanceof Ef)return 0;if(b instanceof DT)return 0;if(b instanceof Ew)return 0;if(b instanceof HO)return 0;if(!(b instanceof HU))return 1;return b.oq!=a.oq?0:1;},
AMM=(a,b)=>{return 1;};
function Ew(){let a=this;CD.call(a);a.pG=0;a.pd=0;a.pQ=0;}
let ANU=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.j0.length){e=c.j0.charCodeAt(b);if(d>=0&&d<c.j0.length){d=c.j0.charCodeAt(d);return a.pG==e&&a.pd==d?2:(-1);}c=new W;c.j1=1;c.j2=1;B(c);}c=new W;c.j1=1;c.j2=1;B(c);},
AKI=(a,b,c,d)=>{let e,f,g,h;if(c instanceof I){e=d.kP;a:{while(b<e){b=HT(c,a.pG,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.j0.length)break a;f=c.j0.charCodeAt(b);if(a.pd==f&&a.j_.fJ(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new W;c.j1=1;c.j2=1;B(c);}g=d.kP;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.kV|0)>d.kP){d.mH=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.j0.length)break b;e=c.j0.charCodeAt(b);if(h<0)break c;if(h>=c.j0.length)break c;f=c.j0.charCodeAt(h);h
=a.pG==e&&a.pd==f?2:(-1);h=h<0?(-1):a.j_.fJ(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new W;S(c);B(c);}c=new W;S(c);B(c);},
AAK=(a,b,c,d,e)=>{let f,g,h;if(d instanceof I){a:{b:{while(true){if(c<b)return (-1);c=E1(d,a.pd,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.pG;if(c<0)break a;if(c>=d.j0.length)break a;if(f==d.j0.charCodeAt(c)&&a.j_.fJ(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new W;d.j1=1;d.j2=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.kV|0)>e.kP){e.mH=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.j0.length)break c;h=d.j0.charCodeAt(c);if(g<0)break d;if(g>=d.j0.length)break d;g=d.j0.charCodeAt(g);f
=a.pG==h&&a.pd==g?2:(-1);f=f<0?(-1):a.j_.fJ(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new W;S(d);B(d);}d=new W;S(d);B(d);},
ARe=a=>{let b,c,d,e,f,g,h;b=a.pG;c=a.pd;d=new K;d.jZ=G(16);e=d.jY;Bk(d,e,e+1|0);d.jZ.data[e]=b;b=d.jY;Bk(d,b,b+1|0);f=d.jZ;g=f.data;g[b]=c;h=new I;c=d.jY;e=g.length;if(c>=0&&c<=(e-0|0)){h.j0=L(f.data,0,c);return h;}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);},
ANw=(a,b)=>{if(b instanceof Ew)return b.pQ!=a.pQ?0:1;if(b instanceof DT)return b.gg(a.pQ);if(b instanceof Ec)return 0;if(!(b instanceof Ef))return 1;return 0;};
let JD=F(HL);
let AAY=(a,b)=>{return b!=10?0:1;},
ANG=(a,b,c)=>{return b!=10?0:1;};
let JE=F(HL);
let AOY=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AR6=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function Uj(){let a=this;C.call(a);a.ve=null;a.tn=null;a.q2=0;a.xX=0;}
let AG8=(a,b)=>{let c,d;while(true){c=a.q2;if(b<c)break;a.q2=c<<1|1;}d=c<<1|1;a.q2=d;d=d+1|0;a.ve=X(d);a.tn=X(d);a.xX=b;},
Tp=a=>{let b=new Uj();AG8(b,a);return b;},
RO=(a,b,c)=>{let d,e,f,g;d=0;e=a.q2;f=b&e;while(true){g=a.ve.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.tn.data[f]=c;},
ST=(a,b)=>{let c,d,e,f;c=a.q2;d=b&c;e=0;while(true){f=a.ve.data[d];if(!f)break;if(f==b)return a.tn.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xX;};
let Jn=F(By);
let AGh=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return C6(BX(b,9,13),32);};
let IN=F(By);
let AI2=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(b,48,57);};
let T6=F(By);
let AOo=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(b,97,122);};
let UH=F(By);
let AP6=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(b,65,90);};
let UM=F(By);
let ADo=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(b,0,127);};
let Jh=F(By);
let ABu=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(BX(b,97,122),65,90);};
let JA=F(Jh);
let AEn=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(BX(BX(b,97,122),65,90),48,57);};
let Wz=F(By);
let AFO=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(BX(BX(b,33,64),91,96),123,126);};
let Ka=F(JA);
let W2=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(BX(BX(BX(BX(BX(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let R7=F(Ka);
let AJN=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return C6(BX(BX(BX(BX(BX(BX(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let Sz=F(By);
let ACi=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return C6(C6(b,32),9);};
let Qs=F(By);
let AJF=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return C6(BX(b,0,31),127);};
let Qd=F(By);
let AR_=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(BX(BX(b,48,57),97,102),65,70);};
let UR=F(By);
let AKV=a=>{let b,c;b=new S4;b.zn=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let WH=F(By);
let Xb=a=>{let b,c;b=new Op;b.zs=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let Ui=F(By);
let AGI=a=>{let b,c;b=new So;b.y6=a;c=new Bn;c.ki=X(64);b.kl=c;return b;};
let TX=F(By);
let ANY=a=>{let b,c;b=new Sn;b.yX=a;c=new Bn;c.ki=X(64);b.kl=c;return b;};
let Vh=F(By);
let ACg=a=>{let b,c;b=new VL;b.zX=a;c=new Bn;c.ki=X(64);b.kl=c;I0(c,0,2048);b.lg=1;return b;};
let Pa=F(By);
let ACR=a=>{let b,c;b=new P3;b.zC=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let OK=F(By);
let ARX=a=>{let b,c;b=new Pl;b.Ag=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let Up=F(By);
let WZ=a=>{let b,c;b=new Rp;b.zo=a;c=new Bn;c.ki=X(64);b.kl=c;return b;};
let UA=F(By);
let AIc=a=>{let b,c;b=new Ol;b.x9=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let QO=F(By);
let AC5=a=>{let b,c;b=new Oo;b.zE=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let SE=F(By);
let AEY=a=>{let b,c;b=new Pe;b.zW=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let Wa=F(By);
let AIi=a=>{let b,c;b=new Qk;b.z$=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let Ux=F(By);
let AQv=a=>{let b,c;b=new Qp;b.y7=a;c=new Bn;c.ki=X(64);b.kl=c;return b;};
let Rw=F(By);
let AMZ=a=>{let b,c;b=new Tw;b.zH=a;c=new Bn;c.ki=X(64);b.kl=c;return b;};
let QN=F(By);
let AKK=a=>{let b,c;b=new SM;b.yb=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let WD=F(By);
let AOd=a=>{let b,c;b=new OB;b.Ao=a;c=new Bn;c.ki=X(64);b.kl=c;b.lg=1;return b;};
let Ix=F(By);
let AIF=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return C6(BX(BX(BX(b,97,122),65,90),48,57),95);};
let Vm=F(Ix);
let AKj=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;b=EQ(C6(BX(BX(BX(b,97,122),65,90),48,57),95),1);b.lg=1;return b;};
let R_=F(Jn);
let ZL=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;b=EQ(C6(BX(b,9,13),32),1);b.lg=1;return b;};
let QI=F(IN);
let AFD=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;b=EQ(BX(b,48,57),1);b.lg=1;return b;};
function Bv(){let a=this;By.call(a);a.kt=0;a.ku=0;}
let ARU=(a,b,c)=>{a.kt=b;a.ku=c;},
BH=(a,b)=>{let c=new Bv();ARU(c,a,b);return c;},
AIJ=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(b,a.kt,a.ku);};
let QE=F(By);
let ARH=a=>{let b,c;b=new CM;c=new Bn;c.ki=X(64);b.kl=c;c=new Bn;c.ki=X(2);b.kn=c;return BX(BX(b,65279,65279),65520,65533);};
function LV(){let a=this;By.call(a);a.uT=0;a.tf=0;a.vX=0;}
let ABE=(a,b,c)=>{a.tf=c;a.uT=b;},
Cf=(a,b)=>{let c=new LV();ABE(c,a,b);return c;},
ARW=(a,b,c,d)=>{a.vX=d;a.tf=c;a.uT=b;},
AIC=(a,b,c)=>{let d=new LV();ARW(d,a,b,c);return d;},
AD9=a=>{let b,c,d;b=new J2;c=a.uT;d=new Bn;d.ki=X(64);b.kl=d;b.sJ=c;if(a.vX)I0(d,0,2048);b.lg=a.tf;return b;};
function L1(){let a=this;By.call(a);a.uR=0;a.tp=0;a.vA=0;}
let AC6=(a,b,c)=>{a.tp=c;a.uR=b;},
GT=(a,b)=>{let c=new L1();AC6(c,a,b);return c;},
W1=(a,b,c,d)=>{a.vA=d;a.tp=c;a.uR=b;},
AGF=(a,b,c)=>{let d=new L1();W1(d,a,b,c);return d;},
W0=a=>{let b,c,d;b=new Sd;c=a.uR;d=new Bn;d.ki=X(64);b.kl=d;b.sJ=c;if(a.vA)I0(d,0,2048);b.lg=a.tp;return b;};
let D4=F(Bw);
let YD=F();
let ACw=F();
let AAE=F();
let ASn=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new Na;d=G(b.j0.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.tI=d;f=F$(c);d=X(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=F$(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=F$(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.j0.length)break;e[f]=b.j0.charCodeAt(f);f=f+1|0;}b=new W;b.j1=1;b.j2=1;B(b);},
CE=b=>{let c,d,e,f,g,h,i,j,k,l;c=new Na;d=G(b.j0.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.tI=d;f=F$(c);d=X(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+F$(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=F$(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.j0.length)break;e[f]=b.j0.charCodeAt(f);f=f+1|0;}b=new W;b.j1=1;b.j2=1;B(b);},
Cz=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=X(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bm;l.j1=1;l.j2=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new UV;l.wD=b;l.wR=c;return l;},
I8=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
ATN=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=Q(Iw,16384);d=c.data;e=BJ(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.j0.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BE;b.kb=j;k=b;j.classObject=k;}}b=Ek(b);if(b===null){b=new Dm;b.j1=1;b.j2=1;B(b);}if(b===M(Bh)){b=new Bm;b.j1=1;b.j2=1;B(b);}if(g<0){b=new D4;b.j1=1;b.j2=1;B(b);}k=D1(b.kb,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.j0.length)break c;l=I8(b.j0.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.j0.length)break b;l=I8(b.j0.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.j0.length)break a;m=m|Dr(n,I8(b.j0.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.j0.length)break;m=I8(b.j0.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new Iw;l=h+f|0;q=BJ(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.tW=h;j.ul=l;j.t0=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new Iw;t=h+f|0;q=BJ(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.tW=h;j.ul=t;j.t0=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);}b=new W;b.j1=1;b.j2=1;B(b);};
function UV(){let a=this;C.call(a);a.wD=null;a.wR=null;}
function Iw(){let a=this;C.call(a);a.tW=0;a.ul=0;a.t0=null;}
function Na(){let a=this;C.call(a);a.tI=null;a.ws=0;}
let AFL=F();
let F$=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.tI.data;f=b.ws;b.ws=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Dr(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AOp=F();
function QZ(){let a=this;DM.call(a);a.vS=null;a.vP=0;a.qQ=null;}
let APy=(a,b)=>{return;},
AC9=(a,b)=>{let c,d,e,f,g,h;if(BU===null){b=new CJ;c=new Ci;c.lB=BJ(32);b.lX=c;c=new K;Bp(c);c.jZ=G(16);b.lF=c;b.lD=G(32);b.lG=0;b.lI=Cg;BU=b;}b=a.vS;c=new K;c.jZ=G(16);D(c,c.jY,A(419));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BV(Bx(b));BV("\n");return;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
YQ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(Kz(IR(A(114),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.qQ;b.ua=b.sg.j4;if(a.vP){e=0;while(true){b=a.qQ;c=b.sg;f=BT(e,c.j4);if(f>=0)break a;if(f>=0){g=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;d=b.jZ;h=d.data;f=b.jY;i=h.length;if(f>=0&&f<=(i-0|0)){c.j0=L(d.data,0,f);g.j1=1;g.j2=1;g.j3=c;B(g);}b=new H;S(b);B(b);}AGb(b,c.j8.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(Kz(IR(A(112),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AHZ(h[1]);b=h[2];if(b===null){b=new CA;b.j1=1;b.j2=1;b.j3=A(79);B(b);}m=APY(b,0,b.j0.length,10);n=h[3];o=FO;if(k===A(420))i=1;else if(!(A(420) instanceof I))i=0;else{b=A(420);i=k.j0!==b.j0?0:1;}if(i)o=FE;if(k===A(421))i=1;else if(!(A(421) instanceof I))i=0;else{b=A(421);i=k.j0!==b.j0?0:1;}if(i)o=Fu;if(k===A(422))i=1;else if(!(A(422) instanceof I))i=0;else{b=A(422);i=k.j0!==b.j0?0:1;}if(i)o=Fn;if(k===A(230))i=1;else if(!(A(230) instanceof I))i=0;else{b=A(230);i=k.j0!==b.j0?0:1;}if(i)o=JZ;if
(o===Fn&&!Gz.xq)m=Cc;g=new SP;g.t4=l;g.v3=o;g.xI=m;g.vU=n;B6(a.qQ.wh,l,l);Bg(a.qQ.sg,g);f=f+1|0;}b=new R;b.j1=1;b.j2=1;b.j3=A(423);B(b);},
AKw=(a,b,c)=>{return YQ(a,b,c);};
let CP=F(BG);
let AA0=null,AK3=null,ACc=null,ACb=null,AA6=null,AAI=null,Z7=null,AB1=null,ZM=null,AHG=null;
let II=()=>{II=BQ(CP);Yv();};
let Yv=()=>{let b,c,d,e,f,g,h,i,j;b=new Va;II();b.kg=A(424);b.ka=0;AA0=b;c=new Vb;c.kg=A(425);c.ka=1;AK3=c;d=new Vf;d.kg=A(426);d.ka=2;ACc=d;e=new Vg;e.kg=A(427);e.ka=3;ACb=e;f=new Vd;f.kg=A(428);f.ka=4;AA6=f;g=new Ve;g.kg=A(429);g.ka=5;AAI=g;h=new U$;h.kg=A(430);h.ka=6;Z7=h;i=new U_;i.kg=A(431);i.ka=7;AB1=i;j=new U8;j.kg=A(432);j.ka=8;ZM=j;AHG=U(CP,[b,c,d,e,f,g,h,i,j]);};
function FN(){let a=this;HE.call(a);a.pl=0;a.m_=null;}
let AS4=F(0);
let AAe=b=>{let c,d;if(b===A(433))c=1;else if(!(A(433) instanceof I))c=0;else{d=A(433);c=b.j0!==d.j0?0:1;}a:{if(!c){if(b===A(434))c=1;else if(!(A(434) instanceof I))c=0;else{d=A(434);c=b.j0!==d.j0?0:1;}if(!c){if(b===A(435))c=1;else if(!(A(435) instanceof I))c=0;else{d=A(435);c=b.j0!==d.j0?0:1;}if(!c){if(b===A(436))c=1;else if(!(A(436) instanceof I))c=0;else{d=A(436);c=b.j0!==d.j0?0:1;}if(!c){if(b===A(437))c=1;else if(!(A(437) instanceof I))c=0;else{d=A(437);c=b.j0!==d.j0?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AGk=b=>{let c,d;if(b===A(438))c=1;else if(!(A(438) instanceof I))c=0;else{d=A(438);c=b.j0!==d.j0?0:1;}a:{b:{if(c)break b;if(b===A(439))c=1;else if(!(A(439) instanceof I))c=0;else{d=A(439);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(440))c=1;else if(!(A(440) instanceof I))c=0;else{d=A(440);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(441))c=1;else if(!(A(441) instanceof I))c=0;else{d=A(441);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof I))c=0;else{d=A(442);c=b.j0!==d.j0?0:1;}if(c)break b;if
(b===A(443))c=1;else if(!(A(443) instanceof I))c=0;else{d=A(443);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(444))c=1;else if(!(A(444) instanceof I))c=0;else{d=A(444);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(445))c=1;else if(!(A(445) instanceof I))c=0;else{d=A(445);c=b.j0!==d.j0?0:1;}if(c)break b;if(b===A(446))c=1;else if(!(A(446) instanceof I))c=0;else{d=A(446);c=b.j0!==d.j0?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let T8=F(0);
let QC=F();
let ARO=(a,b,c)=>{a.gN(T(b),DA(c,"handleEvent"));},
AK9=(a,b)=>{return !!a.gO(b);},
AAN=(a,b,c)=>{a.gP(T(b),DA(c,"handleEvent"));},
AHA=(a,b,c,d)=>{a.gQ(T(b),DA(c,"handleEvent"),d?1:0);},
AO7=(a,b,c,d)=>{a.gR(T(b),DA(c,"handleEvent"),d?1:0);};
function MK(){let a=this;C.call(a);a.tV=null;a.vj=null;a.r9=null;a.vn=0;a.sS=null;}
let ALk=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.tV;if(e!==Fu&&e!==Fn){if(e===FE){b=window.document.createElement("img");d=Bx(T(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new Iu;d.no=c;d.uu=e;d.uG=b;}else if(e===FO)d=T(c.result);}else{e=c.result;b=new Int8Array(e);d=new Iu;d.no=b;d.uu=e;}if(d!==null){G7(a.sS.vW,a.tV,a.vj,d);Bg(a.r9,a.vj);if(a.r9.j4==a.vn){b=a.sS.vG;d=new OE;d.uh=a;Bg(b.rF,d);}}},
AJi=(a,b)=>{ALk(a,b);};
function Fw(){BG.call(this);this.rA=null;}
let FE=null,Fn=null,FO=null,Fu=null,JZ=null,NP=null;
let ALt=()=>{let b,c,d,e,f;b=new Fw;b.kg=A(447);b.ka=0;b.rA=A(420);FE=b;c=new Fw;c.kg=A(448);c.ka=1;c.rA=A(422);Fn=c;d=new Fw;d.kg=A(449);d.ka=2;d.rA=A(450);FO=d;e=new Fw;e.kg=A(451);e.ka=3;e.rA=A(421);Fu=e;f=new Fw;f.kg=A(452);f.ka=4;f.rA=A(230);JZ=f;NP=U(Fw,[b,c,d,e,f]);};
let AGC=F();
let Li=null,Po=null;
let APH=b=>{let c,d,e,f,g,h,i,j,k,l;c=new K;c.jZ=G(16);d=AOc();e=0;f=Po.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.jY;if(i>0){Bk(c,i,i+1|0);c.jZ.data[i]=32;}j=d.data[e];D(c,c.jY,j);}e=e+1|0;h=h+1|0;}j=new I;d=c.jZ;k=d.data;e=c.jY;l=k.length;if(e>=0&&e<=(l-0|0)){j.j0=L(d.data,0,e);return j;}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
AOc=()=>{if(Li===null)Li=U(I,[A(453),A(454),A(455),A(456),A(457),A(458),A(459),A(460),A(461),A(462),A(463),A(464)]);return Li;},
Yr=()=>{Po=IG([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let RZ=F(0);
function HH(){let a=this;MX.call(a);a.lq=null;a.y2=null;a.rw=0;a.su=0;a.oG=null;a.uY=null;}
let Zl=a=>{let b,c,d,e,f,g,h;b=new K;b.jZ=G(16);c=APH(Lh(a.rw,a.su));D(b,b.jY,c);d=b.jY;if(d>0){Bk(b,d,d+1|0);b.jZ.data[d]=32;}c=a.lq;if(c.j7===null)c.j7=T(c.kb.$meta.name);c=c.j7;D(b,b.jY,c);d=b.jY;Bk(b,d,d+1|0);b.jZ.data[d]=40;e=a.oG.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.jY;Bk(b,h,h+1|0);b.jZ.data[h]=44;}c=g[f];if(c.j7===null)c.j7=T(c.kb.$meta.name);c=c.j7;D(b,b.jY,c);f=f+1|0;}d=b.jY;Bk(b,d,d+1|0);g=b.jZ;e=g.data;e[d]=41;c=new I;d=b.jY;h=e.length;if(d>=0&&d<=(h-0|0)){c.j0=L(g.data,
0,d);return c;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AO9=(a,b)=>{let c,d,e,f,g;if(a.rw&1){c=new MI;c.j1=1;c.j2=1;B(c);}if(a.uY===null){c=new Kd;c.j1=1;c.j2=1;B(c);}d=b.data;e=d.length;if(e!=a.oG.data.length){c=new Bm;c.j1=1;c.j2=1;B(c);}f=0;while(f<e){if(!(a.oG.data[f].kb.$meta.primitive?1:0)&&d[f]!==null){c=a.oG.data[f];g=d[f];c=c.kb;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MH(g.constructor,c)?1:0)){c=new Bm;c.j1=1;c.j2=1;B(c);}}if((a.oG.data[f].kb.$meta.primitive?1:0)&&d[f]===null){c=new Bm;c.j1=1;c.j2=1;B(c);}f=f+1|0;}c=b.data;g=new(a.lq.kb);a.uY.call(g,
c);return g;};
let W=F(H);
function Vt(){let a=this;Bq.call(a);a.vJ=null;a.z3=null;}
let ADx=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.mu^CL(a.vJ,c):0;};
function Vs(){let a=this;Bq.call(a);a.xt=null;a.xJ=null;a.zK=null;}
let XN=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.mu^CL(a.xt,c):0;return a.xJ.gg(b)&&!d?1:0;};
function PE(){let a=this;Bq.call(a);a.sm=null;a.ye=null;}
let AIs=(a,b)=>{return a.kI^CL(a.sm,b);},
AFe=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.jZ=G(16);c=Il(a.sm,0);while(c>=0){d=(E$(c)).data;e=0;f=d.length;g=b.jY;Bk(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jZ.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jY;Bk(b,g,g+1|0);b.jZ.data[g]=124;c=Il(a.sm,c+1|0);}e=b.jY;if(e>0)VC(b,e-1|0);k=new I;d=b.jZ;h=d.data;e=b.jY;g=h.length;if(e>=0&&e<=(g-0|0)){k.j0=L(d.data,0,e);return k;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);};
function PL(){let a=this;Bq.call(a);a.ww=null;a.zr=null;}
let ANW=(a,b)=>{return a.ww.gg(b);};
function PI(){let a=this;Bq.call(a);a.th=0;a.vV=null;a.t2=null;}
let AOH=(a,b)=>{return !(a.th^CL(a.t2.kn,b))&&!(a.th^a.t2.nD^a.vV.gg(b))?0:1;};
function PJ(){let a=this;Bq.call(a);a.to=0;a.xz=null;a.uD=null;}
let AI9=(a,b)=>{return !(a.to^CL(a.uD.kn,b))&&!(a.to^a.uD.nD^a.xz.gg(b))?1:0;};
function PP(){let a=this;Bq.call(a);a.xT=0;a.xD=null;a.xv=null;a.yB=null;}
let ACV=(a,b)=>{return a.xT^(!a.xD.gg(b)&&!a.xv.gg(b)?0:1);};
function PQ(){let a=this;Bq.call(a);a.wA=0;a.wu=null;a.wm=null;a.Al=null;}
let WM=(a,b)=>{return a.wA^(!a.wu.gg(b)&&!a.wm.gg(b)?0:1)?0:1;};
function PN(){let a=this;Bq.call(a);a.wk=null;a.An=null;}
let AFq=(a,b)=>{let c,d;c=a.wk;d=c.lk;return d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b);};
function PO(){let a=this;Bq.call(a);a.xH=null;a.yU=null;}
let AI_=(a,b)=>{let c,d;c=a.xH;d=c.lk;return (d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b))?0:1;};
function PR(){let a=this;Bq.call(a);a.wJ=null;a.wv=0;a.xj=null;}
let AQF=(a,b)=>{let c,d,e;c=a.wJ;d=c.lk;e=d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b);return !e&&!(a.wv^CL(a.xj.kn,b))?0:1;};
function PS(){let a=this;Bq.call(a);a.w3=null;a.w9=0;a.wV=null;}
let ABY=(a,b)=>{let c,d,e;c=a.w3;d=c.lk;e=d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b);return !e&&!(a.w9^CL(a.wV.kn,b))?1:0;};
function PD(){let a=this;Bq.call(a);a.xi=0;a.xy=null;a.xM=null;a.yj=null;}
let ATT=(a,b)=>{let c,d;a:{if(!(a.xi^a.xy.gg(b))){c=a.xM;d=c.lk;if(!(d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b))){b=0;break a;}}b=1;}return b;};
function P$(){let a=this;Bq.call(a);a.xK=0;a.vw=null;a.vB=null;a.yQ=null;}
let AFA=(a,b)=>{let c,d;a:{if(!(a.xK^a.vw.gg(b))){c=a.vB;d=c.lk;if(!(d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b))){b=1;break a;}}b=0;}return b;};
function PB(){let a=this;Bq.call(a);a.v$=null;a.yW=null;}
let ABV=(a,b)=>{let c,d;c=a.v$;d=c.lk;return d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b);};
function PC(){let a=this;Bq.call(a);a.v_=null;a.Ai=null;}
let AEq=(a,b)=>{let c,d;c=a.v_;d=c.lk;return (d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b))?0:1;};
function PH(){let a=this;Bq.call(a);a.xS=null;a.w0=0;a.x5=null;}
let AHf=(a,b)=>{let c,d,e;c=a.xS;d=c.lk;e=d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b);return e&&a.w0^CL(a.x5.kn,b)?1:0;};
function PA(){let a=this;Bq.call(a);a.xc=null;a.wB=0;a.wZ=null;}
let AQd=(a,b)=>{let c,d,e;c=a.xc;d=c.lk;e=d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b);return e&&a.wB^CL(a.wZ.kn,b)?0:1;};
function PF(){let a=this;Bq.call(a);a.xk=0;a.vI=null;a.wy=null;a.yA=null;}
let Z9=(a,b)=>{let c,d;a:{if(a.xk^a.vI.gg(b)){c=a.wy;d=c.lk;if(d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b)){b=1;break a;}}b=0;}return b;};
function PG(){let a=this;Bq.call(a);a.w_=0;a.vs=null;a.xh=null;a.y0=null;}
let AMI=(a,b)=>{let c,d;a:{if(a.w_^a.vs.gg(b)){c=a.xh;d=c.lk;if(d!==null?c.kI^d.gg(b):c.kI^CL(c.kn,b)){b=0;break a;}}b=1;}return b;};
function IK(){let a=this;C.call(a);a.ov=null;a.uC=null;a.mf=null;a.mT=0;}
function GD(){let a=this;C.call(a);a.Am=null;a.nK=Cc;a.oD=Cc;a.mY=null;a.v4=null;a.nv=null;a.mX=0;a.nL=null;}
let Jb=null,B2=null,CS=0,Es=0,R1=null;
let AIr=a=>{let b,c,$$je;a:{b:{c:{d:{try{Es=Es+1|0;AM0(a);a.c4();}catch($$e){$$je=Y($$e);if($$je instanceof Dx){b=$$je;break d;}else{b=$$je;break c;}}b=a.mY;FU(b);e:{try{NL(b);DP(b);break e;}catch($$e){$$je=Y($$e);c=$$je;}DP(b);B(c);}a.mX=0;Es=Es-1|0;b=Jb;if(B2!==b)B2=b;B2.oD=Eo();break a;}try{YZ(AFU(a),a,b);break b;}catch($$e){$$je=Y($$e);b=$$je;}}c=a.mY;FU(c);f:{try{NL(c);DP(c);break f;}catch($$e){$$je=Y($$e);b=$$je;}DP(c);B(b);}a.mX=0;Es=Es-1|0;c=Jb;if(B2!==c)B2=c;B2.oD=Eo();B(b);}b=a.mY;FU(b);g:{try{NL(b);DP(b);break g;}
catch($$e){$$je=Y($$e);c=$$je;}DP(b);B(c);}a.mX=0;Es=Es-1|0;b=Jb;if(B2!==b)B2=b;B2.oD=Eo();}},
AM0=b=>{if(B2!==b)B2=b;B2.oD=Eo();},
ATV=()=>{return B2;},
Ld=b=>{let $p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQx(b);if(Fz()){break _;}return;default:Fr();}}Dg().s(b,$p);},
ACS=(b,c)=>{let d,e;d=B2;e=new Pn;e.x6=d;e.xu=c;e.z4=Nl(e,AU4(b,V(2147483647))?2147483647:Bl(b));d.v4=e;},
AFU=a=>{let b;b=a.Am;if(b!==null)return b;return R1;},
ZF=()=>{let b,c,d;b=new GD;c=null;b.mY=new C;b.mX=1;b.nv=A(465);b.nL=c;d=CS;CS=d+1|0;b.nK=V(d);Jb=b;B2=b;CS=1;Es=1;R1=new Sp;},
AQx=b=>{let thread=Dg();let javaThread=Xd();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Kc(javaThread);thread.resume();};callback.g0=e=>{thread.attribute=APS(e);Kc(javaThread);thread.resume();};callback=Sy(callback);thread.suspend(()=>{try {ACS(b,callback);;}catch(N0){callback.g0(N0);}});return null;};
let BK=F(Bw);
let IU=F(Bw);
let AN1=F();
let Sq=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let AEu=F();
let X8=F();
let Ga=F(0);
function Wk(){C.call(this);this.wn=null;}
let AQH=a=>{AO1(a.wn);};
let Va=F(CP);
let Vb=F(CP);
let Vf=F(CP);
let Vg=F(CP);
let Vd=F(CP);
let Ve=F(CP);
let U$=F(CP);
let U_=F(CP);
let U8=F(CP);
let OO=F(0);
let Sp=F();
let YZ=(a,b,c)=>{let d;if(Do===null){b=new FK;d=new Ci;d.lB=BJ(32);Bp(b);b.lX=d;d=new K;Di(d,16);b.lF=d;b.lD=G(32);b.lG=0;b.lI=Cg;Do=b;}J8(c,Do);};
let Rb=F();
let RY=F(0);
function RE(){C.call(this);this.pI=null;}
let Sy=b=>{let c;c=new RE;c.pI=b;return c;},
AHI=(a,b)=>{a.pI.e(b);},
ASv=(a,b)=>{a.pI.g0(b);};
function S3(){let a=this;C.call(a);a.v1=null;a.v2=null;a.vZ=0;a.v0=null;}
let OL=F(Gt);
let AEe=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.kP;a:{while(true){if(b>f){b=e;break a;}g=a.lt;h=d.lW.data;i=g*2|0;j=h[i];h[i]=b;e=a.mW.fJ(b,c,d);if(e>=0)break;i=a.lt;d.lW.data[i*2|0]=j;b=b+1|0;}}return b;},
ATA=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.lt;h=e.lW.data;i=g*2|0;j=h[i];h[i]=c;f=a.mW.fJ(c,d,e);if(f>=0)break;i=a.lt;e.lW.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
ABy=a=>{return null;};
function S4(){Bq.call(this);this.zn=null;}
let AQ2=(a,b)=>{return CT(b)!=2?0:1;};
function Op(){Bq.call(this);this.zs=null;}
let ZE=(a,b)=>{return CT(b)!=1?0:1;};
function So(){Bq.call(this);this.y6=null;}
let Y0=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CT(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function Sn(){Bq.call(this);this.yX=null;}
let AD6=(a,b)=>{return 0;};
function VL(){Bq.call(this);this.zX=null;}
let AGU=(a,b)=>{return !CT(b)?0:1;};
function P3(){Bq.call(this);this.zC=null;}
let AQ6=(a,b)=>{return CT(b)!=9?0:1;};
function Pl(){Bq.call(this);this.Ag=null;}
let ALN=(a,b)=>{return Hx(b);};
function Rp(){Bq.call(this);this.zo=null;}
let AN7=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Ol(){Bq.call(this);this.x9=null;}
let AS3=(a,b)=>{a:{b:{switch(CT(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Hx(b);}return b;};
function Oo(){Bq.call(this);this.zE=null;}
let ACD=(a,b)=>{a:{b:{switch(CT(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Hx(b);}return b;};
function Pe(){Bq.call(this);this.zW=null;}
let ARz=(a,b)=>{a:{switch(CT(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function Qk(){Bq.call(this);this.z$=null;}
let AJB=(a,b)=>{a:{b:{switch(CT(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Qp(){Bq.call(this);this.y7=null;}
let ANj=(a,b)=>{a:{switch(CT(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function Tw(){Bq.call(this);this.zH=null;}
let AQG=(a,b)=>{return CT(b)!=3?0:1;};
function SM(){Bq.call(this);this.yb=null;}
let ASs=(a,b)=>{a:{b:{switch(CT(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Hx(b);}return b;};
function OB(){Bq.call(this);this.Ao=null;}
let ACh=(a,b)=>{a:{b:{switch(CT(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Hx(b);}return b;};
function J2(){Bq.call(this);this.sJ=0;}
let ALT=(a,b)=>{return a.kI^(a.sJ!=CT(b&65535)?0:1);};
let Sd=F(J2);
let APm=(a,b)=>{return a.kI^(!(a.sJ>>CT(b&65535)&1)?0:1);};
function Y2(){let a=this;C.call(a);a.Aw=0;a.Ax=0;a.Au=0;a.Av=0;a.At=null;}
function G8(){let a=this;GD.call(a);a.o4=0;a.ny=null;a.nM=null;a.nB=null;}
let AL7=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new M9;c.nW=a;c.qj=b;c=B9(c,"handleEvent");b.onreadystatechange=c;c=a.nB;d=a.nM;e=new G9;e.u3=c;e.r_=d;c=B9(e,"handleEvent");b.onprogress=c;d=a.ny;f=a.o4;b.open("GET",Bx(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let OC=F();
let T9=null;
let MG=()=>{MG=BQ(OC);AOB();};
let AOB=()=>{let b,c;b=X((U3.p()).data.length);c=b.data;T9=b;c[NF.ka]=1;c[Jk.ka]=2;};
let Vn=F();
let AID=(a,b,c)=>{a.eR(T(b),DA(c,"handleEvent"));},
AJE=(a,b,c)=>{a.eS(T(b),DA(c,"handleEvent"));},
Xp=(a,b,c,d)=>{a.eT(T(b),DA(c,"handleEvent"),d?1:0);},
XD=(a,b)=>{return !!a.eU(b);},
AFu=(a,b,c,d)=>{a.eW(T(b),DA(c,"handleEvent"),d?1:0);};
let G_=F(0);
function Km(){let a=this;C.call(a);a.ph=null;a.t9=0;a.sx=null;a.uS=null;a.qz=null;}
let ASz=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ph.readyState==4){if(a.ph.status==200){if(a.qz.mN){if(BU===null){b=new CJ;c=new Ci;c.lB=BJ(32);b.lX=c;c=new K;Bp(c);c.jZ=G(16);b.lF=c;b.lD=G(32);b.lG=0;b.lI=Cg;BU=b;}b=a.sx;c=new K;c.jZ=G(16);D(c,c.jY,A(466));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g
>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BV(Bx(b));BV("\n");}else{b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}}c=a.ph.response;E8();i=Gb.nk.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);T(a.ph.responseText);}else if(a.ph.status!=404&&a.ph.status!=403){try{k=V(100);$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof Dx){}else{throw $$e;}}NX(a.qz,a.t9,a.sx,a.uS);}b=a.qz;b.lc=b.lc-1|0;}return;case 1:a:{try{Ld(k);if(Fz()){break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof Dx)
{}else{throw $$e;}}}NX(a.qz,a.t9,a.sx,a.uS);b=a.qz;b.lc=b.lc-1|0;return;default:Fr();}}Dg().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AG4=(a,b)=>{let $p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ASz(a,b);if(Fz()){break _;}return;default:Fr();}}Dg().s(a,b,$p);};
let AKb=F();
let CK=0;
function CB(){let a=this;C.call(a);a.k0=null;a.l1=0;a.lQ=0;a.kX=0;}
let AKq=(a,b,c)=>{a.kX=1;a.k0=b;a.l1=c;},
Me=(a,b)=>{let c=new CB();AKq(c,a,b);return c;},
HD=a=>{let b;if(a.kX)return a.lQ>=a.k0.j4?0:1;b=new R;b.j1=1;b.j2=1;b.j3=A(17);B(b);},
Cw=a=>{let b,c,d,e,f,g,h;b=a.lQ;c=a.k0;if(b<c.j4){if(a.kX){d=c.j8.data;a.lQ=b+1|0;return d[b];}c=new R;c.j1=1;c.j2=1;c.j3=A(17);B(c);}c=new Wx;e=new K;e.jZ=G(16);J(e,e.jY,b,10);f=new I;d=e.jZ;g=d.data;b=e.jY;h=g.length;if(b>=0&&b<=(h-0|0)){f.j0=L(d.data,0,b);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);};
function C9(){let a=this;C.call(a);a.l_=null;a.mb=0;a.ur=null;a.us=null;}
let AMX=(a,b)=>{a.l_=b;a.mb=1;},
NW=a=>{let b=new C9();AMX(b,a);return b;},
ATC=(a,b,c)=>{a.l_=b;a.mb=c;},
LQ=(a,b)=>{let c=new C9();ATC(c,a,b);return c;},
CR=a=>{let b,c,d;if(CK){b=new CB;c=a.l_;d=a.mb;b.kX=1;b.k0=c;b.l1=d;return b;}if(a.ur===null){b=new CB;c=a.l_;d=a.mb;b.kX=1;b.k0=c;b.l1=d;a.ur=b;b=new CB;b.kX=1;b.k0=c;b.l1=d;a.us=b;}b=a.ur;if(b.kX){c=a.us;c.lQ=0;c.kX=1;b.kX=0;return c;}b.lQ=0;b.kX=1;a.us.kX=0;return b;};
function Iu(){let a=this;C.call(a);a.uu=null;a.no=null;a.uG=null;}
let ANX=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.no.length;c=new K;c.jZ=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new I;f=c.jZ;g=f.data;b=c.jY;h=g.length;if(b>=0&&b<=(h-0|0)){e.j0=L(f.data,0,b);return e;}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}i=b-d|0;if(i>=3){j=(((a.no[d]&255)<<16)+((a.no[d+1|0]&255)<<8)|0)+(a.no[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(467).j0.length)break f;h=A(467).j0.charCodeAt(h);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(467).j0.length)break g;h
=A(467).j0.charCodeAt(h);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(467).j0.length)break h;h=A(467).j0.charCodeAt(h);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;i=j&63;if(i<0)break;if(i>=A(467).j0.length)break;h=A(467).j0.charCodeAt(i);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;}else if(i<2){j=(a.no[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(467).j0.length)break d;h=A(467).j0.charCodeAt(h);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(467).j0.length)break e;h=A(467).j0.charCodeAt(h);i
=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;D(c,c.jY,A(468));}else{k=((a.no[d]&255)<<16)+((a.no[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(467).j0.length)break a;h=A(467).j0.charCodeAt(h);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(467).j0.length)break b;h=A(467).j0.charCodeAt(h);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(467).j0.length)break c;h=A(467).j0.charCodeAt(h);i=c.jY;Bk(c,i,i+1|0);c.jZ.data[i]=h;D(c,c.jY,A(469));}d=d+3|0;}e=new W;e.j1=1;e.j2=1;B(e);}e
=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);}e=new W;e.j1=1;e.j2=1;B(e);};
function OE(){C.call(this);this.uh=null;}
let Wn=F(0);
let Td=F(0);
let T5=F(0);
let Hz=F();
let EW=a=>{return;};
function Iz(){Hz.call(this);this.lX=null;}
let F6=(a,b)=>{a.lX=b;},
AXT=a=>{let b=new Iz();F6(b,a);return b;};
function IT(){let a=this;Iz.call(a);a.lG=0;a.lF=null;a.lD=null;a.lI=null;}
let VG=(a,b,c)=>{a.lX=b;b=new K;b.jZ=G(16);a.lF=b;a.lD=G(32);a.lG=c;a.lI=Cg;},
AWy=(a,b)=>{let c=new IT();VG(c,a,b);return c;};
let Ht=F(IT);
let AVo=(a,b)=>{a.g3(b);a.g3(A(114));};
let CJ=F(Ht);
let AHh=(a,b)=>{BV(Bx(b));};
function G9(){let a=this;C.call(a);a.r_=null;a.u3=null;}
let ALc=(a,b)=>{a.r_.g4(b.loaded);};
let ZS=F();
function Ci(){Hz.call(this);this.lB=null;}
let Zz=(a,b)=>{a.lB=BJ(b);},
AP8=a=>{let b=new Ci();Zz(b,a);return b;};
function Ks(){let a=this;C.call(a);a.vo=null;a.wd=null;}
let JC=b=>{let c,d,e;if(b.j0.length?0:1){c=new JF;c.j1=1;c.j2=1;c.tA=b;B(c);}if(0>=b.j0.length){b=new W;b.j1=1;b.j2=1;B(b);}if(!Uu(b.j0.charCodeAt(0))){c=new JF;c.j1=1;c.j2=1;c.tA=b;B(c);}d=1;a:{while(d<b.j0.length){if(d<0)break a;if(d>=b.j0.length)break a;b:{e=b.j0.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(Uu(e))break b;else{c=new JF;c.j1=1;c.j2=1;c.tA=b;B(c);}}}d=d+1|0;}return;}b=new W;b.j1=1;b.j2=1;B(b);},
Uu=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let NV=F(Ks);
let Cg=null;
let AVd=()=>{let b,c,d,e,f;b=new NV;c=Q(I,0);d=c.data;JC(A(3));e=d.length;f=0;while(f<e){JC(d[f]);f=f+1|0;}b.vo=A(3);b.wd=c.p();Cg=b;};
function JF(){Bm.call(this);this.tA=null;}
let K8=F(0);
function H8(){let a=this;C.call(a);a.u8=null;a.p4=null;a.mV=0;a.pJ=null;a.vh=0.0;a.tt=0.0;a.mn=0;a.oQ=null;a.sQ=null;a.sZ=null;a.uK=0;a.xg=0;a.v6=0;a.wb=0;a.vq=0;a.pN=null;a.qS=null;a.ym=0;a.rq=null;a.s2=0.0;a.sl=0;a.t1=0;a.u4=0;}
let Wg=null;
let H6=()=>{H6=BQ(H8);AJ5();};
let K1=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;H6();a.mV=0;a.pJ=null;a.vh=0.0;a.tt=0.0;a.mn=0;a.oQ=C_();a.sQ=C_();a.sZ=C_();a.uK=0;a.xg=770;a.v6=771;a.wb=770;a.vq=771;a.qS=null;d=new BI;d.kT=1.0;d.kS=1.0;d.kR=1.0;d.kQ=1.0;CY(d);a.rq=d;a.s2=Tu;a.sl=0;a.t1=0;a.u4=0;if(b>8191){c=new Bm;d=new K;d.jZ=G(16);D(d,d.jY,A(470));J(d,d.jY,b,10);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}j=EB===null?Wg:LX;k=new Jm;l=b*4|0;m=b*6|0;f
=Q(DY,3);g=f.data;d=new DY;d.mG=1;d.ms=2;d.mF=5126;d.mP=0;d.mK=A(471);d.n$=0;d.pq=Eb(1);g[0]=d;d=new DY;d.mG=4;d.ms=4;d.mF=5121;d.mP=1;d.mK=A(472);d.n$=0;d.pq=Eb(4);g[1]=d;d=new DY;d.mG=16;d.ms=2;d.mF=5126;d.mP=0;d.mK=A(473);d.n$=0;d.pq=Eb(16);g[2]=d;VU(k,j,0,l,m,Rn(f));a.u8=k;d=a.sQ;n=B5.ld.width;o=B5.ld.height;MA(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.p4=B7(b*20|0);f=E7(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.u8.mi.g9(f,0,g.length);if(c!==null)a.pN=c;else{e=Q2(A(474),A(475));if(!e.nJ){c=new Bm;d=new K;d.jZ=G(16);D(d,d.jY,A(476));if(!e.nJ)j=e.nm;else{j=Bs.g_(e.mM);e.nm=j;}D(d,d.jY,j);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}a.pN=e;a.ym=1;}},
AVO=(a,b)=>{let c=new H8();K1(c,a,b);return c;},
AFI=a=>{let b,c;if(a.mn){b=new BK;b.j1=1;b.j2=1;b.j3=A(477);B(b);}a.sl=0;Ca.ha(0);c=a.qS;if(c!==null)c.hb();else{c=a.pN;b=Bs;if(c.k3){CN(c,c.lY,c.l0);c.k3=0;}b.hd(c.mM);}Gi(a);a.mn=1;},
APs=a=>{let b,c;if(!a.mn){b=new BK;b.j1=1;b.j2=1;b.j3=A(478);B(b);}if(a.mV>0)D_(a);a.pJ=null;a.mn=0;c=Ca;c.ha(1);if(a.uK?0:1)c.bb(3042);},
AHk=(a,b,c,d,e)=>{let f,g;if(!a.mn){b=new BK;b.j1=1;b.j2=1;b.j3=A(479);B(b);}f=a.p4.data.length;if(b!==a.pJ){D_(a);a.pJ=b;b=b.ow;a.vh=1.0/b.nX;a.tt=1.0/b.nQ;g=f;}else{g=f-a.mV|0;if(!g){D_(a);g=f;}}if(g>=e)g=e;Du(c,d,a.p4,a.mV,g);a.mV=a.mV+g|0;e=e-g|0;while(e>0){d=d+g|0;D_(a);g=f>=e?e:f;Du(c,d,a.p4,0,g);a.mV=a.mV+g|0;e=e-g|0;}},
QA=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.mn){b=new BK;b.j1=1;b.j2=1;b.j3=A(479);B(b);}l=a.p4;m=b.od;if(m!==a.pJ){D_(a);a.pJ=m;m=m.ow;a.vh=1.0/m.nX;a.tt=1.0/m.nQ;}else{n=l.data;if(a.mV==n.length)D_(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{FQ();n=F_.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.u$;bb=b.u7;bc=b.u9;bd=b.u_;be=a.s2;bf=a.mV;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.mV=bf+20|0;},
D_=a=>{let b,c,d,e,f,g;b=a.mV;if(!b)return;a.sl=a.sl+1|0;a.t1=a.t1+1|0;c=b/20|0;if(c>a.u4)a.u4=c;b=c*6|0;d=a.pJ;Ca.cB(d.nf,d.p_);d=a.u8;e=a.p4;f=a.mV;d.ml.he(e,0,f);g=d.mi.hf(1);CH(g,0);CQ(g,b);if(a.uK)Ca.bb(3042);else{Ca.W(3042);c=a.xg;if(c!=(-1))Ca.hg(c,a.v6,a.wb,a.vq);}g=a.qS;if(g===null)g=a.pN;S1(d,g,4,0,b,d.sb);a.mV=0;},
Gi=a=>{let b,c,d,e;S5(Dc(a.sZ,a.sQ.lj),a.oQ);b=a.qS;if(b!==null){b.hj(A(480),a.sZ);a.qS.hk(A(481),0);}else{b=a.pN;c=a.sZ;Im();d=Jj(b,A(480),HV);e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}QU(e,d,1,0,c.lj,0);b=a.pN;c=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}c.hn(Jj(b,A(481),HV),0);}},
AJ5=()=>{Wg=LF;};
let RS=F(0);
function KV(){C.call(this);this.zq=null;}
function TK(){let a=this;KV.call(a);a.m7=null;a.qI=null;a.ro=null;a.wQ=null;a.wP=null;a.yx=null;a.y1=null;a.zv=null;a.oE=null;a.sV=0;}
let AFR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a.zq=b;b=new Bf;b.ks=1;b.j8=Q(C,10);a.y1=b;a.sV=0;b=new Np;c=new SY;d=new QJ;ANd(d);d.vK=1.0;e=new Bo;CU();d.xe=e;d.u1=0.0;c.tR=new Bo;c.r7=1.0;c.qT=d;d=new H8;H6();K1(d,1000,null);SX(b,c,d);b.yp=1;a.m7=b;Lf.mz=b;a.ro=Kv();a.wQ=Kv();a.wP=Kv();b=new Bf;b.ks=1;b.j8=Q(C,16);a.oE=b;Bg(b,a.ro);Bg(a.oE,a.wQ);Bg(a.oE,a.wP);b=a.oE;f=BT(0,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f
=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}h=b.j8.data;c=h[0];c.pf=(c.pf+(-90.0))%360.0;if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}c=h[0];d=a.m7;k=(d.mt.of/2|0)+27|0;if(!(c.kJ===200.0&&c.kY===k)){c.kJ=200.0;c.kY=k;}if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,
c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}a:{b=h[0];c=d.lv;d=b.lh;if(d!==null){if(d===c)break a;g=E6(d.kr,b,1);if(g!=(-1)){e=d.kr;Db(e);e=DW(e,g);d=d.lL;if(d!==null)Gj(d,e);e.lh=null;e.x(null);}}Bg(c.kr,b);b.lh=c;b.x(c.lL);}if(BU===null){b=new CJ;c=new Ci;c.lB=BJ(32);b.lX=c;c=new K;Bp(c);c.jZ=G(16);b.lF=c;b.lD=G(32);b.lG=0;b.lI=Cg;BU=b;}b=a.oE;if(0>=b.j4){d=new H;c=new K;c.jZ
=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}l=b.j8.data[0].kJ;b=new K;b.jZ=G(16);D(b,b.jY,A(482));ED(b,b.jY,l);c=new I;h=b.jZ;i=h.data;j=b.jY;f=i.length;if(j>=0&&j<=(f-0|0)){c.j0=L(h.data,0,j);BV(Bx(c));BV("\n");b=a.oE;f=BT(1,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i
=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}h=b.j8.data;c=h[1];d=a.m7;k=(d.mt.of/2|0)+100|0;if(!(c.kJ===500.0&&c.kY===k)){c.kJ=500.0;c.kY=k;}if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}b:{b=h[1];c=d.lv;d=b.lh;if(d!==null){if(d===c)break b;g=E6(d.kr,b,1);if
(g!=(-1)){e=d.kr;Db(e);e=DW(e,g);d=d.lL;if(d!==null)Gj(d,e);e.lh=null;e.x(null);}}Bg(c.kr,b);b.lh=c;b.x(c.lL);}b=a.oE;f=BT(2,b.j4);if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}h=b.j8.data;c=h[2];d=a.m7;k=((d.mt.of/2|0)-27|0)-100|0;if(!(c.kJ===500.0&&c.kY===k)){c.kJ=500.0;c.kY=k;}if(f>=0){d=new H;c=new K;c.jZ=G(16);D(c,c.jY,
A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));g=b.j4;J(c,c.jY,g,10);b=new I;h=c.jZ;i=h.data;j=c.jY;f=i.length;if(j>=0&&j<=(f-0|0)){b.j0=L(h.data,0,j);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;S(b);B(b);}c:{b=h[2];c=d.lv;d=b.lh;if(d!==null){if(d===c)break c;g=E6(d.kr,b,1);if(g!=(-1)){e=d.kr;Db(e);e=DW(e,g);d=d.lL;if(d!==null)Gj(d,e);e.lh=null;e.x(null);}}Bg(c.kr,b);b.lh=c;b.x(c.lL);}a.qI=AEw(a.oE);if(BU===null){b=new CJ;c=new Ci;c.lB=BJ(32);b.lX=c;c=new K;Bp(c);c.jZ=G(16);b.lF=c;b.lD=G(32);b.lG=0;b.lI=Cg;BU=b;}d=a.qI.v5;b=
new K;b.jZ=G(16);D(b,b.jY,A(483));D(b,b.jY,d===null?A(2):d.T());c=new I;h=b.jZ;i=h.data;j=b.jY;f=i.length;if(j>=0&&j<=(f-0|0)){d:{c.j0=L(h.data,0,j);BV(Bx(c));BV("\n");b=a.m7;c=a.qI;b=b.lv;d=c.lh;if(d!==null){if(d===b)break d;g=E6(d.kr,c,1);if(g!=(-1)){e=d.kr;Db(e);e=DW(e,g);d=d.lL;if(d!==null)Gj(d,e);e.lh=null;e.x(null);}}Bg(b.kr,c);c.lh=b;c.lL=b.lL;}e:{b=AAJ();a.zv=b;c=a.m7.lv;d=b.lh;if(d!==null){if(d===c)break e;g=E6(d.kr,b,1);if(g!=(-1)){e=d.kr;Db(e);e=DW(e,g);d=d.lL;if(d!==null)Gj(d,e);e.lh=null;e.x(null);}}Bg(c.kr,
b);b.lh=c;b.lL=c.lL;}b=a.ro;c=new T3;c.vb=a;if(!Lo(b.sR,c,1))Bg(b.sR,c);return;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AJ1=a=>{let b=new TK();AFR(b,a);return b;},
ART=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;Ca.hq(0.9300000071525574,0.9300000071525574,0.9300000071525574,0.5);Ca.hr(16384);if(!(a.sV%500|0)){c=AIK(a);a.yx=c;d=a.qI.oo;e=BT(0,d.j4);if(e>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g=d.j4;J(c,c.jY,g,10);d=new I;h=c.jZ;i=h.data;e=c.jY;j=i.length;if(e>=0&&e<=(j-0|0)){d.j0=L(h.data,0,e);f.j1=1;f.j2=1;f.j3=d;B(f);}c=new H;S(c);B(c);}h=d.j8.data;b=h[0].j6;if(e>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));g
=d.j4;J(c,c.jY,g,10);d=new I;h=c.jZ;i=h.data;e=c.jY;j=i.length;if(e>=0&&e<=(j-0|0)){d.j0=L(h.data,0,e);f.j1=1;f.j2=1;f.j3=d;B(f);}c=new H;S(c);B(c);}k=h[0].j5;if(!(c.kJ===b&&c.kY===k)){c.kJ=b;c.kY=k;}a:{d=a.m7.lv;f=c.lh;if(f!==null){if(f===d)break a;g=E6(f.kr,c,1);if(g!=(-1)){l=f.kr;Db(l);l=DW(l,g);f=f.lL;if(f!==null)Gj(f,l);l.lh=null;l.x(null);}}Bg(d.kr,c);c.lh=d;c.lL=d.lL;}if(BU===null){c=new CJ;d=new Ci;d.lB=BJ(32);c.lX=d;d=new K;Bp(d);d.jZ=G(16);c.lF=d;c.lD=G(32);c.lG=0;c.lI=Cg;BU=c;}d=a.m7.lv.kr;c=A(2);if
(d!==null)c=JN(d);BV(Bx(c));BV("\n");}a.sV=a.sV+1|0;AN3(a.m7,B5.sC);c=a.m7;f=c.mt.qT;Wy(f,1);if(c.lv.nd){d=c.vp;f=f.qu;if(d.mn)D_(d);Dc(d.sQ,f.lj);if(d.mn)Gi(d);AFI(d);f=c.lv;if(f.nj){l=KK(f);Dc(f.pv,d.oQ.lj);if(d.mn)D_(d);Dc(d.oQ,l.lj);if(d.mn)Gi(d);}Ql(f,d,1.0);if(f.nj){f=f.pv;if(d.mn)D_(d);Dc(d.oQ,f.lj);if(d.mn)Gi(d);}APs(d);if(BR)AM8(c);}};
let Wx=F(Bw);
let R=F(Bw);
let ADg=(a,b)=>{a.j1=1;a.j2=1;a.j3=b;},
KE=a=>{let b=new R();ADg(b,a);return b;};
let ACz=F();
let Lh=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function En(){C.call(this);this.nw=null;}
let Ze=a=>{AIr(a.nw);};
let ADM=F();
let We=F();
let O2=null;
let NB=()=>{NB=BQ(We);AO6();};
let AO6=()=>{let b,c;b=X((NP.p()).data.length);c=b.data;O2=b;c[FO.ka]=1;c[FE.ka]=2;c[Fu.ka]=3;c[Fn.ka]=4;c[JZ.ka]=5;};
let Nx=F(Bw);
function NZ(){let a=this;C.call(a);a.qT=null;a.s0=0.0;a.s8=0.0;a.pO=0;a.pP=0;a.ql=0;a.of=0;a.tR=null;}
let Nw=(a,b)=>{let c,d,e,f;AIu(a.pO,a.pP,a.ql,a.of);c=a.qT;d=a.s0;c.tQ=d;e=a.s8;c.un=e;if(b){f=c.um;d=d/2.0;e=e/2.0;f.kc=d;f.kd=e;f.ke=0.0;}Wy(c,1);},
EX=(a,b)=>{let c,d,e,f;c=a.tR;d=b.j6;e=b.j5;c.kc=d;c.kd=e;c.ke=1.0;ALi(a.qT,c,a.pO,a.pP,a.ql,a.of);c=a.tR;f=c.kc;d=c.kd;b.j6=f;b.j5=d;return b;};
function SY(){NZ.call(this);this.r7=0.0;}
function Uv(){let a=this;CI.call(a);a.x$=null;a.x7=null;a.yG=null;a.yu=null;}
let ATb=a=>{let b,c,d,e,f,g,h;Ge(a);b=new H4;c=HJ;d=Jx(c.rM,A(484),GZ);e=null;f=I$(d,HZ(d),e,0);e=Ca;c=e.j$.createTexture();g=e.ni;e.ni=g+1|0;Ce(e.nP,g,Ch(c));e=HN;b.pb=e;b.pK=e;e=H1;b.o2=e;b.pe=e;b.qK=1.0;b.nf=3553;b.p_=g;JW(b,f);e=Dj;c=EU;if(e===null)c=Jc(c);else{h=Hi(e);c=IS(c,e,h&(c.mr.data.length-1|0),h);}c=c===null?null:c.m0;if(c===null){c=new Bf;Bp(c);c.ks=1;c.j8=Q(C,16);}Bg(c,b);GO(EU,e,c);a.x$=b;e=new MD;c=b.ow;UD(e,b,0,0,c.nX,c.nQ);a.x7=e;if(!(a.lT===41.0&&a.l8===59.0)){a.lT=41.0;a.l8=59.0;}b=new Bc;b.j6
=0.0;b.j5=16.0;a.yG=b;b=new Bc;b.j6=a.lT;b.j5=16.0;a.yu=b;},
Kv=()=>{let a=new Uv();ATb(a);return a;},
X1=(a,b,c)=>{let d,e,f,g;d=a.qN;c=d.kT;e=d.kS;f=d.kR;g=d.kQ;d=b.rq;d.kT=c;d.kS=e;d.kR=f;d.kQ=g;CY(d);b.s2=Fk(b.rq);QA(b,a.x7,a.kJ,a.kY,a.qC,a.qD,a.lT,a.l8,a.ox,a.oy,a.pf);},
ADP=(a,b)=>{IB(a,b);};
function TV(){let a=this;CI.call(a);a.zL=null;a.wH=null;a.oo=null;a.q0=null;a.qh=null;a.pZ=null;a.qw=null;a.oR=null;a.qP=null;a.z2=null;a.op=null;}
let ACA=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;Ge(a);c=new H4;d=HJ;e=Jx(d.rM,A(485),GZ);f=null;g=I$(e,HZ(e),f,0);f=Ca;d=f.j$.createTexture();h=f.ni;f.ni=h+1|0;Ce(f.nP,h,Ch(d));f=HN;c.pb=f;c.pK=f;f=H1;c.o2=f;c.pe=f;c.qK=1.0;c.nf=3553;c.p_=h;JW(c,g);f=Dj;d=EU;if(f===null)d=Jc(d);else{i=Hi(f);d=IS(d,f,i&(d.mr.data.length-1|0),i);}d=d===null?null:d.m0;if(d===null){d=new Bf;Bp(d);d.ks=1;d.j8=Q(C,16);}Bg(d,c);GO(EU,f,d);a.zL=c;f=new GS;f.od=c;JG(f,0,0,1,1);a.wH=f;a.z2=b;c=new Bf;c.ks=1;c.j8=Q(C,16);a.oo=c;f=new Bc;if
(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}f.j6=b.j8.data[0].kJ+16.0;f.j5=600.0;Bg(c,f);c=a.oo;f=new Bc;i=b.j4;if(0>=i){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b
=new H;S(b);B(b);}k=b.j8.data;m=k[0].kJ+16.0;if(1>=i){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}n=k[1].kY+15.0;f.j6=m;f.j5=n;Bg(c,f);c=new Bf;c.ks=1;c.j8=Q(C,16);a.qw=c;f=new Bc;if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));h=b.j4;J(c,c.jY,h,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if
(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}m=b.j8.data[0].kJ+16.0;d=a.oo;j=d.j4;i=j-1|0;if(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;S(b);B(b);}n=d.j8.data[i].j5;f.j6=m;f.j5=n;Bg(c,f);c=a.qw;f=new Bc;if(1>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,
c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}n=b.j8.data[1].kJ;j=c.j4;i=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}m=c.j8.data[i].j5;f.j6=n;f.j5=m;Bg(c,f);c=new Bf;c.ks=1;c.j8=Q(C,16);a.oR=c;f=new Bc;i=BT(1,b.j4);if(i>=0){f
=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}k=b.j8.data;n=k[1].kJ;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,1,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}m=n+k[1].lT;d=a.qw;j=d.j4;i=j-1|0;if
(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;S(b);B(b);}n=d.j8.data[i].j5;f.j6=m;f.j5=n;Bg(c,f);c=a.oR;f=new Bc;j=c.j4;i=j-1|0;j=BT(i,j);if(j>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3
=c;B(f);}b=new H;S(b);B(b);}k=c.j8.data;m=k[i].j6+100.0;if(j>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}n=k[i].j5;f.j6=m;f.j5=n;Bg(c,f);c=a.oR;f=new Bc;j=c.j4;i=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h
-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}m=c.j8.data[i].j6;if(2>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}n=b.j8.data[2].kY+15.0;f.j6=m;f.j5=n;Bg(c,f);c=a.oR;f=new Bc;i=BT(2,b.j4);if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k
=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}k=b.j8.data;n=k[2].kJ;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}m=n+k[2].lT;j=c.j4;i=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k
=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}n=c.j8.data[i].j5;f.j6=m;f.j5=n;Bg(c,f);c=new Bf;c.ks=1;c.j8=Q(C,16);a.qP=c;f=new Bc;if(2>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,2,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}n=b.j8.data[2].kJ;d=a.oR;j=d.j4;i=j-1|0;if(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,
b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;S(b);B(b);}m=d.j8.data[i].j5;f.j6=n;f.j5=m;Bg(c,f);c=a.qP;f=new Bc;if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}m=b.j8.data[0].kJ+16.0;j=c.j4;i
=j-1|0;if(i>=j){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=c.j4;J(b,b.jY,j,10);c=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){c.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}n=c.j8.data[i].j5;f.j6=m;f.j5=n;Bg(c,f);c=new Bf;c.ks=1;c.j8=Q(C,16);a.q0=c;f=new Bc;if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,
i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}m=b.j8.data[0].kJ+16.0;d=a.oo;j=d.j4;i=j-1|0;if(i>=j){c=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));j=d.j4;J(b,b.jY,j,10);f=new I;k=b.jZ;l=k.data;i=b.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}b=new H;S(b);B(b);}n=d.j8.data[i].j5;f.j6=m;f.j5=n;Bg(c,f);c=a.q0;f=new Bc;i=BT(0,b.j4);if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l
=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}k=b.j8.data;m=k[0].kJ+16.0;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}n=k[0].kY;f.j6=m;f.j5=n;Bg(c,f);if(BU===null){c=new CJ;f=new Ci;f.lB=BJ(32);c.lX=f;f=new K;Bp(f);f.jZ=G(16);c.lF=f;c.lD=G(32);c.lG=0;c.lI=Cg;BU
=c;}if(0>=b.j4){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}m=b.j8.data[0].kJ;c=new K;c.jZ=G(16);D(c,c.jY,A(486));ED(c,c.jY,m);f=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){f.j0=L(k.data,0,i);BV(Bx(f));BV("\n");c=new Bf;c.ks=1;c.j8=Q(C,16);a.qh=c;f=new Bc;i=BT(0,b.j4);if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,
c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}k=b.j8.data;m=k[0].kJ+16.0;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}o=k[0].kY;if(i>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,
c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}n=o-k[0].lT;f.j6=m;f.j5=n;Bg(c,f);c=a.qh;f=new Bc;if(0<b.j4){m=b.j8.data[0].kJ+16.0;n=(DO(c,c.j4-1|0)).j5-100.0;f.j6=m;f.j5=n;Bg(c,f);c=new Bf;c.ks=1;c.j8=Q(C,16);a.pZ=c;f=new Bc;m=SV(DO(b,0))+16.0;d=a.qh;Nf(f,m,(DO(d,d.j4-1|0)).j5);Bg(c,f);c=a.pZ;f=new Bc;m=SV(DO(b,0))+16.0;b=a.pZ;Nf(f,m,(DO(b,b.j4-1|0)).j5-200.0);Bg(c,f);return;}f=new H;c=new K;c.jZ
=G(16);D(c,c.jY,A(18));J(c,c.jY,0,10);D(c,c.jY,A(19));j=b.j4;J(c,c.jY,j,10);b=new I;k=c.jZ;l=k.data;i=c.jY;h=l.length;if(i>=0&&i<=(h-0|0)){b.j0=L(k.data,0,i);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AEw=a=>{let b=new TV();ACA(b,a);return b;},
ACu=(a,b,c)=>{let d,e,f;d=new LK;e=a.wH;f=new LL;f.tg=20;f.uy=4000;f.tG=1.0;Wo(d,b,e,f);d.xY=B7(8);a.op=d;c=Fk(Rt);d.qb.mL=c;b=a.op;d=a.oo;e=EZ;FI(b.or,d,25.0,e,1);b=a.op;d=a.q0;e=EZ;FI(b.or,d,25.0,e,1);b=a.op;d=a.qw;e=EZ;FI(b.or,d,25.0,e,1);b=a.op;d=a.oR;e=EZ;FI(b.or,d,25.0,e,1);b=a.op;d=a.qP;e=EZ;FI(b.or,d,25.0,e,1);b=a.op;d=a.qh;e=EZ;FI(b.or,d,25.0,e,1);b=a.op;d=a.pZ;e=EZ;FI(b.or,d,25.0,e,1);};
function RJ(){let a=this;CI.call(a);a.vR=null;a.wz=0.0;a.yy=null;a.vQ=null;a.xC=null;}
let ACs=a=>{let b,c,d,e,f,g,h,i,j;Ge(a);b=new H4;c=HJ;d=Jx(c.rM,A(485),GZ);e=null;f=I$(d,HZ(d),e,0);e=Ca;c=e.j$.createTexture();g=e.ni;e.ni=g+1|0;Ce(e.nP,g,Ch(c));e=HN;b.pb=e;b.pK=e;e=H1;b.o2=e;b.pe=e;b.qK=1.0;b.nf=3553;b.p_=g;JW(b,f);e=Dj;c=EU;if(e===null)c=Jc(c);else{h=Hi(e);c=IS(c,e,h&(c.mr.data.length-1|0),h);}c=c===null?null:c.m0;if(c===null){c=new Bf;Bp(c);c.ks=1;c.j8=Q(C,16);}Bg(c,b);GO(EU,e,c);a.yy=b;e=new GS;e.od=b;JG(e,0,0,1,1);a.vQ=e;b=new Bc;i=B5.ld.width/2|0;j=B5.ld.height/2|0;b.j6=i;b.j5=j;a.vR
=b;a.wz=1.0;},
AAJ=()=>{let a=new RJ();ACs(a);return a;},
AK4=(a,b,c)=>{let d,e,f,g,h,i;d=new LK;e=a.vQ;f=new LL;f.tg=20;f.uy=4000;f.tG=1.0;Wo(d,b,e,f);d.xY=B7(8);a.xC=d;c=Fk(OP);d.qb.mL=c;b=a.xC;d=a.vR;c=a.wz;g=d.j6;h=d.j5;d=b.qb;i=d.mL;b.uB.hK(g,h,YY(b.xw,d.s$,c,c),c,c,0.0,0.0,6.2831854820251465,i,i);};
function T3(){B4.call(this);this.vb=null;}
let FK=F(Ht);
let AEW=(a,b)=>{DG(Bx(b));};
let ACN=F(Ex);
let WF=null;
let AUM=()=>{WF=M(ADl);};
let AMe=F();
let Oh=null,QD=null,Rm=null;
let AGZ=()=>{Oh=AAX([V(1),V(10),V(100),V(10000),V(100000000),E(1874919424, 2328306)]);QD=new MP;Rm=new UG;};
let AM$=F();
let KY=Cc,XS=null,HP=null,It=null;
let AGM=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AX5(b):E(0, 2146959360);c.vC=D7(C7(d,E(0, 2147483648)),Cc)?0:1;e=C7(d,E(4294967295, 1048575));f=Bl(AVV(d,52))&2047;if(D7(e,Cc)&&!f){c.uk=Cc;c.tC=0;return;}if(f)e=ADv(e,E(0, 1048576));else{e=FF(e,1);while(D7(C7(e,E(0, 1048576)),Cc)){e=FF(e,1);f=f+(-1)|0;}}g=It;h=ANR(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=It.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=I3(e,HP.data[i],j);if(AC_(k,KY)){while(Fc(k,KY)<=0){h=h+(-1)|0;k=C8(Ba(k,V(10)),V(9));}g=It.data;i
=h+1|0;j=12+(f-g[i]|0)|0;k=I3(e,HP.data[i],j);}e=FF(e,1);d=C8(e,V(1));g=HP.data;i=h+1|0;l=g[i];f=j-1|0;m=I3(d,l,f);l=I3(AGt(e,V(1)),HP.data[i],f);n=V(1);while(true){o=Ba(n,V(10));if(Fc(EO(k,o),EO(l,o))<=0)break;n=o;}p=V(1);while(true){q=Ba(p,V(10));if(Fc(EO(k,q),EO(m,q))>=0)break;p=q;}i=Fc(n,p);e=i>0?Ba(EO(k,n),n):i<0?C8(Ba(EO(k,p),p),p):Ba(EO(C8(k,M5(p,V(2))),p),p);if(Fc(e,E(2808348672, 232830643))>=0)while(true){h=h+1|0;e=EO(e,V(10));if(Fc(e,E(2808348672, 232830643))<0)break;}else if(Fc(e,E(1569325056, 23283064))
<0){h=h+(-1)|0;e=Ba(e,V(10));}c.uk=e;c.tC=h-330|0;},
I3=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=C7(b,V(65535));f=C7(Be(b,16),V(65535));g=C7(Be(b,32),V(65535));h=C7(Be(b,48),V(65535));i=C7(c,V(65535));j=C7(Be(c,16),V(65535));k=C7(Be(c,32),V(65535));l=C7(Be(c,48),V(65535));return C8(C8(C8(FF(Ba(l,h),32+d|0),FF(C8(Ba(l,g),Ba(k,h)),16+d|0)),FF(C8(C8(Ba(l,f),Ba(k,g)),Ba(j,h)),d)),Be(C8(C8(C8(Ba(k,e),Ba(j,f)),Ba(i,g)),FF(C8(C8(C8(Ba(l,e),Ba(k,f)),Ba(j,g)),Ba(i,h)),16)),32-d|0));},
AFH=()=>{KY=EO(V(-1),V(10));XS=AK6();HP=AAX([E(3251292512, 2194092222),E(1766094183, 3510547556),E(553881887, 2808438045),E(443105509, 2246750436),E(3285949193, 3594800697),E(910772436, 2875840558),E(2446604867, 2300672446),E(2196580869, 3681075914),E(2616258154, 2944860731),E(1234013064, 2355888585),E(1974420903, 3769421736),E(720543263, 3015537389),E(1435428070, 2412429911),E(578697993, 3859887858),E(2180945313, 3087910286),E(885762791, 2470328229),E(3135207384, 3952525166),E(1649172448, 3162020133),E(3037324877, 2529616106),
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
E(3348809418, 2876309015),E(2679047534, 2301047212),E(850502218, 3681675540),E(680401775, 2945340432),E(3121301797, 2356272345),E(699115580, 3770035753),E(2277279382, 3016028602),E(103836587, 2412822882),E(1025131999, 3860516611),E(4256079436, 3088413288),E(827883168, 2470730631),E(3901593088, 3953169009)]);It=AX7([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function MP(){let a=this;C.call(a);a.uk=Cc;a.tC=0;a.vC=0;}
let AAw=a=>{return;},
AK6=()=>{let a=new MP();AAw(a);return a;};
let GY=F(BG);
let LF=null,O3=null,SQ=null,LX=null,UZ=null;
let ARD=()=>{let b,c,d,e;b=new GY;b.kg=A(487);b.ka=0;LF=b;c=new GY;c.kg=A(488);c.ka=1;O3=c;d=new GY;d.kg=A(489);d.ka=2;SQ=d;e=new GY;e.kg=A(490);e.ka=3;LX=e;UZ=U(GY,[b,c,d,e]);};
function Jm(){let a=this;C.call(a);a.ml=null;a.mi=null;a.sb=0;a.qx=0;a.rc=null;a.rN=0;a.xd=null;}
let H7=null;
let VU=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.sb=1;a.rN=0;g=new Bo;CU();a.xd=g;MM();switch(S_.data[b.ka]){case 1:a.ml=SG(c,d,f);b=new HG;b.oi=1;b.p5=0;b.tS=1;if(!De){h=E7(e);e=h.data.length;f=new JU;i=0+e|0;Bp(f);f.ko=(-1);f.ky=e;f.j9=e;f.kf=0;f.j9=i;f.rC=0;f.rZ=0;f.ra=h;}else{d=e*2|0;if(d<0){b=new Bm;f=new K;f.jZ=G(16);BZ(f,f.jY,Cn(A(491)));J(f,f.jY,d,10);g=new I;h=f.jZ;j=h.data;d=f.jY;e=j.length;if(d>=0&&d<=(e-0|0)){g.j0=L(h.data,0,d);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}f=new C1;h=BJ(d);f.ko
=(-1);f.ky=d;f.j9=d;f.k6=Ct;f.ly=0;f.k2=h;f.kf=0;f.j9=d;f.ma=1;f.lK=0;f.k6=Dl();f=J9(f);}b.nN=f;f.j9=f.kf;f.kf=0;f.ko=(-1);f=Bs;g=f.j$.createBuffer();e=f.mo;f.mo=e+1|0;Ce(f.m4,e,Ch(g));b.r$=e;b.rp=!c?35048:35044;a.mi=b;a.qx=0;break a;case 2:break;case 3:a.ml=Sg(c,d,f);a.mi=Wq(c,e);a.qx=0;break a;case 4:break b;default:break b;}a.ml=ARl(c,d,f);a.mi=Wq(c,e);a.qx=0;break a;}b=new Pi;Te(b,0,d,f);a.ml=b;b=new Qu;b.oi=1;b.p5=0;b.tS=1;if(!De){h=E7(e);d=h.data.length;f=new JU;k=0+d|0;U7(f,d);f.kf=0;f.j9=k;f.rC=0;f.rZ
=0;f.ra=h;}else{c=e*2|0;if(c<0){b=new Bm;f=new K;f.jZ=G(16);Ee(f,f.jY,A(491));J(f,f.jY,c,10);g=new I;h=f.jZ;j=h.data;d=f.jY;e=j.length;if(d>=0&&d<=(e-0|0)){g.j0=L(h.data,0,d);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}f=new C1;h=BJ(c);Bp(f);f.ko=(-1);f.ky=c;f.j9=c;f.k6=Ct;f.ly=0;f.k2=h;f.kf=0;f.j9=c;f.ma=1;f.lK=0;f.k6=Dl();f=J9(f);}b.nN=f;f.j9=f.kf;f.kf=0;f.ko=(-1);f=Bs;g=f.j$.createBuffer();d=f.mo;f.mo=d+1|0;Ce(f.m4,d,Ch(g));b.r$=d;b.rp=35044;a.mi=b;a.qx=1;}b=Dj;f=H7;if(b===null){f=f.mr.data[0];while
(f!==null&&f.mZ!==null){f=f.m_;}}else{l=b;if(!l.$id$){g=E3();l.$id$=g;}e=b.$id$;h=f.mr.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.pl==e){g=f.mZ;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.m_;}}f=f===null?null:f.m0;if(f===null){f=new Bf;f.ks=1;f.j8=Q(C,16);}Bg(f,a);GO(H7,b,f);},
AWi=(a,b,c,d,e)=>{let f=new Jm();VU(f,a,b,c,d,e);return f;},
S1=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.ml.hS(b,g);g=a.rc;if(g!==null&&g.hT()>0)a.rc.hS(b,h);if(a.mi.hU()>0)a.mi.hb();}if(a.qx){if(a.mi.hU()<=0)Bs.hV(c,d,e);else{g=a.mi.hf(0);i=g.kf;CH(g,d);Bs.hW(c,e,5123,g);CH(g,i);}}else{j=0;if(a.rN)j=a.rc.hT();if(a.mi.hU()<=0){if(a.rN&&j>0)EB.hX(c,d,e,j);else Bs.hV(c,d,e);}else{if((e+d|0)>a.mi.hY()){b=new R;g=new K;g.jZ=G(16);D(g,g.jY,A(492));J(g,g.jY,e,10);D(g,g.jY,A(493));J(g,g.jY,d,10);D(g,g.jY,A(494));c=a.mi.hY();J(g,g.jY,c,10);D(g,g.jY,
A(54));h=new I;k=g.jZ;l=k.data;d=g.jY;e=l.length;if(d>=0&&d<=(e-0|0)){h.j0=L(k.data,0,d);b.j1=1;b.j2=1;b.j3=h;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}if(a.rN&&j>0)EB.hZ(c,e,5123,d*2|0,j);else Bs.h0(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.ml.h1(b,g);g=a.rc;if(g!==null&&g.hT()>0)a.rc.h1(b,h);if(a.mi.hU()>0)a.mi.h2();}},
AS5=()=>{let b,c,d,e;b=new I7;c=J0(16);b.o7=0;d=Q(FN,c);e=d.data;b.mr=d;b.tc=0.75;b.p$=e.length*0.75|0;H7=b;};
function NG(){let a=this;C.call(a);a.um=null;a.wG=null;a.xa=null;a.tX=null;a.uM=null;a.qu=null;a.re=null;a.u1=0.0;a.w8=0.0;a.tQ=0.0;a.un=0.0;a.w4=null;a.yL=null;a.yn=null;}
let ANd=a=>{let b,c,d;b=new Bo;CU();a.um=b;b=new Bo;b.kc=0.0;b.kd=0.0;b.ke=(-1.0);a.wG=b;b=new Bo;b.kc=0.0;b.kd=1.0;b.ke=0.0;a.xa=b;a.tX=C_();a.uM=C_();a.qu=C_();a.re=C_();a.u1=1.0;a.w8=100.0;a.tQ=0.0;a.un=0.0;a.w4=AMP();a.yL=new Bo;b=new L0;My();c=new Bo;b.yC=c;d=new Bo;b.zP=d;c.kc=0.0;c.kd=0.0;c.ke=0.0;d.kc=0.0;d.kd=0.0;d.ke=0.0;a.yn=b;},
ALi=(a,b,c,d,e,f)=>{let g,h;g=b.kc-c;h=B5.ld.height-b.kd-d;b.kc=2.0*g/e-1.0;b.kd=2.0*h/f-1.0;b.ke=2.0*b.ke-1.0;ABB(b,a.re);return b;};
function QJ(){let a=this;NG.call(a);a.vK=0.0;a.xe=null;}
let Wy=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.tX;d=a.vK;e=a.tQ;f=d* -e/2.0;e=d*e/2.0;g=a.un;MA(c,f,e,d* -(g/2.0),d*g/2.0,a.u1,a.w8);c=a.uM;h=a.um;i=a.xe;d=h.kc;j=h.kd;f=h.ke;i.kc=d;i.kd=j;i.ke=f;k=a.wG;l=k.kc;e=k.kd;g=k.ke;d=d+l;j=j+e;f=f+g;i.kc=d;i.kd=j;i.ke=f;i=a.xa;k=VN;k.kc=d;k.kd=j;k.ke=f;l=h.kc;e=h.kd;g=h.ke;l=d-l;e=j-e;g=f-g;k.kc=l;k.kd=e;k.ke=g;ADE(c,k,i);i=PZ;l= -h.kc;e= -h.kd;g= -h.ke;Lg(i);m=i.lj.data;m[12]=l;m[13]=e;m[14]=g;S5(c,i);Dc(a.qu,a.tX.lj);OD(a.qu.lj,a.uM.lj);if(b){Dc(a.re,a.qu.lj);AD7(a.re.lj);ALp(a.w4,
a.re);}};
let No=F(0);
let Vu=F(0);
function Pn(){let a=this;C.call(a);a.x6=null;a.xu=null;a.zl=0;a.z4=0;}
let AM_=a=>{let b,c;if(!a.zl){b=a.x6;b.v4=null;if(B2!==b)B2=b;B2.oD=Eo();c=a.xu;b=null;c.pI.e(b);}};
function Pu(){let a=this;C.call(a);a.l3=null;a.mU=0;a.yt=Cc;a.zi=0;a.zM=0;}
let AJG=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.yt=V(-1);a.zi=(-1);a.zM=(-1);c=b.length;if(!c){d=new Bm;d.j1=1;d.j2=1;d.j3=A(495);B(d);}e=Q(DY,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.l3=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.nT=c;switch(d.mF){case 5120:case 5121:break;case 5122:case 5123:g=2*d.ms|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.ms|0;break a;default:break b;}g=d.ms;break a;}g=0;}c=c+g|0;h=h+1|0;}a.mU=c;},
Rn=a=>{let b=new Pu();AJG(b,a);return b;};
function Ma(){let a=this;C.call(a);a.nm=null;a.nJ=0;a.rX=null;a.wq=null;a.xb=null;a.wE=null;a.nE=null;a.wC=null;a.xm=null;a.v9=null;a.mM=0;a.tT=0;a.vt=0;a.Ac=null;a.lY=null;a.l0=null;a.k3=0;a.z1=0;a.ne=null;a.qU=null;}
let HV=0,NA=null,L8=null,Nq=null,AOM=null;
let Im=()=>{Im=BQ(Ma);ANx();};
let AS2=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;Im();a.nm=A(65);a.rX=Gs(51,0.800000011920929);a.wq=Gs(51,0.800000011920929);a.xb=Gs(51,0.800000011920929);a.nE=Gs(51,0.800000011920929);a.wC=Gs(51,0.800000011920929);a.xm=Gs(51,0.800000011920929);a.z1=0;if(!De){d=X(1);e=d.data.length;f=new Gm;g=0+e|0;f.ko=(-1);f.ky=e;f.j9=e;f.kf=0;f.j9=g;f.ps=0;f.qJ=0;f.o9=d;}else{h=new C1;d=BJ(4);h.ko=(-1);h.ky=4;h.j9=4;h.k6=Ct;h.ly=0;h.k2=d;h.kf=0;h.j9=4;h.ma=1;h.lK=0;h.k6=Dl();f=G4(h);}a.ne=f;if(!De){d=X(1);e=d.data.length;f=new Gm;g
=0+e|0;f.ko=(-1);f.ky=e;f.j9=e;f.kf=0;f.j9=g;f.ps=0;f.qJ=0;f.o9=d;}else{h=new C1;d=BJ(4);h.ko=(-1);h.ky=4;h.j9=4;h.k6=Ct;h.ly=0;h.k2=d;h.kf=0;h.j9=4;h.ma=1;h.lK=0;h.k6=Dl();f=G4(h);}a.qU=f;if(b===null){b=new Bm;b.j1=1;b.j2=1;b.j3=A(496);B(b);}if(c===null){b=new Bm;b.j1=1;b.j2=1;b.j3=A(497);B(b);}f=NA;if(f!==null&&f.j0.length>0){f=new K;f.jZ=G(16);h=NA;D(f,f.jY,h);D(f,f.jY,b);b=new I;d=f.jZ;i=d.data;e=f.jY;j=i.length;if(e>=0&&e<=(j-0|0))b.j0=L(d.data,0,e);else{b=new H;b.j1=1;b.j2=1;B(b);}}f=L8;if(f!==null&&f.j0.length
>0){f=new K;f.jZ=G(16);h=L8;D(f,f.jY,h);D(f,f.jY,c);c=new I;d=f.jZ;i=d.data;e=f.jY;j=i.length;if(e>=0&&e<=(j-0|0))c.j0=L(d.data,0,e);else{b=new H;b.j1=1;b.j2=1;B(b);}}a.lY=b;a.l0=c;if(!De){i=B7(16);k=i.data.length;f=new Id;l=0+k|0;f.ko=(-1);f.ky=k;f.j9=k;f.kf=0;f.j9=l;f.qH=0;f.ri=0;f.p9=i;}else{f=new C1;d=BJ(64);f.ko=(-1);f.ky=64;f.j9=64;f.k6=Ct;f.ly=0;f.k2=d;f.kf=0;f.j9=64;f.ma=1;f.lK=0;f.k6=Dl();f=Fb(f);}a.Ac=f;CN(a,b,c);if(a.nJ){AD8(a);AJx(a);b=Dj;c=Nq;l=BC(c,b);c=l<0?null:c.kH.data[l];if(c===null){c=new Bf;c.ks
=1;c.j8=Q(C,16);}Bg(c,a);B6(Nq,b,c);}},
Q2=(a,b)=>{let c=new Ma();AS2(c,a,b);return c;},
CN=(a,b,c)=>{let d;a.tT=WC(a,35633,b);d=WC(a,35632,c);a.vt=d;if(a.tT!=(-1)&&d!=(-1)){d=Bs.ia();if(!d)d=(-1);d=APR(a,d);a.mM=d;if(d!=(-1)){a.nJ=1;return;}a.nJ=0;return;}a.nJ=0;},
WC=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bs;if(!De){e=X(1);f=e.data.length;g=new Gm;h=0+f|0;g.ko=(-1);g.ky=f;g.j9=f;g.kf=0;g.j9=h;g.ps=0;g.qJ=0;g.o9=e;}else{g=new C1;e=BJ(4);g.ko=(-1);g.ky=4;g.j9=4;g.k6=Ct;g.ly=0;g.k2=e;g.kf=0;g.j9=4;g.ma=1;g.lK=0;g.k6=Dl();g=G4(g);}i=d.ic(b);if(!i)return (-1);d.id(i,c);d.ie(i);d.eG(i,35713,g);if(E_(g,0))return i;j=d.ig(i);c=new K;c.jZ=G(16);d=a.nm;D(c,c.jY,d);d=b!=35633?A(498):A(499);D(c,c.jY,d);d=new I;e=c.jZ;k=e.data;i=c.jY;l=k.length;if(i>=0&&i<=(l-0|0)){d.j0=L(e.data,0,i);a.nm
=d;c=new K;c.jZ=G(16);D(c,c.jY,d);D(c,c.jY,j);d=new I;e=c.jZ;k=e.data;i=c.jY;l=k.length;if(i>=0&&i<=(l-0|0)){d.j0=L(e.data,0,i);a.nm=d;return (-1);}c=new H;c.j1=1;c.j2=1;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
APR=(a,b)=>{let c,d,e,f;c=Bs;if(b==(-1))return (-1);c.ih(b,a.tT);c.ih(b,a.vt);c.ii(b);d=new C1;e=BJ(4);d.ko=(-1);d.ky=4;d.j9=4;d.k6=Ct;d.ly=0;d.k2=e;d.kf=0;d.j9=4;d.ma=1;d.lK=0;d.k6=Dl();f=G4(d);c.eF(b,35714,f);if(E_(f,0))return b;a.nm=Bs.g_(b);return (-1);},
Jj=(a,b,c)=>{let d,e,f,g,h,i;d=a.rX;e=(-2);f=E5(d,b);if(f>=0)e=d.m1.data[f];if(e==(-2)){e=Bs.ij(a.mM,b);if(e==(-1)&&c){if(a.nJ){d=new Bm;g=new K;g.jZ=G(16);D(g,g.jY,A(500));D(g,g.jY,b);D(g,g.jY,A(501));b=new I;h=g.jZ;i=h.data;e=g.jY;f=i.length;if(e>=0&&e<=(f-0|0)){b.j0=L(h.data,0,e);d.j1=1;d.j2=1;d.j3=b;B(d);}b=new H;b.j1=1;b.j2=1;B(b);}b=new BK;d=new K;d.jZ=G(16);D(d,d.jY,A(502));if(!a.nJ)g=a.nm;else{g=Bs.g_(a.mM);a.nm=g;}D(d,d.jY,g);g=new I;h=d.jZ;i=h.data;e=d.jY;f=i.length;if(e>=0&&e<=(f-0|0)){g.j0=L(h.data,
0,e);b.j1=1;b.j2=1;b.j3=g;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}EN(a.rX,b,e);}return e;},
AJx=a=>{let b,c,d,e,f;b=a.ne;b.kf=0;b.j9=b.ky;b.ko=(-1);Bs.eF(a.mM,35718,b);c=E_(a.ne,0);a.wE=Q(I,c);d=0;while(d<c){b=a.ne;b.kf=0;b.j9=b.ky;b.ko=(-1);Vz(b,0,1);b=a.qU;b.kf=0;b.j9=b.ky;b.ko=(-1);e=Bs.eE(a.mM,d,a.ne,b);f=Bs.ij(a.mM,e);EN(a.rX,e,f);EN(a.wq,e,E_(a.qU,0));EN(a.xb,e,E_(a.ne,0));a.wE.data[d]=e;d=d+1|0;}},
AD8=a=>{let b,c,d,e,f;b=a.ne;b.kf=0;b.j9=b.ky;b.ko=(-1);Bs.eF(a.mM,35721,b);c=E_(a.ne,0);a.v9=Q(I,c);d=0;while(d<c){b=a.ne;b.kf=0;b.j9=b.ky;b.ko=(-1);Vz(b,0,1);b=a.qU;b.kf=0;b.j9=b.ky;b.ko=(-1);e=Bs.eD(a.mM,d,a.ne,b);f=Bs.im(a.mM,e);EN(a.nE,e,f);EN(a.wC,e,E_(a.qU,0));EN(a.xm,e,E_(a.ne,0));a.v9.data[d]=e;d=d+1|0;}},
ANx=()=>{let b,c,d,e;HV=1;NA=A(65);L8=A(65);Nq=ES(51,0.800000011920929);if(!De){b=X(1);c=b.data.length;d=new Gm;e=0+c|0;d.ko=(-1);d.ky=c;d.j9=c;d.kf=0;d.j9=e;d.ps=0;d.qJ=0;d.o9=b;}else{d=new C1;b=BJ(4);d.ko=(-1);d.ky=4;d.j9=4;d.k6=Ct;d.ly=0;d.k2=b;d.kf=0;d.j9=4;d.ma=1;d.lK=0;d.k6=Dl();d=G4(d);}AOM=d;};
function Ng(){let a=this;Bf.call(a);a.ns=null;a.td=null;a.mx=0;}
let Fv=a=>{let b,c,d,e;b=a.mx-1|0;if(0>b)b=0;a.mx=b;c=a.ns;if(c===null)return;a:{if(c!==a.j8&&!b){d=c.data;a.td=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.ns=null;},
Db=a=>{let b,c,d,e;b=a.ns;if(b!==null){c=a.j8;if(b===c){a:{b=a.td;if(b!==null){d=b.data.length;e=a.j4;if(d>=e){Du(c,0,b,0,e);a.j8=a.td;a.td=null;break a;}}Lc(a,c.data.length);}return;}}};
function K$(){let a=this;Bf.call(a);a.qg=0;a.qF=null;a.qo=0;}
let AM1=a=>{a.qg=a.qg+1|0;},
AO0=a=>{let b,c,d,e,f,g,h,i,j;b=a.qg;if(!b){c=new BK;c.j1=1;c.j2=1;c.j3=A(503);B(c);}d=b-1|0;a.qg=d;if(!d){a:{b=a.qo;if(b>0){e=a.j4;if(b==e){a.qF.lP=0;if(d>0)a.qo=e;else{f=a.j8;d=0;c=null;if(d>e){c=new Bm;c.j1=1;c.j2=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.j4=0;}break a;}}d=0;b=a.qF.lP;b:{while(true){if(d>=b)break b;c=a.qF;f=c.my.data;e=c.lP-1|0;c.lP=e;h=f[e];if(h>=a.qo){if(a.qg<=0)DW(a,h);else{VI(a,h);if(h>=a.j4)break;}}d=d+1|0;}i=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,h,10);D(c,c.jY,A(19));d
=a.j4;J(c,c.jY,d,10);j=new I;f=c.jZ;g=f.data;b=c.jY;e=g.length;if(b>=0&&b<=(e-0|0)){j.j0=L(f.data,0,b);i.j1=1;i.j2=1;i.j3=j;B(i);}c=new H;c.j1=1;c.j2=1;B(c);}d=a.qo-1|0;while(true){if(d<0)break a;if(a.qg<=0)DW(a,d);else{VI(a,d);if(d>=a.j4){i=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,d,10);D(c,c.jY,A(19));d=a.j4;J(c,c.jY,d,10);j=new I;f=c.jZ;g=f.data;b=c.jY;e=g.length;if(b>=0&&b<=(e-0|0)){j.j0=L(f.data,0,b);i.j1=1;i.j2=1;i.j3=j;B(i);}c=new H;c.j1=1;c.j2=1;B(c);}}d=d+(-1)|0;}}a.qo=0;}},
VI=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.qo)return;c=0;d=a.qF;e=d.lP;while(true){f=BT(c,e);if(f>=0){L2(d,b);return;}if(f>=0){g=new H;h=new K;h.jZ=G(16);D(h,h.jY,A(18));J(h,h.jY,c,10);D(h,h.jY,A(19));b=d.lP;J(h,h.jY,b,10);d=new I;i=h.jZ;j=i.data;c=h.jY;e=j.length;if(c>=0&&c<=(e-0|0)){d.j0=L(i.data,0,c);g.j1=1;g.j2=1;g.j3=d;B(g);}d=new H;d.j1=1;d.j2=1;B(d);}f=BT(b,d.my.data[c]);if(!f)break;if(f<0){ASO(d,c,b);return;}c=c+1|0;}};
function UG(){let a=this;C.call(a);a.tZ=0;a.tL=0;a.vL=0;}
let WB=F();
let S_=null;
let MM=()=>{MM=BQ(WB);AOf();};
let AOf=()=>{let b,c;b=X((UZ.p()).data.length);c=b.data;S_=b;c[O3.ka]=1;c[SQ.ka]=2;c[LX.ka]=3;c[LF.ka]=4;};
let Jt=F(0);
function I5(){let a=this;C.call(a);a.nI=null;a.pB=null;a.wN=0;a.z9=0;a.t6=0;a.rG=0;a.r5=0;}
let Te=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.rG=0;a.r5=0;a.z9=b;a.nI=d;c=Dr(d.mU/4|0,c);if(!De){e=B7(c);f=e.data.length;d=new Id;g=0+f|0;d.ko=(-1);d.ky=f;d.j9=f;d.kf=0;d.j9=g;d.qH=0;d.ri=0;d.p9=e;}else{c=c*4|0;if(c<0){d=new Bm;h=new K;h.jZ=G(16);BW(h,h.jY,A(491));J(h,h.jY,c,10);i=new I;e=h.jZ;j=e.data;c=h.jY;k=j.length;if(c>=0&&c<=(k-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}h=new C1;e=BJ(c);h.ko=(-1);h.ky=c;h.j9=c;h.k6=Ct;h.ly=0;h.k2=e;h.kf=0;h.j9=c;h.ma=1;h.lK=0;h.k6=Dl();d
=Fb(h);}a.pB=d;d.j9=d.kf;d.kf=0;d.ko=(-1);d=Bs;h=d.j$.createBuffer();k=d.mo;d.mo=k+1|0;Ce(d.m4,k,Ch(h));a.wN=k;a.t6=!b?35048:35044;},
SG=(a,b,c)=>{let d=new I5();Te(d,a,b,c);return d;},
AES=a=>{return a.nI;},
ANL=a=>{return a.pB.j9/(a.nI.mU/4|0)|0;},
ALg=(a,b,c,d)=>{let e,f,g;a.rG=1;e=a.pB;f=null;g=e instanceof E4;if(g)f=Fb(e);else if(e instanceof Em)f=e;if(f===null){f=new R;f.j1=1;f.j2=1;f.j3=A(504);B(f);}f.kf=0;f.j9=f.ky;f.ko=(-1);CH(e,0);Jq(f,b,c,d);CH(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CH(a.pB,0);CQ(a.pB,d);if(a.r5){e=Bs;f=a.pB;e.eB(34962,f.j9,f,a.t6);a.rG=0;}},
ADG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bs;d.is(34962,a.wN);if(a.rG){e=a.pB;d.eB(34962,e.j9,e,a.t6);a.rG=0;}a:{f=a.nI.l3.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nI.l3.data[g];j=h[g];if(j>=0){e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}e.it(j);k=i.ms;l=i.mF;m=i.mP;n=a.nI.mU;o=i.nT;e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}e.iu(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nI.l3.data[g];d=i.mK;e=b.nE;p=(-1);j=E5(e,d);if(j>=0)p=e.m1.data[j];if(p>=0){e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}e.it(p);j
=i.ms;k=i.mF;l=i.mP;m=a.nI.mU;n=i.nT;e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}e.iu(p,j,k,l,m,n);}g=g+1|0;}}a.r5=1;},
Zn=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bs;e=a.nI.l3.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}h.iv(g);}f=f+1|0;}}i=0;while(i<e){j=a.nI.l3.data[i].mK;k=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}l=Bs;h=b.nE;g=(-2);f=E5(h,j);if(f>=0)g=h.m1.data[f];if(g==(-2)){g=l.im(b.mM,j);EN(b.nE,j,g);}if(g!=(-1))k.iv(g);i=i+1|0;}}d.is(34962,0);a.r5=0;};
let Kw=F(0);
function HG(){let a=this;C.call(a);a.nN=null;a.r$=0;a.tS=0;a.oi=0;a.p5=0;a.rp=0;}
let AF0=a=>{return a.nN.j9;},
X9=a=>{return a.nN.ky;},
AKN=(a,b,c,d)=>{let e;a.oi=1;e=a.nN;e.kf=0;e.j9=e.ky;e.ko=(-1);Vl(e,b,c,d);e=a.nN;c=e.kf;e.j9=c;e.kf=0;e.ko=(-1);if(a.p5){Bs.eB(34963,c,e,a.rp);a.oi=0;}},
Y7=(a,b)=>{a.oi=a.oi|b;return a.nN;},
ARx=a=>{let b,c,d;b=a.r$;if(!b){c=new R;c.j1=1;c.j2=1;c.j3=A(505);B(c);}Bs.is(34963,b);if(a.oi){c=Bs;d=a.nN;c.eB(34963,d.j9,d,a.rp);a.oi=0;}a.p5=1;},
AN4=a=>{Bs.is(34963,0);a.p5=0;};
function P4(){let a=this;C.call(a);a.nC=null;a.nS=null;a.og=null;a.vy=0;a.vN=0;a.yl=0;a.tz=0;a.ru=0;a.se=0;}
let AJW=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.ru=0;a.se=0;a.yl=b;a.nC=d;c=Dr(d.mU,c);if(!De){e=BJ(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new C1;g=0+f|0;d.ko=(-1);d.ky=f;d.j9=f;d.k6=Ct;d.ly=0;d.k2=e;d.kf=0;d.j9=g;d.ma=0;d.lK=0;break a;}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);}if(c<0){d=new Bm;h=new K;h.jZ=G(16);BW(h,h.jY,A(491));J(h,h.jY,c,10);i=new I;e=h.jZ;j=e.data;c=h.jY;f=j.length;if(c>=0&&c<=(f-0|0)){i.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}d=new C1;e=BJ(c);d.ko=(-1);d.ky=c;d.j9=
c;d.k6=Ct;d.ly=0;d.k2=e;d.kf=0;d.j9=c;d.ma=1;d.lK=0;d.k6=Dl();}a.og=d;a.vN=1;a.tz=!b?35048:35044;a.nS=Fb(d);d=Bs;h=d.j$.createBuffer();g=d.mo;d.mo=g+1|0;Ce(d.m4,g,Ch(h));Bs.is(34962,g);Bs.eB(34962,a.og.ky,null,a.tz);Bs.is(34962,0);a.vy=g;d=a.nS;d.j9=d.kf;d.kf=0;d.ko=(-1);d=a.og;d.j9=d.kf;d.kf=0;d.ko=(-1);},
ARl=(a,b,c)=>{let d=new P4();AJW(d,a,b,c);return d;},
AAZ=a=>{return a.nC;},
AB9=a=>{return (a.nS.j9*4|0)/a.nC.mU|0;},
ZU=(a,b,c,d)=>{let e,f,g;a.ru=1;if(!a.vN){e=a.nS;e.kf=0;e.j9=e.ky;e.ko=(-1);Jq(e,b,c,d);e=a.nS;e.j9=e.kf;e.kf=0;e.ko=(-1);CH(a.og,0);CQ(a.og,a.nS.j9<<2);}else{e=a.og;f=null;g=e instanceof E4;if(g)f=Fb(e);else if(e instanceof Em)f=e;if(f===null){f=new R;f.j1=1;f.j2=1;f.j3=A(504);B(f);}f.kf=0;f.j9=f.ky;f.ko=(-1);CH(e,0);Jq(f,b,c,d);CH(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CH(a.nS,0);CQ(a.nS,d);}if(a.se){e=Bs;f=a.og;e.eC(34962,0,f.j9,f);a.ru=0;}},
AKy=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bs;d.is(34962,a.vy);if(a.ru){CQ(a.og,a.nS.j9*4|0);e=a.og;d.eB(34962,e.j9,e,a.tz);a.ru=0;}a:{f=a.nC.l3.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nC.l3.data[g];j=h[g];if(j>=0){e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}e.it(j);k=i.ms;l=i.mF;m=i.mP;n=a.nC.mU;o=i.nT;e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}e.iu(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nC.l3.data[g];p=i.mK;e=b.nE;q=(-1);j=E5(e,p);if(j>=0)q=e.m1.data[j];if(q>=0){e=Bs;if(b.k3){CN(b,
b.lY,b.l0);b.k3=0;}e.it(q);j=i.ms;k=i.mF;l=i.mP;m=a.nC.mU;n=i.nT;e=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}e.iu(q,j,k,l,m,n);}g=g+1|0;}}a.se=1;},
ADH=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bs;e=a.nC.l3.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}h.iv(g);}f=f+1|0;}}i=0;while(i<e){j=a.nC.l3.data[i].mK;k=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}l=Bs;h=b.nE;g=(-2);f=E5(h,j);if(f>=0)g=h.m1.data[f];if(g==(-2)){g=l.im(b.mM,j);EN(b.nE,j,g);}if(g!=(-1))k.iv(g);i=i+1|0;}}d.is(34962,0);a.se=0;};
function Sk(){let a=this;C.call(a);a.pA=null;a.ol=null;a.wU=0;a.zb=0;a.pF=0;a.sh=0;a.xf=0;}
let AC8=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.pF=1;a.sh=0;c=c*2|0;if(!De){d=BJ(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new C1;g=0+e|0;f.ko=(-1);f.ky=e;f.j9=e;f.k6=Ct;f.ly=0;f.k2=d;f.kf=0;f.j9=g;f.ma=0;f.lK=0;break a;}f=new H;f.j1=1;f.j2=1;Bi(f);B(f);}if(c<0){f=new Bm;h=new K;h.jZ=G(16);BW(h,h.jY,A(491));J(h,h.jY,c,10);i=new I;d=h.jZ;j=d.data;c=h.jY;k=j.length;if(c>=0&&c<=(k-0|0)){i.j0=L(d.data,0,c);f.j1=1;f.j2=1;f.j3=i;B(f);}f=new H;f.j1=1;f.j2=1;B(f);}f=new C1;d=BJ(c);f.ko=(-1);f.ky=c;f.j9=c;f.k6=Ct;f.ly=0;f.k2
=d;f.kf=0;f.j9=c;f.ma=1;f.lK=0;f.k6=Dl();}a.ol=f;a.zb=1;a.xf=!b?35048:35044;f=J9(f);a.pA=f;f.j9=f.kf;f.kf=0;f.ko=(-1);f=a.ol;f.j9=f.kf;f.kf=0;f.ko=(-1);f=Bs;h=f.j$.createBuffer();e=f.mo;f.mo=e+1|0;Ce(f.m4,e,Ch(h));Bs.is(34963,e);Bs.eB(34963,a.ol.ky,null,a.xf);Bs.is(34963,0);a.wU=e;},
Wq=(a,b)=>{let c=new Sk();AC8(c,a,b);return c;},
ANc=a=>{return a.pA.j9;},
Xf=a=>{return a.pA.ky;},
AGH=(a,b,c,d)=>{let e,f;a.pF=1;e=a.pA;e.kf=0;e.j9=e.ky;e.ko=(-1);Vl(e,b,c,d);e=a.pA;e.j9=e.kf;e.kf=0;e.ko=(-1);CH(a.ol,0);CQ(a.ol,d<<1);if(a.sh){e=Bs;f=a.ol;e.eC(34963,0,f.j9,f);a.pF=0;}},
AP9=(a,b)=>{a.pF=a.pF|b;return a.pA;},
AHB=a=>{let b,c,d;b=a.wU;if(!b){c=new R;c.j1=1;c.j2=1;c.j3=A(506);B(c);}Bs.is(34963,b);if(a.pF){CQ(a.ol,a.pA.j9*2|0);c=Bs;d=a.ol;c.eC(34963,0,d.j9,d);a.pF=0;}a.sh=1;},
AAB=a=>{Bs.is(34963,0);a.sh=0;};
function Lt(){let a=this;C.call(a);a.ok=null;a.oU=null;a.uE=0;a.Ab=0;a.up=0;a.rx=0;a.tb=0;a.tO=0;a.nY=null;}
let ME=null;
let Lz=()=>{Lz=BQ(Lt);ATn();};
let ACf=(a,b,c,d)=>{let e,f,g,h,i,j;Lz();a.rx=0;a.tb=0;a.tO=(-1);e=new FR;e.o$=1;e.my=X(16);a.nY=e;a.Ab=b;a.ok=d;c=Dr(d.mU/4|0,c);if(!De){f=B7(c);g=f.data.length;d=new Id;h=0+g|0;d.ko=(-1);d.ky=g;d.j9=g;d.kf=0;d.j9=h;d.qH=0;d.ri=0;d.p9=f;}else{c=c*4|0;if(c<0){d=new Bm;e=new K;e.jZ=G(16);BW(e,e.jY,A(491));J(e,e.jY,c,10);i=new I;f=e.jZ;j=f.data;c=e.jY;g=j.length;if(c>=0&&c<=(g-0|0)){i.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;B(d);}e=new C1;f=BJ(c);e.ko=(-1);e.ky=c;e.j9=c;e.k6=Ct;e.ly=
0;e.k2=f;e.kf=0;e.j9=c;e.ma=1;e.lK=0;e.k6=Dl();d=Fb(e);}a.oU=d;d.j9=d.kf;d.kf=0;d.ko=(-1);d=Bs;e=d.j$.createBuffer();g=d.mo;d.mo=g+1|0;Ce(d.m4,g,Ch(e));a.uE=g;a.up=!b?35048:35044;d=ME;d.kf=0;d.j9=d.ky;d.ko=(-1);EB.ix(1,d);d=ME;c=d.kf;if(c<d.j9){d.kf=c+1|0;a.tO=d.iy(c);return;}d=new Ns;d.j1=1;d.j2=1;B(d);},
Sg=(a,b,c)=>{let d=new Lt();ACf(d,a,b,c);return d;},
ZB=a=>{return a.ok;},
AKE=a=>{return (a.oU.j9*4|0)/a.ok.mU|0;},
ZP=(a,b,c,d)=>{let e,f,g;a.rx=1;e=a.oU;f=null;g=e instanceof E4;if(g)f=Fb(e);else if(e instanceof Em)f=e;if(f===null){f=new R;f.j1=1;f.j2=1;f.j3=A(504);B(f);}f.kf=0;f.j9=f.ky;f.ko=(-1);CH(e,0);Jq(f,b,c,d);CH(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);CH(a.oU,0);CQ(a.oU,d);if(a.tb){e=Bs;f=a.oU;e.eB(34962,f.j9,f,a.up);a.rx=0;}},
APL=(a,b,c)=>{let d;d=EB;d.iz(a.tO);AOT(a,b,c);if(a.rx){d.is(34962,a.uE);b=a.oU;CQ(b,b.j9);b=a.oU;d.eB(34962,b.j9,b,a.up);a.rx=0;}a.tb=1;},
AOT=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.nY;e=d.lP;f=!e?0:1;a:{g=a.ok.l3.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.ok.l3.data[e].mK;h=b.nE;i=(-1);f=E5(h,d);if(f>=0)i=h.m1.data[f];d=a.nY;if(e>=d.lP)break;f=i!=d.my.data[e]?0:1;e=e+1|0;}h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=d.lP;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;S(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.my.data[i]?0:1;i=i+1|0;}h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,i,10);D(b,b.jY,A(19));e=d.lP;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;S(b);B(b);}}}c:{if(!f){d:{Ca.is(34962,a.uE);if(a.nY.lP){k=a.ok.l3.data.length;e=0;while(true){if(e>=k)break d;d=a.nY;if(e>=d.lP)break;i=d.my.data[e];if(i>=0){d=Bs;if(b.k3){CN(b,
b.lY,b.l0);b.k3=0;}d.iv(i);}e=e+1|0;}h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=d.lP;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;HY(b);B(b);}}a.nY.lP=0;e=0;while(true){if(e>=g)break c;h=a.ok.l3.data[e];if(c!==null){j=c.data;L2(a.nY,j[e]);}else{l=a.nY;m=h.mK;d=b.nE;i=(-1);f=E5(d,m);if(f>=0)i=d.m1.data[f];L2(l,i);}d=a.nY;if(e>=d.lP){h=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,
b.jY,A(19));e=d.lP;J(b,b.jY,e,10);d=new I;c=b.jZ;j=c.data;f=b.jY;g=j.length;if(f>=0&&f<=(g-0|0)){d.j0=L(c.data,0,f);h.j1=1;h.j2=1;h.j3=d;B(h);}b=new H;S(b);B(b);}n=d.my.data[e];if(n>=0){d=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}d.it(n);f=h.ms;i=h.mF;k=h.mP;o=a.ok.mU;p=h.nT;d=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}d.iu(n,f,i,k,o,p);}e=e+1|0;}}}},
ACT=(a,b,c)=>{EB.iz(0);a.tb=0;},
ATn=()=>{let b,c,d,e;if(!De){b=X(1);c=b.data.length;d=new Gm;e=0+c|0;d.ko=(-1);d.ky=c;d.j9=c;d.kf=0;d.j9=e;d.ps=0;d.qJ=0;d.o9=b;}else{d=new C1;b=BJ(4);d.ko=(-1);d.ky=4;d.j9=4;d.k6=Ct;d.ly=0;d.k2=b;d.kf=0;d.j9=4;d.ma=1;d.lK=0;d.k6=Dl();d=G4(d);}ME=d;};
let Pi=F(I5);
let Qu=F(HG);
function Ul(){let a=this;C.call(a);a.tx=0;a.o3=null;a.m1=null;a.v8=0.0;a.tK=0;a.s4=0;a.sW=0;}
let AFK=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.v8=c;d=JH(b,c);a.tK=d*c|0;b=d-1|0;a.sW=b;a.s4=Fd(V(b));a.o3=Q(C,d);a.m1=X(d);return;}e=new Bm;f=new K;f.jZ=G(16);D(f,f.jY,A(66));ED(f,f.jY,c);g=new I;h=f.jZ;i=h.data;d=f.jY;j=i.length;if(d>=0&&d<=(j-0|0)){g.j0=L(h.data,0,d);e.j1=1;e.j2=1;e.j3=g;B(e);}f=new H;f.j1=1;f.j2=1;B(f);},
Gs=(a,b)=>{let c=new Ul();AFK(c,a,b);return c;},
E5=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bm;c.j1=1;c.j2=1;c.j3=A(67);B(c);}a:{d=a.o3;if(!b.lR){e=0;while(true){if(e>=b.j0.length)break a;b.lR=(31*b.lR|0)+b.j0.charCodeAt(e)|0;e=e+1|0;}}}f=Bl(Be(Ba(V(b.lR),E(2135587861, 2654435769)),a.s4));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof I))g=0;else{h=b;g=c.j0!==h.j0?0:1;}if(g)break;f=(f+1|0)&a.sW;}return f;},
EN=(a,b,c)=>{let d,e;d=E5(a,b);if(d>=0){a.m1.data[d]=c;return;}d= -(d+1|0)|0;e=a.o3.data;e[d]=b;a.m1.data[d]=c;c=a.tx+1|0;a.tx=c;if(c>=a.tK)APW(a,e.length<<1);},
APW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.o3.data.length;a.tK=b*a.v8|0;d=b-1|0;a.sW=d;a.s4=Fd(V(d));e=a.o3;f=a.m1;a.o3=Q(C,b);a.m1=X(b);if(a.tx>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.o3;if(!h.lR){k=0;while(true){if(k>=h.j0.length)break b;h.lR=(31*h.lR|0)+h.j0.charCodeAt(k)|0;k=k+1|0;}}}b=Bl(Be(Ba(V(h.lR),E(2135587861, 2654435769)),a.s4));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.sW;}l[b]=h;a.m1.data[b]=i;}g=g+1|0;}}}};
let ANs=F();
function EP(){let a=this;C.call(a);a.ky=0;a.kf=0;a.j9=0;a.ko=0;}
let U7=(a,b)=>{a.ko=(-1);a.ky=b;a.j9=b;},
CH=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.j9){a.kf=b;if(b<a.ko)a.ko=0;return a;}c=new Bm;d=a.j9;e=new K;e.jZ=G(16);D(e,e.jY,A(507));J(e,e.jY,b,10);D(e,e.jY,A(508));J(e,e.jY,d,10);d=e.jY;Bk(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=93;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
CQ=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.ky){if(a.ko>b)a.ko=(-1);a.j9=b;if(a.kf>b)a.kf=b;return a;}c=new Bm;d=a.ky;e=new K;e.jZ=G(16);D(e,e.jY,A(509));J(e,e.jY,b,10);D(e,e.jY,A(508));J(e,e.jY,d,10);d=e.jY;Bk(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=93;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);};
let Em=F(EP);
let Jq=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iB()){e=new F1;e.j1=1;e.j2=1;B(e);}f=a.j9;g=a.kf;if((f-g|0)<d){e=new IY;e.j1=1;e.j2=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(510));J(j,j.jY,i,10);D(j,j.jY,A(511));J(j,j.jY,f,10);k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iC(g,h[c]);i=i+1|0;g=l;c=f;}a.kf=a.kf+d|0;return a;}e
=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(512));J(j,j.jY,d,10);D(j,j.jY,A(513));k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.jZ=G(16);D(j,j.jY,A(514));J(j,j.jY,c,10);D(j,j.jY,A(508));J(j,j.jY,d,10);d=j.jY;Bk(j,d,d+1|0);b=j.jZ;h=b.data;h[d]=41;k=new I;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);},
AVv=(a,b)=>{CQ(a,b);return a;},
AWB=(a,b)=>{CH(a,b);return a;},
AVz=a=>{a.j9=a.kf;a.kf=0;a.ko=(-1);return a;},
AX_=a=>{a.kf=0;a.j9=a.ky;a.ko=(-1);return a;},
AMu=(a,b)=>{CQ(a,b);return a;},
AR3=(a,b)=>{CH(a,b);return a;};
let Hg=F(EP);
let Vl=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iB()){e=new F1;e.j1=1;e.j2=1;B(e);}f=a.j9;g=a.kf;if((f-g|0)<d){e=new IY;e.j1=1;e.j2=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(515));J(j,j.jY,i,10);D(j,j.jY,A(511));J(j,j.jY,f,10);k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iD(g,h[c]);i=i+1|0;g=l;c=f;}a.kf=a.kf+d|0;return a;}e
=new H;j=new K;j.jZ=G(16);D(j,j.jY,A(512));J(j,j.jY,d,10);D(j,j.jY,A(513));k=new I;b=j.jZ;h=b.data;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.jZ=G(16);D(j,j.jY,A(514));J(j,j.jY,c,10);D(j,j.jY,A(508));J(j,j.jY,d,10);d=j.jY;Bk(j,d,d+1|0);b=j.jZ;h=b.data;h[d]=41;k=new I;d=j.jY;f=h.length;if(d>=0&&d<=(f-0|0)){k.j0=L(b.data,0,d);e.j1=1;e.j2=1;e.j3=k;B(e);}e=new H;e.j1=1;e.j2=1;Bi(e);B(e);},
AW1=(a,b)=>{CQ(a,b);return a;},
AXb=(a,b)=>{CH(a,b);return a;},
AXp=a=>{a.j9=a.kf;a.kf=0;a.ko=(-1);return a;},
AX1=a=>{a.kf=0;a.j9=a.ky;a.ko=(-1);return a;},
AWk=(a,b)=>{CQ(a,b);return a;},
AUb=(a,b)=>{CH(a,b);return a;};
let Hf=F(EP);
let AT2=(a,b)=>{CH(a,b);return a;},
AWA=a=>{a.kf=0;a.j9=a.ky;a.ko=(-1);return a;};
function E4(){let a=this;EP.call(a);a.ly=0;a.k2=null;a.k6=null;}
let AMl=(a,b)=>{CQ(a,b);return a;},
Yl=(a,b)=>{CH(a,b);return a;};
function Hv(){C.call(this);this.sM=null;}
let Ct=null,J7=null,Mh=null;
let Dl=()=>{let b;if(Mh===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;Mh=(new Int8Array(b))[0]?J7:Ct;}return Mh;},
AX$=()=>{let b;b=new Hv;b.sM=A(4);Ct=b;b=new Hv;b.sM=A(5);J7=b;};
let AGu=F();
let Ei=F(0);
function C1(){let a=this;E4.call(a);a.ma=0;a.lK=0;}
let Xa=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j9)return a.k2.data[a.ly+b|0];c=new H;d=a.j9;e=new K;e.jZ=G(16);D(e,e.jY,A(516));J(e,e.jY,b,10);D(e,e.jY,A(508));J(e,e.jY,d,10);d=e.jY;Bk(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
J9=a=>{let b,c,d,e,f,g;b=a.j9;c=a.kf;d=(b-c|0)/2|0;if(a.k6!==Ct){e=new ON;f=a.ly+c|0;c=a.lK;e.ko=(-1);e.ky=d;e.j9=d;e.kf=0;e.j9=d;e.qf=f;e.oT=a;e.tN=c;return e;}e=new QG;b=a.ly+c|0;g=a.lK;e.ko=(-1);e.ky=d;e.j9=d;e.kf=0;e.j9=d;e.qf=b;e.oT=a;e.tN=g;return e;},
APF=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.j9){c=a.k2.data;b=a.ly+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.k6!==Ct)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new H;d=a.j9-3|0;i=new K;i.jZ=G(16);D(i,i.jY,A(516));J(i,i.jY,b,10);D(i,i.jY,A(508));J(i,i.jY,d,10);d=i.jY;Bk(i,d,d+1|0);c=i.jZ;j=c.data;j[d]=41;k=new I;d=i.jY;e=j.length;if(d>=0&&d<=(e-0|0)){k.j0=L(c.data,0,d);h.j1=1;h.j2=1;h.j3=k;B(h);}h=new H;h.j1=1;h.j2=1;Bi(h);B(h);},
AEJ=(a,b,c)=>{let d,e,f,g,h,i;if(a.lK){d=new F1;d.j1=1;d.j2=1;B(d);}if(b>=0&&(b+3|0)<a.j9){if(a.k6!==Ct){e=a.k2.data;b=a.ly+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.k2.data;b=a.ly+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new H;c=a.j9-3|0;f=new K;f.jZ=G(16);D(f,f.jY,A(516));J(f,f.jY,b,10);D(f,f.jY,A(508));J(f,f.jY,c,10);c=f.jY;Bk(f,c,c+1|0);e=f.jZ;g=e.data;g[c]=41;h=new I;c=f.jY;i=g.length;if(c>=
0&&c<=(i-0|0)){h.j0=L(e.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;d.j1=1;d.j2=1;B(d);},
G4=a=>{let b,c,d,e,f,g;b=a.j9;c=a.kf;d=(b-c|0)/4|0;if(a.k6!==Ct){e=new Ph;f=a.ly+c|0;c=a.lK;e.ko=(-1);e.ky=d;e.j9=d;e.kf=0;e.j9=d;e.pU=f;e.pT=a;e.uf=c;return e;}e=new S9;b=a.ly+c|0;g=a.lK;e.ko=(-1);e.ky=d;e.j9=d;e.kf=0;e.j9=d;e.pU=b;e.pT=a;e.uf=g;return e;},
Fb=a=>{let b,c,d,e,f,g;b=a.j9;c=a.kf;d=(b-c|0)/4|0;if(a.k6!==J7){e=new OZ;f=a.ly+c|0;c=a.lK;e.ko=(-1);e.ky=d;e.j9=d;e.kf=0;e.j9=d;e.pL=f;e.oY=a;e.vc=c;return e;}e=new Rx;b=a.ly+c|0;g=a.lK;e.ko=(-1);e.ky=d;e.j9=d;e.kf=0;e.j9=d;e.pL=b;e.oY=a;e.vc=g;return e;},
ATO=a=>{return a.k2.data;};
let AJ3=F();
let Tg=F(0);
function K_(){let a=this;C.call(a);a.we=null;a.nX=0;a.nQ=0;a.pX=null;a.qO=null;a.wK=0;a.po=0;}
let AQP=0;
let ABH=(a,b,c,d,e)=>{a.nX=0;a.nQ=0;a.po=0;a.we=b;a.qO=c;a.pX=d;a.wK=e;if(c!==null){b=US(a,c);a.qO=b;c=b.lw;a.nX=c===null?b.md:c.l$;a.nQ=c===null?b.mh:c.l9;if(d===null)a.pX=c===null?FD:Ii(c.lS);}},
I$=(a,b,c,d)=>{let e=new K_();ABH(e,a,b,c,d);return e;},
P_=a=>{let b,c;if(a.po){b=new R;b.j1=1;b.j2=1;b.j3=A(517);B(b);}if(a.qO===null){b=US(a,HZ(a.we));a.qO=b;c=b.lw;a.nX=c===null?b.md:c.l$;a.nQ=c===null?b.mh:c.l9;if(a.pX===null)a.pX=c===null?FD:Ii(c.lS);}a.po=1;},
US=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Bs===null&&AQP){c=b.lw;d=c===null?b.md:c.l$;e=c===null?b.mh:c.l9;f=Lp(d);g=Lp(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new FM;c=b.lw;JP(h,f,g,c===null?FD:Ii(c.lS));c=h.lw;if(c===null){Fh(b);Kb(h,b.oe,0,0,d,e,0,0,d,e);}else{i=b.lw.l7;j=c.l7;JY(i,j,0,0,d,e,0,0,d,e);}if(b.oz){c=new R;c.j1=1;c.j2=1;c.j3=A(62);B(c);}EF();GV(FT,b.p0);c=b.lw;if(c!==null)H_(c.l7);b.oz=1;return h;};
function FM(){let a=this;C.call(a);a.md=0;a.mh=0;a.oe=null;a.l4=null;a.p0=0;a.qA=null;a.xL=0;a.xN=0;a.xP=0;a.xO=0.0;a.sv=null;a.rg=null;a.xx=null;a.zV=null;a.pW=null;a.q3=null;a.vO=0;a.lw=null;a.oz=0;}
let LG=null;
let GC=()=>{GC=BQ(FM);AH6();};
let Ya=(a,b)=>{let c,d,e,f,g,h,i,j,k;GC();a.xL=255;a.xN=255;a.xP=255;a.sv=MV(255,255,255,a.xO);a.rg=KC;a.xx=MY;a.vO=0;c=b.uU;d=b.vr.sA;e=BC(d,c);d=e<0?null:d.kH.data[e];if(Dj.nx.uF){f=AMD(d.no);a.lw=AJT(f,0,f.data.length,0);Ki(a,(-1),(-1),null,null);}else{Ki(a,(-1),(-1),d.uG,null);if(a.pW===null){d=new R;g=b.uU;b=new K;b.jZ=G(16);D(b,b.jY,A(518));e=b.jY;if(g===null)g=A(2);D(b,e,g);D(b,b.jY,A(519));h=new I;i=b.jZ;f=i.data;j=b.jY;k=f.length;if(j>=0&&j<=(k-0|0)){h.j0=L(i.data,0,j);d.j1=1;d.j2=1;d.j3=h;B(d);}b=
new H;b.j1=1;b.j2=1;B(b);}}},
HZ=a=>{let b=new FM();Ya(b,a);return b;},
JP=(a,b,c,d)=>{GC();a.xL=255;a.xN=255;a.xP=255;a.sv=MV(255,255,255,a.xO);a.rg=KC;a.xx=MY;a.vO=0;Ki(a,b,c,null,null);},
AT8=(a,b,c)=>{let d=new FM();JP(d,a,b,c);return d;},
Ki=(a,b,c,d,e)=>{let f,g;if(e!==null){a.q3=e;a.md=e.getWidth();a.mh=e.getHeight();}else if(d===null){a.md=b;a.mh=c;}else{a.pW=d;a.md=d.width;a.mh=d.height;}if(De){d=new C1;f=BJ(4);d.ko=(-1);d.ky=4;d.j9=4;d.k6=Ct;d.ly=0;d.k2=f;d.kf=0;d.j9=4;d.ma=1;d.lK=0;d.k6=Dl();}else{f=BJ(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new C1;g=0+c|0;d.ko=(-1);d.ky=c;d.j9=c;d.k6=Ct;d.ly=0;d.k2=f;d.kf=0;d.j9=g;d.ma=0;d.lK=0;}else{d=new H;d.j1=1;d.j2=1;Bi(d);B(d);}}a.qA=d;EF();c=ND;ND=c+1|0;a.p0=c;AEJ(d,0,c);Ce(FT,a.p0,a);},
AGK=a=>{let b,c;E8();b=Gb.nk.document.createElement("canvas");a.oe=b;c=a.md;b.width=c;b=a.oe;c=a.mh;b.height=c;b=a.oe.getContext("2d");a.l4=b;GC();c=Bx(Fp.kg);b.globalCompositeOperation=c;},
MV=(b,c,d,e)=>{let f,g,h,i;GC();f=new K;f.jZ=G(16);D(f,f.jY,A(520));J(f,f.jY,b,10);b=f.jY;Bk(f,b,b+1|0);f.jZ.data[b]=44;J(f,f.jY,c,10);c=f.jY;Bk(f,c,c+1|0);f.jZ.data[c]=44;J(f,f.jY,d,10);c=f.jY;Bk(f,c,c+1|0);f.jZ.data[c]=44;ED(f,f.jY,e);d=f.jY;Bk(f,d,d+1|0);g=f.jZ;h=g.data;h[d]=41;i=new I;c=f.jY;d=h.length;if(c>=0&&c<=(d-0|0)){i.j0=L(g.data,0,c);return i;}f=new H;f.j1=1;f.j2=1;B(f);},
Fh=a=>{let b,c;if(a.oe===null){AGK(a);if(a.pW!==null){b=a.l4;c=Bx(LO.mB);b.globalCompositeOperation=c;b=a.l4;c=a.pW;b.drawImage(c,0.0,0.0);b=a.l4;c=Bx(Fp.mB);b.globalCompositeOperation=c;}if(a.q3!==null){c=a.l4;b=Bx(LO.mB);c.globalCompositeOperation=b;b=a.l4;c=a.q3;b.drawImage(c,0.0,0.0);b=a.l4;c=Bx(Fp.mB);b.globalCompositeOperation=c;}}},
Kb=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;Fh(a);if(a.rg===Ji){a:{k=a.l4;l=Bx(LG);k.fillStyle=l;k=a.l4;l=Bx(LG);k.strokeStyle=l;k=a.l4;l="destination-out";k.globalCompositeOperation=l;a.l4.beginPath();m=a.l4;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=LD;Fh(a);LI();switch(N8.data[k.ka]){case 1:break;case 2:a.l4.stroke();break a;default:break a;}a.l4.fill();}a.l4.closePath();r=a.l4;k=Bx(a.sv);r.fillStyle=k;r=a.l4;l=Bx(a.sv);r.strokeStyle=l;r=a.l4;k=Bx(Fp.mB);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.l4;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.zV=null;},
AH6=()=>{LG=MV(255,255,255,1.0);};
let Hy=F(Hf);
let AXr=a=>{let b,c;b=a.kf;if(b<a.j9){a.kf=b+1|0;return a.iy(b);}c=new Ns;c.j1=1;c.j2=1;B(c);},
El=(a,b)=>{let c,d;if(a.iB()){c=new F1;c.j1=1;c.j2=1;B(c);}d=a.kf;if(d<a.j9){a.kf=d+1|0;a.iL(d,b);return a;}c=new IY;c.j1=1;c.j2=1;B(c);},
E_=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j9)return a.iy(b);c=new H;d=a.j9;e=new K;e.jZ=G(16);D(e,e.jY,A(516));J(e,e.jY,b,10);D(e,e.jY,A(508));J(e,e.jY,d,10);d=e.jY;Bk(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
Vz=(a,b,c)=>{let d,e,f,g,h,i;if(a.iB()){d=new F1;d.j1=1;d.j2=1;B(d);}if(b>=0&&b<a.j9){a.iL(b,c);return a;}d=new H;c=a.j9;e=new K;e.jZ=G(16);D(e,e.jY,A(516));J(e,e.jY,b,10);D(e,e.jY,A(508));J(e,e.jY,c,10);c=e.jY;Bk(e,c,c+1|0);f=e.jZ;g=f.data;g[c]=41;h=new I;c=e.jY;i=g.length;if(c>=0&&c<=(i-0|0)){h.j0=L(f.data,0,c);d.j1=1;d.j2=1;d.j3=h;B(d);}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);},
AWc=a=>{return a.iB();};
function Gm(){let a=this;Hy.call(a);a.qJ=0;a.ps=0;a.o9=null;}
let AK_=(a,b)=>{return a.o9.data[b+a.ps|0];},
AIU=(a,b,c)=>{a.o9.data[b+a.ps|0]=c;},
W6=a=>{return a.qJ;};
let Ho=F(Em);
let R9=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j9)return a.iM(b);c=new H;d=a.j9;e=new K;e.jZ=G(16);D(e,e.jY,A(516));J(e,e.jY,b,10);D(e,e.jY,A(508));J(e,e.jY,d,10);d=e.jY;Bk(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
NQ=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.iB()){d=new F1;d.j1=1;d.j2=1;B(d);}if(b>=0&&b<a.j9){a.iC(b,c);return a;}d=new H;e=a.j9;f=new K;f.jZ=G(16);D(f,f.jY,A(516));J(f,f.jY,b,10);D(f,f.jY,A(508));J(f,f.jY,e,10);e=f.jY;Bk(f,e,e+1|0);g=f.jZ;h=g.data;h[e]=41;i=new I;e=f.jY;j=h.length;if(e>=0&&e<=(j-0|0)){i.j0=L(g.data,0,e);d.j1=1;d.j2=1;d.j3=i;B(d);}d=new H;d.j1=1;d.j2=1;Bi(d);B(d);},
AUY=a=>{return a.iB();};
function Id(){let a=this;Ho.call(a);a.ri=0;a.qH=0;a.p9=null;}
let AMJ=(a,b)=>{return a.p9.data[b+a.qH|0];},
ALq=(a,b,c)=>{a.p9.data[b+a.qH|0]=c;},
ALL=a=>{return a.ri;};
let JO=F(BG);
let Ji=null,KC=null,AJ6=null;
let AFf=()=>{let b,c;b=new JO;b.kg=A(521);b.ka=0;Ji=b;c=new JO;c.kg=A(522);c.ka=1;KC=c;AJ6=U(JO,[b,c]);};
let Ir=F(BG);
let XP=null,MY=null,AO5=null;
let AON=()=>{let b,c;b=new Ir;b.kg=A(523);b.ka=0;XP=b;c=new Ir;c.kg=A(524);c.ka=1;MY=c;AO5=U(Ir,[b,c]);};
let Ky=F();
function Vk(){let a=this;Ky.call(a);a.vr=null;a.uU=null;a.yO=null;}
let AEv=(a,b,c,d)=>{let e,f,g,h;if(d!==GZ&&d!==Q3&&d!==Tr){b=new R;c=new K;c.jZ=G(16);D(c,c.jY,A(525));D(c,c.jY,d===null?A(2):d.kg);D(c,c.jY,A(526));d=new I;e=c.jZ;f=e.data;g=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){d.j0=L(e.data,0,g);b.j1=1;b.j2=1;b.j3=d;B(b);}b=new H;b.j1=1;b.j2=1;B(b);}a.vr=b;b=M$(c,A(527),A(110));if(Lk(b,A(110)))b=Cj(b,0,b.j0.length-1|0);a.uU=b;a.yO=d;},
Jx=(a,b,c)=>{let d=new Vk();AEv(d,a,b,c);return d;};
function L7(){let a=this;C.call(a);a.l7=0;a.l$=0;a.l9=0;a.lS=0;a.qB=null;a.rP=null;}
let ABK=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=X(4);a.qB=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.rP=AP2(g,h,c,d);b=a.qB.data;a.l7=b[0];a.l$=b[1];a.l9=b[2];c=b[3];a.lS=c;if(e&&e!=c)ABm(a,e);},
AJT=(a,b,c,d)=>{let e=new L7();ABK(e,a,b,c,d);return e;},
ATr=(a,b,c,d)=>{let e;e=X(4);a.qB=e;a.rP=ANV(e.data,b,c,d);e=a.qB.data;a.l7=e[0];a.l$=e[1];a.l9=e[2];a.lS=e[3];},
AD4=(a,b,c)=>{let d=new L7();ATr(d,a,b,c);return d;},
ABm=(a,b)=>{let c,d,e,f,g;c=AD4(a.l$,a.l9,b);MQ(c.l7,0);d=a.l$;e=a.l9;f=a.l7;g=c.l7;JY(f,g,0,0,d,e,0,0,d,e);H_(a.l7);a.l7=c.l7;a.lS=c.lS;a.l9=c.l9;a.qB=c.qB;a.rP=c.rP;a.l$=c.l$;},
AP2=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
ANV=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
H_=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
JY=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
MQ=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let Ic=F(Hg);
let ANt=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.j9)return a.iR(b);c=new H;d=a.j9;e=new K;e.jZ=G(16);D(e,e.jY,A(516));J(e,e.jY,b,10);D(e,e.jY,A(508));J(e,e.jY,d,10);d=e.jY;Bk(e,d,d+1|0);f=e.jZ;g=f.data;g[d]=41;h=new I;d=e.jY;i=g.length;if(d>=0&&d<=(i-0|0)){h.j0=L(f.data,0,d);c.j1=1;c.j2=1;c.j3=h;B(c);}c=new H;c.j1=1;c.j2=1;Bi(c);B(c);},
AV4=a=>{return a.iB();};
function JU(){let a=this;Ic.call(a);a.rZ=0;a.rC=0;a.ra=null;}
let AEy=(a,b)=>{return a.ra.data[b+a.rC|0];},
AG$=(a,b,c)=>{a.ra.data[b+a.rC|0]=c;},
ACe=a=>{return a.rZ;};
let AK0=F();
function EH(){BG.call(this);this.n1=0;}
let HN=null,AJI=null,AMm=null,AIq=null,AL2=null,ARk=null,AE7=null,AFy=null;
let AAa=()=>{let b,c,d,e,f,g,h;b=new EH;b.kg=A(528);b.ka=0;b.n1=9728;HN=b;c=new EH;c.kg=A(529);c.ka=1;c.n1=9729;AJI=c;d=new EH;d.kg=A(530);d.ka=2;d.n1=9987;AMm=d;e=new EH;e.kg=A(531);e.ka=3;e.n1=9984;AIq=e;f=new EH;f.kg=A(532);f.ka=4;f.n1=9985;AL2=f;g=new EH;g.kg=A(533);g.ka=5;g.n1=9986;ARk=g;h=new EH;h.kg=A(534);h.ka=6;h.n1=9987;AE7=h;AFy=U(EH,[b,c,d,e,f,g,h]);};
function H9(){BG.call(this);this.rV=0;}
let AQc=null,H1=null,AJ_=null,AQy=null;
let AF8=()=>{let b,c,d;b=new H9;b.kg=A(535);b.ka=0;b.rV=33648;AQc=b;c=new H9;c.kg=A(536);c.ka=1;c.rV=33071;H1=c;d=new H9;d.kg=A(537);d.ka=2;d.rV=10497;AJ_=d;AQy=U(H9,[b,c,d]);};
let QX=F();
let ATc=(a,b)=>{b=a.S(b);BF();return b===null?null:b instanceof FS()&&b instanceof EM?(b[Bt]===true?b:b.kG):b;},
AA7=a=>{return a.eV();};
function H3(){let a=this;Hy.call(a);a.pT=null;a.uf=0;a.pU=0;}
let AIm=a=>{return a.uf;};
let Ph=F(H3);
let AEp=(a,b)=>{let c;c=a.pT.k2.data;b=a.pU+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
W4=(a,b,c)=>{let d;d=a.pT.k2.data;b=a.pU+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let S9=F(H3);
let APJ=(a,b)=>{let c;c=a.pT.k2.data;b=a.pU+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
Zo=(a,b,c)=>{let d;d=a.pT.k2.data;b=a.pU+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function Hq(){let a=this;Ho.call(a);a.oY=null;a.vc=0;a.pL=0;}
let AL1=a=>{return a.vc;},
ANq=a=>{return a.oY.k2.data;};
let OZ=F(Hq);
let AIv=(a,b)=>{let c;c=a.oY.k2.data;b=a.pL+(b*4|0)|0;return Ll((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
ANk=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Gl(c);e=a.oY.k2.data;b=a.pL+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let Rx=F(Hq);
let Xg=(a,b)=>{let c;c=a.oY.k2.data;b=a.pL+(b*4|0)|0;return Ll(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AIj=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Gl(c);e=a.oY.k2.data;b=a.pL+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function Hd(){let a=this;Ic.call(a);a.oT=null;a.tN=0;a.qf=0;}
let AFT=a=>{return a.tN;},
AN2=a=>{return a.oT.k2.data;};
let ON=F(Hd);
let ABX=(a,b)=>{let c;c=a.oT.k2.data;b=a.qf+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
AA2=(a,b,c)=>{let d;d=a.oT.k2.data;b=a.qf+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let QG=F(Hd);
let AKW=(a,b)=>{let c;c=a.oT.k2.data;b=a.qf+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
ABZ=(a,b,c)=>{let d;d=a.oT.k2.data;b=a.qf+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let LA=F(Bw);
let F1=F(LA);
let Ns=F(Bw);
let F2=F(BG);
let Q3=null,GZ=null,AJs=null,AD1=null,Tr=null,ANJ=null;
let ADq=()=>{let b,c,d,e,f;b=new F2;b.kg=A(538);b.ka=0;Q3=b;c=new F2;c.kg=A(539);c.ka=1;GZ=c;d=new F2;d.kg=A(540);d.ka=2;AJs=d;e=new F2;e.kg=A(541);e.ka=3;AD1=e;f=new F2;f.kg=A(542);f.ka=4;Tr=f;ANJ=U(F2,[b,c,d,e,f]);};
let ER=F(BG);
let RU=null,AOn=null,Ru=null,Un=null,SA=null,Ri=null,FD=null,AMz=null;
let Ii=b=>{let c,d,e,f,g,h,i;if(b==1)return RU;if(b==2)return Ru;if(b==5)return Un;if(b==6)return SA;if(b==3)return Ri;if(b==4)return FD;c=new R;d=new K;d.jZ=G(16);D(d,d.jY,A(543));J(d,d.jY,b,10);e=new I;f=d.jZ;g=f.data;h=d.jY;i=g.length;if(h>=0&&h<=(i-0|0)){e.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=e;B(c);}c=new H;c.j1=1;c.j2=1;B(c);},
W5=()=>{let b,c,d,e,f,g,h;b=new ER;b.kg=A(200);b.ka=0;RU=b;c=new ER;c.kg=A(544);c.ka=1;AOn=c;d=new ER;d.kg=A(545);d.ka=2;Ru=d;e=new ER;e.kg=A(546);e.ka=3;Un=e;f=new ER;f.kg=A(547);f.ka=4;SA=f;g=new ER;g.kg=A(548);g.ka=5;Ri=g;h=new ER;h.kg=A(549);h.ka=6;FD=h;AMz=U(ER,[b,c,d,e,f,g,h]);};
let ADa=F();
let L5=0,Jl=null,Je=null;
let AKd=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:Gl(b);c.vL=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.tZ=0;c.tL=0;return;}if(f)d=e|8388608;else{d=e<<1;while(D7(C7(V(d),V(8388608)),Cc)){d=d<<1;f=f+(-1)|0;}}g=Je;h=AL6(g,0,g.data.length,f);if(h<0)h= -h|0;g=Je.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=Jl.data[e];j=C7(V(d),E(4294967295, 0));k=Bl(Be(Ba(j,C7(V(e),E(4294967295, 0))),32-i|0));if(k<L5){while(EY(k,L5)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=Je.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Bl(Be(Ba(j,C7(V(Jl.data[e]),E(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=Jl.data;f=h+1|0;e=g[f];m=i-1|0;n=Ba(C7(V(l),E(4294967295, 0)),C7(V(e),E(4294967295, 0)));e=32-m|0;o=Bl(Be(n,e));p=Bl(Be(Ba(C7(V(d-1|0),E(4294967295, 0)),C7(V(g[f]),E(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(EY(D9(k,r),D9(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(EY(D9(k,l),D9(o,l))>=0)break;m=l;}s=EY(q,m);d=s>0?Dr(D9(k,q),q):s<0?Dr(D9(k,m),m)+m|0:Dr(D9((k+(m/2|0)|0),m),m);if(Fc(V(d),V(1000000000))>=0)while(true){h=h
+1|0;d=D9(d,10);if(EY(d,1000000000)<0)break;}else if(EY(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.tZ=d;c.tL=h-50|0;},
ADI=()=>{L5=D9((-1),10);Jl=IG([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Je=IG([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let Jg=F(BG);
let LD=null,PU=null,U9=null;
let ATl=()=>{let b,c;b=new Jg;b.kg=A(550);b.ka=0;LD=b;c=new Jg;c.kg=A(551);c.ka=1;PU=c;U9=U(Jg,[b,c]);};
function DE(){BG.call(this);this.mB=null;}
let LO=null,AAH=null,ABk=null,XK=null,AO8=null,ATv=null,AAW=null,AGD=null,AIh=null,Fp=null,ANE=null,ANO=null;
let AE5=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new DE;b.kg=A(552);b.ka=0;b.mB=A(553);LO=b;c=new DE;c.kg=A(554);c.ka=1;c.mB=A(555);AAH=c;d=new DE;d.kg=A(556);d.ka=2;d.mB=A(557);ABk=d;e=new DE;e.kg=A(558);e.ka=3;e.mB=A(559);XK=e;f=new DE;f.kg=A(560);f.ka=4;f.mB=A(561);AO8=f;g=new DE;g.kg=A(562);g.ka=5;g.mB=A(563);ATv=g;h=new DE;h.kg=A(564);h.ka=6;h.mB=A(565);AAW=h;i=new DE;i.kg=A(566);i.ka=7;i.mB=A(567);AGD=i;j=new DE;j.kg=A(568);j.ka=8;j.mB=A(569);AIh=j;k=new DE;k.kg=A(570);k.ka=9;k.mB=A(571);Fp=k;l=new DE;l.kg=A(572);l.ka
=10;l.mB=A(573);ANE=l;ANO=U(DE,[b,c,d,e,f,g,h,i,j,k,l]);};
let AM5=F(0);
let IJ=F(BG);
let O8=null,U1=null,ADb=null;
let ABt=()=>{let b,c;b=new IJ;b.kg=A(574);b.ka=0;O8=b;c=new IJ;c.kg=A(575);c.ka=1;U1=c;ADb=U(IJ,[b,c]);};
let AL4=F();
let KR=0;
let ANZ=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!KR){Qv(b,c,d,e);return;}f=Hu;if(f!==NM&&f!==f&&f!==M8)ANi(b,c,d,e);else{g=Ca;f=c.lw;if(f===null)h=6408;else a:{e=f.lS;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new R;g=new K;g.jZ=G(16);Ee(g,g.jY,A(63));J(g,g.jY,e,10);f=new I;i=g.jZ;j=i.data;d=g.jY;e=j.length;if(d>=0&&d<=(e-0|0)){f.j0=L(i.data,0,d);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}k=f===null?c.md:f.l$;l=f===null
?c.mh:f.l9;if(f===null)m=6408;else b:{m=f.lS;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new R;g=new K;Bp(g);g.jZ=G(16);ASM(g,g.jY,A(63));J(g,g.jY,m,10);f=new I;i=g.jZ;j=i.data;d=g.jY;e=j.length;if(d>=0&&d<=(e-0|0)){f.j0=L(i.data,0,d);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(f===null)n=5121;else c:{n=f.lS;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new R;g=new K;g.jZ
=G(16);Ee(g,g.jY,A(63));J(g,g.jY,n,10);f=new I;i=g.jZ;j=i.data;d=g.jY;e=j.length;if(d>=0&&d<=(e-0|0)){f.j0=L(i.data,0,d);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}n=5121;}g.cA(b,0,h,k,l,0,m,n,c.qA);Bs.iW(b);}},
ANi=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B5.pS.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B5.pS.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bs.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BE;h.kb=g;i=h;g.classObject=i;}}if(h.j7===null)h.j7=T(h.kb.$meta.name);i=h.j7;if(i===A(576))f=1;else if(!(A(576) instanceof I))f=0;else{g=A(576);f=i.j0!==g.j0?0:1;}if(!f&&EB===null){Qv(b,c,d,e);break a;}}g=Ca;i=c.lw;if(i===null)f=6408;else b:{e=i.lS;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new R;g=new K;g.jZ=G(16);BZ(g,g.jY,Cn(A(63)));J(g,g.jY,e,10);i=new I;j=g.jZ;k=j.data;d=g.jY;e=k.length;if(d>=0&&d<=(e-0|0)){i.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}l=i===null?c.md:i.l$;m=i===null?c.mh:i.l9;if(i===null)n=6408;else c:{n=i.lS;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new R;g=new K;g.jZ
=G(16);Ee(g,g.jY,A(63));J(g,g.jY,n,10);i=new I;j=g.jZ;k=j.data;d=g.jY;e=k.length;if(d>=0&&d<=(e-0|0)){i.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(i===null)o=5121;else d:{o=i.lS;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new R;g=new K;g.jZ=G(16);BZ(g,g.jY,Cn(A(63)));J(g,g.jY,o,10);i=new I;j=g.jZ;k=j.data;d=g.jY;e=k.length;if(d>=0&&d<=(e-0|0)){i.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=i;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}o=5121;}g.cA(b,
0,f,l,m,0,n,o,c.qA);Bs.iW(b);}},
Qv=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=Ca;g=c.lw;if(g===null)h=6408;else a:{i=g.lS;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new R;f=new K;f.jZ=G(16);BZ(f,f.jY,Cn(A(63)));J(f,f.jY,i,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}h=6406;}l=g===null?c.md:g.l$;m=g===null?c.mh:g.l9;if(g===null)n=6408;else b:{n=g.lS;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new R;f=new K;f.jZ=G(16);Ee(f,f.jY,A(63));J(f,f.jY,n,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}if(g===null)o=5121;else c:{o=g.lS;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new R;f=new K;f.jZ=G(16);BZ(f,f.jY,Cn(A(63)));J(f,f.jY,o,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e
=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}f.cA(b,0,h,l,m,0,n,o,c.qA);if(Bs===null&&d!=e){c=new R;c.j1=1;c.j2=1;c.j3=A(577);B(c);}f=c.lw;p=(f===null?c.md:f.l$)/2|0;i=(f===null?c.mh:f.l9)/2|0;h=1;while(p>0&&i>0){f=new FM;g=c.lw;JP(f,p,i,g===null?FD:Ii(g.lS));g=Ji;f.rg=g;q=f.lw;if(q===null){Fh(f);g=f.l4;q=Bx(Fp.kg);g.globalCompositeOperation=q;}else{d=g!==g?1:0;MQ(q.l7,d);}g=c.lw;l=g===null?c.md:g.l$;m=g===null?c.mh:g.l9;q=f.lw;if(q===null){Fh(c);Kb(f,
c.oe,0,0,l,m,0,0,p,i);}else{r=g.l7;s=q.l7;JY(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.oz){f=new R;f.j1=1;f.j2=1;f.j3=A(62);B(f);}EF();GV(FT,c.p0);g=c.lw;if(g!==null)H_(g.l7);c.oz=1;}c=Ca;g=f.lw;if(g===null)d=6408;else d:{d=g.lS;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new R;f=new K;f.jZ=G(16);BZ(f,f.jY,Cn(A(63)));J(f,f.jY,d,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1
=1;c.j2=1;B(c);}d=6406;}e=g===null?f.md:g.l$;p=g===null?f.mh:g.l9;if(g===null)l=6408;else e:{l=g.lS;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new R;f=new K;f.jZ=G(16);Ee(f,f.jY,A(63));J(f,f.jY,l,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.lS;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new R;f=new K;f.jZ=G(16);BZ(f,f.jY,Cn(A(63)));J(f,f.jY,m,10);g=new I;j=f.jZ;k=j.data;d=f.jY;e=k.length;if(d>=0&&d<=(e-0|0)){g.j0=L(j.data,0,d);c.j1=1;c.j2=1;c.j3=g;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}m=5121;}c.cA(b,h,d,e,p,0,l,m,f.qA);c=f.lw;p=(c===null?f.md:c.l$)/2|0;i=(c===null?f.mh:c.l9)/2|0;h=h+1|0;c=f;}},
AV$=()=>{KR=1;};
let Ts=F();
let N8=null;
let LI=()=>{LI=BQ(Ts);ATf();};
let ATf=()=>{let b,c;b=X((U9.p()).data.length);c=b.data;N8=b;c[LD.ka]=1;c[PU.ka]=2;};
let IY=F(Bw);
function QP(){let a=this;CI.call(a);a.Ap=null;a.xr=null;a.wa=null;a.yD=null;a.As=null;a.y3=null;a.zw=null;a.zg=null;a.zG=null;a.z5=null;a.r2=null;a.zQ=null;a.zz=null;}
let AMf=(a,b)=>{let c,d,e,f,g,h,i,j,k;Ge(a);c=new Ob;c.rB=0;a.r2=c;d=new H4;e=HJ;f=Jx(e.rM,A(578),GZ);c=null;g=I$(f,HZ(f),c,0);c=Ca;e=c.j$.createTexture();h=c.ni;c.ni=h+1|0;Ce(c.nP,h,Ch(e));c=HN;d.pb=c;d.pK=c;c=H1;d.o2=c;d.pe=c;d.qK=1.0;d.nf=3553;d.p_=h;JW(d,g);c=Dj;e=EU;if(c===null)e=Jc(e);else{i=Hi(c);e=IS(e,c,i&(e.mr.data.length-1|0),i);}e=e===null?null:e.m0;if(e===null){e=new Bf;Bp(e);e.ks=1;e.j8=Q(C,16);}Bg(e,d);GO(EU,c,e);a.Ap=d;c=new GS;c.od=d;d=d.ow;JG(c,0,0,d.nX,d.nQ);a.xr=c;if(!(a.lT===21.0&&a.l8===
21.0)){a.lT=21.0;a.l8=21.0;}AQw(a,a.kJ,a.kY,a.lT,a.l8);c=new Bc;j=a.lT/2.0;k=a.l8/2.0;c.j6=j;c.j5=k;a.wa=c;if(!(a.ox===1.0&&a.oy===1.0)){a.ox=1.0;a.oy=1.0;}d=b.qI;a.yD=d.oo;a.As=d.q0;a.y3=d.qh;a.zw=d.pZ;a.zg=d.qw;a.zG=d.oR;a.z5=d.qP;a.r2.rB=1;c=new Cb;c.pu=12;a.zz=c;a.zQ=AKT(b);},
AIK=a=>{let b=new QP();AMf(b,a);return b;},
AMY=(a,b,c)=>{let d,e,f,g,h;d=a.qN;c=d.kT;e=d.kS;f=d.kR;g=d.kQ;d=b.rq;d.kT=c;d.kS=e;d.kR=f;d.kQ=g;CY(d);b.s2=Fk(b.rq);d=a.xr;e=a.kJ;h=a.wa;QA(b,d,e-h.j6,a.kY-h.j5,a.qC,a.qD,a.lT,a.l8,a.ox,a.oy,a.pf);},
AOu=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.r2;if(c.rB){c.rB=0;c=AJR(a);d=a.r2;Cx();e=Br;f=BC(e,M(Dk));g=f<0?null:e.kH.data[f];if(g===null){g=new Ck;e=new Bf;e.ks=0;e.j8=Q(C,4);g.kh=e;g.kO=100;a:{try{e=Cp(M(Dk),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{e=Co(M(Dk),null);Cr(e,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}e=null;}g.kq=e;if(e===null){c=new Bw;d=new K;Bp(d);d.jZ=G(16);BW(d,d.jY,A(21));if(M(Dk).j7===null)M(Dk).j7=T(M(Dk).kb.$meta.name);h
=M(Dk).j7;BW(d,d.jY,h);h=new I;i=d.jZ;j=i.data;f=d.jY;Bp(h);ET(0,f,j.length);h.j0=L(i.data,0,f);c.j1=1;c.j2=1;Bi(c);c.j3=h;B(c);}B6(Br,M(Dk),g);}h=g.kh;k=h.j4;if(k){if(!k){c=new BK;c.j1=1;c.j2=1;Bi(c);c.j3=A(22);B(c);}k=k-1|0;h.j4=k;i=h.j8.data;h=i[k];i[k]=null;}else b:{try{h=CG(g.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){d=$$je;}else{throw $$e;}}h=new R;c=new K;c.jZ=G(16);D(c,c.jY,A(23));l=g.kq.ls.lq;if(l.j7===null)l.j7=T(l.kb.$meta.name);e=l.j7;D(c,c.jY,e);e=new I;i=c.jZ;j=i.data;f=c.jY;m
=j.length;if(f>=0&&f<=(m-0|0)){e.j0=L(i.data,0,f);h.j1=1;h.j2=1;Bi(h);h.j3=e;h.li=d;B(h);}B(Ft());}h=h;h.lA=g;h=h;Bg(h.lr,c);e=h.kZ;if(e!==null){c.kZ=e;if(c.kW===null)c.kW=e;}Bg(h.lr,d);c=h.kZ;if(c!==null){d.kZ=c;if(d.kW===null)d.kW=c;}c=h.lr;k=0;f=c.j4;while(k<f){if(k>=c.j4){h=new H;d=new K;d.jZ=G(16);D(d,d.jY,A(18));J(d,d.jY,k,10);D(d,d.jY,A(19));k=c.j4;J(d,d.jY,k,10);c=new I;i=d.jZ;j=i.data;f=d.jY;m=j.length;if(f>=0&&f<=(m-0|0)){c.j0=L(i.data,0,f);h.j1=1;h.j2=1;h.j3=c;B(h);}c=new H;Iv(c);B(c);}c.j8.data[k].bx(a);k
=k+1|0;}h.kZ=a;if(h.kW===null)h.kW=a;Bg(a.rh,h);c=a.lL;c!==null&&!c.rz;}IB(a,b);};
let UN=F();
let Ro=null;
let NN=()=>{NN=BQ(UN);Ym();};
let AIu=(b,c,d,e)=>{NN();a:{b:{if(Ro===MW){if(B5.ld.width!=B5.ld.width)break b;if(B5.ld.height!=B5.ld.height)break b;}Ca.dE(b,c,d,e);break a;}Ca.dE(Dr(b,B5.ld.width)/B5.ld.width|0,Dr(c,B5.ld.height)/B5.ld.height|0,Dr(d,B5.ld.width)/B5.ld.width|0,Dr(e,B5.ld.height)/B5.ld.height|0);}},
Ym=()=>{Ro=MW;};
let ADe=F();
function M9(){let a=this;C.call(a);a.qj=null;a.nW=null;}
let AQq=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qj.readyState==4){if(a.qj.status==200){if(a.nW.nB.mN){if(BU===null){b=new CJ;c=new Ci;c.lB=BJ(32);b.lX=c;c=new K;Bp(c);c.jZ=G(16);b.lF=c;b.lD=G(32);b.lG=0;b.lI=Cg;BU=b;}b=a.nW.ny;c=new K;c.jZ=G(16);D(c,c.jY,A(579));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g
=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BV(Bx(b));BV("\n");}else{b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}}b=a.nW;b.nM.iZ(b.ny,T(a.qj.responseText));}else if(a.qj.status!=404&&a.qj.status!=403){try{i=V(100);$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof Dx){}else{throw $$e;}}b=a.nW;c=b.nB;d=b.o4;j=b.ny;b=b.nM;if(c.mN){if(BU===null){k=new CJ;l=new Ci;l.lB=BJ(32);Bp(k);k.lX=l;l=new K;Di(l,16);k.lF=l;k.lD=G(32);k.lG=0;k.lI=Cg;BU=k;}k=new K;k.jZ=G(16);D(k,k.jY,A(97));D(k,k.jY,j===null?A(2)
:j);l=new I;e=k.jZ;f=e.data;h=k.jY;m=f.length;if(h>=0&&h<=(m-0|0)){l.j0=L(e.data,0,h);BV(Bx(l));BV("\n");}else{b=new H;S(b);B(b);}}c.lc=c.lc+1|0;k=new G8;k.nB=c;k.o4=d;k.ny=j;k.nM=b;b=null;c=null;k.mY=new C;k.mX=1;k.nv=c;k.nL=b;g=CS;CS=g+1|0;k.nK=V(g);b=new En;b.nw=k;EI(b);}else{b=a.nW;b.nM.i0(b.ny);}b=a.nW.nB;b.lc=b.lc-1|0;}return;case 1:a:{try{Ld(i);if(Fz()){break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof Dx){}else{throw $$e;}}}b=a.nW;c=b.nB;d=b.o4;j=b.ny;b=b.nM;if(c.mN){if(BU===null){k=new CJ;l
=new Ci;l.lB=BJ(32);Bp(k);k.lX=l;l=new K;Di(l,16);k.lF=l;k.lD=G(32);k.lG=0;k.lI=Cg;BU=k;}k=new K;k.jZ=G(16);D(k,k.jY,A(97));D(k,k.jY,j===null?A(2):j);l=new I;e=k.jZ;f=e.data;h=k.jY;m=f.length;if(h>=0&&h<=(m-0|0)){l.j0=L(e.data,0,h);BV(Bx(l));BV("\n");}else{b=new H;S(b);B(b);}}c.lc=c.lc+1|0;k=new G8;k.nB=c;k.o4=d;k.ny=j;k.nM=b;b=null;c=null;k.mY=new C;k.mX=1;k.nv=c;k.nL=b;g=CS;CS=g+1|0;k.nK=V(g);b=new En;b.nw=k;EI(b);b=a.nW.nB;b.lc=b.lc-1|0;return;default:Fr();}}Dg().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AF9=(a,b)=>{let $p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQq(a,b);if(Fz()){break _;}return;default:Fr();}}Dg().s(a,b,$p);};
function Ob(){BP.call(this);this.rB=0;}
let AJO=(a,b)=>{a.rB=1;return 1;};
let Pg=F();
let M_=null,Rl=null,WR=null,AFr=null,ZH=null,AQ5=null,AJY=null,Gr=null;
let AIe=(a,b)=>{let c;c=b.qI;M_=c.oo;Rl=c.q0;WR=c.qh;AFr=c.pZ;ZH=c.qw;AQ5=c.oR;AJY=c.qP;},
AKT=a=>{let b=new Pg();AIe(b,a);return b;},
AJR=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je;c=M_;d=c.j4;e=d-1|0;d=BT(e,d);if(d>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;g=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){c.j0=L(g.data,0,d);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}g=c.j8.data;j=g[e].j6;if(d>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;g=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){c.j0=L(g.data,0,d);f.j1
=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}k=g[e].j5;c=null;Cx();l=Br;d=BC(l,M(Cb));m=d<0?null:l.kH.data[d];if(m===null){m=new Ck;l=new Bf;Bp(l);l.ks=0;l.j8=Q(C,4);m.kh=l;m.kO=100;a:{try{l=Cp(M(Cb),null);break a;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{l=Co(M(Cb),null);Cr(l,1);break a;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}l=null;}m.kq=l;if(l===null){b=new Bw;c=new K;Di(c,16);BZ(c,c.jY,A(21));if(M(Cb).j7===null)M(Cb).j7=T(M(Cb).kb.$meta.name);f=M(Cb).j7;BZ(c,
c.jY,f);FY(b,KZ(c.jZ,0,c.jY));B(b);}B6(Br,M(Cb),m);}f=m.kh;e=f.j4;if(e){if(!e){b=new BK;FY(b,A(22));B(b);}e=e-1|0;f.j4=e;g=f.j8.data;f=g[e];g[e]=null;}else b:{try{f=CG(m.kq,null);break b;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){c=$$je;}else{throw $$e;}}f=new R;b=new K;Bp(b);b.jZ=G(16);BW(b,b.jY,A(23));n=m.kq.ls.lq;if(n.j7===null)n.j7=T(n.kb.$meta.name);l=n.j7;BW(b,b.jY,l);l=new I;g=b.jZ;h=g.data;d=b.jY;Bp(l);ET(0,d,h.length);l.j0=L(g.data,0,d);Ja(f,l,c);B(f);}f=f;f.lA=m;f=f;f.rs=j;f.rr=k;f.qy=5.0;f.oX
=c;Gr=f;k=b.kJ;c=Rl;d=c.j4;i=BT(0,d);if(i>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,0,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;g=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){c.j0=L(g.data,0,d);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}c:{g=c.j8.data;if(k===g[0].j6){k=b.kY;if(i>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,0,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;g=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){c.j0=L(g.data,0,d);f.j1=1;f.j2=1;f.j3
=c;B(f);}b=new H;S(b);B(b);}if(k===g[0].j5){e=d-1|0;d=BT(e,d);if(d>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;g=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){c.j0=L(g.data,0,d);f.j1=1;f.j2=1;f.j3=c;B(f);}b=new H;S(b);B(b);}j=g[e].j6;if(d>=0){f=new H;b=new K;b.jZ=G(16);D(b,b.jY,A(18));J(b,b.jY,e,10);D(b,b.jY,A(19));e=c.j4;J(b,b.jY,e,10);c=new I;g=b.jZ;h=g.data;d=b.jY;i=h.length;if(d>=0&&d<=(i-0|0)){c.j0=L(g.data,0,d);f.j1=1;f.j2=1;f.j3=c;B(f);}b
=new H;S(b);B(b);}k=g[e].j5;b=null;f=Br;d=BC(f,M(Cb));l=d<0?null:f.kH.data[d];if(l===null){l=new Ck;f=new Bf;Bp(f);f.ks=0;f.j8=Q(C,4);l.kh=f;l.kO=100;d:{try{f=Cp(M(Cb),null);break d;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{f=Co(M(Cb),null);Cr(f,1);break d;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}f=null;}l.kq=f;if(f===null){b=new Bw;f=new K;Di(f,16);BZ(f,f.jY,A(21));if(M(Cb).j7===null)M(Cb).j7=T(M(Cb).kb.$meta.name);c=M(Cb).j7;BZ(f,f.jY,c);FY(b,KZ(f.jZ,0,f.jY));B(b);}B6(Br,
M(Cb),l);}e:{c=l.kh;e=c.j4;if(e){if(!e){b=new BK;FY(b,A(22));B(b);}e=e-1|0;c.j4=e;g=c.j8.data;c=g[e];g[e]=null;}else try{c=CG(l.kq,null);break e;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){c=$$je;f=new R;b=new K;Bp(b);b.jZ=G(16);BW(b,b.jY,A(23));n=l.kq.ls.lq;if(n.j7===null)n.j7=T(n.kb.$meta.name);l=n.j7;BW(b,b.jY,l);l=new I;g=b.jZ;h=g.data;d=b.jY;Bp(l);ET(0,d,h.length);l.j0=L(g.data,0,d);Ja(f,l,c);B(f);}else{throw $$e;}}}c=c;c.lA=l;c=c;c.rs=j;c.rr=k;c.qy=5.0;c.oX=b;Gr=c;break c;}}b=M_;e=b.j4;d=e-1|0;e=BT(d,
e);if(e>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,d,10);D(c,c.jY,A(19));e=b.j4;J(c,c.jY,e,10);b=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}g=b.j8.data;j=g[d].j6;if(e>=0){f=new H;c=new K;c.jZ=G(16);D(c,c.jY,A(18));J(c,c.jY,d,10);D(c,c.jY,A(19));e=b.j4;J(c,c.jY,e,10);b=new I;g=c.jZ;h=g.data;d=c.jY;i=h.length;if(d>=0&&d<=(i-0|0)){b.j0=L(g.data,0,d);f.j1=1;f.j2=1;f.j3=b;B(f);}b=new H;S(b);B(b);}k=g[d].j5;b=null;f=Br;d
=BC(f,M(Cb));l=d<0?null:f.kH.data[d];if(l===null){l=new Ck;f=new Bf;Bp(f);f.ks=0;f.j8=Q(C,4);l.kh=f;l.kO=100;f:{try{f=Cp(M(Cb),null);break f;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){}else{throw $$e;}}try{f=Co(M(Cb),null);Cr(f,1);break f;}catch($$e){$$je=Y($$e);if($$je instanceof B3){}else{throw $$e;}}f=null;}l.kq=f;if(f===null){b=new Bw;f=new K;Di(f,16);BZ(f,f.jY,A(21));if(M(Cb).j7===null)M(Cb).j7=T(M(Cb).kb.$meta.name);c=M(Cb).j7;BZ(f,f.jY,c);FY(b,KZ(f.jZ,0,f.jY));B(b);}B6(Br,M(Cb),l);}g:{c=l.kh;e=c.j4;if
(e){if(!e){b=new BK;FY(b,A(22));B(b);}e=e-1|0;c.j4=e;g=c.j8.data;c=g[e];g[e]=null;}else try{c=CG(l.kq,null);break g;}catch($$e){$$je=Y($$e);if($$je instanceof Bz){c=$$je;f=new R;b=new K;Bp(b);b.jZ=G(16);BW(b,b.jY,A(23));n=l.kq.ls.lq;if(n.j7===null)n.j7=T(n.kb.$meta.name);l=n.j7;BW(b,b.jY,l);l=new I;g=b.jZ;h=g.data;d=b.jY;Bp(l);ET(0,d,h.length);l.j0=L(g.data,0,d);Ja(f,l,c);B(f);}else{throw $$e;}}}c=c;c.lA=l;c=c;c.rs=j;c.rr=k;c.qy=5.0;c.oX=b;Gr=c;}return Gr;},
AVc=()=>{let b;b=new Cb;b.pu=12;Gr=b;};
let JB=F(BG);
let MW=null,AJv=null,AC7=null;
let ZY=()=>{let b,c;b=new JB;b.kg=A(580);b.ka=0;MW=b;c=new JB;c.kg=A(581);c.ka=1;AJv=c;AC7=U(JB,[b,c]);};
let N9=F(0);
function Uw(){let a=this;C.call(a);a.k$=null;a.om=0;a.s9=null;a.rb=null;a.sL=null;a.x_=null;a.uW=null;a.mO=null;a.sG=0;a.zc=0.0;}
let AMB=(a,b,c)=>{let d,e,f,g,h,i,j;a.om=0;a.s9=C_();a.rb=C_();a.sL=C_();a.x_=new Bc;d=new BI;d.kT=1.0;d.kS=1.0;d.kR=1.0;d.kQ=1.0;CY(d);a.uW=d;a.zc=0.75;if(c!==null)a.k$=AHr(b,0,1,0,c);else{c=new LM;e=Q2(WW(0,1,0),AJp(0,1,0));if(!e.nJ){c=new R;d=new K;d.jZ=G(16);D(d,d.jY,A(476));if(!e.nJ)f=e.nm;else{f=Bs.g_(e.mM);e.nm=f;}D(d,d.jY,f);f=new I;g=d.jZ;h=g.data;i=d.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);c.j1=1;c.j2=1;c.j3=f;B(c);}c=new H;c.j1=1;c.j2=1;B(c);}SH(c,b,0,1,0,e);c.z8=1;a.k$=c;}MA(a.s9,0.0,
0.0+B5.ld.width,0.0,0.0+B5.ld.height,0.0,1.0);a.om=1;},
AIR=(a,b)=>{let c=new Uw();AMB(c,a,b);return c;},
FZ=(a,b)=>{let c,d;if(a.mO!==null){b=new BK;b.j1=1;b.j2=1;b.j3=A(582);B(b);}a.mO=b;if(a.om){Dc(a.sL,a.s9.lj);OD(a.sL.lj,a.rb.lj);a.om=0;}b=a.k$;c=a.sL;d=a.mO.sB;Dc(b.ug,c.lj);b.w1=d;},
AJm=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;AGo(a,H2,RA,8);FQ();o=F_.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.mO!==H2){bf=a.k$;bf.mq.data[bf.mg+bf.mI|0]=Dw(k.kT,k.kS,k.kR,k.kQ);Dy(a.k$,x,y,0.0);bf=a.k$;bf.mq.data[bf.mg+bf.mI|0]
=Dw(l.kT,l.kS,l.kR,l.kQ);Dy(a.k$,z,ba,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(m.kT,m.kS,m.kR,m.kQ);Dy(a.k$,bb,bc,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(m.kT,m.kS,m.kR,m.kQ);Dy(a.k$,bb,bc,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(n.kT,n.kS,n.kR,n.kQ);Dy(a.k$,bd,be,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(k.kT,k.kS,k.kR,k.kQ);Dy(a.k$,x,y,0.0);}else{bf=a.k$;bf.mq.data[bf.mg+bf.mI|0]=Dw(k.kT,k.kS,k.kR,k.kQ);Dy(a.k$,x,y,0.0);bf=a.k$;bf.mq.data[bf.mg+bf.mI|0]=Dw(l.kT,l.kS,l.kR,l.kQ);Dy(a.k$,z,ba,0.0);bf=a.k$;bf.mq.data[bf.mg
+bf.mI|0]=Dw(l.kT,l.kS,l.kR,l.kQ);Dy(a.k$,z,ba,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(m.kT,m.kS,m.kR,m.kQ);Dy(a.k$,bb,bc,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(m.kT,m.kS,m.kR,m.kQ);Dy(a.k$,bb,bc,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(n.kT,n.kS,n.kR,n.kQ);Dy(a.k$,bd,be,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(n.kT,n.kS,n.kR,n.kQ);Dy(a.k$,bd,be,0.0);l=a.k$;l.mq.data[l.mg+l.mI|0]=Dw(k.kT,k.kS,k.kR,k.kQ);Dy(a.k$,x,y,0.0);}},
AGo=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mO;if(e===null){b=new BK;b.j1=1;b.j2=1;b.j3=A(30);B(b);}if(!(e!==b&&e!==c)){if(a.om){FW(a.k$);a.mO=null;FZ(a,e);}else{b=a.k$;if((b.vM-b.q1|0)<d){FW(b);a.mO=null;FZ(a,e);}}}else{if(!a.sG){if(c===null){c=new BK;e=new K;e.jZ=G(16);D(e,e.jY,A(583));D(e,e.jY,b===null?A(2):b.kg);D(e,e.jY,A(584));b=new I;f=e.jZ;g=f.data;h=e.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);c.j1=1;c.j2=1;c.j3=b;B(c);}b=new H;b.j1=1;b.j2=1;B(b);}j=new BK;e=new K;e.jZ=G(16);D(e,e.jY,A(583));D(e,
e.jY,b===null?A(2):b.kg);D(e,e.jY,A(585));D(e,e.jY,c.kg);D(e,e.jY,A(584));b=new I;f=e.jZ;g=f.data;h=e.jY;i=g.length;if(h>=0&&h<=(i-0|0)){b.j0=L(f.data,0,h);j.j1=1;j.j2=1;j.j3=b;B(j);}b=new H;b.j1=1;b.j2=1;B(b);}FW(a.k$);a.mO=null;FZ(a,b);}};
let MI=F(Ez);
let Kd=F(Ez);
let OT=F(Ez);
let Qb=F(0);
function LM(){let a=this;C.call(a);a.w1=0;a.mg=0;a.xo=0;a.vM=0;a.q1=0;a.nH=null;a.rn=null;a.z8=0;a.xG=0;a.wl=0;a.zI=0;a.mI=0;a.yg=0;a.ug=null;a.mq=null;a.t$=null;}
let SH=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.ug=C_();a.vM=b;a.xG=e;a.rn=f;g=ZQ(a,c,d,e);h=new Jm;h.sb=1;h.rN=0;f=new Bo;CU();h.xd=f;f=Rn(g);h.ml=EB===null?SG(0,b,f):Sg(0,b,f);f=new HG;f.oi=1;f.p5=0;f.tS=1;if(!De){g=E7(0);d=g.data.length;i=new JU;j=0+d|0;U7(i,d);i.kf=0;i.j9=j;i.rC=0;i.rZ=0;i.ra=g;}else{k=new C1;g=BJ(0);Bp(k);k.ko=(-1);k.ky=0;k.j9=0;k.k6=Ct;k.ly=0;k.k2=g;k.kf=0;k.j9=0;k.ma=1;k.lK=0;k.k6=Dl();i=J9(k);}f.nN=i;i.j9=i.kf;i.kf=0;i.ko=(-1);i=Bs;k=i.j$.createBuffer();d=i.mo;i.mo=d+1|0;Ce(i.m4,d,Ch(k));f.r$
=d;f.rp=35048;h.mi=f;h.qx=0;f=Dj;i=H7;if(f===null){i=i.mr.data[0];while(i!==null&&i.mZ!==null){i=i.m_;}}else{k=f;if(!k.$id$){l=E3();k.$id$=l;}m=f.$id$;g=i.mr.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.pl==m){k=i.mZ;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.m_;}}i=i===null?null:i.m0;if(i===null){i=new Bf;i.ks=1;i.j8=Q(C,16);}Bg(i,h);GO(H7,f,i);a.nH=h;a.mq=B7(Dr(b,(h.ml.i9()).mU/4|0));a.wl=(a.nH.ml.i9()).mU/4|0;g=(a.nH.ml.i9()).l3.data;b=g.length;d=0;a:{while(d<b){if(g[d].mG==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.nH.ml.i9()).l3.data;m=g.length;c=0;b:{while(c<m){if(g[c].mG==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.nT/4|0;}a.zI=b;g=(a.nH.ml.i9()).l3.data;m=g.length;c=0;c:{while(c<m){if(g[c].mG==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.nH.ml.i9()).l3.data;m=g.length;c=0;d:{while(c<m){if(g[c].mG==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.nT/4|0;}a.mI=b;g=(a.nH.ml.i9()).l3.data;m=g.length;c=0;e:{while(c<m){if(g[c].mG==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.nH.ml.i9()).l3.data;m
=g.length;c=0;f:{while(c<m){if(g[c].mG==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.nT/4|0;}a.yg=b;a.t$=Q(I,e);m=0;g:{while(m<e){g=a.t$;f=new K;f.jZ=G(16);D(f,f.jY,A(586));J(f,f.jY,m,10);i=new I;n=f.jZ;o=n.data;c=f.jY;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.j0=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new H;f.j1=1;f.j2=1;B(f);},
AHr=(a,b,c,d,e)=>{let f=new LM();SH(f,a,b,c,d,e);return f;},
ZQ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bf;e.ks=1;e.j8=Q(C,16);f=new DY;f.mG=1;f.ms=3;f.mF=5126;f.mP=0;f.mK=A(471);f.n$=0;f.pq=Eb(1);Bg(e,f);if(b){g=new DY;g.mG=8;g.ms=3;g.mF=5126;g.mP=0;g.mK=A(587);g.n$=0;g.pq=Eb(8);Bg(e,g);}if(c){g=new DY;g.mG=4;g.ms=4;g.mF=5121;g.mP=1;g.mK=A(472);g.n$=0;g.pq=Eb(4);Bg(e,g);}h=0;while(true){if(h>=d){b=e.j4;i=Q(DY,b);j=i.data;h=0;while(true){c=BT(h,b);if(c>=0)break;if(c>=0){f=new H;g=new K;g.jZ=G(16);D(g,g.jY,A(18));J(g,g.jY,h,10);D(g,g.jY,A(19));b=e.j4;J(g,g.jY,b,10);e=new I;i
=g.jZ;j=i.data;c=g.jY;d=j.length;if(c>=0&&c<=(d-0|0)){e.j0=L(i.data,0,c);f.j1=1;f.j2=1;f.j3=e;B(f);}e=new H;e.j1=1;e.j2=1;B(e);}j[h]=e.j8.data[h];h=h+1|0;}return i;}g=new DY;k=new K;k.jZ=G(16);D(k,k.jY,A(588));J(k,k.jY,h,10);f=new I;i=k.jZ;j=i.data;c=k.jY;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.j0=L(i.data,0,c);g.mG=16;g.ms=2;g.mF=5126;g.mP=0;g.mK=f;g.n$=0;g.pq=Eb(16);Bg(e,g);h=h+1|0;}e=new H;e.j1=1;e.j2=1;B(e);},
Dy=(a,b,c,d)=>{let e,f;e=a.mg;f=a.mq.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.xo=0;a.mg=e+a.wl|0;a.q1=a.q1+1|0;},
FW=a=>{let b,c,d,e,f,g,h;if(!a.q1)return;b=a.rn;c=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}c.hd(b.mM);c=a.rn;d=a.ug;Im();e=Jj(c,A(589),HV);b=Bs;if(c.k3){CN(c,c.lY,c.l0);c.k3=0;}QU(b,e,1,0,d.lj,0);f=0;while(f<a.xG){b=a.rn;c=a.t$.data[f];d=Bs;if(b.k3){CN(b,b.lY,b.l0);b.k3=0;}d.hn(Jj(b,c,HV),f);f=f+1|0;}b=a.nH;g=a.mq;h=a.mg;b.ml.he(g,0,h);b=a.nH;S1(b,a.rn,a.w1,0,b.mi.hY()<=0?b.ml.i$():b.mi.hU(),b.sb);a.xo=0;a.mg=0;a.q1=0;},
WW=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.jZ=G(16);D(e,e.jY,A(590));f=!b?A(65):A(591);D(e,e.jY,f);f=!c?A(65):A(592);D(e,e.jY,f);f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(593));f=!c?A(65):A(594);D(e,e.jY,f);f=new I;g=e.jZ;h=g.data;b=e.jY;j=h.length;if(b>=0&&b<=(j-0|0)){f.j0=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(595));f=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i
>=0&&i<=(j-0|0)){f.j0=L(g.data,0,i);if(c){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(596));f=new I;g=e.jZ;h=g.data;c=e.jY;i=h.length;if(c>=0&&c<=(i-0|0))f.j0=L(g.data,0,c);else{e=new H;e.j1=1;e.j2=1;B(e);}}i=0;while(true){if(i>=d){e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(597));f=new I;g=e.jZ;h=g.data;c=e.jY;d=h.length;if(c>=0&&c<=(d-0|0)){f.j0=L(g.data,0,c);return f;}e=new H;e.j1=1;e.j2=1;B(e);}e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(598));J(e,e.jY,i,10);D(e,e.jY,A(599));D(e,e.jY,A(588));J(e,e.jY,i,10);D(e,
e.jY,A(600));f=new I;g=e.jZ;h=g.data;c=e.jY;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.j0=L(g.data,0,c);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(601));J(e,e.jY,i,10);D(e,e.jY,A(600));f=new I;g=e.jZ;h=g.data;j=e.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.j0=L(g.data,0,j);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}e=new K;e.jZ=G(16);D(e,e.jY,f);D(e,e.jY,A(602));J(e,e.jY,i,10);D(e,e.jY,A(600));f=new I;g=e.jZ;h=g.data;j
=e.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.j0=L(g.data,0,j);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);},
AJp=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(603);if(c){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(594));e=new I;g=f.jZ;h=g.data;i=f.jY;j=h.length;if(i>=0&&i<=(j-0|0))e.j0=L(g.data,0,i);else{e=new H;e.j1=1;e.j2=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(604));e=!c?A(605):A(606);D(f,f.jY,e);e=new I;h=f.jZ;g=h.data;b=f.jY;c=g.length;if(b>=0&&b<=(c-0|0)){e.j0=L(h.data,0,b);if(d>0){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(607));e=new I;g=f.jZ;h=g.data;c=f.jY;i=h.length;if(c>=0&&c<=(i-
0|0))e.j0=L(g.data,0,c);else{e=new H;e.j1=1;e.j2=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(608));e=new I;g=f.jZ;h=g.data;c=f.jY;d=h.length;if(c>=0&&c<=(d-0|0)){e.j0=L(g.data,0,c);return e;}e=new H;e.j1=1;e.j2=1;B(e);}if(i!=c){f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(609));J(f,f.jY,i,10);D(f,f.jY,A(610));J(f,f.jY,i,10);D(f,f.jY,A(611));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.j0=L(g.data,0,j);}else{f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,
f.jY,A(609));J(f,f.jY,i,10);D(f,f.jY,A(610));J(f,f.jY,i,10);D(f,f.jY,A(54));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.j0=L(g.data,0,j);}i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);}f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(601));J(f,f.jY,i,10);D(f,f.jY,A(600));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.j0=L(g.data,0,j);f=new K;f.jZ=G(16);D(f,f.jY,e);D(f,f.jY,A(612));J(f,f.jY,i,10);D(f,f.jY,
A(600));e=new I;g=f.jZ;h=g.data;j=f.jY;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.j0=L(g.data,0,j);i=i+1|0;}e=new H;e.j1=1;e.j2=1;B(e);}e=new H;e.j1=1;e.j2=1;B(e);};
function Sj(){let a=this;C.call(a);a.mQ=null;a.lZ=0;}
let AEj=null;
let Gf=(a,b)=>{let c,d,e,f;c=a.mQ;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);Du(c,0,f,0,a.lZ);a.mQ=f;},
JK=a=>{let b,c,d;b=a.lZ+4|0;if(b>a.mQ.data.length)Gf(a,b);c=a.mQ.data;d=a.lZ;b=d+1|0;a.lZ=b;c[d]=110;d=b+1|0;a.lZ=d;c[b]=117;b=d+1|0;a.lZ=b;c[d]=108;a.lZ=b+1|0;c[b]=108;},
AKz=()=>{AEj=AGe([48,49,50,51,52,53,54,55,56,57]);};
function He(){BG.call(this);this.sB=0;}
let AHH=null,H2=null,RA=null,AQ9=null;
let AMo=()=>{let b,c,d;b=new He;b.kg=A(613);b.ka=0;b.sB=0;AHH=b;c=new He;c.kg=A(614);c.ka=1;c.sB=1;H2=c;d=new He;d.kg=A(615);d.ka=2;d.sB=4;RA=d;AQ9=U(He,[b,c,d]);};
let AEx=F();
function HF(){C.call(this);this.rQ=0;}
let Sx=null,S0=null,QT=null;
let DH=a=>{return a.rQ;},
AUy=()=>{let b;b=new HF;b.rQ=1;Sx=b;b=new HF;b.rQ=0;S0=b;QT=M(Cl);};
function SP(){let a=this;C.call(a);a.qq=0;a.p2=0;a.nn=0;a.sr=Cc;a.t4=null;a.v3=null;a.xI=Cc;a.vU=null;}
function Jd(){let a=this;C.call(a);a.qb=null;a.yF=0.0;a.y8=0;a.tY=null;a.or=null;a.yo=null;a.uB=null;a.xw=null;}
let AO4=null,ATj=null;
let NK=()=>{NK=BQ(Jd);AOg();};
let Wo=(a,b,c,d)=>{let e;NK();a.yF=1.0;a.y8=0;if(!BD(b,Vo)){e=AFG(b,c);a.qb=e;b=new R2;b.pr=a;b.kF=e;a.uB=b;}else{e=new Tz;Qt(e,b,c);e.m6=0;e.os=E7(Gg((e.kz.data.length/5|0)*3|0)|0);b=new Sw;b.pr=a;b.kF=e;a.uB=b;a.qb=e;}b=new R0;c=a.qb;b.pr=a;b.kF=c;a.tY=b;b=new T0;b.pr=a;b.kF=c;e=new GM;e.rT=1;e.m2=B7(16);b.pi=e;e=new GM;e.rT=1;e.m2=B7(16);b.s_=e;a.or=b;b=new RT;b.pr=a;b.kF=c;a.yo=b;a.xw=d;},
AOg=()=>{AO4=C_();ATj=B7(6);};
function LK(){Jd.call(this);this.xY=null;}
let Ij=F(BG);
let Ur=null,Q5=null,EZ=null,AD$=null;
let AMW=()=>{let b,c,d;b=new Ij;b.kg=A(160);b.ka=0;Ur=b;c=new Ij;c.kg=A(616);c.ka=1;Q5=c;d=new Ij;d.kg=A(617);d.ka=2;EZ=d;AD$=U(Ij,[b,c,d]);};
function Q0(){let a=this;DM.call(a);a.m5=null;a.Ah=null;}
let Qf=F(0);
function LL(){let a=this;C.call(a);a.tg=0;a.uy=0;a.tG=0.0;}
let YY=(a,b,c,d)=>{let e,f,g,h,i,j;e=6.2831854820251465*Cu((c*c+d*d)/2.0)/(16.0*b)|0;f=GK(c,d);g=ARV(c,d);h=Cu(1.0-f*f/(g*g));b=e;e=b+b*h*a.tG/16.0|0;i=a.tg;j=a.uy;FQ();if(e>=i)i=e<=j?e:j;return i;};
let Vo=F(0);
function Hj(){let a=this;C.call(a);a.uv=null;a.qk=null;a.mL=0.0;a.kz=null;a.kp=0;a.s$=0.0;a.vY=0.0;a.wM=0.0;a.mD=0;a.sj=null;}
let ACp=null;
let M7=()=>{M7=BQ(Hj);ADK();};
let Qt=(a,b,c)=>{M7();a.s$=1.0;a.vY=0.5;a.wM=0.0010000000474974513;a.mD=0;a.sj=null;a.uv=b;a.kz=B7(2000);a.qk=c;Hh(a);a.mL=Fk(Lq);},
AFG=(a,b)=>{let c=new Hj();Qt(c,a,b);return c;},
AVI=(a,b)=>{let c;c=a.qk;a.qk=b;Hh(a);return c;},
Hh=a=>{let b,c,d,e,f;a:{b=a.qk;if(b!==null){c=0.5*(b.u$+b.u9);d=0.5*(b.u_+b.u7);e=0;while(true){f=a.kz.data;if(e>=f.length)break a;f[e+3|0]=c;f[e+4|0]=d;e=e+5|0;}}}},
AW6=(a,b)=>{let c,d;c=Fk(b);d=a.mL;a.mL=c;return d;},
AWM=(a,b)=>{let c;c=a.mL;a.mL=b;return c;},
AUi=a=>{return a.mL;},
AWY=a=>{return a.mD;},
AVj=a=>{let b;b=a.mD;a.mD=1;return b;},
AU2=a=>{a.mD=0;if(a.kp>0)a.jc();},
AU3=a=>{return a.s$;},
AXw=a=>{return a.sj===null?0:1;},
ADf=a=>{a.kp=a.kp+4|0;},
AHF=a=>{let b,c,d;b=a.kz.data;c=5*a.kp|0;d=b[c+10|0];b[c+15|0]=d;d=b[c+11|0];b[c+16|0]=d;a.jd();},
AKX=a=>{FJ(a,4);},
AWO=a=>{FJ(a,4);},
FJ=(a,b)=>{let c,d;c=b*5|0;d=a.kz.data.length;if(c>d)a.jf(c);else if(((d-(20*a.kp|0)|0)/5|0)<b)a.jc();},
AHN=(a,b)=>{let c;a.jc();c=a.kz.data.length;while(b>c){c=c*2|0;}a.kz=B7(c);Hh(a);},
AUz=a=>{return (a.kz.data.length-(20*a.kp|0)|0)/5|0;},
AHY=a=>{let b,c;b=a.kp;if(!b)return;c=a.sj;if(c===null?0:1)c.jg();else{c=a.qk;if(c===null){c=new BK;c.j1=1;c.j2=1;c.j3=A(618);B(c);}AHk(a.uv,c.od,a.kz,0,5*b|0);}a.kp=0;},
AU7=a=>{return 5*a.kp|0;},
AV0=(a,b)=>{a.kz.data[(5*a.kp|0)+0|0]=b;},
AVf=(a,b)=>{a.kz.data[(5*a.kp|0)+1|0]=b;},
AW5=(a,b)=>{a.kz.data[(5*a.kp|0)+5|0]=b;},
AT$=(a,b)=>{a.kz.data[(5*a.kp|0)+6|0]=b;},
AT5=(a,b)=>{a.kz.data[(5*a.kp|0)+10|0]=b;},
AXd=(a,b)=>{a.kz.data[(5*a.kp|0)+11|0]=b;},
AU5=(a,b)=>{a.kz.data[(5*a.kp|0)+15|0]=b;},
AWl=(a,b)=>{a.kz.data[(5*a.kp|0)+16|0]=b;},
AUj=a=>{return a.kz.data[(5*a.kp|0)+10|0];},
AVs=a=>{return a.kz.data[(5*a.kp|0)+11|0];},
AWd=a=>{return a.kz.data[(5*a.kp|0)+15|0];},
AWV=a=>{return a.kz.data[(5*a.kp|0)+16|0];},
AV7=(a,b)=>{a.kz.data[(5*a.kp|0)+2|0]=b;},
AWW=(a,b)=>{a.kz.data[(5*a.kp|0)+7|0]=b;},
AX6=(a,b)=>{a.kz.data[(5*a.kp|0)+12|0]=b;},
AUC=(a,b)=>{a.kz.data[(5*a.kp|0)+17|0]=b;},
ADK=()=>{ACp=C_();};
function EA(){let a=this;C.call(a);a.pr=null;a.kF=null;}
let CX=null,C0=null,Df=null,CV=null,CW=null,FL=null,Nn=null;
let AWZ=(a,b)=>{let c;c=a.kF;c.kz.data[(5*c.kp|0)+0|0]=b;},
AXN=(a,b)=>{let c;c=a.kF;c.kz.data[(5*c.kp|0)+1|0]=b;},
AVb=(a,b)=>{let c;c=a.kF;c.kz.data[(5*c.kp|0)+2|0]=b;},
ATY=(a,b)=>{let c;c=a.kF;c.kz.data[(5*c.kp|0)+7|0]=b;},
AW7=(a,b)=>{let c;c=a.kF;c.kz.data[(5*c.kp|0)+12|0]=b;},
AV9=(a,b)=>{let c;c=a.kF;c.kz.data[(5*c.kp|0)+17|0]=b;},
AUa=()=>{CX=new Bc;C0=new Bc;Df=new Bc;CV=new Bc;CW=new Bc;FL=new Bc;Nn=new Bc;};
let HI=F(EA);
let AK2=null;
let ASL=()=>{let b,c;b=new Oq;c=new Mj;c.vH=1;c.wg=E7(16);b.yZ=c;c=new FR;c.o$=1;c.my=X(16);b.zp=c;c=new Mj;c.vH=1;c.wg=E7(16);b.y5=c;AK2=b;};
let R2=F(HI);
let AGY=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(i===0.0)return;l=GK(i,6.2831854820251465);m=a.kF;n=m.mD;m.mD=1;o=d;p=6.2831854820251465/o;l=h+l;q=p;r=Dv(q);s=Dh(q);q=g;t=Dv(q);u=Dh(q);v=Gg(o*h/6.2831854820251465)|0;w=(Rr(o*l/6.2831854820251465)|0)+1|0;if(D6(v*p-h)>=0.0010000000474974513?0:1)v=v+1|0;m=C0;m.j6=1.0;m.j5=0.0;x=h;g=Dv(x);h=Dh(x);i=m.j6;o=i*g;y=m.j5;o=o-y*h;h=i*h+y*g;m.j6=o;m.j5=h;m.j6=o*e;m.j5=h*f;z=(w-v|0)+1|0;if(z>=2){m=FL;m.j6=1.0;m.j5=0.0;q=GK(v*p,l);g=Dv(q);h
=Dh(q);i=m.j6;o=i*g;p=m.j5;o=o-p*h;g=i*h+p*g;m.j6=o;m.j5=g;m=Df;ba=FL;g=ba.j6;m.j6=g;h=ba.j5;m.j5=h;m.j6=g*e;m.j5=h*f;}else{a.kF.jj();m=CX;m.j6=1.0;m.j5=0.0;g=Dv(x);h=Dh(x);i=m.j6;o=i*g;p=m.j5;o=o-p*h;h=i*h+p*g;m.j6=o;m.j5=h;m.j6=o*e;m.j5=h*f;m=C0;m.j6=1.0;m.j5=0.0;q=l;y=Dv(q);g=Dh(q);h=m.j6;i=h*y;o=m.j5;i=i-o*g;g=h*g+o*y;m.j6=i;m.j5=g;m.j6=i*e;m.j5=g*f;m=a.kF;bb=m.kz.data;v=5*m.kp|0;bb[v+0|0]=b;bb[v+1|0]=c;ba=CX;g=ba.j6;h=g*t;i=ba.j5;bb[v+5|0]=h-i*u+b;bb[v+6|0]=g*u+i*t+c;ba=C0;i=ba.j6;o=i*t;g=ba.j5;bb[v+10
|0]=o-g*u+b;bb[v+11|0]=i*u+g*t+c;bb[v+2|0]=j;bb[v+7|0]=k;bb[v+12|0]=k;m.jk();}bc=0;bd=z-1|0;be=z-2|0;q=l;while(bc<bd){m=CX;ba=C0;m.j6=ba.j6;m.j5=ba.j5;m=Df;ba.j6=m.j6;ba.j5=m.j5;v=BT(bc,be);if(v<0){ba=FL;g=ba.j6;h=g*r;i=ba.j5;h=h-i*s;g=g*s+i*r;ba.j6=h;ba.j5=g;m.j6=h;m.j5=g;m.j6=h*e;m.j5=g*f;}else{m.j6=1.0;m.j5=0.0;g=Dv(q);h=Dh(q);i=m.j6;o=i*g;p=m.j5;o=o-p*h;h=i*h+p*g;m.j6=o;m.j5=h;m.j6=o*e;m.j5=h*f;}if(!(bc%2|0)){m=a.kF;v=m.kz.data.length;if(20>v)m.jf(20);else if(((v-(20*m.kp|0)|0)/5|0)<4)m.jc();m=a.kF;bb=m.kz.data;v
=5*m.kp|0;bb[v+0|0]=b;bb[v+1|0]=c;ba=CX;g=ba.j6;h=g*t;i=ba.j5;bb[v+5|0]=h-i*u+b;bb[v+6|0]=g*u+i*t+c;ba=C0;g=ba.j6;h=g*t;i=ba.j5;bb[v+10|0]=h-i*u+b;bb[v+11|0]=g*u+i*t+c;ba=Df;g=ba.j6;h=g*t;i=ba.j5;bb[v+15|0]=h-i*u+b;bb[v+16|0]=g*u+i*t+c;bb[v+2|0]=j;bb[v+7|0]=k;bb[v+12|0]=k;bb[v+17|0]=k;m.jd();}else if(!v){a.kF.jj();m=Df;m.j6=1.0;m.j5=0.0;g=Dv(q);h=Dh(q);i=m.j6;o=i*g;p=m.j5;o=o-p*h;h=i*h+p*g;m.j6=o;m.j5=h;m.j6=o*e;m.j5=h*f;ba=a.kF;bb=ba.kz.data;v=5*ba.kp|0;bb[v+0|0]=b;bb[v+1|0]=c;m=C0;g=m.j6;h=g*t;i=m.j5;bb[v
+5|0]=h-i*u+b;bb[v+6|0]=g*u+i*t+c;m=Df;g=m.j6;h=g*t;i=m.j5;bb[v+10|0]=h-i*u+b;bb[v+11|0]=g*u+i*t+c;bb[v+2|0]=j;bb[v+7|0]=k;bb[v+12|0]=k;ba.jk();}bc=bc+1|0;}if(!n){m=a.kF;m.mD=0;if(m.kp>0)m.jc();}};
function Tz(){let a=this;Hj.call(a);a.os=null;a.m6=0;}
let ASd=a=>{let b,c,d,e,f,g,h,i;b=a.kp;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.m6;g=3*f|0;h=a.os.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;f=f+1|0;a.m6=f;i=(b+3|0)<<16>>16;d=3*f|0;h[d]=c;h[d+1|0]=e;h[d+2|0]=i;a.m6=f+1|0;a.kp=b+4|0;},
ATP=a=>{let b,c,d,e,f,g,h;b=a.kp;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.m6;g=3*f|0;h=a.os.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;a.m6=f+1|0;a.kp=b+3|0;},
ALW=a=>{let b;b=a.kz.data.length;if(15>b)Od(a,15);else if(((b-(20*a.kp|0)|0)/5|0)<3)Gn(a);},
Gn=a=>{let b,c;b=a.kp;if(!b)return;c=a.sj;if(c===null?0:1)c.jg();else a.uv.jl(a.qk.od,a.kz,0,5*b|0,a.os,0,3*a.m6|0);a.kp=0;a.m6=0;},
Od=(a,b)=>{let c;Gn(a);c=a.kz.data.length;while(b>c){c=c*2|0;}a.kz=B7(c);Hh(a);a.os=E7(Gg((a.kz.data.length/5|0)*3|0)|0);};
let Sw=F(HI);
let APU=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(i===0.0)return;l=GK(i,6.2831854820251465);m=a.kF;n=m.mD;m.mD=1;o=d;p=6.2831854820251465/o;q=h+l;r=p;s=Dv(r);t=Dh(r);r=g;u=Dv(r);l=Dh(r);v=Gg(o*h/6.2831854820251465)|0;w=(Rr(o*q/6.2831854820251465)|0)+1|0;if(D6(v*p-h)>=0.0010000000474974513?0:1)v=v+1|0;x=(w-v|0)+1|0;m=a.kF;d=x+2|0;y=d*5|0;z=m.kz.data.length;if(y>z){Gn(m);d=m.kz.data.length;while(y>d){d=d*2|0;}m.kz=B7(d);Hh(m);m.os=E7(Gg((m.kz.data.length/5|0)*3|0)|0);}else if
(((z-(20*m.kp|0)|0)/5|0)<d)Gn(m);m=a.kF;ba=m;w=ba.kp;z=5*w|0;bb=m.kz.data;y=5*m.kp|0;bb[y+0|0]=b;bb[y+1|0]=c;bb[y+2|0]=j;ba.kp=w+1|0;m=CX;m.j6=1.0;m.j5=0.0;r=h;bc=Dv(r);g=Dh(r);h=m.j6;i=h*bc;j=m.j5;i=i-j*g;g=h*g+j*bc;m.j6=i;m.j5=g;m.j6=i*e;m.j5=g*f;m=CX;g=m.j6;h=g*u;i=m.j5;h=h-i*l+b;m=a.kF;bb=m.kz.data;y=5*m.kp|0;bb[y+0|0]=h;g=g*l+i*u+c;bb[y+1|0]=g;bb[y+2|0]=k;m=m;m.kp=m.kp+1|0;w=z<<16>>16;d=(z+1|0)<<16>>16;y=(z+2|0)<<16>>16;bd=m.m6;be=3*bd|0;bb=m.os.data;bb[be]=w;bb[be+1|0]=d;bb[be+2|0]=y;m.m6=bd+1|0;m=FL;m.j6
=1.0;m.j5=0.0;r=GK(v*p,q);g=Dv(r);h=Dh(r);i=m.j6;j=i*g;o=m.j5;j=j-o*h;g=i*h+o*g;m.j6=j;m.j5=g;m=CX;ba=FL;g=ba.j6;m.j6=g;h=ba.j5;m.j5=h;m.j6=g*e;m.j5=h*f;y=0;d=x-1|0;while(y<d){g=m.j6;h=g*u;i=m.j5;h=h-i*l+b;bf=a.kF;bb=bf.kz.data;x=5*bf.kp|0;bb[x+0|0]=h;g=g*l+i*u+c;bb[x+1|0]=g;bb[x+2|0]=k;bf=bf;bf.kp=bf.kp+1|0;g=ba.j6;h=g*s;i=ba.j5;h=h-i*t;g=g*t+i*s;ba.j6=h;ba.j5=g;m.j6=h;m.j5=g;m.j6=h*e;m.j5=g*f;v=z+y|0;x=(v+2|0)<<16>>16;v=(v+3|0)<<16>>16;bd=bf.m6;be=3*bd|0;bb=bf.os.data;bb[be]=w;bb[be+1|0]=x;bb[be+2|0]=v;bf.m6
=bd+1|0;y=y+1|0;}m.j6=1.0;m.j5=0.0;r=q;g=Dv(r);h=Dh(r);i=m.j6;j=i*g;o=m.j5;j=j-o*h;g=i*h+o*g;m.j6=j;m.j5=g;m.j6=j*e;m.j5=g*f;m=CX;e=m.j6;f=e*u;g=m.j5;b=f-g*l+b;m=a.kF;bb=m.kz.data;v=5*m.kp|0;bb[v+0|0]=b;bb[v+1|0]=e*l+g*u+c;bb[v+2|0]=k;m=m;v=m.kp+1|0;m.kp=v;if(!n){m.mD=0;if(v>0)Gn(m);}};
let R0=F(EA);
let V8=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n,o,p,q,r,s;FJ(a.kF,4);j=0.0;k=d-b;l=e-c;if(g){m=a.kF;n=m.wM;o=m.s$;p=m.vY;b=b/o;b=(b+CO(b)*0.5|0)*o+p-CO(k)*n;c=c/o;c=(c+CO(c)*0.5|0)*o+p-CO(l)*n;d=d/o;d=(d+CO(d)*0.5|0)*o+p+CO(k)*n;e=e/o;e=(e+CO(e)*0.5|0)*o+p+CO(l)*n;}q=0.5*f;if(b!==d){if(c===e){j=q;q=0.0;}else{f=e-c;k=d-b;r=1.0/Cu(f*f+k*k)*q;q=f*r;j=k*r;}}f=b+q;m=a.kF;s=m.kz.data;g=5*m.kp|0;s[g+0|0]=f;s[g+1|0]=c-j;s[g+5|0]=b-q;s[g+6|0]=c+j;s[g+10|0]=d-q;s[g+11|0]=e+j;s[g+15|0]=d+q;s[g+16|0]=e-j;s[g+2|0]=h;s[g+7|0]
=h;s[g+12|0]=i;s[g+17|0]=i;m.jd();m=a.kF;if(!m.mD)m.jc();};
function T0(){let a=this;EA.call(a);a.pi=null;a.s_=null;}
let GQ=null,GU=null;
let FI=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;while(true){g=BT(f,b.j4);if(g>=0)break;if(g>=0){h=new H;d=new K;d.jZ=G(16);D(d,d.jY,A(18));J(d,d.jY,f,10);D(d,d.jY,A(19));e=b.j4;J(d,d.jY,e,10);b=new I;i=d.jZ;j=i.data;f=d.jY;g=j.length;if(f>=0&&f<=(g-0|0)){b.j0=L(i.data,0,f);h.j1=1;h.j2=1;h.j3=b;B(h);}b=new H;S(b);B(b);}h=b.j8.data[f];UO(a.s_,h.j6,h.j5);f=f+1|0;}b=a.s_;AFv(a,b.m2,0,b.m$,c,d,e);a.s_.m$=0;},
AFv=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o;b=b.data;if(b.length<4)return;P1(a.pi,b[c]);P1(a.pi,b[c+1|0]);h=c+2|0;while(h<d){c=D6(b[h-2|0]-b[h])>=0.0010000000474974513?0:1;if(!(c&&(D6(b[h-1|0]-b[h+1|0])>=0.0010000000474974513?0:1)))UO(a.pi,b[h],b[h+1|0]);h=h+2|0;}i=a.pi;h=i.m$;c=BT(h,4);if(c<0){i.m$=0;return;}if(!c){j=a.pr.tY;b=i.m2.data;k=b[0];l=b[1];m=b[2];n=b[3];o=j.kF.mL;V8(j,k,l,m,n,e,0,o,o);j.kF.jc();a.pi.m$=0;return;}j=a.kF;d=j.mD;j.mD=1;if(f===Ur)YF(a,i.m2,h,e,g);else AFg(a,i.m2,h,e,g,f!==Q5?0:1);if(!d)
{f=a.kF;f.mD=0;if(f.kp>0)f.jc();}a.pi.m$=0;},
YF=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=!e?c:c-2|0;g=0;while(g<f){h=b.data;i=a.pr.tY;j=h[g];k=h[g+1|0];l=g+2|0;m=h[l%c|0];n=h[(g+3|0)%c|0];o=i.kF.mL;V8(i,j,k,m,n,d,0,o,o);i.kF.jc();g=l;}},
AFg=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;g=0.5*d;h=a.kF;i=h.mL;FJ(h,4);j=2;k=c-2|0;l=g*g;m=c-1|0;while(j<k){n=b.data;h=CX;d=n[j-2|0];o=n[j-1|0];h.j6=d;h.j5=o;p=C0;d=n[j];o=n[j+1|0];p.j6=d;p.j5=o;q=Df;r=j+2|0;d=n[r];o=n[j+3|0];q.j6=d;q.j5=o;if(f)KS(h,p,q,CV,CW,g);else DZ(h,p,q,CV,CW,g,0);p=CV;d=p.j6;o=p.j5;h=a.kF;s=h.kz.data;t=5*h.kp|0;s[t+10|0]=d;s[t+11|0]=o;q=CW;d=q.j6;o=q.j5;s[t+15|0]=d;s[t+16|0]=o;if(j==2){if(!e){h=Nn;d=n[k];o=n[m];h.j6=d;h.j5=o;if(f)KS(h,CX,C0,GQ,GU,g);else DZ(h,
CX,C0,GQ,GU,g,1);h=GU;d=h.j6;o=h.j5;h=a.kF;s=h.kz.data;t=5*h.kp|0;s[t+0|0]=d;s[t+1|0]=o;h=GQ;d=h.j6;o=h.j5;s[t+5|0]=d;s[t+6|0]=o;}else{d=n[2];o=n[3];u=n[0];v=n[1];h=Eg;h.j6=u;h.j5=v;d=u-d;h.j6=d;o=v-o;h.j5=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=Cu(l/o);h.j6=h.j6*d;h.j5=h.j5*d;}h=Eg;d=h.j5;o= -h.j6;p.j6=d;p.j5=o;p.j6=d+u;p.j5=o+v;d= -h.j5;o=h.j6;q.j6=d;q.j5=o;q.j6=d+u;q.j5=o+v;h=CW;d=h.j6;o=h.j5;h=a.kF;s=h.kz.data;t=5*h.kp|0;s[t+0|0]=d;s[t+1|0]=o;h=CV;d=h.j6;o=h.j5;s[t+5|0]=d;s[t+6|0]=o;}}if(!f){DZ(CX,C0,Df,CV,CW,
g,1);h=CV;v=h.j6;w=h.j5;h=CW;x=h.j6;u=h.j5;}else{h=a.kF;s=h.kz.data;t=5*h.kp|0;v=s[t+10|0];w=s[t+11|0];x=s[t+15|0];u=s[t+16|0];}h=a.kF;s=h.kz.data;t=5*h.kp|0;s[t+2|0]=i;s[t+7|0]=i;s[t+12|0]=i;s[t+17|0]=i;h.jd();if(!f){p=CX;q=C0;y=Df;z=CV;ba=CW;a.kF.jj();c=DZ(p,q,y,z,ba,g,0);h=!c?z:ba;d=h.j6;o=h.j5;h=a.kF;s=h.kz.data;j=5*h.kp|0;s[j+0|0]=d;s[j+1|0]=o;h=!c?ba:z;d=h.j6;o=h.j5;s[j+5|0]=d;s[j+6|0]=o;if(DZ(p,q,y,z,ba,g,1))z=ba;d=z.j6;o=z.j5;h=a.kF;s=h.kz.data;t=5*h.kp|0;s[t+10|0]=d;s[t+11|0]=o;d=h.mL;s[t+2|0]=d;s[t
+7|0]=d;s[t+12|0]=d;h.jk();}FJ(a.kF,4);h=a.kF;s=h.kz.data;t=5*h.kp|0;s[t+0|0]=x;s[t+1|0]=u;s[t+5|0]=v;s[t+6|0]=w;j=r;}if(e){h=C0;p=Df;q=CV;y=CW;d=h.j6;o=h.j5;g=p.j6;u=p.j5;h=Eg;h.j6=g;h.j5=u;d=g-d;h.j6=d;o=u-o;h.j5=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=Cu(l/o);h.j6=h.j6*d;h.j5=h.j5*d;}h=Eg;d=h.j5;o= -h.j6;q.j6=d;q.j5=o;q.j6=d+g;q.j5=o+u;d= -h.j5;o=h.j6;y.j6=d;y.j5=o;y.j6=d+g;y.j5=o+u;h=CW;d=h.j6;o=h.j5;p=a.kF;b=p.kz.data;e=5*p.kp|0;b[e+10|0]=d;b[e+11|0]=o;h=CV;d=h.j6;o=h.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e
+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jd();}else if(f){b=b.data;h=CX;d=b[0];o=b[1];h.j6=d;h.j5=o;KS(C0,Df,h,CV,CW,g);h=CV;d=h.j6;o=h.j5;p=a.kF;b=p.kz.data;e=5*p.kp|0;b[e+10|0]=d;b[e+11|0]=o;h=CW;d=h.j6;o=h.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jd();FJ(a.kF,4);h=CV;d=h.j6;o=h.j5;p=a.kF;b=p.kz.data;e=5*p.kp|0;b[e+0|0]=d;b[e+1|0]=o;h=CW;d=h.j6;o=h.j5;b[e+5|0]=d;b[e+6|0]=o;h=GU;d=h.j6;o=h.j5;b[e+10|0]=d;b[e+11|0]=o;h=GQ;d=h.j6;o=h.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e
+12|0]=i;b[e+17|0]=i;p.jd();}else{s=b.data;h=CX;p=C0;h.j6=p.j6;h.j5=p.j5;q=Df;p.j6=q.j6;p.j5=q.j5;d=s[0];o=s[1];q.j6=d;q.j5=o;DZ(h,p,q,CV,CW,g,0);h=CV;d=h.j6;o=h.j5;h=a.kF;b=h.kz.data;e=5*h.kp|0;b[e+10|0]=d;b[e+11|0]=o;p=CW;d=p.j6;o=p.j5;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;h.jd();p=CX;q=C0;y=Df;z=CV;ba=CW;a.kF.jj();f=DZ(p,q,y,z,ba,g,0);h=!f?z:ba;d=h.j6;o=h.j5;h=a.kF;b=h.kz.data;e=5*h.kp|0;b[e+0|0]=d;b[e+1|0]=o;h=!f?ba:z;d=h.j6;o=h.j5;b[e+5|0]=d;b[e+6|0]=o;if(DZ(p,q,y,z,ba,g,
1))z=ba;d=z.j6;o=z.j5;h=a.kF;b=h.kz.data;e=5*h.kp|0;b[e+10|0]=d;b[e+11|0]=o;d=h.mL;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jk();FJ(a.kF,4);DZ(CX,C0,Df,CV,CW,g,1);h=CW;d=h.j6;o=h.j5;p=a.kF;b=p.kz.data;e=5*p.kp|0;b[e+10|0]=d;b[e+11|0]=o;p=CV;d=p.j6;o=p.j5;b[e+15|0]=d;b[e+16|0]=o;q=CX;d=s[2];o=s[3];q.j6=d;q.j5=o;DZ(C0,Df,q,p,h,g,0);h=CV;d=h.j6;o=h.j5;p=a.kF;b=p.kz.data;e=5*p.kp|0;b[e+0|0]=d;b[e+1|0]=o;h=CW;d=h.j6;o=h.j5;b[e+5|0]=d;b[e+6|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.jd();h=C0;p=Df;q=CX;y=CV;z
=CW;a.kF.jj();c=DZ(h,p,q,y,z,g,0);ba=!c?y:z;d=ba.j6;o=ba.j5;ba=a.kF;b=ba.kz.data;f=5*ba.kp|0;b[f+0|0]=d;b[f+1|0]=o;ba=!c?z:y;d=ba.j6;o=ba.j5;b[f+5|0]=d;b[f+6|0]=o;if(DZ(h,p,q,y,z,g,1))y=z;d=y.j6;o=y.j5;h=a.kF;b=h.kz.data;e=5*h.kp|0;b[e+10|0]=d;b[e+11|0]=o;d=h.mL;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jk();}},
AYf=()=>{GQ=new Bc;GU=new Bc;};
let RT=F(EA);
let Wd=null,Ot=null;
let AVg=()=>{Wd=new Bc;Ot=new Bc;};
function Mj(){let a=this;C.call(a);a.wg=null;a.vH=0;}
function QY(){let a=this;DM.call(a);a.nb=null;a.rI=null;a.rf=null;a.rv=null;}
let ZA=(a,b)=>{a.nb.m5.sr=D8(b);},
Xn=(a,b)=>{b=a.nb.m5;b.p2=1;b.nn=0;},
AJk=(a,b,c)=>{G7(a.rv,a.rI,a.rf,c);b=a.nb.m5;b.qq=1;b.nn=0;return 0;};
let OI=F();
let UK=null;
let Nm=()=>{Nm=BQ(OI);AIT();};
let AIT=()=>{let b,c;b=X((NP.p()).data.length);c=b.data;UK=b;c[FO.ka]=1;c[FE.ka]=2;c[Fu.ka]=3;c[Fn.ka]=4;c[JZ.ka]=5;};
let ARK=F();
let Pw=0.0,Px=0.0;
let AUZ=()=>{Pw=Cu(2.0);Px=Cu(3.0);};
function F5(){let a=this;GD.call(a);a.oc=0;a.nh=null;a.nA=null;a.nl=null;}
let AAR=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new KG;c.oh=a;c.pM=b;c=B9(c,"handleEvent");b.onreadystatechange=c;c=a.nl;d=a.nA;e=new G9;e.u3=c;e.r_=d;c=B9(e,"handleEvent");b.onprogress=c;d=a.nh;f=a.oc;b.open("GET",Bx(d),!!f);if(a.oc){d="arraybuffer";b.responseType=d;}b.send();};
function OG(){let a=this;DM.call(a);a.sD=null;a.zT=null;}
let AAV=(a,b)=>{a.sD.nb.m5.sr=D8(b);},
AJ7=(a,b)=>{b=a.sD.nb.m5;b.p2=1;b.nn=0;},
Zj=(a,b,c)=>{c=a.sD;b=null;G7(c.rv,c.rI,c.rf,b);b=c.nb.m5;b.qq=1;b.nn=0;return 0;};
let XY=F();
let D5=null,Fl=null,Eg=null;
let KS=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;h=D5;i=c.j6;h.j6=i;j=c.j5;h.j5=j;h.j6=i-b.j6;h.j5=j-b.j5;b=Fl;i=d.j6;b.j6=i;j=d.j5;b.j5=j;k=i-c.j6;b.j6=k;l=j-c.j5;b.j5=l;m=h.j5;i=k*m;j=h.j6;j=N_(i-l*j,j*k+m*l);n=D6(j-0.0)>=0.0010000000474974513?0:1;if(!n&&!(D6(j-6.2831854820251465)>=0.0010000000474974513?0:1)){m=g/Dh(j);n=j>=0.0?0:1;b=D5;i=m*m;g=b.j6;g=g*g;m=b.j5;m=g+m*m;if(m!==0.0&&m!==i){g=Cu(i/m);b.j6=b.j6*g;b.j5=b.j5*g;}b=Fl;g=b.j6;g=g*g;m=b.j5;m=g+m*m;if(m!==0.0&&m!==i){g=Cu(i/m);b.j6=b.j6*g;b.j5=b.j5*g;}h=!n
?f:e;if(n)e=f;m=c.j6;h.j6=m;i=c.j5;h.j5=i;b=D5;m=m-b.j6;h.j6=m;i=i-b.j5;h.j5=i;d=Fl;h.j6=m+d.j6;h.j5=i+d.j5;m=c.j6;e.j6=m;i=c.j5;e.j5=i;m=m+b.j6;e.j6=m;i=i+b.j5;e.j5=i;e.j6=m-d.j6;e.j5=i-d.j5;return j;}b=D5;g=g*g;m=b.j6;m=m*m;i=b.j5;m=m+i*i;if(m!==0.0&&m!==g){g=Cu(g/m);b.j6=b.j6*g;b.j5=b.j5*g;}b=D5;g= -b.j5;m=b.j6;e.j6=g;e.j5=m;e.j6=g+c.j6;e.j5=m+c.j5;g=b.j5;m= -b.j6;f.j6=g;f.j5=m;f.j6=g+c.j6;f.j5=m+c.j5;return j;},
DZ=(b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q;i=D5;j=c.j6;i.j6=j;k=c.j5;i.j5=k;i.j6=j-b.j6;i.j5=k-b.j5;b=Fl;l=d.j6;b.j6=l;j=d.j5;b.j5=j;k=l-c.j6;b.j6=k;m=j-c.j5;b.j5=m;j=i.j5;l=k*j;n=i.j6;l=N_(l-m*n,n*k+j*m);o=D6(l-0.0)>=0.0010000000474974513?0:1;if(!o&&!(D6(l-6.2831854820251465)>=0.0010000000474974513?0:1)){j=g/Dh(l);b=D5;n=j*j;j=b.j6;j=j*j;k=b.j5;j=j+k*k;if(j!==0.0&&j!==n){j=Cu(n/j);b.j6=b.j6*j;b.j5=b.j5*j;}b=Fl;j=b.j6;j=j*j;k=b.j5;k=j+k*k;if(k!==0.0&&k!==n){j=Cu(n/k);b.j6=b.j6*j;b.j5=b.j5*j;}o=l>=0.0?0:1;i=
!o?f:e;if(o)e=f;k=c.j6;i.j6=k;l=c.j5;i.j5=l;p=D5;k=k-p.j6;i.j6=k;l=l-p.j5;i.j5=l;q=Fl;i.j6=k+q.j6;i.j5=l+q.j5;if(h)p=q;if(!o){b=Eg;j= -p.j5;k=p.j6;b.j6=j;b.j5=k;}else{b=Eg;j=p.j5;k= -p.j6;b.j6=j;b.j5=k;}b=Eg;g=g*g;j=b.j6;j=j*j;k=b.j5;k=j+k*k;if(k!==0.0&&k!==g){g=Cu(g/k);b.j6=b.j6*g;b.j5=b.j5*g;}j=c.j6;e.j6=j;k=c.j5;e.j5=k;b=Eg;e.j6=j+b.j6;e.j5=k+b.j5;return o;}b=D5;g=g*g;j=b.j6;j=j*j;k=b.j5;k=j+k*k;if(k!==0.0&&k!==g){g=Cu(g/k);b.j6=b.j6*g;b.j5=b.j5*g;}b=D5;g= -b.j5;j=b.j6;e.j6=g;e.j5=j;e.j6=g+c.j6;e.j5=j+c.j5;g
=b.j5;j= -b.j6;f.j6=g;f.j5=j;f.j6=g+c.j6;f.j5=j+c.j5;return 1;},
AXK=()=>{D5=new Bc;Fl=new Bc;Eg=new Bc;};
function OH(){let a=this;DM.call(a);a.qY=null;a.wf=null;a.xU=null;a.r1=null;}
let AEI=(a,b)=>{a.qY.nb.m5.sr=D8(b);},
X0=(a,b)=>{b=a.qY.nb.m5;b.p2=1;b.nn=0;},
X5=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.wf;if(e!==null)d.setAttribute("crossOrigin",Bx(e));a:{e=a.r1;e.lc=e.lc+1|0;e=new Lb;e.sT=a;e.Aj=b;e.xs=c;e.vF=d;d.addEventListener("load",B9(e,"handleEvent"),!!0);d.addEventListener("error",B9(e,"handleEvent"),!!0);if(!a.r1.x0){b=Bx(b);d.src=b;}else{b=a.xU;c=ANX(c);e=new K;e.jZ=G(16);D(e,e.jY,A(619));f=e.jY;if(b===null)b=A(2);D(e,f,b);D(e,e.jY,A(620));f=e.jY;if(c===null)c=A(2);D(e,f,c);b=new I;g=e.jZ;h=g.data;i=e.jY;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.j0=L(g.data,0,i);b=Bx(b);d.src=b;}return 0;}b=new H;b.j1=1;b.j2=1;Bi(b);B(b);},
AFz=(a,b,c)=>{return X5(a,b,c);};
function KG(){let a=this;C.call(a);a.pM=null;a.oh=null;}
let AIZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pM.readyState==4){if(a.pM.status==200){if(a.oh.nl.mN){if(BU===null){b=new CJ;c=new Ci;c.lB=BJ(32);b.lX=c;c=new K;Bp(c);c.jZ=G(16);b.lF=c;b.lD=G(32);b.lG=0;b.lI=Cg;BU=b;}b=a.oh.nh;c=new K;c.jZ=G(16);D(c,c.jY,A(579));d=c.jY;if(b===null)b=A(2);D(c,d,b);b=new I;e=c.jZ;f=e.data;g
=c.jY;h=f.length;if(g>=0&&g<=(h-0|0)){b.j0=L(e.data,0,g);BV(Bx(b));BV("\n");}else{b=new H;b.j1=1;b.j2=1;Bi(b);B(b);}}i=a.pM.response;j=new Int8Array(i);b=a.oh;c=b.nA;k=b.nh;b=new Iu;b.no=j;b.uu=i;c.iZ(k,b);}else if(a.pM.status!=404&&a.pM.status!=403){try{l=V(100);$p=1;continue _;}catch($$e){$$je=Y($$e);if($$je instanceof Dx){}else{throw $$e;}}b=a.oh;c=b.nl;d=b.oc;k=b.nh;b=b.nA;if(c.mN){if(BU===null){i=new CJ;j=new Ci;j.lB=BJ(32);Bp(i);i.lX=j;j=new K;Di(j,16);i.lF=j;i.lD=G(32);i.lG=0;i.lI=Cg;BU=i;}i=new K;i.jZ
=G(16);D(i,i.jY,A(97));D(i,i.jY,k===null?A(2):k);j=new I;e=i.jZ;f=e.data;h=i.jY;m=f.length;if(h>=0&&h<=(m-0|0)){j.j0=L(e.data,0,h);BV(Bx(j));BV("\n");}else{b=new H;S(b);B(b);}}c.lc=c.lc+1|0;i=new F5;i.nl=c;i.oc=d;i.nh=k;i.nA=b;b=null;c=null;i.mY=new C;i.mX=1;i.nv=c;i.nL=b;g=CS;CS=g+1|0;i.nK=V(g);b=new En;b.nw=i;EI(b);}else{b=a.oh;b.nA.i0(b.nh);}b=a.oh.nl;b.lc=b.lc-1|0;}return;case 1:a:{try{Ld(l);if(Fz()){break _;}break a;}catch($$e){$$je=Y($$e);if($$je instanceof Dx){}else{throw $$e;}}}b=a.oh;c=b.nl;d=b.oc;k
=b.nh;b=b.nA;if(c.mN){if(BU===null){i=new CJ;j=new Ci;j.lB=BJ(32);Bp(i);i.lX=j;j=new K;Di(j,16);i.lF=j;i.lD=G(32);i.lG=0;i.lI=Cg;BU=i;}i=new K;i.jZ=G(16);D(i,i.jY,A(97));D(i,i.jY,k===null?A(2):k);j=new I;e=i.jZ;f=e.data;h=i.jY;m=f.length;if(h>=0&&h<=(m-0|0)){j.j0=L(e.data,0,h);BV(Bx(j));BV("\n");}else{b=new H;S(b);B(b);}}c.lc=c.lc+1|0;i=new F5;i.nl=c;i.oc=d;i.nh=k;i.nA=b;b=null;c=null;i.mY=new C;i.mX=1;i.nv=c;i.nL=b;g=CS;CS=g+1|0;i.nK=V(g);b=new En;b.nw=i;EI(b);b=a.oh.nl;b.lc=b.lc-1|0;return;default:Fr();}}Dg().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
ASl=(a,b)=>{let $p,$z;$p=0;if(FB()){let $T=Dg();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AIZ(a,b);if(Fz()){break _;}return;default:Fr();}}Dg().s(a,b,$p);};
let ABo=F();
function Lb(){let a=this;C.call(a);a.Aj=null;a.xs=null;a.vF=null;a.sT=null;}
let AFa=(a,b)=>{let c,d;c=T(b.type);if(c===A(621))d=1;else if(!(A(621) instanceof I))d=0;else{b=A(621);d=c.j0!==b.j0?0:1;}if(d){b=a.sT.qY.nb.m5;b.p2=1;b.nn=0;}else{b=a.xs;b.uG=a.vF;c=a.sT.qY;G7(c.rv,c.rI,c.rf,b);b=c.nb.m5;b.qq=1;b.nn=0;}b=a.sT.r1;b.lc=b.lc-1|0;},
ADy=(a,b)=>{AFa(a,b);};
AUc([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",11,"actions",7,"graphics",15,"g2d",7,"math",0,"mygdx",18,"game",-1,"java",20,"util",21,"regex",20,"nio",23,"charset",20,"lang"]);
C$([C,"Object",25,0,[],0,3,0,0,["cU",P(Hi),"cO",N(AJu),"T",P(PV)],AQm,0,C,[],0,3,0,0,0,Ox,0,C,[],0,3,0,S2,0,Ok,0,C,[],3,3,0,0,0,Mr,0,C,[Ok],0,3,0,0,0,CZ,0,C,[],3,3,0,0,0,Np,0,Mr,[CZ],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,FH,0,C,[BB],0,3,0,0,0,Ds,0,C,[],3,3,0,0,0,B_,0,C,[],3,3,0,0,0,BG,0,C,[Ds,B_],1,3,0,0,["T",P(AFE),"cO",N(YN)],Hp,0,BG,[],12,3,0,0,0,CI,"Actor",11,C,[],0,3,0,0,["be",N(IB),"J",Bd(R3),"x",N(AOv),"Z",N(AND),"T",P(S6)],Mu,0,C,[],3,3,0,0,0,BL,"Group",11,CI,[Mu],0,3,0,0,["be",N(RN),"bO",Bu(AH1),"Z",N(Pf),
"J",Bd(Ie),"x",N(AN8),"T",P(ABU)],Gq,0,C,[],3,3,0,0,0,DL,"Iterable",25,C,[],3,3,0,0,0,G6,0,C,[Gq,DL],0,3,0,0,0,GI,0,C,[],3,3,0,0,0,B4,0,C,[GI],0,3,0,0,0,Hn,0,B4,[],0,3,0,0,0,AL8,0,Hn,[],0,0,0,0,0,GN,"FocusListener$FocusEvent$Type",13,BG,[],12,3,0,0,0,Nr,0,C,[],3,3,0,0,0,I2,0,C,[Nr],3,3,0,0,0,GG,0,C,[],3,3,0,0,0,DJ,0,C,[GG],1,3,0,0,0,APg,0,DJ,[],0,0,0,0,0,Nc,0,G6,[],0,3,0,0,0,MN,0,C,[GI],0,3,0,0,0,ACY,0,C,[],1,3,0,0,0,Xz,0,C,[],0,3,0,0,0,Wb,0,C,[],3,3,0,0,0,LP,0,C,[Wb],0,3,0,0,0,ALv,0,LP,[],0,0,0,0,0,C2,"FocusListener$FocusEvent",
13,FH,[],0,3,0,0,["bt",P(Wr)],Ry,0,C,[],32,0,0,WE,0,AJq,0,C,[],1,3,0,0,0,Ty,0,C,[],32,0,0,Se,0,APf,0,DJ,[],0,0,0,0,0,Fo,0,C,[Nr],0,3,0,0,0,Tt,0,Fo,[I2],0,3,0,0,0,Wm,0,C,[],4,3,0,Us,0,L3,0,C,[GI],1,3,0,0,0,ARS,0,Hn,[],0,3,0,0,0,AEk,0,C,[],0,3,0,0,0,U5,0,C,[],0,3,0,VJ,0,Nk,0,C,[GI],1,3,0,0,0,IM,0,Fo,[I2],0,3,0,0,0]);
C$([V7,0,Fo,[I2],0,3,0,0,0,Ea,0,B4,[],0,3,0,0,0,VZ,0,IM,[],0,3,0,0,0,ABC,0,FH,[],0,3,0,0,0,KF,0,C,[],3,3,0,0,0,Z,"InputEvent",11,FH,[],0,3,0,0,["bt",P(Qn),"T",P(OS)],DU,"Stage$TouchFocus",11,C,[BB],4,3,0,0,["bt",P(O6)],N6,0,C,[],32,0,0,L_,0,Dt,"InputEvent$Type",11,BG,[],12,3,0,0,0,BP,"Action",11,C,[BB],1,3,0,0,["bZ",P(AMR),"bx",N(M4),"bt",P(AAj),"T",P(ANy)],EV,0,BP,[],1,3,0,0,0,AGj,0,EV,[],0,3,0,0,0,AK8,0,EV,[],0,3,0,0,0,C5,0,BP,[],1,3,0,0,["bu",N(ARE),"bZ",P(ATG)],EK,0,C5,[],1,3,0,0,0,XX,0,EK,[],0,3,0,0,0,AAf,
0,C,[GI],0,0,0,0,0,NS,0,BP,[],0,3,0,0,["bt",P(ALj),"bx",N(ANN),"T",P(AJf)],Dk,"SequenceAction",14,NS,[],0,3,0,0,["bu",N(Oi),"bZ",P(UX)],AEd,0,BP,[],0,3,0,0,0,AIx,0,BP,[],0,3,0,0,0,ANu,0,BP,[],0,3,0,0,0,AOm,0,C,[],0,3,0,0,0,LW,0,BP,[],1,3,0,0,0,AHT,0,LW,[],0,3,0,0,0,Cb,"MoveToAction",14,C5,[],0,3,0,0,["bD",P(Ta),"b2",N(Su),"bt",P(Uz)],APa,0,C5,[],0,3,0,0,0,APN,0,EK,[],0,3,0,0,0,ALS,0,BP,[],0,3,0,0,0,AMp,0,EK,[],0,3,0,0,0,ARt,0,C5,[],0,3,0,0,0,C4,"ColorAction",14,C5,[],0,3,0,0,["bD",P(O1),"b2",N(R8),"bt",P(Wl)],AEN,
0,BP,[],0,3,0,0,0,AHo,0,C5,[],0,3,0,0,0,AHE,0,BP,[],0,3,0,0,0,AFi,0,BP,[],0,3,0,0,0,AHW,0,EV,[],0,3,0,0,0,YR,0,C5,[],0,3,0,0,0,ARC,0,BP,[],0,3,0,0,0,ALn,0,EK,[],0,3,0,0,0,AE0,0,EV,[],0,3,0,0,0,AKx,0,BP,[],0,3,0,0,0,AAh,0,C5,[],0,3,0,0,0,AGX,0,C5,[],0,3,0,0,0,ABw,0,C,[CZ],0,3,0,0,0,Dd,0,BL,[KF],0,3,0,0,0,Et,0,Dd,[],0,3,0,Q6,0,F0,0,Et,[Gq],0,3,0,0,0,LH,0,F0,[],0,3,0,0,0,ACr,0,LH,[],0,3,0,0,0]);
C$([APc,0,B4,[],0,0,0,0,0,ML,0,Dd,[],0,3,0,0,0,Sm,0,C,[],3,3,0,0,0,EC,0,C,[Sm],1,3,0,0,0,AED,0,EC,[],0,0,0,0,0,Dq,0,CI,[KF],0,3,0,0,0,Y_,0,Dq,[],0,3,0,0,0,APb,0,B4,[],0,0,0,0,0,B8,0,C,[],1,3,0,Is,0,TE,0,B8,[],0,0,0,0,0,ALw,0,B8,[],0,0,0,0,0,Kx,0,Ea,[],0,3,0,0,0,AHL,0,Kx,[],0,3,0,0,0,V2,0,B8,[],0,0,0,0,0,ARf,0,B4,[],0,0,0,0,0,Mi,0,Et,[],0,3,0,0,0,ALx,0,B8,[],0,0,0,0,0,Go,0,C,[],3,3,0,0,0,Fe,0,C,[B_,Go],0,3,0,0,0,DR,"Table$DebugRect",12,Fe,[],0,3,0,J5,0,AEH,0,EC,[],0,0,0,0,0,M0,0,Dq,[Gq],0,3,0,0,0,ACI,0,M0,[],
0,3,0,0,0,AG2,0,B4,[],0,0,0,0,0,Qx,0,C,[],3,3,0,0,0,ANA,0,C,[Qx],0,3,0,0,0,Gw,0,C,[],0,3,0,0,0,GR,0,Gw,[],0,3,0,0,0,Um,0,GR,[],0,3,0,0,0,M6,0,Dq,[Gq],0,3,0,0,0,AF2,0,M6,[],0,3,0,0,0,AS$,0,ML,[],0,0,0,0,0,KH,0,Dd,[],0,3,0,0,0,ATU,0,F0,[],0,3,0,0,0,Nv,0,Dq,[Mu],0,3,0,0,0,V0,0,B8,[],0,0,0,0,0,U0,0,C,[],0,3,0,0,0,AFc,0,C,[GG],0,0,0,0,0,AHP,0,B4,[],0,0,0,0,0,AJz,0,DJ,[],0,0,0,0,0,AGn,0,C,[],0,3,0,0,0,AM9,0,B4,[],0,0,0,0,0,ASR,0,Ea,[],0,0,0,0,0,AG0,0,MN,[],0,0,0,0,0,TA,0,B8,[],0,0,0,0,0,TD,0,B8,[],0,0,0,0,0,S7,0,
C,[],3,3,0,0,0,J3,0,C,[],0,3,0,0,0,O4,0,J3,[],0,3,0,0,0,AEE,0,EC,[],0,0,0,0,0]);
C$([AO_,0,L3,[],0,0,0,0,0,APd,0,Nk,[],0,0,0,0,0,ARg,0,B4,[],0,0,0,0,0,ARh,0,Ea,[],0,0,0,0,0,V1,0,B8,[],0,0,0,0,0,OV,0,C,[BB],0,3,0,Uo,0,Sa,0,GR,[],0,3,0,0,0,AHd,0,B4,[],0,0,0,0,0,Zx,0,DJ,[],0,0,0,0,0,TF,0,B8,[],0,0,0,0,0,AC4,0,Dd,[],0,3,0,0,0,AG1,0,B4,[],0,0,0,0,0,SD,0,C,[],0,3,0,0,0,Jo,0,B8,[],0,3,0,0,0,AFd,0,KH,[],0,3,0,0,0,TB,0,B8,[],0,0,0,0,0,AIp,0,Dq,[Gq],0,3,0,0,0,AG9,0,Nc,[],0,0,0,0,0,VD,0,C,[],0,3,0,0,0,Pj,0,Dq,[],0,3,0,UE,0,Pr,0,C,[],0,3,0,0,0,ALz,0,B8,[],0,0,0,0,0,V3,0,B8,[],0,0,0,0,0,AOt,0,Mi,[],
0,3,0,0,0,TC,0,B8,[],0,0,0,0,0,Rz,0,C,[],0,3,0,0,0,ASG,0,C,[],0,3,0,0,0,FC,0,BG,[],12,3,0,0,0,ASZ,0,B8,[],0,0,0,0,0,AGO,0,DJ,[],0,0,0,0,0,Dp,0,C,[],1,3,0,0,0,V4,0,Dp,[],0,0,0,0,0,Zm,0,C,[S7],0,3,0,0,0,VM,0,C,[],0,3,0,0,0,SS,0,C,[],0,3,0,0,0,Tv,0,C,[],0,3,0,0,0,Nt,0,B4,[],0,3,0,0,0,Zw,0,DJ,[],0,0,0,0,0,ARi,0,Nv,[],0,0,0,0,0,Zp,0,C,[],3,3,0,0,0,AHe,0,B4,[],0,0,0,0,0,ATJ,0,Dd,[],0,3,0,0,0,AK5,0,Dd,[],0,3,0,0,0,AG_,0,Ea,[],0,0,0,0,0,Nh,0,C,[],0,3,0,0,0,AEC,0,Nh,[],0,0,0,0,0,AQT,0,CI,[CZ],0,3,0,0,0,Yz,0,B4,[],0,
0,0,0,0,AOQ,0,F0,[],0,3,0,0,0,AJ8,0,B4,[],0,0,0,0,0]);
C$([ASm,0,Ea,[],0,0,0,0,0,U6,0,Gw,[],0,3,0,0,0,ALa,0,Dd,[],0,3,0,0,0,SI,0,C,[],0,3,0,0,0,RP,0,C,[],0,3,0,0,0,AJH,0,Dq,[],0,3,0,0,0,ASS,0,G6,[],0,0,0,0,0,YB,0,B4,[],0,0,0,0,0,AMO,0,Dd,[],0,3,0,0,0,AS8,0,Nt,[],0,3,0,0,0,YC,0,Et,[],0,0,0,0,0,AEF,0,EC,[],0,0,0,0,0,WU,0,C,[],1,3,0,0,0,VY,0,C,[],0,3,0,0,0,Vw,0,C,[B_],0,3,0,Vx,0,BO,0,C,[],1,3,0,JM,0,PM,0,BO,[],0,3,0,0,0,AGR,0,C,[],0,3,0,0,0,Uc,0,BO,[],0,0,0,0,0,ARN,0,C,[],0,3,0,0,0,EE,0,BO,[],0,3,0,0,0,HX,0,EE,[],0,3,0,0,0,HR,0,EE,[],0,3,0,0,0,Jz,0,C,[],3,3,0,0,0,ABW,
0,C,[Jz],0,3,0,0,0,Uf,0,BO,[],0,0,0,0,0,APr,0,C,[Go],0,3,0,0,0,Ub,0,BO,[],0,0,0,0,0,GF,0,BO,[],0,3,0,0,0,Ua,0,BO,[],0,0,0,0,0,T_,0,BO,[],0,0,0,0,0,ALD,0,C,[],4,3,0,0,0,Xy,0,Dp,[],0,0,0,0,0,Jf,0,C,[],3,3,0,0,0,Bc,"Vector2",17,C,[B_,Jf],0,3,0,0,["T",P(ABe),"cO",N(ADO)],Tm,0,BO,[],0,0,0,0,0,FV,0,BO,[],0,3,0,0,0,AJD,0,C,[],0,3,0,0,0,Uh,0,BO,[],0,0,0,0,0,NO,0,FV,[],0,3,0,0,0,AE$,0,C,[BB],0,3,0,0,0,Hw,0,BG,[],12,3,0,0,0,SO,0,C,[],0,3,0,Si,0,G1,0,BO,[],0,3,0,0,0,R6,0,G1,[],0,3,0,0,0,Ti,0,BO,[],0,0,0,0,0,S$,0,C,[B_],
4,3,0,0,0,T$,0,BO,[],0,0,0,0,0,F9,0,C,[B_,Jf],0,3,0,0,0,O$,0,GF,[],0,3,0,0,0]);
C$([RI,0,BO,[],0,3,0,0,0,ABG,0,C,[],0,3,0,0,0,ATs,0,C,[Go],0,3,0,0,0,Ud,0,BO,[],0,0,0,0,0,VO,0,BO,[],0,3,0,0,0,Tn,0,BO,[],0,0,0,0,0,RG,0,GF,[],0,3,0,0,0,WA,0,C,[B_],0,3,0,Qh,0,KD,0,C,[B_],0,3,0,N3,0,L0,0,C,[B_],0,3,0,My,0,AB5,0,C,[B_],0,3,0,0,0,Yb,0,C,[B_],0,3,0,0,0,AM4,0,C,[B_,Go],0,3,0,0,0,AGc,0,C,[Jz],0,3,0,0,0,TN,0,C,[],4,3,0,FQ,0,Vc,0,C,[],4,3,0,Q1,0,ZD,0,C,[],4,3,0,0,0,Q4,0,G1,[],0,3,0,0,0,LJ,0,C,[B_],0,3,0,Ej,0,PY,0,C,[],3,3,0,0,0,Mz,0,C,[PY,B_],0,3,0,0,0,Tc,0,Mz,[],0,3,0,0,0,Tl,0,BO,[],0,0,0,0,0,Ue,
0,BO,[],0,0,0,0,0,Nb,0,C,[],0,3,0,I6,0,Er,0,C,[B_],0,3,0,0,0,Oq,0,C,[],0,3,0,0,0,AK1,0,C,[],0,3,0,0,0,Bo,0,C,[B_,Jf],0,3,0,CU,0,AFb,0,C,[B_,Go],0,3,0,0,0,AC$,0,Dp,[],0,0,0,0,0,L9,0,FV,[],0,3,0,0,0,ALA,0,C,[Jz],0,3,0,0,0,Z6,0,C,[],0,3,0,0,0,APQ,0,C,[B_],0,3,0,0,0,JS,0,C,[B_],0,3,0,0,0,Tk,0,BO,[],0,0,0,0,0,APV,0,C,[],0,3,0,0,0,AAd,0,C,[],0,3,0,0,0,AMS,0,C,[],0,3,0,0,0,APO,0,C,[B_],0,3,0,0,0,AKl,0,C,[],3,3,0,0,0,AFp,0,C,[B_],0,3,0,0,0,ANH,0,C,[],0,0,0,0,0,Ku,0,C,[BB],0,3,0,Mv,0,GS,0,C,[],0,3,0,0,["ca",BS(Ps)],MD,
0,GS,[],0,3,0,0,["ca",BS(APi)],Rf,0,C,[CZ],0,3,0,0,0,AMx,0,C,[],0,3,0,0,0,BI,"Color",15,C,[],0,3,0,0,0]);
C$([N1,0,C,[CZ],1,3,0,0,0,H4,0,N1,[],0,3,0,0,["T",P(AKm)],Bf,"Array",8,C,[DL],0,3,0,0,["cO",N(Sr),"T",P(JN)],J$,0,C,[DL],0,3,0,0,0,AFX,0,J$,[],0,3,0,0,0,ASE,0,C,[DL],0,3,0,0,0,DY,0,C,[],4,3,0,0,["cO",N(AKu)],ASW,0,C,[],0,3,0,0,0,AHu,0,C,[],0,3,0,0,0,AKY,0,C,[],0,3,0,0,0,AIY,0,C,[],0,3,0,0,0,RR,0,C,[],0,3,0,S8,0,Yw,0,C,[],0,3,0,0,0,AJP,0,C,[],0,3,0,0,0,AIz,0,C,[],0,3,0,0,0,AJl,0,C,[],0,3,0,0,0,APp,0,C,[],0,3,0,0,0,AFk,0,C,[],0,3,0,0,0,AQY,0,C,[],0,3,0,0,0,AG7,0,C,[],0,3,0,0,0,AAn,0,C,[],0,3,0,0,0,ABM,0,C,[],
0,3,0,0,0,JR,0,BG,[],12,3,0,0,0,AJV,0,C,[],0,3,0,0,0,TU,0,C,[],3,3,0,0,0,DF,0,C,[],0,3,0,0,0,YG,0,DF,[],0,3,0,0,0,YE,0,DF,[],0,3,0,0,0,AH2,0,DF,[],0,3,0,0,0,AC2,0,DF,[],0,3,0,0,0,AM6,0,DF,[],0,3,0,0,0,L4,0,DF,[],0,3,0,0,0,ACQ,0,L4,[],0,3,0,0,0,HK,0,C,[],3,3,0,0,0,AD0,0,C,[CZ,HK],0,3,0,0,0,Fm,0,C,[],3,3,0,0,0,AMQ,0,C,[Fm,HK],0,3,0,0,0,AQU,0,C,[Fm],0,3,0,0,0,ABc,0,C,[],0,3,0,0,0,EL,0,C,[Fm],0,3,0,0,0,ALJ,0,EL,[],0,3,0,0,0,HC,0,EL,[HK,Fm],1,3,0,0,0,DS,0,HC,[],1,3,0,Re,0,AMw,0,C,[],0,3,0,0,0,APn,0,DS,[],4,3,0,0,
0,AHj,0,DS,[],4,3,0,0,0,ARJ,0,EL,[],0,3,0,0,0,Ls,0,EL,[],0,3,0,0,0,Yp,0,Ls,[],0,3,0,0,0,ACM,0,DS,[],4,3,0,0,0]);
C$([G$,0,HC,[],1,3,0,0,0,AIS,0,G$,[],4,3,0,0,0,AHg,0,DS,[],4,3,0,0,0,AJo,0,DS,[],4,3,0,0,0,AIQ,0,G$,[],4,3,0,0,0,HA,0,BG,[],12,3,0,0,0,FX,0,C,[CZ,Fm,HK],1,3,0,0,0,M2,0,FX,[Fm],1,3,0,0,0,W3,0,M2,[Fm],0,3,0,0,0,HS,0,BG,[],12,3,0,0,0,C3,0,FX,[],1,3,0,0,0,Ih,0,C3,[],1,3,0,0,0,AA1,0,C,[],0,3,0,0,0,GL,0,C3,[],1,3,0,UF,0,Ey,0,GL,[],1,3,0,0,0,F3,0,Ey,[],1,3,0,0,0,ADW,0,F3,[],0,3,0,0,0,HQ,0,C3,[],1,3,0,0,0,ATz,0,HQ,[],0,3,0,0,0,APk,0,C3,[],0,3,0,0,0,FA,0,C3,[],1,3,0,0,0,Yy,0,FA,[],0,3,0,0,0,Hm,0,C3,[],1,3,0,0,0,ADN,
0,Ey,[],0,3,0,0,0,AF$,0,Ey,[],0,3,0,0,0,KQ,0,C3,[],1,3,0,0,0,ALK,0,KQ,[],0,3,0,0,0,ZT,0,FA,[],0,3,0,0,0,AHs,0,F3,[],0,3,0,0,0,ALB,0,C3,[],0,3,0,0,0,AJy,0,FA,[],0,3,0,0,0,ALR,0,C3,[],0,3,0,0,0,ANB,0,GL,[],0,3,0,0,0,AGf,0,Dp,[],0,0,0,0,0,AAz,0,Dp,[],0,0,0,0,0,AAS,0,Ey,[],0,3,0,0,0,AMk,0,Hm,[],0,3,0,0,0,ARL,0,Ih,[],0,3,0,0,0,AKv,0,Ih,[],0,3,0,0,0,ANm,0,Hm,[],0,3,0,0,0,AIn,0,F3,[],0,3,0,0,0,ASt,0,HQ,[],0,3,0,0,0,EJ,0,FX,[],1,3,0,0,0,AIX,0,EJ,[],0,3,0,0,0,FG,0,C,[],1,3,0,0,0,AMK,0,FG,[],0,3,0,0,0,AN5,0,EJ,[],0,3,
0,0,0,APj,0,EJ,[],0,3,0,0,0,AQl,0,FG,[],0,3,0,0,0,ADu,0,EJ,[],0,3,0,0,0]);
C$([APq,0,FG,[],0,3,0,0,0,Kr,0,C,[],3,3,0,0,0,Of,0,C,[],3,3,0,0,0,BE,"Class",25,C,[Kr,Of],0,3,0,0,["T",P(AIO)],ABT,0,C,[],4,0,0,0,0,AAG,0,C,[],4,3,0,0,0,Dx,0,C,[],0,3,0,0,["c5",P(AOh)],Bz,0,Dx,[],0,3,0,0,0,Bw,"RuntimeException",25,Bz,[],0,3,0,0,0,AHb,"ClassCastException",25,Bw,[],0,3,0,0,0,J1,0,C,[],3,3,0,0,0,I,"String",25,C,[B_,Ds,J1],0,3,0,0,["T",P(Cn),"cO",N(AQ_),"cU",P(ALf)],Ex,0,C,[B_],1,3,0,0,0,Fy,0,Ex,[Ds],0,3,0,0,0,Bb,0,C,[B_,J1],0,0,0,0,["c$",N(IC),"T",P(Ms)],IZ,0,C,[],3,3,0,0,0,K,0,Bb,[IZ],0,3,0,0,
["gx",BS(AHS),"jx",Bd(ACP),"T",P(Ev),"c$",N(AIf),"de",Bu(AI5)],Rv,0,C,[],0,3,0,0,0,Qa,0,C,[],3,3,0,0,0,LU,0,C,[Qa,GG],0,3,0,0,0,VT,0,C,[],3,3,0,0,0,MF,0,C,[VT],1,3,0,0,0,Qc,0,MF,[],0,3,0,0,0,AOe,0,C,[],4,3,0,0,0,Ia,0,BG,[],12,3,0,0,0,OF,0,C,[],3,3,0,0,0,Cy,0,C,[],3,3,0,0,0,RQ,0,C,[Cy],3,3,0,0,0,Js,0,C,[OF,RQ],0,3,0,E8,["jy",N(AMd)],ALU,0,C,[],0,3,0,0,0,Rj,0,C,[],0,3,0,Cx,0,NI,0,Ex,[Ds],0,3,0,0,0,GM,0,C,[],0,3,0,0,0,AGi,0,C,[],4,3,0,0,0,DQ,"GlyphLayout$GlyphRun",16,C,[BB],0,3,0,0,0,FR,0,C,[],0,3,0,0,0,Mk,0,C,
[],3,3,0,0,0,K0,0,C,[Mk],1,3,0,0,0,Fi,0,C,[],3,3,0,0,0,I7,0,K0,[Fi,B_],0,3,0,0,0,Ik,"Comparator",21,C,[],3,3,0,0,0,NR,0,C,[Ik],0,3,0,0,0,MU,0,C,[Ds],0,3,0,0,0,ACC,0,C,[],0,3,0,0,0,AMr,0,C,[],4,3,0,0,0,N5,0,C,[],3,3,0,0,0,Pc,0,C,[N5],0,3,0,0,0,AB0,0,C,[],0,3,0,0,0,AEU,0,C,[],0,3,0,0,0,TH,0,C,[],3,3,0,0,0]);
C$([KI,0,C,[TH],0,3,0,EF,0,Oz,0,C,[],0,3,0,0,0,DM,0,C,[],0,3,0,0,["g4",N(AJC)],Tq,0,C,[],3,3,0,0,0,Eu,0,C,[Cy],3,3,0,0,0,Mm,0,C,[Tq,Eu],0,3,0,0,["jz",N(Yu)],SK,0,C,[],3,3,0,0,0,Uy,0,C,[SK],0,3,0,0,0,TR,0,C,[TU],0,3,0,0,0,TI,0,C,[],3,3,0,0,0,Rs,0,C,[TI],0,3,0,0,0,PT,0,C,[],3,3,0,0,0,TM,0,C,[PT],0,3,0,0,0,AKC,0,C,[],0,3,0,0,0,UC,0,C,[],3,3,0,0,0,TS,0,C,[UC],3,3,0,0,0,QR,0,C,[TS],0,3,0,0,0,Kj,0,C,[Eu],0,0,0,0,["jz",N(ANa)],Kk,0,C,[Eu],0,0,0,0,["jz",N(AR8)],Bm,"IllegalArgumentException",25,Bw,[],0,3,0,0,0,AP4,0,
C,[],4,3,0,0,0,ZV,0,C,[DL],0,3,0,0,0,AIk,0,Ex,[Ds],0,3,0,0,0,AHR,0,C,[Cy],1,3,0,0,0,Md,0,C,[],3,3,0,0,0,G2,"TeaGL20",5,C,[Md],0,3,0,0,["ih",Bu(AFw),"is",Bu(AR0),"cB",Bu(AA3),"hg",BS(AEB),"eB",BS(Ln),"eC",BS(Lm),"hr",N(APz),"hq",BS(ABg),"ie",N(AGA),"ia",P(ASK),"ic",N(AMg),"ha",N(APA),"bb",N(ALY),"iv",N(AKp),"hV",Bd(ABS),"hW",BS(AHq),"h0",BS(AJU),"W",N(ARA),"it",N(AQh),"iW",N(W9),"eD",BS(KA),"eE",BS(L6),"im",Bu(ADj),"cm",Bu(Jp),"g_",N(ASB),"eF",Bd(Mx),"ig",N(AH_),"eG",Bd(K4),"dW",N(AEg),"ij",Bu(AEa),"ii",N(Zs),
"cx",Bu(ABR),"id",Bu(W8),"cA",function(b,c,d,e,f,g,h,i,j){MJ(this,b,c,d,e,f,g,h,i,j);},"cH",Bd(AI1),"ch",Bd(ALr),"hn",Bu(ALX),"hd",N(Zu),"iu",function(b,c,d,e,f,g){AIB(this,b,c,d,e,f,g);},"dE",BS(Xv)],SJ,0,C,[Md],3,3,0,0,0,J6,"TeaGL30",5,G2,[SJ],0,3,0,0,["iz",N(AE1),"hX",BS(AKg),"hZ",function(b,c,d,e,f){ATk(this,b,c,d,e,f);},"ix",Bu(AKS),"cm",Bu(AHy)],Pd,"TeaGL30Debug",5,J6,[],0,3,0,0,["iz",N(ADr),"hX",BS(AAb),"hZ",function(b,c,d,e,f){ARQ(this,b,c,d,e,f);},"ix",Bu(Zg),"cB",Bu(Z5),"hr",N(APE),"hq",BS(AI6),"ha",
N(Zd),"bb",N(AQk),"hV",Bd(ACH),"hW",BS(AMt),"W",N(AN9),"dW",N(WT),"cx",Bu(X6),"cA",function(b,c,d,e,f,g,h,i,j){AJA(this,b,c,d,e,f,g,h,i,j);},"cH",Bd(ACo),"dE",BS(AEQ),"ih",Bu(AIg),"is",Bu(ARb),"hg",BS(ADt),"eB",BS(AJg),"eC",BS(AQ3),"ie",N(AKJ),"ia",P(ASJ),"ic",N(AMN),"iv",N(ASy),"h0",BS(ZK),"it",N(AMU),"iW",N(APK),"eD",BS(AGg),"eE",BS(APB),"im",Bu(AJ2),"cm",Bu(ADC),"eF",Bd(ABj),"g_",N(X4),"eG",Bd(ASH),"ig",N(YX),"ij",Bu(X7),"ii",N(ARG),"id",Bu(X2),"ch",Bd(Zr),"hn",Bu(AAy),"hd",N(ATp),"iu",function(b,c,d,e,f,
g){ANF(this,b,c,d,e,f,g);}],QH,0,C,[],0,3,0,0,0,E2,0,BG,[],12,3,0,0,0,T1,0,C,[Cy],3,3,0,0,0,MO,0,C,[T1],0,0,0,0,["jA",P(ACy)],VQ,"TeaGL20Debug",5,G2,[],0,3,0,0,["cB",Bu(ASe),"hr",N(ABq),"hq",BS(ACm),"ha",N(AJe),"bb",N(AS0),"hV",Bd(AGy),"hW",BS(ASq),"W",N(ZN),"dW",N(AHX),"cx",Bu(AKO),"cA",function(b,c,d,e,f,g,h,i,j){ADD(this,b,c,d,e,f,g,h,i,j);},"cH",Bd(ACW),"dE",BS(ASC),"ih",Bu(XZ),"is",Bu(WP),"hg",BS(WN),"eB",BS(AHp),"eC",BS(AE4),"ie",N(AS_),"ia",P(ALl),"ic",N(ASP),"iv",N(ALe),"h0",BS(AFl),"it",N(AS1),"iW",
N(AKc),"eD",BS(AHt),"eE",BS(Z_),"im",Bu(AFx),"cm",Bu(XA),"eF",Bd(ADJ),"g_",N(ADR),"eG",Bd(Yd),"ig",N(ANM),"ij",Bu(AP3),"ii",N(AII),"id",Bu(ASo),"ch",Bd(APT),"hn",Bu(ASI),"hd",N(Yf),"iu",function(b,c,d,e,f,g){AA8(this,b,c,d,e,f,g);}],T7,0,C,[DL],0,3,0,0,0,Sl,0,C,[],0,3,0,0,0,UT,0,C,[Cy],3,3,0,0,0,Mg,0,C,[UT],0,0,0,0,["jB",P(XR),"jC",P(AB4),"jD",P(Xr)],V$,0,C,[],3,3,0,0,0,Wh,0,C,[V$],0,3,0,0,0,OA,0,DM,[],0,0,0,0,0,UP,"CloneNotSupportedException",25,Bz,[],0,3,0,0,0,Ck,0,Dp,[],0,3,0,0,0,H,"IndexOutOfBoundsException",
25,Bw,[],0,3,0,0,0,Fa,0,C,[Cy],3,3,0,0,0,Qj,0,C,[Fa],3,3,0,0,0,RX,0,C,[Fa],3,3,0,0,0,RM,0,C,[Fa],3,3,0,0,0,Tj,0,C,[Fa],3,3,0,0,0,V6,0,C,[Fa],3,3,0,0,0]);
C$([Ug,0,C,[Fa,Qj,RX,RM,Tj,V6],3,3,0,0,0,PW,0,C,[],3,3,0,0,0,K2,0,C,[Cy],3,3,0,0,0,OY,0,C,[Cy,Ug,PW,K2],1,3,0,0,["jE",N(ALM),"jF",Bu(APh),"jG",Bu(AOx),"jH",Bd(ALy),"jI",N(ARr),"jJ",P(AA9),"jK",Bd(Xq)],LS,0,C,[],1,3,0,0,0,JX,0,LS,[Mk,Fi,B_],0,3,0,0,0,M1,0,JX,[],0,3,0,0,0,AFM,0,C,[],0,3,0,0,0,GJ,0,BG,[],12,3,0,0,0,DN,0,C,[Cy],1,3,0,0,0,ACU,0,DN,[],1,3,0,0,0,AB6,0,DN,[],1,3,0,0,0,AHz,0,DN,[],1,3,0,0,0,AKL,0,DN,[],1,3,0,0,0,AF5,0,DN,[],1,3,0,0,0,Lx,0,C,[Eu],0,0,0,0,["jz",N(AG3)],Ly,0,C,[Eu],0,0,0,0,["jz",N(ASr)],Lw,
0,C,[Eu],0,0,0,0,["jz",N(AMF)],St,0,Dp,[],0,3,0,0,0,U2,0,C,[Cy],3,3,0,0,0,Kt,0,C,[U2],0,0,0,0,["jL",P(ADc)],ABQ,0,DN,[],1,3,0,0,0,RF,0,C,[B_],4,3,0,0,0,Ny,0,C,[],3,3,0,0,0,SL,0,C,[Ny],4,3,0,0,0,AAi,0,C,[],4,3,0,0,0,KX,0,C,[],4,3,0,0,0,B3,"ReflectionException",9,Bz,[],0,3,0,0,0,EM,0,C,[],4,3,0,BF,0,Rk,0,C,[],3,3,0,0,0,Kq,0,C,[Rk],0,0,0,0,0,H0,"Iterator",21,C,[],3,3,0,0,0,Kp,0,C,[H0],0,0,0,0,0,Ut,0,C,[Ny],0,0,0,0,0,CA,"NumberFormatException",25,Bm,[],0,3,0,0,0,KO,0,Bw,[],0,3,0,0,0,Ez,0,Bz,[],0,3,0,0,0,Hs,"NoSuchMethodException",
25,Ez,[],0,3,0,0,0,Dm,"NullPointerException",25,Bw,[],0,3,0,0,0,Cd,0,C,[],1,0,0,0,["fB",Bd(ACt),"f5",BS(AFm),"fo",P(AAx),"T",P(AN0),"e9",N(AQB),"fn",N(AQz),"fL",P(ASg),"e5",P(Iq)],MX,0,C,[Kr],0,3,0,0,0,AR2,0,C,[Cy],1,3,0,0,0,AEs,0,C,[Cy],1,3,0,0,0,ATK,0,C,[Cy],1,3,0,0,0,K5,0,C,[Cy],3,3,0,0,0,Mq,0,C,[K5],0,3,0,0,["jM",N(AQJ)],AF1,0,C,[Cy],1,3,0,0,0,Mp,0,C,[K5],0,3,0,0,["jM",N(Y3)],N$,0,C,[],3,3,0,0,0,HE,0,C,[N$,Fi],0,0,0,0,0]);
C$([IO,0,HE,[],0,0,0,0,0,Dz,0,Cd,[],0,0,0,D2,["fJ",Bd(Zq),"fK",P(AFW),"gj",N(Z8)],Tx,0,C,[],0,0,0,0,0,Cm,"PatternSyntaxException",22,Bm,[],0,3,0,0,["c5",P(AR$)],Zy,0,C,[],0,3,0,0,0,KN,0,C,[DL],3,3,0,0,0,Mb,0,C,[KN],1,3,0,0,0,Sh,0,C,[KN],3,3,0,0,0,Oy,0,C,[Sh],3,3,0,0,0,KP,0,Mb,[Oy],1,3,0,0,0,TO,0,C,[],3,3,0,0,0,KM,0,KP,[Fi,B_,TO],0,3,0,0,0,Sc,0,Dz,[],0,0,0,0,["fJ",Bd(Yc),"fK",P(AB8),"gj",N(AOr)],Wi,0,Dz,[],0,0,0,0,["fJ",Bd(ABI),"fK",P(AHc)],QB,0,Dz,[],0,0,0,0,["fJ",Bd(AAu),"fK",P(AQr)],SW,0,Dz,[],0,0,0,0,["fJ",
Bd(YA),"fK",P(AO3),"gj",N(AMh)],GE,0,Dz,[],0,0,0,0,["fJ",Bd(AQ4),"fK",P(AAQ)],CD,0,Cd,[],1,0,0,0,["fJ",Bd(ATa),"f2",P(APG),"gj",N(AG5)],Fj,0,CD,[],0,0,0,0,["f3",Bu(AOP),"fB",Bd(ADQ),"f5",BS(ABp),"fK",P(AFY),"gj",N(Yt)],Cq,0,Cd,[],0,0,0,0,["fJ",Bd(AFo),"e9",N(AL$),"fK",P(AHm),"fn",N(AIG),"gj",N(ANf),"e5",P(ABh)],J4,0,Cq,[],0,0,0,0,["fJ",Bd(ALI),"fK",P(AIV),"gj",N(ANS)],Eq,0,J4,[],0,0,0,0,["fJ",Bd(ACB),"e9",N(ANo),"fK",P(Yn)],Om,0,Eq,[],0,0,0,0,["fJ",Bd(AL0),"gj",N(AQE),"fK",P(ASc)],Vi,0,Eq,[],0,0,0,0,["fJ",Bd(ZX),
"gj",N(APX),"fK",P(AE9)],RK,0,Eq,[],0,0,0,0,["fJ",Bd(AA$),"gj",N(ATM),"fK",P(ALd)],Th,0,Eq,[],0,0,0,0,["fJ",Bd(Xm),"gj",N(AN_),"fK",P(AAv)],Gt,0,Cq,[],0,0,0,0,["fJ",Bd(XT),"fB",Bd(AI7),"f5",BS(AOy),"fn",N(AIw),"fL",P(AMa),"e5",P(ASp)],AKt,0,C,[],4,3,0,0,0,JT,"ArrayStoreException",25,Bw,[],0,3,0,0,0,HW,0,C,[],1,0,0,0,0,Bq,0,HW,[],1,0,0,0,["gd",P(Z0),"f8",P(YW),"fy",P(APv),"fx",P(ASa)],Kn,"MissingResourceException",21,Bw,[],0,3,0,0,0,CM,0,Bq,[],0,0,0,0,["gg",N(ABv),"gd",P(ATH),"f8",P(ADz),"fy",P(AQp),"T",P(AKD),
"fx",P(AD3)],EG,0,Cd,[],1,0,0,0,["fn",N(AOA),"gj",N(AQZ),"e5",P(AJL)],DI,0,EG,[],0,0,0,0,["fJ",Bd(Xo),"fK",P(ABd)],Fs,0,DI,[],0,0,0,0,["fJ",Bd(Zt),"fK",P(Z4)],DK,0,EG,[],0,0,0,0,["fJ",Bd(XQ),"fK",P(AGw)],Fq,0,DI,[],0,0,0,0,["fJ",Bd(AJc),"e9",N(ATR)],Vv,0,DI,[],0,0,0,0,["fJ",Bd(ASX),"fB",Bd(AKs)],Nz,0,C,[],4,0,0,0,0,By,0,C,[],1,0,0,0,0,OJ,0,HW,[Fi],0,0,0,0,["T",P(MC)],Pq,0,Cd,[],0,0,0,0,["fJ",Bd(AHJ),"fK",P(ALV),"gj",N(AL9)],Bn,0,C,[Fi,B_],0,3,0,0,0,Os,0,Cq,[],0,0,0,0,["fK",P(AMj)],Hr,0,Cq,[],0,0,0,0,["fJ",Bd(Zi),
"e9",N(ALF),"fK",P(AML),"gj",N(AAD),"fn",N(ZZ)],DT,0,Cq,[],0,0,0,0,["fJ",Bd(ADn),"fK",P(AR1),"gg",N(AEl),"fn",N(Y$),"e9",N(APl),"gj",N(ADF)],Kh,0,DT,[],0,0,0,0,["gg",N(AG6),"fK",P(ASw)],KU,0,CD,[],0,0,0,0,["f3",Bu(AHM),"fK",P(AAg)],Ef,0,CD,[],0,0,0,0,["f3",Bu(WO),"fK",P(AH4),"fn",N(AL_)]]);
C$([IH,0,Cq,[],0,0,0,0,["e9",N(AJb),"fK",P(AOb),"fJ",Bd(W_),"fn",N(AAp),"gj",N(AQt)],Ec,0,CD,[],0,0,0,0,["f2",P(AHn),"f3",Bu(AFJ),"fB",Bd(ADh),"f5",BS(AHx),"fK",P(AQN),"fn",N(AQi)],NE,0,CD,[],0,0,0,0,["f3",Bu(WY),"fK",P(ALC)],Ke,0,CD,[],0,0,0,0,["f3",Bu(XH),"fK",P(AF6)],Fx,0,Cq,[],0,0,0,0,["e9",N(ASk),"fJ",Bd(ALG),"fK",P(ALm),"fn",N(AHO),"gj",N(ANr)],V_,0,Fx,[],0,0,0,0,0,TG,0,Fx,[],0,0,0,0,0,WG,0,DK,[],0,0,0,0,["fJ",Bd(ABP)],Qw,0,DK,[],0,0,0,0,["fJ",Bd(AKe)],G0,0,DK,[],0,0,0,0,["fJ",Bd(APe),"e9",N(ARd)],Qg,
0,G0,[],0,0,0,0,["fJ",Bd(AHv),"e9",N(AKP)],Gh,0,DK,[],0,0,0,0,["fJ",Bd(ATB),"fK",P(ARn)],OM,0,Gh,[],0,0,0,0,["fJ",Bd(AGx)],R4,0,DK,[],0,0,0,0,["fJ",Bd(ASA)],Rd,0,G0,[],0,0,0,0,["fJ",Bd(AAF)],Uk,0,Gh,[],0,0,0,0,["fJ",Bd(YK)],R5,0,EG,[],0,0,0,0,["fJ",Bd(ATe),"fB",Bd(APx),"fK",P(AMT)],Pz,0,EG,[],0,0,0,0,["fJ",Bd(AMb),"fB",Bd(Xh),"fK",P(AOk)],HL,0,C,[],1,0,0,0,0,WI,0,DI,[],0,0,0,0,["fJ",Bd(YP)],Vq,0,Fq,[],0,0,0,0,["fJ",Bd(AJ9)],P8,0,Fs,[],0,0,0,0,["fJ",Bd(AOC)],Q7,0,DI,[],0,0,0,0,["fJ",Bd(AL3)],TJ,0,Fq,[],0,0,0,
0,["fJ",Bd(Y1)],RL,0,Fs,[],0,0,0,0,["fJ",Bd(AOV)],LR,0,Cd,[],4,0,0,0,["fJ",Bd(AIA),"gj",N(AGN),"fK",P(AJ$)],Le,0,Cd,[],0,0,0,0,["fJ",Bd(ZW),"gj",N(AAk),"fK",P(ATw)],Pt,0,Cd,[],0,0,0,0,["fJ",Bd(AHa),"gj",N(ATt),"fK",P(ZC)],NC,0,Cd,[],4,0,0,0,["fJ",Bd(AM7),"gj",N(ABA),"fK",P(AJj)],VE,0,Cd,[],0,0,0,0,["fJ",Bd(ALu),"gj",N(WV),"fK",P(AFn)],OU,0,Cd,[],0,0,0,0,["fJ",Bd(ABf),"gj",N(AET),"fK",P(Zc)],VA,0,Cq,[],0,0,0,0,["fJ",Bd(ASF),"fK",P(ACJ),"e9",N(AAs),"fo",P(AKZ),"gj",N(AAq)],P2,0,Cq,[],4,0,0,0,["fJ",Bd(ALo),"fK",
P(ABN),"e9",N(AOi),"fo",P(WJ),"gj",N(AS9)],Vr,0,Cd,[],4,0,0,0,["fJ",Bd(AH0),"gj",N(AEt),"fK",P(AIN)],SZ,0,Cd,[],0,0,0,0,["fJ",Bd(ALs),"gj",N(AEf),"fK",P(Yi)],Oj,0,Cd,[],0,0,0,0,["fJ",Bd(AGE),"gj",N(ABF),"fK",P(AEX)],GP,0,Cq,[],0,0,0,0,["fJ",Bd(YT),"e9",N(ANl),"fK",P(Yq),"gj",N(ANT)],Vy,0,GP,[],0,0,0,0,["fJ",Bd(ABO),"fB",Bd(AQC),"f5",BS(Yk),"fn",N(AJX),"fK",P(AQ$)],RD,0,GP,[],0,0,0,0,["fJ",Bd(AI0),"fK",P(AAl)],Pp,0,Bb,[IZ],0,3,0,0,["gx",BS(AD5),"jx",Bd(Z3),"c$",N(AAP),"de",Bu(APC)],R$,0,CD,[],0,0,0,0,["f3",Bu(ACq),
"fB",Bd(ZO),"f5",BS(AEM),"fK",P(ALO),"fn",N(AFV)],Og,0,CD,[],0,0,0,0,["f3",Bu(AI$),"fK",P(AF7)],OQ,0,CD,[],0,0,0,0,["f3",Bu(AOE),"fK",P(AQo)],ATS,0,C,[],4,3,0,0,0,Oe,0,CD,[],0,0,0,0,["f3",Bu(AOI),"fK",P(ATu)],HO,0,Cq,[],0,0,0,0,["e9",N(ALZ),"fJ",Bd(K3),"fB",Bd(AFP),"f5",BS(ACG),"fK",P(APP),"fn",N(X$),"gj",N(AP5)],HU,0,Cq,[],0,0,0,0,["e9",N(AAM),"fJ",Bd(Kf),"fB",Bd(AMA),"f5",BS(AOD),"fK",P(ASD),"fn",N(ACv),"gj",N(AMM)],Ew,0,CD,[],0,0,0,0,["f3",Bu(ANU),"fB",Bd(AKI),"f5",BS(AAK),"fK",P(ARe),"fn",N(ANw)],JD,0,HL,
[],0,0,0,0,["gz",N(AAY),"gB",Bu(ANG)],JE,0,HL,[],0,0,0,0,["gz",N(AOY),"gB",Bu(AR6)]]);
C$([Uj,0,C,[],0,0,0,0,0,Jn,0,By,[],0,0,0,0,["fS",P(AGh)],IN,0,By,[],0,0,0,0,["fS",P(AI2)],T6,0,By,[],0,0,0,0,["fS",P(AOo)],UH,0,By,[],0,0,0,0,["fS",P(AP6)],UM,0,By,[],0,0,0,0,["fS",P(ADo)],Jh,0,By,[],0,0,0,0,["fS",P(ABu)],JA,0,Jh,[],0,0,0,0,["fS",P(AEn)],Wz,0,By,[],0,0,0,0,["fS",P(AFO)],Ka,0,JA,[],0,0,0,0,["fS",P(W2)],R7,0,Ka,[],0,0,0,0,["fS",P(AJN)],Sz,0,By,[],0,0,0,0,["fS",P(ACi)],Qs,0,By,[],0,0,0,0,["fS",P(AJF)],Qd,0,By,[],0,0,0,0,["fS",P(AR_)],UR,0,By,[],0,0,0,0,["fS",P(AKV)],WH,0,By,[],0,0,0,0,["fS",P(Xb)],Ui,
0,By,[],0,0,0,0,["fS",P(AGI)],TX,0,By,[],0,0,0,0,["fS",P(ANY)],Vh,0,By,[],0,0,0,0,["fS",P(ACg)],Pa,0,By,[],0,0,0,0,["fS",P(ACR)],OK,0,By,[],0,0,0,0,["fS",P(ARX)],Up,0,By,[],0,0,0,0,["fS",P(WZ)],UA,0,By,[],0,0,0,0,["fS",P(AIc)],QO,0,By,[],0,0,0,0,["fS",P(AC5)],SE,0,By,[],0,0,0,0,["fS",P(AEY)],Wa,0,By,[],0,0,0,0,["fS",P(AIi)],Ux,0,By,[],0,0,0,0,["fS",P(AQv)],Rw,0,By,[],0,0,0,0,["fS",P(AMZ)],QN,0,By,[],0,0,0,0,["fS",P(AKK)],WD,0,By,[],0,0,0,0,["fS",P(AOd)],Ix,0,By,[],0,0,0,0,["fS",P(AIF)],Vm,0,Ix,[],0,0,0,0,["fS",
P(AKj)],R_,0,Jn,[],0,0,0,0,["fS",P(ZL)],QI,0,IN,[],0,0,0,0,["fS",P(AFD)],Bv,0,By,[],0,0,0,0,["fS",P(AIJ)],QE,0,By,[],0,0,0,0,["fS",P(ARH)],LV,0,By,[],0,0,0,0,["fS",P(AD9)],L1,0,By,[],0,0,0,0,["fS",P(W0)],D4,"NegativeArraySizeException",25,Bw,[],0,3,0,0,0,YD,0,C,[],0,0,0,0,0,ACw,0,C,[],4,0,0,0,0,AAE,0,C,[],4,3,0,0,0,UV,0,C,[],0,3,0,0,0,Iw,0,C,[],0,3,0,0,0,Na,0,C,[],0,3,0,0,0,AFL,0,C,[],4,3,0,0,0,AOp,0,C,[],4,3,0,0,0,QZ,0,DM,[],0,0,0,0,["g4",N(APy),"i0",N(AC9),"iZ",Bu(AKw)],CP,0,BG,[],9,3,0,II,0,FN,0,HE,[],0,
0,0,0,0]);
C$([AS4,0,C,[],3,3,0,0,0,T8,0,C,[Cy],3,3,0,0,0,QC,0,C,[T8,Cy],1,3,0,0,["jN",Bu(ARO),"jO",N(AK9),"jP",Bu(AAN),"jQ",Bd(AHA),"jR",Bd(AO7)],MK,0,C,[Eu],0,0,0,0,["jz",N(AJi)],Fw,0,BG,[],12,3,0,0,0,AGC,0,C,[],0,3,0,0,0,RZ,0,C,[],3,3,0,0,0,HH,0,MX,[RZ],0,3,0,0,["T",P(Zl)],W,"StringIndexOutOfBoundsException",25,H,[],0,3,0,0,0,Vt,0,Bq,[],0,0,0,0,["gg",N(ADx)],Vs,0,Bq,[],0,0,0,0,["gg",N(XN)],PE,0,Bq,[],0,0,0,0,["gg",N(AIs),"T",P(AFe)],PL,0,Bq,[],0,0,0,0,["gg",N(ANW)],PI,0,Bq,[],0,0,0,0,["gg",N(AOH)],PJ,0,Bq,[],0,0,0,
0,["gg",N(AI9)],PP,0,Bq,[],0,0,0,0,["gg",N(ACV)],PQ,0,Bq,[],0,0,0,0,["gg",N(WM)],PN,0,Bq,[],0,0,0,0,["gg",N(AFq)],PO,0,Bq,[],0,0,0,0,["gg",N(AI_)],PR,0,Bq,[],0,0,0,0,["gg",N(AQF)],PS,0,Bq,[],0,0,0,0,["gg",N(ABY)],PD,0,Bq,[],0,0,0,0,["gg",N(ATT)],P$,0,Bq,[],0,0,0,0,["gg",N(AFA)],PB,0,Bq,[],0,0,0,0,["gg",N(ABV)],PC,0,Bq,[],0,0,0,0,["gg",N(AEq)],PH,0,Bq,[],0,0,0,0,["gg",N(AHf)],PA,0,Bq,[],0,0,0,0,["gg",N(AQd)],PF,0,Bq,[],0,0,0,0,["gg",N(Z9)],PG,0,Bq,[],0,0,0,0,["gg",N(AMI)],IK,0,C,[],0,0,0,0,0,GD,0,C,[GG],0,3,
0,0,0,BK,"IllegalStateException",25,Bw,[],0,3,0,0,0,IU,"IllegalMonitorStateException",25,Bw,[],0,3,0,0,0,AN1,0,C,[],0,3,0,0,0,AEu,0,C,[],4,3,0,0,0,X8,0,C,[Cy],1,3,0,0,0,Ga,0,C,[],3,3,0,0,0,Wk,0,C,[Ga],0,3,0,0,["c4",P(AQH)],Va,0,CP,[],12,0,0,0,0,Vb,0,CP,[],12,0,0,0,0,Vf,0,CP,[],12,0,0,0,0,Vg,0,CP,[],12,0,0,0,0,Vd,0,CP,[],12,0,0,0,0,Ve,0,CP,[],12,0,0,0,0,U$,0,CP,[],12,0,0,0,0,U_,0,CP,[],12,0,0,0,0,U8,0,CP,[],12,0,0,0,0,OO,0,C,[],3,3,0,0,0,Sp,0,C,[OO],0,3,0,0,0,Rb,0,C,[Cy],4,3,0,0,0]);
C$([RY,0,C,[],3,3,0,0,0,RE,0,C,[RY],0,0,0,0,["e",N(AHI),"g0",N(ASv)],S3,0,C,[Ga],0,3,0,0,0,OL,0,Gt,[],0,0,0,0,["fB",Bd(AEe),"f5",BS(ATA),"fL",P(ABy)],S4,0,Bq,[],0,0,0,0,["gg",N(AQ2)],Op,0,Bq,[],0,0,0,0,["gg",N(ZE)],So,0,Bq,[],0,0,0,0,["gg",N(Y0)],Sn,0,Bq,[],0,0,0,0,["gg",N(AD6)],VL,0,Bq,[],0,0,0,0,["gg",N(AGU)],P3,0,Bq,[],0,0,0,0,["gg",N(AQ6)],Pl,0,Bq,[],0,0,0,0,["gg",N(ALN)],Rp,0,Bq,[],0,0,0,0,["gg",N(AN7)],Ol,0,Bq,[],0,0,0,0,["gg",N(AS3)],Oo,0,Bq,[],0,0,0,0,["gg",N(ACD)],Pe,0,Bq,[],0,0,0,0,["gg",N(ARz)],Qk,
0,Bq,[],0,0,0,0,["gg",N(AJB)],Qp,0,Bq,[],0,0,0,0,["gg",N(ANj)],Tw,0,Bq,[],0,0,0,0,["gg",N(AQG)],SM,0,Bq,[],0,0,0,0,["gg",N(ASs)],OB,0,Bq,[],0,0,0,0,["gg",N(ACh)],J2,0,Bq,[],0,0,0,0,["gg",N(ALT)],Sd,0,J2,[],0,0,0,0,["gg",N(APm)],Y2,0,C,[H0],0,0,0,0,0,G8,0,GD,[],0,0,0,0,["c4",P(AL7)],OC,0,C,[],32,0,0,MG,0,Vn,0,C,[Cy,Fa],1,3,0,0,["jS",Bu(AID),"jT",Bu(AJE),"jU",Bd(Xp),"jV",N(XD),"jW",Bd(AFu)],G_,0,C,[Cy],3,3,0,0,0,Km,0,C,[G_],0,0,0,0,["jz",N(AG4)],AKb,0,C,[],0,3,0,0,0,CB,"Array$ArrayIterator",8,C,[H0,DL],0,3,0,
0,0,C9,0,C,[DL],0,3,0,0,0,Iu,0,C,[],4,3,0,0,0,OE,0,C,[GG],0,0,0,0,0,Wn,0,C,[],3,3,0,0,0,Td,0,C,[Wn],3,3,0,0,0,T5,0,C,[],3,3,0,0,0,Hz,0,C,[Td,T5],1,3,0,0,0,Iz,0,Hz,[],0,3,0,0,0,IT,0,Iz,[],0,3,0,0,0,Ht,0,IT,[],1,3,0,0,0,CJ,0,Ht,[],0,3,0,0,["g3",N(AHh)],G9,0,C,[G_],0,0,0,0,["jz",N(ALc)],ZS,0,C,[],0,0,0,0,0,Ci,0,Hz,[],0,3,0,0,0,Ks,0,C,[Ds],1,3,0,0,0,NV,0,Ks,[],0,3,0,0,0,JF,"IllegalCharsetNameException",24,Bm,[],0,3,0,0,0,K8,0,C,[CZ],3,3,0,0,0,H8,0,C,[K8],0,3,0,H6,0,RS,0,C,[],3,3,0,0,0]);
C$([KV,0,C,[RS],1,3,0,0,0,TK,0,KV,[],0,3,0,0,0,Wx,"NoSuchElementException",21,Bw,[],0,3,0,0,0,R,"GdxRuntimeException",8,Bw,[],0,3,0,0,0,ACz,0,C,[],4,3,0,0,0,En,0,C,[Ga],0,3,0,0,["c4",P(Ze)],ADM,0,C,[],4,3,0,0,0,We,0,C,[],32,0,0,NB,0,Nx,"ConcurrentModificationException",21,Bw,[],0,3,0,0,0,NZ,0,C,[],1,3,0,0,0,SY,0,NZ,[],0,3,0,0,0,Uv,"ActorValvula",19,CI,[CZ],0,3,0,0,["bO",Bu(X1),"be",N(ADP)],TV,"ActorFondo",19,CI,[CZ],0,3,0,0,["bO",Bu(ACu)],RJ,"ActorPrueba",19,CI,[CZ],0,3,0,0,["bO",Bu(AK4)],T3,0,B4,[],0,0,0,0,
0,FK,0,Ht,[],0,3,0,0,["g3",N(AEW)],ACN,0,Ex,[Ds],0,3,0,0,0,AMe,0,C,[],0,0,0,0,0,AM$,0,C,[],4,3,0,0,0,MP,0,C,[],0,3,0,0,0,GY,0,BG,[],12,3,0,0,0,Jm,0,C,[CZ],0,3,0,0,0,NG,0,C,[],1,3,0,0,0,QJ,0,NG,[],0,3,0,0,0,No,0,C,[],3,3,0,0,0,Vu,0,C,[],3,3,0,0,0,Pn,0,C,[Ga,No,Vu],0,0,0,0,["c4",P(AM_)],Pu,0,C,[DL,Ds],4,3,0,0,0,Ma,0,C,[CZ],0,3,0,Im,0,Ng,0,Bf,[],0,3,0,0,0,K$,0,Bf,[],0,3,0,0,0,UG,0,C,[],0,3,0,0,0,WB,0,C,[],32,0,0,MM,0,Jt,0,C,[CZ],3,3,0,0,0,I5,0,C,[Jt],0,3,0,0,["i9",P(AES),"i$",P(ANL),"he",Bd(ALg),"hS",Bu(ADG),"h1",
Bu(Zn)],Kw,0,C,[CZ],3,3,0,0,0,HG,0,C,[Kw],0,3,0,0,["hU",P(AF0),"hY",P(X9),"g9",Bd(AKN),"hf",N(Y7),"hb",P(ARx),"h2",P(AN4)],P4,0,C,[Jt],0,3,0,0,["i9",P(AAZ),"i$",P(AB9),"he",Bd(ZU),"hS",Bu(AKy),"h1",Bu(ADH)],Sk,0,C,[Kw],0,3,0,0,["hU",P(ANc),"hY",P(Xf),"g9",Bd(AGH),"hf",N(AP9),"hb",P(AHB),"h2",P(AAB)],Lt,0,C,[Jt],0,3,0,Lz,["i9",P(ZB),"i$",P(AKE),"he",Bd(ZP),"hS",Bu(APL),"h1",Bu(ACT)],Pi,0,I5,[],0,3,0,0,0,Qu,0,HG,[],0,3,0,0,0,Ul,0,C,[DL],0,3,0,0,0,ANs,0,C,[],4,3,0,0,0,EP,0,C,[],1,3,0,0,0,Em,0,EP,[Ds],1,3,0,0,["cl",
N(AMu),"ck",N(AR3)],Hg,0,EP,[Ds],1,3,0,0,0,Hf,0,EP,[Ds],1,3,0,0,0,E4,0,EP,[Ds],1,3,0,0,["cl",N(AMl),"ck",N(Yl)],Hv,0,C,[],4,3,0,0,0]);
C$([AGu,0,C,[],0,3,0,0,0,Ei,0,C,[],3,3,0,0,0,C1,0,E4,[Ei],0,0,0,0,["er",P(ATO)],AJ3,0,C,[Cy],1,3,0,0,0,Tg,0,C,[],3,3,0,0,0,K_,0,C,[Tg],0,3,0,0,0,FM,0,C,[CZ],0,3,0,GC,0,Hy,0,Hf,[],1,0,0,0,0,Gm,0,Hy,[],0,0,0,0,["iy",N(AK_),"iL",Bu(AIU),"iB",P(W6)],Ho,0,Em,[],1,0,0,0,0,Id,0,Ho,[],0,0,0,0,["iM",N(AMJ),"iC",Bu(ALq),"iB",P(ALL)],JO,0,BG,[],12,3,0,0,0,Ir,0,BG,[],12,3,0,0,0,Ky,0,C,[],0,3,0,0,0,Vk,0,Ky,[],0,3,0,0,0,L7,0,C,[CZ],0,3,0,0,0,Ic,0,Hg,[],1,0,0,0,0,JU,0,Ic,[],0,0,0,0,["iR",N(AEy),"iD",Bu(AG$),"iB",P(ACe)],AK0,
0,C,[Cy],1,3,0,0,0,EH,0,BG,[],12,3,0,0,0,H9,0,BG,[],12,3,0,0,0,QX,0,C,[K2],1,3,0,0,["jE",N(ATc),"jX",P(AA7)],H3,0,Hy,[Ei],1,0,0,0,["iB",P(AIm)],Ph,0,H3,[],0,0,0,0,["iy",N(AEp),"iL",Bu(W4)],S9,0,H3,[],0,0,0,0,["iy",N(APJ),"iL",Bu(Zo)],Hq,0,Ho,[Ei],1,0,0,0,["iB",P(AL1),"er",P(ANq)],OZ,0,Hq,[],0,0,0,0,["iM",N(AIv),"iC",Bu(ANk)],Rx,0,Hq,[],0,0,0,0,["iM",N(Xg),"iC",Bu(AIj)],Hd,0,Ic,[Ei],1,0,0,0,["iB",P(AFT),"er",P(AN2)],ON,0,Hd,[],0,0,0,0,["iR",N(ABX),"iD",Bu(AA2)],QG,0,Hd,[],0,0,0,0,["iR",N(AKW),"iD",Bu(ABZ)],LA,
0,Bw,[],0,3,0,0,0,F1,"ReadOnlyBufferException",23,LA,[],0,3,0,0,0,Ns,"BufferUnderflowException",23,Bw,[],0,3,0,0,0,F2,0,BG,[],12,3,0,0,0,ER,0,BG,[],12,3,0,0,0,ADa,0,C,[],4,3,0,0,0,Jg,0,BG,[],12,0,0,0,0,DE,0,BG,[],12,3,0,0,0,AM5,0,C,[Ga,No],3,0,0,0,0,IJ,0,BG,[],12,3,0,0,0,AL4,0,C,[],0,3,0,0,0,Ts,0,C,[],32,0,0,LI,0,IY,"BufferOverflowException",23,Bw,[],0,3,0,0,0,QP,"ActorGas",19,CI,[CZ],0,3,0,0,["bO",Bu(AMY),"be",N(AOu)],UN,0,C,[],0,3,0,NN,0,ADe,0,C,[],0,3,0,0,0,M9,0,C,[G_],0,0,0,0,["jz",N(AF9)],Ob,"VerificaAccion",
19,BP,[],0,3,0,0,["bu",N(AJO)],Pg,0,C,[],0,3,0,0,0]);
C$([JB,0,BG,[],12,3,0,0,0,N9,"Predicate",8,C,[],3,3,0,0,0,Uw,0,C,[CZ],0,3,0,0,0,MI,"InstantiationException",25,Ez,[],0,3,0,0,0,Kd,"IllegalAccessException",25,Ez,[],0,3,0,0,0,OT,0,Ez,[],0,3,0,0,0,Qb,0,C,[],3,3,0,0,0,LM,0,C,[Qb],0,3,0,0,0,Sj,0,C,[IZ,J1],0,3,0,0,0,He,0,BG,[],12,3,0,0,0,AEx,0,C,[],4,3,0,0,0,HF,0,C,[B_,Ds],0,3,0,0,0,SP,0,C,[],0,3,0,0,0,Jd,0,C,[],1,3,0,NK,0,LK,0,Jd,[],0,3,0,0,0,Ij,0,BG,[],12,3,0,0,0,Q0,0,DM,[],0,0,0,0,0,Qf,0,C,[],3,3,0,0,0,LL,0,C,[Qf],0,3,0,0,0,Vo,0,C,[K8],3,3,0,0,0,Hj,0,C,[],0,0,
0,M7,["jd",P(ADf),"jk",P(AHF),"jj",P(AKX),"jf",N(AHN),"jc",P(AHY)],EA,0,C,[],1,0,0,0,0,HI,0,EA,[],1,0,0,0,0,R2,0,HI,[],0,0,0,0,["hK",function(b,c,d,e,f,g,h,i,j,k){AGY(this,b,c,d,e,f,g,h,i,j,k);}],Tz,0,Hj,[],0,0,0,0,["jd",P(ASd),"jk",P(ATP),"jj",P(ALW),"jc",P(Gn),"jf",N(Od)],Sw,0,HI,[],0,0,0,0,["hK",function(b,c,d,e,f,g,h,i,j,k){APU(this,b,c,d,e,f,g,h,i,j,k);}],R0,0,EA,[],0,0,0,0,0,T0,0,EA,[],0,0,0,0,0,RT,0,EA,[],0,0,0,0,0,Mj,0,C,[],0,3,0,0,0,QY,0,DM,[],0,0,0,0,["g4",N(ZA),"i0",N(Xn),"iZ",Bu(AJk)],OI,0,C,[],
32,0,0,Nm,0,ARK,0,C,[],0,3,0,0,0,F5,0,GD,[],0,0,0,0,["c4",P(AAR)],OG,0,DM,[],0,0,0,0,["g4",N(AAV),"i0",N(AJ7),"iZ",Bu(Zj)],XY,0,C,[],0,0,0,0,0,OH,0,DM,[],0,0,0,0,["g4",N(AEI),"i0",N(X0),"iZ",Bu(AFz)],KG,0,C,[G_],0,0,0,0,["jz",N(ASl)],ABo,0,C,[],0,3,0,0,0,Lb,0,C,[Eu],0,0,0,0,["jz",N(ADy)]]);
let AYQ=D$(Cl),AYM=D$(KL),AYN=D$(AYl),AYO=D$(AYm),AYP=D$(BY),AYL=D$(AJ0),AYR=D$(CF);AVh(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
"Unable to create new instance: ","enabled","disabled","childrenOnly","Actor: ","object cannot be null.","The event target cannot be null.","begin must be called first.","autoShapeType must be enabled.","|  ","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Action",", ","none","all","table","cell","actor","(",",",")","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","texture cannot be null.","This TextureData implementation does not upload data itself",
"Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","[]","","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for integer type","The value is too big for int type: ","Illegal radix: ","java.runtime.name","userAgent","os.name",
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
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","EMI valvulas.get(0)","EMI fondo.getName() : ","XNVCerrada.png",
"XNVAbierta.png","EMI EN ACTOR valvulas.get(0)","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","begin must be called before end.",
"data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","The last short in src ","Index ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\","Nearest",
"Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop",
"SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","sphere-23.png","Asset loaded: ","Logical","Pixels","Call end() before beginning a new shape batch.","Must call begin(ShapeType.",").",") or begin(ShapeType.","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n",
"uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *","uniform sampler2D u_sampler","Point","Line","Filled","POINTY","SMOOTH",
"The texture region is null. Please set a texture region first (e.g. in the constructor or by calling setTextureRegion(TextureRegion region))","data:",";base64,","error"]);
I.prototype.toString=function(){return Bx(this);};
I.prototype.valueOf=I.prototype.toString;C.prototype.toString=function(){return Bx(PV(this));};
C.prototype.__teavm_class__=function(){return AUX(this);};
ARI.main=AWf(AGT);
ARI.main.javaException=AVN;
let Bt=Symbol('jsoClass');
(function(){var c;c=Js.prototype;c[Bt]=true;c.onAnimationFrame=c.jy;c=Mm.prototype;c[Bt]=true;c.handleEvent=c.jz;c=Kj.prototype;c[Bt]=true;c.handleEvent=c.jz;c=Kk.prototype;c[Bt]=true;c.handleEvent=c.jz;c=MO.prototype;c[Bt]=true;c.fullscreenChanged=c.jA;c=Mg.prototype;c[Bt]=true;c.denied=c.jD;c.prompt=c.jC;c.granted=c.jB;c=OY.prototype;c.removeEventListener=c.jH;c.dispatchEvent=c.jI;c.get=c.jE;c.addEventListener=c.jK;Object.defineProperty(c,"length",{get:c.jJ});c=Lx.prototype;c[Bt]=true;c.handleEvent=c.jz;c
=Ly.prototype;c[Bt]=true;c.handleEvent=c.jz;c=Lw.prototype;c[Bt]=true;c.handleEvent=c.jz;c=Kt.prototype;c[Bt]=true;c.unlockFunction=c.jL;c=Mq.prototype;c[Bt]=true;c.accept=c.jM;c=Mp.prototype;c[Bt]=true;c.accept=c.jM;c=QC.prototype;c.removeEventListener=c.jR;c.dispatchEvent=c.jO;c.addEventListener=c.jQ;c=MK.prototype;c[Bt]=true;c.handleEvent=c.jz;c=Rb.prototype;c[Bt]=true;c=Vn.prototype;c.removeEventListener=c.jU;c.dispatchEvent=c.jV;c.addEventListener=c.jW;c=Km.prototype;c[Bt]=true;c.handleEvent=c.jz;c=G9.prototype;c[Bt]
=true;c.handleEvent=c.jz;c=QX.prototype;c.get=c.jE;Object.defineProperty(c,"length",{get:c.jX});c=M9.prototype;c[Bt]=true;c.handleEvent=c.jz;c=KG.prototype;c[Bt]=true;c.handleEvent=c.jz;c=Lb.prototype;c[Bt]=true;c.handleEvent=c.jz;})();
}));
