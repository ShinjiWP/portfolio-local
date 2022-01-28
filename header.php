<!DOCTYPE html>
<html lang="<?php language_attributes();?>">

<head>
  <meta charset="utf-8" />
  <meta name="description" content="Shinjiのポートフォリオサイトになります" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ManStandsUp Portfolio</title>
  <link href="//fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
  <link href="//fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="icon" type="img.ico" href="<?php echo get_theme_file_uri('/src/image/favicon/favicon.ico');?>" />
  <link href=" //use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
  <?php wp_head();?>

</head>

<body>
  <!-- <div class=" loading">
  <p class="load-text anim-typewriter c-text--large c-text--weight c-text--underline">Portfolio</p>
  </div> -->
  <?php get_template_part('includes/background');?>