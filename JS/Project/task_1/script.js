//data fetch from data.json

fetch('./data.json') 
  .then(response => response.json())
  .then(data => {

    init(data)
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


  function init(sample){

    sample.forEach(cart => {
      
    });

    console.log(sample); 
    

}