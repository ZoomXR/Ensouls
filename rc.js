;(function(){
  
	var icon = '<svg class="sg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="397.7591036414566" viewBox="0, 0, 400,397.7591036414566"><g id="svgg"><path id="path0" d="" stroke="none" fill="#fcfcfc" fill-rule="evenodd"></path><path id="path1" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd"></path><path id="path2" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd"></path><path id="path3" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd"></path><path id="path4" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd"></path></g></svg>';

	document.head.insertAdjacentHTML('beforeend','<style>.sg { width: 35px; height: 35px; position: fixed; bottom: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>'); 
  
	var a = document.createElement('a');
	a.setAttribute('href','https://twitter.com/steeevg');
	a.setAttribute('target','_blank');
	a.innerHTML = icon;
    
 	document.body.appendChild(a);
})();