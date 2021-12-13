export default  Array.prototype.calculate = (logic) => {
    const output = [];
    for (let index = 0; index < radius.length; index++) {
      const element = logic(radius[index]);
      output.push(element);
    }
    return output;
  };