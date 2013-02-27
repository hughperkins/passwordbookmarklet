javascript:
/* copyright Hugh Perkins 2013, and all the contributors listed below
   You can use this code under the BSD license

   This is derived from Nic Wolff's original password generator at http://angel.net/~nic/passwd.current.html , which was public domain at time of derivation

   Contains sha1 implementation with following header:
      A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
      in FIPS PUB 180-1
      Version 2.1 Copyright Paul Johnston 2000 - 2002.
      Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
      Distributed under the BSD License
      See http://pajhome.org.uk/crypt/md5 for details.

   Modifications by Hugh Perkins:
      - use an additional div popup, with a password field input, so people can't 
        read your password over your shoulder
      - changed password length to 16 + the '1a' suffix, which should be secure for my lifetime...
*/

var b64pad='';
var chrsz=8;

function b64_sha1(s){
    return binb2b64(core_sha1(str2binb(s),s.length*chrsz));
}

function core_sha1(x,len){
    x[len%3E%3E5]|=0x80%3C%3C(24-len);x[((len+64%3E%3E9)%3C%3C4)+15]=len;var w=Array(80);var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;var e=-1009589776;for(var i=0;i%3Cx.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;var olde=e;for(var j=0;j%3C80;j++){if(j%3C16)w[j]=x[i+j];else w[j]=rol(w[j-3]%5Ew[j-8]%5Ew[j-14]%5Ew[j-16],1);var t=safe_add(safe_add(rol(a,5),sha1_ft(j,b,c,d)),safe_add(safe_add(e,w[j]),sha1_kt(j)));e=d;d=c;c=rol(b,30);b=a;a=t;}a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);e=safe_add(e,olde);}return Array(a,b,c,d,e);}function sha1_ft(t,b,c,d){if(t%3C20)return (b&c)|((~b)&d);if(t%3C40)return b%5Ec%5Ed;if(t%3C60)return (b&c)|(b&d)|(c&d);return b%5Ec%5Ed;
}
function sha1_kt(t){
    return (t%3C20)?1518500249:(t%3C40)?1859775393:(t%3C60)?-1894007588:-899497514;
}
function safe_add(x,y){
    var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x%3E%3E16)+(y%3E%3E16)+(lsw%3E%3E16);return (msw%3C%3C16)|(lsw&0xFFFF);
}
function rol(num,cnt){
    return (num%3C%3Ccnt)|(num%3E%3E%3E(32-cnt));}function str2binb(str){var bin=Array();var mask=(1%3C%3Cchrsz)-1;for(var i=0;i%3Cstr.length*chrsz;i+=chrsz)bin[i%3E%3E5]|=(str.charCodeAt(i/chrsz)&mask)%3C%3C(24-i);return bin;
}
function binb2b64(binarray){
    var tab='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';var str='';for(var i=0;i%3Cbinarray.length*4;i+=3){var triplet=(((binarray[i%3E%3E2]%3E%3E8*(3-i%254))&0xFF)%3C%3C16)|(((binarray[i+1%3E%3E2]%3E%3E8*(3-(i+1)%254))&0xFF)%3C%3C8)|((binarray[i+2%3E%3E2]%3E%3E8*(3-(i+2)%254))&0xFF);for(var j=0;j%3C4;j++){if(i*8+j*6%3Ebinarray.length*32)str+=b64pad;else str+=tab.charAt((triplet%3E%3E6*(3-j))&0x3F);}}return str;
}
var oldhtml = '';
function doIt(){
   var ourdivname = "ourpwdivfjg";
   var ourpwinput = "ourpwinputadfef";
/*   var master=window.prompt('Enter your master password');*/
   var passwordinput = document.getElementById(ourpwinput);
    if( passwordinput == null ) {
        oldhtml = document.body.innerHTML;
        document.body.innerHTML = '<div style="z-index: 100; position: absolute; left: 100px; top: 100px; background-color: #ecc; border: 1px solid black" id="' + ourdivname + '" >Master password: <input type="password" id="' + ourpwinput + '" onkeydown="if (event.keyCode == 13) doIt();"/><input type="button" tabindex="-999999" value="Get password" onclick="doIt();" /></div>' + document.body.innerHTML;
        document.getElementById(ourpwinput).focus();
        return;
    }
    passwordinput = document.getElementById(ourpwinput);
        var master = passwordinput.value;
    document.body.innerHTML = oldhtml;
   if(master!=''&&master!=null){
      host=document.location.href.match(/http(s*):\/\/([%5E/]+)/)[2];if(sld=host.match(/([%5E.]+\.([a-z][a-z][a-z]+|a(m|s|x)|bg|c(f|l|z)|d(e|j|k)|eu|fm|fo|gl|gm|hm|io|km|la|ly|m(d|e|n|p|q|r)|nc|nu|s(i|m|n|r|t|u|z)|td|tk|uz|vc|vu|ws))$/i)){domain=sld[0];
    }else{
       domain=host.match(/([%5E.]+\.[%5E.]+\.[a-z][a-z])$/i)[0];
    }
    var i=0,j=0,p=b64_sha1(master+':'+domain).substr(0,16)+'1a',F=document.forms,g=false;
    for(i=0;i%3CF.length;i++){
        E=F[i].elements;
        for(j=0;j%3CE.length;j++){
            D=E[j];
            if(D.type=='password'){
                D.value=p;
                D.focus();
                g=true;
            }
            if(D.type=='text'){
                if(D.name.toUpperCase().indexOf('PASSWORD')!=-1||D.name.toUpperCase().indexOf('PASSWD')!=-1){
                    D.value=p;
                    D.focus();
                    g=true;
                }
            }
        }
    }
    if(!g){
        window.prompt('Your password for '+domain+' is',p)
    }
}
}doIt();void(null);

