<?php
$category_pre=explode('/',$category_name)[0];
if ( in_category(array(60)) ) {
    include(TEMPLATEPATH . '/single1.php');
}
elseif ( in_category(array(1,2,3))){
    include(TEMPLATEPATH . '/single2.php');
}
elseif ( (in_array($category_pre, ['tuijian','game','puke','majiang','qipai']) ) ){
    include(TEMPLATEPATH . '/single4.php');
}
else {
    include(TEMPLATEPATH . '/single3.php');
}
?>