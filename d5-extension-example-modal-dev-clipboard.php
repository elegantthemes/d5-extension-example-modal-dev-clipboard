<?php
/*
Plugin Name: D5 Extension Example: Modal Dev Clipboard
Plugin URI:
Description: Modal that displays clipboard data
Version:     0.1.0
Author:      Elegant Themes
Author URI:  https://elegantthemes.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/


if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// Setup constants.
define( 'D5_MODAL_DEV_CLIPBOARD_URL', plugin_dir_url( __FILE__ ) );


/**
 * Enqueue Divi 5 Visual Builder Assets
 */
function d5_clipboard_enqueue_assets() {
	if ( et_core_is_fb_enabled() && et_builder_d5_enabled() ) {

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'    => 'd5-clipboard-builder-bar-button',
				'version' => '1.0.0',
				'script'  => [
					'src'                => D5_MODAL_DEV_CLIPBOARD_URL . 'build/add-bar-builder-buttons.js',
					'deps'               => [
						'divi-module-library',
						'divi-vendor-wp-hooks',
					],
					'enqueue_top_window' => false,
					'enqueue_app_window' => true,
					'args'               => [
						'in_footer' => true,
					],
				],
			]
		);

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'    => 'd5-bundle',
				'version' => '1.0.0',
				'script'  => [
					'src'                => D5_MODAL_DEV_CLIPBOARD_URL . 'build/bundle.js',
					'deps'               => [
						'divi-module-library',
						'divi-vendor-wp-hooks',
					],
					'enqueue_top_window' => false,
					'enqueue_app_window' => true,

				],
			]
		);

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'    => 'd5-style-bundle',
				'version' => '1.0.0',
				'style'   => [
					'src'                => D5_MODAL_DEV_CLIPBOARD_URL . 'build/vb-bundle.css',
					'deps'               => [],
					'enqueue_top_window' => true,
					'enqueue_app_window' => false,
				],

			]
		);

	}
}

add_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'd5_clipboard_enqueue_assets' );

