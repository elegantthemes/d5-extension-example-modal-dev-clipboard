<?php

class D5I_D5IModalDevClipboard extends DiviExtension {

	/**
	 * The gettext domain for the extension's translations.
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $gettext_domain = 'd5i-modal-dev-clipboard';

	/**
	 * The extension's WP Plugin name.
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $name = 'd5i-modal-dev-clipboard';

	/**
	 * The extension's version
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $version = '1.0.0';

	/**
	 * D5I_D5IModalDevClipboard constructor.
	 *
	 * @param string $name
	 * @param array  $args
	 */
	public function __construct( $name = 'd5i-modal-dev-clipboard', $args = array() ) {
		$this->plugin_dir     = plugin_dir_path( __FILE__ );
		$this->plugin_dir_url = plugin_dir_url( $this->plugin_dir );

		parent::__construct( $name, $args );
	}
}

new D5I_D5IModalDevClipboard;
