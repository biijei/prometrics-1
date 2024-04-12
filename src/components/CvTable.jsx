// NOT IN USE FOR NOW
import React from "react";

const CvTable = () => {
  return (
    <div>
      {history.map(({ date, detail, key }) => (
        <div
          key={key}
          className="border-y border-y-[#EAECF0] flex items-center gap-8 md:gap-16 py-8 text-[14px] md:text-[16px] "
        >
          <p>{date}</p>
          <p>{detail}</p>
        </div>
      ))}
    </div>
  );
};

const history = [
  {
    date: '2023',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2022',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2021',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2020',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2018',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
  {
    date: '2016',
    detail: 'Lorem ipsum dolor sit amet consectetur. Aliquet elementum diam auctor nullam lacinia at eget. Cursus nisl tempus porttitor semper etiam. Condimentum lorem lacus sed enim orci pretium placerat. Augue nisi iaculis scelerisque massa id convallis etiam.'
  },
]
export default CvTable;
