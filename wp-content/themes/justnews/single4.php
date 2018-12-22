<?php
global $options,$current_user;
$dashang_display = isset($options['dashang_display']) ? $options['dashang_display'] : 0;
$show_author = isset($options['show_author']) && $options['show_author']=='0' ? 0 : 1;
get_header();?>
<link rel='stylesheet' id='megamenu-css' href='<?php echo get_template_directory_uri()?>/Font-Awesome-master/css/font-awesome.css' type='text/css' />
<link rel='stylesheet' id='megamenu-css' href='<?php echo get_template_directory_uri()?>/css/download.css' type='text/css' />
<link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/style_2.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/css/bootstrap.min.css">

<?php

$related = get_posts(
    array(
        'category__in' => wp_get_post_categories( $post->ID ),
        'numberposts'  => 5,
        'post__not_in' => array( $post->ID )
    )
);
//                    print_r($related);
//print"<p class="word"re>";
$f = array_shift($related);
$t = get_the_post_thumbnail_url($f->ID);
//var_dump($t);
$cat = wp_get_post_categories( $post->ID );
// var_dump($cat);
//                    $terms = get_the_category( $cat[0]  );
//                    var_dump($terms);
$te = get_term_by('id' , $cat[0], 'category' );
//                    var_dump($te);
//                    var_dump($cat);
$sub = get_cat_name( $cat[0] );
//                    print_r($f->ID);
//                    var_dump($sub);
//                    print_r($f);
//                    print_r($related);
?>

<div class="main container">
    <div class="content" style="background-color:#fff">
        <ol class="breadcrumb entry-breadcrumb">
            <li class="home"><i class="fa fa-map-marker"></i>
                <a href="/">首页</a></li>
            <li><a href="/game/<?php echo $te->slug;?>"><?php echo $te->name;?></a></li>
<!--            <li><a href="#"> --><?php //the_title();?><!-- </a></li>-->
        </ol>
        <article id="post-5700" class="post-5700 post type-post status-publish format-standard has-post-thumbnail hentry category-shouji tag-2147 tag-2149 tag-2136">

            <div class="game_top" id="gametop">
                <!-- <img src="<?php echo get_template_directory_uri()?>/images/1.png" alt="斗地主" class="img"> -->
                <?php
                    if ( has_post_thumbnail() ) {
                        the_post_thumbnail('', array('class' => 'img-responsive img bigImg')); // add post thumbnail
                    } 
                    ?>
                <div class="shatxt">
                    <div class="shat_bd">
                        <h3><?php the_title(); ?></h3>
                        <p class="word">检测：<img src="<?php echo get_template_directory_uri()?>/images/ico-aq.png"> 安全无毒、<img src="<?php echo get_template_directory_uri()?>/images/ico-aq.png"> 无广告、<img src="<?php echo get_template_directory_uri()?>/images/ico-aq.png">无插件、
                            <img src="<?php echo get_template_directory_uri()?>/images/ico-aq.png"> 建议18岁以上的成年人游戏</p>
                        <div class="dowl-min fl">
                            <ul>
                                <li>类型：<?php echo $post->post_cat;?></li>
                                <li>平台：<?php echo $post->post_pla;?></li>
                                <li>语言：<?php echo $post->post_lan;?></li>
                                <li>大小：<?php echo $post->post_size;?></li>
                                <li>版本：<?php echo $post->post_ver;?></li>
                                <li>更新：<?php echo $post->post_upg;?></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="shabtn">
                    <a href="<?php echo $post->post_alink;?>" class="game_in playcount" data="249">安装安卓版</a>
                    <a href="<?php echo $post->post_ilink;?>" class="weiduan" id="weiduan">安装ios版</a>
                    </div>
            </div>


            <!-- 下载游戏 -->
            <div class="section">
                <!-- <div class="download">
                    <a class="btn left" href="http://gdown.com/data/wisegame/d1770c217f3d6500/QQyinle_901.apk" id="android_l"
                        style="display: inline-block">安装安卓版</a>&nbsp;&nbsp;
                    <a class="btn right" href="https://itunes.apple.com/cn/app/id416048305?mt=8" id="ios_l">安装ios版</a></div> -->
                <!-- 游戏详情介绍 -->
                <!-- <div class="game-info">-->

                <div class="bt-c">
                    <button type="button" class="btn btn-info">游戏介绍</button>
                    <div class="game-info-c">
                        <?php
                        if (have_posts()) {
                            while (have_posts()) {
                                the_post();
                                the_content();
                            }
                        }
                        ?>
                    </div>

                    <!-- 轮播图 -->

                    <div class="journalism ">
                        <h3 class="like">猜你喜欢</h3>
                        <?php //var_dump($f->ID , $post->ID); ?>
                        <?php if( !empty($f->ID) && ($f->ID != $post->ID) ){ ?>
                        <div class="guess">
                            <?php
//                             print"<pre>";
//                             var_dump($te);
                             if(!empty($te->term_id)){ ?>
                            <a href="/<?php echo $te->slug; ?>/<?php  echo $f->ID; ?>.html">
                                <img src="<?php echo $t; ?>" alt="">
                                    <p class="word"><?php echo $f->post_title; ?></p>
                            </a>
                            <p class="word"><?php echo wp_trim_words($f->post_content,72); ?></p>
                            <?php }else{ ?>
                                 <p class="word">暂无数据</p>
                                <?php } ?>
                        </div>
                        <?php }else{ ?>
                        <div class="guess">
                            <p class="word">暂无数据</p></div>
                        <?php } ?>

                        <?php if(!empty($related)){ ?>
                        <ul id="c_sub3" class="sy_ul cf ">

                            <?php foreach($related as $k=>$v) {
                                $tt = get_the_post_thumbnail_url($v->ID);
                                $cat = wp_get_post_categories( $v->ID );
                                $te = get_term_by('id' , $cat[0], 'category' ); ?>
                                <li col-md-4>
                                    <a href="/<?php echo $te->slug; ?>/<?php  echo $v->ID; ?>.html" class="ico_80" target="_blank" title="初体计划无限金币"><img src="<?php echo $tt; ?>" data-original="http://www.chinagames.net/images/gdmj.jpg" height="80" style="display: block;">
                                        <p class="name"><?php echo $v->post_title; ?></p>
                                    </a>
                                </li>
                            <?php } ?>

                        </ul>
                            <?php }else{ ?>

                                <?php } ?>
                        <?php
                        if ( isset($options['comments_open']) && $options['comments_open']=='1' ) {
                            comments_template();
                        }
                        ?>
                    </div>
<!--                    <script type="text/javascript" src="//1.ws-sky.com/common/openjs/static/c0sano.js?lgydhdc=pi"></script>-->

        </article>
    </div>
    <aside class="sidebar">
        <?php get_sidebar();?>
    </aside>
</div>
<!-- <script type='text/javascript' src='<?php echo get_template_directory_uri()?>/js/js/main.js'></script> -->
<!-- <script type='text/javascript' src='<?php echo get_template_directory_uri()?>/js/js/Comment.js'></script> -->

<?php
if(!$current_user->ID){
    $login_url = wp_login_url();
    $reg_url = wp_registration_url();
    ?>
    <div class="modal" id="login-modal">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title">请登录</h4>
                </div>
                <div class="modal-body login-modal-body">
                    <p class="word">您还未登录，请登录后再进行相关操作！</p>
                    <div class="login-btn">
                        <a class="btn btn-login" href="<?php echo $login_url;?>">登 录</a>
                        <a class="btn btn-register" href="<?php echo $reg_url;?>">注 册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php } get_footer();?>
