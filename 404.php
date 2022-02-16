<?php
/*
The template for displaying 404 pages (Not Found)
*/
?>


<?php get_header();?>
<div class="c-background--error p-error">
  <div class="p-error__bg">
    <img class="p-error__bg__gif" src=" <?php echo get_theme_file_uri('/src/image/gif/404ERROR.gif');?>" alt="">
  </div>

  <div class="p-nav--top-link">
    <a class="c-text--weight c-square c-button--red js-btn2 p-nav__btn" href="<?php echo esc_url(home_url()); ?>">
      <p>Home</p>
    </a>
  </div>


  <?php get_footer();?>