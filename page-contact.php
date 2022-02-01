<?php
/*
Template Name: contact
*/
?>

<?php get_header();?>
<div class="c-background--contact"></div>
<div id="content"></div>
<div id="wrapper" class="p-wrapper">
  <div class="p-header--link">
    <p class="c-text--ttl c-head p-header__ttl--slide">Contact</p>
  </div>
  <div class="c-square p-contact">
    <?php the_content(); ?>
  </div>
  <?php get_template_part('includes/pager');?>

  <?php get_template_part('includes/footer');?>

  <?php get_footer();?>