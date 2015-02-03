/**
 * Created by sunqi on 15-2-2.
 */
(function(){
    var appid = 'cyrBFza0G',
        conf = 'prod_47eec19080499a69363da1aef1a8f8fa';
    var doc = document,
        s = doc.createElement('script'),
        h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
    s.type = 'text/javascript';
    s.charset = 'utf-8';
    s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
    h.insertBefore(s,h.firstChild);
    window.SCS_NO_IFRAME = true;
})()