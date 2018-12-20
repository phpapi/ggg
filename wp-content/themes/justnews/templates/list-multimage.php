<?php
global $options, $is_author;
$show_author = isset($options['show_author']) && $options['show_author']=='0' ? 0 : 1;
?>
    <li class="item item3">
        <div class="item-content<?php echo isset($is_author) && ($is_author || $post->post_status =='draft' || $post->post_status =='pending' ) ? ' item-edit' : '';?>">
            <?php if(isset($is_author) && ($is_author || $post->post_status =='draft' || $post->post_status =='pending' )){?>
                <a class="edit-link" href="<?php echo get_edit_link($post->ID);?>" target="_blank">编辑</a>
            <?php } ?>
            <h2 class="item-title">
                <a href="<?php the_permalink();?>" title="<?php echo esc_attr(get_the_title());?>" target="_blank">
                    <?php if(isset($is_author) && $post->post_status=='draft'){ echo '<span>【草稿】</span>'; }else if(isset($is_author) && $post->post_status=='pending'){ echo '<span>【待审核】</span>'; }?>
                    <?php the_title();?>
                </a>
            </h2>
            <a class="item-images" href="<?php the_permalink();?>" target="_blank">
                <?php
                preg_match_all('/<img[^>]*src=[\'"]([^\'"]+)[\'"].*>/iU', get_the_content(), $matches);
                $imgs = array_slice($matches[1], 0, 4);
                foreach($imgs as $img){
                    echo '<span>'.wpcom_lazyimg($img,get_the_title()).'</span>';
                }?>
            </a>
            <div class="item-excerpt">
                <?php the_excerpt(); ?>
            </div>
            <div class="item-meta">
                <?php if( $show_author && isset($options['member_enable']) && $options['member_enable']=='1' ){ ?>
                    <div class="item-meta-li author">
                        <?php
                        $author = get_the_author_meta( 'ID' );
                        $author_url = get_author_posts_url( $author );
                        ?>
                        <a data-user="<?php echo $author;?>" target="_blank" href="<?php echo $author_url; ?>" class="avatar">
                            <?php echo get_avatar( $author, 60 );?>
                        </a>
                        <a class="nickname" href="<?php echo $author_url; ?>" target="_blank"><?php echo get_the_author(); ?></a>
                    </div>
                <?php } ?>
                <?php
                $category = get_the_category();
                $cat = $category?$category[0]:'';
                if($cat){
                    ?>
                <a class="item-meta-li" href="<?php echo get_category_link($cat->cat_ID);?>" target="_blank"><?php echo $cat->name;?></a>
                <?php } ?>
                <span class="item-meta-li date"><?php echo format_date(get_post_time( 'U', false, $post ));?></span>

                <?php
                $post_metas = isset($options['post_metas']) ? $options['post_metas'] : array();
                if( !( $post_metas && is_array($post_metas) ) ){
                    $post_metas = array('v', 'z', 'c', 'h');
                }
                foreach ( $post_metas as $meta ) echo wpcom_post_metas($meta);
                ?>
            </div>
        </div>
    </li>
<?php if(is_home()||is_category()||is_archive()) do_action('wpcom_echo_ad', 'ad_flow');?>