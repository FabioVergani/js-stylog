
var callable=(function(o){var b=o.bind;return b.call(b,o.call);})(Function.prototype);
var Slice=callable(Array.prototype.slice);


function sty(x){return function(){console.log('%c'+Slice(arguments).join('\t'),x);};}

log={
	comment: sty('font-size:9px;color:#D6D6D6;')
};

log.comment(46757567567,88,88,77);



==============
var callable=(function(o){var b=o.bind;return b.call(b,o.call);})(Function.prototype);
var Slice=callable(Array.prototype.slice);

function stylog(css){
 var o=console,s=css;
 return function(){
	 var m=Slice(arguments,0);
	 m[0]=('%c')+m[0];
	 m.push(s);console.dir(m);
	 o.log.apply(o,m);
 };
}
log={
	comment: stylog('font-size:9px;color:#D6D6D6;')
};

log.comment(46757567567);










==========================
function stylog(css){
 var o=console,s=css;
 return function(){
	 var m=Array.prototype.slice.call(arguments,0);
	 m[0]=('%c')+m[0];
	 m.push(s);console.dir(m);
	 o.log.apply(o,m);
 };
}
log={
	comment: stylog('font-size:9px;color:#D6D6D6;')
};

log.comment(46757567567);
