const { __ } = wp.i18n;

const save = (props) => {
  const {
    imageURL,
    imageID,
    imageAlt,
    imageWidth,
    imageHeight,
    url,
    target,
    urlCheck,
    height,
    minHeight,
    effectDir,
    HeightU,
    background,
    targetOverlay,
    hoverEffect,
    blur,
    bright,
    contrast,
    saturation,
    hue,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    containerShadowColor,
    containerShadowBlur,
    containerShadowHorizontal,
    containerShadowVertical,
    containerShadowPosition,
    reverse,
  } = props.attributes;

  const classVertical = `${
    effectDir === "vertical" && hoverEffect === "mouse-scroll"
      ? "premium-img-scroll-ver "
      : ""
  }`;

  const reverseClasses = `${
    reverse && effectDir === "vertical"
      ? "premium-container-scroll-instant"
      : ""
  }`;

  const classHorizontal = `${
    effectDir === "horizontal" && hoverEffect === "hover"
      ? "img-scroll-horizontal "
      : ""
  }`;

  const containerClasses = `${
    hoverEffect === "mouse-scroll" ? "premium-container-scroll" : ""
  }`;
  const overlayClasses = `${
    hoverEffect === "mouse-scroll" && effectDir === "horizontal"
      ? "premium-img-scroll-horizontal-overlay"
      : null
  }`;

  return (
    <div
      className={`premium-img-scroll-container`}
      style={{
        border: borderType,
        borderWidth: borderWidth + "px",
        borderRadius: borderRadius + "px",
        borderColor: borderColor,
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
      }}
    >
      <div
        data-direction={effectDir}
        data-effect={hoverEffect}
        data-reverse={reverse}
        className={` premium-img-scroll-wrap  ${containerClasses} ${reverseClasses} `}
        style={{
          minHeight: minHeight,
          height: height + HeightU,
        }}
      >
        {urlCheck && (
          <a
            className="premium-img-scroll-link"
            target={`${target ? "_blank" : "_self"}`}
            href={url}
          />
        )}
        <div
          className={` premium-img-scroll-${effectDir}  ${classHorizontal} ${classVertical} `}
        >
          {targetOverlay && (
            <div
              className={`premium-img-scroll-overlay ${overlayClasses}`}
              style={{ background: background }}
            ></div>
          )}
          <img
            className={`premium-img-scroll`}
            alt={imageAlt}
            src={imageURL}
            width={imageWidth}
            height={imageHeight}
            style={{
              filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg );`,
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `.premium-img-scroll-horizontal-overlay{`,
                `   width:${imageWidth}px;`,

                "}",
              ].join("\n"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default save;
