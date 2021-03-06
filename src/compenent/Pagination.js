import React from 'react';
import { Link }  from 'react-router-dom';

const Pagination = ({ UsersPerPage, totalUsers , paginate , to }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / UsersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link onClick={() => paginate(number)} to={'/' + to } className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;