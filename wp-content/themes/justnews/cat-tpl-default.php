<?php
get_header();
$banner = get_term_meta( $cat, 'wpcom_banner', true );
$term = get_term_by('slug', $category_name, 'category');
$name = $term->name;
if(empty($term->sublink)) {$sub=$term->term_id;}else{$sub=$term->sublink;}
$cc = get_terms_by_sublink($sub);
if($banner){
    $banner_height = get_term_meta( $cat, 'wpcom_banner_height', true );
    $text_color = get_term_meta( $cat, 'wpcom_text_color', true );
    $bHeight = intval($banner_height ? $banner_height : 300);
    $bColor = ($text_color ? $text_color : 0) ? ' banner-white' : '';
    ?>
    <div <?php echo wpcom_lazybg($banner, 'banner'.$bColor, 'height:'.$bHeight.'px;');?>>
        <div class="banner-inner">
            <h1><?php single_cat_title(); ?></h1>
            <div class="page-description"><?php echo category_description();?></div>
        </div>
    </div>
<?php } ?>
    <div class="main container">
        <div class="content">
            <div class="sec-panel archive-list">
<!--                --><?php //if( (in_array($category_name, ['tuijian','game','puke','majiang','qipai']) )){ ?>
                    <!-- <script type='text/javascript' src="/game1/js/index.js"></script> -->
                    <div class="sec-panel-head">
                        <ul class="list tabs" id="j-newslist">
<!--                            --><?php //if($category_name == 'game') $category_name='tuijian';?>
                            <?php foreach($cc as $k=>$v) {?>
                                <?php  $sub = get_cat_name( $v['term_id'] ); $link = get_category_link($v['term_id']); ?>
                                <li class="tab <?php if($category_name==$v['slug'] ){ ?> active <?php } ?>"><a data-id="0" href="<?php echo $link; ?>"> <?php echo $sub; ?> </a></li>
                            <?php } ?>
                        </ul>
                    </div>
<!--                --><?php //} ?>
                <?php if($banner==''){ ?>
                    <div class="sec-panel-head">
                        <h1><?php single_cat_title(); ?></h1>
                    </div>
                <?php } ?>
<table width="625" border="0" cellpadding="0" cellspacing="0" style="margin:20px 0 0 15px;">

  <tr>
    <td width="300"><!-- 刚哥哥300a --><script type="text/javascript" src="//1.ws-sky.com/common/web/a16nz.js?to=dggxnxu"></script></td>
    <td align="right" width="300"><a href="http://www.ganggg.com/url/3.php" target="_blank"><img src="https://img.ganggg.com/uploads/images/zt/350ty300.gif" /></a>
	</td>
  </tr>
</table>
                <ul class="article-list">
                    <?php while( have_posts() ) : the_post();?>
                        <?php get_template_part( 'templates/list' , 'default' ); ?>
                    <?php endwhile; ?>
                </ul>
                <?php wpcom_pagination(5);?>
                <div style="margin:15px;height:95px; width:830px; overflow:hidden;"><a href="http://www.ganggg.com/url/3.php" target="_blank"><img src="https://img.ganggg.com/uploads/images/zt/350ty830.gif" /></a>
</div>
            </div>
        </div>
        <aside class="sidebar">
            <?php get_sidebar();?>
        </aside>
    </div>
<?php get_footer();?>