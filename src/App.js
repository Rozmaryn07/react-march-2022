import './App.css';
// eslint-disable-next-line no-unused-vars
import Part from "./components/part";
function App() {
  return (
    <div >
<Part
      name={'Homer'}
      pic={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
        desribtion={'Homer Jay Simpson (born May 12, 1956)[36] is the main protagonist ' +
        'of The Simpsons series (or show) ' +
        'He is the spouse of Marge Simpson and father of Bart,' +
        ' Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy,' +
        ' and often ignorant to the world around him. Although Homer has many flaws,' +
        ' he has shown to have great caring, love, and even bravery to those he cares about and, ' +
        'sometimes, even others he doesn\'t.' +
        ' He also serves as the main protagonist of the The Simpsons Movie'}
    phrase={'“D\'oh!”\n' +
        '―Homer when he makes a mistake.'}
/>
        <Part
      name={'Edna Krabappel'}
      pic={'https://static.wikia.nocookie.net/simpsons/images/7/76/Edna_Krabappel.png'}
        desribtion={'Edna had short brown hair with the most upper part being a bit puffy. She usually wore spiraling earrings, a thin green jacket with a lighter green undershirt, a dark turquoise skirt, and dark green slip-on shoes.'}
    phrase={'“These tests will have no effect on your grades. They merely determine your future social status and financial success. If any.”\n' +
        '―Edna Krabappel'}

        />
        <Part
      name={'Marjorie Jacqueline "Marge" Simpson'}
      pic={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
        desribtion={'Marge is generally a very kind-hearted and loving woman. In contrast to her husband and son, Marge hardly ever swears and, except on occasional incidents, puts greater effort into controlling her temper. Despite this, she can be protective of her family when she needs to, especially during Homer\'s "psychopath" moments. However, she cares deeply about everyone she\'s closest too as well, even her husband. On occasion, she can sometimes get explosive outbursts of anger, but admits her errors and apologizes right after - in such incidents, she is primarily always forgiven but in others, she doesn\'t.'}
    phrase={'“It\'s true. Women aren\'t very good drivers.”\n' +
        '―The Simpsons: Hit & Run'}

        />
        <Part
      name={'Santa\'s Little Helper'}
      pic={'https://static.wikia.nocookie.net/simpsons/images/2/2c/Santa%27s_Little_Helper.png'}
        desribtion={'He is a greyhound with light brown fur. His rib cage is visible possibly because of being malnourished, but this isn\'t due to any form of neglect as the Simpson family is seen feeding Santa\'s Little Helper the proper amount of food and, on some occasions, too much. Greyhounds are also this thin in real life. His paws aren\'t detailed and only appear to be legs that end at a nub. His ears are in an arched shape.'}
    phrase={'gav gav'}

        />
        <Part
      name={'Maggie Simpson'}
      pic={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
        desribtion={'Despite being the only member of the Simpson family who hasn\'t actually learned how to speak, Maggie is in no way one-dimensional and has different personality layers. She appears to be somewhat detached from the rest of her family and is once described as "the forgotten Simpson" by Homer. When she, Bart and Lisa were shipped to a foster home at the Flanders\' after their parents were deemed unfit, Maggie was the quickest to adapt and almost joined them until Marge called for her and Maggie "became a Simpson again."'}
    phrase={'“It\'s your fault I can\'t talk!”\n' +
        '―Maggie in Bart\'s nightmare and her non-canon first words in the series'}

        />

    </div>);
}

export default App;
