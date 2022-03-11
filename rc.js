;(function(){
  
	var icon = <svg class="sg" xmlns="http://www.w3.org/2000/svg"
 width="357.000000pt" height="355.000000pt" viewBox="0 0 357.000000 355.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,355.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
</g>
</svg>';

	document.head.insertAdjacentHTML('beforeend','<style>.sg { width: 35px; height: 35px; position: fixed; bottom: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>'); 
  
	var a = document.createElement('a');
	a.setAttribute('href','https://twitter.com/steeevg');
	a.setAttribute('target','_blank');
	a.innerHTML = icon;
    
 	document.body.appendChild(a);
})();