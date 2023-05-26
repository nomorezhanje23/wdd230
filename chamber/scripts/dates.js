const today = new Date();
const year = today.getFullYear();

const msg = `&copy;  ${year}  .:| Cape Town Chambers .:|:. Nomore T. Zhanje |:. WDD230
<b>last modified: </b>${document.lastModified}`;

const el = document.getElementById("myfooter");
el.innerHTML = msg;

