<?php
/*
Template Name: archive
*/
?>
<?php get_header();?>


<div class="c-background--products"></div>
<div id="wrapper" class="p-wrapper">
  <div class="p-header--link">
    <p class="c-text--ttl c-head p-header__ttl--products"><span>P</span>roducts</p>
  </div>

  <div class="p-products">
    <div class="c-square p-products__link">
      <?php the_post();?>
      <?php the_title();?>
    </div>
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