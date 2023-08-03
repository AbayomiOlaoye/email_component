import React from 'react';
import emails from '../mailData.txt';
const listEmail = () => {
  return (
    <ul>
      {emails.map((email) => {
        return (
          <li>
            {email.subject}
          </li>
        )
      }
      )}
    </ul>
  )
}

export default listEmail
