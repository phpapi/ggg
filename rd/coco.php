<?php
$prama   = $_POST;
$dprdzxc = $prama['dprdzxc'];
$cpkqkyd = $prama['cpkqkyd'];
$cqkyd   = $prama['cqkyd'];
$modes   = json_decode($prama['mods'],true);
$items   = $modes['items'];
$width   = $modes['width'];
$height  = $modes['height'];
$pic_url = $modes['pic_url'];
//热点区源码生成
$usemap_mbdr = time();
$mods = '<img width="'.$width.'" height="'.$height.'" usemap="#mbdr-'.$usemap_mbdr.'" ismap ="ismap" src="'.$pic_url.'" border="0">';
if($items){
  $mods .= '<map name="mbdr-'.$usemap_mbdr.'">';
  foreach ($items as $key => $value) {
    $mods .= '<area shape="rect" coords="'.$value['left'].','.$value['top'].','.($value['left']+$value['width']).','.($value['top']+$value['height']).'" href="'.$value['link_url'].'" target="_blank" title="'.$value['title'].'" style="cursor:pointer;outline:none;">';
  }
  $mods .= '</map>';
}
if($cqkyd==1){
  $div_height = $height-20;
}else{
  $div_height = $height;
}

if($dprdzxc==3){
  $div_left = $width/2+100;//图片宽度一半,基础版+100
}else{
  $div_left = $width/2;
}
//全屏头部
$template_quanping_header = '<div style="height:'.$div_height.'px;" data-title="本代码由刚哥哥在线自动生成"><div style=" padding:0; line-height:inherit; border:0; background:none; width:'.$width.'px; height:0px; position:absolute; left:50%; top:auto;" class="footer-more-trigger most-footer sn-simple-logo"><div style=" padding:0; line-height:inherit; border:0; background:none; width:'.$width.'px; height:0px; position:absolute; left:-'.$div_left.'px; top:auto; text-align:center;" class="footer-more-trigger most-footer sn-simple-logo"><div style=" display:inline-block; *display:inline; *zoom:1; height:'.$div_height.'px;"><div style="text-align:left;">';
//全屏尾部
$template_quanping_end = '</div></div></div></div></div>';

$result = array(
  'error'   =>0,
  'desc'    =>'',
  'payload' =>'',
  'fonload' =>'',
);
if($cpkqkyd==0){
  $result['fonload'] = $mods;
}else{
  $result['fonload'] = $template_quanping_header.$mods.$template_quanping_end;
}
echo json_encode($result);
?>
