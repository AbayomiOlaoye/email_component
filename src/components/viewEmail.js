import React from 'react';
const ViewEmail = ({ email }) => {
  const isHtml = email.html !== undefined;

  // const renderTextWithHyperlinks = (text) => {
  //   // Regular expression to find URLs in the text
  //   const urlRegex = /https?:\/\/[^\s]+/g;
  //   // const orderedListRegex = /\d+\..+?(?=\d+\.|$)/g;

  //   const textWithHyperlinks = text.replace(urlRegex, (url) => {
  //     return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  //   });

  //   // const textWithListItems = textWithHyperlinks.replace(orderedListRegex, (item) => {
  //   //   return `<li>${item}</li>`;
  //   // });

  //   // if (textWithListItems.includes('<li>')) {
  //   //   return `<ol>${textWithListItems}</ol>`;
  //   // }

  //   return textWithHyperlinks;
  // };

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: email.subject }} />
      <p>
        {isHtml ? (
          <span dangerouslySetInnerHTML={{ __html: email.html }} />
        ) : (
          email.text
        )}
      </p>
      {/* <div dangerouslySetInnerHTML={{ __html: renderTextWithHyperlinks(email.text) }} /> */}
    </div>
  )
}

export default ViewEmail;
