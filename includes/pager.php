<?php wp_reset_query();
if(is_page(48)){
get_template_part('includes/pager-about');
} elseif (is_page(54)){
get_template_part('includes/pager-contact');
} elseif (is_page(58)){
get_template_part('includes/pager-products');
} elseif (is_page(16)){
get_template_part('includes/pager-skill');
};?>

<div class="p-nav--top-link">
  <a class="c-text--weight c-square c-button--red js-btn2 p-nav__btn" href="<?php echo esc_url(home_url()); ?>">
    <p>Home</p>
  </a>
</div>