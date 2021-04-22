<?php

/**
 * PBG_Blocks_Config.
 *
 * @package PBG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'PBG_Blocks_Config' ) ) {

	/**
	 * Class PBG_Blocks_Config.
	 */
	class PBG_Blocks_Config {


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
		 * @since 1.8.2
		 *
		 * @return array blocks attributes.
		 */
		public static function get_block_attributes() {
			if ( null === self::$block_attributes ) {

				self::$block_attributes = array(
					'premium/fancy-text'     => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate'            => false,
							'align'                   => 'center',
							'block_id'                => '',
							'fancyTextColor'          => '#6ec1e4',
							'fancyTextfontSize'       => '20',
							'fancyTextfontSizeMobile' => '20',
							'fancyTextfontSizeTablet' => '20',
							'fancyTextfontSizeUnit'   => 'px',
							'fancyTextWeight'         => '600',
							'fancyTextUpper'          => false,
							'fancyTextStyle'          => '',
							'fancyTextLetter'         => '',
							'fancyTextBGColor'        => '',
							'shadowColor'             => '',
							'shadowBlur'              => '1',
							'shadowHorizontal'        => '1',
							'shadowVertical'          => '1',
							'cursorColor'             => '#6ec1e4',
							'textColor'               => '#54595f',
							'textfontSize'            => '20',
							'textfontSizeMobile'      => '20',
							'textfontSizeTablet'      => '20',
							'textfontSizeUnit'        => 'px',
							'textWeight'              => '600',
							'textLetter'              => '',
							'textUpper'               => false,
							'textStyle'               => '',
							'textBGColor'             => '',
							'fancyTextBGOpacity'      => '1',
							'textBGOpacity'           => '1',
						),
					),
					'premium/accordion'      => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'titleSize'       => '20',
							'titleSizeUnit'   => 'px',
							'titleSizeTablet' => '20',
							'titleSizeMobile' => '20',
							'descSize'        => '20',
							'descSizeTablet'  => '20',
							'descSizeMobile'  => '20',
							'descSizeUnit'    => 'px',
							'classMigrate'    => false,
						),
					),
					'premium/banner'         => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate'    => false,
							'descSize'        => '20',
							'descSizeTablet'  => '20',
							'descSizeMobile'  => '20',
							'descSizeUnit'    => 'px',
							'titleSize'       => '20',
							'titleSizeUnit'   => 'px',
							'titleSizeTablet' => '20',
							'titleSizeMobile' => '20',
							'block_id'        => '',
						),
					),
					'premium/button'         => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate'   => false,
							'textSize'       => '20',
							'textSizeTablet' => '20',
							'textSizeMobile' => '20',
							'textSizeUnit'   => 'px',
							'block_id'       => '',
						),
					),
					'premium/countup'        => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'         => '',
							'classMigrate'     => false,
							'numberSize'       => '20',
							'numberSizeTablet' => '20',
							'numberSizeMobile' => '20',
							'numberSizeUnit'   => 'px',
							'prefixSize'       => '20',
							'prefixSizeTablet' => '20',
							'prefixSizeMobile' => '20',
							'prefixSizeUnit'   => 'px',
							'suffixSize'       => '20',
							'suffixSizeTablet' => '20',
							'suffixSizeMobile' => '20',
							'suffixSizeUnit'   => 'px',
							'titleSize'        => '20',
							'titleSizeTablet'  => '20',
							'titleSizeMobile'  => '20',
							'titleSizeUnit'    => 'px',
						),
					),
					'premium/dheading-block' => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'         => '',
							'classMigrate'     => false,
							'firstSize'        => '20',
							'firstSizeTablet'  => '20',
							'firstSizeMobile'  => '20',
							'firstSizeUnit'    => 'px',
							'secondSize'       => '20',
							'secondSizeTablet' => '20',
							'secondSizeMobile' => '20',
							'secondSizeUnit'   => 'px',
						),
					),
					'premium/icon-box'       => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'        => '',
							'classMigrate'    => false,
							'titleSize'       => '20',
							'titleSizeTablet' => '20',
							'titleSizeMobile' => '20',
							'titleSizeUnit'   => 'px',
							'descSize'        => '20',
							'descSizeTablet'  => '20',
							'descSizeMobile'  => '20',
							'descSizeUnit'    => 'px',
							'btnSize'         => '20',
							'btnSizeTablet'   => '20',
							'btnSizeMobile'   => '20',
							'btnSizeUnit'     => 'px',
						),
					),
					'premium/pricing-table'  => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'            => '',
							'classMigrate'        => false,
							'titleSize'           => '20',
							'titleSizeTablet'     => '20',
							'titleSizeMobile'     => '20',
							'titleSizeUnit'       => 'px',
							'descSize'            => '20',
							'descSizeTablet'      => '20',
							'descSizeMobile'      => '20',
							'descSizeUnit'        => 'px',
							'slashSize'           => '20',
							'slashSizeTablet'     => '20',
							'slashSizeMobile'     => '20',
							'slashSizeUnit'       => 'px',
							'currSize'            => '20',
							'currSizeTablet'      => '20',
							'currSizeMobile'      => '20',
							'currSizeUnit'        => 'px',
							'valSize'             => '20',
							'valSizeTablet'       => '20',
							'valSizeMobile'       => '20',
							'valSizeUnit'         => 'px',
							'divSize'             => '20',
							'divSizeTablet'       => '20',
							'divSizeMobile'       => '20',
							'divSizeUnit'         => 'px',
							'durSize'             => '20',
							'durSizeTablet'       => '20',
							'durSizeMobile'       => '20',
							'durSizeUnit'         => 'px',
							'btnSize'             => '20',
							'btnSizeTablet'       => '20',
							'btnSizeMobile'       => '20',
							'btnSizeUnit'         => 'px',
							'badgeTextSize'       => '20',
							'badgeTextSizeTablet' => '20',
							'badgeTextSizeMobile' => '20',
							'badgeTextUnit'       => 'px',
							'listSize'            => '20',
							'listSizeTablet'      => '20',
							'listSizeMobile'      => '20',
							'listSizeUnit'        => 'px',
						),
					),
					'premium/testimonial'    => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'            => '',
							'classMigrate'        => false,
							'authorSize'          => '20',
							'authorSizeTablet'    => '20',
							'authorSizeMobile'    => '20',
							'authorSizeUnit'      => 'px',
							'authorComSize'       => '20',
							'authorComSizeTablet' => '20',
							'authorComSizeMobile' => '20',
							'authorComSizeUnit'   => 'px',
							'bodySize'            => '20',
							'bodySizeTablet'      => '20',
							'bodySizeMobile'      => '20',
							'bodySizeUnit'        => 'px',
						),
					),
					'premium/video-box'      => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'            => '',
							'classMigrate'        => false,
							'videoDescSize'       => '20',
							'videoDescSizeTablet' => '20',
							'videoDescSizeMobile' => '20',
							'videoDescSizeUnit'   => 'px',
						),
					),
					'premium/title'          => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate'             => false,
							'align'                    => 'center',
							'block_id'                 => '',
							'stripeWidth'              => '120',
							'stripeHeight'             => '5',
							'stripeTopSpacing'         => '0',
							'stripeBottomSpacing'      => '0',
							'titleColor'               => '#6ec1e4',
							'titleWeight'              => '600',
							'titleLetter'              => '0',
							'titleUpper'               => false,
							'titleStyle'               => 'normal',
							'titlefontSize'            => '30',
							'titlefontSizeMobile'      => '30',
							'titlefontSizeTablet'      => '30',
							'titlefontSizeType'        => 'px',
							'titleshadowBlur'          => '1',
							'titleshadowColor'         => 'undefined',
							'titleshadowHorizontal'    => '1',
							'titleshadowVertical'      => '1',
							'stripeColor'              => '#6ec1e4',
							'titleborderType'          => 'none',
							'titleborderRadius'        => '0',
							'titleborderColor'         => '#d4d4d4',
							'BGColor'                  => '#54595f',
							'lineColor'                => '#6ec1e4',
							'triangleColor'            => '#6ec1e4',
							'iconColor'                => '#6ec1e4',
							'iconSize'                 => '30',
							'iconSizeType'             => 'px',
							'iconSizeTablet'           => '30',
							'iconSizeMobile'           => '30',
							'iconborderType'           => 'none',
							'iconborderRadius'         => '0',
							'iconborderWidth'          => '1',
							'iconborderColor'          => '#d4d4d4',
							'iconshadowBlur'           => '1',
							'iconshadowColor'          => 'undefined',
							'iconshadowHorizontal'     => '1',
							'iconshadowVertical'       => '1',
							'iconBGColor'              => '',
							'image'                    => '',
							'BackText'                 => '',
							'verticalText'             => '0',
							'horizontalText'           => '0',
							'textBackColor'            => '',
							'textWidth'                => 'auto',
							'rotateText'               => '0',
							'textBackfontSize'         => '20',
							'textBackfontSizeType'     => 'px',
							'textBackWeight'           => '',
							'textBackStyle'            => '',
							'textBackUpper '           => false,
							'textBackLetter'           => '',
							'textBackshadowHorizontal' => '',
							'textBackshadowVertical'   => '',
							'textBackshadowBlur'       => '',
							'textBackshadowColor'      => '',
							'blend'                    => '',
							'strokeColor'              => '',
							'strokeFull'               => '0',
							'zIndex'                   => '',
							'titlePaddingT'            => '',
							'titlePaddingR'            => '',
							'titlePaddingB'            => '',
							'titlePaddingL'            => '',
							'titlePaddingTTablet'      => '',
							'titlePaddingRTablet'      => '',
							'titlePaddingBTablet'      => '',
							'titlePaddingLTablet'      => '',
							'titlePaddingTMobile'      => '',
							'titlePaddingRMobile'      => '',
							'titlePaddingBMobile'      => '',
							'titlePaddingLMobile'      => '',
							'titlePaddingType'         => 'px',
							'titleMarginT'             => '1',
							'titleMarginR'             => '1',
							'titleMarginB'             => '1',
							'titleMarginL'             => '1',
							'titleMarginTTablet'       => '0',
							'titleMarginRTablet'       => '0',
							'titleMarginBTablet'       => '0',
							'titleMarginLTablet'       => '0',
							'titleMarginTMobile'       => '0',
							'titleMarginRMobile'       => '0',
							'titleMarginBMobile'       => '0',
							'titleMarginLMobile'       => '0',
							'titleMarginType'          => 'px',
							'iconPaddingT'             => '1',
							'iconPaddingR'             => '1',
							'iconPaddingL'             => '1',
							'iconPaddingB'             => '1',
							'iconPaddingTTablet'       => '0',
							'iconPaddingRTablet'       => '0',
							'iconPaddingLTablet'       => '0',
							'iconPaddingBTablet'       => '0',
							'iconPaddingTMobile'       => '0',
							'iconPaddingRMobile'       => '0',
							'iconPaddingLMobile'       => '0',
							'iconPaddingBMobile'       => '0',
							'iconSpacingT'             => '1',
							'iconSpacingR'             => '1',
							'iconSpacingB'             => '1',
							'iconSpacingL'             => '1',
							'iconSpacingTTablet'       => '0',
							'iconSpacingRTablet'       => '0',
							'iconSpacingBTablet'       => '0',
							'iconSpacingLTablet'       => '0',
							'iconSpacingTMobile'       => '0',
							'iconSpacingRMobile'       => '0',
							'iconSpacingBMobile'       => '0',
							'iconSpacingLMobile'       => '0',
							'iconSpacingType'          => 'px',
							'iconPaddingType'          => 'px',
							'titleBorderLeft'          => '0',
							'titleBorderTop'           => '0',
							'titleBorderRight'         => '0',
							'titleBorderBottom'        => '0',
							'iconBorderTop'            => '1',
							'iconBorderRight'          => '1',
							'iconBorderBottom'         => '1',
							'iconBorderLeft'           => '1',
							'horizontalU'              => 'px',
							'verticalU'                => 'px',
						),
					),
				);
			}

			return self::$block_attributes;
		}
	}
}
