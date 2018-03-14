<?php 


add_action( 'admin_menu' , 'ins_add_menu_homePage' );

function ins_add_menu_homePage(){
    $incPath = explode( "\\", plugin_dir_path( __FILE__ ) );
    // $incPath = plugin_dir_path( __FILE__ );
    // print_r( $incPath );
    add_menu_page(
        // $page_title:string, 
        __( 'wt-seed wellcome page', 'inset'),
        // $menu_title:string, 
        __( 'wt-seed', 'inset'),
        // $capability:string, 
        'manage_options',
        // $menu_slug:string,
        'ins_wt-seed',
        // $function:callable, 
        'ins_wellcome_page_setup',
        // $icon_url:string,
        plugins_url( $incPath [count( $incPath ) -2 ] )."/inc/img/ins_.png"
        // $position:integer|null
    );
}

function ins_wellcome_page_setup(){
    echo 'hi';
}

