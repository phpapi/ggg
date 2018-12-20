<?php global $options, $is_submit_page; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
    <title><?php wp_title( isset($options['title_sep']) && $options['title_sep'] ? $options['title_sep'] : ' | ', true, 'right' ); ?></title>
    <?php wp_head();?>
    <script> (function() {if (!/*@cc_on!@*/0) return;var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');var i= e.length; while (i--){ document.createElement(e[i]) } })()</script>
    <!--[if lte IE 8]><script src="<?php echo get_template_directory_uri()?>/js/respond.min.js"></script><![endif]-->
    <!-- 请置于所有广告位代码之前 -->
<script type="text/javascript" src="http://cbjs.baidu.com/js/m.js"></script>
</head>
<body <?php body_class()?>>
<?php if (function_exists('AWM_generate_linking_code'))
AWM_generate_linking_code(); ?>
<header class="header">
<div style="width:100%;height:30px;background: #F8F8F8;"><div class="head_tool">
<div class="head_tool_nr_l">
<span style="float:left;"><wb:follow-button uid="1933043784" type="red_1" width="63" height="24" ></wb:follow-button></span><a href="//weibo.com/ganggg2046" target="_blank" class="xlwb" rel="nofollow">新浪微博</a>
|  微信 903601616
</div>
<div class="head_tool_nr_r">
<a href="http://www.ganggg.com/zhuomian.php" class="fszm">把本站放到桌面</a>|<a href="http://www.ganggg.com/sitemap.xml" target="_blank">网站地图</a>|<a href="https://home.ganggg.com/" target="_blank">会员中心</a> </div>
</div></div>
    <div class="container clearfix">
        <div class="navbar-header" style="float:left;">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar icon-bar-1"></span>
                <span class="icon-bar icon-bar-2"></span>
                <span class="icon-bar icon-bar-3"></span>
            </button>
            <?php $h1_tag = 'div'; if(is_home()||is_front_page()) $h1_tag = 'h1'; ?>
            <<?php echo $h1_tag;?> class="logo">
                <a href="<?php bloginfo('url');?>" rel="home"><img src="<?php if($logo = isset($options['logo'])?$options['logo']:'') { echo $logo; } else { echo get_template_directory_uri().'/images/logo.svg';} ?>" alt="<?php echo esc_attr(get_bloginfo( 'name' ));?>"></a>
            </<?php echo $h1_tag;?>>
        </div>
        <div class="collapse navbar-collapse" style="float:left;margin:10px 0 0 10px;">
            <?php
            wp_nav_menu( array(
                    'menu'              => 'primary',
                    'theme_location'    => 'primary',
                    'depth'             => 3,
                    'container'         => 'nav',
                    'container_class'   => 'navbar-left primary-menu',
                    'menu_class'        => 'nav navbar-nav',
                    'fallback_cb'       => 'WPCOM_Nav_Walker::fallback',
                    'walker'            => new WPCOM_Nav_Walker())
            );
            ?>
        </div><!-- /.navbar-collapse -->
        <form class="search-form" action="http://www.ganggg.com" method="get" role="search" style="margin-top:15px;float:right;">
    <input type="text" class="keyword" name="s" placeholder="输入关键词搜索..." value="">
    <input type="submit" class="submit" value="">
</form>
    </div><!-- /.container -->
    <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2893bf7291d5aeb3f43b752fc38e1664";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
</header>
<div id="wrap">
<div style="width:100%;background:#fff;"><div style="width:980px;padding-top:8px; margin:0px auto;height:35px;"><!-- 980*22 全局顶部文字排行 --><script type="text/javascript" src="//1.ws-sky.com/site/resource/1qhuz.js?gbt=kyqxjx"></script></div></div>
<div style="margin:20px auto 0;width:1180px; height:50px; overflow:hidden;">
<div style="width:860px; float:left; overflow:hidden;">
<script type="text/javascript" src="//1.ws-sky.com/site/res/y2qkw5.js?i=dvaezmzc"></script></div>
<div style="float:left; background:#e60013; color:#fff; font-size:18px; width:300px; text-align:center; margin-left:20px; height:50px; line-height:50px; font-weight:bold;">提升宝贝权重,加微信903601616</div>
</div>