import { accordion } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumTypo from "../../components/premium-typo";

if (accordion) {
  const className = "premium-accordion";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const { Component, Fragment } = wp.element;

  const {
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl
  } = wp.components;

  const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    PanelColorSettings,
    URLInput
  } = wp.editor;

  const accordionAttrs = {
    accordionId: {
      type: "string"
    },
    direction: {
      type: "string",
      default: "ltr"
    },
    titleText: {
      type: "array",
      source: "children",
      selector: ".premium-accordion__title_text",
      default: __("Awesome Title")
    },
    titleTag: {
      type: "string",
      default: "H4"
    },
    titleColor: {
      type: "string"
    },
    titleSize: {
      type: "number"
    },
    titleLine: {
      type: "number"
    },
    titleLetter: {
      type: "number"
    },
    titleStyle: {
      type: "string"
    },
    titleUpper: {
      type: "boolean"
    },
    titleWeight: {
      type: "number",
      default: 500
    },
    titleBorder: {
      type: "string",
      default: "none"
    },
    titleBorderWidth: {
      type: "number",
      default: "1"
    },
    titleBorderRadius: {
      type: "number",
      default: "0"
    },
    titleBorderColor: {
      type: "string"
    },
    titleBack: {
      type: "string"
    },
    titlePaddingT: {
      type: "number"
    },
    titlePaddingR: {
      type: "number"
    },
    titlePaddingB: {
      type: "number"
    },
    titlePaddingL: {
      type: "number"
    },
    arrowColor: {
      type: "string"
    },
    arrowBack: {
      type: "string"
    },
    arrowPadding: {
      type: "number"
    },
    arrowRadius: {
      type: "number"
    },
    arrowSize: {
      type: "number",
      default: 20
    },
    descAlign: {
      type: "string",
      default: "center"
    },
    descText: {
      type: "array",
      source: "children",
      selector: ".premium-accordion__desc",
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    descColor: {
      type: "string"
    },
    descBack: {
      type: "string"
    },
    descBorder: {
      type: "string",
      default: "none"
    },
    descBorderWidth: {
      type: "number",
      default: "1"
    },
    descBorderRadius: {
      type: "number",
      default: "0"
    },
    descBorderColor: {
      type: "string"
    },
    descSize: {
      type: "number"
    },
    descLine: {
      type: "number"
    },
    descLetter: {
      type: "number"
    },
    descStyle: {
      type: "string"
    },
    descUpper: {
      type: "boolean"
    },
    descWeight: {
      type: "number",
      default: 500
    },
    descPaddingT: {
      type: "number"
    },
    descPaddingR: {
      type: "number"
    },
    descPaddingB: {
      type: "number"
    },
    descPaddingL: {
      type: "number"
    }
  };

  let isAccUpdated = null;

  class PremiumAccordion extends Component {
    constructor() {
      super(...arguments);

      this.initAccordion = this.initAccordion.bind(this);
    }

    componentDidMount() {
      const { attributes, setAttributes, clientId } = this.props;
      if (!attributes.accordionId) {
        setAttributes({ accordionId: "premium-accordion-" + clientId });
      }
      this.initAccordion();
    }

    componentDidUpdate(prevProps, prevState) {
      clearTimeout(isAccUpdated);
      isAccUpdated = setTimeout(this.initAccordion, 500);
    }

    initAccordion() {
      const { accordionId } = this.props.attributes;
      if (!this.props.attributes.accordionId) return null;
      let title = document
        .getElementById(accordionId)
        .getElementsByClassName("premium-accordion__title_wrap")[0];
      title.addEventListener("click", () => {
        title
          .getElementsByClassName("premium-accordion__icon")[0]
          .classList.toggle("premium-accordion__closed");
        title.nextSibling.classList.toggle("premium-accordion__desc_close");
      });
    }

    render() {
      const { isSelected, setAttributes, clientId } = this.props;
      const {
        accordionId,
        direction,
        titleText,
        titleTag,
        titleColor,
        titleSize,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleBorder,
        titleBorderWidth,
        titleBorderColor,
        titleBorderRadius,
        titleBack,
        titlePaddingT,
        titlePaddingR,
        titlePaddingB,
        titlePaddingL,
        arrowColor,
        arrowBack,
        arrowPadding,
        arrowRadius,
        arrowSize,
        descText,
        descAlign,
        descColor,
        descBack,
        descBorder,
        descBorderColor,
        descBorderRadius,
        descBorderWidth,
        descSize,
        descLine,
        descLetter,
        descStyle,
        descUpper,
        descWeight,
        descPaddingT,
        descPaddingR,
        descPaddingB,
        descPaddingL
      } = this.props.attributes;

      const DIRECTION = [
        {
          value: "ltr",
          label: __("LTR")
        },
        {
          value: "rtl",
          label: __("RTL")
        }
      ];
      const ALIGNS = ["left", "center", "right"];
      return [
        isSelected && (
          <InspectorControls key="inspector">
            <PanelBody
              title={__("Title")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <Toolbar
                controls={"123456".split("").map(tag => ({
                  icon: "heading",
                  isActive: "H" + tag === titleTag,
                  onClick: () => setAttributes({ titleTag: "H" + tag }),
                  subscript: tag
                }))}
              />
              <SelectControl
                label={__("Direction")}
                options={DIRECTION}
                value={direction}
                onChange={newEffect => setAttributes({ direction: newEffect })}
              />
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumTypo
                  components={[
                    "size",
                    "weight",
                    "style",
                    "upper",
                    "spacing",
                    "line"
                  ]}
                  size={titleSize}
                  weight={titleWeight}
                  style={titleStyle}
                  spacing={titleLetter}
                  line={titleLine}
                  upper={titleUpper}
                  onChangeSize={newSize =>
                    setAttributes({ titleSize: newSize })
                  }
                  onChangeWeight={newWeight =>
                    setAttributes({ titleWeight: newWeight })
                  }
                  onChangeStyle={newStyle =>
                    setAttributes({ titleStyle: newStyle })
                  }
                  onChangeSpacing={newValue =>
                    setAttributes({ titleLetter: newValue })
                  }
                  onChangeLine={newValue =>
                    setAttributes({ titleLine: newValue })
                  }
                  onChangeUpper={check => setAttributes({ titleUpper: check })}
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                colorSettings={[
                  {
                    label: __("Text Color"),
                    value: titleColor,
                    onChange: colorValue =>
                      setAttributes({ titleColor: colorValue })
                  },
                  {
                    label: __("Background Color"),
                    value: titleBack,
                    onChange: colorValue =>
                      setAttributes({ titleBack: colorValue })
                  }
                ]}
              />
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={titleBorder}
                  borderWidth={titleBorderWidth}
                  borderColor={titleBorderColor}
                  borderRadius={titleBorderRadius}
                  onChangeType={newType =>
                    setAttributes({ titleBorder: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ titleBorderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ titleBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ titleBorderRadius: newrRadius })
                  }
                />
              </PanelBody>
              <PanelBody
                title={__("Padding")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumPadding
                  paddingTop={titlePaddingT}
                  paddingRight={titlePaddingR}
                  paddingBottom={titlePaddingB}
                  paddingLeft={titlePaddingL}
                  onChangePadTop={value =>
                    setAttributes({
                      titlePaddingT: value === undefined ? 0 : value
                    })
                  }
                  onChangePadRight={value =>
                    setAttributes({
                      titlePaddingR: value === undefined ? 0 : value
                    })
                  }
                  onChangePadBottom={value =>
                    setAttributes({
                      titlePaddingB: value === undefined ? 0 : value
                    })
                  }
                  onChangePadLeft={value =>
                    setAttributes({
                      titlePaddingL: value === undefined ? 0 : value
                    })
                  }
                />
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Arrow")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <RangeControl
                label={__("Size ")}
                value={arrowSize}
                onChange={newValue => setAttributes({ arrowSize: newValue })}
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                colorSettings={[
                  {
                    label: __("Arrow Color"),
                    value: arrowColor,
                    onChange: colorValue =>
                      setAttributes({ arrowColor: colorValue })
                  },
                  {
                    label: __("Background Color"),
                    value: arrowBack,
                    onChange: colorValue =>
                      setAttributes({ arrowBack: colorValue })
                  }
                ]}
              />
              <RangeControl
                label={__("Border Radius (PX)")}
                value={arrowRadius}
                onChange={newValue =>
                  setAttributes({
                    arrowRadius: newValue === undefined ? 0 : newValue
                  })
                }
              />
              <RangeControl
                label={__("Padding (PX)")}
                value={arrowPadding}
                onChange={newValue =>
                  setAttributes({
                    arrowPadding: newValue === undefined ? 0 : newValue
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Description")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <Toolbar
                controls={ALIGNS.map(align => ({
                  icon: "editor-align" + align,
                  isActive: align === descAlign,
                  onClick: () => setAttributes({ descAlign: align })
                }))}
              />
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumTypo
                  components={[
                    "size",
                    "weight",
                    "style",
                    "upper",
                    "spacing",
                    "line"
                  ]}
                  size={descSize}
                  weight={descWeight}
                  style={descStyle}
                  spacing={descLetter}
                  line={descLine}
                  upper={descUpper}
                  onChangeSize={newSize => setAttributes({ descSize: newSize })}
                  onChangeWeight={newWeight =>
                    setAttributes({ descWeight: newWeight })
                  }
                  onChangeStyle={newStyle =>
                    setAttributes({ descStyle: newStyle })
                  }
                  onChangeSpacing={newValue =>
                    setAttributes({ descLetter: newValue })
                  }
                  onChangeLine={newValue =>
                    setAttributes({ descLine: newValue })
                  }
                  onChangeUpper={check => setAttributes({ descUpper: check })}
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                colorSettings={[
                  {
                    label: __("Text Color"),
                    value: descColor,
                    onChange: colorValue =>
                      setAttributes({ descColor: colorValue })
                  },
                  {
                    label: __("Background Color"),
                    value: descBack,
                    onChange: colorValue =>
                      setAttributes({ descBack: colorValue })
                  }
                ]}
              />
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={descBorder}
                  borderWidth={descBorderWidth}
                  borderColor={descBorderColor}
                  borderRadius={descBorderRadius}
                  onChangeType={newType =>
                    setAttributes({ descBorder: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ descBorderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ descBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ descBorderRadius: newrRadius })
                  }
                />
              </PanelBody>
              <PanelBody
                title={__("Padding")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumPadding
                  paddingTop={descPaddingT}
                  paddingRight={descPaddingR}
                  paddingBottom={descPaddingB}
                  paddingLeft={descPaddingL}
                  onChangePadTop={value =>
                    setAttributes({
                      descPaddingT: value === undefined ? 0 : value
                    })
                  }
                  onChangePadRight={value =>
                    setAttributes({
                      descPaddingR: value === undefined ? 0 : value
                    })
                  }
                  onChangePadBottom={value =>
                    setAttributes({
                      descPaddingB: value === undefined ? 0 : value
                    })
                  }
                  onChangePadLeft={value =>
                    setAttributes({
                      descPaddingL: value === undefined ? 0 : value
                    })
                  }
                />
              </PanelBody>
            </PanelBody>
          </InspectorControls>
        ),
        <div id={accordionId} className={`${className}`}>
          <div className={`${className}__content_wrap`}>
            <div
              className={`${className}__title_wrap ${className}__${direction}`}
              style={{
                backgroundColor: titleBack,
                border: titleBorder,
                borderWidth: titleBorderWidth + "px",
                borderRadius: titleBorderRadius + "px",
                borderColor: titleBorderColor,
                paddingTop: titlePaddingT,
                paddingRight: titlePaddingR,
                paddingBottom: titlePaddingB,
                paddingLeft: titlePaddingL
              }}
            >
              <div className={`${className}__title`}>
                <RichText
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title_text`}
                  onChange={newText => setAttributes({ titleText: newText })}
                  placeholder={__("Awesome Title")}
                  value={titleText}
                  style={{
                    color: titleColor,
                    fontSize: titleSize + "px",
                    letterSpacing: titleLetter + "px",
                    textTransform: titleUpper ? "uppercase" : "none",
                    fontStyle: titleStyle,
                    fontWeight: titleWeight,
                    lineHeight: titleLine + "px"
                  }}
                />
              </div>
              <div className={`${className}__icon_wrap`}>
                <svg
                  className={`${className}__icon`}
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width={arrowSize}
                  height={arrowSize}
                  viewBox="0 0 20 20"
                  style={{
                    fill: arrowColor,
                    backgroundColor: arrowBack,
                    padding: arrowPadding + "px",
                    borderRadius: arrowRadius + "px"
                  }}
                >
                  <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                </svg>
              </div>
            </div>
            <div
              className={`${className}__desc_wrap`}
              style={{
                textAlign: descAlign,
                backgroundColor: descBack,
                border: descBorder,
                borderWidth: descBorderWidth + "px",
                borderRadius: descBorderRadius + "px",
                borderColor: descBorderColor,
                paddingTop: descPaddingT,
                paddingRight: descPaddingR,
                paddingBottom: descPaddingB,
                paddingLeft: descPaddingL
              }}
            >
              <RichText
                tagName="p"
                className={`${className}__desc`}
                onChange={newText => setAttributes({ descText: newText })}
                value={descText}
                style={{
                  color: descColor,
                  fontSize: descSize + "px",
                  letterSpacing: descLetter + "px",
                  textTransform: descUpper ? "uppercase" : "none",
                  fontStyle: descStyle,
                  fontWeight: descWeight,
                  lineHeight: descLine + "px"
                }}
              />
            </div>
          </div>
        </div>
      ];
    }
  }

  registerBlockType("premium/accordion", {
    title: __("Accordion"),
    icon: "share-alt2",
    category: "premium-blocks",
    attributes: accordionAttrs,
    edit: PremiumAccordion,
    save: props => {
      const {
        accordionId,
        direction,
        titleText,
        titleTag,
        titleSize,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleColor,
        titleBorder,
        titleBorderColor,
        titleBorderWidth,
        titleBorderRadius,
        titleBack,
        titlePaddingT,
        titlePaddingR,
        titlePaddingB,
        titlePaddingL,
        arrowColor,
        arrowBack,
        arrowPadding,
        arrowSize,
        arrowRadius,
        descText,
        descAlign,
        descSize,
        descLine,
        descLetter,
        descStyle,
        descUpper,
        descWeight,
        descColor,
        descBack,
        descBorder,
        descBorderColor,
        descBorderRadius,
        descBorderWidth,
        descPaddingT,
        descPaddingR,
        descPaddingB,
        descPaddingL
      } = props.attributes;
      return (
        <div id={accordionId} className={`${className}`}>
          <div className={`${className}__content_wrap`}>
            <div
              className={`${className}__title_wrap ${className}__${direction}`}
              style={{
                backgroundColor: titleBack,
                border: titleBorder,
                borderWidth: titleBorderWidth + "px",
                borderRadius: titleBorderRadius + "px",
                borderColor: titleBorderColor,
                paddingTop: titlePaddingT,
                paddingRight: titlePaddingR,
                paddingBottom: titlePaddingB,
                paddingLeft: titlePaddingL
              }}
            >
              <div className={`${className}__title`}>
                <RichText.Content
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title_text`}
                  value={titleText}
                  style={{
                    color: titleColor,
                    fontSize: titleSize + "px",
                    letterSpacing: titleLetter + "px",
                    textTransform: titleUpper ? "uppercase" : "none",
                    fontStyle: titleStyle,
                    fontWeight: titleWeight,
                    lineHeight: titleLine + "px"
                  }}
                />
              </div>
              <div className={`${className}__icon_wrap`}>
                <svg
                  className={`${className}__icon`}
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width={arrowSize}
                  height={arrowSize}
                  viewBox="0 0 20 20"
                  style={{
                    fill: arrowColor,
                    backgroundColor: arrowBack,
                    padding: arrowPadding + "px",
                    borderRadius: arrowRadius + "px"
                  }}
                >
                  <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                </svg>
              </div>
            </div>
            <div
              className={`${className}__desc_wrap`}
              style={{
                textAlign: descAlign,
                backgroundColor: descBack,
                border: descBorder,
                borderWidth: descBorderWidth + "px",
                borderRadius: descBorderRadius + "px",
                borderColor: descBorderColor,
                paddingTop: descPaddingT,
                paddingRight: descPaddingR,
                paddingBottom: descPaddingB,
                paddingLeft: descPaddingL
              }}
            >
              <RichText.Content
                tagName="p"
                className={`${className}__desc`}
                value={descText}
                style={{
                  color: descColor,
                  fontSize: descSize + "px",
                  letterSpacing: descLetter + "px",
                  textTransform: descUpper ? "uppercase" : "none",
                  fontStyle: descStyle,
                  fontWeight: descWeight,
                  lineHeight: descLine + "px"
                }}
              />
            </div>
          </div>
        </div>
      );
    },
    deprecated: [
      {
        attributes: accordionAttrs,
        save: props => {
          const {
            direction,
            titleText,
            titleTag,
            titleColor,
            titleBorder,
            titleBorderColor,
            titleBorderWidth,
            titleBorderRadius,
            titleSize,
            titleLetter,
            titleUpper,
            titleStyle,
            titleWeight,
            titleLine,
            titleBack,
            titlePaddingT,
            titlePaddingR,
            titlePaddingB,
            titlePaddingL,
            arrowColor,
            arrowBack,
            arrowPadding,
            arrowSize,
            arrowRadius,
            descAlign,
            descSize,
            descLine,
            descLetter,
            descStyle,
            descUpper,
            descWeight,
            descColor,
            descText,
            descBack,
            descBorder,
            descBorderColor,
            descBorderRadius,
            descBorderWidth,
            descPaddingT,
            descPaddingR,
            descPaddingB,
            descPaddingL
          } = props.attributes;
          return (
            <div className={`${className}`}>
              <div className={`${className}__content_wrap`}>
                <div
                  className={`${className}__title_wrap ${className}__${direction}`}
                  style={{
                    backgroundColor: titleBack,
                    border: titleBorder,
                    borderWidth: titleBorderWidth + "px",
                    borderRadius: titleBorderRadius + "px",
                    borderColor: titleBorderColor,
                    paddingTop: titlePaddingT,
                    paddingRight: titlePaddingR,
                    paddingBottom: titlePaddingB,
                    paddingLeft: titlePaddingL
                  }}
                >
                  <div className={`${className}__title`}>
                    <RichText.Content
                      tagName={titleTag.toLowerCase()}
                      className={`${className}__title_text`}
                      value={titleText}
                      style={{
                        color: titleColor,
                        fontSize: titleSize + "px",
                        letterSpacing: titleLetter + "px",
                        textTransform: titleUpper ? "uppercase" : "none",
                        fontStyle: titleStyle,
                        fontWeight: titleWeight,
                        lineHeight: titleLine + "px"
                      }}
                    />
                  </div>
                  <div className={`${className}__icon_wrap`}>
                    <svg
                      className={`${className}__icon`}
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width={arrowSize}
                      height={arrowSize}
                      viewBox="0 0 20 20"
                      style={{
                        fill: arrowColor,
                        backgroundColor: arrowBack,
                        padding: arrowPadding + "px",
                        borderRadius: arrowRadius + "px"
                      }}
                    >
                      <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                    </svg>
                  </div>
                </div>
                <div
                  className={`${className}__desc_wrap`}
                  style={{
                    textAlign: descAlign,
                    backgroundColor: descBack,
                    border: descBorder,
                    borderWidth: descBorderWidth + "px",
                    borderRadius: descBorderRadius + "px",
                    borderColor: descBorderColor,
                    paddingTop: descPaddingT,
                    paddingRight: descPaddingR,
                    paddingBottom: descPaddingB,
                    paddingLeft: descPaddingL
                  }}
                >
                  <RichText.Content
                    tagName="p"
                    className={`${className}__desc`}
                    value={descText}
                    style={{
                      color: descColor,
                      fontSize: descSize + "px",
                      letterSpacing: descLetter + "px",
                      textTransform: descUpper ? "uppercase" : "none",
                      fontStyle: descStyle,
                      fontWeight: descWeight,
                      lineHeight: descLine + "px"
                    }}
                  />
                </div>
              </div>
            </div>
          );
        }
      }
    ]
  });
}