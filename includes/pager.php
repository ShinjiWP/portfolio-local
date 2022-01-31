<!-- <?php if(is_page(58)){
get_template_part('includes/pager-products');
} elseif (is_page(54)){
get_template_part('includes/pager-contact');
} elseif (is_page(58)){
get_template_part('includes/pager-products');
} elseif (is_page(16)){
get_template_part('includes/pager-skill');
};?> -->


<?php if(is_page_template('products')){
  get_template_part('includes/pager-products');

};?>