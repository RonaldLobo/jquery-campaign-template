<?php
include 'TriangleCRM/Autoloader.php';

use TriangleCRM\Controller as api;


$controller = new Controller("boostrap");

$settings = $controller->GetModel("indexBootstrap");  
$requiredJson = $controller->GetModel('billingFormRequired');
$required = json_decode($requiredJson);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>Dermarose&reg; Skin Revitalized - Special Offer!</title>
	<meta charset="UTF-8">
	<meta name=description content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="favicon.ico" />
	<link type="text/css" rel="stylesheet" href="css/index.css"/>
        <link type="text/css" rel="stylesheet" href="css/jNotify.jquery.css"/>
    </head>
    <body>
        
        <?php include_once('templates/offers/offer.html'); ?>
        <div class="wrapper">
        <!-- Index Content Blocks -->
            <?php include_once('templates/headers/header.html'); ?>
            <?php include_once('templates/contents/index.php'); ?>
            <?php include_once('templates/footers/footer.html'); ?>
        </div>
        <!-- Scripts -->
        <script>
            var indexSettings = <?php echo $settings; ?>;
            var indexShowEl = <?php echo $requiredJson; ?>;
            var downSell = indexSettings.Result.downSell;// redirect
        </script>
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.cookie.js"></script>
        <script src='js/jquery.validate.min.js'></script>
        <script src='js/jNotify.jquery.min.js'></script>
        <script src="js/exit.js"></script>
        <script src='js/global.js'></script>
        <!--[if lte IE 8]>
            <script type="text/javascript">
                ie = true;
            </script>
        <![endif]-->
    </body>
</html>
