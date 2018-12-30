<?php
$category_pre=explode('/',$category_name)[0];
$term = get_term_by('slug', $category_pre, 'category');
//var_dump($category_name);
if ( in_category(array(60)) ) {
    include(TEMPLATEPATH . '/single1.php');
}
elseif ( in_category(array(1,2,3))){
    include(TEMPLATEPATH . '/single2.php');
}
elseif ( $term->tmpid == 1 ){
    include(TEMPLATEPATH . '/single4.php');
}
else {
    include(TEMPLATEPATH . '/single3.php');
}
?>