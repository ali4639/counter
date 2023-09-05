window.onload = function(){
   let new_val = 0;
   let students = document.getElementById('students');
   let articles = document.getElementById('articles');
   let online_courses = document.getElementById('online_courses');
   let offline_coureses = document.getElementById('offline_coureses');
   let students_val = Number(students.innerText);
   let articles_val = Number(articles.innerText);
   let online_courses_val = Number(online_courses.innerText);
   let offline_coureses_val = Number(offline_coureses.innerText);

   window.setInterval(students_counter,100);
   window.setInterval(articles_counter,100);
   window.setInterval(online_courses_counter,100);
   window.setInterval(offline_coureses_counter,100);
  
   function students_counter(){
      if(new_val < students_val ){
         new_val = new_val + 50;
         students.innerText = new_val;
      }else{
         students.innerText = students_val;
      }
   }

   function articles_counter(){
      if(new_val < articles_val ){
         new_val = new_val + 50;
         articles.innerText = new_val;
      }else{
         articles.innerText = articles_val;
      }
   }

   function online_courses_counter(){
      if(new_val < online_courses_val ){
         new_val = new_val + 50;
         online_courses.innerText = new_val;
      }else{
         online_courses.innerText = online_courses_val;
      }
   }

   function offline_coureses_counter(){
      if(new_val < offline_coureses_val ){
         new_val = new_val + 50;
         offline_coureses.innerText = new_val;
      }else{
         offline_coureses.innerText = offline_coureses_val;
      }
   }
}



    