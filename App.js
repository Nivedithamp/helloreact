import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to the React Styling Assignment</h1>
        <p style={styles.headerText}>Explore and enhance your styling skills!</p>
      </header>

      <section style={styles.section}>
        <article style={styles.article}>
          <h2 style={styles.articleTitle}>Article 1</h2>
          <p>This is the content of the first article. Add your own text here.</p>
        </article>

        <article style={styles.article}>
          <h2 style={styles.articleTitle}>Article 2</h2>
          <p>This is the content of the second article. Add your own text here.</p>
        </article>

        <article style={styles.article}>
          <h2 style={styles.articleTitle}>Article 3</h2>
          <p>This is the content of the third article. Add your own text here.</p>
        </article>
      </section>

      <aside className="sidebar" style={styles.sidebar}>
        <section style={styles.sidebarSection}>
          <h2 style={styles.articleTitle}>Categories</h2>
          <ul style={styles.sidebarList}>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </section>

        <section style={styles.sidebarSection}>
          <h2 style={styles.articleTitle}>Tags</h2>
          <ul style={styles.sidebarList}>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
        </section>
      </aside>

      <footer style={styles.footer}>
        <p>&copy; 2023 React Styling Assignment</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    background: '#F7C1C1',
    border: '30px solid #f07792',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
    textShadow: '4px 3px 0px #7A7A7A',
    color: '#FFFFFF',
  },
  headerText: {
    fontSize: '1.2em',
    textShadow: '2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5',
    color: '#FFFFFF',
  },
  section: {
    margin: '80px',
  },
  article: {
    marginBottom: '60px',
  },
  articleTitle: {
    color: '#FFFFFF',
    textShadow: '-5px 5px 0px #00e6e6, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd',
  },
  sidebar: {
    width: '30%',
    marginLeft: '20px',
  },
  sidebarSection: {
    margin: '60px',
  },
  sidebarList: {
    listStyle: 'none',
    padding: '0',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center'
  },
};

export default App;
