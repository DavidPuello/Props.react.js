function App() {
    return (
      <div>
        <Person
          name="Steve"
          age={22}
          hobbies={["Sleeping", "Walking in the park", "drinking soda"]}
        />
        <Person name="Mary" 
        age={40} 
        hobbies={["paint balling", "Planting flowrers"]} />
        
        <Person
          name="Jake"
          age={10}
          hobbies={["skateboarding", "making prank calls"]}
        />
        <Person
          name="Spongebod"
          age={8}
          hobbies={["reading", "making burgers", "eating jelly"]}
        />
      </div>
    );
  }