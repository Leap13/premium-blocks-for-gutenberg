import PremiumPadding from './premium-padding';

const {
    TabPanel,
    Dashicon
} = wp.components;

function PremiumResponsivePadding(props) {
    const {
        setAttributes,
        selectedUnit,
        showUnits,
        paddingU,
        onChangePadSizeUnit,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingTTablet,
        paddingRTablet,
        paddingBTablet,
        paddingLTablet,
        paddingTMobile,
        paddingRMobile,
        paddingBMobile,
        paddingLMobile,
    } = props;

    console.log(props);
    return (
        <TabPanel
            className="premium-size-type-field-tabs"
            activeClass="active-tab"
            tabs={[
                {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className: "premium-desktop-tab premium-responsive-tabs",
                },
                {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className: "premium-tablet-tab premium-responsive-tabs",
                },
                {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className: "premium-mobile-tab premium-responsive-tabs",
                },
            ]}
        >
            {(tab) => {
                let tabout;
                if ("desktop" === tab.name) {
                    tabout = (
                        <PremiumPadding
                            paddingTop={paddingT}
                            paddingRight={paddingR}
                            paddingBottom={paddingB}
                            paddingLeft={paddingL}
                            onChangePadTop={(paddingT) =>
                                props.onChangePadTopDesk(paddingT)
                            }
                            onChangePadRight={(paddingR) =>
                                props.onChangePadRightDesk(paddingR)
                            }
                            onChangePadBottom={(paddingB) =>
                                props.onChangePadBottomDesk(paddingB)
                            }
                            onChangePadLeft={(paddingL) =>
                                props.onChangePadLeftDesk(paddingL)
                            }
                            showUnits={showUnits}
                            selectedUnit={paddingU || "px"}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                } else if ("tablet" === tab.name) {
                    tabout = (
                        <PremiumPadding
                            paddingTop={paddingTTablet}
                            paddingRight={paddingRTablet}
                            paddingBottom={paddingBTablet}
                            paddingLeft={paddingLTablet}
                            onChangePadTop={(paddingTTablet) =>
                                props.onChangePadTopTablet(paddingTTablet)
                            }
                            onChangePadRight={(paddingRTablet) =>
                                props.onChangePadRightTablet(paddingRTablet)
                            }
                            onChangePadBottom={(paddingBTablet) =>
                                props.onChangePadBottomTablet(paddingBTablet)
                            }
                            onChangePadLeft={(paddingLTablet) =>
                                props.onChangePadLeftTablet(paddingLTablet)
                            }
                            showUnits={showUnits}
                            selectedUnit={paddingU || 'px'}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                } else if ("mobile" === tab.name) {
                    tabout = (

                        <PremiumPadding
                            paddingTop={paddingTMobile}
                            paddingRight={paddingRMobile}
                            paddingBottom={paddingBMobile}
                            paddingLeft={paddingLMobile}
                            onChangePadTop={(paddingTMobile) =>
                                props.onChangePadTopMobile(paddingTMobile)
                            }
                            onChangePadRight={(paddingRMobile) =>
                                props.onChangePadRightMobile(paddingRMobile)
                            }
                            onChangePadBottom={(paddingBMobile) =>
                                props.onChangePadBottomTablet(paddingBTablet)
                            }
                            onChangePadLeft={(paddingLMobile) =>
                                props.onChangePadLeftTablet(paddingLMobile)
                            }
                            showUnits={showUnits}
                            selectedUnit={selectedUnit || 'px'}
                            onChangePadSizeUnit={onChangePadSizeUnit}
                        />
                    )
                }
                return <div>{tabout}</div>;
            }}

        </TabPanel>
    )
}
export default PremiumResponsivePadding