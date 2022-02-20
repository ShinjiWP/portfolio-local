<?php
/*
Template Name: contact
*/
?>

<?php get_header();?>
<div id="content"></div>
<div class="c-background--contact"></div>
<div id="wrapper" class="p-wrapper">
  <div class="p-header--link">
    <p class="c-text--ttl c-head p-header__ttl--slide">Contact&thinsp;</p>
  </div>
  <div class="c-square c-bgc--white p-contact">
    <?php the_content(); ?>
  </div>
  <?php get_template_part('includes/pager');?>

  <?php get_template_part('includes/footer');?>

  <?php get_footer();?>