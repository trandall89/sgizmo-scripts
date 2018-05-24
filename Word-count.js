$(document).ready(function() {
   /*  Please follow the comments below.  
   This script will require the Id's of the survey,page,and questions the script will be implemented with.  
   See the following document on how to obtain ID's for each:    
   -->https://help.surveygizmo.com/help/how-to-find-ids  */
  
   var expected = 10; // desired Min/Max words 
   var errorMess = 'Please provide a minimum of 10 words'; // Message shown if validation fails    
   var questionId = 2; //ID of question with comment box
  
   // Do not change code within block - see below
   var obj = SGAPI.surveyData;
   var surveyObj = obj[Object.keys(obj)[0]];
  
   var surveyId = surveyObj.id;
   var pageId =surveyObj.currentpage;
     
   var commentId = '#sgE-' + surveyId + '-' + pageId + '-' + questionId + "-comments";  
   var errorLoc = '#sgE-' + surveyId + "-" + pageId + '-' + questionId + '-box .sg-question-title';  
   
   var errorMess = '<span class="sg-error-message custom-error">' + errorMess + '</span>';
   $(commentId).before(errorMess);
  
   $('.sg-submit-button,.sg-next-button').click(function(evt) {   
   	var val = $(commentId).val().trim();   
   	var words= val.split(" ");   
   	var count = words.length;  
   	// End block  
  
   /* Below, you can change'<' to any of following comparison operators:
      >= greater than or equal to
      <= less than or equal to== equal to
      <  less than
      >  greater than
      this will represent the passing validation (i.e. more than 10 words)
  */
    
   if (!(count > expected)) {     
     $('.custom-error').addClass('sg-error-display');     
     evt.preventDefault();   
   } else {     
       $('.custom-error').removeClass('sg-error-display');   
     }  
   });
})

