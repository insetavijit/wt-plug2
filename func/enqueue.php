<?php
/*| date : 2018-03-01 12:19:12
||  List Down all Scripts you need to run
||  we got 2 Sections Here :
||  1. admin Enqueue
||  2. fontEnd enqueue
|*/
add_action( 'admin_enqueue_scripts', 'ins_admin_js_and_css'  );
function ins_admin_js_and_css(){
    ##################|  [ StyleSheet - fontEnd ]  |###################### 

        wp_register_style( 'adminStyle', get_template_directory_uri() . '/inc/css/adminStyle/adminStyle.css', array(), 'all' );
        wp_register_style( 'fa', get_template_directory_uri() . '/inc/vendor/font-awesome/css/font-awesome.min.css', array(), 'all' );
        wp_register_style( 'Bootstrap', get_template_directory_uri() . '/inc/vendor/bootstrap.min.css', array(), 'all' );

    ##################|  [ Scripts - fontEnd ]  |###################### 
        wp_register_script( 'adminScripts', get_template_directory_uri() . '/inc/js/adminScripts/adminScripts.js', array('jquery'), true );
        wp_register_script( 'Bootstrap', get_template_directory_uri() . '/inc/vendor/bootstrap.min.js', array('jquery'), true );

    ##################|  [ enqueing all ]  |###################### 
    
        $stylEnqueu_adm = [
            'adminStyle'
        ];
        $scriptEnque_adm = [
            'adminScripts'
        ];

        foreach ($stylEnqueu_adm as $style ) { wp_enqueue_style( $style ); }
        foreach ($scriptEnque_adm as $script ) { wp_enqueue_script( $script ); }
}



