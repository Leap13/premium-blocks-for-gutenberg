<?php
/**
 *Config.
 *
 * @package
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Config' ) ) {

	/**
	 * Class Config.
	 */
	class Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Block Assets
		 *
		 * @var block_attributes
		 */
		public static $block_assets = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {
				self::$block_attributes = array(
					'premium/icon-list'         => array(
						'slug'        => '',
						'title'       => __( 'Icon List', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'left',
							'multiTitleCount'       => '1',
							'icons'            => array(
								array(
									'label'               => __( 'Title #1', 'premium-block-for-gutenberg' ),
									'image_icon'          => 'icon',
									'icon'                => 'fab fa-facebook',
									'image'               => '',
									'icon_color'          => '#3a3a3a',
									'icon_hover_color'    => '#3a3a3a',
									'icon_bg_color'       => '',
									'icon_bg_hover_color' => '',
									'item_bg_color'   => '',
									'item_bg_hover_color' => '',
									'label_color'         => '',
									'label_hover_color'   => '',
									'link'                => '#',
									'target'              => false,
								),
							),
							'layoutPos'              => 'block',
							'iconPosition'        => 'left',
							'linkTarget'             => 'false',
							'size'         => '20',
							'sizeType'         => 'px',
							'sizeMobile'       => '',
							'sizeTablet'       => '',
							'fontSize'         => '',
							'fontSizeType'     => 'px',
							'fontSizeMobile'   => '',
							'fontSizeTablet'   => '',
							'iconPaddingType'  => 'px',
							'iconPadding'           => '0',
							'iconPaddingMobile'           => '0',
							'iconPaddingTablet'     => '0',
							'titleLetter'       => '',
							'titleStyle'           => '0',
							'titleUpper'           => '0',
							'titleWeight'     => '500',
							'titleFont'         => '',
							'borderType'     => 'none',
							'borderWidth'   => '1',
							'borderRadius'   => '100',
							'borderColor'       => '',
							'iconSpacing'   => '10',
							'iconSpacingTablet' => '10',
							'iconSpacingMobile' => '10',
							'iconSpacingType' => 'px',
							'titlePaddingTablet' => 'px',
							'titlePadding' => '10',
							'titlePaddingTablet' => '10',
							'titlePaddingMobile' => '10',
							'titlePaddingType'  => 'px',
							'itemMarginL' => '1',
							'itemMarginR'       => '1',
							'itemMarginT'       => '1',
							'itemMarginB'       => '1  ',
							'marginTop'         => '',
							'marginTopType'     => 'px',
							'marginTopMobile'   => '',
							'marginTopTablet'   => '',
							'marginRight'         => '',
							'marginRightType'     => 'px',
							'marginRightMobile'   => '',
							'marginRightTablet'   => '',
							'marginBottom'         => '',
							'marginBottomType'     => 'px',
							'marginBottomMobile'   => '',
							'marginBottomTablet'   => '',
							'marginLeft'         => '',
							'marginLeftType'     => 'px',
							'marginLeftMobile'   => '',
							'marginLeftTablet'   => '',
						),
					),
					'premium/content-switcher'         => array(
						'slug'        => '',
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'center',
							'block_id'        => '',
							'firstLabel'   => 'Content #1',
							'secondLabel'  => 'Content #2',
							'showLabel'    => true,
							'display'     => 'inline',
							'firstContent' => 'Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.',
							'secondContent' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
							'switchCheck'  => false,
							'firstcontentlign' => 'center',
							'secondcontentlign' => 'center',
							'switchSizeType'  => 'px',
							'switchSize'  => '15',
							'switchSizeMobile' => '15',
							'switchSizeTablet' => '15',
							'bottomSpacing'  => '1',
							'bottomSpacingType' => 'px',
							'bottomSpacingMobile' => '1',
							'bottomSpacingTablet' => '1',
							'firstStateColor'  => '#6ec1e4',
							'secondStateColor'  => '#6ec1e4',
							'switcherBGColor'  => '#f2f2f2',
							'labelSpacingType'  => 'px',
							'labelSpacing'  => '15',
							'labelSpacingMobile' => '15',
							'labelSpacingTablet' => '15',
							'firstLabelColor'  => '#54595f',
							'firstLabelLetter' => '',
							'firstLabelStyle' => '',
							'firstLabelUpper' => '',
							'firstLabelWeight' => '500',
							'firstLabelfontSize' => '20',
							'firstLabelfontSizeType' => 'px',
							'firstLabelfontSizeMobile' => '20',
							'firstLabelfontSizeTablet' => '20',
							'secondLabelColor'  => '#54595f',
							'secondLabelLetter' => '',
							'secondLabelStyle' => '',
							'secondLabelUpper' => '',
							'secondLabelWeight' => '500',
							'secondLabelfontSize' => '20',
							'secondLabelfontSizeType' => 'px',
							'secondLabelfontSizeMobile' => '20',
							'secondLabelfontSizeTablet' => '20',
							'shadowColor' => '',
							'shadowBlur'  => '0',
							'shadowHorizontal'  => '0',
							'shadowVertical'  => '0',
							'firstContentHeight' => '50',
							'firstContentHeightType' => 'px',
							'firstContentHeightMobile' => '50',
							'firstContentHeightTablet' => '50',
							'firstContentColor' => '#54595f',
							'firstContentBGColor' => '',
							'secondContentHeight' => '50',
							'secondContentHeightType' => 'px',
							'secondContentHeightMobile' => '50',
							'secondContentHeightTablet' => '50',
							'secondContentColor' => '#54595f',
							'secondContentBGColor' => '',
							'firstpaddingTop'         => '',
							'firstpaddingTopType'     => 'px',
							'firstpaddingTopMobile'   => '',
							'firstpaddingTopTablet'   => '',
							'firstpaddingRight'         => '',
							'firstpaddingRightType'     => 'px',
							'firstpaddingRightMobile'   => '',
							'firstpaddingRightTablet'   => '',
							'firstpaddingBottom'         => '',
							'firstpaddingBottomType'     => 'px',
							'firstpaddingBottomMobile'   => '',
							'firstpaddingBottomTablet'   => '',
							'firstpaddingLeft'         => '',
							'firstpaddingLeftType'     => 'px',
							'firstpaddingLeftMobile'   => '',
							'firstpaddingLeftTablet'   => '',
							'secondpaddingTop'         => '',
							'secondpaddingTopType'     => 'px',
							'secondpaddingTopMobile'   => '',
							'secondpaddingTopTablet'   => '',
							'secondpaddingRight'         => '',
							'secondpaddingRightType'     => 'px',
							'secondpaddingRightMobile'   => '',
							'secondpaddingRightTablet'   => '',
							'secondpaddingBottom'         => '',
							'secondpaddingBottomType'     => 'px',
							'secondpaddingBottomMobile'   => '',
							'secondpaddingBottomTablet'   => '',
							'secondpaddingLeft'         => '',
							'secondpaddingLeftType'     => 'px',
							'secondpaddingLeftMobile'   => '',
							'secondpaddingLeftTablet'   => '',
						)
					),
				);
			}
			return self::$block_attributes;
		}
	}
}