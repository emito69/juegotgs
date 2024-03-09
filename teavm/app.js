"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(ASj){let AYB=2463534242,Fj=()=>{let x=AYB;x^=x<<13;x^=x>>>17;x^=x<<5;AYB=x;return x;},P=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Br=f=>function(p1,p2){return f(this,p1,p2);},Bf=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BT=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AXh=f=>function(){let args=Array.prototype.slice.apply(arguments);AYC(function(){f.apply(this,args);});},AWK=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=R(Ge(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=W(args[i]);}AYC(()=>{f.call(null,javaArgs);},callback);},BR=target=>target.$clinit=()=>{},AVx=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},F=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=Ge();}return function(){superclass.call(this);};},M=cls=>AW3(cls),Ge=()=>C,Xy=()=>{{return AUy();}},Kx=t=>{{return ANr(t);}};let AYD=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AYE=(name,binaryName)=>{let cls
=AYD();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},Cm=AYE("boolean","Z"),K4=AYE("char","C"),AYF=AYE("byte","B"),AYG=AYE("short","S"),BV=AYE("int","I"),AKp=AYE("long","J"),CN=AYE("float","F"),ADI=AYE("double","D"),Bp=AYE("void","V");let AYH=new ArrayBuffer(16),AYI=new DataView(AYH),AYJ=new Float32Array(AYH),AYK=new Float64Array(AYH),AYL=new Int32Array(AYH),
AYm;if(typeof BigInt!=='function'){AYm=n=>{AYI.setFloat64(0,n,true);return new AYM(AYI.getInt32(0,true),AYI.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AYm=n=>{AYI.setFloat64(0,n,true);let lo=AYI.getInt32(0,true),hi=AYI.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AYN=new BigInt64Array(AYH);AYm=n=>{AYK[0]=n;return AYN[0];};}let GK=n=>{AYJ[0]=n;return AYL[0];},LD=n=>{AYL[0]=n;return AYJ[0];},BW=(a,b)=>a>b?1:a<b? -1:a===b?0:1,Dt
=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},En=(a,b)=>(a>>>0)/(b>>>0)>>>0,AWF=(a,b)=>(a>>>0)%(b>>>0)>>>0,Fd=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AYM(lo,hi){this.lo=lo|0;this.hi=hi|0;}AYM.prototype.__teavm_class__=()=>{return "long";};let AYO=a=>(a.hi&0x80000000)===0,AYP=a=>(a.hi&0x80000000)!==0,AYQ=1<<18,B8,D,X,Em,AWr,Bm,AYR;if(typeof BigInt!=="function"){AYM.prototype.toString=function(){let result=[],n=this,
positive=AYO(n);if(!positive){n=AWT(n);}let radix=new AYM(10,0);do {let divRem=AYR(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AYM.prototype.valueOf=function(){return AWr(this);};B8=new AYM(0,0);X=val=>new AYM(val, -(val<0)|0);Em=val=>val>=0?new AYM(val|0,val/0x100000000|0):AWT(new AYM( -val|0, -val/0x100000000|0));D=(lo,hi)=>new AYM(lo,hi);AWr=val=>0x100000000*val.hi+(val.lo>>>0);Bm=
val=>val.lo;}else {B8=BigInt(0);D=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));X=val=>BigInt.asIntN(64,BigInt(val|0));Em=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));AWr=val=>Number(val);Bm=val=>Number(BigInt.asIntN(32,val))|0;}let El,ADU,AC5,AC_,AVH,QQ,AWY,C5,L_,AYS,Bd,Nj,OI,AW0,AWT,Dh,ADT,E4,Fp,AWq,Bg;if(typeof BigInt!=='function'){El=(a,b)=>a.hi===b.hi&&a.lo===b.lo;ADU=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;AC5=(a,b)=>{if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};AC_=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};AVH=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};QQ=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo
&1)<=(b.lo&1);};C5=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Em(a.lo+b.lo);}else if(AYT.abs(a.hi)<AYQ&&AYT.abs(b.hi)<AYQ){return Em(AWr(a)+AWr(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AYM(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AYS=a=>{let lo
=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AYM(lo,hi);};AWT=a=>AYS(new AYM(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));L_=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Em(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AYM(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF
|(hihi&0xFFFF)<<16);};AWY=(a,b)=>{let r=Fd(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Bd=(a,b)=>{let positive=AYP(a)===AYP(b);if(AYP(a)){a=AWT(a);}if(AYP(b)){b=AWT(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)
+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AYM(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:AWT(result);};Nj=(a,b)=>{if(AYT.abs(a.hi)<AYQ&&AYT.abs(b.hi)<AYQ){return Em(AWr(a)/AWr(b));}return (AYR(a,b))[0];};AW0=(a,b)=>
{if(a.hi>=0&&a.hi<AYQ&&b.hi>=0&&b.hi<AYQ){return Em(AWr(a)/AWr(b));}return (AYU(a,b))[0];};OI=(a,b)=>{if(AYT.abs(a.hi)<AYQ&&AYT.abs(b.hi)<AYQ){return Em(AWr(a)%AWr(b));}return (AYR(a,b))[1];};AYR=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AYP(a)===AYP(b);if(AYP(a)){a=AWT(a);}if(AYP(b)){b=AWT(b);}a=new AYV(a.lo,a.hi,0);b=new AYV(b.lo,b.hi,0);let q=AYW(a,b);a=new AYM(a.lo,a.hi);q=new AYM(q.lo,q.hi);return positive?[q,a]:[AWT(q),AWT(a)];};let AYU=(a,b)=>{if(b.lo===0&&b.hi===
0){throw new Error("Division by zero");}a=new AYV(a.lo,a.hi,0);b=new AYV(b.lo,b.hi,0);let q=AYW(a,b);a=new AYM(a.lo,a.hi);q=new AYM(q.lo,q.hi);return [q,a];};Dh=(a,b)=>new AYM(a.lo&b.lo,a.hi&b.hi);ADT=(a,b)=>new AYM(a.lo|b.lo,a.hi|b.hi);E4=(a,b)=>new AYM(a.lo^b.lo,a.hi^b.hi);Fp=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AYM(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AYM(0,a.lo);}else {return new AYM(0,a.lo<<b -32);}};AWq=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AYM(a.lo
>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AYM(a.hi,a.hi>>31);}else {return new AYM(a.hi>>b -32,a.hi>>31);}};Bg=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AYM(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AYM(a.hi,0);}else {return new AYM(a.hi>>>b -32,0);}};function AYV(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AYX=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>
16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AYY=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&
0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AYZ=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AY0=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi
>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AY1=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AY2=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi
=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AY3=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AY4=a=>new AYV(a.lo,a.hi,a.sup),AYW=(a,b)=>{let bits=b.hi!==0?AY1(b.hi):AY1(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits%16;AY2(b,bits);AY2(a,dividentBits);let q
=new AYV(0,0,0);while(sz-->0){AY2(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AY4(b);AYX(t,digit);if(AY0(t,a)>=0){while(AY0(t,a)>0){AYY(t,b); --digit;}}else {while(true){let nextT=AY4(t);AYZ(nextT,b);if(AY0(nextT,a)>0){break;}t=nextT;++digit;}}AYY(a,t);q.lo|=digit;AY2(a,16);}AY3(a,bits+16);return q;};}else {El=(a,b)=>a===b;ADU=(a,b)=>a!==b;AC5=(a,b)=>a>b;AC_=(a,b)=>a>=b;AVH=(a,b)=>a<b;QQ=(a,b)=>a<=b;C5=(a,b)=>BigInt.asIntN(64,a+b);AYS=a=>BigInt.asIntN(64,a+1);AWT=a=>BigInt.asIntN(64,
 -a);L_=(a,b)=>BigInt.asIntN(64,a -b);AWY=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Bd=(a,b)=>BigInt.asIntN(64,a*b);Nj=(a,b)=>BigInt.asIntN(64,a/b);AW0=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));OI=(a,b)=>BigInt.asIntN(64,a%b);Dh=(a,b)=>BigInt.asIntN(64,a&b);ADT=(a,b)=>BigInt.asIntN(64,a|b);E4=(a,b)=>BigInt.asIntN(64,a^b);Fp=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));AWq=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));Bg=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));}let R=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (Eo(cls))(data);},V=(cls,data)=>new (Eo(cls))(data),AY5=(cls,sz)=>new (Eo(cls))(new Array(sz)),ABh;if(typeof BigInt64Array!=='function'){ABh=init=>new AY6(init);}else {ABh=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AY6(buffer);};}let G=sz=>new AY7(new Uint16Array(sz)),AGF=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AY7(buffer);},BN=sz=>new AY8(new Int8Array(sz)),
FV=sz=>new AY9(new Int16Array(sz)),AYo=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AY9(buffer);},Ba=sz=>new AY$(new Int32Array(sz)),IW=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AY$(buffer);},Ku=sz=>new AY_(new Int8Array(sz)),Ce=sz=>new AZa(new Float32Array(sz)),Eo=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(Ge()).call(this);this.data=data;}JavaArray.prototype=Object.create((Ge()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor
=JavaArray;JavaArray.prototype.toString=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (Eo(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[Ge()],primitive
:false,superclass:Ge(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;},AXt=(cls,dimensions)=>{let first=0;for(let i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(let i=0;i<first;i=i+1|0){cls=Eo(cls);}if(first===dimensions.length -1){return R(cls,dimensions[first]);}}let arrays=new Array(AZb(dimensions,first)),firstDim
=dimensions[first]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=R(cls,firstDim);}return AZc(cls,arrays,dimensions,first);},AZb=(dimensions,start)=>{let val=dimensions[start+1]|0;for(let i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;},AZc=(cls,arrays,dimensions,start)=>{let limit=arrays.length;for(let i=start+1|0;i<dimensions.length;i=i+1|0){cls=Eo(cls);let dim=dimensions[i],index=0,packedIndex=0;while(index<limit){let arr=AY5(cls,dim);for(let j=0;j<dim;j
=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];};let AZd,AVP=strings=>{AZe();AZd=new Array(strings.length);for(let i=0;i<strings.length;++i){AZd[i]=AZf(W(strings[i]));}},A=index=>AZd[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,array.subarray(i,next));}return result;},AVf=(string,begin,dst,
dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}},W=str=>str===null?null:T9(str),Bz=str=>str===null?null:str.kf,AZe=()=>(()=>{})(),AZf;{AZf=str=>str;}let BC=(obj,cls)=>obj instanceof Ge()&&!!obj.constructor.$meta&&AZg(obj.constructor,cls),AZg=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AZg(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(AZg(supertypes[i],
to)){return true;}}return false;};let B=ex=>{throw AQt(ex);},AZh=Symbol("javaException"),AQt=ex=>{let err=ex.$jsException;if(!err){let javaCause=AZi(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AZj("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AZh]=ex;ex.$jsException=err;AZk(err,ex);}return err;},AZk=(err,ex)=>{if(typeof AZl==="function"&&err.stack){let stack=AZl(err.stack),
javaStack=R(AZm(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=AZn(W(element.className),W(element.methodName),W(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AZo(ex,javaStack);}}},AZj;if(typeof AZp==='object'){let AZq=Symbol("defaultMessage");AZj=function AZj(message,cause){let self=Reflect.construct(Error,[void 0,cause],AZj);Object.setPrototypeOf(self,AZj.prototype);self[AZq]=message;return self;};AZj.prototype
=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:AZj},message:{get(){try {let javaException=this[AZh];if(typeof javaException==='object'){let javaMessage=AZr(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AZq];}catch(AZs){return "Exception occurred trying to extract Java exception message: "+AZs;}}}});}else {AZj=Error;}let AWi=e=>e instanceof Error&&typeof e[AZh]==='object'?e[AZh]:null,Bc=err=>{let ex=err[AZh];if
(!ex){ex=AZt(W("(JavaScript) "+err.toString()));err[AZh]=ex;ex.$jsException=err;AZk(err,ex);}return ex;},AZt=message=>AVu(message),AZr=t=>AOS(t),AZi=t=>AXv(t),AZm=()=>Ge(),AZn=(className,methodName,fileName,lineNumber)=>{{return null;}},AZo=(e,stack)=>{};let AZu=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=next+1;}buffer+=msg.substring(index);};},B2=typeof $rt_putStdoutCustom
==="function"?$rt_putStdoutCustom:typeof console==="object"?AZu(msg=>console.info(msg)):()=>{},DP=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AZu(msg=>console.error(msg)):()=>{};let AZv=null,AUQ=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AZv=packages;},Di=data=>{let packages=AZv,i=0;while(i<data.length){let cls=data[i++];cls.$meta
={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor
=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods
=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function AZw(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}AZw.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};AZw.prototype.s
=AZw.prototype.push;AZw.prototype.pop=function(){return this.stack.pop();};AZw.prototype.l=AZw.prototype.pop;AZw.prototype.isResuming=function(){return this.status===2;};AZw.prototype.isSuspending=function(){return this.status===1;};AZw.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};AZw.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(AZx!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback
=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};AZw.prototype.resume=function(){if(AZx!==null){throw new Error("Another thread is running");}this.status=2;this.run();};AZw.prototype.run=function(){AZx=this;let result;try {result=this.runner();}catch(AZs){result=AZs;}finally {AZx=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let FY
=()=>{let thread=Dp();return thread!=null&&thread.isSuspending();},F0=()=>{let thread=Dp();return thread!=null&&thread.isResuming();},AYC=(runner,callback)=>(new AZw(runner)).start(callback),AZx=null,Dp=()=>AZx,FN=()=>{throw new Error("Invalid recorded state");};function C(){this.mH=null;this.$id$=0;}
let Gi=b=>{let c;if(b.mH===null){c=new I0;c.mD=B3;b.mH=c;}b=b.mH;c=b.mD;if(c===null)b.mD=B3;else if(c!==B3){c=new BO;c.kg=1;c.kh=1;c.kj=A(0);B(c);}b.ni=b.ni+1|0;},
D0=b=>{let c,d;if(!HE(b)){c=b.mH;if(c.mD===B3){d=c.ni-1|0;c.ni=d;if(!d)c.mD=null;HE(b);return;}}b=new Jc;b.kg=1;b.kh=1;B(b);},
AW5=b=>{AF4(b,1);},
AF4=(b,c)=>{let d,$p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.mH===null){d=new I0;d.mD=B3;b.mH=d;}d=b.mH;if(d.mD===null)d.mD=B3;if(d.mD===B3){d.ni=d.ni+c|0;return;}$p=1;case 1:YJ(b,c);if(FY()){break _;}return;default:FN();}}Dp().s(b,c,d,$p);},
AIN=(b,c,d)=>{let e,f,g;e=B3;f=b.mH;if(f===null){f=new I0;f.mD=e;b.mH=f;if(e!==e)B3=e;B3.ph=EE();b=b.mH;b.ni=b.ni+c|0;b=null;d.qj.e(b);return;}if(f.mD===null){f.mD=e;if(e!==e)B3=e;B3.ph=EE();b=b.mH;b.ni=b.ni+c|0;b=null;d.qj.e(b);return;}if(f.pc===null)f.pc=AH1();f=f.pc;g=new Tj;g.wG=e;g.wI=b;g.wE=c;g.wF=d;d=g;f.push(d);},
AW_=b=>{X9(b,1);},
X9=(b,c)=>{let d;if(!HE(b)){d=b.mH;if(d.mD===B3){c=d.ni-c|0;d.ni=c;if(c>0)return;d.mD=null;d=d.pc;if(d!==null&&!(d.length?0:1)){d=new WF;d.w5=b;Nz(d,0);}else HE(b);return;}}b=new Jc;b.kg=1;b.kh=1;B(b);},
APB=b=>{let c,d,e;if(!HE(b)){c=b.mH;if(c.mD===null){b=c.pc;if(b!==null&&!(b.length?0:1)){b=c.pc.shift();BE();if(b!==null&&!(b instanceof Ge()))b=Cc(b);d=b;c.pc=null;b=d.wG;c=d.wI;e=d.wE;d=d.wF;if(B3!==b)B3=b;B3.ph=EE();c=c.mH;c.mD=b;c.ni=c.ni+e|0;b=null;d.qj.e(b);}return;}}},
HE=a=>{let b,c;b=a.mH;if(b===null)return 1;a:{if(b.mD===null){c=b.pc;if(!(c!==null&&!(c.length?0:1))){b=b.vj;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.mH=null;return 1;},
Bu=a=>{return;},
AVA=()=>{let a=new C();Bu(a);return a;},
AW6=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.kw=b;d=c;b.classObject=d;}}return c;},
Fm=a=>{let b,c;b=a;if(!b.$id$){c=Fj();b.$id$=c;}return a.$id$;},
AJW=(a,b)=>{return a!==b?0:1;},
P$=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=Fj();b.$id$=c;}d=Bi(a.$id$,4);b=new K;b.ke=G(16);E(b,b.kd,A(1));e=b.kd;if(d===null)d=A(2);E(b,e,d);c=new I;f=b.ke;g=f.data;h=b.kd;i=g.length;if(h>=0&&h<=(i-0|0)){c.kf=L(f.data,0,h);return c;}b=new H;b.kg=1;b.kh=1;B(b);},
AWA=a=>{let b,c,d;if(!BC(a,FC)&&a.constructor.$meta.item===null){b=new U9;b.kg=1;b.kh=1;B(b);}b=XO(a);c=b;d=Fj();c.$id$=d;return b;},
NY=a=>{let b,c;b=a.mH;if(!(b!==null&&b.mD===B3?1:0)){b=new Jc;b.kg=1;b.kh=1;B(b);}b=b.vj;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BE();if(c!==null&&!(c instanceof Ge()))c=Cc(c);c=c;if(!c.m())Nz(c,0);}a.mH.vj=null;},
YJ=(b,c)=>{let thread=Dp();let javaThread=Xy();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Kx(javaThread);thread.resume();};callback.g0=e=>{thread.attribute=AQt(e);Kx(javaThread);thread.resume();};callback=SS(callback);thread.suspend(()=>{try {AIN(b,c,callback);;}catch(Ob){callback.g0(Ob);}});return null;};
let AQ0=F();
let AHg=b=>{let c,d,e,f;Wf=G(0);c=new I;c.kf="";ME=c;OF=new N4;APf();c=new Z;c.kl=1.0;c.kk=0.0;O_=c;c=new Z;c.kl=0.0;c.kk=1.0;O$=c;c=new Z;c.kl=0.0;c.kk=0.0;RH=c;LM=new Z;JI=new Z;Zf();Uh=new Z;Ul=new Z;ABF();SW=new Z;S7=new Z;c=new EH;c.oP=0.0;c.oM=0.0;c.oN=0.0;c.oO=0.0;RU=c;c=new EH;c.oP=0.0;c.oM=0.0;c.oN=0.0;c.oO=0.0;RT=c;QV=new DH;TH=new DH;VD=0.10000000149011612;ATw();Ry=M(CN);Xx();PK=R(JG,111);T5=new Z;Ue=new Z;Q2=new C;AHl();OL=M(BV);AD7();Qh=M(AKp);OK=M(K4);Uk=R(M_,128);YM();AK0();Ro=new Z;Rp=new Z;Rq
=new Z;Tu=0.4000000059604645;OJ=0.10000000149011612;Ve=new Z;AMU();Sd=new Z;SM=new Z;WM=new Z;WO=new Z;WN=new Z;ARZ();ATu();AC6();Pz=new BM;ANV();Ix=0.0;AGg();R0=Ce(3);ALj();AG$();AJa();Dn=1;AB6();WQ=new KL;Rb=new KK;AJO();O=1;ADl();I9=new NN;ALW();Z2();c=new N8;b=R(I,0);d=b.data;JX(A(3));e=d.length;f=0;while(f<e){JX(d[f]);f=f+1|0;}c.v4=A(3);c.wV=b.p();Co=c;ASe();W0=M(ADI);AF9();ATH();c=new HZ;c.nB=1;Jv=c;c=new HZ;c.nB=0;GZ=c;Q$=M(Cm);c=new HP;c.tk=A(4);Ct=c;c=new HP;c.tk=A(5);Kq=c;AOO();AFF();APn();AAx();AGy();ADN();Xo();ATY();AFt();ABQ();K$
=1;AAj();c=new DC;c.p8=12;Mf=c;AMQ();ANn();ATm();DV=new Z;DK=new Z;D$=new Z;C2=new Z;C3=new Z;Tm=new Z;NB=new Z;Hc=new Z;Hf=new Z;Wy=new Z;OH=new Z;PL=CI(2.0);PM=CI(3.0);Ei=new Z;FG=new Z;Ew=new Z;c=ATz(A(6));c.sy=0;c.qr=0;QC(new Ma,new Qq,c);};
let OM=F();
let AES=0,AEZ=0,Y$=0,ATI=0,AC0=0;
let Ti=()=>{Ti=BR(OM);AHi();};
let AHi=()=>{AES=Dk(W(navigator.platform),A(7));AEZ=Dk(W(navigator.platform),A(8));Y$=Dk(W(navigator.platform),A(9));ATI=!Dk(W(navigator.platform),A(10))&&!Dk(W(navigator.platform),A(11))?0:1;AC0=!Dk(W(navigator.platform),A(12))&&!Dk(W(navigator.platform),A(13))&&!Dk(W(navigator.platform),A(14))?0:1;};
let Oy=F(0);
let MK=F();
let CM=F(0);
function ND(){let a=this;MK.call(a);a.me=null;a.v5=null;a.y_=0;a.lJ=null;a.mf=null;a.sd=null;a.ti=null;a.qf=null;a.qi=null;a.si=0;a.sj=0;a.sK=null;a.n_=null;a.qA=null;a.p_=null;a.vn=0;a.rh=null;a.x_=0;a.AB=0;a.wU=0;a.uO=null;a.w6=null;}
let BS=0;
let Te=(a,b,c)=>{let d,e,f,g,h,i,j,k;a.mf=new Z;a.sd=R(Ci,20);a.ti=Ku(20);a.qf=Ba(20);a.qi=Ba(20);d=new Nu;IF(d,1,4,M(D7));a.p_=d;a.vn=1;a.uO=Jf;e=new BM;e.k_=0.0;e.k$=1.0;e.k9=0.0;e.lc=0.8500000238418579;CO(e);a.w6=e;if(b===null){b=new Bj;b.kg=1;b.kh=1;b.kj=A(15);B(b);}if(c===null){b=new Bj;b.kg=1;b.kh=1;b.kj=A(16);B(b);}a.me=b;a.v5=c;c=new BJ;EN(c);e=new Nu;IF(e,1,4,M(Ci));c.kD=e;e=new Tr;e.pp=1.0;e.pn=0.0;e.po=0.0;e.pr=0.0;e.ps=1.0;e.pq=0.0;c.t_=e;c.u0=Dj();c.p9=Dj();c.nT=1;a.lJ=c;c.lN=a;c=c.kD;f=c.km;g=
0;h=c.ki;while(g<h){f.data[g].x(a);g=g+1|0;}g=B7.lE.width;i=B7.lE.height;b.qo=0;b.qp=0;b.p1=g;b.m1=i;j=g;k=b.sA;j=j*k;k=i*k;b.tA=j;b.tK=k;NK(b,1);},
AXP=(a,b)=>{let c=new ND();Te(c,a,b);return c;},
ANA=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.rh===null){b=AJf(5000,null);a.rh=b;b.te=1;}a:{if(!a.AB&&!a.wU&&a.uO===Jf){if(!a.x_)break a;b=a.lJ;b.kV=1;BS=1;b=b.kD;if(CJ){c=new Cw;c.k8=1;c.lg=b;c.mi=1;}else{if(b.kS===null){c=new C_;c.mu=b;c.my=1;b.kS=c;}c=CT(b.kS);}b:while(true){if(!c.k8){c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(c.l3>=c.lg.ki?0:1))break a;b=Cq(c);if(!(b instanceof BJ)){b.kV=1;BS=1;}else{b=b;b.kV=1;BS=1;b=b.kD;if(CJ){d=new Cw;d.k8=1;d.lg=b;d.mi=1;}else{if(b.kS
===null){d=new C_;d.mu=b;d.my=1;b.kS=d;}d=CT(b.kS);}while(true){if(!d.k8){c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(d.l3>=d.lg.ki?0:1))break;b=Cq(d);if(!(b instanceof BJ)){b.kV=1;BS=1;}else{b=b;b.kV=1;BS=1;b=b.kD;if(CJ){e=new Cw;e.k8=1;e.lg=b;e.mi=1;}else{if(b.kS===null){e=new C_;e.mu=b;e.my=1;b.kS=e;}e=CT(b.kS);}while(true){if(!e.k8){c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(e.l3>=e.lg.ki?0:1))break;b=Cq(e);if(!(b instanceof BJ)){b.kV=1;BS=1;}else{b=b;b.kV=1;BS=1;f=b.kD;if(CJ){b=new Cw;b.k8=1;b.lg=f;b.mi
=1;}else{if(f.kS===null){b=new C_;Bu(b);b.mu=f;b.my=1;f.kS=b;}b=CT(f.kS);}while(true){if(!b.k8){c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(b.l3>=b.lg.ki?0:1))break;f=Cq(b);if(!(f instanceof BJ)){f.kV=1;BS=1;}else{f=f;f.kV=1;BS=1;f=f.kD;if(CJ){g=new Cw;Bu(g);g.k8=1;g.lg=f;g.mi=1;}else{if(f.kS===null)f.kS=L7(f,1);g=CT(f.kS);}while(true){if(!g.k8){c=new T;Hi(c,A(17));B(c);}if(!(g.l3>=g.lg.ki?0:1))break;f=Cq(g);if(!(f instanceof BJ)){f.kV=1;BS=1;}else{f=f;f.kV=1;BS=1;f=f.kD;if(CJ)h=Mx(f,1);else{if(f.kS===null)f.kS
=N9(f);h=CT(f.kS);}while(true){if(!h.k8)break b;if(!(h.l3>=h.lg.ki?0:1))break;f=Cq(h);if(!(f instanceof BJ)){f.kV=1;BS=1;}else{f=f;Fo(f,1);f=GN(f.kD);while(HX(f)){i=Cq(f);if(!(i instanceof BJ))Fo(i,1);else LW(i,1,1);}}}}}}}}}}}}}B(KX(A(17)));}c=a.mf;b=Lx;j=b.ms.data[0];k=b.mr.data[0];c.kl=j;c.kk=k;Fc(a.me,c);b=a.mf;j=b.kl;k=b.kk;c=a.lJ;b.kl=j;b.kk=k;DL(c,b);b=a.lJ;c=a.mf;c=Iu(b,c.kl,c.kk,1);if(c===null)return;if(!a.wU)b=c;else{b=c.lb;if(b===null)b=c;}c=a.uO;if(c===Jf){b.kV=1;BS=1;}else{c:{while(true){if(b===
null)break c;if(b instanceof EJ)break;b=b.lb;}}if(b===null)return;b.K(c);}d:{if(a.x_&&b instanceof BJ){c=b;c.kV=1;BS=1;c=c.kD;if(CJ){d=new Cw;d.k8=1;d.lg=c;d.mi=1;}else{if(c.kS===null){d=new C_;d.mu=c;d.my=1;c.kS=d;}d=CT(c.kS);}e:while(true){if(!d.k8){c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(d.l3>=d.lg.ki?0:1))break d;c=Cq(d);if(!(c instanceof BJ)){c.kV=1;BS=1;}else{c=c;c.kV=1;BS=1;c=c.kD;if(CJ){e=new Cw;e.k8=1;e.lg=c;e.mi=1;}else{if(c.kS===null){e=new C_;e.mu=c;e.my=1;c.kS=e;}e=CT(c.kS);}while(true){if(!e.k8)
{c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(e.l3>=e.lg.ki?0:1))break;c=Cq(e);if(!(c instanceof BJ)){c.kV=1;BS=1;}else{c=c;c.kV=1;BS=1;c=c.kD;if(CJ){f=new Cw;f.k8=1;f.lg=c;f.mi=1;}else{if(c.kS===null){f=new C_;f.mu=c;f.my=1;c.kS=f;}f=CT(c.kS);}while(true){if(!f.k8){c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(f.l3>=f.lg.ki?0:1))break;c=Cq(f);if(!(c instanceof BJ)){c.kV=1;BS=1;}else{c=c;c.kV=1;BS=1;c=c.kD;if(CJ){g=new Cw;g.k8=1;g.lg=c;g.mi=1;}else{if(c.kS===null){g=new C_;Bu(g);g.mu=c;g.my=1;c.kS=g;}g=CT(c.kS);}while
(true){if(!g.k8){c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}if(!(g.l3>=g.lg.ki?0:1))break;c=Cq(g);if(!(c instanceof BJ)){c.kV=1;BS=1;}else{c=c;c.kV=1;BS=1;c=c.kD;if(CJ){h=new Cw;Bu(h);h.k8=1;h.lg=c;h.mi=1;}else{if(c.kS===null)c.kS=L7(c,1);h=CT(c.kS);}while(true){if(!h.k8){c=new T;Hi(c,A(17));B(c);}if(!(h.l3>=h.lg.ki?0:1))break;c=Cq(h);if(!(c instanceof BJ)){c.kV=1;BS=1;}else{c=c;c.kV=1;BS=1;c=c.kD;if(CJ)i=Mx(c,1);else{if(c.kS===null)c.kS=N9(c);i=CT(c.kS);}while(true){if(!i.k8)break e;if(!(i.l3>=i.lg.ki?0:1))break;c
=Cq(i);if(!(c instanceof BJ)){c.kV=1;BS=1;}else{c=c;Fo(c,1);c=GN(c.kD);while(HX(c)){l=Cq(c);if(!(l instanceof BJ))Fo(l,1);else LW(l,1,1);}}}}}}}}}}}}}B(KX(A(17)));}}c=a.lJ;if(c!==b)f:{c.kV=0;if(c instanceof BJ){c=c.kD;m=0;n=c.ki;g:while(true){if(m>=n)break f;if(m>=c.ki){d=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,m,10);E(b,b.kd,A(19));m=c.ki;J(b,b.kd,m,10);c=new I;o=b.ke;p=o.data;n=b.kd;q=p.length;if(n>=0&&n<=(q-0|0)){c.kf=L(o.data,0,n);d.kg=1;d.kh=1;d.kj=c;B(d);}b=new H;b.kg=1;b.kh=1;B(b);}d=c.km.data[m];if
(d!==b)h:{d.kV=0;if(d instanceof BJ){d=d.kD;q=0;r=d.ki;while(true){if(q>=r)break h;if(q>=d.ki){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,q,10);E(b,b.kd,A(19));m=d.ki;J(b,b.kd,m,10);d=new I;o=b.ke;p=o.data;n=b.kd;q=p.length;if(n>=0&&n<=(q-0|0)){d.kf=L(o.data,0,n);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}e=d.km.data[q];if(e!==b)i:{e.kV=0;if(e instanceof BJ){e=e.kD;s=0;t=e.ki;while(true){if(s>=t)break i;if(s>=e.ki){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,s,10);E(b,b.kd,A(19));m
=e.ki;J(b,b.kd,m,10);d=new I;o=b.ke;p=o.data;n=b.kd;q=p.length;if(n>=0&&n<=(q-0|0)){d.kf=L(o.data,0,n);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}f=e.km.data[s];if(f!==b)j:{f.kV=0;if(f instanceof BJ){f=f.kD;u=0;v=f.ki;while(true){if(u>=v)break j;if(u>=f.ki){c=new H;b=new K;Bu(b);b.ke=G(16);BZ(b,b.kd,A(18));J(b,b.kd,u,10);BZ(b,b.kd,A(19));m=f.ki;J(b,b.kd,m,10);d=new I;o=b.ke;p=o.data;n=b.kd;q=p.length;if(n>=0&&n<=(q-0|0)){d.kf=L(o.data,0,n);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}g
=f.km.data[u];if(g!==b)k:{g.kV=0;if(g instanceof BJ){g=g.kD;w=0;x=g.ki;while(true){if(w>=x)break k;if(w>=g.ki){c=new H;b=new K;D1(b,16);Cd(b,b.kd,A(18));IP(b,w,10);Cd(b,b.kd,A(19));IP(b,g.ki,10);d=new I;o=b.ke;p=o.data;n=b.kd;q=p.length;if(n>=0&&n<=(q-0|0)){d.kf=L(o.data,0,n);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}h=g.km.data[w];if(h!==b)l:{h.kV=0;if(h instanceof BJ){h=h.kD;y=0;z=h.ki;while(true){if(y>=z)break l;if(y>=h.ki){c=new H;b=new K;Fi(b);JP(b,A(18));IU(b,y);JP(b,A(19));IU(b,h.ki);d=new I;o
=b.ke;p=o.data;n=b.kd;q=p.length;if(n>=0&&n<=(q-0|0)){d.kf=L(o.data,0,n);Hi(c,d);B(c);}b=new H;b.kg=1;b.kh=1;B(b);}i=h.km.data[y];if(i!==b)m:{i.kV=0;if(i instanceof BJ){l=i.kD;ba=0;bb=l.ki;while(true){if(ba>=bb)break m;if(ba>=l.ki)break g;i=l.km.data[ba];if(i!==b)n:{Fo(i,0);if(i instanceof BJ){i=i.kD;bc=0;bd=i.ki;while(true){if(bc>=bd)break n;PB(a,Q(i,bc),b);bc=bc+1|0;}}}ba=ba+1|0;}}}y=y+1|0;}}}w=w+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}q=q+1|0;}}}m=m+1|0;}B(Nx(Et(Fw(FO(Fw(FO(EF(),A(18)),ba),A(19)),l.ki))));}}}B5.W(3042);b
=a.rh;c=a.me.ro.q6;Dl(b.tM,c.lF);b.o7=1;b=a.rh;if(!b.te){c=new BO;c.kg=1;c.kh=1;c.kj=A(20);B(c);}Go(b,Ih);Pt(a.lJ,a.rh);b=a.rh;Gk(b.lt);b.nb=null;B5.bb(3042);},
PB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(b===c)return;a:{b.kV=0;if(b instanceof BJ){d=b.kD;e=0;f=d.ki;while(true){if(e>=f)break a;if(e>=d.ki){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,e,10);E(b,b.kd,A(19));e=d.ki;J(b,b.kd,e,10);d=new I;g=b.ke;h=g.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0)){d.kf=L(g.data,0,f);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}b=d.km.data[e];if(b!==c)b:{b.kV=0;if(b instanceof BJ){j=b.kD;i=0;k=j.ki;while(true){if(i>=k)break b;if
(i>=j.ki){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,i,10);E(b,b.kd,A(19));e=j.ki;J(b,b.kd,e,10);d=new I;g=b.ke;h=g.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0)){d.kf=L(g.data,0,f);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}b=j.km.data[i];if(b!==c)c:{b.kV=0;if(b instanceof BJ){l=b.kD;m=0;n=l.ki;while(true){if(m>=n)break c;if(m>=l.ki){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,m,10);E(b,b.kd,A(19));e=l.ki;J(b,b.kd,e,10);d=new I;g=b.ke;h=g.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0))
{d.kf=L(g.data,0,f);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}b=l.km.data[m];if(b!==c)d:{b.kV=0;if(b instanceof BJ){b=b.kD;o=0;p=b.ki;while(true){if(o>=p)break d;if(o>=b.ki){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,o,10);E(c,c.kd,A(19));e=b.ki;J(c,c.kd,e,10);b=new I;g=c.ke;h=g.data;f=c.kd;i=h.length;if(f>=0&&f<=(i-0|0)){b.kf=L(g.data,0,f);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;b.kg=1;b.kh=1;B(b);}q=b.km.data[o];if(q!==c)e:{q.kV=0;if(q instanceof BJ){r=q.kD;s=0;t=r.ki;while(true){if(s>=t)break e;if
(s>=r.ki){c=new H;b=new K;Bu(b);b.ke=G(16);BZ(b,b.kd,A(18));J(b,b.kd,s,10);BZ(b,b.kd,A(19));e=r.ki;J(b,b.kd,e,10);d=new I;g=b.ke;h=g.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0)){d.kf=L(g.data,0,f);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}q=r.km.data[s];if(q!==c)f:{q.kV=0;if(q instanceof BJ){q=q.kD;u=0;v=q.ki;while(true){if(u>=v)break f;if(u>=q.ki){c=new H;b=new K;D1(b,16);Cd(b,b.kd,A(18));IP(b,u,10);Cd(b,b.kd,A(19));IP(b,q.ki,10);d=new I;g=b.ke;h=g.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0)){d.kf
=L(g.data,0,f);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}w=q.km.data[u];if(w!==c)g:{w.kV=0;if(w instanceof BJ){w=w.kD;x=0;y=w.ki;while(true){if(x>=y)break g;if(x>=w.ki){c=new H;b=new K;Fi(b);JP(b,A(18));IU(b,x);JP(b,A(19));IU(b,w.ki);d=new I;g=b.ke;h=g.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0)){d.kf=L(g.data,0,f);Hi(c,d);B(c);}b=new H;b.kg=1;b.kh=1;B(b);}z=w.km.data[x];if(z!==c)h:{z.kV=0;if(z instanceof BJ){z=z.kD;ba=0;bb=z.ki;while(true){if(ba>=bb)break h;if(ba>=z.ki)B(Nx(Et(Fw(FO(Fw(FO(EF(),
A(18)),ba),A(19)),z.ki))));bc=z.km.data[ba];if(bc!==c)i:{Fo(bc,0);if(bc instanceof BJ){bc=bc.kD;bd=0;be=bc.ki;while(true){if(bd>=be)break i;PB(a,Q(bc,bd),c);bd=bd+1|0;}}}ba=ba+1|0;}}}x=x+1|0;}}}u=u+1|0;}}}s=s+1|0;}}}o=o+1|0;}}}m=m+1|0;}}}i=i+1|0;}}}e=e+1|0;}}}},
AOy=(a,b)=>{let c,d,e,f,g;c=0;d=a.sd.data.length;while(c<d){e=a.sd.data;f=e[c];if(a.ti.data[c])e[c]=Qw(a,f,a.qf.data[c],a.qi.data[c],c);else if(f!==null){e[c]=null;Of(a,f,a.qf.data[c],a.qi.data[c],c);}c=c+1|0;}g=HO;if(!(g!==Nt&&g!==M9&&g!==g))a.sK=Qw(a,a.sK,a.si,a.sj,(-1));R5(a.lJ,b);},
Qw=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;f=a.mf;g=c;h=d;f.kl=g;f.kk=h;Fc(a.me,f);f=a.mf;g=f.kl;h=f.kk;i=a.lJ;f.kl=g;f.kk=h;DL(i,f);f=a.lJ;i=a.mf;j=Iu(f,i.kl,i.kk,1);if(j===b)return b;if(b!==null){CE();i=Bw;d=BG(i,M(Bb));k=d<0?null:i.k3.data[d];if(k===null){k=new CK;i=new Bh;i.kJ=0;i.km=R(C,4);k.kA=i;k.la=100;a:{try{i=CU(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{i=CS(M(Bb),null);CV(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}i
=null;}k.kU=i;if(i===null){b=new BA;i=new K;i.ke=G(16);E(i,i.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);f=M(Bb).kp;E(i,i.kd,f);f=new I;l=i.ke;m=l.data;d=i.kd;e=m.length;if(d>=0&&d<=(e-0|0)){f.kf=L(l.data,0,d);b.kg=1;b.kh=1;b.kj=f;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(Bb),k);}f=k.kA;c=f.ki;if(c){if(!c){b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);}c=c-1|0;f.ki=c;l=f.km.data;f=l[c];l[c]=null;}else b:{try{f=C$(k.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){f=$$je;}else{throw $$e;}}i
=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));n=k.kU.lZ.lY;if(n.kp===null)n.kp=W(n.kw.$meta.name);k=n.kp;E(b,b.kd,k);k=new I;l=b.ke;m=l.data;d=b.kd;e=m.length;if(d>=0&&d<=(e-0|0)){k.kf=L(l.data,0,d);i.kg=1;i.kh=1;i.kj=k;i.lI=f;B(i);}b=new H;b.kg=1;b.kh=1;B(b);}f=f;f.mP=Je;f.k0=a;i=a.mf;f.oj=i.kl;f.ok=i.kk;f.oY=e;f.lK=j;Eg(b,f);i=Bw;o=f.constructor;if(o===null)k=null;else{k=o.classObject;if(k===null){k=new BD;k.kw=o;p=k;o.classObject=p;}}c=BG(i,k);i=c<0?null:i.k3.data[c];if(i!==null){k=i.kA;if(k.ki<i.la){S(k,f);c
=i.k6;d=i.kA.ki;if(c>d)d=c;i.k6=d;if(BC(f,BB)){f=f;f.k0=null;f.lq=null;f.lr=null;f.lA=0;f.lv=1;f.lj=0;f.lz=0;f.ln=0;f.lK=null;f.lD=(-1);}}else if(BC(f,BB)){f=f;f.k0=null;f.lq=null;f.lr=null;f.lA=0;f.lv=1;f.lj=0;f.lz=0;f.ln=0;f.lK=null;f.lD=(-1);}}}if(j!==null){CE();i=Bw;d=BG(i,M(Bb));k=d<0?null:i.k3.data[d];if(k===null){k=new CK;i=new Bh;i.kJ=0;i.km=R(C,4);k.kA=i;k.la=100;c:{try{i=CU(M(Bb),null);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{i=CS(M(Bb),null);CV(i,1);break c;}catch
($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}i=null;}k.kU=i;if(i===null){b=new BA;i=new K;i.ke=G(16);E(i,i.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);f=M(Bb).kp;E(i,i.kd,f);f=new I;l=i.ke;m=l.data;d=i.kd;e=m.length;if(d>=0&&d<=(e-0|0)){f.kf=L(l.data,0,d);b.kg=1;b.kh=1;b.kj=f;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(Bb),k);}f=k.kA;c=f.ki;if(c){if(!c){b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);}c=c-1|0;f.ki=c;l=f.km.data;f=l[c];l[c]=null;}else d:{try{f=C$(k.kU,null);break d;}catch
($$e){$$je=Bc($$e);if($$je instanceof BH){f=$$je;}else{throw $$e;}}i=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));n=k.kU.lZ.lY;if(n.kp===null)n.kp=W(n.kw.$meta.name);k=n.kp;E(b,b.kd,k);k=new I;l=b.ke;m=l.data;d=b.kd;e=m.length;if(d>=0&&d<=(e-0|0)){k.kf=L(l.data,0,d);i.kg=1;i.kh=1;i.kj=k;i.lI=f;B(i);}b=new H;b.kg=1;b.kh=1;B(b);}f=f;f.mP=Nw;f.k0=a;i=a.mf;f.oj=i.kl;f.ok=i.kk;f.oY=e;f.lK=b;Eg(j,f);b=Bw;k=f.constructor;if(k===null)i=null;else{i=k.classObject;if(i===null){i=new BD;i.kw=k;o=i;k.classObject=o;}}c=BG(b,
i);b=c<0?null:b.k3.data[c];if(b!==null){i=b.kA;if(i.ki<b.la){S(i,f);c=b.k6;d=b.kA.ki;if(c>d)d=c;b.k6=d;if(BC(f,BB)){b=f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.lK=null;b.lD=(-1);}}else if(BC(f,BB)){b=f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.lK=null;b.lD=(-1);}}}return j;},
Of=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,$$je;f=a.mf;g=c;h=d;f.kl=g;f.kk=h;Fc(a.me,f);CE();i=Bw;d=BG(i,M(Bb));j=d<0?null:i.k3.data[d];if(j===null){j=new CK;i=new Bh;i.kJ=0;i.km=R(C,4);j.kA=i;j.la=100;a:{try{i=CU(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{i=CS(M(Bb),null);CV(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}i=null;}j.kU=i;if(i===null){b=new BA;i=new K;i.ke=G(16);E(i,i.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);f
=M(Bb).kp;E(i,i.kd,f);f=new I;k=i.ke;l=k.data;d=i.kd;e=l.length;if(d>=0&&d<=(e-0|0)){f.kf=L(k.data,0,d);b.kg=1;b.kh=1;b.kj=f;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(Bb),j);}f=j.kA;c=f.ki;if(c){if(!c){b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);}c=c-1|0;f.ki=c;k=f.km.data;f=k[c];k[c]=null;}else b:{try{f=C$(j.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){f=$$je;}else{throw $$e;}}i=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));m=j.kU.lZ.lY;if(m.kp===null)m.kp=W(m.kw.$meta.name);j=m.kp;E(b,b.kd,j);j=
new I;k=b.ke;l=k.data;d=b.kd;e=l.length;if(d>=0&&d<=(e-0|0)){j.kf=L(k.data,0,d);i.kg=1;i.kh=1;i.kj=j;i.lI=f;B(i);}b=new H;b.kg=1;b.kh=1;B(b);}f=f;f.mP=Je;f.k0=a;i=a.mf;f.oj=i.kl;f.ok=i.kk;f.oY=e;f.lK=b;Eg(b,f);b=Bw;j=f.constructor;if(j===null)i=null;else{i=j.classObject;if(i===null){i=new BD;i.kw=j;n=i;j.classObject=n;}}c=BG(b,i);b=c<0?null:b.k3.data[c];if(b!==null){i=b.kA;if(i.ki<b.la){S(i,f);c=b.k6;d=b.kA.ki;if(c>d)d=c;b.k6=d;if(BC(f,BB)){b=f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=
0;b.lK=null;b.lD=(-1);}}else if(BC(f,BB)){b=f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.lK=null;b.lD=(-1);}}},
Oo=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,$$je;if(!S_(a,b,c))return 0;a.ti.data[d]=1;a.qf.data[d]=b;a.qi.data[d]=c;f=a.mf;g=b;h=c;f.kl=g;f.kk=h;Fc(a.me,f);CE();i=Bw;c=BG(i,M(Bb));j=c<0?null:i.k3.data[c];if(j===null){j=new CK;i=new Bh;i.kJ=0;i.km=R(C,4);j.kA=i;j.la=100;a:{try{i=CU(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{i=CS(M(Bb),null);CV(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}i=null;}j.kU=i;if(i===null){i=new BA;j=new K;j.ke
=G(16);E(j,j.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);f=M(Bb).kp;E(j,j.kd,f);f=new I;k=j.ke;l=k.data;c=j.kd;d=l.length;if(c>=0&&c<=(d-0|0)){f.kf=L(k.data,0,c);i.kg=1;i.kh=1;i.kj=f;B(i);}f=new H;f.kg=1;f.kh=1;B(f);}Cj(Bw,M(Bb),j);}f=j.kA;b=f.ki;if(b){if(!b){f=new BO;f.kg=1;f.kh=1;f.kj=A(22);B(f);}b=b-1|0;f.ki=b;k=f.km.data;f=k[b];k[b]=null;}else b:{try{f=C$(j.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){i=$$je;}else{throw $$e;}}m=new T;f=new K;f.ke=G(16);E(f,f.kd,A(23));n
=j.kU.lZ.lY;if(n.kp===null)n.kp=W(n.kw.$meta.name);j=n.kp;E(f,f.kd,j);j=new I;k=f.ke;l=k.data;c=f.kd;d=l.length;if(c>=0&&c<=(d-0|0)){j.kf=L(k.data,0,c);m.kg=1;m.kh=1;m.kj=j;m.lI=i;B(m);}f=new H;f.kg=1;f.kh=1;B(f);}f=f;f.mP=I7;f.k0=a;i=a.mf;g=i.kl;f.oj=g;h=i.kk;f.ok=h;f.oY=d;f.lD=e;j=a.lJ;i.kl=g;i.kk=h;DL(j,i);i=a.lJ;j=a.mf;i=Iu(i,j.kl,j.kk,1);if(i!==null)Eg(i,f);else{i=a.lJ;if(i.sv===Kd)Eg(i,f);}o=f.lj;i=Bw;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BD;j.kw=m;p=j;m.classObject
=p;}}b=BG(i,j);i=b<0?null:i.k3.data[b];if(i!==null){j=i.kA;if(j.ki<i.la){S(j,f);b=i.k6;c=i.kA.ki;if(b>c)c=b;i.k6=c;if(BC(f,BB)){f=f;f.k0=null;f.lq=null;f.lr=null;f.lA=0;f.lv=1;f.lj=0;f.lz=0;f.ln=0;f.lK=null;f.lD=(-1);}}else if(BC(f,BB)){f=f;f.k0=null;f.lq=null;f.lr=null;f.lA=0;f.lv=1;f.lj=0;f.lz=0;f.ln=0;f.lK=null;f.lD=(-1);}}return o;},
T$=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a.qf.data[d]=b;a.qi.data[d]=c;a.si=b;a.sj=c;if(!a.p_.ki)return 0;e=a.mf;f=b;g=c;e.kl=f;e.kk=g;Fc(a.me,e);CE();h=Bw;c=BG(h,M(Bb));i=c<0?null:h.k3.data[c];if(i===null){i=new CK;h=new Bh;h.kJ=0;h.km=R(C,4);i.kA=h;i.la=100;a:{try{h=CU(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{h=CS(M(Bb),null);CV(h,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}h=null;}i.kU=h;if(h===null){h=new BA;i=new K;i.ke
=G(16);E(i,i.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);e=M(Bb).kp;E(i,i.kd,e);e=new I;j=i.ke;k=j.data;c=i.kd;d=k.length;if(c>=0&&c<=(d-0|0)){e.kf=L(j.data,0,c);h.kg=1;h.kh=1;h.kj=e;B(h);}e=new H;e.kg=1;e.kh=1;B(e);}Cj(Bw,M(Bb),i);}e=i.kA;b=e.ki;if(b){if(!b){e=new BO;e.kg=1;e.kh=1;e.kj=A(22);B(e);}b=b-1|0;e.ki=b;j=e.km.data;e=j[b];j[b]=null;}else b:{try{e=C$(i.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){h=$$je;}else{throw $$e;}}l=new T;e=new K;e.ke=G(16);E(e,e.kd,A(23));m
=i.kU.lZ.lY;if(m.kp===null)m.kp=W(m.kw.$meta.name);i=m.kp;E(e,e.kd,i);i=new I;j=e.ke;k=j.data;c=e.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);l.kg=1;l.kh=1;l.kj=i;l.lI=h;B(l);}e=new H;e.kg=1;e.kh=1;B(e);}e=e;e.mP=Jd;e.k0=a;h=a.mf;e.oj=h.kl;e.ok=h.kk;e.oY=d;h=a.p_;CA(h);j=h.km;h.n4=j;h.mV=h.mV+1|0;j=j;n=0;o=h.ki;while(n<o){i=j.data[n];if(i.sF==d&&LG(h,i,1)){e.lq=i.rm;e.lr=i.qC;if(IG(i.rB,e))e.lj=1;}n=n+1|0;}FS(h);p=e.lj;h=Bw;l=e.constructor;if(l===null)i=null;else{i=l.classObject;if(i===null){i=new BD;i.kw
=l;q=i;l.classObject=q;}}b=BG(h,i);h=b<0?null:h.k3.data[b];if(h!==null){i=h.kA;if(i.ki<h.la){S(i,e);b=h.k6;c=h.kA.ki;if(b>c)c=b;h.k6=c;if(BC(e,BB)){e=e;e.k0=null;e.lq=null;e.lr=null;e.lA=0;e.lv=1;e.lj=0;e.lz=0;e.ln=0;e.lK=null;e.lD=(-1);}}else if(BC(e,BB)){e=e;e.k0=null;e.lq=null;e.lr=null;e.lA=0;e.lv=1;e.lj=0;e.lz=0;e.ln=0;e.lK=null;e.lD=(-1);}}return p;},
Mv=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;a.ti.data[d]=0;a.qf.data[d]=b;a.qi.data[d]=c;if(!a.p_.ki)return 0;f=a.mf;g=b;h=c;f.kl=g;f.kk=h;Fc(a.me,f);CE();i=Bw;c=BG(i,M(Bb));j=c<0?null:i.k3.data[c];if(j===null){j=new CK;i=new Bh;i.kJ=0;i.km=R(C,4);j.kA=i;j.la=100;a:{try{i=CU(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{i=CS(M(Bb),null);CV(i,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}i=null;}j.kU=i;if(i===null){i=new BA;j
=new K;j.ke=G(16);E(j,j.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);f=M(Bb).kp;E(j,j.kd,f);f=new I;k=j.ke;l=k.data;c=j.kd;d=l.length;if(c>=0&&c<=(d-0|0)){f.kf=L(k.data,0,c);i.kg=1;i.kh=1;i.kj=f;B(i);}f=new H;f.kg=1;f.kh=1;B(f);}Cj(Bw,M(Bb),j);}f=j.kA;b=f.ki;if(b){if(!b){f=new BO;f.kg=1;f.kh=1;f.kj=A(22);B(f);}b=b-1|0;f.ki=b;k=f.km.data;f=k[b];k[b]=null;}else b:{try{f=C$(j.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){i=$$je;}else{throw $$e;}}m=new T;f=new K;f.ke=G(16);E(f,
f.kd,A(23));n=j.kU.lZ.lY;if(n.kp===null)n.kp=W(n.kw.$meta.name);j=n.kp;E(f,f.kd,j);j=new I;k=f.ke;l=k.data;c=f.kd;d=l.length;if(c>=0&&c<=(d-0|0)){j.kf=L(k.data,0,c);m.kg=1;m.kh=1;m.kj=j;m.lI=i;B(m);}f=new H;f.kg=1;f.kh=1;B(f);}f=f;f.mP=Hx;f.k0=a;i=a.mf;f.oj=i.kl;f.ok=i.kk;f.oY=d;f.lD=e;i=a.p_;CA(i);k=i.km;i.n4=k;i.mV=i.mV+1|0;k=k;o=0;p=i.ki;while(o<p){j=k.data[o];if(j.sF==d&&j.uU==e){CA(i);if(I3(i,j,1)){f.lq=j.rm;f.lr=j.qC;if(IG(j.rB,f))f.lj=1;m=Bw;n=j.constructor;if(n===null)q=null;else{q=n.classObject;if(q
===null){q=new BD;q.kw=n;r=q;n.classObject=r;}}b=BG(m,q);m=b<0?null:m.k3.data[b];if(m!==null){q=m.kA;if(q.ki<m.la){S(q,j);b=m.k6;c=m.kA.ki;if(b>c)c=b;m.k6=c;if(BC(j,BB))j.bt();}else if(BC(j,BB))j.bt();}}}o=o+1|0;}FS(i);s=f.lj;i=Bw;m=f.constructor;if(m===null)j=null;else{j=m.classObject;if(j===null){j=new BD;j.kw=m;q=j;m.classObject=q;}}b=BG(i,j);i=b<0?null:i.k3.data[b];if(i!==null){j=i.kA;if(j.ki<i.la){S(j,f);b=i.k6;c=i.kA.ki;if(b>c)c=b;i.k6=c;if(BC(f,BB)){f=f;f.k0=null;f.lq=null;f.lr=null;f.lA=0;f.lv=1;f.lj
=0;f.lz=0;f.ln=0;f.lK=null;f.lD=(-1);}}else if(BC(f,BB)){f=f;f.k0=null;f.lq=null;f.lr=null;f.lA=0;f.lv=1;f.lj=0;f.lz=0;f.ln=0;f.lK=null;f.lD=(-1);}}return s;},
AEB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,$$je;a.si=b;a.sj=c;if(!S_(a,b,c))return 0;d=a.mf;e=b;f=c;d.kl=e;d.kk=f;Fc(a.me,d);CE();g=Bw;c=BG(g,M(Bb));h=c<0?null:g.k3.data[c];if(h===null){h=new CK;g=new Bh;g.kJ=0;g.km=R(C,4);h.kA=g;h.la=100;a:{try{g=CU(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{g=CS(M(Bb),null);CV(g,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}g=null;}h.kU=g;if(g===null){g=new BA;h=new K;h.ke=G(16);E(h,h.kd,A(21));if
(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);d=M(Bb).kp;E(h,h.kd,d);d=new I;i=h.ke;j=i.data;c=h.kd;k=j.length;if(c>=0&&c<=(k-0|0)){d.kf=L(i.data,0,c);g.kg=1;g.kh=1;g.kj=d;B(g);}d=new H;d.kg=1;d.kh=1;B(d);}Cj(Bw,M(Bb),h);}d=h.kA;b=d.ki;if(b){if(!b){d=new BO;d.kg=1;d.kh=1;d.kj=A(22);B(d);}b=b-1|0;d.ki=b;i=d.km.data;d=i[b];i[b]=null;}else b:{try{d=C$(h.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){g=$$je;}else{throw $$e;}}l=new T;d=new K;d.ke=G(16);E(d,d.kd,A(23));m=h.kU.lZ.lY;if(m.kp===
null)m.kp=W(m.kw.$meta.name);h=m.kp;E(d,d.kd,h);h=new I;i=d.ke;j=i.data;c=d.kd;k=j.length;if(c>=0&&c<=(k-0|0)){h.kf=L(i.data,0,c);l.kg=1;l.kh=1;l.kj=h;l.lI=g;B(l);}d=new H;d.kg=1;d.kh=1;B(d);}d=d;d.mP=Ln;d.k0=a;g=a.mf;e=g.kl;d.oj=e;f=g.kk;d.ok=f;h=a.lJ;g.kl=e;g.kk=f;DL(h,g);g=a.lJ;h=a.mf;g=Iu(g,h.kl,h.kk,1);if(g===null)g=a.lJ;Eg(g,d);n=d.lj;g=Bw;l=d.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new BD;h.kw=l;o=h;l.classObject=o;}}b=BG(g,h);g=b<0?null:g.k3.data[b];if(g!==null){h=g.kA;if(h.ki
<g.la){S(h,d);b=g.k6;c=g.kA.ki;if(b>c)c=b;g.k6=c;if(BC(d,BB)){d=d;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}else if(BC(d,BB)){d=d;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}return n;},
AOl=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;d=a.qA;if(d===null)d=a.lJ;e=a.mf;f=a.si;g=a.sj;e.kl=f;e.kk=g;Fc(a.me,e);CE();h=Bw;i=BG(h,M(Bb));j=i<0?null:h.k3.data[i];if(j===null){j=new CK;h=new Bh;h.kJ=0;h.km=R(C,4);j.kA=h;j.la=100;a:{try{h=CU(M(Bb),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{h=CS(M(Bb),null);CV(h,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}h=null;}j.kU=h;if(h===null){d=new BA;h=new K;h.ke=G(16);E(h,h.kd,A(21));if
(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);e=M(Bb).kp;E(h,h.kd,e);e=new I;k=h.ke;l=k.data;i=h.kd;m=l.length;if(i>=0&&i<=(m-0|0)){e.kf=L(k.data,0,i);d.kg=1;d.kh=1;d.kj=e;B(d);}d=new H;d.kg=1;d.kh=1;B(d);}Cj(Bw,M(Bb),j);}e=j.kA;n=e.ki;if(n){if(!n){d=new BO;d.kg=1;d.kh=1;d.kj=A(22);B(d);}n=n-1|0;e.ki=n;k=e.km.data;e=k[n];k[n]=null;}else b:{try{e=C$(j.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){e=$$je;}else{throw $$e;}}h=new T;d=new K;d.ke=G(16);E(d,d.kd,A(23));o=j.kU.lZ.lY;if(o.kp===
null)o.kp=W(o.kw.$meta.name);j=o.kp;E(d,d.kd,j);j=new I;k=d.ke;l=k.data;i=d.kd;m=l.length;if(i>=0&&i<=(m-0|0)){j.kf=L(k.data,0,i);h.kg=1;h.kh=1;h.kj=j;h.lI=e;B(h);}d=new H;d.kg=1;d.kh=1;B(d);}e=e;e.mP=LN;e.k0=a;h=a.mf;e.oj=h.kl;e.ok=h.kk;e.An=b;e.Am=c;Eg(d,e);p=e.lj;d=Bw;j=e.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BD;h.kw=j;q=h;j.classObject=q;}}n=BG(d,h);d=n<0?null:d.k3.data[n];if(d!==null){h=d.kA;if(h.ki<d.la){S(h,e);n=d.k6;i=d.kA.ki;if(n>i)i=n;d.k6=i;if(BC(e,BB)){d=e;d.k0=null;d.lq
=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}else if(BC(e,BB)){d=e;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}return p;},
ADF=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=null;d=a.p_;CA(d);e=d.km;d.n4=e;d.mV=d.mV+1|0;e=e;f=0;g=d.ki;h=null;i=null;j=null;a:while(true){if(f>=g){FS(d);if(c!==null){CE();b=Bw;k=c.constructor;if(k===null)d=null;else{d=k.classObject;if(d===null){d=new BD;d.kw=k;l=d;k.classObject=l;}}m=BG(b,d);b=m<0?null:b.k3.data[m];if(b!==null){d=b.kA;if(d.ki<b.la){S(d,c);m=b.k6;f=b.kA.ki;if(m>f)f=m;b.k6=f;if(BC(c,BB)){b=c;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.lK=null;b.lD=(-1);}}else if(BC(c,
BB)){b=c;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.lK=null;b.lD=(-1);}}}return;}k=e.data[f];if(k.qC===b){CA(d);if(I3(d,k,1)){if(c===null){CE();c=Bw;n=BG(c,M(Bb));l=n<0?null:c.k3.data[n];if(l===null){l=new CK;c=new Bh;c.kJ=0;c.km=R(C,4);l.kA=c;l.la=100;b:{try{c=CU(M(Bb),h);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{c=CS(M(Bb),i);CV(c,1);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}c=null;}l.kU=c;if(c===null){b=new BA;c=new K;c.ke
=G(16);E(c,c.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);d=M(Bb).kp;E(c,c.kd,d);d=new I;e=c.ke;o=e.data;f=c.kd;g=o.length;if(f>=0&&f<=(g-0|0)){d.kf=L(e.data,0,f);b.kg=1;b.kh=1;b.kj=d;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(Bb),l);}c:{c=l.kA;m=c.ki;if(m){if(!m)break a;m=m-1|0;c.ki=m;o=c.km.data;c=o[m];o[m]=null;}else try{c=C$(l.kU,j);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){c=$$je;d=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));h=l.kU.lZ.lY;if(h.kp===null)h.kp=W(h.kw.$meta.name);k
=h.kp;E(b,b.kd,k);k=new I;e=b.ke;o=e.data;f=b.kd;g=o.length;if(f>=0&&f<=(g-0|0)){k.kf=L(e.data,0,f);d.kg=1;d.kh=1;d.kj=k;d.lI=c;B(d);}b=new H;b.kg=1;b.kh=1;B(b);}else{throw $$e;}}}c=c;c.mP=Hx;c.k0=a;c.oj=(-2.147483648E9);c.ok=(-2.147483648E9);}c.lq=k.rm;c.lr=k.qC;c.oY=k.sF;c.lD=k.uU;IG(k.rB,c);}}f=f+1|0;}b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);},
CW=(a,b)=>{let c,d,e,f;a:{c=a.lJ;d=b.lb;if(d!==null){if(d===c)break a;e=DO(d.kD,b,1);if(e!=(-1)){f=d.kD;CA(f);f=Do(f,e);d=d.lN;if(d!==null)Ek(d,f);f.lb=null;f.x(null);}}S(c.kD,b);b.lb=c;b.x(c.lN);}},
Ek=(a,b)=>{let c,d,e;c=0;d=a.sd.data.length;while(c<d){e=a.sd.data;if(b===e[c]){e[c]=null;Of(a,b,a.qf.data[c],a.qi.data[c],c);}c=c+1|0;}if(b===a.sK){a.sK=null;Of(a,b,a.si,a.sj,(-1));}},
ALR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.n_===b)return 1;CE();c=Bw;d=BG(c,M(Db));e=d<0?null:c.k3.data[d];if(e===null){e=new CK;c=new Bh;c.kJ=0;c.km=R(C,4);e.kA=c;e.la=100;a:{try{c=CU(M(Db),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{c=CS(M(Db),null);CV(c,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}c=null;}e.kU=c;if(c===null){b=new BA;c=new K;c.ke=G(16);E(c,c.kd,A(21));if(M(Db).kp===null)M(Db).kp=W(M(Db).kw.$meta.name);f=M(Db).kp;E(c,
c.kd,f);f=new I;g=c.ke;h=g.data;d=c.kd;i=h.length;if(d>=0&&d<=(i-0|0)){f.kf=L(g.data,0,d);b.kg=1;b.kh=1;b.kj=f;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(Db),e);}f=e.kA;j=f.ki;if(j){if(!j){b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);}j=j-1|0;f.ki=j;g=f.km.data;f=g[j];g[j]=null;}else b:{try{f=C$(e.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){f=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));k=e.kU.lZ.lY;if(k.kp===null)k.kp=W(k.kw.$meta.name);e=k.kp;E(b,b.kd,e);e=new I;g=b.ke;h
=g.data;d=b.kd;i=h.length;if(d>=0&&d<=(i-0|0)){e.kf=L(g.data,0,d);c.kg=1;c.kh=1;c.kj=e;c.lI=f;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}f=f;f.k0=a;f.xR=MH;c=a.n_;if(c!==null){f.sH=0;f.oV=b;c.bl(f);}j=f.ln?0:1;if(j){a.n_=b;if(b!==null){f.sH=1;f.oV=c;b.bl(f);j=f.ln?0:1;if(!j)a.n_=c;}}b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.kw=e;l=c;e.classObject=l;}}d=BG(b,c);b=d<0?null:b.k3.data[d];if(b!==null){c=b.kA;if(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if(d>i)i=d;b.k6=i;if(BC(f,BB)){b=
f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.oV=null;}}else if(BC(f,BB)){b=f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.oV=null;}}return j;},
AJg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;if(a.qA===b)return 1;CE();c=Bw;d=BG(c,M(Db));e=d<0?null:c.k3.data[d];if(e===null){e=new CK;c=new Bh;c.kJ=0;c.km=R(C,4);e.kA=c;e.la=100;a:{try{c=CU(M(Db),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{c=CS(M(Db),null);CV(c,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}c=null;}e.kU=c;if(c===null){b=new BA;c=new K;c.ke=G(16);E(c,c.kd,A(21));if(M(Db).kp===null)M(Db).kp=W(M(Db).kw.$meta.name);f=M(Db).kp;E(c,
c.kd,f);f=new I;g=c.ke;h=g.data;d=c.kd;i=h.length;if(d>=0&&d<=(i-0|0)){f.kf=L(g.data,0,d);b.kg=1;b.kh=1;b.kj=f;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(Db),e);}f=e.kA;j=f.ki;if(j){if(!j){b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);}j=j-1|0;f.ki=j;g=f.km.data;f=g[j];g[j]=null;}else b:{try{f=C$(e.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){f=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));k=e.kU.lZ.lY;if(k.kp===null)k.kp=W(k.kw.$meta.name);e=k.kp;E(b,b.kd,e);e=new I;g=b.ke;h
=g.data;d=b.kd;i=h.length;if(d>=0&&d<=(i-0|0)){e.kf=L(g.data,0,d);c.kg=1;c.kh=1;c.kj=e;c.lI=f;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}f=f;f.k0=a;f.xR=NV;c=a.qA;if(c!==null){f.sH=0;f.oV=b;c.bl(f);}j=f.ln?0:1;if(j){a.qA=b;if(b!==null){f.sH=1;f.oV=c;b.bl(f);j=f.ln?0:1;if(!j)a.qA=c;}}b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.kw=e;l=c;e.classObject=l;}}d=BG(b,c);b=d<0?null:b.k3.data[d];if(b!==null){c=b.kA;if(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if(d>i)i=d;b.k6=i;if(BC(f,BB)){b=
f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.oV=null;}}else if(BC(f,BB)){b=f;b.k0=null;b.lq=null;b.lr=null;b.lA=0;b.lv=1;b.lj=0;b.lz=0;b.ln=0;b.oV=null;}}return j;},
C8=a=>{return a.me;},
S_=(a,b,c)=>{let d,e,f,g,h;d=a.me;e=d.qo;f=e+d.p1|0;g=d.qp;h=g+d.m1|0;c=(B7.lE.height-1|0)-c|0;return b>=e&&b<f&&c>=g&&c<h?1:0;};
let BB=F(0);
function F6(){let a=this;C.call(a);a.k0=null;a.lq=null;a.lr=null;a.lA=0;a.lv=0;a.lj=0;a.lz=0;a.ln=0;}
let AR5=a=>{a.lj=1;},
AK6=a=>{return a.lv;},
IR=a=>{return a.lz;},
Gw=a=>{return a.ln;};
let Dz=F(0);
let Cb=F(0);
function BF(){let a=this;C.call(a);a.kx=null;a.kq=0;}
let AP6=a=>{return a.kq;},
AF6=a=>{return a.kx;},
Y9=(a,b)=>{return a!==b?0:1;};
let HJ=F(BF);
let Kd=null,WE=null,AFq=null,XZ=null;
let APf=()=>{let b,c,d;b=new HJ;b.kx=A(24);b.kq=0;Kd=b;c=new HJ;c.kx=A(25);c.kq=1;WE=c;d=new HJ;d.kx=A(26);d.kq=2;AFq=d;XZ=V(HJ,[b,c,d]);};
function Ci(){let a=this;C.call(a);a.lN=null;a.lb=null;a.w1=null;a.tp=null;a.qN=null;a.zJ=null;a.sv=null;a.nP=0;a.kV=0;a.kH=0.0;a.kI=0.0;a.lf=0.0;a.li=0.0;a.om=0.0;a.on=0.0;a.nl=0.0;a.nm=0.0;a.mO=0.0;a.pD=null;}
let EN=a=>{let b,c;b=new Lp;b.kJ=1;b.km=R(C,0);c=new Gd;c.pO=1;c.mY=Ba(0);b.rd=c;a.w1=b;b=new Lp;b.kJ=1;b.km=R(C,0);c=new Gd;c.pO=1;c.mY=Ba(0);b.rd=c;a.tp=b;b=new Bh;b.kJ=1;b.km=R(C,0);a.qN=b;a.sv=Kd;a.nP=1;a.nl=1.0;a.nm=1.0;b=new BM;b.k_=1.0;b.k$=1.0;b.k9=1.0;b.lc=1.0;CO(b);a.pD=b;},
AYb=()=>{let a=new Ci();EN(a);return a;},
Fg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=a.qN;if(!c.ki)return;d=a.lN;d!==null&&!d.vn;a:{try{e=0;while(e<c.ki){d=Q(c,e);if(d.bx(b)&&e<c.ki){f=Q(c,e)===d?e:DO(c,d,1);if(f!=(-1)){Do(c,f);d.by(null);e=e+(-1)|0;}}e=e+1|0;}}catch($$e){$$je=Bc($$e);if($$je instanceof BA){g=$$je;break a;}else{throw $$e;}}return;}h=a.T();c=new BA;d=new K;d.ke=G(16);E(d,d.kd,A(27));i=h.kf.length;e=128;if(i<e)e=i;j=Ck(h,0,e);E(d,d.kd,j);j=new I;k=d.ke;l=k.data;e=d.kd;m=l.length;if(e>=0&&e<=(m-0|0)){j.kf=L(k.data,0,e);c.kg=1;c.kh=1;c.kj
=j;c.lI=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);},
Eg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;if(b.k0===null)b.k0=a.lN;b.lq=a;CE();c=Bw;d=BG(c,M(Bh));e=d<0?null:c.k3.data[d];if(e===null){e=new CK;c=new Bh;c.kJ=0;c.km=R(C,4);e.kA=c;e.la=100;a:{try{c=CU(M(Bh),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{c=CS(M(Bh),null);CV(c,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}c=null;}e.kU=c;if(c===null){b=new BA;c=new K;c.ke=G(16);E(c,c.kd,A(21));if(M(Bh).kp===null)M(Bh).kp=W(M(Bh).kw.$meta.name);f
=M(Bh).kp;E(c,c.kd,f);f=new I;g=c.ke;h=g.data;d=c.kd;i=h.length;if(d>=0&&d<=(i-0|0)){f.kf=L(g.data,0,d);b.kg=1;b.kh=1;b.kj=f;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(Bh),e);}f=e.kA;j=f.ki;if(j){if(!j){b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);}j=j-1|0;f.ki=j;g=f.km.data;f=g[j];g[j]=null;}else b:{try{f=C$(e.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){f=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));k=e.kU.lZ.lY;if(k.kp===null)k.kp=W(k.kw.$meta.name);e=k.kp;E(b,b.kd,e);e=
new I;g=b.ke;h=g.data;d=b.kd;i=h.length;if(d>=0&&d<=(i-0|0)){e.kf=L(g.data,0,d);c.kg=1;c.kh=1;c.kj=e;c.lI=f;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}f=f;c=a.lb;while(c!==null){S(f,c);c=c.lb;}c:{try{g=f.km;j=f.ki-1|0;}catch($$e){$$je=Bc($$e);b=$$je;break c;}d:{try{while(true){if(j<0)break d;Js(g.data[j],b,1);if(IR(b))break;j=j+(-1)|0;}j=Gw(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.km;d=0;i=f.ki;b=null;if(d>i){b=new Bj;b.kg=1;b.kh=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ki=0;b=Bw;m=f.constructor;if(m
===null)k=null;else{k=m.classObject;if(k===null){k=new BD;k.kw=m;c=k;m.classObject=c;}}d=BG(b,k);b=d<0?null:b.k3.data[d];if(b!==null){c=b.kA;if(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if(d>i)i=d;b.k6=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}e:{try{Js(a,b,1);if(!IR(b))break e;j=Gw(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.km;d=0;i=f.ki;b=null;if(d>i){b=new Bj;b.kg=1;b.kh=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ki=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===
null){c=new BD;c.kw=e;m=c;e.classObject=m;}}d=BG(b,c);b=d<0?null:b.k3.data[d];if(b!==null){c=b.kA;if(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if(d>i)i=d;b.k6=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}f:{try{Js(a,b,0);if(AK6(b))break f;j=Gw(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.km;d=0;i=f.ki;b=null;if(d>i){b=new Bj;b.kg=1;b.kh=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ki=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.kw=e;m=c;e.classObject=m;}}d
=BG(b,c);b=d<0?null:b.k3.data[d];if(b!==null){c=b.kA;if(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if(d>i)i=d;b.k6=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}g:{try{if(!IR(b))break g;j=Gw(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.km;d=0;i=f.ki;b=null;if(d>i){b=new Bj;b.kg=1;b.kh=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ki=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.kw=e;m=c;e.classObject=m;}}d=BG(b,c);b=d<0?null:b.k3.data[d];if(b!==null){c=b.kA;if
(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if(d>i)i=d;b.k6=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}try{j=0;d=f.ki;}catch($$e){$$je=Bc($$e);b=$$je;break c;}h:{try{while(j<d){Js(g.data[j],b,0);if(IR(b))break h;j=j+1|0;}j=Gw(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.km;d=0;i=f.ki;b=null;if(d>i){b=new Bj;b.kg=1;b.kh=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ki=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.kw=e;m=c;e.classObject=m;}}d=BG(b,c);b=d<0
?null:b.k3.data[d];if(b!==null){c=b.kA;if(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if(d>i)i=d;b.k6=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}try{j=Gw(b);}catch($$e){$$je=Bc($$e);b=$$je;break c;}g=f.km;d=0;i=f.ki;b=null;if(d>i){b=new Bj;b.kg=1;b.kh=1;B(b);}while(d<i){h=g.data;l=d+1|0;h[d]=b;d=l;}f.ki=0;b=Bw;e=f.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.kw=e;m=c;e.classObject=m;}}d=BG(b,c);b=d<0?null:b.k3.data[d];if(b!==null){c=b.kA;if(c.ki<b.la){S(c,f);d=b.k6;i=b.kA.ki;if
(d>i)i=d;b.k6=i;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}return j;}g=f.km;j=0;d=f.ki;c=null;if(j>d){b=new Bj;b.kg=1;b.kh=1;B(b);}while(j<d){h=g.data;i=j+1|0;h[j]=c;j=i;}f.ki=0;if(f===null){f=new Bj;f.kg=1;f.kh=1;f.kj=A(28);B(f);}c=Bw;m=f.constructor;if(m===null)e=null;else{e=m.classObject;if(e===null){e=new BD;e.kw=m;k=e;m.classObject=k;}}j=BG(c,e);c=j<0?null:c.k3.data[j];if(c!==null){e=c.kA;if(e.ki<c.la){S(e,f);j=c.k6;d=c.kA.ki;if(j>d)d=j;c.k6=d;if(BC(f,BB))f.bt();}else if(BC(f,BB))f.bt();}B(b);},
Js=(a,b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(b.lq===null){b=new Bj;b.kg=1;b.kh=1;b.kj=A(29);B(b);}d=!c?a.w1:a.tp;if(!d.ki)return b.ln;b.lr=a;b.lA=c;if(b.k0===null)b.k0=a.lN;a:{try{ANs(d);e=0;f=d.ki;while(e<f){if(IG(Q(d,e),b))AR5(b);e=e+1|0;}APA(d);}catch($$e){$$je=Bc($$e);if($$je instanceof BA){g=$$je;break a;}else{throw $$e;}}return b.ln;}h=a.T();d=new BA;b=new K;b.ke=G(16);E(b,b.kd,A(27));i=h.kf.length;e=128;if(i<e)e=i;h=Ck(h,0,e);E(b,b.kd,h);h=new I;j=b.ke;k=j.data;e=b.kd;f=k.length;if(e>=0&&e<=(f-0|0)){h.kf
=L(j.data,0,e);d.kg=1;d.kh=1;d.kj=h;d.lI=g;B(d);}b=new H;b.kg=1;b.kh=1;B(b);},
Sk=(a,b,c,d)=>{if(d&&a.sv!==Kd)return null;if(!a.nP)return null;if(!(b>=0.0&&b<a.lf&&c>=0.0&&c<a.li))a=null;return a;},
AVl=a=>{return a.lN;},
AO7=(a,b)=>{a.lN=b;},
AVq=(a,b)=>{a.lb=b;},
AU8=a=>{return a.nP;},
Cg=a=>{return a.kH;},
Df=a=>{return a.kI;},
C4=(a,b,c)=>{if(!(a.kH===b&&a.kI===c)){a.kH=b;a.kI=c;}},
AEy=(a,b,c,d)=>{if(d&16)b=b-a.lf;else if(!(d&8))b=b-a.lf/2.0;if(d&2)c=c-a.li;else if(!(d&4))c=c-a.li/2.0;if(!(a.kH===b&&a.kI===c)){a.kH=b;a.kI=c;}},
DU=a=>{return a.lf;},
Ra=a=>{return a.li;},
AYu=a=>{return;},
AU0=a=>{return;},
AYv=a=>{return;},
AU_=a=>{return;},
Iv=(a,b,c,d,e)=>{if(!(a.kH===b&&a.kI===c)){a.kH=b;a.kI=c;}if(!(a.lf===d&&a.li===e)){a.lf=d;a.li=e;}},
I$=(a,b)=>{if(b!==0.0)a.mO=(a.mO+b)%360.0;},
Gg=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bj;c.kg=1;c.kh=1;c.kj=A(30);B(c);}c=a.lb;if(c===null)return 0;d=c.kD;e=d.ki;if(e<=1)return 0;f=e-1|0;if(b<f)f=b;if(f<e){if(d.km.data[f]===a)return 0;CA(d);if(!I3(d,a,1))return 0;CA(d);Tc(d,f,a);return 1;}g=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,f,10);E(c,c.kd,A(19));b=d.ki;J(c,c.kd,b,10);d=new I;h=c.ke;i=h.data;f=c.kd;e=i.length;if(f>=0&&f<=(e-0|0)){d.kf=L(h.data,0,f);g.kg=1;g.kh=1;g.kj=d;B(g);}c=new H;c.kg=1;c.kh=1;B(c);},
U3=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.lb;if(c!==null){d=c.lb;if(d!==null){e=d.lb;if(e!==null){f=e.lb;if(f!==null){g=f.lb;if(g!==null){h=g.lb;if(h!==null){i=h.lb;if(i!==null){j=i.lb;if(j!==null){k=j.lb;if(k!==null)U3(k,b);DL(j,b);}DL(i,b);}DL(h,b);}DL(g,b);}DL(f,b);}DL(e,b);}DL(d,b);}DL(c,b);}DL(a,b);return b;},
DL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=a.mO;d=a.nl;e=a.nm;f=a.kH;g=a.kI;if(c!==0.0){h=c*0.01745329238474369;i=Zi(h);j=J5(h);k=a.om;l=a.on;m=b.kl-f-k;n=b.kk-g-l;b.kl=(m*i+n*j)/d+k;b.kk=(m* -j+n*i)/e+l;}else if(d===1.0&&e===1.0){b.kl=b.kl-f;b.kk=b.kk-g;}else{k=a.om;l=a.on;b.kl=(b.kl-f-k)/d+k;b.kk=(b.kk-g-l)/e+l;}return b;},
AN$=(a,b)=>{VW(a,b);},
VW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(!a.kV)return;c=Ih;d=b.nb;if(d!==c){if(d===null){b=new BO;b.kg=1;b.kh=1;b.kj=A(31);B(b);}if(!b.te){c=new BO;c.kg=1;c.kh=1;c.kj=A(32);B(c);}Gk(b.lt);b.nb=null;Go(b,c);}c=a.lN;if(c!==null){d=c.w6;c=b.vA;c.k_=d.k_;c.k$=d.k$;c.k9=d.k9;c.lc=d.lc;}e=a.kH;f=a.kI;g=a.om;h=a.on;i=a.lf;j=a.li;k=a.nl;l=a.nm;m=a.mO;c=b.vA;AJN(b,e,f,g,h,i,j,k,l,m,c,c,c,c);},
Fo=(a,b)=>{a.kV=b;if(b)BS=1;},
AW8=a=>{return a.kV;},
Tn=a=>{let b,c,d,e;b=a.zJ;if(b===null){b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.kw=b;d=c;b.classObject=d;}}if(c.kp===null)c.kp=W(c.kw.$meta.name);b=c.kp;e=Ff(b,46,b.kf.length-1|0);if(e!=(-1))b=Ck(b,e+1|0,b.kf.length);}return b;};
let MN=F(0);
function BJ(){let a=this;Ci.call(a);a.kD=null;a.t_=null;a.u0=null;a.p9=null;a.nT=0;a.Ab=null;}
let LM=null;
let R5=(a,b)=>{let c,d,e,f;Fg(a,b);c=a.kD;CA(c);d=c.km;c.n4=d;c.mV=c.mV+1|0;d=d;e=0;f=a.kD.ki;while(e<f){d.data[e].be(b);e=e+1|0;}FS(a.kD);},
AIn=(a,b,c)=>{let d;if(a.nT){d=K3(a);Dl(a.p9,b.pu.lF);if(b.mL)Ep(b);Dl(b.pu,d.lF);if(b.mL)GH(b);}Qz(a,b,c);if(a.nT){d=a.p9;if(b.mL)Ep(b);Dl(b.pu,d.lF);if(b.mL)GH(b);}},
Qz=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=c*a.pD.lc;d=a.kD;CA(d);e=d.km;d.n4=e;d.mV=d.mV+1|0;f=e;g=a.Ab;if(g===null){if(a.nT){h=0;i=d.ki;while(h<i){j=f.data[h];if(j.nP)j.bQ(b,c);h=h+1|0;}}else{k=a.kH;l=a.kI;a.kH=0.0;a.kI=0.0;h=0;i=d.ki;while(h<i){j=f.data[h];if(j.nP){m=j.kH;n=j.kI;j.kH=m+k;j.kI=n+l;j.bQ(b,c);j.kH=m;j.kI=n;}h=h+1|0;}a.kH=k;a.kI=l;}}else{o=g.nz;p=o+g.nA;q=g.ny;r=q+g.nu;if(a.nT){s=0;i=d.ki;while(s<i){j=f.data[s];if(j.nP){m=j.kH;n=j.kI;if(m<=p&&n<=r&&m+j.lf>=o&&n+j.li>=q)j.bQ(b,c);}s=s
+1|0;}}else{k=a.kH;l=a.kI;a.kH=0.0;a.kI=0.0;s=0;i=d.ki;while(s<i){j=f.data[s];if(j.nP){m=j.kH;n=j.kI;if(m<=p&&n<=r&&m+j.lf>=o&&n+j.li>=q){j.kH=m+k;j.kI=n+l;j.bQ(b,c);j.kH=m;j.kI=n;}}s=s+1|0;}a.kH=k;a.kI=l;}}FS(d);},
Pt=(a,b)=>{let c;VW(a,b);if(a.nT){c=K3(a);Dl(a.p9,b.rL.lF);Dl(b.rL,c.lF);b.o7=1;c=b.nb;if(c!==null){Gk(b.lt);b.nb=null;Go(b,c);}}AAJ(a,b);if(a.nT){c=a.p9;Dl(b.rL,c.lF);b.o7=1;}},
AAJ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.kD;CA(c);d=c.km;c.n4=d;c.mV=c.mV+1|0;e=d;if(a.nT){f=0;g=c.ki;while(f<g){h=e.data[f];if(h.nP&&!(!h.kV&&!(h instanceof BJ)))h.Z(b);f=f+1|0;}h=b.nb;if(h!==null){Gk(b.lt);b.nb=null;Go(b,h);}}else{i=a.kH;j=a.kI;a.kH=0.0;a.kI=0.0;k=0;g=c.ki;while(k<g){h=e.data[k];if(h.nP&&!(!h.kV&&!(h instanceof BJ))){l=h.kH;m=h.kI;h.kH=l+i;h.kI=m+j;h.Z(b);h.kH=l;h.kI=m;}k=k+1|0;}a.kH=i;a.kI=j;}FS(c);},
K3=a=>{let b,c,d,e,f;b=a.t_;c=a.om;d=a.on;AG0(b,a.kH+c,a.kI+d,a.mO,a.nl,a.nm);if(!(c===0.0&&d===0.0)){c= -c;e= -d;b.po=b.po+b.pp*c+b.pn*e;b.pq=b.pq+b.pr*c+b.ps*e;}f=a.lb;a:{while(true){if(f===null)break a;if(f.nT)break;f=f.lb;}}if(f!==null)AAO(b,f.t_);AQ1(a.u0,b);return a.u0;},
Iu=(a,b,c,d)=>{let e,f,g,h,i;if(d&&a.sv===WE)return null;if(!a.nP)return null;e=LM;f=a.kD;g=f.km;h=f.ki-1|0;while(true){if(h<0)return Sk(a,b,c,d);i=g.data[h];e.kl=b;e.kk=c;DL(i,e);f=i.J(e.kl,e.kk,d);if(f!==null)break;h=h+(-1)|0;}return f;},
AOF=(a,b)=>{let c,d,e,f;a.lN=b;c=a.kD;d=c.km;e=0;f=c.ki;while(e<f){d.data[e].x(b);e=e+1|0;}},
LW=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a.kV=b;if(b)BS=1;a:{if(c){d=a.kD;if(!CJ){if(d.kS===null){e=new C_;e.mu=d;e.my=1;d.kS=e;}e=CT(d.kS);}else{e=new Cw;e.k8=1;e.lg=d;e.mi=1;}b:while(true){if(!e.k8){e=new T;e.kg=1;e.kh=1;e.kj=A(17);B(e);}if(!(e.l3>=e.lg.ki?0:1))break a;d=Cq(e);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else{d=d;d.kV=b;if(b)BS=1;c:{if(c){d=d.kD;if(CJ){f=new Cw;f.k8=1;f.lg=d;f.mi=1;}else{if(d.kS===null){g=new C_;g.mu=d;g.my=1;d.kS=g;}f=CT(d.kS);}while(true){if(!f.k8){e=new T;e.kg=1;e.kh=1;e.kj=A(17);B(e);}if
(!(f.l3>=f.lg.ki?0:1))break c;d=Cq(f);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else{d=d;d.kV=b;if(b)BS=1;d:{if(c){d=d.kD;if(CJ){h=new Cw;h.k8=1;h.lg=d;h.mi=1;}else{if(d.kS===null){g=new C_;g.mu=d;g.my=1;d.kS=g;}h=CT(d.kS);}while(true){if(!h.k8){e=new T;e.kg=1;e.kh=1;e.kj=A(17);B(e);}if(!(h.l3>=h.lg.ki?0:1))break d;d=Cq(h);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else{d=d;d.kV=b;if(b)BS=1;e:{if(c){d=d.kD;if(CJ){i=new Cw;i.k8=1;i.lg=d;i.mi=1;}else{if(d.kS===null){g=new C_;g.mu=d;g.my=1;d.kS=g;}i=CT(d.kS);}while
(true){if(!i.k8){e=new T;e.kg=1;e.kh=1;e.kj=A(17);B(e);}if(!(i.l3>=i.lg.ki?0:1))break e;d=Cq(i);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else{d=d;d.kV=b;if(b)BS=1;f:{if(c){d=d.kD;if(CJ){j=new Cw;j.k8=1;j.lg=d;j.mi=1;}else{if(d.kS===null){g=new C_;g.mu=d;g.my=1;d.kS=g;}j=CT(d.kS);}while(true){if(!j.k8){e=new T;e.kg=1;e.kh=1;e.kj=A(17);B(e);}if(!(j.l3>=j.lg.ki?0:1))break f;d=Cq(j);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else{d=d;d.kV=b;if(b)BS=1;g:{if(c){d=d.kD;if(CJ){g=new Cw;g.k8=1;g.lg=d;g.mi=1;}else{if(d.kS
===null){g=new C_;Bu(g);g.mu=d;g.my=1;d.kS=g;}g=CT(d.kS);}while(true){if(!g.k8){e=new T;e.kg=1;e.kh=1;e.kj=A(17);B(e);}if(!(g.l3>=g.lg.ki?0:1))break g;d=Cq(g);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else{d=d;d.kV=b;if(b)BS=1;h:{if(c){d=d.kD;if(CJ){k=new Cw;Bu(k);k.k8=1;k.lg=d;k.mi=1;}else{if(d.kS===null)d.kS=L7(d,1);k=CT(d.kS);}while(true){if(!k.k8){e=new T;Hi(e,A(17));B(e);}if(!(k.l3>=k.lg.ki?0:1))break h;d=Cq(k);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else{d=d;d.kV=b;if(b)BS=1;i:{if(c){d=d.kD;if(CJ)l=Mx(d,
1);else{if(d.kS===null)d.kS=N9(d);l=CT(d.kS);}while(true){if(!l.k8)break b;if(!(l.l3>=l.lg.ki?0:1))break i;d=Cq(l);if(!(d instanceof BJ)){d.kV=b;if(b)BS=1;}else j:{d=d;Fo(d,b);if(c){d=GN(d.kD);while(true){if(!HX(d))break j;m=Cq(d);if(!(m instanceof BJ))Fo(m,b);else LW(m,b,c);}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}B(KX(A(17)));}}},
ACf=a=>{let b,c,d,e,f;b=new K;b.ke=G(128);Ug(a,b,1);c=b.kd-1|0;b.kd=c;d=new I;e=b.ke;f=e.data.length;if(c>=0&&c<=(f-0|0)){d.kf=L(e.data,0,c);return d;}b=new H;b.kg=1;b.kh=1;B(b);},
Ug=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=Tn(a);E(b,b.kd,d);e=b.kd;Bk(b,e,e+1|0);b.ke.data[e]=10;d=a.kD;CA(d);f=d.km;d.n4=f;d.mV=d.mV+1|0;g=f;h=0;i=a.kD.ki;j=c+1|0;while(h<i){k=0;while(k<c){E(b,b.kd,A(33));k=k+1|0;}d=g.data[h];if(d instanceof BJ)Ug(d,b,j);else{E(b,b.kd,d===null?A(2):d.T());e=b.kd;Bk(b,e,e+1|0);b.ke.data[e]=10;}h=h+1|0;}FS(a.kD);},
AWn=()=>{LM=new Z;};
let GO=F(0);
let DW=F(0);
let Hq=F();
let G7=F(0);
let B4=F();
let JI=null;
let IG=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,$$je;if(!(b instanceof Bb))return 0;Ms();switch(Ld.data[b.mP.kq]){case 1:break;case 2:return 0;case 3:return 0;default:c=b.lr;d=JI;e=b.oj;f=b.ok;d.kl=e;d.kk=f;U3(c,d);switch(Ld.data[b.mP.kq]){case 4:if(b.xw){g=b.k0;h=b.lr;i=b.lq;j=b.oY;k=b.lD;CE();d=Bw;l=BG(d,M(D7));c=l<0?null:d.k3.data[l];if(c===null){c=new CK;d=new Bh;d.kJ=0;d.km=R(C,4);c.kA=d;c.la=100;a:{try{d=CU(M(D7),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{d=CS(M(D7),
null);CV(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}d=null;}c.kU=d;if(d===null){d=new BA;c=new K;Bu(c);c.ke=G(16);BZ(c,c.kd,A(21));if(M(D7).kp===null)M(D7).kp=W(M(D7).kw.$meta.name);b=M(D7).kp;BZ(c,c.kd,b);b=new I;m=c.ke;n=m.data;l=c.kd;o=n.length;if(l>=0&&l<=(o-0|0)){b.kf=L(m.data,0,l);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;b.kg=1;b.kh=1;B(b);}Cj(Bw,M(D7),c);}b:{b=c.kA;p=b.ki;if(p){if(!p){b=new BO;b.kg=1;b.kh=1;b.kj=A(22);B(b);}p=p-1|0;b.ki=p;m=b.km.data;b=m[p];m[p]=null;}else try
{b=C$(c.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){d=$$je;i=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));g=c.kU.lZ.lY;if(g.kp===null)g.kp=W(g.kw.$meta.name);c=g.kp;E(b,b.kd,c);c=new I;m=b.ke;n=m.data;l=b.kd;o=n.length;if(l>=0&&l<=(o-0|0)){c.kf=L(m.data,0,l);i.kg=1;i.kh=1;Bl(i);i.kj=c;i.lI=d;B(i);}b=new H;b.kg=1;b.kh=1;B(b);}else{throw $$e;}}}b=b;b.qC=h;b.rm=i;b.rB=a;b.sF=j;b.uU=k;S(g.p_,b);}return 1;case 5:d=JI;AOB(a,b,d.kl,d.kk,b.oY,b.lD);return 1;case 6:return 1;case 7:return 0;case 8:return 0;case 9:return 0;case 10:return 0;default:}return 0;}return 0;},
AX4=()=>{JI=new Z;};
let HH=F(B4);
let AMy=F(HH);
let Ha=F(BF);
let MH=null,NV=null,U$=null;
let Zf=()=>{let b,c;b=new Ha;b.kx=A(34);b.kq=0;MH=b;c=new Ha;c.kx=A(35);c.kq=1;NV=c;U$=V(Ha,[b,c]);};
let NF=F(0);
let Jk=F(0);
let G5=F(0);
let DS=F();
let APT=F(DS);
let Nr=F(Hq);
let M4=F();
let Uh=null,Ul=null;
let AVV=()=>{Uh=new Z;Ul=new Z;};
let ADi=F();
let XU=F();
let Ww=F(0);
let L6=F();
let ALY=F(L6);
function Db(){let a=this;F6.call(a);a.sH=0;a.xR=null;a.oV=null;}
let Su=a=>{a.lv=1;},
AX$=()=>{let a=new Db();Su(a);return a;},
WK=a=>{a.k0=null;a.lq=null;a.lr=null;a.lA=0;a.lv=1;a.lj=0;a.lz=0;a.ln=0;a.oV=null;};
let RQ=F();
let Yf=null;
let WZ=()=>{WZ=BR(RQ);AJl();};
let AJl=()=>{let b,c;b=Ba((U$.p()).data.length);c=b.data;Yf=b;c[MH.kq]=1;c[NV.kq]=2;};
let AJS=F();
let TR=F();
let Xb=null;
let Sx=()=>{Sx=BR(TR);ABK();};
let ABK=()=>{let b,c;b=Ba((Lm.p()).data.length);c=b.data;Xb=b;c[I7.kq]=1;c[Hx.kq]=2;c[Jd.kq]=3;};
let APS=F(DS);
let FK=F();
let TM=F(FK);
let WG=F();
let APC=0,ASR=0,AJT=0,AS7=0,AFS=0;
let UN=()=>{UN=BR(WG);ASH();};
let ASH=()=>{APC=Dk(W(navigator.platform),A(7));ASR=Dk(W(navigator.platform),A(8));AJT=Dk(W(navigator.platform),A(9));AS7=!Dk(W(navigator.platform),A(10))&&!Dk(W(navigator.platform),A(11))?0:1;AFS=!Dk(W(navigator.platform),A(12))&&!Dk(W(navigator.platform),A(13))&&!Dk(W(navigator.platform),A(14))?0:1;};
let Mk=F();
let ASt=F(HH);
let SW=null;
let AWz=()=>{SW=new Z;};
let AEL=F();
let S7=null;
let AYf=()=>{S7=new Z;};
let Vn=F();
let ACZ=null,Y5=null,ATr=null;
let V5=()=>{V5=BR(Vn);AO8();};
let AO8=()=>{let b;b=new Bh;b.kJ=1;b.km=R(C,16);ACZ=b;b=new Bo;C1();Y5=b;ATr=new DH;};
let Ny=F();
let I4=F(FK);
let Wq=F(FK);
let Eq=F(B4);
let VD=0.0;
let AXQ=()=>{VD=0.10000000149011612;};
let Wi=F(I4);
let ABZ=F(F6);
let KY=F(0);
function Bb(){let a=this;F6.call(a);a.mP=null;a.oj=0.0;a.ok=0.0;a.An=0.0;a.Am=0.0;a.oY=0;a.lD=0;a.vz=0;a.yn=0;a.lK=null;a.xw=0;}
let SV=a=>{a.lv=1;a.xw=1;},
AWm=()=>{let a=new Bb();SV(a);return a;},
QB=a=>{a.k0=null;a.lq=null;a.lr=null;a.lA=0;a.lv=1;a.lj=0;a.lz=0;a.ln=0;a.lK=null;a.lD=(-1);},
O6=a=>{return a.mP.kx;};
function D7(){let a=this;C.call(a);a.rB=null;a.qC=null;a.rm=null;a.sF=0;a.uU=0;}
let UK=a=>{return;},
AUZ=()=>{let a=new D7();UK(a);return a;},
Ph=a=>{a.qC=null;a.rB=null;a.rm=null;};
let Oh=F();
let Ld=null;
let Ms=()=>{Ms=BR(Oh);ARn();};
let ARn=()=>{let b,c;b=Ba((Lm.p()).data.length);c=b.data;Ld=b;c[IT.kq]=1;c[My.kq]=2;c[J6.kq]=3;c[I7.kq]=4;c[Hx.kq]=5;c[Jd.kq]=6;c[Ln.kq]=7;c[LN.kq]=8;c[Nw.kq]=9;c[Je.kq]=10;};
let DB=F(BF);
let I7=null,Hx=null,Jd=null,Ln=null,Nw=null,Je=null,LN=null,IT=null,My=null,J6=null,Lm=null;
let ABF=()=>{let b,c,d,e,f,g,h,i,j,k;b=new DB;b.kx=A(36);b.kq=0;I7=b;c=new DB;c.kx=A(37);c.kq=1;Hx=c;d=new DB;d.kx=A(38);d.kq=2;Jd=d;e=new DB;e.kx=A(39);e.kq=3;Ln=e;f=new DB;f.kx=A(40);f.kq=4;Nw=f;g=new DB;g.kx=A(41);g.kq=5;Je=g;h=new DB;h.kx=A(42);h.kq=6;LN=h;i=new DB;i.kx=A(43);i.kq=7;IT=i;j=new DB;j.kx=A(44);j.kq=8;My=j;k=new DB;k.kx=A(45);k.kq=9;J6=k;Lm=V(DB,[b,c,d,e,f,g,h,i,j,k]);};
function BQ(){let a=this;C.call(a);a.lh=null;a.le=null;a.mm=null;}
let ANi=a=>{return;},
AN2=(a,b)=>{let c,d,e;a.lh=b;if(a.le===null)a.le=b;if(b===null){b=a.mm;if(b!==null){c=b.kA;if(c.ki<b.la){S(c,a);d=b.k6;e=b.kA.ki;if(d>e)e=d;b.k6=e;if(BC(a,BB))a.bt();}else if(BC(a,BB))a.bt();a.mm=null;}}},
AVt=(a,b)=>{a.le=b;},
AAG=a=>{a.lh=null;a.le=null;a.mm=null;a.bZ();},
AU2=(a,b)=>{a.mm=b;},
AN5=a=>{let b,c,d,e;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.kw=b;d=c;b.classObject=d;}}if(c.kp===null)c.kp=W(c.kw.$meta.name);b=c.kp;e=Ff(b,46,b.kf.length-1|0);if(e!=(-1))b=Ck(b,e+1|0,b.kf.length);if(LC(b,A(46)))b=Ck(b,0,b.kf.length-6|0);return b;};
let Fa=F(BQ);
let AGK=F(Fa);
let ALw=F(Fa);
function De(){let a=this;BQ.call(a);a.x7=0.0;a.s9=0.0;a.vR=null;a.x1=0;a.tF=0;a.qy=0;}
let ASf=(a,b)=>{let c,d,e,f,$$je;if(a.qy)return 1;c=a.mm;a.mm=null;a:{try{if(!a.tF){Tt(a);a.tF=1;}b=a.s9+b;a.s9=b;d=a.x7;e=b<d?0:1;a.qy=e;d=!e?b/d:1.0;f=a.vR;if(f!==null)d=f.b1(d);if(a.x1)d=1.0-d;SO(a,d);if(a.qy)AS$(a);e=a.qy;break a;}catch($$e){$$je=Bc($$e);f=$$je;}a.mm=c;B(f);}a.mm=c;return e;},
AS$=a=>{return;},
AUi=a=>{a.s9=0.0;a.tF=0;a.qy=0;};
let EZ=F(De);
let Yg=F(EZ);
let AAC=F();
function N5(){let a=this;BQ.call(a);a.lO=null;a.r4=0;}
let AVM=a=>{let b,c,d,e,f,g,h,i;a.r4=0;b=a.lO;c=0;d=b.ki;while(c<d){if(c>=b.ki){e=new H;f=new K;f.ke=G(16);E(f,f.kd,A(18));J(f,f.kd,c,10);E(f,f.kd,A(19));c=b.ki;J(f,f.kd,c,10);b=new I;g=f.ke;h=g.data;d=f.kd;i=h.length;if(d>=0&&d<=(i-0|0)){b.kf=L(g.data,0,d);e.kg=1;e.kh=1;e.kj=b;B(e);}b=new H;b.kg=1;b.kh=1;B(b);}b.km.data[c].bZ();c=c+1|0;}},
ALJ=a=>{let b,c,d,e,f,g,h,i;a.lh=null;a.le=null;a.mm=null;a.r4=0;b=a.lO;c=0;d=b.ki;while(c<d){if(c>=b.ki){e=new H;f=new K;f.ke=G(16);E(f,f.kd,A(18));J(f,f.kd,c,10);E(f,f.kd,A(19));c=b.ki;J(f,f.kd,c,10);b=new I;g=f.ke;h=g.data;d=f.kd;i=h.length;if(d>=0&&d<=(i-0|0)){b.kf=L(g.data,0,d);e.kg=1;e.kh=1;e.kj=b;B(e);}b=new H;b.kg=1;b.kh=1;B(b);}b.km.data[c].bZ();c=c+1|0;}a.p0=0;b=a.lO;g=b.km;c=0;d=b.ki;f=null;if(c>d){b=new Bj;b.kg=1;b.kh=1;B(b);}while(c<d){h=g.data;i=c+1|0;h[c]=f;c=i;}b.ki=0;},
AOi=(a,b)=>{let c,d,e,f,g,h,i;c=a.lO;d=0;e=c.ki;while(true){if(d>=e){a.lh=b;if(a.le===null)a.le=b;if(b===null){b=a.mm;if(b!==null){c=b.kA;if(c.ki<b.la){S(c,a);d=b.k6;e=b.kA.ki;if(d>e)e=d;a:{b.k6=e;if(BC(a,BB)){b=a;b.lh=null;b.le=null;b.mm=null;b.r4=0;c=b.lO;d=0;e=c.ki;while(true){if(d>=e){b.p0=0;b=b.lO;f=b.km;d=0;e=b.ki;c=null;if(d>e){b=new Bj;G9(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.ki=0;break a;}if(d>=c.ki)break;c.km.data[d].bZ();d=d+1|0;}B(Nx(Et(Fw(FO(Fw(FO(EF(),A(18)),d),A(19)),c.ki))));}}}
else if(BC(a,BB)){b=a;b.lh=null;b.le=null;b.mm=null;b.r4=0;c=b.lO;d=0;e=c.ki;while(d<e){(Q(c,d)).bZ();d=d+1|0;}b.p0=0;b=b.lO;f=b.km;d=0;e=b.ki;c=null;if(d>e){b=new Bj;IM(b);B(b);}while(d<e){g=f.data;h=d+1|0;g[d]=c;d=h;}b.ki=0;}a.mm=null;}}return;}if(d>=c.ki)break;c.km.data[d].by(b);d=d+1|0;}i=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,d,10);E(b,b.kd,A(19));d=c.ki;J(b,b.kd,d,10);c=new I;f=b.ke;g=f.data;e=b.kd;h=g.length;if(e>=0&&e<=(h-0|0)){c.kf=L(f.data,0,e);i.kg=1;i.kh=1;i.kj=c;B(i);}b=new H;b.kg=1;b.kh
=1;B(b);},
AJG=a=>{let b,c,d,e,f,g,h,i,j;b=new K;b.ke=G(64);c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BD;d.kw=c;e=d;c.classObject=e;}}if(d.kp===null)d.kp=W(d.kw.$meta.name);c=d.kp;f=Ff(c,46,c.kf.length-1|0);if(f!=(-1))c=Ck(c,f+1|0,c.kf.length);if(LC(c,A(46)))c=Ck(c,0,c.kf.length-6|0);E(b,b.kd,c);f=b.kd;Bk(b,f,f+1|0);b.ke.data[f]=40;c=a.lO;g=0;f=c.ki;while(g<f){if(g>0)E(b,b.kd,A(47));if(g>=c.ki){e=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,g,10);E(b,b.kd,A(19));g=c.ki;J(b,b.kd,g,
10);c=new I;h=b.ke;i=h.data;f=b.kd;j=i.length;if(f>=0&&f<=(j-0|0)){c.kf=L(h.data,0,f);e.kg=1;e.kh=1;e.kj=c;B(e);}b=new H;b.kg=1;b.kh=1;B(b);}e=c.km.data[g];E(b,b.kd,e===null?A(2):e.T());g=g+1|0;}f=b.kd;Bk(b,f,f+1|0);h=b.ke;i=h.data;i[f]=41;c=new I;f=b.kd;j=i.length;if(f>=0&&f<=(j-0|0)){c.kf=L(h.data,0,f);return c;}b=new H;b.kg=1;b.kh=1;B(b);};
function Dq(){N5.call(this);this.p0=0;}
let Qs=a=>{let b;b=new Bh;b.kJ=1;b.km=R(C,4);a.lO=b;},
AWk=()=>{let a=new Dq();Qs(a);return a;},
Oi=(a,b)=>{let c;c=new Bh;c.kJ=1;c.km=R(C,4);a.lO=c;S(c,b);c=a.lh;if(c!==null){b.lh=c;if(b.le===null)b.le=c;}},
AYA=a=>{let b=new Dq();Oi(b,a);return b;},
Wx=(a,b,c)=>{let d;d=new Bh;d.kJ=1;d.km=R(C,4);a.lO=d;S(d,b);d=a.lh;if(d!==null){b.lh=d;if(b.le===null)b.le=d;}S(a.lO,c);b=a.lh;if(b!==null){c.lh=b;if(c.le===null)c.le=b;}},
AYd=(a,b)=>{let c=new Dq();Wx(c,a,b);return c;},
V3=(a,b,c,d)=>{let e;e=new Bh;e.kJ=1;e.km=R(C,4);a.lO=e;S(e,b);e=a.lh;if(e!==null){b.lh=e;if(b.le===null)b.le=e;}S(a.lO,c);b=a.lh;if(b!==null){c.lh=b;if(c.le===null)c.le=b;}S(a.lO,d);b=a.lh;if(b!==null){d.lh=b;if(d.le===null)d.le=b;}},
AX3=(a,b,c)=>{let d=new Dq();V3(d,a,b,c);return d;},
WP=(a,b,c,d,e)=>{let f;f=new Bh;f.kJ=1;f.km=R(C,4);a.lO=f;S(f,b);f=a.lh;if(f!==null){b.lh=f;if(b.le===null)b.le=f;}S(a.lO,c);f=a.lh;if(f!==null){c.lh=f;if(c.le===null)c.le=f;}S(a.lO,d);b=a.lh;if(b!==null){d.lh=b;if(d.le===null)d.le=b;}S(a.lO,e);b=a.lh;if(b!==null){e.lh=b;if(e.le===null)e.le=b;}},
AV5=(a,b,c,d)=>{let e=new Dq();WP(e,a,b,c,d);return e;},
Sy=(a,b,c,d,e,f)=>{let g;g=new Bh;g.kJ=1;g.km=R(C,4);a.lO=g;S(g,b);g=a.lh;if(g!==null){b.lh=g;if(b.le===null)b.le=g;}S(a.lO,c);b=a.lh;if(b!==null){c.lh=b;if(c.le===null)c.le=b;}S(a.lO,d);b=a.lh;if(b!==null){d.lh=b;if(d.le===null)d.le=b;}S(a.lO,e);b=a.lh;if(b!==null){e.lh=b;if(e.le===null)e.le=b;}S(a.lO,f);b=a.lh;if(b!==null){f.lh=b;if(f.le===null)f.le=b;}},
AWw=(a,b,c,d,e)=>{let f=new Dq();Sy(f,a,b,c,d,e);return f;},
Ow=(a,b)=>{let c,d,e,$$je;c=a.p0;d=a.lO;if(c>=d.ki)return 1;e=a.mm;a.mm=null;a:{b:{c:{d:{try{if(!(Q(d,c)).bx(b))break d;}catch($$e){$$je=Bc($$e);d=$$je;break b;}e:{try{if(a.lh!==null)break e;}catch($$e){$$je=Bc($$e);d=$$je;break b;}a.mm=e;return 1;}try{c=a.p0+1|0;a.p0=c;if(c<a.lO.ki)break d;else break c;}catch($$e){$$je=Bc($$e);d=$$je;break b;}}try{}catch($$e){$$je=Bc($$e);d=$$je;break b;}a.mm=e;return 0;}try{break a;}catch($$e){$$je=Bc($$e);d=$$je;}}a.mm=e;B(d);}a.mm=e;return 1;},
Vf=a=>{let b,c,d,e,f,g,h,i;a.r4=0;b=a.lO;c=0;d=b.ki;while(c<d){if(c>=b.ki){e=new H;f=new K;f.ke=G(16);E(f,f.kd,A(18));J(f,f.kd,c,10);E(f,f.kd,A(19));c=b.ki;J(f,f.kd,c,10);b=new I;g=f.ke;h=g.data;d=f.kd;i=h.length;if(d>=0&&d<=(i-0|0)){b.kf=L(g.data,0,d);e.kg=1;e.kh=1;e.kj=b;B(e);}b=new H;b.kg=1;b.kh=1;B(b);}b.km.data[c].bZ();c=c+1|0;}a.p0=0;};
let AEC=F(BQ);
let AIX=F(BQ);
let AN0=F(BQ);
let AOX=F();
let Mc=F(BQ);
let AIf=F(Mc);
function DC(){let a=this;De.call(a);a.t0=0.0;a.t1=0.0;a.u$=0.0;a.u9=0.0;a.p8=0;}
let Pm=a=>{a.p8=12;},
AXu=()=>{let a=new DC();Pm(a);return a;},
Tt=a=>{let b,c,d;b=a.le;c=a.p8;d=b.kH;if(c&16)d=d+b.lf;else if(!(c&8))d=d+b.lf/2.0;a.t0=d;d=b.kI;if(c&2)d=d+b.li;else if(!(c&4))d=d+b.li/2.0;a.t1=d;},
SO=(a,b)=>{let c,d;if(b===0.0){c=a.t0;d=a.t1;}else if(b===1.0){c=a.u$;d=a.u9;}else{c=a.t0;c=c+(a.u$-c)*b;d=a.t1;d=d+(a.u9-d)*b;}AEy(a.le,c,d,a.p8);},
UU=a=>{a.lh=null;a.le=null;a.mm=null;a.s9=0.0;a.tF=0;a.qy=0;a.x1=0;a.vR=null;a.p8=12;};
let APN=F(De);
let AQo=F(EZ);
let AMi=F(BQ);
let AMR=F(EZ);
let AR6=F(De);
let ARo=F(De);
let AFb=F(BQ);
let AHM=F(De);
let AH2=F(BQ);
let AFJ=F(BQ);
let AIi=F(Fa);
let Zb=F(De);
let ASd=F(BQ);
let ALN=F(EZ);
let AFo=F(Fa);
let AKY=F(BQ);
let AAE=F(De);
let AHk=F(De);
let ABT=F();
let AHd=null;
let ATw=()=>{AHd=V(BD,[M(Rw),M(BM),M(Ta),M(TM),M(Wq),M(I4),M(Wi),M(GT),M(St),M(Vo),M(UG),M(RR),M(V8),M(Km),M(Wh),M(TO),M(Pf),M(VY),M(Hd),M(S2),M(Vh),M(SX),M(R8),M(PG)]);};
let Dm=F(BJ);
let EJ=F(Dm);
let ZS=null,AHU=null,AOW=null,ATR=null,ALg=null,Xt=null,AEl=null,AKO=null;
let Rl=()=>{Rl=BR(EJ);APr();};
let APr=()=>{let b,c;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=1.0;b.lc=1.0;CO(b);ZS=b;b=new BM;b.k_=1.0;b.k$=0.0;b.k9=0.0;b.lc=1.0;CO(b);AHU=b;b=new BM;b.k_=0.0;b.k$=1.0;b.k9=0.0;b.lc=1.0;CO(b);AOW=b;b=new Wn;c=new Bh;c.kJ=0;c.km=R(C,16);b.kA=c;b.la=2147483647;ATR=b;b=new Wm;IJ();ALg=b;Xt=new Wl;AEl=new Wk;AKO=new Wj;};
let Gp=F(EJ);
let LZ=F(Gp);
let ACO=F(LZ);
let APP=F(B4);
let M2=F(Dm);
let SF=F(0);
let ES=F();
let AE3=F(ES);
let Dy=F(Ci);
let Zv=F(Dy);
let APO=F(B4);
let B9=F();
let AQ8=null,AN9=null,APL=null,ADh=null,AIp=null,AGE=null,AN1=null;
let IJ=()=>{IJ=BR(B9);Z6();};
let Z6=()=>{let b;b=new JG;IJ();b.Ad=0.0;AQ8=b;AN9=new TY;APL=new TV;ADh=new TU;AIp=new TX;AGE=new TW;AN1=new TT;};
let TX=F(B9);
let ALZ=F(B9);
let KR=F(Eq);
let AH9=F(KR);
let Wl=F(B9);
let ARS=F(B4);
let MB=F(EJ);
let T5=null,Ue=null;
let AVj=()=>{T5=new Z;Ue=new Z;};
let AL0=F(B9);
let GM=F(0);
function DH(){let a=this;C.call(a);a.nz=0.0;a.ny=0.0;a.nA=0.0;a.nu=0.0;}
let QV=null,TH=null;
let AFH=(a,b)=>{let c,d,e;a:{c=a.nz;d=b.nz;if(c<d+b.nA&&c+a.nA>d){c=a.ny;d=b.ny;if(c<d+b.nu&&c+a.nu>d){e=1;break a;}}e=0;}return e;},
AXz=()=>{QV=new DH;TH=new DH;};
let D4=F(DH);
let W6=null;
let Ko=()=>{Ko=BR(D4);O5();};
let Ty=a=>{Ko();},
AU9=()=>{let a=new D4();Ty(a);return a;},
O5=()=>{let b,c,d,e,f,g,h,$$je;CE();b=Bw;c=BG(b,M(D4));b=c<0?null:b.k3.data[c];if(b===null){b=new CK;d=new Bh;d.kJ=0;d.km=R(C,4);b.kA=d;b.la=100;a:{try{d=CU(M(D4),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{d=CS(M(D4),null);CV(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}d=null;}b.kU=d;if(d===null){b=new BA;d=new K;d.ke=G(16);E(d,d.kd,A(21));if(M(D4).kp===null)M(D4).kp=W(M(D4).kw.$meta.name);e=M(D4).kp;E(d,d.kd,e);e=new I;f=d.ke;g=f.data;c
=d.kd;h=g.length;if(c>=0&&c<=(h-0|0)){e.kf=L(f.data,0,c);b.kg=1;b.kh=1;b.kj=e;B(b);}e=new H;e.kg=1;e.kh=1;B(e);}Cj(Bw,M(D4),b);}W6=b;};
let AE7=F(ES);
let Nf=F(Dy);
let Ro=null,Rp=null,Rq=null,Tu=0.0,OJ=0.0;
let AX9=()=>{Ro=new Z;Rp=new Z;Rq=new Z;Tu=0.4000000059604645;OJ=0.10000000149011612;};
let AC3=F(Nf);
let AHo=F(B4);
let QM=F(0);
let AN7=F();
let GT=F();
let Hd=F(GT);
let UG=F(Hd);
let Nk=F(Dy);
let AGs=F(Nk);
let ATM=F(M2);
let K0=F(Dm);
let AUx=F(Gp);
let NJ=F(Dy);
let Wj=F(B9);
let Vh=F();
let AFC=F();
let AIb=F(B4);
let AJ1=F(DS);
let AGO=F();
let ANB=F(B4);
let ATs=F(Eq);
let AHm=F(M4);
let TT=F(B9);
let TW=F(B9);
let To=F(0);
let Km=F();
let Pf=F(Km);
let AE4=F(ES);
let APM=F(Mk);
let APQ=F(Ny);
let ART=F(B4);
let ARU=F(Eq);
let Wk=F(B9);
let O9=F();
let AFw=null,AK8=null,AFu=null,AK7=null,Xq=null,AA$=null,AKG=null,XS=null,ANt=null;
let UI=()=>{UI=BR(O9);AB0();};
let AB0=()=>{let b;b=new Gm;b.o6=0.0;AFw=b;b=new Gm;b.o6=1.0;AK8=b;Fe();AFu=Ex.data[128];Fe();b=Ex.data[129];AK7=b;Xq=b;Fe();AA$=Ex.data[130];Fe();AKG=Ex.data[132];Fe();XS=Ex.data[136];Fe();ANt=Ex.data[144];};
let St=F(Hd);
let AHB=F(B4);
let ZU=F(DS);
let TY=F(B9);
let ADo=F(Dm);
let AHn=F(B4);
let SX=F();
function JG(){B9.call(this);this.Ad=0.0;}
let PK=null;
let AXU=()=>{PK=R(JG,111);};
let AFD=F(K0);
let TU=F(B9);
let AIO=F(Dy);
let Ve=null;
let AXX=()=>{Ve=new Z;};
let AHv=F(Nr);
let VY=F();
let Px=F(Dy);
let Zp=null,ADH=null;
let UY=()=>{UY=BR(Px);Y8();};
let Y8=()=>{let b,c;Zp=new BM;b=new KP;MO();c=new Bh;c.kJ=1;c.km=R(C,1);b.zX=c;c=new Gd;c.pO=1;c.mY=Ba(2);b.y4=c;ADH=b;};
let PG=F();
let AL2=F(B9);
let Wm=F(B9);
let AO5=F(MB);
let TV=F(B9);
let RR=F();
let ATh=F();
let F1=F(BF);
let Jf=null,ZH=null,AMv=null,X3=null,AAL=null,AOf=null;
let AMU=()=>{let b,c,d,e,f;b=new F1;b.kx=A(48);b.kq=0;Jf=b;c=new F1;c.kx=A(49);c.kq=1;ZH=c;d=new F1;d.kx=A(50);d.kq=2;AMv=d;e=new F1;e.kx=A(51);e.kq=3;X3=e;f=new F1;f.kx=A(52);f.kq=4;AAL=f;AOf=V(F1,[b,c,d,e,f]);};
let ATA=F(B9);
let AHb=F(DS);
function Dx(){let a=this;C.call(a);a.la=0;a.k6=0;a.kA=null;}
let Wn=F(Dx);
let ZJ=F();
let V8=F();
let Ta=F();
let TO=F();
let NH=F(B4);
let Sd=null;
let AUX=()=>{Sd=new Z;};
let ZT=F(DS);
let ARV=F(NJ);
let ZM=F(0);
let AHC=F(B4);
let AUl=F(Dm);
let ALt=F(Dm);
let AHx=F(Eq);
let Nv=F();
let AE2=F(Nv);
let ARv=F(Ci);
let YV=F(B4);
let APq=F(Gp);
let AKx=F(B4);
let ASY=F(Eq);
let Vo=F(GT);
let ALA=F(Dm);
let S2=F();
let R8=F();
let AJ9=F(Dy);
let ATt=F(Hq);
let YX=F(B4);
let ANf=F(Dm);
let SM=null;
let AWG=()=>{SM=new Z;};
let ATK=F(NH);
let YY=F(EJ);
let AE5=F(ES);
let Xd=F();
let Wh=F();
let VQ=F();
let AAz=null,Ze=null,ABe=null,AR7=null,AR9=null,AR8=null,ADn=null,AEN=null,ASN=null,Y3=null,ASg=null;
let VS=()=>{VS=BR(VQ);AJB();};
let AJB=()=>{let b;AAz=Ce(16);b=new EH;b.oP=0.0;b.oM=0.0;b.oN=0.0;b.oO=1.0;Ze=b;b=new EH;b.oP=0.0;b.oM=0.0;b.oN=0.0;b.oO=1.0;ABe=b;b=new Bo;C1();AR7=b;AR9=new Bo;AR8=new Bo;ADn=new Bo;AEN=Dj();ASN=new Bo;Y3=new Bo;ASg=new Bo;};
let BP=F();
let Z5=null,AOK=null,AC9=null,AOU=null,ACo=null,AEg=null,AIc=null,X2=null,AIy=null,ACn=null,AJ_=null,ADE=null,AEf=null,Zc=null,XP=null,ANM=null,AFK=null,AEi=null,ACs=null,ANm=null,AEh=null,ARq=null,AEm=null,AIT=null,AQ6=null,AJt=null,W_=null,X0=null,AOD=null,AEP=null,ATU=null,AME=null,ARN=null,AHG=null,ANF=null,AUk=null,AGt=null,AGM=null,X5=null,APl=null,ATZ=null,AR3=null,AMS=null,AT_=null;
let J7=()=>{J7=BR(BP);AAm();};
let AAm=()=>{let b,c;b=new UA;J7();Z5=b;AOK=new Us;AC9=new Ur;b=new Uu;AOU=b;ACo=b;b=new ET;b.nO=2;AEg=b;b=new Ie;b.nO=2;AIc=b;X2=b;b=new H9;b.nO=2;AIy=b;ACn=b;AJ_=new Ut;ADE=new Uw;b=new ET;b.nO=3;AEf=b;b=new Ie;b.nO=3;Zc=b;b=new H9;b.nO=3;XP=b;ANM=new Uv;AFK=new Uy;b=new ET;b.nO=4;AEi=b;b=new Ie;b.nO=4;ACs=b;b=new H9;b.nO=4;ANm=b;b=new ET;b.nO=5;AEh=b;b=new Ie;b.nO=5;ARq=b;b=new H9;b.nO=5;AEm=b;AIT=new Ux;AQ6=new TB;AJt=new TD;b=new Gj;b.qH=2.0;b.qZ=10.0;c=GY(2.0,(-10.0));b.ri=c;b.q4=1.0/(1.0-c);W_=b;b=new Mq;b.qH
=2.0;b.qZ=10.0;c=GY(2.0,(-10.0));b.ri=c;b.q4=1.0/(1.0-c);X0=b;b=new N1;b.qH=2.0;b.qZ=10.0;c=GY(2.0,(-10.0));b.ri=c;b.q4=1.0/(1.0-c);AOD=b;b=new Gj;b.qH=2.0;b.qZ=5.0;c=GY(2.0,(-5.0));b.ri=c;b.q4=1.0/(1.0-c);AEP=b;b=new Mq;b.qH=2.0;b.qZ=5.0;c=GY(2.0,(-5.0));b.ri=c;b.q4=1.0/(1.0-c);ATU=b;b=new N1;b.qH=2.0;b.qZ=5.0;c=GY(2.0,(-5.0));b.ri=c;b.q4=1.0/(1.0-c);AME=b;ARN=new TE;AHG=new TF;ANF=new TG;b=new G4;b.vT=2.0;b.uh=10.0;b.ul=1.0;b.uJ=(-21.99114990234375);AUk=b;b=new Pl;b.vT=2.0;b.uh=10.0;b.ul=1.0;b.uJ=18.84955596923828;AGt
=b;b=new RZ;b.vT=2.0;b.uh=10.0;b.ul=1.0;b.uJ=(-21.99114990234375);AGM=b;b=new R1;b.zu=3.0;X5=b;b=new P1;b.A9=2.0;APl=b;b=new V$;b.z$=2.0;ATZ=b;b=new Rk;LT(b,4);AR3=b;b=new Sn;LT(b,4);AMS=b;AT_=ACA(4);};
function P1(){BP.call(this);this.A9=0.0;}
let AHe=F();
let Uv=F(BP);
let ASo=F();
function ET(){BP.call(this);this.nO=0;}
let Ie=F(ET);
let H9=F(ET);
let JU=F(0);
let ACh=F();
let Uy=F(BP);
let AP4=F();
let Uu=F(BP);
function G4(){let a=this;BP.call(a);a.vT=0.0;a.uh=0.0;a.ul=0.0;a.uJ=0.0;}
let Ut=F(BP);
let Us=F(BP);
let AL6=F();
let WM=null,WO=null,WN=null;
let AVw=()=>{WM=new Z;WO=new Z;WN=new Z;};
let XT=F(Dx);
let Jx=F(0);
function Z(){let a=this;C.call(a);a.kl=0.0;a.kk=0.0;}
let O_=null,O$=null,RH=null;
let BY=(a,b,c)=>{a.kl=b;a.kk=c;},
Cl=(a,b)=>{let c=new Z();BY(c,a,b);return c;},
ABB=a=>{let b,c,d,e,f,g,h;b=new K;b.ke=G(16);E(b,b.kd,A(53));c=a.kl;Gb(b,b.kd,c);E(b,b.kd,A(54));c=a.kk;Gb(b,b.kd,c);E(b,b.kd,A(55));d=new I;e=b.ke;f=e.data;g=b.kd;h=f.length;if(g>=0&&g<=(h-0|0)){d.kf=L(e.data,0,g);return d;}b=new H;b.kg=1;b.kh=1;B(b);},
AEb=(a,b)=>{let c,d,e,f,g,h,i;if(a===b)return 1;if(b===null)return 0;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BD;d.kw=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new BD;c.kw=e;f=c;e.classObject=f;}}if(d!==c)return 0;c=b;g=a.kl;h=(isNaN(g)?1:0)?2143289344:GK(g);g=c.kl;if(h!=((isNaN(g)?1:0)?2143289344:GK(g)))return 0;g=a.kk;i=(isNaN(g)?1:0)?2143289344:GK(g);g=c.kk;if(i==((isNaN(g)?1:0)?2143289344:GK(g)))return 1;return 0;},
AVo=()=>{let b;b=new Z;b.kl=1.0;b.kk=0.0;O_=b;b=new Z;b.kl=0.0;b.kk=1.0;O$=b;b=new Z;b.kl=0.0;b.kk=0.0;RH=b;};
let TF=F(BP);
function Gj(){let a=this;BP.call(a);a.qH=0.0;a.qZ=0.0;a.ri=0.0;a.q4=0.0;}
let AJ5=F();
let UA=F(BP);
let N1=F(Gj);
let AFy=F();
let HQ=F(BF);
let ACT=null,AFU=null,APx=null,AKB=null;
let ARZ=()=>{let b,c,d;b=new HQ;b.kx=A(56);b.kq=0;ACT=b;c=new HQ;c.kx=A(57);c.kq=1;AFU=c;d=new HQ;d.kx=A(58);d.kq=2;APx=d;AKB=V(HQ,[b,c,d]);};
let S8=F();
let AR_=null;
let SB=()=>{SB=BR(S8);AIh();};
let AIh=()=>{let b;b=new Bo;C1();AR_=b;};
function Hl(){let a=this;BP.call(a);a.zP=null;a.zi=null;}
let LT=(a,b)=>{let c,d,e,f,g,h,i,j;J7();if(b>=2&&b<=5){a:{c=Ce(b);a.zP=c;d=Ce(b);e=d.data;a.zi=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bj;g=new K;g.ke=G(16);E(g,g.kd,A(59));J(g,g.kd,b,10);h=new I;c=g.ke;d=c.data;i=g.kd;j=d.length;if(i>=0&&i<=(j-0|0)){h.kf=L(c.data,0,i);f.kg=1;f.kh=1;f.kj=h;B(f);}g=new H;g.kg
=1;g.kh=1;B(g);},
ACA=a=>{let b=new Hl();LT(b,a);return b;};
let Sn=F(Hl);
let TB=F(BP);
function Tr(){let a=this;C.call(a);a.pp=0.0;a.pn=0.0;a.po=0.0;a.pr=0.0;a.ps=0.0;a.pq=0.0;}
let AG0=(a,b,c,d,e,f)=>{let g,h,i;a.po=b;a.pq=c;if(d===0.0){a.pp=e;a.pn=0.0;a.pr=0.0;a.ps=f;}else{Gc();g=GA.data;h=g[(d*45.511112213134766|0)&16383];i=g[((d+90.0)*45.511112213134766|0)&16383];a.pp=i*e;a.pn= -h*f;a.pr=h*e;a.ps=i*f;}return a;},
AAO=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.pp;d=a.pp;e=c*d;f=b.pn;g=a.pr;h=e+f*g;i=a.pn;e=c*i;j=a.ps;e=e+f*j;k=a.po;l=c*k;m=a.pq;l=l+f*m+b.po;c=b.pr;d=c*d;f=b.ps;d=d+f*g;j=c*i+f*j;c=c*k+f*m+b.pq;a.pp=h;a.pn=e;a.po=l;a.pr=d;a.ps=j;a.pq=c;return a;};
let Ur=F(BP);
function Gy(){let a=this;C.call(a);a.rH=0.0;a.rG=0.0;a.rI=0.0;a.rF=0.0;}
let AQP=null,AQM=null,AQN=null,AQO=null,ABO=null;
let ATu=()=>{let b;b=new Gy;b.rH=1.0;b.rG=0.0;b.rI=0.0;b.rF=0.0;AQP=b;b=new Gy;b.rH=0.0;b.rG=1.0;b.rI=0.0;b.rF=0.0;AQM=b;b=new Gy;b.rH=0.0;b.rG=0.0;b.rI=1.0;b.rF=0.0;AQN=b;b=new Gy;b.rH=0.0;b.rG=0.0;b.rI=0.0;b.rF=1.0;AQO=b;b=new Gy;b.rH=0.0;b.rG=0.0;b.rI=0.0;b.rF=0.0;ABO=b;};
let Pl=F(G4);
function R1(){BP.call(this);this.zu=0.0;}
let AB3=F();
let AT5=F();
let Uw=F(BP);
function V$(){BP.call(this);this.z$=0.0;}
let TG=F(BP);
let RZ=F(G4);
let WU=F();
let AEk=null,YE=null,ASU=null;
let Qv=()=>{Qv=BR(WU);Ym();};
let Ym=()=>{let b,c,d,e,f,g;AEk=R(Bo,15);b=R(Bo,8);YE=b;c=R(Bo,9);d=c.data;ASU=c;e=0;f=d.length;while(e<f){g=new Bo;C1();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bo;C1();b[e]=g;e=e+1|0;}};
function KW(){let a=this;C.call(a);a.xB=null;a.xL=null;a.xd=null;a.xN=null;}
let ADP=null;
let Oe=()=>{Oe=BR(KW);AO_();};
let AL$=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.xB;e=b.ks;f=c.ks;if(e<f)f=e;e=b.kt;g=c.kt;if(e<g)g=e;e=b.ku;h=c.ku;if(e<h)h=e;d.ks=f;d.kt=g;d.ku=h;i=a.xL;e=b.ks;g=c.ks;if(e>g)g=e;e=b.kt;h=c.kt;if(e>h)h=e;e=b.ku;f=c.ku;if(e>f)f=e;i.ks=g;i.kt=h;i.ku=f;b=a.xd;h=d.ks;j=d.kt;k=d.ku;b.ks=h;b.kt=j;b.ku=k;e=i.ks;f=i.kt;g=i.ku;h=h+e;j=j+f;k=k+g;b.ks=h;b.kt=j;b.ku=k;f=h*0.5;g=j*0.5;e=k*0.5;b.ks=f;b.kt=g;b.ku=e;b=a.xN;g=i.ks;h=i.kt;j=i.ku;b.ks=g;b.kt=h;b.ku=j;e=d.ks;f=d.kt;k=d.ku;g=g-e;e=h-f;f=j-k;b.ks=g;b.kt=e;b.ku=f;return a;},
AO_=()=>{let b;b=new Bo;C1();ADP=b;};
function Mh(){let a=this;C.call(a);a.zn=null;a.AH=null;}
let Yd=null;
let MQ=()=>{MQ=BR(Mh);APk();};
let APk=()=>{let b;b=new Bo;C1();Yd=b;};
let ACq=F();
let Yw=F();
let ANv=F();
let AGD=F();
let T7=F();
let RX=null;
let Gc=()=>{Gc=BR(T7);AHJ();};
let LH=b=>{let c;Gc();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AHJ=()=>{let b,c,d,e;b=new Tv;c=ADT(Fp(X(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),X(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(El(c,B8))c=D(0, 2147483648);d=Bd(E4(c,Bg(c,33)),D(3981806797, 4283543511));d=Bd(E4(d,Bg(d,33)),D(444984403, 3301882366));e=E4(d,Bg(d,33));d=Bd(E4(e,Bg(e,33)),D(3981806797, 4283543511));d=Bd(E4(d,Bg(d,33)),D(444984403, 3301882366));d=E4(d,Bg(d,33));b.tW=e;b.tX=d;RX=b;};
let Vw=F();
let XD=null,XE=null,XF=null,AB8=null,AQj=null,AIY=null,Zs=null,Zt=null,AIw=null,AIr=null,AE_=null,AFc=null,AFd=null,AFf=null,AIz=null,AIu=null,AI_=null,AGp=null,AN6=null,AF3=null,ARm=null,ARl=null,ARj=null,AG5=null;
let Rh=()=>{Rh=BR(Vw);ACv();};
let ACv=()=>{let b,c;b=new Bo;C1();XD=b;XE=new Bo;XF=new Bo;b=new G_;b.sk=1;b.nD=Ce(16);AB8=b;b=new G_;b.sk=1;b.nD=Ce(16);AQj=b;AIY=new Z;Zs=new Z;Zt=new Z;AIw=new Z;AIr=new Z;AE_=new Z;AFc=new Z;AFd=new Z;AFf=new Z;b=new Ka;c=new Bo;b.ne=c;b.n3=0.0;c.ks=0.0;c.kt=0.0;c.ku=0.0;b.n3=0.0;AIz=b;AIu=new Bo;AI_=new Bo;AGp=new Bo;AN6=new Bo;AF3=new Bo;ARm=new Bo;ARl=new Bo;ARj=new Bo;AG5=new Bo;};
let Z0=F();
let Rk=F(Hl);
function L1(){C.call(this);this.lF=null;}
let Pc=null,AJI=null,AQX=null,Jm=null,HV=null,Mg=null,V9=null,Qc=null,ALv=null,AUn=null,ALy=null;
let Ez=()=>{Ez=BR(L1);YT();};
let AOk=a=>{let b,c;Ez();b=Ce(16);c=b.data;a.lF=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
Dj=()=>{let a=new L1();AOk(a);return a;},
Dl=(a,b)=>{let c;c=b.data;b=a.lF.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
Tl=(a,b)=>{let c,d,e,f,g;Ez();c=Pc;d=c.data;e=a.lF.data;f=e[0];g=b.lF.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*g[4]
+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Dl(a,c);},
Ly=a=>{let b;b=a.lF.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
MS=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Ly(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.lF.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
AD3=(a,b,c)=>{let d,e,f,g,h,i;Ez();d=Jm;e=b.ks;f=b.kt;g=b.ku;d.ks=e;d.kt=f;d.ku=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/CI(f);f=d.ks*e;g=d.kt*e;e=d.ku*e;d.ks=f;d.kt=g;d.ku=e;}d=HV;e=b.ks;f=b.kt;g=b.ku;d.ks=e;d.kt=f;d.ku=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/CI(f);f=d.ks*e;g=d.kt*e;e=d.ku*e;d.ks=f;d.kt=g;d.ku=e;}b=QA(HV,c);e=b.ks;e=e*e;f=b.kt;e=e+f*f;f=b.ku;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/CI(e);h=b.ks*g;e=b.kt*g;f=b.ku*g;b.ks=h;b.kt=e;b.ku=f;}b=Mg;c=HV;e=c.ks;f=c.kt;g=c.ku;b.ks=e;b.kt=f;b.ku=g;b=QA(b,
Jm);e=b.ks;e=e*e;f=b.kt;e=e+f*f;f=b.ku;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/CI(f);f=b.ks*e;g=b.kt*e;e=b.ku*e;b.ks=f;b.kt=g;b.ku=e;}Ly(a);i=a.lF.data;b=HV;i[0]=b.ks;i[4]=b.kt;i[8]=b.ku;b=Mg;i[1]=b.ks;i[5]=b.kt;i[9]=b.ku;b=Jm;i[2]= -b.ks;i[6]= -b.kt;i[10]= -b.ku;return a;},
AQ1=(a,b)=>{let c;c=a.lF.data;c[0]=b.pp;c[1]=b.pr;c[2]=0.0;c[3]=0.0;c[4]=b.pn;c[5]=b.ps;c[6]=0.0;c[7]=0.0;c[8]=0.0;c[9]=0.0;c[10]=1.0;c[11]=0.0;c[12]=b.po;c[13]=b.pq;c[14]=0.0;c[15]=1.0;return a;},
OS=(b,c)=>{let d,e,f;Ez();d=b.data;c=c.data;e=Ce(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Dw(e,0,b,0,16);},
ARI=b=>{Ez();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
AEu=b=>{let c,d,e;Ez();c=Ce(16);d=ARI(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
AGU=(b,c,d)=>{let e,f,g,h,i,j,k,l;Ez();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
YT=()=>{let b;Pc=Ce(16);b=new EH;b.oP=0.0;b.oM=0.0;b.oN=0.0;b.oO=1.0;AJI=b;b=new EH;b.oP=0.0;b.oM=0.0;b.oN=0.0;b.oO=1.0;AQX=b;b=new Bo;C1();Jm=b;HV=new Bo;Mg=new Bo;V9=new Bo;Qc=Dj();ALv=new Bo;AUn=new Bo;ALy=new Bo;};
let Qb=F(0);
let MR=F();
function Tv(){let a=this;MR.call(a);a.tW=B8;a.tX=B8;}
let TE=F(BP);
let Ux=F(BP);
function Nq(){let a=this;C.call(a);a.qe=null;a.o8=null;a.tB=null;}
let AUg=null,V0=null,AK2=null;
let Jo=()=>{Jo=BR(Nq);AIt();};
let YC=a=>{let b,c,d,e,f,g;Jo();b=R(Ka,6);c=b.data;a.qe=b;b=R(Bo,8);d=b.data;e=new Bo;C1();d[0]=e;d[1]=new Bo;d[2]=new Bo;d[3]=new Bo;d[4]=new Bo;d[5]=new Bo;d[6]=new Bo;d[7]=new Bo;a.o8=b;a.tB=Ce(24);f=0;while(f<6){e=new Ka;g=new Bo;e.ne=g;e.n3=0.0;g.ks=0.0;g.kt=0.0;g.ku=0.0;e.n3=0.0;c[f]=e;f=f+1|0;}},
ANg=()=>{let a=new Nq();YC(a);return a;},
ALQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;Jo();c=V0;d=c.data;Dw(c,0,a.tB,0,d.length);c=b.lF;e=a.tB;f=0;Ez();g=0;while(g<8){AGU(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.o8.data[f];c=a.tB.data;j=h+1|0;i.ks=c[h];g=j+1|0;i.kt=c[j];h=g+1|0;i.ku=c[g];f=f+1|0;}b=a.qe.data[0];c=a.o8.data;i=c[1];k=c[0];l=c[2];m=b.ne;n=i.ks;o=i.kt;p=i.ku;m.ks=n;m.kt=o;m.ku=p;q=k.ks;r=k.kt;s=k.ku;t=n-q;u=o-r;p=p-s;m.ks=t;m.kt=u;m.ku=p;q=k.ks-l.ks;r=k.kt-l.kt;s=k.ku-l.ku;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ks=n;m.kt=s;m.ku
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CI(r);r=m.ks*q;s=m.kt*q;q=m.ku*q;m.ks=r;m.kt=s;m.ku=q;}k=b.ne;b.n3= -(i.ks*k.ks+i.kt*k.kt+i.ku*k.ku);b=a.qe.data[1];c=a.o8.data;i=c[4];k=c[5];l=c[7];m=b.ne;n=i.ks;o=i.kt;p=i.ku;m.ks=n;m.kt=o;m.ku=p;q=k.ks;r=k.kt;s=k.ku;t=n-q;u=o-r;p=p-s;m.ks=t;m.kt=u;m.ku=p;q=k.ks-l.ks;r=k.kt-l.kt;s=k.ku-l.ku;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ks=n;m.kt=s;m.ku=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CI(r);r=m.ks*q;s=m.kt*q;q=m.ku*q;m.ks=r;m.kt=s;m.ku=q;}k=b.ne;b.n3= -(i.ks*k.ks+i.kt
*k.kt+i.ku*k.ku);b=a.qe.data[2];c=a.o8.data;i=c[0];k=c[4];l=c[3];m=b.ne;n=i.ks;o=i.kt;t=i.ku;m.ks=n;m.kt=o;m.ku=t;r=k.ks;q=k.kt;s=k.ku;r=n-r;u=o-q;p=t-s;m.ks=r;m.kt=u;m.ku=p;q=k.ks-l.ks;s=k.kt-l.kt;n=k.ku-l.ku;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.ks=o;m.kt=n;m.ku=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/CI(r);r=m.ks*q;s=m.kt*q;q=m.ku*q;m.ks=r;m.kt=s;m.ku=q;}k=b.ne;b.n3= -(i.ks*k.ks+i.kt*k.kt+i.ku*k.ku);b=a.qe.data[3];c=a.o8.data;k=c[5];i=c[1];l=c[6];m=b.ne;n=k.ks;t=k.kt;u=k.ku;m.ks=n;m.kt=t;m.ku=u;q=i.ks;r=i.kt;s
=i.ku;o=n-q;t=t-r;u=u-s;m.ks=o;m.kt=t;m.ku=u;p=i.ks-l.ks;q=i.kt-l.kt;r=i.ku-l.ku;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.ks=s;m.kt=r;m.ku=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/CI(r);r=m.ks*q;s=m.kt*q;q=m.ku*q;m.ks=r;m.kt=s;m.ku=q;}i=b.ne;b.n3= -(k.ks*i.ks+k.kt*i.kt+k.ku*i.ku);b=a.qe.data[4];c=a.o8.data;i=c[2];k=c[3];l=c[6];m=b.ne;n=i.ks;o=i.kt;p=i.ku;m.ks=n;m.kt=o;m.ku=p;q=k.ks;r=k.kt;s=k.ku;t=n-q;u=o-r;p=p-s;m.ks=t;m.kt=u;m.ku=p;q=k.ks-l.ks;r=k.kt-l.kt;s=k.ku-l.ku;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ks=n;m.kt=s;m.ku
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CI(r);r=m.ks*q;s=m.kt*q;q=m.ku*q;m.ks=r;m.kt=s;m.ku=q;}k=b.ne;b.n3= -(i.ks*k.ks+i.kt*k.kt+i.ku*k.ku);b=a.qe.data[5];c=a.o8.data;i=c[4];k=c[0];l=c[1];m=b.ne;n=i.ks;o=i.kt;p=i.ku;m.ks=n;m.kt=o;m.ku=p;q=k.ks;r=k.kt;s=k.ku;t=n-q;u=o-r;p=p-s;m.ks=t;m.kt=u;m.ku=p;q=k.ks-l.ks;r=k.kt-l.kt;s=k.ku-l.ku;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.ks=n;m.kt=s;m.ku=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/CI(r);r=m.ks*q;s=m.kt*q;q=m.ku*q;m.ks=r;m.kt=s;m.ku=q;}k=b.ne;b.n3= -(i.ks*k.ks+i.kt
*k.kt+i.ku*k.ku);},
AIt=()=>{let b,c,d,e,f,g,h,i,j;b=R(Bo,8);c=b.data;d=new Bo;C1();d.ks=(-1.0);d.kt=(-1.0);d.ku=(-1.0);c[0]=d;d=new Bo;d.ks=1.0;d.kt=(-1.0);d.ku=(-1.0);c[1]=d;d=new Bo;d.ks=1.0;d.kt=1.0;d.ku=(-1.0);c[2]=d;d=new Bo;d.ks=(-1.0);d.kt=1.0;d.ku=(-1.0);c[3]=d;d=new Bo;d.ks=(-1.0);d.kt=(-1.0);d.ku=1.0;c[4]=d;d=new Bo;d.ks=1.0;d.kt=(-1.0);d.ku=1.0;c[5]=d;d=new Bo;d.ks=1.0;d.kt=1.0;d.ku=1.0;c[6]=d;d=new Bo;d.ks=(-1.0);d.kt=1.0;d.ku=1.0;c[7]=d;AUg=b;b=Ce(24);e=b.data;V0=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.ks;j=i+1|0;e[i]=d.kt;f=j+1|0;e[j]=d.ku;h=h+1|0;}AK2=new Bo;};
function EH(){let a=this;C.call(a);a.oP=0.0;a.oM=0.0;a.oN=0.0;a.oO=0.0;}
let RU=null,RT=null;
let AWg=()=>{let b;b=new EH;b.oP=0.0;b.oM=0.0;b.oN=0.0;b.oO=0.0;RU=b;b=new EH;b.oP=0.0;b.oM=0.0;b.oN=0.0;b.oO=0.0;RT=b;};
function OE(){let a=this;C.call(a);a.zK=null;a.Ag=null;a.zQ=null;}
let ALq=F();
function Bo(){let a=this;C.call(a);a.ks=0.0;a.kt=0.0;a.ku=0.0;}
let ABx=null,ABy=null,ABw=null,AKo=null,ASy=null;
let C1=()=>{C1=BR(Bo);ZC();};
let QA=(a,b)=>{let c,d,e,f,g,h,i;c=a.kt;d=b.ku;e=c*d;f=a.ku;g=b.kt;h=e-f*g;e=b.ks;f=f*e;i=a.ks;d=f-i*d;c=i*g-c*e;a.ks=h;a.kt=d;a.ku=c;return a;},
ABY=(a,b)=>{let c,d,e,f,g,h,i,j;c=b.lF.data;d=a.ks;e=d*c[3];f=a.kt;e=e+f*c[7];g=a.ku;h=1.0/(e+g*c[11]+c[15]);i=(d*c[0]+f*c[4]+g*c[8]+c[12])*h;j=(d*c[1]+f*c[5]+g*c[9]+c[13])*h;d=(d*c[2]+f*c[6]+g*c[10]+c[14])*h;a.ks=i;a.kt=j;a.ku=d;return a;},
ZC=()=>{let b;b=new Bo;C1();b.ks=1.0;b.kt=0.0;b.ku=0.0;ABx=b;b=new Bo;b.ks=0.0;b.kt=1.0;b.ku=0.0;ABy=b;b=new Bo;b.ks=0.0;b.kt=0.0;b.ku=1.0;ABw=b;b=new Bo;b.ks=0.0;b.kt=0.0;b.ku=0.0;AKo=b;ASy=Dj();};
let AFB=F();
let ADu=F(Dx);
let Mq=F(Gj);
let AL3=F();
let AAr=F();
let AQr=F();
function Ka(){let a=this;C.call(a);a.ne=null;a.n3=0.0;}
let TD=F(BP);
let AQw=F();
let AAA=F();
let ANj=F();
let AQp=F();
let AKM=F(0);
let AFQ=F();
let AOc=F();
let GA=null;
let AC6=()=>{let b,c;GA=Ce(16384);b=0;while(b<16384){GA.data[b]=J5((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=GA.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function KP(){let a=this;C.call(a);a.zX=null;a.y4=null;}
let Zq=null,ASF=null;
let MO=()=>{MO=BR(KP);ACG();};
let ACG=()=>{let b,c,d,e,f,g,h,$$je;CE();b=Bw;c=BG(b,M(D3));b=c<0?null:b.k3.data[c];if(b===null){b=new CK;d=new Bh;d.kJ=0;d.km=R(C,4);b.kA=d;b.la=100;a:{try{d=CU(M(D3),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{d=CS(M(D3),null);CV(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}d=null;}b.kU=d;if(d===null){b=new BA;d=new K;d.ke=G(16);E(d,d.kd,A(21));if(M(D3).kp===null)M(D3).kp=W(M(D3).kw.$meta.name);e=M(D3).kp;E(d,d.kd,e);e=new I;f=d.ke;g
=f.data;c=d.kd;h=g.length;if(c>=0&&c<=(h-0|0)){e.kf=L(f.data,0,c);b.kg=1;b.kh=1;b.kj=e;B(b);}e=new H;e.kg=1;e.kh=1;B(e);}Cj(Bw,M(D3),b);}Zq=b;e=new Gd;e.pO=1;e.mY=Ba(4);ASF=e;};
function E8(){let a=this;C.call(a);a.nx=null;a.tI=0.0;a.tJ=0.0;a.vP=0.0;a.vM=0.0;a.tx=0;a.ua=0;}
let In=(a,b,c,d,e)=>{let f,g,h;f=a.nx.nk;g=1.0/f.nn;h=1.0/f.ng;a.ca(b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.tx=d;if(e<0)e= -e|0;a.ua=e;},
PH=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.nx.nk;g=f.nn;h=f.ng;i=Ej(d-b);j=g;i=i*j;a.tx=i+CH(i)*0.5|0;k=Ej(e-c);i=h;k=k*i;l=k+CH(k)*0.5|0;a.ua=l;if(a.tx==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.tI=b;a.tJ=c;a.vP=d;a.vM=e;},
ADR=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.tI*a.nx.nk.nn;e=d+CH(d)*0.5|0;d=a.tJ*a.nx.nk.ng;f=d+CH(d)*0.5|0;g=a.tx;h=a.ua/c|0;i=g/b|0;j=AXt(E8,[i,h]);k=j.data;l=0;while(l<h){m=0;n=e;while(m<i){o=k[l].data;p=new E8;p.nx=a.nx;In(p,n,f,b,c);o[m]=p;m=m+1|0;n=n+b|0;}l=l+1|0;f=f+c|0;}return j;};
function G2(){let a=this;E8.call(a);a.tG=null;a.vb=null;a.At=0.0;a.As=0.0;a.yB=0.0;a.xu=0.0;a.Bl=0.0;a.Bk=0.0;a.AL=0.0;a.yN=0.0;a.yM=0.0;a.s0=0;}
let Ig=(a,b,c,d,e,f)=>{let g,h,i,j;a.tG=Ce(20);g=new BM;g.k_=1.0;g.k$=1.0;g.k9=1.0;g.lc=1.0;CO(g);a.vb=g;a.yN=1.0;a.yM=1.0;a.s0=1;if(b===null){b=new Bj;b.kg=1;b.kh=1;b.kj=A(60);B(b);}a.nx=b;In(a,c,d,e,f);b=a.vb;b.k_=1.0;b.k$=1.0;b.k9=1.0;b.lc=1.0;CO(b);h=Ec(a.vb);i=a.tG.data;i[2]=h;i[7]=h;i[12]=h;i[17]=h;if(e<0)e= -e|0;h=e;if(f<0)f= -f|0;Zx(a,h,f);h=a.yB/2.0;j=a.xu/2.0;a.Bl=h;a.Bk=j;a.s0=1;},
AWW=(a,b,c,d,e)=>{let f=new G2();Ig(f,a,b,c,d,e);return f;},
Zx=(a,b,c)=>{let d,e,f,g;a.yB=b;a.xu=c;if(a.s0)return;if(a.AL===0.0&&a.yN===1.0&&a.yM===1.0){d=a.At;e=d+b;b=a.As;f=b+c;g=a.tG.data;g[0]=d;g[1]=b;g[5]=d;g[6]=f;g[10]=e;g[11]=f;g[15]=e;g[16]=b;return;}a.s0=1;},
APV=(a,b,c,d,e)=>{let f;PH(a,b,c,d,e);f=a.tG.data;f[3]=b;f[4]=e;f[8]=b;f[9]=c;f[13]=d;f[14]=c;f[18]=d;f[19]=e;};
let Rw=F();
let AM0=F();
let Pz=null;
let AX1=()=>{Pz=new BM;};
function BM(){let a=this;C.call(a);a.k_=0.0;a.k$=0.0;a.k9=0.0;a.lc=0.0;}
let LI=null,RK=null,ALc=null,WL=null,AGS=null,TN=0.0,Y4=null,ASn=null,XX=null,AQS=null,ARP=null,AMg=null,AP9=null,AFj=null,AEH=null,ANS=null,ASE=null,AQJ=null,AUf=null,YS=null,AGQ=null,AUa=null,AJV=null,ASV=null,ARx=null,AP1=null,AJR=null,Ye=null,AJx=null,AE0=null,AGi=null,AEp=null,AJs=null,AM7=null,AOd=null;
let CO=a=>{let b,c;b=a.k_;if(b<0.0)a.k_=0.0;else if(b>1.0)a.k_=1.0;c=a.k$;if(c<0.0)a.k$=0.0;else if(c>1.0)a.k$=1.0;c=a.k9;if(c<0.0)a.k9=0.0;else if(c>1.0)a.k9=1.0;c=a.lc;if(c<0.0)a.lc=0.0;else if(c>1.0)a.lc=1.0;return a;},
Ec=a=>{return LD(((255.0*a.lc|0)<<24|(255.0*a.k9|0)<<16|(255.0*a.k$|0)<<8|255.0*a.k_|0)&(-16777217));},
DD=(b,c,d,e)=>{return LD(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));},
Cs=(b,c)=>{b.k_=((c&(-16777216))>>>24|0)/255.0;b.k$=((c&16711680)>>>16|0)/255.0;b.k9=((c&65280)>>>8|0)/255.0;b.lc=(c&255)/255.0;},
Xx=()=>{let b;b=new BM;b.k_=1.0;b.k$=1.0;b.k9=1.0;b.lc=1.0;CO(b);LI=b;b=new BM;Cs(b,(-1077952513));RK=b;b=new BM;Cs(b,2139062271);ALc=b;b=new BM;Cs(b,1061109759);WL=b;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=0.0;b.lc=1.0;CO(b);AGS=b;TN=Ec(LI);b=new BM;b.k_=0.0;b.k$=0.0;b.k9=0.0;b.lc=0.0;CO(b);Y4=b;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=1.0;b.lc=1.0;CO(b);ASn=b;b=new BM;b.k_=0.0;b.k$=0.0;b.k9=0.5;b.lc=1.0;CO(b);XX=b;b=new BM;Cs(b,1097458175);AQS=b;b=new BM;Cs(b,1887473919);ARP=b;b=new BM;Cs(b,(-2016482305));AMg=b;b=new BM;b.k_
=0.0;b.k$=1.0;b.k9=1.0;b.lc=1.0;CO(b);AP9=b;b=new BM;b.k_=0.0;b.k$=0.5;b.k9=0.5;b.lc=1.0;CO(b);AFj=b;b=new BM;Cs(b,16711935);AEH=b;b=new BM;Cs(b,2147418367);ANS=b;b=new BM;Cs(b,852308735);ASE=b;b=new BM;Cs(b,579543807);AQJ=b;b=new BM;Cs(b,1804477439);AUf=b;b=new BM;Cs(b,(-65281));YS=b;b=new BM;Cs(b,(-2686721));AGQ=b;b=new BM;Cs(b,(-626712321));AUa=b;b=new BM;Cs(b,(-5963521));AJV=b;b=new BM;Cs(b,(-1958407169));ASV=b;b=new BM;Cs(b,(-759919361));ARx=b;b=new BM;Cs(b,(-1306385665));AP1=b;b=new BM;Cs(b,(-16776961));AJR
=b;b=new BM;Cs(b,(-13361921));Ye=b;b=new BM;Cs(b,(-8433409));AJx=b;b=new BM;Cs(b,(-92245249));AE0=b;b=new BM;Cs(b,(-9849601));AGi=b;b=new BM;b.k_=1.0;b.k$=0.0;b.k9=1.0;b.lc=1.0;CO(b);AEp=b;b=new BM;Cs(b,(-1608453889));AJs=b;b=new BM;Cs(b,(-293409025));AM7=b;b=new BM;Cs(b,(-1339006721));AOd=b;};
function Oc(){let a=this;C.call(a);a.nf=0;a.oE=0;a.n5=null;a.ot=null;a.n0=null;a.n8=null;a.oZ=0.0;}
let Ix=0.0;
let AM1=(a,b,c,d)=>{if(b!==null&&!(!d&&a.n0===b)){B5.ch(a.nf,10242,b.sn);a.n0=b;}if(c!==null&&!(!d&&a.n8===c)){B5.ch(a.nf,10243,c.sn);a.n8=c;}},
XR=(a,b,c,d)=>{if(b!==null&&!(!d&&a.n5===b)){B5.ch(a.nf,10241,b.oI);a.n5=b;}if(c!==null&&!(!d&&a.ot===c)){B5.ch(a.nf,10240,c.oI);a.ot=c;}},
AFr=()=>{let b,c,d,e,f;b=Ix;if(b>0.0)return b;if(!(B7.qs.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){Ix=1.0;return 1.0;}if(!Dn){c=Ce(16);d=c.data.length;e=new It;f=0+d|0;e.kG=(-1);e.kP=d;e.kn=d;e.kv=0;e.kn=f;e.rf=0;e.rS=0;e.qK=c;}else{e=new C7;c=BN(64);e.kG=(-1);e.kP=64;e.kn=64;e.lp=Ct;e.lT=0;e.lk=c;e.kv=0;e.kn=64;e.mz=1;e.l2=0;e.lp=Dr();e=Fv(e);}CL(e,0);CY(e,e.kP);Bs.cm(34047,e);b=Sp(e,0);Ix=b;return b;},
ASJ=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(c===null)return;if(!c.p2)Qn(c);if(Pj===Vi){c=new T;c.kg=1;c.kh=1;c.kj=A(61);B(c);}if(!c.p2){e=new T;e.kg=1;e.kh=1;e.kj=A(62);B(e);}c.p2=0;f=c.rj;c.rj=null;g=1;h=c.qx;e=f.lR;if(h===(e===null?F2:Iz(e.md)))e=f;else{e=new F$;h=f.lR;J9(e,h===null?f.mB:h.mx,h===null?f.mF:h.mv,c.qx);h=JA;e.rQ=h;i=e.lR;if(i===null){FA(e);h=e.mp;i=Bz(FL.kx);h.globalCompositeOperation=i;}else{j=h!==h?1:0;M7(i.mt,j);}i=f.lR;k=i===null?f.mB:i.mx;l=i===null?f.mF:i.mv;h=e.lR;if(h===null){FA(f);Kw(e,
f.oX,0,0,k,l,0,0,k,l);}else{m=i.mt;n=h.mt;Kf(m,n,0,0,k,l,0,0,k,l);}if(f.pd){e=new T;e.kg=1;e.kh=1;e.kj=A(63);B(e);}EU();Hg(Gh,f.qB);h=f.lR;if(h!==null)Iq(h.mt);f.pd=1;g=1;}B5.cx(3317,1);if(c.xp){c=e.lR;AOu(b,e,c===null?e.mB:c.mx,c===null?e.mF:c.mv);}else{c=B5;h=e.lR;if(h===null)o=6408;else a:{j=h.md;switch(j){case 1:o=6406;break a;case 2:o=6410;break a;case 3:case 5:o=6407;break a;case 4:case 6:o=6408;break a;default:}c=new T;e=new K;e.ke=G(16);Cd(e,e.kd,Cp(A(64)));J(e,e.kd,j,10);h=new I;p=e.ke;q=p.data;d=e.kd;j
=q.length;if(d>=0&&d<=(j-0|0)){h.kf=L(p.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}r=h===null?e.mB:h.mx;k=h===null?e.mF:h.mv;if(h===null)m=6408;else b:{l=h.md;switch(l){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new T;e=new K;e.ke=G(16);Eu(e,e.kd,A(64));J(e,e.kd,l,10);h=new I;p=e.ke;q=p.data;d=e.kd;j=q.length;if(d>=0&&d<=(j-0|0)){h.kf=L(p.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}if(h===null)l=
5121;else c:{l=h.md;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break c;case 6:l=32819;break c;default:c=new T;e=new K;e.ke=G(16);Cd(e,e.kd,Cp(A(64)));J(e,e.kd,l,10);h=new I;p=e.ke;q=p.data;d=e.kd;j=q.length;if(d>=0&&d<=(j-0|0)){h.kf=L(p.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}l=5121;}c.cA(b,d,o,r,k,0,m,l,e.q_);}if(g){if(e.pd){e=new T;e.kg=1;e.kh=1;e.kj=A(63);B(e);}EU();Hg(Gh,e.qB);c=e.lR;if(c!==null)Iq(c.mt);e.pd=1;}},
AWb=()=>{Ix=0.0;};
function FE(){Oc.call(this);this.nk=null;}
let DA=null;
let Gl=(a,b)=>{let c,d;a.nk=b;if(!b.p2)Qn(b);B5.cB(a.nf,a.oE);ASJ(3553,b,0);XR(a,a.n5,a.ot,1);AM1(a,a.n0,a.n8,1);c=a.oZ;d=AFr();if(d!==1.0){c=AOJ(c,d);Bs.cH(3553,34046,c);a.oZ=c;}B5.cB(a.nf,0);},
AKN=a=>{let b,c,d,e,f,g,h,i;b=a.nk;if(!(b instanceof Lq)){b=a;if(!b.$id$){c=Fj();b.$id$=c;}d=Bi(a.$id$,4);b=new K;b.ke=G(16);E(b,b.kd,A(1));e=b.kd;if(d===null)d=A(2);E(b,e,d);c=new I;f=b.ke;g=f.data;h=b.kd;i=g.length;if(h>=0&&h<=(i-0|0)){c.kf=L(f.data,0,h);return c;}b=new H;b.kg=1;b.kh=1;B(b);}c=b;if(!c.$id$){d=Fj();c.$id$=d;}d=Bi(b.$id$,4);b=new K;b.ke=G(16);E(b,b.kd,A(1));e=b.kd;if(d===null)d=A(2);E(b,e,d);c=new I;f=b.ke;g=f.data;h=b.kd;i=g.length;if(h>=0&&h<=(i-0|0)){c.kf=L(f.data,0,h);return c;}b=new H;b.kg
=1;b.kh=1;B(b);},
ANV=()=>{let b,c,d,e;b=new Jp;c=Kh(16);b.pL=0;d=R(F_,c);e=d.data;b.mw=d;b.tQ=0.75;b.qL=e.length*0.75|0;DA=b;};
function Bh(){let a=this;C.call(a);a.km=null;a.ki=0;a.kJ=0;a.kS=null;}
let PZ=a=>{a.kJ=1;a.km=R(C,16);},
C9=()=>{let a=new Bh();PZ(a);return a;},
Wo=(a,b)=>{a.kJ=1;a.km=R(C,b);},
AXf=a=>{let b=new Bh();Wo(b,a);return b;},
Qj=(a,b,c)=>{a.kJ=b;a.km=R(C,c);},
AVi=(a,b)=>{let c=new Bh();Qj(c,a,b);return c;},
IF=(a,b,c,d)=>{a.kJ=b;if(d===null){d=new Ds;d.kg=1;d.kh=1;B(d);}if(d===M(Bp)){d=new Bj;d.kg=1;d.kh=1;B(d);}if(c>=0){a.km=Ee(d.kw,c);return;}d=new Eh;d.kg=1;d.kh=1;B(d);},
AU5=(a,b,c)=>{let d=new Bh();IF(d,a,b,c);return d;},
Q7=(a,b)=>{a.kJ=1;if(b===null){b=new Ds;b.kg=1;b.kh=1;B(b);}if(b!==M(Bp)){a.km=Ee(b.kw,16);return;}b=new Bj;b.kg=1;b.kh=1;B(b);},
AVp=a=>{let b=new Bh();Q7(b,a);return b;},
VJ=(a,b)=>{let c,d,e,f,g;c=b.kJ;d=b.ki;e=b.km.constructor;if(e===null)f=null;else{f=e.classObject;if(f===null){f=new BD;f.kw=e;g=f;e.classObject=g;}}g=EA(f);a.kJ=c;if(g===null){b=new Ds;b.kg=1;b.kh=1;B(b);}if(g===M(Bp)){b=new Bj;b.kg=1;b.kh=1;B(b);}if(d>=0){g=Ee(g.kw,d);a.km=g;c=b.ki;a.ki=c;GX(b.km,0,g,0,c);return;}b=new Eh;b.kg=1;b.kh=1;B(b);},
AUL=a=>{let b=new Bh();VJ(b,a);return b;},
Vm=(a,b)=>{L$(a,1,b,0,b.data.length);},
AXp=a=>{let b=new Bh();Vm(b,a);return b;},
L$=(a,b,c,d,e)=>{let f,g,h;f=c.constructor;if(f===null)g=null;else{g=f.classObject;if(g===null){g=new BD;g.kw=f;h=g;f.classObject=h;}}h=EA(g);a.kJ=b;if(h===null){h=new Ds;h.kg=1;h.kh=1;B(h);}if(h===M(Bp)){h=new Bj;h.kg=1;h.kh=1;B(h);}if(e>=0){h=Ee(h.kw,e);a.km=h;a.ki=e;GX(c,d,h,0,e);return;}h=new Eh;h.kg=1;h.kh=1;B(h);},
AWt=(a,b,c,d)=>{let e=new Bh();L$(e,a,b,c,d);return e;},
S=(a,b)=>{let c,d,e,f;c=a.km;d=c.data;e=a.ki;if(e==d.length){e=e*1.75|0;if(8>e)e=8;c=I8(a,e);}c=c.data;f=a.ki;a.ki=f+1|0;c[f]=b;},
Q=(a,b)=>{let c,d,e,f,g,h,i;if(b<a.ki)return a.km.data[b];c=new H;d=new K;d.ke=G(16);E(d,d.kd,A(18));J(d,d.kd,b,10);E(d,d.kd,A(19));b=a.ki;J(d,d.kd,b,10);e=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);c.kg=1;c.kh=1;c.kj=e;B(c);}d=new H;d.kg=1;d.kh=1;B(d);},
Tc=(a,b,c)=>{let d,e,f,g,h,i;d=a.ki;if(b>d){c=new H;e=new K;e.ke=G(16);E(e,e.kd,A(65));J(e,e.kd,b,10);E(e,e.kd,A(66));f=a.ki;J(e,e.kd,f,10);g=new I;h=e.ke;i=h.data;d=e.kd;f=i.length;if(d>=0&&d<=(f-0|0)){g.kf=L(h.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}h=a.km;if(d==h.data.length){d=d*1.75|0;if(8>d)d=8;h=I8(a,d);}if(!a.kJ){i=h.data;i[a.ki]=i[b];}else Dw(h,b,h,b+1|0,a.ki-b|0);h=h.data;a.ki=a.ki+1|0;h[b]=c;},
LG=(a,b,c)=>{let d,e,f;a:{d=a.km;e=a.ki-1|0;if(!(!c&&b!==null)){while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(f[e]===b)break;e=c;}return 1;}while(true){if(e<0)break a;f=d.data;c=e+(-1)|0;if(b.cO(f[e]))return 1;e=c;}}return 0;},
DO=(a,b,c)=>{let d,e,f;a:{d=a.km;if(!c&&b!==null){e=0;f=a.ki;while(true){if(e>=f)break a;if(b!==d.data[e]?0:1)break;e=e+1|0;}return e;}e=0;f=a.ki;while(true){if(e>=f)break a;if(d.data[e]===b)break;e=e+1|0;}return e;}return (-1);},
I3=(a,b,c)=>{let d,e,f;a:{d=a.km;if(!(!c&&b!==null)){e=0;f=a.ki;while(e<f){if(d.data[e]===b){CA(a);Do(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.ki;while(true){if(e>=f)break a;if(b.cO(d.data[e])){CA(a);Do(a,e);return 1;}e=e+1|0;}}}return 0;},
Do=(a,b)=>{let c,d,e,f,g,h,i;c=a.ki;if(b<c){d=a.km;e=d.data;f=e[b];g=c-1|0;a.ki=g;if(!a.kJ)e[b]=e[g];else Dw(d,b+1|0,d,b,g-b|0);e[a.ki]=null;return f;}f=new H;h=new K;h.ke=G(16);E(h,h.kd,A(18));J(h,h.kd,b,10);E(h,h.kd,A(19));b=a.ki;J(h,h.kd,b,10);i=new I;d=h.ke;e=d.data;g=h.kd;c=e.length;if(g>=0&&g<=(c-0|0)){i.kf=L(d.data,0,g);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;f.kg=1;f.kh=1;B(f);},
Q0=a=>{let b,c,d,e,f,g;b=a.km;c=0;d=a.ki;e=null;if(c>d){e=new Bj;e.kg=1;e.kh=1;B(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.ki=0;},
I8=(a,b)=>{let c,d,e,f,g,h;c=a.km;d=c.constructor;if(d===null)e=null;else{e=d.classObject;if(e===null){e=new BD;e.kw=d;f=e;d.classObject=f;}}e=EA(e);if(e===null){e=new Ds;e.kg=1;e.kh=1;B(e);}if(e===M(Bp)){e=new Bj;e.kg=1;e.kh=1;B(e);}if(b<0){e=new Eh;e.kg=1;e.kh=1;B(e);}e=Ee(e.kw,b);d=e.data;g=a.ki;h=d.length;if(g<h)h=g;GX(c,0,e,0,h);a.km=e;return e;},
GN=a=>{let b;if(CJ){b=new Cw;b.k8=1;b.lg=a;b.mi=1;return b;}if(a.kS===null){b=new C_;b.mu=a;b.my=1;a.kS=b;}return CT(a.kS);},
SL=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.kJ)return 0;if(!(b instanceof Bh))return 0;c=b;if(!c.kJ)return 0;d=a.ki;if(d!=c.ki)return 0;e=a.km;f=c.km;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cO(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;},
VR=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.ki)return A(67);b=a.km;c=new SC;d=G(32);e=d.data;c.nd=d;f=c.mk;if(f==e.length)GF(c,f+1|0);b=b.data;e=c.nd.data;g=c.mk;c.mk=g+1|0;e[g]=91;h=b[0];if(h===null)J4(c);else{h=h.T();if(h===null)J4(c);else{i=h.kf.length;j=c.mk+i|0;if(j>c.nd.data.length)GF(c,j);LB(h,0,i,c.nd,c.mk);c.mk=j;}}i=1;while(i<a.ki){g=A(47).kf.length;k=c.mk+g|0;if(k>c.nd.data.length)GF(c,k);LB(A(47),0,g,c.nd,c.mk);c.mk=k;h=b[i];if(h===null)J4(c);else{h=h.T();if(h===null)J4(c);else{k=h.kf.length;j=c.mk+k|0;if
(j>c.nd.data.length)GF(c,j);LB(h,0,k,c.nd,c.mk);c.mk=j;}}i=i+1|0;}f=c.mk;if(f==c.nd.data.length)GF(c,f+1|0);a:{b=c.nd;e=b.data;g=c.mk;f=g+1|0;c.mk=f;e[g]=93;if(!f)c=A(68);else{c=new I;g=e.length;if(f<0)break a;if(f>(g-0|0))break a;c.kf=L(b.data,0,f);}return c;}c=new H;c.kg=1;c.kh=1;B(c);};
function Kt(){let a=this;C.call(a);a.ve=0;a.pM=null;a.k3=null;a.w_=0.0;a.v1=0;a.ty=0;a.tt=0;}
let Q2=null;
let AKa=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.w_=c;d=J1(b,c);a.v1=d*c|0;b=d-1|0;a.tt=b;a.ty=Fy(X(b));a.pM=R(C,d);a.k3=R(C,d);return;}e=new Bj;f=new K;f.ke=G(16);E(f,f.kd,A(69));Gb(f,f.kd,c);g=new I;h=f.ke;i=h.data;d=f.kd;j=i.length;if(d>=0&&d<=(j-0|0)){g.kf=L(h.data,0,d);e.kg=1;e.kh=1;e.kj=g;B(e);}f=new H;f.kg=1;f.kh=1;B(f);},
E$=(a,b)=>{let c=new Kt();AKa(c,a,b);return c;},
BG=(a,b)=>{let c,d,e;if(b===null){c=new Bj;c.kg=1;c.kh=1;c.kj=A(70);B(c);}d=a.pM;e=Bm(Bg(Bd(X(b.cU()),D(2135587861, 2654435769)),a.ty));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cO(b))break;e=(e+1|0)&a.tt;}return e;},
Cj=(a,b,c)=>{let d,e,f;d=BG(a,b);if(d>=0){e=a.k3.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.pM.data;e[d]=b;a.k3.data[d]=c;d=a.ve+1|0;a.ve=d;if(d>=a.v1)ABU(a,e.length<<1);return null;},
ABU=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.pM.data.length;a.v1=b*a.w_|0;d=b-1|0;a.tt=d;a.ty=Fy(X(d));e=a.pM;f=a.k3;a.pM=R(C,b);a.k3=R(C,b);if(a.ve>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.pM;b=Bm(Bg(Bd(X(g.cU()),D(2135587861, 2654435769)),a.ty));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.tt;}j[b]=g;a.k3.data[b]=h;}d=d+1|0;}}}},
AVG=()=>{Q2=new C;};
let AGn=F(Kt);
let ATf=F();
function Ea(){let a=this;C.call(a);a.m6=0;a.mR=0;a.nc=0;a.m5=0;a.oB=0;a.m$=null;a.oS=0;a.p4=0;}
let AKV=(a,b)=>{if(!(b instanceof Ea))return 0;return AF7(a,b);},
AF7=(a,b)=>{let c,d,e;a:{if(b!==null&&a.m6==b.m6&&a.mR==b.mR&&a.m5==b.m5&&a.nc==b.nc){c=a.m$;d=b.m$;if(c===d)e=1;else if(!(d instanceof I))e=0;else{d=d;e=c.kf!==d.kf?0:1;}if(e&&a.oS==b.oS){e=1;break a;}}e=0;}return e;};
let ATx=F();
let AHS=F();
let ALn=F();
let AJn=F();
let R$=F();
let XW=null;
let Tp=()=>{Tp=BR(R$);AH0();};
let AH0=()=>{let b,c,d;b=new KW;Oe();c=new Bo;C1();b.xB=c;d=new Bo;b.xL=d;b.xd=new Bo;b.xN=new Bo;c.ks=0.0;c.kt=0.0;c.ku=0.0;d.ks=0.0;d.kt=0.0;d.ku=0.0;AL$(b,c,d);XW=b;};
let YR=F();
let AKf=F();
let AIZ=F();
let AJM=F();
let AP2=F();
let AFL=F();
let ARA=F();
let AHt=F();
let AAK=F();
let AB9=F();
let J_=F(BF);
let ATV=null,ARD=null,AE6=null;
let AGg=()=>{let b,c;b=new J_;b.kx=A(71);b.kq=0;ATV=b;c=new J_;c.kx=A(72);c.kq=1;ARD=c;AE6=V(J_,[b,c]);};
let AKk=F();
let Uc=F(0);
let DN=F();
let Y2=F(DN);
let Y0=F(DN);
let AIo=F(DN);
let ADm=F(DN);
let ANx=F(DN);
let Ml=F(DN);
let ADa=F(Ml);
let H3=F(0);
let AEn=F();
let FH=F(0);
let ANh=F();
let ARw=F();
let ABz=F();
let E0=F();
let AMa=F(E0);
let HW=F(E0);
let D5=F(HW);
let AEG=null;
let Rv=()=>{Rv=BR(D5);Zy();};
let Zy=()=>{let b;b=new Bo;C1();AEG=b;};
let AMZ=F();
let AP0=F(D5);
let AHH=F(D5);
let ASk=F(E0);
let R0=null;
let AVT=()=>{R0=Ce(3);};
let LK=F(E0);
let YK=F(LK);
let AC7=F(D5);
let Hu=F(HW);
let AJh=F(Hu);
let AHE=F(D5);
let AJP=F(D5);
let AJe=F(Hu);
let HU=F(BF);
let AI4=null,AL7=null,AEI=null,ABW=null;
let ALj=()=>{let b,c,d;b=new HU;b.kx=A(73);b.kq=0;AI4=b;c=new HU;c.kx=A(74);c.kq=1;AL7=c;d=new HU;d.kx=A(75);d.kq=2;AEI=d;ABW=V(HU,[b,c,d]);};
let Gn=F();
let Nh=F(Gn);
let Xm=F(Nh);
let H$=F(BF);
let ARC=null,ASc=null,W5=null,ASs=null;
let AG$=()=>{let b,c,d;b=new H$;b.kx=A(76);b.kq=0;ARC=b;c=new H$;c.kx=A(77);c.kq=1;ASc=c;d=new H$;d.kx=A(78);d.kq=2;W5=d;ASs=V(H$,[b,c,d]);};
let Dd=F(Gn);
let Iy=F(Dd);
let ABl=F();
let G$=F(Dd);
let AQB=null,AQA=null,AQC=null,ARJ=null;
let UZ=()=>{UZ=BR(G$);AIJ();};
let AIJ=()=>{let b;b=new Bo;C1();AQB=b;AQA=new Bo;AQC=new Bo;b=new EH;b.oP=0.0;b.oM=0.0;b.oN=0.0;b.oO=1.0;ARJ=b;};
let EO=F(G$);
let Gt=F(EO);
let AEj=F(Gt);
let H8=F(Dd);
let AUb=F(H8);
let APX=F(Dd);
let FZ=F(Dd);
let YU=F(FZ);
let HG=F(Dd);
let AEa=F(EO);
let AGA=F(EO);
let K9=F(Dd);
let AMb=F(K9);
let AAe=F(FZ);
let AHQ=F(Gt);
let AL4=F(Dd);
let AJ0=F(FZ);
let AMh=F(Dd);
let AN8=F(G$);
let AGG=F(Dx);
let AAW=F(Dx);
let ABc=F(EO);
let AMM=F(HG);
let ASm=F(Iy);
let AKW=F(Iy);
let ANR=F(HG);
let AIM=F(Gt);
let AS6=F(H8);
let EY=F(Gn);
let AJm=F(EY);
let F5=F();
let ANb=F(F5);
let AOA=F(EY);
let APW=F(EY);
let AQZ=F(F5);
let ADS=F(EY);
let AP3=F(F5);
let KM=F(0);
let Ot=F(0);
function BD(){let a=this;C.call(a);a.kp=null;a.kw=null;a.qR=null;}
let U5=0;
let AW3=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BD;c.kw=b;d=c;b.classObject=d;}return c;},
AJc=a=>{let b,c,d,e,f,g;b=a;if(!b.$id$){c=Fj();b.$id$=c;}d=a.$id$;b=new K;b.ke=G(16);E(b,b.kd,A(79));J(b,b.kd,d,10);c=new I;e=b.ke;f=e.data;g=b.kd;d=f.length;if(g>=0&&g<=(d-0|0)){c.kf=L(e.data,0,g);return c;}b=new H;b.kg=1;b.kh=1;B(b);},
EA=a=>{let b,c,d;b=a.kw.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new BD;c.kw=b;d=c;b.classObject=d;}}return c;},
AIg=()=>{D4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Ty(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Bp,callable:function(obj,args){Ko();O5();return null;}}];D3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Rn(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[D3],returnType:Bp,callable:function(obj,
args){AUU(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){AWx(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return AU3(obj);}}];Bb.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){SV(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,
args){QB(obj);return null;}},{name:"getStageX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CN,callable:function(obj,args){return AV8(obj);}},{name:"setStageX",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:Bp,callable:function(obj,args){AWV(obj,DY(args[0]));return null;}},{name:"getStageY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CN,callable:function(obj,args){return AYy(obj);}},{name:"setStageY",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:Bp,callable:function(obj,
args){AVE(obj,DY(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:DB,callable:function(obj,args){return AWS(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[DB],returnType:Bp,callable:function(obj,args){AWM(obj,args[0]);return null;}},{name:"getPointer",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AXZ(obj);}},{name:"setPointer",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,
args){AV9(obj,B_(args[0]));return null;}},{name:"getButton",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AWQ(obj);}},{name:"setButton",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){AVQ(obj,B_(args[0]));return null;}},{name:"getKeyCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AWc(obj);}},{name:"setKeyCode",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable
:function(obj,args){AUY(obj,B_(args[0]));return null;}},{name:"getCharacter",modifiers:0,accessLevel:3,parameterTypes:[],returnType:K4,callable:function(obj,args){return AWs(obj);}},{name:"setCharacter",modifiers:0,accessLevel:3,parameterTypes:[K4],returnType:Bp,callable:function(obj,args){AW$(obj,AUB(args[0]));return null;}},{name:"getScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CN,callable:function(obj,args){return AUJ(obj);}},{name:"getScrollAmountY",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:CN,callable:function(obj,args){return AXg(obj);}},{name:"setScrollAmountX",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:Bp,callable:function(obj,args){AYl(obj,DY(args[0]));return null;}},{name:"setScrollAmountY",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:Bp,callable:function(obj,args){AVm(obj,DY(args[0]));return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AXV(obj);}},{name:"setRelatedActor",modifiers
:0,accessLevel:3,parameterTypes:[Ci],returnType:Bp,callable:function(obj,args){AUI(obj,args[0]);return null;}},{name:"toCoordinates",modifiers:0,accessLevel:3,parameterTypes:[Ci,Z],returnType:Z,callable:function(obj,args){return AX0(obj,args[0],args[1]);}},{name:"isTouchFocusCancel",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cm,callable:function(obj,args){return AWl(obj);}},{name:"getTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cm,callable:function(obj,args){return AVU(obj);}},
{name:"setTouchFocus",modifiers:0,accessLevel:3,parameterTypes:[Cm],returnType:Bp,callable:function(obj,args){AXI(obj,DQ(args[0]));return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return O6(obj);}}];Bh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){PZ(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){Wo(obj
,B_(args[0]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cm,BV],returnType:Bp,callable:function(obj,args){Qj(obj,DQ(args[0]),B_(args[1]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cm,BV,BD],returnType:Bp,callable:function(obj,args){IF(obj,DQ(args[0]),B_(args[1]),args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BD],returnType:Bp,callable:function(obj,args){Q7(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[Bh],returnType:Bp,callable:function(obj,args){VJ(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Eo(C)],returnType:Bp,callable:function(obj,args){Vm(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Cm,Eo(C),BV,BV],returnType:Bp,callable:function(obj,args){L$(obj,DQ(args[0]),args[1],B_(args[2]),B_(args[3]));return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Bp,callable:function(obj,args)
{S(obj,args[0]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C],returnType:Bp,callable:function(obj,args){AVW(obj,args[0],args[1]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C],returnType:Bp,callable:function(obj,args){AXO(obj,args[0],args[1],args[2]);return null;}},{name:"add",modifiers:0,accessLevel:3,parameterTypes:[C,C,C,C],returnType:Bp,callable:function(obj,args){AYc(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"addAll",modifiers:0,accessLevel
:3,parameterTypes:[Bh],returnType:Bp,callable:function(obj,args){AWh(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Bh,BV,BV],returnType:Bp,callable:function(obj,args){AUN(obj,args[0],B_(args[1]),B_(args[2]));return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Eo(C)],returnType:Bp,callable:function(obj,args){AV3(obj,args[0]);return null;}},{name:"addAll",modifiers:0,accessLevel:3,parameterTypes:[Eo(C),BV,BV],returnType:Bp,callable:function(obj,args){AVc(obj
,args[0],B_(args[1]),B_(args[2]));return null;}},{name:"get",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return Q(obj,B_(args[0]));}},{name:"set",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bp,callable:function(obj,args){AXk(obj,B_(args[0]),args[1]);return null;}},{name:"insert",modifiers:0,accessLevel:3,parameterTypes:[BV,C],returnType:Bp,callable:function(obj,args){Tc(obj,B_(args[0]),args[1]);return null;}},{name:"insertRange",modifiers:0,accessLevel
:3,parameterTypes:[BV,BV],returnType:Bp,callable:function(obj,args){AXB(obj,B_(args[0]),B_(args[1]));return null;}},{name:"swap",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bp,callable:function(obj,args){AYx(obj,B_(args[0]),B_(args[1]));return null;}},{name:"contains",modifiers:0,accessLevel:3,parameterTypes:[C,Cm],returnType:Cm,callable:function(obj,args){return LG(obj,args[0],DQ(args[1]));}},{name:"containsAll",modifiers:0,accessLevel:3,parameterTypes:[Bh,Cm],returnType:Cm,callable:function(obj,
args){return AWp(obj,args[0],DQ(args[1]));}},{name:"containsAny",modifiers:0,accessLevel:3,parameterTypes:[Bh,Cm],returnType:Cm,callable:function(obj,args){return AWR(obj,args[0],DQ(args[1]));}},{name:"indexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Cm],returnType:BV,callable:function(obj,args){return DO(obj,args[0],DQ(args[1]));}},{name:"lastIndexOf",modifiers:0,accessLevel:3,parameterTypes:[C,Cm],returnType:BV,callable:function(obj,args){return AXd(obj,args[0],DQ(args[1]));}},{name:"removeValue",modifiers
:0,accessLevel:3,parameterTypes:[C,Cm],returnType:Cm,callable:function(obj,args){return I3(obj,args[0],DQ(args[1]));}},{name:"removeIndex",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:C,callable:function(obj,args){return Do(obj,B_(args[0]));}},{name:"removeRange",modifiers:0,accessLevel:3,parameterTypes:[BV,BV],returnType:Bp,callable:function(obj,args){AVB(obj,B_(args[0]),B_(args[1]));return null;}},{name:"removeAll",modifiers:0,accessLevel:3,parameterTypes:[Bh,Cm],returnType:Cm,callable:function(obj,
args){return AYe(obj,args[0],DQ(args[1]));}},{name:"pop",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AUS(obj);}},{name:"peek",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AX_(obj);}},{name:"first",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable:function(obj,args){return AYw(obj);}},{name:"notEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cm,callable:function(obj,args){return AXW(obj
);}},{name:"isEmpty",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cm,callable:function(obj,args){return AVg(obj);}},{name:"clear",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Q0(obj);return null;}},{name:"shrink",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Eo(C),callable:function(obj,args){return AXe(obj);}},{name:"ensureCapacity",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Eo(C),callable:function(obj,args){return AXN(obj,B_(args[0]));}},
{name:"setSize",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Eo(C),callable:function(obj,args){return AX8(obj,B_(args[0]));}},{name:"resize",modifiers:0,accessLevel:2,parameterTypes:[BV],returnType:Eo(C),callable:function(obj,args){return I8(obj,B_(args[0]));}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){AXH(obj);return null;}},{name:"sort",modifiers:0,accessLevel:3,parameterTypes:[IB],returnType:Bp,callable:function(obj,args){AYh(obj,args[0]);return null;}},
{name:"selectRanked",modifiers:0,accessLevel:3,parameterTypes:[IB,BV],returnType:C,callable:function(obj,args){return AXL(obj,args[0],B_(args[1]));}},{name:"selectRankedIndex",modifiers:0,accessLevel:3,parameterTypes:[IB,BV],returnType:BV,callable:function(obj,args){return AXx(obj,args[0],B_(args[1]));}},{name:"reverse",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){AXJ(obj);return null;}},{name:"shuffle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable
:function(obj,args){AUz(obj);return null;}},{name:"iterator",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cw,callable:function(obj,args){return GN(obj);}},{name:"select",modifiers:0,accessLevel:3,parameterTypes:[Ol],returnType:DW,callable:function(obj,args){return AYt(obj,args[0]);}},{name:"truncate",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){AUT(obj,B_(args[0]));return null;}},{name:"random",modifiers:0,accessLevel:3,parameterTypes:[],returnType:C,callable
:function(obj,args){return AWX(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Eo(C),callable:function(obj,args){return AUR(obj);}},{name:"toArray",modifiers:0,accessLevel:3,parameterTypes:[BD],returnType:Eo(C),callable:function(obj,args){return AVb(obj,args[0]);}},{name:"hashCode",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AU7(obj);}},{name:"equals",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Cm,callable:function(obj,
args){return SL(obj,args[0]);}},{name:"equalsIdentity",modifiers:0,accessLevel:3,parameterTypes:[C],returnType:Cm,callable:function(obj,args){return AXS(obj,args[0]);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I,callable:function(obj,args){return VR(obj);}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[I],returnType:I,callable:function(obj,args){return AXC(obj,args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[BD],returnType:Bh,callable:function(obj,
args){return AXo(args[0]);}},{name:"of",modifiers:512,accessLevel:3,parameterTypes:[Cm,BV,BD],returnType:Bh,callable:function(obj,args){return AX7(DQ(args[0]),B_(args[1]),args[2]);}},{name:"with",modifiers:512,accessLevel:3,parameterTypes:[Eo(C)],returnType:Bh,callable:function(obj,args){return AU4(args[0]);}},{name:"iterator",modifiers:96,accessLevel:3,parameterTypes:[],returnType:If,callable:function(obj,args){return AVe(obj);}}];D7.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:Bp,callable:function(obj,args){UK(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Ph(obj);return null;}}];Dq.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Qs(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ],returnType:Bp,callable:function(obj,args){Oi(obj,args[0]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,
BQ],returnType:Bp,callable:function(obj,args){Wx(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,BQ,BQ],returnType:Bp,callable:function(obj,args){V3(obj,args[0],args[1],args[2]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,BQ,BQ,BQ],returnType:Bp,callable:function(obj,args){WP(obj,args[0],args[1],args[2],args[3]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[BQ,BQ,BQ,BQ,BQ],returnType:Bp,callable:function(obj,
args){Sy(obj,args[0],args[1],args[2],args[3],args[4]);return null;}},{name:"act",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:Cm,callable:function(obj,args){return Ow(obj,DY(args[0]));}},{name:"restart",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Vf(obj);return null;}}];DC.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Pm(obj);return null;}},{name:"begin",modifiers:0,accessLevel:2,parameterTypes
:[],returnType:Bp,callable:function(obj,args){Tt(obj);return null;}},{name:"update",modifiers:0,accessLevel:2,parameterTypes:[CN],returnType:Bp,callable:function(obj,args){SO(obj,DY(args[0]));return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){UU(obj);return null;}},{name:"setStartPosition",modifiers:0,accessLevel:3,parameterTypes:[CN,CN],returnType:Bp,callable:function(obj,args){AW7(obj,DY(args[0]),DY(args[1]));return null;}},{name:"setPosition",modifiers
:0,accessLevel:3,parameterTypes:[CN,CN],returnType:Bp,callable:function(obj,args){AV$(obj,DY(args[0]),DY(args[1]));return null;}},{name:"setPosition",modifiers:0,accessLevel:3,parameterTypes:[CN,CN,BV],returnType:Bp,callable:function(obj,args){AXw(obj,DY(args[0]),DY(args[1]),B_(args[2]));return null;}},{name:"getX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CN,callable:function(obj,args){return AV0(obj);}},{name:"setX",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:Bp,callable:function(obj,
args){AVs(obj,DY(args[0]));return null;}},{name:"getY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CN,callable:function(obj,args){return AYp(obj);}},{name:"setY",modifiers:0,accessLevel:3,parameterTypes:[CN],returnType:Bp,callable:function(obj,args){AWE(obj,DY(args[0]));return null;}},{name:"getStartX",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CN,callable:function(obj,args){return AWC(obj);}},{name:"getStartY",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CN,callable:function(obj,
args){return AXE(obj);}},{name:"getAlignment",modifiers:0,accessLevel:3,parameterTypes:[],returnType:BV,callable:function(obj,args){return AWa(obj);}},{name:"setAlignment",modifiers:0,accessLevel:3,parameterTypes:[BV],returnType:Bp,callable:function(obj,args){AVI(obj,B_(args[0]));return null;}}];Db.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable:function(obj,args){Su(obj);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Bp,callable
:function(obj,args){WK(obj);return null;}},{name:"isFocused",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cm,callable:function(obj,args){return AW4(obj);}},{name:"setFocused",modifiers:0,accessLevel:3,parameterTypes:[Cm],returnType:Bp,callable:function(obj,args){AUF(obj,DQ(args[0]));return null;}},{name:"getType",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ha,callable:function(obj,args){return AVk(obj);}},{name:"setType",modifiers:0,accessLevel:3,parameterTypes:[Ha],returnType:Bp,callable
:function(obj,args){AXm(obj,args[0]);return null;}},{name:"getRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ci,callable:function(obj,args){return AYk(obj);}},{name:"setRelatedActor",modifiers:0,accessLevel:3,parameterTypes:[Ci],returnType:Bp,callable:function(obj,args){AV4(obj,args[0]);return null;}}];},
N_=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.kw.$meta.primitive?1:0)&&!(a.kw.$meta.item===null?0:1)){if(a.qR===null){if(!U5){U5=1;AIg();}b=a.kw.$meta.methods;a.qR=R(H1,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof Ge())?e:e[Bt]===true?e:e.kW;g=W(f.name);if(g===A(80))h=1;else if(!(A(80) instanceof I))h=0;else{e=A(80);h=g.kf!==e.kf?0:1;}if(h){g=f.parameterTypes;i=R(BD,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new BD;e.kw
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.qR.data;h=c+1|0;e=new H1;g=W(f.name);k=f.modifiers;n=f.accessLevel;f=DI(f.callable,"call");e.lY=a;e.zN=g;e.r2=k;e.s2=n;e.pj=i;e.vB=f;j[c]=e;c=h;}d=d+1|0;}i=a.qR;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new BD;e.kw=b;f=e;b.classObject=f;}}e=EA(e);if(e===null){e=new Ds;e.kg=1;e.kh=1;B(e);}if(e===M(Bp)){e=new Bj;e.kg=1;e.kh=1;B(e);}if(c<0){e=new Eh;e.kg=1;e.kh=1;B(e);}i=i.data;f=Ee(e.kw,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=
i[c];c=c+1|0;}a.qR=f;}return a.qR.p();}return R(H1,0);},
ASz=a=>{let b,c,d,e,f,g,h,i,j,k;b=(N_(a)).data;c=b.length;d=R(H1,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Lz(h.r2,h.s2)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=BW(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new BD;h.kw=j;k=h;j.classObject=k;}}j=EA(h);if(j===null){h=new Ds;h.kg=1;h.kh=1;B(h);}if(j===M(Bp)){h=new Bj;h.kg=1;h.kh=1;B(h);}if(f<0){h=new Eh;h.kg=1;h.kh=1;B(h);}k=Ee(j.kw,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
APw=(a,b)=>{let c,d,e,f;c=(N_(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HM;f.kg=1;f.kh=1;B(f);}f=c[e];if(Vc(f.pj.p(),b))break;e=e+1|0;}return f;},
APu=(a,b)=>{let c,d,e,f,g;c=(N_(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HM;f.kg=1;f.kh=1;B(f);}f=c[e];g=!(Lz(f.r2,f.s2)&1)?0:1;if(g&&Vc(f.pj.p(),b))break;e=e+1|0;}return f;};
let ACe=F();
let AM6=b=>{let c,d,e,f,g;if(b===null)return null;c=BN(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof Ge())?g:g[Bt]===true?g:g.kW;e=e+1|0;}return c;},
B$=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
DI=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let AA3=F();
let XO=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
MY=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(MY(d[e],c))return 1;e=e+1|0;}return 0;},
EX=b=>{setTimeout(()=>{AXh(Po)(b);},0);},
Po=b=>{b.c4();},
Nz=(b,c)=>{setTimeout(()=>{Po(b);},c);},
AH1=()=>{return [];};
function DE(){let a=this;C.call(a);a.kj=null;a.lI=null;a.kg=0;a.kh=0;a.zC=null;}
let U=a=>{a.kg=1;a.kh=1;},
AXF=()=>{let a=new DE();U(a);return a;},
Kj=(a,b)=>{a.kg=1;a.kh=1;a.kj=b;},
AU6=a=>{let b=new DE();Kj(b,a);return b;},
SK=(a,b,c)=>{a.kg=1;a.kh=1;a.kj=b;a.lI=c;},
AW9=(a,b)=>{let c=new DE();SK(c,a,b);return c;},
Bl=a=>{return a;},
AOS=a=>{return a.kj;},
AV1=a=>{return a.c5();},
AXv=a=>{let b;b=a.lI;if(b===a)b=null;return b;},
AWe=a=>{let b,c;if(Dv===null){b=new F9;c=new Cu;c.l8=BN(32);b.mq=c;c=new K;Bu(c);c.ke=G(16);b.l_=c;b.l$=G(32);b.ma=0;b.mb=Co;Dv=b;}Kr(a,Dv);},
Kr=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new BD;d.kw=c;e=d;c.classObject=e;}}if(d.kp===null)d.kp=W(d.kw.$meta.name);DP(Bz(d.kp));d=a.c5();if(d!==null){c=new K;c.ke=G(16);E(c,c.kd,A(81));E(c,c.kd,d);e=new I;f=c.ke;g=f.data;h=c.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);DP(Bz(e));}else{b=new H;b.kg=1;b.kh=1;B(b);}}a:{DP("\n");f=a.zC;if(f!==null){f=f.data;j=f.length;i=0;while(true){if(i>=j)break a;e=f[i];DP("\tat ");c=A(2);if(e!==null)c=!e.nB
?A(82):A(83);DP(Bz(c));DP("\n");i=i+1|0;}}}c=a.lI;if(c!==null&&c!==a){DP("Caused by: ");Kr(a.lI,b);}};
let BH=F(DE);
let G9=a=>{a.kg=1;a.kh=1;},
AUA=()=>{let a=new BH();G9(a);return a;};
let BA=F(BH);
let IM=a=>{a.kg=1;a.kh=1;},
AVJ=()=>{let a=new BA();IM(a);return a;},
Hi=(a,b)=>{a.kg=1;a.kh=1;a.kj=b;},
AVu=a=>{let b=new BA();Hi(b,a);return b;};
let AHz=F(BA);
let Ki=F(0);
function I(){C.call(this);this.mc=0;}
let Wf=null,ME=null,OF=null;
let YN=(a,b)=>{a.kf=L(b.data,0,b.data.length);},
AUD=a=>{let b=new I();YN(b,a);return b;},
AFz=(a,b)=>{a.kf=b;},
T9=a=>{let b=new I();AFz(b,a);return b;},
AUs=(a,b,c,d)=>{let e,f;e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.kf=L(b.data,c,d);return;}f=new H;f.kg=1;f.kh=1;B(f);},
ABu=(a,b,c)=>{let d=new I();AUs(d,a,b,c);return d;},
LB=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.kf.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AVf(a.kf,b,d.data,e,g);return;}}h=new H;h.kg=1;h.kh=1;B(h);},
M$=(a,b,c)=>{let d,e,f;if((c+b.kf.length|0)>a.kf.length)return 0;d=0;a:{b:{while(d<b.kf.length){if(d<0)break a;if(d>=b.kf.length)break a;e=b.kf.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.kf.length)break b;if(e!=a.kf.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);},
LC=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.kf.length>a.kf.length)return 0;c=0;d=a.kf.length-b.kf.length|0;a:{b:{while(d<a.kf.length){if(d<0)break a;if(d>=a.kf.length)break a;e=a.kf.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=b.kf.length)break b;if(e!=b.kf.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);},
H_=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.kf.length)return (-1);if(a.kf.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.kf.length-1|0))return (-1);if(a.kf.charCodeAt(c)==e&&a.kf.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
Ff=(a,b,c)=>{let d,e,f,g;d=a.kf.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.kf.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.kf.charCodeAt(d)==g){b=d-1|0;if(a.kf.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
QN=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.kf.length-b.kf.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.kf.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.kf.length)break a;g=a.kf.charCodeAt(f);if(e<0)break b;if(e>=b.kf.length)break b;if(g!=b.kf.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);},
ADz=(a,b,c)=>{let d,e,f;d=a.kf.length-b.kf.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.kf.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.kf.length)break a;f=a.kf.charCodeAt(f);if(e<0)break b;if(e>=b.kf.length)break b;if(f!=b.kf.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);},
Ck=(a,b,c)=>{let d,e,f;d=a.kf.length;e=BW(b,c);if(!e)return ME;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return T9(a.kf.substring(b,c));f=new Y;f.kg=1;f.kh=1;B(f);},
Dk=(a,b)=>{let c,d,e,f;c=a.kf.length-b.kf.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.kf.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.kf.length)break a;f=a.kf.charCodeAt(f);if(e<0)break b;if(e>=b.kf.length)break b;if(f!=b.kf.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);},
No=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.ke=G(16);e=a.kf.length-b.kf.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Ck(a,f,a.kf.length);g=d.kd;if(b===null)b=A(2);E(d,g,b);b=new I;h=d.ke;i=h.data;j=d.kd;e=i.length;if(j>=0&&j<=(e-0|0)){b.kf=L(h.data,0,j);return b;}b=new H;b.kg=1;b.kh=1;B(b);}k=0;d:{while(k<b.kf.length){j=f+k|0;if(j<0)break b;if(j>=a.kf.length)break b;j=a.kf.charCodeAt(j);if(k<0)break c;if(k>=b.kf.length)break c;if(j!=b.kf.charCodeAt(k)){if(f<0)break a;if(f>=a.kf.length)break a;k=a.kf.charCodeAt(f);j
=d.kd;Bk(d,j,j+1|0);d.ke.data[j]=k;break d;}k=k+1|0;}E(d,d.kd,c===null?A(2):c);f=f+(b.kf.length-1|0)|0;}f=f+1|0;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);},
AIl=a=>{let b,c,d;b=0;c=a.kf.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.kf.length)break;if(a.kf.charCodeAt(b)>32)break a;b=b+1|0;}d=new Y;d.kg=1;d.kh=1;B(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.kf.length)break b;if(a.kf.charCodeAt(c)>32)break;c=c+(-1)|0;}return Ck(a,b,c+1|0);}d=new Y;d.kg=1;d.kh=1;B(d);},
Cp=a=>{return a;},
ARM=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof I))return 0;c=b;return a.kf!==c.kf?0:1;},
ALF=a=>{let b;a:{if(!a.mc){b=0;while(true){if(b>=a.kf.length)break a;a.mc=(31*a.mc|0)+a.kf.charCodeAt(b)|0;b=b+1|0;}}}return a.mc;},
AXT=()=>{let b;Wf=G(0);b=new I;b.kf="";ME=b;OF=new N4;};
let EM=F();
function FW(){EM.call(this);this.nZ=0;}
let OL=null,Ex=null;
let K2=(b,c)=>{if(b!==null)return We(b,0,b.kf.length,c);b=new CC;b.kg=1;b.kh=1;b.kj=A(84);B(b);},
We=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new CC;b.kg=1;b.kh=1;b.kj=A(85);B(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.kf.length){a:{switch(b.kf.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new CC;b.kg=1;b.kh=1;B(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.kf.length)break b;g=APg(b.kf.charCodeAt(g));if(g<0){k=new CC;l=Ck(b,c,d);b=new K;b.ke=G(16);E(b,b.kd,A(86));c=b.kd;if(l===null)l=A(2);E(b,c,l);m=new I;n=b.ke;o=n.data;d=b.kd;e
=o.length;if(d>=0&&d<=(e-0|0)){m.kf=L(n.data,0,d);k.kg=1;k.kh=1;k.kj=m;B(k);}b=new H;b.kg=1;b.kh=1;B(b);}if(g>=e){k=new CC;l=Ck(b,c,d);b=new K;b.ke=G(16);E(b,b.kd,A(87));J(b,b.kd,e,10);E(b,b.kd,A(81));c=b.kd;if(l===null)l=A(2);E(b,c,l);m=new I;n=b.ke;o=n.data;d=b.kd;e=o.length;if(d>=0&&d<=(e-0|0)){m.kf=L(n.data,0,d);k.kg=1;k.kh=1;k.kj=m;B(k);}b=new H;b.kg=1;b.kh=1;B(b);}if(h>i){b=new CC;b.kg=1;b.kh=1;b.kj=A(88);B(b);}h=Dt(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new CC;l=Ck(b,c,d);b
=new K;b.ke=G(16);E(b,b.kd,A(89));c=b.kd;if(l===null)l=A(2);E(b,c,l);m=new I;n=b.ke;o=n.data;d=b.kd;e=o.length;if(d>=0&&d<=(e-0|0)){m.kf=L(n.data,0,d);k.kg=1;k.kh=1;k.kj=m;B(k);}b=new H;b.kg=1;b.kh=1;B(b);}g=j;}if(f)h= -h|0;return h;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);}b=new CC;k=new K;k.ke=G(16);E(k,k.kd,A(90));J(k,k.kd,e,10);m=new I;n=k.ke;o=n.data;d=k.kd;e=o.length;if(d>=0&&d<=(e-0|0)){m.kf=L(n.data,0,d);b.kg=1;b.kh=1;b.kj=m;B(b);}b=new H;b.kg=1;b.kh=1;B(b);},
Lr=b=>{if(b!==null)return We(b,0,b.kf.length,10);b=new CC;b.kg=1;b.kh=1;b.kj=A(84);B(b);},
Fe=()=>{let b,c,d,e,f;a:{if(Ex===null){b=R(FW,256);c=b.data;Ex=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new FW;f.nZ=d-128|0;c[d]=f;d=d+1|0;}}}},
B_=a=>{return a.nZ;},
APg=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Pk=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
Er=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AXG=()=>{OL=M(BV);};
function Be(){let a=this;C.call(a);a.ke=null;a.kd=0;}
let Fi=a=>{a.ke=G(16);},
AVY=()=>{let a=new Be();Fi(a);return a;},
D1=(a,b)=>{a.ke=G(b);},
AX2=a=>{let b=new Be();D1(b,a);return b;},
Jj=(a,b)=>{E(a,a.kd,b===null?A(2):b.T());return a;},
JP=(a,b)=>{E(a,a.kd,b);return a;},
E=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.kd){if(c===null)c=A(2);else if(c.kf.length?0:1)return a;IS(a,a.kd+c.kf.length|0);d=a.kd-1|0;while(d>=b){a.ke.data[d+c.kf.length|0]=a.ke.data[d];d=d+(-1)|0;}a.kd=a.kd+c.kf.length|0;e=0;a:{while(e<c.kf.length){f=a.ke;d=b+1|0;if(e<0)break a;if(e>=c.kf.length)break a;f.data[b]=c.kf.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);},
IU=(a,b)=>{return J(a,a.kd,b,10);},
IP=(a,b,c)=>{return J(a,a.kd,b,c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(Fd(c,d)<0){if(e)Bk(a,b,b+1|0);else{Bk(a,b,b+2|0);f=a.ke.data;g=b+1|0;f[b]=45;b=g;}a.ke.data[b]=N6(c,d);}else{h=1;i=1;j=En((-1),d);b:{while(true){k=Dt(h,d);if(Fd(k,c)>0){k=h;break b;}i=i+1|0;if(Fd(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bk(a,b,b+i|0);if(e)e=b;else{f=a.ke.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.ke.data;b=e+1|0;f[e]=N6(En(c,k),d);c=AWF(c,k);k=En(k,d);e=b;}}}return a;},
Gb=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BW(c,0.0);if(!d){if(1.0/c===Infinity){Bk(a,b,b+3|0);e=a.ke.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bk(a,b,b+4|0);e=a.ke.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bk(a,b,b+3|0);e=a.ke.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bk(a,b,b+8|0);d=b;}else{Bk(a,b,b+9|0);e=a.ke.data;d=b+1|0;e[b]=45;}e=a.ke.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=RD;AKE(c,f);d=f.uF;g=f.ur;h=f.wp;i=1;j=1;if(h)j=2;k=9;l=AQn(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bk(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.ke.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.ke.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.ke.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.ke.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
QF=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BW(c,0.0);if(!d){if(1.0/c===Infinity){Bk(a,b,b+3|0);e=a.ke.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bk(a,b,b+4|0);e=a.ke.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bk(a,b,b+3|0);e=a.ke.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bk(a,b,b+8|0);d=b;}else{Bk(a,b,b+9|0);e=a.ke.data;d=b+1|0;e[b]=45;}e=a.ke.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=QS;AG_(c,f);g=f.u2;h=f.ui;i=f.wg;j=1;k=1;if(i)k=2;l=18;m=AM5(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bk(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.ke.data;i=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.ke.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(QQ(p,B8))d=0;else{d=Bm(Nj(g,p));g=OI(g,p);}e=a.ke.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=Nj(p,X(10));q=q+1|0;}if(h){e=a.ke.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
AQn=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AM5=b=>{let c,d,e,f,g;c=X(1);d=0;e=16;f=Ov.data;g=f.length-1|0;while(g>=0){if(El(OI(b,Bd(c,f[g])),B8)){d=d|e;c=Bd(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
GR=(a,b)=>{return a.de(a.kd,b);},
Eu=(a,b,c)=>{E(a,b,c===null?A(2):c.T());return a;},
IS=(a,b)=>{let c,d,e,f,g,h;c=a.ke.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.ke=g;},
ML=a=>{let b,c,d,e,f;b=new I;c=a.ke;d=c.data;e=a.kd;f=d.length;if(e>=0&&e<=(f-0|0)){b.kf=L(c.data,0,e);return b;}b=new H;b.kg=1;b.kh=1;B(b);},
KJ=(a,b,c,d,e)=>{let f,g,h,i;Bk(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ke.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
VX=(a,b)=>{let c,d,e,f;if(b>=0){c=a.kd;if(b<c){c=c-1|0;a.kd=c;while(b<c){d=a.ke.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Y;f.kg=1;f.kh=1;B(f);},
AR2=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BW(b,c);if(d<=0){e=a.kd;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.kd=e-(c-b|0)|0;g=0;while(g<f){h=a.ke.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Y;i.kg=1;i.kh=1;B(i);},
Bk=(a,b,c)=>{let d,e,f,g;d=a.kd;e=d-b|0;a.c$((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.ke.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.kd=a.kd+(c-b|0)|0;};
let Jh=F(0);
let K=F(Be);
let AST=a=>{a.ke=G(16);},
EF=()=>{let a=new K();AST(a);return a;},
MG=(a,b)=>{E(a,a.kd,b===null?A(2):b.T());return a;},
FO=(a,b)=>{E(a,a.kd,b);return a;},
Fw=(a,b)=>{J(a,a.kd,b,10);return a;},
XN=(a,b)=>{let c;c=a.kd;Bk(a,c,c+1|0);a.ke.data[c]=b;return a;},
ATn=(a,b,c)=>{E(a,b,c===null?A(2):c.T());return a;},
AR1=(a,b,c)=>{AR2(a,b,c);return a;},
BZ=(a,b,c)=>{E(a,b,c);return a;},
AIe=(a,b,c,d,e)=>{let f,g,h,i;Bk(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ke.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
AC$=(a,b,c,d)=>{let e,f,g,h,i;e=a.kd;Bk(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.ke.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
AAc=a=>{return a.kd;},
Et=a=>{let b,c,d,e,f;b=new I;c=a.ke;d=c.data;e=a.kd;f=d.length;if(e>=0&&e<=(f-0|0)){b.kf=L(c.data,0,e);return b;}b=new H;b.kg=1;b.kh=1;B(b);},
AID=(a,b)=>{IS(a,b);},
AJu=(a,b,c)=>{Bk(a,b,b+1|0);a.ke.data[b]=c;return a;},
Cd=(a,b,c)=>{E(a,b,c);return a;};
function RM(){let a=this;C.call(a);a.vW=0;a.yG=0;a.vm=0;a.wv=null;a.yC=0;a.Bd=null;a.v$=0;a.yO=null;a.sy=0;a.qr=0;a.us=0;a.v0=0;a.w9=0;a.wM=0;a.x9=0;a.xx=0;a.xH=0;a.vJ=0;a.tg=0;}
let Zo=(a,b)=>{a.vW=0;a.yG=1;a.vm=0;a.yC=1;a.Bd=A(68);a.v$=0;a.sy=(-1);a.qr=(-1);a.us=0;a.v0=0;a.w9=0;a.wM=0;a.x9=0;a.xx=0;a.xH=0;a.vJ=0;a.tg=1;a.yO=b;},
ATz=a=>{let b=new RM();Zo(b,a);return b;};
let Qo=F(0);
function Ma(){let a=this;C.call(a);a.pA=null;a.rU=null;a.w7=null;a.xC=null;a.Aa=null;a.oa=null;a.sI=null;a.sQ=null;a.st=null;a.pk=null;a.re=null;a.t7=0;a.vK=0;a.zc=null;a.p7=0;a.sw=null;a.zz=null;a.zf=null;a.r9=null;a.v2=null;a.pC=null;}
let Hp=null;
let QC=(a,b,c)=>{let d;d=new Bh;d.kJ=1;d.km=R(C,4);a.st=d;a.re=NT;a.t7=(-1);a.vK=1;a.p7=1;a.zz=E$(51,0.800000011920929);d=new Bh;d.kJ=1;d.km=R(C,16);a.r9=d;d=new Bh;d.kJ=1;d.km=R(C,16);a.v2=d;Fn();a.pk=GC;a.oa=c;a.sI=b;AO4(a);},
AUG=(a,b)=>{let c=new Ma();QC(c,a,b);return c;},
AO4=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Hp=AKJ();GJ();DJ(Fz,A(91),A(68));b=W(Hp.userAgent);GJ();DJ(Fz,A(92),b);if(Hp.windows?1:0){GJ();DJ(Fz,A(93),A(94));}else if(Hp.macOS?1:0){GJ();DJ(Fz,A(93),A(95));}else if(!(Hp.linux?1:0)){GJ();DJ(Fz,A(93),A(96));}else{GJ();DJ(Fz,A(93),A(10));}c=new Pp;d=a.oa.v$;c.ya=0;c.yL=0;c.na=1;c.na=d;GW=c;Fn();b=W(GC.nU.location.href);a.pC=b;if(Dk(b,A(97))){c=No(a.pC,A(98),A(68));a.pC=c;a.pC=No(c,A(99),A(68));}e=H_(a.pC,63,0);if(e>=0)a.pC=Ck(a.pC,0,e);c=a.oa;GV=c.yG;b=ANu(c);a.pA=b;c
=AKI(a.pC,b.lE,a);a.sw=c;d=a.oa.yC;f=GW;g=c.sU;h=new K;h.ke=G(16);i=h.kd;if(g===null)g=A(2);BZ(h,i,g);BZ(h,h.kd,A(100));g=new I;j=h.ke;k=j.data;l=h.kd;m=k.length;if(l>=0&&l<=(m-0|0)){g.kf=L(j.data,0,l);h=new K;h.ke=G(16);E(h,h.kd,g);E(h,h.kd,A(101));g=new I;j=h.ke;k=j.data;l=h.kd;m=k.length;if(l>=0&&l<=(m-0|0)){g.kf=L(j.data,0,l);h=new Rf;h.rl=c;h.wu=A(101);h.wt=d;if(f.na){if(BX===null){c=new C6;b=new Cu;Bu(b);b.l8=BN(32);Fb(c);c.mq=b;b=new K;Fi(b);c.l_=b;c.l$=G(32);c.ma=0;c.mb=Co;BX=c;}c=new K;c.ke=G(16);BZ(c,
c.kd,A(102));BZ(c,c.kd,g);b=new I;j=c.ke;k=j.data;i=c.kd;l=k.length;if(i>=0&&i<=(l-0|0)){b.kf=L(j.data,0,i);B2(Bz(b));B2("\n");}else{c=new H;c.kg=1;c.kh=1;B(c);}}a:{f.lx=f.lx+1|0;c=new Hs;c.of=f;c.pI=1;c.ob=g;c.ou=h;b=null;g=null;c.nt=new C;c.ns=1;c.n9=g;c.os=b;e=CZ;CZ=e+1|0;c.or=X(e);b=new ED;b.n$=c;EX(b);a.rU=AAv(a.pA.lE);c=new UT;c.pw=a.sw;a.w7=c;c=new T_;b=new Jp;d=Kh(16);b.pL=0;k=R(F_,d);j=k.data;b.mw=k;b.tQ=0.75;b.qL=j.length*0.75|0;c.z3=b;a.xC=c;a.zc=new RJ;c=new T6;c.z6=0;c.s4=1;b=new Mz;b.sN=c;c.zp
=b;c.u1=A(68);a.zf=c;if(a.oa.vm){g=a.sw;b=new OP;b.y1=a;n=GW;g=g.sU;h=new K;h.ke=G(16);Cd(h,h.kd,g===null?A(2):Cp(g));Cd(h,h.kd,Cp(A(100)));f=new I;j=h.ke;k=j.data;i=h.kd;l=k.length;if(i>=0&&i<=(l-0|0)){f.kf=L(j.data,0,i);g=new K;g.ke=G(16);BZ(g,g.kd,f);BZ(g,g.kd,A(103));c=new I;j=g.ke;k=j.data;i=g.kd;l=k.length;if(i>=0&&i<=(l-0|0)){c.kf=L(j.data,0,i);N$(n,1,c,b);break a;}c=new H;c.kg=1;c.kh=1;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}}Da=a;c=a.pA;B7=c;b=c.qV;B5=b;Bs=b;ER=c.xD;Lx=a.rU;Fr=a.w7;ANI=a.xC;c=new Q8;c.x6
=null;c.x6=ARy();a.Aa=c;AI7=c;f=a.pk.nU.document;b=new KE;b.tS=a;f.addEventListener("visibilitychange",B$(b,"handleEvent"));c=a.pk;c.sB=a;requestAnimationFrame(B$(c,"onAnimationFrame"));c=a.oa;if(!c.sy&&!c.qr?1:0){c=a.pk;g=new KF;g.rD=a;g=DI(g,"handleEvent");c.nU.addEventListener("resize",B$(g,"handleEvent"));}return;}c=new H;c.kg=1;c.kh=1;B(c);}c=new H;c.kg=1;c.kh=1;B(c);},
AGY=a=>{let b,c,d,e,f,g,h,$$je;b=a.re;a:{try{b:{MX();switch(Uq.data[AP6(b)]){case 1:c=AHc(XG());if(!c){a.re=JC;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.sw.uS;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=EF();XN(Fw(g,f),37);h=Et(g);d.setProperty("width",Bz(h));}}break b;case 2:break;default:break b;}if(a.sI!==null){b=a.sQ;if(b!==null){AKg(b);AK$(a.sQ);}ADJ(a.rU,null);Sc(a.rU);Q0(a.r9);a.sQ
=a.sI;a.sI=null;a.re=KG;a.pA.tC=B8;}Y7(a,a.sQ);}}catch($$e){$$je=Bc($$e);if($$je instanceof DE){h=$$je;break a;}else{throw $$e;}}b=a.pk;b.sB=a;requestAnimationFrame(B$(b,"onAnimationFrame"));return;}if(Dv===null){b=new F9;d=new Cu;d.l8=BN(32);Bu(b);b.mq=d;d=new K;D1(d,16);b.l_=d;b.l$=G(32);b.ma=0;b.mb=Co;Dv=b;}Kr(h,Dv);B(h);},
Y7=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;ACw(a.pA);c=B7.lE.width;d=B7.lE.height;e=0;if(a.re===KG){a.re=JC;f=new Im;Ik();Lh(f,1000,null);b.AS=f;f=AKq(b);b.A4=f;b.vC=f;g=B7.lE.width;h=B7.lE.height;f=f.kX.me;f.qo=0;f.qp=0;f.p1=g;f.m1=h;i=g;j=f.sA;i=i*j;j=h*j;f.tA=i;f.tK=j;NK(f,0);e=1;}if(!(c==a.t7&&d==a.vK&&!e)){a.t7=c;a.vK=d;B5.dE(0,0,c,d);f=b.vC;if(f!==null){f=f.kX.me;f.qo=0;f.qp=0;f.p1=c;f.m1=d;i=c;j=f.sA;i=i*j;j=d*j;f.tA=i;f.tK=j;NK(f,0);}}f=a.v2;k=a.r9;l=k.km;m=k.ki;n=f.km;o=n.data;c=f.ki;d=c+
m|0;if(d<=o.length)k=n;else{p=8;if(p<=d)p=d;c=c*1.75|0;if(p>c)c=p;q=n.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BD;r.kw=q;s=r;q.classObject=s;}}s=r.kw.$meta.item;if(s===null)r=null;else{r=s.classObject;if(r===null){r=new BD;r.kw=s;k=r;s.classObject=k;}}if(r===null){b=new Ds;U(b);B(b);}if(r===M(Bp)){b=new Bj;U(b);B(b);}if(c<0){b=new Eh;U(b);B(b);}k=Ee(r.kw,c);r=k.data;h=f.ki;g=r.length;if(h<g)g=h;GX(n,0,k,0,g);f.km=k;}GX(l,0,k,f.ki,m);f.ki=d;f=a.r9;l=f.km;e=0;m=f.ki;k=null;if(e>m)
{b=new Bj;b.kg=1;b.kh=1;B(b);}while(e<m){n=l.data;d=e+1|0;n[e]=k;e=d;}f.ki=0;m=0;while(true){r=a.v2;e=r.ki;d=BW(m,e);if(d>=0){l=r.km;m=0;f=null;if(m>e){b=new Bj;b.kg=1;b.kh=1;B(b);}while(m<e){n=l.data;d=m+1|0;n[m]=f;m=d;}r.ki=0;f=a.pA;t=C5(f.tC,X(1));f.tC=t;if(AC5(t,X(60))){f=b.vC;if(f!==null)ASu(f,B7.s_);}Sc(a.rU);return;}if(d>=0){f=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,m,10);E(b,b.kd,A(19));e=r.ki;J(b,b.kd,e,10);k=new I;l=b.ke;n=l.data;m=b.kd;d=n.length;if(m>=0&&m<=(d-0|0)){k.kf=L(l.data,0,m);f.kg
=1;f.kh=1;f.kj=k;B(f);}b=new H;U(b);B(b);}f=r.km.data[m];k=f.uZ.sC;q=k.km.constructor;if(q===null)r=null;else{r=q.classObject;if(r===null){r=new BD;r.kw=q;s=r;q.classObject=s;}}u=r.kw.$meta.item;if(u===null)q=null;else{q=u.classObject;if(q===null){q=new BD;q.kw=u;r=q;u.classObject=r;}}e=k.ki;if(q===null){b=new Ds;U(b);B(b);}if(q===M(Bp)){b=new Bj;U(b);B(b);}if(e<0)break;r=Ee(q.kw,e);GX(k.km,0,r,0,k.ki);l=r;f.uZ.tq.wb.wv.dG(l);m=m+1|0;}b=new Eh;U(b);B(b);};
let Wc=F(0);
function MW(){C.call(this);this.vC=null;}
let AKg=a=>{return;};
function Qq(){let a=this;MW.call(a);a.AS=null;a.A4=null;}
let AK$=a=>{return;};
let AOP=F();
let Bi=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(104);d=1<<c;e=d-1|0;f=(((32-Pk(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=Dt(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=N6((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new I;l.kf=L(g.data,0,h.length);return l;};
let Ir=F(BF);
let NT=null,KG=null,JC=null,Vl=null;
let AJa=()=>{let b,c,d;b=new Ir;b.kx=A(105);b.kq=0;NT=b;c=new Ir;c.kx=A(106);c.kq=1;KG=c;d=new Ir;d.kx=A(107);d.kq=2;JC=d;Vl=V(Ir,[b,c,d]);};
let OU=F(0);
let Cy=F(0);
let R9=F(0);
function JM(){let a=this;C.call(a);a.nU=null;a.sB=null;}
let GC=null;
let Fn=()=>{Fn=BR(JM);AFI();};
let AFI=()=>{let b;b=new JM;Fn();b.nU=window;GC=b;},
AMF=(a,b)=>{let c;b;c=a.sB;a.sB=null;AGY(c);};
let AMk=F();
let RA=F();
let Bw=null;
let CE=()=>{CE=BR(RA);ALh();};
let ALh=()=>{Bw=E$(51,0.800000011920929);};
function Gm(){EM.call(this);this.o6=0.0;}
let Ry=null;
let AXb=()=>{Ry=M(CN);};
function G_(){let a=this;C.call(a);a.nD=null;a.nK=0;a.sk=0;}
let Qd=(a,b)=>{let c,d,e,f,g;c=a.nD;d=c.data;e=a.nK;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Ce(f);g=d.data.length;if(e<g)g=e;Dw(c,0,d,0,g);a.nD=d;}c=d.data;f=a.nK;a.nK=f+1|0;c[f]=b;},
U8=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.nD;e=d.data;f=a.nK;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=Ce(h);i=g.data.length;if(f<i)i=f;Dw(d,0,g,0,i);a.nD=g;}e=g.data;j=a.nK;e[j]=b;e[j+1|0]=c;a.nK=j+2|0;};
let AGJ=F();
let J5=b=>{return Math.sin(b);},
Zi=b=>{return Math.cos(b);},
CI=b=>{return Math.sqrt(b);},
Ls=b=>{return Math.ceil(b);},
GY=(b,c)=>{return Math.pow(b,c);},
On=(b,c)=>{return Math.atan2(b,c);},
AOJ=(b,c)=>{return Math.min(b,c);},
Ej=b=>{return Math.abs(b);},
CH=b=>{return Math.sign(b);};
function D3(){let a=this;C.call(a);a.zW=null;a.z4=null;}
let Rn=a=>{let b;b=new Bh;b.kJ=1;b.km=R(C,16);a.zW=b;b=new G_;b.sk=1;b.nD=Ce(16);a.z4=b;},
AWJ=()=>{let a=new D3();Rn(a);return a;};
function Gd(){let a=this;C.call(a);a.mY=null;a.l9=0;a.pO=0;}
let Mj=(a,b)=>{let c,d,e,f,g;c=a.mY;d=c.data;e=a.l9;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Ba(f);g=d.data.length;if(e<g)g=e;Dw(c,0,d,0,g);a.mY=d;}c=d.data;f=a.l9;a.l9=f+1|0;c[f]=b;},
ATp=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.l9;if(b>d){e=new H;f=new K;f.ke=G(16);E(f,f.kd,A(65));J(f,f.kd,b,10);E(f,f.kd,A(66));b=a.l9;J(f,f.kd,b,10);g=new I;h=f.ke;i=h.data;c=f.kd;d=i.length;if(c>=0&&c<=(d-0|0)){g.kf=L(h.data,0,c);e.kg=1;e.kh=1;e.kj=g;B(e);}e=new H;e.kg=1;e.kh=1;B(e);}i=a.mY;if(d!=i.data.length)j=i;else{k=d*1.75|0;if(8>k)k=8;j=Ba(k);l=j.data.length;if(d<l)l=d;Dw(i,0,j,0,l);a.mY=j;}if(!a.pO){h=j.data;h[a.l9]=h[b];}else Dw(j,b,j,b+1|0,a.l9-b|0);h=j.data;a.l9=a.l9+1|0;h[b]=c;};
let MD=F(0);
let Lg=F();
let FC=F(0);
function Jp(){let a=this;Lg.call(a);a.pL=0;a.mw=null;a.tO=0;a.tQ=0.0;a.qL=0;}
let Kh=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
FX=(a,b,c,d)=>{let e,f;e=a.mw.data[c];while(e!==null){if(e.pY==d){f=e.nv;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.nL;}return e;},
F7=a=>{let b;b=a.mw.data[0];while(b!==null&&b.nv!==null){b=b.nL;}return b;},
E6=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.mw.data;e=d[0];while(e!==null&&e.nv!==null){e=e.nL;}if(e===null){a.tO=a.tO+1|0;f=null;e=new F_;b=null;e.nv=f;e.mX=b;e.pY=0;e.nL=d[0];d[0]=e;g=a.pL+1|0;a.pL=g;if(g>a.qL)Rr(a,d.length);}}else{f=b;if(!f.$id$){e=Fj();f.$id$=e;}h=b.$id$;d=a.mw.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.pY==h){f=e.nv;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.nL;}if(e===null){a.tO=a.tO+1|0;e=new F_;f=null;e.nv=b;e.mX=f;e.pY=h;e.nL=d[j];d[j]=e;g=a.pL+1|0;a.pL=g;if(g>a.qL)Rr(a,
i);}}f=e.mX;e.mX=c;return f;},
Rr=(a,b)=>{let c,d,e,f,g,h,i,j;c=Kh(!b?1:b<<1);d=R(F_,c);e=d.data;f=0;c=c-1|0;while(true){g=a.mw.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.pY&c;j=h.nL;h.nL=e[i];e[i]=h;h=j;}f=f+1|0;}a.mw=d;a.qL=e.length*a.tQ|0;};
let IB=F(0);
let N4=F();
let M_=F();
let OK=null,LJ=null,B0=null,B1=null,M8=null,Uk=null,BL=null,BK=null,J2=null,J3=null;
let AAZ=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new H;e.kg=1;e.kh=1;B(e);},
CD=(b,c)=>{let d,e;d=b.xv.data;if(c<d.length)return c+d[c]|0;d=b.xi;e=AP7(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
AP7=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=BW(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
Qi=b=>{let c,d,e,f,g,h;if(LJ===null){if(J2===null)J2=AGu();LJ=ASZ((J2.value!==null?W(J2.value):null));}c=LJ.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=BW(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
N6=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
Fq=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bj;c.kg=1;c.kh=1;B(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return AGF([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
C0=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(M8===null){if(J3===null)J3=AT1();M8=AUp((J3.value!==null?W(J3.value):null));}e=M8.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.u3)c=f+1|0;else{d=g.uC;if(b>=d)return g.uG.data[b-d|0];d=f-1|0;}}return 0;},
HR=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return C0(b)!=16?0:1;},
AU1=()=>{OK=M(K4);Uk=R(M_,128);},
D9=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
D_=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
AGu=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
AT1=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let ACX=F();
let AKJ=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AMT=F();
let BX=null,Dv=null,Fz=null;
let GX=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=JT(b)&&(e+f|0)<=JT(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BD;h.kw=g;i=h;g.classObject=i;}}j=EA(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BD;h.kw=g;i=h;g.classObject=i;}}i=EA(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.kw.$meta.primitive?1:0)&&!(i.kw.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.kw;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MY(g.constructor,p)?1:0)){Jr(b,c,d,e,l);b=new Kb;b.kg=1;b.kh=1;B(b);}l=l+1|0;m=o;}Jr(b,c,d,e,f);return;}if(!(j.kw.$meta.primitive?1:0))break a;if(i.kw.$meta.primitive?1:0)break b;else break a;}b=new Kb;b.kg=1;b.kh=1;B(b);}}Jr(b,c,d,e,f);return;}b=new Kb;b.kg=1;b.kh=1;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}d=new Ds;d.kg=1;d.kh=1;d.kj=A(108);B(d);},
Dw=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=JT(b)&&(e+f|0)<=JT(d)){Jr(b,c,d,e,f);return;}b=new H;b.kg=1;b.kh=1;B(b);},
Jr=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
EE=()=>{return Em((new Date()).getTime());},
GJ=()=>{let b,c;if(Fz===null){b=new Ng;La(b,11);DJ(b,A(109),A(110));DJ(b,A(93),A(111));DJ(b,A(112),A(113));DJ(b,A(114),A(115));DJ(b,A(116),A(117));DJ(b,A(118),A(119));DJ(b,A(120),A(110));DJ(b,A(121),A(113));c=new Ng;La(c,11);c.Ay=b;Fz=c;}};
let Og=F(0);
function Pp(){let a=this;C.call(a);a.lx=0;a.ya=0;a.yL=0;a.na=0;}
let AHc=a=>{return a.lx;},
ABP=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{NA();switch(U4.data[d.kq]){case 1:if(a.na){if(BX===null){d=new C6;e=new Cu;e.l8=BN(32);Bu(d);d.mq=e;e=new K;D1(e,16);d.l_=e;d.l$=G(32);d.ma=0;d.mb=Co;BX=d;}d=new K;d.ke=G(16);E(d,d.kd,A(102));E(d,d.kd,c===null?A(2):c);e=new I;g=d.ke;h=g.data;i=d.kd;j=h.length;if(i>=0&&i<=(j-0|0)){e.kf=L(g.data,0,i);B2(Bz(e));B2("\n");}else{c=new H;U(c);B(c);}}a.lx=a.lx+1|0;d=new Hs;d.of=a;d.pI=b;d.ob=c;d.ou=f;c=null;e=null;d.nt=new C;d.ns=1;d.n9=e;d.os=c;k=CZ;CZ=k+1|0;d.or=X(k);c=new ED;c.n$
=d;EX(c);break a;case 2:d=null;l=new OW;l.su=a;l.ru=f;l.wX=d;l.yF=e;if(a.na){if(BX===null){d=new C6;e=new Cu;Fb(e);e.l8=BN(32);Gv(d,e);d.l_=EF();d.l$=G(32);d.ma=0;d.mb=Co;BX=d;}d=new K;d.ke=G(16);Cd(d,d.kd,Cp(A(102)));Cd(d,d.kd,c===null?A(2):Cp(c));e=new I;g=d.ke;h=g.data;i=d.kd;j=h.length;if(i>=0&&i<=(j-0|0)){e.kf=L(g.data,0,i);B2(Bz(e));B2("\n");}else{c=new H;IM(c);B(c);}}a.lx=a.lx+1|0;d=new Gu;d.nV=a;d.oW=b;d.nS=c;d.oe=l;c=null;e=null;d.nt=new C;d.ns=1;d.n9=e;d.os=c;k=CZ;CZ=k+1|0;d.or=X(k);c=new ED;c.n$=
d;EX(c);break a;case 3:if(a.na){if(BX===null){d=new C6;e=new Cu;e.l8=BN(32);Bu(d);d.mq=e;e=new K;D1(e,16);d.l_=e;d.l$=G(32);d.ma=0;d.mb=Co;BX=d;}d=new K;d.ke=G(16);E(d,d.kd,A(102));E(d,d.kd,c===null?A(2):c);e=new I;g=d.ke;h=g.data;i=d.kd;j=h.length;if(i>=0&&i<=(j-0|0)){e.kf=L(g.data,0,i);B2(Bz(e));B2("\n");}else{c=new H;U(c);B(c);}}a.lx=a.lx+1|0;d=new Gu;d.nV=a;d.oW=b;d.nS=c;d.oe=f;c=null;e=null;d.nt=new C;d.ns=1;d.n9=e;d.os=c;k=CZ;CZ=k+1|0;d.or=X(k);c=new ED;c.n$=d;EX(c);break a;case 4:e=new OV;e.AN=a;e.ta
=f;if(a.na){if(BX===null){d=new C6;f=new Cu;Bu(f);f.l8=BN(32);Fb(d);d.mq=f;f=new K;Fi(f);d.l_=f;d.l$=G(32);d.ma=0;d.mb=Co;BX=d;}d=new K;d.ke=G(16);BZ(d,d.kd,A(102));BZ(d,d.kd,c===null?A(2):c);f=new I;g=d.ke;h=g.data;i=d.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);B2(Bz(f));B2("\n");}else{c=new H;G9(c);B(c);}}a.lx=a.lx+1|0;d=new Gu;d.nV=a;d.oW=b;d.nS=c;d.oe=e;c=null;e=null;d.nt=new C;d.ns=1;d.n9=e;d.os=c;k=CZ;CZ=k+1|0;d.or=X(k);c=new ED;c.n$=d;EX(c);break a;case 5:break;default:c=new T;e=new K;e.ke
=G(16);E(e,e.kd,A(122));E(e,e.kd,d.kx);d=new I;g=e.ke;h=g.data;k=e.kd;i=h.length;if(k>=0&&k<=(i-0|0)){d.kf=L(g.data,0,k);c.kg=1;c.kh=1;c.kj=d;B(c);}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);}c=null;Hr(f.r1,f.sc,f.rP,c);c=f.nN.nG;c.q2=1;c.nX=0;}},
N$=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.na){if(BX===null){e=new C6;f=new Cu;f.l8=BN(32);e.mq=f;f=new K;Bu(f);f.ke=G(16);e.l_=f;e.l$=G(32);e.ma=0;e.mb=Co;BX=e;}e=new K;e.ke=G(16);E(e,e.kd,A(123));E(e,e.kd,c===null?A(2):c);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);B2(Bz(f));B2("\n");}else{c=new H;c.kg=1;c.kh=1;B(c);}}a.lx=a.lx+1|0;f=new XMLHttpRequest();e=new KH;e.q$=a;e.pU=f;e.uP=b;e.s5=c;e.vw=d;e=B$(e,"handleEvent");f.onreadystatechange=e;e=new Ht;e.vG=a;e.sE=d;d=B$(e,"handleEvent");f.onprogress
=d;f.open("GET",Bz(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let ACl=F();
let GW=null;
let XG=()=>{return GW;};
let AFi=F();
let Dn=0,GV=0;
let AWf=()=>{Dn=1;};
let T1=F(0);
function K1(){let a=this;C.call(a);a.qs=null;a.lE=null;a.yk=null;a.qV=null;a.xD=null;a.zs=null;a.yP=0.0;a.tV=B8;a.tC=B8;a.s_=0.0;a.tw=0.0;a.vV=0;}
let NR=0,Gh=null;
let EU=()=>{EU=BR(K1);Z3();};
let AJd=(a,b)=>{let c,d,e,f,g,h,i,j,k;EU();a.yP=0.0;a.tV=EE();a.tC=X(-1);a.s_=0.0;a.tw=0.0;a.yk=b;Fn();c=window.document;d=b.yO;a.lE=c.getElementById(Bz(d));e=ADj();d=!!b.x9;e.alpha=d;d=!!b.wM;e.antialias=d;d=!!b.w9;e.stencil=d;d=!!b.xx;e.premultipliedAlpha=d;d=!!b.xH;e.preserveDrawingBuffer=d;f=a.lE;if(b.vW)a.qs=f.getContext("webgl2",e);a:{if(b.vW){d=a.qs;if(d!==null){if(!b.vJ)f=ARW(d);else{f=new Pq;Oq(f,d);}a.xD=f;a.qV=f;break a;}}f=f.getContext("webgl",e);a.qs=f;if(!b.vJ)d=AQT(f);else{d=new V_;MT(d,f);}a.qV
=d;}d=a.qV.dW(7938);c=a.qV.dW(7936);g=a.qV.dW(7937);a.zs=AMP(HO,d,c,g);h=b.sy;if(!(h<0&&b.qr<0)){if(h&&b.qr?1:0)KB(a,h,b.qr);else{i=GC;h=i.nU.document.documentElement.clientWidth-b.us|0;j=i.nU.document.documentElement.clientHeight-b.v0|0;k=!b.tg?1.0:devicePixelRatio||1;KB(a,k*h|0,k*j|0);}}b=a.lE;d=new M5;d.y6=a;YB(b,B$(d,"fullscreenChanged"));},
ANu=a=>{let b=new K1();AJd(b,a);return b;},
ACw=a=>{let b,c,d;b=EE();c=AWr(L_(b,a.tV))/1000.0;a.s_=c;a.tV=b;c=a.tw+c;a.tw=c;d=a.vV+1|0;a.vV=d;if(c>1.0){a.yP=d;a.tw=0.0;a.vV=0;}},
KB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.lE;e=b;d.width=e;d=a.lE;e=c;d.height=e;if(a.yk.tg){f=devicePixelRatio||1;e=a.lE.style;g=b/f;IY();h=new K;h.ke=G(16);QF(h,h.kd,g);E(h,h.kd,A(124));i=new I;j=h.ke;k=j.data;l=h.kd;b=k.length;if(l>=0&&l<=(b-0|0)){i.kf=L(j.data,0,l);e.setProperty("width",Bz(i));f=c/f;i=new K;i.ke=G(16);QF(i,i.kd,f);E(i,i.kd,A(124));h=new I;j=i.ke;k=j.data;c=i.kd;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.kf=L(j.data,0,c);e.setProperty("height",Bz(h));}else{d=new H;d.kg=1;d.kh=1;B(d);}}return;}d
=new H;d.kg=1;d.kh=1;B(d);},
Z3=()=>{NR=0;Gh=Du(51,0.800000011920929);},
YB=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function OO(){let a=this;C.call(a);a.vg=null;a.s8=null;a.u8=null;a.vp=null;a.vs=null;a.wZ=null;a.sL=null;a.uS=0;a.sU=null;}
let AH8=(a,b,c,d)=>{let e;a.vg=E$(51,0.800000011920929);a.s8=E$(51,0.800000011920929);a.u8=E$(51,0.800000011920929);a.vp=E$(51,0.800000011920929);a.vs=E$(51,0.800000011920929);a.wZ=E$(51,0.800000011920929);e=new Bh;e.kJ=1;e.km=R(C,16);a.sL=e;a.uS=(-1);a.sU=b;APo(a,c,d);},
AKI=(a,b,c)=>{let d=new OO();AH8(d,a,b,c);return d;},
APo=(a,b,c)=>{let d,e,f;d=c.oa;if(d.wv!==null){e=b.ownerDocument;f=new LP;f.Ak=a;e.addEventListener("dragenter",B$(f,"handleEvent"),!!0);f=new LQ;f.AZ=a;e.addEventListener("dragover",B$(f,"handleEvent"),!!0);f=new LO;f.wA=a;f.wk=c;f.wb=d;e.addEventListener("drop",B$(f,"handleEvent"));}},
AGC=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(AGR(a,b.uK)){b.sX=b.yr;b.q2=1;b.qD=0;b.nX=0;return 0;}if(b.nX)return 0;b.qD=0;b.q2=0;b.nX=1;c=b.uK;d=b.wJ;e=b.ww;f=new Rg;f.Ba=a;f.nG=b;b=GW;g=a.sU;h=new K;h.ke=G(16);i=h.kd;if(g===null)g=A(2);BZ(h,i,g);BZ(h,h.kd,A(100));g=new I;j=h.ke;k=j.data;l=h.kd;m=k.length;if(l>=0&&l<=(m-0|0)){g.kf=L(j.data,0,l);h=new K;h.ke=G(16);E(h,h.kd,g);E(h,h.kd,c===null?A(2):c);g=new I;k=h.ke;j=k.data;m=h.kd;i=j.length;if(m>=0&&m<=(i-0|0)){g.kf=L(k.data,0,m);h=new Re;h.r1=a;h.nN=f;h.sc=d;h.rP
=c;ABP(b,1,g,d,e,h);return 1;}b=new H;U(b);B(b);}b=new H;G9(b);B(b);},
Hr=(a,b,c,d)=>{a:{NP();switch(Pd.data[b.kq]){case 1:break;case 2:Cj(a.s8,c,d);break a;case 3:Cj(a.vs,c,d);break a;case 4:Cj(a.u8,c,d);break a;case 5:Cj(a.vg,c,null);break a;default:break a;}Cj(a.vp,c,d);}},
AGR=(a,b)=>{let c;c=BG(a.vp,b)<0?0:1;return !c&&!(BG(a.s8,b)<0?0:1)&&!(BG(a.vs,b)<0?0:1)&&!(BG(a.u8,b)<0?0:1)&&!(BG(a.vg,b)<0?0:1)?0:1;};
let DX=F();
let AJ4=(a,b)=>{return;};
let TJ=F(0);
let EK=F(0);
function MF(){let a=this;C.call(a);a.lS=null;a.rs=0;a.qJ=null;a.oH=null;a.ms=null;a.mr=null;a.n6=null;a.n7=null;a.tn=null;a.rE=0;a.ub=null;a.tl=0;a.uV=null;a.vQ=null;a.uT=null;a.mZ=null;a.pv=B8;a.q5=0;}
let ATo=b=>{let c,d,e,f;c=Hp;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(Ej(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AMY=(a,b)=>{a.rs=0;a.qJ=Du(20,0.800000011920929);a.oH=Ku(20);a.ms=Ba(20);a.mr=Ba(20);a.n6=Ba(20);a.n7=Ba(20);a.tn=Pi(51,0.800000011920929);a.rE=0;a.ub=Ku(256);a.tl=0;a.uV=Ku(256);a.vQ=Ku(5);a.uT=Pi(51,0.800000011920929);a.q5=1;a.lS=b;AKc(a);},
AAv=a=>{let b=new MF();AMY(b,a);return b;},
AKc=a=>{let b;b=a.lS.ownerDocument;b.addEventListener("mousedown",B$(a,"handleEvent"),!!0);b.addEventListener("mouseup",B$(a,"handleEvent"),!!0);b.addEventListener("mousemove",B$(a,"handleEvent"),!!0);b.addEventListener("wheel",B$(a,"handleEvent"),!!0);b.addEventListener("keydown",B$(a,"handleEvent"),!!0);b.addEventListener("keyup",B$(a,"handleEvent"),!!0);b.addEventListener("keypress",B$(a,"handleEvent"),!!0);a.lS.addEventListener("touchstart",B$(a,"handleEvent"),!!1);a.lS.addEventListener("touchmove",B$(a,
"handleEvent"),!!1);a.lS.addEventListener("touchcancel",B$(a,"handleEvent"),!!1);a.lS.addEventListener("touchend",B$(a,"handleEvent"),!!1);},
AKL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=W(b.type);if(c!==A(125)){if(A(125) instanceof I){d=A(125);e=c.kf!==d.kf?0:1;}else e=0;}else e=1;a:{if(!e){if(c===A(126))e=1;else if(A(126) instanceof I){d=A(126);e=c.kf!==d.kf?0:1;}else e=0;if(!e){if(c===A(127))e=1;else if(!(A(127) instanceof I))e=0;else{d=A(127);e=c.kf!==d.kf?0:1;}if(e){if(!(NI(a.lS)?1:0)){f=H5(a,b,a.lS);g=Ij(a,b,a.lS);h=a.ms.data;i=f-h[0]|0;j=a.mr.data;e=g-j[0]|0;a.n6.data[0]=i;a.n7.data[0]=e;h[0]=f;j[0]=g;}else{k=b.movementX|0;f=b.movementY
|0;a.n6.data[0]=k;a.n7.data[0]=f;h=a.ms.data;h[0]=h[0]+b.movementX|0;h=a.mr.data;h[0]=h[0]+b.movementY|0;}a.pv=Em(performance.now()*1000000.0);d=a.mZ;if(d!==null){if(!a.oH.data[0])AEB(d,a.ms.data[0],a.mr.data[0]);else T$(d,a.ms.data[0],a.mr.data[0],0);}}else{if(c===A(128))e=1;else if(!(A(128) instanceof I))e=0;else{d=A(128);e=c.kf!==d.kf?0:1;}if(e){if(a.mZ!==null){l=ATo(b);AOl(a.mZ,0.0,l|0);}a.pv=Em(performance.now()*1000000.0);}else{if(c===A(129))e=1;else if(!(A(129) instanceof I))e=0;else{d=A(129);e=c.kf!==
d.kf?0:1;}if(e){a.rs=1;m=b.changedTouches;e=0;i=m.length;while(e<i){d=m.item(e);k=d.identifier;n=a.qJ;o=0;b:{while(true){if(o>=20){o=(-1);break b;}p=a.qJ;if(o>=(-128)&&o<=127){Fe();q=Ex.data[o+128|0];}else{q=new FW;q.nZ=o;}if(!ATv(p,q,0))break;o=o+1|0;}}if(o>=(-128)&&o<=127){Fe();p=Ex.data[o+128|0];}else{p=new FW;p.nZ=o;}B6(n,k,p);a.oH.data[o]=1;h=a.ms;q=a.lS;l=q.width*1.0/q.clientWidth;k=(d.clientX-(Gx(a,q)|0)|0)+(q.scrollLeft|0)|0;p=q.ownerDocument;n=W(p.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f
=0;else{q=A(130);f=n.kf!==q.kf?0:1;}if(f)p=p.documentElement;h=h.data;l=l*(k+(p.scrollLeft|0)|0);h[o]=l+CH(l)*0.5|0;h=a.mr;q=a.lS;l=q.height*1.0/q.clientHeight;k=(d.clientY-(G6(a,q)|0)|0)+(q.scrollTop|0)|0;d=q.ownerDocument;q=W(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.kf!==p.kf?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[o]=l+CH(l)*0.5|0;a.n6.data[o]=0;a.n7.data[o]=0;d=a.mZ;if(d!==null)Oo(d,a.ms.data[o],a.mr.data[o],o,0);e=e+1|0;}a.pv=Em(performance.now()
*1000000.0);b.preventDefault();}}}}else{if(!a.oH.data[0])return;d=a.tn;e=b.button;ARu(d,!e?0:e==2?1:e!=1?0:2);h=a.oH;h.data[0]=a.tn.n1<=0?0:1;if(!(NI(a.lS)?1:0)){k=H5(a,b,a.lS)-a.ms.data[0]|0;f=Ij(a,b,a.lS)-a.mr.data[0]|0;a.n6.data[0]=k;a.n7.data[0]=f;a.ms.data[0]=H5(a,b,a.lS);a.mr.data[0]=Ij(a,b,a.lS);}else{k=b.movementX|0;f=b.movementY|0;a.n6.data[0]=k;a.n7.data[0]=f;h=a.ms.data;h[0]=h[0]+b.movementX|0;h=a.mr.data;h[0]=h[0]+b.movementY|0;}a.pv=Em(performance.now()*1000000.0);a.oH.data[0]=0;d=a.mZ;if(d!==null)
{e=a.ms.data[0];k=a.mr.data[0];g=b.button;Mv(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}}}else{window.focus();n=b.target;p=a.lS;if(n!==p?0:1){h=a.oH.data;if(!h[0]){a.q5=1;a.rs=1;h[0]=1;e=b.button;r=!e?0:e==2?1:e!=1?0:2;ACx(a.tn,r);a.vQ.data[r]=1;a.n6.data[0]=0;a.n7.data[0]=0;if(!(NI(a.lS)?1:0)){f=H5(a,b,a.lS);g=Ij(a,b,a.lS);a.ms.data[0]=f;a.mr.data[0]=g;}else{h=a.ms.data;h[0]=h[0]+b.movementX|0;h=a.mr.data;h[0]=h[0]+b.movementY|0;}a.pv=Em(performance.now()*1000000.0);d=a.mZ;if(d!==null){e=a.ms.data[0];k=a.mr.data[0];g=
b.button;Oo(d,e,k,0,!g?0:g==2?1:g!=1?0:2);}b.preventDefault();b.stopPropagation();break a;}}s=H5(a,b,p);t=Ij(a,b,a.lS);if(!(s>=0.0&&s<=B7.lE.width&&t>=0.0&&t<=B7.lE.height))a.q5=0;return;}}if(c===A(131))e=1;else if(!(A(131) instanceof I))e=0;else{d=A(131);e=c.kf!==d.kf?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qJ;if(!k)d=!d.kR?null:d.kO;else{h=d.kM;f=Bm(Bg(Bd(X(k),D(2135587861, 2654435769)),d.kT));c:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break c;}if(g==k)break;f
=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}u=d.nZ;d=a.lS;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gx(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.kf!==p.kf?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);k=(l+CH(l)*0.5|0)-a.ms.data[u]|0;d=a.lS;l=d.height*1.0/d.clientHeight;f=(q.clientY-(G6(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))g=1;else if(!(A(130) instanceof I))g=0;else
{p=A(130);g=n.kf!==p.kf?0:1;}if(g)d=d.documentElement;l=l*(f+(d.scrollTop|0)|0);f=(l+CH(l)*0.5|0)-a.mr.data[u]|0;a.n6.data[u]=k;a.n7.data[u]=f;h=a.ms;d=a.lS;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gx(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.kf!==p.kf?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollLeft|0)|0);h[u]=l+CH(l)*0.5|0;h=a.mr;d=a.lS;l=d.height*1.0/d.clientHeight;k=(q.clientY-(G6(a,d)|0)|0)+(d.scrollTop
|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.kf!==p.kf?0:1;}if(f)d=d.documentElement;h=h.data;l=l*(k+(d.scrollTop|0)|0);h[u]=l+CH(l)*0.5|0;d=a.mZ;if(d!==null)T$(d,a.ms.data[u],a.mr.data[u],u);e=e+1|0;}a.pv=Em(performance.now()*1000000.0);b.preventDefault();}if(c===A(132))e=1;else if(!(A(132) instanceof I))e=0;else{d=A(132);e=c.kf!==d.kf?0:1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);v=q.identifier;d=a.qJ;if(!v)p=!d.kR?null
:d.kO;else{h=d.kM;k=Bm(Bg(Bd(X(v),D(2135587861, 2654435769)),d.kT));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==v)break;k=(k+1|0)&d.kQ;}}p=k<0?null:d.kN.data[k];}u=p.nZ;Hg(d,v);a.oH.data[u]=0;d=a.lS;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gx(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;n=W(d.compatMode);if(n===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=n.kf!==p.kf?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CH(l)*0.5|0;d=a.lS;l=d.height*1.0/d.clientHeight;k
=(q.clientY-(G6(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;q=W(d.compatMode);if(q===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{p=A(130);f=q.kf!==p.kf?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CH(l)*0.5|0;h=a.ms.data;k=o-h[u]|0;j=a.mr.data;f=g-j[u]|0;a.n6.data[u]=k;a.n7.data[u]=f;h[u]=o;j[u]=g;d=a.mZ;if(d!==null)Mv(d,h[u],j[u],u,0);e=e+1|0;}a.pv=Em(performance.now()*1000000.0);b.preventDefault();}if(c===A(133))e=1;else if(!(A(133) instanceof I))e=0;else{d=A(133);e=c.kf!==d.kf?0:
1;}if(e){m=b.changedTouches;e=0;i=m.length;while(e<i){q=m.item(e);k=q.identifier;d=a.qJ;if(!k)c=!d.kR?null:d.kO;else{h=d.kM;f=Bm(Bg(Bd(X(k),D(2135587861, 2654435769)),d.kT));e:{while(true){g=h.data[f];if(!g){f= -(f+1|0)|0;break e;}if(g==k)break;f=(f+1|0)&d.kQ;}}c=f<0?null:d.kN.data[f];}u=c.nZ;Hg(d,k);a.oH.data[u]=0;d=a.lS;l=d.width*1.0/d.clientWidth;k=(q.clientX-(Gx(a,d)|0)|0)+(d.scrollLeft|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.kf!==c.kf
?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollLeft|0)|0);o=l+CH(l)*0.5|0;d=a.lS;l=d.height*1.0/d.clientHeight;k=(q.clientY-(G6(a,d)|0)|0)+(d.scrollTop|0)|0;d=d.ownerDocument;p=W(d.compatMode);if(p===A(130))f=1;else if(!(A(130) instanceof I))f=0;else{c=A(130);f=p.kf!==c.kf?0:1;}if(f)d=d.documentElement;l=l*(k+(d.scrollTop|0)|0);g=l+CH(l)*0.5|0;h=a.ms.data;k=o-h[u]|0;j=a.mr.data;f=g-j[u]|0;a.n6.data[u]=k;a.n7.data[u]=f;h[u]=o;j[u]=g;d=a.mZ;if(d!==null)Mv(d,h[u],j[u],u,0);e=e+1|0;}a.pv=Em(performance.now()*1000000.0);b.preventDefault();}},
X6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je;c=W(b.type);if(c!==A(134)){if(A(134) instanceof I){d=A(134);e=c.kf!==d.kf?0:1;}else e=0;}else e=1;if(e&&a.q5){a:{f=SJ(b.keyCode);g=0;switch(f){case 67:g=8;break a;case 112:g=127;break a;default:}}d=a.uT;if(!f)e=d.qY;else{h=d.pi;e=Bm(Bg(Bd(X(f),D(2135587861, 2654435769)),d.qz));b:{while(true){i=h.data[e];if(!i){e= -(e+1|0)|0;break b;}if(i==f)break;e=(e+1|0)&d.pb;}}e=e<0?0:1;}if(e)b.preventDefault();if(f!=67&&f!=112){h=a.ub.data;if(!h[f]){a.rE=a.rE+1|0;h[f]=1;a.tl=1;a.uV.data[f]
=1;d=a.mZ;if(d!==null){j=d.n_;if(j===null)j=d.lJ;CE();k=Bw;g=BG(k,M(Bb));l=g<0?null:k.k3.data[g];if(l===null){l=new CK;k=new Bh;k.kJ=0;k.km=R(C,4);l.kA=k;l.la=100;c:{try{k=CU(M(Bb),null);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{k=CS(M(Bb),null);CV(k,1);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}k=null;}l.kU=k;if(k===null){b=new BA;d=new K;Bu(d);d.ke=G(16);BZ(d,d.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);c=M(Bb).kp;BZ(d,d.kd,
c);c=new I;h=d.ke;m=h.data;f=d.kd;Bu(c);Gr(0,f,m.length);c.kf=L(h.data,0,f);b.kg=1;b.kh=1;Bl(b);b.kj=c;B(b);}Cj(Bw,M(Bb),l);}c=l.kA;e=c.ki;if(e){if(!e){b=new BO;b.kg=1;b.kh=1;Bl(b);b.kj=A(22);B(b);}e=e-1|0;c.ki=e;h=c.km.data;c=h[e];h[e]=null;}else d:{try{c=C$(l.kU,null);break d;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));l=l.kU.lZ.lY;if(l.kp===null)l.kp=W(l.kw.$meta.name);j=l.kp;E(b,b.kd,j);j=new I;h=b.ke;m=h.data;f=b.kd;g=m.length;if(f
>=0&&f<=(g-0|0)){j.kf=L(h.data,0,f);c.kg=1;c.kh=1;Bl(c);c.kj=j;c.lI=d;B(c);}B(FQ());}k=c;k.mP=IT;k.k0=d;k.vz=f;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.kw=j;l=c;j.classObject=l;}}e=BG(d,c);d=e<0?null:d.k3.data[e];if(d!==null){c=d.kA;if(c.ki<d.la){S(c,k);e=d.k6;g=d.kA.ki;if(e>g)g=e;d.k6=g;if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}else if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj
=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}}}}else{b.preventDefault();d=a.mZ;if(d!==null){j=d.n_;if(j===null)j=d.lJ;CE();k=Bw;i=BG(k,M(Bb));l=i<0?null:k.k3.data[i];if(l===null){l=new CK;k=new Bh;k.kJ=0;k.km=R(C,4);l.kA=k;l.la=100;e:{try{k=CU(M(Bb),null);break e;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{k=CS(M(Bb),null);CV(k,1);break e;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}k=null;}l.kU=k;if(k===null){b=new BA;d=new K;Bu(d);d.ke=G(16);BZ(d,d.kd,A(21));if(M(Bb).kp
===null)M(Bb).kp=W(M(Bb).kw.$meta.name);c=M(Bb).kp;BZ(d,d.kd,c);c=new I;h=d.ke;m=h.data;f=d.kd;Bu(c);Gr(0,f,m.length);c.kf=L(h.data,0,f);b.kg=1;b.kh=1;Bl(b);b.kj=c;B(b);}Cj(Bw,M(Bb),l);}c=l.kA;e=c.ki;if(e){if(!e){b=new BO;b.kg=1;b.kh=1;Bl(b);b.kj=A(22);B(b);}e=e-1|0;c.ki=e;h=c.km.data;c=h[e];h[e]=null;}else f:{try{c=C$(l.kU,null);break f;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));l=l.kU.lZ.lY;if(l.kp===null)l.kp=W(l.kw.$meta.name);j=l.kp;E(b,
b.kd,j);j=new I;h=b.ke;m=h.data;f=b.kd;g=m.length;if(f>=0&&f<=(g-0|0)){j.kf=L(h.data,0,f);c.kg=1;c.kh=1;Bl(c);c.kj=j;c.lI=d;B(c);}B(FQ());}k=c;k.mP=IT;k.k0=d;k.vz=f;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.kw=j;l=c;j.classObject=l;}}e=BG(d,c);d=e<0?null:d.k3.data[e];if(d!==null){c=d.kA;if(c.ki<d.la){S(c,k);e=d.k6;i=d.kA.ki;if(e>i)i=e;d.k6=i;if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}else if(BC(k,
BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}d=a.mZ;j=d.n_;if(j===null)j=d.lJ;k=Bw;i=BG(k,M(Bb));l=i<0?null:k.k3.data[i];if(l===null){l=new CK;k=new Bh;k.kJ=0;k.km=R(C,4);l.kA=k;l.la=100;g:{try{k=CU(M(Bb),null);break g;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{k=CS(M(Bb),null);CV(k,1);break g;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}k=null;}l.kU=k;if(k===null){b=new BA;d=new K;Bu(d);d.ke=G(16);BZ(d,d.kd,A(21));if
(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);c=M(Bb).kp;BZ(d,d.kd,c);c=new I;h=d.ke;m=h.data;f=d.kd;Bu(c);Gr(0,f,m.length);c.kf=L(h.data,0,f);b.kg=1;b.kh=1;Bl(b);b.kj=c;B(b);}Cj(Bw,M(Bb),l);}c=l.kA;e=c.ki;if(e){if(!e){b=new BO;b.kg=1;b.kh=1;Bl(b);b.kj=A(22);B(b);}e=e-1|0;c.ki=e;h=c.km.data;c=h[e];h[e]=null;}else h:{try{c=C$(l.kU,null);break h;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));l=l.kU.lZ.lY;if(l.kp===null)l.kp=W(l.kw.$meta.name);j
=l.kp;E(b,b.kd,j);j=new I;h=b.ke;m=h.data;f=b.kd;g=m.length;if(f>=0&&f<=(g-0|0)){j.kf=L(h.data,0,f);c.kg=1;c.kh=1;Bl(c);c.kj=j;c.lI=d;B(c);}B(FQ());}k=c;k.mP=J6;k.k0=d;k.yn=g;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.kw=j;l=c;j.classObject=l;}}e=BG(d,c);d=e<0?null:d.k3.data[e];if(d!==null){c=d.kA;if(c.ki<d.la){S(c,k);e=d.k6;g=d.kA.ki;if(e>g)g=e;d.k6=g;if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}else if
(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(135))e=1;else if(!(A(135) instanceof I))e=0;else{d=A(135);e=c.kf!==d.kf?0:1;}if(e&&a.q5){e=b.charCode&65535;d=a.mZ;if(d!==null){j=d.n_;if(j===null)j=d.lJ;CE();k=Bw;f=BG(k,M(Bb));k=f<0?null:k.k3.data[f];if(k===null){k=new CK;l=new Bh;l.kJ=0;l.km=R(C,4);k.kA=l;k.la=100;i:{try{l=CU(M(Bb),null);break i;}catch($$e){$$je=Bc($$e);if($$je instanceof BH)
{}else{throw $$e;}}try{l=CS(M(Bb),null);CV(l,1);break i;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}l=null;}k.kU=l;if(l===null){b=new BA;d=new K;Bu(d);d.ke=G(16);BZ(d,d.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);c=M(Bb).kp;BZ(d,d.kd,c);c=new I;h=d.ke;m=h.data;f=d.kd;Bu(c);Gr(0,f,m.length);c.kf=L(h.data,0,f);b.kg=1;b.kh=1;Bl(b);b.kj=c;B(b);}Cj(Bw,M(Bb),k);}c=k.kA;f=c.ki;if(f){if(!f){b=new BO;b.kg=1;b.kh=1;Bl(b);b.kj=A(22);B(b);}f=f-1|0;c.ki=f;h=c.km.data;c=h[f];h[f]=null;}
else j:{try{c=C$(k.kU,null);break j;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));l=k.kU.lZ.lY;if(l.kp===null)l.kp=W(l.kw.$meta.name);j=l.kp;E(b,b.kd,j);j=new I;h=b.ke;m=h.data;f=b.kd;g=m.length;if(f>=0&&f<=(g-0|0)){j.kf=L(h.data,0,f);c.kg=1;c.kh=1;Bl(c);c.kj=j;c.lI=d;B(c);}B(FQ());}k=c;k.mP=J6;k.k0=d;k.yn=e;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.kw=j;l=c;j.classObject=l;}}f=BG(d,c);d=
f<0?null:d.k3.data[f];if(d!==null){c=d.kA;if(c.ki<d.la){S(c,k);f=d.k6;g=d.kA.ki;if(f>g)g=f;d.k6=g;if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}else if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}}if(e==9){b.preventDefault();b.stopPropagation();}}else{if(c===A(136))e=1;else if(!(A(136) instanceof I))e=0;else{d=A(136);e=c.kf!==d.kf?0:1;}if(e&&a.q5){f=SJ(b.keyCode);d=a.uT;if(!f)e=d.qY;else{h=d.pi;e
=Bm(Bg(Bd(X(f),D(2135587861, 2654435769)),d.qz));k:{while(true){g=h.data[e];if(!g){e= -(e+1|0)|0;break k;}if(g==f)break;e=(e+1|0)&d.pb;}}e=e<0?0:1;}if(e)b.preventDefault();h=a.ub.data;if(h[f]){a.rE=a.rE-1|0;h[f]=0;}d=a.mZ;if(d!==null){j=d.n_;if(j===null)j=d.lJ;CE();k=Bw;g=BG(k,M(Bb));l=g<0?null:k.k3.data[g];if(l===null){l=new CK;k=new Bh;k.kJ=0;k.km=R(C,4);l.kA=k;l.la=100;l:{try{k=CU(M(Bb),null);break l;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{k=CS(M(Bb),null);CV(k,1);break l;}catch
($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}k=null;}l.kU=k;if(k===null){b=new BA;d=new K;Bu(d);d.ke=G(16);BZ(d,d.kd,A(21));if(M(Bb).kp===null)M(Bb).kp=W(M(Bb).kw.$meta.name);c=M(Bb).kp;BZ(d,d.kd,c);c=new I;h=d.ke;m=h.data;f=d.kd;Bu(c);Gr(0,f,m.length);c.kf=L(h.data,0,f);b.kg=1;b.kh=1;Bl(b);b.kj=c;B(b);}Cj(Bw,M(Bb),l);}c=l.kA;e=c.ki;if(e){if(!e){b=new BO;b.kg=1;b.kh=1;Bl(b);b.kj=A(22);B(b);}e=e-1|0;c.ki=e;h=c.km.data;c=h[e];h[e]=null;}else m:{try{c=C$(l.kU,null);break m;}catch($$e){$$je=Bc($$e);if
($$je instanceof BH){d=$$je;}else{throw $$e;}}c=new T;b=new K;b.ke=G(16);E(b,b.kd,A(23));l=l.kU.lZ.lY;if(l.kp===null)l.kp=W(l.kw.$meta.name);j=l.kp;E(b,b.kd,j);j=new I;h=b.ke;m=h.data;f=b.kd;g=m.length;if(f>=0&&f<=(g-0|0)){j.kf=L(h.data,0,f);c.kg=1;c.kh=1;Bl(c);c.kj=j;c.lI=d;B(c);}B(FQ());}k=c;k.mP=My;k.k0=d;k.vz=f;Eg(j,k);d=Bw;j=k.constructor;if(j===null)c=null;else{c=j.classObject;if(c===null){c=new BD;c.kw=j;l=c;j.classObject=l;}}e=BG(d,c);d=e<0?null:d.k3.data[e];if(d!==null){c=d.kA;if(c.ki<d.la){S(c,k);e
=d.k6;g=d.kA.ki;if(e>g)g=e;d.k6=g;if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}else if(BC(k,BB)){d=k;d.k0=null;d.lq=null;d.lr=null;d.lA=0;d.lv=1;d.lj=0;d.lz=0;d.ln=0;d.lK=null;d.lD=(-1);}}}if(f==61){b.preventDefault();b.stopPropagation();}}}}},
Sc=a=>{let b,c,d;a:{if(a.rs){a.rs=0;b=0;while(true){c=a.vQ.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.tl){a.tl=0;d=0;while(true){c=a.uV.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
H5=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Gx(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.kf!==c.kf?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CH(d)*0.5|0;},
Ij=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(G6(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=W(b.compatMode);if(f===A(130))g=1;else if(!(A(130) instanceof I))g=0;else{c=A(130);g=f.kf!==c.kf?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CH(d)*0.5|0;},
G6=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
Gx=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
ADJ=(a,b)=>{a.mZ=b;},
NI=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
YP=(a,b)=>{AKL(a,b);X6(a,b);};
let S4=F(0);
function UT(){C.call(this);this.pw=null;}
function T_(){C.call(this);this.z3=null;}
let T2=F(0);
let RJ=F();
let P8=F(0);
function T6(){let a=this;C.call(a);a.z6=0;a.s4=0;a.zp=null;a.u1=null;}
let U2=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AK3=F();
let Da=null,B7=null,AI7=null,Lx=null,Fr=null,ANI=null,B5=null,Bs=null,ER=null;
let UX=F(0);
let Ua=F(0);
function Q8(){C.call(this);this.x6=null;}
function KE(){C.call(this);this.tS=null;}
let ADZ=(a,b)=>{let c,d,$$je;c=W(a.tS.pk.nU.document.visibilityState);if(A(137)===c)d=1;else if(!(c instanceof I))d=0;else{c=c;d=A(137).kf!==c.kf?0:1;}if(!d){b=a.tS.st;Gi(b);a:{try{c=GN(b);while(HX(c)){AKP(Cq(c));}D0(b);break a;}catch($$e){$$je=Bc($$e);c=$$je;}D0(b);B(c);}}else{b=a.tS.st;Gi(b);b:{try{c=GN(b);while(HX(c)){APs(Cq(c));}D0(b);break b;}catch($$e){$$je=Bc($$e);c=$$je;}D0(b);B(c);}}},
ANE=(a,b)=>{ADZ(a,b);};
function KF(){C.call(this);this.rD=null;}
let AT3=(a,b)=>{let c,d,e,f,g;c=a.rD.pk.nU.document.documentElement.clientWidth;b=a.rD;d=c-b.oa.us|0;e=b.pk.nU.document.documentElement.clientHeight;b=a.rD;f=b.oa;c=e-f.v0|0;if(d>0&&c>0){if(b.pA!==null){if(f.tg){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}KB(a.rD.pA,d,c);}return;}},
ASI=(a,b)=>{AT3(a,b);};
let Bj=F(BA);
let AAQ=a=>{a.kg=1;a.kh=1;},
AAX=()=>{let a=new Bj();AAQ(a);return a;};
let AQF=F();
let Gr=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new H;e.kg=1;e.kh=1;B(e);};
let AAg=F();
let J1=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bj;e=new K;e.ke=G(16);E(e,e.kd,A(138));J(e,e.kd,b,10);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);d.kg=1;d.kh=1;d.kj=f;B(d);}d=new H;d.kg=1;d.kh=1;B(d);}j=Ls(b/c)|0;if(2>j)j=2;i=LH(j);if(i<=1073741824)return i;d=new Bj;e=new K;e.ke=G(16);E(e,e.kd,A(139));J(e,e.kd,b,10);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);d.kg=1;d.kh=1;d.kj=f;B(d);}d=new H;d.kg=1;d.kh=1;B(d);};
let AII=F(EM);
let Qh=null;
let AQz=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new CC;b.kg=1;b.kh=1;b.kj=A(85);B(b);}f=0;if(c>=0&&c<b.kf.length){a:{switch(b.kf.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=B8;i=X(e);j=C5(X(1),Nj(D(4294967295, 2147483647),i));if(g==d){b=new CC;b.kg=1;b.kh=1;B(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.kf.length)break b;g=AGN(b.kf.charCodeAt(g));if(g<0){l=new CC;b=Ck(b,c,d);m=new K;m.ke=G(16);E(m,m.kd,A(86));c=m.kd;if(b===null)b=A(2);E(m,c,
b);b=new I;n=m.ke;o=n.data;d=m.kd;e=o.length;if(d>=0&&d<=(e-0|0)){b.kf=L(n.data,0,d);l.kg=1;l.kh=1;l.kj=b;B(l);}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);}if(g>=e){l=new CC;p=Ck(b,c,d);b=new K;b.ke=G(16);E(b,b.kd,A(87));J(b,b.kd,e,10);E(b,b.kd,A(81));c=b.kd;if(p===null)p=A(2);E(b,c,p);m=new I;n=b.ke;o=n.data;d=b.kd;e=o.length;if(d>=0&&d<=(e-0|0)){m.kf=L(n.data,0,d);l.kg=1;l.kh=1;l.kj=m;B(l);}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);}if(AC5(h,j)){b=new CC;b.kg=1;b.kh=1;b.kj=A(140);B(b);}h=C5(Bd(i,h),X(g));if(AVH(h,B8)){if(k==
d&&El(h,D(0, 2147483648))&&f)return D(0, 2147483648);l=new CC;p=Ck(b,c,d);m=new K;m.ke=G(16);E(m,m.kd,A(141));c=m.kd;if(p===null)p=A(2);E(m,c,p);b=new I;n=m.ke;o=n.data;e=m.kd;c=o.length;if(e>=0&&e<=(c-0|0)){b.kf=L(n.data,0,e);l.kg=1;l.kh=1;l.kj=b;B(l);}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);}g=k;}if(f)h=AWT(h);return h;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);}b=new CC;l=new K;l.ke=G(16);E(l,l.kd,A(90));J(l,l.kd,e,10);m=new I;n=l.ke;o=n.data;d=l.kd;e=o.length;if(d>=0&&d<=(e-0|0)){m.kf=L(n.data,0,d);b.kg
=1;b.kh=1;b.kj=m;B(b);}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
AGN=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Fy=b=>{let c,d;if(El(b,B8))return 64;c=0;d=Bg(b,32);if(ADU(d,B8))c=32;else d=b;b=Bg(d,16);if(El(b,B8))b=d;else c=c|16;d=Bg(b,8);if(El(d,B8))d=b;else c=c|8;b=Bg(d,4);if(El(b,B8))b=d;else c=c|4;d=Bg(b,2);if(El(d,B8))d=b;else c=c|2;if(ADU(Bg(d,1),B8))c=c|1;return (64-c|0)-1|0;},
E3=(b,c)=>{return AW0(b,c);},
Fx=(b,c)=>{return AWY(b,c);},
AV7=()=>{Qh=M(AKp);};
let AId=F();
let ADj=()=>{return {};};
let Mw=F(0);
function Hm(){let a=this;C.call(a);a.ko=null;a.pQ=0;a.pK=0;a.mM=0;a.zv=0;a.zD=0;a.mN=0;a.pX=0;a.l6=null;a.mK=null;a.nF=null;a.Al=null;a.zI=null;a.nH=null;a.nI=null;a.ow=0;a.sf=null;a.pS=null;a.rv=null;a.so=null;a.za=null;}
let MT=(a,b)=>{a.pQ=1;a.pK=1;a.mM=1;a.zv=1;a.zD=1;a.mN=1;a.pX=1;a.l6=Du(51,0.800000011920929);a.mK=Du(51,0.800000011920929);a.nF=Du(51,0.800000011920929);a.Al=Du(51,0.800000011920929);a.zI=Du(51,0.800000011920929);a.nH=Du(51,0.800000011920929);a.nI=Du(51,0.800000011920929);a.ow=0;a.sf=new Float32Array(40000);a.pS=new Int32Array(12000);a.rv=new Int16Array(12000);a.so=new Int8Array(12000);a.za=new Uint8Array(240000);a.ko=b;b.pixelStorei(37441,0);},
AQT=a=>{let b=new Hm();MT(b,a);return b;},
N7=(a,b)=>{let c,d,e,f,g;if(GV){c=(!BC(b,Ey)?null:b.pB.lk.data).buffer;d=b.kv;e=b.kn-d|0;return new Float32Array(c,d,e);}if((b.kn-b.kv|0)>a.sf.length)a.sf=new Float32Array(b.kn-b.kv|0);e=b.kv;d=0;while(true){f=b.kn;if(e>=f)break;c=a.sf;g=Sp(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.sf;e=f-b.kv|0;return c.subarray(0,e);},
SQ=(a,b)=>{let c,d,e,f,g;if(GV){c=(!BC(b,Ey)?null:b.px.lk.data).buffer;d=b.kv;e=b.kn-d|0;return new Int16Array(c,d,e);}if((b.kn-b.kv|0)>a.rv.length)a.rv=new Int16Array(b.kn-b.kv|0);e=b.kv;d=0;while(true){f=b.kn;if(e>=f)break;c=a.rv;g=ANZ(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.rv;e=f-b.kv|0;return c.subarray(0,e);},
Wa=(a,b)=>{let c,d,e,f,g;if(GV){c=(!BC(b,Ey)?null:b.er()).buffer;d=b.kv;e=b.kn-d|0;return new Int32Array(c,d,e);}if((b.kn-b.kv|0)>a.pS.length)a.pS=new Int32Array(b.kn-b.kv|0);e=b.kv;d=0;while(true){f=b.kn;if(e>=f)break;c=a.pS;g=b.es(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.pS;e=f-b.kv|0;return c.subarray(0,e);},
MM=(a,b)=>{let c,d,e,f,g;if(GV)return !BC(b,Ey)?null:b.lk.data;if((b.kn-b.kv|0)>a.so.length)a.so=new Int8Array(b.kn-b.kv|0);c=b.kv;d=0;while(true){e=b.kn;if(c>=e)break;f=a.so;g=Xv(b,c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.so;c=e-b.kv|0;return f.subarray(0,c);},
AXY=(a,b)=>{if((b.kn-b.kv|0)>a.pS.length)a.pS=new Int32Array(b.kn-b.kv|0);},
AUC=(a,b)=>{let c,d,e,f,g;c=a.nI;d=a.ow;if(!d)c=!c.kR?null:c.kO;else{e=c.kM;f=Bm(Bg(Bd(X(d),D(2135587861, 2654435769)),c.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.kQ;}}c=f<0?null:c.kN.data[f];}c=c;if(!b)c=!c.kR?null:c.kO;else{e=c.kM;d=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kT));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.kQ;}}c=d<0?null:c.kN.data[d];}BE();return c===null?null:c[Bt]===true?c:c.kW;},
AFX=(a,b,c)=>{let d,e,f,g,h,i;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kW;d=a.mK;if(!c)d=!d.kR?null:d.kO;else{e=d.kM;b=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),d.kT));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kQ;}}d=b<0?null:d.kN.data[b];}i=d===null?null:d[Bt]===true?
d:d.kW;a.ko.attachShader(h,i);},
ASA=(a,b,c)=>{let d,e,f,g,h;d=a.ko;e=a.nF;if(!c)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.bindBuffer(b,e);},
ABn=(a,b,c)=>{let d,e,f,g,h;d=a.ko;e=a.nH;if(!c)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.bindTexture(b,e);},
AE1=(a,b,c,d,e)=>{a.ko.blendFuncSeparate(b,c,d,e);},
LF=(a,b,c,d,e)=>{let f,g;if(d instanceof EC){f=a.ko;d=N7(a,d);f.bufferData(b,d,e);}else if(d instanceof HB){f=a.ko;d=Wa(a,d);f.bufferData(b,d,e);}else if(d instanceof HC){f=a.ko;d=SQ(a,d);f.bufferData(b,d,e);}else if(d instanceof Fk){f=a.ko;g=MM(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new T;f.kg=1;f.kh=1;f.kj=A(142);B(f);}a.ko.bufferData(b,c,e);}},
LE=(a,b,c,d,e)=>{let f,g;if(e instanceof EC){f=a.ko;e=N7(a,e);f.bufferSubData(b,c,e);}else if(e instanceof HB){f=a.ko;g=Wa(a,e);f.bufferSubData(b,c,g);}else if(e instanceof HC){f=a.ko;e=SQ(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof Fk)){f=new T;f.kg=1;f.kh=1;f.kj=A(142);B(f);}f=a.ko;e=MM(a,e);f.bufferSubData(b,c,e);}},
AQa=(a,b)=>{a.ko.clear(b);},
ABD=(a,b,c,d,e)=>{a.ko.clearColor(b,c,d,e);},
AGZ=(a,b)=>{let c,d,e,f;c=a.mK;if(!b)c=!c.kR?null:c.kO;else{d=c.kM;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kT));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kQ;}}c=e<0?null:c.kN.data[e];}BE();c=c===null?null:c[Bt]===true?c:c.kW;a.ko.compileShader(c);},
ATl=a=>{let b,c;b=a.ko.createProgram();c=a.pQ;a.pQ=c+1|0;B6(a.l6,c,Cc(b));return c;},
AMI=(a,b)=>{let c,d;c=a.ko.createShader(b);d=a.pK;a.pK=d+1|0;B6(a.mK,d,Cc(c));return d;},
AQb=(a,b)=>{a.ko.depthMask(!!b);},
AMo=(a,b)=>{a.ko.disable(b);},
AKQ=(a,b)=>{a.ko.disableVertexAttribArray(b);},
ACd=(a,b,c,d)=>{a.ko.drawArrays(b,c,d);},
AHO=(a,b,c,d,e)=>{let f,g;f=a.ko;g=e.kv;f.drawElements(b,c,d,g);},
AKj=(a,b,c,d,e)=>{a.ko.drawElements(b,c,d,e);},
ASb=(a,b)=>{a.ko.enable(b);},
AQV=(a,b)=>{a.ko.enableVertexAttribArray(b);},
AWo=a=>{let b,c;b=a.ko.createBuffer();c=a.mM;a.mM=c+1|0;B6(a.nF,c,Cc(b));return c;},
Xs=(a,b)=>{a.ko.generateMipmap(b);},
AX6=a=>{let b,c;b=a.ko.createTexture();c=a.mN;a.mN=c+1|0;B6(a.nH,c,Cc(b));return c;},
KU=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.ko;g=a.l6;if(!b)g=!g.kR?null:g.kO;else{h=g.kM;i=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),g.kT));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kQ;}}g=i<0?null:g.kN.data[i];}BE();g=g===null?null:g[Bt]===true?g:g.kW;g=f.getActiveAttrib(g,c);EB(d,g.size);EB(e,g.type);d.kv=0;d.kn=d.kP;d.kG=(-1);e.kv=0;e.kn=e.kP;e.kG=(-1);return W(g.name);},
Mn=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.ko;g=a.l6;if(!b)g=!g.kR?null:g.kO;else{h=g.kM;i=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),g.kT));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.kQ;}}g=i<0?null:g.kN.data[i];}BE();g=g===null?null:g[Bt]===true?g:g.kW;g=f.getActiveUniform(g,c);EB(d,g.size);EB(e,g.type);d.kv=0;d.kn=d.kP;d.kG=(-1);e.kv=0;e.kn=e.kP;e.kG=(-1);return W(g.name);},
ADG=(a,b,c)=>{let d,e,f,g,h;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kW;return a.ko.getAttribLocation(h,Bz(c));},
JH=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new T;c.kg=1;c.kh=1;c.kj=A(143);B(c);}N3(c,0,a.ko.getParameter(b));c.kv=0;c.kn=c.kP;c.kG=(-1);},
ATc=(a,b)=>{let c,d,e,f,g;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;return W(c.getProgramInfoLog(d));},
MP=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.ko;f=a.l6;if(!b)f=!f.kR?null:f.kO;else{g=f.kM;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),f.kT));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kQ;}}f=h<0?null:f.kN.data[h];}BE();f=f===null?null:f[Bt]===true?f:f.kW;EB(d,e.getProgramParameter(f,c));}else{f=a.ko;e=a.l6;if(!b)e=!e.kR?null:e.kO;else{g=e.kM;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if
(i==b)break;h=(h+1|0)&e.kQ;}}e=h<0?null:e.kN.data[h];}BE();e=e===null?null:e[Bt]===true?e:e.kW;EB(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.kv=0;d.kn=d.kP;d.kG=(-1);},
AIx=(a,b)=>{let c,d,e,f,g;c=a.ko;d=a.mK;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;return W(c.getShaderInfoLog(d));},
Lk=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.ko;f=a.mK;if(!b)f=!f.kR?null:f.kO;else{g=f.kM;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),f.kT));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.kQ;}}f=h<0?null:f.kN.data[h];}BE();f=f===null?null:f[Bt]===true?f:f.kW;EB(d,e.getShaderParameter(f,c));}else{f=a.ko;e=a.mK;if(!b)e=!e.kR?null:e.kO;else{g=e.kM;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.kQ;}}e=h<0?null:e.kN.data[h];}BE();e=e===null?null:e[Bt]===true?e:e.kW;EB(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.kv=0;d.kn=d.kP;d.kG=(-1);},
AEF=(a,b)=>{return W(a.ko.getParameter(b));},
AEz=(a,b,c)=>{let d,e,f,g,h;d=a.ko;e=a.l6;if(!b)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d=d.getUniformLocation(e,Bz(c));if(d===null)return (-1);c=a.nI;if(!b)c=!c.kR?null:c.kO;else{f=c.kM;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kT));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
c.kQ;}}c=h<0?null:c.kN.data[h];}c=c;if(c===null){c=Du(51,0.800000011920929);B6(a.nI,b,c);}h=a.pX;a.pX=h+1|0;B6(c,h,Cc(d));return h;},
ZP=(a,b)=>{let c,d,e,f,g;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.linkProgram(d);},
ACc=(a,b,c)=>{a.ko.pixelStorei(b,c);},
Xr=(a,b,c)=>{let d,e,f,g,h;d=a.ko;e=a.mK;if(!b)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.shaderSource(e,Bz(c));},
M0=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.ko;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.kn>4){if(!GV)l=!(j instanceof EC)?Uint8Array.from(MM(a,j)):N7(a,j);else{m=!BC(j,Ey)?null:j.lk.data;if(!(j instanceof EC)){n=j.kn-j.kv|0;o=m.byteOffset+j.kv|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.kn-j.kv|0;o=m.byteOffset+j.kv|0;l=new Float32Array(m.buffer,o,n);}}a.ko.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=AQg(j,0);EU();j=Gh;if(!p)j=!j.kR?null:j.kO;else{q=j.kM;n=Bm(Bg(Bd(X(p),D(2135587861, 2654435769)),
j.kT));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.kQ;}}j=n<0?null:j.kN.data[n];}k=j;r=k.oX;if(r===null&&k.lR!==null?1:0){j=a.ko;s=k.lR.sh;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.qw!==null?1:0){j=a.ko;s=k.qw;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.ry!==null?1:0){j=a.ko;s=k.ry;j.texImage2D(b,c,d,h,i,s);}else{j=a.ko;FA(k);s=k.oX;j.texImage2D(b,c,d,h,i,s);}}},
AJq=(a,b,c,d)=>{a.ko.texParameterf(b,c,d);},
ALU=(a,b,c,d)=>{let e,f;e=a.ko;f=d;e.texParameterf(b,c,f);},
AMn=(a,b,c)=>{let d,e,f,g,h,i;d=a.nI;e=a.ow;if(!e)d=!d.kR?null:d.kO;else{f=d.kM;g=Bm(Bg(Bd(X(e),D(2135587861, 2654435769)),d.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kQ;}}d=g<0?null:d.kN.data[g];}d=d;if(!b)d=!d.kR?null:d.kO;else{f=d.kM;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.kQ;}}d=g<0?null:d.kN.data[g];}BE();i=d===null?null:d[Bt]===true?d:d.kW;a.ko.uniform1i(i,c);},
Q_=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.nI;f=a.ow;if(!f)g=!g.kR?null:g.kO;else{h=g.kM;c=Bm(Bg(Bd(X(f),D(2135587861, 2654435769)),g.kT));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.kQ;}}g=c<0?null:g.kN.data[c];}g=g;if(!b)g=!g.kR?null:g.kO;else{h=g.kM;c=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),g.kT));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.kQ;}}g=c<0?null:g.kN.data[c];}BE();j=g===null?null:g[Bt]===true?g:g.kW;g=a.ko;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
ZR=(a,b)=>{let c,d,e,f,g;a.ow=b;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.useProgram(d);},
AI1=(a,b,c,d,e,f,g)=>{a.ko.vertexAttribPointer(b,c,d,!!e,f,g);},
XQ=(a,b,c,d,e)=>{a.ko.viewport(b,c,d,e);};
let S3=F(0);
function Kp(){let a=this;Hm.call(a);a.k1=null;a.A5=null;a.AF=0;a.zg=null;a.zB=0;a.zY=null;a.yY=0;a.r7=null;a.rZ=0;a.Av=null;}
let Oq=(a,b)=>{MT(a,b);a.A5=Du(51,0.800000011920929);a.AF=1;a.zg=Du(51,0.800000011920929);a.zB=1;a.zY=Du(51,0.800000011920929);a.yY=1;a.r7=Du(51,0.800000011920929);a.rZ=1;a.Av=new Uint32Array(12000);a.k1=b;},
ARW=a=>{let b=new Kp();Oq(b,a);return b;},
AFp=(a,b)=>{let c,d,e,f,g;c=a.k1;d=a.r7;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.bindVertexArray(d);},
AKH=(a,b,c,d,e)=>{a.k1.drawArraysInstanced(b,c,d,e);},
ATX=(a,b,c,d,e,f)=>{a.k1.drawElementsInstanced(b,c,d,e,f);},
ALi=(a,b,c)=>{let d,e,f,g;d=c.kv;e=0;while(e<b){f=a.k1.createVertexArray();g=a.rZ;a.rZ=g+1|0;B6(a.r7,g,Cc(f));EB(c,g);e=e+1|0;}CL(c,d);},
AHW=(a,b,c)=>{if(b!=34045)JH(a,b,c);else{N3(c,0,a.k1.getParameter(b));c.kv=0;c.kn=c.kP;c.kG=(-1);}};
let Pq=F(Kp);
let ADO=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.k1;d=a.r7;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.bindVertexArray(d);b=a.k1.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f>=0&&
f<=(g-0|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
AAy=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.k1.drawArraysInstanced(b,c,d,e);b=a.k1.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;U(f);B(f);},
ASr=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.k1.drawElementsInstanced(b,c,d,e,f);b=a.k1.getError();if(!b)return;g=new T;h=Bi(b,4);i=new K;i.ke=G(16);E(i,i.kd,A(144));J(i,i.kd,b,10);E(i,i.kd,A(47));b=i.kd;if(h===null)h=A(2);E(i,b,h);j=new I;k=i.ke;l=k.data;c=i.kd;d=l.length;if(c>=0&&c<=(d-0|0)){j.kf=L(k.data,0,c);g.kg=1;g.kh=1;g.kj=j;B(g);}g=new H;U(g);B(g);},
ZD=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.kv;e=0;while(e<b){f=a.k1.createVertexArray();g=a.rZ;a.rZ=g+1|0;B6(a.r7,g,Cc(f));EB(c,g);e=e+1|0;}CL(c,d);b=a.k1.getError();if(!b)return;c=new T;h=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(h===null)h=A(2);E(f,b,h);i=new I;j=f.ke;k=j.data;e=f.kd;l=k.length;if(e>=0&&e<=(l-0|0)){i.kf=L(j.data,0,e);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
AAq=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ko;e=a.nH;if(!c)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.bindTexture(b,e);b=a.k1.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ke;k=f.data;c=e.kd;g=k.length;if(c>=0&&c<=
(g-0|0)){j.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=j;B(d);}d=new H;U(d);B(d);},
AQf=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.clear(b);b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AJv=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.ko.clearColor(b,c,d,e);f=a.k1.getError();if(!f)return;g=new T;h=Bi(f,4);i=new K;i.ke=G(16);E(i,i.kd,A(144));J(i,i.kd,f,10);E(i,i.kd,A(47));f=i.kd;if(h===null)h=A(2);E(i,f,h);j=new I;k=i.ke;l=k.data;m=i.kd;n=l.length;if(m>=0&&m<=(n-0|0)){j.kf=L(k.data,0,m);g.kg=1;g.kh=1;g.kj=j;B(g);}g=new H;U(g);B(g);},
ZA=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.depthMask(!!b);b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AQY=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.disable(b);b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AC2=(a,b,c,d)=>{let e,f,g,h,i,j;a.ko.drawArrays(b,c,d);b=a.k1.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;d=j.length;if(c>=0&&c<=(d-0|0)){h.kf=L(i.data,0,c);e.kg=1;e.kh=1;e.kj=h;B(e);}e=new H;U(e);B(e);},
AMV=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.ko;g=e.kv;f.drawElements(b,c,d,g);b=a.k1.getError();if(!b)return;e=new T;h=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(h===null)h=A(2);E(f,b,h);i=new I;j=f.ke;k=j.data;c=f.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);e.kg=1;e.kh=1;e.kj=i;B(e);}e=new H;U(e);B(e);},
AOG=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.enable(b);b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
Xc=(a,b)=>{return W(a.ko.getParameter(b));},
Yp=(a,b,c)=>{let d,e,f,g,h,i,j;a.ko.pixelStorei(b,c);b=a.k1.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=g;B(d);}d=new H;U(d);B(d);},
AJ2=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;M0(a,b,c,d,e,f,g,h,i,j);b=a.k1.getError();if(!b)return;j=new T;k=Bi(b,4);l=new K;l.ke=G(16);E(l,l.kd,A(144));J(l,l.kd,b,10);E(l,l.kd,A(47));b=l.kd;if(k===null)k=A(2);E(l,b,k);m=new I;n=l.ke;o=n.data;c=l.kd;d=o.length;if(c>=0&&c<=(d-0|0)){m.kf=L(n.data,0,c);j.kg=1;j.kh=1;j.kj=m;B(j);}j=new H;U(j);B(j);},
ACL=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.ko.texParameterf(b,c,d);b=a.k1.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;k=j.length;if(c>=0&&c<=(k-0|0)){h.kf=L(i.data,0,c);e.kg=1;e.kh=1;e.kj=h;B(e);}e=new H;U(e);B(e);},
AFe=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ko.viewport(b,c,d,e);b=a.k1.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;U(f);B(f);},
AIE=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kW;d=a.mK;if(!c)d=!d.kR?null:d.kO;else{e=d.kM;b=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),d.kT));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kQ;}}d=b<0?null:d.kN.data[b];}i=d===null?null:d[Bt]===true
?d:d.kW;a.ko.attachShader(h,i);b=a.k1.getError();if(!b)return;d=new T;j=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(j===null)j=A(2);E(h,b,j);i=new I;e=h.ke;k=e.data;c=h.kd;f=k.length;if(c>=0&&c<=(f-0|0)){i.kf=L(e.data,0,c);d.kg=1;d.kh=1;d.kj=i;B(d);}d=new H;U(d);B(d);},
ARO=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ko;e=a.nF;if(!c)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.bindBuffer(b,e);b=a.k1.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ke;k=f.data;c=e.kd;g=k.length;if(c>=0&&c<=(g
-0|0)){j.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=j;B(d);}d=new H;U(d);B(d);},
ADQ=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ko.blendFuncSeparate(b,c,d,e);b=a.k1.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;U(f);B(f);},
AJH=(a,b,c,d,e)=>{let f,g,h,i,j;LF(a,b,c,d,e);b=a.k1.getError();if(!b)return;d=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;e=j.length;if(c>=0&&c<=(e-0|0)){h.kf=L(i.data,0,c);d.kg=1;d.kh=1;d.kj=h;B(d);}d=new H;U(d);B(d);},
ARF=(a,b,c,d,e)=>{let f,g,h,i,j;LE(a,b,c,d,e);b=a.k1.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;d=j.length;if(c>=0&&c<=(d-0|0)){h.kf=L(i.data,0,c);e.kg=1;e.kh=1;e.kj=h;B(e);}e=new H;U(e);B(e);},
AK_=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mK;if(!b)c=!c.kR?null:c.kO;else{d=c.kM;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kT));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kQ;}}c=e<0?null:c.kN.data[e];}BE();g=c===null?null:c[Bt]===true?c:c.kW;a.ko.compileShader(g);b=a.k1.getError();if(!b)return;c=new T;h=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(h===null)h=A(2);E(g,b,h);i=new I;d=g.ke;j=d.data;e=g.kd;f=j.length;if(e>=0&&e<=(f-0|0))
{i.kf=L(d.data,0,e);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
ATk=a=>{let b,c,d,e,f,g,h,i,j;b=a.ko.createProgram();c=a.pQ;a.pQ=c+1|0;B6(a.l6,c,Cc(b));d=a.k1.getError();if(!d)return c;b=new T;e=Bi(d,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,d,10);E(f,f.kd,A(47));d=f.kd;if(e===null)e=A(2);E(f,d,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);b.kg=1;b.kh=1;b.kj=g;B(b);}b=new H;U(b);B(b);},
ANe=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko.createShader(b);d=a.pK;a.pK=d+1|0;B6(a.mK,d,Cc(c));b=a.k1.getError();if(!b)return d;c=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;d=f.kd;j=i.length;if(d>=0&&d<=(j-0|0)){g.kf=L(h.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;U(c);B(c);},
AS_=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.disableVertexAttribArray(b);b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
Z7=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ko.drawElements(b,c,d,e);b=a.k1.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;U(f);B(f);},
ANl=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.enableVertexAttribArray(b);b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AQl=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.generateMipmap(b);b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AGH=(a,b,c,d,e)=>{let f,g,h,i,j;f=KU(a,b,c,d,e);b=a.k1.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ke;i=h.data;c=e.kd;j=i.length;if(c>=0&&c<=(j-0|0)){f.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=f;B(d);}d=new H;U(d);B(d);},
AQc=(a,b,c,d,e)=>{let f,g,h,i,j;f=Mn(a,b,c,d,e);b=a.k1.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ke;i=h.data;c=e.kd;j=i.length;if(c>=0&&c<=(j-0|0)){f.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=f;B(d);}d=new H;U(d);B(d);},
AKr=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kW;b=a.ko.getAttribLocation(h,Bz(c));f=a.k1.getError();if(!f)return b;c=new T;i=Bi(f,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,f,10);E(d,d.kd,A(47));b=d.kd;if(i===null)i=A(2);E(d,b,i);h=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f
>=0&&f<=(g-0|0)){h.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;U(c);B(c);},
AD1=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)JH(a,b,c);else{N3(c,0,a.k1.getParameter(b));c.kv=0;c.kn=c.kP;c.kG=(-1);}b=a.k1.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
ABG=(a,b,c,d)=>{let e,f,g,h,i,j;MP(a,b,c,d);b=a.k1.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=g;B(d);}d=new H;U(d);B(d);},
Yn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c=W(c.getProgramInfoLog(d));b=a.k1.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f
>=0&&f<=(g-0|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
ATi=(a,b,c,d)=>{let e,f,g,h,i,j;Lk(a,b,c,d);b=a.k1.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=g;B(d);}d=new H;U(d);B(d);},
Zh=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko;d=a.mK;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c=W(c.getShaderInfoLog(d));b=a.k1.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f>=
0&&f<=(g-0|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
Yq=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ko;e=a.l6;if(!b)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;c=d.getUniformLocation(e,Bz(c));if(c===null)h=(-1);else{d=a.nI;if(!b)d=!d.kR?null:d.kO;else{f=d.kM;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|
0)&d.kQ;}}d=h<0?null:d.kN.data[h];}d=d;if(d===null){d=Du(51,0.800000011920929);B6(a.nI,b,d);}h=a.pX;a.pX=h+1|0;B6(d,h,Cc(c));}b=a.k1.getError();if(!b)return h;c=new T;i=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ke;j=f.data;h=d.kd;g=j.length;if(h>=0&&h<=(g-0|0)){e.kf=L(f.data,0,h);c.kg=1;c.kh=1;c.kj=e;B(c);}c=new H;U(c);B(c);},
ASh=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.linkProgram(d);b=a.k1.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f>=0&&f<=(g-0
|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
Yl=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ko;e=a.mK;if(!b)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.shaderSource(e,Bz(c));b=a.k1.getError();if(!b)return;c=new T;i=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ke;j=f.data;g=d.kd;h=j.length;if(g>=0&&g
<=(h-0|0)){e.kf=L(f.data,0,g);c.kg=1;c.kh=1;c.kj=e;B(c);}c=new H;U(c);B(c);},
ZO=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.ko;f=d;e.texParameterf(b,c,f);b=a.k1.getError();if(!b)return;e=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);e.kg=1;e.kh=1;e.kj=i;B(e);}e=new H;U(e);B(e);},
AAV=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.nI;e=a.ow;if(!e)d=!d.kR?null:d.kO;else{f=d.kM;g=Bm(Bg(Bd(X(e),D(2135587861, 2654435769)),d.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kQ;}}d=g<0?null:d.kN.data[g];}d=d;if(!b)d=!d.kR?null:d.kO;else{f=d.kM;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kQ;}}d=e<0?null:d.kN.data[e];}BE();i=d===null?null:d[Bt]===true?d:d.kW;a.ko.uniform1i(i,c);b
=a.k1.getError();if(!b)return;d=new T;i=Bi(b,4);j=new K;j.ke=G(16);E(j,j.kd,A(144));J(j,j.kd,b,10);E(j,j.kd,A(47));b=j.kd;if(i===null)i=A(2);E(j,b,i);k=new I;f=j.ke;l=f.data;c=j.kd;e=l.length;if(c>=0&&c<=(e-0|0)){k.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=k;B(d);}d=new H;U(d);B(d);},
AT2=(a,b)=>{let c,d,e,f,g,h,i,j;a.ow=b;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.useProgram(d);b=a.k1.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f>=0&&f
<=(g-0|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
AOa=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.ko.vertexAttribPointer(b,c,d,!!e,f,g);b=a.k1.getError();if(!b)return;h=new T;i=Bi(b,4);j=new K;j.ke=G(16);E(j,j.kd,A(144));J(j,j.kd,b,10);E(j,j.kd,A(47));b=j.kd;if(i===null)i=A(2);E(j,b,i);k=new I;l=j.ke;m=l.data;c=j.kd;d=m.length;if(c>=0&&c<=(d-0|0)){k.kf=L(l.data,0,c);h.kg=1;h.kh=1;h.kj=k;B(h);}h=new H;U(h);B(h);};
function QX(){let a=this;C.call(a);a.vY=0;a.vh=0;a.vq=0;a.y3=null;a.z0=null;a.pG=null;a.yT=A(145);}
let AIv=(a,b,c,d,e)=>{a.yT=A(145);if(b===NZ)a.pG=JS;else if(b===Nm)a.pG=JS;else if(b===Nt)a.pG=J$;else if(b===M9)a.pG=J$;else if(b!==HO)a.pG=SZ;else a.pG=L4;b=a.pG;if(b===JS)LU(a,A(146),c);else if(b===L4)LU(a,A(147),c);else if(b===J$)LU(a,A(148),c);else{a.vY=(-1);a.vh=(-1);a.vq=(-1);d=A(68);e=A(68);}a.y3=d;a.z0=e;},
AMP=(a,b,c,d)=>{let e=new QX();AIv(e,a,b,c,d);return e;},
LU=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=Q9(I_(b,0),c);if(!Rt(d)){e=Da;b=new K;b.ke=G(16);E(b,b.kd,A(149));E(b,b.kd,c);c=new I;f=b.ke;g=f.data;h=b.kd;i=g.length;if(h>=0&&h<=(i-0|0)){c.kf=L(f.data,0,h);if(e.p7>=2){if(BX===null){b=new C6;e=new Cu;Bu(e);e.l8=BN(32);Fb(b);b.mq=e;e=new K;Fi(e);b.l_=e;b.l$=G(32);b.ma=0;b.mb=Co;BX=b;}b=new K;b.ke=G(16);BZ(b,b.kd,A(145));BZ(b,b.kd,A(81));BZ(b,b.kd,c);c=new I;f=b.ke;g=f.data;h=b.kd;i=g.length;if(h>=0&&h<=(i-0|0)){c.kf=L(f.data,0,h);B2(Bz(c));B2("\n");}else{b
=new H;b.kg=1;b.kh=1;B(b);}}a.vY=2;a.vh=0;a.vq=0;break a;}b=new H;b.kg=1;b.kh=1;B(b);}b=d.oK;j=b.pf;if(!j){b=new BO;b.kg=1;b.kh=1;Bl(b);B(b);}k=BW(1,b.qv);if(k>=0){b=new H;c=new K;Bu(c);c.ke=G(16);J(c,c.kd,1,10);e=new I;f=c.ke;g=f.data;h=c.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);b.kg=1;b.kh=1;b.kj=e;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}f=b.mh.data;if(f[2]<0)e=null;else{b=b.qQ;if(!j){b=new BO;b.kg=1;b.kh=1;Bl(b);B(b);}if(k>=0){b=new H;c=new K;Bu(c);c.ke=G(16);J(c,c.kd,1,10);e=new I;f=c.ke;g=f.data;h
=c.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);b.kg=1;b.kh=1;b.kj=e;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}h=f[2];if(!j){b=new BO;b.kg=1;b.kh=1;Bl(b);B(b);}if(k>=0){b=new H;c=new K;Bu(c);c.ke=G(16);J(c,c.kd,1,10);e=new I;f=c.ke;g=f.data;h=c.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);b.kg=1;b.kh=1;b.kj=e;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}e=Ck(b,h,f[3]);}f=(KT(I_(A(150),0),e,0)).data;b=f[0];b:{try{h=Lr(b);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}d=Da;e=new K;e.ke
=G(16);E(e,e.kd,A(151));E(e,e.kd,b);E(e,e.kd,A(152));J(e,e.kd,2,10);l=new I;g=e.ke;m=g.data;i=e.kd;j=m.length;if(i>=0&&i<=(j-0|0)){l.kf=L(g.data,0,i);if(d.p7>=1){if(Dv===null){b=new F9;e=new Cu;Fb(e);e.l8=BN(32);Gv(b,e);b.l_=EF();b.l$=G(32);b.ma=0;b.mb=Co;Dv=b;}b=new K;b.ke=G(16);Cd(b,b.kd,Cp(A(153)));Cd(b,b.kd,Cp(A(81)));Cd(b,b.kd,Cp(l));c=new I;g=b.ke;m=g.data;i=b.kd;j=m.length;if(i>=0&&i<=(j-0|0)){c.kf=L(g.data,0,i);DP(Bz(c));DP("\n");}else{b=new H;b.kg=1;b.kh=1;B(b);}}h=2;}else{b=new H;b.kg=1;b.kh=1;B(b);}}a.vY
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=Lr(b);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}d=Da;e=new K;e.ke=G(16);E(e,e.kd,A(151));E(e,e.kd,b);E(e,e.kd,A(152));J(e,e.kd,0,10);l=new I;g=e.ke;m=g.data;j=e.kd;k=m.length;if(j>=0&&j<=(k-0|0)){l.kf=L(g.data,0,j);if(d.p7>=1){if(Dv===null){b=new F9;e=new Cu;Fb(e);e.l8=BN(32);Gv(b,e);b.l_=EF();b.l$=G(32);b.ma=0;b.mb=Co;Dv=b;}b=new K;b.ke=G(16);Cd(b,b.kd,Cp(A(153)));Cd(b,b.kd,Cp(A(81)));Cd(b,b.kd,Cp(l));c=new I;g=b.ke;m=g.data;j=b.kd;k
=m.length;if(j>=0&&j<=(k-0|0)){c.kf=L(g.data,0,j);DP(Bz(c));DP("\n");}else{b=new H;b.kg=1;b.kh=1;B(b);}}i=0;}else{b=new H;b.kg=1;b.kh=1;B(b);}}}a.vh=i;if(n<3)h=0;else{b=f[2];d:{try{h=Lr(b);break d;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}e=Da;d=new K;d.ke=G(16);E(d,d.kd,A(151));E(d,d.kd,b);E(d,d.kd,A(152));J(d,d.kd,0,10);b=new I;g=d.ke;f=g.data;h=d.kd;i=f.length;if(h>=0&&h<=(i-0|0)){b.kf=L(g.data,0,h);if(e.p7>=1){if(Dv===null){e=new F9;d=new Cu;Fb(d);d.l8=BN(32);Gv(e,d);e.l_=EF();e.l$
=G(32);e.ma=0;e.mb=Co;Dv=e;}e=new K;e.ke=G(16);Cd(e,e.kd,Cp(A(153)));Cd(e,e.kd,Cp(A(81)));Cd(e,e.kd,Cp(b));b=new I;f=e.ke;g=f.data;i=e.kd;j=g.length;if(i>=0&&i<=(j-0|0)){b.kf=L(f.data,0,i);DP(Bz(b));DP("\n");}else{b=new H;b.kg=1;b.kh=1;B(b);}}h=0;}else{b=new H;b.kg=1;b.kh=1;B(b);}}}a.vq=h;}};
let Fh=F(BF);
let NZ=null,Nt=null,ABo=null,M9=null,HO=null,Nm=null,AE$=null;
let AB6=()=>{let b,c,d,e,f,g;b=new Fh;b.kx=A(7);b.kq=0;NZ=b;c=new Fh;c.kx=A(154);c.kq=1;Nt=c;d=new Fh;d.kx=A(155);d.kq=2;ABo=d;e=new Fh;e.kx=A(156);e.kq=3;M9=e;f=new Fh;f.kx=A(157);f.kq=4;HO=f;g=new Fh;g.kx=A(158);g.kq=5;Nm=g;AE$=V(Fh,[b,c,d,e,f,g]);};
let Uj=F(0);
function M5(){C.call(this);this.y6=null;}
let ACU=a=>{return;};
let V_=F(Hm);
let ASQ=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ko;e=a.nH;if(!c)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.bindTexture(b,e);b=a.ko.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ke;k=f.data;c=e.kd;g=k.length;if(c>=0&&
c<=(g-0|0)){j.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=j;B(d);}d=new H;U(d);B(d);},
ABN=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.clear(b);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
ACJ=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.ko.clearColor(b,c,d,e);f=a.ko.getError();if(!f)return;g=new T;h=Bi(f,4);i=new K;i.ke=G(16);E(i,i.kd,A(144));J(i,i.kd,f,10);E(i,i.kd,A(47));f=i.kd;if(h===null)h=A(2);E(i,f,h);j=new I;k=i.ke;l=k.data;m=i.kd;n=l.length;if(m>=0&&m<=(n-0|0)){j.kf=L(k.data,0,m);g.kg=1;g.kh=1;g.kj=j;B(g);}g=new H;U(g);B(g);},
AJF=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.depthMask(!!b);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
ATB=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.disable(b);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AGX=(a,b,c,d)=>{let e,f,g,h,i,j;a.ko.drawArrays(b,c,d);b=a.ko.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;d=j.length;if(c>=0&&c<=(d-0|0)){h.kf=L(i.data,0,c);e.kg=1;e.kh=1;e.kj=h;B(e);}e=new H;U(e);B(e);},
AS2=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.ko;g=e.kv;f.drawElements(b,c,d,g);b=a.ko.getError();if(!b)return;e=new T;h=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(h===null)h=A(2);E(f,b,h);i=new I;j=f.ke;k=j.data;c=f.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);e.kg=1;e.kh=1;e.kj=i;B(e);}e=new H;U(e);B(e);},
Z$=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.enable(b);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AIj=(a,b)=>{return W(a.ko.getParameter(b));},
ALe=(a,b,c)=>{let d,e,f,g,h,i,j;a.ko.pixelStorei(b,c);b=a.ko.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=g;B(d);}d=new H;U(d);B(d);},
AD2=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;M0(a,b,c,d,e,f,g,h,i,j);b=a.ko.getError();if(!b)return;j=new T;k=Bi(b,4);l=new K;l.ke=G(16);E(l,l.kd,A(144));J(l,l.kd,b,10);E(l,l.kd,A(47));b=l.kd;if(k===null)k=A(2);E(l,b,k);m=new I;n=l.ke;o=n.data;c=l.kd;d=o.length;if(c>=0&&c<=(d-0|0)){m.kf=L(n.data,0,c);j.kg=1;j.kh=1;j.kj=m;B(j);}j=new H;U(j);B(j);},
ADg=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.ko.texParameterf(b,c,d);b=a.ko.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;k=j.length;if(c>=0&&c<=(k-0|0)){h.kf=L(i.data,0,c);e.kg=1;e.kh=1;e.kj=h;B(e);}e=new H;U(e);B(e);},
ATd=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ko.viewport(b,c,d,e);b=a.ko.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;U(f);B(f);},
Yi=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kW;d=a.mK;if(!c)d=!d.kR?null:d.kO;else{e=d.kM;b=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),d.kT));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.kQ;}}d=b<0?null:d.kN.data[b];}i=d===null?null:d[Bt]===true
?d:d.kW;a.ko.attachShader(h,i);b=a.ko.getError();if(!b)return;d=new T;j=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(j===null)j=A(2);E(h,b,j);i=new I;e=h.ke;k=e.data;c=h.kd;f=k.length;if(c>=0&&c<=(f-0|0)){i.kf=L(e.data,0,c);d.kg=1;d.kh=1;d.kj=i;B(d);}d=new H;U(d);B(d);},
W$=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ko;e=a.nF;if(!c)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(c),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.bindBuffer(b,e);b=a.ko.getError();if(!b)return;d=new T;i=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(i===null)i=A(2);E(e,b,i);j=new I;f=e.ke;k=f.data;c=e.kd;g=k.length;if(c>=0&&c<=(g
-0|0)){j.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=j;B(d);}d=new H;U(d);B(d);},
W8=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ko.blendFuncSeparate(b,c,d,e);b=a.ko.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;U(f);B(f);},
AHN=(a,b,c,d,e)=>{let f,g,h,i,j;LF(a,b,c,d,e);b=a.ko.getError();if(!b)return;d=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;e=j.length;if(c>=0&&c<=(e-0|0)){h.kf=L(i.data,0,c);d.kg=1;d.kh=1;d.kj=h;B(d);}d=new H;U(d);B(d);},
AFs=(a,b,c,d,e)=>{let f,g,h,i,j;LE(a,b,c,d,e);b=a.ko.getError();if(!b)return;e=new T;f=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(f===null)f=A(2);E(g,b,f);h=new I;i=g.ke;j=i.data;c=g.kd;d=j.length;if(c>=0&&c<=(d-0|0)){h.kf=L(i.data,0,c);e.kg=1;e.kh=1;e.kj=h;B(e);}e=new H;U(e);B(e);},
ATN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mK;if(!b)c=!c.kR?null:c.kO;else{d=c.kM;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),c.kT));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.kQ;}}c=e<0?null:c.kN.data[e];}BE();g=c===null?null:c[Bt]===true?c:c.kW;a.ko.compileShader(g);b=a.ko.getError();if(!b)return;c=new T;h=Bi(b,4);g=new K;g.ke=G(16);E(g,g.kd,A(144));J(g,g.kd,b,10);E(g,g.kd,A(47));b=g.kd;if(h===null)h=A(2);E(g,b,h);i=new I;d=g.ke;j=d.data;e=g.kd;f=j.length;if(e>=0&&e<=(f-0|0))
{i.kf=L(d.data,0,e);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
ALL=a=>{let b,c,d,e,f,g,h,i,j;b=a.ko.createProgram();c=a.pQ;a.pQ=c+1|0;B6(a.l6,c,Cc(b));d=a.ko.getError();if(!d)return c;b=new T;e=Bi(d,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,d,10);E(f,f.kd,A(47));d=f.kd;if(e===null)e=A(2);E(f,d,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);b.kg=1;b.kh=1;b.kj=g;B(b);}b=new H;U(b);B(b);},
ATq=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko.createShader(b);d=a.pK;a.pK=d+1|0;B6(a.mK,d,Cc(c));b=a.ko.getError();if(!b)return d;c=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;d=f.kd;j=i.length;if(d>=0&&d<=(j-0|0)){g.kf=L(h.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;U(c);B(c);},
ALE=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.disableVertexAttribArray(b);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AFM=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ko.drawElements(b,c,d,e);b=a.ko.getError();if(!b)return;f=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;U(f);B(f);},
ATC=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.enableVertexAttribArray(b);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AKD=(a,b)=>{let c,d,e,f,g,h,i,j;a.ko.generateMipmap(b);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AHR=(a,b,c,d,e)=>{let f,g,h,i,j;f=KU(a,b,c,d,e);b=a.ko.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ke;i=h.data;c=e.kd;j=i.length;if(c>=0&&c<=(j-0|0)){f.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=f;B(d);}d=new H;U(d);B(d);},
AAw=(a,b,c,d,e)=>{let f,g,h,i,j;f=Mn(a,b,c,d,e);b=a.ko.getError();if(!b)return f;d=new T;g=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(g===null)g=A(2);E(e,b,g);f=new I;h=e.ke;i=h.data;c=e.kd;j=i.length;if(c>=0&&c<=(j-0|0)){f.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=f;B(d);}d=new H;U(d);B(d);},
AFY=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();h=d===null?null:d[Bt]===true?d:d.kW;b=a.ko.getAttribLocation(h,Bz(c));f=a.ko.getError();if(!f)return b;c=new T;i=Bi(f,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,f,10);E(d,d.kd,A(47));b=d.kd;if(i===null)i=A(2);E(d,b,i);h=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f
>=0&&f<=(g-0|0)){h.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;U(c);B(c);},
XV=(a,b,c)=>{let d,e,f,g,h,i,j;JH(a,b,c);b=a.ko.getError();if(!b)return;c=new T;d=Bi(b,4);e=new K;e.ke=G(16);E(e,e.kd,A(144));J(e,e.kd,b,10);E(e,e.kd,A(47));b=e.kd;if(d===null)d=A(2);E(e,b,d);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;U(c);B(c);},
AD8=(a,b,c,d)=>{let e,f,g,h,i,j;MP(a,b,c,d);b=a.ko.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=g;B(d);}d=new H;U(d);B(d);},
AEe=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c=W(c.getProgramInfoLog(d));b=a.ko.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f
>=0&&f<=(g-0|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
Yy=(a,b,c,d)=>{let e,f,g,h,i,j;Lk(a,b,c,d);b=a.ko.getError();if(!b)return;d=new T;e=Bi(b,4);f=new K;f.ke=G(16);E(f,f.kd,A(144));J(f,f.kd,b,10);E(f,f.kd,A(47));b=f.kd;if(e===null)e=A(2);E(f,b,e);g=new I;h=f.ke;i=h.data;c=f.kd;j=i.length;if(c>=0&&c<=(j-0|0)){g.kf=L(h.data,0,c);d.kg=1;d.kh=1;d.kj=g;B(d);}d=new H;U(d);B(d);},
AOh=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko;d=a.mK;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c=W(c.getShaderInfoLog(d));b=a.ko.getError();if(!b)return c;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f
>=0&&f<=(g-0|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
AQE=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ko;e=a.l6;if(!b)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;c=d.getUniformLocation(e,Bz(c));if(c===null)h=(-1);else{d=a.nI;if(!b)d=!d.kR?null:d.kO;else{f=d.kM;h=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1
|0)&d.kQ;}}d=h<0?null:d.kN.data[h];}d=d;if(d===null){d=Du(51,0.800000011920929);B6(a.nI,b,d);}h=a.pX;a.pX=h+1|0;B6(d,h,Cc(c));}b=a.ko.getError();if(!b)return h;c=new T;i=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ke;j=f.data;h=d.kd;g=j.length;if(h>=0&&h<=(g-0|0)){e.kf=L(f.data,0,h);c.kg=1;c.kh=1;c.kj=e;B(c);}c=new H;U(c);B(c);},
AI8=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.linkProgram(d);b=a.ko.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f>=0&&f<=(g-0
|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
AS0=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ko;e=a.mK;if(!b)e=!e.kR?null:e.kO;else{f=e.kM;g=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.kQ;}}e=g<0?null:e.kN.data[g];}BE();e=e===null?null:e[Bt]===true?e:e.kW;d.shaderSource(e,Bz(c));b=a.ko.getError();if(!b)return;c=new T;i=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(i===null)i=A(2);E(d,b,i);e=new I;f=d.ke;j=f.data;g=d.kd;h=j.length;if(g>=0&&
g<=(h-0|0)){e.kf=L(f.data,0,g);c.kg=1;c.kh=1;c.kj=e;B(c);}c=new H;U(c);B(c);},
AQu=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.ko;f=d;e.texParameterf(b,c,f);b=a.ko.getError();if(!b)return;e=new T;g=Bi(b,4);h=new K;h.ke=G(16);E(h,h.kd,A(144));J(h,h.kd,b,10);E(h,h.kd,A(47));b=h.kd;if(g===null)g=A(2);E(h,b,g);i=new I;j=h.ke;k=j.data;c=h.kd;d=k.length;if(c>=0&&c<=(d-0|0)){i.kf=L(j.data,0,c);e.kg=1;e.kh=1;e.kj=i;B(e);}e=new H;U(e);B(e);},
ATj=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.nI;e=a.ow;if(!e)d=!d.kR?null:d.kO;else{f=d.kM;g=Bm(Bg(Bd(X(e),D(2135587861, 2654435769)),d.kT));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.kQ;}}d=g<0?null:d.kN.data[g];}d=d;if(!b)d=!d.kR?null:d.kO;else{f=d.kM;e=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.kQ;}}d=e<0?null:d.kN.data[e];}BE();i=d===null?null:d[Bt]===true?d:d.kW;a.ko.uniform1i(i,c);b
=a.ko.getError();if(!b)return;d=new T;i=Bi(b,4);j=new K;j.ke=G(16);E(j,j.kd,A(144));J(j,j.kd,b,10);E(j,j.kd,A(47));b=j.kd;if(i===null)i=A(2);E(j,b,i);k=new I;f=j.ke;l=f.data;c=j.kd;e=l.length;if(c>=0&&c<=(e-0|0)){k.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=k;B(d);}d=new H;U(d);B(d);},
YA=(a,b)=>{let c,d,e,f,g,h,i,j;a.ow=b;c=a.ko;d=a.l6;if(!b)d=!d.kR?null:d.kO;else{e=d.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),d.kT));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.kQ;}}d=f<0?null:d.kN.data[f];}BE();d=d===null?null:d[Bt]===true?d:d.kW;c.useProgram(d);b=a.ko.getError();if(!b)return;c=new T;h=Bi(b,4);d=new K;d.ke=G(16);E(d,d.kd,A(144));J(d,d.kd,b,10);E(d,d.kd,A(47));b=d.kd;if(h===null)h=A(2);E(d,b,h);i=new I;e=d.ke;j=e.data;f=d.kd;g=j.length;if(f>=0&&f<=
(g-0|0)){i.kf=L(e.data,0,f);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;U(c);B(c);},
ABs=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.ko.vertexAttribPointer(b,c,d,!!e,f,g);b=a.ko.getError();if(!b)return;h=new T;i=Bi(b,4);j=new K;j.ke=G(16);E(j,j.kd,A(144));J(j,j.kd,b,10);E(j,j.kd,A(47));b=j.kd;if(i===null)i=A(2);E(j,b,i);k=new I;l=j.ke;m=l.data;c=j.kd;d=m.length;if(c>=0&&c<=(d-0|0)){k.kf=L(l.data,0,c);h.kg=1;h.kh=1;h.kj=k;B(h);}h=new H;U(h);B(h);};
function Uo(){let a=this;C.call(a);a.oQ=0;a.kM=null;a.kN=null;a.kO=null;a.kR=0;a.w0=0.0;a.tZ=0;a.kT=0;a.kQ=0;}
let AFn=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.w0=c;d=J1(b,c);a.tZ=d*c|0;b=d-1|0;a.kQ=b;a.kT=Fy(X(b));a.kM=Ba(d);a.kN=R(C,d);return;}e=new Bj;f=new K;f.ke=G(16);E(f,f.kd,A(69));Gb(f,f.kd,c);g=new I;h=f.ke;i=h.data;d=f.kd;j=i.length;if(d>=0&&d<=(j-0|0)){g.kf=L(h.data,0,d);e.kg=1;e.kh=1;e.kj=g;B(e);}f=new H;f.kg=1;f.kh=1;B(f);},
Du=(a,b)=>{let c=new Uo();AFn(c,a,b);return c;},
B6=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.kO;a.kO=c;if(!a.kR){a.kR=1;a.oQ=a.oQ+1|0;}return d;}e=a.kM;f=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),a.kT));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.kQ;}}if(f>=0){e=a.kN.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.kN.data[f]=c;b=a.oQ+1|0;a.oQ=b;if(b>=a.tZ)APz(a,g.length<<1);return null;},
Hg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.kR)return null;a.kR=0;c=a.kO;a.kO=null;a.oQ=a.oQ-1|0;return c;}d=a.kM;e=Bd(X(b),D(2135587861, 2654435769));f=a.kT;g=Bm(Bg(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.kQ;}}if(g<0)return null;j=a.kN.data;k=j[g];l=a.kQ;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bm(Bg(Bd(X(n),D(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.oQ=a.oQ-1|0;return k;},
ATv=(a,b,c)=>{let d,e,f,g;a:{d=a.kN;if(b===null){if(a.kR&&a.kO===null)return 1;d=d.data;e=a.kM;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.kO)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.kR){g=a.kO;if(b===g?1:g instanceof FW&&g.nZ==b.nZ?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof FW&&g.nZ==b.nZ?1:0)return 1;f=f+(-1)|0;}}return 0;},
APz=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.kM.data.length;a.tZ=b*a.w0|0;d=b-1|0;a.kQ=d;d=Fy(X(d));a.kT=d;e=a.kM;f=a.kN;g=Ba(b);a.kM=g;h=R(C,b);a.kN=h;if(a.oQ>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bm(Bg(Bd(X(k),D(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.kQ;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function SE(){let a=this;C.call(a);a.n1=0;a.pi=null;a.qY=0;a.yI=0.0;a.uj=0;a.qz=0;a.pb=0;}
let ADk=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.yI=c;d=J1(b,c);a.uj=d*c|0;b=d-1|0;a.pb=b;a.qz=Fy(X(b));a.pi=Ba(d);return;}e=new Bj;f=new K;f.ke=G(16);E(f,f.kd,A(69));Gb(f,f.kd,c);g=new I;h=f.ke;i=h.data;d=f.kd;j=i.length;if(d>=0&&d<=(j-0|0)){g.kf=L(h.data,0,d);e.kg=1;e.kh=1;e.kj=g;B(e);}f=new H;f.kg=1;f.kh=1;B(f);},
Pi=(a,b)=>{let c=new SE();ADk(c,a,b);return c;},
ACx=(a,b)=>{let c,d,e,f;if(!b){if(a.qY)return 0;a.qY=1;a.n1=a.n1+1|0;return 1;}c=a.pi;d=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),a.qz));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.pb;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.n1+1|0;a.n1=b;if(b>=a.uj)ACH(a,e.length<<1);return 1;},
ARu=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.qY)return 0;a.qY=0;a.n1=a.n1-1|0;return 1;}c=a.pi;d=Bd(X(b),D(2135587861, 2654435769));e=a.qz;f=Bm(Bg(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.pb;}}if(f<0)return 0;h=a.pb;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bm(Bg(Bd(X(b),D(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.n1=a.n1-1|0;return 1;},
ACH=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.pi.data.length;a.uj=b*a.yI|0;d=b-1|0;a.pb=d;d=Fy(X(d));a.qz=d;e=a.pi;f=Ba(b);a.pi=f;if(a.n1>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bm(Bg(Bd(X(h),D(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.pb;}f[i]=h;}g=g+1|0;}}}};
let Vb=F(0);
function Mz(){C.call(this);this.sN=null;}
let Ya=a=>{let b;b=a.sN;b.s4=1;U2(Bz(b.u1));},
ACp=a=>{let b;b=a.sN;b.s4=1;U2(Bz(b.u1));},
XM=a=>{a.sN.s4=0;};
let Wt=F(0);
function WC(){let a=this;C.call(a);a.q8=null;a.vD=null;a.AJ=null;}
let JL=0;
let ARb=a=>{let b,c,d,e,f,g,h,i,$$je;b=AA7();a.q8=b;c=ALB(b);a.vD=c;b=new SN;d=a.q8;e=new Bh;e.kJ=0;e.km=R(C,16);b.kA=e;b.la=2147483647;b.zt=d;b.zF=c;a.AJ=b;b=Da.st;Gi(b);a:{try{S(b,a);D0(b);break a;}catch($$e){$$je=Bc($$e);d=$$je;}D0(b);B(d);}if(a.q8.state!=='running'?1:0){b=new KO;b.AG=a;ABp(a.q8,B$(b,"unlockFunction"));}else{if(!JL&&Da.p7>=2){if(BX===null){c=new C6;e=new Cu;Fb(e);e.l8=BN(32);Gv(c,e);c.l_=EF();c.l$=G(32);c.ma=0;c.mb=Co;BX=c;}c=new K;c.ke=G(16);Cd(c,c.kd,Cp(A(159)));Cd(c,c.kd,Cp(A(81)));Cd(c,
c.kd,Cp(A(160)));b=new I;f=c.ke;g=f.data;h=c.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);B2(Bz(b));B2("\n");}else{b=new H;b.kg=1;b.kh=1;B(b);}}JL=1;}},
ARy=()=>{let a=new WC();ARb(a);return a;},
APs=a=>{a.vD.disconnect(a.q8.destination);},
AKP=a=>{a.vD.connect(a.q8.destination);},
ABp=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
AA7=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
ALB=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function OP(){DX.call(this);this.y1=null;}
let U9=F(BH);
function CK(){Dx.call(this);this.kU=null;}
let H=F(BA);
let ABd=a=>{a.kg=1;a.kh=1;},
FQ=()=>{let a=new H();ABd(a);return a;},
R7=(a,b)=>{a.kg=1;a.kh=1;a.kj=b;},
Nx=a=>{let b=new H();R7(b,a);return b;};
let Fu=F(0);
let Qx=F(0);
let Se=F(0);
let R4=F(0);
let TC=F(0);
let Wp=F(0);
let Uz=F(0);
let P_=F(0);
let Li=F(0);
let Pa=F();
let AMd=(a,b)=>{b=a.S(b);BE();return b===null?null:b instanceof Ge()&&b instanceof E1?(b[Bt]===true?b:b.kW):b;},
APU=(a,b,c)=>{a.eR(W(b),DI(c,"handleEvent"));},
AO9=(a,b,c)=>{a.eS(W(b),DI(c,"handleEvent"));},
AL1=(a,b,c,d)=>{a.eT(W(b),DI(c,"handleEvent"),d?1:0);},
AR4=(a,b)=>{return !!a.eU(b);},
ABt=a=>{return a.eV();},
XL=(a,b,c,d)=>{a.eW(W(b),DI(c,"handleEvent"),d?1:0);};
let L9=F();
function Ke(){let a=this;L9.call(a);a.t5=0;a.pP=null;a.xn=0.0;a.uk=0;a.sm=0;a.rV=0;a.yK=0;}
let WQ=null,Rb=null;
let La=(a,b)=>{let c,d,e;a.rV=(-1);if(b<0){c=new Bj;c.kg=1;c.kh=1;B(c);}a.t5=0;if(!b)b=1;d=R(I6,b);e=d.data;a.pP=d;b=e.length;a.sm=b;a.xn=0.75;a.uk=b*0.75|0;},
AVX=a=>{let b=new Ke();La(b,a);return b;},
DJ=(a,b,c)=>{let d,e,f,g,h,i,j;Gi(a);try{if(b!==null&&c!==null){a:{if(!b.mc){d=0;while(true){if(d>=b.kf.length)break a;b.mc=(31*b.mc|0)+b.kf.charCodeAt(d)|0;d=d+1|0;}}}e=b.mc&2147483647;f=a.pP.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.xO;if(!b.mc){i=0;while(true){if(i>=b.kf.length)break b;b.mc=(31*b.mc|0)+b.kf.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.mc&&h.nv.cO(b)?1:0)break;h=h.tm;}if(h!==null){j=h.mX;h.mX=c;return j;}a.yK=a.yK+1|0;d=a.t5+1|0;a.t5=d;if(d>a.uk){AJE(a);g=e%a.pP.data.length|0;}if(g<a.sm)a.sm
=g;if(g>a.rV)a.rV=g;c:{j=new I6;j.nv=b;j.mX=c;if(!b.mc){d=0;while(true){if(d>=b.kf.length)break c;b.mc=(31*b.mc|0)+b.kf.charCodeAt(d)|0;d=d+1|0;}}}j.xO=b.mc;f=a.pP.data;j.tm=f[g];f[g]=j;return null;}b=new Ds;b.kg=1;b.kh=1;B(b);}finally{D0(a);}},
AJE=a=>{let b,c,d,e,f,g,h,i,j;b=(a.pP.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=R(I6,b);e=d.data;f=a.rV+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.sm)break;h=a.pP.data[f];while(h!==null){i=(h.nv.cU()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.tm;h.tm=e[i];e[i]=h;h=j;}}a.sm=g;a.rV=c;a.pP=d;a.uk=e.length*a.xn|0;},
AYg=()=>{WQ=new KL;Rb=new KK;};
function Ng(){Ke.call(this);this.Ay=null;}
let AGc=F();
let G8=F(BF);
let J$=null,JS=null,L4=null,SZ=null,ANK=null;
let AJO=()=>{let b,c,d,e;b=new G8;b.kx=A(161);b.kq=0;J$=b;c=new G8;c.kx=A(162);c.kq=1;JS=c;d=new G8;d.kx=A(157);d.kq=2;L4=d;e=new G8;e.kx=A(163);e.kq=3;SZ=e;ANK=V(G8,[b,c,d,e]);};
let DZ=F();
let ADe=F(DZ);
let ACr=F(DZ);
let AHX=F(DZ);
let ALb=F(DZ);
let AGv=F(DZ);
function LP(){C.call(this);this.Ak=null;}
let AHp=(a,b)=>{b.preventDefault();};
function LQ(){C.call(this);this.AZ=null;}
let AS3=(a,b)=>{b.preventDefault();};
function LO(){let a=this;C.call(a);a.wk=null;a.wb=null;a.wA=null;}
let AKt=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Bh;e.kJ=1;e.km=R(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=W(g.name);i=Ff(h,46,h.kf.length-1|0);b=i==(-1)?A(68):Ck(h,i+1|0,h.kf.length);j=b.kf.toLowerCase();if(j!==b.kf)b=T9(j);if(AAB(b))j=F3;else{if(b===A(164))k=1;else if(!(A(164) instanceof I))k=0;else{j=A(164);k=b.kf!==j.kf?0:1;}b:{if(!k){if(b===A(165))k=1;else if(!(A(165) instanceof I))k=0;else{j=A(165);k=b.kf!==j.kf?0:1;}if(!k){if(b===A(166))k
=1;else if(!(A(166) instanceof I))k=0;else{j=A(166);k=b.kf!==j.kf?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?FI:!AGL(b)?FR:Ga;}l=new FileReader();b=new M1;b.tq=a;b.uB=j;b.vZ=h;b.sC=e;b.v3=d;l.addEventListener("load",B$(b,"handleEvent"));if(j!==FR&&j!==FI){if(j===F3)l.readAsDataURL(g);else if(j===Ga)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AM8=(a,b)=>{AKt(a,b);};
function SN(){let a=this;Dx.call(a);a.zt=null;a.zF=null;}
let Vj=F(0);
function KO(){C.call(this);this.AG=null;}
let ADy=a=>{let b,c,d,e,f,g;if(!JL&&Da.p7>=2){if(BX===null){b=new C6;V1(b,AQK(32),0);BX=b;}b=new K;b.ke=G(16);Eu(b,b.kd,A(159));Eu(b,b.kd,A(81));Eu(b,b.kd,A(160));c=new I;d=b.ke;e=d.data;f=b.kd;g=e.length;if(f>=0&&f<=(g-0|0)){c.kf=L(d.data,0,f);B2(Bz(c));B2("\n");}else B(FQ());}JL=1;};
let ACb=F(DZ);
function RY(){let a=this;C.call(a);a.lm=null;a.mA=0;a.up=null;a.wi=0;a.q1=0;a.pl=0;a.m0=0;a.xr=null;}
let KT=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K5;d.mg=R(C,10);e=Q9(a,b);f=0;g=0;if(!b.kf.length){h=R(I,1);h.data[0]=A(68);return h;}a:{while(true){if(!Rt(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.oK;if(!j.pf){b=new BO;b.kg=1;b.kh=1;Bl(b);B(b);}if(0>=j.qv){b=new H;d=new K;Bu(d);d.ke=G(16);J(d,d.kd,0,10);e=new I;h=d.ke;k=h.data;f=d.kd;g=k.length;if(f>=0&&f<=(g-0|0)){e.kf=L(h.data,0,f);b.kg=1;b.kh=1;b.kj=e;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}j=Ck(b,g,j.mh.data[0]);Hw(d,d.ls+1|0);h=d.mg.data;f=d.ls;d.ls=f+1|0;h[f]
=j;d.m9=d.m9+1|0;j=e.oK;if(!j.pf)break;if(0>=j.qv){b=new H;d=new K;Bu(d);d.ke=G(16);J(d,d.kd,0,10);e=new I;h=d.ke;k=h.data;f=d.kd;g=k.length;if(f>=0&&f<=(g-0|0)){e.kf=L(h.data,0,f);b.kg=1;b.kh=1;b.kj=e;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}g=j.mh.data[1];f=i;}b=new BO;b.kg=1;b.kh=1;Bl(b);B(b);}b:{b=Ck(b,g,b.kf.length);Hw(d,d.ls+1|0);h=d.mg.data;i=d.ls;d.ls=i+1|0;h[i]=b;d.m9=d.m9+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.ls)break;if(d.mg.data[f].kf.length)break b;UW(d,f);}b=new H;b.kg
=1;b.kh=1;B(b);}}if(f<0)f=0;return ADM(d,R(I,f));},
I_=(b,c)=>{let d;if(b===null){b=new Ds;b.kg=1;b.kh=1;b.kj=A(167);B(b);}if(c&&(c|255)!=255){b=new Bj;b.kg=1;b.kh=1;b.kj=A(68);B(b);}O=1;d=new RY;d.up=R(DG,10);d.q1=(-1);d.pl=(-1);d.m0=(-1);return AEA(d,b,c);},
AEA=(a,b,c)=>{let d,e,f;a.lm=AD$(b,c);a.mA=c;b=WI(a,(-1),c,null);a.xr=b;d=a.lm;if(!d.l1&&!d.kE&&d.kB==d.mI&&!(d.lw===null?0:1)?1:0){if(a.wi)b.e5();return a;}b=new Cn;e=d.lV;f=d.nE;b.kg=1;b.kh=1;b.k2=(-1);b.l0=A(68);b.lU=e;b.k2=f;B(b);},
ASq=(a,b)=>{let c,d,e,f,g,h;c=new CQ;d=a.mA;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Bn;g.ky=Ba(64);c.kC=g;g=new Bn;g.ky=Ba(2);c.kF=g;c.td=e;c.t8=f;while(true){h=a.lm;d=h.l1;if(!d&&!h.kE&&h.kB==h.mI&&!(h.lw===null?0:1)?1:0)break;f=!d&&!h.kE&&h.kB==h.mI&&!(h.lw===null?0:1)?1:0;if(!(!f&&!(h.lw===null?0:1)&&(d<0?0:1)?1:0))break;f=h.kE;if(f&&f!=(-536870788)&&f!=(-536870871))break;By(h);Dg(c,h.pa);g=a.lm;if(g.l1!=(-536870788))continue;By(g);}g=Mr(a,c);g.e9(b);return g;},
WI=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new K5;e.mg=R(C,10);f=a.mA;g=0;if(c!=f)a.mA=c;a:{switch(b){case -1073741784:h=new Sv;i=a.m0+1|0;a.m0=i;Ef();c=O;O=c+1|0;d=new Be;d.ke=G(20);h.kz=(J(d,d.kd,c,10)).T();h.mn=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QP;i=a.m0+1|0;a.m0=i;Ef();c=O;O=c+1|0;d=new Be;d.ke=G(20);h.kz=(J(d,d.kd,c,10)).T();h.mn=i;break a;case -33554392:h=new Td;i=a.m0+1|0;a.m0=i;Ef();c=O;O=c+1|0;d=new Be;d.ke=G(20);h.kz=(J(d,d.kd,c,10)).T();h.mn=i;break a;default:i
=a.q1+1|0;a.q1=i;if(d!==null){h=new DG;Ef();c=O;O=c+1|0;d=new Be;d.ke=G(20);h.kz=(J(d,d.kd,c,10)).T();h.mn=i;}else{h=new G3;Ef();j=O;O=j+1|0;d=new Be;d.ke=G(20);h.kz=(J(d,d.kd,j,10)).T();h.mn=0;g=1;}c=a.q1;if(c<=(-1))break a;if(c>=10)break a;a.up.data[c]=h;break a;}h=new WD;Ef();j=O;O=j+1|0;d=new Be;d.ke=G(20);h.kz=(J(d,d.kd,j,10)).T();h.mn=(-1);}while(true){k=a.lm;l=k.l1;j=!l&&!k.kE&&k.kB==k.mI&&!(k.lw===null?0:1)?1:0;j=!j&&!(k.lw===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.kE==(-536870788))k=ASq(a,h);else if(l==(-536870788))
{k=new FF;j=O;O=j+1|0;d=new Be;d.ke=G(20);k.kz=(J(d,d.kd,j,10)).T();k.kr=h;k.k7=1;k.lL=1;k.k7=0;By(a.lm);}else{k=Ql(a,h);d=a.lm;if(d.l1==(-536870788))By(d);}if(k!==null){Hw(e,e.ls+1|0);m=e.mg.data;l=e.ls;e.ls=l+1|0;m[l]=k;e.m9=e.m9+1|0;}k=a.lm;j=k.l1;if(!j&&!k.kE&&k.kB==k.mI&&!(k.lw===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.pa==(-536870788)){k=new FF;c=O;O=c+1|0;d=new Be;d.ke=G(20);k.kz=(J(d,d.kd,c,10)).T();k.kr=h;k.k7=1;k.lL=1;k.k7=0;Hw(e,e.ls+1|0);m=e.mg.data;j=e.ls;e.ls=j+1|0;m[j]=k;e.m9=e.m9+
1|0;}if(a.mA!=f&&!g){a.mA=f;k=a.lm;k.lQ=f;k.kE=k.l1;k.oG=k.lw;j=k.nE;k.kB=j+1|0;k.rN=j;By(k);}switch(b){case -1073741784:break;case -536870872:d=new OA;b=O;O=b+1|0;k=new Be;Bu(k);k.ke=G(20);d.kz=(J(k,k.kd,b,10)).T();d.l4=e;d.m3=h;d.lP=h.mn;return d;case -268435416:d=new VC;b=O;O=b+1|0;k=new Be;Bu(k);k.ke=G(20);d.kz=(J(k,k.kd,b,10)).T();d.l4=e;d.m3=h;d.lP=h.mn;return d;case -134217688:d=new R2;b=O;O=b+1|0;k=new Be;Bu(k);k.ke=G(20);d.kz=(J(k,k.kd,b,10)).T();d.l4=e;d.m3=h;d.lP=h.mn;return d;case -67108824:k=new TA;b
=O;O=b+1|0;d=new Be;Bu(d);d.ke=G(20);k.kz=(J(d,d.kd,b,10)).T();k.l4=e;k.m3=h;k.lP=h.mn;return k;case -33554392:d=new EG;b=O;O=b+1|0;k=new Be;k.ke=G(20);d.kz=(J(k,k.kd,b,10)).T();d.l4=e;d.m3=h;d.lP=h.mn;return d;default:c=e.ls;switch(c){case 0:d=new FF;b=O;O=b+1|0;e=new Be;e.ke=G(20);d.kz=(J(e,e.kd,b,10)).T();d.kr=h;d.k7=1;d.lL=1;d.k7=0;return d;case 1:d=new GQ;if(0>=c){d=new H;d.kg=1;d.kh=1;B(d);}e=e.mg.data[0];b=O;O=b+1|0;k=new Be;k.ke=G(20);d.kz=(J(k,k.kd,b,10)).T();d.nr=e;d.m3=h;d.lP=h.mn;return d;default:}d
=new Cr;b=O;O=b+1|0;k=new Be;k.ke=G(20);d.kz=(J(k,k.kd,b,10)).T();d.l4=e;d.m3=h;d.lP=h.mn;return d;}k=new Kn;j=O;O=j+1|0;d=new Be;d.ke=G(20);k.kz=(J(d,d.kd,j,10)).T();k.l4=e;k.m3=h;k.lP=h.mn;return k;},
AOH=a=>{let b,c,d,e,f,g,h,i,j,k;b=new PE;b.ke=G(16);while(true){c=a.lm;d=c.l1;if(!d&&!c.kE&&c.kB==c.mI&&!(c.lw===null?0:1)?1:0)break;e=!d&&!c.kE&&c.kB==c.mI&&!(c.lw===null?0:1)?1:0;if(!(!e&&!(c.lw===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.oG;d=f===null?0:1;if(!(!d&&!c.kE)){d=f===null?0:1;if(!(!d&&(c.kE<0?0:1))){g=c.kE;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}By(c);e=c.pa;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.kd;Bk(b,e,e+1|0);b.ke.data[e]=d;}else{h=(Fq(e)).data;d=0;e=h.length;g=b.kd;Bk(b,g,g+e|0);i=e+d|0;while(d<i){j=b.ke.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.mA;if(!((e&2)!=2?0:1))return AG8(b);if(!((e&64)!=64?0:1)){c=new O4;d=O;O=d+1|0;f=new Be;f.ke=G(20);c.kz=(J(f,f.kd,d,10)).T();c.k7=1;f=new I;h=b.ke;j=h.data;e=b.kd;g=j.length;if(e>=0&&e<=(g-0|0)){f.kf=L(h.data,0,e);c.qO=f;c.k7=b.kd;return c;}b=new H;b.kg=1;b.kh=1;B(b);}c=new Ou;d=O;O=d+1|0;f=new Be;f.ke=G(20);c.kz=(J(f,f.kd,d,10)).T();c.k7
=1;f=new K;f.ke=G(16);e=0;while(true){d=BW(e,b.kd);if(d>=0){b=new I;h=f.ke;j=h.data;g=f.kd;d=j.length;if(g>=0&&g<=(d-0|0)){b.kf=L(h.data,0,g);c.rW=b;c.k7=f.kd;return c;}b=new H;b.kg=1;b.kh=1;B(b);}if(e<0)break;if(d>=0)break;d=b.ke.data[e];if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}d=CD(B0,d)&65535;if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}i=CD(B1,d)&65535;g=f.kd;Bk(f,g,g+1|0);f.ke.data[g]=i;e=e+1|0;}b=new H;b.kg=1;b.kh=1;B(b);},
AO2=a=>{let b,c,d,e,f,g,h,i,j;b=Ba(4);c=(-1);d=(-1);e=a.lm;f=e.l1;if(!(!f&&!e.kE&&e.kB==e.mI&&!(e.lw===null?0:1)?1:0)){g=!f&&!e.kE&&e.kB==e.mI&&!(e.lw===null?0:1)?1:0;if(!g&&!(e.lw===null?0:1)&&(f<0?0:1)?1:0){h=b.data;By(e);c=e.pa;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.lm;i=e.l1;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;By(e);e=a.lm;i=e.l1;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;By(e);e=new IX;c=O;O=c+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,c,10)).T();e.o3=h;e.r8=3;return e;}e=new IX;c
=O;O=c+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,c,10)).T();e.o3=h;e.r8=2;return e;}i=a.mA;if(!((i&2)!=2?0:1)){e=new Es;i=b[0];c=O;O=c+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,c,10)).T();e.k7=1;e.mT=i;return e;}if(!((i&64)!=64?0:1)){e=new Kz;i=b[0];c=O;O=c+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,c,10)).T();e.k7=1;e.tH=i;e.uc=GD(i);return e;}e=new NS;i=b[0];c=O;O=c+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,c,10)).T();e.k7=1;if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}i=CD(B0,i)&65535;if
(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}e.sr=CD(B1,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.lm;g=e.l1;if(!g&&!e.kE&&e.kB==e.mI&&!(e.lw===null?0:1)?1:0)break;i=!g&&!e.kE&&e.kB==e.mI&&!(e.lw===null?0:1)?1:0;if(!(!i&&!(e.lw===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;By(e);h[c]=e.pa;c=i;}if(c==1){i=h[0];if(!(AAn.es(i)==APj?0:1))return WA(a,h[0]);}d=a.mA;if(!((d&2)!=2?0:1)){e=new FU;i=O;O=i+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,i,10)).T();e.pZ=1;e.pJ=b;e.pF=c;return e;}if
((d&64)!=64?0:1){e=new Wu;i=O;O=i+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,i,10)).T();e.pZ=1;e.pJ=b;e.pF=c;return e;}e=new TZ;i=O;O=i+1|0;j=new Be;j.ke=G(20);e.kz=(J(j,j.kd,i,10)).T();e.pZ=1;e.pJ=b;e.pF=c;return e;},
Ql=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.lm;d=c.l1;e=!d&&!c.kE&&c.kB==c.mI&&!(c.lw===null?0:1)?1:0;e=!e&&!(c.lw===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.oG===null?0:1)&&(c.kE<0?0:1)){if(!((a.mA&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AOH(a):NW(a,b,Ws(a,b));}else{f=AO2(a);g=a.lm;e=g.l1;if(!(!e&&!g.kE&&g.kB==g.mI&&!(g.lw===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof G3))&&e!=(-536870788)){h=!e&&!g.kE&&g.kB==g.mI&&!(g.lw===null?0:1)?1:0;if(!(!h&&!(g.lw===null?0:1)&&(e<0?0:1)?1:0))f
=NW(a,b,f);}}}else if(d!=(-536870871))f=NW(a,b,Ws(a,b));else{if(b instanceof G3){b=new Cn;g=c.lV;h=c.nE;b.kg=1;b.kh=1;b.k2=(-1);b.l0=A(68);b.lU=g;b.k2=h;B(b);}f=new FF;e=O;O=e+1|0;c=new Be;c.ke=G(20);f.kz=(J(c,c.kd,e,10)).T();f.kr=b;f.k7=1;f.lL=1;f.k7=0;}c=a.lm;d=c.l1;e=!d&&!c.kE&&c.kB==c.mI&&!(c.lw===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof G3))&&d!=(-536870788)){g=Ql(a,b);if(f instanceof DR&&!(f instanceof FP)&&!(f instanceof DT)&&!(f instanceof FM)){b=f;if(!g.fn(b.kZ)){f=new VP;c=b.kZ;i=b.kr;j
=b.lL;e=O;O=e+1|0;b=new Be;b.ke=G(20);f.kz=(J(b,b.kd,e,10)).T();f.kr=i;f.kZ=c;f.lL=j;f.lu=c;c.e9(f);}}if((g.fo()&65535)!=43)f.e9(g);else f.e9(g.kZ);}else{if(f===null)return null;f.e9(b);}if((f.fo()&65535)!=43)return f;return f.kZ;},
NW=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.lm;e=d.l1;if(c!==null&&!(c instanceof CF)){switch(e){case -2147483606:By(d);d=new W1;f=O;O=f+1|0;g=new Be;g.ke=G(20);d.kz=(J(g,g.kd,f,10)).T();d.kr=b;d.kZ=c;d.lL=e;Ef();c.e9(Ip);return d;case -2147483605:By(d);d=new QL;h=O;O=h+1|0;g=new Be;g.ke=G(20);d.kz=(J(g,g.kd,h,10)).T();d.kr=b;d.kZ=c;d.lL=(-2147483606);Ef();c.e9(Ip);return d;case -2147483585:By(d);d=new Qu;h=O;O=h+1|0;g=new Be;Bu(g);g.ke=G(20);d.kz=(J(g,g.kd,h,10)).T();d.kr=b;d.kZ=c;d.lL=(-536870849);Ef();c.e9(Ip);return d;case -2147483525:g
=new O1;i=d.lw;By(d);d=i;f=a.pl+1|0;a.pl=f;j=O;O=j+1|0;i=new Be;Bu(i);i.ke=G(20);g.kz=(J(i,i.kd,j,10)).T();g.kr=b;g.kZ=c;g.lL=(-536870849);g.oC=d;g.nM=f;Ef();c.e9(Ip);return g;case -1073741782:case -1073741781:By(d);d=new Sl;f=O;O=f+1|0;g=new Be;g.ke=G(20);d.kz=(J(g,g.kd,f,10)).T();d.kr=b;d.kZ=c;d.lL=e;c.e9(d);return d;case -1073741761:By(d);d=new Ru;h=O;O=h+1|0;g=new Be;Bu(g);g.ke=G(20);d.kz=(J(g,g.kd,h,10)).T();d.kr=b;d.kZ=c;d.lL=(-536870849);c.e9(b);return d;case -1073741701:g=new UE;i=d.lw;By(d);d=i;h=a.pl
+1|0;a.pl=h;j=O;O=j+1|0;i=new Be;Bu(i);i.ke=G(20);g.kz=(J(i,i.kd,j,10)).T();g.kr=b;g.kZ=c;g.lL=(-536870849);g.oC=d;g.nM=h;c.e9(g);return g;case -536870870:case -536870869:By(d);if(c.fo()!=(-2147483602)){d=new DT;f=O;O=f+1|0;g=new Be;g.ke=G(20);d.kz=(J(g,g.kd,f,10)).T();d.kr=b;d.kZ=c;d.lL=e;}else{h=a.mA;if((h&32)!=32?0:1){d=new Sm;f=O;O=f+1|0;g=new Be;g.ke=G(20);d.kz=(J(g,g.kd,f,10)).T();d.kr=b;d.kZ=c;d.lL=e;}else{d=new PO;if(!(h&1)){g=GE;if(g===null){g=new JZ;GE=g;}}else{g=GS;if(g===null){g=new JY;GS=g;}}f=
O;O=f+1|0;i=new Be;i.ke=G(20);d.kz=(J(i,i.kd,f,10)).T();d.kr=b;d.kZ=c;d.lL=e;d.sV=g;}}c.e9(d);return d;case -536870849:By(d);d=new Hk;h=O;O=h+1|0;g=new Be;g.ke=G(20);d.kz=(J(g,g.kd,h,10)).T();d.kr=b;d.kZ=c;d.lL=(-536870849);c.e9(b);return d;case -536870789:g=new GG;i=d.lw;By(d);d=i;h=a.pl+1|0;a.pl=h;j=O;O=j+1|0;i=new Be;i.ke=G(20);g.kz=(J(i,i.kd,j,10)).T();g.kr=b;g.kZ=c;g.lL=(-536870849);g.oC=d;g.nM=h;c.e9(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:By(d);d
=new W3;f=O;O=f+1|0;c=new Be;c.ke=G(20);d.kz=(J(c,c.kd,f,10)).T();d.kr=b;d.kZ=i;d.lL=e;d.lu=i;i.kr=d;return d;case -2147483585:By(d);c=new VK;h=O;O=h+1|0;d=new Be;Bu(d);d.ke=G(20);c.kz=(J(d,d.kd,h,10)).T();c.kr=b;c.kZ=i;c.lL=(-2147483585);c.lu=i;return c;case -2147483525:c=new Qk;g=d.lw;By(d);d=g;h=O;O=h+1|0;g=new Be;Bu(g);g.ke=G(20);c.kz=(J(g,g.kd,h,10)).T();c.kr=b;c.kZ=i;c.lL=(-2147483525);c.lu=i;c.p$=d;return c;case -1073741782:case -1073741781:By(d);d=new Rm;f=O;O=f+1|0;c=new Be;c.ke=G(20);d.kz=(J(c,c.kd,
f,10)).T();d.kr=b;d.kZ=i;d.lL=e;d.lu=i;i.kr=d;return d;case -1073741761:By(d);c=new T3;h=O;O=h+1|0;d=new Be;Bu(d);d.ke=G(20);c.kz=(J(d,d.kd,h,10)).T();c.kr=b;c.kZ=i;c.lL=(-1073741761);c.lu=i;return c;case -1073741701:c=new R3;g=d.lw;By(d);d=g;h=O;O=h+1|0;g=new Be;Bu(g);g.ke=G(20);c.kz=(J(g,g.kd,h,10)).T();c.kr=b;c.kZ=i;c.lL=(-1073741701);c.lu=i;c.p$=d;return c;case -536870870:case -536870869:By(d);d=new DR;f=O;O=f+1|0;c=new Be;c.ke=G(20);d.kz=(J(c,c.kd,f,10)).T();d.kr=b;d.kZ=i;d.lL=e;d.lu=i;i.kr=d;return d;case -536870849:By(d);c
=new FM;h=O;O=h+1|0;d=new Be;d.ke=G(20);c.kz=(J(d,d.kd,h,10)).T();c.kr=b;c.kZ=i;c.lL=(-536870849);c.lu=i;return c;case -536870789:c=new FP;g=d.lw;By(d);d=g;h=O;O=h+1|0;g=new Be;g.ke=G(20);c.kz=(J(g,g.kd,h,10)).T();c.kr=b;c.kZ=i;c.lL=(-536870789);c.lu=i;c.p$=d;return c;default:}return c;},
Ws=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof G3;while(true){a:{e=a.lm;f=e.l1;if((f&(-2147418113))==(-2147483608)){By(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.mA=g;else{if(f!=(-1073741784))g=a.mA;c=WI(a,f,g,b);e=a.lm;if(e.l1!=(-536870871)){b=new Cn;h=e.lV;i=e.nE;b.kg=1;b.kh=1;b.k2=(-1);b.l0=A(68);b.lU=h;b.k2=i;B(b);}By(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.q1<j){c=new Cn;h=e.lV;i=e.nE;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=h;c.k2=i;B(c);}By(e);g=a.m0+1|0;a.m0=g;i=a.mA;if(!((i&2)!=2?0:1)){c=new VT;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.rt=j;c.qd=g;}else if(!((i&64)!=64?0:1)){c=new Hb;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.rt=j;c.qd=g;}else{c=new RV;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.rt=j;c.qd=g;}a.up.data[j].um=1;a.wi=1;break a;case -2147483583:break;case -2147483582:By(e);c
=new Lw;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.vF=0;break a;case -2147483577:By(e);c=new PI;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();break a;case -2147483558:By(e);c=new NQ;j=a.m0+1|0;a.m0=j;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.qI=j;break a;case -2147483550:By(e);c=new Lw;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.vF=1;break a;case -2147483526:By(e);c=new VZ;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();break a;case -536870876:break b;case -536870866:By(e);i
=a.mA;if((i&32)!=32?0:1){c=new VV;i=O;O=i+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,i,10)).T();break a;}c=new Qe;if(!(i&1)){h=GE;if(h===null){h=new JZ;GE=h;}}else{h=GS;if(h===null){h=new JY;GS=h;}}k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.uW=h;break a;case -536870821:By(e);i=0;c=a.lm;if(c.l1==(-536870818)){i=1;By(c);}c=Mr(a,Hy(a,i));c.e9(b);h=a.lm;k=h.l1;if(k!=(-536870819)){b=new Cn;e=h.lV;i=h.nE;b.kg=1;b.kh=1;b.k2=(-1);b.l0=A(68);b.lU=e;b.k2=i;B(b);}h.oJ=1;h.kE=k;h.oG=h.lw;h.kB=h.rN;h.rN=h.nE;By(h);By(a.lm);break a;case -536870818:break c;case 0:c
=e.lw;h=c;if(h!==null)c=Mr(a,h);else{if(!f&&!e.kE&&e.kB==e.mI&&!(c===null?0:1)?1:0){c=new FF;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.kr=b;c.k7=1;c.lL=1;c.k7=0;break a;}c=new Es;j=f&65535;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.k7=1;c.mT=j;}By(a.lm);break a;default:if(f>=0&&!(e.lw===null?0:1)){c=WA(a,f);By(a.lm);break a;}if(f==(-536870788)){c=new FF;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.kr=b;c.k7=1;c.lL=1;c.k7=0;break a;}if(f!=(-536870871)){b=new Cn;c
=e.lw;if(c===null?0:1)c=c.T();else{k=f&65535;c=new I;l=G(1);m=l.data;m[0]=k;c.kf=L(l.data,0,m.length);}e=a.lm;h=e.lV;i=e.nE;b.kg=1;b.kh=1;b.k2=(-1);b.l0=c;b.lU=h;b.k2=i;B(b);}if(d){b=new Cn;h=e.lV;i=e.nE;b.kg=1;b.kh=1;b.k2=(-1);b.l0=A(68);b.lU=h;b.k2=i;B(b);}c=new FF;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.kr=b;c.k7=1;c.lL=1;c.k7=0;break a;}By(e);c=new L8;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();break a;}By(e);a.m0=a.m0+1|0;i=a.mA;if(!((i&8)!=8?0:1)){c=new L8;k=O;O=k+1|0;e
=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();break a;}c=new O8;if(!(i&1)){h=GE;if(h===null){h=new JZ;GE=h;}}else{h=GS;if(h===null){h=new JY;GS=h;}}k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.xk=h;break a;}By(e);j=a.m0+1|0;a.m0=j;i=a.mA;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new Tg;i=O;O=i+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,i,10)).T();c.tf=j;}else{c=new Ox;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.rc=j;}}else if((i&1)!=1?0:1){c=new VL;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,
e.kd,k,10)).T();c.s7=j;}else{c=new NQ;k=O;O=k+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,k,10)).T();c.qI=j;}}}if(f!=(-16777176))break;}return c;},
Hy=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new CQ;d=a.mA;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Bn;f.ky=Ba(64);c.kC=f;f=new Bn;f.ky=Ba(2);c.kF=f;c.td=e;c.t8=d;E7(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.lm;b=k.l1;if(!b&&!k.kE&&k.kB==k.mI&&!(k.lw===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)Dg(c,g);f=a.lm;By(f);g=f.pa;f=a.lm;if(f.l1!=(-536870874)){g=38;break d;}if(f.kE==(-536870821)){By(f);h=1;g=(-1);break d;}By(f);if(j){c=Hy(a,0);break d;}if(a.lm.l1
==(-536870819))break d;V6(c,Hy(a,0));break d;case -536870867:if(!j){b=k.kE;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){By(k);k=a.lm;d=k.l1;if(k.lw===null?0:1)break c;if(d<0){b=k.kE;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(AGd(d))break e;d=d&65535;break e;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){break b;}else{throw $$e;}}}try{BU(c,g,d);}catch($$e){$$je=Bc($$e);if($$je instanceof BH){break b;}else{throw $$e;}}By(a.lm);g=(-1);break d;}}if(g>=0)Dg(c,g);g=45;By(a.lm);break d;case -536870821:if
(g>=0){Dg(c,g);g=(-1);}By(a.lm);e=0;f=a.lm;if(f.l1==(-536870818)){By(f);e=1;}if(!h)Xz(c,Hy(a,e));else V6(c,Hy(a,e));h=0;By(a.lm);break d;case -536870819:break;case -536870818:if(g>=0)Dg(c,g);g=94;By(a.lm);break d;case 0:if(g>=0)Dg(c,g);f=a.lm.lw;if(f===null)g=0;else{AUh(c,f);g=(-1);}By(a.lm);break d;default:if(g>=0)Dg(c,g);f=a.lm;By(f);g=f.pa;break d;}if(g>=0)Dg(c,g);g=93;By(a.lm);}j=0;}c=new Cn;l=k.lV;g=k.nE;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=l;c.k2=g;B(c);}c=new Cn;k=a.lm;l=k.lV;g=k.nE;c.kg=1;c.kh=1;c.k2
=(-1);c.l0=A(68);c.lU=l;c.k2=g;B(c);}if(!i){if(g>=0)Dg(c,g);return c;}c=new Cn;l=k.lV;b=k.nE-1|0;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=l;c.k2=b;B(c);},
WA=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.mA;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Kz;b=b&65535;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.k7=1;e.tH=b;e.uc=GD(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Os;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.k7=1;e.k7=2;if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b);if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null
?W(BL.value):null)));}e.uR=CD(B1,b);return e;}if(b<=57343&&b>=56320?1:0){e=new H6;b=b&65535;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.pm=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Ia;b=b&65535;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.o$=b;return e;}e=new NS;b=b&65535;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.k7=1;if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b)&65535;if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value
!==null?W(BL.value):null)));}e.sr=CD(B1,b)&65535;return e;}}if(c){e=new EL;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.k7=1;e.k7=2;e.qq=b;h=(Fq(b)).data;e.qh=h[0];e.pR=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new H6;b=b&65535;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.pm=b;return e;}if(b<=56319&&b>=55296?1:0){e=new Ia;b=b&65535;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.o$=b;return e;}e=new Es;b=b&65535;f=O;O=f+1|0;g=new Be;g.ke=G(20);e.kz=(J(g,g.kd,f,10)).T();e.k7
=1;e.mT=b;return e;},
Mr=(a,b)=>{let c,d,e,f,g,h;if(!AJY(b)){if(b.lB){if(!b.fx()){c=new D6;d=O;O=d+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,d,10)).T();c.m4=b.fy();c.qP=b.kY;return c;}c=new KC;d=O;O=d+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,d,10)).T();c.m4=b.fy();c.qP=b.kY;return c;}if(b.fx()){c=new Lb;d=O;O=d+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,d,10)).T();c.k7=1;c.s1=b.fy();c.uL=b.kY;return c;}c=new Ev;d=O;O=d+1|0;e=new Be;e.ke=G(20);c.kz=(J(e,e.kd,d,10)).T();c.k7=1;c.nR=b.fy();c.vf=b.kY;return c;}c=ZE(b);e=new OG;d=O;O=d+1|0;f=
new Be;f.ke=G(20);e.kz=(J(f,f.kd,d,10)).T();e.sW=c;e.tY=c.kY;if(b.lB){if(!b.fx()){c=new HL;f=new D6;b=IV(b);d=O;O=d+1|0;g=new Be;g.ke=G(20);f.kz=(J(g,g.kd,d,10)).T();f.m4=b;f.qP=b.kY;d=O;O=d+1|0;b=new Be;b.ke=G(20);c.kz=(J(b,b.kd,d,10)).T();c.qa=f;c.p3=e;return c;}c=new HL;f=new KC;g=IV(b);h=O;O=h+1|0;b=new Be;b.ke=G(20);f.kz=(J(b,b.kd,h,10)).T();f.m4=g;f.qP=g.kY;d=O;O=d+1|0;b=new Be;b.ke=G(20);c.kz=(J(b,b.kd,d,10)).T();c.qa=f;c.p3=e;return c;}if(b.fx()){c=new HL;f=new Lb;b=IV(b);d=O;O=d+1|0;g=new Be;g.ke=G(20);f.kz
=(J(g,g.kd,d,10)).T();f.k7=1;f.s1=b;f.uL=b.kY;d=O;O=d+1|0;b=new Be;b.ke=G(20);c.kz=(J(b,b.kd,d,10)).T();c.qa=f;c.p3=e;return c;}c=new HL;f=new Ev;b=IV(b);d=O;O=d+1|0;g=new Be;g.ke=G(20);f.kz=(J(g,g.kd,d,10)).T();f.k7=1;f.nR=b;f.vf=b.kY;d=O;O=d+1|0;b=new Be;b.ke=G(20);c.kz=(J(b,b.kd,d,10)).T();c.qa=f;c.p3=e;return c;},
GD=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let NM=F(0);
function S5(){let a=this;C.call(a);a.zx=null;a.yj=null;a.s6=null;a.oK=null;a.sT=0;a.uA=0;}
let OB=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.s6.kf.length;if(b>=0&&b<=c){d=a.oK;d.pf=0;d.sa=2;e=d.mh.data;f=0;g=e.length;if(f>g){d=new Bj;U(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.lM.data;f=0;g=e.length;if(f>g){d=new Bj;U(d);B(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.oT=d.nh;d.sa=1;d.oT=b;c=d.se;if(c<0)c=b;d.se=c;b=a.yj.fB(b,a.s6,d);if(b==(-1))a.oK.m7=1;if(b>=0){d=a.oK;b=d.pf;if(b){e=d.mh.data;if(e[0]==(-1)){f=d.oT;e[0]=f;e[1]=f;}if(!b){d=new BO;d.kg=1;d.kh=1;Bl(d);B(d);}if(0<d.qv){d.se=e[1];return 1;}d=new H;i
=new K;Bu(i);i.ke=G(16);J(i,i.kd,0,10);j=new I;e=i.ke;k=e.data;c=i.kd;f=k.length;if(c>=0&&c<=(f-0|0)){j.kf=L(e.data,0,c);d.kg=1;d.kh=1;d.kj=j;B(d);}d=new H;d.kg=1;d.kh=1;B(d);}}a.oK.oT=(-1);return 0;}d=new H;i=new K;i.ke=G(16);J(i,i.kd,b,10);j=new I;e=i.ke;k=e.data;c=i.kd;f=k.length;if(c>=0&&c<=(f-0|0)){j.kf=L(e.data,0,c);d.kg=1;d.kh=1;d.kj=j;B(d);}d=new H;d.kg=1;d.kh=1;B(d);},
Rt=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.s6.kf.length;c=a.oK;if(!c.tb)b=a.uA;if(c.oT>=0&&c.sa==1){d=c.pf;if(!d){c=new BO;c.kg=1;c.kh=1;B(c);}e=BW(0,c.qv);if(e>=0){c=new H;f=new K;f.ke=G(16);J(f,f.kd,0,10);g=new I;h=f.ke;i=h.data;b=f.kd;j=i.length;if(b>=0&&b<=(j-0|0)){g.kf=L(h.data,0,b);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}h=c.mh.data;k=h[1];c.oT=k;if(!d){c=new BO;c.kg=1;c.kh=1;B(c);}if(e>=0){c=new H;f=new K;f.ke=G(16);J(f,f.kd,0,10);g=new I;h=f.ke;i=h.data;b=f.kd;j=i.length;if(b>=0&&b<=(j-0|0))
{g.kf=L(h.data,0,b);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}j=h[1];if(!d){c=new BO;c.kg=1;c.kh=1;B(c);}if(e<0){if(j==h[0])c.oT=k+1|0;l=c.oT;return l<=b&&OB(a,l)?1:0;}c=new H;f=new K;f.ke=G(16);J(f,f.kd,0,10);g=new I;h=f.ke;i=h.data;b=f.kd;j=i.length;if(b>=0&&b<=(j-0|0)){g.kf=L(h.data,0,b);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}return OB(a,a.sT);},
Xg=(a,b,c)=>{let d,e;a.sT=(-1);a.uA=(-1);a.zx=b;a.yj=b.xr;a.s6=c;a.sT=0;d=c.kf.length;a.uA=d;e=AQU(c,a.sT,d,b.q1,b.pl+1|0,b.m0+1|0);a.oK=e;e.pW=1;},
Q9=(a,b)=>{let c=new S5();Xg(c,a,b);return c;};
let AAF=F();
let CU=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=PN(APu(b,c));}catch($$e){$$je=Bc($$e);if($$je instanceof K7){d=$$je;break a;}else if($$je instanceof HM){d=$$je;break b;}else{throw $$e;}}return d;}e=new Ca;if(b.kp===null)b.kp=W(b.kw.$meta.name);f=b.kp;b=new K;b.ke=G(16);E(b,b.kd,A(168));g=b.kd;if(f===null)f=A(2);E(b,g,f);h=new I;c=b.ke;i=c.data;j=b.kd;k=i.length;if(j>=0&&j<=(k-0|0)){h.kf=L(c.data,0,j);e.kg=1;e.kh=1;e.kj=h;e.lI=d;B(e);}b=new H;b.kg=1;b.kh=1;B(b);}e=new Ca;if(b.kp
===null)b.kp=W(b.kw.$meta.name);f=b.kp;b=new K;b.ke=G(16);E(b,b.kd,A(169));g=b.kd;if(f===null)f=A(2);E(b,g,f);E(b,b.kd,A(170));h=new I;c=b.ke;i=c.data;j=b.kd;k=i.length;if(j>=0&&j<=(k-0|0)){h.kf=L(c.data,0,j);e.kg=1;e.kh=1;e.kj=h;e.lI=d;B(e);}b=new H;b.kg=1;b.kh=1;B(b);}c=(ASz(b)).data;if(c.length<=0)b=null;else{b=new Le;b.lZ=c[0];}return b;},
CS=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=PN(APw(b,c));}catch($$e){$$je=Bc($$e);if($$je instanceof K7){d=$$je;break a;}else if($$je instanceof HM){d=$$je;e=new Ca;if(b.kp===null)b.kp=W(b.kw.$meta.name);f=b.kp;b=new K;b.ke=G(16);E(b,b.kd,A(168));g=b.kd;if(f===null)f=A(2);E(b,g,f);h=new I;c=b.ke;i=c.data;j=b.kd;k=i.length;if(j>=0&&j<=(k-0|0)){h.kf=L(c.data,0,j);e.kg=1;e.kh=1;e.kj=h;e.lI=d;B(e);}b=new H;b.kg=1;b.kh=1;B(b);}else{throw $$e;}}return d;}e=new Ca;if(b.kp===null)b.kp=W(b.kw.$meta.name);f=b.kp;b=new K;b.ke
=G(16);E(b,b.kd,A(171));g=b.kd;if(f===null)f=A(2);E(b,g,f);h=new I;c=b.ke;i=c.data;k=b.kd;j=i.length;if(k>=0&&k<=(j-0|0)){h.kf=L(c.data,0,k);e.kg=1;e.kh=1;e.kj=h;e.lI=d;B(e);}b=new H;b.kg=1;b.kh=1;B(b);};
function Le(){C.call(this);this.lZ=null;}
let ARt=(a,b)=>{a.lZ=b;},
PN=a=>{let b=new Le();ARt(b,a);return b;},
CV=(a,b)=>{return;},
C$=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je;if(b===null)b=R(C,0);a:{b:{c:{try{c=APK(a.lZ,b);}catch($$e){$$je=Bc($$e);if($$je instanceof Bj){c=$$je;break c;}else if($$je instanceof MZ){c=$$je;break a;}else if($$je instanceof Ky){c=$$je;break b;}else if($$je instanceof O7){c=$$je;d=new Ca;e=a.lZ.lY;if(e.kp===null)e.kp=W(e.kw.$meta.name);e=e.kp;f=new K;f.ke=G(16);E(f,f.kd,A(172));g=f.kd;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ke;i=b.data;j=f.kd;k=i.length;if(j>=0&&j<=(k-0|0)){h.kf=L(b.data,0,j);d.kg=1;d.kh=1;d.kj=h;d.lI
=c;B(d);}c=new H;c.kg=1;c.kh=1;B(c);}else{throw $$e;}}return c;}d=new Ca;e=a.lZ.lY;if(e.kp===null)e.kp=W(e.kw.$meta.name);e=e.kp;f=new K;f.ke=G(16);E(f,f.kd,A(173));g=f.kd;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ke;i=b.data;j=f.kd;k=i.length;if(j>=0&&j<=(k-0|0)){h.kf=L(b.data,0,j);d.kg=1;d.kh=1;d.kj=h;d.lI=c;B(d);}c=new H;c.kg=1;c.kh=1;B(c);}d=new Ca;e=a.lZ.lY;if(e.kp===null)e.kp=W(e.kw.$meta.name);e=e.kp;f=new K;f.ke=G(16);E(f,f.kd,A(174));g=f.kd;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ke;i=b.data;j=f.kd;k
=i.length;if(j>=0&&j<=(k-0|0)){h.kf=L(b.data,0,j);d.kg=1;d.kh=1;d.kj=h;d.lI=c;B(d);}c=new H;c.kg=1;c.kh=1;B(c);}d=new Ca;e=a.lZ.lY;if(e.kp===null)e.kp=W(e.kw.$meta.name);e=e.kp;f=new K;f.ke=G(16);E(f,f.kd,A(174));g=f.kd;if(e===null)e=A(2);E(f,g,e);h=new I;b=f.ke;i=b.data;j=f.kd;k=i.length;if(j>=0&&j<=(k-0|0)){h.kf=L(b.data,0,j);d.kg=1;d.kh=1;d.kj=h;d.lI=c;B(d);}c=new H;c.kg=1;c.kh=1;B(c);};
let Ca=F(BH);
function E1(){C.call(this);this.kW=null;}
let AM9=null,Ni=null,HF=null,IE=null,QE=null,Wg=null,Qa=null;
let BE=()=>{BE=BR(E1);ABI();};
let Cc=b=>{let c,d,e,f,g,h,i;BE();if(b===null)return null;c=b;d=W(typeof c);if(d===A(175))e=1;else if(!(A(175) instanceof I))e=0;else{f=A(175);e=d.kf!==f.kf?0:1;}a:{if(!e){if(d===A(176))e=1;else if(!(A(176) instanceof I))e=0;else{f=A(176);e=d.kf!==f.kf?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Bt]===true)return b;b=Ni;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E1;h.kW=c;Ni.set(c,new WeakRef(h));return h;}if(d===A(177))e=1;else if
(!(A(177) instanceof I))e=0;else{b=A(177);e=d.kf!==b.kf?0:1;}if(e){f=HF.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E1;h.kW=c;i=h;HF.set(c,new WeakRef(i));Pg(Wg,i,c);return h;}if(d===A(178))e=1;else if(!(A(178) instanceof I))e=0;else{b=A(178);e=d.kf!==b.kf?0:1;}if(e){f=IE.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E1;h.kW=c;i=h;IE.set(c,new WeakRef(i));Pg(Qa,i,c);return h;}if(d===A(179))e=1;else if
(!(A(179) instanceof I))e=0;else{b=A(179);e=d.kf!==b.kf?0:1;}if(e){f=QE;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new E1;h.kW=c;QE=new WeakRef(h);return h;}}b=new E1;b.kW=c;return b;},
ABI=()=>{AM9=new WeakMap();Ni=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();HF=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();IE=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();Wg=HF===null?null:new FinalizationRegistry(B$(new MJ,"accept"));Qa=IE===null?null:new FinalizationRegistry(B$(new MI,"accept"));},
Pg=(b,c,d)=>{return b.register(c,d);};
let RB=F(0);
let KL=F();
let If=F(0);
let KK=F();
function UO(){let a=this;C.call(a);a.mh=null;a.lM=null;a.od=null;a.qQ=null;a.qv=0;a.pf=0;a.nh=0;a.k4=0;a.oT=0;a.tb=0;a.pW=0;a.m7=0;a.AO=0;a.se=0;a.sa=0;}
let AK1=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.se=(-1);h=e+1|0;a.qv=h;i=Ba(h*2|0);a.mh=i;j=Ba(g);k=j.data;a.lM=j;e=0;g=k.length;l=BW(e,g);if(l>0){b=new Bj;b.kg=1;b.kh=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.od=Ba(f);i=i.data;h=0;m=i.length;e=BW(h,m);if(e>0){b=new Bj;b.kg=1;b.kh=1;B(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.pf=0;a.sa=2;f=0;if(e>0){b=new Bj;b.kg=1;b.kh=1;B(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bj;b.kg=1;b.kh=1;B(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.qQ=b;if
(c>=0){a.nh=c;a.k4=d;}a.oT=a.nh;},
AQU=(a,b,c,d,e,f)=>{let g=new UO();AK1(g,a,b,c,d,e,f);return g;};
let CC=F(Bj);
let K7=F(BA);
let EP=F(BH);
let HM=F(EP);
let Ds=F(BA);
function Cf(){let a=this;C.call(a);a.kr=null;a.mU=0;a.kz=null;a.lL=0;}
let O=0;
let ACP=(a,b,c,d)=>{let e;e=d.k4;while(true){if(b>e)return (-1);if(a.fJ(b,c,d)>=0)break;b=b+1|0;}return b;},
AFN=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.fJ(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AVr=(a,b)=>{a.lL=b;},
AAU=a=>{return a.lL;},
AWU=a=>{let b,c,d,e,f,g,h,i;b=a.kz;c=a.fK();d=new K;d.ke=G(16);e=d.kd;Bk(d,e,e+1|0);d.ke.data[e]=60;f=d.kd;if(b===null)b=A(2);E(d,f,b);e=d.kd;Bk(d,e,e+1|0);d.ke.data[e]=58;f=d.kd;if(c===null)c=A(2);E(d,f,c);e=d.kd;Bk(d,e,e+1|0);g=d.ke;h=g.data;h[e]=62;b=new I;e=d.kd;i=h.length;if(e>=0&&e<=(i-0|0)){b.kf=L(g.data,0,e);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
AOv=a=>{let b,c,d,e,f,g,h,i;b=a.kz;c=a.fK();d=new K;d.ke=G(16);e=d.kd;Bk(d,e,e+1|0);d.ke.data[e]=60;f=d.kd;if(b===null)b=A(2);E(d,f,b);e=d.kd;Bk(d,e,e+1|0);d.ke.data[e]=58;f=d.kd;if(c===null)c=A(2);E(d,f,c);e=d.kd;Bk(d,e,e+1|0);g=d.ke;h=g.data;h[e]=62;b=new I;e=d.kd;i=h.length;if(e>=0&&e<=(i-0|0)){b.kf=L(g.data,0,e);return b;}b=new H;U(b);B(b);},
AXD=a=>{return a.kr;},
ARc=(a,b)=>{a.kr=b;},
ARa=(a,b)=>{return 1;},
ASS=a=>{return null;},
IH=a=>{let b;a.mU=1;b=a.kr;if(b!==null){if(!b.mU){b=b.fL();if(b!==null){a.kr.mU=1;a.kr=b;}a.kr.e5();}else if(b instanceof GQ&&b.m3.um)a.kr=b.kr;}},
AYj=()=>{O=1;};
let Nc=F();
let ASC=F();
let AET=F();
let AUm=F();
let Ll=F(0);
let MJ=F();
let ARk=(a,b)=>{let c;BE();b=b===null?null:b instanceof Ge()?b:Cc(b);c=HF;b=b===null?null:b[Bt]===true?b:b.kW;c.delete(b);};
let AGr=F();
let MI=F();
let Zn=(a,b)=>{let c;BE();b=b===null?null:b instanceof Ge()?b:Cc(b);c=IE;b=b===null?null:b[Bt]===true?b:b.kW;c.delete(b);};
let Om=F(0);
function HY(){let a=this;C.call(a);a.nv=null;a.mX=null;}
function I6(){let a=this;HY.call(a);a.tm=null;a.xO=0;}
function DG(){let a=this;Cf.call(a);a.um=0;a.mn=0;}
let Ip=null;
let Ef=()=>{Ef=BR(DG);AD0();};
let ZN=(a,b,c,d)=>{let e,f,g;e=a.mn;f=d.mh.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.kr.fJ(b,c,d);if(g<0){b=a.mn;d.mh.data[(b*2|0)+1|0]=e;}return g;},
AWP=a=>{return a.mn;},
AGm=a=>{return A(180);},
AAt=(a,b)=>{return 0;},
AD0=()=>{let b,c,d;b=new PF;c=O;O=c+1|0;d=new Be;d.ke=G(20);b.kz=(J(d,d.kd,c,10)).T();Ip=b;};
function TQ(){let a=this;C.call(a);a.lX=null;a.lQ=0;a.oJ=0;a.ym=0;a.pa=0;a.l1=0;a.kE=0;a.mI=0;a.lw=null;a.oG=null;a.kB=0;a.lH=0;a.nE=0;a.rN=0;a.lV=null;}
let Q1=null,AAn=null,APj=0;
let ARe=(a,b,c)=>{let d,e,f,g,h,i,j;a.oJ=1;a.lV=b;if((c&16)>0){d=new K;d.ke=G(16);E(d,d.kd,A(181));e=0;while(true){f=QN(b,A(182),e);if(f<0)break;g=f+2|0;h=Ck(b,e,g);E(d,d.kd,h);E(d,d.kd,A(183));e=g;}b=Ck(b,e,b.kf.length);E(d,d.kd,b);E(d,d.kd,A(182));b=new I;i=d.ke;j=i.data;e=d.kd;f=j.length;if(e>=0&&e<=(f-0|0))b.kf=L(i.data,0,e);else{b=new H;b.kg=1;b.kh=1;B(b);}}a.lX=G(b.kf.length+2|0);j=G(b.kf.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Dw(j,0,a.lX,0,b.kf.length);i=a.lX.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.mI=g;a.lQ=c;By(a);By(a);return;}if(e<0)break;if(e>=b.kf.length)break;i[e]=b.kf.charCodeAt(e);e=e+1|0;}b=new Y;b.kg=1;b.kh=1;B(b);},
AD$=(a,b)=>{let c=new TQ();ARe(c,a,b);return c;},
By=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.pa=a.l1;a.l1=a.kE;a.lw=a.oG;a.nE=a.rN;a.rN=a.kB;a:{while(true){b=0;c=a.kB>=a.lX.data.length?0:Ns(a);a.kE=c;a.oG=null;if(a.oJ==4){if(c!=92)return;c=a.kB;d=a.lX.data;if(c>=d.length)c=0;else{a.lH=c;if(a.lQ&4)Cv(a);else a.kB=c+1|0;c=d[a.lH];}a.kE=c;switch(c){case 69:break;default:a.kE=92;a.kB=a.lH;return;}a.oJ=a.ym;a.kE=a.kB>(a.lX.data.length-2|0)?0:Ns(a);}b:{c=a.kE;if(c==92){c=a.kB>=(a.lX.data.length-2|0)?(-1):Ns(a);c:{d:{a.kE=c;switch(c){case -1:e=new Cn;f=a.lV;c=a.kB;e.kg
=1;e.kh=1;e.k2=(-1);e.l0=A(68);e.lU=f;e.k2=c;B(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.kE
=ALH(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.oJ!=1)break b;a.kE=(-2147483648)|c;break b;case 65:a.kE=(-2147483583);break b;case 66:a.kE=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new Cn;f=a.lV;c=a.kB;e.kg=1;e.kh=1;e.k2=(-1);e.l0=A(68);e.lU=f;e.k2=c;B(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.kE
=(-2147483577);break b;case 80:case 112:break c;case 81:a.ym=a.oJ;a.oJ=4;b=1;break b;case 90:a.kE=(-2147483558);break b;case 97:a.kE=7;break b;case 98:a.kE=(-2147483550);break b;case 99:c=a.kB;d=a.lX.data;if(c>=(d.length-2|0)){e=new Cn;f=a.lV;e.kg=1;e.kh=1;e.k2=(-1);e.l0=A(68);e.lU=f;e.k2=c;B(e);}a.lH=c;if(a.lQ&4)Cv(a);else a.kB=c+1|0;a.kE=d[a.lH]&31;break b;case 101:a.kE=27;break b;case 102:a.kE=12;break b;case 110:a.kE=10;break b;case 114:a.kE=13;break b;case 116:a.kE=9;break b;case 117:a.kE=QO(a,4);break b;case 120:a.kE
=QO(a,2);break b;case 122:a.kE=(-2147483526);break b;default:}break b;}e=new I;d=a.lX;g=d.data;h=a.lH;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.kf=L(d.data,h,1);e=Wb(I9,e);if(e.oL===null)e.oL=e.fS();a.oG=e.oL;a.kE=0;break b;}e=AKS(a);j=0;if(a.kE==80)j=1;try{a.oG=AIC(e,j);}catch($$e){$$je=Bc($$e);if($$je instanceof KI){e=new Cn;f=a.lV;c=a.kB;e.kg=1;e.kh=1;e.k2=(-1);e.l0=A(68);e.lU=f;e.k2=c;B(e);}else{throw $$e;}}a.kE=0;}else{h=a.oJ;if(h==1)switch(c){case 36:a.kE=(-536870876);break b;case 40:d=a.lX.data;c
=a.kB;if(d[c]!=63){a.kE=(-2147483608);break b;}a.lH=c;if(a.lQ&4)Cv(a);else a.kB=c+1|0;c=a.lX.data[a.kB];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.kE=(-134217688);k=a.kB;a.lH=k;if(a.lQ&4)Cv(a);else a.kB=k+1|0;break e;default:e=new Cn;f=a.lV;c=a.kB;e.kg=1;e.kh=1;e.k2=(-1);e.l0=A(68);e.lU=f;e.k2=c;B(e);}a.kE=(-67108824);j=a.kB;a.lH=j;if(a.lQ&4)Cv(a);else a.kB=j+1|0;}else{switch(c){case 33:break;case 60:h=a.kB;a.lH=h;if(a.lQ&4)Cv(a);else a.kB=h+1|0;c=a.lX.data[a.kB];h=1;break e;case 61:a.kE
=(-536870872);j=a.kB;a.lH=j;if(a.lQ&4)Cv(a);else a.kB=j+1|0;break e;case 62:a.kE=(-33554392);j=a.kB;a.lH=j;if(a.lQ&4)Cv(a);else a.kB=j+1|0;break e;default:i=ATJ(a);a.kE=i;if(i<256){a.lQ=i;i=i<<16;a.kE=i;a.kE=(-1073741784)|i;break e;}i=i&255;a.kE=i;a.lQ=i;i=i<<16;a.kE=i;a.kE=(-16777176)|i;break e;}a.kE=(-268435416);j=a.kB;a.lH=j;if(a.lQ&4)Cv(a);else a.kB=j+1|0;}}if(!h)break;}break b;case 41:a.kE=(-536870871);break b;case 42:case 43:case 63:h=a.kB;d=a.lX.data;switch(h>=d.length?42:d[h]){case 43:a.kE=c|(-2147483648);a.lH
=h;if(a.lQ&4)Cv(a);else a.kB=h+1|0;break b;case 63:a.kE=c|(-1073741824);a.lH=h;if(a.lQ&4)Cv(a);else a.kB=h+1|0;break b;default:}a.kE=c|(-536870912);break b;case 46:a.kE=(-536870866);break b;case 91:a.kE=(-536870821);a.oJ=2;break b;case 93:if(h!=2)break b;a.kE=(-536870819);break b;case 94:a.kE=(-536870818);break b;case 123:a.oG=ARz(a,c);break b;case 124:a.kE=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.kE=(-536870874);break b;case 45:a.kE=(-536870867);break b;case 91:a.kE=(-536870821);break b;case 93:a.kE
=(-536870819);break b;case 94:a.kE=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new H;e.kg=1;e.kh=1;B(e);},
AKS=a=>{let b,c,d,e,f,g,h,i;b=new K;b.ke=G(10);c=a.kB;d=a.lX;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new I;a.lH=c;if(a.lQ&4)Cv(a);else a.kB=c+1|0;g=a.lH;if(g>=0&&1<=(f-g|0)){b.kf=L(d.data,g,1);h=new K;h.ke=G(16);E(h,h.kd,A(184));E(h,h.kd,b);b=new I;d=h.ke;e=d.data;f=h.kd;g=e.length;if(f>=0&&f<=(g-0|0)){b.kf=L(d.data,0,f);return b;}b=new H;b.kg=1;b.kh=1;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}a.lH=c;if(a.lQ&4)Cv(a);else a.kB=c+1|0;c=0;a:{while(true){f=a.kB;d=a.lX.data;if(f>=(d.length-2|0))break;a.lH=f;if
(a.lQ&4)Cv(a);else a.kB=f+1|0;c=d[a.lH];if(c==125)break a;f=b.kd;Bk(b,f,f+1|0);b.ke.data[f]=c;}}if(c!=125){b=new Cn;i=a.lV;c=a.kB;b.kg=1;b.kh=1;b.k2=(-1);b.l0=A(68);b.lU=i;b.k2=c;B(b);}}c=b.kd;if(!c){b=new Cn;i=a.lV;c=a.kB;b.kg=1;b.kh=1;b.k2=(-1);b.l0=A(68);b.lU=i;b.k2=c;B(b);}h=new I;d=b.ke;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.kf=L(d.data,0,c);if(h.kf.length==1){b=new K;b.ke=G(16);E(b,b.kd,A(184));E(b,b.kd,h);h=new I;d=b.ke;e=d.data;f=b.kd;g=e.length;if(f>=0&&f<=(g-0|0)){h.kf=L(d.data,0,f);return h;}b=new H;b.kg
=1;b.kh=1;B(b);}b:{c:{if(h.kf.length>3){if(h===A(184)?1:M$(h,A(184),0))break c;if(h===A(185)?1:M$(h,A(185),0))break c;}break b;}h=Ck(h,2,h.kf.length);}return h;}b=new H;b.kg=1;b.kh=1;B(b);},
ARz=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.ke=G(4);d=(-1);e=2147483647;a:{while(true){f=a.kB;g=a.lX.data;if(f>=g.length)break a;a.lH=f;if(a.lQ&4)Cv(a);else a.kB=f+1|0;b=g[a.lH];if(b==125)break a;if(b==44&&d<0)try{d=K2(Et(c),10);AR1(c,0,AAc(c));continue;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){break;}else{throw $$e;}}h=b&65535;f=c.kd;Bk(c,f,f+1|0);c.ke.data[f]=h;}c=new Cn;i=a.lV;b=a.kB;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=i;c.k2=b;B(c);}if(b!=125){c=new Cn;i=a.lV;b=a.kB;c.kg=1;c.kh=1;c.k2=(-1);c.l0
=A(68);c.lU=i;c.k2=b;B(c);}if(c.kd>0)b:{try{e=K2(Et(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bc($$e);if($$je instanceof CC){}else{throw $$e;}}c=new Cn;i=a.lV;b=a.kB;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=i;c.k2=b;B(c);}else if(d<0){c=new Cn;i=a.lV;b=a.kB;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=i;c.k2=b;B(c);}if((d|e|(e-d|0))<0){c=new Cn;i=a.lV;b=a.kB;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=i;c.k2=b;B(c);}f=a.kB;g=a.lX.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.kE=(-2147483525);a.lH=f;if(a.lQ
&4)Cv(a);else a.kB=f+1|0;break c;case 63:a.kE=(-1073741701);a.lH=f;if(a.lQ&4)Cv(a);else a.kB=f+1|0;break c;default:}a.kE=(-536870789);}c=new OY;c.pg=d;c.pe=e;return c;},
AGd=b=>{return b<0?0:1;},
QO=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.ke=G(b);d=a.lX.data.length-2|0;e=0;while(true){f=BW(e,b);if(f>=0)break;g=a.kB;if(g>=d)break;h=a.lX;a.lH=g;if(a.lQ&4)Cv(a);else a.kB=g+1|0;g=h.data[a.lH];i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=g;e=e+1|0;}if(!f)a:{try{b=K2(Et(c),16);}catch($$e){$$je=Bc($$e);if($$je instanceof CC){break a;}else{throw $$e;}}return b;}c=new Cn;j=a.lV;b=a.kB;c.kg=1;c.kh=1;c.k2=(-1);c.l0=A(68);c.lU=j;c.k2=b;B(c);},
ALH=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.lX.data;e=d.length-2|0;f=Qi(d[a.kB]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.kB;a.lH=g;if(a.lQ&4)Cv(a);else a.kB=g+1|0;a:{while(true){if(c>=b)break a;h=a.kB;if(h>=e)break a;i=Qi(a.lX.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.kB;a.lH=g;if(a.lQ&4)Cv(a);else a.kB=g+1|0;c=c+1|0;}}return f;}j=new Cn;k=a.lV;b=a.kB;j.kg=1;j.kh=1;j.k2=(-1);j.l0=A(68);j.lU=k;j.k2=b;B(j);},
ATJ=a=>{let b,c,d,e,f,g,h;b=1;c=a.lQ;a:while(true){d=a.kB;e=a.lX.data;if(d>=e.length){f=new Cn;g=a.lV;f.kg=1;f.kh=1;f.k2=(-1);f.l0=A(68);f.lU=g;f.k2=d;B(f);}b:{c:{switch(e[d]){case 41:a.lH=d;if(a.lQ&4)Cv(a);else a.kB=d+1|0;return c|256;case 45:if(!b){h=new Cn;g=a.lV;h.kg=1;h.kh=1;h.k2=(-1);h.l0=A(68);h.lU=g;h.k2=d;B(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.lH=d;if(a.lQ&4)Cv(a);else a.kB=d+1|0;}a.lH=d;if(a.lQ&4)Cv(a);else a.kB=d+1|0;return c;},
Cv=a=>{let b,c,d,e;b=a.lX.data.length-2|0;a.kB=a.kB+1|0;a:while(true){c=a.kB;if(c<b){b:{c=a.lX.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(C0(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.kB=a.kB+1|0;continue;}}c=a.kB;if(c>=b)break;d=a.lX.data;if(d[c]!=35)break;a.kB=c+1|0;while(true){e=a.kB;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.kB
=e+1|0;}}return c;},
ACK=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?IW([d,e]):IW([d,e,4519+f|0]);}return null;},
AMK=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
Ns=a=>{let b,c,d,e,f;b=a.lX;c=a.kB;a.lH=c;if(a.lQ&4)Cv(a);else a.kB=c+1|0;b=b.data;d=a.lH;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.lX.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.kB;a.lH=d;if(a.lQ&4)Cv(a);else a.kB=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function Cn(){let a=this;Bj.call(a);a.l0=null;a.lU=null;a.k2=0;}
let ASK=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(68);c=a.k2;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bj;b.kg=1;b.kh=1;B(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new I;b.kf=L(d.data,0,f);}a:{h=a.l0;i=a.lU;if(i!==null&&i.kf.length){j=a.k2;i=a.lU;k=new K;k.ke=G(16);J(k,k.kd,j,10);E(k,k.kd,A(47));j=k.kd;if(i===null)i=A(2);E(k,j,i);E(k,k.kd,A(47));E(k,k.kd,b);b=new I;d=k.ke;e=d.data;c=k.kd;f=e.length;if(c>=0&&c<=(f-0|0)){b.kf=L(d.data,0,c);break a;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);}b=A(68);}i=new K;i.ke=G(16);j
=i.kd;if(h===null)h=A(2);E(i,j,h);E(i,i.kd,b);b=new I;d=i.ke;e=d.data;c=i.kd;f=e.length;if(c>=0&&c<=(f-0|0)){b.kf=L(d.data,0,c);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
let ZV=F();
let AVh=(b,c,d,e)=>{let f,g;if(c<=d){while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}return;}e=new Bj;e.kg=1;e.kh=1;B(e);},
AMw=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bj;f.kg=1;f.kh=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
AOm=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bj;f.kg=1;f.kh=1;B(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=BW(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
Vc=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let K6=F(0);
let Mu=F();
let ADM=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.ls;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new BD;b.kw=f;c=b;f.classObject=c;}}b=EA(b);if(b===null){b=new Ds;b.kg=1;b.kh=1;B(b);}if(b===M(Bp)){b=new Bj;b.kg=1;b.kh=1;B(b);}if(d<0){b=new Eh;b.kg=1;b.kh=1;B(b);}b=Ee(b.kw,d);}e=0;g=0;h=a.m9;i=a.ls;d=BW(h,h);a:{while(true){j=BW(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new NL;b.kg=1;b.kh=1;B(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.mg.data[g];e=h;g=k;}return b;}b=new H;b.kg=1;b.kh=1;B(b);};
let SA=F(0);
let ON=F(0);
function K8(){Mu.call(this);this.m9=0;}
let T8=F(0);
function K5(){let a=this;K8.call(a);a.mg=null;a.ls=0;}
let Hw=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.mg;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new BD;i.kw=h;j=i;h.classObject=j;}}h=EA(i);if(h===null){i=new Ds;i.kg=1;i.kh=1;B(i);}if(h===M(Bp)){i=new Bj;i.kg=1;i.kh=1;B(i);}if(f<0){i=new Eh;i.kg=1;i.kh=1;B(i);}j=Ee(h.kw,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.mg=j;}},
AHj=(a,b,c)=>{let d,e,f;if(b>=0){d=a.ls;if(b<=d){Hw(a,d+1|0);d=a.ls;e=d;while(e>b){f=a.mg.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.mg.data[b]=c;a.ls=d+1|0;a.m9=a.m9+1|0;return;}}c=new H;c.kg=1;c.kh=1;B(c);},
UW=(a,b)=>{let c,d,e,f;if(b>=0){c=a.ls;if(b<c){d=a.mg.data;e=d[b];c=c-1|0;a.ls=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.m9=a.m9+1|0;return e;}}e=new H;e.kg=1;e.kh=1;B(e);};
let Sv=F(DG);
let Yx=(a,b,c,d)=>{let e,f;e=a.mn;f=d.lM.data;f[e]=b-f[e]|0;return a.kr.fJ(b,c,d);},
ACt=a=>{return A(186);},
AO3=(a,b)=>{return 0;};
let WD=F(DG);
let AB5=(a,b,c,d)=>{return b;},
AHA=a=>{return A(187);};
let QP=F(DG);
let AAR=(a,b,c,d)=>{let e;e=a.mn;if(d.lM.data[e]!=b)b=(-1);return b;},
AQ5=a=>{return A(188);};
function Td(){DG.call(this);this.wd=0;}
let YW=(a,b,c,d)=>{let e,f;e=a.mn;f=d.lM.data;f[e]=b-f[e]|0;a.wd=b;return b;},
APD=a=>{return A(189);},
AMJ=(a,b)=>{return 0;};
let G3=F(DG);
let ARG=(a,b,c,d)=>{if(d.sa!=1&&b!=d.k4)return (-1);d.pf=1;d.mh.data[1]=b;return b;},
ABa=a=>{return A(190);};
function CF(){Cf.call(this);this.k7=0;}
let ATO=(a,b,c,d)=>{let e;if((b+a.f2()|0)>d.k4){d.m7=1;return (-1);}e=a.f3(b,c);if(e<0)return (-1);return a.kr.fJ(b+e|0,c,d);},
AQh=a=>{return a.k7;},
AHr=(a,b)=>{return 1;};
let FF=F(CF);
let APp=(a,b,c)=>{return 0;},
AEd=(a,b,c,d)=>{let e,f,g;e=d.k4;f=d.nh;a:{b:{while(true){g=BW(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.kf.length)break b;if(((c.kf.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.kf.length)break a;if((c.kf.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.kr.fJ(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);},
ABM=(a,b,c,d,e)=>{let f,g,h;f=e.k4;g=e.nh;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.kf.length)break b;if(((d.kf.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.kf.length)break a;if((d.kf.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.kr.fJ(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Y;d.kg=1;d.kh=1;B(d);}d=new Y;d.kg=1;d.kh=1;B(d);},
AGo=a=>{return A(191);},
YO=(a,b)=>{return 0;};
function Cr(){let a=this;Cf.call(a);a.l4=null;a.m3=null;a.lP=0;}
let AFP=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.l4;if(e===null)return (-1);f=a.lP;g=d.mh.data;h=f*2|0;i=g[h];g[h]=b;f=e.ls;j=0;a:{while(true){if(j>=f){b=a.lP;d.mh.data[b*2|0]=i;return (-1);}e=a.l4;if(j<0)break a;if(j>=e.ls)break a;h=e.mg.data[j].fJ(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new H;c.kg=1;c.kh=1;B(c);},
AMA=(a,b)=>{a.m3.kr=b;},
AHK=a=>{return A(192);},
AI6=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.l4;if(c!==null){d=0;e=c.m9;f=c.ls;while(true){if(!(d>=f?0:1))break b;if(e<c.m9){b=new NL;b.kg=1;b.kh=1;B(b);}g=d+1|0;if(d<0)break a;if(d>=c.ls)break a;if(c.mg.data[d].fn(b))break;d=g;}return 1;}}return 0;}b=new H;b.kg=1;b.kh=1;B(b);},
ANJ=(a,b)=>{let c,d,e;c=a.lP;d=b.mh.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
ABE=a=>{let b,c,d,e;a.mU=1;b=a.m3;if(b!==null&&!b.mU)IH(b);a:{b:{b=a.l4;if(b!==null){c=b.ls;d=0;while(true){if(d>=c)break b;b=a.l4;if(d<0)break a;if(d>=b.ls)break a;b=b.mg.data[d];e=b.fL();if(e===null)e=b;else{b.mU=1;UW(a.l4,d);AHj(a.l4,d,e);}if(!e.mU)e.e5();d=d+1|0;}}}if(a.kr!==null)IH(a);return;}b=new H;b.kg=1;b.kh=1;B(b);};
let Kn=F(Cr);
let AL_=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lP;f=d.lM.data;g=f[e];f[e]=b;h=a.l4.ls;e=0;a:{while(true){if(e>=h){b=a.lP;d.lM.data[b]=g;return (-1);}i=a.l4;if(e<0)break a;if(e>=i.ls)break a;j=i.mg.data[e].fJ(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new H;c.kg=1;c.kh=1;B(c);},
AJk=a=>{return A(193);},
AOn=(a,b)=>{let c;c=a.lP;return !b.lM.data[c]?0:1;};
let EG=F(Kn);
let ACW=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lP;f=d.lM.data;g=f[e];f[e]=b;h=a.l4.ls;i=0;a:{while(i<h){j=a.l4;if(i<0)break a;if(i>=j.ls)break a;if(j.mg.data[i].fJ(b,c,d)>=0)return a.kr.fJ(a.m3.wd,c,d);i=i+1|0;}b=a.lP;d.lM.data[b]=g;return (-1);}c=new H;c.kg=1;c.kh=1;B(c);},
ANU=(a,b)=>{a.kr=b;},
YI=a=>{return A(193);};
let OA=F(EG);
let AMq=(a,b,c,d)=>{let e,f,g;e=a.l4.ls;f=0;a:{while(f<e){g=a.l4;if(f<0)break a;if(f>=g.ls)break a;if(g.mg.data[f].fJ(b,c,d)>=0)return a.kr.fJ(b,c,d);f=f+1|0;}return (-1);}c=new H;c.kg=1;c.kh=1;B(c);},
ARf=(a,b)=>{return 0;},
ASO=a=>{return A(194);};
let VC=F(EG);
let AAi=(a,b,c,d)=>{let e,f,g;e=a.l4.ls;f=0;a:{while(true){if(f>=e)return a.kr.fJ(b,c,d);g=a.l4;if(f<0)break a;if(f>=g.ls)break a;if(g.mg.data[f].fJ(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.kg=1;c.kh=1;B(c);},
AQy=(a,b)=>{return 0;},
AFx=a=>{return A(195);};
let R2=F(EG);
let ABv=(a,b,c,d)=>{let e,f,g,h,i;e=a.l4.ls;f=d.tb?0:d.nh;a:{b:{g=a.kr.fJ(b,c,d);if(g>=0){h=a.lP;d.lM.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.l4;if(h<0)break a;if(h>=i.ls)break a;if(i.mg.data[h].f5(f,b,c,d)>=0){b=a.lP;d.lM.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new H;c.kg=1;c.kh=1;B(c);},
AUo=(a,b)=>{return 0;},
ALD=a=>{return A(196);};
let TA=F(EG);
let XH=(a,b,c,d)=>{let e,f,g;e=a.l4.ls;f=a.lP;d.lM.data[f]=b;f=0;a:{while(true){if(f>=e)return a.kr.fJ(b,c,d);g=a.l4;if(f<0)break a;if(f>=g.ls)break a;if(g.mg.data[f].f5(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new H;c.kg=1;c.kh=1;B(c);},
AOI=(a,b)=>{return 0;},
AAS=a=>{return A(197);};
function GQ(){Cr.call(this);this.nr=null;}
let Yc=(a,b,c,d)=>{let e,f,g;e=a.lP;f=d.mh.data;e=e*2|0;g=f[e];f[e]=b;e=a.nr.fJ(b,c,d);if(e>=0)return e;e=a.lP;d.mh.data[e*2|0]=g;return (-1);},
AJw=(a,b,c,d)=>{let e;e=a.nr.fB(b,c,d);if(e>=0){b=a.lP;d.mh.data[b*2|0]=e;}return e;},
AO$=(a,b,c,d,e)=>{let f;f=a.nr.f5(b,c,d,e);if(f>=0){b=a.lP;e.mh.data[b*2|0]=f;}return f;},
AIW=(a,b)=>{return a.nr.fn(b);},
AMC=a=>{let b,c,d,e,f;b=new O0;c=a.nr;d=a.m3;e=O;O=e+1|0;f=new Be;f.ke=G(20);b.kz=(J(f,f.kd,e,10)).T();b.nr=c;b.m3=d;b.lP=d.mn;a.kr=b;return b;},
AS1=a=>{let b;a.mU=1;b=a.m3;if(b!==null&&!b.mU)IH(b);b=a.nr;if(b!==null&&!b.mU){b=b.fL();if(b!==null){a.nr.mU=1;a.nr=b;}a.nr.e5();}};
let AKU=F();
let JT=b=>{if(b===null||b.constructor.$meta.item==='undefined'){B(AAX());}return b.data.length;},
Ee=(b,c)=>{if(b.$meta.primitive){switch(b){};}return R(b,c);};
let Kb=F(BA);
let Id=F();
function Bq(){let a=this;Id.call(a);a.kY=0;a.mS=0;a.kC=null;a.tE=null;a.ue=null;a.lB=0;}
let I9=null;
let AAl=a=>{return null;},
Zg=a=>{return a.kC;},
AJY=a=>{return !a.mS?(IC(a.kC,0)>=2048?0:1):AM$(a.kC,0)>=2048?0:1;},
AV_=a=>{return a.lB;},
AP8=a=>{return a;},
ZE=a=>{let b,c;if(a.ue===null){b=a.f8();c=new VN;c.AW=a;c.wn=b;b=new Bn;b.ky=Ba(64);c.kC=b;a.ue=c;E7(c,a.mS);}return a.ue;},
IV=a=>{let b,c;if(a.tE===null){b=a.f8();c=new VM;c.AC=a;c.yd=b;c.yt=a;b=new Bn;b.ky=Ba(64);c.kC=b;a.tE=c;E7(c,a.kY);a.tE.lB=a.lB;}return a.tE;},
ASM=a=>{return 0;},
E7=(a,b)=>{let c;c=a.kY;if(c^b){a.kY=c?0:1;a.mS=a.mS?0:1;}if(!a.lB)a.lB=1;return a;},
AVS=a=>{return a.kY;},
AIC=(b,c)=>{b=Wb(I9,b);if(!c&&b.oL===null)b.oL=b.fS();else if(c&&b.qE===null)b.qE=E7(b.fS(),1);return c?b.qE:b.oL;},
AVv=()=>{I9=new NN;};
function KI(){let a=this;BA.call(a);a.A$=null;a.A0=null;}
function CQ(){let a=this;Bq.call(a);a.td=0;a.t8=0;a.q3=0;a.uN=0;a.oh=0;a.nJ=0;a.kF=null;a.lG=null;}
let Dg=(a,b)=>{let c;a:{if(a.td){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.oh){Od(a.kF,GD(b&65535));break a;}Ne(a.kF,GD(b&65535));break a;}if(a.t8&&b>128){a.q3=1;if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b);if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}b=CD(B1,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.uN)Od(a.kC,b-55296|0);else Ne(a.kC,b-55296|0);}if(a.oh)Od(a.kF,b);else Ne(a.kF,
b);if(!a.lB&&(b>=65536&&b<=1114111?1:0))a.lB=1;return a;},
AUh=(a,b)=>{let c,d,e;if(!a.lB&&b.lB)a.lB=1;if(a.uN){if(!b.mS)Hn(a.kC,b.f8());else Ed(a.kC,b.f8());}else if(!b.mS)Hh(a.kC,b.f8());else{GU(a.kC,b.f8());Ed(a.kC,b.f8());a.mS=a.mS?0:1;a.uN=1;}if(!a.nJ&&b.gd()!==null){if(a.oh){if(!b.kY)Hn(a.kF,b.gd());else Ed(a.kF,b.gd());}else if(!b.kY)Hh(a.kF,b.gd());else{GU(a.kF,b.gd());Ed(a.kF,b.gd());a.kY=a.kY?0:1;a.oh=1;}}else{c=a.kY;d=a.lG;if(d!==null){if(!c){e=new P4;e.zm=a;e.yE=c;e.yl=d;e.yf=b;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}else{e=new P5;e.Be=a;e.xf=c;e.xa=d;e.w4=
b;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}}else{if(c&&!a.oh&&(a.kF.l7?0:1)){d=new P0;d.Ai=a;d.xc=b;b=new Bn;b.ky=Ba(64);d.kC=b;a.lG=d;}else if(!c){d=new PX;d.uI=a;d.tU=c;d.wx=b;b=new Bn;b.ky=Ba(64);d.kC=b;a.lG=d;}else{d=new PY;d.vk=a;d.t3=c;d.yi=b;b=new Bn;b.ky=Ba(64);d.kC=b;a.lG=d;}a.nJ=1;}}return a;},
BU=(a,b,c)=>{let d;if(b>c){d=new Bj;d.kg=1;d.kh=1;B(d);}a:{b:{if(!a.td){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dg(a,b);b=b+1|0;}}if(a.oh)Yu(a.kF,b,c+1|0);else Ji(a.kF,b,c+1|0);}return a;},
Xz=(a,b)=>{let c,d,e,f;if(!a.lB&&b.lB)a.lB=1;if(b.q3)a.q3=1;c=a.mS;if(!(c^b.mS)){if(!c)Hh(a.kC,b.kC);else Ed(a.kC,b.kC);}else if(c)Hn(a.kC,b.kC);else{GU(a.kC,b.kC);Ed(a.kC,b.kC);a.mS=1;}a:{if(!a.nJ){d=b.nJ;if((!d?b.kF:null)!==null){c=a.kY;if(!(c^b.kY)){if(!c){Hh(a.kF,!d?b.kF:null);break a;}Ed(a.kF,!d?b.kF:null);break a;}if(c){Hn(a.kF,!d?b.kF:null);break a;}GU(a.kF,!d?b.kF:null);Ed(a.kF,!b.nJ?b.kF:null);a.kY=1;break a;}}c=a.kY;e=a.lG;if(e!==null){if(!c){f=new PS;f.y5=a;f.x3=c;f.yh=e;f.yx=b;b=new Bn;b.ky=Ba(64);f.kC
=b;a.lG=f;}else{f=new Qm;f.zA=a;f.yv=c;f.wa=e;f.wf=b;b=new Bn;b.ky=Ba(64);f.kC=b;a.lG=f;}}else{if(!a.oh&&(a.kF.l7?0:1)){if(!c){e=new P2;e.Bh=a;e.w2=b;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}else{e=new P3;e.zE=a;e.yq=b;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}}else if(!c){e=new P6;e.x4=a;e.xo=b;e.xb=c;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}else{e=new P7;e.xz=a;e.xI=b;e.xQ=c;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}a.nJ=1;}}},
V6=(a,b)=>{let c,d,e,f;if(!a.lB&&b.lB)a.lB=1;if(b.q3)a.q3=1;c=a.mS;if(!(c^b.mS)){if(!c)Ed(a.kC,b.kC);else Hh(a.kC,b.kC);}else if(!c)Hn(a.kC,b.kC);else{GU(a.kC,b.kC);Ed(a.kC,b.kC);a.mS=0;}a:{if(!a.nJ){d=b.nJ;if((!d?b.kF:null)!==null){c=a.kY;if(!(c^b.kY)){if(!c){Ed(a.kF,!d?b.kF:null);break a;}Hh(a.kF,!d?b.kF:null);break a;}if(!c){Hn(a.kF,!d?b.kF:null);break a;}GU(a.kF,!d?b.kF:null);Ed(a.kF,!b.nJ?b.kF:null);a.kY=0;break a;}}c=a.kY;e=a.lG;if(e!==null){if(!c){f=new PU;f.zk=a;f.x5=c;f.wm=e;f.xe=b;b=new Bn;b.ky=Ba(64);f.kC
=b;a.lG=f;}else{f=new PV;f.zL=a;f.xS=c;f.v8=e;f.x2=b;b=new Bn;b.ky=Ba(64);f.kC=b;a.lG=f;}}else{if(!a.oh&&(a.kF.l7?0:1)){if(!c){e=new PQ;e.zG=a;e.wQ=b;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}else{e=new PR;e.Bb=a;e.wR=b;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}}else if(!c){e=new PW;e.yQ=a;e.yD=b;e.xF=c;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}else{e=new PP;e.xE=a;e.xV=b;e.xg=c;b=new Bn;b.ky=Ba(64);e.kC=b;a.lG=e;}a.nJ=1;}}},
ABS=(a,b)=>{let c;c=a.lG;if(c!==null)return a.kY^c.gg(b);return a.kY^CP(a.kF,b);},
AUj=a=>{if(!a.nJ)return a.kF;return null;},
ADY=a=>{return a.kC;},
AQ3=a=>{let b,c;if(a.lG!==null)return a;b=!a.nJ?a.kF:null;c=new PT;c.y0=a;c.sS=b;b=new Bn;b.ky=Ba(64);c.kC=b;return E7(c,a.kY);},
AK4=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.ke=G(16);c=IC(a.kF,0);while(c>=0){d=(Fq(c)).data;e=0;f=d.length;g=b.kd;Bk(b,g,g+f|0);f=f+e|0;while(e<f){h=b.ke.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.kd;Bk(b,g,g+1|0);b.ke.data[g]=124;c=IC(a.kF,c+1|0);}e=b.kd;if(e>0)VX(b,e-1|0);k=new I;d=b.ke;h=d.data;e=b.kd;g=h.length;if(e>=0&&e<=(g-0|0)){k.kf=L(d.data,0,e);return k;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
AEq=a=>{return a.q3;};
function EV(){Cf.call(this);this.kZ=null;}
let AYq=a=>{return a.kZ;},
APa=(a,b)=>{return !a.kZ.fn(b)&&!a.kr.fn(b)?0:1;},
ARB=(a,b)=>{return 1;},
AKb=a=>{let b;a.mU=1;b=a.kr;if(b!==null&&!b.mU){b=b.fL();if(b!==null){a.kr.mU=1;a.kr=b;}a.kr.e5();}b=a.kZ;if(b!==null){if(!b.mU){b=b.fL();if(b!==null){a.kZ.mU=1;a.kZ=b;}a.kZ.e5();}else if(b instanceof GQ&&b.m3.um)a.kZ=b.kr;}};
function DR(){EV.call(this);this.lu=null;}
let XJ=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.lu.f2()|0)<=d.k4){f=a.lu.f3(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.kr.fJ(b,c,d);if(f>=0)break;b=b-a.lu.f2()|0;e=e+(-1)|0;}return f;},
ABA=a=>{return A(198);};
function FP(){DR.call(this);this.p$=null;}
let ZQ=(a,b,c,d)=>{let e,f,g,h,i;e=a.p$;f=e.pg;g=e.pe;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.lu.f2()|0)>d.k4)break a;i=a.lu.f3(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.kr.fJ(b,c,d);if(i>=0)break;b=b-a.lu.f2()|0;h=h+(-1)|0;}return i;}if((b+a.lu.f2()|0)>d.k4){d.m7=1;return (-1);}i=a.lu.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);},
AAp=a=>{return MU(a.p$);};
let DT=F(EV);
let X_=(a,b,c,d)=>{let e;if(!a.kZ.gj(d))return a.kr.fJ(b,c,d);e=a.kZ.fJ(b,c,d);if(e>=0)return e;return a.kr.fJ(b,c,d);},
AGV=a=>{return A(199);};
let FM=F(DR);
let AJD=(a,b,c,d)=>{let e;e=a.kZ.fJ(b,c,d);if(e<0)e=a.kr.fJ(b,c,d);return e;},
AUt=(a,b)=>{a.kr=b;a.kZ.e9(b);};
let VP=F(DR);
let ATy=(a,b,c,d)=>{while((b+a.lu.f2()|0)<=d.k4&&a.lu.f3(b,c)>0){b=b+a.lu.f2()|0;}return a.kr.fJ(b,c,d);},
AKT=(a,b,c,d)=>{let e,f,g;e=a.kr.fB(b,c,d);if(e<0)return (-1);f=e-a.lu.f2()|0;while(f>=b&&a.lu.f3(f,c)>0){g=f-a.lu.f2()|0;e=f;f=g;}return e;};
let NN=F();
let Yz=null,AHf=null,Ub=null;
let Wb=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=Ub.data;if(c>=d.length){e=new KI;e.kg=1;e.kh=1;e.kj=A(68);e.A$=A(68);e.A0=b;B(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof I))g=0;else{f=f;g=b.kf!==f.kf?0:1;}if(g)break;c=c+1|0;}return d[1];},
ADl=()=>{let b,c,d,e,f,g;b=new JF;Yz=b;c=new I5;AHf=c;d=R(Eo(C),194);e=d.data;e[0]=V(C,[A(200),new Un]);e[1]=V(C,[A(201),new U1]);e[2]=V(C,[A(202),new U6]);e[3]=V(C,[A(203),new Jz]);e[4]=V(C,[A(204),c]);e[5]=V(C,[A(205),new JV]);e[6]=V(C,[A(206),new WT]);e[7]=V(C,[A(207),new Kv]);e[8]=V(C,[A(208),new So]);e[9]=V(C,[A(209),new ST]);e[10]=V(C,[A(210),new QG]);e[11]=V(C,[A(211),new Qr]);e[12]=V(C,[A(212),new U_]);e[13]=V(C,[A(213),new W2]);e[14]=V(C,[A(214),new UB]);e[15]=V(C,[A(215),new Uf]);e[16]=V(C,[A(216),
new VB]);e[17]=V(C,[A(217),new Pn]);e[18]=V(C,[A(218),new OZ]);e[19]=V(C,[A(219),new UJ]);e[20]=V(C,[A(220),new UV]);e[21]=V(C,[A(221),new Q4]);e[22]=V(C,[A(222),new SY]);e[23]=V(C,[A(223),new Wv]);e[24]=V(C,[A(224),new US]);e[25]=V(C,[A(225),new RO]);e[26]=V(C,[A(226),new Q3]);e[27]=V(C,[A(227),new WY]);e[28]=V(C,[A(228),b]);e[29]=V(C,[A(229),new IO]);e[30]=V(C,[A(230),new VG]);e[31]=V(C,[A(231),b]);e[32]=V(C,[A(232),new Sr]);e[33]=V(C,[A(233),c]);e[34]=V(C,[A(234),new QY]);f=R(C,2);g=f.data;g[0]=A(235);b=
new Bv;b.kK=0;b.kL=127;g[1]=b;e[35]=f;f=R(C,2);g=f.data;g[0]=A(236);b=new Bv;b.kK=128;b.kL=255;g[1]=b;e[36]=f;f=R(C,2);g=f.data;g[0]=A(237);b=new Bv;b.kK=256;b.kL=383;g[1]=b;e[37]=f;f=R(C,2);g=f.data;g[0]=A(238);b=new Bv;b.kK=384;b.kL=591;g[1]=b;e[38]=f;f=R(C,2);g=f.data;g[0]=A(239);b=new Bv;b.kK=592;b.kL=687;g[1]=b;e[39]=f;f=R(C,2);g=f.data;g[0]=A(240);b=new Bv;b.kK=688;b.kL=767;g[1]=b;e[40]=f;f=R(C,2);g=f.data;g[0]=A(241);b=new Bv;b.kK=768;b.kL=879;g[1]=b;e[41]=f;f=R(C,2);g=f.data;g[0]=A(242);b=new Bv;b.kK
=880;b.kL=1023;g[1]=b;e[42]=f;f=R(C,2);g=f.data;g[0]=A(243);b=new Bv;b.kK=1024;b.kL=1279;g[1]=b;e[43]=f;f=R(C,2);g=f.data;g[0]=A(244);b=new Bv;b.kK=1280;b.kL=1327;g[1]=b;e[44]=f;f=R(C,2);g=f.data;g[0]=A(245);b=new Bv;b.kK=1328;b.kL=1423;g[1]=b;e[45]=f;f=R(C,2);g=f.data;g[0]=A(246);b=new Bv;b.kK=1424;b.kL=1535;g[1]=b;e[46]=f;f=R(C,2);g=f.data;g[0]=A(247);b=new Bv;b.kK=1536;b.kL=1791;g[1]=b;e[47]=f;f=R(C,2);g=f.data;g[0]=A(248);b=new Bv;b.kK=1792;b.kL=1871;g[1]=b;e[48]=f;f=R(C,2);g=f.data;g[0]=A(249);b=new Bv;b.kK
=1872;b.kL=1919;g[1]=b;e[49]=f;f=R(C,2);g=f.data;g[0]=A(250);b=new Bv;b.kK=1920;b.kL=1983;g[1]=b;e[50]=f;f=R(C,2);g=f.data;g[0]=A(251);b=new Bv;b.kK=2304;b.kL=2431;g[1]=b;e[51]=f;f=R(C,2);g=f.data;g[0]=A(252);b=new Bv;b.kK=2432;b.kL=2559;g[1]=b;e[52]=f;f=R(C,2);g=f.data;g[0]=A(253);b=new Bv;b.kK=2560;b.kL=2687;g[1]=b;e[53]=f;f=R(C,2);g=f.data;g[0]=A(254);b=new Bv;b.kK=2688;b.kL=2815;g[1]=b;e[54]=f;f=R(C,2);g=f.data;g[0]=A(255);b=new Bv;b.kK=2816;b.kL=2943;g[1]=b;e[55]=f;f=R(C,2);g=f.data;g[0]=A(256);b=new Bv;b.kK
=2944;b.kL=3071;g[1]=b;e[56]=f;f=R(C,2);g=f.data;g[0]=A(257);b=new Bv;b.kK=3072;b.kL=3199;g[1]=b;e[57]=f;f=R(C,2);g=f.data;g[0]=A(258);b=new Bv;b.kK=3200;b.kL=3327;g[1]=b;e[58]=f;f=R(C,2);g=f.data;g[0]=A(259);b=new Bv;b.kK=3328;b.kL=3455;g[1]=b;e[59]=f;f=R(C,2);g=f.data;g[0]=A(260);b=new Bv;b.kK=3456;b.kL=3583;g[1]=b;e[60]=f;f=R(C,2);g=f.data;g[0]=A(261);b=new Bv;b.kK=3584;b.kL=3711;g[1]=b;e[61]=f;f=R(C,2);g=f.data;g[0]=A(262);b=new Bv;b.kK=3712;b.kL=3839;g[1]=b;e[62]=f;f=R(C,2);g=f.data;g[0]=A(263);b=new Bv;b.kK
=3840;b.kL=4095;g[1]=b;e[63]=f;f=R(C,2);g=f.data;g[0]=A(264);b=new Bv;b.kK=4096;b.kL=4255;g[1]=b;e[64]=f;f=R(C,2);g=f.data;g[0]=A(265);b=new Bv;b.kK=4256;b.kL=4351;g[1]=b;e[65]=f;f=R(C,2);g=f.data;g[0]=A(266);b=new Bv;b.kK=4352;b.kL=4607;g[1]=b;e[66]=f;f=R(C,2);g=f.data;g[0]=A(267);b=new Bv;b.kK=4608;b.kL=4991;g[1]=b;e[67]=f;f=R(C,2);g=f.data;g[0]=A(268);b=new Bv;b.kK=4992;b.kL=5023;g[1]=b;e[68]=f;f=R(C,2);g=f.data;g[0]=A(269);b=new Bv;b.kK=5024;b.kL=5119;g[1]=b;e[69]=f;f=R(C,2);g=f.data;g[0]=A(270);b=new Bv;b.kK
=5120;b.kL=5759;g[1]=b;e[70]=f;f=R(C,2);g=f.data;g[0]=A(271);b=new Bv;b.kK=5760;b.kL=5791;g[1]=b;e[71]=f;f=R(C,2);g=f.data;g[0]=A(272);b=new Bv;b.kK=5792;b.kL=5887;g[1]=b;e[72]=f;f=R(C,2);g=f.data;g[0]=A(273);b=new Bv;b.kK=5888;b.kL=5919;g[1]=b;e[73]=f;f=R(C,2);g=f.data;g[0]=A(274);b=new Bv;b.kK=5920;b.kL=5951;g[1]=b;e[74]=f;f=R(C,2);g=f.data;g[0]=A(275);b=new Bv;b.kK=5952;b.kL=5983;g[1]=b;e[75]=f;f=R(C,2);g=f.data;g[0]=A(276);b=new Bv;b.kK=5984;b.kL=6015;g[1]=b;e[76]=f;f=R(C,2);g=f.data;g[0]=A(277);b=new Bv;b.kK
=6016;b.kL=6143;g[1]=b;e[77]=f;f=R(C,2);g=f.data;g[0]=A(278);b=new Bv;b.kK=6144;b.kL=6319;g[1]=b;e[78]=f;f=R(C,2);g=f.data;g[0]=A(279);b=new Bv;b.kK=6400;b.kL=6479;g[1]=b;e[79]=f;f=R(C,2);g=f.data;g[0]=A(280);b=new Bv;b.kK=6480;b.kL=6527;g[1]=b;e[80]=f;f=R(C,2);g=f.data;g[0]=A(281);b=new Bv;b.kK=6528;b.kL=6623;g[1]=b;e[81]=f;f=R(C,2);g=f.data;g[0]=A(282);b=new Bv;b.kK=6624;b.kL=6655;g[1]=b;e[82]=f;f=R(C,2);g=f.data;g[0]=A(283);b=new Bv;b.kK=6656;b.kL=6687;g[1]=b;e[83]=f;f=R(C,2);g=f.data;g[0]=A(284);b=new Bv;b.kK
=7424;b.kL=7551;g[1]=b;e[84]=f;f=R(C,2);g=f.data;g[0]=A(285);b=new Bv;b.kK=7552;b.kL=7615;g[1]=b;e[85]=f;f=R(C,2);g=f.data;g[0]=A(286);b=new Bv;b.kK=7616;b.kL=7679;g[1]=b;e[86]=f;f=R(C,2);g=f.data;g[0]=A(287);b=new Bv;b.kK=7680;b.kL=7935;g[1]=b;e[87]=f;f=R(C,2);g=f.data;g[0]=A(288);b=new Bv;b.kK=7936;b.kL=8191;g[1]=b;e[88]=f;f=R(C,2);g=f.data;g[0]=A(289);b=new Bv;b.kK=8192;b.kL=8303;g[1]=b;e[89]=f;f=R(C,2);g=f.data;g[0]=A(290);b=new Bv;b.kK=8304;b.kL=8351;g[1]=b;e[90]=f;f=R(C,2);g=f.data;g[0]=A(291);b=new Bv;b.kK
=8352;b.kL=8399;g[1]=b;e[91]=f;f=R(C,2);g=f.data;g[0]=A(292);b=new Bv;b.kK=8400;b.kL=8447;g[1]=b;e[92]=f;f=R(C,2);g=f.data;g[0]=A(293);b=new Bv;b.kK=8448;b.kL=8527;g[1]=b;e[93]=f;f=R(C,2);g=f.data;g[0]=A(294);b=new Bv;b.kK=8528;b.kL=8591;g[1]=b;e[94]=f;f=R(C,2);g=f.data;g[0]=A(295);b=new Bv;b.kK=8592;b.kL=8703;g[1]=b;e[95]=f;f=R(C,2);g=f.data;g[0]=A(296);b=new Bv;b.kK=8704;b.kL=8959;g[1]=b;e[96]=f;f=R(C,2);g=f.data;g[0]=A(297);b=new Bv;b.kK=8960;b.kL=9215;g[1]=b;e[97]=f;f=R(C,2);g=f.data;g[0]=A(298);b=new Bv;b.kK
=9216;b.kL=9279;g[1]=b;e[98]=f;f=R(C,2);g=f.data;g[0]=A(299);b=new Bv;b.kK=9280;b.kL=9311;g[1]=b;e[99]=f;f=R(C,2);g=f.data;g[0]=A(300);b=new Bv;b.kK=9312;b.kL=9471;g[1]=b;e[100]=f;f=R(C,2);g=f.data;g[0]=A(301);b=new Bv;b.kK=9472;b.kL=9599;g[1]=b;e[101]=f;f=R(C,2);g=f.data;g[0]=A(302);b=new Bv;b.kK=9600;b.kL=9631;g[1]=b;e[102]=f;e[103]=V(C,[A(303),BI(9632,9727)]);e[104]=V(C,[A(304),BI(9728,9983)]);e[105]=V(C,[A(305),BI(9984,10175)]);e[106]=V(C,[A(306),BI(10176,10223)]);e[107]=V(C,[A(307),BI(10224,10239)]);e[108]
=V(C,[A(308),BI(10240,10495)]);e[109]=V(C,[A(309),BI(10496,10623)]);e[110]=V(C,[A(310),BI(10624,10751)]);e[111]=V(C,[A(311),BI(10752,11007)]);e[112]=V(C,[A(312),BI(11008,11263)]);e[113]=V(C,[A(313),BI(11264,11359)]);e[114]=V(C,[A(314),BI(11392,11519)]);e[115]=V(C,[A(315),BI(11520,11567)]);e[116]=V(C,[A(316),BI(11568,11647)]);e[117]=V(C,[A(317),BI(11648,11743)]);e[118]=V(C,[A(318),BI(11776,11903)]);e[119]=V(C,[A(319),BI(11904,12031)]);e[120]=V(C,[A(320),BI(12032,12255)]);e[121]=V(C,[A(321),BI(12272,12287)]);e[122]
=V(C,[A(322),BI(12288,12351)]);e[123]=V(C,[A(323),BI(12352,12447)]);e[124]=V(C,[A(324),BI(12448,12543)]);e[125]=V(C,[A(325),BI(12544,12591)]);e[126]=V(C,[A(326),BI(12592,12687)]);e[127]=V(C,[A(327),BI(12688,12703)]);e[128]=V(C,[A(328),BI(12704,12735)]);e[129]=V(C,[A(329),BI(12736,12783)]);e[130]=V(C,[A(330),BI(12784,12799)]);e[131]=V(C,[A(331),BI(12800,13055)]);e[132]=V(C,[A(332),BI(13056,13311)]);e[133]=V(C,[A(333),BI(13312,19893)]);e[134]=V(C,[A(334),BI(19904,19967)]);e[135]=V(C,[A(335),BI(19968,40959)]);e[136]
=V(C,[A(336),BI(40960,42127)]);e[137]=V(C,[A(337),BI(42128,42191)]);e[138]=V(C,[A(338),BI(42752,42783)]);e[139]=V(C,[A(339),BI(43008,43055)]);e[140]=V(C,[A(340),BI(44032,55203)]);e[141]=V(C,[A(341),BI(55296,56191)]);e[142]=V(C,[A(342),BI(56192,56319)]);e[143]=V(C,[A(343),BI(56320,57343)]);e[144]=V(C,[A(344),BI(57344,63743)]);e[145]=V(C,[A(345),BI(63744,64255)]);e[146]=V(C,[A(346),BI(64256,64335)]);e[147]=V(C,[A(347),BI(64336,65023)]);e[148]=V(C,[A(348),BI(65024,65039)]);e[149]=V(C,[A(349),BI(65040,65055)]);e[150]
=V(C,[A(350),BI(65056,65071)]);e[151]=V(C,[A(351),BI(65072,65103)]);e[152]=V(C,[A(352),BI(65104,65135)]);e[153]=V(C,[A(353),BI(65136,65279)]);e[154]=V(C,[A(354),BI(65280,65519)]);e[155]=V(C,[A(49),BI(0,1114111)]);f=R(C,2);g=f.data;g[0]=A(355);b=new QU;AKh(b);g[1]=b;e[156]=f;e[157]=V(C,[A(356),Ch(0,1)]);e[158]=V(C,[A(357),He(62,1)]);e[159]=V(C,[A(358),Ch(1,1)]);e[160]=V(C,[A(359),Ch(2,1)]);e[161]=V(C,[A(360),Ch(3,0)]);e[162]=V(C,[A(361),Ch(4,0)]);e[163]=V(C,[A(362),Ch(5,1)]);e[164]=V(C,[A(363),He(448,1)]);e[165]
=V(C,[A(364),Ch(6,1)]);e[166]=V(C,[A(365),Ch(7,0)]);e[167]=V(C,[A(366),Ch(8,1)]);e[168]=V(C,[A(367),He(3584,1)]);e[169]=V(C,[A(368),Ch(9,1)]);e[170]=V(C,[A(369),Ch(10,1)]);e[171]=V(C,[A(370),Ch(11,1)]);e[172]=V(C,[A(371),He(28672,0)]);e[173]=V(C,[A(372),Ch(12,0)]);e[174]=V(C,[A(373),Ch(13,0)]);e[175]=V(C,[A(374),Ch(14,0)]);e[176]=V(C,[A(375),AG4(983040,1,1)]);e[177]=V(C,[A(376),Ch(15,0)]);e[178]=V(C,[A(377),Ch(16,1)]);e[179]=V(C,[A(378),Ch(18,1)]);e[180]=V(C,[A(379),AI2(19,0,1)]);e[181]=V(C,[A(380),He(1643118592,
1)]);e[182]=V(C,[A(381),Ch(20,0)]);e[183]=V(C,[A(382),Ch(21,0)]);e[184]=V(C,[A(383),Ch(22,0)]);e[185]=V(C,[A(384),Ch(23,0)]);e[186]=V(C,[A(385),Ch(24,1)]);e[187]=V(C,[A(386),He(2113929216,1)]);e[188]=V(C,[A(387),Ch(25,1)]);e[189]=V(C,[A(388),Ch(26,0)]);e[190]=V(C,[A(389),Ch(27,0)]);e[191]=V(C,[A(390),Ch(28,1)]);e[192]=V(C,[A(391),Ch(29,0)]);e[193]=V(C,[A(392),Ch(30,0)]);Ub=d;};
function Bx(){let a=this;C.call(a);a.oL=null;a.qE=null;}
let AKh=a=>{return;},
AXq=(a,b)=>{if(!b&&a.oL===null)a.oL=a.fS();else if(b&&a.qE===null)a.qE=E7(a.fS(),1);if(b)return a.qE;return a.oL;};
function OY(){let a=this;Id.call(a);a.pg=0;a.pe=0;}
let MU=a=>{let b,c,d,e,f,g,h;b=a.pg;c=a.pe;if(c==2147483647)d=A(68);else{d=new Be;d.ke=G(20);d=(J(d,d.kd,c,10)).T();}e=new K;e.ke=G(16);c=e.kd;Bk(e,c,c+1|0);e.ke.data[c]=123;J(e,e.kd,b,10);b=e.kd;Bk(e,b,b+1|0);e.ke.data[b]=44;f=e.kd;if(d===null)d=A(2);E(e,f,d);b=e.kd;Bk(e,b,b+1|0);g=e.ke;h=g.data;h[b]=125;d=new I;b=e.kd;c=h.length;if(b>=0&&b<=(c-0|0)){d.kf=L(g.data,0,b);return d;}d=new H;d.kg=1;d.kh=1;Bl(d);B(d);};
let PF=F(Cf);
let AH7=(a,b,c,d)=>{return b;},
AMl=a=>{return A(393);},
AMz=(a,b)=>{return 0;};
function Bn(){let a=this;C.call(a);a.ky=null;a.l7=0;}
let Ne=(a,b)=>{let c,d,e;if(b<0){c=new H;c.kg=1;c.kh=1;B(c);}d=b/32|0;if(b>=a.l7){JR(a,d+1|0);a.l7=b+1|0;}e=a.ky.data;e[d]=e[d]|1<<(b%32|0);},
Ji=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BW(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.l7){JR(a,e+1|0);a.l7=c;}if(d==e){f=a.ky.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.ky.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new H;i.kg=1;i.kh=1;B(i);},
Od=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.kg=1;c.kh=1;B(c);}d=b/32|0;e=a.ky.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.l7-1|0))Iw(a);}},
Yu=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.l7;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.ky.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.ky.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}Iw(a);return;}i=new H;i.kg=1;i.kh=1;B(i);},
CP=(a,b)=>{let c,d,e;if(b<0){c=new H;c.kg=1;c.kh=1;B(c);}d=b/32|0;e=a.ky.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
IC=(a,b)=>{let c,d,e,f,g;if(b<0){c=new H;c.kg=1;c.kh=1;B(c);}d=a.l7;if(b>=d)return (-1);e=b/32|0;f=a.ky.data;g=f[e]>>>(b%32|0)|0;if(g)return Er(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+Er(f[g])|0;g=g+1|0;}return (-1);},
AM$=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new H;c.kg=1;c.kh=1;B(c);}d=a.l7;if(b>=d)return b;e=b/32|0;f=a.ky.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return Er(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+Er(f[h]^(-1))|0;h=h+1|0;}return d;},
JR=(a,b)=>{let c,d,e,f,g,h;c=a.ky.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=Ba(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.ky=g;},
Iw=a=>{let b,c,d;b=(a.l7+31|0)/32|0;a.l7=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Pk(a.ky.data[c]);if(d<32)break;c=c+(-1)|0;a.l7=a.l7-32|0;}a.l7=a.l7-d|0;}},
JQ=(a,b)=>{let c,d,e,f,g;c=a.ky.data;d=c.length;e=b.ky.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
Ed=(a,b)=>{let c,d,e,f,g,h,i;c=a.ky.data;d=c.length;e=b.ky.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.l7;i=b.l7;if(h<i)i=h;a.l7=i;Iw(a);},
Hn=(a,b)=>{let c,d,e,f,g;c=a.ky.data;d=c.length;e=b.ky.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}Iw(a);},
Hh=(a,b)=>{let c,d,e,f,g;c=a.l7;d=b.l7;if(c>d)d=c;a.l7=d;JR(a,(d+31|0)/32|0);e=a.ky.data;c=e.length;f=b.ky.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
GU=(a,b)=>{let c,d,e,f,g;c=a.l7;d=b.l7;if(c>d)d=c;a.l7=d;JR(a,(d+31|0)/32|0);e=a.ky.data;c=e.length;f=b.ky.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}Iw(a);};
function OG(){let a=this;Cr.call(a);a.sW=null;a.tY=0;}
let AGB=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.nh;f=d.k4;g=b+1|0;f=BW(g,f);if(f>0){d.m7=1;return (-1);}if(b>=0&&b<c.kf.length){h=c.kf.charCodeAt(b);if(!a.sW.gg(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.kf.length){if((c.kf.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new Y;c.kg=1;c.kh=1;B(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.kf.length){if(!((c.kf.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);}}return a.kr.fJ(g,c,d);}c=new Y;c.kg
=1;c.kh=1;B(c);},
AML=a=>{let b,c,d,e,f,g,h,i;b=!a.tY?A(394):A(395);c=a.sW.T();d=new K;d.ke=G(16);E(d,d.kd,A(396));E(d,d.kd,b);e=d.kd;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
function HL(){let a=this;Cr.call(a);a.qa=null;a.p3=null;}
let ZF=(a,b,c,d)=>{let e;e=a.qa.fJ(b,c,d);if(e<0)e=AGB(a.p3,b,c,d);if(e>=0)return e;return (-1);},
AL8=(a,b)=>{a.kr=b;a.p3.kr=b;a.qa.e9(b);},
ANc=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.qa;c=a.p3;d=new K;d.ke=G(16);E(d,d.kd,A(397));e=d.kd;if(b===null)b=A(2);else{f=b.kz;b=b.fK();g=new K;Fi(g);GR(g,60);Jj(g,f);GR(g,58);Jj(g,b);GR(g,62);b=ML(g);}E(d,e,b);E(d,d.kd,A(398));e=d.kd;if(c===null)b=A(2);else{b=c.kz;f=!c.tY?A(394):A(395);c=c.sW.T();g=EF();MG(MG(MG(g,A(396)),f),c);f=Et(g);c=new K;Fi(c);GR(c,60);Jj(c,b);GR(c,58);Jj(c,f);GR(c,62);b=ML(c);}E(d,e,b);b=new I;h=d.ke;i=h.data;j=d.kd;k=i.length;if(j>=0&&j<=(k-0|0)){b.kf=L(h.data,0,j);return b;}b=new H;b.kg=
1;b.kh=1;Bl(b);B(b);},
AA0=(a,b)=>{return 1;},
AAk=(a,b)=>{return 1;};
function D6(){let a=this;Cr.call(a);a.m4=null;a.qP=0;}
let ADK=(a,b,c,d)=>{let e,f,g,h;a:{e=d.k4;if(b<e){f=b+1|0;if(b>=0&&b<c.kf.length){g=c.kf.charCodeAt(b);if(a.gg(g)){h=a.kr.fJ(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.kf.length){f=c.kf.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.gg(((g&1023)<<10|f&1023)+65536|0))break a;else return a.kr.fJ(e,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}}return (-1);},
ASB=a=>{let b,c,d,e,f,g,h,i;b=!a.qP?A(394):A(395);c=a.m4.T();d=new K;d.ke=G(16);E(d,d.kd,A(396));E(d,d.kd,b);e=d.kd;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
AEM=(a,b)=>{return a.m4.gg(b);},
Zu=(a,b)=>{let c,d;if(b instanceof EL)return a.m4.gg(b.qq);if(b instanceof Es)return a.m4.gg(b.mT);if(b instanceof D6){c=a.m4;b=b.m4;return c.gd()!==null&&b.gd()!==null?JQ(c.gd(),b.gd()):1;}if(!(b instanceof Ev))return 1;c=a.m4;d=b.nR;return c.gd()!==null&&d.gd()!==null?JQ(c.gd(),d.gd()):1;},
AWv=a=>{return a.m4;},
APY=(a,b)=>{a.kr=b;},
AD4=(a,b)=>{return 1;};
let KC=F(D6);
let AHs=(a,b)=>{let c;c=a.m4;if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b);if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}return c.gg(CD(B1,b));},
AS9=a=>{let b,c,d,e,f,g,h,i;b=!a.qP?A(394):A(395);c=a.m4.T();d=new K;d.ke=G(16);E(d,d.kd,A(399));E(d,d.kd,b);e=d.kd;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
function Lb(){let a=this;CF.call(a);a.s1=null;a.uL=0;}
let AH$=(a,b,c)=>{let d;d=a.s1;if(b>=0&&b<c.kf.length){b=c.kf.charCodeAt(b);if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b)&65535;if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}return !d.gg(CD(B1,b)&65535)?(-1):1;}c=new Y;c.kg=1;c.kh=1;B(c);},
AAD=a=>{let b,c,d,e,f,g,h,i;b=!a.uL?A(394):A(395);c=a.s1.T();d=new K;d.ke=G(16);E(d,d.kd,A(399));E(d,d.kd,b);e=d.kd;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
function Ev(){let a=this;CF.call(a);a.nR=null;a.vf=0;}
let W9=(a,b,c)=>{let d;d=a.nR;if(b>=0&&b<c.kf.length)return !d.gg(c.kf.charCodeAt(b))?(-1):1;c=new Y;c.kg=1;c.kh=1;B(c);},
AIq=a=>{let b,c,d,e,f,g,h,i;b=!a.vf?A(394):A(395);c=a.nR.T();d=new K;d.ke=G(16);E(d,d.kd,A(396));E(d,d.kd,b);e=d.kd;if(c===null)c=A(2);E(d,e,c);b=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
AMB=(a,b)=>{let c,d;if(b instanceof Es)return a.nR.gg(b.mT);if(b instanceof Ev){c=a.nR;b=b.nR;return c.gd()!==null&&b.gd()!==null?JQ(c.gd(),b.gd()):1;}if(!(b instanceof D6)){if(!(b instanceof EL))return 1;return 0;}c=a.nR;d=b.m4;return c.gd()!==null&&d.gd()!==null?JQ(c.gd(),d.gd()):1;};
function IX(){let a=this;Cr.call(a);a.o3=null;a.oU=null;a.r8=0;}
let AJC=(a,b)=>{a.kr=b;},
AOL=a=>{let b,c,d,e,f,g,h,i;if(a.oU===null){b=new I;c=a.o3;b.kf=L(c.data,0,c.data.length);a.oU=b;}d=a.oU;b=new K;b.ke=G(16);E(b,b.kd,A(400));e=b.kd;if(d===null)d=A(2);E(b,e,d);f=new I;c=b.ke;g=c.data;h=b.kd;i=g.length;if(h>=0&&h<=(i-0|0)){f.kf=L(c.data,0,h);return f;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
Xu=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.k4;f=Ba(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.kf.length){j=c.kf.charCodeAt(b);k=ACK(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.r8;if(b!=m)return (-1);while(true){if(l>=m)return a.kr.fJ(i,c,d);if(f[l]!=a.o3.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.kf.length){j=c.kf.charCodeAt(i);g=j-4449|0;}else{c=new Y;c.kg=1;c.kh=1;B(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.kf.length){j=c.kf.charCodeAt(b);h
=j-4519|0;}else{c=new Y;c.kg=1;c.kh=1;B(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.r8==3){m=k[0];f=a.o3.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.kr.fJ(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.r8==2){m=k[0];f=a.o3.data;if(m==f[0]&&k[1]==f[1]){b=a.kr.fJ(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);},
AAM=(a,b)=>{let c,d,e;a:{if(b instanceof IX){b=b;if(b.oU===null){c=new I;d=b.o3;c.kf=L(d.data,0,d.data.length);b.oU=c;}c=b.oU;if(a.oU===null){b=new I;d=a.o3;b.kf=L(d.data,0,d.data.length);a.oU=b;}b=a.oU;if(c===b)e=1;else if(!(b instanceof I))e=0;else{b=b;e=c.kf!==b.kf?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AQ7=(a,b)=>{return 1;};
function Es(){CF.call(this);this.mT=0;}
let AHL=a=>{return 1;},
AF_=(a,b,c)=>{let d;d=a.mT;if(b>=0&&b<c.kf.length)return d!=c.kf.charCodeAt(b)?(-1):1;c=new Y;c.kg=1;c.kh=1;B(c);},
ADD=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof I){e=d.k4;while(true){if(b>=e)return (-1);f=H_(c,a.mT,b);if(f<0)return (-1);g=a.kr;b=f+1|0;if(g.fJ(b,c,d)>=0)break;}return f;}h=d.k4;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.k4){d.m7=1;e=(-1);}else{e=a.mT;if(b<0)break a;if(b>=c.kf.length)break a;e=e!=c.kf.charCodeAt(b)?(-1):1;e=e<0?(-1):a.kr.fJ(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new Y;U(c);B(c);},
AHV=(a,b,c,d,e)=>{let f;if(d instanceof I){a:{while(true){if(c<b)return (-1);c=Ff(d,a.mT,c);if(c<0)break a;if(c<b)break a;if(a.kr.fJ(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.k4){e.m7=1;f=(-1);}else{f=a.mT;if(c<0)break b;if(c>=d.kf.length)break b;f=f!=d.kf.charCodeAt(c)?(-1):1;f=f<0?(-1):a.kr.fJ(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Y;U(d);B(d);},
ARp=a=>{let b,c,d,e,f,g,h;b=a.mT;c=new K;c.ke=G(16);d=c.kd;Bk(c,d,d+1|0);e=c.ke;f=e.data;f[d]=b;g=new I;d=c.kd;h=f.length;if(d>=0&&d<=(h-0|0)){g.kf=L(e.data,0,d);return g;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
AQW=(a,b)=>{let c,d,e,f;if(b instanceof Es)return b.mT!=a.mT?0:1;if(!(b instanceof Ev)){if(b instanceof D6)return b.gg(a.mT);if(!(b instanceof EL))return 1;return 0;}b=b;c=a.mT;d=new I;e=G(1);f=e.data;f[0]=c;d.kf=L(e.data,0,f.length);b=b.nR;if(0>=d.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}return (!b.gg(d.kf.charCodeAt(0))?(-1):1)<=0?0:1;};
function NS(){CF.call(this);this.sr=0;}
let Xh=(a,b,c)=>{let d;d=a.sr;if(b>=0&&b<c.kf.length){b=c.kf.charCodeAt(b);if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}b=CD(B0,b)&65535;if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}return d!=(CD(B1,b)&65535)?(-1):1;}c=new Y;c.kg=1;c.kh=1;B(c);},
AL5=a=>{let b,c,d,e,f,g,h;b=a.sr;c=new K;c.ke=G(16);E(c,c.kd,A(401));d=c.kd;Bk(c,d,d+1|0);e=c.ke;f=e.data;f[d]=b;g=new I;d=c.kd;h=f.length;if(d>=0&&d<=(h-0|0)){g.kf=L(e.data,0,d);return g;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);};
function Kz(){let a=this;CF.call(a);a.tH=0;a.uc=0;}
let X1=(a,b,c)=>{let d;d=a.tH;if(b>=0&&b<c.kf.length){a:{b:{if(d!=c.kf.charCodeAt(b)){d=a.uc;if(b<0)break a;if(b>=c.kf.length)break a;if(d!=c.kf.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);},
AGw=a=>{let b,c,d,e,f,g,h;b=a.tH;c=new K;c.ke=G(16);E(c,c.kd,A(402));d=c.kd;Bk(c,d,d+1|0);e=c.ke;f=e.data;f[d]=b;g=new I;d=c.kd;h=f.length;if(d>=0&&d<=(h-0|0)){g.kf=L(e.data,0,d);return g;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);};
function FU(){let a=this;Cr.call(a);a.pZ=0;a.oz=null;a.pJ=null;a.pF=0;}
let ASW=(a,b)=>{a.kr=b;},
AL9=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=Ba(4);f=d.k4;if(b>=f)return (-1);g=Me(a,b,c,f);h=b+a.pZ|0;i=Q1.gv(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Dw(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=Me(a,h,c,f);while(b<4){if(!AMK(g)){k=b+1|0;i[b]=g;}else{j=(Q1.gv(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.pZ|0;if(h>=f){b=k;break a;}g=Me(a,h,c,f);b=k;}}}if(b!=a.pF)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.kr.fJ(h,c,d);if(j[g]!=a.pJ.data[g])break;g
=g+1|0;}return (-1);},
ALM=a=>{let b,c,d,e,f,g,h,i;if(a.oz===null){b=new K;b.ke=G(16);c=0;while(c<a.pF){d=Fq(a.pJ.data[c]);e=d.data.length;KJ(b,b.kd,d,0,e);c=c+1|0;}f=new I;d=b.ke;g=d.data;h=b.kd;e=g.length;if(h>=0&&h<=(e-0|0)){f.kf=L(d.data,0,h);a.oz=f;}else{b=new H;U(b);B(b);}}i=a.oz;b=new K;b.ke=G(16);E(b,b.kd,A(403));c=b.kd;if(i===null)i=A(2);E(b,c,i);f=new I;d=b.ke;g=d.data;h=b.kd;e=g.length;if(h>=0&&h<=(e-0|0)){f.kf=L(d.data,0,h);return f;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
Me=(a,b,c,d)=>{let e,f,g,h;a:{a.pZ=1;if(b>=(d-1|0)){if(b>=0&&b<c.kf.length){e=c.kf.charCodeAt(b);break a;}c=new Y;c.kg=1;c.kh=1;B(c);}d=b+1|0;if(b>=0&&b<c.kf.length){e=c.kf.charCodeAt(b);if(d>=0&&d<c.kf.length){f=c.kf.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=AAZ(g,0,h.length);a.pZ=2;}break a;}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}return e;},
AIa=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof FU){b=b;if(b.oz===null){c=new K;c.ke=G(16);d=0;while(d<b.pF){e=Fq(b.pJ.data[d]);f=e.data.length;KJ(c,c.kd,e,0,f);d=d+1|0;}g=new I;e=c.ke;h=e.data;i=c.kd;f=h.length;if(i>=0&&i<=(f-0|0)){g.kf=L(e.data,0,i);b.oz=g;}else{b=new H;U(b);B(b);}}g=b.oz;if(a.oz===null){b=new K;b.ke=G(16);d=0;while(d<a.pF){e=Fq(a.pJ.data[d]);f=e.data.length;KJ(b,b.kd,e,0,f);d=d+1|0;}c=new I;e=b.ke;h=e.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0)){c.kf=L(e.data,0,f);a.oz=c;}else{b=new H;U(b);B(b);}}b
=a.oz;if(g===b)d=1;else if(!(b instanceof I))d=0;else{b=b;d=g.kf!==b.kf?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
ANX=(a,b)=>{return 1;};
let Wu=F(FU);
let TZ=F(FU);
let W1=F(DT);
let ACa=(a,b,c,d)=>{let e;while(true){e=a.kZ.fJ(b,c,d);if(e<=0)break;b=e;}return a.kr.fJ(b,c,d);};
let QL=F(DT);
let AKF=(a,b,c,d)=>{let e;e=a.kZ.fJ(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.kZ.fJ(e,c,d);if(b<=e)break;e=b;}b=e;}return a.kr.fJ(b,c,d);};
let Hk=F(DT);
let APR=(a,b,c,d)=>{let e;if(!a.kZ.gj(d))return a.kr.fJ(b,c,d);e=a.kZ.fJ(b,c,d);if(e>=0)return e;return a.kr.fJ(b,c,d);},
ARQ=(a,b)=>{a.kr=b;a.kZ.e9(b);};
let Qu=F(Hk);
let AHT=(a,b,c,d)=>{let e;e=a.kZ.fJ(b,c,d);if(e<=0)e=b;return a.kr.fJ(e,c,d);},
ALf=(a,b)=>{a.kr=b;};
function GG(){let a=this;DT.call(a);a.oC=null;a.nM=0;}
let AUd=(a,b,c,d)=>{let e,f,g,h;e=a.nM;e=d.od.data[e];if(!a.kZ.gj(d))return a.kr.fJ(b,c,d);if(e>=a.oC.pe)return a.kr.fJ(b,c,d);f=a.nM;e=e+1|0;d.od.data[f]=e;g=a.kZ.fJ(b,c,d);if(g>=0){b=a.nM;d.od.data[b]=0;return g;}g=a.nM;e=e+(-1)|0;h=d.od.data;h[g]=e;if(e>=a.oC.pg)return a.kr.fJ(b,c,d);h[g]=0;return (-1);},
AR0=a=>{return MU(a.oC);};
let O1=F(GG);
let AGW=(a,b,c,d)=>{let e,f,g;e=0;f=a.oC.pe;a:{while(true){g=a.kZ.fJ(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.oC.pg)return (-1);return a.kr.fJ(b,c,d);};
let Sl=F(DT);
let ATb=(a,b,c,d)=>{let e;if(!a.kZ.gj(d))return a.kr.fJ(b,c,d);e=a.kr.fJ(b,c,d);if(e>=0)return e;return a.kZ.fJ(b,c,d);};
let Ru=F(Hk);
let AA2=(a,b,c,d)=>{let e;if(!a.kZ.gj(d))return a.kr.fJ(b,c,d);e=a.kr.fJ(b,c,d);if(e<0)e=a.kZ.fJ(b,c,d);return e;};
let UE=F(GG);
let Y6=(a,b,c,d)=>{let e,f,g;e=a.nM;f=d.od.data[e];if(!a.kZ.gj(d))return a.kr.fJ(b,c,d);g=a.oC;if(f>=g.pe){e=a.nM;d.od.data[e]=0;return a.kr.fJ(b,c,d);}if(f<g.pg){e=a.nM;d.od.data[e]=f+1|0;e=a.kZ.fJ(b,c,d);}else{e=a.kr.fJ(b,c,d);if(e>=0){b=a.nM;d.od.data[b]=0;return e;}e=a.nM;d.od.data[e]=f+1|0;e=a.kZ.fJ(b,c,d);}return e;};
let Sm=F(EV);
let ATS=(a,b,c,d)=>{let e;e=d.k4;if(e>b)return a.kr.f5(b,e,c,d);return a.kr.fJ(b,c,d);},
AP$=(a,b,c,d)=>{let e;e=d.k4;if(a.kr.f5(b,e,c,d)>=0)return b;return (-1);},
ANk=a=>{return A(404);};
function PO(){EV.call(this);this.sV=null;}
let AMD=(a,b,c,d)=>{let e,f,g;e=d.k4;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.sV;if(f<0)break;if(f>=c.kf.length)break;if(g.gz(c.kf.charCodeAt(f)))break a;f=f+1|0;}c=new Y;c.kg=1;c.kh=1;B(c);}if(f>=0)e=f;if(e>b)return a.kr.f5(b,e,c,d);return a.kr.fJ(b,c,d);},
XC=(a,b,c,d)=>{let e,f,g,h,i;e=d.k4;f=a.kr.fB(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.sV;if(g<0)break;if(g>=c.kf.length)break;if(h.gz(c.kf.charCodeAt(g)))break a;g=g+1|0;}c=new Y;c.kg=1;c.kh=1;B(c);}if(g>=0)e=g;g=a.kr.f5(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.sV;if(i<0)break;if(i>=c.kf.length)break;if(d.gz(c.kf.charCodeAt(i)))break b;i=i+(-1)|0;}c=new Y;c.kg=1;c.kh=1;B(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;},
AOV=a=>{return A(405);};
let H4=F();
let GS=null,GE=null;
let W3=F(DR);
let Y_=(a,b,c,d)=>{let e;a:{while(true){if((b+a.lu.f2()|0)>d.k4)break a;e=a.lu.f3(b,c);if(e<1)break;b=b+e|0;}}return a.kr.fJ(b,c,d);};
let VK=F(FM);
let AKy=(a,b,c,d)=>{let e;if((b+a.lu.f2()|0)<=d.k4){e=a.lu.f3(b,c);if(e>=1)b=b+e|0;}return a.kr.fJ(b,c,d);};
let Qk=F(FP);
let APc=(a,b,c,d)=>{let e,f,g,h,i;e=a.p$;f=e.pg;g=e.pe;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.lu.f2()|0)>d.k4)break a;i=a.lu.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.kr.fJ(b,c,d);}if((b+a.lu.f2()|0)>d.k4){d.m7=1;return (-1);}i=a.lu.f3(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let Rm=F(DR);
let AMt=(a,b,c,d)=>{let e;while(true){e=a.kr.fJ(b,c,d);if(e>=0)break;if((b+a.lu.f2()|0)<=d.k4){e=a.lu.f3(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let T3=F(FM);
let Zl=(a,b,c,d)=>{let e;e=a.kr.fJ(b,c,d);if(e>=0)return e;return a.kZ.fJ(b,c,d);};
let R3=F(FP);
let APv=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.p$;f=e.pg;g=e.pe;h=0;while(true){if(h>=f){a:{while(true){i=a.kr.fJ(b,c,d);if(i>=0)break;if((b+a.lu.f2()|0)<=d.k4){i=a.lu.f3(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.lu.f2()|0)>d.k4){d.m7=1;return (-1);}j=a.lu.f3(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let L8=F(Cf);
let AI0=(a,b,c,d)=>{if(b&&!(d.pW&&b==d.nh))return (-1);return a.kr.fJ(b,c,d);},
AHa=(a,b)=>{return 0;},
AKz=a=>{return A(406);};
function Lw(){Cf.call(this);this.vF=0;}
let AAh=(a,b,c,d)=>{let e,f,g;if(b>=d.k4)e=32;else if(b>=0&&b<c.kf.length)e=c.kf.charCodeAt(b);else{c=new Y;c.kg=1;c.kh=1;B(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.kf.length)f=c.kf.charCodeAt(f);else{c=new Y;c.kg=1;c.kh=1;B(c);}}g=d.tb?0:d.nh;return (e!=32&&!Rx(a,e,b,g,c)?0:1)^(f!=32&&!Rx(a,f,b-1|0,g,c)?0:1)^a.vF?(-1):a.kr.fJ(b,c,d);},
AAH=(a,b)=>{return 0;},
AT$=a=>{return A(407);},
Rx=(a,b,c,d,e)=>{let f;a:{b:{switch(C0(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(C0(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.kf.length)break c;e:{f:{f=e.kf.charCodeAt(c);switch(C0(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(C0(f)!=6)return 1;}}return 1;}e=new Y;e.kg=1;e.kh=1;B(e);}return 0;};
let PI=F(Cf);
let AHy=(a,b,c,d)=>{if(b!=d.se)return (-1);return a.kr.fJ(b,c,d);},
AT6=(a,b)=>{return 0;},
ZZ=a=>{return A(408);};
function NQ(){Cf.call(this);this.qI=0;}
let ANy=(a,b,c,d)=>{let e,f,g;e=!d.pW?c.kf.length:d.k4;if(b>=e){f=a.qI;d.lM.data[f]=0;return a.kr.fJ(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.kf.length){if(c.kf.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.kf.length){if(c.kf.charCodeAt(g)!=10)break a;f=a.qI;d.lM.data[f]=0;return a.kr.fJ(b,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}}b:{c:{if(e==1){if(b>=0&&b<c.kf.length){f=c.kf.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new Y;c.kg
=1;c.kh=1;B(c);}}return (-1);}e=a.qI;d.lM.data[e]=0;return a.kr.fJ(b,c,d);},
ABX=(a,b)=>{let c,d,e;c=a.qI;d=b.lM.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AJK=a=>{return A(409);};
let VZ=F(Cf);
let ALX=(a,b,c,d)=>{if(b<(!d.tb?d.k4:c.kf.length))return (-1);d.m7=1;d.AO=1;return a.kr.fJ(b,c,d);},
Xe=(a,b)=>{return 0;},
AFO=a=>{return A(410);};
function O8(){Cf.call(this);this.xk=null;}
let ABC=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.k4){if(!b)break b;if(d.pW&&b==d.nh)break b;e=a.xk;f=b-1|0;if(f>=0&&f<c.kf.length){f=c.kf.charCodeAt(f);if(b<0)break a;if(b>=c.kf.length)break a;if(!e.gB(f,c.kf.charCodeAt(b)))break c;else break b;}c=new Y;c.kg=1;c.kh=1;B(c);}}return (-1);}return a.kr.fJ(b,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);},
AFh=(a,b)=>{return 0;},
Zz=a=>{return A(411);};
let VV=F(Cr);
let ATg=(a,b,c,d)=>{let e,f,g,h,i;e=d.k4;f=b+1|0;if(f>e){d.m7=1;return (-1);}if(b>=0&&b<c.kf.length){g=BW(c.kf.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.kf.length){h=c.kf.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.kr.fJ(i,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);}}}return a.kr.fJ(f,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);},
AC4=a=>{return A(412);},
AAP=(a,b)=>{a.kr=b;},
ALo=a=>{return (-2147483602);},
AAN=(a,b)=>{return 1;};
function Qe(){Cr.call(this);this.uW=null;}
let ALO=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.k4;f=b+1|0;if(f>e){d.m7=1;return (-1);}if(b>=0&&b<c.kf.length){g=c.kf.charCodeAt(b);h=BW(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.kf.length){i=c.kf.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.uW.gz(((g&1023)<<10|i&1023)+65536|0)?(-1):a.kr.fJ(j,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);}}}return a.uW.gz(g)?(-1):a.kr.fJ(f,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);},
AB$=a=>{return A(413);},
AOT=(a,b)=>{a.kr=b;},
W4=a=>{return (-2147483602);},
ATL=(a,b)=>{return 1;};
function VL(){Cf.call(this);this.s7=0;}
let AIm=(a,b,c,d)=>{let e,f;e=!d.pW?c.kf.length:d.k4;if(b>=e){e=a.s7;d.lM.data[e]=0;return a.kr.fJ(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.kf.length){if(c.kf.charCodeAt(b)!=10)break a;else{f=a.s7;d.lM.data[f]=1;return a.kr.fJ(b+1|0,c,d);}}c=new Y;c.kg=1;c.kh=1;B(c);}}return (-1);},
AEU=(a,b)=>{let c,d,e;c=a.s7;d=b.lM.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AJb=a=>{return A(409);};
function Tg(){Cf.call(this);this.tf=0;}
let ALV=(a,b,c,d)=>{let e;if((!d.pW?c.kf.length-b|0:d.k4-b|0)<=0){e=a.tf;d.lM.data[e]=0;return a.kr.fJ(b,c,d);}if(b>=0&&b<c.kf.length){if(c.kf.charCodeAt(b)!=10)return (-1);e=a.tf;d.lM.data[e]=1;return a.kr.fJ(b+1|0,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);},
AEE=(a,b)=>{let c,d,e;c=a.tf;d=b.lM.data;e=!d[c]?0:1;d[c]=(-1);return e;},
YD=a=>{return A(414);};
function Ox(){Cf.call(this);this.rc=0;}
let AG3=(a,b,c,d)=>{let e,f,g;e=!d.pW?c.kf.length-b|0:d.k4-b|0;if(!e){e=a.rc;d.lM.data[e]=0;return a.kr.fJ(b,c,d);}a:{if(e<2){if(b>=0&&b<c.kf.length){f=c.kf.charCodeAt(b);g=97;break a;}c=new Y;c.kg=1;c.kh=1;B(c);}if(b>=0&&b<c.kf.length){f=c.kf.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.kf.length){g=c.kf.charCodeAt(e);break a;}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.rc;d.lM.data[e]=0;return a.kr.fJ(b,c,d);case 13:if(g!=10){e=a.rc;d.lM.data[e]=0;return a.kr.fJ(b,
c,d);}e=a.rc;d.lM.data[e]=0;return a.kr.fJ(b,c,d);default:}return (-1);},
AB2=(a,b)=>{let c,d,e;c=a.rc;d=b.lM.data;e=!d[c]?0:1;d[c]=(-1);return e;},
AFl=a=>{return A(415);};
function Hb(){let a=this;Cr.call(a);a.rt=0;a.qd=0;}
let Zd=(a,b,c,d)=>{let e,f,g,h,i;e=I1(a,d);if(e!==null&&(b+e.kf.length|0)<=d.k4){f=0;a:{b:{c:{d:{while(true){if(f>=e.kf.length){g=a.qd;d.lM.data[g]=e.kf.length;return a.kr.fJ(b+e.kf.length|0,c,d);}if(f<0)break c;if(f>=e.kf.length)break c;h=e.kf.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.kf.length)break d;if(h!=c.kf.charCodeAt(i)){if(f<0)break a;if(f>=e.kf.length)break a;g=GD(e.kf.charCodeAt(f));if(i<0)break b;if(i>=c.kf.length)break b;if(g!=c.kf.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new Y;c.kg=1;c.kh
=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}return (-1);},
ANQ=(a,b)=>{a.kr=b;},
I1=(a,b)=>{let c,d,e,f,g;c=a.rt;d=b.mh.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.qQ.kf.length?Ck(b.qQ,f,g):null;},
YL=a=>{let b,c,d,e,f,g,h;b=a.lP;c=new K;c.ke=G(16);E(c,c.kd,A(416));J(c,c.kd,b,10);d=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){d.kf=L(e.data,0,g);return d;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
AOo=(a,b)=>{let c,d,e;c=a.qd;d=b.lM.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let VT=F(Hb);
let AB_=(a,b,c,d)=>{let e,f,g;e=I1(a,d);if(e!==null&&(b+e.kf.length|0)<=d.k4){f=!M$(c,e,b)?(-1):e.kf.length;if(f<0)return (-1);g=a.qd;d.lM.data[g]=f;return a.kr.fJ(b+f|0,c,d);}return (-1);},
ARd=(a,b,c,d)=>{let e,f,g;e=I1(a,d);f=d.nh;if(e!==null&&(b+e.kf.length|0)<=f){while(true){if(b>f)return (-1);g=QN(c,e,b);if(g<0)return (-1);if(a.kr.fJ(g+e.kf.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
YF=(a,b,c,d,e)=>{let f,g;f=I1(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=ADz(d,f,c);if(g<0)break a;if(g<b)break a;if(a.kr.fJ(g+f.kf.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
AKm=(a,b)=>{return 1;},
ARL=a=>{let b,c,d,e,f,g,h;b=a.lP;c=new K;c.ke=G(16);E(c,c.kd,A(417));J(c,c.kd,b,10);d=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){d.kf=L(e.data,0,g);return d;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);};
function RV(){Hb.call(this);this.zb=0;}
let AJp=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.rt;f=d.mh.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.qQ.kf.length?Ck(d.qQ,h,i):null;if(j!==null&&(b+j.kf.length|0)<=d.k4){i=0;a:{b:{while(true){if(i>=j.kf.length){e=a.qd;d.lM.data[e]=j.kf.length;return a.kr.fJ(b+j.kf.length|0,c,d);}if(i<0)break a;if(i>=j.kf.length)break a;e=j.kf.charCodeAt(i);if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}e=CD(B0,e)&65535;if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value)
:null)));}g=CD(B1,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.kf.length)break b;e=c.kf.charCodeAt(h);if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}e=CD(B0,e)&65535;if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}if(g!=(CD(B1,e)&65535))break;i=i+1|0;}return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}return (-1);},
AAI=a=>{let b,c,d,e,f,g,h;b=a.zb;c=new K;c.ke=G(16);E(c,c.kd,A(418));J(c,c.kd,b,10);d=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){d.kf=L(e.data,0,g);return d;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);};
let PE=F(Be);
let AEs=(a,b,c,d,e)=>{let f,g,h,i;Bk(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ke.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
AAo=(a,b,c,d)=>{let e,f,g,h,i;e=a.kd;Bk(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.ke.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
AA_=(a,b)=>{IS(a,b);},
AQd=(a,b,c)=>{Bk(a,b,b+1|0);a.ke.data[b]=c;return a;};
function Sq(){let a=this;CF.call(a);a.mC=null;a.uv=null;a.u6=null;}
let ACI=(a,b)=>{let c,d,e,f,g,h;c=O;O=c+1|0;d=new Be;d.ke=G(20);a.kz=(J(d,d.kd,c,10)).T();a.k7=1;d=new I;e=b.ke;f=e.data;g=b.kd;h=f.length;if(g>=0&&g<=(h-0|0)){d.kf=L(e.data,0,g);a.mC=d;c=b.kd;a.k7=c;a.uv=TI(c);a.u6=TI(a.k7);c=0;a:{b:{while(c<(a.k7-1|0)){b=a.uv;d=a.mC;if(c<0)break a;if(c>=d.kf.length)break a;R6(b,d.kf.charCodeAt(c),(a.k7-c|0)-1|0);b=a.u6;d=a.mC;g=(a.k7-c|0)-1|0;if(g<0)break b;if(g>=d.kf.length)break b;R6(b,d.kf.charCodeAt(g),(a.k7-c|0)-1|0);c=c+1|0;}return;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg
=1;b.kh=1;B(b);}b=new H;b.kg=1;b.kh=1;B(b);},
AG8=a=>{let b=new Sq();ACI(b,a);return b;},
ACN=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.k7){e=d+b|0;if(e<0)break a;if(e>=c.kf.length)break a;f=c.kf.charCodeAt(e);g=a.mC;if(d<0)break b;if(d>=g.kf.length)break b;if(f!=g.kf.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.k7;}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);},
Z_=(a,b,c,d)=>{let e,f;e=d.k4;while(true){if(b>e)return (-1);f=ARs(a,c,b,e);if(f<0)return (-1);if(a.kr.fJ(f+a.k7|0,c,d)>=0)break;b=f+1|0;}return f;},
AFa=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AQe(a,d,b,c);if(c<0)return (-1);if(a.kr.fJ(c+a.k7|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
AMf=a=>{let b,c,d,e,f,g,h;b=a.mC;c=new K;c.ke=G(16);E(c,c.kd,A(419));d=c.kd;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){b.kf=L(e.data,0,g);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
AGl=(a,b)=>{let c,d,e;if(b instanceof Es){c=b.mT;b=a.mC;if(0<b.kf.length)return c!=b.kf.charCodeAt(0)?0:1;b=new Y;b.kg=1;b.kh=1;B(b);}if(b instanceof Ev){b=b;d=Ck(a.mC,0,1);b=b.nR;if(0>=d.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}return (!b.gg(d.kf.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof D6)){if(!(b instanceof EL))return 1;a:{if(a.mC.kf.length>1){e=b.qq;b=a.mC;if(0>=b.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}c=b.kf.charCodeAt(0);b=a.mC;if(1>=b.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}if(e==(((c&1023)<<10|
b.kf.charCodeAt(1)&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.mC;if(0>=d.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}b:{c:{if(!b.gg(d.kf.charCodeAt(0))){if(a.mC.kf.length<=1)break c;d=a.mC;if(0>=d.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}c=d.kf.charCodeAt(0);d=a.mC;if(1>=d.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}if(!b.gg(((c&1023)<<10|d.kf.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
ARs=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mC;f=a.k7-1|0;if(f>=0&&f<e.kf.length){g=e.kf.charCodeAt(f);a:{b:{c:{while(true){f=a.k7;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.kf.length)break c;h=b.kf.charCodeAt(f);if(h==g){f=0;d:{while(f<a.k7){i=f+c|0;if(i<0)break a;if(i>=b.kf.length)break a;j=b.kf.charCodeAt(i);e=a.mC;if(f<0)break b;if(f>=e.kf.length)break b;if(j!=e.kf.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+Tb(a.uv,h)|0;}return c;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh
=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);},
AQe=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.mC;if(0>=e.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}f=e.kf.charCodeAt(0);g=(b.kf.length-d|0)-a.k7|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.kf.length)break c;h=b.kf.charCodeAt(d);if(h==f){g=0;d:{while(g<a.k7){i=g+d|0;if(i<0)break a;if(i>=b.kf.length)break a;j=b.kf.charCodeAt(i);e=a.mC;if(g<0)break b;if(g>=e.kf.length)break b;if(j!=e.kf.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-Tb(a.u6,h)|0;}return d;}b=new Y;b.kg=1;b.kh
=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);};
function Ou(){CF.call(this);this.rW=null;}
let AJz=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.rW.kf.length)return a.rW.kf.length;e=a.rW;if(d<0)break a;if(d>=e.kf.length)break a;f=e.kf.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.kf.length)break b;h=c.kf.charCodeAt(g);if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}h=CD(B0,h)&65535;if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}if(f!=(CD(B1,h)&65535))break;d=d+1|0;}return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh
=1;B(c);},
AGx=a=>{let b,c,d,e,f,g,h;b=a.rW;c=new K;c.ke=G(16);E(c,c.kd,A(420));d=c.kd;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){b.kf=L(e.data,0,g);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
function O4(){CF.call(this);this.qO=null;}
let APe=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.qO.kf.length)return a.qO.kf.length;e=a.qO;if(d<0)break c;if(d>=e.kf.length)break c;f=e.kf.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.kf.length)break d;if(f!=c.kf.charCodeAt(g)){e=a.qO;if(d<0)break a;if(d>=e.kf.length)break a;h=GD(e.kf.charCodeAt(d));if(g<0)break b;if(g>=c.kf.length)break b;if(h!=c.kf.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=
1;c.kh=1;B(c);},
AQ2=a=>{let b,c,d,e,f,g,h;b=a.qO;c=new K;c.ke=G(16);E(c,c.kd,A(421));d=c.kd;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){b.kf=L(e.data,0,g);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
let AUu=F();
function Os(){CF.call(this);this.uR=0;}
let APi=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.kf.length){e=c.kf.charCodeAt(b);if(d>=0&&d<c.kf.length){d=c.kf.charCodeAt(d);b=a.uR;d=((e&1023)<<10|d&1023)+65536|0;if(B0===null){if(BK===null)BK=D_();B0=Cz(CG((BK.value!==null?W(BK.value):null)));}d=CD(B0,d);if(B1===null){if(BL===null)BL=D9();B1=Cz(CG((BL.value!==null?W(BL.value):null)));}return b!=CD(B1,d)?(-1):2;}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);},
AT7=a=>{let b,c,d,e,f,g;b=new I;c=Fq(a.uR);b.kf=L(c.data,0,c.data.length);d=new K;d.ke=G(16);E(d,d.kd,A(401));E(d,d.kd,b);b=new I;c=d.ke;e=c.data;f=d.kd;g=e.length;if(f>=0&&f<=(g-0|0)){b.kf=L(c.data,0,f);return b;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
function H6(){Cr.call(this);this.pm=0;}
let AMp=(a,b)=>{a.kr=b;},
Lj=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.k4){d.m7=1;return (-1);}if(b>=0&&b<c.kf.length){a:{f=c.kf.charCodeAt(b);if(b>d.nh){b=b-1|0;if(b>=0&&b<c.kf.length){if(!((c.kf.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);}}if(a.pm!=f)return (-1);return a.kr.fJ(e,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);},
AGf=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof I)){e=d.k4;a:{while(true){if(b>e){b=(-1);break a;}if(Lj(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.nh;g=d.k4;b:{while(true){if(b>=g)return (-1);h=H_(c,a.pm,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.kf.length)break b;if((c.kf.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.kr;b=h+1|0;if(i.fJ(b,c,d)>=0)break;}return h;}c=new Y;c.kg=1;c.kh=1;B(c);},
AC1=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(Lj(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.nh;b:{c:{while(true){if(c<b)return (-1);g=Ff(d,a.pm,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.kf.length)break b;if((d.kf.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.kr.fJ(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Y;d.kg=1;d.kh=1;B(d);},
AQq=a=>{let b,c,d,e,f,g,h;b=a.pm;c=new K;c.ke=G(16);d=c.kd;Bk(c,d,d+1|0);e=c.ke;f=e.data;f[d]=b;g=new I;d=c.kd;h=f.length;if(d>=0&&d<=(h-0|0)){g.kf=L(e.data,0,d);return g;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
Yt=(a,b)=>{if(b instanceof Es)return 0;if(b instanceof Ev)return 0;if(b instanceof D6)return 0;if(b instanceof EL)return 0;if(b instanceof Ia)return 0;if(!(b instanceof H6))return 1;return b.pm!=a.pm?0:1;},
AQG=(a,b)=>{return 1;};
function Ia(){Cr.call(this);this.o$=0;}
let AA8=(a,b)=>{a.kr=b;},
KA=(a,b,c,d)=>{let e,f,g;e=d.k4;f=b+1|0;e=BW(f,e);if(e>0){d.m7=1;return (-1);}if(b>=0&&b<c.kf.length){a:{g=c.kf.charCodeAt(b);if(e<0){if(f>=0&&f<c.kf.length){if(!((c.kf.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);}}if(a.o$!=g)return (-1);return a.kr.fJ(f,c,d);}c=new Y;c.kg=1;c.kh=1;B(c);},
AM3=(a,b,c,d)=>{let e,f;if(!(c instanceof I)){e=d.k4;a:{while(true){if(b>e){b=(-1);break a;}if(KA(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.k4;b:{while(true){if(b>=e)return (-1);f=H_(c,a.o$,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.kf.length)break b;if((c.kf.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.kr.fJ(b,c,d)>=0)break;}return f;}c=new Y;c.kg=1;c.kh=1;B(c);},
APd=(a,b,c,d,e)=>{let f,g;if(!(d instanceof I)){a:{while(true){if(c<b){c=(-1);break a;}if(KA(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.k4;b:{c:{while(true){if(c<b)return (-1);g=Ff(d,a.o$,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.kf.length)break b;if((d.kf.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.kr.fJ(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Y;d.kg=1;d.kh=1;B(d);},
ATe=a=>{let b,c,d,e,f,g,h;b=a.o$;c=new K;c.ke=G(16);d=c.kd;Bk(c,d,d+1|0);e=c.ke;f=e.data;f[d]=b;g=new I;d=c.kd;h=f.length;if(d>=0&&d<=(h-0|0)){g.kf=L(e.data,0,d);return g;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
ACR=(a,b)=>{if(b instanceof Es)return 0;if(b instanceof Ev)return 0;if(b instanceof D6)return 0;if(b instanceof EL)return 0;if(b instanceof H6)return 0;if(!(b instanceof Ia))return 1;return b.o$!=a.o$?0:1;},
ANd=(a,b)=>{return 1;};
function EL(){let a=this;CF.call(a);a.qh=0;a.pR=0;a.qq=0;}
let AOp=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.kf.length){e=c.kf.charCodeAt(b);if(d>=0&&d<c.kf.length){d=c.kf.charCodeAt(d);return a.qh==e&&a.pR==d?2:(-1);}c=new Y;c.kg=1;c.kh=1;B(c);}c=new Y;c.kg=1;c.kh=1;B(c);},
AK9=(a,b,c,d)=>{let e,f,g,h;if(c instanceof I){e=d.k4;a:{while(b<e){b=H_(c,a.qh,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.kf.length)break a;f=c.kf.charCodeAt(b);if(a.pR==f&&a.kr.fJ(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Y;c.kg=1;c.kh=1;B(c);}g=d.k4;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.k7|0)>d.k4){d.m7=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.kf.length)break b;e=c.kf.charCodeAt(b);if(h<0)break c;if(h>=c.kf.length)break c;f=c.kf.charCodeAt(h);h
=a.qh==e&&a.pR==f?2:(-1);h=h<0?(-1):a.kr.fJ(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new Y;U(c);B(c);}c=new Y;U(c);B(c);},
AA6=(a,b,c,d,e)=>{let f,g,h;if(d instanceof I){a:{b:{while(true){if(c<b)return (-1);c=Ff(d,a.pR,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.qh;if(c<0)break a;if(c>=d.kf.length)break a;if(f==d.kf.charCodeAt(c)&&a.kr.fJ(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Y;d.kg=1;d.kh=1;B(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.k7|0)>e.k4){e.m7=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.kf.length)break c;h=d.kf.charCodeAt(c);if(g<0)break d;if(g>=d.kf.length)break d;g=d.kf.charCodeAt(g);f
=a.qh==h&&a.pR==g?2:(-1);f=f<0?(-1):a.kr.fJ(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Y;U(d);B(d);}d=new Y;U(d);B(d);},
ARR=a=>{let b,c,d,e,f,g,h;b=a.qh;c=a.pR;d=new K;d.ke=G(16);e=d.kd;Bk(d,e,e+1|0);d.ke.data[e]=b;b=d.kd;Bk(d,b,b+1|0);f=d.ke;g=f.data;g[b]=c;h=new I;c=d.kd;e=g.length;if(c>=0&&c<=(e-0|0)){h.kf=L(f.data,0,c);return h;}d=new H;d.kg=1;d.kh=1;Bl(d);B(d);},
AN3=(a,b)=>{if(b instanceof EL)return b.qq!=a.qq?0:1;if(b instanceof D6)return b.gg(a.qq);if(b instanceof Es)return 0;if(!(b instanceof Ev))return 1;return 0;};
let JY=F(H4);
let ABi=(a,b)=>{return b!=10?0:1;},
AOb=(a,b,c)=>{return b!=10?0:1;};
let JZ=F(H4);
let APy=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
ASG=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function UC(){let a=this;C.call(a);a.vU=null;a.t2=null;a.rx=0;a.yJ=0;}
let AHu=(a,b)=>{let c,d;while(true){c=a.rx;if(b<c)break;a.rx=c<<1|1;}d=c<<1|1;a.rx=d;d=d+1|0;a.vU=Ba(d);a.t2=Ba(d);a.yJ=b;},
TI=a=>{let b=new UC();AHu(b,a);return b;},
R6=(a,b,c)=>{let d,e,f,g;d=0;e=a.rx;f=b&e;while(true){g=a.vU.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.t2.data[f]=c;},
Tb=(a,b)=>{let c,d,e,f;c=a.rx;d=b&c;e=0;while(true){f=a.vU.data[d];if(!f)break;if(f==b)return a.t2.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.yJ;};
let JF=F(Bx);
let AGI=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return Dg(BU(b,9,13),32);};
let I5=F(Bx);
let AJr=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(b,48,57);};
let Un=F(Bx);
let AO0=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(b,97,122);};
let U1=F(Bx);
let AQH=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(b,65,90);};
let U6=F(Bx);
let ADL=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(b,0,127);};
let Jz=F(Bx);
let ABR=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(BU(b,97,122),65,90);};
let JV=F(Jz);
let AEO=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(BU(BU(b,97,122),65,90),48,57);};
let WT=F(Bx);
let AGe=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(BU(BU(b,33,64),91,96),123,126);};
let Kv=F(JV);
let Xl=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(BU(BU(BU(BU(BU(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let So=F(Kv);
let AKd=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return Dg(BU(BU(BU(BU(BU(BU(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let ST=F(Bx);
let ACF=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return Dg(Dg(b,32),9);};
let QG=F(Bx);
let AJ7=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return Dg(BU(b,0,31),127);};
let Qr=F(Bx);
let ASL=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(BU(BU(b,48,57),97,102),65,70);};
let U_=F(Bx);
let ALk=a=>{let b,c;b=new Tk;b.Ae=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let W2=F(Bx);
let Xw=a=>{let b,c;b=new OD;b.Aj=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let UB=F(Bx);
let AG7=a=>{let b,c;b=new SH;b.zR=a;c=new Bn;c.ky=Ba(64);b.kC=c;return b;};
let Uf=F(Bx);
let AOt=a=>{let b,c;b=new SG;b.zH=a;c=new Bn;c.ky=Ba(64);b.kC=c;return b;};
let VB=F(Bx);
let ACD=a=>{let b,c;b=new V7;b.AR=a;c=new Bn;c.ky=Ba(64);b.kC=c;Ji(c,0,2048);b.lB=1;return b;};
let Pn=F(Bx);
let ADb=a=>{let b,c;b=new Qf;b.Au=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let OZ=F(Bx);
let ASx=a=>{let b,c;b=new PA;b.A_=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let UJ=F(Bx);
let Xi=a=>{let b,c;b=new RG;b.Af=a;c=new Bn;c.ky=Ba(64);b.kC=c;return b;};
let UV=F(Bx);
let AIB=a=>{let b,c;b=new Oz;b.yU=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let Q4=F(Bx);
let ADp=a=>{let b,c;b=new OC;b.Ax=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let SY=F(Bx);
let AFm=a=>{let b,c;b=new Pr;b.AQ=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let Wv=F(Bx);
let AIG=a=>{let b,c;b=new Qy;b.A3=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let US=F(Bx);
let AQ9=a=>{let b,c;b=new QD;b.zT=a;c=new Bn;c.ky=Ba(64);b.kC=c;return b;};
let RO=F(Bx);
let ANq=a=>{let b,c;b=new TP;b.Az=a;c=new Bn;c.ky=Ba(64);b.kC=c;return b;};
let Q3=F(Bx);
let ALa=a=>{let b,c;b=new S6;b.yZ=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let WY=F(Bx);
let AON=a=>{let b,c;b=new OQ;b.Bi=a;c=new Bn;c.ky=Ba(64);b.kC=c;b.lB=1;return b;};
let IO=F(Bx);
let AI5=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return Dg(BU(BU(BU(b,97,122),65,90),48,57),95);};
let VG=F(IO);
let AKK=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;b=E7(Dg(BU(BU(BU(b,97,122),65,90),48,57),95),1);b.lB=1;return b;};
let Sr=F(JF);
let Z8=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;b=E7(Dg(BU(b,9,13),32),1);b.lB=1;return b;};
let QY=F(I5);
let AF5=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;b=E7(BU(b,48,57),1);b.lB=1;return b;};
function Bv(){let a=this;Bx.call(a);a.kK=0;a.kL=0;}
let ASv=(a,b,c)=>{a.kK=b;a.kL=c;},
BI=(a,b)=>{let c=new Bv();ASv(c,a,b);return c;},
AI9=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(b,a.kK,a.kL);};
let QU=F(Bx);
let ASi=a=>{let b,c;b=new CQ;c=new Bn;c.ky=Ba(64);b.kC=c;c=new Bn;c.ky=Ba(2);b.kF=c;return BU(BU(b,65279,65279),65520,65533);};
function Mb(){let a=this;Bx.call(a);a.vx=0;a.tT=0;a.wC=0;}
let AB1=(a,b,c)=>{a.tT=c;a.vx=b;},
Ch=(a,b)=>{let c=new Mb();AB1(c,a,b);return c;},
ASw=(a,b,c,d)=>{a.wC=d;a.tT=c;a.vx=b;},
AI2=(a,b,c)=>{let d=new Mb();ASw(d,a,b,c);return d;},
AEw=a=>{let b,c,d;b=new Kl;c=a.vx;d=new Bn;d.ky=Ba(64);b.kC=d;b.th=c;if(a.wC)Ji(d,0,2048);b.lB=a.tT;return b;};
function Mi(){let a=this;Bx.call(a);a.vv=0;a.t4=0;a.we=0;}
let ADq=(a,b,c)=>{a.t4=c;a.vv=b;},
He=(a,b)=>{let c=new Mi();ADq(c,a,b);return c;},
Xk=(a,b,c,d)=>{a.we=d;a.t4=c;a.vv=b;},
AG4=(a,b,c)=>{let d=new Mi();Xk(d,a,b,c);return d;},
Xj=a=>{let b,c,d;b=new Sw;c=a.vv;d=new Bn;d.ky=Ba(64);b.kC=d;b.th=c;if(a.we)Ji(d,0,2048);b.lB=a.t4;return b;};
let Eh=F(BA);
let YZ=F();
let ACS=F();
let AA1=F();
let ASZ=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new Np;d=G(b.kf.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.un=d;f=Gz(c);d=Ba(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=Gz(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=Gz(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.kf.length)break;e[f]=b.kf.charCodeAt(f);f=f+1|0;}b=new Y;b.kg=1;b.kh=1;B(b);},
CG=b=>{let c,d,e,f,g,h,i,j,k,l;c=new Np;d=G(b.kf.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.un=d;f=Gz(c);d=Ba(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+Gz(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=Gz(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.kf.length)break;e[f]=b.kf.charCodeAt(f);f=f+1|0;}b=new Y;b.kg=1;b.kh=1;B(b);},
Cz=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=Ba(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bj;l.kg=1;l.kh=1;B(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new Vd;l.xi=b;l.xv=c;return l;},
Jq=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
AUp=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=R(IN,16384);d=c.data;e=BN(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.kf.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new BD;b.kw=j;k=b;j.classObject=k;}}b=EA(b);if(b===null){b=new Ds;b.kg=1;b.kh=1;B(b);}if(b===M(Bp)){b=new Bj;b.kg=1;b.kh=1;B(b);}if(g<0){b=new Eh;b.kg=1;b.kh=1;B(b);}k=Ee(b.kw,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.kf.length)break c;l=Jq(b.kf.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.kf.length)break b;l=Jq(b.kf.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.kf.length)break a;m=m|Dt(n,Jq(b.kf.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.kf.length)break;m=Jq(b.kf.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new IN;l=h+f|0;q=BN(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.uC=h;j.u3=l;j.uG=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new IN;t=h+f|0;q=BN(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.uC=h;j.u3=t;j.uG=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);}b=new Y;b.kg=1;b.kh=1;B(b);};
function Vd(){let a=this;C.call(a);a.xi=null;a.xv=null;}
function IN(){let a=this;C.call(a);a.uC=0;a.u3=0;a.uG=null;}
function Np(){let a=this;C.call(a);a.un=null;a.w$=0;}
let AGb=F();
let Gz=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.un.data;f=b.w$;b.w$=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Dt(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AO1=F();
function Rf(){let a=this;DX.call(a);a.wu=null;a.wt=0;a.rl=null;}
let AP_=(a,b)=>{return;},
ADt=(a,b)=>{let c,d,e,f,g,h;if(BX===null){b=new C6;c=new Cu;c.l8=BN(32);b.mq=c;c=new K;Bu(c);c.ke=G(16);b.l_=c;b.l$=G(32);b.ma=0;b.mb=Co;BX=b;}b=a.wu;c=new K;c.ke=G(16);E(c,c.kd,A(422));d=c.kd;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){b.kf=L(e.data,0,g);B2(Bz(b));B2("\n");return;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
Za=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(KT(I_(A(117),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.rl;b.uS=b.sL.ki;if(a.wt){e=0;while(true){b=a.rl;c=b.sL;f=BW(e,c.ki);if(f>=0)break a;if(f>=0){g=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,e,10);E(b,b.kd,A(19));e=c.ki;J(b,b.kd,e,10);c=new I;d=b.ke;h=d.data;f=b.kd;i=h.length;if(f>=0&&f<=(i-0|0)){c.kf=L(d.data,0,f);g.kg=1;g.kh=1;g.kj=c;B(g);}b=new H;U(b);B(b);}AGC(b,c.km.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(KT(I_(A(115),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AIl(h[1]);b=h[2];if(b===null){b=new CC;b.kg=1;b.kh=1;b.kj=A(84);B(b);}m=AQz(b,0,b.kf.length,10);n=h[3];o=Ga;if(k===A(423))i=1;else if(!(A(423) instanceof I))i=0;else{b=A(423);i=k.kf!==b.kf?0:1;}if(i)o=F3;if(k===A(424))i=1;else if(!(A(424) instanceof I))i=0;else{b=A(424);i=k.kf!==b.kf?0:1;}if(i)o=FR;if(k===A(425))i=1;else if(!(A(425) instanceof I))i=0;else{b=A(425);i=k.kf!==b.kf?0:1;}if(i)o=FI;if(k===A(233))i=1;else if(!(A(233) instanceof I))i=0;else{b=A(233);i=k.kf!==b.kf?0:1;}if(i)o=Kg;if
(o===FI&&!GW.ya)m=B8;g=new S9;g.uK=l;g.wJ=o;g.yr=m;g.ww=n;Cj(a.rl.wZ,l,l);S(a.rl.sL,g);f=f+1|0;}b=new T;b.kg=1;b.kh=1;b.kj=A(426);B(b);},
AKX=(a,b,c)=>{return Za(a,b,c);};
let CX=F(BF);
let ABk=null,ALs=null,ACz=null,ACy=null,ABq=null,AA5=null,AAs=null,ACm=null,Z9=null,AH4=null;
let IY=()=>{IY=BR(CX);YQ();};
let YQ=()=>{let b,c,d,e,f,g,h,i,j;b=new Vu;IY();b.kx=A(427);b.kq=0;ABk=b;c=new Vv;c.kx=A(428);c.kq=1;ALs=c;d=new Vz;d.kx=A(429);d.kq=2;ACz=d;e=new VA;e.kx=A(430);e.kq=3;ACy=e;f=new Vx;f.kx=A(431);f.kq=4;ABq=f;g=new Vy;g.kx=A(432);g.kq=5;AA5=g;h=new Vs;h.kx=A(433);h.kq=6;AAs=h;i=new Vt;i.kx=A(434);i.kq=7;ACm=i;j=new Vq;j.kx=A(435);j.kq=8;Z9=j;AH4=V(CX,[b,c,d,e,f,g,h,i,j]);};
function F_(){let a=this;HY.call(a);a.pY=0;a.nL=null;}
let ATG=F(0);
let AAB=b=>{let c,d;if(b===A(436))c=1;else if(!(A(436) instanceof I))c=0;else{d=A(436);c=b.kf!==d.kf?0:1;}a:{if(!c){if(b===A(437))c=1;else if(!(A(437) instanceof I))c=0;else{d=A(437);c=b.kf!==d.kf?0:1;}if(!c){if(b===A(438))c=1;else if(!(A(438) instanceof I))c=0;else{d=A(438);c=b.kf!==d.kf?0:1;}if(!c){if(b===A(439))c=1;else if(!(A(439) instanceof I))c=0;else{d=A(439);c=b.kf!==d.kf?0:1;}if(!c){if(b===A(440))c=1;else if(!(A(440) instanceof I))c=0;else{d=A(440);c=b.kf!==d.kf?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
AGL=b=>{let c,d;if(b===A(441))c=1;else if(!(A(441) instanceof I))c=0;else{d=A(441);c=b.kf!==d.kf?0:1;}a:{b:{if(c)break b;if(b===A(442))c=1;else if(!(A(442) instanceof I))c=0;else{d=A(442);c=b.kf!==d.kf?0:1;}if(c)break b;if(b===A(443))c=1;else if(!(A(443) instanceof I))c=0;else{d=A(443);c=b.kf!==d.kf?0:1;}if(c)break b;if(b===A(444))c=1;else if(!(A(444) instanceof I))c=0;else{d=A(444);c=b.kf!==d.kf?0:1;}if(c)break b;if(b===A(445))c=1;else if(!(A(445) instanceof I))c=0;else{d=A(445);c=b.kf!==d.kf?0:1;}if(c)break b;if
(b===A(446))c=1;else if(!(A(446) instanceof I))c=0;else{d=A(446);c=b.kf!==d.kf?0:1;}if(c)break b;if(b===A(447))c=1;else if(!(A(447) instanceof I))c=0;else{d=A(447);c=b.kf!==d.kf?0:1;}if(c)break b;if(b===A(448))c=1;else if(!(A(448) instanceof I))c=0;else{d=A(448);c=b.kf!==d.kf?0:1;}if(c)break b;if(b===A(449))c=1;else if(!(A(449) instanceof I))c=0;else{d=A(449);c=b.kf!==d.kf?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let Up=F(0);
let QR=F();
let ASp=(a,b,c)=>{a.gN(W(b),DI(c,"handleEvent"));},
ALx=(a,b)=>{return !!a.gO(b);},
AA9=(a,b,c)=>{a.gP(W(b),DI(c,"handleEvent"));},
AHY=(a,b,c,d)=>{a.gQ(W(b),DI(c,"handleEvent"),d?1:0);},
API=(a,b,c,d)=>{a.gR(W(b),DI(c,"handleEvent"),d?1:0);};
function M1(){let a=this;C.call(a);a.uB=null;a.vZ=null;a.sC=null;a.v3=0;a.tq=null;}
let ALK=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.uB;if(e!==FR&&e!==FI){if(e===F3){b=window.document.createElement("img");d=Bz(W(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new IL;d.nY=c;d.vc=e;d.vo=b;}else if(e===Ga)d=W(c.result);}else{e=c.result;b=new Int8Array(e);d=new IL;d.nY=b;d.vc=e;}if(d!==null){Hr(a.tq.wA,a.uB,a.vZ,d);S(a.sC,a.vZ);if(a.sC.ki==a.v3){b=a.tq.wk;d=new OT;d.uZ=a;S(b.r9,d);}}},
AJJ=(a,b)=>{ALK(a,b);};
function FT(){BF.call(this);this.r5=null;}
let F3=null,FI=null,Ga=null,FR=null,Kg=null,N2=null;
let ALW=()=>{let b,c,d,e,f;b=new FT;b.kx=A(450);b.kq=0;b.r5=A(423);F3=b;c=new FT;c.kx=A(451);c.kq=1;c.r5=A(425);FI=c;d=new FT;d.kx=A(452);d.kq=2;d.r5=A(453);Ga=d;e=new FT;e.kx=A(454);e.kq=3;e.r5=A(424);FR=e;f=new FT;f.kx=A(455);f.kq=4;f.r5=A(233);Kg=f;N2=V(FT,[b,c,d,e,f]);};
let AG1=F();
let LA=null,PD=null;
let AQi=b=>{let c,d,e,f,g,h,i,j,k,l;c=new K;c.ke=G(16);d=AOM();e=0;f=PD.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.kd;if(i>0){Bk(c,i,i+1|0);c.ke.data[i]=32;}j=d.data[e];E(c,c.kd,j);}e=e+1|0;h=h+1|0;}j=new I;d=c.ke;k=d.data;e=c.kd;l=k.length;if(e>=0&&e<=(l-0|0)){j.kf=L(d.data,0,e);return j;}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
AOM=()=>{if(LA===null)LA=V(I,[A(456),A(457),A(458),A(459),A(460),A(461),A(462),A(463),A(464),A(465),A(466),A(467)]);return LA;},
YM=()=>{PD=IW([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let Sg=F(0);
function H1(){let a=this;Nc.call(a);a.lY=null;a.zN=null;a.r2=0;a.s2=0;a.pj=null;a.vB=null;}
let ZI=a=>{let b,c,d,e,f,g,h;b=new K;b.ke=G(16);c=AQi(Lz(a.r2,a.s2));E(b,b.kd,c);d=b.kd;if(d>0){Bk(b,d,d+1|0);b.ke.data[d]=32;}c=a.lY;if(c.kp===null)c.kp=W(c.kw.$meta.name);c=c.kp;E(b,b.kd,c);d=b.kd;Bk(b,d,d+1|0);b.ke.data[d]=40;e=a.pj.p();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.kd;Bk(b,h,h+1|0);b.ke.data[h]=44;}c=g[f];if(c.kp===null)c.kp=W(c.kw.$meta.name);c=c.kp;E(b,b.kd,c);f=f+1|0;}d=b.kd;Bk(b,d,d+1|0);g=b.ke;e=g.data;e[d]=41;c=new I;d=b.kd;h=e.length;if(d>=0&&d<=(h-0|0)){c.kf=L(g.data,
0,d);return c;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
APK=(a,b)=>{let c,d,e,f,g;if(a.r2&1){c=new MZ;c.kg=1;c.kh=1;B(c);}if(a.vB===null){c=new Ky;c.kg=1;c.kh=1;B(c);}d=b.data;e=d.length;if(e!=a.pj.data.length){c=new Bj;c.kg=1;c.kh=1;B(c);}f=0;while(f<e){if(!(a.pj.data[f].kw.$meta.primitive?1:0)&&d[f]!==null){c=a.pj.data[f];g=d[f];c=c.kw;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&MY(g.constructor,c)?1:0)){c=new Bj;c.kg=1;c.kh=1;B(c);}}if((a.pj.data[f].kw.$meta.primitive?1:0)&&d[f]===null){c=new Bj;c.kg=1;c.kh=1;B(c);}f=f+1|0;}c=b.data;g=new(a.lY.kw);a.vB.call(g,
c);return g;};
let Y=F(H);
function VN(){let a=this;Bq.call(a);a.wn=null;a.AW=null;}
let ADV=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.mS^CP(a.wn,c):0;};
function VM(){let a=this;Bq.call(a);a.yd=null;a.yt=null;a.AC=null;}
let X7=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.mS^CP(a.yd,c):0;return a.yt.gg(b)&&!d?1:0;};
function PT(){let a=this;Bq.call(a);a.sS=null;a.y0=null;}
let AIS=(a,b)=>{return a.kY^CP(a.sS,b);},
AFE=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.ke=G(16);c=IC(a.sS,0);while(c>=0){d=(Fq(c)).data;e=0;f=d.length;g=b.kd;Bk(b,g,g+f|0);f=f+e|0;while(e<f){h=b.ke.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.kd;Bk(b,g,g+1|0);b.ke.data[g]=124;c=IC(a.sS,c+1|0);}e=b.kd;if(e>0)VX(b,e-1|0);k=new I;d=b.ke;h=d.data;e=b.kd;g=h.length;if(e>=0&&e<=(g-0|0)){k.kf=L(d.data,0,e);return k;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);};
function P0(){let a=this;Bq.call(a);a.xc=null;a.Ai=null;}
let AOr=(a,b)=>{return a.xc.gg(b);};
function PX(){let a=this;Bq.call(a);a.tU=0;a.wx=null;a.uI=null;}
let APh=(a,b)=>{return !(a.tU^CP(a.uI.kF,b))&&!(a.tU^a.uI.oh^a.wx.gg(b))?0:1;};
function PY(){let a=this;Bq.call(a);a.t3=0;a.yi=null;a.vk=null;}
let AJy=(a,b)=>{return !(a.t3^CP(a.vk.kF,b))&&!(a.t3^a.vk.oh^a.yi.gg(b))?1:0;};
function P4(){let a=this;Bq.call(a);a.yE=0;a.yl=null;a.yf=null;a.zm=null;}
let ADf=(a,b)=>{return a.yE^(!a.yl.gg(b)&&!a.yf.gg(b)?0:1);};
function P5(){let a=this;Bq.call(a);a.xf=0;a.xa=null;a.w4=null;a.Be=null;}
let W7=(a,b)=>{return a.xf^(!a.xa.gg(b)&&!a.w4.gg(b)?0:1)?0:1;};
function P2(){let a=this;Bq.call(a);a.w2=null;a.Bh=null;}
let AFR=(a,b)=>{let c,d;c=a.w2;d=c.lG;return d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b);};
function P3(){let a=this;Bq.call(a);a.yq=null;a.zE=null;}
let AJA=(a,b)=>{let c,d;c=a.yq;d=c.lG;return (d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b))?0:1;};
function P6(){let a=this;Bq.call(a);a.xo=null;a.xb=0;a.x4=null;}
let ARg=(a,b)=>{let c,d,e;c=a.xo;d=c.lG;e=d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b);return !e&&!(a.xb^CP(a.x4.kF,b))?0:1;};
function P7(){let a=this;Bq.call(a);a.xI=null;a.xQ=0;a.xz=null;}
let ACj=(a,b)=>{let c,d,e;c=a.xI;d=c.lG;e=d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b);return !e&&!(a.xQ^CP(a.xz.kF,b))?1:0;};
function PS(){let a=this;Bq.call(a);a.x3=0;a.yh=null;a.yx=null;a.y5=null;}
let AUw=(a,b)=>{let c,d;a:{if(!(a.x3^a.yh.gg(b))){c=a.yx;d=c.lG;if(!(d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b))){b=0;break a;}}b=1;}return b;};
function Qm(){let a=this;Bq.call(a);a.yv=0;a.wa=null;a.wf=null;a.zA=null;}
let AF1=(a,b)=>{let c,d;a:{if(!(a.yv^a.wa.gg(b))){c=a.wf;d=c.lG;if(!(d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b))){b=1;break a;}}b=0;}return b;};
function PQ(){let a=this;Bq.call(a);a.wQ=null;a.zG=null;}
let ACg=(a,b)=>{let c,d;c=a.wQ;d=c.lG;return d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b);};
function PR(){let a=this;Bq.call(a);a.wR=null;a.Bb=null;}
let AER=(a,b)=>{let c,d;c=a.wR;d=c.lG;return (d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b))?0:1;};
function PW(){let a=this;Bq.call(a);a.yD=null;a.xF=0;a.yQ=null;}
let AHD=(a,b)=>{let c,d,e;c=a.yD;d=c.lG;e=d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b);return e&&a.xF^CP(a.yQ.kF,b)?1:0;};
function PP(){let a=this;Bq.call(a);a.xV=null;a.xg=0;a.xE=null;}
let AQR=(a,b)=>{let c,d,e;c=a.xV;d=c.lG;e=d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b);return e&&a.xg^CP(a.xE.kF,b)?0:1;};
function PU(){let a=this;Bq.call(a);a.x5=0;a.wm=null;a.xe=null;a.zk=null;}
let AAu=(a,b)=>{let c,d;a:{if(a.x5^a.wm.gg(b)){c=a.xe;d=c.lG;if(d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b)){b=1;break a;}}b=0;}return b;};
function PV(){let a=this;Bq.call(a);a.xS=0;a.v8=null;a.x2=null;a.zL=null;}
let AM_=(a,b)=>{let c,d;a:{if(a.xS^a.v8.gg(b)){c=a.x2;d=c.lG;if(d!==null?c.kY^d.gg(b):c.kY^CP(c.kF,b)){b=0;break a;}}b=1;}return b;};
function I0(){let a=this;C.call(a);a.pc=null;a.vj=null;a.mD=null;a.ni=0;}
function G1(){let a=this;C.call(a);a.Bf=null;a.or=B8;a.ph=B8;a.nt=null;a.wK=null;a.n9=null;a.ns=0;a.os=null;}
let Jt=null,B3=null,CZ=0,EI=0,Si=null;
let AIR=a=>{let b,c,$$je;a:{b:{c:{d:{try{EI=EI+1|0;ANr(a);a.c4();}catch($$e){$$je=Bc($$e);if($$je instanceof DE){b=$$je;break d;}else{b=$$je;break c;}}b=a.nt;Gi(b);e:{try{NY(b);D0(b);break e;}catch($$e){$$je=Bc($$e);c=$$je;}D0(b);B(c);}a.ns=0;EI=EI-1|0;b=Jt;if(B3!==b)B3=b;B3.ph=EE();break a;}try{Zj(AGk(a),a,b);break b;}catch($$e){$$je=Bc($$e);b=$$je;}}c=a.nt;Gi(c);f:{try{NY(c);D0(c);break f;}catch($$e){$$je=Bc($$e);b=$$je;}D0(c);B(b);}a.ns=0;EI=EI-1|0;c=Jt;if(B3!==c)B3=c;B3.ph=EE();B(b);}b=a.nt;Gi(b);g:{try
{NY(b);D0(b);break g;}catch($$e){$$je=Bc($$e);c=$$je;}D0(b);B(c);}a.ns=0;EI=EI-1|0;b=Jt;if(B3!==b)B3=b;B3.ph=EE();}},
ANr=b=>{if(B3!==b)B3=b;B3.ph=EE();},
AUy=()=>{return B3;},
Lv=b=>{let $p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQ$(b);if(FY()){break _;}return;default:FN();}}Dp().s(b,$p);},
ADc=(b,c)=>{let d,e;d=B3;e=new PC;e.yR=d;e.ye=c;e.AX=Nz(e,AC_(b,X(2147483647))?2147483647:Bm(b));d.wK=e;},
AGk=a=>{let b;b=a.Bf;if(b!==null)return b;return Si;},
Z2=()=>{let b,c,d;b=new G1;c=null;b.nt=new C;b.ns=1;b.n9=A(468);b.os=c;d=CZ;CZ=d+1|0;b.or=X(d);Jt=b;B3=b;CZ=1;EI=1;Si=new SI;},
AQ$=b=>{let thread=Dp();let javaThread=Xy();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Kx(javaThread);thread.resume();};callback.g0=e=>{thread.attribute=AQt(e);Kx(javaThread);thread.resume();};callback=SS(callback);thread.suspend(()=>{try {ADc(b,callback);;}catch(Ob){callback.g0(Ob);}});return null;};
let BO=F(BA);
let Jc=F(BA);
let AOw=F();
let SJ=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let AEV=F();
let Yr=F();
let GB=F(0);
function WF(){C.call(this);this.w5=null;}
let ARi=a=>{APB(a.w5);};
let Vu=F(CX);
let Vv=F(CX);
let Vz=F(CX);
let VA=F(CX);
let Vx=F(CX);
let Vy=F(CX);
let Vs=F(CX);
let Vt=F(CX);
let Vq=F(CX);
let O3=F(0);
let SI=F();
let Zj=(a,b,c)=>{let d;if(Dv===null){b=new F9;d=new Cu;d.l8=BN(32);Bu(b);b.mq=d;d=new K;D1(d,16);b.l_=d;b.l$=G(32);b.ma=0;b.mb=Co;Dv=b;}Kr(c,Dv);};
let Rs=F();
let Sf=F(0);
function RW(){C.call(this);this.qj=null;}
let SS=b=>{let c;c=new RW;c.qj=b;return c;},
AH6=(a,b)=>{a.qj.e(b);},
AS8=(a,b)=>{a.qj.g0(b);};
function Tj(){let a=this;C.call(a);a.wG=null;a.wI=null;a.wE=0;a.wF=null;}
let O0=F(GQ);
let AED=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.k4;a:{while(true){if(b>f){b=e;break a;}g=a.lP;h=d.mh.data;i=g*2|0;j=h[i];h[i]=b;e=a.nr.fJ(b,c,d);if(e>=0)break;i=a.lP;d.mh.data[i*2|0]=j;b=b+1|0;}}return b;},
AUc=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.lP;h=e.mh.data;i=g*2|0;j=h[i];h[i]=c;f=a.nr.fJ(c,d,e);if(f>=0)break;i=a.lP;e.mh.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
ABV=a=>{return null;};
function Tk(){Bq.call(this);this.Ae=null;}
let ARE=(a,b)=>{return C0(b)!=2?0:1;};
function OD(){Bq.call(this);this.Aj=null;}
let Z1=(a,b)=>{return C0(b)!=1?0:1;};
function SH(){Bq.call(this);this.zR=null;}
let Zk=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(C0(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function SG(){Bq.call(this);this.zH=null;}
let AEt=(a,b)=>{return 0;};
function V7(){Bq.call(this);this.AR=null;}
let AHh=(a,b)=>{return !C0(b)?0:1;};
function Qf(){Bq.call(this);this.Au=null;}
let ARH=(a,b)=>{return C0(b)!=9?0:1;};
function PA(){Bq.call(this);this.A_=null;}
let AMe=(a,b)=>{return HR(b);};
function RG(){Bq.call(this);this.Af=null;}
let AOE=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Oz(){Bq.call(this);this.yU=null;}
let ATF=(a,b)=>{a:{b:{switch(C0(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HR(b);}return b;};
function OC(){Bq.call(this);this.Ax=null;}
let ACY=(a,b)=>{a:{b:{switch(C0(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HR(b);}return b;};
function Pr(){Bq.call(this);this.AQ=null;}
let ASa=(a,b)=>{a:{switch(C0(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function Qy(){Bq.call(this);this.A3=null;}
let AJ3=(a,b)=>{a:{b:{switch(C0(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function QD(){Bq.call(this);this.zT=null;}
let ANO=(a,b)=>{a:{switch(C0(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function TP(){Bq.call(this);this.Az=null;}
let ARh=(a,b)=>{return C0(b)!=3?0:1;};
function S6(){Bq.call(this);this.yZ=null;}
let AS4=(a,b)=>{a:{b:{switch(C0(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HR(b);}return b;};
function OQ(){Bq.call(this);this.Bi=null;}
let ACE=(a,b)=>{a:{b:{switch(C0(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HR(b);}return b;};
function Kl(){Bq.call(this);this.th=0;}
let AMj=(a,b)=>{return a.kY^(a.th!=C0(b&65535)?0:1);};
let Sw=F(Kl);
let APZ=(a,b)=>{return a.kY^(!(a.th>>C0(b&65535)&1)?0:1);};
function Zm(){let a=this;C.call(a);a.Bq=0;a.Br=0;a.Bo=0;a.Bp=0;a.Bn=null;}
function Hs(){let a=this;G1.call(a);a.pI=0;a.ob=null;a.ou=null;a.of=null;}
let AMx=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Nn;c.oD=a;c.qW=b;c=B$(c,"handleEvent");b.onreadystatechange=c;c=a.of;d=a.ou;e=new Ht;e.vG=c;e.sE=d;c=B$(e,"handleEvent");b.onprogress=c;d=a.ob;f=a.pI;b.open("GET",Bz(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let OR=F();
let Uq=null;
let MX=()=>{MX=BR(OR);APb();};
let APb=()=>{let b,c;b=Ba((Vl.p()).data.length);c=b.data;Uq=b;c[NT.kq]=1;c[JC.kq]=2;};
let VH=F();
let AI3=(a,b,c)=>{a.eR(W(b),DI(c,"handleEvent"));},
AJ6=(a,b,c)=>{a.eS(W(b),DI(c,"handleEvent"));},
XK=(a,b,c,d)=>{a.eT(W(b),DI(c,"handleEvent"),d?1:0);},
XY=(a,b)=>{return !!a.eU(b);},
AFV=(a,b,c,d)=>{a.eW(W(b),DI(c,"handleEvent"),d?1:0);};
let Hv=F(0);
function KH(){let a=this;C.call(a);a.pU=null;a.uP=0;a.s5=null;a.vw=null;a.q$=null;}
let ATa=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.pU.readyState==4){if(a.pU.status==200){if(a.q$.na){if(BX===null){b=new C6;c=new Cu;c.l8=BN(32);b.mq=c;c=new K;Bu(c);c.ke=G(16);b.l_=c;b.l$=G(32);b.ma=0;b.mb=Co;BX=b;}b=a.s5;c=new K;c.ke=G(16);E(c,c.kd,A(469));d=c.kd;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g
>=0&&g<=(h-0|0)){b.kf=L(e.data,0,g);B2(Bz(b));B2("\n");}else{b=new H;b.kg=1;b.kh=1;Bl(b);B(b);}}c=a.pU.response;Fn();i=GC.nU.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);W(a.pU.responseText);}else if(a.pU.status!=404&&a.pU.status!=403){try{k=X(100);$p=1;continue _;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}N$(a.q$,a.uP,a.s5,a.vw);}b=a.q$;b.lx=b.lx-1|0;}return;case 1:a:{try{Lv(k);if(FY()){break _;}break a;}catch($$e){$$je=Bc($$e);if($$je instanceof DE)
{}else{throw $$e;}}}N$(a.q$,a.uP,a.s5,a.vw);b=a.q$;b.lx=b.lx-1|0;return;default:FN();}}Dp().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
AHq=(a,b)=>{let $p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ATa(a,b);if(FY()){break _;}return;default:FN();}}Dp().s(a,b,$p);};
let AKC=F();
let CJ=0;
function Cw(){let a=this;C.call(a);a.lg=null;a.mi=0;a.l3=0;a.k8=0;}
let AKR=(a,b,c)=>{a.k8=1;a.lg=b;a.mi=c;},
Mx=(a,b)=>{let c=new Cw();AKR(c,a,b);return c;},
HX=a=>{let b;if(a.k8)return a.l3>=a.lg.ki?0:1;b=new T;b.kg=1;b.kh=1;b.kj=A(17);B(b);},
Cq=a=>{let b,c,d,e,f,g,h;b=a.l3;c=a.lg;if(b<c.ki){if(a.k8){d=c.km.data;a.l3=b+1|0;return d[b];}c=new T;c.kg=1;c.kh=1;c.kj=A(17);B(c);}c=new WR;e=new K;e.ke=G(16);J(e,e.kd,b,10);f=new I;d=e.ke;g=d.data;b=e.kd;h=g.length;if(b>=0&&b<=(h-0|0)){f.kf=L(d.data,0,b);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;c.kg=1;c.kh=1;B(c);};
function C_(){let a=this;C.call(a);a.mu=null;a.my=0;a.u_=null;a.va=null;}
let ANo=(a,b)=>{a.mu=b;a.my=1;},
N9=a=>{let b=new C_();ANo(b,a);return b;},
AUe=(a,b,c)=>{a.mu=b;a.my=c;},
L7=(a,b)=>{let c=new C_();AUe(c,a,b);return c;},
CT=a=>{let b,c,d;if(CJ){b=new Cw;c=a.mu;d=a.my;b.k8=1;b.lg=c;b.mi=d;return b;}if(a.u_===null){b=new Cw;c=a.mu;d=a.my;b.k8=1;b.lg=c;b.mi=d;a.u_=b;b=new Cw;b.k8=1;b.lg=c;b.mi=d;a.va=b;}b=a.u_;if(b.k8){c=a.va;c.l3=0;c.k8=1;b.k8=0;return c;}b.l3=0;b.k8=1;a.va.k8=0;return b;};
function IL(){let a=this;C.call(a);a.vc=null;a.nY=null;a.vo=null;}
let AOs=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.nY.length;c=new K;c.ke=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new I;f=c.ke;g=f.data;b=c.kd;h=g.length;if(b>=0&&b<=(h-0|0)){e.kf=L(f.data,0,b);return e;}e=new H;e.kg=1;e.kh=1;Bl(e);B(e);}i=b-d|0;if(i>=3){j=(((a.nY[d]&255)<<16)+((a.nY[d+1|0]&255)<<8)|0)+(a.nY[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(470).kf.length)break f;h=A(470).kf.charCodeAt(h);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(470).kf.length)break g;h
=A(470).kf.charCodeAt(h);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(470).kf.length)break h;h=A(470).kf.charCodeAt(h);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;i=j&63;if(i<0)break;if(i>=A(470).kf.length)break;h=A(470).kf.charCodeAt(i);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;}else if(i<2){j=(a.nY[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(470).kf.length)break d;h=A(470).kf.charCodeAt(h);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(470).kf.length)break e;h=A(470).kf.charCodeAt(h);i
=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;E(c,c.kd,A(471));}else{k=((a.nY[d]&255)<<16)+((a.nY[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(470).kf.length)break a;h=A(470).kf.charCodeAt(h);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(470).kf.length)break b;h=A(470).kf.charCodeAt(h);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(470).kf.length)break c;h=A(470).kf.charCodeAt(h);i=c.kd;Bk(c,i,i+1|0);c.ke.data[i]=h;E(c,c.kd,A(472));}d=d+3|0;}e=new Y;e.kg=1;e.kh=1;B(e);}e
=new Y;e.kg=1;e.kh=1;B(e);}e=new Y;e.kg=1;e.kh=1;B(e);}e=new Y;e.kg=1;e.kh=1;B(e);}e=new Y;e.kg=1;e.kh=1;B(e);}e=new Y;e.kg=1;e.kh=1;B(e);}e=new Y;e.kg=1;e.kh=1;B(e);}e=new Y;e.kg=1;e.kh=1;B(e);}e=new Y;e.kg=1;e.kh=1;B(e);};
function OT(){C.call(this);this.uZ=null;}
let WH=F(0);
let Tw=F(0);
let Um=F(0);
let HT=F();
let Fb=a=>{return;};
function IQ(){HT.call(this);this.mq=null;}
let Gv=(a,b)=>{a.mq=b;},
AYa=a=>{let b=new IQ();Gv(b,a);return b;};
function Jb(){let a=this;IQ.call(a);a.ma=0;a.l_=null;a.l$=null;a.mb=null;}
let V1=(a,b,c)=>{a.mq=b;b=new K;b.ke=G(16);a.l_=b;a.l$=G(32);a.ma=c;a.mb=Co;},
AWZ=(a,b)=>{let c=new Jb();V1(c,a,b);return c;};
let HN=F(Jb);
let C6=F(HN);
let AHF=(a,b)=>{B2(Bz(b));};
function Ht(){let a=this;C.call(a);a.sE=null;a.vG=null;}
let ALC=(a,b)=>{a.sE.g3(b.loaded);};
let AAd=F();
function Cu(){HT.call(this);this.l8=null;}
let ZW=(a,b)=>{a.l8=BN(b);},
AQK=a=>{let b=new Cu();ZW(b,a);return b;};
function KN(){let a=this;C.call(a);a.v4=null;a.wV=null;}
let JX=b=>{let c,d,e;if(b.kf.length?0:1){c=new J0;c.kg=1;c.kh=1;c.ug=b;B(c);}if(0>=b.kf.length){b=new Y;b.kg=1;b.kh=1;B(b);}if(!UP(b.kf.charCodeAt(0))){c=new J0;c.kg=1;c.kh=1;c.ug=b;B(c);}d=1;a:{while(d<b.kf.length){if(d<0)break a;if(d>=b.kf.length)break a;b:{e=b.kf.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(UP(e))break b;else{c=new J0;c.kg=1;c.kh=1;c.ug=b;B(c);}}}d=d+1|0;}return;}b=new Y;b.kg=1;b.kh=1;B(b);},
UP=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let N8=F(KN);
let Co=null;
let AVL=()=>{let b,c,d,e,f;b=new N8;c=R(I,0);d=c.data;JX(A(3));e=d.length;f=0;while(f<e){JX(d[f]);f=f+1|0;}b.v4=A(3);b.wV=c.p();Co=b;};
function J0(){Bj.call(this);this.ug=null;}
let Lo=F(0);
function Im(){let a=this;C.call(a);a.vN=null;a.qF=null;a.np=0;a.qk=null;a.vX=0.0;a.t$=0.0;a.mL=0;a.pu=null;a.to=null;a.tz=null;a.vr=0;a.xZ=0;a.wL=0;a.wT=0;a.v6=0;a.qn=null;a.rn=null;a.y8=0;a.nw=null;a.py=0.0;a.sR=0;a.uH=0;a.vH=0;}
let WB=null;
let Ik=()=>{Ik=BR(Im);AKu();};
let Lh=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;Ik();a.np=0;a.qk=null;a.vX=0.0;a.t$=0.0;a.mL=0;a.pu=Dj();a.to=Dj();a.tz=Dj();a.vr=0;a.xZ=770;a.wL=771;a.wT=770;a.v6=771;a.rn=null;d=new BM;d.k_=1.0;d.k$=1.0;d.k9=1.0;d.lc=1.0;CO(d);a.nw=d;a.py=TN;a.sR=0;a.uH=0;a.vH=0;if(b>8191){c=new Bj;d=new K;d.ke=G(16);E(d,d.kd,A(473));J(d,d.kd,b,10);e=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);c.kg=1;c.kh=1;c.kj=e;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}j=ER===null?WB:Md;k=new JE;l=b*4|0;m=b*6|0;f
=R(Ea,3);g=f.data;d=new Ea;d.m6=1;d.mR=2;d.m5=5126;d.nc=0;d.m$=A(474);d.oS=0;d.p4=Er(1);g[0]=d;d=new Ea;d.m6=4;d.mR=4;d.m5=5121;d.nc=1;d.m$=A(475);d.oS=0;d.p4=Er(4);g[1]=d;d=new Ea;d.m6=16;d.mR=2;d.m5=5126;d.nc=0;d.m$=A(476);d.oS=0;d.p4=Er(16);g[2]=d;Wd(k,j,0,l,m,RE(f));a.vN=k;d=a.to;n=B7.lE.width;o=B7.lE.height;MS(d,0.0,0.0+n,0.0,0.0+o,0.0,1.0);a.qF=Ce(b*20|0);f=FV(m);g=f.data;h=0;i=0;while(i<m){g[i]=h;g[i+1|0]=(h+1|0)<<16>>16;b=i+2|0;l=(h+2|0)<<16>>16;g[b]=l;g[i+3|0]=l;g[i+4|0]=(h+3|0)<<16>>16;g[i+5|0]=h;i
=i+6|0;h=(h+4|0)<<16>>16;}a.vN.mG.g8(f,0,g.length);if(c!==null)a.qn=c;else{e=Ri(A(477),A(478));if(!e.op){c=new Bj;d=new K;d.ke=G(16);E(d,d.kd,A(479));if(!e.op)j=e.nW;else{j=Bs.g$(e.m_);e.nW=j;}E(d,d.kd,j);e=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);c.kg=1;c.kh=1;c.kj=e;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}a.qn=e;a.y8=1;}},
AWj=(a,b)=>{let c=new Im();Lh(c,a,b);return c;},
AF$=a=>{let b,c;if(a.mL){b=new BO;b.kg=1;b.kh=1;b.kj=A(480);B(b);}a.sR=0;B5.g_(0);c=a.rn;if(c!==null)c.ha();else{c=a.qn;b=Bs;if(c.ll){CR(c,c.mj,c.ml);c.ll=0;}b.hc(c.m_);}GH(a);a.mL=1;},
AP5=a=>{let b,c;if(!a.mL){b=new BO;b.kg=1;b.kh=1;b.kj=A(481);B(b);}if(a.np>0)Ep(a);a.qk=null;a.mL=0;c=B5;c.g_(1);if(a.vr?0:1)c.bb(3042);},
AHI=(a,b,c,d,e)=>{let f,g;if(!a.mL){b=new BO;b.kg=1;b.kh=1;b.kj=A(482);B(b);}f=a.qF.data.length;if(b!==a.qk){Ep(a);a.qk=b;b=b.nk;a.vX=1.0/b.nn;a.t$=1.0/b.ng;g=f;}else{g=f-a.np|0;if(!g){Ep(a);g=f;}}if(g>=e)g=e;Dw(c,d,a.qF,a.np,g);a.np=a.np+g|0;e=e-g|0;while(e>0){d=d+g|0;Ep(a);g=f>=e?e:f;Dw(c,d,a.qF,0,g);a.np=a.np+g|0;e=e-g|0;}},
GI=(a,b,c,d,e,f,g,h,i,j,k)=>{let l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(!a.mL){b=new BO;b.kg=1;b.kh=1;b.kj=A(482);B(b);}l=a.qF;m=b.nx;if(m!==a.qk){Ep(a);a.qk=m;m=m.nk;a.vX=1.0/m.nn;a.t$=1.0/m.ng;}else{n=l.data;if(a.np==n.length)Ep(a);}o=c+e;p=d+f;q= -e;r= -f;s=g-e;t=h-f;if(!(i===1.0&&j===1.0)){q=q*i;r=r*j;s=s*i;t=t*j;}if(k===0.0){u=q;v=r;w=t;x=s;}else{Gc();n=GA.data;y=n[((k+90.0)*45.511112213134766|0)&16383];z=n[(k*45.511112213134766|0)&16383];c=y*q;u=c-z*r;d=z*q;v=d+y*r;e=z*t;q=c-e;c=y*t;w=d+c;x
=y*s-e;t=z*s+c;s=u+x-q;r=t-(w-v);}n=l.data;c=u+o;d=v+p;e=q+o;f=w+p;g=x+o;h=t+p;i=s+o;j=r+p;ba=b.tI;bb=b.vM;bc=b.vP;bd=b.tJ;be=a.py;bf=a.np;n[bf]=c;n[bf+1|0]=d;n[bf+2|0]=be;n[bf+3|0]=ba;n[bf+4|0]=bb;n[bf+5|0]=e;n[bf+6|0]=f;n[bf+7|0]=be;n[bf+8|0]=ba;n[bf+9|0]=bd;n[bf+10|0]=g;n[bf+11|0]=h;n[bf+12|0]=be;n[bf+13|0]=bc;n[bf+14|0]=bd;n[bf+15|0]=i;n[bf+16|0]=j;n[bf+17|0]=be;n[bf+18|0]=bc;n[bf+19|0]=bb;a.np=bf+20|0;},
Ep=a=>{let b,c,d,e,f,g;b=a.np;if(!b)return;a.sR=a.sR+1|0;a.uH=a.uH+1|0;c=b/20|0;if(c>a.vH)a.vH=c;b=c*6|0;d=a.qk;B5.cB(d.nf,d.oE);d=a.vN;e=a.qF;f=a.np;d.mJ.hd(e,0,f);g=d.mG.he(1);CL(g,0);CY(g,b);if(a.vr)B5.bb(3042);else{B5.W(3042);c=a.xZ;if(c!=(-1))B5.hf(c,a.wL,a.wT,a.v6);}g=a.rn;if(g===null)g=a.qn;Th(d,g,4,0,b,d.sG);a.np=0;},
GH=a=>{let b,c,d,e;Tl(Dl(a.tz,a.to.lF),a.pu);b=a.rn;if(b!==null){b.hi(A(483),a.tz);a.rn.hj(A(484),0);}else{b=a.qn;c=a.tz;ID();d=JB(b,A(483),Ib);e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}Q_(e,d,1,0,c.lF,0);b=a.qn;c=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}c.hm(JB(b,A(484),Ib),0);}},
AKu=()=>{WB=LX;};
let R_=F(0);
function Lc(){C.call(this);this.Ah=null;}
function T4(){let a=this;Lc.call(a);a.kX=null;a.vO=null;a.zh=null;a.zM=null;a.ly=null;a.lC=null;a.pT=null;a.rK=null;a.wh=null;a.tu=0;}
let AGh=(a,b)=>{let c,d,e,f,g,h,i,j,k;a.Ah=b;b=new Bh;b.kJ=1;b.km=R(C,16);a.zM=b;a.tu=0;c=new ND;b=new Tf;d=new QZ;ANH(d);d.wo=1.0;e=new Bo;C1();d.xX=e;d.vE=0.0;b.ux=new Bo;b.sA=1.0;b.ro=d;d=new Im;Ik();Lh(d,1000,null);Te(c,b,d);c.y_=1;a.kX=c;Lx.mZ=c;b=new Bh;b.kJ=1;b.km=R(C,16);a.ly=b;S(b,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());S(a.ly,D2());b=new Bh;b.kJ=1;b.km=R(C,16);a.lC=b;S(b,D8());S(a.lC,D8());S(a.lC,D8());S(a.lC,
D8());S(a.lC,D8());S(a.lC,D8());S(a.lC,D8());S(a.lC,D8());S(a.lC,D8());S(a.lC,D8());S(a.lC,D8());S(a.lC,D8());b=new Bh;b.kJ=1;b.km=R(C,16);a.pT=b;S(b,Rc());S(a.pT,Rc());a.rK=AFT();b=a.ly;f=BW(0,b.ki);if(f<0){g=b.km.data;c=g[0];c.mO=(c.mO+270.0)%360.0;if(f<0){c=g[0];d=a.kX;h=(d.me.m1/2|0)+27|0;if(!(c.kH===100.0&&c.kI===h)){c.kH=100.0;c.kI=h;}if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf
=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}a:{b=g[0];c=d.lJ;d=b.lb;if(d!==null){if(d!==c){i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}else break a;}S(c.kD,b);b.lb=c;b.x(c.lN);}b=a.lC;f=BW(0,b.ki);if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}g=b.km.data;c
=g[0];c.mO=(c.mO+270.0)%360.0;if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}c=g[0];d=a.kX;h=(d.me.m1/2|0)+27|0;if(!(c.kH===100.0&&c.kI===h)){c.kH=100.0;c.kI=h;}if(f<0){b:{b=g[0];c=d.lJ;d=b.lb;if(d!==null){if(d===c)break b;i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}S(c.kD,
b);b.lb=c;b.x(c.lN);}b=a.ly;f=BW(1,b.ki);if(f<0){g=b.km.data;c=g[1];d=a.kX;h=((d.me.m1/2|0)+27|0)+200|0;if(!(c.kH===250.0&&c.kI===h)){c.kH=250.0;c.kI=h;}if(f<0){c:{b=g[1];c=d.lJ;d=b.lb;if(d!==null){if(d===c)break c;i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}S(c.kD,b);b.lb=c;b.x(c.lN);}b=a.lC;f=BW(1,b.ki);if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,1,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k
>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}g=b.km.data;c=g[1];d=a.kX;h=((d.me.m1/2|0)+27|0)+200|0;if(!(c.kH===250.0&&c.kI===h)){c.kH=250.0;c.kI=h;}if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,1,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}d:{b=g[1];c=d.lJ;d=b.lb;if(d!==null){if(d===c)break d;i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e
=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}S(c.kD,b);b.lb=c;b.x(c.lN);}b=a.ly;f=BW(2,b.ki);if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,2,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}g=b.km.data;c=g[2];d=a.kX;h=((d.me.m1/2|0)+27|0)+125|0;if(!(c.kH===250.0&&c.kI===h)){c.kH=250.0;c.kI=h;}if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,2,10);E(c,
c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}e:{b=g[2];c=d.lJ;d=b.lb;if(d!==null){if(d===c)break e;i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}S(c.kD,b);b.lb=c;b.x(c.lN);}b=a.lC;f=BW(2,b.ki);if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,2,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if
(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}g=b.km.data;c=g[2];d=a.kX;h=((d.me.m1/2|0)+27|0)+125|0;if(!(c.kH===250.0&&c.kI===h)){c.kH=250.0;c.kI=h;}if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,2,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}f:{b=g[2];c=d.lJ;d=b.lb;if(d!==null){if(d===c)break f;i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e
=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}S(c.kD,b);b.lb=c;b.x(c.lN);}b=a.ly;f=BW(3,b.ki);if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,3,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}g=b.km.data;c=g[3];d=a.kX;h=((d.me.m1/2|0)+27|0)+200|0;if(!(c.kH===550.0&&c.kI===h)){c.kH=550.0;c.kI=h;}if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,3,10);E(c,
c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}g:{b=g[3];c=d.lJ;d=b.lb;if(d!==null){if(d===c)break g;i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}S(c.kD,b);b.lb=c;b.x(c.lN);}b=a.lC;f=BW(3,b.ki);if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,3,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if
(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}g=b.km.data;c=g[3];d=a.kX;h=((d.me.m1/2|0)+27|0)+200|0;if(!(c.kH===550.0&&c.kI===h)){c.kH=550.0;c.kI=h;}if(f>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,3,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}h:{b=g[3];c=d.lJ;d=b.lb;if(d!==null){if(d===c)break h;i=DO(d.kD,b,1);if(i!=(-1)){e=d.kD;CA(e);e
=Do(e,i);d=d.lN;if(d!==null)Ek(d,e);e.lb=null;e.x(null);}}S(c.kD,b);b.lb=c;b.x(c.lN);}b=a.ly;if(4>=b.ki){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,4,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);Kj(d,b);B(d);}b=new H;U(b);B(b);}C4(b.km.data[4],550.0,((a.kX.me.m1/2|0)+27|0)+125|0);CW(a.kX,Q(a.ly,4));C4(Q(a.lC,4),550.0,((Dc(C8(a.kX))/2|0)+27|0)+125|0);CW(a.kX,Q(a.lC,4));C4(Q(a.ly,5),900.0,((Dc(C8(a.kX))/2|0)+27|0)+200|0);CW(a.kX,
Q(a.ly,5));C4(Q(a.lC,5),900.0,((Dc(C8(a.kX))/2|0)+27|0)+200|0);CW(a.kX,Q(a.lC,5));C4(Q(a.ly,6),550.0,((Dc(C8(a.kX))/2|0)+27|0)+25|0);CW(a.kX,Q(a.ly,6));C4(Q(a.lC,6),550.0,((Dc(C8(a.kX))/2|0)+27|0)+25|0);CW(a.kX,Q(a.lC,6));C4(Q(a.ly,7),550.0,((Dc(C8(a.kX))/2|0)+27|0)-50|0);CW(a.kX,Q(a.ly,7));C4(Q(a.lC,7),550.0,((Dc(C8(a.kX))/2|0)+27|0)-50|0);CW(a.kX,Q(a.lC,7));C4(Q(a.ly,8),900.0,((Dc(C8(a.kX))/2|0)+27|0)+25|0);CW(a.kX,Q(a.ly,8));C4(Q(a.lC,8),900.0,((Dc(C8(a.kX))/2|0)+27|0)+25|0);CW(a.kX,Q(a.lC,8));I$(Q(a.ly,
9),270.0);C4(Q(a.ly,9),1050.0,((Dc(C8(a.kX))/2|0)+27|0)+300|0);CW(a.kX,Q(a.ly,9));I$(Q(a.lC,9),270.0);C4(Q(a.lC,9),1050.0,((Dc(C8(a.kX))/2|0)+27|0)+300|0);CW(a.kX,Q(a.lC,9));I$(Q(a.ly,10),270.0);C4(Q(a.ly,10),400.0,((Dc(C8(a.kX))/2|0)-27|0)-100|0);CW(a.kX,Q(a.ly,10));I$(Q(a.lC,10),270.0);C4(Q(a.lC,10),400.0,((Dc(C8(a.kX))/2|0)-27|0)-100|0);CW(a.kX,Q(a.lC,10));C4(Q(a.ly,11),250.0,((Dc(C8(a.kX))/2|0)-27|0)-200|0);CW(a.kX,Q(a.ly,11));C4(Q(a.lC,11),250.0,((Dc(C8(a.kX))/2|0)-27|0)-200|0);CW(a.kX,Q(a.lC,11));C4(Q(a.pT,
0),670.0,((Dc(C8(a.kX))/2|0)+27|0)+150|0);CW(a.kX,Q(a.pT,0));C4(Q(a.pT,1),670.0,((Dc(C8(a.kX))/2|0)+27|0)-25|0);CW(a.kX,Q(a.pT,1));C4(a.rK,1100.0,(Dc(C8(a.kX))/2|0)-Ra(a.rK)/2.0);CW(a.kX,a.rK);b=ADX();a.wh=b;C4(b,AQv(C8(a.kX))/1.5,Dc(C8(a.kX))/4|0);CW(a.kX,a.wh);b=AQI(a.ly,a.pT,a.rK);a.vO=b;CW(a.kX,b);return;}d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,1,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b
=new H;U(b);B(b);}d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,1,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,
c.kd,0,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));i=b.ki;J(c,c.kd,i,10);b=new I;g=c.ke;j=g.data;k=c.kd;f=j.length;if(k>=0&&k<=(f-0|0)){b.kf=L(g.data,0,k);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);},
AKq=a=>{let b=new T4();AGh(b,a);return b;},
ASu=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;B5.hw(0.8899999856948853,0.8899999856948853,0.8899999856948853,0.5);B5.hx(16384);if(!(a.tu%500|0)){c=AI$(a);a.zh=c;d=a.vO.o9;e=BW(0,d.ki);if(e>=0){f=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));g=d.ki;J(c,c.kd,g,10);d=new I;h=c.ke;i=h.data;e=c.kd;j=i.length;if(e>=0&&e<=(j-0|0)){d.kf=L(h.data,0,e);f.kg=1;f.kh=1;f.kj=d;B(f);}c=new H;U(c);B(c);}h=d.km.data;b=h[0].kl;if(e>=0){f=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));g
=d.ki;J(c,c.kd,g,10);d=new I;h=c.ke;i=h.data;e=c.kd;j=i.length;if(e>=0&&e<=(j-0|0)){d.kf=L(h.data,0,e);f.kg=1;f.kh=1;f.kj=d;B(f);}c=new H;U(c);B(c);}k=h[0].kk;if(!(c.kH===b&&c.kI===k)){c.kH=b;c.kI=k;}a:{d=a.kX.lJ;f=c.lb;if(f!==null){if(f===d)break a;g=DO(f.kD,c,1);if(g!=(-1)){l=f.kD;CA(l);l=Do(l,g);f=f.lN;if(f!==null)Ek(f,l);l.lb=null;l.x(null);}}S(d.kD,c);c.lb=d;c.lN=d.lN;}}a.tu=a.tu+1|0;AOy(a.kX,B7.s_);c=a.kX;f=c.me.ro;WS(f,1);if(c.lJ.nP){d=c.v5;f=f.q6;if(d.mL)Ep(d);Dl(d.to,f.lF);if(d.mL)GH(d);AF$(d);f=c.lJ;if
(f.nT){l=K3(f);Dl(f.p9,d.pu.lF);if(d.mL)Ep(d);Dl(d.pu,l.lF);if(d.mL)GH(d);}Qz(f,d,1.0);if(f.nT){f=f.p9;if(d.mL)Ep(d);Dl(d.pu,f.lF);if(d.mL)GH(d);}AP5(d);if(BS)ANA(c);}};
let WR=F(BA);
let T=F(BA);
let ADC=(a,b)=>{a.kg=1;a.kh=1;a.kj=b;},
KX=a=>{let b=new T();ADC(b,a);return b;};
let ACV=F();
let Lz=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function ED(){C.call(this);this.n$=null;}
let ZB=a=>{AIR(a.n$);};
let AD_=F();
let Wz=F();
let Pd=null;
let NP=()=>{NP=BR(Wz);APH();};
let APH=()=>{let b,c;b=Ba((N2.p()).data.length);c=b.data;Pd=b;c[Ga.kq]=1;c[F3.kq]=2;c[FR.kq]=3;c[FI.kq]=4;c[Kg.kq]=5;};
let NL=F(BA);
function Oa(){let a=this;C.call(a);a.ro=null;a.tA=0.0;a.tK=0.0;a.qo=0;a.qp=0;a.p1=0;a.m1=0;a.ux=null;}
let NK=(a,b)=>{let c,d,e,f;AIU(a.qo,a.qp,a.p1,a.m1);c=a.ro;d=a.tA;c.uw=d;e=a.tK;c.u5=e;if(b){f=c.u4;d=d/2.0;e=e/2.0;f.ks=d;f.kt=e;f.ku=0.0;}WS(c,1);},
Fc=(a,b)=>{let c,d,e,f;c=a.ux;d=b.kl;e=b.kk;c.ks=d;c.kt=e;c.ku=1.0;ALI(a.ro,c,a.qo,a.qp,a.p1,a.m1);c=a.ux;f=c.ks;d=c.kt;b.kl=f;b.kk=d;return b;},
AQv=a=>{return a.p1;},
Dc=a=>{return a.m1;};
function Tf(){Oa.call(this);this.sA=0.0;}
function UQ(){let a=this;Ci.call(a);a.yV=null;a.yS=null;a.zr=null;a.ze=null;a.sb=null;a.pt=null;a.t9=null;}
let ATP=a=>{let b,c,d,e,f,g;EN(a);a.sb=new DH;b=new FE;c=Fr;d=Gf(c.pw,A(485),E_);e=null;f=F4(d,FB(d),e,0);e=B5;c=e.ko.createTexture();g=e.mN;e.mN=g+1|0;B6(e.nH,g,Cc(c));e=Fs;b.n5=e;b.ot=e;e=FD;b.n0=e;b.n8=e;b.oZ=1.0;b.nf=3553;b.oE=g;Gl(b,f);e=Da;c=DA;if(e===null)c=F7(c);else{g=Fm(e);c=FX(c,e,g&(c.mw.data.length-1|0),g);}c=c===null?null:c.mX;if(c===null){c=new Bh;Bu(c);c.kJ=1;c.km=R(C,16);}S(c,b);E6(DA,e,c);a.yV=b;e=new G2;c=b.nk;Ig(e,b,0,0,c.nn,c.ng);a.yS=e;if(!(a.lf===41.0&&a.li===59.0)){a.lf=41.0;a.li=59.0;}Iv(a,
a.kH,a.kI,a.lf,a.li);e=new Z;e.kl=0.0;e.kk=16.0;a.zr=e;e=new Z;e.kl=a.lf;e.kk=16.0;a.ze=e;a.pt=GZ;e=new UD;e.sY=a;if(!LG(a.tp,e,1))S(a.tp,e);},
D2=()=>{let a=new UQ();ATP(a);return a;},
Yk=(a,b,c)=>{let d,e,f,g;if(a.pt.nB){d=new Gm;d.o6=0.0;a.t9=d;}else{d=new Gm;d.o6=1.0;a.t9=d;}d=a.pD;c=d.k_;e=d.k$;f=d.k9;g=a.t9.o6;d=b.nw;d.k_=c;d.k$=e;d.k9=f;d.lc=g;CO(d);b.py=Ec(b.nw);GI(b,a.yS,a.kH,a.kI,a.om,a.on,a.lf,a.li,a.nl,a.nm,a.mO);AIA(a);},
AEc=(a,b)=>{Fg(a,b);},
AIA=a=>{let b,c,d,e,f;Gg(a,100);if(a.pt.nB){b=a.sb;c=a.kH;d=a.kI;b.nz=c;b.ny=d;b.nA=0.0;b.nu=0.0;}else if(a.mO!==270.0){b=a.sb;c=a.kH;d=a.kI;e=a.lf/4.0+2.0;f=a.li+2.0;b.nz=c;b.ny=d;b.nA=e;b.nu=f;}else{b=a.sb;c=a.kH;d=a.kI;e=a.lf/4.0;f=d-e;d=a.li+2.0;e=e+2.0;b.nz=c;b.ny=f;b.nA=d;b.nu=e;}};
function Py(){let a=this;Ci.call(a);a.z8=null;a.yu=null;a.AM=null;a.Ao=null;a.tc=null;a.uo=null;a.vI=null;}
let ALT=a=>{let b,c,d,e,f,g,h;EN(a);a.tc=new DH;b=new FE;c=Fr;d=Gf(c.pw,A(486),E_);e=null;f=F4(d,FB(d),e,0);d=B5;e=d.ko.createTexture();g=d.mN;d.mN=g+1|0;B6(d.nH,g,Cc(e));e=Fs;b.n5=e;b.ot=e;e=FD;b.n0=e;b.n8=e;b.oZ=1.0;b.nf=3553;b.oE=g;Gl(b,f);e=Da;c=DA;if(e===null)c=F7(c);else{h=Fm(e);c=FX(c,e,h&(c.mw.data.length-1|0),h);}c=c===null?null:c.mX;if(c===null){c=new Bh;Bu(c);c.kJ=1;c.km=R(C,16);}S(c,b);E6(DA,e,c);a.z8=b;e=new G2;c=b.nk;Ig(e,b,0,0,c.nn,c.ng);a.yu=e;if(!(a.lf===41.0&&a.li===59.0)){a.lf=41.0;a.li=59.0;}Iv(a,
a.kH,a.kI,a.lf,a.li);e=new Z;e.kl=0.0;e.kk=16.0;a.AM=e;e=new Z;e.kl=a.lf;e.kk=16.0;a.Ao=e;a.uo=Jv;},
D8=()=>{let a=new Py();ALT(a);return a;},
AIQ=(a,b,c)=>{let d,e,f,g;if(!a.uo.nB){d=new Gm;d.o6=0.0;a.vI=d;}else{d=new Gm;d.o6=1.0;a.vI=d;}d=a.pD;c=d.k_;e=d.k$;f=d.k9;g=a.vI.o6;d=b.nw;d.k_=c;d.k$=e;d.k9=f;d.lc=g;CO(d);b.py=Ec(b.nw);GI(b,a.yu,a.kH,a.kI,a.om,a.on,a.lf,a.li,a.nl,a.nm,a.mO);ADv(a);},
AOZ=(a,b)=>{Fg(a,b);},
ADv=a=>{let b,c,d,e,f;Gg(a,4);if(a.uo.nB){b=a.tc;c=a.kH;d=a.kI;b.nz=c;b.ny=d;b.nA=0.0;b.nu=0.0;}else if(a.mO!==270.0){b=a.tc;c=a.kH;d=a.kI;e=a.lf/4.0+2.0;f=a.li+2.0;b.nz=c;b.ny=d;b.nA=e;b.nu=f;}else{b=a.tc;c=a.kH;d=a.kI;e=a.lf/4.0;f=d-e;d=a.li+2.0;e=e+2.0;b.nz=c;b.ny=f;b.nA=d;b.nu=e;}};
function T0(){let a=this;Ci.call(a);a.Aw=null;a.xK=null;a.wB=null;a.zZ=null;}
let AUv=a=>{let b,c,d,e,f,g,h;EN(a);a.wB=new DH;b=new FE;c=Fr;d=Gf(c.pw,A(487),E_);e=null;f=F4(d,FB(d),e,0);e=B5;c=e.ko.createTexture();g=e.mN;e.mN=g+1|0;B6(e.nH,g,Cc(c));e=Fs;b.n5=e;b.ot=e;e=FD;b.n0=e;b.n8=e;b.oZ=1.0;b.nf=3553;b.oE=g;Gl(b,f);e=Da;c=DA;if(e===null)c=F7(c);else{h=Fm(e);c=FX(c,e,h&(c.mw.data.length-1|0),h);}c=c===null?null:c.mX;if(c===null){c=new Bh;Bu(c);c.kJ=1;c.km=R(C,16);}S(c,b);E6(DA,e,c);a.Aw=b;e=new G2;c=b.nk;Ig(e,b,0,0,c.nn,c.ng);a.xK=e;if(!(a.lf===159.0&&a.li===109.0)){a.lf=159.0;a.li
=109.0;}Iv(a,a.kH,a.kI,a.lf,a.li);a.zZ=GZ;},
Rc=()=>{let a=new T0();AUv(a);return a;},
Zw=(a,b,c)=>{let d,e,f,g;d=a.pD;c=d.k_;e=d.k$;f=d.k9;g=d.lc;d=b.nw;d.k_=c;d.k$=e;d.k9=f;d.lc=g;CO(d);b.py=Ec(b.nw);GI(b,a.xK,a.kH,a.kI,a.om,a.on,a.lf,a.li,a.nl,a.nm,a.mO);Gg(a,100);b=a.wB;g=a.kH;f=a.kI;e=a.lf;c=a.li;b.nz=g;b.ny=f;b.nA=e;b.nu=c;},
AT9=(a,b)=>{Fg(a,b);};
function QT(){let a=this;Ci.call(a);a.z5=null;a.ys=null;a.v_=null;a.zj=null;}
let APF=a=>{let b,c,d,e,f,g,h;EN(a);a.v_=new DH;b=new FE;c=Fr;d=Gf(c.pw,A(488),E_);e=null;f=F4(d,FB(d),e,0);e=B5;c=e.ko.createTexture();g=e.mN;e.mN=g+1|0;B6(e.nH,g,Cc(c));e=Fs;b.n5=e;b.ot=e;e=FD;b.n0=e;b.n8=e;b.oZ=1.0;b.nf=3553;b.oE=g;Gl(b,f);e=Da;c=DA;if(e===null)c=F7(c);else{h=Fm(e);c=FX(c,e,h&(c.mw.data.length-1|0),h);}c=c===null?null:c.mX;if(c===null){c=new Bh;Bu(c);c.kJ=1;c.km=R(C,16);}S(c,b);E6(DA,e,c);a.z5=b;e=new G2;c=b.nk;Ig(e,b,0,0,c.nn,c.ng);a.ys=e;if(!(a.lf===100.0&&a.li===100.0)){a.lf=100.0;a.li
=100.0;}Iv(a,a.kH,a.kI,a.lf,a.li);a.zj=GZ;},
AFT=()=>{let a=new QT();APF(a);return a;},
AIK=(a,b,c)=>{let d,e,f,g;d=a.pD;c=d.k_;e=d.k$;f=d.k9;g=d.lc;d=b.nw;d.k_=c;d.k$=e;d.k9=f;d.lc=g;CO(d);b.py=Ec(b.nw);GI(b,a.ys,a.kH,a.kI,a.om,a.on,a.lf,a.li,a.nl,a.nm,a.mO);Gg(a,100);b=a.v_;g=a.kH;f=a.kI;e=a.lf;c=a.li;b.nz=g;b.ny=f;b.nA=e;b.nu=c;},
AMW=(a,b)=>{Fg(a,b);};
function Ps(){let a=this;Ci.call(a);a.A8=null;a.Ar=null;a.zU=null;a.zS=null;a.x0=null;a.AK=null;a.ts=0.0;a.wz=null;}
let AEJ=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;EN(a);a.wz=new DH;b=new FE;c=Fr;d=Gf(c.pw,A(489),E_);e=null;f=F4(d,FB(d),e,0);e=B5;c=e.ko.createTexture();g=e.mN;e.mN=g+1|0;B6(e.nH,g,Cc(c));e=Fs;b.n5=e;b.ot=e;e=FD;b.n0=e;b.n8=e;b.oZ=1.0;b.nf=3553;b.oE=g;Gl(b,f);e=Da;c=DA;if(e===null)c=F7(c);else{h=Fm(e);c=FX(c,e,h&(c.mw.data.length-1|0),h);}c=c===null?null:c.mX;if(c===null){c=new Bh;Bu(c);c.kJ=1;c.km=R(C,16);}S(c,b);E6(DA,e,c);a.A8=b;e=new E8;e.nx=b;b=b.nk;In(e,0,0,b.nn,b.ng);a.Ar=e;if(!(a.lf===44.0&&a.li===84.0))
{a.lf=44.0;a.li=84.0;}if(!(a.nl===1.5&&a.nm===1.5)){a.nl=1.5;a.nm=1.5;}i=ADR(e,44,84);j=i.data;a.zU=i;k=j.length;i=R(E8,Dt(k,j[0].data.length));l=i.data;a.zS=i;a.ts=0.0;h=0;g=0;while(g<k){m=0;while(m<j[g].data.length){n=h+1|0;l[h]=j[g].data[m];m=m+1|0;h=n;}g=g+1|0;}e=new WX;e.pE=Ic;e.wy=0.20000000298023224;e.t6=i;e.z9=l.length*0.20000000298023224;a.x0=e;},
ADX=()=>{let a=new Ps();AEJ(a);return a;},
ALP=(a,b,c)=>{let d,e,f,g;d=a.pD;c=d.k_;e=d.k$;f=d.k9;g=d.lc;d=b.nw;d.k_=c;d.k$=e;d.k9=f;d.lc=g;CO(d);b.py=Ec(b.nw);d=ANL(a.x0,a.ts,1);a.AK=d;GI(b,d,a.kH,a.kI,a.om,a.on,a.lf,a.li,a.nl,a.nm,a.mO);Gg(a,100);b=a.wz;g=a.kH;f=a.kI;e=a.lf;c=a.li;b.nz=g;b.ny=f;b.nA=e;b.nu=c;},
ANT=(a,b)=>{Fg(a,b);a.ts=a.ts+b;};
function Ud(){let a=this;Ci.call(a);a.AD=null;a.xm=null;a.o9=null;a.sz=null;a.oR=null;a.rC=null;a.r$=null;a.mW=null;a.rp=null;a.ox=null;a.sl=null;a.oc=null;a.sp=null;a.oq=null;a.rT=null;a.sZ=null;a.tL=null;a.rz=null;a.nq=null;a.vt=null;a.ra=null;a.vi=null;a.qM=null;a.n2=null;a.rk=null;a.qU=null;a.sO=null;a.AV=null;a.lW=null;}
let X8=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q;EN(a);e=new FE;f=Fr;g=Gf(f.pw,A(486),E_);h=null;i=F4(g,FB(g),h,0);h=B5;f=h.ko.createTexture();j=h.mN;h.mN=j+1|0;B6(h.nH,j,Cc(f));f=Fs;e.n5=f;e.ot=f;f=FD;e.n0=f;e.n8=f;e.oZ=1.0;e.nf=3553;e.oE=j;Gl(e,i);g=Da;f=DA;if(g===null)f=F7(f);else{j=Fm(g);f=FX(f,g,j&(f.mw.data.length-1|0),j);}i=f===null?null:f.mX;if(i===null){i=new Bh;Bu(i);i.kJ=1;i.km=R(C,16);}S(i,e);E6(DA,g,i);a.AD=e;f=new E8;f.nx=e;In(f,0,0,1,1);a.xm=f;a.AV=b;f=new Bh;f.kJ=1;f.km=R(C,16);a.o9=f;g=new Z;j
=b.ki;if(0>=j){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}l=b.km.data;o=l[0].kH+16.0;if(1>=j){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,1,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}p=l[1].kI+250.0;g.kl
=o;g.kk=p;S(f,g);f=a.o9;g=new Z;j=b.ki;if(0>=j){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}l=b.km.data;o=l[0].kH+16.0;if(1>=j){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,1,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b
=new H;U(b);B(b);}p=l[1].kI+15.0;g.kl=o;g.kk=p;S(f,g);f=new Bh;f.kJ=1;f.km=R(C,16);a.sz=f;g=new Z;if(0>=b.ki){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}o=b.km.data[0].kH+16.0;i=a.o9;k=i.ki;j=k-1|0;if(j>=k){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,j,10);E(b,b.kd,A(19));k=i.ki;J(b,b.kd,k,10);d=new I;l=b.ke;m=l.data;j=b.kd;n
=m.length;if(j>=0&&j<=(n-0|0)){d.kf=L(l.data,0,j);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;U(b);B(b);}p=i.km.data[j].kk;g.kl=o;g.kk=p;S(f,g);f=a.sz;g=new Z;j=BW(0,b.ki);if(j>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}l=b.km.data;o=l[0].kH+16.0;if(j>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,
c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}p=l[0].kI;g.kl=o;g.kk=p;S(f,g);f=new Bh;f.kJ=1;f.km=R(C,16);a.qU=f;g=new Z;j=BW(0,b.ki);if(j>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}l=b.km.data;o=l[0].kH+16.0;if(j>=0){d=new H;c=new K;c.ke
=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}q=l[0].kI;if(j>=0){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}p=q-l[0].lf;g.kl=o;g.kk=p;S(f,g);f=a.qU;g=new Z;j=b.ki;if(0>=j){d
=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}l=b.km.data;o=l[0].kH+16.0;if(11>=j){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,11,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}p=l[11].kI;g.kl=o;g.kk=p;S(f,
g);f=new Bh;f.kJ=1;f.km=R(C,16);a.sO=f;g=new Z;if(0>=b.ki){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}o=b.km.data[0].kH+16.0;i=a.qU;k=i.ki;j=k-1|0;if(j>=k){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,j,10);E(b,b.kd,A(19));k=i.ki;J(b,b.kd,k,10);d=new I;l=b.ke;m=l.data;j=b.kd;n=m.length;if(j>=0&&j<=(n-0|0)){d.kf=L(l.data,0,
j);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;U(b);B(b);}p=i.km.data[j].kk;g.kl=o;g.kk=p;S(f,g);f=a.sO;g=new Z;if(0>=b.ki){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}o=b.km.data[0].kH+16.0;k=f.ki;j=k-1|0;if(j>=k){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,j,10);E(b,b.kd,A(19));k=f.ki;J(b,b.kd,k,10);d=new I;l=b.ke;m=l.data;j=b.kd;n
=m.length;if(j>=0&&j<=(n-0|0)){d.kf=L(l.data,0,j);c.kg=1;c.kh=1;c.kj=d;B(c);}b=new H;U(b);B(b);}p=f.km.data[j].kk-250.0;g.kl=o;g.kk=p;S(f,g);f=new Bh;f.kJ=1;f.km=R(C,16);a.oR=f;g=new Z;if(0>=b.ki){d=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,0,10);E(c,c.kd,A(19));k=b.ki;J(c,c.kd,k,10);b=new I;l=c.ke;m=l.data;j=c.kd;n=m.length;if(j>=0&&j<=(n-0|0)){b.kf=L(l.data,0,j);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}o=b.km.data[0].kH+16.0;i=a.o9;k=i.ki;j=k-1|0;if(j>=k){c=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,
b.kd,j,10);R7(c,Et(Fw(FO(b,A(19)),i.ki)));B(c);}BY(g,o,i.km.data[j].kk);S(f,g);f=a.oR;g=new Z;o=Cg(Q(b,1))-25.0;i=a.o9;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.oR;g=new Z;o=Cg(Q(b,1));i=a.oR;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.rC=f;g=new Z;i=a.oR;o=(Q(i,i.ki-2|0)).kl;i=a.oR;BY(g,o,(Q(i,i.ki-2|0)).kk);S(f,g);f=a.rC;g=new Z;i=a.oR;BY(g,(Q(i,i.ki-2|0)).kl,Df(Q(b,2))+15.0);S(f,g);f=a.rC;g=new Z;o=Cg(Q(b,2));i=a.rC;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.mW=f;S(f,Cl(Cg(Q(b,1))+DU(Q(b,1)),Df(Q(b,1))+15.0));f
=a.mW;g=new Z;o=(Q(f,f.ki-1|0)).kl+25.0;i=a.mW;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.mW;g=new Z;o=Cg(Q(b,3))-75.0;i=a.mW;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.mW;g=new Z;o=Cg(Q(b,3))-25.0;i=a.mW;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.mW;g=new Z;o=Cg(Q(b,3));i=a.mW;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.r$=f;S(f,Cl(Cg(Q(b,2))+DU(Q(b,2)),Df(Q(b,2))+15.0));f=a.r$;g=new Z;o=(Q(a.mW,1)).kl;i=a.r$;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.r$;S(f,Cl((Q(f,f.ki-1|0)).kl,(Q(a.mW,0)).kk));f=C9();a.rp=f;S(f,Cl((Q(a.mW,3)).kl,
(Q(a.mW,3)).kk));f=a.rp;S(f,Cl((Q(f,f.ki-1|0)).kl,Df(Q(b,4))+15.0));f=a.rp;g=new Z;o=Cg(Q(b,4));i=a.rp;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.ox=f;S(f,Cl((Q(a.mW,2)).kl,(Q(a.mW,2)).kk));f=a.ox;S(f,Cl((Q(f,f.ki-1|0)).kl,Df(Q(b,6))+15.0));f=a.ox;g=new Z;o=Cg(Q(b,6))-25.0;i=a.ox;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.ox;g=new Z;o=Cg(Q(b,6));i=a.ox;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.sl=f;S(f,Cl((Q(a.ox,2)).kl,(Q(a.ox,2)).kk));f=a.sl;S(f,Cl((Q(f,f.ki-1|0)).kl,Df(Q(b,7))+15.0));f=a.sl;g=new Z;o=Cg(Q(b,
7));i=a.sl;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.oc=f;S(f,Cl(Cg(Q(b,3))+DU(Q(b,3)),Df(Q(b,3))+15.0));f=a.oc;g=new Z;o=(Q(f,f.ki-1|0)).kl+25.0;i=a.oc;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.oc;g=new Z;o=Cg(Q(c,0));i=a.oc;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.sp=f;S(f,Cl(Cg(Q(b,4))+DU(Q(b,2)),Df(Q(b,4))+15.0));f=a.sp;g=new Z;o=(Q(a.oc,1)).kl;i=a.sp;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.sp;S(f,Cl((Q(f,f.ki-1|0)).kl,(Q(a.oc,1)).kk));f=C9();a.oq=f;S(f,Cl(Cg(Q(b,6))+DU(Q(b,6)),Df(Q(b,6))+15.0));f=a.oq;g=new Z;o
=(Q(f,f.ki-1|0)).kl+25.0;i=a.oq;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.oq;g=new Z;o=Cg(Q(c,1));i=a.oq;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.rT=f;S(f,Cl(Cg(Q(b,7))+DU(Q(b,2)),Df(Q(b,7))+15.0));f=a.rT;g=new Z;o=(Q(a.oq,1)).kl;i=a.rT;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.rT;S(f,Cl((Q(f,f.ki-1|0)).kl,(Q(a.oq,1)).kk));f=C9();a.sZ=f;g=new Z;i=a.oc;o=(Q(i,i.ki-1|0)).kl+DU(Q(c,0));i=a.oc;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=a.sZ;g=new Z;o=Cg(Q(b,5));i=a.sZ;BY(g,o,(Q(i,i.ki-1|0)).kk);S(f,g);f=C9();a.tL=f;g=new Z;i
=a.oq;o=(Q(i,i.ki-1|0)).kl+DU(Q(c,1));c=a.oq;BY(g,o,(Q(c,c.ki-1|0)).kk);S(f,g);c=a.tL;f=new Z;o=Cg(Q(b,8));g=a.tL;BY(f,o,(Q(g,g.ki-1|0)).kk);S(c,f);c=C9();a.nq=c;S(c,Cl(Cg(Q(b,5))+DU(Q(b,5)),Df(Q(b,5))+15.0));c=a.nq;f=new Z;o=(Q(c,c.ki-1|0)).kl+50.0;g=a.nq;BY(f,o,(Q(g,g.ki-1|0)).kk);S(c,f);c=a.nq;f=new Z;o=Cg(Q(b,9))+16.0;g=a.nq;BY(f,o,(Q(g,g.ki-1|0)).kk);S(c,f);c=a.nq;f=new Z;o=Cg(d)+25.0;g=a.nq;BY(f,o,(Q(g,g.ki-1|0)).kk);S(c,f);c=a.nq;S(c,Cl((Q(c,c.ki-1|0)).kl,Df(d)+Ra(d)/4.0));c=C9();a.rz=c;S(c,Cl(Cg(Q(b,
8))+DU(Q(b,8)),Df(Q(b,8))+15.0));c=a.rz;f=new Z;o=(Q(a.nq,1)).kl;g=a.rz;BY(f,o,(Q(g,g.ki-1|0)).kk);S(c,f);c=a.rz;S(c,Cl((Q(c,c.ki-1|0)).kl,(Q(a.nq,1)).kk));c=C9();a.n2=c;S(c,Cl(Cg(d)+25.0,Df(d)));c=a.n2;S(c,Cl((Q(c,c.ki-1|0)).kl,Df(Q(b,11))+15.0));c=a.n2;d=new Z;o=Cg(Q(b,10))+16.0;f=a.n2;BY(d,o,(Q(f,f.ki-1|0)).kk);S(c,d);c=a.n2;d=new Z;o=Cg(Q(b,11))+DU(Q(b,11));f=a.n2;BY(d,o,(Q(f,f.ki-1|0)).kk);S(c,d);c=C9();a.vt=c;S(c,Cl((Q(a.nq,2)).kl,(Q(a.nq,2)).kk+12.0));c=a.vt;S(c,Cl((Q(c,c.ki-1|0)).kl,Df(Q(b,9))-DU(Q(b,
9))));c=C9();a.ra=c;S(c,Cl((Q(a.nq,2)).kl,Df(Q(b,9))));c=a.ra;d=new Z;o=(Q(c,c.ki-1|0)).kl;f=a.ra;BY(d,o,(Q(f,f.ki-1|0)).kk+25.0);S(c,d);c=a.ra;d=new Z;o=(Q(c,c.ki-1|0)).kl-10.0;f=a.ra;BY(d,o,(Q(f,f.ki-1|0)).kk-10.0);S(c,d);c=C9();a.vi=c;S(c,Cl((Q(a.n2,2)).kl,(Q(a.n2,2)).kk+12.0));c=a.vi;S(c,Cl((Q(c,c.ki-1|0)).kl,Df(Q(b,10))-DU(Q(b,10))));c=C9();a.qM=c;S(c,Cl((Q(a.n2,2)).kl,Df(Q(b,10))));c=a.qM;d=new Z;o=(Q(c,c.ki-1|0)).kl;f=a.qM;BY(d,o,(Q(f,f.ki-1|0)).kk+25.0);S(c,d);c=a.qM;d=new Z;o=(Q(c,c.ki-1|0)).kl+10.0;f
=a.qM;BY(d,o,(Q(f,f.ki-1|0)).kk-10.0);S(c,d);c=C9();a.rk=c;d=new Z;o=Cg(Q(b,11));f=a.qU;BY(d,o,(Q(f,f.ki-1|0)).kk+15.0);S(c,d);c=a.rk;d=new Z;o=Cg(Q(b,0))+16.0;b=a.rk;BY(d,o,(Q(b,b.ki-1|0)).kk);S(c,d);},
AQI=(a,b,c)=>{let d=new Ud();X8(d,a,b,c);return d;},
ACQ=(a,b,c)=>{let d,e,f;Gg(a,0);d=new RI;e=a.xm;f=new RN;f.yW=20;f.Aq=4000;f.zl=1.0;ATE(d,b,e,f);d.Bg=Ce(8);a.lW=d;c=Ec(RK);d.rR.no=c;b=a.lW;d=a.o9;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.sz;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.qU;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.sO;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.oR;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.rC;e=CB;Cx(b.l5,d,10.0,e,1);b=a.lW;d=a.mW;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.r$;e=CB;Cx(b.l5,d,10.0,e,1);b=a.lW;d=a.ox;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.rp;e=CB;Cx(b.l5,
d,10.0,e,1);b=a.lW;d=a.sl;e=CB;Cx(b.l5,d,10.0,e,1);b=a.lW;d=a.oc;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.sp;e=CB;Cx(b.l5,d,10.0,e,1);b=a.lW;d=a.oq;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.rT;e=CB;Cx(b.l5,d,10.0,e,1);b=a.lW;d=a.sZ;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.tL;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.nq;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.rz;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.n2;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;d=a.rk;e=CB;Cx(b.l5,d,21.0,e,1);b=a.lW;c=Ec(WL);b.rR.no=c;b=a.lW;d=a.vt;e=CB;Cx(b.l5,d,10.0,e,1);b=a.lW;d
=a.ra;e=Ja;Cx(b.l5,d,10.0,e,1);b=a.lW;d=a.vi;e=CB;Cx(b.l5,d,10.0,e,1);b=a.lW;d=a.qM;e=Ja;Cx(b.l5,d,10.0,e,1);};
let F9=F(HN);
let AFk=(a,b)=>{DP(Bz(b));};
let AC8=F(EM);
let W0=null;
let AVn=()=>{W0=M(ADI);};
let AMG=F();
let Ov=null,QS=null,RD=null;
let AHl=()=>{Ov=ABh([X(1),X(10),X(100),X(10000),X(100000000),D(1874919424, 2328306)]);QS=new M6;RD=new U0;};
let ANC=F();
let Lf=B8,Yb=null,H7=null,IK=null;
let AG_=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AYm(b):D(0, 2146959360);c.wg=El(Dh(d,D(0, 2147483648)),B8)?0:1;e=Dh(d,D(4294967295, 1048575));f=Bm(AWq(d,52))&2047;if(El(e,B8)&&!f){c.u2=B8;c.ui=0;return;}if(f)e=ADT(e,D(0, 1048576));else{e=Fp(e,1);while(El(Dh(e,D(0, 1048576)),B8)){e=Fp(e,1);f=f+(-1)|0;}}g=IK;h=AOm(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=IK.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Jl(e,H7.data[i],j);if(QQ(k,Lf)){while(Fx(k,Lf)<=0){h=h+(-1)|0;k=C5(Bd(k,X(10)),X(9));}g=IK.data;i=
h+1|0;j=12+(f-g[i]|0)|0;k=Jl(e,H7.data[i],j);}e=Fp(e,1);d=C5(e,X(1));g=H7.data;i=h+1|0;l=g[i];f=j-1|0;m=Jl(d,l,f);l=Jl(L_(e,X(1)),H7.data[i],f);n=X(1);while(true){o=Bd(n,X(10));if(Fx(E3(k,o),E3(l,o))<=0)break;n=o;}p=X(1);while(true){q=Bd(p,X(10));if(Fx(E3(k,q),E3(m,q))>=0)break;p=q;}i=Fx(n,p);e=i>0?Bd(E3(k,n),n):i<0?C5(Bd(E3(k,p),p),p):Bd(E3(C5(k,Nj(p,X(2))),p),p);if(Fx(e,D(2808348672, 232830643))>=0)while(true){h=h+1|0;e=E3(e,X(10));if(Fx(e,D(2808348672, 232830643))<0)break;}else if(Fx(e,D(1569325056, 23283064))
<0){h=h+(-1)|0;e=Bd(e,X(10));}c.u2=e;c.ui=h-330|0;},
Jl=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Dh(b,X(65535));f=Dh(Bg(b,16),X(65535));g=Dh(Bg(b,32),X(65535));h=Dh(Bg(b,48),X(65535));i=Dh(c,X(65535));j=Dh(Bg(c,16),X(65535));k=Dh(Bg(c,32),X(65535));l=Dh(Bg(c,48),X(65535));return C5(C5(C5(Fp(Bd(l,h),32+d|0),Fp(C5(Bd(l,g),Bd(k,h)),16+d|0)),Fp(C5(C5(Bd(l,f),Bd(k,g)),Bd(j,h)),d)),Bg(C5(C5(C5(Bd(k,e),Bd(j,f)),Bd(i,g)),Fp(C5(C5(C5(Bd(l,e),Bd(k,f)),Bd(j,g)),Bd(i,h)),16)),32-d|0));},
AF9=()=>{Lf=E3(X(-1),X(10));Yb=ALu();H7=ABh([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);IK=AYo([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function M6(){let a=this;C.call(a);a.u2=B8;a.ui=0;a.wg=0;}
let AAT=a=>{return;},
ALu=()=>{let a=new M6();AAT(a);return a;};
let Hj=F(BF);
let LX=null,Pe=null,S$=null,Md=null,Vg=null;
let ASe=()=>{let b,c,d,e;b=new Hj;b.kx=A(490);b.kq=0;LX=b;c=new Hj;c.kx=A(491);c.kq=1;Pe=c;d=new Hj;d.kx=A(492);d.kq=2;S$=d;e=new Hj;e.kx=A(493);e.kq=3;Md=e;Vg=V(Hj,[b,c,d,e]);};
function JE(){let a=this;C.call(a);a.mJ=null;a.mG=null;a.sG=0;a.q9=0;a.rM=null;a.sg=0;a.xW=null;}
let Il=null;
let Wd=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{b:{a.sG=1;a.sg=0;g=new Bo;C1();a.xW=g;M3();switch(Ts.data[b.kq]){case 1:a.mJ=S0(c,d,f);b=new H0;b.o2=1;b.qG=0;b.uy=1;if(!Dn){h=FV(e);e=h.data.length;f=new Kc;i=0+e|0;Bu(f);f.kG=(-1);f.kP=e;f.kn=e;f.kv=0;f.kn=i;f.r6=0;f.ss=0;f.rJ=h;}else{d=e*2|0;if(d<0){b=new Bj;f=new K;f.ke=G(16);Cd(f,f.kd,Cp(A(494)));J(f,f.kd,d,10);g=new I;h=f.ke;j=h.data;d=f.kd;e=j.length;if(d>=0&&d<=(e-0|0)){g.kf=L(h.data,0,d);b.kg=1;b.kh=1;b.kj=g;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}f=new C7;h=BN(d);f.kG
=(-1);f.kP=d;f.kn=d;f.lp=Ct;f.lT=0;f.lk=h;f.kv=0;f.kn=d;f.mz=1;f.l2=0;f.lp=Dr();f=Ks(f);}b.ov=f;f.kn=f.kv;f.kv=0;f.kG=(-1);f=Bs;g=f.ko.createBuffer();e=f.mM;f.mM=e+1|0;B6(f.nF,e,Cc(g));b.sD=e;b.rY=!c?35048:35044;a.mG=b;a.q9=0;break a;case 2:break;case 3:a.mJ=Sz(c,d,f);a.mG=WJ(c,e);a.q9=0;break a;case 4:break b;default:break b;}a.mJ=ARY(c,d,f);a.mG=WJ(c,e);a.q9=0;break a;}b=new Pw;Tx(b,0,d,f);a.mJ=b;b=new QJ;b.o2=1;b.qG=0;b.uy=1;if(!Dn){h=FV(e);d=h.data.length;f=new Kc;k=0+d|0;Vp(f,d);f.kv=0;f.kn=k;f.r6=0;f.ss
=0;f.rJ=h;}else{c=e*2|0;if(c<0){b=new Bj;f=new K;f.ke=G(16);Eu(f,f.kd,A(494));J(f,f.kd,c,10);g=new I;h=f.ke;j=h.data;d=f.kd;e=j.length;if(d>=0&&d<=(e-0|0)){g.kf=L(h.data,0,d);b.kg=1;b.kh=1;b.kj=g;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}f=new C7;h=BN(c);Bu(f);f.kG=(-1);f.kP=c;f.kn=c;f.lp=Ct;f.lT=0;f.lk=h;f.kv=0;f.kn=c;f.mz=1;f.l2=0;f.lp=Dr();f=Ks(f);}b.ov=f;f.kn=f.kv;f.kv=0;f.kG=(-1);f=Bs;g=f.ko.createBuffer();d=f.mM;f.mM=d+1|0;B6(f.nF,d,Cc(g));b.sD=d;b.rY=35044;a.mG=b;a.q9=1;}b=Da;f=Il;if(b===null){f=f.mw.data[0];while
(f!==null&&f.nv!==null){f=f.nL;}}else{l=b;if(!l.$id$){g=Fj();l.$id$=g;}e=b.$id$;h=f.mw.data;f=h[e&(h.length-1|0)];while(f!==null){if(f.pY==e){g=f.nv;if(b!==g&&!(b!==g?0:1)?0:1)break;}f=f.nL;}}f=f===null?null:f.mX;if(f===null){f=new Bh;f.kJ=1;f.km=R(C,16);}S(f,a);E6(Il,b,f);},
AWL=(a,b,c,d,e)=>{let f=new JE();Wd(f,a,b,c,d,e);return f;},
Th=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.mJ.h4(b,g);g=a.rM;if(g!==null&&g.h5()>0)a.rM.h4(b,h);if(a.mG.h6()>0)a.mG.ha();}if(a.q9){if(a.mG.h6()<=0)Bs.h7(c,d,e);else{g=a.mG.he(0);i=g.kv;CL(g,d);Bs.h8(c,e,5123,g);CL(g,i);}}else{j=0;if(a.sg)j=a.rM.h5();if(a.mG.h6()<=0){if(a.sg&&j>0)ER.h9(c,d,e,j);else Bs.h7(c,d,e);}else{if((e+d|0)>a.mG.h$()){b=new T;g=new K;g.ke=G(16);E(g,g.kd,A(495));J(g,g.kd,e,10);E(g,g.kd,A(496));J(g,g.kd,d,10);E(g,g.kd,A(497));c=a.mG.h$();J(g,g.kd,c,10);E(g,g.kd,
A(55));h=new I;k=g.ke;l=k.data;d=g.kd;e=l.length;if(d>=0&&d<=(e-0|0)){h.kf=L(k.data,0,d);b.kg=1;b.kh=1;b.kj=h;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}if(a.sg&&j>0)ER.h_(c,e,5123,d*2|0,j);else Bs.ia(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.mJ.ib(b,g);g=a.rM;if(g!==null&&g.h5()>0)a.rM.ib(b,h);if(a.mG.h6()>0)a.mG.ic();}},
ATH=()=>{let b,c,d,e;b=new Jp;c=Kh(16);b.pL=0;d=R(F_,c);e=d.data;b.mw=d;b.tQ=0.75;b.qL=e.length*0.75|0;Il=b;};
function NU(){let a=this;C.call(a);a.u4=null;a.xl=null;a.xT=null;a.uD=null;a.vu=null;a.q6=null;a.rO=null;a.vE=0.0;a.xP=0.0;a.uw=0.0;a.u5=0.0;a.xJ=null;a.zw=null;a.y9=null;}
let ANH=a=>{let b,c,d;b=new Bo;C1();a.u4=b;b=new Bo;b.ks=0.0;b.kt=0.0;b.ku=(-1.0);a.xl=b;b=new Bo;b.ks=0.0;b.kt=1.0;b.ku=0.0;a.xT=b;a.uD=Dj();a.vu=Dj();a.q6=Dj();a.rO=Dj();a.vE=1.0;a.xP=100.0;a.uw=0.0;a.u5=0.0;a.xJ=ANg();a.zw=new Bo;b=new Mh;MQ();c=new Bo;b.zn=c;d=new Bo;b.AH=d;c.ks=0.0;c.kt=0.0;c.ku=0.0;d.ks=0.0;d.kt=0.0;d.ku=0.0;a.y9=b;},
ALI=(a,b,c,d,e,f)=>{let g,h;g=b.ks-c;h=B7.lE.height-b.kt-d;b.ks=2.0*g/e-1.0;b.kt=2.0*h/f-1.0;b.ku=2.0*b.ku-1.0;ABY(b,a.rO);return b;};
function QZ(){let a=this;NU.call(a);a.wo=0.0;a.xX=null;}
let WS=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.uD;d=a.wo;e=a.uw;f=d* -e/2.0;e=d*e/2.0;g=a.u5;MS(c,f,e,d* -(g/2.0),d*g/2.0,a.vE,a.xP);c=a.vu;h=a.u4;i=a.xX;d=h.ks;j=h.kt;f=h.ku;i.ks=d;i.kt=j;i.ku=f;k=a.xl;l=k.ks;e=k.kt;g=k.ku;d=d+l;j=j+e;f=f+g;i.ks=d;i.kt=j;i.ku=f;i=a.xT;k=V9;k.ks=d;k.kt=j;k.ku=f;l=h.ks;e=h.kt;g=h.ku;l=d-l;e=j-e;g=f-g;k.ks=l;k.kt=e;k.ku=g;AD3(c,k,i);i=Qc;l= -h.ks;e= -h.kt;g= -h.ku;Ly(i);m=i.lF.data;m[12]=l;m[13]=e;m[14]=g;Tl(c,i);Dl(a.q6,a.uD.lF);OS(a.q6.lF,a.vu.lF);if(b){Dl(a.rO,a.q6.lF);AEu(a.rO.lF);ALQ(a.xJ,
a.rO);}};
function HZ(){C.call(this);this.nB=0;}
let Jv=null,GZ=null,Q$=null;
let DQ=a=>{return a.nB;},
AU$=()=>{let b;b=new HZ;b.nB=1;Jv=b;b=new HZ;b.nB=0;GZ=b;Q$=M(Cm);};
function UD(){B4.call(this);this.sY=null;}
let AOB=(a,b,c,d,e,f)=>{let g;b=a.sY;if(b.pt.nB){b.pt=GZ;if(BX===null){b=new C6;g=new Cu;g.l8=BN(32);b.mq=g;g=new K;Bu(g);g.ke=G(16);b.l_=g;b.l$=G(32);b.ma=0;b.mb=Co;BX=b;}g=a.sY.pt;b=A(2);if(g!==null)b=!g.nB?A(82):A(83);B2(Bz(b));}else{b.pt=Jv;if(BX===null){b=new C6;g=new Cu;g.l8=BN(32);b.mq=g;g=new K;Bu(g);g.ke=G(16);b.l_=g;b.l$=G(32);b.ma=0;b.mb=Co;BX=b;}g=a.sY.pt;b=A(2);if(g!==null)b=!g.nB?A(82):A(83);B2(Bz(b));}};
function WX(){let a=this;C.call(a);a.t6=null;a.wy=0.0;a.z9=0.0;a.wH=0;a.yo=0.0;a.pE=null;}
let ANL=(a,b,c)=>{let d,e;a:{d=a.pE;if(c){e=Ic;if(!(d!==e&&d!==JO)){if(d!==e){a.pE=JK;break a;}a.pE=Kk;break a;}}if(!c&&d!==Ic){e=JO;if(d!==e){if(d===JK)a.pE=e;else a.pE=Kk;}}}c=AOC(a,b);e=a.t6.data[c];a.pE=d;return e;},
AOC=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.t6.data.length;if(c==1)return 0;a:{d=a.wy;e=b/d|0;Lu();switch(SP.data[a.pE.kq]){case 1:f=c-1|0;if(f<e)e=f;break a;case 2:e=e%c|0;break a;case 3:e=e%((c*2|0)-2|0)|0;if(e<c)break a;e=(c-2|0)-(e-c|0)|0;break a;case 4:if((a.yo/d|0)==e){e=a.wH;break a;}f=c-1|0;Gc();g=RX;h=X(f+1|0);if(QQ(h,B8)){g=new Bj;g.kg=1;g.kh=1;g.kj=A(498);B(g);}i=L_(h,X(1));while(true){j=g.tW;k=g.tX;g.tW=k;j=E4(j,Fp(j,23));j=E4(E4(E4(j,k),Bg(j,17)),Bg(k,26));g.tX=j;j=Bg(C5(j,k),1);k=OI(j,h);if(AC_(C5(L_(j,
k),i),B8))break;}e=Bm(k);break a;case 5:f=(c-e|0)-1|0;e=0;if(f>e)e=f;break a;case 6:e=(c-(e%c|0)|0)-1|0;break a;default:}}a.wH=e;a.yo=b;return e;};
let NC=F(0);
let VO=F(0);
function PC(){let a=this;C.call(a);a.yR=null;a.ye=null;a.Ac=0;a.AX=0;}
let AND=a=>{let b,c;if(!a.Ac){b=a.yR;b.wK=null;if(B3!==b)B3=b;B3.ph=EE();c=a.ye;b=null;c.qj.e(b);}};
function PJ(){let a=this;C.call(a);a.mo=null;a.nj=0;a.zd=B8;a.z_=0;a.AE=0;}
let AJ8=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.zd=X(-1);a.z_=(-1);a.AE=(-1);c=b.length;if(!c){d=new Bj;d.kg=1;d.kh=1;d.kj=A(499);B(d);}e=R(Ea,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.mo=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.oB=c;switch(d.m5){case 5120:case 5121:break;case 5122:case 5123:g=2*d.mR|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.mR|0;break a;default:break b;}g=d.mR;break a;}g=0;}c=c+g|0;h=h+1|0;}a.nj=c;},
RE=a=>{let b=new PJ();AJ8(b,a);return b;};
function Mt(){let a=this;C.call(a);a.nW=null;a.op=0;a.sq=null;a.w8=null;a.xU=null;a.xj=null;a.oi=null;a.xh=null;a.x8=null;a.wO=null;a.m_=0;a.uz=0;a.v9=0;a.A7=null;a.mj=null;a.ml=null;a.ll=0;a.AU=0;a.nQ=null;a.rq=null;}
let Ib=0,NO=null,Mp=null,NE=null,APm=null;
let ID=()=>{ID=BR(Mt);AN4();};
let ATD=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;ID();a.nW=A(68);a.sq=GP(51,0.800000011920929);a.w8=GP(51,0.800000011920929);a.xU=GP(51,0.800000011920929);a.oi=GP(51,0.800000011920929);a.xh=GP(51,0.800000011920929);a.x8=GP(51,0.800000011920929);a.AU=0;if(!Dn){d=Ba(1);e=d.data.length;f=new GL;g=0+e|0;f.kG=(-1);f.kP=e;f.kn=e;f.kv=0;f.kn=g;f.p6=0;f.rg=0;f.pN=d;}else{h=new C7;d=BN(4);h.kG=(-1);h.kP=4;h.kn=4;h.lp=Ct;h.lT=0;h.lk=d;h.kv=0;h.kn=4;h.mz=1;h.l2=0;h.lp=Dr();f=Ho(h);}a.nQ=f;if(!Dn){d=Ba(1);e=d.data.length;f=new GL;g
=0+e|0;f.kG=(-1);f.kP=e;f.kn=e;f.kv=0;f.kn=g;f.p6=0;f.rg=0;f.pN=d;}else{h=new C7;d=BN(4);h.kG=(-1);h.kP=4;h.kn=4;h.lp=Ct;h.lT=0;h.lk=d;h.kv=0;h.kn=4;h.mz=1;h.l2=0;h.lp=Dr();f=Ho(h);}a.rq=f;if(b===null){b=new Bj;b.kg=1;b.kh=1;b.kj=A(500);B(b);}if(c===null){b=new Bj;b.kg=1;b.kh=1;b.kj=A(501);B(b);}f=NO;if(f!==null&&f.kf.length>0){f=new K;f.ke=G(16);h=NO;E(f,f.kd,h);E(f,f.kd,b);b=new I;d=f.ke;i=d.data;e=f.kd;j=i.length;if(e>=0&&e<=(j-0|0))b.kf=L(d.data,0,e);else{b=new H;b.kg=1;b.kh=1;B(b);}}f=Mp;if(f!==null&&f.kf.length
>0){f=new K;f.ke=G(16);h=Mp;E(f,f.kd,h);E(f,f.kd,c);c=new I;d=f.ke;i=d.data;e=f.kd;j=i.length;if(e>=0&&e<=(j-0|0))c.kf=L(d.data,0,e);else{b=new H;b.kg=1;b.kh=1;B(b);}}a.mj=b;a.ml=c;if(!Dn){i=Ce(16);k=i.data.length;f=new It;l=0+k|0;f.kG=(-1);f.kP=k;f.kn=k;f.kv=0;f.kn=l;f.rf=0;f.rS=0;f.qK=i;}else{f=new C7;d=BN(64);f.kG=(-1);f.kP=64;f.kn=64;f.lp=Ct;f.lT=0;f.lk=d;f.kv=0;f.kn=64;f.mz=1;f.l2=0;f.lp=Dr();f=Fv(f);}a.A7=f;CR(a,b,c);if(a.op){AEv(a);AJZ(a);b=Da;c=NE;l=BG(c,b);c=l<0?null:c.k3.data[l];if(c===null){c=new Bh;c.kJ
=1;c.km=R(C,16);}S(c,a);Cj(NE,b,c);}},
Ri=(a,b)=>{let c=new Mt();ATD(c,a,b);return c;},
CR=(a,b,c)=>{let d;a.uz=WW(a,35633,b);d=WW(a,35632,c);a.v9=d;if(a.uz!=(-1)&&d!=(-1)){d=Bs.ip();if(!d)d=(-1);d=AQs(a,d);a.m_=d;if(d!=(-1)){a.op=1;return;}a.op=0;return;}a.op=0;},
WW=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bs;if(!Dn){e=Ba(1);f=e.data.length;g=new GL;h=0+f|0;g.kG=(-1);g.kP=f;g.kn=f;g.kv=0;g.kn=h;g.p6=0;g.rg=0;g.pN=e;}else{g=new C7;e=BN(4);g.kG=(-1);g.kP=4;g.kn=4;g.lp=Ct;g.lT=0;g.lk=e;g.kv=0;g.kn=4;g.mz=1;g.l2=0;g.lp=Dr();g=Ho(g);}i=d.ir(b);if(!i)return (-1);d.is(i,c);d.it(i);d.eG(i,35713,g);if(Ft(g,0))return i;j=d.iu(i);c=new K;c.ke=G(16);d=a.nW;E(c,c.kd,d);d=b!=35633?A(502):A(503);E(c,c.kd,d);d=new I;e=c.ke;k=e.data;i=c.kd;l=k.length;if(i>=0&&i<=(l-0|0)){d.kf=L(e.data,0,i);a.nW
=d;c=new K;c.ke=G(16);E(c,c.kd,d);E(c,c.kd,j);d=new I;e=c.ke;k=e.data;i=c.kd;l=k.length;if(i>=0&&i<=(l-0|0)){d.kf=L(e.data,0,i);a.nW=d;return (-1);}c=new H;c.kg=1;c.kh=1;B(c);}c=new H;c.kg=1;c.kh=1;B(c);},
AQs=(a,b)=>{let c,d,e,f;c=Bs;if(b==(-1))return (-1);c.iv(b,a.uz);c.iv(b,a.v9);c.iw(b);d=new C7;e=BN(4);d.kG=(-1);d.kP=4;d.kn=4;d.lp=Ct;d.lT=0;d.lk=e;d.kv=0;d.kn=4;d.mz=1;d.l2=0;d.lp=Dr();f=Ho(d);c.eF(b,35714,f);if(Ft(f,0))return b;a.nW=Bs.g$(b);return (-1);},
JB=(a,b,c)=>{let d,e,f,g,h,i;d=a.sq;e=(-2);f=Fl(d,b);if(f>=0)e=d.nC.data[f];if(e==(-2)){e=Bs.ix(a.m_,b);if(e==(-1)&&c){if(a.op){d=new Bj;g=new K;g.ke=G(16);E(g,g.kd,A(504));E(g,g.kd,b);E(g,g.kd,A(505));b=new I;h=g.ke;i=h.data;e=g.kd;f=i.length;if(e>=0&&e<=(f-0|0)){b.kf=L(h.data,0,e);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;b.kg=1;b.kh=1;B(b);}b=new BO;d=new K;d.ke=G(16);E(d,d.kd,A(506));if(!a.op)g=a.nW;else{g=Bs.g$(a.m_);a.nW=g;}E(d,d.kd,g);g=new I;h=d.ke;i=h.data;e=d.kd;f=i.length;if(e>=0&&e<=(f-0|0)){g.kf=L(h.data,
0,e);b.kg=1;b.kh=1;b.kj=g;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}E2(a.sq,b,e);}return e;},
AJZ=a=>{let b,c,d,e,f;b=a.nQ;b.kv=0;b.kn=b.kP;b.kG=(-1);Bs.eF(a.m_,35718,b);c=Ft(a.nQ,0);a.xj=R(I,c);d=0;while(d<c){b=a.nQ;b.kv=0;b.kn=b.kP;b.kG=(-1);VU(b,0,1);b=a.rq;b.kv=0;b.kn=b.kP;b.kG=(-1);e=Bs.eE(a.m_,d,a.nQ,b);f=Bs.ix(a.m_,e);E2(a.sq,e,f);E2(a.w8,e,Ft(a.rq,0));E2(a.xU,e,Ft(a.nQ,0));a.xj.data[d]=e;d=d+1|0;}},
AEv=a=>{let b,c,d,e,f;b=a.nQ;b.kv=0;b.kn=b.kP;b.kG=(-1);Bs.eF(a.m_,35721,b);c=Ft(a.nQ,0);a.wO=R(I,c);d=0;while(d<c){b=a.nQ;b.kv=0;b.kn=b.kP;b.kG=(-1);VU(b,0,1);b=a.rq;b.kv=0;b.kn=b.kP;b.kG=(-1);e=Bs.eD(a.m_,d,a.nQ,b);f=Bs.iA(a.m_,e);E2(a.oi,e,f);E2(a.xh,e,Ft(a.rq,0));E2(a.x8,e,Ft(a.nQ,0));a.wO.data[d]=e;d=d+1|0;}},
AN4=()=>{let b,c,d,e;Ib=1;NO=A(68);Mp=A(68);NE=E$(51,0.800000011920929);if(!Dn){b=Ba(1);c=b.data.length;d=new GL;e=0+c|0;d.kG=(-1);d.kP=c;d.kn=c;d.kv=0;d.kn=e;d.p6=0;d.rg=0;d.pN=b;}else{d=new C7;b=BN(4);d.kG=(-1);d.kP=4;d.kn=4;d.lp=Ct;d.lT=0;d.lk=b;d.kv=0;d.kn=4;d.mz=1;d.l2=0;d.lp=Dr();d=Ho(d);}APm=d;};
function Nu(){let a=this;Bh.call(a);a.n4=null;a.tR=null;a.mV=0;}
let FS=a=>{let b,c,d,e;b=a.mV-1|0;if(0>b)b=0;a.mV=b;c=a.n4;if(c===null)return;a:{if(c!==a.km&&!b){d=c.data;a.tR=c;e=0;b=d.length;while(true){if(e>=b)break a;d[e]=null;e=e+1|0;}}}a.n4=null;},
CA=a=>{let b,c,d,e;b=a.n4;if(b!==null){c=a.km;if(b===c){a:{b=a.tR;if(b!==null){d=b.data.length;e=a.ki;if(d>=e){Dw(c,0,b,0,e);a.km=a.tR;a.tR=null;break a;}}I8(a,c.data.length);}return;}}};
function Lp(){let a=this;Bh.call(a);a.qT=0;a.rd=null;a.q0=0;}
let ANs=a=>{a.qT=a.qT+1|0;},
APA=a=>{let b,c,d,e,f,g,h,i,j;b=a.qT;if(!b){c=new BO;c.kg=1;c.kh=1;c.kj=A(507);B(c);}d=b-1|0;a.qT=d;if(!d){a:{b=a.q0;if(b>0){e=a.ki;if(b==e){a.rd.l9=0;if(d>0)a.q0=e;else{f=a.km;d=0;c=null;if(d>e){c=new Bj;c.kg=1;c.kh=1;B(c);}while(d<e){g=f.data;b=d+1|0;g[d]=c;d=b;}a.ki=0;}break a;}}d=0;b=a.rd.l9;b:{while(true){if(d>=b)break b;c=a.rd;f=c.mY.data;e=c.l9-1|0;c.l9=e;h=f[e];if(h>=a.q0){if(a.qT<=0)Do(a,h);else{V4(a,h);if(h>=a.ki)break;}}d=d+1|0;}i=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,h,10);E(c,c.kd,A(19));d
=a.ki;J(c,c.kd,d,10);j=new I;f=c.ke;g=f.data;b=c.kd;e=g.length;if(b>=0&&b<=(e-0|0)){j.kf=L(f.data,0,b);i.kg=1;i.kh=1;i.kj=j;B(i);}c=new H;c.kg=1;c.kh=1;B(c);}d=a.q0-1|0;while(true){if(d<0)break a;if(a.qT<=0)Do(a,d);else{V4(a,d);if(d>=a.ki){i=new H;c=new K;c.ke=G(16);E(c,c.kd,A(18));J(c,c.kd,d,10);E(c,c.kd,A(19));d=a.ki;J(c,c.kd,d,10);j=new I;f=c.ke;g=f.data;b=c.kd;e=g.length;if(b>=0&&b<=(e-0|0)){j.kf=L(f.data,0,b);i.kg=1;i.kh=1;i.kj=j;B(i);}c=new H;c.kg=1;c.kh=1;B(c);}}d=d+(-1)|0;}}a.q0=0;}},
V4=(a,b)=>{let c,d,e,f,g,h,i,j;if(b<a.q0)return;c=0;d=a.rd;e=d.l9;while(true){f=BW(c,e);if(f>=0){Mj(d,b);return;}if(f>=0){g=new H;h=new K;h.ke=G(16);E(h,h.kd,A(18));J(h,h.kd,c,10);E(h,h.kd,A(19));b=d.l9;J(h,h.kd,b,10);d=new I;i=h.ke;j=i.data;c=h.kd;e=j.length;if(c>=0&&c<=(e-0|0)){d.kf=L(i.data,0,c);g.kg=1;g.kh=1;g.kj=d;B(g);}d=new H;d.kg=1;d.kh=1;B(d);}f=BW(b,d.mY.data[c]);if(!f)break;if(f<0){ATp(d,c,b);return;}c=c+1|0;}};
let FJ=F(BF);
let Ic=null,JO=null,Kk=null,JK=null,Ss=null,Oj=null,Vk=null;
let AOO=()=>{let b,c,d,e,f,g;b=new FJ;b.kx=A(508);b.kq=0;Ic=b;c=new FJ;c.kx=A(509);c.kq=1;JO=c;d=new FJ;d.kx=A(510);d.kq=2;Kk=d;e=new FJ;e.kx=A(511);e.kq=3;JK=e;f=new FJ;f.kx=A(512);f.kq=4;Ss=f;g=new FJ;g.kx=A(513);g.kq=5;Oj=g;Vk=V(FJ,[b,c,d,e,f,g]);};
function U0(){let a=this;C.call(a);a.uF=0;a.ur=0;a.wp=0;}
let WV=F();
let Ts=null;
let M3=()=>{M3=BR(WV);AOQ();};
let AOQ=()=>{let b,c;b=Ba((Vg.p()).data.length);c=b.data;Ts=b;c[Pe.kq]=1;c[S$.kq]=2;c[Md.kq]=3;c[LX.kq]=4;};
let JN=F(0);
function Jn(){let a=this;C.call(a);a.oo=null;a.qc=null;a.xt=0;a.A2=0;a.uM=0;a.r_=0;a.sx=0;}
let Tx=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.r_=0;a.sx=0;a.A2=b;a.oo=d;c=Dt(d.nj/4|0,c);if(!Dn){e=Ce(c);f=e.data.length;d=new It;g=0+f|0;d.kG=(-1);d.kP=f;d.kn=f;d.kv=0;d.kn=g;d.rf=0;d.rS=0;d.qK=e;}else{c=c*4|0;if(c<0){d=new Bj;h=new K;h.ke=G(16);BZ(h,h.kd,A(494));J(h,h.kd,c,10);i=new I;e=h.ke;j=e.data;c=h.kd;k=j.length;if(c>=0&&c<=(k-0|0)){i.kf=L(e.data,0,c);d.kg=1;d.kh=1;d.kj=i;B(d);}d=new H;d.kg=1;d.kh=1;B(d);}h=new C7;e=BN(c);h.kG=(-1);h.kP=c;h.kn=c;h.lp=Ct;h.lT=0;h.lk=e;h.kv=0;h.kn=c;h.mz=1;h.l2=0;h.lp=Dr();d
=Fv(h);}a.qc=d;d.kn=d.kv;d.kv=0;d.kG=(-1);d=Bs;h=d.ko.createBuffer();k=d.mM;d.mM=k+1|0;B6(d.nF,k,Cc(h));a.xt=k;a.uM=!b?35048:35044;},
S0=(a,b,c)=>{let d=new Jn();Tx(d,a,b,c);return d;},
AFg=a=>{return a.oo;},
AOg=a=>{return a.qc.kn/(a.oo.nj/4|0)|0;},
ALG=(a,b,c,d)=>{let e,f,g;a.r_=1;e=a.qc;f=null;g=e instanceof Fk;if(g)f=Fv(e);else if(e instanceof EC)f=e;if(f===null){f=new T;f.kg=1;f.kh=1;f.kj=A(514);B(f);}f.kv=0;f.kn=f.kP;f.kG=(-1);CL(e,0);JJ(f,b,c,d);CL(e,0);if(!g)CY(e,d);else CY(e,d<<2);CL(a.qc,0);CY(a.qc,d);if(a.sx){e=Bs;f=a.qc;e.eB(34962,f.kn,f,a.uM);a.r_=0;}},
AD5=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bs;d.iF(34962,a.xt);if(a.r_){e=a.qc;d.eB(34962,e.kn,e,a.uM);a.r_=0;}a:{f=a.oo.mo.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.oo.mo.data[g];j=h[g];if(j>=0){e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}e.iG(j);k=i.mR;l=i.m5;m=i.nc;n=a.oo.nj;o=i.oB;e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}e.iH(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.oo.mo.data[g];d=i.m$;e=b.oi;p=(-1);j=Fl(e,d);if(j>=0)p=e.nC.data[j];if(p>=0){e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}e.iG(p);j
=i.mR;k=i.m5;l=i.nc;m=a.oo.nj;n=i.oB;e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}e.iH(p,j,k,l,m,n);}g=g+1|0;}}a.sx=1;},
ZK=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bs;e=a.oo.mo.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}h.iI(g);}f=f+1|0;}}i=0;while(i<e){j=a.oo.mo.data[i].m$;k=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}l=Bs;h=b.oi;g=(-2);f=Fl(h,j);if(f>=0)g=h.nC.data[f];if(g==(-2)){g=l.iA(b.m_,j);E2(b.oi,j,g);}if(g!=(-1))k.iI(g);i=i+1|0;}}d.iF(34962,0);a.sx=0;};
let KQ=F(0);
function H0(){let a=this;C.call(a);a.ov=null;a.sD=0;a.uy=0;a.o2=0;a.qG=0;a.rY=0;}
let AGq=a=>{return a.ov.kn;},
Ys=a=>{return a.ov.kP;},
ALd=(a,b,c,d)=>{let e;a.o2=1;e=a.ov;e.kv=0;e.kn=e.kP;e.kG=(-1);VF(e,b,c,d);e=a.ov;c=e.kv;e.kn=c;e.kv=0;e.kG=(-1);if(a.qG){Bs.eB(34963,c,e,a.rY);a.o2=0;}},
Zr=(a,b)=>{a.o2=a.o2|b;return a.ov;},
AR$=a=>{let b,c,d;b=a.sD;if(!b){c=new T;c.kg=1;c.kh=1;c.kj=A(515);B(c);}Bs.iF(34963,b);if(a.o2){c=Bs;d=a.ov;c.eB(34963,d.kn,d,a.rY);a.o2=0;}a.qG=1;},
AOz=a=>{Bs.iF(34963,0);a.qG=0;};
function Qg(){let a=this;C.call(a);a.og=null;a.oA=null;a.o0=null;a.wc=0;a.wr=0;a.y7=0;a.uf=0;a.r0=0;a.sJ=0;}
let AKl=(a,b,c,d)=>{let e,f,g,h,i,j;a:{a.r0=0;a.sJ=0;a.y7=b;a.og=d;c=Dt(d.nj,c);if(!Dn){e=BN(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new C7;g=0+f|0;d.kG=(-1);d.kP=f;d.kn=f;d.lp=Ct;d.lT=0;d.lk=e;d.kv=0;d.kn=g;d.mz=0;d.l2=0;break a;}d=new H;d.kg=1;d.kh=1;Bl(d);B(d);}if(c<0){d=new Bj;h=new K;h.ke=G(16);BZ(h,h.kd,A(494));J(h,h.kd,c,10);i=new I;e=h.ke;j=e.data;c=h.kd;f=j.length;if(c>=0&&c<=(f-0|0)){i.kf=L(e.data,0,c);d.kg=1;d.kh=1;d.kj=i;B(d);}d=new H;d.kg=1;d.kh=1;B(d);}d=new C7;e=BN(c);d.kG=(-1);d.kP=c;d.kn=
c;d.lp=Ct;d.lT=0;d.lk=e;d.kv=0;d.kn=c;d.mz=1;d.l2=0;d.lp=Dr();}a.o0=d;a.wr=1;a.uf=!b?35048:35044;a.oA=Fv(d);d=Bs;h=d.ko.createBuffer();g=d.mM;d.mM=g+1|0;B6(d.nF,g,Cc(h));Bs.iF(34962,g);Bs.eB(34962,a.o0.kP,null,a.uf);Bs.iF(34962,0);a.wc=g;d=a.oA;d.kn=d.kv;d.kv=0;d.kG=(-1);d=a.o0;d.kn=d.kv;d.kv=0;d.kG=(-1);},
ARY=(a,b,c)=>{let d=new Qg();AKl(d,a,b,c);return d;},
ABj=a=>{return a.og;},
ACu=a=>{return (a.oA.kn*4|0)/a.og.nj|0;},
AAf=(a,b,c,d)=>{let e,f,g;a.r0=1;if(!a.wr){e=a.oA;e.kv=0;e.kn=e.kP;e.kG=(-1);JJ(e,b,c,d);e=a.oA;e.kn=e.kv;e.kv=0;e.kG=(-1);CL(a.o0,0);CY(a.o0,a.oA.kn<<2);}else{e=a.o0;f=null;g=e instanceof Fk;if(g)f=Fv(e);else if(e instanceof EC)f=e;if(f===null){f=new T;f.kg=1;f.kh=1;f.kj=A(514);B(f);}f.kv=0;f.kn=f.kP;f.kG=(-1);CL(e,0);JJ(f,b,c,d);CL(e,0);if(!g)CY(e,d);else CY(e,d<<2);CL(a.oA,0);CY(a.oA,d);}if(a.sJ){e=Bs;f=a.o0;e.eC(34962,0,f.kn,f);a.r0=0;}},
AKZ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bs;d.iF(34962,a.wc);if(a.r0){CY(a.o0,a.oA.kn*4|0);e=a.o0;d.eB(34962,e.kn,e,a.uf);a.r0=0;}a:{f=a.og.mo.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.og.mo.data[g];j=h[g];if(j>=0){e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}e.iG(j);k=i.mR;l=i.m5;m=i.nc;n=a.og.nj;o=i.oB;e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}e.iH(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.og.mo.data[g];p=i.m$;e=b.oi;q=(-1);j=Fl(e,p);if(j>=0)q=e.nC.data[j];if(q>=0){e=Bs;if(b.ll){CR(b,
b.mj,b.ml);b.ll=0;}e.iG(q);j=i.mR;k=i.m5;l=i.nc;m=a.og.nj;n=i.oB;e=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}e.iH(q,j,k,l,m,n);}g=g+1|0;}}a.sJ=1;},
AD6=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bs;e=a.og.mo.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}h.iI(g);}f=f+1|0;}}i=0;while(i<e){j=a.og.mo.data[i].m$;k=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}l=Bs;h=b.oi;g=(-2);f=Fl(h,j);if(f>=0)g=h.nC.data[f];if(g==(-2)){g=l.iA(b.m_,j);E2(b.oi,j,g);}if(g!=(-1))k.iI(g);i=i+1|0;}}d.iF(34962,0);a.sJ=0;};
function SD(){let a=this;C.call(a);a.qb=null;a.o5=null;a.xy=0;a.z1=0;a.qg=0;a.sM=0;a.xY=0;}
let ADs=(a,b,c)=>{let d,e,f,g,h,i,j,k;a:{a.qg=1;a.sM=0;c=c*2|0;if(!Dn){d=BN(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new C7;g=0+e|0;f.kG=(-1);f.kP=e;f.kn=e;f.lp=Ct;f.lT=0;f.lk=d;f.kv=0;f.kn=g;f.mz=0;f.l2=0;break a;}f=new H;f.kg=1;f.kh=1;Bl(f);B(f);}if(c<0){f=new Bj;h=new K;h.ke=G(16);BZ(h,h.kd,A(494));J(h,h.kd,c,10);i=new I;d=h.ke;j=d.data;c=h.kd;k=j.length;if(c>=0&&c<=(k-0|0)){i.kf=L(d.data,0,c);f.kg=1;f.kh=1;f.kj=i;B(f);}f=new H;f.kg=1;f.kh=1;B(f);}f=new C7;d=BN(c);f.kG=(-1);f.kP=c;f.kn=c;f.lp=Ct;f.lT=0;f.lk
=d;f.kv=0;f.kn=c;f.mz=1;f.l2=0;f.lp=Dr();}a.o5=f;a.z1=1;a.xY=!b?35048:35044;f=Ks(f);a.qb=f;f.kn=f.kv;f.kv=0;f.kG=(-1);f=a.o5;f.kn=f.kv;f.kv=0;f.kG=(-1);f=Bs;h=f.ko.createBuffer();e=f.mM;f.mM=e+1|0;B6(f.nF,e,Cc(h));Bs.iF(34963,e);Bs.eB(34963,a.o5.kP,null,a.xY);Bs.iF(34963,0);a.xy=e;},
WJ=(a,b)=>{let c=new SD();ADs(c,a,b);return c;},
ANG=a=>{return a.qb.kn;},
XA=a=>{return a.qb.kP;},
AG6=(a,b,c,d)=>{let e,f;a.qg=1;e=a.qb;e.kv=0;e.kn=e.kP;e.kG=(-1);VF(e,b,c,d);e=a.qb;e.kn=e.kv;e.kv=0;e.kG=(-1);CL(a.o5,0);CY(a.o5,d<<1);if(a.sM){e=Bs;f=a.o5;e.eC(34963,0,f.kn,f);a.qg=0;}},
AQL=(a,b)=>{a.qg=a.qg|b;return a.qb;},
AHZ=a=>{let b,c,d;b=a.xy;if(!b){c=new T;c.kg=1;c.kh=1;c.kj=A(516);B(c);}Bs.iF(34963,b);if(a.qg){CY(a.o5,a.qb.kn*2|0);c=Bs;d=a.o5;c.eC(34963,0,d.kn,d);a.qg=0;}a.sM=1;},
AAY=a=>{Bs.iF(34963,0);a.sM=0;};
function LL(){let a=this;C.call(a);a.o4=null;a.pz=null;a.vl=0;a.A6=0;a.u7=0;a.r3=0;a.tP=0;a.uu=0;a.oF=null;}
let MV=null;
let LR=()=>{LR=BR(LL);AT0();};
let ACC=(a,b,c,d)=>{let e,f,g,h,i,j;LR();a.r3=0;a.tP=0;a.uu=(-1);e=new Gd;e.pO=1;e.mY=Ba(16);a.oF=e;a.A6=b;a.o4=d;c=Dt(d.nj/4|0,c);if(!Dn){f=Ce(c);g=f.data.length;d=new It;h=0+g|0;d.kG=(-1);d.kP=g;d.kn=g;d.kv=0;d.kn=h;d.rf=0;d.rS=0;d.qK=f;}else{c=c*4|0;if(c<0){d=new Bj;e=new K;e.ke=G(16);BZ(e,e.kd,A(494));J(e,e.kd,c,10);i=new I;f=e.ke;j=f.data;c=e.kd;g=j.length;if(c>=0&&c<=(g-0|0)){i.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=i;B(d);}d=new H;d.kg=1;d.kh=1;B(d);}e=new C7;f=BN(c);e.kG=(-1);e.kP=c;e.kn=c;e.lp=Ct;e.lT
=0;e.lk=f;e.kv=0;e.kn=c;e.mz=1;e.l2=0;e.lp=Dr();d=Fv(e);}a.pz=d;d.kn=d.kv;d.kv=0;d.kG=(-1);d=Bs;e=d.ko.createBuffer();g=d.mM;d.mM=g+1|0;B6(d.nF,g,Cc(e));a.vl=g;a.u7=!b?35048:35044;d=MV;d.kv=0;d.kn=d.kP;d.kG=(-1);ER.iK(1,d);d=MV;c=d.kv;if(c<d.kn){d.kv=c+1|0;a.uu=d.iL(c);return;}d=new NG;d.kg=1;d.kh=1;B(d);},
Sz=(a,b,c)=>{let d=new LL();ACC(d,a,b,c);return d;},
ZY=a=>{return a.o4;},
AK5=a=>{return (a.pz.kn*4|0)/a.o4.nj|0;},
AAa=(a,b,c,d)=>{let e,f,g;a.r3=1;e=a.pz;f=null;g=e instanceof Fk;if(g)f=Fv(e);else if(e instanceof EC)f=e;if(f===null){f=new T;f.kg=1;f.kh=1;f.kj=A(514);B(f);}f.kv=0;f.kn=f.kP;f.kG=(-1);CL(e,0);JJ(f,b,c,d);CL(e,0);if(!g)CY(e,d);else CY(e,d<<2);CL(a.pz,0);CY(a.pz,d);if(a.tP){e=Bs;f=a.pz;e.eB(34962,f.kn,f,a.u7);a.r3=0;}},
AQm=(a,b,c)=>{let d;d=ER;d.iM(a.uu);APt(a,b,c);if(a.r3){d.iF(34962,a.vl);b=a.pz;CY(b,b.kn);b=a.pz;d.eB(34962,b.kn,b,a.u7);a.r3=0;}a.tP=1;},
APt=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.oF;e=d.l9;f=!e?0:1;a:{g=a.o4.mo.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.o4.mo.data[e].m$;h=b.oi;i=(-1);f=Fl(h,d);if(f>=0)i=h.nC.data[f];d=a.oF;if(e>=d.l9)break;f=i!=d.mY.data[e]?0:1;e=e+1|0;}h=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,e,10);E(b,b.kd,A(19));e=d.l9;J(b,b.kd,e,10);d=new I;c=b.ke;j=c.data;f=b.kd;g=j.length;if(f>=0&&f<=(g-0|0)){d.kf=L(c.data,0,f);h.kg=1;h.kh=1;h.kj=d;B(h);}b=new H;U(b);B(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.mY.data[i]?0:1;i=i+1|0;}h=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,i,10);E(b,b.kd,A(19));e=d.l9;J(b,b.kd,e,10);d=new I;c=b.ke;j=c.data;f=b.kd;g=j.length;if(f>=0&&f<=(g-0|0)){d.kf=L(c.data,0,f);h.kg=1;h.kh=1;h.kj=d;B(h);}b=new H;U(b);B(b);}}}c:{if(!f){d:{B5.iF(34962,a.vl);if(a.oF.l9){k=a.o4.mo.data.length;e=0;while(true){if(e>=k)break d;d=a.oF;if(e>=d.l9)break;i=d.mY.data[e];if(i>=0){d=Bs;if(b.ll){CR(b,
b.mj,b.ml);b.ll=0;}d.iI(i);}e=e+1|0;}h=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,e,10);E(b,b.kd,A(19));e=d.l9;J(b,b.kd,e,10);d=new I;c=b.ke;j=c.data;f=b.kd;g=j.length;if(f>=0&&f<=(g-0|0)){d.kf=L(c.data,0,f);h.kg=1;h.kh=1;h.kj=d;B(h);}b=new H;G9(b);B(b);}}a.oF.l9=0;e=0;while(true){if(e>=g)break c;h=a.o4.mo.data[e];if(c!==null){j=c.data;Mj(a.oF,j[e]);}else{l=a.oF;m=h.m$;d=b.oi;i=(-1);f=Fl(d,m);if(f>=0)i=d.nC.data[f];Mj(l,i);}d=a.oF;if(e>=d.l9){h=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,e,10);E(b,
b.kd,A(19));e=d.l9;J(b,b.kd,e,10);d=new I;c=b.ke;j=c.data;f=b.kd;g=j.length;if(f>=0&&f<=(g-0|0)){d.kf=L(c.data,0,f);h.kg=1;h.kh=1;h.kj=d;B(h);}b=new H;U(b);B(b);}n=d.mY.data[e];if(n>=0){d=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}d.iG(n);f=h.mR;i=h.m5;k=h.nc;o=a.o4.nj;p=h.oB;d=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}d.iH(n,f,i,k,o,p);}e=e+1|0;}}}},
ADd=(a,b,c)=>{ER.iM(0);a.tP=0;},
AT0=()=>{let b,c,d,e;if(!Dn){b=Ba(1);c=b.data.length;d=new GL;e=0+c|0;d.kG=(-1);d.kP=c;d.kn=c;d.kv=0;d.kn=e;d.p6=0;d.rg=0;d.pN=b;}else{d=new C7;b=BN(4);d.kG=(-1);d.kP=4;d.kn=4;d.lp=Ct;d.lT=0;d.lk=b;d.kv=0;d.kn=4;d.mz=1;d.l2=0;d.lp=Dr();d=Ho(d);}MV=d;};
let Pw=F(Jn);
let QJ=F(H0);
function UF(){let a=this;C.call(a);a.ud=0;a.pH=null;a.nC=null;a.wN=0.0;a.uq=0;a.tD=0;a.tv=0;}
let AGa=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.wN=c;d=J1(b,c);a.uq=d*c|0;b=d-1|0;a.tv=b;a.tD=Fy(X(b));a.pH=R(C,d);a.nC=Ba(d);return;}e=new Bj;f=new K;f.ke=G(16);E(f,f.kd,A(69));Gb(f,f.kd,c);g=new I;h=f.ke;i=h.data;d=f.kd;j=i.length;if(d>=0&&d<=(j-0|0)){g.kf=L(h.data,0,d);e.kg=1;e.kh=1;e.kj=g;B(e);}f=new H;f.kg=1;f.kh=1;B(f);},
GP=(a,b)=>{let c=new UF();AGa(c,a,b);return c;},
Fl=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bj;c.kg=1;c.kh=1;c.kj=A(70);B(c);}a:{d=a.pH;if(!b.mc){e=0;while(true){if(e>=b.kf.length)break a;b.mc=(31*b.mc|0)+b.kf.charCodeAt(e)|0;e=e+1|0;}}}f=Bm(Bg(Bd(X(b.mc),D(2135587861, 2654435769)),a.tD));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof I))g=0;else{h=b;g=c.kf!==h.kf?0:1;}if(g)break;f=(f+1|0)&a.tv;}return f;},
E2=(a,b,c)=>{let d,e;d=Fl(a,b);if(d>=0){a.nC.data[d]=c;return;}d= -(d+1|0)|0;e=a.pH.data;e[d]=b;a.nC.data[d]=c;c=a.ud+1|0;a.ud=c;if(c>=a.uq)AQx(a,e.length<<1);},
AQx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.pH.data.length;a.uq=b*a.wN|0;d=b-1|0;a.tv=d;a.tD=Fy(X(d));e=a.pH;f=a.nC;a.pH=R(C,b);a.nC=Ba(b);if(a.ud>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.pH;if(!h.mc){k=0;while(true){if(k>=h.kf.length)break b;h.mc=(31*h.mc|0)+h.kf.charCodeAt(k)|0;k=k+1|0;}}}b=Bm(Bg(Bd(X(h.mc),D(2135587861, 2654435769)),a.tD));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.tv;}l[b]=h;a.nC.data[b]=i;}g=g+1|0;}}}};
let ANY=F();
function E5(){let a=this;C.call(a);a.kP=0;a.kv=0;a.kn=0;a.kG=0;}
let Vp=(a,b)=>{a.kG=(-1);a.kP=b;a.kn=b;},
CL=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.kn){a.kv=b;if(b<a.kG)a.kG=0;return a;}c=new Bj;d=a.kn;e=new K;e.ke=G(16);E(e,e.kd,A(517));J(e,e.kd,b,10);E(e,e.kd,A(518));J(e,e.kd,d,10);d=e.kd;Bk(e,d,d+1|0);f=e.ke;g=f.data;g[d]=93;h=new I;d=e.kd;i=g.length;if(d>=0&&d<=(i-0|0)){h.kf=L(f.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
CY=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.kP){if(a.kG>b)a.kG=(-1);a.kn=b;if(a.kv>b)a.kv=b;return a;}c=new Bj;d=a.kP;e=new K;e.ke=G(16);E(e,e.kd,A(519));J(e,e.kd,b,10);E(e,e.kd,A(518));J(e,e.kd,d,10);d=e.kd;Bk(e,d,d+1|0);f=e.ke;g=f.data;g[d]=93;h=new I;d=e.kd;i=g.length;if(d>=0&&d<=(i-0|0)){h.kf=L(f.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);};
let EC=F(E5);
let JJ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iO()){e=new Gq;e.kg=1;e.kh=1;B(e);}f=a.kn;g=a.kv;if((f-g|0)<d){e=new Jg;e.kg=1;e.kh=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.ke=G(16);E(j,j.kd,A(520));J(j,j.kd,i,10);E(j,j.kd,A(521));J(j,j.kd,f,10);k=new I;b=j.ke;h=b.data;d=j.kd;f=h.length;if(d>=0&&d<=(f-0|0)){k.kf=L(b.data,0,d);e.kg=1;e.kh=1;e.kj=k;B(e);}e=new H;e.kg=1;e.kh=1;Bl(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iP(g,h[c]);i=i+1|0;g=l;c=f;}a.kv=a.kv+d|0;return a;}e
=new H;j=new K;j.ke=G(16);E(j,j.kd,A(522));J(j,j.kd,d,10);E(j,j.kd,A(523));k=new I;b=j.ke;h=b.data;d=j.kd;f=h.length;if(d>=0&&d<=(f-0|0)){k.kf=L(b.data,0,d);e.kg=1;e.kh=1;e.kj=k;B(e);}e=new H;e.kg=1;e.kh=1;Bl(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.ke=G(16);E(j,j.kd,A(524));J(j,j.kd,c,10);E(j,j.kd,A(518));J(j,j.kd,d,10);d=j.kd;Bk(j,d,d+1|0);b=j.ke;h=b.data;h[d]=41;k=new I;d=j.kd;f=h.length;if(d>=0&&d<=(f-0|0)){k.kf=L(b.data,0,d);e.kg=1;e.kh=1;e.kj=k;B(e);}e=new H;e.kg=1;e.kh=1;Bl(e);B(e);},
AV2=(a,b)=>{CY(a,b);return a;},
AW2=(a,b)=>{CL(a,b);return a;},
AV6=a=>{a.kn=a.kv;a.kv=0;a.kG=(-1);return a;},
AYs=a=>{a.kv=0;a.kn=a.kP;a.kG=(-1);return a;},
AMX=(a,b)=>{CY(a,b);return a;},
ASD=(a,b)=>{CL(a,b);return a;};
let HC=F(E5);
let VF=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.iO()){e=new Gq;e.kg=1;e.kh=1;B(e);}f=a.kn;g=a.kv;if((f-g|0)<d){e=new Jg;e.kg=1;e.kh=1;B(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new H;j=new K;j.ke=G(16);E(j,j.kd,A(525));J(j,j.kd,i,10);E(j,j.kd,A(521));J(j,j.kd,f,10);k=new I;b=j.ke;h=b.data;d=j.kd;f=h.length;if(d>=0&&d<=(f-0|0)){k.kf=L(b.data,0,d);e.kg=1;e.kh=1;e.kj=k;B(e);}e=new H;e.kg=1;e.kh=1;Bl(e);B(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.iQ(g,h[c]);i=i+1|0;g=l;c=f;}a.kv=a.kv+d|0;return a;}e
=new H;j=new K;j.ke=G(16);E(j,j.kd,A(522));J(j,j.kd,d,10);E(j,j.kd,A(523));k=new I;b=j.ke;h=b.data;d=j.kd;f=h.length;if(d>=0&&d<=(f-0|0)){k.kf=L(b.data,0,d);e.kg=1;e.kh=1;e.kj=k;B(e);}e=new H;e.kg=1;e.kh=1;Bl(e);B(e);}}b=b.data;e=new H;d=b.length;j=new K;j.ke=G(16);E(j,j.kd,A(524));J(j,j.kd,c,10);E(j,j.kd,A(518));J(j,j.kd,d,10);d=j.kd;Bk(j,d,d+1|0);b=j.ke;h=b.data;h[d]=41;k=new I;d=j.kd;f=h.length;if(d>=0&&d<=(f-0|0)){k.kf=L(b.data,0,d);e.kg=1;e.kh=1;e.kj=k;B(e);}e=new H;e.kg=1;e.kh=1;Bl(e);B(e);},
AXn=(a,b)=>{CY(a,b);return a;},
AXy=(a,b)=>{CL(a,b);return a;},
AXK=a=>{a.kn=a.kv;a.kv=0;a.kG=(-1);return a;},
AYi=a=>{a.kv=0;a.kn=a.kP;a.kG=(-1);return a;},
AWN=(a,b)=>{CY(a,b);return a;},
AUP=(a,b)=>{CL(a,b);return a;};
let HB=F(E5);
let AUE=(a,b)=>{CL(a,b);return a;},
AW1=a=>{a.kv=0;a.kn=a.kP;a.kG=(-1);return a;};
function Fk(){let a=this;E5.call(a);a.lT=0;a.lk=null;a.lp=null;}
let AMN=(a,b)=>{CY(a,b);return a;},
YG=(a,b)=>{CL(a,b);return a;};
function HP(){C.call(this);this.tk=null;}
let Ct=null,Kq=null,MA=null;
let Dr=()=>{let b;if(MA===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;MA=(new Int8Array(b))[0]?Kq:Ct;}return MA;},
AYr=()=>{let b;b=new HP;b.tk=A(4);Ct=b;b=new HP;b.tk=A(5);Kq=b;};
let AGT=F();
let Ey=F(0);
function C7(){let a=this;Fk.call(a);a.mz=0;a.l2=0;}
let Xv=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kn)return a.lk.data[a.lT+b|0];c=new H;d=a.kn;e=new K;e.ke=G(16);E(e,e.kd,A(526));J(e,e.kd,b,10);E(e,e.kd,A(518));J(e,e.kd,d,10);d=e.kd;Bk(e,d,d+1|0);f=e.ke;g=f.data;g[d]=41;h=new I;d=e.kd;i=g.length;if(d>=0&&d<=(i-0|0)){h.kf=L(f.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
Ks=a=>{let b,c,d,e,f,g;b=a.kn;c=a.kv;d=(b-c|0)/2|0;if(a.lp!==Ct){e=new O2;f=a.lT+c|0;c=a.l2;e.kG=(-1);e.kP=d;e.kn=d;e.kv=0;e.kn=d;e.qS=f;e.px=a;e.ut=c;return e;}e=new QW;b=a.lT+c|0;g=a.l2;e.kG=(-1);e.kP=d;e.kn=d;e.kv=0;e.kn=d;e.qS=b;e.px=a;e.ut=g;return e;},
AQg=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.kn){c=a.lk.data;b=a.lT+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;if(a.lp!==Ct)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new H;d=a.kn-3|0;i=new K;i.ke=G(16);E(i,i.kd,A(526));J(i,i.kd,b,10);E(i,i.kd,A(518));J(i,i.kd,d,10);d=i.kd;Bk(i,d,d+1|0);c=i.ke;j=c.data;j[d]=41;k=new I;d=i.kd;e=j.length;if(d>=0&&d<=(e-0|0)){k.kf=L(c.data,0,d);h.kg=1;h.kh=1;h.kj=k;B(h);}h=new H;h.kg=1;h.kh=1;Bl(h);B(h);},
AE9=(a,b,c)=>{let d,e,f,g,h,i;if(a.l2){d=new Gq;d.kg=1;d.kh=1;B(d);}if(b>=0&&(b+3|0)<a.kn){if(a.lp!==Ct){e=a.lk.data;b=a.lT+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.lk.data;b=a.lT+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new H;c=a.kn-3|0;f=new K;f.ke=G(16);E(f,f.kd,A(526));J(f,f.kd,b,10);E(f,f.kd,A(518));J(f,f.kd,c,10);c=f.kd;Bk(f,c,c+1|0);e=f.ke;g=e.data;g[c]=41;h=new I;c=f.kd;i=g.length;if(c>=
0&&c<=(i-0|0)){h.kf=L(e.data,0,c);d.kg=1;d.kh=1;d.kj=h;B(d);}d=new H;d.kg=1;d.kh=1;B(d);},
Ho=a=>{let b,c,d,e,f,g;b=a.kn;c=a.kv;d=(b-c|0)/4|0;if(a.lp!==Ct){e=new Pv;f=a.lT+c|0;c=a.l2;e.kG=(-1);e.kP=d;e.kn=d;e.kv=0;e.kn=d;e.qu=f;e.qt=a;e.uX=c;return e;}e=new Tq;b=a.lT+c|0;g=a.l2;e.kG=(-1);e.kP=d;e.kn=d;e.kv=0;e.kn=d;e.qu=b;e.qt=a;e.uX=g;return e;},
Fv=a=>{let b,c,d,e,f,g;b=a.kn;c=a.kv;d=(b-c|0)/4|0;if(a.lp!==Kq){e=new Pb;f=a.lT+c|0;c=a.l2;e.kG=(-1);e.kP=d;e.kn=d;e.kv=0;e.kn=d;e.ql=f;e.pB=a;e.vS=c;return e;}e=new RP;b=a.lT+c|0;g=a.l2;e.kG=(-1);e.kP=d;e.kn=d;e.kv=0;e.kn=d;e.ql=b;e.pB=a;e.vS=g;return e;},
AUq=a=>{return a.lk.data;};
let AKs=F();
let Tz=F(0);
function Lq(){let a=this;C.call(a);a.wW=null;a.nn=0;a.ng=0;a.qx=null;a.rj=null;a.xp=0;a.p2=0;}
let ARr=0;
let AB4=(a,b,c,d,e)=>{a.nn=0;a.ng=0;a.p2=0;a.wW=b;a.rj=c;a.qx=d;a.xp=e;if(c!==null){b=Va(a,c);a.rj=b;c=b.lR;a.nn=c===null?b.mB:c.mx;a.ng=c===null?b.mF:c.mv;if(d===null)a.qx=c===null?F2:Iz(c.md);}},
F4=(a,b,c,d)=>{let e=new Lq();AB4(e,a,b,c,d);return e;},
Qn=a=>{let b,c;if(a.p2){b=new T;b.kg=1;b.kh=1;b.kj=A(527);B(b);}if(a.rj===null){b=Va(a,FB(a.wW));a.rj=b;c=b.lR;a.nn=c===null?b.mB:c.mx;a.ng=c===null?b.mF:c.mv;if(a.qx===null)a.qx=c===null?F2:Iz(c.md);}a.p2=1;},
Va=(a,b)=>{let c,d,e,f,g,h,i,j;a:{if(Bs===null&&ARr){c=b.lR;d=c===null?b.mB:c.mx;e=c===null?b.mF:c.mv;f=LH(d);g=LH(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new F$;c=b.lR;J9(h,f,g,c===null?F2:Iz(c.md));c=h.lR;if(c===null){FA(b);Kw(h,b.oX,0,0,d,e,0,0,d,e);}else{i=b.lR.mt;j=c.mt;Kf(i,j,0,0,d,e,0,0,d,e);}if(b.pd){c=new T;c.kg=1;c.kh=1;c.kj=A(63);B(c);}EU();Hg(Gh,b.qB);c=b.lR;if(c!==null)Iq(c.mt);b.pd=1;return h;};
function F$(){let a=this;C.call(a);a.mB=0;a.mF=0;a.oX=null;a.mp=null;a.qB=0;a.q_=null;a.yw=0;a.yy=0;a.yA=0;a.yz=0.0;a.s3=null;a.rQ=null;a.yg=null;a.AP=null;a.qw=null;a.ry=null;a.ws=0;a.lR=null;a.pd=0;}
let LY=null;
let G0=()=>{G0=BR(F$);AIs();};
let Yv=(a,b)=>{let c,d,e,f,g,h,i,j,k;G0();a.yw=255;a.yy=255;a.yA=255;a.s3=Na(255,255,255,a.yz);a.rQ=KV;a.yg=Nd;a.ws=0;c=b.vy;d=b.v7.s8;e=BG(d,c);d=e<0?null:d.k3.data[e];if(Da.oa.vm){f=AM6(d.nY);a.lR=AKi(f,0,f.data.length,0);KD(a,(-1),(-1),null,null);}else{KD(a,(-1),(-1),d.vo,null);if(a.qw===null){d=new T;g=b.vy;b=new K;b.ke=G(16);E(b,b.kd,A(528));e=b.kd;if(g===null)g=A(2);E(b,e,g);E(b,b.kd,A(529));h=new I;i=b.ke;f=i.data;j=b.kd;k=f.length;if(j>=0&&j<=(k-0|0)){h.kf=L(i.data,0,j);d.kg=1;d.kh=1;d.kj=h;B(d);}b=
new H;b.kg=1;b.kh=1;B(b);}}},
FB=a=>{let b=new F$();Yv(b,a);return b;},
J9=(a,b,c,d)=>{G0();a.yw=255;a.yy=255;a.yA=255;a.s3=Na(255,255,255,a.yz);a.rQ=KV;a.yg=Nd;a.ws=0;KD(a,b,c,null,null);},
AUK=(a,b,c)=>{let d=new F$();J9(d,a,b,c);return d;},
KD=(a,b,c,d,e)=>{let f,g;if(e!==null){a.ry=e;a.mB=e.getWidth();a.mF=e.getHeight();}else if(d===null){a.mB=b;a.mF=c;}else{a.qw=d;a.mB=d.width;a.mF=d.height;}if(Dn){d=new C7;f=BN(4);d.kG=(-1);d.kP=4;d.kn=4;d.lp=Ct;d.lT=0;d.lk=f;d.kv=0;d.kn=4;d.mz=1;d.l2=0;d.lp=Dr();}else{f=BN(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new C7;g=0+c|0;d.kG=(-1);d.kP=c;d.kn=c;d.lp=Ct;d.lT=0;d.lk=f;d.kv=0;d.kn=g;d.mz=0;d.l2=0;}else{d=new H;d.kg=1;d.kh=1;Bl(d);B(d);}}a.q_=d;EU();c=NR;NR=c+1|0;a.qB=c;AE9(d,0,c);B6(Gh,a.qB,a);},
AG9=a=>{let b,c;Fn();b=GC.nU.document.createElement("canvas");a.oX=b;c=a.mB;b.width=c;b=a.oX;c=a.mF;b.height=c;b=a.oX.getContext("2d");a.mp=b;G0();c=Bz(FL.kx);b.globalCompositeOperation=c;},
Na=(b,c,d,e)=>{let f,g,h,i;G0();f=new K;f.ke=G(16);E(f,f.kd,A(530));J(f,f.kd,b,10);b=f.kd;Bk(f,b,b+1|0);f.ke.data[b]=44;J(f,f.kd,c,10);c=f.kd;Bk(f,c,c+1|0);f.ke.data[c]=44;J(f,f.kd,d,10);c=f.kd;Bk(f,c,c+1|0);f.ke.data[c]=44;Gb(f,f.kd,e);d=f.kd;Bk(f,d,d+1|0);g=f.ke;h=g.data;h[d]=41;i=new I;c=f.kd;d=h.length;if(c>=0&&c<=(d-0|0)){i.kf=L(g.data,0,c);return i;}f=new H;f.kg=1;f.kh=1;B(f);},
FA=a=>{let b,c;if(a.oX===null){AG9(a);if(a.qw!==null){b=a.mp;c=Bz(L5.m2);b.globalCompositeOperation=c;b=a.mp;c=a.qw;b.drawImage(c,0.0,0.0);b=a.mp;c=Bz(FL.m2);b.globalCompositeOperation=c;}if(a.ry!==null){c=a.mp;b=Bz(L5.m2);c.globalCompositeOperation=b;b=a.mp;c=a.ry;b.drawImage(c,0.0,0.0);b=a.mp;c=Bz(FL.m2);b.globalCompositeOperation=c;}}},
Kw=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;FA(a);if(a.rQ===JA){a:{k=a.mp;l=Bz(LY);k.fillStyle=l;k=a.mp;l=Bz(LY);k.strokeStyle=l;k=a.mp;l="destination-out";k.globalCompositeOperation=l;a.mp.beginPath();m=a.mp;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);k=LV;FA(a);L0();switch(Ok.data[k.kq]){case 1:break;case 2:a.mp.stroke();break a;default:break a;}a.mp.fill();}a.mp.closePath();r=a.mp;k=Bz(a.s3);r.fillStyle=k;r=a.mp;l=Bz(a.s3);r.strokeStyle=l;r=a.mp;k=Bz(FL.m2);r.globalCompositeOperation=k;}if(e&&f&&i&&j){k=a.mp;n
=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;k.drawImage(b,n,o,p,q,s,t,u,v);}a.AP=null;},
AIs=()=>{LY=Na(255,255,255,1.0);};
let HS=F(HB);
let AXM=a=>{let b,c;b=a.kv;if(b<a.kn){a.kv=b+1|0;return a.iL(b);}c=new NG;c.kg=1;c.kh=1;B(c);},
EB=(a,b)=>{let c,d;if(a.iO()){c=new Gq;c.kg=1;c.kh=1;B(c);}d=a.kv;if(d<a.kn){a.kv=d+1|0;a.iY(d,b);return a;}c=new Jg;c.kg=1;c.kh=1;B(c);},
Ft=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kn)return a.iL(b);c=new H;d=a.kn;e=new K;e.ke=G(16);E(e,e.kd,A(526));J(e,e.kd,b,10);E(e,e.kd,A(518));J(e,e.kd,d,10);d=e.kd;Bk(e,d,d+1|0);f=e.ke;g=f.data;g[d]=41;h=new I;d=e.kd;i=g.length;if(d>=0&&d<=(i-0|0)){h.kf=L(f.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
VU=(a,b,c)=>{let d,e,f,g,h,i;if(a.iO()){d=new Gq;d.kg=1;d.kh=1;B(d);}if(b>=0&&b<a.kn){a.iY(b,c);return a;}d=new H;c=a.kn;e=new K;e.ke=G(16);E(e,e.kd,A(526));J(e,e.kd,b,10);E(e,e.kd,A(518));J(e,e.kd,c,10);c=e.kd;Bk(e,c,c+1|0);f=e.ke;g=f.data;g[c]=41;h=new I;c=e.kd;i=g.length;if(c>=0&&c<=(i-0|0)){h.kf=L(f.data,0,c);d.kg=1;d.kh=1;d.kj=h;B(d);}d=new H;d.kg=1;d.kh=1;Bl(d);B(d);},
AWH=a=>{return a.iO();};
function GL(){let a=this;HS.call(a);a.rg=0;a.p6=0;a.pN=null;}
let ALz=(a,b)=>{return a.pN.data[b+a.p6|0];},
AJj=(a,b,c)=>{a.pN.data[b+a.p6|0]=c;},
Xp=a=>{return a.rg;};
let HI=F(EC);
let Sp=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kn)return a.iZ(b);c=new H;d=a.kn;e=new K;e.ke=G(16);E(e,e.kd,A(526));J(e,e.kd,b,10);E(e,e.kd,A(518));J(e,e.kd,d,10);d=e.kd;Bk(e,d,d+1|0);f=e.ke;g=f.data;g[d]=41;h=new I;d=e.kd;i=g.length;if(d>=0&&d<=(i-0|0)){h.kf=L(f.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
N3=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.iO()){d=new Gq;d.kg=1;d.kh=1;B(d);}if(b>=0&&b<a.kn){a.iP(b,c);return a;}d=new H;e=a.kn;f=new K;f.ke=G(16);E(f,f.kd,A(526));J(f,f.kd,b,10);E(f,f.kd,A(518));J(f,f.kd,e,10);e=f.kd;Bk(f,e,e+1|0);g=f.ke;h=g.data;h[e]=41;i=new I;e=f.kd;j=h.length;if(e>=0&&e<=(j-0|0)){i.kf=L(g.data,0,e);d.kg=1;d.kh=1;d.kj=i;B(d);}d=new H;d.kg=1;d.kh=1;Bl(d);B(d);},
AVy=a=>{return a.iO();};
function It(){let a=this;HI.call(a);a.rS=0;a.rf=0;a.qK=null;}
let ANa=(a,b)=>{return a.qK.data[b+a.rf|0];},
ALS=(a,b,c)=>{a.qK.data[b+a.rf|0]=c;},
AMc=a=>{return a.rS;};
let J8=F(BF);
let JA=null,KV=null,AKv=null;
let AFF=()=>{let b,c;b=new J8;b.kx=A(531);b.kq=0;JA=b;c=new J8;c.kx=A(532);c.kq=1;KV=c;AKv=V(J8,[b,c]);};
let II=F(BF);
let X$=null,Nd=null,APG=null;
let APn=()=>{let b,c;b=new II;b.kx=A(533);b.kq=0;X$=b;c=new II;c.kx=A(534);c.kq=1;Nd=c;APG=V(II,[b,c]);};
let KS=F();
function VE(){let a=this;KS.call(a);a.v7=null;a.vy=null;a.zy=null;}
let AEW=(a,b,c,d)=>{let e,f,g,h;if(d!==E_&&d!==Rj&&d!==TK){b=new T;c=new K;c.ke=G(16);E(c,c.kd,A(535));E(c,c.kd,d===null?A(2):d.kx);E(c,c.kd,A(536));d=new I;e=c.ke;f=e.data;g=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){d.kf=L(e.data,0,g);b.kg=1;b.kh=1;b.kj=d;B(b);}b=new H;b.kg=1;b.kh=1;B(b);}a.v7=b;b=No(c,A(537),A(113));if(LC(b,A(113)))b=Ck(b,0,b.kf.length-1|0);a.vy=b;a.zy=d;},
Gf=(a,b,c)=>{let d=new VE();AEW(d,a,b,c);return d;};
function Mo(){let a=this;C.call(a);a.mt=0;a.mx=0;a.mv=0;a.md=0;a.rb=null;a.sh=null;}
let AB7=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=Ba(4);a.rb=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];h[j]=k;j=j+1|0;}}a.sh=AQD(g,h,c,d);b=a.rb.data;a.mt=b[0];a.mx=b[1];a.mv=b[2];c=b[3];a.md=c;if(e&&e!=c)ABJ(a,e);},
AKi=(a,b,c,d)=>{let e=new Mo();AB7(e,a,b,c,d);return e;},
AT4=(a,b,c,d)=>{let e;e=Ba(4);a.rb=e;a.sh=AOq(e.data,b,c,d);e=a.rb.data;a.mt=e[0];a.mx=e[1];a.mv=e[2];a.md=e[3];},
AEr=(a,b,c)=>{let d=new Mo();AT4(d,a,b,c);return d;},
ABJ=(a,b)=>{let c,d,e,f,g;c=AEr(a.mx,a.mv,b);M7(c.mt,0);d=a.mx;e=a.mv;f=a.mt;g=c.mt;Kf(f,g,0,0,d,e,0,0,d,e);Iq(a.mt);a.mt=c.mt;a.md=c.md;a.mv=c.mv;a.rb=c.rb;a.sh=c.sh;a.mx=c.mx;},
AQD=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
AOq=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;},
Iq=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);},
Kf=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);},
M7=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);};
let Is=F(HC);
let ANZ=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.kn)return a.i4(b);c=new H;d=a.kn;e=new K;e.ke=G(16);E(e,e.kd,A(526));J(e,e.kd,b,10);E(e,e.kd,A(518));J(e,e.kd,d,10);d=e.kd;Bk(e,d,d+1|0);f=e.ke;g=f.data;g[d]=41;h=new I;d=e.kd;i=g.length;if(d>=0&&d<=(i-0|0)){h.kf=L(f.data,0,d);c.kg=1;c.kh=1;c.kj=h;B(c);}c=new H;c.kg=1;c.kh=1;Bl(c);B(c);},
AWy=a=>{return a.iO();};
function Kc(){let a=this;Is.call(a);a.ss=0;a.r6=0;a.rJ=null;}
let AEY=(a,b)=>{return a.rJ.data[b+a.r6|0];},
AHw=(a,b,c)=>{a.rJ.data[b+a.r6|0]=c;},
ACB=a=>{return a.ss;};
let ALp=F();
function EW(){BF.call(this);this.oI=0;}
let Fs=null,AJ$=null,AMO=null,AIP=null,AMs=null,ARX=null,AFv=null,AFZ=null;
let AAx=()=>{let b,c,d,e,f,g,h;b=new EW;b.kx=A(538);b.kq=0;b.oI=9728;Fs=b;c=new EW;c.kx=A(539);c.kq=1;c.oI=9729;AJ$=c;d=new EW;d.kx=A(540);d.kq=2;d.oI=9987;AMO=d;e=new EW;e.kx=A(541);e.kq=3;e.oI=9984;AIP=e;f=new EW;f.kx=A(542);f.kq=4;f.oI=9985;AMs=f;g=new EW;g.kx=A(543);g.kq=5;g.oI=9986;ARX=g;h=new EW;h.kx=A(544);h.kq=6;h.oI=9987;AFv=h;AFZ=V(EW,[b,c,d,e,f,g,h]);};
function Io(){BF.call(this);this.sn=0;}
let AQQ=null,FD=null,AKA=null,AQ_=null;
let AGy=()=>{let b,c,d;b=new Io;b.kx=A(545);b.kq=0;b.sn=33648;AQQ=b;c=new Io;c.kx=A(546);c.kq=1;c.sn=33071;FD=c;d=new Io;d.kx=A(547);d.kq=2;d.sn=10497;AKA=d;AQ_=V(Io,[b,c,d]);};
let Rd=F();
let ATQ=(a,b)=>{b=a.S(b);BE();return b===null?null:b instanceof Ge()&&b instanceof E1?(b[Bt]===true?b:b.kW):b;},
ABr=a=>{return a.eV();};
function Ii(){let a=this;HS.call(a);a.qt=null;a.uX=0;a.qu=0;}
let AIL=a=>{return a.uX;};
let Pv=F(Ii);
let AEQ=(a,b)=>{let c;c=a.qt.lk.data;b=a.qu+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
Xn=(a,b,c)=>{let d;d=a.qt.lk.data;b=a.qu+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let Tq=F(Ii);
let AQk=(a,b)=>{let c;c=a.qt.lk.data;b=a.qu+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
ZL=(a,b,c)=>{let d;d=a.qt.lk.data;b=a.qu+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function HK(){let a=this;HI.call(a);a.pB=null;a.vS=0;a.ql=0;}
let AMr=a=>{return a.vS;},
ANW=a=>{return a.pB.lk.data;};
let Pb=F(HK);
let AIV=(a,b)=>{let c;c=a.pB.lk.data;b=a.ql+(b*4|0)|0;return LD((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
ANP=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:GK(c);e=a.pB.lk.data;b=a.ql+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let RP=F(HK);
let XB=(a,b)=>{let c;c=a.pB.lk.data;b=a.ql+(b*4|0)|0;return LD(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AIH=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:GK(c);e=a.pB.lk.data;b=a.ql+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
function Hz(){let a=this;Is.call(a);a.px=null;a.ut=0;a.qS=0;}
let AGj=a=>{return a.ut;},
AOx=a=>{return a.px.lk.data;};
let O2=F(Hz);
let ACi=(a,b)=>{let c;c=a.px.lk.data;b=a.qS+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;},
ABm=(a,b,c)=>{let d;d=a.px.lk.data;b=a.qS+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;};
let QW=F(Hz);
let ALl=(a,b)=>{let c;c=a.px.lk.data;b=a.qS+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;},
ACk=(a,b,c)=>{let d;d=a.px.lk.data;b=a.qS+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;};
let LS=F(BA);
let Gq=F(LS);
let NG=F(BA);
let Gs=F(BF);
let Rj=null,E_=null,AJU=null,AEo=null,TK=null,AOe=null;
let ADN=()=>{let b,c,d,e,f;b=new Gs;b.kx=A(548);b.kq=0;Rj=b;c=new Gs;c.kx=A(549);c.kq=1;E_=c;d=new Gs;d.kx=A(550);d.kq=2;AJU=d;e=new Gs;e.kx=A(551);e.kq=3;AEo=e;f=new Gs;f.kx=A(552);f.kq=4;TK=f;AOe=V(Gs,[b,c,d,e,f]);};
let E9=F(BF);
let Sb=null,AOY=null,RL=null,UH=null,SU=null,Rz=null,F2=null,AM2=null;
let Iz=b=>{let c,d,e,f,g,h,i;if(b==1)return Sb;if(b==2)return RL;if(b==5)return UH;if(b==6)return SU;if(b==3)return Rz;if(b==4)return F2;c=new T;d=new K;d.ke=G(16);E(d,d.kd,A(553));J(d,d.kd,b,10);e=new I;f=d.ke;g=f.data;h=d.kd;i=g.length;if(h>=0&&h<=(i-0|0)){e.kf=L(f.data,0,h);c.kg=1;c.kh=1;c.kj=e;B(c);}c=new H;c.kg=1;c.kh=1;B(c);},
Xo=()=>{let b,c,d,e,f,g,h;b=new E9;b.kx=A(203);b.kq=0;Sb=b;c=new E9;c.kx=A(554);c.kq=1;AOY=c;d=new E9;d.kx=A(555);d.kq=2;RL=d;e=new E9;e.kx=A(556);e.kq=3;UH=e;f=new E9;f.kx=A(557);f.kq=4;SU=f;g=new E9;g.kx=A(558);g.kq=5;Rz=g;h=new E9;h.kx=A(559);h.kq=6;F2=h;AM2=V(E9,[b,c,d,e,f,g,h]);};
let ADw=F();
let Mm=0,JD=null,Jw=null;
let AKE=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:GK(b);c.wp=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uF=0;c.ur=0;return;}if(f)d=e|8388608;else{d=e<<1;while(El(Dh(X(d),X(8388608)),B8)){d=d<<1;f=f+(-1)|0;}}g=Jw;h=AMw(g,0,g.data.length,f);if(h<0)h= -h|0;g=Jw.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=JD.data[e];j=Dh(X(d),D(4294967295, 0));k=Bm(Bg(Bd(j,Dh(X(e),D(4294967295, 0))),32-i|0));if(k<Mm){while(Fd(k,Mm)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=Jw.data;e=h+1|0;i=9+(f-g[e]|0)
|0;k=Bm(Bg(Bd(j,Dh(X(JD.data[e]),D(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=JD.data;f=h+1|0;e=g[f];m=i-1|0;n=Bd(Dh(X(l),D(4294967295, 0)),Dh(X(e),D(4294967295, 0)));e=32-m|0;o=Bm(Bg(n,e));p=Bm(Bg(Bd(Dh(X(d-1|0),D(4294967295, 0)),Dh(X(g[f]),D(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(Fd(En(k,r),En(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(Fd(En(k,l),En(o,l))>=0)break;m=l;}s=Fd(q,m);d=s>0?Dt(En(k,q),q):s<0?Dt(En(k,m),m)+m|0:Dt(En((k+(m/2|0)|0),m),m);if(Fx(X(d),X(1000000000))>=0)while(true){h=h
+1|0;d=En(d,10);if(Fd(d,1000000000)<0)break;}else if(Fd(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.uF=d;c.ur=h-50|0;},
AD7=()=>{Mm=En((-1),10);JD=IW([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Jw=IW([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let Jy=F(BF);
let LV=null,P9=null,Vr=null;
let ATY=()=>{let b,c;b=new Jy;b.kx=A(560);b.kq=0;LV=b;c=new Jy;c.kx=A(561);c.kq=1;P9=c;Vr=V(Jy,[b,c]);};
function DM(){BF.call(this);this.m2=null;}
let L5=null,AA4=null,ABH=null,X4=null,APJ=null,AT8=null,ABg=null,AG2=null,AIF=null,FL=null,AN_=null,AOj=null;
let AFt=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new DM;b.kx=A(562);b.kq=0;b.m2=A(563);L5=b;c=new DM;c.kx=A(564);c.kq=1;c.m2=A(565);AA4=c;d=new DM;d.kx=A(566);d.kq=2;d.m2=A(567);ABH=d;e=new DM;e.kx=A(568);e.kq=3;e.m2=A(569);X4=e;f=new DM;f.kx=A(570);f.kq=4;f.m2=A(571);APJ=f;g=new DM;g.kx=A(572);g.kq=5;g.m2=A(573);AT8=g;h=new DM;h.kx=A(574);h.kq=6;h.m2=A(575);ABg=h;i=new DM;i.kx=A(576);i.kq=7;i.m2=A(577);AG2=i;j=new DM;j.kx=A(578);j.kq=8;j.m2=A(579);AIF=j;k=new DM;k.kx=A(580);k.kq=9;k.m2=A(581);FL=k;l=new DM;l.kx=A(582);l.kq
=10;l.m2=A(583);AN_=l;AOj=V(DM,[b,c,d,e,f,g,h,i,j,k,l]);};
let ANw=F(0);
let IZ=F(BF);
let Pj=null,Vi=null,ADx=null;
let ABQ=()=>{let b,c;b=new IZ;b.kx=A(584);b.kq=0;Pj=b;c=new IZ;c.kx=A(585);c.kq=1;Vi=c;ADx=V(IZ,[b,c]);};
let AMu=F();
let K$=0;
let AOu=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;if(!K$){QK(b,c,d,e);return;}f=HO;if(f!==NZ&&f!==f&&f!==Nm)ANN(b,c,d,e);else{g=B5;f=c.lR;if(f===null)h=6408;else a:{e=f.md;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new T;g=new K;g.ke=G(16);Eu(g,g.kd,A(64));J(g,g.kd,e,10);f=new I;i=g.ke;j=i.data;d=g.kd;e=j.length;if(d>=0&&d<=(e-0|0)){f.kf=L(i.data,0,d);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}k=f===null?c.mB:f.mx;l=f===null
?c.mF:f.mv;if(f===null)m=6408;else b:{m=f.md;switch(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new T;g=new K;Bu(g);g.ke=G(16);ATn(g,g.kd,A(64));J(g,g.kd,m,10);f=new I;i=g.ke;j=i.data;d=g.kd;e=j.length;if(d>=0&&d<=(e-0|0)){f.kf=L(i.data,0,d);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}if(f===null)n=5121;else c:{n=f.md;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new T;g=new K;g.ke
=G(16);Eu(g,g.kd,A(64));J(g,g.kd,n,10);f=new I;i=g.ke;j=i.data;d=g.kd;e=j.length;if(d>=0&&d<=(e-0|0)){f.kf=L(i.data,0,d);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}n=5121;}g.cA(b,0,h,k,l,0,m,n,c.q_);Bs.i9(b);}},
ANN=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=B7.qs.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(B7.qs.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bs.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new BD;h.kw=g;i=h;g.classObject=i;}}if(h.kp===null)h.kp=W(h.kw.$meta.name);i=h.kp;if(i===A(586))f=1;else if(!(A(586) instanceof I))f=0;else{g=A(586);f=i.kf!==g.kf?0:1;}if(!f&&ER===null){QK(b,c,d,e);break a;}}g=B5;i=c.lR;if(i===null)f=6408;else b:{e=i.md;switch(e){case 1:f
=6406;break b;case 2:f=6410;break b;case 3:case 5:f=6407;break b;case 4:case 6:f=6408;break b;default:}c=new T;g=new K;g.ke=G(16);Cd(g,g.kd,Cp(A(64)));J(g,g.kd,e,10);i=new I;j=g.ke;k=j.data;d=g.kd;e=k.length;if(d>=0&&d<=(e-0|0)){i.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}l=i===null?c.mB:i.mx;m=i===null?c.mF:i.mv;if(i===null)n=6408;else c:{n=i.md;switch(n){case 1:n=6406;break c;case 2:n=6410;break c;case 3:case 5:n=6407;break c;case 4:case 6:n=6408;break c;default:}c=new T;g=new K;g.ke
=G(16);Eu(g,g.kd,A(64));J(g,g.kd,n,10);i=new I;j=g.ke;k=j.data;d=g.kd;e=k.length;if(d>=0&&d<=(e-0|0)){i.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}if(i===null)o=5121;else d:{o=i.md;switch(o){case 1:case 2:case 3:case 4:break;case 5:o=33635;break d;case 6:o=32819;break d;default:c=new T;g=new K;g.ke=G(16);Cd(g,g.kd,Cp(A(64)));J(g,g.kd,o,10);i=new I;j=g.ke;k=j.data;d=g.kd;e=k.length;if(d>=0&&d<=(e-0|0)){i.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=i;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}o=5121;}g.cA(b,
0,f,l,m,0,n,o,c.q_);Bs.i9(b);}},
QK=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s;f=B5;g=c.lR;if(g===null)h=6408;else a:{i=g.md;switch(i){case 1:break;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:c=new T;f=new K;f.ke=G(16);Cd(f,f.kd,Cp(A(64)));J(f,f.kd,i,10);g=new I;j=f.ke;k=j.data;d=f.kd;e=k.length;if(d>=0&&d<=(e-0|0)){g.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}h=6406;}l=g===null?c.mB:g.mx;m=g===null?c.mF:g.mv;if(g===null)n=6408;else b:{n=g.md;switch(n){case 1:n=6406;break b;case 2:n
=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n=6408;break b;default:}c=new T;f=new K;f.ke=G(16);Eu(f,f.kd,A(64));J(f,f.kd,n,10);g=new I;j=f.ke;k=j.data;d=f.kd;e=k.length;if(d>=0&&d<=(e-0|0)){g.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}if(g===null)o=5121;else c:{o=g.md;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new T;f=new K;f.ke=G(16);Cd(f,f.kd,Cp(A(64)));J(f,f.kd,o,10);g=new I;j=f.ke;k=j.data;d=f.kd;e
=k.length;if(d>=0&&d<=(e-0|0)){g.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}f.cA(b,0,h,l,m,0,n,o,c.q_);if(Bs===null&&d!=e){c=new T;c.kg=1;c.kh=1;c.kj=A(587);B(c);}f=c.lR;p=(f===null?c.mB:f.mx)/2|0;i=(f===null?c.mF:f.mv)/2|0;h=1;while(p>0&&i>0){f=new F$;g=c.lR;J9(f,p,i,g===null?F2:Iz(g.md));g=JA;f.rQ=g;q=f.lR;if(q===null){FA(f);g=f.mp;q=Bz(FL.kx);g.globalCompositeOperation=q;}else{d=g!==g?1:0;M7(q.mt,d);}g=c.lR;l=g===null?c.mB:g.mx;m=g===null?c.mF:g.mv;q=f.lR;if(q===null){FA(c);Kw(f,
c.oX,0,0,l,m,0,0,p,i);}else{r=g.mt;s=q.mt;Kf(r,s,0,0,l,m,0,0,p,i);}if(h>1){if(c.pd){f=new T;f.kg=1;f.kh=1;f.kj=A(63);B(f);}EU();Hg(Gh,c.qB);g=c.lR;if(g!==null)Iq(g.mt);c.pd=1;}c=B5;g=f.lR;if(g===null)d=6408;else d:{d=g.md;switch(d){case 1:break;case 2:d=6410;break d;case 3:case 5:d=6407;break d;case 4:case 6:d=6408;break d;default:c=new T;f=new K;f.ke=G(16);Cd(f,f.kd,Cp(A(64)));J(f,f.kd,d,10);g=new I;j=f.ke;k=j.data;d=f.kd;e=k.length;if(d>=0&&d<=(e-0|0)){g.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg
=1;c.kh=1;B(c);}d=6406;}e=g===null?f.mB:g.mx;p=g===null?f.mF:g.mv;if(g===null)l=6408;else e:{l=g.md;switch(l){case 1:break;case 2:l=6410;break e;case 3:case 5:l=6407;break e;case 4:case 6:l=6408;break e;default:c=new T;f=new K;f.ke=G(16);Eu(f,f.kd,A(64));J(f,f.kd,l,10);g=new I;j=f.ke;k=j.data;d=f.kd;e=k.length;if(d>=0&&d<=(e-0|0)){g.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}l=6406;}if(g===null)m=5121;else f:{m=g.md;switch(m){case 1:case 2:case 3:case 4:break;case 5:m=33635;break f;case 6:m
=32819;break f;default:c=new T;f=new K;f.ke=G(16);Cd(f,f.kd,Cp(A(64)));J(f,f.kd,m,10);g=new I;j=f.ke;k=j.data;d=f.kd;e=k.length;if(d>=0&&d<=(e-0|0)){g.kf=L(j.data,0,d);c.kg=1;c.kh=1;c.kj=g;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}m=5121;}c.cA(b,h,d,e,p,0,l,m,f.q_);c=f.lR;p=(c===null?f.mB:c.mx)/2|0;i=(c===null?f.mF:c.mv)/2|0;h=h+1|0;c=f;}},
AWD=()=>{K$=1;};
let TL=F();
let Ok=null;
let L0=()=>{L0=BR(TL);ATT();};
let ATT=()=>{let b,c;b=Ba((Vr.p()).data.length);c=b.data;Ok=b;c[LV.kq]=1;c[P9.kq]=2;};
let Jg=F(BA);
function Q6(){let a=this;Ci.call(a);a.xq=null;a.Bj=null;a.yb=null;a.wS=null;a.zo=null;a.Bm=null;a.zO=null;a.xA=null;a.z7=null;a.AY=null;a.rr=null;a.AI=null;a.Ap=null;a.wP=null;a.vL=null;}
let AMH=(a,b)=>{let c,d,e,f,g,h,i,j,k;EN(a);c=new Op;c.q7=0;a.rr=c;a.vL=new DH;a.wP=b;c=new Bh;c.kJ=1;c.km=R(C,16);a.xq=c;d=new FE;e=Fr;f=Gf(e.pw,A(588),E_);g=null;e=F4(f,FB(f),g,0);g=B5;c=g.ko.createTexture();h=g.mN;g.mN=h+1|0;B6(g.nH,h,Cc(c));c=Fs;d.n5=c;d.ot=c;c=FD;d.n0=c;d.n8=c;d.oZ=1.0;d.nf=3553;d.oE=h;Gl(d,e);e=Da;c=DA;if(e===null)c=F7(c);else{h=Fm(e);c=FX(c,e,h&(c.mw.data.length-1|0),h);}c=c===null?null:c.mX;if(c===null){c=new Bh;Bu(c);c.kJ=1;c.km=R(C,16);}S(c,d);E6(DA,e,c);a.Bj=d;c=new E8;c.nx=d;d=d.nk;In(c,
0,0,d.nn,d.ng);a.yb=c;if(!(a.lf===21.0&&a.li===21.0)){a.lf=21.0;a.li=21.0;}Iv(a,a.kH,a.kI,a.lf,a.li);c=new Z;i=a.lf/2.0;j=a.li/2.0;c.kl=i;c.kk=j;a.wS=c;if(!(a.nl===1.0&&a.nm===1.0)){a.nl=1.0;a.nm=1.0;}g=b.vO;b=g.o9;a.zo=b;c=g.sz;a.Bm=c;d=g.qU;a.zO=d;f=g.sO;a.xA=f;e=g.oR;a.z7=e;g=g.rk;a.AY=g;a.rr.q7=1;k=new DC;k.p8=12;a.Ap=k;k=new Pu;UM=b;AF2=c;Xa=d;RC=f;Z4=e;AKn=g;a.AI=k;},
AI$=a=>{let b=new Q6();AMH(b,a);return b;},
ANp=(a,b,c)=>{let d,e,f,g,h;d=a.pD;c=d.k_;e=d.k$;f=d.k9;g=d.lc;d=b.nw;d.k_=c;d.k$=e;d.k9=f;d.lc=g;CO(d);b.py=Ec(b.nw);d=a.yb;e=a.kH;h=a.wS;GI(b,d,e-h.kl,a.kI-h.kk,a.om,a.on,a.lf,a.li,a.nl,a.nm,a.mO);},
AO6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$$je;a:{c=a.rr;if(c.q7){c.q7=0;d=ANz(a,b);c=a.rr;CE();e=Bw;f=BG(e,M(Dq));g=f<0?null:e.k3.data[f];if(g===null){g=new CK;e=new Bh;e.kJ=0;e.km=R(C,4);g.kA=e;g.la=100;b:{try{e=CU(M(Dq),null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{e=CS(M(Dq),null);CV(e,1);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}e=null;}g.kU=e;if(e===null){c=new BA;d=new K;Bu(d);d.ke=G(16);BZ(d,d.kd,A(21));if(M(Dq).kp===null)M(Dq).kp
=W(M(Dq).kw.$meta.name);h=M(Dq).kp;BZ(d,d.kd,h);h=new I;i=d.ke;j=i.data;f=d.kd;Bu(h);Gr(0,f,j.length);h.kf=L(i.data,0,f);c.kg=1;c.kh=1;Bl(c);c.kj=h;B(c);}Cj(Bw,M(Dq),g);}h=g.kA;k=h.ki;if(k){if(!k){c=new BO;c.kg=1;c.kh=1;Bl(c);c.kj=A(22);B(c);}k=k-1|0;h.ki=k;i=h.km.data;h=i[k];i[k]=null;}else c:{try{h=C$(g.kU,null);break c;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){h=$$je;}else{throw $$e;}}d=new T;c=new K;c.ke=G(16);E(c,c.kd,A(23));l=g.kU.lZ.lY;if(l.kp===null)l.kp=W(l.kw.$meta.name);e=l.kp;E(c,c.kd,e);e
=new I;i=c.ke;j=i.data;f=c.kd;m=j.length;if(f>=0&&f<=(m-0|0)){e.kf=L(i.data,0,f);d.kg=1;d.kh=1;Bl(d);d.kj=e;d.lI=h;B(d);}B(FQ());}h=h;h.mm=g;e=h;S(e.lO,d);h=e.lh;if(h!==null){d.lh=h;if(d.le===null)d.le=h;}S(e.lO,c);h=e.lh;if(h!==null){c.lh=h;if(c.le===null)c.le=h;}c=e.lO;k=0;f=c.ki;while(true){if(k>=f){e.lh=a;if(e.le===null)e.le=a;S(a.qN,e);c=a.lN;c!==null&&!c.vn;break a;}if(k>=c.ki)break;c.km.data[k].by(a);k=k+1|0;}d=new H;h=new K;h.ke=G(16);E(h,h.kd,A(18));J(h,h.kd,k,10);E(h,h.kd,A(19));k=c.ki;J(h,h.kd,k,
10);c=new I;i=h.ke;j=i.data;f=h.kd;m=j.length;if(f>=0&&f<=(m-0|0)){c.kf=L(i.data,0,f);d.kg=1;d.kh=1;d.kj=c;B(d);}c=new H;IM(c);B(c);}}c=a.vL;n=a.kH;o=a.kI;p=a.lf;q=a.li;c.nz=n;c.ny=o;c.nA=p;c.nu=q;Gg(a,1);h=a.wP.ly;a.xq=h;if(CJ){c=new Cw;c.k8=1;c.lg=h;c.mi=1;}else{if(h.kS===null){c=new C_;c.mu=h;c.my=1;h.kS=c;}c=CT(h.kS);}while(true){if(!c.k8){h=new T;h.kg=1;h.kh=1;h.kj=A(17);B(h);}if(!(c.l3>=c.lg.ki?0:1)){Fg(a,b);q=a.kI;c=a.xA;f=c.ki;k=f-1|0;if(k>=f){d=new H;h=new K;h.ke=G(16);E(h,h.kd,A(18));J(h,h.kd,k,10);E(h,
h.kd,A(19));k=c.ki;J(h,h.kd,k,10);c=new I;i=h.ke;j=i.data;f=h.kd;m=j.length;if(f>=0&&f<=(m-0|0)){c.kf=L(i.data,0,f);d.kg=1;d.kh=1;d.kj=c;B(d);}c=new H;U(c);B(c);}if(q<=c.km.data[k].kk){c=a.lb;if(c!==null){k=DO(c.kD,a,1);if(k!=(-1)){h=c.kD;CA(h);h=Do(h,k);d=c.lN;if(d!==null){ADF(d,h);c=d.qA;if(c!==null&&c.ja(h))AJg(d,null);c=d.n_;if(c!==null&&c.ja(h))ALR(d,null);Ek(d,h);}h.lb=null;h.x(null);}}}return;}h=Cq(c);if(AFH(a.vL,h.sb)){a.rr.q7=1;k=a.qN.ki-1|0;while(k>=0){h=a.qN;if(k>=h.ki){d=new H;c=new K;c.ke=G(16);E(c,
c.kd,A(18));J(c,c.kd,k,10);E(c,c.kd,A(19));k=h.ki;J(c,c.kd,k,10);h=new I;i=c.ke;j=i.data;f=c.kd;m=j.length;if(f>=0&&f<=(m-0|0)){h.kf=L(i.data,0,f);d.kg=1;d.kh=1;d.kj=h;B(d);}c=new H;G9(c);B(c);}h.km.data[k].by(null);k=k+(-1)|0;}h=a.qN;i=h.km;k=0;f=h.ki;d=null;if(k>f)break;while(k<f){j=i.data;m=k+1|0;j[k]=d;k=m;}h.ki=0;}}c=new Bj;c.kg=1;c.kh=1;B(c);};
let U7=F();
let RF=null;
let N0=()=>{N0=BR(U7);YH();};
let AIU=(b,c,d,e)=>{N0();a:{b:{if(RF===Nb){if(B7.lE.width!=B7.lE.width)break b;if(B7.lE.height!=B7.lE.height)break b;}B5.dE(b,c,d,e);break a;}B5.dE(Dt(b,B7.lE.width)/B7.lE.width|0,Dt(c,B7.lE.height)/B7.lE.height|0,Dt(d,B7.lE.width)/B7.lE.width|0,Dt(e,B7.lE.height)/B7.lE.height|0);}},
YH=()=>{RF=Nb;};
let ADA=F();
function Nn(){let a=this;C.call(a);a.qW=null;a.oD=null;}
let AQ4=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qW.readyState==4){if(a.qW.status==200){if(a.oD.of.na){if(BX===null){b=new C6;c=new Cu;c.l8=BN(32);b.mq=c;c=new K;Bu(c);c.ke=G(16);b.l_=c;b.l$=G(32);b.ma=0;b.mb=Co;BX=b;}b=a.oD.ob;c=new K;c.ke=G(16);E(c,c.kd,A(589));d=c.kd;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ke;f=e.data;g
=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){b.kf=L(e.data,0,g);B2(Bz(b));B2("\n");}else{b=new H;b.kg=1;b.kh=1;Bl(b);B(b);}}b=a.oD;b.ou.je(b.ob,W(a.qW.responseText));}else if(a.qW.status!=404&&a.qW.status!=403){try{i=X(100);$p=1;continue _;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}b=a.oD;c=b.of;d=b.pI;j=b.ob;b=b.ou;if(c.na){if(BX===null){k=new C6;l=new Cu;l.l8=BN(32);Bu(k);k.mq=l;l=new K;D1(l,16);k.l_=l;k.l$=G(32);k.ma=0;k.mb=Co;BX=k;}k=new K;k.ke=G(16);E(k,k.kd,A(102));E(k,k.kd,j===null?A(2)
:j);l=new I;e=k.ke;f=e.data;h=k.kd;m=f.length;if(h>=0&&h<=(m-0|0)){l.kf=L(e.data,0,h);B2(Bz(l));B2("\n");}else{b=new H;U(b);B(b);}}c.lx=c.lx+1|0;k=new Hs;k.of=c;k.pI=d;k.ob=j;k.ou=b;b=null;c=null;k.nt=new C;k.ns=1;k.n9=c;k.os=b;g=CZ;CZ=g+1|0;k.or=X(g);b=new ED;b.n$=k;EX(b);}else{b=a.oD;b.ou.jf(b.ob);}b=a.oD.of;b.lx=b.lx-1|0;}return;case 1:a:{try{Lv(i);if(FY()){break _;}break a;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}}b=a.oD;c=b.of;d=b.pI;j=b.ob;b=b.ou;if(c.na){if(BX===null){k=new C6;l
=new Cu;l.l8=BN(32);Bu(k);k.mq=l;l=new K;D1(l,16);k.l_=l;k.l$=G(32);k.ma=0;k.mb=Co;BX=k;}k=new K;k.ke=G(16);E(k,k.kd,A(102));E(k,k.kd,j===null?A(2):j);l=new I;e=k.ke;f=e.data;h=k.kd;m=f.length;if(h>=0&&h<=(m-0|0)){l.kf=L(e.data,0,h);B2(Bz(l));B2("\n");}else{b=new H;U(b);B(b);}}c.lx=c.lx+1|0;k=new Hs;k.of=c;k.pI=d;k.ob=j;k.ou=b;b=null;c=null;k.nt=new C;k.ns=1;k.n9=c;k.os=b;g=CZ;CZ=g+1|0;k.or=X(g);b=new ED;b.n$=k;EX(b);b=a.oD.of;b.lx=b.lx-1|0;return;default:FN();}}Dp().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AGz=(a,b)=>{let $p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AQ4(a,b);if(FY()){break _;}return;default:FN();}}Dp().s(a,b,$p);};
function Op(){BQ.call(this);this.q7=0;}
let AKe=(a,b)=>{a.q7=1;return 1;};
let Pu=F();
let UM=null,AF2=null,Xa=null,RC=null,Z4=null,AKn=null,V2=null,Q5=null,Mf=null;
let ANz=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;b=UM;if(0>=b.ki){d=new H;e=new K;e.ke=G(16);E(e,e.kd,A(18));J(e,e.kd,0,10);E(e,e.kd,A(19));f=b.ki;J(e,e.kd,f,10);b=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){b.kf=L(g.data,0,i);d.kg=1;d.kh=1;d.kj=b;B(d);}b=new H;U(b);B(b);}b=b.km.data[0];V2=b;e=RC;i=e.ki;f=i-1|0;if(f>=i){d=new H;b=new K;b.ke=G(16);E(b,b.kd,A(18));J(b,b.kd,f,10);E(b,b.kd,A(19));f=e.ki;J(b,b.kd,f,10);e=new I;g=b.ke;h=g.data;i=b.kd;j=h.length;if(i>=0&&i<=(j-0|0)){e.kf=L(g.data,0,
i);d.kg=1;d.kh=1;d.kj=e;B(d);}b=new H;U(b);B(b);}e=e.km.data[f];Q5=e;k=e.kl;l=e.kk;c=(Ej(b.kl-k)+Ej(V2.kk-Q5.kk))*c*1.0;b=null;CE();d=Bw;i=BG(d,M(DC));m=i<0?null:d.k3.data[i];if(m===null){m=new CK;d=new Bh;Bu(d);d.kJ=0;d.km=R(C,4);m.kA=d;m.la=100;a:{try{d=CU(M(DC),null);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){}else{throw $$e;}}try{d=CS(M(DC),null);CV(d,1);break a;}catch($$e){$$je=Bc($$e);if($$je instanceof Ca){}else{throw $$e;}}d=null;}m.kU=d;if(d===null){b=new BA;d=new K;D1(d,16);Cd(d,d.kd,
A(21));if(M(DC).kp===null)M(DC).kp=W(M(DC).kw.$meta.name);e=M(DC).kp;Cd(d,d.kd,e);Kj(b,ABu(d.ke,0,d.kd));B(b);}Cj(Bw,M(DC),m);}b:{e=m.kA;f=e.ki;if(f){if(!f){b=new BO;Kj(b,A(22));B(b);}f=f-1|0;e.ki=f;g=e.km.data;e=g[f];g[f]=null;}else try{e=C$(m.kU,null);break b;}catch($$e){$$je=Bc($$e);if($$je instanceof BH){e=$$je;d=new T;b=new K;Bu(b);b.ke=G(16);BZ(b,b.kd,A(23));n=m.kU.lZ.lY;if(n.kp===null)n.kp=W(n.kw.$meta.name);m=n.kp;BZ(b,b.kd,m);m=new I;g=b.ke;h=g.data;i=b.kd;Bu(m);Gr(0,i,h.length);m.kf=L(g.data,0,i);SK(d,
m,e);B(d);}else{throw $$e;}}}e=e;e.mm=m;e=e;e.u$=k;e.u9=l;e.x7=c;e.vR=b;Mf=e;return e;},
AVK=()=>{let b;b=new DC;b.p8=12;Mf=b;};
let JW=F(BF);
let Nb=null,AJX=null,ADr=null;
let AAj=()=>{let b,c;b=new JW;b.kx=A(590);b.kq=0;Nb=b;c=new JW;c.kx=A(591);c.kq=1;AJX=c;ADr=V(JW,[b,c]);};
let Ol=F(0);
function UR(){let a=this;C.call(a);a.lt=null;a.o7=0;a.tM=null;a.rL=null;a.tj=null;a.yX=null;a.vA=null;a.nb=null;a.te=0;a.z2=0.0;}
let AM4=(a,b,c)=>{let d,e,f,g,h,i,j;a.o7=0;a.tM=Dj();a.rL=Dj();a.tj=Dj();a.yX=new Z;d=new BM;d.k_=1.0;d.k$=1.0;d.k9=1.0;d.lc=1.0;CO(d);a.vA=d;a.z2=0.75;if(c!==null)a.lt=AHP(b,0,1,0,c);else{c=new L3;e=Ri(Xf(0,1,0),AJQ(0,1,0));if(!e.op){c=new T;d=new K;d.ke=G(16);E(d,d.kd,A(479));if(!e.op)f=e.nW;else{f=Bs.g$(e.m_);e.nW=f;}E(d,d.kd,f);f=new I;g=d.ke;h=g.data;i=d.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);c.kg=1;c.kh=1;c.kj=f;B(c);}c=new H;c.kg=1;c.kh=1;B(c);}S1(c,b,0,1,0,e);c.A1=1;a.lt=c;}MS(a.tM,0.0,
0.0+B7.lE.width,0.0,0.0+B7.lE.height,0.0,1.0);a.o7=1;},
AJf=(a,b)=>{let c=new UR();AM4(c,a,b);return c;},
Go=(a,b)=>{let c,d;if(a.nb!==null){b=new BO;b.kg=1;b.kh=1;b.kj=A(592);B(b);}a.nb=b;if(a.o7){Dl(a.tj,a.tM.lF);OS(a.tj.lF,a.rL.lF);a.o7=0;}b=a.lt;c=a.tj;d=a.nb.s$;Dl(b.uY,c.lF);b.xG=d;},
AJN=(a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{let o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;AGP(a,Ih,RS,8);Gc();o=GA.data;p=o[((j+90.0)*45.511112213134766|0)&16383];q=o[(j*45.511112213134766|0)&16383];r= -d;s= -e;t=f-d;u=g-e;if(!(h===1.0&&i===1.0)){r=r*h;s=s*i;t=t*h;u=u*i;}v=b+d;w=c+e;b=p*r;e=q*s;x=b-e+v;b=q*r;c=p*s;y=b+c+w;d=p*t;z=d-e+v;b=q*t;ba=b+c+w;bb=d-q*u+v;bc=b+p*u+w;bd=x+bb-z;be=bc-(ba-y);if(a.nb!==Ih){bf=a.lt;bf.mQ.data[bf.mE+bf.m8|0]=DD(k.k_,k.k$,k.k9,k.lc);DF(a.lt,x,y,0.0);bf=a.lt;bf.mQ.data[bf.mE+bf.m8|0]
=DD(l.k_,l.k$,l.k9,l.lc);DF(a.lt,z,ba,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(m.k_,m.k$,m.k9,m.lc);DF(a.lt,bb,bc,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(m.k_,m.k$,m.k9,m.lc);DF(a.lt,bb,bc,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(n.k_,n.k$,n.k9,n.lc);DF(a.lt,bd,be,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(k.k_,k.k$,k.k9,k.lc);DF(a.lt,x,y,0.0);}else{bf=a.lt;bf.mQ.data[bf.mE+bf.m8|0]=DD(k.k_,k.k$,k.k9,k.lc);DF(a.lt,x,y,0.0);bf=a.lt;bf.mQ.data[bf.mE+bf.m8|0]=DD(l.k_,l.k$,l.k9,l.lc);DF(a.lt,z,ba,0.0);bf=a.lt;bf.mQ.data[bf.mE
+bf.m8|0]=DD(l.k_,l.k$,l.k9,l.lc);DF(a.lt,z,ba,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(m.k_,m.k$,m.k9,m.lc);DF(a.lt,bb,bc,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(m.k_,m.k$,m.k9,m.lc);DF(a.lt,bb,bc,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(n.k_,n.k$,n.k9,n.lc);DF(a.lt,bd,be,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(n.k_,n.k$,n.k9,n.lc);DF(a.lt,bd,be,0.0);l=a.lt;l.mQ.data[l.mE+l.m8|0]=DD(k.k_,k.k$,k.k9,k.lc);DF(a.lt,x,y,0.0);}},
AGP=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.nb;if(e===null){b=new BO;b.kg=1;b.kh=1;b.kj=A(31);B(b);}if(!(e!==b&&e!==c)){if(a.o7){Gk(a.lt);a.nb=null;Go(a,e);}else{b=a.lt;if((b.wq-b.rw|0)<d){Gk(b);a.nb=null;Go(a,e);}}}else{if(!a.te){if(c===null){c=new BO;e=new K;e.ke=G(16);E(e,e.kd,A(593));E(e,e.kd,b===null?A(2):b.kx);E(e,e.kd,A(594));b=new I;f=e.ke;g=f.data;h=e.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);c.kg=1;c.kh=1;c.kj=b;B(c);}b=new H;b.kg=1;b.kh=1;B(b);}j=new BO;e=new K;e.ke=G(16);E(e,e.kd,A(593));E(e,
e.kd,b===null?A(2):b.kx);E(e,e.kd,A(595));E(e,e.kd,c.kx);E(e,e.kd,A(594));b=new I;f=e.ke;g=f.data;h=e.kd;i=g.length;if(h>=0&&h<=(i-0|0)){b.kf=L(f.data,0,h);j.kg=1;j.kh=1;j.kj=b;B(j);}b=new H;b.kg=1;b.kh=1;B(b);}Gk(a.lt);a.nb=null;Go(a,b);}};
let MZ=F(EP);
let Ky=F(EP);
let O7=F(EP);
let Qp=F(0);
function L3(){let a=this;C.call(a);a.xG=0;a.mE=0;a.x$=0;a.wq=0;a.rw=0;a.ol=null;a.rX=null;a.A1=0;a.yp=0;a.w3=0;a.AA=0;a.m8=0;a.y2=0;a.uY=null;a.mQ=null;a.uQ=null;}
let S1=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.uY=Dj();a.wq=b;a.yp=e;a.rX=f;g=AAb(a,c,d,e);h=new JE;h.sG=1;h.sg=0;f=new Bo;C1();h.xW=f;f=RE(g);h.mJ=ER===null?S0(0,b,f):Sz(0,b,f);f=new H0;f.o2=1;f.qG=0;f.uy=1;if(!Dn){g=FV(0);d=g.data.length;i=new Kc;j=0+d|0;Vp(i,d);i.kv=0;i.kn=j;i.r6=0;i.ss=0;i.rJ=g;}else{k=new C7;g=BN(0);Bu(k);k.kG=(-1);k.kP=0;k.kn=0;k.lp=Ct;k.lT=0;k.lk=g;k.kv=0;k.kn=0;k.mz=1;k.l2=0;k.lp=Dr();i=Ks(k);}f.ov=i;i.kn=i.kv;i.kv=0;i.kG=(-1);i=Bs;k=i.ko.createBuffer();d=i.mM;i.mM=d+1|0;B6(i.nF,d,Cc(k));f.sD
=d;f.rY=35048;h.mG=f;h.q9=0;f=Da;i=Il;if(f===null){i=i.mw.data[0];while(i!==null&&i.nv!==null){i=i.nL;}}else{k=f;if(!k.$id$){l=Fj();k.$id$=l;}m=f.$id$;g=i.mw.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.pY==m){k=i.nv;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.nL;}}i=i===null?null:i.mX;if(i===null){i=new Bh;i.kJ=1;i.km=R(C,16);}S(i,h);E6(Il,f,i);a.ol=h;a.mQ=Ce(Dt(b,(h.mJ.jp()).nj/4|0));a.w3=(a.ol.mJ.jp()).nj/4|0;g=(a.ol.mJ.jp()).mo.data;b=g.length;d=0;a:{while(d<b){if(g[d].m6==8){f=g[d];break a;}d=d+1|0;}f=null;}if
(f===null)b=0;else{g=(a.ol.mJ.jp()).mo.data;m=g.length;c=0;b:{while(c<m){if(g[c].m6==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.oB/4|0;}a.AA=b;g=(a.ol.mJ.jp()).mo.data;m=g.length;c=0;c:{while(c<m){if(g[c].m6==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.ol.mJ.jp()).mo.data;m=g.length;c=0;d:{while(c<m){if(g[c].m6==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.oB/4|0;}a.m8=b;g=(a.ol.mJ.jp()).mo.data;m=g.length;c=0;e:{while(c<m){if(g[c].m6==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.ol.mJ.jp()).mo.data;m
=g.length;c=0;f:{while(c<m){if(g[c].m6==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.oB/4|0;}a.y2=b;a.uQ=R(I,e);m=0;g:{while(m<e){g=a.uQ;f=new K;f.ke=G(16);E(f,f.kd,A(596));J(f,f.kd,m,10);i=new I;n=f.ke;o=n.data;c=f.kd;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.kf=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new H;f.kg=1;f.kh=1;B(f);},
AHP=(a,b,c,d,e)=>{let f=new L3();S1(f,a,b,c,d,e);return f;},
AAb=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Bh;e.kJ=1;e.km=R(C,16);f=new Ea;f.m6=1;f.mR=3;f.m5=5126;f.nc=0;f.m$=A(474);f.oS=0;f.p4=Er(1);S(e,f);if(b){g=new Ea;g.m6=8;g.mR=3;g.m5=5126;g.nc=0;g.m$=A(597);g.oS=0;g.p4=Er(8);S(e,g);}if(c){g=new Ea;g.m6=4;g.mR=4;g.m5=5121;g.nc=1;g.m$=A(475);g.oS=0;g.p4=Er(4);S(e,g);}h=0;while(true){if(h>=d){b=e.ki;i=R(Ea,b);j=i.data;h=0;while(true){c=BW(h,b);if(c>=0)break;if(c>=0){f=new H;g=new K;g.ke=G(16);E(g,g.kd,A(18));J(g,g.kd,h,10);E(g,g.kd,A(19));b=e.ki;J(g,g.kd,b,10);e=new I;i
=g.ke;j=i.data;c=g.kd;d=j.length;if(c>=0&&c<=(d-0|0)){e.kf=L(i.data,0,c);f.kg=1;f.kh=1;f.kj=e;B(f);}e=new H;e.kg=1;e.kh=1;B(e);}j[h]=e.km.data[h];h=h+1|0;}return i;}g=new Ea;k=new K;k.ke=G(16);E(k,k.kd,A(598));J(k,k.kd,h,10);f=new I;i=k.ke;j=i.data;c=k.kd;l=j.length;if(c<0)break;if(c>(l-0|0))break;f.kf=L(i.data,0,c);g.m6=16;g.mR=2;g.m5=5126;g.nc=0;g.m$=f;g.oS=0;g.p4=Er(16);S(e,g);h=h+1|0;}e=new H;e.kg=1;e.kh=1;B(e);},
DF=(a,b,c,d)=>{let e,f;e=a.mE;f=a.mQ.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.x$=0;a.mE=e+a.w3|0;a.rw=a.rw+1|0;},
Gk=a=>{let b,c,d,e,f,g,h;if(!a.rw)return;b=a.rX;c=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}c.hc(b.m_);c=a.rX;d=a.uY;ID();e=JB(c,A(599),Ib);b=Bs;if(c.ll){CR(c,c.mj,c.ml);c.ll=0;}Q_(b,e,1,0,d.lF,0);f=0;while(f<a.yp){b=a.rX;c=a.uQ.data[f];d=Bs;if(b.ll){CR(b,b.mj,b.ml);b.ll=0;}d.hm(JB(b,c,Ib),f);f=f+1|0;}b=a.ol;g=a.mQ;h=a.mE;b.mJ.hd(g,0,h);b=a.ol;Th(b,a.rX,a.xG,0,b.mG.h$()<=0?b.mJ.jq():b.mG.h6(),b.sG);a.x$=0;a.mE=0;a.rw=0;},
Xf=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.ke=G(16);E(e,e.kd,A(600));f=!b?A(68):A(601);E(e,e.kd,f);f=!c?A(68):A(602);E(e,e.kd,f);f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.ke=G(16);E(e,e.kd,f);E(e,e.kd,A(603));f=!c?A(68):A(604);E(e,e.kd,f);f=new I;g=e.ke;h=g.data;b=e.kd;j=h.length;if(b>=0&&b<=(j-0|0)){f.kf=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.ke=G(16);E(e,e.kd,f);E(e,e.kd,A(605));f=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i
>=0&&i<=(j-0|0)){f.kf=L(g.data,0,i);if(c){e=new K;e.ke=G(16);E(e,e.kd,f);E(e,e.kd,A(606));f=new I;g=e.ke;h=g.data;c=e.kd;i=h.length;if(c>=0&&c<=(i-0|0))f.kf=L(g.data,0,c);else{e=new H;e.kg=1;e.kh=1;B(e);}}i=0;while(true){if(i>=d){e=new K;e.ke=G(16);E(e,e.kd,f);E(e,e.kd,A(607));f=new I;g=e.ke;h=g.data;c=e.kd;d=h.length;if(c>=0&&c<=(d-0|0)){f.kf=L(g.data,0,c);return f;}e=new H;e.kg=1;e.kh=1;B(e);}e=new K;e.ke=G(16);E(e,e.kd,f);E(e,e.kd,A(608));J(e,e.kd,i,10);E(e,e.kd,A(609));E(e,e.kd,A(598));J(e,e.kd,i,10);E(e,
e.kd,A(610));f=new I;g=e.ke;h=g.data;c=e.kd;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.kf=L(g.data,0,c);i=i+1|0;}e=new H;e.kg=1;e.kh=1;B(e);}e=new H;e.kg=1;e.kh=1;B(e);}e=new K;e.ke=G(16);E(e,e.kd,f);E(e,e.kd,A(611));J(e,e.kd,i,10);E(e,e.kd,A(610));f=new I;g=e.ke;h=g.data;j=e.kd;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.kf=L(g.data,0,j);i=i+1|0;}e=new H;e.kg=1;e.kh=1;B(e);}e=new H;e.kg=1;e.kh=1;B(e);}e=new K;e.ke=G(16);E(e,e.kd,f);E(e,e.kd,A(612));J(e,e.kd,i,10);E(e,e.kd,A(610));f=new I;g=e.ke;h=g.data;j
=e.kd;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.kf=L(g.data,0,j);i=i+1|0;}e=new H;e.kg=1;e.kh=1;B(e);}e=new H;e.kg=1;e.kh=1;B(e);},
AJQ=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(613);if(c){f=new K;f.ke=G(16);E(f,f.kd,e);E(f,f.kd,A(604));e=new I;g=f.ke;h=g.data;i=f.kd;j=h.length;if(i>=0&&i<=(j-0|0))e.kf=L(g.data,0,i);else{e=new H;e.kg=1;e.kh=1;B(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.ke=G(16);E(f,f.kd,e);E(f,f.kd,A(614));e=!c?A(615):A(616);E(f,f.kd,e);e=new I;h=f.ke;g=h.data;b=f.kd;c=g.length;if(b>=0&&b<=(c-0|0)){e.kf=L(h.data,0,b);if(d>0){f=new K;f.ke=G(16);E(f,f.kd,e);E(f,f.kd,A(617));e=new I;g=f.ke;h=g.data;c=f.kd;i=h.length;if(c>=0&&c<=(i-
0|0))e.kf=L(g.data,0,c);else{e=new H;e.kg=1;e.kh=1;B(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.ke=G(16);E(f,f.kd,e);E(f,f.kd,A(618));e=new I;g=f.ke;h=g.data;c=f.kd;d=h.length;if(c>=0&&c<=(d-0|0)){e.kf=L(g.data,0,c);return e;}e=new H;e.kg=1;e.kh=1;B(e);}if(i!=c){f=new K;f.ke=G(16);E(f,f.kd,e);E(f,f.kd,A(619));J(f,f.kd,i,10);E(f,f.kd,A(620));J(f,f.kd,i,10);E(f,f.kd,A(621));e=new I;g=f.ke;h=g.data;j=f.kd;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.kf=L(g.data,0,j);}else{f=new K;f.ke=G(16);E(f,f.kd,e);E(f,
f.kd,A(619));J(f,f.kd,i,10);E(f,f.kd,A(620));J(f,f.kd,i,10);E(f,f.kd,A(55));e=new I;g=f.ke;h=g.data;j=f.kd;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.kf=L(g.data,0,j);}i=i+1|0;}e=new H;e.kg=1;e.kh=1;B(e);}e=new H;e.kg=1;e.kh=1;B(e);}e=new H;e.kg=1;e.kh=1;B(e);}f=new K;f.ke=G(16);E(f,f.kd,e);E(f,f.kd,A(611));J(f,f.kd,i,10);E(f,f.kd,A(610));e=new I;g=f.ke;h=g.data;j=f.kd;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.kf=L(g.data,0,j);f=new K;f.ke=G(16);E(f,f.kd,e);E(f,f.kd,A(622));J(f,f.kd,i,10);E(f,f.kd,
A(610));e=new I;g=f.ke;h=g.data;j=f.kd;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.kf=L(g.data,0,j);i=i+1|0;}e=new H;e.kg=1;e.kh=1;B(e);}e=new H;e.kg=1;e.kh=1;B(e);};
function HA(){BF.call(this);this.s$=0;}
let AH5=null,Ih=null,RS=null,ARK=null;
let AMQ=()=>{let b,c,d;b=new HA;b.kx=A(623);b.kq=0;b.s$=0;AH5=b;c=new HA;c.kx=A(624);c.kq=1;c.s$=1;Ih=c;d=new HA;d.kx=A(625);d.kq=2;d.s$=4;RS=d;ARK=V(HA,[b,c,d]);};
let AEX=F();
function S9(){let a=this;C.call(a);a.q2=0;a.qD=0;a.nX=0;a.sX=B8;a.uK=null;a.wJ=null;a.yr=B8;a.ww=null;}
function Ju(){let a=this;C.call(a);a.rR=null;a.zq=0.0;a.zV=0;a.uE=null;a.l5=null;a.y$=null;a.xM=null;a.AT=null;}
let APE=null,ATW=null;
let NX=()=>{NX=BR(Ju);AOR();};
let ATE=(a,b,c,d)=>{let e;NX();a.zq=1.0;a.zV=0;if(!BC(b,VI)){e=AF8(b,c);a.rR=e;b=new Sj;b.p5=a;b.lo=e;a.xM=b;}else{e=new TS;QH(e,b,c);e.o_=0;e.rA=FV(Ls((e.ld.data.length/5|0)*3|0)|0);b=new SR;b.p5=a;b.lo=e;a.xM=b;a.rR=e;}b=new Sh;c=a.rR;b.p5=a;b.lo=c;a.uE=b;b=new Ui;b.p5=a;b.lo=c;e=new G_;e.sk=1;e.nD=Ce(16);b.pV=e;e=new G_;e.sk=1;e.nD=Ce(16);b.tN=e;a.l5=b;b=new Sa;b.p5=a;b.lo=c;a.y$=b;a.AT=d;},
AOR=()=>{APE=Dj();ATW=Ce(6);};
function RI(){Ju.call(this);this.Bg=null;}
let IA=F(BF);
let UL=null,Ja=null,CB=null,AEx=null;
let ANn=()=>{let b,c,d;b=new IA;b.kx=A(163);b.kq=0;UL=b;c=new IA;c.kx=A(626);c.kq=1;Ja=c;d=new IA;d.kx=A(627);d.kq=2;CB=d;AEx=V(IA,[b,c,d]);};
function SC(){let a=this;C.call(a);a.nd=null;a.mk=0;}
let AEK=null;
let GF=(a,b)=>{let c,d,e,f;c=a.nd;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=G(e);Dw(c,0,f,0,a.mk);a.nd=f;},
J4=a=>{let b,c,d;b=a.mk+4|0;if(b>a.nd.data.length)GF(a,b);c=a.nd.data;d=a.mk;b=d+1|0;a.mk=b;c[d]=110;d=b+1|0;a.mk=d;c[b]=117;b=d+1|0;a.mk=b;c[d]=108;a.mk=b+1|0;c[b]=108;},
AK0=()=>{AEK=AGF([48,49,50,51,52,53,54,55,56,57]);};
function Rg(){let a=this;DX.call(a);a.nG=null;a.Ba=null;}
let Qt=F(0);
function RN(){let a=this;C.call(a);a.yW=0;a.Aq=0;a.zl=0.0;}
let VI=F(0);
function HD(){let a=this;C.call(a);a.vd=null;a.qX=null;a.no=0.0;a.ld=null;a.k5=0;a.yH=0.0;a.wD=0.0;a.xs=0.0;a.oy=0;a.sP=null;}
let ACM=null;
let Nl=()=>{Nl=BR(HD);AD9();};
let QH=(a,b,c)=>{Nl();a.yH=1.0;a.wD=0.5;a.xs=0.0010000000474974513;a.oy=0;a.sP=null;a.vd=b;a.ld=Ce(2000);a.qX=c;I2(a);a.no=Ec(LI);},
AF8=(a,b)=>{let c=new HD();QH(c,a,b);return c;},
AWd=(a,b)=>{let c;c=a.qX;a.qX=b;I2(a);return c;},
I2=a=>{let b,c,d,e,f;a:{b=a.qX;if(b!==null){c=0.5*(b.tI+b.vP);d=0.5*(b.tJ+b.vM);e=0;while(true){f=a.ld.data;if(e>=f.length)break a;f[e+3|0]=c;f[e+4|0]=d;e=e+5|0;}}}},
AXs=(a,b)=>{let c,d;c=Ec(b);d=a.no;a.no=c;return d;},
AXa=(a,b)=>{let c;c=a.no;a.no=b;return c;},
AUV=a=>{return a.no;},
AXl=a=>{return a.oy;},
AVR=a=>{let b;b=a.oy;a.oy=1;return b;},
AVC=a=>{a.oy=0;if(a.k5>0)a.jt();},
AXR=a=>{return a.sP===null?0:1;},
ADB=a=>{a.k5=a.k5+4|0;},
AH3=a=>{let b,c,d;b=a.ld.data;c=5*a.k5|0;d=b[c+10|0];b[c+15|0]=d;d=b[c+11|0];b[c+16|0]=d;a.ju();},
ALm=a=>{F8(a,4);},
AXc=a=>{F8(a,4);},
F8=(a,b)=>{let c,d;c=b*5|0;d=a.ld.data.length;if(c>d)a.jw(c);else if(((d-(20*a.k5|0)|0)/5|0)<b)a.jt();},
AH_=(a,b)=>{let c;a.jt();c=a.ld.data.length;while(b>c){c=c*2|0;}a.ld=Ce(c);I2(a);},
AVa=a=>{return (a.ld.data.length-(20*a.k5|0)|0)/5|0;},
AIk=a=>{let b,c;b=a.k5;if(!b)return;c=a.sP;if(c===null?0:1)c.jx();else{c=a.qX;if(c===null){c=new BO;c.kg=1;c.kh=1;c.kj=A(628);B(c);}AHI(a.vd,c.nx,a.ld,0,5*b|0);}a.k5=0;},
AVF=a=>{return 5*a.k5|0;},
AWu=(a,b)=>{a.ld.data[(5*a.k5|0)+0|0]=b;},
AVN=(a,b)=>{a.ld.data[(5*a.k5|0)+1|0]=b;},
AXr=(a,b)=>{a.ld.data[(5*a.k5|0)+5|0]=b;},
AUM=(a,b)=>{a.ld.data[(5*a.k5|0)+6|0]=b;},
AUH=(a,b)=>{a.ld.data[(5*a.k5|0)+10|0]=b;},
AXA=(a,b)=>{a.ld.data[(5*a.k5|0)+11|0]=b;},
AVD=(a,b)=>{a.ld.data[(5*a.k5|0)+15|0]=b;},
AWO=(a,b)=>{a.ld.data[(5*a.k5|0)+16|0]=b;},
AUW=a=>{return a.ld.data[(5*a.k5|0)+10|0];},
AVZ=a=>{return a.ld.data[(5*a.k5|0)+11|0];},
AWI=a=>{return a.ld.data[(5*a.k5|0)+15|0];},
AXi=a=>{return a.ld.data[(5*a.k5|0)+16|0];},
AWB=(a,b)=>{a.ld.data[(5*a.k5|0)+2|0]=b;},
AXj=(a,b)=>{a.ld.data[(5*a.k5|0)+7|0]=b;},
AYn=(a,b)=>{a.ld.data[(5*a.k5|0)+12|0]=b;},
AVd=(a,b)=>{a.ld.data[(5*a.k5|0)+17|0]=b;},
AD9=()=>{ACM=Dj();};
function EQ(){let a=this;C.call(a);a.p5=null;a.lo=null;}
let DV=null,DK=null,D$=null,C2=null,C3=null,Tm=null,NB=null;
let AUO=()=>{DV=new Z;DK=new Z;D$=new Z;C2=new Z;C3=new Z;Tm=new Z;NB=new Z;};
let H2=F(EQ);
let ALr=null;
let ATm=()=>{let b,c;b=new OE;c=new MC;c.wl=1;c.wY=FV(16);b.zK=c;c=new Gd;c.pO=1;c.mY=Ba(16);b.Ag=c;c=new MC;c.wl=1;c.wY=FV(16);b.zQ=c;ALr=b;};
let Sj=F(H2);
function TS(){let a=this;HD.call(a);a.rA=null;a.o_=0;}
let ASP=a=>{let b,c,d,e,f,g,h,i;b=a.k5;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.o_;g=3*f|0;h=a.rA.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;f=f+1|0;a.o_=f;i=(b+3|0)<<16>>16;d=3*f|0;h[d]=c;h[d+1|0]=e;h[d+2|0]=i;a.o_=f+1|0;a.k5=b+4|0;},
AUr=a=>{let b,c,d,e,f,g,h;b=a.k5;c=b<<16>>16;d=(b+1|0)<<16>>16;e=(b+2|0)<<16>>16;f=a.o_;g=3*f|0;h=a.rA.data;h[g]=c;h[g+1|0]=d;h[g+2|0]=e;a.o_=f+1|0;a.k5=b+3|0;},
AMm=a=>{let b;b=a.ld.data.length;if(15>b)Or(a,15);else if(((b-(20*a.k5|0)|0)/5|0)<3)L2(a);},
L2=a=>{let b,c;b=a.k5;if(!b)return;c=a.sP;if(c===null?0:1)c.jx();else a.vd.jz(a.qX.nx,a.ld,0,5*b|0,a.rA,0,3*a.o_|0);a.k5=0;a.o_=0;},
Or=(a,b)=>{let c;L2(a);c=a.ld.data.length;while(b>c){c=c*2|0;}a.ld=Ce(c);I2(a);a.rA=FV(Ls((a.ld.data.length/5|0)*3|0)|0);};
let SR=F(H2);
let Sh=F(EQ);
let Wr=(a,b,c,d,e,f,g,h,i)=>{let j,k,l,m,n,o,p,q,r,s;F8(a.lo,4);j=0.0;k=d-b;l=e-c;if(g){m=a.lo;n=m.xs;o=m.yH;p=m.wD;b=b/o;b=(b+CH(b)*0.5|0)*o+p-CH(k)*n;c=c/o;c=(c+CH(c)*0.5|0)*o+p-CH(l)*n;d=d/o;d=(d+CH(d)*0.5|0)*o+p+CH(k)*n;e=e/o;e=(e+CH(e)*0.5|0)*o+p+CH(l)*n;}q=0.5*f;if(b!==d){if(c===e){j=q;q=0.0;}else{f=e-c;k=d-b;r=1.0/CI(f*f+k*k)*q;q=f*r;j=k*r;}}f=b+q;m=a.lo;s=m.ld.data;g=5*m.k5|0;s[g+0|0]=f;s[g+1|0]=c-j;s[g+5|0]=b-q;s[g+6|0]=c+j;s[g+10|0]=d-q;s[g+11|0]=e+j;s[g+15|0]=d+q;s[g+16|0]=e-j;s[g+2|0]=h;s[g+7|0]
=h;s[g+12|0]=i;s[g+17|0]=i;m.ju();m=a.lo;if(!m.oy)m.jt();};
function Ui(){let a=this;EQ.call(a);a.pV=null;a.tN=null;}
let Hc=null,Hf=null;
let Cx=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;while(true){g=BW(f,b.ki);if(g>=0)break;if(g>=0){h=new H;d=new K;d.ke=G(16);E(d,d.kd,A(18));J(d,d.kd,f,10);E(d,d.kd,A(19));e=b.ki;J(d,d.kd,e,10);b=new I;i=d.ke;j=i.data;f=d.kd;g=j.length;if(f>=0&&f<=(g-0|0)){b.kf=L(i.data,0,f);h.kg=1;h.kh=1;h.kj=b;B(h);}b=new H;U(b);B(b);}h=b.km.data[f];U8(a.tN,h.kl,h.kk);f=f+1|0;}b=a.tN;AFW(a,b.nD,0,b.nK,c,d,e);a.tN.nK=0;},
AFW=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o;b=b.data;if(b.length<4)return;Qd(a.pV,b[c]);Qd(a.pV,b[c+1|0]);h=c+2|0;while(h<d){c=Ej(b[h-2|0]-b[h])>=0.0010000000474974513?0:1;if(!(c&&(Ej(b[h-1|0]-b[h+1|0])>=0.0010000000474974513?0:1)))U8(a.pV,b[h],b[h+1|0]);h=h+2|0;}i=a.pV;h=i.nK;c=BW(h,4);if(c<0){i.nK=0;return;}if(!c){j=a.p5.uE;b=i.nD.data;k=b[0];l=b[1];m=b[2];n=b[3];o=j.lo.no;Wr(j,k,l,m,n,e,0,o,o);j.lo.jt();a.pV.nK=0;return;}j=a.lo;d=j.oy;j.oy=1;if(f===UL)Y1(a,i.nD,h,e,g);else AFG(a,i.nD,h,e,g,f!==Ja?0:1);if(!d)
{f=a.lo;f.oy=0;if(f.k5>0)f.jt();}a.pV.nK=0;},
Y1=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;f=!e?c:c-2|0;g=0;while(g<f){h=b.data;i=a.p5.uE;j=h[g];k=h[g+1|0];l=g+2|0;m=h[l%c|0];n=h[(g+3|0)%c|0];o=i.lo.no;Wr(i,j,k,m,n,d,0,o,o);i.lo.jt();g=l;}},
AFG=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;g=0.5*d;h=a.lo;i=h.no;F8(h,4);j=2;k=c-2|0;l=g*g;m=c-1|0;while(j<k){n=b.data;h=DV;d=n[j-2|0];o=n[j-1|0];h.kl=d;h.kk=o;p=DK;d=n[j];o=n[j+1|0];p.kl=d;p.kk=o;q=D$;r=j+2|0;d=n[r];o=n[j+3|0];q.kl=d;q.kk=o;if(f)K_(h,p,q,C2,C3,g);else Eb(h,p,q,C2,C3,g,0);p=C2;d=p.kl;o=p.kk;h=a.lo;s=h.ld.data;t=5*h.k5|0;s[t+10|0]=d;s[t+11|0]=o;q=C3;d=q.kl;o=q.kk;s[t+15|0]=d;s[t+16|0]=o;if(j==2){if(!e){h=NB;d=n[k];o=n[m];h.kl=d;h.kk=o;if(f)K_(h,DV,DK,Hc,Hf,g);else Eb(h,
DV,DK,Hc,Hf,g,1);h=Hf;d=h.kl;o=h.kk;h=a.lo;s=h.ld.data;t=5*h.k5|0;s[t+0|0]=d;s[t+1|0]=o;h=Hc;d=h.kl;o=h.kk;s[t+5|0]=d;s[t+6|0]=o;}else{d=n[2];o=n[3];u=n[0];v=n[1];h=Ew;h.kl=u;h.kk=v;d=u-d;h.kl=d;o=v-o;h.kk=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=CI(l/o);h.kl=h.kl*d;h.kk=h.kk*d;}h=Ew;d=h.kk;o= -h.kl;p.kl=d;p.kk=o;p.kl=d+u;p.kk=o+v;d= -h.kk;o=h.kl;q.kl=d;q.kk=o;q.kl=d+u;q.kk=o+v;h=C3;d=h.kl;o=h.kk;h=a.lo;s=h.ld.data;t=5*h.k5|0;s[t+0|0]=d;s[t+1|0]=o;h=C2;d=h.kl;o=h.kk;s[t+5|0]=d;s[t+6|0]=o;}}if(!f){Eb(DV,DK,D$,C2,C3,
g,1);h=C2;v=h.kl;w=h.kk;h=C3;x=h.kl;u=h.kk;}else{h=a.lo;s=h.ld.data;t=5*h.k5|0;v=s[t+10|0];w=s[t+11|0];x=s[t+15|0];u=s[t+16|0];}h=a.lo;s=h.ld.data;t=5*h.k5|0;s[t+2|0]=i;s[t+7|0]=i;s[t+12|0]=i;s[t+17|0]=i;h.ju();if(!f){p=DV;q=DK;y=D$;z=C2;ba=C3;a.lo.jI();c=Eb(p,q,y,z,ba,g,0);h=!c?z:ba;d=h.kl;o=h.kk;h=a.lo;s=h.ld.data;j=5*h.k5|0;s[j+0|0]=d;s[j+1|0]=o;h=!c?ba:z;d=h.kl;o=h.kk;s[j+5|0]=d;s[j+6|0]=o;if(Eb(p,q,y,z,ba,g,1))z=ba;d=z.kl;o=z.kk;h=a.lo;s=h.ld.data;t=5*h.k5|0;s[t+10|0]=d;s[t+11|0]=o;d=h.no;s[t+2|0]=d;s[t
+7|0]=d;s[t+12|0]=d;h.jJ();}F8(a.lo,4);h=a.lo;s=h.ld.data;t=5*h.k5|0;s[t+0|0]=x;s[t+1|0]=u;s[t+5|0]=v;s[t+6|0]=w;j=r;}if(e){h=DK;p=D$;q=C2;y=C3;d=h.kl;o=h.kk;g=p.kl;u=p.kk;h=Ew;h.kl=g;h.kk=u;d=g-d;h.kl=d;o=u-o;h.kk=o;o=d*d+o*o;if(o!==0.0&&o!==l){d=CI(l/o);h.kl=h.kl*d;h.kk=h.kk*d;}h=Ew;d=h.kk;o= -h.kl;q.kl=d;q.kk=o;q.kl=d+g;q.kk=o+u;d= -h.kk;o=h.kl;y.kl=d;y.kk=o;y.kl=d+g;y.kk=o+u;h=C3;d=h.kl;o=h.kk;p=a.lo;b=p.ld.data;e=5*p.k5|0;b[e+10|0]=d;b[e+11|0]=o;h=C2;d=h.kl;o=h.kk;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e
+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.ju();}else if(f){b=b.data;h=DV;d=b[0];o=b[1];h.kl=d;h.kk=o;K_(DK,D$,h,C2,C3,g);h=C2;d=h.kl;o=h.kk;p=a.lo;b=p.ld.data;e=5*p.k5|0;b[e+10|0]=d;b[e+11|0]=o;h=C3;d=h.kl;o=h.kk;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.ju();F8(a.lo,4);h=C2;d=h.kl;o=h.kk;p=a.lo;b=p.ld.data;e=5*p.k5|0;b[e+0|0]=d;b[e+1|0]=o;h=C3;d=h.kl;o=h.kk;b[e+5|0]=d;b[e+6|0]=o;h=Hf;d=h.kl;o=h.kk;b[e+10|0]=d;b[e+11|0]=o;h=Hc;d=h.kl;o=h.kk;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e
+12|0]=i;b[e+17|0]=i;p.ju();}else{s=b.data;h=DV;p=DK;h.kl=p.kl;h.kk=p.kk;q=D$;p.kl=q.kl;p.kk=q.kk;d=s[0];o=s[1];q.kl=d;q.kk=o;Eb(h,p,q,C2,C3,g,0);h=C2;d=h.kl;o=h.kk;h=a.lo;b=h.ld.data;e=5*h.k5|0;b[e+10|0]=d;b[e+11|0]=o;p=C3;d=p.kl;o=p.kk;b[e+15|0]=d;b[e+16|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;h.ju();p=DV;q=DK;y=D$;z=C2;ba=C3;a.lo.jI();f=Eb(p,q,y,z,ba,g,0);h=!f?z:ba;d=h.kl;o=h.kk;h=a.lo;b=h.ld.data;e=5*h.k5|0;b[e+0|0]=d;b[e+1|0]=o;h=!f?ba:z;d=h.kl;o=h.kk;b[e+5|0]=d;b[e+6|0]=o;if(Eb(p,q,y,z,ba,g,
1))z=ba;d=z.kl;o=z.kk;h=a.lo;b=h.ld.data;e=5*h.k5|0;b[e+10|0]=d;b[e+11|0]=o;d=h.no;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jJ();F8(a.lo,4);Eb(DV,DK,D$,C2,C3,g,1);h=C3;d=h.kl;o=h.kk;p=a.lo;b=p.ld.data;e=5*p.k5|0;b[e+10|0]=d;b[e+11|0]=o;p=C2;d=p.kl;o=p.kk;b[e+15|0]=d;b[e+16|0]=o;q=DV;d=s[2];o=s[3];q.kl=d;q.kk=o;Eb(DK,D$,q,p,h,g,0);h=C2;d=h.kl;o=h.kk;p=a.lo;b=p.ld.data;e=5*p.k5|0;b[e+0|0]=d;b[e+1|0]=o;h=C3;d=h.kl;o=h.kk;b[e+5|0]=d;b[e+6|0]=o;b[e+2|0]=i;b[e+7|0]=i;b[e+12|0]=i;b[e+17|0]=i;p.ju();h=DK;p=D$;q=DV;y=C2;z
=C3;a.lo.jI();c=Eb(h,p,q,y,z,g,0);ba=!c?y:z;d=ba.kl;o=ba.kk;ba=a.lo;b=ba.ld.data;f=5*ba.k5|0;b[f+0|0]=d;b[f+1|0]=o;ba=!c?z:y;d=ba.kl;o=ba.kk;b[f+5|0]=d;b[f+6|0]=o;if(Eb(h,p,q,y,z,g,1))y=z;d=y.kl;o=y.kk;h=a.lo;b=h.ld.data;e=5*h.k5|0;b[e+10|0]=d;b[e+11|0]=o;d=h.no;b[e+2|0]=d;b[e+7|0]=d;b[e+12|0]=d;h.jJ();}},
AYz=()=>{Hc=new Z;Hf=new Z;};
let Sa=F(EQ);
let Wy=null,OH=null;
let AVO=()=>{Wy=new Z;OH=new Z;};
function MC(){let a=this;C.call(a);a.wY=null;a.wl=0;}
function Re(){let a=this;DX.call(a);a.nN=null;a.sc=null;a.rP=null;a.r1=null;}
let ZX=(a,b)=>{a.nN.nG.sX=Em(b);},
XI=(a,b)=>{b=a.nN.nG;b.qD=1;b.nX=0;},
AJL=(a,b,c)=>{Hr(a.r1,a.sc,a.rP,c);b=a.nN.nG;b.q2=1;b.nX=0;return 0;};
let OX=F();
let U4=null;
let NA=()=>{NA=BR(OX);AJi();};
let AJi=()=>{let b,c;b=Ba((N2.p()).data.length);c=b.data;U4=b;c[Ga.kq]=1;c[F3.kq]=2;c[FR.kq]=3;c[FI.kq]=4;c[Kg.kq]=5;};
let QI=F();
let SP=null;
let Lu=()=>{Lu=BR(QI);AS5();};
let AS5=()=>{let b,c;b=Ba((Vk.p()).data.length);c=b.data;SP=b;c[Ic.kq]=1;c[Kk.kq]=2;c[Ss.kq]=3;c[Oj.kq]=4;c[JO.kq]=5;c[JK.kq]=6;};
let ASl=F();
let PL=0.0,PM=0.0;
let AVz=()=>{PL=CI(2.0);PM=CI(3.0);};
function Gu(){let a=this;G1.call(a);a.oW=0;a.nS=null;a.oe=null;a.nV=null;}
let ABb=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new KZ;c.o1=a;c.qm=b;c=B$(c,"handleEvent");b.onreadystatechange=c;c=a.nV;d=a.oe;e=new Ht;e.vG=c;e.sE=d;c=B$(e,"handleEvent");b.onprogress=c;d=a.nS;f=a.oW;b.open("GET",Bz(d),!!f);if(a.oW){d="arraybuffer";b.responseType=d;}b.send();};
function OV(){let a=this;DX.call(a);a.ta=null;a.AN=null;}
let ABf=(a,b)=>{a.ta.nN.nG.sX=Em(b);},
AKw=(a,b)=>{b=a.ta.nN.nG;b.qD=1;b.nX=0;},
ZG=(a,b,c)=>{c=a.ta;b=null;Hr(c.r1,c.sc,c.rP,b);b=c.nN.nG;b.q2=1;b.nX=0;return 0;};
let Yh=F();
let Ei=null,FG=null,Ew=null;
let K_=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;h=Ei;i=c.kl;h.kl=i;j=c.kk;h.kk=j;h.kl=i-b.kl;h.kk=j-b.kk;b=FG;i=d.kl;b.kl=i;j=d.kk;b.kk=j;k=i-c.kl;b.kl=k;l=j-c.kk;b.kk=l;m=h.kk;i=k*m;j=h.kl;j=On(i-l*j,j*k+m*l);n=Ej(j-0.0)>=0.0010000000474974513?0:1;if(!n&&!(Ej(j-6.2831854820251465)>=0.0010000000474974513?0:1)){m=g/J5(j);n=j>=0.0?0:1;b=Ei;i=m*m;g=b.kl;g=g*g;m=b.kk;m=g+m*m;if(m!==0.0&&m!==i){g=CI(i/m);b.kl=b.kl*g;b.kk=b.kk*g;}b=FG;g=b.kl;g=g*g;m=b.kk;m=g+m*m;if(m!==0.0&&m!==i){g=CI(i/m);b.kl=b.kl*g;b.kk=b.kk*g;}h=!n
?f:e;if(n)e=f;m=c.kl;h.kl=m;i=c.kk;h.kk=i;b=Ei;m=m-b.kl;h.kl=m;i=i-b.kk;h.kk=i;d=FG;h.kl=m+d.kl;h.kk=i+d.kk;m=c.kl;e.kl=m;i=c.kk;e.kk=i;m=m+b.kl;e.kl=m;i=i+b.kk;e.kk=i;e.kl=m-d.kl;e.kk=i-d.kk;return j;}b=Ei;g=g*g;m=b.kl;m=m*m;i=b.kk;m=m+i*i;if(m!==0.0&&m!==g){g=CI(g/m);b.kl=b.kl*g;b.kk=b.kk*g;}b=Ei;g= -b.kk;m=b.kl;e.kl=g;e.kk=m;e.kl=g+c.kl;e.kk=m+c.kk;g=b.kk;m= -b.kl;f.kl=g;f.kk=m;f.kl=g+c.kl;f.kk=m+c.kk;return j;},
Eb=(b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q;i=Ei;j=c.kl;i.kl=j;k=c.kk;i.kk=k;i.kl=j-b.kl;i.kk=k-b.kk;b=FG;l=d.kl;b.kl=l;j=d.kk;b.kk=j;k=l-c.kl;b.kl=k;m=j-c.kk;b.kk=m;j=i.kk;l=k*j;n=i.kl;l=On(l-m*n,n*k+j*m);o=Ej(l-0.0)>=0.0010000000474974513?0:1;if(!o&&!(Ej(l-6.2831854820251465)>=0.0010000000474974513?0:1)){j=g/J5(l);b=Ei;n=j*j;j=b.kl;j=j*j;k=b.kk;j=j+k*k;if(j!==0.0&&j!==n){j=CI(n/j);b.kl=b.kl*j;b.kk=b.kk*j;}b=FG;j=b.kl;j=j*j;k=b.kk;k=j+k*k;if(k!==0.0&&k!==n){j=CI(n/k);b.kl=b.kl*j;b.kk=b.kk*j;}o=l>=0.0?0:1;i=
!o?f:e;if(o)e=f;k=c.kl;i.kl=k;l=c.kk;i.kk=l;p=Ei;k=k-p.kl;i.kl=k;l=l-p.kk;i.kk=l;q=FG;i.kl=k+q.kl;i.kk=l+q.kk;if(h)p=q;if(!o){b=Ew;j= -p.kk;k=p.kl;b.kl=j;b.kk=k;}else{b=Ew;j=p.kk;k= -p.kl;b.kl=j;b.kk=k;}b=Ew;g=g*g;j=b.kl;j=j*j;k=b.kk;k=j+k*k;if(k!==0.0&&k!==g){g=CI(g/k);b.kl=b.kl*g;b.kk=b.kk*g;}j=c.kl;e.kl=j;k=c.kk;e.kk=k;b=Ew;e.kl=j+b.kl;e.kk=k+b.kk;return o;}b=Ei;g=g*g;j=b.kl;j=j*j;k=b.kk;k=j+k*k;if(k!==0.0&&k!==g){g=CI(g/k);b.kl=b.kl*g;b.kk=b.kk*g;}b=Ei;g= -b.kk;j=b.kl;e.kl=g;e.kk=j;e.kl=g+c.kl;e.kk=j+c.kk;g
=b.kk;j= -b.kl;f.kl=g;f.kk=j;f.kl=g+c.kl;f.kk=j+c.kk;return 1;},
AX5=()=>{Ei=new Z;FG=new Z;Ew=new Z;};
function OW(){let a=this;DX.call(a);a.ru=null;a.wX=null;a.yF=null;a.su=null;}
let AE8=(a,b)=>{a.ru.nN.nG.sX=Em(b);},
Yj=(a,b)=>{b=a.ru.nN.nG;b.qD=1;b.nX=0;},
Yo=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.wX;if(e!==null)d.setAttribute("crossOrigin",Bz(e));a:{e=a.su;e.lx=e.lx+1|0;e=new Lt;e.tr=a;e.Bc=b;e.yc=c;e.wj=d;d.addEventListener("load",B$(e,"handleEvent"),!!0);d.addEventListener("error",B$(e,"handleEvent"),!!0);if(!a.su.yL){b=Bz(b);d.src=b;}else{b=a.yF;c=AOs(c);e=new K;e.ke=G(16);E(e,e.kd,A(629));f=e.kd;if(b===null)b=A(2);E(e,f,b);E(e,e.kd,A(630));f=e.kd;if(c===null)c=A(2);E(e,f,c);b=new I;g=e.ke;h=g.data;i=e.kd;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.kf=L(g.data,0,i);b=Bz(b);d.src=b;}return 0;}b=new H;b.kg=1;b.kh=1;Bl(b);B(b);},
AF0=(a,b,c)=>{return Yo(a,b,c);};
function KZ(){let a=this;C.call(a);a.qm=null;a.o1=null;}
let AJo=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qm.readyState==4){if(a.qm.status==200){if(a.o1.nV.na){if(BX===null){b=new C6;c=new Cu;c.l8=BN(32);b.mq=c;c=new K;Bu(c);c.ke=G(16);b.l_=c;b.l$=G(32);b.ma=0;b.mb=Co;BX=b;}b=a.o1.nS;c=new K;c.ke=G(16);E(c,c.kd,A(589));d=c.kd;if(b===null)b=A(2);E(c,d,b);b=new I;e=c.ke;f=e.data;g
=c.kd;h=f.length;if(g>=0&&g<=(h-0|0)){b.kf=L(e.data,0,g);B2(Bz(b));B2("\n");}else{b=new H;b.kg=1;b.kh=1;Bl(b);B(b);}}i=a.qm.response;j=new Int8Array(i);b=a.o1;c=b.oe;k=b.nS;b=new IL;b.nY=j;b.vc=i;c.je(k,b);}else if(a.qm.status!=404&&a.qm.status!=403){try{l=X(100);$p=1;continue _;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}b=a.o1;c=b.nV;d=b.oW;k=b.nS;b=b.oe;if(c.na){if(BX===null){i=new C6;j=new Cu;j.l8=BN(32);Bu(i);i.mq=j;j=new K;D1(j,16);i.l_=j;i.l$=G(32);i.ma=0;i.mb=Co;BX=i;}i=new K;i.ke
=G(16);E(i,i.kd,A(102));E(i,i.kd,k===null?A(2):k);j=new I;e=i.ke;f=e.data;h=i.kd;m=f.length;if(h>=0&&h<=(m-0|0)){j.kf=L(e.data,0,h);B2(Bz(j));B2("\n");}else{b=new H;U(b);B(b);}}c.lx=c.lx+1|0;i=new Gu;i.nV=c;i.oW=d;i.nS=k;i.oe=b;b=null;c=null;i.nt=new C;i.ns=1;i.n9=c;i.os=b;g=CZ;CZ=g+1|0;i.or=X(g);b=new ED;b.n$=i;EX(b);}else{b=a.o1;b.oe.jf(b.nS);}b=a.o1.nV;b.lx=b.lx-1|0;}return;case 1:a:{try{Lv(l);if(FY()){break _;}break a;}catch($$e){$$je=Bc($$e);if($$je instanceof DE){}else{throw $$e;}}}b=a.o1;c=b.nV;d=b.oW;k
=b.nS;b=b.oe;if(c.na){if(BX===null){i=new C6;j=new Cu;j.l8=BN(32);Bu(i);i.mq=j;j=new K;D1(j,16);i.l_=j;i.l$=G(32);i.ma=0;i.mb=Co;BX=i;}i=new K;i.ke=G(16);E(i,i.kd,A(102));E(i,i.kd,k===null?A(2):k);j=new I;e=i.ke;f=e.data;h=i.kd;m=f.length;if(h>=0&&h<=(m-0|0)){j.kf=L(e.data,0,h);B2(Bz(j));B2("\n");}else{b=new H;U(b);B(b);}}c.lx=c.lx+1|0;i=new Gu;i.nV=c;i.oW=d;i.nS=k;i.oe=b;b=null;c=null;i.nt=new C;i.ns=1;i.n9=c;i.os=b;g=CZ;CZ=g+1|0;i.or=X(g);b=new ED;b.n$=i;EX(b);b=a.o1.nV;b.lx=b.lx-1|0;return;default:FN();}}Dp().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
ASX=(a,b)=>{let $p,$z;$p=0;if(F0()){let $T=Dp();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJo(a,b);if(FY()){break _;}return;default:FN();}}Dp().s(a,b,$p);};
let ABL=F();
function Lt(){let a=this;C.call(a);a.Bc=null;a.yc=null;a.wj=null;a.tr=null;}
let AFA=(a,b)=>{let c,d;c=W(b.type);if(c===A(631))d=1;else if(!(A(631) instanceof I))d=0;else{b=A(631);d=c.kf!==b.kf?0:1;}if(d){b=a.tr.ru.nN.nG;b.qD=1;b.nX=0;}else{b=a.yc;b.vo=a.wj;c=a.tr.ru;Hr(c.r1,c.sc,c.rP,b);b=c.nN.nG;b.q2=1;b.nX=0;}b=a.tr.su;b.lx=b.lx-1|0;},
ADW=(a,b)=>{AFA(a,b);};
AUQ([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",11,"utils",11,"actions",7,"graphics",15,"g2d",7,"math",0,"mygdx",18,"game",-1,"java",20,"util",21,"regex",20,"nio",23,"charset",20,"lang"]);
Di([C,"Object",25,0,[],0,3,0,0,["cU",P(Fm),"cO",N(AJW),"T",P(P$)],AQ0,0,C,[],0,3,0,0,0,OM,0,C,[],0,3,0,Ti,0,Oy,0,C,[],3,3,0,0,0,MK,0,C,[Oy],0,3,0,0,0,CM,0,C,[],3,3,0,0,0,ND,0,MK,[CM],0,3,0,0,0,BB,0,C,[],3,3,0,0,0,F6,0,C,[BB],0,3,0,0,0,Dz,0,C,[],3,3,0,0,0,Cb,0,C,[],3,3,0,0,0,BF,0,C,[Dz,Cb],1,3,0,0,["T",P(AF6),"cO",N(Y9)],HJ,0,BF,[],12,3,0,0,0,Ci,"Actor",11,C,[],0,3,0,0,["be",N(Fg),"J",Bf(Sk),"x",N(AO7),"Z",N(AN$),"T",P(Tn)],MN,0,C,[],3,3,0,0,0,BJ,"Group",11,Ci,[MN],0,3,0,0,["be",N(R5),"bQ",Br(AIn),"Z",N(Pt),
"J",Bf(Iu),"x",N(AOF),"T",P(ACf)],GO,0,C,[],3,3,0,0,0,DW,"Iterable",25,C,[],3,3,0,0,0,Hq,0,C,[GO,DW],0,3,0,0,0,G7,0,C,[],3,3,0,0,0,B4,0,C,[G7],0,3,0,0,0,HH,0,B4,[],0,3,0,0,0,AMy,0,HH,[],0,0,0,0,0,Ha,"FocusListener$FocusEvent$Type",13,BF,[],12,3,0,0,0,NF,0,C,[],3,3,0,0,0,Jk,0,C,[NF],3,3,0,0,0,G5,0,C,[],3,3,0,0,0,DS,0,C,[G5],1,3,0,0,0,APT,0,DS,[],0,0,0,0,0,Nr,0,Hq,[],0,3,0,0,0,M4,0,C,[G7],0,3,0,0,0,ADi,0,C,[],1,3,0,0,0,XU,0,C,[],0,3,0,0,0,Ww,0,C,[],3,3,0,0,0,L6,0,C,[Ww],0,3,0,0,0,ALY,0,L6,[],0,0,0,0,0,Db,"FocusListener$FocusEvent",
13,F6,[],0,3,0,0,["bt",P(WK)],RQ,0,C,[],32,0,0,WZ,0,AJS,0,C,[],1,3,0,0,0,TR,0,C,[],32,0,0,Sx,0,APS,0,DS,[],0,0,0,0,0,FK,0,C,[NF],0,3,0,0,0,TM,0,FK,[Jk],0,3,0,0,0,WG,0,C,[],4,3,0,UN,0,Mk,0,C,[G7],1,3,0,0,0,ASt,0,HH,[],0,3,0,0,0,AEL,0,C,[],0,3,0,0,0,Vn,0,C,[],0,3,0,V5,0,Ny,0,C,[G7],1,3,0,0,0,I4,0,FK,[Jk],0,3,0,0,0]);
Di([Wq,0,FK,[Jk],0,3,0,0,0,Eq,0,B4,[],0,3,0,0,0,Wi,0,I4,[],0,3,0,0,0,ABZ,0,F6,[],0,3,0,0,0,KY,0,C,[],3,3,0,0,0,Bb,"InputEvent",11,F6,[],0,3,0,0,["bt",P(QB),"T",P(O6)],D7,"Stage$TouchFocus",11,C,[BB],4,3,0,0,["bt",P(Ph)],Oh,0,C,[],32,0,0,Ms,0,DB,"InputEvent$Type",11,BF,[],12,3,0,0,0,BQ,"Action",11,C,[BB],1,3,0,0,["bZ",P(ANi),"by",N(AN2),"bt",P(AAG),"T",P(AN5)],Fa,0,BQ,[],1,3,0,0,0,AGK,0,Fa,[],0,3,0,0,0,ALw,0,Fa,[],0,3,0,0,0,De,0,BQ,[],1,3,0,0,["bx",N(ASf),"bZ",P(AUi)],EZ,0,De,[],1,3,0,0,0,Yg,0,EZ,[],0,3,0,0,
0,AAC,0,C,[G7],0,0,0,0,0,N5,0,BQ,[],0,3,0,0,["bt",P(ALJ),"by",N(AOi),"T",P(AJG)],Dq,"SequenceAction",14,N5,[],0,3,0,0,["bx",N(Ow),"bZ",P(Vf)],AEC,0,BQ,[],0,3,0,0,0,AIX,0,BQ,[],0,3,0,0,0,AN0,0,BQ,[],0,3,0,0,0,AOX,0,C,[],0,3,0,0,0,Mc,0,BQ,[],1,3,0,0,0,AIf,0,Mc,[],0,3,0,0,0,DC,"MoveToAction",14,De,[],0,3,0,0,["bt",P(UU)],APN,0,De,[],0,3,0,0,0,AQo,0,EZ,[],0,3,0,0,0,AMi,0,BQ,[],0,3,0,0,0,AMR,0,EZ,[],0,3,0,0,0,AR6,0,De,[],0,3,0,0,0,ARo,0,De,[],0,3,0,0,0,AFb,0,BQ,[],0,3,0,0,0,AHM,0,De,[],0,3,0,0,0,AH2,0,BQ,[],0,3,
0,0,0,AFJ,0,BQ,[],0,3,0,0,0,AIi,0,Fa,[],0,3,0,0,0,Zb,0,De,[],0,3,0,0,0,ASd,0,BQ,[],0,3,0,0,0,ALN,0,EZ,[],0,3,0,0,0,AFo,0,Fa,[],0,3,0,0,0,AKY,0,BQ,[],0,3,0,0,0,AAE,0,De,[],0,3,0,0,0,AHk,0,De,[],0,3,0,0,0,ABT,0,C,[CM],0,3,0,0,0,Dm,0,BJ,[KY],0,3,0,0,0,EJ,0,Dm,[],0,3,0,Rl,0,Gp,0,EJ,[GO],0,3,0,0,0,LZ,0,Gp,[],0,3,0,0,0,ACO,0,LZ,[],0,3,0,0,0]);
Di([APP,0,B4,[],0,0,0,0,0,M2,0,Dm,[],0,3,0,0,0,SF,0,C,[],3,3,0,0,0,ES,0,C,[SF],1,3,0,0,0,AE3,0,ES,[],0,0,0,0,0,Dy,0,Ci,[KY],0,3,0,0,0,Zv,0,Dy,[],0,3,0,0,0,APO,0,B4,[],0,0,0,0,0,B9,0,C,[],1,3,0,IJ,0,TX,0,B9,[],0,0,0,0,0,ALZ,0,B9,[],0,0,0,0,0,KR,0,Eq,[],0,3,0,0,0,AH9,0,KR,[],0,3,0,0,0,Wl,0,B9,[],0,0,0,0,0,ARS,0,B4,[],0,0,0,0,0,MB,0,EJ,[],0,3,0,0,0,AL0,0,B9,[],0,0,0,0,0,GM,0,C,[],3,3,0,0,0,DH,0,C,[Cb,GM],0,3,0,0,0,D4,"Table$DebugRect",12,DH,[],0,3,0,Ko,0,AE7,0,ES,[],0,0,0,0,0,Nf,0,Dy,[GO],0,3,0,0,0,AC3,0,Nf,[],
0,3,0,0,0,AHo,0,B4,[],0,0,0,0,0,QM,0,C,[],3,3,0,0,0,AN7,0,C,[QM],0,3,0,0,0,GT,0,C,[],0,3,0,0,0,Hd,0,GT,[],0,3,0,0,0,UG,0,Hd,[],0,3,0,0,0,Nk,0,Dy,[GO],0,3,0,0,0,AGs,0,Nk,[],0,3,0,0,0,ATM,0,M2,[],0,0,0,0,0,K0,0,Dm,[],0,3,0,0,0,AUx,0,Gp,[],0,3,0,0,0,NJ,0,Dy,[MN],0,3,0,0,0,Wj,0,B9,[],0,0,0,0,0,Vh,0,C,[],0,3,0,0,0,AFC,0,C,[G5],0,0,0,0,0,AIb,0,B4,[],0,0,0,0,0,AJ1,0,DS,[],0,0,0,0,0,AGO,0,C,[],0,3,0,0,0,ANB,0,B4,[],0,0,0,0,0,ATs,0,Eq,[],0,0,0,0,0,AHm,0,M4,[],0,0,0,0,0,TT,0,B9,[],0,0,0,0,0,TW,0,B9,[],0,0,0,0,0,To,0,
C,[],3,3,0,0,0,Km,0,C,[],0,3,0,0,0,Pf,0,Km,[],0,3,0,0,0,AE4,0,ES,[],0,0,0,0,0]);
Di([APM,0,Mk,[],0,0,0,0,0,APQ,0,Ny,[],0,0,0,0,0,ART,0,B4,[],0,0,0,0,0,ARU,0,Eq,[],0,0,0,0,0,Wk,0,B9,[],0,0,0,0,0,O9,0,C,[BB],0,3,0,UI,0,St,0,Hd,[],0,3,0,0,0,AHB,0,B4,[],0,0,0,0,0,ZU,0,DS,[],0,0,0,0,0,TY,0,B9,[],0,0,0,0,0,ADo,0,Dm,[],0,3,0,0,0,AHn,0,B4,[],0,0,0,0,0,SX,0,C,[],0,3,0,0,0,JG,0,B9,[],0,3,0,0,0,AFD,0,K0,[],0,3,0,0,0,TU,0,B9,[],0,0,0,0,0,AIO,0,Dy,[GO],0,3,0,0,0,AHv,0,Nr,[],0,0,0,0,0,VY,0,C,[],0,3,0,0,0,Px,0,Dy,[],0,3,0,UY,0,PG,0,C,[],0,3,0,0,0,AL2,0,B9,[],0,0,0,0,0,Wm,0,B9,[],0,0,0,0,0,AO5,0,MB,[],
0,3,0,0,0,TV,0,B9,[],0,0,0,0,0,RR,0,C,[],0,3,0,0,0,ATh,0,C,[],0,3,0,0,0,F1,0,BF,[],12,3,0,0,0,ATA,0,B9,[],0,0,0,0,0,AHb,0,DS,[],0,0,0,0,0,Dx,0,C,[],1,3,0,0,0,Wn,0,Dx,[],0,0,0,0,0,ZJ,0,C,[To],0,3,0,0,0,V8,0,C,[],0,3,0,0,0,Ta,0,C,[],0,3,0,0,0,TO,0,C,[],0,3,0,0,0,NH,0,B4,[],0,3,0,0,0,ZT,0,DS,[],0,0,0,0,0,ARV,0,NJ,[],0,0,0,0,0,ZM,0,C,[],3,3,0,0,0,AHC,0,B4,[],0,0,0,0,0,AUl,0,Dm,[],0,3,0,0,0,ALt,0,Dm,[],0,3,0,0,0,AHx,0,Eq,[],0,0,0,0,0,Nv,0,C,[],0,3,0,0,0,AE2,0,Nv,[],0,0,0,0,0,ARv,0,Ci,[CM],0,3,0,0,0,YV,0,B4,[],0,
0,0,0,0,APq,0,Gp,[],0,3,0,0,0,AKx,0,B4,[],0,0,0,0,0]);
Di([ASY,0,Eq,[],0,0,0,0,0,Vo,0,GT,[],0,3,0,0,0,ALA,0,Dm,[],0,3,0,0,0,S2,0,C,[],0,3,0,0,0,R8,0,C,[],0,3,0,0,0,AJ9,0,Dy,[],0,3,0,0,0,ATt,0,Hq,[],0,0,0,0,0,YX,0,B4,[],0,0,0,0,0,ANf,0,Dm,[],0,3,0,0,0,ATK,0,NH,[],0,3,0,0,0,YY,0,EJ,[],0,0,0,0,0,AE5,0,ES,[],0,0,0,0,0,Xd,0,C,[],1,3,0,0,0,Wh,0,C,[],0,3,0,0,0,VQ,0,C,[Cb],0,3,0,VS,0,BP,0,C,[],1,3,0,J7,0,P1,0,BP,[],0,3,0,0,0,AHe,0,C,[],0,3,0,0,0,Uv,0,BP,[],0,0,0,0,0,ASo,0,C,[],0,3,0,0,0,ET,0,BP,[],0,3,0,0,0,Ie,0,ET,[],0,3,0,0,0,H9,0,ET,[],0,3,0,0,0,JU,0,C,[],3,3,0,0,0,ACh,
0,C,[JU],0,3,0,0,0,Uy,0,BP,[],0,0,0,0,0,AP4,0,C,[GM],0,3,0,0,0,Uu,0,BP,[],0,0,0,0,0,G4,0,BP,[],0,3,0,0,0,Ut,0,BP,[],0,0,0,0,0,Us,0,BP,[],0,0,0,0,0,AL6,0,C,[],4,3,0,0,0,XT,0,Dx,[],0,0,0,0,0,Jx,0,C,[],3,3,0,0,0,Z,"Vector2",17,C,[Cb,Jx],0,3,0,0,["T",P(ABB),"cO",N(AEb)],TF,0,BP,[],0,0,0,0,0,Gj,0,BP,[],0,3,0,0,0,AJ5,0,C,[],0,3,0,0,0,UA,0,BP,[],0,0,0,0,0,N1,0,Gj,[],0,3,0,0,0,AFy,0,C,[BB],0,3,0,0,0,HQ,0,BF,[],12,3,0,0,0,S8,0,C,[],0,3,0,SB,0,Hl,0,BP,[],0,3,0,0,0,Sn,0,Hl,[],0,3,0,0,0,TB,0,BP,[],0,0,0,0,0,Tr,0,C,[Cb],
4,3,0,0,0,Ur,0,BP,[],0,0,0,0,0,Gy,0,C,[Cb,Jx],0,3,0,0,0,Pl,0,G4,[],0,3,0,0,0]);
Di([R1,0,BP,[],0,3,0,0,0,AB3,0,C,[],0,3,0,0,0,AT5,0,C,[GM],0,3,0,0,0,Uw,0,BP,[],0,0,0,0,0,V$,0,BP,[],0,3,0,0,0,TG,0,BP,[],0,0,0,0,0,RZ,0,G4,[],0,3,0,0,0,WU,0,C,[Cb],0,3,0,Qv,0,KW,0,C,[Cb],0,3,0,Oe,0,Mh,0,C,[Cb],0,3,0,MQ,0,ACq,0,C,[Cb],0,3,0,0,0,Yw,0,C,[Cb],0,3,0,0,0,ANv,0,C,[Cb,GM],0,3,0,0,0,AGD,0,C,[JU],0,3,0,0,0,T7,0,C,[],4,3,0,Gc,0,Vw,0,C,[],4,3,0,Rh,0,Z0,0,C,[],4,3,0,0,0,Rk,0,Hl,[],0,3,0,0,0,L1,0,C,[Cb],0,3,0,Ez,0,Qb,0,C,[],3,3,0,0,0,MR,0,C,[Qb,Cb],0,3,0,0,0,Tv,0,MR,[],0,3,0,0,0,TE,0,BP,[],0,0,0,0,0,Ux,
0,BP,[],0,0,0,0,0,Nq,0,C,[],0,3,0,Jo,0,EH,0,C,[Cb],0,3,0,0,0,OE,0,C,[],0,3,0,0,0,ALq,0,C,[],0,3,0,0,0,Bo,0,C,[Cb,Jx],0,3,0,C1,0,AFB,0,C,[Cb,GM],0,3,0,0,0,ADu,0,Dx,[],0,0,0,0,0,Mq,0,Gj,[],0,3,0,0,0,AL3,0,C,[JU],0,3,0,0,0,AAr,0,C,[],0,3,0,0,0,AQr,0,C,[Cb],0,3,0,0,0,Ka,0,C,[Cb],0,3,0,0,0,TD,0,BP,[],0,0,0,0,0,AQw,0,C,[],0,3,0,0,0,AAA,0,C,[],0,3,0,0,0,ANj,0,C,[],0,3,0,0,0,AQp,0,C,[Cb],0,3,0,0,0,AKM,0,C,[],3,3,0,0,0,AFQ,0,C,[Cb],0,3,0,0,0,AOc,0,C,[],0,0,0,0,0,KP,0,C,[BB],0,3,0,MO,0,E8,0,C,[],0,3,0,0,["ca",BT(PH)],G2,
0,E8,[],0,3,0,0,["ca",BT(APV)],Rw,0,C,[CM],0,3,0,0,0,AM0,0,C,[],0,3,0,0,0,BM,0,C,[],0,3,0,0,0]);
Di([Oc,0,C,[CM],1,3,0,0,0,FE,0,Oc,[],0,3,0,0,["T",P(AKN)],Bh,"Array",8,C,[DW],0,3,0,0,["cO",N(SL),"T",P(VR)],Kt,0,C,[DW],0,3,0,0,0,AGn,0,Kt,[],0,3,0,0,0,ATf,0,C,[DW],0,3,0,0,0,Ea,0,C,[],4,3,0,0,["cO",N(AKV)],ATx,0,C,[],0,3,0,0,0,AHS,0,C,[],0,3,0,0,0,ALn,0,C,[],0,3,0,0,0,AJn,0,C,[],0,3,0,0,0,R$,0,C,[],0,3,0,Tp,0,YR,0,C,[],0,3,0,0,0,AKf,0,C,[],0,3,0,0,0,AIZ,0,C,[],0,3,0,0,0,AJM,0,C,[],0,3,0,0,0,AP2,0,C,[],0,3,0,0,0,AFL,0,C,[],0,3,0,0,0,ARA,0,C,[],0,3,0,0,0,AHt,0,C,[],0,3,0,0,0,AAK,0,C,[],0,3,0,0,0,AB9,0,C,[],
0,3,0,0,0,J_,0,BF,[],12,3,0,0,0,AKk,0,C,[],0,3,0,0,0,Uc,0,C,[],3,3,0,0,0,DN,0,C,[],0,3,0,0,0,Y2,0,DN,[],0,3,0,0,0,Y0,0,DN,[],0,3,0,0,0,AIo,0,DN,[],0,3,0,0,0,ADm,0,DN,[],0,3,0,0,0,ANx,0,DN,[],0,3,0,0,0,Ml,0,DN,[],0,3,0,0,0,ADa,0,Ml,[],0,3,0,0,0,H3,0,C,[],3,3,0,0,0,AEn,0,C,[CM,H3],0,3,0,0,0,FH,0,C,[],3,3,0,0,0,ANh,0,C,[FH,H3],0,3,0,0,0,ARw,0,C,[FH],0,3,0,0,0,ABz,0,C,[],0,3,0,0,0,E0,0,C,[FH],0,3,0,0,0,AMa,0,E0,[],0,3,0,0,0,HW,0,E0,[H3,FH],1,3,0,0,0,D5,0,HW,[],1,3,0,Rv,0,AMZ,0,C,[],0,3,0,0,0,AP0,0,D5,[],4,3,0,0,
0,AHH,0,D5,[],4,3,0,0,0,ASk,0,E0,[],0,3,0,0,0,LK,0,E0,[],0,3,0,0,0,YK,0,LK,[],0,3,0,0,0,AC7,0,D5,[],4,3,0,0,0]);
Di([Hu,0,HW,[],1,3,0,0,0,AJh,0,Hu,[],4,3,0,0,0,AHE,0,D5,[],4,3,0,0,0,AJP,0,D5,[],4,3,0,0,0,AJe,0,Hu,[],4,3,0,0,0,HU,0,BF,[],12,3,0,0,0,Gn,0,C,[CM,FH,H3],1,3,0,0,0,Nh,0,Gn,[FH],1,3,0,0,0,Xm,0,Nh,[FH],0,3,0,0,0,H$,0,BF,[],12,3,0,0,0,Dd,0,Gn,[],1,3,0,0,0,Iy,0,Dd,[],1,3,0,0,0,ABl,0,C,[],0,3,0,0,0,G$,0,Dd,[],1,3,0,UZ,0,EO,0,G$,[],1,3,0,0,0,Gt,0,EO,[],1,3,0,0,0,AEj,0,Gt,[],0,3,0,0,0,H8,0,Dd,[],1,3,0,0,0,AUb,0,H8,[],0,3,0,0,0,APX,0,Dd,[],0,3,0,0,0,FZ,0,Dd,[],1,3,0,0,0,YU,0,FZ,[],0,3,0,0,0,HG,0,Dd,[],1,3,0,0,0,AEa,
0,EO,[],0,3,0,0,0,AGA,0,EO,[],0,3,0,0,0,K9,0,Dd,[],1,3,0,0,0,AMb,0,K9,[],0,3,0,0,0,AAe,0,FZ,[],0,3,0,0,0,AHQ,0,Gt,[],0,3,0,0,0,AL4,0,Dd,[],0,3,0,0,0,AJ0,0,FZ,[],0,3,0,0,0,AMh,0,Dd,[],0,3,0,0,0,AN8,0,G$,[],0,3,0,0,0,AGG,0,Dx,[],0,0,0,0,0,AAW,0,Dx,[],0,0,0,0,0,ABc,0,EO,[],0,3,0,0,0,AMM,0,HG,[],0,3,0,0,0,ASm,0,Iy,[],0,3,0,0,0,AKW,0,Iy,[],0,3,0,0,0,ANR,0,HG,[],0,3,0,0,0,AIM,0,Gt,[],0,3,0,0,0,AS6,0,H8,[],0,3,0,0,0,EY,0,Gn,[],1,3,0,0,0,AJm,0,EY,[],0,3,0,0,0,F5,0,C,[],1,3,0,0,0,ANb,0,F5,[],0,3,0,0,0,AOA,0,EY,[],0,
3,0,0,0,APW,0,EY,[],0,3,0,0,0,AQZ,0,F5,[],0,3,0,0,0,ADS,0,EY,[],0,3,0,0,0]);
Di([AP3,0,F5,[],0,3,0,0,0,KM,0,C,[],3,3,0,0,0,Ot,0,C,[],3,3,0,0,0,BD,"Class",25,C,[KM,Ot],0,3,0,0,["T",P(AJc)],ACe,0,C,[],4,0,0,0,0,AA3,0,C,[],4,3,0,0,0,DE,0,C,[],0,3,0,0,["c5",P(AOS)],BH,0,DE,[],0,3,0,0,0,BA,"RuntimeException",25,BH,[],0,3,0,0,0,AHz,"ClassCastException",25,BA,[],0,3,0,0,0,Ki,0,C,[],3,3,0,0,0,I,"String",25,C,[Cb,Dz,Ki],0,3,0,0,["T",P(Cp),"cO",N(ARM),"cU",P(ALF)],EM,0,C,[Cb],1,3,0,0,0,FW,0,EM,[Dz],0,3,0,0,0,Be,0,C,[Cb,Ki],0,0,0,0,["c$",N(IS),"T",P(ML)],Jh,0,C,[],3,3,0,0,0,K,0,Be,[Jh],0,3,0,0,
["gx",BT(AIe),"jN",Bf(AC$),"T",P(Et),"c$",N(AID),"de",Br(AJu)],RM,0,C,[],0,3,0,0,0,Qo,0,C,[],3,3,0,0,0,Ma,0,C,[Qo,G5],0,3,0,0,0,Wc,0,C,[],3,3,0,0,0,MW,0,C,[Wc],1,3,0,0,0,Qq,0,MW,[],0,3,0,0,0,AOP,0,C,[],4,3,0,0,0,Ir,0,BF,[],12,3,0,0,0,OU,0,C,[],3,3,0,0,0,Cy,0,C,[],3,3,0,0,0,R9,0,C,[Cy],3,3,0,0,0,JM,0,C,[OU,R9],0,3,0,Fn,["jO",N(AMF)],AMk,0,C,[],0,3,0,0,0,RA,0,C,[],0,3,0,CE,0,Gm,0,EM,[Dz],0,3,0,0,0,G_,0,C,[],0,3,0,0,0,AGJ,0,C,[],4,3,0,0,0,D3,"GlyphLayout$GlyphRun",16,C,[BB],0,3,0,0,0,Gd,0,C,[],0,3,0,0,0,MD,0,C,
[],3,3,0,0,0,Lg,0,C,[MD],1,3,0,0,0,FC,0,C,[],3,3,0,0,0,Jp,0,Lg,[FC,Cb],0,3,0,0,0,IB,"Comparator",21,C,[],3,3,0,0,0,N4,0,C,[IB],0,3,0,0,0,M_,0,C,[Dz],0,3,0,0,0,ACX,0,C,[],0,3,0,0,0,AMT,0,C,[],4,3,0,0,0,Og,0,C,[],3,3,0,0,0,Pp,0,C,[Og],0,3,0,0,0,ACl,0,C,[],0,3,0,0,0,AFi,0,C,[],0,3,0,0,0,T1,0,C,[],3,3,0,0,0]);
Di([K1,0,C,[T1],0,3,0,EU,0,OO,0,C,[],0,3,0,0,0,DX,0,C,[],0,3,0,0,["g3",N(AJ4)],TJ,0,C,[],3,3,0,0,0,EK,0,C,[Cy],3,3,0,0,0,MF,0,C,[TJ,EK],0,3,0,0,["jP",N(YP)],S4,0,C,[],3,3,0,0,0,UT,0,C,[S4],0,3,0,0,0,T_,0,C,[Uc],0,3,0,0,0,T2,0,C,[],3,3,0,0,0,RJ,0,C,[T2],0,3,0,0,0,P8,0,C,[],3,3,0,0,0,T6,0,C,[P8],0,3,0,0,0,AK3,0,C,[],0,3,0,0,0,UX,0,C,[],3,3,0,0,0,Ua,0,C,[UX],3,3,0,0,0,Q8,0,C,[Ua],0,3,0,0,0,KE,0,C,[EK],0,0,0,0,["jP",N(ANE)],KF,0,C,[EK],0,0,0,0,["jP",N(ASI)],Bj,"IllegalArgumentException",25,BA,[],0,3,0,0,0,AQF,0,
C,[],4,3,0,0,0,AAg,0,C,[DW],0,3,0,0,0,AII,0,EM,[Dz],0,3,0,0,0,AId,0,C,[Cy],1,3,0,0,0,Mw,0,C,[],3,3,0,0,0,Hm,"TeaGL20",5,C,[Mw],0,3,0,0,["iv",Br(AFX),"iF",Br(ASA),"cB",Br(ABn),"hf",BT(AE1),"eB",BT(LF),"eC",BT(LE),"hx",N(AQa),"hw",BT(ABD),"it",N(AGZ),"ip",P(ATl),"ir",N(AMI),"g_",N(AQb),"bb",N(AMo),"iI",N(AKQ),"h7",Bf(ACd),"h8",BT(AHO),"ia",BT(AKj),"W",N(ASb),"iG",N(AQV),"i9",N(Xs),"eD",BT(KU),"eE",BT(Mn),"iA",Br(ADG),"cm",Br(JH),"g$",N(ATc),"eF",Bf(MP),"iu",N(AIx),"eG",Bf(Lk),"dW",N(AEF),"ix",Br(AEz),"iw",N(ZP),
"cx",Br(ACc),"is",Br(Xr),"cA",function(b,c,d,e,f,g,h,i,j){M0(this,b,c,d,e,f,g,h,i,j);},"cH",Bf(AJq),"ch",Bf(ALU),"hm",Br(AMn),"hc",N(ZR),"iH",function(b,c,d,e,f,g){AI1(this,b,c,d,e,f,g);},"dE",BT(XQ)],S3,0,C,[Mw],3,3,0,0,0,Kp,"TeaGL30",5,Hm,[S3],0,3,0,0,["iM",N(AFp),"h9",BT(AKH),"h_",function(b,c,d,e,f){ATX(this,b,c,d,e,f);},"iK",Br(ALi),"cm",Br(AHW)],Pq,"TeaGL30Debug",5,Kp,[],0,3,0,0,["iM",N(ADO),"h9",BT(AAy),"h_",function(b,c,d,e,f){ASr(this,b,c,d,e,f);},"iK",Br(ZD),"cB",Br(AAq),"hx",N(AQf),"hw",BT(AJv),"g_",
N(ZA),"bb",N(AQY),"h7",Bf(AC2),"h8",BT(AMV),"W",N(AOG),"dW",N(Xc),"cx",Br(Yp),"cA",function(b,c,d,e,f,g,h,i,j){AJ2(this,b,c,d,e,f,g,h,i,j);},"cH",Bf(ACL),"dE",BT(AFe),"iv",Br(AIE),"iF",Br(ARO),"hf",BT(ADQ),"eB",BT(AJH),"eC",BT(ARF),"it",N(AK_),"ip",P(ATk),"ir",N(ANe),"iI",N(AS_),"ia",BT(Z7),"iG",N(ANl),"i9",N(AQl),"eD",BT(AGH),"eE",BT(AQc),"iA",Br(AKr),"cm",Br(AD1),"eF",Bf(ABG),"g$",N(Yn),"eG",Bf(ATi),"iu",N(Zh),"ix",Br(Yq),"iw",N(ASh),"is",Br(Yl),"ch",Bf(ZO),"hm",Br(AAV),"hc",N(AT2),"iH",function(b,c,d,e,f,
g){AOa(this,b,c,d,e,f,g);}],QX,0,C,[],0,3,0,0,0,Fh,0,BF,[],12,3,0,0,0,Uj,0,C,[Cy],3,3,0,0,0,M5,0,C,[Uj],0,0,0,0,["jQ",P(ACU)],V_,"TeaGL20Debug",5,Hm,[],0,3,0,0,["cB",Br(ASQ),"hx",N(ABN),"hw",BT(ACJ),"g_",N(AJF),"bb",N(ATB),"h7",Bf(AGX),"h8",BT(AS2),"W",N(Z$),"dW",N(AIj),"cx",Br(ALe),"cA",function(b,c,d,e,f,g,h,i,j){AD2(this,b,c,d,e,f,g,h,i,j);},"cH",Bf(ADg),"dE",BT(ATd),"iv",Br(Yi),"iF",Br(W$),"hf",BT(W8),"eB",BT(AHN),"eC",BT(AFs),"it",N(ATN),"ip",P(ALL),"ir",N(ATq),"iI",N(ALE),"ia",BT(AFM),"iG",N(ATC),"i9",
N(AKD),"eD",BT(AHR),"eE",BT(AAw),"iA",Br(AFY),"cm",Br(XV),"eF",Bf(AD8),"g$",N(AEe),"eG",Bf(Yy),"iu",N(AOh),"ix",Br(AQE),"iw",N(AI8),"is",Br(AS0),"ch",Bf(AQu),"hm",Br(ATj),"hc",N(YA),"iH",function(b,c,d,e,f,g){ABs(this,b,c,d,e,f,g);}],Uo,0,C,[DW],0,3,0,0,0,SE,0,C,[],0,3,0,0,0,Vb,0,C,[Cy],3,3,0,0,0,Mz,0,C,[Vb],0,0,0,0,["jR",P(Ya),"jS",P(ACp),"jT",P(XM)],Wt,0,C,[],3,3,0,0,0,WC,0,C,[Wt],0,3,0,0,0,OP,0,DX,[],0,0,0,0,0,U9,"CloneNotSupportedException",25,BH,[],0,3,0,0,0,CK,0,Dx,[],0,3,0,0,0,H,"IndexOutOfBoundsException",
25,BA,[],0,3,0,0,0,Fu,0,C,[Cy],3,3,0,0,0,Qx,0,C,[Fu],3,3,0,0,0,Se,0,C,[Fu],3,3,0,0,0,R4,0,C,[Fu],3,3,0,0,0,TC,0,C,[Fu],3,3,0,0,0,Wp,0,C,[Fu],3,3,0,0,0]);
Di([Uz,0,C,[Fu,Qx,Se,R4,TC,Wp],3,3,0,0,0,P_,0,C,[],3,3,0,0,0,Li,0,C,[Cy],3,3,0,0,0,Pa,0,C,[Cy,Uz,P_,Li],1,3,0,0,["jU",N(AMd),"jV",Br(APU),"jW",Br(AO9),"jX",Bf(AL1),"jY",N(AR4),"jZ",P(ABt),"j0",Bf(XL)],L9,0,C,[],1,3,0,0,0,Ke,0,L9,[MD,FC,Cb],0,3,0,0,0,Ng,0,Ke,[],0,3,0,0,0,AGc,0,C,[],0,3,0,0,0,G8,0,BF,[],12,3,0,0,0,DZ,0,C,[Cy],1,3,0,0,0,ADe,0,DZ,[],1,3,0,0,0,ACr,0,DZ,[],1,3,0,0,0,AHX,0,DZ,[],1,3,0,0,0,ALb,0,DZ,[],1,3,0,0,0,AGv,0,DZ,[],1,3,0,0,0,LP,0,C,[EK],0,0,0,0,["jP",N(AHp)],LQ,0,C,[EK],0,0,0,0,["jP",N(AS3)],LO,
0,C,[EK],0,0,0,0,["jP",N(AM8)],SN,0,Dx,[],0,3,0,0,0,Vj,0,C,[Cy],3,3,0,0,0,KO,0,C,[Vj],0,0,0,0,["j1",P(ADy)],ACb,0,DZ,[],1,3,0,0,0,RY,0,C,[Cb],4,3,0,0,0,NM,0,C,[],3,3,0,0,0,S5,0,C,[NM],4,3,0,0,0,AAF,0,C,[],4,3,0,0,0,Le,0,C,[],4,3,0,0,0,Ca,"ReflectionException",9,BH,[],0,3,0,0,0,E1,0,C,[],4,3,0,BE,0,RB,0,C,[],3,3,0,0,0,KL,0,C,[RB],0,0,0,0,0,If,"Iterator",21,C,[],3,3,0,0,0,KK,0,C,[If],0,0,0,0,0,UO,0,C,[NM],0,0,0,0,0,CC,"NumberFormatException",25,Bj,[],0,3,0,0,0,K7,0,BA,[],0,3,0,0,0,EP,0,BH,[],0,3,0,0,0,HM,"NoSuchMethodException",
25,EP,[],0,3,0,0,0,Ds,"NullPointerException",25,BA,[],0,3,0,0,0,Cf,0,C,[],1,0,0,0,["fB",Bf(ACP),"f5",BT(AFN),"fo",P(AAU),"T",P(AOv),"e9",N(ARc),"fn",N(ARa),"fL",P(ASS),"e5",P(IH)],Nc,0,C,[KM],0,3,0,0,0,ASC,0,C,[Cy],1,3,0,0,0,AET,0,C,[Cy],1,3,0,0,0,AUm,0,C,[Cy],1,3,0,0,0,Ll,0,C,[Cy],3,3,0,0,0,MJ,0,C,[Ll],0,3,0,0,["j2",N(ARk)],AGr,0,C,[Cy],1,3,0,0,0,MI,0,C,[Ll],0,3,0,0,["j2",N(Zn)],Om,0,C,[],3,3,0,0,0,HY,0,C,[Om,FC],0,0,0,0,0]);
Di([I6,0,HY,[],0,0,0,0,0,DG,0,Cf,[],0,0,0,Ef,["fJ",Bf(ZN),"fK",P(AGm),"gj",N(AAt)],TQ,0,C,[],0,0,0,0,0,Cn,"PatternSyntaxException",22,Bj,[],0,3,0,0,["c5",P(ASK)],ZV,0,C,[],0,3,0,0,0,K6,0,C,[DW],3,3,0,0,0,Mu,0,C,[K6],1,3,0,0,0,SA,0,C,[K6],3,3,0,0,0,ON,0,C,[SA],3,3,0,0,0,K8,0,Mu,[ON],1,3,0,0,0,T8,0,C,[],3,3,0,0,0,K5,0,K8,[FC,Cb,T8],0,3,0,0,0,Sv,0,DG,[],0,0,0,0,["fJ",Bf(Yx),"fK",P(ACt),"gj",N(AO3)],WD,0,DG,[],0,0,0,0,["fJ",Bf(AB5),"fK",P(AHA)],QP,0,DG,[],0,0,0,0,["fJ",Bf(AAR),"fK",P(AQ5)],Td,0,DG,[],0,0,0,0,["fJ",
Bf(YW),"fK",P(APD),"gj",N(AMJ)],G3,0,DG,[],0,0,0,0,["fJ",Bf(ARG),"fK",P(ABa)],CF,0,Cf,[],1,0,0,0,["fJ",Bf(ATO),"f2",P(AQh),"gj",N(AHr)],FF,0,CF,[],0,0,0,0,["f3",Br(APp),"fB",Bf(AEd),"f5",BT(ABM),"fK",P(AGo),"gj",N(YO)],Cr,0,Cf,[],0,0,0,0,["fJ",Bf(AFP),"e9",N(AMA),"fK",P(AHK),"fn",N(AI6),"gj",N(ANJ),"e5",P(ABE)],Kn,0,Cr,[],0,0,0,0,["fJ",Bf(AL_),"fK",P(AJk),"gj",N(AOn)],EG,0,Kn,[],0,0,0,0,["fJ",Bf(ACW),"e9",N(ANU),"fK",P(YI)],OA,0,EG,[],0,0,0,0,["fJ",Bf(AMq),"gj",N(ARf),"fK",P(ASO)],VC,0,EG,[],0,0,0,0,["fJ",Bf(AAi),
"gj",N(AQy),"fK",P(AFx)],R2,0,EG,[],0,0,0,0,["fJ",Bf(ABv),"gj",N(AUo),"fK",P(ALD)],TA,0,EG,[],0,0,0,0,["fJ",Bf(XH),"gj",N(AOI),"fK",P(AAS)],GQ,0,Cr,[],0,0,0,0,["fJ",Bf(Yc),"fB",Bf(AJw),"f5",BT(AO$),"fn",N(AIW),"fL",P(AMC),"e5",P(AS1)],AKU,0,C,[],4,3,0,0,0,Kb,"ArrayStoreException",25,BA,[],0,3,0,0,0,Id,0,C,[],1,0,0,0,0,Bq,0,Id,[],1,0,0,0,["gd",P(AAl),"f8",P(Zg),"fy",P(AP8),"fx",P(ASM)],KI,"MissingResourceException",21,BA,[],0,3,0,0,0,CQ,0,Bq,[],0,0,0,0,["gg",N(ABS),"gd",P(AUj),"f8",P(ADY),"fy",P(AQ3),"T",P(AK4),
"fx",P(AEq)],EV,0,Cf,[],1,0,0,0,["fn",N(APa),"gj",N(ARB),"e5",P(AKb)],DR,0,EV,[],0,0,0,0,["fJ",Bf(XJ),"fK",P(ABA)],FP,0,DR,[],0,0,0,0,["fJ",Bf(ZQ),"fK",P(AAp)],DT,0,EV,[],0,0,0,0,["fJ",Bf(X_),"fK",P(AGV)],FM,0,DR,[],0,0,0,0,["fJ",Bf(AJD),"e9",N(AUt)],VP,0,DR,[],0,0,0,0,["fJ",Bf(ATy),"fB",Bf(AKT)],NN,0,C,[],4,0,0,0,0,Bx,0,C,[],1,0,0,0,0,OY,0,Id,[FC],0,0,0,0,["T",P(MU)],PF,0,Cf,[],0,0,0,0,["fJ",Bf(AH7),"fK",P(AMl),"gj",N(AMz)],Bn,0,C,[FC,Cb],0,3,0,0,0,OG,0,Cr,[],0,0,0,0,["fK",P(AML)],HL,0,Cr,[],0,0,0,0,["fJ",
Bf(ZF),"e9",N(AL8),"fK",P(ANc),"gj",N(AA0),"fn",N(AAk)],D6,0,Cr,[],0,0,0,0,["fJ",Bf(ADK),"fK",P(ASB),"gg",N(AEM),"fn",N(Zu),"e9",N(APY),"gj",N(AD4)],KC,0,D6,[],0,0,0,0,["gg",N(AHs),"fK",P(AS9)],Lb,0,CF,[],0,0,0,0,["f3",Br(AH$),"fK",P(AAD)],Ev,0,CF,[],0,0,0,0,["f3",Br(W9),"fK",P(AIq),"fn",N(AMB)]]);
Di([IX,0,Cr,[],0,0,0,0,["e9",N(AJC),"fK",P(AOL),"fJ",Bf(Xu),"fn",N(AAM),"gj",N(AQ7)],Es,0,CF,[],0,0,0,0,["f2",P(AHL),"f3",Br(AF_),"fB",Bf(ADD),"f5",BT(AHV),"fK",P(ARp),"fn",N(AQW)],NS,0,CF,[],0,0,0,0,["f3",Br(Xh),"fK",P(AL5)],Kz,0,CF,[],0,0,0,0,["f3",Br(X1),"fK",P(AGw)],FU,0,Cr,[],0,0,0,0,["e9",N(ASW),"fJ",Bf(AL9),"fK",P(ALM),"fn",N(AIa),"gj",N(ANX)],Wu,0,FU,[],0,0,0,0,0,TZ,0,FU,[],0,0,0,0,0,W1,0,DT,[],0,0,0,0,["fJ",Bf(ACa)],QL,0,DT,[],0,0,0,0,["fJ",Bf(AKF)],Hk,0,DT,[],0,0,0,0,["fJ",Bf(APR),"e9",N(ARQ)],Qu,
0,Hk,[],0,0,0,0,["fJ",Bf(AHT),"e9",N(ALf)],GG,0,DT,[],0,0,0,0,["fJ",Bf(AUd),"fK",P(AR0)],O1,0,GG,[],0,0,0,0,["fJ",Bf(AGW)],Sl,0,DT,[],0,0,0,0,["fJ",Bf(ATb)],Ru,0,Hk,[],0,0,0,0,["fJ",Bf(AA2)],UE,0,GG,[],0,0,0,0,["fJ",Bf(Y6)],Sm,0,EV,[],0,0,0,0,["fJ",Bf(ATS),"fB",Bf(AP$),"fK",P(ANk)],PO,0,EV,[],0,0,0,0,["fJ",Bf(AMD),"fB",Bf(XC),"fK",P(AOV)],H4,0,C,[],1,0,0,0,0,W3,0,DR,[],0,0,0,0,["fJ",Bf(Y_)],VK,0,FM,[],0,0,0,0,["fJ",Bf(AKy)],Qk,0,FP,[],0,0,0,0,["fJ",Bf(APc)],Rm,0,DR,[],0,0,0,0,["fJ",Bf(AMt)],T3,0,FM,[],0,0,0,
0,["fJ",Bf(Zl)],R3,0,FP,[],0,0,0,0,["fJ",Bf(APv)],L8,0,Cf,[],4,0,0,0,["fJ",Bf(AI0),"gj",N(AHa),"fK",P(AKz)],Lw,0,Cf,[],0,0,0,0,["fJ",Bf(AAh),"gj",N(AAH),"fK",P(AT$)],PI,0,Cf,[],0,0,0,0,["fJ",Bf(AHy),"gj",N(AT6),"fK",P(ZZ)],NQ,0,Cf,[],4,0,0,0,["fJ",Bf(ANy),"gj",N(ABX),"fK",P(AJK)],VZ,0,Cf,[],0,0,0,0,["fJ",Bf(ALX),"gj",N(Xe),"fK",P(AFO)],O8,0,Cf,[],0,0,0,0,["fJ",Bf(ABC),"gj",N(AFh),"fK",P(Zz)],VV,0,Cr,[],0,0,0,0,["fJ",Bf(ATg),"fK",P(AC4),"e9",N(AAP),"fo",P(ALo),"gj",N(AAN)],Qe,0,Cr,[],4,0,0,0,["fJ",Bf(ALO),"fK",
P(AB$),"e9",N(AOT),"fo",P(W4),"gj",N(ATL)],VL,0,Cf,[],4,0,0,0,["fJ",Bf(AIm),"gj",N(AEU),"fK",P(AJb)],Tg,0,Cf,[],0,0,0,0,["fJ",Bf(ALV),"gj",N(AEE),"fK",P(YD)],Ox,0,Cf,[],0,0,0,0,["fJ",Bf(AG3),"gj",N(AB2),"fK",P(AFl)],Hb,0,Cr,[],0,0,0,0,["fJ",Bf(Zd),"e9",N(ANQ),"fK",P(YL),"gj",N(AOo)],VT,0,Hb,[],0,0,0,0,["fJ",Bf(AB_),"fB",Bf(ARd),"f5",BT(YF),"fn",N(AKm),"fK",P(ARL)],RV,0,Hb,[],0,0,0,0,["fJ",Bf(AJp),"fK",P(AAI)],PE,0,Be,[Jh],0,3,0,0,["gx",BT(AEs),"jN",Bf(AAo),"c$",N(AA_),"de",Br(AQd)],Sq,0,CF,[],0,0,0,0,["f3",
Br(ACN),"fB",Bf(Z_),"f5",BT(AFa),"fK",P(AMf),"fn",N(AGl)],Ou,0,CF,[],0,0,0,0,["f3",Br(AJz),"fK",P(AGx)],O4,0,CF,[],0,0,0,0,["f3",Br(APe),"fK",P(AQ2)],AUu,0,C,[],4,3,0,0,0,Os,0,CF,[],0,0,0,0,["f3",Br(APi),"fK",P(AT7)],H6,0,Cr,[],0,0,0,0,["e9",N(AMp),"fJ",Bf(Lj),"fB",Bf(AGf),"f5",BT(AC1),"fK",P(AQq),"fn",N(Yt),"gj",N(AQG)],Ia,0,Cr,[],0,0,0,0,["e9",N(AA8),"fJ",Bf(KA),"fB",Bf(AM3),"f5",BT(APd),"fK",P(ATe),"fn",N(ACR),"gj",N(ANd)],EL,0,CF,[],0,0,0,0,["f3",Br(AOp),"fB",Bf(AK9),"f5",BT(AA6),"fK",P(ARR),"fn",N(AN3)],JY,
0,H4,[],0,0,0,0,["gz",N(ABi),"gB",Br(AOb)],JZ,0,H4,[],0,0,0,0,["gz",N(APy),"gB",Br(ASG)]]);
Di([UC,0,C,[],0,0,0,0,0,JF,0,Bx,[],0,0,0,0,["fS",P(AGI)],I5,0,Bx,[],0,0,0,0,["fS",P(AJr)],Un,0,Bx,[],0,0,0,0,["fS",P(AO0)],U1,0,Bx,[],0,0,0,0,["fS",P(AQH)],U6,0,Bx,[],0,0,0,0,["fS",P(ADL)],Jz,0,Bx,[],0,0,0,0,["fS",P(ABR)],JV,0,Jz,[],0,0,0,0,["fS",P(AEO)],WT,0,Bx,[],0,0,0,0,["fS",P(AGe)],Kv,0,JV,[],0,0,0,0,["fS",P(Xl)],So,0,Kv,[],0,0,0,0,["fS",P(AKd)],ST,0,Bx,[],0,0,0,0,["fS",P(ACF)],QG,0,Bx,[],0,0,0,0,["fS",P(AJ7)],Qr,0,Bx,[],0,0,0,0,["fS",P(ASL)],U_,0,Bx,[],0,0,0,0,["fS",P(ALk)],W2,0,Bx,[],0,0,0,0,["fS",P(Xw)],UB,
0,Bx,[],0,0,0,0,["fS",P(AG7)],Uf,0,Bx,[],0,0,0,0,["fS",P(AOt)],VB,0,Bx,[],0,0,0,0,["fS",P(ACD)],Pn,0,Bx,[],0,0,0,0,["fS",P(ADb)],OZ,0,Bx,[],0,0,0,0,["fS",P(ASx)],UJ,0,Bx,[],0,0,0,0,["fS",P(Xi)],UV,0,Bx,[],0,0,0,0,["fS",P(AIB)],Q4,0,Bx,[],0,0,0,0,["fS",P(ADp)],SY,0,Bx,[],0,0,0,0,["fS",P(AFm)],Wv,0,Bx,[],0,0,0,0,["fS",P(AIG)],US,0,Bx,[],0,0,0,0,["fS",P(AQ9)],RO,0,Bx,[],0,0,0,0,["fS",P(ANq)],Q3,0,Bx,[],0,0,0,0,["fS",P(ALa)],WY,0,Bx,[],0,0,0,0,["fS",P(AON)],IO,0,Bx,[],0,0,0,0,["fS",P(AI5)],VG,0,IO,[],0,0,0,0,["fS",
P(AKK)],Sr,0,JF,[],0,0,0,0,["fS",P(Z8)],QY,0,I5,[],0,0,0,0,["fS",P(AF5)],Bv,0,Bx,[],0,0,0,0,["fS",P(AI9)],QU,0,Bx,[],0,0,0,0,["fS",P(ASi)],Mb,0,Bx,[],0,0,0,0,["fS",P(AEw)],Mi,0,Bx,[],0,0,0,0,["fS",P(Xj)],Eh,"NegativeArraySizeException",25,BA,[],0,3,0,0,0,YZ,0,C,[],0,0,0,0,0,ACS,0,C,[],4,0,0,0,0,AA1,0,C,[],4,3,0,0,0,Vd,0,C,[],0,3,0,0,0,IN,0,C,[],0,3,0,0,0,Np,0,C,[],0,3,0,0,0,AGb,0,C,[],4,3,0,0,0,AO1,0,C,[],4,3,0,0,0,Rf,0,DX,[],0,0,0,0,["g3",N(AP_),"jf",N(ADt),"je",Br(AKX)],CX,0,BF,[],9,3,0,IY,0,F_,0,HY,[],0,
0,0,0,0]);
Di([ATG,0,C,[],3,3,0,0,0,Up,0,C,[Cy],3,3,0,0,0,QR,0,C,[Up,Cy],1,3,0,0,["j3",Br(ASp),"j4",N(ALx),"j5",Br(AA9),"j6",Bf(AHY),"j7",Bf(API)],M1,0,C,[EK],0,0,0,0,["jP",N(AJJ)],FT,0,BF,[],12,3,0,0,0,AG1,0,C,[],0,3,0,0,0,Sg,0,C,[],3,3,0,0,0,H1,0,Nc,[Sg],0,3,0,0,["T",P(ZI)],Y,"StringIndexOutOfBoundsException",25,H,[],0,3,0,0,0,VN,0,Bq,[],0,0,0,0,["gg",N(ADV)],VM,0,Bq,[],0,0,0,0,["gg",N(X7)],PT,0,Bq,[],0,0,0,0,["gg",N(AIS),"T",P(AFE)],P0,0,Bq,[],0,0,0,0,["gg",N(AOr)],PX,0,Bq,[],0,0,0,0,["gg",N(APh)],PY,0,Bq,[],0,0,0,
0,["gg",N(AJy)],P4,0,Bq,[],0,0,0,0,["gg",N(ADf)],P5,0,Bq,[],0,0,0,0,["gg",N(W7)],P2,0,Bq,[],0,0,0,0,["gg",N(AFR)],P3,0,Bq,[],0,0,0,0,["gg",N(AJA)],P6,0,Bq,[],0,0,0,0,["gg",N(ARg)],P7,0,Bq,[],0,0,0,0,["gg",N(ACj)],PS,0,Bq,[],0,0,0,0,["gg",N(AUw)],Qm,0,Bq,[],0,0,0,0,["gg",N(AF1)],PQ,0,Bq,[],0,0,0,0,["gg",N(ACg)],PR,0,Bq,[],0,0,0,0,["gg",N(AER)],PW,0,Bq,[],0,0,0,0,["gg",N(AHD)],PP,0,Bq,[],0,0,0,0,["gg",N(AQR)],PU,0,Bq,[],0,0,0,0,["gg",N(AAu)],PV,0,Bq,[],0,0,0,0,["gg",N(AM_)],I0,0,C,[],0,0,0,0,0,G1,0,C,[G5],0,3,
0,0,0,BO,"IllegalStateException",25,BA,[],0,3,0,0,0,Jc,"IllegalMonitorStateException",25,BA,[],0,3,0,0,0,AOw,0,C,[],0,3,0,0,0,AEV,0,C,[],4,3,0,0,0,Yr,0,C,[Cy],1,3,0,0,0,GB,0,C,[],3,3,0,0,0,WF,0,C,[GB],0,3,0,0,["c4",P(ARi)],Vu,0,CX,[],12,0,0,0,0,Vv,0,CX,[],12,0,0,0,0,Vz,0,CX,[],12,0,0,0,0,VA,0,CX,[],12,0,0,0,0,Vx,0,CX,[],12,0,0,0,0,Vy,0,CX,[],12,0,0,0,0,Vs,0,CX,[],12,0,0,0,0,Vt,0,CX,[],12,0,0,0,0,Vq,0,CX,[],12,0,0,0,0,O3,0,C,[],3,3,0,0,0,SI,0,C,[O3],0,3,0,0,0,Rs,0,C,[Cy],4,3,0,0,0]);
Di([Sf,0,C,[],3,3,0,0,0,RW,0,C,[Sf],0,0,0,0,["e",N(AH6),"g0",N(AS8)],Tj,0,C,[GB],0,3,0,0,0,O0,0,GQ,[],0,0,0,0,["fB",Bf(AED),"f5",BT(AUc),"fL",P(ABV)],Tk,0,Bq,[],0,0,0,0,["gg",N(ARE)],OD,0,Bq,[],0,0,0,0,["gg",N(Z1)],SH,0,Bq,[],0,0,0,0,["gg",N(Zk)],SG,0,Bq,[],0,0,0,0,["gg",N(AEt)],V7,0,Bq,[],0,0,0,0,["gg",N(AHh)],Qf,0,Bq,[],0,0,0,0,["gg",N(ARH)],PA,0,Bq,[],0,0,0,0,["gg",N(AMe)],RG,0,Bq,[],0,0,0,0,["gg",N(AOE)],Oz,0,Bq,[],0,0,0,0,["gg",N(ATF)],OC,0,Bq,[],0,0,0,0,["gg",N(ACY)],Pr,0,Bq,[],0,0,0,0,["gg",N(ASa)],Qy,
0,Bq,[],0,0,0,0,["gg",N(AJ3)],QD,0,Bq,[],0,0,0,0,["gg",N(ANO)],TP,0,Bq,[],0,0,0,0,["gg",N(ARh)],S6,0,Bq,[],0,0,0,0,["gg",N(AS4)],OQ,0,Bq,[],0,0,0,0,["gg",N(ACE)],Kl,0,Bq,[],0,0,0,0,["gg",N(AMj)],Sw,0,Kl,[],0,0,0,0,["gg",N(APZ)],Zm,0,C,[If],0,0,0,0,0,Hs,0,G1,[],0,0,0,0,["c4",P(AMx)],OR,0,C,[],32,0,0,MX,0,VH,0,C,[Cy,Fu],1,3,0,0,["j8",Br(AI3),"j9",Br(AJ6),"j$",Bf(XK),"j_",N(XY),"ka",Bf(AFV)],Hv,0,C,[Cy],3,3,0,0,0,KH,0,C,[Hv],0,0,0,0,["jP",N(AHq)],AKC,0,C,[],0,3,0,0,0,Cw,"Array$ArrayIterator",8,C,[If,DW],0,3,0,
0,0,C_,0,C,[DW],0,3,0,0,0,IL,0,C,[],4,3,0,0,0,OT,0,C,[G5],0,0,0,0,0,WH,0,C,[],3,3,0,0,0,Tw,0,C,[WH],3,3,0,0,0,Um,0,C,[],3,3,0,0,0,HT,0,C,[Tw,Um],1,3,0,0,0,IQ,0,HT,[],0,3,0,0,0,Jb,0,IQ,[],0,3,0,0,0,HN,0,Jb,[],1,3,0,0,0,C6,0,HN,[],0,3,0,0,["kb",N(AHF)],Ht,0,C,[Hv],0,0,0,0,["jP",N(ALC)],AAd,0,C,[],0,0,0,0,0,Cu,0,HT,[],0,3,0,0,0,KN,0,C,[Dz],1,3,0,0,0,N8,0,KN,[],0,3,0,0,0,J0,"IllegalCharsetNameException",24,Bj,[],0,3,0,0,0,Lo,0,C,[CM],3,3,0,0,0,Im,0,C,[Lo],0,3,0,Ik,0,R_,0,C,[],3,3,0,0,0]);
Di([Lc,0,C,[R_],1,3,0,0,0,T4,0,Lc,[],0,3,0,0,0,WR,"NoSuchElementException",21,BA,[],0,3,0,0,0,T,"GdxRuntimeException",8,BA,[],0,3,0,0,0,ACV,0,C,[],4,3,0,0,0,ED,0,C,[GB],0,3,0,0,["c4",P(ZB)],AD_,0,C,[],4,3,0,0,0,Wz,0,C,[],32,0,0,NP,0,NL,"ConcurrentModificationException",21,BA,[],0,3,0,0,0,Oa,0,C,[],1,3,0,0,0,Tf,0,Oa,[],0,3,0,0,0,UQ,"ActorValvula",19,Ci,[CM],0,3,0,0,["bQ",Br(Yk),"be",N(AEc)],Py,"ActorValvulaAbierta",19,Ci,[CM],0,3,0,0,["bQ",Br(AIQ),"be",N(AOZ)],T0,"ActorSeparador",19,Ci,[CM],0,3,0,0,["bQ",Br(Zw),
"be",N(AT9)],QT,"ActorCompresor",19,Ci,[CM],0,3,0,0,["bQ",Br(AIK),"be",N(AMW)],Ps,"ActorPersonaje",19,Ci,[CM],0,3,0,0,["bQ",Br(ALP),"be",N(ANT)],Ud,"ActorFondo",19,Ci,[CM],0,3,0,0,["bQ",Br(ACQ)],F9,0,HN,[],0,3,0,0,["kb",N(AFk)],AC8,0,EM,[Dz],0,3,0,0,0,AMG,0,C,[],0,0,0,0,0,ANC,0,C,[],4,3,0,0,0,M6,0,C,[],0,3,0,0,0,Hj,0,BF,[],12,3,0,0,0,JE,0,C,[CM],0,3,0,0,0,NU,0,C,[],1,3,0,0,0,QZ,0,NU,[],0,3,0,0,0,HZ,0,C,[Cb,Dz],0,3,0,0,0,UD,0,B4,[],0,0,0,0,0,WX,0,C,[],0,3,0,0,0,NC,0,C,[],3,3,0,0,0,VO,0,C,[],3,3,0,0,0,PC,0,C,
[GB,NC,VO],0,0,0,0,["c4",P(AND)],PJ,0,C,[DW,Dz],4,3,0,0,0,Mt,0,C,[CM],0,3,0,ID,0,Nu,0,Bh,[],0,3,0,0,0,Lp,0,Bh,[],0,3,0,0,0,FJ,0,BF,[],12,3,0,0,0,U0,0,C,[],0,3,0,0,0,WV,0,C,[],32,0,0,M3,0,JN,0,C,[CM],3,3,0,0,0,Jn,0,C,[JN],0,3,0,0,["jp",P(AFg),"jq",P(AOg),"hd",Bf(ALG),"h4",Br(AD5),"ib",Br(ZK)],KQ,0,C,[CM],3,3,0,0,0,H0,0,C,[KQ],0,3,0,0,["h6",P(AGq),"h$",P(Ys),"g8",Bf(ALd),"he",N(Zr),"ha",P(AR$),"ic",P(AOz)],Qg,0,C,[JN],0,3,0,0,["jp",P(ABj),"jq",P(ACu),"hd",Bf(AAf),"h4",Br(AKZ),"ib",Br(AD6)],SD,0,C,[KQ],0,3,0,0,
["h6",P(ANG),"h$",P(XA),"g8",Bf(AG6),"he",N(AQL),"ha",P(AHZ),"ic",P(AAY)],LL,0,C,[JN],0,3,0,LR,["jp",P(ZY),"jq",P(AK5),"hd",Bf(AAa),"h4",Br(AQm),"ib",Br(ADd)],Pw,0,Jn,[],0,3,0,0,0,QJ,0,H0,[],0,3,0,0,0,UF,0,C,[DW],0,3,0,0,0,ANY,0,C,[],4,3,0,0,0]);
Di([E5,0,C,[],1,3,0,0,0,EC,0,E5,[Dz],1,3,0,0,["cl",N(AMX),"ck",N(ASD)],HC,0,E5,[Dz],1,3,0,0,0,HB,0,E5,[Dz],1,3,0,0,0,Fk,0,E5,[Dz],1,3,0,0,["cl",N(AMN),"ck",N(YG)],HP,0,C,[],4,3,0,0,0,AGT,0,C,[],0,3,0,0,0,Ey,0,C,[],3,3,0,0,0,C7,0,Fk,[Ey],0,0,0,0,["er",P(AUq)],AKs,0,C,[Cy],1,3,0,0,0,Tz,0,C,[],3,3,0,0,0,Lq,0,C,[Tz],0,3,0,0,0,F$,0,C,[CM],0,3,0,G0,0,HS,0,HB,[],1,0,0,0,0,GL,0,HS,[],0,0,0,0,["iL",N(ALz),"iY",Br(AJj),"iO",P(Xp)],HI,0,EC,[],1,0,0,0,0,It,0,HI,[],0,0,0,0,["iZ",N(ANa),"iP",Br(ALS),"iO",P(AMc)],J8,0,BF,
[],12,3,0,0,0,II,0,BF,[],12,3,0,0,0,KS,0,C,[],0,3,0,0,0,VE,0,KS,[],0,3,0,0,0,Mo,0,C,[CM],0,3,0,0,0,Is,0,HC,[],1,0,0,0,0,Kc,0,Is,[],0,0,0,0,["i4",N(AEY),"iQ",Br(AHw),"iO",P(ACB)],ALp,0,C,[Cy],1,3,0,0,0,EW,0,BF,[],12,3,0,0,0,Io,0,BF,[],12,3,0,0,0,Rd,0,C,[Li],1,3,0,0,["jU",N(ATQ),"kc",P(ABr)],Ii,0,HS,[Ey],1,0,0,0,["iO",P(AIL)],Pv,0,Ii,[],0,0,0,0,["iL",N(AEQ),"iY",Br(Xn)],Tq,0,Ii,[],0,0,0,0,["iL",N(AQk),"iY",Br(ZL)],HK,0,HI,[Ey],1,0,0,0,["iO",P(AMr),"er",P(ANW)],Pb,0,HK,[],0,0,0,0,["iZ",N(AIV),"iP",Br(ANP)],RP,
0,HK,[],0,0,0,0,["iZ",N(XB),"iP",Br(AIH)],Hz,0,Is,[Ey],1,0,0,0,["iO",P(AGj),"er",P(AOx)],O2,0,Hz,[],0,0,0,0,["i4",N(ACi),"iQ",Br(ABm)],QW,0,Hz,[],0,0,0,0,["i4",N(ALl),"iQ",Br(ACk)],LS,0,BA,[],0,3,0,0,0,Gq,"ReadOnlyBufferException",23,LS,[],0,3,0,0,0,NG,"BufferUnderflowException",23,BA,[],0,3,0,0,0,Gs,0,BF,[],12,3,0,0,0,E9,0,BF,[],12,3,0,0,0,ADw,0,C,[],4,3,0,0,0,Jy,0,BF,[],12,0,0,0,0,DM,0,BF,[],12,3,0,0,0,ANw,0,C,[GB,NC],3,0,0,0,0,IZ,0,BF,[],12,3,0,0,0,AMu,0,C,[],0,3,0,0,0,TL,0,C,[],32,0,0,L0,0,Jg,"BufferOverflowException",
23,BA,[],0,3,0,0,0]);
Di([Q6,"ActorGas",19,Ci,[CM],0,3,0,0,["bQ",Br(ANp),"be",N(AO6)],U7,0,C,[],0,3,0,N0,0,ADA,0,C,[],0,3,0,0,0,Nn,0,C,[Hv],0,0,0,0,["jP",N(AGz)],Op,"VerificaAccion",19,BQ,[],0,3,0,0,["bx",N(AKe)],Pu,0,C,[],0,3,0,0,0,JW,0,BF,[],12,3,0,0,0,Ol,"Predicate",8,C,[],3,3,0,0,0,UR,0,C,[CM],0,3,0,0,0,MZ,"InstantiationException",25,EP,[],0,3,0,0,0,Ky,"IllegalAccessException",25,EP,[],0,3,0,0,0,O7,0,EP,[],0,3,0,0,0,Qp,0,C,[],3,3,0,0,0,L3,0,C,[Qp],0,3,0,0,0,HA,0,BF,[],12,3,0,0,0,AEX,0,C,[],4,3,0,0,0,S9,0,C,[],0,3,0,0,0,Ju,0,
C,[],1,3,0,NX,0,RI,0,Ju,[],0,3,0,0,0,IA,0,BF,[],12,3,0,0,0,SC,0,C,[Jh,Ki],0,3,0,0,0,Rg,0,DX,[],0,0,0,0,0,Qt,0,C,[],3,3,0,0,0,RN,0,C,[Qt],0,3,0,0,0,VI,0,C,[Lo],3,3,0,0,0,HD,0,C,[],0,0,0,Nl,["ju",P(ADB),"jJ",P(AH3),"jI",P(ALm),"jw",N(AH_),"jt",P(AIk)],EQ,0,C,[],1,0,0,0,0,H2,0,EQ,[],1,0,0,0,0,Sj,0,H2,[],0,0,0,0,0,TS,0,HD,[],0,0,0,0,["ju",P(ASP),"jJ",P(AUr),"jI",P(AMm),"jt",P(L2),"jw",N(Or)],SR,0,H2,[],0,0,0,0,0,Sh,0,EQ,[],0,0,0,0,0,Ui,0,EQ,[],0,0,0,0,0,Sa,0,EQ,[],0,0,0,0,0,MC,0,C,[],0,3,0,0,0,Re,0,DX,[],0,0,0,
0,["g3",N(ZX),"jf",N(XI),"je",Br(AJL)],OX,0,C,[],32,0,0,NA,0,QI,0,C,[],32,0,0,Lu,0,ASl,0,C,[],0,3,0,0,0,Gu,0,G1,[],0,0,0,0,["c4",P(ABb)],OV,0,DX,[],0,0,0,0,["g3",N(ABf),"jf",N(AKw),"je",Br(ZG)],Yh,0,C,[],0,0,0,0,0,OW,0,DX,[],0,0,0,0,["g3",N(AE8),"jf",N(Yj),"je",Br(AF0)],KZ,0,C,[Hv],0,0,0,0,["jP",N(ASX)],ABL,0,C,[],0,3,0,0,0,Lt,0,C,[EK],0,0,0,0,["jP",N(ADW)]]);
let AY_=Eo(Cm),AY7=Eo(K4),AY8=Eo(AYF),AY9=Eo(AYG),AY$=Eo(BV),AY6=Eo(AKp),AZa=Eo(CN);AVP(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","viewport cannot be null.","batch cannot be null.","#iterator() cannot be used nested.","index can\'t be >= size: "," >= ","autoShapeType must be true to use this method.","Class cannot be created (missing no-arg constructor): ","Array is empty.",
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
"iso-avatar-draft-copia(2).png","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","n must be positive","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","begin must be called before end.",
"NORMAL","REVERSED","LOOP","LOOP_REVERSED","LOOP_PINGPONG","LOOP_RANDOM","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","The last short in src ","Index ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear",
"FileType \'","\' Not supported in web backend","\\","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER",
"destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","sphere-23.png","Asset loaded: ","Logical","Pixels","Call end() before beginning a new shape batch.","Must call begin(ShapeType.",").",") or begin(ShapeType.","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n",
"attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *","uniform sampler2D u_sampler",
"Point","Line","Filled","POINTY","SMOOTH","The texture region is null. Please set a texture region first (e.g. in the constructor or by calling setTextureRegion(TextureRegion region))","data:",";base64,","error"]);
I.prototype.toString=function(){return Bz(this);};
I.prototype.valueOf=I.prototype.toString;C.prototype.toString=function(){return Bz(P$(this));};
C.prototype.__teavm_class__=function(){return AVx(this);};
ASj.main=AWK(AHg);
ASj.main.javaException=AWi;
let Bt=Symbol('jsoClass');
(function(){var c;c=JM.prototype;c[Bt]=true;c.onAnimationFrame=c.jO;c=MF.prototype;c[Bt]=true;c.handleEvent=c.jP;c=KE.prototype;c[Bt]=true;c.handleEvent=c.jP;c=KF.prototype;c[Bt]=true;c.handleEvent=c.jP;c=M5.prototype;c[Bt]=true;c.fullscreenChanged=c.jQ;c=Mz.prototype;c[Bt]=true;c.denied=c.jT;c.prompt=c.jS;c.granted=c.jR;c=Pa.prototype;c.removeEventListener=c.jX;c.dispatchEvent=c.jY;c.get=c.jU;c.addEventListener=c.j0;Object.defineProperty(c,"length",{get:c.jZ});c=LP.prototype;c[Bt]=true;c.handleEvent=c.jP;c
=LQ.prototype;c[Bt]=true;c.handleEvent=c.jP;c=LO.prototype;c[Bt]=true;c.handleEvent=c.jP;c=KO.prototype;c[Bt]=true;c.unlockFunction=c.j1;c=MJ.prototype;c[Bt]=true;c.accept=c.j2;c=MI.prototype;c[Bt]=true;c.accept=c.j2;c=QR.prototype;c.removeEventListener=c.j7;c.dispatchEvent=c.j4;c.addEventListener=c.j6;c=M1.prototype;c[Bt]=true;c.handleEvent=c.jP;c=Rs.prototype;c[Bt]=true;c=VH.prototype;c.removeEventListener=c.j$;c.dispatchEvent=c.j_;c.addEventListener=c.ka;c=KH.prototype;c[Bt]=true;c.handleEvent=c.jP;c=Ht.prototype;c[Bt]
=true;c.handleEvent=c.jP;c=Rd.prototype;c.get=c.jU;Object.defineProperty(c,"length",{get:c.kc});c=Nn.prototype;c[Bt]=true;c.handleEvent=c.jP;c=KZ.prototype;c[Bt]=true;c.handleEvent=c.jP;c=Lt.prototype;c[Bt]=true;c.handleEvent=c.jP;})();
}));
