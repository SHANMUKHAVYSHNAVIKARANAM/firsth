function getReport(){

            
            

            //read the marks
            var engMarks = document.getElementById('txtEnglish').value;
            var kannadaMarks = document.getElementById('txtKannada').value;
            var mathsMarks = document.getElementById('txtMaths').value;
            var scienceMarks = document.getElementById('txtScience').value;
            
            //calculate the total marks (using double notation technique)
             var totalMarks = engMarks - (- kannadaMarks) - (- mathsMarks) - (- scienceMarks);
            
            //get the average marks
            var averageMarks = totalMarks / 4;                  
            
           
                    
                
            //display the results   
            
            document.getElementById('txtTotalMarks').value = totalMarks;
            document.getElementById('txtAvgMarks').value = averageMarks;
           

