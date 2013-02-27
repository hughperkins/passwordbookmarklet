javascript:(function(){  
/* I think this is probably too simple to put a copyright notice on...
   but, for completeness, this particular implementation was written by Hugh Perkins 2013
   and you can use it under a public domain license */
var inputs = document.getElementsByTagName('input');
for( var i = 0; i < inputs.length; i++ ) {
    if( inputs[i].type == 'password' ) {
        inputs[i].type = 'text';
    }
}
})();
