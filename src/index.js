import dva from 'dva';
import './index.html';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    posts: [
      {name: 'dva', id: 1},
      {name: 'antd', id: 2}
    ]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/posts'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
