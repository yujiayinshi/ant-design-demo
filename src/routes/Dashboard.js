import React from 'react';
import { connect } from 'dva';

function Dashboard() {
  return (
    <div>
      Dashboard
    </div>
  );
}

Dashboard.propTypes = {
};

export default connect()(Dashboard);
