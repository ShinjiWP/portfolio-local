<?php
/*
Template Name: products
*/
?>
<?php get_header();?>

<div class="c-background--products"></div>
<div id="wrapper" class="p-wrapper">
  <div class="p-header--link">
    <p class="c-text--ttl c-head p-header__ttl--products"><span>P</span>roducts</p>
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
      <div class="c-square p-products__link">

        <?php the_post_thumbnail('thumbnail', array("class" => "p-products__thumbnail")) ;?>

        <div class="c-square p-products__description">
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
          <p><?php the_content();?></p>
        </div>

      </div>
    </div>

    <?php endwhile; endif; wp_reset_postdata(); ?>

  </div>
  <div class="p-nav--link">
    <a class="c-text--weight c-square button js-btn2 p-nav__btn" href="contact.html">
      <p>Contact</p>
    </a>
    <a class="c-text--weight c-square button js-btn3 p-nav__btn" href="#">
      <p>About</p>
    </a>
    <a class="c-text--weight c-square button js-btn4 p-nav__btn" href="skill.html">
      <p>Skill</p>
    </a>
  </div>
  <?php get_template_part('includes/footer');?>

  <?php get_footer();?>