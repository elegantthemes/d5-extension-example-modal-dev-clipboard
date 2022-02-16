<?php

class D5I_HelloWorld extends ET_Builder_Module {

	public $slug       = 'd5i_hello_world';
	public $vb_support = 'on';

	protected $module_credits = array(
		'module_uri' => '',
		'author'     => 'Elegant Themes',
		'author_uri' => 'https://elegantthemes.com',
	);

	public function init() {
		$this->name = esc_html__( 'Hello World', 'd5i-d5i-modal-dev-clipboard' );
	}

	public function get_fields() {
		return array(
			'content' => array(
				'label'           => esc_html__( 'Content', 'd5i-d5i-modal-dev-clipboard' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Content entered here will appear inside the module.', 'd5i-d5i-modal-dev-clipboard' ),
				'toggle_slug'     => 'main_content',
			),
		);
	}

	public function render( $attrs, $content = null, $render_slug ) {
		return sprintf( '<h1>%1$s</h1>', $this->props['content'] );
	}
}

new D5I_HelloWorld;
