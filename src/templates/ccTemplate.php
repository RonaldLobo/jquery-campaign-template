<form method="post" name='opt_in_form' id='opt_in_form' class='templateForm' onsubmit="return ccModule.save()">
<div class="cc-form form-inner-container">
    <div class='form-element form-input-full' >
        <label>We Accept </label> 
        <img title="Visa" src="img/cc-icon-visa.png" alt="Visa">
        <img title="Mastercard" src="img/cc-icon-mastercard.png" alt="Mastercard"> 
        <img title="American Express" src="img/cc-icon-amex.png" alt="American Express"> 
        <img title="Discover Card" src="img/cc-icon-discover.png" alt="Discover Card">
    </div>
    <?php if($required->Result->paymentType){ ?>
    <div class='form-element form-input-full'>
        <label>Card type<span class='required'>*</span></label>
        <select class='' required id='paymentMethod'>
            <option value="">Select Payment Method</option>
            <option value="2">Visa</option>
            <option value="3">Master Card</option>
            <option value="4">Discover</option>
            <option value="1">American Express</option>
        </select>
    </div>
    <?php } ?>
    <?php if($required->Result->creditCard){ ?>
    <div class='form-element form-input-full'>
        <label>Credit Card #<span class='required'>*</span></label>
        <input
      id="creditCard"
      type="text"
      name="creditCard"
      required
      data-credit-card-type
      pattern="/^[0-9]+$/"
      maxlength="19"
      placeholder="Card Number" 
      class="onlyNumbers">
    </div>
    <?php } ?>
    <?php if($required->Result->exp){ ?>
    <div class='form-element form-input-2col'>
        <label>Expiration Date<span class='required'>*</span></label>
        <select name="month" data-card-expiration required class='dropdown month' id='expMonth'>
            <option disabled selected value="">Month</option>
            <option value='01'>January</option>
            <option value='02'>February</option>
            <option value='03'>March</option>
            <option value='04'>April</option>
            <option value='05'>May</option>
            <option value='06'>June</option>
            <option value='07'>July</option>
            <option value='08'>August</option>
            <option value='09'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
        </select>
        <select name="year" required class='dropdown year' id='expYear'>
            <option disabled selected value="">Year</option>
        </select>
    </div>
    <?php } ?>
    <?php if($required->Result->cvv){ ?>
    <div class='form-element form-input-full'>
        <label>Security Code<span class='required'>*</span></label>
        <input
            id="cvv"
            type="text"
            name="securityCode"
            placeholder="CCV"
            required
            pattern="/^[0-9]+$/"
            minlength="3"
            maxlength="4"
            class="ccv onlyNumbers">
        <a href="javascript:;" class="cvv-help">Whats This?</a>
        <div class="whatiscvv" style="" ></div>
    </div>
    <?php } ?>
    <button id="button-submit" type="submit" class='form-button'>submit</button>
    <div class="button-processing" id="button-processing" style="display:none;"><img src="img/loading.gif" /><br />Processing...</div>
</div>
</form>