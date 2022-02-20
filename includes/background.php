<?php wp_reset_query();
if(is_front_page()){
get_template_part('includes/background-parts');
get_template_part('includes/loading');
} elseif (is_page()){
get_template_part('includes/background-parts');
}elseif (is_404()){
get_template_part('includes/background-null');
} ;?>