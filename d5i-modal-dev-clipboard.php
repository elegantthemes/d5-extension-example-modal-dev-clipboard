<?php
/*
Plugin Name: D5i Modal Dev Clipboard
Plugin URI:
Description: Modal that displays clipboard data
Version:     1.0.0
Author:      Elegant Themes
Author URI:  https://elegantthemes.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: d5i-modal-dev-clipboard
Domain Path: /languages

D5i Modal Dev Clipboard is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

D5i Modal Dev Clipboard is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with D5i Modal Dev Clipboard. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/


if ( ! function_exists( 'd5i_initialize_extension' ) ):
/**
 * Creates the extension's main class instance.
 *
 * @since 1.0.0
 */
function d5i_initialize_extension() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/D5IModalDevClipboard.php';
}
add_action( 'divi_extensions_init', 'd5i_initialize_extension' );
endif;

/**
 * Add custom item on admin bar for `Clipboard`
 *
 * @since ??
 *
 */
function d5i_admin_bar_modal_link( $admin_bar ) {

	// Only display this admin bar item on D5i Visual Builder.
	if ( et_builder_d5_enabled() && et_core_is_fb_enabled() ) {
    $args = array(
        'id'    => 'd5i-modal-dev-clipboard',
        'title' => 'Clipboard',
        'href'  => '#d5i-clipboard'
    );
    $admin_bar->add_node($args);
	}
}
add_action( 'admin_bar_menu', 'd5i_admin_bar_modal_link', 600 );
