<?php
//テーマサポート=管理画面で操作できる項目を増やせる
add_theme_support('menus');
add_theme_support('title-tag');
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form' ) );

//メニュー位置管理（テーマの位置）
register_nav_menu( 'header-nav', ' ヘッダーナビゲーション ' );
register_nav_menu( 'footer-nav', ' フッターナビゲーション ' );
register_nav_menu( 'side-nav', 'サイドナビゲーション');

function add_files(){ wp_enqueue_style('style',get_theme_file_uri().'/style.css',array());
wp_enqueue_style('main-style',get_theme_file_uri().'/src/css/style.css',array());
wp_enqueue_script('main-script',get_theme_file_uri().'/src/js/assets/3.6.0.min.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('particle-script',get_theme_file_uri().'/src/js/assets/particlejs.min.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('gsap-script',get_theme_file_uri().'/src/js/assets/gsap.min.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('background-script',get_theme_file_uri().'/src/js/assets/background.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('dot-script',get_theme_file_uri().'/src/js/assets/dot.js',array('jquery'),'1.0.0',true); 
wp_enqueue_script('assets-script',get_theme_file_uri().'/src/js/assets/scripts.js',array('jquery'),'1.0.0',true); 
// wp_enqueue_script('footer-script',get_theme_file_uri().'/javascript/footerFixed.js',array('jquery'),'1.0.0',true); 
}
add_action ('wp_enqueue_scripts','add_files');

//wp_nav_menuのidとclass名を削除//wp_nav_menuのidとclass名を削除
// クラス名を削除
function remove_nav_class($class) {
    return $class = array();
}

add_filter("nav_menu_css_class", "remove_nav_class");

// id名を削除
function remove_nav_id($id) {
    return $id = array();
}

?>