import React from 'react';

import MenuItem from '../Menuitem/menuitem.component';
import asab from './images/asab.jpg';
import jermgiri from './images/brsgh.jpg';
import tarmim from './images/trmim.jpg';
import jarrahi from './images/jrh.jpg';
import implant from './images/implant.jpg';


import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'عصب کشی',
          imageUrl:asab,
          id: 1,
          linkUrl: 'services'
        },
        {
          title: 'جرمگیری',
          imageUrl:jermgiri,
          id: 2,
          linkUrl: 'services'
        },
        {
          title: 'ترمیم',
          imageUrl: tarmim,
          id: 3,
          linkUrl: 'services'
        },
        {
          title: 'ایمپلنت',
          imageUrl: implant,
          id: 4,
          linkUrl: 'services'
        },
        {
          title: 'جراحی',
          imageUrl: jarrahi,
          id: 5,
          linkUrl: 'services'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;