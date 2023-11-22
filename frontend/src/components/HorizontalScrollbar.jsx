
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Icon from '../assets/dumbbell.svg'
import { Box } from '@mui/material'
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard'



function HorizontalScrollbarTest({ data, bodyPart, setBodyPart, isBodyParts }) {

  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
                      <Box
                          key={item.id || item}
                          itemID={item.id || item}
                          title={item.id || item}
                          m="0 40px"
                          onClick={handleClick(item)}
                          selected={isItemSelected(item)
                          }
                      >
                        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        : <ExerciseCard exercise={item} />}
                      </Box>
            ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </button>
  );
}

// function Card({ onClick, selected, title, itemId }) {
//   const visibility = React.useContext(VisibilityContext);

//   return (
//     <div
//       onClick={() => onClick(visibility)}
//       className='  w-60'
//       tabIndex={0}
//     >
//       <div className="card">
//         <div>{title}</div>
//         <img className='  w-20' src={Icon} alt="dumbbell" />
//       </div>
//     </div>
//   );
// }


export default HorizontalScrollbarTest;