import { Fragment } from "react";
import { Properties, Property, PropertyText } from "./styled";

interface PropertyDisplayProps {
  properties: Array<{
    title: string;
    content: string | Array<{ name: string; short?: string }>;
  }>;
}

/**
 * Renders the content of a property as PropertyText components.
 *
 * @function
 * @param {string | Array<{ name: string; short?: string }>} content - The content of the property, either a string or an array of objects with `name` and optional `short` properties
 * @returns {JSX.Element} - A PropertyText component if the content is a string, or a list of PropertyText components if the content is an array
 * @example
 * const content = '2023-03-26';
 * const renderedContent = renderPropertyContent(content);
 *
 * @example
 * const content = [
 *   { name: 'Country 1', short: 'C1' },
 *   { name: 'Country 2', short: 'C2' },
 * ];
 * const renderedContent = renderPropertyContent(content);
 */
const renderPropertyContent = (
  content: string | Array<{ name: string; short?: string }>
) => {
  if (typeof content === "string") {
    return <PropertyText>{content}</PropertyText>;
  }

  return content.map((item, index, contentArray) => (
    <Fragment key={index}>
      <PropertyText $displayOnDesktop={!item.short} key={item.name}>
        {item.name}
        {index < contentArray.length - 1 ? <span>,&nbsp;</span> : null}
      </PropertyText>
      {item.short && (
        <PropertyText $displayOnMobile key={item.short}>
          {item.short}
          {index < contentArray.length - 1 ? (
            <span>,&nbsp;</span>
          ) : (
            null
          )}
        </PropertyText>
      )}
    </Fragment>
  ));
};

/**
 * MetaData component to display key-value pairs of properties.
 * 
 * @interface PropertyDisplayProps
 * @property {Array} properties - Array of property objects to be displayed
 * @property {string} properties[].title - The title of the property
 * @property {string | Array} properties[].content - The content of the property, either a string or an array of objects with `name` and optional `short` properties
 * @property {string} properties[].content[].name - The name property of the content object
 * @property {string} [properties[].content[].short] - The optional short property of the content object
 * 
 * @component
 * @example
 * const properties = [
 *   { title: 'Production:', content: 'Country 1, Country 2' },
 *   { title: 'Release date:', content: '2023-03-26' },
 *   { title: 'Date of birth:', content: '2000-01-01' },
 *   { title: 'Place of birth:', content: 'City, Country' },
 * ];
 * return <MetaData properties={properties} />;
 */
export const MetaData = ({ properties }: PropertyDisplayProps) => {
  return (
    <Properties>
      {properties.map((property, index) => (
        <Property key={index}>
          <PropertyText $entitled>{property.title}</PropertyText>
          {renderPropertyContent(property.content)}
        </Property>
      ))}
    </Properties>
  );
};
