<?php

function add_files(){ wp_enqueue_style('style',get_theme_file_uri().'/style.css',array());
wp_enqueue_style('main-style',get_theme_file_uri().'/src/css/style.css',array());
wp_enqueue_script('main-script',get_theme_file_uri().'/src/js/assets/3.6.0.min.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('background-script',get_theme_file_uri().'/src/js/assets/background.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('dot-script',get_theme_file_uri().'/src/js/assets/dot.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('assets-script',get_theme_file_uri().'/src/js/assets/scripts.js',array('jquery'),'1.0.0',true); 
// wp_enqueue_script('footer-script',get_theme_file_uri().'/javascript/footerFixed.js',array('jquery'),'1.0.0',true); 
}
add_action ('wp_enqueue_scripts','add_files');

?>