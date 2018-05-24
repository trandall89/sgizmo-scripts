$(document).ready(function() {
  var errorMess = 'Please choose a value lower than the first slider'; //customize the error message
  var sliderListId = 2; //replace with the ID of the overall slider list question
  var slider1sku= 10001; //this will be the ID/SKU of the first slider
  var slider2sku= 10002;  //this will be the ID/SKU of the second slider
  
  // begin block - do not change this block of code until block ends
   var obj = SGAPI.surveyData;
   var surveyObj = obj[Object.keys(obj)[0]];
  
   var surveyId = surveyObj.id;
   var pageId =surveyObj.currentpage;
  
  
  var slider1 = '#sgE-' + surveyId + "-" + pageId + "-" + sliderListId +
      			"-" + slider1sku + '-element';
  console.log(slider1);
  var slider2 = '#sgE-' + surveyId + "-" + pageId + "-" + sliderListId +
      			"-" + slider2sku + '-element';
  console.log(slider2);
  var errorLoc = '#sgE-' + surveyId + "-" + pageId + "-" + sliderListId +
      '-box .sg-slider-row:nth-of-type(2)';
 
  var errorMess = '<span class="custom-error sg-error-message">' + errorMess + '</span>';
  $(errorLoc).before(errorMess);
  
  $('.sg-submit-button,.sg-next-button').click(function(evt) {
  	var slider1val = Number($(slider1).val());
  	var slider2val = Number($(slider2).val());
	console.log(slider1val);
    console.log(slider2val);
    
   // end block
    
   /* Below, you can change'<' to any of following comparison operators:
      >= greater than or equal to
      <= less than or equal to== equal to
      <  less than
      >  greater than
      This comparison will represent the passing validation (i.e. second slider must be less than first) */
    
    if(!(slider2val < slider1val)) {
      $('.custom-error').addClass('sg-error-display');
      evt.preventDefault();
    } else {
      $('.custom-error').removeClass('sg-error-display');
    }
    
    
  })
})
