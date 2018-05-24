$(document).ready(function() {    

   //Please follow the comments below.
   //This script will require the Id's of the survey,page,and questions
   //the script will be implemented with.
   //See the following document on how to obtain ID's for each:  
   //-->https://help.surveygizmo.com/help/how-to-find-ids

   /* change this to the error message you would like to display */
   var errorMess = 'Please enter a value lower than what you entered in the first box';
   var box1Id = 2; //replace this with ID of first box
   var box2Id = 3; //replace this with ID of second box
    
   // Do not change code within block - see below
   var obj = SGAPI.surveyData;
   var surveyObj = obj[Object.keys(obj)[0]];
   var surveyId = surveyObj.id;
   var pageId =surveyObj.currentpage;
  
   var box1 = "#sgE-" + surveyId +"-"+ pageId +"-" + box1Id + "-element";
   var box2 = "#sgE-" + surveyId +"-"+ pageId +"-" + box2Id + "-element";
   var box2Title= "#sgE-" + surveyId +"-"+ pageId +"-" + box2Id + "-box" + " .sg-question-title";
   var htmlMess = '<div class="custom-error sg-error-message">' + errorMess + '</div>';
   $(box2Title).append(htmlMess);    
   $('.sg-submit-button,.sg-next-button').click(function(evt) {
      var box1val = Number($(box1).val());
      var box2val = Number($(box2).val());

   // End block   
  
   /* Below, you change '>' to any of following comparison operators:
      >= greater than or equal to
      <= less than or equal to== equal to
      <  less than
      >  greater than
      this will represent the passing validation (i.e. Second box must be less than the first)
   */                         
     if (!(box2val < box1val)) {
         $('.custom-error').addClass('sg-error-display');      evt.preventDefault();
      }    
   });
})