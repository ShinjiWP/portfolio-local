<?php
/*
Template Name: products
*/
?>
<?php get_header();?>
<div id="content"></div>
<div class="c-background--products"></div>
<div id="wrapper" class="p-wrapper">
  <div class="p-header--link">
    <p class="c-text--ttl c-head p-header__ttl--slide"><span>P</span>roducts&thinsp;</p>
  </div>

  <div class="p-products">
    <?php
	$wp_query = new WP_Query();
	$my_posts = array(
		'post_type' => 'post', //カテゴリは特定せず
		'posts_per_page'=> '100', //とりあえず100件
	);
	$wp_query->query( $my_posts );
	if( $wp_query->have_posts() ): while( $wp_query->have_posts() ) : $wp_query->the_post();
?>

    <div class="p-products__item">
      <div class=" c-square p-products__link">

        <?php the_post_thumbnail('thumbnail', array("class" => "p-products__thumbnail")) ;?>

        <a class="c-text--link" href="<?php echo get_field('url'); ?>">
          <div class="c-square--bottom p-products__description">
            <h2 class="c-head--products"><?php the_title(); ?></h2>
            <?php the_content();?>
          </div>
        </a>

      </div>
    </div>

    <?php endwhile; endif; wp_reset_postdata(); ?>
  </div>

  <?php get_template_part('includes/pager');?>

  <?php get_template_part('includes/footer');?>

  <?php get_footer();?>