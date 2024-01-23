"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(AQx){let AWl=2463534242,Eg=()=>{let x=AWl;x^=x<<13;x^=x>>>17;x^=x<<5;AWl=x;return x;},P=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bp=f=>function(p1,p2){return f(this,p1,p2);},Bc=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BR=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AU_=f=>function(){let args=Array.prototype.slice.apply(arguments);AWm(function(){f.apply(this,args);});},AUz=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=R(Fz(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=T(args[i]);}AWm(()=>{f.call(null,javaArgs);},callback);},BP=target=>target.$clinit=()=>{},ATy=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},E=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=Fz();}return function(){superclass.call(this);};},M=cls=>AUV(cls),Fz=()=>C,Wz=()=>{{return ASF();}},JL=t=>{{return ALS(t);}};let AWn=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AWo=(name,binaryName)=>{let cls
=AWn();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Ch=AWo("boolean","Z"),Kj=AWo("char","C"),AWp=AWo("byte","B"),AWq=AWo("short","S"),BT=AWo("int","I"),AIZ=AWo("long","J"),D9=AWo("float","F"),ACB=AWo("double","D"),Bs=AWo("void","V");let AWr=new ArrayBuffer(16),AWs=new DataView(AWr),AWt=new Float32Array(AWr),AWu=new Float64Array(AWr),AWv=new Int32Array(AWr),
AV_;if(typeof BigInt!=='function'){AV_=n=>{AWs.setFloat64(0,n,true);return new AWw(AWs.getInt32(0,true),AWs.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AV_=n=>{AWs.setFloat64(0,n,true);let lo=AWs.getInt32(0,true),hi=AWs.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AWx=new BigInt64Array(AWr);AV_=n=>{AWu[0]=n;return AWx[0];};}let Qe=n=>{AWt[0]=n;return AWv[0];},KU=n=>{AWv[0]=n;return AWt[0];},Ci=(a,b)=>a>b?1:a<b? -1:a===b?0:1,Dg
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},DV=(a,b)=>(a>>>0)/(b>>>0)>>>0,AUv=(a,b)=>(a>>>0)%(b>>>0)>>>0,EH=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AWw(lo,hi){this.lo=lo|0;this.hi=hi|0;}AWw.prototype.__teavm_class__=()=>{return "long";};let AWy=a=>(a.hi&0x80000000)===0,AWz=a=>(a.hi&0x80000000)!==0,AWA=1<<18,B$,D,U,DU,AUk,Bg,AWB;if(typeof BigInt!=="function"){AWw.prototype.toString=function(){let result=[],n=this,
positive=AWy(n);if(!positive){n=AUL(n);}let radix=new AWw(10,0);do {let divRem=AWB(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AWw.prototype.valueOf=function(){return AUk(this);};B$=new AWw(0,0);U=val=>new AWw(val, -(val<0)|0);DU=val=>val>=0?new AWw(val|0,val/0x100000000|0):AUL(new AWw( -val|0, -val/0x100000000|0));D=(lo,hi)=>new AWw(lo,hi);AUk=val=>0x100000000*val.hi+(val.lo>>>0);Bg=
val=>val.lo;}else {B$=BigInt(0);D=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));U=val=>BigInt.asIntN(64,BigInt(val|0));DU=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));AUk=val=>Number(val);Bg=val=>Number(BigInt.asIntN(32,val))|0;}let DT,ACM,AB0,ATD,ATI,ACp,AUQ,C0,AFB,AWC,Z,My,W2,AUS,AUL,CZ,ACL,HN,Fo,AUi,Bd;if(typeof BigInt!=='function'){DT=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ACM=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;AB0=(a,b)=>{if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};ATD=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};ATI=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};ACp=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo
&1)<=(b.lo&1);};C0=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return DU(a.lo+b.lo);}else if(AWD.abs(a.hi)<AWA&&AWD.abs(b.hi)<AWA){return DU(AUk(a)+AUk(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AWw(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AWC=a=>{let lo
=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AWw(lo,hi);};AUL=a=>AWC(new AWw(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));AFB=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return DU(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AWw(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF
|(hihi&0xFFFF)<<16);};AUQ=(a,b)=>{let r=EH(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Z=(a,b)=>{let positive=AWz(a)===AWz(b);if(AWz(a)){a=AUL(a);}if(AWz(b)){b=AUL(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)
+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AWw(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:AUL(result);};My=(a,b)=>{if(AWD.abs(a.hi)<AWA&&AWD.abs(b.hi)<AWA){return DU(AUk(a)/AUk(b));}return (AWB(a,b))[0];};AUS=(a,b)=>
{if(a.hi>=0&&a.hi<AWA&&b.hi>=0&&b.hi<AWA){return DU(AUk(a)/AUk(b));}return (AWE(a,b))[0];};W2=(a,b)=>{if(AWD.abs(a.hi)<AWA&&AWD.abs(b.hi)<AWA){return DU(AUk(a)%AUk(b));}return (AWB(a,b))[1];};AWB=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AWz(a)===AWz(b);if(AWz(a)){a=AUL(a);}if(AWz(b)){b=AUL(b);}a=new AWF(a.lo,a.hi,0);b=new AWF(b.lo,b.hi,0);let q=AWG(a,b);a=new AWw(a.lo,a.hi);q=new AWw(q.lo,q.hi);return positive?[q,a]:[AUL(q),AUL(a)];};let AWE=(a,b)=>{if(b.lo===0&&b.hi===
0){throw new Error("Division by zero");}a=new AWF(a.lo,a.hi,0);b=new AWF(b.lo,b.hi,0);let q=AWG(a,b);a=new AWw(a.lo,a.hi);q=new AWw(q.lo,q.hi);return [q,a];};CZ=(a,b)=>new AWw(a.lo&b.lo,a.hi&b.hi);ACL=(a,b)=>new AWw(a.lo|b.lo,a.hi|b.hi);HN=(a,b)=>new AWw(a.lo^b.lo,a.hi^b.hi);Fo=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AWw(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AWw(0,a.lo);}else {return new AWw(0,a.lo<<b -32);}};AUi=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AWw(a.lo
>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AWw(a.hi,a.hi>>31);}else {return new AWw(a.hi>>b -32,a.hi>>31);}};Bd=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AWw(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AWw(a.hi,0);}else {return new AWw(a.hi>>>b -32,0);}};function AWF(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AWH=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>
16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AWI=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&
0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AWJ=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AWK=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi
>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AWL=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AWM=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi
=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AWN=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AWO=a=>new AWF(a.lo,a.hi,a.sup),AWG=(a,b)=>{let bits=b.hi!==0?AWL(b.hi):AWL(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits%16;AWM(b,bits);AWM(a,dividentBits);let q
=new AWF(0,0,0);while(sz-->0){AWM(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AWO(b);AWH(t,digit);if(AWK(t,a)>=0){while(AWK(t,a)>0){AWI(t,b); --digit;}}else {while(true){let nextT=AWO(t);AWJ(nextT,b);if(AWK(nextT,a)>0){break;}t=nextT;++digit;}}AWI(a,t);q.lo|=digit;AWM(a,16);}AWN(a,bits+16);return q;};}else {DT=(a,b)=>a===b;ACM=(a,b)=>a!==b;AB0=(a,b)=>a>b;ATD=(a,b)=>a>=b;ATI=(a,b)=>a<b;ACp=(a,b)=>a<=b;C0=(a,b)=>BigInt.asIntN(64,a+b);AWC=a=>BigInt.asIntN(64,a+1);AUL=a=>
BigInt.asIntN(64, -a);AFB=(a,b)=>BigInt.asIntN(64,a -b);AUQ=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Z=(a,b)=>BigInt.asIntN(64,a*b);My=(a,b)=>BigInt.asIntN(64,a/b);AUS=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));W2=(a,b)=>BigInt.asIntN(64,a%b);CZ=(a,b)=>BigInt.asIntN(64,a&b);ACL=(a,b)=>BigInt.asIntN(64,a|b);HN=(a,b)=>BigInt.asIntN(64,a^b);Fo=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));AUi=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));Bd=(a,b)=>BigInt.asIntN(64,
BigInt.asUintN(64,a)>>BigInt(b&63));}let R=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (DW(cls))(data);},S=(cls,data)=>new (DW(cls))(data),AAb;if(typeof BigInt64Array!=='function'){AAb=init=>new AWP(init);}else {AAb=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AWP(buffer);};}let G=sz=>new AWQ(new Uint16Array(sz)),AFn=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AWQ(buffer);},BM=sz=>new AWR(new Int8Array(sz)),Fg=sz=>new AWS(new Int16Array(sz)),
AWb=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AWS(buffer);},W=sz=>new AWT(new Int32Array(sz)),If=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AWT(buffer);},JI=sz=>new AWU(new Int8Array(sz)),Cd=sz=>new AWV(new Float32Array(sz)),DW=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(Fz()).call(this);this.data=data;}JavaArray.prototype=Object.create((Fz()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (DW(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[Fz()],primitive:false,superclass:Fz(),name:name,binaryName
:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AWW,ATO=strings=>{AWX();AWW=new Array(strings.length);for(let i=0;i<strings.length;++i){AWW[i]=AWY(T(strings[i]));}},A=index=>AWW[index],K=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,array.subarray(i,next));}return result;},
ATk=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},T=str=>str===null?null:S8(str),Bz=str=>str===null?null:str.jB,AWX=()=>(()=>{})(),AWY;{AWY=str=>str;}let BA=(obj,cls)=>obj instanceof Fz()&&!!obj.constructor.$meta&&AWZ(obj.constructor,cls),AWZ=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AWZ(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+
1|0){if(AWZ(supertypes[i],to)){return true;}}return false;};let B=ex=>{throw AOK(ex);},AW0=Symbol("javaException"),AOK=ex=>{let err=ex.$jsException;if(!err){let javaCause=AW1(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AW2("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AW0]=ex;ex.$jsException=err;AW3(err,ex);}return err;},AW3=(err,ex)=>{if(typeof AW4==="function"&&err.stack)
{let stack=AW4(err.stack),javaStack=R(AW5(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AW6(T(element.className),T(element.methodName),T(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AW7(ex,javaStack);}}},AW2;if(typeof AW8==='object'){let AW9=Symbol("defaultMessage");AW2=function AW2(message,cause){let self=Reflect.construct(Error,[void 0,cause],AW2);Object.setPrototypeOf(self,AW2.prototype);self[AW9]
=message;return self;};AW2.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AW2},message:{get(){try {let javaException=this[AW0];if(typeof javaException==='object'){let javaMessage=AW$(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AW9];}catch(AW_){return "Exception occurred trying to extract Java exception message: "+AW_;}}}});}else {AW2=Error;}let AUb=e=>e instanceof Error&&typeof e[AW0]==='object'
?e[AW0]:null,Bb=err=>{let ex=err[AW0];if(!ex){ex=AXa(T("(JavaScript) "+err.toString()));err[AW0]=ex;ex.$jsException=err;AW3(err,ex);}return ex;},AXa=message=>ATv(message),AW$=t=>ANa(t),AW1=t=>AVk(t),AW5=()=>Fz(),AW6=(className,methodName,fileName,lineNumber)=>{{return null;}},AW7=(e,stack)=>{};let AXb=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=next+1;}buffer+=msg.substring(index);};},
BZ=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AXb(msg=>console.info(msg)):()=>{},Dt=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AXb(msg=>console.error(msg)):()=>{};let AXc=null,ASX=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AXc=packages;},C4=data=>{let packages=AXc,i=0;while(i<data.length)
{let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive
=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=
clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AXd(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AXd.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AXd.prototype.s
=AXd.prototype.push;AXd.prototype.pop=function(){return this.stack.pop();};AXd.prototype.l=AXd.prototype.pop;AXd.prototype.isResuming=function(){return this.status===2;};AXd.prototype.isSuspending=function(){return this.status===1;};AXd.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AXd.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(AXe!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback
=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AXd.prototype.resume=function(){if(AXe!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AXd.prototype.run=function(){AXe=this;let result;try {result=this.runner();}catch(AW_){result=AW_;}finally {AXe=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let Fi
=()=>{let thread=C_();return thread!=null&&thread.isSuspending();},Fk=()=>{let thread=C_();return thread!=null&&thread.isResuming();},AWm=(runner,callback)=>(new AXd(runner)).start(callback),AXe=null,C_=()=>AXe,E_=()=>{throw new Error("Invalid recorded state");};function C(){this.lP=null;this.$id$=0;}
let FD=b=>{let c;if(b.lP===null){c=new Ij;c.lL=BW;b.lP=c;}b=b.lP;c=b.lL;if(c===null)b.lL=BW;else if(c!==BW){c=new BN;c.jC=1;c.jD=1;c.jE=A(0);B(c);}b.mn=b.mn+1|0;},
DB=b=>{let c,d;if(!G0(b)){c=b.lP;if(c.lL===BW){d=c.mn-1|0;c.mn=d;if(!d)c.lL=null;G0(b);return;}}b=new Iu;b.jC=1;b.jD=1;B(b);},
AUY=b=>{AEL(b,1);},
AEL=(b,c)=>{let d,$p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.lP===null){d=new Ij;d.lL=BW;b.lP=d;}d=b.lP;if(d.lL===null)d.lL=BW;if(d.lL===BW){d.mn=d.mn+c|0;return;}$p=1;case 1:XJ(b,c);if(Fi()){break _;}return;default:E_();}}C_().s(b,c,d,$p);},
AHt=(b,c,d)=>{let e,f,g;e=BW;f=b.lP;if(f===null){f=new Ij;f.lL=e;b.lP=f;if(e!==e)BW=e;BW.n9=Ea();b=b.lP;b.mn=b.mn+c|0;b=null;d.o5.e(b);return;}if(f.lL===null){f.lL=e;if(e!==e)BW=e;BW.n9=Ea();b=b.lP;b.mn=b.mn+c|0;b=null;d.o5.e(b);return;}if(f.n2===null)f.n2=AGK();f=f.n2;g=new Sk;g.vc=e;g.vd=b;g.va=c;g.vb=d;d=g;f.push(d);},
AU2=b=>{W$(b,1);},
W$=(b,c)=>{let d;if(!G0(b)){d=b.lP;if(d.lL===BW){c=d.mn-c|0;d.mn=c;if(c>0)return;d.lL=null;d=d.n2;if(d!==null&&!(d.length?0:1)){d=new VI;d.vy=b;MO(d,0);}else G0(b);return;}}b=new Iu;b.jC=1;b.jD=1;B(b);},
ANU=b=>{let c,d,e;if(!G0(b)){c=b.lP;if(c.lL===null){b=c.n2;if(b!==null&&!(b.length?0:1)){b=c.n2.shift();BC();if(b!==null&&!(b instanceof Fz()))b=B9(b);d=b;c.n2=null;b=d.vc;c=d.vd;e=d.va;d=d.vb;if(BW!==b)BW=b;BW.n9=Ea();c=c.lP;c.lL=b;c.mn=c.mn+e|0;b=null;d.o5.e(b);}return;}}},
G0=a=>{let b,c;b=a.lP;if(b===null)return 1;a:{if(b.lL===null){c=b.n2;if(!(c!==null&&!(c.length?0:1))){b=b.tO;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.lP=null;return 1;},
By=a=>{return;},
ATB=()=>{let a=new C();By(a);return a;},
AUZ=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BF;c.jP=b;d=c;b.classObject=d;}}return c;},
ABx=a=>{let b,c;b=a;if(!b.$id$){c=Eg();b.$id$=c;}return a.$id$;},
AIw=(a,b)=>{return a!==b?0:1;},
Pf=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=Eg();b.$id$=c;}d=Be(a.$id$,4);b=new J;b.jA=G(16);F(b,b.jz,A(1));e=b.jz;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jA;g=f.data;h=b.jz;i=g.length;if(h>=0&&h<=(i-0|0)){c.jB=K(f.data,0,h);return c;}b=new I;b.jC=1;b.jD=1;B(b);},
AUs=a=>{let b,c,d;if(!BA(a,E2)&&a.constructor.$meta.item===null){b=new T9;b.jC=1;b.jD=1;B(b);}b=WP(a);c=b;d=Eg();c.$id$=d;return b;},
Nc=a=>{let b,c;b=a.lP;if(!(b!==null&&b.lL===BW?1:0)){b=new Iu;b.jC=1;b.jD=1;B(b);}b=b.tO;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BC();if(c!==null&&!(c instanceof Fz()))c=B9(c);c=c;if(!c.m())MO(c,0);}a.lP.tO=null;},
XJ=(b,c)=>{let thread=C_();let javaThread=Wz();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;JL(javaThread);thread.resume();};callback.g1=e=>{thread.attribute=AOK(e);JL(javaThread);thread.resume();};callback=RQ(callback);thread.suspend(()=>{try {AHt(b,c,callback);;}catch(Nr){callback.g1(Nr);}});return null;};
let APd=E();
let AF1=b=>{let c,d,e,f;Vk=G(0);c=new H;c.jB="";LS=c;NP=new Ni;ANy();c=new Bm;c.kw=1.0;c.kv=0.0;Oj=c;c=new Bm;c.kw=0.0;c.kv=1.0;Oi=c;c=new Bm;c.kw=0.0;c.kv=0.0;QI=c;K3=new Bm;L3=new Bm;Ye();Tg=new Bm;Tl=new Bm;AAx();RU=new Bm;R6=new Bm;c=new Ec;c.nH=0.0;c.nE=0.0;c.nF=0.0;c.nG=0.0;QW=c;c=new Ec;c.nH=0.0;c.nE=0.0;c.nF=0.0;c.nG=0.0;QV=c;PY=new EY;SH=new EY;UG=0.10000000149011612;ARI();QA=M(D9);Wy();OR=R(IX,111);S4=new Bm;Td=new Bm;P6=new C;AF6();NU=M(BT);ACY();Pn=M(AIZ);NT=M(Kj);Tj=R(Mo,128);XM();AJz();Qq=new Bm;Qr
=new Bm;Qs=new Bm;Su=0.4000000059604645;NS=0.10000000149011612;Uf=new Bm;ALm();Re=new Bm;RL=new Bm;VP=new Bm;VR=new Bm;VQ=new Bm;AQb();ARG();AB1();OG=new BH;AMi();HS=0.0;AEZ();Q1=Cd(3);AJT();AFT();AHQ();C$=1;AAY();VS=new JZ;Qd=new JY;AIp();O=1;ACf();Iq=new M1;AKp();Y0();c=new Nm;b=R(H,0);d=b.data;I_(A(3));e=d.length;f=0;while(f<e){I_(d[f]);f=f+1|0;}c.uD=A(3);c.vo=b.p();Cp=c;AQs();V1=M(ACB);AEQ();ART();c=new G_;c.r3=A(4);Cl=c;c=new G_;c.r3=A(5);JE=c;AEr();ANG();Zu();AFf();ACG();Wo();AR$();AEf();AAI();Kp=1;Zg();ALi();c
=new Hj;c.q5=1;RP=c;c=new Hj;c.q5=0;Sh=c;Qa=M(Ch);ARy();TO=new Bm;TP=new Bm;TQ=new Bm;TL=new Bm;TN=new Bm;Sn=new Bm;Um=new Bm;U8=new Bm;Vd=new Bm;VB=new Bm;NR=new Bm;OS=Di(2.0);OT=Di(3.0);c=ARL(A(6));c.rk=640;c.pb=480;PH(new Lp,new Pw,c);};
let NV=E();
let ADE=0,ADL=0,X9=0,ARU=0,ABV=0;
let Sj=()=>{Sj=BP(NV);AF3();};
let AF3=()=>{ADE=C6(T(navigator.platform),A(7));ADL=C6(T(navigator.platform),A(8));X9=C6(T(navigator.platform),A(9));ARU=!C6(T(navigator.platform),A(10))&&!C6(T(navigator.platform),A(11))?0:1;ABV=!C6(T(navigator.platform),A(12))&&!C6(T(navigator.platform),A(13))&&!C6(T(navigator.platform),A(14))?0:1;};
let NI=E(0);
let LY=E();
let CU=E(0);
function MR(){let a=this;LY.call(a);a.mq=null;a.uE=null;a.xv=0;a.k3=null;a.ll=null;a.qZ=null;a.r1=null;a.o1=null;a.o4=null;a.q6=0;a.q7=0;a.rv=null;a.nv=null;a.ql=null;a.oU=null;a.r6=0;a.p5=null;a.wz=0;a.yK=0;a.vn=0;a.tj=null;a.vz=null;}
let BQ=0;
let Se=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.ll=new Bm;a.qZ=R(CP,20);a.r1=JI(20);a.o1=W(20);a.o4=W(20);d=new MK;H0(d,1,4,M(DI));a.oU=d;a.r6=1;a.tj=Ix;e=new BH;e.kn=0.0;e.km=1.0;e.kl=0.0;e.kk=0.8500000238418579;CQ(e);a.vz=e;if(b===null){b=new Bn;b.jC=1;b.jD=1;b.jE=A(15);B(b);}if(c===null){b=new Bn;b.jC=1;b.jD=1;b.jE=A(16);B(b);}a.mq=b;a.uE=c;c=new BJ;EP(c);e=new MK;H0(e,1,4,M(CP));c.j0=e;e=new Ss;e.of=1.0;e.od=0.0;e.oe=0.0;e.oh=0.0;e.oi=1.0;e.og=0.0;c.sI=e;c.tw=C5();c.oR=C5();c.mS=1;a.k3=c;c.k4=a;c=c.j0;f=c.jQ;g=0;h
=c.jF;while(g<h){f.data[g].x(a);g=g+1|0;}g=B8.kP.width;i=B8.kP.height;b.o$=0;b.o_=0;b.pH=g;b.pU=i;j=g;k=b.rl;j=j*k;k=i*k;b.sh=j;b.sp=k;MY(b,1);},
AVE=(a,b)=>{let c=new MR();Se(c,a,b);return c;},
AL0=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.p5===null){b=RZ(5000,null);a.p5=b;b.rX=1;}a:{if(!a.yK&&!a.vn&&a.tj===Ix){if(!a.wz)break a;b=a.k3;b.ka=1;BQ=1;b=b.j0;if(CB){c=new Ct;c.kq=1;c.ku=b;c.lv=1;}else{if(b.j$===null){c=new C2;c.lE=b;c.lG=1;b.j$=c;}c=CL(b.j$);}b:while(true){if(!c.kq){c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(c.lf>=c.ku.jF?0:1))break a;b=Co(c);if(!(b instanceof BJ)){b.ka=1;BQ=1;}else{b=b;b.ka=1;BQ=1;b=b.j0;if(CB){d=new Ct;d.kq=1;d.ku=b;d.lv=1;}else{if(b.j$
===null){d=new C2;d.lE=b;d.lG=1;b.j$=d;}d=CL(b.j$);}while(true){if(!d.kq){c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(d.lf>=d.ku.jF?0:1))break;b=Co(d);if(!(b instanceof BJ)){b.ka=1;BQ=1;}else{b=b;b.ka=1;BQ=1;b=b.j0;if(CB){e=new Ct;e.kq=1;e.ku=b;e.lv=1;}else{if(b.j$===null){e=new C2;e.lE=b;e.lG=1;b.j$=e;}e=CL(b.j$);}while(true){if(!e.kq){c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(e.lf>=e.ku.jF?0:1))break;b=Co(e);if(!(b instanceof BJ)){b.ka=1;BQ=1;}else{b=b;b.ka=1;BQ=1;f=b.j0;if(CB){b=new Ct;b.kq=1;b.ku=f;b.lv
=1;}else{if(f.j$===null){b=new C2;By(b);b.lE=f;b.lG=1;f.j$=b;}b=CL(f.j$);}while(true){if(!b.kq){c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(b.lf>=b.ku.jF?0:1))break;f=Co(b);if(!(f instanceof BJ)){f.ka=1;BQ=1;}else{f=f;f.ka=1;BQ=1;f=f.j0;if(CB){g=new Ct;By(g);g.kq=1;g.ku=f;g.lv=1;}else{if(f.j$===null)f.j$=Ll(f,1);g=CL(f.j$);}while(true){if(!g.kq){c=new Q;GD(c,A(17));B(c);}if(!(g.lf>=g.ku.jF?0:1))break;f=Co(g);if(!(f instanceof BJ)){f.ka=1;BQ=1;}else{f=f;f.ka=1;BQ=1;f=f.j0;if(CB)h=LL(f,1);else{if(f.j$===null)f.j$
=Nn(f);h=CL(f.j$);}while(true){if(!h.kq)break b;if(!(h.lf>=h.ku.jF?0:1))break;f=Co(h);if(!(f instanceof BJ)){f.ka=1;BQ=1;}else{f=f;ER(f,1);f=F7(f.j0);while(Hh(f)){i=Co(f);if(!(i instanceof BJ))ER(i,1);else Lb(i,1,1);}}}}}}}}}}}}}B(Ka(A(17)));}c=a.ll;b=KP;j=b.lA.data[0];k=b.lz.data[0];c.kw=j;c.kv=k;EG(a.mq,c);b=a.ll;j=b.kw;k=b.kv;c=a.k3;b.kw=j;b.kv=k;Dp(c,b);b=a.k3;c=a.ll;c=HQ(b,c.kw,c.kv,1);if(c===null)return;if(!a.vn)b=c;else{b=c.kO;if(b===null)b=c;}c=a.tj;if(c===Ix){b.ka=1;BQ=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof Ee)break;b=b.kO;}}if(b===null)return;b.K(c);}d:{if(a.wz&&b instanceof BJ){c=b;c.ka=1;BQ=1;c=c.j0;if(CB){d=new Ct;d.kq=1;d.ku=c;d.lv=1;}else{if(c.j$===null){d=new C2;d.lE=c;d.lG=1;c.j$=d;}d=CL(c.j$);}e:while(true){if(!d.kq){c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(d.lf>=d.ku.jF?0:1))break d;c=Co(d);if(!(c instanceof BJ)){c.ka=1;BQ=1;}else{c=c;c.ka=1;BQ=1;c=c.j0;if(CB){e=new Ct;e.kq=1;e.ku=c;e.lv=1;}else{if(c.j$===null){e=new C2;e.lE=c;e.lG=1;c.j$=e;}e=CL(c.j$);}while(true){if(!e.kq)
{c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(e.lf>=e.ku.jF?0:1))break;c=Co(e);if(!(c instanceof BJ)){c.ka=1;BQ=1;}else{c=c;c.ka=1;BQ=1;c=c.j0;if(CB){f=new Ct;f.kq=1;f.ku=c;f.lv=1;}else{if(c.j$===null){f=new C2;f.lE=c;f.lG=1;c.j$=f;}f=CL(c.j$);}while(true){if(!f.kq){c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(f.lf>=f.ku.jF?0:1))break;c=Co(f);if(!(c instanceof BJ)){c.ka=1;BQ=1;}else{c=c;c.ka=1;BQ=1;c=c.j0;if(CB){g=new Ct;g.kq=1;g.ku=c;g.lv=1;}else{if(c.j$===null){g=new C2;By(g);g.lE=c;g.lG=1;c.j$=g;}g=CL(c.j$);}while
(true){if(!g.kq){c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}if(!(g.lf>=g.ku.jF?0:1))break;c=Co(g);if(!(c instanceof BJ)){c.ka=1;BQ=1;}else{c=c;c.ka=1;BQ=1;c=c.j0;if(CB){h=new Ct;By(h);h.kq=1;h.ku=c;h.lv=1;}else{if(c.j$===null)c.j$=Ll(c,1);h=CL(c.j$);}while(true){if(!h.kq){c=new Q;GD(c,A(17));B(c);}if(!(h.lf>=h.ku.jF?0:1))break;c=Co(h);if(!(c instanceof BJ)){c.ka=1;BQ=1;}else{c=c;c.ka=1;BQ=1;c=c.j0;if(CB)i=LL(c,1);else{if(c.j$===null)c.j$=Nn(c);i=CL(c.j$);}while(true){if(!i.kq)break e;if(!(i.lf>=i.ku.jF?0:1))break;c
=Co(i);if(!(c instanceof BJ)){c.ka=1;BQ=1;}else{c=c;ER(c,1);c=F7(c.j0);while(Hh(c)){l=Co(c);if(!(l instanceof BJ))ER(l,1);else Lb(l,1,1);}}}}}}}}}}}}}B(Ka(A(17)));}}c=a.k3;if(c!==b)f:{c.ka=0;if(c instanceof BJ){c=c.j0;m=0;n=c.jF;g:while(true){if(m>=n)break f;if(m>=c.jF){d=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,m,10);F(b,b.jz,A(19));m=c.jF;L(b,b.jz,m,10);c=new H;o=b.jA;p=o.data;n=b.jz;q=p.length;if(n>=0&&n<=(q-0|0)){c.jB=K(o.data,0,n);d.jC=1;d.jD=1;d.jE=c;B(d);}b=new I;b.jC=1;b.jD=1;B(b);}d=c.jQ.data[m];if
(d!==b)h:{d.ka=0;if(d instanceof BJ){d=d.j0;q=0;r=d.jF;while(true){if(q>=r)break h;if(q>=d.jF){c=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,q,10);F(b,b.jz,A(19));m=d.jF;L(b,b.jz,m,10);d=new H;o=b.jA;p=o.data;n=b.jz;q=p.length;if(n>=0&&n<=(q-0|0)){d.jB=K(o.data,0,n);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}e=d.jQ.data[q];if(e!==b)i:{e.ka=0;if(e instanceof BJ){e=e.j0;s=0;t=e.jF;while(true){if(s>=t)break i;if(s>=e.jF){c=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,s,10);F(b,b.jz,A(19));m
=e.jF;L(b,b.jz,m,10);d=new H;o=b.jA;p=o.data;n=b.jz;q=p.length;if(n>=0&&n<=(q-0|0)){d.jB=K(o.data,0,n);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}f=e.jQ.data[s];if(f!==b)j:{f.ka=0;if(f instanceof BJ){f=f.j0;u=0;v=f.jF;while(true){if(u>=v)break j;if(u>=f.jF){c=new I;b=new J;By(b);b.jA=G(16);B0(b,b.jz,A(18));L(b,b.jz,u,10);B0(b,b.jz,A(19));m=f.jF;L(b,b.jz,m,10);d=new H;o=b.jA;p=o.data;n=b.jz;q=p.length;if(n>=0&&n<=(q-0|0)){d.jB=K(o.data,0,n);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}g
=f.jQ.data[u];if(g!==b)k:{g.ka=0;if(g instanceof BJ){g=g.j0;w=0;x=g.jF;while(true){if(w>=x)break k;if(w>=g.jF){c=new I;b=new J;Dq(b,16);B2(b,b.jz,A(18));H$(b,w,10);B2(b,b.jz,A(19));H$(b,g.jF,10);d=new H;o=b.jA;p=o.data;n=b.jz;q=p.length;if(n>=0&&n<=(q-0|0)){d.jB=K(o.data,0,n);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}h=g.jQ.data[w];if(h!==b)l:{h.ka=0;if(h instanceof BJ){h=h.j0;y=0;z=h.jF;while(true){if(y>=z)break l;if(y>=h.jF){c=new I;b=new J;D1(b);EZ(b,A(18));Id(b,y);EZ(b,A(19));Id(b,h.jF);d=new H;o
=b.jA;p=o.data;n=b.jz;q=p.length;if(n>=0&&n<=(q-0|0)){d.jB=K(o.data,0,n);GD(c,d);B(c);}b=new I;b.jC=1;b.jD=1;B(b);}i=h.jQ.data[y];if(i!==b)m:{i.ka=0;if(i instanceof BJ){l=i.j0;ba=0;bb=l.jF;while(true){if(ba>=bb)break m;if(ba>=l.jF)break g;i=l.jQ.data[ba];if(i!==b)n:{ER(i,0);if(i instanceof BJ){i=i.j0;bc=0;bd=i.jF;while(true){if(bc>=bd)break n;OI(a,GE(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(Ub(EK(Ht(H6(Ht(H6(Ez(),A(18)),ba),A(19)),l.jF))));}}}B1.W(3042);b
=a.p5;c=a.mq.qa.pQ;C8(b.sq,c.kQ);b.nX=1;b=a.p5;if(!b.rX){c=new BN;c.jC=1;c.jD=1;c.jE=A(20);B(c);}FJ(b,HD);OC(a.k3,a.p5);b=a.p5;FG(b.kG);b.mi=null;B1.bb(3042);},
OI=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.ka=0;if(b instanceof BJ){d=b.j0;e=0;f=d.jF;while(true){if(e>=f)break a;if(e>=d.jF){c=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,e,10);F(b,b.jz,A(19));e=d.jF;L(b,b.jz,e,10);d=new H;g=b.jA;h=g.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0)){d.jB=K(g.data,0,f);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}b=d.jQ.data[e];if(b!==c)b:{b.ka=0;if(b instanceof BJ){j=b.j0;i=0;k=j.jF;while(true){if(i>=k)break b;if
(i>=j.jF){c=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,i,10);F(b,b.jz,A(19));e=j.jF;L(b,b.jz,e,10);d=new H;g=b.jA;h=g.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0)){d.jB=K(g.data,0,f);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}b=j.jQ.data[i];if(b!==c)c:{b.ka=0;if(b instanceof BJ){l=b.j0;m=0;n=l.jF;while(true){if(m>=n)break c;if(m>=l.jF){c=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,m,10);F(b,b.jz,A(19));e=l.jF;L(b,b.jz,e,10);d=new H;g=b.jA;h=g.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0))
{d.jB=K(g.data,0,f);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}b=l.jQ.data[m];if(b!==c)d:{b.ka=0;if(b instanceof BJ){b=b.j0;o=0;p=b.jF;while(true){if(o>=p)break d;if(o>=b.jF){d=new I;c=new J;c.jA=G(16);F(c,c.jz,A(18));L(c,c.jz,o,10);F(c,c.jz,A(19));e=b.jF;L(c,c.jz,e,10);b=new H;g=c.jA;h=g.data;f=c.jz;i=h.length;if(f>=0&&f<=(i-0|0)){b.jB=K(g.data,0,f);d.jC=1;d.jD=1;d.jE=b;B(d);}b=new I;b.jC=1;b.jD=1;B(b);}q=b.jQ.data[o];if(q!==c)e:{q.ka=0;if(q instanceof BJ){r=q.j0;s=0;t=r.jF;while(true){if(s>=t)break e;if
(s>=r.jF){c=new I;b=new J;By(b);b.jA=G(16);B0(b,b.jz,A(18));L(b,b.jz,s,10);B0(b,b.jz,A(19));e=r.jF;L(b,b.jz,e,10);d=new H;g=b.jA;h=g.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0)){d.jB=K(g.data,0,f);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}q=r.jQ.data[s];if(q!==c)f:{q.ka=0;if(q instanceof BJ){q=q.j0;u=0;v=q.jF;while(true){if(u>=v)break f;if(u>=q.jF){c=new I;b=new J;Dq(b,16);B2(b,b.jz,A(18));H$(b,u,10);B2(b,b.jz,A(19));H$(b,q.jF,10);d=new H;g=b.jA;h=g.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0)){d.jB
=K(g.data,0,f);c.jC=1;c.jD=1;c.jE=d;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}w=q.jQ.data[u];if(w!==c)g:{w.ka=0;if(w instanceof BJ){w=w.j0;x=0;y=w.jF;while(true){if(x>=y)break g;if(x>=w.jF){c=new I;b=new J;D1(b);EZ(b,A(18));Id(b,x);EZ(b,A(19));Id(b,w.jF);d=new H;g=b.jA;h=g.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0)){d.jB=K(g.data,0,f);GD(c,d);B(c);}b=new I;b.jC=1;b.jD=1;B(b);}z=w.jQ.data[x];if(z!==c)h:{z.ka=0;if(z instanceof BJ){z=z.j0;ba=0;bb=z.jF;while(true){if(ba>=bb)break h;if(ba>=z.jF)B(Ub(EK(Ht(H6(Ht(H6(Ez(),
A(18)),ba),A(19)),z.jF))));bc=z.jQ.data[ba];if(bc!==c)i:{ER(bc,0);if(bc instanceof BJ){bc=bc.j0;bd=0;be=bc.jF;while(true){if(bd>=be)break i;OI(a,GE(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
AMW=(a,b)=>{let c,d,e,f,g;c=0;d=a.qZ.data.length;while(c<d){e=a.qZ.data;f=e[c];if(a.r1.data[c])e[c]=PB(a,f,a.o1.data[c],a.o4.data[c],c);else if(f!==null){e[c]=null;Nv(a,f,a.o1.data[c],a.o4.data[c],c);}c=c+1|0;}g=G$;if(!(g!==MJ&&g!==Mm&&g!==g))a.rv=PB(a,a.rv,a.q6,a.q7,(-1));Q6(a.k3,b);},
PB=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.ll;g=c;h=d;f.kw=g;f.kv=h;EG(a.mq,f);f=a.ll;g=f.kw;h=f.kv;i=a.k3;f.kw=g;f.kv=h;Dp(i,f);f=a.k3;i=a.ll;j=HQ(f,i.kw,i.kv,1);if(j===b)return b;if(b!==null){Cz();i=Br;d=BE(i,M(X));k=d<0?null:i.kh.data[d];if(k===null){k=new Cy;i=new Bt;i.kr=0;i.jQ=R(C,4);k.jU=i;k.kp=100;a:{try{i=CG(M(X),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{i=CF(M(X),null);CI(i,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}i
=null;}k.j_=i;if(i===null){b=new Bx;i=new J;i.jA=G(16);F(i,i.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);f=M(X).jI;F(i,i.jz,f);f=new H;l=i.jA;m=l.data;d=i.jz;e=m.length;if(d>=0&&d<=(e-0|0)){f.jB=K(l.data,0,d);b.jC=1;b.jD=1;b.jE=f;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(X),k);}f=k.jU;c=f.jF;if(c){if(!c){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}c=c-1|0;f.jF=c;l=f.jQ.data;f=l[c];l[c]=null;}else b:{try{f=CS(k.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}i
=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));n=k.j_.k9.k8;if(n.jI===null)n.jI=T(n.jP.$meta.name);k=n.jI;F(b,b.jz,k);k=new H;l=b.jA;m=l.data;d=b.jz;e=m.length;if(d>=0&&d<=(e-0|0)){k.jB=K(l.data,0,d);i.jC=1;i.jD=1;i.jE=k;i.kU=f;B(i);}b=new I;b.jC=1;b.jD=1;B(b);}f=f;f.lV=Iw;f.ke=a;i=a.ll;f.ne=i.kw;f.nf=i.kv;f.oo=e;f.kV=j;DR(b,f);i=Br;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BF;k.jP=o;p=k;o.classObject=p;}}c=BE(i,k);i=c<0?null:i.kh.data[c];if(i!==null){k=i.jU;if(k.jF<i.kp){BB(k,f);c
=i.ki;d=i.jU.jF;if(c>d)d=c;i.ki=d;if(BA(f,Bw)){f=f;f.ke=null;f.kD=null;f.kE=null;f.kM=0;f.kI=1;f.kx=0;f.kL=0;f.kB=0;f.kV=null;f.kT=(-1);}}else if(BA(f,Bw)){f=f;f.ke=null;f.kD=null;f.kE=null;f.kM=0;f.kI=1;f.kx=0;f.kL=0;f.kB=0;f.kV=null;f.kT=(-1);}}}if(j!==null){Cz();i=Br;d=BE(i,M(X));k=d<0?null:i.kh.data[d];if(k===null){k=new Cy;i=new Bt;i.kr=0;i.jQ=R(C,4);k.jU=i;k.kp=100;c:{try{i=CG(M(X),null);break c;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{i=CF(M(X),null);CI(i,1);break c;}catch
($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}i=null;}k.j_=i;if(i===null){b=new Bx;i=new J;i.jA=G(16);F(i,i.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);f=M(X).jI;F(i,i.jz,f);f=new H;l=i.jA;m=l.data;d=i.jz;e=m.length;if(d>=0&&d<=(e-0|0)){f.jB=K(l.data,0,d);b.jC=1;b.jD=1;b.jE=f;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(X),k);}f=k.jU;c=f.jF;if(c){if(!c){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}c=c-1|0;f.jF=c;l=f.jQ.data;f=l[c];l[c]=null;}else d:{try{f=CS(k.j_,null);break d;}catch($$e)
{$$je=Bb($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}i=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));n=k.j_.k9.k8;if(n.jI===null)n.jI=T(n.jP.$meta.name);k=n.jI;F(b,b.jz,k);k=new H;l=b.jA;m=l.data;d=b.jz;e=m.length;if(d>=0&&d<=(e-0|0)){k.jB=K(l.data,0,d);i.jC=1;i.jD=1;i.jE=k;i.kU=f;B(i);}b=new I;b.jC=1;b.jD=1;B(b);}f=f;f.lV=MM;f.ke=a;i=a.ll;f.ne=i.kw;f.nf=i.kv;f.oo=e;f.kV=b;DR(j,f);b=Br;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BF;i.jP=k;o=i;k.classObject=o;}}c=BE(b,i);b=
c<0?null:b.kh.data[c];if(b!==null){i=b.jU;if(i.jF<b.kp){BB(i,f);c=b.ki;d=b.jU.jF;if(c>d)d=c;b.ki=d;if(BA(f,Bw)){b=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.kV=null;b.kT=(-1);}}else if(BA(f,Bw)){b=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.kV=null;b.kT=(-1);}}}return j;},
Nv=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.ll;g=c;h=d;f.kw=g;f.kv=h;EG(a.mq,f);Cz();i=Br;d=BE(i,M(X));j=d<0?null:i.kh.data[d];if(j===null){j=new Cy;i=new Bt;i.kr=0;i.jQ=R(C,4);j.jU=i;j.kp=100;a:{try{i=CG(M(X),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{i=CF(M(X),null);CI(i,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}i=null;}j.j_=i;if(i===null){b=new Bx;i=new J;i.jA=G(16);F(i,i.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);f
=M(X).jI;F(i,i.jz,f);f=new H;k=i.jA;l=k.data;d=i.jz;e=l.length;if(d>=0&&d<=(e-0|0)){f.jB=K(k.data,0,d);b.jC=1;b.jD=1;b.jE=f;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(X),j);}f=j.jU;c=f.jF;if(c){if(!c){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}c=c-1|0;f.jF=c;k=f.jQ.data;f=k[c];k[c]=null;}else b:{try{f=CS(j.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}i=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));m=j.j_.k9.k8;if(m.jI===null)m.jI=T(m.jP.$meta.name);j=m.jI;F(b,b.jz,j);j=new H;k
=b.jA;l=k.data;d=b.jz;e=l.length;if(d>=0&&d<=(e-0|0)){j.jB=K(k.data,0,d);i.jC=1;i.jD=1;i.jE=j;i.kU=f;B(i);}b=new I;b.jC=1;b.jD=1;B(b);}f=f;f.lV=Iw;f.ke=a;i=a.ll;f.ne=i.kw;f.nf=i.kv;f.oo=e;f.kV=b;DR(b,f);b=Br;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BF;i.jP=j;n=i;j.classObject=n;}}c=BE(b,i);b=c<0?null:b.kh.data[c];if(b!==null){i=b.jU;if(i.jF<b.kp){BB(i,f);c=b.ki;d=b.jU.jF;if(c>d)d=c;b.ki=d;if(BA(f,Bw)){b=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.kV
=null;b.kT=(-1);}}else if(BA(f,Bw)){b=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.kV=null;b.kT=(-1);}}},
NB=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;if(!R$(a,b,c))return 0;a.r1.data[d]=1;a.o1.data[d]=b;a.o4.data[d]=c;f=a.ll;g=b;h=c;f.kw=g;f.kv=h;EG(a.mq,f);Cz();i=Br;c=BE(i,M(X));j=c<0?null:i.kh.data[c];if(j===null){j=new Cy;i=new Bt;i.kr=0;i.jQ=R(C,4);j.jU=i;j.kp=100;a:{try{i=CG(M(X),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{i=CF(M(X),null);CI(i,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}i=null;}j.j_=i;if(i===null){i=new Bx;j=new J;j.jA
=G(16);F(j,j.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);f=M(X).jI;F(j,j.jz,f);f=new H;k=j.jA;l=k.data;c=j.jz;d=l.length;if(c>=0&&c<=(d-0|0)){f.jB=K(k.data,0,c);i.jC=1;i.jD=1;i.jE=f;B(i);}f=new I;f.jC=1;f.jD=1;B(f);}Cc(Br,M(X),j);}f=j.jU;b=f.jF;if(b){if(!b){f=new BN;f.jC=1;f.jD=1;f.jE=A(22);B(f);}b=b-1|0;f.jF=b;k=f.jQ.data;f=k[b];k[b]=null;}else b:{try{f=CS(j.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}m=new Q;f=new J;f.jA=G(16);F(f,f.jz,A(23));n=j.j_.k9.k8;if
(n.jI===null)n.jI=T(n.jP.$meta.name);j=n.jI;F(f,f.jz,j);j=new H;k=f.jA;l=k.data;c=f.jz;d=l.length;if(c>=0&&c<=(d-0|0)){j.jB=K(k.data,0,c);m.jC=1;m.jD=1;m.jE=j;m.kU=i;B(m);}f=new I;f.jC=1;f.jD=1;B(f);}f=f;f.lV=Ip;f.ke=a;i=a.ll;g=i.kw;f.ne=g;h=i.kv;f.nf=h;f.oo=d;f.kT=e;j=a.k3;i.kw=g;i.kv=h;Dp(j,i);i=a.k3;j=a.ll;i=HQ(i,j.kw,j.kv,1);if(i!==null)DR(i,f);else{i=a.k3;if(i.rh===Jr)DR(i,f);}o=f.kx;i=Br;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BF;j.jP=m;p=j;m.classObject=p;}}b=BE(i,j);i
=b<0?null:i.kh.data[b];if(i!==null){j=i.jU;if(j.jF<i.kp){BB(j,f);b=i.ki;c=i.jU.jF;if(b>c)c=b;i.ki=c;if(BA(f,Bw)){f=f;f.ke=null;f.kD=null;f.kE=null;f.kM=0;f.kI=1;f.kx=0;f.kL=0;f.kB=0;f.kV=null;f.kT=(-1);}}else if(BA(f,Bw)){f=f;f.ke=null;f.kD=null;f.kE=null;f.kM=0;f.kI=1;f.kx=0;f.kL=0;f.kB=0;f.kV=null;f.kT=(-1);}}return o;},
S9=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a.o1.data[d]=b;a.o4.data[d]=c;a.q6=b;a.q7=c;if(!a.oU.jF)return 0;e=a.ll;f=b;g=c;e.kw=f;e.kv=g;EG(a.mq,e);Cz();h=Br;c=BE(h,M(X));i=c<0?null:h.kh.data[c];if(i===null){i=new Cy;h=new Bt;h.kr=0;h.jQ=R(C,4);i.jU=h;i.kp=100;a:{try{h=CG(M(X),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{h=CF(M(X),null);CI(h,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}h=null;}i.j_=h;if(h===null){h=new Bx;i=new J;i.jA
=G(16);F(i,i.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);e=M(X).jI;F(i,i.jz,e);e=new H;j=i.jA;k=j.data;c=i.jz;d=k.length;if(c>=0&&c<=(d-0|0)){e.jB=K(j.data,0,c);h.jC=1;h.jD=1;h.jE=e;B(h);}e=new I;e.jC=1;e.jD=1;B(e);}Cc(Br,M(X),i);}e=i.jU;b=e.jF;if(b){if(!b){e=new BN;e.jC=1;e.jD=1;e.jE=A(22);B(e);}b=b-1|0;e.jF=b;j=e.jQ.data;e=j[b];j[b]=null;}else b:{try{e=CS(i.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){h=$$je;}else{throw $$e;}}l=new Q;e=new J;e.jA=G(16);F(e,e.jz,A(23));m=i.j_.k9.k8;if
(m.jI===null)m.jI=T(m.jP.$meta.name);i=m.jI;F(e,e.jz,i);i=new H;j=e.jA;k=j.data;c=e.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);l.jC=1;l.jD=1;l.jE=i;l.kU=h;B(l);}e=new I;e.jC=1;e.jD=1;B(e);}e=e;e.lV=Iv;e.ke=a;h=a.ll;e.ne=h.kw;e.nf=h.kv;e.oo=d;h=a.oU;C7(h);j=h.jQ;h.m2=j;h.l1=h.l1+1|0;j=j;n=0;o=h.jF;while(n<o){i=j.data[n];if(i.rq==d&&KX(h,i,1)){e.kD=i.p$;e.kE=i.pl;if(H1(i.qm,e))e.kx=1;}n=n+1|0;}Fd(h);p=e.kx;h=Br;l=e.constructor;if(l===null)i=null;else{i=l.classObject;if(i===null){i=new BF;i.jP=l;q=i;l.classObject
=q;}}b=BE(h,i);h=b<0?null:h.kh.data[b];if(h!==null){i=h.jU;if(i.jF<h.kp){BB(i,e);b=h.ki;c=h.jU.jF;if(b>c)c=b;h.ki=c;if(BA(e,Bw)){e=e;e.ke=null;e.kD=null;e.kE=null;e.kM=0;e.kI=1;e.kx=0;e.kL=0;e.kB=0;e.kV=null;e.kT=(-1);}}else if(BA(e,Bw)){e=e;e.ke=null;e.kD=null;e.kE=null;e.kM=0;e.kI=1;e.kx=0;e.kL=0;e.kB=0;e.kV=null;e.kT=(-1);}}return p;},
LJ=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;a.r1.data[d]=0;a.o1.data[d]=b;a.o4.data[d]=c;if(!a.oU.jF)return 0;f=a.ll;g=b;h=c;f.kw=g;f.kv=h;EG(a.mq,f);Cz();i=Br;c=BE(i,M(X));j=c<0?null:i.kh.data[c];if(j===null){j=new Cy;i=new Bt;i.kr=0;i.jQ=R(C,4);j.jU=i;j.kp=100;a:{try{i=CG(M(X),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{i=CF(M(X),null);CI(i,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}i=null;}j.j_=i;if(i===null){i=new Bx;j=new J;j.jA
=G(16);F(j,j.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);f=M(X).jI;F(j,j.jz,f);f=new H;k=j.jA;l=k.data;c=j.jz;d=l.length;if(c>=0&&c<=(d-0|0)){f.jB=K(k.data,0,c);i.jC=1;i.jD=1;i.jE=f;B(i);}f=new I;f.jC=1;f.jD=1;B(f);}Cc(Br,M(X),j);}f=j.jU;b=f.jF;if(b){if(!b){f=new BN;f.jC=1;f.jD=1;f.jE=A(22);B(f);}b=b-1|0;f.jF=b;k=f.jQ.data;f=k[b];k[b]=null;}else b:{try{f=CS(j.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}m=new Q;f=new J;f.jA=G(16);F(f,f.jz,A(23));n=j.j_.k9.k8;if
(n.jI===null)n.jI=T(n.jP.$meta.name);j=n.jI;F(f,f.jz,j);j=new H;k=f.jA;l=k.data;c=f.jz;d=l.length;if(c>=0&&c<=(d-0|0)){j.jB=K(k.data,0,c);m.jC=1;m.jD=1;m.jE=j;m.kU=i;B(m);}f=new I;f.jC=1;f.jD=1;B(f);}f=f;f.lV=GT;f.ke=a;i=a.ll;f.ne=i.kw;f.nf=i.kv;f.oo=d;f.kT=e;i=a.oU;C7(i);k=i.jQ;i.m2=k;i.l1=i.l1+1|0;k=k;o=0;p=i.jF;while(o<p){j=k.data[o];if(j.rq==d&&j.tp==e){C7(i);if(KG(i,j,1)){f.kD=j.p$;f.kE=j.pl;if(H1(j.qm,f))f.kx=1;m=Br;n=j.constructor;if(n===null)q=null;else{q=n.classObject;if(q===null){q=new BF;q.jP=n;r
=q;n.classObject=r;}}b=BE(m,q);m=b<0?null:m.kh.data[b];if(m!==null){q=m.jU;if(q.jF<m.kp){BB(q,j);b=m.ki;c=m.jU.jF;if(b>c)c=b;m.ki=c;if(BA(j,Bw))j.bt();}else if(BA(j,Bw))j.bt();}}}o=o+1|0;}Fd(i);s=f.kx;i=Br;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BF;j.jP=m;q=j;m.classObject=q;}}b=BE(i,j);i=b<0?null:i.kh.data[b];if(i!==null){j=i.jU;if(j.jF<i.kp){BB(j,f);b=i.ki;c=i.jU.jF;if(b>c)c=b;i.ki=c;if(BA(f,Bw)){f=f;f.ke=null;f.kD=null;f.kE=null;f.kM=0;f.kI=1;f.kx=0;f.kL=0;f.kB=0;f.kV=null;f.kT
=(-1);}}else if(BA(f,Bw)){f=f;f.ke=null;f.kD=null;f.kE=null;f.kM=0;f.kI=1;f.kx=0;f.kL=0;f.kB=0;f.kV=null;f.kT=(-1);}}return s;},
ADp=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,$$je;a.q6=b;a.q7=c;if(!R$(a,b,c))return 0;d=a.ll;e=b;f=c;d.kw=e;d.kv=f;EG(a.mq,d);Cz();g=Br;c=BE(g,M(X));h=c<0?null:g.kh.data[c];if(h===null){h=new Cy;g=new Bt;g.kr=0;g.jQ=R(C,4);h.jU=g;h.kp=100;a:{try{g=CG(M(X),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{g=CF(M(X),null);CI(g,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}g=null;}h.j_=g;if(g===null){g=new Bx;h=new J;h.jA=G(16);F(h,h.jz,A(21));if(M(X).jI
===null)M(X).jI=T(M(X).jP.$meta.name);d=M(X).jI;F(h,h.jz,d);d=new H;i=h.jA;j=i.data;c=h.jz;k=j.length;if(c>=0&&c<=(k-0|0)){d.jB=K(i.data,0,c);g.jC=1;g.jD=1;g.jE=d;B(g);}d=new I;d.jC=1;d.jD=1;B(d);}Cc(Br,M(X),h);}d=h.jU;b=d.jF;if(b){if(!b){d=new BN;d.jC=1;d.jD=1;d.jE=A(22);B(d);}b=b-1|0;d.jF=b;i=d.jQ.data;d=i[b];i[b]=null;}else b:{try{d=CS(h.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){g=$$je;}else{throw $$e;}}l=new Q;d=new J;d.jA=G(16);F(d,d.jz,A(23));m=h.j_.k9.k8;if(m.jI===null)m.jI=T(m.jP.$meta.name);h
=m.jI;F(d,d.jz,h);h=new H;i=d.jA;j=i.data;c=d.jz;k=j.length;if(c>=0&&c<=(k-0|0)){h.jB=K(i.data,0,c);l.jC=1;l.jD=1;l.jE=h;l.kU=g;B(l);}d=new I;d.jC=1;d.jD=1;B(d);}d=d;d.lV=KE;d.ke=a;g=a.ll;e=g.kw;d.ne=e;f=g.kv;d.nf=f;h=a.k3;g.kw=e;g.kv=f;Dp(h,g);g=a.k3;h=a.ll;g=HQ(g,h.kw,h.kv,1);if(g===null)g=a.k3;DR(g,d);n=d.kx;g=Br;l=d.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new BF;h.jP=l;o=h;l.classObject=o;}}b=BE(g,h);g=b<0?null:g.kh.data[b];if(g!==null){h=g.jU;if(h.jF<g.kp){BB(h,d);b=g.ki;c=g.jU.jF;if
(b>c)c=b;g.ki=c;if(BA(d,Bw)){d=d;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}else if(BA(d,Bw)){d=d;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}return n;},
AMJ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;d=a.ql;if(d===null)d=a.k3;e=a.ll;f=a.q6;g=a.q7;e.kw=f;e.kv=g;EG(a.mq,e);Cz();h=Br;i=BE(h,M(X));j=i<0?null:h.kh.data[i];if(j===null){j=new Cy;h=new Bt;h.kr=0;h.jQ=R(C,4);j.jU=h;j.kp=100;a:{try{h=CG(M(X),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{h=CF(M(X),null);CI(h,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}h=null;}j.j_=h;if(h===null){d=new Bx;h=new J;h.jA=G(16);F(h,h.jz,A(21));if(M(X).jI
===null)M(X).jI=T(M(X).jP.$meta.name);e=M(X).jI;F(h,h.jz,e);e=new H;k=h.jA;l=k.data;i=h.jz;m=l.length;if(i>=0&&i<=(m-0|0)){e.jB=K(k.data,0,i);d.jC=1;d.jD=1;d.jE=e;B(d);}d=new I;d.jC=1;d.jD=1;B(d);}Cc(Br,M(X),j);}e=j.jU;n=e.jF;if(n){if(!n){d=new BN;d.jC=1;d.jD=1;d.jE=A(22);B(d);}n=n-1|0;e.jF=n;k=e.jQ.data;e=k[n];k[n]=null;}else b:{try{e=CS(j.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){e=$$je;}else{throw $$e;}}h=new Q;d=new J;d.jA=G(16);F(d,d.jz,A(23));o=j.j_.k9.k8;if(o.jI===null)o.jI=T(o.jP.$meta.name);j
=o.jI;F(d,d.jz,j);j=new H;k=d.jA;l=k.data;i=d.jz;m=l.length;if(i>=0&&i<=(m-0|0)){j.jB=K(k.data,0,i);h.jC=1;h.jD=1;h.jE=j;h.kU=e;B(h);}d=new I;d.jC=1;d.jD=1;B(d);}e=e;e.lV=K4;e.ke=a;h=a.ll;e.ne=h.kw;e.nf=h.kv;e.yA=b;e.yz=c;DR(d,e);p=e.kx;d=Br;j=e.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BF;h.jP=j;q=h;j.classObject=q;}}n=BE(d,h);d=n<0?null:d.kh.data[n];if(d!==null){h=d.jU;if(h.jF<d.kp){BB(h,e);n=d.ki;i=d.jU.jF;if(n>i)i=n;d.ki=i;if(BA(e,Bw)){d=e;d.ke=null;d.kD=null;d.kE=null;d.kM=
0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}else if(BA(e,Bw)){d=e;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}return p;},
ATK=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.oU;C7(d);e=d.jQ;d.m2=e;d.l1=d.l1+1|0;e=e;f=0;g=d.jF;h=null;i=null;j=null;a:while(true){if(f>=g){Fd(d);if(c!==null){Cz();b=Br;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BF;d.jP=k;l=d;k.classObject=l;}}m=BE(b,d);b=m<0?null:b.kh.data[m];if(b!==null){d=b.jU;if(d.jF<b.kp){BB(d,c);m=b.ki;f=b.jU.jF;if(m>f)f=m;b.ki=f;if(BA(c,Bw)){b=c;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.kV=null;b.kT=(-1);}}else if
(BA(c,Bw)){b=c;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.kV=null;b.kT=(-1);}}}return;}k=e.data[f];if(k.pl===b){C7(d);if(KG(d,k,1)){if(c===null){Cz();c=Br;n=BE(c,M(X));l=n<0?null:c.kh.data[n];if(l===null){l=new Cy;c=new Bt;c.kr=0;c.jQ=R(C,4);l.jU=c;l.kp=100;b:{try{c=CG(M(X),h);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{c=CF(M(X),i);CI(c,1);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}c=null;}l.j_=c;if(c===null){b=new Bx;c
=new J;c.jA=G(16);F(c,c.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);d=M(X).jI;F(c,c.jz,d);d=new H;e=c.jA;o=e.data;f=c.jz;g=o.length;if(f>=0&&f<=(g-0|0)){d.jB=K(e.data,0,f);b.jC=1;b.jD=1;b.jE=d;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(X),l);}c:{c=l.jU;m=c.jF;if(m){if(!m)break a;m=m-1|0;c.jF=m;o=c.jQ.data;c=o[m];o[m]=null;}else try{c=CS(l.j_,j);break c;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){c=$$je;d=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));h=l.j_.k9.k8;if(h.jI===null)h.jI=T(h.jP.$meta.name);k
=h.jI;F(b,b.jz,k);k=new H;e=b.jA;o=e.data;f=b.jz;g=o.length;if(f>=0&&f<=(g-0|0)){k.jB=K(e.data,0,f);d.jC=1;d.jD=1;d.jE=k;d.kU=c;B(d);}b=new I;b.jC=1;b.jD=1;B(b);}else{throw $$e;}}}c=c;c.lV=GT;c.ke=a;c.ne=(-2.147483648E9);c.nf=(-2.147483648E9);}c.kD=k.p$;c.kE=k.pl;c.oo=k.rq;c.kT=k.tp;H1(k.qm,c);}}f=f+1|0;}b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);},
F3=(a,b)=>{let c,d,e;c=0;d=a.qZ.data.length;while(c<d){e=a.qZ.data;if(b===e[c]){e[c]=null;Nv(a,b,a.o1.data[c],a.o4.data[c],c);}c=c+1|0;}if(b===a.rv){a.rv=null;Nv(a,b,a.q6,a.q7,(-1));}},
AUX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.nv===b)return 1;Cz();c=Br;d=BE(c,M(CT));e=d<0?null:c.kh.data[d];if(e===null){e=new Cy;c=new Bt;c.kr=0;c.jQ=R(C,4);e.jU=c;e.kp=100;a:{try{c=CG(M(CT),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{c=CF(M(CT),null);CI(c,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}c=null;}e.j_=c;if(c===null){b=new Bx;c=new J;c.jA=G(16);F(c,c.jz,A(21));if(M(CT).jI===null)M(CT).jI=T(M(CT).jP.$meta.name);f=M(CT).jI;F(c,
c.jz,f);f=new H;g=c.jA;h=g.data;d=c.jz;i=h.length;if(d>=0&&d<=(i-0|0)){f.jB=K(g.data,0,d);b.jC=1;b.jD=1;b.jE=f;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(CT),e);}f=e.jU;j=f.jF;if(j){if(!j){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}j=j-1|0;f.jF=j;g=f.jQ.data;f=g[j];g[j]=null;}else b:{try{f=CS(e.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));k=e.j_.k9.k8;if(k.jI===null)k.jI=T(k.jP.$meta.name);e=k.jI;F(b,b.jz,e);e=new H;g=b.jA;h
=g.data;d=b.jz;i=h.length;if(d>=0&&d<=(i-0|0)){e.jB=K(g.data,0,d);c.jC=1;c.jD=1;c.jE=e;c.kU=f;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}f=f;f.ke=a;f.wi=LV;c=a.nv;if(c!==null){f.rs=0;f.nM=b;c.bl(f);}j=f.kB?0:1;if(j){a.nv=b;if(b!==null){f.rs=1;f.nM=c;b.bl(f);j=f.kB?0:1;if(!j)a.nv=c;}}b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BF;c.jP=e;l=c;e.classObject=l;}}d=BE(b,c);b=d<0?null:b.kh.data[d];if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if(d>i)i=d;b.ki=i;if(BA(f,Bw)){b
=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.nM=null;}}else if(BA(f,Bw)){b=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.nM=null;}}return j;},
AUA=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.ql===b)return 1;Cz();c=Br;d=BE(c,M(CT));e=d<0?null:c.kh.data[d];if(e===null){e=new Cy;c=new Bt;c.kr=0;c.jQ=R(C,4);e.jU=c;e.kp=100;a:{try{c=CG(M(CT),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{c=CF(M(CT),null);CI(c,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}c=null;}e.j_=c;if(c===null){b=new Bx;c=new J;c.jA=G(16);F(c,c.jz,A(21));if(M(CT).jI===null)M(CT).jI=T(M(CT).jP.$meta.name);f=M(CT).jI;F(c,
c.jz,f);f=new H;g=c.jA;h=g.data;d=c.jz;i=h.length;if(d>=0&&d<=(i-0|0)){f.jB=K(g.data,0,d);b.jC=1;b.jD=1;b.jE=f;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(CT),e);}f=e.jU;j=f.jF;if(j){if(!j){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}j=j-1|0;f.jF=j;g=f.jQ.data;f=g[j];g[j]=null;}else b:{try{f=CS(e.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));k=e.j_.k9.k8;if(k.jI===null)k.jI=T(k.jP.$meta.name);e=k.jI;F(b,b.jz,e);e=new H;g=b.jA;h
=g.data;d=b.jz;i=h.length;if(d>=0&&d<=(i-0|0)){e.jB=K(g.data,0,d);c.jC=1;c.jD=1;c.jE=e;c.kU=f;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}f=f;f.ke=a;f.wi=M$;c=a.ql;if(c!==null){f.rs=0;f.nM=b;c.bl(f);}j=f.kB?0:1;if(j){a.ql=b;if(b!==null){f.rs=1;f.nM=c;b.bl(f);j=f.kB?0:1;if(!j)a.ql=c;}}b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BF;c.jP=e;l=c;e.classObject=l;}}d=BE(b,c);b=d<0?null:b.kh.data[d];if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if(d>i)i=d;b.ki=i;if(BA(f,Bw)){b
=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.nM=null;}}else if(BA(f,Bw)){b=f;b.ke=null;b.kD=null;b.kE=null;b.kM=0;b.kI=1;b.kx=0;b.kL=0;b.kB=0;b.nM=null;}}return j;},
R$=(a,b,c)=>{let d,e,f,g,h;d=a.mq;e=d.o$;f=e+d.pH|0;g=d.o_;h=g+d.pU|0;c=(B8.kP.height-1|0)-c|0;return b>=e&&b<f&&c>=g&&c<h?1:0;};
let Bw=E(0);
function Fr(){let a=this;C.call(a);a.ke=null;a.kD=null;a.kE=null;a.kM=0;a.kI=0;a.kx=0;a.kL=0;a.kB=0;}
let AQh=a=>{a.kx=1;},
AJF=a=>{return a.kI;},
Ia=a=>{return a.kL;},
FQ=a=>{return a.kB;};
let Dh=E(0);
let B6=E(0);
function BI(){let a=this;C.call(a);a.jR=null;a.jK=0;}
let AOl=a=>{return a.jK;},
AEN=a=>{return a.jR;},
X8=(a,b)=>{return a!==b?0:1;};
let G5=E(BI);
let Jr=null,VH=null,AEc=null,W0=null;
let ANy=()=>{let b,c,d;b=new G5;b.jR=A(24);b.jK=0;Jr=b;c=new G5;c.jR=A(25);c.jK=1;VH=c;d=new G5;d.jR=A(26);d.jK=2;AEc=d;W0=S(G5,[b,c,d]);};
function CP(){let a=this;C.call(a);a.k4=null;a.kO=null;a.vu=null;a.r9=null;a.rP=null;a.x2=null;a.rh=null;a.mL=0;a.ka=0;a.kt=0.0;a.ks=0.0;a.l5=0.0;a.l2=0.0;a.pX=0.0;a.pY=0.0;a.pp=0.0;a.pr=0.0;a.qn=0.0;a.ra=null;}
let EP=a=>{let b,c;b=new KH;b.kr=1;b.jQ=R(C,0);c=new Fy;c.oB=1;c.l3=W(0);b.p0=c;a.vu=b;b=new KH;b.kr=1;b.jQ=R(C,0);c=new Fy;c.oB=1;c.l3=W(0);b.p0=c;a.r9=b;b=new Bt;b.kr=1;b.jQ=R(C,0);a.rP=b;a.rh=Jr;a.mL=1;a.pp=1.0;a.pr=1.0;b=new BH;b.kn=1.0;b.km=1.0;b.kl=1.0;b.kk=1.0;CQ(b);a.ra=b;},
AV1=()=>{let a=new CP();EP(a);return a;},
Ki=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.rP;if(!c.jF)return;d=a.k4;d!==null&&!d.r6;a:{try{e=0;while(e<c.jF){d=GE(c,e);if(AQt(d,b)&&e<c.jF){f=GE(c,e)===d?e:EO(c,d,1);if(f!=(-1)){DL(c,f);AMp(d,null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Bb($$e);if($$je instanceof Bx){g=$$je;break a;}else{throw $$e;}}return;}h=a.T();c=new Bx;d=new J;d.jA=G(16);F(d,d.jz,A(27));i=h.jB.length;e=128;if(i<e)e=i;j=Cm(h,0,e);F(d,d.jz,j);j=new H;k=d.jA;l=k.data;e=d.jz;m=l.length;if(e>=0&&e<=(m-0|0)){j.jB=K(k.data,0,e);c.jC=1;c.jD
=1;c.jE=j;c.kU=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);},
DR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.ke===null)b.ke=a.k4;b.kD=a;Cz();c=Br;d=BE(c,M(Bt));e=d<0?null:c.kh.data[d];if(e===null){e=new Cy;c=new Bt;c.kr=0;c.jQ=R(C,4);e.jU=c;e.kp=100;a:{try{c=CG(M(Bt),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{c=CF(M(Bt),null);CI(c,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}c=null;}e.j_=c;if(c===null){b=new Bx;c=new J;c.jA=G(16);F(c,c.jz,A(21));if(M(Bt).jI===null)M(Bt).jI=T(M(Bt).jP.$meta.name);f
=M(Bt).jI;F(c,c.jz,f);f=new H;g=c.jA;h=g.data;d=c.jz;i=h.length;if(d>=0&&d<=(i-0|0)){f.jB=K(g.data,0,d);b.jC=1;b.jD=1;b.jE=f;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(Bt),e);}f=e.jU;j=f.jF;if(j){if(!j){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}j=j-1|0;f.jF=j;g=f.jQ.data;f=g[j];g[j]=null;}else b:{try{f=CS(e.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));k=e.j_.k9.k8;if(k.jI===null)k.jI=T(k.jP.$meta.name);e=k.jI;F(b,b.jz,e);e=
new H;g=b.jA;h=g.data;d=b.jz;i=h.length;if(d>=0&&d<=(i-0|0)){e.jB=K(g.data,0,d);c.jC=1;c.jD=1;c.jE=e;c.kU=f;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}f=f;c=a.kO;while(c!==null){BB(f,c);c=c.kO;}c:{try{g=f.jQ;j=f.jF-1|0;}catch($$e){$$je=Bb($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;IK(g.data[j],b,1);if(Ia(b))break;j=j+(-1)|0;}j=FQ(b);}catch($$e){$$je=Bb($$e);b=$$je;break c;}g=f.jQ;d=0;i=f.jF;b=null;if(d>i){b=new Bn;b.jC=1;b.jD=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jF=0;b=Br;m=f.constructor;if(m
===null)k=null;else{k=m.classObject;if(k===null){k=new BF;k.jP=m;c=k;m.classObject=c;}}d=BE(b,k);b=d<0?null:b.kh.data[d];if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if(d>i)i=d;b.ki=i;if(BA(f,Bw))f.bt();}else if(BA(f,Bw))f.bt();}return j;}e:{try{IK(a,b,1);if(!Ia(b))break e;j=FQ(b);}catch($$e){$$je=Bb($$e);b=$$je;break c;}g=f.jQ;d=0;i=f.jF;b=null;if(d>i){b=new Bn;b.jC=1;b.jD=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jF=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===
null){c=new BF;c.jP=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kh.data[d];if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if(d>i)i=d;b.ki=i;if(BA(f,Bw))f.bt();}else if(BA(f,Bw))f.bt();}return j;}f:{try{IK(a,b,0);if(AJF(b))break f;j=FQ(b);}catch($$e){$$je=Bb($$e);b=$$je;break c;}g=f.jQ;d=0;i=f.jF;b=null;if(d>i){b=new Bn;b.jC=1;b.jD=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jF=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BF;c.jP=e;m=c;e.classObject=m;}}d
=BE(b,c);b=d<0?null:b.kh.data[d];if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if(d>i)i=d;b.ki=i;if(BA(f,Bw))f.bt();}else if(BA(f,Bw))f.bt();}return j;}g:{try{if(!Ia(b))break g;j=FQ(b);}catch($$e){$$je=Bb($$e);b=$$je;break c;}g=f.jQ;d=0;i=f.jF;b=null;if(d>i){b=new Bn;b.jC=1;b.jD=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jF=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BF;c.jP=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kh.data[d];if(b!==null){c=b.jU;if
(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if(d>i)i=d;b.ki=i;if(BA(f,Bw))f.bt();}else if(BA(f,Bw))f.bt();}return j;}try{j=0;d=f.jF;}catch($$e){$$je=Bb($$e);b=$$je;break c;}h:{try{while(j<d){IK(g.data[j],b,0);if(Ia(b))break h;j=j+1|0;}j=FQ(b);}catch($$e){$$je=Bb($$e);b=$$je;break c;}g=f.jQ;d=0;i=f.jF;b=null;if(d>i){b=new Bn;b.jC=1;b.jD=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jF=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BF;c.jP=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<
0?null:b.kh.data[d];if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if(d>i)i=d;b.ki=i;if(BA(f,Bw))f.bt();}else if(BA(f,Bw))f.bt();}return j;}try{j=FQ(b);}catch($$e){$$je=Bb($$e);b=$$je;break c;}g=f.jQ;d=0;i=f.jF;b=null;if(d>i){b=new Bn;b.jC=1;b.jD=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.jF=0;b=Br;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BF;c.jP=e;m=c;e.classObject=m;}}d=BE(b,c);b=d<0?null:b.kh.data[d];if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,f);d=b.ki;i=b.jU.jF;if
(d>i)i=d;b.ki=i;if(BA(f,Bw))f.bt();}else if(BA(f,Bw))f.bt();}return j;}g=f.jQ;j=0;d=f.jF;c=null;if(j>d){b=new Bn;b.jC=1;b.jD=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.jF=0;if(f===null){f=new Bn;f.jC=1;f.jD=1;f.jE=A(28);B(f);}c=Br;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BF;e.jP=m;k=e;m.classObject=k;}}j=BE(c,e);c=j<0?null:c.kh.data[j];if(c!==null){e=c.jU;if(e.jF<c.kp){BB(e,f);j=c.ki;d=c.jU.jF;if(j>d)d=j;c.ki=d;if(BA(f,Bw))f.bt();}else if(BA(f,Bw))f.bt();}B(b);},
IK=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.kD===null){b=new Bn;b.jC=1;b.jD=1;b.jE=A(29);B(b);}d=!c?a.vu:a.r9;if(!d.jF)return b.kB;b.kE=a;b.kM=c;if(b.ke===null)b.ke=a.k4;a:{try{ALT(d);e=0;f=d.jF;while(e<f){if(H1(GE(d,e),b))AQh(b);e=e+1|0;}ANT(d);}catch($$e){$$je=Bb($$e);if($$je instanceof Bx){g=$$je;break a;}else{throw $$e;}}return b.kB;}h=a.T();d=new Bx;b=new J;b.jA=G(16);F(b,b.jz,A(27));i=h.jB.length;e=128;if(i<e)e=i;h=Cm(h,0,e);F(b,b.jz,h);h=new H;j=b.jA;k=j.data;e=b.jz;f=k.length;if(e>=0&&e<=(f-0|0)){h.jB
=K(j.data,0,e);d.jC=1;d.jD=1;d.jE=h;d.kU=g;B(d);}b=new I;b.jC=1;b.jD=1;B(b);},
Rl=(a,b,c,d)=>{if(d&&a.rh!==Jr)return null;if(!a.mL)return null;if(!(b>=0.0&&b<a.l5&&c>=0.0&&c<a.l2))a=null;return a;},
ATo=a=>{return a.k4;},
ANo=(a,b)=>{a.k4=b;},
ATt=(a,b)=>{a.kO=b;},
ATa=a=>{return a.mL;},
AWg=a=>{return;},
AS6=a=>{return;},
T4=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.kO;if(c!==null){d=c.kO;if(d!==null){e=d.kO;if(e!==null){f=e.kO;if(f!==null){g=f.kO;if(g!==null){h=g.kO;if(h!==null){i=h.kO;if(i!==null){j=i.kO;if(j!==null){k=j.kO;if(k!==null)T4(k,b);Dp(j,b);}Dp(i,b);}Dp(h,b);}Dp(g,b);}Dp(f,b);}Dp(e,b);}Dp(d,b);}Dp(c,b);}Dp(a,b);return b;},
Dp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.qn;d=a.pp;e=a.pr;f=a.kt;g=a.ks;if(c!==0.0){h=c*0.01745329238474369;i=Yh(h);j=UI(h);k=a.pX;l=a.pY;m=b.kw-f-k;n=b.kv-g-l;b.kw=(m*i+n*j)/d+k;b.kv=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.kw=b.kw-f;b.kv=b.kv-g;}else{k=a.pX;l=a.pY;b.kw=(b.kw-f-k)/d+k;b.kv=(b.kv-g-l)/e+l;}return b;},
AMx=(a,b)=>{U0(a,b);},
U0=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.ka)return;c=HD;d=b.mi;if(d!==c){if(d===null){b=new BN;b.jC=1;b.jD=1;b.jE=A(30);B(b);}if(!b.rX){c=new BN;c.jC=1;c.jD=1;c.jE=A(31);B(c);}FG(b.kG);b.mi=null;FJ(b,c);}c=a.k4;if(c!==null){d=c.vz;c=b.t8;c.kn=d.kn;c.km=d.km;c.kl=d.kl;c.kk=d.kk;}e=a.kt;f=a.ks;g=a.pX;h=a.pY;i=a.l5;j=a.l2;k=a.pp;l=a.pr;m=a.qn;c=b.t8;AIo(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
ER=(a,b)=>{a.ka=b;if(b)BQ=1;},
AU0=a=>{return a.ka;},
So=a=>{let b,c,d,e;b=a.x2;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BF;c.jP=b;d=c;b.classObject=d;}}if(c.jI===null)c.jI=T(c.jP.$meta.name);b=c.jI;e=Fb(b,46,b.jB.length-1|0);if(e!=(-1))b=Cm(b,e+1|0,b.jB.length);}return b;};
let L1=E(0);
function BJ(){let a=this;CP.call(a);a.j0=null;a.sI=null;a.tw=null;a.oR=null;a.mS=0;a.ym=null;}
let K3=null;
let Q6=(a,b)=>{let c,d,e,f;Ki(a,b);c=a.j0;C7(c);d=c.jQ;c.m2=d;c.l1=c.l1+1|0;d=d;e=0;f=a.j0.jF;while(e<f){d.data[e].be(b);e=e+1|0;}Fd(a.j0);},
AG7=(a,b,c)=>{let d;if(a.mS){d=Kh(a);C8(a.oR,b.oj.kQ);if(b.lT)DX(b);C8(b.oj,d.kQ);if(b.lT)F2(b);}PE(a,b,c);if(a.mS){d=a.oR;if(b.lT)DX(b);C8(b.oj,d.kQ);if(b.lT)F2(b);}},
PE=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.ra.kk;d=a.j0;C7(d);e=d.jQ;d.m2=e;d.l1=d.l1+1|0;f=e;g=a.ym;if(g===null){if(a.mS){h=0;i=d.jF;while(h<i){j=f.data[h];if(j.mL)j.bO(b,c);h=h+1|0;}}else{k=a.kt;l=a.ks;a.kt=0.0;a.ks=0.0;h=0;i=d.jF;while(h<i){j=f.data[h];if(j.mL){m=j.kt;n=j.ks;j.kt=m+k;j.ks=n+l;j.bO(b,c);j.kt=m;j.ks=n;}h=h+1|0;}a.kt=k;a.ks=l;}}else{o=g.y0;p=o+g.ze;q=g.yZ;r=q+g.xP;if(a.mS){s=0;i=d.jF;while(s<i){j=f.data[s];if(j.mL){m=j.kt;n=j.ks;if(m<=p&&n<=r&&m+j.l5>=o&&n+j.l2>=q)j.bO(b,c);}s=s
+1|0;}}else{k=a.kt;l=a.ks;a.kt=0.0;a.ks=0.0;s=0;i=d.jF;while(s<i){j=f.data[s];if(j.mL){m=j.kt;n=j.ks;if(m<=p&&n<=r&&m+j.l5>=o&&n+j.l2>=q){j.kt=m+k;j.ks=n+l;j.bO(b,c);j.kt=m;j.ks=n;}}s=s+1|0;}a.kt=k;a.ks=l;}}Fd(d);},
OC=(a,b)=>{let c;U0(a,b);if(a.mS){c=Kh(a);C8(a.oR,b.qx.kQ);C8(b.qx,c.kQ);b.nX=1;c=b.mi;if(c!==null){FG(b.kG);b.mi=null;FJ(b,c);}}ZF(a,b);if(a.mS){c=a.oR;C8(b.qx,c.kQ);b.nX=1;}},
ZF=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.j0;C7(c);d=c.jQ;c.m2=d;c.l1=c.l1+1|0;e=d;if(a.mS){f=0;g=c.jF;while(f<g){h=e.data[f];if(h.mL&&!(!h.ka&&!(h instanceof BJ)))h.Z(b);f=f+1|0;}h=b.mi;if(h!==null){FG(b.kG);b.mi=null;FJ(b,h);}}else{i=a.kt;j=a.ks;a.kt=0.0;a.ks=0.0;k=0;g=c.jF;while(k<g){h=e.data[k];if(h.mL&&!(!h.ka&&!(h instanceof BJ))){l=h.kt;m=h.ks;h.kt=l+i;h.ks=m+j;h.Z(b);h.kt=l;h.ks=m;}k=k+1|0;}a.kt=i;a.ks=j;}Fd(c);},
Kh=a=>{let b,c,d,e,f;b=a.sI;c=a.pX;d=a.pY;AFJ(b,a.kt+c,a.ks+d,a.qn,a.pp,a.pr);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.oe=b.oe+b.of*c+b.od*e;b.og=b.og+b.oh*c+b.oi*e;}f=a.kO;a:{while(true){if(f===null)break a;if(f.mS)break;f=f.kO;}}if(f!==null)ZK(b,f.sI);APe(a.tw,b);return a.tw;},
HQ=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.rh===VH)return null;if(!a.mL)return null;e=K3;f=a.j0;g=f.jQ;h=f.jF-1|0;while(true){if(h<0)return Rl(a,b,c,d);i=g.data[h];e.kw=b;e.kv=c;Dp(i,e);f=i.J(e.kw,e.kv,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AM1=(a,b)=>{let c,d,e,f;a.k4=b;c=a.j0;d=c.jQ;e=0;f=c.jF;while(e<f){d.data[e].x(b);e=e+1|0;}},
Lb=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.ka=b;if(b)BQ=1;a:{if(c){d=a.j0;if(!CB){if(d.j$===null){e=new C2;e.lE=d;e.lG=1;d.j$=e;}e=CL(d.j$);}else{e=new Ct;e.kq=1;e.ku=d;e.lv=1;}b:while(true){if(!e.kq){e=new Q;e.jC=1;e.jD=1;e.jE=A(17);B(e);}if(!(e.lf>=e.ku.jF?0:1))break a;d=Co(e);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else{d=d;d.ka=b;if(b)BQ=1;c:{if(c){d=d.j0;if(CB){f=new Ct;f.kq=1;f.ku=d;f.lv=1;}else{if(d.j$===null){g=new C2;g.lE=d;g.lG=1;d.j$=g;}f=CL(d.j$);}while(true){if(!f.kq){e=new Q;e.jC=1;e.jD=1;e.jE=A(17);B(e);}if
(!(f.lf>=f.ku.jF?0:1))break c;d=Co(f);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else{d=d;d.ka=b;if(b)BQ=1;d:{if(c){d=d.j0;if(CB){h=new Ct;h.kq=1;h.ku=d;h.lv=1;}else{if(d.j$===null){g=new C2;g.lE=d;g.lG=1;d.j$=g;}h=CL(d.j$);}while(true){if(!h.kq){e=new Q;e.jC=1;e.jD=1;e.jE=A(17);B(e);}if(!(h.lf>=h.ku.jF?0:1))break d;d=Co(h);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else{d=d;d.ka=b;if(b)BQ=1;e:{if(c){d=d.j0;if(CB){i=new Ct;i.kq=1;i.ku=d;i.lv=1;}else{if(d.j$===null){g=new C2;g.lE=d;g.lG=1;d.j$=g;}i=CL(d.j$);}while
(true){if(!i.kq){e=new Q;e.jC=1;e.jD=1;e.jE=A(17);B(e);}if(!(i.lf>=i.ku.jF?0:1))break e;d=Co(i);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else{d=d;d.ka=b;if(b)BQ=1;f:{if(c){d=d.j0;if(CB){j=new Ct;j.kq=1;j.ku=d;j.lv=1;}else{if(d.j$===null){g=new C2;g.lE=d;g.lG=1;d.j$=g;}j=CL(d.j$);}while(true){if(!j.kq){e=new Q;e.jC=1;e.jD=1;e.jE=A(17);B(e);}if(!(j.lf>=j.ku.jF?0:1))break f;d=Co(j);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else{d=d;d.ka=b;if(b)BQ=1;g:{if(c){d=d.j0;if(CB){g=new Ct;g.kq=1;g.ku=d;g.lv=1;}else{if(d.j$
===null){g=new C2;By(g);g.lE=d;g.lG=1;d.j$=g;}g=CL(d.j$);}while(true){if(!g.kq){e=new Q;e.jC=1;e.jD=1;e.jE=A(17);B(e);}if(!(g.lf>=g.ku.jF?0:1))break g;d=Co(g);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else{d=d;d.ka=b;if(b)BQ=1;h:{if(c){d=d.j0;if(CB){k=new Ct;By(k);k.kq=1;k.ku=d;k.lv=1;}else{if(d.j$===null)d.j$=Ll(d,1);k=CL(d.j$);}while(true){if(!k.kq){e=new Q;GD(e,A(17));B(e);}if(!(k.lf>=k.ku.jF?0:1))break h;d=Co(k);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else{d=d;d.ka=b;if(b)BQ=1;i:{if(c){d=d.j0;if(CB)l=LL(d,
1);else{if(d.j$===null)d.j$=Nn(d);l=CL(d.j$);}while(true){if(!l.kq)break b;if(!(l.lf>=l.ku.jF?0:1))break i;d=Co(l);if(!(d instanceof BJ)){d.ka=b;if(b)BQ=1;}else j:{d=d;ER(d,b);if(c){d=F7(d.j0);while(true){if(!Hh(d))break j;m=Co(d);if(!(m instanceof BJ))ER(m,b);else Lb(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(Ka(A(17)));}}},
AA$=a=>{let b,c,d,e,f;b=new J;b.jA=G(128);Tf(a,b,1);c=b.jz-1|0;b.jz=c;d=new H;e=b.jA;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.jB=K(e.data,0,c);return d;}b=new I;b.jC=1;b.jD=1;B(b);},
Tf=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=So(a);F(b,b.jz,d);e=b.jz;Bf(b,e,e+1|0);b.jA.data[e]=10;d=a.j0;C7(d);f=d.jQ;d.m2=f;d.l1=d.l1+1|0;g=f;h=0;i=a.j0.jF;j=c+1|0;while(h<i){k=0;while(k<c){F(b,b.jz,A(32));k=k+1|0;}d=g.data[h];if(d instanceof BJ)Tf(d,b,j);else{F(b,b.jz,d===null?A(2):d.T());e=b.jz;Bf(b,e,e+1|0);b.jA.data[e]=10;}h=h+1|0;}Fd(a.j0);},
AUf=()=>{K3=new Bm;};
let F8=E(0);
let Dy=E(0);
let GM=E();
let Gq=E(0);
let BX=E();
let L3=null;
let H1=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;if(!(b instanceof X))return 0;LG();switch(Kt.data[b.lV.jK]){case 1:break;case 2:return 0;case 3:return 0;default:c=b.kE;d=L3;e=b.ne;f=b.nf;d.kw=e;d.kv=f;T4(c,d);switch(Kt.data[b.lV.jK]){case 4:c=a.un.p8;d=Sc;g=null;Cz();h=Br;i=BE(h,M(CW));j=i<0?null:h.kh.data[i];if(j===null){j=new Cy;By(j);j.jU=EL(0,4);j.kp=100;a:{try{h=CG(M(CW),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{h=CF(M(CW),null);CI(h,1);break a;}catch($$e)
{$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}h=null;}j.j_=h;if(h===null){b=new Bx;d=new J;D1(d);EZ(d,A(21));if(M(CW).jI===null)M(CW).jI=Ug(M(CW).jP);EZ(d,M(CW).jI);c=new H;k=d.jA;l=k.data;i=d.jz;m=l.length;if(i>=0&&i<=(m-0|0)){c.jB=K(k.data,0,i);b.jC=1;b.jD=1;b.jE=c;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(CW),j);}n=j.jU;o=n.jF;if(o){if(!o){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}o=o-1|0;n.jF=o;k=n.jQ.data;n=k[o];k[o]=null;}else b:{try{n=CS(j.j_,null);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof BD)
{d=$$je;}else{throw $$e;}}c=new Q;b=new J;Dq(b,16);B2(b,b.jz,A(23));h=j.j_.k9.k8;if(h.jI===null)h.jI=T(h.jP.$meta.name);g=h.jI;B2(b,b.jz,g);g=new H;k=b.jA;l=k.data;i=b.jz;m=l.length;if(i>=0&&i<=(m-0|0)){g.jB=K(k.data,0,i);J9(c,g,d);B(c);}b=new I;b.jC=1;b.jD=1;B(b);}h=n;h.my=j;n=h.qe;n.kn=d.kn;n.km=d.km;n.kl=d.kl;n.kk=d.kk;h.tW=3.0;h.p4=g;h.pq=c;if(h.m3===null)h.m3=c;if(c===null){d=j.jU;if(d.jF<j.kp){BB(d,h);o=j.ki;i=j.jU.jF;if(o>i)i=o;j.ki=i;if(BA(h,Bw))h.bt();}else if(BA(h,Bw))h.bt();h.my=null;}BB(c.rP,h);d
=c.k4;d!==null&&!d.r6;if(b.v1){h=b.ke;n=b.kE;g=b.kD;p=b.oo;q=b.kT;d=Br;i=BE(d,M(DI));c=i<0?null:d.kh.data[i];if(c===null){c=new Cy;d=new Bt;d.kr=0;d.jQ=R(C,4);c.jU=d;c.kp=100;c:{try{d=CG(M(DI),null);break c;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{d=CF(M(DI),null);CI(d,1);break c;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}d=null;}c.j_=d;if(d===null){d=new Bx;c=new J;By(c);c.jA=G(16);B0(c,c.jz,A(21));if(M(DI).jI===null)M(DI).jI=T(M(DI).jP.$meta.name);b=M(DI).jI;B0(c,
c.jz,b);b=new H;k=c.jA;l=k.data;i=c.jz;m=l.length;if(i>=0&&i<=(m-0|0)){b.jB=K(k.data,0,i);d.jC=1;d.jD=1;d.jE=b;B(d);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(DI),c);}d:{b=c.jU;o=b.jF;if(o){if(!o){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}o=o-1|0;b.jF=o;k=b.jQ.data;b=k[o];k[o]=null;}else try{b=CS(c.j_,null);break d;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){d=$$je;g=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));h=c.j_.k9.k8;if(h.jI===null)h.jI=T(h.jP.$meta.name);c=h.jI;F(b,b.jz,c);c=new H;k=b.jA;l=k.data;i=b.jz;m=l.length;if
(i>=0&&i<=(m-0|0)){c.jB=K(k.data,0,i);g.jC=1;g.jD=1;Bj(g);g.jE=c;g.kU=d;B(g);}b=new I;b.jC=1;b.jD=1;B(b);}else{throw $$e;}}}b=b;b.pl=n;b.p$=g;b.qm=a;b.rq=p;b.tp=q;BB(h.oU,b);}return 1;case 5:d=a.un.p8;b=Qc;c=null;Cz();n=Br;i=BE(n,M(CW));h=i<0?null:n.kh.data[i];if(h===null){h=new Cy;By(h);h.jU=EL(0,4);h.kp=100;e:{try{n=CG(M(CW),null);break e;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{n=CF(M(CW),null);CI(n,1);break e;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}n
=null;}h.j_=n;if(n===null){b=new Bx;d=new J;D1(d);EZ(d,A(21));if(M(CW).jI===null)M(CW).jI=Ug(M(CW).jP);EZ(d,M(CW).jI);c=new H;k=d.jA;l=k.data;i=d.jz;m=l.length;if(i>=0&&i<=(m-0|0)){c.jB=K(k.data,0,i);b.jC=1;b.jD=1;b.jE=c;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Cc(Br,M(CW),h);}g=h.jU;o=g.jF;if(o){if(!o){b=new BN;b.jC=1;b.jD=1;b.jE=A(22);B(b);}o=o-1|0;g.jF=o;k=g.jQ.data;g=k[o];k[o]=null;}else f:{try{g=CS(h.j_,null);break f;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}c=new Q;b=new J;Dq(b,
16);B2(b,b.jz,A(23));h=h.j_.k9.k8;if(h.jI===null)h.jI=T(h.jP.$meta.name);g=h.jI;B2(b,b.jz,g);g=new H;k=b.jA;l=k.data;i=b.jz;m=l.length;if(i>=0&&i<=(m-0|0)){g.jB=K(k.data,0,i);J9(c,g,d);B(c);}b=new I;b.jC=1;b.jD=1;B(b);}n=g;n.my=h;g=n.qe;g.kn=b.kn;g.km=b.km;g.kl=b.kl;g.kk=b.kk;n.tW=3.0;n.p4=c;n.pq=d;if(n.m3===null)n.m3=d;if(d===null){b=h.jU;if(b.jF<h.kp){BB(b,n);o=h.ki;i=h.jU.jF;if(o>i)i=o;h.ki=i;if(BA(n,Bw))n.bt();}else if(BA(n,Bw))n.bt();n.my=null;}BB(d.rP,n);b=d.k4;b!==null&&!b.r6;return 1;case 6:return 1;case 7:return 0;case 8:return 0;case 9:return 0;case 10:return 0;default:}return 0;}return 0;},
AVS=()=>{L3=new Bm;};
let G3=E(BX);
let AK3=E(G3);
let Gw=E(BI);
let LV=null,M$=null,T$=null;
let Ye=()=>{let b,c;b=new Gw;b.jR=A(33);b.jK=0;LV=b;c=new Gw;c.jR=A(34);c.jK=1;M$=c;T$=S(Gw,[b,c]);};
let MT=E(0);
let IC=E(0);
let Go=E(0);
let Dw=E();
let AN_=E(Dw);
let MH=E(GM);
let Mh=E();
let Tg=null,Tl=null;
let ATT=()=>{Tg=new Bm;Tl=new Bm;};
let ACc=E();
let WV=E();
let VA=E(0);
let Lk=E();
let AKr=E(Lk);
function CT(){let a=this;Fr.call(a);a.rs=0;a.wi=null;a.nM=null;}
let Rv=a=>{a.kI=1;},
AVY=()=>{let a=new CT();Rv(a);return a;},
VO=a=>{a.ke=null;a.kD=null;a.kE=null;a.kM=0;a.kI=1;a.kx=0;a.kL=0;a.kB=0;a.nM=null;};
let QS=E();
let Xg=null;
let V0=()=>{V0=BP(QS);AHZ();};
let AHZ=()=>{let b,c;b=W((T$.p()).data.length);c=b.data;Xg=b;c[LV.jK]=1;c[M$.jK]=2;};
let AIs=E();
let SR=E();
let Wb=null;
let Ry=()=>{Ry=BP(SR);AAC();};
let AAC=()=>{let b,c;b=W((KD.p()).data.length);c=b.data;Wb=b;c[Ip.jK]=1;c[GT.jK]=2;c[Iv.jK]=3;};
let AN$=E(Dw);
let E8=E();
let SM=E(E8);
let VK=E();
let ANV=0,AQ4=0,AIt=0,ARh=0,AEC=0;
let TK=()=>{TK=BP(VK);AQU();};
let AQU=()=>{ANV=C6(T(navigator.platform),A(7));AQ4=C6(T(navigator.platform),A(8));AIt=C6(T(navigator.platform),A(9));ARh=!C6(T(navigator.platform),A(10))&&!C6(T(navigator.platform),A(11))?0:1;AEC=!C6(T(navigator.platform),A(12))&&!C6(T(navigator.platform),A(13))&&!C6(T(navigator.platform),A(14))?0:1;};
let Ly=E();
let AQH=E(G3);
let RU=null;
let AUr=()=>{RU=new Bm;};
let ADx=E();
let R6=null;
let AV4=()=>{R6=new Bm;};
let Uq=E();
let ABU=null,X4=null,ARD=null;
let U7=()=>{U7=BP(Uq);ANp();};
let ANp=()=>{let b;b=new Bt;b.kr=1;b.jQ=R(C,16);ABU=b;b=new Bi;CO();X4=b;ARD=new EY;};
let MN=E();
let Im=E(E8);
let Vv=E(E8);
let DY=E(BX);
let UG=0.0;
let AVF=()=>{UG=0.10000000149011612;};
let Vn=E(Im);
let AAR=E(Fr);
let Kb=E(0);
function X(){let a=this;Fr.call(a);a.lV=null;a.ne=0.0;a.nf=0.0;a.yA=0.0;a.yz=0.0;a.oo=0;a.kT=0;a.t7=0;a.wM=0;a.kV=null;a.v1=0;}
let RT=a=>{a.kI=1;a.v1=1;},
AUe=()=>{let a=new X();RT(a);return a;},
PG=a=>{a.ke=null;a.kD=null;a.kE=null;a.kM=0;a.kI=1;a.kx=0;a.kL=0;a.kB=0;a.kV=null;a.kT=(-1);},
Oe=a=>{return a.lV.jR;};
function DI(){let a=this;C.call(a);a.qm=null;a.pl=null;a.p$=null;a.rq=0;a.tp=0;}
let TJ=a=>{return;},
AS5=()=>{let a=new DI();TJ(a);return a;},
Os=a=>{a.pl=null;a.qm=null;a.p$=null;};
let Nx=E();
let Kt=null;
let LG=()=>{LG=BP(Nx);APC();};
let APC=()=>{let b,c;b=W((KD.p()).data.length);c=b.data;Kt=b;c[Ic.jK]=1;c[LM.jK]=2;c[Jh.jK]=3;c[Ip.jK]=4;c[GT.jK]=5;c[Iv.jK]=6;c[KE.jK]=7;c[K4.jK]=8;c[MM.jK]=9;c[Iw.jK]=10;};
let Dj=E(BI);
let Ip=null,GT=null,Iv=null,KE=null,MM=null,Iw=null,K4=null,Ic=null,LM=null,Jh=null,KD=null;
let AAx=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Dj;b.jR=A(35);b.jK=0;Ip=b;c=new Dj;c.jR=A(36);c.jK=1;GT=c;d=new Dj;d.jR=A(37);d.jK=2;Iv=d;e=new Dj;e.jR=A(38);e.jK=3;KE=e;f=new Dj;f.jR=A(39);f.jK=4;MM=f;g=new Dj;g.jR=A(40);g.jK=5;Iw=g;h=new Dj;h.jR=A(41);h.jK=6;K4=h;i=new Dj;i.jR=A(42);i.jK=7;Ic=i;j=new Dj;j.jR=A(43);j.jK=8;LM=j;k=new Dj;k.jR=A(44);k.jK=9;Jh=k;KD=S(Dj,[b,c,d,e,f,g,h,i,j,k]);};
function Ce(){let a=this;C.call(a);a.pq=null;a.m3=null;a.my=null;}
let AMp=(a,b)=>{let c,d,e;a.pq=b;if(a.m3===null)a.m3=b;if(b===null){b=a.my;if(b!==null){c=b.jU;if(c.jF<b.kp){BB(c,a);d=b.ki;e=b.jU.jF;if(d>e)e=d;b.ki=e;if(BA(a,Bw)){b=a;b.pq=null;b.m3=null;b.my=null;b.qE=0.0;b.q3=0;b.oE=0;b.sa=0;b.p4=null;b.nN=null;}}else if(BA(a,Bw)){b=a;b.pq=null;b.m3=null;b.my=null;b.qE=0.0;b.q3=0;b.oE=0;b.sa=0;b.p4=null;b.nN=null;}a.my=null;}}},
AMs=a=>{let b,c,d,e;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BF;c.jP=b;d=c;b.classObject=d;}}if(c.jI===null)c.jI=T(c.jP.$meta.name);b=c.jI;e=Fb(b,46,b.jB.length-1|0);if(e!=(-1))b=Cm(b,e+1|0,b.jB.length);if(P0(b,A(45)))b=Cm(b,0,b.jB.length-6|0);return b;};
let EE=E(Ce);
let AFs=E(EE);
let AJ5=E(EE);
function CX(){let a=this;Ce.call(a);a.tW=0.0;a.qE=0.0;a.p4=null;a.sa=0;a.q3=0;a.oE=0;}
let AQt=(a,b)=>{let c,d,e,f,$$je;if(a.oE)return 1;c=a.my;a.my=null;a:{try{if(!a.q3){On(a);a.q3=1;}b=a.qE+b;a.qE=b;d=a.tW;e=b<d?0:1;a.oE=e;d=!e?b/d:1.0;f=a.p4;if(f!==null)d=f.b0(d);if(a.sa)d=1.0-d;Rq(a,d);if(a.oE)ARk(a);e=a.oE;break a;}catch($$e){$$je=Bb($$e);f=$$je;}a.my=c;B(f);}a.my=c;return e;},
ARk=a=>{return;};
let Eu=E(CX);
let Xh=E(Eu);
let Zz=E();
let Nj=E(Ce);
let AA8=E(Nj);
let ADq=E(Ce);
let AHC=E(Ce);
let AMn=E(Ce);
let ANf=E();
let Lr=E(Ce);
let AGZ=E(Lr);
let ABQ=E(CX);
let AN5=E(CX);
let AOF=E(Eu);
let AKO=E(Ce);
let ALj=E(Eu);
let AQi=E(CX);
function CW(){let a=this;CX.call(a);a.tZ=0.0;a.t0=0.0;a.t2=0.0;a.t1=0.0;a.nN=null;a.qe=null;}
let Vc=a=>{a.qe=new BH;},
AUj=()=>{let a=new CW();Vc(a);return a;},
On=a=>{let b;if(a.nN===null)a.nN=a.m3.ra;b=a.nN;a.tZ=b.kn;a.t0=b.km;a.t2=b.kl;a.t1=b.kk;},
Rq=(a,b)=>{let c,d,e,f,g,h;if(b===0.0){c=a.nN;b=a.tZ;d=a.t0;e=a.t2;f=a.t1;c.kn=b;c.km=d;c.kl=e;c.kk=f;CQ(c);}else if(b===1.0){c=a.nN;g=a.qe;c.kn=g.kn;c.km=g.km;c.kl=g.kl;c.kk=g.kk;}else{d=a.tZ;c=a.qe;d=d+(c.kn-d)*b;e=a.t0;e=e+(c.km-e)*b;f=a.t2;f=f+(c.kl-f)*b;h=a.t1;h=h+(c.kk-h)*b;c=a.nN;c.kn=d;c.km=e;c.kl=f;c.kk=h;CQ(c);}},
VJ=a=>{a.pq=null;a.m3=null;a.my=null;a.qE=0.0;a.q3=0;a.oE=0;a.sa=0;a.p4=null;a.nN=null;};
let ADZ=E(Ce);
let AGv=E(CX);
let AGL=E(Ce);
let AEt=E(Ce);
let AG2=E(EE);
let Ya=E(CX);
let AQr=E(Ce);
let AKj=E(Eu);
let AEa=E(EE);
let AJx=E(Ce);
let ZB=E(CX);
let AF5=E(CX);
let AAL=E();
let AFY=null;
let ARI=()=>{AFY=S(BF,[M(Qy),M(BH),M(R_),M(SM),M(Vv),M(Im),M(Vn),M(Gd),M(Ru),M(Ur),M(TF),M(QT),M(U_),M(JA),M(Vm),M(SO),M(Oq),M(U2),M(Gz),M(R1),M(Uj),M(RV),M(Q8),M(ON)]);};
let C9=E(BJ);
let Ee=E(C9);
let YQ=null,AGD=null,ANe=null,AR2=null,AJQ=null,Wu=null,ADb=null,AJm=null;
let Qn=()=>{Qn=BP(Ee);ANK();};
let ANK=()=>{let b,c;b=new BH;b.kn=0.0;b.km=0.0;b.kl=1.0;b.kk=1.0;CQ(b);YQ=b;b=new BH;b.kn=1.0;b.km=0.0;b.kl=0.0;b.kk=1.0;CQ(b);AGD=b;b=new BH;b.kn=0.0;b.km=1.0;b.kl=0.0;b.kk=1.0;CQ(b);ANe=b;b=new Vs;c=new Bt;c.kr=0;c.jQ=R(C,16);b.jU=c;b.kp=2147483647;AR2=b;b=new Vr;H4();AJQ=b;Wu=new Vq;ADb=new Vp;AJm=new Vo;};
let FK=E(Ee);
let Le=E(FK);
let ABI=E(Le);
let AN7=E(BX);
let Mf=E(C9);
let RF=E(0);
let En=E();
let ADP=E(En);
let Df=E(CP);
let Yu=E(Df);
let AN6=E(BX);
let B3=E();
let APl=null,AMw=null,AN3=null,ACb=null,AG9=null,AFm=null,AMo=null;
let H4=()=>{H4=BP(B3);Y3();};
let Y3=()=>{let b;b=new IX;H4();b.yo=0.0;APl=b;AMw=new SY;AN3=new SV;ACb=new SU;AG9=new SX;AFm=new SW;AMo=new ST;};
let SX=E(B3);
let AKs=E(B3);
let J5=E(DY);
let AGR=E(J5);
let Vq=E(B3);
let AP6=E(BX);
let LP=E(Ee);
let S4=null,Td=null;
let ATm=()=>{S4=new Bm;Td=new Bm;};
let AKt=E(B3);
let F6=E(0);
function EY(){let a=this;C.call(a);a.y0=0.0;a.yZ=0.0;a.ze=0.0;a.xP=0.0;}
let PY=null,SH=null;
let AVo=()=>{PY=new EY;SH=new EY;};
let DF=E(EY);
let V7=null;
let JC=()=>{JC=BP(DF);Od();};
let Sy=a=>{JC();},
ATb=()=>{let a=new DF();Sy(a);return a;},
Od=()=>{let b,c,d,e,f,g,h,$$je;Cz();b=Br;c=BE(b,M(DF));b=c<0?null:b.kh.data[c];if(b===null){b=new Cy;d=new Bt;d.kr=0;d.jQ=R(C,4);b.jU=d;b.kp=100;a:{try{d=CG(M(DF),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{d=CF(M(DF),null);CI(d,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}d=null;}b.j_=d;if(d===null){b=new Bx;d=new J;d.jA=G(16);F(d,d.jz,A(21));if(M(DF).jI===null)M(DF).jI=T(M(DF).jP.$meta.name);e=M(DF).jI;F(d,d.jz,e);e=new H;f=d.jA;g=f.data;c
=d.jz;h=g.length;if(c>=0&&c<=(h-0|0)){e.jB=K(f.data,0,c);b.jC=1;b.jD=1;b.jE=e;B(b);}e=new I;e.jC=1;e.jD=1;B(e);}Cc(Br,M(DF),b);}V7=b;};
let ADT=E(En);
let Mu=E(Df);
let Qq=null,Qr=null,Qs=null,Su=0.0,NS=0.0;
let AVX=()=>{Qq=new Bm;Qr=new Bm;Qs=new Bm;Su=0.4000000059604645;NS=0.10000000149011612;};
let ABY=E(Mu);
let AF9=E(BX);
let PQ=E(0);
let AMu=E();
let Gd=E();
let Gz=E(Gd);
let TF=E(Gz);
let Mz=E(Df);
let AE_=E(Mz);
let ARY=E(Mf);
let Kd=E(C9);
let ASE=E(FK);
let MX=E(Df);
let Vo=E(B3);
let Uj=E();
let AEo=E();
let AGV=E(BX);
let AIB=E(Dw);
let AFw=E();
let AL1=E(BX);
let ARE=E(DY);
let AF7=E(Mh);
let ST=E(B3);
let SW=E(B3);
let Sp=E(0);
let JA=E();
let Oq=E(JA);
let ADQ=E(En);
let AN4=E(Ly);
let AN8=E(MN);
let AP7=E(BX);
let AP8=E(DY);
let Vp=E(B3);
let Oh=E();
let AEi=null,AJH=null,AEg=null,AJG=null,Wq=null,Z4=null,AJe=null,WT=null,ALU=null;
let TH=()=>{TH=BP(Oh);AAS();};
let AAS=()=>{let b;b=new M_;b.uK=0.0;AEi=b;b=new M_;b.uK=1.0;AJH=b;EI();AEg=D4.data[128];EI();b=D4.data[129];AJG=b;Wq=b;EI();Z4=D4.data[130];EI();AJe=D4.data[132];EI();WT=D4.data[136];EI();ALU=D4.data[144];};
let Ru=E(Gz);
let AGk=E(BX);
let YS=E(Dw);
let SY=E(B3);
let ACi=E(C9);
let AF8=E(BX);
let RV=E();
function IX(){B3.call(this);this.yo=0.0;}
let OR=null;
let AVJ=()=>{OR=R(IX,111);};
let AEp=E(Kd);
let SU=E(B3);
let AHu=E(Df);
let Uf=null;
let AVM=()=>{Uf=new Bm;};
let AGe=E(MH);
let U2=E();
let OF=E(Df);
let Yo=null,ACA=null;
let TZ=()=>{TZ=BP(OF);X7();};
let X7=()=>{let b,c;Yo=new BH;b=new J3;L2();c=new Bt;c.kr=1;c.jQ=R(C,1);b.ya=c;c=new Fy;c.oB=1;c.l3=W(2);b.xo=c;ACA=b;};
let ON=E();
let AKv=E(B3);
let Vr=E(B3);
let ANm=E(LP);
let SV=E(B3);
let QT=E();
let ARt=E();
let Fl=E(BI);
let Ix=null,YF=null,AK0=null,W5=null,ZH=null,AME=null;
let ALm=()=>{let b,c,d,e,f;b=new Fl;b.jR=A(46);b.jK=0;Ix=b;c=new Fl;c.jR=A(47);c.jK=1;YF=c;d=new Fl;d.jR=A(48);d.jK=2;AK0=d;e=new Fl;e.jR=A(49);e.jK=3;W5=e;f=new Fl;f.jR=A(50);f.jK=4;ZH=f;AME=S(Fl,[b,c,d,e,f]);};
let ARM=E(B3);
let AFW=E(Dw);
function De(){let a=this;C.call(a);a.kp=0;a.ki=0;a.jU=null;}
let Vs=E(De);
let YH=E();
let U_=E();
let R_=E();
let SO=E();
let MV=E(BX);
let Re=null;
let AS3=()=>{Re=new Bm;};
let YR=E(Dw);
let AP9=E(MX);
let YK=E(0);
let AGl=E(BX);
let ASv=E(C9);
let AJ2=E(C9);
let AGg=E(DY);
let ML=E();
let ADO=E(ML);
let APJ=E(CP);
let XV=E(BX);
let ANJ=E(FK);
let AI7=E(BX);
let AQ_=E(DY);
let Ur=E(Gd);
let AJ9=E(C9);
let R1=E();
let Q8=E();
let AIJ=E(Df);
let ARF=E(GM);
let XX=E(BX);
let ALI=E(C9);
let RL=null;
let AUw=()=>{RL=new Bm;};
let ARW=E(MV);
let XY=E(Ee);
let ADR=E(En);
let Wd=E();
let Vm=E();
let UU=E();
let Zw=null,Yd=null,Z$=null,AQj=null,AQl=null,AQk=null,ACh=null,ADz=null,AQ0=null,X2=null,AQu=null;
let UW=()=>{UW=BP(UU);AId();};
let AId=()=>{let b;Zw=Cd(16);b=new Ec;b.nH=0.0;b.nE=0.0;b.nF=0.0;b.nG=1.0;Yd=b;b=new Ec;b.nH=0.0;b.nE=0.0;b.nF=0.0;b.nG=1.0;Z$=b;b=new Bi;CO();AQj=b;AQl=new Bi;AQk=new Bi;ACh=new Bi;ADz=C5();AQ0=new Bi;X2=new Bi;AQu=new Bi;};
let BO=E();
let Y2=null,AM5=null,AB4=null,ANc=null,ABh=null,AC8=null,AGW=null,W4=null,AHg=null,ABg=null,AIL=null,ACy=null,AC7=null,Yb=null,WQ=null,AMa=null,AEu=null,AC$=null,ABl=null,ALO=null,AC9=null,APE=null,ADc=null,AHy=null,APj=null,AH7=null,Wa=null,W1=null,AMZ=null,ADB=null,AR5=null,AK9=null,AP1=null,AGp=null,AL6=null,ASu=null,AFa=null,AFu=null,W7=null,ANE=null,AR_=null,AQf=null,ALk=null,ASk=null;
let Ji=()=>{Ji=BP(BO);Zj();};
let Zj=()=>{let b,c;b=new TA;Ji();Y2=b;AM5=new Ts;AB4=new Tr;b=new Tu;ANc=b;ABh=b;b=new Eo;b.mK=2;AC8=b;b=new HB;b.mK=2;AGW=b;W4=b;b=new Hu;b.mK=2;AHg=b;ABg=b;AIL=new Tt;ACy=new Tw;b=new Eo;b.mK=3;AC7=b;b=new HB;b.mK=3;Yb=b;b=new Hu;b.mK=3;WQ=b;AMa=new Tv;AEu=new Ty;b=new Eo;b.mK=4;AC$=b;b=new HB;b.mK=4;ABl=b;b=new Hu;b.mK=4;ALO=b;b=new Eo;b.mK=5;AC9=b;b=new HB;b.mK=5;APE=b;b=new Hu;b.mK=5;ADc=b;AHy=new Tx;APj=new SB;AH7=new SD;b=new FF;b.pt=2.0;b.pJ=10.0;c=Gi(2.0,(-10.0));b.p6=c;b.pO=1.0/(1.0-c);Wa=b;b=new LE;b.pt
=2.0;b.pJ=10.0;c=Gi(2.0,(-10.0));b.p6=c;b.pO=1.0/(1.0-c);W1=b;b=new Nf;b.pt=2.0;b.pJ=10.0;c=Gi(2.0,(-10.0));b.p6=c;b.pO=1.0/(1.0-c);AMZ=b;b=new FF;b.pt=2.0;b.pJ=5.0;c=Gi(2.0,(-5.0));b.p6=c;b.pO=1.0/(1.0-c);ADB=b;b=new LE;b.pt=2.0;b.pJ=5.0;c=Gi(2.0,(-5.0));b.p6=c;b.pO=1.0/(1.0-c);AR5=b;b=new Nf;b.pt=2.0;b.pJ=5.0;c=Gi(2.0,(-5.0));b.p6=c;b.pO=1.0/(1.0-c);AK9=b;AP1=new SE;AGp=new SF;AL6=new SG;b=new Gm;b.up=2.0;b.sP=10.0;b.sT=1.0;b.te=(-21.99114990234375);ASu=b;b=new Ow;b.up=2.0;b.sP=10.0;b.sT=1.0;b.te=18.84955596923828;AFa
=b;b=new Q0;b.up=2.0;b.sP=10.0;b.sT=1.0;b.te=(-21.99114990234375);AFu=b;b=new Q2;b.xL=3.0;W7=b;b=new O8;b.zf=2.0;ANE=b;b=new Vb;b.yj=2.0;AR_=b;b=new Qm;K$(b,4);AQf=b;b=new Ro;K$(b,4);ALk=b;ASk=ABt(4);};
function O8(){BO.call(this);this.zf=0.0;}
let AFZ=E();
let Tv=E(BO);
let AQC=E();
function Eo(){BO.call(this);this.mK=0;}
let HB=E(Eo);
let Hu=E(Eo);
let I8=E(0);
let ABa=E();
let Ty=E(BO);
let AOk=E();
let Tu=E(BO);
function Gm(){let a=this;BO.call(a);a.up=0.0;a.sP=0.0;a.sT=0.0;a.te=0.0;}
let Tt=E(BO);
let Ts=E(BO);
let AKz=E();
let VP=null,VR=null,VQ=null;
let ATx=()=>{VP=new Bm;VR=new Bm;VQ=new Bm;};
let WU=E(De);
let IO=E(0);
function Bm(){let a=this;C.call(a);a.kw=0.0;a.kv=0.0;}
let Oj=null,Oi=null,QI=null;
let ATr=()=>{let b;b=new Bm;b.kw=1.0;b.kv=0.0;Oj=b;b=new Bm;b.kw=0.0;b.kv=1.0;Oi=b;b=new Bm;b.kw=0.0;b.kv=0.0;QI=b;};
let SF=E(BO);
function FF(){let a=this;BO.call(a);a.pt=0.0;a.pJ=0.0;a.p6=0.0;a.pO=0.0;}
let AIF=E();
let TA=E(BO);
let Nf=E(FF);
let AEk=E();
let Ha=E(BI);
let ABN=null,AED=null,ANQ=null,AI_=null;
let AQb=()=>{let b,c,d;b=new Ha;b.jR=A(51);b.jK=0;ABN=b;c=new Ha;c.jR=A(52);c.jK=1;AED=c;d=new Ha;d.jR=A(53);d.jK=2;ANQ=d;AI_=S(Ha,[b,c,d]);};
let R7=E();
let AQn=null;
let RB=()=>{RB=BP(R7);AG1();};
let AG1=()=>{let b;b=new Bi;CO();AQn=b;};
function GH(){let a=this;BO.call(a);a.x7=null;a.xC=null;}
let K$=(a,b)=>{let c,d,e,f,g,h,i,j;Ji();if(b>=2&&b<=5){a:{c=Cd(b);a.x7=c;d=Cd(b);e=d.data;a.xC=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bn;g=new J;g.jA=G(16);F(g,g.jz,A(54));L(g,g.jz,b,10);h=new H;c=g.jA;d=c.data;i=g.jz;j=d.length;if(i>=0&&i<=(j-0|0)){h.jB=K(c.data,0,i);f.jC=1;f.jD=1;f.jE=h;B(f);}g=new I;g.jC
=1;g.jD=1;B(g);},
ABt=a=>{let b=new GH();K$(b,a);return b;};
let Ro=E(GH);
let SB=E(BO);
function Ss(){let a=this;C.call(a);a.of=0.0;a.od=0.0;a.oe=0.0;a.oh=0.0;a.oi=0.0;a.og=0.0;}
let AFJ=(a,b,c,d,e,f)=>{let g,h,i;a.oe=b;a.og=c;if(d===0.0){a.of=e;a.od=0.0;a.oh=0.0;a.oi=f;}else{Gn();g=FV.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.of=i*e;a.od= -h*f;a.oh=h*e;a.oi=i*f;}return a;},
ZK=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.of;d=a.of;e=c*d;f=b.od;g=a.oh;h=e+f*g;i=a.od;e=c*i;j=a.oi;e=e+f*j;k=a.oe;l=c*k;m=a.og;l=l+f*m+b.oe;c=b.oh;d=c*d;f=b.oi;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.og;a.of=h;a.od=e;a.oe=l;a.oh=d;a.oi=j;a.og=c;return a;};
let Tr=E(BO);
function FT(){let a=this;C.call(a);a.qt=0.0;a.qs=0.0;a.qu=0.0;a.qr=0.0;}
let AO4=null,AO1=null,AO2=null,AO3=null,AAG=null;
let ARG=()=>{let b;b=new FT;b.qt=1.0;b.qs=0.0;b.qu=0.0;b.qr=0.0;AO4=b;b=new FT;b.qt=0.0;b.qs=1.0;b.qu=0.0;b.qr=0.0;AO1=b;b=new FT;b.qt=0.0;b.qs=0.0;b.qu=1.0;b.qr=0.0;AO2=b;b=new FT;b.qt=0.0;b.qs=0.0;b.qu=0.0;b.qr=1.0;AO3=b;b=new FT;b.qt=0.0;b.qs=0.0;b.qu=0.0;b.qr=0.0;AAG=b;};
let Ow=E(Gm);
function Q2(){BO.call(this);this.xL=0.0;}
let AAV=E();
let ASf=E();
let Tw=E(BO);
function Vb(){BO.call(this);this.yj=0.0;}
let SG=E(BO);
let Q0=E(Gm);
let VW=E();
let ADa=null,XE=null,AQ7=null;
let PA=()=>{PA=BP(VW);Xm();};
let Xm=()=>{let b,c,d,e,f,g;ADa=R(Bi,15);b=R(Bi,8);XE=b;c=R(Bi,9);d=c.data;AQ7=c;e=0;f=d.length;while(e<f){g=new Bi;CO();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bi;CO();b[e]=g;e=e+1|0;}};
function J_(){let a=this;C.call(a);a.v5=null;a.wc=null;a.vI=null;a.we=null;}
let ACI=null;
let Nu=()=>{Nu=BP(J_);ANs();};
let AKD=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.v5;e=b.jL;f=c.jL;if(e<f)f=e;e=b.jM;g=c.jM;if(e<g)g=e;e=b.jN;h=c.jN;if(e<h)h=e;d.jL=f;d.jM=g;d.jN=h;i=a.wc;e=b.jL;g=c.jL;if(e>g)g=e;e=b.jM;h=c.jM;if(e>h)h=e;e=b.jN;f=c.jN;if(e>f)f=e;i.jL=g;i.jM=h;i.jN=f;b=a.vI;h=d.jL;j=d.jM;k=d.jN;b.jL=h;b.jM=j;b.jN=k;e=i.jL;f=i.jM;g=i.jN;h=h+e;j=j+f;k=k+g;b.jL=h;b.jM=j;b.jN=k;f=h*0.5;g=j*0.5;e=k*0.5;b.jL=f;b.jM=g;b.jN=e;b=a.we;g=i.jL;h=i.jM;j=i.jN;b.jL=g;b.jM=h;b.jN=j;e=d.jL;f=d.jM;k=d.jN;g=g-e;e=h-f;f=j-k;b.jL=g;b.jM=e;b.jN=f;return a;},
ANs=()=>{let b;b=new Bi;CO();ACI=b;};
function Lv(){let a=this;C.call(a);a.xG=null;a.yQ=null;}
let Xe=null;
let L5=()=>{L5=BP(Lv);AND();};
let AND=()=>{let b;b=new Bi;CO();Xe=b;};
let ABj=E();
let Xw=E();
let ALW=E();
let AFl=E();
let S6=E();
let AFi=null;
let Gn=()=>{Gn=BP(S6);AGs();};
let KY=b=>{let c;Gn();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AGs=()=>{let b,c,d,e;b=new Sv;c=ACL(Fo(U(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),U(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(DT(c,B$))c=D(0, 2147483648);d=Z(HN(c,Bd(c,33)),D(3981806797, 4283543511));d=Z(HN(d,Bd(d,33)),D(444984403, 3301882366));e=HN(d,Bd(d,33));d=Z(HN(e,Bd(e,33)),D(3981806797, 4283543511));d=Z(HN(d,Bd(d,33)),D(444984403, 3301882366));d=HN(d,Bd(d,33));b.xi=e;b.xj=d;AFi=b;};
let Uz=E();
let WE=null,WF=null,WG=null,AA0=null,AOA=null,AHD=null,Yr=null,Ys=null,AHe=null,AG_=null,ADX=null,AD0=null,AD1=null,AD3=null,AHh=null,AHc=null,AHP=null,AE8=null,AMt=null,AEK=null,APB=null,APA=null,APy=null,AFO=null;
let Qj=()=>{Qj=BP(Uz);ABo();};
let ABo=()=>{let b,c;b=new Bi;CO();WE=b;WF=new Bi;WG=new Bi;b=new Gv;b.q8=1;b.rb=Cd(16);AA0=b;b=new Gv;b.q8=1;b.rb=Cd(16);AOA=b;AHD=new Bm;Yr=new Bm;Ys=new Bm;AHe=new Bm;AG_=new Bm;ADX=new Bm;AD0=new Bm;AD1=new Bm;AD3=new Bm;b=new Jo;c=new Bi;b.ml=c;b.m1=0.0;c.jL=0.0;c.jM=0.0;c.jN=0.0;b.m1=0.0;AHh=b;AHc=new Bi;AHP=new Bi;AE8=new Bi;AMt=new Bi;AEK=new Bi;APB=new Bi;APA=new Bi;APy=new Bi;AFO=new Bi;};
let YY=E();
let Qm=E(GH);
function Lg(){C.call(this);this.kQ=null;}
let Om=null,AIj=null,APa=null,IE=null,Hf=null,Lu=null,Va=null,Pj=null,AJ4=null,ASx=null,AJ7=null;
let D6=()=>{D6=BP(Lg);XT();};
let AMI=a=>{let b,c;D6();b=Cd(16);c=b.data;a.kQ=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
C5=()=>{let a=new Lg();AMI(a);return a;},
C8=(a,b)=>{let c;c=b.data;b=a.kQ.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
Sm=(a,b)=>{let c,d,e,f,g;D6();c=Om;d=c.data;e=a.kQ.data;f=e[0];g=b.kQ.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return C8(a,c);},
KQ=a=>{let b;b=a.kQ.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
L7=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;KQ(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.kQ.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
ACU=(a,b,c)=>{let d,e,f,g,h,i;D6();d=IE;e=b.jL;f=b.jM;g=b.jN;d.jL=e;d.jM=f;d.jN=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Di(f);f=d.jL*e;g=d.jM*e;e=d.jN*e;d.jL=f;d.jM=g;d.jN=e;}d=Hf;e=b.jL;f=b.jM;g=b.jN;d.jL=e;d.jM=f;d.jN=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Di(f);f=d.jL*e;g=d.jM*e;e=d.jN*e;d.jL=f;d.jM=g;d.jN=e;}b=PF(Hf,c);e=b.jL;e=e*e;f=b.jM;e=e+f*f;f=b.jN;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Di(e);h=b.jL*g;e=b.jM*g;f=b.jN*g;b.jL=h;b.jM=e;b.jN=f;}b=Lu;c=Hf;e=c.jL;f=c.jM;g=c.jN;b.jL=e;b.jM=f;b.jN=g;b=PF(b,
IE);e=b.jL;e=e*e;f=b.jM;e=e+f*f;f=b.jN;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Di(f);f=b.jL*e;g=b.jM*e;e=b.jN*e;b.jL=f;b.jM=g;b.jN=e;}KQ(a);i=a.kQ.data;b=Hf;i[0]=b.jL;i[4]=b.jM;i[8]=b.jN;b=Lu;i[1]=b.jL;i[5]=b.jM;i[9]=b.jN;b=IE;i[2]= -b.jL;i[6]= -b.jM;i[10]= -b.jN;return a;},
APe=(a,b)=>{let c;c=a.kQ.data;c[0]=b.of;c[1]=b.oh;c[2]=0.0;c[3]=0.0;c[4]=b.od;c[5]=b.oi;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.oe;c[13]=b.og;c[14]=0.0;c[15]=1.0;return a;},
N1=(b,c)=>{let d,e,f;D6();d=b.data;c=c.data;e=Cd(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];DD(e,0,b,0,16);},
APW=b=>{D6();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
ADk=b=>{let c,d,e;D6();c=Cd(16);d=APW(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AFD=(b,c,d)=>{let e,f,g,h,i,j,k,l;D6();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
XT=()=>{let b;Om=Cd(16);b=new Ec;b.nH=0.0;b.nE=0.0;b.nF=0.0;b.nG=1.0;AIj=b;b=new Ec;b.nH=0.0;b.nE=0.0;b.nF=0.0;b.nG=1.0;APa=b;b=new Bi;CO();IE=b;Hf=new Bi;Lu=new Bi;Va=new Bi;Pj=C5();AJ4=new Bi;ASx=new Bi;AJ7=new Bi;};
let Pi=E(0);
let L6=E();
function Sv(){let a=this;L6.call(a);a.xi=B$;a.xj=B$;}
let SE=E(BO);
let Tx=E(BO);
function MF(){let a=this;C.call(a);a.o0=null;a.nY=null;a.si=null;}
let ASr=null,U4=null,AJB=null;
let IG=()=>{IG=BP(MF);AHb();};
let XC=a=>{let b,c,d,e,f,g;IG();b=R(Jo,6);c=b.data;a.o0=b;b=R(Bi,8);d=b.data;e=new Bi;CO();d[0]=e;d[1]=new Bi;d[2]=new Bi;d[3]=new Bi;d[4]=new Bi;d[5]=new Bi;d[6]=new Bi;d[7]=new Bi;a.nY=b;a.si=Cd(24);f=0;while(f<6){e=new Jo;g=new Bi;e.ml=g;e.m1=0.0;g.jL=0.0;g.jM=0.0;g.jN=0.0;e.m1=0.0;c[f]=e;f=f+1|0;}},
ALJ=()=>{let a=new MF();XC(a);return a;},
AKl=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;IG();c=U4;d=c.data;DD(c,0,a.si,0,d.length);c=b.kQ;e=a.si;f=0;D6();g=0;while(g<8){AFD(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.nY.data[f];c=a.si.data;j=h+1|0;i.jL=c[h];g=j+1|0;i.jM=c[j];h=g+1|0;i.jN=c[g];f=f+1|0;}b=a.o0.data[0];c=a.nY.data;i=c[1];k=c[0];l=c[2];m=b.ml;n=i.jL;o=i.jM;p=i.jN;m.jL=n;m.jM=o;m.jN=p;q=k.jL;r=k.jM;s=k.jN;t=n-q;u=o-r;p=p-s;m.jL=t;m.jM=u;m.jN=p;q=k.jL-l.jL;r=k.jM-l.jM;s=k.jN-l.jN;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jL=n;m.jM=s;m.jN
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Di(r);r=m.jL*q;s=m.jM*q;q=m.jN*q;m.jL=r;m.jM=s;m.jN=q;}k=b.ml;b.m1= -(i.jL*k.jL+i.jM*k.jM+i.jN*k.jN);b=a.o0.data[1];c=a.nY.data;i=c[4];k=c[5];l=c[7];m=b.ml;n=i.jL;o=i.jM;p=i.jN;m.jL=n;m.jM=o;m.jN=p;q=k.jL;r=k.jM;s=k.jN;t=n-q;u=o-r;p=p-s;m.jL=t;m.jM=u;m.jN=p;q=k.jL-l.jL;r=k.jM-l.jM;s=k.jN-l.jN;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jL=n;m.jM=s;m.jN=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Di(r);r=m.jL*q;s=m.jM*q;q=m.jN*q;m.jL=r;m.jM=s;m.jN=q;}k=b.ml;b.m1= -(i.jL*k.jL+i.jM
*k.jM+i.jN*k.jN);b=a.o0.data[2];c=a.nY.data;i=c[0];k=c[4];l=c[3];m=b.ml;n=i.jL;o=i.jM;t=i.jN;m.jL=n;m.jM=o;m.jN=t;r=k.jL;q=k.jM;s=k.jN;r=n-r;u=o-q;p=t-s;m.jL=r;m.jM=u;m.jN=p;q=k.jL-l.jL;s=k.jM-l.jM;n=k.jN-l.jN;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.jL=o;m.jM=n;m.jN=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Di(r);r=m.jL*q;s=m.jM*q;q=m.jN*q;m.jL=r;m.jM=s;m.jN=q;}k=b.ml;b.m1= -(i.jL*k.jL+i.jM*k.jM+i.jN*k.jN);b=a.o0.data[3];c=a.nY.data;k=c[5];i=c[1];l=c[6];m=b.ml;n=k.jL;t=k.jM;u=k.jN;m.jL=n;m.jM=t;m.jN=u;q=i.jL;r=i.jM;s
=i.jN;o=n-q;t=t-r;u=u-s;m.jL=o;m.jM=t;m.jN=u;p=i.jL-l.jL;q=i.jM-l.jM;r=i.jN-l.jN;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.jL=s;m.jM=r;m.jN=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Di(r);r=m.jL*q;s=m.jM*q;q=m.jN*q;m.jL=r;m.jM=s;m.jN=q;}i=b.ml;b.m1= -(k.jL*i.jL+k.jM*i.jM+k.jN*i.jN);b=a.o0.data[4];c=a.nY.data;i=c[2];k=c[3];l=c[6];m=b.ml;n=i.jL;o=i.jM;p=i.jN;m.jL=n;m.jM=o;m.jN=p;q=k.jL;r=k.jM;s=k.jN;t=n-q;u=o-r;p=p-s;m.jL=t;m.jM=u;m.jN=p;q=k.jL-l.jL;r=k.jM-l.jM;s=k.jN-l.jN;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jL=n;m.jM=s;m.jN
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Di(r);r=m.jL*q;s=m.jM*q;q=m.jN*q;m.jL=r;m.jM=s;m.jN=q;}k=b.ml;b.m1= -(i.jL*k.jL+i.jM*k.jM+i.jN*k.jN);b=a.o0.data[5];c=a.nY.data;i=c[4];k=c[0];l=c[1];m=b.ml;n=i.jL;o=i.jM;p=i.jN;m.jL=n;m.jM=o;m.jN=p;q=k.jL;r=k.jM;s=k.jN;t=n-q;u=o-r;p=p-s;m.jL=t;m.jM=u;m.jN=p;q=k.jL-l.jL;r=k.jM-l.jM;s=k.jN-l.jN;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.jL=n;m.jM=s;m.jN=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Di(r);r=m.jL*q;s=m.jM*q;q=m.jN*q;m.jL=r;m.jM=s;m.jN=q;}k=b.ml;b.m1= -(i.jL*k.jL+i.jM
*k.jM+i.jN*k.jN);},
AHb=()=>{let b,c,d,e,f,g,h,i,j;b=R(Bi,8);c=b.data;d=new Bi;CO();d.jL=(-1.0);d.jM=(-1.0);d.jN=(-1.0);c[0]=d;d=new Bi;d.jL=1.0;d.jM=(-1.0);d.jN=(-1.0);c[1]=d;d=new Bi;d.jL=1.0;d.jM=1.0;d.jN=(-1.0);c[2]=d;d=new Bi;d.jL=(-1.0);d.jM=1.0;d.jN=(-1.0);c[3]=d;d=new Bi;d.jL=(-1.0);d.jM=(-1.0);d.jN=1.0;c[4]=d;d=new Bi;d.jL=1.0;d.jM=(-1.0);d.jN=1.0;c[5]=d;d=new Bi;d.jL=1.0;d.jM=1.0;d.jN=1.0;c[6]=d;d=new Bi;d.jL=(-1.0);d.jM=1.0;d.jN=1.0;c[7]=d;ASr=b;b=Cd(24);e=b.data;U4=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.jL;j=i+1|0;e[i]=d.jM;f=j+1|0;e[j]=d.jN;h=h+1|0;}AJB=new Bi;};
function Ec(){let a=this;C.call(a);a.nH=0.0;a.nE=0.0;a.nF=0.0;a.nG=0.0;}
let QW=null,QV=null;
let AT_=()=>{let b;b=new Ec;b.nH=0.0;b.nE=0.0;b.nF=0.0;b.nG=0.0;QW=b;b=new Ec;b.nH=0.0;b.nE=0.0;b.nF=0.0;b.nG=0.0;QV=b;};
function NO(){let a=this;C.call(a);a.x3=null;a.yr=null;a.x8=null;}
let AJZ=E();
function Bi(){let a=this;C.call(a);a.jL=0.0;a.jM=0.0;a.jN=0.0;}
let AAq=null,AAr=null,AAp=null,AIY=null,AQL=null;
let CO=()=>{CO=BP(Bi);YA();};
let PF=(a,b)=>{let c,d,e,f,g,h,i;c=a.jM;d=b.jN;e=c*d;f=a.jN;g=b.jM;h=e-f*g;e=b.jL;f=f*e;i=a.jL;d=f-i*d;c=i*g-c*e;a.jL=h;a.jM=d;a.jN=c;return a;},
AAQ=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.kQ.data;d=a.jL;e=d*c[3];f=a.jM;e=e+f*c[7];g=a.jN;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.jL=i;a.jM=j;a.jN=d;return a;},
YA=()=>{let b;b=new Bi;CO();b.jL=1.0;b.jM=0.0;b.jN=0.0;AAq=b;b=new Bi;b.jL=0.0;b.jM=1.0;b.jN=0.0;AAr=b;b=new Bi;b.jL=0.0;b.jM=0.0;b.jN=1.0;AAp=b;b=new Bi;b.jL=0.0;b.jM=0.0;b.jN=0.0;AIY=b;AQL=C5();};
let AEn=E();
let ACo=E(De);
let LE=E(FF);
let AKw=E();
let Zo=E();
let AOI=E();
function Jo(){let a=this;C.call(a);a.ml=null;a.m1=0.0;}
let SD=E(BO);
let AOM=E();
let Zx=E();
let ALL=E();
let AOG=E();
let AJk=E(0);
let AEA=E();
let AMB=E();
let FV=null;
let AB1=()=>{let b,c;FV=Cd(16384);b=0;while(b<16384){FV.data[b]=UI((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=FV.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function J3(){let a=this;C.call(a);a.ya=null;a.xo=null;}
let Yp=null,AQS=null;
let L2=()=>{L2=BP(J3);ABA();};
let ABA=()=>{let b,c,d,e,f,g,h,$$je;Cz();b=Br;c=BE(b,M(DE));b=c<0?null:b.kh.data[c];if(b===null){b=new Cy;d=new Bt;d.kr=0;d.jQ=R(C,4);b.jU=d;b.kp=100;a:{try{d=CG(M(DE),null);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{d=CF(M(DE),null);CI(d,1);break a;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}d=null;}b.j_=d;if(d===null){b=new Bx;d=new J;d.jA=G(16);F(d,d.jz,A(21));if(M(DE).jI===null)M(DE).jI=T(M(DE).jP.$meta.name);e=M(DE).jI;F(d,d.jz,e);e=new H;f=d.jA;g
=f.data;c=d.jz;h=g.length;if(c>=0&&c<=(h-0|0)){e.jB=K(f.data,0,c);b.jC=1;b.jD=1;b.jE=e;B(b);}e=new I;e.jC=1;e.jD=1;B(e);}Cc(Br,M(DE),b);}Yp=b;e=new Fy;e.oB=1;e.l3=W(4);AQS=e;};
function Js(){let a=this;C.call(a);a.oT=null;a.uk=0.0;a.ul=0.0;a.uj=0.0;a.uh=0.0;a.t9=0;a.uS=0;}
let Ui=(a,b,c,d,e)=>{let f,g,h;f=a.oT.mR;g=1.0/f.mE;h=1.0/f.mD;a.b9(b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.t9=d;if(e<0)e= -e|0;a.uS=e;},
OO=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.oT.mR;g=f.mE;h=f.mD;i=Kf(d-b);j=g;i=i*j;a.t9=i+CH(i)*0.5|0;k=Kf(e-c);i=h;k=k*i;l=k+CH(k)*0.5|0;a.uS=l;if(a.t9==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.uk=b;a.ul=c;a.uj=d;a.uh=e;};
function Fx(){let a=this;Js.call(a);a.sn=null;a.tH=null;a.yD=0.0;a.yC=0.0;a.wX=0.0;a.vY=0.0;a.zt=0.0;a.zs=0.0;a.yS=0.0;a.w9=0.0;a.w8=0.0;a.rJ=0;}
let Gu=(a,b,c,d,e,f)=>{let g,h,i,j;a.sn=Cd(20);g=new BH;g.kn=1.0;g.km=1.0;g.kl=1.0;g.kk=1.0;CQ(g);a.tH=g;a.w9=1.0;a.w8=1.0;a.rJ=1;if(b===null){b=new Bn;b.jC=1;b.jD=1;b.jE=A(55);B(b);}a.oT=b;Ui(a,c,d,e,f);b=a.tH;b.kn=1.0;b.km=1.0;b.kl=1.0;b.kk=1.0;CQ(b);h=FH(a.tH);i=a.sn.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;Yv(a,h,f);h=a.wX/2.0;j=a.vY/2.0;a.zt=h;a.zs=j;a.rJ=1;},
AUO=(a,b,c,d,e)=>{let f=new Fx();Gu(f,a,b,c,d,e);return f;},
Yv=(a,b,c)=>{let d,e,f,g;a.wX=b;a.vY=c;if(a.rJ)return;if(a.yS===0.0&&a.w9===1.0&&a.w8===1.0){d=a.yD;e=d+b;b=a.yC;f=b+c;g=a.sn.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.rJ=1;},
AOb=(a,b,c,d,e)=>{let f;OO(a,b,c,d,e);f=a.sn.data;f[3]=b;f[4]=e;f[8]=b;f[9]=c;f[13]=d;f[14]=c;f[18]=d;f[19]=e;};
let Qy=E();
let ALr=E();
let OG=null;
let AVQ=()=>{OG=new BH;};
function BH(){let a=this;C.call(a);a.kn=0.0;a.km=0.0;a.kl=0.0;a.kk=0.0;}
let KZ=null,AEW=null,AJM=null,AR6=null,AFA=null,SN=0.0,X3=null,AQB=null,WY=null,AO7=null,AP3=null,AKL=null,AOo=null,AD7=null,Qc=null,AMg=null,AQR=null,AOY=null,ASq=null,XS=null,Q9=null,ASl=null,AIv=null,AQ8=null,APL=null,AOh=null,Sc=null,Xf=null,AH_=null,ADM=null,AE1=null,ADf=null,AH6=null,ALy=null,AMC=null;
let CQ=a=>{let b,c;b=a.kn;if(b<0.0)a.kn=0.0;else if(b>1.0)a.kn=1.0;c=a.km;if(c<0.0)a.km=0.0;else if(c>1.0)a.km=1.0;c=a.kl;if(c<0.0)a.kl=0.0;else if(c>1.0)a.kl=1.0;c=a.kk;if(c<0.0)a.kk=0.0;else if(c>1.0)a.kk=1.0;return a;},
FH=a=>{return KU(((255.0*a.kk|0)<<24|(255.0*a.kl|0)<<16|(255.0*a.km|0)<<8|255.0*a.kn|0)&(-16777217));},
Dk=(b,c,d,e)=>{return KU(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Ck=(b,c)=>{b.kn=((c&(-16777216))>>>24|0)/255.0;b.km=((c&16711680)>>>16|0)/255.0;b.kl=((c&65280)>>>8|0)/255.0;b.kk=(c&255)/255.0;},
Wy=()=>{let b;b=new BH;b.kn=1.0;b.km=1.0;b.kl=1.0;b.kk=1.0;CQ(b);KZ=b;b=new BH;Ck(b,(-1077952513));AEW=b;b=new BH;Ck(b,2139062271);AJM=b;b=new BH;Ck(b,1061109759);AR6=b;b=new BH;b.kn=0.0;b.km=0.0;b.kl=0.0;b.kk=1.0;CQ(b);AFA=b;SN=FH(KZ);b=new BH;b.kn=0.0;b.km=0.0;b.kl=0.0;b.kk=0.0;CQ(b);X3=b;b=new BH;b.kn=0.0;b.km=0.0;b.kl=1.0;b.kk=1.0;CQ(b);AQB=b;b=new BH;b.kn=0.0;b.km=0.0;b.kl=0.5;b.kk=1.0;CQ(b);WY=b;b=new BH;Ck(b,1097458175);AO7=b;b=new BH;Ck(b,1887473919);AP3=b;b=new BH;Ck(b,(-2016482305));AKL=b;b=new BH;b.kn
=0.0;b.km=1.0;b.kl=1.0;b.kk=1.0;CQ(b);AOo=b;b=new BH;b.kn=0.0;b.km=0.5;b.kl=0.5;b.kk=1.0;CQ(b);AD7=b;b=new BH;Ck(b,16711935);Qc=b;b=new BH;Ck(b,2147418367);AMg=b;b=new BH;Ck(b,852308735);AQR=b;b=new BH;Ck(b,579543807);AOY=b;b=new BH;Ck(b,1804477439);ASq=b;b=new BH;Ck(b,(-65281));XS=b;b=new BH;Ck(b,(-2686721));Q9=b;b=new BH;Ck(b,(-626712321));ASl=b;b=new BH;Ck(b,(-5963521));AIv=b;b=new BH;Ck(b,(-1958407169));AQ8=b;b=new BH;Ck(b,(-759919361));APL=b;b=new BH;Ck(b,(-1306385665));AOh=b;b=new BH;Ck(b,(-16776961));Sc
=b;b=new BH;Ck(b,(-13361921));Xf=b;b=new BH;Ck(b,(-8433409));AH_=b;b=new BH;Ck(b,(-92245249));ADM=b;b=new BH;Ck(b,(-9849601));AE1=b;b=new BH;b.kn=1.0;b.km=0.0;b.kl=1.0;b.kk=1.0;CQ(b);ADf=b;b=new BH;Ck(b,(-1608453889));AH6=b;b=new BH;Ck(b,(-293409025));ALy=b;b=new BH;Ck(b,(-1339006721));AMC=b;};
function Ns(){let a=this;C.call(a);a.mv=0;a.n4=0;a.nq=null;a.nT=null;a.nm=null;a.nr=null;a.op=0.0;}
let HS=0.0;
let ALs=(a,b,c,d)=>{if(b!==null&&!(!d&&a.nm===b)){B1.ce(a.mv,10242,b.q$);a.nm=b;}if(c!==null&&!(!d&&a.nr===c)){B1.ce(a.mv,10243,c.q$);a.nr=c;}},
WS=(a,b,c,d)=>{if(b!==null&&!(!d&&a.nq===b)){B1.ce(a.mv,10241,b.nA);a.nq=b;}if(c!==null&&!(!d&&a.nT===c)){B1.ce(a.mv,10240,c.nA);a.nT=c;}},
AEd=()=>{let b,c,d,e,f;b=HS;if(b>0.0)return b;if(!(B8.pc.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){HS=1.0;return 1.0;}if(!C$){c=Cd(16);d=c.data.length;e=new HP;f=0+d|0;e.jZ=(-1);e.j6=d;e.jG=d;e.jO=0;e.jG=f;e.p2=0;e.qD=0;e.pw=c;}else{e=new CR;c=BM(64);e.jZ=(-1);e.j6=64;e.jG=64;e.kC=Cl;e.k2=0;e.ky=c;e.jO=0;e.jG=64;e.lF=1;e.la=0;e.kC=Da();e=EV(e);}CA(e,0);CK(e,e.j6);Bl.cj(34047,e);b=Rr(e,0);HS=b;return b;},
AQW=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.oM)Pt(c);if(Ou===Uk){c=new Q;c.jC=1;c.jD=1;c.jE=A(56);B(c);}if(!c.oM){e=new Q;e.jC=1;e.jD=1;e.jE=A(57);B(e);}c.oM=0;f=c.p7;c.p7=null;g=1;h=c.ph;e=f.k0;if(h===(e===null?Fm:HU(e.li)))e=f;else{e=new Fu;h=f.k0;Jl(e,h===null?f.lJ:h.lD,h===null?f.lN:h.lC,c.ph);h=IR;e.qC=h;i=e.k0;if(i===null){E1(e);h=e.ly;i=Bz(E9.jR);h.globalCompositeOperation=i;}else{j=h!==h?1:0;Mk(i.lB,j);}i=f.k0;k=i===null?f.lJ:i.lD;l=i===null?f.lN:i.lC;h=e.k0;if(h===null){E1(f);JK(e,
f.nP,0,0,k,l,0,0,k,l);}else{m=i.lB;n=h.lB;Ju(m,n,0,0,k,l,0,0,k,l);}if(f.n3){e=new Q;e.jC=1;e.jD=1;e.jE=A(58);B(e);}Ep();GB(FB,f.pk);h=f.k0;if(h!==null)HL(h.lB);f.n3=1;g=1;}B1.cu(3317,1);if(c.vU){c=e.k0;AMS(b,e,c===null?e.lJ:c.lD,c===null?e.lN:c.lC);}else{c=B1;h=e.k0;if(h===null)o=6408;else a:{j=h.li;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new Q;e=new J;e.jA=G(16);B2(e,e.jz,Cg(A(59)));L(e,e.jz,j,10);h=new H;p=e.jA;q=p.data;d=e.jz;j
=q.length;if(d>=0&&d<=(j-0|0)){h.jB=K(p.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}r=h===null?e.lJ:h.lD;k=h===null?e.lN:h.lC;if(h===null)m=6408;else b:{l=h.li;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Q;e=new J;e.jA=G(16);D2(e,e.jz,A(59));L(e,e.jz,l,10);h=new H;p=e.jA;q=p.data;d=e.jz;j=q.length;if(d>=0&&d<=(j-0|0)){h.jB=K(p.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}if(h===null)l=
5121;else c:{l=h.li;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new Q;e=new J;e.jA=G(16);B2(e,e.jz,Cg(A(59)));L(e,e.jz,l,10);h=new H;p=e.jA;q=p.data;d=e.jz;j=q.length;if(d>=0&&d<=(j-0|0)){h.jB=K(p.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}l=5121;}c.cx(b,d,o,r,k,0,m,l,e.pV);}if(g){if(e.n3){e=new Q;e.jC=1;e.jD=1;e.jE=A(58);B(e);}Ep();GB(FB,e.pk);c=e.k0;if(c!==null)HL(c.lB);e.n3=1;}},
AT6=()=>{HS=0.0;};
function FE(){Ns.call(this);this.mR=null;}
let DC=null;
let Gy=(a,b)=>{let c,d;a.mR=b;if(!b.oM)Pt(b);B1.cy(a.mv,a.n4);AQW(3553,b,0);WS(a,a.nq,a.nT,1);ALs(a,a.nm,a.nr,1);c=a.op;d=AEd();if(d!==1.0){c=TV(c,d);Bl.cE(3553,34046,c);a.op=c;}B1.cy(a.mv,0);},
AJl=a=>{let b,c,d,e,f,g,h,i;b=a.mR;if(!(b instanceof KI)){b=a;if(!b.$id$){c=Eg();b.$id$=c;}d=Be(a.$id$,4);b=new J;b.jA=G(16);F(b,b.jz,A(1));e=b.jz;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jA;g=f.data;h=b.jz;i=g.length;if(h>=0&&h<=(i-0|0)){c.jB=K(f.data,0,h);return c;}b=new I;b.jC=1;b.jD=1;B(b);}c=b;if(!c.$id$){d=Eg();c.$id$=d;}d=Be(b.$id$,4);b=new J;b.jA=G(16);F(b,b.jz,A(1));e=b.jz;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.jA;g=f.data;h=b.jz;i=g.length;if(h>=0&&h<=(i-0|0)){c.jB=K(f.data,0,h);return c;}b=new I;b.jC
=1;b.jD=1;B(b);},
AMi=()=>{let b,c,d,e;b=new IH;c=Jw(16);b.oy=0;d=R(Fv,c);e=d.data;b.mx=d;b.st=0.75;b.px=e.length*0.75|0;DC=b;};
function Bt(){let a=this;C.call(a);a.jQ=null;a.jF=0;a.kr=0;a.j$=null;}
let O6=a=>{a.kr=1;a.jQ=R(C,16);},
AVT=()=>{let a=new Bt();O6(a);return a;},
Vt=(a,b)=>{a.kr=1;a.jQ=R(C,b);},
AU8=a=>{let b=new Bt();Vt(b,a);return b;},
Pp=(a,b,c)=>{a.kr=b;a.jQ=R(C,c);},
EL=(a,b)=>{let c=new Bt();Pp(c,a,b);return c;},
H0=(a,b,c,d)=>{a.kr=b;if(d===null){d=new Db;d.jC=1;d.jD=1;B(d);}if(d===M(Bs)){d=new Bn;d.jC=1;d.jD=1;B(d);}if(c>=0){a.jQ=DP(d.jP,c);return;}d=new DS;d.jC=1;d.jD=1;B(d);},
AS$=(a,b,c)=>{let d=new Bt();H0(d,a,b,c);return d;},
P9=(a,b)=>{a.kr=1;if(b===null){b=new Db;b.jC=1;b.jD=1;B(b);}if(b!==M(Bs)){a.jQ=DP(b.jP,16);return;}b=new Bn;b.jC=1;b.jD=1;B(b);},
ATs=a=>{let b=new Bt();P9(b,a);return b;},
UN=(a,b)=>{let c,d,e,f,g;c=b.kr;d=b.jF;e=b.jQ.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BF;f.jP=e;g=f;e.classObject=g;}}g=D7(f);a.kr=c;if(g===null){b=new Db;b.jC=1;b.jD=1;B(b);}if(g===M(Bs)){b=new Bn;b.jC=1;b.jD=1;B(b);}if(d>=0){g=DP(g.jP,d);a.jQ=g;c=b.jF;a.jF=c;Gh(b.jQ,0,g,0,c);return;}b=new DS;b.jC=1;b.jD=1;B(b);},
ASS=a=>{let b=new Bt();UN(b,a);return b;},
Uo=(a,b)=>{Lo(a,1,b,0,b.data.length);},
AVg=a=>{let b=new Bt();Uo(b,a);return b;},
Lo=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BF;g.jP=f;h=g;f.classObject=h;}}h=D7(g);a.kr=b;if(h===null){h=new Db;h.jC=1;h.jD=1;B(h);}if(h===M(Bs)){h=new Bn;h.jC=1;h.jD=1;B(h);}if(e>=0){h=DP(h.jP,e);a.jQ=h;a.jF=e;Gh(c,d,h,0,e);return;}h=new DS;h.jC=1;h.jD=1;B(h);},
AUm=(a,b,c,d)=>{let e=new Bt();Lo(e,a,b,c,d);return e;},
BB=(a,b)=>{let c,d,e,f;c=a.jQ;d=c.data;e=a.jF;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=KM(a,e);}c=c.data;f=a.jF;a.jF=f+1|0;c[f]=b;},
GE=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.jF)return a.jQ.data[b];c=new I;d=new J;d.jA=G(16);F(d,d.jz,A(18));L(d,d.jz,b,10);F(d,d.jz,A(19));b=a.jF;L(d,d.jz,b,10);e=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);c.jC=1;c.jD=1;c.jE=e;B(c);}d=new I;d.jC=1;d.jD=1;B(d);},
KX=(a,b,c)=>{let d,e,f;a:{d=a.jQ;e=a.jF-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(f[e]===b)break;e=c;}return 1;}while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(b.cL(f[e]))return 1;e=c;}}return 0;},
EO=(a,b,c)=>{let d,e,f;a:{d=a.jQ;if(!c&&b!==null){e=0;f=a.jF;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.jF;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
KG=(a,b,c)=>{let d,e,f;a:{d=a.jQ;if(!(!c&&b!==null)){e=0;f=a.jF;while(e<f){if(d.data[e]===b){C7(a);DL(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.jF;while(true){if(e>=f)break a;if(b.cL(d.data[e])){C7(a);DL(a,e);return 1;}e=e+1|0;}}}return 0;},
DL=(a,b)=>{let c,d,e,f,g,h,i;c=a.jF;if(b<c){d=a.jQ;e=d.data;f=e[b];g=c-1|0;a.jF=g;if(!a.kr)e[b]=e[g];else DD(d,b+1|0,d,b,g-b|0);e[a.jF]=null;return f;}f=new I;h=new J;h.jA=G(16);F(h,h.jz,A(18));L(h,h.jz,b,10);F(h,h.jz,A(19));b=a.jF;L(h,h.jz,b,10);i=new H;d=h.jA;e=d.data;g=h.jz;c=e.length;if(g>=0&&g<=(c-0|0)){i.jB=K(d.data,0,g);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;f.jC=1;f.jD=1;B(f);},
P4=a=>{let b,c,d,e,f,g;b=a.jQ;c=0;d=a.jF;e=null;if(c>d){e=new Bn;e.jC=1;e.jD=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.jF=0;},
KM=(a,b)=>{let c,d,e,f,g,h;c=a.jQ;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BF;e.jP=d;f=e;d.classObject=f;}}e=D7(e);if(e===null){e=new Db;e.jC=1;e.jD=1;B(e);}if(e===M(Bs)){e=new Bn;e.jC=1;e.jD=1;B(e);}if(b<0){e=new DS;e.jC=1;e.jD=1;B(e);}e=DP(e.jP,b);d=e.data;g=a.jF;h=d.length;if(g<h)h=g;Gh(c,0,e,0,h);a.jQ=e;return e;},
F7=a=>{let b;if(CB){b=new Ct;b.kq=1;b.ku=a;b.lv=1;return b;}if(a.j$===null){b=new C2;b.lE=a;b.lG=1;a.j$=b;}return CL(a.j$);},
RK=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.kr)return 0;if(!(b instanceof Bt))return 0;c=b;if(!c.kr)return 0;d=a.jF;if(d!=c.jF)return 0;e=a.jQ;f=c.jQ;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cL(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
UV=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.jF)return A(60);b=a.jQ;c=new RC;d=G(32);e=d.data;c.mk=d;f=c.lt;if(f==e.length)F0(c,f+1|0);b=b.data;e=c.mk.data;g=c.lt;c.lt=g+1|0;e[g]=91;h=b[0];if(h===null)Jg(c);else{h=h.T();if(h===null)Jg(c);else{i=h.jB.length;j=c.lt+i|0;if(j>c.mk.data.length)F0(c,j);KT(h,0,i,c.mk,c.lt);c.lt=j;}}i=1;while(i<a.jF){g=A(61).jB.length;k=c.lt+g|0;if(k>c.mk.data.length)F0(c,k);KT(A(61),0,g,c.mk,c.lt);c.lt=k;h=b[i];if(h===null)Jg(c);else{h=h.T();if(h===null)Jg(c);else{k=h.jB.length;j=c.lt+k|0;if
(j>c.mk.data.length)F0(c,j);KT(h,0,k,c.mk,c.lt);c.lt=j;}}i=i+1|0;}f=c.lt;if(f==c.mk.data.length)F0(c,f+1|0);a:{b=c.mk;e=b.data;g=c.lt;f=g+1|0;c.lt=f;e[g]=93;if(!f)c=A(62);else{c=new H;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.jB=K(b.data,0,f);}return c;}c=new I;c.jC=1;c.jD=1;B(c);};
function JH(){let a=this;C.call(a);a.tK=0;a.oz=null;a.kh=null;a.vE=0.0;a.uy=0;a.sf=0;a.sb=0;}
let P6=null;
let AIM=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.vE=c;d=Jd(b,c);a.uy=d*c|0;b=d-1|0;a.sb=b;a.sf=EX(U(b));a.oz=R(C,d);a.kh=R(C,d);return;}e=new Bn;f=new J;f.jA=G(16);F(f,f.jz,A(63));Hv(f,f.jz,c);g=new H;h=f.jA;i=h.data;d=f.jz;j=i.length;if(d>=0&&d<=(j-0|0)){g.jB=K(h.data,0,d);e.jC=1;e.jD=1;e.jE=g;B(e);}f=new I;f.jC=1;f.jD=1;B(f);},
ED=(a,b)=>{let c=new JH();AIM(c,a,b);return c;},
BE=(a,b)=>{let c,d,e;if(b===null){c=new Bn;c.jC=1;c.jD=1;c.jE=A(64);B(c);}d=a.oz;e=Bg(Bd(Z(U(b.cS()),D(2135587861, 2654435769)),a.sf));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cL(b))break;e=(e+1|0)&a.sb;}return e;},
Cc=(a,b,c)=>{let d,e,f;d=BE(a,b);if(d>=0){e=a.kh.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.oz.data;e[d]=b;a.kh.data[d]=c;d=a.tK+1|0;a.tK=d;if(d>=a.uy)AAM(a,e.length<<1);return null;},
AAM=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.oz.data.length;a.uy=b*a.vE|0;d=b-1|0;a.sb=d;a.sf=EX(U(d));e=a.oz;f=a.kh;a.oz=R(C,b);a.kh=R(C,b);if(a.tK>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.oz;b=Bg(Bd(Z(U(g.cS()),D(2135587861, 2654435769)),a.sf));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.sb;}j[b]=g;a.kh.data[b]=h;}d=d+1|0;}}}},
ATH=()=>{P6=new C;};
let AE6=E(JH);
let ARr=E();
function DN(){let a=this;C.call(a);a.mb=0;a.lX=0;a.mj=0;a.ma=0;a.nt=0;a.mf=null;a.nJ=0;a.oO=0;}
let AJu=(a,b)=>{if(!(b instanceof DN))return 0;return AEO(a,b);},
AEO=(a,b)=>{let c,d,e;a:{if(b!==null&&a.mb==b.mb&&a.lX==b.lX&&a.ma==b.ma&&a.mj==b.mj){c=a.mf;d=b.mf;if(c===d)e=1;else if(!(d instanceof H))e=0;else{d=d;e=c.jB!==d.jB?0:1;}if(e&&a.nJ==b.nJ){e=1;break a;}}e=0;}return e;};
let ARJ=E();
let AGB=E();
let AJW=E();
let AH1=E();
let Q_=E();
let WX=null;
let Sq=()=>{Sq=BP(Q_);AGJ();};
let AGJ=()=>{let b,c,d;b=new J_;Nu();c=new Bi;CO();b.v5=c;d=new Bi;b.wc=d;b.vI=new Bi;b.we=new Bi;c.jL=0.0;c.jM=0.0;c.jN=0.0;d.jL=0.0;d.jM=0.0;d.jN=0.0;AKD(b,c,d);WX=b;};
let XR=E();
let AIQ=E();
let AHE=E();
let AIn=E();
let AOi=E();
let AEv=E();
let APO=E();
let AGc=E();
let ZG=E();
let AA1=E();
let Jn=E(BI);
let AR7=null,APR=null,ADS=null;
let AEZ=()=>{let b,c;b=new Jn;b.jR=A(65);b.jK=0;AR7=b;c=new Jn;c.jR=A(66);c.jK=1;APR=c;ADS=S(Jn,[b,c]);};
let AIV=E();
let Tb=E(0);
let Ds=E();
let X1=E(Ds);
let X0=E(Ds);
let AG8=E(Ds);
let ACg=E(Ds);
let ALY=E(Ds);
let Lz=E(Ds);
let AB6=E(Lz);
let Hn=E(0);
let ADd=E();
let E6=E(0);
let ALK=E();
let APK=E();
let AAs=E();
let Ev=E();
let AKF=E(Ev);
let Hg=E(Ev);
let DG=E(Hg);
let ADu=null;
let Qx=()=>{Qx=BP(DG);Yw();};
let Yw=()=>{let b;b=new Bi;CO();ADu=b;};
let ALq=E();
let AOg=E(DG);
let AGq=E(DG);
let AQy=E(Ev);
let Q1=null;
let ATR=()=>{Q1=Cd(3);};
let K1=E(Ev);
let XK=E(K1);
let AB2=E(DG);
let GQ=E(Hg);
let AHV=E(GQ);
let AGn=E(DG);
let AIq=E(DG);
let AHU=E(GQ);
let He=E(BI);
let AHJ=null,AKA=null,ADv=null,AAO=null;
let AJT=()=>{let b,c,d;b=new He;b.jR=A(67);b.jK=0;AHJ=b;c=new He;c.jR=A(68);c.jK=1;AKA=c;d=new He;d.jR=A(69);d.jK=2;ADv=d;AAO=S(He,[b,c,d]);};
let FI=E();
let Mw=E(FI);
let Wm=E(Mw);
let Hw=E(BI);
let APQ=null,AQq=null,V6=null,AQG=null;
let AFT=()=>{let b,c,d;b=new Hw;b.jR=A(70);b.jK=0;APQ=b;c=new Hw;c.jR=A(71);c.jK=1;AQq=c;d=new Hw;d.jR=A(72);d.jK=2;V6=d;AQG=S(Hw,[b,c,d]);};
let CV=E(FI);
let HT=E(CV);
let AAf=E();
let Gt=E(CV);
let AOR=null,AOQ=null,AOS=null,APX=null;
let T0=()=>{T0=BP(Gt);AHq();};
let AHq=()=>{let b;b=new Bi;CO();AOR=b;AOQ=new Bi;AOS=new Bi;b=new Ec;b.nH=0.0;b.nE=0.0;b.nF=0.0;b.nG=1.0;APX=b;};
let Ej=E(Gt);
let FN=E(Ej);
let AC_=E(FN);
let Hs=E(CV);
let ASm=E(Hs);
let AOd=E(CV);
let Fj=E(CV);
let XU=E(Fj);
let G2=E(CV);
let AC3=E(Ej);
let AFh=E(Ej);
let Ko=E(CV);
let AKG=E(Ko);
let Zb=E(Fj);
let AGz=E(FN);
let AKx=E(CV);
let AIA=E(Fj);
let AKN=E(CV);
let AMv=E(Gt);
let AFo=E(De);
let ZR=E(De);
let Z8=E(Ej);
let ALe=E(G2);
let AQA=E(HT);
let AJv=E(HT);
let AMf=E(G2);
let AHs=E(FN);
let ARg=E(Hs);
let Et=E(FI);
let AH0=E(Et);
let Fp=E();
let ALE=E(Fp);
let AMY=E(Et);
let AOc=E(Et);
let APc=E(Fp);
let ACK=E(Et);
let AOj=E(Fp);
let J0=E(0);
let NE=E(0);
function BF(){let a=this;C.call(a);a.jI=null;a.jP=null;a.pB=null;}
let T6=0;
let AUV=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BF;c.jP=b;d=c;b.classObject=d;}return c;},
AHS=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=Eg();b.$id$=c;}d=a.$id$;b=new J;b.jA=G(16);F(b,b.jz,A(73));L(b,b.jz,d,10);c=new H;e=b.jA;f=e.data;g=b.jz;d=f.length;if(g>=0&&g<=(d-0|0)){c.jB=K(e.data,0,g);return c;}b=new I;b.jC=1;b.jD=1;B(b);},
D7=a=>{let b,c,d;b=a.jP.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BF;c.jP=b;d=c;b.classObject=d;}}return c;},
AG0=()=>{DF.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){Sy(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Bs,callable:function(obj,args){JC();Od();return null;}}];DE.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){Qp(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[DE],returnType:Bs,callable:function(obj,
args){AS1(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){AUp(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return AS8(obj);}}];X.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){RT(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,
args){PG(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D9,callable:function(obj,args){return AT3(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[D9],returnType:Bs,callable:function(obj,args){AUN(obj,Jk(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D9,callable:function(obj,args){return AWj(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[D9],returnType:Bs,callable:function(obj,
args){ATF(obj,Jk(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Dj,callable:function(obj,args){return AUK(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Dj],returnType:Bs,callable:function(obj,args){AUD(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BT,callable:function(obj,args){return AVO(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:Bs,callable:function(obj,
args){AT4(obj,B_(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BT,callable:function(obj,args){return AUI(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:Bs,callable:function(obj,args){ATP(obj,B_(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BT,callable:function(obj,args){return AT7(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:Bs,callable
:function(obj,args){AS4(obj,B_(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Kj,callable:function(obj,args){return AUl(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[Kj],returnType:Bs,callable:function(obj,args){AU1(obj,ASI(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:D9,callable:function(obj,args){return ASQ(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:D9,callable:function(obj,args){return AU9(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[D9],returnType:Bs,callable:function(obj,args){AV$(obj,Jk(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[D9],returnType:Bs,callable:function(obj,args){ATp(obj,Jk(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CP,callable:function(obj,args){return AVK(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[CP],returnType:Bs,callable:function(obj,args){ASP(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[CP,Bm],returnType:Bm,callable:function(obj,args){return AVP(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ch,callable:function(obj,args){return AUd(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ch,callable:function(obj,args){return ATS(obj
);}},{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Ch],returnType:Bs,callable:function(obj,args){AVx(obj,Du(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return Oe(obj);}}];Bt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){O6(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:Bs,callable:function(obj,args)
{Vt(obj,B_(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ch,BT],returnType:Bs,callable:function(obj,args){Pp(obj,Du(args[0]),B_(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ch,BT,BF],returnType:Bs,callable:function(obj,args){H0(obj,Du(args[0]),B_(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BF],returnType:Bs,callable:function(obj,args){P9(obj,args[0]);return null;}},{name:"<init>",modifiers:
0,accessLevel:3,parameterTypes:[Bt],returnType:Bs,callable:function(obj,args){UN(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[DW(C)],returnType:Bs,callable:function(obj,args){Uo(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Ch,DW(C),BT,BT],returnType:Bs,callable:function(obj,args){Lo(obj,Du(args[0]),args[1],B_(args[2]),B_(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Bs,callable:function(obj,
args){BB(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Bs,callable:function(obj,args){ATU(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Bs,callable:function(obj,args){AVD(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Bs,callable:function(obj,args){AV2(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers
:0,accessLevel:3,parameterTypes:[Bt],returnType:Bs,callable:function(obj,args){AUa(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bt,BT,BT],returnType:Bs,callable:function(obj,args){ASU(obj,args[0],B_(args[1]),B_(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[DW(C)],returnType:Bs,callable:function(obj,args){ATZ(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[DW(C),BT,BT],returnType:Bs,callable:function(obj,
args){ATf(obj,args[0],B_(args[1]),B_(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:C,callable:function(obj,args){return GE(obj,B_(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BT,C],returnType:Bs,callable:function(obj,args){AVb(obj,B_(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BT,C],returnType:Bs,callable:function(obj,args){AUG(obj,B_(args[0]),args[1]);return null;}},{name:"insertRange",modifiers
:0,accessLevel:3,parameterTypes:[BT,BT],returnType:Bs,callable:function(obj,args){AVq(obj,B_(args[0]),B_(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BT,BT],returnType:Bs,callable:function(obj,args){AWi(obj,B_(args[0]),B_(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Ch],returnType:Ch,callable:function(obj,args){return KX(obj,args[0],Du(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bt,Ch],returnType:Ch,callable
:function(obj,args){return AUh(obj,args[0],Du(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bt,Ch],returnType:Ch,callable:function(obj,args){return AUJ(obj,args[0],Du(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ch],returnType:BT,callable:function(obj,args){return EO(obj,args[0],Du(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Ch],returnType:BT,callable:function(obj,args){return AU6(obj,args[0],Du(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Ch],returnType:Ch,callable:function(obj,args){return KG(obj,args[0],Du(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:C,callable:function(obj,args){return DL(obj,B_(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BT,BT],returnType:Bs,callable:function(obj,args){ATC(obj,B_(args[0]),B_(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bt,Ch],returnType:Ch,callable:function(obj,
args){return AV3(obj,args[0],Du(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return ASZ(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AVZ(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AWh(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ch,callable:function(obj,args){return AVL(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ch,callable:function(obj,args){return ATl(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){P4(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DW(C),callable:function(obj,args){return AU7(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:DW(C),callable:function(obj,args){return AVC(obj,B_(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:DW(C),callable:function(obj,args){return AVW(obj,B_(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BT],returnType:DW(C),callable:function(obj,args){return KM(obj,B_(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){AVv(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[HV],returnType:Bs,callable:function(obj,args){AV6(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[HV,BT],returnType:C,callable:function(obj,args){return AVA(obj,args[0],B_(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[HV,BT],returnType:BT,callable:function(obj,args){return AVm(obj,args[0],B_(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){AVy(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable
:function(obj,args){ASG(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ct,callable:function(obj,args){return F7(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[Nz],returnType:Dy,callable:function(obj,args){return AWf(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BT],returnType:Bs,callable:function(obj,args){AS0(obj,B_(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return AUP(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DW(C),callable:function(obj,args){return ASY(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BF],returnType:DW(C),callable:function(obj,args){return ATe(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BT,callable:function(obj,args){return AS_(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ch,callable:function(obj,
args){return RK(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Ch,callable:function(obj,args){return AVH(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:H,callable:function(obj,args){return UV(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[H],returnType:H,callable:function(obj,args){return AVr(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BF],returnType:Bt,callable:function(obj,
args){return AVf(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Ch,BT,BF],returnType:Bt,callable:function(obj,args){return AVV(Du(args[0]),B_(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[DW(C)],returnType:Bt,callable:function(obj,args){return AS9(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:HC,callable:function(obj,args){return ATj(obj);}}];DI.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bs,callable:function(obj,args){TJ(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){Os(obj);return null;}}];CW.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){Vc(obj);return null;}},{name:"begin",modifiers:0,accessLevel:2,parameterTypes:[],returnType:Bs,callable:function(obj,args){On(obj);return null;}},{name:"update",modifiers:0,accessLevel:2,parameterTypes:[D9],returnType
:Bs,callable:function(obj,args){Rq(obj,Jk(args[0]));return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){VJ(obj);return null;}},{name:"getColor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BH,callable:function(obj,args){return ATi(obj);}},{name:"setColor",modifiers:0,accessLevel:3,parameterTypes:[BH],returnType:Bs,callable:function(obj,args){AVl(obj,args[0]);return null;}},{name:"getEndColor",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:BH,callable:function(obj,args){return AU$(obj);}},{name:"setEndColor",modifiers:0,accessLevel:3,parameterTypes:[BH],returnType:Bs,callable:function(obj,args){AUB(obj,args[0]);return null;}}];CT.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){Rv(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bs,callable:function(obj,args){VO(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:Ch,callable:function(obj,args){return AUW(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Ch],returnType:Bs,callable:function(obj,args){ASM(obj,Du(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Gw,callable:function(obj,args){return ATn(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Gw],returnType:Bs,callable:function(obj,args){AVd(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:CP,callable:function(obj,args){return AV9(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[CP],returnType:Bs,callable:function(obj,args){AT0(obj,args[0]);return null;}}];},
Np=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.jP.$meta.primitive?1:0)&&!(a.jP.$meta.item===null?0:1)){if(a.pB===null){if(!T6){T6=1;AG0();}b=a.jP.$meta.methods;a.pB=R(Hl,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof Fz())?e:e[Bo]===true?e:e.kb;g=T(f.name);if(g===A(74))h=1;else if(!(A(74) instanceof H))h=0;else{e=A(74);h=g.jB!==e.jB?0:1;}if(h){g=f.parameterTypes;i=R(BF,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BF;e.jP
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.pB.data;h=c+1|0;e=new Hl;g=T(f.name);k=f.modifiers;n=f.accessLevel;f=Dn(f.callable,"call");e.k8=a;e.x5=g;e.qO=k;e.rL=n;e.n_=i;e.t$=f;j[c]=e;c=h;}d=d+1|0;}i=a.pB;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BF;e.jP=b;f=e;b.classObject=f;}}e=D7(e);if(e===null){e=new Db;e.jC=1;e.jD=1;B(e);}if(e===M(Bs)){e=new Bn;e.jC=1;e.jD=1;B(e);}if(c<0){e=new DS;e.jC=1;e.jD=1;B(e);}i=i.data;f=DP(e.jP,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.pB=f;}return a.pB.p();}return R(Hl,0);},
AQM=a=>{let b,c,d,e,f,g,h,i,j,k;b=(Np(a)).data;c=b.length;d=R(Hl,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(KR(h.qO,h.rL)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=Ci(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BF;h.jP=j;k=h;j.classObject=k;}}j=D7(h);if(j===null){h=new Db;h.jC=1;h.jD=1;B(h);}if(j===M(Bs)){h=new Bn;h.jC=1;h.jD=1;B(h);}if(f<0){h=new DS;h.jC=1;h.jD=1;B(h);}k=DP(j.jP,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
ANP=(a,b)=>{let c,d,e,f;c=(Np(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new G8;f.jC=1;f.jD=1;B(f);}f=c[e];if(Ud(f.n_.p(),b))break;e=e+1|0;}return f;},
ANN=(a,b)=>{let c,d,e,f,g;c=(Np(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new G8;f.jC=1;f.jD=1;B(f);}f=c[e];g=!(KR(f.qO,f.rL)&1)?0:1;if(g&&Ud(f.n_.p(),b))break;e=e+1|0;}return f;};
let AA9=E();
let ALx=b=>{let c,d,e,f,g;if(b===null)return null;c=BM(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof Fz())?g:g[Bo]===true?g:g.kb;e=e+1|0;}return c;},
B4=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
Dn=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let ZX=E();
let WP=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
Mb=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Mb(d[e],c))return 1;e=e+1|0;}return 0;},
Es=b=>{setTimeout(()=>{AU_(Oy)(b);},0);},
Oy=b=>{b.c2();},
MO=(b,c)=>{setTimeout(()=>{Oy(b);},c);},
Ug=b=>{return T(b.$meta.name);},
AGK=()=>{return [];};
function DJ(){let a=this;C.call(a);a.jE=null;a.kU=null;a.jC=0;a.jD=0;a.xU=null;}
let Y=a=>{a.jC=1;a.jD=1;},
AVt=()=>{let a=new DJ();Y(a);return a;},
Bj=a=>{return a;},
ANa=a=>{return a.jE;},
ATX=a=>{return a.c3();},
AVk=a=>{let b;b=a.kU;if(b===a)b=null;return b;},
AT9=a=>{let b,c;if(Dd===null){b=new Ft;c=new Cx;c.lk=BM(32);b.lI=c;c=new J;By(c);c.jA=G(16);b.ln=c;b.lm=G(32);b.lq=0;b.lr=Cp;Dd=b;}JF(a,Dd);},
JF=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BF;d.jP=c;e=d;c.classObject=e;}}if(d.jI===null)d.jI=T(d.jP.$meta.name);Dt(Bz(d.jI));d=a.c3();if(d!==null){c=new J;c.jA=G(16);F(c,c.jz,A(75));F(c,c.jz,d);e=new H;f=c.jA;g=f.data;h=c.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);Dt(Bz(e));}else{b=new I;b.jC=1;b.jD=1;B(b);}}a:{Dt("\n");f=a.xU;if(f!==null){f=f.data;j=f.length;h=0;while(true){if(h>=j)break a;e=f[h];Dt("\tat ");c=A(2);if(e!==null)c=e.T();Dt(Bz(c));Dt("\n");h
=h+1|0;}}}c=a.kU;if(c!==null&&c!==a){Dt("Caused by: ");JF(a.kU,b);}};
let BD=E(DJ);
let I7=a=>{a.jC=1;a.jD=1;},
ASH=()=>{let a=new BD();I7(a);return a;},
J9=(a,b,c)=>{a.jC=1;a.jD=1;a.jE=b;a.kU=c;},
AVw=(a,b)=>{let c=new BD();J9(c,a,b);return c;};
let Bx=E(BD);
let N_=a=>{a.jC=1;a.jD=1;},
ATJ=()=>{let a=new Bx();N_(a);return a;},
GD=(a,b)=>{a.jC=1;a.jD=1;a.jE=b;},
ATv=a=>{let b=new Bx();GD(b,a);return b;};
let AGi=E(Bx);
let Jx=E(0);
function H(){C.call(this);this.lh=0;}
let Vk=null,LS=null,NP=null;
let XN=(a,b)=>{a.jB=K(b.data,0,b.data.length);},
ASK=a=>{let b=new H();XN(b,a);return b;},
AEl=(a,b)=>{a.jB=b;},
S8=a=>{let b=new H();AEl(b,a);return b;},
KT=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.jB.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){ATk(a.jB,b,d.data,e,g);return;}}h=new I;h.jC=1;h.jD=1;B(h);},
Mn=(a,b,c)=>{let d,e,f;if((c+b.jB.length|0)>a.jB.length)return 0;d=0;a:{b:{while(d<b.jB.length){if(d<0)break a;if(d>=b.jB.length)break a;e=b.jB.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.jB.length)break b;if(e!=a.jB.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);},
P0=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.jB.length>a.jB.length)return 0;c=0;d=a.jB.length-b.jB.length|0;a:{b:{while(d<a.jB.length){if(d<0)break a;if(d>=a.jB.length)break a;e=a.jB.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.jB.length)break b;if(e!=b.jB.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);},
Hx=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.jB.length)return (-1);if(a.jB.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.jB.length-1|0))return (-1);if(a.jB.charCodeAt(c)==e&&a.jB.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
Fb=(a,b,c)=>{let d,e,f,g;d=a.jB.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.jB.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.jB.charCodeAt(d)==g){b=d-1|0;if(a.jB.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
PR=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.jB.length-b.jB.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.jB.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.jB.length)break a;g=a.jB.charCodeAt(f);if(e<0)break b;if(e>=b.jB.length)break b;if(g!=b.jB.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);},
ACt=(a,b,c)=>{let d,e,f;d=a.jB.length-b.jB.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.jB.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.jB.length)break a;f=a.jB.charCodeAt(f);if(e<0)break b;if(e>=b.jB.length)break b;if(f!=b.jB.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);},
Cm=(a,b,c)=>{let d,e,f;d=a.jB.length;e=Ci(b,c);if(!e)return LS;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return S8(a.jB.substring(b,c));f=new V;f.jC=1;f.jD=1;B(f);},
C6=(a,b)=>{let c,d,e,f;c=a.jB.length-b.jB.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.jB.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.jB.length)break a;f=a.jB.charCodeAt(f);if(e<0)break b;if(e>=b.jB.length)break b;if(f!=b.jB.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);},
MD=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new J;d.jA=G(16);e=a.jB.length-b.jB.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cm(a,f,a.jB.length);g=d.jz;if(b===null)b=A(2);F(d,g,b);b=new H;h=d.jA;i=h.data;j=d.jz;e=i.length;if(j>=0&&j<=(e-0|0)){b.jB=K(h.data,0,j);return b;}b=new I;b.jC=1;b.jD=1;B(b);}k=0;d:{while(k<b.jB.length){j=f+k|0;if(j<0)break b;if(j>=a.jB.length)break b;j=a.jB.charCodeAt(j);if(k<0)break c;if(k>=b.jB.length)break c;if(j!=b.jB.charCodeAt(k)){if(f<0)break a;if(f>=a.jB.length)break a;k=a.jB.charCodeAt(f);j
=d.jz;Bf(d,j,j+1|0);d.jA.data[j]=k;break d;}k=k+1|0;}F(d,d.jz,c===null?A(2):c);f=f+(b.jB.length-1|0)|0;}f=f+1|0;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);},
AG5=a=>{let b,c,d;b=0;c=a.jB.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.jB.length)break;if(a.jB.charCodeAt(b)>32)break a;b=b+1|0;}d=new V;d.jC=1;d.jD=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.jB.length)break b;if(a.jB.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cm(a,b,c+1|0);}d=new V;d.jC=1;d.jD=1;B(d);},
Cg=a=>{return a;},
AP0=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof H))return 0;c=b;return a.jB!==c.jB?0:1;},
AKc=a=>{let b;a:{if(!a.lh){b=0;while(true){if(b>=a.jB.length)break a;a.lh=(31*a.lh|0)+a.jB.charCodeAt(b)|0;b=b+1|0;}}}return a.lh;},
AVI=()=>{let b;Vk=G(0);b=new H;b.jB="";LS=b;NP=new Ni;};
let Ei=E();
function Fh(){Ei.call(this);this.mZ=0;}
let NU=null,D4=null;
let Kg=(b,c)=>{if(b!==null)return Vj(b,0,b.jB.length,c);b=new Cs;b.jC=1;b.jD=1;b.jE=A(76);B(b);},
Vj=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new Cs;b.jC=1;b.jD=1;b.jE=A(77);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.jB.length){a:{switch(b.jB.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new Cs;b.jC=1;b.jD=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.jB.length)break b;g=ANz(b.jB.charCodeAt(g));if(g<0){k=new Cs;l=Cm(b,c,d);b=new J;b.jA=G(16);F(b,b.jz,A(78));c=b.jz;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jA;o=n.data;d=b.jz;e
=o.length;if(d>=0&&d<=(e-0|0)){m.jB=K(n.data,0,d);k.jC=1;k.jD=1;k.jE=m;B(k);}b=new I;b.jC=1;b.jD=1;B(b);}if(g>=e){k=new Cs;l=Cm(b,c,d);b=new J;b.jA=G(16);F(b,b.jz,A(79));L(b,b.jz,e,10);F(b,b.jz,A(75));c=b.jz;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jA;o=n.data;d=b.jz;e=o.length;if(d>=0&&d<=(e-0|0)){m.jB=K(n.data,0,d);k.jC=1;k.jD=1;k.jE=m;B(k);}b=new I;b.jC=1;b.jD=1;B(b);}if(h>i){b=new Cs;b.jC=1;b.jD=1;b.jE=A(80);B(b);}h=Dg(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new Cs;l=Cm(b,c,d);b
=new J;b.jA=G(16);F(b,b.jz,A(81));c=b.jz;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.jA;o=n.data;d=b.jz;e=o.length;if(d>=0&&d<=(e-0|0)){m.jB=K(n.data,0,d);k.jC=1;k.jD=1;k.jE=m;B(k);}b=new I;b.jC=1;b.jD=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);}b=new Cs;k=new J;k.jA=G(16);F(k,k.jz,A(82));L(k,k.jz,e,10);m=new H;n=k.jA;o=n.data;d=k.jz;e=o.length;if(d>=0&&d<=(e-0|0)){m.jB=K(n.data,0,d);b.jC=1;b.jD=1;b.jE=m;B(b);}b=new I;b.jC=1;b.jD=1;B(b);},
KJ=b=>{if(b!==null)return Vj(b,0,b.jB.length,10);b=new Cs;b.jC=1;b.jD=1;b.jE=A(76);B(b);},
EI=()=>{let b,c,d,e,f;a:{if(D4===null){b=R(Fh,256);c=b.data;D4=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new Fh;f.mZ=d-128|0;c[d]=f;d=d+1|0;}}}},
B_=a=>{return a.mZ;},
ANz=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Ov=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
DZ=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AVu=()=>{NU=M(BT);};
function Ba(){let a=this;C.call(a);a.jA=null;a.jz=0;}
let D1=a=>{a.jA=G(16);},
ATW=()=>{let a=new Ba();D1(a);return a;},
Dq=(a,b)=>{a.jA=G(b);},
AVR=a=>{let b=new Ba();Dq(b,a);return b;},
IB=(a,b)=>{F(a,a.jz,b===null?A(2):b.T());return a;},
EZ=(a,b)=>{F(a,a.jz,b);return a;},
F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.jz){if(c===null)c=A(2);else if(c.jB.length?0:1)return a;Ib(a,a.jz+c.jB.length|0);d=a.jz-1|0;while(d>=b){a.jA.data[d+c.jB.length|0]=a.jA.data[d];d=d+(-1)|0;}a.jz=a.jz+c.jB.length|0;e=0;a:{while(e<c.jB.length){f=a.jA;d=b+1|0;if(e<0)break a;if(e>=c.jB.length)break a;f.data[b]=c.jB.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);},
Id=(a,b)=>{return L(a,a.jz,b,10);},
H$=(a,b,c)=>{return L(a,a.jz,b,c);},
L=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(EH(c,d)<0){if(e)Bf(a,b,b+1|0);else{Bf(a,b,b+2|0);f=a.jA.data;g=b+1|0;f[b]=45;b=g;}a.jA.data[b]=Nk(c,d);}else{h=1;i=1;j=DV((-1),d);b:{while(true){k=Dg(h,d);if(EH(k,c)>0){k=h;break b;}i=i+1|0;if(EH(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bf(a,b,b+i|0);if(e)e=b;else{f=a.jA.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.jA.data;b=e+1|0;f[e]=Nk(DV(c,k),d);c=AUv(c,k);k=DV(k,d);e=b;}}}return a;},
Hv=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Ci(c,0.0);if(!d){if(1.0/c===Infinity){Bf(a,b,b+3|0);e=a.jA.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bf(a,b,b+4|0);e=a.jA.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bf(a,b,b+3|0);e=a.jA.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bf(a,b,b+8|0);d=b;}else{Bf(a,b,b+9|0);e=a.jA.data;d=b+1|0;e[b]=45;}e=a.jA.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=QE;AJc(c,f);d=f.ta;g=f.sZ;h=f.u0;i=1;j=1;if(h)j=2;k=9;l=AOE(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bf(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.jA.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.jA.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.jA.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.jA.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
PK=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Ci(c,0.0);if(!d){if(1.0/c===Infinity){Bf(a,b,b+3|0);e=a.jA.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bf(a,b,b+4|0);e=a.jA.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bf(a,b,b+3|0);e=a.jA.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bf(a,b,b+8|0);d=b;}else{Bf(a,b,b+9|0);e=a.jA.data;d=b+1|0;e[b]=45;}e=a.jA.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=PW;AFU(c,f);g=f.ty;h=f.sQ;i=f.uR;j=1;k=1;if(i)k=2;l=18;m=ALw(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bf(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.jA.data;i=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.jA.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(ACp(p,B$))d=0;else{d=Bg(My(g,p));g=W2(g,p);}e=a.jA.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=My(p,U(10));q=q+1|0;}if(h){e=a.jA.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
AOE=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
ALw=b=>{let c,d,e,f,g;c=U(1);d=0;e=16;f=NG.data;g=f.length-1|0;while(g>=0){if(DT(W2(b,Z(c,f[g])),B$)){d=d|e;c=Z(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
F_=(a,b)=>{return a.dc(a.jz,b);},
D2=(a,b,c)=>{F(a,b,c===null?A(2):c.T());return a;},
Ib=(a,b)=>{let c,d,e,f,g,h;c=a.jA.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jA=g;},
LZ=a=>{let b,c,d,e,f;b=new H;c=a.jA;d=c.data;e=a.jz;f=d.length;if(e>=0&&e<=(f-0|0)){b.jB=K(c.data,0,e);return b;}b=new I;b.jC=1;b.jD=1;B(b);},
JX=(a,b,c,d,e)=>{let f,g,h,i;Bf(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jA.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
U1=(a,b)=>{let c,d,e,f;if(b>=0){c=a.jz;if(b<c){c=c-1|0;a.jz=c;while(b<c){d=a.jA.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new V;f.jC=1;f.jD=1;B(f);},
AQe=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=Ci(b,c);if(d<=0){e=a.jz;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.jz=e-(c-b|0)|0;g=0;while(g<f){h=a.jA.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new V;i.jC=1;i.jD=1;B(i);},
Bf=(a,b,c)=>{let d,e,f,g;d=a.jz;e=d-b|0;a.c8((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.jA.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.jz=a.jz+(c-b|0)|0;};
let Iz=E(0);
let J=E(Ba);
let AQ6=a=>{a.jA=G(16);},
Ez=()=>{let a=new J();AQ6(a);return a;},
LU=(a,b)=>{F(a,a.jz,b===null?A(2):b.T());return a;},
H6=(a,b)=>{F(a,a.jz,b);return a;},
Ht=(a,b)=>{L(a,a.jz,b,10);return a;},
WO=(a,b)=>{let c;c=a.jz;Bf(a,c,c+1|0);a.jA.data[c]=b;return a;},
ARz=(a,b,c)=>{F(a,b,c===null?A(2):c.T());return a;},
AQd=(a,b,c)=>{AQe(a,b,c);return a;},
B0=(a,b,c)=>{F(a,b,c);return a;},
AGY=(a,b,c,d,e)=>{let f,g,h,i;Bf(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jA.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
AB5=(a,b,c,d)=>{let e,f,g,h,i;e=a.jz;Bf(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jA.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
Y_=a=>{return a.jz;},
EK=a=>{let b,c,d,e,f;b=new H;c=a.jA;d=c.data;e=a.jz;f=d.length;if(e>=0&&e<=(f-0|0)){b.jB=K(c.data,0,e);return b;}b=new I;b.jC=1;b.jD=1;B(b);},
AHk=(a,b)=>{Ib(a,b);},
AH8=(a,b,c)=>{Bf(a,b,b+1|0);a.jA.data[b]=c;return a;},
B2=(a,b,c)=>{F(a,b,c);return a;};
function QO(){let a=this;C.call(a);a.us=0;a.w2=0;a.tR=0;a.u6=null;a.wY=0;a.zl=null;a.uJ=0;a.w$=null;a.rk=0;a.pb=0;a.s0=0;a.uw=0;a.vC=0;a.vh=0;a.wx=0;a.v2=0;a.v_=0;a.uf=0;a.rZ=0;}
let Yn=(a,b)=>{a.us=0;a.w2=1;a.tR=0;a.wY=1;a.zl=A(62);a.uJ=0;a.rk=(-1);a.pb=(-1);a.s0=0;a.uw=0;a.vC=0;a.vh=0;a.wx=0;a.v2=0;a.v_=0;a.uf=0;a.rZ=1;a.w$=b;},
ARL=a=>{let b=new QO();Yn(b,a);return b;};
let Pu=E(0);
function Lp(){let a=this;C.call(a);a.on=null;a.qF=null;a.vA=null;a.v6=null;a.yl=null;a.m8=null;a.rt=null;a.rB=null;a.rf=null;a.oa=null;a.p1=null;a.sF=0;a.ug=0;a.xy=null;a.oQ=0;a.ri=null;a.xR=null;a.xA=null;a.qV=null;a.uz=null;a.or=null;}
let GL=null;
let PH=(a,b,c)=>{let d;d=new Bt;d.kr=1;d.jQ=R(C,4);a.rf=d;a.p1=M7;a.sF=(-1);a.ug=1;a.oQ=1;a.xR=ED(51,0.800000011920929);d=new Bt;d.kr=1;d.jQ=R(C,16);a.qV=d;d=new Bt;d.kr=1;d.jQ=R(C,16);a.uz=d;EQ();a.oa=FX;a.m8=c;a.rt=b;ANl(a);},
ASN=(a,b)=>{let c=new Lp();PH(c,a,b);return c;},
ANl=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;GL=AJh();F4();Do(E0,A(83),A(62));b=T(GL.userAgent);F4();Do(E0,A(84),b);if(GL.windows?1:0){F4();Do(E0,A(85),A(86));}else if(GL.macOS?1:0){F4();Do(E0,A(85),A(87));}else if(!(GL.linux?1:0)){F4();Do(E0,A(85),A(88));}else{F4();Do(E0,A(85),A(10));}c=new Oz;d=a.m8.uJ;c.wA=0;c.w7=0;c.mh=1;c.mh=d;Gg=c;EQ();b=T(FX.mT.location.href);a.or=b;if(C6(b,A(89))){c=MD(a.or,A(90),A(62));a.or=c;a.or=MD(c,A(91),A(62));}e=Hx(a.or,63,0);if(e>=0)a.or=Cm(a.or,0,e);c=a.m8;Gf=c.w2;b=ALV(c);a.on=b;c
=AJg(a.or,b.kP,a);a.ri=c;d=a.m8.wY;f=Gg;g=c.rF;h=new J;h.jA=G(16);i=h.jz;if(g===null)g=A(2);B0(h,i,g);B0(h,h.jz,A(92));g=new H;j=h.jA;k=j.data;l=h.jz;m=k.length;if(l>=0&&l<=(m-0|0)){g.jB=K(j.data,0,l);h=new J;h.jA=G(16);F(h,h.jz,g);F(h,h.jz,A(93));g=new H;j=h.jA;k=j.data;l=h.jz;m=k.length;if(l>=0&&l<=(m-0|0)){g.jB=K(j.data,0,l);h=new Qh;h.p9=c;h.u5=A(93);h.u4=d;if(f.mh){if(BY===null){c=new C1;b=new Cx;By(b);b.lk=BM(32);EF(c);c.lI=b;b=new J;D1(b);c.ln=b;c.lm=G(32);c.lq=0;c.lr=Cp;BY=c;}c=new J;c.jA=G(16);B0(c,
c.jz,A(94));B0(c,c.jz,g);b=new H;j=c.jA;k=j.data;i=c.jz;l=k.length;if(i>=0&&i<=(l-0|0)){b.jB=K(j.data,0,i);BZ(Bz(b));BZ("\n");}else{c=new I;c.jC=1;c.jD=1;B(c);}}a:{f.kK=f.kK+1|0;c=new GO;c.na=f;c.ov=1;c.m9=g;c.nl=h;b=null;g=null;c.mu=new C;c.mt=1;c.m6=g;c.nk=b;e=CM;CM=e+1|0;c.nj=U(e);b=new D_;b.m7=c;Es(b);a.qF=Zs(a.on.kP);c=new TU;c.oV=a.ri;a.vA=c;c=new S$;b=new IH;d=Jw(16);b.oy=0;k=R(Fv,d);j=k.data;b.mx=k;b.st=0.75;b.px=j.length*0.75|0;c.yf=b;a.v6=c;a.xy=new QL;c=new S5;c.yi=0;c.rN=1;b=new LN;b.ry=c;c.xH=b;c.tx
=A(62);a.xA=c;if(a.m8.tR){g=a.ri;b=new NY;b.xl=a;n=Gg;g=g.rF;h=new J;h.jA=G(16);B2(h,h.jz,g===null?A(2):Cg(g));B2(h,h.jz,Cg(A(92)));f=new H;j=h.jA;k=j.data;i=h.jz;l=k.length;if(i>=0&&i<=(l-0|0)){f.jB=K(j.data,0,i);g=new J;g.jA=G(16);B0(g,g.jz,f);B0(g,g.jz,A(95));c=new H;j=g.jA;k=j.data;i=g.jz;l=k.length;if(i>=0&&i<=(l-0|0)){c.jB=K(j.data,0,i);No(n,1,c,b);break a;}c=new I;c.jC=1;c.jD=1;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}}C3=a;c=a.on;B8=c;b=c.pE;B1=b;Bl=b;Em=c.v7;KP=a.qF;Fq=a.vA;AL9=a.v6;c=new P$;c.wv=null;c.wv
=APM();a.yl=c;AHM=c;f=a.oa.mT.document;b=new JS;b.sv=a;f.addEventListener("visibilitychange",B4(b,"handleEvent"));c=a.oa;c.rm=a;requestAnimationFrame(B4(c,"onAnimationFrame"));c=a.m8;if(!c.rk&&!c.pb?1:0){c=a.oa;g=new JT;g.qo=a;g=Dn(g,"handleEvent");c.mT.addEventListener("resize",B4(g,"handleEvent"));}return;}c=new I;c.jC=1;c.jD=1;B(c);}c=new I;c.jC=1;c.jD=1;B(c);},
AFH=a=>{let b,c,d,e,f,g,h,$$je;b=a.p1;a:{try{b:{Ma();switch(Tq.data[AOl(b)]){case 1:c=AFX(WH());if(!c){a.p1=IT;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.ri.tn;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=Ez();WO(Ht(g,f),37);h=EK(g);d.setProperty("width",Bz(h));}}break b;case 2:break;default:break b;}if(a.rt!==null){b=a.rB;if(b!==null){AIR(b);AKM(a.rB);}ACC(a.qF,null);Rd(a.qF);P4(a.qV);a.rB
=a.rt;a.rt=null;a.p1=JU;a.on.sk=B$;}X6(a,a.rB);}}catch($$e){$$je=Bb($$e);if($$je instanceof DJ){h=$$je;break a;}else{throw $$e;}}b=a.oa;b.rm=a;requestAnimationFrame(B4(b,"onAnimationFrame"));return;}if(Dd===null){b=new Ft;d=new Cx;d.lk=BM(32);By(b);b.lI=d;d=new J;Dq(d,16);b.ln=d;b.lm=G(32);b.lq=0;b.lr=Cp;Dd=b;}JF(h,Dd);B(h);},
X6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;ABp(a.on);c=B8.kP.width;d=B8.kP.height;e=0;if(a.p1===JU){a.p1=IT;f=new HI;HG();Kx(f,1000,null);b.yY=f;f=AI0(b);b.y_=f;b.t_=f;g=B8.kP.width;h=B8.kP.height;f=f.mQ.mq;f.o$=0;f.o_=0;f.pH=g;f.pU=h;i=g;j=f.rl;i=i*j;j=h*j;f.sh=i;f.sp=j;MY(f,0);e=1;}if(!(c==a.sF&&d==a.ug&&!e)){a.sF=c;a.ug=d;B1.dC(0,0,c,d);f=b.t_;if(f!==null){f=f.mQ.mq;f.o$=0;f.o_=0;f.pH=c;f.pU=d;i=c;j=f.rl;i=i*j;j=d*j;f.sh=i;f.sp=j;MY(f,0);}}f=a.uz;k=a.qV;l=k.jQ;m=k.jF;n=f.jQ;o=n.data;d=f.jF;c=d+
m|0;if(c<=o.length)k=n;else{p=8;if(p<=c)p=c;d=d*1.75|0;if(p>d)d=p;q=n.constructor;if(q===null)k=null;else{k=q.classObject;if(k===null){k=new BF;k.jP=q;r=k;q.classObject=r;}}s=k.jP.$meta.item;if(s===null)q=null;else{q=s.classObject;if(q===null){q=new BF;q.jP=s;k=q;s.classObject=k;}}if(q===null){b=new Db;Y(b);B(b);}if(q===M(Bs)){b=new Bn;Y(b);B(b);}if(d<0){b=new DS;Y(b);B(b);}k=DP(q.jP,d);q=k.data;h=f.jF;g=q.length;if(h<g)g=h;Gh(n,0,k,0,g);f.jQ=k;}Gh(l,0,k,f.jF,m);f.jF=c;f=a.qV;l=f.jQ;e=0;m=f.jF;k=null;if(e>m)
{b=new Bn;b.jC=1;b.jD=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.jF=0;m=0;while(true){q=a.uz;e=q.jF;d=Ci(m,e);if(d>=0){l=q.jQ;m=0;f=null;if(m>e){b=new Bn;b.jC=1;b.jD=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}q.jF=0;f=a.on;t=C0(f.sk,U(1));f.sk=t;if(AB0(t,U(60))){b=b.t_;if(b!==null){B1.dD(0.0,0.0,0.0,1.0);B1.dE(16384);f=b.mQ;q=f.mq.qa;VU(q,1);if(f.k3.mL){k=f.uE;q=q.pQ;if(k.lT)DX(k);C8(k.r8,q.kQ);if(k.lT)F2(k);QJ(k);q=f.k3;if(q.mS){r=Kh(q);C8(q.oR,k.oj.kQ);if(k.lT)DX(k);C8(k.oj,r.kQ);if(k.lT)F2(k);}PE(q,
k,1.0);if(q.mS){q=q.oR;if(k.lT)DX(k);C8(k.oj,q.kQ);if(k.lT)F2(k);}Up(k);if(BQ)AL0(f);}AMW(b.mQ,TV(B8.tv,0.03333333507180214));}}Rd(a.qF);return;}if(d>=0){f=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,m,10);F(b,b.jz,A(19));e=q.jF;L(b,b.jz,e,10);k=new H;l=b.jA;n=l.data;m=b.jz;d=n.length;if(m>=0&&m<=(d-0|0)){k.jB=K(l.data,0,m);f.jC=1;f.jD=1;f.jE=k;B(f);}b=new I;Y(b);B(b);}q=q.jQ.data[m];r=q.tu.rn;u=r.jQ.constructor;if(u===null)s=null;else{s=u.classObject;if(s===null){s=new BF;s.jP=u;f=s;u.classObject=f;}}u
=s.jP.$meta.item;if(u===null)k=null;else{k=u.classObject;if(k===null){k=new BF;k.jP=u;f=k;u.classObject=f;}}e=r.jF;if(k===null){b=new Db;Y(b);B(b);}if(k===M(Bs)){b=new Bn;Y(b);B(b);}if(e<0)break;f=DP(k.jP,e);Gh(r.jQ,0,f,0,r.jF);l=f;q.tu.r$.uM.u6.dH(l);m=m+1|0;}b=new DS;Y(b);B(b);};
let Vh=E(0);
function L_(){C.call(this);this.t_=null;}
let AKM=a=>{return;},
AIR=a=>{return;};
function Pw(){let a=this;L_.call(a);a.yY=null;a.y_=null;}
let AM9=E();
let Be=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(96);d=1<<c;e=d-1|0;f=(((32-Ov(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=Dg(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=Nk((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new H;l.jB=K(g.data,0,h.length);return l;};
let HM=E(BI);
let M7=null,JU=null,IT=null,Un=null;
let AHQ=()=>{let b,c,d;b=new HM;b.jR=A(97);b.jK=0;M7=b;c=new HM;c.jR=A(98);c.jK=1;JU=c;d=new HM;d.jR=A(99);d.jK=2;IT=d;Un=S(HM,[b,c,d]);};
let N3=E(0);
let Cq=E(0);
let Q$=E(0);
function I1(){let a=this;C.call(a);a.mT=null;a.rm=null;}
let FX=null;
let EQ=()=>{EQ=BP(I1);AEs();};
let AEs=()=>{let b;b=new I1;EQ();b.mT=window;FX=b;},
AK$=(a,b)=>{let c;b;c=a.rm;a.rm=null;AFH(c);};
let AKQ=E();
let QC=E();
let Br=null;
let Cz=()=>{Cz=BP(QC);AJR();};
let AJR=()=>{Br=ED(51,0.800000011920929);};
function M_(){Ei.call(this);this.uK=0.0;}
let QA=null;
let AU4=()=>{QA=M(D9);};
function Gv(){let a=this;C.call(a);a.rb=null;a.q8=0;}
let AFr=E();
let UI=b=>{return Math.sin(b);},
Yh=b=>{return Math.cos(b);},
Di=b=>{return Math.sqrt(b);},
KK=b=>{return Math.ceil(b);},
Gi=(b,c)=>{return Math.pow(b,c);},
TV=(b,c)=>{return Math.min(b,c);},
Kf=b=>{return Math.abs(b);},
CH=b=>{return Math.sign(b);};
function DE(){let a=this;C.call(a);a.x_=null;a.yg=null;}
let Qp=a=>{let b;b=new Bt;b.kr=1;b.jQ=R(C,16);a.x_=b;b=new Gv;b.q8=1;b.rb=Cd(16);a.yg=b;},
AUy=()=>{let a=new DE();Qp(a);return a;};
function Fy(){let a=this;C.call(a);a.l3=null;a.le=0;a.oB=0;}
let Lx=(a,b)=>{let c,d,e,f,g;c=a.l3;d=c.data;e=a.le;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=W(f);g=d.data.length;if(e<g)g=e;DD(c,0,d,0,g);a.l3=d;}c=d.data;f=a.le;a.le=f+1|0;c[f]=b;},
ARB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.le;if(b>d){e=new I;f=new J;f.jA=G(16);F(f,f.jz,A(100));L(f,f.jz,b,10);F(f,f.jz,A(101));b=a.le;L(f,f.jz,b,10);g=new H;h=f.jA;i=h.data;c=f.jz;d=i.length;if(c>=0&&c<=(d-0|0)){g.jB=K(h.data,0,c);e.jC=1;e.jD=1;e.jE=g;B(e);}e=new I;e.jC=1;e.jD=1;B(e);}i=a.l3;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=W(k);l=j.data.length;if(d<l)l=d;DD(i,0,j,0,l);a.l3=j;}if(!a.oB){h=j.data;h[a.le]=h[b];}else DD(j,b,j,b+1|0,a.le-b|0);h=j.data;a.le=a.le+1|0;h[b]=c;};
let LR=E(0);
let Kw=E();
let E2=E(0);
function IH(){let a=this;Kw.call(a);a.oy=0;a.mx=null;a.sr=0;a.st=0.0;a.px=0;}
let Jw=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
Gb=(a,b)=>{let c,d,e,f;if(b===null){c=a.mx.data[0];while(c!==null&&c.mw!==null){c=c.mH;}}else{c=b;if(!c.$id$){d=Eg();c.$id$=d;}e=b.$id$;f=a.mx.data;c=f[e&(f.length-1|0)];while(c!==null){if(c.oK==e){d=c.mw;if(b!==d&&!(b!==d?0:1)?0:1)break;}c=c.mH;}}return c;},
E4=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.mx.data;e=d[0];while(e!==null&&e.mw!==null){e=e.mH;}if(e===null){a.sr=a.sr+1|0;f=null;e=new Fv;b=null;e.mw=f;e.l$=b;e.oK=0;e.mH=d[0];d[0]=e;g=a.oy+1|0;a.oy=g;if(g>a.px)Qt(a,d.length);}}else{f=b;if(!f.$id$){e=Eg();f.$id$=e;}h=b.$id$;d=a.mx.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.oK==h){f=e.mw;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.mH;}if(e===null){a.sr=a.sr+1|0;e=new Fv;f=null;e.mw=b;e.l$=f;e.oK=h;e.mH=d[j];d[j]=e;g=a.oy+1|0;a.oy=g;if(g>a.px)Qt(a,
i);}}f=e.l$;e.l$=c;return f;},
Qt=(a,b)=>{let c,d,e,f,g,h,i,j;c=Jw(!b?1:b<<1);d=R(Fv,c);e=d.data;f=0;c=c-1|0;while(true){g=a.mx.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.oK&c;j=h.mH;h.mH=e[i];e[i]=h;h=j;}f=f+1|0;}a.mx=d;a.px=e.length*a.st|0;};
let HV=E(0);
let Ni=E();
let Mo=E();
let NT=null,K0=null,BU=null,BV=null,Ml=null,Tj=null,BL=null,BK=null,Je=null,Jf=null;
let ZT=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new I;e.jC=1;e.jD=1;B(e);},
Cu=(b,c)=>{let d,e;d=b.v0.data;if(c<d.length)return c+d[c]|0;d=b.vN;e=AOm(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
AOm=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=Ci(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
Po=b=>{let c,d,e,f,g,h;if(K0===null){if(Je===null)Je=AFb();K0=ARa((Je.value!==null?T(Je.value):null));}c=K0.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=Ci(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
Nk=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
ES=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bn;c.jC=1;c.jD=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AFn([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
CN=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(Ml===null){if(Jf===null)Jf=ASb();Ml=ASz((Jf.value!==null?T(Jf.value):null));}e=Ml.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.tz)c=f+1|0;else{d=g.s$;if(b>=d)return g.tb.data[b-d|0];d=f-1|0;}}return 0;},
Hb=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CN(b)!=16?0:1;},
AS7=()=>{NT=M(Kj);Tj=R(Mo,128);},
DK=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
DM=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
AFb=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
ASb=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let ABS=E();
let AJh=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let ALl=E();
let BY=null,Dd=null,E0=null;
let Gh=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=I6(b)&&(e+f|0)<=I6(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BF;h.jP=g;i=h;g.classObject=i;}}j=D7(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BF;h.jP=g;i=h;g.classObject=i;}}i=D7(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.jP.$meta.primitive?1:0)&&!(i.jP.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.jP;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Mb(g.constructor,p)?1:0)){IJ(b,c,d,e,l);b=new Jp;b.jC=1;b.jD=1;B(b);}l=l+1|0;m=o;}IJ(b,c,d,e,f);return;}if(!(j.jP.$meta.primitive?1:0))break a;if(i.jP.$meta.primitive?1:0)break b;else break a;}b=new Jp;b.jC=1;b.jD=1;B(b);}}IJ(b,c,d,e,f);return;}b=new Jp;b.jC=1;b.jD=1;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}d=new Db;d.jC=1;d.jD=1;d.jE=A(102);B(d);},
DD=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=I6(b)&&(e+f|0)<=I6(d)){IJ(b,c,d,e,f);return;}b=new I;b.jC=1;b.jD=1;B(b);},
IJ=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
Ea=()=>{return DU((new Date()).getTime());},
F4=()=>{let b,c;if(E0===null){b=new Mv;Kq(b,11);Do(b,A(103),A(104));Do(b,A(85),A(105));Do(b,A(106),A(107));Do(b,A(108),A(109));Do(b,A(110),A(111));Do(b,A(112),A(113));Do(b,A(114),A(104));Do(b,A(115),A(107));c=new Mv;Kq(c,11);c.yH=b;E0=c;}};
let Nw=E(0);
function Oz(){let a=this;C.call(a);a.kK=0;a.wA=0;a.w7=0;a.mh=0;}
let AFX=a=>{return a.kK;},
AAH=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{MP();switch(T5.data[d.jK]){case 1:if(a.mh){if(BY===null){d=new C1;e=new Cx;e.lk=BM(32);By(d);d.lI=e;e=new J;Dq(e,16);d.ln=e;d.lm=G(32);d.lq=0;d.lr=Cp;BY=d;}d=new J;d.jA=G(16);F(d,d.jz,A(94));F(d,d.jz,c===null?A(2):c);e=new H;g=d.jA;h=g.data;i=d.jz;j=h.length;if(i>=0&&i<=(j-0|0)){e.jB=K(g.data,0,i);BZ(Bz(e));BZ("\n");}else{c=new I;Y(c);B(c);}}a.kK=a.kK+1|0;d=new GO;d.na=a;d.ov=b;d.m9=c;d.nl=f;c=null;e=null;d.mu=new C;d.mt=1;d.m6=e;d.nk=c;k=CM;CM=k+1|0;d.nj=U(k);c=new D_;c.m7
=d;Es(c);break a;case 2:d=null;l=new N5;l.rg=a;l.qf=f;l.vq=d;l.w1=e;if(a.mh){if(BY===null){d=new C1;e=new Cx;EF(e);e.lk=BM(32);FP(d,e);d.ln=Ez();d.lm=G(32);d.lq=0;d.lr=Cp;BY=d;}d=new J;d.jA=G(16);B2(d,d.jz,Cg(A(94)));B2(d,d.jz,c===null?A(2):Cg(c));e=new H;g=d.jA;h=g.data;i=d.jz;j=h.length;if(i>=0&&i<=(j-0|0)){e.jB=K(g.data,0,i);BZ(Bz(e));BZ("\n");}else{c=new I;N_(c);B(c);}}a.kK=a.kK+1|0;d=new FO;d.mU=a;d.nO=b;d.mP=c;d.m_=l;c=null;e=null;d.mu=new C;d.mt=1;d.m6=e;d.nk=c;k=CM;CM=k+1|0;d.nj=U(k);c=new D_;c.m7=d;Es(c);break a;case 3:if
(a.mh){if(BY===null){d=new C1;e=new Cx;e.lk=BM(32);By(d);d.lI=e;e=new J;Dq(e,16);d.ln=e;d.lm=G(32);d.lq=0;d.lr=Cp;BY=d;}d=new J;d.jA=G(16);F(d,d.jz,A(94));F(d,d.jz,c===null?A(2):c);e=new H;g=d.jA;h=g.data;i=d.jz;j=h.length;if(i>=0&&i<=(j-0|0)){e.jB=K(g.data,0,i);BZ(Bz(e));BZ("\n");}else{c=new I;Y(c);B(c);}}a.kK=a.kK+1|0;d=new FO;d.mU=a;d.nO=b;d.mP=c;d.m_=f;c=null;e=null;d.mu=new C;d.mt=1;d.m6=e;d.nk=c;k=CM;CM=k+1|0;d.nj=U(k);c=new D_;c.m7=d;Es(c);break a;case 4:e=new N4;e.yT=a;e.rU=f;if(a.mh){if(BY===null){d
=new C1;f=new Cx;By(f);f.lk=BM(32);EF(d);d.lI=f;f=new J;D1(f);d.ln=f;d.lm=G(32);d.lq=0;d.lr=Cp;BY=d;}d=new J;d.jA=G(16);B0(d,d.jz,A(94));B0(d,d.jz,c===null?A(2):c);f=new H;g=d.jA;h=g.data;i=d.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);BZ(Bz(f));BZ("\n");}else{c=new I;I7(c);B(c);}}a.kK=a.kK+1|0;d=new FO;d.mU=a;d.nO=b;d.mP=c;d.m_=e;c=null;e=null;d.mu=new C;d.mt=1;d.m6=e;d.nk=c;k=CM;CM=k+1|0;d.nj=U(k);c=new D_;c.m7=d;Es(c);break a;case 5:break;default:c=new Q;e=new J;e.jA=G(16);F(e,e.jz,A(116));F(e,
e.jz,d.jR);d=new H;g=e.jA;h=g.data;k=e.jz;i=h.length;if(k>=0&&k<=(i-0|0)){d.jB=K(g.data,0,k);c.jC=1;c.jD=1;c.jE=d;B(c);}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);}c=null;GN(f.qN,f.qY,f.qB,c);c=f.mJ.mC;c.pM=1;c.mW=0;}},
No=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.mh){if(BY===null){e=new C1;f=new Cx;f.lk=BM(32);e.lI=f;f=new J;By(f);f.jA=G(16);e.ln=f;e.lm=G(32);e.lq=0;e.lr=Cp;BY=e;}e=new J;e.jA=G(16);F(e,e.jz,A(117));F(e,e.jz,c===null?A(2):c);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);BZ(Bz(f));BZ("\n");}else{c=new I;c.jC=1;c.jD=1;B(c);}}a.kK=a.kK+1|0;f=new XMLHttpRequest();e=new JV;e.pT=a;e.oH=f;e.tk=b;e.rO=c;e.t4=d;e=B4(e,"handleEvent");f.onreadystatechange=e;e=new GP;e.ud=a;e.rp=d;d=B4(e,"handleEvent");f.onprogress
=d;f.open("GET",Bz(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let ABe=E();
let Gg=null;
let WH=()=>{return Gg;};
let AD6=E();
let C$=0,Gf=0;
let AT$=()=>{C$=1;};
let S0=E(0);
function Ke(){let a=this;C.call(a);a.pc=null;a.kP=null;a.wJ=null;a.pE=null;a.v7=null;a.xJ=null;a.w_=0.0;a.sy=B$;a.sk=B$;a.tv=0.0;a.se=0.0;a.ur=0;}
let M5=0,FB=null;
let Ep=()=>{Ep=BP(Ke);Y1();};
let AHT=(a,b)=>{let c,d,e,f,g,h,i,j,k;Ep();a.w_=0.0;a.sy=Ea();a.sk=U(-1);a.tv=0.0;a.se=0.0;a.wJ=b;EQ();c=window.document;d=b.w$;a.kP=c.getElementById(Bz(d));e=ACd();d=!!b.wx;e.alpha=d;d=!!b.vh;e.antialias=d;d=!!b.vC;e.stencil=d;d=!!b.v2;e.premultipliedAlpha=d;d=!!b.v_;e.preserveDrawingBuffer=d;f=a.kP;if(b.us)a.pc=f.getContext("webgl2",e);a:{if(b.us){d=a.pc;if(d!==null){if(!b.uf)f=AP$(d);else{f=new OA;NC(f,d);}a.v7=f;a.pE=f;break a;}}f=f.getContext("webgl",e);a.pc=f;if(!b.uf)d=AO8(f);else{d=new Ve;L8(d,f);}a.pE
=d;}d=a.pE.dX(7938);c=a.pE.dX(7936);g=a.pE.dX(7937);a.xJ=ALh(G$,d,c,g);h=b.rk;if(!(h<0&&b.pb<0)){if(h&&b.pb?1:0)JP(a,h,b.pb);else{i=FX;h=i.mT.document.documentElement.clientWidth-b.s0|0;j=i.mT.document.documentElement.clientHeight-b.uw|0;k=!b.rZ?1.0:devicePixelRatio||1;JP(a,k*h|0,k*j|0);}}b=a.kP;d=new Mi;d.xq=a;XB(b,B4(d,"fullscreenChanged"));},
ALV=a=>{let b=new Ke();AHT(b,a);return b;},
ABp=a=>{let b,c,d;b=Ea();c=AUk(AFB(b,a.sy))/1000.0;a.tv=c;a.sy=b;c=a.se+c;a.se=c;d=a.ur+1|0;a.ur=d;if(c>1.0){a.w_=d;a.se=0.0;a.ur=0;}},
JP=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.kP;e=b;d.width=e;d=a.kP;e=c;d.height=e;if(a.wJ.rZ){f=devicePixelRatio||1;e=a.kP.style;g=b/f;Ih();h=new J;h.jA=G(16);PK(h,h.jz,g);F(h,h.jz,A(118));i=new H;j=h.jA;k=j.data;l=h.jz;b=k.length;if(l>=0&&l<=(b-0|0)){i.jB=K(j.data,0,l);e.setProperty("width",Bz(i));f=c/f;i=new J;i.jA=G(16);PK(i,i.jz,f);F(i,i.jz,A(118));h=new H;j=i.jA;k=j.data;c=i.jz;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.jB=K(j.data,0,c);e.setProperty("height",Bz(h));}else{d=new I;d.jC=1;d.jD=1;B(d);}}return;}d
=new I;d.jC=1;d.jD=1;B(d);},
Y1=()=>{M5=0;FB=Dc(51,0.800000011920929);},
XB=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function NX(){let a=this;C.call(a);a.tM=null;a.rS=null;a.tE=null;a.tT=null;a.tX=null;a.vs=null;a.rw=null;a.tn=0;a.rF=null;}
let AGQ=(a,b,c,d)=>{let e;a.tM=ED(51,0.800000011920929);a.rS=ED(51,0.800000011920929);a.tE=ED(51,0.800000011920929);a.tT=ED(51,0.800000011920929);a.tX=ED(51,0.800000011920929);a.vs=ED(51,0.800000011920929);e=new Bt;e.kr=1;e.jQ=R(C,16);a.rw=e;a.tn=(-1);a.rF=b;ANH(a,c,d);},
AJg=(a,b,c)=>{let d=new NX();AGQ(d,a,b,c);return d;},
ANH=(a,b,c)=>{let d,e,f;d=c.m8;if(d.u6!==null){e=b.ownerDocument;f=new K6;f.yx=a;e.addEventListener("dragenter",B4(f,"handleEvent"),!!0);f=new K7;f.y5=a;e.addEventListener("dragover",B4(f,"handleEvent"),!!0);f=new K5;f.u9=a;f.uV=c;f.uM=d;e.addEventListener("drop",B4(f,"handleEvent"));}},
AFk=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AFz(a,b.tf)){b.rI=b.wP;b.pM=1;b.pm=0;b.mW=0;return 0;}if(b.mW)return 0;b.pm=0;b.pM=0;b.mW=1;c=b.tf;d=b.ve;e=b.u7;f=new Qi;f.zi=a;f.mC=b;b=Gg;g=a.rF;h=new J;h.jA=G(16);i=h.jz;if(g===null)g=A(2);B0(h,i,g);B0(h,h.jz,A(92));g=new H;j=h.jA;k=j.data;l=h.jz;m=k.length;if(l>=0&&l<=(m-0|0)){g.jB=K(j.data,0,l);h=new J;h.jA=G(16);F(h,h.jz,g);F(h,h.jz,c===null?A(2):c);g=new H;k=h.jA;j=k.data;m=h.jz;i=j.length;if(m>=0&&m<=(i-0|0)){g.jB=K(k.data,0,m);h=new Qg;h.qN=a;h.mJ=f;h.qY=d;h.qB
=c;AAH(b,1,g,d,e,h);return 1;}b=new I;Y(b);B(b);}b=new I;I7(b);B(b);},
GN=(a,b,c,d)=>{a:{M3();switch(Oo.data[b.jK]){case 1:break;case 2:Cc(a.rS,c,d);break a;case 3:Cc(a.tX,c,d);break a;case 4:Cc(a.tE,c,d);break a;case 5:Cc(a.tM,c,null);break a;default:break a;}Cc(a.tT,c,d);}},
AFz=(a,b)=>{let c;c=BE(a.tT,b)<0?0:1;return !c&&!(BE(a.rS,b)<0?0:1)&&!(BE(a.tX,b)<0?0:1)&&!(BE(a.tE,b)<0?0:1)&&!(BE(a.tM,b)<0?0:1)?0:1;};
let Dz=E();
let AIE=(a,b)=>{return;};
let SJ=E(0);
let Ef=E(0);
function LT(){let a=this;C.call(a);a.k1=null;a.qc=0;a.pv=null;a.nz=null;a.lA=null;a.lz=null;a.m4=null;a.m5=null;a.r7=null;a.qp=0;a.sJ=null;a.r4=0;a.tq=null;a.um=null;a.to=null;a.l4=null;a.ok=B$;a.pP=0;}
let ARA=b=>{let c,d,e,f;c=GL;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(Kf(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
ALp=(a,b)=>{a.qc=0;a.pv=Dc(20,0.800000011920929);a.nz=JI(20);a.lA=W(20);a.lz=W(20);a.m4=W(20);a.m5=W(20);a.r7=Ot(51,0.800000011920929);a.qp=0;a.sJ=JI(256);a.r4=0;a.tq=JI(256);a.um=JI(5);a.to=Ot(51,0.800000011920929);a.pP=1;a.k1=b;AIO(a);},
Zs=a=>{let b=new LT();ALp(b,a);return b;},
AIO=a=>{let b;b=a.k1.ownerDocument;b.addEventListener("mousedown",B4(a,"handleEvent"),!!0);b.addEventListener("mouseup",B4(a,"handleEvent"),!!0);b.addEventListener("mousemove",B4(a,"handleEvent"),!!0);b.addEventListener("wheel",B4(a,"handleEvent"),!!0);b.addEventListener("keydown",B4(a,"handleEvent"),!!0);b.addEventListener("keyup",B4(a,"handleEvent"),!!0);b.addEventListener("keypress",B4(a,"handleEvent"),!!0);a.k1.addEventListener("touchstart",B4(a,"handleEvent"),!!1);a.k1.addEventListener("touchmove",B4(a,
"handleEvent"),!!1);a.k1.addEventListener("touchcancel",B4(a,"handleEvent"),!!1);a.k1.addEventListener("touchend",B4(a,"handleEvent"),!!1);},
AJj=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=T(b.type);if(c!==A(119)){if(A(119) instanceof H){d=A(119);e=c.jB!==d.jB?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(120))e=1;else if(A(120) instanceof H){d=A(120);e=c.jB!==d.jB?0:1;}else e=0;if(!e){if(c===A(121))e=1;else if(!(A(121) instanceof H))e=0;else{d=A(121);e=c.jB!==d.jB?0:1;}if(e){if(!(MW(a.k1)?1:0)){f=Hp(a,b,a.k1);g=HF(a,b,a.k1);h=a.lA.data;i=f-h[0]|0;j=a.lz.data;e=g-j[0]|0;a.m4.data[0]=i;a.m5.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.m4.data[0]=k;a.m5.data[0]=f;h=a.lA.data;h[0]=h[0]+b.movementX|0;h=a.lz.data;h[0]=h[0]+b.movementY|0;}a.ok=DU(performance.now()*1000000.0);d=a.l4;if(d!==null){if(!a.nz.data[0])ADp(d,a.lA.data[0],a.lz.data[0]);else S9(d,a.lA.data[0],a.lz.data[0],0);}}else{if(c===A(122))e=1;else if(!(A(122) instanceof H))e=0;else{d=A(122);e=c.jB!==d.jB?0:1;}if(e){if(a.l4!==null){l=ARA(b);AMJ(a.l4,0.0,l|0);}a.ok=DU(performance.now()*1000000.0);}else{if(c===A(123))e=1;else if(!(A(123) instanceof H))e=0;else{d=A(123);e=c.jB!==
d.jB?0:1;}if(e){a.qc=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.pv;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.pv;if(o>=(-128)&&o<=127){EI();q=D4.data[o+128|0];}else{q=new Fh;q.mZ=o;}if(!ARH(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){EI();p=D4.data[o+128|0];}else{p=new Fh;p.mZ=o;}B7(n,k,p);a.nz.data[o]=1;h=a.lA;q=a.k1;l=q.width*1.0/q.clientWidth;k=(d.clientX-(FR(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=T(p.compatMode);if(n===A(124))f=1;else if(!(A(124) instanceof H))f
=0;else{q=A(124);f=n.jB!==q.jB?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+CH(l)*0.5|0;h=a.lz;q=a.k1;l=q.height*1.0/q.clientHeight;k=(d.clientY-(Gp(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=T(d.compatMode);if(q===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{p=A(124);f=q.jB!==p.jB?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+CH(l)*0.5|0;a.m4.data[o]=0;a.m5.data[o]=0;d=a.l4;if(d!==null)NB(d,a.lA.data[o],a.lz.data[o],o,0);e=e+1|0;}a.ok=DU(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.nz.data[0])return;d=a.r7;e=b.button;API(d,!e?0:e==2?1:e!=1?0:2);h=a.nz;h.data[0]=a.r7.m0<=0?0:1;if(!(MW(a.k1)?1:0)){k=Hp(a,b,a.k1)-a.lA.data[0]|0;f=HF(a,b,a.k1)-a.lz.data[0]|0;a.m4.data[0]=k;a.m5.data[0]=f;a.lA.data[0]=Hp(a,b,a.k1);a.lz.data[0]=HF(a,b,a.k1);}else{k=b.movementX|0;f=b.movementY|0;a.m4.data[0]=k;a.m5.data[0]=f;h=a.lA.data;h[0]=h[0]+b.movementX|0;h=a.lz.data;h[0]=h[0]+b.movementY|0;}a.ok=DU(performance.now()*1000000.0);a.nz.data[0]=0;d=a.l4;if(d!==null)
{e=a.lA.data[0];k=a.lz.data[0];g=b.button;LJ(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.k1;if(n!==p?0:1){h=a.nz.data;if(!h[0]){a.pP=1;a.qc=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;ABq(a.r7,r);a.um.data[r]=1;a.m4.data[0]=0;a.m5.data[0]=0;if(!(MW(a.k1)?1:0)){f=Hp(a,b,a.k1);g=HF(a,b,a.k1);a.lA.data[0]=f;a.lz.data[0]=g;}else{h=a.lA.data;h[0]=h[0]+b.movementX|0;h=a.lz.data;h[0]=h[0]+b.movementY|0;}a.ok=DU(performance.now()*1000000.0);d=a.l4;if(d!==null){e=a.lA.data[0];k=a.lz.data[0];g=
b.button;NB(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=Hp(a,b,p);t=HF(a,b,a.k1);if(!(s>=0.0&&s<=B8.kP.width&&t>=0.0&&t<=B8.kP.height))a.pP=0;return;}}if(c===A(125))e=1;else if(!(A(125) instanceof H))e=0;else{d=A(125);e=c.jB!==d.jB?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.pv;if(!k)d=!d.j8?null:d.j5;else{h=d.j3;f=Bg(Bd(Z(U(k),D(2135587861, 2654435769)),d.j9));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}u=d.mZ;d=a.k1;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FR(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{p=A(124);f=n.jB!==p.jB?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+CH(l)*0.5|0)-a.lA.data[u]|0;d=a.k1;l=d.height*1.0/d.clientHeight;f=(q.clientY-(Gp(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(124))g=1;else if(!(A(124) instanceof H))g=0;else
{p=A(124);g=n.jB!==p.jB?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+CH(l)*0.5|0)-a.lz.data[u]|0;a.m4.data[u]=k;a.m5.data[u]=f;h=a.lA;d=a.k1;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FR(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{p=A(124);f=n.jB!==p.jB?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+CH(l)*0.5|0;h=a.lz;d=a.k1;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gp(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=T(d.compatMode);if(q===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{p=A(124);f=q.jB!==p.jB?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+CH(l)*0.5|0;d=a.l4;if(d!==null)S9(d,a.lA.data[u],a.lz.data[u],u);e=e+1|0;}a.ok=DU(performance.now()*1000000.0);b.preventDefault();}if(c===A(126))e=1;else if(!(A(126) instanceof H))e=0;else{d=A(126);e=c.jB!==d.jB?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.pv;if(!v)p=!d.j8?null
:d.j5;else{h=d.j3;k=Bg(Bd(Z(U(v),D(2135587861, 2654435769)),d.j9));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.j7;}}p=k<0?null:d.j4.data[k];}u=p.mZ;GB(d,v);a.nz.data[u]=0;d=a.k1;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FR(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=T(d.compatMode);if(n===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{p=A(124);f=n.jB!==p.jB?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CH(l)*0.5|0;d=a.k1;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(Gp(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=T(d.compatMode);if(q===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{p=A(124);f=q.jB!==p.jB?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CH(l)*0.5|0;h=a.lA.data;k=o-h[u]|0;j=a.lz.data;f=g-j[u]|0;a.m4.data[u]=k;a.m5.data[u]=f;h[u]=o;j[u]=g;d=a.l4;if(d!==null)LJ(d,h[u],j[u],u,0);e=e+1|0;}a.ok=DU(performance.now()*1000000.0);b.preventDefault();}if(c===A(127))e=1;else if(!(A(127) instanceof H))e=0;else{d=A(127);e=c.jB!==d.jB?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.pv;if(!k)c=!d.j8?null:d.j5;else{h=d.j3;f=Bg(Bd(Z(U(k),D(2135587861, 2654435769)),d.j9));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.j7;}}c=f<0?null:d.j4.data[f];}u=c.mZ;GB(d,k);a.nz.data[u]=0;d=a.k1;l=d.width*1.0/d.clientWidth;k=(q.clientX-(FR(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=T(d.compatMode);if(p===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{c=A(124);f=p.jB!==c.jB
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CH(l)*0.5|0;d=a.k1;l=d.height*1.0/d.clientHeight;k=(q.clientY-(Gp(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=T(d.compatMode);if(p===A(124))f=1;else if(!(A(124) instanceof H))f=0;else{c=A(124);f=p.jB!==c.jB?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CH(l)*0.5|0;h=a.lA.data;k=o-h[u]|0;j=a.lz.data;f=g-j[u]|0;a.m4.data[u]=k;a.m5.data[u]=f;h[u]=o;j[u]=g;d=a.l4;if(d!==null)LJ(d,h[u],j[u],u,0);e=e+1|0;}a.ok=DU(performance.now()*1000000.0);b.preventDefault();}},
W8=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=T(b.type);if(c!==A(128)){if(A(128) instanceof H){d=A(128);e=c.jB!==d.jB?0:1;}else e=0;}else e=1;if(e&&a.pP){a:{f=RJ(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}d=a.to;if(!f)e=d.pI;else{h=d.n$;e=Bg(Bd(Z(U(f),D(2135587861, 2654435769)),d.pi));b:{while(true){i=h.data[e];if(!i){e= -(e+1|0)|0;break b;}if(i==f)break;e=(e+1|0)&d.n1;}}e=e<0?0:1;}if(e)b.preventDefault();if(f!=67&&f!=112){h=a.sJ.data;if(!h[f]){a.qp=a.qp+1|0;h[f]=1;a.r4=1;a.tq.data[f]
=1;d=a.l4;if(d!==null){j=d.nv;if(j===null)j=d.k3;Cz();k=Br;g=BE(k,M(X));l=g<0?null:k.kh.data[g];if(l===null){l=new Cy;k=new Bt;k.kr=0;k.jQ=R(C,4);l.jU=k;l.kp=100;c:{try{k=CG(M(X),null);break c;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{k=CF(M(X),null);CI(k,1);break c;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}k=null;}l.j_=k;if(k===null){b=new Bx;d=new J;By(d);d.jA=G(16);B0(d,d.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);c=M(X).jI;B0(d,d.jz,c);c
=new H;h=d.jA;m=h.data;f=d.jz;By(c);HY(0,f,m.length);c.jB=K(h.data,0,f);b.jC=1;b.jD=1;Bj(b);b.jE=c;B(b);}Cc(Br,M(X),l);}c=l.jU;e=c.jF;if(e){if(!e){b=new BN;b.jC=1;b.jD=1;Bj(b);b.jE=A(22);B(b);}e=e-1|0;c.jF=e;h=c.jQ.data;c=h[e];h[e]=null;}else d:{try{c=CS(l.j_,null);break d;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));l=l.j_.k9.k8;if(l.jI===null)l.jI=T(l.jP.$meta.name);j=l.jI;F(b,b.jz,j);j=new H;h=b.jA;m=h.data;f=b.jz;g=m.length;if(f>=0&&
f<=(g-0|0)){j.jB=K(h.data,0,f);c.jC=1;c.jD=1;Bj(c);c.jE=j;c.kU=d;B(c);}B(FS());}k=c;k.lV=Ic;k.ke=d;k.t7=f;DR(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BF;c.jP=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kh.data[e];if(d!==null){c=d.jU;if(c.jF<d.kp){BB(c,k);e=d.ki;g=d.jU.jF;if(e>g)g=e;d.ki=g;if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}else if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=
0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}}}}else{b.preventDefault();d=a.l4;if(d!==null){j=d.nv;if(j===null)j=d.k3;Cz();k=Br;i=BE(k,M(X));l=i<0?null:k.kh.data[i];if(l===null){l=new Cy;k=new Bt;k.kr=0;k.jQ=R(C,4);l.jU=k;l.kp=100;e:{try{k=CG(M(X),null);break e;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{k=CF(M(X),null);CI(k,1);break e;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}k=null;}l.j_=k;if(k===null){b=new Bx;d=new J;By(d);d.jA=G(16);B0(d,d.jz,A(21));if(M(X).jI
===null)M(X).jI=T(M(X).jP.$meta.name);c=M(X).jI;B0(d,d.jz,c);c=new H;h=d.jA;m=h.data;f=d.jz;By(c);HY(0,f,m.length);c.jB=K(h.data,0,f);b.jC=1;b.jD=1;Bj(b);b.jE=c;B(b);}Cc(Br,M(X),l);}c=l.jU;e=c.jF;if(e){if(!e){b=new BN;b.jC=1;b.jD=1;Bj(b);b.jE=A(22);B(b);}e=e-1|0;c.jF=e;h=c.jQ.data;c=h[e];h[e]=null;}else f:{try{c=CS(l.j_,null);break f;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));l=l.j_.k9.k8;if(l.jI===null)l.jI=T(l.jP.$meta.name);j=l.jI;F(b,
b.jz,j);j=new H;h=b.jA;m=h.data;f=b.jz;g=m.length;if(f>=0&&f<=(g-0|0)){j.jB=K(h.data,0,f);c.jC=1;c.jD=1;Bj(c);c.jE=j;c.kU=d;B(c);}B(FS());}k=c;k.lV=Ic;k.ke=d;k.t7=f;DR(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BF;c.jP=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kh.data[e];if(d!==null){c=d.jU;if(c.jF<d.kp){BB(c,k);e=d.ki;i=d.jU.jF;if(e>i)i=e;d.ki=i;if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}else if(BA(k,
Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}d=a.l4;j=d.nv;if(j===null)j=d.k3;k=Br;i=BE(k,M(X));l=i<0?null:k.kh.data[i];if(l===null){l=new Cy;k=new Bt;k.kr=0;k.jQ=R(C,4);l.jU=k;l.kp=100;g:{try{k=CG(M(X),null);break g;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{k=CF(M(X),null);CI(k,1);break g;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}k=null;}l.j_=k;if(k===null){b=new Bx;d=new J;By(d);d.jA=G(16);B0(d,d.jz,A(21));if
(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);c=M(X).jI;B0(d,d.jz,c);c=new H;h=d.jA;m=h.data;f=d.jz;By(c);HY(0,f,m.length);c.jB=K(h.data,0,f);b.jC=1;b.jD=1;Bj(b);b.jE=c;B(b);}Cc(Br,M(X),l);}c=l.jU;e=c.jF;if(e){if(!e){b=new BN;b.jC=1;b.jD=1;Bj(b);b.jE=A(22);B(b);}e=e-1|0;c.jF=e;h=c.jQ.data;c=h[e];h[e]=null;}else h:{try{c=CS(l.j_,null);break h;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));l=l.j_.k9.k8;if(l.jI===null)l.jI=T(l.jP.$meta.name);j
=l.jI;F(b,b.jz,j);j=new H;h=b.jA;m=h.data;f=b.jz;g=m.length;if(f>=0&&f<=(g-0|0)){j.jB=K(h.data,0,f);c.jC=1;c.jD=1;Bj(c);c.jE=j;c.kU=d;B(c);}B(FS());}k=c;k.lV=Jh;k.ke=d;k.wM=g;DR(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BF;c.jP=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kh.data[e];if(d!==null){c=d.jU;if(c.jF<d.kp){BB(c,k);e=d.ki;g=d.jU.jF;if(e>g)g=e;d.ki=g;if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}else if
(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(129))e=1;else if(!(A(129) instanceof H))e=0;else{d=A(129);e=c.jB!==d.jB?0:1;}if(e&&a.pP){e=b.charCode&65535;d=a.l4;if(d!==null){j=d.nv;if(j===null)j=d.k3;Cz();k=Br;f=BE(k,M(X));k=f<0?null:k.kh.data[f];if(k===null){k=new Cy;l=new Bt;l.kr=0;l.jQ=R(C,4);k.jU=l;k.kp=100;i:{try{l=CG(M(X),null);break i;}catch($$e){$$je=Bb($$e);if($$je instanceof BD)
{}else{throw $$e;}}try{l=CF(M(X),null);CI(l,1);break i;}catch($$e){$$je=Bb($$e);if($$je instanceof B5){}else{throw $$e;}}l=null;}k.j_=l;if(l===null){b=new Bx;d=new J;By(d);d.jA=G(16);B0(d,d.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);c=M(X).jI;B0(d,d.jz,c);c=new H;h=d.jA;m=h.data;f=d.jz;By(c);HY(0,f,m.length);c.jB=K(h.data,0,f);b.jC=1;b.jD=1;Bj(b);b.jE=c;B(b);}Cc(Br,M(X),k);}c=k.jU;f=c.jF;if(f){if(!f){b=new BN;b.jC=1;b.jD=1;Bj(b);b.jE=A(22);B(b);}f=f-1|0;c.jF=f;h=c.jQ.data;c=h[f];h[f]=null;}else j:
{try{c=CS(k.j_,null);break j;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));l=k.j_.k9.k8;if(l.jI===null)l.jI=T(l.jP.$meta.name);j=l.jI;F(b,b.jz,j);j=new H;h=b.jA;m=h.data;f=b.jz;g=m.length;if(f>=0&&f<=(g-0|0)){j.jB=K(h.data,0,f);c.jC=1;c.jD=1;Bj(c);c.jE=j;c.kU=d;B(c);}B(FS());}k=c;k.lV=Jh;k.ke=d;k.wM=e;DR(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BF;c.jP=j;l=c;j.classObject=l;}}f=BE(d,c);d=f<0?null
:d.kh.data[f];if(d!==null){c=d.jU;if(c.jF<d.kp){BB(c,k);f=d.ki;g=d.jU.jF;if(f>g)g=f;d.ki=g;if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}else if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}}if(e==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(130))e=1;else if(!(A(130) instanceof H))e=0;else{d=A(130);e=c.jB!==d.jB?0:1;}if(e&&a.pP){f=RJ(b.keyCode);d=a.to;if(!f)e=d.pI;else{h=d.n$;e=Bg(Bd(Z(U(f),
D(2135587861, 2654435769)),d.pi));k:{while(true){g=h.data[e];if(!g){e= -(e+1|0)|0;break k;}if(g==f)break;e=(e+1|0)&d.n1;}}e=e<0?0:1;}if(e)b.preventDefault();h=a.sJ.data;if(h[f]){a.qp=a.qp-1|0;h[f]=0;}d=a.l4;if(d!==null){j=d.nv;if(j===null)j=d.k3;Cz();k=Br;g=BE(k,M(X));l=g<0?null:k.kh.data[g];if(l===null){l=new Cy;k=new Bt;k.kr=0;k.jQ=R(C,4);l.jU=k;l.kp=100;l:{try{k=CG(M(X),null);break l;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){}else{throw $$e;}}try{k=CF(M(X),null);CI(k,1);break l;}catch($$e){$$je=Bb($$e);if
($$je instanceof B5){}else{throw $$e;}}k=null;}l.j_=k;if(k===null){b=new Bx;d=new J;By(d);d.jA=G(16);B0(d,d.jz,A(21));if(M(X).jI===null)M(X).jI=T(M(X).jP.$meta.name);c=M(X).jI;B0(d,d.jz,c);c=new H;h=d.jA;m=h.data;f=d.jz;By(c);HY(0,f,m.length);c.jB=K(h.data,0,f);b.jC=1;b.jD=1;Bj(b);b.jE=c;B(b);}Cc(Br,M(X),l);}c=l.jU;e=c.jF;if(e){if(!e){b=new BN;b.jC=1;b.jD=1;Bj(b);b.jE=A(22);B(b);}e=e-1|0;c.jF=e;h=c.jQ.data;c=h[e];h[e]=null;}else m:{try{c=CS(l.j_,null);break m;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){d
=$$je;}else{throw $$e;}}c=new Q;b=new J;b.jA=G(16);F(b,b.jz,A(23));l=l.j_.k9.k8;if(l.jI===null)l.jI=T(l.jP.$meta.name);j=l.jI;F(b,b.jz,j);j=new H;h=b.jA;m=h.data;f=b.jz;g=m.length;if(f>=0&&f<=(g-0|0)){j.jB=K(h.data,0,f);c.jC=1;c.jD=1;Bj(c);c.jE=j;c.kU=d;B(c);}B(FS());}k=c;k.lV=LM;k.ke=d;k.t7=f;DR(j,k);d=Br;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BF;c.jP=j;l=c;j.classObject=l;}}e=BE(d,c);d=e<0?null:d.kh.data[e];if(d!==null){c=d.jU;if(c.jF<d.kp){BB(c,k);e=d.ki;g=d.jU.jF;if(e
>g)g=e;d.ki=g;if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}else if(BA(k,Bw)){d=k;d.ke=null;d.kD=null;d.kE=null;d.kM=0;d.kI=1;d.kx=0;d.kL=0;d.kB=0;d.kV=null;d.kT=(-1);}}}if(f==61){b.preventDefault();b.stopPropagation();}}}}},
Rd=a=>{let b,c,d;a:{if(a.qc){a.qc=0;b=0;while(true){c=a.um.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.r4){a.r4=0;d=0;while(true){c=a.tq.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
Hp=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(FR(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=T(b.compatMode);if(f===A(124))g=1;else if(!(A(124) instanceof H))g=0;else{c=A(124);g=f.jB!==c.jB?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CH(d)*0.5|0;},
HF=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Gp(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=T(b.compatMode);if(f===A(124))g=1;else if(!(A(124) instanceof H))g=0;else{c=A(124);g=f.jB!==c.jB?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CH(d)*0.5|0;},
Gp=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
FR=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ACC=(a,b)=>{a.l4=b;},
MW=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
XP=(a,b)=>{AJj(a,b);W8(a,b);};
let R3=E(0);
function TU(){C.call(this);this.oV=null;}
function S$(){C.call(this);this.yf=null;}
let S1=E(0);
let QL=E();
let Pd=E(0);
function S5(){let a=this;C.call(a);a.yi=0;a.rN=0;a.xH=null;a.tx=null;}
let T3=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AJC=E();
let C3=null,B8=null,AHM=null,KP=null,Fq=null,AL9=null,B1=null,Bl=null,Em=null;
let TY=E(0);
let S_=E(0);
function P$(){C.call(this);this.wv=null;}
function JS(){C.call(this);this.sv=null;}
let ACQ=(a,b)=>{let c,d,$$je;c=T(a.sv.oa.mT.document.visibilityState);if(A(131)===c)d=1;else if(!(c instanceof H))d=0;else{c=c;d=A(131).jB!==c.jB?0:1;}if(!d){b=a.sv.rf;FD(b);a:{try{c=F7(b);while(Hh(c)){AJn(Co(c));}DB(b);break a;}catch($$e){$$je=Bb($$e);c=$$je;}DB(b);B(c);}}else{b=a.sv.rf;FD(b);b:{try{c=F7(b);while(Hh(c)){ANL(Co(c));}DB(b);break b;}catch($$e){$$je=Bb($$e);c=$$je;}DB(b);B(c);}}},
AL4=(a,b)=>{ACQ(a,b);};
function JT(){C.call(this);this.qo=null;}
let ASd=(a,b)=>{let c,d,e,f,g;c=a.qo.oa.mT.document.documentElement.clientWidth;b=a.qo;d=c-b.m8.s0|0;e=b.oa.mT.document.documentElement.clientHeight;b=a.qo;f=b.m8;c=e-f.uw|0;if(d>0&&c>0){if(b.on!==null){if(f.rZ){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}JP(a.qo.on,d,c);}return;}},
AQV=(a,b)=>{ASd(a,b);};
let Bn=E(Bx);
let AOV=E();
let HY=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new I;e.jC=1;e.jD=1;B(e);};
let Zd=E();
let Jd=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bn;e=new J;e.jA=G(16);F(e,e.jz,A(132));L(e,e.jz,b,10);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);d.jC=1;d.jD=1;d.jE=f;B(d);}d=new I;d.jC=1;d.jD=1;B(d);}j=KK(b/c)|0;if(2>j)j=2;i=KY(j);if(i<=1073741824)return i;d=new Bn;e=new J;e.jA=G(16);F(e,e.jz,A(133));L(e,e.jz,b,10);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);d.jC=1;d.jD=1;d.jE=f;B(d);}d=new I;d.jC=1;d.jD=1;B(d);};
let AHp=E(Ei);
let Pn=null;
let AOP=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new Cs;b.jC=1;b.jD=1;b.jE=A(77);B(b);}f=0;if(c>=0&&c<b.jB.length){a:{switch(b.jB.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=B$;i=U(e);j=C0(U(1),My(D(4294967295, 2147483647),i));if(g==d){b=new Cs;b.jC=1;b.jD=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.jB.length)break b;g=AFv(b.jB.charCodeAt(g));if(g<0){l=new Cs;b=Cm(b,c,d);m=new J;m.jA=G(16);F(m,m.jz,A(78));c=m.jz;if(b===null)b=A(2);F(m,c,
b);b=new H;n=m.jA;o=n.data;d=m.jz;e=o.length;if(d>=0&&d<=(e-0|0)){b.jB=K(n.data,0,d);l.jC=1;l.jD=1;l.jE=b;B(l);}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);}if(g>=e){l=new Cs;p=Cm(b,c,d);b=new J;b.jA=G(16);F(b,b.jz,A(79));L(b,b.jz,e,10);F(b,b.jz,A(75));c=b.jz;if(p===null)p=A(2);F(b,c,p);m=new H;n=b.jA;o=n.data;d=b.jz;e=o.length;if(d>=0&&d<=(e-0|0)){m.jB=K(n.data,0,d);l.jC=1;l.jD=1;l.jE=m;B(l);}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);}if(AB0(h,j)){b=new Cs;b.jC=1;b.jD=1;b.jE=A(134);B(b);}h=C0(Z(i,h),U(g));if(ATI(h,B$)){if(k==
d&&DT(h,D(0, 2147483648))&&f)return D(0, 2147483648);l=new Cs;p=Cm(b,c,d);m=new J;m.jA=G(16);F(m,m.jz,A(135));c=m.jz;if(p===null)p=A(2);F(m,c,p);b=new H;n=m.jA;o=n.data;e=m.jz;c=o.length;if(e>=0&&e<=(c-0|0)){b.jB=K(n.data,0,e);l.jC=1;l.jD=1;l.jE=b;B(l);}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);}g=k;}if(f)h=AUL(h);return h;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);}b=new Cs;l=new J;l.jA=G(16);F(l,l.jz,A(82));L(l,l.jz,e,10);m=new H;n=l.jA;o=n.data;d=l.jz;e=o.length;if(d>=0&&d<=(e-0|0)){m.jB=K(n.data,0,d);b.jC
=1;b.jD=1;b.jE=m;B(b);}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
AFv=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
EX=b=>{let c,d;if(DT(b,B$))return 64;c=0;d=Bd(b,32);if(ACM(d,B$))c=32;else d=b;b=Bd(d,16);if(DT(b,B$))b=d;else c=c|16;d=Bd(b,8);if(DT(d,B$))d=b;else c=c|8;b=Bd(d,4);if(DT(b,B$))b=d;else c=c|4;d=Bd(b,2);if(DT(d,B$))d=b;else c=c|2;if(ACM(Bd(d,1),B$))c=c|1;return (64-c|0)-1|0;},
Ey=(b,c)=>{return AUS(b,c);},
EW=(b,c)=>{return AUQ(b,c);},
AT2=()=>{Pn=M(AIZ);};
let AGX=E();
let ACd=()=>{return {};};
let LK=E(0);
function GI(){let a=this;C.call(a);a.jH=null;a.oD=0;a.ox=0;a.lU=0;a.xM=0;a.xV=0;a.l9=0;a.oJ=0;a.lc=null;a.lS=null;a.mB=null;a.yy=null;a.x1=null;a.mN=null;a.mF=null;a.no=0;a.q1=null;a.oG=null;a.qg=null;a.q_=null;a.xw=null;}
let L8=(a,b)=>{a.oD=1;a.ox=1;a.lU=1;a.xM=1;a.xV=1;a.l9=1;a.oJ=1;a.lc=Dc(51,0.800000011920929);a.lS=Dc(51,0.800000011920929);a.mB=Dc(51,0.800000011920929);a.yy=Dc(51,0.800000011920929);a.x1=Dc(51,0.800000011920929);a.mN=Dc(51,0.800000011920929);a.mF=Dc(51,0.800000011920929);a.no=0;a.q1=new Float32Array(40000);a.oG=new Int32Array(12000);a.qg=new Int16Array(12000);a.q_=new Int8Array(12000);a.xw=new Uint8Array(240000);a.jH=b;b.pixelStorei(37441,0);},
AO8=a=>{let b=new GI();L8(b,a);return b;},
Nl=(a,b)=>{let c,d,e,f,g;if(Gf){c=(!BA(b,D5)?null:b.oq.ky.data).buffer;d=b.jO;e=b.jG-d|0;return new Float32Array(c,d,e);}if((b.jG-b.jO|0)>a.q1.length)a.q1=new Float32Array(b.jG-b.jO|0);e=b.jO;d=0;while(true){f=b.jG;if(e>=f)break;c=a.q1;g=Rr(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.q1;e=f-b.jO|0;return c.subarray(0,e);},
RN=(a,b)=>{let c,d,e,f,g;if(Gf){c=(!BA(b,D5)?null:b.ol.ky.data).buffer;d=b.jO;e=b.jG-d|0;return new Int16Array(c,d,e);}if((b.jG-b.jO|0)>a.qg.length)a.qg=new Int16Array(b.jG-b.jO|0);e=b.jO;d=0;while(true){f=b.jG;if(e>=f)break;c=a.qg;g=AMm(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.qg;e=f-b.jO|0;return c.subarray(0,e);},
Vf=(a,b)=>{let c,d,e,f,g;if(Gf){c=(!BA(b,D5)?null:b.es()).buffer;d=b.jO;e=b.jG-d|0;return new Int32Array(c,d,e);}if((b.jG-b.jO|0)>a.oG.length)a.oG=new Int32Array(b.jG-b.jO|0);e=b.jO;d=0;while(true){f=b.jG;if(e>=f)break;c=a.oG;g=b.et(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.oG;e=f-b.jO|0;return c.subarray(0,e);},
L0=(a,b)=>{let c,d,e,f,g;if(Gf)return !BA(b,D5)?null:b.ky.data;if((b.jG-b.jO|0)>a.q_.length)a.q_=new Int8Array(b.jG-b.jO|0);c=b.jO;d=0;while(true){e=b.jG;if(c>=e)break;f=a.q_;g=Ww(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.q_;c=e-b.jO|0;return f.subarray(0,c);},
AVN=(a,b)=>{if((b.jG-b.jO|0)>a.oG.length)a.oG=new Int32Array(b.jG-b.jO|0);},
ASJ=(a,b)=>{let c,d,e,f,g;c=a.mF;d=a.no;if(!d)c=!c.j8?null:c.j5;else{e=c.j3;f=Bg(Bd(Z(U(d),D(2135587861, 2654435769)),c.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.j7;}}c=f<0?null:c.j4.data[f];}c=c;if(!b)c=!c.j8?null:c.j5;else{e=c.j3;d=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),c.j9));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.j7;}}c=d<0?null:c.j4.data[d];}BC();return c===null?null:c[Bo]===true?c:c.kb;},
AEF=(a,b,c)=>{let d,e,f,g,h,i;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();h=d===null?null:d[Bo]===true?d:d.kb;d=a.lS;if(!c)d=!d.j8?null:d.j5;else{e=d.j3;b=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),d.j9));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.j7;}}d=b<0?null:d.j4.data[b];}i=d===null?null:d[Bo]===true?d:
d.kb;a.jH.attachShader(h,i);},
AQN=(a,b,c)=>{let d,e,f,g,h;d=a.jH;e=a.mB;if(!c)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.bindBuffer(b,e);},
AAh=(a,b,c)=>{let d,e,f,g,h;d=a.jH;e=a.mN;if(!c)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.bindTexture(b,e);},
ADN=(a,b,c,d,e)=>{a.jH.blendFuncSeparate(b,c,d,e);},
KW=(a,b,c,d,e)=>{let f,g;if(d instanceof D$){f=a.jH;d=Nl(a,d);f.bufferData(b,d,e);}else if(d instanceof GX){f=a.jH;d=Vf(a,d);f.bufferData(b,d,e);}else if(d instanceof GY){f=a.jH;d=RN(a,d);f.bufferData(b,d,e);}else if(d instanceof EM){f=a.jH;g=L0(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Q;f.jC=1;f.jD=1;f.jE=A(136);B(f);}a.jH.bufferData(b,c,e);}},
KV=(a,b,c,d,e)=>{let f,g;if(e instanceof D$){f=a.jH;e=Nl(a,e);f.bufferSubData(b,c,e);}else if(e instanceof GX){f=a.jH;g=Vf(a,e);f.bufferSubData(b,c,g);}else if(e instanceof GY){f=a.jH;e=RN(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof EM)){f=new Q;f.jC=1;f.jD=1;f.jE=A(136);B(f);}f=a.jH;e=L0(a,e);f.bufferSubData(b,c,e);}},
AOr=(a,b)=>{a.jH.clear(b);},
AAv=(a,b,c,d,e)=>{a.jH.clearColor(b,c,d,e);},
AFI=(a,b)=>{let c,d,e,f;c=a.lS;if(!b)c=!c.j8?null:c.j5;else{d=c.j3;e=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),c.j9));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.j7;}}c=e<0?null:c.j4.data[e];}BC();c=c===null?null:c[Bo]===true?c:c.kb;a.jH.compileShader(c);},
ARx=a=>{let b,c;b=a.jH.createProgram();c=a.oD;a.oD=c+1|0;B7(a.lc,c,B9(b));return c;},
ALa=(a,b)=>{let c,d;c=a.jH.createShader(b);d=a.ox;a.ox=d+1|0;B7(a.lS,d,B9(c));return d;},
AOs=(a,b)=>{a.jH.depthMask(!!b);},
AKT=(a,b)=>{a.jH.disable(b);},
AJo=(a,b)=>{a.jH.disableVertexAttribArray(b);},
AA7=(a,b,c,d)=>{a.jH.drawArrays(b,c,d);},
AGx=(a,b,c,d,e)=>{let f,g;f=a.jH;g=e.jO;f.drawElements(b,c,d,g);},
AIU=(a,b,c,d,e)=>{a.jH.drawElements(b,c,d,e);},
AQp=(a,b)=>{a.jH.enable(b);},
AO$=(a,b)=>{a.jH.enableVertexAttribArray(b);},
AUg=a=>{let b,c;b=a.jH.createBuffer();c=a.lU;a.lU=c+1|0;B7(a.mB,c,B9(b));return c;},
Ws=(a,b)=>{a.jH.generateMipmap(b);},
AVU=a=>{let b,c;b=a.jH.createTexture();c=a.l9;a.l9=c+1|0;B7(a.mN,c,B9(b));return c;},
J8=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.jH;g=a.lc;if(!b)g=!g.j8?null:g.j5;else{h=g.j3;i=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),g.j9));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.j7;}}g=i<0?null:g.j4.data[i];}BC();g=g===null?null:g[Bo]===true?g:g.kb;g=f.getActiveAttrib(g,c);D8(d,g.size);D8(e,g.type);d.jO=0;d.jG=d.j6;d.jZ=(-1);e.jO=0;e.jG=e.j6;e.jZ=(-1);return T(g.name);},
LB=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.jH;g=a.lc;if(!b)g=!g.j8?null:g.j5;else{h=g.j3;i=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),g.j9));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.j7;}}g=i<0?null:g.j4.data[i];}BC();g=g===null?null:g[Bo]===true?g:g.kb;g=f.getActiveUniform(g,c);D8(d,g.size);D8(e,g.type);d.jO=0;d.jG=d.j6;d.jZ=(-1);e.jO=0;e.jG=e.j6;e.jZ=(-1);return T(g.name);},
ACz=(a,b,c)=>{let d,e,f,g,h;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();h=d===null?null:d[Bo]===true?d:d.kb;return a.jH.getAttribLocation(h,Bz(c));},
IY=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Q;c.jC=1;c.jD=1;c.jE=A(137);B(c);}Nh(c,0,a.jH.getParameter(b));c.jO=0;c.jG=c.j6;c.jZ=(-1);},
ARo=(a,b)=>{let c,d,e,f,g;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;return T(c.getProgramInfoLog(d));},
L4=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.jH;f=a.lc;if(!b)f=!f.j8?null:f.j5;else{g=f.j3;h=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),f.j9));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.j7;}}f=h<0?null:f.j4.data[h];}BC();f=f===null?null:f[Bo]===true?f:f.kb;D8(d,e.getProgramParameter(f,c));}else{f=a.jH;e=a.lc;if(!b)e=!e.j8?null:e.j5;else{g=e.j3;h=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.j7;}}e=h<0?null:e.j4.data[h];}BC();e=e===null?null:e[Bo]===true?e:e.kb;D8(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.jO=0;d.jG=d.j6;d.jZ=(-1);},
AHf=(a,b)=>{let c,d,e,f,g;c=a.jH;d=a.lS;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;return T(c.getShaderInfoLog(d));},
KB=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.jH;f=a.lS;if(!b)f=!f.j8?null:f.j5;else{g=f.j3;h=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),f.j9));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.j7;}}f=h<0?null:f.j4.data[h];}BC();f=f===null?null:f[Bo]===true?f:f.kb;D8(d,e.getShaderParameter(f,c));}else{f=a.jH;e=a.lS;if(!b)e=!e.j8?null:e.j5;else{g=e.j3;h=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.j7;}}e=h<0?null:e.j4.data[h];}BC();e=e===null?null:e[Bo]===true?e:e.kb;D8(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.jO=0;d.jG=d.j6;d.jZ=(-1);},
ADt=(a,b)=>{return T(a.jH.getParameter(b));},
ADn=(a,b,c)=>{let d,e,f,g,h;d=a.jH;e=a.lc;if(!b)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d=d.getUniformLocation(e,Bz(c));if(d===null)return (-1);c=a.mF;if(!b)c=!c.j8?null:c.j5;else{f=c.j3;h=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),c.j9));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.j7;}}c
=h<0?null:c.j4.data[h];}c=c;if(c===null){c=Dc(51,0.800000011920929);B7(a.mF,b,c);}h=a.oJ;a.oJ=h+1|0;B7(c,h,B9(d));return h;},
YN=(a,b)=>{let c,d,e,f,g;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.linkProgram(d);},
AA6=(a,b,c)=>{a.jH.pixelStorei(b,c);},
Wr=(a,b,c)=>{let d,e,f,g,h;d=a.jH;e=a.lS;if(!b)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.shaderSource(e,Bz(c));},
Md=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.jH;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.jG>4){if(!Gf)l=!(j instanceof D$)?Uint8Array.from(L0(a,j)):Nl(a,j);else{m=!BA(j,D5)?null:j.ky.data;if(!(j instanceof D$)){n=j.jG-j.jO|0;o=m.byteOffset+j.jO|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.jG-j.jO|0;o=m.byteOffset+j.jO|0;l=new Float32Array(m.buffer,o,n);}}a.jH.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=AOx(j,0);Ep();j=FB;if(!p)j=!j.j8?null:j.j5;else{q=j.j3;n=Bg(Bd(Z(U(p),D(2135587861, 2654435769)),
j.j9));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.j7;}}j=n<0?null:j.j4.data[n];}k=j;r=k.nP;if(r===null&&k.k0!==null?1:0){j=a.jH;s=k.k0.q4;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.pg!==null?1:0){j=a.jH;s=k.pg;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.qk!==null?1:0){j=a.jH;s=k.qk;j.texImage2D(b,c,d,h,i,s);}else{j=a.jH;E1(k);s=k.nP;j.texImage2D(b,c,d,h,i,s);}}},
AH4=(a,b,c,d)=>{a.jH.texParameterf(b,c,d);},
AKn=(a,b,c,d)=>{let e,f;e=a.jH;f=d;e.texParameterf(b,c,f);},
AKS=(a,b,c)=>{let d,e,f,g,h,i;d=a.mF;e=a.no;if(!e)d=!d.j8?null:d.j5;else{f=d.j3;g=Bg(Bd(Z(U(e),D(2135587861, 2654435769)),d.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.j7;}}d=g<0?null:d.j4.data[g];}d=d;if(!b)d=!d.j8?null:d.j5;else{f=d.j3;g=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.j7;}}d=g<0?null:d.j4.data[g];}BC();i=d===null?null:d[Bo]===true?d:d.kb;a.jH.uniform1i(i,c);},
Qb=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.mF;f=a.no;if(!f)g=!g.j8?null:g.j5;else{h=g.j3;c=Bg(Bd(Z(U(f),D(2135587861, 2654435769)),g.j9));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.j7;}}g=c<0?null:g.j4.data[c];}g=g;if(!b)g=!g.j8?null:g.j5;else{h=g.j3;c=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),g.j9));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.j7;}}g=c<0?null:g.j4.data[c];}BC();j=g===null?null:g[Bo]===true?g:g.kb;g=a.jH;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
YP=(a,b)=>{let c,d,e,f,g;a.no=b;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.useProgram(d);},
AHG=(a,b,c,d,e,f,g)=>{a.jH.vertexAttribPointer(b,c,d,!!e,f,g);},
WR=(a,b,c,d,e)=>{a.jH.viewport(b,c,d,e);};
let R2=E(0);
function JD(){let a=this;GI.call(a);a.kf=null;a.za=null;a.yO=0;a.xB=null;a.xT=0;a.yb=null;a.xg=0;a.qT=null;a.qL=0;a.yF=null;}
let NC=(a,b)=>{L8(a,b);a.za=Dc(51,0.800000011920929);a.yO=1;a.xB=Dc(51,0.800000011920929);a.xT=1;a.yb=Dc(51,0.800000011920929);a.xg=1;a.qT=Dc(51,0.800000011920929);a.qL=1;a.yF=new Uint32Array(12000);a.kf=b;},
AP$=a=>{let b=new JD();NC(b,a);return b;},
AEb=(a,b)=>{let c,d,e,f,g;c=a.kf;d=a.qT;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.bindVertexArray(d);},
AJf=(a,b,c,d,e)=>{a.kf.drawArraysInstanced(b,c,d,e);},
AR9=(a,b,c,d,e,f)=>{a.kf.drawElementsInstanced(b,c,d,e,f);},
AJS=(a,b,c)=>{let d,e,f,g;d=c.jO;e=0;while(e<b){f=a.kf.createVertexArray();g=a.qL;a.qL=g+1|0;B7(a.qT,g,B9(f));D8(c,g);e=e+1|0;}CA(c,d);},
AGF=(a,b,c)=>{if(b!=34045)IY(a,b,c);else{Nh(c,0,a.kf.getParameter(b));c.jO=0;c.jG=c.j6;c.jZ=(-1);}};
let OA=E(JD);
let ACH=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kf;d=a.qT;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.bindVertexArray(d);b=a.kf.getError();if(!b)return;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=0&&
f<=(g-0|0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
Zv=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.kf.drawArraysInstanced(b,c,d,e);b=a.kf.getError();if(!b)return;f=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;Y(f);B(f);},
AQF=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.kf.drawElementsInstanced(b,c,d,e,f);b=a.kf.getError();if(!b)return;g=new Q;h=Be(b,4);i=new J;i.jA=G(16);F(i,i.jz,A(138));L(i,i.jz,b,10);F(i,i.jz,A(61));b=i.jz;if(h===null)h=A(2);F(i,b,h);j=new H;k=i.jA;l=k.data;c=i.jz;d=l.length;if(c>=0&&c<=(d-0|0)){j.jB=K(k.data,0,c);g.jC=1;g.jD=1;g.jE=j;B(g);}g=new I;Y(g);B(g);},
YB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.jO;e=0;while(e<b){f=a.kf.createVertexArray();g=a.qL;a.qL=g+1|0;B7(a.qT,g,B9(f));D8(c,g);e=e+1|0;}CA(c,d);b=a.kf.getError();if(!b)return;c=new Q;h=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jA;k=j.data;e=f.jz;l=k.length;if(e>=0&&e<=(l-0|0)){i.jB=K(j.data,0,e);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
Zn=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jH;e=a.mN;if(!c)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.bindTexture(b,e);b=a.kf.getError();if(!b)return;d=new Q;i=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jA;k=f.data;c=e.jz;g=k.length;if(c>=0&&c<=(g
-0|0)){j.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=j;B(d);}d=new I;Y(d);B(d);},
AOw=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.clear(b);b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AH9=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.jH.clearColor(b,c,d,e);f=a.kf.getError();if(!f)return;g=new Q;h=Be(f,4);i=new J;i.jA=G(16);F(i,i.jz,A(138));L(i,i.jz,f,10);F(i,i.jz,A(61));f=i.jz;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.jA;l=k.data;m=i.jz;n=l.length;if(m>=0&&m<=(n-0|0)){j.jB=K(k.data,0,m);g.jC=1;g.jD=1;g.jE=j;B(g);}g=new I;Y(g);B(g);},
Yy=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.depthMask(!!b);b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
APb=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.disable(b);b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
ABX=(a,b,c,d)=>{let e,f,g,h,i,j;a.jH.drawArrays(b,c,d);b=a.kf.getError();if(!b)return;e=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;d=j.length;if(c>=0&&c<=(d-0|0)){h.jB=K(i.data,0,c);e.jC=1;e.jD=1;e.jE=h;B(e);}e=new I;Y(e);B(e);},
ALn=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.jH;g=e.jO;f.drawElements(b,c,d,g);b=a.kf.getError();if(!b)return;e=new Q;h=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jA;k=j.data;c=f.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);e.jC=1;e.jD=1;e.jE=i;B(e);}e=new I;Y(e);B(e);},
AM2=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.enable(b);b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
Wc=(a,b)=>{return T(a.jH.getParameter(b));},
Xp=(a,b,c)=>{let d,e,f,g,h,i,j;a.jH.pixelStorei(b,c);b=a.kf.getError();if(!b)return;d=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=g;B(d);}d=new I;Y(d);B(d);},
AIC=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;Md(a,b,c,d,e,f,g,h,i,j);b=a.kf.getError();if(!b)return;j=new Q;k=Be(b,4);l=new J;l.jA=G(16);F(l,l.jz,A(138));L(l,l.jz,b,10);F(l,l.jz,A(61));b=l.jz;if(k===null)k=A(2);F(l,b,k);m=new H;n=l.jA;o=n.data;c=l.jz;d=o.length;if(c>=0&&c<=(d-0|0)){m.jB=K(n.data,0,c);j.jC=1;j.jD=1;j.jE=m;B(j);}j=new I;Y(j);B(j);},
ABF=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.jH.texParameterf(b,c,d);b=a.kf.getError();if(!b)return;e=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;k=j.length;if(c>=0&&c<=(k-0|0)){h.jB=K(i.data,0,c);e.jC=1;e.jD=1;e.jE=h;B(e);}e=new I;Y(e);B(e);},
AD2=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jH.viewport(b,c,d,e);b=a.kf.getError();if(!b)return;f=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;Y(f);B(f);},
AHl=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();h=d===null?null:d[Bo]===true?d:d.kb;d=a.lS;if(!c)d=!d.j8?null:d.j5;else{e=d.j3;b=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),d.j9));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.j7;}}d=b<0?null:d.j4.data[b];}i=d===null?null:d[Bo]===true
?d:d.kb;a.jH.attachShader(h,i);b=a.kf.getError();if(!b)return;d=new Q;j=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.jA;k=e.data;c=h.jz;f=k.length;if(c>=0&&c<=(f-0|0)){i.jB=K(e.data,0,c);d.jC=1;d.jD=1;d.jE=i;B(d);}d=new I;Y(d);B(d);},
AP2=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jH;e=a.mB;if(!c)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.bindBuffer(b,e);b=a.kf.getError();if(!b)return;d=new Q;i=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jA;k=f.data;c=e.jz;g=k.length;if(c>=0&&c<=(g
-0|0)){j.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=j;B(d);}d=new I;Y(d);B(d);},
ACJ=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jH.blendFuncSeparate(b,c,d,e);b=a.kf.getError();if(!b)return;f=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;Y(f);B(f);},
AIi=(a,b,c,d,e)=>{let f,g,h,i,j;KW(a,b,c,d,e);b=a.kf.getError();if(!b)return;d=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;e=j.length;if(c>=0&&c<=(e-0|0)){h.jB=K(i.data,0,c);d.jC=1;d.jD=1;d.jE=h;B(d);}d=new I;Y(d);B(d);},
APT=(a,b,c,d,e)=>{let f,g,h,i,j;KV(a,b,c,d,e);b=a.kf.getError();if(!b)return;e=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;d=j.length;if(c>=0&&c<=(d-0|0)){h.jB=K(i.data,0,c);e.jC=1;e.jD=1;e.jE=h;B(e);}e=new I;Y(e);B(e);},
AJJ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lS;if(!b)c=!c.j8?null:c.j5;else{d=c.j3;e=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),c.j9));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.j7;}}c=e<0?null:c.j4.data[e];}BC();g=c===null?null:c[Bo]===true?c:c.kb;a.jH.compileShader(g);b=a.kf.getError();if(!b)return;c=new Q;h=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.jA;j=d.data;e=g.jz;f=j.length;if(e>=0&&e<=(f-0|0))
{i.jB=K(d.data,0,e);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
ARw=a=>{let b,c,d,e,f,g,h,i,j;b=a.jH.createProgram();c=a.oD;a.oD=c+1|0;B7(a.lc,c,B9(b));d=a.kf.getError();if(!d)return c;b=new Q;e=Be(d,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,d,10);F(f,f.jz,A(61));d=f.jz;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);b.jC=1;b.jD=1;b.jE=g;B(b);}b=new I;Y(b);B(b);},
ALH=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH.createShader(b);d=a.ox;a.ox=d+1|0;B7(a.lS,d,B9(c));b=a.kf.getError();if(!b)return d;c=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;d=f.jz;j=i.length;if(d>=0&&d<=(j-0|0)){g.jB=K(h.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;Y(c);B(c);},
ARl=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.disableVertexAttribArray(b);b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
Y4=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jH.drawElements(b,c,d,e);b=a.kf.getError();if(!b)return;f=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;Y(f);B(f);},
ALN=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.enableVertexAttribArray(b);b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AOC=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.generateMipmap(b);b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AFp=(a,b,c,d,e)=>{let f,g,h,i,j;f=J8(a,b,c,d,e);b=a.kf.getError();if(!b)return f;d=new Q;g=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jA;i=h.data;c=e.jz;j=i.length;if(c>=0&&c<=(j-0|0)){f.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=f;B(d);}d=new I;Y(d);B(d);},
AOt=(a,b,c,d,e)=>{let f,g,h,i,j;f=LB(a,b,c,d,e);b=a.kf.getError();if(!b)return f;d=new Q;g=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jA;i=h.data;c=e.jz;j=i.length;if(c>=0&&c<=(j-0|0)){f.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=f;B(d);}d=new I;Y(d);B(d);},
AI1=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();h=d===null?null:d[Bo]===true?d:d.kb;b=a.jH.getAttribLocation(h,Bz(c));f=a.kf.getError();if(!f)return b;c=new Q;i=Be(f,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,f,10);F(d,d.jz,A(61));b=d.jz;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=
0&&f<=(g-0|0)){h.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;Y(c);B(c);},
ACS=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)IY(a,b,c);else{Nh(c,0,a.kf.getParameter(b));c.jO=0;c.jG=c.j6;c.jZ=(-1);}b=a.kf.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AAy=(a,b,c,d)=>{let e,f,g,h,i,j;L4(a,b,c,d);b=a.kf.getError();if(!b)return;d=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=g;B(d);}d=new I;Y(d);B(d);},
Xn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c=T(c.getProgramInfoLog(d));b=a.kf.getError();if(!b)return c;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
ARu=(a,b,c,d)=>{let e,f,g,h,i,j;KB(a,b,c,d);b=a.kf.getError();if(!b)return;d=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=g;B(d);}d=new I;Y(d);B(d);},
Yg=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH;d=a.lS;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c=T(c.getShaderInfoLog(d));b=a.kf.getError();if(!b)return c;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
Xq=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jH;e=a.lc;if(!b)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;c=d.getUniformLocation(e,Bz(c));if(c===null)h=(-1);else{d=a.mF;if(!b)d=!d.j8?null:d.j5;else{f=d.j3;h=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)
&d.j7;}}d=h<0?null:d.j4.data[h];}d=d;if(d===null){d=Dc(51,0.800000011920929);B7(a.mF,b,d);}h=a.oJ;a.oJ=h+1|0;B7(d,h,B9(c));}b=a.kf.getError();if(!b)return h;c=new Q;i=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jA;j=f.data;h=d.jz;g=j.length;if(h>=0&&h<=(g-0|0)){e.jB=K(f.data,0,h);c.jC=1;c.jD=1;c.jE=e;B(c);}c=new I;Y(c);B(c);},
AQv=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.linkProgram(d);b=a.kf.getError();if(!b)return;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=0&&f<=(g-0|
0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
Xl=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jH;e=a.lS;if(!b)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.shaderSource(e,Bz(c));b=a.kf.getError();if(!b)return;c=new Q;i=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jA;j=f.data;g=d.jz;h=j.length;if(g>=0&&g<=
(h-0|0)){e.jB=K(f.data,0,g);c.jC=1;c.jD=1;c.jE=e;B(c);}c=new I;Y(c);B(c);},
YM=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.jH;f=d;e.texParameterf(b,c,f);b=a.kf.getError();if(!b)return;e=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);e.jC=1;e.jD=1;e.jE=i;B(e);}e=new I;Y(e);B(e);},
ZQ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.mF;e=a.no;if(!e)d=!d.j8?null:d.j5;else{f=d.j3;g=Bg(Bd(Z(U(e),D(2135587861, 2654435769)),d.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.j7;}}d=g<0?null:d.j4.data[g];}d=d;if(!b)d=!d.j8?null:d.j5;else{f=d.j3;e=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.j7;}}d=e<0?null:d.j4.data[e];}BC();i=d===null?null:d[Bo]===true?d:d.kb;a.jH.uniform1i(i,c);b=
a.kf.getError();if(!b)return;d=new Q;i=Be(b,4);j=new J;j.jA=G(16);F(j,j.jz,A(138));L(j,j.jz,b,10);F(j,j.jz,A(61));b=j.jz;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.jA;l=f.data;c=j.jz;e=l.length;if(c>=0&&c<=(e-0|0)){k.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=k;B(d);}d=new I;Y(d);B(d);},
ASc=(a,b)=>{let c,d,e,f,g,h,i,j;a.no=b;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.useProgram(d);b=a.kf.getError();if(!b)return;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=0&&f<=
(g-0|0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
AMz=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.jH.vertexAttribPointer(b,c,d,!!e,f,g);b=a.kf.getError();if(!b)return;h=new Q;i=Be(b,4);j=new J;j.jA=G(16);F(j,j.jz,A(138));L(j,j.jz,b,10);F(j,j.jz,A(61));b=j.jz;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.jA;m=l.data;c=j.jz;d=m.length;if(c>=0&&c<=(d-0|0)){k.jB=K(l.data,0,c);h.jC=1;h.jD=1;h.jE=k;B(h);}h=new I;Y(h);B(h);};
function P1(){let a=this;C.call(a);a.uu=0;a.tN=0;a.tU=0;a.xn=null;a.yc=null;a.ot=null;a.xc=A(139);}
let AHd=(a,b,c,d,e)=>{a.xc=A(139);if(b===Nd)a.ot=I5;else if(b===MB)a.ot=I5;else if(b===MJ)a.ot=Jm;else if(b===Mm)a.ot=Jm;else if(b!==G$)a.ot=RX;else a.ot=Li;b=a.ot;if(b===I5)K_(a,A(140),c);else if(b===Li)K_(a,A(141),c);else if(b===Jm)K_(a,A(142),c);else{a.uu=(-1);a.tN=(-1);a.tU=(-1);d=A(62);e=A(62);}a.xn=d;a.yc=e;},
ALh=(a,b,c,d)=>{let e=new P1();AHd(e,a,b,c,d);return e;},
K_=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=P_(Ir(b,0),c);if(!Qv(d)){e=C3;b=new J;b.jA=G(16);F(b,b.jz,A(143));F(b,b.jz,c);c=new H;f=b.jA;g=f.data;h=b.jz;i=g.length;if(h>=0&&h<=(i-0|0)){c.jB=K(f.data,0,h);if(e.oQ>=2){if(BY===null){b=new C1;e=new Cx;By(e);e.lk=BM(32);EF(b);b.lI=e;e=new J;D1(e);b.ln=e;b.lm=G(32);b.lq=0;b.lr=Cp;BY=b;}b=new J;b.jA=G(16);B0(b,b.jz,A(139));B0(b,b.jz,A(75));B0(b,b.jz,c);c=new H;f=b.jA;g=f.data;h=b.jz;i=g.length;if(h>=0&&h<=(i-0|0)){c.jB=K(f.data,0,h);BZ(Bz(c));BZ("\n");}else{b
=new I;b.jC=1;b.jD=1;B(b);}}a.uu=2;a.tN=0;a.tU=0;break a;}b=new I;b.jC=1;b.jD=1;B(b);}b=d.nC;j=b.n7;if(!j){b=new BN;b.jC=1;b.jD=1;Bj(b);B(b);}k=Ci(1,b.pf);if(k>=0){b=new I;c=new J;By(c);c.jA=G(16);L(c,c.jz,1,10);e=new H;f=c.jA;g=f.data;h=c.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);b.jC=1;b.jD=1;b.jE=e;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}f=b.lp.data;if(f[2]<0)e=null;else{b=b.pA;if(!j){b=new BN;b.jC=1;b.jD=1;Bj(b);B(b);}if(k>=0){b=new I;c=new J;By(c);c.jA=G(16);L(c,c.jz,1,10);e=new H;f=c.jA;g=f.data;h
=c.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);b.jC=1;b.jD=1;b.jE=e;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}h=f[2];if(!j){b=new BN;b.jC=1;b.jD=1;Bj(b);B(b);}if(k>=0){b=new I;c=new J;By(c);c.jA=G(16);L(c,c.jz,1,10);e=new H;f=c.jA;g=f.data;h=c.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);b.jC=1;b.jD=1;b.jE=e;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}e=Cm(b,h,f[3]);}f=(J7(Ir(A(144),0),e,0)).data;b=f[0];b:{try{h=KJ(b);break b;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}d=C3;e=new J;e.jA
=G(16);F(e,e.jz,A(145));F(e,e.jz,b);F(e,e.jz,A(146));L(e,e.jz,2,10);l=new H;g=e.jA;m=g.data;i=e.jz;j=m.length;if(i>=0&&i<=(j-0|0)){l.jB=K(g.data,0,i);if(d.oQ>=1){if(Dd===null){b=new Ft;e=new Cx;EF(e);e.lk=BM(32);FP(b,e);b.ln=Ez();b.lm=G(32);b.lq=0;b.lr=Cp;Dd=b;}b=new J;b.jA=G(16);B2(b,b.jz,Cg(A(147)));B2(b,b.jz,Cg(A(75)));B2(b,b.jz,Cg(l));c=new H;g=b.jA;m=g.data;i=b.jz;j=m.length;if(i>=0&&i<=(j-0|0)){c.jB=K(g.data,0,i);Dt(Bz(c));Dt("\n");}else{b=new I;b.jC=1;b.jD=1;B(b);}}h=2;}else{b=new I;b.jC=1;b.jD=1;B(b);}}a.uu
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=KJ(b);break c;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}d=C3;e=new J;e.jA=G(16);F(e,e.jz,A(145));F(e,e.jz,b);F(e,e.jz,A(146));L(e,e.jz,0,10);l=new H;g=e.jA;m=g.data;j=e.jz;k=m.length;if(j>=0&&j<=(k-0|0)){l.jB=K(g.data,0,j);if(d.oQ>=1){if(Dd===null){b=new Ft;e=new Cx;EF(e);e.lk=BM(32);FP(b,e);b.ln=Ez();b.lm=G(32);b.lq=0;b.lr=Cp;Dd=b;}b=new J;b.jA=G(16);B2(b,b.jz,Cg(A(147)));B2(b,b.jz,Cg(A(75)));B2(b,b.jz,Cg(l));c=new H;g=b.jA;m=g.data;j=b.jz;k
=m.length;if(j>=0&&j<=(k-0|0)){c.jB=K(g.data,0,j);Dt(Bz(c));Dt("\n");}else{b=new I;b.jC=1;b.jD=1;B(b);}}i=0;}else{b=new I;b.jC=1;b.jD=1;B(b);}}}a.tN=i;if(n<3)h=0;else{b=f[2];d:{try{h=KJ(b);break d;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}e=C3;d=new J;d.jA=G(16);F(d,d.jz,A(145));F(d,d.jz,b);F(d,d.jz,A(146));L(d,d.jz,0,10);b=new H;g=d.jA;f=g.data;h=d.jz;i=f.length;if(h>=0&&h<=(i-0|0)){b.jB=K(g.data,0,h);if(e.oQ>=1){if(Dd===null){e=new Ft;d=new Cx;EF(d);d.lk=BM(32);FP(e,d);e.ln=Ez();e.lm
=G(32);e.lq=0;e.lr=Cp;Dd=e;}e=new J;e.jA=G(16);B2(e,e.jz,Cg(A(147)));B2(e,e.jz,Cg(A(75)));B2(e,e.jz,Cg(b));b=new H;f=e.jA;g=f.data;i=e.jz;j=g.length;if(i>=0&&i<=(j-0|0)){b.jB=K(f.data,0,i);Dt(Bz(b));Dt("\n");}else{b=new I;b.jC=1;b.jD=1;B(b);}}h=0;}else{b=new I;b.jC=1;b.jD=1;B(b);}}}a.tU=h;}};
let EJ=E(BI);
let Nd=null,MJ=null,AAi=null,Mm=null,G$=null,MB=null,ADW=null;
let AAY=()=>{let b,c,d,e,f,g;b=new EJ;b.jR=A(7);b.jK=0;Nd=b;c=new EJ;c.jR=A(148);c.jK=1;MJ=c;d=new EJ;d.jR=A(149);d.jK=2;AAi=d;e=new EJ;e.jR=A(150);e.jK=3;Mm=e;f=new EJ;f.jR=A(151);f.jK=4;G$=f;g=new EJ;g.jR=A(152);g.jK=5;MB=g;ADW=S(EJ,[b,c,d,e,f,g]);};
let Ti=E(0);
function Mi(){C.call(this);this.xq=null;}
let ABO=a=>{return;};
let Ve=E(GI);
let AQ3=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jH;e=a.mN;if(!c)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.bindTexture(b,e);b=a.jH.getError();if(!b)return;d=new Q;i=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jA;k=f.data;c=e.jz;g=k.length;if(c>=0&&
c<=(g-0|0)){j.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=j;B(d);}d=new I;Y(d);B(d);},
AAF=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.clear(b);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
ABD=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.jH.clearColor(b,c,d,e);f=a.jH.getError();if(!f)return;g=new Q;h=Be(f,4);i=new J;i.jA=G(16);F(i,i.jz,A(138));L(i,i.jz,f,10);F(i,i.jz,A(61));f=i.jz;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.jA;l=k.data;m=i.jz;n=l.length;if(m>=0&&m<=(n-0|0)){j.jB=K(k.data,0,m);g.jC=1;g.jD=1;g.jE=j;B(g);}g=new I;Y(g);B(g);},
AIh=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.depthMask(!!b);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
ARN=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.disable(b);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AFG=(a,b,c,d)=>{let e,f,g,h,i,j;a.jH.drawArrays(b,c,d);b=a.jH.getError();if(!b)return;e=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;d=j.length;if(c>=0&&c<=(d-0|0)){h.jB=K(i.data,0,c);e.jC=1;e.jD=1;e.jE=h;B(e);}e=new I;Y(e);B(e);},
ARd=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.jH;g=e.jO;f.drawElements(b,c,d,g);b=a.jH.getError();if(!b)return;e=new Q;h=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.jA;k=j.data;c=f.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);e.jC=1;e.jD=1;e.jE=i;B(e);}e=new I;Y(e);B(e);},
Y7=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.enable(b);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AG3=(a,b)=>{return T(a.jH.getParameter(b));},
AJO=(a,b,c)=>{let d,e,f,g,h,i,j;a.jH.pixelStorei(b,c);b=a.jH.getError();if(!b)return;d=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=g;B(d);}d=new I;Y(d);B(d);},
ACT=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;Md(a,b,c,d,e,f,g,h,i,j);b=a.jH.getError();if(!b)return;j=new Q;k=Be(b,4);l=new J;l.jA=G(16);F(l,l.jz,A(138));L(l,l.jz,b,10);F(l,l.jz,A(61));b=l.jz;if(k===null)k=A(2);F(l,b,k);m=new H;n=l.jA;o=n.data;c=l.jz;d=o.length;if(c>=0&&c<=(d-0|0)){m.jB=K(n.data,0,c);j.jC=1;j.jD=1;j.jE=m;B(j);}j=new I;Y(j);B(j);},
ACa=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.jH.texParameterf(b,c,d);b=a.jH.getError();if(!b)return;e=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;k=j.length;if(c>=0&&c<=(k-0|0)){h.jB=K(i.data,0,c);e.jC=1;e.jD=1;e.jE=h;B(e);}e=new I;Y(e);B(e);},
ARp=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jH.viewport(b,c,d,e);b=a.jH.getError();if(!b)return;f=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;Y(f);B(f);},
Xi=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();h=d===null?null:d[Bo]===true?d:d.kb;d=a.lS;if(!c)d=!d.j8?null:d.j5;else{e=d.j3;b=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),d.j9));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.j7;}}d=b<0?null:d.j4.data[b];}i=d===null?null:d[Bo]===true
?d:d.kb;a.jH.attachShader(h,i);b=a.jH.getError();if(!b)return;d=new Q;j=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.jA;k=e.data;c=h.jz;f=k.length;if(c>=0&&c<=(f-0|0)){i.jB=K(e.data,0,c);d.jC=1;d.jD=1;d.jE=i;B(d);}d=new I;Y(d);B(d);},
V_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.jH;e=a.mB;if(!c)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(c),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.bindBuffer(b,e);b=a.jH.getError();if(!b)return;d=new Q;i=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.jA;k=f.data;c=e.jz;g=k.length;if(c>=0&&c<=(g-
0|0)){j.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=j;B(d);}d=new I;Y(d);B(d);},
V9=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jH.blendFuncSeparate(b,c,d,e);b=a.jH.getError();if(!b)return;f=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;Y(f);B(f);},
AGw=(a,b,c,d,e)=>{let f,g,h,i,j;KW(a,b,c,d,e);b=a.jH.getError();if(!b)return;d=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;e=j.length;if(c>=0&&c<=(e-0|0)){h.jB=K(i.data,0,c);d.jC=1;d.jD=1;d.jE=h;B(d);}d=new I;Y(d);B(d);},
AEe=(a,b,c,d,e)=>{let f,g,h,i,j;KV(a,b,c,d,e);b=a.jH.getError();if(!b)return;e=new Q;f=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.jA;j=i.data;c=g.jz;d=j.length;if(c>=0&&c<=(d-0|0)){h.jB=K(i.data,0,c);e.jC=1;e.jD=1;e.jE=h;B(e);}e=new I;Y(e);B(e);},
ARZ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lS;if(!b)c=!c.j8?null:c.j5;else{d=c.j3;e=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),c.j9));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.j7;}}c=e<0?null:c.j4.data[e];}BC();g=c===null?null:c[Bo]===true?c:c.kb;a.jH.compileShader(g);b=a.jH.getError();if(!b)return;c=new Q;h=Be(b,4);g=new J;g.jA=G(16);F(g,g.jz,A(138));L(g,g.jz,b,10);F(g,g.jz,A(61));b=g.jz;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.jA;j=d.data;e=g.jz;f=j.length;if(e>=0&&e<=(f-0|0))
{i.jB=K(d.data,0,e);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
AKh=a=>{let b,c,d,e,f,g,h,i,j;b=a.jH.createProgram();c=a.oD;a.oD=c+1|0;B7(a.lc,c,B9(b));d=a.jH.getError();if(!d)return c;b=new Q;e=Be(d,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,d,10);F(f,f.jz,A(61));d=f.jz;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);b.jC=1;b.jD=1;b.jE=g;B(b);}b=new I;Y(b);B(b);},
ARC=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH.createShader(b);d=a.ox;a.ox=d+1|0;B7(a.lS,d,B9(c));b=a.jH.getError();if(!b)return d;c=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;d=f.jz;j=i.length;if(d>=0&&d<=(j-0|0)){g.jB=K(h.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;Y(c);B(c);},
AKb=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.disableVertexAttribArray(b);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AEw=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.jH.drawElements(b,c,d,e);b=a.jH.getError();if(!b)return;f=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;Y(f);B(f);},
ARO=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.enableVertexAttribArray(b);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AJb=(a,b)=>{let c,d,e,f,g,h,i,j;a.jH.generateMipmap(b);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
AGA=(a,b,c,d,e)=>{let f,g,h,i,j;f=J8(a,b,c,d,e);b=a.jH.getError();if(!b)return f;d=new Q;g=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jA;i=h.data;c=e.jz;j=i.length;if(c>=0&&c<=(j-0|0)){f.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=f;B(d);}d=new I;Y(d);B(d);},
Zt=(a,b,c,d,e)=>{let f,g,h,i,j;f=LB(a,b,c,d,e);b=a.jH.getError();if(!b)return f;d=new Q;g=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.jA;i=h.data;c=e.jz;j=i.length;if(c>=0&&c<=(j-0|0)){f.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=f;B(d);}d=new I;Y(d);B(d);},
AEG=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();h=d===null?null:d[Bo]===true?d:d.kb;b=a.jH.getAttribLocation(h,Bz(c));f=a.jH.getError();if(!f)return b;c=new Q;i=Be(f,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,f,10);F(d,d.jz,A(61));b=d.jz;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=
0&&f<=(g-0|0)){h.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;Y(c);B(c);},
WW=(a,b,c)=>{let d,e,f,g,h,i,j;IY(a,b,c);b=a.jH.getError();if(!b)return;c=new Q;d=Be(b,4);e=new J;e.jA=G(16);F(e,e.jz,A(138));L(e,e.jz,b,10);F(e,e.jz,A(61));b=e.jz;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;Y(c);B(c);},
ACZ=(a,b,c,d)=>{let e,f,g,h,i,j;L4(a,b,c,d);b=a.jH.getError();if(!b)return;d=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=g;B(d);}d=new I;Y(d);B(d);},
AC6=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c=T(c.getProgramInfoLog(d));b=a.jH.getError();if(!b)return c;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f
>=0&&f<=(g-0|0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
Xy=(a,b,c,d)=>{let e,f,g,h,i,j;KB(a,b,c,d);b=a.jH.getError();if(!b)return;d=new Q;e=Be(b,4);f=new J;f.jA=G(16);F(f,f.jz,A(138));L(f,f.jz,b,10);F(f,f.jz,A(61));b=f.jz;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.jA;i=h.data;c=f.jz;j=i.length;if(c>=0&&c<=(j-0|0)){g.jB=K(h.data,0,c);d.jC=1;d.jD=1;d.jE=g;B(d);}d=new I;Y(d);B(d);},
AMG=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH;d=a.lS;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c=T(c.getShaderInfoLog(d));b=a.jH.getError();if(!b)return c;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=
0&&f<=(g-0|0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
AOU=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jH;e=a.lc;if(!b)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;c=d.getUniformLocation(e,Bz(c));if(c===null)h=(-1);else{d=a.mF;if(!b)d=!d.j8?null:d.j5;else{f=d.j3;h=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)
&d.j7;}}d=h<0?null:d.j4.data[h];}d=d;if(d===null){d=Dc(51,0.800000011920929);B7(a.mF,b,d);}h=a.oJ;a.oJ=h+1|0;B7(d,h,B9(c));}b=a.jH.getError();if(!b)return h;c=new Q;i=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jA;j=f.data;h=d.jz;g=j.length;if(h>=0&&h<=(g-0|0)){e.jB=K(f.data,0,h);c.jC=1;c.jD=1;c.jE=e;B(c);}c=new I;Y(c);B(c);},
AHN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.linkProgram(d);b=a.jH.getError();if(!b)return;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=0&&f<=(g-0|
0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
ARb=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.jH;e=a.lS;if(!b)e=!e.j8?null:e.j5;else{f=e.j3;g=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.j7;}}e=g<0?null:e.j4.data[g];}BC();e=e===null?null:e[Bo]===true?e:e.kb;d.shaderSource(e,Bz(c));b=a.jH.getError();if(!b)return;c=new Q;i=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.jA;j=f.data;g=d.jz;h=j.length;if(g>=0&&g
<=(h-0|0)){e.jB=K(f.data,0,g);c.jC=1;c.jD=1;c.jE=e;B(c);}c=new I;Y(c);B(c);},
AOL=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.jH;f=d;e.texParameterf(b,c,f);b=a.jH.getError();if(!b)return;e=new Q;g=Be(b,4);h=new J;h.jA=G(16);F(h,h.jz,A(138));L(h,h.jz,b,10);F(h,h.jz,A(61));b=h.jz;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.jA;k=j.data;c=h.jz;d=k.length;if(c>=0&&c<=(d-0|0)){i.jB=K(j.data,0,c);e.jC=1;e.jD=1;e.jE=i;B(e);}e=new I;Y(e);B(e);},
ARv=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.mF;e=a.no;if(!e)d=!d.j8?null:d.j5;else{f=d.j3;g=Bg(Bd(Z(U(e),D(2135587861, 2654435769)),d.j9));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.j7;}}d=g<0?null:d.j4.data[g];}d=d;if(!b)d=!d.j8?null:d.j5;else{f=d.j3;e=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.j7;}}d=e<0?null:d.j4.data[e];}BC();i=d===null?null:d[Bo]===true?d:d.kb;a.jH.uniform1i(i,c);b
=a.jH.getError();if(!b)return;d=new Q;i=Be(b,4);j=new J;j.jA=G(16);F(j,j.jz,A(138));L(j,j.jz,b,10);F(j,j.jz,A(61));b=j.jz;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.jA;l=f.data;c=j.jz;e=l.length;if(c>=0&&c<=(e-0|0)){k.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=k;B(d);}d=new I;Y(d);B(d);},
XA=(a,b)=>{let c,d,e,f,g,h,i,j;a.no=b;c=a.jH;d=a.lc;if(!b)d=!d.j8?null:d.j5;else{e=d.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),d.j9));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.j7;}}d=f<0?null:d.j4.data[f];}BC();d=d===null?null:d[Bo]===true?d:d.kb;c.useProgram(d);b=a.jH.getError();if(!b)return;c=new Q;h=Be(b,4);d=new J;d.jA=G(16);F(d,d.jz,A(138));L(d,d.jz,b,10);F(d,d.jz,A(61));b=d.jz;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.jA;j=e.data;f=d.jz;g=j.length;if(f>=0&&f<=
(g-0|0)){i.jB=K(e.data,0,f);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;Y(c);B(c);},
AAm=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.jH.vertexAttribPointer(b,c,d,!!e,f,g);b=a.jH.getError();if(!b)return;h=new Q;i=Be(b,4);j=new J;j.jA=G(16);F(j,j.jz,A(138));L(j,j.jz,b,10);F(j,j.jz,A(61));b=j.jz;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.jA;m=l.data;c=j.jz;d=m.length;if(c>=0&&c<=(d-0|0)){k.jB=K(l.data,0,c);h.jC=1;h.jD=1;h.jE=k;B(h);}h=new I;Y(h);B(h);};
function To(){let a=this;C.call(a);a.nI=0;a.j3=null;a.j4=null;a.j5=null;a.j8=0;a.vt=0.0;a.sA=0;a.j9=0;a.j7=0;}
let AD_=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.vt=c;d=Jd(b,c);a.sA=d*c|0;b=d-1|0;a.j7=b;a.j9=EX(U(b));a.j3=W(d);a.j4=R(C,d);return;}e=new Bn;f=new J;f.jA=G(16);F(f,f.jz,A(63));Hv(f,f.jz,c);g=new H;h=f.jA;i=h.data;d=f.jz;j=i.length;if(d>=0&&d<=(j-0|0)){g.jB=K(h.data,0,d);e.jC=1;e.jD=1;e.jE=g;B(e);}f=new I;f.jC=1;f.jD=1;B(f);},
Dc=(a,b)=>{let c=new To();AD_(c,a,b);return c;},
B7=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.j5;a.j5=c;if(!a.j8){a.j8=1;a.nI=a.nI+1|0;}return d;}e=a.j3;f=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),a.j9));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.j7;}}if(f>=0){e=a.j4.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.j4.data[f]=c;b=a.nI+1|0;a.nI=b;if(b>=a.sA)ANS(a,g.length<<1);return null;},
GB=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.j8)return null;a.j8=0;c=a.j5;a.j5=null;a.nI=a.nI-1|0;return c;}d=a.j3;e=Z(U(b),D(2135587861, 2654435769));f=a.j9;g=Bg(Bd(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.j7;}}if(g<0)return null;j=a.j4.data;k=j[g];l=a.j7;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bg(Bd(Z(U(n),D(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.nI=a.nI-1|0;return k;},
ARH=(a,b,c)=>{let d,e,f,g;a:{d=a.j4;if(b===null){if(a.j8&&a.j5===null)return 1;d=d.data;e=a.j3;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.j5)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.j8){g=a.j5;if(b===g?1:g instanceof Fh&&g.mZ==b.mZ?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Fh&&g.mZ==b.mZ?1:0)return 1;f=f+(-1)|0;}}return 0;},
ANS=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.j3.data.length;a.sA=b*a.vt|0;d=b-1|0;a.j7=d;d=EX(U(d));a.j9=d;e=a.j3;f=a.j4;g=W(b);a.j3=g;h=R(C,b);a.j4=h;if(a.nI>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bg(Bd(Z(U(k),D(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.j7;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function RE(){let a=this;C.call(a);a.m0=0;a.n$=null;a.pI=0;a.w4=0.0;a.sR=0;a.pi=0;a.n1=0;}
let ACe=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.w4=c;d=Jd(b,c);a.sR=d*c|0;b=d-1|0;a.n1=b;a.pi=EX(U(b));a.n$=W(d);return;}e=new Bn;f=new J;f.jA=G(16);F(f,f.jz,A(63));Hv(f,f.jz,c);g=new H;h=f.jA;i=h.data;d=f.jz;j=i.length;if(d>=0&&d<=(j-0|0)){g.jB=K(h.data,0,d);e.jC=1;e.jD=1;e.jE=g;B(e);}f=new I;f.jC=1;f.jD=1;B(f);},
Ot=(a,b)=>{let c=new RE();ACe(c,a,b);return c;},
ABq=(a,b)=>{let c,d,e,f;if(!b){if(a.pI)return 0;a.pI=1;a.m0=a.m0+1|0;return 1;}c=a.n$;d=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),a.pi));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.n1;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.m0+1|0;a.m0=b;if(b>=a.sR)ABB(a,e.length<<1);return 1;},
API=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.pI)return 0;a.pI=0;a.m0=a.m0-1|0;return 1;}c=a.n$;d=Z(U(b),D(2135587861, 2654435769));e=a.pi;f=Bg(Bd(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.n1;}}if(f<0)return 0;h=a.n1;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bg(Bd(Z(U(b),D(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.m0=a.m0-1|0;return 1;},
ABB=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.n$.data.length;a.sR=b*a.w4|0;d=b-1|0;a.n1=d;d=EX(U(d));a.pi=d;e=a.n$;f=W(b);a.n$=f;if(a.m0>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bg(Bd(Z(U(h),D(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.n1;}f[i]=h;}g=g+1|0;}}}};
let Uc=E(0);
function LN(){C.call(this);this.ry=null;}
let Xb=a=>{let b;b=a.ry;b.rN=1;T3(Bz(b.tx));},
ABi=a=>{let b;b=a.ry;b.rN=1;T3(Bz(b.tx));},
WN=a=>{a.ry.rN=0;};
let Vx=E(0);
function VF(){let a=this;C.call(a);a.pR=null;a.ua=null;a.yR=null;}
let I0=0;
let APq=a=>{let b,c,d,e,f,g,h,i,$$je;b=Z1();a.pR=b;c=AJ$(b);a.ua=c;b=new RM;d=a.pR;e=new Bt;e.kr=0;e.jQ=R(C,16);b.jU=e;b.kp=2147483647;b.xK=d;b.xX=c;a.yR=b;b=C3.rf;FD(b);a:{try{BB(b,a);DB(b);break a;}catch($$e){$$je=Bb($$e);d=$$je;}DB(b);B(d);}if(a.pR.state!=='running'?1:0){b=new J2;b.yP=a;AAj(a.pR,B4(b,"unlockFunction"));}else{if(!I0&&C3.oQ>=2){if(BY===null){c=new C1;e=new Cx;EF(e);e.lk=BM(32);FP(c,e);c.ln=Ez();c.lm=G(32);c.lq=0;c.lr=Cp;BY=c;}c=new J;c.jA=G(16);B2(c,c.jz,Cg(A(153)));B2(c,c.jz,Cg(A(75)));B2(c,
c.jz,Cg(A(154)));b=new H;f=c.jA;g=f.data;h=c.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);BZ(Bz(b));BZ("\n");}else{b=new I;b.jC=1;b.jD=1;B(b);}}I0=1;}},
APM=()=>{let a=new VF();APq(a);return a;},
ANL=a=>{a.ua.disconnect(a.pR.destination);},
AJn=a=>{a.ua.connect(a.pR.destination);},
AAj=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
Z1=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
AJ$=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function NY(){Dz.call(this);this.xl=null;}
let T9=E(BD);
function Cy(){De.call(this);this.j_=null;}
let I=E(Bx);
let Z9=a=>{a.jC=1;a.jD=1;},
FS=()=>{let a=new I();Z9(a);return a;},
AFy=(a,b)=>{a.jC=1;a.jD=1;a.jE=b;},
Ub=a=>{let b=new I();AFy(b,a);return b;};
let EU=E(0);
let PC=E(0);
let Rf=E(0);
let Q5=E(0);
let SC=E(0);
let Vu=E(0);
let Tz=E(0);
let Pg=E(0);
let Ky=E(0);
let Ok=E();
let AKI=(a,b)=>{b=a.S(b);BC();return b===null?null:b instanceof Fz()&&b instanceof Ew?(b[Bo]===true?b:b.kb):b;},
AOa=(a,b,c)=>{a.eS(T(b),Dn(c,"handleEvent"));},
ANq=(a,b,c)=>{a.eT(T(b),Dn(c,"handleEvent"));},
AKu=(a,b,c,d)=>{a.eU(T(b),Dn(c,"handleEvent"),d?1:0);},
AQg=(a,b)=>{return !!a.eV(b);},
AAn=a=>{return a.eW();},
WM=(a,b,c,d)=>{a.eX(T(b),Dn(c,"handleEvent"),d?1:0);};
let Ln=E();
function Jt(){let a=this;Ln.call(a);a.sE=0;a.oC=null;a.vS=0.0;a.sS=0;a.q9=0;a.qG=0;a.w6=0;}
let VS=null,Qd=null;
let Kq=(a,b)=>{let c,d,e;a.qG=(-1);if(b<0){c=new Bn;c.jC=1;c.jD=1;B(c);}a.sE=0;if(!b)b=1;d=R(Io,b);e=d.data;a.oC=d;b=e.length;a.q9=b;a.vS=0.75;a.sS=b*0.75|0;},
ATV=a=>{let b=new Jt();Kq(b,a);return b;},
Do=(a,b,c)=>{let d,e,f,g,h,i,j;FD(a);try{if(b!==null&&c!==null){a:{if(!b.lh){d=0;while(true){if(d>=b.jB.length)break a;b.lh=(31*b.lh|0)+b.jB.charCodeAt(d)|0;d=d+1|0;}}}e=b.lh&2147483647;f=a.oC.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.wf;if(!b.lh){i=0;while(true){if(i>=b.jB.length)break b;b.lh=(31*b.lh|0)+b.jB.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.lh&&h.mw.cL(b)?1:0)break;h=h.r5;}if(h!==null){j=h.l$;h.l$=c;return j;}a.w6=a.w6+1|0;d=a.sE+1|0;a.sE=d;if(d>a.sS){AIg(a);g=e%a.oC.data.length|0;}if(g<a.q9)a.q9
=g;if(g>a.qG)a.qG=g;c:{j=new Io;j.mw=b;j.l$=c;if(!b.lh){d=0;while(true){if(d>=b.jB.length)break c;b.lh=(31*b.lh|0)+b.jB.charCodeAt(d)|0;d=d+1|0;}}}j.wf=b.lh;f=a.oC.data;j.r5=f[g];f[g]=j;return null;}b=new Db;b.jC=1;b.jD=1;B(b);}finally{DB(a);}},
AIg=a=>{let b,c,d,e,f,g,h,i,j;b=(a.oC.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=R(Io,b);e=d.data;f=a.qG+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.q9)break;h=a.oC.data[f];while(h!==null){i=(h.mw.cS()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.r5;h.r5=e[i];e[i]=h;h=j;}}a.q9=g;a.qG=c;a.oC=d;a.sS=e.length*a.vS|0;},
AV5=()=>{VS=new JZ;Qd=new JY;};
function Mv(){Jt.call(this);this.yH=null;}
let AEU=E();
let Gs=E(BI);
let Jm=null,I5=null,Li=null,RX=null,AL_=null;
let AIp=()=>{let b,c,d,e;b=new Gs;b.jR=A(155);b.jK=0;Jm=b;c=new Gs;c.jR=A(156);c.jK=1;I5=c;d=new Gs;d.jR=A(151);d.jK=2;Li=d;e=new Gs;e.jR=A(157);e.jK=3;RX=e;AL_=S(Gs,[b,c,d,e]);};
let DA=E();
let AB$=E(DA);
let ABk=E(DA);
let AGG=E(DA);
let AJL=E(DA);
let AFc=E(DA);
function K6(){C.call(this);this.yx=null;}
let AF$=(a,b)=>{b.preventDefault();};
function K7(){C.call(this);this.y5=null;}
let ARe=(a,b)=>{b.preventDefault();};
function K5(){let a=this;C.call(a);a.uV=null;a.uM=null;a.u9=null;}
let AI3=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bt;e.kr=1;e.jQ=R(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=T(g.name);i=Fb(h,46,h.jB.length-1|0);b=i==(-1)?A(62):Cm(h,i+1|0,h.jB.length);j=b.jB.toLowerCase();if(j!==b.jB)b=S8(j);if(Zy(b))j=Fn;else{if(b===A(158))k=1;else if(!(A(158) instanceof H))k=0;else{j=A(158);k=b.jB!==j.jB?0:1;}b:{if(!k){if(b===A(159))k=1;else if(!(A(159) instanceof H))k=0;else{j=A(159);k=b.jB!==j.jB?0:1;}if(!k){if(b===A(160))k
=1;else if(!(A(160) instanceof H))k=0;else{j=A(160);k=b.jB!==j.jB?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?E7:!AFt(b)?Fc:Fw;}l=new FileReader();b=new Me;b.r$=a;b.s9=j;b.uv=h;b.rn=e;b.uC=d;l.addEventListener("load",B4(b,"handleEvent"));if(j!==Fc&&j!==E7){if(j===Fn)l.readAsDataURL(g);else if(j===Fw)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
ALz=(a,b)=>{AI3(a,b);};
function RM(){let a=this;De.call(a);a.xK=null;a.xX=null;}
let Ul=E(0);
function J2(){C.call(this);this.yP=null;}
let ACs=a=>{let b,c,d,e,f,g;if(!I0&&C3.oQ>=2){if(BY===null){b=new C1;U5(b,AOZ(32),0);BY=b;}b=new J;b.jA=G(16);D2(b,b.jz,A(153));D2(b,b.jz,A(75));D2(b,b.jz,A(154));c=new H;d=b.jA;e=d.data;f=b.jz;g=e.length;if(f>=0&&f<=(g-0|0)){c.jB=K(d.data,0,f);BZ(Bz(c));BZ("\n");}else B(FS());}I0=1;};
let AA5=E(DA);
function QZ(){let a=this;C.call(a);a.kA=null;a.lH=0;a.sW=null;a.uT=0;a.pL=0;a.ob=0;a.l6=0;a.vV=null;}
let J7=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new Kk;d.lo=R(C,10);e=P_(a,b);f=0;g=0;if(!b.jB.length){h=R(H,1);h.data[0]=A(62);return h;}a:{while(true){if(!Qv(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.nC;if(!j.n7){b=new BN;b.jC=1;b.jD=1;Bj(b);B(b);}if(0>=j.pf){b=new I;d=new J;By(d);d.jA=G(16);L(d,d.jz,0,10);e=new H;h=d.jA;k=h.data;f=d.jz;g=k.length;if(f>=0&&f<=(g-0|0)){e.jB=K(h.data,0,f);b.jC=1;b.jD=1;b.jE=e;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}j=Cm(b,g,j.lp.data[0]);GS(d,d.kF+1|0);h=d.lo.data;f=d.kF;d.kF=f+1|0;h[f]
=j;d.me=d.me+1|0;j=e.nC;if(!j.n7)break;if(0>=j.pf){b=new I;d=new J;By(d);d.jA=G(16);L(d,d.jz,0,10);e=new H;h=d.jA;k=h.data;f=d.jz;g=k.length;if(f>=0&&f<=(g-0|0)){e.jB=K(h.data,0,f);b.jC=1;b.jD=1;b.jE=e;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}g=j.lp.data[1];f=i;}b=new BN;b.jC=1;b.jD=1;Bj(b);B(b);}b:{b=Cm(b,g,b.jB.length);GS(d,d.kF+1|0);h=d.lo.data;i=d.kF;d.kF=i+1|0;h[i]=b;d.me=d.me+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.kF)break;if(d.lo.data[f].jB.length)break b;TX(d,f);}b=new I;b.jC
=1;b.jD=1;B(b);}}if(f<0)f=0;return ACF(d,R(H,f));},
Ir=(b,c)=>{let d;if(b===null){b=new Db;b.jC=1;b.jD=1;b.jE=A(161);B(b);}if(c&&(c|255)!=255){b=new Bn;b.jC=1;b.jD=1;b.jE=A(62);B(b);}O=1;d=new QZ;d.sW=R(Dm,10);d.pL=(-1);d.ob=(-1);d.l6=(-1);return ADo(d,b,c);},
ADo=(a,b,c)=>{let d,e,f;a.kA=AC1(b,c);a.lH=c;b=VM(a,(-1),c,null);a.vV=b;d=a.kA;if(!d.k_&&!d.jX&&d.jV==d.lQ&&!(d.kJ===null?0:1)?1:0){if(a.uT)b.e6();return a;}b=new Cf;e=d.k6;f=d.mA;b.jC=1;b.jD=1;b.kg=(-1);b.k$=A(62);b.k5=e;b.kg=f;B(b);},
AQE=(a,b)=>{let c,d,e,f,g,h;c=new CD;d=a.lH;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bh;g.jS=W(64);c.jW=g;g=new Bh;g.jS=W(2);c.jY=g;c.rW=e;c.sG=f;while(true){h=a.kA;d=h.k_;if(!d&&!h.jX&&h.jV==h.lQ&&!(h.kJ===null?0:1)?1:0)break;f=!d&&!h.jX&&h.jV==h.lQ&&!(h.kJ===null?0:1)?1:0;if(!(!f&&!(h.kJ===null?0:1)&&(d<0?0:1)?1:0))break;f=h.jX;if(f&&f!=(-536870788)&&f!=(-536870871))break;Bv(h);CY(c,h.n0);g=a.kA;if(g.k_!=(-536870788))continue;Bv(g);}g=LF(a,c);g.e$(b);return g;},
VM=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new Kk;e.lo=R(C,10);f=a.lH;g=0;if(c!=f)a.lH=c;a:{switch(b){case -1073741784:h=new Rw;i=a.l6+1|0;a.l6=i;DQ();c=O;O=c+1|0;d=new Ba;d.jA=G(20);h.jT=(L(d,d.jz,c,10)).T();h.lw=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PU;i=a.l6+1|0;a.l6=i;DQ();c=O;O=c+1|0;d=new Ba;d.jA=G(20);h.jT=(L(d,d.jz,c,10)).T();h.lw=i;break a;case -33554392:h=new Sd;i=a.l6+1|0;a.l6=i;DQ();c=O;O=c+1|0;d=new Ba;d.jA=G(20);h.jT=(L(d,d.jz,c,10)).T();h.lw=i;break a;default:i
=a.pL+1|0;a.pL=i;if(d!==null){h=new Dm;DQ();c=O;O=c+1|0;d=new Ba;d.jA=G(20);h.jT=(L(d,d.jz,c,10)).T();h.lw=i;}else{h=new Gl;DQ();j=O;O=j+1|0;d=new Ba;d.jA=G(20);h.jT=(L(d,d.jz,j,10)).T();h.lw=0;g=1;}c=a.pL;if(c<=(-1))break a;if(c>=10)break a;a.sW.data[c]=h;break a;}h=new VG;DQ();j=O;O=j+1|0;d=new Ba;d.jA=G(20);h.jT=(L(d,d.jz,j,10)).T();h.lw=(-1);}while(true){k=a.kA;l=k.k_;j=!l&&!k.jX&&k.jV==k.lQ&&!(k.kJ===null?0:1)?1:0;j=!j&&!(k.kJ===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.jX==(-536870788))k=AQE(a,h);else if(l==(-536870788))
{k=new E3;j=O;O=j+1|0;d=new Ba;d.jA=G(20);k.jT=(L(d,d.jz,j,10)).T();k.jJ=h;k.ko=1;k.kW=1;k.ko=0;Bv(a.kA);}else{k=Pr(a,h);d=a.kA;if(d.k_==(-536870788))Bv(d);}if(k!==null){GS(e,e.kF+1|0);m=e.lo.data;l=e.kF;e.kF=l+1|0;m[l]=k;e.me=e.me+1|0;}k=a.kA;j=k.k_;if(!j&&!k.jX&&k.jV==k.lQ&&!(k.kJ===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.n0==(-536870788)){k=new E3;c=O;O=c+1|0;d=new Ba;d.jA=G(20);k.jT=(L(d,d.jz,c,10)).T();k.jJ=h;k.ko=1;k.kW=1;k.ko=0;GS(e,e.kF+1|0);m=e.lo.data;j=e.kF;e.kF=j+1|0;m[j]=k;e.me=e.me+
1|0;}if(a.lH!=f&&!g){a.lH=f;k=a.kA;k.kZ=f;k.jX=k.k_;k.ny=k.kJ;j=k.mA;k.jV=j+1|0;k.qz=j;Bv(k);}switch(b){case -1073741784:break;case -536870872:d=new NK;b=O;O=b+1|0;k=new Ba;By(k);k.jA=G(20);d.jT=(L(k,k.jz,b,10)).T();d.lb=e;d.l8=h;d.kY=h.lw;return d;case -268435416:d=new UF;b=O;O=b+1|0;k=new Ba;By(k);k.jA=G(20);d.jT=(L(k,k.jz,b,10)).T();d.lb=e;d.l8=h;d.kY=h.lw;return d;case -134217688:d=new Q3;b=O;O=b+1|0;k=new Ba;By(k);k.jA=G(20);d.jT=(L(k,k.jz,b,10)).T();d.lb=e;d.l8=h;d.kY=h.lw;return d;case -67108824:k=new SA;b
=O;O=b+1|0;d=new Ba;By(d);d.jA=G(20);k.jT=(L(d,d.jz,b,10)).T();k.lb=e;k.l8=h;k.kY=h.lw;return k;case -33554392:d=new Eb;b=O;O=b+1|0;k=new Ba;k.jA=G(20);d.jT=(L(k,k.jz,b,10)).T();d.lb=e;d.l8=h;d.kY=h.lw;return d;default:c=e.kF;switch(c){case 0:d=new E3;b=O;O=b+1|0;e=new Ba;e.jA=G(20);d.jT=(L(e,e.jz,b,10)).T();d.jJ=h;d.ko=1;d.kW=1;d.ko=0;return d;case 1:d=new F$;if(0>=c){d=new I;d.jC=1;d.jD=1;B(d);}e=e.lo.data[0];b=O;O=b+1|0;k=new Ba;k.jA=G(20);d.jT=(L(k,k.jz,b,10)).T();d.mr=e;d.l8=h;d.kY=h.lw;return d;default:}d
=new Cj;b=O;O=b+1|0;k=new Ba;k.jA=G(20);d.jT=(L(k,k.jz,b,10)).T();d.lb=e;d.l8=h;d.kY=h.lw;return d;}k=new JB;j=O;O=j+1|0;d=new Ba;d.jA=G(20);k.jT=(L(d,d.jz,j,10)).T();k.lb=e;k.l8=h;k.kY=h.lw;return k;},
AM3=a=>{let b,c,d,e,f,g,h,i,j,k;b=new OL;b.jA=G(16);while(true){c=a.kA;d=c.k_;if(!d&&!c.jX&&c.jV==c.lQ&&!(c.kJ===null?0:1)?1:0)break;e=!d&&!c.jX&&c.jV==c.lQ&&!(c.kJ===null?0:1)?1:0;if(!(!e&&!(c.kJ===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.ny;d=f===null?0:1;if(!(!d&&!c.jX)){d=f===null?0:1;if(!(!d&&(c.jX<0?0:1))){g=c.jX;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Bv(c);e=c.n0;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.jz;Bf(b,e,e+1|0);b.jA.data[e]=d;}else{h=(ES(e)).data;d=0;e=h.length;g=b.jz;Bf(b,g,g+e|0);i=e+d|0;while(d<i){j=b.jA.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.lH;if(!((e&2)!=2?0:1))return AFR(b);if(!((e&64)!=64?0:1)){c=new Oc;d=O;O=d+1|0;f=new Ba;f.jA=G(20);c.jT=(L(f,f.jz,d,10)).T();c.ko=1;f=new H;h=b.jA;j=h.data;e=b.jz;g=j.length;if(e>=0&&e<=(g-0|0)){f.jB=K(h.data,0,e);c.py=f;c.ko=b.jz;return c;}b=new I;b.jC=1;b.jD=1;B(b);}c=new NF;d=O;O=d+1|0;f=new Ba;f.jA=G(20);c.jT=(L(f,f.jz,d,10)).T();c.ko
=1;f=new J;f.jA=G(16);e=0;while(true){d=Ci(e,b.jz);if(d>=0){b=new H;h=f.jA;j=h.data;g=f.jz;d=j.length;if(g>=0&&g<=(d-0|0)){b.jB=K(h.data,0,g);c.qH=b;c.ko=f.jz;return c;}b=new I;b.jC=1;b.jD=1;B(b);}if(e<0)break;if(d>=0)break;d=b.jA.data[e];if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}d=Cu(BU,d)&65535;if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}i=Cu(BV,d)&65535;g=f.jz;Bf(f,g,g+1|0);f.jA.data[g]=i;e=e+1|0;}b=new I;b.jC=1;b.jD=1;B(b);},
ANj=a=>{let b,c,d,e,f,g,h,i,j;b=W(4);c=(-1);d=(-1);e=a.kA;f=e.k_;if(!(!f&&!e.jX&&e.jV==e.lQ&&!(e.kJ===null?0:1)?1:0)){g=!f&&!e.jX&&e.jV==e.lQ&&!(e.kJ===null?0:1)?1:0;if(!g&&!(e.kJ===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Bv(e);c=e.n0;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.kA;i=e.k_;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Bv(e);e=a.kA;i=e.k_;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Bv(e);e=new Ig;c=O;O=c+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,c,10)).T();e.nU=h;e.qU=3;return e;}e=new Ig;c
=O;O=c+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,c,10)).T();e.nU=h;e.qU=2;return e;}i=a.lH;if(!((i&2)!=2?0:1)){e=new D0;i=b[0];c=O;O=c+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,c,10)).T();e.ko=1;e.lZ=i;return e;}if(!((i&64)!=64?0:1)){e=new JN;i=b[0];c=O;O=c+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,c,10)).T();e.ko=1;e.so=i;e.sK=FY(i);return e;}e=new M6;i=b[0];c=O;O=c+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,c,10)).T();e.ko=1;if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}i=Cu(BU,i)&65535;if
(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}e.rd=Cu(BV,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.kA;g=e.k_;if(!g&&!e.jX&&e.jV==e.lQ&&!(e.kJ===null?0:1)?1:0)break;i=!g&&!e.jX&&e.jV==e.lQ&&!(e.kJ===null?0:1)?1:0;if(!(!i&&!(e.kJ===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;Bv(e);h[c]=e.n0;c=i;}if(c==1){i=h[0];if(!(Zk.et(i)==ANC?0:1))return VD(a,h[0]);}d=a.lH;if(!((d&2)!=2?0:1)){e=new Ff;i=O;O=i+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,i,10)).T();e.oL=1;e.ow=b;e.os=c;return e;}if
((d&64)!=64?0:1){e=new Vy;i=O;O=i+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,i,10)).T();e.oL=1;e.ow=b;e.os=c;return e;}e=new SZ;i=O;O=i+1|0;j=new Ba;j.jA=G(20);e.jT=(L(j,j.jz,i,10)).T();e.oL=1;e.ow=b;e.os=c;return e;},
Pr=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.kA;d=c.k_;e=!d&&!c.jX&&c.jV==c.lQ&&!(c.kJ===null?0:1)?1:0;e=!e&&!(c.kJ===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.ny===null?0:1)&&(c.jX<0?0:1)){if(!((a.lH&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AM3(a):Na(a,b,Vw(a,b));}else{f=ANj(a);g=a.kA;e=g.k_;if(!(!e&&!g.jX&&g.jV==g.lQ&&!(g.kJ===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof Gl))&&e!=(-536870788)){h=!e&&!g.jX&&g.jV==g.lQ&&!(g.kJ===null?0:1)?1:0;if(!(!h&&!(g.kJ===null?0:1)&&(e<0?0:1)?1:0))f
=Na(a,b,f);}}}else if(d!=(-536870871))f=Na(a,b,Vw(a,b));else{if(b instanceof Gl){b=new Cf;g=c.k6;h=c.mA;b.jC=1;b.jD=1;b.kg=(-1);b.k$=A(62);b.k5=g;b.kg=h;B(b);}f=new E3;e=O;O=e+1|0;c=new Ba;c.jA=G(20);f.jT=(L(c,c.jz,e,10)).T();f.jJ=b;f.ko=1;f.kW=1;f.ko=0;}c=a.kA;d=c.k_;e=!d&&!c.jX&&c.jV==c.lQ&&!(c.kJ===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof Gl))&&d!=(-536870788)){g=Pr(a,b);if(f instanceof Dv&&!(f instanceof Fa)&&!(f instanceof Dx)&&!(f instanceof E$)){b=f;if(!g.fo(b.kd)){f=new UT;c=b.kd;i=b.jJ;j
=b.kW;e=O;O=e+1|0;b=new Ba;b.jA=G(20);f.jT=(L(b,b.jz,e,10)).T();f.jJ=i;f.kd=c;f.kW=j;f.kH=c;c.e$(f);}}if((g.fp()&65535)!=43)f.e$(g);else f.e$(g.kd);}else{if(f===null)return null;f.e$(b);}if((f.fp()&65535)!=43)return f;return f.kd;},
Na=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.kA;e=d.k_;if(c!==null&&!(c instanceof Cv)){switch(e){case -2147483606:Bv(d);d=new V2;f=O;O=f+1|0;g=new Ba;g.jA=G(20);d.jT=(L(g,g.jz,f,10)).T();d.jJ=b;d.kd=c;d.kW=e;DQ();c.e$(HK);return d;case -2147483605:Bv(d);d=new PP;h=O;O=h+1|0;g=new Ba;g.jA=G(20);d.jT=(L(g,g.jz,h,10)).T();d.jJ=b;d.kd=c;d.kW=(-2147483606);DQ();c.e$(HK);return d;case -2147483585:Bv(d);d=new Pz;h=O;O=h+1|0;g=new Ba;By(g);g.jA=G(20);d.jT=(L(g,g.jz,h,10)).T();d.jJ=b;d.kd=c;d.kW=(-536870849);DQ();c.e$(HK);return d;case -2147483525:g
=new N$;i=d.kJ;Bv(d);d=i;f=a.ob+1|0;a.ob=f;j=O;O=j+1|0;i=new Ba;By(i);i.jA=G(20);g.jT=(L(i,i.jz,j,10)).T();g.jJ=b;g.kd=c;g.kW=(-536870849);g.nu=d;g.mI=f;DQ();c.e$(HK);return g;case -1073741782:case -1073741781:Bv(d);d=new Rm;f=O;O=f+1|0;g=new Ba;g.jA=G(20);d.jT=(L(g,g.jz,f,10)).T();d.jJ=b;d.kd=c;d.kW=e;c.e$(d);return d;case -1073741761:Bv(d);d=new Qw;h=O;O=h+1|0;g=new Ba;By(g);g.jA=G(20);d.jT=(L(g,g.jz,h,10)).T();d.jJ=b;d.kd=c;d.kW=(-536870849);c.e$(b);return d;case -1073741701:g=new TD;i=d.kJ;Bv(d);d=i;h=a.ob
+1|0;a.ob=h;j=O;O=j+1|0;i=new Ba;By(i);i.jA=G(20);g.jT=(L(i,i.jz,j,10)).T();g.jJ=b;g.kd=c;g.kW=(-536870849);g.nu=d;g.mI=h;c.e$(g);return g;case -536870870:case -536870869:Bv(d);if(c.fp()!=(-2147483602)){d=new Dx;f=O;O=f+1|0;g=new Ba;g.jA=G(20);d.jT=(L(g,g.jz,f,10)).T();d.jJ=b;d.kd=c;d.kW=e;}else{h=a.lH;if((h&32)!=32?0:1){d=new Rn;f=O;O=f+1|0;g=new Ba;g.jA=G(20);d.jT=(L(g,g.jz,f,10)).T();d.jJ=b;d.kd=c;d.kW=e;}else{d=new OV;if(!(h&1)){g=FZ;if(g===null){g=new Jb;FZ=g;}}else{g=Ga;if(g===null){g=new Ja;Ga=g;}}f=
O;O=f+1|0;i=new Ba;i.jA=G(20);d.jT=(L(i,i.jz,f,10)).T();d.jJ=b;d.kd=c;d.kW=e;d.rG=g;}}c.e$(d);return d;case -536870849:Bv(d);d=new GG;h=O;O=h+1|0;g=new Ba;g.jA=G(20);d.jT=(L(g,g.jz,h,10)).T();d.jJ=b;d.kd=c;d.kW=(-536870849);c.e$(b);return d;case -536870789:g=new F1;i=d.kJ;Bv(d);d=i;h=a.ob+1|0;a.ob=h;j=O;O=j+1|0;i=new Ba;i.jA=G(20);g.jT=(L(i,i.jz,j,10)).T();g.jJ=b;g.kd=c;g.kW=(-536870849);g.nu=d;g.mI=h;c.e$(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:Bv(d);d
=new V4;f=O;O=f+1|0;c=new Ba;c.jA=G(20);d.jT=(L(c,c.jz,f,10)).T();d.jJ=b;d.kd=i;d.kW=e;d.kH=i;i.jJ=d;return d;case -2147483585:Bv(d);c=new UO;h=O;O=h+1|0;d=new Ba;By(d);d.jA=G(20);c.jT=(L(d,d.jz,h,10)).T();c.jJ=b;c.kd=i;c.kW=(-2147483585);c.kH=i;return c;case -2147483525:c=new Pq;g=d.kJ;Bv(d);d=g;h=O;O=h+1|0;g=new Ba;By(g);g.jA=G(20);c.jT=(L(g,g.jz,h,10)).T();c.jJ=b;c.kd=i;c.kW=(-2147483525);c.kH=i;c.oS=d;return c;case -1073741782:case -1073741781:Bv(d);d=new Qo;f=O;O=f+1|0;c=new Ba;c.jA=G(20);d.jT=(L(c,c.jz,
f,10)).T();d.jJ=b;d.kd=i;d.kW=e;d.kH=i;i.jJ=d;return d;case -1073741761:Bv(d);c=new S2;h=O;O=h+1|0;d=new Ba;By(d);d.jA=G(20);c.jT=(L(d,d.jz,h,10)).T();c.jJ=b;c.kd=i;c.kW=(-1073741761);c.kH=i;return c;case -1073741701:c=new Q4;g=d.kJ;Bv(d);d=g;h=O;O=h+1|0;g=new Ba;By(g);g.jA=G(20);c.jT=(L(g,g.jz,h,10)).T();c.jJ=b;c.kd=i;c.kW=(-1073741701);c.kH=i;c.oS=d;return c;case -536870870:case -536870869:Bv(d);d=new Dv;f=O;O=f+1|0;c=new Ba;c.jA=G(20);d.jT=(L(c,c.jz,f,10)).T();d.jJ=b;d.kd=i;d.kW=e;d.kH=i;i.jJ=d;return d;case -536870849:Bv(d);c
=new E$;h=O;O=h+1|0;d=new Ba;d.jA=G(20);c.jT=(L(d,d.jz,h,10)).T();c.jJ=b;c.kd=i;c.kW=(-536870849);c.kH=i;return c;case -536870789:c=new Fa;g=d.kJ;Bv(d);d=g;h=O;O=h+1|0;g=new Ba;g.jA=G(20);c.jT=(L(g,g.jz,h,10)).T();c.jJ=b;c.kd=i;c.kW=(-536870789);c.kH=i;c.oS=d;return c;default:}return c;},
Vw=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof Gl;while(true){a:{e=a.kA;f=e.k_;if((f&(-2147418113))==(-2147483608)){Bv(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.lH=g;else{if(f!=(-1073741784))g=a.lH;c=VM(a,f,g,b);e=a.kA;if(e.k_!=(-536870871)){b=new Cf;h=e.k6;i=e.mA;b.jC=1;b.jD=1;b.kg=(-1);b.k$=A(62);b.k5=h;b.kg=i;B(b);}Bv(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.pL<j){c=new Cf;h=e.k6;i=e.mA;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=h;c.kg=i;B(c);}Bv(e);g=a.l6+1|0;a.l6=g;i=a.lH;if(!((i&2)!=2?0:1)){c=new UX;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.qd=j;c.oZ=g;}else if(!((i&64)!=64?0:1)){c=new Gx;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.qd=j;c.oZ=g;}else{c=new QX;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.qd=j;c.oZ=g;}a.sW.data[j].sU=1;a.uT=1;break a;case -2147483583:break;case -2147483582:Bv(e);c
=new KO;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.uc=0;break a;case -2147483577:Bv(e);c=new OP;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();break a;case -2147483558:Bv(e);c=new M4;j=a.l6+1|0;a.l6=j;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.pu=j;break a;case -2147483550:Bv(e);c=new KO;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.uc=1;break a;case -2147483526:Bv(e);c=new U3;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();break a;case -536870876:break b;case -536870866:Bv(e);i
=a.lH;if((i&32)!=32?0:1){c=new UZ;i=O;O=i+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,i,10)).T();break a;}c=new Pk;if(!(i&1)){h=FZ;if(h===null){h=new Jb;FZ=h;}}else{h=Ga;if(h===null){h=new Ja;Ga=h;}}k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.tr=h;break a;case -536870821:Bv(e);i=0;c=a.kA;if(c.k_==(-536870818)){i=1;Bv(c);}c=LF(a,GU(a,i));c.e$(b);h=a.kA;k=h.k_;if(k!=(-536870819)){b=new Cf;e=h.k6;i=h.mA;b.jC=1;b.jD=1;b.kg=(-1);b.k$=A(62);b.k5=e;b.kg=i;B(b);}h.nB=1;h.jX=k;h.ny=h.kJ;h.jV=h.qz;h.qz=h.mA;Bv(h);Bv(a.kA);break a;case -536870818:break c;case 0:c
=e.kJ;h=c;if(h!==null)c=LF(a,h);else{if(!f&&!e.jX&&e.jV==e.lQ&&!(c===null?0:1)?1:0){c=new E3;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.jJ=b;c.ko=1;c.kW=1;c.ko=0;break a;}c=new D0;j=f&65535;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.ko=1;c.lZ=j;}Bv(a.kA);break a;default:if(f>=0&&!(e.kJ===null?0:1)){c=VD(a,f);Bv(a.kA);break a;}if(f==(-536870788)){c=new E3;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.jJ=b;c.ko=1;c.kW=1;c.ko=0;break a;}if(f!=(-536870871)){b=new Cf;c
=e.kJ;if(c===null?0:1)c=c.T();else{k=f&65535;c=new H;l=G(1);m=l.data;m[0]=k;c.jB=K(l.data,0,m.length);}e=a.kA;h=e.k6;i=e.mA;b.jC=1;b.jD=1;b.kg=(-1);b.k$=c;b.k5=h;b.kg=i;B(b);}if(d){b=new Cf;h=e.k6;i=e.mA;b.jC=1;b.jD=1;b.kg=(-1);b.k$=A(62);b.k5=h;b.kg=i;B(b);}c=new E3;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.jJ=b;c.ko=1;c.kW=1;c.ko=0;break a;}Bv(e);c=new Lm;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();break a;}Bv(e);a.l6=a.l6+1|0;i=a.lH;if(!((i&8)!=8?0:1)){c=new Lm;k=O;O=k+1|0;e
=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();break a;}c=new Og;if(!(i&1)){h=FZ;if(h===null){h=new Jb;FZ=h;}}else{h=Ga;if(h===null){h=new Ja;Ga=h;}}k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.vP=h;break a;}Bv(e);j=a.l6+1|0;a.l6=j;i=a.lH;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new Sg;i=O;O=i+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,i,10)).T();c.rY=j;}else{c=new NH;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.pZ=j;}}else if((i&1)!=1?0:1){c=new UP;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,
e.jz,k,10)).T();c.rR=j;}else{c=new M4;k=O;O=k+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,k,10)).T();c.pu=j;}}}if(f!=(-16777176))break;}return c;},
GU=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new CD;d=a.lH;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bh;f.jS=W(64);c.jW=f;f=new Bh;f.jS=W(2);c.jY=f;c.rW=e;c.sG=d;EB(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.kA;b=k.k_;if(!b&&!k.jX&&k.jV==k.lQ&&!(k.kJ===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)CY(c,g);f=a.kA;Bv(f);g=f.n0;f=a.kA;if(f.k_!=(-536870874)){g=38;break d;}if(f.jX==(-536870821)){Bv(f);h=1;g=(-1);break d;}Bv(f);if(j){c=GU(a,0);break d;}if(a.kA.k_
==(-536870819))break d;U9(c,GU(a,0));break d;case -536870867:if(!j){b=k.jX;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){Bv(k);k=a.kA;d=k.k_;if(k.kJ===null?0:1)break c;if(d<0){b=k.jX;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AEV(d))break e;d=d&65535;break e;}catch($$e){$$je=Bb($$e);if($$je instanceof BD){break b;}else{throw $$e;}}}try{BS(c,g,d);}catch($$e){$$je=Bb($$e);if($$je instanceof BD){break b;}else{throw $$e;}}Bv(a.kA);g=(-1);break d;}}if(g>=0)CY(c,g);g=45;Bv(a.kA);break d;case -536870821:if
(g>=0){CY(c,g);g=(-1);}Bv(a.kA);e=0;f=a.kA;if(f.k_==(-536870818)){Bv(f);e=1;}if(!h)WA(c,GU(a,e));else U9(c,GU(a,e));h=0;Bv(a.kA);break d;case -536870819:break;case -536870818:if(g>=0)CY(c,g);g=94;Bv(a.kA);break d;case 0:if(g>=0)CY(c,g);f=a.kA.kJ;if(f===null)g=0;else{ASs(c,f);g=(-1);}Bv(a.kA);break d;default:if(g>=0)CY(c,g);f=a.kA;Bv(f);g=f.n0;break d;}if(g>=0)CY(c,g);g=93;Bv(a.kA);}j=0;}c=new Cf;l=k.k6;g=k.mA;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=l;c.kg=g;B(c);}c=new Cf;k=a.kA;l=k.k6;g=k.mA;c.jC=1;c.jD=1;c.kg
=(-1);c.k$=A(62);c.k5=l;c.kg=g;B(c);}if(!i){if(g>=0)CY(c,g);return c;}c=new Cf;l=k.k6;b=k.mA-1|0;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=l;c.kg=b;B(c);},
VD=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.lH;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new JN;b=b&65535;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.ko=1;e.so=b;e.sK=FY(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new ND;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.ko=1;e.ko=2;if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}b=Cu(BU,b);if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null
?T(BL.value):null)));}e.tm=Cu(BV,b);return e;}if(b<=57343&&b>=56320?1:0){e=new Hq;b=b&65535;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.oc=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Hy;b=b&65535;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.nZ=b;return e;}e=new M6;b=b&65535;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.ko=1;if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}b=Cu(BU,b)&65535;if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value
!==null?T(BL.value):null)));}e.rd=Cu(BV,b)&65535;return e;}}if(c){e=new Eh;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.ko=1;e.ko=2;e.pa=b;h=(ES(b)).data;e.o3=h[0];e.oF=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new Hq;b=b&65535;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.oc=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Hy;b=b&65535;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.nZ=b;return e;}e=new D0;b=b&65535;f=O;O=f+1|0;g=new Ba;g.jA=G(20);e.jT=(L(g,g.jz,f,10)).T();e.ko
=1;e.lZ=b;return e;},
LF=(a,b)=>{let c,d,e,f,g,h;if(!AIy(b)){if(b.kN){if(!b.fy()){c=new DH;d=O;O=d+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,d,10)).T();c.l_=b.fz();c.pz=b.kc;return c;}c=new JQ;d=O;O=d+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,d,10)).T();c.l_=b.fz();c.pz=b.kc;return c;}if(b.fy()){c=new Kr;d=O;O=d+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,d,10)).T();c.ko=1;c.rK=b.fz();c.tg=b.kc;return c;}c=new D3;d=O;O=d+1|0;e=new Ba;e.jA=G(20);c.jT=(L(e,e.jz,d,10)).T();c.ko=1;c.mO=b.fz();c.tL=b.kc;return c;}c=YC(b);e=new NQ;d=O;O=d+1|0;f=
new Ba;f.jA=G(20);e.jT=(L(f,f.jz,d,10)).T();e.rH=c;e.sz=c.kc;if(b.kN){if(!b.fy()){c=new G7;f=new DH;b=Ie(b);d=O;O=d+1|0;g=new Ba;g.jA=G(20);f.jT=(L(g,g.jz,d,10)).T();f.l_=b;f.pz=b.kc;d=O;O=d+1|0;b=new Ba;b.jA=G(20);c.jT=(L(b,b.jz,d,10)).T();c.oW=f;c.oN=e;return c;}c=new G7;f=new JQ;g=Ie(b);h=O;O=h+1|0;b=new Ba;b.jA=G(20);f.jT=(L(b,b.jz,h,10)).T();f.l_=g;f.pz=g.kc;d=O;O=d+1|0;b=new Ba;b.jA=G(20);c.jT=(L(b,b.jz,d,10)).T();c.oW=f;c.oN=e;return c;}if(b.fy()){c=new G7;f=new Kr;b=Ie(b);d=O;O=d+1|0;g=new Ba;g.jA=G(20);f.jT
=(L(g,g.jz,d,10)).T();f.ko=1;f.rK=b;f.tg=b.kc;d=O;O=d+1|0;b=new Ba;b.jA=G(20);c.jT=(L(b,b.jz,d,10)).T();c.oW=f;c.oN=e;return c;}c=new G7;f=new D3;b=Ie(b);d=O;O=d+1|0;g=new Ba;g.jA=G(20);f.jT=(L(g,g.jz,d,10)).T();f.ko=1;f.mO=b;f.tL=b.kc;d=O;O=d+1|0;b=new Ba;b.jA=G(20);c.jT=(L(b,b.jz,d,10)).T();c.oW=f;c.oN=e;return c;},
FY=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let M0=E(0);
function R4(){let a=this;C.call(a);a.xO=null;a.wI=null;a.rQ=null;a.nC=null;a.rE=0;a.s8=0;}
let NL=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.rQ.jB.length;if(b>=0&&b<=c){d=a.nC;d.n7=0;d.qX=2;e=d.lp.data;f=0;g=e.length;if(f>g){d=new Bn;Y(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.kX.data;f=0;g=e.length;if(f>g){d=new Bn;Y(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.nK=d.mm;d.qX=1;d.nK=b;c=d.q0;if(c<0)c=b;d.q0=c;b=a.wI.fC(b,a.rQ,d);if(b==(-1))a.nC.mc=1;if(b>=0){d=a.nC;b=d.n7;if(b){e=d.lp.data;if(e[0]==(-1)){f=d.nK;e[0]=f;e[1]=f;}if(!b){d=new BN;d.jC=1;d.jD=1;Bj(d);B(d);}if(0<d.pf){d.q0=e[1];return 1;}d=new I;i
=new J;By(i);i.jA=G(16);L(i,i.jz,0,10);j=new H;e=i.jA;k=e.data;c=i.jz;f=k.length;if(c>=0&&c<=(f-0|0)){j.jB=K(e.data,0,c);d.jC=1;d.jD=1;d.jE=j;B(d);}d=new I;d.jC=1;d.jD=1;B(d);}}a.nC.nK=(-1);return 0;}d=new I;i=new J;i.jA=G(16);L(i,i.jz,b,10);j=new H;e=i.jA;k=e.data;c=i.jz;f=k.length;if(c>=0&&c<=(f-0|0)){j.jB=K(e.data,0,c);d.jC=1;d.jD=1;d.jE=j;B(d);}d=new I;d.jC=1;d.jD=1;B(d);},
Qv=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.rQ.jB.length;c=a.nC;if(!c.rV)b=a.s8;if(c.nK>=0&&c.qX==1){d=c.n7;if(!d){c=new BN;c.jC=1;c.jD=1;B(c);}e=Ci(0,c.pf);if(e>=0){c=new I;f=new J;f.jA=G(16);L(f,f.jz,0,10);g=new H;h=f.jA;i=h.data;b=f.jz;j=i.length;if(b>=0&&b<=(j-0|0)){g.jB=K(h.data,0,b);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}h=c.lp.data;k=h[1];c.nK=k;if(!d){c=new BN;c.jC=1;c.jD=1;B(c);}if(e>=0){c=new I;f=new J;f.jA=G(16);L(f,f.jz,0,10);g=new H;h=f.jA;i=h.data;b=f.jz;j=i.length;if(b>=0&&b<=(j-0|0))
{g.jB=K(h.data,0,b);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}j=h[1];if(!d){c=new BN;c.jC=1;c.jD=1;B(c);}if(e<0){if(j==h[0])c.nK=k+1|0;l=c.nK;return l<=b&&NL(a,l)?1:0;}c=new I;f=new J;f.jA=G(16);L(f,f.jz,0,10);g=new H;h=f.jA;i=h.data;b=f.jz;j=i.length;if(b>=0&&b<=(j-0|0)){g.jB=K(h.data,0,b);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}return NL(a,a.rE);},
Wg=(a,b,c)=>{let d,e;a.rE=(-1);a.s8=(-1);a.xO=b;a.wI=b.vV;a.rQ=c;a.rE=0;d=c.jB.length;a.s8=d;e=AO9(c,a.rE,d,b.pL,b.ob+1|0,b.l6+1|0);a.nC=e;e.oI=1;},
P_=(a,b)=>{let c=new R4();Wg(c,a,b);return c;};
let ZC=E();
let CG=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=OU(ANN(b,c));}catch($$e){$$je=Bb($$e);if($$je instanceof Km){d=$$je;break a;}else if($$je instanceof G8){d=$$je;break b;}else{throw $$e;}}return d;}e=new B5;if(b.jI===null)b.jI=T(b.jP.$meta.name);f=b.jI;b=new J;b.jA=G(16);F(b,b.jz,A(162));g=b.jz;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jA;i=c.data;j=b.jz;k=i.length;if(j>=0&&j<=(k-0|0)){h.jB=K(c.data,0,j);e.jC=1;e.jD=1;e.jE=h;e.kU=d;B(e);}b=new I;b.jC=1;b.jD=1;B(b);}e=new B5;if(b.jI
===null)b.jI=T(b.jP.$meta.name);f=b.jI;b=new J;b.jA=G(16);F(b,b.jz,A(163));g=b.jz;if(f===null)f=A(2);F(b,g,f);F(b,b.jz,A(164));h=new H;c=b.jA;i=c.data;j=b.jz;k=i.length;if(j>=0&&j<=(k-0|0)){h.jB=K(c.data,0,j);e.jC=1;e.jD=1;e.jE=h;e.kU=d;B(e);}b=new I;b.jC=1;b.jD=1;B(b);}c=(AQM(b)).data;if(c.length<=0)b=null;else{b=new Ku;b.k9=c[0];}return b;},
CF=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=OU(ANP(b,c));}catch($$e){$$je=Bb($$e);if($$je instanceof Km){d=$$je;break a;}else if($$je instanceof G8){d=$$je;e=new B5;if(b.jI===null)b.jI=T(b.jP.$meta.name);f=b.jI;b=new J;b.jA=G(16);F(b,b.jz,A(162));g=b.jz;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jA;i=c.data;j=b.jz;k=i.length;if(j>=0&&j<=(k-0|0)){h.jB=K(c.data,0,j);e.jC=1;e.jD=1;e.jE=h;e.kU=d;B(e);}b=new I;b.jC=1;b.jD=1;B(b);}else{throw $$e;}}return d;}e=new B5;if(b.jI===null)b.jI=T(b.jP.$meta.name);f=b.jI;b=new J;b.jA
=G(16);F(b,b.jz,A(165));g=b.jz;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.jA;i=c.data;k=b.jz;j=i.length;if(k>=0&&k<=(j-0|0)){h.jB=K(c.data,0,k);e.jC=1;e.jD=1;e.jE=h;e.kU=d;B(e);}b=new I;b.jC=1;b.jD=1;B(b);};
function Ku(){C.call(this);this.k9=null;}
let APH=(a,b)=>{a.k9=b;},
OU=a=>{let b=new Ku();APH(b,a);return b;},
CI=(a,b)=>{return;},
CS=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=R(C,0);a:{b:{c:{try{c=AN2(a.k9,b);}catch($$e){$$je=Bb($$e);if($$je instanceof Bn){c=$$je;break c;}else if($$je instanceof Mc){c=$$je;break a;}else if($$je instanceof JM){c=$$je;break b;}else if($$je instanceof Of){c=$$je;d=new B5;e=a.k9.k8;if(e.jI===null)e.jI=T(e.jP.$meta.name);e=e.jI;f=new J;f.jA=G(16);F(f,f.jz,A(166));g=f.jz;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jA;i=b.data;j=f.jz;k=i.length;if(j>=0&&j<=(k-0|0)){h.jB=K(b.data,0,j);d.jC=1;d.jD=1;d.jE=h;d.kU
=c;B(d);}c=new I;c.jC=1;c.jD=1;B(c);}else{throw $$e;}}return c;}d=new B5;e=a.k9.k8;if(e.jI===null)e.jI=T(e.jP.$meta.name);e=e.jI;f=new J;f.jA=G(16);F(f,f.jz,A(167));g=f.jz;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jA;i=b.data;j=f.jz;k=i.length;if(j>=0&&j<=(k-0|0)){h.jB=K(b.data,0,j);d.jC=1;d.jD=1;d.jE=h;d.kU=c;B(d);}c=new I;c.jC=1;c.jD=1;B(c);}d=new B5;e=a.k9.k8;if(e.jI===null)e.jI=T(e.jP.$meta.name);e=e.jI;f=new J;f.jA=G(16);F(f,f.jz,A(168));g=f.jz;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jA;i=b.data;j=f.jz;k
=i.length;if(j>=0&&j<=(k-0|0)){h.jB=K(b.data,0,j);d.jC=1;d.jD=1;d.jE=h;d.kU=c;B(d);}c=new I;c.jC=1;c.jD=1;B(c);}d=new B5;e=a.k9.k8;if(e.jI===null)e.jI=T(e.jP.$meta.name);e=e.jI;f=new J;f.jA=G(16);F(f,f.jz,A(168));g=f.jz;if(e===null)e=A(2);F(f,g,e);h=new H;b=f.jA;i=b.data;j=f.jz;k=i.length;if(j>=0&&j<=(k-0|0)){h.jB=K(b.data,0,j);d.jC=1;d.jD=1;d.jE=h;d.kU=c;B(d);}c=new I;c.jC=1;c.jD=1;B(c);};
let B5=E(BD);
function Ew(){C.call(this);this.kb=null;}
let ALA=null,Mx=null,G1=null,HZ=null,PJ=null,Vl=null,Ph=null;
let BC=()=>{BC=BP(Ew);AAA();};
let B9=b=>{let c,d,e,f,g,h,i;BC();if(b===null)return null;c=b;d=T(typeof c);if(d===A(169))e=1;else if(!(A(169) instanceof H))e=0;else{f=A(169);e=d.jB!==f.jB?0:1;}a:{if(!e){if(d===A(170))e=1;else if(!(A(170) instanceof H))e=0;else{f=A(170);e=d.jB!==f.jB?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Bo]===true)return b;b=Mx;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ew;h.kb=c;Mx.set(c,new WeakRef(h));return h;}if(d===A(171))e=1;else if
(!(A(171) instanceof H))e=0;else{b=A(171);e=d.jB!==b.jB?0:1;}if(e){f=G1.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ew;h.kb=c;i=h;G1.set(c,new WeakRef(i));Or(Vl,i,c);return h;}if(d===A(172))e=1;else if(!(A(172) instanceof H))e=0;else{b=A(172);e=d.jB!==b.jB?0:1;}if(e){f=HZ.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ew;h.kb=c;i=h;HZ.set(c,new WeakRef(i));Or(Ph,i,c);return h;}if(d===A(173))e=1;else if
(!(A(173) instanceof H))e=0;else{b=A(173);e=d.jB!==b.jB?0:1;}if(e){f=PJ;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ew;h.kb=c;PJ=new WeakRef(h);return h;}}b=new Ew;b.kb=c;return b;},
AAA=()=>{ALA=new WeakMap();Mx=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();G1=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();HZ=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();Vl=G1===null?null:new FinalizationRegistry(B4(new LX,"accept"));Ph=HZ===null?null:new FinalizationRegistry(B4(new LW,"accept"));},
Or=(b,c,d)=>{return b.register(c,d);};
let QD=E(0);
let JZ=E();
let HC=E(0);
let JY=E();
function TM(){let a=this;C.call(a);a.lp=null;a.kX=null;a.m$=null;a.pA=null;a.pf=0;a.n7=0;a.mm=0;a.kj=0;a.nK=0;a.rV=0;a.oI=0;a.mc=0;a.yU=0;a.q0=0;a.qX=0;}
let AJA=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.q0=(-1);h=e+1|0;a.pf=h;i=W(h*2|0);a.lp=i;j=W(g);k=j.data;a.kX=j;e=0;g=k.length;l=Ci(e,g);if(l>0){b=new Bn;b.jC=1;b.jD=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.m$=W(f);i=i.data;h=0;m=i.length;e=Ci(h,m);if(e>0){b=new Bn;b.jC=1;b.jD=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.n7=0;a.qX=2;f=0;if(e>0){b=new Bn;b.jC=1;b.jD=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bn;b.jC=1;b.jD=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.pA=b;if(c
>=0){a.mm=c;a.kj=d;}a.nK=a.mm;},
AO9=(a,b,c,d,e,f)=>{let g=new TM();AJA(g,a,b,c,d,e,f);return g;};
let Cs=E(Bn);
let Km=E(Bx);
let Ek=E(BD);
let G8=E(Ek);
let Db=E(Bx);
function Ca(){let a=this;C.call(a);a.jJ=null;a.l0=0;a.jT=null;a.kW=0;}
let O=0;
let ABJ=(a,b,c,d)=>{let e;e=d.kj;while(true){if(b>e)return (-1);if(a.fK(b,c,d)>=0)break;b=b+1|0;}return b;},
AEx=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fK(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
ATu=(a,b)=>{a.kW=b;},
ZP=a=>{return a.kW;},
AUM=a=>{let b,c,d,e,f,g,h,i;b=a.jT;c=a.fL();d=new J;d.jA=G(16);e=d.jz;Bf(d,e,e+1|0);d.jA.data[e]=60;f=d.jz;if(b===null)b=A(2);F(d,f,b);e=d.jz;Bf(d,e,e+1|0);d.jA.data[e]=58;f=d.jz;if(c===null)c=A(2);F(d,f,c);e=d.jz;Bf(d,e,e+1|0);g=d.jA;h=g.data;h[e]=62;b=new H;e=d.jz;i=h.length;if(e>=0&&e<=(i-0|0)){b.jB=K(g.data,0,e);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
AMT=a=>{let b,c,d,e,f,g,h,i;b=a.jT;c=a.fL();d=new J;d.jA=G(16);e=d.jz;Bf(d,e,e+1|0);d.jA.data[e]=60;f=d.jz;if(b===null)b=A(2);F(d,f,b);e=d.jz;Bf(d,e,e+1|0);d.jA.data[e]=58;f=d.jz;if(c===null)c=A(2);F(d,f,c);e=d.jz;Bf(d,e,e+1|0);g=d.jA;h=g.data;h[e]=62;b=new H;e=d.jz;i=h.length;if(e>=0&&e<=(i-0|0)){b.jB=K(g.data,0,e);return b;}b=new I;Y(b);B(b);},
AVs=a=>{return a.jJ;},
APr=(a,b)=>{a.jJ=b;},
APp=(a,b)=>{return 1;},
AQ5=a=>{return null;},
H2=a=>{let b;a.l0=1;b=a.jJ;if(b!==null){if(!b.l0){b=b.fM();if(b!==null){a.jJ.l0=1;a.jJ=b;}a.jJ.e6();}else if(b instanceof F$&&b.l8.sU)a.jJ=b.jJ;}},
AV8=()=>{O=1;};
let Mr=E();
let AQP=E();
let ADF=E();
let ASw=E();
let KC=E(0);
let LX=E();
let APz=(a,b)=>{let c;BC();b=b===null?null:b instanceof Fz()?b:B9(b);c=G1;b=b===null?null:b[Bo]===true?b:b.kb;c.delete(b);};
let AE$=E();
let LW=E();
let Ym=(a,b)=>{let c;BC();b=b===null?null:b instanceof Fz()?b:B9(b);c=HZ;b=b===null?null:b[Bo]===true?b:b.kb;c.delete(b);};
let NA=E(0);
function Hi(){let a=this;C.call(a);a.mw=null;a.l$=null;}
function Io(){let a=this;Hi.call(a);a.r5=null;a.wf=0;}
function Dm(){let a=this;Ca.call(a);a.sU=0;a.lw=0;}
let HK=null;
let DQ=()=>{DQ=BP(Dm);ACR();};
let YL=(a,b,c,d)=>{let e,f,g;e=a.lw;f=d.lp.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.jJ.fK(b,c,d);if(g<0){b=a.lw;d.lp.data[(b*2|0)+1|0]=e;}return g;},
AUH=a=>{return a.lw;},
AE5=a=>{return A(174);},
Zq=(a,b)=>{return 0;},
ACR=()=>{let b,c,d;b=new OM;c=O;O=c+1|0;d=new Ba;d.jA=G(20);b.jT=(L(d,d.jz,c,10)).T();HK=b;};
function SQ(){let a=this;C.call(a);a.k7=null;a.kZ=0;a.nB=0;a.wL=0;a.n0=0;a.k_=0;a.jX=0;a.lQ=0;a.kJ=null;a.ny=null;a.jV=0;a.kS=0;a.mA=0;a.qz=0;a.k6=null;}
let P5=null,Zk=null,ANC=0;
let APt=(a,b,c)=>{let d,e,f,g,h,i,j;a.nB=1;a.k6=b;if((c&16)>0){d=new J;d.jA=G(16);F(d,d.jz,A(175));e=0;while(true){f=PR(b,A(176),e);if(f<0)break;g=f+2|0;h=Cm(b,e,g);F(d,d.jz,h);F(d,d.jz,A(177));e=g;}b=Cm(b,e,b.jB.length);F(d,d.jz,b);F(d,d.jz,A(176));b=new H;i=d.jA;j=i.data;e=d.jz;f=j.length;if(e>=0&&e<=(f-0|0))b.jB=K(i.data,0,e);else{b=new I;b.jC=1;b.jD=1;B(b);}}a.k7=G(b.jB.length+2|0);j=G(b.jB.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){DD(j,0,a.k7,0,b.jB.length);i=a.k7.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.lQ=g;a.kZ=c;Bv(a);Bv(a);return;}if(e<0)break;if(e>=b.jB.length)break;i[e]=b.jB.charCodeAt(e);e=e+1|0;}b=new V;b.jC=1;b.jD=1;B(b);},
AC1=(a,b)=>{let c=new SQ();APt(c,a,b);return c;},
Bv=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.n0=a.k_;a.k_=a.jX;a.kJ=a.ny;a.mA=a.qz;a.qz=a.jV;a:{while(true){b=0;c=a.jV>=a.k7.data.length?0:MI(a);a.jX=c;a.ny=null;if(a.nB==4){if(c!=92)return;c=a.jV;d=a.k7.data;if(c>=d.length)c=0;else{a.kS=c;if(a.kZ&4)Cn(a);else a.jV=c+1|0;c=d[a.kS];}a.jX=c;switch(c){case 69:break;default:a.jX=92;a.jV=a.kS;return;}a.nB=a.wL;a.jX=a.jV>(a.k7.data.length-2|0)?0:MI(a);}b:{c=a.jX;if(c==92){c=a.jV>=(a.k7.data.length-2|0)?(-1):MI(a);c:{d:{a.jX=c;switch(c){case -1:e=new Cf;f=a.k6;c=a.jV;e.jC
=1;e.jD=1;e.kg=(-1);e.k$=A(62);e.k5=f;e.kg=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.jX
=AKe(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.nB!=1)break b;a.jX=(-2147483648)|c;break b;case 65:a.jX=(-2147483583);break b;case 66:a.jX=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cf;f=a.k6;c=a.jV;e.jC=1;e.jD=1;e.kg=(-1);e.k$=A(62);e.k5=f;e.kg=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.jX
=(-2147483577);break b;case 80:case 112:break c;case 81:a.wL=a.nB;a.nB=4;b=1;break b;case 90:a.jX=(-2147483558);break b;case 97:a.jX=7;break b;case 98:a.jX=(-2147483550);break b;case 99:c=a.jV;d=a.k7.data;if(c>=(d.length-2|0)){e=new Cf;f=a.k6;e.jC=1;e.jD=1;e.kg=(-1);e.k$=A(62);e.k5=f;e.kg=c;B(e);}a.kS=c;if(a.kZ&4)Cn(a);else a.jV=c+1|0;a.jX=d[a.kS]&31;break b;case 101:a.jX=27;break b;case 102:a.jX=12;break b;case 110:a.jX=10;break b;case 114:a.jX=13;break b;case 116:a.jX=9;break b;case 117:a.jX=PS(a,4);break b;case 120:a.jX
=PS(a,2);break b;case 122:a.jX=(-2147483526);break b;default:}break b;}e=new H;d=a.k7;g=d.data;h=a.kS;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.jB=K(d.data,h,1);e=Vg(Iq,e);if(e.nD===null)e.nD=e.fT();a.ny=e.nD;a.jX=0;break b;}e=AJr(a);j=0;if(a.jX==80)j=1;try{a.ny=AHj(e,j);}catch($$e){$$je=Bb($$e);if($$je instanceof JW){e=new Cf;f=a.k6;c=a.jV;e.jC=1;e.jD=1;e.kg=(-1);e.k$=A(62);e.k5=f;e.kg=c;B(e);}else{throw $$e;}}a.jX=0;}else{h=a.nB;if(h==1)switch(c){case 36:a.jX=(-536870876);break b;case 40:d=a.k7.data;c
=a.jV;if(d[c]!=63){a.jX=(-2147483608);break b;}a.kS=c;if(a.kZ&4)Cn(a);else a.jV=c+1|0;c=a.k7.data[a.jV];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.jX=(-134217688);k=a.jV;a.kS=k;if(a.kZ&4)Cn(a);else a.jV=k+1|0;break e;default:e=new Cf;f=a.k6;c=a.jV;e.jC=1;e.jD=1;e.kg=(-1);e.k$=A(62);e.k5=f;e.kg=c;B(e);}a.jX=(-67108824);j=a.jV;a.kS=j;if(a.kZ&4)Cn(a);else a.jV=j+1|0;}else{switch(c){case 33:break;case 60:h=a.jV;a.kS=h;if(a.kZ&4)Cn(a);else a.jV=h+1|0;c=a.k7.data[a.jV];h=1;break e;case 61:a.jX
=(-536870872);j=a.jV;a.kS=j;if(a.kZ&4)Cn(a);else a.jV=j+1|0;break e;case 62:a.jX=(-33554392);j=a.jV;a.kS=j;if(a.kZ&4)Cn(a);else a.jV=j+1|0;break e;default:i=ARV(a);a.jX=i;if(i<256){a.kZ=i;i=i<<16;a.jX=i;a.jX=(-1073741784)|i;break e;}i=i&255;a.jX=i;a.kZ=i;i=i<<16;a.jX=i;a.jX=(-16777176)|i;break e;}a.jX=(-268435416);j=a.jV;a.kS=j;if(a.kZ&4)Cn(a);else a.jV=j+1|0;}}if(!h)break;}break b;case 41:a.jX=(-536870871);break b;case 42:case 43:case 63:h=a.jV;d=a.k7.data;switch(h>=d.length?42:d[h]){case 43:a.jX=c|(-2147483648);a.kS
=h;if(a.kZ&4)Cn(a);else a.jV=h+1|0;break b;case 63:a.jX=c|(-1073741824);a.kS=h;if(a.kZ&4)Cn(a);else a.jV=h+1|0;break b;default:}a.jX=c|(-536870912);break b;case 46:a.jX=(-536870866);break b;case 91:a.jX=(-536870821);a.nB=2;break b;case 93:if(h!=2)break b;a.jX=(-536870819);break b;case 94:a.jX=(-536870818);break b;case 123:a.ny=APN(a,c);break b;case 124:a.jX=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.jX=(-536870874);break b;case 45:a.jX=(-536870867);break b;case 91:a.jX=(-536870821);break b;case 93:a.jX
=(-536870819);break b;case 94:a.jX=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new I;e.jC=1;e.jD=1;B(e);},
AJr=a=>{let b,c,d,e,f,g,h,i;b=new J;b.jA=G(10);c=a.jV;d=a.k7;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new H;a.kS=c;if(a.kZ&4)Cn(a);else a.jV=c+1|0;g=a.kS;if(g>=0&&1<=(f-g|0)){b.jB=K(d.data,g,1);h=new J;h.jA=G(16);F(h,h.jz,A(178));F(h,h.jz,b);b=new H;d=h.jA;e=d.data;f=h.jz;g=e.length;if(f>=0&&f<=(g-0|0)){b.jB=K(d.data,0,f);return b;}b=new I;b.jC=1;b.jD=1;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}a.kS=c;if(a.kZ&4)Cn(a);else a.jV=c+1|0;c=0;a:{while(true){f=a.jV;d=a.k7.data;if(f>=(d.length-2|0))break;a.kS=f;if
(a.kZ&4)Cn(a);else a.jV=f+1|0;c=d[a.kS];if(c==125)break a;f=b.jz;Bf(b,f,f+1|0);b.jA.data[f]=c;}}if(c!=125){b=new Cf;i=a.k6;c=a.jV;b.jC=1;b.jD=1;b.kg=(-1);b.k$=A(62);b.k5=i;b.kg=c;B(b);}}c=b.jz;if(!c){b=new Cf;i=a.k6;c=a.jV;b.jC=1;b.jD=1;b.kg=(-1);b.k$=A(62);b.k5=i;b.kg=c;B(b);}h=new H;d=b.jA;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.jB=K(d.data,0,c);if(h.jB.length==1){b=new J;b.jA=G(16);F(b,b.jz,A(178));F(b,b.jz,h);h=new H;d=b.jA;e=d.data;f=b.jz;g=e.length;if(f>=0&&f<=(g-0|0)){h.jB=K(d.data,0,f);return h;}b=new I;b.jC
=1;b.jD=1;B(b);}b:{c:{if(h.jB.length>3){if(h===A(178)?1:Mn(h,A(178),0))break c;if(h===A(179)?1:Mn(h,A(179),0))break c;}break b;}h=Cm(h,2,h.jB.length);}return h;}b=new I;b.jC=1;b.jD=1;B(b);},
APN=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new J;c.jA=G(4);d=(-1);e=2147483647;a:{while(true){f=a.jV;g=a.k7.data;if(f>=g.length)break a;a.kS=f;if(a.kZ&4)Cn(a);else a.jV=f+1|0;b=g[a.kS];if(b==125)break a;if(b==44&&d<0)try{d=Kg(EK(c),10);AQd(c,0,Y_(c));continue;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){break;}else{throw $$e;}}h=b&65535;f=c.jz;Bf(c,f,f+1|0);c.jA.data[f]=h;}c=new Cf;i=a.k6;b=a.jV;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=i;c.kg=b;B(c);}if(b!=125){c=new Cf;i=a.k6;b=a.jV;c.jC=1;c.jD=1;c.kg=(-1);c.k$
=A(62);c.k5=i;c.kg=b;B(c);}if(c.jz>0)b:{try{e=Kg(EK(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){}else{throw $$e;}}c=new Cf;i=a.k6;b=a.jV;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=i;c.kg=b;B(c);}else if(d<0){c=new Cf;i=a.k6;b=a.jV;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=i;c.kg=b;B(c);}if((d|e|(e-d|0))<0){c=new Cf;i=a.k6;b=a.jV;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=i;c.kg=b;B(c);}f=a.jV;g=a.k7.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.jX=(-2147483525);a.kS=f;if(a.kZ
&4)Cn(a);else a.jV=f+1|0;break c;case 63:a.jX=(-1073741701);a.kS=f;if(a.kZ&4)Cn(a);else a.jV=f+1|0;break c;default:}a.jX=(-536870789);}c=new N7;c.n8=d;c.n5=e;return c;},
AEV=b=>{return b<0?0:1;},
PS=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new J;c.jA=G(b);d=a.k7.data.length-2|0;e=0;while(true){f=Ci(e,b);if(f>=0)break;g=a.jV;if(g>=d)break;h=a.k7;a.kS=g;if(a.kZ&4)Cn(a);else a.jV=g+1|0;g=h.data[a.kS];i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=g;e=e+1|0;}if(!f)a:{try{b=Kg(EK(c),16);}catch($$e){$$je=Bb($$e);if($$je instanceof Cs){break a;}else{throw $$e;}}return b;}c=new Cf;j=a.k6;b=a.jV;c.jC=1;c.jD=1;c.kg=(-1);c.k$=A(62);c.k5=j;c.kg=b;B(c);},
AKe=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.k7.data;e=d.length-2|0;f=Po(d[a.jV]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.jV;a.kS=g;if(a.kZ&4)Cn(a);else a.jV=g+1|0;a:{while(true){if(c>=b)break a;h=a.jV;if(h>=e)break a;i=Po(a.k7.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.jV;a.kS=g;if(a.kZ&4)Cn(a);else a.jV=g+1|0;c=c+1|0;}}return f;}j=new Cf;k=a.k6;b=a.jV;j.jC=1;j.jD=1;j.kg=(-1);j.k$=A(62);j.k5=k;j.kg=b;B(j);},
ARV=a=>{let b,c,d,e,f,g,h;b=1;c=a.kZ;a:while(true){d=a.jV;e=a.k7.data;if(d>=e.length){f=new Cf;g=a.k6;f.jC=1;f.jD=1;f.kg=(-1);f.k$=A(62);f.k5=g;f.kg=d;B(f);}b:{c:{switch(e[d]){case 41:a.kS=d;if(a.kZ&4)Cn(a);else a.jV=d+1|0;return c|256;case 45:if(!b){h=new Cf;g=a.k6;h.jC=1;h.jD=1;h.kg=(-1);h.k$=A(62);h.k5=g;h.kg=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.kS=d;if(a.kZ&4)Cn(a);else a.jV=d+1|0;}a.kS=d;if(a.kZ&4)Cn(a);else a.jV=d+1|0;return c;},
Cn=a=>{let b,c,d,e;b=a.k7.data.length-2|0;a.jV=a.jV+1|0;a:while(true){c=a.jV;if(c<b){b:{c=a.k7.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(CN(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.jV=a.jV+1|0;continue;}}c=a.jV;if(c>=b)break;d=a.k7.data;if(d[c]!=35)break;a.jV=c+1|0;while(true){e=a.jV;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.jV
=e+1|0;}}return c;},
ABE=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?If([d,e]):If([d,e,4519+f|0]);}return null;},
ALc=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
MI=a=>{let b,c,d,e,f;b=a.k7;c=a.jV;a.kS=c;if(a.kZ&4)Cn(a);else a.jV=c+1|0;b=b.data;d=a.kS;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.k7.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.jV;a.kS=d;if(a.kZ&4)Cn(a);else a.jV=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cf(){let a=this;Bn.call(a);a.k$=null;a.k5=null;a.kg=0;}
let AQX=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(62);c=a.kg;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bn;b.jC=1;b.jD=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new H;b.jB=K(d.data,0,f);}a:{h=a.k$;i=a.k5;if(i!==null&&i.jB.length){j=a.kg;i=a.k5;k=new J;k.jA=G(16);L(k,k.jz,j,10);F(k,k.jz,A(61));j=k.jz;if(i===null)i=A(2);F(k,j,i);F(k,k.jz,A(61));F(k,k.jz,b);b=new H;d=k.jA;e=d.data;c=k.jz;f=e.length;if(c>=0&&c<=(f-0|0)){b.jB=K(d.data,0,c);break a;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);}b=A(62);}i=new J;i.jA=G(16);j
=i.jz;if(h===null)h=A(2);F(i,j,h);F(i,i.jz,b);b=new H;d=i.jA;e=d.data;c=i.jz;f=e.length;if(c>=0&&c<=(f-0|0)){b.jB=K(d.data,0,c);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
let YT=E();
let AK1=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bn;f.jC=1;f.jD=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
AMK=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bn;f.jC=1;f.jD=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=Ci(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
Ud=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let Kl=E(0);
let LI=E();
let ACF=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.kF;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BF;b.jP=f;c=b;f.classObject=c;}}b=D7(b);if(b===null){b=new Db;b.jC=1;b.jD=1;B(b);}if(b===M(Bs)){b=new Bn;b.jC=1;b.jD=1;B(b);}if(d<0){b=new DS;b.jC=1;b.jD=1;B(b);}b=DP(b.jP,d);}e=0;g=0;h=a.me;i=a.kF;d=Ci(h,h);a:{while(true){j=Ci(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new MZ;b.jC=1;b.jD=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.lo.data[g];e=h;g=k;}return b;}b=new I;b.jC=1;b.jD=1;B(b);};
let RA=E(0);
let NW=E(0);
function Kn(){LI.call(this);this.me=0;}
let S7=E(0);
function Kk(){let a=this;Kn.call(a);a.lo=null;a.kF=0;}
let GS=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lo;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BF;i.jP=h;j=i;h.classObject=j;}}h=D7(i);if(h===null){i=new Db;i.jC=1;i.jD=1;B(i);}if(h===M(Bs)){i=new Bn;i.jC=1;i.jD=1;B(i);}if(f<0){i=new DS;i.jC=1;i.jD=1;B(i);}j=DP(h.jP,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.lo=j;}},
AF4=(a,b,c)=>{let d,e,f;if(b>=0){d=a.kF;if(b<=d){GS(a,d+1|0);d=a.kF;e=d;while(e>b){f=a.lo.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.lo.data[b]=c;a.kF=d+1|0;a.me=a.me+1|0;return;}}c=new I;c.jC=1;c.jD=1;B(c);},
TX=(a,b)=>{let c,d,e,f;if(b>=0){c=a.kF;if(b<c){d=a.lo.data;e=d[b];c=c-1|0;a.kF=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.me=a.me+1|0;return e;}}e=new I;e.jC=1;e.jD=1;B(e);};
let Rw=E(Dm);
let Xx=(a,b,c,d)=>{let e,f;e=a.lw;f=d.kX.data;f[e]=b-f[e]|0;return a.jJ.fK(b,c,d);},
ABm=a=>{return A(180);},
ANk=(a,b)=>{return 0;};
let VG=E(Dm);
let AAX=(a,b,c,d)=>{return b;},
AGj=a=>{return A(181);};
let PU=E(Dm);
let ZM=(a,b,c,d)=>{let e;e=a.lw;if(d.kX.data[e]!=b)b=(-1);return b;},
APi=a=>{return A(182);};
function Sd(){Dm.call(this);this.uO=0;}
let XW=(a,b,c,d)=>{let e,f;e=a.lw;f=d.kX.data;f[e]=b-f[e]|0;a.uO=b;return b;},
ANW=a=>{return A(183);},
ALb=(a,b)=>{return 0;};
let Gl=E(Dm);
let APU=(a,b,c,d)=>{if(d.qX!=1&&b!=d.kj)return (-1);d.n7=1;d.lp.data[1]=b;return b;},
Z6=a=>{return A(184);};
function Cv(){Ca.call(this);this.ko=0;}
let AR0=(a,b,c,d)=>{let e;if((b+a.f3()|0)>d.kj){d.mc=1;return (-1);}e=a.f4(b,c);if(e<0)return (-1);return a.jJ.fK(b+e|0,c,d);},
AOy=a=>{return a.ko;},
AGa=(a,b)=>{return 1;};
let E3=E(Cv);
let ANI=(a,b,c)=>{return 0;},
AC5=(a,b,c,d)=>{let e,f,g;e=d.kj;f=d.mm;a:{b:{while(true){g=Ci(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.jB.length)break b;if(((c.jB.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.jB.length)break a;if((c.jB.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.jJ.fK(b,c,d)>=0)break;b=b+1|0;}return b;}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);},
AAE=(a,b,c,d,e)=>{let f,g,h;f=e.kj;g=e.mm;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.jB.length)break b;if(((d.jB.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.jB.length)break a;if((d.jB.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.jJ.fK(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new V;d.jC=1;d.jD=1;B(d);}d=new V;d.jC=1;d.jD=1;B(d);},
AE7=a=>{return A(185);},
XO=(a,b)=>{return 0;};
function Cj(){let a=this;Ca.call(a);a.lb=null;a.l8=null;a.kY=0;}
let AEz=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lb;if(e===null)return (-1);f=a.kY;g=d.lp.data;h=f*2|0;i=g[h];g[h]=b;f=e.kF;j=0;a:{while(true){if(j>=f){b=a.kY;d.lp.data[b*2|0]=i;return (-1);}e=a.lb;if(j<0)break a;if(j>=e.kF)break a;h=e.lo.data[j].fK(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new I;c.jC=1;c.jD=1;B(c);},
AK5=(a,b)=>{a.l8.jJ=b;},
AGt=a=>{return A(186);},
AHL=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.lb;if(c!==null){d=0;e=c.me;f=c.kF;while(true){if(!(d>=f?0:1))break b;if(e<c.me){b=new MZ;b.jC=1;b.jD=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.kF)break a;if(c.lo.data[d].fo(b))break;d=g;}return 1;}}return 0;}b=new I;b.jC=1;b.jD=1;B(b);},
AL$=(a,b)=>{let c,d,e;c=a.kY;d=b.lp.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
AAw=a=>{let b,c,d,e;a.l0=1;b=a.l8;if(b!==null&&!b.l0)H2(b);a:{b:{b=a.lb;if(b!==null){c=b.kF;d=0;while(true){if(d>=c)break b;b=a.lb;if(d<0)break a;if(d>=b.kF)break a;b=b.lo.data[d];e=b.fM();if(e===null)e=b;else{b.l0=1;TX(a.lb,d);AF4(a.lb,d,e);}if(!e.l0)e.e6();d=d+1|0;}}}if(a.jJ!==null)H2(a);return;}b=new I;b.jC=1;b.jD=1;B(b);};
let JB=E(Cj);
let AKE=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.kY;f=d.kX.data;g=f[e];f[e]=b;h=a.lb.kF;e=0;a:{while(true){if(e>=h){b=a.kY;d.kX.data[b]=g;return (-1);}i=a.lb;if(e<0)break a;if(e>=i.kF)break a;j=i.lo.data[e].fK(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new I;c.jC=1;c.jD=1;B(c);},
AHY=a=>{return A(187);},
AML=(a,b)=>{let c;c=a.kY;return !b.kX.data[c]?0:1;};
let Eb=E(JB);
let ABR=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.kY;f=d.kX.data;g=f[e];f[e]=b;h=a.lb.kF;i=0;a:{while(i<h){j=a.lb;if(i<0)break a;if(i>=j.kF)break a;if(j.lo.data[i].fK(b,c,d)>=0)return a.jJ.fK(a.l8.uO,c,d);i=i+1|0;}b=a.kY;d.kX.data[b]=g;return (-1);}c=new I;c.jC=1;c.jD=1;B(c);},
AMh=(a,b)=>{a.jJ=b;},
XI=a=>{return A(187);};
let NK=E(Eb);
let AKV=(a,b,c,d)=>{let e,f,g;e=a.lb.kF;f=0;a:{while(f<e){g=a.lb;if(f<0)break a;if(f>=g.kF)break a;if(g.lo.data[f].fK(b,c,d)>=0)return a.jJ.fK(b,c,d);f=f+1|0;}return (-1);}c=new I;c.jC=1;c.jD=1;B(c);},
APu=(a,b)=>{return 0;},
AQ1=a=>{return A(188);};
let UF=E(Eb);
let Zf=(a,b,c,d)=>{let e,f,g;e=a.lb.kF;f=0;a:{while(true){if(f>=e)return a.jJ.fK(b,c,d);g=a.lb;if(f<0)break a;if(f>=g.kF)break a;if(g.lo.data[f].fK(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.jC=1;c.jD=1;B(c);},
AOO=(a,b)=>{return 0;},
AEj=a=>{return A(189);};
let Q3=E(Eb);
let AAo=(a,b,c,d)=>{let e,f,g,h,i;e=a.lb.kF;f=d.rV?0:d.mm;a:{b:{g=a.jJ.fK(b,c,d);if(g>=0){h=a.kY;d.kX.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.lb;if(h<0)break a;if(h>=i.kF)break a;if(i.lo.data[h].f6(f,b,c,d)>=0){b=a.kY;d.kX.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new I;c.jC=1;c.jD=1;B(c);},
ASy=(a,b)=>{return 0;},
AKa=a=>{return A(190);};
let SA=E(Eb);
let WI=(a,b,c,d)=>{let e,f,g;e=a.lb.kF;f=a.kY;d.kX.data[f]=b;f=0;a:{while(true){if(f>=e)return a.jJ.fK(b,c,d);g=a.lb;if(f<0)break a;if(f>=g.kF)break a;if(g.lo.data[f].f6(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.jC=1;c.jD=1;B(c);},
AM4=(a,b)=>{return 0;},
ZN=a=>{return A(191);};
function F$(){Cj.call(this);this.mr=null;}
let Xd=(a,b,c,d)=>{let e,f,g;e=a.kY;f=d.lp.data;e=e*2|0;g=f[e];f[e]=b;e=a.mr.fK(b,c,d);if(e>=0)return e;e=a.kY;d.lp.data[e*2|0]=g;return (-1);},
AH$=(a,b,c,d)=>{let e;e=a.mr.fC(b,c,d);if(e>=0){b=a.kY;d.lp.data[b*2|0]=e;}return e;},
ANr=(a,b,c,d,e)=>{let f;f=a.mr.f6(b,c,d,e);if(f>=0){b=a.kY;e.lp.data[b*2|0]=f;}return f;},
AHB=(a,b)=>{return a.mr.fo(b);},
AK7=a=>{let b,c,d,e,f;b=new N9;c=a.mr;d=a.l8;e=O;O=e+1|0;f=new Ba;f.jA=G(20);b.jT=(L(f,f.jz,e,10)).T();b.mr=c;b.l8=d;b.kY=d.lw;a.jJ=b;return b;},
ARc=a=>{let b;a.l0=1;b=a.l8;if(b!==null&&!b.l0)H2(b);b=a.mr;if(b!==null&&!b.l0){b=b.fM();if(b!==null){a.mr.l0=1;a.mr=b;}a.mr.e6();}};
let AJt=E();
let I6=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(ATh());}return b.data.length;},
DP=(b,c)=>{if(b.$meta.primitive){switch(b){};}return R(b,c);};
let Jp=E(Bx);
let HA=E();
function Bk(){let a=this;HA.call(a);a.kc=0;a.lY=0;a.jW=null;a.sm=null;a.sM=null;a.kN=0;}
let Iq=null;
let Zi=a=>{return null;},
Yf=a=>{return a.jW;},
AIy=a=>{return !a.lY?(HW(a.jW,0)>=2048?0:1):ALB(a.jW,0)>=2048?0:1;},
AT5=a=>{return a.kN;},
AOn=a=>{return a;},
YC=a=>{let b,c;if(a.sM===null){b=a.f9();c=new UR;c.y3=a;c.uY=b;b=new Bh;b.jS=W(64);c.jW=b;a.sM=c;EB(c,a.lY);}return a.sM;},
Ie=a=>{let b,c;if(a.sm===null){b=a.f9();c=new UQ;c.yL=a;c.wC=b;c.wQ=a;b=new Bh;b.jS=W(64);c.jW=b;a.sm=c;EB(c,a.kc);a.sm.kN=a.kN;}return a.sm;},
AQZ=a=>{return 0;},
EB=(a,b)=>{let c;c=a.kc;if(c^b){a.kc=c?0:1;a.lY=a.lY?0:1;}if(!a.kN)a.kN=1;return a;},
ATQ=a=>{return a.kc;},
AHj=(b,c)=>{b=Vg(Iq,b);if(!c&&b.nD===null)b.nD=b.fT();else if(c&&b.pn===null)b.pn=EB(b.fT(),1);return c?b.pn:b.nD;},
ATw=()=>{Iq=new M1;};
function JW(){let a=this;Bx.call(a);a.zg=null;a.y6=null;}
function CD(){let a=this;Bk.call(a);a.rW=0;a.sG=0;a.pN=0;a.ti=0;a.nc=0;a.mG=0;a.jY=null;a.kR=null;}
let CY=(a,b)=>{let c;a:{if(a.rW){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.nc){Nt(a.jY,FY(b&65535));break a;}Mt(a.jY,FY(b&65535));break a;}if(a.sG&&b>128){a.pN=1;if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}b=Cu(BU,b);if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}b=Cu(BV,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.ti)Nt(a.jW,b-55296|0);else Mt(a.jW,b-55296|0);}if(a.nc)Nt(a.jY,b);else Mt(a.jY,
b);if(!a.kN&&(b>=65536&&b<=1114111?1:0))a.kN=1;return a;},
ASs=(a,b)=>{let c,d,e;if(!a.kN&&b.kN)a.kN=1;if(a.ti){if(!b.lY)GJ(a.jW,b.f9());else DO(a.jW,b.f9());}else if(!b.lY)GC(a.jW,b.f9());else{Ge(a.jW,b.f9());DO(a.jW,b.f9());a.lY=a.lY?0:1;a.ti=1;}if(!a.mG&&b.ge()!==null){if(a.nc){if(!b.kc)GJ(a.jY,b.ge());else DO(a.jY,b.ge());}else if(!b.kc)GC(a.jY,b.ge());else{Ge(a.jY,b.ge());DO(a.jY,b.ge());a.kc=a.kc?0:1;a.nc=1;}}else{c=a.kc;d=a.kR;if(d!==null){if(!c){e=new O_;e.xF=a;e.w0=c;e.wK=d;e.wE=b;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}else{e=new Pa;e.zm=a;e.vK=c;e.vF=d;e.vx=b;b
=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}}else{if(c&&!a.nc&&(a.jY.ld?0:1)){d=new O7;d.yv=a;d.vH=b;b=new Bh;b.jS=W(64);d.jW=b;a.kR=d;}else if(!c){d=new O4;d.td=a;d.sx=c;d.u8=b;b=new Bh;b.jS=W(64);d.jW=b;a.kR=d;}else{d=new O5;d.tP=a;d.sC=c;d.wH=b;b=new Bh;b.jS=W(64);d.jW=b;a.kR=d;}a.mG=1;}}return a;},
BS=(a,b,c)=>{let d;if(b>c){d=new Bn;d.jC=1;d.jD=1;B(d);}a:{b:{if(!a.rW){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CY(a,b);b=b+1|0;}}if(a.nc)Xu(a.jY,b,c+1|0);else IA(a.jY,b,c+1|0);}return a;},
WA=(a,b)=>{let c,d,e,f;if(!a.kN&&b.kN)a.kN=1;if(b.pN)a.pN=1;c=a.lY;if(!(c^b.lY)){if(!c)GC(a.jW,b.jW);else DO(a.jW,b.jW);}else if(c)GJ(a.jW,b.jW);else{Ge(a.jW,b.jW);DO(a.jW,b.jW);a.lY=1;}a:{if(!a.mG){d=b.mG;if((!d?b.jY:null)!==null){c=a.kc;if(!(c^b.kc)){if(!c){GC(a.jY,!d?b.jY:null);break a;}DO(a.jY,!d?b.jY:null);break a;}if(c){GJ(a.jY,!d?b.jY:null);break a;}Ge(a.jY,!d?b.jY:null);DO(a.jY,!b.mG?b.jY:null);a.kc=1;break a;}}c=a.kc;e=a.kR;if(e!==null){if(!c){f=new OZ;f.xp=a;f.ws=c;f.wG=e;f.wT=b;b=new Bh;b.jS=W(64);f.jW
=b;a.kR=f;}else{f=new Ps;f.xS=a;f.wR=c;f.uL=e;f.uQ=b;b=new Bh;b.jS=W(64);f.jW=b;a.kR=f;}}else{if(!a.nc&&(a.jY.ld?0:1)){if(!c){e=new O9;e.zq=a;e.vv=b;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}else{e=new O$;e.xW=a;e.wO=b;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}}else if(!c){e=new Pb;e.wt=a;e.vT=b;e.vG=c;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}else{e=new Pc;e.v4=a;e.wa=b;e.wh=c;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}a.mG=1;}}},
U9=(a,b)=>{let c,d,e,f;if(!a.kN&&b.kN)a.kN=1;if(b.pN)a.pN=1;c=a.lY;if(!(c^b.lY)){if(!c)DO(a.jW,b.jW);else GC(a.jW,b.jW);}else if(!c)GJ(a.jW,b.jW);else{Ge(a.jW,b.jW);DO(a.jW,b.jW);a.lY=0;}a:{if(!a.mG){d=b.mG;if((!d?b.jY:null)!==null){c=a.kc;if(!(c^b.kc)){if(!c){DO(a.jY,!d?b.jY:null);break a;}GC(a.jY,!d?b.jY:null);break a;}if(!c){GJ(a.jY,!d?b.jY:null);break a;}Ge(a.jY,!d?b.jY:null);DO(a.jY,!b.mG?b.jY:null);a.kc=0;break a;}}c=a.kc;e=a.kR;if(e!==null){if(!c){f=new O1;f.xD=a;f.wu=c;f.uX=e;f.vJ=b;b=new Bh;b.jS=W(64);f.jW
=b;a.kR=f;}else{f=new O2;f.x4=a;f.wj=c;f.uH=e;f.wr=b;b=new Bh;b.jS=W(64);f.jW=b;a.kR=f;}}else{if(!a.nc&&(a.jY.ld?0:1)){if(!c){e=new OX;e.xZ=a;e.vk=b;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}else{e=new OY;e.zj=a;e.vl=b;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}}else if(!c){e=new O3;e.xa=a;e.wZ=b;e.v9=c;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}else{e=new OW;e.v8=a;e.wm=b;e.vL=c;b=new Bh;b.jS=W(64);e.jW=b;a.kR=e;}a.mG=1;}}},
AAK=(a,b)=>{let c;c=a.kR;if(c!==null)return a.kc^c.gh(b);return a.kc^CC(a.jY,b);},
ASt=a=>{if(!a.mG)return a.jY;return null;},
ACP=a=>{return a.jW;},
APg=a=>{let b,c;if(a.kR!==null)return a;b=!a.mG?a.jY:null;c=new O0;c.xk=a;c.rD=b;b=new Bh;b.jS=W(64);c.jW=b;return EB(c,a.kc);},
AJD=a=>{let b,c,d,e,f,g,h,i,j,k;b=new J;b.jA=G(16);c=HW(a.jY,0);while(c>=0){d=(ES(c)).data;e=0;f=d.length;g=b.jz;Bf(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jA.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jz;Bf(b,g,g+1|0);b.jA.data[g]=124;c=HW(a.jY,c+1|0);}e=b.jz;if(e>0)U1(b,e-1|0);k=new H;d=b.jA;h=d.data;e=b.jz;g=h.length;if(e>=0&&e<=(g-0|0)){k.jB=K(d.data,0,e);return k;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
ADg=a=>{return a.pN;};
function Eq(){Ca.call(this);this.kd=null;}
let AWc=a=>{return a.kd;},
ANt=(a,b)=>{return !a.kd.fo(b)&&!a.jJ.fo(b)?0:1;},
APP=(a,b)=>{return 1;},
AIN=a=>{let b;a.l0=1;b=a.jJ;if(b!==null&&!b.l0){b=b.fM();if(b!==null){a.jJ.l0=1;a.jJ=b;}a.jJ.e6();}b=a.kd;if(b!==null){if(!b.l0){b=b.fM();if(b!==null){a.kd.l0=1;a.kd=b;}a.kd.e6();}else if(b instanceof F$&&b.l8.sU)a.kd=b.jJ;}};
function Dv(){Eq.call(this);this.kH=null;}
let WK=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.kH.f3()|0)<=d.kj){f=a.kH.f4(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.jJ.fK(b,c,d);if(f>=0)break;b=b-a.kH.f3()|0;e=e+(-1)|0;}return f;},
AAt=a=>{return A(192);};
function Fa(){Dv.call(this);this.oS=null;}
let YO=(a,b,c,d)=>{let e,f,g,h,i;e=a.oS;f=e.n8;g=e.n5;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.kH.f3()|0)>d.kj)break a;i=a.kH.f4(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.jJ.fK(b,c,d);if(i>=0)break;b=b-a.kH.f3()|0;h=h+(-1)|0;}return i;}if((b+a.kH.f3()|0)>d.kj){d.mc=1;return (-1);}i=a.kH.f4(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
Zm=a=>{return L9(a.oS);};
let Dx=E(Eq);
let Xa=(a,b,c,d)=>{let e;if(!a.kd.gk(d))return a.jJ.fK(b,c,d);e=a.kd.fK(b,c,d);if(e>=0)return e;return a.jJ.fK(b,c,d);},
AFE=a=>{return A(193);};
let E$=E(Dv);
let AIf=(a,b,c,d)=>{let e;e=a.kd.fK(b,c,d);if(e<0)e=a.jJ.fK(b,c,d);return e;},
ASB=(a,b)=>{a.jJ=b;a.kd.e$(b);};
let UT=E(Dv);
let ARK=(a,b,c,d)=>{while((b+a.kH.f3()|0)<=d.kj&&a.kH.f4(b,c)>0){b=b+a.kH.f3()|0;}return a.jJ.fK(b,c,d);},
AJs=(a,b,c,d)=>{let e,f,g;e=a.jJ.fC(b,c,d);if(e<0)return (-1);f=e-a.kH.f3()|0;while(f>=b&&a.kH.f4(f,c)>0){g=f-a.kH.f3()|0;e=f;f=g;}return e;};
let M1=E();
let Xz=null,AF0=null,Ta=null;
let Vg=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=Ta.data;if(c>=d.length){e=new JW;e.jC=1;e.jD=1;e.jE=A(62);e.zg=A(62);e.y6=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof H))g=0;else{f=f;g=b.jB!==f.jB?0:1;}if(g)break;c=c+1|0;}return d[1];},
ACf=()=>{let b,c,d,e,f,g;b=new IW;Xz=b;c=new In;AF0=c;d=R(DW(C),194);e=d.data;e[0]=S(C,[A(194),new Tn]);e[1]=S(C,[A(195),new T2]);e[2]=S(C,[A(196),new T7]);e[3]=S(C,[A(197),new IQ]);e[4]=S(C,[A(198),c]);e[5]=S(C,[A(199),new I9]);e[6]=S(C,[A(200),new VV]);e[7]=S(C,[A(201),new JJ]);e[8]=S(C,[A(202),new Rp]);e[9]=S(C,[A(203),new RR]);e[10]=S(C,[A(204),new PL]);e[11]=S(C,[A(205),new Px]);e[12]=S(C,[A(206),new T_]);e[13]=S(C,[A(207),new V3]);e[14]=S(C,[A(208),new TB]);e[15]=S(C,[A(209),new Te]);e[16]=S(C,[A(210),
new UE]);e[17]=S(C,[A(211),new Ox]);e[18]=S(C,[A(212),new N8]);e[19]=S(C,[A(213),new TI]);e[20]=S(C,[A(214),new TW]);e[21]=S(C,[A(215),new P8]);e[22]=S(C,[A(216),new RW]);e[23]=S(C,[A(217),new Vz]);e[24]=S(C,[A(218),new TT]);e[25]=S(C,[A(219),new QQ]);e[26]=S(C,[A(220),new P7]);e[27]=S(C,[A(221),new VZ]);e[28]=S(C,[A(222),b]);e[29]=S(C,[A(223),new H9]);e[30]=S(C,[A(224),new UK]);e[31]=S(C,[A(225),b]);e[32]=S(C,[A(226),new Rt]);e[33]=S(C,[A(227),c]);e[34]=S(C,[A(228),new P2]);f=R(C,2);g=f.data;g[0]=A(229);b=
new Bq;b.j1=0;b.j2=127;g[1]=b;e[35]=f;f=R(C,2);g=f.data;g[0]=A(230);b=new Bq;b.j1=128;b.j2=255;g[1]=b;e[36]=f;f=R(C,2);g=f.data;g[0]=A(231);b=new Bq;b.j1=256;b.j2=383;g[1]=b;e[37]=f;f=R(C,2);g=f.data;g[0]=A(232);b=new Bq;b.j1=384;b.j2=591;g[1]=b;e[38]=f;f=R(C,2);g=f.data;g[0]=A(233);b=new Bq;b.j1=592;b.j2=687;g[1]=b;e[39]=f;f=R(C,2);g=f.data;g[0]=A(234);b=new Bq;b.j1=688;b.j2=767;g[1]=b;e[40]=f;f=R(C,2);g=f.data;g[0]=A(235);b=new Bq;b.j1=768;b.j2=879;g[1]=b;e[41]=f;f=R(C,2);g=f.data;g[0]=A(236);b=new Bq;b.j1
=880;b.j2=1023;g[1]=b;e[42]=f;f=R(C,2);g=f.data;g[0]=A(237);b=new Bq;b.j1=1024;b.j2=1279;g[1]=b;e[43]=f;f=R(C,2);g=f.data;g[0]=A(238);b=new Bq;b.j1=1280;b.j2=1327;g[1]=b;e[44]=f;f=R(C,2);g=f.data;g[0]=A(239);b=new Bq;b.j1=1328;b.j2=1423;g[1]=b;e[45]=f;f=R(C,2);g=f.data;g[0]=A(240);b=new Bq;b.j1=1424;b.j2=1535;g[1]=b;e[46]=f;f=R(C,2);g=f.data;g[0]=A(241);b=new Bq;b.j1=1536;b.j2=1791;g[1]=b;e[47]=f;f=R(C,2);g=f.data;g[0]=A(242);b=new Bq;b.j1=1792;b.j2=1871;g[1]=b;e[48]=f;f=R(C,2);g=f.data;g[0]=A(243);b=new Bq;b.j1
=1872;b.j2=1919;g[1]=b;e[49]=f;f=R(C,2);g=f.data;g[0]=A(244);b=new Bq;b.j1=1920;b.j2=1983;g[1]=b;e[50]=f;f=R(C,2);g=f.data;g[0]=A(245);b=new Bq;b.j1=2304;b.j2=2431;g[1]=b;e[51]=f;f=R(C,2);g=f.data;g[0]=A(246);b=new Bq;b.j1=2432;b.j2=2559;g[1]=b;e[52]=f;f=R(C,2);g=f.data;g[0]=A(247);b=new Bq;b.j1=2560;b.j2=2687;g[1]=b;e[53]=f;f=R(C,2);g=f.data;g[0]=A(248);b=new Bq;b.j1=2688;b.j2=2815;g[1]=b;e[54]=f;f=R(C,2);g=f.data;g[0]=A(249);b=new Bq;b.j1=2816;b.j2=2943;g[1]=b;e[55]=f;f=R(C,2);g=f.data;g[0]=A(250);b=new Bq;b.j1
=2944;b.j2=3071;g[1]=b;e[56]=f;f=R(C,2);g=f.data;g[0]=A(251);b=new Bq;b.j1=3072;b.j2=3199;g[1]=b;e[57]=f;f=R(C,2);g=f.data;g[0]=A(252);b=new Bq;b.j1=3200;b.j2=3327;g[1]=b;e[58]=f;f=R(C,2);g=f.data;g[0]=A(253);b=new Bq;b.j1=3328;b.j2=3455;g[1]=b;e[59]=f;f=R(C,2);g=f.data;g[0]=A(254);b=new Bq;b.j1=3456;b.j2=3583;g[1]=b;e[60]=f;f=R(C,2);g=f.data;g[0]=A(255);b=new Bq;b.j1=3584;b.j2=3711;g[1]=b;e[61]=f;f=R(C,2);g=f.data;g[0]=A(256);b=new Bq;b.j1=3712;b.j2=3839;g[1]=b;e[62]=f;f=R(C,2);g=f.data;g[0]=A(257);b=new Bq;b.j1
=3840;b.j2=4095;g[1]=b;e[63]=f;f=R(C,2);g=f.data;g[0]=A(258);b=new Bq;b.j1=4096;b.j2=4255;g[1]=b;e[64]=f;f=R(C,2);g=f.data;g[0]=A(259);b=new Bq;b.j1=4256;b.j2=4351;g[1]=b;e[65]=f;f=R(C,2);g=f.data;g[0]=A(260);b=new Bq;b.j1=4352;b.j2=4607;g[1]=b;e[66]=f;f=R(C,2);g=f.data;g[0]=A(261);b=new Bq;b.j1=4608;b.j2=4991;g[1]=b;e[67]=f;f=R(C,2);g=f.data;g[0]=A(262);b=new Bq;b.j1=4992;b.j2=5023;g[1]=b;e[68]=f;f=R(C,2);g=f.data;g[0]=A(263);b=new Bq;b.j1=5024;b.j2=5119;g[1]=b;e[69]=f;f=R(C,2);g=f.data;g[0]=A(264);b=new Bq;b.j1
=5120;b.j2=5759;g[1]=b;e[70]=f;f=R(C,2);g=f.data;g[0]=A(265);b=new Bq;b.j1=5760;b.j2=5791;g[1]=b;e[71]=f;f=R(C,2);g=f.data;g[0]=A(266);b=new Bq;b.j1=5792;b.j2=5887;g[1]=b;e[72]=f;f=R(C,2);g=f.data;g[0]=A(267);b=new Bq;b.j1=5888;b.j2=5919;g[1]=b;e[73]=f;f=R(C,2);g=f.data;g[0]=A(268);b=new Bq;b.j1=5920;b.j2=5951;g[1]=b;e[74]=f;f=R(C,2);g=f.data;g[0]=A(269);b=new Bq;b.j1=5952;b.j2=5983;g[1]=b;e[75]=f;f=R(C,2);g=f.data;g[0]=A(270);b=new Bq;b.j1=5984;b.j2=6015;g[1]=b;e[76]=f;f=R(C,2);g=f.data;g[0]=A(271);b=new Bq;b.j1
=6016;b.j2=6143;g[1]=b;e[77]=f;f=R(C,2);g=f.data;g[0]=A(272);b=new Bq;b.j1=6144;b.j2=6319;g[1]=b;e[78]=f;f=R(C,2);g=f.data;g[0]=A(273);b=new Bq;b.j1=6400;b.j2=6479;g[1]=b;e[79]=f;f=R(C,2);g=f.data;g[0]=A(274);b=new Bq;b.j1=6480;b.j2=6527;g[1]=b;e[80]=f;f=R(C,2);g=f.data;g[0]=A(275);b=new Bq;b.j1=6528;b.j2=6623;g[1]=b;e[81]=f;f=R(C,2);g=f.data;g[0]=A(276);b=new Bq;b.j1=6624;b.j2=6655;g[1]=b;e[82]=f;f=R(C,2);g=f.data;g[0]=A(277);b=new Bq;b.j1=6656;b.j2=6687;g[1]=b;e[83]=f;f=R(C,2);g=f.data;g[0]=A(278);b=new Bq;b.j1
=7424;b.j2=7551;g[1]=b;e[84]=f;f=R(C,2);g=f.data;g[0]=A(279);b=new Bq;b.j1=7552;b.j2=7615;g[1]=b;e[85]=f;f=R(C,2);g=f.data;g[0]=A(280);b=new Bq;b.j1=7616;b.j2=7679;g[1]=b;e[86]=f;f=R(C,2);g=f.data;g[0]=A(281);b=new Bq;b.j1=7680;b.j2=7935;g[1]=b;e[87]=f;f=R(C,2);g=f.data;g[0]=A(282);b=new Bq;b.j1=7936;b.j2=8191;g[1]=b;e[88]=f;f=R(C,2);g=f.data;g[0]=A(283);b=new Bq;b.j1=8192;b.j2=8303;g[1]=b;e[89]=f;f=R(C,2);g=f.data;g[0]=A(284);b=new Bq;b.j1=8304;b.j2=8351;g[1]=b;e[90]=f;f=R(C,2);g=f.data;g[0]=A(285);b=new Bq;b.j1
=8352;b.j2=8399;g[1]=b;e[91]=f;f=R(C,2);g=f.data;g[0]=A(286);b=new Bq;b.j1=8400;b.j2=8447;g[1]=b;e[92]=f;f=R(C,2);g=f.data;g[0]=A(287);b=new Bq;b.j1=8448;b.j2=8527;g[1]=b;e[93]=f;f=R(C,2);g=f.data;g[0]=A(288);b=new Bq;b.j1=8528;b.j2=8591;g[1]=b;e[94]=f;f=R(C,2);g=f.data;g[0]=A(289);b=new Bq;b.j1=8592;b.j2=8703;g[1]=b;e[95]=f;f=R(C,2);g=f.data;g[0]=A(290);b=new Bq;b.j1=8704;b.j2=8959;g[1]=b;e[96]=f;f=R(C,2);g=f.data;g[0]=A(291);b=new Bq;b.j1=8960;b.j2=9215;g[1]=b;e[97]=f;f=R(C,2);g=f.data;g[0]=A(292);b=new Bq;b.j1
=9216;b.j2=9279;g[1]=b;e[98]=f;f=R(C,2);g=f.data;g[0]=A(293);b=new Bq;b.j1=9280;b.j2=9311;g[1]=b;e[99]=f;f=R(C,2);g=f.data;g[0]=A(294);b=new Bq;b.j1=9312;b.j2=9471;g[1]=b;e[100]=f;f=R(C,2);g=f.data;g[0]=A(295);b=new Bq;b.j1=9472;b.j2=9599;g[1]=b;e[101]=f;f=R(C,2);g=f.data;g[0]=A(296);b=new Bq;b.j1=9600;b.j2=9631;g[1]=b;e[102]=f;e[103]=S(C,[A(297),BG(9632,9727)]);e[104]=S(C,[A(298),BG(9728,9983)]);e[105]=S(C,[A(299),BG(9984,10175)]);e[106]=S(C,[A(300),BG(10176,10223)]);e[107]=S(C,[A(301),BG(10224,10239)]);e[108]
=S(C,[A(302),BG(10240,10495)]);e[109]=S(C,[A(303),BG(10496,10623)]);e[110]=S(C,[A(304),BG(10624,10751)]);e[111]=S(C,[A(305),BG(10752,11007)]);e[112]=S(C,[A(306),BG(11008,11263)]);e[113]=S(C,[A(307),BG(11264,11359)]);e[114]=S(C,[A(308),BG(11392,11519)]);e[115]=S(C,[A(309),BG(11520,11567)]);e[116]=S(C,[A(310),BG(11568,11647)]);e[117]=S(C,[A(311),BG(11648,11743)]);e[118]=S(C,[A(312),BG(11776,11903)]);e[119]=S(C,[A(313),BG(11904,12031)]);e[120]=S(C,[A(314),BG(12032,12255)]);e[121]=S(C,[A(315),BG(12272,12287)]);e[122]
=S(C,[A(316),BG(12288,12351)]);e[123]=S(C,[A(317),BG(12352,12447)]);e[124]=S(C,[A(318),BG(12448,12543)]);e[125]=S(C,[A(319),BG(12544,12591)]);e[126]=S(C,[A(320),BG(12592,12687)]);e[127]=S(C,[A(321),BG(12688,12703)]);e[128]=S(C,[A(322),BG(12704,12735)]);e[129]=S(C,[A(323),BG(12736,12783)]);e[130]=S(C,[A(324),BG(12784,12799)]);e[131]=S(C,[A(325),BG(12800,13055)]);e[132]=S(C,[A(326),BG(13056,13311)]);e[133]=S(C,[A(327),BG(13312,19893)]);e[134]=S(C,[A(328),BG(19904,19967)]);e[135]=S(C,[A(329),BG(19968,40959)]);e[136]
=S(C,[A(330),BG(40960,42127)]);e[137]=S(C,[A(331),BG(42128,42191)]);e[138]=S(C,[A(332),BG(42752,42783)]);e[139]=S(C,[A(333),BG(43008,43055)]);e[140]=S(C,[A(334),BG(44032,55203)]);e[141]=S(C,[A(335),BG(55296,56191)]);e[142]=S(C,[A(336),BG(56192,56319)]);e[143]=S(C,[A(337),BG(56320,57343)]);e[144]=S(C,[A(338),BG(57344,63743)]);e[145]=S(C,[A(339),BG(63744,64255)]);e[146]=S(C,[A(340),BG(64256,64335)]);e[147]=S(C,[A(341),BG(64336,65023)]);e[148]=S(C,[A(342),BG(65024,65039)]);e[149]=S(C,[A(343),BG(65040,65055)]);e[150]
=S(C,[A(344),BG(65056,65071)]);e[151]=S(C,[A(345),BG(65072,65103)]);e[152]=S(C,[A(346),BG(65104,65135)]);e[153]=S(C,[A(347),BG(65136,65279)]);e[154]=S(C,[A(348),BG(65280,65519)]);e[155]=S(C,[A(47),BG(0,1114111)]);f=R(C,2);g=f.data;g[0]=A(349);b=new PX;AIS(b);g[1]=b;e[156]=f;e[157]=S(C,[A(350),Cb(0,1)]);e[158]=S(C,[A(351),GA(62,1)]);e[159]=S(C,[A(352),Cb(1,1)]);e[160]=S(C,[A(353),Cb(2,1)]);e[161]=S(C,[A(354),Cb(3,0)]);e[162]=S(C,[A(355),Cb(4,0)]);e[163]=S(C,[A(356),Cb(5,1)]);e[164]=S(C,[A(357),GA(448,1)]);e[165]
=S(C,[A(358),Cb(6,1)]);e[166]=S(C,[A(359),Cb(7,0)]);e[167]=S(C,[A(360),Cb(8,1)]);e[168]=S(C,[A(361),GA(3584,1)]);e[169]=S(C,[A(362),Cb(9,1)]);e[170]=S(C,[A(363),Cb(10,1)]);e[171]=S(C,[A(364),Cb(11,1)]);e[172]=S(C,[A(365),GA(28672,0)]);e[173]=S(C,[A(366),Cb(12,0)]);e[174]=S(C,[A(367),Cb(13,0)]);e[175]=S(C,[A(368),Cb(14,0)]);e[176]=S(C,[A(369),AFN(983040,1,1)]);e[177]=S(C,[A(370),Cb(15,0)]);e[178]=S(C,[A(371),Cb(16,1)]);e[179]=S(C,[A(372),Cb(18,1)]);e[180]=S(C,[A(373),AHH(19,0,1)]);e[181]=S(C,[A(374),GA(1643118592,
1)]);e[182]=S(C,[A(375),Cb(20,0)]);e[183]=S(C,[A(376),Cb(21,0)]);e[184]=S(C,[A(377),Cb(22,0)]);e[185]=S(C,[A(378),Cb(23,0)]);e[186]=S(C,[A(379),Cb(24,1)]);e[187]=S(C,[A(380),GA(2113929216,1)]);e[188]=S(C,[A(381),Cb(25,1)]);e[189]=S(C,[A(382),Cb(26,0)]);e[190]=S(C,[A(383),Cb(27,0)]);e[191]=S(C,[A(384),Cb(28,1)]);e[192]=S(C,[A(385),Cb(29,0)]);e[193]=S(C,[A(386),Cb(30,0)]);Ta=d;};
function Bu(){let a=this;C.call(a);a.nD=null;a.pn=null;}
let AIS=a=>{return;},
AVh=(a,b)=>{if(!b&&a.nD===null)a.nD=a.fT();else if(b&&a.pn===null)a.pn=EB(a.fT(),1);if(b)return a.pn;return a.nD;};
function N7(){let a=this;HA.call(a);a.n8=0;a.n5=0;}
let L9=a=>{let b,c,d,e,f,g,h;b=a.n8;c=a.n5;if(c==2147483647)d=A(62);else{d=new Ba;d.jA=G(20);d=(L(d,d.jz,c,10)).T();}e=new J;e.jA=G(16);c=e.jz;Bf(e,c,c+1|0);e.jA.data[c]=123;L(e,e.jz,b,10);b=e.jz;Bf(e,b,b+1|0);e.jA.data[b]=44;f=e.jz;if(d===null)d=A(2);F(e,f,d);b=e.jz;Bf(e,b,b+1|0);g=e.jA;h=g.data;h[b]=125;d=new H;b=e.jz;c=h.length;if(b>=0&&b<=(c-0|0)){d.jB=K(g.data,0,b);return d;}d=new I;d.jC=1;d.jD=1;Bj(d);B(d);};
let OM=E(Ca);
let AGP=(a,b,c,d)=>{return b;},
AKR=a=>{return A(387);},
AK4=(a,b)=>{return 0;};
function Bh(){let a=this;C.call(a);a.jS=null;a.ld=0;}
let Mt=(a,b)=>{let c,d,e;if(b<0){c=new I;c.jC=1;c.jD=1;B(c);}d=b/32|0;if(b>=a.ld){I4(a,d+1|0);a.ld=b+1|0;}e=a.jS.data;e[d]=e[d]|1<<(b%32|0);},
IA=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=Ci(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.ld){I4(a,e+1|0);a.ld=c;}if(d==e){f=a.jS.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.jS.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new I;i.jC=1;i.jD=1;B(i);},
Nt=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.jC=1;c.jD=1;B(c);}d=b/32|0;e=a.jS.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.ld-1|0))HR(a);}},
Xu=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.ld;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.jS.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.jS.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}HR(a);return;}i=new I;i.jC=1;i.jD=1;B(i);},
CC=(a,b)=>{let c,d,e;if(b<0){c=new I;c.jC=1;c.jD=1;B(c);}d=b/32|0;e=a.jS.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
HW=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.jC=1;c.jD=1;B(c);}d=a.ld;if(b>=d)return (-1);e=b/32|0;f=a.jS.data;g=f[e]>>>(b%32|0)|0;if(g)return DZ(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+DZ(f[g])|0;g=g+1|0;}return (-1);},
ALB=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new I;c.jC=1;c.jD=1;B(c);}d=a.ld;if(b>=d)return b;e=b/32|0;f=a.jS.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return DZ(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+DZ(f[h]^(-1))|0;h=h+1|0;}return d;},
I4=(a,b)=>{let c,d,e,f,g,h;c=a.jS.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=W(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.jS=g;},
HR=a=>{let b,c,d;b=(a.ld+31|0)/32|0;a.ld=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Ov(a.jS.data[c]);if(d<32)break;c=c+(-1)|0;a.ld=a.ld-32|0;}a.ld=a.ld-d|0;}},
I3=(a,b)=>{let c,d,e,f,g;c=a.jS.data;d=c.length;e=b.jS.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
DO=(a,b)=>{let c,d,e,f,g,h,i;c=a.jS.data;d=c.length;e=b.jS.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.ld;i=b.ld;if(h<i)i=h;a.ld=i;HR(a);},
GJ=(a,b)=>{let c,d,e,f,g;c=a.jS.data;d=c.length;e=b.jS.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}HR(a);},
GC=(a,b)=>{let c,d,e,f,g;c=a.ld;d=b.ld;if(c>d)d=c;a.ld=d;I4(a,(d+31|0)/32|0);e=a.jS.data;c=e.length;f=b.jS.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
Ge=(a,b)=>{let c,d,e,f,g;c=a.ld;d=b.ld;if(c>d)d=c;a.ld=d;I4(a,(d+31|0)/32|0);e=a.jS.data;c=e.length;f=b.jS.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}HR(a);};
function NQ(){let a=this;Cj.call(a);a.rH=null;a.sz=0;}
let AFj=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.mm;f=d.kj;g=b+1|0;f=Ci(g,f);if(f>0){d.mc=1;return (-1);}if(b>=0&&b<c.jB.length){h=c.jB.charCodeAt(b);if(!a.rH.gh(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.jB.length){if((c.jB.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new V;c.jC=1;c.jD=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.jB.length){if(!((c.jB.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new V;c.jC=1;c.jD=1;B(c);}}return a.jJ.fK(g,c,d);}c=new V;c.jC
=1;c.jD=1;B(c);},
ALd=a=>{let b,c,d,e,f,g,h,i;b=!a.sz?A(388):A(389);c=a.rH.T();d=new J;d.jA=G(16);F(d,d.jz,A(390));F(d,d.jz,b);e=d.jz;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
function G7(){let a=this;Cj.call(a);a.oW=null;a.oN=null;}
let YD=(a,b,c,d)=>{let e;e=a.oW.fK(b,c,d);if(e<0)e=AFj(a.oN,b,c,d);if(e>=0)return e;return (-1);},
AKB=(a,b)=>{a.jJ=b;a.oN.jJ=b;a.oW.e$(b);},
ALF=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.oW;c=a.oN;d=new J;d.jA=G(16);F(d,d.jz,A(391));e=d.jz;if(b===null)b=A(2);else{f=b.jT;b=b.fL();g=new J;D1(g);F_(g,60);IB(g,f);F_(g,58);IB(g,b);F_(g,62);b=LZ(g);}F(d,e,b);F(d,d.jz,A(392));e=d.jz;if(c===null)b=A(2);else{b=c.jT;f=!c.sz?A(388):A(389);c=c.rH.T();g=Ez();LU(LU(LU(g,A(390)),f),c);f=EK(g);c=new J;D1(c);F_(c,60);IB(c,b);F_(c,58);IB(c,f);F_(c,62);b=LZ(c);}F(d,e,b);b=new H;h=d.jA;i=h.data;j=d.jz;k=i.length;if(j>=0&&j<=(k-0|0)){b.jB=K(h.data,0,j);return b;}b=new I;b.jC=
1;b.jD=1;Bj(b);B(b);},
ZU=(a,b)=>{return 1;},
Zh=(a,b)=>{return 1;};
function DH(){let a=this;Cj.call(a);a.l_=null;a.pz=0;}
let ACD=(a,b,c,d)=>{let e,f,g,h;a:{e=d.kj;if(b<e){f=b+1|0;if(b>=0&&b<c.jB.length){g=c.jB.charCodeAt(b);if(a.gh(g)){h=a.jJ.fK(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.jB.length){f=c.jB.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.gh(((g&1023)<<10|f&1023)+65536|0))break a;else return a.jJ.fK(e,c,d);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}}return (-1);},
AQO=a=>{let b,c,d,e,f,g,h,i;b=!a.pz?A(388):A(389);c=a.l_.T();d=new J;d.jA=G(16);F(d,d.jz,A(390));F(d,d.jz,b);e=d.jz;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
ADy=(a,b)=>{return a.l_.gh(b);},
Yt=(a,b)=>{let c,d;if(b instanceof Eh)return a.l_.gh(b.pa);if(b instanceof D0)return a.l_.gh(b.lZ);if(b instanceof DH){c=a.l_;b=b.l_;return c.ge()!==null&&b.ge()!==null?I3(c.ge(),b.ge()):1;}if(!(b instanceof D3))return 1;c=a.l_;d=b.mO;return c.ge()!==null&&d.ge()!==null?I3(c.ge(),d.ge()):1;},
AUo=a=>{return a.l_;},
AOe=(a,b)=>{a.jJ=b;},
ACV=(a,b)=>{return 1;};
let JQ=E(DH);
let AGb=(a,b)=>{let c;c=a.l_;if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}b=Cu(BU,b);if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}return c.gh(Cu(BV,b));},
ARj=a=>{let b,c,d,e,f,g,h,i;b=!a.pz?A(388):A(389);c=a.l_.T();d=new J;d.jA=G(16);F(d,d.jz,A(393));F(d,d.jz,b);e=d.jz;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
function Kr(){let a=this;Cv.call(a);a.rK=null;a.tg=0;}
let AGS=(a,b,c)=>{let d;d=a.rK;if(b>=0&&b<c.jB.length){b=c.jB.charCodeAt(b);if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}b=Cu(BU,b)&65535;if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}return !d.gh(Cu(BV,b)&65535)?(-1):1;}c=new V;c.jC=1;c.jD=1;B(c);},
ZA=a=>{let b,c,d,e,f,g,h,i;b=!a.tg?A(388):A(389);c=a.rK.T();d=new J;d.jA=G(16);F(d,d.jz,A(393));F(d,d.jz,b);e=d.jz;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
function D3(){let a=this;Cv.call(a);a.mO=null;a.tL=0;}
let V$=(a,b,c)=>{let d;d=a.mO;if(b>=0&&b<c.jB.length)return !d.gh(c.jB.charCodeAt(b))?(-1):1;c=new V;c.jC=1;c.jD=1;B(c);},
AG$=a=>{let b,c,d,e,f,g,h,i;b=!a.tL?A(388):A(389);c=a.mO.T();d=new J;d.jA=G(16);F(d,d.jz,A(390));F(d,d.jz,b);e=d.jz;if(c===null)c=A(2);F(d,e,c);b=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
AK6=(a,b)=>{let c,d;if(b instanceof D0)return a.mO.gh(b.lZ);if(b instanceof D3){c=a.mO;b=b.mO;return c.ge()!==null&&b.ge()!==null?I3(c.ge(),b.ge()):1;}if(!(b instanceof DH)){if(!(b instanceof Eh))return 1;return 0;}c=a.mO;d=b.l_;return c.ge()!==null&&d.ge()!==null?I3(c.ge(),d.ge()):1;};
function Ig(){let a=this;Cj.call(a);a.nU=null;a.nL=null;a.qU=0;}
let AIe=(a,b)=>{a.jJ=b;},
AM6=a=>{let b,c,d,e,f,g,h,i;if(a.nL===null){b=new H;c=a.nU;b.jB=K(c.data,0,c.data.length);a.nL=b;}d=a.nL;b=new J;b.jA=G(16);F(b,b.jz,A(394));e=b.jz;if(d===null)d=A(2);F(b,e,d);f=new H;c=b.jA;g=c.data;h=b.jz;i=g.length;if(h>=0&&h<=(i-0|0)){f.jB=K(c.data,0,h);return f;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
Wv=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.kj;f=W(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.jB.length){j=c.jB.charCodeAt(b);k=ABE(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.qU;if(b!=m)return (-1);while(true){if(l>=m)return a.jJ.fK(i,c,d);if(f[l]!=a.nU.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.jB.length){j=c.jB.charCodeAt(i);g=j-4449|0;}else{c=new V;c.jC=1;c.jD=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.jB.length){j=c.jB.charCodeAt(b);h
=j-4519|0;}else{c=new V;c.jC=1;c.jD=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.qU==3){m=k[0];f=a.nU.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.jJ.fK(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.qU==2){m=k[0];f=a.nU.data;if(m==f[0]&&k[1]==f[1]){b=a.jJ.fK(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new V;c.jC=1;c.jD=1;B(c);},
ZI=(a,b)=>{let c,d,e;a:{if(b instanceof Ig){b=b;if(b.nL===null){c=new H;d=b.nU;c.jB=K(d.data,0,d.data.length);b.nL=c;}c=b.nL;if(a.nL===null){b=new H;d=a.nU;b.jB=K(d.data,0,d.data.length);a.nL=b;}b=a.nL;if(c===b)e=1;else if(!(b instanceof H))e=0;else{b=b;e=c.jB!==b.jB?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
APk=(a,b)=>{return 1;};
function D0(){Cv.call(this);this.lZ=0;}
let AGu=a=>{return 1;},
AER=(a,b,c)=>{let d;d=a.lZ;if(b>=0&&b<c.jB.length)return d!=c.jB.charCodeAt(b)?(-1):1;c=new V;c.jC=1;c.jD=1;B(c);},
ACx=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof H){e=d.kj;while(true){if(b>=e)return (-1);f=Hx(c,a.lZ,b);if(f<0)return (-1);g=a.jJ;b=f+1|0;if(g.fK(b,c,d)>=0)break;}return f;}h=d.kj;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.kj){d.mc=1;e=(-1);}else{e=a.lZ;if(b<0)break a;if(b>=c.jB.length)break a;e=e!=c.jB.charCodeAt(b)?(-1):1;e=e<0?(-1):a.jJ.fK(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new V;Y(c);B(c);},
AGE=(a,b,c,d,e)=>{let f;if(d instanceof H){a:{while(true){if(c<b)return (-1);c=Fb(d,a.lZ,c);if(c<0)break a;if(c<b)break a;if(a.jJ.fK(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.kj){e.mc=1;f=(-1);}else{f=a.lZ;if(c<0)break b;if(c>=d.jB.length)break b;f=f!=d.jB.charCodeAt(c)?(-1):1;f=f<0?(-1):a.jJ.fK(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new V;Y(d);B(d);},
APD=a=>{let b,c,d,e,f,g,h;b=a.lZ;c=new J;c.jA=G(16);d=c.jz;Bf(c,d,d+1|0);e=c.jA;f=e.data;f[d]=b;g=new H;d=c.jz;h=f.length;if(d>=0&&d<=(h-0|0)){g.jB=K(e.data,0,d);return g;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
AO_=(a,b)=>{let c,d,e,f;if(b instanceof D0)return b.lZ!=a.lZ?0:1;if(!(b instanceof D3)){if(b instanceof DH)return b.gh(a.lZ);if(!(b instanceof Eh))return 1;return 0;}b=b;c=a.lZ;d=new H;e=G(1);f=e.data;f[0]=c;d.jB=K(e.data,0,f.length);b=b.mO;if(0>=d.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}return (!b.gh(d.jB.charCodeAt(0))?(-1):1)<=0?0:1;};
function M6(){Cv.call(this);this.rd=0;}
let Wh=(a,b,c)=>{let d;d=a.rd;if(b>=0&&b<c.jB.length){b=c.jB.charCodeAt(b);if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}b=Cu(BU,b)&65535;if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}return d!=(Cu(BV,b)&65535)?(-1):1;}c=new V;c.jC=1;c.jD=1;B(c);},
AKy=a=>{let b,c,d,e,f,g,h;b=a.rd;c=new J;c.jA=G(16);F(c,c.jz,A(395));d=c.jz;Bf(c,d,d+1|0);e=c.jA;f=e.data;f[d]=b;g=new H;d=c.jz;h=f.length;if(d>=0&&d<=(h-0|0)){g.jB=K(e.data,0,d);return g;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);};
function JN(){let a=this;Cv.call(a);a.so=0;a.sK=0;}
let W3=(a,b,c)=>{let d;d=a.so;if(b>=0&&b<c.jB.length){a:{b:{if(d!=c.jB.charCodeAt(b)){d=a.sK;if(b<0)break a;if(b>=c.jB.length)break a;if(d!=c.jB.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);},
AFd=a=>{let b,c,d,e,f,g,h;b=a.so;c=new J;c.jA=G(16);F(c,c.jz,A(396));d=c.jz;Bf(c,d,d+1|0);e=c.jA;f=e.data;f[d]=b;g=new H;d=c.jz;h=f.length;if(d>=0&&d<=(h-0|0)){g.jB=K(e.data,0,d);return g;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);};
function Ff(){let a=this;Cj.call(a);a.oL=0;a.np=null;a.ow=null;a.os=0;}
let AQ9=(a,b)=>{a.jJ=b;},
AKC=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=W(4);f=d.kj;if(b>=f)return (-1);g=Lt(a,b,c,f);h=b+a.oL|0;i=P5.gw(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;DD(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=Lt(a,h,c,f);while(b<4){if(!ALc(g)){k=b+1|0;i[b]=g;}else{j=(P5.gw(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.oL|0;if(h>=f){b=k;break a;}g=Lt(a,h,c,f);b=k;}}}if(b!=a.os)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.jJ.fK(h,c,d);if(j[g]!=a.ow.data[g])break;g
=g+1|0;}return (-1);},
AKi=a=>{let b,c,d,e,f,g,h,i;if(a.np===null){b=new J;b.jA=G(16);c=0;while(c<a.os){d=ES(a.ow.data[c]);e=d.data.length;JX(b,b.jz,d,0,e);c=c+1|0;}f=new H;d=b.jA;g=d.data;h=b.jz;e=g.length;if(h>=0&&h<=(e-0|0)){f.jB=K(d.data,0,h);a.np=f;}else{b=new I;Y(b);B(b);}}i=a.np;b=new J;b.jA=G(16);F(b,b.jz,A(397));c=b.jz;if(i===null)i=A(2);F(b,c,i);f=new H;d=b.jA;g=d.data;h=b.jz;e=g.length;if(h>=0&&h<=(e-0|0)){f.jB=K(d.data,0,h);return f;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
Lt=(a,b,c,d)=>{let e,f,g,h;a:{a.oL=1;if(b>=(d-1|0)){if(b>=0&&b<c.jB.length){e=c.jB.charCodeAt(b);break a;}c=new V;c.jC=1;c.jD=1;B(c);}d=b+1|0;if(b>=0&&b<c.jB.length){e=c.jB.charCodeAt(b);if(d>=0&&d<c.jB.length){f=c.jB.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=ZT(g,0,h.length);a.oL=2;}break a;}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}return e;},
AGU=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof Ff){b=b;if(b.np===null){c=new J;c.jA=G(16);d=0;while(d<b.os){e=ES(b.ow.data[d]);f=e.data.length;JX(c,c.jz,e,0,f);d=d+1|0;}g=new H;e=c.jA;h=e.data;i=c.jz;f=h.length;if(i>=0&&i<=(f-0|0)){g.jB=K(e.data,0,i);b.np=g;}else{b=new I;Y(b);B(b);}}g=b.np;if(a.np===null){b=new J;b.jA=G(16);d=0;while(d<a.os){e=ES(a.ow.data[d]);f=e.data.length;JX(b,b.jz,e,0,f);d=d+1|0;}c=new H;e=b.jA;h=e.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0)){c.jB=K(e.data,0,f);a.np=c;}else{b=new I;Y(b);B(b);}}b
=a.np;if(g===b)d=1;else if(!(b instanceof H))d=0;else{b=b;d=g.jB!==b.jB?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
AMk=(a,b)=>{return 1;};
let Vy=E(Ff);
let SZ=E(Ff);
let V2=E(Dx);
let AA4=(a,b,c,d)=>{let e;while(true){e=a.kd.fK(b,c,d);if(e<=0)break;b=e;}return a.jJ.fK(b,c,d);};
let PP=E(Dx);
let AJd=(a,b,c,d)=>{let e;e=a.kd.fK(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.kd.fK(e,c,d);if(b<=e)break;e=b;}b=e;}return a.jJ.fK(b,c,d);};
let GG=E(Dx);
let AN9=(a,b,c,d)=>{let e;if(!a.kd.gk(d))return a.jJ.fK(b,c,d);e=a.kd.fK(b,c,d);if(e>=0)return e;return a.jJ.fK(b,c,d);},
AP4=(a,b)=>{a.jJ=b;a.kd.e$(b);};
let Pz=E(GG);
let AGC=(a,b,c,d)=>{let e;e=a.kd.fK(b,c,d);if(e<=0)e=b;return a.jJ.fK(e,c,d);},
AJP=(a,b)=>{a.jJ=b;};
function F1(){let a=this;Dx.call(a);a.nu=null;a.mI=0;}
let ASo=(a,b,c,d)=>{let e,f,g,h;e=a.mI;e=d.m$.data[e];if(!a.kd.gk(d))return a.jJ.fK(b,c,d);if(e>=a.nu.n5)return a.jJ.fK(b,c,d);f=a.mI;e=e+1|0;d.m$.data[f]=e;g=a.kd.fK(b,c,d);if(g>=0){b=a.mI;d.m$.data[b]=0;return g;}g=a.mI;e=e+(-1)|0;h=d.m$.data;h[g]=e;if(e>=a.nu.n8)return a.jJ.fK(b,c,d);h[g]=0;return (-1);},
AQc=a=>{return L9(a.nu);};
let N$=E(F1);
let AFF=(a,b,c,d)=>{let e,f,g;e=0;f=a.nu.n5;a:{while(true){g=a.kd.fK(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.nu.n8)return (-1);return a.jJ.fK(b,c,d);};
let Rm=E(Dx);
let ARn=(a,b,c,d)=>{let e;if(!a.kd.gk(d))return a.jJ.fK(b,c,d);e=a.jJ.fK(b,c,d);if(e>=0)return e;return a.kd.fK(b,c,d);};
let Qw=E(GG);
let ZW=(a,b,c,d)=>{let e;if(!a.kd.gk(d))return a.jJ.fK(b,c,d);e=a.jJ.fK(b,c,d);if(e<0)e=a.kd.fK(b,c,d);return e;};
let TD=E(F1);
let X5=(a,b,c,d)=>{let e,f,g;e=a.mI;f=d.m$.data[e];if(!a.kd.gk(d))return a.jJ.fK(b,c,d);g=a.nu;if(f>=g.n5){e=a.mI;d.m$.data[e]=0;return a.jJ.fK(b,c,d);}if(f<g.n8){e=a.mI;d.m$.data[e]=f+1|0;e=a.kd.fK(b,c,d);}else{e=a.jJ.fK(b,c,d);if(e>=0){b=a.mI;d.m$.data[b]=0;return e;}e=a.mI;d.m$.data[e]=f+1|0;e=a.kd.fK(b,c,d);}return e;};
let Rn=E(Eq);
let AR3=(a,b,c,d)=>{let e;e=d.kj;if(e>b)return a.jJ.f6(b,e,c,d);return a.jJ.fK(b,c,d);},
AOp=(a,b,c,d)=>{let e;e=d.kj;if(a.jJ.f6(b,e,c,d)>=0)return b;return (-1);},
ALM=a=>{return A(398);};
function OV(){Eq.call(this);this.rG=null;}
let AK8=(a,b,c,d)=>{let e,f,g;e=d.kj;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.rG;if(f<0)break;if(f>=c.jB.length)break;if(g.gA(c.jB.charCodeAt(f)))break a;f=f+1|0;}c=new V;c.jC=1;c.jD=1;B(c);}if(f>=0)e=f;if(e>b)return a.jJ.f6(b,e,c,d);return a.jJ.fK(b,c,d);},
WD=(a,b,c,d)=>{let e,f,g,h,i;e=d.kj;f=a.jJ.fC(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.rG;if(g<0)break;if(g>=c.jB.length)break;if(h.gA(c.jB.charCodeAt(g)))break a;g=g+1|0;}c=new V;c.jC=1;c.jD=1;B(c);}if(g>=0)e=g;g=a.jJ.f6(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.rG;if(i<0)break;if(i>=c.jB.length)break;if(d.gA(c.jB.charCodeAt(i)))break b;i=i+(-1)|0;}c=new V;c.jC=1;c.jD=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
ANd=a=>{return A(399);};
let Ho=E();
let Ga=null,FZ=null;
let V4=E(Dv);
let X$=(a,b,c,d)=>{let e;a:{while(true){if((b+a.kH.f3()|0)>d.kj)break a;e=a.kH.f4(b,c);if(e<1)break;b=b+e|0;}}return a.jJ.fK(b,c,d);};
let UO=E(E$);
let AI8=(a,b,c,d)=>{let e;if((b+a.kH.f3()|0)<=d.kj){e=a.kH.f4(b,c);if(e>=1)b=b+e|0;}return a.jJ.fK(b,c,d);};
let Pq=E(Fa);
let ANv=(a,b,c,d)=>{let e,f,g,h,i;e=a.oS;f=e.n8;g=e.n5;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.kH.f3()|0)>d.kj)break a;i=a.kH.f4(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.jJ.fK(b,c,d);}if((b+a.kH.f3()|0)>d.kj){d.mc=1;return (-1);}i=a.kH.f4(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let Qo=E(Dv);
let AKY=(a,b,c,d)=>{let e;while(true){e=a.jJ.fK(b,c,d);if(e>=0)break;if((b+a.kH.f3()|0)<=d.kj){e=a.kH.f4(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let S2=E(E$);
let Yk=(a,b,c,d)=>{let e;e=a.jJ.fK(b,c,d);if(e>=0)return e;return a.kd.fK(b,c,d);};
let Q4=E(Fa);
let ANO=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.oS;f=e.n8;g=e.n5;h=0;while(true){if(h>=f){a:{while(true){i=a.jJ.fK(b,c,d);if(i>=0)break;if((b+a.kH.f3()|0)<=d.kj){i=a.kH.f4(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.kH.f3()|0)>d.kj){d.mc=1;return (-1);}j=a.kH.f4(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let Lm=E(Ca);
let AHF=(a,b,c,d)=>{if(b&&!(d.oI&&b==d.mm))return (-1);return a.jJ.fK(b,c,d);},
AFV=(a,b)=>{return 0;},
AI9=a=>{return A(400);};
function KO(){Ca.call(this);this.uc=0;}
let Ze=(a,b,c,d)=>{let e,f,g;if(b>=d.kj)e=32;else if(b>=0&&b<c.jB.length)e=c.jB.charCodeAt(b);else{c=new V;c.jC=1;c.jD=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.jB.length)f=c.jB.charCodeAt(f);else{c=new V;c.jC=1;c.jD=1;B(c);}}g=d.rV?0:d.mm;return (e!=32&&!Qz(a,e,b,g,c)?0:1)^(f!=32&&!Qz(a,f,b-1|0,g,c)?0:1)^a.uc?(-1):a.jJ.fK(b,c,d);},
ZD=(a,b)=>{return 0;},
ASj=a=>{return A(401);},
Qz=(a,b,c,d,e)=>{let f;a:{b:{switch(CN(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(CN(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.jB.length)break c;e:{f:{f=e.jB.charCodeAt(c);switch(CN(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(CN(f)!=6)return 1;}}return 1;}e=new V;e.jC=1;e.jD=1;B(e);}return 0;};
let OP=E(Ca);
let AGh=(a,b,c,d)=>{if(b!=d.q0)return (-1);return a.jJ.fK(b,c,d);},
ASg=(a,b)=>{return 0;},
YX=a=>{return A(402);};
function M4(){Ca.call(this);this.pu=0;}
let ALZ=(a,b,c,d)=>{let e,f,g;e=!d.oI?c.jB.length:d.kj;if(b>=e){f=a.pu;d.kX.data[f]=0;return a.jJ.fK(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.jB.length){if(c.jB.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.jB.length){if(c.jB.charCodeAt(g)!=10)break a;f=a.pu;d.kX.data[f]=0;return a.jJ.fK(b,c,d);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.jB.length){f=c.jB.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new V;c.jC
=1;c.jD=1;B(c);}}return (-1);}e=a.pu;d.kX.data[e]=0;return a.jJ.fK(b,c,d);},
AAP=(a,b)=>{let c,d,e;c=a.pu;d=b.kX.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AIl=a=>{return A(403);};
let U3=E(Ca);
let AKq=(a,b,c,d)=>{if(b<(!d.rV?d.kj:c.jB.length))return (-1);d.mc=1;d.yU=1;return a.jJ.fK(b,c,d);},
We=(a,b)=>{return 0;},
AEy=a=>{return A(404);};
function Og(){Ca.call(this);this.vP=null;}
let AAu=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.kj){if(!b)break b;if(d.oI&&b==d.mm)break b;e=a.vP;f=b-1|0;if(f>=0&&f<c.jB.length){f=c.jB.charCodeAt(f);if(b<0)break a;if(b>=c.jB.length)break a;if(!e.gC(f,c.jB.charCodeAt(b)))break c;else break b;}c=new V;c.jC=1;c.jD=1;B(c);}}return (-1);}return a.jJ.fK(b,c,d);}c=new V;c.jC=1;c.jD=1;B(c);},
AD5=(a,b)=>{return 0;},
Yx=a=>{return A(405);};
let UZ=E(Cj);
let ARs=(a,b,c,d)=>{let e,f,g,h,i;e=d.kj;f=b+1|0;if(f>e){d.mc=1;return (-1);}if(b>=0&&b<c.jB.length){g=Ci(c.jB.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.jB.length){h=c.jB.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.jJ.fK(i,c,d);}c=new V;c.jC=1;c.jD=1;B(c);}}}return a.jJ.fK(f,c,d);}c=new V;c.jC=1;c.jD=1;B(c);},
ABZ=a=>{return A(406);},
ZL=(a,b)=>{a.jJ=b;},
AJX=a=>{return (-2147483602);},
ZJ=(a,b)=>{return 1;};
function Pk(){Cj.call(this);this.tr=null;}
let AKk=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.kj;f=b+1|0;if(f>e){d.mc=1;return (-1);}if(b>=0&&b<c.jB.length){g=c.jB.charCodeAt(b);h=Ci(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.jB.length){i=c.jB.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.tr.gA(((g&1023)<<10|i&1023)+65536|0)?(-1):a.jJ.fK(j,c,d);}c=new V;c.jC=1;c.jD=1;B(c);}}}return a.tr.gA(g)?(-1):a.jJ.fK(f,c,d);}c=new V;c.jC=1;c.jD=1;B(c);},
AA2=a=>{return A(407);},
ANb=(a,b)=>{a.jJ=b;},
V5=a=>{return (-2147483602);},
ARX=(a,b)=>{return 1;};
function UP(){Ca.call(this);this.rR=0;}
let AG6=(a,b,c,d)=>{let e,f;e=!d.oI?c.jB.length:d.kj;if(b>=e){e=a.rR;d.kX.data[e]=0;return a.jJ.fK(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.jB.length){if(c.jB.charCodeAt(b)!=10)break a;else{f=a.rR;d.kX.data[f]=1;return a.jJ.fK(b+1|0,c,d);}}c=new V;c.jC=1;c.jD=1;B(c);}}return (-1);},
ADG=(a,b)=>{let c,d,e;c=a.rR;d=b.kX.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AHR=a=>{return A(403);};
function Sg(){Ca.call(this);this.rY=0;}
let AKo=(a,b,c,d)=>{let e;if((!d.oI?c.jB.length-b|0:d.kj-b|0)<=0){e=a.rY;d.kX.data[e]=0;return a.jJ.fK(b,c,d);}if(b>=0&&b<c.jB.length){if(c.jB.charCodeAt(b)!=10)return (-1);e=a.rY;d.kX.data[e]=1;return a.jJ.fK(b+1|0,c,d);}c=new V;c.jC=1;c.jD=1;B(c);},
ADs=(a,b)=>{let c,d,e;c=a.rY;d=b.kX.data;e=!d[c]?0:1;d[c]=(-1);return e;},
XD=a=>{return A(408);};
function NH(){Ca.call(this);this.pZ=0;}
let AFM=(a,b,c,d)=>{let e,f,g;e=!d.oI?c.jB.length-b|0:d.kj-b|0;if(!e){e=a.pZ;d.kX.data[e]=0;return a.jJ.fK(b,c,d);}a:{if(e<2){if(b>=0&&b<c.jB.length){f=c.jB.charCodeAt(b);g=97;break a;}c=new V;c.jC=1;c.jD=1;B(c);}if(b>=0&&b<c.jB.length){f=c.jB.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.jB.length){g=c.jB.charCodeAt(e);break a;}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.pZ;d.kX.data[e]=0;return a.jJ.fK(b,c,d);case 13:if(g!=10){e=a.pZ;d.kX.data[e]=0;return a.jJ.fK(b,
c,d);}e=a.pZ;d.kX.data[e]=0;return a.jJ.fK(b,c,d);default:}return (-1);},
AAU=(a,b)=>{let c,d,e;c=a.pZ;d=b.kX.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AD9=a=>{return A(409);};
function Gx(){let a=this;Cj.call(a);a.qd=0;a.oZ=0;}
let Yc=(a,b,c,d)=>{let e,f,g,h,i;e=Ik(a,d);if(e!==null&&(b+e.jB.length|0)<=d.kj){f=0;a:{b:{c:{d:{while(true){if(f>=e.jB.length){g=a.oZ;d.kX.data[g]=e.jB.length;return a.jJ.fK(b+e.jB.length|0,c,d);}if(f<0)break c;if(f>=e.jB.length)break c;h=e.jB.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.jB.length)break d;if(h!=c.jB.charCodeAt(i)){if(f<0)break a;if(f>=e.jB.length)break a;g=FY(e.jB.charCodeAt(f));if(i<0)break b;if(i>=c.jB.length)break b;if(g!=c.jB.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new V;c.jC=1;c.jD
=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}return (-1);},
AMe=(a,b)=>{a.jJ=b;},
Ik=(a,b)=>{let c,d,e,f,g;c=a.qd;d=b.lp.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.pA.jB.length?Cm(b.pA,f,g):null;},
XL=a=>{let b,c,d,e,f,g,h;b=a.kY;c=new J;c.jA=G(16);F(c,c.jz,A(410));L(c,c.jz,b,10);d=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){d.jB=K(e.data,0,g);return d;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
AMM=(a,b)=>{let c,d,e;c=a.oZ;d=b.kX.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let UX=E(Gx);
let AA3=(a,b,c,d)=>{let e,f,g;e=Ik(a,d);if(e!==null&&(b+e.jB.length|0)<=d.kj){f=!Mn(c,e,b)?(-1):e.jB.length;if(f<0)return (-1);g=a.oZ;d.kX.data[g]=f;return a.jJ.fK(b+f|0,c,d);}return (-1);},
APs=(a,b,c,d)=>{let e,f,g;e=Ik(a,d);f=d.mm;if(e!==null&&(b+e.jB.length|0)<=f){while(true){if(b>f)return (-1);g=PR(c,e,b);if(g<0)return (-1);if(a.jJ.fK(g+e.jB.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
XF=(a,b,c,d,e)=>{let f,g;f=Ik(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=ACt(d,f,c);if(g<0)break a;if(g<b)break a;if(a.jJ.fK(g+f.jB.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AIX=(a,b)=>{return 1;},
APZ=a=>{let b,c,d,e,f,g,h;b=a.kY;c=new J;c.jA=G(16);F(c,c.jz,A(411));L(c,c.jz,b,10);d=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){d.jB=K(e.data,0,g);return d;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);};
function QX(){Gx.call(this);this.xx=0;}
let AH3=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.qd;f=d.lp.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.pA.jB.length?Cm(d.pA,h,i):null;if(j!==null&&(b+j.jB.length|0)<=d.kj){i=0;a:{b:{while(true){if(i>=j.jB.length){e=a.oZ;d.kX.data[e]=j.jB.length;return a.jJ.fK(b+j.jB.length|0,c,d);}if(i<0)break a;if(i>=j.jB.length)break a;e=j.jB.charCodeAt(i);if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}e=Cu(BU,e)&65535;if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value)
:null)));}g=Cu(BV,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.jB.length)break b;e=c.jB.charCodeAt(h);if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}e=Cu(BU,e)&65535;if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}if(g!=(Cu(BV,e)&65535))break;i=i+1|0;}return (-1);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}return (-1);},
ZE=a=>{let b,c,d,e,f,g,h;b=a.xx;c=new J;c.jA=G(16);F(c,c.jz,A(412));L(c,c.jz,b,10);d=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){d.jB=K(e.data,0,g);return d;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);};
let OL=E(Ba);
let ADi=(a,b,c,d,e)=>{let f,g,h,i;Bf(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.jA.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Zl=(a,b,c,d)=>{let e,f,g,h,i;e=a.jz;Bf(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.jA.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
Z5=(a,b)=>{Ib(a,b);},
AOu=(a,b,c)=>{Bf(a,b,b+1|0);a.jA.data[b]=c;return a;};
function Rs(){let a=this;Cv.call(a);a.lK=null;a.s3=null;a.tC=null;}
let ABC=(a,b)=>{let c,d,e,f,g,h;c=O;O=c+1|0;d=new Ba;d.jA=G(20);a.jT=(L(d,d.jz,c,10)).T();a.ko=1;d=new H;e=b.jA;f=e.data;g=b.jz;h=f.length;if(g>=0&&g<=(h-0|0)){d.jB=K(e.data,0,g);a.lK=d;c=b.jz;a.ko=c;a.s3=SI(c);a.tC=SI(a.ko);c=0;a:{b:{while(c<(a.ko-1|0)){b=a.s3;d=a.lK;if(c<0)break a;if(c>=d.jB.length)break a;Q7(b,d.jB.charCodeAt(c),(a.ko-c|0)-1|0);b=a.tC;d=a.lK;g=(a.ko-c|0)-1|0;if(g<0)break b;if(g>=d.jB.length)break b;Q7(b,d.jB.charCodeAt(g),(a.ko-c|0)-1|0);c=c+1|0;}return;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC
=1;b.jD=1;B(b);}b=new I;b.jC=1;b.jD=1;B(b);},
AFR=a=>{let b=new Rs();ABC(b,a);return b;},
ABH=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.ko){e=d+b|0;if(e<0)break a;if(e>=c.jB.length)break a;f=c.jB.charCodeAt(e);g=a.lK;if(d<0)break b;if(d>=g.jB.length)break b;if(f!=g.jB.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.ko;}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);},
Y8=(a,b,c,d)=>{let e,f;e=d.kj;while(true){if(b>e)return (-1);f=APG(a,c,b,e);if(f<0)return (-1);if(a.jJ.fK(f+a.ko|0,c,d)>=0)break;b=f+1|0;}return f;},
ADY=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AOv(a,d,b,c);if(c<0)return (-1);if(a.jJ.fK(c+a.ko|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
AKK=a=>{let b,c,d,e,f,g,h;b=a.lK;c=new J;c.jA=G(16);F(c,c.jz,A(413));d=c.jz;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){b.jB=K(e.data,0,g);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
AE4=(a,b)=>{let c,d,e;if(b instanceof D0){c=b.lZ;b=a.lK;if(0<b.jB.length)return c!=b.jB.charCodeAt(0)?0:1;b=new V;b.jC=1;b.jD=1;B(b);}if(b instanceof D3){b=b;d=Cm(a.lK,0,1);b=b.mO;if(0>=d.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}return (!b.gh(d.jB.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof DH)){if(!(b instanceof Eh))return 1;a:{if(a.lK.jB.length>1){e=b.pa;b=a.lK;if(0>=b.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}c=b.jB.charCodeAt(0);b=a.lK;if(1>=b.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}if(e==(((c&1023)<<10|
b.jB.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.lK;if(0>=d.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}b:{c:{if(!b.gh(d.jB.charCodeAt(0))){if(a.lK.jB.length<=1)break c;d=a.lK;if(0>=d.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}c=d.jB.charCodeAt(0);d=a.lK;if(1>=d.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}if(!b.gh(((c&1023)<<10|d.jB.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
APG=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lK;f=a.ko-1|0;if(f>=0&&f<e.jB.length){g=e.jB.charCodeAt(f);a:{b:{c:{while(true){f=a.ko;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.jB.length)break c;h=b.jB.charCodeAt(f);if(h==g){f=0;d:{while(f<a.ko){i=f+c|0;if(i<0)break a;if(i>=b.jB.length)break a;j=b.jB.charCodeAt(i);e=a.lK;if(f<0)break b;if(f>=e.jB.length)break b;if(j!=e.jB.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+Sa(a.s3,h)|0;}return c;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD
=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);},
AOv=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lK;if(0>=e.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}f=e.jB.charCodeAt(0);g=(b.jB.length-d|0)-a.ko|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.jB.length)break c;h=b.jB.charCodeAt(d);if(h==f){g=0;d:{while(g<a.ko){i=g+d|0;if(i<0)break a;if(i>=b.jB.length)break a;j=b.jB.charCodeAt(i);e=a.lK;if(g<0)break b;if(g>=e.jB.length)break b;if(j!=e.jB.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-Sa(a.tC,h)|0;}return d;}b=new V;b.jC=1;b.jD
=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);};
function NF(){Cv.call(this);this.qH=null;}
let AIb=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.qH.jB.length)return a.qH.jB.length;e=a.qH;if(d<0)break a;if(d>=e.jB.length)break a;f=e.jB.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.jB.length)break b;h=c.jB.charCodeAt(g);if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}h=Cu(BU,h)&65535;if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}if(f!=(Cu(BV,h)&65535))break;d=d+1|0;}return (-1);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD
=1;B(c);},
AFe=a=>{let b,c,d,e,f,g,h;b=a.qH;c=new J;c.jA=G(16);F(c,c.jz,A(414));d=c.jz;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){b.jB=K(e.data,0,g);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
function Oc(){Cv.call(this);this.py=null;}
let ANx=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.py.jB.length)return a.py.jB.length;e=a.py;if(d<0)break c;if(d>=e.jB.length)break c;f=e.jB.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.jB.length)break d;if(f!=c.jB.charCodeAt(g)){e=a.py;if(d<0)break a;if(d>=e.jB.length)break a;h=FY(e.jB.charCodeAt(d));if(g<0)break b;if(g>=c.jB.length)break b;if(h!=c.jB.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=
1;c.jD=1;B(c);},
APf=a=>{let b,c,d,e,f,g,h;b=a.py;c=new J;c.jA=G(16);F(c,c.jz,A(415));d=c.jz;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){b.jB=K(e.data,0,g);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
let ASC=E();
function ND(){Cv.call(this);this.tm=0;}
let ANB=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.jB.length){e=c.jB.charCodeAt(b);if(d>=0&&d<c.jB.length){d=c.jB.charCodeAt(d);b=a.tm;d=((e&1023)<<10|d&1023)+65536|0;if(BU===null){if(BK===null)BK=DM();BU=Cr(Cw((BK.value!==null?T(BK.value):null)));}d=Cu(BU,d);if(BV===null){if(BL===null)BL=DK();BV=Cr(Cw((BL.value!==null?T(BL.value):null)));}return b!=Cu(BV,d)?(-1):2;}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);},
ASh=a=>{let b,c,d,e,f,g;b=new H;c=ES(a.tm);b.jB=K(c.data,0,c.data.length);d=new J;d.jA=G(16);F(d,d.jz,A(395));F(d,d.jz,b);b=new H;c=d.jA;e=c.data;f=d.jz;g=e.length;if(f>=0&&f<=(g-0|0)){b.jB=K(c.data,0,f);return b;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
function Hq(){Cj.call(this);this.oc=0;}
let AKU=(a,b)=>{a.jJ=b;},
Kz=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.kj){d.mc=1;return (-1);}if(b>=0&&b<c.jB.length){a:{f=c.jB.charCodeAt(b);if(b>d.mm){b=b-1|0;if(b>=0&&b<c.jB.length){if(!((c.jB.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new V;c.jC=1;c.jD=1;B(c);}}if(a.oc!=f)return (-1);return a.jJ.fK(e,c,d);}c=new V;c.jC=1;c.jD=1;B(c);},
AEY=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof H)){e=d.kj;a:{while(true){if(b>e){b=(-1);break a;}if(Kz(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.mm;g=d.kj;b:{while(true){if(b>=g)return (-1);h=Hx(c,a.oc,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.jB.length)break b;if((c.jB.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.jJ;b=h+1|0;if(i.fK(b,c,d)>=0)break;}return h;}c=new V;c.jC=1;c.jD=1;B(c);},
ABW=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(Kz(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.mm;b:{c:{while(true){if(c<b)return (-1);g=Fb(d,a.oc,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.jB.length)break b;if((d.jB.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.jJ.fK(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new V;d.jC=1;d.jD=1;B(d);},
AOH=a=>{let b,c,d,e,f,g,h;b=a.oc;c=new J;c.jA=G(16);d=c.jz;Bf(c,d,d+1|0);e=c.jA;f=e.data;f[d]=b;g=new H;d=c.jz;h=f.length;if(d>=0&&d<=(h-0|0)){g.jB=K(e.data,0,d);return g;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
Xt=(a,b)=>{if(b instanceof D0)return 0;if(b instanceof D3)return 0;if(b instanceof DH)return 0;if(b instanceof Eh)return 0;if(b instanceof Hy)return 0;if(!(b instanceof Hq))return 1;return b.oc!=a.oc?0:1;},
AOW=(a,b)=>{return 1;};
function Hy(){Cj.call(this);this.nZ=0;}
let Z2=(a,b)=>{a.jJ=b;},
JO=(a,b,c,d)=>{let e,f,g;e=d.kj;f=b+1|0;e=Ci(f,e);if(e>0){d.mc=1;return (-1);}if(b>=0&&b<c.jB.length){a:{g=c.jB.charCodeAt(b);if(e<0){if(f>=0&&f<c.jB.length){if(!((c.jB.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new V;c.jC=1;c.jD=1;B(c);}}if(a.nZ!=g)return (-1);return a.jJ.fK(f,c,d);}c=new V;c.jC=1;c.jD=1;B(c);},
ALu=(a,b,c,d)=>{let e,f;if(!(c instanceof H)){e=d.kj;a:{while(true){if(b>e){b=(-1);break a;}if(JO(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.kj;b:{while(true){if(b>=e)return (-1);f=Hx(c,a.nZ,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.jB.length)break b;if((c.jB.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.jJ.fK(b,c,d)>=0)break;}return f;}c=new V;c.jC=1;c.jD=1;B(c);},
ANw=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(JO(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.kj;b:{c:{while(true){if(c<b)return (-1);g=Fb(d,a.nZ,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.jB.length)break b;if((d.jB.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.jJ.fK(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new V;d.jC=1;d.jD=1;B(d);},
ARq=a=>{let b,c,d,e,f,g,h;b=a.nZ;c=new J;c.jA=G(16);d=c.jz;Bf(c,d,d+1|0);e=c.jA;f=e.data;f[d]=b;g=new H;d=c.jz;h=f.length;if(d>=0&&d<=(h-0|0)){g.jB=K(e.data,0,d);return g;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
ABL=(a,b)=>{if(b instanceof D0)return 0;if(b instanceof D3)return 0;if(b instanceof DH)return 0;if(b instanceof Eh)return 0;if(b instanceof Hq)return 0;if(!(b instanceof Hy))return 1;return b.nZ!=a.nZ?0:1;},
ALG=(a,b)=>{return 1;};
function Eh(){let a=this;Cv.call(a);a.o3=0;a.oF=0;a.pa=0;}
let AMN=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.jB.length){e=c.jB.charCodeAt(b);if(d>=0&&d<c.jB.length){d=c.jB.charCodeAt(d);return a.o3==e&&a.oF==d?2:(-1);}c=new V;c.jC=1;c.jD=1;B(c);}c=new V;c.jC=1;c.jD=1;B(c);},
AJI=(a,b,c,d)=>{let e,f,g,h;if(c instanceof H){e=d.kj;a:{while(b<e){b=Hx(c,a.o3,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.jB.length)break a;f=c.jB.charCodeAt(b);if(a.oF==f&&a.jJ.fK(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new V;c.jC=1;c.jD=1;B(c);}g=d.kj;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.ko|0)>d.kj){d.mc=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.jB.length)break b;e=c.jB.charCodeAt(b);if(h<0)break c;if(h>=c.jB.length)break c;f=c.jB.charCodeAt(h);h
=a.o3==e&&a.oF==f?2:(-1);h=h<0?(-1):a.jJ.fK(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new V;Y(c);B(c);}c=new V;Y(c);B(c);},
Z0=(a,b,c,d,e)=>{let f,g,h;if(d instanceof H){a:{b:{while(true){if(c<b)return (-1);c=Fb(d,a.oF,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.o3;if(c<0)break a;if(c>=d.jB.length)break a;if(f==d.jB.charCodeAt(c)&&a.jJ.fK(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new V;d.jC=1;d.jD=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.ko|0)>e.kj){e.mc=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.jB.length)break c;h=d.jB.charCodeAt(c);if(g<0)break d;if(g>=d.jB.length)break d;g=d.jB.charCodeAt(g);f
=a.o3==h&&a.oF==g?2:(-1);f=f<0?(-1):a.jJ.fK(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new V;Y(d);B(d);}d=new V;Y(d);B(d);},
AP5=a=>{let b,c,d,e,f,g,h;b=a.o3;c=a.oF;d=new J;d.jA=G(16);e=d.jz;Bf(d,e,e+1|0);d.jA.data[e]=b;b=d.jz;Bf(d,b,b+1|0);f=d.jA;g=f.data;g[b]=c;h=new H;c=d.jz;e=g.length;if(c>=0&&c<=(e-0|0)){h.jB=K(f.data,0,c);return h;}d=new I;d.jC=1;d.jD=1;Bj(d);B(d);},
AMq=(a,b)=>{if(b instanceof Eh)return b.pa!=a.pa?0:1;if(b instanceof DH)return b.gh(a.pa);if(b instanceof D0)return 0;if(!(b instanceof D3))return 1;return 0;};
let Ja=E(Ho);
let AAc=(a,b)=>{return b!=10?0:1;},
AMA=(a,b,c)=>{return b!=10?0:1;};
let Jb=E(Ho);
let ANR=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AQT=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function TC(){let a=this;C.call(a);a.uq=null;a.sB=null;a.qi=0;a.w5=0;}
let AGd=(a,b)=>{let c,d;while(true){c=a.qi;if(b<c)break;a.qi=c<<1|1;}d=c<<1|1;a.qi=d;d=d+1|0;a.uq=W(d);a.sB=W(d);a.w5=b;},
SI=a=>{let b=new TC();AGd(b,a);return b;},
Q7=(a,b,c)=>{let d,e,f,g;d=0;e=a.qi;f=b&e;while(true){g=a.uq.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.sB.data[f]=c;},
Sa=(a,b)=>{let c,d,e,f;c=a.qi;d=b&c;e=0;while(true){f=a.uq.data[d];if(!f)break;if(f==b)return a.sB.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.w5;};
let IW=E(Bu);
let AFq=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return CY(BS(b,9,13),32);};
let In=E(Bu);
let AH5=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(b,48,57);};
let Tn=E(Bu);
let ANh=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(b,97,122);};
let T2=E(Bu);
let AOX=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(b,65,90);};
let T7=E(Bu);
let ACE=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(b,0,127);};
let IQ=E(Bu);
let AAJ=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(BS(b,97,122),65,90);};
let I9=E(IQ);
let ADA=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(BS(BS(b,97,122),65,90),48,57);};
let VV=E(Bu);
let AEX=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(BS(BS(b,33,64),91,96),123,126);};
let JJ=E(I9);
let Wl=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(BS(BS(BS(BS(BS(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let Rp=E(JJ);
let AIP=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return CY(BS(BS(BS(BS(BS(BS(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let RR=E(Bu);
let ABz=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return CY(CY(b,32),9);};
let PL=E(Bu);
let AIH=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return CY(BS(b,0,31),127);};
let Px=E(Bu);
let AQY=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(BS(BS(b,48,57),97,102),65,70);};
let T_=E(Bu);
let AJU=a=>{let b,c;b=new Sl;b.yp=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let V3=E(Bu);
let Wx=a=>{let b,c;b=new NN;b.yw=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let TB=E(Bu);
let AFQ=a=>{let b,c;b=new RH;b.x9=a;c=new Bh;c.jS=W(64);b.jW=c;return b;};
let Te=E(Bu);
let AMR=a=>{let b,c;b=new RG;b.x0=a;c=new Bh;c.jS=W(64);b.jW=c;return b;};
let UE=E(Bu);
let ABw=a=>{let b,c;b=new U$;b.yX=a;c=new Bh;c.jS=W(64);b.jW=c;IA(c,0,2048);b.kN=1;return b;};
let Ox=E(Bu);
let AB7=a=>{let b,c;b=new Pl;b.yE=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let N8=E(Bu);
let AQK=a=>{let b,c;b=new OH;b.zh=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let TI=E(Bu);
let Wi=a=>{let b,c;b=new QH;b.yq=a;c=new Bh;c.jS=W(64);b.jW=c;return b;};
let TW=E(Bu);
let AHi=a=>{let b,c;b=new NJ;b.xd=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let P8=E(Bu);
let ACj=a=>{let b,c;b=new NM;b.yG=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let RW=E(Bu);
let AD$=a=>{let b,c;b=new OB;b.yW=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let Vz=E(Bu);
let AHn=a=>{let b,c;b=new PD;b.y$=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let TT=E(Bu);
let APm=a=>{let b,c;b=new PI;b.x$=a;c=new Bh;c.jS=W(64);b.jW=c;return b;};
let QQ=E(Bu);
let ALR=a=>{let b,c;b=new SP;b.yI=a;c=new Bh;c.jS=W(64);b.jW=c;return b;};
let P7=E(Bu);
let AJK=a=>{let b,c;b=new R5;b.xh=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let VZ=E(Bu);
let AM8=a=>{let b,c;b=new NZ;b.zr=a;c=new Bh;c.jS=W(64);b.jW=c;b.kN=1;return b;};
let H9=E(Bu);
let AHK=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return CY(BS(BS(BS(b,97,122),65,90),48,57),95);};
let UK=E(H9);
let AJi=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;b=EB(CY(BS(BS(BS(b,97,122),65,90),48,57),95),1);b.kN=1;return b;};
let Rt=E(IW);
let Y5=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;b=EB(CY(BS(b,9,13),32),1);b.kN=1;return b;};
let P2=E(In);
let AEM=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;b=EB(BS(b,48,57),1);b.kN=1;return b;};
function Bq(){let a=this;Bu.call(a);a.j1=0;a.j2=0;}
let AQI=(a,b,c)=>{a.j1=b;a.j2=c;},
BG=(a,b)=>{let c=new Bq();AQI(c,a,b);return c;},
AHO=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(b,a.j1,a.j2);};
let PX=E(Bu);
let AQw=a=>{let b,c;b=new CD;c=new Bh;c.jS=W(64);b.jW=c;c=new Bh;c.jS=W(2);b.jY=c;return BS(BS(b,65279,65279),65520,65533);};
function Lq(){let a=this;Bu.call(a);a.t5=0;a.sw=0;a.u$=0;}
let AAT=(a,b,c)=>{a.sw=c;a.t5=b;},
Cb=(a,b)=>{let c=new Lq();AAT(c,a,b);return c;},
AQJ=(a,b,c,d)=>{a.u$=d;a.sw=c;a.t5=b;},
AHH=(a,b,c)=>{let d=new Lq();AQJ(d,a,b,c);return d;},
ADm=a=>{let b,c,d;b=new Jz;c=a.t5;d=new Bh;d.jS=W(64);b.jW=d;b.r0=c;if(a.u$)IA(d,0,2048);b.kN=a.sw;return b;};
function Lw(){let a=this;Bu.call(a);a.t3=0;a.sD=0;a.uP=0;}
let ACk=(a,b,c)=>{a.sD=c;a.t3=b;},
GA=(a,b)=>{let c=new Lw();ACk(c,a,b);return c;},
Wk=(a,b,c,d)=>{a.uP=d;a.sD=c;a.t3=b;},
AFN=(a,b,c)=>{let d=new Lw();Wk(d,a,b,c);return d;},
Wj=a=>{let b,c,d;b=new Rx;c=a.t3;d=new Bh;d.jS=W(64);b.jW=d;b.r0=c;if(a.uP)IA(d,0,2048);b.kN=a.sD;return b;};
let DS=E(Bx);
let XZ=E();
let ABM=E();
let ZV=E();
let ARa=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new ME;d=G(b.jB.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.sV=d;f=FU(c);d=W(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=FU(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=FU(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.jB.length)break;e[f]=b.jB.charCodeAt(f);f=f+1|0;}b=new V;b.jC=1;b.jD=1;B(b);},
Cw=b=>{let c,d,e,f,g,h,i,j,k,l;c=new ME;d=G(b.jB.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.sV=d;f=FU(c);d=W(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+FU(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=FU(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.jB.length)break;e[f]=b.jB.charCodeAt(f);f=f+1|0;}b=new V;b.jC=1;b.jD=1;B(b);},
Cr=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=W(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bn;l.jC=1;l.jD=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new Ue;l.vN=b;l.v0=c;return l;},
II=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
ASz=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=R(H8,16384);d=c.data;e=BM(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.jB.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BF;b.jP=j;k=b;j.classObject=k;}}b=D7(b);if(b===null){b=new Db;b.jC=1;b.jD=1;B(b);}if(b===M(Bs)){b=new Bn;b.jC=1;b.jD=1;B(b);}if(g<0){b=new DS;b.jC=1;b.jD=1;B(b);}k=DP(b.jP,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.jB.length)break c;l=II(b.jB.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.jB.length)break b;l=II(b.jB.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.jB.length)break a;m=m|Dg(n,II(b.jB.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.jB.length)break;m=II(b.jB.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new H8;l=h+f|0;q=BM(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.s$=h;j.tz=l;j.tb=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new H8;t=h+f|0;q=BM(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.s$=h;j.tz=t;j.tb=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);}b=new V;b.jC=1;b.jD=1;B(b);};
function Ue(){let a=this;C.call(a);a.vN=null;a.v0=null;}
function H8(){let a=this;C.call(a);a.s$=0;a.tz=0;a.tb=null;}
function ME(){let a=this;C.call(a);a.sV=null;a.vD=0;}
let AET=E();
let FU=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.sV.data;f=b.vD;b.vD=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Dg(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let ANi=E();
function Qh(){let a=this;Dz.call(a);a.u5=null;a.u4=0;a.p9=null;}
let AOq=(a,b)=>{return;},
ACn=(a,b)=>{let c,d,e,f,g,h;if(BY===null){b=new C1;c=new Cx;c.lk=BM(32);b.lI=c;c=new J;By(c);c.jA=G(16);b.ln=c;b.lm=G(32);b.lq=0;b.lr=Cp;BY=b;}b=a.u5;c=new J;c.jA=G(16);F(c,c.jz,A(416));d=c.jz;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){b.jB=K(e.data,0,g);BZ(Bz(b));BZ("\n");return;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
X_=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(J7(Ir(A(111),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.p9;b.tn=b.rw.jF;if(a.u4){e=0;while(true){b=a.p9;c=b.rw;f=Ci(e,c.jF);if(f>=0)break a;if(f>=0){g=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,e,10);F(b,b.jz,A(19));e=c.jF;L(b,b.jz,e,10);c=new H;d=b.jA;h=d.data;f=b.jz;i=h.length;if(f>=0&&f<=(i-0|0)){c.jB=K(d.data,0,f);g.jC=1;g.jD=1;g.jE=c;B(g);}b=new I;Y(b);B(b);}AFk(b,c.jQ.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(J7(Ir(A(109),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AG5(h[1]);b=h[2];if(b===null){b=new Cs;b.jC=1;b.jD=1;b.jE=A(76);B(b);}m=AOP(b,0,b.jB.length,10);n=h[3];o=Fw;if(k===A(417))i=1;else if(!(A(417) instanceof H))i=0;else{b=A(417);i=k.jB!==b.jB?0:1;}if(i)o=Fn;if(k===A(418))i=1;else if(!(A(418) instanceof H))i=0;else{b=A(418);i=k.jB!==b.jB?0:1;}if(i)o=Fc;if(k===A(419))i=1;else if(!(A(419) instanceof H))i=0;else{b=A(419);i=k.jB!==b.jB?0:1;}if(i)o=E7;if(k===A(227))i=1;else if(!(A(227) instanceof H))i=0;else{b=A(227);i=k.jB!==b.jB?0:1;}if(i)o=Jv;if
(o===E7&&!Gg.wA)m=B$;g=new R8;g.tf=l;g.ve=o;g.wP=m;g.u7=n;Cc(a.p9.vs,l,l);BB(a.p9.rw,g);f=f+1|0;}b=new Q;b.jC=1;b.jD=1;b.jE=A(420);B(b);},
AJw=(a,b,c)=>{return X_(a,b,c);};
let CJ=E(BI);
let AAe=null,AJ1=null,ABs=null,ABr=null,AAk=null,ZZ=null,Zp=null,ABf=null,Y6=null,AGM=null;
let Ih=()=>{Ih=BP(CJ);XQ();};
let XQ=()=>{let b,c,d,e,f,g,h,i,j;b=new Ux;Ih();b.jR=A(421);b.jK=0;AAe=b;c=new Uy;c.jR=A(422);c.jK=1;AJ1=c;d=new UC;d.jR=A(423);d.jK=2;ABs=d;e=new UD;e.jR=A(424);e.jK=3;ABr=e;f=new UA;f.jR=A(425);f.jK=4;AAk=f;g=new UB;g.jR=A(426);g.jK=5;ZZ=g;h=new Uv;h.jR=A(427);h.jK=6;Zp=h;i=new Uw;i.jR=A(428);i.jK=7;ABf=i;j=new Ut;j.jR=A(429);j.jK=8;Y6=j;AGM=S(CJ,[b,c,d,e,f,g,h,i,j]);};
function Fv(){let a=this;Hi.call(a);a.oK=0;a.mH=null;}
let ARS=E(0);
let Zy=b=>{let c,d;if(b===A(430))c=1;else if(!(A(430) instanceof H))c=0;else{d=A(430);c=b.jB!==d.jB?0:1;}a:{if(!c){if(b===A(431))c=1;else if(!(A(431) instanceof H))c=0;else{d=A(431);c=b.jB!==d.jB?0:1;}if(!c){if(b===A(432))c=1;else if(!(A(432) instanceof H))c=0;else{d=A(432);c=b.jB!==d.jB?0:1;}if(!c){if(b===A(433))c=1;else if(!(A(433) instanceof H))c=0;else{d=A(433);c=b.jB!==d.jB?0:1;}if(!c){if(b===A(434))c=1;else if(!(A(434) instanceof H))c=0;else{d=A(434);c=b.jB!==d.jB?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AFt=b=>{let c,d;if(b===A(435))c=1;else if(!(A(435) instanceof H))c=0;else{d=A(435);c=b.jB!==d.jB?0:1;}a:{b:{if(c)break b;if(b===A(436))c=1;else if(!(A(436) instanceof H))c=0;else{d=A(436);c=b.jB!==d.jB?0:1;}if(c)break b;if(b===A(437))c=1;else if(!(A(437) instanceof H))c=0;else{d=A(437);c=b.jB!==d.jB?0:1;}if(c)break b;if(b===A(438))c=1;else if(!(A(438) instanceof H))c=0;else{d=A(438);c=b.jB!==d.jB?0:1;}if(c)break b;if(b===A(439))c=1;else if(!(A(439) instanceof H))c=0;else{d=A(439);c=b.jB!==d.jB?0:1;}if(c)break b;if
(b===A(440))c=1;else if(!(A(440) instanceof H))c=0;else{d=A(440);c=b.jB!==d.jB?0:1;}if(c)break b;if(b===A(441))c=1;else if(!(A(441) instanceof H))c=0;else{d=A(441);c=b.jB!==d.jB?0:1;}if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof H))c=0;else{d=A(442);c=b.jB!==d.jB?0:1;}if(c)break b;if(b===A(443))c=1;else if(!(A(443) instanceof H))c=0;else{d=A(443);c=b.jB!==d.jB?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let Tp=E(0);
let PV=E();
let AQD=(a,b,c)=>{a.gO(T(b),Dn(c,"handleEvent"));},
AJ6=(a,b)=>{return !!a.gP(b);},
Z3=(a,b,c)=>{a.gQ(T(b),Dn(c,"handleEvent"));},
AGH=(a,b,c,d)=>{a.gR(T(b),Dn(c,"handleEvent"),d?1:0);},
AN0=(a,b,c,d)=>{a.gS(T(b),Dn(c,"handleEvent"),d?1:0);};
function Me(){let a=this;C.call(a);a.s9=null;a.uv=null;a.rn=null;a.uC=0;a.r$=null;}
let AKg=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.s9;if(e!==Fc&&e!==E7){if(e===Fn){b=window.document.createElement("img");d=Bz(T(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new H7;d.mX=c;d.tI=e;d.tS=b;}else if(e===Fw)d=T(c.result);}else{e=c.result;b=new Int8Array(e);d=new H7;d.mX=b;d.tI=e;}if(d!==null){GN(a.r$.u9,a.s9,a.uv,d);BB(a.rn,a.uv);if(a.rn.jF==a.uC){b=a.r$.uV;d=new N2;d.tu=a;BB(b.qV,d);}}},
AIk=(a,b)=>{AKg(a,b);};
function Fe(){BI.call(this);this.qR=null;}
let Fn=null,E7=null,Fw=null,Fc=null,Jv=null,Ng=null;
let AKp=()=>{let b,c,d,e,f;b=new Fe;b.jR=A(444);b.jK=0;b.qR=A(417);Fn=b;c=new Fe;c.jR=A(445);c.jK=1;c.qR=A(419);E7=c;d=new Fe;d.jR=A(446);d.jK=2;d.qR=A(447);Fw=d;e=new Fe;e.jR=A(448);e.jK=3;e.qR=A(418);Fc=e;f=new Fe;f.jR=A(449);f.jK=4;f.qR=A(227);Jv=f;Ng=S(Fe,[b,c,d,e,f]);};
let AFK=E();
let KS=null,OK=null;
let AOz=b=>{let c,d,e,f,g,h,i,j,k,l;c=new J;c.jA=G(16);d=AM7();e=0;f=OK.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.jz;if(i>0){Bf(c,i,i+1|0);c.jA.data[i]=32;}j=d.data[e];F(c,c.jz,j);}e=e+1|0;h=h+1|0;}j=new H;d=c.jA;k=d.data;e=c.jz;l=k.length;if(e>=0&&e<=(l-0|0)){j.jB=K(d.data,0,e);return j;}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
AM7=()=>{if(KS===null)KS=S(H,[A(450),A(451),A(452),A(453),A(454),A(455),A(456),A(457),A(458),A(459),A(460),A(461)]);return KS;},
XM=()=>{OK=If([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let Rh=E(0);
function Hl(){let a=this;Mr.call(a);a.k8=null;a.x5=null;a.qO=0;a.rL=0;a.n_=null;a.t$=null;}
let YG=a=>{let b,c,d,e,f,g,h;b=new J;b.jA=G(16);c=AOz(KR(a.qO,a.rL));F(b,b.jz,c);d=b.jz;if(d>0){Bf(b,d,d+1|0);b.jA.data[d]=32;}c=a.k8;if(c.jI===null)c.jI=T(c.jP.$meta.name);c=c.jI;F(b,b.jz,c);d=b.jz;Bf(b,d,d+1|0);b.jA.data[d]=40;e=a.n_.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.jz;Bf(b,h,h+1|0);b.jA.data[h]=44;}c=g[f];if(c.jI===null)c.jI=T(c.jP.$meta.name);c=c.jI;F(b,b.jz,c);f=f+1|0;}d=b.jz;Bf(b,d,d+1|0);g=b.jA;e=g.data;e[d]=41;c=new H;d=b.jz;h=e.length;if(d>=0&&d<=(h-0|0)){c.jB=K(g.data,
0,d);return c;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
AN2=(a,b)=>{let c,d,e,f,g;if(a.qO&1){c=new Mc;c.jC=1;c.jD=1;B(c);}if(a.t$===null){c=new JM;c.jC=1;c.jD=1;B(c);}d=b.data;e=d.length;if(e!=a.n_.data.length){c=new Bn;c.jC=1;c.jD=1;B(c);}f=0;while(f<e){if(!(a.n_.data[f].jP.$meta.primitive?1:0)&&d[f]!==null){c=a.n_.data[f];g=d[f];c=c.jP;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Mb(g.constructor,c)?1:0)){c=new Bn;c.jC=1;c.jD=1;B(c);}}if((a.n_.data[f].jP.$meta.primitive?1:0)&&d[f]===null){c=new Bn;c.jC=1;c.jD=1;B(c);}f=f+1|0;}c=b.data;g=new(a.k8.jP);a.t$.call(g,
c);return g;};
let V=E(I);
function UR(){let a=this;Bk.call(a);a.uY=null;a.y3=null;}
let ACN=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.lY^CC(a.uY,c):0;};
function UQ(){let a=this;Bk.call(a);a.wC=null;a.wQ=null;a.yL=null;}
let W9=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.lY^CC(a.wC,c):0;return a.wQ.gh(b)&&!d?1:0;};
function O0(){let a=this;Bk.call(a);a.rD=null;a.xk=null;}
let AHx=(a,b)=>{return a.kc^CC(a.rD,b);},
AEq=a=>{let b,c,d,e,f,g,h,i,j,k;b=new J;b.jA=G(16);c=HW(a.rD,0);while(c>=0){d=(ES(c)).data;e=0;f=d.length;g=b.jz;Bf(b,g,g+f|0);f=f+e|0;while(e<f){h=b.jA.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.jz;Bf(b,g,g+1|0);b.jA.data[g]=124;c=HW(a.rD,c+1|0);}e=b.jz;if(e>0)U1(b,e-1|0);k=new H;d=b.jA;h=d.data;e=b.jz;g=h.length;if(e>=0&&e<=(g-0|0)){k.jB=K(d.data,0,e);return k;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);};
function O7(){let a=this;Bk.call(a);a.vH=null;a.yv=null;}
let AMP=(a,b)=>{return a.vH.gh(b);};
function O4(){let a=this;Bk.call(a);a.sx=0;a.u8=null;a.td=null;}
let ANA=(a,b)=>{return !(a.sx^CC(a.td.jY,b))&&!(a.sx^a.td.nc^a.u8.gh(b))?0:1;};
function O5(){let a=this;Bk.call(a);a.sC=0;a.wH=null;a.tP=null;}
let AIa=(a,b)=>{return !(a.sC^CC(a.tP.jY,b))&&!(a.sC^a.tP.nc^a.wH.gh(b))?1:0;};
function O_(){let a=this;Bk.call(a);a.w0=0;a.wK=null;a.wE=null;a.xF=null;}
let AB_=(a,b)=>{return a.w0^(!a.wK.gh(b)&&!a.wE.gh(b)?0:1);};
function Pa(){let a=this;Bk.call(a);a.vK=0;a.vF=null;a.vx=null;a.zm=null;}
let V8=(a,b)=>{return a.vK^(!a.vF.gh(b)&&!a.vx.gh(b)?0:1)?0:1;};
function O9(){let a=this;Bk.call(a);a.vv=null;a.zq=null;}
let AEB=(a,b)=>{let c,d;c=a.vv;d=c.kR;return d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b);};
function O$(){let a=this;Bk.call(a);a.wO=null;a.xW=null;}
let AIc=(a,b)=>{let c,d;c=a.wO;d=c.kR;return (d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b))?0:1;};
function Pb(){let a=this;Bk.call(a);a.vT=null;a.vG=0;a.wt=null;}
let APv=(a,b)=>{let c,d,e;c=a.vT;d=c.kR;e=d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b);return !e&&!(a.vG^CC(a.wt.jY,b))?0:1;};
function Pc(){let a=this;Bk.call(a);a.wa=null;a.wh=0;a.v4=null;}
let ABc=(a,b)=>{let c,d,e;c=a.wa;d=c.kR;e=d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b);return !e&&!(a.wh^CC(a.v4.jY,b))?1:0;};
function OZ(){let a=this;Bk.call(a);a.ws=0;a.wG=null;a.wT=null;a.xp=null;}
let ASD=(a,b)=>{let c,d;a:{if(!(a.ws^a.wG.gh(b))){c=a.wT;d=c.kR;if(!(d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b))){b=0;break a;}}b=1;}return b;};
function Ps(){let a=this;Bk.call(a);a.wR=0;a.uL=null;a.uQ=null;a.xS=null;}
let AEJ=(a,b)=>{let c,d;a:{if(!(a.wR^a.uL.gh(b))){c=a.uQ;d=c.kR;if(!(d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b))){b=1;break a;}}b=0;}return b;};
function OX(){let a=this;Bk.call(a);a.vk=null;a.xZ=null;}
let AA_=(a,b)=>{let c,d;c=a.vk;d=c.kR;return d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b);};
function OY(){let a=this;Bk.call(a);a.vl=null;a.zj=null;}
let ADD=(a,b)=>{let c,d;c=a.vl;d=c.kR;return (d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b))?0:1;};
function O3(){let a=this;Bk.call(a);a.wZ=null;a.v9=0;a.xa=null;}
let AGm=(a,b)=>{let c,d,e;c=a.wZ;d=c.kR;e=d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b);return e&&a.v9^CC(a.xa.jY,b)?1:0;};
function OW(){let a=this;Bk.call(a);a.wm=null;a.vL=0;a.v8=null;}
let AO6=(a,b)=>{let c,d,e;c=a.wm;d=c.kR;e=d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b);return e&&a.vL^CC(a.v8.jY,b)?0:1;};
function O1(){let a=this;Bk.call(a);a.wu=0;a.uX=null;a.vJ=null;a.xD=null;}
let Zr=(a,b)=>{let c,d;a:{if(a.wu^a.uX.gh(b)){c=a.vJ;d=c.kR;if(d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b)){b=1;break a;}}b=0;}return b;};
function O2(){let a=this;Bk.call(a);a.wj=0;a.uH=null;a.wr=null;a.x4=null;}
let ALC=(a,b)=>{let c,d;a:{if(a.wj^a.uH.gh(b)){c=a.wr;d=c.kR;if(d!==null?c.kc^d.gh(b):c.kc^CC(c.jY,b)){b=0;break a;}}b=1;}return b;};
function Ij(){let a=this;C.call(a);a.n2=null;a.tO=null;a.lL=null;a.mn=0;}
function Gk(){let a=this;C.call(a);a.zn=null;a.nj=B$;a.n9=B$;a.mu=null;a.vf=null;a.m6=null;a.mt=0;a.nk=null;}
let IL=null,BW=null,CM=0,Ed=0,Rj=null;
let AHw=a=>{let b,c,$$je;a:{b:{c:{d:{try{Ed=Ed+1|0;ALS(a);a.c2();}catch($$e){$$je=Bb($$e);if($$je instanceof DJ){b=$$je;break d;}else{b=$$je;break c;}}b=a.mu;FD(b);e:{try{Nc(b);DB(b);break e;}catch($$e){$$je=Bb($$e);c=$$je;}DB(b);B(c);}a.mt=0;Ed=Ed-1|0;b=IL;if(BW!==b)BW=b;BW.n9=Ea();break a;}try{Yi(AE3(a),a,b);break b;}catch($$e){$$je=Bb($$e);b=$$je;}}c=a.mu;FD(c);f:{try{Nc(c);DB(c);break f;}catch($$e){$$je=Bb($$e);b=$$je;}DB(c);B(b);}a.mt=0;Ed=Ed-1|0;c=IL;if(BW!==c)BW=c;BW.n9=Ea();B(b);}b=a.mu;FD(b);g:{try
{Nc(b);DB(b);break g;}catch($$e){$$je=Bb($$e);c=$$je;}DB(b);B(c);}a.mt=0;Ed=Ed-1|0;b=IL;if(BW!==b)BW=b;BW.n9=Ea();}},
ALS=b=>{if(BW!==b)BW=b;BW.n9=Ea();},
ASF=()=>{return BW;},
KN=b=>{let $p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APn(b);if(Fi()){break _;}return;default:E_();}}C_().s(b,$p);},
AB8=(b,c)=>{let d,e;d=BW;e=new OJ;e.xb=d;e.wD=c;e.y4=MO(e,ATD(b,U(2147483647))?2147483647:Bg(b));d.vf=e;},
AE3=a=>{let b;b=a.zn;if(b!==null)return b;return Rj;},
Y0=()=>{let b,c,d;b=new Gk;c=null;b.mu=new C;b.mt=1;b.m6=A(462);b.nk=c;d=CM;CM=d+1|0;b.nj=U(d);IL=b;BW=b;CM=1;Ed=1;Rj=new RI;},
APn=b=>{let thread=C_();let javaThread=Wz();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;JL(javaThread);thread.resume();};callback.g1=e=>{thread.attribute=AOK(e);JL(javaThread);thread.resume();};callback=RQ(callback);thread.suspend(()=>{try {AB8(b,callback);;}catch(Nr){callback.g1(Nr);}});return null;};
let BN=E(Bx);
let Iu=E(Bx);
let AMU=E();
let RJ=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let ADH=E();
let Xr=E();
let FW=E(0);
function VI(){C.call(this);this.vy=null;}
let APx=a=>{ANU(a.vy);};
let Ux=E(CJ);
let Uy=E(CJ);
let UC=E(CJ);
let UD=E(CJ);
let UA=E(CJ);
let UB=E(CJ);
let Uv=E(CJ);
let Uw=E(CJ);
let Ut=E(CJ);
let Ob=E(0);
let RI=E();
let Yi=(a,b,c)=>{let d;if(Dd===null){b=new Ft;d=new Cx;d.lk=BM(32);By(b);b.lI=d;d=new J;Dq(d,16);b.ln=d;b.lm=G(32);b.lq=0;b.lr=Cp;Dd=b;}JF(c,Dd);};
let Qu=E();
let Rg=E(0);
function QY(){C.call(this);this.o5=null;}
let RQ=b=>{let c;c=new QY;c.o5=b;return c;},
AGO=(a,b)=>{a.o5.e(b);},
ARi=(a,b)=>{a.o5.g1(b);};
function Sk(){let a=this;C.call(a);a.vc=null;a.vd=null;a.va=0;a.vb=null;}
let N9=E(F$);
let ADr=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.kj;a:{while(true){if(b>f){b=e;break a;}g=a.kY;h=d.lp.data;i=g*2|0;j=h[i];h[i]=b;e=a.mr.fK(b,c,d);if(e>=0)break;i=a.kY;d.lp.data[i*2|0]=j;b=b+1|0;}}return b;},
ASn=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.kY;h=e.lp.data;i=g*2|0;j=h[i];h[i]=c;f=a.mr.fK(c,d,e);if(f>=0)break;i=a.kY;e.lp.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
AAN=a=>{return null;};
function Sl(){Bk.call(this);this.yp=null;}
let APS=(a,b)=>{return CN(b)!=2?0:1;};
function NN(){Bk.call(this);this.yw=null;}
let YZ=(a,b)=>{return CN(b)!=1?0:1;};
function RH(){Bk.call(this);this.x9=null;}
let Yj=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(CN(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function RG(){Bk.call(this);this.x0=null;}
let ADj=(a,b)=>{return 0;};
function U$(){Bk.call(this);this.yX=null;}
let AF2=(a,b)=>{return !CN(b)?0:1;};
function Pl(){Bk.call(this);this.yE=null;}
let APV=(a,b)=>{return CN(b)!=9?0:1;};
function OH(){Bk.call(this);this.zh=null;}
let AKJ=(a,b)=>{return Hb(b);};
function QH(){Bk.call(this);this.yq=null;}
let AM0=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function NJ(){Bk.call(this);this.xd=null;}
let ARR=(a,b)=>{a:{b:{switch(CN(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Hb(b);}return b;};
function NM(){Bk.call(this);this.yG=null;}
let ABT=(a,b)=>{a:{b:{switch(CN(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Hb(b);}return b;};
function OB(){Bk.call(this);this.yW=null;}
let AQo=(a,b)=>{a:{switch(CN(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function PD(){Bk.call(this);this.y$=null;}
let AID=(a,b)=>{a:{b:{switch(CN(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function PI(){Bk.call(this);this.x$=null;}
let AMc=(a,b)=>{a:{switch(CN(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function SP(){Bk.call(this);this.yI=null;}
let APw=(a,b)=>{return CN(b)!=3?0:1;};
function R5(){Bk.call(this);this.xh=null;}
let ARf=(a,b)=>{a:{b:{switch(CN(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Hb(b);}return b;};
function NZ(){Bk.call(this);this.zr=null;}
let ABy=(a,b)=>{a:{b:{switch(CN(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Hb(b);}return b;};
function Jz(){Bk.call(this);this.r0=0;}
let AKP=(a,b)=>{return a.kc^(a.r0!=CN(b&65535)?0:1);};
let Rx=E(Jz);
let AOf=(a,b)=>{return a.kc^(!(a.r0>>CN(b&65535)&1)?0:1);};
function Yl(){let a=this;C.call(a);a.zx=0;a.zy=0;a.zv=0;a.zw=0;a.zu=null;}
function GO(){let a=this;Gk.call(a);a.ov=0;a.m9=null;a.nl=null;a.na=null;}
let AK2=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new MC;c.nw=a;c.pF=b;c=B4(c,"handleEvent");b.onreadystatechange=c;c=a.na;d=a.nl;e=new GP;e.ud=c;e.rp=d;c=B4(e,"handleEvent");b.onprogress=c;d=a.m9;f=a.ov;b.open("GET",Bz(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let N0=E();
let Tq=null;
let Ma=()=>{Ma=BP(N0);ANu();};
let ANu=()=>{let b,c;b=W((Un.p()).data.length);c=b.data;Tq=b;c[M7.jK]=1;c[IT.jK]=2;};
let UL=E();
let AHI=(a,b,c)=>{a.eS(T(b),Dn(c,"handleEvent"));},
AIG=(a,b,c)=>{a.eT(T(b),Dn(c,"handleEvent"));},
WL=(a,b,c,d)=>{a.eU(T(b),Dn(c,"handleEvent"),d?1:0);},
WZ=(a,b)=>{return !!a.eV(b);},
AEE=(a,b,c,d)=>{a.eX(T(b),Dn(c,"handleEvent"),d?1:0);};
let GR=E(0);
function JV(){let a=this;C.call(a);a.oH=null;a.tk=0;a.rO=null;a.t4=null;a.pT=null;}
let ARm=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.oH.readyState==4){if(a.oH.status==200){if(a.pT.mh){if(BY===null){b=new C1;c=new Cx;c.lk=BM(32);b.lI=c;c=new J;By(c);c.jA=G(16);b.ln=c;b.lm=G(32);b.lq=0;b.lr=Cp;BY=b;}b=a.rO;c=new J;c.jA=G(16);F(c,c.jz,A(463));d=c.jz;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g
>=0&&g<=(h-0|0)){b.jB=K(e.data,0,g);BZ(Bz(b));BZ("\n");}else{b=new I;b.jC=1;b.jD=1;Bj(b);B(b);}}c=a.oH.response;EQ();i=FX.mT.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);T(a.oH.responseText);}else if(a.oH.status!=404&&a.oH.status!=403){try{k=U(100);$p=1;continue _;}catch($$e){$$je=Bb($$e);if($$je instanceof DJ){}else{throw $$e;}}No(a.pT,a.tk,a.rO,a.t4);}b=a.pT;b.kK=b.kK-1|0;}return;case 1:a:{try{KN(k);if(Fi()){break _;}break a;}catch($$e){$$je=Bb($$e);if($$je instanceof DJ)
{}else{throw $$e;}}}No(a.pT,a.tk,a.rO,a.t4);b=a.pT;b.kK=b.kK-1|0;return;default:E_();}}C_().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AF_=(a,b)=>{let $p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ARm(a,b);if(Fi()){break _;}return;default:E_();}}C_().s(a,b,$p);};
let AJa=E();
let CB=0;
function Ct(){let a=this;C.call(a);a.ku=null;a.lv=0;a.lf=0;a.kq=0;}
let AJp=(a,b,c)=>{a.kq=1;a.ku=b;a.lv=c;},
LL=(a,b)=>{let c=new Ct();AJp(c,a,b);return c;},
Hh=a=>{let b;if(a.kq)return a.lf>=a.ku.jF?0:1;b=new Q;b.jC=1;b.jD=1;b.jE=A(17);B(b);},
Co=a=>{let b,c,d,e,f,g,h;b=a.lf;c=a.ku;if(b<c.jF){if(a.kq){d=c.jQ.data;a.lf=b+1|0;return d[b];}c=new Q;c.jC=1;c.jD=1;c.jE=A(17);B(c);}c=new VT;e=new J;e.jA=G(16);L(e,e.jz,b,10);f=new H;d=e.jA;g=d.data;b=e.jz;h=g.length;if(b>=0&&b<=(h-0|0)){f.jB=K(d.data,0,b);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;c.jC=1;c.jD=1;B(c);};
function C2(){let a=this;C.call(a);a.lE=null;a.lG=0;a.tF=null;a.tG=null;}
let ALP=(a,b)=>{a.lE=b;a.lG=1;},
Nn=a=>{let b=new C2();ALP(b,a);return b;},
ASp=(a,b,c)=>{a.lE=b;a.lG=c;},
Ll=(a,b)=>{let c=new C2();ASp(c,a,b);return c;},
CL=a=>{let b,c,d;if(CB){b=new Ct;c=a.lE;d=a.lG;b.kq=1;b.ku=c;b.lv=d;return b;}if(a.tF===null){b=new Ct;c=a.lE;d=a.lG;b.kq=1;b.ku=c;b.lv=d;a.tF=b;b=new Ct;b.kq=1;b.ku=c;b.lv=d;a.tG=b;}b=a.tF;if(b.kq){c=a.tG;c.lf=0;c.kq=1;b.kq=0;return c;}b.lf=0;b.kq=1;a.tG.kq=0;return b;};
function H7(){let a=this;C.call(a);a.tI=null;a.mX=null;a.tS=null;}
let AMQ=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.mX.length;c=new J;c.jA=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new H;f=c.jA;g=f.data;b=c.jz;h=g.length;if(b>=0&&b<=(h-0|0)){e.jB=K(f.data,0,b);return e;}e=new I;e.jC=1;e.jD=1;Bj(e);B(e);}i=b-d|0;if(i>=3){j=(((a.mX[d]&255)<<16)+((a.mX[d+1|0]&255)<<8)|0)+(a.mX[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(464).jB.length)break f;h=A(464).jB.charCodeAt(h);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(464).jB.length)break g;h
=A(464).jB.charCodeAt(h);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(464).jB.length)break h;h=A(464).jB.charCodeAt(h);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;i=j&63;if(i<0)break;if(i>=A(464).jB.length)break;h=A(464).jB.charCodeAt(i);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;}else if(i<2){j=(a.mX[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(464).jB.length)break d;h=A(464).jB.charCodeAt(h);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(464).jB.length)break e;h=A(464).jB.charCodeAt(h);i
=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;F(c,c.jz,A(465));}else{k=((a.mX[d]&255)<<16)+((a.mX[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(464).jB.length)break a;h=A(464).jB.charCodeAt(h);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(464).jB.length)break b;h=A(464).jB.charCodeAt(h);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(464).jB.length)break c;h=A(464).jB.charCodeAt(h);i=c.jz;Bf(c,i,i+1|0);c.jA.data[i]=h;F(c,c.jz,A(466));}d=d+3|0;}e=new V;e.jC=1;e.jD=1;B(e);}e
=new V;e.jC=1;e.jD=1;B(e);}e=new V;e.jC=1;e.jD=1;B(e);}e=new V;e.jC=1;e.jD=1;B(e);}e=new V;e.jC=1;e.jD=1;B(e);}e=new V;e.jC=1;e.jD=1;B(e);}e=new V;e.jC=1;e.jD=1;B(e);}e=new V;e.jC=1;e.jD=1;B(e);}e=new V;e.jC=1;e.jD=1;B(e);};
function N2(){C.call(this);this.tu=null;}
let VL=E(0);
let Sw=E(0);
let Tm=E(0);
let Hd=E();
let EF=a=>{return;};
function H_(){Hd.call(this);this.lI=null;}
let FP=(a,b)=>{a.lI=b;},
AV0=a=>{let b=new H_();FP(b,a);return b;};
function It(){let a=this;H_.call(a);a.lq=0;a.ln=null;a.lm=null;a.lr=null;}
let U5=(a,b,c)=>{a.lI=b;b=new J;b.jA=G(16);a.ln=b;a.lm=G(32);a.lq=c;a.lr=Cp;},
AUR=(a,b)=>{let c=new It();U5(c,a,b);return c;};
let G9=E(It);
let C1=E(G9);
let AGo=(a,b)=>{BZ(Bz(b));};
function GP(){let a=this;C.call(a);a.rp=null;a.ud=null;}
let AJ_=(a,b)=>{a.rp.g4(b.loaded);};
let Za=E();
function Cx(){Hd.call(this);this.lk=null;}
let YU=(a,b)=>{a.lk=BM(b);},
AOZ=a=>{let b=new Cx();YU(b,a);return b;};
function J1(){let a=this;C.call(a);a.uD=null;a.vo=null;}
let I_=b=>{let c,d,e;if(b.jB.length?0:1){c=new Jc;c.jC=1;c.jD=1;c.sO=b;B(c);}if(0>=b.jB.length){b=new V;b.jC=1;b.jD=1;B(b);}if(!TR(b.jB.charCodeAt(0))){c=new Jc;c.jC=1;c.jD=1;c.sO=b;B(c);}d=1;a:{while(d<b.jB.length){if(d<0)break a;if(d>=b.jB.length)break a;b:{e=b.jB.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(TR(e))break b;else{c=new Jc;c.jC=1;c.jD=1;c.sO=b;B(c);}}}d=d+1|0;}return;}b=new V;b.jC=1;b.jD=1;B(b);},
TR=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let Nm=E(J1);
let Cp=null;
let ATL=()=>{let b,c,d,e,f;b=new Nm;c=R(H,0);d=c.data;I_(A(3));e=d.length;f=0;while(f<e){I_(d[f]);f=f+1|0;}b.uD=A(3);b.vo=c.p();Cp=b;};
function Jc(){Bn.call(this);this.sO=null;}
let KF=E(0);
function HI(){let a=this;C.call(a);a.ui=null;a.po=null;a.mp=0;a.o6=null;a.ut=0.0;a.sH=0.0;a.lT=0;a.oj=null;a.r8=null;a.sg=null;a.tV=0;a.wq=0;a.vg=0;a.vm=0;a.uF=0;a.o9=null;a.p_=null;a.xs=0;a.qK=null;a.sj=0.0;a.rC=0;a.tc=0;a.ue=0;}
let VE=null;
let HG=()=>{HG=BP(HI);AI4();};
let Kx=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;HG();a.mp=0;a.o6=null;a.ut=0.0;a.sH=0.0;a.lT=0;a.oj=C5();a.r8=C5();a.sg=C5();a.tV=0;a.wq=770;a.vg=771;a.vm=770;a.uF=771;a.p_=null;d=new BH;d.kn=1.0;d.km=1.0;d.kl=1.0;d.kk=1.0;CQ(d);a.qK=d;a.sj=SN;a.rC=0;a.tc=0;a.ue=0;if(b>8191){c=new Bn;d=new J;d.jA=G(16);F(d,d.jz,A(467));L(d,d.jz,b,10);e=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);c.jC=1;c.jD=1;c.jE=e;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}j=Em===null?VE:Ls;k=new IV;l=b*4|0;m=b*6|0;f
=R(DN,3);g=f.data;d=new DN;d.mb=1;d.lX=2;d.ma=5126;d.mj=0;d.mf=A(468);d.nJ=0;d.oO=DZ(1);g[0]=d;d=new DN;d.mb=4;d.lX=4;d.ma=5121;d.mj=1;d.mf=A(469);d.nJ=0;d.oO=DZ(4);g[1]=d;d=new DN;d.mb=16;d.lX=2;d.ma=5126;d.mj=0;d.mf=A(470);d.nJ=0;d.oO=DZ(16);g[2]=d;Vi(k,j,0,l,m,QF(f));a.ui=k;d=a.r8;n=B8.kP.width;o=B8.kP.height;L7(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.po=Cd(b*20|0);f=Fg(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.ui.lO.g9(f,0,g.length);if(c!==null)a.o9=c;else{e=Qk(A(471),A(472));if(!e.ni){c=new Bn;d=new J;d.jA=G(16);F(d,d.jz,A(473));if(!e.ni)j=e.mV;else{j=Bl.g_(e.mg);e.mV=j;}F(d,d.jz,j);e=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);c.jC=1;c.jD=1;c.jE=e;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}a.o9=e;a.xs=1;}},
AUc=(a,b)=>{let c=new HI();Kx(c,a,b);return c;},
QJ=a=>{let b,c;if(a.lT){b=new BN;b.jC=1;b.jD=1;b.jE=A(474);B(b);}a.rC=0;B1.ha(0);c=a.p_;if(c!==null)c.hb();else{c=a.o9;b=Bl;if(c.kz){CE(c,c.ls,c.lu);c.kz=0;}b.hd(c.mg);}F2(a);a.lT=1;},
Up=a=>{let b,c;if(!a.lT){b=new BN;b.jC=1;b.jD=1;b.jE=A(475);B(b);}if(a.mp>0)DX(a);a.o6=null;a.lT=0;c=B1;c.ha(1);if(a.tV?0:1)c.bb(3042);},
AGr=(a,b,c,d,e)=>{let f,g;if(!a.lT){b=new BN;b.jC=1;b.jD=1;b.jE=A(476);B(b);}f=a.po.data.length;if(b!==a.o6){DX(a);a.o6=b;b=b.mR;a.ut=1.0/b.mE;a.sH=1.0/b.mD;g=f;}else{g=f-a.mp|0;if(!g){DX(a);g=f;}}if(g>=e)g=e;DD(c,d,a.po,a.mp,g);a.mp=a.mp+g|0;e=e-g|0;while(e>0){d=d+g|0;DX(a);g=f>=e?e:f;DD(c,d,a.po,0,g);a.mp=a.mp+g|0;e=e-g|0;}},
PT=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.lT){b=new BN;b.jC=1;b.jD=1;b.jE=A(476);B(b);}l=a.po;m=b.oT;if(m!==a.o6){DX(a);a.o6=m;m=m.mR;a.ut=1.0/m.mE;a.sH=1.0/m.mD;}else{n=l.data;if(a.mp==n.length)DX(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{Gn();n=FV.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.uk;bb=b.uh;bc=b.uj;bd=b.ul;be=a.sj;bf=a.mp;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.mp=bf+20|0;},
DX=a=>{let b,c,d,e,f,g;b=a.mp;if(!b)return;a.rC=a.rC+1|0;a.tc=a.tc+1|0;c=b/20|0;if(c>a.ue)a.ue=c;b=c*6|0;d=a.o6;B1.cy(d.mv,d.n4);d=a.ui;e=a.po;f=a.mp;d.lR.he(e,0,f);g=d.lO.hf(1);CA(g,0);CK(g,b);if(a.tV)B1.bb(3042);else{B1.W(3042);c=a.wq;if(c!=(-1))B1.hg(c,a.vg,a.vm,a.uF);}g=a.p_;if(g===null)g=a.o9;Si(d,g,4,0,b,d.rr);a.mp=0;},
F2=a=>{let b,c,d,e;Sm(C8(a.sg,a.r8.kQ),a.oj);b=a.p_;if(b!==null){b.hj(A(477),a.sg);a.p_.hk(A(478),0);}else{b=a.o9;c=a.sg;HX();d=IS(b,A(477),Hz);e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}Qb(e,d,1,0,c.kQ,0);b=a.o9;c=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}c.hn(IS(b,A(478),Hz),0);}},
AI4=()=>{VE=Lc;};
let Ra=E(0);
function Ks(){C.call(this);this.yu=null;}
function S3(){let a=this;Ks.call(a);a.mQ=null;a.zd=null;a.p8=null;a.vZ=null;a.y8=null;a.ys=null;a.yt=null;}
let AE0=(a,b)=>{let c,d,e,f,g,h,i;a.yu=b;c=new MR;b=new Sf;d=new P3;AL8(d);d.uZ=1.0;e=new Bi;CO();d.wo=e;d.ub=0.0;b.s5=new Bi;b.rl=1.0;b.qa=d;d=new HI;HG();Kx(d,1000,null);Se(c,b,d);c.xv=1;a.mQ=c;KP.l4=c;b=new Tc;EP(b);c=new FE;e=Fq;f=Gr(e.oV,A(479),E5);d=null;g=Gc(f,FA(f),d,0);d=B1;e=d.jH.createTexture();h=d.l9;d.l9=h+1|0;B7(d.mN,h,B9(e));d=Fs;c.nq=d;c.nT=d;d=FC;c.nm=d;c.nr=d;c.op=1.0;c.mv=3553;c.n4=h;Gy(c,g);d=C3;e=Gb(DC,d);e=e===null?null:e.l$;if(e===null)e=EL(1,16);a:{BB(e,c);E4(DC,d,e);b.yM=c;d=new Js;d.oT
=c;Ui(d,0,0,1,1);b.vR=d;c=new M8;KA();b.x6=c;a.zd=b;c=a.mQ.k3;d=b.kO;if(d!==null){if(d!==c){i=EO(d.j0,b,1);if(i!=(-1)){e=d.j0;C7(e);e=DL(e,i);d=d.k4;if(d!==null)F3(d,e);e.kO=null;e.x(null);}}else break a;}BB(c.j0,b);b.kO=c;b.k4=c.k4;}b=new MG;EP(b);c=new FE;e=Fq;f=Gr(e.oV,A(480),E5);d=null;g=Gc(f,FA(f),d,0);d=B1;e=d.jH.createTexture();h=d.l9;d.l9=h+1|0;B7(d.mN,h,B9(e));d=Fs;c.nq=d;c.nT=d;d=FC;c.nm=d;c.nr=d;c.op=1.0;c.mv=3553;c.n4=h;Gy(c,g);d=C3;e=Gb(DC,d);e=e===null?null:e.l$;if(e===null)e=EL(1,16);BB(e,c);E4(DC,
d,e);b.uB=c;d=new Fx;e=c.mR;Gu(d,c,0,0,e.mE,e.mD);b.uA=d;if(!(b.l5===41.0&&b.l2===59.0)){b.l5=41.0;b.l2=59.0;}a.p8=b;if(!(b.kt===200.0&&b.ks===101.0)){b.kt=200.0;b.ks=101.0;}b=new MG;EP(b);c=new FE;e=Fq;f=Gr(e.oV,A(480),E5);d=null;g=Gc(f,FA(f),d,0);d=B1;e=d.jH.createTexture();h=d.l9;d.l9=h+1|0;B7(d.mN,h,B9(e));d=Fs;c.nq=d;c.nT=d;d=FC;c.nm=d;c.nr=d;c.op=1.0;c.mv=3553;c.n4=h;Gy(c,g);d=C3;e=Gb(DC,d);e=e===null?null:e.l$;if(e===null)e=EL(1,16);BB(e,c);E4(DC,d,e);b.uB=c;d=new Fx;e=c.mR;Gu(d,c,0,0,e.mE,e.mD);b.uA
=d;if(!(b.l5===41.0&&b.l2===59.0)){b.l5=41.0;b.l2=59.0;}a.vZ=b;if(!(b.kt===200.0&&b.ks===396.0)){b.kt=200.0;b.ks=396.0;}b=new Is;EP(b);c=new FE;e=Fq;f=Gr(e.oV,A(481),E5);d=null;g=Gc(f,FA(f),d,0);d=B1;e=d.jH.createTexture();h=d.l9;d.l9=h+1|0;B7(d.mN,h,B9(e));d=Fs;c.nq=d;c.nT=d;d=FC;c.nm=d;c.nr=d;c.op=1.0;c.mv=3553;c.n4=h;Gy(c,g);d=C3;e=Gb(DC,d);e=e===null?null:e.l$;if(e===null)e=EL(1,16);BB(e,c);E4(DC,d,e);b.ux=c;d=new Fx;e=c.mR;Gu(d,c,0,0,e.mE,e.mD);b.sd=d;if(!(b.l5===20.0&&b.l2===20.0)){b.l5=20.0;b.l2=20.0;}a.y8
=b;if(!(b.kt===150.0&&b.ks===106.0)){b.kt=150.0;b.ks=106.0;}b:{c=a.mQ.k3;d=b.kO;if(d!==null){if(d===c)break b;i=EO(d.j0,b,1);if(i!=(-1)){e=d.j0;C7(e);e=DL(e,i);d=d.k4;if(d!==null)F3(d,e);e.kO=null;e.x(null);}}BB(c.j0,b);b.kO=c;b.k4=c.k4;}b=new Is;EP(b);c=new FE;e=Fq;f=Gr(e.oV,A(481),E5);d=null;g=Gc(f,FA(f),d,0);d=B1;e=d.jH.createTexture();h=d.l9;d.l9=h+1|0;B7(d.mN,h,B9(e));d=Fs;c.nq=d;c.nT=d;d=FC;c.nm=d;c.nr=d;c.op=1.0;c.mv=3553;c.n4=h;Gy(c,g);d=C3;e=Gb(DC,d);e=e===null?null:e.l$;if(e===null)e=EL(1,16);BB(e,
c);E4(DC,d,e);b.ux=c;d=new Fx;e=c.mR;Gu(d,c,0,0,e.mE,e.mD);b.sd=d;if(!(b.l5===20.0&&b.l2===20.0)){b.l5=20.0;b.l2=20.0;}a.ys=b;if(!(b.kt===125.0&&b.ks===106.0)){b.kt=125.0;b.ks=106.0;}c:{c=a.mQ.k3;d=b.kO;if(d!==null){if(d===c)break c;i=EO(d.j0,b,1);if(i!=(-1)){e=d.j0;C7(e);e=DL(e,i);d=d.k4;if(d!==null)F3(d,e);e.kO=null;e.x(null);}}BB(c.j0,b);b.kO=c;b.k4=c.k4;}b=new Is;EP(b);c=new FE;e=Fq;f=Gr(e.oV,A(481),E5);d=null;g=Gc(f,FA(f),d,0);d=B1;e=d.jH.createTexture();h=d.l9;d.l9=h+1|0;B7(d.mN,h,B9(e));d=Fs;c.nq=d;c.nT
=d;d=FC;c.nm=d;c.nr=d;c.op=1.0;c.mv=3553;c.n4=h;Gy(c,g);d=C3;e=Gb(DC,d);e=e===null?null:e.l$;if(e===null)e=EL(1,16);BB(e,c);E4(DC,d,e);b.ux=c;d=new Fx;e=c.mR;Gu(d,c,0,0,e.mE,e.mD);b.sd=d;if(!(b.l5===20.0&&b.l2===20.0)){b.l5=20.0;b.l2=20.0;}a.yt=b;if(!(b.kt===100.0&&b.ks===106.0)){b.kt=100.0;b.ks=106.0;}d:{c=a.mQ.k3;d=b.kO;if(d!==null){if(d===c)break d;i=EO(d.j0,b,1);if(i!=(-1)){e=d.j0;C7(e);e=DL(e,i);d=d.k4;if(d!==null)F3(d,e);e.kO=null;e.x(null);}}BB(c.j0,b);b.kO=c;b.k4=c.k4;}e:{b=a.mQ;c=a.p8;b=b.k3;d=c.kO;if
(d!==null){if(d===b)break e;i=EO(d.j0,c,1);if(i!=(-1)){e=d.j0;C7(e);e=DL(e,i);d=d.k4;if(d!==null)F3(d,e);e.kO=null;e.x(null);}}BB(b.j0,c);c.kO=b;c.k4=b.k4;}f:{b=a.mQ;c=a.vZ;d=b.k3;f=c.kO;if(f!==null){if(f===d)break f;i=EO(f.j0,c,1);if(i!=(-1)){b=f.j0;C7(b);e=DL(b,i);b=f.k4;if(b!==null)F3(b,e);e.kO=null;e.x(null);}}BB(d.j0,c);c.kO=d;c.k4=d.k4;}b=a.p8;c=new Tk;c.un=a;if(!KX(b.r9,c,1))BB(b.r9,c);},
AI0=a=>{let b=new S3();AE0(b,a);return b;};
let VT=E(Bx);
let Q=E(Bx);
let ACw=(a,b)=>{a.jC=1;a.jD=1;a.jE=b;},
Ka=a=>{let b=new Q();ACw(b,a);return b;};
let ABP=E();
let KR=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function D_(){C.call(this);this.m7=null;}
let Yz=a=>{AHw(a.m7);};
let AC2=E();
let VC=E();
let Oo=null;
let M3=()=>{M3=BP(VC);ANZ();};
let ANZ=()=>{let b,c;b=W((Ng.p()).data.length);c=b.data;Oo=b;c[Fw.jK]=1;c[Fn.jK]=2;c[Fc.jK]=3;c[E7.jK]=4;c[Jv.jK]=5;};
let MZ=E(Bx);
function Nq(){let a=this;C.call(a);a.qa=null;a.sh=0.0;a.sp=0.0;a.o$=0;a.o_=0;a.pH=0;a.pU=0;a.s5=null;}
let MY=(a,b)=>{let c,d,e,f;AHz(a.o$,a.o_,a.pH,a.pU);c=a.qa;d=a.sh;c.s4=d;e=a.sp;c.tB=e;if(b){f=c.tA;d=d/2.0;e=e/2.0;f.jL=d;f.jM=e;f.jN=0.0;}VU(c,1);},
EG=(a,b)=>{let c,d,e,f;c=a.s5;d=b.kw;e=b.kv;c.jL=d;c.jM=e;c.jN=1.0;AKf(a.qa,c,a.o$,a.o_,a.pH,a.pU);c=a.s5;f=c.jL;d=c.jM;b.kw=f;b.kv=d;return b;};
function Sf(){Nq.call(this);this.rl=0.0;}
function Tc(){let a=this;CP.call(a);a.yM=null;a.vR=null;a.qj=null;a.x6=null;}
let ABK=(a,b,c)=>{let d,e,f,g,h;d=new QK;e=a.vR;f=new QP;f.xe=20;f.yB=4000;f.xE=1.0;ARQ(d,b,e,f);d.zp=Cd(8);a.qj=d;c=FH(Q9);d.n6.mY=c;d=a.qj;g=d.qw;h=d.n6.mY;d=d.qq;Jy(d,96.0,115.0,424.0,115.0,26.0,g,h,h);d.ms.hB();d=a.qj;g=d.qw;h=d.n6.mY;d=d.qq;Jy(d,96.0,410.0,424.0,410.0,26.0,g,h,h);d.ms.hB();d=a.qj;g=d.qw;h=d.n6.mY;d=d.qq;Jy(d,109.0,115.0,109.0,410.0,26.0,g,h,h);d.ms.hB();d=a.qj;g=d.qw;h=d.n6.mY;d=d.qq;Jy(d,411.0,115.0,411.0,410.0,26.0,g,h,h);d.ms.hB();Up(b);QJ(b);};
function MG(){let a=this;CP.call(a);a.uB=null;a.uA=null;}
let Xk=(a,b,c)=>{let d,e,f,g;d=a.ra;c=d.kn;e=d.km;f=d.kl;g=d.kk;d=b.qK;d.kn=c;d.km=e;d.kl=f;d.kk=g;CQ(d);b.sj=FH(b.qK);PT(b,a.uA,a.kt,a.ks,a.pX,a.pY,a.l5,a.l2,a.pp,a.pr,a.qn);},
AC4=(a,b)=>{Ki(a,b);};
function Is(){let a=this;CP.call(a);a.ux=null;a.sd=null;}
let ALQ=(a,b,c)=>{let d,e,f,g;d=a.ra;c=d.kn;e=d.km;f=d.kl;g=d.kk;d=b.qK;d.kn=c;d.km=e;d.kl=f;d.kk=g;CQ(d);b.sj=FH(b.qK);PT(b,a.sd,a.kt,a.ks,a.pX,a.pY,a.l5,a.l2,a.pp,a.pr,a.qn);},
ANn=(a,b)=>{let c,d;c=a.kt;if(c>=100.0&&c<=400.0){d=a.ks;if(d<400.0){b=c+1.0;if(!(c===b&&d===d)){a.kt=b;a.ks=d;}}}c=a.kt;if(c>400.0){d=a.ks;if(d<=400.0){b=d+1.0;if(!(c===c&&d===b)){a.kt=c;a.ks=b;}}}c=a.kt;if(c>=100.0){d=a.ks;if(d>400.0){b=c-1.0;if(!(c===b&&d===d)){a.kt=b;a.ks=d;}}}c=a.kt;if(c<100.0){d=a.ks;if(d>107.0){b=d-1.0;if(!(c===c&&d===b)){a.kt=c;a.ks=b;}}}c=a.kt;if(c<100.0){d=a.ks;if(d<=107.0){b=c+1.0;if(!(c===b&&d===d)){a.kt=b;a.ks=d;}}}};
function Tk(){BX.call(this);this.un=null;}
let Ft=E(G9);
let AD8=(a,b)=>{Dt(Bz(b));};
let AB3=E(Ei);
let V1=null;
let ATq=()=>{V1=M(ACB);};
let AK_=E();
let NG=null,PW=null,QE=null;
let AF6=()=>{NG=AAb([U(1),U(10),U(100),U(10000),U(100000000),D(1874919424, 2328306)]);PW=new Mj;QE=new T1;};
let AL2=E();
let Kv=B$,Xc=null,Hr=null,H5=null;
let AFU=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AV_(b):D(0, 2146959360);c.uR=DT(CZ(d,D(0, 2147483648)),B$)?0:1;e=CZ(d,D(4294967295, 1048575));f=Bg(AUi(d,52))&2047;if(DT(e,B$)&&!f){c.ty=B$;c.sQ=0;return;}if(f)e=ACL(e,D(0, 1048576));else{e=Fo(e,1);while(DT(CZ(e,D(0, 1048576)),B$)){e=Fo(e,1);f=f+(-1)|0;}}g=H5;h=AMK(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=H5.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=ID(e,Hr.data[i],j);if(ACp(k,Kv)){while(EW(k,Kv)<=0){h=h+(-1)|0;k=C0(Z(k,U(10)),U(9));}g=H5.data;i=
h+1|0;j=12+(f-g[i]|0)|0;k=ID(e,Hr.data[i],j);}e=Fo(e,1);d=C0(e,U(1));g=Hr.data;i=h+1|0;l=g[i];f=j-1|0;m=ID(d,l,f);l=ID(AFB(e,U(1)),Hr.data[i],f);n=U(1);while(true){o=Z(n,U(10));if(EW(Ey(k,o),Ey(l,o))<=0)break;n=o;}p=U(1);while(true){q=Z(p,U(10));if(EW(Ey(k,q),Ey(m,q))>=0)break;p=q;}i=EW(n,p);e=i>0?Z(Ey(k,n),n):i<0?C0(Z(Ey(k,p),p),p):Z(Ey(C0(k,My(p,U(2))),p),p);if(EW(e,D(2808348672, 232830643))>=0)while(true){h=h+1|0;e=Ey(e,U(10));if(EW(e,D(2808348672, 232830643))<0)break;}else if(EW(e,D(1569325056, 23283064))
<0){h=h+(-1)|0;e=Z(e,U(10));}c.ty=e;c.sQ=h-330|0;},
ID=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=CZ(b,U(65535));f=CZ(Bd(b,16),U(65535));g=CZ(Bd(b,32),U(65535));h=CZ(Bd(b,48),U(65535));i=CZ(c,U(65535));j=CZ(Bd(c,16),U(65535));k=CZ(Bd(c,32),U(65535));l=CZ(Bd(c,48),U(65535));return C0(C0(C0(Fo(Z(l,h),32+d|0),Fo(C0(Z(l,g),Z(k,h)),16+d|0)),Fo(C0(C0(Z(l,f),Z(k,g)),Z(j,h)),d)),Bd(C0(C0(C0(Z(k,e),Z(j,f)),Z(i,g)),Fo(C0(C0(C0(Z(l,e),Z(k,f)),Z(j,g)),Z(i,h)),16)),32-d|0));},
AEQ=()=>{Kv=Ey(U(-1),U(10));Xc=AJ3();Hr=AAb([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);H5=AWb([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function Mj(){let a=this;C.call(a);a.ty=B$;a.sQ=0;a.uR=0;}
let ZO=a=>{return;},
AJ3=()=>{let a=new Mj();ZO(a);return a;};
let GF=E(BI);
let Lc=null,Op=null,R9=null,Ls=null,Uh=null;
let AQs=()=>{let b,c,d,e;b=new GF;b.jR=A(482);b.jK=0;Lc=b;c=new GF;c.jR=A(483);c.jK=1;Op=c;d=new GF;d.jR=A(484);d.jK=2;R9=d;e=new GF;e.jR=A(485);e.jK=3;Ls=e;Uh=S(GF,[b,c,d,e]);};
function IV(){let a=this;C.call(a);a.lR=null;a.lO=null;a.rr=0;a.pS=0;a.qy=null;a.q2=0;a.wn=null;}
let HH=null;
let Vi=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.rr=1;a.q2=0;g=new Bi;CO();a.wn=g;Mg();switch(St.data[b.jK]){case 1:a.lR=RY(c,d,f);b=new Hk;b.nS=1;b.ps=0;b.s6=1;if(!C$){h=Fg(e);e=h.data.length;f=new Jq;i=0+e|0;By(f);f.jZ=(-1);f.j6=e;f.jG=e;f.jO=0;f.jG=i;f.qS=0;f.re=0;f.qv=h;}else{d=e*2|0;if(d<0){b=new Bn;f=new J;f.jA=G(16);B2(f,f.jz,Cg(A(486)));L(f,f.jz,d,10);g=new H;h=f.jA;j=h.data;d=f.jz;e=j.length;if(d>=0&&d<=(e-0|0)){g.jB=K(h.data,0,d);b.jC=1;b.jD=1;b.jE=g;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}f=new CR;h=BM(d);f.jZ
=(-1);f.j6=d;f.jG=d;f.kC=Cl;f.k2=0;f.ky=h;f.jO=0;f.jG=d;f.lF=1;f.la=0;f.kC=Da();f=JG(f);}b.nn=f;f.jG=f.jO;f.jO=0;f.jZ=(-1);f=Bl;g=f.jH.createBuffer();e=f.lU;f.lU=e+1|0;B7(f.mB,e,B9(g));b.ro=e;b.qJ=!c?35048:35044;a.lO=b;a.pS=0;break a;case 2:break;case 3:a.lR=Rz(c,d,f);a.lO=VN(c,e);a.pS=0;break a;case 4:break b;default:break b;}a.lR=AQa(c,d,f);a.lO=VN(c,e);a.pS=0;break a;}b=new OE;Sx(b,0,d,f);a.lR=b;b=new PN;b.nS=1;b.ps=0;b.s6=1;if(!C$){h=Fg(e);d=h.data.length;f=new Jq;k=0+d|0;Us(f,d);f.jO=0;f.jG=k;f.qS=0;f.re
=0;f.qv=h;}else{c=e*2|0;if(c<0){b=new Bn;f=new J;f.jA=G(16);D2(f,f.jz,A(486));L(f,f.jz,c,10);g=new H;h=f.jA;j=h.data;d=f.jz;e=j.length;if(d>=0&&d<=(e-0|0)){g.jB=K(h.data,0,d);b.jC=1;b.jD=1;b.jE=g;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}f=new CR;h=BM(c);By(f);f.jZ=(-1);f.j6=c;f.jG=c;f.kC=Cl;f.k2=0;f.ky=h;f.jO=0;f.jG=c;f.lF=1;f.la=0;f.kC=Da();f=JG(f);}b.nn=f;f.jG=f.jO;f.jO=0;f.jZ=(-1);f=Bl;g=f.jH.createBuffer();d=f.lU;f.lU=d+1|0;B7(f.mB,d,B9(g));b.ro=d;b.qJ=35044;a.lO=b;a.pS=1;}b=C3;f=HH;if(b===null){f=f.mx.data[0];while
(f!==null&&f.mw!==null){f=f.mH;}}else{l=b;if(!l.$id$){g=Eg();l.$id$=g;}e=b.$id$;h=f.mx.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.oK==e){g=f.mw;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.mH;}}f=f===null?null:f.l$;if(f===null){f=new Bt;f.kr=1;f.jQ=R(C,16);}BB(f,a);E4(HH,b,f);},
AUC=(a,b,c,d,e)=>{let f=new IV();Vi(f,a,b,c,d,e);return f;},
Si=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.lR.hJ(b,g);g=a.qy;if(g!==null&&g.hK()>0)a.qy.hJ(b,h);if(a.lO.hL()>0)a.lO.hb();}if(a.pS){if(a.lO.hL()<=0)Bl.hM(c,d,e);else{g=a.lO.hf(0);i=g.jO;CA(g,d);Bl.hN(c,e,5123,g);CA(g,i);}}else{j=0;if(a.q2)j=a.qy.hK();if(a.lO.hL()<=0){if(a.q2&&j>0)Em.hO(c,d,e,j);else Bl.hM(c,d,e);}else{if((e+d|0)>a.lO.hP()){b=new Q;g=new J;g.jA=G(16);F(g,g.jz,A(487));L(g,g.jz,e,10);F(g,g.jz,A(488));L(g,g.jz,d,10);F(g,g.jz,A(489));c=a.lO.hP();L(g,g.jz,c,10);F(g,g.jz,
A(490));h=new H;k=g.jA;l=k.data;d=g.jz;e=l.length;if(d>=0&&d<=(e-0|0)){h.jB=K(k.data,0,d);b.jC=1;b.jD=1;b.jE=h;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}if(a.q2&&j>0)Em.hQ(c,e,5123,d*2|0,j);else Bl.hR(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.lR.hS(b,g);g=a.qy;if(g!==null&&g.hK()>0)a.qy.hS(b,h);if(a.lO.hL()>0)a.lO.hT();}},
ART=()=>{let b,c,d,e;b=new IH;c=Jw(16);b.oy=0;d=R(Fv,c);e=d.data;b.mx=d;b.st=0.75;b.px=e.length*0.75|0;HH=b;};
function M9(){let a=this;C.call(a);a.tA=null;a.vQ=null;a.wk=null;a.s_=null;a.tY=null;a.pQ=null;a.qA=null;a.ub=0.0;a.wg=0.0;a.s4=0.0;a.tB=0.0;a.wb=null;a.xN=null;a.xt=null;}
let AL8=a=>{let b,c,d;b=new Bi;CO();a.tA=b;b=new Bi;b.jL=0.0;b.jM=0.0;b.jN=(-1.0);a.vQ=b;b=new Bi;b.jL=0.0;b.jM=1.0;b.jN=0.0;a.wk=b;a.s_=C5();a.tY=C5();a.pQ=C5();a.qA=C5();a.ub=1.0;a.wg=100.0;a.s4=0.0;a.tB=0.0;a.wb=ALJ();a.xN=new Bi;b=new Lv;L5();c=new Bi;b.xG=c;d=new Bi;b.yQ=d;c.jL=0.0;c.jM=0.0;c.jN=0.0;d.jL=0.0;d.jM=0.0;d.jN=0.0;a.xt=b;},
AKf=(a,b,c,d,e,f)=>{let g,h;g=b.jL-c;h=B8.kP.height-b.jM-d;b.jL=2.0*g/e-1.0;b.jM=2.0*h/f-1.0;b.jN=2.0*b.jN-1.0;AAQ(b,a.qA);return b;};
function P3(){let a=this;M9.call(a);a.uZ=0.0;a.wo=null;}
let VU=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.s_;d=a.uZ;e=a.s4;f=d* -e/2.0;e=d*e/2.0;g=a.tB;L7(c,f,e,d* -(g/2.0),d*g/2.0,a.ub,a.wg);c=a.tY;h=a.tA;i=a.wo;d=h.jL;j=h.jM;f=h.jN;i.jL=d;i.jM=j;i.jN=f;k=a.vQ;l=k.jL;e=k.jM;g=k.jN;d=d+l;j=j+e;f=f+g;i.jL=d;i.jM=j;i.jN=f;i=a.wk;k=Va;k.jL=d;k.jM=j;k.jN=f;l=h.jL;e=h.jM;g=h.jN;l=d-l;e=j-e;g=f-g;k.jL=l;k.jM=e;k.jN=g;ACU(c,k,i);i=Pj;l= -h.jL;e= -h.jM;g= -h.jN;KQ(i);m=i.kQ.data;m[12]=l;m[13]=e;m[14]=g;Sm(c,i);C8(a.pQ,a.s_.kQ);N1(a.pQ.kQ,a.tY.kQ);if(b){C8(a.qA,a.pQ.kQ);ADk(a.qA.kQ);AKl(a.wb,
a.qA);}};
let M8=E();
let AJq=null;
let KA=()=>{KA=BP(M8);AL5();};
let AL5=()=>{AJq=RZ(5000,null);};
let MQ=E(0);
let US=E(0);
function OJ(){let a=this;C.call(a);a.xb=null;a.wD=null;a.yn=0;a.y4=0;}
let AL3=a=>{let b,c;if(!a.yn){b=a.xb;b.vf=null;if(BW!==b)BW=b;BW.n9=Ea();c=a.wD;b=null;c.o5.e(b);}};
function OQ(){let a=this;C.call(a);a.lx=null;a.mo=0;a.xz=B$;a.yk=0;a.yN=0;}
let AII=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.xz=U(-1);a.yk=(-1);a.yN=(-1);c=b.length;if(!c){d=new Bn;d.jC=1;d.jD=1;d.jE=A(491);B(d);}e=R(DN,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.lx=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.nt=c;switch(d.ma){case 5120:case 5121:break;case 5122:case 5123:g=2*d.lX|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.lX|0;break a;default:break b;}g=d.lX;break a;}g=0;}c=c+g|0;h=h+1|0;}a.mo=c;},
QF=a=>{let b=new OQ();AII(b,a);return b;};
function LH(){let a=this;C.call(a);a.mV=null;a.ni=0;a.rc=null;a.vB=null;a.wl=null;a.vO=null;a.nd=null;a.vM=null;a.ww=null;a.vj=null;a.mg=0;a.s7=0;a.uI=0;a.zc=null;a.ls=null;a.lu=null;a.kz=0;a.y2=0;a.mM=null;a.qb=null;}
let Hz=0,M2=null,LD=null,MS=null,ANF=null;
let HX=()=>{HX=BP(LH);AMr();};
let ARP=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;HX();a.mV=A(62);a.rc=F9(51,0.800000011920929);a.vB=F9(51,0.800000011920929);a.wl=F9(51,0.800000011920929);a.nd=F9(51,0.800000011920929);a.vM=F9(51,0.800000011920929);a.ww=F9(51,0.800000011920929);a.y2=0;if(!C$){d=W(1);e=d.data.length;f=new F5;g=0+e|0;f.jZ=(-1);f.j6=e;f.jG=e;f.jO=0;f.jG=g;f.oP=0;f.p3=0;f.oA=d;}else{h=new CR;d=BM(4);h.jZ=(-1);h.j6=4;h.jG=4;h.kC=Cl;h.k2=0;h.ky=d;h.jO=0;h.jG=4;h.lF=1;h.la=0;h.kC=Da();f=GK(h);}a.mM=f;if(!C$){d=W(1);e=d.data.length;f=new F5;g
=0+e|0;f.jZ=(-1);f.j6=e;f.jG=e;f.jO=0;f.jG=g;f.oP=0;f.p3=0;f.oA=d;}else{h=new CR;d=BM(4);h.jZ=(-1);h.j6=4;h.jG=4;h.kC=Cl;h.k2=0;h.ky=d;h.jO=0;h.jG=4;h.lF=1;h.la=0;h.kC=Da();f=GK(h);}a.qb=f;if(b===null){b=new Bn;b.jC=1;b.jD=1;b.jE=A(492);B(b);}if(c===null){b=new Bn;b.jC=1;b.jD=1;b.jE=A(493);B(b);}f=M2;if(f!==null&&f.jB.length>0){f=new J;f.jA=G(16);h=M2;F(f,f.jz,h);F(f,f.jz,b);b=new H;d=f.jA;i=d.data;e=f.jz;j=i.length;if(e>=0&&e<=(j-0|0))b.jB=K(d.data,0,e);else{b=new I;b.jC=1;b.jD=1;B(b);}}f=LD;if(f!==null&&f.jB.length
>0){f=new J;f.jA=G(16);h=LD;F(f,f.jz,h);F(f,f.jz,c);c=new H;d=f.jA;i=d.data;e=f.jz;j=i.length;if(e>=0&&e<=(j-0|0))c.jB=K(d.data,0,e);else{b=new I;b.jC=1;b.jD=1;B(b);}}a.ls=b;a.lu=c;if(!C$){i=Cd(16);k=i.data.length;f=new HP;l=0+k|0;f.jZ=(-1);f.j6=k;f.jG=k;f.jO=0;f.jG=l;f.p2=0;f.qD=0;f.pw=i;}else{f=new CR;d=BM(64);f.jZ=(-1);f.j6=64;f.jG=64;f.kC=Cl;f.k2=0;f.ky=d;f.jO=0;f.jG=64;f.lF=1;f.la=0;f.kC=Da();f=EV(f);}a.zc=f;CE(a,b,c);if(a.ni){ADl(a);AIz(a);b=C3;c=MS;l=BE(c,b);c=l<0?null:c.kh.data[l];if(c===null){c=new Bt;c.kr
=1;c.jQ=R(C,16);}BB(c,a);Cc(MS,b,c);}},
Qk=(a,b)=>{let c=new LH();ARP(c,a,b);return c;},
CE=(a,b,c)=>{let d;a.s7=VY(a,35633,b);d=VY(a,35632,c);a.uI=d;if(a.s7!=(-1)&&d!=(-1)){d=Bl.h3();if(!d)d=(-1);d=AOJ(a,d);a.mg=d;if(d!=(-1)){a.ni=1;return;}a.ni=0;return;}a.ni=0;},
VY=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bl;if(!C$){e=W(1);f=e.data.length;g=new F5;h=0+f|0;g.jZ=(-1);g.j6=f;g.jG=f;g.jO=0;g.jG=h;g.oP=0;g.p3=0;g.oA=e;}else{g=new CR;e=BM(4);g.jZ=(-1);g.j6=4;g.jG=4;g.kC=Cl;g.k2=0;g.ky=e;g.jO=0;g.jG=4;g.lF=1;g.la=0;g.kC=Da();g=GK(g);}i=d.h5(b);if(!i)return (-1);d.h6(i,c);d.h7(i);d.eH(i,35713,g);if(ET(g,0))return i;j=d.h8(i);c=new J;c.jA=G(16);d=a.mV;F(c,c.jz,d);d=b!=35633?A(494):A(495);F(c,c.jz,d);d=new H;e=c.jA;k=e.data;i=c.jz;l=k.length;if(i>=0&&i<=(l-0|0)){d.jB=K(e.data,0,i);a.mV
=d;c=new J;c.jA=G(16);F(c,c.jz,d);F(c,c.jz,j);d=new H;e=c.jA;k=e.data;i=c.jz;l=k.length;if(i>=0&&i<=(l-0|0)){d.jB=K(e.data,0,i);a.mV=d;return (-1);}c=new I;c.jC=1;c.jD=1;B(c);}c=new I;c.jC=1;c.jD=1;B(c);},
AOJ=(a,b)=>{let c,d,e,f;c=Bl;if(b==(-1))return (-1);c.h9(b,a.s7);c.h9(b,a.uI);c.h$(b);d=new CR;e=BM(4);d.jZ=(-1);d.j6=4;d.jG=4;d.kC=Cl;d.k2=0;d.ky=e;d.jO=0;d.jG=4;d.lF=1;d.la=0;d.kC=Da();f=GK(d);c.eG(b,35714,f);if(ET(f,0))return b;a.mV=Bl.g_(b);return (-1);},
IS=(a,b,c)=>{let d,e,f,g,h,i;d=a.rc;e=(-2);f=EN(d,b);if(f>=0)e=d.mz.data[f];if(e==(-2)){e=Bl.h_(a.mg,b);if(e==(-1)&&c){if(a.ni){d=new Bn;g=new J;g.jA=G(16);F(g,g.jz,A(496));F(g,g.jz,b);F(g,g.jz,A(497));b=new H;h=g.jA;i=h.data;e=g.jz;f=i.length;if(e>=0&&e<=(f-0|0)){b.jB=K(h.data,0,e);d.jC=1;d.jD=1;d.jE=b;B(d);}b=new I;b.jC=1;b.jD=1;B(b);}b=new BN;d=new J;d.jA=G(16);F(d,d.jz,A(498));if(!a.ni)g=a.mV;else{g=Bl.g_(a.mg);a.mV=g;}F(d,d.jz,g);g=new H;h=d.jA;i=h.data;e=d.jz;f=i.length;if(e>=0&&e<=(f-0|0)){g.jB=K(h.data,
0,e);b.jC=1;b.jD=1;b.jE=g;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}Ex(a.rc,b,e);}return e;},
AIz=a=>{let b,c,d,e,f;b=a.mM;b.jO=0;b.jG=b.j6;b.jZ=(-1);Bl.eG(a.mg,35718,b);c=ET(a.mM,0);a.vO=R(H,c);d=0;while(d<c){b=a.mM;b.jO=0;b.jG=b.j6;b.jZ=(-1);UY(b,0,1);b=a.qb;b.jO=0;b.jG=b.j6;b.jZ=(-1);e=Bl.eF(a.mg,d,a.mM,b);f=Bl.h_(a.mg,e);Ex(a.rc,e,f);Ex(a.vB,e,ET(a.qb,0));Ex(a.wl,e,ET(a.mM,0));a.vO.data[d]=e;d=d+1|0;}},
ADl=a=>{let b,c,d,e,f;b=a.mM;b.jO=0;b.jG=b.j6;b.jZ=(-1);Bl.eG(a.mg,35721,b);c=ET(a.mM,0);a.vj=R(H,c);d=0;while(d<c){b=a.mM;b.jO=0;b.jG=b.j6;b.jZ=(-1);UY(b,0,1);b=a.qb;b.jO=0;b.jG=b.j6;b.jZ=(-1);e=Bl.eE(a.mg,d,a.mM,b);f=Bl.ic(a.mg,e);Ex(a.nd,e,f);Ex(a.vM,e,ET(a.qb,0));Ex(a.ww,e,ET(a.mM,0));a.vj.data[d]=e;d=d+1|0;}},
AMr=()=>{let b,c,d,e;Hz=1;M2=A(62);LD=A(62);MS=ED(51,0.800000011920929);if(!C$){b=W(1);c=b.data.length;d=new F5;e=0+c|0;d.jZ=(-1);d.j6=c;d.jG=c;d.jO=0;d.jG=e;d.oP=0;d.p3=0;d.oA=b;}else{d=new CR;b=BM(4);d.jZ=(-1);d.j6=4;d.jG=4;d.kC=Cl;d.k2=0;d.ky=b;d.jO=0;d.jG=4;d.lF=1;d.la=0;d.kC=Da();d=GK(d);}ANF=d;};
function MK(){let a=this;Bt.call(a);a.m2=null;a.su=null;a.l1=0;}
let Fd=a=>{let b,c,d,e;b=a.l1-1|0;if(0>b)b=0;a.l1=b;c=a.m2;if(c===null)return;a:{if(c!==a.jQ&&!b){d=c.data;a.su=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.m2=null;},
C7=a=>{let b,c,d,e;b=a.m2;if(b!==null){c=a.jQ;if(b===c){a:{b=a.su;if(b!==null){d=b.data.length;e=a.jF;if(d>=e){DD(c,0,b,0,e);a.jQ=a.su;a.su=null;break a;}}KM(a,c.data.length);}return;}}};
function KH(){let a=this;Bt.call(a);a.pD=0;a.p0=null;a.pK=0;}
let ALT=a=>{a.pD=a.pD+1|0;},
ANT=a=>{let b,c,d,e,f,g,h,i,j;b=a.pD;if(!b){c=new BN;c.jC=1;c.jD=1;c.jE=A(499);B(c);}d=b-1|0;a.pD=d;if(!d){a:{b=a.pK;if(b>0){e=a.jF;if(b==e){a.p0.le=0;if(d>0)a.pK=e;else{f=a.jQ;d=0;c=null;if(d>e){c=new Bn;c.jC=1;c.jD=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.jF=0;}break a;}}d=0;b=a.p0.le;b:{while(true){if(d>=b)break b;c=a.p0;f=c.l3.data;e=c.le-1|0;c.le=e;h=f[e];if(h>=a.pK){if(a.pD<=0)DL(a,h);else{U6(a,h);if(h>=a.jF)break;}}d=d+1|0;}i=new I;c=new J;c.jA=G(16);F(c,c.jz,A(18));L(c,c.jz,h,10);F(c,c.jz,A(19));d
=a.jF;L(c,c.jz,d,10);j=new H;f=c.jA;g=f.data;b=c.jz;e=g.length;if(b>=0&&b<=(e-0|0)){j.jB=K(f.data,0,b);i.jC=1;i.jD=1;i.jE=j;B(i);}c=new I;c.jC=1;c.jD=1;B(c);}d=a.pK-1|0;while(true){if(d<0)break a;if(a.pD<=0)DL(a,d);else{U6(a,d);if(d>=a.jF){i=new I;c=new J;c.jA=G(16);F(c,c.jz,A(18));L(c,c.jz,d,10);F(c,c.jz,A(19));d=a.jF;L(c,c.jz,d,10);j=new H;f=c.jA;g=f.data;b=c.jz;e=g.length;if(b>=0&&b<=(e-0|0)){j.jB=K(f.data,0,b);i.jC=1;i.jD=1;i.jE=j;B(i);}c=new I;c.jC=1;c.jD=1;B(c);}}d=d+(-1)|0;}}a.pK=0;}},
U6=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.pK)return;c=0;d=a.p0;e=d.le;while(true){f=Ci(c,e);if(f>=0){Lx(d,b);return;}if(f>=0){g=new I;h=new J;h.jA=G(16);F(h,h.jz,A(18));L(h,h.jz,c,10);F(h,h.jz,A(19));b=d.le;L(h,h.jz,b,10);d=new H;i=h.jA;j=i.data;c=h.jz;e=j.length;if(c>=0&&c<=(e-0|0)){d.jB=K(i.data,0,c);g.jC=1;g.jD=1;g.jE=d;B(g);}d=new I;d.jC=1;d.jD=1;B(d);}f=Ci(b,d.l3.data[c]);if(!f)break;if(f<0){ARB(d,c,b);return;}c=c+1|0;}};
function T1(){let a=this;C.call(a);a.ta=0;a.sZ=0;a.u0=0;}
let VX=E();
let St=null;
let Mg=()=>{Mg=BP(VX);AM$();};
let AM$=()=>{let b,c;b=W((Uh.p()).data.length);c=b.data;St=b;c[Op.jK]=1;c[R9.jK]=2;c[Ls.jK]=3;c[Lc.jK]=4;};
let I2=E(0);
function IF(){let a=this;C.call(a);a.nh=null;a.oY=null;a.vX=0;a.y9=0;a.th=0;a.qW=0;a.rj=0;}
let Sx=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.qW=0;a.rj=0;a.y9=b;a.nh=d;c=Dg(d.mo/4|0,c);if(!C$){e=Cd(c);f=e.data.length;d=new HP;g=0+f|0;d.jZ=(-1);d.j6=f;d.jG=f;d.jO=0;d.jG=g;d.p2=0;d.qD=0;d.pw=e;}else{c=c*4|0;if(c<0){d=new Bn;h=new J;h.jA=G(16);B0(h,h.jz,A(486));L(h,h.jz,c,10);i=new H;e=h.jA;j=e.data;c=h.jz;k=j.length;if(c>=0&&c<=(k-0|0)){i.jB=K(e.data,0,c);d.jC=1;d.jD=1;d.jE=i;B(d);}d=new I;d.jC=1;d.jD=1;B(d);}h=new CR;e=BM(c);h.jZ=(-1);h.j6=c;h.jG=c;h.kC=Cl;h.k2=0;h.ky=e;h.jO=0;h.jG=c;h.lF=1;h.la=0;h.kC=Da();d
=EV(h);}a.oY=d;d.jG=d.jO;d.jO=0;d.jZ=(-1);d=Bl;h=d.jH.createBuffer();k=d.lU;d.lU=k+1|0;B7(d.mB,k,B9(h));a.vX=k;a.th=!b?35048:35044;},
RY=(a,b,c)=>{let d=new IF();Sx(d,a,b,c);return d;},
AD4=a=>{return a.nh;},
AMF=a=>{return a.oY.jG/(a.nh.mo/4|0)|0;},
AKd=(a,b,c,d)=>{let e,f,g;a.qW=1;e=a.oY;f=null;g=e instanceof EM;if(g)f=EV(e);else if(e instanceof D$)f=e;if(f===null){f=new Q;f.jC=1;f.jD=1;f.jE=A(500);B(f);}f.jO=0;f.jG=f.j6;f.jZ=(-1);CA(e,0);IZ(f,b,c,d);CA(e,0);if(!g)CK(e,d);else CK(e,d<<2);CA(a.oY,0);CK(a.oY,d);if(a.rj){e=Bl;f=a.oY;e.eC(34962,f.jG,f,a.th);a.qW=0;}},
ACW=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bl;d.ii(34962,a.vX);if(a.qW){e=a.oY;d.eC(34962,e.jG,e,a.th);a.qW=0;}a:{f=a.nh.lx.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nh.lx.data[g];j=h[g];if(j>=0){e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}e.ij(j);k=i.lX;l=i.ma;m=i.mj;n=a.nh.mo;o=i.nt;e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}e.ik(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nh.lx.data[g];d=i.mf;e=b.nd;p=(-1);j=EN(e,d);if(j>=0)p=e.mz.data[j];if(p>=0){e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}e.ij(p);j
=i.lX;k=i.ma;l=i.mj;m=a.nh.mo;n=i.nt;e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}e.ik(p,j,k,l,m,n);}g=g+1|0;}}a.rj=1;},
YI=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bl;e=a.nh.lx.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}h.il(g);}f=f+1|0;}}i=0;while(i<e){j=a.nh.lx.data[i].mf;k=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}l=Bl;h=b.nd;g=(-2);f=EN(h,j);if(f>=0)g=h.mz.data[f];if(g==(-2)){g=l.ic(b.mg,j);Ex(b.nd,j,g);}if(g!=(-1))k.il(g);i=i+1|0;}}d.ii(34962,0);a.rj=0;};
let J4=E(0);
function Hk(){let a=this;C.call(a);a.nn=null;a.ro=0;a.s6=0;a.nS=0;a.ps=0;a.qJ=0;}
let AE9=a=>{return a.nn.jG;},
Xs=a=>{return a.nn.j6;},
AJN=(a,b,c,d)=>{let e;a.nS=1;e=a.nn;e.jO=0;e.jG=e.j6;e.jZ=(-1);UJ(e,b,c,d);e=a.nn;c=e.jO;e.jG=c;e.jO=0;e.jZ=(-1);if(a.ps){Bl.eC(34963,c,e,a.qJ);a.nS=0;}},
Yq=(a,b)=>{a.nS=a.nS|b;return a.nn;},
AQm=a=>{let b,c,d;b=a.ro;if(!b){c=new Q;c.jC=1;c.jD=1;c.jE=A(501);B(c);}Bl.ii(34963,b);if(a.nS){c=Bl;d=a.nn;c.eC(34963,d.jG,d,a.qJ);a.nS=0;}a.ps=1;},
AMX=a=>{Bl.ii(34963,0);a.ps=0;};
function Pm(){let a=this;C.call(a);a.nb=null;a.ns=null;a.nQ=null;a.uN=0;a.u2=0;a.xr=0;a.sN=0;a.qM=0;a.ru=0;}
let AIW=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.qM=0;a.ru=0;a.xr=b;a.nb=d;c=Dg(d.mo,c);if(!C$){e=BM(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new CR;g=0+f|0;d.jZ=(-1);d.j6=f;d.jG=f;d.kC=Cl;d.k2=0;d.ky=e;d.jO=0;d.jG=g;d.lF=0;d.la=0;break a;}d=new I;d.jC=1;d.jD=1;Bj(d);B(d);}if(c<0){d=new Bn;h=new J;h.jA=G(16);B0(h,h.jz,A(486));L(h,h.jz,c,10);i=new H;e=h.jA;j=e.data;c=h.jz;f=j.length;if(c>=0&&c<=(f-0|0)){i.jB=K(e.data,0,c);d.jC=1;d.jD=1;d.jE=i;B(d);}d=new I;d.jC=1;d.jD=1;B(d);}d=new CR;e=BM(c);d.jZ=(-1);d.j6=c;d.jG=
c;d.kC=Cl;d.k2=0;d.ky=e;d.jO=0;d.jG=c;d.lF=1;d.la=0;d.kC=Da();}a.nQ=d;a.u2=1;a.sN=!b?35048:35044;a.ns=EV(d);d=Bl;h=d.jH.createBuffer();g=d.lU;d.lU=g+1|0;B7(d.mB,g,B9(h));Bl.ii(34962,g);Bl.eC(34962,a.nQ.j6,null,a.sN);Bl.ii(34962,0);a.uN=g;d=a.ns;d.jG=d.jO;d.jO=0;d.jZ=(-1);d=a.nQ;d.jG=d.jO;d.jO=0;d.jZ=(-1);},
AQa=(a,b,c)=>{let d=new Pm();AIW(d,a,b,c);return d;},
AAd=a=>{return a.nb;},
ABn=a=>{return (a.ns.jG*4|0)/a.nb.mo|0;},
Zc=(a,b,c,d)=>{let e,f,g;a.qM=1;if(!a.u2){e=a.ns;e.jO=0;e.jG=e.j6;e.jZ=(-1);IZ(e,b,c,d);e=a.ns;e.jG=e.jO;e.jO=0;e.jZ=(-1);CA(a.nQ,0);CK(a.nQ,a.ns.jG<<2);}else{e=a.nQ;f=null;g=e instanceof EM;if(g)f=EV(e);else if(e instanceof D$)f=e;if(f===null){f=new Q;f.jC=1;f.jD=1;f.jE=A(500);B(f);}f.jO=0;f.jG=f.j6;f.jZ=(-1);CA(e,0);IZ(f,b,c,d);CA(e,0);if(!g)CK(e,d);else CK(e,d<<2);CA(a.ns,0);CK(a.ns,d);}if(a.ru){e=Bl;f=a.nQ;e.eD(34962,0,f.jG,f);a.qM=0;}},
AJy=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bl;d.ii(34962,a.uN);if(a.qM){CK(a.nQ,a.ns.jG*4|0);e=a.nQ;d.eC(34962,e.jG,e,a.sN);a.qM=0;}a:{f=a.nb.lx.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.nb.lx.data[g];j=h[g];if(j>=0){e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}e.ij(j);k=i.lX;l=i.ma;m=i.mj;n=a.nb.mo;o=i.nt;e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}e.ik(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.nb.lx.data[g];p=i.mf;e=b.nd;q=(-1);j=EN(e,p);if(j>=0)q=e.mz.data[j];if(q>=0){e=Bl;if(b.kz){CE(b,
b.ls,b.lu);b.kz=0;}e.ij(q);j=i.lX;k=i.ma;l=i.mj;m=a.nb.mo;n=i.nt;e=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}e.ik(q,j,k,l,m,n);}g=g+1|0;}}a.ru=1;},
ACX=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bl;e=a.nb.lx.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}h.il(g);}f=f+1|0;}}i=0;while(i<e){j=a.nb.lx.data[i].mf;k=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}l=Bl;h=b.nd;g=(-2);f=EN(h,j);if(f>=0)g=h.mz.data[f];if(g==(-2)){g=l.ic(b.mg,j);Ex(b.nd,j,g);}if(g!=(-1))k.il(g);i=i+1|0;}}d.ii(34962,0);a.ru=0;};
function RD(){let a=this;C.call(a);a.oX=null;a.nW=null;a.v3=0;a.yd=0;a.o2=0;a.rx=0;a.wp=0;}
let ACm=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.o2=1;a.rx=0;c=c*2|0;if(!C$){d=BM(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new CR;g=0+e|0;f.jZ=(-1);f.j6=e;f.jG=e;f.kC=Cl;f.k2=0;f.ky=d;f.jO=0;f.jG=g;f.lF=0;f.la=0;break a;}f=new I;f.jC=1;f.jD=1;Bj(f);B(f);}if(c<0){f=new Bn;h=new J;h.jA=G(16);B0(h,h.jz,A(486));L(h,h.jz,c,10);i=new H;d=h.jA;j=d.data;c=h.jz;k=j.length;if(c>=0&&c<=(k-0|0)){i.jB=K(d.data,0,c);f.jC=1;f.jD=1;f.jE=i;B(f);}f=new I;f.jC=1;f.jD=1;B(f);}f=new CR;d=BM(c);f.jZ=(-1);f.j6=c;f.jG=c;f.kC=Cl;f.k2=0;f.ky
=d;f.jO=0;f.jG=c;f.lF=1;f.la=0;f.kC=Da();}a.nW=f;a.yd=1;a.wp=!b?35048:35044;f=JG(f);a.oX=f;f.jG=f.jO;f.jO=0;f.jZ=(-1);f=a.nW;f.jG=f.jO;f.jO=0;f.jZ=(-1);f=Bl;h=f.jH.createBuffer();e=f.lU;f.lU=e+1|0;B7(f.mB,e,B9(h));Bl.ii(34963,e);Bl.eC(34963,a.nW.j6,null,a.wp);Bl.ii(34963,0);a.v3=e;},
VN=(a,b)=>{let c=new RD();ACm(c,a,b);return c;},
AL7=a=>{return a.oX.jG;},
WB=a=>{return a.oX.j6;},
AFP=(a,b,c,d)=>{let e,f;a.o2=1;e=a.oX;e.jO=0;e.jG=e.j6;e.jZ=(-1);UJ(e,b,c,d);e=a.oX;e.jG=e.jO;e.jO=0;e.jZ=(-1);CA(a.nW,0);CK(a.nW,d<<1);if(a.rx){e=Bl;f=a.nW;e.eD(34963,0,f.jG,f);a.o2=0;}},
AO0=(a,b)=>{a.o2=a.o2|b;return a.oX;},
AGI=a=>{let b,c,d;b=a.v3;if(!b){c=new Q;c.jC=1;c.jD=1;c.jE=A(502);B(c);}Bl.ii(34963,b);if(a.o2){CK(a.nW,a.oX.jG*2|0);c=Bl;d=a.nW;c.eD(34963,0,d.jG,d);a.o2=0;}a.rx=1;},
ZS=a=>{Bl.ii(34963,0);a.rx=0;};
function K2(){let a=this;C.call(a);a.nV=null;a.om=null;a.tQ=0;a.zb=0;a.tD=0;a.qQ=0;a.ss=0;a.s2=0;a.nx=null;}
let L$=null;
let K8=()=>{K8=BP(K2);ASa();};
let ABv=(a,b,c,d)=>{let e,f,g,h,i,j;K8();a.qQ=0;a.ss=0;a.s2=(-1);e=new Fy;e.oB=1;e.l3=W(16);a.nx=e;a.zb=b;a.nV=d;c=Dg(d.mo/4|0,c);if(!C$){f=Cd(c);g=f.data.length;d=new HP;h=0+g|0;d.jZ=(-1);d.j6=g;d.jG=g;d.jO=0;d.jG=h;d.p2=0;d.qD=0;d.pw=f;}else{c=c*4|0;if(c<0){d=new Bn;e=new J;e.jA=G(16);B0(e,e.jz,A(486));L(e,e.jz,c,10);i=new H;f=e.jA;j=f.data;c=e.jz;g=j.length;if(c>=0&&c<=(g-0|0)){i.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=i;B(d);}d=new I;d.jC=1;d.jD=1;B(d);}e=new CR;f=BM(c);e.jZ=(-1);e.j6=c;e.jG=c;e.kC=Cl;e.k2=
0;e.ky=f;e.jO=0;e.jG=c;e.lF=1;e.la=0;e.kC=Da();d=EV(e);}a.om=d;d.jG=d.jO;d.jO=0;d.jZ=(-1);d=Bl;e=d.jH.createBuffer();g=d.lU;d.lU=g+1|0;B7(d.mB,g,B9(e));a.tQ=g;a.tD=!b?35048:35044;d=L$;d.jO=0;d.jG=d.j6;d.jZ=(-1);Em.io(1,d);d=L$;c=d.jO;if(c<d.jG){d.jO=c+1|0;a.s2=d.ip(c);return;}d=new MU;d.jC=1;d.jD=1;B(d);},
Rz=(a,b,c)=>{let d=new K2();ABv(d,a,b,c);return d;},
YW=a=>{return a.nV;},
AJE=a=>{return (a.om.jG*4|0)/a.nV.mo|0;},
Y9=(a,b,c,d)=>{let e,f,g;a.qQ=1;e=a.om;f=null;g=e instanceof EM;if(g)f=EV(e);else if(e instanceof D$)f=e;if(f===null){f=new Q;f.jC=1;f.jD=1;f.jE=A(500);B(f);}f.jO=0;f.jG=f.j6;f.jZ=(-1);CA(e,0);IZ(f,b,c,d);CA(e,0);if(!g)CK(e,d);else CK(e,d<<2);CA(a.om,0);CK(a.om,d);if(a.ss){e=Bl;f=a.om;e.eC(34962,f.jG,f,a.tD);a.qQ=0;}},
AOD=(a,b,c)=>{let d;d=Em;d.iq(a.s2);ANM(a,b,c);if(a.qQ){d.ii(34962,a.tQ);b=a.om;CK(b,b.jG);b=a.om;d.eC(34962,b.jG,b,a.tD);a.qQ=0;}a.ss=1;},
ANM=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.nx;e=d.le;f=!e?0:1;a:{g=a.nV.lx.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.nV.lx.data[e].mf;h=b.nd;i=(-1);f=EN(h,d);if(f>=0)i=h.mz.data[f];d=a.nx;if(e>=d.le)break;f=i!=d.l3.data[e]?0:1;e=e+1|0;}h=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,e,10);F(b,b.jz,A(19));e=d.le;L(b,b.jz,e,10);d=new H;c=b.jA;j=c.data;f=b.jz;g=j.length;if(f>=0&&f<=(g-0|0)){d.jB=K(c.data,0,f);h.jC=1;h.jD=1;h.jE=d;B(h);}b=new I;Y(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.l3.data[i]?0:1;i=i+1|0;}h=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,i,10);F(b,b.jz,A(19));e=d.le;L(b,b.jz,e,10);d=new H;c=b.jA;j=c.data;f=b.jz;g=j.length;if(f>=0&&f<=(g-0|0)){d.jB=K(c.data,0,f);h.jC=1;h.jD=1;h.jE=d;B(h);}b=new I;Y(b);B(b);}}}c:{if(!f){d:{B1.ii(34962,a.tQ);if(a.nx.le){k=a.nV.lx.data.length;e=0;while(true){if(e>=k)break d;d=a.nx;if(e>=d.le)break;i=d.l3.data[e];if(i>=0){d=Bl;if(b.kz){CE(b,
b.ls,b.lu);b.kz=0;}d.il(i);}e=e+1|0;}h=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,e,10);F(b,b.jz,A(19));e=d.le;L(b,b.jz,e,10);d=new H;c=b.jA;j=c.data;f=b.jz;g=j.length;if(f>=0&&f<=(g-0|0)){d.jB=K(c.data,0,f);h.jC=1;h.jD=1;h.jE=d;B(h);}b=new I;I7(b);B(b);}}a.nx.le=0;e=0;while(true){if(e>=g)break c;h=a.nV.lx.data[e];if(c!==null){j=c.data;Lx(a.nx,j[e]);}else{l=a.nx;m=h.mf;d=b.nd;i=(-1);f=EN(d,m);if(f>=0)i=d.mz.data[f];Lx(l,i);}d=a.nx;if(e>=d.le){h=new I;b=new J;b.jA=G(16);F(b,b.jz,A(18));L(b,b.jz,e,10);F(b,
b.jz,A(19));e=d.le;L(b,b.jz,e,10);d=new H;c=b.jA;j=c.data;f=b.jz;g=j.length;if(f>=0&&f<=(g-0|0)){d.jB=K(c.data,0,f);h.jC=1;h.jD=1;h.jE=d;B(h);}b=new I;Y(b);B(b);}n=d.l3.data[e];if(n>=0){d=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}d.ij(n);f=h.lX;i=h.ma;k=h.mj;o=a.nV.mo;p=h.nt;d=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}d.ik(n,f,i,k,o,p);}e=e+1|0;}}}},
AB9=(a,b,c)=>{Em.iq(0);a.ss=0;},
ASa=()=>{let b,c,d,e;if(!C$){b=W(1);c=b.data.length;d=new F5;e=0+c|0;d.jZ=(-1);d.j6=c;d.jG=c;d.jO=0;d.jG=e;d.oP=0;d.p3=0;d.oA=b;}else{d=new CR;b=BM(4);d.jZ=(-1);d.j6=4;d.jG=4;d.kC=Cl;d.k2=0;d.ky=b;d.jO=0;d.jG=4;d.lF=1;d.la=0;d.kC=Da();d=GK(d);}L$=d;};
let OE=E(IF);
let PN=E(Hk);
function TE(){let a=this;C.call(a);a.sL=0;a.ou=null;a.mz=null;a.vi=0.0;a.sY=0;a.sl=0;a.sc=0;}
let AES=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.vi=c;d=Jd(b,c);a.sY=d*c|0;b=d-1|0;a.sc=b;a.sl=EX(U(b));a.ou=R(C,d);a.mz=W(d);return;}e=new Bn;f=new J;f.jA=G(16);F(f,f.jz,A(63));Hv(f,f.jz,c);g=new H;h=f.jA;i=h.data;d=f.jz;j=i.length;if(d>=0&&d<=(j-0|0)){g.jB=K(h.data,0,d);e.jC=1;e.jD=1;e.jE=g;B(e);}f=new I;f.jC=1;f.jD=1;B(f);},
F9=(a,b)=>{let c=new TE();AES(c,a,b);return c;},
EN=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bn;c.jC=1;c.jD=1;c.jE=A(64);B(c);}a:{d=a.ou;if(!b.lh){e=0;while(true){if(e>=b.jB.length)break a;b.lh=(31*b.lh|0)+b.jB.charCodeAt(e)|0;e=e+1|0;}}}f=Bg(Bd(Z(U(b.lh),D(2135587861, 2654435769)),a.sl));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof H))g=0;else{h=b;g=c.jB!==h.jB?0:1;}if(g)break;f=(f+1|0)&a.sc;}return f;},
Ex=(a,b,c)=>{let d,e;d=EN(a,b);if(d>=0){a.mz.data[d]=c;return;}d= -(d+1|0)|0;e=a.ou.data;e[d]=b;a.mz.data[d]=c;c=a.sL+1|0;a.sL=c;if(c>=a.sY)AON(a,e.length<<1);},
AON=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.ou.data.length;a.sY=b*a.vi|0;d=b-1|0;a.sc=d;a.sl=EX(U(d));e=a.ou;f=a.mz;a.ou=R(C,b);a.mz=W(b);if(a.sL>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.ou;if(!h.lh){k=0;while(true){if(k>=h.jB.length)break b;h.lh=(31*h.lh|0)+h.jB.charCodeAt(k)|0;k=k+1|0;}}}b=Bg(Bd(Z(U(h.lh),D(2135587861, 2654435769)),a.sl));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.sc;}l[b]=h;a.mz.data[b]=i;}g=g+1|0;}}}};
let AMl=E();
function TS(){let a=this;C.call(a);a.kG=null;a.nX=0;a.sq=null;a.qx=null;a.r2=null;a.xf=null;a.t8=null;a.mi=null;a.rX=0;a.ye=0.0;}
let ALv=(a,b,c)=>{let d,e,f,g,h,i,j;a.nX=0;a.sq=C5();a.qx=C5();a.r2=C5();a.xf=new Bm;d=new BH;d.kn=1.0;d.km=1.0;d.kl=1.0;d.kk=1.0;CQ(d);a.t8=d;a.ye=0.75;if(c!==null)a.kG=AGy(b,0,1,0,c);else{c=new Lh;e=Qk(Wf(0,1,0),AIr(0,1,0));if(!e.ni){c=new Q;d=new J;d.jA=G(16);F(d,d.jz,A(473));if(!e.ni)f=e.mV;else{f=Bl.g_(e.mg);e.mV=f;}F(d,d.jz,f);f=new H;g=d.jA;h=g.data;i=d.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}R0(c,b,0,1,0,e);c.y7=1;a.kG=c;}L7(a.sq,0.0,
0.0+B8.kP.width,0.0,0.0+B8.kP.height,0.0,1.0);a.nX=1;},
RZ=(a,b)=>{let c=new TS();ALv(c,a,b);return c;},
FJ=(a,b)=>{let c,d;if(a.mi!==null){b=new BN;b.jC=1;b.jD=1;b.jE=A(503);B(b);}a.mi=b;if(a.nX){C8(a.r2,a.sq.kQ);N1(a.r2.kQ,a.qx.kQ);a.nX=0;}b=a.kG;c=a.r2;d=a.mi.rT;C8(b.tt,c.kQ);b.v$=d;},
AIo=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;AFx(a,HD,QU,8);Gn();o=FV.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.mi!==HD){bf=a.kG;bf.lW.data[bf.lM+bf.md|0]=Dk(k.kn,k.km,k.kl,k.kk);Dl(a.kG,x,y,0.0);bf=a.kG;bf.lW.data[bf.lM+bf.md|0]
=Dk(l.kn,l.km,l.kl,l.kk);Dl(a.kG,z,ba,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(m.kn,m.km,m.kl,m.kk);Dl(a.kG,bb,bc,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(m.kn,m.km,m.kl,m.kk);Dl(a.kG,bb,bc,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(n.kn,n.km,n.kl,n.kk);Dl(a.kG,bd,be,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(k.kn,k.km,k.kl,k.kk);Dl(a.kG,x,y,0.0);}else{bf=a.kG;bf.lW.data[bf.lM+bf.md|0]=Dk(k.kn,k.km,k.kl,k.kk);Dl(a.kG,x,y,0.0);bf=a.kG;bf.lW.data[bf.lM+bf.md|0]=Dk(l.kn,l.km,l.kl,l.kk);Dl(a.kG,z,ba,0.0);bf=a.kG;bf.lW.data[bf.lM
+bf.md|0]=Dk(l.kn,l.km,l.kl,l.kk);Dl(a.kG,z,ba,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(m.kn,m.km,m.kl,m.kk);Dl(a.kG,bb,bc,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(m.kn,m.km,m.kl,m.kk);Dl(a.kG,bb,bc,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(n.kn,n.km,n.kl,n.kk);Dl(a.kG,bd,be,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(n.kn,n.km,n.kl,n.kk);Dl(a.kG,bd,be,0.0);l=a.kG;l.lW.data[l.lM+l.md|0]=Dk(k.kn,k.km,k.kl,k.kk);Dl(a.kG,x,y,0.0);}},
AFx=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mi;if(e===null){b=new BN;b.jC=1;b.jD=1;b.jE=A(30);B(b);}if(!(e!==b&&e!==c)){if(a.nX){FG(a.kG);a.mi=null;FJ(a,e);}else{b=a.kG;if((b.u1-b.qh|0)<d){FG(b);a.mi=null;FJ(a,e);}}}else{if(!a.rX){if(c===null){c=new BN;e=new J;e.jA=G(16);F(e,e.jz,A(504));F(e,e.jz,b===null?A(2):b.jR);F(e,e.jz,A(505));b=new H;f=e.jA;g=f.data;h=e.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);c.jC=1;c.jD=1;c.jE=b;B(c);}b=new I;b.jC=1;b.jD=1;B(b);}j=new BN;e=new J;e.jA=G(16);F(e,e.jz,A(504));F(e,
e.jz,b===null?A(2):b.jR);F(e,e.jz,A(506));F(e,e.jz,c.jR);F(e,e.jz,A(505));b=new H;f=e.jA;g=f.data;h=e.jz;i=g.length;if(h>=0&&h<=(i-0|0)){b.jB=K(f.data,0,h);j.jC=1;j.jD=1;j.jE=b;B(j);}b=new I;b.jC=1;b.jD=1;B(b);}FG(a.kG);a.mi=null;FJ(a,b);}};
function EA(){let a=this;C.call(a);a.j6=0;a.jO=0;a.jG=0;a.jZ=0;}
let Us=(a,b)=>{a.jZ=(-1);a.j6=b;a.jG=b;},
CA=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.jG){a.jO=b;if(b<a.jZ)a.jZ=0;return a;}c=new Bn;d=a.jG;e=new J;e.jA=G(16);F(e,e.jz,A(507));L(e,e.jz,b,10);F(e,e.jz,A(508));L(e,e.jz,d,10);d=e.jz;Bf(e,d,d+1|0);f=e.jA;g=f.data;g[d]=93;h=new H;d=e.jz;i=g.length;if(d>=0&&d<=(i-0|0)){h.jB=K(f.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
CK=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.j6){if(a.jZ>b)a.jZ=(-1);a.jG=b;if(a.jO>b)a.jO=b;return a;}c=new Bn;d=a.j6;e=new J;e.jA=G(16);F(e,e.jz,A(509));L(e,e.jz,b,10);F(e,e.jz,A(508));L(e,e.jz,d,10);d=e.jz;Bf(e,d,d+1|0);f=e.jA;g=f.data;g[d]=93;h=new H;d=e.jz;i=g.length;if(d>=0&&d<=(i-0|0)){h.jB=K(f.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);};
let D$=E(EA);
let IZ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iy()){e=new FL;e.jC=1;e.jD=1;B(e);}f=a.jG;g=a.jO;if((f-g|0)<d){e=new Iy;e.jC=1;e.jD=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new J;j.jA=G(16);F(j,j.jz,A(510));L(j,j.jz,i,10);F(j,j.jz,A(511));L(j,j.jz,f,10);k=new H;b=j.jA;h=b.data;d=j.jz;f=h.length;if(d>=0&&d<=(f-0|0)){k.jB=K(b.data,0,d);e.jC=1;e.jD=1;e.jE=k;B(e);}e=new I;e.jC=1;e.jD=1;Bj(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iz(g,h[c]);i=i+1|0;g=l;c=f;}a.jO=a.jO+d|0;return a;}e
=new I;j=new J;j.jA=G(16);F(j,j.jz,A(512));L(j,j.jz,d,10);F(j,j.jz,A(513));k=new H;b=j.jA;h=b.data;d=j.jz;f=h.length;if(d>=0&&d<=(f-0|0)){k.jB=K(b.data,0,d);e.jC=1;e.jD=1;e.jE=k;B(e);}e=new I;e.jC=1;e.jD=1;Bj(e);B(e);}}b=b.data;e=new I;d=b.length;j=new J;j.jA=G(16);F(j,j.jz,A(514));L(j,j.jz,c,10);F(j,j.jz,A(508));L(j,j.jz,d,10);d=j.jz;Bf(j,d,d+1|0);b=j.jA;h=b.data;h[d]=41;k=new H;d=j.jz;f=h.length;if(d>=0&&d<=(f-0|0)){k.jB=K(b.data,0,d);e.jC=1;e.jD=1;e.jE=k;B(e);}e=new I;e.jC=1;e.jD=1;Bj(e);B(e);},
ATY=(a,b)=>{CK(a,b);return a;},
AUU=(a,b)=>{CA(a,b);return a;},
AT1=a=>{a.jG=a.jO;a.jO=0;a.jZ=(-1);return a;},
AWe=a=>{a.jO=0;a.jG=a.j6;a.jZ=(-1);return a;},
ALo=(a,b)=>{CK(a,b);return a;},
AQQ=(a,b)=>{CA(a,b);return a;};
let GY=E(EA);
let UJ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iy()){e=new FL;e.jC=1;e.jD=1;B(e);}f=a.jG;g=a.jO;if((f-g|0)<d){e=new Iy;e.jC=1;e.jD=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new J;j.jA=G(16);F(j,j.jz,A(515));L(j,j.jz,i,10);F(j,j.jz,A(511));L(j,j.jz,f,10);k=new H;b=j.jA;h=b.data;d=j.jz;f=h.length;if(d>=0&&d<=(f-0|0)){k.jB=K(b.data,0,d);e.jC=1;e.jD=1;e.jE=k;B(e);}e=new I;e.jC=1;e.jD=1;Bj(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iA(g,h[c]);i=i+1|0;g=l;c=f;}a.jO=a.jO+d|0;return a;}e
=new I;j=new J;j.jA=G(16);F(j,j.jz,A(512));L(j,j.jz,d,10);F(j,j.jz,A(513));k=new H;b=j.jA;h=b.data;d=j.jz;f=h.length;if(d>=0&&d<=(f-0|0)){k.jB=K(b.data,0,d);e.jC=1;e.jD=1;e.jE=k;B(e);}e=new I;e.jC=1;e.jD=1;Bj(e);B(e);}}b=b.data;e=new I;d=b.length;j=new J;j.jA=G(16);F(j,j.jz,A(514));L(j,j.jz,c,10);F(j,j.jz,A(508));L(j,j.jz,d,10);d=j.jz;Bf(j,d,d+1|0);b=j.jA;h=b.data;h[d]=41;k=new H;d=j.jz;f=h.length;if(d>=0&&d<=(f-0|0)){k.jB=K(b.data,0,d);e.jC=1;e.jD=1;e.jE=k;B(e);}e=new I;e.jC=1;e.jD=1;Bj(e);B(e);},
AVe=(a,b)=>{CK(a,b);return a;},
AVn=(a,b)=>{CA(a,b);return a;},
AVz=a=>{a.jG=a.jO;a.jO=0;a.jZ=(-1);return a;},
AV7=a=>{a.jO=0;a.jG=a.j6;a.jZ=(-1);return a;},
AUE=(a,b)=>{CK(a,b);return a;},
ASW=(a,b)=>{CA(a,b);return a;};
let GX=E(EA);
let ASL=(a,b)=>{CA(a,b);return a;},
AUT=a=>{a.jO=0;a.jG=a.j6;a.jZ=(-1);return a;};
function EM(){let a=this;EA.call(a);a.k2=0;a.ky=null;a.kC=null;}
let ALf=(a,b)=>{CK(a,b);return a;},
XG=(a,b)=>{CA(a,b);return a;};
function G_(){C.call(this);this.r3=null;}
let Cl=null,JE=null,LO=null;
let Da=()=>{let b;if(LO===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;LO=(new Int8Array(b))[0]?JE:Cl;}return LO;},
AWd=()=>{let b;b=new G_;b.r3=A(4);Cl=b;b=new G_;b.r3=A(5);JE=b;};
let AFC=E();
let D5=E(0);
function CR(){let a=this;EM.call(a);a.lF=0;a.la=0;}
let Ww=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jG)return a.ky.data[a.k2+b|0];c=new I;d=a.jG;e=new J;e.jA=G(16);F(e,e.jz,A(516));L(e,e.jz,b,10);F(e,e.jz,A(508));L(e,e.jz,d,10);d=e.jz;Bf(e,d,d+1|0);f=e.jA;g=f.data;g[d]=41;h=new H;d=e.jz;i=g.length;if(d>=0&&d<=(i-0|0)){h.jB=K(f.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
JG=a=>{let b,c,d,e,f,g;b=a.jG;c=a.jO;d=(b-c|0)/2|0;if(a.kC!==Cl){e=new Oa;f=a.k2+c|0;c=a.la;e.jZ=(-1);e.j6=d;e.jG=d;e.jO=0;e.jG=d;e.pC=f;e.ol=a;e.s1=c;return e;}e=new PZ;b=a.k2+c|0;g=a.la;e.jZ=(-1);e.j6=d;e.jG=d;e.jO=0;e.jG=d;e.pC=b;e.ol=a;e.s1=g;return e;},
AOx=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.jG){c=a.ky.data;b=a.k2+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.kC!==Cl)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new I;d=a.jG-3|0;i=new J;i.jA=G(16);F(i,i.jz,A(516));L(i,i.jz,b,10);F(i,i.jz,A(508));L(i,i.jz,d,10);d=i.jz;Bf(i,d,d+1|0);c=i.jA;j=c.data;j[d]=41;k=new H;d=i.jz;e=j.length;if(d>=0&&d<=(e-0|0)){k.jB=K(c.data,0,d);h.jC=1;h.jD=1;h.jE=k;B(h);}h=new I;h.jC=1;h.jD=1;Bj(h);B(h);},
ADV=(a,b,c)=>{let d,e,f,g,h,i;if(a.la){d=new FL;d.jC=1;d.jD=1;B(d);}if(b>=0&&(b+3|0)<a.jG){if(a.kC!==Cl){e=a.ky.data;b=a.k2+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.ky.data;b=a.k2+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new I;c=a.jG-3|0;f=new J;f.jA=G(16);F(f,f.jz,A(516));L(f,f.jz,b,10);F(f,f.jz,A(508));L(f,f.jz,c,10);c=f.jz;Bf(f,c,c+1|0);e=f.jA;g=e.data;g[c]=41;h=new H;c=f.jz;i=g.length;if(c>=
0&&c<=(i-0|0)){h.jB=K(e.data,0,c);d.jC=1;d.jD=1;d.jE=h;B(d);}d=new I;d.jC=1;d.jD=1;B(d);},
GK=a=>{let b,c,d,e,f,g;b=a.jG;c=a.jO;d=(b-c|0)/4|0;if(a.kC!==Cl){e=new OD;f=a.k2+c|0;c=a.la;e.jZ=(-1);e.j6=d;e.jG=d;e.jO=0;e.jG=d;e.pe=f;e.pd=a;e.ts=c;return e;}e=new Sr;b=a.k2+c|0;g=a.la;e.jZ=(-1);e.j6=d;e.jG=d;e.jO=0;e.jG=d;e.pe=b;e.pd=a;e.ts=g;return e;},
EV=a=>{let b,c,d,e,f,g;b=a.jG;c=a.jO;d=(b-c|0)/4|0;if(a.kC!==JE){e=new Ol;f=a.k2+c|0;c=a.la;e.jZ=(-1);e.j6=d;e.jG=d;e.jO=0;e.jG=d;e.o7=f;e.oq=a;e.uo=c;return e;}e=new QR;b=a.k2+c|0;g=a.la;e.jZ=(-1);e.j6=d;e.jG=d;e.jO=0;e.jG=d;e.o7=b;e.oq=a;e.uo=g;return e;},
ASA=a=>{return a.ky.data;};
let AI2=E();
let Sz=E(0);
function KI(){let a=this;C.call(a);a.vp=null;a.mE=0;a.mD=0;a.ph=null;a.p7=null;a.vU=0;a.oM=0;}
let APF=0;
let AAW=(a,b,c,d,e)=>{a.mE=0;a.mD=0;a.oM=0;a.vp=b;a.p7=c;a.ph=d;a.vU=e;if(c!==null){b=Ua(a,c);a.p7=b;c=b.k0;a.mE=c===null?b.lJ:c.lD;a.mD=c===null?b.lN:c.lC;if(d===null)a.ph=c===null?Fm:HU(c.li);}},
Gc=(a,b,c,d)=>{let e=new KI();AAW(e,a,b,c,d);return e;},
Pt=a=>{let b,c;if(a.oM){b=new Q;b.jC=1;b.jD=1;b.jE=A(517);B(b);}if(a.p7===null){b=Ua(a,FA(a.vp));a.p7=b;c=b.k0;a.mE=c===null?b.lJ:c.lD;a.mD=c===null?b.lN:c.lC;if(a.ph===null)a.ph=c===null?Fm:HU(c.li);}a.oM=1;},
Ua=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Bl===null&&APF){c=b.k0;d=c===null?b.lJ:c.lD;e=c===null?b.lN:c.lC;f=KY(d);g=KY(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new Fu;c=b.k0;Jl(h,f,g,c===null?Fm:HU(c.li));c=h.k0;if(c===null){E1(b);JK(h,b.nP,0,0,d,e,0,0,d,e);}else{i=b.k0.lB;j=c.lB;Ju(i,j,0,0,d,e,0,0,d,e);}if(b.n3){c=new Q;c.jC=1;c.jD=1;c.jE=A(58);B(c);}Ep();GB(FB,b.pk);c=b.k0;if(c!==null)HL(c.lB);b.n3=1;return h;};
function Fu(){let a=this;C.call(a);a.lJ=0;a.lN=0;a.nP=null;a.ly=null;a.pk=0;a.pV=null;a.wS=0;a.wU=0;a.wW=0;a.wV=0.0;a.rM=null;a.qC=null;a.wF=null;a.yV=null;a.pg=null;a.qk=null;a.u3=0;a.k0=null;a.n3=0;}
let Ld=null;
let Gj=()=>{Gj=BP(Fu);AHa();};
let Xv=(a,b)=>{let c,d,e,f,g,h,i,j,k;Gj();a.wS=255;a.wU=255;a.wW=255;a.rM=Mp(255,255,255,a.wV);a.qC=J$;a.wF=Ms;a.u3=0;c=b.t6;d=b.uG.rS;e=BE(d,c);d=e<0?null:d.kh.data[e];if(C3.m8.tR){f=ALx(d.mX);a.k0=AIT(f,0,f.data.length,0);JR(a,(-1),(-1),null,null);}else{JR(a,(-1),(-1),d.tS,null);if(a.pg===null){d=new Q;g=b.t6;b=new J;b.jA=G(16);F(b,b.jz,A(518));e=b.jz;if(g===null)g=A(2);F(b,e,g);F(b,b.jz,A(519));h=new H;i=b.jA;f=i.data;j=b.jz;k=f.length;if(j>=0&&j<=(k-0|0)){h.jB=K(i.data,0,j);d.jC=1;d.jD=1;d.jE=h;B(d);}b=
new I;b.jC=1;b.jD=1;B(b);}}},
FA=a=>{let b=new Fu();Xv(b,a);return b;},
Jl=(a,b,c,d)=>{Gj();a.wS=255;a.wU=255;a.wW=255;a.rM=Mp(255,255,255,a.wV);a.qC=J$;a.wF=Ms;a.u3=0;JR(a,b,c,null,null);},
ASR=(a,b,c)=>{let d=new Fu();Jl(d,a,b,c);return d;},
JR=(a,b,c,d,e)=>{let f,g;if(e!==null){a.qk=e;a.lJ=e.getWidth();a.lN=e.getHeight();}else if(d===null){a.lJ=b;a.lN=c;}else{a.pg=d;a.lJ=d.width;a.lN=d.height;}if(C$){d=new CR;f=BM(4);d.jZ=(-1);d.j6=4;d.jG=4;d.kC=Cl;d.k2=0;d.ky=f;d.jO=0;d.jG=4;d.lF=1;d.la=0;d.kC=Da();}else{f=BM(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new CR;g=0+c|0;d.jZ=(-1);d.j6=c;d.jG=c;d.kC=Cl;d.k2=0;d.ky=f;d.jO=0;d.jG=g;d.lF=0;d.la=0;}else{d=new I;d.jC=1;d.jD=1;Bj(d);B(d);}}a.pV=d;Ep();c=M5;M5=c+1|0;a.pk=c;ADV(d,0,c);B7(FB,a.pk,a);},
AFS=a=>{let b,c;EQ();b=FX.mT.document.createElement("canvas");a.nP=b;c=a.lJ;b.width=c;b=a.nP;c=a.lN;b.height=c;b=a.nP.getContext("2d");a.ly=b;Gj();c=Bz(E9.jR);b.globalCompositeOperation=c;},
Mp=(b,c,d,e)=>{let f,g,h,i;Gj();f=new J;f.jA=G(16);F(f,f.jz,A(520));L(f,f.jz,b,10);b=f.jz;Bf(f,b,b+1|0);f.jA.data[b]=44;L(f,f.jz,c,10);c=f.jz;Bf(f,c,c+1|0);f.jA.data[c]=44;L(f,f.jz,d,10);c=f.jz;Bf(f,c,c+1|0);f.jA.data[c]=44;Hv(f,f.jz,e);d=f.jz;Bf(f,d,d+1|0);g=f.jA;h=g.data;h[d]=41;i=new H;c=f.jz;d=h.length;if(c>=0&&c<=(d-0|0)){i.jB=K(g.data,0,c);return i;}f=new I;f.jC=1;f.jD=1;B(f);},
E1=a=>{let b,c;if(a.nP===null){AFS(a);if(a.pg!==null){b=a.ly;c=Bz(Lj.l7);b.globalCompositeOperation=c;b=a.ly;c=a.pg;b.drawImage(c,0.0,0.0);b=a.ly;c=Bz(E9.l7);b.globalCompositeOperation=c;}if(a.qk!==null){c=a.ly;b=Bz(Lj.l7);c.globalCompositeOperation=b;b=a.ly;c=a.qk;b.drawImage(c,0.0,0.0);b=a.ly;c=Bz(E9.l7);b.globalCompositeOperation=c;}}},
JK=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;E1(a);if(a.qC===IR){a:{k=a.ly;l=Bz(Ld);k.fillStyle=l;k=a.ly;l=Bz(Ld);k.strokeStyle=l;k=a.ly;l="destination-out";k.globalCompositeOperation=l;a.ly.beginPath();m=a.ly;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=La;E1(a);Lf();switch(Ny.data[k.jK]){case 1:break;case 2:a.ly.stroke();break a;default:break a;}a.ly.fill();}a.ly.closePath();r=a.ly;k=Bz(a.rM);r.fillStyle=k;r=a.ly;l=Bz(a.rM);r.strokeStyle=l;r=a.ly;k=Bz(E9.l7);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.ly;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.yV=null;},
AHa=()=>{Ld=Mp(255,255,255,1.0);};
let Hc=E(GX);
let AVB=a=>{let b,c;b=a.jO;if(b<a.jG){a.jO=b+1|0;return a.ip(b);}c=new MU;c.jC=1;c.jD=1;B(c);},
D8=(a,b)=>{let c,d;if(a.iy()){c=new FL;c.jC=1;c.jD=1;B(c);}d=a.jO;if(d<a.jG){a.jO=d+1|0;a.iI(d,b);return a;}c=new Iy;c.jC=1;c.jD=1;B(c);},
ET=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jG)return a.ip(b);c=new I;d=a.jG;e=new J;e.jA=G(16);F(e,e.jz,A(516));L(e,e.jz,b,10);F(e,e.jz,A(508));L(e,e.jz,d,10);d=e.jz;Bf(e,d,d+1|0);f=e.jA;g=f.data;g[d]=41;h=new H;d=e.jz;i=g.length;if(d>=0&&d<=(i-0|0)){h.jB=K(f.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
UY=(a,b,c)=>{let d,e,f,g,h,i;if(a.iy()){d=new FL;d.jC=1;d.jD=1;B(d);}if(b>=0&&b<a.jG){a.iI(b,c);return a;}d=new I;c=a.jG;e=new J;e.jA=G(16);F(e,e.jz,A(516));L(e,e.jz,b,10);F(e,e.jz,A(508));L(e,e.jz,c,10);c=e.jz;Bf(e,c,c+1|0);f=e.jA;g=f.data;g[c]=41;h=new H;c=e.jz;i=g.length;if(c>=0&&c<=(i-0|0)){h.jB=K(f.data,0,c);d.jC=1;d.jD=1;d.jE=h;B(d);}d=new I;d.jC=1;d.jD=1;Bj(d);B(d);},
AUx=a=>{return a.iy();};
function F5(){let a=this;Hc.call(a);a.p3=0;a.oP=0;a.oA=null;}
let AJ8=(a,b)=>{return a.oA.data[b+a.oP|0];},
AHX=(a,b,c)=>{a.oA.data[b+a.oP|0]=c;},
Wp=a=>{return a.p3;};
let G4=E(D$);
let Rr=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jG)return a.iJ(b);c=new I;d=a.jG;e=new J;e.jA=G(16);F(e,e.jz,A(516));L(e,e.jz,b,10);F(e,e.jz,A(508));L(e,e.jz,d,10);d=e.jz;Bf(e,d,d+1|0);f=e.jA;g=f.data;g[d]=41;h=new H;d=e.jz;i=g.length;if(d>=0&&d<=(i-0|0)){h.jB=K(f.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
Nh=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.iy()){d=new FL;d.jC=1;d.jD=1;B(d);}if(b>=0&&b<a.jG){a.iz(b,c);return a;}d=new I;e=a.jG;f=new J;f.jA=G(16);F(f,f.jz,A(516));L(f,f.jz,b,10);F(f,f.jz,A(508));L(f,f.jz,e,10);e=f.jz;Bf(f,e,e+1|0);g=f.jA;h=g.data;h[e]=41;i=new H;e=f.jz;j=h.length;if(e>=0&&e<=(j-0|0)){i.jB=K(g.data,0,e);d.jC=1;d.jD=1;d.jE=i;B(d);}d=new I;d.jC=1;d.jD=1;Bj(d);B(d);},
ATz=a=>{return a.iy();};
function HP(){let a=this;G4.call(a);a.qD=0;a.p2=0;a.pw=null;}
let ALD=(a,b)=>{return a.pw.data[b+a.p2|0];},
AKm=(a,b,c)=>{a.pw.data[b+a.p2|0]=c;},
AKH=a=>{return a.qD;};
let Jj=E(BI);
let IR=null,J$=null,AI5=null;
let AEr=()=>{let b,c;b=new Jj;b.jR=A(521);b.jK=0;IR=b;c=new Jj;c.jR=A(522);c.jK=1;J$=c;AI5=S(Jj,[b,c]);};
let H3=E(BI);
let W_=null,Ms=null,ANY=null;
let ANG=()=>{let b,c;b=new H3;b.jR=A(523);b.jK=0;W_=b;c=new H3;c.jR=A(524);c.jK=1;Ms=c;ANY=S(H3,[b,c]);};
let J6=E();
function UH(){let a=this;J6.call(a);a.uG=null;a.t6=null;a.xQ=null;}
let ADI=(a,b,c,d)=>{let e,f,g,h;if(d!==E5&&d!==Ql&&d!==SK){b=new Q;c=new J;c.jA=G(16);F(c,c.jz,A(525));F(c,c.jz,d===null?A(2):d.jR);F(c,c.jz,A(526));d=new H;e=c.jA;f=e.data;g=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){d.jB=K(e.data,0,g);b.jC=1;b.jD=1;b.jE=d;B(b);}b=new I;b.jC=1;b.jD=1;B(b);}a.uG=b;b=MD(c,A(527),A(107));if(P0(b,A(107)))b=Cm(b,0,b.jB.length-1|0);a.t6=b;a.xQ=d;},
Gr=(a,b,c)=>{let d=new UH();ADI(d,a,b,c);return d;};
function LC(){let a=this;C.call(a);a.lB=0;a.lD=0;a.lC=0;a.li=0;a.pW=null;a.q4=null;}
let AAZ=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=W(4);a.pW=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.q4=AOT(g,h,c,d);b=a.pW.data;a.lB=b[0];a.lD=b[1];a.lC=b[2];c=b[3];a.li=c;if(e&&e!=c)AAB(a,e);},
AIT=(a,b,c,d)=>{let e=new LC();AAZ(e,a,b,c,d);return e;},
ASe=(a,b,c,d)=>{let e;e=W(4);a.pW=e;a.q4=AMO(e.data,b,c,d);e=a.pW.data;a.lB=e[0];a.lD=e[1];a.lC=e[2];a.li=e[3];},
ADh=(a,b,c)=>{let d=new LC();ASe(d,a,b,c);return d;},
AAB=(a,b)=>{let c,d,e,f,g;c=ADh(a.lD,a.lC,b);Mk(c.lB,0);d=a.lD;e=a.lC;f=a.lB;g=c.lB;Ju(f,g,0,0,d,e,0,0,d,e);HL(a.lB);a.lB=c.lB;a.li=c.li;a.lC=c.lC;a.pW=c.pW;a.q4=c.q4;a.lD=c.lD;},
AOT=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
AMO=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
HL=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
Ju=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
Mk=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let Pv=E(0);
function Lh(){let a=this;C.call(a);a.v$=0;a.lM=0;a.wy=0;a.u1=0;a.qh=0;a.ng=null;a.qI=null;a.y7=0;a.wN=0;a.vw=0;a.yJ=0;a.md=0;a.xm=0;a.tt=null;a.lW=null;a.tl=null;}
let R0=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.tt=C5();a.u1=b;a.wN=e;a.qI=f;g=Y$(a,c,d,e);h=new IV;h.rr=1;h.q2=0;f=new Bi;CO();h.wn=f;f=QF(g);h.lR=Em===null?RY(0,b,f):Rz(0,b,f);f=new Hk;f.nS=1;f.ps=0;f.s6=1;if(!C$){g=Fg(0);d=g.data.length;i=new Jq;j=0+d|0;Us(i,d);i.jO=0;i.jG=j;i.qS=0;i.re=0;i.qv=g;}else{k=new CR;g=BM(0);By(k);k.jZ=(-1);k.j6=0;k.jG=0;k.kC=Cl;k.k2=0;k.ky=g;k.jO=0;k.jG=0;k.lF=1;k.la=0;k.kC=Da();i=JG(k);}f.nn=i;i.jG=i.jO;i.jO=0;i.jZ=(-1);i=Bl;k=i.jH.createBuffer();d=i.lU;i.lU=d+1|0;B7(i.mB,d,B9(k));f.ro
=d;f.qJ=35048;h.lO=f;h.pS=0;f=C3;i=HH;if(f===null){i=i.mx.data[0];while(i!==null&&i.mw!==null){i=i.mH;}}else{k=f;if(!k.$id$){l=Eg();k.$id$=l;}m=f.$id$;g=i.mx.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.oK==m){k=i.mw;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.mH;}}i=i===null?null:i.l$;if(i===null){i=new Bt;i.kr=1;i.jQ=R(C,16);}BB(i,h);E4(HH,f,i);a.ng=h;a.lW=Cd(Dg(b,(h.lR.iP()).mo/4|0));a.vw=(a.ng.lR.iP()).mo/4|0;g=(a.ng.lR.iP()).lx.data;b=g.length;d=0;a:{while(d<b){if(g[d].mb==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.ng.lR.iP()).lx.data;m=g.length;c=0;b:{while(c<m){if(g[c].mb==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.nt/4|0;}a.yJ=b;g=(a.ng.lR.iP()).lx.data;m=g.length;c=0;c:{while(c<m){if(g[c].mb==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.ng.lR.iP()).lx.data;m=g.length;c=0;d:{while(c<m){if(g[c].mb==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.nt/4|0;}a.md=b;g=(a.ng.lR.iP()).lx.data;m=g.length;c=0;e:{while(c<m){if(g[c].mb==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.ng.lR.iP()).lx.data;m
=g.length;c=0;f:{while(c<m){if(g[c].mb==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.nt/4|0;}a.xm=b;a.tl=R(H,e);m=0;g:{while(m<e){g=a.tl;f=new J;f.jA=G(16);F(f,f.jz,A(528));L(f,f.jz,m,10);i=new H;n=f.jA;o=n.data;c=f.jz;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.jB=K(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new I;f.jC=1;f.jD=1;B(f);},
AGy=(a,b,c,d,e)=>{let f=new Lh();R0(f,a,b,c,d,e);return f;},
Y$=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bt;e.kr=1;e.jQ=R(C,16);f=new DN;f.mb=1;f.lX=3;f.ma=5126;f.mj=0;f.mf=A(468);f.nJ=0;f.oO=DZ(1);BB(e,f);if(b){g=new DN;g.mb=8;g.lX=3;g.ma=5126;g.mj=0;g.mf=A(529);g.nJ=0;g.oO=DZ(8);BB(e,g);}if(c){g=new DN;g.mb=4;g.lX=4;g.ma=5121;g.mj=1;g.mf=A(469);g.nJ=0;g.oO=DZ(4);BB(e,g);}h=0;while(true){if(h>=d){b=e.jF;i=R(DN,b);j=i.data;h=0;while(true){c=Ci(h,b);if(c>=0)break;if(c>=0){f=new I;g=new J;g.jA=G(16);F(g,g.jz,A(18));L(g,g.jz,h,10);F(g,g.jz,A(19));b=e.jF;L(g,g.jz,b,10);e=new H;i
=g.jA;j=i.data;c=g.jz;d=j.length;if(c>=0&&c<=(d-0|0)){e.jB=K(i.data,0,c);f.jC=1;f.jD=1;f.jE=e;B(f);}e=new I;e.jC=1;e.jD=1;B(e);}j[h]=e.jQ.data[h];h=h+1|0;}return i;}g=new DN;k=new J;k.jA=G(16);F(k,k.jz,A(530));L(k,k.jz,h,10);f=new H;i=k.jA;j=i.data;c=k.jz;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.jB=K(i.data,0,c);g.mb=16;g.lX=2;g.ma=5126;g.mj=0;g.mf=f;g.nJ=0;g.oO=DZ(16);BB(e,g);h=h+1|0;}e=new I;e.jC=1;e.jD=1;B(e);},
Dl=(a,b,c,d)=>{let e,f;e=a.lM;f=a.lW.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.wy=0;a.lM=e+a.vw|0;a.qh=a.qh+1|0;},
FG=a=>{let b,c,d,e,f,g,h;if(!a.qh)return;b=a.qI;c=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}c.hd(b.mg);c=a.qI;d=a.tt;HX();e=IS(c,A(531),Hz);b=Bl;if(c.kz){CE(c,c.ls,c.lu);c.kz=0;}Qb(b,e,1,0,d.kQ,0);f=0;while(f<a.wN){b=a.qI;c=a.tl.data[f];d=Bl;if(b.kz){CE(b,b.ls,b.lu);b.kz=0;}d.hn(IS(b,c,Hz),f);f=f+1|0;}b=a.ng;g=a.lW;h=a.lM;b.lR.he(g,0,h);b=a.ng;Si(b,a.qI,a.v$,0,b.lO.hP()<=0?b.lR.iQ():b.lO.hL(),b.rr);a.wy=0;a.lM=0;a.qh=0;},
Wf=(b,c,d)=>{let e,f,g,h,i,j,k;e=new J;e.jA=G(16);F(e,e.jz,A(532));f=!b?A(62):A(533);F(e,e.jz,f);f=!c?A(62):A(534);F(e,e.jz,f);f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);i=0;while(true){if(i>=d){e=new J;e.jA=G(16);F(e,e.jz,f);F(e,e.jz,A(535));f=!c?A(62):A(536);F(e,e.jz,f);f=new H;g=e.jA;h=g.data;b=e.jz;j=h.length;if(b>=0&&b<=(j-0|0)){f.jB=K(g.data,0,b);i=0;while(true){if(i>=d){e=new J;e.jA=G(16);F(e,e.jz,f);F(e,e.jz,A(537));f=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i
>=0&&i<=(j-0|0)){f.jB=K(g.data,0,i);if(c){e=new J;e.jA=G(16);F(e,e.jz,f);F(e,e.jz,A(538));f=new H;g=e.jA;h=g.data;c=e.jz;i=h.length;if(c>=0&&c<=(i-0|0))f.jB=K(g.data,0,c);else{e=new I;e.jC=1;e.jD=1;B(e);}}i=0;while(true){if(i>=d){e=new J;e.jA=G(16);F(e,e.jz,f);F(e,e.jz,A(539));f=new H;g=e.jA;h=g.data;c=e.jz;d=h.length;if(c>=0&&c<=(d-0|0)){f.jB=K(g.data,0,c);return f;}e=new I;e.jC=1;e.jD=1;B(e);}e=new J;e.jA=G(16);F(e,e.jz,f);F(e,e.jz,A(540));L(e,e.jz,i,10);F(e,e.jz,A(541));F(e,e.jz,A(530));L(e,e.jz,i,10);F(e,
e.jz,A(542));f=new H;g=e.jA;h=g.data;c=e.jz;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.jB=K(g.data,0,c);i=i+1|0;}e=new I;e.jC=1;e.jD=1;B(e);}e=new I;e.jC=1;e.jD=1;B(e);}e=new J;e.jA=G(16);F(e,e.jz,f);F(e,e.jz,A(543));L(e,e.jz,i,10);F(e,e.jz,A(542));f=new H;g=e.jA;h=g.data;j=e.jz;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.jB=K(g.data,0,j);i=i+1|0;}e=new I;e.jC=1;e.jD=1;B(e);}e=new I;e.jC=1;e.jD=1;B(e);}e=new J;e.jA=G(16);F(e,e.jz,f);F(e,e.jz,A(544));L(e,e.jz,i,10);F(e,e.jz,A(542));f=new H;g=e.jA;h=g.data;j
=e.jz;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.jB=K(g.data,0,j);i=i+1|0;}e=new I;e.jC=1;e.jD=1;B(e);}e=new I;e.jC=1;e.jD=1;B(e);},
AIr=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(545);if(c){f=new J;f.jA=G(16);F(f,f.jz,e);F(f,f.jz,A(536));e=new H;g=f.jA;h=g.data;i=f.jz;j=h.length;if(i>=0&&i<=(j-0|0))e.jB=K(g.data,0,i);else{e=new I;e.jC=1;e.jD=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new J;f.jA=G(16);F(f,f.jz,e);F(f,f.jz,A(546));e=!c?A(547):A(548);F(f,f.jz,e);e=new H;h=f.jA;g=h.data;b=f.jz;c=g.length;if(b>=0&&b<=(c-0|0)){e.jB=K(h.data,0,b);if(d>0){f=new J;f.jA=G(16);F(f,f.jz,e);F(f,f.jz,A(549));e=new H;g=f.jA;h=g.data;c=f.jz;i=h.length;if(c>=0&&c<=(i-
0|0))e.jB=K(g.data,0,c);else{e=new I;e.jC=1;e.jD=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new J;f.jA=G(16);F(f,f.jz,e);F(f,f.jz,A(550));e=new H;g=f.jA;h=g.data;c=f.jz;d=h.length;if(c>=0&&c<=(d-0|0)){e.jB=K(g.data,0,c);return e;}e=new I;e.jC=1;e.jD=1;B(e);}if(i!=c){f=new J;f.jA=G(16);F(f,f.jz,e);F(f,f.jz,A(551));L(f,f.jz,i,10);F(f,f.jz,A(552));L(f,f.jz,i,10);F(f,f.jz,A(553));e=new H;g=f.jA;h=g.data;j=f.jz;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.jB=K(g.data,0,j);}else{f=new J;f.jA=G(16);F(f,f.jz,e);F(f,
f.jz,A(551));L(f,f.jz,i,10);F(f,f.jz,A(552));L(f,f.jz,i,10);F(f,f.jz,A(490));e=new H;g=f.jA;h=g.data;j=f.jz;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.jB=K(g.data,0,j);}i=i+1|0;}e=new I;e.jC=1;e.jD=1;B(e);}e=new I;e.jC=1;e.jD=1;B(e);}e=new I;e.jC=1;e.jD=1;B(e);}f=new J;f.jA=G(16);F(f,f.jz,e);F(f,f.jz,A(543));L(f,f.jz,i,10);F(f,f.jz,A(542));e=new H;g=f.jA;h=g.data;j=f.jz;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.jB=K(g.data,0,j);f=new J;f.jA=G(16);F(f,f.jz,e);F(f,f.jz,A(554));L(f,f.jz,i,10);F(f,
f.jz,A(542));e=new H;g=f.jA;h=g.data;j=f.jz;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.jB=K(g.data,0,j);i=i+1|0;}e=new I;e.jC=1;e.jD=1;B(e);}e=new I;e.jC=1;e.jD=1;B(e);};
let HO=E(GY);
let AMm=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.jG)return a.iR(b);c=new I;d=a.jG;e=new J;e.jA=G(16);F(e,e.jz,A(516));L(e,e.jz,b,10);F(e,e.jz,A(508));L(e,e.jz,d,10);d=e.jz;Bf(e,d,d+1|0);f=e.jA;g=f.data;g[d]=41;h=new H;d=e.jz;i=g.length;if(d>=0&&d<=(i-0|0)){h.jB=K(f.data,0,d);c.jC=1;c.jD=1;c.jE=h;B(c);}c=new I;c.jC=1;c.jD=1;Bj(c);B(c);},
AUq=a=>{return a.iy();};
function Jq(){let a=this;HO.call(a);a.re=0;a.qS=0;a.qv=null;}
let ADK=(a,b)=>{return a.qv.data[b+a.qS|0];},
AGf=(a,b,c)=>{a.qv.data[b+a.qS|0]=c;},
ABu=a=>{return a.re;};
let AJY=E();
function Er(){BI.call(this);this.nA=0;}
let Fs=null,AIK=null,ALg=null,AHv=null,AKX=null,AP_=null,AEh=null,AEH=null;
let Zu=()=>{let b,c,d,e,f,g,h;b=new Er;b.jR=A(555);b.jK=0;b.nA=9728;Fs=b;c=new Er;c.jR=A(556);c.jK=1;c.nA=9729;AIK=c;d=new Er;d.jR=A(557);d.jK=2;d.nA=9987;ALg=d;e=new Er;e.jR=A(558);e.jK=3;e.nA=9984;AHv=e;f=new Er;f.jR=A(559);f.jK=4;f.nA=9985;AKX=f;g=new Er;g.jR=A(560);g.jK=5;g.nA=9986;AP_=g;h=new Er;h.jR=A(561);h.jK=6;h.nA=9987;AEh=h;AEH=S(Er,[b,c,d,e,f,g,h]);};
function HJ(){BI.call(this);this.q$=0;}
let AO5=null,FC=null,AI$=null,APo=null;
let AFf=()=>{let b,c,d;b=new HJ;b.jR=A(562);b.jK=0;b.q$=33648;AO5=b;c=new HJ;c.jR=A(563);c.jK=1;c.q$=33071;FC=c;d=new HJ;d.jR=A(564);d.jK=2;d.q$=10497;AI$=d;APo=S(HJ,[b,c,d]);};
let Qf=E();
let AR1=(a,b)=>{b=a.S(b);BC();return b===null?null:b instanceof Fz()&&b instanceof Ew?(b[Bo]===true?b:b.kb):b;},
AAl=a=>{return a.eW();};
function HE(){let a=this;Hc.call(a);a.pd=null;a.ts=0;a.pe=0;}
let AHr=a=>{return a.ts;};
let OD=E(HE);
let ADC=(a,b)=>{let c;c=a.pd.ky.data;b=a.pe+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
Wn=(a,b,c)=>{let d;d=a.pd.ky.data;b=a.pe+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let Sr=E(HE);
let AOB=(a,b)=>{let c;c=a.pd.ky.data;b=a.pe+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
YJ=(a,b,c)=>{let d;d=a.pd.ky.data;b=a.pe+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function G6(){let a=this;G4.call(a);a.oq=null;a.uo=0;a.o7=0;}
let AKW=a=>{return a.uo;},
AMj=a=>{return a.oq.ky.data;};
let Ol=E(G6);
let AHA=(a,b)=>{let c;c=a.oq.ky.data;b=a.o7+(b*4|0)|0;return KU((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
AMd=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Qe(c);e=a.oq.ky.data;b=a.o7+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let QR=E(G6);
let WC=(a,b)=>{let c;c=a.oq.ky.data;b=a.o7+(b*4|0)|0;return KU(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AHo=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Qe(c);e=a.oq.ky.data;b=a.o7+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function GV(){let a=this;HO.call(a);a.ol=null;a.s1=0;a.pC=0;}
let AE2=a=>{return a.s1;},
AMV=a=>{return a.ol.ky.data;};
let Oa=E(GV);
let ABb=(a,b)=>{let c;c=a.ol.ky.data;b=a.pC+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
AAg=(a,b,c)=>{let d;d=a.ol.ky.data;b=a.pC+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let PZ=E(GV);
let AJV=(a,b)=>{let c;c=a.ol.ky.data;b=a.pC+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
ABd=(a,b,c)=>{let d;d=a.ol.ky.data;b=a.pC+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let K9=E(Bx);
let FL=E(K9);
let MU=E(Bx);
let FM=E(BI);
let Ql=null,E5=null,AIu=null,ADe=null,SK=null,AMD=null;
let ACG=()=>{let b,c,d,e,f;b=new FM;b.jR=A(565);b.jK=0;Ql=b;c=new FM;c.jR=A(566);c.jK=1;E5=c;d=new FM;d.jR=A(567);d.jK=2;AIu=d;e=new FM;e.jR=A(568);e.jK=3;ADe=e;f=new FM;f.jR=A(569);f.jK=4;SK=f;AMD=S(FM,[b,c,d,e,f]);};
let EC=E(BI);
let Rc=null,ANg=null,QN=null,TG=null,RS=null,QB=null,Fm=null,ALt=null;
let HU=b=>{let c,d,e,f,g,h,i;if(b==1)return Rc;if(b==2)return QN;if(b==5)return TG;if(b==6)return RS;if(b==3)return QB;if(b==4)return Fm;c=new Q;d=new J;d.jA=G(16);F(d,d.jz,A(570));L(d,d.jz,b,10);e=new H;f=d.jA;g=f.data;h=d.jz;i=g.length;if(h>=0&&h<=(i-0|0)){e.jB=K(f.data,0,h);c.jC=1;c.jD=1;c.jE=e;B(c);}c=new I;c.jC=1;c.jD=1;B(c);},
Wo=()=>{let b,c,d,e,f,g,h;b=new EC;b.jR=A(197);b.jK=0;Rc=b;c=new EC;c.jR=A(571);c.jK=1;ANg=c;d=new EC;d.jR=A(572);d.jK=2;QN=d;e=new EC;e.jR=A(573);e.jK=3;TG=e;f=new EC;f.jR=A(574);f.jK=4;RS=f;g=new EC;g.jR=A(575);g.jK=5;QB=g;h=new EC;h.jR=A(576);h.jK=6;Fm=h;ALt=S(EC,[b,c,d,e,f,g,h]);};
let ACq=E();
let LA=0,IU=null,IN=null;
let AJc=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:Qe(b);c.u0=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.ta=0;c.sZ=0;return;}if(f)d=e|8388608;else{d=e<<1;while(DT(CZ(U(d),U(8388608)),B$)){d=d<<1;f=f+(-1)|0;}}g=IN;h=AK1(g,0,g.data.length,f);if(h<0)h= -h|0;g=IN.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=IU.data[e];j=CZ(U(d),D(4294967295, 0));k=Bg(Bd(Z(j,CZ(U(e),D(4294967295, 0))),32-i|0));if(k<LA){while(EH(k,LA)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=IN.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Bg(Bd(Z(j,CZ(U(IU.data[e]),D(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=IU.data;f=h+1|0;e=g[f];m=i-1|0;n=Z(CZ(U(l),D(4294967295, 0)),CZ(U(e),D(4294967295, 0)));e=32-m|0;o=Bg(Bd(n,e));p=Bg(Bd(Z(CZ(U(d-1|0),D(4294967295, 0)),CZ(U(g[f]),D(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(EH(DV(k,r),DV(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(EH(DV(k,l),DV(o,l))>=0)break;m=l;}s=EH(q,m);d=s>0?Dg(DV(k,q),q):s<0?Dg(DV(k,m),m)+m|0:Dg(DV((k+(m/2|0)|0),m),m);if(EW(U(d),U(1000000000))>=0)while(true){h=h+1|
0;d=DV(d,10);if(EH(d,1000000000)<0)break;}else if(EH(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.ta=d;c.sZ=h-50|0;},
ACY=()=>{LA=DV((-1),10);IU=If([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);IN=If([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let IP=E(BI);
let La=null,Pe=null,Uu=null;
let AR$=()=>{let b,c;b=new IP;b.jR=A(577);b.jK=0;La=b;c=new IP;c.jR=A(578);c.jK=1;Pe=c;Uu=S(IP,[b,c]);};
function Dr(){BI.call(this);this.l7=null;}
let Lj=null,ZY=null,AAz=null,W6=null,AN1=null,ASi=null,AAa=null,AFL=null,AHm=null,E9=null,AMy=null,AMH=null;
let AEf=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new Dr;b.jR=A(579);b.jK=0;b.l7=A(580);Lj=b;c=new Dr;c.jR=A(581);c.jK=1;c.l7=A(582);ZY=c;d=new Dr;d.jR=A(583);d.jK=2;d.l7=A(584);AAz=d;e=new Dr;e.jR=A(585);e.jK=3;e.l7=A(586);W6=e;f=new Dr;f.jR=A(587);f.jK=4;f.l7=A(588);AN1=f;g=new Dr;g.jR=A(589);g.jK=5;g.l7=A(590);ASi=g;h=new Dr;h.jR=A(591);h.jK=6;h.l7=A(592);AAa=h;i=new Dr;i.jR=A(593);i.jK=7;i.l7=A(594);AFL=i;j=new Dr;j.jR=A(595);j.jK=8;j.l7=A(596);AHm=j;k=new Dr;k.jR=A(597);k.jK=9;k.l7=A(598);E9=k;l=new Dr;l.jR=A(599);l.jK
=10;l.l7=A(600);AMy=l;AMH=S(Dr,[b,c,d,e,f,g,h,i,j,k,l]);};
let ALX=E(0);
let Ii=E(BI);
let Ou=null,Uk=null,ACr=null;
let AAI=()=>{let b,c;b=new Ii;b.jR=A(601);b.jK=0;Ou=b;c=new Ii;c.jR=A(602);c.jK=1;Uk=c;ACr=S(Ii,[b,c]);};
let AKZ=E();
let Kp=0;
let AMS=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!Kp){PO(b,c,d,e);return;}f=G$;if(f!==Nd&&f!==f&&f!==MB)AMb(b,c,d,e);else{g=B1;f=c.k0;if(f===null)h=6408;else a:{e=f.li;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Q;g=new J;g.jA=G(16);D2(g,g.jz,A(59));L(g,g.jz,e,10);f=new H;i=g.jA;j=i.data;d=g.jz;e=j.length;if(d>=0&&d<=(e-0|0)){f.jB=K(i.data,0,d);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}k=f===null?c.lJ:f.lD;l=f===null
?c.lN:f.lC;if(f===null)m=6408;else b:{m=f.li;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Q;g=new J;By(g);g.jA=G(16);ARz(g,g.jz,A(59));L(g,g.jz,m,10);f=new H;i=g.jA;j=i.data;d=g.jz;e=j.length;if(d>=0&&d<=(e-0|0)){f.jB=K(i.data,0,d);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}if(f===null)n=5121;else c:{n=f.li;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new Q;g=new J;g.jA
=G(16);D2(g,g.jz,A(59));L(g,g.jz,n,10);f=new H;i=g.jA;j=i.data;d=g.jz;e=j.length;if(d>=0&&d<=(e-0|0)){f.jB=K(i.data,0,d);c.jC=1;c.jD=1;c.jE=f;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}n=5121;}g.cx(b,0,h,k,l,0,m,n,c.pV);Bl.iW(b);}},
AMb=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B8.pc.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B8.pc.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bl.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BF;h.jP=g;i=h;g.classObject=i;}}if(h.jI===null)h.jI=T(h.jP.$meta.name);i=h.jI;if(i===A(603))f=1;else if(!(A(603) instanceof H))f=0;else{g=A(603);f=i.jB!==g.jB?0:1;}if(!f&&Em===null){PO(b,c,d,e);break a;}}g=B1;i=c.k0;if(i===null)f=6408;else b:{e=i.li;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new Q;g=new J;g.jA=G(16);B2(g,g.jz,Cg(A(59)));L(g,g.jz,e,10);i=new H;j=g.jA;k=j.data;d=g.jz;e=k.length;if(d>=0&&d<=(e-0|0)){i.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}l=i===null?c.lJ:i.lD;m=i===null?c.lN:i.lC;if(i===null)n=6408;else c:{n=i.li;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new Q;g=new J;g.jA
=G(16);D2(g,g.jz,A(59));L(g,g.jz,n,10);i=new H;j=g.jA;k=j.data;d=g.jz;e=k.length;if(d>=0&&d<=(e-0|0)){i.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}if(i===null)o=5121;else d:{o=i.li;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new Q;g=new J;g.jA=G(16);B2(g,g.jz,Cg(A(59)));L(g,g.jz,o,10);i=new H;j=g.jA;k=j.data;d=g.jz;e=k.length;if(d>=0&&d<=(e-0|0)){i.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=i;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}o=5121;}g.cx(b,
0,f,l,m,0,n,o,c.pV);Bl.iW(b);}},
PO=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=B1;g=c.k0;if(g===null)h=6408;else a:{i=g.li;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new Q;f=new J;f.jA=G(16);B2(f,f.jz,Cg(A(59)));L(f,f.jz,i,10);g=new H;j=f.jA;k=j.data;d=f.jz;e=k.length;if(d>=0&&d<=(e-0|0)){g.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}h=6406;}l=g===null?c.lJ:g.lD;m=g===null?c.lN:g.lC;if(g===null)n=6408;else b:{n=g.li;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new Q;f=new J;f.jA=G(16);D2(f,f.jz,A(59));L(f,f.jz,n,10);g=new H;j=f.jA;k=j.data;d=f.jz;e=k.length;if(d>=0&&d<=(e-0|0)){g.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}if(g===null)o=5121;else c:{o=g.li;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new Q;f=new J;f.jA=G(16);B2(f,f.jz,Cg(A(59)));L(f,f.jz,o,10);g=new H;j=f.jA;k=j.data;d=f.jz;e
=k.length;if(d>=0&&d<=(e-0|0)){g.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}f.cx(b,0,h,l,m,0,n,o,c.pV);if(Bl===null&&d!=e){c=new Q;c.jC=1;c.jD=1;c.jE=A(604);B(c);}f=c.k0;p=(f===null?c.lJ:f.lD)/2|0;i=(f===null?c.lN:f.lC)/2|0;h=1;while(p>0&&i>0){f=new Fu;g=c.k0;Jl(f,p,i,g===null?Fm:HU(g.li));g=IR;f.qC=g;q=f.k0;if(q===null){E1(f);g=f.ly;q=Bz(E9.jR);g.globalCompositeOperation=q;}else{d=g!==g?1:0;Mk(q.lB,d);}g=c.k0;l=g===null?c.lJ:g.lD;m=g===null?c.lN:g.lC;q=f.k0;if(q===null){E1(c);JK(f,
c.nP,0,0,l,m,0,0,p,i);}else{r=g.lB;s=q.lB;Ju(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.n3){f=new Q;f.jC=1;f.jD=1;f.jE=A(58);B(f);}Ep();GB(FB,c.pk);g=c.k0;if(g!==null)HL(g.lB);c.n3=1;}c=B1;g=f.k0;if(g===null)d=6408;else d:{d=g.li;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new Q;f=new J;f.jA=G(16);B2(f,f.jz,Cg(A(59)));L(f,f.jz,d,10);g=new H;j=f.jA;k=j.data;d=f.jz;e=k.length;if(d>=0&&d<=(e-0|0)){g.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC
=1;c.jD=1;B(c);}d=6406;}e=g===null?f.lJ:g.lD;p=g===null?f.lN:g.lC;if(g===null)l=6408;else e:{l=g.li;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new Q;f=new J;f.jA=G(16);D2(f,f.jz,A(59));L(f,f.jz,l,10);g=new H;j=f.jA;k=j.data;d=f.jz;e=k.length;if(d>=0&&d<=(e-0|0)){g.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.li;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new Q;f=new J;f.jA=G(16);B2(f,f.jz,Cg(A(59)));L(f,f.jz,m,10);g=new H;j=f.jA;k=j.data;d=f.jz;e=k.length;if(d>=0&&d<=(e-0|0)){g.jB=K(j.data,0,d);c.jC=1;c.jD=1;c.jE=g;B(c);}c=new I;c.jC=1;c.jD=1;B(c);}m=5121;}c.cx(b,h,d,e,p,0,l,m,f.pV);c=f.k0;p=(c===null?f.lJ:c.lD)/2|0;i=(c===null?f.lN:c.lC)/2|0;h=h+1|0;c=f;}},
AUu=()=>{Kp=1;};
let SL=E();
let Ny=null;
let Lf=()=>{Lf=BP(SL);AR4();};
let AR4=()=>{let b,c;b=W((Uu.p()).data.length);c=b.data;Ny=b;c[La.jK]=1;c[Pe.jK]=2;};
let Iy=E(Bx);
let T8=E();
let QG=null;
let Ne=()=>{Ne=BP(T8);XH();};
let AHz=(b,c,d,e)=>{Ne();a:{b:{if(QG===Mq){if(B8.kP.width!=B8.kP.width)break b;if(B8.kP.height!=B8.kP.height)break b;}B1.dC(b,c,d,e);break a;}B1.dC(Dg(b,B8.kP.width)/B8.kP.width|0,Dg(c,B8.kP.height)/B8.kP.height|0,Dg(d,B8.kP.width)/B8.kP.width|0,Dg(e,B8.kP.height)/B8.kP.height|0);}},
XH=()=>{QG=Mq;};
let ACu=E();
function MC(){let a=this;C.call(a);a.pF=null;a.nw=null;}
let APh=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pF.readyState==4){if(a.pF.status==200){if(a.nw.na.mh){if(BY===null){b=new C1;c=new Cx;c.lk=BM(32);b.lI=c;c=new J;By(c);c.jA=G(16);b.ln=c;b.lm=G(32);b.lq=0;b.lr=Cp;BY=b;}b=a.nw.m9;c=new J;c.jA=G(16);F(c,c.jz,A(605));d=c.jz;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jA;f=e.data;g
=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){b.jB=K(e.data,0,g);BZ(Bz(b));BZ("\n");}else{b=new I;b.jC=1;b.jD=1;Bj(b);B(b);}}b=a.nw;b.nl.iX(b.m9,T(a.pF.responseText));}else if(a.pF.status!=404&&a.pF.status!=403){try{i=U(100);$p=1;continue _;}catch($$e){$$je=Bb($$e);if($$je instanceof DJ){}else{throw $$e;}}b=a.nw;c=b.na;d=b.ov;j=b.m9;b=b.nl;if(c.mh){if(BY===null){k=new C1;l=new Cx;l.lk=BM(32);By(k);k.lI=l;l=new J;Dq(l,16);k.ln=l;k.lm=G(32);k.lq=0;k.lr=Cp;BY=k;}k=new J;k.jA=G(16);F(k,k.jz,A(94));F(k,k.jz,j===null?A(2)
:j);l=new H;e=k.jA;f=e.data;h=k.jz;m=f.length;if(h>=0&&h<=(m-0|0)){l.jB=K(e.data,0,h);BZ(Bz(l));BZ("\n");}else{b=new I;Y(b);B(b);}}c.kK=c.kK+1|0;k=new GO;k.na=c;k.ov=d;k.m9=j;k.nl=b;b=null;c=null;k.mu=new C;k.mt=1;k.m6=c;k.nk=b;g=CM;CM=g+1|0;k.nj=U(g);b=new D_;b.m7=k;Es(b);}else{b=a.nw;b.nl.iY(b.m9);}b=a.nw.na;b.kK=b.kK-1|0;}return;case 1:a:{try{KN(i);if(Fi()){break _;}break a;}catch($$e){$$je=Bb($$e);if($$je instanceof DJ){}else{throw $$e;}}}b=a.nw;c=b.na;d=b.ov;j=b.m9;b=b.nl;if(c.mh){if(BY===null){k=new C1;l
=new Cx;l.lk=BM(32);By(k);k.lI=l;l=new J;Dq(l,16);k.ln=l;k.lm=G(32);k.lq=0;k.lr=Cp;BY=k;}k=new J;k.jA=G(16);F(k,k.jz,A(94));F(k,k.jz,j===null?A(2):j);l=new H;e=k.jA;f=e.data;h=k.jz;m=f.length;if(h>=0&&h<=(m-0|0)){l.jB=K(e.data,0,h);BZ(Bz(l));BZ("\n");}else{b=new I;Y(b);B(b);}}c.kK=c.kK+1|0;k=new GO;k.na=c;k.ov=d;k.m9=j;k.nl=b;b=null;c=null;k.mu=new C;k.mt=1;k.m6=c;k.nk=b;g=CM;CM=g+1|0;k.nj=U(g);b=new D_;b.m7=k;Es(b);b=a.nw.na;b.kK=b.kK-1|0;return;default:E_();}}C_().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AFg=(a,b)=>{let $p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APh(a,b);if(Fi()){break _;}return;default:E_();}}C_().s(a,b,$p);};
let I$=E(BI);
let Mq=null,AIx=null,ACl=null;
let Zg=()=>{let b,c;b=new I$;b.jR=A(606);b.jK=0;Mq=b;c=new I$;c.jR=A(607);c.jK=1;AIx=c;ACl=S(I$,[b,c]);};
let Nz=E(0);
let Mc=E(Ek);
let JM=E(Ek);
let Of=E(Ek);
function GW(){BI.call(this);this.rT=0;}
let AGN=null,HD=null,QU=null,APY=null;
let ALi=()=>{let b,c,d;b=new GW;b.jR=A(608);b.jK=0;b.rT=0;AGN=b;c=new GW;c.jR=A(609);c.jK=1;c.rT=1;HD=c;d=new GW;d.jR=A(610);d.jK=2;d.rT=4;QU=d;APY=S(GW,[b,c,d]);};
let ADJ=E();
function Hj(){C.call(this);this.q5=0;}
let RP=null,Sh=null,Qa=null;
let Du=a=>{return a.q5;},
ATc=()=>{let b;b=new Hj;b.q5=1;RP=b;b=new Hj;b.q5=0;Sh=b;Qa=M(Ch);};
function R8(){let a=this;C.call(a);a.pM=0;a.pm=0;a.mW=0;a.rI=B$;a.tf=null;a.ve=null;a.wP=B$;a.u7=null;}
function IM(){let a=this;C.call(a);a.n6=null;a.xI=0.0;a.qw=0;a.qq=null;a.xY=null;a.xu=null;a.wd=null;a.y1=null;}
let ANX=null,AR8=null;
let Nb=()=>{Nb=BP(IM);AM_();};
let ARQ=(a,b,c,d)=>{let e;Nb();a.xI=1.0;a.qw=0;if(!BA(b,UM)){e=AEP(b,c);a.n6=e;b=new Rk;b.qP=a;b.ms=e;a.wd=b;}else{e=new SS;PM(e,b,c);e.pj=0;e.rz=Fg(KK((e.lg.data.length/5|0)*3|0)|0);b=new RO;b.qP=a;b.ms=e;a.wd=b;a.n6=e;}b=new Ri;c=a.n6;b.qP=a;b.ms=c;a.qq=b;b=new Th;b.qP=a;b.ms=c;e=new Gv;e.q8=1;e.rb=Cd(16);b.yh=e;e=new Gv;e.q8=1;e.rb=Cd(16);b.zo=e;a.xY=b;b=new Rb;b.qP=a;b.ms=c;a.xu=b;a.y1=d;},
AM_=()=>{ANX=C5();AR8=Cd(6);};
function QK(){IM.call(this);this.zp=null;}
function RC(){let a=this;C.call(a);a.mk=null;a.lt=0;}
let ADw=null;
let F0=(a,b)=>{let c,d,e,f;c=a.mk;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);DD(c,0,f,0,a.lt);a.mk=f;},
Jg=a=>{let b,c,d;b=a.lt+4|0;if(b>a.mk.data.length)F0(a,b);c=a.mk.data;d=a.lt;b=d+1|0;a.lt=b;c[d]=110;d=b+1|0;a.lt=d;c[b]=117;b=d+1|0;a.lt=b;c[d]=108;a.lt=b+1|0;c[b]=108;},
AJz=()=>{ADw=AFn([48,49,50,51,52,53,54,55,56,57]);};
function Qi(){let a=this;Dz.call(a);a.mC=null;a.zi=null;}
let Py=E(0);
function QP(){let a=this;C.call(a);a.xe=0;a.yB=0;a.xE=0.0;}
let UM=E(0);
function GZ(){let a=this;C.call(a);a.tJ=null;a.pG=null;a.mY=0.0;a.lg=null;a.lj=0;a.w3=0.0;a.u_=0.0;a.vW=0.0;a.sX=0;a.rA=null;}
let ABG=null;
let MA=()=>{MA=BP(GZ);AC0();};
let PM=(a,b,c)=>{MA();a.w3=1.0;a.u_=0.5;a.vW=0.0010000000474974513;a.sX=0;a.rA=null;a.tJ=b;a.lg=Cd(2000);a.pG=c;Il(a);a.mY=FH(KZ);},
AEP=(a,b)=>{let c=new GZ();PM(c,a,b);return c;},
AT8=(a,b)=>{let c;c=a.pG;a.pG=b;Il(a);return c;},
Il=a=>{let b,c,d,e,f;a:{b=a.pG;if(b!==null){c=0.5*(b.uk+b.uj);d=0.5*(b.ul+b.uh);e=0;while(true){f=a.lg.data;if(e>=f.length)break a;f[e+3|0]=c;f[e+4|0]=d;e=e+5|0;}}}},
AVj=(a,b)=>{let c,d;c=FH(b);d=a.mY;a.mY=c;return d;},
AU3=(a,b)=>{let c;c=a.mY;a.mY=b;return c;},
AS2=a=>{return a.mY;},
AVc=a=>{return a.sX;},
AVG=a=>{return a.rA===null?0:1;},
ACv=a=>{a.lj=a.lj+4|0;},
AU5=a=>{Sb(a,4);},
Sb=(a,b)=>{let c,d;c=b*5|0;d=a.lg.data.length;if(c>d)a.i2(c);else if(((d-(20*a.lj|0)|0)/5|0)<b)a.hB();},
AGT=(a,b)=>{let c;a.hB();c=a.lg.data.length;while(b>c){c=c*2|0;}a.lg=Cd(c);Il(a);},
ATd=a=>{return (a.lg.data.length-(20*a.lj|0)|0)/5|0;},
AG4=a=>{let b,c;b=a.lj;if(!b)return;c=a.rA;if(c===null?0:1)c.i3();else{c=a.pG;if(c===null){c=new BN;c.jC=1;c.jD=1;c.jE=A(611);B(c);}AGr(a.tJ,c.oT,a.lg,0,5*b|0);}a.lj=0;},
ATG=a=>{return 5*a.lj|0;},
AUn=(a,b)=>{a.lg.data[(5*a.lj|0)+0|0]=b;},
ATM=(a,b)=>{a.lg.data[(5*a.lj|0)+1|0]=b;},
AVi=(a,b)=>{a.lg.data[(5*a.lj|0)+5|0]=b;},
AST=(a,b)=>{a.lg.data[(5*a.lj|0)+6|0]=b;},
ASO=(a,b)=>{a.lg.data[(5*a.lj|0)+10|0]=b;},
AVp=(a,b)=>{a.lg.data[(5*a.lj|0)+11|0]=b;},
ATE=(a,b)=>{a.lg.data[(5*a.lj|0)+15|0]=b;},
AUF=(a,b)=>{a.lg.data[(5*a.lj|0)+16|0]=b;},
AUt=(a,b)=>{a.lg.data[(5*a.lj|0)+2|0]=b;},
AVa=(a,b)=>{a.lg.data[(5*a.lj|0)+7|0]=b;},
AWa=(a,b)=>{a.lg.data[(5*a.lj|0)+12|0]=b;},
ATg=(a,b)=>{a.lg.data[(5*a.lj|0)+17|0]=b;},
AC0=()=>{ABG=C5();};
function El(){let a=this;C.call(a);a.qP=null;a.ms=null;}
let TO=null,TP=null,TQ=null,TL=null,TN=null,Sn=null,Um=null;
let ASV=()=>{TO=new Bm;TP=new Bm;TQ=new Bm;TL=new Bm;TN=new Bm;Sn=new Bm;Um=new Bm;};
let Hm=E(El);
let AJ0=null;
let ARy=()=>{let b,c;b=new NO;c=new LQ;c.uW=1;c.vr=Fg(16);b.x3=c;c=new Fy;c.oB=1;c.l3=W(16);b.yr=c;c=new LQ;c.uW=1;c.vr=Fg(16);b.x8=c;AJ0=b;};
let Rk=E(Hm);
function SS(){let a=this;GZ.call(a);a.rz=null;a.pj=0;}
let AQ2=a=>{let b,c,d,e,f,g,h,i;b=a.lj;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.pj;g=3*f|0;h=a.rz.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;f=f+1|0;a.pj=f;i=(b+3|0)<<16>>16;d=3*f|0;h[d]=c;h[d+1|0]=e;h[d+2|0]=i;a.pj=f+1|0;a.lj=b+4|0;},
QM=a=>{let b,c;b=a.lj;if(!b)return;c=a.rA;if(c===null?0:1)c.i3();else a.tJ.i5(a.pG.oT,a.lg,0,5*b|0,a.rz,0,3*a.pj|0);a.lj=0;a.pj=0;},
Wt=(a,b)=>{let c;QM(a);c=a.lg.data.length;while(b>c){c=c*2|0;}a.lg=Cd(c);Il(a);a.rz=Fg(KK((a.lg.data.length/5|0)*3|0)|0);};
let RO=E(Hm);
let Ri=E(El);
let Jy=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n,o,p,q,r,s;Sb(a.ms,4);j=0.0;k=d-b;l=e-c;if(g){m=a.ms;n=m.vW;o=m.w3;p=m.u_;b=b/o;b=(b+CH(b)*0.5|0)*o+p-CH(k)*n;c=c/o;c=(c+CH(c)*0.5|0)*o+p-CH(l)*n;d=d/o;d=(d+CH(d)*0.5|0)*o+p+CH(k)*n;e=e/o;e=(e+CH(e)*0.5|0)*o+p+CH(l)*n;}q=0.5*f;if(b!==d){if(c===e){j=q;q=0.0;}else{f=e-c;k=d-b;r=1.0/Di(f*f+k*k)*q;q=f*r;j=k*r;}}f=b+q;m=a.ms;s=m.lg.data;g=5*m.lj|0;s[g+0|0]=f;s[g+1|0]=c-j;s[g+5|0]=b-q;s[g+6|0]=c+j;s[g+10|0]=d-q;s[g+11|0]=e+j;s[g+15|0]=d+q;s[g+16|0]=e-j;s[g+2|0]=h;s[g+7|0]
=h;s[g+12|0]=i;s[g+17|0]=i;m.i6();m=a.ms;if(!m.sX)m.hB();};
function Th(){let a=this;El.call(a);a.yh=null;a.zo=null;}
let U8=null,Vd=null;
let AWk=()=>{U8=new Bm;Vd=new Bm;};
let Rb=E(El);
let VB=null,NR=null;
let ATN=()=>{VB=new Bm;NR=new Bm;};
function LQ(){let a=this;C.call(a);a.vr=null;a.uW=0;}
function Qg(){let a=this;Dz.call(a);a.mJ=null;a.qY=null;a.qB=null;a.qN=null;}
let YV=(a,b)=>{a.mJ.mC.rI=DU(b);},
WJ=(a,b)=>{b=a.mJ.mC;b.pm=1;b.mW=0;},
AIm=(a,b,c)=>{GN(a.qN,a.qY,a.qB,c);b=a.mJ.mC;b.pM=1;b.mW=0;return 0;};
let N6=E();
let T5=null;
let MP=()=>{MP=BP(N6);AHW();};
let AHW=()=>{let b,c;b=W((Ng.p()).data.length);c=b.data;T5=b;c[Fw.jK]=1;c[Fn.jK]=2;c[Fc.jK]=3;c[E7.jK]=4;c[Jv.jK]=5;};
function FO(){let a=this;Gk.call(a);a.nO=0;a.mP=null;a.m_=null;a.mU=null;}
let Z7=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Kc;c.nR=a;c.o8=b;c=B4(c,"handleEvent");b.onreadystatechange=c;c=a.mU;d=a.m_;e=new GP;e.ud=c;e.rp=d;c=B4(e,"handleEvent");b.onprogress=c;d=a.mP;f=a.nO;b.open("GET",Bz(d),!!f);if(a.nO){d="arraybuffer";b.responseType=d;}b.send();};
function N4(){let a=this;Dz.call(a);a.rU=null;a.yT=null;}
let Z_=(a,b)=>{a.rU.mJ.mC.rI=DU(b);},
AI6=(a,b)=>{b=a.rU.mJ.mC;b.pm=1;b.mW=0;},
YE=(a,b,c)=>{c=a.rU;b=null;GN(c.qN,c.qY,c.qB,b);b=c.mJ.mC;b.pM=1;b.mW=0;return 0;};
function N5(){let a=this;Dz.call(a);a.qf=null;a.vq=null;a.w1=null;a.rg=null;}
let ADU=(a,b)=>{a.qf.mJ.mC.rI=DU(b);},
Xj=(a,b)=>{b=a.qf.mJ.mC;b.pm=1;b.mW=0;},
Xo=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.vq;if(e!==null)d.setAttribute("crossOrigin",Bz(e));a:{e=a.rg;e.kK=e.kK+1|0;e=new KL;e.r_=a;e.zk=b;e.wB=c;e.uU=d;d.addEventListener("load",B4(e,"handleEvent"),!!0);d.addEventListener("error",B4(e,"handleEvent"),!!0);if(!a.rg.w7){b=Bz(b);d.src=b;}else{b=a.w1;c=AMQ(c);e=new J;e.jA=G(16);F(e,e.jz,A(612));f=e.jz;if(b===null)b=A(2);F(e,f,b);F(e,e.jz,A(613));f=e.jz;if(c===null)c=A(2);F(e,f,c);b=new H;g=e.jA;h=g.data;i=e.jz;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.jB=K(g.data,0,i);b=Bz(b);d.src=b;}return 0;}b=new I;b.jC=1;b.jD=1;Bj(b);B(b);},
AEI=(a,b,c)=>{return Xo(a,b,c);};
function Kc(){let a=this;C.call(a);a.o8=null;a.nR=null;}
let AH2=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o8.readyState==4){if(a.o8.status==200){if(a.nR.mU.mh){if(BY===null){b=new C1;c=new Cx;c.lk=BM(32);b.lI=c;c=new J;By(c);c.jA=G(16);b.ln=c;b.lm=G(32);b.lq=0;b.lr=Cp;BY=b;}b=a.nR.mP;c=new J;c.jA=G(16);F(c,c.jz,A(605));d=c.jz;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.jA;f=e.data;g
=c.jz;h=f.length;if(g>=0&&g<=(h-0|0)){b.jB=K(e.data,0,g);BZ(Bz(b));BZ("\n");}else{b=new I;b.jC=1;b.jD=1;Bj(b);B(b);}}i=a.o8.response;j=new Int8Array(i);b=a.nR;c=b.m_;k=b.mP;b=new H7;b.mX=j;b.tI=i;c.iX(k,b);}else if(a.o8.status!=404&&a.o8.status!=403){try{l=U(100);$p=1;continue _;}catch($$e){$$je=Bb($$e);if($$je instanceof DJ){}else{throw $$e;}}b=a.nR;c=b.mU;d=b.nO;k=b.mP;b=b.m_;if(c.mh){if(BY===null){i=new C1;j=new Cx;j.lk=BM(32);By(i);i.lI=j;j=new J;Dq(j,16);i.ln=j;i.lm=G(32);i.lq=0;i.lr=Cp;BY=i;}i=new J;i.jA
=G(16);F(i,i.jz,A(94));F(i,i.jz,k===null?A(2):k);j=new H;e=i.jA;f=e.data;h=i.jz;m=f.length;if(h>=0&&h<=(m-0|0)){j.jB=K(e.data,0,h);BZ(Bz(j));BZ("\n");}else{b=new I;Y(b);B(b);}}c.kK=c.kK+1|0;i=new FO;i.mU=c;i.nO=d;i.mP=k;i.m_=b;b=null;c=null;i.mu=new C;i.mt=1;i.m6=c;i.nk=b;g=CM;CM=g+1|0;i.nj=U(g);b=new D_;b.m7=i;Es(b);}else{b=a.nR;b.m_.iY(b.mP);}b=a.nR.mU;b.kK=b.kK-1|0;}return;case 1:a:{try{KN(l);if(Fi()){break _;}break a;}catch($$e){$$je=Bb($$e);if($$je instanceof DJ){}else{throw $$e;}}}b=a.nR;c=b.mU;d=b.nO;k
=b.mP;b=b.m_;if(c.mh){if(BY===null){i=new C1;j=new Cx;j.lk=BM(32);By(i);i.lI=j;j=new J;Dq(j,16);i.ln=j;i.lm=G(32);i.lq=0;i.lr=Cp;BY=i;}i=new J;i.jA=G(16);F(i,i.jz,A(94));F(i,i.jz,k===null?A(2):k);j=new H;e=i.jA;f=e.data;h=i.jz;m=f.length;if(h>=0&&h<=(m-0|0)){j.jB=K(e.data,0,h);BZ(Bz(j));BZ("\n");}else{b=new I;Y(b);B(b);}}c.kK=c.kK+1|0;i=new FO;i.mU=c;i.nO=d;i.mP=k;i.m_=b;b=null;c=null;i.mu=new C;i.mt=1;i.m6=c;i.nk=b;g=CM;CM=g+1|0;i.nj=U(g);b=new D_;b.m7=i;Es(b);b=a.nR.mU;b.kK=b.kK-1|0;return;default:E_();}}C_().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AQ$=(a,b)=>{let $p,$z;$p=0;if(Fk()){let $T=C_();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH2(a,b);if(Fi()){break _;}return;default:E_();}}C_().s(a,b,$p);};
let AQz=E();
let OS=0.0,OT=0.0;
let ATA=()=>{OS=Di(2.0);OT=Di(3.0);};
let AAD=E();
function KL(){let a=this;C.call(a);a.zk=null;a.wB=null;a.uU=null;a.r_=null;}
let AEm=(a,b)=>{let c,d;c=T(b.type);if(c===A(614))d=1;else if(!(A(614) instanceof H))d=0;else{b=A(614);d=c.jB!==b.jB?0:1;}if(d){b=a.r_.qf.mJ.mC;b.pm=1;b.mW=0;}else{b=a.wB;b.tS=a.uU;c=a.r_.qf;GN(c.qN,c.qY,c.qB,b);b=c.mJ.mC;b.pM=1;b.mW=0;}b=a.r_.rg;b.kK=b.kK-1|0;},
ACO=(a,b)=>{AEm(a,b);};
ASX([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",11,"actions",7,"graphics",15,"g2d",7,"math",0,"mygdx",18,"game",-1,"java",20,"util",21,"regex",20,"nio",23,"charset",20,"lang"]);
C4([C,"Object",25,0,[],0,3,0,0,["cS",P(ABx),"cL",N(AIw),"T",P(Pf)],APd,0,C,[],0,3,0,0,0,NV,0,C,[],0,3,0,Sj,0,NI,0,C,[],3,3,0,0,0,LY,0,C,[NI],0,3,0,0,0,CU,0,C,[],3,3,0,0,0,MR,0,LY,[CU],0,3,0,0,0,Bw,0,C,[],3,3,0,0,0,Fr,0,C,[Bw],0,3,0,0,0,Dh,0,C,[],3,3,0,0,0,B6,0,C,[],3,3,0,0,0,BI,0,C,[Dh,B6],1,3,0,0,["T",P(AEN),"cL",N(X8)],G5,0,BI,[],12,3,0,0,0,CP,"Actor",11,C,[],0,3,0,0,["be",N(Ki),"J",Bc(Rl),"x",N(ANo),"Z",N(AMx),"T",P(So)],L1,0,C,[],3,3,0,0,0,BJ,"Group",11,CP,[L1],0,3,0,0,["be",N(Q6),"bO",Bp(AG7),"Z",N(OC),
"J",Bc(HQ),"x",N(AM1),"T",P(AA$)],F8,0,C,[],3,3,0,0,0,Dy,"Iterable",25,C,[],3,3,0,0,0,GM,0,C,[F8,Dy],0,3,0,0,0,Gq,0,C,[],3,3,0,0,0,BX,0,C,[Gq],0,3,0,0,0,G3,0,BX,[],0,3,0,0,0,AK3,0,G3,[],0,0,0,0,0,Gw,"FocusListener$FocusEvent$Type",13,BI,[],12,3,0,0,0,MT,0,C,[],3,3,0,0,0,IC,0,C,[MT],3,3,0,0,0,Go,0,C,[],3,3,0,0,0,Dw,0,C,[Go],1,3,0,0,0,AN_,0,Dw,[],0,0,0,0,0,MH,0,GM,[],0,3,0,0,0,Mh,0,C,[Gq],0,3,0,0,0,ACc,0,C,[],1,3,0,0,0,WV,0,C,[],0,3,0,0,0,VA,0,C,[],3,3,0,0,0,Lk,0,C,[VA],0,3,0,0,0,AKr,0,Lk,[],0,0,0,0,0,CT,"FocusListener$FocusEvent",
13,Fr,[],0,3,0,0,["bt",P(VO)],QS,0,C,[],32,0,0,V0,0,AIs,0,C,[],1,3,0,0,0,SR,0,C,[],32,0,0,Ry,0,AN$,0,Dw,[],0,0,0,0,0,E8,0,C,[MT],0,3,0,0,0,SM,0,E8,[IC],0,3,0,0,0,VK,0,C,[],4,3,0,TK,0,Ly,0,C,[Gq],1,3,0,0,0,AQH,0,G3,[],0,3,0,0,0,ADx,0,C,[],0,3,0,0,0,Uq,0,C,[],0,3,0,U7,0,MN,0,C,[Gq],1,3,0,0,0,Im,0,E8,[IC],0,3,0,0,0]);
C4([Vv,0,E8,[IC],0,3,0,0,0,DY,0,BX,[],0,3,0,0,0,Vn,0,Im,[],0,3,0,0,0,AAR,0,Fr,[],0,3,0,0,0,Kb,0,C,[],3,3,0,0,0,X,"InputEvent",11,Fr,[],0,3,0,0,["bt",P(PG),"T",P(Oe)],DI,"Stage$TouchFocus",11,C,[Bw],4,3,0,0,["bt",P(Os)],Nx,0,C,[],32,0,0,LG,0,Dj,"InputEvent$Type",11,BI,[],12,3,0,0,0,Ce,0,C,[Bw],1,3,0,0,["T",P(AMs)],EE,0,Ce,[],1,3,0,0,0,AFs,0,EE,[],0,3,0,0,0,AJ5,0,EE,[],0,3,0,0,0,CX,0,Ce,[],1,3,0,0,0,Eu,0,CX,[],1,3,0,0,0,Xh,0,Eu,[],0,3,0,0,0,Zz,0,C,[Gq],0,0,0,0,0,Nj,0,Ce,[],0,3,0,0,0,AA8,0,Nj,[],0,3,0,0,0,ADq,
0,Ce,[],0,3,0,0,0,AHC,0,Ce,[],0,3,0,0,0,AMn,0,Ce,[],0,3,0,0,0,ANf,0,C,[],0,3,0,0,0,Lr,0,Ce,[],1,3,0,0,0,AGZ,0,Lr,[],0,3,0,0,0,ABQ,0,CX,[],0,3,0,0,0,AN5,0,CX,[],0,3,0,0,0,AOF,0,Eu,[],0,3,0,0,0,AKO,0,Ce,[],0,3,0,0,0,ALj,0,Eu,[],0,3,0,0,0,AQi,0,CX,[],0,3,0,0,0,CW,"ColorAction",14,CX,[],0,3,0,0,["bt",P(VJ)],ADZ,0,Ce,[],0,3,0,0,0,AGv,0,CX,[],0,3,0,0,0,AGL,0,Ce,[],0,3,0,0,0,AEt,0,Ce,[],0,3,0,0,0,AG2,0,EE,[],0,3,0,0,0,Ya,0,CX,[],0,3,0,0,0,AQr,0,Ce,[],0,3,0,0,0,AKj,0,Eu,[],0,3,0,0,0,AEa,0,EE,[],0,3,0,0,0,AJx,0,Ce,[],
0,3,0,0,0,ZB,0,CX,[],0,3,0,0,0,AF5,0,CX,[],0,3,0,0,0,AAL,0,C,[CU],0,3,0,0,0,C9,0,BJ,[Kb],0,3,0,0,0,Ee,0,C9,[],0,3,0,Qn,0,FK,0,Ee,[F8],0,3,0,0,0,Le,0,FK,[],0,3,0,0,0,ABI,0,Le,[],0,3,0,0,0]);
C4([AN7,0,BX,[],0,0,0,0,0,Mf,0,C9,[],0,3,0,0,0,RF,0,C,[],3,3,0,0,0,En,0,C,[RF],1,3,0,0,0,ADP,0,En,[],0,0,0,0,0,Df,0,CP,[Kb],0,3,0,0,0,Yu,0,Df,[],0,3,0,0,0,AN6,0,BX,[],0,0,0,0,0,B3,0,C,[],1,3,0,H4,0,SX,0,B3,[],0,0,0,0,0,AKs,0,B3,[],0,0,0,0,0,J5,0,DY,[],0,3,0,0,0,AGR,0,J5,[],0,3,0,0,0,Vq,0,B3,[],0,0,0,0,0,AP6,0,BX,[],0,0,0,0,0,LP,0,Ee,[],0,3,0,0,0,AKt,0,B3,[],0,0,0,0,0,F6,0,C,[],3,3,0,0,0,EY,0,C,[B6,F6],0,3,0,0,0,DF,"Table$DebugRect",12,EY,[],0,3,0,JC,0,ADT,0,En,[],0,0,0,0,0,Mu,0,Df,[F8],0,3,0,0,0,ABY,0,Mu,[],
0,3,0,0,0,AF9,0,BX,[],0,0,0,0,0,PQ,0,C,[],3,3,0,0,0,AMu,0,C,[PQ],0,3,0,0,0,Gd,0,C,[],0,3,0,0,0,Gz,0,Gd,[],0,3,0,0,0,TF,0,Gz,[],0,3,0,0,0,Mz,0,Df,[F8],0,3,0,0,0,AE_,0,Mz,[],0,3,0,0,0,ARY,0,Mf,[],0,0,0,0,0,Kd,0,C9,[],0,3,0,0,0,ASE,0,FK,[],0,3,0,0,0,MX,0,Df,[L1],0,3,0,0,0,Vo,0,B3,[],0,0,0,0,0,Uj,0,C,[],0,3,0,0,0,AEo,0,C,[Go],0,0,0,0,0,AGV,0,BX,[],0,0,0,0,0,AIB,0,Dw,[],0,0,0,0,0,AFw,0,C,[],0,3,0,0,0,AL1,0,BX,[],0,0,0,0,0,ARE,0,DY,[],0,0,0,0,0,AF7,0,Mh,[],0,0,0,0,0,ST,0,B3,[],0,0,0,0,0,SW,0,B3,[],0,0,0,0,0,Sp,0,
C,[],3,3,0,0,0,JA,0,C,[],0,3,0,0,0,Oq,0,JA,[],0,3,0,0,0,ADQ,0,En,[],0,0,0,0,0]);
C4([AN4,0,Ly,[],0,0,0,0,0,AN8,0,MN,[],0,0,0,0,0,AP7,0,BX,[],0,0,0,0,0,AP8,0,DY,[],0,0,0,0,0,Vp,0,B3,[],0,0,0,0,0,Oh,0,C,[Bw],0,3,0,TH,0,Ru,0,Gz,[],0,3,0,0,0,AGk,0,BX,[],0,0,0,0,0,YS,0,Dw,[],0,0,0,0,0,SY,0,B3,[],0,0,0,0,0,ACi,0,C9,[],0,3,0,0,0,AF8,0,BX,[],0,0,0,0,0,RV,0,C,[],0,3,0,0,0,IX,0,B3,[],0,3,0,0,0,AEp,0,Kd,[],0,3,0,0,0,SU,0,B3,[],0,0,0,0,0,AHu,0,Df,[F8],0,3,0,0,0,AGe,0,MH,[],0,0,0,0,0,U2,0,C,[],0,3,0,0,0,OF,0,Df,[],0,3,0,TZ,0,ON,0,C,[],0,3,0,0,0,AKv,0,B3,[],0,0,0,0,0,Vr,0,B3,[],0,0,0,0,0,ANm,0,LP,[],
0,3,0,0,0,SV,0,B3,[],0,0,0,0,0,QT,0,C,[],0,3,0,0,0,ARt,0,C,[],0,3,0,0,0,Fl,0,BI,[],12,3,0,0,0,ARM,0,B3,[],0,0,0,0,0,AFW,0,Dw,[],0,0,0,0,0,De,0,C,[],1,3,0,0,0,Vs,0,De,[],0,0,0,0,0,YH,0,C,[Sp],0,3,0,0,0,U_,0,C,[],0,3,0,0,0,R_,0,C,[],0,3,0,0,0,SO,0,C,[],0,3,0,0,0,MV,0,BX,[],0,3,0,0,0,YR,0,Dw,[],0,0,0,0,0,AP9,0,MX,[],0,0,0,0,0,YK,0,C,[],3,3,0,0,0,AGl,0,BX,[],0,0,0,0,0,ASv,0,C9,[],0,3,0,0,0,AJ2,0,C9,[],0,3,0,0,0,AGg,0,DY,[],0,0,0,0,0,ML,0,C,[],0,3,0,0,0,ADO,0,ML,[],0,0,0,0,0,APJ,0,CP,[CU],0,3,0,0,0,XV,0,BX,[],0,
0,0,0,0,ANJ,0,FK,[],0,3,0,0,0,AI7,0,BX,[],0,0,0,0,0]);
C4([AQ_,0,DY,[],0,0,0,0,0,Ur,0,Gd,[],0,3,0,0,0,AJ9,0,C9,[],0,3,0,0,0,R1,0,C,[],0,3,0,0,0,Q8,0,C,[],0,3,0,0,0,AIJ,0,Df,[],0,3,0,0,0,ARF,0,GM,[],0,0,0,0,0,XX,0,BX,[],0,0,0,0,0,ALI,0,C9,[],0,3,0,0,0,ARW,0,MV,[],0,3,0,0,0,XY,0,Ee,[],0,0,0,0,0,ADR,0,En,[],0,0,0,0,0,Wd,0,C,[],1,3,0,0,0,Vm,0,C,[],0,3,0,0,0,UU,0,C,[B6],0,3,0,UW,0,BO,0,C,[],1,3,0,Ji,0,O8,0,BO,[],0,3,0,0,0,AFZ,0,C,[],0,3,0,0,0,Tv,0,BO,[],0,0,0,0,0,AQC,0,C,[],0,3,0,0,0,Eo,0,BO,[],0,3,0,0,0,HB,0,Eo,[],0,3,0,0,0,Hu,0,Eo,[],0,3,0,0,0,I8,0,C,[],3,3,0,0,0,ABa,
0,C,[I8],0,3,0,0,0,Ty,0,BO,[],0,0,0,0,0,AOk,0,C,[F6],0,3,0,0,0,Tu,0,BO,[],0,0,0,0,0,Gm,0,BO,[],0,3,0,0,0,Tt,0,BO,[],0,0,0,0,0,Ts,0,BO,[],0,0,0,0,0,AKz,0,C,[],4,3,0,0,0,WU,0,De,[],0,0,0,0,0,IO,0,C,[],3,3,0,0,0,Bm,"Vector2",17,C,[B6,IO],0,3,0,0,0,SF,0,BO,[],0,0,0,0,0,FF,0,BO,[],0,3,0,0,0,AIF,0,C,[],0,3,0,0,0,TA,0,BO,[],0,0,0,0,0,Nf,0,FF,[],0,3,0,0,0,AEk,0,C,[Bw],0,3,0,0,0,Ha,0,BI,[],12,3,0,0,0,R7,0,C,[],0,3,0,RB,0,GH,0,BO,[],0,3,0,0,0,Ro,0,GH,[],0,3,0,0,0,SB,0,BO,[],0,0,0,0,0,Ss,0,C,[B6],4,3,0,0,0,Tr,0,BO,[],
0,0,0,0,0,FT,0,C,[B6,IO],0,3,0,0,0,Ow,0,Gm,[],0,3,0,0,0]);
C4([Q2,0,BO,[],0,3,0,0,0,AAV,0,C,[],0,3,0,0,0,ASf,0,C,[F6],0,3,0,0,0,Tw,0,BO,[],0,0,0,0,0,Vb,0,BO,[],0,3,0,0,0,SG,0,BO,[],0,0,0,0,0,Q0,0,Gm,[],0,3,0,0,0,VW,0,C,[B6],0,3,0,PA,0,J_,0,C,[B6],0,3,0,Nu,0,Lv,0,C,[B6],0,3,0,L5,0,ABj,0,C,[B6],0,3,0,0,0,Xw,0,C,[B6],0,3,0,0,0,ALW,0,C,[B6,F6],0,3,0,0,0,AFl,0,C,[I8],0,3,0,0,0,S6,0,C,[],4,3,0,Gn,0,Uz,0,C,[],4,3,0,Qj,0,YY,0,C,[],4,3,0,0,0,Qm,0,GH,[],0,3,0,0,0,Lg,0,C,[B6],0,3,0,D6,0,Pi,0,C,[],3,3,0,0,0,L6,0,C,[Pi,B6],0,3,0,0,0,Sv,0,L6,[],0,3,0,0,0,SE,0,BO,[],0,0,0,0,0,Tx,
0,BO,[],0,0,0,0,0,MF,0,C,[],0,3,0,IG,0,Ec,0,C,[B6],0,3,0,0,0,NO,0,C,[],0,3,0,0,0,AJZ,0,C,[],0,3,0,0,0,Bi,0,C,[B6,IO],0,3,0,CO,0,AEn,0,C,[B6,F6],0,3,0,0,0,ACo,0,De,[],0,0,0,0,0,LE,0,FF,[],0,3,0,0,0,AKw,0,C,[I8],0,3,0,0,0,Zo,0,C,[],0,3,0,0,0,AOI,0,C,[B6],0,3,0,0,0,Jo,0,C,[B6],0,3,0,0,0,SD,0,BO,[],0,0,0,0,0,AOM,0,C,[],0,3,0,0,0,Zx,0,C,[],0,3,0,0,0,ALL,0,C,[],0,3,0,0,0,AOG,0,C,[B6],0,3,0,0,0,AJk,0,C,[],3,3,0,0,0,AEA,0,C,[B6],0,3,0,0,0,AMB,0,C,[],0,0,0,0,0,J3,0,C,[Bw],0,3,0,L2,0,Js,0,C,[],0,3,0,0,["b9",BR(OO)],Fx,
0,Js,[],0,3,0,0,["b9",BR(AOb)],Qy,0,C,[CU],0,3,0,0,0,ALr,0,C,[],0,3,0,0,0,BH,"Color",15,C,[],0,3,0,0,0]);
C4([Ns,0,C,[CU],1,3,0,0,0,FE,0,Ns,[],0,3,0,0,["T",P(AJl)],Bt,"Array",8,C,[Dy],0,3,0,0,["cL",N(RK),"T",P(UV)],JH,0,C,[Dy],0,3,0,0,0,AE6,0,JH,[],0,3,0,0,0,ARr,0,C,[Dy],0,3,0,0,0,DN,0,C,[],4,3,0,0,["cL",N(AJu)],ARJ,0,C,[],0,3,0,0,0,AGB,0,C,[],0,3,0,0,0,AJW,0,C,[],0,3,0,0,0,AH1,0,C,[],0,3,0,0,0,Q_,0,C,[],0,3,0,Sq,0,XR,0,C,[],0,3,0,0,0,AIQ,0,C,[],0,3,0,0,0,AHE,0,C,[],0,3,0,0,0,AIn,0,C,[],0,3,0,0,0,AOi,0,C,[],0,3,0,0,0,AEv,0,C,[],0,3,0,0,0,APO,0,C,[],0,3,0,0,0,AGc,0,C,[],0,3,0,0,0,ZG,0,C,[],0,3,0,0,0,AA1,0,C,[],0,
3,0,0,0,Jn,0,BI,[],12,3,0,0,0,AIV,0,C,[],0,3,0,0,0,Tb,0,C,[],3,3,0,0,0,Ds,0,C,[],0,3,0,0,0,X1,0,Ds,[],0,3,0,0,0,X0,0,Ds,[],0,3,0,0,0,AG8,0,Ds,[],0,3,0,0,0,ACg,0,Ds,[],0,3,0,0,0,ALY,0,Ds,[],0,3,0,0,0,Lz,0,Ds,[],0,3,0,0,0,AB6,0,Lz,[],0,3,0,0,0,Hn,0,C,[],3,3,0,0,0,ADd,0,C,[CU,Hn],0,3,0,0,0,E6,0,C,[],3,3,0,0,0,ALK,0,C,[E6,Hn],0,3,0,0,0,APK,0,C,[E6],0,3,0,0,0,AAs,0,C,[],0,3,0,0,0,Ev,0,C,[E6],0,3,0,0,0,AKF,0,Ev,[],0,3,0,0,0,Hg,0,Ev,[Hn,E6],1,3,0,0,0,DG,0,Hg,[],1,3,0,Qx,0,ALq,0,C,[],0,3,0,0,0,AOg,0,DG,[],4,3,0,0,0,AGq,
0,DG,[],4,3,0,0,0,AQy,0,Ev,[],0,3,0,0,0,K1,0,Ev,[],0,3,0,0,0,XK,0,K1,[],0,3,0,0,0,AB2,0,DG,[],4,3,0,0,0]);
C4([GQ,0,Hg,[],1,3,0,0,0,AHV,0,GQ,[],4,3,0,0,0,AGn,0,DG,[],4,3,0,0,0,AIq,0,DG,[],4,3,0,0,0,AHU,0,GQ,[],4,3,0,0,0,He,0,BI,[],12,3,0,0,0,FI,0,C,[CU,E6,Hn],1,3,0,0,0,Mw,0,FI,[E6],1,3,0,0,0,Wm,0,Mw,[E6],0,3,0,0,0,Hw,0,BI,[],12,3,0,0,0,CV,0,FI,[],1,3,0,0,0,HT,0,CV,[],1,3,0,0,0,AAf,0,C,[],0,3,0,0,0,Gt,0,CV,[],1,3,0,T0,0,Ej,0,Gt,[],1,3,0,0,0,FN,0,Ej,[],1,3,0,0,0,AC_,0,FN,[],0,3,0,0,0,Hs,0,CV,[],1,3,0,0,0,ASm,0,Hs,[],0,3,0,0,0,AOd,0,CV,[],0,3,0,0,0,Fj,0,CV,[],1,3,0,0,0,XU,0,Fj,[],0,3,0,0,0,G2,0,CV,[],1,3,0,0,0,AC3,
0,Ej,[],0,3,0,0,0,AFh,0,Ej,[],0,3,0,0,0,Ko,0,CV,[],1,3,0,0,0,AKG,0,Ko,[],0,3,0,0,0,Zb,0,Fj,[],0,3,0,0,0,AGz,0,FN,[],0,3,0,0,0,AKx,0,CV,[],0,3,0,0,0,AIA,0,Fj,[],0,3,0,0,0,AKN,0,CV,[],0,3,0,0,0,AMv,0,Gt,[],0,3,0,0,0,AFo,0,De,[],0,0,0,0,0,ZR,0,De,[],0,0,0,0,0,Z8,0,Ej,[],0,3,0,0,0,ALe,0,G2,[],0,3,0,0,0,AQA,0,HT,[],0,3,0,0,0,AJv,0,HT,[],0,3,0,0,0,AMf,0,G2,[],0,3,0,0,0,AHs,0,FN,[],0,3,0,0,0,ARg,0,Hs,[],0,3,0,0,0,Et,0,FI,[],1,3,0,0,0,AH0,0,Et,[],0,3,0,0,0,Fp,0,C,[],1,3,0,0,0,ALE,0,Fp,[],0,3,0,0,0,AMY,0,Et,[],0,3,0,
0,0,AOc,0,Et,[],0,3,0,0,0,APc,0,Fp,[],0,3,0,0,0,ACK,0,Et,[],0,3,0,0,0]);
C4([AOj,0,Fp,[],0,3,0,0,0,J0,0,C,[],3,3,0,0,0,NE,0,C,[],3,3,0,0,0,BF,"Class",25,C,[J0,NE],0,3,0,0,["T",P(AHS)],AA9,0,C,[],4,0,0,0,0,ZX,0,C,[],4,3,0,0,0,DJ,0,C,[],0,3,0,0,["c3",P(ANa)],BD,0,DJ,[],0,3,0,0,0,Bx,"RuntimeException",25,BD,[],0,3,0,0,0,AGi,"ClassCastException",25,Bx,[],0,3,0,0,0,Jx,0,C,[],3,3,0,0,0,H,"String",25,C,[B6,Dh,Jx],0,3,0,0,["T",P(Cg),"cL",N(AP0),"cS",P(AKc)],Ei,0,C,[B6],1,3,0,0,0,Fh,0,Ei,[Dh],0,3,0,0,0,Ba,0,C,[B6,Jx],0,0,0,0,["c8",N(Ib),"T",P(LZ)],Iz,0,C,[],3,3,0,0,0,J,0,Ba,[Iz],0,3,0,0,
["gy",BR(AGY),"i9",Bc(AB5),"T",P(EK),"c8",N(AHk),"dc",Bp(AH8)],QO,0,C,[],0,3,0,0,0,Pu,0,C,[],3,3,0,0,0,Lp,0,C,[Pu,Go],0,3,0,0,0,Vh,0,C,[],3,3,0,0,0,L_,0,C,[Vh],1,3,0,0,0,Pw,0,L_,[],0,3,0,0,0,AM9,0,C,[],4,3,0,0,0,HM,0,BI,[],12,3,0,0,0,N3,0,C,[],3,3,0,0,0,Cq,0,C,[],3,3,0,0,0,Q$,0,C,[Cq],3,3,0,0,0,I1,0,C,[N3,Q$],0,3,0,EQ,["i$",N(AK$)],AKQ,0,C,[],0,3,0,0,0,QC,0,C,[],0,3,0,Cz,0,M_,0,Ei,[Dh],0,3,0,0,0,Gv,0,C,[],0,3,0,0,0,AFr,0,C,[],4,3,0,0,0,DE,"GlyphLayout$GlyphRun",16,C,[Bw],0,3,0,0,0,Fy,0,C,[],0,3,0,0,0,LR,0,C,
[],3,3,0,0,0,Kw,0,C,[LR],1,3,0,0,0,E2,0,C,[],3,3,0,0,0,IH,0,Kw,[E2,B6],0,3,0,0,0,HV,"Comparator",21,C,[],3,3,0,0,0,Ni,0,C,[HV],0,3,0,0,0,Mo,0,C,[Dh],0,3,0,0,0,ABS,0,C,[],0,3,0,0,0,ALl,0,C,[],4,3,0,0,0,Nw,0,C,[],3,3,0,0,0,Oz,0,C,[Nw],0,3,0,0,0,ABe,0,C,[],0,3,0,0,0,AD6,0,C,[],0,3,0,0,0,S0,0,C,[],3,3,0,0,0]);
C4([Ke,0,C,[S0],0,3,0,Ep,0,NX,0,C,[],0,3,0,0,0,Dz,0,C,[],0,3,0,0,["g4",N(AIE)],SJ,0,C,[],3,3,0,0,0,Ef,0,C,[Cq],3,3,0,0,0,LT,0,C,[SJ,Ef],0,3,0,0,["i_",N(XP)],R3,0,C,[],3,3,0,0,0,TU,0,C,[R3],0,3,0,0,0,S$,0,C,[Tb],0,3,0,0,0,S1,0,C,[],3,3,0,0,0,QL,0,C,[S1],0,3,0,0,0,Pd,0,C,[],3,3,0,0,0,S5,0,C,[Pd],0,3,0,0,0,AJC,0,C,[],0,3,0,0,0,TY,0,C,[],3,3,0,0,0,S_,0,C,[TY],3,3,0,0,0,P$,0,C,[S_],0,3,0,0,0,JS,0,C,[Ef],0,0,0,0,["i_",N(AL4)],JT,0,C,[Ef],0,0,0,0,["i_",N(AQV)],Bn,"IllegalArgumentException",25,Bx,[],0,3,0,0,0,AOV,0,
C,[],4,3,0,0,0,Zd,0,C,[Dy],0,3,0,0,0,AHp,0,Ei,[Dh],0,3,0,0,0,AGX,0,C,[Cq],1,3,0,0,0,LK,0,C,[],3,3,0,0,0,GI,"TeaGL20",5,C,[LK],0,3,0,0,["h9",Bp(AEF),"ii",Bp(AQN),"cy",Bp(AAh),"hg",BR(ADN),"eC",BR(KW),"eD",BR(KV),"dE",N(AOr),"dD",BR(AAv),"h7",N(AFI),"h3",P(ARx),"h5",N(ALa),"ha",N(AOs),"bb",N(AKT),"il",N(AJo),"hM",Bc(AA7),"hN",BR(AGx),"hR",BR(AIU),"W",N(AQp),"ij",N(AO$),"iW",N(Ws),"eE",BR(J8),"eF",BR(LB),"ic",Bp(ACz),"cj",Bp(IY),"g_",N(ARo),"eG",Bc(L4),"h8",N(AHf),"eH",Bc(KB),"dX",N(ADt),"h_",Bp(ADn),"h$",N(YN),
"cu",Bp(AA6),"h6",Bp(Wr),"cx",function(b,c,d,e,f,g,h,i,j){Md(this,b,c,d,e,f,g,h,i,j);},"cE",Bc(AH4),"ce",Bc(AKn),"hn",Bp(AKS),"hd",N(YP),"ik",function(b,c,d,e,f,g){AHG(this,b,c,d,e,f,g);},"dC",BR(WR)],R2,0,C,[LK],3,3,0,0,0,JD,"TeaGL30",5,GI,[R2],0,3,0,0,["iq",N(AEb),"hO",BR(AJf),"hQ",function(b,c,d,e,f){AR9(this,b,c,d,e,f);},"io",Bp(AJS),"cj",Bp(AGF)],OA,"TeaGL30Debug",5,JD,[],0,3,0,0,["iq",N(ACH),"hO",BR(Zv),"hQ",function(b,c,d,e,f){AQF(this,b,c,d,e,f);},"io",Bp(YB),"cy",Bp(Zn),"dE",N(AOw),"dD",BR(AH9),"ha",
N(Yy),"bb",N(APb),"hM",Bc(ABX),"hN",BR(ALn),"W",N(AM2),"dX",N(Wc),"cu",Bp(Xp),"cx",function(b,c,d,e,f,g,h,i,j){AIC(this,b,c,d,e,f,g,h,i,j);},"cE",Bc(ABF),"dC",BR(AD2),"h9",Bp(AHl),"ii",Bp(AP2),"hg",BR(ACJ),"eC",BR(AIi),"eD",BR(APT),"h7",N(AJJ),"h3",P(ARw),"h5",N(ALH),"il",N(ARl),"hR",BR(Y4),"ij",N(ALN),"iW",N(AOC),"eE",BR(AFp),"eF",BR(AOt),"ic",Bp(AI1),"cj",Bp(ACS),"eG",Bc(AAy),"g_",N(Xn),"eH",Bc(ARu),"h8",N(Yg),"h_",Bp(Xq),"h$",N(AQv),"h6",Bp(Xl),"ce",Bc(YM),"hn",Bp(ZQ),"hd",N(ASc),"ik",function(b,c,d,e,f,
g){AMz(this,b,c,d,e,f,g);}],P1,0,C,[],0,3,0,0,0,EJ,0,BI,[],12,3,0,0,0,Ti,0,C,[Cq],3,3,0,0,0,Mi,0,C,[Ti],0,0,0,0,["ja",P(ABO)],Ve,"TeaGL20Debug",5,GI,[],0,3,0,0,["cy",Bp(AQ3),"dE",N(AAF),"dD",BR(ABD),"ha",N(AIh),"bb",N(ARN),"hM",Bc(AFG),"hN",BR(ARd),"W",N(Y7),"dX",N(AG3),"cu",Bp(AJO),"cx",function(b,c,d,e,f,g,h,i,j){ACT(this,b,c,d,e,f,g,h,i,j);},"cE",Bc(ACa),"dC",BR(ARp),"h9",Bp(Xi),"ii",Bp(V_),"hg",BR(V9),"eC",BR(AGw),"eD",BR(AEe),"h7",N(ARZ),"h3",P(AKh),"h5",N(ARC),"il",N(AKb),"hR",BR(AEw),"ij",N(ARO),"iW",
N(AJb),"eE",BR(AGA),"eF",BR(Zt),"ic",Bp(AEG),"cj",Bp(WW),"eG",Bc(ACZ),"g_",N(AC6),"eH",Bc(Xy),"h8",N(AMG),"h_",Bp(AOU),"h$",N(AHN),"h6",Bp(ARb),"ce",Bc(AOL),"hn",Bp(ARv),"hd",N(XA),"ik",function(b,c,d,e,f,g){AAm(this,b,c,d,e,f,g);}],To,0,C,[Dy],0,3,0,0,0,RE,0,C,[],0,3,0,0,0,Uc,0,C,[Cq],3,3,0,0,0,LN,0,C,[Uc],0,0,0,0,["jb",P(Xb),"jc",P(ABi),"jd",P(WN)],Vx,0,C,[],3,3,0,0,0,VF,0,C,[Vx],0,3,0,0,0,NY,0,Dz,[],0,0,0,0,0,T9,"CloneNotSupportedException",25,BD,[],0,3,0,0,0,Cy,0,De,[],0,3,0,0,0,I,"IndexOutOfBoundsException",
25,Bx,[],0,3,0,0,0,EU,0,C,[Cq],3,3,0,0,0,PC,0,C,[EU],3,3,0,0,0,Rf,0,C,[EU],3,3,0,0,0,Q5,0,C,[EU],3,3,0,0,0,SC,0,C,[EU],3,3,0,0,0,Vu,0,C,[EU],3,3,0,0,0]);
C4([Tz,0,C,[EU,PC,Rf,Q5,SC,Vu],3,3,0,0,0,Pg,0,C,[],3,3,0,0,0,Ky,0,C,[Cq],3,3,0,0,0,Ok,0,C,[Cq,Tz,Pg,Ky],1,3,0,0,["je",N(AKI),"jf",Bp(AOa),"jg",Bp(ANq),"jh",Bc(AKu),"ji",N(AQg),"jj",P(AAn),"jk",Bc(WM)],Ln,0,C,[],1,3,0,0,0,Jt,0,Ln,[LR,E2,B6],0,3,0,0,0,Mv,0,Jt,[],0,3,0,0,0,AEU,0,C,[],0,3,0,0,0,Gs,0,BI,[],12,3,0,0,0,DA,0,C,[Cq],1,3,0,0,0,AB$,0,DA,[],1,3,0,0,0,ABk,0,DA,[],1,3,0,0,0,AGG,0,DA,[],1,3,0,0,0,AJL,0,DA,[],1,3,0,0,0,AFc,0,DA,[],1,3,0,0,0,K6,0,C,[Ef],0,0,0,0,["i_",N(AF$)],K7,0,C,[Ef],0,0,0,0,["i_",N(ARe)],K5,
0,C,[Ef],0,0,0,0,["i_",N(ALz)],RM,0,De,[],0,3,0,0,0,Ul,0,C,[Cq],3,3,0,0,0,J2,0,C,[Ul],0,0,0,0,["jl",P(ACs)],AA5,0,DA,[],1,3,0,0,0,QZ,0,C,[B6],4,3,0,0,0,M0,0,C,[],3,3,0,0,0,R4,0,C,[M0],4,3,0,0,0,ZC,0,C,[],4,3,0,0,0,Ku,0,C,[],4,3,0,0,0,B5,"ReflectionException",9,BD,[],0,3,0,0,0,Ew,0,C,[],4,3,0,BC,0,QD,0,C,[],3,3,0,0,0,JZ,0,C,[QD],0,0,0,0,0,HC,"Iterator",21,C,[],3,3,0,0,0,JY,0,C,[HC],0,0,0,0,0,TM,0,C,[M0],0,0,0,0,0,Cs,"NumberFormatException",25,Bn,[],0,3,0,0,0,Km,0,Bx,[],0,3,0,0,0,Ek,0,BD,[],0,3,0,0,0,G8,"NoSuchMethodException",
25,Ek,[],0,3,0,0,0,Db,"NullPointerException",25,Bx,[],0,3,0,0,0,Ca,0,C,[],1,0,0,0,["fC",Bc(ABJ),"f6",BR(AEx),"fp",P(ZP),"T",P(AMT),"e$",N(APr),"fo",N(APp),"fM",P(AQ5),"e6",P(H2)],Mr,0,C,[J0],0,3,0,0,0,AQP,0,C,[Cq],1,3,0,0,0,ADF,0,C,[Cq],1,3,0,0,0,ASw,0,C,[Cq],1,3,0,0,0,KC,0,C,[Cq],3,3,0,0,0,LX,0,C,[KC],0,3,0,0,["jm",N(APz)],AE$,0,C,[Cq],1,3,0,0,0,LW,0,C,[KC],0,3,0,0,["jm",N(Ym)],NA,0,C,[],3,3,0,0,0,Hi,0,C,[NA,E2],0,0,0,0,0]);
C4([Io,0,Hi,[],0,0,0,0,0,Dm,0,Ca,[],0,0,0,DQ,["fK",Bc(YL),"fL",P(AE5),"gk",N(Zq)],SQ,0,C,[],0,0,0,0,0,Cf,"PatternSyntaxException",22,Bn,[],0,3,0,0,["c3",P(AQX)],YT,0,C,[],0,3,0,0,0,Kl,0,C,[Dy],3,3,0,0,0,LI,0,C,[Kl],1,3,0,0,0,RA,0,C,[Kl],3,3,0,0,0,NW,0,C,[RA],3,3,0,0,0,Kn,0,LI,[NW],1,3,0,0,0,S7,0,C,[],3,3,0,0,0,Kk,0,Kn,[E2,B6,S7],0,3,0,0,0,Rw,0,Dm,[],0,0,0,0,["fK",Bc(Xx),"fL",P(ABm),"gk",N(ANk)],VG,0,Dm,[],0,0,0,0,["fK",Bc(AAX),"fL",P(AGj)],PU,0,Dm,[],0,0,0,0,["fK",Bc(ZM),"fL",P(APi)],Sd,0,Dm,[],0,0,0,0,["fK",
Bc(XW),"fL",P(ANW),"gk",N(ALb)],Gl,0,Dm,[],0,0,0,0,["fK",Bc(APU),"fL",P(Z6)],Cv,0,Ca,[],1,0,0,0,["fK",Bc(AR0),"f3",P(AOy),"gk",N(AGa)],E3,0,Cv,[],0,0,0,0,["f4",Bp(ANI),"fC",Bc(AC5),"f6",BR(AAE),"fL",P(AE7),"gk",N(XO)],Cj,0,Ca,[],0,0,0,0,["fK",Bc(AEz),"e$",N(AK5),"fL",P(AGt),"fo",N(AHL),"gk",N(AL$),"e6",P(AAw)],JB,0,Cj,[],0,0,0,0,["fK",Bc(AKE),"fL",P(AHY),"gk",N(AML)],Eb,0,JB,[],0,0,0,0,["fK",Bc(ABR),"e$",N(AMh),"fL",P(XI)],NK,0,Eb,[],0,0,0,0,["fK",Bc(AKV),"gk",N(APu),"fL",P(AQ1)],UF,0,Eb,[],0,0,0,0,["fK",Bc(Zf),
"gk",N(AOO),"fL",P(AEj)],Q3,0,Eb,[],0,0,0,0,["fK",Bc(AAo),"gk",N(ASy),"fL",P(AKa)],SA,0,Eb,[],0,0,0,0,["fK",Bc(WI),"gk",N(AM4),"fL",P(ZN)],F$,0,Cj,[],0,0,0,0,["fK",Bc(Xd),"fC",Bc(AH$),"f6",BR(ANr),"fo",N(AHB),"fM",P(AK7),"e6",P(ARc)],AJt,0,C,[],4,3,0,0,0,Jp,"ArrayStoreException",25,Bx,[],0,3,0,0,0,HA,0,C,[],1,0,0,0,0,Bk,0,HA,[],1,0,0,0,["ge",P(Zi),"f9",P(Yf),"fz",P(AOn),"fy",P(AQZ)],JW,"MissingResourceException",21,Bx,[],0,3,0,0,0,CD,0,Bk,[],0,0,0,0,["gh",N(AAK),"ge",P(ASt),"f9",P(ACP),"fz",P(APg),"T",P(AJD),
"fy",P(ADg)],Eq,0,Ca,[],1,0,0,0,["fo",N(ANt),"gk",N(APP),"e6",P(AIN)],Dv,0,Eq,[],0,0,0,0,["fK",Bc(WK),"fL",P(AAt)],Fa,0,Dv,[],0,0,0,0,["fK",Bc(YO),"fL",P(Zm)],Dx,0,Eq,[],0,0,0,0,["fK",Bc(Xa),"fL",P(AFE)],E$,0,Dv,[],0,0,0,0,["fK",Bc(AIf),"e$",N(ASB)],UT,0,Dv,[],0,0,0,0,["fK",Bc(ARK),"fC",Bc(AJs)],M1,0,C,[],4,0,0,0,0,Bu,0,C,[],1,0,0,0,0,N7,0,HA,[E2],0,0,0,0,["T",P(L9)],OM,0,Ca,[],0,0,0,0,["fK",Bc(AGP),"fL",P(AKR),"gk",N(AK4)],Bh,0,C,[E2,B6],0,3,0,0,0,NQ,0,Cj,[],0,0,0,0,["fL",P(ALd)],G7,0,Cj,[],0,0,0,0,["fK",Bc(YD),
"e$",N(AKB),"fL",P(ALF),"gk",N(ZU),"fo",N(Zh)],DH,0,Cj,[],0,0,0,0,["fK",Bc(ACD),"fL",P(AQO),"gh",N(ADy),"fo",N(Yt),"e$",N(AOe),"gk",N(ACV)],JQ,0,DH,[],0,0,0,0,["gh",N(AGb),"fL",P(ARj)],Kr,0,Cv,[],0,0,0,0,["f4",Bp(AGS),"fL",P(ZA)],D3,0,Cv,[],0,0,0,0,["f4",Bp(V$),"fL",P(AG$),"fo",N(AK6)]]);
C4([Ig,0,Cj,[],0,0,0,0,["e$",N(AIe),"fL",P(AM6),"fK",Bc(Wv),"fo",N(ZI),"gk",N(APk)],D0,0,Cv,[],0,0,0,0,["f3",P(AGu),"f4",Bp(AER),"fC",Bc(ACx),"f6",BR(AGE),"fL",P(APD),"fo",N(AO_)],M6,0,Cv,[],0,0,0,0,["f4",Bp(Wh),"fL",P(AKy)],JN,0,Cv,[],0,0,0,0,["f4",Bp(W3),"fL",P(AFd)],Ff,0,Cj,[],0,0,0,0,["e$",N(AQ9),"fK",Bc(AKC),"fL",P(AKi),"fo",N(AGU),"gk",N(AMk)],Vy,0,Ff,[],0,0,0,0,0,SZ,0,Ff,[],0,0,0,0,0,V2,0,Dx,[],0,0,0,0,["fK",Bc(AA4)],PP,0,Dx,[],0,0,0,0,["fK",Bc(AJd)],GG,0,Dx,[],0,0,0,0,["fK",Bc(AN9),"e$",N(AP4)],Pz,0,
GG,[],0,0,0,0,["fK",Bc(AGC),"e$",N(AJP)],F1,0,Dx,[],0,0,0,0,["fK",Bc(ASo),"fL",P(AQc)],N$,0,F1,[],0,0,0,0,["fK",Bc(AFF)],Rm,0,Dx,[],0,0,0,0,["fK",Bc(ARn)],Qw,0,GG,[],0,0,0,0,["fK",Bc(ZW)],TD,0,F1,[],0,0,0,0,["fK",Bc(X5)],Rn,0,Eq,[],0,0,0,0,["fK",Bc(AR3),"fC",Bc(AOp),"fL",P(ALM)],OV,0,Eq,[],0,0,0,0,["fK",Bc(AK8),"fC",Bc(WD),"fL",P(ANd)],Ho,0,C,[],1,0,0,0,0,V4,0,Dv,[],0,0,0,0,["fK",Bc(X$)],UO,0,E$,[],0,0,0,0,["fK",Bc(AI8)],Pq,0,Fa,[],0,0,0,0,["fK",Bc(ANv)],Qo,0,Dv,[],0,0,0,0,["fK",Bc(AKY)],S2,0,E$,[],0,0,0,0,
["fK",Bc(Yk)],Q4,0,Fa,[],0,0,0,0,["fK",Bc(ANO)],Lm,0,Ca,[],4,0,0,0,["fK",Bc(AHF),"gk",N(AFV),"fL",P(AI9)],KO,0,Ca,[],0,0,0,0,["fK",Bc(Ze),"gk",N(ZD),"fL",P(ASj)],OP,0,Ca,[],0,0,0,0,["fK",Bc(AGh),"gk",N(ASg),"fL",P(YX)],M4,0,Ca,[],4,0,0,0,["fK",Bc(ALZ),"gk",N(AAP),"fL",P(AIl)],U3,0,Ca,[],0,0,0,0,["fK",Bc(AKq),"gk",N(We),"fL",P(AEy)],Og,0,Ca,[],0,0,0,0,["fK",Bc(AAu),"gk",N(AD5),"fL",P(Yx)],UZ,0,Cj,[],0,0,0,0,["fK",Bc(ARs),"fL",P(ABZ),"e$",N(ZL),"fp",P(AJX),"gk",N(ZJ)],Pk,0,Cj,[],4,0,0,0,["fK",Bc(AKk),"fL",P(AA2),
"e$",N(ANb),"fp",P(V5),"gk",N(ARX)],UP,0,Ca,[],4,0,0,0,["fK",Bc(AG6),"gk",N(ADG),"fL",P(AHR)],Sg,0,Ca,[],0,0,0,0,["fK",Bc(AKo),"gk",N(ADs),"fL",P(XD)],NH,0,Ca,[],0,0,0,0,["fK",Bc(AFM),"gk",N(AAU),"fL",P(AD9)],Gx,0,Cj,[],0,0,0,0,["fK",Bc(Yc),"e$",N(AMe),"fL",P(XL),"gk",N(AMM)],UX,0,Gx,[],0,0,0,0,["fK",Bc(AA3),"fC",Bc(APs),"f6",BR(XF),"fo",N(AIX),"fL",P(APZ)],QX,0,Gx,[],0,0,0,0,["fK",Bc(AH3),"fL",P(ZE)],OL,0,Ba,[Iz],0,3,0,0,["gy",BR(ADi),"i9",Bc(Zl),"c8",N(Z5),"dc",Bp(AOu)],Rs,0,Cv,[],0,0,0,0,["f4",Bp(ABH),"fC",
Bc(Y8),"f6",BR(ADY),"fL",P(AKK),"fo",N(AE4)],NF,0,Cv,[],0,0,0,0,["f4",Bp(AIb),"fL",P(AFe)],Oc,0,Cv,[],0,0,0,0,["f4",Bp(ANx),"fL",P(APf)],ASC,0,C,[],4,3,0,0,0,ND,0,Cv,[],0,0,0,0,["f4",Bp(ANB),"fL",P(ASh)],Hq,0,Cj,[],0,0,0,0,["e$",N(AKU),"fK",Bc(Kz),"fC",Bc(AEY),"f6",BR(ABW),"fL",P(AOH),"fo",N(Xt),"gk",N(AOW)],Hy,0,Cj,[],0,0,0,0,["e$",N(Z2),"fK",Bc(JO),"fC",Bc(ALu),"f6",BR(ANw),"fL",P(ARq),"fo",N(ABL),"gk",N(ALG)],Eh,0,Cv,[],0,0,0,0,["f4",Bp(AMN),"fC",Bc(AJI),"f6",BR(Z0),"fL",P(AP5),"fo",N(AMq)],Ja,0,Ho,[],0,
0,0,0,["gA",N(AAc),"gC",Bp(AMA)],Jb,0,Ho,[],0,0,0,0,["gA",N(ANR),"gC",Bp(AQT)]]);
C4([TC,0,C,[],0,0,0,0,0,IW,0,Bu,[],0,0,0,0,["fT",P(AFq)],In,0,Bu,[],0,0,0,0,["fT",P(AH5)],Tn,0,Bu,[],0,0,0,0,["fT",P(ANh)],T2,0,Bu,[],0,0,0,0,["fT",P(AOX)],T7,0,Bu,[],0,0,0,0,["fT",P(ACE)],IQ,0,Bu,[],0,0,0,0,["fT",P(AAJ)],I9,0,IQ,[],0,0,0,0,["fT",P(ADA)],VV,0,Bu,[],0,0,0,0,["fT",P(AEX)],JJ,0,I9,[],0,0,0,0,["fT",P(Wl)],Rp,0,JJ,[],0,0,0,0,["fT",P(AIP)],RR,0,Bu,[],0,0,0,0,["fT",P(ABz)],PL,0,Bu,[],0,0,0,0,["fT",P(AIH)],Px,0,Bu,[],0,0,0,0,["fT",P(AQY)],T_,0,Bu,[],0,0,0,0,["fT",P(AJU)],V3,0,Bu,[],0,0,0,0,["fT",P(Wx)],TB,
0,Bu,[],0,0,0,0,["fT",P(AFQ)],Te,0,Bu,[],0,0,0,0,["fT",P(AMR)],UE,0,Bu,[],0,0,0,0,["fT",P(ABw)],Ox,0,Bu,[],0,0,0,0,["fT",P(AB7)],N8,0,Bu,[],0,0,0,0,["fT",P(AQK)],TI,0,Bu,[],0,0,0,0,["fT",P(Wi)],TW,0,Bu,[],0,0,0,0,["fT",P(AHi)],P8,0,Bu,[],0,0,0,0,["fT",P(ACj)],RW,0,Bu,[],0,0,0,0,["fT",P(AD$)],Vz,0,Bu,[],0,0,0,0,["fT",P(AHn)],TT,0,Bu,[],0,0,0,0,["fT",P(APm)],QQ,0,Bu,[],0,0,0,0,["fT",P(ALR)],P7,0,Bu,[],0,0,0,0,["fT",P(AJK)],VZ,0,Bu,[],0,0,0,0,["fT",P(AM8)],H9,0,Bu,[],0,0,0,0,["fT",P(AHK)],UK,0,H9,[],0,0,0,0,["fT",
P(AJi)],Rt,0,IW,[],0,0,0,0,["fT",P(Y5)],P2,0,In,[],0,0,0,0,["fT",P(AEM)],Bq,0,Bu,[],0,0,0,0,["fT",P(AHO)],PX,0,Bu,[],0,0,0,0,["fT",P(AQw)],Lq,0,Bu,[],0,0,0,0,["fT",P(ADm)],Lw,0,Bu,[],0,0,0,0,["fT",P(Wj)],DS,"NegativeArraySizeException",25,Bx,[],0,3,0,0,0,XZ,0,C,[],0,0,0,0,0,ABM,0,C,[],4,0,0,0,0,ZV,0,C,[],4,3,0,0,0,Ue,0,C,[],0,3,0,0,0,H8,0,C,[],0,3,0,0,0,ME,0,C,[],0,3,0,0,0,AET,0,C,[],4,3,0,0,0,ANi,0,C,[],4,3,0,0,0,Qh,0,Dz,[],0,0,0,0,["g4",N(AOq),"iY",N(ACn),"iX",Bp(AJw)],CJ,0,BI,[],9,3,0,Ih,0,Fv,0,Hi,[],0,0,
0,0,0]);
C4([ARS,0,C,[],3,3,0,0,0,Tp,0,C,[Cq],3,3,0,0,0,PV,0,C,[Tp,Cq],1,3,0,0,["jn",Bp(AQD),"jo",N(AJ6),"jp",Bp(Z3),"jq",Bc(AGH),"jr",Bc(AN0)],Me,0,C,[Ef],0,0,0,0,["i_",N(AIk)],Fe,0,BI,[],12,3,0,0,0,AFK,0,C,[],0,3,0,0,0,Rh,0,C,[],3,3,0,0,0,Hl,0,Mr,[Rh],0,3,0,0,["T",P(YG)],V,"StringIndexOutOfBoundsException",25,I,[],0,3,0,0,0,UR,0,Bk,[],0,0,0,0,["gh",N(ACN)],UQ,0,Bk,[],0,0,0,0,["gh",N(W9)],O0,0,Bk,[],0,0,0,0,["gh",N(AHx),"T",P(AEq)],O7,0,Bk,[],0,0,0,0,["gh",N(AMP)],O4,0,Bk,[],0,0,0,0,["gh",N(ANA)],O5,0,Bk,[],0,0,0,0,
["gh",N(AIa)],O_,0,Bk,[],0,0,0,0,["gh",N(AB_)],Pa,0,Bk,[],0,0,0,0,["gh",N(V8)],O9,0,Bk,[],0,0,0,0,["gh",N(AEB)],O$,0,Bk,[],0,0,0,0,["gh",N(AIc)],Pb,0,Bk,[],0,0,0,0,["gh",N(APv)],Pc,0,Bk,[],0,0,0,0,["gh",N(ABc)],OZ,0,Bk,[],0,0,0,0,["gh",N(ASD)],Ps,0,Bk,[],0,0,0,0,["gh",N(AEJ)],OX,0,Bk,[],0,0,0,0,["gh",N(AA_)],OY,0,Bk,[],0,0,0,0,["gh",N(ADD)],O3,0,Bk,[],0,0,0,0,["gh",N(AGm)],OW,0,Bk,[],0,0,0,0,["gh",N(AO6)],O1,0,Bk,[],0,0,0,0,["gh",N(Zr)],O2,0,Bk,[],0,0,0,0,["gh",N(ALC)],Ij,0,C,[],0,0,0,0,0,Gk,0,C,[Go],0,3,0,
0,0,BN,"IllegalStateException",25,Bx,[],0,3,0,0,0,Iu,"IllegalMonitorStateException",25,Bx,[],0,3,0,0,0,AMU,0,C,[],0,3,0,0,0,ADH,0,C,[],4,3,0,0,0,Xr,0,C,[Cq],1,3,0,0,0,FW,0,C,[],3,3,0,0,0,VI,0,C,[FW],0,3,0,0,["c2",P(APx)],Ux,0,CJ,[],12,0,0,0,0,Uy,0,CJ,[],12,0,0,0,0,UC,0,CJ,[],12,0,0,0,0,UD,0,CJ,[],12,0,0,0,0,UA,0,CJ,[],12,0,0,0,0,UB,0,CJ,[],12,0,0,0,0,Uv,0,CJ,[],12,0,0,0,0,Uw,0,CJ,[],12,0,0,0,0,Ut,0,CJ,[],12,0,0,0,0,Ob,0,C,[],3,3,0,0,0,RI,0,C,[Ob],0,3,0,0,0,Qu,0,C,[Cq],4,3,0,0,0]);
C4([Rg,0,C,[],3,3,0,0,0,QY,0,C,[Rg],0,0,0,0,["e",N(AGO),"g1",N(ARi)],Sk,0,C,[FW],0,3,0,0,0,N9,0,F$,[],0,0,0,0,["fC",Bc(ADr),"f6",BR(ASn),"fM",P(AAN)],Sl,0,Bk,[],0,0,0,0,["gh",N(APS)],NN,0,Bk,[],0,0,0,0,["gh",N(YZ)],RH,0,Bk,[],0,0,0,0,["gh",N(Yj)],RG,0,Bk,[],0,0,0,0,["gh",N(ADj)],U$,0,Bk,[],0,0,0,0,["gh",N(AF2)],Pl,0,Bk,[],0,0,0,0,["gh",N(APV)],OH,0,Bk,[],0,0,0,0,["gh",N(AKJ)],QH,0,Bk,[],0,0,0,0,["gh",N(AM0)],NJ,0,Bk,[],0,0,0,0,["gh",N(ARR)],NM,0,Bk,[],0,0,0,0,["gh",N(ABT)],OB,0,Bk,[],0,0,0,0,["gh",N(AQo)],PD,
0,Bk,[],0,0,0,0,["gh",N(AID)],PI,0,Bk,[],0,0,0,0,["gh",N(AMc)],SP,0,Bk,[],0,0,0,0,["gh",N(APw)],R5,0,Bk,[],0,0,0,0,["gh",N(ARf)],NZ,0,Bk,[],0,0,0,0,["gh",N(ABy)],Jz,0,Bk,[],0,0,0,0,["gh",N(AKP)],Rx,0,Jz,[],0,0,0,0,["gh",N(AOf)],Yl,0,C,[HC],0,0,0,0,0,GO,0,Gk,[],0,0,0,0,["c2",P(AK2)],N0,0,C,[],32,0,0,Ma,0,UL,0,C,[Cq,EU],1,3,0,0,["js",Bp(AHI),"jt",Bp(AIG),"ju",Bc(WL),"jv",N(WZ),"jw",Bc(AEE)],GR,0,C,[Cq],3,3,0,0,0,JV,0,C,[GR],0,0,0,0,["i_",N(AF_)],AJa,0,C,[],0,3,0,0,0,Ct,"Array$ArrayIterator",8,C,[HC,Dy],0,3,0,
0,0,C2,0,C,[Dy],0,3,0,0,0,H7,0,C,[],4,3,0,0,0,N2,0,C,[Go],0,0,0,0,0,VL,0,C,[],3,3,0,0,0,Sw,0,C,[VL],3,3,0,0,0,Tm,0,C,[],3,3,0,0,0,Hd,0,C,[Sw,Tm],1,3,0,0,0,H_,0,Hd,[],0,3,0,0,0,It,0,H_,[],0,3,0,0,0,G9,0,It,[],1,3,0,0,0,C1,0,G9,[],0,3,0,0,["jx",N(AGo)],GP,0,C,[GR],0,0,0,0,["i_",N(AJ_)],Za,0,C,[],0,0,0,0,0,Cx,0,Hd,[],0,3,0,0,0,J1,0,C,[Dh],1,3,0,0,0,Nm,0,J1,[],0,3,0,0,0,Jc,"IllegalCharsetNameException",24,Bn,[],0,3,0,0,0,KF,0,C,[CU],3,3,0,0,0,HI,0,C,[KF],0,3,0,HG,0,Ra,0,C,[],3,3,0,0,0]);
C4([Ks,0,C,[Ra],1,3,0,0,0,S3,0,Ks,[],0,3,0,0,0,VT,"NoSuchElementException",21,Bx,[],0,3,0,0,0,Q,"GdxRuntimeException",8,Bx,[],0,3,0,0,0,ABP,0,C,[],4,3,0,0,0,D_,0,C,[FW],0,3,0,0,["c2",P(Yz)],AC2,0,C,[],4,3,0,0,0,VC,0,C,[],32,0,0,M3,0,MZ,"ConcurrentModificationException",21,Bx,[],0,3,0,0,0,Nq,0,C,[],1,3,0,0,0,Sf,0,Nq,[],0,3,0,0,0,Tc,"ActorFondo",19,CP,[CU],0,3,0,0,["bO",Bp(ABK)],MG,"ActorValvula",19,CP,[CU],0,3,0,0,["bO",Bp(Xk),"be",N(AC4)],Is,"ActorGas",19,CP,[CU],0,3,0,0,["bO",Bp(ALQ),"be",N(ANn)],Tk,0,BX,[],
0,0,0,0,0,Ft,0,G9,[],0,3,0,0,["jx",N(AD8)],AB3,0,Ei,[Dh],0,3,0,0,0,AK_,0,C,[],0,0,0,0,0,AL2,0,C,[],4,3,0,0,0,Mj,0,C,[],0,3,0,0,0,GF,0,BI,[],12,3,0,0,0,IV,0,C,[CU],0,3,0,0,0,M9,0,C,[],1,3,0,0,0,P3,0,M9,[],0,3,0,0,0,M8,0,C,[],0,3,0,KA,0,MQ,0,C,[],3,3,0,0,0,US,0,C,[],3,3,0,0,0,OJ,0,C,[FW,MQ,US],0,0,0,0,["c2",P(AL3)],OQ,0,C,[Dy,Dh],4,3,0,0,0,LH,0,C,[CU],0,3,0,HX,0,MK,0,Bt,[],0,3,0,0,0,KH,0,Bt,[],0,3,0,0,0,T1,0,C,[],0,3,0,0,0,VX,0,C,[],32,0,0,Mg,0,I2,0,C,[CU],3,3,0,0,0,IF,0,C,[I2],0,3,0,0,["iP",P(AD4),"iQ",P(AMF),
"he",Bc(AKd),"hJ",Bp(ACW),"hS",Bp(YI)],J4,0,C,[CU],3,3,0,0,0,Hk,0,C,[J4],0,3,0,0,["hL",P(AE9),"hP",P(Xs),"g9",Bc(AJN),"hf",N(Yq),"hb",P(AQm),"hT",P(AMX)],Pm,0,C,[I2],0,3,0,0,["iP",P(AAd),"iQ",P(ABn),"he",Bc(Zc),"hJ",Bp(AJy),"hS",Bp(ACX)],RD,0,C,[J4],0,3,0,0,["hL",P(AL7),"hP",P(WB),"g9",Bc(AFP),"hf",N(AO0),"hb",P(AGI),"hT",P(ZS)],K2,0,C,[I2],0,3,0,K8,["iP",P(YW),"iQ",P(AJE),"he",Bc(Y9),"hJ",Bp(AOD),"hS",Bp(AB9)],OE,0,IF,[],0,3,0,0,0,PN,0,Hk,[],0,3,0,0,0,TE,0,C,[Dy],0,3,0,0,0,AMl,0,C,[],4,3,0,0,0,TS,0,C,[CU],
0,3,0,0,0,EA,0,C,[],1,3,0,0,0,D$,0,EA,[Dh],1,3,0,0,["ci",N(ALo),"ch",N(AQQ)],GY,0,EA,[Dh],1,3,0,0,0,GX,0,EA,[Dh],1,3,0,0,0]);
C4([EM,0,EA,[Dh],1,3,0,0,["ci",N(ALf),"ch",N(XG)],G_,0,C,[],4,3,0,0,0,AFC,0,C,[],0,3,0,0,0,D5,0,C,[],3,3,0,0,0,CR,0,EM,[D5],0,0,0,0,["es",P(ASA)],AI2,0,C,[Cq],1,3,0,0,0,Sz,0,C,[],3,3,0,0,0,KI,0,C,[Sz],0,3,0,0,0,Fu,0,C,[CU],0,3,0,Gj,0,Hc,0,GX,[],1,0,0,0,0,F5,0,Hc,[],0,0,0,0,["ip",N(AJ8),"iI",Bp(AHX),"iy",P(Wp)],G4,0,D$,[],1,0,0,0,0,HP,0,G4,[],0,0,0,0,["iJ",N(ALD),"iz",Bp(AKm),"iy",P(AKH)],Jj,0,BI,[],12,3,0,0,0,H3,0,BI,[],12,3,0,0,0,J6,0,C,[],0,3,0,0,0,UH,0,J6,[],0,3,0,0,0,LC,0,C,[CU],0,3,0,0,0,Pv,0,C,[],3,3,
0,0,0,Lh,0,C,[Pv],0,3,0,0,0,HO,0,GY,[],1,0,0,0,0,Jq,0,HO,[],0,0,0,0,["iR",N(ADK),"iA",Bp(AGf),"iy",P(ABu)],AJY,0,C,[Cq],1,3,0,0,0,Er,0,BI,[],12,3,0,0,0,HJ,0,BI,[],12,3,0,0,0,Qf,0,C,[Ky],1,3,0,0,["je",N(AR1),"jy",P(AAl)],HE,0,Hc,[D5],1,0,0,0,["iy",P(AHr)],OD,0,HE,[],0,0,0,0,["ip",N(ADC),"iI",Bp(Wn)],Sr,0,HE,[],0,0,0,0,["ip",N(AOB),"iI",Bp(YJ)],G6,0,G4,[D5],1,0,0,0,["iy",P(AKW),"es",P(AMj)],Ol,0,G6,[],0,0,0,0,["iJ",N(AHA),"iz",Bp(AMd)],QR,0,G6,[],0,0,0,0,["iJ",N(WC),"iz",Bp(AHo)],GV,0,HO,[D5],1,0,0,0,["iy",P(AE2),
"es",P(AMV)],Oa,0,GV,[],0,0,0,0,["iR",N(ABb),"iA",Bp(AAg)],PZ,0,GV,[],0,0,0,0,["iR",N(AJV),"iA",Bp(ABd)],K9,0,Bx,[],0,3,0,0,0,FL,"ReadOnlyBufferException",23,K9,[],0,3,0,0,0,MU,"BufferUnderflowException",23,Bx,[],0,3,0,0,0,FM,0,BI,[],12,3,0,0,0,EC,0,BI,[],12,3,0,0,0,ACq,0,C,[],4,3,0,0,0,IP,0,BI,[],12,0,0,0,0,Dr,0,BI,[],12,3,0,0,0,ALX,0,C,[FW,MQ],3,0,0,0,0,Ii,0,BI,[],12,3,0,0,0,AKZ,0,C,[],0,3,0,0,0,SL,0,C,[],32,0,0,Lf,0,Iy,"BufferOverflowException",23,Bx,[],0,3,0,0,0,T8,0,C,[],0,3,0,Ne,0,ACu,0,C,[],0,3,0,0,0]);
C4([MC,0,C,[GR],0,0,0,0,["i_",N(AFg)],I$,0,BI,[],12,3,0,0,0,Nz,"Predicate",8,C,[],3,3,0,0,0,Mc,"InstantiationException",25,Ek,[],0,3,0,0,0,JM,"IllegalAccessException",25,Ek,[],0,3,0,0,0,Of,0,Ek,[],0,3,0,0,0,GW,0,BI,[],12,3,0,0,0,ADJ,0,C,[],4,3,0,0,0,Hj,0,C,[B6,Dh],0,3,0,0,0,R8,0,C,[],0,3,0,0,0,IM,0,C,[],1,3,0,Nb,0,QK,0,IM,[],0,3,0,0,0,RC,0,C,[Iz,Jx],0,3,0,0,0,Qi,0,Dz,[],0,0,0,0,0,Py,0,C,[],3,3,0,0,0,QP,0,C,[Py],0,3,0,0,0,UM,0,C,[KF],3,3,0,0,0,GZ,0,C,[],0,0,0,MA,["i6",P(ACv),"i2",N(AGT),"hB",P(AG4)],El,0,C,[],
1,0,0,0,0,Hm,0,El,[],1,0,0,0,0,Rk,0,Hm,[],0,0,0,0,0,SS,0,GZ,[],0,0,0,0,["i6",P(AQ2),"hB",P(QM),"i2",N(Wt)],RO,0,Hm,[],0,0,0,0,0,Ri,0,El,[],0,0,0,0,0,Th,0,El,[],0,0,0,0,0,Rb,0,El,[],0,0,0,0,0,LQ,0,C,[],0,3,0,0,0,Qg,0,Dz,[],0,0,0,0,["g4",N(YV),"iY",N(WJ),"iX",Bp(AIm)],N6,0,C,[],32,0,0,MP,0,FO,0,Gk,[],0,0,0,0,["c2",P(Z7)],N4,0,Dz,[],0,0,0,0,["g4",N(Z_),"iY",N(AI6),"iX",Bp(YE)],N5,0,Dz,[],0,0,0,0,["g4",N(ADU),"iY",N(Xj),"iX",Bp(AEI)],Kc,0,C,[GR],0,0,0,0,["i_",N(AQ$)],AQz,0,C,[],0,3,0,0,0,AAD,0,C,[],0,3,0,0,0,KL,
0,C,[Ef],0,0,0,0,["i_",N(ACO)]]);
let AWU=DW(Ch),AWQ=DW(Kj),AWR=DW(AWp),AWS=DW(AWq),AWT=DW(BT),AWP=DW(AIZ),AWV=DW(D9);ATO(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
"Unable to create new instance: ","enabled","disabled","childrenOnly","Actor: ","object cannot be null.","The event target cannot be null.","begin must be called first.","autoShapeType must be enabled.","|  ","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Action","none","all","table","cell","actor","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","texture cannot be null.","This TextureData implementation does not upload data itself",
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
H.prototype.toString=function(){return Bz(this);};
H.prototype.valueOf=H.prototype.toString;C.prototype.toString=function(){return Bz(Pf(this));};
C.prototype.__teavm_class__=function(){return ATy(this);};
AQx.main=AUz(AF1);
AQx.main.javaException=AUb;
let Bo=Symbol('jsoClass');
(function(){var c;c=I1.prototype;c[Bo]=true;c.onAnimationFrame=c.i$;c=LT.prototype;c[Bo]=true;c.handleEvent=c.i_;c=JS.prototype;c[Bo]=true;c.handleEvent=c.i_;c=JT.prototype;c[Bo]=true;c.handleEvent=c.i_;c=Mi.prototype;c[Bo]=true;c.fullscreenChanged=c.ja;c=LN.prototype;c[Bo]=true;c.denied=c.jd;c.prompt=c.jc;c.granted=c.jb;c=Ok.prototype;c.removeEventListener=c.jh;c.dispatchEvent=c.ji;c.get=c.je;c.addEventListener=c.jk;Object.defineProperty(c,"length",{get:c.jj});c=K6.prototype;c[Bo]=true;c.handleEvent=c.i_;c
=K7.prototype;c[Bo]=true;c.handleEvent=c.i_;c=K5.prototype;c[Bo]=true;c.handleEvent=c.i_;c=J2.prototype;c[Bo]=true;c.unlockFunction=c.jl;c=LX.prototype;c[Bo]=true;c.accept=c.jm;c=LW.prototype;c[Bo]=true;c.accept=c.jm;c=PV.prototype;c.removeEventListener=c.jr;c.dispatchEvent=c.jo;c.addEventListener=c.jq;c=Me.prototype;c[Bo]=true;c.handleEvent=c.i_;c=Qu.prototype;c[Bo]=true;c=UL.prototype;c.removeEventListener=c.ju;c.dispatchEvent=c.jv;c.addEventListener=c.jw;c=JV.prototype;c[Bo]=true;c.handleEvent=c.i_;c=GP.prototype;c[Bo]
=true;c.handleEvent=c.i_;c=Qf.prototype;c.get=c.je;Object.defineProperty(c,"length",{get:c.jy});c=MC.prototype;c[Bo]=true;c.handleEvent=c.i_;c=Kc.prototype;c[Bo]=true;c.handleEvent=c.i_;c=KL.prototype;c[Bo]=true;c.handleEvent=c.i_;})();
}));
