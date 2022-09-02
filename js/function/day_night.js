function daynight(){

    if(daynightBtn.value === 'Day Mode'){
      daynightBtn.value = 'Night Mode';

      body.style.color = 'black';
      body.style.backgroundColor = 'white';

      var i = 0 ;
      while( i < title.length ){
        title[i].style.color = 'white';
        title[i].style.backgroundColor = 'grey';
        i++ ;
      }

      i = 0 ;
      while( i < important.length){
        important[i].style.color = 'indianred';
        i++;
      }
    }


    else{
      daynightBtn.value = 'Day Mode';

      body.style.color = 'white';
      body.style.backgroundColor = 'black';

      var i = 0 ;
      while( i < title.length ){
        title[i].style.color = 'yellow';
        title[i].style.backgroundColor = 'black';
        i++ ;
      }

      i = 0 ;
      while( i < important.length){
        important[i].style.color = 'green';
        i++;
      }
    }











  }
