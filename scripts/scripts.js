const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year}  .:| Nomore T. Zhanje |:. Cape Town  <br/>
<b> last modified: </b>${document.lastModified}`;

const el = document.getElementById("myfooter");
el.innerHTML = msg;