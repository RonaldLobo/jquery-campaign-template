

var config = {

        general :{

            instance: 'livedemo'

        },

        2:{

            landing : {
                bgimg : 'Gluc-form-bg15.gif',

                productTypeID : 2, //Project ID

                address2 : false, //You want to ask for Address 2

                country : false, //You want to ask for the Country in case you dont US will be chose by default

                successRedirect: 'CheckoutTrial/'

            },

            billing: {
                title1 : "You're Almost Done, Just Pay For Shipping Below!",
                
                title2 : '',

                shippingForm : false,

                agree : true,

                planID : '17',

                planIDTax : '19',

                projectID : 3,

                trialPackageID : '4',

                chargeForTrial : true,

                campaignID : '2',

                sendConfirmationEmail : 'true',

                description : 'Desc of order',

                successRedirect : '../Confirmation/',

                productImg : '../img/samplesales15_report.gif',

                disclaimer: 'After the 15-day sample (only $4.99 S&H), you have no obligation to buy anything in the future as long as you call to cancel the autoship program within 18 days after you place your order. If you do not cancel before then, you will be enrolled in our autoship program and we will automatically send you a fresh one-month supply of Glucocil beginning in 18 days and every 30 days thereafter at the guaranteed low price of just $59.99 per month plus $4.99 S&H per shipment, charged to the card you provide today. You may cancel anytime by calling 1-888-406-7101 and the sample is yours to keep. No commitments, no hassles. Cancel anytime. Every Glucocil&reg; order comes with our 30-day Money Back Guarantee. Limit one sample per customer.',

                downsell: '', //leave it empty if you don't want downsell

                downSellImg: ''  //name and extention of the downsell promo image(to show when trying to leave)

            }

        },

        32 : {   //Single Bottle and 3 Bottle Checkout

            landing : {
                bgimg : 'checkout_shipping_singlesale.gif',

                productTypeID : 5,  //Project ID

                address2 : false,

                country : false,

                successRedirect: 'CheckoutSale/'

            },

            billing :{
                title1 : "You're Almost Done!",
                
                title2 : "Just choose a package below, and we'll rush your Glucocil to you!",

                products: {  //make the product key a consecutive number

                    1 : {

                        amount : '69.95',

                        shipping : '6.95',

                        tax : '5.60',

                        productTypeID: '5',

                        campaignID : '32',

                        productID : '81',

                        productImg : '../img/products/1-bottle-option.png',

                        totalImgNoTax : '../img/products/1-bottle-no-tax.png',

                        totalImgTax : '../img/products/1-bottle-w-tax.png'

                    },

                    2 : {

                        amount : '119.85',

                        shipping : '0',

                        tax : '9.59',

                        productTypeID: '5',

                        campaignID : '32',

                        productID : '82',

                        productImg : '../img/products/3-bottle-option.png',

                        totalImgNoTax : '../img/products/3-bottle-no-tax.png',

                        totalImgTax : '../img/products/3-bottle-w-tax.png'

                    }

                },

                sendConfirmationEmail : 'false',

                description : 'Desc of charge',

                successRedirect : '../Confirmation',

                downsell: '', //leave it empty if you don't want downsell

                downSellImg: ''  //name and extention of the downsell promo image(to show when trying to leave)

            }

        }

    };
