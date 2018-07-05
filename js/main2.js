
let tabs = document.getElementsByClassName('tab-pane') ;

removeOtherCarrousels=() => {
    //converting the tabs which is an array like object to an array so I can have the ability to use forEach
    let arr = Array.prototype.slice.call(tabs);
    arr.forEach(element => {
        element.innerHTML = '' ; 
    });
}
createCarrousel = id => {
  let correspondingDiv = document.getElementById(id.slice(0 , -4));
  
correspondingDiv.innerHTML = "<a href='https://google.com'>hi</a>" ;
};

$(document).on('click', '.nav-link', function(event) {
    removeOtherCarrousels() ; 
    createCarrousel(this.id);
});





let dataStringified = JSON.stringify(data) ,
    dataParsed = JSON.parse(dataStringified) ;
