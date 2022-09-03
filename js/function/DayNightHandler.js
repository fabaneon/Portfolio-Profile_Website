function daynight(self){

    if(self.value === 'Day Mode'){
      self.value = 'Night Mode';

      body.setColor('black');
      body.setbackgroundColor('white');
      title.setColor('white');
      title.setbackgroundColor('grey');
      important.setColor('indianred');
    }

    else                        {
      self.value = 'Day Mode';

      body.setColor('white');
      body.setbackgroundColor('black');
      title.setColor('yellow');
      title.setbackgroundColor('black');
      important.setColor('green');
    }
}
