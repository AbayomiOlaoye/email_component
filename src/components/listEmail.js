import React, { useState } from 'react';
import data from '../mailData.js';
import ViewEmail from './viewEmail.js';

const ListEmail = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleClick = (email) => {
    setSelectedEmail(email);
  }
  return (
    <div>
      <ul>
          <button
          type='button'
            onClick={() => handleClick(data)}
            style={{display: 'flex'}}
          >
                  <h3 dangerouslySetInnerHTML={{ __html: data.subject }} />
                  <p dangerouslySetInnerHTML={{ __html: data.snippet }} />
          </button>
      </ul>
      { selectedEmail && (
          <div className="popMail">
            <ViewEmail email={selectedEmail} />
          </div>
        )
      }
    </div>
  )
};

export default ListEmail;
