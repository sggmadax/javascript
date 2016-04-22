var
 unused,       
 r,
 x;
//x = nulls;

try {
x= nulls;
    if (x) {
        r = 'true';
    } else {
        r = 'false';
    }
} catch (e) {
    r = 'exception catched';
}
jQuery('#p1').append(x);
jQuery('#p2').append(r);
//console.log(r);
//console.log(x);