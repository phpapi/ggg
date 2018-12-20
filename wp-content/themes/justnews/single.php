<?php
if ( in_category(array(60)) ) {
   include(TEMPLATEPATH . '/single1.php');
 }
 elseif ( in_category(array(1,2,3))){
   include(TEMPLATEPATH . '/single2.php');
 }
 else {
   include(TEMPLATEPATH . '/single3.php');
 }
?>