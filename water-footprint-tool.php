<?php
/**
 * @package Water_Footprint_Tool
 * @version 0.1
 */
/*
Plugin Name: Water Footprint Tool
Plugin URI: http://github.com/emitche/water-footprint/
Description: A simple plugin to display the water footprint of specific foods.
Author: Elizabeth Mitchell
Version: 0.1
Author URI: http://github.com/emitche
*/

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function water_footprint_tool_shortcode() {
    return "tool.php";
}

function water_footprint_tool_register_shortcode() {
    add_shortcode( 'water-footprint-tool', 'water_footprint_tool_shortcode' );
}

add_action( 'init', 'water_footprint_tool_register_shortcode' );

function load_water_footprint_tool(){
  ob_start();
  include('tool.php');
  return ob_get_clean();
}

?>
