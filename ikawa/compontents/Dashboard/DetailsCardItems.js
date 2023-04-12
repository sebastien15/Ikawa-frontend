import React from 'react';
import Link from 'next/link';

export default function DetailsCardItems({ data }) {
  return (
    <table className='table table-borderless table-sm mb--0'>
      <thead>
        <tr>
        {data.length > 0
          ? Object.keys(data[0])
              .slice(0, 2)
              .map((title, i) => (
                <th key={i} className='text-capitalize pb--10'>
                  {title}
                </th>
              ))
          : ''}
        </tr>
      </thead>
      <tbody className=''>
        {data.length > 0
          ? data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link href={item.url} passHref={true}>
                    <span className='pointer'>{Object.values(item)[0]}</span>
                  </Link>
                </td>
                <td>{Object.values(item)[1]}</td>
              </tr>
            ))
          : ''}
      </tbody>
    </table>
  );
}
