"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(AQb){let AVU=2463534242,D8=()=>{let x=AVU;x^=x<<13;x^=x>>>17;x^=x<<5;AVU=x;return x;},O=f=>function(){return f(this);},M=f=>function(p1){return f(this,p1);},Bm=f=>function(p1,p2){return f(this,p1,p2);},Ba=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BI=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AUK=f=>function(){let args=Array.prototype.slice.apply(arguments);AVV(function(){f.apply(this,args);});},AUa=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=S(Fp(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=W(args[i]);}AVV(()=>{f.call(null,javaArgs);},callback);},BG=target=>target.$clinit=()=>{},AS_=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},E=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=Fp();}return function(){superclass.call(this);};},V=cls=>AUv(cls),Fp=()=>C,Wc=()=>{{return ASi();}},Jw=t=>{{return ALz(t);}};let AVW=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AVX=(name,binaryName)=>{let cls
=AVW();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Ce=AVX("boolean","Z"),J6=AVX("char","C"),AVY=AVX("byte","B"),AVZ=AVX("short","S"),BM=AVX("int","I"),AIG=AVX("long","J"),Eh=AVX("float","F"),ACg=AVX("double","D"),Br=AVX("void","V");let AV0=new ArrayBuffer(16),AV1=new DataView(AV0),AV2=new Float32Array(AV0),AV3=new Float64Array(AV0),AV4=new Int32Array(AV0),
AVI;if(typeof BigInt!=='function'){AVI=n=>{AV1.setFloat64(0,n,true);return new AV5(AV1.getInt32(0,true),AV1.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AVI=n=>{AV1.setFloat64(0,n,true);let lo=AV1.getInt32(0,true),hi=AV1.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AV6=new BigInt64Array(AV0);AVI=n=>{AV3[0]=n;return AV6[0];};}let PY=n=>{AV2[0]=n;return AV4[0];},KC=n=>{AV4[0]=n;return AV2[0];},Cf=(a,b)=>a>b?1:a<b? -1:a===b?0:1,C$
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},DM=(a,b)=>(a>>>0)/(b>>>0)>>>0,AT8=(a,b)=>(a>>>0)%(b>>>0)>>>0,EA=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AV5(lo,hi){this.lo=lo|0;this.hi=hi|0;}AV5.prototype.__teavm_class__=()=>{return "long";};let AV7=a=>(a.hi&0x80000000)===0,AV8=a=>(a.hi&0x80000000)!==0,AV9=1<<18,B6,D,R,DL,ATX,Be,AV$;if(typeof BigInt!=="function"){AV5.prototype.toString=function(){let result=[],n=this,
positive=AV7(n);if(!positive){n=AUl(n);}let radix=new AV5(10,0);do {let divRem=AV$(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AV5.prototype.valueOf=function(){return ATX(this);};B6=new AV5(0,0);R=val=>new AV5(val, -(val<0)|0);DL=val=>val>=0?new AV5(val|0,val/0x100000000|0):AUl(new AV5( -val|0, -val/0x100000000|0));D=(lo,hi)=>new AV5(lo,hi);ATX=val=>0x100000000*val.hi+(val.lo>>>0);Be=
val=>val.lo;}else {B6=BigInt(0);D=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));R=val=>BigInt.asIntN(64,BigInt(val|0));DL=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));ATX=val=>Number(val);Be=val=>Number(BigInt.asIntN(32,val))|0;}let DK,ACs,ABF,ATe,ATj,AB6,AUq,CR,AFh,AV_,Y,Mb,WF,AUs,AUl,CQ,ACr,HF,Fe,ATW,Bb;if(typeof BigInt!=='function'){DK=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ACs=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;ABF=(a,b)=>{if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};ATe=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};ATj=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};AB6=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo
&1)<=(b.lo&1);};CR=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return DL(a.lo+b.lo);}else if(AWa.abs(a.hi)<AV9&&AWa.abs(b.hi)<AV9){return DL(ATX(a)+ATX(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AV5(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AV_=a=>{let lo
=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AV5(lo,hi);};AUl=a=>AV_(new AV5(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));AFh=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return DL(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AV5(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF
|(hihi&0xFFFF)<<16);};AUq=(a,b)=>{let r=EA(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Y=(a,b)=>{let positive=AV8(a)===AV8(b);if(AV8(a)){a=AUl(a);}if(AV8(b)){b=AUl(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)
+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AV5(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:AUl(result);};Mb=(a,b)=>{if(AWa.abs(a.hi)<AV9&&AWa.abs(b.hi)<AV9){return DL(ATX(a)/ATX(b));}return (AV$(a,b))[0];};AUs=(a,b)=>
{if(a.hi>=0&&a.hi<AV9&&b.hi>=0&&b.hi<AV9){return DL(ATX(a)/ATX(b));}return (AWb(a,b))[0];};WF=(a,b)=>{if(AWa.abs(a.hi)<AV9&&AWa.abs(b.hi)<AV9){return DL(ATX(a)%ATX(b));}return (AV$(a,b))[1];};AV$=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AV8(a)===AV8(b);if(AV8(a)){a=AUl(a);}if(AV8(b)){b=AUl(b);}a=new AWc(a.lo,a.hi,0);b=new AWc(b.lo,b.hi,0);let q=AWd(a,b);a=new AV5(a.lo,a.hi);q=new AV5(q.lo,q.hi);return positive?[q,a]:[AUl(q),AUl(a)];};let AWb=(a,b)=>{if(b.lo===0&&b.hi===
0){throw new Error("Division by zero");}a=new AWc(a.lo,a.hi,0);b=new AWc(b.lo,b.hi,0);let q=AWd(a,b);a=new AV5(a.lo,a.hi);q=new AV5(q.lo,q.hi);return [q,a];};CQ=(a,b)=>new AV5(a.lo&b.lo,a.hi&b.hi);ACr=(a,b)=>new AV5(a.lo|b.lo,a.hi|b.hi);HF=(a,b)=>new AV5(a.lo^b.lo,a.hi^b.hi);Fe=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AV5(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AV5(0,a.lo);}else {return new AV5(0,a.lo<<b -32);}};ATW=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AV5(a.lo
>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AV5(a.hi,a.hi>>31);}else {return new AV5(a.hi>>b -32,a.hi>>31);}};Bb=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AV5(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AV5(a.hi,0);}else {return new AV5(a.hi>>>b -32,0);}};function AWc(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AWe=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>
16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AWf=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&
0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AWg=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AWh=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi
>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AWi=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AWj=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi
=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AWk=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AWl=a=>new AWc(a.lo,a.hi,a.sup),AWd=(a,b)=>{let bits=b.hi!==0?AWi(b.hi):AWi(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits%16;AWj(b,bits);AWj(a,dividentBits);let q
=new AWc(0,0,0);while(sz-->0){AWj(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AWl(b);AWe(t,digit);if(AWh(t,a)>=0){while(AWh(t,a)>0){AWf(t,b); --digit;}}else {while(true){let nextT=AWl(t);AWg(nextT,b);if(AWh(nextT,a)>0){break;}t=nextT;++digit;}}AWf(a,t);q.lo|=digit;AWj(a,16);}AWk(a,bits+16);return q;};}else {DK=(a,b)=>a===b;ACs=(a,b)=>a!==b;ABF=(a,b)=>a>b;ATe=(a,b)=>a>=b;ATj=(a,b)=>a<b;AB6=(a,b)=>a<=b;CR=(a,b)=>BigInt.asIntN(64,a+b);AV_=a=>BigInt.asIntN(64,a+1);AUl=a=>
BigInt.asIntN(64, -a);AFh=(a,b)=>BigInt.asIntN(64,a -b);AUq=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Y=(a,b)=>BigInt.asIntN(64,a*b);Mb=(a,b)=>BigInt.asIntN(64,a/b);AUs=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));WF=(a,b)=>BigInt.asIntN(64,a%b);CQ=(a,b)=>BigInt.asIntN(64,a&b);ACr=(a,b)=>BigInt.asIntN(64,a|b);HF=(a,b)=>BigInt.asIntN(64,a^b);Fe=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));ATW=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));Bb=(a,b)=>BigInt.asIntN(64,
BigInt.asUintN(64,a)>>BigInt(b&63));}let S=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (DN(cls))(data);},P=(cls,data)=>new (DN(cls))(data),ZS;if(typeof BigInt64Array!=='function'){ZS=init=>new AWm(init);}else {ZS=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AWm(buffer);};}let G=sz=>new AWn(new Uint16Array(sz)),AE5=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AWn(buffer);},BE=sz=>new AWo(new Int8Array(sz)),E8=sz=>new AWp(new Int16Array(sz)),
AVK=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AWp(buffer);},U=sz=>new AWq(new Int32Array(sz)),H6=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AWq(buffer);},Jt=sz=>new AWr(new Int8Array(sz)),B_=sz=>new AWs(new Float32Array(sz)),DN=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(Fp()).call(this);this.data=data;}JavaArray.prototype=Object.create((Fp()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (DN(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[Fp()],primitive:false,superclass:Fp(),name:name,binaryName
:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AWt,ATp=strings=>{AWu();AWt=new Array(strings.length);for(let i=0;i<strings.length;++i){AWt[i]=AWv(W(strings[i]));}},A=index=>AWt[index],K=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,array.subarray(i,next));}return result;},
ASX=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},W=str=>str===null?null:SR(str),Bt=str=>str===null?null:str.jv,AWu=()=>(()=>{})(),AWv;{AWv=str=>str;}let BY=(obj,cls)=>obj instanceof Fp()&&!!obj.constructor.$meta&&AWw(obj.constructor,cls),AWw=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AWw(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+
1|0){if(AWw(supertypes[i],to)){return true;}}return false;};let B=ex=>{throw AOo(ex);},AWx=Symbol("javaException"),AOo=ex=>{let err=ex.$jsException;if(!err){let javaCause=AWy(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AWz("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AWx]=ex;ex.$jsException=err;AWA(err,ex);}return err;},AWA=(err,ex)=>{if(typeof AWB==="function"&&err.stack)
{let stack=AWB(err.stack),javaStack=S(AWC(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AWD(W(element.className),W(element.methodName),W(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AWE(ex,javaStack);}}},AWz;if(typeof AWF==='object'){let AWG=Symbol("defaultMessage");AWz=function AWz(message,cause){let self=Reflect.construct(Error,[void 0,cause],AWz);Object.setPrototypeOf(self,AWz.prototype);self[AWG]
=message;return self;};AWz.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AWz},message:{get(){try {let javaException=this[AWx];if(typeof javaException==='object'){let javaMessage=AWH(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AWG];}catch(AWI){return "Exception occurred trying to extract Java exception message: "+AWI;}}}});}else {AWz=Error;}let ATP=e=>e instanceof Error&&typeof e[AWx]==='object'
?e[AWx]:null,Bs=err=>{let ex=err[AWx];if(!ex){ex=AWJ(W("(JavaScript) "+err.toString()));err[AWx]=ex;ex.$jsException=err;AWA(err,ex);}return ex;},AWJ=message=>AS8(message),AWH=t=>AMQ(t),AWy=t=>AUV(t),AWC=()=>Fp(),AWD=(className,methodName,fileName,lineNumber)=>{{return null;}},AWE=(e,stack)=>{};let AWK=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=next+1;}buffer+=msg.substring(index);};},
BT=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AWK(msg=>console.info(msg)):()=>{},Dk=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AWK(msg=>console.error(msg)):()=>{};let AWL=null,ASA=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AWL=packages;},CW=data=>{let packages=AWL,i=0;while(i<data.length)
{let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive
=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=
clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AWM(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AWM.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AWM.prototype.s
=AWM.prototype.push;AWM.prototype.pop=function(){return this.stack.pop();};AWM.prototype.l=AWM.prototype.pop;AWM.prototype.isResuming=function(){return this.status===2;};AWM.prototype.isSuspending=function(){return this.status===1;};AWM.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AWM.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(AWN!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback
=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AWM.prototype.resume=function(){if(AWN!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AWM.prototype.run=function(){AWN=this;let result;try {result=this.runner();}catch(AWI){result=AWI;}finally {AWN=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let E$
=()=>{let thread=C2();return thread!=null&&thread.isSuspending();},Fa=()=>{let thread=C2();return thread!=null&&thread.isResuming();},AVV=(runner,callback)=>(new AWM(runner)).start(callback),AWN=null,C2=()=>AWN,E3=()=>{throw new Error("Invalid recorded state");};function C(){this.ly=null;this.$id$=0;}
let Ft=b=>{let c;if(b.ly===null){c=new H$;c.lu=BP;b.ly=c;}b=b.ly;c=b.lu;if(c===null)b.lu=BP;else if(c!==BP){c=new BX;c.jx=1;c.jy=1;c.jz=A(0);B(c);}b.mb=b.mb+1|0;},
Ds=b=>{let c,d;if(!GS(b)){c=b.ly;if(c.lu===BP){d=c.mb-1|0;c.mb=d;if(!d)c.lu=null;GS(b);return;}}b=new Ii;b.jx=1;b.jy=1;B(b);},
AUy=b=>{AEr(b,1);},
AEr=(b,c)=>{let d,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.ly===null){d=new H$;d.lu=BP;b.ly=d;}d=b.ly;if(d.lu===null)d.lu=BP;if(d.lu===BP){d.mb=d.mb+c|0;return;}$p=1;case 1:Xm(b,c);if(E$()){break _;}return;default:E3();}}C2().s(b,c,d,$p);},
AG_=(b,c,d)=>{let e,f,g;e=BP;f=b.ly;if(f===null){f=new H$;f.lu=e;b.ly=f;if(e!==e)BP=e;BP.nW=D2();b=b.ly;b.mb=b.mb+c|0;b=null;d.oO.e(b);return;}if(f.lu===null){f.lu=e;if(e!==e)BP=e;BP.nW=D2();b=b.ly;b.mb=b.mb+c|0;b=null;d.oO.e(b);return;}if(f.nP===null)f.nP=AGq();f=f.nP;g=new R4;g.uG=e;g.uH=b;g.uE=c;g.uF=d;d=g;f.push(d);},
AUC=b=>{WN(b,1);},
WN=(b,c)=>{let d;if(!GS(b)){d=b.ly;if(d.lu===BP){c=d.mb-c|0;d.mb=c;if(c>0)return;d.lu=null;d=d.nP;if(d!==null&&!(d.length?0:1)){d=new Vm;d.u3=b;Mr(d,0);}else GS(b);return;}}b=new Ii;b.jx=1;b.jy=1;B(b);},
ANy=b=>{let c,d,e;if(!GS(b)){c=b.ly;if(c.lu===null){b=c.nP;if(b!==null&&!(b.length?0:1)){b=c.nP.shift();Bv();if(b!==null&&!(b instanceof Fp()))b=B4(b);d=b;c.nP=null;b=d.uG;c=d.uH;e=d.uE;d=d.uF;if(BP!==b)BP=b;BP.nW=D2();c=c.ly;c.lu=b;c.mb=c.mb+e|0;b=null;d.oO.e(b);}return;}}},
GS=a=>{let b,c;b=a.ly;if(b===null)return 1;a:{if(b.lu===null){c=b.nP;if(!(c!==null&&!(c.length?0:1))){b=b.tm;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.ly=null;return 1;},
BA=a=>{return;},
ATc=()=>{let a=new C();BA(a);return a;},
AUz=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BJ;c.jO=b;d=c;b.classObject=d;}}return c;},
ABc=a=>{let b,c;b=a;if(!b.$id$){c=D8();b.$id$=c;}return a.$id$;},
AId=(a,b)=>{return a!==b?0:1;},
OX=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=D8();b.$id$=c;}d=Bc(a.$id$,4);b=new J;b.jw=G(16);F(b,b.ju,A(1));e=b.ju;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jw;g=f.data;h=b.ju;i=g.length;if(h>=0&&h<=(i-0|0)){c.jv=K(f.data,0,h);return c;}b=new I;b.jx=1;b.jy=1;B(b);},
AT5=a=>{let b,c,d;if(!BY(a,EU)&&a.constructor.$meta.item===null){b=new TO;b.jx=1;b.jy=1;B(b);}b=Ws(a);c=b;d=D8();c.$id$=d;return b;},
MV=a=>{let b,c;b=a.ly;if(!(b!==null&&b.lu===BP?1:0)){b=new Ii;b.jx=1;b.jy=1;B(b);}b=b.tm;if(b===null)return;while(!(b.length?0:1)){c=b.shift();Bv();if(c!==null&&!(c instanceof Fp()))c=B4(c);c=c;if(!c.m())Mr(c,0);}a.ly.tm=null;},
Xm=(b,c)=>{let thread=C2();let javaThread=Wc();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Jw(javaThread);thread.resume();};callback.gU=e=>{thread.attribute=AOo(e);Jw(javaThread);thread.resume();};callback=Ry(callback);thread.suspend(()=>{try {AG_(b,c,callback);;}catch(M_){callback.gU(M_);}});return null;};
let AOT=E();
let AFH=b=>{let c,d,e,f;U0=G(0);c=new H;c.jv="";Lw=c;Nw=new M1;ANc();c=new Bj;c.kI=1.0;c.kH=0.0;N2=c;c=new Bj;c.kI=0.0;c.kH=1.0;N1=c;c=new Bj;c.kI=0.0;c.kH=0.0;Qq=c;KK=new Bj;Sa=new Bj;XT();S0=new Bj;S4=new Bj;AAc();RC=new Bj;RP=new Bj;c=new D4;c.nu=0.0;c.nr=0.0;c.ns=0.0;c.nt=0.0;QF=c;c=new D4;c.nu=0.0;c.nr=0.0;c.ns=0.0;c.nt=0.0;QE=c;PH=new ER;Sq=new ER;Uk=0.10000000149011612;ARl();Qi=V(Eh);Wb();Ox=S(IK,111);SN=new Bj;SX=new Bj;PO=new C;AFM();NB=V(BM);ACE();O5=V(AIG);NA=V(J6);S3=S(L3,128);Xp();AJg();P$=new Bj;P_
=new Bj;Qa=new Bj;Sd=0.4000000059604645;Nz=0.10000000149011612;TW=new Bj;AK5();QZ=new Bj;Rt=new Bj;Vs=new Bj;Vu=new Bj;Vt=new Bj;APS();ARj();ABG();Ol=new BD;AL1();HJ=0.0;AEF();QK=B_(3);AJA();AFz();AHw();C1=1;AAD();Vv=new JL;PW=new JK;AH7();N=1;ABW();Ie=new MG;AJ8();YE();c=new M6;b=S(H,0);d=b.data;IZ(A(3));e=d.length;f=0;while(f<e){IZ(d[f]);f=f+1|0;}c.t7=A(3);c.uT=b.p();Cl=c;AP9();VE=V(ACg);AEw();ARw();c=new G3;c.ry=A(4);Ci=c;c=new G3;c.ry=A(5);Jp=c;AD9();ANk();Y$();AEX();ACm();V3();ARN();ADX();AAn();Ka=1;YW();AK1();c
=new Hb;c.qF=1;Rx=c;c=new Hb;c.qF=0;R1=c;PU=V(Ce);ARb();Tu=new Bj;Tv=new Bj;Tw=new Bj;Tr=new Bj;Tt=new Bj;R7=new Bj;T2=new Bj;UN=new Bj;UT=new Bj;Vf=new Bj;Ny=new Bj;Oy=Da(2.0);Oz=Da(3.0);c=ARo(A(6));c.qS=640;c.oU=480;Pp(new K8,new Pc,c);};
let NC=E();
let ADk=0,ADr=0,XM=0,ARx=0,ABA=0;
let R3=()=>{R3=BG(NC);AFJ();};
let AFJ=()=>{ADk=CY(W(navigator.platform),A(7));ADr=CY(W(navigator.platform),A(8));XM=CY(W(navigator.platform),A(9));ARx=!CY(W(navigator.platform),A(10))&&!CY(W(navigator.platform),A(11))?0:1;ABA=!CY(W(navigator.platform),A(12))&&!CY(W(navigator.platform),A(13))&&!CY(W(navigator.platform),A(14))?0:1;};
let Np=E(0);
let LC=E();
let CL=E(0);
function Mu(){let a=this;LC.call(a);a.od=null;a.t8=null;a.w6=0;a.lG=null;a.mE=null;a.qz=null;a.vH=null;a.rZ=null;a.r0=null;a.wz=0;a.wA=0;a.q2=null;a.re=null;a.ra=null;a.v_=null;a.vR=0;a.pH=null;a.v7=0;a.yl=0;a.uS=0;a.sU=null;a.u4=null;}
let BH=0;
let RY=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.mE=new Bj;a.qz=S(CI,20);a.vH=Jt(20);a.rZ=U(20);a.r0=U(20);d=new Mn;HQ(d,1,4,V(Qu));a.v_=d;a.vR=1;a.sU=Ik;e=new BD;e.kj=0.0;e.ki=1.0;e.kh=0.0;e.kg=0.8500000238418579;CN(e);a.u4=e;if(b===null){b=new Bk;b.jx=1;b.jy=1;b.jz=A(15);B(b);}if(c===null){b=new Bk;b.jx=1;b.jy=1;b.jz=A(16);B(b);}a.od=b;a.t8=c;c=new By;EI(c);e=new Mn;HQ(e,1,4,V(CI));c.jU=e;e=new Sb;e.n4=1.0;e.n2=0.0;e.n3=0.0;e.n6=0.0;e.n7=1.0;e.n5=0.0;c.sh=e;c.s6=CX();c.oD=CX();c.mJ=1;a.lG=c;c.kP=a;c=c.jU;f=c.jM;g=0;h
=c.jA;while(g<h){f.data[g].x(a);g=g+1|0;}g=B5.ky.width;i=B5.ky.height;b.pL=0;b.pM=0;b.qn=g;b.qB=i;j=g;k=b.qT;j=j*k;k=i*k;b.rL=j;b.rW=k;MB(b,1);},
AVb=(a,b)=>{let c=new Mu();RY(c,a,b);return c;},
ALH=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.pH===null){b=RI(5000,null);a.pH=b;b.rt=1;}a:{if(!a.yl&&!a.uS&&a.sU===Ik){if(!a.v7)break a;b=a.lG;b.j5=1;BH=1;b=b.jU;if(Cw){c=new Cp;c.kb=1;c.kf=b;c.lc=1;}else{if(b.j4===null){c=new CU;c.ln=b;c.lp=1;b.j4=c;}c=CD(b.j4);}b:while(true){if(!c.kb){c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(c.kV>=c.kf.jA?0:1))break a;b=Ck(c);if(!(b instanceof By)){b.j5=1;BH=1;}else{b=b;b.j5=1;BH=1;b=b.jU;if(Cw){d=new Cp;d.kb=1;d.kf=b;d.lc=1;}else{if(b.j4
===null){d=new CU;d.ln=b;d.lp=1;b.j4=d;}d=CD(b.j4);}while(true){if(!d.kb){c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(d.kV>=d.kf.jA?0:1))break;b=Ck(d);if(!(b instanceof By)){b.j5=1;BH=1;}else{b=b;b.j5=1;BH=1;b=b.jU;if(Cw){e=new Cp;e.kb=1;e.kf=b;e.lc=1;}else{if(b.j4===null){e=new CU;e.ln=b;e.lp=1;b.j4=e;}e=CD(b.j4);}while(true){if(!e.kb){c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(e.kV>=e.kf.jA?0:1))break;b=Ck(e);if(!(b instanceof By)){b.j5=1;BH=1;}else{b=b;b.j5=1;BH=1;f=b.jU;if(Cw){b=new Cp;b.kb=1;b.kf=f;b.lc
=1;}else{if(f.j4===null){b=new CU;BA(b);b.ln=f;b.lp=1;f.j4=b;}b=CD(f.j4);}while(true){if(!b.kb){c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(b.kV>=b.kf.jA?0:1))break;f=Ck(b);if(!(f instanceof By)){f.j5=1;BH=1;}else{f=f;f.j5=1;BH=1;f=f.jU;if(Cw){g=new Cp;BA(g);g.kb=1;g.kf=f;g.lc=1;}else{if(f.j4===null)f.j4=K4(f,1);g=CD(f.j4);}while(true){if(!g.kb){c=new Q;Gv(c,A(17));B(c);}if(!(g.kV>=g.kf.jA?0:1))break;f=Ck(g);if(!(f instanceof By)){f.j5=1;BH=1;}else{f=f;f.j5=1;BH=1;f=f.jU;if(Cw)h=Lq(f,1);else{if(f.j4===null)f.j4
=M7(f);h=CD(f.j4);}while(true){if(!h.kb)break b;if(!(h.kV>=h.kf.jA?0:1))break;f=Ck(h);if(!(f instanceof By)){f.j5=1;BH=1;}else{f=f;EK(f,1);f=FZ(f.jU);while(G_(f)){i=Ck(f);if(!(i instanceof By))EK(i,1);else KT(i,1,1);}}}}}}}}}}}}}B(JX(A(17)));}c=a.mE;b=PC;j=b.li.data[0];k=b.lh.data[0];c.kI=j;c.kH=k;Jy(a.od,c);b=a.mE;j=b.kI;k=b.kH;c=a.lG;b.kI=j;b.kH=k;MM(c,b);b=a.lG;c=a.mE;c=ME(b,c.kI,c.kH,1);if(c===null)return;if(!a.uS)b=c;else{b=c.kW;if(b===null)b=c;}c=a.sU;if(c===Ik){b.j5=1;BH=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof D6)break;b=b.kW;}}if(b===null)return;b.K(c);}d:{if(a.v7&&b instanceof By){c=b;c.j5=1;BH=1;c=c.jU;if(Cw){d=new Cp;d.kb=1;d.kf=c;d.lc=1;}else{if(c.j4===null){d=new CU;d.ln=c;d.lp=1;c.j4=d;}d=CD(c.j4);}e:while(true){if(!d.kb){c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(d.kV>=d.kf.jA?0:1))break d;c=Ck(d);if(!(c instanceof By)){c.j5=1;BH=1;}else{c=c;c.j5=1;BH=1;c=c.jU;if(Cw){e=new Cp;e.kb=1;e.kf=c;e.lc=1;}else{if(c.j4===null){e=new CU;e.ln=c;e.lp=1;c.j4=e;}e=CD(c.j4);}while(true){if(!e.kb)
{c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(e.kV>=e.kf.jA?0:1))break;c=Ck(e);if(!(c instanceof By)){c.j5=1;BH=1;}else{c=c;c.j5=1;BH=1;c=c.jU;if(Cw){f=new Cp;f.kb=1;f.kf=c;f.lc=1;}else{if(c.j4===null){f=new CU;f.ln=c;f.lp=1;c.j4=f;}f=CD(c.j4);}while(true){if(!f.kb){c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(f.kV>=f.kf.jA?0:1))break;c=Ck(f);if(!(c instanceof By)){c.j5=1;BH=1;}else{c=c;c.j5=1;BH=1;c=c.jU;if(Cw){g=new Cp;g.kb=1;g.kf=c;g.lc=1;}else{if(c.j4===null){g=new CU;BA(g);g.ln=c;g.lp=1;c.j4=g;}g=CD(c.j4);}while
(true){if(!g.kb){c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}if(!(g.kV>=g.kf.jA?0:1))break;c=Ck(g);if(!(c instanceof By)){c.j5=1;BH=1;}else{c=c;c.j5=1;BH=1;c=c.jU;if(Cw){h=new Cp;BA(h);h.kb=1;h.kf=c;h.lc=1;}else{if(c.j4===null)c.j4=K4(c,1);h=CD(c.j4);}while(true){if(!h.kb){c=new Q;Gv(c,A(17));B(c);}if(!(h.kV>=h.kf.jA?0:1))break;c=Ck(h);if(!(c instanceof By)){c.j5=1;BH=1;}else{c=c;c.j5=1;BH=1;c=c.jU;if(Cw)i=Lq(c,1);else{if(c.j4===null)c.j4=M7(c);i=CD(c.j4);}while(true){if(!i.kb)break e;if(!(i.kV>=i.kf.jA?0:1))break;c
=Ck(i);if(!(c instanceof By)){c.j5=1;BH=1;}else{c=c;EK(c,1);c=FZ(c.jU);while(G_(c)){l=Ck(c);if(!(l instanceof By))EK(l,1);else KT(l,1,1);}}}}}}}}}}}}}B(JX(A(17)));}}c=a.lG;if(c!==b)f:{c.j5=0;if(c instanceof By){c=c.jU;m=0;n=c.jA;g:while(true){if(m>=n)break f;if(m>=c.jA){d=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,m,10);F(b,b.ju,A(19));m=c.jA;L(b,b.ju,m,10);c=new H;o=b.jw;p=o.data;n=b.ju;q=p.length;if(n>=0&&n<=(q-0|0)){c.jv=K(o.data,0,n);d.jx=1;d.jy=1;d.jz=c;B(d);}b=new I;b.jx=1;b.jy=1;B(b);}d=c.jM.data[m];if
(d!==b)h:{d.j5=0;if(d instanceof By){d=d.jU;q=0;r=d.jA;while(true){if(q>=r)break h;if(q>=d.jA){c=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,q,10);F(b,b.ju,A(19));m=d.jA;L(b,b.ju,m,10);d=new H;o=b.jw;p=o.data;n=b.ju;q=p.length;if(n>=0&&n<=(q-0|0)){d.jv=K(o.data,0,n);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}e=d.jM.data[q];if(e!==b)i:{e.j5=0;if(e instanceof By){e=e.jU;s=0;t=e.jA;while(true){if(s>=t)break i;if(s>=e.jA){c=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,s,10);F(b,b.ju,A(19));m
=e.jA;L(b,b.ju,m,10);d=new H;o=b.jw;p=o.data;n=b.ju;q=p.length;if(n>=0&&n<=(q-0|0)){d.jv=K(o.data,0,n);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}f=e.jM.data[s];if(f!==b)j:{f.j5=0;if(f instanceof By){f=f.jU;u=0;v=f.jA;while(true){if(u>=v)break j;if(u>=f.jA){c=new I;b=new J;BA(b);b.jw=G(16);CF(b,b.ju,A(18));L(b,b.ju,u,10);CF(b,b.ju,A(19));m=f.jA;L(b,b.ju,m,10);d=new H;o=b.jw;p=o.data;n=b.ju;q=p.length;if(n>=0&&n<=(q-0|0)){d.jv=K(o.data,0,n);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}g
=f.jM.data[u];if(g!==b)k:{g.j5=0;if(g instanceof By){g=g.jU;w=0;x=g.jA;while(true){if(w>=x)break k;if(w>=g.jA){c=new I;b=new J;DJ(b,16);B$(b,b.ju,A(18));HZ(b,w,10);B$(b,b.ju,A(19));HZ(b,g.jA,10);d=new H;o=b.jw;p=o.data;n=b.ju;q=p.length;if(n>=0&&n<=(q-0|0)){d.jv=K(o.data,0,n);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}h=g.jM.data[w];if(h!==b)l:{h.j5=0;if(h instanceof By){h=h.jU;y=0;z=h.jA;while(true){if(y>=z)break l;if(y>=h.jA){c=new I;b=new J;ED(b);IQ(b,A(18));H4(b,y);IQ(b,A(19));H4(b,h.jA);d=new H;o
=b.jw;p=o.data;n=b.ju;q=p.length;if(n>=0&&n<=(q-0|0)){d.jv=K(o.data,0,n);Gv(c,d);B(c);}b=new I;b.jx=1;b.jy=1;B(b);}i=h.jM.data[y];if(i!==b)m:{i.j5=0;if(i instanceof By){l=i.jU;ba=0;bb=l.jA;while(true){if(ba>=bb)break m;if(ba>=l.jA)break g;i=l.jM.data[ba];if(i!==b)n:{EK(i,0);if(i instanceof By){i=i.jU;bc=0;bd=i.jA;while(true){if(bc>=bd)break n;Oo(a,Gw(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(TS(EE(Hl(HV(Hl(HV(Et(),A(18)),ba),A(19)),l.jA))));}}}BU.W(3042);b
=a.pH;c=a.od.pO.pu;CZ(b.rX,c.kv);b.nJ=1;b=a.pH;if(!b.rt){c=new BX;c.jx=1;c.jy=1;c.jz=A(20);B(c);}Fz(b,Hv);Oh(a.lG,a.pH);b=a.pH;Fw(b.kp);b.l8=null;BU.bb(3042);},
Oo=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.j5=0;if(b instanceof By){d=b.jU;e=0;f=d.jA;while(true){if(e>=f)break a;if(e>=d.jA){c=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,e,10);F(b,b.ju,A(19));e=d.jA;L(b,b.ju,e,10);d=new H;g=b.jw;h=g.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0)){d.jv=K(g.data,0,f);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}b=d.jM.data[e];if(b!==c)b:{b.j5=0;if(b instanceof By){j=b.jU;i=0;k=j.jA;while(true){if(i>=k)break b;if
(i>=j.jA){c=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,i,10);F(b,b.ju,A(19));e=j.jA;L(b,b.ju,e,10);d=new H;g=b.jw;h=g.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0)){d.jv=K(g.data,0,f);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}b=j.jM.data[i];if(b!==c)c:{b.j5=0;if(b instanceof By){l=b.jU;m=0;n=l.jA;while(true){if(m>=n)break c;if(m>=l.jA){c=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,m,10);F(b,b.ju,A(19));e=l.jA;L(b,b.ju,e,10);d=new H;g=b.jw;h=g.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0))
{d.jv=K(g.data,0,f);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}b=l.jM.data[m];if(b!==c)d:{b.j5=0;if(b instanceof By){b=b.jU;o=0;p=b.jA;while(true){if(o>=p)break d;if(o>=b.jA){d=new I;c=new J;c.jw=G(16);F(c,c.ju,A(18));L(c,c.ju,o,10);F(c,c.ju,A(19));e=b.jA;L(c,c.ju,e,10);b=new H;g=c.jw;h=g.data;f=c.ju;i=h.length;if(f>=0&&f<=(i-0|0)){b.jv=K(g.data,0,f);d.jx=1;d.jy=1;d.jz=b;B(d);}b=new I;b.jx=1;b.jy=1;B(b);}q=b.jM.data[o];if(q!==c)e:{q.j5=0;if(q instanceof By){r=q.jU;s=0;t=r.jA;while(true){if(s>=t)break e;if
(s>=r.jA){c=new I;b=new J;BA(b);b.jw=G(16);CF(b,b.ju,A(18));L(b,b.ju,s,10);CF(b,b.ju,A(19));e=r.jA;L(b,b.ju,e,10);d=new H;g=b.jw;h=g.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0)){d.jv=K(g.data,0,f);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}q=r.jM.data[s];if(q!==c)f:{q.j5=0;if(q instanceof By){q=q.jU;u=0;v=q.jA;while(true){if(u>=v)break f;if(u>=q.jA){c=new I;b=new J;DJ(b,16);B$(b,b.ju,A(18));HZ(b,u,10);B$(b,b.ju,A(19));HZ(b,q.jA,10);d=new H;g=b.jw;h=g.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0)){d.jv
=K(g.data,0,f);c.jx=1;c.jy=1;c.jz=d;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}w=q.jM.data[u];if(w!==c)g:{w.j5=0;if(w instanceof By){w=w.jU;x=0;y=w.jA;while(true){if(x>=y)break g;if(x>=w.jA){c=new I;b=new J;ED(b);IQ(b,A(18));H4(b,x);IQ(b,A(19));H4(b,w.jA);d=new H;g=b.jw;h=g.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0)){d.jv=K(g.data,0,f);Gv(c,d);B(c);}b=new I;b.jx=1;b.jy=1;B(b);}z=w.jM.data[x];if(z!==c)h:{z.j5=0;if(z instanceof By){z=z.jU;ba=0;bb=z.jA;while(true){if(ba>=bb)break h;if(ba>=z.jA)B(TS(EE(Hl(HV(Hl(HV(Et(),
A(18)),ba),A(19)),z.jA))));bc=z.jM.data[ba];if(bc!==c)i:{EK(bc,0);if(bc instanceof By){bc=bc.jU;bd=0;be=bc.jA;while(true){if(bd>=be)break i;Oo(a,Gw(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
AMA=(a,b)=>{let c,d,e,f,g;c=0;d=a.qz.data.length;while(c<d){e=a.qz.data;f=e[c];if(a.vH.data[c])e[c]=Pj(a,f,a.rZ.data[c],a.r0.data[c],c);else if(f!==null){e[c]=null;Nd(a,f,a.rZ.data[c],a.r0.data[c],c);}c=c+1|0;}g=G2;if(!(g!==Mm&&g!==L1&&g!==g))a.q2=Pj(a,a.q2,a.wz,a.wA,(-1));QP(a.lG,b);},
Pj=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.mE;g=c;h=d;f.kI=g;f.kH=h;Jy(a.od,f);f=a.mE;g=f.kI;h=f.kH;i=a.lG;f.kI=g;f.kH=h;MM(i,f);f=a.lG;i=a.mE;j=ME(f,i.kI,i.kH,1);if(j===b)return b;if(b!==null){Dy();i=BW;d=B3(i,V(BQ));k=d<0?null:i.kD.data[d];if(k===null){k=new DS;i=new Bu;i.kr=0;i.jM=S(C,4);k.ke=i;k.k1=100;a:{try{i=Ef(V(BQ),null);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{i=Ea(V(BQ),null);Eo(i,1);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}i
=null;}k.k4=i;if(i===null){b=new Bz;i=new J;i.jw=G(16);F(i,i.ju,A(21));if(V(BQ).jQ===null)V(BQ).jQ=W(V(BQ).jO.$meta.name);f=V(BQ).jQ;F(i,i.ju,f);f=new H;l=i.jw;m=l.data;d=i.ju;e=m.length;if(d>=0&&d<=(e-0|0)){f.jv=K(l.data,0,d);b.jx=1;b.jy=1;b.jz=f;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}C5(BW,V(BQ),k);}f=k.ke;c=f.jA;if(c){if(!c){b=new BX;b.jx=1;b.jy=1;b.jz=A(22);B(b);}c=c-1|0;f.jA=c;l=f.jM.data;f=l[c];l[c]=null;}else b:{try{f=FE(k.k4,null);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}i
=new Q;b=new J;b.jw=G(16);F(b,b.ju,A(23));n=k.k4.me.md;if(n.jQ===null)n.jQ=W(n.jO.$meta.name);k=n.jQ;F(b,b.ju,k);k=new H;l=b.jw;m=l.data;d=b.ju;e=m.length;if(d>=0&&d<=(e-0|0)){k.jv=K(l.data,0,d);i.jx=1;i.jy=1;i.jz=k;i.lk=f;B(i);}b=new I;b.jx=1;b.jy=1;B(b);}f=f;f.p6=Ij;f.k2=a;i=a.mE;f.rP=i.kI;f.rQ=i.kH;f.rV=e;f.mw=j;M5(b,f);i=BW;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BJ;k.jO=o;p=k;o.classObject=p;}}c=B3(i,k);i=c<0?null:i.kD.data[c];if(i!==null){k=i.ke;if(k.jA<i.k1){BL(k,f);c
=i.kR;d=i.ke.jA;if(c>d)d=c;i.kR=d;if(BY(f,BR)){f=f;f.k2=null;f.lH=null;f.lR=null;f.lZ=0;f.lE=1;f.lT=0;f.lU=0;f.lg=0;f.mw=null;f.mT=(-1);}}else if(BY(f,BR)){f=f;f.k2=null;f.lH=null;f.lR=null;f.lZ=0;f.lE=1;f.lT=0;f.lU=0;f.lg=0;f.mw=null;f.mT=(-1);}}}if(j!==null){Dy();i=BW;d=B3(i,V(BQ));k=d<0?null:i.kD.data[d];if(k===null){k=new DS;i=new Bu;i.kr=0;i.jM=S(C,4);k.ke=i;k.k1=100;c:{try{i=Ef(V(BQ),null);break c;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{i=Ea(V(BQ),null);Eo(i,1);break c;}catch
($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}i=null;}k.k4=i;if(i===null){b=new Bz;i=new J;i.jw=G(16);F(i,i.ju,A(21));if(V(BQ).jQ===null)V(BQ).jQ=W(V(BQ).jO.$meta.name);f=V(BQ).jQ;F(i,i.ju,f);f=new H;l=i.jw;m=l.data;d=i.ju;e=m.length;if(d>=0&&d<=(e-0|0)){f.jv=K(l.data,0,d);b.jx=1;b.jy=1;b.jz=f;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}C5(BW,V(BQ),k);}f=k.ke;c=f.jA;if(c){if(!c){b=new BX;b.jx=1;b.jy=1;b.jz=A(22);B(b);}c=c-1|0;f.jA=c;l=f.jM.data;f=l[c];l[c]=null;}else d:{try{f=FE(k.k4,null);break d;}catch
($$e){$$je=Bs($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}i=new Q;b=new J;b.jw=G(16);F(b,b.ju,A(23));n=k.k4.me.md;if(n.jQ===null)n.jQ=W(n.jO.$meta.name);k=n.jQ;F(b,b.ju,k);k=new H;l=b.jw;m=l.data;d=b.ju;e=m.length;if(d>=0&&d<=(e-0|0)){k.jv=K(l.data,0,d);i.jx=1;i.jy=1;i.jz=k;i.lk=f;B(i);}b=new I;b.jx=1;b.jy=1;B(b);}f=f;f.p6=Mp;f.k2=a;i=a.mE;f.rP=i.kI;f.rQ=i.kH;f.rV=e;f.mw=b;M5(j,f);b=BW;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BJ;i.jO=k;o=i;k.classObject=o;}}c=B3(b,
i);b=c<0?null:b.kD.data[c];if(b!==null){i=b.ke;if(i.jA<b.k1){BL(i,f);c=b.kR;d=b.ke.jA;if(c>d)d=c;b.kR=d;if(BY(f,BR)){b=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.mw=null;b.mT=(-1);}}else if(BY(f,BR)){b=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.mw=null;b.mT=(-1);}}}return j;},
Nd=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.mE;g=c;h=d;f.kI=g;f.kH=h;Jy(a.od,f);Dy();i=BW;d=B3(i,V(BQ));j=d<0?null:i.kD.data[d];if(j===null){j=new DS;i=new Bu;i.kr=0;i.jM=S(C,4);j.ke=i;j.k1=100;a:{try{i=Ef(V(BQ),null);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{i=Ea(V(BQ),null);Eo(i,1);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}i=null;}j.k4=i;if(i===null){b=new Bz;i=new J;i.jw=G(16);F(i,i.ju,A(21));if(V(BQ).jQ===null)V(BQ).jQ=W(V(BQ).jO.$meta.name);f
=V(BQ).jQ;F(i,i.ju,f);f=new H;k=i.jw;l=k.data;d=i.ju;e=l.length;if(d>=0&&d<=(e-0|0)){f.jv=K(k.data,0,d);b.jx=1;b.jy=1;b.jz=f;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}C5(BW,V(BQ),j);}f=j.ke;c=f.jA;if(c){if(!c){b=new BX;b.jx=1;b.jy=1;b.jz=A(22);B(b);}c=c-1|0;f.jA=c;k=f.jM.data;f=k[c];k[c]=null;}else b:{try{f=FE(j.k4,null);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}i=new Q;b=new J;b.jw=G(16);F(b,b.ju,A(23));m=j.k4.me.md;if(m.jQ===null)m.jQ=W(m.jO.$meta.name);j=m.jQ;F(b,b.ju,j);j=
new H;k=b.jw;l=k.data;d=b.ju;e=l.length;if(d>=0&&d<=(e-0|0)){j.jv=K(k.data,0,d);i.jx=1;i.jy=1;i.jz=j;i.lk=f;B(i);}b=new I;b.jx=1;b.jy=1;B(b);}f=f;f.p6=Ij;f.k2=a;i=a.mE;f.rP=i.kI;f.rQ=i.kH;f.rV=e;f.mw=b;M5(b,f);b=BW;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BJ;i.jO=j;n=i;j.classObject=n;}}c=B3(b,i);b=c<0?null:b.kD.data[c];if(b!==null){i=b.ke;if(i.jA<b.k1){BL(i,f);c=b.kR;d=b.ke.jA;if(c>d)d=c;b.kR=d;if(BY(f,BR)){b=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg
=0;b.mw=null;b.mT=(-1);}}else if(BY(f,BR)){b=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.mw=null;b.mT=(-1);}}},
ATl=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.v_;Dc(d);e=d.jM;d.nL=e;d.ms=d.ms+1|0;e=e;f=0;g=d.jA;h=null;i=null;j=null;a:while(true){if(f>=g){GP(d);if(c!==null){Dy();b=BW;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BJ;d.jO=k;l=d;k.classObject=l;}}m=B3(b,d);b=m<0?null:b.kD.data[m];if(b!==null){d=b.ke;if(d.jA<b.k1){BL(d,c);m=b.kR;f=b.ke.jA;if(m>f)f=m;b.kR=f;if(BY(c,BR)){b=c;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.mw=null;b.mT=(-1);}}else if
(BY(c,BR)){b=c;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.mw=null;b.mT=(-1);}}}return;}k=e.data[f];if(k.uO===b){Dc(d);if(Ph(d,k,1)){if(c===null){Dy();c=BW;n=B3(c,V(BQ));l=n<0?null:c.kD.data[n];if(l===null){l=new DS;c=new Bu;c.kr=0;c.jM=S(C,4);l.ke=c;l.k1=100;b:{try{c=Ef(V(BQ),h);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ea(V(BQ),i);Eo(c,1);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}c=null;}l.k4=c;if(c===null){b=new Bz;c
=new J;c.jw=G(16);F(c,c.ju,A(21));if(V(BQ).jQ===null)V(BQ).jQ=W(V(BQ).jO.$meta.name);d=V(BQ).jQ;F(c,c.ju,d);d=new H;e=c.jw;o=e.data;f=c.ju;g=o.length;if(f>=0&&f<=(g-0|0)){d.jv=K(e.data,0,f);b.jx=1;b.jy=1;b.jz=d;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}C5(BW,V(BQ),l);}c:{c=l.ke;m=c.jA;if(m){if(!m)break a;m=m-1|0;c.jA=m;o=c.jM.data;c=o[m];o[m]=null;}else try{c=FE(l.k4,j);break c;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){c=$$je;d=new Q;b=new J;b.jw=G(16);F(b,b.ju,A(23));h=l.k4.me.md;if(h.jQ===null)h.jQ=W(h.jO.$meta.name);k
=h.jQ;F(b,b.ju,k);k=new H;e=b.jw;o=e.data;f=b.ju;g=o.length;if(f>=0&&f<=(g-0|0)){k.jv=K(e.data,0,f);d.jx=1;d.jy=1;d.jz=k;d.lk=c;B(d);}b=new I;b.jx=1;b.jy=1;B(b);}else{throw $$e;}}}c=c;c.p6=H1;c.k2=a;c.rP=(-2.147483648E9);c.rQ=(-2.147483648E9);}c.lH=k.wP;c.lR=k.uO;c.rV=k.xo;c.mT=k.xW;k.xG.bq(c);}}f=f+1|0;}b=new BX;b.jx=1;b.jy=1;b.jz=A(22);B(b);},
FV=(a,b)=>{let c,d,e;c=0;d=a.qz.data.length;while(c<d){e=a.qz.data;if(b===e[c]){e[c]=null;Nd(a,b,a.rZ.data[c],a.r0.data[c],c);}c=c+1|0;}if(b===a.q2){a.q2=null;Nd(a,b,a.wz,a.wA,(-1));}},
AUx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.re===b)return 1;Dy();c=BW;d=B3(c,V(CK));e=d<0?null:c.kD.data[d];if(e===null){e=new DS;c=new Bu;c.kr=0;c.jM=S(C,4);e.ke=c;e.k1=100;a:{try{c=Ef(V(CK),null);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ea(V(CK),null);Eo(c,1);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}c=null;}e.k4=c;if(c===null){b=new Bz;c=new J;c.jw=G(16);F(c,c.ju,A(21));if(V(CK).jQ===null)V(CK).jQ=W(V(CK).jO.$meta.name);f=V(CK).jQ;F(c,
c.ju,f);f=new H;g=c.jw;h=g.data;d=c.ju;i=h.length;if(d>=0&&d<=(i-0|0)){f.jv=K(g.data,0,d);b.jx=1;b.jy=1;b.jz=f;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}C5(BW,V(CK),e);}f=e.ke;j=f.jA;if(j){if(!j){b=new BX;b.jx=1;b.jy=1;b.jz=A(22);B(b);}j=j-1|0;f.jA=j;g=f.jM.data;f=g[j];g[j]=null;}else b:{try{f=FE(e.k4,null);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jw=G(16);F(b,b.ju,A(23));k=e.k4.me.md;if(k.jQ===null)k.jQ=W(k.jO.$meta.name);e=k.jQ;F(b,b.ju,e);e=new H;g=b.jw;h
=g.data;d=b.ju;i=h.length;if(d>=0&&d<=(i-0|0)){e.jv=K(g.data,0,d);c.jx=1;c.jy=1;c.jz=e;c.lk=f;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}f=f;f.k2=a;f.vO=Lz;c=a.re;if(c!==null){f.qZ=0;f.nz=b;c.bl(f);}j=f.lg?0:1;if(j){a.re=b;if(b!==null){f.qZ=1;f.nz=c;b.bl(f);j=f.lg?0:1;if(!j)a.re=c;}}b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BJ;c.jO=e;l=c;e.classObject=l;}}d=B3(b,c);b=d<0?null:b.kD.data[d];if(b!==null){c=b.ke;if(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if(d>i)i=d;b.kR=i;if(BY(f,BR)){b
=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.nz=null;}}else if(BY(f,BR)){b=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.nz=null;}}return j;},
AUb=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.ra===b)return 1;Dy();c=BW;d=B3(c,V(CK));e=d<0?null:c.kD.data[d];if(e===null){e=new DS;c=new Bu;c.kr=0;c.jM=S(C,4);e.ke=c;e.k1=100;a:{try{c=Ef(V(CK),null);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ea(V(CK),null);Eo(c,1);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}c=null;}e.k4=c;if(c===null){b=new Bz;c=new J;c.jw=G(16);F(c,c.ju,A(21));if(V(CK).jQ===null)V(CK).jQ=W(V(CK).jO.$meta.name);f=V(CK).jQ;F(c,
c.ju,f);f=new H;g=c.jw;h=g.data;d=c.ju;i=h.length;if(d>=0&&d<=(i-0|0)){f.jv=K(g.data,0,d);b.jx=1;b.jy=1;b.jz=f;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}C5(BW,V(CK),e);}f=e.ke;j=f.jA;if(j){if(!j){b=new BX;b.jx=1;b.jy=1;b.jz=A(22);B(b);}j=j-1|0;f.jA=j;g=f.jM.data;f=g[j];g[j]=null;}else b:{try{f=FE(e.k4,null);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jw=G(16);F(b,b.ju,A(23));k=e.k4.me.md;if(k.jQ===null)k.jQ=W(k.jO.$meta.name);e=k.jQ;F(b,b.ju,e);e=new H;g=b.jw;h
=g.data;d=b.ju;i=h.length;if(d>=0&&d<=(i-0|0)){e.jv=K(g.data,0,d);c.jx=1;c.jy=1;c.jz=e;c.lk=f;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}f=f;f.k2=a;f.vO=MR;c=a.ra;if(c!==null){f.qZ=0;f.nz=b;c.bl(f);}j=f.lg?0:1;if(j){a.ra=b;if(b!==null){f.qZ=1;f.nz=c;b.bl(f);j=f.lg?0:1;if(!j)a.ra=c;}}b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BJ;c.jO=e;l=c;e.classObject=l;}}d=B3(b,c);b=d<0?null:b.kD.data[d];if(b!==null){c=b.ke;if(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if(d>i)i=d;b.kR=i;if(BY(f,BR)){b
=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.nz=null;}}else if(BY(f,BR)){b=f;b.k2=null;b.lH=null;b.lR=null;b.lZ=0;b.lE=1;b.lT=0;b.lU=0;b.lg=0;b.nz=null;}}return j;};
let BR=E(0);
function Fh(){let a=this;C.call(a);a.k2=null;a.lH=null;a.lR=null;a.lZ=0;a.lE=0;a.lT=0;a.lU=0;a.lg=0;}
let APY=a=>{a.lT=1;},
AJm=a=>{return a.lE;},
H2=a=>{return a.lU;},
FH=a=>{return a.lg;};
let C_=E(0);
let B1=E(0);
function Bx(){let a=this;C.call(a);a.jJ=null;a.jE=0;}
let AN1=a=>{return a.jE;},
AEt=a=>{return a.jJ;},
XL=(a,b)=>{return a!==b?0:1;};
let GX=E(Bx);
let MH=null,Vl=null,ADU=null,WD=null;
let ANc=()=>{let b,c,d;b=new GX;b.jJ=A(24);b.jE=0;MH=b;c=new GX;c.jJ=A(25);c.jE=1;Vl=c;d=new GX;d.jJ=A(26);d.jE=2;ADU=d;WD=P(GX,[b,c,d]);};
function CI(){let a=this;C.call(a);a.kP=null;a.kW=null;a.uZ=null;a.vY=null;a.u$=null;a.xC=null;a.sc=null;a.mB=0;a.j5=0;a.kd=0.0;a.kc=0.0;a.lO=0.0;a.lM=0.0;a.pA=0.0;a.pB=0.0;a.o7=0.0;a.o8=0.0;a.pY=0.0;a.r3=null;}
let EI=a=>{let b,c;b=new Kp;b.kr=1;b.jM=S(C,0);c=new Fo;c.oo=1;c.lN=U(0);b.pD=c;a.uZ=b;b=new Kp;b.kr=1;b.jM=S(C,0);c=new Fo;c.oo=1;c.lN=U(0);b.pD=c;a.vY=b;b=new Bu;b.kr=1;b.jM=S(C,0);a.u$=b;a.sc=MH;a.mB=1;a.o7=1.0;a.o8=1.0;b=new BD;b.kj=1.0;b.ki=1.0;b.kh=1.0;b.kg=1.0;CN(b);a.r3=b;},
AVy=()=>{let a=new CI();EI(a);return a;},
J5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.u$;if(!c.jA)return;d=a.kP;d!==null&&!d.vR;a:{try{e=0;while(e<c.jA){d=Gw(c,e);if(d.br(b)&&e<c.jA){f=Gw(c,e)===d?e:EH(c,d,1);if(f!=(-1)){DC(c,f);d.bu(null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Bs($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return;}h=a.T();c=new Bz;d=new J;d.jw=G(16);F(d,d.ju,A(27));i=h.jv.length;e=128;if(i<e)e=i;j=Cu(h,0,e);F(d,d.ju,j);j=new H;k=d.jw;l=k.data;e=d.ju;m=l.length;if(e>=0&&e<=(m-0|0)){j.jv=K(k.data,0,e);c.jx=1;c.jy=
1;c.jz=j;c.lk=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);},
M5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.k2===null)b.k2=a.kP;b.lH=a;Dy();c=BW;d=B3(c,V(Bu));e=d<0?null:c.kD.data[d];if(e===null){e=new DS;c=new Bu;c.kr=0;c.jM=S(C,4);e.ke=c;e.k1=100;a:{try{c=Ef(V(Bu),null);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{c=Ea(V(Bu),null);Eo(c,1);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}c=null;}e.k4=c;if(c===null){b=new Bz;c=new J;c.jw=G(16);F(c,c.ju,A(21));if(V(Bu).jQ===null)V(Bu).jQ=W(V(Bu).jO.$meta.name);f
=V(Bu).jQ;F(c,c.ju,f);f=new H;g=c.jw;h=g.data;d=c.ju;i=h.length;if(d>=0&&d<=(i-0|0)){f.jv=K(g.data,0,d);b.jx=1;b.jy=1;b.jz=f;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}C5(BW,V(Bu),e);}f=e.ke;j=f.jA;if(j){if(!j){b=new BX;b.jx=1;b.jy=1;b.jz=A(22);B(b);}j=j-1|0;f.jA=j;g=f.jM.data;f=g[j];g[j]=null;}else b:{try{f=FE(e.k4,null);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jw=G(16);F(b,b.ju,A(23));k=e.k4.me.md;if(k.jQ===null)k.jQ=W(k.jO.$meta.name);e=k.jQ;F(b,b.ju,e);e=
new H;g=b.jw;h=g.data;d=b.ju;i=h.length;if(d>=0&&d<=(i-0|0)){e.jv=K(g.data,0,d);c.jx=1;c.jy=1;c.jz=e;c.lk=f;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}f=f;c=a.kW;while(c!==null){BL(f,c);c=c.kW;}c:{try{g=f.jM;j=f.jA-1|0;}catch($$e){$$je=Bs($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;Ix(g.data[j],b,1);if(H2(b))break;j=j+(-1)|0;}j=FH(b);}catch($$e){$$je=Bs($$e);b=$$je;break c;}g=f.jM;d=0;i=f.jA;b=null;if(d>i){b=new Bk;b.jx=1;b.jy=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jA=0;b=BW;m=f.constructor;if(m
===null)k=null;else{k=m.classObject;if(k===null){k=new BJ;k.jO=m;c=k;m.classObject=c;}}d=B3(b,k);b=d<0?null:b.kD.data[d];if(b!==null){c=b.ke;if(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if(d>i)i=d;b.kR=i;if(BY(f,BR))f.bz();}else if(BY(f,BR))f.bz();}return j;}e:{try{Ix(a,b,1);if(!H2(b))break e;j=FH(b);}catch($$e){$$je=Bs($$e);b=$$je;break c;}g=f.jM;d=0;i=f.jA;b=null;if(d>i){b=new Bk;b.jx=1;b.jy=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jA=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===
null){c=new BJ;c.jO=e;m=c;e.classObject=m;}}d=B3(b,c);b=d<0?null:b.kD.data[d];if(b!==null){c=b.ke;if(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if(d>i)i=d;b.kR=i;if(BY(f,BR))f.bz();}else if(BY(f,BR))f.bz();}return j;}f:{try{Ix(a,b,0);if(AJm(b))break f;j=FH(b);}catch($$e){$$je=Bs($$e);b=$$je;break c;}g=f.jM;d=0;i=f.jA;b=null;if(d>i){b=new Bk;b.jx=1;b.jy=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jA=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BJ;c.jO=e;m=c;e.classObject=m;}}d
=B3(b,c);b=d<0?null:b.kD.data[d];if(b!==null){c=b.ke;if(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if(d>i)i=d;b.kR=i;if(BY(f,BR))f.bz();}else if(BY(f,BR))f.bz();}return j;}g:{try{if(!H2(b))break g;j=FH(b);}catch($$e){$$je=Bs($$e);b=$$je;break c;}g=f.jM;d=0;i=f.jA;b=null;if(d>i){b=new Bk;b.jx=1;b.jy=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jA=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BJ;c.jO=e;m=c;e.classObject=m;}}d=B3(b,c);b=d<0?null:b.kD.data[d];if(b!==null){c=b.ke;if
(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if(d>i)i=d;b.kR=i;if(BY(f,BR))f.bz();}else if(BY(f,BR))f.bz();}return j;}try{j=0;d=f.jA;}catch($$e){$$je=Bs($$e);b=$$je;break c;}h:{try{while(j<d){Ix(g.data[j],b,0);if(H2(b))break h;j=j+1|0;}j=FH(b);}catch($$e){$$je=Bs($$e);b=$$je;break c;}g=f.jM;d=0;i=f.jA;b=null;if(d>i){b=new Bk;b.jx=1;b.jy=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jA=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BJ;c.jO=e;m=c;e.classObject=m;}}d=B3(b,c);b=d<
0?null:b.kD.data[d];if(b!==null){c=b.ke;if(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if(d>i)i=d;b.kR=i;if(BY(f,BR))f.bz();}else if(BY(f,BR))f.bz();}return j;}try{j=FH(b);}catch($$e){$$je=Bs($$e);b=$$je;break c;}g=f.jM;d=0;i=f.jA;b=null;if(d>i){b=new Bk;b.jx=1;b.jy=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jA=0;b=BW;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BJ;c.jO=e;m=c;e.classObject=m;}}d=B3(b,c);b=d<0?null:b.kD.data[d];if(b!==null){c=b.ke;if(c.jA<b.k1){BL(c,f);d=b.kR;i=b.ke.jA;if
(d>i)i=d;b.kR=i;if(BY(f,BR))f.bz();}else if(BY(f,BR))f.bz();}return j;}g=f.jM;j=0;d=f.jA;c=null;if(j>d){b=new Bk;b.jx=1;b.jy=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.jA=0;if(f===null){f=new Bk;f.jx=1;f.jy=1;f.jz=A(28);B(f);}c=BW;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BJ;e.jO=m;k=e;m.classObject=k;}}j=B3(c,e);c=j<0?null:c.kD.data[j];if(c!==null){e=c.ke;if(e.jA<c.k1){BL(e,f);j=c.kR;d=c.ke.jA;if(j>d)d=j;c.kR=d;if(BY(f,BR))f.bz();}else if(BY(f,BR))f.bz();}B(b);},
Ix=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.lH===null){b=new Bk;b.jx=1;b.jy=1;b.jz=A(29);B(b);}d=!c?a.uZ:a.vY;if(!d.jA)return b.lg;b.lR=a;b.lZ=c;if(b.k2===null)b.k2=a.kP;a:{try{ALA(d);e=0;f=d.jA;while(e<f){if((Gw(d,e)).bq(b))APY(b);e=e+1|0;}ANx(d);}catch($$e){$$je=Bs($$e);if($$je instanceof Bz){g=$$je;break a;}else{throw $$e;}}return b.lg;}h=a.T();d=new Bz;b=new J;b.jw=G(16);F(b,b.ju,A(27));i=h.jv.length;e=128;if(i<e)e=i;h=Cu(h,0,e);F(b,b.ju,h);h=new H;j=b.jw;k=j.data;e=b.ju;f=k.length;if(e>=0&&e<=(f-0|0)){h.jv
=K(j.data,0,e);d.jx=1;d.jy=1;d.jz=h;d.lk=g;B(d);}b=new I;b.jx=1;b.jy=1;B(b);},
Q6=(a,b,c,d)=>{if(d&&a.sc!==MH)return null;if(!a.mB)return null;if(!(b>=0.0&&b<a.lO&&c>=0.0&&c<a.lM))a=null;return a;},
AS1=a=>{return a.kP;},
AM4=(a,b)=>{a.kP=b;},
AS6=(a,b)=>{a.kW=b;},
ASO=a=>{return a.mB;},
AVP=a=>{return;},
ASI=a=>{return;},
MM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.pY;d=a.o7;e=a.o8;f=a.kd;g=a.kc;if(c!==0.0){h=c*0.01745329238474369;i=XW(h);j=Um(h);k=a.pA;l=a.pB;m=b.kI-f-k;n=b.kH-g-l;b.kI=(m*i+n*j)/d+k;b.kH=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.kI=b.kI-f;b.kH=b.kH-g;}else{k=a.pA;l=a.pB;b.kI=(b.kI-f-k)/d+k;b.kH=(b.kH-g-l)/e+l;}return b;},
AMc=(a,b)=>{UF(a,b);},
UF=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.j5)return;c=Hv;d=b.l8;if(d!==c){if(d===null){b=new BX;b.jx=1;b.jy=1;b.jz=A(30);B(b);}if(!b.rt){c=new BX;c.jx=1;c.jy=1;c.jz=A(31);B(c);}Fw(b.kp);b.l8=null;Fz(b,c);}c=a.kP;if(c!==null){d=c.u4;c=b.tA;c.kj=d.kj;c.ki=d.ki;c.kh=d.kh;c.kg=d.kg;}e=a.kd;f=a.kc;g=a.pA;h=a.pB;i=a.lO;j=a.lM;k=a.o7;l=a.o8;m=a.pY;c=b.tA;AH6(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
EK=(a,b)=>{a.j5=b;if(b)BH=1;},
AUA=a=>{return a.j5;},
R8=a=>{let b,c,d,e;b=a.xC;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BJ;c.jO=b;d=c;b.classObject=d;}}if(c.jQ===null)c.jQ=W(c.jO.$meta.name);b=c.jQ;e=FK(b,46,b.jv.length-1|0);if(e!=(-1))b=Cu(b,e+1|0,b.jv.length);}return b;};
let LF=E(0);
function By(){let a=this;CI.call(a);a.jU=null;a.sh=null;a.s6=null;a.oD=null;a.mJ=0;a.x0=null;}
let KK=null;
let QP=(a,b)=>{let c,d,e,f;J5(a,b);c=a.jU;Dc(c);d=c.jM;c.nL=d;c.ms=c.ms+1|0;d=d;e=0;f=a.jU.jA;while(e<f){d.data[e].be(b);e=e+1|0;}GP(a.jU);},
AGN=(a,b,c)=>{let d;if(a.mJ){d=J4(a);CZ(a.oD,b.n8.kv);if(b.lC)DO(b);CZ(b.n8,d.kv);if(b.lC)FU(b);}Pm(a,b,c);if(a.mJ){d=a.oD;if(b.lC)DO(b);CZ(b.n8,d.kv);if(b.lC)FU(b);}},
Pm=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.r3.kg;d=a.jU;Dc(d);e=d.jM;d.nL=e;d.ms=d.ms+1|0;f=e;g=a.x0;if(g===null){if(a.mJ){h=0;i=d.jA;while(h<i){j=f.data[h];if(j.mB)j.bL(b,c);h=h+1|0;}}else{k=a.kd;l=a.kc;a.kd=0.0;a.kc=0.0;h=0;i=d.jA;while(h<i){j=f.data[h];if(j.mB){m=j.kd;n=j.kc;j.kd=m+k;j.kc=n+l;j.bL(b,c);j.kd=m;j.kc=n;}h=h+1|0;}a.kd=k;a.kc=l;}}else{o=g.yB;p=o+g.yR;q=g.yA;r=q+g.xp;if(a.mJ){s=0;i=d.jA;while(s<i){j=f.data[s];if(j.mB){m=j.kd;n=j.kc;if(m<=p&&n<=r&&m+j.lO>=o&&n+j.lM>=q)j.bL(b,c);}s=s
+1|0;}}else{k=a.kd;l=a.kc;a.kd=0.0;a.kc=0.0;s=0;i=d.jA;while(s<i){j=f.data[s];if(j.mB){m=j.kd;n=j.kc;if(m<=p&&n<=r&&m+j.lO>=o&&n+j.lM>=q){j.kd=m+k;j.kc=n+l;j.bL(b,c);j.kd=m;j.kc=n;}}s=s+1|0;}a.kd=k;a.kc=l;}}GP(d);},
Oh=(a,b)=>{let c;UF(a,b);if(a.mJ){c=J4(a);CZ(a.oD,b.p9.kv);CZ(b.p9,c.kv);b.nJ=1;c=b.l8;if(c!==null){Fw(b.kp);b.l8=null;Fz(b,c);}}Zj(a,b);if(a.mJ){c=a.oD;CZ(b.p9,c.kv);b.nJ=1;}},
Zj=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.jU;Dc(c);d=c.jM;c.nL=d;c.ms=c.ms+1|0;e=d;if(a.mJ){f=0;g=c.jA;while(f<g){h=e.data[f];if(h.mB&&!(!h.j5&&!(h instanceof By)))h.Z(b);f=f+1|0;}h=b.l8;if(h!==null){Fw(b.kp);b.l8=null;Fz(b,h);}}else{i=a.kd;j=a.kc;a.kd=0.0;a.kc=0.0;k=0;g=c.jA;while(k<g){h=e.data[k];if(h.mB&&!(!h.j5&&!(h instanceof By))){l=h.kd;m=h.kc;h.kd=l+i;h.kc=m+j;h.Z(b);h.kd=l;h.kc=m;}k=k+1|0;}a.kd=i;a.kc=j;}GP(c);},
J4=a=>{let b,c,d,e,f;b=a.sh;c=a.pA;d=a.pB;AFp(b,a.kd+c,a.kc+d,a.pY,a.o7,a.o8);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.n3=b.n3+b.n4*c+b.n2*e;b.n5=b.n5+b.n6*c+b.n7*e;}f=a.kW;a:{while(true){if(f===null)break a;if(f.mJ)break;f=f.kW;}}if(f!==null)Zo(b,f.sh);AOU(a.s6,b);return a.s6;},
ME=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.sc===Vl)return null;if(!a.mB)return null;e=KK;f=a.jU;g=f.jM;h=f.jA-1|0;while(true){if(h<0)return Q6(a,b,c,d);i=g.data[h];e.kI=b;e.kH=c;MM(i,e);f=i.J(e.kI,e.kH,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AMF=(a,b)=>{let c,d,e,f;a.kP=b;c=a.jU;d=c.jM;e=0;f=c.jA;while(e<f){d.data[e].x(b);e=e+1|0;}},
KT=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.j5=b;if(b)BH=1;a:{if(c){d=a.jU;if(!Cw){if(d.j4===null){e=new CU;e.ln=d;e.lp=1;d.j4=e;}e=CD(d.j4);}else{e=new Cp;e.kb=1;e.kf=d;e.lc=1;}b:while(true){if(!e.kb){e=new Q;e.jx=1;e.jy=1;e.jz=A(17);B(e);}if(!(e.kV>=e.kf.jA?0:1))break a;d=Ck(e);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else{d=d;d.j5=b;if(b)BH=1;c:{if(c){d=d.jU;if(Cw){f=new Cp;f.kb=1;f.kf=d;f.lc=1;}else{if(d.j4===null){g=new CU;g.ln=d;g.lp=1;d.j4=g;}f=CD(d.j4);}while(true){if(!f.kb){e=new Q;e.jx=1;e.jy=1;e.jz=A(17);B(e);}if
(!(f.kV>=f.kf.jA?0:1))break c;d=Ck(f);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else{d=d;d.j5=b;if(b)BH=1;d:{if(c){d=d.jU;if(Cw){h=new Cp;h.kb=1;h.kf=d;h.lc=1;}else{if(d.j4===null){g=new CU;g.ln=d;g.lp=1;d.j4=g;}h=CD(d.j4);}while(true){if(!h.kb){e=new Q;e.jx=1;e.jy=1;e.jz=A(17);B(e);}if(!(h.kV>=h.kf.jA?0:1))break d;d=Ck(h);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else{d=d;d.j5=b;if(b)BH=1;e:{if(c){d=d.jU;if(Cw){i=new Cp;i.kb=1;i.kf=d;i.lc=1;}else{if(d.j4===null){g=new CU;g.ln=d;g.lp=1;d.j4=g;}i=CD(d.j4);}while
(true){if(!i.kb){e=new Q;e.jx=1;e.jy=1;e.jz=A(17);B(e);}if(!(i.kV>=i.kf.jA?0:1))break e;d=Ck(i);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else{d=d;d.j5=b;if(b)BH=1;f:{if(c){d=d.jU;if(Cw){j=new Cp;j.kb=1;j.kf=d;j.lc=1;}else{if(d.j4===null){g=new CU;g.ln=d;g.lp=1;d.j4=g;}j=CD(d.j4);}while(true){if(!j.kb){e=new Q;e.jx=1;e.jy=1;e.jz=A(17);B(e);}if(!(j.kV>=j.kf.jA?0:1))break f;d=Ck(j);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else{d=d;d.j5=b;if(b)BH=1;g:{if(c){d=d.jU;if(Cw){g=new Cp;g.kb=1;g.kf=d;g.lc=1;}else{if(d.j4
===null){g=new CU;BA(g);g.ln=d;g.lp=1;d.j4=g;}g=CD(d.j4);}while(true){if(!g.kb){e=new Q;e.jx=1;e.jy=1;e.jz=A(17);B(e);}if(!(g.kV>=g.kf.jA?0:1))break g;d=Ck(g);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else{d=d;d.j5=b;if(b)BH=1;h:{if(c){d=d.jU;if(Cw){k=new Cp;BA(k);k.kb=1;k.kf=d;k.lc=1;}else{if(d.j4===null)d.j4=K4(d,1);k=CD(d.j4);}while(true){if(!k.kb){e=new Q;Gv(e,A(17));B(e);}if(!(k.kV>=k.kf.jA?0:1))break h;d=Ck(k);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else{d=d;d.j5=b;if(b)BH=1;i:{if(c){d=d.jU;if(Cw)l=Lq(d,
1);else{if(d.j4===null)d.j4=M7(d);l=CD(d.j4);}while(true){if(!l.kb)break b;if(!(l.kV>=l.kf.jA?0:1))break i;d=Ck(l);if(!(d instanceof By)){d.j5=b;if(b)BH=1;}else j:{d=d;EK(d,b);if(c){d=FZ(d.jU);while(true){if(!G_(d))break j;m=Ck(d);if(!(m instanceof By))EK(m,b);else KT(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(JX(A(17)));}}},
AAP=a=>{let b,c,d,e,f;b=new J;b.jw=G(128);SZ(a,b,1);c=b.ju-1|0;b.ju=c;d=new H;e=b.jw;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.jv=K(e.data,0,c);return d;}b=new I;b.jx=1;b.jy=1;B(b);},
SZ=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=R8(a);F(b,b.ju,d);e=b.ju;Bd(b,e,e+1|0);b.jw.data[e]=10;d=a.jU;Dc(d);f=d.jM;d.nL=f;d.ms=d.ms+1|0;g=f;h=0;i=a.jU.jA;j=c+1|0;while(h<i){k=0;while(k<c){F(b,b.ju,A(32));k=k+1|0;}d=g.data[h];if(d instanceof By)SZ(d,b,j);else{F(b,b.ju,d===null?A(2):d.T());e=b.ju;Bd(b,e,e+1|0);b.jw.data[e]=10;}h=h+1|0;}GP(a.jU);},
ATT=()=>{KK=new Bj;};
let F0=E(0);
let Dp=E(0);
let GE=E();
let Gi=E(0);
let BV=E();
let Sa=null;
let AVp=()=>{Sa=new Bj;};
let GV=E(BV);
let AKK=E(GV);
let Go=E(Bx);
let Lz=null,MR=null,TP=null;
let XT=()=>{let b,c;b=new Go;b.jJ=A(33);b.jE=0;Lz=b;c=new Go;c.jJ=A(34);c.jE=1;MR=c;TP=P(Go,[b,c]);};
let Mw=E(0);
let Ip=E(0);
let Gg=E(0);
let Dn=E();
let ANP=E(Dn);
let Mk=E(GE);
let LW=E();
let S0=null,S4=null;
let ATv=()=>{S0=new Bj;S4=new Bj;};
let ABT=E();
let Wy=E();
let Ve=E(0);
let K3=E();
let AJ$=E(K3);
function CK(){let a=this;Fh.call(a);a.qZ=0;a.vO=null;a.nz=null;}
let Rd=a=>{a.lE=1;},
AVv=()=>{let a=new CK();Rd(a);return a;},
Vr=a=>{a.k2=null;a.lH=null;a.lR=null;a.lZ=0;a.lE=1;a.lT=0;a.lU=0;a.lg=0;a.nz=null;};
let QB=E();
let WV=null;
let VD=()=>{VD=BG(QB);AHF();};
let AHF=()=>{let b,c;b=U((TP.p()).data.length);c=b.data;WV=b;c[Lz.jE]=1;c[MR.jE]=2;};
let AH_=E();
let SA=E();
let VQ=null;
let Rg=()=>{Rg=BG(SA);AAh();};
let AAh=()=>{let b,c;b=U((Kn.p()).data.length);c=b.data;VQ=b;c[Kt.jE]=1;c[H1.jE]=2;c[KY.jE]=3;};
let ANO=E(Dn);
let E0=E();
let Sv=E(E0);
let Vn=E();
let ANz=0,AQI=0,AIa=0,AQX=0,AEi=0;
let Tq=()=>{Tq=BG(Vn);AQy();};
let AQy=()=>{ANz=CY(W(navigator.platform),A(7));AQI=CY(W(navigator.platform),A(8));AIa=CY(W(navigator.platform),A(9));AQX=!CY(W(navigator.platform),A(10))&&!CY(W(navigator.platform),A(11))?0:1;AEi=!CY(W(navigator.platform),A(12))&&!CY(W(navigator.platform),A(13))&&!CY(W(navigator.platform),A(14))?0:1;};
let Lf=E();
let AQl=E(GV);
let RC=null;
let AT4=()=>{RC=new Bj;};
let ADd=E();
let RP=null;
let AVB=()=>{RP=new Bj;};
let T6=E();
let ABz=null,XH=null,ARg=null;
let UM=()=>{UM=BG(T6);AM5();};
let AM5=()=>{let b;b=new Bu;b.kr=1;b.jM=S(C,16);ABz=b;b=new Bg;CH();XH=b;ARg=new ER;};
let Mq=E();
let Ib=E(E0);
let U_=E(E0);
let DP=E(BV);
let Uk=0.0;
let AVc=()=>{Uk=0.10000000149011612;};
let U3=E(Ib);
let AAw=E(Fh);
let JY=E(0);
function BQ(){let a=this;Fh.call(a);a.p6=null;a.rP=0.0;a.rQ=0.0;a.rV=0;a.mT=0;a.mw=null;a.ya=0;}
let RB=a=>{a.lE=1;a.ya=1;},
ATS=()=>{let a=new BQ();RB(a);return a;},
Po=a=>{a.k2=null;a.lH=null;a.lR=null;a.lZ=0;a.lE=1;a.lT=0;a.lU=0;a.lg=0;a.mw=null;a.mT=(-1);},
NX=a=>{return a.p6.jJ;};
function Qu(){let a=this;C.call(a);a.xG=null;a.uO=null;a.wP=null;a.xo=0;a.xW=0;}
let Nf=E();
let ZI=null;
let RD=()=>{RD=BG(Nf);APg();};
let APg=()=>{let b,c;b=U((Kn.p()).data.length);c=b.data;ZI=b;c[Om.jE]=1;c[RT.jE]=2;c[Up.jE]=3;c[Kt.jE]=4;c[H1.jE]=5;c[KY.jE]=6;c[Pd.jE]=7;c[PX.jE]=8;c[Mp.jE]=9;c[Ij.jE]=10;};
let Db=E(Bx);
let Kt=null,H1=null,KY=null,Pd=null,Mp=null,Ij=null,PX=null,Om=null,RT=null,Up=null,Kn=null;
let AAc=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Db;b.jJ=A(35);b.jE=0;Kt=b;c=new Db;c.jJ=A(36);c.jE=1;H1=c;d=new Db;d.jJ=A(37);d.jE=2;KY=d;e=new Db;e.jJ=A(38);e.jE=3;Pd=e;f=new Db;f.jJ=A(39);f.jE=4;Mp=f;g=new Db;g.jJ=A(40);g.jE=5;Ij=g;h=new Db;h.jJ=A(41);h.jE=6;PX=h;i=new Db;i.jJ=A(42);i.jE=7;Om=i;j=new Db;j.jJ=A(43);j.jE=8;RT=j;k=new Db;k.jJ=A(44);k.jE=9;Up=k;Kn=P(Db,[b,c,d,e,f,g,h,i,j,k]);};
let Cb=E();
let Ey=E(Cb);
let AE$=E(Ey);
let AJM=E(Ey);
let CO=E(Cb);
let En=E(CO);
let WW=E(En);
let Zd=E();
let M2=E(Cb);
let AAN=E(M2);
let AC7=E(Cb);
let AHi=E(Cb);
let AL6=E(Cb);
let AMV=E();
let K$=E(Cb);
let AGF=E(K$);
let ABv=E(CO);
let ANJ=E(CO);
let AOj=E(En);
let AKv=E(Cb);
let AK2=E(En);
let APZ=E(CO);
let APh=E(CO);
let ADF=E(Cb);
let AGb=E(CO);
let AGr=E(Cb);
let AD_=E(Cb);
let AGI=E(Ey);
let XP=E(CO);
let AP8=E(Cb);
let AJ2=E(En);
let ADS=E(Ey);
let AJe=E(Cb);
let Zf=E(CO);
let AFL=E(CO);
let AAq=E();
let AFE=null;
let ARl=()=>{AFE=P(BJ,[V(Qg),V(BD),V(RU),V(Sv),V(U_),V(Ib),V(U3),V(F7),V(Rc),V(T7),V(Tm),V(QC),V(UQ),V(Jl),V(U2),V(Sx),V(N8),V(UH),V(Gr),V(RK),V(TZ),V(RE),V(QR),V(Ot)]);};
let C0=E(By);
let D6=E(C0);
let Yu=null,AGj=null,AMU=null,ARF=null,AJx=null,V9=null,ACT=null,AI5=null;
let P7=()=>{P7=BG(D6);ANo();};
let ANo=()=>{let b,c;b=new BD;b.kj=0.0;b.ki=0.0;b.kh=1.0;b.kg=1.0;CN(b);Yu=b;b=new BD;b.kj=1.0;b.ki=0.0;b.kh=0.0;b.kg=1.0;CN(b);AGj=b;b=new BD;b.kj=0.0;b.ki=1.0;b.kh=0.0;b.kg=1.0;CN(b);AMU=b;b=new U8;c=new Bu;c.kr=0;c.jM=S(C,16);b.ke=c;b.k1=2147483647;ARF=b;b=new U7;HT();AJx=b;V9=new U6;ACT=new U5;AI5=new U4;};
let FA=E(D6);
let KW=E(FA);
let ABn=E(KW);
let ANL=E(BV);
let LU=E(C0);
let Rn=E(0);
let Ee=E();
let ADv=E(Ee);
let C9=E(CI);
let X9=E(C9);
let ANK=E(BV);
let BZ=E();
let AO1=null,AMb=null,ANH=null,ABS=null,AGP=null,AE4=null,AL7=null;
let HT=()=>{HT=BG(BZ);YH();};
let YH=()=>{let b;b=new IK;HT();b.x2=0.0;AO1=b;AMb=new SH;ANH=new SE;ABS=new SD;AGP=new SG;AE4=new SF;AL7=new SC;};
let SG=E(BZ);
let AJ_=E(BZ);
let JR=E(DP);
let AGx=E(JR);
let U6=E(BZ);
let APL=E(BV);
let Lt=E(D6);
let SN=null,SX=null;
let ASZ=()=>{SN=new Bj;SX=new Bj;};
let AKa=E(BZ);
let FY=E(0);
function ER(){let a=this;C.call(a);a.yB=0.0;a.yA=0.0;a.yR=0.0;a.xp=0.0;}
let PH=null,Sq=null;
let AUY=()=>{PH=new ER;Sq=new ER;};
let Dw=E(ER);
let VK=null;
let Jn=()=>{Jn=BG(Dw);NW();};
let Sh=a=>{Jn();},
ASP=()=>{let a=new Dw();Sh(a);return a;},
NW=()=>{let b,c,d,e,f,g,h,$$je;Dy();b=BW;c=B3(b,V(Dw));b=c<0?null:b.kD.data[c];if(b===null){b=new DS;d=new Bu;d.kr=0;d.jM=S(C,4);b.ke=d;b.k1=100;a:{try{d=Ef(V(Dw),null);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{d=Ea(V(Dw),null);Eo(d,1);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}d=null;}b.k4=d;if(d===null){b=new Bz;d=new J;d.jw=G(16);F(d,d.ju,A(21));if(V(Dw).jQ===null)V(Dw).jQ=W(V(Dw).jO.$meta.name);e=V(Dw).jQ;F(d,d.ju,e);e=new H;f=d.jw;g=f.data;c
=d.ju;h=g.length;if(c>=0&&c<=(h-0|0)){e.jv=K(f.data,0,c);b.jx=1;b.jy=1;b.jz=e;B(b);}e=new I;e.jx=1;e.jy=1;B(e);}C5(BW,V(Dw),b);}VK=b;};
let ADz=E(Ee);
let L9=E(C9);
let P$=null,P_=null,Qa=null,Sd=0.0,Nz=0.0;
let AVu=()=>{P$=new Bj;P_=new Bj;Qa=new Bj;Sd=0.4000000059604645;Nz=0.10000000149011612;};
let ABD=E(L9);
let AFP=E(BV);
let Py=E(0);
let AL_=E();
let F7=E();
let Gr=E(F7);
let Tm=E(Gr);
let Mc=E(C9);
let AER=E(Mc);
let ARB=E(LU);
let J0=E(C0);
let ASh=E(FA);
let MA=E(C9);
let U4=E(BZ);
let TZ=E();
let AD6=E();
let AGB=E(BV);
let AIi=E(Dn);
let AFc=E();
let ALI=E(BV);
let ARh=E(DP);
let AFN=E(LW);
let SC=E(BZ);
let SF=E(BZ);
let R9=E(0);
let Jl=E();
let N8=E(Jl);
let ADw=E(Ee);
let ANI=E(Lf);
let ANM=E(Mq);
let APM=E(BV);
let APN=E(DP);
let U5=E(BZ);
let N0=E();
let AD0=null,AJo=null,ADY=null,AJn=null,V5=null,ZJ=null,AIX=null,Ww=null,ALB=null;
let To=()=>{To=BG(N0);AAx();};
let AAx=()=>{let b;b=new MS;b.uc=0.0;AD0=b;b=new MS;b.uc=1.0;AJo=b;EB();ADY=DV.data[128];EB();b=DV.data[129];AJn=b;V5=b;EB();ZJ=DV.data[130];EB();AIX=DV.data[132];EB();Ww=DV.data[136];EB();ALB=DV.data[144];};
let Rc=E(Gr);
let AF2=E(BV);
let Yw=E(Dn);
let SH=E(BZ);
let ABZ=E(C0);
let AFO=E(BV);
let RE=E();
function IK(){BZ.call(this);this.x2=0.0;}
let Ox=null;
let AVg=()=>{Ox=S(IK,111);};
let AD7=E(J0);
let SD=E(BZ);
let AHa=E(C9);
let TW=null;
let AVj=()=>{TW=new Bj;};
let AFW=E(Mk);
let UH=E();
let Ok=E(C9);
let X3=null,ACf=null;
let TF=()=>{TF=BG(Ok);XK();};
let XK=()=>{let b,c;X3=new BD;b=new JP;LG();c=new Bu;c.kr=1;c.jM=S(C,1);b.xN=c;c=new Fo;c.oo=1;c.lN=U(2);b.wZ=c;ACf=b;};
let Ot=E();
let AKc=E(BZ);
let U7=E(BZ);
let AM2=E(Lt);
let SE=E(BZ);
let QC=E();
let AQ8=E();
let Fb=E(Bx);
let Ik=null,Yj=null,AKH=null,WI=null,Zl=null,AMj=null;
let AK5=()=>{let b,c,d,e,f;b=new Fb;b.jJ=A(45);b.jE=0;Ik=b;c=new Fb;c.jJ=A(46);c.jE=1;Yj=c;d=new Fb;d.jJ=A(47);d.jE=2;AKH=d;e=new Fb;e.jJ=A(48);e.jE=3;WI=e;f=new Fb;f.jJ=A(49);f.jE=4;Zl=f;AMj=P(Fb,[b,c,d,e,f]);};
let ARp=E(BZ);
let AFC=E(Dn);
function C8(){let a=this;C.call(a);a.k1=0;a.kR=0;a.ke=null;}
let U8=E(C8);
let Yl=E();
let UQ=E();
let RU=E();
let Sx=E();
let My=E(BV);
let QZ=null;
let ASG=()=>{QZ=new Bj;};
let Yv=E(Dn);
let APO=E(MA);
let Yo=E(0);
let AF3=E(BV);
let AR$=E(C0);
let AJJ=E(C0);
let AFY=E(DP);
let Mo=E();
let ADu=E(Mo);
let APo=E(CI);
let Xy=E(BV);
let ANn=E(FA);
let AIO=E(BV);
let AQP=E(DP);
let T7=E(F7);
let AJQ=E(C0);
let RK=E();
let QR=E();
let AIq=E(C9);
let ARi=E(GE);
let XA=E(BV);
let ALp=E(C0);
let Rt=null;
let AT9=()=>{Rt=new Bj;};
let ARz=E(My);
let XB=E(D6);
let ADx=E(Ee);
let VS=E();
let U2=E();
let Uz=E();
let Za=null,XS=null,ZP=null,AP0=null,AP2=null,AP1=null,ABY=null,ADf=null,AQE=null,XF=null,AP$=null;
let UB=()=>{UB=BG(Uz);AHV();};
let AHV=()=>{let b;Za=B_(16);b=new D4;b.nu=0.0;b.nr=0.0;b.ns=0.0;b.nt=1.0;XS=b;b=new D4;b.nu=0.0;b.nr=0.0;b.ns=0.0;b.nt=1.0;ZP=b;b=new Bg;CH();AP0=b;AP2=new Bg;AP1=new Bg;ABY=new Bg;ADf=CX();AQE=new Bg;XF=new Bg;AP$=new Bg;};
let BF=E();
let YG=null,AMJ=null,ABJ=null,AMS=null,AAY=null,ACO=null,AGC=null,WH=null,AGY=null,AAX=null,AIs=null,ACd=null,ACN=null,XQ=null,Wt=null,ALT=null,AEa=null,ACQ=null,AA2=null,ALv=null,ACP=null,APj=null,ACU=null,AHe=null,AOZ=null,AHN=null,VP=null,WE=null,AMD=null,ADh=null,ARI=null,AKQ=null,APG=null,AF7=null,ALN=null,AR9=null,AES=null,AFa=null,WK=null,ANi=null,ARO=null,APW=null,AK3=null,ARZ=null;
let I7=()=>{I7=BG(BF);YZ();};
let YZ=()=>{let b,c;b=new Th;I7();YG=b;AMJ=new S_;ABJ=new S$;b=new Tb;AMS=b;AAY=b;b=new Eg;b.mA=2;ACO=b;b=new Ht;b.mA=2;AGC=b;WH=b;b=new Hm;b.mA=2;AGY=b;AAX=b;AIs=new Ta;ACd=new Td;b=new Eg;b.mA=3;ACN=b;b=new Ht;b.mA=3;XQ=b;b=new Hm;b.mA=3;Wt=b;ALT=new Tc;AEa=new Tf;b=new Eg;b.mA=4;ACQ=b;b=new Ht;b.mA=4;AA2=b;b=new Hm;b.mA=4;ALv=b;b=new Eg;b.mA=5;ACP=b;b=new Ht;b.mA=5;APj=b;b=new Hm;b.mA=5;ACU=b;AHe=new Te;AOZ=new Sk;AHN=new Sm;b=new Fv;b.o$=2.0;b.pn=10.0;c=Ga(2.0,(-10.0));b.pI=c;b.ps=1.0/(1.0-c);VP=b;b=new Ll;b.o$
=2.0;b.pn=10.0;c=Ga(2.0,(-10.0));b.pI=c;b.ps=1.0/(1.0-c);WE=b;b=new MY;b.o$=2.0;b.pn=10.0;c=Ga(2.0,(-10.0));b.pI=c;b.ps=1.0/(1.0-c);AMD=b;b=new Fv;b.o$=2.0;b.pn=5.0;c=Ga(2.0,(-5.0));b.pI=c;b.ps=1.0/(1.0-c);ADh=b;b=new Ll;b.o$=2.0;b.pn=5.0;c=Ga(2.0,(-5.0));b.pI=c;b.ps=1.0/(1.0-c);ARI=b;b=new MY;b.o$=2.0;b.pn=5.0;c=Ga(2.0,(-5.0));b.pI=c;b.ps=1.0/(1.0-c);AKQ=b;APG=new Sn;AF7=new So;ALN=new Sp;b=new Ge;b.tS=2.0;b.so=10.0;b.ss=1.0;b.sP=(-21.99114990234375);AR9=b;b=new Ob;b.tS=2.0;b.so=10.0;b.ss=1.0;b.sP=18.84955596923828;AES
=b;b=new QJ;b.tS=2.0;b.so=10.0;b.ss=1.0;b.sP=(-21.99114990234375);AFa=b;b=new QL;b.xk=3.0;WK=b;b=new OO;b.yS=2.0;ANi=b;b=new US;b.xX=2.0;ARO=b;b=new P6;KQ(b,4);APW=b;b=new Q9;KQ(b,4);AK3=b;ARZ=AA$(4);};
function OO(){BF.call(this);this.yS=0.0;}
let AFF=E();
let Tc=E(BF);
let AQg=E();
function Eg(){BF.call(this);this.mA=0;}
let Ht=E(Eg);
let Hm=E(Eg);
let IW=E(0);
let AAR=E();
let Tf=E(BF);
let AN0=E();
let Tb=E(BF);
function Ge(){let a=this;BF.call(a);a.tS=0.0;a.so=0.0;a.ss=0.0;a.sP=0.0;}
let Ta=E(BF);
let S_=E(BF);
let AKg=E();
let Vs=null,Vu=null,Vt=null;
let AS$=()=>{Vs=new Bj;Vu=new Bj;Vt=new Bj;};
let Wx=E(C8);
let IB=E(0);
function Bj(){let a=this;C.call(a);a.kI=0.0;a.kH=0.0;}
let N2=null,N1=null,Qq=null;
let AS4=()=>{let b;b=new Bj;b.kI=1.0;b.kH=0.0;N2=b;b=new Bj;b.kI=0.0;b.kH=1.0;N1=b;b=new Bj;b.kI=0.0;b.kH=0.0;Qq=b;};
let So=E(BF);
function Fv(){let a=this;BF.call(a);a.o$=0.0;a.pn=0.0;a.pI=0.0;a.ps=0.0;}
let AIm=E();
let Th=E(BF);
let MY=E(Fv);
let AD2=E();
let G4=E(Bx);
let ABs=null,AEj=null,ANu=null,AIS=null;
let APS=()=>{let b,c,d;b=new G4;b.jJ=A(50);b.jE=0;ABs=b;c=new G4;c.jJ=A(51);c.jE=1;AEj=c;d=new G4;d.jJ=A(52);d.jE=2;ANu=d;AIS=P(G4,[b,c,d]);};
let RQ=E();
let AP4=null;
let Rj=()=>{Rj=BG(RQ);AGH();};
let AGH=()=>{let b;b=new Bg;CH();AP4=b;};
function Gz(){let a=this;BF.call(a);a.xI=null;a.xb=null;}
let KQ=(a,b)=>{let c,d,e,f,g,h,i,j;I7();if(b>=2&&b<=5){a:{c=B_(b);a.xI=c;d=B_(b);e=d.data;a.xb=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bk;g=new J;g.jw=G(16);F(g,g.ju,A(53));L(g,g.ju,b,10);h=new H;c=g.jw;d=c.data;i=g.ju;j=d.length;if(i>=0&&i<=(j-0|0)){h.jv=K(c.data,0,i);f.jx=1;f.jy=1;f.jz=h;B(f);}g=new I;g.jx
=1;g.jy=1;B(g);},
AA$=a=>{let b=new Gz();KQ(b,a);return b;};
let Q9=E(Gz);
let Sk=E(BF);
function Sb(){let a=this;C.call(a);a.n4=0.0;a.n2=0.0;a.n3=0.0;a.n6=0.0;a.n7=0.0;a.n5=0.0;}
let AFp=(a,b,c,d,e,f)=>{let g,h,i;a.n3=b;a.n5=c;if(d===0.0){a.n4=e;a.n2=0.0;a.n6=0.0;a.n7=f;}else{Gf();g=FM.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.n4=i*e;a.n2= -h*f;a.n6=h*e;a.n7=i*f;}return a;},
Zo=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.n4;d=a.n4;e=c*d;f=b.n2;g=a.n6;h=e+f*g;i=a.n2;e=c*i;j=a.n7;e=e+f*j;k=a.n3;l=c*k;m=a.n5;l=l+f*m+b.n3;c=b.n6;d=c*d;f=b.n7;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.n5;a.n4=h;a.n2=e;a.n3=l;a.n6=d;a.n7=j;a.n5=c;return a;};
let S$=E(BF);
function FJ(){let a=this;C.call(a);a.p4=0.0;a.p3=0.0;a.p5=0.0;a.p2=0.0;}
let AOI=null,AOF=null,AOG=null,AOH=null,AAl=null;
let ARj=()=>{let b;b=new FJ;b.p4=1.0;b.p3=0.0;b.p5=0.0;b.p2=0.0;AOI=b;b=new FJ;b.p4=0.0;b.p3=1.0;b.p5=0.0;b.p2=0.0;AOF=b;b=new FJ;b.p4=0.0;b.p3=0.0;b.p5=1.0;b.p2=0.0;AOG=b;b=new FJ;b.p4=0.0;b.p3=0.0;b.p5=0.0;b.p2=1.0;AOH=b;b=new FJ;b.p4=0.0;b.p3=0.0;b.p5=0.0;b.p2=0.0;AAl=b;};
let Ob=E(Ge);
function QL(){BF.call(this);this.xk=0.0;}
let AAA=E();
let ARU=E();
let Td=E(BF);
function US(){BF.call(this);this.xX=0.0;}
let Sp=E(BF);
let QJ=E(Ge);
let Vz=E();
let ACS=null,Xh=null,AQL=null;
let Pi=()=>{Pi=BG(Vz);W1();};
let W1=()=>{let b,c,d,e,f,g;ACS=S(Bg,15);b=S(Bg,8);Xh=b;c=S(Bg,9);d=c.data;AQL=c;e=0;f=d.length;while(e<f){g=new Bg;CH();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bg;CH();b[e]=g;e=e+1|0;}};
function JW(){let a=this;C.call(a);a.vy=null;a.vI=null;a.vc=null;a.vK=null;}
let ACo=null;
let Nc=()=>{Nc=BG(JW);AM8();};
let AKk=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.vy;e=b.jF;f=c.jF;if(e<f)f=e;e=b.jG;g=c.jG;if(e<g)g=e;e=b.jH;h=c.jH;if(e<h)h=e;d.jF=f;d.jG=g;d.jH=h;i=a.vI;e=b.jF;g=c.jF;if(e>g)g=e;e=b.jG;h=c.jG;if(e>h)h=e;e=b.jH;f=c.jH;if(e>f)f=e;i.jF=g;i.jG=h;i.jH=f;b=a.vc;h=d.jF;j=d.jG;k=d.jH;b.jF=h;b.jG=j;b.jH=k;e=i.jF;f=i.jG;g=i.jH;h=h+e;j=j+f;k=k+g;b.jF=h;b.jG=j;b.jH=k;f=h*0.5;g=j*0.5;e=k*0.5;b.jF=f;b.jG=g;b.jH=e;b=a.vK;g=i.jF;h=i.jG;j=i.jH;b.jF=g;b.jG=h;b.jH=j;e=d.jF;f=d.jG;k=d.jH;g=g-e;e=h-f;f=j-k;b.jF=g;b.jG=e;b.jH=f;return a;},
AM8=()=>{let b;b=new Bg;CH();ACo=b;};
function Lc(){let a=this;C.call(a);a.xf=null;a.yr=null;}
let WT=null;
let LI=()=>{LI=BG(Lc);ANh();};
let ANh=()=>{let b;b=new Bg;CH();WT=b;};
let AA0=E();
let W_=E();
let ALD=E();
let AE3=E();
let SP=E();
let AE0=null;
let Gf=()=>{Gf=BG(SP);AF$();};
let KF=b=>{let c;Gf();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AF$=()=>{let b,c,d,e;b=new Se;c=ACr(Fe(R(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),R(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(DK(c,B6))c=D(0, 2147483648);d=Y(HF(c,Bb(c,33)),D(3981806797, 4283543511));d=Y(HF(d,Bb(d,33)),D(444984403, 3301882366));e=HF(d,Bb(d,33));d=Y(HF(e,Bb(e,33)),D(3981806797, 4283543511));d=Y(HF(d,Bb(d,33)),D(444984403, 3301882366));d=HF(d,Bb(d,33));b.wT=e;b.wU=d;AE0=b;};
let Ud=E();
let Wh=null,Wi=null,Wj=null,AAF=null,AOe=null,AHj=null,X6=null,X7=null,AGW=null,AGR=null,ADD=null,ADG=null,ADH=null,ADJ=null,AGZ=null,AGU=null,AHv=null,AEO=null,AL$=null,AEq=null,APf=null,APe=null,APc=null,AFu=null;
let P3=()=>{P3=BG(Ud);AA5();};
let AA5=()=>{let b,c;b=new Bg;CH();Wh=b;Wi=new Bg;Wj=new Bg;b=new Gn;b.qG=1;b.qK=B_(16);AAF=b;b=new Gn;b.qG=1;b.qK=B_(16);AOe=b;AHj=new Bj;X6=new Bj;X7=new Bj;AGW=new Bj;AGR=new Bj;ADD=new Bj;ADG=new Bj;ADH=new Bj;ADJ=new Bj;b=new Ja;c=new Bg;b.l_=c;b.mS=0.0;c.jF=0.0;c.jG=0.0;c.jH=0.0;b.mS=0.0;AGZ=b;AGU=new Bg;AHv=new Bg;AEO=new Bg;AL$=new Bg;AEq=new Bg;APf=new Bg;APe=new Bg;APc=new Bg;AFu=new Bg;};
let YC=E();
let P6=E(Gz);
function KZ(){C.call(this);this.kv=null;}
let N5=null,AH1=null,AOQ=null,Ir=null,G9=null,Lb=null,UR=null,O1=null,AJL=null,ASa=null,AJO=null;
let DX=()=>{DX=BG(KZ);Xw();};
let AMn=a=>{let b,c;DX();b=B_(16);c=b.data;a.kv=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
CX=()=>{let a=new KZ();AMn(a);return a;},
CZ=(a,b)=>{let c;c=b.data;b=a.kv.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
R6=(a,b)=>{let c,d,e,f,g;DX();c=N5;d=c.data;e=a.kv.data;f=e[0];g=b.kv.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return CZ(a,c);},
Ky=a=>{let b;b=a.kv.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
LK=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Ky(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.kv.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
ACA=(a,b,c)=>{let d,e,f,g,h,i;DX();d=Ir;e=b.jF;f=b.jG;g=b.jH;d.jF=e;d.jG=f;d.jH=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Da(f);f=d.jF*e;g=d.jG*e;e=d.jH*e;d.jF=f;d.jG=g;d.jH=e;}d=G9;e=b.jF;f=b.jG;g=b.jH;d.jF=e;d.jG=f;d.jH=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Da(f);f=d.jF*e;g=d.jG*e;e=d.jH*e;d.jF=f;d.jG=g;d.jH=e;}b=Pn(G9,c);e=b.jF;e=e*e;f=b.jG;e=e+f*f;f=b.jH;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Da(e);h=b.jF*g;e=b.jG*g;f=b.jH*g;b.jF=h;b.jG=e;b.jH=f;}b=Lb;c=G9;e=c.jF;f=c.jG;g=c.jH;b.jF=e;b.jG=f;b.jH=g;b=Pn(b,
Ir);e=b.jF;e=e*e;f=b.jG;e=e+f*f;f=b.jH;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Da(f);f=b.jF*e;g=b.jG*e;e=b.jH*e;b.jF=f;b.jG=g;b.jH=e;}Ky(a);i=a.kv.data;b=G9;i[0]=b.jF;i[4]=b.jG;i[8]=b.jH;b=Lb;i[1]=b.jF;i[5]=b.jG;i[9]=b.jH;b=Ir;i[2]= -b.jF;i[6]= -b.jG;i[10]= -b.jH;return a;},
AOU=(a,b)=>{let c;c=a.kv.data;c[0]=b.n4;c[1]=b.n6;c[2]=0.0;c[3]=0.0;c[4]=b.n2;c[5]=b.n7;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.n3;c[13]=b.n5;c[14]=0.0;c[15]=1.0;return a;},
NI=(b,c)=>{let d,e,f;DX();d=b.data;c=c.data;e=B_(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Du(e,0,b,0,16);},
APB=b=>{DX();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
AC2=b=>{let c,d,e;DX();c=B_(16);d=APB(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AFj=(b,c,d)=>{let e,f,g,h,i,j,k,l;DX();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
Xw=()=>{let b;N5=B_(16);b=new D4;b.nu=0.0;b.nr=0.0;b.ns=0.0;b.nt=1.0;AH1=b;b=new D4;b.nu=0.0;b.nr=0.0;b.ns=0.0;b.nt=1.0;AOQ=b;b=new Bg;CH();Ir=b;G9=new Bg;Lb=new Bg;UR=new Bg;O1=CX();AJL=new Bg;ASa=new Bg;AJO=new Bg;};
let O0=E(0);
let LJ=E();
function Se(){let a=this;LJ.call(a);a.wT=B6;a.wU=B6;}
let Sn=E(BF);
let Te=E(BF);
function Mi(){let a=this;C.call(a);a.oL=null;a.nK=null;a.rM=null;}
let AR6=null,UJ=null,AJi=null;
let It=()=>{It=BG(Mi);AGT();};
let Xf=a=>{let b,c,d,e,f,g;It();b=S(Ja,6);c=b.data;a.oL=b;b=S(Bg,8);d=b.data;e=new Bg;CH();d[0]=e;d[1]=new Bg;d[2]=new Bg;d[3]=new Bg;d[4]=new Bg;d[5]=new Bg;d[6]=new Bg;d[7]=new Bg;a.nK=b;a.rM=B_(24);f=0;while(f<6){e=new Ja;g=new Bg;e.l_=g;e.mS=0.0;g.jF=0.0;g.jG=0.0;g.jH=0.0;e.mS=0.0;c[f]=e;f=f+1|0;}},
ALq=()=>{let a=new Mi();Xf(a);return a;},
AJ4=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;It();c=UJ;d=c.data;Du(c,0,a.rM,0,d.length);c=b.kv;e=a.rM;f=0;DX();g=0;while(g<8){AFj(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.nK.data[f];c=a.rM.data;j=h+1|0;i.jF=c[h];g=j+1|0;i.jG=c[j];h=g+1|0;i.jH=c[g];f=f+1|0;}b=a.oL.data[0];c=a.nK.data;i=c[1];k=c[0];l=c[2];m=b.l_;n=i.jF;o=i.jG;p=i.jH;m.jF=n;m.jG=o;m.jH=p;q=k.jF;r=k.jG;s=k.jH;t=n-q;u=o-r;p=p-s;m.jF=t;m.jG=u;m.jH=p;q=k.jF-l.jF;r=k.jG-l.jG;s=k.jH-l.jH;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jF=n;m.jG=s;m.jH
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Da(r);r=m.jF*q;s=m.jG*q;q=m.jH*q;m.jF=r;m.jG=s;m.jH=q;}k=b.l_;b.mS= -(i.jF*k.jF+i.jG*k.jG+i.jH*k.jH);b=a.oL.data[1];c=a.nK.data;i=c[4];k=c[5];l=c[7];m=b.l_;n=i.jF;o=i.jG;p=i.jH;m.jF=n;m.jG=o;m.jH=p;q=k.jF;r=k.jG;s=k.jH;t=n-q;u=o-r;p=p-s;m.jF=t;m.jG=u;m.jH=p;q=k.jF-l.jF;r=k.jG-l.jG;s=k.jH-l.jH;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jF=n;m.jG=s;m.jH=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Da(r);r=m.jF*q;s=m.jG*q;q=m.jH*q;m.jF=r;m.jG=s;m.jH=q;}k=b.l_;b.mS= -(i.jF*k.jF+i.jG
*k.jG+i.jH*k.jH);b=a.oL.data[2];c=a.nK.data;i=c[0];k=c[4];l=c[3];m=b.l_;n=i.jF;o=i.jG;t=i.jH;m.jF=n;m.jG=o;m.jH=t;r=k.jF;q=k.jG;s=k.jH;r=n-r;u=o-q;p=t-s;m.jF=r;m.jG=u;m.jH=p;q=k.jF-l.jF;s=k.jG-l.jG;n=k.jH-l.jH;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.jF=o;m.jG=n;m.jH=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Da(r);r=m.jF*q;s=m.jG*q;q=m.jH*q;m.jF=r;m.jG=s;m.jH=q;}k=b.l_;b.mS= -(i.jF*k.jF+i.jG*k.jG+i.jH*k.jH);b=a.oL.data[3];c=a.nK.data;k=c[5];i=c[1];l=c[6];m=b.l_;n=k.jF;t=k.jG;u=k.jH;m.jF=n;m.jG=t;m.jH=u;q=i.jF;r=i.jG;s
=i.jH;o=n-q;t=t-r;u=u-s;m.jF=o;m.jG=t;m.jH=u;p=i.jF-l.jF;q=i.jG-l.jG;r=i.jH-l.jH;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.jF=s;m.jG=r;m.jH=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Da(r);r=m.jF*q;s=m.jG*q;q=m.jH*q;m.jF=r;m.jG=s;m.jH=q;}i=b.l_;b.mS= -(k.jF*i.jF+k.jG*i.jG+k.jH*i.jH);b=a.oL.data[4];c=a.nK.data;i=c[2];k=c[3];l=c[6];m=b.l_;n=i.jF;o=i.jG;p=i.jH;m.jF=n;m.jG=o;m.jH=p;q=k.jF;r=k.jG;s=k.jH;t=n-q;u=o-r;p=p-s;m.jF=t;m.jG=u;m.jH=p;q=k.jF-l.jF;r=k.jG-l.jG;s=k.jH-l.jH;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jF=n;m.jG=s;m.jH
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Da(r);r=m.jF*q;s=m.jG*q;q=m.jH*q;m.jF=r;m.jG=s;m.jH=q;}k=b.l_;b.mS= -(i.jF*k.jF+i.jG*k.jG+i.jH*k.jH);b=a.oL.data[5];c=a.nK.data;i=c[4];k=c[0];l=c[1];m=b.l_;n=i.jF;o=i.jG;p=i.jH;m.jF=n;m.jG=o;m.jH=p;q=k.jF;r=k.jG;s=k.jH;t=n-q;u=o-r;p=p-s;m.jF=t;m.jG=u;m.jH=p;q=k.jF-l.jF;r=k.jG-l.jG;s=k.jH-l.jH;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jF=n;m.jG=s;m.jH=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Da(r);r=m.jF*q;s=m.jG*q;q=m.jH*q;m.jF=r;m.jG=s;m.jH=q;}k=b.l_;b.mS= -(i.jF*k.jF+i.jG
*k.jG+i.jH*k.jH);},
AGT=()=>{let b,c,d,e,f,g,h,i,j;b=S(Bg,8);c=b.data;d=new Bg;CH();d.jF=(-1.0);d.jG=(-1.0);d.jH=(-1.0);c[0]=d;d=new Bg;d.jF=1.0;d.jG=(-1.0);d.jH=(-1.0);c[1]=d;d=new Bg;d.jF=1.0;d.jG=1.0;d.jH=(-1.0);c[2]=d;d=new Bg;d.jF=(-1.0);d.jG=1.0;d.jH=(-1.0);c[3]=d;d=new Bg;d.jF=(-1.0);d.jG=(-1.0);d.jH=1.0;c[4]=d;d=new Bg;d.jF=1.0;d.jG=(-1.0);d.jH=1.0;c[5]=d;d=new Bg;d.jF=1.0;d.jG=1.0;d.jH=1.0;c[6]=d;d=new Bg;d.jF=(-1.0);d.jG=1.0;d.jH=1.0;c[7]=d;AR6=b;b=B_(24);e=b.data;UJ=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.jF;j=i+1|0;e[i]=d.jG;f=j+1|0;e[j]=d.jH;h=h+1|0;}AJi=new Bg;};
function D4(){let a=this;C.call(a);a.nu=0.0;a.nr=0.0;a.ns=0.0;a.nt=0.0;}
let QF=null,QE=null;
let ATN=()=>{let b;b=new D4;b.nu=0.0;b.nr=0.0;b.ns=0.0;b.nt=0.0;QF=b;b=new D4;b.nu=0.0;b.nr=0.0;b.ns=0.0;b.nt=0.0;QE=b;};
function Nv(){let a=this;C.call(a);a.xD=null;a.x5=null;a.xJ=null;}
let AJG=E();
function Bg(){let a=this;C.call(a);a.jF=0.0;a.jG=0.0;a.jH=0.0;}
let Z7=null,Z8=null,Z6=null,AIF=null,AQp=null;
let CH=()=>{CH=BG(Bg);Ye();};
let Pn=(a,b)=>{let c,d,e,f,g,h,i;c=a.jG;d=b.jH;e=c*d;f=a.jH;g=b.jG;h=e-f*g;e=b.jF;f=f*e;i=a.jF;d=f-i*d;c=i*g-c*e;a.jF=h;a.jG=d;a.jH=c;return a;},
AAv=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.kv.data;d=a.jF;e=d*c[3];f=a.jG;e=e+f*c[7];g=a.jH;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.jF=i;a.jG=j;a.jH=d;return a;},
Ye=()=>{let b;b=new Bg;CH();b.jF=1.0;b.jG=0.0;b.jH=0.0;Z7=b;b=new Bg;b.jF=0.0;b.jG=1.0;b.jH=0.0;Z8=b;b=new Bg;b.jF=0.0;b.jG=0.0;b.jH=1.0;Z6=b;b=new Bg;b.jF=0.0;b.jG=0.0;b.jH=0.0;AIF=b;AQp=CX();};
let AD5=E();
let AB5=E(C8);
let Ll=E(Fv);
let AKd=E();
let Y4=E();
let AOm=E();
function Ja(){let a=this;C.call(a);a.l_=null;a.mS=0.0;}
let Sm=E(BF);
let AOq=E();
let Zb=E();
let ALs=E();
let AOk=E();
let AI3=E(0);
let AEg=E();
let AMg=E();
let FM=null;
let ABG=()=>{let b,c;FM=B_(16384);b=0;while(b<16384){FM.data[b]=Um((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=FM.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function JP(){let a=this;C.call(a);a.xN=null;a.wZ=null;}
let X4=null,AQw=null;
let LG=()=>{LG=BG(JP);ABf();};
let ABf=()=>{let b,c,d,e,f,g,h,$$je;Dy();b=BW;c=B3(b,V(Dv));b=c<0?null:b.kD.data[c];if(b===null){b=new DS;d=new Bu;d.kr=0;d.jM=S(C,4);b.ke=d;b.k1=100;a:{try{d=Ef(V(Dv),null);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){}else{throw $$e;}}try{d=Ea(V(Dv),null);Eo(d,1);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof CT){}else{throw $$e;}}d=null;}b.k4=d;if(d===null){b=new Bz;d=new J;d.jw=G(16);F(d,d.ju,A(21));if(V(Dv).jQ===null)V(Dv).jQ=W(V(Dv).jO.$meta.name);e=V(Dv).jQ;F(d,d.ju,e);e=new H;f=d.jw;g
=f.data;c=d.ju;h=g.length;if(c>=0&&c<=(h-0|0)){e.jv=K(f.data,0,c);b.jx=1;b.jy=1;b.jz=e;B(b);}e=new I;e.jx=1;e.jy=1;B(e);}C5(BW,V(Dv),b);}X4=b;e=new Fo;e.oo=1;e.lN=U(4);AQw=e;};
function Jd(){let a=this;C.call(a);a.oF=null;a.tO=0.0;a.tP=0.0;a.tN=0.0;a.tL=0.0;a.tB=0;a.uk=0;}
let TY=(a,b,c,d,e)=>{let f,g,h;f=a.oF.mI;g=1.0/f.mt;h=1.0/f.mr;a.bZ(b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.tB=d;if(e<0)e= -e|0;a.uk=e;},
Ou=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.oF.mI;g=f.mt;h=f.mr;i=J2(d-b);j=g;i=i*j;a.tB=i+CA(i)*0.5|0;k=J2(e-c);i=h;k=k*i;l=k+CA(k)*0.5|0;a.uk=l;if(a.tB==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.tO=b;a.tP=c;a.tN=d;a.tL=e;};
function Fn(){let a=this;Jd.call(a);a.rT=null;a.tf=null;a.ye=0.0;a.yd=0.0;a.wt=0.0;a.vs=0.0;a.y6=0.0;a.y5=0.0;a.yt=0.0;a.wH=0.0;a.wG=0.0;a.rg=0;}
let Gm=(a,b,c,d,e,f)=>{let g,h,i,j;a.rT=B_(20);g=new BD;g.kj=1.0;g.ki=1.0;g.kh=1.0;g.kg=1.0;CN(g);a.tf=g;a.wH=1.0;a.wG=1.0;a.rg=1;if(b===null){b=new Bk;b.jx=1;b.jy=1;b.jz=A(54);B(b);}a.oF=b;TY(a,c,d,e,f);b=a.tf;b.kj=1.0;b.ki=1.0;b.kh=1.0;b.kg=1.0;CN(b);h=Fx(a.tf);i=a.rT.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;X_(a,h,f);h=a.wt/2.0;j=a.vs/2.0;a.y6=h;a.y5=j;a.rg=1;},
AUo=(a,b,c,d,e)=>{let f=new Fn();Gm(f,a,b,c,d,e);return f;},
X_=(a,b,c)=>{let d,e,f,g;a.wt=b;a.vs=c;if(a.rg)return;if(a.yt===0.0&&a.wH===1.0&&a.wG===1.0){d=a.ye;e=d+b;b=a.yd;f=b+c;g=a.rT.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.rg=1;},
ANR=(a,b,c,d,e)=>{let f;Ou(a,b,c,d,e);f=a.rT.data;f[3]=b;f[4]=e;f[8]=b;f[9]=c;f[13]=d;f[14]=c;f[18]=d;f[19]=e;};
let Qg=E();
let AK$=E();
let Ol=null;
let AVn=()=>{Ol=new BD;};
function BD(){let a=this;C.call(a);a.kj=0.0;a.ki=0.0;a.kh=0.0;a.kg=0.0;}
let KG=null,AEC=null,AJt=null,ARJ=null,AFg=null,Sw=0.0,XG=null,AQf=null,WB=null,AOL=null,API=null,AKs=null,AN4=null,ADN=null,ADa=null,ALZ=null,AQv=null,AOC=null,AR5=null,Xv=null,QS=null,AR0=null,AIc=null,AQM=null,APq=null,ANX=null,AH$=null,WU=null,AHR=null,ADs=null,AEH=null,ACX=null,AHM=null,ALf=null,AMh=null;
let CN=a=>{let b,c;b=a.kj;if(b<0.0)a.kj=0.0;else if(b>1.0)a.kj=1.0;c=a.ki;if(c<0.0)a.ki=0.0;else if(c>1.0)a.ki=1.0;c=a.kh;if(c<0.0)a.kh=0.0;else if(c>1.0)a.kh=1.0;c=a.kg;if(c<0.0)a.kg=0.0;else if(c>1.0)a.kg=1.0;return a;},
Fx=a=>{return KC(((255.0*a.kg|0)<<24|(255.0*a.kh|0)<<16|(255.0*a.ki|0)<<8|255.0*a.kj|0)&(-16777217));},
Dd=(b,c,d,e)=>{return KC(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Ch=(b,c)=>{b.kj=((c&(-16777216))>>>24|0)/255.0;b.ki=((c&16711680)>>>16|0)/255.0;b.kh=((c&65280)>>>8|0)/255.0;b.kg=(c&255)/255.0;},
Wb=()=>{let b;b=new BD;b.kj=1.0;b.ki=1.0;b.kh=1.0;b.kg=1.0;CN(b);KG=b;b=new BD;Ch(b,(-1077952513));AEC=b;b=new BD;Ch(b,2139062271);AJt=b;b=new BD;Ch(b,1061109759);ARJ=b;b=new BD;b.kj=0.0;b.ki=0.0;b.kh=0.0;b.kg=1.0;CN(b);AFg=b;Sw=Fx(KG);b=new BD;b.kj=0.0;b.ki=0.0;b.kh=0.0;b.kg=0.0;CN(b);XG=b;b=new BD;b.kj=0.0;b.ki=0.0;b.kh=1.0;b.kg=1.0;CN(b);AQf=b;b=new BD;b.kj=0.0;b.ki=0.0;b.kh=0.5;b.kg=1.0;CN(b);WB=b;b=new BD;Ch(b,1097458175);AOL=b;b=new BD;Ch(b,1887473919);API=b;b=new BD;Ch(b,(-2016482305));AKs=b;b=new BD;b.kj
=0.0;b.ki=1.0;b.kh=1.0;b.kg=1.0;CN(b);AN4=b;b=new BD;b.kj=0.0;b.ki=0.5;b.kh=0.5;b.kg=1.0;CN(b);ADN=b;b=new BD;Ch(b,16711935);ADa=b;b=new BD;Ch(b,2147418367);ALZ=b;b=new BD;Ch(b,852308735);AQv=b;b=new BD;Ch(b,579543807);AOC=b;b=new BD;Ch(b,1804477439);AR5=b;b=new BD;Ch(b,(-65281));Xv=b;b=new BD;Ch(b,(-2686721));QS=b;b=new BD;Ch(b,(-626712321));AR0=b;b=new BD;Ch(b,(-5963521));AIc=b;b=new BD;Ch(b,(-1958407169));AQM=b;b=new BD;Ch(b,(-759919361));APq=b;b=new BD;Ch(b,(-1306385665));ANX=b;b=new BD;Ch(b,(-16776961));AH$
=b;b=new BD;Ch(b,(-13361921));WU=b;b=new BD;Ch(b,(-8433409));AHR=b;b=new BD;Ch(b,(-92245249));ADs=b;b=new BD;Ch(b,(-9849601));AEH=b;b=new BD;b.kj=1.0;b.ki=0.0;b.kh=1.0;b.kg=1.0;CN(b);ACX=b;b=new BD;Ch(b,(-1608453889));AHM=b;b=new BD;Ch(b,(-293409025));ALf=b;b=new BD;Ch(b,(-1339006721));AMh=b;};
function Na(){let a=this;C.call(a);a.mk=0;a.nR=0;a.ne=null;a.nF=null;a.na=null;a.nf=null;a.ob=0.0;}
let HJ=0.0;
let AK_=(a,b,c,d)=>{if(b!==null&&!(!d&&a.na===b)){BU.b6(a.mk,10242,b.qI);a.na=b;}if(c!==null&&!(!d&&a.nf===c)){BU.b6(a.mk,10243,c.qI);a.nf=c;}},
Wv=(a,b,c,d)=>{if(b!==null&&!(!d&&a.ne===b)){BU.b6(a.mk,10241,b.nn);a.ne=b;}if(c!==null&&!(!d&&a.nF===c)){BU.b6(a.mk,10240,c.nn);a.nF=c;}},
ADV=()=>{let b,c,d,e,f;b=HJ;if(b>0.0)return b;if(!(B5.oV.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){HJ=1.0;return 1.0;}if(!C1){c=B_(16);d=c.data.length;e=new HH;f=0+d|0;e.jT=(-1);e.j0=d;e.jB=d;e.jI=0;e.jB=f;e.pF=0;e.qd=0;e.pb=c;}else{e=new CJ;c=BE(64);e.jT=(-1);e.j0=64;e.jB=64;e.kn=Ci;e.kG=0;e.kk=c;e.jI=0;e.jB=64;e.lo=1;e.kO=0;e.kn=C3();e=EO(e);}Cv(e,0);CC(e,e.j0);Bi.b_(34047,e);b=Q_(e,0);HJ=b;return b;},
AQA=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.oy)O_(c);if(N_===T0){c=new Q;c.jx=1;c.jy=1;c.jz=A(55);B(c);}if(!c.oy){e=new Q;e.jx=1;e.jy=1;e.jz=A(56);B(e);}c.oy=0;f=c.pJ;c.pJ=null;g=1;h=c.o0;e=f.kE;if(h===(e===null?Fc:HL(e.kZ)))e=f;else{e=new Fk;h=f.kE;I9(e,h===null?f.ls:h.lm,h===null?f.lw:h.ll,c.o0);h=IE;e.qc=h;i=e.kE;if(i===null){ET(e);h=e.lf;i=Bt(E1.jJ);h.globalCompositeOperation=i;}else{j=h!==h?1:0;LZ(i.lj,j);}i=f.kE;k=i===null?f.ls:i.lm;l=i===null?f.lw:i.ll;h=e.kE;if(h===null){ET(f);Jv(e,
f.nB,0,0,k,l,0,0,k,l);}else{m=i.lj;n=h.lj;Jf(m,n,0,0,k,l,0,0,k,l);}if(f.nQ){e=new Q;e.jx=1;e.jy=1;e.jz=A(57);B(e);}Ei();Gt(Fr,f.o3);h=f.kE;if(h!==null)HD(h.lj);f.nQ=1;g=1;}BU.ck(3317,1);if(c.vo){c=e.kE;AMw(b,e,c===null?e.ls:c.lm,c===null?e.lw:c.ll);}else{c=BU;h=e.kE;if(h===null)o=6408;else a:{j=h.kZ;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new Q;e=new J;e.jw=G(16);B$(e,e.ju,Cd(A(58)));L(e,e.ju,j,10);h=new H;p=e.jw;q=p.data;d=e.ju;j
=q.length;if(d>=0&&d<=(j-0|0)){h.jv=K(p.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}r=h===null?e.ls:h.lm;k=h===null?e.lw:h.ll;if(h===null)m=6408;else b:{l=h.kZ;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Q;e=new J;e.jw=G(16);DT(e,e.ju,A(58));L(e,e.ju,l,10);h=new H;p=e.jw;q=p.data;d=e.ju;j=q.length;if(d>=0&&d<=(j-0|0)){h.jv=K(p.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}if(h===null)l=
5121;else c:{l=h.kZ;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new Q;e=new J;e.jw=G(16);B$(e,e.ju,Cd(A(58)));L(e,e.ju,l,10);h=new H;p=e.jw;q=p.data;d=e.ju;j=q.length;if(d>=0&&d<=(j-0|0)){h.jv=K(p.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}l=5121;}c.cn(b,d,o,r,k,0,m,l,e.py);}if(g){if(e.nQ){e=new Q;e.jx=1;e.jy=1;e.jz=A(57);B(e);}Ei();Gt(Fr,e.o3);c=e.kE;if(c!==null)HD(c.lj);e.nQ=1;}},
ATI=()=>{HJ=0.0;};
function Fu(){Na.call(this);this.mI=null;}
let Dt=null;
let Gq=(a,b)=>{let c,d;a.mI=b;if(!b.oy)O_(b);BU.co(a.mk,a.nR);AQA(3553,b,0);Wv(a,a.ne,a.nF,1);AK_(a,a.na,a.nf,1);c=a.ob;d=ADV();if(d!==1.0){c=TB(c,d);Bi.cu(3553,34046,c);a.ob=c;}BU.co(a.mk,0);},
AI4=a=>{let b,c,d,e,f,g,h,i;b=a.mI;if(!(b instanceof Kq)){b=a;if(!b.$id$){c=D8();b.$id$=c;}d=Bc(a.$id$,4);b=new J;b.jw=G(16);F(b,b.ju,A(1));e=b.ju;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jw;g=f.data;h=b.ju;i=g.length;if(h>=0&&h<=(i-0|0)){c.jv=K(f.data,0,h);return c;}b=new I;b.jx=1;b.jy=1;B(b);}c=b;if(!c.$id$){d=D8();c.$id$=d;}d=Bc(b.$id$,4);b=new J;b.jw=G(16);F(b,b.ju,A(1));e=b.ju;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jw;g=f.data;h=b.ju;i=g.length;if(h>=0&&h<=(i-0|0)){c.jv=K(f.data,0,h);return c;}b=new I;b.jx
=1;b.jy=1;B(b);},
AL1=()=>{let b,c,d,e;b=new Iu;c=Jh(16);b.ol=0;d=S(Fl,c);e=d.data;b.mm=d;b.r2=0.75;b.pc=e.length*0.75|0;Dt=b;};
function Bu(){let a=this;C.call(a);a.jM=null;a.jA=0;a.kr=0;a.j4=null;}
let OM=a=>{a.kr=1;a.jM=S(C,16);},
AVq=()=>{let a=new Bu();OM(a);return a;},
U9=(a,b)=>{a.kr=1;a.jM=S(C,b);},
AUI=a=>{let b=new Bu();U9(b,a);return b;},
O7=(a,b,c)=>{a.kr=b;a.jM=S(C,c);},
FO=(a,b)=>{let c=new Bu();O7(c,a,b);return c;},
HQ=(a,b,c,d)=>{a.kr=b;if(d===null){d=new C4;d.jx=1;d.jy=1;B(d);}if(d===V(Br)){d=new Bk;d.jx=1;d.jy=1;B(d);}if(c>=0){a.jM=DG(d.jO,c);return;}d=new DI;d.jx=1;d.jy=1;B(d);},
ASM=(a,b,c)=>{let d=new Bu();HQ(d,a,b,c);return d;},
PR=(a,b)=>{a.kr=1;if(b===null){b=new C4;b.jx=1;b.jy=1;B(b);}if(b!==V(Br)){a.jM=DG(b.jO,16);return;}b=new Bk;b.jx=1;b.jy=1;B(b);},
AS5=a=>{let b=new Bu();PR(b,a);return b;},
Us=(a,b)=>{let c,d,e,f,g;c=b.kr;d=b.jA;e=b.jM.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BJ;f.jO=e;g=f;e.classObject=g;}}g=DY(f);a.kr=c;if(g===null){b=new C4;b.jx=1;b.jy=1;B(b);}if(g===V(Br)){b=new Bk;b.jx=1;b.jy=1;B(b);}if(d>=0){g=DG(g.jO,d);a.jM=g;c=b.jA;a.jA=c;F_(b.jM,0,g,0,c);return;}b=new DI;b.jx=1;b.jy=1;B(b);},
ASv=a=>{let b=new Bu();Us(b,a);return b;},
T4=(a,b)=>{K7(a,1,b,0,b.data.length);},
AUR=a=>{let b=new Bu();T4(b,a);return b;},
K7=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BJ;g.jO=f;h=g;f.classObject=h;}}h=DY(g);a.kr=b;if(h===null){h=new C4;h.jx=1;h.jy=1;B(h);}if(h===V(Br)){h=new Bk;h.jx=1;h.jy=1;B(h);}if(e>=0){h=DG(h.jO,e);a.jM=h;a.jA=e;F_(c,d,h,0,e);return;}h=new DI;h.jx=1;h.jy=1;B(h);},
ATZ=(a,b,c,d)=>{let e=new Bu();K7(e,a,b,c,d);return e;},
BL=(a,b)=>{let c,d,e,f;c=a.jM;d=c.data;e=a.jA;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=Kv(a,e);}c=c.data;f=a.jA;a.jA=f+1|0;c[f]=b;},
Gw=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.jA)return a.jM.data[b];c=new I;d=new J;d.jw=G(16);F(d,d.ju,A(18));L(d,d.ju,b,10);F(d,d.ju,A(19));b=a.jA;L(d,d.ju,b,10);e=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);c.jx=1;c.jy=1;c.jz=e;B(c);}d=new I;d.jx=1;d.jy=1;B(d);},
EH=(a,b,c)=>{let d,e,f;a:{d=a.jM;if(!c&&b!==null){e=0;f=a.jA;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.jA;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
Ph=(a,b,c)=>{let d,e,f;a:{d=a.jM;if(!(!c&&b!==null)){e=0;f=a.jA;while(e<f){if(d.data[e]===b){Dc(a);DC(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.jA;while(true){if(e>=f)break a;if(b.cB(d.data[e])){Dc(a);DC(a,e);return 1;}e=e+1|0;}}}return 0;},
DC=(a,b)=>{let c,d,e,f,g,h,i;c=a.jA;if(b<c){d=a.jM;e=d.data;f=e[b];g=c-1|0;a.jA=g;if(!a.kr)e[b]=e[g];else Du(d,b+1|0,d,b,g-b|0);e[a.jA]=null;return f;}f=new I;h=new J;h.jw=G(16);F(h,h.ju,A(18));L(h,h.ju,b,10);F(h,h.ju,A(19));b=a.jA;L(h,h.ju,b,10);i=new H;d=h.jw;e=d.data;g=h.ju;c=e.length;if(g>=0&&g<=(c-0|0)){i.jv=K(d.data,0,g);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;f.jx=1;f.jy=1;B(f);},
PM=a=>{let b,c,d,e,f,g;b=a.jM;c=0;d=a.jA;e=null;if(c>d){e=new Bk;e.jx=1;e.jy=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.jA=0;},
Kv=(a,b)=>{let c,d,e,f,g,h;c=a.jM;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BJ;e.jO=d;f=e;d.classObject=f;}}e=DY(e);if(e===null){e=new C4;e.jx=1;e.jy=1;B(e);}if(e===V(Br)){e=new Bk;e.jx=1;e.jy=1;B(e);}if(b<0){e=new DI;e.jx=1;e.jy=1;B(e);}e=DG(e.jO,b);d=e.data;g=a.jA;h=d.length;if(g<h)h=g;F_(c,0,e,0,h);a.jM=e;return e;},
FZ=a=>{let b;if(Cw){b=new Cp;b.kb=1;b.kf=a;b.lc=1;return b;}if(a.j4===null){b=new CU;b.ln=a;b.lp=1;a.j4=b;}return CD(a.j4);},
Rs=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.kr)return 0;if(!(b instanceof Bu))return 0;c=b;if(!c.kr)return 0;d=a.jA;if(d!=c.jA)return 0;e=a.jM;f=c.jM;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cB(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
UA=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.jA)return A(59);b=a.jM;c=new Rk;d=G(32);e=d.data;c.l$=d;f=c.la;if(f==e.length)FS(c,f+1|0);b=b.data;e=c.l$.data;g=c.la;c.la=g+1|0;e[g]=91;h=b[0];if(h===null)I6(c);else{h=h.T();if(h===null)I6(c);else{i=h.jv.length;j=c.la+i|0;if(j>c.l$.data.length)FS(c,j);KB(h,0,i,c.l$,c.la);c.la=j;}}i=1;while(i<a.jA){g=A(60).jv.length;k=c.la+g|0;if(k>c.l$.data.length)FS(c,k);KB(A(60),0,g,c.l$,c.la);c.la=k;h=b[i];if(h===null)I6(c);else{h=h.T();if(h===null)I6(c);else{k=h.jv.length;j=c.la+k|0;if
(j>c.l$.data.length)FS(c,j);KB(h,0,k,c.l$,c.la);c.la=j;}}i=i+1|0;}f=c.la;if(f==c.l$.data.length)FS(c,f+1|0);a:{b=c.l$;e=b.data;g=c.la;f=g+1|0;c.la=f;e[g]=93;if(!f)c=A(61);else{c=new H;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.jv=K(b.data,0,f);}return c;}c=new I;c.jx=1;c.jy=1;B(c);};
function Js(){let a=this;C.call(a);a.ti=0;a.om=null;a.kD=null;a.u9=0.0;a.t1=0;a.rJ=0;a.rF=0;}
let PO=null;
let AIt=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.u9=c;d=I3(b,c);a.t1=d*c|0;b=d-1|0;a.rF=b;a.rJ=EQ(R(b));a.om=S(C,d);a.kD=S(C,d);return;}e=new Bk;f=new J;f.jw=G(16);F(f,f.ju,A(62));Hn(f,f.ju,c);g=new H;h=f.jw;i=h.data;d=f.ju;j=i.length;if(d>=0&&d<=(j-0|0)){g.jv=K(h.data,0,d);e.jx=1;e.jy=1;e.jz=g;B(e);}f=new I;f.jx=1;f.jy=1;B(f);},
Ex=(a,b)=>{let c=new Js();AIt(c,a,b);return c;},
B3=(a,b)=>{let c,d,e;if(b===null){c=new Bk;c.jx=1;c.jy=1;c.jz=A(63);B(c);}d=a.om;e=Be(Bb(Y(R(b.cI()),D(2135587861, 2654435769)),a.rJ));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cB(b))break;e=(e+1|0)&a.rF;}return e;},
C5=(a,b,c)=>{let d,e,f;d=B3(a,b);if(d>=0){e=a.kD.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.om.data;e[d]=b;a.kD.data[d]=c;d=a.ti+1|0;a.ti=d;if(d>=a.t1)AAr(a,e.length<<1);return null;},
AAr=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.om.data.length;a.t1=b*a.u9|0;d=b-1|0;a.rF=d;a.rJ=EQ(R(d));e=a.om;f=a.kD;a.om=S(C,b);a.kD=S(C,b);if(a.ti>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.om;b=Be(Bb(Y(R(g.cI()),D(2135587861, 2654435769)),a.rJ));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.rF;}j[b]=g;a.kD.data[b]=h;}d=d+1|0;}}}},
ATi=()=>{PO=new C;};
let AEM=E(Js);
let AQ6=E();
function DE(){let a=this;C.call(a);a.l0=0;a.lI=0;a.l9=0;a.lY=0;a.nh=0;a.l5=null;a.nw=0;a.oA=0;}
let AJb=(a,b)=>{if(!(b instanceof DE))return 0;return AEu(a,b);},
AEu=(a,b)=>{let c,d,e;a:{if(b!==null&&a.l0==b.l0&&a.lI==b.lI&&a.lY==b.lY&&a.l9==b.l9){c=a.l5;d=b.l5;if(c===d)e=1;else if(!(d instanceof H))e=0;else{d=d;e=c.jv!==d.jv?0:1;}if(e&&a.nw==b.nw){e=1;break a;}}e=0;}return e;};
let ARm=E();
let AGh=E();
let AJD=E();
let AHH=E();
let QU=E();
let WA=null;
let R$=()=>{R$=BG(QU);AGp();};
let AGp=()=>{let b,c,d;b=new JW;Nc();c=new Bg;CH();b.vy=c;d=new Bg;b.vI=d;b.vc=new Bg;b.vK=new Bg;c.jF=0.0;c.jG=0.0;c.jH=0.0;d.jF=0.0;d.jG=0.0;d.jH=0.0;AKk(b,c,d);WA=b;};
let Xu=E();
let AIx=E();
let AHk=E();
let AH5=E();
let ANY=E();
let AEb=E();
let APt=E();
let AFU=E();
let Zk=E();
let AAG=E();
let I_=E(Bx);
let ARK=null,APw=null,ADy=null;
let AEF=()=>{let b,c;b=new I_;b.jJ=A(64);b.jE=0;ARK=b;c=new I_;c.jJ=A(65);c.jE=1;APw=c;ADy=P(I_,[b,c]);};
let AIC=E();
let SV=E(0);
let Dj=E();
let XE=E(Dj);
let XD=E(Dj);
let AGO=E(Dj);
let ABX=E(Dj);
let ALF=E(Dj);
let Lg=E(Dj);
let ABL=E(Lg);
let Hf=E(0);
let ACV=E();
let EY=E(0);
let ALr=E();
let APp=E();
let Z9=E();
let Ep=E();
let AKm=E(Ep);
let G$=E(Ep);
let Dx=E(G$);
let AC_=null;
let Qf=()=>{Qf=BG(Dx);Ya();};
let Ya=()=>{let b;b=new Bg;CH();AC_=b;};
let AK9=E();
let ANW=E(Dx);
let AF8=E(Dx);
let AQc=E(Ep);
let QK=null;
let ATt=()=>{QK=B_(3);};
let KI=E(Ep);
let Xn=E(KI);
let ABH=E(Dx);
let GI=E(G$);
let AHB=E(GI);
let AF5=E(Dx);
let AH8=E(Dx);
let AHA=E(GI);
let G8=E(Bx);
let AHp=null,AKh=null,ADb=null,AAt=null;
let AJA=()=>{let b,c,d;b=new G8;b.jJ=A(66);b.jE=0;AHp=b;c=new G8;c.jJ=A(67);c.jE=1;AKh=c;d=new G8;d.jJ=A(68);d.jE=2;ADb=d;AAt=P(G8,[b,c,d]);};
let Fy=E();
let L_=E(Fy);
let V1=E(L_);
let Ho=E(Bx);
let APv=null,AP7=null,VJ=null,AQk=null;
let AFz=()=>{let b,c,d;b=new Ho;b.jJ=A(69);b.jE=0;APv=b;c=new Ho;c.jJ=A(70);c.jE=1;AP7=c;d=new Ho;d.jJ=A(71);d.jE=2;VJ=d;AQk=P(Ho,[b,c,d]);};
let CM=E(Fy);
let HK=E(CM);
let ZW=E();
let Gl=E(CM);
let AOv=null,AOu=null,AOw=null,APC=null;
let TG=()=>{TG=BG(Gl);AG8();};
let AG8=()=>{let b;b=new Bg;CH();AOv=b;AOu=new Bg;AOw=new Bg;b=new D4;b.nu=0.0;b.nr=0.0;b.ns=0.0;b.nt=1.0;APC=b;};
let D_=E(Gl);
let FD=E(D_);
let ACR=E(FD);
let Hk=E(CM);
let AR1=E(Hk);
let ANT=E(CM);
let E_=E(CM);
let Xx=E(E_);
let GU=E(CM);
let ACJ=E(D_);
let AEZ=E(D_);
let J_=E(CM);
let AKn=E(J_);
let YR=E(E_);
let AGf=E(FD);
let AKe=E(CM);
let AIh=E(E_);
let AKu=E(CM);
let AMa=E(Gl);
let AE6=E(C8);
let Zv=E(C8);
let ZN=E(D_);
let AKX=E(GU);
let AQe=E(HK);
let AJc=E(HK);
let ALY=E(GU);
let AG$=E(FD);
let AQW=E(Hk);
let Em=E(Fy);
let AHG=E(Em);
let Ff=E();
let ALl=E(Ff);
let AMC=E(Em);
let ANS=E(Em);
let AOS=E(Ff);
let ACq=E(Em);
let ANZ=E(Ff);
let JM=E(0);
let Nl=E(0);
function BJ(){let a=this;C.call(a);a.jQ=null;a.jO=null;a.pg=null;}
let TL=0;
let AUv=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BJ;c.jO=b;d=c;b.classObject=d;}return c;},
AHy=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=D8();b.$id$=c;}d=a.$id$;b=new J;b.jw=G(16);F(b,b.ju,A(72));L(b,b.ju,d,10);c=new H;e=b.jw;f=e.data;g=b.ju;d=f.length;if(g>=0&&g<=(d-0|0)){c.jv=K(e.data,0,g);return c;}b=new I;b.jx=1;b.jy=1;B(b);},
DY=a=>{let b,c,d;b=a.jO.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BJ;c.jO=b;d=c;b.classObject=d;}}return c;},
AGG=()=>{Dw.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){Sh(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Br,callable:function(obj,args){Jn();NW();return null;}}];Dv.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){P9(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[Dv],returnType:Br,callable:function(obj,
args){ASE(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){AT2(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return ASK(obj);}}];BQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){RB(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,
args){Po(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Eh,callable:function(obj,args){return ATF(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[Eh],returnType:Br,callable:function(obj,args){AUn(obj,MF(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Eh,callable:function(obj,args){return AVS(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[Eh],returnType:Br,callable:function(obj,
args){ATg(obj,MF(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Db,callable:function(obj,args){return AUk(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Db],returnType:Br,callable:function(obj,args){AUd(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return AVl(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Br,callable:function(obj,
args){ATG(obj,B7(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return AUi(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Br,callable:function(obj,args){ATr(obj,B7(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return ATJ(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Br,callable
:function(obj,args){ASH(obj,B7(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:J6,callable:function(obj,args){return ATY(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[J6],returnType:Br,callable:function(obj,args){AUB(obj,ASl(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Eh,callable:function(obj,args){return ASt(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:Eh,callable:function(obj,args){return AUJ(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[Eh],returnType:Br,callable:function(obj,args){AVH(obj,MF(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[Eh],returnType:Br,callable:function(obj,args){AS2(obj,MF(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CI,callable:function(obj,args){return AVh(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[CI],returnType:Br,callable:function(obj,args){ASs(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[CI,Bj],returnType:Bj,callable:function(obj,args){return AVm(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return ATR(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return ATu(obj
);}},{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Ce],returnType:Br,callable:function(obj,args){AU6(obj,Dl(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return NX(obj);}}];Bu.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){OM(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Br,callable:function(obj,args)
{U9(obj,B7(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ce,BM],returnType:Br,callable:function(obj,args){O7(obj,Dl(args[0]),B7(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ce,BM,BJ],returnType:Br,callable:function(obj,args){HQ(obj,Dl(args[0]),B7(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BJ],returnType:Br,callable:function(obj,args){PR(obj,args[0]);return null;}},{name:"<init>",modifiers:
0,accessLevel:3,parameterTypes:[Bu],returnType:Br,callable:function(obj,args){Us(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[DN(C)],returnType:Br,callable:function(obj,args){T4(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ce,DN(C),BM,BM],returnType:Br,callable:function(obj,args){K7(obj,Dl(args[0]),args[1],B7(args[2]),B7(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Br,callable:function(obj,
args){BL(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Br,callable:function(obj,args){ATw(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Br,callable:function(obj,args){AVa(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Br,callable:function(obj,args){AVz(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers
:0,accessLevel:3,parameterTypes:[Bu],returnType:Br,callable:function(obj,args){ATO(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bu,BM,BM],returnType:Br,callable:function(obj,args){ASx(obj,args[0],B7(args[1]),B7(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[DN(C)],returnType:Br,callable:function(obj,args){ATB(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[DN(C),BM,BM],returnType:Br,callable:function(obj,
args){AST(obj,args[0],B7(args[1]),B7(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:C,callable:function(obj,args){return Gw(obj,B7(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BM,C],returnType:Br,callable:function(obj,args){AUM(obj,B7(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BM,C],returnType:Br,callable:function(obj,args){AUg(obj,B7(args[0]),args[1]);return null;}},{name:"insertRange",modifiers
:0,accessLevel:3,parameterTypes:[BM,BM],returnType:Br,callable:function(obj,args){AU0(obj,B7(args[0]),B7(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BM,BM],returnType:Br,callable:function(obj,args){AVR(obj,B7(args[0]),B7(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Ce],returnType:Ce,callable:function(obj,args){return ATq(obj,args[0],Dl(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bu,Ce],returnType:Ce,callable
:function(obj,args){return ATV(obj,args[0],Dl(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bu,Ce],returnType:Ce,callable:function(obj,args){return AUj(obj,args[0],Dl(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ce],returnType:BM,callable:function(obj,args){return EH(obj,args[0],Dl(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ce],returnType:BM,callable:function(obj,args){return AUG(obj,args[0],Dl(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Ce],returnType:Ce,callable:function(obj,args){return Ph(obj,args[0],Dl(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:C,callable:function(obj,args){return DC(obj,B7(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BM,BM],returnType:Br,callable:function(obj,args){ATd(obj,B7(args[0]),B7(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bu,Ce],returnType:Ce,callable:function(obj,
args){return AVA(obj,args[0],Dl(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return ASC(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AVw(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AVQ(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return AVi(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return ASY(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){PM(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DN(C),callable:function(obj,args){return AUH(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:DN(C),callable:function(obj,args){return AU_(obj,B7(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:DN(C),callable:function(obj,args){return AVt(obj,B7(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BM],returnType:DN(C),callable:function(obj,args){return Kv(obj,B7(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){AU5(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[HM],returnType:Br,callable:function(obj,args){AVD(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[HM,BM],returnType:C,callable:function(obj,args){return AU9(obj,args[0],B7(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[HM,BM],returnType:BM,callable:function(obj,args){return AUW(obj,args[0],B7(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){AU7(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable
:function(obj,args){ASj(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cp,callable:function(obj,args){return FZ(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[Nh],returnType:Dp,callable:function(obj,args){return AVO(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BM],returnType:Br,callable:function(obj,args){ASD(obj,B7(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return AUp(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DN(C),callable:function(obj,args){return ASB(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BJ],returnType:DN(C),callable:function(obj,args){return ASS(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BM,callable:function(obj,args){return ASN(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ce,callable:function(obj,
args){return Rs(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ce,callable:function(obj,args){return AVe(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return UA(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[H],returnType:H,callable:function(obj,args){return AU1(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BJ],returnType:Bu,callable:function(obj,
args){return AUQ(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Ce,BM,BJ],returnType:Bu,callable:function(obj,args){return AVs(Dl(args[0]),B7(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[DN(C)],returnType:Bu,callable:function(obj,args){return ASL(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:Hu,callable:function(obj,args){return ASW(obj);}}];CK.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Br,callable:function(obj,args){Rd(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Br,callable:function(obj,args){Vr(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ce,callable:function(obj,args){return AUw(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Ce],returnType:Br,callable:function(obj,args){ASp(obj,Dl(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Go,callable:function(obj,args){return AS0(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Go],returnType:Br,callable:function(obj,args){AUO(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CI,callable:function(obj,args){return AVG(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[CI],returnType:Br,callable:function(obj,args){ATC(obj,args[0]);return null;}}];},
M9=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.jO.$meta.primitive?1:0)&&!(a.jO.$meta.item===null?0:1)){if(a.pg===null){if(!TL){TL=1;AGG();}b=a.jO.$meta.methods;a.pg=S(Hd,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof Fp())?e:e[Bl]===true?e:e.j6;g=W(f.name);if(g===A(73))h=1;else if(!(A(73) instanceof H))h=0;else{e=A(73);h=g.jv!==e.jv?0:1;}if(h){g=f.parameterTypes;i=S(BJ,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BJ;e.jO
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.pg.data;h=c+1|0;e=new Hd;g=W(f.name);k=f.modifiers;n=f.accessLevel;f=Dg(f.callable,"call");e.md=a;e.xF=g;e.qo=k;e.ri=n;e.nY=i;e.tC=f;j[c]=e;c=h;}d=d+1|0;}i=a.pg;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BJ;e.jO=b;f=e;b.classObject=f;}}e=DY(e);if(e===null){e=new C4;e.jx=1;e.jy=1;B(e);}if(e===V(Br)){e=new Bk;e.jx=1;e.jy=1;B(e);}if(c<0){e=new DI;e.jx=1;e.jy=1;B(e);}i=i.data;f=DG(e.jO,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.pg=f;}return a.pg.p();}return S(Hd,0);},
AQq=a=>{let b,c,d,e,f,g,h,i,j,k;b=(M9(a)).data;c=b.length;d=S(Hd,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Kz(h.qo,h.ri)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=Cf(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BJ;h.jO=j;k=h;j.classObject=k;}}j=DY(h);if(j===null){h=new C4;h.jx=1;h.jy=1;B(h);}if(j===V(Br)){h=new Bk;h.jx=1;h.jy=1;B(h);}if(f<0){h=new DI;h.jx=1;h.jy=1;B(h);}k=DG(j.jO,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
ANt=(a,b)=>{let c,d,e,f;c=(M9(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new G0;f.jx=1;f.jy=1;B(f);}f=c[e];if(TU(f.nY.p(),b))break;e=e+1|0;}return f;},
ANr=(a,b)=>{let c,d,e,f,g;c=(M9(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new G0;f.jx=1;f.jy=1;B(f);}f=c[e];g=!(Kz(f.qo,f.ri)&1)?0:1;if(g&&TU(f.nY.p(),b))break;e=e+1|0;}return f;};
let AAO=E();
let ALe=b=>{let c,d,e,f,g;if(b===null)return null;c=BE(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof Fp())?g:g[Bl]===true?g:g.j6;e=e+1|0;}return c;},
B0=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
Dg=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let ZB=E();
let Ws=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
LQ=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(LQ(d[e],c))return 1;e=e+1|0;}return 0;},
El=b=>{setTimeout(()=>{AUK(Od)(b);},0);},
Od=b=>{b.cS();},
Mr=(b,c)=>{setTimeout(()=>{Od(b);},c);},
AGq=()=>{return [];};
function DA(){let a=this;C.call(a);a.jz=null;a.lk=null;a.jx=0;a.jy=0;a.xu=null;}
let X=a=>{a.jx=1;a.jy=1;},
AU3=()=>{let a=new DA();X(a);return a;},
Bo=a=>{return a;},
AMQ=a=>{return a.jz;},
ATz=a=>{return a.cT();},
AUV=a=>{let b;b=a.lk;if(b===a)b=null;return b;},
ATL=a=>{let b,c;if(C7===null){b=new Fj;c=new Ct;c.k3=BE(32);b.lr=c;c=new J;BA(c);c.jw=G(16);b.k6=c;b.k5=G(32);b.k9=0;b.k$=Cl;C7=b;}Jq(a,C7);},
Jq=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BJ;d.jO=c;e=d;c.classObject=e;}}if(d.jQ===null)d.jQ=W(d.jO.$meta.name);Dk(Bt(d.jQ));d=a.cT();if(d!==null){c=new J;c.jw=G(16);F(c,c.ju,A(74));F(c,c.ju,d);e=new H;f=c.jw;g=f.data;h=c.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);Dk(Bt(e));}else{b=new I;b.jx=1;b.jy=1;B(b);}}a:{Dk("\n");f=a.xu;if(f!==null){f=f.data;j=f.length;h=0;while(true){if(h>=j)break a;e=f[h];Dk("\tat ");c=A(2);if(e!==null)c=e.T();Dk(Bt(c));Dk("\n");h
=h+1|0;}}}c=a.lk;if(c!==null&&c!==a){Dk("Caused by: ");Jq(a.lk,b);}};
let Ca=E(DA);
let IV=a=>{a.jx=1;a.jy=1;},
ASk=()=>{let a=new Ca();IV(a);return a;};
let Bz=E(Ca);
let NS=a=>{a.jx=1;a.jy=1;},
ATk=()=>{let a=new Bz();NS(a);return a;},
Gv=(a,b)=>{a.jx=1;a.jy=1;a.jz=b;},
AS8=a=>{let b=new Bz();Gv(b,a);return b;};
let AF0=E(Bz);
let Ji=E(0);
function H(){C.call(this);this.kY=0;}
let U0=null,Lw=null,Nw=null;
let Xq=(a,b)=>{a.jv=K(b.data,0,b.data.length);},
ASn=a=>{let b=new H();Xq(b,a);return b;},
AD3=(a,b)=>{a.jv=b;},
SR=a=>{let b=new H();AD3(b,a);return b;},
KB=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.jv.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){ASX(a.jv,b,d.data,e,g);return;}}h=new I;h.jx=1;h.jy=1;B(h);},
L2=(a,b,c)=>{let d,e,f;if((c+b.jv.length|0)>a.jv.length)return 0;d=0;a:{b:{while(d<b.jv.length){if(d<0)break a;if(d>=b.jv.length)break a;e=b.jv.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.jv.length)break b;if(e!=a.jv.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);},
ACi=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.jv.length>a.jv.length)return 0;c=0;d=a.jv.length-b.jv.length|0;a:{b:{while(d<a.jv.length){if(d<0)break a;if(d>=a.jv.length)break a;e=a.jv.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.jv.length)break b;if(e!=b.jv.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);},
Hp=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.jv.length)return (-1);if(a.jv.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.jv.length-1|0))return (-1);if(a.jv.charCodeAt(c)==e&&a.jv.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
FK=(a,b,c)=>{let d,e,f,g;d=a.jv.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.jv.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.jv.charCodeAt(d)==g){b=d-1|0;if(a.jv.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Pz=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.jv.length-b.jv.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.jv.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.jv.length)break a;g=a.jv.charCodeAt(f);if(e<0)break b;if(e>=b.jv.length)break b;if(g!=b.jv.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);},
AB$=(a,b,c)=>{let d,e,f;d=a.jv.length-b.jv.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.jv.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.jv.length)break a;f=a.jv.charCodeAt(f);if(e<0)break b;if(e>=b.jv.length)break b;if(f!=b.jv.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);},
Cu=(a,b,c)=>{let d,e,f;d=a.jv.length;e=Cf(b,c);if(!e)return Lw;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return SR(a.jv.substring(b,c));f=new T;f.jx=1;f.jy=1;B(f);},
CY=(a,b)=>{let c,d,e,f;c=a.jv.length-b.jv.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.jv.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.jv.length)break a;f=a.jv.charCodeAt(f);if(e<0)break b;if(e>=b.jv.length)break b;if(f!=b.jv.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);},
Mg=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new J;d.jw=G(16);e=a.jv.length-b.jv.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cu(a,f,a.jv.length);g=d.ju;if(b===null)b=A(2);F(d,g,b);b=new H;h=d.jw;i=h.data;j=d.ju;e=i.length;if(j>=0&&j<=(e-0|0)){b.jv=K(h.data,0,j);return b;}b=new I;b.jx=1;b.jy=1;B(b);}k=0;d:{while(k<b.jv.length){j=f+k|0;if(j<0)break b;if(j>=a.jv.length)break b;j=a.jv.charCodeAt(j);if(k<0)break c;if(k>=b.jv.length)break c;if(j!=b.jv.charCodeAt(k)){if(f<0)break a;if(f>=a.jv.length)break a;k=a.jv.charCodeAt(f);j
=d.ju;Bd(d,j,j+1|0);d.jw.data[j]=k;break d;}k=k+1|0;}F(d,d.ju,c===null?A(2):c);f=f+(b.jv.length-1|0)|0;}f=f+1|0;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);},
AGL=a=>{let b,c,d;b=0;c=a.jv.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.jv.length)break;if(a.jv.charCodeAt(b)>32)break a;b=b+1|0;}d=new T;d.jx=1;d.jy=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.jv.length)break b;if(a.jv.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cu(a,b,c+1|0);}d=new T;d.jx=1;d.jy=1;B(d);},
Cd=a=>{return a;},
APF=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof H))return 0;c=b;return a.jv!==c.jv?0:1;},
AJV=a=>{let b;a:{if(!a.kY){b=0;while(true){if(b>=a.jv.length)break a;a.kY=(31*a.kY|0)+a.jv.charCodeAt(b)|0;b=b+1|0;}}}return a.kY;},
AVf=()=>{let b;U0=G(0);b=new H;b.jv="";Lw=b;Nw=new M1;};
let D$=E();
function E9(){D$.call(this);this.mQ=0;}
let NB=null,DV=null;
let J3=(b,c)=>{if(b!==null)return UZ(b,0,b.jv.length,c);b=new Co;b.jx=1;b.jy=1;b.jz=A(75);B(b);},
UZ=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new Co;b.jx=1;b.jy=1;b.jz=A(76);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.jv.length){a:{switch(b.jv.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new Co;b.jx=1;b.jy=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.jv.length)break b;g=ANd(b.jv.charCodeAt(g));if(g<0){k=new Co;l=Cu(b,c,d);b=new J;b.jw=G(16);F(b,b.ju,A(77));c=b.ju;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jw;o=n.data;d=b.ju;e
=o.length;if(d>=0&&d<=(e-0|0)){m.jv=K(n.data,0,d);k.jx=1;k.jy=1;k.jz=m;B(k);}b=new I;b.jx=1;b.jy=1;B(b);}if(g>=e){k=new Co;l=Cu(b,c,d);b=new J;b.jw=G(16);F(b,b.ju,A(78));L(b,b.ju,e,10);F(b,b.ju,A(74));c=b.ju;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jw;o=n.data;d=b.ju;e=o.length;if(d>=0&&d<=(e-0|0)){m.jv=K(n.data,0,d);k.jx=1;k.jy=1;k.jz=m;B(k);}b=new I;b.jx=1;b.jy=1;B(b);}if(h>i){b=new Co;b.jx=1;b.jy=1;b.jz=A(79);B(b);}h=C$(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new Co;l=Cu(b,c,d);b
=new J;b.jw=G(16);F(b,b.ju,A(80));c=b.ju;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jw;o=n.data;d=b.ju;e=o.length;if(d>=0&&d<=(e-0|0)){m.jv=K(n.data,0,d);k.jx=1;k.jy=1;k.jz=m;B(k);}b=new I;b.jx=1;b.jy=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);}b=new Co;k=new J;k.jw=G(16);F(k,k.ju,A(81));L(k,k.ju,e,10);m=new H;n=k.jw;o=n.data;d=k.ju;e=o.length;if(d>=0&&d<=(e-0|0)){m.jv=K(n.data,0,d);b.jx=1;b.jy=1;b.jz=m;B(b);}b=new I;b.jx=1;b.jy=1;B(b);},
Kr=b=>{if(b!==null)return UZ(b,0,b.jv.length,10);b=new Co;b.jx=1;b.jy=1;b.jz=A(75);B(b);},
EB=()=>{let b,c,d,e,f;a:{if(DV===null){b=S(E9,256);c=b.data;DV=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new E9;f.mQ=d-128|0;c[d]=f;d=d+1|0;}}}},
B7=a=>{return a.mQ;},
ANd=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Oa=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
DQ=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AU4=()=>{NB=V(BM);};
function Z(){let a=this;C.call(a);a.jw=null;a.ju=0;}
let ED=a=>{a.jw=G(16);},
ATy=()=>{let a=new Z();ED(a);return a;},
DJ=(a,b)=>{a.jw=G(b);},
AVo=a=>{let b=new Z();DJ(b,a);return b;},
Io=(a,b)=>{F(a,a.ju,b===null?A(2):b.T());return a;},
IQ=(a,b)=>{F(a,a.ju,b);return a;},
F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.ju){if(c===null)c=A(2);else if(c.jv.length?0:1)return a;H3(a,a.ju+c.jv.length|0);d=a.ju-1|0;while(d>=b){a.jw.data[d+c.jv.length|0]=a.jw.data[d];d=d+(-1)|0;}a.ju=a.ju+c.jv.length|0;e=0;a:{while(e<c.jv.length){f=a.jw;d=b+1|0;if(e<0)break a;if(e>=c.jv.length)break a;f.data[b]=c.jv.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);},
H4=(a,b)=>{return L(a,a.ju,b,10);},
HZ=(a,b,c)=>{return L(a,a.ju,b,c);},
L=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(EA(c,d)<0){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);f=a.jw.data;g=b+1|0;f[b]=45;b=g;}a.jw.data[b]=M3(c,d);}else{h=1;i=1;j=DM((-1),d);b:{while(true){k=C$(h,d);if(EA(k,c)>0){k=h;break b;}i=i+1|0;if(EA(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)e=b;else{f=a.jw.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.jw.data;b=e+1|0;f[e]=M3(DM(c,k),d);c=AT8(c,k);k=DM(k,d);e=b;}}}return a;},
Hn=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Cf(c,0.0);if(!d){if(1.0/c===Infinity){Bd(a,b,b+3|0);e=a.jw.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bd(a,b,b+4|0);e=a.jw.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.jw.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.jw.data;d=b+1|0;e[b]=45;}e=a.jw.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Qm;AIV(c,f);d=f.sL;g=f.sy;h=f.us;i=1;j=1;if(h)j=2;k=9;l=AOi(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bd(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.jw.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.jw.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.jw.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.jw.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Ps=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Cf(c,0.0);if(!d){if(1.0/c===Infinity){Bd(a,b,b+3|0);e=a.jw.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bd(a,b,b+4|0);e=a.jw.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.jw.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.jw.data;d=b+1|0;e[b]=45;}e=a.jw.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=PF;AFA(c,f);g=f.s8;h=f.sp;i=f.uj;j=1;k=1;if(i)k=2;l=18;m=ALd(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bd(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.jw.data;i=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.jw.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(AB6(p,B6))d=0;else{d=Be(Mb(g,p));g=WF(g,p);}e=a.jw.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=Mb(p,R(10));q=q+1|0;}if(h){e=a.jw.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
AOi=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
ALd=b=>{let c,d,e,f,g;c=R(1);d=0;e=16;f=Nn.data;g=f.length-1|0;while(g>=0){if(DK(WF(b,Y(c,f[g])),B6)){d=d|e;c=Y(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
F3=(a,b)=>{return a.c4(a.ju,b);},
DT=(a,b,c)=>{F(a,b,c===null?A(2):c.T());return a;},
H3=(a,b)=>{let c,d,e,f,g,h;c=a.jw.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jw=g;},
LD=a=>{let b,c,d,e,f;b=new H;c=a.jw;d=c.data;e=a.ju;f=d.length;if(e>=0&&e<=(f-0|0)){b.jv=K(c.data,0,e);return b;}b=new I;b.jx=1;b.jy=1;B(b);},
JJ=(a,b,c,d,e)=>{let f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jw.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
UG=(a,b)=>{let c,d,e,f;if(b>=0){c=a.ju;if(b<c){c=c-1|0;a.ju=c;while(b<c){d=a.jw.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new T;f.jx=1;f.jy=1;B(f);},
APV=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=Cf(b,c);if(d<=0){e=a.ju;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.ju=e-(c-b|0)|0;g=0;while(g<f){h=a.jw.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new T;i.jx=1;i.jy=1;B(i);},
Bd=(a,b,c)=>{let d,e,f,g;d=a.ju;e=d-b|0;a.cY((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.jw.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.ju=a.ju+(c-b|0)|0;};
let Im=E(0);
let J=E(Z);
let AQK=a=>{a.jw=G(16);},
Et=()=>{let a=new J();AQK(a);return a;},
Ly=(a,b)=>{F(a,a.ju,b===null?A(2):b.T());return a;},
HV=(a,b)=>{F(a,a.ju,b);return a;},
Hl=(a,b)=>{L(a,a.ju,b,10);return a;},
Wr=(a,b)=>{let c;c=a.ju;Bd(a,c,c+1|0);a.jw.data[c]=b;return a;},
ARc=(a,b,c)=>{F(a,b,c===null?A(2):c.T());return a;},
APU=(a,b,c)=>{APV(a,b,c);return a;},
CF=(a,b,c)=>{F(a,b,c);return a;},
AGE=(a,b,c,d,e)=>{let f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jw.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
ABK=(a,b,c,d)=>{let e,f,g,h,i;e=a.ju;Bd(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jw.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
YP=a=>{return a.ju;},
EE=a=>{let b,c,d,e,f;b=new H;c=a.jw;d=c.data;e=a.ju;f=d.length;if(e>=0&&e<=(f-0|0)){b.jv=K(c.data,0,e);return b;}b=new I;b.jx=1;b.jy=1;B(b);},
AG2=(a,b)=>{H3(a,b);},
AHO=(a,b,c)=>{Bd(a,b,b+1|0);a.jw.data[b]=c;return a;},
B$=(a,b,c)=>{F(a,b,c);return a;};
function Qx(){let a=this;C.call(a);a.tV=0;a.wy=0;a.tp=0;a.uy=null;a.wu=0;a.yY=null;a.ub=0;a.wI=null;a.qS=0;a.oU=0;a.sz=0;a.tZ=0;a.u7=0;a.uL=0;a.v5=0;a.vv=0;a.vE=0;a.tJ=0;a.rv=0;}
let X2=(a,b)=>{a.tV=0;a.wy=1;a.tp=0;a.wu=1;a.yY=A(61);a.ub=0;a.qS=(-1);a.oU=(-1);a.sz=0;a.tZ=0;a.u7=0;a.uL=0;a.v5=0;a.vv=0;a.vE=0;a.tJ=0;a.rv=1;a.wI=b;},
ARo=a=>{let b=new Qx();X2(b,a);return b;};
let Pa=E(0);
function K8(){let a=this;C.call(a);a.oa=null;a.qe=null;a.u5=null;a.vz=null;a.xZ=null;a.mY=null;a.q0=null;a.q8=null;a.qO=null;a.nZ=null;a.pE=null;a.se=0;a.tK=0;a.w9=null;a.oC=0;a.qQ=null;a.xr=null;a.w_=null;a.qv=null;a.t2=null;a.oe=null;}
let GD=null;
let Pp=(a,b,c)=>{let d;d=new Bu;d.kr=1;d.jM=S(C,4);a.qO=d;a.pE=MO;a.se=(-1);a.tK=1;a.oC=1;a.xr=Ex(51,0.800000011920929);d=new Bu;d.kr=1;d.jM=S(C,16);a.qv=d;d=new Bu;d.kr=1;d.jM=S(C,16);a.t2=d;EJ();a.nZ=FP;a.mY=c;a.q0=b;AM1(a);},
ASq=(a,b)=>{let c=new K8();Pp(c,a,b);return c;},
AM1=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;GD=AI0();FW();Dh(ES,A(82),A(61));b=W(GD.userAgent);FW();Dh(ES,A(83),b);if(GD.windows?1:0){FW();Dh(ES,A(84),A(85));}else if(GD.macOS?1:0){FW();Dh(ES,A(84),A(86));}else if(!(GD.linux?1:0)){FW();Dh(ES,A(84),A(87));}else{FW();Dh(ES,A(84),A(10));}c=new Oe;d=a.mY.ub;c.v8=0;c.wF=0;c.l7=1;c.l7=d;F$=c;EJ();b=W(FP.mK.location.href);a.oe=b;if(CY(b,A(88))){c=Mg(a.oe,A(89),A(61));a.oe=c;a.oe=Mg(c,A(90),A(61));}e=Hp(a.oe,63,0);if(e>=0)a.oe=Cu(a.oe,0,e);c=a.mY;F9=c.wy;b=ALC(c);a.oa=b;c
=AIZ(a.oe,b.ky,a);a.qQ=c;d=a.mY.wu;f=F$;g=c.rb;h=new J;h.jw=G(16);i=h.ju;if(g===null)g=A(2);CF(h,i,g);CF(h,h.ju,A(91));g=new H;j=h.jw;k=j.data;l=h.ju;m=k.length;if(l>=0&&l<=(m-0|0)){g.jv=K(j.data,0,l);h=new J;h.jw=G(16);F(h,h.ju,g);F(h,h.ju,A(92));g=new H;j=h.jw;k=j.data;l=h.ju;m=k.length;if(l>=0&&l<=(m-0|0)){g.jv=K(j.data,0,l);h=new P1;h.pK=c;h.ux=A(92);h.uw=d;if(f.l7){if(BS===null){c=new CS;b=new Ct;BA(b);b.k3=BE(32);Ez(c);c.lr=b;b=new J;ED(b);c.k6=b;c.k5=G(32);c.k9=0;c.k$=Cl;BS=c;}c=new J;c.jw=G(16);CF(c,
c.ju,A(93));CF(c,c.ju,g);b=new H;j=c.jw;k=j.data;i=c.ju;l=k.length;if(i>=0&&i<=(l-0|0)){b.jv=K(j.data,0,i);BT(Bt(b));BT("\n");}else{c=new I;c.jx=1;c.jy=1;B(c);}}a:{f.kt=f.kt+1|0;c=new GG;c.m2=f;c.oi=1;c.mZ=g;c.m_=h;b=null;g=null;c.mj=new C;c.mi=1;c.mW=g;c.m$=b;e=CE;CE=e+1|0;c.m9=R(e);b=new D1;b.mX=c;El(b);a.qe=Y8(a.oa.ky);c=new TA;c.oG=a.qQ;a.u5=c;c=new SS;b=new Iu;d=Jh(16);b.ol=0;k=S(Fl,d);j=k.data;b.mm=k;b.r2=0.75;b.pc=j.length*0.75|0;c.xS=b;a.vz=c;a.w9=new Qt;c=new SO;c.xV=0;c.rk=1;b=new Lr;b.q5=c;c.xg=b;c.s7
=A(61);a.w_=c;if(a.mY.tp){g=a.qQ;b=new NF;b.wW=a;n=F$;g=g.rb;h=new J;h.jw=G(16);B$(h,h.ju,g===null?A(2):Cd(g));B$(h,h.ju,Cd(A(91)));f=new H;j=h.jw;k=j.data;i=h.ju;l=k.length;if(i>=0&&i<=(l-0|0)){f.jv=K(j.data,0,i);g=new J;g.jw=G(16);CF(g,g.ju,f);CF(g,g.ju,A(94));c=new H;j=g.jw;k=j.data;i=g.ju;l=k.length;if(i>=0&&i<=(l-0|0)){c.jv=K(j.data,0,i);M8(n,1,c,b);break a;}c=new I;c.jx=1;c.jy=1;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}}CV=a;c=a.oa;B5=c;b=c.pj;BU=b;Bi=b;Ed=c.vA;PC=a.qe;Fg=a.u5;ALQ=a.vz;c=new PS;c.v3=null;c.v3
=APr();a.xZ=c;AHs=c;f=a.nZ.mK.document;b=new JE;b.r5=a;f.addEventListener("visibilitychange",B0(b,"handleEvent"));c=a.nZ;c.qU=a;requestAnimationFrame(B0(c,"onAnimationFrame"));c=a.mY;if(!c.qS&&!c.oU?1:0){c=a.nZ;g=new JF;g.pZ=a;g=Dg(g,"handleEvent");c.mK.addEventListener("resize",B0(g,"handleEvent"));}return;}c=new I;c.jx=1;c.jy=1;B(c);}c=new I;c.jx=1;c.jy=1;B(c);},
AFn=a=>{let b,c,d,e,f,g,h,$$je;b=a.pE;a:{try{b:{LP();switch(S9.data[AN1(b)]){case 1:c=AFD(Wk());if(!c){a.pE=IG;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.qQ.sY;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=Et();Wr(Hl(g,f),37);h=EE(g);d.setProperty("width",Bt(h));}}break b;case 2:break;default:break b;}if(a.q0!==null){b=a.q8;if(b!==null){AIy(b);AKt(a.q8);}ACh(a.qe,null);QY(a.qe);PM(a.qv);a.q8
=a.q0;a.q0=null;a.pE=JG;a.oa.rO=B6;}XJ(a,a.q8);}}catch($$e){$$je=Bs($$e);if($$je instanceof DA){h=$$je;break a;}else{throw $$e;}}b=a.nZ;b.qU=a;requestAnimationFrame(B0(b,"onAnimationFrame"));return;}if(C7===null){b=new Fj;d=new Ct;d.k3=BE(32);BA(b);b.lr=d;d=new J;DJ(d,16);b.k6=d;b.k5=G(32);b.k9=0;b.k$=Cl;C7=b;}Jq(h,C7);B(h);},
XJ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;AA6(a.oa);c=B5.ky.width;d=B5.ky.height;e=0;if(a.pE===JG){a.pE=IG;f=new HA;Hy();Kh(f,1000,null);b.yz=f;f=AIH(b);b.yM=f;b.tD=f;g=B5.ky.width;h=B5.ky.height;f=f.mH.od;f.pL=0;f.pM=0;f.qn=g;f.qB=h;i=g;j=f.qT;i=i*j;j=h*j;f.rL=i;f.rW=j;MB(f,0);e=1;}if(!(c==a.se&&d==a.tK&&!e)){a.se=c;a.tK=d;BU.ds(0,0,c,d);f=b.tD;if(f!==null){f=f.mH.od;f.pL=0;f.pM=0;f.qn=c;f.qB=d;i=c;j=f.qT;i=i*j;j=d*j;f.rL=i;f.rW=j;MB(f,0);}}f=a.t2;k=a.qv;l=k.jM;m=k.jA;n=f.jM;o=n.data;d=f.jA;c=d+
m|0;if(c<=o.length)k=n;else{p=8;if(p<=c)p=c;d=d*1.75|0;if(p>d)d=p;q=n.constructor;if(q===null)k=null;else{k=q.classObject;if(k===null){k=new BJ;k.jO=q;r=k;q.classObject=r;}}s=k.jO.$meta.item;if(s===null)q=null;else{q=s.classObject;if(q===null){q=new BJ;q.jO=s;k=q;s.classObject=k;}}if(q===null){b=new C4;X(b);B(b);}if(q===V(Br)){b=new Bk;X(b);B(b);}if(d<0){b=new DI;X(b);B(b);}k=DG(q.jO,d);q=k.data;h=f.jA;g=q.length;if(h<g)g=h;F_(n,0,k,0,g);f.jM=k;}F_(l,0,k,f.jA,m);f.jA=c;f=a.qv;l=f.jM;e=0;m=f.jA;k=null;if(e>m)
{b=new Bk;b.jx=1;b.jy=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.jA=0;m=0;while(true){q=a.t2;e=q.jA;d=Cf(m,e);if(d>=0){l=q.jM;m=0;f=null;if(m>e){b=new Bk;b.jx=1;b.jy=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}q.jA=0;f=a.oa;t=CR(f.rO,R(1));f.rO=t;if(ABF(t,R(60))){b=b.tD;if(b!==null){BU.dt(0.0,0.0,0.0,1.0);BU.du(16384);f=b.mH;q=f.od.pO;Vx(q,1);if(f.lG.mB){k=f.t8;q=q.pu;if(k.lC)DO(k);CZ(k.rC,q.kv);if(k.lC)FU(k);Qr(k);q=f.lG;if(q.mJ){r=J4(q);CZ(q.oD,k.n8.kv);if(k.lC)DO(k);CZ(k.n8,r.kv);if(k.lC)FU(k);}Pm(q,
k,1.0);if(q.mJ){q=q.oD;if(k.lC)DO(k);CZ(k.n8,q.kv);if(k.lC)FU(k);}T5(k);if(BH)ALH(f);}AMA(b.mH,TB(B5.s5,0.03333333507180214));}}QY(a.qe);return;}if(d>=0){f=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,m,10);F(b,b.ju,A(19));e=q.jA;L(b,b.ju,e,10);k=new H;l=b.jw;n=l.data;m=b.ju;d=n.length;if(m>=0&&m<=(d-0|0)){k.jv=K(l.data,0,m);f.jx=1;f.jy=1;f.jz=k;B(f);}b=new I;X(b);B(b);}q=q.jM.data[m];r=q.s4.qV;u=r.jM.constructor;if(u===null)s=null;else{s=u.classObject;if(s===null){s=new BJ;s.jO=u;f=s;u.classObject=f;}}u
=s.jO.$meta.item;if(u===null)k=null;else{k=u.classObject;if(k===null){k=new BJ;k.jO=u;f=k;u.classObject=f;}}e=r.jA;if(k===null){b=new C4;X(b);B(b);}if(k===V(Br)){b=new Bk;X(b);B(b);}if(e<0)break;f=DG(k.jO,e);F_(r.jM,0,f,0,r.jA);l=f;q.s4.rD.ue.uy.dx(l);m=m+1|0;}b=new DI;X(b);B(b);};
let UX=E(0);
function LO(){C.call(this);this.tD=null;}
let AKt=a=>{return;},
AIy=a=>{return;};
function Pc(){let a=this;LO.call(a);a.yz=null;a.yM=null;}
let AMN=E();
let Bc=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(95);d=1<<c;e=d-1|0;f=(((32-Oa(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=C$(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=M3((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new H;l.jv=K(g.data,0,h.length);return l;};
let HE=E(Bx);
let MO=null,JG=null,IG=null,T3=null;
let AHw=()=>{let b,c,d;b=new HE;b.jJ=A(96);b.jE=0;MO=b;c=new HE;c.jJ=A(97);c.jE=1;JG=c;d=new HE;d.jJ=A(98);d.jE=2;IG=d;T3=P(HE,[b,c,d]);};
let NK=E(0);
let Cm=E(0);
let QT=E(0);
function IO(){let a=this;C.call(a);a.mK=null;a.qU=null;}
let FP=null;
let EJ=()=>{EJ=BG(IO);AD$();};
let AD$=()=>{let b;b=new IO;EJ();b.mK=window;FP=b;},
AKR=(a,b)=>{let c;b;c=a.qU;a.qU=null;AFn(c);};
let AKx=E();
let Qk=E();
let BW=null;
let Dy=()=>{Dy=BG(Qk);AJy();};
let AJy=()=>{BW=Ex(51,0.800000011920929);};
function MS(){D$.call(this);this.uc=0.0;}
let Qi=null;
let AUE=()=>{Qi=V(Eh);};
function Gn(){let a=this;C.call(a);a.qK=null;a.qG=0;}
let AE9=E();
let Um=b=>{return Math.sin(b);},
XW=b=>{return Math.cos(b);},
Da=b=>{return Math.sqrt(b);},
Ks=b=>{return Math.ceil(b);},
Ga=(b,c)=>{return Math.pow(b,c);},
TB=(b,c)=>{return Math.min(b,c);},
J2=b=>{return Math.abs(b);},
CA=b=>{return Math.sign(b);};
function Dv(){let a=this;C.call(a);a.xM=null;a.xT=null;}
let P9=a=>{let b;b=new Bu;b.kr=1;b.jM=S(C,16);a.xM=b;b=new Gn;b.qG=1;b.qK=B_(16);a.xT=b;},
AT_=()=>{let a=new Dv();P9(a);return a;};
function Fo(){let a=this;C.call(a);a.lN=null;a.kU=0;a.oo=0;}
let Le=(a,b)=>{let c,d,e,f,g;c=a.lN;d=c.data;e=a.kU;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=U(f);g=d.data.length;if(e<g)g=e;Du(c,0,d,0,g);a.lN=d;}c=d.data;f=a.kU;a.kU=f+1|0;c[f]=b;},
ARe=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.kU;if(b>d){e=new I;f=new J;f.jw=G(16);F(f,f.ju,A(99));L(f,f.ju,b,10);F(f,f.ju,A(100));b=a.kU;L(f,f.ju,b,10);g=new H;h=f.jw;i=h.data;c=f.ju;d=i.length;if(c>=0&&c<=(d-0|0)){g.jv=K(h.data,0,c);e.jx=1;e.jy=1;e.jz=g;B(e);}e=new I;e.jx=1;e.jy=1;B(e);}i=a.lN;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=U(k);l=j.data.length;if(d<l)l=d;Du(i,0,j,0,l);a.lN=j;}if(!a.oo){h=j.data;h[a.kU]=h[b];}else Du(j,b,j,b+1|0,a.kU-b|0);h=j.data;a.kU=a.kU+1|0;h[b]=c;};
let Lv=E(0);
let Kg=E();
let EU=E(0);
function Iu(){let a=this;Kg.call(a);a.ol=0;a.mm=null;a.rY=0;a.r2=0.0;a.pc=0;}
let Jh=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
F5=(a,b)=>{let c,d,e,f;if(b===null){c=a.mm.data[0];while(c!==null&&c.ml!==null){c=c.mx;}}else{c=b;if(!c.$id$){d=D8();c.$id$=d;}e=b.$id$;f=a.mm.data;c=f[e&(f.length-1|0)];while(c!==null){if(c.ow==e){d=c.ml;if(b!==d&&!(b!==d?0:1)?0:1)break;}c=c.mx;}}return c;},
EW=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.mm.data;e=d[0];while(e!==null&&e.ml!==null){e=e.mx;}if(e===null){a.rY=a.rY+1|0;f=null;e=new Fl;b=null;e.ml=f;e.lW=b;e.ow=0;e.mx=d[0];d[0]=e;g=a.ol+1|0;a.ol=g;if(g>a.pc)Qb(a,d.length);}}else{f=b;if(!f.$id$){e=D8();f.$id$=e;}h=b.$id$;d=a.mm.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.ow==h){f=e.ml;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.mx;}if(e===null){a.rY=a.rY+1|0;e=new Fl;f=null;e.ml=b;e.lW=f;e.ow=h;e.mx=d[j];d[j]=e;g=a.ol+1|0;a.ol=g;if(g>a.pc)Qb(a,
i);}}f=e.lW;e.lW=c;return f;},
Qb=(a,b)=>{let c,d,e,f,g,h,i,j;c=Jh(!b?1:b<<1);d=S(Fl,c);e=d.data;f=0;c=c-1|0;while(true){g=a.mm.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.ow&c;j=h.mx;h.mx=e[i];e[i]=h;h=j;}f=f+1|0;}a.mm=d;a.pc=e.length*a.r2|0;};
let HM=E(0);
let M1=E();
let L3=E();
let NA=null,KH=null,BN=null,BO=null,L0=null,S3=null,BC=null,BB=null,I4=null,I5=null;
let Zx=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new I;e.jx=1;e.jy=1;B(e);},
Cq=(b,c)=>{let d,e;d=b.vu.data;if(c<d.length)return c+d[c]|0;d=b.vh;e=AN2(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
AN2=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=Cf(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
O6=b=>{let c,d,e,f,g,h;if(KH===null){if(I4===null)I4=AET();KH=AQQ((I4.value!==null?W(I4.value):null));}c=KH.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=Cf(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
M3=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
EL=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bk;c.jx=1;c.jy=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AE5([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
CG=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(L0===null){if(I5===null)I5=ARQ();L0=ASc((I5.value!==null?W(I5.value):null));}e=L0.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.s9)c=f+1|0;else{d=g.sJ;if(b>=d)return g.sM.data[b-d|0];d=f-1|0;}}return 0;},
G5=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CG(b)!=16?0:1;},
ASJ=()=>{NA=V(J6);S3=S(L3,128);},
DB=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
DD=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
AET=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
ARQ=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let ABx=E();
let AI0=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AK4=E();
let BS=null,C7=null,ES=null;
let F_=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IU(b)&&(e+f|0)<=IU(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BJ;h.jO=g;i=h;g.classObject=i;}}j=DY(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BJ;h.jO=g;i=h;g.classObject=i;}}i=DY(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.jO.$meta.primitive?1:0)&&!(i.jO.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.jO;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&LQ(g.constructor,p)?1:0)){Iw(b,c,d,e,l);b=new Jb;b.jx=1;b.jy=1;B(b);}l=l+1|0;m=o;}Iw(b,c,d,e,f);return;}if(!(j.jO.$meta.primitive?1:0))break a;if(i.jO.$meta.primitive?1:0)break b;else break a;}b=new Jb;b.jx=1;b.jy=1;B(b);}}Iw(b,c,d,e,f);return;}b=new Jb;b.jx=1;b.jy=1;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}d=new C4;d.jx=1;d.jy=1;d.jz=A(101);B(d);},
Du=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IU(b)&&(e+f|0)<=IU(d)){Iw(b,c,d,e,f);return;}b=new I;b.jx=1;b.jy=1;B(b);},
Iw=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
D2=()=>{return DL((new Date()).getTime());},
FW=()=>{let b,c;if(ES===null){b=new L$;Kb(b,11);Dh(b,A(102),A(103));Dh(b,A(84),A(104));Dh(b,A(105),A(106));Dh(b,A(107),A(108));Dh(b,A(109),A(110));Dh(b,A(111),A(112));Dh(b,A(113),A(103));Dh(b,A(114),A(106));c=new L$;Kb(c,11);c.yi=b;ES=c;}};
let Ne=E(0);
function Oe(){let a=this;C.call(a);a.kt=0;a.v8=0;a.wF=0;a.l7=0;}
let AFD=a=>{return a.kt;},
AAm=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{Ms();switch(TK.data[d.jE]){case 1:if(a.l7){if(BS===null){d=new CS;e=new Ct;e.k3=BE(32);BA(d);d.lr=e;e=new J;DJ(e,16);d.k6=e;d.k5=G(32);d.k9=0;d.k$=Cl;BS=d;}d=new J;d.jw=G(16);F(d,d.ju,A(93));F(d,d.ju,c===null?A(2):c);e=new H;g=d.jw;h=g.data;i=d.ju;j=h.length;if(i>=0&&i<=(j-0|0)){e.jv=K(g.data,0,i);BT(Bt(e));BT("\n");}else{c=new I;X(c);B(c);}}a.kt=a.kt+1|0;d=new GG;d.m2=a;d.oi=b;d.mZ=c;d.m_=f;c=null;e=null;d.mj=new C;d.mi=1;d.mW=e;d.m$=c;k=CE;CE=k+1|0;d.m9=R(k);c=new D1;c.mX
=d;El(c);break a;case 2:d=null;l=new NM;l.qP=a;l.pS=f;l.uV=d;l.wx=e;if(a.l7){if(BS===null){d=new CS;e=new Ct;Ez(e);e.k3=BE(32);FG(d,e);d.k6=Et();d.k5=G(32);d.k9=0;d.k$=Cl;BS=d;}d=new J;d.jw=G(16);B$(d,d.ju,Cd(A(93)));B$(d,d.ju,c===null?A(2):Cd(c));e=new H;g=d.jw;h=g.data;i=d.ju;j=h.length;if(i>=0&&i<=(j-0|0)){e.jv=K(g.data,0,i);BT(Bt(e));BT("\n");}else{c=new I;NS(c);B(c);}}a.kt=a.kt+1|0;d=new FF;d.mL=a;d.nA=b;d.mG=c;d.m1=l;c=null;e=null;d.mj=new C;d.mi=1;d.mW=e;d.m$=c;k=CE;CE=k+1|0;d.m9=R(k);c=new D1;c.mX=d;El(c);break a;case 3:if
(a.l7){if(BS===null){d=new CS;e=new Ct;e.k3=BE(32);BA(d);d.lr=e;e=new J;DJ(e,16);d.k6=e;d.k5=G(32);d.k9=0;d.k$=Cl;BS=d;}d=new J;d.jw=G(16);F(d,d.ju,A(93));F(d,d.ju,c===null?A(2):c);e=new H;g=d.jw;h=g.data;i=d.ju;j=h.length;if(i>=0&&i<=(j-0|0)){e.jv=K(g.data,0,i);BT(Bt(e));BT("\n");}else{c=new I;X(c);B(c);}}a.kt=a.kt+1|0;d=new FF;d.mL=a;d.nA=b;d.mG=c;d.m1=f;c=null;e=null;d.mj=new C;d.mi=1;d.mW=e;d.m$=c;k=CE;CE=k+1|0;d.m9=R(k);c=new D1;c.mX=d;El(c);break a;case 4:e=new NL;e.yu=a;e.rq=f;if(a.l7){if(BS===null){d
=new CS;f=new Ct;BA(f);f.k3=BE(32);Ez(d);d.lr=f;f=new J;ED(f);d.k6=f;d.k5=G(32);d.k9=0;d.k$=Cl;BS=d;}d=new J;d.jw=G(16);CF(d,d.ju,A(93));CF(d,d.ju,c===null?A(2):c);f=new H;g=d.jw;h=g.data;i=d.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);BT(Bt(f));BT("\n");}else{c=new I;IV(c);B(c);}}a.kt=a.kt+1|0;d=new FF;d.mL=a;d.nA=b;d.mG=c;d.m1=e;c=null;e=null;d.mj=new C;d.mi=1;d.mW=e;d.m$=c;k=CE;CE=k+1|0;d.m9=R(k);c=new D1;c.mX=d;El(c);break a;case 5:break;default:c=new Q;e=new J;e.jw=G(16);F(e,e.ju,A(115));F(e,
e.ju,d.jJ);d=new H;g=e.jw;h=g.data;k=e.ju;i=h.length;if(k>=0&&k<=(i-0|0)){d.jv=K(g.data,0,k);c.jx=1;c.jy=1;c.jz=d;B(c);}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);}c=null;GF(f.qm,f.qy,f.qb,c);c=f.mz.mq;c.pq=1;c.mN=0;}},
M8=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.l7){if(BS===null){e=new CS;f=new Ct;f.k3=BE(32);e.lr=f;f=new J;BA(f);f.jw=G(16);e.k6=f;e.k5=G(32);e.k9=0;e.k$=Cl;BS=e;}e=new J;e.jw=G(16);F(e,e.ju,A(116));F(e,e.ju,c===null?A(2):c);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);BT(Bt(f));BT("\n");}else{c=new I;c.jx=1;c.jy=1;B(c);}}a.kt=a.kt+1|0;f=new XMLHttpRequest();e=new JH;e.px=a;e.ot=f;e.sV=b;e.rl=c;e.tx=d;e=B0(e,"handleEvent");f.onreadystatechange=e;e=new GH;e.tH=a;e.qX=d;d=B0(e,"handleEvent");f.onprogress
=d;f.open("GET",Bt(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let AAV=E();
let F$=null;
let Wk=()=>{return F$;};
let ADM=E();
let C1=0,F9=0;
let ATM=()=>{C1=1;};
let SJ=E(0);
function J1(){let a=this;C.call(a);a.oV=null;a.ky=null;a.wg=null;a.pj=null;a.vA=null;a.xi=null;a.wJ=0.0;a.r8=B6;a.rO=B6;a.s5=0.0;a.rI=0.0;a.tU=0;}
let ML=0,Fr=null;
let Ei=()=>{Ei=BG(J1);YF();};
let AHz=(a,b)=>{let c,d,e,f,g,h,i,j,k;Ei();a.wJ=0.0;a.r8=D2();a.rO=R(-1);a.s5=0.0;a.rI=0.0;a.wg=b;EJ();c=window.document;d=b.wI;a.ky=c.getElementById(Bt(d));e=ABU();d=!!b.v5;e.alpha=d;d=!!b.uL;e.antialias=d;d=!!b.u7;e.stencil=d;d=!!b.vv;e.premultipliedAlpha=d;d=!!b.vE;e.preserveDrawingBuffer=d;f=a.ky;if(b.tV)a.oV=f.getContext("webgl2",e);a:{if(b.tV){d=a.oV;if(d!==null){if(!b.tJ)f=APP(d);else{f=new Of;Nj(f,d);}a.vA=f;a.pj=f;break a;}}f=f.getContext("webgl",e);a.oV=f;if(!b.tJ)d=AOM(f);else{d=new UU;LL(d,f);}a.pj
=d;}d=a.pj.dO(7938);c=a.pj.dO(7936);g=a.pj.dO(7937);a.xi=AK0(G2,d,c,g);h=b.qS;if(!(h<0&&b.oU<0)){if(h&&b.oU?1:0)JB(a,h,b.oU);else{i=FP;h=i.mK.document.documentElement.clientWidth-b.sz|0;j=i.mK.document.documentElement.clientHeight-b.tZ|0;k=!b.rv?1.0:devicePixelRatio||1;JB(a,k*h|0,k*j|0);}}b=a.ky;d=new LX;d.w1=a;Xe(b,B0(d,"fullscreenChanged"));},
ALC=a=>{let b=new J1();AHz(b,a);return b;},
AA6=a=>{let b,c,d;b=D2();c=ATX(AFh(b,a.r8))/1000.0;a.s5=c;a.r8=b;c=a.rI+c;a.rI=c;d=a.tU+1|0;a.tU=d;if(c>1.0){a.wJ=d;a.rI=0.0;a.tU=0;}},
JB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.ky;e=b;d.width=e;d=a.ky;e=c;d.height=e;if(a.wg.rv){f=devicePixelRatio||1;e=a.ky.style;g=b/f;H8();h=new J;h.jw=G(16);Ps(h,h.ju,g);F(h,h.ju,A(117));i=new H;j=h.jw;k=j.data;l=h.ju;b=k.length;if(l>=0&&l<=(b-0|0)){i.jv=K(j.data,0,l);e.setProperty("width",Bt(i));f=c/f;i=new J;i.jw=G(16);Ps(i,i.ju,f);F(i,i.ju,A(117));h=new H;j=i.jw;k=j.data;c=i.ju;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.jv=K(j.data,0,c);e.setProperty("height",Bt(h));}else{d=new I;d.jx=1;d.jy=1;B(d);}}return;}d
=new I;d.jx=1;d.jy=1;B(d);},
YF=()=>{ML=0;Fr=C6(51,0.800000011920929);},
Xe=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function NE(){let a=this;C.call(a);a.tk=null;a.ro=null;a.tc=null;a.tr=null;a.tu=null;a.uX=null;a.q3=null;a.sY=0;a.rb=null;}
let AGw=(a,b,c,d)=>{let e;a.tk=Ex(51,0.800000011920929);a.ro=Ex(51,0.800000011920929);a.tc=Ex(51,0.800000011920929);a.tr=Ex(51,0.800000011920929);a.tu=Ex(51,0.800000011920929);a.uX=Ex(51,0.800000011920929);e=new Bu;e.kr=1;e.jM=S(C,16);a.q3=e;a.sY=(-1);a.rb=b;ANl(a,c,d);},
AIZ=(a,b,c)=>{let d=new NE();AGw(d,a,b,c);return d;},
ANl=(a,b,c)=>{let d,e,f;d=c.mY;if(d.uy!==null){e=b.ownerDocument;f=new KM;f.x_=a;e.addEventListener("dragenter",B0(f,"handleEvent"),!!0);f=new KN;f.yG=a;e.addEventListener("dragover",B0(f,"handleEvent"),!!0);f=new KL;f.uB=a;f.un=c;f.ue=d;e.addEventListener("drop",B0(f,"handleEvent"));}},
AE2=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AFf(a,b.sQ)){b.rf=b.wl;b.pq=1;b.o4=0;b.mN=0;return 0;}if(b.mN)return 0;b.o4=0;b.pq=0;b.mN=1;c=b.sQ;d=b.uI;e=b.uz;f=new P2;f.yV=a;f.mq=b;b=F$;g=a.rb;h=new J;h.jw=G(16);i=h.ju;if(g===null)g=A(2);CF(h,i,g);CF(h,h.ju,A(91));g=new H;j=h.jw;k=j.data;l=h.ju;m=k.length;if(l>=0&&l<=(m-0|0)){g.jv=K(j.data,0,l);h=new J;h.jw=G(16);F(h,h.ju,g);F(h,h.ju,c===null?A(2):c);g=new H;k=h.jw;j=k.data;m=h.ju;i=j.length;if(m>=0&&m<=(i-0|0)){g.jv=K(k.data,0,m);h=new P0;h.qm=a;h.mz=f;h.qy=d;h.qb
=c;AAm(b,1,g,d,e,h);return 1;}b=new I;X(b);B(b);}b=new I;IV(b);B(b);},
GF=(a,b,c,d)=>{a:{MJ();switch(N6.data[b.jE]){case 1:break;case 2:C5(a.ro,c,d);break a;case 3:C5(a.tu,c,d);break a;case 4:C5(a.tc,c,d);break a;case 5:C5(a.tk,c,null);break a;default:break a;}C5(a.tr,c,d);}},
AFf=(a,b)=>{let c;c=B3(a.tr,b)<0?0:1;return !c&&!(B3(a.ro,b)<0?0:1)&&!(B3(a.tu,b)<0?0:1)&&!(B3(a.tc,b)<0?0:1)&&!(B3(a.tk,b)<0?0:1)?0:1;};
let Dq=E();
let AIl=(a,b)=>{return;};
let Ss=E(0);
let D7=E(0);
function Lx(){let a=this;C.call(a);a.kF=null;a.pQ=0;a.pa=null;a.nm=null;a.li=null;a.lh=null;a.mU=null;a.mV=null;a.rB=null;a.p0=0;a.si=null;a.rz=0;a.s0=null;a.tQ=null;a.sZ=null;a.l2=null;a.n9=B6;a.pt=0;}
let ARd=b=>{let c,d,e,f;c=GD;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(J2(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AK8=(a,b)=>{a.pQ=0;a.pa=C6(20,0.800000011920929);a.nm=Jt(20);a.li=U(20);a.lh=U(20);a.mU=U(20);a.mV=U(20);a.rB=N$(51,0.800000011920929);a.p0=0;a.si=Jt(256);a.rz=0;a.s0=Jt(256);a.tQ=Jt(5);a.sZ=N$(51,0.800000011920929);a.pt=1;a.kF=b;AIv(a);},
Y8=a=>{let b=new Lx();AK8(b,a);return b;},
AIv=a=>{let b;b=a.kF.ownerDocument;b.addEventListener("mousedown",B0(a,"handleEvent"),!!0);b.addEventListener("mouseup",B0(a,"handleEvent"),!!0);b.addEventListener("mousemove",B0(a,"handleEvent"),!!0);b.addEventListener("wheel",B0(a,"handleEvent"),!!0);b.addEventListener("keydown",B0(a,"handleEvent"),!!0);b.addEventListener("keyup",B0(a,"handleEvent"),!!0);b.addEventListener("keypress",B0(a,"handleEvent"),!!0);a.kF.addEventListener("touchstart",B0(a,"handleEvent"),!!1);a.kF.addEventListener("touchmove",B0(a,
"handleEvent"),!!1);a.kF.addEventListener("touchcancel",B0(a,"handleEvent"),!!1);a.kF.addEventListener("touchend",B0(a,"handleEvent"),!!1);},
AI2=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=W(b.type);if(c!==A(118)){if(A(118) instanceof H){d=A(118);e=c.jv!==d.jv?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(119))e=1;else if(A(119) instanceof H){d=A(119);e=c.jv!==d.jv?0:1;}else e=0;if(!e){if(c===A(120))e=1;else if(!(A(120) instanceof H))e=0;else{d=A(120);e=c.jv!==d.jv?0:1;}if(e){if(!(Mz(a.kF)?1:0)){f=Hh(a,b,a.kF);g=Hx(a,b,a.kF);h=a.li.data;i=f-h[0]|0;j=a.lh.data;e=g-j[0]|0;a.mU.data[0]=i;a.mV.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.mU.data[0]=k;a.mV.data[0]=f;h=a.li.data;h[0]=h[0]+b.movementX|0;h=a.lh.data;h[0]=h[0]+b.movementY|0;}a.n9=DL(performance.now()*1000000.0);d=a.l2;if(d!==null){if(!a.nm.data[0])d.d0(a.li.data[0],a.lh.data[0]);else d.d1(a.li.data[0],a.lh.data[0],0);}}else{if(c===A(121))e=1;else if(!(A(121) instanceof H))e=0;else{d=A(121);e=c.jv!==d.jv?0:1;}if(e){if(a.l2!==null){l=ARd(b);a.l2.d3(0.0,l|0);}a.n9=DL(performance.now()*1000000.0);}else{if(c===A(122))e=1;else if(!(A(122) instanceof H))e=0;else{d=A(122);e=c.jv!==
d.jv?0:1;}if(e){a.pQ=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.pa;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.pa;if(o>=(-128)&&o<=127){EB();q=DV.data[o+128|0];}else{q=new E9;q.mQ=o;}if(!ARk(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){EB();p=DV.data[o+128|0];}else{p=new E9;p.mQ=o;}B2(n,k,p);a.nm.data[o]=1;h=a.li;q=a.kF;l=q.width*1.0/q.clientWidth;k=(d.clientX-(FI(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=W(p.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f
=0;else{q=A(123);f=n.jv!==q.jv?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+CA(l)*0.5|0;h=a.lh;q=a.kF;l=q.height*1.0/q.clientHeight;k=(d.clientY-(Gh(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=W(d.compatMode);if(q===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=q.jv!==p.jv?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+CA(l)*0.5|0;a.mU.data[o]=0;a.mV.data[o]=0;d=a.l2;if(d!==null)d.d8(a.li.data[o],a.lh.data[o],o,0);e=e+1|0;}a.n9=DL(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.nm.data[0])return;d=a.rB;e=b.button;APn(d,!e?0:e==2?1:e!=1?0:2);h=a.nm;h.data[0]=a.rB.mR<=0?0:1;if(!(Mz(a.kF)?1:0)){k=Hh(a,b,a.kF)-a.li.data[0]|0;f=Hx(a,b,a.kF)-a.lh.data[0]|0;a.mU.data[0]=k;a.mV.data[0]=f;a.li.data[0]=Hh(a,b,a.kF);a.lh.data[0]=Hx(a,b,a.kF);}else{k=b.movementX|0;f=b.movementY|0;a.mU.data[0]=k;a.mV.data[0]=f;h=a.li.data;h[0]=h[0]+b.movementX|0;h=a.lh.data;h[0]=h[0]+b.movementY|0;}a.n9=DL(performance.now()*1000000.0);a.nm.data[0]=0;d=a.l2;if(d!==null)
{e=a.li.data[0];k=a.lh.data[0];g=b.button;d.d$(e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.kF;if(n!==p?0:1){h=a.nm.data;if(!h[0]){a.pt=1;a.pQ=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;AA7(a.rB,r);a.tQ.data[r]=1;a.mU.data[0]=0;a.mV.data[0]=0;if(!(Mz(a.kF)?1:0)){f=Hh(a,b,a.kF);g=Hx(a,b,a.kF);a.li.data[0]=f;a.lh.data[0]=g;}else{h=a.li.data;h[0]=h[0]+b.movementX|0;h=a.lh.data;h[0]=h[0]+b.movementY|0;}a.n9=DL(performance.now()*1000000.0);d=a.l2;if(d!==null){e=a.li.data[0];k=a.lh.data[0];g=
b.button;d.d8(e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=Hh(a,b,p);t=Hx(a,b,a.kF);if(!(s>=0.0&&s<=B5.ky.width&&t>=0.0&&t<=B5.ky.height))a.pt=0;return;}}if(c===A(124))e=1;else if(!(A(124) instanceof H))e=0;else{d=A(124);e=c.jv!==d.jv?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.pa;if(!k)d=!d.j2?null:d.jZ;else{h=d.jX;f=Be(Bb(Y(R(k),D(2135587861, 2654435769)),d.j3));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}u=d.mQ;d=a.kF;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FI(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=n.jv!==p.jv?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+CA(l)*0.5|0)-a.li.data[u]|0;d=a.kF;l=d.height*1.0/d.clientHeight;f=(q.clientY-(Gh(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))g=1;else if(!(A(123) instanceof H))g=0;else
{p=A(123);g=n.jv!==p.jv?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+CA(l)*0.5|0)-a.lh.data[u]|0;a.mU.data[u]=k;a.mV.data[u]=f;h=a.li;d=a.kF;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FI(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=n.jv!==p.jv?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+CA(l)*0.5|0;h=a.lh;d=a.kF;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gh(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=q.jv!==p.jv?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+CA(l)*0.5|0;d=a.l2;if(d!==null)d.d1(a.li.data[u],a.lh.data[u],u);e=e+1|0;}a.n9=DL(performance.now()*1000000.0);b.preventDefault();}if(c===A(125))e=1;else if(!(A(125) instanceof H))e=0;else{d=A(125);e=c.jv!==d.jv?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.pa;if(!v)p=!d.j2?null
:d.jZ;else{h=d.jX;k=Be(Bb(Y(R(v),D(2135587861, 2654435769)),d.j3));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.j1;}}p=k<0?null:d.jY.data[k];}u=p.mQ;Gt(d,v);a.nm.data[u]=0;d=a.kF;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FI(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=n.jv!==p.jv?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CA(l)*0.5|0;d=a.kF;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(Gh(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{p=A(123);f=q.jv!==p.jv?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CA(l)*0.5|0;h=a.li.data;k=o-h[u]|0;j=a.lh.data;f=g-j[u]|0;a.mU.data[u]=k;a.mV.data[u]=f;h[u]=o;j[u]=g;d=a.l2;if(d!==null)d.d$(h[u],j[u],u,0);e=e+1|0;}a.n9=DL(performance.now()*1000000.0);b.preventDefault();}if(c===A(126))e=1;else if(!(A(126) instanceof H))e=0;else{d=A(126);e=c.jv!==d.jv?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.pa;if(!k)c=!d.j2?null:d.jZ;else{h=d.jX;f=Be(Bb(Y(R(k),D(2135587861, 2654435769)),d.j3));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.j1;}}c=f<0?null:d.jY.data[f];}u=c.mQ;Gt(d,k);a.nm.data[u]=0;d=a.kF;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FI(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{c=A(123);f=p.jv!==c.jv
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CA(l)*0.5|0;d=a.kF;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gh(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(123))f=1;else if(!(A(123) instanceof H))f=0;else{c=A(123);f=p.jv!==c.jv?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CA(l)*0.5|0;h=a.li.data;k=o-h[u]|0;j=a.lh.data;f=g-j[u]|0;a.mU.data[u]=k;a.mV.data[u]=f;h[u]=o;j[u]=g;d=a.l2;if(d!==null)d.d$(h[u],j[u],u,0);e=e+1|0;}a.n9=DL(performance.now()*1000000.0);b.preventDefault();}},
WL=(a,b)=>{let c,d,e,f,g,h,i;c=W(b.type);if(c===A(127))d=1;else if(!(A(127) instanceof H))d=0;else{e=A(127);d=c.jv!==e.jv?0:1;}if(d&&a.pt){a:{f=Rr(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}e=a.sZ;if(!f)d=e.pm;else{h=e.nX;d=Be(Bb(Y(R(f),D(2135587861, 2654435769)),e.o1));b:{while(true){i=h.data[d];if(!i){d= -(d+1|0)|0;break b;}if(i==f)break;d=(d+1|0)&e.nO;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.l2;if(e!==null){e.eb(f);a.l2.ec(g);}}else
{h=a.si.data;if(!h[f]){a.p0=a.p0+1|0;h[f]=1;a.rz=1;a.s0.data[f]=1;e=a.l2;if(e!==null)e.eb(f);}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(128))d=1;else if(!(A(128) instanceof H))d=0;else{e=A(128);d=c.jv!==e.jv?0:1;}if(d&&a.pt){d=b.charCode&65535;e=a.l2;if(e!==null)e.ec(d);if(d==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(129))d=1;else if(!(A(129) instanceof H))d=0;else{e=A(129);d=c.jv!==e.jv?0:1;}if(d&&a.pt){f=Rr(b.keyCode);e=a.sZ;if(!f)d=e.pm;else{h=e.nX;d=Be(Bb(Y(R(f),D(2135587861, 2654435769)),
e.o1));c:{while(true){g=h.data[d];if(!g){d= -(d+1|0)|0;break c;}if(g==f)break;d=(d+1|0)&e.nO;}}d=d<0?0:1;}if(d)b.preventDefault();h=a.si.data;if(h[f]){a.p0=a.p0-1|0;h[f]=0;}e=a.l2;if(e!==null)e.ed(f);if(f==61){b.preventDefault();b.stopPropagation();}}}}},
QY=a=>{let b,c,d;a:{if(a.pQ){a.pQ=0;b=0;while(true){c=a.tQ.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.rz){a.rz=0;d=0;while(true){c=a.s0.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
Hh=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(FI(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(123))g=1;else if(!(A(123) instanceof H))g=0;else{c=A(123);g=f.jv!==c.jv?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CA(d)*0.5|0;},
Hx=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Gh(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(123))g=1;else if(!(A(123) instanceof H))g=0;else{c=A(123);g=f.jv!==c.jv?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CA(d)*0.5|0;},
Gh=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
FI=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ACh=(a,b)=>{a.l2=b;},
Mz=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
Xs=(a,b)=>{AI2(a,b);WL(a,b);};
let RM=E(0);
function TA(){C.call(this);this.oG=null;}
function SS(){C.call(this);this.xS=null;}
let SK=E(0);
let Qt=E();
let OV=E(0);
function SO(){let a=this;C.call(a);a.xV=0;a.rk=0;a.xg=null;a.s7=null;}
let TJ=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AJj=E();
let CV=null,B5=null,AHs=null,PC=null,Fg=null,ALQ=null,BU=null,Bi=null,Ed=null;
let TE=E(0);
let ST=E(0);
function PS(){C.call(this);this.v3=null;}
function JE(){C.call(this);this.r5=null;}
let ACw=(a,b)=>{let c,d,$$je;c=W(a.r5.nZ.mK.document.visibilityState);if(A(130)===c)d=1;else if(!(c instanceof H))d=0;else{c=c;d=A(130).jv!==c.jv?0:1;}if(!d){b=a.r5.qO;Ft(b);a:{try{c=FZ(b);while(G_(c)){AI6(Ck(c));}Ds(b);break a;}catch($$e){$$je=Bs($$e);c=$$je;}Ds(b);B(c);}}else{b=a.r5.qO;Ft(b);b:{try{c=FZ(b);while(G_(c)){ANp(Ck(c));}Ds(b);break b;}catch($$e){$$je=Bs($$e);c=$$je;}Ds(b);B(c);}}},
ALL=(a,b)=>{ACw(a,b);};
function JF(){C.call(this);this.pZ=null;}
let ARS=(a,b)=>{let c,d,e,f,g;c=a.pZ.nZ.mK.document.documentElement.clientWidth;b=a.pZ;d=c-b.mY.sz|0;e=b.nZ.mK.document.documentElement.clientHeight;b=a.pZ;f=b.mY;c=e-f.tZ|0;if(d>0&&c>0){if(b.oa!==null){if(f.rv){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}JB(a.pZ.oa,d,c);}return;}},
AQz=(a,b)=>{ARS(a,b);};
let Bk=E(Bz);
let AOz=E();
let YT=E();
let I3=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bk;e=new J;e.jw=G(16);F(e,e.ju,A(131));L(e,e.ju,b,10);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);d.jx=1;d.jy=1;d.jz=f;B(d);}d=new I;d.jx=1;d.jy=1;B(d);}j=Ks(b/c)|0;if(2>j)j=2;i=KF(j);if(i<=1073741824)return i;d=new Bk;e=new J;e.jw=G(16);F(e,e.ju,A(132));L(e,e.ju,b,10);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);d.jx=1;d.jy=1;d.jz=f;B(d);}d=new I;d.jx=1;d.jy=1;B(d);};
let AG7=E(D$);
let O5=null;
let AOt=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new Co;b.jx=1;b.jy=1;b.jz=A(76);B(b);}f=0;if(c>=0&&c<b.jv.length){a:{switch(b.jv.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=B6;i=R(e);j=CR(R(1),Mb(D(4294967295, 2147483647),i));if(g==d){b=new Co;b.jx=1;b.jy=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.jv.length)break b;g=AFb(b.jv.charCodeAt(g));if(g<0){l=new Co;b=Cu(b,c,d);m=new J;m.jw=G(16);F(m,m.ju,A(77));c=m.ju;if(b===null)b=A(2);F(m,c,
b);b=new H;n=m.jw;o=n.data;d=m.ju;e=o.length;if(d>=0&&d<=(e-0|0)){b.jv=K(n.data,0,d);l.jx=1;l.jy=1;l.jz=b;B(l);}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);}if(g>=e){l=new Co;p=Cu(b,c,d);b=new J;b.jw=G(16);F(b,b.ju,A(78));L(b,b.ju,e,10);F(b,b.ju,A(74));c=b.ju;if(p===null)p=A(2);F(b,c,p);m=new H;n=b.jw;o=n.data;d=b.ju;e=o.length;if(d>=0&&d<=(e-0|0)){m.jv=K(n.data,0,d);l.jx=1;l.jy=1;l.jz=m;B(l);}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);}if(ABF(h,j)){b=new Co;b.jx=1;b.jy=1;b.jz=A(133);B(b);}h=CR(Y(i,h),R(g));if(ATj(h,B6)){if(k==
d&&DK(h,D(0, 2147483648))&&f)return D(0, 2147483648);l=new Co;p=Cu(b,c,d);m=new J;m.jw=G(16);F(m,m.ju,A(134));c=m.ju;if(p===null)p=A(2);F(m,c,p);b=new H;n=m.jw;o=n.data;e=m.ju;c=o.length;if(e>=0&&e<=(c-0|0)){b.jv=K(n.data,0,e);l.jx=1;l.jy=1;l.jz=b;B(l);}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);}g=k;}if(f)h=AUl(h);return h;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);}b=new Co;l=new J;l.jw=G(16);F(l,l.ju,A(81));L(l,l.ju,e,10);m=new H;n=l.jw;o=n.data;d=l.ju;e=o.length;if(d>=0&&d<=(e-0|0)){m.jv=K(n.data,0,d);b.jx
=1;b.jy=1;b.jz=m;B(b);}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
AFb=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
EQ=b=>{let c,d;if(DK(b,B6))return 64;c=0;d=Bb(b,32);if(ACs(d,B6))c=32;else d=b;b=Bb(d,16);if(DK(b,B6))b=d;else c=c|16;d=Bb(b,8);if(DK(d,B6))d=b;else c=c|8;b=Bb(d,4);if(DK(b,B6))b=d;else c=c|4;d=Bb(b,2);if(DK(d,B6))d=b;else c=c|2;if(ACs(Bb(d,1),B6))c=c|1;return (64-c|0)-1|0;},
Es=(b,c)=>{return AUs(b,c);},
EP=(b,c)=>{return AUq(b,c);},
ATE=()=>{O5=V(AIG);};
let AGD=E();
let ABU=()=>{return {};};
let Lp=E(0);
function GA(){let a=this;C.call(a);a.jC=null;a.oq=0;a.ok=0;a.lD=0;a.xl=0;a.xv=0;a.lV=0;a.ov=0;a.kS=null;a.lB=null;a.mp=null;a.yb=null;a.xB=null;a.mD=null;a.mu=null;a.nc=0;a.qC=null;a.os=null;a.pT=null;a.qJ=null;a.w7=null;}
let LL=(a,b)=>{a.oq=1;a.ok=1;a.lD=1;a.xl=1;a.xv=1;a.lV=1;a.ov=1;a.kS=C6(51,0.800000011920929);a.lB=C6(51,0.800000011920929);a.mp=C6(51,0.800000011920929);a.yb=C6(51,0.800000011920929);a.xB=C6(51,0.800000011920929);a.mD=C6(51,0.800000011920929);a.mu=C6(51,0.800000011920929);a.nc=0;a.qC=new Float32Array(40000);a.os=new Int32Array(12000);a.pT=new Int16Array(12000);a.qJ=new Int8Array(12000);a.w7=new Uint8Array(240000);a.jC=b;b.pixelStorei(37441,0);},
AOM=a=>{let b=new GA();LL(b,a);return b;},
M4=(a,b)=>{let c,d,e,f,g;if(F9){c=(!BY(b,DW)?null:b.oc.kk.data).buffer;d=b.jI;e=b.jB-d|0;return new Float32Array(c,d,e);}if((b.jB-b.jI|0)>a.qC.length)a.qC=new Float32Array(b.jB-b.jI|0);e=b.jI;d=0;while(true){f=b.jB;if(e>=f)break;c=a.qC;g=Q_(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.qC;e=f-b.jI|0;return c.subarray(0,e);},
Rv=(a,b)=>{let c,d,e,f,g;if(F9){c=(!BY(b,DW)?null:b.n$.kk.data).buffer;d=b.jI;e=b.jB-d|0;return new Int16Array(c,d,e);}if((b.jB-b.jI|0)>a.pT.length)a.pT=new Int16Array(b.jB-b.jI|0);e=b.jI;d=0;while(true){f=b.jB;if(e>=f)break;c=a.pT;g=AL5(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.pT;e=f-b.jI|0;return c.subarray(0,e);},
UV=(a,b)=>{let c,d,e,f,g;if(F9){c=(!BY(b,DW)?null:b.el()).buffer;d=b.jI;e=b.jB-d|0;return new Int32Array(c,d,e);}if((b.jB-b.jI|0)>a.os.length)a.os=new Int32Array(b.jB-b.jI|0);e=b.jI;d=0;while(true){f=b.jB;if(e>=f)break;c=a.os;g=b.em(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.os;e=f-b.jI|0;return c.subarray(0,e);},
LE=(a,b)=>{let c,d,e,f,g;if(F9)return !BY(b,DW)?null:b.kk.data;if((b.jB-b.jI|0)>a.qJ.length)a.qJ=new Int8Array(b.jB-b.jI|0);c=b.jI;d=0;while(true){e=b.jB;if(c>=e)break;f=a.qJ;g=V_(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.qJ;c=e-b.jI|0;return f.subarray(0,c);},
AVk=(a,b)=>{if((b.jB-b.jI|0)>a.os.length)a.os=new Int32Array(b.jB-b.jI|0);},
ASm=(a,b)=>{let c,d,e,f,g;c=a.mu;d=a.nc;if(!d)c=!c.j2?null:c.jZ;else{e=c.jX;f=Be(Bb(Y(R(d),D(2135587861, 2654435769)),c.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.j1;}}c=f<0?null:c.jY.data[f];}c=c;if(!b)c=!c.j2?null:c.jZ;else{e=c.jX;d=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.j3));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.j1;}}c=d<0?null:c.jY.data[d];}Bv();return c===null?null:c[Bl]===true?c:c.j6;},
AEl=(a,b,c)=>{let d,e,f,g,h,i;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();h=d===null?null:d[Bl]===true?d:d.j6;d=a.lB;if(!c)d=!d.j2?null:d.jZ;else{e=d.jX;b=Be(Bb(Y(R(c),D(2135587861, 2654435769)),d.j3));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.j1;}}d=b<0?null:d.jY.data[b];}i=d===null?null:d[Bl]===true?d:
d.j6;a.jC.attachShader(h,i);},
AQr=(a,b,c)=>{let d,e,f,g,h;d=a.jC;e=a.mp;if(!c)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.bindBuffer(b,e);},
ZY=(a,b,c)=>{let d,e,f,g,h;d=a.jC;e=a.mD;if(!c)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.bindTexture(b,e);},
ADt=(a,b,c,d,e)=>{a.jC.blendFuncSeparate(b,c,d,e);},
KE=(a,b,c,d,e)=>{let f,g;if(d instanceof D0){f=a.jC;d=M4(a,d);f.bufferData(b,d,e);}else if(d instanceof GO){f=a.jC;d=UV(a,d);f.bufferData(b,d,e);}else if(d instanceof GQ){f=a.jC;d=Rv(a,d);f.bufferData(b,d,e);}else if(d instanceof EF){f=a.jC;g=LE(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Q;f.jx=1;f.jy=1;f.jz=A(135);B(f);}a.jC.bufferData(b,c,e);}},
KD=(a,b,c,d,e)=>{let f,g;if(e instanceof D0){f=a.jC;e=M4(a,e);f.bufferSubData(b,c,e);}else if(e instanceof GO){f=a.jC;g=UV(a,e);f.bufferSubData(b,c,g);}else if(e instanceof GQ){f=a.jC;e=Rv(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof EF)){f=new Q;f.jx=1;f.jy=1;f.jz=A(135);B(f);}f=a.jC;e=LE(a,e);f.bufferSubData(b,c,e);}},
AN7=(a,b)=>{a.jC.clear(b);},
AAa=(a,b,c,d,e)=>{a.jC.clearColor(b,c,d,e);},
AFo=(a,b)=>{let c,d,e,f;c=a.lB;if(!b)c=!c.j2?null:c.jZ;else{d=c.jX;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.j3));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.j1;}}c=e<0?null:c.jY.data[e];}Bv();c=c===null?null:c[Bl]===true?c:c.j6;a.jC.compileShader(c);},
ARa=a=>{let b,c;b=a.jC.createProgram();c=a.oq;a.oq=c+1|0;B2(a.kS,c,B4(b));return c;},
AKT=(a,b)=>{let c,d;c=a.jC.createShader(b);d=a.ok;a.ok=d+1|0;B2(a.lB,d,B4(c));return d;},
AN8=(a,b)=>{a.jC.depthMask(!!b);},
AKA=(a,b)=>{a.jC.disable(b);},
AI7=(a,b)=>{a.jC.disableVertexAttribArray(b);},
AAM=(a,b,c,d)=>{a.jC.drawArrays(b,c,d);},
AGd=(a,b,c,d,e)=>{let f,g;f=a.jC;g=e.jI;f.drawElements(b,c,d,g);},
AIB=(a,b,c,d,e)=>{a.jC.drawElements(b,c,d,e);},
AP6=(a,b)=>{a.jC.enable(b);},
AOO=(a,b)=>{a.jC.enableVertexAttribArray(b);},
ATU=a=>{let b,c;b=a.jC.createBuffer();c=a.lD;a.lD=c+1|0;B2(a.mp,c,B4(b));return c;},
V7=(a,b)=>{a.jC.generateMipmap(b);},
AVr=a=>{let b,c;b=a.jC.createTexture();c=a.lV;a.lV=c+1|0;B2(a.mD,c,B4(b));return c;},
JU=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.jC;g=a.kS;if(!b)g=!g.j2?null:g.jZ;else{h=g.jX;i=Be(Bb(Y(R(b),D(2135587861, 2654435769)),g.j3));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.j1;}}g=i<0?null:g.jY.data[i];}Bv();g=g===null?null:g[Bl]===true?g:g.j6;g=f.getActiveAttrib(g,c);DZ(d,g.size);DZ(e,g.type);d.jI=0;d.jB=d.j0;d.jT=(-1);e.jI=0;e.jB=e.j0;e.jT=(-1);return W(g.name);},
Li=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.jC;g=a.kS;if(!b)g=!g.j2?null:g.jZ;else{h=g.jX;i=Be(Bb(Y(R(b),D(2135587861, 2654435769)),g.j3));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.j1;}}g=i<0?null:g.jY.data[i];}Bv();g=g===null?null:g[Bl]===true?g:g.j6;g=f.getActiveUniform(g,c);DZ(d,g.size);DZ(e,g.type);d.jI=0;d.jB=d.j0;d.jT=(-1);e.jI=0;e.jB=e.j0;e.jT=(-1);return W(g.name);},
ACe=(a,b,c)=>{let d,e,f,g,h;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();h=d===null?null:d[Bl]===true?d:d.j6;return a.jC.getAttribLocation(h,Bt(c));},
IL=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Q;c.jx=1;c.jy=1;c.jz=A(136);B(c);}M0(c,0,a.jC.getParameter(b));c.jI=0;c.jB=c.j0;c.jT=(-1);},
AQ3=(a,b)=>{let c,d,e,f,g;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;return W(c.getProgramInfoLog(d));},
LH=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.jC;f=a.kS;if(!b)f=!f.j2?null:f.jZ;else{g=f.jX;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),f.j3));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.j1;}}f=h<0?null:f.jY.data[h];}Bv();f=f===null?null:f[Bl]===true?f:f.j6;DZ(d,e.getProgramParameter(f,c));}else{f=a.jC;e=a.kS;if(!b)e=!e.j2?null:e.jZ;else{g=e.jX;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.j1;}}e=h<0?null:e.jY.data[h];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;DZ(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.jI=0;d.jB=d.j0;d.jT=(-1);},
AGX=(a,b)=>{let c,d,e,f,g;c=a.jC;d=a.lB;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;return W(c.getShaderInfoLog(d));},
Kl=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.jC;f=a.lB;if(!b)f=!f.j2?null:f.jZ;else{g=f.jX;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),f.j3));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.j1;}}f=h<0?null:f.jY.data[h];}Bv();f=f===null?null:f[Bl]===true?f:f.j6;DZ(d,e.getShaderParameter(f,c));}else{f=a.jC;e=a.lB;if(!b)e=!e.j2?null:e.jZ;else{g=e.jX;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.j1;}}e=h<0?null:e.jY.data[h];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;DZ(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.jI=0;d.jB=d.j0;d.jT=(-1);},
AC$=(a,b)=>{return W(a.jC.getParameter(b));},
AC5=(a,b,c)=>{let d,e,f,g,h;d=a.jC;e=a.kS;if(!b)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d=d.getUniformLocation(e,Bt(c));if(d===null)return (-1);c=a.mu;if(!b)c=!c.j2?null:c.jZ;else{f=c.jX;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.j3));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.j1;}}c
=h<0?null:c.jY.data[h];}c=c;if(c===null){c=C6(51,0.800000011920929);B2(a.mu,b,c);}h=a.ov;a.ov=h+1|0;B2(c,h,B4(d));return h;},
Yr=(a,b)=>{let c,d,e,f,g;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.linkProgram(d);},
AAL=(a,b,c)=>{a.jC.pixelStorei(b,c);},
V6=(a,b,c)=>{let d,e,f,g,h;d=a.jC;e=a.lB;if(!b)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.shaderSource(e,Bt(c));},
LS=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.jC;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.jB>4){if(!F9)l=!(j instanceof D0)?Uint8Array.from(LE(a,j)):M4(a,j);else{m=!BY(j,DW)?null:j.kk.data;if(!(j instanceof D0)){n=j.jB-j.jI|0;o=m.byteOffset+j.jI|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.jB-j.jI|0;o=m.byteOffset+j.jI|0;l=new Float32Array(m.buffer,o,n);}}a.jC.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=AOb(j,0);Ei();j=Fr;if(!p)j=!j.j2?null:j.jZ;else{q=j.jX;n=Be(Bb(Y(R(p),D(2135587861, 2654435769)),
j.j3));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.j1;}}j=n<0?null:j.jY.data[n];}k=j;r=k.nB;if(r===null&&k.kE!==null?1:0){j=a.jC;s=k.kE.qE;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.oZ!==null?1:0){j=a.jC;s=k.oZ;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.pX!==null?1:0){j=a.jC;s=k.pX;j.texImage2D(b,c,d,h,i,s);}else{j=a.jC;ET(k);s=k.nB;j.texImage2D(b,c,d,h,i,s);}}},
AHK=(a,b,c,d)=>{a.jC.texParameterf(b,c,d);},
AJ6=(a,b,c,d)=>{let e,f;e=a.jC;f=d;e.texParameterf(b,c,f);},
AKz=(a,b,c)=>{let d,e,f,g,h,i;d=a.mu;e=a.nc;if(!e)d=!d.j2?null:d.jZ;else{f=d.jX;g=Be(Bb(Y(R(e),D(2135587861, 2654435769)),d.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.j1;}}d=g<0?null:d.jY.data[g];}d=d;if(!b)d=!d.j2?null:d.jZ;else{f=d.jX;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.j1;}}d=g<0?null:d.jY.data[g];}Bv();i=d===null?null:d[Bl]===true?d:d.j6;a.jC.uniform1i(i,c);},
PV=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.mu;f=a.nc;if(!f)g=!g.j2?null:g.jZ;else{h=g.jX;c=Be(Bb(Y(R(f),D(2135587861, 2654435769)),g.j3));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.j1;}}g=c<0?null:g.jY.data[c];}g=g;if(!b)g=!g.j2?null:g.jZ;else{h=g.jX;c=Be(Bb(Y(R(b),D(2135587861, 2654435769)),g.j3));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.j1;}}g=c<0?null:g.jY.data[c];}Bv();j=g===null?null:g[Bl]===true?g:g.j6;g=a.jC;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
Yt=(a,b)=>{let c,d,e,f,g;a.nc=b;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.useProgram(d);},
AHm=(a,b,c,d,e,f,g)=>{a.jC.vertexAttribPointer(b,c,d,!!e,f,g);},
Wu=(a,b,c,d,e)=>{a.jC.viewport(b,c,d,e);};
let RL=E(0);
function Jo(){let a=this;GA.call(a);a.j9=null;a.yN=null;a.yp=0;a.xa=null;a.xt=0;a.xO=null;a.wR=0;a.qt=null;a.qk=0;a.yg=null;}
let Nj=(a,b)=>{LL(a,b);a.yN=C6(51,0.800000011920929);a.yp=1;a.xa=C6(51,0.800000011920929);a.xt=1;a.xO=C6(51,0.800000011920929);a.wR=1;a.qt=C6(51,0.800000011920929);a.qk=1;a.yg=new Uint32Array(12000);a.j9=b;},
APP=a=>{let b=new Jo();Nj(b,a);return b;},
ADT=(a,b)=>{let c,d,e,f,g;c=a.j9;d=a.qt;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.bindVertexArray(d);},
AIY=(a,b,c,d,e)=>{a.j9.drawArraysInstanced(b,c,d,e);},
ARM=(a,b,c,d,e,f)=>{a.j9.drawElementsInstanced(b,c,d,e,f);},
AJz=(a,b,c)=>{let d,e,f,g;d=c.jI;e=0;while(e<b){f=a.j9.createVertexArray();g=a.qk;a.qk=g+1|0;B2(a.qt,g,B4(f));DZ(c,g);e=e+1|0;}Cv(c,d);},
AGl=(a,b,c)=>{if(b!=34045)IL(a,b,c);else{M0(c,0,a.j9.getParameter(b));c.jI=0;c.jB=c.j0;c.jT=(-1);}};
let Of=E(Jo);
let ACn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.j9;d=a.qt;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.bindVertexArray(d);b=a.j9.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=0&&
f<=(g-0|0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
Y_=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.j9.drawArraysInstanced(b,c,d,e);b=a.j9.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;X(f);B(f);},
AQj=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.j9.drawElementsInstanced(b,c,d,e,f);b=a.j9.getError();if(!b)return;g=new Q;h=Bc(b,4);i=new J;i.jw=G(16);F(i,i.ju,A(137));L(i,i.ju,b,10);F(i,i.ju,A(60));b=i.ju;if(h===null)h=A(2);F(i,b,h);j=new H;k=i.jw;l=k.data;c=i.ju;d=l.length;if(c>=0&&c<=(d-0|0)){j.jv=K(k.data,0,c);g.jx=1;g.jy=1;g.jz=j;B(g);}g=new I;X(g);B(g);},
Yf=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.jI;e=0;while(e<b){f=a.j9.createVertexArray();g=a.qk;a.qk=g+1|0;B2(a.qt,g,B4(f));DZ(c,g);e=e+1|0;}Cv(c,d);b=a.j9.getError();if(!b)return;c=new Q;h=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jw;k=j.data;e=f.ju;l=k.length;if(e>=0&&e<=(l-0|0)){i.jv=K(j.data,0,e);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
Y3=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jC;e=a.mD;if(!c)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.bindTexture(b,e);b=a.j9.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jw;k=f.data;c=e.ju;g=k.length;if(c>=0&&c<=(g
-0|0)){j.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=j;B(d);}d=new I;X(d);B(d);},
AOa=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.clear(b);b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AHP=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.jC.clearColor(b,c,d,e);f=a.j9.getError();if(!f)return;g=new Q;h=Bc(f,4);i=new J;i.jw=G(16);F(i,i.ju,A(137));L(i,i.ju,f,10);F(i,i.ju,A(60));f=i.ju;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.jw;l=k.data;m=i.ju;n=l.length;if(m>=0&&m<=(n-0|0)){j.jv=K(k.data,0,m);g.jx=1;g.jy=1;g.jz=j;B(g);}g=new I;X(g);B(g);},
Yc=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.depthMask(!!b);b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AOR=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.disable(b);b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
ABC=(a,b,c,d)=>{let e,f,g,h,i,j;a.jC.drawArrays(b,c,d);b=a.j9.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;d=j.length;if(c>=0&&c<=(d-0|0)){h.jv=K(i.data,0,c);e.jx=1;e.jy=1;e.jz=h;B(e);}e=new I;X(e);B(e);},
AK6=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.jC;g=e.jI;f.drawElements(b,c,d,g);b=a.j9.getError();if(!b)return;e=new Q;h=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jw;k=j.data;c=f.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);e.jx=1;e.jy=1;e.jz=i;B(e);}e=new I;X(e);B(e);},
AMG=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.enable(b);b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
VR=(a,b)=>{return W(a.jC.getParameter(b));},
W4=(a,b,c)=>{let d,e,f,g,h,i,j;a.jC.pixelStorei(b,c);b=a.j9.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=g;B(d);}d=new I;X(d);B(d);},
AIj=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;LS(a,b,c,d,e,f,g,h,i,j);b=a.j9.getError();if(!b)return;j=new Q;k=Bc(b,4);l=new J;l.jw=G(16);F(l,l.ju,A(137));L(l,l.ju,b,10);F(l,l.ju,A(60));b=l.ju;if(k===null)k=A(2);F(l,b,k);m=new H;n=l.jw;o=n.data;c=l.ju;d=o.length;if(c>=0&&c<=(d-0|0)){m.jv=K(n.data,0,c);j.jx=1;j.jy=1;j.jz=m;B(j);}j=new I;X(j);B(j);},
ABk=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.jC.texParameterf(b,c,d);b=a.j9.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;k=j.length;if(c>=0&&c<=(k-0|0)){h.jv=K(i.data,0,c);e.jx=1;e.jy=1;e.jz=h;B(e);}e=new I;X(e);B(e);},
ADI=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jC.viewport(b,c,d,e);b=a.j9.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;X(f);B(f);},
AG3=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();h=d===null?null:d[Bl]===true?d:d.j6;d=a.lB;if(!c)d=!d.j2?null:d.jZ;else{e=d.jX;b=Be(Bb(Y(R(c),D(2135587861, 2654435769)),d.j3));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.j1;}}d=b<0?null:d.jY.data[b];}i=d===null?null:d[Bl]===true
?d:d.j6;a.jC.attachShader(h,i);b=a.j9.getError();if(!b)return;d=new Q;j=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.jw;k=e.data;c=h.ju;f=k.length;if(c>=0&&c<=(f-0|0)){i.jv=K(e.data,0,c);d.jx=1;d.jy=1;d.jz=i;B(d);}d=new I;X(d);B(d);},
APH=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jC;e=a.mp;if(!c)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.bindBuffer(b,e);b=a.j9.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jw;k=f.data;c=e.ju;g=k.length;if(c>=0&&c<=(g
-0|0)){j.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=j;B(d);}d=new I;X(d);B(d);},
ACp=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jC.blendFuncSeparate(b,c,d,e);b=a.j9.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;X(f);B(f);},
AH0=(a,b,c,d,e)=>{let f,g,h,i,j;KE(a,b,c,d,e);b=a.j9.getError();if(!b)return;d=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;e=j.length;if(c>=0&&c<=(e-0|0)){h.jv=K(i.data,0,c);d.jx=1;d.jy=1;d.jz=h;B(d);}d=new I;X(d);B(d);},
APy=(a,b,c,d,e)=>{let f,g,h,i,j;KD(a,b,c,d,e);b=a.j9.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;d=j.length;if(c>=0&&c<=(d-0|0)){h.jv=K(i.data,0,c);e.jx=1;e.jy=1;e.jz=h;B(e);}e=new I;X(e);B(e);},
AJq=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lB;if(!b)c=!c.j2?null:c.jZ;else{d=c.jX;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.j3));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.j1;}}c=e<0?null:c.jY.data[e];}Bv();g=c===null?null:c[Bl]===true?c:c.j6;a.jC.compileShader(g);b=a.j9.getError();if(!b)return;c=new Q;h=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.jw;j=d.data;e=g.ju;f=j.length;if(e>=0&&e<=(f-0|0))
{i.jv=K(d.data,0,e);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
AQ_=a=>{let b,c,d,e,f,g,h,i,j;b=a.jC.createProgram();c=a.oq;a.oq=c+1|0;B2(a.kS,c,B4(b));d=a.j9.getError();if(!d)return c;b=new Q;e=Bc(d,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,d,10);F(f,f.ju,A(60));d=f.ju;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);b.jx=1;b.jy=1;b.jz=g;B(b);}b=new I;X(b);B(b);},
ALo=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC.createShader(b);d=a.ok;a.ok=d+1|0;B2(a.lB,d,B4(c));b=a.j9.getError();if(!b)return d;c=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;d=f.ju;j=i.length;if(d>=0&&d<=(j-0|0)){g.jv=K(h.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;X(c);B(c);},
AQ0=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.disableVertexAttribArray(b);b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
YI=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jC.drawElements(b,c,d,e);b=a.j9.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;X(f);B(f);},
ALu=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.enableVertexAttribArray(b);b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AOg=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.generateMipmap(b);b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AE7=(a,b,c,d,e)=>{let f,g,h,i,j;f=JU(a,b,c,d,e);b=a.j9.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jw;i=h.data;c=e.ju;j=i.length;if(c>=0&&c<=(j-0|0)){f.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=f;B(d);}d=new I;X(d);B(d);},
AN9=(a,b,c,d,e)=>{let f,g,h,i,j;f=Li(a,b,c,d,e);b=a.j9.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jw;i=h.data;c=e.ju;j=i.length;if(c>=0&&c<=(j-0|0)){f.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=f;B(d);}d=new I;X(d);B(d);},
AII=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();h=d===null?null:d[Bl]===true?d:d.j6;b=a.jC.getAttribLocation(h,Bt(c));f=a.j9.getError();if(!f)return b;c=new Q;i=Bc(f,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,f,10);F(d,d.ju,A(60));b=d.ju;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=
0&&f<=(g-0|0)){h.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;X(c);B(c);},
ACy=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)IL(a,b,c);else{M0(c,0,a.j9.getParameter(b));c.jI=0;c.jB=c.j0;c.jT=(-1);}b=a.j9.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AAd=(a,b,c,d)=>{let e,f,g,h,i,j;LH(a,b,c,d);b=a.j9.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=g;B(d);}d=new I;X(d);B(d);},
W2=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c=W(c.getProgramInfoLog(d));b=a.j9.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
AQ9=(a,b,c,d)=>{let e,f,g,h,i,j;Kl(a,b,c,d);b=a.j9.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=g;B(d);}d=new I;X(d);B(d);},
XV=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC;d=a.lB;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c=W(c.getShaderInfoLog(d));b=a.j9.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
W5=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jC;e=a.kS;if(!b)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;c=d.getUniformLocation(e,Bt(c));if(c===null)h=(-1);else{d=a.mu;if(!b)d=!d.j2?null:d.jZ;else{f=d.jX;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)
&d.j1;}}d=h<0?null:d.jY.data[h];}d=d;if(d===null){d=C6(51,0.800000011920929);B2(a.mu,b,d);}h=a.ov;a.ov=h+1|0;B2(d,h,B4(c));}b=a.j9.getError();if(!b)return h;c=new Q;i=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jw;j=f.data;h=d.ju;g=j.length;if(h>=0&&h<=(g-0|0)){e.jv=K(f.data,0,h);c.jx=1;c.jy=1;c.jz=e;B(c);}c=new I;X(c);B(c);},
AP_=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.linkProgram(d);b=a.j9.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=0&&f<=(g-0|
0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
W0=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jC;e=a.lB;if(!b)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.shaderSource(e,Bt(c));b=a.j9.getError();if(!b)return;c=new Q;i=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jw;j=f.data;g=d.ju;h=j.length;if(g>=0&&g<=
(h-0|0)){e.jv=K(f.data,0,g);c.jx=1;c.jy=1;c.jz=e;B(c);}c=new I;X(c);B(c);},
Yq=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.jC;f=d;e.texParameterf(b,c,f);b=a.j9.getError();if(!b)return;e=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);e.jx=1;e.jy=1;e.jz=i;B(e);}e=new I;X(e);B(e);},
Zu=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.mu;e=a.nc;if(!e)d=!d.j2?null:d.jZ;else{f=d.jX;g=Be(Bb(Y(R(e),D(2135587861, 2654435769)),d.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.j1;}}d=g<0?null:d.jY.data[g];}d=d;if(!b)d=!d.j2?null:d.jZ;else{f=d.jX;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.j1;}}d=e<0?null:d.jY.data[e];}Bv();i=d===null?null:d[Bl]===true?d:d.j6;a.jC.uniform1i(i,c);b=
a.j9.getError();if(!b)return;d=new Q;i=Bc(b,4);j=new J;j.jw=G(16);F(j,j.ju,A(137));L(j,j.ju,b,10);F(j,j.ju,A(60));b=j.ju;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.jw;l=f.data;c=j.ju;e=l.length;if(c>=0&&c<=(e-0|0)){k.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=k;B(d);}d=new I;X(d);B(d);},
ARR=(a,b)=>{let c,d,e,f,g,h,i,j;a.nc=b;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.useProgram(d);b=a.j9.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=0&&f<=
(g-0|0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
AMe=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.jC.vertexAttribPointer(b,c,d,!!e,f,g);b=a.j9.getError();if(!b)return;h=new Q;i=Bc(b,4);j=new J;j.jw=G(16);F(j,j.ju,A(137));L(j,j.ju,b,10);F(j,j.ju,A(60));b=j.ju;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.jw;m=l.data;c=j.ju;d=m.length;if(c>=0&&c<=(d-0|0)){k.jv=K(l.data,0,c);h.jx=1;h.jy=1;h.jz=k;B(h);}h=new I;X(h);B(h);};
function PJ(){let a=this;C.call(a);a.tX=0;a.tl=0;a.ts=0;a.wY=null;a.xP=null;a.og=null;a.wM=A(138);}
let AGV=(a,b,c,d,e)=>{a.wM=A(138);if(b===MW)a.og=IT;else if(b===Me)a.og=IT;else if(b===Mm)a.og=I$;else if(b===L1)a.og=I$;else if(b!==G2)a.og=RG;else a.og=K1;b=a.og;if(b===IT)KR(a,A(139),c);else if(b===K1)KR(a,A(140),c);else if(b===I$)KR(a,A(141),c);else{a.tX=(-1);a.tl=(-1);a.ts=(-1);d=A(61);e=A(61);}a.wY=d;a.xP=e;},
AK0=(a,b,c,d)=>{let e=new PJ();AGV(e,a,b,c,d);return e;},
KR=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=PT(If(b,0),c);if(!Qd(d)){e=CV;b=new J;b.jw=G(16);F(b,b.ju,A(142));F(b,b.ju,c);c=new H;f=b.jw;g=f.data;h=b.ju;i=g.length;if(h>=0&&h<=(i-0|0)){c.jv=K(f.data,0,h);if(e.oC>=2){if(BS===null){b=new CS;e=new Ct;BA(e);e.k3=BE(32);Ez(b);b.lr=e;e=new J;ED(e);b.k6=e;b.k5=G(32);b.k9=0;b.k$=Cl;BS=b;}b=new J;b.jw=G(16);CF(b,b.ju,A(138));CF(b,b.ju,A(74));CF(b,b.ju,c);c=new H;f=b.jw;g=f.data;h=b.ju;i=g.length;if(h>=0&&h<=(i-0|0)){c.jv=K(f.data,0,h);BT(Bt(c));BT("\n");}else{b
=new I;b.jx=1;b.jy=1;B(b);}}a.tX=2;a.tl=0;a.ts=0;break a;}b=new I;b.jx=1;b.jy=1;B(b);}b=d.np;j=b.nU;if(!j){b=new BX;b.jx=1;b.jy=1;Bo(b);B(b);}k=Cf(1,b.oY);if(k>=0){b=new I;c=new J;BA(c);c.jw=G(16);L(c,c.ju,1,10);e=new H;f=c.jw;g=f.data;h=c.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);b.jx=1;b.jy=1;b.jz=e;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}f=b.k8.data;if(f[2]<0)e=null;else{b=b.pf;if(!j){b=new BX;b.jx=1;b.jy=1;Bo(b);B(b);}if(k>=0){b=new I;c=new J;BA(c);c.jw=G(16);L(c,c.ju,1,10);e=new H;f=c.jw;g=f.data;h
=c.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);b.jx=1;b.jy=1;b.jz=e;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}h=f[2];if(!j){b=new BX;b.jx=1;b.jy=1;Bo(b);B(b);}if(k>=0){b=new I;c=new J;BA(c);c.jw=G(16);L(c,c.ju,1,10);e=new H;f=c.jw;g=f.data;h=c.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);b.jx=1;b.jy=1;b.jz=e;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}e=Cu(b,h,f[3]);}f=(JT(If(A(143),0),e,0)).data;b=f[0];b:{try{h=Kr(b);break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Co){}else{throw $$e;}}d=CV;e=new J;e.jw
=G(16);F(e,e.ju,A(144));F(e,e.ju,b);F(e,e.ju,A(145));L(e,e.ju,2,10);l=new H;g=e.jw;m=g.data;i=e.ju;j=m.length;if(i>=0&&i<=(j-0|0)){l.jv=K(g.data,0,i);if(d.oC>=1){if(C7===null){b=new Fj;e=new Ct;Ez(e);e.k3=BE(32);FG(b,e);b.k6=Et();b.k5=G(32);b.k9=0;b.k$=Cl;C7=b;}b=new J;b.jw=G(16);B$(b,b.ju,Cd(A(146)));B$(b,b.ju,Cd(A(74)));B$(b,b.ju,Cd(l));c=new H;g=b.jw;m=g.data;i=b.ju;j=m.length;if(i>=0&&i<=(j-0|0)){c.jv=K(g.data,0,i);Dk(Bt(c));Dk("\n");}else{b=new I;b.jx=1;b.jy=1;B(b);}}h=2;}else{b=new I;b.jx=1;b.jy=1;B(b);}}a.tX
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=Kr(b);break c;}catch($$e){$$je=Bs($$e);if($$je instanceof Co){}else{throw $$e;}}d=CV;e=new J;e.jw=G(16);F(e,e.ju,A(144));F(e,e.ju,b);F(e,e.ju,A(145));L(e,e.ju,0,10);l=new H;g=e.jw;m=g.data;j=e.ju;k=m.length;if(j>=0&&j<=(k-0|0)){l.jv=K(g.data,0,j);if(d.oC>=1){if(C7===null){b=new Fj;e=new Ct;Ez(e);e.k3=BE(32);FG(b,e);b.k6=Et();b.k5=G(32);b.k9=0;b.k$=Cl;C7=b;}b=new J;b.jw=G(16);B$(b,b.ju,Cd(A(146)));B$(b,b.ju,Cd(A(74)));B$(b,b.ju,Cd(l));c=new H;g=b.jw;m=g.data;j=b.ju;k
=m.length;if(j>=0&&j<=(k-0|0)){c.jv=K(g.data,0,j);Dk(Bt(c));Dk("\n");}else{b=new I;b.jx=1;b.jy=1;B(b);}}i=0;}else{b=new I;b.jx=1;b.jy=1;B(b);}}}a.tl=i;if(n<3)h=0;else{b=f[2];d:{try{h=Kr(b);break d;}catch($$e){$$je=Bs($$e);if($$je instanceof Co){}else{throw $$e;}}e=CV;d=new J;d.jw=G(16);F(d,d.ju,A(144));F(d,d.ju,b);F(d,d.ju,A(145));L(d,d.ju,0,10);b=new H;g=d.jw;f=g.data;h=d.ju;i=f.length;if(h>=0&&h<=(i-0|0)){b.jv=K(g.data,0,h);if(e.oC>=1){if(C7===null){e=new Fj;d=new Ct;Ez(d);d.k3=BE(32);FG(e,d);e.k6=Et();e.k5
=G(32);e.k9=0;e.k$=Cl;C7=e;}e=new J;e.jw=G(16);B$(e,e.ju,Cd(A(146)));B$(e,e.ju,Cd(A(74)));B$(e,e.ju,Cd(b));b=new H;f=e.jw;g=f.data;i=e.ju;j=g.length;if(i>=0&&i<=(j-0|0)){b.jv=K(f.data,0,i);Dk(Bt(b));Dk("\n");}else{b=new I;b.jx=1;b.jy=1;B(b);}}h=0;}else{b=new I;b.jx=1;b.jy=1;B(b);}}}a.ts=h;}};
let EC=E(Bx);
let MW=null,Mm=null,ZZ=null,L1=null,G2=null,Me=null,ADC=null;
let AAD=()=>{let b,c,d,e,f,g;b=new EC;b.jJ=A(7);b.jE=0;MW=b;c=new EC;c.jJ=A(147);c.jE=1;Mm=c;d=new EC;d.jJ=A(148);d.jE=2;ZZ=d;e=new EC;e.jJ=A(149);e.jE=3;L1=e;f=new EC;f.jJ=A(150);f.jE=4;G2=f;g=new EC;g.jJ=A(151);g.jE=5;Me=g;ADC=P(EC,[b,c,d,e,f,g]);};
let S2=E(0);
function LX(){C.call(this);this.w1=null;}
let ABt=a=>{return;};
let UU=E(GA);
let AQH=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jC;e=a.mD;if(!c)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.bindTexture(b,e);b=a.jC.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jw;k=f.data;c=e.ju;g=k.length;if(c>=0&&
c<=(g-0|0)){j.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=j;B(d);}d=new I;X(d);B(d);},
AAk=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.clear(b);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
ABi=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.jC.clearColor(b,c,d,e);f=a.jC.getError();if(!f)return;g=new Q;h=Bc(f,4);i=new J;i.jw=G(16);F(i,i.ju,A(137));L(i,i.ju,f,10);F(i,i.ju,A(60));f=i.ju;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.jw;l=k.data;m=i.ju;n=l.length;if(m>=0&&m<=(n-0|0)){j.jv=K(k.data,0,m);g.jx=1;g.jy=1;g.jz=j;B(g);}g=new I;X(g);B(g);},
AHZ=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.depthMask(!!b);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
ARq=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.disable(b);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AFm=(a,b,c,d)=>{let e,f,g,h,i,j;a.jC.drawArrays(b,c,d);b=a.jC.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;d=j.length;if(c>=0&&c<=(d-0|0)){h.jv=K(i.data,0,c);e.jx=1;e.jy=1;e.jz=h;B(e);}e=new I;X(e);B(e);},
AQT=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.jC;g=e.jI;f.drawElements(b,c,d,g);b=a.jC.getError();if(!b)return;e=new Q;h=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jw;k=j.data;c=f.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);e.jx=1;e.jy=1;e.jz=i;B(e);}e=new I;X(e);B(e);},
YL=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.enable(b);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AGJ=(a,b)=>{return W(a.jC.getParameter(b));},
AJv=(a,b,c)=>{let d,e,f,g,h,i,j;a.jC.pixelStorei(b,c);b=a.jC.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=g;B(d);}d=new I;X(d);B(d);},
ACz=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;LS(a,b,c,d,e,f,g,h,i,j);b=a.jC.getError();if(!b)return;j=new Q;k=Bc(b,4);l=new J;l.jw=G(16);F(l,l.ju,A(137));L(l,l.ju,b,10);F(l,l.ju,A(60));b=l.ju;if(k===null)k=A(2);F(l,b,k);m=new H;n=l.jw;o=n.data;c=l.ju;d=o.length;if(c>=0&&c<=(d-0|0)){m.jv=K(n.data,0,c);j.jx=1;j.jy=1;j.jz=m;B(j);}j=new I;X(j);B(j);},
ABR=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.jC.texParameterf(b,c,d);b=a.jC.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;k=j.length;if(c>=0&&c<=(k-0|0)){h.jv=K(i.data,0,c);e.jx=1;e.jy=1;e.jz=h;B(e);}e=new I;X(e);B(e);},
AQ4=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jC.viewport(b,c,d,e);b=a.jC.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;X(f);B(f);},
WX=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();h=d===null?null:d[Bl]===true?d:d.j6;d=a.lB;if(!c)d=!d.j2?null:d.jZ;else{e=d.jX;b=Be(Bb(Y(R(c),D(2135587861, 2654435769)),d.j3));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.j1;}}d=b<0?null:d.jY.data[b];}i=d===null?null:d[Bl]===true
?d:d.j6;a.jC.attachShader(h,i);b=a.jC.getError();if(!b)return;d=new Q;j=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.jw;k=e.data;c=h.ju;f=k.length;if(c>=0&&c<=(f-0|0)){i.jv=K(e.data,0,c);d.jx=1;d.jy=1;d.jz=i;B(d);}d=new I;X(d);B(d);},
VO=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jC;e=a.mp;if(!c)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(c),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.bindBuffer(b,e);b=a.jC.getError();if(!b)return;d=new Q;i=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jw;k=f.data;c=e.ju;g=k.length;if(c>=0&&c<=(g-
0|0)){j.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=j;B(d);}d=new I;X(d);B(d);},
VM=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jC.blendFuncSeparate(b,c,d,e);b=a.jC.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;X(f);B(f);},
AGc=(a,b,c,d,e)=>{let f,g,h,i,j;KE(a,b,c,d,e);b=a.jC.getError();if(!b)return;d=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;e=j.length;if(c>=0&&c<=(e-0|0)){h.jv=K(i.data,0,c);d.jx=1;d.jy=1;d.jz=h;B(d);}d=new I;X(d);B(d);},
ADW=(a,b,c,d,e)=>{let f,g,h,i,j;KD(a,b,c,d,e);b=a.jC.getError();if(!b)return;e=new Q;f=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jw;j=i.data;c=g.ju;d=j.length;if(c>=0&&c<=(d-0|0)){h.jv=K(i.data,0,c);e.jx=1;e.jy=1;e.jz=h;B(e);}e=new I;X(e);B(e);},
ARC=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lB;if(!b)c=!c.j2?null:c.jZ;else{d=c.jX;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),c.j3));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.j1;}}c=e<0?null:c.jY.data[e];}Bv();g=c===null?null:c[Bl]===true?c:c.j6;a.jC.compileShader(g);b=a.jC.getError();if(!b)return;c=new Q;h=Bc(b,4);g=new J;g.jw=G(16);F(g,g.ju,A(137));L(g,g.ju,b,10);F(g,g.ju,A(60));b=g.ju;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.jw;j=d.data;e=g.ju;f=j.length;if(e>=0&&e<=(f-0|0))
{i.jv=K(d.data,0,e);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
AJ0=a=>{let b,c,d,e,f,g,h,i,j;b=a.jC.createProgram();c=a.oq;a.oq=c+1|0;B2(a.kS,c,B4(b));d=a.jC.getError();if(!d)return c;b=new Q;e=Bc(d,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,d,10);F(f,f.ju,A(60));d=f.ju;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);b.jx=1;b.jy=1;b.jz=g;B(b);}b=new I;X(b);B(b);},
ARf=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC.createShader(b);d=a.ok;a.ok=d+1|0;B2(a.lB,d,B4(c));b=a.jC.getError();if(!b)return d;c=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;d=f.ju;j=i.length;if(d>=0&&d<=(j-0|0)){g.jv=K(h.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;X(c);B(c);},
AJU=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.disableVertexAttribArray(b);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AEc=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jC.drawElements(b,c,d,e);b=a.jC.getError();if(!b)return;f=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;X(f);B(f);},
ARr=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.enableVertexAttribArray(b);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AIU=(a,b)=>{let c,d,e,f,g,h,i,j;a.jC.generateMipmap(b);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
AGg=(a,b,c,d,e)=>{let f,g,h,i,j;f=JU(a,b,c,d,e);b=a.jC.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jw;i=h.data;c=e.ju;j=i.length;if(c>=0&&c<=(j-0|0)){f.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=f;B(d);}d=new I;X(d);B(d);},
Y9=(a,b,c,d,e)=>{let f,g,h,i,j;f=Li(a,b,c,d,e);b=a.jC.getError();if(!b)return f;d=new Q;g=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jw;i=h.data;c=e.ju;j=i.length;if(c>=0&&c<=(j-0|0)){f.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=f;B(d);}d=new I;X(d);B(d);},
AEm=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();h=d===null?null:d[Bl]===true?d:d.j6;b=a.jC.getAttribLocation(h,Bt(c));f=a.jC.getError();if(!f)return b;c=new Q;i=Bc(f,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,f,10);F(d,d.ju,A(60));b=d.ju;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=
0&&f<=(g-0|0)){h.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;X(c);B(c);},
Wz=(a,b,c)=>{let d,e,f,g,h,i,j;IL(a,b,c);b=a.jC.getError();if(!b)return;c=new Q;d=Bc(b,4);e=new J;e.jw=G(16);F(e,e.ju,A(137));L(e,e.ju,b,10);F(e,e.ju,A(60));b=e.ju;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;X(c);B(c);},
ACF=(a,b,c,d)=>{let e,f,g,h,i,j;LH(a,b,c,d);b=a.jC.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=g;B(d);}d=new I;X(d);B(d);},
ACM=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c=W(c.getProgramInfoLog(d));b=a.jC.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f
>=0&&f<=(g-0|0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
Xb=(a,b,c,d)=>{let e,f,g,h,i,j;Kl(a,b,c,d);b=a.jC.getError();if(!b)return;d=new Q;e=Bc(b,4);f=new J;f.jw=G(16);F(f,f.ju,A(137));L(f,f.ju,b,10);F(f,f.ju,A(60));b=f.ju;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jw;i=h.data;c=f.ju;j=i.length;if(c>=0&&c<=(j-0|0)){g.jv=K(h.data,0,c);d.jx=1;d.jy=1;d.jz=g;B(d);}d=new I;X(d);B(d);},
AMl=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC;d=a.lB;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c=W(c.getShaderInfoLog(d));b=a.jC.getError();if(!b)return c;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
AOy=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jC;e=a.kS;if(!b)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;c=d.getUniformLocation(e,Bt(c));if(c===null)h=(-1);else{d=a.mu;if(!b)d=!d.j2?null:d.jZ;else{f=d.jX;h=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)
&d.j1;}}d=h<0?null:d.jY.data[h];}d=d;if(d===null){d=C6(51,0.800000011920929);B2(a.mu,b,d);}h=a.ov;a.ov=h+1|0;B2(d,h,B4(c));}b=a.jC.getError();if(!b)return h;c=new Q;i=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jw;j=f.data;h=d.ju;g=j.length;if(h>=0&&h<=(g-0|0)){e.jv=K(f.data,0,h);c.jx=1;c.jy=1;c.jz=e;B(c);}c=new I;X(c);B(c);},
AHt=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.linkProgram(d);b=a.jC.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=0&&f<=(g-0|
0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
AQR=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jC;e=a.lB;if(!b)e=!e.j2?null:e.jZ;else{f=e.jX;g=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j1;}}e=g<0?null:e.jY.data[g];}Bv();e=e===null?null:e[Bl]===true?e:e.j6;d.shaderSource(e,Bt(c));b=a.jC.getError();if(!b)return;c=new Q;i=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jw;j=f.data;g=d.ju;h=j.length;if(g>=0&&g
<=(h-0|0)){e.jv=K(f.data,0,g);c.jx=1;c.jy=1;c.jz=e;B(c);}c=new I;X(c);B(c);},
AOp=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.jC;f=d;e.texParameterf(b,c,f);b=a.jC.getError();if(!b)return;e=new Q;g=Bc(b,4);h=new J;h.jw=G(16);F(h,h.ju,A(137));L(h,h.ju,b,10);F(h,h.ju,A(60));b=h.ju;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jw;k=j.data;c=h.ju;d=k.length;if(c>=0&&c<=(d-0|0)){i.jv=K(j.data,0,c);e.jx=1;e.jy=1;e.jz=i;B(e);}e=new I;X(e);B(e);},
AQ$=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.mu;e=a.nc;if(!e)d=!d.j2?null:d.jZ;else{f=d.jX;g=Be(Bb(Y(R(e),D(2135587861, 2654435769)),d.j3));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.j1;}}d=g<0?null:d.jY.data[g];}d=d;if(!b)d=!d.j2?null:d.jZ;else{f=d.jX;e=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.j1;}}d=e<0?null:d.jY.data[e];}Bv();i=d===null?null:d[Bl]===true?d:d.j6;a.jC.uniform1i(i,c);b
=a.jC.getError();if(!b)return;d=new Q;i=Bc(b,4);j=new J;j.jw=G(16);F(j,j.ju,A(137));L(j,j.ju,b,10);F(j,j.ju,A(60));b=j.ju;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.jw;l=f.data;c=j.ju;e=l.length;if(c>=0&&c<=(e-0|0)){k.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=k;B(d);}d=new I;X(d);B(d);},
Xd=(a,b)=>{let c,d,e,f,g,h,i,j;a.nc=b;c=a.jC;d=a.kS;if(!b)d=!d.j2?null:d.jZ;else{e=d.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),d.j3));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j1;}}d=f<0?null:d.jY.data[f];}Bv();d=d===null?null:d[Bl]===true?d:d.j6;c.useProgram(d);b=a.jC.getError();if(!b)return;c=new Q;h=Bc(b,4);d=new J;d.jw=G(16);F(d,d.ju,A(137));L(d,d.ju,b,10);F(d,d.ju,A(60));b=d.ju;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jw;j=e.data;f=d.ju;g=j.length;if(f>=0&&f<=
(g-0|0)){i.jv=K(e.data,0,f);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;X(c);B(c);},
Z3=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.jC.vertexAttribPointer(b,c,d,!!e,f,g);b=a.jC.getError();if(!b)return;h=new Q;i=Bc(b,4);j=new J;j.jw=G(16);F(j,j.ju,A(137));L(j,j.ju,b,10);F(j,j.ju,A(60));b=j.ju;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.jw;m=l.data;c=j.ju;d=m.length;if(c>=0&&c<=(d-0|0)){k.jv=K(l.data,0,c);h.jx=1;h.jy=1;h.jz=k;B(h);}h=new I;X(h);B(h);};
function S7(){let a=this;C.call(a);a.nv=0;a.jX=null;a.jY=null;a.jZ=null;a.j2=0;a.uY=0.0;a.r$=0;a.j3=0;a.j1=0;}
let ADR=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.uY=c;d=I3(b,c);a.r$=d*c|0;b=d-1|0;a.j1=b;a.j3=EQ(R(b));a.jX=U(d);a.jY=S(C,d);return;}e=new Bk;f=new J;f.jw=G(16);F(f,f.ju,A(62));Hn(f,f.ju,c);g=new H;h=f.jw;i=h.data;d=f.ju;j=i.length;if(d>=0&&d<=(j-0|0)){g.jv=K(h.data,0,d);e.jx=1;e.jy=1;e.jz=g;B(e);}f=new I;f.jx=1;f.jy=1;B(f);},
C6=(a,b)=>{let c=new S7();ADR(c,a,b);return c;},
B2=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.jZ;a.jZ=c;if(!a.j2){a.j2=1;a.nv=a.nv+1|0;}return d;}e=a.jX;f=Be(Bb(Y(R(b),D(2135587861, 2654435769)),a.j3));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.j1;}}if(f>=0){e=a.jY.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.jY.data[f]=c;b=a.nv+1|0;a.nv=b;if(b>=a.r$)ANw(a,g.length<<1);return null;},
Gt=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.j2)return null;a.j2=0;c=a.jZ;a.jZ=null;a.nv=a.nv-1|0;return c;}d=a.jX;e=Y(R(b),D(2135587861, 2654435769));f=a.j3;g=Be(Bb(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.j1;}}if(g<0)return null;j=a.jY.data;k=j[g];l=a.j1;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Be(Bb(Y(R(n),D(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.nv=a.nv-1|0;return k;},
ARk=(a,b,c)=>{let d,e,f,g;a:{d=a.jY;if(b===null){if(a.j2&&a.jZ===null)return 1;d=d.data;e=a.jX;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.jZ)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.j2){g=a.jZ;if(b===g?1:g instanceof E9&&g.mQ==b.mQ?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof E9&&g.mQ==b.mQ?1:0)return 1;f=f+(-1)|0;}}return 0;},
ANw=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.jX.data.length;a.r$=b*a.uY|0;d=b-1|0;a.j1=d;d=EQ(R(d));a.j3=d;e=a.jX;f=a.jY;g=U(b);a.jX=g;h=S(C,b);a.jY=h;if(a.nv>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Be(Bb(Y(R(k),D(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.j1;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function Rm(){let a=this;C.call(a);a.mR=0;a.nX=null;a.pm=0;a.wC=0.0;a.sq=0;a.o1=0;a.nO=0;}
let ABV=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wC=c;d=I3(b,c);a.sq=d*c|0;b=d-1|0;a.nO=b;a.o1=EQ(R(b));a.nX=U(d);return;}e=new Bk;f=new J;f.jw=G(16);F(f,f.ju,A(62));Hn(f,f.ju,c);g=new H;h=f.jw;i=h.data;d=f.ju;j=i.length;if(d>=0&&d<=(j-0|0)){g.jv=K(h.data,0,d);e.jx=1;e.jy=1;e.jz=g;B(e);}f=new I;f.jx=1;f.jy=1;B(f);},
N$=(a,b)=>{let c=new Rm();ABV(c,a,b);return c;},
AA7=(a,b)=>{let c,d,e,f;if(!b){if(a.pm)return 0;a.pm=1;a.mR=a.mR+1|0;return 1;}c=a.nX;d=Be(Bb(Y(R(b),D(2135587861, 2654435769)),a.o1));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.nO;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.mR+1|0;a.mR=b;if(b>=a.sq)ABg(a,e.length<<1);return 1;},
APn=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.pm)return 0;a.pm=0;a.mR=a.mR-1|0;return 1;}c=a.nX;d=Y(R(b),D(2135587861, 2654435769));e=a.o1;f=Be(Bb(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.nO;}}if(f<0)return 0;h=a.nO;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Be(Bb(Y(R(b),D(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.mR=a.mR-1|0;return 1;},
ABg=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.nX.data.length;a.sq=b*a.wC|0;d=b-1|0;a.nO=d;d=EQ(R(d));a.o1=d;e=a.nX;f=U(b);a.nX=f;if(a.mR>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Be(Bb(Y(R(h),D(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.nO;}f[i]=h;}g=g+1|0;}}}};
let TT=E(0);
function Lr(){C.call(this);this.q5=null;}
let WQ=a=>{let b;b=a.q5;b.rk=1;TJ(Bt(b.s7));},
AAZ=a=>{let b;b=a.q5;b.rk=1;TJ(Bt(b.s7));},
Wq=a=>{a.q5.rk=0;};
let Vb=E(0);
function Vj(){let a=this;C.call(a);a.pv=null;a.tE=null;a.ys=null;}
let IN=0;
let AO6=a=>{let b,c,d,e,f,g,h,i,$$je;b=ZF();a.pv=b;c=AJR(b);a.tE=c;b=new Ru;d=a.pv;e=new Bu;e.kr=0;e.jM=S(C,16);b.ke=e;b.k1=2147483647;b.xj=d;b.xx=c;a.ys=b;b=CV.qO;Ft(b);a:{try{BL(b,a);Ds(b);break a;}catch($$e){$$je=Bs($$e);d=$$je;}Ds(b);B(d);}if(a.pv.state!=='running'?1:0){b=new JO;b.yq=a;Z0(a.pv,B0(b,"unlockFunction"));}else{if(!IN&&CV.oC>=2){if(BS===null){c=new CS;e=new Ct;Ez(e);e.k3=BE(32);FG(c,e);c.k6=Et();c.k5=G(32);c.k9=0;c.k$=Cl;BS=c;}c=new J;c.jw=G(16);B$(c,c.ju,Cd(A(152)));B$(c,c.ju,Cd(A(74)));B$(c,
c.ju,Cd(A(153)));b=new H;f=c.jw;g=f.data;h=c.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);BT(Bt(b));BT("\n");}else{b=new I;b.jx=1;b.jy=1;B(b);}}IN=1;}},
APr=()=>{let a=new Vj();AO6(a);return a;},
ANp=a=>{a.tE.disconnect(a.pv.destination);},
AI6=a=>{a.tE.connect(a.pv.destination);},
Z0=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
ZF=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
AJR=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function NF(){Dq.call(this);this.wW=null;}
let TO=E(Ca);
function DS(){C8.call(this);this.k4=null;}
let I=E(Bz);
let ZO=a=>{a.jx=1;a.jy=1;},
X$=()=>{let a=new I();ZO(a);return a;},
AFe=(a,b)=>{a.jx=1;a.jy=1;a.jz=b;},
TS=a=>{let b=new I();AFe(b,a);return b;};
let EN=E(0);
let Pk=E(0);
let Q0=E(0);
let QO=E(0);
let Sl=E(0);
let U$=E(0);
let Tg=E(0);
let OY=E(0);
let Ki=E(0);
let N3=E();
let AKp=(a,b)=>{b=a.S(b);Bv();return b===null?null:b instanceof Fp()&&b instanceof Eq?(b[Bl]===true?b:b.j6):b;},
ANQ=(a,b,c)=>{a.eL(W(b),Dg(c,"handleEvent"));},
AM6=(a,b,c)=>{a.eM(W(b),Dg(c,"handleEvent"));},
AKb=(a,b,c,d)=>{a.eN(W(b),Dg(c,"handleEvent"),d?1:0);},
APX=(a,b)=>{return !!a.eO(b);},
Z4=a=>{return a.eP();},
Wp=(a,b,c,d)=>{a.eQ(W(b),Dg(c,"handleEvent"),d?1:0);};
let K6=E();
function Je(){let a=this;K6.call(a);a.sd=0;a.op=null;a.vm=0.0;a.sr=0;a.qH=0;a.qf=0;a.wE=0;}
let Vv=null,PW=null;
let Kb=(a,b)=>{let c,d,e;a.qf=(-1);if(b<0){c=new Bk;c.jx=1;c.jy=1;B(c);}a.sd=0;if(!b)b=1;d=S(Id,b);e=d.data;a.op=d;b=e.length;a.qH=b;a.vm=0.75;a.sr=b*0.75|0;},
ATx=a=>{let b=new Je();Kb(b,a);return b;},
Dh=(a,b,c)=>{let d,e,f,g,h,i,j;Ft(a);try{if(b!==null&&c!==null){a:{if(!b.kY){d=0;while(true){if(d>=b.jv.length)break a;b.kY=(31*b.kY|0)+b.jv.charCodeAt(d)|0;d=d+1|0;}}}e=b.kY&2147483647;f=a.op.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.vL;if(!b.kY){i=0;while(true){if(i>=b.jv.length)break b;b.kY=(31*b.kY|0)+b.jv.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.kY&&h.ml.cB(b)?1:0)break;h=h.rA;}if(h!==null){j=h.lW;h.lW=c;return j;}a.wE=a.wE+1|0;d=a.sd+1|0;a.sd=d;if(d>a.sr){AHY(a);g=e%a.op.data.length|0;}if(g<a.qH)a.qH
=g;if(g>a.qf)a.qf=g;c:{j=new Id;j.ml=b;j.lW=c;if(!b.kY){d=0;while(true){if(d>=b.jv.length)break c;b.kY=(31*b.kY|0)+b.jv.charCodeAt(d)|0;d=d+1|0;}}}j.vL=b.kY;f=a.op.data;j.rA=f[g];f[g]=j;return null;}b=new C4;b.jx=1;b.jy=1;B(b);}finally{Ds(a);}},
AHY=a=>{let b,c,d,e,f,g,h,i,j;b=(a.op.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=S(Id,b);e=d.data;f=a.qf+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.qH)break;h=a.op.data[f];while(h!==null){i=(h.ml.cI()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.rA;h.rA=e[i];e[i]=h;h=j;}}a.qH=g;a.qf=c;a.op=d;a.sr=e.length*a.vm|0;},
AVC=()=>{Vv=new JL;PW=new JK;};
function L$(){Je.call(this);this.yi=null;}
let AEA=E();
let Gk=E(Bx);
let I$=null,IT=null,K1=null,RG=null,ALS=null;
let AH7=()=>{let b,c,d,e;b=new Gk;b.jJ=A(154);b.jE=0;I$=b;c=new Gk;c.jJ=A(155);c.jE=1;IT=c;d=new Gk;d.jJ=A(150);d.jE=2;K1=d;e=new Gk;e.jJ=A(156);e.jE=3;RG=e;ALS=P(Gk,[b,c,d,e]);};
let Dr=E();
let ABP=E(Dr);
let AA1=E(Dr);
let AGm=E(Dr);
let AJs=E(Dr);
let AEU=E(Dr);
function KM(){C.call(this);this.x_=null;}
let AFQ=(a,b)=>{b.preventDefault();};
function KN(){C.call(this);this.yG=null;}
let AQU=(a,b)=>{b.preventDefault();};
function KL(){let a=this;C.call(a);a.un=null;a.ue=null;a.uB=null;}
let AIK=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bu;e.kr=1;e.jM=S(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=W(g.name);i=FK(h,46,h.jv.length-1|0);b=i==(-1)?A(61):Cu(h,i+1|0,h.jv.length);j=b.jv.toLowerCase();if(j!==b.jv)b=SR(j);if(Zc(b))j=Fd;else{if(b===A(157))k=1;else if(!(A(157) instanceof H))k=0;else{j=A(157);k=b.jv!==j.jv?0:1;}b:{if(!k){if(b===A(158))k=1;else if(!(A(158) instanceof H))k=0;else{j=A(158);k=b.jv!==j.jv?0:1;}if(!k){if(b===A(159))k
=1;else if(!(A(159) instanceof H))k=0;else{j=A(159);k=b.jv!==j.jv?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?EZ:!AE_(b)?E5:Fm;}l=new FileReader();b=new LT;b.rD=a;b.sI=j;b.tY=h;b.qV=e;b.t5=d;l.addEventListener("load",B0(b,"handleEvent"));if(j!==E5&&j!==EZ){if(j===Fd)l.readAsDataURL(g);else if(j===Fm)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
ALg=(a,b)=>{AIK(a,b);};
function Ru(){let a=this;C8.call(a);a.xj=null;a.xx=null;}
let T1=E(0);
function JO(){C.call(this);this.yq=null;}
let AB9=a=>{let b,c,d,e,f,g;if(!IN&&CV.oC>=2){if(BS===null){b=new CS;UK(b,AOD(32),0);BS=b;}b=new J;b.jw=G(16);DT(b,b.ju,A(152));DT(b,b.ju,A(74));DT(b,b.ju,A(153));c=new H;d=b.jw;e=d.data;f=b.ju;g=e.length;if(f>=0&&f<=(g-0|0)){c.jv=K(d.data,0,f);BT(Bt(c));BT("\n");}else B(X$());}IN=1;};
let AAK=E(Dr);
function QI(){let a=this;C.call(a);a.km=null;a.lq=0;a.sv=null;a.ul=0;a.pp=0;a.n0=0;a.lP=0;a.vp=null;}
let JT=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new J7;d.k7=S(C,10);e=PT(a,b);f=0;g=0;if(!b.jv.length){h=S(H,1);h.data[0]=A(61);return h;}a:{while(true){if(!Qd(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.np;if(!j.nU){b=new BX;b.jx=1;b.jy=1;Bo(b);B(b);}if(0>=j.oY){b=new I;d=new J;BA(d);d.jw=G(16);L(d,d.ju,0,10);e=new H;h=d.jw;k=h.data;f=d.ju;g=k.length;if(f>=0&&f<=(g-0|0)){e.jv=K(h.data,0,f);b.jx=1;b.jy=1;b.jz=e;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}j=Cu(b,g,j.k8.data[0]);GK(d,d.ko+1|0);h=d.k7.data;f=d.ko;d.ko=f+1|0;h[f]
=j;d.l4=d.l4+1|0;j=e.np;if(!j.nU)break;if(0>=j.oY){b=new I;d=new J;BA(d);d.jw=G(16);L(d,d.ju,0,10);e=new H;h=d.jw;k=h.data;f=d.ju;g=k.length;if(f>=0&&f<=(g-0|0)){e.jv=K(h.data,0,f);b.jx=1;b.jy=1;b.jz=e;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}g=j.k8.data[1];f=i;}b=new BX;b.jx=1;b.jy=1;Bo(b);B(b);}b:{b=Cu(b,g,b.jv.length);GK(d,d.ko+1|0);h=d.k7.data;i=d.ko;d.ko=i+1|0;h[i]=b;d.l4=d.l4+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.ko)break;if(d.k7.data[f].jv.length)break b;TD(d,f);}b=new I;b.jx
=1;b.jy=1;B(b);}}if(f<0)f=0;return ACl(d,S(H,f));},
If=(b,c)=>{let d;if(b===null){b=new C4;b.jx=1;b.jy=1;b.jz=A(160);B(b);}if(c&&(c|255)!=255){b=new Bk;b.jx=1;b.jy=1;b.jz=A(61);B(b);}N=1;d=new QI;d.sv=S(Df,10);d.pp=(-1);d.n0=(-1);d.lP=(-1);return AC6(d,b,c);},
AC6=(a,b,c)=>{let d,e,f;a.km=ACH(b,c);a.lq=c;b=Vp(a,(-1),c,null);a.vp=b;d=a.km;if(!d.kN&&!d.jR&&d.jN==d.lz&&!(d.ks===null?0:1)?1:0){if(a.ul)b.eZ();return a;}b=new Cc;e=d.kK;f=d.mo;b.jx=1;b.jy=1;b.j$=(-1);b.kM=A(61);b.kJ=e;b.j$=f;B(b);},
AQi=(a,b)=>{let c,d,e,f,g,h;c=new Cy;d=a.lq;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bf;g.jK=U(64);c.jP=g;g=new Bf;g.jK=U(2);c.jS=g;c.rs=e;c.sf=f;while(true){h=a.km;d=h.kN;if(!d&&!h.jR&&h.jN==h.lz&&!(h.ks===null?0:1)?1:0)break;f=!d&&!h.jR&&h.jN==h.lz&&!(h.ks===null?0:1)?1:0;if(!(!f&&!(h.ks===null?0:1)&&(d<0?0:1)?1:0))break;f=h.jR;if(f&&f!=(-536870788)&&f!=(-536870871))break;Bq(h);CP(c,h.nN);g=a.km;if(g.kN!=(-536870788))continue;Bq(g);}g=Lm(a,c);g.e3(b);return g;},
Vp=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new J7;e.k7=S(C,10);f=a.lq;g=0;if(c!=f)a.lq=c;a:{switch(b){case -1073741784:h=new Re;i=a.lP+1|0;a.lP=i;DH();c=N;N=c+1|0;d=new Z;d.jw=G(20);h.jL=(L(d,d.ju,c,10)).T();h.ld=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PD;i=a.lP+1|0;a.lP=i;DH();c=N;N=c+1|0;d=new Z;d.jw=G(20);h.jL=(L(d,d.ju,c,10)).T();h.ld=i;break a;case -33554392:h=new RX;i=a.lP+1|0;a.lP=i;DH();c=N;N=c+1|0;d=new Z;d.jw=G(20);h.jL=(L(d,d.ju,c,10)).T();h.ld=i;break a;default:i
=a.pp+1|0;a.pp=i;if(d!==null){h=new Df;DH();c=N;N=c+1|0;d=new Z;d.jw=G(20);h.jL=(L(d,d.ju,c,10)).T();h.ld=i;}else{h=new Gd;DH();j=N;N=j+1|0;d=new Z;d.jw=G(20);h.jL=(L(d,d.ju,j,10)).T();h.ld=0;g=1;}c=a.pp;if(c<=(-1))break a;if(c>=10)break a;a.sv.data[c]=h;break a;}h=new Vk;DH();j=N;N=j+1|0;d=new Z;d.jw=G(20);h.jL=(L(d,d.ju,j,10)).T();h.ld=(-1);}while(true){k=a.km;l=k.kN;j=!l&&!k.jR&&k.jN==k.lz&&!(k.ks===null?0:1)?1:0;j=!j&&!(k.ks===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.jR==(-536870788))k=AQi(a,h);else if(l==(-536870788))
{k=new EV;j=N;N=j+1|0;d=new Z;d.jw=G(20);k.jL=(L(d,d.ju,j,10)).T();k.jD=h;k.ka=1;k.kz=1;k.ka=0;Bq(a.km);}else{k=O9(a,h);d=a.km;if(d.kN==(-536870788))Bq(d);}if(k!==null){GK(e,e.ko+1|0);m=e.k7.data;l=e.ko;e.ko=l+1|0;m[l]=k;e.l4=e.l4+1|0;}k=a.km;j=k.kN;if(!j&&!k.jR&&k.jN==k.lz&&!(k.ks===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.nN==(-536870788)){k=new EV;c=N;N=c+1|0;d=new Z;d.jw=G(20);k.jL=(L(d,d.ju,c,10)).T();k.jD=h;k.ka=1;k.kz=1;k.ka=0;GK(e,e.ko+1|0);m=e.k7.data;j=e.ko;e.ko=j+1|0;m[j]=k;e.l4=e.l4+1|
0;}if(a.lq!=f&&!g){a.lq=f;k=a.km;k.kC=f;k.jR=k.kN;k.nl=k.ks;j=k.mo;k.jN=j+1|0;k.p_=j;Bq(k);}switch(b){case -1073741784:break;case -536870872:d=new Nr;b=N;N=b+1|0;k=new Z;BA(k);k.jw=G(20);d.jL=(L(k,k.ju,b,10)).T();d.kQ=e;d.lS=h;d.kB=h.ld;return d;case -268435416:d=new Uj;b=N;N=b+1|0;k=new Z;BA(k);k.jw=G(20);d.jL=(L(k,k.ju,b,10)).T();d.kQ=e;d.lS=h;d.kB=h.ld;return d;case -134217688:d=new QM;b=N;N=b+1|0;k=new Z;BA(k);k.jw=G(20);d.jL=(L(k,k.ju,b,10)).T();d.kQ=e;d.lS=h;d.kB=h.ld;return d;case -67108824:k=new Sj;b
=N;N=b+1|0;d=new Z;BA(d);d.jw=G(20);k.jL=(L(d,d.ju,b,10)).T();k.kQ=e;k.lS=h;k.kB=h.ld;return k;case -33554392:d=new D3;b=N;N=b+1|0;k=new Z;k.jw=G(20);d.jL=(L(k,k.ju,b,10)).T();d.kQ=e;d.lS=h;d.kB=h.ld;return d;default:c=e.ko;switch(c){case 0:d=new EV;b=N;N=b+1|0;e=new Z;e.jw=G(20);d.jL=(L(e,e.ju,b,10)).T();d.jD=h;d.ka=1;d.kz=1;d.ka=0;return d;case 1:d=new F2;if(0>=c){d=new I;d.jx=1;d.jy=1;B(d);}e=e.k7.data[0];b=N;N=b+1|0;k=new Z;k.jw=G(20);d.jL=(L(k,k.ju,b,10)).T();d.mg=e;d.lS=h;d.kB=h.ld;return d;default:}d
=new Cg;b=N;N=b+1|0;k=new Z;k.jw=G(20);d.jL=(L(k,k.ju,b,10)).T();d.kQ=e;d.lS=h;d.kB=h.ld;return d;}k=new Jm;j=N;N=j+1|0;d=new Z;d.jw=G(20);k.jL=(L(d,d.ju,j,10)).T();k.kQ=e;k.lS=h;k.kB=h.ld;return k;},
AMH=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Or;b.jw=G(16);while(true){c=a.km;d=c.kN;if(!d&&!c.jR&&c.jN==c.lz&&!(c.ks===null?0:1)?1:0)break;e=!d&&!c.jR&&c.jN==c.lz&&!(c.ks===null?0:1)?1:0;if(!(!e&&!(c.ks===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.nl;d=f===null?0:1;if(!(!d&&!c.jR)){d=f===null?0:1;if(!(!d&&(c.jR<0?0:1))){g=c.jR;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Bq(c);e=c.nN;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.ju;Bd(b,e,e+1|0);b.jw.data[e]=d;}else{h=(EL(e)).data;d=0;e=h.length;g=b.ju;Bd(b,g,g+e|0);i=e+d|0;while(d<i){j=b.jw.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.lq;if(!((e&2)!=2?0:1))return AFx(b);if(!((e&64)!=64?0:1)){c=new NV;d=N;N=d+1|0;f=new Z;f.jw=G(20);c.jL=(L(f,f.ju,d,10)).T();c.ka=1;f=new H;h=b.jw;j=h.data;e=b.ju;g=j.length;if(e>=0&&e<=(g-0|0)){f.jv=K(h.data,0,e);c.pd=f;c.ka=b.ju;return c;}b=new I;b.jx=1;b.jy=1;B(b);}c=new Nm;d=N;N=d+1|0;f=new Z;f.jw=G(20);c.jL=(L(f,f.ju,d,10)).T();c.ka
=1;f=new J;f.jw=G(16);e=0;while(true){d=Cf(e,b.ju);if(d>=0){b=new H;h=f.jw;j=h.data;g=f.ju;d=j.length;if(g>=0&&g<=(d-0|0)){b.jv=K(h.data,0,g);c.qg=b;c.ka=f.ju;return c;}b=new I;b.jx=1;b.jy=1;B(b);}if(e<0)break;if(d>=0)break;d=b.jw.data[e];if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}d=Cq(BN,d)&65535;if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}i=Cq(BO,d)&65535;g=f.ju;Bd(f,g,g+1|0);f.jw.data[g]=i;e=e+1|0;}b=new I;b.jx=1;b.jy=1;B(b);},
AMZ=a=>{let b,c,d,e,f,g,h,i,j;b=U(4);c=(-1);d=(-1);e=a.km;f=e.kN;if(!(!f&&!e.jR&&e.jN==e.lz&&!(e.ks===null?0:1)?1:0)){g=!f&&!e.jR&&e.jN==e.lz&&!(e.ks===null?0:1)?1:0;if(!g&&!(e.ks===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Bq(e);c=e.nN;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.km;i=e.kN;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Bq(e);e=a.km;i=e.kN;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Bq(e);e=new H7;c=N;N=c+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,c,10)).T();e.nG=h;e.qu=3;return e;}e=new H7;c
=N;N=c+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,c,10)).T();e.nG=h;e.qu=2;return e;}i=a.lq;if(!((i&2)!=2?0:1)){e=new DR;i=b[0];c=N;N=c+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,c,10)).T();e.ka=1;e.lK=i;return e;}if(!((i&64)!=64?0:1)){e=new Jz;i=b[0];c=N;N=c+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,c,10)).T();e.ka=1;e.rU=i;e.sj=FQ(i);return e;}e=new MN;i=b[0];c=N;N=c+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,c,10)).T();e.ka=1;if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}i=Cq(BN,i)&65535;if
(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}e.qM=Cq(BO,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.km;g=e.kN;if(!g&&!e.jR&&e.jN==e.lz&&!(e.ks===null?0:1)?1:0)break;i=!g&&!e.jR&&e.jN==e.lz&&!(e.ks===null?0:1)?1:0;if(!(!i&&!(e.ks===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;Bq(e);h[c]=e.nN;c=i;}if(c==1){i=h[0];if(!(Y0.em(i)==ANg?0:1))return Vh(a,h[0]);}d=a.lq;if(!((d&2)!=2?0:1)){e=new E7;i=N;N=i+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,i,10)).T();e.ox=1;e.oj=b;e.of=c;return e;}if
((d&64)!=64?0:1){e=new Vc;i=N;N=i+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,i,10)).T();e.ox=1;e.oj=b;e.of=c;return e;}e=new SI;i=N;N=i+1|0;j=new Z;j.jw=G(20);e.jL=(L(j,j.ju,i,10)).T();e.ox=1;e.oj=b;e.of=c;return e;},
O9=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.km;d=c.kN;e=!d&&!c.jR&&c.jN==c.lz&&!(c.ks===null?0:1)?1:0;e=!e&&!(c.ks===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.nl===null?0:1)&&(c.jR<0?0:1)){if(!((a.lq&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AMH(a):MT(a,b,Va(a,b));}else{f=AMZ(a);g=a.km;e=g.kN;if(!(!e&&!g.jR&&g.jN==g.lz&&!(g.ks===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof Gd))&&e!=(-536870788)){h=!e&&!g.jR&&g.jN==g.lz&&!(g.ks===null?0:1)?1:0;if(!(!h&&!(g.ks===null?0:1)&&(e<0?0:1)?1:0))f
=MT(a,b,f);}}}else if(d!=(-536870871))f=MT(a,b,Va(a,b));else{if(b instanceof Gd){b=new Cc;g=c.kK;h=c.mo;b.jx=1;b.jy=1;b.j$=(-1);b.kM=A(61);b.kJ=g;b.j$=h;B(b);}f=new EV;e=N;N=e+1|0;c=new Z;c.jw=G(20);f.jL=(L(c,c.ju,e,10)).T();f.jD=b;f.ka=1;f.kz=1;f.ka=0;}c=a.km;d=c.kN;e=!d&&!c.jR&&c.jN==c.lz&&!(c.ks===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof Gd))&&d!=(-536870788)){g=O9(a,b);if(f instanceof Dm&&!(f instanceof E4)&&!(f instanceof Do)&&!(f instanceof E2)){b=f;if(!g.fh(b.j8)){f=new Uy;c=b.j8;i=b.jD;j
=b.kz;e=N;N=e+1|0;b=new Z;b.jw=G(20);f.jL=(L(b,b.ju,e,10)).T();f.jD=i;f.j8=c;f.kz=j;f.kq=c;c.e3(f);}}if((g.fi()&65535)!=43)f.e3(g);else f.e3(g.j8);}else{if(f===null)return null;f.e3(b);}if((f.fi()&65535)!=43)return f;return f.j8;},
MT=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.km;e=d.kN;if(c!==null&&!(c instanceof Cr)){switch(e){case -2147483606:Bq(d);d=new VF;f=N;N=f+1|0;g=new Z;g.jw=G(20);d.jL=(L(g,g.ju,f,10)).T();d.jD=b;d.j8=c;d.kz=e;DH();c.e3(HC);return d;case -2147483605:Bq(d);d=new Px;h=N;N=h+1|0;g=new Z;g.jw=G(20);d.jL=(L(g,g.ju,h,10)).T();d.jD=b;d.j8=c;d.kz=(-2147483606);DH();c.e3(HC);return d;case -2147483585:Bq(d);d=new Pg;h=N;N=h+1|0;g=new Z;BA(g);g.jw=G(20);d.jL=(L(g,g.ju,h,10)).T();d.jD=b;d.j8=c;d.kz=(-536870849);DH();c.e3(HC);return d;case -2147483525:g
=new NR;i=d.ks;Bq(d);d=i;f=a.n0+1|0;a.n0=f;j=N;N=j+1|0;i=new Z;BA(i);i.jw=G(20);g.jL=(L(i,i.ju,j,10)).T();g.jD=b;g.j8=c;g.kz=(-536870849);g.ni=d;g.my=f;DH();c.e3(HC);return g;case -1073741782:case -1073741781:Bq(d);d=new Q7;f=N;N=f+1|0;g=new Z;g.jw=G(20);d.jL=(L(g,g.ju,f,10)).T();d.jD=b;d.j8=c;d.kz=e;c.e3(d);return d;case -1073741761:Bq(d);d=new Qe;h=N;N=h+1|0;g=new Z;BA(g);g.jw=G(20);d.jL=(L(g,g.ju,h,10)).T();d.jD=b;d.j8=c;d.kz=(-536870849);c.e3(b);return d;case -1073741701:g=new Tk;i=d.ks;Bq(d);d=i;h=a.n0
+1|0;a.n0=h;j=N;N=j+1|0;i=new Z;BA(i);i.jw=G(20);g.jL=(L(i,i.ju,j,10)).T();g.jD=b;g.j8=c;g.kz=(-536870849);g.ni=d;g.my=h;c.e3(g);return g;case -536870870:case -536870869:Bq(d);if(c.fi()!=(-2147483602)){d=new Do;f=N;N=f+1|0;g=new Z;g.jw=G(20);d.jL=(L(g,g.ju,f,10)).T();d.jD=b;d.j8=c;d.kz=e;}else{h=a.lq;if((h&32)!=32?0:1){d=new Q8;f=N;N=f+1|0;g=new Z;g.jw=G(20);d.jL=(L(g,g.ju,f,10)).T();d.jD=b;d.j8=c;d.kz=e;}else{d=new OB;if(!(h&1)){g=FR;if(g===null){g=new I1;FR=g;}}else{g=F4;if(g===null){g=new I0;F4=g;}}f=N;N
=f+1|0;i=new Z;i.jw=G(20);d.jL=(L(i,i.ju,f,10)).T();d.jD=b;d.j8=c;d.kz=e;d.rc=g;}}c.e3(d);return d;case -536870849:Bq(d);d=new Gy;h=N;N=h+1|0;g=new Z;g.jw=G(20);d.jL=(L(g,g.ju,h,10)).T();d.jD=b;d.j8=c;d.kz=(-536870849);c.e3(b);return d;case -536870789:g=new FT;i=d.ks;Bq(d);d=i;h=a.n0+1|0;a.n0=h;j=N;N=j+1|0;i=new Z;i.jw=G(20);g.jL=(L(i,i.ju,j,10)).T();g.jD=b;g.j8=c;g.kz=(-536870849);g.ni=d;g.my=h;c.e3(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:Bq(d);d=new VH;f
=N;N=f+1|0;c=new Z;c.jw=G(20);d.jL=(L(c,c.ju,f,10)).T();d.jD=b;d.j8=i;d.kz=e;d.kq=i;i.jD=d;return d;case -2147483585:Bq(d);c=new Ut;h=N;N=h+1|0;d=new Z;BA(d);d.jw=G(20);c.jL=(L(d,d.ju,h,10)).T();c.jD=b;c.j8=i;c.kz=(-2147483585);c.kq=i;return c;case -2147483525:c=new O8;g=d.ks;Bq(d);d=g;h=N;N=h+1|0;g=new Z;BA(g);g.jw=G(20);c.jL=(L(g,g.ju,h,10)).T();c.jD=b;c.j8=i;c.kz=(-2147483525);c.kq=i;c.oE=d;return c;case -1073741782:case -1073741781:Bq(d);d=new P8;f=N;N=f+1|0;c=new Z;c.jw=G(20);d.jL=(L(c,c.ju,f,10)).T();d.jD
=b;d.j8=i;d.kz=e;d.kq=i;i.jD=d;return d;case -1073741761:Bq(d);c=new SL;h=N;N=h+1|0;d=new Z;BA(d);d.jw=G(20);c.jL=(L(d,d.ju,h,10)).T();c.jD=b;c.j8=i;c.kz=(-1073741761);c.kq=i;return c;case -1073741701:c=new QN;g=d.ks;Bq(d);d=g;h=N;N=h+1|0;g=new Z;BA(g);g.jw=G(20);c.jL=(L(g,g.ju,h,10)).T();c.jD=b;c.j8=i;c.kz=(-1073741701);c.kq=i;c.oE=d;return c;case -536870870:case -536870869:Bq(d);d=new Dm;f=N;N=f+1|0;c=new Z;c.jw=G(20);d.jL=(L(c,c.ju,f,10)).T();d.jD=b;d.j8=i;d.kz=e;d.kq=i;i.jD=d;return d;case -536870849:Bq(d);c
=new E2;h=N;N=h+1|0;d=new Z;d.jw=G(20);c.jL=(L(d,d.ju,h,10)).T();c.jD=b;c.j8=i;c.kz=(-536870849);c.kq=i;return c;case -536870789:c=new E4;g=d.ks;Bq(d);d=g;h=N;N=h+1|0;g=new Z;g.jw=G(20);c.jL=(L(g,g.ju,h,10)).T();c.jD=b;c.j8=i;c.kz=(-536870789);c.kq=i;c.oE=d;return c;default:}return c;},
Va=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof Gd;while(true){a:{e=a.km;f=e.kN;if((f&(-2147418113))==(-2147483608)){Bq(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.lq=g;else{if(f!=(-1073741784))g=a.lq;c=Vp(a,f,g,b);e=a.km;if(e.kN!=(-536870871)){b=new Cc;h=e.kK;i=e.mo;b.jx=1;b.jy=1;b.j$=(-1);b.kM=A(61);b.kJ=h;b.j$=i;B(b);}Bq(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.pp<j){c=new Cc;h=e.kK;i=e.mo;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=h;c.j$=i;B(c);}Bq(e);g=a.lP+1|0;a.lP=g;i=a.lq;if(!((i&2)!=2?0:1)){c=new UC;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.pR=j;c.oK=g;}else if(!((i&64)!=64?0:1)){c=new Gp;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.pR=j;c.oK=g;}else{c=new QG;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.pR=j;c.oK=g;}a.sv.data[j].st=1;a.ul=1;break a;case -2147483583:break;case -2147483582:Bq(e);c
=new Kx;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.tG=0;break a;case -2147483577:Bq(e);c=new Ov;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();break a;case -2147483558:Bq(e);c=new MK;j=a.lP+1|0;a.lP=j;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.o_=j;break a;case -2147483550:Bq(e);c=new Kx;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.tG=1;break a;case -2147483526:Bq(e);c=new UI;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();break a;case -536870876:break b;case -536870866:Bq(e);i
=a.lq;if((i&32)!=32?0:1){c=new UE;i=N;N=i+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,i,10)).T();break a;}c=new O2;if(!(i&1)){h=FR;if(h===null){h=new I1;FR=h;}}else{h=F4;if(h===null){h=new I0;F4=h;}}k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.s1=h;break a;case -536870821:Bq(e);i=0;c=a.km;if(c.kN==(-536870818)){i=1;Bq(c);}c=Lm(a,GL(a,i));c.e3(b);h=a.km;k=h.kN;if(k!=(-536870819)){b=new Cc;e=h.kK;i=h.mo;b.jx=1;b.jy=1;b.j$=(-1);b.kM=A(61);b.kJ=e;b.j$=i;B(b);}h.no=1;h.jR=k;h.nl=h.ks;h.jN=h.p_;h.p_=h.mo;Bq(h);Bq(a.km);break a;case -536870818:break c;case 0:c
=e.ks;h=c;if(h!==null)c=Lm(a,h);else{if(!f&&!e.jR&&e.jN==e.lz&&!(c===null?0:1)?1:0){c=new EV;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.jD=b;c.ka=1;c.kz=1;c.ka=0;break a;}c=new DR;j=f&65535;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.ka=1;c.lK=j;}Bq(a.km);break a;default:if(f>=0&&!(e.ks===null?0:1)){c=Vh(a,f);Bq(a.km);break a;}if(f==(-536870788)){c=new EV;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.jD=b;c.ka=1;c.kz=1;c.ka=0;break a;}if(f!=(-536870871)){b=new Cc;c
=e.ks;if(c===null?0:1)c=c.T();else{k=f&65535;c=new H;l=G(1);m=l.data;m[0]=k;c.jv=K(l.data,0,m.length);}e=a.km;h=e.kK;i=e.mo;b.jx=1;b.jy=1;b.j$=(-1);b.kM=c;b.kJ=h;b.j$=i;B(b);}if(d){b=new Cc;h=e.kK;i=e.mo;b.jx=1;b.jy=1;b.j$=(-1);b.kM=A(61);b.kJ=h;b.j$=i;B(b);}c=new EV;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.jD=b;c.ka=1;c.kz=1;c.ka=0;break a;}Bq(e);c=new K5;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();break a;}Bq(e);a.lP=a.lP+1|0;i=a.lq;if(!((i&8)!=8?0:1)){c=new K5;k=N;N=k+1|0;e
=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();break a;}c=new NZ;if(!(i&1)){h=FR;if(h===null){h=new I1;FR=h;}}else{h=F4;if(h===null){h=new I0;F4=h;}}k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.vj=h;break a;}Bq(e);j=a.lP+1|0;a.lP=j;i=a.lq;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new R0;i=N;N=i+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,i,10)).T();c.ru=j;}else{c=new No;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.pC=j;}}else if((i&1)!=1?0:1){c=new Uu;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,
k,10)).T();c.rn=j;}else{c=new MK;k=N;N=k+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,k,10)).T();c.o_=j;}}}if(f!=(-16777176))break;}return c;},
GL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new Cy;d=a.lq;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bf;f.jK=U(64);c.jP=f;f=new Bf;f.jK=U(2);c.jS=f;c.rs=e;c.sf=d;Ev(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.km;b=k.kN;if(!b&&!k.jR&&k.jN==k.lz&&!(k.ks===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)CP(c,g);f=a.km;Bq(f);g=f.nN;f=a.km;if(f.kN!=(-536870874)){g=38;break d;}if(f.jR==(-536870821)){Bq(f);h=1;g=(-1);break d;}Bq(f);if(j){c=GL(a,0);break d;}if(a.km.kN
==(-536870819))break d;UO(c,GL(a,0));break d;case -536870867:if(!j){b=k.jR;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){Bq(k);k=a.km;d=k.kN;if(k.ks===null?0:1)break c;if(d<0){b=k.jR;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AEB(d))break e;d=d&65535;break e;}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){break b;}else{throw $$e;}}}try{BK(c,g,d);}catch($$e){$$je=Bs($$e);if($$je instanceof Ca){break b;}else{throw $$e;}}Bq(a.km);g=(-1);break d;}}if(g>=0)CP(c,g);g=45;Bq(a.km);break d;case -536870821:if
(g>=0){CP(c,g);g=(-1);}Bq(a.km);e=0;f=a.km;if(f.kN==(-536870818)){Bq(f);e=1;}if(!h)Wd(c,GL(a,e));else UO(c,GL(a,e));h=0;Bq(a.km);break d;case -536870819:break;case -536870818:if(g>=0)CP(c,g);g=94;Bq(a.km);break d;case 0:if(g>=0)CP(c,g);f=a.km.ks;if(f===null)g=0;else{AR7(c,f);g=(-1);}Bq(a.km);break d;default:if(g>=0)CP(c,g);f=a.km;Bq(f);g=f.nN;break d;}if(g>=0)CP(c,g);g=93;Bq(a.km);}j=0;}c=new Cc;l=k.kK;g=k.mo;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=l;c.j$=g;B(c);}c=new Cc;k=a.km;l=k.kK;g=k.mo;c.jx=1;c.jy=1;c.j$
=(-1);c.kM=A(61);c.kJ=l;c.j$=g;B(c);}if(!i){if(g>=0)CP(c,g);return c;}c=new Cc;l=k.kK;b=k.mo-1|0;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=l;c.j$=b;B(c);},
Vh=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.lq;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Jz;b=b&65535;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.ka=1;e.rU=b;e.sj=FQ(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Nk;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.ka=1;e.ka=2;if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}b=Cq(BN,b);if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null
?W(BC.value):null)));}e.sX=Cq(BO,b);return e;}if(b<=57343&&b>=56320?1:0){e=new Hi;b=b&65535;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.n1=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Hq;b=b&65535;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.nM=b;return e;}e=new MN;b=b&65535;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.ka=1;if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}b=Cq(BN,b)&65535;if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value
!==null?W(BC.value):null)));}e.qM=Cq(BO,b)&65535;return e;}}if(c){e=new D9;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.ka=1;e.ka=2;e.oT=b;h=(EL(b)).data;e.oN=h[0];e.or=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new Hi;b=b&65535;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.n1=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Hq;b=b&65535;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.nM=b;return e;}e=new DR;b=b&65535;f=N;N=f+1|0;g=new Z;g.jw=G(20);e.jL=(L(g,g.ju,f,10)).T();e.ka
=1;e.lK=b;return e;},
Lm=(a,b)=>{let c,d,e,f,g,h;if(!AIf(b)){if(b.ku){if(!b.fr()){c=new Dz;d=N;N=d+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,d,10)).T();c.lX=b.fs();c.pe=b.j7;return c;}c=new JC;d=N;N=d+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,d,10)).T();c.lX=b.fs();c.pe=b.j7;return c;}if(b.fr()){c=new Kc;d=N;N=d+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,d,10)).T();c.ka=1;c.rh=b.fs();c.sR=b.j7;return c;}c=new DU;d=N;N=d+1|0;e=new Z;e.jw=G(20);c.jL=(L(e,e.ju,d,10)).T();c.ka=1;c.mF=b.fs();c.tj=b.j7;return c;}c=Yg(b);e=new Nx;d=N;N=d+1|0;f=new Z;f.jw
=G(20);e.jL=(L(f,f.ju,d,10)).T();e.rd=c;e.r9=c.j7;if(b.ku){if(!b.fr()){c=new GZ;f=new Dz;b=H5(b);d=N;N=d+1|0;g=new Z;g.jw=G(20);f.jL=(L(g,g.ju,d,10)).T();f.lX=b;f.pe=b.j7;d=N;N=d+1|0;b=new Z;b.jw=G(20);c.jL=(L(b,b.ju,d,10)).T();c.oH=f;c.oz=e;return c;}c=new GZ;f=new JC;g=H5(b);h=N;N=h+1|0;b=new Z;b.jw=G(20);f.jL=(L(b,b.ju,h,10)).T();f.lX=g;f.pe=g.j7;d=N;N=d+1|0;b=new Z;b.jw=G(20);c.jL=(L(b,b.ju,d,10)).T();c.oH=f;c.oz=e;return c;}if(b.fr()){c=new GZ;f=new Kc;b=H5(b);d=N;N=d+1|0;g=new Z;g.jw=G(20);f.jL=(L(g,g.ju,
d,10)).T();f.ka=1;f.rh=b;f.sR=b.j7;d=N;N=d+1|0;b=new Z;b.jw=G(20);c.jL=(L(b,b.ju,d,10)).T();c.oH=f;c.oz=e;return c;}c=new GZ;f=new DU;b=H5(b);d=N;N=d+1|0;g=new Z;g.jw=G(20);f.jL=(L(g,g.ju,d,10)).T();f.ka=1;f.mF=b;f.tj=b.j7;d=N;N=d+1|0;b=new Z;b.jw=G(20);c.jL=(L(b,b.ju,d,10)).T();c.oH=f;c.oz=e;return c;},
FQ=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let MD=E(0);
function RN(){let a=this;C.call(a);a.xn=null;a.wf=null;a.rm=null;a.np=null;a.q_=0;a.sH=0;}
let Ns=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.rm.jv.length;if(b>=0&&b<=c){d=a.np;d.nU=0;d.qx=2;e=d.k8.data;f=0;g=e.length;if(f>g){d=new Bk;X(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.kA.data;f=0;g=e.length;if(f>g){d=new Bk;X(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.nx=d.ma;d.qx=1;d.nx=b;c=d.qA;if(c<0)c=b;d.qA=c;b=a.wf.fv(b,a.rm,d);if(b==(-1))a.np.l1=1;if(b>=0){d=a.np;b=d.nU;if(b){e=d.k8.data;if(e[0]==(-1)){f=d.nx;e[0]=f;e[1]=f;}if(!b){d=new BX;d.jx=1;d.jy=1;Bo(d);B(d);}if(0<d.oY){d.qA=e[1];return 1;}d=new I;i
=new J;BA(i);i.jw=G(16);L(i,i.ju,0,10);j=new H;e=i.jw;k=e.data;c=i.ju;f=k.length;if(c>=0&&c<=(f-0|0)){j.jv=K(e.data,0,c);d.jx=1;d.jy=1;d.jz=j;B(d);}d=new I;d.jx=1;d.jy=1;B(d);}}a.np.nx=(-1);return 0;}d=new I;i=new J;i.jw=G(16);L(i,i.ju,b,10);j=new H;e=i.jw;k=e.data;c=i.ju;f=k.length;if(c>=0&&c<=(f-0|0)){j.jv=K(e.data,0,c);d.jx=1;d.jy=1;d.jz=j;B(d);}d=new I;d.jx=1;d.jy=1;B(d);},
Qd=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.rm.jv.length;c=a.np;if(!c.rr)b=a.sH;if(c.nx>=0&&c.qx==1){d=c.nU;if(!d){c=new BX;c.jx=1;c.jy=1;B(c);}e=Cf(0,c.oY);if(e>=0){c=new I;f=new J;f.jw=G(16);L(f,f.ju,0,10);g=new H;h=f.jw;i=h.data;b=f.ju;j=i.length;if(b>=0&&b<=(j-0|0)){g.jv=K(h.data,0,b);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}h=c.k8.data;k=h[1];c.nx=k;if(!d){c=new BX;c.jx=1;c.jy=1;B(c);}if(e>=0){c=new I;f=new J;f.jw=G(16);L(f,f.ju,0,10);g=new H;h=f.jw;i=h.data;b=f.ju;j=i.length;if(b>=0&&b<=(j-0|0))
{g.jv=K(h.data,0,b);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}j=h[1];if(!d){c=new BX;c.jx=1;c.jy=1;B(c);}if(e<0){if(j==h[0])c.nx=k+1|0;l=c.nx;return l<=b&&Ns(a,l)?1:0;}c=new I;f=new J;f.jw=G(16);L(f,f.ju,0,10);g=new H;h=f.jw;i=h.data;b=f.ju;j=i.length;if(b>=0&&b<=(j-0|0)){g.jv=K(h.data,0,b);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}return Ns(a,a.q_);},
VV=(a,b,c)=>{let d,e;a.q_=(-1);a.sH=(-1);a.xn=b;a.wf=b.vp;a.rm=c;a.q_=0;d=c.jv.length;a.sH=d;e=AON(c,a.q_,d,b.pp,b.n0+1|0,b.lP+1|0);a.np=e;e.ou=1;},
PT=(a,b)=>{let c=new RN();VV(c,a,b);return c;};
let Zg=E();
let Ef=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=OA(ANr(b,c));}catch($$e){$$je=Bs($$e);if($$je instanceof J9){d=$$je;break a;}else if($$je instanceof G0){d=$$je;break b;}else{throw $$e;}}return d;}e=new CT;if(b.jQ===null)b.jQ=W(b.jO.$meta.name);f=b.jQ;b=new J;b.jw=G(16);F(b,b.ju,A(161));g=b.ju;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jw;i=c.data;j=b.ju;k=i.length;if(j>=0&&j<=(k-0|0)){h.jv=K(c.data,0,j);e.jx=1;e.jy=1;e.jz=h;e.lk=d;B(e);}b=new I;b.jx=1;b.jy=1;B(b);}e=new CT;if(b.jQ
===null)b.jQ=W(b.jO.$meta.name);f=b.jQ;b=new J;b.jw=G(16);F(b,b.ju,A(162));g=b.ju;if(f===null)f=A(2);F(b,g,f);F(b,b.ju,A(163));h=new H;c=b.jw;i=c.data;j=b.ju;k=i.length;if(j>=0&&j<=(k-0|0)){h.jv=K(c.data,0,j);e.jx=1;e.jy=1;e.jz=h;e.lk=d;B(e);}b=new I;b.jx=1;b.jy=1;B(b);}c=(AQq(b)).data;if(c.length<=0)b=null;else{b=new Ke;b.me=c[0];}return b;},
Ea=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=OA(ANt(b,c));}catch($$e){$$je=Bs($$e);if($$je instanceof J9){d=$$je;break a;}else if($$je instanceof G0){d=$$je;e=new CT;if(b.jQ===null)b.jQ=W(b.jO.$meta.name);f=b.jQ;b=new J;b.jw=G(16);F(b,b.ju,A(161));g=b.ju;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jw;i=c.data;j=b.ju;k=i.length;if(j>=0&&j<=(k-0|0)){h.jv=K(c.data,0,j);e.jx=1;e.jy=1;e.jz=h;e.lk=d;B(e);}b=new I;b.jx=1;b.jy=1;B(b);}else{throw $$e;}}return d;}e=new CT;if(b.jQ===null)b.jQ=W(b.jO.$meta.name);f=b.jQ;b=new J;b.jw
=G(16);F(b,b.ju,A(164));g=b.ju;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jw;i=c.data;k=b.ju;j=i.length;if(k>=0&&k<=(j-0|0)){h.jv=K(c.data,0,k);e.jx=1;e.jy=1;e.jz=h;e.lk=d;B(e);}b=new I;b.jx=1;b.jy=1;B(b);};
function Ke(){C.call(this);this.me=null;}
let APm=(a,b)=>{a.me=b;},
OA=a=>{let b=new Ke();APm(b,a);return b;},
Eo=(a,b)=>{return;},
FE=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=S(C,0);a:{b:{c:{try{c=ANG(a.me,b);}catch($$e){$$je=Bs($$e);if($$je instanceof Bk){c=$$je;break c;}else if($$je instanceof LR){c=$$je;break a;}else if($$je instanceof Jx){c=$$je;break b;}else if($$je instanceof NY){c=$$je;d=new CT;e=a.me.md;if(e.jQ===null)e.jQ=W(e.jO.$meta.name);e=e.jQ;f=new J;f.jw=G(16);F(f,f.ju,A(165));g=f.ju;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jw;i=b.data;j=f.ju;k=i.length;if(j>=0&&j<=(k-0|0)){h.jv=K(b.data,0,j);d.jx=1;d.jy=1;d.jz=h;d.lk
=c;B(d);}c=new I;c.jx=1;c.jy=1;B(c);}else{throw $$e;}}return c;}d=new CT;e=a.me.md;if(e.jQ===null)e.jQ=W(e.jO.$meta.name);e=e.jQ;f=new J;f.jw=G(16);F(f,f.ju,A(166));g=f.ju;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jw;i=b.data;j=f.ju;k=i.length;if(j>=0&&j<=(k-0|0)){h.jv=K(b.data,0,j);d.jx=1;d.jy=1;d.jz=h;d.lk=c;B(d);}c=new I;c.jx=1;c.jy=1;B(c);}d=new CT;e=a.me.md;if(e.jQ===null)e.jQ=W(e.jO.$meta.name);e=e.jQ;f=new J;f.jw=G(16);F(f,f.ju,A(167));g=f.ju;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jw;i=b.data;j=f.ju;k
=i.length;if(j>=0&&j<=(k-0|0)){h.jv=K(b.data,0,j);d.jx=1;d.jy=1;d.jz=h;d.lk=c;B(d);}c=new I;c.jx=1;c.jy=1;B(c);}d=new CT;e=a.me.md;if(e.jQ===null)e.jQ=W(e.jO.$meta.name);e=e.jQ;f=new J;f.jw=G(16);F(f,f.ju,A(167));g=f.ju;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jw;i=b.data;j=f.ju;k=i.length;if(j>=0&&j<=(k-0|0)){h.jv=K(b.data,0,j);d.jx=1;d.jy=1;d.jz=h;d.lk=c;B(d);}c=new I;c.jx=1;c.jy=1;B(c);};
let CT=E(Ca);
function Eq(){C.call(this);this.j6=null;}
let ALh=null,Ma=null,GT=null,HP=null,Pr=null,U1=null,OZ=null;
let Bv=()=>{Bv=BG(Eq);AAf();};
let B4=b=>{let c,d,e,f,g,h,i;Bv();if(b===null)return null;c=b;d=W(typeof c);if(d===A(168))e=1;else if(!(A(168) instanceof H))e=0;else{f=A(168);e=d.jv!==f.jv?0:1;}a:{if(!e){if(d===A(169))e=1;else if(!(A(169) instanceof H))e=0;else{f=A(169);e=d.jv!==f.jv?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Bl]===true)return b;b=Ma;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Eq;h.j6=c;Ma.set(c,new WeakRef(h));return h;}if(d===A(170))e=1;else if
(!(A(170) instanceof H))e=0;else{b=A(170);e=d.jv!==b.jv?0:1;}if(e){f=GT.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Eq;h.j6=c;i=h;GT.set(c,new WeakRef(i));N9(U1,i,c);return h;}if(d===A(171))e=1;else if(!(A(171) instanceof H))e=0;else{b=A(171);e=d.jv!==b.jv?0:1;}if(e){f=HP.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Eq;h.j6=c;i=h;HP.set(c,new WeakRef(i));N9(OZ,i,c);return h;}if(d===A(172))e=1;else if
(!(A(172) instanceof H))e=0;else{b=A(172);e=d.jv!==b.jv?0:1;}if(e){f=Pr;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Eq;h.j6=c;Pr=new WeakRef(h);return h;}}b=new Eq;b.j6=c;return b;},
AAf=()=>{ALh=new WeakMap();Ma=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();GT=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();HP=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();U1=GT===null?null:new FinalizationRegistry(B0(new LB,"accept"));OZ=HP===null?null:new FinalizationRegistry(B0(new LA,"accept"));},
N9=(b,c,d)=>{return b.register(c,d);};
let Ql=E(0);
let JL=E();
let Hu=E(0);
let JK=E();
function Ts(){let a=this;C.call(a);a.k8=null;a.kA=null;a.m0=null;a.pf=null;a.oY=0;a.nU=0;a.ma=0;a.j_=0;a.nx=0;a.rr=0;a.ou=0;a.l1=0;a.yv=0;a.qA=0;a.qx=0;}
let AJh=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.qA=(-1);h=e+1|0;a.oY=h;i=U(h*2|0);a.k8=i;j=U(g);k=j.data;a.kA=j;e=0;g=k.length;l=Cf(e,g);if(l>0){b=new Bk;b.jx=1;b.jy=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.m0=U(f);i=i.data;h=0;m=i.length;e=Cf(h,m);if(e>0){b=new Bk;b.jx=1;b.jy=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.nU=0;a.qx=2;f=0;if(e>0){b=new Bk;b.jx=1;b.jy=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bk;b.jx=1;b.jy=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.pf=b;if(c
>=0){a.ma=c;a.j_=d;}a.nx=a.ma;},
AON=(a,b,c,d,e,f)=>{let g=new Ts();AJh(g,a,b,c,d,e,f);return g;};
let Co=E(Bk);
let J9=E(Bz);
let Eb=E(Ca);
let G0=E(Eb);
let C4=E(Bz);
function B8(){let a=this;C.call(a);a.jD=null;a.lL=0;a.jL=null;a.kz=0;}
let N=0;
let ABo=(a,b,c,d)=>{let e;e=d.j_;while(true){if(b>e)return (-1);if(a.fD(b,c,d)>=0)break;b=b+1|0;}return b;},
AEd=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fD(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AS7=(a,b)=>{a.kz=b;},
Zt=a=>{return a.kz;},
AUm=a=>{let b,c,d,e,f,g,h,i;b=a.jL;c=a.fE();d=new J;d.jw=G(16);e=d.ju;Bd(d,e,e+1|0);d.jw.data[e]=60;f=d.ju;if(b===null)b=A(2);F(d,f,b);e=d.ju;Bd(d,e,e+1|0);d.jw.data[e]=58;f=d.ju;if(c===null)c=A(2);F(d,f,c);e=d.ju;Bd(d,e,e+1|0);g=d.jw;h=g.data;h[e]=62;b=new H;e=d.ju;i=h.length;if(e>=0&&e<=(i-0|0)){b.jv=K(g.data,0,e);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
AMx=a=>{let b,c,d,e,f,g,h,i;b=a.jL;c=a.fE();d=new J;d.jw=G(16);e=d.ju;Bd(d,e,e+1|0);d.jw.data[e]=60;f=d.ju;if(b===null)b=A(2);F(d,f,b);e=d.ju;Bd(d,e,e+1|0);d.jw.data[e]=58;f=d.ju;if(c===null)c=A(2);F(d,f,c);e=d.ju;Bd(d,e,e+1|0);g=d.jw;h=g.data;h[e]=62;b=new H;e=d.ju;i=h.length;if(e>=0&&e<=(i-0|0)){b.jv=K(g.data,0,e);return b;}b=new I;X(b);B(b);},
AU2=a=>{return a.jD;},
AO7=(a,b)=>{a.jD=b;},
AO5=(a,b)=>{return 1;},
AQJ=a=>{return null;},
HR=a=>{let b;a.lL=1;b=a.jD;if(b!==null){if(!b.lL){b=b.fF();if(b!==null){a.jD.lL=1;a.jD=b;}a.jD.eZ();}else if(b instanceof F2&&b.lS.st)a.jD=b.jD;}},
AVF=()=>{N=1;};
let L6=E();
let AQt=E();
let ADl=E();
let AR_=E();
let Km=E(0);
let LB=E();
let APd=(a,b)=>{let c;Bv();b=b===null?null:b instanceof Fp()?b:B4(b);c=GT;b=b===null?null:b[Bl]===true?b:b.j6;c.delete(b);};
let AEQ=E();
let LA=E();
let X1=(a,b)=>{let c;Bv();b=b===null?null:b instanceof Fp()?b:B4(b);c=HP;b=b===null?null:b[Bl]===true?b:b.j6;c.delete(b);};
let Ni=E(0);
function Ha(){let a=this;C.call(a);a.ml=null;a.lW=null;}
function Id(){let a=this;Ha.call(a);a.rA=null;a.vL=0;}
function Df(){let a=this;B8.call(a);a.st=0;a.ld=0;}
let HC=null;
let DH=()=>{DH=BG(Df);ACx();};
let Yp=(a,b,c,d)=>{let e,f,g;e=a.ld;f=d.k8.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.jD.fD(b,c,d);if(g<0){b=a.ld;d.k8.data[(b*2|0)+1|0]=e;}return g;},
AUh=a=>{return a.ld;},
AEL=a=>{return A(173);},
Y6=(a,b)=>{return 0;},
ACx=()=>{let b,c,d;b=new Os;c=N;N=c+1|0;d=new Z;d.jw=G(20);b.jL=(L(d,d.ju,c,10)).T();HC=b;};
function Sz(){let a=this;C.call(a);a.kL=null;a.kC=0;a.no=0;a.wi=0;a.nN=0;a.kN=0;a.jR=0;a.lz=0;a.ks=null;a.nl=null;a.jN=0;a.kx=0;a.mo=0;a.p_=0;a.kK=null;}
let PN=null,Y0=null,ANg=0;
let AO9=(a,b,c)=>{let d,e,f,g,h,i,j;a.no=1;a.kK=b;if((c&16)>0){d=new J;d.jw=G(16);F(d,d.ju,A(174));e=0;while(true){f=Pz(b,A(175),e);if(f<0)break;g=f+2|0;h=Cu(b,e,g);F(d,d.ju,h);F(d,d.ju,A(176));e=g;}b=Cu(b,e,b.jv.length);F(d,d.ju,b);F(d,d.ju,A(175));b=new H;i=d.jw;j=i.data;e=d.ju;f=j.length;if(e>=0&&e<=(f-0|0))b.jv=K(i.data,0,e);else{b=new I;b.jx=1;b.jy=1;B(b);}}a.kL=G(b.jv.length+2|0);j=G(b.jv.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Du(j,0,a.kL,0,b.jv.length);i=a.kL.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.lz=g;a.kC=c;Bq(a);Bq(a);return;}if(e<0)break;if(e>=b.jv.length)break;i[e]=b.jv.charCodeAt(e);e=e+1|0;}b=new T;b.jx=1;b.jy=1;B(b);},
ACH=(a,b)=>{let c=new Sz();AO9(c,a,b);return c;},
Bq=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.nN=a.kN;a.kN=a.jR;a.ks=a.nl;a.mo=a.p_;a.p_=a.jN;a:{while(true){b=0;c=a.jN>=a.kL.data.length?0:Ml(a);a.jR=c;a.nl=null;if(a.no==4){if(c!=92)return;c=a.jN;d=a.kL.data;if(c>=d.length)c=0;else{a.kx=c;if(a.kC&4)Cj(a);else a.jN=c+1|0;c=d[a.kx];}a.jR=c;switch(c){case 69:break;default:a.jR=92;a.jN=a.kx;return;}a.no=a.wi;a.jR=a.jN>(a.kL.data.length-2|0)?0:Ml(a);}b:{c=a.jR;if(c==92){c=a.jN>=(a.kL.data.length-2|0)?(-1):Ml(a);c:{d:{a.jR=c;switch(c){case -1:e=new Cc;f=a.kK;c=a.jN;e.jx
=1;e.jy=1;e.j$=(-1);e.kM=A(61);e.kJ=f;e.j$=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.jR
=AJX(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.no!=1)break b;a.jR=(-2147483648)|c;break b;case 65:a.jR=(-2147483583);break b;case 66:a.jR=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cc;f=a.kK;c=a.jN;e.jx=1;e.jy=1;e.j$=(-1);e.kM=A(61);e.kJ=f;e.j$=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.jR
=(-2147483577);break b;case 80:case 112:break c;case 81:a.wi=a.no;a.no=4;b=1;break b;case 90:a.jR=(-2147483558);break b;case 97:a.jR=7;break b;case 98:a.jR=(-2147483550);break b;case 99:c=a.jN;d=a.kL.data;if(c>=(d.length-2|0)){e=new Cc;f=a.kK;e.jx=1;e.jy=1;e.j$=(-1);e.kM=A(61);e.kJ=f;e.j$=c;B(e);}a.kx=c;if(a.kC&4)Cj(a);else a.jN=c+1|0;a.jR=d[a.kx]&31;break b;case 101:a.jR=27;break b;case 102:a.jR=12;break b;case 110:a.jR=10;break b;case 114:a.jR=13;break b;case 116:a.jR=9;break b;case 117:a.jR=PA(a,4);break b;case 120:a.jR
=PA(a,2);break b;case 122:a.jR=(-2147483526);break b;default:}break b;}e=new H;d=a.kL;g=d.data;h=a.kx;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.jv=K(d.data,h,1);e=UW(Ie,e);if(e.nq===null)e.nq=e.fM();a.nl=e.nq;a.jR=0;break b;}e=AI$(a);j=0;if(a.jR==80)j=1;try{a.nl=AG1(e,j);}catch($$e){$$je=Bs($$e);if($$je instanceof JI){e=new Cc;f=a.kK;c=a.jN;e.jx=1;e.jy=1;e.j$=(-1);e.kM=A(61);e.kJ=f;e.j$=c;B(e);}else{throw $$e;}}a.jR=0;}else{h=a.no;if(h==1)switch(c){case 36:a.jR=(-536870876);break b;case 40:d=a.kL.data;c
=a.jN;if(d[c]!=63){a.jR=(-2147483608);break b;}a.kx=c;if(a.kC&4)Cj(a);else a.jN=c+1|0;c=a.kL.data[a.jN];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.jR=(-134217688);k=a.jN;a.kx=k;if(a.kC&4)Cj(a);else a.jN=k+1|0;break e;default:e=new Cc;f=a.kK;c=a.jN;e.jx=1;e.jy=1;e.j$=(-1);e.kM=A(61);e.kJ=f;e.j$=c;B(e);}a.jR=(-67108824);j=a.jN;a.kx=j;if(a.kC&4)Cj(a);else a.jN=j+1|0;}else{switch(c){case 33:break;case 60:h=a.jN;a.kx=h;if(a.kC&4)Cj(a);else a.jN=h+1|0;c=a.kL.data[a.jN];h=1;break e;case 61:a.jR
=(-536870872);j=a.jN;a.kx=j;if(a.kC&4)Cj(a);else a.jN=j+1|0;break e;case 62:a.jR=(-33554392);j=a.jN;a.kx=j;if(a.kC&4)Cj(a);else a.jN=j+1|0;break e;default:i=ARy(a);a.jR=i;if(i<256){a.kC=i;i=i<<16;a.jR=i;a.jR=(-1073741784)|i;break e;}i=i&255;a.jR=i;a.kC=i;i=i<<16;a.jR=i;a.jR=(-16777176)|i;break e;}a.jR=(-268435416);j=a.jN;a.kx=j;if(a.kC&4)Cj(a);else a.jN=j+1|0;}}if(!h)break;}break b;case 41:a.jR=(-536870871);break b;case 42:case 43:case 63:h=a.jN;d=a.kL.data;switch(h>=d.length?42:d[h]){case 43:a.jR=c|(-2147483648);a.kx
=h;if(a.kC&4)Cj(a);else a.jN=h+1|0;break b;case 63:a.jR=c|(-1073741824);a.kx=h;if(a.kC&4)Cj(a);else a.jN=h+1|0;break b;default:}a.jR=c|(-536870912);break b;case 46:a.jR=(-536870866);break b;case 91:a.jR=(-536870821);a.no=2;break b;case 93:if(h!=2)break b;a.jR=(-536870819);break b;case 94:a.jR=(-536870818);break b;case 123:a.nl=APs(a,c);break b;case 124:a.jR=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.jR=(-536870874);break b;case 45:a.jR=(-536870867);break b;case 91:a.jR=(-536870821);break b;case 93:a.jR
=(-536870819);break b;case 94:a.jR=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new I;e.jx=1;e.jy=1;B(e);},
AI$=a=>{let b,c,d,e,f,g,h,i;b=new J;b.jw=G(10);c=a.jN;d=a.kL;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new H;a.kx=c;if(a.kC&4)Cj(a);else a.jN=c+1|0;g=a.kx;if(g>=0&&1<=(f-g|0)){b.jv=K(d.data,g,1);h=new J;h.jw=G(16);F(h,h.ju,A(177));F(h,h.ju,b);b=new H;d=h.jw;e=d.data;f=h.ju;g=e.length;if(f>=0&&f<=(g-0|0)){b.jv=K(d.data,0,f);return b;}b=new I;b.jx=1;b.jy=1;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}a.kx=c;if(a.kC&4)Cj(a);else a.jN=c+1|0;c=0;a:{while(true){f=a.jN;d=a.kL.data;if(f>=(d.length-2|0))break;a.kx=f;if
(a.kC&4)Cj(a);else a.jN=f+1|0;c=d[a.kx];if(c==125)break a;f=b.ju;Bd(b,f,f+1|0);b.jw.data[f]=c;}}if(c!=125){b=new Cc;i=a.kK;c=a.jN;b.jx=1;b.jy=1;b.j$=(-1);b.kM=A(61);b.kJ=i;b.j$=c;B(b);}}c=b.ju;if(!c){b=new Cc;i=a.kK;c=a.jN;b.jx=1;b.jy=1;b.j$=(-1);b.kM=A(61);b.kJ=i;b.j$=c;B(b);}h=new H;d=b.jw;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.jv=K(d.data,0,c);if(h.jv.length==1){b=new J;b.jw=G(16);F(b,b.ju,A(177));F(b,b.ju,h);h=new H;d=b.jw;e=d.data;f=b.ju;g=e.length;if(f>=0&&f<=(g-0|0)){h.jv=K(d.data,0,f);return h;}b=new I;b.jx
=1;b.jy=1;B(b);}b:{c:{if(h.jv.length>3){if(h===A(177)?1:L2(h,A(177),0))break c;if(h===A(178)?1:L2(h,A(178),0))break c;}break b;}h=Cu(h,2,h.jv.length);}return h;}b=new I;b.jx=1;b.jy=1;B(b);},
APs=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new J;c.jw=G(4);d=(-1);e=2147483647;a:{while(true){f=a.jN;g=a.kL.data;if(f>=g.length)break a;a.kx=f;if(a.kC&4)Cj(a);else a.jN=f+1|0;b=g[a.kx];if(b==125)break a;if(b==44&&d<0)try{d=J3(EE(c),10);APU(c,0,YP(c));continue;}catch($$e){$$je=Bs($$e);if($$je instanceof Co){break;}else{throw $$e;}}h=b&65535;f=c.ju;Bd(c,f,f+1|0);c.jw.data[f]=h;}c=new Cc;i=a.kK;b=a.jN;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=i;c.j$=b;B(c);}if(b!=125){c=new Cc;i=a.kK;b=a.jN;c.jx=1;c.jy=1;c.j$=(-1);c.kM
=A(61);c.kJ=i;c.j$=b;B(c);}if(c.ju>0)b:{try{e=J3(EE(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bs($$e);if($$je instanceof Co){}else{throw $$e;}}c=new Cc;i=a.kK;b=a.jN;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=i;c.j$=b;B(c);}else if(d<0){c=new Cc;i=a.kK;b=a.jN;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=i;c.j$=b;B(c);}if((d|e|(e-d|0))<0){c=new Cc;i=a.kK;b=a.jN;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=i;c.j$=b;B(c);}f=a.jN;g=a.kL.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.jR=(-2147483525);a.kx=f;if(a.kC
&4)Cj(a);else a.jN=f+1|0;break c;case 63:a.jR=(-1073741701);a.kx=f;if(a.kC&4)Cj(a);else a.jN=f+1|0;break c;default:}a.jR=(-536870789);}c=new NO;c.nV=d;c.nS=e;return c;},
AEB=b=>{return b<0?0:1;},
PA=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new J;c.jw=G(b);d=a.kL.data.length-2|0;e=0;while(true){f=Cf(e,b);if(f>=0)break;g=a.jN;if(g>=d)break;h=a.kL;a.kx=g;if(a.kC&4)Cj(a);else a.jN=g+1|0;g=h.data[a.kx];i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=g;e=e+1|0;}if(!f)a:{try{b=J3(EE(c),16);}catch($$e){$$je=Bs($$e);if($$je instanceof Co){break a;}else{throw $$e;}}return b;}c=new Cc;j=a.kK;b=a.jN;c.jx=1;c.jy=1;c.j$=(-1);c.kM=A(61);c.kJ=j;c.j$=b;B(c);},
AJX=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.kL.data;e=d.length-2|0;f=O6(d[a.jN]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.jN;a.kx=g;if(a.kC&4)Cj(a);else a.jN=g+1|0;a:{while(true){if(c>=b)break a;h=a.jN;if(h>=e)break a;i=O6(a.kL.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.jN;a.kx=g;if(a.kC&4)Cj(a);else a.jN=g+1|0;c=c+1|0;}}return f;}j=new Cc;k=a.kK;b=a.jN;j.jx=1;j.jy=1;j.j$=(-1);j.kM=A(61);j.kJ=k;j.j$=b;B(j);},
ARy=a=>{let b,c,d,e,f,g,h;b=1;c=a.kC;a:while(true){d=a.jN;e=a.kL.data;if(d>=e.length){f=new Cc;g=a.kK;f.jx=1;f.jy=1;f.j$=(-1);f.kM=A(61);f.kJ=g;f.j$=d;B(f);}b:{c:{switch(e[d]){case 41:a.kx=d;if(a.kC&4)Cj(a);else a.jN=d+1|0;return c|256;case 45:if(!b){h=new Cc;g=a.kK;h.jx=1;h.jy=1;h.j$=(-1);h.kM=A(61);h.kJ=g;h.j$=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.kx=d;if(a.kC&4)Cj(a);else a.jN=d+1|0;}a.kx=d;if(a.kC&4)Cj(a);else a.jN=d+1|0;return c;},
Cj=a=>{let b,c,d,e;b=a.kL.data.length-2|0;a.jN=a.jN+1|0;a:while(true){c=a.jN;if(c<b){b:{c=a.kL.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CG(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.jN=a.jN+1|0;continue;}}c=a.jN;if(c>=b)break;d=a.kL.data;if(d[c]!=35)break;a.jN=c+1|0;while(true){e=a.jN;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.jN
=e+1|0;}}return c;},
ABj=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?H6([d,e]):H6([d,e,4519+f|0]);}return null;},
AKV=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
Ml=a=>{let b,c,d,e,f;b=a.kL;c=a.jN;a.kx=c;if(a.kC&4)Cj(a);else a.jN=c+1|0;b=b.data;d=a.kx;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.kL.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.jN;a.kx=d;if(a.kC&4)Cj(a);else a.jN=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cc(){let a=this;Bk.call(a);a.kM=null;a.kJ=null;a.j$=0;}
let AQB=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(61);c=a.j$;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bk;b.jx=1;b.jy=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new H;b.jv=K(d.data,0,f);}a:{h=a.kM;i=a.kJ;if(i!==null&&i.jv.length){j=a.j$;i=a.kJ;k=new J;k.jw=G(16);L(k,k.ju,j,10);F(k,k.ju,A(60));j=k.ju;if(i===null)i=A(2);F(k,j,i);F(k,k.ju,A(60));F(k,k.ju,b);b=new H;d=k.jw;e=d.data;c=k.ju;f=e.length;if(c>=0&&c<=(f-0|0)){b.jv=K(d.data,0,c);break a;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);}b=A(61);}i=new J;i.jw=G(16);j
=i.ju;if(h===null)h=A(2);F(i,j,h);F(i,i.ju,b);b=new H;d=i.jw;e=d.data;c=i.ju;f=e.length;if(c>=0&&c<=(f-0|0)){b.jv=K(d.data,0,c);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
let Yx=E();
let AKI=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bk;f.jx=1;f.jy=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
AMo=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bk;f.jx=1;f.jy=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=Cf(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
TU=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let J8=E(0);
let Lo=E();
let ACl=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.ko;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BJ;b.jO=f;c=b;f.classObject=c;}}b=DY(b);if(b===null){b=new C4;b.jx=1;b.jy=1;B(b);}if(b===V(Br)){b=new Bk;b.jx=1;b.jy=1;B(b);}if(d<0){b=new DI;b.jx=1;b.jy=1;B(b);}b=DG(b.jO,d);}e=0;g=0;h=a.l4;i=a.ko;d=Cf(h,h);a:{while(true){j=Cf(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new MC;b.jx=1;b.jy=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.k7.data[g];e=h;g=k;}return b;}b=new I;b.jx=1;b.jy=1;B(b);};
let Ri=E(0);
let ND=E(0);
function J$(){Lo.call(this);this.l4=0;}
let SQ=E(0);
function J7(){let a=this;J$.call(a);a.k7=null;a.ko=0;}
let GK=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.k7;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BJ;i.jO=h;j=i;h.classObject=j;}}h=DY(i);if(h===null){i=new C4;i.jx=1;i.jy=1;B(i);}if(h===V(Br)){i=new Bk;i.jx=1;i.jy=1;B(i);}if(f<0){i=new DI;i.jx=1;i.jy=1;B(i);}j=DG(h.jO,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.k7=j;}},
AFK=(a,b,c)=>{let d,e,f;if(b>=0){d=a.ko;if(b<=d){GK(a,d+1|0);d=a.ko;e=d;while(e>b){f=a.k7.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.k7.data[b]=c;a.ko=d+1|0;a.l4=a.l4+1|0;return;}}c=new I;c.jx=1;c.jy=1;B(c);},
TD=(a,b)=>{let c,d,e,f;if(b>=0){c=a.ko;if(b<c){d=a.k7.data;e=d[b];c=c-1|0;a.ko=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.l4=a.l4+1|0;return e;}}e=new I;e.jx=1;e.jy=1;B(e);};
let Re=E(Df);
let Xa=(a,b,c,d)=>{let e,f;e=a.ld;f=d.kA.data;f[e]=b-f[e]|0;return a.jD.fD(b,c,d);},
AA3=a=>{return A(179);},
AM0=(a,b)=>{return 0;};
let Vk=E(Df);
let AAC=(a,b,c,d)=>{return b;},
AF1=a=>{return A(180);};
let PD=E(Df);
let Zq=(a,b,c,d)=>{let e;e=a.ld;if(d.kA.data[e]!=b)b=(-1);return b;},
AOY=a=>{return A(181);};
function RX(){Df.call(this);this.ug=0;}
let Xz=(a,b,c,d)=>{let e,f;e=a.ld;f=d.kA.data;f[e]=b-f[e]|0;a.ug=b;return b;},
ANA=a=>{return A(182);},
AKU=(a,b)=>{return 0;};
let Gd=E(Df);
let APz=(a,b,c,d)=>{if(d.qx!=1&&b!=d.j_)return (-1);d.nU=1;d.k8.data[1]=b;return b;},
ZL=a=>{return A(183);};
function Cr(){B8.call(this);this.ka=0;}
let ARD=(a,b,c,d)=>{let e;if((b+a.fW()|0)>d.j_){d.l1=1;return (-1);}e=a.fX(b,c);if(e<0)return (-1);return a.jD.fD(b+e|0,c,d);},
AOc=a=>{return a.ka;},
AFS=(a,b)=>{return 1;};
let EV=E(Cr);
let ANm=(a,b,c)=>{return 0;},
ACL=(a,b,c,d)=>{let e,f,g;e=d.j_;f=d.ma;a:{b:{while(true){g=Cf(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.jv.length)break b;if(((c.jv.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.jv.length)break a;if((c.jv.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.jD.fD(b,c,d)>=0)break;b=b+1|0;}return b;}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);},
AAj=(a,b,c,d,e)=>{let f,g,h;f=e.j_;g=e.ma;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.jv.length)break b;if(((d.jv.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.jv.length)break a;if((d.jv.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.jD.fD(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new T;d.jx=1;d.jy=1;B(d);}d=new T;d.jx=1;d.jy=1;B(d);},
AEN=a=>{return A(184);},
Xr=(a,b)=>{return 0;};
function Cg(){let a=this;B8.call(a);a.kQ=null;a.lS=null;a.kB=0;}
let AEf=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.kQ;if(e===null)return (-1);f=a.kB;g=d.k8.data;h=f*2|0;i=g[h];g[h]=b;f=e.ko;j=0;a:{while(true){if(j>=f){b=a.kB;d.k8.data[b*2|0]=i;return (-1);}e=a.kQ;if(j<0)break a;if(j>=e.ko)break a;h=e.k7.data[j].fD(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new I;c.jx=1;c.jy=1;B(c);},
AKM=(a,b)=>{a.lS.jD=b;},
AF_=a=>{return A(185);},
AHr=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.kQ;if(c!==null){d=0;e=c.l4;f=c.ko;while(true){if(!(d>=f?0:1))break b;if(e<c.l4){b=new MC;b.jx=1;b.jy=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.ko)break a;if(c.k7.data[d].fh(b))break;d=g;}return 1;}}return 0;}b=new I;b.jx=1;b.jy=1;B(b);},
ALR=(a,b)=>{let c,d,e;c=a.kB;d=b.k8.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
AAb=a=>{let b,c,d,e;a.lL=1;b=a.lS;if(b!==null&&!b.lL)HR(b);a:{b:{b=a.kQ;if(b!==null){c=b.ko;d=0;while(true){if(d>=c)break b;b=a.kQ;if(d<0)break a;if(d>=b.ko)break a;b=b.k7.data[d];e=b.fF();if(e===null)e=b;else{b.lL=1;TD(a.kQ,d);AFK(a.kQ,d,e);}if(!e.lL)e.eZ();d=d+1|0;}}}if(a.jD!==null)HR(a);return;}b=new I;b.jx=1;b.jy=1;B(b);};
let Jm=E(Cg);
let AKl=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.kB;f=d.kA.data;g=f[e];f[e]=b;h=a.kQ.ko;e=0;a:{while(true){if(e>=h){b=a.kB;d.kA.data[b]=g;return (-1);}i=a.kQ;if(e<0)break a;if(e>=i.ko)break a;j=i.k7.data[e].fD(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new I;c.jx=1;c.jy=1;B(c);},
AHE=a=>{return A(186);},
AMp=(a,b)=>{let c;c=a.kB;return !b.kA.data[c]?0:1;};
let D3=E(Jm);
let ABw=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.kB;f=d.kA.data;g=f[e];f[e]=b;h=a.kQ.ko;i=0;a:{while(i<h){j=a.kQ;if(i<0)break a;if(i>=j.ko)break a;if(j.k7.data[i].fD(b,c,d)>=0)return a.jD.fD(a.lS.ug,c,d);i=i+1|0;}b=a.kB;d.kA.data[b]=g;return (-1);}c=new I;c.jx=1;c.jy=1;B(c);},
AL0=(a,b)=>{a.jD=b;},
Xl=a=>{return A(186);};
let Nr=E(D3);
let AKC=(a,b,c,d)=>{let e,f,g;e=a.kQ.ko;f=0;a:{while(f<e){g=a.kQ;if(f<0)break a;if(f>=g.ko)break a;if(g.k7.data[f].fD(b,c,d)>=0)return a.jD.fD(b,c,d);f=f+1|0;}return (-1);}c=new I;c.jx=1;c.jy=1;B(c);},
AO$=(a,b)=>{return 0;},
AQF=a=>{return A(187);};
let Uj=E(D3);
let YV=(a,b,c,d)=>{let e,f,g;e=a.kQ.ko;f=0;a:{while(true){if(f>=e)return a.jD.fD(b,c,d);g=a.kQ;if(f<0)break a;if(f>=g.ko)break a;if(g.k7.data[f].fD(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.jx=1;c.jy=1;B(c);},
AOs=(a,b)=>{return 0;},
AD1=a=>{return A(188);};
let QM=E(D3);
let Z5=(a,b,c,d)=>{let e,f,g,h,i;e=a.kQ.ko;f=d.rr?0:d.ma;a:{b:{g=a.jD.fD(b,c,d);if(g>=0){h=a.kB;d.kA.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.kQ;if(h<0)break a;if(h>=i.ko)break a;if(i.k7.data[h].fZ(f,b,c,d)>=0){b=a.kB;d.kA.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new I;c.jx=1;c.jy=1;B(c);},
ASb=(a,b)=>{return 0;},
AJT=a=>{return A(189);};
let Sj=E(D3);
let Wl=(a,b,c,d)=>{let e,f,g;e=a.kQ.ko;f=a.kB;d.kA.data[f]=b;f=0;a:{while(true){if(f>=e)return a.jD.fD(b,c,d);g=a.kQ;if(f<0)break a;if(f>=g.ko)break a;if(g.k7.data[f].fZ(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.jx=1;c.jy=1;B(c);},
AMI=(a,b)=>{return 0;},
Zr=a=>{return A(190);};
function F2(){Cg.call(this);this.mg=null;}
let WS=(a,b,c,d)=>{let e,f,g;e=a.kB;f=d.k8.data;e=e*2|0;g=f[e];f[e]=b;e=a.mg.fD(b,c,d);if(e>=0)return e;e=a.kB;d.k8.data[e*2|0]=g;return (-1);},
AHQ=(a,b,c,d)=>{let e;e=a.mg.fv(b,c,d);if(e>=0){b=a.kB;d.k8.data[b*2|0]=e;}return e;},
AM7=(a,b,c,d,e)=>{let f;f=a.mg.fZ(b,c,d,e);if(f>=0){b=a.kB;e.k8.data[b*2|0]=f;}return f;},
AHh=(a,b)=>{return a.mg.fh(b);},
AKO=a=>{let b,c,d,e,f;b=new NQ;c=a.mg;d=a.lS;e=N;N=e+1|0;f=new Z;f.jw=G(20);b.jL=(L(f,f.ju,e,10)).T();b.mg=c;b.lS=d;b.kB=d.ld;a.jD=b;return b;},
AQS=a=>{let b;a.lL=1;b=a.lS;if(b!==null&&!b.lL)HR(b);b=a.mg;if(b!==null&&!b.lL){b=b.fF();if(b!==null){a.mg.lL=1;a.mg=b;}a.mg.eZ();}};
let AJa=E();
let IU=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(ASV());}return b.data.length;},
DG=(b,c)=>{if(b.$meta.primitive){switch(b){};}return S(b,c);};
let Jb=E(Bz);
let Hs=E();
function Bh(){let a=this;Hs.call(a);a.j7=0;a.lJ=0;a.jP=null;a.rS=null;a.sl=null;a.ku=0;}
let Ie=null;
let YY=a=>{return null;},
XU=a=>{return a.jP;},
AIf=a=>{return !a.lJ?(HN(a.jP,0)>=2048?0:1):ALi(a.jP,0)>=2048?0:1;},
ATH=a=>{return a.ku;},
AN3=a=>{return a;},
Yg=a=>{let b,c;if(a.sl===null){b=a.f2();c=new Uw;c.yE=a;c.uq=b;b=new Bf;b.jK=U(64);c.jP=b;a.sl=c;Ev(c,a.lJ);}return a.sl;},
H5=a=>{let b,c;if(a.rS===null){b=a.f2();c=new Uv;c.ym=a;c.v$=b;c.wm=a;b=new Bf;b.jK=U(64);c.jP=b;a.rS=c;Ev(c,a.j7);a.rS.ku=a.ku;}return a.rS;},
AQD=a=>{return 0;},
Ev=(a,b)=>{let c;c=a.j7;if(c^b){a.j7=c?0:1;a.lJ=a.lJ?0:1;}if(!a.ku)a.ku=1;return a;},
ATs=a=>{return a.j7;},
AG1=(b,c)=>{b=UW(Ie,b);if(!c&&b.nq===null)b.nq=b.fM();else if(c&&b.o5===null)b.o5=Ev(b.fM(),1);return c?b.o5:b.nq;},
AS9=()=>{Ie=new MG;};
function JI(){let a=this;Bz.call(a);a.yT=null;a.yH=null;}
function Cy(){let a=this;Bh.call(a);a.rs=0;a.sf=0;a.pr=0;a.sT=0;a.m4=0;a.mv=0;a.jS=null;a.kw=null;}
let CP=(a,b)=>{let c;a:{if(a.rs){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.m4){Nb(a.jS,FQ(b&65535));break a;}L8(a.jS,FQ(b&65535));break a;}if(a.sf&&b>128){a.pr=1;if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}b=Cq(BN,b);if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}b=Cq(BO,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.sT)Nb(a.jP,b-55296|0);else L8(a.jP,b-55296|0);}if(a.m4)Nb(a.jS,b);else L8(a.jS,
b);if(!a.ku&&(b>=65536&&b<=1114111?1:0))a.ku=1;return a;},
AR7=(a,b)=>{let c,d,e;if(!a.ku&&b.ku)a.ku=1;if(a.sT){if(!b.lJ)GB(a.jP,b.f2());else DF(a.jP,b.f2());}else if(!b.lJ)Gu(a.jP,b.f2());else{F8(a.jP,b.f2());DF(a.jP,b.f2());a.lJ=a.lJ?0:1;a.sT=1;}if(!a.mv&&b.f9()!==null){if(a.m4){if(!b.j7)GB(a.jS,b.f9());else DF(a.jS,b.f9());}else if(!b.j7)Gu(a.jS,b.f9());else{F8(a.jS,b.f9());DF(a.jS,b.f9());a.j7=a.j7?0:1;a.m4=1;}}else{c=a.j7;d=a.kw;if(d!==null){if(!c){e=new OR;e.xe=a;e.ww=c;e.wh=d;e.wb=b;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}else{e=new OS;e.yZ=a;e.ve=c;e.u_=d;e.u2=b;b
=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}}else{if(c&&!a.m4&&(a.jS.kT?0:1)){d=new ON;d.x9=a;d.vb=b;b=new Bf;b.jK=U(64);d.jP=b;a.kw=d;}else if(!c){d=new OK;d.sO=a;d.r7=c;d.uA=b;b=new Bf;b.jK=U(64);d.jP=b;a.kw=d;}else{d=new OL;d.tn=a;d.sa=c;d.we=b;b=new Bf;b.jK=U(64);d.jP=b;a.kw=d;}a.mv=1;}}return a;},
BK=(a,b,c)=>{let d;if(b>c){d=new Bk;d.jx=1;d.jy=1;B(d);}a:{b:{if(!a.rs){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CP(a,b);b=b+1|0;}}if(a.m4)W9(a.jS,b,c+1|0);else In(a.jS,b,c+1|0);}return a;},
Wd=(a,b)=>{let c,d,e,f;if(!a.ku&&b.ku)a.ku=1;if(b.pr)a.pr=1;c=a.lJ;if(!(c^b.lJ)){if(!c)Gu(a.jP,b.jP);else DF(a.jP,b.jP);}else if(c)GB(a.jP,b.jP);else{F8(a.jP,b.jP);DF(a.jP,b.jP);a.lJ=1;}a:{if(!a.mv){d=b.mv;if((!d?b.jS:null)!==null){c=a.j7;if(!(c^b.j7)){if(!c){Gu(a.jS,!d?b.jS:null);break a;}DF(a.jS,!d?b.jS:null);break a;}if(c){GB(a.jS,!d?b.jS:null);break a;}F8(a.jS,!d?b.jS:null);DF(a.jS,!b.mv?b.jS:null);a.j7=1;break a;}}c=a.j7;e=a.kw;if(e!==null){if(!c){f=new OF;f.w0=a;f.v0=c;f.wd=e;f.wp=b;b=new Bf;b.jK=U(64);f.jP
=b;a.kw=f;}else{f=new O$;f.xs=a;f.wn=c;f.ud=e;f.ui=b;b=new Bf;b.jK=U(64);f.jP=b;a.kw=f;}}else{if(!a.m4&&(a.jS.kT?0:1)){if(!c){e=new OP;e.y3=a;e.u0=b;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}else{e=new OQ;e.xw=a;e.wk=b;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}}else if(!c){e=new OT;e.v1=a;e.vn=b;e.va=c;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}else{e=new OU;e.vx=a;e.vF=b;e.vN=c;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}a.mv=1;}}},
UO=(a,b)=>{let c,d,e,f;if(!a.ku&&b.ku)a.ku=1;if(b.pr)a.pr=1;c=a.lJ;if(!(c^b.lJ)){if(!c)DF(a.jP,b.jP);else Gu(a.jP,b.jP);}else if(!c)GB(a.jP,b.jP);else{F8(a.jP,b.jP);DF(a.jP,b.jP);a.lJ=0;}a:{if(!a.mv){d=b.mv;if((!d?b.jS:null)!==null){c=a.j7;if(!(c^b.j7)){if(!c){DF(a.jS,!d?b.jS:null);break a;}Gu(a.jS,!d?b.jS:null);break a;}if(!c){GB(a.jS,!d?b.jS:null);break a;}F8(a.jS,!d?b.jS:null);DF(a.jS,!b.mv?b.jS:null);a.j7=0;break a;}}c=a.j7;e=a.kw;if(e!==null){if(!c){f=new OH;f.xc=a;f.v2=c;f.up=e;f.vd=b;b=new Bf;b.jK=U(64);f.jP
=b;a.kw=f;}else{f=new OI;f.xE=a;f.vP=c;f.t_=e;f.vZ=b;b=new Bf;b.jK=U(64);f.jP=b;a.kw=f;}}else{if(!a.m4&&(a.jS.kT?0:1)){if(!c){e=new OD;e.xz=a;e.uP=b;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}else{e=new OE;e.yW=a;e.uQ=b;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}}else if(!c){e=new OJ;e.wK=a;e.wv=b;e.vC=c;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}else{e=new OC;e.vB=a;e.vT=b;e.vf=c;b=new Bf;b.jK=U(64);e.jP=b;a.kw=e;}a.mv=1;}}},
AAp=(a,b)=>{let c;c=a.kw;if(c!==null)return a.j7^c.ga(b);return a.j7^Cx(a.jS,b);},
AR8=a=>{if(!a.mv)return a.jS;return null;},
ACv=a=>{return a.jP;},
AOW=a=>{let b,c;if(a.kw!==null)return a;b=!a.mv?a.jS:null;c=new OG;c.wV=a;c.q$=b;b=new Bf;b.jK=U(64);c.jP=b;return Ev(c,a.j7);},
AJk=a=>{let b,c,d,e,f,g,h,i,j,k;b=new J;b.jw=G(16);c=HN(a.jS,0);while(c>=0){d=(EL(c)).data;e=0;f=d.length;g=b.ju;Bd(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jw.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.ju;Bd(b,g,g+1|0);b.jw.data[g]=124;c=HN(a.jS,c+1|0);}e=b.ju;if(e>0)UG(b,e-1|0);k=new H;d=b.jw;h=d.data;e=b.ju;g=h.length;if(e>=0&&e<=(g-0|0)){k.jv=K(d.data,0,e);return k;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
ACY=a=>{return a.pr;};
function Ej(){B8.call(this);this.j8=null;}
let AVL=a=>{return a.j8;},
AM9=(a,b)=>{return !a.j8.fh(b)&&!a.jD.fh(b)?0:1;},
APu=(a,b)=>{return 1;},
AIu=a=>{let b;a.lL=1;b=a.jD;if(b!==null&&!b.lL){b=b.fF();if(b!==null){a.jD.lL=1;a.jD=b;}a.jD.eZ();}b=a.j8;if(b!==null){if(!b.lL){b=b.fF();if(b!==null){a.j8.lL=1;a.j8=b;}a.j8.eZ();}else if(b instanceof F2&&b.lS.st)a.j8=b.jD;}};
function Dm(){Ej.call(this);this.kq=null;}
let Wn=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.kq.fW()|0)<=d.j_){f=a.kq.fX(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.jD.fD(b,c,d);if(f>=0)break;b=b-a.kq.fW()|0;e=e+(-1)|0;}return f;},
Z$=a=>{return A(191);};
function E4(){Dm.call(this);this.oE=null;}
let Ys=(a,b,c,d)=>{let e,f,g,h,i;e=a.oE;f=e.nV;g=e.nS;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.kq.fW()|0)>d.j_)break a;i=a.kq.fX(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.jD.fD(b,c,d);if(i>=0)break;b=b-a.kq.fW()|0;h=h+(-1)|0;}return i;}if((b+a.kq.fW()|0)>d.j_){d.l1=1;return (-1);}i=a.kq.fX(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
Y2=a=>{return LM(a.oE);};
let Do=E(Ej);
let WP=(a,b,c,d)=>{let e;if(!a.j8.gd(d))return a.jD.fD(b,c,d);e=a.j8.fD(b,c,d);if(e>=0)return e;return a.jD.fD(b,c,d);},
AFk=a=>{return A(192);};
let E2=E(Dm);
let AHX=(a,b,c,d)=>{let e;e=a.j8.fD(b,c,d);if(e<0)e=a.jD.fD(b,c,d);return e;},
ASe=(a,b)=>{a.jD=b;a.j8.e3(b);};
let Uy=E(Dm);
let ARn=(a,b,c,d)=>{while((b+a.kq.fW()|0)<=d.j_&&a.kq.fX(b,c)>0){b=b+a.kq.fW()|0;}return a.jD.fD(b,c,d);},
AI_=(a,b,c,d)=>{let e,f,g;e=a.jD.fv(b,c,d);if(e<0)return (-1);f=e-a.kq.fW()|0;while(f>=b&&a.kq.fX(f,c)>0){g=f-a.kq.fW()|0;e=f;f=g;}return e;};
let MG=E();
let Xc=null,AFG=null,SU=null;
let UW=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=SU.data;if(c>=d.length){e=new JI;e.jx=1;e.jy=1;e.jz=A(61);e.yT=A(61);e.yH=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof H))g=0;else{f=f;g=b.jv!==f.jv?0:1;}if(g)break;c=c+1|0;}return d[1];},
ABW=()=>{let b,c,d,e,f,g;b=new IJ;Xc=b;c=new Ic;AFG=c;d=S(DN(C),194);e=d.data;e[0]=P(C,[A(193),new S6]);e[1]=P(C,[A(194),new TI]);e[2]=P(C,[A(195),new TM]);e[3]=P(C,[A(196),new ID]);e[4]=P(C,[A(197),c]);e[5]=P(C,[A(198),new IX]);e[6]=P(C,[A(199),new Vy]);e[7]=P(C,[A(200),new Ju]);e[8]=P(C,[A(201),new Q$]);e[9]=P(C,[A(202),new Rz]);e[10]=P(C,[A(203),new Pt]);e[11]=P(C,[A(204),new Pe]);e[12]=P(C,[A(205),new TQ]);e[13]=P(C,[A(206),new VG]);e[14]=P(C,[A(207),new Ti]);e[15]=P(C,[A(208),new SY]);e[16]=P(C,[A(209),
new Ui]);e[17]=P(C,[A(210),new Oc]);e[18]=P(C,[A(211),new NP]);e[19]=P(C,[A(212),new Tp]);e[20]=P(C,[A(213),new TC]);e[21]=P(C,[A(214),new PQ]);e[22]=P(C,[A(215),new RF]);e[23]=P(C,[A(216),new Vd]);e[24]=P(C,[A(217),new Tz]);e[25]=P(C,[A(218),new Qz]);e[26]=P(C,[A(219),new PP]);e[27]=P(C,[A(220),new VC]);e[28]=P(C,[A(221),b]);e[29]=P(C,[A(222),new HY]);e[30]=P(C,[A(223),new Uo]);e[31]=P(C,[A(224),b]);e[32]=P(C,[A(225),new Rb]);e[33]=P(C,[A(226),c]);e[34]=P(C,[A(227),new PK]);f=S(C,2);g=f.data;g[0]=A(228);b=
new Bn;b.jV=0;b.jW=127;g[1]=b;e[35]=f;f=S(C,2);g=f.data;g[0]=A(229);b=new Bn;b.jV=128;b.jW=255;g[1]=b;e[36]=f;f=S(C,2);g=f.data;g[0]=A(230);b=new Bn;b.jV=256;b.jW=383;g[1]=b;e[37]=f;f=S(C,2);g=f.data;g[0]=A(231);b=new Bn;b.jV=384;b.jW=591;g[1]=b;e[38]=f;f=S(C,2);g=f.data;g[0]=A(232);b=new Bn;b.jV=592;b.jW=687;g[1]=b;e[39]=f;f=S(C,2);g=f.data;g[0]=A(233);b=new Bn;b.jV=688;b.jW=767;g[1]=b;e[40]=f;f=S(C,2);g=f.data;g[0]=A(234);b=new Bn;b.jV=768;b.jW=879;g[1]=b;e[41]=f;f=S(C,2);g=f.data;g[0]=A(235);b=new Bn;b.jV
=880;b.jW=1023;g[1]=b;e[42]=f;f=S(C,2);g=f.data;g[0]=A(236);b=new Bn;b.jV=1024;b.jW=1279;g[1]=b;e[43]=f;f=S(C,2);g=f.data;g[0]=A(237);b=new Bn;b.jV=1280;b.jW=1327;g[1]=b;e[44]=f;f=S(C,2);g=f.data;g[0]=A(238);b=new Bn;b.jV=1328;b.jW=1423;g[1]=b;e[45]=f;f=S(C,2);g=f.data;g[0]=A(239);b=new Bn;b.jV=1424;b.jW=1535;g[1]=b;e[46]=f;f=S(C,2);g=f.data;g[0]=A(240);b=new Bn;b.jV=1536;b.jW=1791;g[1]=b;e[47]=f;f=S(C,2);g=f.data;g[0]=A(241);b=new Bn;b.jV=1792;b.jW=1871;g[1]=b;e[48]=f;f=S(C,2);g=f.data;g[0]=A(242);b=new Bn;b.jV
=1872;b.jW=1919;g[1]=b;e[49]=f;f=S(C,2);g=f.data;g[0]=A(243);b=new Bn;b.jV=1920;b.jW=1983;g[1]=b;e[50]=f;f=S(C,2);g=f.data;g[0]=A(244);b=new Bn;b.jV=2304;b.jW=2431;g[1]=b;e[51]=f;f=S(C,2);g=f.data;g[0]=A(245);b=new Bn;b.jV=2432;b.jW=2559;g[1]=b;e[52]=f;f=S(C,2);g=f.data;g[0]=A(246);b=new Bn;b.jV=2560;b.jW=2687;g[1]=b;e[53]=f;f=S(C,2);g=f.data;g[0]=A(247);b=new Bn;b.jV=2688;b.jW=2815;g[1]=b;e[54]=f;f=S(C,2);g=f.data;g[0]=A(248);b=new Bn;b.jV=2816;b.jW=2943;g[1]=b;e[55]=f;f=S(C,2);g=f.data;g[0]=A(249);b=new Bn;b.jV
=2944;b.jW=3071;g[1]=b;e[56]=f;f=S(C,2);g=f.data;g[0]=A(250);b=new Bn;b.jV=3072;b.jW=3199;g[1]=b;e[57]=f;f=S(C,2);g=f.data;g[0]=A(251);b=new Bn;b.jV=3200;b.jW=3327;g[1]=b;e[58]=f;f=S(C,2);g=f.data;g[0]=A(252);b=new Bn;b.jV=3328;b.jW=3455;g[1]=b;e[59]=f;f=S(C,2);g=f.data;g[0]=A(253);b=new Bn;b.jV=3456;b.jW=3583;g[1]=b;e[60]=f;f=S(C,2);g=f.data;g[0]=A(254);b=new Bn;b.jV=3584;b.jW=3711;g[1]=b;e[61]=f;f=S(C,2);g=f.data;g[0]=A(255);b=new Bn;b.jV=3712;b.jW=3839;g[1]=b;e[62]=f;f=S(C,2);g=f.data;g[0]=A(256);b=new Bn;b.jV
=3840;b.jW=4095;g[1]=b;e[63]=f;f=S(C,2);g=f.data;g[0]=A(257);b=new Bn;b.jV=4096;b.jW=4255;g[1]=b;e[64]=f;f=S(C,2);g=f.data;g[0]=A(258);b=new Bn;b.jV=4256;b.jW=4351;g[1]=b;e[65]=f;f=S(C,2);g=f.data;g[0]=A(259);b=new Bn;b.jV=4352;b.jW=4607;g[1]=b;e[66]=f;f=S(C,2);g=f.data;g[0]=A(260);b=new Bn;b.jV=4608;b.jW=4991;g[1]=b;e[67]=f;f=S(C,2);g=f.data;g[0]=A(261);b=new Bn;b.jV=4992;b.jW=5023;g[1]=b;e[68]=f;f=S(C,2);g=f.data;g[0]=A(262);b=new Bn;b.jV=5024;b.jW=5119;g[1]=b;e[69]=f;f=S(C,2);g=f.data;g[0]=A(263);b=new Bn;b.jV
=5120;b.jW=5759;g[1]=b;e[70]=f;f=S(C,2);g=f.data;g[0]=A(264);b=new Bn;b.jV=5760;b.jW=5791;g[1]=b;e[71]=f;f=S(C,2);g=f.data;g[0]=A(265);b=new Bn;b.jV=5792;b.jW=5887;g[1]=b;e[72]=f;f=S(C,2);g=f.data;g[0]=A(266);b=new Bn;b.jV=5888;b.jW=5919;g[1]=b;e[73]=f;f=S(C,2);g=f.data;g[0]=A(267);b=new Bn;b.jV=5920;b.jW=5951;g[1]=b;e[74]=f;f=S(C,2);g=f.data;g[0]=A(268);b=new Bn;b.jV=5952;b.jW=5983;g[1]=b;e[75]=f;f=S(C,2);g=f.data;g[0]=A(269);b=new Bn;b.jV=5984;b.jW=6015;g[1]=b;e[76]=f;f=S(C,2);g=f.data;g[0]=A(270);b=new Bn;b.jV
=6016;b.jW=6143;g[1]=b;e[77]=f;f=S(C,2);g=f.data;g[0]=A(271);b=new Bn;b.jV=6144;b.jW=6319;g[1]=b;e[78]=f;f=S(C,2);g=f.data;g[0]=A(272);b=new Bn;b.jV=6400;b.jW=6479;g[1]=b;e[79]=f;f=S(C,2);g=f.data;g[0]=A(273);b=new Bn;b.jV=6480;b.jW=6527;g[1]=b;e[80]=f;f=S(C,2);g=f.data;g[0]=A(274);b=new Bn;b.jV=6528;b.jW=6623;g[1]=b;e[81]=f;f=S(C,2);g=f.data;g[0]=A(275);b=new Bn;b.jV=6624;b.jW=6655;g[1]=b;e[82]=f;f=S(C,2);g=f.data;g[0]=A(276);b=new Bn;b.jV=6656;b.jW=6687;g[1]=b;e[83]=f;f=S(C,2);g=f.data;g[0]=A(277);b=new Bn;b.jV
=7424;b.jW=7551;g[1]=b;e[84]=f;f=S(C,2);g=f.data;g[0]=A(278);b=new Bn;b.jV=7552;b.jW=7615;g[1]=b;e[85]=f;f=S(C,2);g=f.data;g[0]=A(279);b=new Bn;b.jV=7616;b.jW=7679;g[1]=b;e[86]=f;f=S(C,2);g=f.data;g[0]=A(280);b=new Bn;b.jV=7680;b.jW=7935;g[1]=b;e[87]=f;f=S(C,2);g=f.data;g[0]=A(281);b=new Bn;b.jV=7936;b.jW=8191;g[1]=b;e[88]=f;f=S(C,2);g=f.data;g[0]=A(282);b=new Bn;b.jV=8192;b.jW=8303;g[1]=b;e[89]=f;f=S(C,2);g=f.data;g[0]=A(283);b=new Bn;b.jV=8304;b.jW=8351;g[1]=b;e[90]=f;f=S(C,2);g=f.data;g[0]=A(284);b=new Bn;b.jV
=8352;b.jW=8399;g[1]=b;e[91]=f;f=S(C,2);g=f.data;g[0]=A(285);b=new Bn;b.jV=8400;b.jW=8447;g[1]=b;e[92]=f;f=S(C,2);g=f.data;g[0]=A(286);b=new Bn;b.jV=8448;b.jW=8527;g[1]=b;e[93]=f;f=S(C,2);g=f.data;g[0]=A(287);b=new Bn;b.jV=8528;b.jW=8591;g[1]=b;e[94]=f;f=S(C,2);g=f.data;g[0]=A(288);b=new Bn;b.jV=8592;b.jW=8703;g[1]=b;e[95]=f;f=S(C,2);g=f.data;g[0]=A(289);b=new Bn;b.jV=8704;b.jW=8959;g[1]=b;e[96]=f;f=S(C,2);g=f.data;g[0]=A(290);b=new Bn;b.jV=8960;b.jW=9215;g[1]=b;e[97]=f;f=S(C,2);g=f.data;g[0]=A(291);b=new Bn;b.jV
=9216;b.jW=9279;g[1]=b;e[98]=f;f=S(C,2);g=f.data;g[0]=A(292);b=new Bn;b.jV=9280;b.jW=9311;g[1]=b;e[99]=f;f=S(C,2);g=f.data;g[0]=A(293);b=new Bn;b.jV=9312;b.jW=9471;g[1]=b;e[100]=f;f=S(C,2);g=f.data;g[0]=A(294);b=new Bn;b.jV=9472;b.jW=9599;g[1]=b;e[101]=f;f=S(C,2);g=f.data;g[0]=A(295);b=new Bn;b.jV=9600;b.jW=9631;g[1]=b;e[102]=f;e[103]=P(C,[A(296),Bw(9632,9727)]);e[104]=P(C,[A(297),Bw(9728,9983)]);e[105]=P(C,[A(298),Bw(9984,10175)]);e[106]=P(C,[A(299),Bw(10176,10223)]);e[107]=P(C,[A(300),Bw(10224,10239)]);e[108]
=P(C,[A(301),Bw(10240,10495)]);e[109]=P(C,[A(302),Bw(10496,10623)]);e[110]=P(C,[A(303),Bw(10624,10751)]);e[111]=P(C,[A(304),Bw(10752,11007)]);e[112]=P(C,[A(305),Bw(11008,11263)]);e[113]=P(C,[A(306),Bw(11264,11359)]);e[114]=P(C,[A(307),Bw(11392,11519)]);e[115]=P(C,[A(308),Bw(11520,11567)]);e[116]=P(C,[A(309),Bw(11568,11647)]);e[117]=P(C,[A(310),Bw(11648,11743)]);e[118]=P(C,[A(311),Bw(11776,11903)]);e[119]=P(C,[A(312),Bw(11904,12031)]);e[120]=P(C,[A(313),Bw(12032,12255)]);e[121]=P(C,[A(314),Bw(12272,12287)]);e[122]
=P(C,[A(315),Bw(12288,12351)]);e[123]=P(C,[A(316),Bw(12352,12447)]);e[124]=P(C,[A(317),Bw(12448,12543)]);e[125]=P(C,[A(318),Bw(12544,12591)]);e[126]=P(C,[A(319),Bw(12592,12687)]);e[127]=P(C,[A(320),Bw(12688,12703)]);e[128]=P(C,[A(321),Bw(12704,12735)]);e[129]=P(C,[A(322),Bw(12736,12783)]);e[130]=P(C,[A(323),Bw(12784,12799)]);e[131]=P(C,[A(324),Bw(12800,13055)]);e[132]=P(C,[A(325),Bw(13056,13311)]);e[133]=P(C,[A(326),Bw(13312,19893)]);e[134]=P(C,[A(327),Bw(19904,19967)]);e[135]=P(C,[A(328),Bw(19968,40959)]);e[136]
=P(C,[A(329),Bw(40960,42127)]);e[137]=P(C,[A(330),Bw(42128,42191)]);e[138]=P(C,[A(331),Bw(42752,42783)]);e[139]=P(C,[A(332),Bw(43008,43055)]);e[140]=P(C,[A(333),Bw(44032,55203)]);e[141]=P(C,[A(334),Bw(55296,56191)]);e[142]=P(C,[A(335),Bw(56192,56319)]);e[143]=P(C,[A(336),Bw(56320,57343)]);e[144]=P(C,[A(337),Bw(57344,63743)]);e[145]=P(C,[A(338),Bw(63744,64255)]);e[146]=P(C,[A(339),Bw(64256,64335)]);e[147]=P(C,[A(340),Bw(64336,65023)]);e[148]=P(C,[A(341),Bw(65024,65039)]);e[149]=P(C,[A(342),Bw(65040,65055)]);e[150]
=P(C,[A(343),Bw(65056,65071)]);e[151]=P(C,[A(344),Bw(65072,65103)]);e[152]=P(C,[A(345),Bw(65104,65135)]);e[153]=P(C,[A(346),Bw(65136,65279)]);e[154]=P(C,[A(347),Bw(65280,65519)]);e[155]=P(C,[A(46),Bw(0,1114111)]);f=S(C,2);g=f.data;g[0]=A(348);b=new PG;AIz(b);g[1]=b;e[156]=f;e[157]=P(C,[A(349),B9(0,1)]);e[158]=P(C,[A(350),Gs(62,1)]);e[159]=P(C,[A(351),B9(1,1)]);e[160]=P(C,[A(352),B9(2,1)]);e[161]=P(C,[A(353),B9(3,0)]);e[162]=P(C,[A(354),B9(4,0)]);e[163]=P(C,[A(355),B9(5,1)]);e[164]=P(C,[A(356),Gs(448,1)]);e[165]
=P(C,[A(357),B9(6,1)]);e[166]=P(C,[A(358),B9(7,0)]);e[167]=P(C,[A(359),B9(8,1)]);e[168]=P(C,[A(360),Gs(3584,1)]);e[169]=P(C,[A(361),B9(9,1)]);e[170]=P(C,[A(362),B9(10,1)]);e[171]=P(C,[A(363),B9(11,1)]);e[172]=P(C,[A(364),Gs(28672,0)]);e[173]=P(C,[A(365),B9(12,0)]);e[174]=P(C,[A(366),B9(13,0)]);e[175]=P(C,[A(367),B9(14,0)]);e[176]=P(C,[A(368),AFt(983040,1,1)]);e[177]=P(C,[A(369),B9(15,0)]);e[178]=P(C,[A(370),B9(16,1)]);e[179]=P(C,[A(371),B9(18,1)]);e[180]=P(C,[A(372),AHn(19,0,1)]);e[181]=P(C,[A(373),Gs(1643118592,
1)]);e[182]=P(C,[A(374),B9(20,0)]);e[183]=P(C,[A(375),B9(21,0)]);e[184]=P(C,[A(376),B9(22,0)]);e[185]=P(C,[A(377),B9(23,0)]);e[186]=P(C,[A(378),B9(24,1)]);e[187]=P(C,[A(379),Gs(2113929216,1)]);e[188]=P(C,[A(380),B9(25,1)]);e[189]=P(C,[A(381),B9(26,0)]);e[190]=P(C,[A(382),B9(27,0)]);e[191]=P(C,[A(383),B9(28,1)]);e[192]=P(C,[A(384),B9(29,0)]);e[193]=P(C,[A(385),B9(30,0)]);SU=d;};
function Bp(){let a=this;C.call(a);a.nq=null;a.o5=null;}
let AIz=a=>{return;},
AUS=(a,b)=>{if(!b&&a.nq===null)a.nq=a.fM();else if(b&&a.o5===null)a.o5=Ev(a.fM(),1);if(b)return a.o5;return a.nq;};
function NO(){let a=this;Hs.call(a);a.nV=0;a.nS=0;}
let LM=a=>{let b,c,d,e,f,g,h;b=a.nV;c=a.nS;if(c==2147483647)d=A(61);else{d=new Z;d.jw=G(20);d=(L(d,d.ju,c,10)).T();}e=new J;e.jw=G(16);c=e.ju;Bd(e,c,c+1|0);e.jw.data[c]=123;L(e,e.ju,b,10);b=e.ju;Bd(e,b,b+1|0);e.jw.data[b]=44;f=e.ju;if(d===null)d=A(2);F(e,f,d);b=e.ju;Bd(e,b,b+1|0);g=e.jw;h=g.data;h[b]=125;d=new H;b=e.ju;c=h.length;if(b>=0&&b<=(c-0|0)){d.jv=K(g.data,0,b);return d;}d=new I;d.jx=1;d.jy=1;Bo(d);B(d);};
let Os=E(B8);
let AGv=(a,b,c,d)=>{return b;},
AKy=a=>{return A(386);},
AKL=(a,b)=>{return 0;};
function Bf(){let a=this;C.call(a);a.jK=null;a.kT=0;}
let L8=(a,b)=>{let c,d,e;if(b<0){c=new I;c.jx=1;c.jy=1;B(c);}d=b/32|0;if(b>=a.kT){IS(a,d+1|0);a.kT=b+1|0;}e=a.jK.data;e[d]=e[d]|1<<(b%32|0);},
In=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=Cf(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.kT){IS(a,e+1|0);a.kT=c;}if(d==e){f=a.jK.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.jK.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new I;i.jx=1;i.jy=1;B(i);},
Nb=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.jx=1;c.jy=1;B(c);}d=b/32|0;e=a.jK.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.kT-1|0))HI(a);}},
W9=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.kT;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.jK.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.jK.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}HI(a);return;}i=new I;i.jx=1;i.jy=1;B(i);},
Cx=(a,b)=>{let c,d,e;if(b<0){c=new I;c.jx=1;c.jy=1;B(c);}d=b/32|0;e=a.jK.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
HN=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.jx=1;c.jy=1;B(c);}d=a.kT;if(b>=d)return (-1);e=b/32|0;f=a.jK.data;g=f[e]>>>(b%32|0)|0;if(g)return DQ(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+DQ(f[g])|0;g=g+1|0;}return (-1);},
ALi=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new I;c.jx=1;c.jy=1;B(c);}d=a.kT;if(b>=d)return b;e=b/32|0;f=a.jK.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return DQ(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+DQ(f[h]^(-1))|0;h=h+1|0;}return d;},
IS=(a,b)=>{let c,d,e,f,g,h;c=a.jK.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=U(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jK=g;},
HI=a=>{let b,c,d;b=(a.kT+31|0)/32|0;a.kT=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Oa(a.jK.data[c]);if(d<32)break;c=c+(-1)|0;a.kT=a.kT-32|0;}a.kT=a.kT-d|0;}},
IR=(a,b)=>{let c,d,e,f,g;c=a.jK.data;d=c.length;e=b.jK.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
DF=(a,b)=>{let c,d,e,f,g,h,i;c=a.jK.data;d=c.length;e=b.jK.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.kT;i=b.kT;if(h<i)i=h;a.kT=i;HI(a);},
GB=(a,b)=>{let c,d,e,f,g;c=a.jK.data;d=c.length;e=b.jK.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}HI(a);},
Gu=(a,b)=>{let c,d,e,f,g;c=a.kT;d=b.kT;if(c>d)d=c;a.kT=d;IS(a,(d+31|0)/32|0);e=a.jK.data;c=e.length;f=b.jK.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
F8=(a,b)=>{let c,d,e,f,g;c=a.kT;d=b.kT;if(c>d)d=c;a.kT=d;IS(a,(d+31|0)/32|0);e=a.jK.data;c=e.length;f=b.jK.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}HI(a);};
function Nx(){let a=this;Cg.call(a);a.rd=null;a.r9=0;}
let AE1=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.ma;f=d.j_;g=b+1|0;f=Cf(g,f);if(f>0){d.l1=1;return (-1);}if(b>=0&&b<c.jv.length){h=c.jv.charCodeAt(b);if(!a.rd.ga(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.jv.length){if((c.jv.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new T;c.jx=1;c.jy=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.jv.length){if(!((c.jv.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new T;c.jx=1;c.jy=1;B(c);}}return a.jD.fD(g,c,d);}c=new T;c.jx
=1;c.jy=1;B(c);},
AKW=a=>{let b,c,d,e,f,g,h,i;b=!a.r9?A(387):A(388);c=a.rd.T();d=new J;d.jw=G(16);F(d,d.ju,A(389));F(d,d.ju,b);e=d.ju;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
function GZ(){let a=this;Cg.call(a);a.oH=null;a.oz=null;}
let Yh=(a,b,c,d)=>{let e;e=a.oH.fD(b,c,d);if(e<0)e=AE1(a.oz,b,c,d);if(e>=0)return e;return (-1);},
AKi=(a,b)=>{a.jD=b;a.oz.jD=b;a.oH.e3(b);},
ALm=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.oH;c=a.oz;d=new J;d.jw=G(16);F(d,d.ju,A(390));e=d.ju;if(b===null)b=A(2);else{f=b.jL;b=b.fE();g=new J;ED(g);F3(g,60);Io(g,f);F3(g,58);Io(g,b);F3(g,62);b=LD(g);}F(d,e,b);F(d,d.ju,A(391));e=d.ju;if(c===null)b=A(2);else{b=c.jL;f=!c.r9?A(387):A(388);c=c.rd.T();g=Et();Ly(Ly(Ly(g,A(389)),f),c);f=EE(g);c=new J;ED(c);F3(c,60);Io(c,b);F3(c,58);Io(c,f);F3(c,62);b=LD(c);}F(d,e,b);b=new H;h=d.jw;i=h.data;j=d.ju;k=i.length;if(j>=0&&j<=(k-0|0)){b.jv=K(h.data,0,j);return b;}b=new I;b.jx=
1;b.jy=1;Bo(b);B(b);},
Zy=(a,b)=>{return 1;},
YX=(a,b)=>{return 1;};
function Dz(){let a=this;Cg.call(a);a.lX=null;a.pe=0;}
let ACj=(a,b,c,d)=>{let e,f,g,h;a:{e=d.j_;if(b<e){f=b+1|0;if(b>=0&&b<c.jv.length){g=c.jv.charCodeAt(b);if(a.ga(g)){h=a.jD.fD(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.jv.length){f=c.jv.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.ga(((g&1023)<<10|f&1023)+65536|0))break a;else return a.jD.fD(e,c,d);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}}return (-1);},
AQs=a=>{let b,c,d,e,f,g,h,i;b=!a.pe?A(387):A(388);c=a.lX.T();d=new J;d.jw=G(16);F(d,d.ju,A(389));F(d,d.ju,b);e=d.ju;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
ADe=(a,b)=>{return a.lX.ga(b);},
X8=(a,b)=>{let c,d;if(b instanceof D9)return a.lX.ga(b.oT);if(b instanceof DR)return a.lX.ga(b.lK);if(b instanceof Dz){c=a.lX;b=b.lX;return c.f9()!==null&&b.f9()!==null?IR(c.f9(),b.f9()):1;}if(!(b instanceof DU))return 1;c=a.lX;d=b.mF;return c.f9()!==null&&d.f9()!==null?IR(c.f9(),d.f9()):1;},
AT1=a=>{return a.lX;},
ANU=(a,b)=>{a.jD=b;},
ACB=(a,b)=>{return 1;};
let JC=E(Dz);
let AFT=(a,b)=>{let c;c=a.lX;if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}b=Cq(BN,b);if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}return c.ga(Cq(BO,b));},
AQZ=a=>{let b,c,d,e,f,g,h,i;b=!a.pe?A(387):A(388);c=a.lX.T();d=new J;d.jw=G(16);F(d,d.ju,A(392));F(d,d.ju,b);e=d.ju;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
function Kc(){let a=this;Cr.call(a);a.rh=null;a.sR=0;}
let AGy=(a,b,c)=>{let d;d=a.rh;if(b>=0&&b<c.jv.length){b=c.jv.charCodeAt(b);if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}b=Cq(BN,b)&65535;if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}return !d.ga(Cq(BO,b)&65535)?(-1):1;}c=new T;c.jx=1;c.jy=1;B(c);},
Ze=a=>{let b,c,d,e,f,g,h,i;b=!a.sR?A(387):A(388);c=a.rh.T();d=new J;d.jw=G(16);F(d,d.ju,A(392));F(d,d.ju,b);e=d.ju;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
function DU(){let a=this;Cr.call(a);a.mF=null;a.tj=0;}
let VN=(a,b,c)=>{let d;d=a.mF;if(b>=0&&b<c.jv.length)return !d.ga(c.jv.charCodeAt(b))?(-1):1;c=new T;c.jx=1;c.jy=1;B(c);},
AGQ=a=>{let b,c,d,e,f,g,h,i;b=!a.tj?A(387):A(388);c=a.mF.T();d=new J;d.jw=G(16);F(d,d.ju,A(389));F(d,d.ju,b);e=d.ju;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
AKN=(a,b)=>{let c,d;if(b instanceof DR)return a.mF.ga(b.lK);if(b instanceof DU){c=a.mF;b=b.mF;return c.f9()!==null&&b.f9()!==null?IR(c.f9(),b.f9()):1;}if(!(b instanceof Dz)){if(!(b instanceof D9))return 1;return 0;}c=a.mF;d=b.lX;return c.f9()!==null&&d.f9()!==null?IR(c.f9(),d.f9()):1;};
function H7(){let a=this;Cg.call(a);a.nG=null;a.ny=null;a.qu=0;}
let AHW=(a,b)=>{a.jD=b;},
AMK=a=>{let b,c,d,e,f,g,h,i;if(a.ny===null){b=new H;c=a.nG;b.jv=K(c.data,0,c.data.length);a.ny=b;}d=a.ny;b=new J;b.jw=G(16);F(b,b.ju,A(393));e=b.ju;if(d===null)d=A(2);F(b,e,d);f=new H;c=b.jw;g=c.data;h=b.ju;i=g.length;if(h>=0&&h<=(i-0|0)){f.jv=K(c.data,0,h);return f;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
V$=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.j_;f=U(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.jv.length){j=c.jv.charCodeAt(b);k=ABj(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.qu;if(b!=m)return (-1);while(true){if(l>=m)return a.jD.fD(i,c,d);if(f[l]!=a.nG.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.jv.length){j=c.jv.charCodeAt(i);g=j-4449|0;}else{c=new T;c.jx=1;c.jy=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.jv.length){j=c.jv.charCodeAt(b);h
=j-4519|0;}else{c=new T;c.jx=1;c.jy=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.qu==3){m=k[0];f=a.nG.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.jD.fD(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.qu==2){m=k[0];f=a.nG.data;if(m==f[0]&&k[1]==f[1]){b=a.jD.fD(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new T;c.jx=1;c.jy=1;B(c);},
Zm=(a,b)=>{let c,d,e;a:{if(b instanceof H7){b=b;if(b.ny===null){c=new H;d=b.nG;c.jv=K(d.data,0,d.data.length);b.ny=c;}c=b.ny;if(a.ny===null){b=new H;d=a.nG;b.jv=K(d.data,0,d.data.length);a.ny=b;}b=a.ny;if(c===b)e=1;else if(!(b instanceof H))e=0;else{b=b;e=c.jv!==b.jv?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AO0=(a,b)=>{return 1;};
function DR(){Cr.call(this);this.lK=0;}
let AGa=a=>{return 1;},
AEx=(a,b,c)=>{let d;d=a.lK;if(b>=0&&b<c.jv.length)return d!=c.jv.charCodeAt(b)?(-1):1;c=new T;c.jx=1;c.jy=1;B(c);},
ACc=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof H){e=d.j_;while(true){if(b>=e)return (-1);f=Hp(c,a.lK,b);if(f<0)return (-1);g=a.jD;b=f+1|0;if(g.fD(b,c,d)>=0)break;}return f;}h=d.j_;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.j_){d.l1=1;e=(-1);}else{e=a.lK;if(b<0)break a;if(b>=c.jv.length)break a;e=e!=c.jv.charCodeAt(b)?(-1):1;e=e<0?(-1):a.jD.fD(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new T;X(c);B(c);},
AGk=(a,b,c,d,e)=>{let f;if(d instanceof H){a:{while(true){if(c<b)return (-1);c=FK(d,a.lK,c);if(c<0)break a;if(c<b)break a;if(a.jD.fD(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.j_){e.l1=1;f=(-1);}else{f=a.lK;if(c<0)break b;if(c>=d.jv.length)break b;f=f!=d.jv.charCodeAt(c)?(-1):1;f=f<0?(-1):a.jD.fD(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new T;X(d);B(d);},
APi=a=>{let b,c,d,e,f,g,h;b=a.lK;c=new J;c.jw=G(16);d=c.ju;Bd(c,d,d+1|0);e=c.jw;f=e.data;f[d]=b;g=new H;d=c.ju;h=f.length;if(d>=0&&d<=(h-0|0)){g.jv=K(e.data,0,d);return g;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
AOP=(a,b)=>{let c,d,e,f;if(b instanceof DR)return b.lK!=a.lK?0:1;if(!(b instanceof DU)){if(b instanceof Dz)return b.ga(a.lK);if(!(b instanceof D9))return 1;return 0;}b=b;c=a.lK;d=new H;e=G(1);f=e.data;f[0]=c;d.jv=K(e.data,0,f.length);b=b.mF;if(0>=d.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}return (!b.ga(d.jv.charCodeAt(0))?(-1):1)<=0?0:1;};
function MN(){Cr.call(this);this.qM=0;}
let VW=(a,b,c)=>{let d;d=a.qM;if(b>=0&&b<c.jv.length){b=c.jv.charCodeAt(b);if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}b=Cq(BN,b)&65535;if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}return d!=(Cq(BO,b)&65535)?(-1):1;}c=new T;c.jx=1;c.jy=1;B(c);},
AKf=a=>{let b,c,d,e,f,g,h;b=a.qM;c=new J;c.jw=G(16);F(c,c.ju,A(394));d=c.ju;Bd(c,d,d+1|0);e=c.jw;f=e.data;f[d]=b;g=new H;d=c.ju;h=f.length;if(d>=0&&d<=(h-0|0)){g.jv=K(e.data,0,d);return g;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);};
function Jz(){let a=this;Cr.call(a);a.rU=0;a.sj=0;}
let WG=(a,b,c)=>{let d;d=a.rU;if(b>=0&&b<c.jv.length){a:{b:{if(d!=c.jv.charCodeAt(b)){d=a.sj;if(b<0)break a;if(b>=c.jv.length)break a;if(d!=c.jv.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);},
AEV=a=>{let b,c,d,e,f,g,h;b=a.rU;c=new J;c.jw=G(16);F(c,c.ju,A(395));d=c.ju;Bd(c,d,d+1|0);e=c.jw;f=e.data;f[d]=b;g=new H;d=c.ju;h=f.length;if(d>=0&&d<=(h-0|0)){g.jv=K(e.data,0,d);return g;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);};
function E7(){let a=this;Cg.call(a);a.ox=0;a.nd=null;a.oj=null;a.of=0;}
let AQN=(a,b)=>{a.jD=b;},
AKj=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=U(4);f=d.j_;if(b>=f)return (-1);g=La(a,b,c,f);h=b+a.ox|0;i=PN.gp(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Du(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=La(a,h,c,f);while(b<4){if(!AKV(g)){k=b+1|0;i[b]=g;}else{j=(PN.gp(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.ox|0;if(h>=f){b=k;break a;}g=La(a,h,c,f);b=k;}}}if(b!=a.of)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.jD.fD(h,c,d);if(j[g]!=a.oj.data[g])break;g
=g+1|0;}return (-1);},
AJ1=a=>{let b,c,d,e,f,g,h,i;if(a.nd===null){b=new J;b.jw=G(16);c=0;while(c<a.of){d=EL(a.oj.data[c]);e=d.data.length;JJ(b,b.ju,d,0,e);c=c+1|0;}f=new H;d=b.jw;g=d.data;h=b.ju;e=g.length;if(h>=0&&h<=(e-0|0)){f.jv=K(d.data,0,h);a.nd=f;}else{b=new I;X(b);B(b);}}i=a.nd;b=new J;b.jw=G(16);F(b,b.ju,A(396));c=b.ju;if(i===null)i=A(2);F(b,c,i);f=new H;d=b.jw;g=d.data;h=b.ju;e=g.length;if(h>=0&&h<=(e-0|0)){f.jv=K(d.data,0,h);return f;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
La=(a,b,c,d)=>{let e,f,g,h;a:{a.ox=1;if(b>=(d-1|0)){if(b>=0&&b<c.jv.length){e=c.jv.charCodeAt(b);break a;}c=new T;c.jx=1;c.jy=1;B(c);}d=b+1|0;if(b>=0&&b<c.jv.length){e=c.jv.charCodeAt(b);if(d>=0&&d<c.jv.length){f=c.jv.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=Zx(g,0,h.length);a.ox=2;}break a;}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}return e;},
AGA=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof E7){b=b;if(b.nd===null){c=new J;c.jw=G(16);d=0;while(d<b.of){e=EL(b.oj.data[d]);f=e.data.length;JJ(c,c.ju,e,0,f);d=d+1|0;}g=new H;e=c.jw;h=e.data;i=c.ju;f=h.length;if(i>=0&&i<=(f-0|0)){g.jv=K(e.data,0,i);b.nd=g;}else{b=new I;X(b);B(b);}}g=b.nd;if(a.nd===null){b=new J;b.jw=G(16);d=0;while(d<a.of){e=EL(a.oj.data[d]);f=e.data.length;JJ(b,b.ju,e,0,f);d=d+1|0;}c=new H;e=b.jw;h=e.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0)){c.jv=K(e.data,0,f);a.nd=c;}else{b=new I;X(b);B(b);}}b
=a.nd;if(g===b)d=1;else if(!(b instanceof H))d=0;else{b=b;d=g.jv!==b.jv?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
AL3=(a,b)=>{return 1;};
let Vc=E(E7);
let SI=E(E7);
let VF=E(Do);
let AAJ=(a,b,c,d)=>{let e;while(true){e=a.j8.fD(b,c,d);if(e<=0)break;b=e;}return a.jD.fD(b,c,d);};
let Px=E(Do);
let AIW=(a,b,c,d)=>{let e;e=a.j8.fD(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.j8.fD(e,c,d);if(b<=e)break;e=b;}b=e;}return a.jD.fD(b,c,d);};
let Gy=E(Do);
let ANN=(a,b,c,d)=>{let e;if(!a.j8.gd(d))return a.jD.fD(b,c,d);e=a.j8.fD(b,c,d);if(e>=0)return e;return a.jD.fD(b,c,d);},
APJ=(a,b)=>{a.jD=b;a.j8.e3(b);};
let Pg=E(Gy);
let AGi=(a,b,c,d)=>{let e;e=a.j8.fD(b,c,d);if(e<=0)e=b;return a.jD.fD(e,c,d);},
AJw=(a,b)=>{a.jD=b;};
function FT(){let a=this;Do.call(a);a.ni=null;a.my=0;}
let AR3=(a,b,c,d)=>{let e,f,g,h;e=a.my;e=d.m0.data[e];if(!a.j8.gd(d))return a.jD.fD(b,c,d);if(e>=a.ni.nS)return a.jD.fD(b,c,d);f=a.my;e=e+1|0;d.m0.data[f]=e;g=a.j8.fD(b,c,d);if(g>=0){b=a.my;d.m0.data[b]=0;return g;}g=a.my;e=e+(-1)|0;h=d.m0.data;h[g]=e;if(e>=a.ni.nV)return a.jD.fD(b,c,d);h[g]=0;return (-1);},
APT=a=>{return LM(a.ni);};
let NR=E(FT);
let AFl=(a,b,c,d)=>{let e,f,g;e=0;f=a.ni.nS;a:{while(true){g=a.j8.fD(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ni.nV)return (-1);return a.jD.fD(b,c,d);};
let Q7=E(Do);
let AQ2=(a,b,c,d)=>{let e;if(!a.j8.gd(d))return a.jD.fD(b,c,d);e=a.jD.fD(b,c,d);if(e>=0)return e;return a.j8.fD(b,c,d);};
let Qe=E(Gy);
let ZA=(a,b,c,d)=>{let e;if(!a.j8.gd(d))return a.jD.fD(b,c,d);e=a.jD.fD(b,c,d);if(e<0)e=a.j8.fD(b,c,d);return e;};
let Tk=E(FT);
let XI=(a,b,c,d)=>{let e,f,g;e=a.my;f=d.m0.data[e];if(!a.j8.gd(d))return a.jD.fD(b,c,d);g=a.ni;if(f>=g.nS){e=a.my;d.m0.data[e]=0;return a.jD.fD(b,c,d);}if(f<g.nV){e=a.my;d.m0.data[e]=f+1|0;e=a.j8.fD(b,c,d);}else{e=a.jD.fD(b,c,d);if(e>=0){b=a.my;d.m0.data[b]=0;return e;}e=a.my;d.m0.data[e]=f+1|0;e=a.j8.fD(b,c,d);}return e;};
let Q8=E(Ej);
let ARG=(a,b,c,d)=>{let e;e=d.j_;if(e>b)return a.jD.fZ(b,e,c,d);return a.jD.fD(b,c,d);},
AN5=(a,b,c,d)=>{let e;e=d.j_;if(a.jD.fZ(b,e,c,d)>=0)return b;return (-1);},
ALt=a=>{return A(397);};
function OB(){Ej.call(this);this.rc=null;}
let AKP=(a,b,c,d)=>{let e,f,g;e=d.j_;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.rc;if(f<0)break;if(f>=c.jv.length)break;if(g.gt(c.jv.charCodeAt(f)))break a;f=f+1|0;}c=new T;c.jx=1;c.jy=1;B(c);}if(f>=0)e=f;if(e>b)return a.jD.fZ(b,e,c,d);return a.jD.fD(b,c,d);},
Wg=(a,b,c,d)=>{let e,f,g,h,i;e=d.j_;f=a.jD.fv(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.rc;if(g<0)break;if(g>=c.jv.length)break;if(h.gt(c.jv.charCodeAt(g)))break a;g=g+1|0;}c=new T;c.jx=1;c.jy=1;B(c);}if(g>=0)e=g;g=a.jD.fZ(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.rc;if(i<0)break;if(i>=c.jv.length)break;if(d.gt(c.jv.charCodeAt(i)))break b;i=i+(-1)|0;}c=new T;c.jx=1;c.jy=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
AMT=a=>{return A(398);};
let Hg=E();
let F4=null,FR=null;
let VH=E(Dm);
let XN=(a,b,c,d)=>{let e;a:{while(true){if((b+a.kq.fW()|0)>d.j_)break a;e=a.kq.fX(b,c);if(e<1)break;b=b+e|0;}}return a.jD.fD(b,c,d);};
let Ut=E(E2);
let AIP=(a,b,c,d)=>{let e;if((b+a.kq.fW()|0)<=d.j_){e=a.kq.fX(b,c);if(e>=1)b=b+e|0;}return a.jD.fD(b,c,d);};
let O8=E(E4);
let AM_=(a,b,c,d)=>{let e,f,g,h,i;e=a.oE;f=e.nV;g=e.nS;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.kq.fW()|0)>d.j_)break a;i=a.kq.fX(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.jD.fD(b,c,d);}if((b+a.kq.fW()|0)>d.j_){d.l1=1;return (-1);}i=a.kq.fX(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let P8=E(Dm);
let AKF=(a,b,c,d)=>{let e;while(true){e=a.jD.fD(b,c,d);if(e>=0)break;if((b+a.kq.fW()|0)<=d.j_){e=a.kq.fX(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let SL=E(E2);
let XZ=(a,b,c,d)=>{let e;e=a.jD.fD(b,c,d);if(e>=0)return e;return a.j8.fD(b,c,d);};
let QN=E(E4);
let ANs=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.oE;f=e.nV;g=e.nS;h=0;while(true){if(h>=f){a:{while(true){i=a.jD.fD(b,c,d);if(i>=0)break;if((b+a.kq.fW()|0)<=d.j_){i=a.kq.fX(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.kq.fW()|0)>d.j_){d.l1=1;return (-1);}j=a.kq.fX(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let K5=E(B8);
let AHl=(a,b,c,d)=>{if(b&&!(d.ou&&b==d.ma))return (-1);return a.jD.fD(b,c,d);},
AFB=(a,b)=>{return 0;},
AIQ=a=>{return A(399);};
function Kx(){B8.call(this);this.tG=0;}
let YU=(a,b,c,d)=>{let e,f,g;if(b>=d.j_)e=32;else if(b>=0&&b<c.jv.length)e=c.jv.charCodeAt(b);else{c=new T;c.jx=1;c.jy=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.jv.length)f=c.jv.charCodeAt(f);else{c=new T;c.jx=1;c.jy=1;B(c);}}g=d.rr?0:d.ma;return (e!=32&&!Qh(a,e,b,g,c)?0:1)^(f!=32&&!Qh(a,f,b-1|0,g,c)?0:1)^a.tG?(-1):a.jD.fD(b,c,d);},
Zh=(a,b)=>{return 0;},
ARY=a=>{return A(400);},
Qh=(a,b,c,d,e)=>{let f;a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CG(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.jv.length)break c;e:{f:{f=e.jv.charCodeAt(c);switch(CG(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(CG(f)!=6)return 1;}}return 1;}e=new T;e.jx=1;e.jy=1;B(e);}return 0;};
let Ov=E(B8);
let AFZ=(a,b,c,d)=>{if(b!=d.qA)return (-1);return a.jD.fD(b,c,d);},
ARV=(a,b)=>{return 0;},
YB=a=>{return A(401);};
function MK(){B8.call(this);this.o_=0;}
let ALG=(a,b,c,d)=>{let e,f,g;e=!d.ou?c.jv.length:d.j_;if(b>=e){f=a.o_;d.kA.data[f]=0;return a.jD.fD(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.jv.length){if(c.jv.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.jv.length){if(c.jv.charCodeAt(g)!=10)break a;f=a.o_;d.kA.data[f]=0;return a.jD.fD(b,c,d);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.jv.length){f=c.jv.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new T;c.jx
=1;c.jy=1;B(c);}}return (-1);}e=a.o_;d.kA.data[e]=0;return a.jD.fD(b,c,d);},
AAu=(a,b)=>{let c,d,e;c=a.o_;d=b.kA.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AH3=a=>{return A(402);};
let UI=E(B8);
let AJ9=(a,b,c,d)=>{if(b<(!d.rr?d.j_:c.jv.length))return (-1);d.l1=1;d.yv=1;return a.jD.fD(b,c,d);},
VT=(a,b)=>{return 0;},
AEe=a=>{return A(403);};
function NZ(){B8.call(this);this.vj=null;}
let Z_=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.j_){if(!b)break b;if(d.ou&&b==d.ma)break b;e=a.vj;f=b-1|0;if(f>=0&&f<c.jv.length){f=c.jv.charCodeAt(f);if(b<0)break a;if(b>=c.jv.length)break a;if(!e.gv(f,c.jv.charCodeAt(b)))break c;else break b;}c=new T;c.jx=1;c.jy=1;B(c);}}return (-1);}return a.jD.fD(b,c,d);}c=new T;c.jx=1;c.jy=1;B(c);},
ADL=(a,b)=>{return 0;},
Yb=a=>{return A(404);};
let UE=E(Cg);
let AQ7=(a,b,c,d)=>{let e,f,g,h,i;e=d.j_;f=b+1|0;if(f>e){d.l1=1;return (-1);}if(b>=0&&b<c.jv.length){g=Cf(c.jv.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.jv.length){h=c.jv.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.jD.fD(i,c,d);}c=new T;c.jx=1;c.jy=1;B(c);}}}return a.jD.fD(f,c,d);}c=new T;c.jx=1;c.jy=1;B(c);},
ABE=a=>{return A(405);},
Zp=(a,b)=>{a.jD=b;},
AJE=a=>{return (-2147483602);},
Zn=(a,b)=>{return 1;};
function O2(){Cg.call(this);this.s1=null;}
let AJ3=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.j_;f=b+1|0;if(f>e){d.l1=1;return (-1);}if(b>=0&&b<c.jv.length){g=c.jv.charCodeAt(b);h=Cf(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.jv.length){i=c.jv.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.s1.gt(((g&1023)<<10|i&1023)+65536|0)?(-1):a.jD.fD(j,c,d);}c=new T;c.jx=1;c.jy=1;B(c);}}}return a.s1.gt(g)?(-1):a.jD.fD(f,c,d);}c=new T;c.jx=1;c.jy=1;B(c);},
AAH=a=>{return A(406);},
AMR=(a,b)=>{a.jD=b;},
VI=a=>{return (-2147483602);},
ARA=(a,b)=>{return 1;};
function Uu(){B8.call(this);this.rn=0;}
let AGM=(a,b,c,d)=>{let e,f;e=!d.ou?c.jv.length:d.j_;if(b>=e){e=a.rn;d.kA.data[e]=0;return a.jD.fD(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.jv.length){if(c.jv.charCodeAt(b)!=10)break a;else{f=a.rn;d.kA.data[f]=1;return a.jD.fD(b+1|0,c,d);}}c=new T;c.jx=1;c.jy=1;B(c);}}return (-1);},
ADm=(a,b)=>{let c,d,e;c=a.rn;d=b.kA.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AHx=a=>{return A(402);};
function R0(){B8.call(this);this.ru=0;}
let AJ7=(a,b,c,d)=>{let e;if((!d.ou?c.jv.length-b|0:d.j_-b|0)<=0){e=a.ru;d.kA.data[e]=0;return a.jD.fD(b,c,d);}if(b>=0&&b<c.jv.length){if(c.jv.charCodeAt(b)!=10)return (-1);e=a.ru;d.kA.data[e]=1;return a.jD.fD(b+1|0,c,d);}c=new T;c.jx=1;c.jy=1;B(c);},
AC9=(a,b)=>{let c,d,e;c=a.ru;d=b.kA.data;e=!d[c]?0:1;d[c]=(-1);return e;},
Xg=a=>{return A(407);};
function No(){B8.call(this);this.pC=0;}
let AFs=(a,b,c,d)=>{let e,f,g;e=!d.ou?c.jv.length-b|0:d.j_-b|0;if(!e){e=a.pC;d.kA.data[e]=0;return a.jD.fD(b,c,d);}a:{if(e<2){if(b>=0&&b<c.jv.length){f=c.jv.charCodeAt(b);g=97;break a;}c=new T;c.jx=1;c.jy=1;B(c);}if(b>=0&&b<c.jv.length){f=c.jv.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.jv.length){g=c.jv.charCodeAt(e);break a;}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.pC;d.kA.data[e]=0;return a.jD.fD(b,c,d);case 13:if(g!=10){e=a.pC;d.kA.data[e]=0;return a.jD.fD(b,
c,d);}e=a.pC;d.kA.data[e]=0;return a.jD.fD(b,c,d);default:}return (-1);},
AAz=(a,b)=>{let c,d,e;c=a.pC;d=b.kA.data;e=!d[c]?0:1;d[c]=(-1);return e;},
ADP=a=>{return A(408);};
function Gp(){let a=this;Cg.call(a);a.pR=0;a.oK=0;}
let XR=(a,b,c,d)=>{let e,f,g,h,i;e=H_(a,d);if(e!==null&&(b+e.jv.length|0)<=d.j_){f=0;a:{b:{c:{d:{while(true){if(f>=e.jv.length){g=a.oK;d.kA.data[g]=e.jv.length;return a.jD.fD(b+e.jv.length|0,c,d);}if(f<0)break c;if(f>=e.jv.length)break c;h=e.jv.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.jv.length)break d;if(h!=c.jv.charCodeAt(i)){if(f<0)break a;if(f>=e.jv.length)break a;g=FQ(e.jv.charCodeAt(f));if(i<0)break b;if(i>=c.jv.length)break b;if(g!=c.jv.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new T;c.jx=1;c.jy
=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}return (-1);},
ALX=(a,b)=>{a.jD=b;},
H_=(a,b)=>{let c,d,e,f,g;c=a.pR;d=b.k8.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.pf.jv.length?Cu(b.pf,f,g):null;},
Xo=a=>{let b,c,d,e,f,g,h;b=a.kB;c=new J;c.jw=G(16);F(c,c.ju,A(409));L(c,c.ju,b,10);d=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){d.jv=K(e.data,0,g);return d;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
AMq=(a,b)=>{let c,d,e;c=a.oK;d=b.kA.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let UC=E(Gp);
let AAI=(a,b,c,d)=>{let e,f,g;e=H_(a,d);if(e!==null&&(b+e.jv.length|0)<=d.j_){f=!L2(c,e,b)?(-1):e.jv.length;if(f<0)return (-1);g=a.oK;d.kA.data[g]=f;return a.jD.fD(b+f|0,c,d);}return (-1);},
AO8=(a,b,c,d)=>{let e,f,g;e=H_(a,d);f=d.ma;if(e!==null&&(b+e.jv.length|0)<=f){while(true){if(b>f)return (-1);g=Pz(c,e,b);if(g<0)return (-1);if(a.jD.fD(g+e.jv.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
Xi=(a,b,c,d,e)=>{let f,g;f=H_(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=AB$(d,f,c);if(g<0)break a;if(g<b)break a;if(a.jD.fD(g+f.jv.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AIE=(a,b)=>{return 1;},
APE=a=>{let b,c,d,e,f,g,h;b=a.kB;c=new J;c.jw=G(16);F(c,c.ju,A(410));L(c,c.ju,b,10);d=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){d.jv=K(e.data,0,g);return d;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);};
function QG(){Gp.call(this);this.w8=0;}
let AHJ=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pR;f=d.k8.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.pf.jv.length?Cu(d.pf,h,i):null;if(j!==null&&(b+j.jv.length|0)<=d.j_){i=0;a:{b:{while(true){if(i>=j.jv.length){e=a.oK;d.kA.data[e]=j.jv.length;return a.jD.fD(b+j.jv.length|0,c,d);}if(i<0)break a;if(i>=j.jv.length)break a;e=j.jv.charCodeAt(i);if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}e=Cq(BN,e)&65535;if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value)
:null)));}g=Cq(BO,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.jv.length)break b;e=c.jv.charCodeAt(h);if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}e=Cq(BN,e)&65535;if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}if(g!=(Cq(BO,e)&65535))break;i=i+1|0;}return (-1);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}return (-1);},
Zi=a=>{let b,c,d,e,f,g,h;b=a.w8;c=new J;c.jw=G(16);F(c,c.ju,A(411));L(c,c.ju,b,10);d=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){d.jv=K(e.data,0,g);return d;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);};
let Or=E(Z);
let AC0=(a,b,c,d,e)=>{let f,g,h,i;Bd(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jw.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Y1=(a,b,c,d)=>{let e,f,g,h,i;e=a.ju;Bd(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jw.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
ZK=(a,b)=>{H3(a,b);},
AN$=(a,b,c)=>{Bd(a,b,b+1|0);a.jw.data[b]=c;return a;};
function Ra(){let a=this;Cr.call(a);a.lt=null;a.sC=null;a.ta=null;}
let ABh=(a,b)=>{let c,d,e,f,g,h;c=N;N=c+1|0;d=new Z;d.jw=G(20);a.jL=(L(d,d.ju,c,10)).T();a.ka=1;d=new H;e=b.jw;f=e.data;g=b.ju;h=f.length;if(g>=0&&g<=(h-0|0)){d.jv=K(e.data,0,g);a.lt=d;c=b.ju;a.ka=c;a.sC=Sr(c);a.ta=Sr(a.ka);c=0;a:{b:{while(c<(a.ka-1|0)){b=a.sC;d=a.lt;if(c<0)break a;if(c>=d.jv.length)break a;QQ(b,d.jv.charCodeAt(c),(a.ka-c|0)-1|0);b=a.ta;d=a.lt;g=(a.ka-c|0)-1|0;if(g<0)break b;if(g>=d.jv.length)break b;QQ(b,d.jv.charCodeAt(g),(a.ka-c|0)-1|0);c=c+1|0;}return;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx
=1;b.jy=1;B(b);}b=new I;b.jx=1;b.jy=1;B(b);},
AFx=a=>{let b=new Ra();ABh(b,a);return b;},
ABm=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.ka){e=d+b|0;if(e<0)break a;if(e>=c.jv.length)break a;f=c.jv.charCodeAt(e);g=a.lt;if(d<0)break b;if(d>=g.jv.length)break b;if(f!=g.jv.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.ka;}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);},
YM=(a,b,c,d)=>{let e,f;e=d.j_;while(true){if(b>e)return (-1);f=APl(a,c,b,e);if(f<0)return (-1);if(a.jD.fD(f+a.ka|0,c,d)>=0)break;b=f+1|0;}return f;},
ADE=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AN_(a,d,b,c);if(c<0)return (-1);if(a.jD.fD(c+a.ka|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
AKr=a=>{let b,c,d,e,f,g,h;b=a.lt;c=new J;c.jw=G(16);F(c,c.ju,A(412));d=c.ju;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){b.jv=K(e.data,0,g);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
AEK=(a,b)=>{let c,d,e;if(b instanceof DR){c=b.lK;b=a.lt;if(0<b.jv.length)return c!=b.jv.charCodeAt(0)?0:1;b=new T;b.jx=1;b.jy=1;B(b);}if(b instanceof DU){b=b;d=Cu(a.lt,0,1);b=b.mF;if(0>=d.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}return (!b.ga(d.jv.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof Dz)){if(!(b instanceof D9))return 1;a:{if(a.lt.jv.length>1){e=b.oT;b=a.lt;if(0>=b.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}c=b.jv.charCodeAt(0);b=a.lt;if(1>=b.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}if(e==(((c&1023)<<10|
b.jv.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.lt;if(0>=d.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}b:{c:{if(!b.ga(d.jv.charCodeAt(0))){if(a.lt.jv.length<=1)break c;d=a.lt;if(0>=d.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}c=d.jv.charCodeAt(0);d=a.lt;if(1>=d.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}if(!b.ga(((c&1023)<<10|d.jv.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
APl=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lt;f=a.ka-1|0;if(f>=0&&f<e.jv.length){g=e.jv.charCodeAt(f);a:{b:{c:{while(true){f=a.ka;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.jv.length)break c;h=b.jv.charCodeAt(f);if(h==g){f=0;d:{while(f<a.ka){i=f+c|0;if(i<0)break a;if(i>=b.jv.length)break a;j=b.jv.charCodeAt(i);e=a.lt;if(f<0)break b;if(f>=e.jv.length)break b;if(j!=e.jv.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+RV(a.sC,h)|0;}return c;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy
=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);},
AN_=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lt;if(0>=e.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}f=e.jv.charCodeAt(0);g=(b.jv.length-d|0)-a.ka|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.jv.length)break c;h=b.jv.charCodeAt(d);if(h==f){g=0;d:{while(g<a.ka){i=g+d|0;if(i<0)break a;if(i>=b.jv.length)break a;j=b.jv.charCodeAt(i);e=a.lt;if(g<0)break b;if(g>=e.jv.length)break b;if(j!=e.jv.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-RV(a.ta,h)|0;}return d;}b=new T;b.jx=1;b.jy
=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);};
function Nm(){Cr.call(this);this.qg=null;}
let AHT=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.qg.jv.length)return a.qg.jv.length;e=a.qg;if(d<0)break a;if(d>=e.jv.length)break a;f=e.jv.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.jv.length)break b;h=c.jv.charCodeAt(g);if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}h=Cq(BN,h)&65535;if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}if(f!=(Cq(BO,h)&65535))break;d=d+1|0;}return (-1);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy
=1;B(c);},
AEW=a=>{let b,c,d,e,f,g,h;b=a.qg;c=new J;c.jw=G(16);F(c,c.ju,A(413));d=c.ju;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){b.jv=K(e.data,0,g);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
function NV(){Cr.call(this);this.pd=null;}
let ANb=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.pd.jv.length)return a.pd.jv.length;e=a.pd;if(d<0)break c;if(d>=e.jv.length)break c;f=e.jv.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.jv.length)break d;if(f!=c.jv.charCodeAt(g)){e=a.pd;if(d<0)break a;if(d>=e.jv.length)break a;h=FQ(e.jv.charCodeAt(d));if(g<0)break b;if(g>=c.jv.length)break b;if(h!=c.jv.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=
1;c.jy=1;B(c);},
AOV=a=>{let b,c,d,e,f,g,h;b=a.pd;c=new J;c.jw=G(16);F(c,c.ju,A(414));d=c.ju;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){b.jv=K(e.data,0,g);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
let ASf=E();
function Nk(){Cr.call(this);this.sX=0;}
let ANf=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.jv.length){e=c.jv.charCodeAt(b);if(d>=0&&d<c.jv.length){d=c.jv.charCodeAt(d);b=a.sX;d=((e&1023)<<10|d&1023)+65536|0;if(BN===null){if(BB===null)BB=DD();BN=Cn(Cs((BB.value!==null?W(BB.value):null)));}d=Cq(BN,d);if(BO===null){if(BC===null)BC=DB();BO=Cn(Cs((BC.value!==null?W(BC.value):null)));}return b!=Cq(BO,d)?(-1):2;}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);},
ARW=a=>{let b,c,d,e,f,g;b=new H;c=EL(a.sX);b.jv=K(c.data,0,c.data.length);d=new J;d.jw=G(16);F(d,d.ju,A(394));F(d,d.ju,b);b=new H;c=d.jw;e=c.data;f=d.ju;g=e.length;if(f>=0&&f<=(g-0|0)){b.jv=K(c.data,0,f);return b;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
function Hi(){Cg.call(this);this.n1=0;}
let AKB=(a,b)=>{a.jD=b;},
Kj=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.j_){d.l1=1;return (-1);}if(b>=0&&b<c.jv.length){a:{f=c.jv.charCodeAt(b);if(b>d.ma){b=b-1|0;if(b>=0&&b<c.jv.length){if(!((c.jv.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new T;c.jx=1;c.jy=1;B(c);}}if(a.n1!=f)return (-1);return a.jD.fD(e,c,d);}c=new T;c.jx=1;c.jy=1;B(c);},
AEE=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof H)){e=d.j_;a:{while(true){if(b>e){b=(-1);break a;}if(Kj(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.ma;g=d.j_;b:{while(true){if(b>=g)return (-1);h=Hp(c,a.n1,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.jv.length)break b;if((c.jv.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.jD;b=h+1|0;if(i.fD(b,c,d)>=0)break;}return h;}c=new T;c.jx=1;c.jy=1;B(c);},
ABB=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(Kj(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.ma;b:{c:{while(true){if(c<b)return (-1);g=FK(d,a.n1,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.jv.length)break b;if((d.jv.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.jD.fD(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new T;d.jx=1;d.jy=1;B(d);},
AOl=a=>{let b,c,d,e,f,g,h;b=a.n1;c=new J;c.jw=G(16);d=c.ju;Bd(c,d,d+1|0);e=c.jw;f=e.data;f[d]=b;g=new H;d=c.ju;h=f.length;if(d>=0&&d<=(h-0|0)){g.jv=K(e.data,0,d);return g;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
W8=(a,b)=>{if(b instanceof DR)return 0;if(b instanceof DU)return 0;if(b instanceof Dz)return 0;if(b instanceof D9)return 0;if(b instanceof Hq)return 0;if(!(b instanceof Hi))return 1;return b.n1!=a.n1?0:1;},
AOA=(a,b)=>{return 1;};
function Hq(){Cg.call(this);this.nM=0;}
let ZG=(a,b)=>{a.jD=b;},
JA=(a,b,c,d)=>{let e,f,g;e=d.j_;f=b+1|0;e=Cf(f,e);if(e>0){d.l1=1;return (-1);}if(b>=0&&b<c.jv.length){a:{g=c.jv.charCodeAt(b);if(e<0){if(f>=0&&f<c.jv.length){if(!((c.jv.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new T;c.jx=1;c.jy=1;B(c);}}if(a.nM!=g)return (-1);return a.jD.fD(f,c,d);}c=new T;c.jx=1;c.jy=1;B(c);},
ALb=(a,b,c,d)=>{let e,f;if(!(c instanceof H)){e=d.j_;a:{while(true){if(b>e){b=(-1);break a;}if(JA(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.j_;b:{while(true){if(b>=e)return (-1);f=Hp(c,a.nM,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.jv.length)break b;if((c.jv.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.jD.fD(b,c,d)>=0)break;}return f;}c=new T;c.jx=1;c.jy=1;B(c);},
ANa=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(JA(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.j_;b:{c:{while(true){if(c<b)return (-1);g=FK(d,a.nM,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.jv.length)break b;if((d.jv.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.jD.fD(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new T;d.jx=1;d.jy=1;B(d);},
AQ5=a=>{let b,c,d,e,f,g,h;b=a.nM;c=new J;c.jw=G(16);d=c.ju;Bd(c,d,d+1|0);e=c.jw;f=e.data;f[d]=b;g=new H;d=c.ju;h=f.length;if(d>=0&&d<=(h-0|0)){g.jv=K(e.data,0,d);return g;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
ABq=(a,b)=>{if(b instanceof DR)return 0;if(b instanceof DU)return 0;if(b instanceof Dz)return 0;if(b instanceof D9)return 0;if(b instanceof Hi)return 0;if(!(b instanceof Hq))return 1;return b.nM!=a.nM?0:1;},
ALn=(a,b)=>{return 1;};
function D9(){let a=this;Cr.call(a);a.oN=0;a.or=0;a.oT=0;}
let AMr=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.jv.length){e=c.jv.charCodeAt(b);if(d>=0&&d<c.jv.length){d=c.jv.charCodeAt(d);return a.oN==e&&a.or==d?2:(-1);}c=new T;c.jx=1;c.jy=1;B(c);}c=new T;c.jx=1;c.jy=1;B(c);},
AJp=(a,b,c,d)=>{let e,f,g,h;if(c instanceof H){e=d.j_;a:{while(b<e){b=Hp(c,a.oN,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.jv.length)break a;f=c.jv.charCodeAt(b);if(a.or==f&&a.jD.fD(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new T;c.jx=1;c.jy=1;B(c);}g=d.j_;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.ka|0)>d.j_){d.l1=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.jv.length)break b;e=c.jv.charCodeAt(b);if(h<0)break c;if(h>=c.jv.length)break c;f=c.jv.charCodeAt(h);h
=a.oN==e&&a.or==f?2:(-1);h=h<0?(-1):a.jD.fD(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new T;X(c);B(c);}c=new T;X(c);B(c);},
ZE=(a,b,c,d,e)=>{let f,g,h;if(d instanceof H){a:{b:{while(true){if(c<b)return (-1);c=FK(d,a.or,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.oN;if(c<0)break a;if(c>=d.jv.length)break a;if(f==d.jv.charCodeAt(c)&&a.jD.fD(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new T;d.jx=1;d.jy=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.ka|0)>e.j_){e.l1=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.jv.length)break c;h=d.jv.charCodeAt(c);if(g<0)break d;if(g>=d.jv.length)break d;g=d.jv.charCodeAt(g);f
=a.oN==h&&a.or==g?2:(-1);f=f<0?(-1):a.jD.fD(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new T;X(d);B(d);}d=new T;X(d);B(d);},
APK=a=>{let b,c,d,e,f,g,h;b=a.oN;c=a.or;d=new J;d.jw=G(16);e=d.ju;Bd(d,e,e+1|0);d.jw.data[e]=b;b=d.ju;Bd(d,b,b+1|0);f=d.jw;g=f.data;g[b]=c;h=new H;c=d.ju;e=g.length;if(c>=0&&c<=(e-0|0)){h.jv=K(f.data,0,c);return h;}d=new I;d.jx=1;d.jy=1;Bo(d);B(d);},
AL8=(a,b)=>{if(b instanceof D9)return b.oT!=a.oT?0:1;if(b instanceof Dz)return b.ga(a.oT);if(b instanceof DR)return 0;if(!(b instanceof DU))return 1;return 0;};
let I0=E(Hg);
let ZT=(a,b)=>{return b!=10?0:1;},
AMf=(a,b,c)=>{return b!=10?0:1;};
let I1=E(Hg);
let ANv=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AQx=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function Tj(){let a=this;C.call(a);a.tT=null;a.r_=null;a.pV=0;a.wD=0;}
let AFV=(a,b)=>{let c,d;while(true){c=a.pV;if(b<c)break;a.pV=c<<1|1;}d=c<<1|1;a.pV=d;d=d+1|0;a.tT=U(d);a.r_=U(d);a.wD=b;},
Sr=a=>{let b=new Tj();AFV(b,a);return b;},
QQ=(a,b,c)=>{let d,e,f,g;d=0;e=a.pV;f=b&e;while(true){g=a.tT.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.r_.data[f]=c;},
RV=(a,b)=>{let c,d,e,f;c=a.pV;d=b&c;e=0;while(true){f=a.tT.data[d];if(!f)break;if(f==b)return a.r_.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.wD;};
let IJ=E(Bp);
let AE8=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return CP(BK(b,9,13),32);};
let Ic=E(Bp);
let AHL=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(b,48,57);};
let S6=E(Bp);
let AMX=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(b,97,122);};
let TI=E(Bp);
let AOB=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(b,65,90);};
let TM=E(Bp);
let ACk=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(b,0,127);};
let ID=E(Bp);
let AAo=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(BK(b,97,122),65,90);};
let IX=E(ID);
let ADg=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(BK(BK(b,97,122),65,90),48,57);};
let Vy=E(Bp);
let AED=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(BK(BK(b,33,64),91,96),123,126);};
let Ju=E(IX);
let V0=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(BK(BK(BK(BK(BK(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let Q$=E(Ju);
let AIw=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return CP(BK(BK(BK(BK(BK(BK(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let Rz=E(Bp);
let ABe=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return CP(CP(b,32),9);};
let Pt=E(Bp);
let AIo=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return CP(BK(b,0,31),127);};
let Pe=E(Bp);
let AQC=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(BK(BK(b,48,57),97,102),65,70);};
let TQ=E(Bp);
let AJB=a=>{let b,c;b=new R5;b.x3=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let VG=E(Bp);
let Wa=a=>{let b,c;b=new Nu;b.x$=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let Ti=E(Bp);
let AFw=a=>{let b,c;b=new Rp;b.xK=a;c=new Bf;c.jK=U(64);b.jP=c;return b;};
let SY=E(Bp);
let AMv=a=>{let b,c;b=new Ro;b.xA=a;c=new Bf;c.jK=U(64);b.jP=c;return b;};
let Ui=E(Bp);
let ABb=a=>{let b,c;b=new UP;b.yy=a;c=new Bf;c.jK=U(64);b.jP=c;In(c,0,2048);b.ku=1;return b;};
let Oc=E(Bp);
let ABM=a=>{let b,c;b=new O3;b.yf=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let NP=E(Bp);
let AQo=a=>{let b,c;b=new On;b.yU=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let Tp=E(Bp);
let VX=a=>{let b,c;b=new Qp;b.x4=a;c=new Bf;c.jK=U(64);b.jP=c;return b;};
let TC=E(Bp);
let AG0=a=>{let b,c;b=new Nq;b.wN=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let PQ=E(Bp);
let AB0=a=>{let b,c;b=new Nt;b.yh=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let RF=E(Bp);
let ADQ=a=>{let b,c;b=new Og;b.yx=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let Vd=E(Bp);
let AG5=a=>{let b,c;b=new Pl;b.yL=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let Tz=E(Bp);
let AO2=a=>{let b,c;b=new Pq;b.xL=a;c=new Bf;c.jK=U(64);b.jP=c;return b;};
let Qz=E(Bp);
let ALy=a=>{let b,c;b=new Sy;b.yj=a;c=new Bf;c.jK=U(64);b.jP=c;return b;};
let PP=E(Bp);
let AJr=a=>{let b,c;b=new RO;b.wS=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let VC=E(Bp);
let AMM=a=>{let b,c;b=new NG;b.y4=a;c=new Bf;c.jK=U(64);b.jP=c;b.ku=1;return b;};
let HY=E(Bp);
let AHq=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return CP(BK(BK(BK(b,97,122),65,90),48,57),95);};
let Uo=E(HY);
let AI1=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;b=Ev(CP(BK(BK(BK(b,97,122),65,90),48,57),95),1);b.ku=1;return b;};
let Rb=E(IJ);
let YJ=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;b=Ev(CP(BK(b,9,13),32),1);b.ku=1;return b;};
let PK=E(Ic);
let AEs=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;b=Ev(BK(b,48,57),1);b.ku=1;return b;};
function Bn(){let a=this;Bp.call(a);a.jV=0;a.jW=0;}
let AQm=(a,b,c)=>{a.jV=b;a.jW=c;},
Bw=(a,b)=>{let c=new Bn();AQm(c,a,b);return c;},
AHu=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(b,a.jV,a.jW);};
let PG=E(Bp);
let AQa=a=>{let b,c;b=new Cy;c=new Bf;c.jK=U(64);b.jP=c;c=new Bf;c.jK=U(2);b.jS=c;return BK(BK(b,65279,65279),65520,65533);};
function K9(){let a=this;Bp.call(a);a.ty=0;a.r6=0;a.uC=0;}
let AAy=(a,b,c)=>{a.r6=c;a.ty=b;},
B9=(a,b)=>{let c=new K9();AAy(c,a,b);return c;},
AQn=(a,b,c,d)=>{a.uC=d;a.r6=c;a.ty=b;},
AHn=(a,b,c)=>{let d=new K9();AQn(d,a,b,c);return d;},
AC4=a=>{let b,c,d;b=new Jk;c=a.ty;d=new Bf;d.jK=U(64);b.jP=d;b.rw=c;if(a.uC)In(d,0,2048);b.ku=a.r6;return b;};
function Ld(){let a=this;Bp.call(a);a.tw=0;a.sb=0;a.uh=0;}
let AB1=(a,b,c)=>{a.sb=c;a.tw=b;},
Gs=(a,b)=>{let c=new Ld();AB1(c,a,b);return c;},
VZ=(a,b,c,d)=>{a.uh=d;a.sb=c;a.tw=b;},
AFt=(a,b,c)=>{let d=new Ld();VZ(d,a,b,c);return d;},
VY=a=>{let b,c,d;b=new Rf;c=a.tw;d=new Bf;d.jK=U(64);b.jP=d;b.rw=c;if(a.uh)In(d,0,2048);b.ku=a.sb;return b;};
let DI=E(Bz);
let XC=E();
let ABr=E();
let Zz=E();
let AQQ=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new Mh;d=G(b.jv.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.su=d;f=FL(c);d=U(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=FL(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=FL(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.jv.length)break;e[f]=b.jv.charCodeAt(f);f=f+1|0;}b=new T;b.jx=1;b.jy=1;B(b);},
Cs=b=>{let c,d,e,f,g,h,i,j,k,l;c=new Mh;d=G(b.jv.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.su=d;f=FL(c);d=U(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+FL(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=FL(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.jv.length)break;e[f]=b.jv.charCodeAt(f);f=f+1|0;}b=new T;b.jx=1;b.jy=1;B(b);},
Cn=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=U(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bk;l.jx=1;l.jy=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new TV;l.vh=b;l.vu=c;return l;},
Iv=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
ASc=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=S(HX,16384);d=c.data;e=BE(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.jv.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BJ;b.jO=j;k=b;j.classObject=k;}}b=DY(b);if(b===null){b=new C4;b.jx=1;b.jy=1;B(b);}if(b===V(Br)){b=new Bk;b.jx=1;b.jy=1;B(b);}if(g<0){b=new DI;b.jx=1;b.jy=1;B(b);}k=DG(b.jO,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.jv.length)break c;l=Iv(b.jv.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.jv.length)break b;l=Iv(b.jv.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.jv.length)break a;m=m|C$(n,Iv(b.jv.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.jv.length)break;m=Iv(b.jv.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new HX;l=h+f|0;q=BE(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.sJ=h;j.s9=l;j.sM=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new HX;t=h+f|0;q=BE(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.sJ=h;j.s9=t;j.sM=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);}b=new T;b.jx=1;b.jy=1;B(b);};
function TV(){let a=this;C.call(a);a.vh=null;a.vu=null;}
function HX(){let a=this;C.call(a);a.sJ=0;a.s9=0;a.sM=null;}
function Mh(){let a=this;C.call(a);a.su=null;a.u8=0;}
let AEz=E();
let FL=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.su.data;f=b.u8;b.u8=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+C$(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AMY=E();
function P1(){let a=this;Dq.call(a);a.ux=null;a.uw=0;a.pK=null;}
let AN6=(a,b)=>{return;},
AB4=(a,b)=>{let c,d,e,f,g,h;if(BS===null){b=new CS;c=new Ct;c.k3=BE(32);b.lr=c;c=new J;BA(c);c.jw=G(16);b.k6=c;b.k5=G(32);b.k9=0;b.k$=Cl;BS=b;}b=a.ux;c=new J;c.jw=G(16);F(c,c.ju,A(415));d=c.ju;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){b.jv=K(e.data,0,g);BT(Bt(b));BT("\n");return;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
XO=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(JT(If(A(110),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.pK;b.sY=b.q3.jA;if(a.uw){e=0;while(true){b=a.pK;c=b.q3;f=Cf(e,c.jA);if(f>=0)break a;if(f>=0){g=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,e,10);F(b,b.ju,A(19));e=c.jA;L(b,b.ju,e,10);c=new H;d=b.jw;h=d.data;f=b.ju;i=h.length;if(f>=0&&f<=(i-0|0)){c.jv=K(d.data,0,f);g.jx=1;g.jy=1;g.jz=c;B(g);}b=new I;X(b);B(b);}AE2(b,c.jM.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(JT(If(A(108),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AGL(h[1]);b=h[2];if(b===null){b=new Co;b.jx=1;b.jy=1;b.jz=A(75);B(b);}m=AOt(b,0,b.jv.length,10);n=h[3];o=Fm;if(k===A(416))i=1;else if(!(A(416) instanceof H))i=0;else{b=A(416);i=k.jv!==b.jv?0:1;}if(i)o=Fd;if(k===A(417))i=1;else if(!(A(417) instanceof H))i=0;else{b=A(417);i=k.jv!==b.jv?0:1;}if(i)o=E5;if(k===A(418))i=1;else if(!(A(418) instanceof H))i=0;else{b=A(418);i=k.jv!==b.jv?0:1;}if(i)o=EZ;if(k===A(226))i=1;else if(!(A(226) instanceof H))i=0;else{b=A(226);i=k.jv!==b.jv?0:1;}if(i)o=Jg;if
(o===EZ&&!F$.v8)m=B6;g=new RR;g.sQ=l;g.uI=o;g.wl=m;g.uz=n;C5(a.pK.uX,l,l);BL(a.pK.q3,g);f=f+1|0;}b=new Q;b.jx=1;b.jy=1;b.jz=A(419);B(b);},
AJd=(a,b,c)=>{return XO(a,b,c);};
let CB=E(Bx);
let ZV=null,AJI=null,AA9=null,AA8=null,Z1=null,ZD=null,Y5=null,AAW=null,YK=null,AGs=null;
let H8=()=>{H8=BG(CB);Xt();};
let Xt=()=>{let b,c,d,e,f,g,h,i,j;b=new Ub;H8();b.jJ=A(420);b.jE=0;ZV=b;c=new Uc;c.jJ=A(421);c.jE=1;AJI=c;d=new Ug;d.jJ=A(422);d.jE=2;AA9=d;e=new Uh;e.jJ=A(423);e.jE=3;AA8=e;f=new Ue;f.jJ=A(424);f.jE=4;Z1=f;g=new Uf;g.jJ=A(425);g.jE=5;ZD=g;h=new T_;h.jJ=A(426);h.jE=6;Y5=h;i=new Ua;i.jJ=A(427);i.jE=7;AAW=i;j=new T9;j.jJ=A(428);j.jE=8;YK=j;AGs=P(CB,[b,c,d,e,f,g,h,i,j]);};
function Fl(){let a=this;Ha.call(a);a.ow=0;a.mx=null;}
let ARv=E(0);
let Zc=b=>{let c,d;if(b===A(429))c=1;else if(!(A(429) instanceof H))c=0;else{d=A(429);c=b.jv!==d.jv?0:1;}a:{if(!c){if(b===A(430))c=1;else if(!(A(430) instanceof H))c=0;else{d=A(430);c=b.jv!==d.jv?0:1;}if(!c){if(b===A(431))c=1;else if(!(A(431) instanceof H))c=0;else{d=A(431);c=b.jv!==d.jv?0:1;}if(!c){if(b===A(432))c=1;else if(!(A(432) instanceof H))c=0;else{d=A(432);c=b.jv!==d.jv?0:1;}if(!c){if(b===A(433))c=1;else if(!(A(433) instanceof H))c=0;else{d=A(433);c=b.jv!==d.jv?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AE_=b=>{let c,d;if(b===A(434))c=1;else if(!(A(434) instanceof H))c=0;else{d=A(434);c=b.jv!==d.jv?0:1;}a:{b:{if(c)break b;if(b===A(435))c=1;else if(!(A(435) instanceof H))c=0;else{d=A(435);c=b.jv!==d.jv?0:1;}if(c)break b;if(b===A(436))c=1;else if(!(A(436) instanceof H))c=0;else{d=A(436);c=b.jv!==d.jv?0:1;}if(c)break b;if(b===A(437))c=1;else if(!(A(437) instanceof H))c=0;else{d=A(437);c=b.jv!==d.jv?0:1;}if(c)break b;if(b===A(438))c=1;else if(!(A(438) instanceof H))c=0;else{d=A(438);c=b.jv!==d.jv?0:1;}if(c)break b;if
(b===A(439))c=1;else if(!(A(439) instanceof H))c=0;else{d=A(439);c=b.jv!==d.jv?0:1;}if(c)break b;if(b===A(440))c=1;else if(!(A(440) instanceof H))c=0;else{d=A(440);c=b.jv!==d.jv?0:1;}if(c)break b;if(b===A(441))c=1;else if(!(A(441) instanceof H))c=0;else{d=A(441);c=b.jv!==d.jv?0:1;}if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof H))c=0;else{d=A(442);c=b.jv!==d.jv?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let S8=E(0);
let PE=E();
let AQh=(a,b,c)=>{a.gH(W(b),Dg(c,"handleEvent"));},
AJN=(a,b)=>{return !!a.gI(b);},
ZH=(a,b,c)=>{a.gJ(W(b),Dg(c,"handleEvent"));},
AGn=(a,b,c,d)=>{a.gK(W(b),Dg(c,"handleEvent"),d?1:0);},
ANE=(a,b,c,d)=>{a.gL(W(b),Dg(c,"handleEvent"),d?1:0);};
function LT(){let a=this;C.call(a);a.sI=null;a.tY=null;a.qV=null;a.t5=0;a.rD=null;}
let AJZ=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.sI;if(e!==E5&&e!==EZ){if(e===Fd){b=window.document.createElement("img");d=Bt(W(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new HW;d.mO=c;d.tg=e;d.tq=b;}else if(e===Fm)d=W(c.result);}else{e=c.result;b=new Int8Array(e);d=new HW;d.mO=b;d.tg=e;}if(d!==null){GF(a.rD.uB,a.sI,a.tY,d);BL(a.qV,a.tY);if(a.qV.jA==a.t5){b=a.rD.un;d=new NJ;d.s4=a;BL(b.qv,d);}}},
AH2=(a,b)=>{AJZ(a,b);};
function E6(){Bx.call(this);this.qr=null;}
let Fd=null,EZ=null,Fm=null,E5=null,Jg=null,MZ=null;
let AJ8=()=>{let b,c,d,e,f;b=new E6;b.jJ=A(443);b.jE=0;b.qr=A(416);Fd=b;c=new E6;c.jJ=A(444);c.jE=1;c.qr=A(418);EZ=c;d=new E6;d.jJ=A(445);d.jE=2;d.qr=A(446);Fm=d;e=new E6;e.jJ=A(447);e.jE=3;e.qr=A(417);E5=e;f=new E6;f.jJ=A(448);f.jE=4;f.qr=A(226);Jg=f;MZ=P(E6,[b,c,d,e,f]);};
let AFq=E();
let KA=null,Oq=null;
let AOd=b=>{let c,d,e,f,g,h,i,j,k,l;c=new J;c.jw=G(16);d=AML();e=0;f=Oq.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.ju;if(i>0){Bd(c,i,i+1|0);c.jw.data[i]=32;}j=d.data[e];F(c,c.ju,j);}e=e+1|0;h=h+1|0;}j=new H;d=c.jw;k=d.data;e=c.ju;l=k.length;if(e>=0&&e<=(l-0|0)){j.jv=K(d.data,0,e);return j;}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
AML=()=>{if(KA===null)KA=P(H,[A(449),A(450),A(451),A(452),A(453),A(454),A(455),A(456),A(457),A(458),A(459),A(460)]);return KA;},
Xp=()=>{Oq=H6([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let Q2=E(0);
function Hd(){let a=this;L6.call(a);a.md=null;a.xF=null;a.qo=0;a.ri=0;a.nY=null;a.tC=null;}
let Yk=a=>{let b,c,d,e,f,g,h;b=new J;b.jw=G(16);c=AOd(Kz(a.qo,a.ri));F(b,b.ju,c);d=b.ju;if(d>0){Bd(b,d,d+1|0);b.jw.data[d]=32;}c=a.md;if(c.jQ===null)c.jQ=W(c.jO.$meta.name);c=c.jQ;F(b,b.ju,c);d=b.ju;Bd(b,d,d+1|0);b.jw.data[d]=40;e=a.nY.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.ju;Bd(b,h,h+1|0);b.jw.data[h]=44;}c=g[f];if(c.jQ===null)c.jQ=W(c.jO.$meta.name);c=c.jQ;F(b,b.ju,c);f=f+1|0;}d=b.ju;Bd(b,d,d+1|0);g=b.jw;e=g.data;e[d]=41;c=new H;d=b.ju;h=e.length;if(d>=0&&d<=(h-0|0)){c.jv=K(g.data,
0,d);return c;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
ANG=(a,b)=>{let c,d,e,f,g;if(a.qo&1){c=new LR;c.jx=1;c.jy=1;B(c);}if(a.tC===null){c=new Jx;c.jx=1;c.jy=1;B(c);}d=b.data;e=d.length;if(e!=a.nY.data.length){c=new Bk;c.jx=1;c.jy=1;B(c);}f=0;while(f<e){if(!(a.nY.data[f].jO.$meta.primitive?1:0)&&d[f]!==null){c=a.nY.data[f];g=d[f];c=c.jO;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&LQ(g.constructor,c)?1:0)){c=new Bk;c.jx=1;c.jy=1;B(c);}}if((a.nY.data[f].jO.$meta.primitive?1:0)&&d[f]===null){c=new Bk;c.jx=1;c.jy=1;B(c);}f=f+1|0;}c=b.data;g=new(a.md.jO);a.tC.call(g,
c);return g;};
let T=E(I);
function Uw(){let a=this;Bh.call(a);a.uq=null;a.yE=null;}
let ACt=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.lJ^Cx(a.uq,c):0;};
function Uv(){let a=this;Bh.call(a);a.v$=null;a.wm=null;a.ym=null;}
let WM=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.lJ^Cx(a.v$,c):0;return a.wm.ga(b)&&!d?1:0;};
function OG(){let a=this;Bh.call(a);a.q$=null;a.wV=null;}
let AHd=(a,b)=>{return a.j7^Cx(a.q$,b);},
AD8=a=>{let b,c,d,e,f,g,h,i,j,k;b=new J;b.jw=G(16);c=HN(a.q$,0);while(c>=0){d=(EL(c)).data;e=0;f=d.length;g=b.ju;Bd(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jw.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.ju;Bd(b,g,g+1|0);b.jw.data[g]=124;c=HN(a.q$,c+1|0);}e=b.ju;if(e>0)UG(b,e-1|0);k=new H;d=b.jw;h=d.data;e=b.ju;g=h.length;if(e>=0&&e<=(g-0|0)){k.jv=K(d.data,0,e);return k;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);};
function ON(){let a=this;Bh.call(a);a.vb=null;a.x9=null;}
let AMt=(a,b)=>{return a.vb.ga(b);};
function OK(){let a=this;Bh.call(a);a.r7=0;a.uA=null;a.sO=null;}
let ANe=(a,b)=>{return !(a.r7^Cx(a.sO.jS,b))&&!(a.r7^a.sO.m4^a.uA.ga(b))?0:1;};
function OL(){let a=this;Bh.call(a);a.sa=0;a.we=null;a.tn=null;}
let AHS=(a,b)=>{return !(a.sa^Cx(a.tn.jS,b))&&!(a.sa^a.tn.m4^a.we.ga(b))?1:0;};
function OR(){let a=this;Bh.call(a);a.ww=0;a.wh=null;a.wb=null;a.xe=null;}
let ABQ=(a,b)=>{return a.ww^(!a.wh.ga(b)&&!a.wb.ga(b)?0:1);};
function OS(){let a=this;Bh.call(a);a.ve=0;a.u_=null;a.u2=null;a.yZ=null;}
let VL=(a,b)=>{return a.ve^(!a.u_.ga(b)&&!a.u2.ga(b)?0:1)?0:1;};
function OP(){let a=this;Bh.call(a);a.u0=null;a.y3=null;}
let AEh=(a,b)=>{let c,d;c=a.u0;d=c.kw;return d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b);};
function OQ(){let a=this;Bh.call(a);a.wk=null;a.xw=null;}
let AHU=(a,b)=>{let c,d;c=a.wk;d=c.kw;return (d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b))?0:1;};
function OT(){let a=this;Bh.call(a);a.vn=null;a.va=0;a.v1=null;}
let AO_=(a,b)=>{let c,d,e;c=a.vn;d=c.kw;e=d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b);return !e&&!(a.va^Cx(a.v1.jS,b))?0:1;};
function OU(){let a=this;Bh.call(a);a.vF=null;a.vN=0;a.vx=null;}
let AAT=(a,b)=>{let c,d,e;c=a.vF;d=c.kw;e=d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b);return !e&&!(a.vN^Cx(a.vx.jS,b))?1:0;};
function OF(){let a=this;Bh.call(a);a.v0=0;a.wd=null;a.wp=null;a.w0=null;}
let ASg=(a,b)=>{let c,d;a:{if(!(a.v0^a.wd.ga(b))){c=a.wp;d=c.kw;if(!(d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b))){b=0;break a;}}b=1;}return b;};
function O$(){let a=this;Bh.call(a);a.wn=0;a.ud=null;a.ui=null;a.xs=null;}
let AEp=(a,b)=>{let c,d;a:{if(!(a.wn^a.ud.ga(b))){c=a.ui;d=c.kw;if(!(d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b))){b=1;break a;}}b=0;}return b;};
function OD(){let a=this;Bh.call(a);a.uP=null;a.xz=null;}
let AAQ=(a,b)=>{let c,d;c=a.uP;d=c.kw;return d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b);};
function OE(){let a=this;Bh.call(a);a.uQ=null;a.yW=null;}
let ADj=(a,b)=>{let c,d;c=a.uQ;d=c.kw;return (d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b))?0:1;};
function OJ(){let a=this;Bh.call(a);a.wv=null;a.vC=0;a.wK=null;}
let AF4=(a,b)=>{let c,d,e;c=a.wv;d=c.kw;e=d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b);return e&&a.vC^Cx(a.wK.jS,b)?1:0;};
function OC(){let a=this;Bh.call(a);a.vT=null;a.vf=0;a.vB=null;}
let AOK=(a,b)=>{let c,d,e;c=a.vT;d=c.kw;e=d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b);return e&&a.vf^Cx(a.vB.jS,b)?0:1;};
function OH(){let a=this;Bh.call(a);a.v2=0;a.up=null;a.vd=null;a.xc=null;}
let Y7=(a,b)=>{let c,d;a:{if(a.v2^a.up.ga(b)){c=a.vd;d=c.kw;if(d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b)){b=1;break a;}}b=0;}return b;};
function OI(){let a=this;Bh.call(a);a.vP=0;a.t_=null;a.vZ=null;a.xE=null;}
let ALj=(a,b)=>{let c,d;a:{if(a.vP^a.t_.ga(b)){c=a.vZ;d=c.kw;if(d!==null?c.j7^d.ga(b):c.j7^Cx(c.jS,b)){b=0;break a;}}b=1;}return b;};
function H$(){let a=this;C.call(a);a.nP=null;a.tm=null;a.lu=null;a.mb=0;}
function Gc(){let a=this;C.call(a);a.y0=null;a.m9=B6;a.nW=B6;a.mj=null;a.uJ=null;a.mW=null;a.mi=0;a.m$=null;}
let Iy=null,BP=null,CE=0,D5=0,Q4=null;
let AHc=a=>{let b,c,$$je;a:{b:{c:{d:{try{D5=D5+1|0;ALz(a);a.cS();}catch($$e){$$je=Bs($$e);if($$je instanceof DA){b=$$je;break d;}else{b=$$je;break c;}}b=a.mj;Ft(b);e:{try{MV(b);Ds(b);break e;}catch($$e){$$je=Bs($$e);c=$$je;}Ds(b);B(c);}a.mi=0;D5=D5-1|0;b=Iy;if(BP!==b)BP=b;BP.nW=D2();break a;}try{XX(AEJ(a),a,b);break b;}catch($$e){$$je=Bs($$e);b=$$je;}}c=a.mj;Ft(c);f:{try{MV(c);Ds(c);break f;}catch($$e){$$je=Bs($$e);b=$$je;}Ds(c);B(b);}a.mi=0;D5=D5-1|0;c=Iy;if(BP!==c)BP=c;BP.nW=D2();B(b);}b=a.mj;Ft(b);g:{try
{MV(b);Ds(b);break g;}catch($$e){$$je=Bs($$e);c=$$je;}Ds(b);B(c);}a.mi=0;D5=D5-1|0;b=Iy;if(BP!==b)BP=b;BP.nW=D2();}},
ALz=b=>{if(BP!==b)BP=b;BP.nW=D2();},
ASi=()=>{return BP;},
Kw=b=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO3(b);if(E$()){break _;}return;default:E3();}}C2().s(b,$p);},
ABN=(b,c)=>{let d,e;d=BP;e=new Op;e.wL=d;e.wa=c;e.yF=Mr(e,ATe(b,R(2147483647))?2147483647:Be(b));d.uJ=e;},
AEJ=a=>{let b;b=a.y0;if(b!==null)return b;return Q4;},
YE=()=>{let b,c,d;b=new Gc;c=null;b.mj=new C;b.mi=1;b.mW=A(461);b.m$=c;d=CE;CE=d+1|0;b.m9=R(d);Iy=b;BP=b;CE=1;D5=1;Q4=new Rq;},
AO3=b=>{let thread=C2();let javaThread=Wc();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Jw(javaThread);thread.resume();};callback.gU=e=>{thread.attribute=AOo(e);Jw(javaThread);thread.resume();};callback=Ry(callback);thread.suspend(()=>{try {ABN(b,callback);;}catch(M_){callback.gU(M_);}});return null;};
let BX=E(Bz);
let Ii=E(Bz);
let AMy=E();
let Rr=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let ADn=E();
let W6=E();
let FN=E(0);
function Vm(){C.call(this);this.u3=null;}
let APb=a=>{ANy(a.u3);};
let Ub=E(CB);
let Uc=E(CB);
let Ug=E(CB);
let Uh=E(CB);
let Ue=E(CB);
let Uf=E(CB);
let T_=E(CB);
let Ua=E(CB);
let T9=E(CB);
let NU=E(0);
let Rq=E();
let XX=(a,b,c)=>{let d;if(C7===null){b=new Fj;d=new Ct;d.k3=BE(32);BA(b);b.lr=d;d=new J;DJ(d,16);b.k6=d;b.k5=G(32);b.k9=0;b.k$=Cl;C7=b;}Jq(c,C7);};
let Qc=E();
let Q1=E(0);
function QH(){C.call(this);this.oO=null;}
let Ry=b=>{let c;c=new QH;c.oO=b;return c;},
AGu=(a,b)=>{a.oO.e(b);},
AQY=(a,b)=>{a.oO.gU(b);};
function R4(){let a=this;C.call(a);a.uG=null;a.uH=null;a.uE=0;a.uF=null;}
let NQ=E(F2);
let AC8=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.j_;a:{while(true){if(b>f){b=e;break a;}g=a.kB;h=d.k8.data;i=g*2|0;j=h[i];h[i]=b;e=a.mg.fD(b,c,d);if(e>=0)break;i=a.kB;d.k8.data[i*2|0]=j;b=b+1|0;}}return b;},
AR2=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.kB;h=e.k8.data;i=g*2|0;j=h[i];h[i]=c;f=a.mg.fD(c,d,e);if(f>=0)break;i=a.kB;e.k8.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
AAs=a=>{return null;};
function R5(){Bh.call(this);this.x3=null;}
let APx=(a,b)=>{return CG(b)!=2?0:1;};
function Nu(){Bh.call(this);this.x$=null;}
let YD=(a,b)=>{return CG(b)!=1?0:1;};
function Rp(){Bh.call(this);this.xK=null;}
let XY=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CG(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function Ro(){Bh.call(this);this.xA=null;}
let AC1=(a,b)=>{return 0;};
function UP(){Bh.call(this);this.yy=null;}
let AFI=(a,b)=>{return !CG(b)?0:1;};
function O3(){Bh.call(this);this.yf=null;}
let APA=(a,b)=>{return CG(b)!=9?0:1;};
function On(){Bh.call(this);this.yU=null;}
let AKq=(a,b)=>{return G5(b);};
function Qp(){Bh.call(this);this.x4=null;}
let AME=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Nq(){Bh.call(this);this.wN=null;}
let ARu=(a,b)=>{a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=G5(b);}return b;};
function Nt(){Bh.call(this);this.yh=null;}
let ABy=(a,b)=>{a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=G5(b);}return b;};
function Og(){Bh.call(this);this.yx=null;}
let AP5=(a,b)=>{a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function Pl(){Bh.call(this);this.yL=null;}
let AIk=(a,b)=>{a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Pq(){Bh.call(this);this.xL=null;}
let ALV=(a,b)=>{a:{switch(CG(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function Sy(){Bh.call(this);this.yj=null;}
let APa=(a,b)=>{return CG(b)!=3?0:1;};
function RO(){Bh.call(this);this.wS=null;}
let AQV=(a,b)=>{a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=G5(b);}return b;};
function NG(){Bh.call(this);this.y4=null;}
let ABd=(a,b)=>{a:{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=G5(b);}return b;};
function Jk(){Bh.call(this);this.rw=0;}
let AKw=(a,b)=>{return a.j7^(a.rw!=CG(b&65535)?0:1);};
let Rf=E(Jk);
let ANV=(a,b)=>{return a.j7^(!(a.rw>>CG(b&65535)&1)?0:1);};
function X0(){let a=this;C.call(a);a.y$=0;a.y_=0;a.y8=0;a.y9=0;a.y7=null;}
function GG(){let a=this;Gc.call(a);a.oi=0;a.mZ=null;a.m_=null;a.m2=null;}
let AKJ=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Mf;c.nj=a;c.pk=b;c=B0(c,"handleEvent");b.onreadystatechange=c;c=a.m2;d=a.m_;e=new GH;e.tH=c;e.qX=d;c=B0(e,"handleEvent");b.onprogress=c;d=a.mZ;f=a.oi;b.open("GET",Bt(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let NH=E();
let S9=null;
let LP=()=>{LP=BG(NH);AM$();};
let AM$=()=>{let b,c;b=U((T3.p()).data.length);c=b.data;S9=b;c[MO.jE]=1;c[IG.jE]=2;};
let Uq=E();
let AHo=(a,b,c)=>{a.eL(W(b),Dg(c,"handleEvent"));},
AIn=(a,b,c)=>{a.eM(W(b),Dg(c,"handleEvent"));},
Wo=(a,b,c,d)=>{a.eN(W(b),Dg(c,"handleEvent"),d?1:0);},
WC=(a,b)=>{return !!a.eO(b);},
AEk=(a,b,c,d)=>{a.eQ(W(b),Dg(c,"handleEvent"),d?1:0);};
let GJ=E(0);
function JH(){let a=this;C.call(a);a.ot=null;a.sV=0;a.rl=null;a.tx=null;a.px=null;}
let AQ1=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ot.readyState==4){if(a.ot.status==200){if(a.px.l7){if(BS===null){b=new CS;c=new Ct;c.k3=BE(32);b.lr=c;c=new J;BA(c);c.jw=G(16);b.k6=c;b.k5=G(32);b.k9=0;b.k$=Cl;BS=b;}b=a.rl;c=new J;c.jw=G(16);F(c,c.ju,A(462));d=c.ju;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g
>=0&&g<=(h-0|0)){b.jv=K(e.data,0,g);BT(Bt(b));BT("\n");}else{b=new I;b.jx=1;b.jy=1;Bo(b);B(b);}}c=a.ot.response;EJ();i=FP.mK.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);W(a.ot.responseText);}else if(a.ot.status!=404&&a.ot.status!=403){try{k=R(100);$p=1;continue _;}catch($$e){$$je=Bs($$e);if($$je instanceof DA){}else{throw $$e;}}M8(a.px,a.sV,a.rl,a.tx);}b=a.px;b.kt=b.kt-1|0;}return;case 1:a:{try{Kw(k);if(E$()){break _;}break a;}catch($$e){$$je=Bs($$e);if($$je instanceof DA)
{}else{throw $$e;}}}M8(a.px,a.sV,a.rl,a.tx);b=a.px;b.kt=b.kt-1|0;return;default:E3();}}C2().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AFR=(a,b)=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQ1(a,b);if(E$()){break _;}return;default:E3();}}C2().s(a,b,$p);};
let AIT=E();
let Cw=0;
function Cp(){let a=this;C.call(a);a.kf=null;a.lc=0;a.kV=0;a.kb=0;}
let AI8=(a,b,c)=>{a.kb=1;a.kf=b;a.lc=c;},
Lq=(a,b)=>{let c=new Cp();AI8(c,a,b);return c;},
G_=a=>{let b;if(a.kb)return a.kV>=a.kf.jA?0:1;b=new Q;b.jx=1;b.jy=1;b.jz=A(17);B(b);},
Ck=a=>{let b,c,d,e,f,g,h;b=a.kV;c=a.kf;if(b<c.jA){if(a.kb){d=c.jM.data;a.kV=b+1|0;return d[b];}c=new Q;c.jx=1;c.jy=1;c.jz=A(17);B(c);}c=new Vw;e=new J;e.jw=G(16);L(e,e.ju,b,10);f=new H;d=e.jw;g=d.data;b=e.ju;h=g.length;if(b>=0&&b<=(h-0|0)){f.jv=K(d.data,0,b);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;c.jx=1;c.jy=1;B(c);};
function CU(){let a=this;C.call(a);a.ln=null;a.lp=0;a.td=null;a.te=null;}
let ALw=(a,b)=>{a.ln=b;a.lp=1;},
M7=a=>{let b=new CU();ALw(b,a);return b;},
AR4=(a,b,c)=>{a.ln=b;a.lp=c;},
K4=(a,b)=>{let c=new CU();AR4(c,a,b);return c;},
CD=a=>{let b,c,d;if(Cw){b=new Cp;c=a.ln;d=a.lp;b.kb=1;b.kf=c;b.lc=d;return b;}if(a.td===null){b=new Cp;c=a.ln;d=a.lp;b.kb=1;b.kf=c;b.lc=d;a.td=b;b=new Cp;b.kb=1;b.kf=c;b.lc=d;a.te=b;}b=a.td;if(b.kb){c=a.te;c.kV=0;c.kb=1;b.kb=0;return c;}b.kV=0;b.kb=1;a.te.kb=0;return b;};
function HW(){let a=this;C.call(a);a.tg=null;a.mO=null;a.tq=null;}
let AMu=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.mO.length;c=new J;c.jw=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new H;f=c.jw;g=f.data;b=c.ju;h=g.length;if(b>=0&&b<=(h-0|0)){e.jv=K(f.data,0,b);return e;}e=new I;e.jx=1;e.jy=1;Bo(e);B(e);}i=b-d|0;if(i>=3){j=(((a.mO[d]&255)<<16)+((a.mO[d+1|0]&255)<<8)|0)+(a.mO[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(463).jv.length)break f;h=A(463).jv.charCodeAt(h);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(463).jv.length)break g;h
=A(463).jv.charCodeAt(h);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(463).jv.length)break h;h=A(463).jv.charCodeAt(h);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;i=j&63;if(i<0)break;if(i>=A(463).jv.length)break;h=A(463).jv.charCodeAt(i);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;}else if(i<2){j=(a.mO[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(463).jv.length)break d;h=A(463).jv.charCodeAt(h);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(463).jv.length)break e;h=A(463).jv.charCodeAt(h);i
=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;F(c,c.ju,A(464));}else{k=((a.mO[d]&255)<<16)+((a.mO[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(463).jv.length)break a;h=A(463).jv.charCodeAt(h);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(463).jv.length)break b;h=A(463).jv.charCodeAt(h);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(463).jv.length)break c;h=A(463).jv.charCodeAt(h);i=c.ju;Bd(c,i,i+1|0);c.jw.data[i]=h;F(c,c.ju,A(465));}d=d+3|0;}e=new T;e.jx=1;e.jy=1;B(e);}e
=new T;e.jx=1;e.jy=1;B(e);}e=new T;e.jx=1;e.jy=1;B(e);}e=new T;e.jx=1;e.jy=1;B(e);}e=new T;e.jx=1;e.jy=1;B(e);}e=new T;e.jx=1;e.jy=1;B(e);}e=new T;e.jx=1;e.jy=1;B(e);}e=new T;e.jx=1;e.jy=1;B(e);}e=new T;e.jx=1;e.jy=1;B(e);};
function NJ(){C.call(this);this.s4=null;}
let Vo=E(0);
let Sf=E(0);
let S5=E(0);
let G7=E();
let Ez=a=>{return;};
function H0(){G7.call(this);this.lr=null;}
let FG=(a,b)=>{a.lr=b;},
AVx=a=>{let b=new H0();FG(b,a);return b;};
function Ih(){let a=this;H0.call(a);a.k9=0;a.k6=null;a.k5=null;a.k$=null;}
let UK=(a,b,c)=>{a.lr=b;b=new J;b.jw=G(16);a.k6=b;a.k5=G(32);a.k9=c;a.k$=Cl;},
AUr=(a,b)=>{let c=new Ih();UK(c,a,b);return c;};
let G1=E(Ih);
let CS=E(G1);
let AF6=(a,b)=>{BT(Bt(b));};
function GH(){let a=this;C.call(a);a.qX=null;a.tH=null;}
let AJS=(a,b)=>{a.qX.gX(b.loaded);};
let YQ=E();
function Ct(){G7.call(this);this.k3=null;}
let Yy=(a,b)=>{a.k3=BE(b);},
AOD=a=>{let b=new Ct();Yy(b,a);return b;};
function JN(){let a=this;C.call(a);a.t7=null;a.uT=null;}
let IZ=b=>{let c,d,e;if(b.jv.length?0:1){c=new I2;c.jx=1;c.jy=1;c.sn=b;B(c);}if(0>=b.jv.length){b=new T;b.jx=1;b.jy=1;B(b);}if(!Tx(b.jv.charCodeAt(0))){c=new I2;c.jx=1;c.jy=1;c.sn=b;B(c);}d=1;a:{while(d<b.jv.length){if(d<0)break a;if(d>=b.jv.length)break a;b:{e=b.jv.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(Tx(e))break b;else{c=new I2;c.jx=1;c.jy=1;c.sn=b;B(c);}}}d=d+1|0;}return;}b=new T;b.jx=1;b.jy=1;B(b);},
Tx=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let M6=E(JN);
let Cl=null;
let ATm=()=>{let b,c,d,e,f;b=new M6;c=S(H,0);d=c.data;IZ(A(3));e=d.length;f=0;while(f<e){IZ(d[f]);f=f+1|0;}b.t7=A(3);b.uT=c.p();Cl=b;};
function I2(){Bk.call(this);this.sn=null;}
let Ko=E(0);
function HA(){let a=this;C.call(a);a.tM=null;a.o6=null;a.mf=0;a.oP=null;a.tW=0.0;a.sg=0.0;a.lC=0;a.n8=null;a.rC=null;a.rK=null;a.tt=0;a.vX=0;a.uK=0;a.uR=0;a.t9=0;a.oS=null;a.pN=null;a.w3=0;a.qj=null;a.rN=0.0;a.q9=0;a.sN=0;a.tI=0;}
let Vi=null;
let Hy=()=>{Hy=BG(HA);AIL();};
let Kh=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;Hy();a.mf=0;a.oP=null;a.tW=0.0;a.sg=0.0;a.lC=0;a.n8=CX();a.rC=CX();a.rK=CX();a.tt=0;a.vX=770;a.uK=771;a.uR=770;a.t9=771;a.pN=null;d=new BD;d.kj=1.0;d.ki=1.0;d.kh=1.0;d.kg=1.0;CN(d);a.qj=d;a.rN=Sw;a.q9=0;a.sN=0;a.tI=0;if(b>8191){c=new Bk;d=new J;d.jw=G(16);F(d,d.ju,A(466));L(d,d.ju,b,10);e=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);c.jx=1;c.jy=1;c.jz=e;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}j=Ed===null?Vi:K_;k=new II;l=b*4|0;m=b*6|0;f
=S(DE,3);g=f.data;d=new DE;d.l0=1;d.lI=2;d.lY=5126;d.l9=0;d.l5=A(467);d.nw=0;d.oA=DQ(1);g[0]=d;d=new DE;d.l0=4;d.lI=4;d.lY=5121;d.l9=1;d.l5=A(468);d.nw=0;d.oA=DQ(4);g[1]=d;d=new DE;d.l0=16;d.lI=2;d.lY=5126;d.l9=0;d.l5=A(469);d.nw=0;d.oA=DQ(16);g[2]=d;UY(k,j,0,l,m,Qn(f));a.tM=k;d=a.rC;n=B5.ky.width;o=B5.ky.height;LK(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.o6=B_(b*20|0);f=E8(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.tM.lx.g2(f,0,g.length);if(c!==null)a.oS=c;else{e=P4(A(470),A(471));if(!e.m8){c=new Bk;d=new J;d.jw=G(16);F(d,d.ju,A(472));if(!e.m8)j=e.mM;else{j=Bi.g4(e.l6);e.mM=j;}F(d,d.ju,j);e=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);c.jx=1;c.jy=1;c.jz=e;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}a.oS=e;a.w3=1;}},
ATQ=(a,b)=>{let c=new HA();Kh(c,a,b);return c;},
Qr=a=>{let b,c;if(a.lC){b=new BX;b.jx=1;b.jy=1;b.jz=A(473);B(b);}a.q9=0;BU.g5(0);c=a.pN;if(c!==null)c.g6();else{c=a.oS;b=Bi;if(c.kl){Cz(c,c.k_,c.lb);c.kl=0;}b.g8(c.l6);}FU(a);a.lC=1;},
T5=a=>{let b,c;if(!a.lC){b=new BX;b.jx=1;b.jy=1;b.jz=A(474);B(b);}if(a.mf>0)DO(a);a.oP=null;a.lC=0;c=BU;c.g5(1);if(a.tt?0:1)c.bb(3042);},
AF9=(a,b,c,d,e)=>{let f,g;if(!a.lC){b=new BX;b.jx=1;b.jy=1;b.jz=A(475);B(b);}f=a.o6.data.length;if(b!==a.oP){DO(a);a.oP=b;b=b.mI;a.tW=1.0/b.mt;a.sg=1.0/b.mr;g=f;}else{g=f-a.mf|0;if(!g){DO(a);g=f;}}if(g>=e)g=e;Du(c,d,a.o6,a.mf,g);a.mf=a.mf+g|0;e=e-g|0;while(e>0){d=d+g|0;DO(a);g=f>=e?e:f;Du(c,d,a.o6,0,g);a.mf=a.mf+g|0;e=e-g|0;}},
PB=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.lC){b=new BX;b.jx=1;b.jy=1;b.jz=A(475);B(b);}l=a.o6;m=b.oF;if(m!==a.oP){DO(a);a.oP=m;m=m.mI;a.tW=1.0/m.mt;a.sg=1.0/m.mr;}else{n=l.data;if(a.mf==n.length)DO(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{Gf();n=FM.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.tO;bb=b.tL;bc=b.tN;bd=b.tP;be=a.rN;bf=a.mf;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.mf=bf+20|0;},
DO=a=>{let b,c,d,e,f,g;b=a.mf;if(!b)return;a.q9=a.q9+1|0;a.sN=a.sN+1|0;c=b/20|0;if(c>a.tI)a.tI=c;b=c*6|0;d=a.oP;BU.co(d.mk,d.nR);d=a.tM;e=a.o6;f=a.mf;d.lA.g9(e,0,f);g=d.lx.g$(1);Cv(g,0);CC(g,b);if(a.tt)BU.bb(3042);else{BU.W(3042);c=a.vX;if(c!=(-1))BU.g_(c,a.uK,a.uR,a.t9);}g=a.pN;if(g===null)g=a.oS;R2(d,g,4,0,b,d.qY);a.mf=0;},
FU=a=>{let b,c,d,e;R6(CZ(a.rK,a.rC.kv),a.n8);b=a.pN;if(b!==null){b.hc(A(476),a.rK);a.pN.hd(A(477),0);}else{b=a.oS;c=a.rK;HO();d=IF(b,A(476),Hr);e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}PV(e,d,1,0,c.kv,0);b=a.oS;c=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}c.hg(IF(b,A(477),Hr),0);}},
AIL=()=>{Vi=KU;};
let QV=E(0);
function Kd(){C.call(this);this.x8=null;}
function SM(){let a=this;Kd.call(a);a.mH=null;a.yQ=null;a.t6=null;a.vt=null;a.yJ=null;a.x6=null;a.x7=null;}
let AEG=(a,b)=>{let c,d,e,f,g,h,i,j;a.x8=b;c=new Mu;b=new RZ;d=new PL;ALP(d);d.ur=1.0;e=new Bg;CH();d.vV=e;d.tF=0.0;b.sE=new Bg;b.qT=1.0;b.pO=d;d=new HA;Hy();Kh(d,1000,null);RY(c,b,d);c.w6=1;a.mH=c;b=new SW;EI(b);c=new Fu;e=Fg;f=Gj(e.oG,A(478),EX);d=null;g=F6(f,Fq(f),d,0);d=BU;e=d.jC.createTexture();h=d.lV;d.lV=h+1|0;B2(d.mD,h,B4(e));d=Fi;c.ne=d;c.nF=d;d=Fs;c.na=d;c.nf=d;c.ob=1.0;c.mk=3553;c.nR=h;Gq(c,g);d=CV;e=F5(Dt,d);e=e===null?null:e.lW;if(e===null)e=FO(1,16);a:{BL(e,c);EW(Dt,d,e);b.yn=c;d=new Jd;d.oF=c;TY(d,
0,0,1,1);b.vl=d;c=new MP;Kk();b.xH=c;a.yQ=b;c=a.mH.lG;d=b.kW;if(d!==null){if(d!==c){i=EH(d.jU,b,1);if(i!=(-1)){e=d.jU;Dc(e);e=DC(e,i);d=d.kP;if(d!==null)FV(d,e);e.kW=null;e.x(null);}}else break a;}BL(c.jU,b);b.kW=c;b.kP=c.kP;}b=new Mj;EI(b);c=new Fu;e=Fg;f=Gj(e.oG,A(479),EX);d=null;g=F6(f,Fq(f),d,0);d=BU;e=d.jC.createTexture();h=d.lV;d.lV=h+1|0;B2(d.mD,h,B4(e));d=Fi;c.ne=d;c.nF=d;d=Fs;c.na=d;c.nf=d;c.ob=1.0;c.mk=3553;c.nR=h;Gq(c,g);d=CV;e=F5(Dt,d);e=e===null?null:e.lW;if(e===null)e=FO(1,16);BL(e,c);EW(Dt,d,
e);b.t4=c;d=new Fn;e=c.mI;Gm(d,c,0,0,e.mt,e.mr);b.t3=d;if(!(b.lO===41.0&&b.lM===59.0)){b.lO=41.0;b.lM=59.0;}a.t6=b;if(!(b.kd===200.0&&b.kc===101.0)){b.kd=200.0;b.kc=101.0;}b=new Mj;EI(b);c=new Fu;e=Fg;f=Gj(e.oG,A(479),EX);d=null;g=F6(f,Fq(f),d,0);d=BU;e=d.jC.createTexture();h=d.lV;d.lV=h+1|0;B2(d.mD,h,B4(e));d=Fi;c.ne=d;c.nF=d;d=Fs;c.na=d;c.nf=d;c.ob=1.0;c.mk=3553;c.nR=h;Gq(c,g);d=CV;e=F5(Dt,d);e=e===null?null:e.lW;if(e===null)e=FO(1,16);BL(e,c);EW(Dt,d,e);b.t4=c;d=new Fn;e=c.mI;Gm(d,c,0,0,e.mt,e.mr);b.t3=d;if
(!(b.lO===41.0&&b.lM===59.0)){b.lO=41.0;b.lM=59.0;}a.vt=b;if(!(b.kd===200.0&&b.kc===396.0)){b.kd=200.0;b.kc=396.0;}b=new Ig;EI(b);c=new Fu;e=Fg;f=Gj(e.oG,A(480),EX);d=null;g=F6(f,Fq(f),d,0);d=BU;e=d.jC.createTexture();h=d.lV;d.lV=h+1|0;B2(d.mD,h,B4(e));d=Fi;c.ne=d;c.nF=d;d=Fs;c.na=d;c.nf=d;c.ob=1.0;c.mk=3553;c.nR=h;Gq(c,g);d=CV;e=F5(Dt,d);e=e===null?null:e.lW;if(e===null)e=FO(1,16);BL(e,c);EW(Dt,d,e);b.t0=c;d=new Fn;e=c.mI;Gm(d,c,0,0,e.mt,e.mr);b.rH=d;if(!(b.lO===20.0&&b.lM===20.0)){b.lO=20.0;b.lM=20.0;}a.yJ
=b;if(!(b.kd===150.0&&b.kc===106.0)){b.kd=150.0;b.kc=106.0;}b:{c=a.mH.lG;d=b.kW;if(d!==null){if(d===c)break b;i=EH(d.jU,b,1);if(i!=(-1)){e=d.jU;Dc(e);e=DC(e,i);d=d.kP;if(d!==null)FV(d,e);e.kW=null;e.x(null);}}BL(c.jU,b);b.kW=c;b.kP=c.kP;}b=new Ig;EI(b);c=new Fu;e=Fg;f=Gj(e.oG,A(480),EX);d=null;g=F6(f,Fq(f),d,0);d=BU;e=d.jC.createTexture();h=d.lV;d.lV=h+1|0;B2(d.mD,h,B4(e));d=Fi;c.ne=d;c.nF=d;d=Fs;c.na=d;c.nf=d;c.ob=1.0;c.mk=3553;c.nR=h;Gq(c,g);d=CV;e=F5(Dt,d);e=e===null?null:e.lW;if(e===null)e=FO(1,16);BL(e,
c);EW(Dt,d,e);b.t0=c;d=new Fn;e=c.mI;Gm(d,c,0,0,e.mt,e.mr);b.rH=d;if(!(b.lO===20.0&&b.lM===20.0)){b.lO=20.0;b.lM=20.0;}a.x6=b;if(!(b.kd===125.0&&b.kc===106.0)){b.kd=125.0;b.kc=106.0;}c:{c=a.mH.lG;d=b.kW;if(d!==null){if(d===c)break c;i=EH(d.jU,b,1);if(i!=(-1)){e=d.jU;Dc(e);e=DC(e,i);d=d.kP;if(d!==null)FV(d,e);e.kW=null;e.x(null);}}BL(c.jU,b);b.kW=c;b.kP=c.kP;}b=new Ig;EI(b);c=new Fu;e=Fg;f=Gj(e.oG,A(480),EX);d=null;g=F6(f,Fq(f),d,0);d=BU;e=d.jC.createTexture();h=d.lV;d.lV=h+1|0;B2(d.mD,h,B4(e));d=Fi;c.ne=d;c.nF
=d;d=Fs;c.na=d;c.nf=d;c.ob=1.0;c.mk=3553;c.nR=h;Gq(c,g);d=CV;e=F5(Dt,d);e=e===null?null:e.lW;if(e===null)e=FO(1,16);BL(e,c);EW(Dt,d,e);b.t0=c;d=new Fn;e=c.mI;Gm(d,c,0,0,e.mt,e.mr);b.rH=d;if(!(b.lO===20.0&&b.lM===20.0)){b.lO=20.0;b.lM=20.0;}a.x7=b;if(!(b.kd===100.0&&b.kc===106.0)){b.kd=100.0;b.kc=106.0;}d:{c=a.mH.lG;d=b.kW;if(d!==null){if(d===c)break d;i=EH(d.jU,b,1);if(i!=(-1)){e=d.jU;Dc(e);e=DC(e,i);d=d.kP;if(d!==null)FV(d,e);e.kW=null;e.x(null);}}BL(c.jU,b);b.kW=c;b.kP=c.kP;}e:{b=a.mH;c=a.t6;b=b.lG;d=c.kW;if
(d!==null){if(d===b)break e;j=EH(d.jU,c,1);if(j!=(-1)){e=d.jU;Dc(e);e=DC(e,j);d=d.kP;if(d!==null)FV(d,e);e.kW=null;e.x(null);}}BL(b.jU,c);c.kW=b;c.kP=b.kP;}f:{b=a.mH;c=a.vt;b=b.lG;d=c.kW;if(d!==null){if(d===b)break f;i=EH(d.jU,c,1);if(i!=(-1)){e=d.jU;Dc(e);e=DC(e,i);d=d.kP;if(d!==null)FV(d,e);e.kW=null;e.x(null);}}BL(b.jU,c);c.kW=b;c.kP=b.kP;}},
AIH=a=>{let b=new SM();AEG(b,a);return b;};
let Vw=E(Bz);
let Q=E(Bz);
let ACb=(a,b)=>{a.jx=1;a.jy=1;a.jz=b;},
JX=a=>{let b=new Q();ACb(b,a);return b;};
let ABu=E();
let Kz=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function D1(){C.call(this);this.mX=null;}
let Yd=a=>{AHc(a.mX);};
let ACI=E();
let Vg=E();
let N6=null;
let MJ=()=>{MJ=BG(Vg);AND();};
let AND=()=>{let b,c;b=U((MZ.p()).data.length);c=b.data;N6=b;c[Fm.jE]=1;c[Fd.jE]=2;c[E5.jE]=3;c[EZ.jE]=4;c[Jg.jE]=5;};
let MC=E(Bz);
function M$(){let a=this;C.call(a);a.pO=null;a.rL=0.0;a.rW=0.0;a.pL=0;a.pM=0;a.qn=0;a.qB=0;a.sE=null;}
let MB=(a,b)=>{let c,d,e,f;AHf(a.pL,a.pM,a.qn,a.qB);c=a.pO;d=a.rL;c.sD=d;e=a.rW;c.s_=e;if(b){f=c.s$;d=d/2.0;e=e/2.0;f.jF=d;f.jG=e;f.jH=0.0;}Vx(c,1);},
Jy=(a,b)=>{let c,d,e,f;c=a.sE;d=b.kI;e=b.kH;c.jF=d;c.jG=e;c.jH=1.0;AJY(a.pO,c,a.pL,a.pM,a.qn,a.qB);c=a.sE;f=c.jF;d=c.jG;b.kI=f;b.kH=d;return b;};
function RZ(){M$.call(this);this.qT=0.0;}
function SW(){let a=this;CI.call(a);a.yn=null;a.vl=null;a.pW=null;a.xH=null;}
let ABp=(a,b,c)=>{let d,e,f,g,h;d=new Qs;e=a.vl;f=new Qy;f.wO=20;f.yc=4000;f.xd=1.0;ARt(d,b,e,f);d.y2=B_(8);a.pW=d;c=Fx(QS);d.nT.mP=c;d=a.pW;g=d.p8;h=d.nT.mP;d=d.p1;Jj(d,96.0,115.0,424.0,115.0,26.0,g,h,h);d.mh.hv();d=a.pW;g=d.p8;h=d.nT.mP;d=d.p1;Jj(d,96.0,410.0,424.0,410.0,26.0,g,h,h);d.mh.hv();d=a.pW;g=d.p8;h=d.nT.mP;d=d.p1;Jj(d,109.0,115.0,109.0,410.0,26.0,g,h,h);d.mh.hv();d=a.pW;g=d.p8;h=d.nT.mP;d=d.p1;Jj(d,411.0,115.0,411.0,410.0,26.0,g,h,h);d.mh.hv();T5(b);Qr(b);};
function Mj(){let a=this;CI.call(a);a.t4=null;a.t3=null;}
let WZ=(a,b,c)=>{let d,e,f,g;d=a.r3;c=d.kj;e=d.ki;f=d.kh;g=d.kg;d=b.qj;d.kj=c;d.ki=e;d.kh=f;d.kg=g;CN(d);b.rN=Fx(b.qj);PB(b,a.t3,a.kd,a.kc,a.pA,a.pB,a.lO,a.lM,a.o7,a.o8,a.pY);},
ACK=(a,b)=>{J5(a,b);};
function Ig(){let a=this;CI.call(a);a.t0=null;a.rH=null;}
let ALx=(a,b,c)=>{let d,e,f,g;d=a.r3;c=d.kj;e=d.ki;f=d.kh;g=d.kg;d=b.qj;d.kj=c;d.ki=e;d.kh=f;d.kg=g;CN(d);b.rN=Fx(b.qj);PB(b,a.rH,a.kd,a.kc,a.pA,a.pB,a.lO,a.lM,a.o7,a.o8,a.pY);},
AM3=(a,b)=>{let c,d;c=a.kd;if(c>=100.0&&c<=400.0){d=a.kc;if(d<400.0){b=c+1.0;if(!(c===b&&d===d)){a.kd=b;a.kc=d;}}}c=a.kd;if(c>400.0){d=a.kc;if(d<=400.0){b=d+1.0;if(!(c===c&&d===b)){a.kd=c;a.kc=b;}}}c=a.kd;if(c>=100.0){d=a.kc;if(d>400.0){b=c-1.0;if(!(c===b&&d===d)){a.kd=b;a.kc=d;}}}c=a.kd;if(c<100.0){d=a.kc;if(d>107.0){b=d-1.0;if(!(c===c&&d===b)){a.kd=c;a.kc=b;}}}c=a.kd;if(c<100.0){d=a.kc;if(d<=107.0){b=c+1.0;if(!(c===b&&d===d)){a.kd=b;a.kc=d;}}}};
let Fj=E(G1);
let ADO=(a,b)=>{Dk(Bt(b));};
let ABI=E(D$);
let VE=null;
let AS3=()=>{VE=V(ACg);};
let AKS=E();
let Nn=null,PF=null,Qm=null;
let AFM=()=>{Nn=ZS([R(1),R(10),R(100),R(10000),R(100000000),D(1874919424, 2328306)]);PF=new LY;Qm=new TH;};
let ALJ=E();
let Kf=B6,WR=null,Hj=null,HU=null;
let AFA=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AVI(b):D(0, 2146959360);c.uj=DK(CQ(d,D(0, 2147483648)),B6)?0:1;e=CQ(d,D(4294967295, 1048575));f=Be(ATW(d,52))&2047;if(DK(e,B6)&&!f){c.s8=B6;c.sp=0;return;}if(f)e=ACr(e,D(0, 1048576));else{e=Fe(e,1);while(DK(CQ(e,D(0, 1048576)),B6)){e=Fe(e,1);f=f+(-1)|0;}}g=HU;h=AMo(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=HU.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Iq(e,Hj.data[i],j);if(AB6(k,Kf)){while(EP(k,Kf)<=0){h=h+(-1)|0;k=CR(Y(k,R(10)),R(9));}g=HU.data;i=
h+1|0;j=12+(f-g[i]|0)|0;k=Iq(e,Hj.data[i],j);}e=Fe(e,1);d=CR(e,R(1));g=Hj.data;i=h+1|0;l=g[i];f=j-1|0;m=Iq(d,l,f);l=Iq(AFh(e,R(1)),Hj.data[i],f);n=R(1);while(true){o=Y(n,R(10));if(EP(Es(k,o),Es(l,o))<=0)break;n=o;}p=R(1);while(true){q=Y(p,R(10));if(EP(Es(k,q),Es(m,q))>=0)break;p=q;}i=EP(n,p);e=i>0?Y(Es(k,n),n):i<0?CR(Y(Es(k,p),p),p):Y(Es(CR(k,Mb(p,R(2))),p),p);if(EP(e,D(2808348672, 232830643))>=0)while(true){h=h+1|0;e=Es(e,R(10));if(EP(e,D(2808348672, 232830643))<0)break;}else if(EP(e,D(1569325056, 23283064))
<0){h=h+(-1)|0;e=Y(e,R(10));}c.s8=e;c.sp=h-330|0;},
Iq=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=CQ(b,R(65535));f=CQ(Bb(b,16),R(65535));g=CQ(Bb(b,32),R(65535));h=CQ(Bb(b,48),R(65535));i=CQ(c,R(65535));j=CQ(Bb(c,16),R(65535));k=CQ(Bb(c,32),R(65535));l=CQ(Bb(c,48),R(65535));return CR(CR(CR(Fe(Y(l,h),32+d|0),Fe(CR(Y(l,g),Y(k,h)),16+d|0)),Fe(CR(CR(Y(l,f),Y(k,g)),Y(j,h)),d)),Bb(CR(CR(CR(Y(k,e),Y(j,f)),Y(i,g)),Fe(CR(CR(CR(Y(l,e),Y(k,f)),Y(j,g)),Y(i,h)),16)),32-d|0));},
AEw=()=>{Kf=Es(R(-1),R(10));WR=AJK();Hj=ZS([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);HU=AVK([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function LY(){let a=this;C.call(a);a.s8=B6;a.sp=0;a.uj=0;}
let Zs=a=>{return;},
AJK=()=>{let a=new LY();Zs(a);return a;};
let Gx=E(Bx);
let KU=null,N7=null,RS=null,K_=null,TX=null;
let AP9=()=>{let b,c,d,e;b=new Gx;b.jJ=A(481);b.jE=0;KU=b;c=new Gx;c.jJ=A(482);c.jE=1;N7=c;d=new Gx;d.jJ=A(483);d.jE=2;RS=d;e=new Gx;e.jJ=A(484);e.jE=3;K_=e;TX=P(Gx,[b,c,d,e]);};
function II(){let a=this;C.call(a);a.lA=null;a.lx=null;a.qY=0;a.pw=0;a.p$=null;a.qD=0;a.vU=null;}
let Hz=null;
let UY=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.qY=1;a.qD=0;g=new Bg;CH();a.vU=g;LV();switch(Sc.data[b.jE]){case 1:a.lA=RH(c,d,f);b=new Hc;b.nE=1;b.o9=0;b.sF=1;if(!C1){h=E8(e);e=h.data.length;f=new Jc;i=0+e|0;BA(f);f.jT=(-1);f.j0=e;f.jB=e;f.jI=0;f.jB=i;f.qs=0;f.qN=0;f.p7=h;}else{d=e*2|0;if(d<0){b=new Bk;f=new J;f.jw=G(16);B$(f,f.ju,Cd(A(485)));L(f,f.ju,d,10);g=new H;h=f.jw;j=h.data;d=f.ju;e=j.length;if(d>=0&&d<=(e-0|0)){g.jv=K(h.data,0,d);b.jx=1;b.jy=1;b.jz=g;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}f=new CJ;h=BE(d);f.jT
=(-1);f.j0=d;f.jB=d;f.kn=Ci;f.kG=0;f.kk=h;f.jI=0;f.jB=d;f.lo=1;f.kO=0;f.kn=C3();f=Jr(f);}b.nb=f;f.jB=f.jI;f.jI=0;f.jT=(-1);f=Bi;g=f.jC.createBuffer();e=f.lD;f.lD=e+1|0;B2(f.mp,e,B4(g));b.qW=e;b.qi=!c?35048:35044;a.lx=b;a.pw=0;break a;case 2:break;case 3:a.lA=Rh(c,d,f);a.lx=Vq(c,e);a.pw=0;break a;case 4:break b;default:break b;}a.lA=APR(c,d,f);a.lx=Vq(c,e);a.pw=0;break a;}b=new Oj;Sg(b,0,d,f);a.lA=b;b=new Pv;b.nE=1;b.o9=0;b.sF=1;if(!C1){h=E8(e);d=h.data.length;f=new Jc;k=0+d|0;T8(f,d);f.jI=0;f.jB=k;f.qs=0;f.qN
=0;f.p7=h;}else{c=e*2|0;if(c<0){b=new Bk;f=new J;f.jw=G(16);DT(f,f.ju,A(485));L(f,f.ju,c,10);g=new H;h=f.jw;j=h.data;d=f.ju;e=j.length;if(d>=0&&d<=(e-0|0)){g.jv=K(h.data,0,d);b.jx=1;b.jy=1;b.jz=g;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}f=new CJ;h=BE(c);BA(f);f.jT=(-1);f.j0=c;f.jB=c;f.kn=Ci;f.kG=0;f.kk=h;f.jI=0;f.jB=c;f.lo=1;f.kO=0;f.kn=C3();f=Jr(f);}b.nb=f;f.jB=f.jI;f.jI=0;f.jT=(-1);f=Bi;g=f.jC.createBuffer();d=f.lD;f.lD=d+1|0;B2(f.mp,d,B4(g));b.qW=d;b.qi=35044;a.lx=b;a.pw=1;}b=CV;f=Hz;if(b===null){f=f.mm.data[0];while
(f!==null&&f.ml!==null){f=f.mx;}}else{l=b;if(!l.$id$){g=D8();l.$id$=g;}e=b.$id$;h=f.mm.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.ow==e){g=f.ml;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.mx;}}f=f===null?null:f.lW;if(f===null){f=new Bu;f.kr=1;f.jM=S(C,16);}BL(f,a);EW(Hz,b,f);},
AUc=(a,b,c,d,e)=>{let f=new II();UY(f,a,b,c,d,e);return f;},
R2=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.lA.hD(b,g);g=a.p$;if(g!==null&&g.hE()>0)a.p$.hD(b,h);if(a.lx.hF()>0)a.lx.g6();}if(a.pw){if(a.lx.hF()<=0)Bi.hG(c,d,e);else{g=a.lx.g$(0);i=g.jI;Cv(g,d);Bi.hH(c,e,5123,g);Cv(g,i);}}else{j=0;if(a.qD)j=a.p$.hE();if(a.lx.hF()<=0){if(a.qD&&j>0)Ed.hI(c,d,e,j);else Bi.hG(c,d,e);}else{if((e+d|0)>a.lx.hJ()){b=new Q;g=new J;g.jw=G(16);F(g,g.ju,A(486));L(g,g.ju,e,10);F(g,g.ju,A(487));L(g,g.ju,d,10);F(g,g.ju,A(488));c=a.lx.hJ();L(g,g.ju,c,10);F(g,g.ju,
A(489));h=new H;k=g.jw;l=k.data;d=g.ju;e=l.length;if(d>=0&&d<=(e-0|0)){h.jv=K(k.data,0,d);b.jx=1;b.jy=1;b.jz=h;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}if(a.qD&&j>0)Ed.hK(c,e,5123,d*2|0,j);else Bi.hL(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.lA.hM(b,g);g=a.p$;if(g!==null&&g.hE()>0)a.p$.hM(b,h);if(a.lx.hF()>0)a.lx.hN();}},
ARw=()=>{let b,c,d,e;b=new Iu;c=Jh(16);b.ol=0;d=S(Fl,c);e=d.data;b.mm=d;b.r2=0.75;b.pc=e.length*0.75|0;Hz=b;};
function MQ(){let a=this;C.call(a);a.s$=null;a.vk=null;a.vQ=null;a.sK=null;a.tv=null;a.pu=null;a.qa=null;a.tF=0.0;a.vM=0.0;a.sD=0.0;a.s_=0.0;a.vG=null;a.xm=null;a.w4=null;}
let ALP=a=>{let b,c,d;b=new Bg;CH();a.s$=b;b=new Bg;b.jF=0.0;b.jG=0.0;b.jH=(-1.0);a.vk=b;b=new Bg;b.jF=0.0;b.jG=1.0;b.jH=0.0;a.vQ=b;a.sK=CX();a.tv=CX();a.pu=CX();a.qa=CX();a.tF=1.0;a.vM=100.0;a.sD=0.0;a.s_=0.0;a.vG=ALq();a.xm=new Bg;b=new Lc;LI();c=new Bg;b.xf=c;d=new Bg;b.yr=d;c.jF=0.0;c.jG=0.0;c.jH=0.0;d.jF=0.0;d.jG=0.0;d.jH=0.0;a.w4=b;},
AJY=(a,b,c,d,e,f)=>{let g,h;g=b.jF-c;h=B5.ky.height-b.jG-d;b.jF=2.0*g/e-1.0;b.jG=2.0*h/f-1.0;b.jH=2.0*b.jH-1.0;AAv(b,a.qa);return b;};
function PL(){let a=this;MQ.call(a);a.ur=0.0;a.vV=null;}
let Vx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.sK;d=a.ur;e=a.sD;f=d* -e/2.0;e=d*e/2.0;g=a.s_;LK(c,f,e,d* -(g/2.0),d*g/2.0,a.tF,a.vM);c=a.tv;h=a.s$;i=a.vV;d=h.jF;j=h.jG;f=h.jH;i.jF=d;i.jG=j;i.jH=f;k=a.vk;l=k.jF;e=k.jG;g=k.jH;d=d+l;j=j+e;f=f+g;i.jF=d;i.jG=j;i.jH=f;i=a.vQ;k=UR;k.jF=d;k.jG=j;k.jH=f;l=h.jF;e=h.jG;g=h.jH;l=d-l;e=j-e;g=f-g;k.jF=l;k.jG=e;k.jH=g;ACA(c,k,i);i=O1;l= -h.jF;e= -h.jG;g= -h.jH;Ky(i);m=i.kv.data;m[12]=l;m[13]=e;m[14]=g;R6(c,i);CZ(a.pu,a.sK.kv);NI(a.pu.kv,a.tv.kv);if(b){CZ(a.qa,a.pu.kv);AC2(a.qa.kv);AJ4(a.vG,
a.qa);}};
let MP=E();
let AI9=null;
let Kk=()=>{Kk=BG(MP);ALM();};
let ALM=()=>{AI9=RI(5000,null);};
let Mt=E(0);
let Ux=E(0);
function Op(){let a=this;C.call(a);a.wL=null;a.wa=null;a.x1=0;a.yF=0;}
let ALK=a=>{let b,c;if(!a.x1){b=a.wL;b.uJ=null;if(BP!==b)BP=b;BP.nW=D2();c=a.wa;b=null;c.oO.e(b);}};
function Ow(){let a=this;C.call(a);a.le=null;a.mc=0;a.w$=B6;a.xY=0;a.yo=0;}
let AIp=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.w$=R(-1);a.xY=(-1);a.yo=(-1);c=b.length;if(!c){d=new Bk;d.jx=1;d.jy=1;d.jz=A(490);B(d);}e=S(DE,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.le=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.nh=c;switch(d.lY){case 5120:case 5121:break;case 5122:case 5123:g=2*d.lI|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.lI|0;break a;default:break b;}g=d.lI;break a;}g=0;}c=c+g|0;h=h+1|0;}a.mc=c;},
Qn=a=>{let b=new Ow();AIp(b,a);return b;};
function Ln(){let a=this;C.call(a);a.mM=null;a.m8=0;a.qL=null;a.u6=null;a.vS=null;a.vi=null;a.m5=null;a.vg=null;a.v4=null;a.uN=null;a.l6=0;a.sG=0;a.ua=0;a.yP=null;a.k_=null;a.lb=null;a.kl=0;a.yD=0;a.mC=null;a.pP=null;}
let Hr=0,MI=null,Lk=null,Mv=null,ANj=null;
let HO=()=>{HO=BG(Ln);AL9();};
let ARs=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;HO();a.mM=A(61);a.qL=F1(51,0.800000011920929);a.u6=F1(51,0.800000011920929);a.vS=F1(51,0.800000011920929);a.m5=F1(51,0.800000011920929);a.vg=F1(51,0.800000011920929);a.v4=F1(51,0.800000011920929);a.yD=0;if(!C1){d=U(1);e=d.data.length;f=new FX;g=0+e|0;f.jT=(-1);f.j0=e;f.jB=e;f.jI=0;f.jB=g;f.oB=0;f.pG=0;f.on=d;}else{h=new CJ;d=BE(4);h.jT=(-1);h.j0=4;h.jB=4;h.kn=Ci;h.kG=0;h.kk=d;h.jI=0;h.jB=4;h.lo=1;h.kO=0;h.kn=C3();f=GC(h);}a.mC=f;if(!C1){d=U(1);e=d.data.length;f=new FX;g
=0+e|0;f.jT=(-1);f.j0=e;f.jB=e;f.jI=0;f.jB=g;f.oB=0;f.pG=0;f.on=d;}else{h=new CJ;d=BE(4);h.jT=(-1);h.j0=4;h.jB=4;h.kn=Ci;h.kG=0;h.kk=d;h.jI=0;h.jB=4;h.lo=1;h.kO=0;h.kn=C3();f=GC(h);}a.pP=f;if(b===null){b=new Bk;b.jx=1;b.jy=1;b.jz=A(491);B(b);}if(c===null){b=new Bk;b.jx=1;b.jy=1;b.jz=A(492);B(b);}f=MI;if(f!==null&&f.jv.length>0){f=new J;f.jw=G(16);h=MI;F(f,f.ju,h);F(f,f.ju,b);b=new H;d=f.jw;i=d.data;e=f.ju;j=i.length;if(e>=0&&e<=(j-0|0))b.jv=K(d.data,0,e);else{b=new I;b.jx=1;b.jy=1;B(b);}}f=Lk;if(f!==null&&f.jv.length
>0){f=new J;f.jw=G(16);h=Lk;F(f,f.ju,h);F(f,f.ju,c);c=new H;d=f.jw;i=d.data;e=f.ju;j=i.length;if(e>=0&&e<=(j-0|0))c.jv=K(d.data,0,e);else{b=new I;b.jx=1;b.jy=1;B(b);}}a.k_=b;a.lb=c;if(!C1){i=B_(16);k=i.data.length;f=new HH;l=0+k|0;f.jT=(-1);f.j0=k;f.jB=k;f.jI=0;f.jB=l;f.pF=0;f.qd=0;f.pb=i;}else{f=new CJ;d=BE(64);f.jT=(-1);f.j0=64;f.jB=64;f.kn=Ci;f.kG=0;f.kk=d;f.jI=0;f.jB=64;f.lo=1;f.kO=0;f.kn=C3();f=EO(f);}a.yP=f;Cz(a,b,c);if(a.m8){AC3(a);AIg(a);b=CV;c=Mv;l=B3(c,b);c=l<0?null:c.kD.data[l];if(c===null){c=new Bu;c.kr
=1;c.jM=S(C,16);}BL(c,a);C5(Mv,b,c);}},
P4=(a,b)=>{let c=new Ln();ARs(c,a,b);return c;},
Cz=(a,b,c)=>{let d;a.sG=VB(a,35633,b);d=VB(a,35632,c);a.ua=d;if(a.sG!=(-1)&&d!=(-1)){d=Bi.hX();if(!d)d=(-1);d=AOn(a,d);a.l6=d;if(d!=(-1)){a.m8=1;return;}a.m8=0;return;}a.m8=0;},
VB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bi;if(!C1){e=U(1);f=e.data.length;g=new FX;h=0+f|0;g.jT=(-1);g.j0=f;g.jB=f;g.jI=0;g.jB=h;g.oB=0;g.pG=0;g.on=e;}else{g=new CJ;e=BE(4);g.jT=(-1);g.j0=4;g.jB=4;g.kn=Ci;g.kG=0;g.kk=e;g.jI=0;g.jB=4;g.lo=1;g.kO=0;g.kn=C3();g=GC(g);}i=d.hZ(b);if(!i)return (-1);d.h0(i,c);d.h1(i);d.eA(i,35713,g);if(EM(g,0))return i;j=d.h2(i);c=new J;c.jw=G(16);d=a.mM;F(c,c.ju,d);d=b!=35633?A(493):A(494);F(c,c.ju,d);d=new H;e=c.jw;k=e.data;i=c.ju;l=k.length;if(i>=0&&i<=(l-0|0)){d.jv=K(e.data,0,i);a.mM
=d;c=new J;c.jw=G(16);F(c,c.ju,d);F(c,c.ju,j);d=new H;e=c.jw;k=e.data;i=c.ju;l=k.length;if(i>=0&&i<=(l-0|0)){d.jv=K(e.data,0,i);a.mM=d;return (-1);}c=new I;c.jx=1;c.jy=1;B(c);}c=new I;c.jx=1;c.jy=1;B(c);},
AOn=(a,b)=>{let c,d,e,f;c=Bi;if(b==(-1))return (-1);c.h3(b,a.sG);c.h3(b,a.ua);c.h4(b);d=new CJ;e=BE(4);d.jT=(-1);d.j0=4;d.jB=4;d.kn=Ci;d.kG=0;d.kk=e;d.jI=0;d.jB=4;d.lo=1;d.kO=0;d.kn=C3();f=GC(d);c.ez(b,35714,f);if(EM(f,0))return b;a.mM=Bi.g4(b);return (-1);},
IF=(a,b,c)=>{let d,e,f,g,h,i;d=a.qL;e=(-2);f=EG(d,b);if(f>=0)e=d.mn.data[f];if(e==(-2)){e=Bi.h5(a.l6,b);if(e==(-1)&&c){if(a.m8){d=new Bk;g=new J;g.jw=G(16);F(g,g.ju,A(495));F(g,g.ju,b);F(g,g.ju,A(496));b=new H;h=g.jw;i=h.data;e=g.ju;f=i.length;if(e>=0&&e<=(f-0|0)){b.jv=K(h.data,0,e);d.jx=1;d.jy=1;d.jz=b;B(d);}b=new I;b.jx=1;b.jy=1;B(b);}b=new BX;d=new J;d.jw=G(16);F(d,d.ju,A(497));if(!a.m8)g=a.mM;else{g=Bi.g4(a.l6);a.mM=g;}F(d,d.ju,g);g=new H;h=d.jw;i=h.data;e=d.ju;f=i.length;if(e>=0&&e<=(f-0|0)){g.jv=K(h.data,
0,e);b.jx=1;b.jy=1;b.jz=g;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}Er(a.qL,b,e);}return e;},
AIg=a=>{let b,c,d,e,f;b=a.mC;b.jI=0;b.jB=b.j0;b.jT=(-1);Bi.ez(a.l6,35718,b);c=EM(a.mC,0);a.vi=S(H,c);d=0;while(d<c){b=a.mC;b.jI=0;b.jB=b.j0;b.jT=(-1);UD(b,0,1);b=a.pP;b.jI=0;b.jB=b.j0;b.jT=(-1);e=Bi.ey(a.l6,d,a.mC,b);f=Bi.h5(a.l6,e);Er(a.qL,e,f);Er(a.u6,e,EM(a.pP,0));Er(a.vS,e,EM(a.mC,0));a.vi.data[d]=e;d=d+1|0;}},
AC3=a=>{let b,c,d,e,f;b=a.mC;b.jI=0;b.jB=b.j0;b.jT=(-1);Bi.ez(a.l6,35721,b);c=EM(a.mC,0);a.uN=S(H,c);d=0;while(d<c){b=a.mC;b.jI=0;b.jB=b.j0;b.jT=(-1);UD(b,0,1);b=a.pP;b.jI=0;b.jB=b.j0;b.jT=(-1);e=Bi.ex(a.l6,d,a.mC,b);f=Bi.h8(a.l6,e);Er(a.m5,e,f);Er(a.vg,e,EM(a.pP,0));Er(a.v4,e,EM(a.mC,0));a.uN.data[d]=e;d=d+1|0;}},
AL9=()=>{let b,c,d,e;Hr=1;MI=A(61);Lk=A(61);Mv=Ex(51,0.800000011920929);if(!C1){b=U(1);c=b.data.length;d=new FX;e=0+c|0;d.jT=(-1);d.j0=c;d.jB=c;d.jI=0;d.jB=e;d.oB=0;d.pG=0;d.on=b;}else{d=new CJ;b=BE(4);d.jT=(-1);d.j0=4;d.jB=4;d.kn=Ci;d.kG=0;d.kk=b;d.jI=0;d.jB=4;d.lo=1;d.kO=0;d.kn=C3();d=GC(d);}ANj=d;};
function Mn(){let a=this;Bu.call(a);a.nL=null;a.r4=null;a.ms=0;}
let GP=a=>{let b,c,d,e;b=a.ms-1|0;if(0>b)b=0;a.ms=b;c=a.nL;if(c===null)return;a:{if(c!==a.jM&&!b){d=c.data;a.r4=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.nL=null;},
Dc=a=>{let b,c,d,e;b=a.nL;if(b!==null){c=a.jM;if(b===c){a:{b=a.r4;if(b!==null){d=b.data.length;e=a.jA;if(d>=e){Du(c,0,b,0,e);a.jM=a.r4;a.r4=null;break a;}}Kv(a,c.data.length);}return;}}};
function Kp(){let a=this;Bu.call(a);a.pi=0;a.pD=null;a.po=0;}
let ALA=a=>{a.pi=a.pi+1|0;},
ANx=a=>{let b,c,d,e,f,g,h,i,j;b=a.pi;if(!b){c=new BX;c.jx=1;c.jy=1;c.jz=A(498);B(c);}d=b-1|0;a.pi=d;if(!d){a:{b=a.po;if(b>0){e=a.jA;if(b==e){a.pD.kU=0;if(d>0)a.po=e;else{f=a.jM;d=0;c=null;if(d>e){c=new Bk;c.jx=1;c.jy=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.jA=0;}break a;}}d=0;b=a.pD.kU;b:{while(true){if(d>=b)break b;c=a.pD;f=c.lN.data;e=c.kU-1|0;c.kU=e;h=f[e];if(h>=a.po){if(a.pi<=0)DC(a,h);else{UL(a,h);if(h>=a.jA)break;}}d=d+1|0;}i=new I;c=new J;c.jw=G(16);F(c,c.ju,A(18));L(c,c.ju,h,10);F(c,c.ju,A(19));d
=a.jA;L(c,c.ju,d,10);j=new H;f=c.jw;g=f.data;b=c.ju;e=g.length;if(b>=0&&b<=(e-0|0)){j.jv=K(f.data,0,b);i.jx=1;i.jy=1;i.jz=j;B(i);}c=new I;c.jx=1;c.jy=1;B(c);}d=a.po-1|0;while(true){if(d<0)break a;if(a.pi<=0)DC(a,d);else{UL(a,d);if(d>=a.jA){i=new I;c=new J;c.jw=G(16);F(c,c.ju,A(18));L(c,c.ju,d,10);F(c,c.ju,A(19));d=a.jA;L(c,c.ju,d,10);j=new H;f=c.jw;g=f.data;b=c.ju;e=g.length;if(b>=0&&b<=(e-0|0)){j.jv=K(f.data,0,b);i.jx=1;i.jy=1;i.jz=j;B(i);}c=new I;c.jx=1;c.jy=1;B(c);}}d=d+(-1)|0;}}a.po=0;}},
UL=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.po)return;c=0;d=a.pD;e=d.kU;while(true){f=Cf(c,e);if(f>=0){Le(d,b);return;}if(f>=0){g=new I;h=new J;h.jw=G(16);F(h,h.ju,A(18));L(h,h.ju,c,10);F(h,h.ju,A(19));b=d.kU;L(h,h.ju,b,10);d=new H;i=h.jw;j=i.data;c=h.ju;e=j.length;if(c>=0&&c<=(e-0|0)){d.jv=K(i.data,0,c);g.jx=1;g.jy=1;g.jz=d;B(g);}d=new I;d.jx=1;d.jy=1;B(d);}f=Cf(b,d.lN.data[c]);if(!f)break;if(f<0){ARe(d,c,b);return;}c=c+1|0;}};
function TH(){let a=this;C.call(a);a.sL=0;a.sy=0;a.us=0;}
let VA=E();
let Sc=null;
let LV=()=>{LV=BG(VA);AMO();};
let AMO=()=>{let b,c;b=U((TX.p()).data.length);c=b.data;Sc=b;c[N7.jE]=1;c[RS.jE]=2;c[K_.jE]=3;c[KU.jE]=4;};
let IP=E(0);
function Is(){let a=this;C.call(a);a.m7=null;a.oJ=null;a.vr=0;a.yK=0;a.sS=0;a.qw=0;a.qR=0;}
let Sg=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.qw=0;a.qR=0;a.yK=b;a.m7=d;c=C$(d.mc/4|0,c);if(!C1){e=B_(c);f=e.data.length;d=new HH;g=0+f|0;d.jT=(-1);d.j0=f;d.jB=f;d.jI=0;d.jB=g;d.pF=0;d.qd=0;d.pb=e;}else{c=c*4|0;if(c<0){d=new Bk;h=new J;h.jw=G(16);CF(h,h.ju,A(485));L(h,h.ju,c,10);i=new H;e=h.jw;j=e.data;c=h.ju;k=j.length;if(c>=0&&c<=(k-0|0)){i.jv=K(e.data,0,c);d.jx=1;d.jy=1;d.jz=i;B(d);}d=new I;d.jx=1;d.jy=1;B(d);}h=new CJ;e=BE(c);h.jT=(-1);h.j0=c;h.jB=c;h.kn=Ci;h.kG=0;h.kk=e;h.jI=0;h.jB=c;h.lo=1;h.kO=0;h.kn=C3();d
=EO(h);}a.oJ=d;d.jB=d.jI;d.jI=0;d.jT=(-1);d=Bi;h=d.jC.createBuffer();k=d.lD;d.lD=k+1|0;B2(d.mp,k,B4(h));a.vr=k;a.sS=!b?35048:35044;},
RH=(a,b,c)=>{let d=new Is();Sg(d,a,b,c);return d;},
ADK=a=>{return a.m7;},
AMk=a=>{return a.oJ.jB/(a.m7.mc/4|0)|0;},
AJW=(a,b,c,d)=>{let e,f,g;a.qw=1;e=a.oJ;f=null;g=e instanceof EF;if(g)f=EO(e);else if(e instanceof D0)f=e;if(f===null){f=new Q;f.jx=1;f.jy=1;f.jz=A(499);B(f);}f.jI=0;f.jB=f.j0;f.jT=(-1);Cv(e,0);IM(f,b,c,d);Cv(e,0);if(!g)CC(e,d);else CC(e,d<<2);Cv(a.oJ,0);CC(a.oJ,d);if(a.qR){e=Bi;f=a.oJ;e.ev(34962,f.jB,f,a.sS);a.qw=0;}},
ACC=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bi;d.ib(34962,a.vr);if(a.qw){e=a.oJ;d.ev(34962,e.jB,e,a.sS);a.qw=0;}a:{f=a.m7.le.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.m7.le.data[g];j=h[g];if(j>=0){e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}e.ic(j);k=i.lI;l=i.lY;m=i.l9;n=a.m7.mc;o=i.nh;e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}e.id(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.m7.le.data[g];d=i.l5;e=b.m5;p=(-1);j=EG(e,d);if(j>=0)p=e.mn.data[j];if(p>=0){e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}e.ic(p);j
=i.lI;k=i.lY;l=i.l9;m=a.m7.mc;n=i.nh;e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}e.id(p,j,k,l,m,n);}g=g+1|0;}}a.qR=1;},
Ym=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bi;e=a.m7.le.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}h.ie(g);}f=f+1|0;}}i=0;while(i<e){j=a.m7.le.data[i].l5;k=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}l=Bi;h=b.m5;g=(-2);f=EG(h,j);if(f>=0)g=h.mn.data[f];if(g==(-2)){g=l.h8(b.l6,j);Er(b.m5,j,g);}if(g!=(-1))k.ie(g);i=i+1|0;}}d.ib(34962,0);a.qR=0;};
let JQ=E(0);
function Hc(){let a=this;C.call(a);a.nb=null;a.qW=0;a.sF=0;a.nE=0;a.o9=0;a.qi=0;}
let AEP=a=>{return a.nb.jB;},
W7=a=>{return a.nb.j0;},
AJu=(a,b,c,d)=>{let e;a.nE=1;e=a.nb;e.jI=0;e.jB=e.j0;e.jT=(-1);Un(e,b,c,d);e=a.nb;c=e.jI;e.jB=c;e.jI=0;e.jT=(-1);if(a.o9){Bi.ev(34963,c,e,a.qi);a.nE=0;}},
X5=(a,b)=>{a.nE=a.nE|b;return a.nb;},
AP3=a=>{let b,c,d;b=a.qW;if(!b){c=new Q;c.jx=1;c.jy=1;c.jz=A(500);B(c);}Bi.ib(34963,b);if(a.nE){c=Bi;d=a.nb;c.ev(34963,d.jB,d,a.qi);a.nE=0;}a.o9=1;},
AMB=a=>{Bi.ib(34963,0);a.o9=0;};
function O4(){let a=this;C.call(a);a.m3=null;a.ng=null;a.nC=null;a.uf=0;a.uu=0;a.w2=0;a.sm=0;a.ql=0;a.q1=0;}
let AID=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.ql=0;a.q1=0;a.w2=b;a.m3=d;c=C$(d.mc,c);if(!C1){e=BE(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new CJ;g=0+f|0;d.jT=(-1);d.j0=f;d.jB=f;d.kn=Ci;d.kG=0;d.kk=e;d.jI=0;d.jB=g;d.lo=0;d.kO=0;break a;}d=new I;d.jx=1;d.jy=1;Bo(d);B(d);}if(c<0){d=new Bk;h=new J;h.jw=G(16);CF(h,h.ju,A(485));L(h,h.ju,c,10);i=new H;e=h.jw;j=e.data;c=h.ju;f=j.length;if(c>=0&&c<=(f-0|0)){i.jv=K(e.data,0,c);d.jx=1;d.jy=1;d.jz=i;B(d);}d=new I;d.jx=1;d.jy=1;B(d);}d=new CJ;e=BE(c);d.jT=(-1);d.j0=c;d.jB=
c;d.kn=Ci;d.kG=0;d.kk=e;d.jI=0;d.jB=c;d.lo=1;d.kO=0;d.kn=C3();}a.nC=d;a.uu=1;a.sm=!b?35048:35044;a.ng=EO(d);d=Bi;h=d.jC.createBuffer();g=d.lD;d.lD=g+1|0;B2(d.mp,g,B4(h));Bi.ib(34962,g);Bi.ev(34962,a.nC.j0,null,a.sm);Bi.ib(34962,0);a.uf=g;d=a.ng;d.jB=d.jI;d.jI=0;d.jT=(-1);d=a.nC;d.jB=d.jI;d.jI=0;d.jT=(-1);},
APR=(a,b,c)=>{let d=new O4();AID(d,a,b,c);return d;},
ZU=a=>{return a.m3;},
AA4=a=>{return (a.ng.jB*4|0)/a.m3.mc|0;},
YS=(a,b,c,d)=>{let e,f,g;a.ql=1;if(!a.uu){e=a.ng;e.jI=0;e.jB=e.j0;e.jT=(-1);IM(e,b,c,d);e=a.ng;e.jB=e.jI;e.jI=0;e.jT=(-1);Cv(a.nC,0);CC(a.nC,a.ng.jB<<2);}else{e=a.nC;f=null;g=e instanceof EF;if(g)f=EO(e);else if(e instanceof D0)f=e;if(f===null){f=new Q;f.jx=1;f.jy=1;f.jz=A(499);B(f);}f.jI=0;f.jB=f.j0;f.jT=(-1);Cv(e,0);IM(f,b,c,d);Cv(e,0);if(!g)CC(e,d);else CC(e,d<<2);Cv(a.ng,0);CC(a.ng,d);}if(a.q1){e=Bi;f=a.nC;e.ew(34962,0,f.jB,f);a.ql=0;}},
AJf=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bi;d.ib(34962,a.uf);if(a.ql){CC(a.nC,a.ng.jB*4|0);e=a.nC;d.ev(34962,e.jB,e,a.sm);a.ql=0;}a:{f=a.m3.le.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.m3.le.data[g];j=h[g];if(j>=0){e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}e.ic(j);k=i.lI;l=i.lY;m=i.l9;n=a.m3.mc;o=i.nh;e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}e.id(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.m3.le.data[g];p=i.l5;e=b.m5;q=(-1);j=EG(e,p);if(j>=0)q=e.mn.data[j];if(q>=0){e=Bi;if(b.kl){Cz(b,
b.k_,b.lb);b.kl=0;}e.ic(q);j=i.lI;k=i.lY;l=i.l9;m=a.m3.mc;n=i.nh;e=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}e.id(q,j,k,l,m,n);}g=g+1|0;}}a.q1=1;},
ACD=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bi;e=a.m3.le.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}h.ie(g);}f=f+1|0;}}i=0;while(i<e){j=a.m3.le.data[i].l5;k=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}l=Bi;h=b.m5;g=(-2);f=EG(h,j);if(f>=0)g=h.mn.data[f];if(g==(-2)){g=l.h8(b.l6,j);Er(b.m5,j,g);}if(g!=(-1))k.ie(g);i=i+1|0;}}d.ib(34962,0);a.q1=0;};
function Rl(){let a=this;C.call(a);a.oI=null;a.nI=null;a.vw=0;a.xQ=0;a.oM=0;a.q4=0;a.vW=0;}
let AB3=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.oM=1;a.q4=0;c=c*2|0;if(!C1){d=BE(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new CJ;g=0+e|0;f.jT=(-1);f.j0=e;f.jB=e;f.kn=Ci;f.kG=0;f.kk=d;f.jI=0;f.jB=g;f.lo=0;f.kO=0;break a;}f=new I;f.jx=1;f.jy=1;Bo(f);B(f);}if(c<0){f=new Bk;h=new J;h.jw=G(16);CF(h,h.ju,A(485));L(h,h.ju,c,10);i=new H;d=h.jw;j=d.data;c=h.ju;k=j.length;if(c>=0&&c<=(k-0|0)){i.jv=K(d.data,0,c);f.jx=1;f.jy=1;f.jz=i;B(f);}f=new I;f.jx=1;f.jy=1;B(f);}f=new CJ;d=BE(c);f.jT=(-1);f.j0=c;f.jB=c;f.kn=Ci;f.kG=0;f.kk
=d;f.jI=0;f.jB=c;f.lo=1;f.kO=0;f.kn=C3();}a.nI=f;a.xQ=1;a.vW=!b?35048:35044;f=Jr(f);a.oI=f;f.jB=f.jI;f.jI=0;f.jT=(-1);f=a.nI;f.jB=f.jI;f.jI=0;f.jT=(-1);f=Bi;h=f.jC.createBuffer();e=f.lD;f.lD=e+1|0;B2(f.mp,e,B4(h));Bi.ib(34963,e);Bi.ev(34963,a.nI.j0,null,a.vW);Bi.ib(34963,0);a.vw=e;},
Vq=(a,b)=>{let c=new Rl();AB3(c,a,b);return c;},
ALO=a=>{return a.oI.jB;},
We=a=>{return a.oI.j0;},
AFv=(a,b,c,d)=>{let e,f;a.oM=1;e=a.oI;e.jI=0;e.jB=e.j0;e.jT=(-1);Un(e,b,c,d);e=a.oI;e.jB=e.jI;e.jI=0;e.jT=(-1);Cv(a.nI,0);CC(a.nI,d<<1);if(a.q4){e=Bi;f=a.nI;e.ew(34963,0,f.jB,f);a.oM=0;}},
AOE=(a,b)=>{a.oM=a.oM|b;return a.oI;},
AGo=a=>{let b,c,d;b=a.vw;if(!b){c=new Q;c.jx=1;c.jy=1;c.jz=A(501);B(c);}Bi.ib(34963,b);if(a.oM){CC(a.nI,a.oI.jB*2|0);c=Bi;d=a.nI;c.ew(34963,0,d.jB,d);a.oM=0;}a.q4=1;},
Zw=a=>{Bi.ib(34963,0);a.q4=0;};
function KJ(){let a=this;C.call(a);a.nH=null;a.n_=null;a.to=0;a.yO=0;a.tb=0;a.qq=0;a.r1=0;a.sB=0;a.nk=null;}
let LN=null;
let KO=()=>{KO=BG(KJ);ARP();};
let ABa=(a,b,c,d)=>{let e,f,g,h,i,j;KO();a.qq=0;a.r1=0;a.sB=(-1);e=new Fo;e.oo=1;e.lN=U(16);a.nk=e;a.yO=b;a.nH=d;c=C$(d.mc/4|0,c);if(!C1){f=B_(c);g=f.data.length;d=new HH;h=0+g|0;d.jT=(-1);d.j0=g;d.jB=g;d.jI=0;d.jB=h;d.pF=0;d.qd=0;d.pb=f;}else{c=c*4|0;if(c<0){d=new Bk;e=new J;e.jw=G(16);CF(e,e.ju,A(485));L(e,e.ju,c,10);i=new H;f=e.jw;j=f.data;c=e.ju;g=j.length;if(c>=0&&c<=(g-0|0)){i.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=i;B(d);}d=new I;d.jx=1;d.jy=1;B(d);}e=new CJ;f=BE(c);e.jT=(-1);e.j0=c;e.jB=c;e.kn=Ci;e.kG=
0;e.kk=f;e.jI=0;e.jB=c;e.lo=1;e.kO=0;e.kn=C3();d=EO(e);}a.n_=d;d.jB=d.jI;d.jI=0;d.jT=(-1);d=Bi;e=d.jC.createBuffer();g=d.lD;d.lD=g+1|0;B2(d.mp,g,B4(e));a.to=g;a.tb=!b?35048:35044;d=LN;d.jI=0;d.jB=d.j0;d.jT=(-1);Ed.ih(1,d);d=LN;c=d.jI;if(c<d.jB){d.jI=c+1|0;a.sB=d.ii(c);return;}d=new Mx;d.jx=1;d.jy=1;B(d);},
Rh=(a,b,c)=>{let d=new KJ();ABa(d,a,b,c);return d;},
YA=a=>{return a.nH;},
AJl=a=>{return (a.n_.jB*4|0)/a.nH.mc|0;},
YN=(a,b,c,d)=>{let e,f,g;a.qq=1;e=a.n_;f=null;g=e instanceof EF;if(g)f=EO(e);else if(e instanceof D0)f=e;if(f===null){f=new Q;f.jx=1;f.jy=1;f.jz=A(499);B(f);}f.jI=0;f.jB=f.j0;f.jT=(-1);Cv(e,0);IM(f,b,c,d);Cv(e,0);if(!g)CC(e,d);else CC(e,d<<2);Cv(a.n_,0);CC(a.n_,d);if(a.r1){e=Bi;f=a.n_;e.ev(34962,f.jB,f,a.tb);a.qq=0;}},
AOh=(a,b,c)=>{let d;d=Ed;d.ij(a.sB);ANq(a,b,c);if(a.qq){d.ib(34962,a.to);b=a.n_;CC(b,b.jB);b=a.n_;d.ev(34962,b.jB,b,a.tb);a.qq=0;}a.r1=1;},
ANq=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.nk;e=d.kU;f=!e?0:1;a:{g=a.nH.le.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.nH.le.data[e].l5;h=b.m5;i=(-1);f=EG(h,d);if(f>=0)i=h.mn.data[f];d=a.nk;if(e>=d.kU)break;f=i!=d.lN.data[e]?0:1;e=e+1|0;}h=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,e,10);F(b,b.ju,A(19));e=d.kU;L(b,b.ju,e,10);d=new H;c=b.jw;j=c.data;f=b.ju;g=j.length;if(f>=0&&f<=(g-0|0)){d.jv=K(c.data,0,f);h.jx=1;h.jy=1;h.jz=d;B(h);}b=new I;X(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.lN.data[i]?0:1;i=i+1|0;}h=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,i,10);F(b,b.ju,A(19));e=d.kU;L(b,b.ju,e,10);d=new H;c=b.jw;j=c.data;f=b.ju;g=j.length;if(f>=0&&f<=(g-0|0)){d.jv=K(c.data,0,f);h.jx=1;h.jy=1;h.jz=d;B(h);}b=new I;X(b);B(b);}}}c:{if(!f){d:{BU.ib(34962,a.to);if(a.nk.kU){k=a.nH.le.data.length;e=0;while(true){if(e>=k)break d;d=a.nk;if(e>=d.kU)break;i=d.lN.data[e];if(i>=0){d=Bi;if(b.kl){Cz(b,
b.k_,b.lb);b.kl=0;}d.ie(i);}e=e+1|0;}h=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,e,10);F(b,b.ju,A(19));e=d.kU;L(b,b.ju,e,10);d=new H;c=b.jw;j=c.data;f=b.ju;g=j.length;if(f>=0&&f<=(g-0|0)){d.jv=K(c.data,0,f);h.jx=1;h.jy=1;h.jz=d;B(h);}b=new I;IV(b);B(b);}}a.nk.kU=0;e=0;while(true){if(e>=g)break c;h=a.nH.le.data[e];if(c!==null){j=c.data;Le(a.nk,j[e]);}else{l=a.nk;m=h.l5;d=b.m5;i=(-1);f=EG(d,m);if(f>=0)i=d.mn.data[f];Le(l,i);}d=a.nk;if(e>=d.kU){h=new I;b=new J;b.jw=G(16);F(b,b.ju,A(18));L(b,b.ju,e,10);F(b,
b.ju,A(19));e=d.kU;L(b,b.ju,e,10);d=new H;c=b.jw;j=c.data;f=b.ju;g=j.length;if(f>=0&&f<=(g-0|0)){d.jv=K(c.data,0,f);h.jx=1;h.jy=1;h.jz=d;B(h);}b=new I;X(b);B(b);}n=d.lN.data[e];if(n>=0){d=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}d.ic(n);f=h.lI;i=h.lY;k=h.l9;o=a.nH.mc;p=h.nh;d=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}d.id(n,f,i,k,o,p);}e=e+1|0;}}}},
ABO=(a,b,c)=>{Ed.ij(0);a.r1=0;},
ARP=()=>{let b,c,d,e;if(!C1){b=U(1);c=b.data.length;d=new FX;e=0+c|0;d.jT=(-1);d.j0=c;d.jB=c;d.jI=0;d.jB=e;d.oB=0;d.pG=0;d.on=b;}else{d=new CJ;b=BE(4);d.jT=(-1);d.j0=4;d.jB=4;d.kn=Ci;d.kG=0;d.kk=b;d.jI=0;d.jB=4;d.lo=1;d.kO=0;d.kn=C3();d=GC(d);}LN=d;};
let Oj=E(Is);
let Pv=E(Hc);
function Tl(){let a=this;C.call(a);a.sk=0;a.oh=null;a.mn=null;a.uM=0.0;a.sx=0;a.rR=0;a.rG=0;}
let AEy=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.uM=c;d=I3(b,c);a.sx=d*c|0;b=d-1|0;a.rG=b;a.rR=EQ(R(b));a.oh=S(C,d);a.mn=U(d);return;}e=new Bk;f=new J;f.jw=G(16);F(f,f.ju,A(62));Hn(f,f.ju,c);g=new H;h=f.jw;i=h.data;d=f.ju;j=i.length;if(d>=0&&d<=(j-0|0)){g.jv=K(h.data,0,d);e.jx=1;e.jy=1;e.jz=g;B(e);}f=new I;f.jx=1;f.jy=1;B(f);},
F1=(a,b)=>{let c=new Tl();AEy(c,a,b);return c;},
EG=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bk;c.jx=1;c.jy=1;c.jz=A(63);B(c);}a:{d=a.oh;if(!b.kY){e=0;while(true){if(e>=b.jv.length)break a;b.kY=(31*b.kY|0)+b.jv.charCodeAt(e)|0;e=e+1|0;}}}f=Be(Bb(Y(R(b.kY),D(2135587861, 2654435769)),a.rR));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof H))g=0;else{h=b;g=c.jv!==h.jv?0:1;}if(g)break;f=(f+1|0)&a.rG;}return f;},
Er=(a,b,c)=>{let d,e;d=EG(a,b);if(d>=0){a.mn.data[d]=c;return;}d= -(d+1|0)|0;e=a.oh.data;e[d]=b;a.mn.data[d]=c;c=a.sk+1|0;a.sk=c;if(c>=a.sx)AOr(a,e.length<<1);},
AOr=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.oh.data.length;a.sx=b*a.uM|0;d=b-1|0;a.rG=d;a.rR=EQ(R(d));e=a.oh;f=a.mn;a.oh=S(C,b);a.mn=U(b);if(a.sk>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.oh;if(!h.kY){k=0;while(true){if(k>=h.jv.length)break b;h.kY=(31*h.kY|0)+h.jv.charCodeAt(k)|0;k=k+1|0;}}}b=Be(Bb(Y(R(h.kY),D(2135587861, 2654435769)),a.rR));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.rG;}l[b]=h;a.mn.data[b]=i;}g=g+1|0;}}}};
let AL4=E();
function Ty(){let a=this;C.call(a);a.kp=null;a.nJ=0;a.rX=null;a.p9=null;a.rx=null;a.wQ=null;a.tA=null;a.l8=null;a.rt=0;a.xR=0.0;}
let ALc=(a,b,c)=>{let d,e,f,g,h,i,j;a.nJ=0;a.rX=CX();a.p9=CX();a.rx=CX();a.wQ=new Bj;d=new BD;d.kj=1.0;d.ki=1.0;d.kh=1.0;d.kg=1.0;CN(d);a.tA=d;a.xR=0.75;if(c!==null)a.kp=AGe(b,0,1,0,c);else{c=new K0;e=P4(VU(0,1,0),AH9(0,1,0));if(!e.m8){c=new Q;d=new J;d.jw=G(16);F(d,d.ju,A(472));if(!e.m8)f=e.mM;else{f=Bi.g4(e.l6);e.mM=f;}F(d,d.ju,f);f=new H;g=d.jw;h=g.data;i=d.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}RJ(c,b,0,1,0,e);c.yI=1;a.kp=c;}LK(a.rX,0.0,
0.0+B5.ky.width,0.0,0.0+B5.ky.height,0.0,1.0);a.nJ=1;},
RI=(a,b)=>{let c=new Ty();ALc(c,a,b);return c;},
Fz=(a,b)=>{let c,d;if(a.l8!==null){b=new BX;b.jx=1;b.jy=1;b.jz=A(502);B(b);}a.l8=b;if(a.nJ){CZ(a.rx,a.rX.kv);NI(a.rx.kv,a.p9.kv);a.nJ=0;}b=a.kp;c=a.rx;d=a.l8.rp;CZ(b.s3,c.kv);b.vD=d;},
AH6=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;AFd(a,Hv,QD,8);Gf();o=FM.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.l8!==Hv){bf=a.kp;bf.lF.data[bf.lv+bf.l3|0]=Dd(k.kj,k.ki,k.kh,k.kg);De(a.kp,x,y,0.0);bf=a.kp;bf.lF.data[bf.lv+bf.l3|0]
=Dd(l.kj,l.ki,l.kh,l.kg);De(a.kp,z,ba,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(m.kj,m.ki,m.kh,m.kg);De(a.kp,bb,bc,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(m.kj,m.ki,m.kh,m.kg);De(a.kp,bb,bc,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(n.kj,n.ki,n.kh,n.kg);De(a.kp,bd,be,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(k.kj,k.ki,k.kh,k.kg);De(a.kp,x,y,0.0);}else{bf=a.kp;bf.lF.data[bf.lv+bf.l3|0]=Dd(k.kj,k.ki,k.kh,k.kg);De(a.kp,x,y,0.0);bf=a.kp;bf.lF.data[bf.lv+bf.l3|0]=Dd(l.kj,l.ki,l.kh,l.kg);De(a.kp,z,ba,0.0);bf=a.kp;bf.lF.data[bf.lv
+bf.l3|0]=Dd(l.kj,l.ki,l.kh,l.kg);De(a.kp,z,ba,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(m.kj,m.ki,m.kh,m.kg);De(a.kp,bb,bc,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(m.kj,m.ki,m.kh,m.kg);De(a.kp,bb,bc,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(n.kj,n.ki,n.kh,n.kg);De(a.kp,bd,be,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(n.kj,n.ki,n.kh,n.kg);De(a.kp,bd,be,0.0);l=a.kp;l.lF.data[l.lv+l.l3|0]=Dd(k.kj,k.ki,k.kh,k.kg);De(a.kp,x,y,0.0);}},
AFd=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.l8;if(e===null){b=new BX;b.jx=1;b.jy=1;b.jz=A(30);B(b);}if(!(e!==b&&e!==c)){if(a.nJ){Fw(a.kp);a.l8=null;Fz(a,e);}else{b=a.kp;if((b.ut-b.pU|0)<d){Fw(b);a.l8=null;Fz(a,e);}}}else{if(!a.rt){if(c===null){c=new BX;e=new J;e.jw=G(16);F(e,e.ju,A(503));F(e,e.ju,b===null?A(2):b.jJ);F(e,e.ju,A(504));b=new H;f=e.jw;g=f.data;h=e.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);c.jx=1;c.jy=1;c.jz=b;B(c);}b=new I;b.jx=1;b.jy=1;B(b);}j=new BX;e=new J;e.jw=G(16);F(e,e.ju,A(503));F(e,
e.ju,b===null?A(2):b.jJ);F(e,e.ju,A(505));F(e,e.ju,c.jJ);F(e,e.ju,A(504));b=new H;f=e.jw;g=f.data;h=e.ju;i=g.length;if(h>=0&&h<=(i-0|0)){b.jv=K(f.data,0,h);j.jx=1;j.jy=1;j.jz=b;B(j);}b=new I;b.jx=1;b.jy=1;B(b);}Fw(a.kp);a.l8=null;Fz(a,b);}};
function Eu(){let a=this;C.call(a);a.j0=0;a.jI=0;a.jB=0;a.jT=0;}
let T8=(a,b)=>{a.jT=(-1);a.j0=b;a.jB=b;},
Cv=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.jB){a.jI=b;if(b<a.jT)a.jT=0;return a;}c=new Bk;d=a.jB;e=new J;e.jw=G(16);F(e,e.ju,A(506));L(e,e.ju,b,10);F(e,e.ju,A(507));L(e,e.ju,d,10);d=e.ju;Bd(e,d,d+1|0);f=e.jw;g=f.data;g[d]=93;h=new H;d=e.ju;i=g.length;if(d>=0&&d<=(i-0|0)){h.jv=K(f.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
CC=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.j0){if(a.jT>b)a.jT=(-1);a.jB=b;if(a.jI>b)a.jI=b;return a;}c=new Bk;d=a.j0;e=new J;e.jw=G(16);F(e,e.ju,A(508));L(e,e.ju,b,10);F(e,e.ju,A(507));L(e,e.ju,d,10);d=e.ju;Bd(e,d,d+1|0);f=e.jw;g=f.data;g[d]=93;h=new H;d=e.ju;i=g.length;if(d>=0&&d<=(i-0|0)){h.jv=K(f.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);};
let D0=E(Eu);
let IM=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.is()){e=new FB;e.jx=1;e.jy=1;B(e);}f=a.jB;g=a.jI;if((f-g|0)<d){e=new Il;e.jx=1;e.jy=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new J;j.jw=G(16);F(j,j.ju,A(509));L(j,j.ju,i,10);F(j,j.ju,A(510));L(j,j.ju,f,10);k=new H;b=j.jw;h=b.data;d=j.ju;f=h.length;if(d>=0&&d<=(f-0|0)){k.jv=K(b.data,0,d);e.jx=1;e.jy=1;e.jz=k;B(e);}e=new I;e.jx=1;e.jy=1;Bo(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.it(g,h[c]);i=i+1|0;g=l;c=f;}a.jI=a.jI+d|0;return a;}e
=new I;j=new J;j.jw=G(16);F(j,j.ju,A(511));L(j,j.ju,d,10);F(j,j.ju,A(512));k=new H;b=j.jw;h=b.data;d=j.ju;f=h.length;if(d>=0&&d<=(f-0|0)){k.jv=K(b.data,0,d);e.jx=1;e.jy=1;e.jz=k;B(e);}e=new I;e.jx=1;e.jy=1;Bo(e);B(e);}}b=b.data;e=new I;d=b.length;j=new J;j.jw=G(16);F(j,j.ju,A(513));L(j,j.ju,c,10);F(j,j.ju,A(507));L(j,j.ju,d,10);d=j.ju;Bd(j,d,d+1|0);b=j.jw;h=b.data;h[d]=41;k=new H;d=j.ju;f=h.length;if(d>=0&&d<=(f-0|0)){k.jv=K(b.data,0,d);e.jx=1;e.jy=1;e.jz=k;B(e);}e=new I;e.jx=1;e.jy=1;Bo(e);B(e);},
ATA=(a,b)=>{CC(a,b);return a;},
AUu=(a,b)=>{Cv(a,b);return a;},
ATD=a=>{a.jB=a.jI;a.jI=0;a.jT=(-1);return a;},
AVN=a=>{a.jI=0;a.jB=a.j0;a.jT=(-1);return a;},
AK7=(a,b)=>{CC(a,b);return a;},
AQu=(a,b)=>{Cv(a,b);return a;};
let GQ=E(Eu);
let Un=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.is()){e=new FB;e.jx=1;e.jy=1;B(e);}f=a.jB;g=a.jI;if((f-g|0)<d){e=new Il;e.jx=1;e.jy=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new J;j.jw=G(16);F(j,j.ju,A(514));L(j,j.ju,i,10);F(j,j.ju,A(510));L(j,j.ju,f,10);k=new H;b=j.jw;h=b.data;d=j.ju;f=h.length;if(d>=0&&d<=(f-0|0)){k.jv=K(b.data,0,d);e.jx=1;e.jy=1;e.jz=k;B(e);}e=new I;e.jx=1;e.jy=1;Bo(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iu(g,h[c]);i=i+1|0;g=l;c=f;}a.jI=a.jI+d|0;return a;}e
=new I;j=new J;j.jw=G(16);F(j,j.ju,A(511));L(j,j.ju,d,10);F(j,j.ju,A(512));k=new H;b=j.jw;h=b.data;d=j.ju;f=h.length;if(d>=0&&d<=(f-0|0)){k.jv=K(b.data,0,d);e.jx=1;e.jy=1;e.jz=k;B(e);}e=new I;e.jx=1;e.jy=1;Bo(e);B(e);}}b=b.data;e=new I;d=b.length;j=new J;j.jw=G(16);F(j,j.ju,A(513));L(j,j.ju,c,10);F(j,j.ju,A(507));L(j,j.ju,d,10);d=j.ju;Bd(j,d,d+1|0);b=j.jw;h=b.data;h[d]=41;k=new H;d=j.ju;f=h.length;if(d>=0&&d<=(f-0|0)){k.jv=K(b.data,0,d);e.jx=1;e.jy=1;e.jz=k;B(e);}e=new I;e.jx=1;e.jy=1;Bo(e);B(e);},
AUP=(a,b)=>{CC(a,b);return a;},
AUX=(a,b)=>{Cv(a,b);return a;},
AU8=a=>{a.jB=a.jI;a.jI=0;a.jT=(-1);return a;},
AVE=a=>{a.jI=0;a.jB=a.j0;a.jT=(-1);return a;},
AUe=(a,b)=>{CC(a,b);return a;},
ASz=(a,b)=>{Cv(a,b);return a;};
let GO=E(Eu);
let ASo=(a,b)=>{Cv(a,b);return a;},
AUt=a=>{a.jI=0;a.jB=a.j0;a.jT=(-1);return a;};
function EF(){let a=this;Eu.call(a);a.kG=0;a.kk=null;a.kn=null;}
let AKY=(a,b)=>{CC(a,b);return a;},
Xj=(a,b)=>{Cv(a,b);return a;};
function G3(){C.call(this);this.ry=null;}
let Ci=null,Jp=null,Ls=null;
let C3=()=>{let b;if(Ls===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;Ls=(new Int8Array(b))[0]?Jp:Ci;}return Ls;},
AVM=()=>{let b;b=new G3;b.ry=A(4);Ci=b;b=new G3;b.ry=A(5);Jp=b;};
let AFi=E();
let DW=E(0);
function CJ(){let a=this;EF.call(a);a.lo=0;a.kO=0;}
let V_=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jB)return a.kk.data[a.kG+b|0];c=new I;d=a.jB;e=new J;e.jw=G(16);F(e,e.ju,A(515));L(e,e.ju,b,10);F(e,e.ju,A(507));L(e,e.ju,d,10);d=e.ju;Bd(e,d,d+1|0);f=e.jw;g=f.data;g[d]=41;h=new H;d=e.ju;i=g.length;if(d>=0&&d<=(i-0|0)){h.jv=K(f.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
Jr=a=>{let b,c,d,e,f,g;b=a.jB;c=a.jI;d=(b-c|0)/2|0;if(a.kn!==Ci){e=new NT;f=a.kG+c|0;c=a.kO;e.jT=(-1);e.j0=d;e.jB=d;e.jI=0;e.jB=d;e.ph=f;e.n$=a;e.sA=c;return e;}e=new PI;b=a.kG+c|0;g=a.kO;e.jT=(-1);e.j0=d;e.jB=d;e.jI=0;e.jB=d;e.ph=b;e.n$=a;e.sA=g;return e;},
AOb=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.jB){c=a.kk.data;b=a.kG+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.kn!==Ci)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new I;d=a.jB-3|0;i=new J;i.jw=G(16);F(i,i.ju,A(515));L(i,i.ju,b,10);F(i,i.ju,A(507));L(i,i.ju,d,10);d=i.ju;Bd(i,d,d+1|0);c=i.jw;j=c.data;j[d]=41;k=new H;d=i.ju;e=j.length;if(d>=0&&d<=(e-0|0)){k.jv=K(c.data,0,d);h.jx=1;h.jy=1;h.jz=k;B(h);}h=new I;h.jx=1;h.jy=1;Bo(h);B(h);},
ADB=(a,b,c)=>{let d,e,f,g,h,i;if(a.kO){d=new FB;d.jx=1;d.jy=1;B(d);}if(b>=0&&(b+3|0)<a.jB){if(a.kn!==Ci){e=a.kk.data;b=a.kG+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.kk.data;b=a.kG+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new I;c=a.jB-3|0;f=new J;f.jw=G(16);F(f,f.ju,A(515));L(f,f.ju,b,10);F(f,f.ju,A(507));L(f,f.ju,c,10);c=f.ju;Bd(f,c,c+1|0);e=f.jw;g=e.data;g[c]=41;h=new H;c=f.ju;i=g.length;if(c>=
0&&c<=(i-0|0)){h.jv=K(e.data,0,c);d.jx=1;d.jy=1;d.jz=h;B(d);}d=new I;d.jx=1;d.jy=1;B(d);},
GC=a=>{let b,c,d,e,f,g;b=a.jB;c=a.jI;d=(b-c|0)/4|0;if(a.kn!==Ci){e=new Oi;f=a.kG+c|0;c=a.kO;e.jT=(-1);e.j0=d;e.jB=d;e.jI=0;e.jB=d;e.oX=f;e.oW=a;e.s2=c;return e;}e=new R_;b=a.kG+c|0;g=a.kO;e.jT=(-1);e.j0=d;e.jB=d;e.jI=0;e.jB=d;e.oX=b;e.oW=a;e.s2=g;return e;},
EO=a=>{let b,c,d,e,f,g;b=a.jB;c=a.jI;d=(b-c|0)/4|0;if(a.kn!==Jp){e=new N4;f=a.kG+c|0;c=a.kO;e.jT=(-1);e.j0=d;e.jB=d;e.jI=0;e.jB=d;e.oQ=f;e.oc=a;e.tR=c;return e;}e=new QA;b=a.kG+c|0;g=a.kO;e.jT=(-1);e.j0=d;e.jB=d;e.jI=0;e.jB=d;e.oQ=b;e.oc=a;e.tR=g;return e;},
ASd=a=>{return a.kk.data;};
let AIJ=E();
let Si=E(0);
function Kq(){let a=this;C.call(a);a.uU=null;a.mt=0;a.mr=0;a.o0=null;a.pJ=null;a.vo=0;a.oy=0;}
let APk=0;
let AAB=(a,b,c,d,e)=>{a.mt=0;a.mr=0;a.oy=0;a.uU=b;a.pJ=c;a.o0=d;a.vo=e;if(c!==null){b=TR(a,c);a.pJ=b;c=b.kE;a.mt=c===null?b.ls:c.lm;a.mr=c===null?b.lw:c.ll;if(d===null)a.o0=c===null?Fc:HL(c.kZ);}},
F6=(a,b,c,d)=>{let e=new Kq();AAB(e,a,b,c,d);return e;},
O_=a=>{let b,c;if(a.oy){b=new Q;b.jx=1;b.jy=1;b.jz=A(516);B(b);}if(a.pJ===null){b=TR(a,Fq(a.uU));a.pJ=b;c=b.kE;a.mt=c===null?b.ls:c.lm;a.mr=c===null?b.lw:c.ll;if(a.o0===null)a.o0=c===null?Fc:HL(c.kZ);}a.oy=1;},
TR=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Bi===null&&APk){c=b.kE;d=c===null?b.ls:c.lm;e=c===null?b.lw:c.ll;f=KF(d);g=KF(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new Fk;c=b.kE;I9(h,f,g,c===null?Fc:HL(c.kZ));c=h.kE;if(c===null){ET(b);Jv(h,b.nB,0,0,d,e,0,0,d,e);}else{i=b.kE.lj;j=c.lj;Jf(i,j,0,0,d,e,0,0,d,e);}if(b.nQ){c=new Q;c.jx=1;c.jy=1;c.jz=A(57);B(c);}Ei();Gt(Fr,b.o3);c=b.kE;if(c!==null)HD(c.lj);b.nQ=1;return h;};
function Fk(){let a=this;C.call(a);a.ls=0;a.lw=0;a.nB=null;a.lf=null;a.o3=0;a.py=null;a.wo=0;a.wq=0;a.ws=0;a.wr=0.0;a.rj=null;a.qc=null;a.wc=null;a.yw=null;a.oZ=null;a.pX=null;a.uv=0;a.kE=null;a.nQ=0;}
let KV=null;
let Gb=()=>{Gb=BG(Fk);AGS();};
let W$=(a,b)=>{let c,d,e,f,g,h,i,j,k;Gb();a.wo=255;a.wq=255;a.ws=255;a.rj=L4(255,255,255,a.wr);a.qc=JV;a.wc=L7;a.uv=0;c=b.tz;d=b.t$.ro;e=B3(d,c);d=e<0?null:d.kD.data[e];if(CV.mY.tp){f=ALe(d.mO);a.kE=AIA(f,0,f.data.length,0);JD(a,(-1),(-1),null,null);}else{JD(a,(-1),(-1),d.tq,null);if(a.oZ===null){d=new Q;g=b.tz;b=new J;b.jw=G(16);F(b,b.ju,A(517));e=b.ju;if(g===null)g=A(2);F(b,e,g);F(b,b.ju,A(518));h=new H;i=b.jw;f=i.data;j=b.ju;k=f.length;if(j>=0&&j<=(k-0|0)){h.jv=K(i.data,0,j);d.jx=1;d.jy=1;d.jz=h;B(d);}b=
new I;b.jx=1;b.jy=1;B(b);}}},
Fq=a=>{let b=new Fk();W$(b,a);return b;},
I9=(a,b,c,d)=>{Gb();a.wo=255;a.wq=255;a.ws=255;a.rj=L4(255,255,255,a.wr);a.qc=JV;a.wc=L7;a.uv=0;JD(a,b,c,null,null);},
ASu=(a,b,c)=>{let d=new Fk();I9(d,a,b,c);return d;},
JD=(a,b,c,d,e)=>{let f,g;if(e!==null){a.pX=e;a.ls=e.getWidth();a.lw=e.getHeight();}else if(d===null){a.ls=b;a.lw=c;}else{a.oZ=d;a.ls=d.width;a.lw=d.height;}if(C1){d=new CJ;f=BE(4);d.jT=(-1);d.j0=4;d.jB=4;d.kn=Ci;d.kG=0;d.kk=f;d.jI=0;d.jB=4;d.lo=1;d.kO=0;d.kn=C3();}else{f=BE(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new CJ;g=0+c|0;d.jT=(-1);d.j0=c;d.jB=c;d.kn=Ci;d.kG=0;d.kk=f;d.jI=0;d.jB=g;d.lo=0;d.kO=0;}else{d=new I;d.jx=1;d.jy=1;Bo(d);B(d);}}a.py=d;Ei();c=ML;ML=c+1|0;a.o3=c;ADB(d,0,c);B2(Fr,a.o3,a);},
AFy=a=>{let b,c;EJ();b=FP.mK.document.createElement("canvas");a.nB=b;c=a.ls;b.width=c;b=a.nB;c=a.lw;b.height=c;b=a.nB.getContext("2d");a.lf=b;Gb();c=Bt(E1.jJ);b.globalCompositeOperation=c;},
L4=(b,c,d,e)=>{let f,g,h,i;Gb();f=new J;f.jw=G(16);F(f,f.ju,A(519));L(f,f.ju,b,10);b=f.ju;Bd(f,b,b+1|0);f.jw.data[b]=44;L(f,f.ju,c,10);c=f.ju;Bd(f,c,c+1|0);f.jw.data[c]=44;L(f,f.ju,d,10);c=f.ju;Bd(f,c,c+1|0);f.jw.data[c]=44;Hn(f,f.ju,e);d=f.ju;Bd(f,d,d+1|0);g=f.jw;h=g.data;h[d]=41;i=new H;c=f.ju;d=h.length;if(c>=0&&c<=(d-0|0)){i.jv=K(g.data,0,c);return i;}f=new I;f.jx=1;f.jy=1;B(f);},
ET=a=>{let b,c;if(a.nB===null){AFy(a);if(a.oZ!==null){b=a.lf;c=Bt(K2.lQ);b.globalCompositeOperation=c;b=a.lf;c=a.oZ;b.drawImage(c,0.0,0.0);b=a.lf;c=Bt(E1.lQ);b.globalCompositeOperation=c;}if(a.pX!==null){c=a.lf;b=Bt(K2.lQ);c.globalCompositeOperation=b;b=a.lf;c=a.pX;b.drawImage(c,0.0,0.0);b=a.lf;c=Bt(E1.lQ);b.globalCompositeOperation=c;}}},
Jv=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;ET(a);if(a.qc===IE){a:{k=a.lf;l=Bt(KV);k.fillStyle=l;k=a.lf;l=Bt(KV);k.strokeStyle=l;k=a.lf;l="destination-out";k.globalCompositeOperation=l;a.lf.beginPath();m=a.lf;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=KS;ET(a);KX();switch(Ng.data[k.jE]){case 1:break;case 2:a.lf.stroke();break a;default:break a;}a.lf.fill();}a.lf.closePath();r=a.lf;k=Bt(a.rj);r.fillStyle=k;r=a.lf;l=Bt(a.rj);r.strokeStyle=l;r=a.lf;k=Bt(E1.lQ);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.lf;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.yw=null;},
AGS=()=>{KV=L4(255,255,255,1.0);};
let G6=E(GO);
let AU$=a=>{let b,c;b=a.jI;if(b<a.jB){a.jI=b+1|0;return a.ii(b);}c=new Mx;c.jx=1;c.jy=1;B(c);},
DZ=(a,b)=>{let c,d;if(a.is()){c=new FB;c.jx=1;c.jy=1;B(c);}d=a.jI;if(d<a.jB){a.jI=d+1|0;a.iC(d,b);return a;}c=new Il;c.jx=1;c.jy=1;B(c);},
EM=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jB)return a.ii(b);c=new I;d=a.jB;e=new J;e.jw=G(16);F(e,e.ju,A(515));L(e,e.ju,b,10);F(e,e.ju,A(507));L(e,e.ju,d,10);d=e.ju;Bd(e,d,d+1|0);f=e.jw;g=f.data;g[d]=41;h=new H;d=e.ju;i=g.length;if(d>=0&&d<=(i-0|0)){h.jv=K(f.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
UD=(a,b,c)=>{let d,e,f,g,h,i;if(a.is()){d=new FB;d.jx=1;d.jy=1;B(d);}if(b>=0&&b<a.jB){a.iC(b,c);return a;}d=new I;c=a.jB;e=new J;e.jw=G(16);F(e,e.ju,A(515));L(e,e.ju,b,10);F(e,e.ju,A(507));L(e,e.ju,c,10);c=e.ju;Bd(e,c,c+1|0);f=e.jw;g=f.data;g[c]=41;h=new H;c=e.ju;i=g.length;if(c>=0&&c<=(i-0|0)){h.jv=K(f.data,0,c);d.jx=1;d.jy=1;d.jz=h;B(d);}d=new I;d.jx=1;d.jy=1;Bo(d);B(d);},
AT$=a=>{return a.is();};
function FX(){let a=this;G6.call(a);a.pG=0;a.oB=0;a.on=null;}
let AJP=(a,b)=>{return a.on.data[b+a.oB|0];},
AHD=(a,b,c)=>{a.on.data[b+a.oB|0]=c;},
V4=a=>{return a.pG;};
let GW=E(D0);
let Q_=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jB)return a.iD(b);c=new I;d=a.jB;e=new J;e.jw=G(16);F(e,e.ju,A(515));L(e,e.ju,b,10);F(e,e.ju,A(507));L(e,e.ju,d,10);d=e.ju;Bd(e,d,d+1|0);f=e.jw;g=f.data;g[d]=41;h=new H;d=e.ju;i=g.length;if(d>=0&&d<=(i-0|0)){h.jv=K(f.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
M0=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.is()){d=new FB;d.jx=1;d.jy=1;B(d);}if(b>=0&&b<a.jB){a.it(b,c);return a;}d=new I;e=a.jB;f=new J;f.jw=G(16);F(f,f.ju,A(515));L(f,f.ju,b,10);F(f,f.ju,A(507));L(f,f.ju,e,10);e=f.ju;Bd(f,e,e+1|0);g=f.jw;h=g.data;h[e]=41;i=new H;e=f.ju;j=h.length;if(e>=0&&e<=(j-0|0)){i.jv=K(g.data,0,e);d.jx=1;d.jy=1;d.jz=i;B(d);}d=new I;d.jx=1;d.jy=1;Bo(d);B(d);},
ATa=a=>{return a.is();};
function HH(){let a=this;GW.call(a);a.qd=0;a.pF=0;a.pb=null;}
let ALk=(a,b)=>{return a.pb.data[b+a.pF|0];},
AJ5=(a,b,c)=>{a.pb.data[b+a.pF|0]=c;},
AKo=a=>{return a.qd;};
let I8=E(Bx);
let IE=null,JV=null,AIM=null;
let AD9=()=>{let b,c;b=new I8;b.jJ=A(520);b.jE=0;IE=b;c=new I8;c.jJ=A(521);c.jE=1;JV=c;AIM=P(I8,[b,c]);};
let HS=E(Bx);
let WO=null,L7=null,ANC=null;
let ANk=()=>{let b,c;b=new HS;b.jJ=A(522);b.jE=0;WO=b;c=new HS;c.jJ=A(523);c.jE=1;L7=c;ANC=P(HS,[b,c]);};
let JS=E();
function Ul(){let a=this;JS.call(a);a.t$=null;a.tz=null;a.xq=null;}
let ADo=(a,b,c,d)=>{let e,f,g,h;if(d!==EX&&d!==P5&&d!==St){b=new Q;c=new J;c.jw=G(16);F(c,c.ju,A(524));F(c,c.ju,d===null?A(2):d.jJ);F(c,c.ju,A(525));d=new H;e=c.jw;f=e.data;g=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){d.jv=K(e.data,0,g);b.jx=1;b.jy=1;b.jz=d;B(b);}b=new I;b.jx=1;b.jy=1;B(b);}a.t$=b;b=Mg(c,A(526),A(106));if(ACi(b,A(106)))b=Cu(b,0,b.jv.length-1|0);a.tz=b;a.xq=d;},
Gj=(a,b,c)=>{let d=new Ul();ADo(d,a,b,c);return d;};
function Lj(){let a=this;C.call(a);a.lj=0;a.lm=0;a.ll=0;a.kZ=0;a.pz=null;a.qE=null;}
let AAE=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=U(4);a.pz=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.qE=AOx(g,h,c,d);b=a.pz.data;a.lj=b[0];a.lm=b[1];a.ll=b[2];c=b[3];a.kZ=c;if(e&&e!=c)AAg(a,e);},
AIA=(a,b,c,d)=>{let e=new Lj();AAE(e,a,b,c,d);return e;},
ART=(a,b,c,d)=>{let e;e=U(4);a.pz=e;a.qE=AMs(e.data,b,c,d);e=a.pz.data;a.lj=e[0];a.lm=e[1];a.ll=e[2];a.kZ=e[3];},
ACZ=(a,b,c)=>{let d=new Lj();ART(d,a,b,c);return d;},
AAg=(a,b)=>{let c,d,e,f,g;c=ACZ(a.lm,a.ll,b);LZ(c.lj,0);d=a.lm;e=a.ll;f=a.lj;g=c.lj;Jf(f,g,0,0,d,e,0,0,d,e);HD(a.lj);a.lj=c.lj;a.kZ=c.kZ;a.ll=c.ll;a.pz=c.pz;a.qE=c.qE;a.lm=c.lm;},
AOx=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
AMs=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
HD=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
Jf=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
LZ=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let Pb=E(0);
function K0(){let a=this;C.call(a);a.vD=0;a.lv=0;a.v6=0;a.ut=0;a.pU=0;a.m6=null;a.qh=null;a.yI=0;a.wj=0;a.u1=0;a.yk=0;a.l3=0;a.wX=0;a.s3=null;a.lF=null;a.sW=null;}
let RJ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.s3=CX();a.ut=b;a.wj=e;a.qh=f;g=YO(a,c,d,e);h=new II;h.qY=1;h.qD=0;f=new Bg;CH();h.vU=f;f=Qn(g);h.lA=Ed===null?RH(0,b,f):Rh(0,b,f);f=new Hc;f.nE=1;f.o9=0;f.sF=1;if(!C1){g=E8(0);d=g.data.length;i=new Jc;j=0+d|0;T8(i,d);i.jI=0;i.jB=j;i.qs=0;i.qN=0;i.p7=g;}else{k=new CJ;g=BE(0);BA(k);k.jT=(-1);k.j0=0;k.jB=0;k.kn=Ci;k.kG=0;k.kk=g;k.jI=0;k.jB=0;k.lo=1;k.kO=0;k.kn=C3();i=Jr(k);}f.nb=i;i.jB=i.jI;i.jI=0;i.jT=(-1);i=Bi;k=i.jC.createBuffer();d=i.lD;i.lD=d+1|0;B2(i.mp,d,B4(k));f.qW
=d;f.qi=35048;h.lx=f;h.pw=0;f=CV;i=Hz;if(f===null){i=i.mm.data[0];while(i!==null&&i.ml!==null){i=i.mx;}}else{k=f;if(!k.$id$){l=D8();k.$id$=l;}m=f.$id$;g=i.mm.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.ow==m){k=i.ml;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.mx;}}i=i===null?null:i.lW;if(i===null){i=new Bu;i.kr=1;i.jM=S(C,16);}BL(i,h);EW(Hz,f,i);a.m6=h;a.lF=B_(C$(b,(h.lA.iK()).mc/4|0));a.u1=(a.m6.lA.iK()).mc/4|0;g=(a.m6.lA.iK()).le.data;b=g.length;d=0;a:{while(d<b){if(g[d].l0==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.m6.lA.iK()).le.data;m=g.length;c=0;b:{while(c<m){if(g[c].l0==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.nh/4|0;}a.yk=b;g=(a.m6.lA.iK()).le.data;m=g.length;c=0;c:{while(c<m){if(g[c].l0==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.m6.lA.iK()).le.data;m=g.length;c=0;d:{while(c<m){if(g[c].l0==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.nh/4|0;}a.l3=b;g=(a.m6.lA.iK()).le.data;m=g.length;c=0;e:{while(c<m){if(g[c].l0==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.m6.lA.iK()).le.data;m
=g.length;c=0;f:{while(c<m){if(g[c].l0==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.nh/4|0;}a.wX=b;a.sW=S(H,e);m=0;g:{while(m<e){g=a.sW;f=new J;f.jw=G(16);F(f,f.ju,A(527));L(f,f.ju,m,10);i=new H;n=f.jw;o=n.data;c=f.ju;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.jv=K(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new I;f.jx=1;f.jy=1;B(f);},
AGe=(a,b,c,d,e)=>{let f=new K0();RJ(f,a,b,c,d,e);return f;},
YO=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bu;e.kr=1;e.jM=S(C,16);f=new DE;f.l0=1;f.lI=3;f.lY=5126;f.l9=0;f.l5=A(467);f.nw=0;f.oA=DQ(1);BL(e,f);if(b){g=new DE;g.l0=8;g.lI=3;g.lY=5126;g.l9=0;g.l5=A(528);g.nw=0;g.oA=DQ(8);BL(e,g);}if(c){g=new DE;g.l0=4;g.lI=4;g.lY=5121;g.l9=1;g.l5=A(468);g.nw=0;g.oA=DQ(4);BL(e,g);}h=0;while(true){if(h>=d){b=e.jA;i=S(DE,b);j=i.data;h=0;while(true){c=Cf(h,b);if(c>=0)break;if(c>=0){f=new I;g=new J;g.jw=G(16);F(g,g.ju,A(18));L(g,g.ju,h,10);F(g,g.ju,A(19));b=e.jA;L(g,g.ju,b,10);e=new H;i
=g.jw;j=i.data;c=g.ju;d=j.length;if(c>=0&&c<=(d-0|0)){e.jv=K(i.data,0,c);f.jx=1;f.jy=1;f.jz=e;B(f);}e=new I;e.jx=1;e.jy=1;B(e);}j[h]=e.jM.data[h];h=h+1|0;}return i;}g=new DE;k=new J;k.jw=G(16);F(k,k.ju,A(529));L(k,k.ju,h,10);f=new H;i=k.jw;j=i.data;c=k.ju;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.jv=K(i.data,0,c);g.l0=16;g.lI=2;g.lY=5126;g.l9=0;g.l5=f;g.nw=0;g.oA=DQ(16);BL(e,g);h=h+1|0;}e=new I;e.jx=1;e.jy=1;B(e);},
De=(a,b,c,d)=>{let e,f;e=a.lv;f=a.lF.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.v6=0;a.lv=e+a.u1|0;a.pU=a.pU+1|0;},
Fw=a=>{let b,c,d,e,f,g,h;if(!a.pU)return;b=a.qh;c=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}c.g8(b.l6);c=a.qh;d=a.s3;HO();e=IF(c,A(530),Hr);b=Bi;if(c.kl){Cz(c,c.k_,c.lb);c.kl=0;}PV(b,e,1,0,d.kv,0);f=0;while(f<a.wj){b=a.qh;c=a.sW.data[f];d=Bi;if(b.kl){Cz(b,b.k_,b.lb);b.kl=0;}d.hg(IF(b,c,Hr),f);f=f+1|0;}b=a.m6;g=a.lF;h=a.lv;b.lA.g9(g,0,h);b=a.m6;R2(b,a.qh,a.vD,0,b.lx.hJ()<=0?b.lA.iL():b.lx.hF(),b.qY);a.v6=0;a.lv=0;a.pU=0;},
VU=(b,c,d)=>{let e,f,g,h,i,j,k;e=new J;e.jw=G(16);F(e,e.ju,A(531));f=!b?A(61):A(532);F(e,e.ju,f);f=!c?A(61):A(533);F(e,e.ju,f);f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);i=0;while(true){if(i>=d){e=new J;e.jw=G(16);F(e,e.ju,f);F(e,e.ju,A(534));f=!c?A(61):A(535);F(e,e.ju,f);f=new H;g=e.jw;h=g.data;b=e.ju;j=h.length;if(b>=0&&b<=(j-0|0)){f.jv=K(g.data,0,b);i=0;while(true){if(i>=d){e=new J;e.jw=G(16);F(e,e.ju,f);F(e,e.ju,A(536));f=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i
>=0&&i<=(j-0|0)){f.jv=K(g.data,0,i);if(c){e=new J;e.jw=G(16);F(e,e.ju,f);F(e,e.ju,A(537));f=new H;g=e.jw;h=g.data;c=e.ju;i=h.length;if(c>=0&&c<=(i-0|0))f.jv=K(g.data,0,c);else{e=new I;e.jx=1;e.jy=1;B(e);}}i=0;while(true){if(i>=d){e=new J;e.jw=G(16);F(e,e.ju,f);F(e,e.ju,A(538));f=new H;g=e.jw;h=g.data;c=e.ju;d=h.length;if(c>=0&&c<=(d-0|0)){f.jv=K(g.data,0,c);return f;}e=new I;e.jx=1;e.jy=1;B(e);}e=new J;e.jw=G(16);F(e,e.ju,f);F(e,e.ju,A(539));L(e,e.ju,i,10);F(e,e.ju,A(540));F(e,e.ju,A(529));L(e,e.ju,i,10);F(e,
e.ju,A(541));f=new H;g=e.jw;h=g.data;c=e.ju;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.jv=K(g.data,0,c);i=i+1|0;}e=new I;e.jx=1;e.jy=1;B(e);}e=new I;e.jx=1;e.jy=1;B(e);}e=new J;e.jw=G(16);F(e,e.ju,f);F(e,e.ju,A(542));L(e,e.ju,i,10);F(e,e.ju,A(541));f=new H;g=e.jw;h=g.data;j=e.ju;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.jv=K(g.data,0,j);i=i+1|0;}e=new I;e.jx=1;e.jy=1;B(e);}e=new I;e.jx=1;e.jy=1;B(e);}e=new J;e.jw=G(16);F(e,e.ju,f);F(e,e.ju,A(543));L(e,e.ju,i,10);F(e,e.ju,A(541));f=new H;g=e.jw;h=g.data;j
=e.ju;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.jv=K(g.data,0,j);i=i+1|0;}e=new I;e.jx=1;e.jy=1;B(e);}e=new I;e.jx=1;e.jy=1;B(e);},
AH9=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(544);if(c){f=new J;f.jw=G(16);F(f,f.ju,e);F(f,f.ju,A(535));e=new H;g=f.jw;h=g.data;i=f.ju;j=h.length;if(i>=0&&i<=(j-0|0))e.jv=K(g.data,0,i);else{e=new I;e.jx=1;e.jy=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new J;f.jw=G(16);F(f,f.ju,e);F(f,f.ju,A(545));e=!c?A(546):A(547);F(f,f.ju,e);e=new H;h=f.jw;g=h.data;b=f.ju;c=g.length;if(b>=0&&b<=(c-0|0)){e.jv=K(h.data,0,b);if(d>0){f=new J;f.jw=G(16);F(f,f.ju,e);F(f,f.ju,A(548));e=new H;g=f.jw;h=g.data;c=f.ju;i=h.length;if(c>=0&&c<=(i-
0|0))e.jv=K(g.data,0,c);else{e=new I;e.jx=1;e.jy=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new J;f.jw=G(16);F(f,f.ju,e);F(f,f.ju,A(549));e=new H;g=f.jw;h=g.data;c=f.ju;d=h.length;if(c>=0&&c<=(d-0|0)){e.jv=K(g.data,0,c);return e;}e=new I;e.jx=1;e.jy=1;B(e);}if(i!=c){f=new J;f.jw=G(16);F(f,f.ju,e);F(f,f.ju,A(550));L(f,f.ju,i,10);F(f,f.ju,A(551));L(f,f.ju,i,10);F(f,f.ju,A(552));e=new H;g=f.jw;h=g.data;j=f.ju;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.jv=K(g.data,0,j);}else{f=new J;f.jw=G(16);F(f,f.ju,e);F(f,
f.ju,A(550));L(f,f.ju,i,10);F(f,f.ju,A(551));L(f,f.ju,i,10);F(f,f.ju,A(489));e=new H;g=f.jw;h=g.data;j=f.ju;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.jv=K(g.data,0,j);}i=i+1|0;}e=new I;e.jx=1;e.jy=1;B(e);}e=new I;e.jx=1;e.jy=1;B(e);}e=new I;e.jx=1;e.jy=1;B(e);}f=new J;f.jw=G(16);F(f,f.ju,e);F(f,f.ju,A(542));L(f,f.ju,i,10);F(f,f.ju,A(541));e=new H;g=f.jw;h=g.data;j=f.ju;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.jv=K(g.data,0,j);f=new J;f.jw=G(16);F(f,f.ju,e);F(f,f.ju,A(553));L(f,f.ju,i,10);F(f,
f.ju,A(541));e=new H;g=f.jw;h=g.data;j=f.ju;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.jv=K(g.data,0,j);i=i+1|0;}e=new I;e.jx=1;e.jy=1;B(e);}e=new I;e.jx=1;e.jy=1;B(e);};
let HG=E(GQ);
let AL5=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jB)return a.iM(b);c=new I;d=a.jB;e=new J;e.jw=G(16);F(e,e.ju,A(515));L(e,e.ju,b,10);F(e,e.ju,A(507));L(e,e.ju,d,10);d=e.ju;Bd(e,d,d+1|0);f=e.jw;g=f.data;g[d]=41;h=new H;d=e.ju;i=g.length;if(d>=0&&d<=(i-0|0)){h.jv=K(f.data,0,d);c.jx=1;c.jy=1;c.jz=h;B(c);}c=new I;c.jx=1;c.jy=1;Bo(c);B(c);},
AT3=a=>{return a.is();};
function Jc(){let a=this;HG.call(a);a.qN=0;a.qs=0;a.p7=null;}
let ADq=(a,b)=>{return a.p7.data[b+a.qs|0];},
AFX=(a,b,c)=>{a.p7.data[b+a.qs|0]=c;},
AA_=a=>{return a.qN;};
let AJF=E();
function Ek(){Bx.call(this);this.nn=0;}
let Fi=null,AIr=null,AKZ=null,AHb=null,AKE=null,APQ=null,ADZ=null,AEn=null;
let Y$=()=>{let b,c,d,e,f,g,h;b=new Ek;b.jJ=A(554);b.jE=0;b.nn=9728;Fi=b;c=new Ek;c.jJ=A(555);c.jE=1;c.nn=9729;AIr=c;d=new Ek;d.jJ=A(556);d.jE=2;d.nn=9987;AKZ=d;e=new Ek;e.jJ=A(557);e.jE=3;e.nn=9984;AHb=e;f=new Ek;f.jJ=A(558);f.jE=4;f.nn=9985;AKE=f;g=new Ek;g.jJ=A(559);g.jE=5;g.nn=9986;APQ=g;h=new Ek;h.jJ=A(560);h.jE=6;h.nn=9987;ADZ=h;AEn=P(Ek,[b,c,d,e,f,g,h]);};
function HB(){Bx.call(this);this.qI=0;}
let AOJ=null,Fs=null,AIR=null,AO4=null;
let AEX=()=>{let b,c,d;b=new HB;b.jJ=A(561);b.jE=0;b.qI=33648;AOJ=b;c=new HB;c.jJ=A(562);c.jE=1;c.qI=33071;Fs=c;d=new HB;d.jJ=A(563);d.jE=2;d.qI=10497;AIR=d;AO4=P(HB,[b,c,d]);};
let PZ=E();
let ARE=(a,b)=>{b=a.S(b);Bv();return b===null?null:b instanceof Fp()&&b instanceof Eq?(b[Bl]===true?b:b.j6):b;},
Z2=a=>{return a.eP();};
function Hw(){let a=this;G6.call(a);a.oW=null;a.s2=0;a.oX=0;}
let AG9=a=>{return a.s2;};
let Oi=E(Hw);
let ADi=(a,b)=>{let c;c=a.oW.kk.data;b=a.oX+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
V2=(a,b,c)=>{let d;d=a.oW.kk.data;b=a.oX+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let R_=E(Hw);
let AOf=(a,b)=>{let c;c=a.oW.kk.data;b=a.oX+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
Yn=(a,b,c)=>{let d;d=a.oW.kk.data;b=a.oX+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function GY(){let a=this;GW.call(a);a.oc=null;a.tR=0;a.oQ=0;}
let AKD=a=>{return a.tR;},
AL2=a=>{return a.oc.kk.data;};
let N4=E(GY);
let AHg=(a,b)=>{let c;c=a.oc.kk.data;b=a.oQ+(b*4|0)|0;return KC((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
ALW=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:PY(c);e=a.oc.kk.data;b=a.oQ+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let QA=E(GY);
let Wf=(a,b)=>{let c;c=a.oc.kk.data;b=a.oQ+(b*4|0)|0;return KC(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AG6=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:PY(c);e=a.oc.kk.data;b=a.oQ+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function GM(){let a=this;HG.call(a);a.n$=null;a.sA=0;a.ph=0;}
let AEI=a=>{return a.sA;},
AMz=a=>{return a.n$.kk.data;};
let NT=E(GM);
let AAS=(a,b)=>{let c;c=a.n$.kk.data;b=a.ph+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
ZX=(a,b,c)=>{let d;d=a.n$.kk.data;b=a.ph+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let PI=E(GM);
let AJC=(a,b)=>{let c;c=a.n$.kk.data;b=a.ph+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
AAU=(a,b,c)=>{let d;d=a.n$.kk.data;b=a.ph+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let KP=E(Bz);
let FB=E(KP);
let Mx=E(Bz);
let FC=E(Bx);
let P5=null,EX=null,AIb=null,ACW=null,St=null,AMi=null;
let ACm=()=>{let b,c,d,e,f;b=new FC;b.jJ=A(564);b.jE=0;P5=b;c=new FC;c.jJ=A(565);c.jE=1;EX=c;d=new FC;d.jJ=A(566);d.jE=2;AIb=d;e=new FC;e.jJ=A(567);e.jE=3;ACW=e;f=new FC;f.jJ=A(568);f.jE=4;St=f;AMi=P(FC,[b,c,d,e,f]);};
let Ew=E(Bx);
let QX=null,AMW=null,Qw=null,Tn=null,RA=null,Qj=null,Fc=null,ALa=null;
let HL=b=>{let c,d,e,f,g,h,i;if(b==1)return QX;if(b==2)return Qw;if(b==5)return Tn;if(b==6)return RA;if(b==3)return Qj;if(b==4)return Fc;c=new Q;d=new J;d.jw=G(16);F(d,d.ju,A(569));L(d,d.ju,b,10);e=new H;f=d.jw;g=f.data;h=d.ju;i=g.length;if(h>=0&&h<=(i-0|0)){e.jv=K(f.data,0,h);c.jx=1;c.jy=1;c.jz=e;B(c);}c=new I;c.jx=1;c.jy=1;B(c);},
V3=()=>{let b,c,d,e,f,g,h;b=new Ew;b.jJ=A(196);b.jE=0;QX=b;c=new Ew;c.jJ=A(570);c.jE=1;AMW=c;d=new Ew;d.jJ=A(571);d.jE=2;Qw=d;e=new Ew;e.jJ=A(572);e.jE=3;Tn=e;f=new Ew;f.jJ=A(573);f.jE=4;RA=f;g=new Ew;g.jJ=A(574);g.jE=5;Qj=g;h=new Ew;h.jJ=A(575);h.jE=6;Fc=h;ALa=P(Ew,[b,c,d,e,f,g,h]);};
let AB7=E();
let Lh=0,IH=null,IA=null;
let AIV=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:PY(b);c.us=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.sL=0;c.sy=0;return;}if(f)d=e|8388608;else{d=e<<1;while(DK(CQ(R(d),R(8388608)),B6)){d=d<<1;f=f+(-1)|0;}}g=IA;h=AKI(g,0,g.data.length,f);if(h<0)h= -h|0;g=IA.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=IH.data[e];j=CQ(R(d),D(4294967295, 0));k=Be(Bb(Y(j,CQ(R(e),D(4294967295, 0))),32-i|0));if(k<Lh){while(EA(k,Lh)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=IA.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Be(Bb(Y(j,CQ(R(IH.data[e]),D(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=IH.data;f=h+1|0;e=g[f];m=i-1|0;n=Y(CQ(R(l),D(4294967295, 0)),CQ(R(e),D(4294967295, 0)));e=32-m|0;o=Be(Bb(n,e));p=Be(Bb(Y(CQ(R(d-1|0),D(4294967295, 0)),CQ(R(g[f]),D(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(EA(DM(k,r),DM(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(EA(DM(k,l),DM(o,l))>=0)break;m=l;}s=EA(q,m);d=s>0?C$(DM(k,q),q):s<0?C$(DM(k,m),m)+m|0:C$(DM((k+(m/2|0)|0),m),m);if(EP(R(d),R(1000000000))>=0)while(true){h=h+1|
0;d=DM(d,10);if(EA(d,1000000000)<0)break;}else if(EA(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.sL=d;c.sy=h-50|0;},
ACE=()=>{Lh=DM((-1),10);IH=H6([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);IA=H6([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let IC=E(Bx);
let KS=null,OW=null,T$=null;
let ARN=()=>{let b,c;b=new IC;b.jJ=A(576);b.jE=0;KS=b;c=new IC;c.jJ=A(577);c.jE=1;OW=c;T$=P(IC,[b,c]);};
function Di(){Bx.call(this);this.lQ=null;}
let K2=null,ZC=null,AAe=null,WJ=null,ANF=null,ARX=null,ZR=null,AFr=null,AG4=null,E1=null,AMd=null,AMm=null;
let ADX=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new Di;b.jJ=A(578);b.jE=0;b.lQ=A(579);K2=b;c=new Di;c.jJ=A(580);c.jE=1;c.lQ=A(581);ZC=c;d=new Di;d.jJ=A(582);d.jE=2;d.lQ=A(583);AAe=d;e=new Di;e.jJ=A(584);e.jE=3;e.lQ=A(585);WJ=e;f=new Di;f.jJ=A(586);f.jE=4;f.lQ=A(587);ANF=f;g=new Di;g.jJ=A(588);g.jE=5;g.lQ=A(589);ARX=g;h=new Di;h.jJ=A(590);h.jE=6;h.lQ=A(591);ZR=h;i=new Di;i.jJ=A(592);i.jE=7;i.lQ=A(593);AFr=i;j=new Di;j.jJ=A(594);j.jE=8;j.lQ=A(595);AG4=j;k=new Di;k.jJ=A(596);k.jE=9;k.lQ=A(597);E1=k;l=new Di;l.jJ=A(598);l.jE
=10;l.lQ=A(599);AMd=l;AMm=P(Di,[b,c,d,e,f,g,h,i,j,k,l]);};
let ALE=E(0);
let H9=E(Bx);
let N_=null,T0=null,AB8=null;
let AAn=()=>{let b,c;b=new H9;b.jJ=A(600);b.jE=0;N_=b;c=new H9;c.jJ=A(601);c.jE=1;T0=c;AB8=P(H9,[b,c]);};
let AKG=E();
let Ka=0;
let AMw=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!Ka){Pw(b,c,d,e);return;}f=G2;if(f!==MW&&f!==f&&f!==Me)ALU(b,c,d,e);else{g=BU;f=c.kE;if(f===null)h=6408;else a:{e=f.kZ;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Q;g=new J;g.jw=G(16);DT(g,g.ju,A(58));L(g,g.ju,e,10);f=new H;i=g.jw;j=i.data;d=g.ju;e=j.length;if(d>=0&&d<=(e-0|0)){f.jv=K(i.data,0,d);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}k=f===null?c.ls:f.lm;l=f===null
?c.lw:f.ll;if(f===null)m=6408;else b:{m=f.kZ;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Q;g=new J;BA(g);g.jw=G(16);ARc(g,g.ju,A(58));L(g,g.ju,m,10);f=new H;i=g.jw;j=i.data;d=g.ju;e=j.length;if(d>=0&&d<=(e-0|0)){f.jv=K(i.data,0,d);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}if(f===null)n=5121;else c:{n=f.kZ;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new Q;g=new J;g.jw
=G(16);DT(g,g.ju,A(58));L(g,g.ju,n,10);f=new H;i=g.jw;j=i.data;d=g.ju;e=j.length;if(d>=0&&d<=(e-0|0)){f.jv=K(i.data,0,d);c.jx=1;c.jy=1;c.jz=f;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}n=5121;}g.cn(b,0,h,k,l,0,m,n,c.py);Bi.iR(b);}},
ALU=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B5.oV.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B5.oV.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bi.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BJ;h.jO=g;i=h;g.classObject=i;}}if(h.jQ===null)h.jQ=W(h.jO.$meta.name);i=h.jQ;if(i===A(602))f=1;else if(!(A(602) instanceof H))f=0;else{g=A(602);f=i.jv!==g.jv?0:1;}if(!f&&Ed===null){Pw(b,c,d,e);break a;}}g=BU;i=c.kE;if(i===null)f=6408;else b:{e=i.kZ;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new Q;g=new J;g.jw=G(16);B$(g,g.ju,Cd(A(58)));L(g,g.ju,e,10);i=new H;j=g.jw;k=j.data;d=g.ju;e=k.length;if(d>=0&&d<=(e-0|0)){i.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}l=i===null?c.ls:i.lm;m=i===null?c.lw:i.ll;if(i===null)n=6408;else c:{n=i.kZ;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new Q;g=new J;g.jw
=G(16);DT(g,g.ju,A(58));L(g,g.ju,n,10);i=new H;j=g.jw;k=j.data;d=g.ju;e=k.length;if(d>=0&&d<=(e-0|0)){i.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}if(i===null)o=5121;else d:{o=i.kZ;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new Q;g=new J;g.jw=G(16);B$(g,g.ju,Cd(A(58)));L(g,g.ju,o,10);i=new H;j=g.jw;k=j.data;d=g.ju;e=k.length;if(d>=0&&d<=(e-0|0)){i.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=i;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}o=5121;}g.cn(b,
0,f,l,m,0,n,o,c.py);Bi.iR(b);}},
Pw=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=BU;g=c.kE;if(g===null)h=6408;else a:{i=g.kZ;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new Q;f=new J;f.jw=G(16);B$(f,f.ju,Cd(A(58)));L(f,f.ju,i,10);g=new H;j=f.jw;k=j.data;d=f.ju;e=k.length;if(d>=0&&d<=(e-0|0)){g.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}h=6406;}l=g===null?c.ls:g.lm;m=g===null?c.lw:g.ll;if(g===null)n=6408;else b:{n=g.kZ;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new Q;f=new J;f.jw=G(16);DT(f,f.ju,A(58));L(f,f.ju,n,10);g=new H;j=f.jw;k=j.data;d=f.ju;e=k.length;if(d>=0&&d<=(e-0|0)){g.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}if(g===null)o=5121;else c:{o=g.kZ;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new Q;f=new J;f.jw=G(16);B$(f,f.ju,Cd(A(58)));L(f,f.ju,o,10);g=new H;j=f.jw;k=j.data;d=f.ju;e
=k.length;if(d>=0&&d<=(e-0|0)){g.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}f.cn(b,0,h,l,m,0,n,o,c.py);if(Bi===null&&d!=e){c=new Q;c.jx=1;c.jy=1;c.jz=A(603);B(c);}f=c.kE;p=(f===null?c.ls:f.lm)/2|0;i=(f===null?c.lw:f.ll)/2|0;h=1;while(p>0&&i>0){f=new Fk;g=c.kE;I9(f,p,i,g===null?Fc:HL(g.kZ));g=IE;f.qc=g;q=f.kE;if(q===null){ET(f);g=f.lf;q=Bt(E1.jJ);g.globalCompositeOperation=q;}else{d=g!==g?1:0;LZ(q.lj,d);}g=c.kE;l=g===null?c.ls:g.lm;m=g===null?c.lw:g.ll;q=f.kE;if(q===null){ET(c);Jv(f,
c.nB,0,0,l,m,0,0,p,i);}else{r=g.lj;s=q.lj;Jf(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.nQ){f=new Q;f.jx=1;f.jy=1;f.jz=A(57);B(f);}Ei();Gt(Fr,c.o3);g=c.kE;if(g!==null)HD(g.lj);c.nQ=1;}c=BU;g=f.kE;if(g===null)d=6408;else d:{d=g.kZ;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new Q;f=new J;f.jw=G(16);B$(f,f.ju,Cd(A(58)));L(f,f.ju,d,10);g=new H;j=f.jw;k=j.data;d=f.ju;e=k.length;if(d>=0&&d<=(e-0|0)){g.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx
=1;c.jy=1;B(c);}d=6406;}e=g===null?f.ls:g.lm;p=g===null?f.lw:g.ll;if(g===null)l=6408;else e:{l=g.kZ;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new Q;f=new J;f.jw=G(16);DT(f,f.ju,A(58));L(f,f.ju,l,10);g=new H;j=f.jw;k=j.data;d=f.ju;e=k.length;if(d>=0&&d<=(e-0|0)){g.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.kZ;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new Q;f=new J;f.jw=G(16);B$(f,f.ju,Cd(A(58)));L(f,f.ju,m,10);g=new H;j=f.jw;k=j.data;d=f.ju;e=k.length;if(d>=0&&d<=(e-0|0)){g.jv=K(j.data,0,d);c.jx=1;c.jy=1;c.jz=g;B(c);}c=new I;c.jx=1;c.jy=1;B(c);}m=5121;}c.cn(b,h,d,e,p,0,l,m,f.py);c=f.kE;p=(c===null?f.ls:c.lm)/2|0;i=(c===null?f.lw:c.ll)/2|0;h=h+1|0;c=f;}},
AT7=()=>{Ka=1;};
let Su=E();
let Ng=null;
let KX=()=>{KX=BG(Su);ARH();};
let ARH=()=>{let b,c;b=U((T$.p()).data.length);c=b.data;Ng=b;c[KS.jE]=1;c[OW.jE]=2;};
let Il=E(Bz);
let TN=E();
let Qo=null;
let MX=()=>{MX=BG(TN);Xk();};
let AHf=(b,c,d,e)=>{MX();a:{b:{if(Qo===L5){if(B5.ky.width!=B5.ky.width)break b;if(B5.ky.height!=B5.ky.height)break b;}BU.ds(b,c,d,e);break a;}BU.ds(C$(b,B5.ky.width)/B5.ky.width|0,C$(c,B5.ky.height)/B5.ky.height|0,C$(d,B5.ky.width)/B5.ky.width|0,C$(e,B5.ky.height)/B5.ky.height|0);}},
Xk=()=>{Qo=L5;};
let AB_=E();
function Mf(){let a=this;C.call(a);a.pk=null;a.nj=null;}
let AOX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pk.readyState==4){if(a.pk.status==200){if(a.nj.m2.l7){if(BS===null){b=new CS;c=new Ct;c.k3=BE(32);b.lr=c;c=new J;BA(c);c.jw=G(16);b.k6=c;b.k5=G(32);b.k9=0;b.k$=Cl;BS=b;}b=a.nj.mZ;c=new J;c.jw=G(16);F(c,c.ju,A(604));d=c.ju;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jw;f=e.data;g
=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){b.jv=K(e.data,0,g);BT(Bt(b));BT("\n");}else{b=new I;b.jx=1;b.jy=1;Bo(b);B(b);}}b=a.nj;b.m_.iS(b.mZ,W(a.pk.responseText));}else if(a.pk.status!=404&&a.pk.status!=403){try{i=R(100);$p=1;continue _;}catch($$e){$$je=Bs($$e);if($$je instanceof DA){}else{throw $$e;}}b=a.nj;c=b.m2;d=b.oi;j=b.mZ;b=b.m_;if(c.l7){if(BS===null){k=new CS;l=new Ct;l.k3=BE(32);BA(k);k.lr=l;l=new J;DJ(l,16);k.k6=l;k.k5=G(32);k.k9=0;k.k$=Cl;BS=k;}k=new J;k.jw=G(16);F(k,k.ju,A(93));F(k,k.ju,j===null?A(2)
:j);l=new H;e=k.jw;f=e.data;h=k.ju;m=f.length;if(h>=0&&h<=(m-0|0)){l.jv=K(e.data,0,h);BT(Bt(l));BT("\n");}else{b=new I;X(b);B(b);}}c.kt=c.kt+1|0;k=new GG;k.m2=c;k.oi=d;k.mZ=j;k.m_=b;b=null;c=null;k.mj=new C;k.mi=1;k.mW=c;k.m$=b;g=CE;CE=g+1|0;k.m9=R(g);b=new D1;b.mX=k;El(b);}else{b=a.nj;b.m_.iT(b.mZ);}b=a.nj.m2;b.kt=b.kt-1|0;}return;case 1:a:{try{Kw(i);if(E$()){break _;}break a;}catch($$e){$$je=Bs($$e);if($$je instanceof DA){}else{throw $$e;}}}b=a.nj;c=b.m2;d=b.oi;j=b.mZ;b=b.m_;if(c.l7){if(BS===null){k=new CS;l
=new Ct;l.k3=BE(32);BA(k);k.lr=l;l=new J;DJ(l,16);k.k6=l;k.k5=G(32);k.k9=0;k.k$=Cl;BS=k;}k=new J;k.jw=G(16);F(k,k.ju,A(93));F(k,k.ju,j===null?A(2):j);l=new H;e=k.jw;f=e.data;h=k.ju;m=f.length;if(h>=0&&h<=(m-0|0)){l.jv=K(e.data,0,h);BT(Bt(l));BT("\n");}else{b=new I;X(b);B(b);}}c.kt=c.kt+1|0;k=new GG;k.m2=c;k.oi=d;k.mZ=j;k.m_=b;b=null;c=null;k.mj=new C;k.mi=1;k.mW=c;k.m$=b;g=CE;CE=g+1|0;k.m9=R(g);b=new D1;b.mX=k;El(b);b=a.nj.m2;b.kt=b.kt-1|0;return;default:E3();}}C2().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AEY=(a,b)=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOX(a,b);if(E$()){break _;}return;default:E3();}}C2().s(a,b,$p);};
let IY=E(Bx);
let L5=null,AIe=null,AB2=null;
let YW=()=>{let b,c;b=new IY;b.jJ=A(605);b.jE=0;L5=b;c=new IY;c.jJ=A(606);c.jE=1;AIe=c;AB2=P(IY,[b,c]);};
function GN(){Bx.call(this);this.rp=0;}
let AGt=null,Hv=null,QD=null,APD=null;
let AK1=()=>{let b,c,d;b=new GN;b.jJ=A(607);b.jE=0;b.rp=0;AGt=b;c=new GN;c.jJ=A(608);c.jE=1;c.rp=1;Hv=c;d=new GN;d.jJ=A(609);d.jE=2;d.rp=4;QD=d;APD=P(GN,[b,c,d]);};
function RR(){let a=this;C.call(a);a.pq=0;a.o4=0;a.mN=0;a.rf=B6;a.sQ=null;a.uI=null;a.wl=B6;a.uz=null;}
function P2(){let a=this;Dq.call(a);a.mq=null;a.yV=null;}
let LR=E(Eb);
let Jx=E(Eb);
let NY=E(Eb);
let Nh=E(0);
function Hb(){C.call(this);this.qF=0;}
let Rx=null,R1=null,PU=null;
let Dl=a=>{return a.qF;},
ASQ=()=>{let b;b=new Hb;b.qF=1;Rx=b;b=new Hb;b.qF=0;R1=b;PU=V(Ce);};
function Iz(){let a=this;C.call(a);a.nT=null;a.xh=0.0;a.p8=0;a.p1=null;a.xy=null;a.w5=null;a.vJ=null;a.yC=null;}
let ANB=null,ARL=null;
let MU=()=>{MU=BG(Iz);AMP();};
let ARt=(a,b,c,d)=>{let e;MU();a.xh=1.0;a.p8=0;if(!BY(b,Ur)){e=AEv(b,c);a.nT=e;b=new Q5;b.qp=a;b.mh=e;a.vJ=b;}else{e=new SB;Pu(e,b,c);e.o2=0;e.q6=E8(Ks((e.kX.data.length/5|0)*3|0)|0);b=new Rw;b.qp=a;b.mh=e;a.vJ=b;a.nT=e;}b=new Q3;c=a.nT;b.qp=a;b.mh=c;a.p1=b;b=new S1;b.qp=a;b.mh=c;e=new Gn;e.qG=1;e.qK=B_(16);b.xU=e;e=new Gn;e.qG=1;e.qK=B_(16);b.y1=e;a.xy=b;b=new QW;b.qp=a;b.mh=c;a.w5=b;a.yC=d;},
AMP=()=>{ANB=CX();ARL=B_(6);};
function Qs(){Iz.call(this);this.y2=null;}
function P0(){let a=this;Dq.call(a);a.mz=null;a.qy=null;a.qb=null;a.qm=null;}
let Yz=(a,b)=>{a.mz.mq.rf=DL(b);},
Wm=(a,b)=>{b=a.mz.mq;b.o4=1;b.mN=0;},
AH4=(a,b,c)=>{GF(a.qm,a.qy,a.qb,c);b=a.mz.mq;b.pq=1;b.mN=0;return 0;};
let ADp=E();
let Pf=E(0);
function Qy(){let a=this;C.call(a);a.wO=0;a.yc=0;a.xd=0.0;}
let Ur=E(0);
function GR(){let a=this;C.call(a);a.th=null;a.pl=null;a.mP=0.0;a.kX=null;a.k0=0;a.wB=0.0;a.uD=0.0;a.vq=0.0;a.sw=0;a.q7=null;}
let ABl=null;
let Md=()=>{Md=BG(GR);ACG();};
let Pu=(a,b,c)=>{Md();a.wB=1.0;a.uD=0.5;a.vq=0.0010000000474974513;a.sw=0;a.q7=null;a.th=b;a.kX=B_(2000);a.pl=c;Ia(a);a.mP=Fx(KG);},
AEv=(a,b)=>{let c=new GR();Pu(c,a,b);return c;},
ATK=(a,b)=>{let c;c=a.pl;a.pl=b;Ia(a);return c;},
Ia=a=>{let b,c,d,e,f;a:{b=a.pl;if(b!==null){c=0.5*(b.tO+b.tN);d=0.5*(b.tP+b.tL);e=0;while(true){f=a.kX.data;if(e>=f.length)break a;f[e+3|0]=c;f[e+4|0]=d;e=e+5|0;}}}},
AUU=(a,b)=>{let c,d;c=Fx(b);d=a.mP;a.mP=c;return d;},
AUD=(a,b)=>{let c;c=a.mP;a.mP=b;return c;},
ASF=a=>{return a.mP;},
AUN=a=>{return a.sw;},
AVd=a=>{return a.q7===null?0:1;},
ACa=a=>{a.k0=a.k0+4|0;},
AUF=a=>{RW(a,4);},
RW=(a,b)=>{let c,d;c=b*5|0;d=a.kX.data.length;if(c>d)a.iX(c);else if(((d-(20*a.k0|0)|0)/5|0)<b)a.hv();},
AGz=(a,b)=>{let c;a.hv();c=a.kX.data.length;while(b>c){c=c*2|0;}a.kX=B_(c);Ia(a);},
ASR=a=>{return (a.kX.data.length-(20*a.k0|0)|0)/5|0;},
AGK=a=>{let b,c;b=a.k0;if(!b)return;c=a.q7;if(c===null?0:1)c.iY();else{c=a.pl;if(c===null){c=new BX;c.jx=1;c.jy=1;c.jz=A(610);B(c);}AF9(a.th,c.oF,a.kX,0,5*b|0);}a.k0=0;},
ATh=a=>{return 5*a.k0|0;},
AT0=(a,b)=>{a.kX.data[(5*a.k0|0)+0|0]=b;},
ATn=(a,b)=>{a.kX.data[(5*a.k0|0)+1|0]=b;},
AUT=(a,b)=>{a.kX.data[(5*a.k0|0)+5|0]=b;},
ASw=(a,b)=>{a.kX.data[(5*a.k0|0)+6|0]=b;},
ASr=(a,b)=>{a.kX.data[(5*a.k0|0)+10|0]=b;},
AUZ=(a,b)=>{a.kX.data[(5*a.k0|0)+11|0]=b;},
ATf=(a,b)=>{a.kX.data[(5*a.k0|0)+15|0]=b;},
AUf=(a,b)=>{a.kX.data[(5*a.k0|0)+16|0]=b;},
AT6=(a,b)=>{a.kX.data[(5*a.k0|0)+2|0]=b;},
AUL=(a,b)=>{a.kX.data[(5*a.k0|0)+7|0]=b;},
AVJ=(a,b)=>{a.kX.data[(5*a.k0|0)+12|0]=b;},
ASU=(a,b)=>{a.kX.data[(5*a.k0|0)+17|0]=b;},
ACG=()=>{ABl=CX();};
function Ec(){let a=this;C.call(a);a.qp=null;a.mh=null;}
let Tu=null,Tv=null,Tw=null,Tr=null,Tt=null,R7=null,T2=null;
let ASy=()=>{Tu=new Bj;Tv=new Bj;Tw=new Bj;Tr=new Bj;Tt=new Bj;R7=new Bj;T2=new Bj;};
let He=E(Ec);
let AJH=null;
let ARb=()=>{let b,c;b=new Nv;c=new Lu;c.uo=1;c.uW=E8(16);b.xD=c;c=new Fo;c.oo=1;c.lN=U(16);b.x5=c;c=new Lu;c.uo=1;c.uW=E8(16);b.xJ=c;AJH=b;};
let Q5=E(He);
function SB(){let a=this;GR.call(a);a.q6=null;a.o2=0;}
let AQG=a=>{let b,c,d,e,f,g,h,i;b=a.k0;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.o2;g=3*f|0;h=a.q6.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;f=f+1|0;a.o2=f;i=(b+3|0)<<16>>16;d=3*f|0;h[d]=c;h[d+1|0]=e;h[d+2|0]=i;a.o2=f+1|0;a.k0=b+4|0;},
Qv=a=>{let b,c;b=a.k0;if(!b)return;c=a.q7;if(c===null?0:1)c.iY();else a.th.i0(a.pl.oF,a.kX,0,5*b|0,a.q6,0,3*a.o2|0);a.k0=0;a.o2=0;},
V8=(a,b)=>{let c;Qv(a);c=a.kX.data.length;while(b>c){c=c*2|0;}a.kX=B_(c);Ia(a);a.q6=E8(Ks((a.kX.data.length/5|0)*3|0)|0);};
let Rw=E(He);
let Q3=E(Ec);
let Jj=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n,o,p,q,r,s;RW(a.mh,4);j=0.0;k=d-b;l=e-c;if(g){m=a.mh;n=m.vq;o=m.wB;p=m.uD;b=b/o;b=(b+CA(b)*0.5|0)*o+p-CA(k)*n;c=c/o;c=(c+CA(c)*0.5|0)*o+p-CA(l)*n;d=d/o;d=(d+CA(d)*0.5|0)*o+p+CA(k)*n;e=e/o;e=(e+CA(e)*0.5|0)*o+p+CA(l)*n;}q=0.5*f;if(b!==d){if(c===e){j=q;q=0.0;}else{f=e-c;k=d-b;r=1.0/Da(f*f+k*k)*q;q=f*r;j=k*r;}}f=b+q;m=a.mh;s=m.kX.data;g=5*m.k0|0;s[g+0|0]=f;s[g+1|0]=c-j;s[g+5|0]=b-q;s[g+6|0]=c+j;s[g+10|0]=d-q;s[g+11|0]=e+j;s[g+15|0]=d+q;s[g+16|0]=e-j;s[g+2|0]=h;s[g+7|0]
=h;s[g+12|0]=i;s[g+17|0]=i;m.i1();m=a.mh;if(!m.sw)m.hv();};
function S1(){let a=this;Ec.call(a);a.xU=null;a.y1=null;}
let UN=null,UT=null;
let AVT=()=>{UN=new Bj;UT=new Bj;};
let QW=E(Ec);
let Vf=null,Ny=null;
let ATo=()=>{Vf=new Bj;Ny=new Bj;};
function Lu(){let a=this;C.call(a);a.uW=null;a.uo=0;}
let NN=E();
let TK=null;
let Ms=()=>{Ms=BG(NN);AHC();};
let AHC=()=>{let b,c;b=U((MZ.p()).data.length);c=b.data;TK=b;c[Fm.jE]=1;c[Fd.jE]=2;c[E5.jE]=3;c[EZ.jE]=4;c[Jg.jE]=5;};
function Rk(){let a=this;C.call(a);a.l$=null;a.la=0;}
let ADc=null;
let FS=(a,b)=>{let c,d,e,f;c=a.l$;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);Du(c,0,f,0,a.la);a.l$=f;},
I6=a=>{let b,c,d;b=a.la+4|0;if(b>a.l$.data.length)FS(a,b);c=a.l$.data;d=a.la;b=d+1|0;a.la=b;c[d]=110;d=b+1|0;a.la=d;c[b]=117;b=d+1|0;a.la=b;c[d]=108;a.la=b+1|0;c[b]=108;},
AJg=()=>{ADc=AE5([48,49,50,51,52,53,54,55,56,57]);};
function FF(){let a=this;Gc.call(a);a.nA=0;a.mG=null;a.m1=null;a.mL=null;}
let ZM=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new JZ;c.nD=a;c.oR=b;c=B0(c,"handleEvent");b.onreadystatechange=c;c=a.mL;d=a.m1;e=new GH;e.tH=c;e.qX=d;c=B0(e,"handleEvent");b.onprogress=c;d=a.mG;f=a.nA;b.open("GET",Bt(d),!!f);if(a.nA){d="arraybuffer";b.responseType=d;}b.send();};
function NL(){let a=this;Dq.call(a);a.rq=null;a.yu=null;}
let ZQ=(a,b)=>{a.rq.mz.mq.rf=DL(b);},
AIN=(a,b)=>{b=a.rq.mz.mq;b.o4=1;b.mN=0;},
Yi=(a,b,c)=>{c=a.rq;b=null;GF(c.qm,c.qy,c.qb,b);b=c.mz.mq;b.pq=1;b.mN=0;return 0;};
function NM(){let a=this;Dq.call(a);a.pS=null;a.uV=null;a.wx=null;a.qP=null;}
let ADA=(a,b)=>{a.pS.mz.mq.rf=DL(b);},
WY=(a,b)=>{b=a.pS.mz.mq;b.o4=1;b.mN=0;},
W3=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.uV;if(e!==null)d.setAttribute("crossOrigin",Bt(e));a:{e=a.qP;e.kt=e.kt+1|0;e=new Ku;e.rE=a;e.yX=b;e.v9=c;e.um=d;d.addEventListener("load",B0(e,"handleEvent"),!!0);d.addEventListener("error",B0(e,"handleEvent"),!!0);if(!a.qP.wF){b=Bt(b);d.src=b;}else{b=a.wx;c=AMu(c);e=new J;e.jw=G(16);F(e,e.ju,A(611));f=e.ju;if(b===null)b=A(2);F(e,f,b);F(e,e.ju,A(612));f=e.ju;if(c===null)c=A(2);F(e,f,c);b=new H;g=e.jw;h=g.data;i=e.ju;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.jv=K(g.data,0,i);b=Bt(b);d.src=b;}return 0;}b=new I;b.jx=1;b.jy=1;Bo(b);B(b);},
AEo=(a,b,c)=>{return W3(a,b,c);};
function JZ(){let a=this;C.call(a);a.oR=null;a.nD=null;}
let AHI=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oR.readyState==4){if(a.oR.status==200){if(a.nD.mL.l7){if(BS===null){b=new CS;c=new Ct;c.k3=BE(32);b.lr=c;c=new J;BA(c);c.jw=G(16);b.k6=c;b.k5=G(32);b.k9=0;b.k$=Cl;BS=b;}b=a.nD.mG;c=new J;c.jw=G(16);F(c,c.ju,A(604));d=c.ju;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jw;f=e.data;g
=c.ju;h=f.length;if(g>=0&&g<=(h-0|0)){b.jv=K(e.data,0,g);BT(Bt(b));BT("\n");}else{b=new I;b.jx=1;b.jy=1;Bo(b);B(b);}}i=a.oR.response;j=new Int8Array(i);b=a.nD;c=b.m1;k=b.mG;b=new HW;b.mO=j;b.tg=i;c.iS(k,b);}else if(a.oR.status!=404&&a.oR.status!=403){try{l=R(100);$p=1;continue _;}catch($$e){$$je=Bs($$e);if($$je instanceof DA){}else{throw $$e;}}b=a.nD;c=b.mL;d=b.nA;k=b.mG;b=b.m1;if(c.l7){if(BS===null){i=new CS;j=new Ct;j.k3=BE(32);BA(i);i.lr=j;j=new J;DJ(j,16);i.k6=j;i.k5=G(32);i.k9=0;i.k$=Cl;BS=i;}i=new J;i.jw
=G(16);F(i,i.ju,A(93));F(i,i.ju,k===null?A(2):k);j=new H;e=i.jw;f=e.data;h=i.ju;m=f.length;if(h>=0&&h<=(m-0|0)){j.jv=K(e.data,0,h);BT(Bt(j));BT("\n");}else{b=new I;X(b);B(b);}}c.kt=c.kt+1|0;i=new FF;i.mL=c;i.nA=d;i.mG=k;i.m1=b;b=null;c=null;i.mj=new C;i.mi=1;i.mW=c;i.m$=b;g=CE;CE=g+1|0;i.m9=R(g);b=new D1;b.mX=i;El(b);}else{b=a.nD;b.m1.iT(b.mG);}b=a.nD.mL;b.kt=b.kt-1|0;}return;case 1:a:{try{Kw(l);if(E$()){break _;}break a;}catch($$e){$$je=Bs($$e);if($$je instanceof DA){}else{throw $$e;}}}b=a.nD;c=b.mL;d=b.nA;k
=b.mG;b=b.m1;if(c.l7){if(BS===null){i=new CS;j=new Ct;j.k3=BE(32);BA(i);i.lr=j;j=new J;DJ(j,16);i.k6=j;i.k5=G(32);i.k9=0;i.k$=Cl;BS=i;}i=new J;i.jw=G(16);F(i,i.ju,A(93));F(i,i.ju,k===null?A(2):k);j=new H;e=i.jw;f=e.data;h=i.ju;m=f.length;if(h>=0&&h<=(m-0|0)){j.jv=K(e.data,0,h);BT(Bt(j));BT("\n");}else{b=new I;X(b);B(b);}}c.kt=c.kt+1|0;i=new FF;i.mL=c;i.nA=d;i.mG=k;i.m1=b;b=null;c=null;i.mj=new C;i.mi=1;i.mW=c;i.m$=b;g=CE;CE=g+1|0;i.m9=R(g);b=new D1;b.mX=i;El(b);b=a.nD.mL;b.kt=b.kt-1|0;return;default:E3();}}C2().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AQO=(a,b)=>{let $p,$z;$p=0;if(Fa()){let $T=C2();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHI(a,b);if(E$()){break _;}return;default:E3();}}C2().s(a,b,$p);};
let AQd=E();
let Oy=0.0,Oz=0.0;
let ATb=()=>{Oy=Da(2.0);Oz=Da(3.0);};
function Ku(){let a=this;C.call(a);a.yX=null;a.v9=null;a.um=null;a.rE=null;}
let AD4=(a,b)=>{let c,d;c=W(b.type);if(c===A(613))d=1;else if(!(A(613) instanceof H))d=0;else{b=A(613);d=c.jv!==b.jv?0:1;}if(d){b=a.rE.pS.mz.mq;b.o4=1;b.mN=0;}else{b=a.v9;b.tq=a.um;c=a.rE.pS;GF(c.qm,c.qy,c.qb,b);b=c.mz.mq;b.pq=1;b.mN=0;}b=a.rE.qP;b.kt=b.kt-1|0;},
ACu=(a,b)=>{AD4(a,b);};
let AAi=E();
ASA([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",7,"graphics",14,"g2d",7,"math",0,"mygdx",17,"game",-1,"java",19,"util",20,"regex",19,"nio",22,"charset",19,"lang"]);
CW([C,"Object",24,0,[],0,3,0,0,["cI",O(ABc),"cB",M(AId),"T",O(OX)],AOT,0,C,[],0,3,0,0,0,NC,0,C,[],0,3,0,R3,0,Np,0,C,[],3,3,0,0,0,LC,0,C,[Np],0,3,0,0,0,CL,0,C,[],3,3,0,0,0,Mu,0,LC,[CL],0,3,0,0,0,BR,0,C,[],3,3,0,0,0,Fh,0,C,[BR],0,3,0,0,0,C_,0,C,[],3,3,0,0,0,B1,0,C,[],3,3,0,0,0,Bx,0,C,[C_,B1],1,3,0,0,["T",O(AEt),"cB",M(XL)],GX,0,Bx,[],12,3,0,0,0,CI,"Actor",11,C,[],0,3,0,0,["be",M(J5),"J",Ba(Q6),"x",M(AM4),"Z",M(AMc),"T",O(R8)],LF,0,C,[],3,3,0,0,0,By,"Group",11,CI,[LF],0,3,0,0,["be",M(QP),"bL",Bm(AGN),"Z",M(Oh),
"J",Ba(ME),"x",M(AMF),"T",O(AAP)],F0,0,C,[],3,3,0,0,0,Dp,"Iterable",24,C,[],3,3,0,0,0,GE,0,C,[F0,Dp],0,3,0,0,0,Gi,0,C,[],3,3,0,0,0,BV,0,C,[Gi],0,3,0,0,0,GV,0,BV,[],0,3,0,0,0,AKK,0,GV,[],0,0,0,0,0,Go,"FocusListener$FocusEvent$Type",13,Bx,[],12,3,0,0,0,Mw,0,C,[],3,3,0,0,0,Ip,0,C,[Mw],3,3,0,0,0,Gg,0,C,[],3,3,0,0,0,Dn,0,C,[Gg],1,3,0,0,0,ANP,0,Dn,[],0,0,0,0,0,Mk,0,GE,[],0,3,0,0,0,LW,0,C,[Gi],0,3,0,0,0,ABT,0,C,[],1,3,0,0,0,Wy,0,C,[],0,3,0,0,0,Ve,0,C,[],3,3,0,0,0,K3,0,C,[Ve],0,3,0,0,0,AJ$,0,K3,[],0,0,0,0,0,CK,"FocusListener$FocusEvent",
13,Fh,[],0,3,0,0,["bz",O(Vr)],QB,0,C,[],32,0,0,VD,0,AH_,0,C,[],1,3,0,0,0,SA,0,C,[],32,0,0,Rg,0,ANO,0,Dn,[],0,0,0,0,0,E0,0,C,[Mw],0,3,0,0,0,Sv,0,E0,[Ip],0,3,0,0,0,Vn,0,C,[],4,3,0,Tq,0,Lf,0,C,[Gi],1,3,0,0,0,AQl,0,GV,[],0,3,0,0,0,ADd,0,C,[],0,3,0,0,0,T6,0,C,[],0,3,0,UM,0,Mq,0,C,[Gi],1,3,0,0,0,Ib,0,E0,[Ip],0,3,0,0,0]);
CW([U_,0,E0,[Ip],0,3,0,0,0,DP,0,BV,[],0,3,0,0,0,U3,0,Ib,[],0,3,0,0,0,AAw,0,Fh,[],0,3,0,0,0,JY,0,C,[],3,3,0,0,0,BQ,"InputEvent",11,Fh,[],0,3,0,0,["bz",O(Po),"T",O(NX)],Qu,0,C,[BR],4,3,0,0,0,Nf,0,C,[],32,0,0,RD,0,Db,"InputEvent$Type",11,Bx,[],12,3,0,0,0,Cb,0,C,[BR],1,3,0,0,0,Ey,0,Cb,[],1,3,0,0,0,AE$,0,Ey,[],0,3,0,0,0,AJM,0,Ey,[],0,3,0,0,0,CO,0,Cb,[],1,3,0,0,0,En,0,CO,[],1,3,0,0,0,WW,0,En,[],0,3,0,0,0,Zd,0,C,[Gi],0,0,0,0,0,M2,0,Cb,[],0,3,0,0,0,AAN,0,M2,[],0,3,0,0,0,AC7,0,Cb,[],0,3,0,0,0,AHi,0,Cb,[],0,3,0,0,0,AL6,
0,Cb,[],0,3,0,0,0,AMV,0,C,[],0,3,0,0,0,K$,0,Cb,[],1,3,0,0,0,AGF,0,K$,[],0,3,0,0,0,ABv,0,CO,[],0,3,0,0,0,ANJ,0,CO,[],0,3,0,0,0,AOj,0,En,[],0,3,0,0,0,AKv,0,Cb,[],0,3,0,0,0,AK2,0,En,[],0,3,0,0,0,APZ,0,CO,[],0,3,0,0,0,APh,0,CO,[],0,3,0,0,0,ADF,0,Cb,[],0,3,0,0,0,AGb,0,CO,[],0,3,0,0,0,AGr,0,Cb,[],0,3,0,0,0,AD_,0,Cb,[],0,3,0,0,0,AGI,0,Ey,[],0,3,0,0,0,XP,0,CO,[],0,3,0,0,0,AP8,0,Cb,[],0,3,0,0,0,AJ2,0,En,[],0,3,0,0,0,ADS,0,Ey,[],0,3,0,0,0,AJe,0,Cb,[],0,3,0,0,0,Zf,0,CO,[],0,3,0,0,0,AFL,0,CO,[],0,3,0,0,0,AAq,0,C,[CL],0,
3,0,0,0,C0,0,By,[JY],0,3,0,0,0,D6,0,C0,[],0,3,0,P7,0,FA,0,D6,[F0],0,3,0,0,0,KW,0,FA,[],0,3,0,0,0,ABn,0,KW,[],0,3,0,0,0]);
CW([ANL,0,BV,[],0,0,0,0,0,LU,0,C0,[],0,3,0,0,0,Rn,0,C,[],3,3,0,0,0,Ee,0,C,[Rn],1,3,0,0,0,ADv,0,Ee,[],0,0,0,0,0,C9,0,CI,[JY],0,3,0,0,0,X9,0,C9,[],0,3,0,0,0,ANK,0,BV,[],0,0,0,0,0,BZ,0,C,[],1,3,0,HT,0,SG,0,BZ,[],0,0,0,0,0,AJ_,0,BZ,[],0,0,0,0,0,JR,0,DP,[],0,3,0,0,0,AGx,0,JR,[],0,3,0,0,0,U6,0,BZ,[],0,0,0,0,0,APL,0,BV,[],0,0,0,0,0,Lt,0,D6,[],0,3,0,0,0,AKa,0,BZ,[],0,0,0,0,0,FY,0,C,[],3,3,0,0,0,ER,0,C,[B1,FY],0,3,0,0,0,Dw,"Table$DebugRect",12,ER,[],0,3,0,Jn,0,ADz,0,Ee,[],0,0,0,0,0,L9,0,C9,[F0],0,3,0,0,0,ABD,0,L9,[],
0,3,0,0,0,AFP,0,BV,[],0,0,0,0,0,Py,0,C,[],3,3,0,0,0,AL_,0,C,[Py],0,3,0,0,0,F7,0,C,[],0,3,0,0,0,Gr,0,F7,[],0,3,0,0,0,Tm,0,Gr,[],0,3,0,0,0,Mc,0,C9,[F0],0,3,0,0,0,AER,0,Mc,[],0,3,0,0,0,ARB,0,LU,[],0,0,0,0,0,J0,0,C0,[],0,3,0,0,0,ASh,0,FA,[],0,3,0,0,0,MA,0,C9,[LF],0,3,0,0,0,U4,0,BZ,[],0,0,0,0,0,TZ,0,C,[],0,3,0,0,0,AD6,0,C,[Gg],0,0,0,0,0,AGB,0,BV,[],0,0,0,0,0,AIi,0,Dn,[],0,0,0,0,0,AFc,0,C,[],0,3,0,0,0,ALI,0,BV,[],0,0,0,0,0,ARh,0,DP,[],0,0,0,0,0,AFN,0,LW,[],0,0,0,0,0,SC,0,BZ,[],0,0,0,0,0,SF,0,BZ,[],0,0,0,0,0,R9,0,
C,[],3,3,0,0,0,Jl,0,C,[],0,3,0,0,0,N8,0,Jl,[],0,3,0,0,0,ADw,0,Ee,[],0,0,0,0,0]);
CW([ANI,0,Lf,[],0,0,0,0,0,ANM,0,Mq,[],0,0,0,0,0,APM,0,BV,[],0,0,0,0,0,APN,0,DP,[],0,0,0,0,0,U5,0,BZ,[],0,0,0,0,0,N0,0,C,[BR],0,3,0,To,0,Rc,0,Gr,[],0,3,0,0,0,AF2,0,BV,[],0,0,0,0,0,Yw,0,Dn,[],0,0,0,0,0,SH,0,BZ,[],0,0,0,0,0,ABZ,0,C0,[],0,3,0,0,0,AFO,0,BV,[],0,0,0,0,0,RE,0,C,[],0,3,0,0,0,IK,0,BZ,[],0,3,0,0,0,AD7,0,J0,[],0,3,0,0,0,SD,0,BZ,[],0,0,0,0,0,AHa,0,C9,[F0],0,3,0,0,0,AFW,0,Mk,[],0,0,0,0,0,UH,0,C,[],0,3,0,0,0,Ok,0,C9,[],0,3,0,TF,0,Ot,0,C,[],0,3,0,0,0,AKc,0,BZ,[],0,0,0,0,0,U7,0,BZ,[],0,0,0,0,0,AM2,0,Lt,[],
0,3,0,0,0,SE,0,BZ,[],0,0,0,0,0,QC,0,C,[],0,3,0,0,0,AQ8,0,C,[],0,3,0,0,0,Fb,0,Bx,[],12,3,0,0,0,ARp,0,BZ,[],0,0,0,0,0,AFC,0,Dn,[],0,0,0,0,0,C8,0,C,[],1,3,0,0,0,U8,0,C8,[],0,0,0,0,0,Yl,0,C,[R9],0,3,0,0,0,UQ,0,C,[],0,3,0,0,0,RU,0,C,[],0,3,0,0,0,Sx,0,C,[],0,3,0,0,0,My,0,BV,[],0,3,0,0,0,Yv,0,Dn,[],0,0,0,0,0,APO,0,MA,[],0,0,0,0,0,Yo,0,C,[],3,3,0,0,0,AF3,0,BV,[],0,0,0,0,0,AR$,0,C0,[],0,3,0,0,0,AJJ,0,C0,[],0,3,0,0,0,AFY,0,DP,[],0,0,0,0,0,Mo,0,C,[],0,3,0,0,0,ADu,0,Mo,[],0,0,0,0,0,APo,0,CI,[CL],0,3,0,0,0,Xy,0,BV,[],0,
0,0,0,0,ANn,0,FA,[],0,3,0,0,0,AIO,0,BV,[],0,0,0,0,0]);
CW([AQP,0,DP,[],0,0,0,0,0,T7,0,F7,[],0,3,0,0,0,AJQ,0,C0,[],0,3,0,0,0,RK,0,C,[],0,3,0,0,0,QR,0,C,[],0,3,0,0,0,AIq,0,C9,[],0,3,0,0,0,ARi,0,GE,[],0,0,0,0,0,XA,0,BV,[],0,0,0,0,0,ALp,0,C0,[],0,3,0,0,0,ARz,0,My,[],0,3,0,0,0,XB,0,D6,[],0,0,0,0,0,ADx,0,Ee,[],0,0,0,0,0,VS,0,C,[],1,3,0,0,0,U2,0,C,[],0,3,0,0,0,Uz,0,C,[B1],0,3,0,UB,0,BF,0,C,[],1,3,0,I7,0,OO,0,BF,[],0,3,0,0,0,AFF,0,C,[],0,3,0,0,0,Tc,0,BF,[],0,0,0,0,0,AQg,0,C,[],0,3,0,0,0,Eg,0,BF,[],0,3,0,0,0,Ht,0,Eg,[],0,3,0,0,0,Hm,0,Eg,[],0,3,0,0,0,IW,0,C,[],3,3,0,0,0,AAR,
0,C,[IW],0,3,0,0,0,Tf,0,BF,[],0,0,0,0,0,AN0,0,C,[FY],0,3,0,0,0,Tb,0,BF,[],0,0,0,0,0,Ge,0,BF,[],0,3,0,0,0,Ta,0,BF,[],0,0,0,0,0,S_,0,BF,[],0,0,0,0,0,AKg,0,C,[],4,3,0,0,0,Wx,0,C8,[],0,0,0,0,0,IB,0,C,[],3,3,0,0,0,Bj,"Vector2",16,C,[B1,IB],0,3,0,0,0,So,0,BF,[],0,0,0,0,0,Fv,0,BF,[],0,3,0,0,0,AIm,0,C,[],0,3,0,0,0,Th,0,BF,[],0,0,0,0,0,MY,0,Fv,[],0,3,0,0,0,AD2,0,C,[BR],0,3,0,0,0,G4,0,Bx,[],12,3,0,0,0,RQ,0,C,[],0,3,0,Rj,0,Gz,0,BF,[],0,3,0,0,0,Q9,0,Gz,[],0,3,0,0,0,Sk,0,BF,[],0,0,0,0,0,Sb,0,C,[B1],4,3,0,0,0,S$,0,BF,[],
0,0,0,0,0,FJ,0,C,[B1,IB],0,3,0,0,0,Ob,0,Ge,[],0,3,0,0,0]);
CW([QL,0,BF,[],0,3,0,0,0,AAA,0,C,[],0,3,0,0,0,ARU,0,C,[FY],0,3,0,0,0,Td,0,BF,[],0,0,0,0,0,US,0,BF,[],0,3,0,0,0,Sp,0,BF,[],0,0,0,0,0,QJ,0,Ge,[],0,3,0,0,0,Vz,0,C,[B1],0,3,0,Pi,0,JW,0,C,[B1],0,3,0,Nc,0,Lc,0,C,[B1],0,3,0,LI,0,AA0,0,C,[B1],0,3,0,0,0,W_,0,C,[B1],0,3,0,0,0,ALD,0,C,[B1,FY],0,3,0,0,0,AE3,0,C,[IW],0,3,0,0,0,SP,0,C,[],4,3,0,Gf,0,Ud,0,C,[],4,3,0,P3,0,YC,0,C,[],4,3,0,0,0,P6,0,Gz,[],0,3,0,0,0,KZ,0,C,[B1],0,3,0,DX,0,O0,0,C,[],3,3,0,0,0,LJ,0,C,[O0,B1],0,3,0,0,0,Se,0,LJ,[],0,3,0,0,0,Sn,0,BF,[],0,0,0,0,0,Te,
0,BF,[],0,0,0,0,0,Mi,0,C,[],0,3,0,It,0,D4,0,C,[B1],0,3,0,0,0,Nv,0,C,[],0,3,0,0,0,AJG,0,C,[],0,3,0,0,0,Bg,0,C,[B1,IB],0,3,0,CH,0,AD5,0,C,[B1,FY],0,3,0,0,0,AB5,0,C8,[],0,0,0,0,0,Ll,0,Fv,[],0,3,0,0,0,AKd,0,C,[IW],0,3,0,0,0,Y4,0,C,[],0,3,0,0,0,AOm,0,C,[B1],0,3,0,0,0,Ja,0,C,[B1],0,3,0,0,0,Sm,0,BF,[],0,0,0,0,0,AOq,0,C,[],0,3,0,0,0,Zb,0,C,[],0,3,0,0,0,ALs,0,C,[],0,3,0,0,0,AOk,0,C,[B1],0,3,0,0,0,AI3,0,C,[],3,3,0,0,0,AEg,0,C,[B1],0,3,0,0,0,AMg,0,C,[],0,0,0,0,0,JP,0,C,[BR],0,3,0,LG,0,Jd,0,C,[],0,3,0,0,["bZ",BI(Ou)],Fn,
0,Jd,[],0,3,0,0,["bZ",BI(ANR)],Qg,0,C,[CL],0,3,0,0,0,AK$,0,C,[],0,3,0,0,0,BD,0,C,[],0,3,0,0,0]);
CW([Na,0,C,[CL],1,3,0,0,0,Fu,0,Na,[],0,3,0,0,["T",O(AI4)],Bu,"Array",8,C,[Dp],0,3,0,0,["cB",M(Rs),"T",O(UA)],Js,0,C,[Dp],0,3,0,0,0,AEM,0,Js,[],0,3,0,0,0,AQ6,0,C,[Dp],0,3,0,0,0,DE,0,C,[],4,3,0,0,["cB",M(AJb)],ARm,0,C,[],0,3,0,0,0,AGh,0,C,[],0,3,0,0,0,AJD,0,C,[],0,3,0,0,0,AHH,0,C,[],0,3,0,0,0,QU,0,C,[],0,3,0,R$,0,Xu,0,C,[],0,3,0,0,0,AIx,0,C,[],0,3,0,0,0,AHk,0,C,[],0,3,0,0,0,AH5,0,C,[],0,3,0,0,0,ANY,0,C,[],0,3,0,0,0,AEb,0,C,[],0,3,0,0,0,APt,0,C,[],0,3,0,0,0,AFU,0,C,[],0,3,0,0,0,Zk,0,C,[],0,3,0,0,0,AAG,0,C,[],0,
3,0,0,0,I_,0,Bx,[],12,3,0,0,0,AIC,0,C,[],0,3,0,0,0,SV,0,C,[],3,3,0,0,0,Dj,0,C,[],0,3,0,0,0,XE,0,Dj,[],0,3,0,0,0,XD,0,Dj,[],0,3,0,0,0,AGO,0,Dj,[],0,3,0,0,0,ABX,0,Dj,[],0,3,0,0,0,ALF,0,Dj,[],0,3,0,0,0,Lg,0,Dj,[],0,3,0,0,0,ABL,0,Lg,[],0,3,0,0,0,Hf,0,C,[],3,3,0,0,0,ACV,0,C,[CL,Hf],0,3,0,0,0,EY,0,C,[],3,3,0,0,0,ALr,0,C,[EY,Hf],0,3,0,0,0,APp,0,C,[EY],0,3,0,0,0,Z9,0,C,[],0,3,0,0,0,Ep,0,C,[EY],0,3,0,0,0,AKm,0,Ep,[],0,3,0,0,0,G$,0,Ep,[Hf,EY],1,3,0,0,0,Dx,0,G$,[],1,3,0,Qf,0,AK9,0,C,[],0,3,0,0,0,ANW,0,Dx,[],4,3,0,0,0,AF8,
0,Dx,[],4,3,0,0,0,AQc,0,Ep,[],0,3,0,0,0,KI,0,Ep,[],0,3,0,0,0,Xn,0,KI,[],0,3,0,0,0,ABH,0,Dx,[],4,3,0,0,0]);
CW([GI,0,G$,[],1,3,0,0,0,AHB,0,GI,[],4,3,0,0,0,AF5,0,Dx,[],4,3,0,0,0,AH8,0,Dx,[],4,3,0,0,0,AHA,0,GI,[],4,3,0,0,0,G8,0,Bx,[],12,3,0,0,0,Fy,0,C,[CL,EY,Hf],1,3,0,0,0,L_,0,Fy,[EY],1,3,0,0,0,V1,0,L_,[EY],0,3,0,0,0,Ho,0,Bx,[],12,3,0,0,0,CM,0,Fy,[],1,3,0,0,0,HK,0,CM,[],1,3,0,0,0,ZW,0,C,[],0,3,0,0,0,Gl,0,CM,[],1,3,0,TG,0,D_,0,Gl,[],1,3,0,0,0,FD,0,D_,[],1,3,0,0,0,ACR,0,FD,[],0,3,0,0,0,Hk,0,CM,[],1,3,0,0,0,AR1,0,Hk,[],0,3,0,0,0,ANT,0,CM,[],0,3,0,0,0,E_,0,CM,[],1,3,0,0,0,Xx,0,E_,[],0,3,0,0,0,GU,0,CM,[],1,3,0,0,0,ACJ,0,
D_,[],0,3,0,0,0,AEZ,0,D_,[],0,3,0,0,0,J_,0,CM,[],1,3,0,0,0,AKn,0,J_,[],0,3,0,0,0,YR,0,E_,[],0,3,0,0,0,AGf,0,FD,[],0,3,0,0,0,AKe,0,CM,[],0,3,0,0,0,AIh,0,E_,[],0,3,0,0,0,AKu,0,CM,[],0,3,0,0,0,AMa,0,Gl,[],0,3,0,0,0,AE6,0,C8,[],0,0,0,0,0,Zv,0,C8,[],0,0,0,0,0,ZN,0,D_,[],0,3,0,0,0,AKX,0,GU,[],0,3,0,0,0,AQe,0,HK,[],0,3,0,0,0,AJc,0,HK,[],0,3,0,0,0,ALY,0,GU,[],0,3,0,0,0,AG$,0,FD,[],0,3,0,0,0,AQW,0,Hk,[],0,3,0,0,0,Em,0,Fy,[],1,3,0,0,0,AHG,0,Em,[],0,3,0,0,0,Ff,0,C,[],1,3,0,0,0,ALl,0,Ff,[],0,3,0,0,0,AMC,0,Em,[],0,3,0,0,
0,ANS,0,Em,[],0,3,0,0,0,AOS,0,Ff,[],0,3,0,0,0,ACq,0,Em,[],0,3,0,0,0]);
CW([ANZ,0,Ff,[],0,3,0,0,0,JM,0,C,[],3,3,0,0,0,Nl,0,C,[],3,3,0,0,0,BJ,"Class",24,C,[JM,Nl],0,3,0,0,["T",O(AHy)],AAO,0,C,[],4,0,0,0,0,ZB,0,C,[],4,3,0,0,0,DA,0,C,[],0,3,0,0,["cT",O(AMQ)],Ca,0,DA,[],0,3,0,0,0,Bz,"RuntimeException",24,Ca,[],0,3,0,0,0,AF0,"ClassCastException",24,Bz,[],0,3,0,0,0,Ji,0,C,[],3,3,0,0,0,H,"String",24,C,[B1,C_,Ji],0,3,0,0,["T",O(Cd),"cB",M(APF),"cI",O(AJV)],D$,0,C,[B1],1,3,0,0,0,E9,0,D$,[C_],0,3,0,0,0,Z,0,C,[B1,Ji],0,0,0,0,["cY",M(H3),"T",O(LD)],Im,0,C,[],3,3,0,0,0,J,0,Z,[Im],0,3,0,0,["gr",
BI(AGE),"i4",Ba(ABK),"T",O(EE),"cY",M(AG2),"c4",Bm(AHO)],Qx,0,C,[],0,3,0,0,0,Pa,0,C,[],3,3,0,0,0,K8,0,C,[Pa,Gg],0,3,0,0,0,UX,0,C,[],3,3,0,0,0,LO,0,C,[UX],1,3,0,0,0,Pc,0,LO,[],0,3,0,0,0,AMN,0,C,[],4,3,0,0,0,HE,0,Bx,[],12,3,0,0,0,NK,0,C,[],3,3,0,0,0,Cm,0,C,[],3,3,0,0,0,QT,0,C,[Cm],3,3,0,0,0,IO,0,C,[NK,QT],0,3,0,EJ,["i5",M(AKR)],AKx,0,C,[],0,3,0,0,0,Qk,0,C,[],0,3,0,Dy,0,MS,0,D$,[C_],0,3,0,0,0,Gn,0,C,[],0,3,0,0,0,AE9,0,C,[],4,3,0,0,0,Dv,"GlyphLayout$GlyphRun",15,C,[BR],0,3,0,0,0,Fo,0,C,[],0,3,0,0,0,Lv,0,C,[],3,
3,0,0,0,Kg,0,C,[Lv],1,3,0,0,0,EU,0,C,[],3,3,0,0,0,Iu,0,Kg,[EU,B1],0,3,0,0,0,HM,"Comparator",20,C,[],3,3,0,0,0,M1,0,C,[HM],0,3,0,0,0,L3,0,C,[C_],0,3,0,0,0,ABx,0,C,[],0,3,0,0,0,AK4,0,C,[],4,3,0,0,0,Ne,0,C,[],3,3,0,0,0,Oe,0,C,[Ne],0,3,0,0,0,AAV,0,C,[],0,3,0,0,0,ADM,0,C,[],0,3,0,0,0,SJ,0,C,[],3,3,0,0,0]);
CW([J1,0,C,[SJ],0,3,0,Ei,0,NE,0,C,[],0,3,0,0,0,Dq,0,C,[],0,3,0,0,["gX",M(AIl)],Ss,0,C,[],3,3,0,0,0,D7,0,C,[Cm],3,3,0,0,0,Lx,0,C,[Ss,D7],0,3,0,0,["i6",M(Xs)],RM,0,C,[],3,3,0,0,0,TA,0,C,[RM],0,3,0,0,0,SS,0,C,[SV],0,3,0,0,0,SK,0,C,[],3,3,0,0,0,Qt,0,C,[SK],0,3,0,0,0,OV,0,C,[],3,3,0,0,0,SO,0,C,[OV],0,3,0,0,0,AJj,0,C,[],0,3,0,0,0,TE,0,C,[],3,3,0,0,0,ST,0,C,[TE],3,3,0,0,0,PS,0,C,[ST],0,3,0,0,0,JE,0,C,[D7],0,0,0,0,["i6",M(ALL)],JF,0,C,[D7],0,0,0,0,["i6",M(AQz)],Bk,"IllegalArgumentException",24,Bz,[],0,3,0,0,0,AOz,0,
C,[],4,3,0,0,0,YT,0,C,[Dp],0,3,0,0,0,AG7,0,D$,[C_],0,3,0,0,0,AGD,0,C,[Cm],1,3,0,0,0,Lp,0,C,[],3,3,0,0,0,GA,"TeaGL20",5,C,[Lp],0,3,0,0,["h3",Bm(AEl),"ib",Bm(AQr),"co",Bm(ZY),"g_",BI(ADt),"ev",BI(KE),"ew",BI(KD),"du",M(AN7),"dt",BI(AAa),"h1",M(AFo),"hX",O(ARa),"hZ",M(AKT),"g5",M(AN8),"bb",M(AKA),"ie",M(AI7),"hG",Ba(AAM),"hH",BI(AGd),"hL",BI(AIB),"W",M(AP6),"ic",M(AOO),"iR",M(V7),"ex",BI(JU),"ey",BI(Li),"h8",Bm(ACe),"b_",Bm(IL),"g4",M(AQ3),"ez",Ba(LH),"h2",M(AGX),"eA",Ba(Kl),"dO",M(AC$),"h5",Bm(AC5),"h4",M(Yr),
"ck",Bm(AAL),"h0",Bm(V6),"cn",function(b,c,d,e,f,g,h,i,j){LS(this,b,c,d,e,f,g,h,i,j);},"cu",Ba(AHK),"b6",Ba(AJ6),"hg",Bm(AKz),"g8",M(Yt),"id",function(b,c,d,e,f,g){AHm(this,b,c,d,e,f,g);},"ds",BI(Wu)],RL,0,C,[Lp],3,3,0,0,0,Jo,"TeaGL30",5,GA,[RL],0,3,0,0,["ij",M(ADT),"hI",BI(AIY),"hK",function(b,c,d,e,f){ARM(this,b,c,d,e,f);},"ih",Bm(AJz),"b_",Bm(AGl)],Of,"TeaGL30Debug",5,Jo,[],0,3,0,0,["ij",M(ACn),"hI",BI(Y_),"hK",function(b,c,d,e,f){AQj(this,b,c,d,e,f);},"ih",Bm(Yf),"co",Bm(Y3),"du",M(AOa),"dt",BI(AHP),"g5",
M(Yc),"bb",M(AOR),"hG",Ba(ABC),"hH",BI(AK6),"W",M(AMG),"dO",M(VR),"ck",Bm(W4),"cn",function(b,c,d,e,f,g,h,i,j){AIj(this,b,c,d,e,f,g,h,i,j);},"cu",Ba(ABk),"ds",BI(ADI),"h3",Bm(AG3),"ib",Bm(APH),"g_",BI(ACp),"ev",BI(AH0),"ew",BI(APy),"h1",M(AJq),"hX",O(AQ_),"hZ",M(ALo),"ie",M(AQ0),"hL",BI(YI),"ic",M(ALu),"iR",M(AOg),"ex",BI(AE7),"ey",BI(AN9),"h8",Bm(AII),"b_",Bm(ACy),"ez",Ba(AAd),"g4",M(W2),"eA",Ba(AQ9),"h2",M(XV),"h5",Bm(W5),"h4",M(AP_),"h0",Bm(W0),"b6",Ba(Yq),"hg",Bm(Zu),"g8",M(ARR),"id",function(b,c,d,e,f,
g){AMe(this,b,c,d,e,f,g);}],PJ,0,C,[],0,3,0,0,0,EC,0,Bx,[],12,3,0,0,0,S2,0,C,[Cm],3,3,0,0,0,LX,0,C,[S2],0,0,0,0,["i7",O(ABt)],UU,"TeaGL20Debug",5,GA,[],0,3,0,0,["co",Bm(AQH),"du",M(AAk),"dt",BI(ABi),"g5",M(AHZ),"bb",M(ARq),"hG",Ba(AFm),"hH",BI(AQT),"W",M(YL),"dO",M(AGJ),"ck",Bm(AJv),"cn",function(b,c,d,e,f,g,h,i,j){ACz(this,b,c,d,e,f,g,h,i,j);},"cu",Ba(ABR),"ds",BI(AQ4),"h3",Bm(WX),"ib",Bm(VO),"g_",BI(VM),"ev",BI(AGc),"ew",BI(ADW),"h1",M(ARC),"hX",O(AJ0),"hZ",M(ARf),"ie",M(AJU),"hL",BI(AEc),"ic",M(ARr),"iR",
M(AIU),"ex",BI(AGg),"ey",BI(Y9),"h8",Bm(AEm),"b_",Bm(Wz),"ez",Ba(ACF),"g4",M(ACM),"eA",Ba(Xb),"h2",M(AMl),"h5",Bm(AOy),"h4",M(AHt),"h0",Bm(AQR),"b6",Ba(AOp),"hg",Bm(AQ$),"g8",M(Xd),"id",function(b,c,d,e,f,g){Z3(this,b,c,d,e,f,g);}],S7,0,C,[Dp],0,3,0,0,0,Rm,0,C,[],0,3,0,0,0,TT,0,C,[Cm],3,3,0,0,0,Lr,0,C,[TT],0,0,0,0,["i8",O(WQ),"i9",O(AAZ),"i$",O(Wq)],Vb,0,C,[],3,3,0,0,0,Vj,0,C,[Vb],0,3,0,0,0,NF,0,Dq,[],0,0,0,0,0,TO,"CloneNotSupportedException",24,Ca,[],0,3,0,0,0,DS,0,C8,[],0,3,0,0,0,I,"IndexOutOfBoundsException",
24,Bz,[],0,3,0,0,0,EN,0,C,[Cm],3,3,0,0,0,Pk,0,C,[EN],3,3,0,0,0,Q0,0,C,[EN],3,3,0,0,0,QO,0,C,[EN],3,3,0,0,0,Sl,0,C,[EN],3,3,0,0,0,U$,0,C,[EN],3,3,0,0,0]);
CW([Tg,0,C,[EN,Pk,Q0,QO,Sl,U$],3,3,0,0,0,OY,0,C,[],3,3,0,0,0,Ki,0,C,[Cm],3,3,0,0,0,N3,0,C,[Cm,Tg,OY,Ki],1,3,0,0,["i_",M(AKp),"ja",Bm(ANQ),"jb",Bm(AM6),"jc",Ba(AKb),"jd",M(APX),"je",O(Z4),"jf",Ba(Wp)],K6,0,C,[],1,3,0,0,0,Je,0,K6,[Lv,EU,B1],0,3,0,0,0,L$,0,Je,[],0,3,0,0,0,AEA,0,C,[],0,3,0,0,0,Gk,0,Bx,[],12,3,0,0,0,Dr,0,C,[Cm],1,3,0,0,0,ABP,0,Dr,[],1,3,0,0,0,AA1,0,Dr,[],1,3,0,0,0,AGm,0,Dr,[],1,3,0,0,0,AJs,0,Dr,[],1,3,0,0,0,AEU,0,Dr,[],1,3,0,0,0,KM,0,C,[D7],0,0,0,0,["i6",M(AFQ)],KN,0,C,[D7],0,0,0,0,["i6",M(AQU)],KL,
0,C,[D7],0,0,0,0,["i6",M(ALg)],Ru,0,C8,[],0,3,0,0,0,T1,0,C,[Cm],3,3,0,0,0,JO,0,C,[T1],0,0,0,0,["jg",O(AB9)],AAK,0,Dr,[],1,3,0,0,0,QI,0,C,[B1],4,3,0,0,0,MD,0,C,[],3,3,0,0,0,RN,0,C,[MD],4,3,0,0,0,Zg,0,C,[],4,3,0,0,0,Ke,0,C,[],4,3,0,0,0,CT,"ReflectionException",9,Ca,[],0,3,0,0,0,Eq,0,C,[],4,3,0,Bv,0,Ql,0,C,[],3,3,0,0,0,JL,0,C,[Ql],0,0,0,0,0,Hu,"Iterator",20,C,[],3,3,0,0,0,JK,0,C,[Hu],0,0,0,0,0,Ts,0,C,[MD],0,0,0,0,0,Co,"NumberFormatException",24,Bk,[],0,3,0,0,0,J9,0,Bz,[],0,3,0,0,0,Eb,0,Ca,[],0,3,0,0,0,G0,"NoSuchMethodException",
24,Eb,[],0,3,0,0,0,C4,"NullPointerException",24,Bz,[],0,3,0,0,0,B8,0,C,[],1,0,0,0,["fv",Ba(ABo),"fZ",BI(AEd),"fi",O(Zt),"T",O(AMx),"e3",M(AO7),"fh",M(AO5),"fF",O(AQJ),"eZ",O(HR)],L6,0,C,[JM],0,3,0,0,0,AQt,0,C,[Cm],1,3,0,0,0,ADl,0,C,[Cm],1,3,0,0,0,AR_,0,C,[Cm],1,3,0,0,0,Km,0,C,[Cm],3,3,0,0,0,LB,0,C,[Km],0,3,0,0,["jh",M(APd)],AEQ,0,C,[Cm],1,3,0,0,0,LA,0,C,[Km],0,3,0,0,["jh",M(X1)],Ni,0,C,[],3,3,0,0,0,Ha,0,C,[Ni,EU],0,0,0,0,0]);
CW([Id,0,Ha,[],0,0,0,0,0,Df,0,B8,[],0,0,0,DH,["fD",Ba(Yp),"fE",O(AEL),"gd",M(Y6)],Sz,0,C,[],0,0,0,0,0,Cc,"PatternSyntaxException",21,Bk,[],0,3,0,0,["cT",O(AQB)],Yx,0,C,[],0,3,0,0,0,J8,0,C,[Dp],3,3,0,0,0,Lo,0,C,[J8],1,3,0,0,0,Ri,0,C,[J8],3,3,0,0,0,ND,0,C,[Ri],3,3,0,0,0,J$,0,Lo,[ND],1,3,0,0,0,SQ,0,C,[],3,3,0,0,0,J7,0,J$,[EU,B1,SQ],0,3,0,0,0,Re,0,Df,[],0,0,0,0,["fD",Ba(Xa),"fE",O(AA3),"gd",M(AM0)],Vk,0,Df,[],0,0,0,0,["fD",Ba(AAC),"fE",O(AF1)],PD,0,Df,[],0,0,0,0,["fD",Ba(Zq),"fE",O(AOY)],RX,0,Df,[],0,0,0,0,["fD",
Ba(Xz),"fE",O(ANA),"gd",M(AKU)],Gd,0,Df,[],0,0,0,0,["fD",Ba(APz),"fE",O(ZL)],Cr,0,B8,[],1,0,0,0,["fD",Ba(ARD),"fW",O(AOc),"gd",M(AFS)],EV,0,Cr,[],0,0,0,0,["fX",Bm(ANm),"fv",Ba(ACL),"fZ",BI(AAj),"fE",O(AEN),"gd",M(Xr)],Cg,0,B8,[],0,0,0,0,["fD",Ba(AEf),"e3",M(AKM),"fE",O(AF_),"fh",M(AHr),"gd",M(ALR),"eZ",O(AAb)],Jm,0,Cg,[],0,0,0,0,["fD",Ba(AKl),"fE",O(AHE),"gd",M(AMp)],D3,0,Jm,[],0,0,0,0,["fD",Ba(ABw),"e3",M(AL0),"fE",O(Xl)],Nr,0,D3,[],0,0,0,0,["fD",Ba(AKC),"gd",M(AO$),"fE",O(AQF)],Uj,0,D3,[],0,0,0,0,["fD",Ba(YV),
"gd",M(AOs),"fE",O(AD1)],QM,0,D3,[],0,0,0,0,["fD",Ba(Z5),"gd",M(ASb),"fE",O(AJT)],Sj,0,D3,[],0,0,0,0,["fD",Ba(Wl),"gd",M(AMI),"fE",O(Zr)],F2,0,Cg,[],0,0,0,0,["fD",Ba(WS),"fv",Ba(AHQ),"fZ",BI(AM7),"fh",M(AHh),"fF",O(AKO),"eZ",O(AQS)],AJa,0,C,[],4,3,0,0,0,Jb,"ArrayStoreException",24,Bz,[],0,3,0,0,0,Hs,0,C,[],1,0,0,0,0,Bh,0,Hs,[],1,0,0,0,["f9",O(YY),"f2",O(XU),"fs",O(AN3),"fr",O(AQD)],JI,"MissingResourceException",20,Bz,[],0,3,0,0,0,Cy,0,Bh,[],0,0,0,0,["ga",M(AAp),"f9",O(AR8),"f2",O(ACv),"fs",O(AOW),"T",O(AJk),
"fr",O(ACY)],Ej,0,B8,[],1,0,0,0,["fh",M(AM9),"gd",M(APu),"eZ",O(AIu)],Dm,0,Ej,[],0,0,0,0,["fD",Ba(Wn),"fE",O(Z$)],E4,0,Dm,[],0,0,0,0,["fD",Ba(Ys),"fE",O(Y2)],Do,0,Ej,[],0,0,0,0,["fD",Ba(WP),"fE",O(AFk)],E2,0,Dm,[],0,0,0,0,["fD",Ba(AHX),"e3",M(ASe)],Uy,0,Dm,[],0,0,0,0,["fD",Ba(ARn),"fv",Ba(AI_)],MG,0,C,[],4,0,0,0,0,Bp,0,C,[],1,0,0,0,0,NO,0,Hs,[EU],0,0,0,0,["T",O(LM)],Os,0,B8,[],0,0,0,0,["fD",Ba(AGv),"fE",O(AKy),"gd",M(AKL)],Bf,0,C,[EU,B1],0,3,0,0,0,Nx,0,Cg,[],0,0,0,0,["fE",O(AKW)],GZ,0,Cg,[],0,0,0,0,["fD",Ba(Yh),
"e3",M(AKi),"fE",O(ALm),"gd",M(Zy),"fh",M(YX)],Dz,0,Cg,[],0,0,0,0,["fD",Ba(ACj),"fE",O(AQs),"ga",M(ADe),"fh",M(X8),"e3",M(ANU),"gd",M(ACB)],JC,0,Dz,[],0,0,0,0,["ga",M(AFT),"fE",O(AQZ)],Kc,0,Cr,[],0,0,0,0,["fX",Bm(AGy),"fE",O(Ze)],DU,0,Cr,[],0,0,0,0,["fX",Bm(VN),"fE",O(AGQ),"fh",M(AKN)]]);
CW([H7,0,Cg,[],0,0,0,0,["e3",M(AHW),"fE",O(AMK),"fD",Ba(V$),"fh",M(Zm),"gd",M(AO0)],DR,0,Cr,[],0,0,0,0,["fW",O(AGa),"fX",Bm(AEx),"fv",Ba(ACc),"fZ",BI(AGk),"fE",O(APi),"fh",M(AOP)],MN,0,Cr,[],0,0,0,0,["fX",Bm(VW),"fE",O(AKf)],Jz,0,Cr,[],0,0,0,0,["fX",Bm(WG),"fE",O(AEV)],E7,0,Cg,[],0,0,0,0,["e3",M(AQN),"fD",Ba(AKj),"fE",O(AJ1),"fh",M(AGA),"gd",M(AL3)],Vc,0,E7,[],0,0,0,0,0,SI,0,E7,[],0,0,0,0,0,VF,0,Do,[],0,0,0,0,["fD",Ba(AAJ)],Px,0,Do,[],0,0,0,0,["fD",Ba(AIW)],Gy,0,Do,[],0,0,0,0,["fD",Ba(ANN),"e3",M(APJ)],Pg,0,
Gy,[],0,0,0,0,["fD",Ba(AGi),"e3",M(AJw)],FT,0,Do,[],0,0,0,0,["fD",Ba(AR3),"fE",O(APT)],NR,0,FT,[],0,0,0,0,["fD",Ba(AFl)],Q7,0,Do,[],0,0,0,0,["fD",Ba(AQ2)],Qe,0,Gy,[],0,0,0,0,["fD",Ba(ZA)],Tk,0,FT,[],0,0,0,0,["fD",Ba(XI)],Q8,0,Ej,[],0,0,0,0,["fD",Ba(ARG),"fv",Ba(AN5),"fE",O(ALt)],OB,0,Ej,[],0,0,0,0,["fD",Ba(AKP),"fv",Ba(Wg),"fE",O(AMT)],Hg,0,C,[],1,0,0,0,0,VH,0,Dm,[],0,0,0,0,["fD",Ba(XN)],Ut,0,E2,[],0,0,0,0,["fD",Ba(AIP)],O8,0,E4,[],0,0,0,0,["fD",Ba(AM_)],P8,0,Dm,[],0,0,0,0,["fD",Ba(AKF)],SL,0,E2,[],0,0,0,0,
["fD",Ba(XZ)],QN,0,E4,[],0,0,0,0,["fD",Ba(ANs)],K5,0,B8,[],4,0,0,0,["fD",Ba(AHl),"gd",M(AFB),"fE",O(AIQ)],Kx,0,B8,[],0,0,0,0,["fD",Ba(YU),"gd",M(Zh),"fE",O(ARY)],Ov,0,B8,[],0,0,0,0,["fD",Ba(AFZ),"gd",M(ARV),"fE",O(YB)],MK,0,B8,[],4,0,0,0,["fD",Ba(ALG),"gd",M(AAu),"fE",O(AH3)],UI,0,B8,[],0,0,0,0,["fD",Ba(AJ9),"gd",M(VT),"fE",O(AEe)],NZ,0,B8,[],0,0,0,0,["fD",Ba(Z_),"gd",M(ADL),"fE",O(Yb)],UE,0,Cg,[],0,0,0,0,["fD",Ba(AQ7),"fE",O(ABE),"e3",M(Zp),"fi",O(AJE),"gd",M(Zn)],O2,0,Cg,[],4,0,0,0,["fD",Ba(AJ3),"fE",O(AAH),
"e3",M(AMR),"fi",O(VI),"gd",M(ARA)],Uu,0,B8,[],4,0,0,0,["fD",Ba(AGM),"gd",M(ADm),"fE",O(AHx)],R0,0,B8,[],0,0,0,0,["fD",Ba(AJ7),"gd",M(AC9),"fE",O(Xg)],No,0,B8,[],0,0,0,0,["fD",Ba(AFs),"gd",M(AAz),"fE",O(ADP)],Gp,0,Cg,[],0,0,0,0,["fD",Ba(XR),"e3",M(ALX),"fE",O(Xo),"gd",M(AMq)],UC,0,Gp,[],0,0,0,0,["fD",Ba(AAI),"fv",Ba(AO8),"fZ",BI(Xi),"fh",M(AIE),"fE",O(APE)],QG,0,Gp,[],0,0,0,0,["fD",Ba(AHJ),"fE",O(Zi)],Or,0,Z,[Im],0,3,0,0,["gr",BI(AC0),"i4",Ba(Y1),"cY",M(ZK),"c4",Bm(AN$)],Ra,0,Cr,[],0,0,0,0,["fX",Bm(ABm),"fv",
Ba(YM),"fZ",BI(ADE),"fE",O(AKr),"fh",M(AEK)],Nm,0,Cr,[],0,0,0,0,["fX",Bm(AHT),"fE",O(AEW)],NV,0,Cr,[],0,0,0,0,["fX",Bm(ANb),"fE",O(AOV)],ASf,0,C,[],4,3,0,0,0,Nk,0,Cr,[],0,0,0,0,["fX",Bm(ANf),"fE",O(ARW)],Hi,0,Cg,[],0,0,0,0,["e3",M(AKB),"fD",Ba(Kj),"fv",Ba(AEE),"fZ",BI(ABB),"fE",O(AOl),"fh",M(W8),"gd",M(AOA)],Hq,0,Cg,[],0,0,0,0,["e3",M(ZG),"fD",Ba(JA),"fv",Ba(ALb),"fZ",BI(ANa),"fE",O(AQ5),"fh",M(ABq),"gd",M(ALn)],D9,0,Cr,[],0,0,0,0,["fX",Bm(AMr),"fv",Ba(AJp),"fZ",BI(ZE),"fE",O(APK),"fh",M(AL8)],I0,0,Hg,[],0,
0,0,0,["gt",M(ZT),"gv",Bm(AMf)],I1,0,Hg,[],0,0,0,0,["gt",M(ANv),"gv",Bm(AQx)]]);
CW([Tj,0,C,[],0,0,0,0,0,IJ,0,Bp,[],0,0,0,0,["fM",O(AE8)],Ic,0,Bp,[],0,0,0,0,["fM",O(AHL)],S6,0,Bp,[],0,0,0,0,["fM",O(AMX)],TI,0,Bp,[],0,0,0,0,["fM",O(AOB)],TM,0,Bp,[],0,0,0,0,["fM",O(ACk)],ID,0,Bp,[],0,0,0,0,["fM",O(AAo)],IX,0,ID,[],0,0,0,0,["fM",O(ADg)],Vy,0,Bp,[],0,0,0,0,["fM",O(AED)],Ju,0,IX,[],0,0,0,0,["fM",O(V0)],Q$,0,Ju,[],0,0,0,0,["fM",O(AIw)],Rz,0,Bp,[],0,0,0,0,["fM",O(ABe)],Pt,0,Bp,[],0,0,0,0,["fM",O(AIo)],Pe,0,Bp,[],0,0,0,0,["fM",O(AQC)],TQ,0,Bp,[],0,0,0,0,["fM",O(AJB)],VG,0,Bp,[],0,0,0,0,["fM",O(Wa)],Ti,
0,Bp,[],0,0,0,0,["fM",O(AFw)],SY,0,Bp,[],0,0,0,0,["fM",O(AMv)],Ui,0,Bp,[],0,0,0,0,["fM",O(ABb)],Oc,0,Bp,[],0,0,0,0,["fM",O(ABM)],NP,0,Bp,[],0,0,0,0,["fM",O(AQo)],Tp,0,Bp,[],0,0,0,0,["fM",O(VX)],TC,0,Bp,[],0,0,0,0,["fM",O(AG0)],PQ,0,Bp,[],0,0,0,0,["fM",O(AB0)],RF,0,Bp,[],0,0,0,0,["fM",O(ADQ)],Vd,0,Bp,[],0,0,0,0,["fM",O(AG5)],Tz,0,Bp,[],0,0,0,0,["fM",O(AO2)],Qz,0,Bp,[],0,0,0,0,["fM",O(ALy)],PP,0,Bp,[],0,0,0,0,["fM",O(AJr)],VC,0,Bp,[],0,0,0,0,["fM",O(AMM)],HY,0,Bp,[],0,0,0,0,["fM",O(AHq)],Uo,0,HY,[],0,0,0,0,["fM",
O(AI1)],Rb,0,IJ,[],0,0,0,0,["fM",O(YJ)],PK,0,Ic,[],0,0,0,0,["fM",O(AEs)],Bn,0,Bp,[],0,0,0,0,["fM",O(AHu)],PG,0,Bp,[],0,0,0,0,["fM",O(AQa)],K9,0,Bp,[],0,0,0,0,["fM",O(AC4)],Ld,0,Bp,[],0,0,0,0,["fM",O(VY)],DI,"NegativeArraySizeException",24,Bz,[],0,3,0,0,0,XC,0,C,[],0,0,0,0,0,ABr,0,C,[],4,0,0,0,0,Zz,0,C,[],4,3,0,0,0,TV,0,C,[],0,3,0,0,0,HX,0,C,[],0,3,0,0,0,Mh,0,C,[],0,3,0,0,0,AEz,0,C,[],4,3,0,0,0,AMY,0,C,[],4,3,0,0,0,P1,0,Dq,[],0,0,0,0,["gX",M(AN6),"iT",M(AB4),"iS",Bm(AJd)],CB,0,Bx,[],9,3,0,H8,0,Fl,0,Ha,[],0,0,
0,0,0]);
CW([ARv,0,C,[],3,3,0,0,0,S8,0,C,[Cm],3,3,0,0,0,PE,0,C,[S8,Cm],1,3,0,0,["ji",Bm(AQh),"jj",M(AJN),"jk",Bm(ZH),"jl",Ba(AGn),"jm",Ba(ANE)],LT,0,C,[D7],0,0,0,0,["i6",M(AH2)],E6,0,Bx,[],12,3,0,0,0,AFq,0,C,[],0,3,0,0,0,Q2,0,C,[],3,3,0,0,0,Hd,0,L6,[Q2],0,3,0,0,["T",O(Yk)],T,"StringIndexOutOfBoundsException",24,I,[],0,3,0,0,0,Uw,0,Bh,[],0,0,0,0,["ga",M(ACt)],Uv,0,Bh,[],0,0,0,0,["ga",M(WM)],OG,0,Bh,[],0,0,0,0,["ga",M(AHd),"T",O(AD8)],ON,0,Bh,[],0,0,0,0,["ga",M(AMt)],OK,0,Bh,[],0,0,0,0,["ga",M(ANe)],OL,0,Bh,[],0,0,0,0,
["ga",M(AHS)],OR,0,Bh,[],0,0,0,0,["ga",M(ABQ)],OS,0,Bh,[],0,0,0,0,["ga",M(VL)],OP,0,Bh,[],0,0,0,0,["ga",M(AEh)],OQ,0,Bh,[],0,0,0,0,["ga",M(AHU)],OT,0,Bh,[],0,0,0,0,["ga",M(AO_)],OU,0,Bh,[],0,0,0,0,["ga",M(AAT)],OF,0,Bh,[],0,0,0,0,["ga",M(ASg)],O$,0,Bh,[],0,0,0,0,["ga",M(AEp)],OD,0,Bh,[],0,0,0,0,["ga",M(AAQ)],OE,0,Bh,[],0,0,0,0,["ga",M(ADj)],OJ,0,Bh,[],0,0,0,0,["ga",M(AF4)],OC,0,Bh,[],0,0,0,0,["ga",M(AOK)],OH,0,Bh,[],0,0,0,0,["ga",M(Y7)],OI,0,Bh,[],0,0,0,0,["ga",M(ALj)],H$,0,C,[],0,0,0,0,0,Gc,0,C,[Gg],0,3,0,
0,0,BX,"IllegalStateException",24,Bz,[],0,3,0,0,0,Ii,"IllegalMonitorStateException",24,Bz,[],0,3,0,0,0,AMy,0,C,[],0,3,0,0,0,ADn,0,C,[],4,3,0,0,0,W6,0,C,[Cm],1,3,0,0,0,FN,0,C,[],3,3,0,0,0,Vm,0,C,[FN],0,3,0,0,["cS",O(APb)],Ub,0,CB,[],12,0,0,0,0,Uc,0,CB,[],12,0,0,0,0,Ug,0,CB,[],12,0,0,0,0,Uh,0,CB,[],12,0,0,0,0,Ue,0,CB,[],12,0,0,0,0,Uf,0,CB,[],12,0,0,0,0,T_,0,CB,[],12,0,0,0,0,Ua,0,CB,[],12,0,0,0,0,T9,0,CB,[],12,0,0,0,0,NU,0,C,[],3,3,0,0,0,Rq,0,C,[NU],0,3,0,0,0,Qc,0,C,[Cm],4,3,0,0,0]);
CW([Q1,0,C,[],3,3,0,0,0,QH,0,C,[Q1],0,0,0,0,["e",M(AGu),"gU",M(AQY)],R4,0,C,[FN],0,3,0,0,0,NQ,0,F2,[],0,0,0,0,["fv",Ba(AC8),"fZ",BI(AR2),"fF",O(AAs)],R5,0,Bh,[],0,0,0,0,["ga",M(APx)],Nu,0,Bh,[],0,0,0,0,["ga",M(YD)],Rp,0,Bh,[],0,0,0,0,["ga",M(XY)],Ro,0,Bh,[],0,0,0,0,["ga",M(AC1)],UP,0,Bh,[],0,0,0,0,["ga",M(AFI)],O3,0,Bh,[],0,0,0,0,["ga",M(APA)],On,0,Bh,[],0,0,0,0,["ga",M(AKq)],Qp,0,Bh,[],0,0,0,0,["ga",M(AME)],Nq,0,Bh,[],0,0,0,0,["ga",M(ARu)],Nt,0,Bh,[],0,0,0,0,["ga",M(ABy)],Og,0,Bh,[],0,0,0,0,["ga",M(AP5)],Pl,
0,Bh,[],0,0,0,0,["ga",M(AIk)],Pq,0,Bh,[],0,0,0,0,["ga",M(ALV)],Sy,0,Bh,[],0,0,0,0,["ga",M(APa)],RO,0,Bh,[],0,0,0,0,["ga",M(AQV)],NG,0,Bh,[],0,0,0,0,["ga",M(ABd)],Jk,0,Bh,[],0,0,0,0,["ga",M(AKw)],Rf,0,Jk,[],0,0,0,0,["ga",M(ANV)],X0,0,C,[Hu],0,0,0,0,0,GG,0,Gc,[],0,0,0,0,["cS",O(AKJ)],NH,0,C,[],32,0,0,LP,0,Uq,0,C,[Cm,EN],1,3,0,0,["jn",Bm(AHo),"jo",Bm(AIn),"jp",Ba(Wo),"jq",M(WC),"jr",Ba(AEk)],GJ,0,C,[Cm],3,3,0,0,0,JH,0,C,[GJ],0,0,0,0,["i6",M(AFR)],AIT,0,C,[],0,3,0,0,0,Cp,"Array$ArrayIterator",8,C,[Hu,Dp],0,3,0,
0,0,CU,0,C,[Dp],0,3,0,0,0,HW,0,C,[],4,3,0,0,0,NJ,0,C,[Gg],0,0,0,0,0,Vo,0,C,[],3,3,0,0,0,Sf,0,C,[Vo],3,3,0,0,0,S5,0,C,[],3,3,0,0,0,G7,0,C,[Sf,S5],1,3,0,0,0,H0,0,G7,[],0,3,0,0,0,Ih,0,H0,[],0,3,0,0,0,G1,0,Ih,[],1,3,0,0,0,CS,0,G1,[],0,3,0,0,["js",M(AF6)],GH,0,C,[GJ],0,0,0,0,["i6",M(AJS)],YQ,0,C,[],0,0,0,0,0,Ct,0,G7,[],0,3,0,0,0,JN,0,C,[C_],1,3,0,0,0,M6,0,JN,[],0,3,0,0,0,I2,"IllegalCharsetNameException",23,Bk,[],0,3,0,0,0,Ko,0,C,[CL],3,3,0,0,0,HA,0,C,[Ko],0,3,0,Hy,0,QV,0,C,[],3,3,0,0,0]);
CW([Kd,0,C,[QV],1,3,0,0,0,SM,0,Kd,[],0,3,0,0,0,Vw,"NoSuchElementException",20,Bz,[],0,3,0,0,0,Q,"GdxRuntimeException",8,Bz,[],0,3,0,0,0,ABu,0,C,[],4,3,0,0,0,D1,0,C,[FN],0,3,0,0,["cS",O(Yd)],ACI,0,C,[],4,3,0,0,0,Vg,0,C,[],32,0,0,MJ,0,MC,"ConcurrentModificationException",20,Bz,[],0,3,0,0,0,M$,0,C,[],1,3,0,0,0,RZ,0,M$,[],0,3,0,0,0,SW,"ActorFondo",18,CI,[CL],0,3,0,0,["bL",Bm(ABp)],Mj,"ActorValvula",18,CI,[CL],0,3,0,0,["bL",Bm(WZ),"be",M(ACK)],Ig,"ActorGas",18,CI,[CL],0,3,0,0,["bL",Bm(ALx),"be",M(AM3)],Fj,0,G1,[],
0,3,0,0,["js",M(ADO)],ABI,0,D$,[C_],0,3,0,0,0,AKS,0,C,[],0,0,0,0,0,ALJ,0,C,[],4,3,0,0,0,LY,0,C,[],0,3,0,0,0,Gx,0,Bx,[],12,3,0,0,0,II,0,C,[CL],0,3,0,0,0,MQ,0,C,[],1,3,0,0,0,PL,0,MQ,[],0,3,0,0,0,MP,0,C,[],0,3,0,Kk,0,Mt,0,C,[],3,3,0,0,0,Ux,0,C,[],3,3,0,0,0,Op,0,C,[FN,Mt,Ux],0,0,0,0,["cS",O(ALK)],Ow,0,C,[Dp,C_],4,3,0,0,0,Ln,0,C,[CL],0,3,0,HO,0,Mn,0,Bu,[],0,3,0,0,0,Kp,0,Bu,[],0,3,0,0,0,TH,0,C,[],0,3,0,0,0,VA,0,C,[],32,0,0,LV,0,IP,0,C,[CL],3,3,0,0,0,Is,0,C,[IP],0,3,0,0,["iK",O(ADK),"iL",O(AMk),"g9",Ba(AJW),"hD",Bm(ACC),
"hM",Bm(Ym)],JQ,0,C,[CL],3,3,0,0,0,Hc,0,C,[JQ],0,3,0,0,["hF",O(AEP),"hJ",O(W7),"g2",Ba(AJu),"g$",M(X5),"g6",O(AP3),"hN",O(AMB)],O4,0,C,[IP],0,3,0,0,["iK",O(ZU),"iL",O(AA4),"g9",Ba(YS),"hD",Bm(AJf),"hM",Bm(ACD)],Rl,0,C,[JQ],0,3,0,0,["hF",O(ALO),"hJ",O(We),"g2",Ba(AFv),"g$",M(AOE),"g6",O(AGo),"hN",O(Zw)],KJ,0,C,[IP],0,3,0,KO,["iK",O(YA),"iL",O(AJl),"g9",Ba(YN),"hD",Bm(AOh),"hM",Bm(ABO)],Oj,0,Is,[],0,3,0,0,0,Pv,0,Hc,[],0,3,0,0,0,Tl,0,C,[Dp],0,3,0,0,0,AL4,0,C,[],4,3,0,0,0,Ty,0,C,[CL],0,3,0,0,0,Eu,0,C,[],1,3,0,0,
0,D0,0,Eu,[C_],1,3,0,0,["b$",M(AK7),"b9",M(AQu)],GQ,0,Eu,[C_],1,3,0,0,0,GO,0,Eu,[C_],1,3,0,0,0,EF,0,Eu,[C_],1,3,0,0,["b$",M(AKY),"b9",M(Xj)]]);
CW([G3,0,C,[],4,3,0,0,0,AFi,0,C,[],0,3,0,0,0,DW,0,C,[],3,3,0,0,0,CJ,0,EF,[DW],0,0,0,0,["el",O(ASd)],AIJ,0,C,[Cm],1,3,0,0,0,Si,0,C,[],3,3,0,0,0,Kq,0,C,[Si],0,3,0,0,0,Fk,0,C,[CL],0,3,0,Gb,0,G6,0,GO,[],1,0,0,0,0,FX,0,G6,[],0,0,0,0,["ii",M(AJP),"iC",Bm(AHD),"is",O(V4)],GW,0,D0,[],1,0,0,0,0,HH,0,GW,[],0,0,0,0,["iD",M(ALk),"it",Bm(AJ5),"is",O(AKo)],I8,0,Bx,[],12,3,0,0,0,HS,0,Bx,[],12,3,0,0,0,JS,0,C,[],0,3,0,0,0,Ul,0,JS,[],0,3,0,0,0,Lj,0,C,[CL],0,3,0,0,0,Pb,0,C,[],3,3,0,0,0,K0,0,C,[Pb],0,3,0,0,0,HG,0,GQ,[],1,0,0,0,
0,Jc,0,HG,[],0,0,0,0,["iM",M(ADq),"iu",Bm(AFX),"is",O(AA_)],AJF,0,C,[Cm],1,3,0,0,0,Ek,0,Bx,[],12,3,0,0,0,HB,0,Bx,[],12,3,0,0,0,PZ,0,C,[Ki],1,3,0,0,["i_",M(ARE),"jt",O(Z2)],Hw,0,G6,[DW],1,0,0,0,["is",O(AG9)],Oi,0,Hw,[],0,0,0,0,["ii",M(ADi),"iC",Bm(V2)],R_,0,Hw,[],0,0,0,0,["ii",M(AOf),"iC",Bm(Yn)],GY,0,GW,[DW],1,0,0,0,["is",O(AKD),"el",O(AL2)],N4,0,GY,[],0,0,0,0,["iD",M(AHg),"it",Bm(ALW)],QA,0,GY,[],0,0,0,0,["iD",M(Wf),"it",Bm(AG6)],GM,0,HG,[DW],1,0,0,0,["is",O(AEI),"el",O(AMz)],NT,0,GM,[],0,0,0,0,["iM",M(AAS),
"iu",Bm(ZX)],PI,0,GM,[],0,0,0,0,["iM",M(AJC),"iu",Bm(AAU)],KP,0,Bz,[],0,3,0,0,0,FB,"ReadOnlyBufferException",22,KP,[],0,3,0,0,0,Mx,"BufferUnderflowException",22,Bz,[],0,3,0,0,0,FC,0,Bx,[],12,3,0,0,0,Ew,0,Bx,[],12,3,0,0,0,AB7,0,C,[],4,3,0,0,0,IC,0,Bx,[],12,0,0,0,0,Di,0,Bx,[],12,3,0,0,0,ALE,0,C,[FN,Mt],3,0,0,0,0,H9,0,Bx,[],12,3,0,0,0,AKG,0,C,[],0,3,0,0,0,Su,0,C,[],32,0,0,KX,0,Il,"BufferOverflowException",22,Bz,[],0,3,0,0,0,TN,0,C,[],0,3,0,MX,0,AB_,0,C,[],0,3,0,0,0,Mf,0,C,[GJ],0,0,0,0,["i6",M(AEY)]]);
CW([IY,0,Bx,[],12,3,0,0,0,GN,0,Bx,[],12,3,0,0,0,RR,0,C,[],0,3,0,0,0,P2,0,Dq,[],0,0,0,0,0,LR,"InstantiationException",24,Eb,[],0,3,0,0,0,Jx,"IllegalAccessException",24,Eb,[],0,3,0,0,0,NY,0,Eb,[],0,3,0,0,0,Nh,"Predicate",8,C,[],3,3,0,0,0,Hb,0,C,[B1,C_],0,3,0,0,0,Iz,0,C,[],1,3,0,MU,0,Qs,0,Iz,[],0,3,0,0,0,P0,0,Dq,[],0,0,0,0,["gX",M(Yz),"iT",M(Wm),"iS",Bm(AH4)],ADp,0,C,[],4,3,0,0,0,Pf,0,C,[],3,3,0,0,0,Qy,0,C,[Pf],0,3,0,0,0,Ur,0,C,[Ko],3,3,0,0,0,GR,0,C,[],0,0,0,Md,["i1",O(ACa),"iX",M(AGz),"hv",O(AGK)],Ec,0,C,[],1,
0,0,0,0,He,0,Ec,[],1,0,0,0,0,Q5,0,He,[],0,0,0,0,0,SB,0,GR,[],0,0,0,0,["i1",O(AQG),"hv",O(Qv),"iX",M(V8)],Rw,0,He,[],0,0,0,0,0,Q3,0,Ec,[],0,0,0,0,0,S1,0,Ec,[],0,0,0,0,0,QW,0,Ec,[],0,0,0,0,0,Lu,0,C,[],0,3,0,0,0,NN,0,C,[],32,0,0,Ms,0,Rk,0,C,[Im,Ji],0,3,0,0,0,FF,0,Gc,[],0,0,0,0,["cS",O(ZM)],NL,0,Dq,[],0,0,0,0,["gX",M(ZQ),"iT",M(AIN),"iS",Bm(Yi)],NM,0,Dq,[],0,0,0,0,["gX",M(ADA),"iT",M(WY),"iS",Bm(AEo)],JZ,0,C,[GJ],0,0,0,0,["i6",M(AQO)],AQd,0,C,[],0,3,0,0,0,Ku,0,C,[D7],0,0,0,0,["i6",M(ACu)],AAi,0,C,[],0,3,0,0,0]);
let AWr=DN(Ce),AWn=DN(J6),AWo=DN(AVY),AWp=DN(AVZ),AWq=DN(BM),AWm=DN(AIG),AWs=DN(Eh);ATp(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
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
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","XNVAbierta.png","XNVCerrada.png","sphere-23.png","VertexArray",
"VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","begin must be called before end.","data must be a ByteBuffer or FloatBuffer","No buffer allocated!",
"IndexBufferObject cannot be used after it has been disposed.","Call end() before beginning a new shape batch.","Must call begin(ShapeType.",").",") or begin(ShapeType.","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","The last short in src ","Index ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend",
"\\","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ",
"vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *","uniform sampler2D u_sampler","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in",
"DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","Asset loaded: ","Logical","Pixels","Point","Line","Filled","The texture region is null. Please set a texture region first (e.g. in the constructor or by calling setTextureRegion(TextureRegion region))",
"data:",";base64,","error"]);
H.prototype.toString=function(){return Bt(this);};
H.prototype.valueOf=H.prototype.toString;C.prototype.toString=function(){return Bt(OX(this));};
C.prototype.__teavm_class__=function(){return AS_(this);};
AQb.main=AUa(AFH);
AQb.main.javaException=ATP;
let Bl=Symbol('jsoClass');
(function(){var c;c=IO.prototype;c[Bl]=true;c.onAnimationFrame=c.i5;c=Lx.prototype;c[Bl]=true;c.handleEvent=c.i6;c=JE.prototype;c[Bl]=true;c.handleEvent=c.i6;c=JF.prototype;c[Bl]=true;c.handleEvent=c.i6;c=LX.prototype;c[Bl]=true;c.fullscreenChanged=c.i7;c=Lr.prototype;c[Bl]=true;c.denied=c.i$;c.prompt=c.i9;c.granted=c.i8;c=N3.prototype;c.removeEventListener=c.jc;c.dispatchEvent=c.jd;c.get=c.i_;c.addEventListener=c.jf;Object.defineProperty(c,"length",{get:c.je});c=KM.prototype;c[Bl]=true;c.handleEvent=c.i6;c
=KN.prototype;c[Bl]=true;c.handleEvent=c.i6;c=KL.prototype;c[Bl]=true;c.handleEvent=c.i6;c=JO.prototype;c[Bl]=true;c.unlockFunction=c.jg;c=LB.prototype;c[Bl]=true;c.accept=c.jh;c=LA.prototype;c[Bl]=true;c.accept=c.jh;c=PE.prototype;c.removeEventListener=c.jm;c.dispatchEvent=c.jj;c.addEventListener=c.jl;c=LT.prototype;c[Bl]=true;c.handleEvent=c.i6;c=Qc.prototype;c[Bl]=true;c=Uq.prototype;c.removeEventListener=c.jp;c.dispatchEvent=c.jq;c.addEventListener=c.jr;c=JH.prototype;c[Bl]=true;c.handleEvent=c.i6;c=GH.prototype;c[Bl]
=true;c.handleEvent=c.i6;c=PZ.prototype;c.get=c.i_;Object.defineProperty(c,"length",{get:c.jt});c=Mf.prototype;c[Bl]=true;c.handleEvent=c.i6;c=JZ.prototype;c[Bl]=true;c.handleEvent=c.i6;c=Ku.prototype;c[Bl]=true;c.handleEvent=c.i6;})();
}));
