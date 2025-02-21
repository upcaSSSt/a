/*
 * Plugin Name:       myplugin
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Handle the basics with this plugin.
 * Version:           0.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            John Smith
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       myplugin
 * Domain Path:       /languages
 */
<?php

/**
 * Register the "book" custom post type
 */
function pluginprefix_setup_post_type() {
	register_post_type( 'book', ['public' => true ] );
}
add_action( 'init', 'pluginprefix_setup_post_type' );


/**
 * Activate the plugin.
 */
function pluginprefix_activate() {
	// Trigger our function that registers the custom post type plugin.
	pluginprefix_setup_post_type();
	// Clear the permalinks after the post type has been registered.
	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'pluginprefix_activate' );

/**
 * Deactivation hook.
 */
function pluginprefix_deactivate() {
	// Unregister the post type, so the rules are no longer in memory.
	unregister_post_type( 'book' );
	// Clear the permalinks to remove our post type's rules from the database.
	flush_rewrite_rules();
}
register_deactivation_hook( __FILE__, 'pluginprefix_deactivate' );
