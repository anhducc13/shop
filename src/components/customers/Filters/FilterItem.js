import React, { useState, useEffect } from 'react';
import { Collapse } from 'reactstrap';
import $ from 'jquery';

export default (props) => {
  const { key, defaultOpen = false } = props;

  const [openFilter, setOpenFilter] = useState(defaultOpen);

  return (
    <li key={key} className="expansion-panel-container">
      <div className="expansion-panel-header" onClick={() => setOpenFilter(!openFilter)}>
        <div className="font-weight-medium">Giá</div>
        <div className="expansion-panel-header-icon">
          <i aria-hidden="true" className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="expansion-panel-body">
        <Collapse isOpen={openFilter}>
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          </div>
        </Collapse>
      </div>
    </li>

  );
}
