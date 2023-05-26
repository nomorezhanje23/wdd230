const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year}  .:| Nomore T. Zhanje |:. WDD230 .:| Cape Town Chamber of Commerce <br/>
<b>last modified: </b>${document.lastModified}`;

const el = document.getElementById("myfooter");
el.innerHTML = msg;

