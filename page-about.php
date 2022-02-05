<?php
/*
Template Name: about
*/
?>

<?php get_header();?>
<div class="c-background--about"></div>
<div id="wrapper" class="p-wrapper">
  <div class="p-header--link">
    <p class="c-text--ttl c-head p-header__ttl--slide">About&thinsp;</p>
  </div>

  <div class="c-square c-bgc--white p-about">
    <?php the_post_thumbnail('thumbnail', array("class" => "p-about__thumbnail")) ;?>
    <div class="c-square p-about__description">

      <?php the_content(); ?>
    </div>
  </div>
  <?php get_template_part('includes/pager');?>

  <?php get_template_part('includes/footer');?>

  <?php get_footer();?>