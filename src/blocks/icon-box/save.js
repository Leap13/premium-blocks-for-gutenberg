import classnames from 'classnames'
import hexToRgba from 'hex-to-rgba'
const { __ } = wp.i18n;

const { RichText } = wp.blockEditor;
const { Fragment } = wp.element;

const save = props => {

    const { className } = props;

    const {
        block_id,
        borderIconBox,
        btnBorderIconBox,
        align,
        iconChecked,
        iconImage,
        iconImgId,
        iconImgUrl,
        iconType,
        selectedIcon,
        hoverEffect,
        iconPos,
        iconHPos,
        iconVPos,
        iconSize,
        iconRadius,
        iconColor,
        iconColorH,
        iconBackColor,
        iconBackColorH,
        iconOpacity,
        iconOpacityH,
        titleChecked,
        titleText,
        titleTag,
        titleColor,
        titleColorH,
        titleFont,
        titleSizeUnit,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleShadowBlur,
        titleShadowColor,
        titleShadowHorizontal,
        titleShadowVertical,
        titleMarginT,
        titleMarginB,
        descChecked,
        descText,
        descColor,
        descFont,
        descSizeUnit,
        descSize,
        descSizeTablet,
        descSizeMobile,
        descLine,
        descWeight,
        btnChecked,
        btnEffect,
        effectDir,
        btnTarget,
        btnText,
        btnLink,
        btnSizeUnit,
        btnSize,
        btnSizeTablet,
        btnSizeMobile,
        btnUpper,
        btnWeight,
        btnLetter,
        btnColor,
        btnStyle,
        btnHoverColor,
        btnBack,
        btnOpacity,
        btnHoverBack,
        btnHoverBorder,
        btnBorderColor,
        btnBorderWidth,
        btnBorderTop,
        btnBorderRight,
        btnBorderBottom,
        btnBorderLeft,
        btnBorderRadius,
        btnBorderType,
        btnPadding,
        btnPaddingU,
        btnMarginT,
        btnMarginB,
        btnShadowBlur,
        btnShadowColor,
        btnShadowHorizontal,
        btnShadowVertical,
        btnShadowPosition,
        imageID,
        imageURL,
        fixed,
        backColor,
        backOpacity,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        borderRadius,
        borderColor,
        marginT,
        marginR,
        marginB,
        marginL,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingU,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition,
        hoverShadowBlur,
        hoverShadowColor,
        hoverShadowHorizontal,
        hoverShadowVertical,
        hoverShadowPosition,
        hideDesktop,
        hideTablet,
        hideMobile,
        mouseTilt,
        reverse,
        lottieURL,
        loopLottie,
        reverseLottie,
        titleLabel,
        descAlign,
        wholeLink,
        btnTxt,
        showBackIcon,
        keepBtn,
        btnPosition,
        showIcon,
        btnIcon,
        target,
        iconPosition,
        btnVerPos,
        btnIconU,
        btnIconSize,
        iconSpace,
        hOffsetUnit,
        hOffset,
        hOffsetTablet,
        hOffsetMobile,
        vOffsetUnit,
        vOffset,
        vOffsetTablet,
        vOffsetMobile,
        iconBackOpacity,
        iconBackOpacityTablet,
        iconBackOpacityMobile,
        iconRotate,
        iconRotateMobile,
        iconRotateTablet,
        iconborderType,
        iconborderTypeH,
        iconborderTop,
        iconborderTopH,
        iconborderRight,
        iconborderRightH,
        iconborderBottom,
        iconborderBottomH,
        iconborderLeft,
        iconborderLeftH,
        iconborderColor,
        iconborderColorH,
        iconborderRadius,
        iconborderRadiusH,
        iconShadowColor,
        iconShadowColorH,
        iconShadowBlur,
        iconShadowBlurH,
        iconShadowHorizontal,
        iconShadowHorizontalH,
        iconShadowVertical,
        iconShadowVerticalH,
        iconShadowPosition,
        iconShadowPositionH,
        iconMarginType,
        iconMarginTypeH,
        iconMarginTop,
        iconMarginTopH,
        iconMarginTopTablet,
        iconMarginTopTabletH,
        iconMarginTopMobile,
        iconMarginTopMobileH,
        iconMarginRight,
        iconMarginRightH,
        iconMarginRightTablet,
        iconMarginRightTabletH,
        iconMarginRightMobile,
        iconMarginRightMobileH,
        iconMarginBottom,
        iconMarginBottomH,
        iconMarginBottomTablet,
        iconMarginBottomTabletH,
        iconMarginBottomMobile,
        iconMarginBottomMobileH,
        iconMarginLeft,
        iconMarginLeftH,
        iconMarginLeftTablet,
        iconMarginLeftTabletH,
        iconMarginLeftMobile,
        iconMarginLeftMobileH,
        iconPaddingType,
        iconPaddingTypeH,
        iconPaddingTop,
        iconPaddingTopH,
        iconPaddingTopTablet,
        iconPaddingTopTabletH,
        iconPaddingTopMobile,
        iconPaddingTopMobileH,
        iconPaddingRight,
        iconPaddingRightH,
        iconPaddingRightTablet,
        iconPaddingRightTabletH,
        iconPaddingRightMobile,
        iconPaddingRightMobileH,
        iconPaddingBottom,
        iconPaddingBottomH,
        iconPaddingBottomTablet,
        iconPaddingBottomTabletH,
        iconPaddingBottomMobile,
        iconPaddingBottomMobileH,
        iconPaddingLeft,
        iconPaddingLeftH,
        iconPaddingLeftTablet,
        iconPaddingLeftTabletH,
        iconPaddingLeftMobile,
        iconPaddingLeftMobileH,
        titleBack,
        titleOpacity,
        titleBorderType,
        titleBorderWidth,
        titleBorderTop,
        titleBorderRight,
        titleBorderBottom,
        titleBorderLeft,
        titleBorderColor,
        titleBorderRadius,
        titleMarginType,
        titleMarginTop,
        titleMarginRight,
        titleMarginBottom,
        titleMarginLeft,
        titleMarginTopTablet,
        titleMarginRightTablet,
        titleMarginBottomTablet,
        titleMarginLeftTablet,
        titleMarginTopMobile,
        titleMarginRightMobile,
        titleMarginBottomMobile,
        titleMarginLeftMobile,
        titlePaddingTop,
        titlePaddingRight,
        titlePaddingBottom,
        titlePaddingLeft,
        titlePaddingTopTablet,
        titlePaddingRightTablet,
        titlePaddingBottomTablet,
        titlePaddingLeftTablet,
        titlePaddingTopMobile,
        titlePaddingRightMobile,
        titlePaddingBottomMobile,
        titlePaddingLeftMobile,
        titlePaddingType,
        labelColor,
        labelSizeUnit,
        labelSize,
        labelSizeMobile,
        labelSizeTablet,
        labelWeight,
        labelStyle,
        labelLetter,
        labelLine,
        labelUpper,
        labelMarginType,
        labelMarginTop,
        labelMarginRight,
        labelMarginBottom,
        labelMarginLeft,
        labelMarginTopTablet,
        labelMarginRightTablet,
        labelMarginBottomTablet,
        labelMarginLeftTablet,
        labelMarginTopMobile,
        labelMarginRightMobile,
        labelMarginBottomMobile,
        labelMarginLeftMobile,
        descColorH,
        descShadowColor,
        descShadowBlur,
        descShadowHorizontal,
        descShadowVertical,
        descBackColor,
        descOpacity,
        descborderType,
        descborderWidth,
        descborderTop,
        descborderRight,
        descborderBottom,
        descborderLeft,
        descborderColor,
        descborderRadius,
        descMarginType,
        descMarginTop,
        descMarginRight,
        descMarginBottom,
        descMarginLeft,
        descMarginTopTablet,
        descMarginRightTablet,
        descMarginBottomTablet,
        descMarginLeftTablet,
        descMarginTopMobile,
        descMarginRightMobile,
        descMarginBottomMobile,
        descMarginLeftMobile,
        descPaddingTop,
        descPaddingRight,
        descPaddingBottom,
        descPaddingLeft,
        descPaddingTopTablet,
        descPaddingRightTablet,
        descPaddingBottomTablet,
        descPaddingLeftTablet,
        descPaddingTopMobile,
        descPaddingRightMobile,
        descPaddingBottomMobile,
        descPaddingLeftMobile,
        descPaddingType,
        btnMarginType,
        btnMarginTop,
        btnMarginRight,
        btnMarginBottom,
        btnMarginLeft,
        btnMarginTopTablet,
        btnMarginRightTablet,
        btnMarginBottomTablet,
        btnMarginLeftTablet,
        btnMarginTopMobile,
        btnMarginRightMobile,
        btnMarginBottomMobile,
        btnMarginLeftMobile,
        btnPaddingTop,
        btnPaddingRight,
        btnPaddingBottom,
        btnPaddingLeft,
        btnPaddingTopTablet,
        btnPaddingRightTablet,
        btnPaddingBottomTablet,
        btnPaddingLeftTablet,
        btnPaddingTopMobile,
        btnPaddingRightMobile,
        btnPaddingBottomMobile,
        btnPaddingLeftMobile,
        btnPaddingType,
        btnColorH,
        btnShadowColorH,
        btnShadowBlurH,
        btnShadowHorizontalH,
        btnShadowVerticalH,
        btnBackH,
        btnOpacityH,
        btnBorderTypeH,
        btnBorderWidthH,
        btnBorderTopH,
        btnBorderRightH,
        btnBorderBottomH,
        btnBorderLeftH,
        btnBorderColorH,
        btnBorderRadiusH,
        btnMarginTypeH,
        btnMarginTopH,
        btnMarginRightH,
        btnMarginBottomH,
        btnMarginLeftH,
        btnMarginTopTabletH,
        btnMarginRightTabletH,
        btnMarginBottomTabletH,
        btnMarginLeftTabletH,
        btnMarginTopMobileH,
        btnMarginRightMobileH,
        btnMarginBottomMobileH,
        btnMarginLeftMobileH,
        btnPaddingTopH,
        btnPaddingRightH,
        btnPaddingBottomH,
        btnPaddingLeftH,
        btnPaddingTopTabletH,
        btnPaddingRightTabletH,
        btnPaddingBottomTabletH,
        btnPaddingLeftTabletH,
        btnPaddingTopMobileH,
        btnPaddingRightMobileH,
        btnPaddingBottomMobileH,
        btnPaddingLeftMobileH,
        btnPaddingTypeH,
        innerBack,
        innerOpacity,
        marginTTablet,
        marginRTablet,
        marginBTablet,
        marginLTablet,
        marginTMobile,
        marginRMobile,
        marginBMobile,
        marginLMobile,
        paddingTTablet,
        paddingRTablet,
        paddingBTablet,
        paddingLTablet,
        paddingTMobile,
        paddingRMobile,
        paddingBMobile,
        paddingLMobile,
        innerBackH,
        innerOpacityH,
        imageIDH,
        imageURLH,
        backgroundPositionH,
        backgroundRepeatH,
        backgroundSizeH,
        fixedH,
        borderTypeH,
        borderTopH,
        borderRightH,
        borderBottomH,
        borderLeftH,
        borderColorH,
        borderRadiusH,
        marginTH,
        marginRH,
        marginBH,
        marginLH,
        marginTTabletH,
        marginRTabletH,
        marginBTabletH,
        marginLTabletH,
        marginTMobileH,
        marginRMobileH,
        marginBMobileH,
        marginLMobileH,
        paddingTH,
        paddingRH,
        paddingBH,
        paddingLH,
        paddingTTabletH,
        paddingRTabletH,
        paddingBTabletH,
        paddingLTabletH,
        paddingTMobileH,
        paddingRMobileH,
        paddingBMobileH,
        paddingLMobileH,
        paddingUH,
        outerBack,
        outerOpacity,
        outerImageID,
        outerImageURL,
        outerBackgroundPosition,
        outerBackgroundRepeat,
        outerBackgroundSize,
        outerFixed,
        outerBorderType,
        outerBorderTop,
        outerBorderRight,
        outerBorderBottom,
        outerBorderLeft,
        outerBorderColor,
        outerBorderRadius,
        outershadowColor,
        outershadowBlur,
        outershadowHorizontal,
        outershadowVertical,
        outershadowPosition,
        outerShadowColorH,
        outerShadowBlurH,
        outerShadowHorizontalH,
        outerShadowVerticalH,
        outerShadowPositionH,
        outerMarginT,
        outerMarginR,
        outerMarginB,
        outerMarginL,
        outerMarginTTablet,
        outerMarginRTablet,
        outerMarginBTablet,
        outerMarginLTablet,
        outerMarginTMobile,
        outerMarginRMobile,
        outerMarginBMobile,
        outerMarginLMobile,
        outerPaddingT,
        outerPaddingR,
        outerPaddingB,
        outerPaddingL,
        outerPaddingTTablet,
        outerPaddingRTablet,
        outerPaddingBTablet,
        outerPaddingLTablet,
        outerPaddingTMobile,
        outerPaddingRMobile,
        outerPaddingBMobile,
        outerPaddingLMobile,
        outerPaddingU,
        outerBackH,
        outerOpacityH,
        outerImageIDH,
        outerImageURLH,
        outerBackgroundPositionH,
        outerBackgroundRepeatH,
        outerBackgroundSizeH,
        outerFixedH,
        outerBorderTypeH,
        outerBorderTopH,
        outerBorderRightH,
        outerBorderBottomH,
        outerBorderLeftH,
        outerBorderColorH,
        outerBorderRadiusH,
        outerMarginTH,
        outerMarginRH,
        outerMarginBH,
        outerMarginLH,
        outerMarginTTabletH,
        outerMarginRTabletH,
        outerMarginBTabletH,
        outerMarginLTabletH,
        outerMarginTMobileH,
        outerMarginRMobileH,
        outerMarginBMobileH,
        outerMarginLMobileH,
        outerPaddingTH,
        outerPaddingRH,
        outerPaddingBH,
        outerPaddingLH,
        outerPaddingTTabletH,
        outerPaddingRTabletH,
        outerPaddingBTabletH,
        outerPaddingLTabletH,
        outerPaddingTMobileH,
        outerPaddingRMobileH,
        outerPaddingBMobileH,
        outerPaddingLMobileH,
        outerPaddingUH,
    } = props.attributes;

    const reverseAnime = reverseLottie ? -1 : 1;


    const mainClasses = classnames(className, 'premium-icon-box');

    const flexClass = btnPosition !== "bottom" ? "premium-icon-box__btn_flex" : ""

    return (
        <div
            id={`premium-icon-box-${block_id}`}
            className={`premium-icon-box-container-out ${mainClasses} premium-icon-box-${block_id}  ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                borderStyle: outerBorderType,
                borderWidth: `${outerBorderTop}px ${outerBorderRight}px ${outerBorderBottom}px ${outerBorderLeft}px`
                ,
                borderRadius: borderRadius + "px",
                borderColor: borderColor,
                boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                backgroundColor: outerBack
                    ? hexToRgba(outerBack, outerOpacity)
                    : "transparent",
                backgroundImage: outerImageURL ? `url(${outerImageURL})` : 'none',
                backgroundRepeat: outerBackgroundRepeat,
                backgroundPosition: outerBackgroundPosition,
                backgroundSize: outerBackgroundSize,
                backgroundAttachment: outerFixed ? "fixed" : "unset"
            }}
            data-box-tilt={mouseTilt}
            data-box-tilt-reverse={reverse}
        >
            <div
                className={` premium-icon-box-in premium-icon-box-flex-${iconPos} premium-icon-box-flex-ver-${iconHPos} `}
                style={{
                    textAlign: align,
                    borderStyle: borderType,
                    borderWidth: borderIconBox
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : borderWidth + "px",
                    borderRadius: borderRadius + "px",
                    borderColor: borderColor,
                    boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    backgroundColor: innerBack
                        ? hexToRgba(innerBack, innerOpacity)
                        : "transparent",
                    backgroundImage: imageURL ? `url(${imageURL})` : 'none',
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    backgroundAttachment: fixed ? "fixed" : "unset"
                }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-icon-box-${block_id}:hover {`,
                            `background-color : ${outerBackH ? hexToRgba(outerBackH, outerOpacityH) : ""};`,
                            `background-image : ${outerImageURLH ? "url(" + outerImageURLH + ")" : ""};`,
                            `background-size : ${outerBackgroundSizeH};`,
                            `background-position : ${outerBackgroundPositionH};`,
                            `background-repeat : ${outerBackgroundRepeatH};`,
                            `background-attachment : ${outerFixedH ? "fixed" : "unset"} `,
                            `border-style : ${outerBorderTypeH} ;`,
                            `border-width : ${outerBorderTopH}px ${outerBorderRightH}px ${outerBorderBottomH}px ${outerBorderLeftH}px ;`,
                            `border-color : ${outerBorderColorH} ;`,
                            `border-radius : ${outerBorderRadiusH}px ;`,
                            `box-shadow: ${outerShadowHorizontalH}px ${outerShadowVerticalH}px ${outerShadowBlurH}px ${outerShadowColorH} ${outerShadowPositionH} !important`,
                            "}",
                            `#premium-icon-box-${block_id}:hover .premium-icon-box {`,
                            `background-color : ${innerBackH ? hexToRgba(innerBackH, innerOpacityH) : ""};`,
                            `background-image : ${imageURLH ? "url(" + imageURLH + ")" : ""};`,
                            `background-size : ${backgroundSizeH};`,
                            `background-position : ${backgroundPositionH};`,
                            `background-repeat : ${backgroundRepeatH};`,
                            `background-attachment : ${fixedH ? "fixed" : "unset"} `,
                            `border-style : ${borderTypeH} ;`,
                            `border-width : ${borderTopH}px ${iconborderRightH}px ${iconborderBottomH}px ${iconborderLeftH}px ;`,
                            `border-color : ${borderColorH} ;`,
                            `border-radius : ${borderRadiusH}px ;`,
                            `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-icon-box__icon {`,
                            `background-color : ${iconBackColor ? hexToRgba(iconBackColor, iconOpacity) : "transparent"} ;`,
                            `border-style : ${iconborderType} ;`,
                            `border-width : ${iconborderTop}px ${iconborderRight}px ${iconborderBottom}px ${iconborderLeft}px ;`,
                            `border-color : ${iconborderColor} ;`,
                            `border-radius : ${iconborderRadius}px ;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-icon-box__icon_wrap:hover .premium-icon-box__icon {`,
                            `background-color : ${iconBackColorH ? hexToRgba(iconBackColorH, iconOpacityH) : "transparent"} ;`,
                            `border-color: ${iconborderColorH} !important;`,
                            `border-width: ${iconborderTopH}px ${iconborderRightH}px ${iconborderBottomH}px ${iconborderLeftH}px;`,
                            `background-color: ${iconBackColorH ? hexToRgba(iconBackColorH, iconOpacityH) : iconBackColor};`,
                            `border-style: ${iconborderTypeH};`,
                            `border-radius: ${iconborderRadiusH}px;`,
                            `box-shadow: ${iconShadowHorizontalH}px ${iconShadowVerticalH}px ${iconShadowColorH} ${iconShadowPositionH};`,
                            "}",
                            `#premium-icon-box-${block_id}:hover .premium-icon-box__title {`,
                            `color : ${titleColorH} !important;`,
                            "}",
                            `#premium-icon-box-${block_id}:hover .premium-icon-box__desc {`,
                            `color : ${descColorH} !important;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-icon-box__btn_wrap:hover  .premium-icon-box__btn {`,
                            `color: ${btnColorH} !important;`,
                            `text-shadow : ${btnShadowHorizontalH}px ${btnShadowVerticalH}px ${btnShadowBlurH}px ${btnShadowColorH} !important;`,
                            `background-color : ${btnBackH ? hexToRgba(btnBackH, btnOpacityH) : ""} !important ;`,
                            `border-style : ${btnBorderTypeH} !important;`,
                            `border-width : ${btnBorderTopH}px ${btnBorderRightH}px ${btnBorderBottomH}px ${btnBorderLeftH}px !important;`,
                            `border-color : ${btnBorderColorH}!important;`,
                            `border-radius : ${btnBorderRadiusH}!important;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                            `background-color: ${btnHoverBack} !important;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-link-icon-before {`,
                            `margin-right : ${btnTxt ? iconSpace : 0}px ;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-link-icon-after {`,
                            `margin-left : ${btnTxt ? iconSpace : 0}px ;`,
                            "}",
                            `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                            `background-color: ${btnHoverBack} !important;`,
                            "}"
                        ].join("\n")
                    }}
                />
                {iconChecked && (
                    <div
                        className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                    >
                        {"icon" === iconImage && (
                            <Fragment>

                                <i
                                    className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                    style={{
                                        color: iconColor,
                                        fontSize: iconSize,
                                        textShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor} ${iconShadowPosition} ;`,
                                    }}
                                />

                            </Fragment>
                        )}


                        {"image" === iconImage && iconImgUrl && (
                            <img
                                className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                src={`${iconImgUrl}`}
                                alt="Image Icon"
                                style={{
                                    width: iconSize + "px",
                                    height: iconSize + "px",
                                    boxShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor} ${iconShadowPosition} ;`,

                                }}
                            />
                        )}
                        {"animation" == iconImage && lottieURL && <div className={`premium-icon-box__icon premium-icon-box-animation premium-lottie-animation premium-icon__${hoverEffect}`} data-speed={1} data-trigger={"none"} data-loop={loopLottie} data-lottieURl={lottieURL} data-reverse={reverseAnime}> </div>}

                    </div>
                )}
                <div className={`premium-icon-box-content-outer-wrap premium-icon-box-cta-${btnPosition}`}>
                    <div className={`premium-icon-box-text-wrap`}>
                        {titleChecked && titleText && (
                            <div
                                className={`premium-icon-box__title_wrap`}
                                style={{
                                    backgroundColor: titleBack ? hexToRgba(titleBack, titleOpacity) : "transparent",
                                    borderStyle: titleBorderType,
                                    borderWidth: `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`,
                                    borderColor: titleBorderColor,
                                    borderRadius: titleBorderRadius,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-icon-box__title`}
                                    value={titleText}
                                    style={{
                                        color: titleColor,
                                        fontFamily: titleFont,
                                        letterSpacing: titleLetter + "px",
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    }}
                                    keepPlaceholderOnFocus
                                />
                                <span className={`premium-icon-box-label`} style={{
                                    color: labelColor, fontWeight: labelWeight, fontStyle: labelStyle,
                                    letterSpacing: labelLetter,
                                    textTransform: labelUpper ? "uppercase" : "unset", lineHeight: labelLine
                                }}>
                                    {titleLabel}
                                </span>
                            </div>
                        )}
                        {descChecked && descText && (
                            <div
                                className={`premium-icon-box__desc_wrap`}
                                style={{
                                    textAlign: descAlign
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-icon-box__desc`}
                                    value={descText}
                                    style={{
                                        color: descColor,
                                        fontFamily: descFont,
                                        lineHeight: descLine + "px",
                                        fontWeight: descWeight,
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                        backgroundColor: descBackColor ? hexToRgba(descBackColor, descOpacity) : "transparent",
                                        borderStyle: descborderType,
                                        borderWidth: `${descborderTop}px ${descborderRight}px ${descborderBottom}px ${descborderLeft}px`,
                                        borderColor: descborderColor,
                                        borderRadius: descborderRadius,

                                    }}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        )}
                    </div>
                    {btnChecked && btnText && (
                        <div
                            className={`premium-icon-box__btn_wrap ${flexClass} premium-icon-box__btn_ premium-button__${btnEffect} premium-button__${effectDir} premium-icon-box-flex-ver-${btnVerPos}`}
                        >
                            <a className={`premium-icon-box__btn premium-button`} style={{
                                color: btnColor,
                                backgroundColor: btnBack
                                    ? hexToRgba(btnBack, btnOpacity)
                                    : "transparent",
                                letterSpacing: btnLetter + "px",
                                textTransform: btnUpper ? "uppercase" : "none",
                                fontStyle: btnStyle,
                                fontWeight: btnWeight,
                                borderStyle: btnBorderType,
                                borderWidth: btnBorderIconBox
                                    ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                    : btnBorderWidth + "px",
                                borderRadius: btnBorderRadius + "px",
                                borderColor: btnBorderColor,
                                padding: btnPadding + btnPaddingU,
                                textShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
                            }} rel="noopener noreferrer" target={target ? "_blank" : "_self"} href={btnLink}>
                                {"before" === iconPosition && showIcon && <i className={`premium-icon-box-more-icon premium-link-icon-${iconPosition}  ${btnIcon} `} ></i>}
                                {btnTxt ? btnText : ""}
                                {"after" === iconPosition && showIcon && <i className={`premium-icon-box-more-icon premium-link-icon-${iconPosition} ${btnIcon} `} ></i>}
                            </a>
                        </div>
                    )}
                </div>
            </div>
            {showBackIcon && <div className={`premium-icon-box-big premium-icon-box-big-hover`}>
                {"icon" === iconImage && (
                    <Fragment>
                        <i
                            className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                            style={{
                                color: iconColor,

                            }}
                        />

                    </Fragment>
                )}
                {"image" === iconImage && iconImgUrl && (
                    <img
                        className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                        src={`${iconImgUrl}`}
                        alt="Image Icon"

                    />
                )}
                {"animation" == iconImage && lottieURL && <div className={`premium-icon-box-animation premium-lottie-animation`} data-speed={1} data-trigger={"none"} data-loop={loopLottie} data-lottieURl={lottieURL} data-reverse={reverseAnime}> </div>}

            </div>}
            { wholeLink && <a className={`premium-icon-box-whole-link`} href={btnLink} target={target ? "_blank" : "_self"}></a>}
        </div >
    );
};

export default save;
