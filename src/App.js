import './App.css';
// eslint-disable-next-line no-unused-vars
import Part from "./components/part";
function App() {
  return (
    <div >
<Part
      id={17}
      name={'Annie'}
      image={'https://rickandmortyapi.com/api/character/avatar/17.jpeg'}
      status={'Alive'}
      gender={"Female"}
      species={"Human"}
/>
        <Part
            id={50}
            name={'Blim Blam'}
            image={'https://rickandmortyapi.com/api/character/avatar/50.jpeg'}
            status={'Alive'}
            gender={"Male"}
            species={"Alien"}
        />
        <Part
            id={50}
            name={'Anchorwoman'}
            image={'https://rickandmortyapi.com/api/character/avatar/511.jpeg'}
            status={'Alive'}
            gender={"Female"}
            species={"Human"}
        />
        <Part
            id={632}
            name={'Train Cop'}
            image={'https://rickandmortyapi.com/api/character/avatar/632.jpeg'}
            status={'Dead'}
            gender={"Male"}
            species={"Human"}
        />
        <Part
            id={650}
            name={'Crystal Dealer'}
            image={'https://rickandmortyapi.com/api/character/avatar/650.jpeg'}
            status={'Dead'}
            gender={"Male"}
            species={"Alien"}
        />
        <Part
            id={673}
            name={'Hoovy'}
            image={'https://rickandmortyapi.com/api/character/avatar/673.jpeg'}
            status={'Dead'}
            gender={"Male"}
            species={"Humanoid"}
        />


    </div>);
}

export default App;
