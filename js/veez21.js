/*!
 * Materialize v0.98.2 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */

 // veez21
 
 var today = new Date();
 var dd = today.getDate();
 var mm = today.getMonth()+1; //January is 0!
 var yyyy = today.getFullYear();

 if(dd<10) {
     dd='0'+dd
 } 

 if(mm<10) {
     mm='0'+mm
 } 

 today = mm+'/'+dd+'/'+yyyy;
 
 