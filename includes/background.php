<?php wp_reset_query();
if(is_front_page()){
get_template_part('includes/opening');
get_template_part('includes/background-parts');
} elseif (is_page()){
get_template_part('includes/background-parts');
} ;?>