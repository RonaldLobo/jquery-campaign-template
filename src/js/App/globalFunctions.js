var globalFunctions = (function () {
	var obj = {};
        
	obj.alert = function(msg){
            jError(
                "<div>We were unable to process your order.<br/><h2>"+msg+"</h2>Please correct and try again. Click here to make changes</div>",
                {
                    autoHide : true, // added in v2.0
                    TimeShown : 3000,
                    HorizontalPosition : 'center',
                    onCompleted : function(){ // added in v2.0

                    }
                }
            );
        };
        
        obj.ServiceHandlerPost = function(action,params){
            return $.post( "TriangleCRM/Controller.php", { 
                action : action,
                data : params });
        };
        
        obj.setCookie = function(name,data){
            $.cookie(name, JSON.stringify(data),{expires: 1,path: '/'});
        };
        
        obj.removeCookie = function(name){
            $.removeCookie(name);
        };
        
        obj.getCookie = function(name){
            return ($.cookie(name)) ? JSON.parse($.cookie(name)) : '';
        
        };
        
        obj.encryptData = function(toencrypt){
            var $pem="-----BEGIN PUBLIC KEY-----\
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAM1RXGYKyXlCGcGvFYeNCD+yzVAOoK+w\
2awyE6vOCSqhR0pAWFgpWOuwbrL5M78PILmZc85ipbzoz6Vtv4IvYJUCAwEAAQ==\
-----END PUBLIC KEY-----";
            var $key = RSA.getPublicKey($pem);
            return RSA.encrypt(toencrypt,$key);
        };
        
        obj.getDate = function(days) {  
            var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");    
            var monthNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December"); 
            var now = new Date();   
            now.setDate(now.getDate() + days);   
            var nowString =  dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();   
            return nowString;
        };
        
        obj.getYear = function(year) {   
            var now = new Date();    
            var nowString = now.getFullYear();   
            document.write(nowString);
        };
        
        obj.processer = function(action){
            if(action == 'show'){
                $("#button-processing").show();
                $("#button-submit").hide();
            }
            else{
                $("#button-processing").hide();
                $("#button-submit").show();
            }
        };
        
        obj.getParameterByName = function( name ){
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\?&]"+name+"=([^&#]*)", 
                regex = new RegExp( regexS ),
                results = regex.exec( window.location.href );
            if( results == null ){
              return "";
            } else{
              return decodeURIComponent(results[1].replace(/\+/g, " "));
            }
        };
        
        obj.eventsHandler = function (){
            
        };
        
        obj.createProspect = function(values,redirect){
            jsonObj = JSON.stringify(values);
            obj.ServiceHandlerPost('createprospect',jsonObj).done(function(response){
                    console.log(response);
                    response = JSON.parse(response);
                    if(response.State == 'Success'){
                        values.ProspectID = response.Result.ProspectID;
                        console.log(values);
                        gf.setCookie('billingInfo',values);
                        internal = true;
                        window.location.href = redirect;
                    }
                    else{
                        secondPart = getSecondPart(response.Info);
                        if(secondPart){
                            gf.alert(getFirstPart(secondPart));
                        }
                        else{
                            gf.alert(response.Info);
                        }
                    }
            });
        };
        
        obj.createSubscription = function(values,redirect){
            jsonObj = JSON.stringify(values);
            obj.ServiceHandlerPost('CreateSubscription',jsonObj).done(function(response){
                response = JSON.parse(response);
                if(response.State == 'Success'){
                    internal = true;
                    window.location.href = redirect;
                }
                else{
                    if(response.Info == 'Test charge. ERROR'){ // testing env, remove on PROD
                        internal = true;
                        window.location.href = redirect;
                    }
                    else{
                        secondPart = getSecondPart(response.Info);
                        if(secondPart){
                            gf.alert(getFirstPart(secondPart));
                        }
                        else{
                            gf.alert(response.Info);
                        }
                    }
                }
            });
        };
        
        obj.charge = function(values,redirect){
            jsonObj = JSON.stringify(values);
            obj.ServiceHandlerPost('Charge',jsonObj).done(function(response){
                response = JSON.parse(response);
                if(response.State == 'Success'){
                    internal = true;
                    window.location.href = redirect;
                }
                else{
                    if(response.Info == 'Test charge. ERROR'){ // testing env, remove on PROD
                        internal = true;
                        window.location.href = redirect;
                    }
                    else{
                        secondPart = getSecondPart(response.Info);
                        if(secondPart){
                            gf.alert(getFirstPart(secondPart));
                        }
                        else{
                            gf.alert(response.Info);
                        }
                    }
                }
            });
        };
        
        obj.getSecondPart = function(str) {
            return str.split('<Message>')[1];
        };
        obj.getFirstPart = function(str) {
            return str.split('</Message>')[0];
        };
        
        function init(){
            obj.eventsHandler();
            $('.getDate').html(obj.getDate($('.getDate').attr('data-day')));
            $('.onlyNumbers').keypress(function(key){
                if(key.charCode == 8 || key.charCode == 0) return true;
                if(key.charCode < 48 || key.charCode > 57 ) return false;
            });
            $(document).ready(function () {
                if(ie){
                    $('form').validate({
                        errorClass: "authError",
                        errorElement: "span"
                    });
                }
                $('.CS_div1 a img').attr('src','/img/offers/'+downSell.split('.')[0]+'.jpg');
            });
        };
        
        obj.init = init();
        return obj;
}());
