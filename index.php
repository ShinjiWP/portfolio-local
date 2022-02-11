<?php get_header();?>

<div class="c-background--circle"><img class="c-image--circle"
    src="<?php echo get_theme_file_uri('/src/image/png/circle.png');?>" alt=""></div>
<div id="wrapper" class="p-wrapper">
  <div class="c-grid__head p-header">
    <div class="p-line"></div>
    <p class="c-text--ttl c-head p-header__ttl"><span>P</span>roducts&thinsp;</p>
    <p class="c-text--ttl c-head p-header__ttl">Contact&thinsp;</p>
    <p class="c-text--ttl c-head p-header__ttl">About&thinsp;</p>
    <p class="c-text--ttl c-head p-header__ttl"><span class="c-dot"></span>Skill&thinsp;</p>
  </div>


  <div class="p-front-page">
    <img class="p-front-page__gif" src=" <?php echo get_theme_file_uri('/src/image/gif/portfolio.gif');?>" alt="">
  </div>
  <div class="p-nav">
    <a data-hover="Products" class="c-text--weight c-square c-button js-btn1 p-nav__btn"
      href="<?php the_permalink(58); ?>"><span>制</span><span>作</span><span>実</span><span>績</span>
      <div class="c-hover--btn1"></div>
    </a>
    <a data-hover="Contact" class="c-text--weight c-square c-button js-btn2 p-nav__btn"
      href="<?php the_permalink(54); ?>"><span>問</span><span>い</span><span>合</span><span>わ</span><span>せ</span>
      <div class="c-hover--btn2"></div>
    </a>
    <a data-hover="About" class="c-text--weight c-square c-button js-btn3 p-nav__btn"
      href="<?php the_permalink(48); ?>"><span>私</span><span>に</span><span>つ</span><span>い</span><span>て</span>
      <div class="c-hover--btn3"></div>
    </a>
    <a data-hover="Skill" class="c-text--weight c-square c-button js-btn4 p-nav__btn"
      href="<?php the_permalink(16); ?>"><span>ス</span><span>キ</span><span>ル</span>
      <div class="c-hover--btn4"></div>
    </a>
  </div>

  <?php get_template_part('includes/footer');?>

  <?php get_footer();?>