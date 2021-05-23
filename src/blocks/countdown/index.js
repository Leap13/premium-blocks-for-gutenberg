
import PbgIcon from "../icons";
import edit from './edit'
import { countdownAttrs } from './attributes'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType("premium/countdown", {
    title: __("Countdown"),
    icon: <PbgIcon icon="counter" />,
    category: "premium-blocks",
    attributes: countdownAttrs,
    example: {},
    edit: edit,
    save: () => { }
})