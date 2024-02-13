function App() {
    return (
      <div>
        <Tweet
          name="Samuel matters"
          username="SMdatgoat"
          date={new Date().toDateString()}
          message="This Love this app!!"
        />
        <Tweet
          name="Jack o landtern"
          username="Jakie"
          date={new Date().toDateString()}
          message="#Ilovehashtags"
        />
        <Tweet
          name="David P"
          username="DP101"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"
        />
      </div>
    );
  }