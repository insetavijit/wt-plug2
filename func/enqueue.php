<?php
/*| date : 2018-03-01 12:19:12
||  List Down all Scripts you need to run
||  we got 2 Sections Here :
||  1. admin Enqueue
||  2. fontEnd enqueue
|*/
add_action( 'admin_enqueue_scripts', 'ins_admin_js_and_css'  );
function ins_admin_js_and_css(){
    $incPath = explode( "\\", plugin_dir_path( __FILE__ ) );
    $pluginDir = $incPath [count( $incPath ) -2 ] ;
    ##################|  [ StyleSheet - fontEnd ]  |###################### 

        wp_register_style( 'adminStyle', plugins_url( $pluginDir ) . '/inc/css/adminStyle/adminStyle.css', array(), 'all' );
        wp_register_style( 'fa', plugins_url( $pluginDir ) . '/inc/vendor/font-awesome/css/font-awesome.min.css', array(), 'all' );
        wp_register_style( 'Bootstrap', plugins_url( $pluginDir ) . '/inc/vendor/bootstrap.min.css', array(), 'all' );

    ##################|  [ Scripts - fontEnd ]  |###################### 
        wp_register_script( 'adminScripts', plugins_url( $pluginDir ) . '/inc/js/adminScripts/adminScripts.js', array('jquery'), true );
        wp_register_script( 'Bootstrap', plugins_url( $pluginDir ) . '/inc/vendor/bootstrap.min.js', array('jquery'), true );

    ##################|  [ enqueing all ]  |###################### 
    
        $stylEnqueu_adm = [
            'adminStyle','Bootstrap','fa'
        ];
        $scriptEnque_adm = [
            'adminScripts','Bootstrap'
        ];

        foreach ($stylEnqueu_adm as $style ) { wp_enqueue_style( $style ); }
        foreach ($scriptEnque_adm as $script ) { wp_enqueue_script( $script ); }
}



