import React from 'react';
// import spinner from './spinner.gif';

// export default () => {
//   return (
//     <div>
//       <img
//         src={spinner}
//         style={{ width: '200px', margin: 'auto', display: 'block' }}
//         alt="Loading..." 
//       />
//     </div>
//   );
// };

const Spinner = () => {
  return (
    <div className="py-3 text-center">
      <i className="fas fa-cog fa-spin fa-2x" />
    </div>
  );
};

export default Spinner;