import { Fragment } from "react";
import { PropertyObject } from "../../../utils/createPropertyObject";
import { Properties, Property, PropertyText } from "./styled";

interface MetaDataProperties {
  properties: Array<PropertyObject>;
}

const renderPropertyContent = (
  content: string | Array<{ name: string; short?: string }>
) => {
  if (typeof content === "string") {
    return <PropertyText as="dd">{content}</PropertyText>;
  }

  return content.map((item, index, contentArray) => (
    <Fragment key={index}>
      <PropertyText as="dd" $displayOnDesktop={!!item.short} key={item.name}>
        {item.name}
        {index < contentArray.length - 1 ? <span>,&nbsp;</span> : null}
      </PropertyText>
      {item.short && (
        <PropertyText as="dd" $displayOnMobile key={item.short}>
          {item.short}
          {index < contentArray.length - 1 ? <span>,&nbsp;</span> : null}
        </PropertyText>
      )}
    </Fragment>
  ));
};

export const MetaData = ({ properties }: MetaDataProperties) => {
  const validProperties = properties.filter(
    (property) =>
      property.content !== "" &&
      !(Array.isArray(property.content) && property.content.length === 0)
  );

  if (validProperties.length > 0) {
    return (
      <Properties>
        {validProperties.map((property, index) => (
          <Property key={index}>
            <PropertyText as="dt" $entitled>
              {property.title}:
            </PropertyText>
            {renderPropertyContent(property.content)}
          </Property>
        ))}
      </Properties>
    );
  }
  return null;
};
