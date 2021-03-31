import classnames from "classnames"
import styling from "./styling"
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTypo from "../../components/premium-typo";
import {
    SortableContainer,
    SortableElement,
    arrayMove
} from 'react-sortable-hoc';

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl,
} = wp.components

const SortableItem = SortableElement(({
            edit,
            removeItem,
            newIndex,
            value,
            changeLableValue,
            changePercentageValue,
            items
        }) => < div className="premium-progress-bar-repeater" >

                <div className={
                    `premium-progress-bar__container ${newIndex}`
                } >
                    < span className="premium-progress-bar__dragHandle" ></span>
                    <div className="premium-progress-bar__content"
                        onClick={
                            () => edit(newIndex)
                        } >
                        Item# {
                            newIndex + 1
                        } </div>

                     {
                         items.length != 1 ? < button className = "premium-progress-bar__trashicon fa fa-trash"
                            onClick={
                                () => removeItem(newIndex, value)
                            } >
                        </button>:""}
                            
                </div>
                <div className={
                    `premium-progress-bar-repeater-controls ${value.edit ? "editable" : ""}`
                } >
                    <TextControl
                        label={
                            __("Label")
                        }
                        value={
                            value.title
                        }
                        onChange = {
                            (newText) => changeLableValue(newText, newIndex)
                        }
                    />
                    <TextControl
                        label={
                            __("Percentage")
                        }
                        value={
                            value.percentage
                        }
                        onChange = {
                            (newText) => changePercentageValue(newText, newIndex)
                        }
                    />
                </div >
            </div>
        )

        const SortableList = SortableContainer(({
            items,
            removeItem,
            edit,
            changeLableValue,
            changePercentageValue
        }) => {
            return (<div > {
                (items).map((value, index) => (
                    <SortableItem key={`item-${value}`}
                        index={index}
                        newIndex={index}
                        value={value}
                        removeItem={removeItem}
                        edit={edit}
                        changeLableValue = {
                            changeLableValue
                        }
                        changePercentageValue = {
                            changePercentageValue
                        }
                        items = {
                            items
                        }
                    />
                ))
            } </div>
            );
        });

class edit extends Component {

    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-progress-bar-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            multiStage,
            percentage,
            label,
            progressBarHeight,
            progressBarHeightTablet,
            progressBarHeightType,
            progressBarHeightMobile,
            progressBarRadius,
            progressBarRadiusTablet,
            progressBarRadiusType,
            progressBarRadiusMobile,
            progressBarbgColor,
            progressBarColor,
            labelColor,
            LabelfontSize,
            LabelfontSizeMobile,
            LabelfontSizeTablet,
            LabelfontSizeType,
            LabelWeight,
            LabelStyle,
            LabelUpper,
            LabelLetter,
            percentageColor,
            percentagefontSize,
            percentagefontSizeMobile,
            percentagefontSizeTablet,
            percentagefontSizeType,
            percentageWeight,
            percentageStyle,
            percentageLetter,
            progress,
            repeaterItems,
            editTitle,
            styleProgress,
            animate,
            speeds,
            arrowColor,
            arrow,
            arrowTablet,
            arrowMobile,
            arrowType,
            indicator,
            pinColor,
            pin,
            pinTablet,
            pinType,
            pinMobile,
            pinHeight,
            pinHeightTablet,
            pinHeightType,
            pinHeightMobile
        } = attributes

        const STYLE = [{
            value: "solid",
            label: __("Solid")
        },
        {
            value: "stripe",
            label: __("Stripe")
        }
        ];
        const INDICATOR = [{
            value: "arrow",
            label: __("Arrow")
        },
        {
            value: "pin",
            label: __("Pin")
        },
        {
            value: "none",
            label: __("None")
        }
        ];

        var element = document.getElementById("premium-style-progress-bar-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }
        const changeLableValue = (newText, newIndex) => {
            setAttributes({
                repeaterItems: onRepeaterChange(
                    "title",
                    newText,
                    newIndex
                )
            })
        }
        
        const changePercentageValue = (newText, newIndex) => {
             setAttributes({
                 repeaterItems: onRepeaterChange(
                     "percentage",
                     newText,
                     newIndex
                 )
             })
        }

        const onSortEndSingle = ({
            oldIndex,
            newIndex
        }) => {
            let arrayItem = repeaterItems.map((cont) => (
                cont
            ))

            const array = arrayMove(arrayItem, oldIndex, newIndex)

            setAttributes({
                repeaterItems:
                    array

            });
        };
        const shouldCancelStart = (e) => {
            // Prevent sorting from being triggered if target is input or button
            if (['button', 'div', 'input'].indexOf(e.target.tagName.toLowerCase()) !== -1) {
                return true; // Return true to cancel sorting
            }
        }

        const onRepeaterChange = (attr, value, index) => {
            this.forceUpdate()
            const items = repeaterItems;
            this.forceUpdate();
            return items.map(function (item, currIndex) {
                if (index == currIndex) {
                    item[attr] = value;
                }

                return item;
            });
        };

        const edit = (index) => {
            setAttributes({ editTitle: !editTitle })
            return repeaterItems.map((item, i) => {
                if (index == i) {
                    setAttributes({
                        repeaterItems: onRepeaterChange(
                            "edit",
                            item.edit ? false : true,
                            index
                        )
                    })
                }
                else {
                    setAttributes({
                        repeaterItems: onRepeaterChange(
                            "edit",
                            false,
                            i
                        )
                    })
                }
            })
        }

        const removeItem = (index, item) => {
            this.forceUpdate()
            let array = repeaterItems.map((cont, currIndex) => {
                return cont
            }).filter((f, i) => i != index)
            setAttributes({ repeaterItems: array });
        }

        const renderItems = repeaterItems.map((item, index) => {
            return (< div className="premium-progress-bar-multiple-label"
                style={
                    {
                        left: item.percentage + "%"
                    }
                } >
                <p className="premium-progress-bar-center-label" > {
                    item.title
                }
                    {
                        item.percentage ? < span className="premium-progress-bar-percentage" > {
                            item.percentage
                        }% </span> : ""}
                </p>
                {
                    (item.title || item.percentage) ? indicator == 'arrow' ? < div className="premium-progress-bar-arrow" > </div> : indicator == 'pin' ? <div className="premium-progress-bar-pin"></div> : "" : ""}
            </div>
            )
        })
        const onResetClickLabel = () => {
            setAttributes({ 
                LabelWeight: 500, 
                LabelfontSizeType:"px", 
                LabelfontSize: "20",
                LabelfontSizeMobile: "20",
                LabelfontSizeTablet: "20",
                LabelStyle: "normal",
                LabelLetter: "0",
                LabelUpper: false
            });
        }
        const onResetClickpercentage = () => {
            setAttributes({ 
                percentageWeight: 500, 
                percentagefontSizeType:"px", 
                percentagefontSize: "20",
                percentagefontSizeMobile: "20",
                percentagefontSizeTablet: "20",
                percentageStyle: "normal",
                percentageLetter: "0"
            });
        }

        const mainClasses = classnames(className, "premium-progress-bar");
        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("Progress Bar")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Multiple Stage")}
                            checked={multiStage}
                            onChange={newCheck => setAttributes({ multiStage: newCheck })}
                        />
                        {!multiStage ? (
                            <Fragment>
                                <TextControl
                                    label={__("Label")}
                                    value={label}
                                    onChange={value => setAttributes({ label: value })}
                                />
                                <TextControl
                                    label={__("Percentage")}
                                    value={percentage}
                                    onChange={value => setAttributes({ percentage: value })}
                                />
                            </Fragment>
                        ) :
                            < Fragment >
                                <div className="premium-progress-bar-control-content" >
                                    <label >
                                        <span className="premium-progress-bar-control-title" > Label </span>
                                    </label>
                                    < SortableList items={
                                        repeaterItems
                                    }
                                        onSortEnd={
                                            (o, n) => onSortEndSingle(o, n)
                                        }
                                        removeItem={
                                            (value) => removeItem(value)
                                        }
                                        edit={
                                            (value) => edit(value)
                                        }

                                        shouldCancelStart={
                                            shouldCancelStart
                                        }
                                        changeLableValue = {
                                            changeLableValue
                                        }
                                        changePercentageValue = {
                                            changePercentageValue
                                        }
                                        helperClass='premium-person__sortableHelper' />
                                    < div className = "premium-progress-bar-btn__wrap" >
                                        <button
                                            className={
                                                "premium-progress-bar-btn"
                                            }
                                            onClick={
                                                () => {
                                                    this.forceUpdate();
                                                    return setAttributes({
                                                        repeaterItems: repeaterItems.concat([{
                                                            title: __("Label"),
                                                            percentage: __("50"),
                                                            edit: false
                                                        }])
                                                    });
                                                }
                                            } >
                                            <i className="dashicons dashicons-plus premium-progress-bar-icon" />
                                            {__("Add New Item")}
                                        </button>
                                    </div>
                                </div>
                                <br />
                                < SelectControl
                                    label={__("Labels Indicator")}
                                    value={indicator}
                                    onChange={newEffect => setAttributes({ indicator: newEffect })}
                                    options={INDICATOR}
                                />
                            </Fragment>
                        }

                        <RangeControl
                            label={__("Progress")}
                            value={progress}
                            min="1"
                            max="100"
                            onChange={value => setAttributes({ progress: value })}
                        />
                        <RangeControl
                            label = {
                                __("Speed (milliseconds)")
                            }
                            value={speeds}
                            min="0"
                            max="5"
                            onChange={value => setAttributes({ speeds: value })}
                        />
                        < SelectControl
                            label={__("Style")}
                            value={styleProgress}
                            onChange={newEffect => setAttributes({ styleProgress: newEffect })}
                            options={STYLE}
                        />
                        {styleProgress == 'stripe' &&
                            < ToggleControl
                                label={__("Animated")}
                                checked={animate}
                                onChange={newCheck => setAttributes({ animate: newCheck })}
                            />
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Progress Bar Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: progressBarHeightType, label: __("progressBarHeightType") }}
                            range={{ value: progressBarHeight, label: __("progressBarHeight") }}
                            rangeMobile={{ value: progressBarHeightMobile, label: __("progressBarHeightMobile") }}
                            rangeTablet={{ value: progressBarHeightTablet, label: __("progressBarHeightTablet") }}
                            rangeLabel={__("Height")}
                            min={1}
                            max={100}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: progressBarRadiusType, label: __("progressBarRadiusType") }}
                            range={{ value: progressBarRadius, label: __("progressBarRadius") }}
                            rangeMobile={{ value: progressBarRadiusMobile, label: __("progressBarRadiusMobile") }}
                            rangeTablet={{ value: progressBarRadiusTablet, label: __("progressBarRadiusTablet") }}
                            rangeLabel={__("Border Radius")}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={progressBarbgColor}
                            onChange={newValue =>
                                setAttributes({
                                    progressBarbgColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Progressbar Color")}</p>
                        <ColorPalette
                            value={progressBarColor}
                            onChange={newValue =>
                                setAttributes({
                                    progressBarColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                    </PanelBody>
                    {
                        label && < PanelBody
                        title={__("Label Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={labelColor}
                            onChange={newValue =>
                                setAttributes({
                                    labelColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: LabelfontSizeType, label: __("LabelfontSizeType") }}
                            fontSize={{ value: LabelfontSize, label: __("LabelfontSize") }}
                            fontSizeMobile={{ value: LabelfontSizeMobile, label: __("LabelfontSizeMobile") }}
                            fontSizeTablet={{ value: LabelfontSizeTablet, label: __("LabelfontSizeTablet") }}
                            weight={LabelWeight}
                            style={LabelStyle}
                            spacing={LabelLetter}
                            upper={LabelUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ LabelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ LabelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ LabelLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ LabelUpper: check })}
                            onResetClick={onResetClickLabel}
                        />
                    </PanelBody>}
                    {
                        percentage && < PanelBody
                        title={__("Percentage Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={percentageColor}
                            onChange={newValue =>
                                setAttributes({
                                    percentageColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: percentagefontSizeType, label: __("percentagefontSizeType") }}
                            fontSize={{ value: percentagefontSize, label: __("percentagefontSize") }}
                            fontSizeMobile={{ value: percentagefontSizeMobile, label: __("percentagefontSizeMobile") }}
                            fontSizeTablet={{ value: percentagefontSizeTablet, label: __("percentagefontSizeTablet") }}
                            weight={percentageWeight}
                            style={percentageStyle}
                            spacing={percentageLetter}
                            onChangeWeight={newWeight =>
                                setAttributes({ percentageWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ percentageStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ percentageLetter: newValue })
                            }
                            onResetClick={onResetClickpercentage}
                        />
                    </PanelBody>}
                    {multiStage && indicator == 'arrow' ? < PanelBody
                        title={__("Arrow Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        < p > {__("Color")} </p>
                        < ColorPalette
                            value={arrowColor}
                            onChange={
                                newValue =>
                                    setAttributes({
                                        arrowColor: newValue
                                    })
                            }
                            allowReset={true}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: arrowType, label: __("arrowType") }}
                            range={{ value: arrow, label: __("arrow") }}
                            rangeMobile={{ value: arrowMobile, label: __("arrowMobile") }}
                            rangeTablet={{ value: arrowTablet, label: __("arrowTablet") }}
                            rangeLabel={__("Size")}
                            min={1}
                            max={50}
                        />
                    </PanelBody> : ""}
                    {multiStage && indicator == 'pin' ? < PanelBody
                        title={__("Indicator")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        < p > {__("Color")} </p>
                        < ColorPalette
                            value={pinColor}
                            onChange={
                                newValue =>
                                    setAttributes({
                                        pinColor: newValue
                                    })
                            }
                            allowReset={true}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: pinType, label: __("pinType") }}
                            range={{ value: pin, label: __("pin") }}
                            rangeMobile={{ value: pinMobile, label: __("pinMobile") }}
                            rangeTablet={{ value: pinTablet, label: __("pinTablet") }}
                            rangeLabel={__("Size")}
                            min={1}
                            max={100}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: pinHeightType, label: __("pinHeightType") }}
                            range={{ value: pinHeight, label: __("pinHeight") }}
                            rangeMobile={{ value: pinHeightMobile, label: __("pinHeightMobile") }}
                            rangeTablet={{ value: pinHeightTablet, label: __("pinHeightTablet") }}
                            rangeLabel={__("Height")}
                            min={1}
                            max={100}
                        />
                    </PanelBody> : ""}
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            )} style={{
                textAlign: align,
            }}>
                <div className={`premium-progress-bar`}
                    style={{
                        textAlign: align,
                    }}>
                    {
                        !multiStage ? (
                            < div className="premium-progress-bar-labels-wrap" >
                                {label ? <p className="premium-progress-bar-left-label">
                                    <span>{label}</span>
                                </p> : ""}
                                {percentage ? < p className="premium-progress-bar-right-label" >
                                    <span > {
                                        percentage
                                    } </span>
                                </p> : ""}
                            </div>
                        ) : ""}
                    {
                        multiStage && (<div>{renderItems}</div>)}
                    <div className="premium-progress-bar-clear"></div>
                    <div className="premium-progress-bar-progress">
                        < div className={
                            `premium-progress-bar-progress-bar ${this.props.clientId} ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                        }
                            style={{ transition: `width ${speeds}s ease-in-out` }}
                            data-score={`${progress}`}
                            data-speed={`${speeds}`}
                        > </div>
                    </div>
                </div>
            </div>
        ]
    }
}

export default edit