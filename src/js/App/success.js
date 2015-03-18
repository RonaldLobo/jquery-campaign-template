aff = '';
sub = '';
campId = '';

$('document').ready(function(){
    loadVariables();
});

function loadVariables(){
    billingInfo = gf.getCookie('billingInfo');
    aff = gf.getParameterByName('aff') || '';
    sub = gf.getParameterByName('sub') || '';
    campId = gf.getParameterByName('camp') || 1;
    if(!config.hasOwnProperty(campId)) campId = 1;
    if(!billingInfo) window.location.href = '/?camp='+campId;
    trackingTriangle();
}

function trackingTriangle(){
    var hit = '//hawkgroup.trianglecrm.com/pixel/hit.js?aff='+aff+'&sub='+sub+'&pid=3&cid='+camp;
    var script = document.createElement("script");
    script.src = hit;
    document.body.appendChild( script );
}

