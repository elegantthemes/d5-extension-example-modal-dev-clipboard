<?php

class D5_D5ModalDevClipboard extends DiviExtension {

	/**
	 * The gettext domain for the extension's translations.
	 *
	 * @since 0.1.0
	 *
	 * @var string
	 */
	public $gettext_domain = 'd5-modal-dev-clipboard';

	/**
	 * The extension's WP Plugin name.
	 *
	 * @since 0.1.0
	 *
	 * @var string
	 */
	public $name = 'd5-modal-dev-clipboard';

	/**
	 * The extension's version
	 *
	 * @since 0.1.0
	 *
	 * @var string
	 */
	public $version = '0.1.0';

	/**
	 * D5_D5ModalDevClipboard constructor.
	 *
	 * @param string $name
	 * @param array  $args
	 */
	public function __construct( $name = 'd5-modal-dev-clipboard', $args = array() ) {
		$this->plugin_dir     = plugin_dir_path( __FILE__ );
		$this->plugin_dir_url = plugin_dir_url( $this->plugin_dir );

		parent::__construct( $name, $args );
	}

	/**
	 * Sets bundle dependencies.
	 *
	 * @since 0.1.0
	 */
	protected function _set_bundle_dependencies() {
		$this->_bundle_dependencies = array(
			// Extension bundle need to be outputted after Divi Builder's script so all the
			// prerequisite scripts have been available.
			'builder'  => array(
				'divi-visual-builder',
				'divi-object-renderer',
			),
			'frontend' => array(),
		);
	}
}

new D5_D5ModalDevClipboard;
