aff = '';
sub = '';
campId = '';

$('document').ready(function(){
    gf = globalFunctions;
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

function save(){
    if($('form').valid()){
        redirect = config[campId].billing.success + '?camp=' + campId + '&aff='+ aff + '&sub=' + sub;
        gf.charge(populate(),redirect);
    }
    return false;
}

function populate(){
    ccinfo = {};
    ccinfo.amount = config[campId].billing.amount;
    ccinfo.shipping = config[campId].billing.shipping;
    ccinfo.productTypeID = config[campId].billing.productTypeID;
    ccinfo.productID = config[campId].billing.productID;
    ccinfo.campaignID = config[campId].billing.campaignID;
    ccinfo.firstName = billingInfo.firstName || '';
    ccinfo.lastName = billingInfo.lastName || '';
    ccinfo.address1 = billingInfo.address1 || '';
    ccinfo.address2 = billingInfo.address2 || '';
    ccinfo.city = billingInfo.city || '';
    ccinfo.state = billingInfo.state || '';
    ccinfo.zip = billingInfo.zip || '';
    ccinfo.country = billingInfo.country || '';
    ccinfo.phone = billingInfo.phone || 0;
    ccinfo.email = billingInfo.email || '';
    ccinfo.sendConfirmationEmail = config[campId].billing.sendConfirmationEmail;
    ccinfo.affiliate = aff;
    ccinfo.subAffiliate = sub;
    ccinfo.prospectID = billingInfo.ProspectID;
    ccinfo.description = config[campId].billing.description || '';
    ccinfo.paymentType = $('#paymentMethod').val() || '';
    ccinfo.creditCard = gf.encryptData($('#creditCard').val());
    ccinfo.expMonth = $('#expMonth').val() || '';
    ccinfo.expYear = $('#expYear').val() || '';
    ccinfo.cvv = $('#cvv').val() || '';
    return ccinfo;
}

function trackingTriangle(){
    clickld = gf.getParameterByName('clickld') || '';
    pixel = {
        affiliate : aff,
        pageTypeID : 2,
        clickld : clickld
    };
    jsonPixel = JSON.stringify(pixel);
    gf.ServiceHandlerPost('FireAffiliatePixel',jsonPixel
    ).then(function(responsePixel){
        responsePixel = JSON.parse(responsePixel);
        if(responsePixel.State == 'Success'){
            $('.pixel').html(responsePixel.Result);
        }
    });
    var hit = '//hawkgroup.trianglecrm.com/pixel/hit.js?aff='+aff+'&sub='+sub+'&pid=3&cid='+camp;
    var script = document.createElement("script");
    script.src = hit;
    document.body.appendChild( script );
}

