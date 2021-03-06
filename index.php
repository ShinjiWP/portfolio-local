<?php get_header();?>

<div id="wrapper" class="p-wrapper">

  <div class="p-header">
    <div class="p-line"></div>
    <p class="c-text--ttl c-head p-header__ttl">
      <span>P</span>roducts&thinsp;
      <a class="js-ttl js-ttl-1 js-btn1" href="<?php the_permalink(58); ?>"></a>
    </p>
    <p class=" c-text--ttl c-head p-header__ttl">Contact&thinsp;
      <a class="js-ttl js-ttl-2 js-btn2" href="<?php the_permalink(54); ?>"></a>
    </p>
    <p class="c-text--ttl c-head p-header__ttl">About&thinsp;
      <a class="js-ttl js-ttl-3 js-btn3" href="<?php the_permalink(48); ?>"></a>
    </p>
    <p class="c-text--ttl c-head p-header__ttl"><span class="c-dot"></span>Skill&thinsp;
      <a class="js-ttl js-ttl-4 js-btn4" href="<?php the_permalink(16); ?>"></a>
    </p>
  </div>


  <div class="p-front-page">
    <img class="c-animation--forward-rotation p-front-page__circle"
      src="<?php echo get_theme_file_uri('/src/image/png/circle-out.png');?>" alt="">
    <img class="c-animation--back-rotation p-front-page__circle"
      src="<?php echo get_theme_file_uri('/src/image/png/circle-in.png');?>" alt="">
    <img class="c-animation--text-rotation p-front-page__circle"
      src="<?php echo get_theme_file_uri('/src/image/png/circle-text.png');?>" alt="">
    <img class="c-animation--inner-rotation p-front-page__circle"
      src="<?php echo get_theme_file_uri('/src/image/png/circle-inner.png');?>" alt="">
    <img class="c-animation--inner2-rotation p-front-page__circle"
      src="<?php echo get_theme_file_uri('/src/image/png/circle-inner2.png');?>" alt="">
    <img class="c-animation--inner3-rotation p-front-page__circle"
      src="<?php echo get_theme_file_uri('/src/image/png/circle-inner3.png');?>" alt="">
    <img class="p-front-page__gif" src=" <?php echo get_theme_file_uri('/src/image/gif/trigger.gif');?>" alt="">
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