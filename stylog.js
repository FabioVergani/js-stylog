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
