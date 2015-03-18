aff = '';
sub = '';
campId = '';

$('document').ready(function(){
    gf = globalFunctions;
    loadVariables();
});

function loadVariables(){
    aff = gf.getParameterByName('aff') || '';
    sub = gf.getParameterByName('sub') || '';
    campId = gf.getParameterByName('camp') || 1;
    if(!config.hasOwnProperty(campId)) campId = 1;
    trackingTriangle();
}

function save(){
    if($('form').valid()){
        redirect = config[campId].shipping.success + '?camp=' + campId + '&aff='+ aff + '&sub=' + sub;
        gf.createProspect(populate(),redirect);
    }
    return false;
}

function populate(){
    billinfo = {};
    billinfo.aff = aff;
    billinfo.sub = sub;
    billinfo.campaignID = config[campId].shipping.campaingId;
    billinfo.productTypeID = config[campId].shipping.ProductTypeID;
    billinfo.firstName = $('#fields_fname').val() || '';
    billinfo.lastName = $('#fields_lname').val() || '';
    billinfo.address1 = $('#fields_address1').val() || '';
    billinfo.address2 = $('#fields_address2').val() || '';
    billinfo.city = $('#fields_city').val() || '';
    billinfo.state = $('#fields_state').val() || '';
    billinfo.zip = $('#fields_zip').val() || '';
    billinfo.country = $('#fields_country').val() || billinfo.country;
    billinfo.phone = $('#fields_phone').val() || '';
    billinfo.email = $('#fields_email').val() || '';
    return billinfo;
}

function trackingTriangle(){
    clickld = gf.getParameterByName('clickld') || '';
    pixel = {
        affiliate : aff,
        pageTypeID : 1,
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
    var hit = '//hawkgroup.trianglecrm.com/pixel/hit.js?aff='+aff+'&sub='+sub+'&pid=3&cid='+campId;
    var script = document.createElement("script");
    script.src = hit;
    document.body.appendChild( script );
}

