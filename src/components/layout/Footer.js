/**
 * Created by HuangKai on 2016/12/26.
 */
import React from 'react';
import { connect } from 'dva';
import config from '../../utils/config';
import styles from './Layout.css';

function Footer() {
  return (
    <div className={styles.footer}>
      {config.footerText}
    </div>
  );
}

Footer.propTypes = {
};

export default connect()(Footer);
