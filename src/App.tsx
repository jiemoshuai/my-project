import styles from './App.module.css'; // 引入CSS Module

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>杨诗萌的React工程化作业</h1>
      <p>专业：信息管理与信息系统</p>
      <p>学校：重庆邮电大学</p>
    </div>
  );
}

export default App;
