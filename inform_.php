<?php 
/* 
	Plugin Name: inform_
	Plugin URI :
	Description : wp-plug a wordpress plugin seed
	Version : 1.0.0.0
	Author: avijit sarkar (change it) 
	Author URI : https://github.com/insetavijit/ (change it)
	Seed URI : https://github.com/insetavijit/wt-plug#readme
	License : GPL
	Text Domain : inset
*/ 
if(!defined('ABSPATH')){ exit(); }

# Custom functions : 
function plug_infos( $q = 'name' ){ 
$infos =  get_plugin_data( __FILE__ ) ;
$infos['url'] = plugins_url().'/'.$infos['Name'];
$infos['name'] = $infos['Name'];
$infos['base'] = plugin_dir_path( __FILE__ );
return ( !$infos[$q] ) ? 0 : $infos[$q];
}
# Plugin Starting Point : 


require_once ( plugin_dir_path( __FILE__ ) .'./func/enqueue.php'); # add other funcs just like that
require_once ( plugin_dir_path( __FILE__ ) .'./func/add_wc_page.php');