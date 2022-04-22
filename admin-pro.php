<?php

/**
 * Admin Pro Plugin
 *
 * @package     Admin Pro
 * @author      IQL Technologies
 * @copyright   2022 IQL Technologies
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Admin Pro
 * Plugin URI:
 * Description: Admin Pro is probably the most advance admin UI available for WordPress. 
 * Version:     0.0.1
 * Author:      IQL Technologies
 * Author URI:  http://iqltech.com
 * Text Domain: admin-pro
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Block direct access to file
defined( 'ABSPATH' ) or die( 'Not Authorized!' );

// Plugin Defines
define( "ADMINPRO_FILE", __FILE__ );
define( "ADMINPRO_DIRECTORY", dirname(__FILE__) );
define( "ADMINPRO_TEXT_DOMAIN", dirname(__FILE__) );
define( "ADMINPRO_DIRECTORY_BASENAME", plugin_basename( ADMINPRO_FILE ) );
define( "ADMINPRO_DIRECTORY_PATH", plugin_dir_path( ADMINPRO_FILE ) );
define( "ADMINPRO_DIRECTORY_URL", plugins_url( null, ADMINPRO_FILE ) );

// Require the main class file
require_once( ADMINPRO_DIRECTORY . '/include/main-class.php' );
